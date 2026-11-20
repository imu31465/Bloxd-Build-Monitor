export const id = 83;
export const ids = [83];
export const modules = {
  36584: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Lq,
      f: () => pq
    });
    var Yq = gq(57),
      lq = gq(1904),
      Oq = gq(36586),
      mq = gq.n(Oq),
      xq = gq(4367),
      Aq = gq(1876),
      cq = gq(1416),
      uq = gq(96),
      Bq = gq(114),
      Wq = gq(307),
      Nq = gq(1018),
      aq = gq.n(Nq),
      Vq = gq(24),
      dq = gq(1025),
      jq = gq(1622),
      Hq = gq(1710),
      oq = gq(1668),
      Pq = gq(1975),
      Qq = gq(1380),
      yq = gq(2059),
      tq = gq(1367),
      rq = gq(8734),
      vq = gq(36593),
      hq = gq(36619),
      nq = gq(1442),
      bq = gq(2386),
      iq = gq(1183),
      Zq = gq(36635);
    var fq = gq(9200);
    var Mq = gq(1070);
    const Tq = gq(36640),
      zq = ["enter", "t", "/"];
    let Sq = !1;

    function pq() {
      return Sq || (0, Hq.isTextEntry)(document.activeElement)
    }

    function Gq() {
      var qq, Eq;
      (0, yq.d)();
      const gq = null !== (qq = null === (Eq = (0, Qq.g)()) || void 0 === Eq ? void 0 : Eq.getBoundButton("keyboardChannel")) && void 0 !== qq ? qq : null;
      return gq ? (0, Mq.jsx)(Pq.d, {
        className: "ChatInputChannelGlyph",
        glyph: gq
      }) : null
    }

    function Lq() {
      const {
        t: qq
      } = (0, iq.v)(), {
        isTouchScreen: Eq
      } = (0, Vq.j)(["isTouchScreen"]), gq = (0, tq.q)(), [Oq, Nq] = (0, Yq.useState)(!1), Pq = (0, Yq.useRef)(Oq), Qq = (0, Yq.useRef)(null), {
        messages: yq,
        reportedPlayers: pq,
        channel: Lq
      } = (0, rq.j)(), kq = (0, Yq.useRef)(0), Rq = (0, Yq.useRef)(""), Uq = (0, Yq.useRef)(null);
      var Fq;
      Fq = Uq, (0, Yq.useEffect)((() => {
        if (!(0, uq.isIOS)()) return;
        const qq = Fq.current;
        let Eq = null;
        const gq = gq => {
            const Yq = gq.changedTouches[0];
            Eq = "none" === getComputedStyle(qq).pointerEvents ? {
              id: Yq.identifier,
              y: Yq.clientY
            } : null
          },
          Yq = gq => {
            const Yq = Eq,
              lq = Yq && (0, Zq.c)(gq.changedTouches, Yq.id);
            lq && (gq.preventDefault(), qq.scrollBy({
              top: Yq.y - lq.clientY,
              behavior: "instant"
            }), Yq.y = lq.clientY)
          };
        return qq.addEventListener("touchstart", gq, {
          passive: !0
        }), qq.addEventListener("touchmove", Yq, {
          passive: !1
        }), () => {
          qq.removeEventListener("touchstart", gq), qq.removeEventListener("touchmove", Yq)
        }
      }), [Fq]);
      const [sq, Xq] = (0, Yq.useState)(!1), [wq, Kq] = (0, Yq.useState)(!1), Cq = (0, Yq.useRef)(sq), Iq = (0, Yq.useRef)(null), eq = (0, Yq.useRef)(!1), Dq = (0, Yq.useRef)(null), qE = (0, Yq.useRef)(null), EE = (0, Yq.useRef)(null), gE = (0, Yq.useRef)(mE);
      gE.current = mE;
      const YE = (0, bq.j)();

      function lE() {
        Pq.current = !1, Nq(!1), qE.current.blur()
      }

      function OE(qq) {
        Cq.current = qq, Xq(qq)
      }

      function mE() {
        const qq = qE.current.value;
        qE.current.value = "", xE(qq)
      }

      function xE(qq) {
        (0, rq.i)(qq), kq.current = 0, OE(!1)
      }

      function AE(qq, Eq) {
        0 === kq.current && (Rq.current = qE.current.value);
        const gq = (0, rq.g)(kq.current + qq, Eq);
        kq.current = gq.stepsBack, qE.current.value = 0 === gq.stepsBack ? Rq.current : gq.text, setTimeout((() => {
          qE.current && qE.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function cE() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        Uq.current && (!qq && Cq.current || (Uq.current.scrollTop = 1e5))
      }
      return (0, xq.e)(!0, Oq, "ChatComponent"), (0, Yq.useEffect)((() => (Sq = Oq, () => {
          Sq = !1
        })), [Oq]), (0, cq.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, jq.r)() && Nq(!1)
        })), (0, Yq.useEffect)((() => {
          qE.current.addEventListener("blur", (qq => {
            if (null === qE.current) return;
            Array.from(document.querySelectorAll(":hover")).some((qq => qq.classList.contains("ChatInputChannel") || qq.classList.contains("ChatMsgSelectWrapper"))) || ((0, uq.isMobile)() && Pq.current && "" !== qE.current.value && gE.current(), Nq(!1))
          }));
          const qq = qq => {
            Qq.current.contains(qq.target) || (0, oq.j)(qq.target) || Nq(!1)
          };
          document.addEventListener("touchstart", qq, {
            capture: !0
          });
          const Eq = qq => {
            (0, hq.i)(qq.target) && (Pq.current = !1, Nq(!1))
          };
          document.addEventListener("mousedown", Eq, {
            capture: !0
          });
          const gq = () => {
              clearTimeout(Iq.current), OE(!0)
            },
            Yq = () => {
              clearTimeout(Iq.current), Iq.current = setTimeout((() => {
                OE(!1), cE()
              }), 4e3)
            },
            Oq = () => {
              document.pointerLockElement ? (Nq(!1), Kq(!0), eq.current = !1, OE(!1), cE()) : Kq(!1)
            };
          Uq.current.addEventListener("pointermove", (qq => {
            "touch" === qq.pointerType || eq.current || document.pointerLockElement || (eq.current = !0, clearTimeout(Iq.current))
          })), Uq.current.addEventListener("pointerleave", (qq => {
            "touch" !== qq.pointerType && (eq.current = !1, Cq.current && Yq())
          })), Uq.current.addEventListener("pointerdown", (qq => {
            "touch" === qq.pointerType || document.pointerLockElement || (eq.current = !0, gq())
          })), Uq.current.addEventListener("wheel", (qq => {
            document.pointerLockElement || qq.deltaY >= 0 && Math.abs(Uq.current.scrollTop) < 1 || (gq(), eq.current || (Iq.current = setTimeout((() => {
              OE(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), Uq.current.addEventListener("touchstart", gq), Uq.current.addEventListener("touchend", Yq), Uq.current.addEventListener("touchcancel", Yq), document.addEventListener("pointerlockchange", Oq);
          const xq = qq => {
            if (YE.shown && (Pq.current || ! function(qq) {
                if ((0, Hq.isTypingInInput)()) return !0;
                const Eq = document.activeElement;
                return (Eq instanceof HTMLButtonElement || "button" === (null === Eq || void 0 === Eq ? void 0 : Eq.getAttribute("role"))) && ["Enter", " "].includes(qq.key)
              }(qq)) && "codeEditor" !== Vq.b.get("openInGameMenuName") && "lobbyCodeEditor" !== Vq.b.get("openInGameMenuName") && !lq.gameBridge.latest("connectedGame").replay)
              if (Pq.current || !(0, jq.r)()) {
                if (Pq.current) {
                  if ("ArrowUp" === qq.code || "ArrowDown" === qq.code) return AE("ArrowUp" === qq.code ? 1 : -1, !1), void qq.stopPropagation();
                  if ("Tab" === qq.code) return rq.c.selectNextChannel(), qq.stopPropagation(), void qq.preventDefault();
                  if (qq.ctrlKey && Jq.includes(Tq[qq.keyCode])) return qq.preventDefault(), void qq.stopPropagation()
                }
                if ([...zq, "esc"].includes(mq()(qq)))
                  if ("esc" !== mq()(qq)) {
                    if (!Pq.current || "/" !== mq()(qq)) {
                      if ("t" === mq()(qq)) {
                        if (Pq.current) return void qq.stopPropagation();
                        qq.preventDefault()
                      }
                      Pq.current && "" !== qE.current.value && gE.current(), qq.repeat || (Pq.current || "/" === mq()(qq) && (qE.current.value = "/", qq.preventDefault()), Nq(!Pq.current))
                    }
                  } else Pq.current && (Nq(!1), qq.stopPropagation());
                else Pq.current && qq.stopPropagation()
              } else zq.includes(mq()(qq)) && (qq.preventDefault(), qq.stopPropagation(), (0, jq.d)(qq))
          };
          document.addEventListener("keydown", xq, {
            capture: !0
          });
          const Aq = Uq.current;
          let cq = !1;
          const Bq = new ResizeObserver((() => {
              cq && (cq = !1, cE())
            })),
            Wq = () => {
              cq = !0, Bq.unobserve(Aq), Bq.observe(Aq)
            };
          Dq.current = Wq;
          const aq = new MutationObserver(Wq);
          return aq.observe(Aq, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", xq, {
              capture: !0
            }), document.removeEventListener("touchstart", qq, {
              capture: !0
            }), document.removeEventListener("mousedown", Eq, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Oq), Dq.current = null, aq.disconnect(), Bq.disconnect(), clearTimeout(Iq.current)
          }
        }), []), (0, oq.o)(qE, {
          open: () => {
            Nq(!0)
          },
          close: () => {
            lE()
          },
          submit: () => {
            "" !== qE.current.value && mE(), lE()
          },
          stepHistory: () => {
            AE(1, !0)
          },
          sendLine: qq => {
            xE(qq), lE()
          },
          selectNextChannel: () => {
            rq.c.selectNextChannel()
          }
        }), (0, Yq.useEffect)((() => {
          var qq;
          (Pq.current = Oq, qE.current) && (Oq ? (kq.current = 0, qE.current.focus()) : (qE.current.blur(), null === (qq = Dq.current) || void 0 === qq || qq.call(Dq)))
        }), [Oq]),
        function(qq, Eq) {
          (0, Yq.useLayoutEffect)((() => {
            if (!Eq) return;
            fq.d.hold();
            const gq = qq.current.closest(".InGameHeaderAndChat"),
              Yq = window.visualViewport;
            let lq = "";
            const Oq = () => {
              const qq = `${Yq.offsetTop+Yq.height}px`;
              qq !== lq && (lq = qq, gq.style.setProperty("--keyboard-top", qq))
            };
            return Oq(), Yq.addEventListener("resize", Oq), Yq.addEventListener("scroll", Oq), () => {
              Yq.removeEventListener("resize", Oq), Yq.removeEventListener("scroll", Oq), gq.style.removeProperty("--keyboard-top"), fq.d.release()
            }
          }), [qq, Eq])
        }(Qq, Oq && Eq), (0, Mq.jsx)(Mq.Fragment, {
          children: (0, Mq.jsxs)("div", {
            ref: Qq,
            className: aq()("Chat", {
              Chatting: Oq
            }),
            "data-camera-keeper": Oq ? "" : void 0,
            children: [(0, Mq.jsx)("div", {
              ref: Uq,
              className: aq()("ChatMessages", {
                HideScrollbar: !sq && !Oq,
                NoScrolling: !(0, uq.isMobile)() && wq
              }),
              children: (0, Mq.jsx)(vq.d, {
                messages: yq,
                reportedPlayers: pq
              })
            }), Eq && !Oq && (0, Mq.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": qq("general:chat"),
              ...(0, nq.g)((() => {
                Nq(!0), EE.current.style.display = "flex", (0, uq.isIOS)() && qE.current.focus()
              }), "pointerup"),
              children: (0, Mq.jsx)(dq.d, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, Mq.jsxs)("div", {
              ref: EE,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Oq ? "flex" : "none")
              },
              children: [Lq && (0, Mq.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: Lq.elementBgColor
                },
                onClick: qq => {
                  rq.c.selectNextChannel(), qE.current.focus()
                },
                children: (0, Mq.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, Mq.jsx)(Aq.c, {
                    text: Lq.elementContent
                  })
                })
              }), Lq && gq && (0, Mq.jsx)(Gq, {}), (0, Mq.jsx)("input", {
                className: "ChatInput",
                maxLength: Wq.hd,
                ref: qE,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": qq("general:chat"),
                placeholder: Lq ? `${Lq.channelName} Chat${"touchOnly"===(0,Bq.d)()||gq?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Jq = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36593: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => vq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(8742),
      xq = gq(31),
      Aq = gq(2335),
      cq = gq(3466),
      uq = gq(2002),
      Bq = gq(24),
      Wq = gq(1876),
      Nq = gq(36597),
      aq = gq(2121),
      Vq = gq(36599),
      dq = gq(2548),
      jq = gq(2530),
      Hq = gq(2522),
      oq = gq(3476),
      Pq = gq(36606),
      Qq = gq(3027),
      yq = gq(1942),
      tq = gq(1070);

    function rq(qq) {
      for (let gq = qq.length - 1; gq >= 0; gq--) {
        const Yq = "string" === typeof(Eq = qq[gq]) ? Eq : "str" in Eq && "string" === typeof Eq.str ? Eq.str : "";
        if ("" !== Yq.trim()) return Yq
      }
      var Eq;
      return ""
    }

    function vq(qq) {
      let {
        messages: Eq,
        reportedPlayers: gq
      } = qq;
      return (0, tq.jsx)(tq.Fragment, {
        children: Eq.map((qq => (0, tq.jsx)(hq, {
          message: qq,
          reportedPlayers: gq
        }, qq.clientChatMsgId)))
      })
    }
    const hq = (0, Yq.memo)((function(qq) {
      var Eq;
      let {
        message: gq,
        reportedPlayers: lq
      } = qq;
      const vq = (0, Yq.useRef)(null),
        [hq] = (0, Yq.useState)(Qq.i),
        {
          author: nq
        } = gq,
        bq = null === nq || void 0 === nq ? void 0 : nq.id,
        iq = null !== (Eq = null === nq || void 0 === nq ? void 0 : nq.name) && void 0 !== Eq ? Eq : void 0,
        Zq = (0, uq.d)(iq),
        fq = null !== nq && void 0 !== nq && nq.profileEffect ? aq.e[nq.profileEffect] : void 0,
        Mq = null !== nq && !nq.local,
        Tq = null === nq && null !== gq.serverChatMsgId,
        zq = (0, yq.f)("hiddenPlayerNames", (qq => (0, Vq.f)(Mq, iq, qq))),
        Sq = null === gq.serverChatMsgId || null === nq ? null : {
          text: rq(gq.content),
          serverChatMsgId: gq.serverChatMsgId,
          authorId: nq.id
        },
        pq = Tq || null !== Sq && !lq.includes(bq),
        Gq = (0, cq.i)(Mq && null !== iq && void 0 !== iq ? iq : null),
        Lq = (0, Hq.f)(vq);
      (0, Yq.useEffect)((() => () => {
        Hq.c.closeIfOwner(vq)
      }), []);
      const Jq = () => {
          Tq ? xq.i.TV("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Hc: (0, mq.d)(gq.content),
            serverChatMsgId: gq.serverChatMsgId
          }) : null !== Sq ? xq.i.TV("OpenReportMenu", {
            playerEId: bq,
            playerName: iq,
            Hc: Sq.text,
            serverChatMsgId: Sq.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        kq = void 0 === iq ? [] : (0, oq.c)(Gq, iq, Sq);
      return (0, tq.jsxs)("div", {
        ref: vq,
        className: Oq()("MessageWrapper", {
          ChatMsgSelectWrapper: bq,
          Still: hq
        }),
        onContextMenu: zq ? qq => {
          (0, dq.c)(vq, qq, {
            ...(0, Vq.d)(bq, iq),
            showLocation: !1,
            status: null,
            extraActions: pq ? [{
              icon: "flag",
              text: "Report",
              onClick: Jq
            }] : [],
            moderationActions: (0, Pq.c)(iq),
            friendRequestSource: "chat"
          }, Bq.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: zq ? qq => {
          (0, jq.d)(qq, (() => (0, Vq.d)(bq, iq).playerSocialPreview))
        } : void 0,
        children: [fq && (0, tq.jsx)(fq, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Mq || Tq) && !Lq && (0, tq.jsx)(Nq.d, {
          className: "ChatFloatingActions",
          triggerElementRef: vq,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Jq,
            show: pq
          }, ...kq, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: qq => {
              (0, Aq.j)(iq, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: zq && "blocked" !== Gq
          }]
        }), (0, tq.jsx)(Wq.c, {
          text: gq.content,
          friendBadgeFor: Zq ? iq : void 0
        }, gq.clientChatMsgId)]
      }, gq.clientChatMsgId)
    }))
  },
  36648: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Wq,
      j: () => Bq
    });
    var Yq = gq(9277),
      lq = gq(36657),
      Oq = gq(36662),
      mq = gq(8669),
      xq = gq(1416),
      Aq = gq(57),
      cq = gq(71),
      uq = gq(1070);

    function Bq() {
      var qq;
      return (0, xq.h)(lq.c, (0, lq.l)()), (0, uq.jsx)(uq.Fragment, {
        children: null === (qq = (0, lq.l)()) || void 0 === qq ? void 0 : qq.content
      })
    }

    function Wq(qq) {
      var Eq;
      let {
        show: gq
      } = qq;
      (0, xq.h)(lq.c, (0, lq.l)());
      const cq = null === (Eq = (0, lq.l)()) || void 0 === Eq ? void 0 : Eq.menu;
      return (0, Aq.useEffect)((() => {
        var qq;
        gq || (null === cq || void 0 === cq || null === (qq = cq.onClose) || void 0 === qq || qq.call(cq), (0, Oq.m)())
      }), [gq, cq]), (0, Aq.useEffect)((() => gq ? (0, mq.i)(Oq.r, Oq.d) : void 0), [gq]), (0, uq.jsx)(Yq.b, {
        showing: gq,
        globallyUniqueKey: "clientGameMenu",
        children: null === cq || void 0 === cq ? void 0 : cq.content
      })
    }

    function Nq(qq) {
      let {
        placement: Eq = "bottom"
      } = qq;
      return (0, uq.jsx)("div", {
        id: `clientGameHud-${Eq}`,
        style: {
          display: "contents"
        }
      })
    }

    function aq(qq) {
      let {
        children: Eq,
        placement: gq = "bottom"
      } = qq;
      const [Yq, lq] = (0, Aq.useState)(null);
      return (0, Aq.useEffect)((() => {
        lq(document.getElementById(`clientGameHud-${gq}`))
      }), [gq]), Yq ? (0, cq.createPortal)(Eq, Yq) : null
    }
  },
  36944: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq,
      f: () => uq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1422),
      xq = gq(1070);
    const Aq = 200,
      cq = 160;

    function uq() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Bq(qq) {
      let {
        side: Eq,
        defaultSize: gq,
        covers: lq,
        onClose: uq,
        children: Bq
      } = qq;
      const Wq = (0, Yq.useRef)(null),
        [Nq, aq] = (0, Yq.useState)(null),
        [Vq, dq] = (0, Yq.useState)(gq);
      Vq !== gq && (dq(gq), aq(null));
      const jq = (0, Yq.useRef)(null),
        Hq = "top" === Eq,
        oq = qq => Hq ? qq.clientY : qq.clientX,
        Pq = () => {
          jq.current = null
        };
      return (0, xq.jsxs)("div", {
        ref: Wq,
        className: Oq()("ResizableSidePanel", Eq && `ResizableSidePanel-${Eq}`, {
          Covers: "always" === lq,
          CoversWhenNarrow: "narrow" === lq,
          Dragged: null !== Nq
        }),
        style: {
          [Hq ? "height" : "width"]: null !== Nq && void 0 !== Nq ? Nq : gq
        },
        children: [Bq, Eq && (0, xq.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Hq ? "horizontal" : "vertical",
          onPointerDown: qq => {
            if (0 !== qq.button) return;
            qq.preventDefault();
            const Eq = Wq.current,
              gq = Array.from(Eq.parentElement.children).reduce(((qq, gq) => gq !== Eq && "0" !== getComputedStyle(gq).flexGrow ? qq + (qq => Hq ? qq.clientHeight : qq.clientWidth)(gq) : qq), 0),
              Yq = Hq ? Eq.offsetHeight : Eq.offsetWidth,
              lq = Math.min(Aq, Yq),
              Oq = Math.max(lq, Yq + Math.max(0, gq - cq));
            jq.current = {
              start: oq(qq),
              startSize: Yq,
              minSize: lq,
              maxSize: Oq
            }, qq.currentTarget.setPointerCapture(qq.pointerId)
          },
          onPointerMove: qq => {
            const gq = jq.current;
            if (!gq) return;
            const Yq = "right" === Eq ? gq.start - qq.clientX : oq(qq) - gq.start;
            aq(Math.min(gq.maxSize, Math.max(gq.minSize, gq.startSize + Yq)))
          },
          onPointerUp: Pq,
          onPointerCancel: Pq,
          onLostPointerCapture: Pq
        }), uq && (0, xq.jsx)(mq.m, {
          className: "ResizableSidePanelClose",
          onClick: uq
        })]
      })
    }
  },
  36968: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => tq,
      d: () => oq,
      h: () => dq,
      i: () => aq,
      k: () => Nq,
      o: () => Hq,
      p: () => vq,
      q: () => Pq,
      u: () => yq,
      v: () => Qq,
      w: () => rq,
      z: () => lq
    });
    var Yq = gq(57);
    const lq = 5e3,
      Oq = 500,
      mq = 3e3;
    let xq = null,
      Aq = null,
      cq = null;
    const uq = new Set;

    function Bq(qq) {
      xq = qq;
      for (const Eq of uq) Eq()
    }

    function Wq() {
      if (!xq || void 0 !== xq.endedAt) return;
      null !== Aq && (clearTimeout(Aq), Aq = null), Bq({
        ...xq,
        endedAt: Date.now()
      });
      const qq = cq;
      cq = null, null === qq || void 0 === qq || qq()
    }

    function Nq(qq, Eq) {
      let {
        submit: gq,
        reopen: Yq
      } = Eq;
      null !== Aq && clearTimeout(Aq), cq = Yq, Bq({
        ...qq,
        startedAt: Date.now(),
        errors: []
      }), Aq = setTimeout(Wq, mq), gq()
    }

    function aq() {
      xq && void 0 === xq.endedAt && void 0 === xq.ranAt && (null !== Aq && clearTimeout(Aq), Bq({
        ...xq,
        ranAt: Date.now()
      }), Aq = setTimeout(Wq, lq))
    }
    const Vq = 3;

    function dq(qq) {
      if (!xq || void 0 === xq.ranAt || void 0 !== xq.endedAt || xq.errors.includes(qq) || xq.errors.length >= Vq) return;
      const Eq = 0 === xq.errors.length;
      Bq({
        ...xq,
        errors: [...xq.errors, qq]
      }), Eq && (null !== Aq && clearTimeout(Aq), Aq = setTimeout(Wq, Oq))
    }

    function jq(qq) {
      var Eq;
      return (null === (Eq = xq) || void 0 === Eq ? void 0 : Eq.chatKey) === qq ? xq : null
    }

    function Hq(qq) {
      const Eq = jq(qq);
      return Eq && void 0 !== Eq.endedAt ? (Bq(null), Eq) : null
    }

    function oq(qq) {
      var Eq;
      (null === (Eq = xq) || void 0 === Eq ? void 0 : Eq.chatKey) === qq && (null !== Aq && (clearTimeout(Aq), Aq = null), cq = null, Bq(null))
    }
    const Pq = "These changes from your last answer didn't go in. Make them again.";

    function Qq(qq) {
      const Eq = [...new Set(qq)].slice(0, Vq);
      return `Fix this in your change: when it ran, the world showed ${1===Eq.length?"this error":"these errors"}: ${Eq.join(" ")}`
    }

    function yq(qq) {
      return `Your change didn't go in, because the code wouldn't run at all: ${qq.join(" ")} Send the whole change again with that fixed.`
    }

    function tq(qq) {
      return `Fix this in your change: ${qq.join(" ")}`
    }

    function rq(qq) {
      var Eq;
      if (void 0 === qq.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const gq = Math.max(1, Math.round(((null !== (Eq = qq.endedAt) && void 0 !== Eq ? Eq : qq.ranAt) - qq.ranAt) / 1e3)),
        Yq = `Your change ran in your world for ${gq} ${1===gq?"second":"seconds"}`;
      return 0 === qq.errors.length ? {
        title: "Tested: no errors",
        text: `${Yq} without an error.`
      } : {
        title: 1 === qq.errors.length ? "Tested: it showed an error" : `Tested: it showed ${qq.errors.length} errors`,
        text: `${Yq} and showed: ${qq.errors.join(" ")}`
      }
    }

    function vq(qq) {
      const [Eq, gq] = (0, Yq.useState)((() => jq(qq)));
      return (0, Yq.useEffect)((() => {
        const Eq = () => {
          gq(jq(qq))
        };
        return Eq(), uq.add(Eq), () => {
          uq.delete(Eq)
        }
      }), [qq]), Eq
    }
  },
  36971: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Yq
    });
    const Yq = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function lq(qq, Eq, gq) {
      return {
        key: qq,
        label: `Code block at ${Eq.join(", ")}`,
        codeBlock: !0,
        pos: Eq,
        canChangePos: gq
      }
    }
  },
  36962: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      f: () => Oq,
      h: () => mq,
      l: () => lq
    });
    const Yq = "code block",
      lq = "World Code/";

    function Oq(qq) {
      return qq.trim().toLowerCase().startsWith(lq.toLowerCase())
    }

    function mq(qq) {
      return qq.trim().slice(lq.length).replace(/^\.?\//, "")
    }
  },
  36929: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      e: () => cq,
      h: () => xq,
      j: () => uq
    });
    var Yq = gq(57),
      lq = gq(38),
      Oq = gq(96);
    class mq {
      constructor(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = qq, this.defaultValue = Eq, this.canChange = gq, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const qq = lq.i.getItem(this.storageKey);
            this.value = "boolean" === typeof qq ? qq : this.defaultValue
          }
          return this.value
        }, this.set = qq => {
          this.value = qq, lq.i.setItem(this.storageKey, qq);
          for (const Eq of this.listeners) Eq(qq)
        }
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
    }
    const xq = new mq("codeEditorLightMode", !1),
      Aq = new mq("codeEditorAiHints", !0),
      cq = new mq("codeEditorAiKeySafetyCheck", !0, Oq.featureFlags.isOwnTopLevelSite);

    function uq(qq) {
      const [Eq, gq] = (0, Yq.useState)(qq.get);
      return (0, Yq.useEffect)((() => {
        const Eq = qq.subscribe(gq);
        return gq(qq.get()), Eq
      }), [qq]), [Eq, qq.set]
    }
  },
  36922: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => hq,
      E: () => Wq,
      F: () => Mq,
      J: () => rq,
      L: () => vq,
      O: () => fq,
      d: () => aq,
      g: () => Aq,
      j: () => Vq,
      k: () => nq,
      o: () => xq,
      s: () => uq,
      u: () => Nq,
      v: () => dq,
      x: () => Pq,
      z: () => bq
    });
    var Yq = gq(36912),
      lq = gq(36914);
    const Oq = "bloxd-world-code-directory-sync",
      mq = "handles",
      xq = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Aq(qq, Eq) {
      return `${qq}::${Eq}`
    }
    const cq = new Set(["node_modules", ".git"]);

    function uq() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Bq() {
      return new Promise(((qq, Eq) => {
        const gq = indexedDB.open(Oq, 1);
        gq.onupgradeneeded = () => {
          const qq = gq.result;
          qq.objectStoreNames.contains(mq) || qq.createObjectStore(mq)
        }, gq.onsuccess = () => {
          qq(gq.result)
        }, gq.onerror = () => {
          var qq;
          Eq(null !== (qq = gq.error) && void 0 !== qq ? qq : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Wq(qq, Eq) {
      const gq = await Bq();
      try {
        await new Promise(((Yq, lq) => {
          const Oq = gq.transaction(mq, "readwrite");
          Oq.objectStore(mq).put(Eq, qq), Oq.oncomplete = () => {
            Yq()
          }, Oq.onerror = () => {
            var qq;
            lq(null !== (qq = Oq.error) && void 0 !== qq ? qq : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        gq.close()
      }
    }
    async function Nq(qq) {
      const Eq = await Bq();
      try {
        return await new Promise(((gq, Yq) => {
          const lq = Eq.transaction(mq, "readonly").objectStore(mq).get(qq);
          lq.onsuccess = () => {
            var qq;
            gq(null !== (qq = lq.result) && void 0 !== qq ? qq : null)
          }, lq.onerror = () => {
            var qq;
            Yq(null !== (qq = lq.error) && void 0 !== qq ? qq : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        Eq.close()
      }
    }
    async function aq(qq) {
      const Eq = await Bq();
      try {
        await new Promise(((gq, Yq) => {
          const lq = Eq.transaction(mq, "readwrite");
          lq.objectStore(mq).delete(qq), lq.oncomplete = () => {
            gq()
          }, lq.onerror = () => {
            var qq;
            Yq(null !== (qq = lq.error) && void 0 !== qq ? qq : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        Eq.close()
      }
    }
    async function Vq(qq) {
      const Eq = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await qq.queryPermission(Eq) || "granted" === await qq.requestPermission(Eq)
    }
    async function dq(qq) {
      if (!uq()) return null;
      try {
        const Eq = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Wq(qq, Eq), Eq
      } catch (Eq) {
        if (function(qq) {
            return qq instanceof DOMException && "AbortError" === qq.name
          }(Eq)) return null;
        throw Eq
      }
    }

    function jq(qq) {
      return qq.startsWith(".") || cq.has(qq)
    }

    function Hq(qq) {
      if (!qq) return !0;
      const Eq = qq.split("/");
      for (const gq of Eq)
        if ("" === gq || "." === gq || ".." === gq) return !1;
      return !0
    }
    async function oq(qq, Eq, gq) {
      for await (const [Oq, mq] of qq.entries()) {
        if ("directory" === mq.kind) {
          if (jq(Oq)) continue;
          const qq = Eq ? `${Eq}/${Oq}` : Oq;
          if (!Hq(qq)) continue;
          await oq(mq, qq, gq);
          continue
        }
        const qq = Eq ? `${Eq}/${Oq}` : Oq;
        if (!(0, Yq.o)(qq) && !(0, lq.d)(qq)) continue;
        const xq = await mq.getFile();
        gq[qq] = (0, lq.d)(qq) ? await iq(xq) : await xq.text()
      }
    }
    async function Pq(qq) {
      const Eq = {};
      return await oq(qq, "", Eq), Eq
    }

    function Qq(qq) {
      return !(!qq || qq !== qq.trim() || qq.startsWith("/") || qq.includes("\\") || qq.includes("\0")) && Hq(qq)
    }
    async function yq(qq, Eq, gq) {
      const Yq = Eq.split("/"),
        lq = Yq[Yq.length - 1];
      let Oq = qq;
      for (let mq = 0; mq < Yq.length - 1; mq++) Oq = await Oq.getDirectoryHandle(Yq[mq], {
        create: gq
      });
      return {
        dir: Oq,
        fileName: lq
      }
    }
    async function tq(qq, Eq, gq) {
      if (!Qq(Eq)) throw new Error(`Refusing to write unsafe path: ${Eq}`);
      const {
        dir: Yq,
        fileName: lq
      } = await yq(qq, Eq, !0), Oq = await Yq.getFileHandle(lq, {
        create: !0
      }), mq = await Oq.createWritable();
      await mq.write(gq), await mq.close()
    }
    async function rq(qq, Eq, gq) {
      const Yq = await async function(qq, Eq) {
        if (!Qq(Eq)) return null;
        try {
          const {
            dir: gq,
            fileName: Yq
          } = await yq(qq, Eq, !1), lq = await gq.getFileHandle(Yq), Oq = await lq.getFile();
          return await Oq.text()
        } catch (gq) {
          if (gq instanceof DOMException && ("NotFoundError" === gq.name || "NotAllowedError" === gq.name)) return null;
          throw gq
        }
      }(qq, Eq);
      Yq !== gq && await tq(qq, Eq, gq)
    }
    async function vq(qq, Eq, gq) {
      if (!(0, Yq.o)(Eq) && !(0, lq.d)(Eq)) throw new Error(`Refusing to write non-allowlisted path: ${Eq}`);
      if ((0, lq.d)(Eq)) {
        if (await Zq(qq, Eq) === xq) throw new Error(`Move the binary schematic ${Eq} outside the linked folder before syncing its placeholder`)
      }
      await tq(qq, Eq, gq)
    }
    async function hq(qq, Eq) {
      if (!Qq(Eq)) throw new Error(`Refusing to remove unsafe path: ${Eq}`);
      try {
        const {
          dir: gq,
          fileName: Yq
        } = await yq(qq, Eq, !1);
        await gq.removeEntry(Yq)
      } catch (gq) {
        if (gq instanceof DOMException && ("NotFoundError" === gq.name || "NotAllowedError" === gq.name)) return;
        throw gq
      }
    }
    async function nq(qq, Eq) {
      if (!Qq(Eq)) return null;
      try {
        const gq = Eq.split("/");
        let Yq = qq;
        for (const qq of gq) Yq = await Yq.getDirectoryHandle(qq);
        return Yq
      } catch (gq) {
        if (gq instanceof DOMException && ("NotFoundError" === gq.name || "NotAllowedError" === gq.name)) return null;
        throw gq
      }
    }
    async function bq(qq, Eq) {
      if ((0, Yq.o)(Eq) || (0, lq.d)(Eq)) {
        if ((0, lq.d)(Eq)) {
          if (await Zq(qq, Eq) === xq) throw new Error(`Refusing to remove a binary schematic: ${Eq}`)
        }
        await hq(qq, Eq)
      }
    }
    async function iq(qq) {
      if (qq.size > 64) return xq;
      const Eq = await qq.text();
      return Array.from(Eq).some((qq => {
        const Eq = qq.charCodeAt(0);
        return Eq < 9 || Eq > 13 && Eq < 32 || 65533 === Eq
      })) ? xq : Eq
    }
    async function Zq(qq, Eq) {
      try {
        const {
          dir: gq,
          fileName: Yq
        } = await yq(qq, Eq, !1);
        return await iq(await (await gq.getFileHandle(Yq)).getFile())
      } catch (gq) {
        if (gq instanceof DOMException && "NotFoundError" === gq.name) return null;
        throw gq
      }
    }
    async function fq(qq, Eq) {
      const gq = await Pq(qq);
      for (const Yq of Object.keys(gq)) Yq in Eq || (0, lq.d)(Yq) || await bq(qq, Yq);
      for (const [Oq, mq] of Object.entries(Eq))((0, Yq.o)(Oq) || (0, lq.d)(Oq)) && await vq(qq, Oq, mq)
    }

    function Mq(qq, Eq) {
      var gq, Yq;
      let lq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Oq = null !== (gq = lq.debounceMs) && void 0 !== gq ? gq : 300,
        mq = null !== (Yq = lq.pollMs) && void 0 !== Yq ? Yq : 1e3;
      let xq = !1,
        Aq = null,
        cq = null,
        uq = null;
      const Bq = () => {
          xq || (Aq && clearTimeout(Aq), Aq = setTimeout((() => {
            Aq = null, Wq()
          }), Oq))
        },
        Wq = async () => {
          if (!xq) try {
            if (!await Vq(qq, "readwrite")) return;
            const gq = await Pq(qq);
            xq || Eq(gq)
          } catch (gq) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", gq)
          }
        };
      Wq();
      const Nq = window.FileSystemObserver;
      if (Nq) try {
        uq = new Nq((() => {
          Bq()
        })), uq.observe(qq, {
          recursive: !0
        })
      } catch (aq) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", aq), uq = null
      }
      return uq || (cq = setInterval((() => {
        Bq()
      }), mq)), () => {
        xq = !0, Aq && clearTimeout(Aq), cq && clearInterval(cq), uq && uq.disconnect()
      }
    }
  },
  4648: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => dq,
      g: () => jq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(1183),
      xq = gq(4656),
      Aq = gq(1876),
      cq = gq(2383),
      uq = gq(4662),
      Bq = gq(1070);
    const Wq = new WeakMap;
    let Nq = 0;

    function aq(qq) {
      let Eq = Wq.get(qq);
      return void 0 === Eq && (Eq = Nq++, Wq.set(qq, Eq)), Eq
    }

    function Vq(qq) {
      let {
        piece: Eq
      } = qq;
      return "space" === Eq.kind ? (0, Bq.jsx)(Bq.Fragment, {
        children: Eq.text
      }) : (0, Bq.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Eq.delayMs}ms`
        },
        children: (0, Bq.jsx)(xq.e, {
          text: "icon" === Eq.kind ? `[[${Eq.icon}]]` : Eq.text
        })
      })
    }

    function dq(qq) {
      let {
        display: Eq
      } = qq;
      const {
        selectedLanguage: gq
      } = (0, mq.v)(), Yq = (0, Oq.useMemo)((() => (0, uq.b)((0, uq.f)(Eq).plan.pieces)), [Eq, gq.code]);
      return (0, Bq.jsxs)("div", {
        className: lq()("Dialogue", {
          DialogueAnimateIn: !1 !== Eq.animateIn
        }),
        children: [Eq.speakerName && (0, Bq.jsx)(Aq.c, {
          text: Eq.speakerName,
          className: "DialogueSpeaker"
        }), (0, Bq.jsx)("p", {
          className: "DialogueLine",
          children: Yq.map(((qq, Eq) => 1 === qq.length && "space" === qq[0].kind ? qq[0].text : (0, Bq.jsx)("span", {
            className: "DialogueGlue",
            children: qq.map(((qq, Eq) => (0, Bq.jsx)(Vq, {
              piece: qq
            }, Eq)))
          }, Eq)))
        })]
      })
    }
    const jq = (0, Oq.memo)((function() {
      const qq = (0, cq.h)("dialogue");
      return (0, Bq.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: qq && (0, Bq.jsx)(dq, {
          display: qq
        }, aq(qq))
      })
    }))
  },
  36734: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Vq,
      e: () => dq
    });
    var Yq = gq(57),
      lq = gq(1416),
      Oq = gq(1942),
      mq = gq(36681),
      xq = gq(598),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(1070);
    const Bq = [Wq()];

    function Wq() {
      return {
        source: null,
        direction: null,
        mF: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Nq(qq) {
      return Bq.find((Eq => null !== Eq.source && Eq.source === qq))
    }

    function aq(qq) {
      clearTimeout(qq.timeout), qq.source = null, qq.direction = null, qq.writtenAngle = null, qq.mF && (qq.mF.style.rotate = "")
    }
    const Vq = (0, Yq.memo)((function() {
      const [, qq] = (0, Yq.useReducer)((qq => qq + 1), 0);
      return (0, lq.f)("damagedByOtherPlayer", (Eq => {
        let {
          jY: gq,
          direction: Yq
        } = Eq;
        const lq = gq || "nonDirectional",
          Oq = function(qq) {
            var Eq;
            const gq = null !== (Eq = Nq(qq)) && void 0 !== Eq ? Eq : Bq.find((qq => null === qq.source));
            if (gq) return gq;
            const Yq = {
              source: null,
              direction: null,
              mF: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Bq.push(Yq), Yq
          }(lq);
        clearTimeout(Oq.timeout), Oq.source = lq, Oq.direction = Yq, Oq.timeout = setTimeout((() => {
          aq(Oq), qq()
        }), 800), qq()
      })), (0, Oq.d)("kill", (Eq => {
        let {
          killer: gq,
          victim: Yq
        } = Eq;
        const lq = gq.local && Nq(Yq.id);
        lq && (aq(lq), qq())
      })), (0, Yq.useEffect)((() => {
        const qq = (0, mq.h)("turnDamageIndicators", dq);
        return () => {
          qq(), Bq.forEach(aq)
        }
      }), []), (0, uq.jsx)("div", {
        className: "DirectionalDamage",
        children: Bq.map(((qq, Eq) => (0, uq.jsx)("div", {
          ref: Eq => {
            qq.mF = Eq
          },
          className: cq()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, xq.H)(qq.direction),
            DamageIndicatorIdle: null === qq.source
          })
        }, Eq)))
      })
    }));

    function dq(qq) {
      for (const Eq of Bq) {
        if (null === Eq.source || (0, xq.H)(Eq.direction)) continue;
        const gq = Eq.direction - qq;
        gq !== Eq.writtenAngle && (Eq.writtenAngle = gq, Eq.mF.style.rotate = `${gq}rad`)
      }
    }
  },
  36597: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => dq
    });
    var Yq = gq(57),
      lq = gq(71),
      Oq = gq(1183),
      mq = gq(1018),
      xq = gq.n(mq),
      Aq = gq(1710),
      cq = gq(1025),
      uq = gq(1267),
      Bq = gq(1448),
      Wq = gq(1646),
      Nq = gq(1442),
      aq = gq(1070);
    const Vq = 14;

    function dq(qq) {
      let {
        className: Eq,
        triggerElementRef: gq,
        options: mq
      } = qq;
      const {
        t: dq
      } = (0, Oq.v)(), [jq, Hq] = (0, Yq.useState)(!1), [oq, Pq] = (0, Yq.useState)({
        x: 0,
        y: 0
      }), Qq = (0, Yq.useRef)(null);
      (0, Yq.useEffect)((() => {
        let qq = null;
        const Eq = Eq => {
            qq = {
              x: Eq.clientX,
              y: Eq.clientY
            }
          },
          Yq = Eq => {
            if (null === qq || !(0, Nq.e)(qq, Eq)) return;
            qq = null;
            const gq = Vq * (0, Aq.getRemInPx)();
            Pq({
              x: Math.min(Eq.clientX, window.innerWidth - gq - 5),
              y: Eq.clientY
            }), Hq((qq => !qq))
          },
          lq = qq => {
            var Eq;
            null !== (Eq = Qq.current) && void 0 !== Eq && Eq.contains(qq.relatedTarget) || Hq(!1)
          },
          Oq = gq.current;
        return Oq.addEventListener("pointerdown", Eq), Oq.addEventListener("pointerup", Yq), Oq.addEventListener("mouseleave", lq), () => {
          Oq.removeEventListener("pointerdown", Eq), Oq.removeEventListener("pointerup", Yq), Oq.removeEventListener("mouseleave", lq)
        }
      }), [gq]), (0, Yq.useEffect)((() => {
        if (jq) return (0, Wq.e)("pointerdown", (qq => {
          !Qq.current || Qq.current.contains(qq.target) || gq.current.contains(qq.target) || Hq(!1)
        }))
      }), [jq, gq]), (0, Yq.useLayoutEffect)((() => {
        if (!jq || !Qq.current) return;
        const qq = Qq.current.getBoundingClientRect().height,
          Eq = Math.max(5, window.innerHeight - qq - 5);
        oq.y > Eq && Pq({
          x: oq.x,
          y: Eq
        })
      }), [jq, oq]), (0, uq.w)("popup", Qq, (() => {
        Hq(!1)
      }), jq);
      const yq = mq.filter((qq => !1 !== qq.show));
      return jq && 0 !== yq.length ? (0, lq.createPortal)((0, aq.jsx)("div", {
        ref: Qq,
        className: xq()("FloatingActions", {
          [Eq]: Eq
        }),
        style: {
          width: `${Vq}rem`,
          top: oq.y,
          left: oq.x
        },
        children: yq.map((qq => {
          let {
            icon: Eq,
            text: gq,
            onPointerDown: Yq,
            analyticsClick: lq
          } = qq;
          return (0, aq.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: qq => {
              void 0 !== lq && (0, Bq.reportAnalyticsClick)(lq), Yq(qq), Hq(!1), qq.stopPropagation()
            },
            children: [(0, aq.jsx)(cq.d, {
              name: Eq
            }), (0, aq.jsx)("div", {
              children: dq(gq)
            })]
          }, gq)
        }))
      }), function() {
        var qq;
        return null !== (qq = document.querySelector(".WholeAppWrapperInner")) && void 0 !== qq ? qq : document.body
      }()) : null
    }
  },
  36742: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => DO
    });
    var Yq = gq(36648),
      lq = gq(57),
      Oq = gq(2054),
      mq = gq(4359),
      xq = gq(4364),
      Aq = gq(2383),
      cq = gq(1904),
      uq = gq(1070);

    function Bq(qq) {
      let {
        className: Eq,
        style: gq,
        vw: Yq,
        maxPx: lq,
        children: Oq
      } = qq;
      console.assert("number" === typeof Yq && "number" === typeof lq, "vw and maxPx passed to Text must be numbers");
      const mq = window.innerWidth * (Yq / 100) > lq ? `${lq}px` : `${Yq}vw`;
      return (0, uq.jsx)("div", {
        className: Eq,
        style: {
          ...gq,
          fontSize: mq
        },
        children: Oq
      })
    }
    var Wq = gq(36744),
      Nq = gq(1422),
      aq = gq(31),
      Vq = gq(1926),
      dq = gq(1025);

    function jq(qq) {
      let {
        tasks: Eq,
        lastDisplayedTasks: gq
      } = qq;
      return (0, uq.jsx)(uq.Fragment, {
        children: Object.keys(Eq).map((qq => (0, uq.jsx)(Hq, {
          task: Eq[qq],
          lastDisplayedAs: gq[qq]
        }, Eq[qq].text)))
      })
    }

    function Hq(qq) {
      let {
        task: Eq,
        lastDisplayedAs: gq
      } = qq;
      const [Yq, Oq] = (0, lq.useState)(null !== gq && void 0 !== gq && gq.progress ? gq.progress / Eq.goal : 0), [mq, xq] = (0, lq.useState)(!1), [Aq, cq] = (0, lq.useState)(Eq.claimed || !1);
      return (0, lq.useEffect)((() => {
        Oq(Eq.progress / Eq.goal)
      }), [Eq.progress, Eq.goal]), Aq ? null : (0, uq.jsxs)("div", {
        className: "Task",
        children: [(0, uq.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, uq.jsx)(Bq, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: Eq.text
          })
        }), Eq.progress < Eq.goal ? (0, uq.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Yq ? (0, uq.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Yq + "%"
            }
          }) : null, (0, uq.jsx)("div", {
            className: "TaskProgressText",
            children: `${Eq.progress}/${Eq.goal}`
          })]
        }) : (0, uq.jsx)(Nq.p, {
          className: "ClaimRewardButton",
          onClick: () => {
            xq(!0)
          },
          children: (0, uq.jsx)(Bq, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), mq ? (0, uq.jsx)(oq, {
          task: Eq,
          close: () => {
            Eq.claimed = !0, cq(!0), xq(!1)
          }
        }) : null]
      })
    }

    function oq(qq) {
      let {
        task: Eq,
        close: gq
      } = qq;
      const [Yq, Oq] = (0, lq.useState)({}), [mq, xq] = (0, lq.useState)("closed");
      (0, lq.useEffect)((() => {
        let qq;
        return "animStart" === mq && (qq = setTimeout((() => {
          xq("animEnd")
        }), 700)), () => {
          clearTimeout(qq)
        }
      }), [mq]), (0, Wq.b)((() => {
        cq.gameBridge.send("completeTask", Eq.text)
      }));
      const Bq = (0, Aq.h)("currencyAmounts");
      return (0, uq.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === mq)
            if (0 === Eq.rewards.length) gq(), cq.gameBridge.send("completeTask", Eq.text);
            else {
              const qq = {
                ...Vq.c.get("currencyAmounts")
              };
              for (const Eq in Yq) qq[Eq] = {
                ...qq[Eq],
                amount: qq[Eq].amount + Yq[Eq]
              };
              Vq.c.apply({
                currencyAmounts: qq
              }), xq("closed")
            }
          else "closed" === mq && (Oq(Eq.rewards.pop()), xq("animStart"))
        },
        children: [(0, uq.jsx)("img", {
          className: "Chest",
          alt: "closed" !== mq ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==mq?"open":"closed"}.png`
        }), (0, uq.jsx)("div", {
          className: "Rewards",
          children: "closed" !== mq ? Object.keys(Yq).map((qq => {
            const Eq = null === Bq || void 0 === Bq ? void 0 : Bq[qq];
            return !Eq || Eq.hidden ? null : (0, uq.jsxs)("div", {
              className: "Reward",
              children: [(0, uq.jsx)(dq.d, {
                name: Eq.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: Eq.iconColour
                }
              }), (0, uq.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === mq ? 0 : Yq[qq]
              })]
            }, qq)
          })) : null
        }), "animStart" === mq ? (0, uq.jsx)(Pq, {}) : null, (0, uq.jsx)("div", {
          className: "ChestsLeft",
          children: Eq.rewards.length
        })]
      })
    }

    function Pq() {
      const [qq, Eq] = (0, lq.useState)(0);
      (0, lq.useEffect)((() => {
        Eq(1)
      }), []);
      return (0, uq.jsx)(uq.Fragment, {
        children: Array.from({
          length: 40
        }).map(((Eq, gq) => (0, uq.jsx)(dq.d, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * qq * Math.cos(gq / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * qq * Math.sin(gq / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === qq ? 1 : 0
          }
        }, gq)))
      })
    }
    aq.i.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const qq = new Image,
          Eq = new Image;
        qq.src = "/textures/miscImages/Treasure Chest open.png", Eq.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Qq = gq(3040),
      yq = gq(1101),
      tq = gq(1876),
      rq = gq(1416),
      vq = gq(307),
      hq = gq(1942),
      nq = gq(1326);

    function bq(qq) {
      var Eq, gq;
      let {
        byId: Yq,
        localId: lq
      } = qq;
      return null === lq ? null : null !== (Eq = null === (gq = Yq[lq]) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : null
    }

    function iq(qq) {
      let {
        lbStats: Eq,
        storedState: gq = {}
      } = qq;
      const {
        userContext: Yq
      } = (0, yq.c)(), Oq = (0, hq.f)("players", bq), [mq, xq] = (0, lq.useState)(gq.selectedCat || (null === Eq || void 0 === Eq ? void 0 : Eq[0]) || null), [Aq, Bq] = (0, lq.useState)(gq.selectedTimeframe || "Today"), [Wq, Nq] = (0, lq.useState)(null);
      (0, lq.useEffect)((() => {
        null === mq && null !== Eq && Eq.length > 0 && xq(Eq[0])
      }), [Eq, mq]);
      const [aq, Vq] = (0, lq.useState)(gq.seeingTop || !1), [dq, jq] = (0, lq.useState)(!1), Hq = (0, lq.useCallback)((() => {
        null !== mq && null !== Aq && (cq.gameBridge.send("requestLeaderboard", {
          category: mq.value,
          timeframe: Aq,
          seeTop: aq
        }), Pq(!0), Mq && Tq(null))
      }), [mq, Aq, gq, aq]);
      (0, lq.useEffect)((() => {
        Hq(), gq.selectedCat = mq, gq.selectedTimeframe = Aq, gq.seeingTop = aq
      }), [mq, Aq, gq, aq, Hq]), (0, lq.useEffect)((() => {
        if ((null === Wq || void 0 === Wq ? void 0 : Wq.length) > 0)
          if (aq) aq && jq(null === iq(Wq));
          else {
            for (const qq of Wq)
              if (1 === qq.place) return void jq(!1);
            jq(!0)
          }
      }), [Wq, aq]), (0, rq.f)("leaderboardResponse", (qq => {
        let {
          category: gq,
          timeframe: Yq,
          data: lq
        } = qq;
        for (let Oq = 0; Oq < Eq; Oq++)
          if (Eq[Oq].value === gq) {
            xq(Eq[Oq]);
            break
          } Bq(Yq), Nq(lq), Pq(!1)
      }));
      const [oq, Pq] = (0, lq.useState)(!0);

      function iq(qq) {
        const Eq = bq(cq.gameBridge.latest("players"));
        for (let gq = 0; gq < qq.length; gq++)
          if (qq[gq].name === Eq) return qq[gq].place;
        return null
      }
      const [Zq, fq] = (0, lq.useState)(!1), [Mq, Tq] = (0, lq.useState)(null);
      (0, lq.useEffect)((() => {
        if (Wq && !Zq) {
          const qq = iq(Wq);
          qq < (gq.lastSeenPlayerPlace || 0) && Tq(gq.lastSeenPlayerPlace - qq), fq(!0)
        }
      }), [Wq, gq, Zq]), (0, lq.useEffect)((() => () => {
        Wq && (gq.lastSeenPlayerPlace = iq(Wq))
      }), [Wq, gq]);
      const zq = (0, lq.useRef)(null),
        [Sq, pq] = (0, lq.useState)(void 0);
      return (0, lq.useEffect)((() => {
        var qq, Eq;
        Sq !== (null === (qq = zq.current) || void 0 === qq ? void 0 : qq.offsetHeight) && pq(null === (Eq = zq.current) || void 0 === Eq ? void 0 : Eq.offsetHeight)
      })), Yq.isLoggedIn() ? (0, uq.jsxs)(uq.Fragment, {
        children: [(0, uq.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, uq.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, uq.jsx)(Qq.d, {
              options: Eq.map((qq => ({
                label: qq.label,
                value: qq.value
              }))),
              value: mq,
              onChange: qq => {
                xq(qq)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, uq.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, uq.jsx)(Qq.d, {
              options: vq.Xc.map((qq => ({
                value: qq,
                label: qq,
                className: "LBDropdownMenuItem"
              }))),
              value: Aq,
              onChange: qq => {
                Bq(qq.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), dq ? (0, uq.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Vq(!aq)
            },
            children: aq ? "See Yourself" : "See Top"
          }) : null]
        }), (0, uq.jsx)("div", {
          className: "LBTableWrapper",
          children: oq ? (0, uq.jsx)("div", {
            className: "LoaderContainer",
            children: (0, uq.jsx)(nq.e, {})
          }) : null === Mq ? (0, uq.jsx)(uq.Fragment, {
            children: (0, uq.jsxs)("table", {
              className: "LBTable",
              children: [(0, uq.jsx)("thead", {
                className: "LBTableTHead",
                ref: zq,
                children: (0, uq.jsxs)("tr", {
                  children: [(0, uq.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, uq.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, uq.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: mq.label.toUpperCase()
                  })]
                })
              }), (0, uq.jsx)("tbody", {
                children: Wq.map((qq => (0, uq.jsxs)("tr", {
                  className: "LBTableTR " + (qq.name === Oq ? "LBTableTRYou" : ""),
                  children: [(0, uq.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${qq.place}`
                  }), (0, uq.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, uq.jsx)(tq.c, {
                      text: [{
                        entityName: qq.name
                      }]
                    })
                  }), (0, uq.jsx)("td", {
                    className: "LBTableTD",
                    children: qq.stat
                  })]
                }, qq.name)))
              })]
            })
          }) : (0, uq.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Tq(null)
            },
            children: (0, uq.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, uq.jsx)("div", {
                className: "TriangleUp"
              }), (0, uq.jsx)("div", {
                className: "LBIncreaseText",
                children: `${Mq} Place${Mq>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, uq.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, uq.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, uq.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Zq = gq(3018),
      fq = gq(96),
      Mq = gq(38),
      Tq = gq(3286);
    const zq = (0, lq.memo)((function(qq) {
      let {
        show: Eq,
        onClose: gq
      } = qq;
      (0, Zq.b)();
      const Yq = (0, Aq.h)("_tasks"),
        Oq = (0, Aq.h)("_availableLeaderboards"),
        [cq, Bq] = (0, lq.useState)({});
      Yq && Object.keys(Yq).length > 0 && 0 === Object.keys(cq).length && Bq(Yq);
      const [Wq] = (0, lq.useState)({
        tasks: {},
        leaderboard: {}
      }), Nq = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Yq && Object.keys(Yq).length > 0,
          content: (0, uq.jsx)(jq, {
            tasks: Yq,
            lastDisplayedTasks: cq
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Oq || void 0 === Oq ? void 0 : Oq.length) > 0,
          content: (0, uq.jsx)(iq, {
            lbStats: Oq,
            storedState: Wq.leaderboard
          })
        }
      };

      function aq() {
        for (const qq in Nq)
          if (Nq[qq].getIsDefined()) return qq;
        return null
      }
      const [Vq, dq] = (0, lq.useState)(aq());

      function Hq() {
        Bq({
          ...Yq
        }), gq()
      }(0, lq.useEffect)((() => {
        Vq || dq(aq())
      }), [aq()]), (0, xq.d)(!0, Vq && Eq), (0, lq.useEffect)((() => {
        Eq && !Vq && (console.log("CLOSE"), Hq())
      }), [Eq, Vq]);
      const [oq, Pq] = (0, lq.useState)(!1);
      return (0, lq.useEffect)((() => {
        Eq && Vq && !oq && Pq(!0)
      }), [Eq, oq, Vq]), (0, lq.useEffect)((() => {
        !oq && Yq && "tasks" !== Vq && dq("tasks")
      }), [oq, Yq, Vq]), (0, uq.jsx)(uq.Fragment, {
        children: Vq ? (0, uq.jsx)(Tq.d, {
          className: "RetentionFeaturesWrapper",
          show: Eq,
          children: (0, uq.jsxs)(mq.c, {
            close: Hq,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, uq.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, uq.jsx)(pq, {}), (0, uq.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, uq.jsx)(Sq, {
                  setCategory: dq,
                  menuCategories: Nq,
                  selectedCat: Vq
                }), (0, uq.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Nq[Vq].content
                })]
              })]
            }), (0, uq.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: fq.featureFlags.useDiscord && (0, uq.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, uq.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, uq.jsx)(Gq, {
                    tasks: Yq
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Sq(qq) {
      let {
        selectedCat: Eq,
        setCategory: gq,
        menuCategories: Yq
      } = qq;
      return (0, uq.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Yq).map((qq => Yq[qq].getIsDefined() ? (0, uq.jsx)("div", {
          className: "MenuHeaderCategory " + (qq === Eq ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            gq(qq)
          },
          children: Yq[qq].Title
        }, qq) : null))
      })
    }

    function pq() {
      const qq = (0, Aq.h)("currencyAmounts");
      return (0, uq.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== qq && void 0 !== qq ? qq : {}).map((Eq => {
          const gq = qq[Eq];
          return gq.hidden ? null : (0, uq.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, uq.jsx)(dq.d, {
              name: gq.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: gq.iconColour
              }
            }), (0, uq.jsx)("div", {
              className: "UiCurrencyAmount",
              children: gq.amount
            })]
          }, Eq)
        }))
      })
    }

    function Gq(qq) {
      let {
        tasks: Eq
      } = qq;
      return (0, uq.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, uq.jsx)(dq.d, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            Mq.i.setItem("DiscordPressed", !0), cq.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in Eq && aq.i.TV("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, uq.jsx)(Oq.d, {})]
      })
    }
    var Lq = gq(24),
      Jq = gq(1622),
      kq = gq(36584),
      Rq = gq(9176),
      Uq = gq(4456),
      Fq = gq(163),
      sq = gq(1207),
      Xq = gq(1341),
      wq = gq(2569),
      Kq = gq(1183),
      Cq = gq(1628),
      Iq = gq(2344),
      eq = gq(2335),
      Dq = gq(1824),
      qE = gq(2012),
      EE = gq(1252),
      gE = gq(1448),
      YE = gq(36748),
      lE = gq(36753),
      OE = gq(36755),
      mE = gq(36757),
      xE = gq(36759),
      AE = gq(2619);

    function cE(qq) {
      let {
        playersHere: Eq,
        exclude: gq,
        Fy: Yq
      } = qq;
      const {
        t: Oq
      } = (0, Kq.v)(), mq = (0, AE.o)(AE.j), [xq, Aq] = (0, lq.useState)([]), cq = [], Bq = (qq, Eq) => {
        const Yq = [...gq, ...cq.map((qq => qq.player.name))];
        cq.length < 3 && !(0, lE.k)(Yq, qq.name) && cq.push({
          player: qq,
          status: Eq
        })
      };
      for (const lq of Eq) Bq((0, xE.l)(lq.name, lq.cosmetics, lq.ranks), Oq("worldSocial:inThisWorld"));
      if ("loaded" === mq.state.status)
        for (const lq of mq.state.recentPlayers) lq.preview.name && !lq.preview.isError && Bq({
          ...lq.preview,
          location: {
            status: "offline"
          }
        }, Oq("worldSocial:playedWithYou"));
      const Wq = qq => {
        Aq((Eq => [...Eq, qq])), Yq(qq).finally((() => {
          Aq((Eq => Eq.filter((Eq => Eq !== qq))))
        }))
      };
      return (0, uq.jsx)(uq.Fragment, {
        children: cq.map(((qq, Eq) => {
          let {
            player: gq,
            status: Yq
          } = qq;
          return (0, uq.jsx)(xE.h, {
            zIndex: cq.length - Eq,
            player: gq,
            status: Yq,
            onSendFriendRequest: () => {
              Wq(gq.name)
            },
            actions: (0, uq.jsx)(Xq.e, {
              tooltipInner: (0, uq.jsx)(uq.Fragment, {
                children: Oq("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, uq.jsx)(Nq.g, {
                className: "FriendRequestButton",
                disabled: xq.includes(gq.name),
                ariaLabel: `${Oq("recentPlayers:addFriend")} ${gq.name}`,
                onClick: () => {
                  Wq(gq.name)
                },
                children: (0, uq.jsx)(dq.d, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${gq.name}`)
        }))
      })
    }
    var uE = gq(36768),
      BE = gq(36775),
      WE = gq(1214),
      NE = gq(1468),
      aE = gq(4451),
      VE = gq(278),
      dE = gq(4434);
    const jE = ["auto", "auto_existing"];

    function HE(qq) {
      return jE.includes(qq)
    }

    function oE(qq, Eq) {
      const gq = (0, WE.Bb)(qq);
      return null !== Eq && (0, WE.Bb)(Eq) === gq || (0, dE.d)().some((qq => (0, WE.Bb)(qq.name) === gq))
    }
    const PE = new Set;

    function QE(qq) {
      return `worldSocialSeen:${qq}`
    }

    function yE(qq) {
      return !qq || PE.has(qq) || !0 === Mq.i.getItem(QE(qq))
    }

    function tE(qq) {
      qq && !PE.has(qq) && (PE.add(qq), Mq.i.setItem(QE(qq), !0))
    }
    var rE = gq(2394),
      vE = gq(2402);

    function hE(qq) {
      let {
        show: Eq,
        onClose: gq,
        opener: Yq
      } = qq;
      const {
        lobbyName: Oq,
        shownLobbyName: xq
      } = (0, hq.g)("connectedGame");
      return (0, lq.useEffect)((() => {
        Eq && (0, gE.reportAnalyticsClick)({
          id: "world_social.open",
          value: Yq
        })
      }), [Eq]), (0, uq.jsx)(mq.c, {
        show: Eq && null !== Oq,
        close: gq,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Yq,
        children: Eq && null !== Oq && (0, uq.jsx)(nE, {
          lobbyName: Oq,
          worldCode: null !== xq && void 0 !== xq ? xq : Oq,
          onClose: gq
        }, Oq)
      })
    }

    function nE(qq) {
      var Eq;
      let {
        lobbyName: gq,
        worldCode: Yq,
        onClose: Oq
      } = qq;
      const {
        t: mq
      } = (0, Kq.v)(), xq = (0, lq.useRef)(null), {
        settings: Aq,
        loading: cq,
        answered: Bq,
        change: Wq,
        retry: aq
      } = (0, YE.j)(gq), Vq = (0, Cq.g)(), jq = (0, hq.g)("players"), Hq = (0, hq.g)("hiddenPlayerNames"), [oq, Pq] = (0, lq.useState)([]), [Qq, tq] = (0, lq.useState)([]), [rq, vq] = (0, lq.useState)(!1), bq = (0, rE.c)(), iq = (0, lq.useMemo)((() => {
        var qq, Eq;
        const gq = null === jq.localId ? null : null !== (qq = null === (Eq = jq.byId[jq.localId]) || void 0 === Eq ? void 0 : Eq.name) && void 0 !== qq ? qq : null;
        return jq.ids.flatMap((qq => {
          const Eq = jq.byId[qq];
          return null !== Eq && void 0 !== Eq && Eq.name && Eq.name !== gq ? [{
            name: Eq.name,
            cosmetics: Eq.cosmetics,
            ranks: Eq.ranks
          }] : []
        }))
      }), [jq]), Zq = (0, lq.useMemo)((() => (0, lE.h)(Vq.friends, gq, iq.map((qq => qq.name)))), [Vq.friends, gq, iq]), Mq = fq.featureFlags.canSeeRealPlayerNames ? iq.filter((qq => null === (0, EE.d)(qq.name, Hq))) : [], Tq = null !== Aq && void 0 !== Aq && Aq.canManage ? Aq : null, zq = null !== Tq, Sq = null !== (Eq = null === Aq || void 0 === Aq ? void 0 : Aq.visibility) && void 0 !== Eq ? Eq : null, pq = "whitelist" === (null === Tq || void 0 === Tq ? void 0 : Tq.visibility), Gq = "private" === Sq || "whitelist" === Sq && !zq, {
        userContext: Lq
      } = (0, yq.c)();
      (0, lq.useEffect)((() => {
        zq && oE(gq, Lq.getPersonalWorldLobbyName()) && tE(Lq.whamm)
      }), [zq, gq, Lq]);
      const Jq = Gq ? mq("whitelist" === Sq ? "socialBar:inviteWorldManagersOnly" : zq ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        Rq = null === Jq;
      (0, lq.useEffect)((() => Gq ? void 0 : Dq.g.quietFriendAdded()), [Gq]), (0, lq.useEffect)((() => Dq.g.quietFriendRequests()), []);
      const AE = (0, lq.useRef)(!1);
      (0, lq.useEffect)((() => {
        const qq = xq.current,
          Eq = !AE.current;
        AE.current = !0;
        const gq = null === document.activeElement || document.activeElement === document.body;
        null !== qq && void 0 !== qq && qq.contains(document.activeElement) || !Eq && !gq || (0, kq.f)() || null === qq || void 0 === qq || qq.focus({
          preventScroll: !0
        })
      }), [Rq]), (0, lq.useEffect)((() => {
        const qq = qq => {
          "Escape" !== qq.key || null !== document.activeElement && document.activeElement !== document.body || Oq()
        };
        return document.addEventListener("keydown", qq), () => {
          document.removeEventListener("keydown", qq)
        }
      }), [Oq]);
      const WE = null === Aq && !Bq,
        NE = (cq || Vq.loading) && 0 === Vq.friends.length,
        aE = Vq.friends.flatMap((qq => qq.name ? [qq.name] : [])),
        VE = oq.filter((qq => !(0, lE.k)(aE, qq))),
        dE = Zq.length + 3,
        jE = VE.length + dE,
        HE = rq ? Vq.requests : Vq.requests.slice(0, 1),
        PE = async function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const gq of (0, lE.l)(qq, Uq.z)) {
            if (!await Wq({
                whitelistAdd: gq
              }, (qq => (0, lE.s)(qq, gq, !0)), {
                quiet: Eq
              })) return !1
          }
          return !0
        }, QE = qq => {
          if (pq && Tq) return {
            on: (0, lE.k)(Tq.whitelist, qq),
            onChange: Eq => {
              (0, gE.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: Eq ? "on" : "off"
              }), Wq(Eq ? {
                whitelistAdd: [qq]
              } : {
                whitelistRemove: qq
              }, (gq => (0, lE.s)(gq, [qq], Eq)))
            }
          }
        }, yE = async (qq, Eq) => {
          (0, gE.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: Eq
          });
          const gq = await (0, eq.i)(qq, "world_social");
          return (0, eq.d)(gq, qq, {
            announceSent: !1
          }), "failed" !== gq.kind && ("sent" === gq.kind && Pq((Eq => (0, lE.k)(Eq, qq) ? Eq : [...Eq, qq])), pq && await PE([qq]), !0)
        };
      return (0, uq.jsxs)("div", {
        ref: xq,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: qq => {
          qq.target === qq.currentTarget && " " === qq.key && qq.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, uq.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, uq.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: mq("worldSocial:title")
          }), (0, uq.jsx)(Nq.m, {
            className: "WorldSocialClose",
            onClick: Oq
          })]
        }), WE && (0, uq.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, uq.jsx)(nq.e, {})
        }), !WE && (0, uq.jsxs)(uq.Fragment, {
          children: [(0, uq.jsx)(OE.c, {
            worldCode: Yq,
            message: Jq
          }), null === Aq && !cq && (0, uq.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: aq,
            children: mq("worldSocial:loadFailed")
          }), zq && null !== Sq && (0, uq.jsx)(mE.d, {
            visibility: Sq,
            onPick: qq => {
              (async qq => {
                if (qq === Sq) return;
                (0, gE.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: qq
                });
                const Eq = [...(0, BE.b)(gq), ...Qq],
                  Yq = "whitelist" === qq && Aq ? (0, lE.d)(Zq, Eq, Aq.whitelist) : [];
                await Wq({
                  setVisibility: qq
                }, (Eq => ({
                  ...Eq,
                  visibility: qq
                }))) && await PE(Yq)
              })(qq)
            }
          }), Vq.requests.length > 0 && (0, uq.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, uq.jsx)(wq.c, {
              label: (0, uq.jsxs)(uq.Fragment, {
                children: [(0, uq.jsx)(dq.d, {
                  name: qE.i
                }), " ", mq("socialBar:requests")]
              }),
              meta: (0, uq.jsxs)(uq.Fragment, {
                children: [Vq.requests.length, Vq.requests.length === sq.p && (0, uq.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: mq("socialBar:limitReached")
                }), !rq && Vq.requests.length > 1 && (0, uq.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    vq(!0)
                  },
                  children: mq("worldSocial:moreRequests", {
                    count: Vq.requests.length - 1
                  })
                })]
              })
            }), (0, uq.jsx)("div", {
              className: "PlayerRows",
              children: HE.map(((qq, Eq) => (0, uq.jsx)(xE.h, {
                zIndex: HE.length - Eq,
                player: qq,
                actions: (0, uq.jsxs)(uq.Fragment, {
                  children: [(0, uq.jsx)(Xq.e, {
                    tooltipInner: (0, uq.jsx)(uq.Fragment, {
                      children: mq("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, uq.jsx)(Nq.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${mq("general:accept")} ${qq.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, eq.h)(qq.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, uq.jsx)(dq.d, {
                        name: "check"
                      })
                    })
                  }), (0, uq.jsx)(Xq.e, {
                    tooltipInner: (0, uq.jsx)(uq.Fragment, {
                      children: mq("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, uq.jsx)(Nq.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${mq("general:decline")} ${qq.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, eq.h)(qq.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, uq.jsx)(dq.d, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${qq.name}`)))
            })]
          }), (0, uq.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, uq.jsx)(wq.c, {
              label: (0, uq.jsxs)(uq.Fragment, {
                children: [(0, uq.jsx)(dq.d, {
                  name: qE.e
                }), " ", mq("socialBar:friends")]
              }),
              meta: Vq.loaded && !Gq ? Vq.friends.length : void 0
            }), (0, uq.jsx)(uE.c, {
              label: mq("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: mq("worldSocial:addFriendPlaceholder"),
              onSubmit: async qq => await yE(qq, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), NE && (0, uq.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, uq.jsx)(nq.e, {})
            }), !NE && (0, uq.jsxs)(uq.Fragment, {
              children: [(0, uq.jsxs)("div", {
                className: "PlayerRows",
                children: [VE.map(((qq, Eq) => (0, uq.jsx)(xE.h, {
                  zIndex: jE - Eq,
                  player: (0, xE.l)(qq, null),
                  status: mq("worldSocial:requestSent"),
                  SB: QE(qq)
                }, `request:${qq}`))), !Gq && Zq.map(((qq, Eq) => (0, uq.jsx)(xE.d, {
                  zIndex: dE - Eq,
                  row: qq,
                  SB: QE(qq.friend.name),
                  canInvite: (0, lE.c)(Aq) && "here" !== qq.place,
                  invited: Qq.includes(qq.friend.name),
                  onInvite: () => {
                    (async qq => {
                      (0, gE.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const Eq = () => {
                        tq((Eq => Eq.filter((Eq => Eq !== qq))))
                      };
                      tq((Eq => [...Eq, qq]));
                      const Yq = (0, lE.o)(Aq, qq);
                      if ("none" !== Yq) {
                        const gq = PE([qq], "quiet" === Yq);
                        if ("required" === Yq && !await gq) return void Eq()
                      }
                      await (0, Iq.l)(qq, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, BE.e)(gq, qq), setTimeout(Eq, Fq.k)) : Eq()
                    })(qq.friend.name)
                  }
                }, qq.friend.name))), Vq.loaded && 0 === Vq.friends.length && (0, uq.jsx)(cE, {
                  playersHere: Mq,
                  exclude: oq,
                  Fy: qq => yE(qq, "suggestion")
                })]
              }), pq && Vq.loaded && 0 === Vq.friends.length && 0 === VE.length && (0, uq.jsx)("div", {
                className: "WorldSocialEmpty",
                children: mq("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), bq && (0, uq.jsxs)(Nq.Q, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, vE.f)({
              page: "players",
              source: "invite_popup"
            }), Oq()
          },
          children: [(0, uq.jsx)(dq.d, {
            name: "users-gear"
          }), " ", mq("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var bE = gq(2426),
      iE = gq(2386);

    function ZE(qq) {
      let {
        show: Eq,
        onClose: gq,
        option: Yq
      } = qq;
      const Oq = (0, hq.f)("connectedGame", (qq => (0, bE.b)(qq) ? qq.lobbyName : null));
      return function(qq) {
        const {
          gameEntrySource: Eq,
          loadingOverlayVisible: gq
        } = (0, Lq.j)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Yq
        } = (0, yq.c)(), Oq = (0, hq.g)("localPlayerAlive"), mq = (0, hq.f)("players", (qq => null !== qq.localId && void 0 !== qq.byId[qq.localId])), xq = (0, iE.j)(), Aq = (0, lq.useRef)(null), cq = (0, lq.useRef)(null), uq = "worldCreation" === Eq, Bq = Yq.whamm, Wq = Yq.getPersonalWorldLobbyName();
        (0, lq.useEffect)((() => {
          var Eq;
          null !== qq && (null === (Eq = cq.current) || void 0 === Eq ? void 0 : Eq.lobbyName) !== qq && null !== zE(qq, uq, Bq, Wq) && (cq.current = (0, YE.h)(qq))
        }), [uq, qq, Bq, Wq]), (0, lq.useEffect)((() => {
          if (null !== qq && (!gq && Oq && mq)) return xq.whenShown((() => {
            var Eq;
            const gq = Aq.current === qq ? null : zE(qq, uq, Bq, Wq);
            if (null === gq) return;
            const Yq = (null === (Eq = cq.current) || void 0 === Eq ? void 0 : Eq.lobbyName) === qq ? cq.current : (0, YE.h)(qq);
            cq.current = null, Aq.current = qq,
              function(qq, Eq, gq, Yq) {
                const {
                  lobbyName: lq
                } = qq, Oq = () => {
                  ! function(qq, Eq) {
                    if (!JE()) return void Eq(!0);
                    const gq = performance.now() + GE;
                    let Yq = 0;
                    const lq = () => {
                      Yq = JE() ? 0 : Yq + 1, Yq >= 2 ? Eq(!0) : !LE(qq) || performance.now() > gq ? Eq(!1) : setTimeout(lq, pE)
                    };
                    setTimeout(lq, pE)
                  }(lq, (Oq => {
                    Yq();
                    const mq = "auto_existing" === Eq && yE(gq);
                    Oq && LE(lq) && !ME(lq) && !mq && (SE(qq) ? TE(lq) : (TE(lq), tE(gq), function(qq) {
                      const Eq = VE.c.world_social_popup_v1;
                      return (0, VE.j)("world_social_popup_v1"), (0, gE.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${Eq}:${(0,aE.e)()}:${qq}`
                      }), (0, NE.flushClientAnalyticsEvents)(), "auto_open" === Eq
                    }(Eq) && ((0, YE.d)(qq), aq.i.TV("toggleMenu", `inviteLink|${Eq}`), "inviteLink" !== Lq.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === Eq && !SE(qq)) return void Oq();
                qq.response.then((qq => {
                  if (!("error" in qq)) return qq.settings.canManage ? void Oq() : (TE(lq), void Yq());
                  Yq()
                }))
              }(Yq, gq, Bq, (() => {
                Aq.current === qq && (Aq.current = null)
              }))
          }))
        }), [xq, uq, gq, qq, Oq, mq, Bq, Wq])
      }(Oq), (0, lq.useEffect)((() => {
        Eq && null !== Oq && TE(Oq)
      }), [Eq, Oq]), null !== Oq ? (0, uq.jsx)(hE, {
        show: Eq,
        onClose: gq,
        opener: HE(Yq) ? Yq : "icon"
      }) : (0, uq.jsx)(Rq.c, {
        show: Eq,
        onClose: gq
      })
    }
    const fE = new Set;

    function ME(qq) {
      return fE.has(qq) || !!Mq.k.getItem(`worldSocialShown:${qq}`)
    }

    function TE(qq) {
      fE.add(qq), Mq.k.setItem(`worldSocialShown:${qq}`, !0)
    }

    function zE(qq, Eq, gq, Yq) {
      return ME(qq) ? null : function(qq) {
        let {
          justMade: Eq,
          playerId: gq,
          lobbyName: Yq,
          personalWorld: lq
        } = qq;
        return Eq ? "auto" : !yE(gq) && oE(Yq, lq) ? "auto_existing" : null
      }({
        justMade: Eq,
        playerId: gq,
        lobbyName: qq,
        personalWorld: Yq
      })
    }

    function SE(qq) {
      let {
        answer: Eq
      } = qq;
      return null !== Eq && "settings" in Eq && !Eq.settings.canManage
    }
    const pE = 500,
      GE = 3e4;

    function LE(qq) {
      return "inGame" === Lq.b.get("gameState") && cq.gameBridge.latest("connectedGame").lobbyName === qq
    }

    function JE() {
      return (0, kq.f)() || Lq.b.get("loadingOverlayVisible") || (0, Jq.p)()
    }
    var kE = gq(36781),
      RE = gq(3059),
      UE = gq(1952),
      FE = gq(3056);

    function sE(qq, Eq, gq) {
      return FE.c.overridesTexture(qq) ? FE.c.getTexture(qq, Eq).url : gq
    }
    var XE = gq(10167);
    const wE = (qq, Eq) => {
        (0, lq.useEffect)((() => {
          setTimeout((() => {
            qq && qq.current && qq.current.focus()
          }), 1)
        }), [Eq])
      },
      KE = (0, lq.memo)((function(qq) {
        let {
          isInputActive: Eq,
          onClose: gq,
          onChange: Yq,
          textAreaRef: lq,
          fontSize: Oq,
          lineHeight: mq,
          currText: xq
        } = qq;
        return (0, uq.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, uq.jsx)("img", {
            src: sE("board_full", RE.g.BLOCK, XE),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, uq.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: xq,
            ref: lq,
            style: {
              fontSize: `${Oq}rem`,
              lineHeight: `${mq}rem`
            },
            onKeyDown: qq => {
              var Eq;
              "Escape" !== qq.key && (qq.stopPropagation(), "Tab" === qq.key && function(qq) {
                qq.preventDefault();
                const Eq = qq.target,
                  {
                    value: gq
                  } = Eq;
                let Yq = Eq.selectionStart,
                  lq = Eq.selectionEnd,
                  Oq = gq.slice(Yq, lq);
                if (!Oq.includes("\n") && !qq.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Yq > 0 && "\n" !== gq[Yq - 1];) Yq--;
                const mq = "\n" === gq[lq - 1];
                mq && lq--;
                Oq = gq.slice(Yq, lq);
                const xq = Oq.split("\n").map((Eq => qq.shiftKey ? Eq.replace(/^\t/, "") : "\t" + Eq)).join("\n");
                if (qq.shiftKey && gq.slice(Yq, lq) === xq) return;
                let {
                  selectionStart: Aq
                } = Eq;
                Eq.setSelectionRange(Yq, lq), Aq > Yq && (!qq.shiftKey || "\t" === Oq[0]) && (Aq += qq.shiftKey ? -1 : 1);
                lq = Yq + xq.length + (mq ? 1 : 0), document.execCommand("insertText", !1, xq), Eq.setSelectionRange(Aq, lq)
              }(qq), /^F\d+$/i.test(qq.code) && null !== (Eq = UE.u.OpenCodeEditor) && void 0 !== Eq && Eq.includes(qq.code) && gq())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Yq
          })]
        })
      }));

    function CE(qq) {
      return 1.3 * qq
    }
    var IE = gq(1668);
    const eE = (0, lq.memo)((function(qq) {
        let {
          show: Eq,
          onOpen: gq,
          onClose: Yq
        } = qq;
        const [Oq, xq] = (0, lq.useState)(null), [Aq, Bq] = (0, lq.useState)(""), [Wq, aq] = (0, lq.useState)(0), [Vq, dq] = (0, lq.useState)(null), [jq, Hq] = (0, lq.useState)({
          text: "",
          textSize: 0
        }), oq = (qq, Eq) => Vq ? (0, kE.m)(qq, Eq, Vq.width, Vq.height) : (0, kE.d)(qq, Eq), Pq = qq => {
          Bq(oq(Aq, qq)), aq(qq), Mq.i.setItem("lastBoardTextSize", qq)
        }, Qq = () => {
          Yq(), Vq && Aq === jq.text && Wq === jq.textSize || cq.gameBridge.send("writeOnBoard", {
            pos: Oq,
            text: Aq,
            textSize: Wq
          })
        };
        (0, hq.d)("boardEditRequested", (qq => {
          var lq, Oq;
          if (!fq.featureFlags.canSeePlayerWrittenText) return;
          if (null === qq) return xq(null), void(Eq && Yq());
          const {
            pos: mq,
            noticeboardSpan: Aq,
            text: cq
          } = qq;
          xq(mq), dq(Aq), Bq(cq);
          const uq = null !== (lq = null !== (Oq = qq.textSize) && void 0 !== Oq ? Oq : Mq.i.getItem("lastBoardTextSize")) && void 0 !== lq ? lq : 0;
          aq(uq), Hq({
            text: cq,
            textSize: uq
          }), Mq.i.setItem("lastBoardTextSize", uq), gq()
        }));
        const yq = (0, lq.useRef)(null);
        wE(yq, Eq), (0, IE.p)(yq, {
          kind: "sign",
          submit: Qq
        });
        const tq = function(qq, Eq) {
            const gq = kE.c[qq];
            if (!Eq) return gq.uiFontSize;
            const {
              numLines: Yq,
              charsPerLine: lq
            } = (0, kE.t)(Eq.width, Eq.height, qq);
            return gq.uiFontSize * Math.min(gq.charsPerLine / lq, gq.numLines / Yq)
          }(Wq, Vq),
          rq = CE(tq);
        return (0, uq.jsxs)(mq.c, {
          className: "WriteOnBoardBg",
          close: Qq,
          escDoesExit: !0,
          show: Eq,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, uq.jsx)(KE, {
            isInputActive: () => Eq,
            onClose: Qq,
            onChange: qq => {
              Bq(oq(qq.target.value, Wq))
            },
            textAreaRef: yq,
            fontSize: tq,
            lineHeight: rq,
            currText: Aq
          }), (0, uq.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, uq.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, uq.jsx)(Nq.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Pq(0)
              },
              disabled: 0 === Wq,
              children: "Small"
            }), (0, uq.jsx)(Nq.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Pq(1)
              },
              disabled: 1 === Wq,
              children: "Medium"
            }), (0, uq.jsx)(Nq.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Pq(2)
              },
              disabled: 2 === Wq,
              children: "Large"
            })]
          })]
        })
      })),
      DE = (0, lq.memo)((function(qq) {
        let {
          show: Eq,
          onOpen: gq,
          onClose: Yq
        } = qq;
        const [Oq, xq] = (0, lq.useState)(""), Aq = () => {
          Yq(), cq.gameBridge.send("writeNameTag", Oq)
        };
        (0, rq.f)("EditNameTag", (qq => {
          fq.featureFlags.canSeePlayerWrittenText && null !== qq && (xq(qq), gq())
        }));
        const Bq = (0, lq.useRef)(null);
        wE(Bq, Eq), (0, IE.p)(Bq, {
          kind: "nameTag",
          submit: Aq
        });
        const Wq = kE.G.nameTag.uiFontSize,
          aq = CE(Wq);
        return (0, uq.jsxs)(mq.c, {
          className: "WriteOnBoardBg",
          close: Aq,
          escDoesExit: !0,
          show: Eq,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, uq.jsx)("div", {
            className: "NameTagTrim",
            children: (0, uq.jsx)(KE, {
              isInputActive: () => Eq,
              onClose: Aq,
              onChange: qq => {
                const Eq = qq.target.value.replaceAll("\n", "");
                xq((0, kE.q)(Eq, "nameTag"))
              },
              textAreaRef: Bq,
              fontSize: Wq,
              lineHeight: aq,
              currText: Oq
            })
          }), (0, uq.jsx)(Nq.g, {
            onClick: Aq,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var qg = gq(18466);
    const Eg = (0, lq.memo)((function(qq) {
      let {
        show: Eq,
        onOpen: gq,
        onClose: Yq
      } = qq;
      const [Oq, xq] = (0, lq.useState)(""), [Aq, Bq] = (0, lq.useState)(0), [Wq, aq] = (0, lq.useState)(!1), [Vq, dq] = (0, lq.useState)(["", "", "", "", "", "", "", "", "", ""]), [jq, Hq] = (0, lq.useState)("Title"), [oq, Pq] = (0, lq.useState)(!0), [Qq, yq] = (0, lq.useState)(!1);
      (0, rq.f)("EditBook", (qq => {
        let {
          pages: Eq,
          title: Yq,
          isPublished: lq
        } = qq;
        var Oq;
        fq.featureFlags.canSeePlayerWrittenText && (null !== Eq ? (dq(Eq), xq(null !== (Oq = Eq[0]) && void 0 !== Oq ? Oq : ""), Hq(Yq), Bq(0), aq(!1), Pq(!lq), yq(!1), gq()) : dq(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const tq = (0, lq.useRef)(null),
        vq = (0, lq.useRef)(null);
      wE(tq, Eq), (0, IE.p)(tq, {
        kind: "book"
      }), (0, IE.p)(vq, {
        kind: "vc"
      });
      const hq = kE.G.book.uiFontSize,
        nq = CE(hq),
        bq = () => {
          (oq || Qq) && cq.gameBridge.send("writeBook", {
            pages: [...Vq],
            title: jq,
            published: !oq && Qq
          })
        },
        iq = qq => {
          Wq && (Vq[Aq] = Oq, aq(!1)), xq(Vq[qq]), Bq(qq)
        };
      return (0, uq.jsxs)(mq.c, {
        className: "WriteOnBoardBg",
        close: () => {
          Yq(), Vq[Aq] = Oq, bq()
        },
        escDoesExit: !0,
        show: Eq,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, uq.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, uq.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: jq,
            ref: vq,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${nq}rem`
            },
            onKeyDown: qq => {
              oq && qq.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: qq => {
              let Eq = qq.target.value;
              Eq = (0, kE.q)(Eq, "vc"), Hq(Eq)
            },
            readOnly: !oq
          }), (0, uq.jsx)("img", {
            src: sE("book_page", RE.g.ITEM, qg),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, uq.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, uq.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Oq,
              ref: tq,
              style: {
                fontSize: `${hq}rem`,
                lineHeight: `${nq}rem`
              },
              onKeyDown: qq => {
                oq && qq.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: qq => {
                const Eq = qq.target.value;
                xq((0, kE.q)(Eq, "book")), aq(!0)
              },
              readOnly: !oq
            })
          })]
        }), (0, uq.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, uq.jsx)(Nq.g, {
            disabled: 0 === Aq,
            onClick: () => {
              iq(Aq - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, uq.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, uq.jsx)(Nq.g, {
            disabled: 9 === Aq,
            onClick: () => {
              iq(Aq + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, uq.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, uq.jsx)(Nq.g, {
            onClick: () => {
              Pq(!oq), yq(!0)
            },
            className: "BookNavButton",
            children: oq ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var gg = gq(36662),
      Yg = gq(8624),
      lg = gq(1367),
      Og = gq(1895);

    function mg(qq) {
      let {
        show: Eq,
        buttons: gq
      } = qq;
      const {
        t: Yq
      } = (0, Kq.v)(), Oq = (0, lq.useRef)(null);
      return (0, lq.useEffect)((() => {
        var qq, gq;
        const Yq = Eq ? (0, gg.v)() : null;
        if (!Yq || !(0, lg.c)()) return;
        const lq = (0, gg.h)().findIndex((qq => qq.id === Yq));
        (0, Yg.j)(null !== (qq = null === (gq = Oq.current) || void 0 === gq ? void 0 : gq.children[lq]) && void 0 !== qq ? qq : null)
      }), [Eq]), 0 === gq.length ? null : (0, uq.jsx)("div", {
        ref: Oq,
        className: "ClientGameInventoryButtons",
        onPointerDown: qq => {
          qq.stopPropagation()
        },
        onPointerUp: qq => {
          qq.stopPropagation()
        },
        children: gq.map((qq => {
          const Eq = Yq(qq.labelKey);
          return (0, uq.jsxs)(Nq.p, {
            className: qq.className,
            disabled: qq.disabled,
            onClick: () => {
              (0, gg.o)(qq)
            },
            ariaLabel: qq.iconOnly ? Eq : void 0,
            title: qq.iconOnly ? Eq : void 0,
            children: [qq.icon && (0, uq.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === qq.icon.kind && (0, uq.jsx)(Og.e, {
                itemName: qq.icon.name,
                amount: 0
              }), "image" === qq.icon.kind && (0, uq.jsx)("img", {
                src: qq.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === qq.icon.kind && (0, uq.jsx)(dq.d, {
                name: qq.icon.name
              })]
            }), !qq.iconOnly && Eq]
          }, qq.id)
        }))
      })
    }
    var xg = gq(36789),
      Ag = gq(2653),
      cg = gq(9297),
      ug = gq(36575),
      Bg = gq(36568);
    let Wg = null;
    window.setShowInventoryAdsOverride = qq => {
      Wg = qq
    };
    const Ng = 24e4;
    var ag = gq(1902);

    function Vg(qq) {
      var Eq;
      let {
        draggedInfo: {
          name: gq,
          attributes: Yq,
          amount: lq
        },
        toAddRef: Oq
      } = qq;
      return (0, uq.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Oq,
        children: (0, uq.jsx)(Og.e, {
          itemName: gq,
          amount: lq,
          enchantmentTier: null === Yq || void 0 === Yq || null === (Eq = Yq.customAttributes) || void 0 === Eq ? void 0 : Eq.enchantmentTier,
          bar: (0, ag.i)(Yq)
        })
      })
    }

    function dg(qq) {
      let {
        className: Eq = "",
        displayInfo: gq,
        domRef: Yq
      } = qq;
      return (0, uq.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${Eq}`,
        ref: Yq,
        children: [(0, uq.jsx)(tq.c, {
          text: (0, vq.Eb)(gq.name, {
            fontStyle: gq.fontStyle
          })
        }), (0, uq.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, uq.jsx)(tq.c, {
            text: gq.desc
          })
        })]
      })
    }

    function jg(qq) {
      let {
        info: Eq,
        draggedInfo: gq
      } = qq;
      const Yq = (0, lq.useRef)(null);
      return (0, lq.useLayoutEffect)((() => {
        const qq = Yq.current,
          {
            left: gq,
            top: lq
          } = function(qq, Eq, gq, Yq) {
            const lq = Yq.left * gq.width / 100 + 4,
              Oq = gq.width - Yq.right * gq.width / 100 - 4 - Eq.width,
              mq = Yq.top * gq.height / 100 + 4,
              xq = gq.height - 4 - Eq.height;
            return {
              left: Math.max(lq, Math.min(qq.x - Eq.width / 2, Oq)),
              top: Math.max(mq, Math.min(qq.y - 48 - Eq.height, xq))
            }
          }({
            x: Eq.initTouchX,
            y: Eq.initTouchY
          }, {
            width: qq.offsetWidth,
            height: qq.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, Lq.b.get("notchSize"));
        qq.style.left = `${gq}px`, qq.style.top = `${lq}px`
      }), [Eq]), (0, uq.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Yq,
        children: [(0, uq.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: gq.amount / Eq.maxAmount * 100 + "%"
          }
        }), (0, uq.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [gq.amount, "/", Eq.maxAmount]
        })]
      })
    }
    var Hg = gq(1018),
      og = gq.n(Hg),
      Pg = gq(190);
    const Qg = (0, lq.memo)((function(qq) {
      let {
        show: Eq,
        onOpen: gq,
        onClose: Yq
      } = qq;
      const Oq = (0, lq.useRef)({
          pos: null
        }),
        [xq, Aq] = (0, lq.useState)([0, 0, 0, 0]),
        {
          userContext: Bq
        } = (0, yq.c)();
      (0, hq.d)("ironChestOpenRequested", (qq => {
        let {
          pos: Eq,
          ownerDbId: Yq,
          cachedPasskey: lq
        } = qq;
        if (Oq.current.pos = Eq, Yq !== Bq.whamm) return null !== lq ? (Aq(lq), void Wq(lq)) : void gq();
        Wq(xq)
      })), (0, hq.d)("localEffectUpdated", (qq => {
        "Thief" === qq && Yq()
      }));
      const Wq = qq => {
        const {
          pos: Eq
        } = Oq.current;
        cq.gameBridge.send("openIronChest", {
          pos: Eq,
          Nu: qq
        })
      };
      return (0, uq.jsx)(mq.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Yq,
        escDoesExit: !0,
        show: Eq,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, uq.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, uq.jsx)(yg, {
            Nu: xq,
            onPasskeyUpdated: Aq,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Wq(xq)
            }
          })
        })
      })
    }));

    function yg(qq) {
      let {
        className: Eq = "",
        Nu: gq,
        onPasskeyUpdated: Yq,
        confirmText: lq,
        onConfirm: Oq
      } = qq;
      const {
        t: mq
      } = (0, Kq.v)();
      return (0, uq.jsxs)("div", {
        className: `${Eq} IronChestPasskeyInput`,
        children: [(0, uq.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: mq("ironChest:passkeyInputTitle")
        }), (0, uq.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Pg.c.ironChestPasskeyLength).fill(0).map(((qq, Eq) => (0, uq.jsx)(tg, {
            digit: gq[Eq],
            onPasskeyDigitUpdated: qq => {
              const lq = [...gq];
              lq[Eq] = qq, Yq(lq)
            }
          }, Eq)))
        }), (0, uq.jsx)(Nq.p, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Oq,
          children: mq(lq)
        })]
      })
    }

    function tg(qq) {
      let {
        digit: Eq,
        onPasskeyDigitUpdated: gq
      } = qq;
      return (0, uq.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, uq.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, uq.jsx)(Nq.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              gq(vq.c.mod(Eq + 1, 10))
            },
            children: (0, uq.jsx)(dq.d, {
              name: "angle-up"
            })
          }), (0, uq.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: Eq
          }), (0, uq.jsx)(Nq.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              gq(vq.c.mod(Eq - 1, 10))
            },
            children: (0, uq.jsx)(dq.d, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var rg = gq(9292),
      vg = gq(36849),
      hg = gq(36560);

    function ng(qq) {
      let {
        specialItemInfo: Eq,
        setHovered: gq,
        pointerDown: Yq,
        pointerUp: Oq,
        enchantingTablePosition: mq,
        enchantingTableBlockName: xq
      } = qq;
      const {
        t: Bq
      } = (0, Kq.v)(), [Wq, aq] = (0, lq.useState)(null), [Vq, dq] = (0, lq.useState)(null), jq = (0, Aq.h)("auraPerLevel"), Hq = Math.floor((0, hq.g)("aura") / jq);
      (0, lq.useEffect)((() => {
        if (!Eq) return void aq(null);
        let qq = !0;
        return cq.gameBridge.query("enchantingOffer", {
          slot: Eq.idx,
          name: Eq.name,
          blockName: xq
        }).then((gq => {
          var Yq, lq;
          let {
            perks: Oq,
            options: mq
          } = gq;
          if (!qq) return;
          const xq = {
            isEnchantable: Oq.length > 0,
            possibleEnchantments: Oq,
            options: mq.map((qq => {
              let {
                level: Eq,
                odds: gq
              } = qq;
              return {
                level: Eq,
                possibilities: Object.fromEntries(gq.map(((qq, Eq) => [`Tier ${Eq+1}`, qq])))
              }
            })),
            isAlreadyEnchanted: Oq.length > 0 && void 0 !== (null === (Yq = Eq.attributes) || void 0 === Yq || null === (lq = Yq.customAttributes) || void 0 === lq ? void 0 : lq.enchantmentTier)
          };
          aq(xq), (qq => {
            const Eq = qq.options.map((qq => Object.entries(qq.possibilities).map((qq => {
              let [Eq, gq] = qq;
              return {
                str: `${Eq}: ${gq>0?gq<.01?gq.toPrecision(1):gq.toFixed(2):0}%\n`,
                style: {
                  color: vq.Ab[Eq]
                }
              }
            }))));
            dq(Eq)
          })(xq)
        })), () => {
          qq = !1
        }
      }), [Eq, mq, xq]);
      const oq = [];
      for (let lq = 0; lq < vg.b; lq++) {
        const qq = null === Wq || void 0 === Wq ? void 0 : Wq.options[lq],
          Yq = !qq || qq.level > Hq;
        oq.push((0, uq.jsx)(Nq.g, {
          className: "EnchantmentButton",
          onPointerEnter: qq ? qq => null === gq || void 0 === gq ? void 0 : gq()(!0, {
            name: "",
            desc: Vq[lq]
          }, qq) : void 0,
          onPointerLeave: qq ? () => null === gq || void 0 === gq ? void 0 : gq()(!1) : void 0,
          onClick: Yq ? void 0 : () => {
            cq.gameBridge.send("enchantItem", {
              slot: Eq.idx,
              level: qq.level,
              tablePos: mq
            }), aq(null)
          },
          disabled: Yq,
          children: qq ? (0, uq.jsxs)(uq.Fragment, {
            children: [(0, uq.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, uq.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Bq("enchantments:cost"), ": "]
              }), " ", Bq("enchantments:levels", {
                level: qq.level
              })]
            }), (0, uq.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, uq.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, uq.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Bq("enchantments:tier")
                }), Object.entries(qq.possibilities).map((qq => {
                  let [Eq, gq] = qq;
                  return 0 === gq ? null : (0, uq.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: vq.Ab[Eq]
                    },
                    children: Eq
                  }, Eq)
                }))]
              }), (0, uq.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, uq.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Bq("enchantments:odds")
                }), Object.entries(qq.possibilities).map((qq => {
                  let [Eq, gq] = qq;
                  return 0 === gq ? null : (0, uq.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: vq.Ab[Eq]
                    },
                    children: [gq > 0 && gq < .1 ? "<0.1" : gq.toFixed(0 < gq && gq < .95 ? 1 : 0), "%"]
                  }, Eq)
                }))]
              })]
            })]
          }) : !1 === (null === Wq || void 0 === Wq ? void 0 : Wq.isEnchantable) ? (0, uq.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Bq("enchantments:notEnchantable")
          }) : (0, uq.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Bq("enchantments:enterItem")
          })
        }, lq))
      }
      return (0, uq.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, uq.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: xq
        }), (0, uq.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, uq.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, uq.jsx)(hg.b, {
              idx: Bg.i,
              setHovered: qq => {
                null === gq || void 0 === gq || gq(Bg.i)(qq)
              },
              pointerDown: Yq,
              pointerUp: Oq,
              draggedInfo: null,
              specialItemInfo: Eq,
              variation: "Enchanting Table"
            }), Wq && Wq.possibleEnchantments.length > 0 && (0, uq.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, uq.jsx)("h2", {
                children: "Possible Perks:"
              }), Wq.possibleEnchantments.map((qq => (0, uq.jsxs)(lq.Fragment, {
                children: [(0, uq.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, uq.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, uq.jsx)(Og.e, {
                      itemName: `${qq} Enchantment`,
                      amount: 1
                    })
                  }), (0, uq.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: qq
                  })]
                }), (0, uq.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Bq((0, rg.n)(qq).translationKey)
                })]
              }, qq)))]
            })]
          }), (0, uq.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Wq && Wq.isAlreadyEnchanted && (0, uq.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Bq("enchantments:alreadyEnchanted")
            }), oq]
          })]
        })]
      })
    }
    var bg = gq(36851);

    function ig(qq) {
      var Eq;
      let {
        specialItemInfo: gq,
        setSpecialItemInfo: Yq,
        setHovered: Oq,
        pointerDown: mq,
        pointerUp: xq
      } = qq;
      const {
        t: Aq
      } = (0, Kq.v)(), Bq = (0, hq.f)("inventory", (qq => qq.freeSlots)), [Wq, aq] = (0, lq.useState)(null);
      (0, lq.useEffect)((() => {
        if (gq) {
          const qq = (0, bg.b)(gq.name, gq.amount);
          aq({
            salvageable: !!qq,
            produces: qq
          })
        } else aq(null)
      }), [gq, null === gq || void 0 === gq ? void 0 : gq.name, null === gq || void 0 === gq ? void 0 : gq.amount]);
      const Vq = !!gq && !(null === Wq || void 0 === Wq || !Wq.salvageable) && !(null !== (Eq = Wq.produces) && void 0 !== Eq && Eq.some((qq => {
        let {
          amt: Eq
        } = qq;
        return Eq < 1
      })));
      return (0, uq.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, uq.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Aq("item:salvagingTable")
        }), (0, uq.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, uq.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, uq.jsx)(hg.b, {
              idx: Bg.i,
              setHovered: qq => {
                null === Oq || void 0 === Oq || Oq(Bg.i)(qq)
              },
              pointerDown: mq,
              pointerUp: xq,
              draggedInfo: null,
              specialItemInfo: gq,
              variation: "Salvaging Table"
            })
          }), (0, uq.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, uq.jsx)(Nq.g, {
              className: "SalvageButton",
              onClick: Vq ? () => {
                const {
                  idx: qq,
                  name: Eq,
                  amount: lq
                } = gq;
                cq.gameBridge.send("salvageItem", {
                  slot: qq,
                  name: Eq,
                  amount: lq
                }) && (aq(null), Yq(null))
              } : void 0,
              disabled: !Vq,
              children: Wq ? Wq.salvageable ? Wq.produces.some((qq => {
                let {
                  amt: Eq
                } = qq;
                return Eq < 1
              })) ? (0, uq.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, uq.jsx)("div", {
                  className: "SalvageText Error",
                  children: Aq("salvagingTable:notEnoughResources")
                })
              }) : Bq < Wq.produces.length ? (0, uq.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, uq.jsx)("div", {
                  className: "SalvageText Error",
                  children: Aq("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, uq.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, uq.jsx)("div", {
                  className: "SalvageText",
                  children: Aq("salvagingTable:salvage")
                }), (0, uq.jsx)("div", {
                  className: "SalvageIcons",
                  children: Wq.produces.map(((qq, Eq) => {
                    let {
                      item: gq,
                      amt: Yq
                    } = qq;
                    return (0, uq.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: gq,
                        amount: Math.floor(Yq)
                      })
                    }, Eq)
                  }))
                })]
              }) : (0, uq.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, uq.jsx)("div", {
                  className: "SalvageText Error",
                  children: Aq("salvagingTable:unsalvageable")
                })
              }) : (0, uq.jsx)(uq.Fragment, {})
            })
          })]
        })]
      })
    }
    var Zg = gq(201),
      fg = gq(9379),
      Mg = gq(2607),
      Tg = gq(1659),
      zg = gq(8638),
      Sg = gq(8629),
      pg = gq(1646),
      Gg = gq(1975),
      Lg = gq(1380),
      Jg = gq(2059);

    function kg(qq, Eq, gq) {
      const Yq = qq.trim().toLowerCase();
      if ("" === Yq) return 0;
      let lq = null;
      for (const Oq of Eq) {
        const qq = Oq.toLowerCase().indexOf(Yq);
        if (0 === qq) return 0;
        qq > 0 && (lq = 1)
      }
      if (null !== lq) return lq;
      for (const Oq of gq)
        if (Oq.toLowerCase().includes(Yq)) return 2;
      return null
    }

    function Rg(qq) {
      return qq.map((qq => {
        var Eq;
        return qq ? {
          name: qq.name,
          amount: null !== (Eq = qq.amount) && void 0 !== Eq ? Eq : 1
        } : null
      }))
    }

    function Ug(qq) {
      return qq < 1e3 ? `${qq}` : qq < 1e4 ? Math.floor(qq / 100) / 10 + "k" : `${Math.floor(qq/1e3)}k`
    }
    var Fg = gq(36859);
    const sg = Nq.g,
      Xg = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      wg = () => {
        const qq = (0, Lg.g)();
        return qq ? qq.getPadRepeatTiming(Xg) : Xg
      };

    function Kg(qq, Eq, gq) {
      var Yq, lq;
      const Oq = (0, cg.t)(Eq, qq);
      let mq = null === (Yq = Eq[qq]) || void 0 === Yq ? void 0 : Yq.description;
      if (gq && (null === (lq = (0, Fg.i)().get(qq)) || void 0 === lq || !lq.hideIngredients)) {
        mq ? (mq = (0, vq.Eb)(mq), mq.push({
          str: "\n"
        })) : mq = [], mq.push({
          str: "\n"
        }), mq.push({
          str: "Can be crafted from:\n"
        });
        for (const qq of gq) "string" === typeof qq && (mq.push({
          icon: qq,
          style: {
            fontSize: "1.5em"
          }
        }), mq.push({
          str: " "
        }), mq.push(...(0, vq.Eb)((0, cg.t)(Eq, qq))), mq.push({
          str: "\n"
        }))
      }
      return {
        name: Oq,
        desc: mq
      }
    }

    function Cg(qq) {
      let {
        name: Eq,
        Nc: gq
      } = qq;
      return `${Eq}_${gq}`
    }

    function Ig(qq) {
      var Eq;
      let {
        onClick: gq,
        itemName: Yq,
        recipeId: Oq,
        isSelected: mq,
        haveIngredients: xq,
        craftable: Aq,
        setHovered: cq,
        padActions: Bq,
        marked: Wq,
        lock: Nq,
        itemInfo: aq
      } = qq;
      const Vq = (0, lq.useRef)(null);
      return (0, zg.e)(Vq, {
        press: qq => !xq || "secondary" === qq && !Aq ? (Bq.refuse(), !1) : "primary" === qq ? (Bq.choose(), !0) : Bq.craft(),
        release: Bq.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, uq.jsxs)("div", {
        ref: Vq,
        className: og()("InvenItem", {
          CraftableItemNotEnoughIngredients: !xq && !Nq,
          CraftableItemMarked: Wq,
          CraftableItemLocked: void 0 !== Nq,
          CraftableItemLockedFar: (null !== (Eq = null === Nq || void 0 === Nq ? void 0 : Nq.stepsAway) && void 0 !== Eq ? Eq : 1) > 1
        }),
        "data-recipe-key": Oq,
        "data-pad-inventory-default": mq ? "" : void 0,
        onClick: gq,
        style: {
          cursor: mq ? null : "pointer"
        },
        onPointerEnter: qq => {
          null === cq || void 0 === cq || cq(!0, Kg(Yq, aq)), !mq && (0, pg.s)(qq.nativeEvent) && (0, Sg.f)() && gq()
        },
        onPointerLeave: () => {
          null === cq || void 0 === cq || cq(!1)
        },
        children: [(0, uq.jsx)(Og.e, {
          itemName: Yq,
          amount: 1
        }), Wq && (0, uq.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Nq && (0, uq.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, uq.jsx)(dq.d, {
            name: "lock"
          }), (0, uq.jsx)(tq.c, {
            text: Nq.tag
          })]
        })]
      })
    }

    function eg(qq) {
      let {
        idx: Eq,
        status: gq,
        shownItem: Yq,
        dim: Oq,
        onHoverStart: mq,
        onHoverEnd: xq,
        onPadBack: Aq
      } = qq;
      const cq = (0, lq.useRef)(null);
      (0, zg.e)(cq, {
        press: () => !1,
        back: Aq,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Bq = gq.need > 0 ? Math.min(gq.have / gq.need, 1) : 1;
      return (0, uq.jsxs)("div", {
        ref: cq,
        className: og()("CupTile", {
          Short: gq.missing > 0
        }),
        style: {
          width: Oq,
          height: Oq
        },
        "data-craft-ingredient": Eq,
        onPointerEnter: mq,
        onPointerLeave: xq,
        children: [(0, uq.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Bq})`
          }
        }), (0, uq.jsx)(Og.e, {
          itemName: Yq,
          amount: 0
        }), (0, uq.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Ug(gq.have), "/", Ug(gq.need)]
        })]
      })
    }

    function Dg(qq) {
      var Eq, gq, Yq, Oq, mq;
      let {
        show: xq,
        recipeItem: {
          name: Aq,
          Nc: Bq,
          requires: Wq,
          produces: Nq,
          haveIngredients: aq
        },
        detail: Vq,
        onCraft: dq,
        setHovered: jq,
        craftButtonRef: Hq,
        onPadBack: oq,
        showPadShortcut: Pq,
        refusedCount: Qq,
        lock: yq,
        itemInfo: rq
      } = qq;
      const {
        t: vq
      } = (0, Kq.v)(), hq = null !== Vq && !Vq.roomForOne, nq = null !== (Eq = null === Vq || void 0 === Vq ? void 0 : Vq.craftAllTimes) && void 0 !== Eq ? Eq : 0, bq = function(qq, Eq) {
        return qq.map((qq => {
          let {
            items: gq,
            amt: Yq
          } = qq, lq = 0;
          const Oq = [];
          for (const mq of gq) {
            const qq = Eq(mq);
            lq += qq, qq > 0 && Oq.push(mq)
          }
          return 0 === Oq.length && Oq.push(gq[0]), {
            shownItems: Oq,
            need: Yq,
            have: lq,
            missing: Math.max(Yq - lq, 0)
          }
        }))
      }(Wq, (qq => {
        var Eq;
        return null !== (Eq = null === Vq || void 0 === Vq ? void 0 : Vq.amounts[qq]) && void 0 !== Eq ? Eq : 0
      }));
      let iq = "4rem",
        Zq = 4;
      3 === Wq.length || 4 === Wq.length ? iq = "3.75rem" : Wq.length >= 5 && (iq = "3rem"), 4 === Wq.length ? Zq = 2 : Wq.length <= 6 && (Zq = 3);
      const fq = `calc(${Zq} * ${iq} + ${Zq-1} * 0.4rem + 1px)`,
        Mq = (0, lq.useRef)(null),
        Tq = (0, lq.useRef)(null);
      (0, lq.useLayoutEffect)((() => {
        Mq.current.scrollTop = 0
      }), [Aq, Bq]);
      const zq = (0, lq.useRef)(Qq);
      (0, lq.useEffect)((() => {
        if (Qq === zq.current) return;
        zq.current = Qq;
        const qq = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Yq of null !== (Eq = null === (gq = Mq.current) || void 0 === gq ? void 0 : gq.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== Eq ? Eq : []) {
          var Eq, gq;
          Yq.animate(qq, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Qq]);
      const Sq = (qq, Eq, gq) => {
          var Yq;
          if ((0, Fg.i)().has(Aq)) return void(gq && clearInterval(pq.current));
          const lq = null !== (Yq = null === Vq || void 0 === Vq ? void 0 : Vq.resultStackable) && void 0 !== Yq && Yq,
            Oq = Rg(cq.gameBridge.latest("inventory").player),
            {
              ac: mq,
              eA: xq,
              amountAddedToSlot: uq
            } = cq.gameBridge.send("craftRecipe", {
              name: Aq,
              Nc: Bq,
              times: Eq || qq && lq ? null : 1
            });
          if (mq > 0) {
            const Eq = [],
              Yq = new Set(Wq.flatMap((qq => {
                let {
                  items: Eq
                } = qq;
                return Eq
              }))),
              mq = function(qq, Eq, gq) {
                const Yq = [];
                for (let lq = 0; lq < qq.length; lq++) {
                  const Oq = qq[lq];
                  if (!Oq || !gq.has(Oq.name)) continue;
                  const mq = Eq[lq],
                    xq = (null === mq || void 0 === mq ? void 0 : mq.name) === Oq.name ? mq.amount : 0;
                  xq < Oq.amount && Yq.push({
                    idx: lq,
                    itemName: Oq.name,
                    amount: Oq.amount - xq
                  })
                }
                return Yq
              }(Oq, Rg(cq.gameBridge.latest("inventory").player), Yq).slice(0, 12),
              Bq = gq ? 0 : Math.min(50, 400 / mq.length),
              aq = gq ? 220 : 320;
            for (const qq of mq) {
              var Nq;
              const gq = Wq.findIndex((Eq => {
                  let {
                    items: gq
                  } = Eq;
                  return gq.includes(qq.itemName)
                })),
                Yq = null === (Nq = Mq.current) || void 0 === Nq ? void 0 : Nq.querySelector(`[data-craft-ingredient="${gq}"]`),
                lq = (0, cg.h)(qq.idx);
              Yq && lq && Eq.push({
                kind: "ingredient",
                itemName: qq.itemName,
                amount: qq.amount,
                eA: qq.idx,
                from: lq,
                to: (0, cg.h)(Yq),
                delayMs: Math.round(Eq.length * Bq),
                durationMs: aq
              })
            }
            let Vq;
            if (null !== xq && uq > 0 && Tq.current) {
              const qq = Eq.length > 0 ? Eq[Eq.length - 1].delayMs + .6 * aq : 0;
              Vq = {
                itemName: Aq,
                amount: uq,
                eA: xq,
                from: (0, cg.h)(Tq.current),
                delayMs: Math.round(qq)
              }
            }
            dq(Vq, qq && !lq ? xq : null, Eq), xg.b.play("wood1", .5).rate(1.75)
          }
        },
        pq = (0, lq.useRef)(null);
      (0, lq.useEffect)((() => () => {
        clearInterval(pq.current)
      }), []);
      const Gq = (qq, Eq) => {
          Sq(qq, !1, !1), clearInterval(pq.current), Eq && (pq.current = setTimeout((() => {
            pq.current = setInterval((() => {
              Sq(qq, !1, !0)
            }), Eq.intervalMs)
          }), Eq.initialDelayMs))
        },
        Lq = () => {
          clearInterval(pq.current)
        },
        Jq = !aq || hq || Boolean(yq),
        kq = (0, lq.useRef)(null),
        Rq = null !== (gq = null === (Yq = (0, Jg.d)()) || void 0 === Yq ? void 0 : Yq.hideButtonHints) && void 0 !== gq && gq,
        Uq = null !== (Oq = null === (mq = (0, Lg.g)()) || void 0 === mq ? void 0 : mq.getBoundButton("inventorySecondary")) && void 0 !== Oq ? Oq : null,
        Fq = () => !Jq && (Sq(!1, !0, !1), !0);
      (0, zg.e)(Hq, {
        press: qq => "secondary" === qq ? Fq() : !Jq && (Gq(!1, wg()), !0),
        release: Lq,
        back: oq,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, zg.e)(kq, {
        press: Fq,
        back: oq,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [sq, Xq] = (0, lq.useState)(0), [wq, Cq] = (0, lq.useState)(null);
      (0, lq.useEffect)((() => {
        if (!0 === xq) {
          Xq(0);
          const qq = setInterval((() => {
            Xq((qq => qq + 1))
          }), 1e3);
          return () => {
            clearInterval(qq)
          }
        }
        return () => {}
      }), [xq]);
      const Iq = null === Vq || void 0 === Vq ? void 0 : Vq.ingredientsCraftedFrom,
        eq = (0, lq.useRef)(jq);
      (0, lq.useEffect)((() => {
        eq.current = jq
      }), [jq]);
      const Dq = !(null === yq || void 0 === yq || !yq.hideIngredients);
      (0, lq.useEffect)((() => {
        var qq, Eq;
        if (!wq) return;
        if (Dq) return Cq(null), void(null === (Eq = eq.current) || void 0 === Eq || Eq.call(eq, !1));
        const gq = wq[sq % wq.length];
        null === (qq = eq.current) || void 0 === qq || qq.call(eq, !0, Kg(gq, rq, null === Iq || void 0 === Iq ? void 0 : Iq[gq]))
      }), [wq, sq, rq, Iq, Dq]);
      const qE = !!yq,
        EE = (0, lq.useRef)(!1);
      (0, lq.useEffect)((() => {
        var qq;
        qE && (clearInterval(pq.current), Dq && EE.current && (EE.current = !1, null === (qq = eq.current) || void 0 === qq || qq.call(eq, !1)))
      }), [qE, Dq]);
      const gE = (0, cg.t)(rq, Aq);
      return (0, uq.jsxs)("div", {
        ref: Mq,
        className: "CraftableInfo SmallTextBold",
        children: [(0, uq.jsx)("div", {
          className: "CraftableHeader",
          children: (0, uq.jsx)(tq.c, {
            text: gE
          })
        }), !Dq && (0, uq.jsx)("div", {
          className: og()("CraftableIngredients", {
            Compact: Wq.length >= 5
          }),
          style: {
            maxWidth: fq
          },
          children: bq.map(((qq, Eq) => {
            const gq = qq.shownItems[sq % qq.shownItems.length];
            return (0, uq.jsx)(eg, {
              idx: Eq,
              status: qq,
              shownItem: gq,
              dim: iq,
              onHoverStart: () => {
                Cq(qq.shownItems)
              },
              onHoverEnd: () => {
                Cq(null), null === jq || void 0 === jq || jq(!1)
              },
              onPadBack: oq
            }, Eq)
          }))
        }), yq && (0, uq.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, uq.jsx)(tq.c, {
            text: yq.reason
          })
        }), !yq && (!aq || hq) && (0, uq.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!aq && "Missing ingredients", (0, uq.jsx)("br", {}), hq && "Inventory is full"]
        }), !Dq && (0, uq.jsxs)(uq.Fragment, {
          children: [(0, uq.jsxs)(sg, {
            ref: Hq,
            className: "DoCraftButton",
            onPointerDown: qq => {
              Gq((0, cg.x)(qq), (0, pg.s)(qq.nativeEvent) ? wg() : Xg)
            },
            onPointerUp: Lq,
            onPointerLeave: Lq,
            disabled: Jq,
            children: [Pq && Uq && !Jq && !Rq && (0, uq.jsx)(Gg.d, {
              className: "CraftShortcutGlyph",
              glyph: Uq
            }), (0, uq.jsx)("div", {
              ref: Tq,
              className: "DoCraftItem",
              onPointerEnter: () => {
                EE.current = !0, null === jq || void 0 === jq || jq(!0, Kg(Aq, rq))
              },
              onPointerLeave: () => {
                EE.current = !1, null === jq || void 0 === jq || jq(!1)
              },
              children: (0, uq.jsx)(Og.e, {
                itemName: Aq,
                amount: Nq
              })
            })]
          }), (0, uq.jsxs)(sg, {
            ref: kq,
            className: "DoCraftAllButton",
            onPointerDown: qq => {
              Sq((0, cg.x)(qq), !0, !1)
            },
            disabled: Jq,
            children: [(0, uq.jsx)("span", {
              className: "CraftAllLabel",
              children: vq("general:craftAll")
            }), nq > 0 && (0, uq.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Ug(nq)]
            })]
          })]
        })]
      })
    }

    function qY(qq) {
      let {
        selectedIdx: Eq,
        hidden: gq
      } = qq;
      const Yq = (0, lg.q)(),
        Oq = (0, lq.useRef)(null);
      return (0, lq.useLayoutEffect)((() => {
        const qq = Oq.current,
          Yq = null === qq || void 0 === qq ? void 0 : qq.parentElement;
        if (!Yq || !qq) return;
        const lq = Yq.querySelector(".CraftableItems"),
          mq = () => {
            var Oq, mq;
            if (gq) return void(qq.style.opacity = "0");
            const xq = null === lq || void 0 === lq ? void 0 : lq.children[Eq],
              Aq = null === (Oq = null !== (mq = null === xq || void 0 === xq ? void 0 : xq.querySelector(".InvenItem")) && void 0 !== mq ? mq : xq) || void 0 === Oq ? void 0 : Oq.getBoundingClientRect();
            if (!Aq || 0 === Aq.width) return void(qq.style.opacity = "0");
            const cq = Yq.getBoundingClientRect();
            qq.style.opacity = "1", qq.style.width = `${Aq.width}px`, qq.style.height = `${Aq.height}px`, qq.style.transform = `translate(${Aq.left-cq.left+Yq.scrollLeft}px, ${Aq.top-cq.top+Yq.scrollTop}px)`
          };
        mq();
        const xq = new MutationObserver(mq),
          Aq = new ResizeObserver(mq);
        return Aq.observe(Yq), lq && (xq.observe(lq, {
          childList: !0,
          subtree: !0
        }), Aq.observe(lq)), () => {
          xq.disconnect(), Aq.disconnect()
        }
      }), [Eq, gq]), (0, uq.jsx)("div", {
        ref: Oq,
        className: og()("SelectionReticle", {
          Secondary: Yq
        })
      })
    }

    function EY(qq, Eq, gq) {
      return qq ? (0, Zg.b)(fg.i, qq) ? gY(qq, Eq, gq) : qq : gq("classicGame:handCrafting")
    }

    function gY(qq, Eq, gq) {
      var Yq;
      const lq = null === (Yq = Eq[qq]) || void 0 === Yq ? void 0 : Yq.displayName;
      if ("string" === typeof lq) return gq(lq);
      const Oq = cq.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(lq) ? lq.map((qq => {
        if ("string" === typeof qq) return qq;
        if ("translationKey" in qq) return gq(qq.translationKey, (0, Kq.j)(qq.params, Oq));
        if ("str" in qq) {
          if ("string" === typeof qq.str) return qq.str;
          if ("translationKey" in qq.str) return gq(qq.str.translationKey, (0, Kq.j)(qq.str.params, Oq))
        }
        return ""
      })).join("") : lq && "translationKey" in lq ? gq(lq.translationKey, (0, Kq.j)(lq.params, Oq)) : qq
    }

    function YY(qq, Eq) {
      return qq === Eq || null !== qq && null !== Eq && qq.name === Eq.name && qq.Nc === Eq.Nc
    }

    function lY(qq) {
      var Eq, gq, Yq;
      let {
        show: Oq,
        onCraft: mq,
        dispatchSelectedCraftable: xq,
        selectedCraftable: Aq,
        craftingStation: Bq,
        setHovered: Wq
      } = qq;
      const {
        t: Nq
      } = (0, Kq.v)(), [aq, Vq] = (0, lq.useState)(""), [dq, jq] = (0, lq.useState)(0);
      (0, lq.useEffect)((() => {
        Oq || (Vq(""), jq((qq => qq + 1)))
      }), [Oq]);
      const [Hq, oq] = (0, lq.useState)(Bq);
      Hq !== Bq && (oq(Bq), "" !== aq && (Vq(""), jq((qq => qq + 1))));
      const Pq = (0, lq.useRef)(null),
        Qq = (0, lq.useRef)(null),
        yq = (0, Sg.j)(),
        tq = yq.showing && "recipe" === yq.kind,
        [rq, vq] = (0, lq.useState)(0),
        nq = null !== Bq && void 0 !== Bq ? Bq : null,
        bq = (0, lq.useRef)(null),
        iq = qq => {
          return !((Eq = bq.current) === (gq = qq) || null !== Eq && null !== gq && Eq.station === gq.station && YY(Eq.recipe, gq.recipe)) && (bq.current = qq, cq.gameBridge.send("focusCrafting", qq), !0);
          var Eq, gq
        };
      iq(Oq ? {
        station: nq,
        recipe: (null === (Eq = bq.current) || void 0 === Eq ? void 0 : Eq.station) === nq ? bq.current.recipe : null
      } : null);
      let Zq = cq.gameBridge.latest("crafting");
      const fq = (0, hq.g)("itemInfo"),
        Mq = "" !== aq.trim(),
        Tq = (0, Fg.J)(),
        zq = (0, Fg.G)(),
        Sq = (0, Fg.M)(),
        pq = function(qq, Eq) {
          const [gq, Yq] = (0, lq.useState)(!1);
          (0, lq.useEffect)((() => {
            if (!qq) return void Yq(!1);
            const Eq = setTimeout((() => {
              Yq(!0)
            }), 0);
            return () => {
              clearTimeout(Eq)
            }
          }), [qq]);
          const Oq = qq && gq,
            mq = (0, lq.useRef)({
              station: Eq,
              at: new Map
            });
          return (mq.current.station !== Eq || !Oq && mq.current.at.size > 0) && (mq.current = {
            station: Eq,
            at: new Map
          }), Oq ? mq.current.at : null
        }(Oq, Bq);
      let Gq = Zq.recipes.filter((qq => {
        let {
          listed: Eq
        } = qq;
        return Eq
      }));
      if (Mq) {
        const qq = [];
        for (const Eq of Zq.recipes) {
          var Lq;
          const gq = null !== (Lq = zq.get(Eq.name)) && void 0 !== Lq && Lq.hideIngredients ? [] : Eq.requires.flatMap((qq => {
              let {
                items: Eq
              } = qq;
              return Eq.flatMap((qq => [qq, gY(qq, fq, Nq)]))
            })),
            Yq = kg(aq, [Eq.name, gY(Eq.name, fq, Nq)], gq);
          null !== Yq && qq.push({
            item: Eq,
            rank: Yq
          })
        }
        qq.sort(((qq, Eq) => qq.rank - Eq.rank)), Gq = qq.map((qq => {
          let {
            item: Eq
          } = qq;
          return Eq
        }))
      } else {
        if (pq && pq.size > 0) {
          const qq = Zq.recipes.filter((qq => !qq.listed && pq.has(Cg(qq))));
          Gq = Gq.concat(qq)
        }
        Gq = (0, Fg.o)(Gq, Tq, zq, Sq), pq && (Gq = (0, Fg.m)(Gq, pq, Cg))
      }
      const Jq = qq => Gq.find((Eq => Cg(Eq) === qq)),
        kq = `${Bq}|${aq}`,
        [Rq, Uq] = (0, lq.useState)(null),
        Fq = (null === Rq || void 0 === Rq ? void 0 : Rq.context) === kq ? Rq.key : null,
        sq = Aq ? Cg(Aq) : null,
        Xq = null !== (gq = null !== (Yq = Jq(sq)) && void 0 !== Yq ? Yq : Jq(Fq)) && void 0 !== gq ? gq : Gq[0],
        wq = Xq ? Cg(Xq) : null,
        Cq = Xq ? {
          name: Xq.name,
          Nc: Xq.Nc
        } : null;
      Oq && iq({
        station: nq,
        recipe: Cq
      }) && (Zq = cq.gameBridge.latest("crafting")), wq !== sq && wq !== Fq && Uq(wq ? {
        context: kq,
        key: wq
      } : null), (0, lq.useEffect)((() => () => {
        bq.current = null, cq.gameBridge.send("focusCrafting", null)
      }), []);
      const Iq = YY(Zq.detail, Cq) ? Zq.detail : null,
        eq = null !== Iq && !Iq.roomForOne,
        Dq = Gq.findIndex((qq => Cg(qq) === Cg(Xq))),
        qE = () => Qq.current ? (0, zg.d)(Qq.current) : null,
        EE = (0, lq.useRef)(null),
        gE = (0, lq.useRef)(0);
      gE.current++;
      const YE = gE.current;
      (0, lq.useEffect)((() => {
        const qq = EE.current;
        if (!qq || YE <= qq.afterRender) return;
        if (EE.current = null, qq.key !== wq) return;
        const Eq = qE();
        var gq;
        null !== Eq && void 0 !== Eq && Eq.press("primary") && !qq.Fc && (null === (gq = Eq.release) || void 0 === gq || gq.call(Eq))
      }));
      const lE = qq => {
          const Eq = {
            name: qq.name,
            Nc: qq.Nc
          };
          return {
            choose: () => {
              xq(Eq), (0, Yg.j)(Qq.current)
            },
            craft: () => {
              var qq, gq;
              return xq(Eq), Cg(Eq) !== Cg(Xq) ? (EE.current = {
                key: Cg(Eq),
                Fc: !0,
                afterRender: gE.current
              }, !0) : null !== (qq = null === (gq = qE()) || void 0 === gq ? void 0 : gq.press("primary")) && void 0 !== qq && qq
            },
            stopCraft: () => {
              var qq, Eq;
              EE.current ? EE.current.Fc = !1 : null === (qq = qE()) || void 0 === qq || null === (Eq = qq.release) || void 0 === Eq || Eq.call(qq)
            },
            refuse: () => {
              Cg(Eq) !== Cg(Xq) && xq(Eq), vq((qq => qq + 1))
            }
          }
        },
        OE = () => {
          var qq, Eq, gq;
          (0, Yg.j)(null !== (qq = null === (Eq = Pq.current) || void 0 === Eq || null === (gq = Eq.querySelector(".CraftableItems")) || void 0 === gq ? void 0 : gq.children[Dq]) && void 0 !== qq ? qq : null)
        },
        mE = Gq.map(Cg).join("|"),
        xE = (0, lq.useRef)(mE);
      return (0, lq.useEffect)((() => {
        xE.current !== mE && (xE.current = mE, tq && Dq >= 0 && (0, Sg.f)() && OE())
      })), (0, uq.jsxs)("div", {
        className: "Craftables",
        children: [(0, uq.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: EY(Bq, fq, Nq)
        }), (0, uq.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, uq.jsx)(Tg.b, {
            className: "CraftingSearch",
            placeholderText: Nq("general:searchRecipes"),
            defaultValue: aq,
            maxLength: 100,
            onValueChange: qq => {
              Vq(qq)
            },
            blurOnEnter: !0
          }, dq), 0 === Gq.length && Mq && (0, uq.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Nq("general:noRecipesMatchSearch")
          }), Gq.length > 0 && (0, uq.jsxs)(uq.Fragment, {
            children: [(0, uq.jsxs)("div", {
              ref: Pq,
              className: "CraftablesLeftSide",
              children: [(0, uq.jsx)(Mg.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Gq.map((qq => {
                  let {
                    name: Eq,
                    Nc: gq,
                    haveIngredients: Yq
                  } = qq;
                  return {
                    name: Eq,
                    Nc: gq,
                    haveIngredients: Yq
                  }
                })))],
                observing: Oq,
                children: Gq.map((qq => {
                  const {
                    name: Eq,
                    Nc: gq,
                    haveIngredients: Yq
                  } = qq, lq = Cg(qq);
                  return (0, uq.jsx)(Ig, {
                    recipeId: lq,
                    itemName: Eq,
                    onClick: () => {
                      xq({
                        name: Eq,
                        Nc: gq
                      })
                    },
                    isSelected: Cg(Xq) === lq,
                    haveIngredients: Yq,
                    craftable: Yq && !zq.has(Eq) && !(Cg(Xq) === lq && eq),
                    setHovered: Wq,
                    padActions: lE(qq),
                    marked: Tq.has(Eq),
                    lock: zq.get(Eq),
                    itemInfo: fq
                  }, lq)
                }))
              }), (0, uq.jsx)(qY, {
                selectedIdx: Dq,
                hidden: tq && yq.steppingSlots
              })]
            }), (0, uq.jsx)(Dg, {
              show: Oq,
              recipeItem: Xq,
              detail: Iq,
              onCraft: mq,
              setHovered: Wq,
              craftButtonRef: Qq,
              onPadBack: OE,
              showPadShortcut: tq,
              refusedCount: rq,
              lock: zq.get(Xq.name),
              itemInfo: fq
            })]
          })]
        })]
      })
    }
    var OY = gq(9301),
      mY = gq(3166),
      xY = gq(2084),
      AY = gq(8604);
    class cY {
      constructor(qq, Eq, gq) {
        this.commit = qq, this.delayMs = Eq, this.defers = gq, this.pending = null, this.timer = void 0, this.Fc = !1, this.flush = () => {
          clearTimeout(this.timer);
          const qq = this.pending;
          null !== qq && (this.pending = null, this.commit(qq))
        }
      }
      type(qq) {
        this.pending = qq, clearTimeout(this.timer), this.Fc || this.defers() ? this.Fc || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(qq) {
        var Eq;
        return null !== (Eq = this.pending) && void 0 !== Eq ? Eq : qq
      }
      isHeld() {
        return this.Fc
      }
      setHeld(qq) {
        this.Fc = qq, qq || this.flush()
      }
    }

    function uY(qq) {
      return null === qq ? "creativeInventory:all" : `creativeInventory:${qq}`
    }

    function BY(qq) {
      let {
        category: Eq
      } = qq;
      return null === Eq ? (0, uq.jsx)(dq.d, {
        name: "layer-group"
      }) : (0, uq.jsx)(Og.e, {
        itemName: OY.creativeItemCategoryIcons[Eq],
        amount: 0
      })
    }

    function WY(qq) {
      let {
        labelKey: Eq,
        isSelected: gq,
        onSelect: Yq,
        setHovered: lq,
        children: Oq
      } = qq;
      return (0, uq.jsx)("div", {
        className: og()("CreativeCategoryTab", {
          Selected: gq
        }),
        onClick: Yq,
        onPointerEnter: qq => {
          (0, cg.q)(qq) || lq(!0, {
            name: {
              translationKey: Eq
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          lq(!1)
        },
        children: Oq
      })
    }

    function NY(qq) {
      let {
        categories: Eq,
        selectedCategory: gq,
        onSelect: Yq
      } = qq;
      const {
        t: Oq
      } = (0, Kq.v)(), [mq, xq] = (0, lq.useState)(!1), Aq = (0, lq.useRef)(null), cq = (0, lq.useCallback)((() => {
        xq(!1)
      }), []);
      return (0, xY.d)(Aq, cq), (0, uq.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Aq,
        children: [(0, uq.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            xq(!mq)
          },
          children: [(0, uq.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, uq.jsx)(BY, {
              category: gq
            })
          }), (0, uq.jsx)("span", {
            children: Oq(uY(gq))
          }), (0, uq.jsx)(dq.d, {
            name: mq ? "caret-up" : "caret-down"
          })]
        }), mq && (0, uq.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: Eq.map((qq => (0, uq.jsxs)("div", {
            className: og()("CreativeCategoryDropdownOption", {
              Selected: gq === qq
            }),
            onClick: () => {
              Yq(qq), xq(!1)
            },
            children: [(0, uq.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, uq.jsx)(BY, {
                category: qq
              })
            }), (0, uq.jsx)("span", {
              children: Oq(uY(qq))
            })]
          }, null !== qq && void 0 !== qq ? qq : "all")))
        })]
      })
    }
    const aY = (0, lq.memo)((function(qq) {
      let {
        creativeScrollDiv: Eq,
        playerInvenNumSlots: gq,
        getSetHoveringForIdx: Yq,
        getPointerDownForIdx: Oq,
        getPointerUpForIdx: mq,
        creativeSearchVal: xq,
        setCreativeSearchVal: cq,
        creativeCategory: Bq,
        setCreativeCategory: Wq,
        show: Nq
      } = qq;
      const {
        t: aq
      } = (0, Kq.v)(), Vq = (0, hq.g)("creativeVisibility"), {
        userContext: jq
      } = (0, yq.c)(), Hq = (0, Aq.h)("canUseDevCreativeItems"), oq = jq.playerHasRank("developer") || !!Hq, Pq = (0, lq.useMemo)((() => dY("", Vq, oq)), [Vq, oq]), Qq = (0, lq.useMemo)((() => {
        const qq = (0, OY.creativeItemIds)(),
          Eq = new Set(Pq.map((Eq => (0, OY.creativeCategoryOf)(qq[Eq]))));
        return OY.creativeItemCategories.filter((qq => Eq.has(qq)))
      }), [Pq]), tq = null !== Bq && Qq.includes(Bq) ? Bq : null, vq = (0, lq.useMemo)((() => "" === xq ? Pq : dY(xq, Vq, oq)), [Pq, xq, Vq, oq]), nq = (0, lq.useMemo)((() => {
        const qq = (0, OY.creativeItemIds)();
        return null !== tq ? vq.filter((Eq => (0, OY.creativeCategoryOf)(qq[Eq]) === tq)) : "" === xq ? vq.filter((Eq => !(0, OY.showOnlyInCreativeCategory)(qq[Eq]))) : vq
      }), [vq, tq, xq]), bq = Yq();

      function iq(qq) {
        Wq(qq), Eq.current.scrollTop = 0
      }
      const Zq = [null, ...Qq],
        {
          isTouchScreen: fq
        } = (0, Lq.j)(["isTouchScreen"]),
        Mq = !fq,
        Tq = (0, lq.useRef)(null),
        [zq, Sq] = (0, lq.useState)(0);
      (0, lq.useEffect)((() => {
        const qq = Tq.current;
        if (!qq) return;
        const Eq = new ResizeObserver((qq => {
          Sq(qq[0].contentRect.height)
        }));
        return Eq.observe(qq), () => {
          Eq.disconnect()
        }
      }), [Mq]);
      const pq = (0, lq.useRef)(null),
        Gq = (0, lq.useCallback)((function qq() {
          "up" === pq.current ? Eq.current.scrollTop -= 10 : "down" === pq.current && (Eq.current.scrollTop += 10), pq.current && requestAnimationFrame(qq)
        }), [Eq]),
        Jq = (0, lq.useCallback)((function(qq) {
          pq.current || (pq.current = qq, Gq())
        }), [Gq]);

      function kq() {
        pq.current = null
      }
      const Rq = (0, lq.useRef)({
        creativeSearchVal: xq,
        setCreativeSearchVal: cq
      });
      Rq.current = {
        creativeSearchVal: xq,
        setCreativeSearchVal: cq
      };
      const [Uq] = (0, lq.useState)((() => new cY((qq => {
        Rq.current.setCreativeSearchVal(qq)
      }), 250, lg.c))), Fq = qq => {
        var gq;
        null === (gq = Eq.current) || void 0 === gq || gq.classList.toggle("CreativeItemSlotsStale", qq)
      };
      (0, rq.f)(AY.d, (qq => {
        Uq.setHeld(qq), qq || Fq(!1)
      })), (0, lq.useEffect)((() => Uq.flush), [Uq]);
      const sq = (0, uq.jsx)(Tg.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: xq,
          maxLength: 1e4,
          onValueChange: (qq, Eq) => {
            "" === Uq.getTyped(Rq.current.creativeSearchVal) && "" !== qq && Wq(null), Uq.type(qq), Fq(Uq.isHeld())
          },
          onEnter: Uq.flush,
          blurOnEnter: !0
        }),
        Xq = (0, uq.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [fq && (0, uq.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, uq.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Jq("up")
              },
              onPointerLeave: kq,
              onPointerUp: kq,
              children: (0, uq.jsx)(dq.d, {
                name: "arrow-up"
              })
            }), (0, uq.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Jq("down")
              },
              onPointerLeave: kq,
              onPointerUp: kq,
              children: (0, uq.jsx)(dq.d, {
                name: "arrow-up"
              })
            })]
          }), (0, uq.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: Eq,
            children: [0 === nq.length && "" !== xq && (0, uq.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: aq("general:noResults")
            }), (0, uq.jsx)(Mg.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [xq, tq],
              observerRoot: "CreativeItemSlots",
              observing: Nq,
              children: nq.map((qq => {
                const Eq = gq + qq;
                return (0, uq.jsx)(hg.b, {
                  idx: Eq,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Yq(Eq),
                  pointerDown: Oq(Eq),
                  pointerUp: mq(Eq)
                }, Eq)
              }))
            })]
          })]
        });
      return (0, uq.jsxs)("div", {
        className: og()("CreativeItemSlotsWrapper", Mq ? "WithRail" : "WithDropdown"),
        children: [Mq && (0, uq.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Tq,
          style: {
            "--rail-height": zq > 0 ? `${zq}px` : void 0,
            "--tab-rows": Math.ceil(Zq.length / 2)
          },
          children: Zq.map((qq => (0, uq.jsx)(WY, {
            labelKey: uY(qq),
            isSelected: tq === qq,
            onSelect: () => {
              iq(qq)
            },
            setHovered: bq,
            children: (0, uq.jsx)(BY, {
              category: qq
            })
          }, null !== qq && void 0 !== qq ? qq : "all")))
        }), (0, uq.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, uq.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [sq, !Mq && (0, uq.jsx)(NY, {
              categories: Zq,
              selectedCategory: tq,
              onSelect: iq
            })]
          }), Xq]
        })]
      })
    }));

    function VY(qq) {
      var Eq;
      return null !== (Eq = (0, mY.h)(qq)) && void 0 !== Eq ? Eq : ""
    }

    function dY(qq, Eq, gq) {
      let {
        publicLobby: Yq,
        shownInGame: lq
      } = Eq;
      const Oq = qq.toLowerCase(),
        mq = (0, OY.creativeItemIds)(),
        xq = qq => {
          var Eq;
          const Oq = mq[qq];
          return !(0, OY.itemIsDisabled)(Oq, Yq, null === (Eq = lq[VY(Oq)]) || void 0 === Eq || Eq, gq)
        };
      if ("" === Oq) return mq.map(((qq, Eq) => Eq)).filter((qq => !(0, OY.showOnlyInCreativeSearch)(mq[qq]))).filter(xq);
      const Aq = [];
      for (let cq = 0; cq < mq.length; cq++) VY(mq[cq]).toLowerCase().includes(Oq) && Aq.push(cq);
      Aq.sort(((qq, Eq) => {
        const gq = VY(mq[qq]).toLowerCase(),
          Yq = VY(mq[Eq]).toLowerCase();
        return gq.indexOf(Oq) - Yq.indexOf(Oq)
      }));
      for (const [cq, uq] of(0, OY.creativeAltNames)())
        for (const qq of uq)
          if (qq.toLowerCase().includes(Oq)) {
            const qq = mq.indexOf(cq);
            Aq.includes(qq) || Aq.push(qq)
          } return Aq.filter(xq)
    }
    var jY = gq(36880),
      HY = gq(598);

    function oY(qq) {
      return qq > HY.n
    }

    function PY(qq) {
      const Eq = qq / 2,
        gq = [];
      for (let Yq = 0; Yq < Eq / 6; Yq++)
        for (let qq = 0; qq < 12; qq++) {
          const lq = qq < 6 ? 0 : Eq;
          gq.push(lq + 6 * Yq + qq % 6)
        }
      return gq
    }

    function QY(qq) {
      let {
        numSlots: Eq,
        renderSlot: gq
      } = qq;
      const {
        t: Yq
      } = (0, Kq.v)(), Oq = (0, lq.useRef)(null);
      var mq;
      return mq = Oq, (0, lq.useLayoutEffect)((() => {
        var qq;
        const Eq = null === (qq = mq.current) || void 0 === qq ? void 0 : qq.closest(".InvenBody");
        if (!Eq) return;
        const gq = () => {
          Eq.style.zoom = "";
          const qq = parseFloat(getComputedStyle(document.documentElement).fontSize),
            gq = window.innerWidth - 2 * qq,
            Yq = Eq.getBoundingClientRect().width;
          Yq > gq && (Eq.style.zoom = "" + gq / Yq)
        };
        return gq(), window.addEventListener("resize", gq), () => {
          window.removeEventListener("resize", gq), Eq.style.zoom = ""
        }
      }), [mq]), (0, uq.jsxs)("div", {
        ref: Oq,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, uq.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Yq("doubleChest:title")
        }), (0, uq.jsx)("div", {
          className: "GridItemSlots",
          children: PY(Eq).map((qq => gq(qq)))
        })]
      })
    }

    function yY(qq) {
      let {
        Uq: Eq,
        initialPasskey: gq
      } = qq;
      const {
        t: Yq
      } = (0, Kq.v)(), [Oq, mq] = (0, lq.useState)(gq), [xq, Aq] = (0, lq.useState)(gq);
      (0, lq.useEffect)((() => {
        mq(gq), Aq(gq)
      }), [...Eq]);
      return (0, uq.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, uq.jsx)("div", {
          className: "SmallTextBold",
          children: Yq("ironChest:currentPasskey", {
            currentPasskey: Oq.join("")
          })
        }), (0, uq.jsx)(yg, {
          className: "IronChestPasskeyEditor",
          Nu: xq,
          onPasskeyUpdated: Aq,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            cq.gameBridge.send("changeIronChestPasskey", {
              pos: [...Eq],
              Nu: [...xq]
            }), mq([...xq])
          }
        })]
      })
    }

    function tY(qq) {
      let {
        variation: Eq,
        canCraft: gq,
        show: Yq,
        creativeMounted: lq,
        specialItemRef: Oq,
        draggedInfo: mq,
        getSetHovering: xq,
        getPointerDownForIdx: Aq,
        getPointerUpForIdx: cq,
        enchantingTablePosition: Bq,
        enchantingTableBlockName: Wq,
        selectedCraftable: Nq,
        dispatchSelectedCraftable: aq,
        creativeScrollDiv: Vq,
        creativeSearchVal: dq,
        setCreativeSearchVal: jq,
        creativeCategory: Hq,
        setCreativeCategory: oq,
        onCraft: Pq
      } = qq;
      const {
        userContext: Qq
      } = (0, yq.c)(), {
        t: tq
      } = (0, Kq.v)(), rq = (0, hq.f)("inventory", (qq => qq.chest)), vq = (0, hq.f)("inventory", (qq => qq.player.length)), nq = (0, hq.f)("inventory", (qq => qq.creative));
      if (0 === vq) return null;
      let bq, iq;
      const Zq = qq => {
          const Eq = vq + qq;
          return (0, uq.jsx)(hg.b, {
            idx: Eq,
            draggedInfo: mq,
            specialItemInfo: Oq.current,
            setHovered: xq(Eq),
            pointerDown: Aq(Eq),
            pointerUp: cq(Eq)
          }, Eq)
        },
        fq = rq ? (0, jY.e)(rq.type) : null;
      if (fq) bq = og()("InvenLeftSideChestCustom", fq.className), iq = (0, uq.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: fq.render({
          Uq: rq.pos,
          renderSlot: Zq
        })
      });
      else if (rq) {
        const qq = rq.pos,
          Eq = "Iron" === rq.type || "Moonstone" === rq.type ? rq.type : "Standard";
        let gq = !1,
          Yq = null;
        "Iron" === Eq && (gq = rq.ironChest.ownerDbId === Qq.whamm, Yq = rq.ironChest.Nu), bq = `InvenLeftSideChest${Eq}`;
        const lq = oY(rq.numSlots);
        iq = (0, uq.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [gq && (0, uq.jsx)(yY, {
            Uq: qq,
            initialPasskey: Yq
          }), lq && (0, uq.jsx)(QY, {
            numSlots: rq.numSlots,
            renderSlot: Zq
          }), !lq && (0, uq.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, uq.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: tq("Moonstone" === Eq ? "item:moonstoneChest" : "Iron" === Eq ? "item:ironChest" : "item:chest")
            }), (0, uq.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(rq.numSlots).fill(0).map(((qq, Eq) => Zq(Eq)))
            })]
          })]
        })
      } else if (!nq || Eq && gq)
        if (gq && "Enchanting Table" === Eq) bq = `InvenLeftSide${(null!==Wq&&void 0!==Wq?Wq:"").replace(/ /gi,"")}`, iq = (0, uq.jsx)(ng, {
          specialItemInfo: Oq.current,
          setHovered: xq,
          pointerDown: Aq(Bg.i),
          pointerUp: cq(Bg.i),
          enchantingTablePosition: Bq,
          enchantingTableBlockName: Wq
        });
        else if (gq && "Salvaging Table" === Eq) bq = "InvenLeftSideSalvagingTable", iq = (0, uq.jsx)(ig, {
        specialItemInfo: Oq.current,
        setSpecialItemInfo: qq => {
          Oq.current = qq
        },
        setHovered: xq,
        pointerDown: Aq(Bg.i),
        pointerUp: cq(Bg.i)
      });
      else {
        if (!gq) return null;
        bq = `InvenLeftSide${(null!==Eq&&void 0!==Eq?Eq:"HandCrafting").replace(/ /gi,"")}`, iq = (0, uq.jsx)(lY, {
          show: Yq,
          onCraft: Pq,
          craftingStation: Eq,
          selectedCraftable: Nq,
          dispatchSelectedCraftable: aq,
          setHovered: xq()
        })
      } else bq = "InvenLeftSideCreative", iq = lq ? (0, uq.jsx)(aY, {
        creativeScrollDiv: Vq,
        playerInvenNumSlots: vq,
        getSetHoveringForIdx: xq,
        getPointerDownForIdx: Aq,
        getPointerUpForIdx: cq,
        creativeSearchVal: dq,
        setCreativeSearchVal: jq,
        creativeCategory: Hq,
        setCreativeCategory: oq,
        show: Yq
      }) : null;
      const Mq = !!rq || gq && !!Eq;
      return (0, uq.jsx)("div", {
        className: `InvenLeftSide ${bq}`,
        "data-pad-inventory-start": Mq ? "" : void 0,
        children: iq
      })
    }
    var rY = gq(583),
      vY = gq(20428),
      hY = gq(20434),
      nY = gq(20441);
    const bY = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: gq(20448)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: hY
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: nY
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: gq(20451)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: vY
      }
    };

    function iY(qq) {
      const {
        sprite: Eq,
        image: gq
      } = bY[qq];
      return sE(Eq, RE.g.ITEM, gq)
    }

    function ZY(qq) {
      let {
        draggedInfo: Eq,
        specialItemInfo: gq,
        craftFlyAnims: Yq,
        getSetHovering: lq,
        getPointerDownForIdx: Oq,
        getPointerUpForIdx: mq,
        variation: xq,
        canCraft: Aq,
        isNewSlot: cq
      } = qq;
      const Bq = (0, hq.f)("inventory", (qq => qq.player.length));
      return 0 === Bq ? null : (0, uq.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, uq.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(rY.c.length).fill(0).map(((qq, Wq) => {
            const Nq = Bq - rY.c.length + Wq;
            return (0, uq.jsx)(hg.b, {
              idx: Nq,
              draggedInfo: Eq,
              specialItemInfo: gq,
              craftFlyHoldbackInfo: (0, ug.l)(Yq, Nq),
              setHovered: lq(Nq),
              pointerDown: Oq(Nq),
              pointerUp: mq(Nq),
              defaultIconB64: iY(rY.c[Wq]),
              variation: Aq ? xq : void 0,
              showNewDot: cq(Nq)
            }, Nq)
          }))
        }), (0, uq.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Bq - 10 - rY.c.length).fill(0).map(((qq, Wq) => {
            const Nq = Bq - rY.c.length - Wq - 1;
            return (0, uq.jsx)(hg.b, {
              idx: Nq,
              draggedInfo: Eq,
              specialItemInfo: gq,
              craftFlyHoldbackInfo: (0, ug.l)(Yq, Nq),
              setHovered: lq(Nq),
              pointerDown: Oq(Nq),
              pointerUp: mq(Nq),
              variation: Aq ? xq : void 0,
              showNewDot: cq(Nq)
            }, Nq)
          }))
        })]
      })
    }
    var fY = gq(36888),
      MY = gq(36892);

    function TY(qq) {
      const {
        e: Eq,
        idx: gq
      } = qq, Yq = (0, cg.k)(qq.readInventory(), gq), lq = (0, cg.n)(Eq);
      gq === Bg.e ? function(qq, Eq) {
        const {
          draggedInfoRef: gq,
          removeItem: Yq,
          removeDraggedInfoRef: lq,
          close: Oq
        } = qq;
        if (gq.current) {
          const qq = Eq && gq.current.amount || 1;
          Yq(gq.current.idx, qq, !0) && (gq.current.amount -= qq, gq.current.amount <= 0 && lq())
        } else Eq && Oq()
      }(qq, lq) : gq === Bg.i ? function(qq, Eq) {
        const {
          e: gq,
          draggedInfoRef: Yq,
          specialItemRef: lq,
          moveAmtIntoSlot: Oq,
          removeDraggedInfoRef: mq
        } = qq;
        if ((0, cg.x)(gq) && lq.current) lq.current = null;
        else if (Yq.current && lq.current && (Yq.current.idx === lq.current.idx || (0, MY.d)(Yq.current, lq.current)) && Yq.current.amount > 0 && lq.current.amount > 0 && lq.current.amount < Pg.c.maxItemStackSize)
          if (Yq.current.idx === lq.current.idx) {
            if (Eq) {
              const qq = Math.min(Yq.current.amount, Pg.c.maxItemStackSize - lq.current.amount);
              lq.current.amount += qq, Yq.current.amount -= qq
            } else Yq.current.amount--, lq.current.amount++;
            Yq.current.amount <= 0 && mq()
          } else if (Eq) {
          const qq = Math.min(Yq.current.amount, Pg.c.maxItemStackSize - lq.current.amount);
          Oq(lq.current.idx, qq) && (lq.current.amount += qq)
        } else {
          Oq(lq.current.idx, 1) && lq.current.amount++
        } else if (!Yq.current || lq.current || Eq) {
          const qq = Yq.current;
          Yq.current = lq.current, lq.current = qq
        } else Yq.current.amount--, lq.current = {
          idx: Yq.current.idx,
          name: Yq.current.name,
          attributes: Yq.current.attributes,
          amount: 1
        }
      }(qq, lq) : (0, cg.x)(Eq) ? function(qq, Eq) {
        var gq, Yq;
        const {
          idx: lq,
          draggedInfoRef: Oq,
          specialItemRef: mq,
          canCraft: xq,
          variation: Aq,
          swapSlots: cq,
          moveIntoSlots: uq
        } = qq;
        if (!Eq) return;
        let Bq = Eq.amount;
        lq === (null === (gq = Oq.current) || void 0 === gq ? void 0 : gq.idx) && (Bq = Oq.current.amount <= 0 ? 0 : Eq.amount - Oq.current.amount);
        lq === (null === (Yq = mq.current) || void 0 === Yq ? void 0 : Yq.idx) && (Bq = mq.current.amount <= 0 ? 0 : Eq.amount - mq.current.amount);
        if (0 === Bq) return;
        const Wq = qq.readInventory(),
          Nq = Wq.player.length,
          aq = Wq.chest,
          Vq = Nq - rY.c.length,
          dq = () => {
            if (!(0, lg.c)()) return void uq(10, Vq, lq, Bq);
            const qq = qq => {
              const gq = (0, cg.k)(Wq, qq);
              return gq ? {
                amount: gq.amount,
                stacksWithMoved: (0, MY.d)(gq, Eq)
              } : null
            };
            for (const Eq of ((qq, Eq, gq, Yq, lq) => {
                const Oq = [];
                let mq = Yq;
                if (null !== Yq) {
                  let xq = 0;
                  for (let Yq = Eq; Yq < gq; Yq++) {
                    const Eq = qq(Yq);
                    null !== Eq && void 0 !== Eq && Eq.stacksWithMoved && null !== Eq.amount && Eq.amount > 0 && (xq += Math.max(0, lq - Eq.amount))
                  }
                  const Aq = Math.min(Yq, xq);
                  if (Aq > 0 && (Oq.push({
                      start: Eq,
                      end: gq,
                      amount: Aq
                    }), mq = Yq - Aq), mq <= 0) return Oq
                }
                for (let xq = gq - 1; xq >= Eq; xq--)
                  if (null === qq(xq)) {
                    Oq.push({
                      start: xq,
                      end: xq + 1,
                      amount: mq
                    });
                    break
                  } return Oq
              })(qq, 10, Vq, Bq, Pg.c.maxItemStackSize)) uq(Eq.start, Eq.end, lq, Eq.amount)
          };
        if (!xq || "Enchanting Table" !== Aq && "Salvaging Table" !== Aq) {
          const gq = (0, vq.Jb)(Eq.name),
            Yq = gq ? (0, vq.Ib)(gq) : null;
          if (!rY.c.includes(gq) || lq !== Yq && (0, cg.m)(Wq, qq.itemInfo, Yq, lq))
            if (aq)
              if (lq < Nq) {
                var jq, Hq;
                const [qq, Eq] = null !== (jq = null === (Hq = (0, jY.e)(aq.type)) || void 0 === Hq ? void 0 : Hq.quickMoveRange) && void 0 !== jq ? jq : [0, aq.numSlots];
                uq(Nq + qq, Nq + Eq, lq, Bq)
              } else uq(0, Nq - rY.c.length, lq, Bq);
          else Wq.creative ? lq < 10 ? dq() : lq < Nq ? uq(0, 10, lq, Bq) : uq(0, Nq - rY.c.length, lq, null !== Eq.amount ? Pg.c.maxItemStackSize : null) : lq < 10 ? dq() : uq(0, 10, lq, Bq);
          else lq < Nq - rY.c.length || lq >= Nq ? cq(Yq, lq) : (uq(0, Nq - rY.c.length, Yq, Bq), xg.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else mq.current = {
          idx: lq,
          name: Eq.name,
          attributes: Eq.attributes,
          amount: null !== Eq.amount ? Bq : 0
        }
      }(qq, Yq) : qq.draggedInfoRef.current ? function(qq, Eq, gq, Yq) {
        const {
          draggedInfoRef: lq,
          specialItemRef: Oq,
          moveAmtIntoSlot: mq,
          swapSlots: xq,
          removeItem: Aq,
          removeDraggedInfoRef: cq
        } = qq, uq = qq.readInventory(), Bq = lq.current.idx;
        if (gq && (Eq === Bq || (0, MY.d)(lq.current, gq)) && lq.current.amount > 0 && (0, cg.d)(gq) > 0 && (gq.amount < Pg.c.maxItemStackSize || Eq === Bq)) Yq ? gq.amount + lq.current.amount <= Pg.c.maxItemStackSize || Eq === Bq ? mq(Eq, lq.current.amount) : mq(Eq, Pg.c.maxItemStackSize - gq.amount) : mq(Eq, 1);
        else if (lq.current.amount > 0 && !gq) mq(Eq, Yq ? lq.current.amount : 1);
        else if (Yq || gq || 0 === lq.current.amount)
          if (uq.creative && !uq.chest && Eq >= uq.player.length) {
            const qq = 0 === lq.current.amount ? 1 : lq.current.amount;
            Aq(lq.current.idx, qq, !1) && cq()
          } else {
            var Wq;
            const gq = (null === (Wq = Oq.current) || void 0 === Wq ? void 0 : Wq.idx) === Eq;
            if (xq(Eq, lq.current.idx)) {
              const Yq = qq.readInventory(),
                mq = (0, cg.k)(Yq, Bq),
                xq = !Yq.chest && Yq.creative && lq.current.idx >= Yq.player.length;
              if (mq && lq.current.idx !== Eq && !xq) {
                let qq = (0, cg.d)(mq);
                gq && (qq -= Oq.current.amount), lq.current = gq && 0 === qq ? null : {
                  idx: lq.current.idx,
                  name: mq.name,
                  attributes: mq.attributes,
                  amount: qq
                }
              } else cq()
            }
          }
        else mq(Eq, 1)
      }(qq, gq, Yq, lq) : function(qq, Eq, gq, Yq) {
        var lq;
        const {
          draggedInfoRef: Oq,
          specialItemRef: mq
        } = qq;
        if (!gq) return;
        let xq = (0, cg.d)(gq);
        const Aq = (null === (lq = mq.current) || void 0 === lq ? void 0 : lq.idx) === Eq;
        Aq && (xq -= mq.current.amount);
        Yq || (xq = Math.ceil(xq / 2));
        Oq.current = Aq && 0 === xq ? null : {
          idx: Eq,
          name: gq.name,
          attributes: gq.attributes,
          amount: xq
        }
      }(qq, gq, Yq, lq)
    }

    function zY(qq, Eq) {
      return !!Eq && Eq.name === qq.name
    }

    function SY() {
      return cq.gameBridge.latest("inventory")
    }

    function pY(qq, Eq, gq) {
      return cq.gameBridge.send("removeInventoryItem", {
        slot: qq,
        amount: Eq,
        drop: gq
      })
    }

    function GY(qq) {
      return (0, cg.i)(qq, cq.gameBridge.latest("itemInfo"), cq.gameBridge.latest("stationItems").enchantable)
    }

    function LY(qq) {
      let {
        show: Eq,
        close: gq,
        canCraft: Yq,
        variation: Oq,
        inventoryItemsMoveable: mq,
        setCraftFlyAnims: xq
      } = qq;
      (0, hq.g)("itemInfo");
      const [Aq, uq] = (0, lq.useState)(null), [Bq, Wq] = (0, lq.useState)(null), [Nq, aq] = (0, lq.useState)(!1), Vq = (0, lq.useRef)(null), dq = (0, lq.useRef)(null), jq = (0, lq.useRef)(null), Hq = (0, lq.useRef)(null), [oq, Pq] = (0, lq.useReducer)((qq => qq + 1), 0), Qq = (0, lq.useCallback)((() => {
        Eq && Pq()
      }), [Eq, Pq]), yq = (0, lq.useCallback)((() => {
        dq.current = null, zq.current = null, Qq()
      }), [Qq]), tq = (0, lq.useCallback)(((qq, Eq) => {
        xq((gq => gq.map((gq => "ingredient" === gq.kind ? gq : gq.eA === qq ? {
          ...gq,
          eA: Eq,
          to: (0, cg.h)(Eq)
        } : gq.eA === Eq ? {
          ...gq,
          eA: qq,
          to: (0, cg.h)(qq)
        } : gq))))
      }), [xq]), rq = (0, lq.useCallback)(((qq, Eq) => {
        const gq = Gq.current;
        if (gq.x = qq, gq.y = Eq, Vq.current) !Lq.current.isTouch || Lq.current.itemBeingDragged && !zq.current ? (Vq.current.style.transform = `translate(${gq.x}px, ${gq.y}px)`, aq(Lq.current.isTouch && !zq.current)) : (Vq.current.style.transform = "translate(0.5rem, 0.5rem)", aq(!0));
        else if (Hq.current) {
          const gq = Hq.current;
          let Yq = qq + 10,
            lq = Eq + 10;
          const Oq = gq.offsetWidth,
            mq = gq.offsetHeight;
          Yq + Oq > window.innerWidth && (Yq = qq - Oq - 10), lq + mq > window.innerHeight && (lq = Eq - mq - 10), Yq < 0 && (Yq = 0), lq < 0 && (lq = 0), Hq.current.style.transform = `translate(${Yq}px, ${lq}px)`
        }
      }), []), nq = (0, lq.useCallback)((qq => (Eq, gq, Yq) => {
        if (uq(Eq && void 0 !== qq ? qq : null), Eq) {
          if (void 0 === qq && !gq) return void(0, fY.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== qq) {
            var lq;
            const Eq = SY();
            let gq;
            if (gq = qq === Bg.i ? jq.current ? (0, cg.k)(Eq, jq.current.idx) : null : (0, cg.k)(Eq, qq), !gq) return void Wq(null);
            if ((null === (lq = jq.current) || void 0 === lq ? void 0 : lq.idx) === qq) {
              if (0 === (0, cg.d)(gq) - jq.current.amount) return void Wq(null)
            }
            Wq(GY(gq))
          } else Wq({
            name: gq.name,
            desc: gq.desc,
            fontStyle: "normal"
          })
        } else Wq(null);
        Yq && setTimeout((() => {
          rq(Yq.pageX, Yq.pageY)
        }), 0)
      }), [rq]), bq = (0, lq.useCallback)(((qq, Eq) => {
        const gq = cq.gameBridge.send("moveInventoryItem", {
          from: dq.current.idx,
          to: qq,
          amount: Eq
        });
        return gq ? (dq.current.amount -= Eq, dq.current.amount <= 0 && yq()) : console.error("moveInventoryItem failed"), gq
      }), [yq]), iq = (0, lq.useCallback)(((qq, Eq) => {
        const gq = jq.current,
          Yq = null === gq || void 0 === gq ? void 0 : gq.idx;
        gq && (gq.idx = function(qq, Eq, gq) {
          return qq === Eq ? gq : qq === gq ? Eq : qq
        }(Yq, qq, Eq));
        const lq = cq.gameBridge.send("swapInventorySlots", {
          a: qq,
          b: Eq
        });
        return lq ? tq(qq, Eq) : gq && (gq.idx = Yq), lq
      }), [tq]), Zq = (0, lq.useCallback)(((qq, Eq, gq, Yq) => {
        const lq = cq.gameBridge.send("quickMoveInventoryItem", {
          slot: gq,
          start: qq,
          end: Eq,
          amount: Yq
        });
        null !== lq && tq(gq, lq)
      }), [tq]), fq = (0, lq.useCallback)(((qq, Eq) => {
        var lq;
        ((qq, Eq, gq) => {
          const Yq = qq - (gq - rY.c.length);
          return !(!Eq || Yq < 0 || Yq >= rY.c.length) && (0, vq.Jb)(Eq) !== rY.c[Yq]
        })(Eq, null === (lq = dq.current) || void 0 === lq ? void 0 : lq.name, SY().player.length) || (TY({
          e: qq,
          idx: Eq,
          readInventory: SY,
          itemInfo: cq.gameBridge.latest("itemInfo"),
          draggedInfoRef: dq,
          specialItemRef: jq,
          moveAmtIntoSlot: bq,
          swapSlots: iq,
          moveIntoSlots: Zq,
          removeItem: pY,
          removeDraggedInfoRef: yq,
          close: gq,
          canCraft: Yq,
          variation: Oq
        }), Qq())
      }), [Yq, gq, bq, Zq, yq, iq, Oq, Qq]), Mq = (0, lq.useRef)(0), Tq = (0, lq.useRef)(null), zq = (0, lq.useRef)(null), Sq = (0, lq.useRef)(null), pq = (0, lq.useRef)(new Set), Gq = (0, lq.useRef)({
        x: 0,
        y: 0
      }), Lq = (0, lq.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Jq = (0, lq.useCallback)((() => (Sq.current = null, Lq.current.itemBeingDragged = !1, clearTimeout(Tq.current), !!zq.current && (zq.current = null, Qq(), !0))), [Qq]);
      (0, lq.useEffect)((() => {
        Jq(), pq.current.clear()
      }), [Eq]);
      const kq = qq => void 0 !== qq && (pq.current.has(qq) || null !== Sq.current && qq !== Sq.current),
        Rq = qq => {
          Lq.current.isTouch = (0, cg.q)(qq)
        },
        Uq = (0, lq.useCallback)((qq => Eq => {
          const Yq = (0, cg.q)(Eq);
          if (Yq || rq(Eq.pageX, Eq.pageY), mq)
            if (kq(Eq.pointerId)) void 0 !== Eq.pointerId && pq.current.add(Eq.pointerId);
            else {
              if (Rq(Eq), Yq) {
                Mq.current = Eq.timeStamp, Lq.current.itemBeingDragged = !0, Sq.current = Eq.pointerId;
                const gq = (0, cg.k)(SY(), qq);
                if (gq && gq.amount && gq.amount > 0) {
                  const gq = Eq.pageX,
                    Yq = Eq.pageY,
                    lq = Gq.current.x,
                    Oq = Gq.current.y;
                  clearTimeout(Tq.current), Tq.current = setTimeout((() => {
                    if (dq.current && dq.current.idx === qq && (Math.abs(gq - Gq.current.x) < 20 && Math.abs(Yq - Gq.current.y) < 20 || lq === Gq.current.x && Oq === Gq.current.y) && Lq.current.itemBeingDragged) {
                      const qq = SY(),
                        gq = qq.creative && !qq.chest && dq.current.idx >= Pg.c.numInvenSlots && null !== (0, cg.k)(qq, dq.current.idx).amount ? Pg.c.maxItemStackSize : dq.current.amount;
                      zq.current = {
                        initTouchX: Eq.pageX,
                        initTouchY: Eq.pageY,
                        maxAmount: gq
                      }, dq.current.amount = Math.ceil(dq.current.amount / 2), Vq.current.style.transform = "translate(0.5rem, 0.5rem)", aq(!0), Qq()
                    }
                  }), 500)
                }
              }
              fq(Eq, qq)
            }
          else qq === Bg.e && (0, cg.n)(Eq) && gq()
        }), [rq, fq, mq, gq, Qq]),
        Fq = (0, lq.useCallback)((qq => qq => {
          if (kq(qq.pointerId)) return;
          const Eq = (0, cg.q)(qq);
          if (Rq(qq), !Jq()) {
            if (Eq && dq.current && qq.timeStamp - Mq.current > 150) {
              const Eq = document.elementFromPoint(qq.clientX, qq.clientY);
              if (null !== Eq) {
                const gq = Eq.getAttribute("data-inven-idx");
                null !== gq ? fq(qq, parseInt(gq)) : Eq.classList.contains("InventoryBackgroundScreen") && fq(qq, -1)
              }
            }
            rq(qq.pageX, qq.pageY)
          }
        }), [rq, fq, Jq]);
      (0, lq.useEffect)((() => {
        let qq;
        const gq = ["pointerup", "pointercancel"],
          Yq = qq => {
            pq.current.has(qq.pointerId) ? setTimeout((() => {
              pq.current.delete(qq.pointerId)
            }), 0) : qq.pointerId === Sq.current && setTimeout((() => {
              Sq.current === qq.pointerId && Jq()
            }), 0)
          };
        if (Eq) {
          for (const qq of gq) document.addEventListener(qq, Yq, !0);
          if (!Lq.current.isTouch) {
            const qq = Gq.current;
            rq(qq.x, qq.y)
          }
          qq = qq => {
            qq.preventDefault(), kq(qq.pointerId) || (Rq(qq), rq(qq.pageX, qq.pageY), zq.current && qq.pointerId === Sq.current && (qq => {
              if (!dq.current) return zq.current = null, void Qq();
              const {
                initTouchX: Eq,
                maxAmount: gq
              } = zq.current, Yq = (qq.pageX - Eq) * zq.current.maxAmount / 160, lq = Math.ceil(gq / 2) + Math.ceil(Yq);
              dq.current.amount = Math.min(gq, Math.max(1, lq)), Qq()
            })(qq))
          }, document.addEventListener("pointermove", qq, !0)
        }
        return () => {
          document.removeEventListener("pointermove", qq, !0);
          for (const qq of gq) document.removeEventListener(qq, Yq, !0)
        }
      }));
      const sq = (0, lq.useCallback)((() => {
          if (dq.current) {
            const qq = (0, cg.k)(SY(), dq.current.idx);
            (!zY(dq.current, qq) || qq.amount < dq.current.amount) && yq()
          }
        }), [yq]),
        Xq = (0, lq.useCallback)((() => {
          const qq = dq.current;
          if (qq) {
            const Eq = (0, cg.k)(SY(), qq.idx);
            zY(qq, Eq) && (qq.attributes = Eq.attributes)
          }
        }), []);
      return {
        draggedDomRef: Vq,
        draggedInfoRef: dq,
        specialItemRef: jq,
        hoverInfoDomRef: Hq,
        longHoldSplitInfoRef: zq,
        currHoveredIdx: Aq,
        currHoveredDisplayInfo: Bq,
        displayDraggedItemName: Nq,
        forceRerenderIfVisible: Qq,
        removeDraggedInfoRef: yq,
        checkDraggedItemConsistencyWithInven: sq,
        refreshDraggedAttributes: Xq,
        swapSlots: iq,
        getPointerDownForIdx: Uq,
        getPointerUpForIdx: Fq,
        getSetHovering: nq,
        setCurrHoveredDisplayInfo: Wq,
        moveFollowerTo: rq
      }
    }
    class JY {
      constructor(qq) {
        this.snapshot = [], this.newSlots = new Set, this.update(qq, !1)
      }
      update(qq, Eq) {
        const gq = qq.map((qq => {
          var Eq;
          return qq ? {
            name: qq.name,
            amount: null !== (Eq = qq.amount) && void 0 !== Eq ? Eq : 1
          } : null
        }));
        gq.forEach(((qq, gq) => {
          const Yq = this.snapshot[gq],
            lq = (null === qq || void 0 === qq ? void 0 : qq.name) !== (null === Yq || void 0 === Yq ? void 0 : Yq.name);
          (!qq || lq || qq.amount < Yq.amount) && this.newSlots.delete(gq), Eq && qq && (lq || qq.amount > Yq.amount) && this.newSlots.add(gq)
        })), this.snapshot = gq
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(qq) {
        return this.newSlots.has(qq)
      }
    }
    const kY = (qq, Eq, gq) => ({
      button: Eq,
      shiftKey: gq,
      pageX: qq.clientX,
      pageY: qq.clientY,
      clientX: qq.clientX,
      clientY: qq.clientY,
      pointerType: "mouse"
    });

    function RY(qq) {
      const [Eq, gq] = (0, lq.useState)(qq);
      return qq && !Eq && gq(!0), (0, lq.useEffect)((() => {
        if (Eq) return;
        let qq = !0;
        const Yq = () => {
            qq && (qq = !1, gq(!0))
          },
          lq = "function" === typeof window.requestIdleCallback,
          Oq = lq ? window.requestIdleCallback(Yq, {
            timeout: 2e3
          }) : void 0,
          mq = setTimeout(Yq, lq ? 2e3 : 1e3);
        return () => {
          qq = !1, clearTimeout(mq), void 0 !== Oq && window.cancelIdleCallback(Oq)
        }
      }), [Eq]), Eq
    }
    const UY = (0, lq.memo)((function(qq) {
      var Eq;
      let {
        show: gq,
        onOpen: Yq,
        onClose: Oq,
        variation: xq
      } = qq;
      const Bq = (0, lq.useRef)(null),
        Wq = (0, lq.useRef)(null),
        Nq = function(qq) {
          const [Eq, gq] = (0, lq.useState)(!0), [Yq, Oq] = (0, lq.useState)(!1), mq = (0, lq.useRef)(null), xq = (0, lq.useRef)(null), cq = (0, Aq.h)("_shield"), uq = (0, lq.useRef)(null), Bq = (0, Aq.h)("_health"), Wq = (0, lq.useRef)(null);

          function Nq(qq) {
            const Eq = Date.now() + qq;
            Eq < xq.current || (gq(!1), clearTimeout(mq.current), xq.current = Eq, mq.current = setTimeout((() => {
              gq(!0)
            }), qq))
          }
          return (0, lq.useEffect)((() => {
            Nq(Ng);
            const qq = aq.i.subscribe("requestingPlayVideoAd", (() => {
              Nq(Ng)
            }));
            return () => {
              clearTimeout(mq.current), aq.i.unsubscribe(qq)
            }
          }), []), (0, lq.useEffect)((() => {
            (uq.current > cq || Wq.current > Bq) && Nq(6e4), uq.current = cq, Wq.current = Bq
          }), [cq, Bq]), (0, lq.useEffect)((() => {
            let Eq = null;
            return qq ? Eq = setTimeout((() => {
              Oq(!0)
            }), 250) : Oq(!1), () => {
              clearTimeout(Eq)
            }
          }), [qq]), Eq && Yq
        }(gq);
      (0, rq.h)(gg.c, null);
      const Vq = (0, gg.h)(),
        dq = Vq.some((qq => qq.panel)),
        jq = (0, hq.f)("inventory", (qq => null !== qq.chest && (null !== qq.chest.ironChest || oY(qq.chest.numSlots)))),
        Hq = RY(gq),
        oq = RY(gq),
        [Pq, Qq] = (0, lq.useState)([]),
        yq = (0, lq.useCallback)((qq => {
          Qq((Eq => Eq.filter((Eq => Eq.id !== qq))))
        }), []),
        tq = (0, lq.useRef)(null),
        nq = (0, lq.useRef)(0),
        bq = (0, lq.useCallback)((() => {
          tq.current && (nq.current = tq.current.scrollTop), Oq()
        }), [Oq]),
        iq = (0, Aq.h)("inventoryItemsMoveable"),
        Zq = (0, Aq.h)("canCraft"),
        {
          clientEscMenuOptions: fq
        } = (0, Lq.j)(["clientEscMenuOptions"]),
        Mq = (0, lq.useRef)(null);
      Mq.current || (Mq.current = new JY(cq.gameBridge.latest("inventory").player));
      const zq = Mq.current,
        {
          draggedDomRef: Sq,
          draggedInfoRef: pq,
          specialItemRef: Gq,
          hoverInfoDomRef: Jq,
          longHoldSplitInfoRef: kq,
          currHoveredIdx: Rq,
          currHoveredDisplayInfo: Uq,
          displayDraggedItemName: Fq,
          forceRerenderIfVisible: sq,
          removeDraggedInfoRef: Xq,
          checkDraggedItemConsistencyWithInven: wq,
          refreshDraggedAttributes: Kq,
          swapSlots: Cq,
          getPointerDownForIdx: Iq,
          getPointerUpForIdx: eq,
          getSetHovering: Dq,
          setCurrHoveredDisplayInfo: qE,
          moveFollowerTo: EE
        } = LY({
          show: gq,
          close: bq,
          canCraft: Zq,
          variation: xq,
          inventoryItemsMoveable: iq,
          setCraftFlyAnims: Qq
        });
      (0, lq.useEffect)((() => {
        const qq = !gq && null !== cq.gameBridge.latest("inventory").chest;
        if (qq && cq.gameBridge.send("closeChest", null), gq || (zq.clearMarks(), Dq(null)(!1)), qq) {
          xg.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [gq]), (0, hq.d)("chestToggled", (qq => {
        if (qq ? Yq() : gq && bq(), qq) {
          xg.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const gE = (0, iE.j)();
      (0, hq.d)("inventory", (qq => {
        let {
          player: Eq
        } = qq;
        var Yq, lq, Oq;
        (zq.update(Eq, !gq && gE.shown), Gq.current) && (Gq.current = (lq = Gq.current, Oq = null !== (Yq = Eq[Gq.current.idx]) && void 0 !== Yq ? Yq : null, zY(lq, Oq) ? (lq.attributes = Oq.attributes, null !== Oq.amount && lq.amount > Oq.amount && (lq.amount = Oq.amount), lq) : null));
        Kq(), null !== Rq && Dq(Rq)(!0), sq()
      })), (0, lq.useEffect)((() => (cq.gameBridge.send("setInventoryOpen", gq), () => {
        cq.gameBridge.send("setInventoryOpen", !1)
      })), [gq]);
      const YE = (qq, Eq) => {
        if (qq === Bg.i) return void(qq => {
          const Eq = Gq.current;
          if (!Eq || null === (0, cg.k)(cq.gameBridge.latest("inventory"), Eq.idx)) return;
          const gq = qq ? Math.max(Eq.amount, 1) : 1,
            Yq = Eq.amount - gq;
          if (!cq.gameBridge.send("removeInventoryItem", {
              slot: Eq.idx,
              amount: gq,
              drop: !0
            })) return;
          const lq = Gq.current;
          lq && (lq.amount = Math.min(lq.amount, Yq), lq.amount <= 0 && (Gq.current = null)), sq()
        })(Eq);
        const gq = null === qq ? null : (0, cg.k)(cq.gameBridge.latest("inventory"), qq);
        if (null !== gq) {
          var Yq, lq, Oq;
          const mq = Eq && null !== (Yq = gq.amount) && void 0 !== Yq ? Yq : 1;
          cq.gameBridge.send("removeInventoryItem", {
            slot: qq,
            amount: mq,
            drop: !0
          }), qq === (null === (lq = pq.current) || void 0 === lq ? void 0 : lq.idx) && (pq.current.amount -= mq, pq.current.amount <= 0 && Xq(), sq()), qq === (null === (Oq = Gq.current) || void 0 === Oq ? void 0 : Oq.idx) && (Gq.current = null, sq())
        }
      };
      (0, hq.d)("inventoryDropRequested", (qq => {
        gq && Rq !== Bg.i && YE(Rq, qq)
      }));
      const lE = (qq, Eq) => {
        let gq = Eq;
        if (Eq === Bg.i) {
          if (!Gq.current) return;
          gq = Gq.current.idx
        }
        const Yq = Cq(qq, gq);
        if (Yq && pq.current && (pq.current.idx === gq ? pq.current.idx = qq : pq.current.idx === qq && (pq.current.idx = gq)), Yq && Eq === Bg.i) {
          const qq = (0, cg.k)(cq.gameBridge.latest("inventory"), gq);
          Gq.current = qq ? {
            idx: gq,
            name: qq.name,
            attributes: qq.attributes,
            amount: qq.amount
          } : null
        }
        sq()
      };
      (0, hq.d)("numberKeyPressed", (qq => {
        null !== Rq && gq && lE(qq - 1, Rq)
      })), (0, lq.useEffect)((() => {
        gq || (Gq.current = null, Xq(), qE(null))
      }), [gq, Xq, qE, Gq]);
      const OE = Gq.current;
      (0, lq.useEffect)((() => {
        Rq === Bg.i && Dq(Bg.i)(!0)
      }), [OE, Rq, Dq]);
      const mE = () => {
        wq(), Kq(), sq()
      };
      (0, hq.d)("chestRefreshed", mE), (0, hq.d)("inventorySynced", mE);
      const [xE, AE] = (0, lq.useState)(new Map), cE = null !== (Eq = xE.get(xq)) && void 0 !== Eq ? Eq : null, uE = (qq, Eq) => {
        AE((gq => {
          const Yq = gq.get(qq);
          return Yq && Yq.name === Eq.name && Yq.Nc === Eq.Nc ? gq : new Map(gq).set(qq, Eq)
        }))
      };
      (0, rq.f)("craftingRecipesEdited", (() => {
        sq()
      })), (0, rq.f)(Fg.e, (qq => {
        let {
          variation: Eq,
          itemName: gq
        } = qq;
        uE(Eq, {
          name: gq,
          Nc: 0
        })
      }));
      const [BE, WE] = (0, lq.useState)(null), [NE, aE] = (0, lq.useState)(null);
      (0, hq.d)("enchantingTableOpened", (qq => {
        let {
          position: Eq,
          blockName: gq
        } = qq;
        WE(Eq), aE(gq)
      }));
      const [VE, dE] = (0, lq.useState)(""), [jE, HE] = (0, lq.useState)(null);
      (0, lq.useEffect)((() => {
        gq && tq.current && (tq.current.scrollTop = nq.current)
      }), [gq]);
      return (qq => {
        const Eq = (0, lq.useRef)(qq);
        Eq.current = qq, (0, lq.useEffect)((() => {
          if (!qq.show) return;
          const gq = (qq, gq, Yq, lq) => {
              const {
                getPointerDownForIdx: Oq,
                getPointerUpForIdx: mq
              } = Eq.current;
              Oq(qq)(kY(gq, Yq, lq)), mq(qq)(kY(gq, Yq, lq))
            },
            Yq = {
              primary: (qq, Eq) => {
                gq(qq, Eq, 0, !1)
              },
              secondary: (qq, Eq) => {
                gq(qq, Eq, 2, !1)
              },
              quickMove: (qq, Eq) => {
                gq(qq, Eq, 0, !0)
              },
              dropHeld: (qq, gq) => {
                Eq.current.getPointerDownForIdx(Bg.e)(kY(gq, qq ? 0 : 2, !1))
              },
              dropSlot: (qq, gq) => {
                Eq.current.dropFromIdx(qq, gq)
              },
              swapWithHotbar: (qq, gq) => {
                Eq.current.swapWithHotbar(qq, gq)
              },
              cancel: () => {
                Eq.current.removeDraggedInfoRef()
              },
              isHolding: () => !!Eq.current.draggedInfoRef.current,
              hasItemAt: qq => {
                const {
                  draggedInfoRef: gq,
                  specialItemRef: Yq
                } = Eq.current;
                if (qq === Bg.i) return !!Yq.current;
                const lq = (0, cg.k)(cq.gameBridge.latest("inventory"), qq);
                return !!lq && (0, hg.c)(qq, (0, cg.d)(lq), [gq.current, Yq.current]).shown
              },
              hover: (qq, gq) => {
                const {
                  moveFollowerTo: Yq,
                  getSetHovering: lq
                } = Eq.current;
                Yq(gq.clientX, gq.clientY), lq(null !== qq && void 0 !== qq ? qq : void 0)(null !== qq, void 0, {
                  pageX: gq.clientX,
                  pageY: gq.clientY
                })
              },
              moveTo: qq => {
                Eq.current.moveFollowerTo(qq.clientX, qq.clientY)
              },
              close: () => {
                Eq.current.close()
              }
            };
          return (0, Yg.h)(Yq)
        }), [qq.show])
      })({
        show: gq,
        close: bq,
        draggedInfoRef: pq,
        specialItemRef: Gq,
        getPointerDownForIdx: Iq,
        getPointerUpForIdx: eq,
        getSetHovering: Dq,
        moveFollowerTo: EE,
        removeDraggedInfoRef: Xq,
        dropFromIdx: YE,
        swapWithHotbar: lE
      }), (0, lq.useEffect)((() => {
        aq.i.TV("inventoryDraggedItemUpdated", {
          draggedInfo: pq.current,
          specialItemInfo: Gq.current,
          setHovered: Dq,
          pointerDown: Iq,
          pointerUp: eq,
          variation: Zq ? xq : void 0,
          craftFlyAnims: Pq
        })
      })), (0, uq.jsxs)(Tq.d, {
        show: gq,
        style: {
          touchAction: gq ? "none" : void 0
        },
        children: [pq.current && (0, uq.jsx)(Vg, {
          draggedInfo: pq.current,
          toAddRef: Sq
        }), pq.current && Fq && (0, uq.jsx)(dg, {
          className: "DraggedInvenItemName",
          displayInfo: GY(pq.current),
          domRef: null
        }), !pq.current && Uq && (0, uq.jsx)(dg, {
          displayInfo: Uq,
          domRef: Jq
        }), kq.current && pq.current && (0, uq.jsx)(jg, {
          info: kq.current,
          draggedInfo: pq.current
        }), Pq.map((qq => (0, uq.jsx)(ug.e, {
          anim: qq,
          onComplete: yq
        }, qq.id))), (0, uq.jsx)(mq.c, {
          show: gq,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: bq,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: Iq(Bg.e),
          pointerUp: eq(Bg.e),
          doGameplayStartStopOnShow: !0
        }), Hq && (0, uq.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, uq.jsx)("div", {
            ref: Bq,
            className: "InventoryAdOuter",
            children: (0, uq.jsx)(Ag.d, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Bq
              },
              verticalAlign: "start",
              showing: gq && Nq,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, uq.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, uq.jsxs)("div", {
              className: og()("Inventory", {
                WithPanelButtons: dq,
                WideChestOpen: jq
              }),
              children: [(0, uq.jsx)("div", {
                className: "InventoryFiller"
              }), (0, uq.jsx)(mg, {
                show: gq,
                buttons: Vq
              }), (0, uq.jsxs)("div", {
                className: "InvenBody",
                children: [(0, uq.jsx)(tY, {
                  variation: xq,
                  canCraft: Zq,
                  show: gq,
                  creativeMounted: oq,
                  specialItemRef: Gq,
                  draggedInfo: pq.current,
                  getSetHovering: Dq,
                  getPointerDownForIdx: Iq,
                  getPointerUpForIdx: eq,
                  enchantingTablePosition: BE,
                  enchantingTableBlockName: NE,
                  selectedCraftable: cE,
                  dispatchSelectedCraftable: qq => {
                    uE(xq, qq)
                  },
                  creativeScrollDiv: tq,
                  creativeSearchVal: VE,
                  setCreativeSearchVal: dE,
                  creativeCategory: jE,
                  setCreativeCategory: HE,
                  onCraft: function(qq, Eq) {
                    let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (wq(), (qq || gq.length > 0) && Qq((Eq => {
                        const Yq = [...Eq],
                          lq = Eq.filter((qq => "ingredient" === qq.kind)).length;
                        for (const qq of gq.slice(0, Math.max(0, 24 - lq))) Yq.push({
                          id: (0, ug.h)(),
                          ...qq,
                          to: qq.to
                        });
                        return qq && Yq.push({
                          id: (0, ug.h)(),
                          ...qq,
                          to: (0, cg.h)(qq.eA)
                        }), Yq
                      })), null !== Eq) {
                      var Yq;
                      const qq = cq.gameBridge.latest("inventory");
                      (0, vq.Jb)(null === (Yq = (0, cg.k)(qq, Eq)) || void 0 === Yq ? void 0 : Yq.name) ? Iq(Eq)({
                        button: 0,
                        shiftKey: !0
                      }): Cq(Eq, qq.selectedSlot)
                    }
                  }
                }), (0, uq.jsx)(ZY, {
                  draggedInfo: pq.current,
                  specialItemInfo: Gq.current,
                  craftFlyAnims: Pq,
                  getSetHovering: Dq,
                  getPointerDownForIdx: Iq,
                  getPointerUpForIdx: eq,
                  variation: xq,
                  canCraft: Zq,
                  isNewSlot: qq => fq.showNewItemIndicator && zq.isNew(qq)
                })]
              })]
            }), (0, uq.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, uq.jsx)("div", {
                ref: Wq,
                className: "InventoryAd",
                children: (0, uq.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var FY = gq(1405),
      sY = gq(136);
    const XY = (0, lq.memo)((function(qq) {
      let {
        show: Eq,
        onOpen: gq,
        onClose: Yq
      } = qq;
      const Oq = (0, lq.useRef)(0),
        xq = () => (0, FY.d)() && !(0, FY.m)() && Oq.current <= 2;
      Eq = xq() && Eq;
      const Aq = () => {
        Oq.current++, Yq()
      };
      (0, rq.f)("ctrlCrouchWithoutFullscreen", (() => {
        xq() && gq()
      })), (0, rq.f)("displaymodeFullscreenChange", (qq => {
        Eq && qq && Aq()
      }));
      const cq = "crazygames" === sY.n;
      return (0, uq.jsx)(mq.c, {
        close: Aq,
        escDoesExit: !0,
        show: Eq,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, uq.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, uq.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), cq && (0, uq.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, uq.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, uq.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!cq && (0, uq.jsx)(Nq.p, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, FY.q)(), Aq()
              },
              children: (0, uq.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, uq.jsx)(Nq.K, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Aq()
              },
              children: (0, uq.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var wY = gq(3479),
      KY = gq(3494),
      CY = gq(1336),
      IY = gq(3466),
      eY = gq(1339),
      DY = gq(36599),
      ql = gq(3471),
      El = gq(3476);

    function gl(qq, Eq) {
      return (0, DY.f)(!0, qq, Eq) ? () => {
        !async function(qq) {
          await IY.d.refresh();
          const {
            data: Eq,
            failed: gq
          } = IY.d.getState();
          if (null === Eq || gq) return;
          const Yq = IY.d.getExclusion(qq);
          if ("blocked" === Yq) return;
          const lq = null === Yq;
          CY.NotificationProvider.showCustomPopup({
            body: Eq => {
              const gq = gq => ({
                text: ql.f[gq].text,
                onClick: () => {
                  Eq(), (0, El.g)(gq, qq, null)
                }
              });
              return (0, uq.jsx)(eY.j, {
                title: lq ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: qq
                  }
                },
                secondary: lq ? gq("ignore") : void 0,
                confirm: gq("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: Eq
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(qq)
      } : null
    }
    gq(3486);
    const Yl = (0, lq.memo)((function(qq) {
      let {
        show: Eq,
        onOpen: gq,
        onClose: Yq
      } = qq;
      const [Oq, xq] = (0, lq.useState)(""), [Aq, Bq] = (0, lq.useState)(""), [Wq, Nq] = (0, lq.useState)(null), [aq, Vq] = (0, lq.useState)(null), dq = (0, hq.g)("hiddenPlayerNames"), jq = {
        kind: "worldCodeLine",
        onSubmit: (qq, Eq) => {
          Yq(), cq.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: aq,
            Oc: qq,
            details: Eq
          })
        }
      }, Hq = {
        kind: "player",
        shownPlayerName: (0, EE.g)(Oq, dq),
        onSubmit: (qq, Eq) => {
          Yq(), (0, KY.e)({
            playerId: Aq,
            playerName: Oq,
            chatMsgId: aq,
            policyId: qq,
            details: Eq,
            onAccepted: gl(Oq, dq)
          })
        }
      };
      return (0, rq.f)("OpenReportMenu", (qq => {
        let {
          playerEId: Eq,
          playerName: Yq,
          Hc: lq,
          serverChatMsgId: Oq
        } = qq;
        Bq(Eq), xq(Yq), Nq(lq), Vq(Oq), gq()
      })), (0, uq.jsx)(mq.c, {
        show: Eq,
        close: Yq,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, uq.jsx)("div", {
          className: "ReportPanel",
          children: Eq && (0, uq.jsx)(wY.b, {
            reported: null === Aq ? jq : Hq,
            chatMessage: Wq,
            inGame: !0,
            onCancel: Yq
          })
        })
      })
    }));
    var ll = gq(36896);
    const Ol = (0, lq.memo)((function(qq) {
      let {
        show: Eq,
        onOpen: gq,
        onClose: Yq
      } = qq;
      const {
        t: Oq
      } = (0, Kq.v)(), [xq, Aq] = (0, lq.useState)(null), [Bq, Wq] = (0, lq.useState)(0);
      (0, rq.f)("OpenDiscordReportBox", (qq => {
        cq.gameBridge.send("requestDiscordReportKey", qq), Wq(0), gq()
      }));
      const aq = () => {
        Yq(), Aq(null), Wq(0)
      };
      return (0, rq.f)("setDiscordReportKey", (qq => {
        Aq(qq)
      })), (0, uq.jsx)(mq.c, {
        show: Eq,
        close: aq,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, uq.jsx)("div", {
          className: "ReportPanel",
          children: (0, uq.jsx)(eY.j, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(ll.b, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: aq
            },
            padStartsOn: "cancel",
            children: (0, uq.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, uq.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== xq && void 0 !== xq ? xq : Oq("report:loadingReportKey")
              }), (0, uq.jsx)(Nq.g, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(xq).catch((qq => {
                    console.error("Failed to copy report key:", qq)
                  })), Wq(Date.now())
                },
                disabled: Date.now() - Bq < 1e3 || !xq,
                children: Date.now() - Bq < 1e3 ? Oq("general:copied") : Oq("general:copy")
              })]
            })
          })
        })
      })
    }));
    var ml = gq(1274);
    const xl = {
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
      Al = (0, lq.memo)((function(qq) {
        let {
          show: Eq,
          onOpen: gq,
          onClose: Yq
        } = qq;
        const [Oq, xq] = (0, lq.useState)(null), Aq = (0, lq.useRef)(0), Bq = (0, lq.useRef)(null), {
          t: Wq
        } = (0, Kq.v)();
        (0, rq.f)("EditCustomLobbyBlock", (qq => {
          let {
            pos: Eq
          } = qq;
          xq(Eq), null !== Eq && gq(), Bq.current.scrollTo(0, Aq.current)
        }));
        const Nq = qq => {
          cq.gameBridge.send("setCustomLobbyBlock", {
            pos: Oq,
            blockName: qq
          }), Yq()
        };
        return (0, uq.jsx)(mq.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: Yq,
          escDoesExit: !0,
          show: Eq,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, uq.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Bq,
            onScroll: () => {
              Aq.current = Bq.current.scrollTop
            },
            children: (0, uq.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(xl).map((qq => {
                let [Eq, gq] = qq;
                return (0, uq.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, uq.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Wq(Eq)
                  }), (0, uq.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(gq).map((qq => {
                      let [Eq, {
                        tooltip: gq,
                        blocks: Yq
                      }] = qq;
                      return (0, uq.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, uq.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Wq(Eq), (0, uq.jsx)(Xq.c, {
                            hoverInfo: Wq(gq),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, uq.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Yq.map((qq => (0, uq.jsx)(cl, {
                            blockName: qq,
                            selectBlock: Nq
                          }, qq)))
                        })]
                      }, Eq)
                    }))
                  })]
                }, Eq)
              }))
            })
          })
        })
      })),
      cl = (0, lq.memo)((function(qq) {
        var Eq;
        let {
          blockName: gq,
          selectBlock: Yq
        } = qq;
        const lq = (0, mY.e)(gq),
          Oq = null !== (Eq = void 0 === lq ? void 0 : (0, OY.displayNameOf)(lq)) && void 0 !== Eq ? Eq : gq,
          mq = void 0 === lq ? void 0 : (0, OY.descriptionOf)(lq);
        return (0, uq.jsx)(Xq.e, {
          tooltipInner: (0, uq.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, uq.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, uq.jsx)(tq.c, {
                text: Oq
              })
            }), mq && (0, uq.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, uq.jsx)(tq.c, {
                text: mq
              })
            })]
          }),
          children: (0, uq.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Yq(gq),
            children: (0, uq.jsx)(Og.e, {
              itemName: gq,
              amount: 1
            })
          })
        }, gq)
      }));
    var ul = gq(2907),
      Bl = gq(4085),
      Wl = gq(9313);

    function Nl() {
      const qq = (0, hq.g)("itemInfo");
      return (0, lq.useMemo)((() => function(qq) {
        return {
          getDefaultItemStat(Eq, gq) {
            var Yq;
            const lq = qq[Eq];
            return "description" === gq ? null === lq || void 0 === lq ? void 0 : lq.description : null !== (Yq = null === lq || void 0 === lq ? void 0 : lq.displayName) && void 0 !== Yq ? Yq : Eq
          }
        }
      }(qq)), [qq])
    }
    const al = (0, lq.memo)((function(qq) {
        var Eq, gq, Yq, Oq, xq, Aq, cq, Bq, Wq, Nq, aq, Vq, jq, Hq, oq, Pq, Qq, yq, tq, vq, hq, nq, bq;
        let {
          togglePointerLock: iq,
          show: Zq,
          onOpen: fq,
          onClose: Mq
        } = qq;
        const {
          t: Tq
        } = (0, Kq.v)(), zq = Nl(), Sq = (0, lq.useRef)(null), pq = (0, lq.useRef)(Bl.c.MobHungerLevel.Hungry), Gq = (0, lq.useRef)(null), Lq = (0, ul.c)(), Jq = (0, lq.useRef)(null), kq = (0, lq.useRef)(null), Rq = Sq.current;
        (0, lq.useEffect)((() => {
          if (!Zq) return;
          const qq = Wl.i.openPet(Jq.current);
          return kq.current = qq, () => {
            qq.close(), kq.current = null
          }
        }), [Zq]), (0, lq.useEffect)((() => {
          Zq && Rq && kq.current.show(function(qq) {
            var Eq;
            let {
              mobType: gq,
              mobSettings: Yq
            } = qq;
            return {
              mobType: gq,
              variation: null !== (Eq = Yq.variation) && void 0 !== Eq ? Eq : "default",
              metaInfo: Yq.metaInfo,
              tamed: !(0, HY.H)(Yq.ownerDbId)
            }
          }(Rq))
        }), [Zq, Rq]), (0, lq.useEffect)((() => {
          const qq = () => {
            var qq;
            const Eq = Bl.c.getMobHungerLevel(null === (qq = Sq.current) || void 0 === qq ? void 0 : qq.mobSettings.petInfo.lastFedAt);
            if (Eq !== pq.current && (pq.current = Eq, Lq()), Gq.current) {
              var gq;
              const qq = Date.now(),
                Eq = Bl.c.getNextStateAt(null === (gq = Sq.current) || void 0 === gq ? void 0 : gq.mobSettings.petInfo.lastFedAt);
              let Yq = Math.floor((Eq - qq) / 1e3),
                lq = "";
              if (Yq > 3600) {
                lq += Math.floor(Yq / 60 / 60).toString().padStart(2, "0"), lq += ":", Yq %= 3600
              }
              const Oq = Yq % 60;
              lq += Math.floor(Yq / 60).toString().padStart(2, "0"), lq += ":", lq += Oq.toString().padStart(2, "0"), Gq.current.textContent = lq
            }
          };
          qq();
          const Eq = setInterval(qq, 250);
          return () => {
            clearInterval(Eq)
          }
        }), [Rq, Lq]), (0, rq.f)("showPetUi", (qq => {
          let {
            mobType: Eq,
            mobSettings: gq
          } = qq;
          Sq.current = {
            mobType: Eq,
            mobSettings: gq
          }, Zq || fq()
        }));
        const Uq = null === (Eq = Sq.current) || void 0 === Eq ? void 0 : Eq.mobSettings.health,
          Fq = null === (gq = Sq.current) || void 0 === gq ? void 0 : gq.mobSettings.maxHealth,
          sq = Bl.c.getFriendshipLevelInfo(null !== (Yq = null === (Oq = Sq.current) || void 0 === Oq ? void 0 : Oq.mobSettings.petInfo.friendshipPoints) && void 0 !== Yq ? Yq : 0);
        return (0, uq.jsx)(mq.c, {
          className: "PetUIOuter",
          close: Mq,
          escDoesExit: !0,
          show: Zq,
          togglePointerLock: iq,
          forcePointerUnlock: Zq,
          globallyUniqueKey: "PetUI",
          children: (0, uq.jsx)("div", {
            className: "PetUI",
            children: (0, uq.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, uq.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, uq.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (xq = null === (Aq = Sq.current) || void 0 === Aq ? void 0 : Aq.mobSettings.name) && void 0 !== xq ? xq : "Your Pet"
                }), (0, uq.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Jq
                })]
              }), (0, uq.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, HY.H)(null === (cq = Sq.current) || void 0 === cq ? void 0 : cq.mobSettings.petInfo.friendshipPoints) && (0, uq.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, uq.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Tq("mobAiPlugin:friendshipTitle")
                  }), (0, uq.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Bl.c.getIconsFromFriendshipPoints(null !== (Bq = Sq.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Bq ? Bq : 0).map(((qq, Eq) => (0, uq.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: qq,
                        amount: 1
                      })
                    }, Eq)))
                  }), (0, uq.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, uq.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, uq.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${sq.totalPointsForNextLevel>0?Math.max(sq.pointsIntoCurrentLevel/sq.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, uq.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: sq.totalPointsForNextLevel > 0 ? ` ${Math.ceil(sq.pointsIntoCurrentLevel)}/${Math.ceil(sq.totalPointsForNextLevel)}` : Math.ceil(sq.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, uq.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, uq.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Tq("mobAiPlugin:hungerTitle")
                  }), (0, uq.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Bl.c.hungerLevelIcons[pq.current].map(((qq, Eq) => (0, uq.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: qq,
                        amount: 1
                      })
                    }, Eq)))
                  }), (0, uq.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Tq(Bl.c.hungerLevelTranslations[pq.current].translationKey), pq.current !== Bl.c.MobHungerLevel.Starving && !(0, HY.H)(null === (Wq = Sq.current) || void 0 === Wq ? void 0 : Wq.mobSettings.petInfo.lastFedAt) && (0, uq.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Tq("mobAiPlugin:nextFeedIn", {
                        state: Tq(Bl.c.hungerLevelTranslations[pq.current + 1].translationKey)
                      }), ":", " ", (0, uq.jsx)("span", {
                        ref: Gq
                      })]
                    })]
                  })]
                }), (0, uq.jsx)(Xq.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uq.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Tq("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, uq.jsxs)("div", {
                    className: og()("PetUIQuickStatsItem", {
                      Disabled: (0, HY.H)(Uq) || (0, HY.H)(Fq)
                    }),
                    children: [(0, uq.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, uq.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, HY.H)(Uq) || (0, HY.H)(Fq) ? "" : (0, uq.jsxs)(uq.Fragment, {
                        children: [Math.ceil(Uq), (0, uq.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(Fq)]
                        })]
                      })
                    })]
                  })
                }), (0, uq.jsx)(Xq.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uq.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Tq("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, uq.jsxs)("div", {
                    className: og()("PetUIQuickStatsItem", {
                      Disabled: (0, HY.H)(null === (Nq = Sq.current) || void 0 === Nq ? void 0 : Nq.mobSettings.attackDamage) || Sq.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, uq.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, uq.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (aq = Sq.current) || void 0 === aq ? void 0 : aq.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, uq.jsx)(Xq.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uq.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Tq("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, uq.jsxs)("div", {
                    className: og()("PetUIQuickStatsItem", {
                      Disabled: (0, HY.H)(null === (Vq = Sq.current) || void 0 === Vq ? void 0 : Vq.mobSettings.secondaryAttackDamage) || Sq.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, uq.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, uq.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (jq = Sq.current) || void 0 === jq ? void 0 : jq.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, uq.jsx)(Xq.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uq.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Tq("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, uq.jsxs)("div", {
                    className: og()("PetUIQuickStatsItem", {
                      Disabled: (0, HY.H)(null === (Hq = Sq.current) || void 0 === Hq ? void 0 : Hq.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, uq.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, uq.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (oq = null === (Pq = Sq.current) || void 0 === Pq || null === (Qq = Pq.mobSettings.baseRunningSpeed) || void 0 === Qq ? void 0 : Qq.toFixed(2)) && void 0 !== oq ? oq : ""
                    })]
                  })
                }), (0, uq.jsx)(Xq.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, uq.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Tq("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, uq.jsxs)("div", {
                    className: og()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (yq = Sq.current) || void 0 === yq ? void 0 : yq.mobSettings.metaInfo)
                    }),
                    children: [(0, uq.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, uq.jsx)(Og.e, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, uq.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (tq = Sq.current) || void 0 === tq ? void 0 : tq.mobSettings.metaInfo) ? (0, uq.jsx)(dq.d, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, HY.H)(null === (vq = Sq.current) || void 0 === vq ? void 0 : vq.mobSettings.tameInfo) && (0, uq.jsxs)(uq.Fragment, {
                  children: [(0, uq.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, uq.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uq.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uq.jsx)(dl, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Bl.c.feedTextColours[Bl.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uq.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, uq.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Sq.current.mobSettings.petInfo.superlikedFoodKnown ? (0, uq.jsx)(Vl, {
                            food: Sq.current.mobSettings.petInfo.superlikedFood
                          }) : (0, uq.jsx)(dl, {
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
                    }), (0, uq.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uq.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uq.jsx)(dl, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Bl.c.feedTextColours[Bl.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uq.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (hq = Sq.current.mobSettings.tameInfo.likedFoods) || void 0 === hq ? void 0 : hq.filter((qq => !Sq.current.mobSettings.petInfo.superlikedFoodKnown || qq !== Sq.current.mobSettings.petInfo.superlikedFood)).map((qq => (0, uq.jsx)(Vl, {
                          food: qq
                        }, qq)))
                      })]
                    }), (0, uq.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uq.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uq.jsx)(dl, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Bl.c.feedTextColours[Bl.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uq.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (nq = Sq.current.mobSettings.tameInfo.neutralFoods) || void 0 === nq ? void 0 : nq.map((qq => (0, uq.jsx)(Vl, {
                          food: qq
                        }, qq)))
                      })]
                    }), (0, uq.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, uq.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, uq.jsx)(dl, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Bl.c.feedTextColours[Bl.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, uq.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (bq = Sq.current.mobSettings.tameInfo.dislikedFoods) || void 0 === bq ? void 0 : bq.map((qq => (0, uq.jsx)(Vl, {
                          food: qq
                        }, qq)))
                      })]
                    })]
                  }), Sq.current.mobSettings.tameInfo.levelUpBonuses && (0, uq.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Bl.c.MAX_LEVEL + 1
                    }).map(((qq, Eq) => {
                      const gq = Eq;
                      if (0 === gq) return null;
                      const Yq = Sq.current.mobSettings.tameInfo.levelUpBonuses[gq],
                        lq = Bl.c.getBonusDisplayInfo(zq, Sq.current.mobSettings, Sq.current.mobType, Yq);
                      return (0, uq.jsxs)("div", {
                        className: og()("PetUIFeedDropContainer", {
                          Selected: gq === Bl.c.getFriendshipLevelInfo(Sq.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, uq.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: gq
                          }).map(((qq, Eq) => (0, uq.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, uq.jsx)(Og.e, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${gq}-${Eq}`)))
                        }), (0, uq.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: lq && (0, uq.jsx)(dl, {
                            icon: lq.icon,
                            displayName: lq.displayName,
                            description: lq.description
                          })
                        })]
                      }, gq)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Vl = (0, lq.memo)((function(qq) {
        let {
          food: Eq,
          includeDescription: gq = !1
        } = qq;
        const Yq = Nl(),
          lq = Yq.getDefaultItemStat(Eq, "displayName"),
          Oq = Yq.getDefaultItemStat(Eq, "description");
        return (0, uq.jsx)(dl, {
          icon: Eq,
          displayName: lq,
          description: gq ? Oq : null
        })
      })),
      dl = (0, lq.memo)((function(qq) {
        let {
          icon: Eq,
          displayName: gq,
          description: Yq,
          tintColor: lq,
          className: Oq = "PetUIFoodItem"
        } = qq;
        return (0, uq.jsx)(Xq.e, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, uq.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, uq.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, uq.jsx)(tq.c, {
                text: gq
              })
            }), Yq && (0, uq.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, uq.jsx)(tq.c, {
                text: Yq
              })
            })]
          }),
          children: (0, uq.jsx)("div", {
            className: Oq,
            children: (0, uq.jsx)(Og.e, {
              itemName: Eq,
              amount: 1,
              tintColor: lq
            })
          })
        })
      }));
    var jl = gq(3595),
      Hl = gq(1109),
      ol = gq(1226),
      Pl = gq(36912),
      Ql = gq(36906),
      yl = gq(987),
      tl = gq(2332);

    function rl(qq) {
      let {
        peers: Eq
      } = qq;
      const [gq, Yq] = (0, lq.useState)(null), Oq = (0, hq.g)("players");
      return (0, uq.jsx)("div", {
        className: "CodeEditorPresence",
        children: Eq.map((qq => {
          var Eq, lq;
          const mq = null !== (Eq = null === (lq = Oq.byId[qq.playerId]) || void 0 === lq ? void 0 : lq.cosmetics) && void 0 !== Eq ? Eq : {};
          return (0, uq.jsxs)("div", {
            className: og()("PresenceIcon", {
              Viewer: !qq.isEditor
            }),
            style: {
              backgroundColor: qq.colour
            },
            onMouseEnter: () => {
              Yq(qq.playerId)
            },
            onMouseLeave: () => {
              Yq(null)
            },
            children: [(0, uq.jsx)(tl.e, {
              cosmetics: mq
            }), gq === qq.playerId && (0, uq.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: qq.colour
              },
              children: qq.playerName
            })]
          }, qq.playerId)
        }))
      })
    }
    var vl = gq(616),
      hl = gq(36902),
      nl = gq(36597),
      bl = gq(36914);

    function il(qq) {
      const Eq = qq.split("/"),
        gq = [];
      for (let Yq = 1; Yq < Eq.length; Yq++) gq.push(Eq.slice(0, Yq).join("/"));
      return gq
    }

    function Zl(qq) {
      return qq.slice(qq.lastIndexOf("/") + 1)
    }
    const fl = (0, lq.memo)((function(qq) {
      var Eq;
      let {
        files: gq,
        activePath: Yq,
        canEdit: Oq,
        directoryLinked: mq,
        pluginNames: xq,
        activePluginName: Aq,
        activePluginFile: cq,
        onSelect: Bq,
        onSelectPlugin: Wq,
        onCreate: aq,
        onRename: Vq,
        onRenameFolder: jq,
        onDelete: Hq,
        onToggleDirectorySync: oq,
        schematics: Pq,
        onManageSchematic: Qq
      } = qq;
      const {
        t: yq
      } = (0, Kq.v)(), tq = null !== (Eq = (0, Ql.b)(gq)) && void 0 !== Eq ? Eq : ol.j, rq = Object.keys(gq), [vq, hq] = (0, lq.useState)((() => new Set)), nq = function(qq, Eq, gq) {
        const Yq = {
          folders: new Map,
          files: []
        };
        for (const mq of qq) {
          if (mq === Eq) continue;
          let qq = Yq;
          for (const Eq of il(mq)) {
            let gq = qq.folders.get(Eq);
            gq || (gq = {
              folders: new Map,
              files: []
            }, qq.folders.set(Eq, gq)), qq = gq
          }
          qq.files.push(mq)
        }
        const lq = [];
        qq.includes(Eq) && lq.push({
          kind: "file",
          path: Eq,
          name: Zl(Eq),
          depth: 0
        });
        const Oq = (qq, Eq) => {
          const Yq = [...qq.folders.entries()].sort(((qq, Eq) => {
            let [gq] = qq, [Yq] = Eq;
            return gq.localeCompare(Yq)
          }));
          for (const [mq, xq] of Yq) {
            const qq = gq.has(mq);
            lq.push({
              kind: "folder",
              path: mq,
              name: Zl(mq),
              depth: Eq,
              collapsed: qq
            }), qq || Oq(xq, Eq + 1)
          }
          qq.files.sort(((qq, Eq) => qq.localeCompare(Eq)));
          for (const gq of qq.files) lq.push({
            kind: "file",
            path: gq,
            name: Zl(gq),
            depth: Eq
          })
        };
        return Oq(Yq, 0), lq
      }(rq, tq, vq);
      (0, lq.useEffect)((() => {
        hq((qq => {
          const Eq = new Set(qq);
          let gq = !1;
          for (const lq of il(Yq)) gq = Eq.delete(lq) || gq;
          return gq ? Eq : qq
        }))
      }), [Yq]);
      const bq = rq.length >= kE.z,
        iq = (qq, Eq) => {
          if (qq.length > Pl.q) return `Path must be at most ${Pl.q} characters`;
          if (!(0, Pl.o)(qq)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === qq) return "index.d.ts cannot be the world-code entry";
          const Yq = !!Eq && (0, Ql.c)(Eq, qq);
          if (Eq && (0, Ql.f)(Eq) && !Yq) return `Cannot rename ${Eq} (only swapping ${ol.j} and ${ol.n} is allowed)`;
          if (qq in gq) return "A file with that path already exists";
          if ((0, Ql.f)(qq) && !Yq) {
            if ((qq === ol.j ? ol.n : ol.j) in gq) return `World code cannot have both ${ol.j} and ${ol.n}`
          }
          return null
        },
        Zq = qq => {
          CY.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === qq ? void 0 : `${qq}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: qq => iq(qq)
          }).getResult().then((qq => {
            "notificationTornDown" !== qq && null !== qq && "submit" === qq.type && aq(qq.value)
          }))
        },
        fq = qq => {
          CY.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: qq,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Eq => Eq === qq ? "That is already the file's path" : iq(Eq, qq)
          }).getResult().then((Eq => {
            "notificationTornDown" !== Eq && null !== Eq && "submit" === Eq.type && Vq(qq, Eq.value)
          }))
        },
        Mq = qq => {
          const Eq = qq => qq.replace(/\/+$/, "");
          CY.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: qq,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: gq => {
              const Yq = Eq(gq);
              if (Yq === qq) return "That is already the folder's path";
              for (const [Eq, lq] of(0, Ql.k)(rq, qq, Yq)) {
                const qq = iq(lq, Eq);
                if (null !== qq) return qq
              }
              return null
            }
          }).getResult().then((gq => {
            "notificationTornDown" !== gq && null !== gq && "submit" === gq.type && jq(qq, Eq(gq.value))
          }))
        },
        Tq = qq => {
          CY.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: qq
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((Eq => {
            !0 === Eq && Hq(qq)
          }))
        };
      return (0, uq.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, uq.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, uq.jsx)("span", {
            children: "Files"
          }), Oq && !bq && (0, uq.jsx)(Nq.v, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Zq()
            },
            children: (0, uq.jsx)(dq.d, {
              name: "plus"
            })
          })]
        }), (0, uq.jsxs)("div", {
          className: "FileTreeList",
          children: [nq.map((qq => {
            const Eq = qq.path;
            if ("folder" === qq.kind) return (0, uq.jsx)(zl, {
              path: Eq,
              name: qq.name,
              depth: qq.depth,
              collapsed: qq.collapsed,
              onToggle: () => {
                var qq;
                qq = Eq, hq((Eq => {
                  const gq = new Set(Eq);
                  return gq.delete(qq) || gq.add(qq), gq
                }))
              },
              canCreate: Oq && !bq,
              canRename: Oq,
              onCreate: Zq,
              onRename: Mq
            }, `folder:${Eq}`);
            const lq = (0, Ql.f)(Eq),
              mq = ol.j in gq && ol.n in gq,
              xq = !lq || mq,
              cq = null === Aq && Eq === Yq;
            return (0, uq.jsx)(pl, {
              path: Eq,
              label: qq.name,
              depth: qq.depth,
              isActive: cq,
              canRename: Oq,
              onSelect: Bq,
              onRename: fq,
              onDelete: Tq,
              canDelete: xq && Oq
            }, Eq)
          })), (0, uq.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, uq.jsxs)("span", {
              children: ["Schematics (", Object.keys(Pq).length, "/", bl.h, ")"]
            }), Oq && (0, uq.jsx)(Nq.v, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(Pq).length >= bl.h,
              onClick: () => {
                Qq("")
              },
              children: (0, uq.jsx)(dq.d, {
                name: "plus"
              })
            })]
          }), Object.keys(Pq).sort().map((qq => (0, uq.jsx)(pl, {
            path: qq,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Qq
          }, qq))), xq.length > 0 && (0, uq.jsxs)(uq.Fragment, {
            children: [(0, uq.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, uq.jsx)("span", {
                children: "Plugins"
              })
            }), xq.map((qq => {
              var Eq;
              const gq = hl.i[qq],
                Yq = Object.keys(null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.files) && void 0 !== Eq ? Eq : {
                  "index.ts": ""
                }).sort(((qq, Eq) => "index.ts" === qq ? -1 : "index.ts" === Eq ? 1 : qq.localeCompare(Eq)));
              return (0, uq.jsxs)("div", {
                children: [(0, uq.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Ql.p)(qq)
                }), Yq.map((Eq => (0, uq.jsx)(pl, {
                  path: Eq,
                  nested: !0,
                  isActive: Aq === qq && cq === Eq,
                  canRename: !1,
                  onSelect: () => {
                    Wq(qq, Eq)
                  },
                  canDelete: !1
                }, Eq)))]
              }, qq)
            }))]
          })]
        }), (0, uq.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, uq.jsx)(Nq.g, {
            className: "FileTreeFooterButton",
            onClick: oq,
            children: yq(mq ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Ml(qq) {
      return qq > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": qq
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function Tl(qq) {
      let {
        depth: Eq
      } = qq;
      return (0, uq.jsx)(uq.Fragment, {
        children: Array.from({
          length: Eq
        }, ((qq, Eq) => (0, uq.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": Eq
          }
        }, Eq)))
      })
    }

    function zl(qq) {
      let {
        path: Eq,
        name: gq,
        depth: Yq,
        collapsed: lq,
        onToggle: Oq,
        canCreate: mq,
        canRename: xq,
        onCreate: Aq,
        onRename: cq
      } = qq;
      const Bq = [];
      mq && Bq.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Aq(Eq)
        }
      }), xq && Bq.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          cq(Eq)
        }
      });
      const Wq = Ml(Yq);
      return (0, uq.jsxs)("div", {
        className: og()("FileTreeItem FileTreeFolder", Wq.className),
        style: Wq.style,
        children: [(0, uq.jsx)(Tl, {
          depth: Yq
        }), (0, uq.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !lq,
          onClick: Oq,
          children: [(0, uq.jsx)(dq.d, {
            className: "FileTreeFolderCaret",
            name: lq ? "caret-right" : "caret-down"
          }), (0, uq.jsx)(dq.d, {
            className: "FileTreeFolderIcon",
            name: lq ? "folder" : "folder-open"
          }), gq]
        }), (0, uq.jsx)(Sl, {
          path: Eq,
          actions: Bq
        })]
      })
    }

    function Sl(qq) {
      let {
        path: Eq,
        actions: gq
      } = qq;
      const Yq = (0, lq.useRef)(null);
      return 0 === gq.length ? null : (0, uq.jsxs)("div", {
        ref: Yq,
        className: "FileTreeItemActions",
        children: [(0, uq.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${Eq}`,
          children: (0, uq.jsx)(dq.d, {
            name: "ellipsis"
          })
        }), (0, uq.jsx)(nl.d, {
          triggerElementRef: Yq,
          options: gq
        })]
      })
    }

    function pl(qq) {
      let {
        path: Eq,
        label: gq = Eq,
        depth: Yq = 0,
        isActive: lq,
        canRename: Oq,
        onSelect: mq,
        onRename: xq,
        onDelete: Aq,
        canDelete: cq,
        nested: Bq
      } = qq;
      const Wq = [];
      Oq && xq && Wq.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          xq(Eq)
        }
      }), cq && Aq && Wq.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Aq(Eq)
        }
      });
      const Nq = Ml(Yq);
      return (0, uq.jsxs)("div", {
        className: og()("FileTreeItem", Nq.className, {
          Active: lq,
          Nested: Bq
        }),
        style: Nq.style,
        children: [(0, uq.jsx)(Tl, {
          depth: Yq
        }), (0, uq.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: gq === Eq ? void 0 : Eq,
          onClick: () => {
            mq(Eq)
          },
          children: gq
        }), (0, uq.jsx)(Sl, {
          path: Eq,
          actions: Wq
        })]
      })
    }
    async function Gl(qq) {
      const Eq = (0, Ql.b)(qq);
      if (!Eq || "" === qq[Eq].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Yq
      } = await Promise.all([gq.e(290), gq.e(291)]).then((() => gq(41230)));
      return (0, hl.e)(Yq(qq))
    }
    var Ll = gq(36922);

    function Jl(qq, Eq) {
      const gq = Object.keys(qq),
        Yq = Object.keys(Eq);
      if (gq.length !== Yq.length) return !1;
      for (const lq of gq)
        if (!(lq in Eq) || qq[lq] !== Eq[lq]) return !1;
      return !0
    }

    function kl(qq, Eq) {
      const gq = [],
        Yq = [],
        lq = [];
      for (const Oq of Object.keys(Eq)) Oq in qq ? qq[Oq] !== Eq[Oq] && lq.push(Oq) : gq.push(Oq);
      for (const Oq of Object.keys(qq)) Oq in Eq || Yq.push(Oq);
      return gq.sort(), Yq.sort(), lq.sort(), {
        creates: gq,
        deletes: Yq,
        updates: lq
      }
    }

    function Rl(qq, Eq) {
      var gq;
      const Yq = {
          ...qq
        },
        lq = (0, Ql.b)(Eq),
        Oq = (0, Ql.b)(Yq);
      if (ol.j in Yq && ol.n in Yq) {
        const qq = null !== lq && void 0 !== lq ? lq : ol.n,
          gq = qq === ol.j ? ol.n : ol.j;
        var mq;
        if (!(qq in Yq)) Yq[qq] = null !== (mq = Eq[qq]) && void 0 !== mq ? mq : "";
        return delete Yq[gq], Yq
      }
      var xq;
      return lq && !(lq in Yq) ? (Oq || (Yq[lq] = null !== (xq = Eq[lq]) && void 0 !== xq ? xq : ""), Yq) : (Oq || lq || (Yq[ol.j] = null !== (gq = Yq[ol.j]) && void 0 !== gq ? gq : "", delete Yq[ol.n]), Yq)
    }

    function Ul(qq, Eq) {
      const gq = (0, Ql.b)(Eq),
        Yq = ol.j in Eq && ol.n in Eq;
      return qq.filter((qq => !(0, Ql.f)(qq) || (!!Yq || gq !== qq)))
    }
    async function Fl(qq, Eq, Yq) {
      const lq = qq.getLobbyFiles(),
        Oq = (0, kE.k)(Yq, (0, Ql.l)(lq, Eq)),
        mq = await qq.ensureJoined(Eq),
        xq = (0, Pl.t)(mq.docKey);
      if (mq.doc === Oq) return;
      for (let gq = 0; gq < 100; gq++) {
        const gq = qq.getCollabSnapshot();
        if (gq && (0, Pl.t)(gq.docKey) === xq && qq.getActivePath() === Eq) {
          if (qq.replaceActiveDoc(xq, Oq)) return;
          await (0, HY.M)(40)
        } else await (0, HY.M)(40)
      }
      const {
        ChangeSet: Aq
      } = await gq.e(286).then((() => gq(41044))), uq = qq.getCollabSnapshot(), Bq = uq && (0, Pl.t)(uq.docKey) === xq ? uq : mq;
      await async function(qq, Eq, gq, Yq) {
        const lq = qq.of({
            from: 0,
            to: gq.length,
            insert: Yq
          }, gq.length),
          Oq = JSON.stringify([{
            clientID: Eq.clientID,
            changes: lq.toJSON()
          }]),
          mq = (0, Pl.t)(Eq.docKey);
        Oq.length <= Pl.h ? cq.gameBridge.send("sendCodeCollab", {
          nE: Pl.c.Push,
          bE: mq,
          iE: Eq.version,
          ME: Oq
        }) : await (0, Hl.postJsonWithMetricsCookiesAndJsonResponse)(`${Eq.httpConfig.gsUrl}/code/collab-push`, jl.q["collab-push"].toBuffer({
          gameNameWithVariation: Eq.httpConfig.gameNameWithVariation,
          lobbyName: Eq.httpConfig.lobbyName,
          docKey: mq,
          version: Eq.version,
          updates: Oq
        }), {
          retries: 0
        })
      }(Aq, Bq, Bq.doc, Oq)
    }
    class sl {
      constructor(qq) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = qq
      }
      async writeLobbyFiles(qq) {
        const Eq = {
            ...this.bridge.getLobbyFiles()
          },
          gq = {
            ...Eq
          };
        for (const {
            path: Oq,
            text: mq
          }
          of qq) gq[Oq] = mq;
        if (!qq.every((qq => {
            let {
              path: Eq,
              text: Yq
            } = qq;
            return (0, kE.k)(Yq, (0, Ql.l)(gq, Eq)) === Yq
          }))) return !1;
        const Yq = [];
        try {
          for (const {
              path: Eq,
              text: gq
            }
            of qq) Yq.push(Eq), Eq in this.bridge.getLobbyFiles() || (this.bridge.createFile(Eq, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(Eq, !0)), await Fl(this.bridge, Eq, gq)
        } catch (lq) {
          for (const qq of Yq) qq in Eq ? await Fl(this.bridge, qq, Eq[qq]).catch((Eq => {
            console.error("World Code AI: couldn't put back", qq, Eq)
          })) : this.bridge.deleteFile(qq);
          throw lq
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const qq = await (0, Ll.v)(this.bridge.getStorageKey());
        return !!qq && (this.handle = qq, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(qq), !0)
      }
      async unlinkFolder() {
        const qq = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Ll.d)(qq), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const qq = this.bridge.getStorageKey(),
          Eq = await (0, Ll.u)(qq);
        return !!Eq && (!!await (0, Ll.j)(Eq, "readwrite") && (this.handle = Eq, this.linked = !0, await (0, Ll.E)(qq, Eq), await this.scaffoldLocalTypes(Eq), !0))
      }
      scaffoldLocalTypes(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Yq = (await Gl(Eq)).map((qq => hl.i[qq])),
              lq = Yq.map((qq => {
                var Eq;
                return `${qq.name}:${Object.keys(null!==(Eq=null===qq||void 0===qq?void 0:qq.files)&&void 0!==Eq?Eq:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === lq) return;
            const {
              ensureLocalBloxdTypes: Oq
            } = await Promise.all([gq.e(82), gq.e(288), gq.e(293)]).then((() => gq(41238)));
            await Oq(qq, Yq), this.scaffoldedPluginNamesKey = lq
          } catch (Yq) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Yq)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(qq) {
        this.handle && await this.scaffoldLocalTypes(this.handle, qq), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(qq)
      }
      async onDocTextChanged(qq, Eq) {
        if (!this.handle) return;
        const gq = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [qq]: Eq
        })];
        this.running && (this.pendingDocText.set(qq, Eq), gq.push(this.flushDocTextToDisk())), await Promise.all(gq)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const qq = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const Eq = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [gq, Yq] of Eq) this.lastSynced[gq] !== Yq && (await (0, Ll.L)(qq, gq, Yq), this.lastSynced = {
              ...this.lastSynced,
              [gq]: Yq
            })
          }
        } catch (Eq) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", Eq), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Ll.x)(this.handle))
          } catch (qq) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", qq)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, Ll.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const Eq = this.bridge.getLobbyFiles(),
              gq = await (0, Ll.x)(this.handle);
            for (const qq of Object.keys(Eq).filter(bl.d)) {
              if (gq[qq] === Ll.o) return void this.bridge.setMessage(`Move ${qq} outside the linked folder before syncing its placeholder.`, "warning");
              gq[qq] = bl.n
            }
            if (Jl(gq, Eq)) {
              for (const qq of Object.keys(Eq).filter(bl.d)) await (0, Ll.L)(this.handle, qq, bl.n);
              return this.lastSynced = {
                ...gq
              }, void this.beginWatch()
            }
            const Yq = await this.promptReconcile(function(qq) {
              return null !== (0, Ql.b)(qq)
            }(gq));
            if ("unlink" === Yq) return void await this.unlinkFolder();
            if ("dismissed" === Yq) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Yq) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(gq);
                for (const qq of Object.keys(Eq).filter(bl.d)) await (0, Ll.L)(this.handle, qq, bl.n);
                this.lastSynced = {
                  ...await (0, Ll.x)(this.handle)
                }
              } else await (0, Ll.O)(this.handle, Eq), this.lastSynced = {
                ...Eq
              }
            } catch (qq) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", qq), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(qq) {
        return await new Promise((Eq => {
          const gq = [{
              choice: "local",
              Button: Nq.g,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Nq.g,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Nq.g,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Yq = (0, uq.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, uq.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, uq.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: qq ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, uq.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: gq.filter((Eq => "local" !== Eq.choice || qq)).map((qq => {
                  let {
                    choice: gq,
                    Button: Yq,
                    labelKey: Oq,
                    descriptionKey: mq
                  } = qq;
                  return (0, uq.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, uq.jsx)(Yq, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (qq => {
                          lq.tearDownNotification(), Eq(qq)
                        })(gq)
                      },
                      children: this.bridge.t(`codeEditor:${Oq}`)
                    }), (0, uq.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${mq}`)
                    })]
                  }, gq)
                }))
              })]
            }),
            lq = CY.NotificationProvider.showCustomPopup({
              body: Yq,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          lq.getResult().then((qq => {
            "notificationTornDown" === qq && Eq("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Ll.F)(this.handle, (qq => {
          this.onDiskFilesChanged(qq)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (qq) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", qq)
        }
      }
      async onDiskFilesChanged(qq) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const Eq = this.bridge.getLobbyFiles();
        let gq = Rl(qq, this.lastSynced);
        for (const Oq in Eq)
          if ((0, bl.d)(Oq) && gq[Oq] === Ll.o) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Yq = Object.keys(gq).filter((qq => (0, bl.d)(qq) && !(qq in Eq)));
        Yq.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Oq of Object.keys(Eq).filter(bl.d))(Oq in gq || Yq.length > 0 || !(Oq in this.lastSynced)) && (gq[Oq] = bl.n);
        if (!Jl(gq, qq)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(qq, gq), gq = Rl(await (0, Ll.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Jl(gq, this.lastSynced)) {
          this.applying = !0;
          try {
            const qq = kl(this.lastSynced, gq);
            if (await this.pushDiskDeltaToLobby(gq, Eq), null !== this.lastLobbySeen)
              for (const gq of [...qq.creates, ...qq.updates, ...qq.deletes])(0, bl.d)(gq) || (gq in Eq ? this.lastLobbySeen[gq] = Eq[gq] : delete this.lastLobbySeen[gq]);
            this.lastSynced = {
              ...gq
            }
          } catch (lq) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", lq), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(qq, Eq) {
        if (this.handle) {
          for (const gq of Object.keys(qq)) gq in Eq || await (0, Ll.z)(this.handle, gq);
          for (const [gq, Yq] of Object.entries(Eq)) qq[gq] !== Yq && await (0, Ll.L)(this.handle, gq, Yq)
        }
      }
      async applyRemoteTreeToDisk(qq) {
        if (!this.handle) return;
        const Eq = this.lastLobbySeen;
        if (null === Eq) return void(this.lastLobbySeen = {
          ...qq
        });
        const gq = Object.keys(qq).filter((gq => Eq[gq] !== qq[gq])),
          Yq = Object.keys(Eq).filter((Eq => !(Eq in qq)));
        if (0 !== gq.length || 0 !== Yq.length) {
          this.applying = !0;
          try {
            for (const Eq of [...Yq, ...gq]) try {
              if (Eq in qq) await (0, Ll.L)(this.handle, Eq, qq[Eq]), this.lastSynced = {
                ...this.lastSynced,
                [Eq]: qq[Eq]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [Eq]: qq[Eq]
              };
              else {
                await (0, Ll.z)(this.handle, Eq);
                const qq = {
                  ...this.lastSynced
                };
                delete qq[Eq], this.lastSynced = qq;
                const gq = {
                  ...this.lastLobbySeen
                };
                delete gq[Eq], this.lastLobbySeen = gq
              }
            } catch (lq) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", lq), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(qq, Eq) {
        const gq = function(qq, Eq) {
          const gq = (0, Ql.b)(qq),
            Yq = (0, Ql.b)(Eq);
          return gq && Yq && gq !== Yq ? {
            from: gq,
            to: Yq
          } : null
        }(qq, Eq);
        return !!gq && (this.bridge.renameFile(gq.from, gq.to), await this.bridge.waitForLobbyPath(gq.to, !0), !0)
      }
      async applyLocalTreeToLobby(qq) {
        var Eq;
        const gq = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), qq);
        const Yq = this.bridge.getLobbyFiles(),
          lq = kl(Yq, qq),
          Oq = Ul(lq.deletes, Yq);
        for (const cq of lq.creates)(0, bl.d)(cq) || (this.bridge.createFile(cq, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(cq, !0));
        for (const cq of Oq)(0, bl.d)(cq) || (this.bridge.deleteFile(cq), await this.bridge.waitForLobbyPath(cq, !1));
        if (!(0, Ql.b)(this.bridge.getLobbyFiles()) && !(0, Ql.b)(qq)) {
          if (this.bridge.createFile(ol.j, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(ol.j, !0), !this.handle) return;
          await (0, Ll.L)(this.handle, ol.j, ""), qq = {
            ...qq,
            [ol.j]: ""
          }
        }
        const mq = this.bridge.getLobbyFiles();
        for (const cq of Object.keys(qq))(0, bl.d)(cq) || mq[cq] !== qq[cq] && await Fl(this.bridge, cq, qq[cq]);
        const xq = this.bridge.getLobbyFiles(),
          Aq = gq in xq ? gq : null !== (Eq = (0, Ql.b)(xq)) && void 0 !== Eq ? Eq : ol.j;
        await this.bridge.ensureJoined(Aq)
      }
      async pushDiskDeltaToLobby(qq, Eq) {
        const gq = this.bridge.getActivePath(),
          Yq = await this.renameLobbyEntryIfSwitched(Eq, qq) ? this.bridge.getLobbyFiles() : Eq,
          lq = kl(this.lastSynced, qq),
          Oq = Ul(lq.deletes, Yq).filter((qq => qq in Yq));
        for (const mq of lq.creates)(0, bl.d)(mq) || (mq in this.bridge.getLobbyFiles() || (this.bridge.createFile(mq, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(mq, !0)), await Fl(this.bridge, mq, qq[mq]));
        for (const mq of Oq)(0, bl.d)(mq) ? await this.bridge.deleteSchematic(mq) : (this.bridge.deleteFile(mq), await this.bridge.waitForLobbyPath(mq, !1));
        for (const mq of lq.updates)(0, bl.d)(mq) || await Fl(this.bridge, mq, qq[mq]);
        gq in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== gq && await this.bridge.ensureJoined(gq)
      }
    }
    var Xl = gq(1195);

    function wl() {
      const {
        websocketUrl: qq,
        gameNameWithVariation: Eq,
        lobbyName: gq
      } = cq.gameBridge.latest("connectedGame");
      return {
        gsUrl: Xl.clientSideServerUrls.getHttpUrlFromWebSocketUrl(qq),
        gameNameWithVariation: Eq,
        lobbyName: gq
      }
    }
    async function Kl(qq) {
      const {
        gsUrl: Eq,
        gameNameWithVariation: gq,
        lobbyName: Yq
      } = wl();
      return await (0, Hl.postBinaryWithMetricsCookiesAndCustomResponse)(`${Eq}/code/schematics`, jl.Ek.schematics.toBuffer({
        gameNameWithVariation: gq,
        lobbyName: Yq,
        request: JSON.stringify(qq)
      }), {
        retries: 0
      }, Hl.HttpPayloadType.json)
    }
    var Cl = gq(36415);

    function Il(qq) {
      let {
        path: Eq,
        revision: gq
      } = qq;
      const [Yq, Oq] = (0, lq.useState)(""), [mq, xq] = (0, lq.useState)(!1), [Aq, cq] = (0, lq.useState)(0);
      return (0, lq.useEffect)((() => {
        let qq = !1;
        return Oq(""), xq(!1), Kl({
          action: "preview",
          path: Eq
        }).then((Eq => {
          qq || Oq(`data:image/webp;base64,${Eq.previewBase64}`)
        })).catch((Eq => {
          console.error("Could not load schematic preview", Eq), qq || xq(!0)
        })), () => {
          qq = !0
        }
      }), [Eq, gq, Aq]), (0, uq.jsxs)("div", {
        className: "SchematicPreview",
        children: [Yq && (0, uq.jsx)("img", {
          src: Yq,
          alt: `Preview of ${Eq}`
        }), !Yq && !mq && (0, uq.jsx)(nq.e, {
          loaderType: "Secondary"
        }), mq && (0, uq.jsxs)(uq.Fragment, {
          children: [(0, uq.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, uq.jsx)(Nq.g, {
            onClick: () => {
              cq(Aq + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function el(qq) {
      var Eq;
      let {
        initialPath: gq,
        onChanged: Yq,
        onClose: Oq
      } = qq;
      const mq = "" === gq,
        [xq, Aq] = (0, lq.useState)(null),
        [cq, Bq] = (0, lq.useState)(gq),
        [Wq, aq] = (0, lq.useState)(!1),
        [Vq, dq] = (0, lq.useState)(!1),
        [jq, Hq] = (0, lq.useState)(null),
        [oq, Pq] = (0, lq.useState)(!1),
        [Qq, yq] = (0, lq.useState)(""),
        tq = (0, lq.useRef)(null),
        rq = (0, lq.useRef)(!1),
        vq = (0, lq.useRef)(!0);
      (0, lq.useEffect)((() => (vq.current = !0, Kl({
        action: "state"
      }).then((qq => {
        vq.current && Aq(qq)
      })).catch((qq => {
        console.error("Could not load schematic assets", qq), vq.current && yq("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        vq.current = !1
      })), []);
      const hq = null === xq || void 0 === xq ? void 0 : xq.assets[gq],
        nq = Object.keys(null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.assets) && void 0 !== Eq ? Eq : {}).length,
        bq = cq.trim(),
        iq = bq ? (0, bl.d)(bq) ? null !== xq && void 0 !== xq && xq.assets[bq] && (mq || bq !== gq) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Zq = !!bq && !iq && (mq ? nq < bl.h : bq !== gq),
        fq = oq || !xq;
      async function Mq(qq) {
        if (!rq.current && vq.current) {
          rq.current = !0, Pq(!0), yq("");
          try {
            const Eq = await Kl({
              ...qq,
              expectedRevision: xq.revision
            });
            Yq(Eq), vq.current && Oq()
          } catch (gq) {
            var Eq;
            if (console.error("Schematic asset operation failed", gq), vq.current) yq(gq instanceof Fq.b ? null !== (Eq = gq.errorMessageForUser) && void 0 !== Eq ? Eq : gq.message : String(gq));
            try {
              const qq = await Kl({
                action: "state"
              });
              Yq(qq), vq.current && Aq(qq)
            } catch (lq) {
              console.error("Could not refresh schematic assets", lq)
            }
          } finally {
            rq.current = !1, vq.current && Pq(!1)
          }
        }
      }
      return (0, uq.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, uq.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: mq ? "New schematic" : Wq ? "Rename schematic" : "Schematic"
        }), Qq && (0, uq.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Qq
        }), !xq && !Qq && (0, uq.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, uq.jsxs)("fieldset", {
          disabled: fq,
          children: [mq || Wq ? (0, uq.jsxs)("label", {
            className: "SchematicField",
            children: [(0, uq.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, uq.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, uq.jsx)(Tg.b, {
                className: "InputGenericPopupInput",
                defaultValue: gq,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Bq
              }, Wq ? "rename" : "create")
            })]
          }) : (0, uq.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: gq
          }), (mq || Wq) && iq && (0, uq.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: iq
          }), mq ? (0, uq.jsxs)(uq.Fragment, {
            children: [nq >= bl.h && (0, uq.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", bl.h, " maximum)."]
            }), Vq ? (0, uq.jsxs)(uq.Fragment, {
              children: [(0, uq.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, uq.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": fq || !Zq,
                children: (0, uq.jsx)(Cl.d, {
                  loading: null === jq,
                  schematics: null !== jq && void 0 !== jq ? jq : [],
                  disableAutoExport: !0,
                  onSchematicPicked: qq => {
                    !fq && Zq && Mq({
                      action: "profile",
                      path: bq,
                      schematicId: qq.schematicId
                    })
                  }
                })
              }), (0, uq.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, uq.jsx)(Nq.g, {
                  className: "InputGenericPopupButton",
                  disabled: fq,
                  onClick: () => {
                    dq(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, uq.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, uq.jsx)(Nq.g, {
                className: "InputGenericPopupButton",
                disabled: fq || !Zq,
                onClick: () => {
                  tq.current.click()
                },
                children: "Upload Schematic"
              }), (0, uq.jsx)(Nq.g, {
                className: "InputGenericPopupButton",
                disabled: fq || !Zq,
                onClick: () => {
                  !async function() {
                    if (dq(!0), yq(""), !jq) try {
                      const qq = await (0, Hl.postJsonWithMetricsCookiesAndJsonResponse)(`${Xl.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      vq.current && Hq(qq)
                    } catch (qq) {
                      console.error("Could not load profile schematics", qq), vq.current && (dq(!1), yq("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, uq.jsx)("input", {
              ref: tq,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: qq => {
                var Eq;
                const gq = null === (Eq = qq.target.files) || void 0 === Eq ? void 0 : Eq[0];
                if (qq.target.value = "", !gq) return;
                if (gq.size > bl.j) return void yq("The schematic file is too large.");
                const Yq = bq;
                Pq(!0);
                const lq = new FileReader;
                lq.onload = () => {
                  Mq({
                    action: "upload",
                    path: Yq,
                    base64: String(lq.result).split(",")[1]
                  })
                }, lq.onerror = () => {
                  console.error("Could not read schematic file", lq.error), vq.current && (Pq(!1), yq("Could not read the selected file."))
                }, lq.readAsDataURL(gq)
              }
            })]
          }) : hq ? (0, uq.jsxs)(uq.Fragment, {
            children: [!Wq && (0, uq.jsx)(Il, {
              path: gq,
              revision: xq.revision
            }), !Wq && (0, uq.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(hq.byteSize / 1024), " KB \xb7 ", hq.dimensions.join(" \xd7 "), " blocks"]
            }), (0, uq.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Wq ? (0, uq.jsxs)(uq.Fragment, {
                children: [(0, uq.jsx)(Nq.g, {
                  className: "InputGenericPopupButton",
                  disabled: fq || !Zq,
                  onClick: () => {
                    Mq({
                      action: "rename",
                      path: gq,
                      newPath: bq
                    })
                  },
                  children: "Rename"
                }), (0, uq.jsx)(Nq.g, {
                  className: "InputGenericPopupButton",
                  disabled: fq,
                  onClick: () => {
                    aq(!1), Bq(gq)
                  },
                  children: "Cancel"
                })]
              }) : (0, uq.jsxs)(uq.Fragment, {
                children: [(0, uq.jsx)(Nq.g, {
                  className: "InputGenericPopupButton",
                  disabled: fq,
                  onClick: () => {
                    aq(!0)
                  },
                  children: "Rename"
                }), (0, uq.jsx)(Nq.K, {
                  className: "InputGenericPopupButton",
                  disabled: fq,
                  onClick: () => {
                    Mq({
                      action: "remove",
                      path: gq
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : xq && (0, uq.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Dl(qq) {
      if ("string" !== typeof qq) return null;
      try {
        const Eq = JSON.parse(qq);
        return (0, Ql.j)(null === Eq || void 0 === Eq ? void 0 : Eq.worldCodeEngine) && "boolean" === typeof Eq.engineLocked && function(qq) {
          if (null === qq) return !0;
          const Eq = null === qq || void 0 === qq ? void 0 : qq.location;
          return "string" === typeof(null === qq || void 0 === qq ? void 0 : qq.reason) && (null === Eq || "string" === typeof(null === Eq || void 0 === Eq ? void 0 : Eq.path) && Number.isInteger(Eq.line))
        }(Eq.fallback) ? Eq : (console.error("[CodeCollab] Malformed engine settings", qq), null)
      } catch (Eq) {
        return console.error("[CodeCollab] Failed to parse engine settings", Eq), null
      }
    }

    function qO(qq) {
      let {
        fallback: Eq,
        onGoToLine: gq
      } = qq;
      const {
        t: Yq
      } = (0, Kq.v)(), {
        location: lq
      } = Eq;
      return (0, uq.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Yq("codeEditorEngine:notice", {
          reason: Eq.reason
        }), lq && (0, uq.jsxs)(uq.Fragment, {
          children: [" ", (0, uq.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              gq(lq.path, lq.line)
            },
            children: Yq("codeEditorEngine:goToLine", {
              line: String(lq.line)
            })
          })]
        })]
      })
    }
    var EO = gq(4773),
      gO = gq(4195),
      YO = gq(36929);

    function lO(qq) {
      let {
        label: Eq,
        hint: gq,
        checked: Yq,
        onChange: lq
      } = qq;
      return (0, uq.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, uq.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, uq.jsx)("span", {
            children: Eq
          }), (0, uq.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: gq
          })]
        }), (0, uq.jsx)("span", {
          className: "SwitchContainer",
          children: (0, uq.jsx)(gO.b, {
            className: "SwitchCheckbox",
            checked: Yq,
            onChange: qq => {
              lq(qq.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function OO(qq) {
      let {
        engine: Eq,
        onSetEngine: gq,
        aiHints: Yq,
        variation: lq
      } = qq;
      const {
        t: Oq
      } = (0, Kq.v)(), [mq, xq] = (0, YO.j)(YO.e);
      return (0, uq.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, uq.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Oq("codeEditor:moreOptions")
        }), Eq && (0, uq.jsx)(lO, {
          label: Oq("codeEditorEngine:toggle"),
          hint: Oq("codeEditorEngine:toggleHint"),
          checked: "ses" === Eq,
          onChange: qq => {
            gq(qq ? "ses" : "quickjs")
          }
        }), Yq && (0, uq.jsx)(lO, {
          label: Oq("codeEditorAiHints:toggle"),
          hint: Oq("codeEditorAiHints:toggleHint"),
          checked: Yq.shown,
          onChange: Yq.setShown
        }), Yq && YO.e.canChange && (0, uq.jsx)(lO, {
          label: Oq("codeEditorAiKeySafetyCheck:toggle"),
          hint: Oq("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: mq,
          onChange: qq => {
            qq ? xq(!0) : CY.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((qq => {
              !0 === qq && xq(!1)
            }))
          }
        }), lq && (0, uq.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, uq.jsx)(EO.c, {
            label: "codeEditor:variationLabel",
            children: (0, uq.jsx)(Tg.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: lq.name,
              onValueChange: lq.setName,
              onEnter: lq.reload
            })
          }), (0, uq.jsx)(Nq.A, {
            className: "CodeEditorButton",
            onClick: lq.reload,
            children: Oq("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var mO = gq(36931),
      xO = gq(36935);

    function AO(qq) {
      let {
        close: Eq
      } = qq;
      const {
        t: gq
      } = (0, Kq.v)(), Yq = [{
        name: gq("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: gq("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: gq("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, uq.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, uq.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: gq("codeEditor:tutorialsTitle")
        }), (0, uq.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Yq.map((qq => (0, uq.jsx)(Nq.g, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              Eq(), (0, xO.I)(qq.tutorial)
            },
            children: qq.name
          }, qq.tutorial)))
        })]
      })
    }
    var cO = gq(114),
      uO = gq(36593),
      BO = gq(8734);
    const WO = (0, lq.forwardRef)((function(qq, Eq) {
      let {
        value: gq,
        onChange: Yq,
        onSubmit: lq,
        placeholder: Oq,
        maxLength: mq,
        rows: xq = 2,
        allowNewLines: Aq = !1,
        onKeyDown: cq,
        before: Bq
      } = qq;
      const {
        t: Wq
      } = (0, Kq.v)(), aq = "" !== gq.trim(), Vq = () => {
        aq && lq()
      };
      return (0, uq.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Bq, (0, uq.jsx)("textarea", {
          ref: Eq,
          className: "PanelPromptInput",
          value: gq,
          maxLength: mq,
          rows: xq,
          placeholder: Oq,
          spellCheck: !1,
          autoComplete: "off",
          onChange: qq => {
            Yq(Aq ? qq.target.value : qq.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: qq => {
            qq.nativeEvent.isComposing || 229 === qq.nativeEvent.keyCode ? qq.stopPropagation() : "Escape" !== qq.key && (qq.stopPropagation(), null === cq || void 0 === cq || cq(qq), qq.defaultPrevented || "Enter" !== qq.key || Aq && qq.shiftKey || (qq.preventDefault(), Vq()))
          }
        }), (0, uq.jsx)(Nq.g, {
          className: "PanelPromptSend",
          disabled: !aq,
          onClick: Vq,
          ariaLabel: Wq("codeEditorPanels:send"),
          children: (0, uq.jsx)(dq.d, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function NO(qq) {
      let {
        inputRef: Eq
      } = qq;
      const {
        t: gq
      } = (0, Kq.v)(), {
        messages: Yq,
        reportedPlayers: Oq,
        channel: mq
      } = (0, BO.j)(), [xq, Aq] = (0, lq.useState)(""), cq = (0, lq.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, uq.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, uq.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, uq.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: gq("codeEditorChat:title")
          })
        }), 0 === Yq.length ? (0, uq.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: gq("codeEditorChat:empty")
        }) : (0, uq.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, uq.jsx)(uO.d, {
            messages: Yq,
            reportedPlayers: Oq
          })
        }), (0, uq.jsx)(WO, {
          ref: Eq,
          value: xq,
          onChange: Aq,
          onSubmit: () => {
            (0, BO.i)(xq), Aq(""), cq.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: vq.hd,
          rows: 1,
          placeholder: mq ? gq("touchOnly" === (0, cO.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: mq.channelName
          }) : gq("codeEditorChat:placeholder"),
          before: mq && (0, uq.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: mq.elementBgColor
            },
            onClick: () => {
              BO.c.selectNextChannel(), Eq.current.focus()
            },
            children: (0, uq.jsx)(tq.c, {
              text: mq.elementContent
            })
          }),
          onKeyDown: qq => {
            const Eq = xq === cq.current.text;
            if ("ArrowUp" !== qq.key && "ArrowDown" !== qq.key || !Eq && "" !== xq) "Tab" === qq.key && !qq.shiftKey && mq && (qq.preventDefault(), BO.c.selectNextChannel());
            else {
              qq.preventDefault();
              const gq = Eq ? cq.current.stepsBack : 0;
              cq.current = (0, BO.g)(gq + ("ArrowUp" === qq.key ? 1 : -1)), Aq(cq.current.text)
            }
          }
        })]
      })
    }
    var aO = gq(36944);

    function VO(qq) {
      return "expanded" === qq ? "always" : "shown" === qq ? "narrow" : void 0
    }

    function dO(qq) {
      var Eq;
      let {
        kB: gq,
        worldPanel: Yq,
        closeWorld: lq,
        aiShown: Oq,
        defaultWidth: mq,
        children: xq
      } = qq;
      const Aq = "hidden" !== gq;
      return (0, uq.jsx)(aO.b, {
        side: "right",
        defaultSize: Aq ? "max(18rem, 40%)" : mq,
        covers: null !== (Eq = VO(gq)) && void 0 !== Eq ? Eq : Oq ? "narrow" : void 0,
        children: (0, uq.jsxs)("div", {
          className: og()("CodeEditorRightColumn", {
            WorldShown: Aq,
            WorldExpanded: "expanded" === gq
          }),
          children: [Aq && (0, uq.jsx)(aO.b, {
            side: "top",
            onClose: lq,
            children: Yq
          }), xq]
        })
      })
    }
    var jO = gq(1945),
      HO = gq(1095),
      oO = gq(1283);
    class PO {
      constructor(qq, Eq, gq) {
        this.measure = qq, this.apply = Eq, this.now = gq, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.last) || void 0 === Eq ? void 0 : Eq.rect) && void 0 !== qq ? qq : null
      }
      sync() {
        const qq = function(qq) {
          const Eq = Math.round(qq.left),
            gq = Math.round(qq.top);
          return {
            left: Eq,
            top: gq,
            width: Math.round(qq.right) - Eq,
            height: Math.round(qq.bottom) - gq
          }
        }(this.measure());
        if (qq.width <= 0 || qq.height <= 0) return;
        const Eq = this.now(),
          gq = this.last;
        let Yq = {
          width: qq.width,
          height: qq.height
        };
        null === gq || qq.width === gq.rect.width && qq.height === gq.rect.height || (this.resizing = Eq - this.resizedAt < 100, this.resizedAt = Eq);
        const lq = null !== gq && this.resizing && Eq - this.resizedAt < 100 && (qq.width !== gq.bufferSize.width || qq.height !== gq.bufferSize.height);
        lq && (this.stretchedAt ??= Eq), lq && Eq - this.stretchedAt < 250 ? Yq = gq.bufferSize : this.stretchedAt = null;
        const Oq = {
          rect: qq,
          bufferSize: Yq
        };
        var mq, xq;
        null !== gq && (xq = Oq, (mq = gq).rect.left === xq.rect.left && mq.rect.top === xq.rect.top && mq.rect.width === xq.rect.width && mq.rect.height === xq.rect.height && mq.bufferSize.width === xq.bufferSize.width && mq.bufferSize.height === xq.bufferSize.height) || (this.last = Oq, this.apply(Oq))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function QO(qq) {
      const {
        style: Eq
      } = document.documentElement;
      for (const [gq, Yq] of [
          ["--worldViewLeft", null === qq || void 0 === qq ? void 0 : qq.left],
          ["--worldViewTop", null === qq || void 0 === qq ? void 0 : qq.top],
          ["--worldViewWidth", null === qq || void 0 === qq ? void 0 : qq.width],
          ["--worldViewHeight", null === qq || void 0 === qq ? void 0 : qq.height]
        ]) void 0 === Yq ? Eq.removeProperty(gq) : Eq.setProperty(gq, `${Yq}px`)
    }
    var yO = gq(1710),
      tO = gq(1959);

    function rO(qq, Eq) {
      (0, lq.useEffect)((() => {
        if (!qq) return;
        const gq = qq => {
          var gq;
          "Escape" === qq.key ? (qq.stopPropagation(), qq.preventDefault(), Eq()) : (gq = qq.code, Object.entries(UE.u).some((qq => {
            let [Eq, Yq] = qq;
            const lq = tO.e[Eq];
            return lq.includes("ui") && !lq.includes("core") && Yq.includes(gq)
          })) && !(0, yO.isTextEntry)(qq.target) && qq.preventDefault())
        };
        window.addEventListener("keydown", gq, !0);
        const Yq = (0, Jq.m)(Eq);
        return () => {
          window.removeEventListener("keydown", gq, !0), Yq()
        }
      }), [qq, Eq])
    }

    function vO() {
      return (0, ml.i)().some((qq => qq !== ml.d))
    }

    function hO(qq, Eq) {
      return qq.map((qq => Eq ? String(qq) : qq.toFixed(1))).join(", ")
    }

    function nO(qq) {
      let {
        freeCamera: Eq,
        picking: gq,
        hovered: Yq
      } = qq;
      const {
        t: Oq
      } = (0, Kq.v)(), mq = (0, lq.useRef)(null), xq = (0, lq.useRef)(null);
      return (0, lq.useEffect)((() => {
        const qq = (qq, Eq) => {
            qq.textContent !== Eq && (qq.textContent = Eq)
          },
          gq = () => {
            const gq = Eq ? cq.gameBridge.lookup("freeCameraPos", null) : null;
            qq(mq.current, hO(null !== gq && void 0 !== gq ? gq : cq.gameBridge.lookup("localPos", null), !1));
            const Yq = cq.gameBridge.lookup("targetedBlockPos", null);
            qq(xq.current, Yq ? hO(Yq, !0) : "-")
          };
        return gq(), (0, oO.y)(gq)
      }), [Eq]), (0, uq.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, uq.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Oq(Eq ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, uq.jsx)("span", {
          ref: mq
        }), (0, uq.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Oq("codeEditorWorld:lookingAt")
        }), (0, uq.jsx)("span", {
          ref: xq,
          hidden: gq
        }), gq && (0, uq.jsxs)(uq.Fragment, {
          children: [(0, uq.jsx)("span", {
            children: Yq ? hO(Yq.pos, !0) : "-"
          }), Yq && (0, uq.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Yq.name
          })]
        })]
      })
    }
    var bO = gq(36949);

    function iO(qq) {
      const Eq = qq.currentTarget.getBoundingClientRect();
      return {
        x: (qq.clientX - Eq.left) / Eq.width,
        y: (qq.clientY - Eq.top) / Eq.height
      }
    }

    function ZO(qq) {
      const [Eq, gq] = (0, lq.useState)(!1), [Yq, Oq] = (0, lq.useState)(null), mq = (0, lq.useRef)(null);
      (0, lq.useEffect)((() => {
        if (!Eq) return;
        let qq = null,
          gq = null,
          Yq = 1 / 0;
        const lq = (0, oO.t)((Eq => {
          Yq += Eq;
          const lq = mq.current;
          if (lq === gq && Yq < 100) return;
          gq = lq, Yq = 0;
          const xq = lq && cq.gameBridge.lookup("blockAtViewPoint", lq);
          var Aq, uq;
          (Aq = xq) === (uq = qq) || null !== Aq && null !== uq && Aq.name === uq.name && (0, bO.f)(Aq.pos, uq.pos) && (0, bO.f)(Aq.normal, uq.normal) || (qq = xq, Oq(xq), cq.gameBridge.send("setBlockHighlight", xq))
        }));
        return () => {
          lq(), null !== qq && cq.gameBridge.send("setBlockHighlight", null), Oq(null)
        }
      }), [Eq]);
      const xq = (0, lq.useCallback)((() => {
        gq(!1)
      }), []);
      rO(Eq, xq);
      const Aq = {
        onPointerMove: qq => {
          mq.current = iO(qq)
        },
        onPointerLeave: () => {
          mq.current = null
        },
        onClick: Yq => {
          if (!Eq) return;
          const lq = cq.gameBridge.lookup("blockAtViewPoint", iO(Yq));
          null !== lq && (gq(!1), qq(lq.pos))
        }
      };
      return {
        picking: Eq,
        setPicking: gq,
        hovered: Yq,
        slotHandlers: Aq
      }
    }

    function fO(qq) {
      cq.gameBridge.send("setFreeCameraMovesFly", qq)
    }

    function MO(qq) {
      let {
        shown: Eq,
        setShown: gq,
        canInsertCode: Yq
      } = qq;
      const {
        t: Oq
      } = (0, Kq.v)(), {
        isTouchScreen: mq
      } = (0, Lq.j)(["isTouchScreen"]), xq = (0, lq.useRef)(null), cq = (0, lq.useCallback)((() => {
        var qq;
        null === (qq = xq.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === qq || qq.focus()
      }), []), {
        control: Bq,
        take: Wq,
        release: Vq,
        blocked: jq
      } = function(qq) {
        const [Eq, gq] = (0, lq.useState)("none"), Yq = (0, lq.useRef)("none"), [Oq, mq] = (0, lq.useState)(!1), xq = qq => {
          Yq.current = qq, gq(qq)
        }, Aq = (0, lq.useCallback)((() => {
          const Eq = Yq.current;
          "none" !== Eq && (xq("none"), (0, ml.m)(ml.d), "mouse" === Eq && qq())
        }), [qq]), cq = (0, lq.useCallback)((qq => {
          vO() ? mq(!0) : (xq("mouse" === qq && "touchOnly" !== (0, cO.d)() ? "mouse" : "touch"), (0, ml.j)(ml.d))
        }), []);
        return (0, rq.f)("pointerLockUpdate", (qq => {
          qq && "touch" === Yq.current && "touchOnly" !== (0, cO.d)() ? xq("mouse") : qq || "mouse" !== Yq.current || Aq()
        })), (0, lq.useEffect)((() => {
          if (!Oq) return;
          const qq = () => {
            vO() || mq(!1)
          };
          return qq(), (0, ml.f)(qq)
        }), [Oq]), rO("none" !== Eq, Aq), (0, lq.useEffect)((() => {
          if ("none" === Eq) return;
          const qq = qq => {
            (0, yO.isTextEntry)(qq.target) && Aq()
          };
          return document.addEventListener("focusin", qq), () => {
            document.removeEventListener("focusin", qq)
          }
        }), [Eq, Aq]), (0, lq.useEffect)((() => (document.addEventListener("pointerlockerror", Aq), () => {
          document.removeEventListener("pointerlockerror", Aq)
        })), [Aq]), (0, lq.useEffect)((() => () => {
          "none" !== Yq.current && null !== Lq.b.get("openInGameMenuName") && (0, ml.m)(ml.d)
        }), []), {
          control: Eq,
          take: cq,
          release: Aq,
          blocked: Oq
        }
      }(cq), Hq = (0, HO.n)(aO.f);
      (0, lq.useEffect)((() => {
        "touch" !== Bq || "shown" !== Eq || Hq ? "none" === Bq && "expanded" === Eq && gq("shown") : gq("expanded")
      }), [Bq, Hq]),
      function(qq, Eq) {
        const gq = (0, lq.useRef)(Eq);
        gq.current = Eq;
        const Yq = (0, lq.useRef)(null);
        (0, lq.useLayoutEffect)((() => {
          const Eq = new PO((() => qq.current.getBoundingClientRect()), (qq => {
            var Eq;
            "none" !== gq.current && QO(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.rect) && void 0 !== Eq ? Eq : null), (0, oO.D)().setGameView(qq)
          }), (() => performance.now()));
          Yq.current = Eq, Eq.sync();
          const lq = (0, oO.s)((() => {
            Eq.sync()
          }));
          return () => {
            lq(), Lq.b.set({
              worldPanelHud: null
            }), Eq.stop()
          }
        }), [qq]), (0, lq.useLayoutEffect)((() => {
          Yq.current.sync(), QO("none" === Eq ? null : Yq.current.rect), Lq.b.set({
            worldPanelHud: Eq
          })
        }), [Eq])
      }(xq, "touch" === Bq ? "touchControls" : "none");
      const {
        picking: oq,
        setPicking: Pq,
        hovered: Qq,
        slotHandlers: yq
      } = ZO((qq => {
        aq.i.TV("CodeEditorInsertText", {
          text: `[${qq.join(", ")}]`,
          focus: !mq
        }), (0, aO.f)() && gq("hidden")
      })), tq = function() {
        const {
          allowed: qq,
          movesFly: Eq
        } = (0, hq.g)("freeCamera"), gq = (0, lq.useRef)(Eq), Yq = (0, lq.useRef)(Eq);
        return Yq.current !== Eq && (Yq.current = Eq, gq.current = Eq), (0, lq.useEffect)((() => () => {
          gq.current && fO(!1)
        }), []), {
          allowed: qq,
          on: Eq,
          toggle: () => {
            gq.current = !Eq, fO(!Eq)
          }
        }
      }(), vq = (0, Aq.h)("hideCoordinates"), nq = (0, hq.g)("localPlayerAlive"), bq = !nq || jq;
      (0, lq.useEffect)((() => {
        nq || Vq()
      }), [nq, Vq]), (0, lq.useEffect)((() => {
        !bq && Yq || Pq(!1)
      }), [bq, Yq, Pq]);
      const iq = tq.on ? Nq.p : Nq.g,
        Zq = oq ? Nq.p : Nq.g;
      return (0, uq.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, uq.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, uq.jsx)("span", {
            className: "WorldPanelTitle",
            children: Oq("codeEditorWorld:title")
          }), "touch" === Bq && !Hq && (0, uq.jsx)(Nq.g, {
            className: "WorldPanelButton",
            onClick: Vq,
            children: Oq("codeEditorWorld:backToCode")
          }), !bq && tq.allowed && !mq && (0, uq.jsx)(Xq.e, {
            tooltipInner: Oq("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, uq.jsx)(iq, {
              className: "WorldPanelButton",
              ariaPressed: tq.on,
              ariaLabel: Oq("codeEditorWorld:freeCamera"),
              onClick: tq.toggle,
              children: (0, uq.jsx)(dq.d, {
                name: "video"
              })
            })
          }), !bq && Yq && (0, uq.jsx)(Xq.e, {
            tooltipInner: Oq("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, uq.jsxs)(Zq, {
              className: "WorldPanelButton",
              ariaPressed: oq,
              onClick: () => {
                Vq(), Pq(!oq)
              },
              children: [(0, uq.jsx)(dq.d, {
                name: "crosshairs"
              }), Oq("codeEditorWorld:pick")]
            })
          })]
        }), !vq && (0, uq.jsx)(nO, {
          freeCamera: tq.on,
          picking: oq,
          hovered: Qq
        }), (0, uq.jsxs)("div", {
          ref: xq,
          className: og()("WorldPanelSlot", {
            TouchControl: "touch" === Bq,
            Picking: oq
          }),
          onPointerDown: qq => {
            0 !== qq.button || bq || oq || Wq(qq.pointerType)
          },
          ...yq,
          children: [!bq && !oq && (0, uq.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !bq && "touch" !== Bq && (0, uq.jsxs)("div", {
            className: "WorldPanelHint",
            children: [oq && Oq(mq ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !oq && "none" === Bq && !tq.on && Oq(mq ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !oq && "none" === Bq && tq.on && Oq("codeEditorWorld:clickToFly"), "mouse" === Bq && (0, uq.jsxs)(uq.Fragment, {
              children: [(0, uq.jsx)(jO.c, {
                noaAction: "OpenLobbyLeaderboard"
              }), Oq("codeEditorWorld:backToCode")]
            })]
          }), bq && (0, uq.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, uq.jsx)("span", {
              children: Oq(nq ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, uq.jsx)(Nq.g, {
              onClick: Jq.f,
              children: Oq("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var TO = gq(4858);

    function zO(qq) {
      let {
        kB: Eq,
        setWorld: gq,
        toggleWorld: Yq,
        aiShown: lq,
        closeAi: Oq
      } = qq;
      const {
        t: mq
      } = (0, Kq.v)(), xq = lq ? "ai" : "hidden" !== Eq ? "world" : "code", Aq = [{
        value: "code",
        label: mq("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: mq("codeEditorWorld:title")
      }];
      lq && Aq.push({
        value: "ai",
        label: mq("codeEditorWorld:aiPane")
      });
      return (0, uq.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, uq.jsx)(TO.c, {
          options: Aq,
          value: xq,
          onChange: qq => {
            "world" !== qq ? (lq && Oq(), gq("hidden")) : "hidden" === Eq ? Yq() : Oq()
          },
          ariaLabel: mq("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var SO = gq(36955),
      pO = gq(36962),
      GO = gq(36968),
      LO = gq(36971);
    const JO = (0, lq.lazy)((() => Promise.all([gq.e(290), gq.e(286), gq.e(289), gq.e(285), gq.e(82), gq.e(288), gq.e(287), gq.e(284)]).then((() => gq(41028))))),
      kO = (0, lq.lazy)((() => Promise.all([gq.e(77), gq.e(80), gq.e(81), gq.e(79), gq.e(292)]).then((() => gq(41216))))),
      RO = (0, lq.lazy)((() => Promise.all([gq.e(290), gq.e(289), gq.e(82), gq.e(80), gq.e(81), gq.e(79), gq.e(288), gq.e(287), gq.e(78), gq.e(89)]).then((() => gq(41219)))));

    function UO(qq) {
      return cq.gameBridge.query("worldCodeAiChunk", qq)
    }

    function FO() {
      return cq.gameBridge.query("worldCodeAiGameState", null)
    }

    function sO(qq) {
      const {
        gsUrl: Eq,
        gameNameWithVariation: gq,
        lobbyName: Yq
      } = wl();
      return (0, Hl.postJsonWithMetricsCookiesAndJsonResponse)(`${Eq}/code/get-lobby-code`, jl.Ek["get-lobby-code"].toBuffer({
        gameNameWithVariation: gq,
        lobbyName: Yq,
        path: qq
      }), {
        retries: 1
      })
    }
    let XO = !1;
    const wO = [],
      KO = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      CO = (0, lq.memo)((function(qq) {
        var Eq, gq;
        let {
          show: Yq,
          onOpen: Oq,
          onClose: xq,
          isLobbyCode: Bq
        } = qq;
        const Wq = (0, lq.useRef)(""),
          [Vq, jq] = (0, lq.useState)(null),
          Hq = (0, lq.useRef)(Bq),
          [oq, Pq] = (0, lq.useState)({
            message: null,
            type: null
          }),
          [Qq, yq] = (0, lq.useState)(""),
          tq = oq.message ? oq : {
            message: Qq,
            type: "warning"
          },
          [bq, iq] = (0, lq.useState)(!0),
          [Zq, Mq] = (0, YO.j)(YO.h),
          [Tq, zq] = (0, YO.j)(YO.c),
          [Sq, pq] = (0, lq.useState)(!1),
          [Gq, kq] = (0, lq.useState)(!1),
          Rq = (0, lq.useRef)(null),
          Uq = (0, lq.useRef)(!1);
        (0, lq.useEffect)((() => {
          var qq;
          Gq && Uq.current && (Uq.current = !1, null === (qq = Rq.current) || void 0 === qq || qq.focus())
        }), [Gq]);
        const Fq = (0, SO.c)(),
          sq = (0, lq.useRef)(null),
          wq = (0, lq.useRef)(null),
          {
            openInGameMenuName: Cq,
            openEverythingMenuName: Iq,
            worldPanelHud: eq
          } = (0, Lq.j)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          Dq = qq => {
            Yq && (sq.current = qq, hE.current = !0)
          };
        (0, rq.f)("OpenReportMenu", (() => {
          Dq("SN")
        })), (0, rq.f)("OpenStoreFromCodeEditor", (() => {
          Dq("store")
        })), (0, lq.useEffect)((() => {
          const qq = sq.current;
          null === qq || "SN" === qq && ("makeReport" === Cq || "makeDiscordReport" === Cq) || "store" === qq && null !== Iq || (sq.current = null, null === Cq && null === Iq ? Bq ? (wq.current = Yg.current, aq.i.TV("EditLobbyCode", Vq)) : aq.i.TV("EditCodeBlock", {
            pos: Vq,
            canChangePos: Hq.current
          }) : (0, xO.y)())
        }), [Cq, Iq, Bq, Vq]), (0, lq.useEffect)((() => {
          if (Yq) return () => {
            wq.current = null
          }
        }), [Yq]);
        const [qE, EE] = function() {
          const [qq, Eq] = (0, lq.useState)(XO);
          return (0, rq.f)("CodeEditorAiHelperShown", (qq => {
            Eq(qq)
          })), [qq, (0, lq.useCallback)((qq => {
            XO = qq, aq.i.TV("CodeEditorAiHelperShown", qq)
          }), [])]
        }(), [gE, YE] = (0, lq.useState)(null), [lE, OE] = (0, lq.useState)([]), [mE, xE] = (0, lq.useState)(0), [AE, cE] = (0, lq.useState)(0), [uE, BE] = (0, lq.useState)(""), NE = (0, lq.useRef)(null), [aE, VE] = (0, lq.useState)(Bq ? LO.f : null), dE = Bq || null !== Vq, jE = (0, Aq.h)("canEditCode"), HE = (0, Aq.h)("canUseDevCreativeItems"), oE = (0, mO.l)("welcome"), PE = (0, mO.l)("docsOverview"), QE = PE ? "docsOverview" : "welcome", yE = null !== PE && void 0 !== PE ? PE : oE, tE = (0, mO.l)("aiHelperOverview"), rE = tE ? "aiHelperOverview" : "welcome", vE = null !== tE && void 0 !== tE ? tE : oE, hE = (0, lq.useRef)(!1), nE = (0, lq.useRef)(!1), bE = (0, lq.useRef)(null), [iE, ZE] = (0, lq.useState)(""), [fE, ME] = (0, lq.useState)(!1), [TE, zE] = (0, lq.useState)(null), SE = (0, hq.g)("connectedGame"), pE = Bq && jE && "classic" === SE.gameNameWithVariation && !(0, WE.N)(SE.lobbyName), [GE, LE] = (0, lq.useState)(null), [JE, RE] = (0, lq.useState)({
          [ol.j]: ""
        }), [FE, sE] = (0, lq.useState)({
          assets: {},
          revision: 0
        }), XE = (0, lq.useRef)(FE), wE = (0, lq.useCallback)((qq => {
          var Eq;
          qq.revision < XE.current.revision || (XE.current = qq, sE(qq), yq(qq.startupError ? `Schematics could not load: ${qq.startupError}` : ""), null === (Eq = Vg.current) || void 0 === Eq || Eq.onLobbyFilesChanged({
            ...Ag.current,
            ...(0, bl.m)(qq.assets)
          }))
        }), []), [KE, CE] = (0, lq.useState)(ol.j), [IE, eE] = (0, lq.useState)(null), [DE, qg] = (0, lq.useState)(null), Eg = (0, lq.useRef)(!1), gg = (0, lq.useRef)(null), Yg = (0, lq.useRef)(KE);
        Yg.current = KE;
        const lg = (0, lq.useRef)(IE);
        lg.current = IE;
        const Og = IE ? null : TE,
          mg = Og && !Og.engineLocked ? Og.worldCodeEngine : null,
          xg = (0, lq.useRef)(DE);
        xg.current = DE;
        const Ag = (0, lq.useRef)(JE);
        Ag.current = JE;
        const cg = (0, lq.useRef)(null),
          ug = (0, lq.useRef)(null),
          [Bg, Wg] = (0, lq.useState)(!1),
          Ng = (0, Ll.s)(),
          ag = (0, lq.useRef)([]),
          Vg = (0, lq.useRef)(null),
          dg = (0, lq.useRef)(null),
          jg = (0, lq.useRef)(null);

        function Hg(qq) {
          Pq(qq), clearTimeout(bE.current), bE.current = setTimeout((() => {
            Pq({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const Pg = (0, lq.useCallback)((function() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Eg.current && gg.current && (cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.Leave,
              bE: (0, Pl.t)(gg.current),
              Wm: !!qq || null
            }), Eg.current = !1, gg.current = null), LE(null)
          }), []),
          Qg = (0, lq.useCallback)((qq => {
            const Eq = {
              kind: "lobby",
              path: qq
            };
            gg.current = Eq, CE(qq), Wq.current = "", cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.Join,
              bE: (0, Pl.t)(Eq)
            }), Eg.current = !0
          }), []),
          yg = (0, lq.useCallback)((qq => {
            var Eq;
            const gq = null === (Eq = dg.current) || void 0 === Eq ? void 0 : Eq.collabState;
            return gq && "lobby" === gq.docKey.kind && gq.docKey.path === qq && Yg.current === qq ? Promise.resolve({
              doc: gq.doc,
              version: gq.version,
              clientID: gq.clientID,
              docKey: gq.docKey,
              httpConfig: gq.httpConfig
            }) : new Promise(((Eq, gq) => {
              const Yq = setTimeout((() => {
                  ag.current = ag.current.filter((qq => qq !== lq)), gq(new Error(`Timed out joining ${qq}`))
                }), 15e3),
                lq = gq => {
                  "lobby" === gq.docKey.kind && gq.docKey.path === qq && (clearTimeout(Yq), ag.current = ag.current.filter((qq => qq !== lq)), Eq(gq))
                };
              ag.current.push(lq), Yg.current !== qq ? (Pg(!0), Qg(qq)) : Eg.current || Qg(qq)
            }))
          }), [Qg, Pg]),
          tg = (0, lq.useCallback)((async function(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Yq = Date.now();
            let lq = qq in Ag.current;
            for (; lq !== Eq;) {
              if (Date.now() - Yq > gq) throw new Error(`Timed out waiting for lobby path ${qq} present=${Eq}`);
              await (0, HY.M)(50), lq = qq in Ag.current
            }
          }), []),
          rg = (0, lq.useCallback)((qq => {
            const Eq = Ag.current,
              gq = ol.j in Eq && ol.n in Eq;
            if (!(0, Ql.f)(qq) || gq) {
              if (Yg.current === qq) {
                var Yq;
                const lq = gq && (0, Ql.f)(qq) ? qq === ol.j ? ol.n : ol.j : null !== (Yq = (0, Ql.b)(Eq)) && void 0 !== Yq ? Yq : ol.j;
                ug.current = {
                  fromPath: qq,
                  toPath: lq
                }, CE(lq)
              }
              cq.gameBridge.send("sendCodeCollab", {
                nE: Pl.c.DeleteFile,
                bE: (0, Pl.t)({
                  kind: "lobby",
                  path: Yg.current
                }),
                Nm: qq
              })
            }
          }), []),
          vg = (0, lq.useCallback)((qq => {
            wq.current = null, eE(null), qg(null), !Bq || qq === Yg.current && Eg.current || (Pg(!0), Qg(qq))
          }), [Bq, Pg, Qg]),
          hg = (0, lq.useCallback)(((qq, Eq) => {
            const gq = hl.i[qq],
              Yq = gq && Eq in gq.files ? Eq : "index.ts";
            if (qq !== lg.current || Yq !== xg.current) {
              var lq;
              if (qq !== lg.current) null === (lq = Vg.current) || void 0 === lq || lq.stopContinuousSync(), Pg(!0);
              eE(qq), qg(Yq)
            }
          }), [Pg]),
          ng = (0, lq.useCallback)((qq => {
            var Eq;
            const gq = Yg.current,
              Yq = Ag.current[gq],
              lq = Eg.current && !lg.current && gq in qq && void 0 !== Yq ? {
                ...qq,
                [gq]: Yq
              } : qq;
            RE(lq);
            const Oq = cg.current;
            if (Oq && Oq in qq) cg.current = null, Oq !== Yg.current && vg(Oq);
            else if (!(Yg.current in qq) && Eg.current && !lg.current) {
              var mq;
              vg(null !== (mq = (0, Ql.b)(qq)) && void 0 !== mq ? mq : ol.j)
            }
            null === (Eq = Vg.current) || void 0 === Eq || Eq.onLobbyFilesChanged({
              ...lq,
              ...(0, bl.m)(XE.current.assets)
            })
          }), [vg]),
          bg = (0, lq.useCallback)((() => sO(Yg.current).then((async qq => {
            if (!Eg.current || !qq.files) return null;
            ng(qq.files);
            const Eq = await Kl({
              action: "state"
            });
            return wE(Eq), {
              ...qq.files,
              ...(0, bl.m)(Eq.assets)
            }
          })).catch((qq => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", qq), Hg({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [ng, wE]),
          ig = () => {
            xq()
          };
        (0, lq.useEffect)((() => {
          if (yq(""), !Yq || !Bq) return;
          let qq = !1;
          return XE.current = {
            assets: {},
            revision: 0
          }, sE(XE.current), Kl({
            action: "state"
          }).then((Eq => {
            qq || wE(Eq)
          })).catch((Eq => {
            console.error("Could not load project schematics", Eq), qq || yq("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            qq = !0
          }
        }), [Yq, Bq, wE]);
        const Zg = (0, lq.useCallback)((function() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            gg.current && cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.Submit,
              bE: (0, Pl.t)(gg.current),
              ...qq ? {
                ME: "keepOpen"
              } : {}
            })
          }), []),
          fg = (0, lq.useCallback)((() => {
            if (!gg.current || "lobby" !== gg.current.kind) return;
            const qq = iE.trim();
            (0, yl.p)(qq) ? (cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.ReloadAsVariation,
              bE: (0, Pl.t)(gg.current),
              ME: qq
            }), ME(!1)) : Hg({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [iE]),
          Mg = (0, lq.useCallback)((qq => {
            cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.SetEngine,
              bE: (0, Pl.t)({
                kind: "lobby",
                path: Yg.current
              }),
              ME: qq
            })
          }), []),
          Tg = (0, lq.useCallback)((qq => {
            if (!lg.current && jE && (Hq.current || Bq)) {
              if (Bq) {
                var Eq;
                const gq = (0, Ql.l)(Ag.current, Yg.current),
                  Yq = Math.min(kE.w, Math.max(0, kE.C - gq)),
                  lq = qq.slice(0, Yq);
                return Wq.current = lq, RE((qq => ({
                  ...qq,
                  [Yg.current]: lq
                }))), void(null === (Eq = Vg.current) || void 0 === Eq || Eq.onDocTextChanged(Yg.current, lq))
              }
              Wq.current = qq, BE(qq)
            }
          }), [jE, Bq]);
        (0, rq.f)("EditLobbyCode", (qq => {
          var Eq;
          fq.featureFlags.canSeePlayerWrittenText && Bq && (Pg(), jq(qq), Wq.current = "", RE({
            [ol.j]: ""
          }), zE(null), CE(ol.j), eE(null), qg(null), cg.current = null, ug.current = null, null === (Eq = Vg.current) || void 0 === Eq || Eq.stopContinuousSync(), Oq(), Qg(ol.j))
        })), (0, rq.f)("EditCodeBlock", (qq => {
          let {
            pos: Eq,
            canChangePos: gq
          } = qq;
          if (fq.featureFlags.canSeePlayerWrittenText && !Bq)
            if (Pg(), null !== Eq && (Eq = [...Eq]), jq(Eq), Hq.current = gq, null !== Eq) {
              Wq.current = "", BE(""), Oq();
              const qq = {
                  kind: "codeBlock",
                  pos: Eq
                },
                Yq = (0, Pl.t)(qq);
              NE.current !== Yq && (NE.current = Yq, OE([]), cE(mE)), VE((0, LO.b)(Yq, [Eq[0], Eq[1], Eq[2]], !!gq)), gg.current = qq, cq.gameBridge.send("sendCodeCollab", {
                nE: Pl.c.Join,
                bE: (0, Pl.t)(qq)
              }), Eg.current = !0
            } else Yq && xq()
        })), (0, rq.f)("codeCollabRejoin", (qq => {
          const Eq = gg.current ? (0, Pl.t)(gg.current) : null;
          Eq && qq.docKey === Eq && (Wq.current = qq.doc, Bq || BE(qq.doc), LE((Eq => Eq ? {
            ...Eq,
            doc: qq.doc,
            version: qq.version,
            clientID: (0, vl.d)()
          } : Eq)))
        })), (0, rq.f)("codeCollab", (qq => {
          var Eq;
          const gq = gg.current ? (0, Pl.t)(gg.current) : null;
          if (qq.type === Pl.f.LobbyFilesChanged && Bq) {
            if ("string" !== typeof qq.files) return void bg();
            try {
              ng(JSON.parse(qq.files))
            } catch (cq) {
              console.error("[CodeCollab] Failed to parse lobby files", cq), bg()
            }
            return
          }
          if (qq.type === Pl.f.EngineSettings && Bq) return void zE(Dl(qq.engineSettings));
          const lq = qq.type === Pl.f.Joined ? (0, Pl.j)(qq.docKey) : null,
            Oq = Bq && "lobby" === (null === (Eq = gg.current) || void 0 === Eq ? void 0 : Eq.kind) && (0, Ql.f)(gg.current.path) && "lobby" === (null === lq || void 0 === lq ? void 0 : lq.kind) && (0, Ql.f)(lq.path);
          if (!gq || qq.docKey === gq || Oq)
            if (qq.type !== Pl.f.ForceClose) {
              if (Yq)
                if (qq.type === Pl.f.Joined) {
                  var mq;
                  const uq = JSON.parse(qq.peers),
                    Nq = qq.existingCursors ? JSON.parse(qq.existingCursors) : [],
                    dq = (0, vl.d)(),
                    jq = wl(),
                    {
                      gsUrl: Hq,
                      gameNameWithVariation: oq,
                      lobbyName: Qq
                    } = jq,
                    yq = null !== (mq = (0, Pl.j)(qq.docKey)) && void 0 !== mq ? mq : gg.current;
                  yq && (gg.current = yq, "lobby" === yq.kind && (CE(yq.path), Yg.current = yq.path));
                  const tq = yq || (Bq ? {
                    kind: "lobby",
                    path: Yg.current
                  } : {
                    kind: "codeBlock",
                    pos: Vq
                  });

                  function rq(Eq) {
                    var gq, Yq;
                    if (!Eg.current) return;
                    const lq = null !== (gq = Eq.code) && void 0 !== gq ? gq : "",
                      Oq = null !== (Yq = Eq.collabVersion) && void 0 !== Yq ? Yq : 0;
                    Wq.current = lq, Bq || BE(lq), Bq && Eq.files ? RE(Eq.files) : Bq && RE((qq => ({
                      ...qq,
                      [Yg.current]: lq
                    })));
                    const mq = {
                      doc: lq,
                      version: Oq,
                      clientID: dq,
                      docKey: tq,
                      peers: uq,
                      editorCount: qq.editorCount,
                      existingCursors: Nq,
                      httpConfig: jq
                    };
                    if (LE(mq), "lobby" === tq.kind) {
                      var xq;
                      const qq = {
                        doc: lq,
                        version: Oq,
                        clientID: dq,
                        docKey: tq,
                        httpConfig: jq
                      };
                      for (const Eq of [...ag.current]) Eq(qq);
                      null === (xq = Vg.current) || void 0 === xq || xq.startWhenReady()
                    }
                    Eq.canSeeCode ? (clearTimeout(bE.current), Pq({
                      message: null,
                      type: null
                    })) : function(qq) {
                      clearTimeout(bE.current), Pq(qq)
                    }(KO);
                    const Aq = wq.current;
                    wq.current = null, Bq && Aq && Eq.files && Aq in Eq.files && Aq !== Yg.current && vg(Aq)
                  }
                  Bq ? sO(Yg.current).then(rq).catch((qq => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", qq), Pg()
                  })) : (0, Hl.postJsonWithMetricsCookiesAndJsonResponse)(`${Hq}/code/get-code-block`, jl.Ek["get-code-block"].toBuffer({
                    gameNameWithVariation: oq,
                    lobbyName: Qq,
                    pos: Vq
                  }), {
                    retries: 1
                  }).then(rq).catch((qq => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", qq), Pg()
                  }))
                } else if (qq.type === Pl.f.Presence) {
                if (!gq) return;
                const vq = JSON.parse(qq.peers);
                LE((Eq => Eq ? {
                  ...Eq,
                  peers: vq,
                  editorCount: qq.editorCount
                } : Eq))
              }
            } else {
              var Aq;
              if (!gq) return;
              Yq && Bq && "keptOpen" === qq.updates && aq.i.TV("CodeEditorKeepEdits");
              const hq = gg.current;
              Eg.current = !1, gg.current = null, LE(null);
              if (!Bq || "close" === qq.updates) return (0, GO.i)(), void(Yq && xq());
              if (!Yq) return;
              const nq = Ag.current,
                bq = ug.current;
              ug.current = null;
              const iq = "lobby" === (null === hq || void 0 === hq ? void 0 : hq.kind) && hq.path === (null === bq || void 0 === bq ? void 0 : bq.fromPath),
                Zq = bq && (iq || bq.toPath in nq || (0, Ql.f)(bq.toPath)) ? bq.toPath : Yg.current in nq ? Yg.current : null !== (Aq = (0, Ql.b)(nq)) && void 0 !== Aq ? Aq : ol.j;
              Qg(Zq)
            }
        })), (0, rq.f)("refetchCode", (() => {
          fq.featureFlags.canSeePlayerWrittenText && Yq && Eg.current && (jE || (Pg(), Bq ? aq.i.TV("EditLobbyCode", Vq) : aq.i.TV("EditCodeBlock", {
            pos: Vq,
            canChangePos: Hq.current
          })))
        }));
        const zg = (0, lq.useCallback)((() => {
            Yq && (pq(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Yq]),
          Sg = (0, lq.useCallback)((() => {
            pq(!1)
          }), []);
        (0, lq.useEffect)((() => {
          Yq && jE && ("docsButton" === yE && Sq ? (0, xO.e)("docsButton") : yE && xO.h.includes(yE) && !Sq && (pq(!0), EE(!1)))
        }), [Yq, jE, yE, Sq, EE]);
        const pg = (0, lq.useCallback)((() => {
          EE(!1)
        }), [EE]);
        (0, lq.useEffect)((() => {
          Yq && jE && dE && ("aiHelperButton" === vE && qE ? (0, xO.e)("aiHelperButton") : vE && xO.b.includes(vE) && !qE && (EE(!0), pq(!1)))
        }), [Yq, jE, dE, vE, qE, EE]), (0, lq.useEffect)((() => {
          if (!Yq || !jE) return;
          const qq = Bq ? "worldCode" : "codeBlock";
          return (0, xO.A)(qq, !0), () => {
            (0, xO.A)(qq, !1)
          }
        }), [Yq, jE, Bq]), (0, lq.useEffect)((() => {
          if (Yq) return () => {
            hE.current ? hE.current = !1 : (0, xO.y)()
          }
        }), [Yq]), (0, lq.useEffect)((() => {
          (0, xO.E)("exportButton", !!HE)
        }), [HE]);
        const {
          t: Gg
        } = (0, Kq.v)(), Lg = !qE && mE > AE, Jg = Lg ? Nq.K : Nq.A, kg = (0, lq.useCallback)(((qq, Eq) => {
          aq.i.TV("CodeEditorGoToLine", {
            path: qq,
            line: Eq
          }), vg(qq)
        }), [vg]), Rg = (0, lq.useCallback)((qq => {
          jg.current = qq
        }), []), Ug = function(qq, Eq) {
          const [gq, Yq] = (0, lq.useState)(null);
          return (0, lq.useEffect)((() => {
            if (!Eq) return void Yq(null);
            let gq = !1;
            return Gl(qq).then((qq => {
              gq || Yq(qq)
            }), (qq => {
              console.error("[CodeEditor] could not collect the imported plugins", qq), gq || Yq(null)
            })), () => {
              gq = !0
            }
          }), [qq, Eq]), gq
        }(JE, Yq);
        (0, lq.useEffect)((() => {
          Ug && IE && !Ug.includes(IE) && (eE(null), qg(null), Bq && !Eg.current && Qg(Yg.current))
        }), [IE, Ug, Bq, Qg]), dg.current = {
          collabState: GE,
          ensureJoinedPath: yg,
          waitForLobbyPath: tg,
          pullLobbyFiles: bg,
          t: Gg,
          canEditCode: !!jE
        }, Vg.current || (Vg.current = new sl({
          getLobbyFiles: () => ({
            ...Ag.current,
            ...(0, bl.m)(XE.current.assets)
          }),
          deleteSchematic: async qq => {
            const Eq = await Kl({
              action: "remove",
              path: qq,
              expectedRevision: XE.current.revision
            });
            wE(Eq)
          },
          getActivePath: () => Yg.current,
          getCollabSnapshot: () => {
            var qq;
            if (lg.current) return null;
            const Eq = null === (qq = dg.current) || void 0 === qq ? void 0 : qq.collabState;
            return Eq ? {
              doc: Eq.doc,
              version: Eq.version,
              clientID: Eq.clientID,
              docKey: Eq.docKey,
              httpConfig: Eq.httpConfig
            } : null
          },
          replaceActiveDoc: (qq, Eq) => {
            var gq, Yq;
            return null !== (gq = null === (Yq = jg.current) || void 0 === Yq ? void 0 : Yq.call(jg, qq, Eq)) && void 0 !== gq && gq
          },
          ensureJoined: qq => dg.current.ensureJoinedPath(qq),
          createFile: (qq, Eq) => {
            !1 !== (null === Eq || void 0 === Eq ? void 0 : Eq.focus) && (cg.current = qq), cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.CreateFile,
              bE: (0, Pl.t)({
                kind: "lobby",
                path: Yg.current
              }),
              Nm: qq
            })
          },
          renameFile: (qq, Eq) => {
            const gq = (0, Pl.t)({
              kind: "lobby",
              path: Yg.current
            });
            Yg.current === qq && (ug.current = {
              fromPath: qq,
              toPath: Eq
            }, CE(Eq)), cq.gameBridge.send("sendCodeCollab", {
              nE: Pl.c.RenameFile,
              bE: gq,
              Nm: qq,
              am: Eq
            })
          },
          deleteFile: qq => {
            rg(qq)
          },
          waitForLobbyPath: (qq, Eq, gq) => dg.current.waitForLobbyPath(qq, Eq, gq),
          pullLobbyFiles: () => dg.current.pullLobbyFiles(),
          setMessage: (qq, Eq) => {
            Hg({
              message: qq,
              type: Eq
            })
          },
          onUnlinked: () => {
            Wg(!1)
          },
          t: qq => dg.current.t(qq),
          canEditCode: () => dg.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: qq,
              lobbyName: Eq
            } = cq.gameBridge.latest("connectedGame");
            return (0, Ll.g)(qq, Eq)
          }
        }));
        const Fg = (0, lq.useCallback)((async qq => {
            const Eq = Vg.current;
            if (!Eq) return !1;
            try {
              return await Eq.writeLobbyFiles(qq)
            } catch (gq) {
              return console.error("World Code AI: couldn't write the change", gq), !1
            }
          }), []),
          sg = (0, lq.useCallback)((async qq => {
            var Eq, gq;
            const Yq = null === (Eq = qq.find((qq => qq.path === pO.c))) || void 0 === Eq ? void 0 : Eq.text,
              lq = gg.current;
            return void 0 !== Yq && "codeBlock" === (null === lq || void 0 === lq ? void 0 : lq.kind) && (!(null === (gq = jg.current) || void 0 === gq || !gq.call(jg, (0, Pl.t)(lq), Yq)) && (Wq.current = Yq, BE(Yq), !0))
          }), []),
          Xg = (0, lq.useCallback)((async () => {
            try {
              var qq, Eq;
              const gq = await sO(ol.j);
              return !1 === gq.canSeeCode ? null : null !== (qq = gq.files) && void 0 !== qq ? qq : {
                [ol.j]: null !== (Eq = gq.code) && void 0 !== Eq ? Eq : ""
              }
            } catch (gq) {
              return console.error("World Code AI: couldn't read World Code for a code block", gq), null
            }
          }), []),
          wg = (0, lq.useMemo)((() => ({
            [pO.c]: uE
          })), [uE]),
          Kg = (0, lq.useCallback)(((qq, Eq) => {
            aq.i.TV("CodeEditorGoToLine", {
              path: pO.c,
              line: Eq
            })
          }), []);
        (0, lq.useEffect)((() => {
          qE && Yq && cE(mE)
        }), [qE, Yq, mE]);
        const Cg = (0, lq.useCallback)((() => {
            var qq, Eq;
            Zg();
            const gq = (0, fq.isTouchscreen)() ? "open World Code again" : `press ${null!==(qq=null===(Eq=UE.u.OpenCodeEditor)||void 0===Eq?void 0:Eq[0])&&void 0!==qq?qq:"F8"}`,
              Yq = Bq ? `\ud83e\udd16 Try out your change, then ${gq} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            aq.i.TV("chat", {
              content: [{
                str: Yq,
                style: {
                  color: vq.M.cyanUiText
                }
              }]
            })
          }), [Zg, Bq]),
          Ig = (0, lq.useCallback)((qq => {
            const Eq = Vq,
              gq = Hq.current;
            Bq || !Eq || cq.gameBridge.lookup("codeBlockClickable", Eq) ? (0, GO.k)(qq, {
              submit: () => {
                Zg(), aq.i.TV("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: vq.M.cyanUiText
                    }
                  }]
                }), !Bq && Eq && setTimeout((() => {
                  cq.gameBridge.send("clickCodeBlock", Eq)
                }), 1e3)
              },
              reopen: () => {
                (0, Jq.p)() || (Bq ? aq.i.TV("EditLobbyCode", Eq) : aq.i.TV("EditCodeBlock", {
                  pos: Eq,
                  canChangePos: gq
                }))
              }
            }) : Cg()
          }), [Zg, Bq, Vq, Cg]),
          eg = (0, lq.useCallback)((() => {
            EE(!1)
          }), [EE]),
          Dg = (0, lq.useRef)(ig);
        Dg.current = ig;
        const qY = (0, lq.useCallback)((function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            aq.i.TV("WorldCodeAiDraft", {
              text: qq,
              send: Eq
            }), Dg.current(), aq.i.TV("EditLobbyCode", Vq)
          }), [Vq]),
          EY = (0, lq.useCallback)((qq => {
            Dg.current(), qq.codeBlock ? aq.i.TV("EditCodeBlock", {
              pos: [...qq.pos],
              canChangePos: qq.canChangePos
            }) : aq.i.TV("EditLobbyCode", Vq)
          }), [Vq]);
        (0, rq.f)("WorldCodeAiDraft", (qq => {
          Bq && (YE(qq), EE(!0))
        }));
        const gY = !!jE && !!yE && xO.h.includes(yE),
          YY = !!jE && !!vE && xO.b.includes(vE);
        (0, lq.useEffect)((() => {
          Yq && qE && dE && !gY && pq(!1)
        }), [Yq, qE, dE, gY]);
        const lY = (0, lq.useCallback)((() => {
            EE(!1), pq(!1)
          }), [EE]),
          {
            kB: OY,
            setWorld: mY,
            toggleWorld: xY
          } = function(qq) {
            let {
              showAi: Eq,
              showDocs: gq,
              showChat: Yq,
              hideOtherRightPanels: Oq
            } = qq;
            const [mq, xq] = (0, lq.useState)("hidden"), Aq = (0, lq.useRef)(null), cq = (0, lq.useCallback)((() => {
              Aq.current = null, xq((qq => "hidden" === qq ? qq : (0, aO.f)() ? "hidden" : "shown"))
            }), []);
            (0, lq.useEffect)((() => {
              (Eq || gq) && cq()
            }), [Eq, gq, cq]), (0, lq.useEffect)((() => {
              Yq && cq()
            }), [Yq, cq]);
            const uq = "hidden" !== mq && (0, aO.f)();
            (0, lq.useLayoutEffect)((() => {
              if (uq) {
                const qq = document.activeElement;
                qq instanceof HTMLElement && qq.closest(".cm-content") && (Aq.current = qq, qq.blur())
              } else {
                var qq;
                null === (qq = Aq.current) || void 0 === qq || qq.focus(), Aq.current = null
              }
            }), [uq]);
            const Bq = (0, lq.useCallback)((() => {
              "hidden" === mq ? (xq("shown"), (0, aO.f)() && Oq()) : xq("hidden")
            }), [mq, Oq]);
            return {
              kB: mq,
              setWorld: xq,
              toggleWorld: Bq
            }
          }({
            showAi: qE,
            showDocs: Sq,
            showChat: Gq,
            hideOtherRightPanels: lY
          }),
          AY = qE && null !== aE && dE,
          cY = (0, lq.useCallback)((() => {
            YE(null)
          }), []),
          [uY, BY] = (0, lq.useState)(null);
        (0, rq.f)("WorldCodeAiSelection", (qq => {
          Yq && (BY(qq), EE(!0), pq(!1))
        }));
        const WY = (0, lq.useCallback)((() => {
          BY(null)
        }), []);
        (0, rq.f)("chat", (qq => {
          let {
            content: Eq
          } = qq;
          if (!Bq && null === NE.current) return;
          const gq = Array.isArray(Eq) ? Eq : [Eq],
            Yq = gq.some((qq => {
              var Eq;
              return (null === qq || void 0 === qq || null === (Eq = qq.style) || void 0 === Eq ? void 0 : Eq.color) === vq.M.redUiText
            })),
            lq = gq.map((qq => {
              var Eq;
              const gq = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.str) && void 0 !== Eq ? Eq : qq;
              return "string" === typeof gq ? gq : ""
            })).join("");
          Yq && /world code|error/i.test(lq) && (OE((qq => [...qq, lq].slice(-10))), xE((qq => qq + 1)), (0, GO.h)(lq))
        })), (0, lq.useEffect)((() => {
          if (!Yq || !Bq || !Ng) return;
          let qq = !1;
          return (async (Eq, gq) => {
            const Yq = await (null === (Eq = Vg.current) || void 0 === Eq ? void 0 : Eq.tryRestoreHandle());
            !qq && Yq && (Wg(!0), null === (gq = Vg.current) || void 0 === gq || gq.startWhenReady())
          })(), () => {
            qq = !0
          }
        }), [Yq, Bq, Ng]), (0, lq.useEffect)((() => {
          var qq;
          Yq || (null === (qq = Vg.current) || void 0 === qq || qq.stopContinuousSync(), Pg(!1), nE.current && (nE.current = !1, cq.gameBridge.send("sendChatMessage", {
            Hc: "//export",
            channelName: null
          })))
        }), [Yq, Pg]);
        const NY = (0, lq.useCallback)((async () => {
            if (Ng && Vg.current) try {
              if (!await Vg.current.linkFolder()) return;
              Wg(!0), await Vg.current.startWhenReady()
            } catch (qq) {
              console.error("[WorldCodeDirectorySync] Link failed", qq), Hg({
                message: Gg("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Ng, Gg]),
          aY = (0, lq.useCallback)((async () => {
            Vg.current && await Vg.current.unlinkFolder()
          }), []),
          VY = (0, lq.useCallback)((() => {
            Ng ? Bg ? aY() : NY() : CY.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Ng, Bg, NY, aY]),
          dY = Bq && "hidden" !== OY;
        return (0, uq.jsxs)(mq.c, {
          className: og()("CodeEditorBg", {
            CodeEditorLight: Zq,
            WorldShown: "hidden" !== OY,
            WorldTouchControl: "touchControls" === eq
          }),
          close: ig,
          escDoesExit: !0,
          show: Yq,
          togglePointerLock: !1,
          globallyUniqueKey: Bq ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, uq.jsx)(mO.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Gg("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!jE && !Bq
          }), (0, uq.jsx)(mO.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, uq.jsxs)(uq.Fragment, {
              children: [(0, uq.jsx)("p", {
                children: Gg("codeEditor:tutorialWorldCodeWelcome")
              }), (0, uq.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, uq.jsx)("li", {
                  children: Gg("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, uq.jsx)("li", {
                  children: Gg("codeEditor:tutorialWorldCodeUseReact")
                }), (0, uq.jsx)("li", {
                  children: Gg("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!jE && Bq
          }), (0, uq.jsx)("div", {
            className: "CodeEditorTitle",
            children: Bq ? "World Code" : "Code Block"
          }), (0, uq.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, uq.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, uq.jsx)(Xq.e, {
                tooltipInner: Gg(HE ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: HE ? void 0 : 0,
                hideTooltip: "exportButton" === oE,
                children: (0, uq.jsx)(mO.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Gg("codeEditor:tutorialExport"),
                  enabled: !!jE,
                  children: (0, uq.jsx)(Nq.p, {
                    className: "CodeEditorButton",
                    disabled: !HE,
                    onClick: () => {
                      "exportButton" === oE && ((0, xO.e)("exportButton"), hE.current = !0), nE.current = !0, ig()
                    },
                    padDestructive: !0,
                    children: Gg("codeEditor:exportWorld")
                  })
                })
              }), (0, uq.jsx)(zO, {
                kB: OY,
                setWorld: mY,
                toggleWorld: xY,
                aiShown: AY,
                closeAi: eg
              })]
            }), (0, uq.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [jE && (0, uq.jsx)(Xq.e, {
                tooltipInner: Gg("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === oE,
                children: (0, uq.jsx)(mO.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Gg("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, uq.jsx)(Nq.g, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Gg("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, xO.e)("helpButton"), CY.NotificationProvider.showCustomPopup({
                        body: qq => (0, uq.jsx)(AO, {
                          close: qq
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, uq.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, uq.jsx)(dq.d, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, uq.jsx)(Xq.e, {
                tooltipInner: Gg("codeEditor:closeTooltip"),
                children: (0, uq.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    ig()
                  },
                  children: (0, uq.jsx)(Nq.m, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, uq.jsx)(rl, {
            peers: null !== (Eq = null === GE || void 0 === GE ? void 0 : GE.peers) && void 0 !== Eq ? Eq : []
          }), (0, uq.jsxs)("div", {
            className: og()("CodeEditorMainArea", {
              WorldCovers: "always" === VO(OY),
              WorldCoversWhenNarrow: "narrow" === VO(OY)
            }),
            children: [Gq && Fq && (0, uq.jsx)(aO.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                kq(!1)
              },
              children: (0, uq.jsx)(NO, {
                inputRef: Rq
              })
            }), Bq && (0, uq.jsx)(fl, {
              schematics: FE.assets,
              onManageSchematic: qq => {
                jE && CY.NotificationProvider.showCustomPopup({
                  body: Eq => (0, uq.jsx)(el, {
                    initialPath: qq,
                    onChanged: wE,
                    onClose: Eq
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: JE,
              activePath: KE,
              canEdit: !!jE,
              directoryLinked: Bg,
              pluginNames: null !== Ug && void 0 !== Ug ? Ug : wO,
              activePluginName: IE,
              activePluginFile: DE,
              onSelect: vg,
              onSelectPlugin: hg,
              onToggleDirectorySync: VY,
              onCreate: qq => {
                cg.current = qq, cq.gameBridge.send("sendCodeCollab", {
                  nE: Pl.c.CreateFile,
                  bE: (0, Pl.t)({
                    kind: "lobby",
                    path: Yg.current
                  }),
                  Nm: qq
                })
              },
              onRename: (qq, Eq) => {
                Yg.current === qq && (ug.current = {
                  fromPath: qq,
                  toPath: Eq
                }, CE(Eq)), cq.gameBridge.send("sendCodeCollab", {
                  nE: Pl.c.RenameFile,
                  bE: (0, Pl.t)({
                    kind: "lobby",
                    path: Yg.current
                  }),
                  Nm: qq,
                  am: Eq
                })
              },
              onRenameFolder: (qq, Eq) => {
                const [gq] = (0, Ql.k)([Yg.current], qq, Eq);
                gq && (ug.current = {
                  fromPath: gq[0],
                  toPath: gq[1]
                }, CE(gq[1])), cq.gameBridge.send("sendCodeCollab", {
                  nE: Pl.c.RenameFolder,
                  bE: (0, Pl.t)({
                    kind: "lobby",
                    path: Yg.current
                  }),
                  Nm: qq,
                  am: Eq
                })
              },
              onDelete: rg
            }), (0, uq.jsx)("div", {
              className: og()("CodeEditorMessage", {
                CodeEditorMessageHidden: !tq.message,
                CodeEditorMessageSuccess: "success" === tq.type
              }),
              children: tq.message && (0, uq.jsx)("div", {
                className: "CodeEditorMessageText",
                children: tq.message
              })
            }), (0, uq.jsx)(lq.Suspense, {
              fallback: (0, uq.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, uq.jsx)(nq.e, {})
              }),
              children: (0, uq.jsx)(JO, {
                isLobbyCode: Bq,
                code: GE ? GE.doc : Wq.current,
                files: Bq ? JE : void 0,
                activePath: Bq ? KE : void 0,
                pluginName: IE,
                pluginFile: DE,
                pluginSource: IE && DE ? null === (gq = hl.i[IE]) || void 0 === gq ? void 0 : gq.files[DE] : void 0,
                onChange: Tg,
                canEditCode: jE,
                setTemporaryMessage: Hg,
                close: ig,
                showTooltips: bq,
                lightMode: Zq,
                collabState: GE,
                setActiveDocReplacer: Rg,
                showAiHints: dE && Tq,
                canAiChangeCode: !!jE && (Bq || !!Hq.current),
                onRemoteDocChange: qq => {
                  var Eq;
                  (Wq.current = qq, Bq) ? (RE((Eq => ({
                    ...Eq,
                    [Yg.current]: qq
                  }))), null === (Eq = Vg.current) || void 0 === Eq || Eq.onDocTextChanged(Yg.current, qq)) : BE(qq)
                }
              })
            }), (Sq || AY || "hidden" !== OY) && (0, uq.jsxs)(dO, {
              kB: OY,
              worldPanel: (0, uq.jsx)(MO, {
                shown: OY,
                setShown: mY,
                canInsertCode: !!jE && !IE
              }),
              closeWorld: () => {
                mY("hidden")
              },
              aiShown: AY,
              defaultWidth: Sq ? "40%" : "max(18rem, 36%)",
              children: [Sq && (0, uq.jsx)(aO.b, {
                onClose: gY ? void 0 : Sg,
                children: (0, uq.jsx)(lq.Suspense, {
                  fallback: (0, uq.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, uq.jsx)(nq.e, {})
                  }),
                  children: (0, uq.jsx)(kO, {
                    popOutDocs: zg,
                    hideDocs: Sg,
                    tutorialEnabled: !!jE
                  })
                })
              }), AY && (0, uq.jsx)(aO.b, {
                onClose: YY ? void 0 : eg,
                children: (0, uq.jsx)(lq.Suspense, {
                  fallback: (0, uq.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, uq.jsx)(nq.e, {})
                  }),
                  children: (0, uq.jsx)(RO, {
                    target: aE,
                    chatKey: `${SE.gameNameWithVariation}/${SE.lobbyName}/aiHelper`,
                    historyKey: `${SE.gameNameWithVariation}/${SE.lobbyName}/${aE.key}`,
                    files: aE.codeBlock ? wg : JE,
                    activePath: aE.codeBlock ? pO.c : KE,
                    canEdit: !!jE && (aE.codeBlock ? !!Hq.current : !IE),
                    isLoaded: null !== GE,
                    errors: lE,
                    errorCount: mE,
                    applyFiles: aE.codeBlock ? sg : Fg,
                    submit: Cg,
                    testRun: Ig,
                    close: eg,
                    goToLine: aE.codeBlock ? Kg : kg,
                    openWorldCode: aE.codeBlock ? qY : void 0,
                    readWorldCode: aE.codeBlock ? Xg : void 0,
                    viewChunk: UO,
                    viewGameState: FO,
                    openTarget: jE ? EY : void 0,
                    draft: gE,
                    onDraftUsed: cY,
                    selection: uY,
                    onSelectionUsed: WY
                  }, aE.key)
                })
              })]
            })]
          }), (null === Og || void 0 === Og ? void 0 : Og.fallback) && (0, uq.jsx)(qO, {
            fallback: Og.fallback,
            onGoToLine: kg
          }), (0, uq.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, uq.jsx)(Xq.e, {
              tooltipInner: Gg(Zq ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, uq.jsx)(Nq.g, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Gg(Zq ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  Mq(!Zq)
                },
                children: (0, uq.jsx)(dq.d, {
                  name: Zq ? "moon" : "sun-bright"
                })
              })
            }), (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg(dY ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.p, {
                className: "CodeEditorButton",
                onClick: () => {
                  Zg(dY)
                },
                padDefaultFocus: !0,
                children: Gg("codeEditor:submitCode")
              })
            }), (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg(Sq ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === yE || "hideDocsButton" === yE,
              children: (0, uq.jsx)(mO.h, {
                tutorial: QE,
                step: Sq ? "hideDocsButton" : "docsButton",
                text: Gg(Sq ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!jE,
                placement: "top",
                waitForClick: !0,
                onPrevious: Sq && "welcome" === QE ? Sg : void 0,
                children: (0, uq.jsx)(Nq.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, xO.e)(Sq ? "hideDocsButton" : "docsButton"), pq(!Sq), EE(!1)
                  },
                  children: Gg(Sq ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), dE && (0, uq.jsx)(mO.h, {
              tutorial: rE,
              step: qE ? "hideAiHelperButton" : "aiHelperButton",
              text: Gg(qE ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === rE ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!jE,
              placement: "top",
              waitForClick: !0,
              onPrevious: qE && "welcome" === rE ? pg : void 0,
              children: (0, uq.jsx)(Jg, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, xO.e)(qE ? "hideAiHelperButton" : "aiHelperButton"), EE(!qE), pq(!1)
                },
                children: qE ? "Hide AI Helper" : Lg ? "Fix error with AI" : "AI Helper"
              })
            }), Fq && (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg(Gq ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.A, {
                className: "CodeEditorButton",
                onClick: () => {
                  Uq.current = !Gq, kq(!Gq)
                },
                children: Gg(Gq ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg("hidden" === OY ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.A, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: xY,
                children: Gg("hidden" === OY ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  aq.i.TV("FormatCode")
                },
                children: Gg("codeEditor:formatCode")
              })
            }), (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Wq.current).then((() => {
                    Hg({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Hg({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Gg("codeEditor:copyCode")
              })
            }), (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg(bq ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  iq(!bq)
                },
                children: Gg(bq ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Bq && (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === oE,
              children: (0, uq.jsx)(mO.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Gg("codeEditor:tutorialWorldCodeButton"),
                enabled: !!jE,
                placement: "top",
                waitForClick: !0,
                children: (0, uq.jsx)(Nq.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === oE && ((0, xO.e)("worldCodeButton"), hE.current = !0), ig(), aq.i.TV("EditLobbyCode", Vq)
                  },
                  children: Gg("codeEditor:worldCode")
                })
              })
            }), (pE || mg || dE) && (0, uq.jsx)(Xq.e, {
              tooltipInner: Gg("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, uq.jsx)(Nq.g, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  ME(!0)
                },
                children: (0, uq.jsx)(dq.d, {
                  name: "ellipsis"
                })
              })
            })]
          }), fE && (0, uq.jsx)(eY.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              ME(!1)
            },
            body: (0, uq.jsx)(OO, {
              engine: mg,
              onSetEngine: Mg,
              aiHints: dE ? {
                shown: Tq,
                setShown: zq
              } : null,
              variation: pE ? {
                name: iE,
                setName: ZE,
                reload: fg
              } : null
            })
          })]
        })
      })),
      IO = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function eO(qq) {
      return "inventory" === qq
    }
    const DO = (0, lq.memo)((function() {
      const {
        openEverythingMenuName: qq,
        openInGameMenuName: Eq
      } = (0, Lq.j)(["openEverythingMenuName", "openInGameMenuName"]), gq = (0, hq.g)("fullInventory"), Oq = (0, lq.useRef)(null), mq = (0, iE.j)();
      (0, rq.f)("toggleMenu", (qq => {
        var Eq;
        if (!mq.shown) return;
        const gq = Lq.b.get("openInGameMenuName");
        let Yq = qq.split("|")[0];
        const lq = null !== (Eq = qq.split("|")[1]) && void 0 !== Eq ? Eq : null;
        ("closeCurrentMenu" === lq && gq || Yq === gq) && (Oq.current = null, Yq = null);
        const xq = "closeCurrentMenu" === lq ? null : lq;
        Oq.current !== xq && (Oq.current = xq), null !== Yq && (0, ml.m)(ml.d, {
          keepsMovement: eO(Yq)
        }), Lq.b.set({
          openInGameMenuName: Yq
        })
      }));
      const xq = (0, lq.useCallback)((qq => () => {
          aq.i.TV("toggleMenu", qq)
        }), []),
        Aq = (0, lq.useRef)({
          cantCrouchIfNotFullscreen: xq("cantCrouchIfNotFullscreen"),
          makeReport: xq("makeReport"),
          makeDiscordReport: xq("makeDiscordReport"),
          editBook: xq("editBook"),
          editNameTag: xq("editNameTag"),
          inventory: xq("inventory"),
          inviteLink: xq("inviteLink"),
          writeOnBoard: xq("writeOnBoard"),
          codeEditor: xq("codeEditor"),
          lobbyCodeEditor: xq("lobbyCodeEditor"),
          customLobbyBlockEditor: xq("customLobbyBlockEditor"),
          ironChestPasskeyInput: xq("ironChestPasskeyInput"),
          petUi: xq("petUi")
        }),
        cq = (0, lq.useCallback)((() => {
          Lq.b.set({
            openInGameMenuName: null
          })
        }), []),
        Bq = (0, lq.useRef)(null);
      return (0, lq.useEffect)((() => {
        if (Eq) {
          var qq;
          (0, ml.m)(ml.d, {
            keepsMovement: eO(Eq)
          }), Bq.current = IO.has(Eq) ? null !== (qq = Lq.b.get("openEverythingMenuName")) && void 0 !== qq ? qq : Bq.current : null, Lq.b.set({
            openEverythingMenuName: null
          })
        } else {
          const qq = Bq.current;
          Bq.current = null, null !== qq && null === Lq.b.get("openEverythingMenuName") && Lq.b.set({
            openEverythingMenuName: qq
          }), Oq.current = null, (0, ml.j)(ml.d)
        }
      }), [Eq]), (0, lq.useEffect)((() => {
        null !== qq && cq()
      }), [qq, cq]), (0, uq.jsxs)(uq.Fragment, {
        children: [(0, uq.jsx)(Yq.h, {
          show: "clientGame" === Eq
        }), (0, uq.jsx)(XY, {
          show: "cantCrouchIfNotFullscreen" === Eq,
          onOpen: Aq.current.cantCrouchIfNotFullscreen,
          onClose: cq
        }), (0, uq.jsx)(Yl, {
          show: "makeReport" === Eq,
          onOpen: Aq.current.makeReport,
          onClose: cq
        }), (0, uq.jsx)(Ol, {
          show: "makeDiscordReport" === Eq,
          onOpen: Aq.current.makeDiscordReport,
          onClose: cq
        }), (0, uq.jsx)(Eg, {
          show: "editBook" === Eq,
          onOpen: Aq.current.editBook,
          onClose: cq
        }), (0, uq.jsx)(DE, {
          show: "editNameTag" === Eq,
          onOpen: Aq.current.editNameTag,
          onClose: cq
        }), gq && (0, uq.jsx)(UY, {
          show: "inventory" === Eq,
          onOpen: Aq.current.inventory,
          onClose: cq,
          variation: Oq.current
        }), (0, uq.jsx)(ZE, {
          show: "inviteLink" === Eq,
          onClose: cq,
          option: Oq.current
        }), (0, uq.jsx)(zq, {
          show: "retentionFeatures" === Eq,
          onClose: cq
        }), (0, uq.jsx)(eE, {
          show: "writeOnBoard" === Eq,
          onOpen: Aq.current.writeOnBoard,
          onClose: cq
        }), (0, uq.jsx)(CO, {
          show: "lobbyCodeEditor" === Eq,
          onOpen: Aq.current.lobbyCodeEditor,
          onClose: cq,
          isLobbyCode: !0
        }), (0, uq.jsx)(CO, {
          show: "codeEditor" === Eq,
          onOpen: Aq.current.codeEditor,
          onClose: cq,
          isLobbyCode: !1
        }), (0, uq.jsx)(Al, {
          show: "customLobbyBlockEditor" === Eq,
          onOpen: Aq.current.customLobbyBlockEditor,
          onClose: cq
        }), (0, uq.jsx)(Qg, {
          show: "ironChestPasskeyInput" === Eq,
          onOpen: Aq.current.ironChestPasskeyInput,
          onClose: cq
        }), (0, uq.jsx)(al, {
          togglePointerLock: !0,
          show: "petUi" === Eq,
          onOpen: Aq.current.petUi,
          onClose: cq
        })]
      })
    }))
  },
  36545: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Om
    });
    gq(36549);
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(3580),
      xq = gq(1416),
      Aq = gq(1876),
      cq = gq(1070);

    function uq() {
      const qq = 2e3,
        [Eq, gq] = (0, Yq.useState)(null),
        [lq, uq] = (0, Yq.useState)(null),
        Bq = (0, Yq.useRef)(null);
      (0, xq.f)("showBottomMessage", (Eq => {
        let {
          message: gq,
          timeoutLength: Yq = qq,
          type: lq
        } = Eq;
        uq({
          message: gq,
          type: lq
        }), clearTimeout(Bq.current), Bq.current = setTimeout((() => {
          uq(null)
        }), Yq)
      })), (0, xq.f)("showPermanentBottomMessage", (qq => {
        gq(qq)
      })), (0, Yq.useEffect)((() => ((0, mq.d)((() => {
        gq(null)
      })), () => {
        clearTimeout(Bq.current)
      })), []);
      const Wq = lq || Eq;
      return Wq ? (0, cq.jsx)("div", {
        className: Oq()("BottomScreenMessage", Wq.type),
        children: (0, cq.jsx)(Aq.c, {
          text: Wq.message
        })
      }) : null
    }
    var Bq = gq(2325),
      Wq = gq(1904),
      Nq = gq(1498),
      aq = gq(2386);

    function Vq() {
      let qq;
      const Eq = () => {
          clearTimeout(qq), qq = setTimeout((() => {
            Wq.gameBridge.latest("connectedGame").replay || (Wq.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Nq.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        gq = () => {
          clearTimeout(qq)
        };
      return window.addEventListener("focus", gq), window.addEventListener("blur", Eq), () => {
        window.removeEventListener("blur", Eq), window.removeEventListener("focus", gq), clearTimeout(qq)
      }
    }
    var dq = gq(1101),
      jq = gq(3018),
      Hq = gq(296),
      oq = gq(2383),
      Pq = gq(31),
      Qq = gq(1926),
      yq = gq(38),
      tq = gq(1942),
      rq = gq(24),
      vq = gq(1945),
      hq = gq(1367),
      nq = gq(8800),
      bq = gq(1980),
      iq = gq(1183);
    const Zq = (0, Yq.memo)((function() {
      const {
        isTouchScreen: qq,
        loadingOverlayVisible: Eq,
        openInGameMenuName: gq,
        openEverythingMenuName: lq
      } = (0, rq.j)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), mq = (0, hq.q)();
      (0, jq.b)();
      const xq = (0, oq.h)("showBasicMovementControls"),
        [Aq, uq] = (0, Yq.useState)("movement"),
        Bq = "movement" === Aq,
        Wq = mq && !1 !== xq;
      (0, Yq.useEffect)((() => {
        "padActions" !== Aq || Wq || uq("done")
      }), [Aq, Wq]);
      const Nq = Eq || null !== gq || null !== lq,
        aq = (0, Yq.useRef)({
          step: Aq,
          ms: 0
        });
      return (0, Yq.useEffect)((() => {
        if (Nq || "done" === Aq) return;
        aq.current.step !== Aq && (aq.current = {
          step: Aq,
          ms: 0
        });
        const qq = aq.current,
          Eq = performance.now(),
          gq = setTimeout((() => {
            uq("movement" === Aq && (0, hq.c)() ? "padActions" : "done")
          }), 7e3 - qq.ms);
        return () => {
          clearTimeout(gq), qq.ms += performance.now() - Eq
        }
      }), [Nq, Aq]), yq.i.getItem(Hq.Fb) > 2 ? (0, cq.jsx)(zq, {
        showingMovementControls: !1
      }) : (0, cq.jsxs)(cq.Fragment, {
        children: [qq && !mq || !Bq || !1 === xq ? null : (0, cq.jsxs)("div", {
          className: Oq()("ControlsTutorialDiv", {
            Covered: Nq
          }),
          children: [(0, cq.jsx)(fq, {}), (0, cq.jsx)(Tq, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, cq.jsx)(Tq, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Aq && Wq && (0, cq.jsx)(Mq, {
          covered: Nq
        }), (0, cq.jsx)(zq, {
          showingMovementControls: "done" !== Aq
        })]
      })
    }));

    function fq() {
      const qq = (0, hq.q)();
      return (0, cq.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, cq.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), qq && (0, cq.jsx)(vq.c, {
          noaAction: "forward"
        }), !qq && (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, cq.jsx)(vq.c, {
              noaAction: "forward"
            })
          }), (0, cq.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, cq.jsx)(vq.c, {
              noaAction: "left"
            }), (0, cq.jsx)(vq.c, {
              noaAction: "backward"
            }), (0, cq.jsx)(vq.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Mq(qq) {
      let {
        covered: Eq
      } = qq;
      const {
        t: gq
      } = (0, iq.v)(), Yq = (0, oq.h)("useInventory");
      return (0, cq.jsxs)("div", {
        className: Oq()("ControlsTutorialDiv", {
          Covered: Eq
        }),
        children: [(0, cq.jsx)(Tq, {
          header: gq("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, cq.jsx)(Tq, {
          header: gq("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Yq && (0, cq.jsx)(Tq, {
          header: gq("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, cq.jsx)(Tq, {
          header: gq("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Tq(qq) {
      let {
        header: Eq,
        noaAction: gq
      } = qq;
      return (0, cq.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, cq.jsx)("div", {
          className: "KeyHeader",
          children: Eq
        }), (0, cq.jsx)(vq.c, {
          noaAction: gq
        })]
      })
    }

    function zq(qq) {
      let {
        showingMovementControls: Eq
      } = qq;
      const {
        isTouchScreen: gq
      } = (0, rq.j)(["isTouchScreen"]), lq = (0, hq.q)(), Oq = (0, bq.e)("OpenShop"), [mq, xq] = (0, Yq.useState)(!1), Aq = `SeenShopControls|${(0,tq.f)("connectedGame",(qq=>qq.gameNameWithVariation))}`, uq = () => (!(0, hq.c)() || null !== (0, nq.e)("OpenShop")) && !yq.i.getItem(Aq) && Qq.c.get("shopInfo") && !Eq, Bq = () => (xq(!0), yq.i.setItem(Aq, !0), (0, hq.c)() || Pq.i.TV("showShopTouchTutorial"), setTimeout((() => {
        xq(!1)
      }), 7e3));
      (0, Yq.useEffect)((() => {
        let qq;
        const Eq = Pq.i.subscribe("showShopTutorial", (() => {
          uq() && (qq = Bq())
        }));
        return () => {
          clearTimeout(qq), Pq.i.unsubscribe(Eq)
        }
      }), [Eq]);
      const Wq = (0, Yq.useRef)();
      return (0, oq.g)("currencyAmounts", (qq => {
        if (uq()) {
          let gq = !1;
          const Yq = Qq.c.get("shopInfo");
          for (const lq in Yq) {
            for (const Oq in Yq[lq].items) {
              var Eq;
              const mq = Yq[lq].items[Oq];
              if (void 0 !== mq.currency && qq[mq.currency] && mq.cost <= qq[mq.currency].amount && (null === (Eq = mq.hidden) || void 0 === Eq || !Eq)) {
                gq = !0;
                break
              }
            }
            if (gq) break
          }
          gq && (Wq.current = Bq())
        }
      })), (0, Yq.useEffect)((() => () => {
        clearTimeout(Wq.current)
      }), [Eq]), !mq || lq && !Oq ? null : (0, cq.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: gq && !lq ? null : (0, cq.jsx)(Tq, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Sq = gq(1341),
      pq = gq(1025);
    const Gq = (0, Yq.memo)((function() {
      return (0, jq.b)(), (0, cq.jsx)(Lq, {})
    }));
    class Lq extends Yq.Component {
      constructor(qq) {
        super(qq), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = Pq.i.subscribe("TopRightHelper", (qq => {
          this.showQueue.push(qq), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        Pq.i.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(qq, Eq) {
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
        let qq, Eq, gq, Yq, lq, Oq = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, qq = "slideIn") : "slideOut" === this.state.currState ? qq = "slideOut" : null === this.currMessage && (Oq = !1), this.currMessage) {
          const Oq = this.currMessage.color || "rgb(102, 102, 102)";
          Eq = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === qq ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, gq = {
            backgroundColor: Oq
          }, Yq = {
            animation: "2s " + ("slideOut" === qq ? "CloseNotification" : "ExpandNotification")
          }, lq = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === qq ? "textDisappear" : "textAppear")
          }
        }
        return Oq ? (0, cq.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...Eq
          },
          children: [(0, cq.jsx)("div", {
            className: "LeftSide",
            style: gq,
            children: (0, cq.jsx)(pq.d, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, cq.jsx)("div", {
            className: "RightSide",
            style: Yq,
            children: (0, cq.jsx)("div", {
              className: "HelperText",
              style: lq,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Jq = gq(36555),
      kq = gq(1380);
    const Rq = (0, kq.h)((qq => qq.PadSneakChip));

    function Uq(qq) {
      const [Eq, gq, Yq] = function(qq) {
        const Eq = parseInt(qq.substring(1), 16),
          gq = (Eq >> 16) / 255,
          Yq = (Eq >> 8 & 255) / 255,
          lq = (255 & Eq) / 255,
          Oq = Math.max(gq, Yq, lq),
          mq = Math.min(gq, Yq, lq),
          xq = (Oq + mq) / 2,
          Aq = Oq - mq;
        if (0 === Aq) return [0, 0, xq];
        const cq = Aq / (1 - Math.abs(2 * xq - 1));
        let uq;
        uq = Oq === gq ? (Yq - lq) / Aq % 6 : Oq === Yq ? (lq - gq) / Aq + 2 : (gq - Yq) / Aq + 4;
        return [(60 * uq + 360) % 360, cq, xq]
      }(qq), lq = 0 === gq ? 0 : Math.min(.6, gq + .03), Oq = Yq > .5 ? -1 : 1, mq = Fq(Yq + .09 * Oq);
      return {
        panel: qq,
        slot: sq(Eq, lq, mq),
        slotSelected: sq(Eq, lq, Fq(mq + .2 * Oq)),
        slotUnavailable: sq(Eq, lq, Fq(Yq + -.1 * Oq))
      }
    }

    function Fq(qq) {
      return Math.min(1, Math.max(0, qq))
    }

    function sq(qq, Eq, gq) {
      const Yq = (1 - Math.abs(2 * gq - 1)) * Eq,
        lq = Yq * (1 - Math.abs(qq / 60 % 2 - 1)),
        Oq = gq - Yq / 2;
      let mq;
      return mq = qq < 60 ? [Yq, lq, 0] : qq < 120 ? [lq, Yq, 0] : qq < 180 ? [0, Yq, lq] : qq < 240 ? [0, lq, Yq] : qq < 300 ? [lq, 0, Yq] : [Yq, 0, lq], "#" + mq.map((qq => function(qq) {
        return Math.round(255 * qq).toString(16).padStart(2, "0")
      }(qq + Oq))).join("")
    }
    var Xq = gq(36584),
      wq = gq(4135),
      Kq = gq(2357),
      Cq = gq(2364),
      Iq = gq(36644),
      eq = gq(4637),
      Dq = gq(1440),
      qE = gq(598);

    function EE(qq, Eq, gq, Yq) {
      qq.style.display = "";
      const lq = qq.offsetWidth,
        Oq = qq.offsetHeight,
        mq = Math.min(Math.max((Eq.left + Eq.right) / 2 - lq / 2, 8), window.innerWidth - 8 - lq);
      let xq = Eq.top - gq - Oq;
      const Aq = [...Yq].sort(((qq, Eq) => Eq.top - qq.top));
      for (const cq of Aq) mq < cq.right && mq + lq > cq.left && xq < cq.bottom && xq + Oq > cq.top && (xq = cq.top - 8 - Oq);
      return xq < 8 ? (qq.style.display = "none", null) : (qq.style.transform = `translate(${mq-Eq.left}px, ${xq-Eq.top}px)`, {
        left: mq,
        top: xq,
        right: mq + lq,
        bottom: xq + Oq
      })
    }

    function gE(qq) {
      const Eq = [];
      for (const gq of document.querySelectorAll(qq)) {
        const qq = gq.getBoundingClientRect();
        qq.width > 0 && "visible" === getComputedStyle(gq).visibility && Eq.push(qq)
      }
      return Eq
    }

    function YE(qq, Eq) {
      return qq.clientX >= Eq.left - 8 && qq.clientX <= Eq.right + 8 && qq.clientY >= Eq.top - 8 && qq.clientY <= Eq.bottom + 8
    }
    var lE = gq(8846);
    class OE {
      constructor(qq) {
        this.deps = qq, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(qq) {
        qq && "armed" === this.phase ? this.setPhase("ready") : qq || "ready" !== this.phase || this.setPhase("armed")
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
      hold(qq, Eq) {
        this.suspended || (this.offered ? Eq || this.setPhase("idle") : qq && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : qq || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(qq) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const Eq = this.phase;
        this.phase = qq, this.deps.onPhase(qq, Eq)
      }
    }
    const mE = 25 * Math.PI / 180,
      xE = 45 * Math.PI / 180;
    class AE extends OE {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(qq, Eq, gq) {
        this.speed = gq;
        const Yq = Math.hypot(qq, Eq),
          lq = Yq > 0 ? Math.acos(Math.min(1, -Eq / Yq)) : Math.PI;
        this.hold(Yq >= .8 && lq <= mE, Yq >= .5 && lq <= xE)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var cE = gq(1274);

    function uE(qq, Eq) {
      const gq = (0, Yq.useRef)(null),
        lq = (0, Yq.useRef)(Eq);
      return lq.current = Eq, (0, Yq.useEffect)((() => {
        if (!qq) return;
        const {
          create: Eq,
          elementRef: Yq,
          ringRef: Oq,
          classPrefix: mq,
          keptBehindMovementPanels: xq,
          resizeEnds: Aq
        } = lq.current, cq = {
          charging: `${mq}Charging`,
          armed: `${mq}Armed`,
          ready: `${mq}Ready`,
          locked: `${mq}Locked`
        };
        let uq = null;
        const Bq = Eq({
          onPhase: (qq, Eq) => {
            const gq = Yq.current;
            if (null !== gq) {
              for (const [Eq, Yq] of Object.entries(cq)) gq.classList.toggle(Yq, Eq === qq);
              if ("charging" === qq) uq = Oq.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === qq) {
                var mq;
                null === (mq = uq) || void 0 === mq || mq.cancel(), uq = null
              }
              var xq, Aq;
              if ("armed" === qq && "charging" === Eq && lq.current.onArmed(), "ready" === qq && lE.e.play("lockReady"), "locked" === qq) lE.e.play("lockLocked"), null === (xq = (Aq = lq.current).onLocked) || void 0 === xq || xq.call(Aq);
              "locked" === Eq && lq.current.onUnlocked()
            }
          }
        });
        gq.current = Bq;
        const Wq = () => {
            Bq.suspend()
          },
          Nq = () => {
            "hidden" === document.visibilityState && Wq()
          },
          aq = () => {
            Aq ? Bq.suspend() : Bq.suspendArming()
          },
          Vq = (0, cE.h)((qq => {
            let {
              keepsMovement: Eq
            } = qq;
            Eq && xq ? Bq.suspendArming() : Wq()
          }));
        return document.addEventListener("visibilitychange", Nq), window.addEventListener("blur", Wq), window.addEventListener("resize", aq), () => {
          Vq(), document.removeEventListener("visibilitychange", Nq), window.removeEventListener("blur", Wq), window.removeEventListener("resize", aq), Bq.cancel(), gq.current = null
        }
      }), [qq]), (0, tq.d)("localPlayerAliveSet", (() => {
        var qq;
        null === (qq = gq.current) || void 0 === qq || qq.suspend()
      })), gq
    }
    var BE = gq(2418),
      WE = gq(2433),
      NE = gq(1086),
      aE = gq(3273),
      VE = gq(2437);

    function dE(qq, Eq, gq) {
      const Yq = function(qq, Eq, gq) {
        const Yq = gq.map((gq => ({
            left: Math.max(0, gq.left),
            top: Math.max(0, gq.top),
            right: Math.min(qq, gq.right),
            bottom: Math.min(Eq, gq.bottom)
          }))).filter((qq => qq.right > qq.left && qq.bottom > qq.top)),
          lq = [...new Set([0, Eq, ...Yq.flatMap((qq => [qq.top, qq.bottom]))])].sort(((qq, Eq) => qq - Eq)),
          Oq = [];
        for (let mq = 0; mq < lq.length - 1; mq++) {
          const Eq = lq[mq],
            gq = lq[mq + 1],
            xq = Yq.filter((qq => qq.top <= Eq && qq.bottom >= gq)).map((qq => [qq.left, qq.right])).sort(((qq, Eq) => qq[0] - Eq[0]));
          let Aq = 0;
          for (const [qq, Yq] of xq) qq > Aq && Oq.push({
            left: Aq,
            top: Eq,
            right: qq,
            bottom: gq
          }), Aq = Math.max(Aq, Yq);
          Aq < qq && Oq.push({
            left: Aq,
            top: Eq,
            right: qq,
            bottom: gq
          })
        }
        return Oq
      }(qq, Eq, gq);
      if (0 === Yq.length) return 'path("M0 0Z")';
      if (1 === Yq.length && 0 === Yq[0].left && 0 === Yq[0].top && Yq[0].right === qq && Yq[0].bottom === Eq) return "";
      const lq = qq => Math.round(10 * qq) / 10;
      return `path("${Yq.map((qq=>`M${lq(qq.left)} ${lq(qq.top)}H${lq(qq.right)}V${lq(qq.bottom)}H${lq(qq.left)}Z`)).join("")}")`
    }

    function jE(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const lq = [],
        Oq = 2 * gq / Yq;
      for (let mq = 0; mq < Yq; mq++) {
        const Yq = Eq - gq + mq * Oq,
          xq = Yq + Oq,
          Aq = Math.min(Math.max(Eq, Yq), xq) - Eq,
          cq = Math.sqrt(Math.max(0, gq * gq - Aq * Aq));
        lq.push({
          left: qq - cq,
          top: Yq,
          right: qq + cq,
          bottom: xq
        })
      }
      return lq
    }
    var HE = gq(8850),
      oE = gq(36619);

    function PE(qq) {
      const Eq = qq.getBoundingClientRect(),
        gq = {
          left: Eq.left,
          top: Eq.top,
          right: Eq.right,
          bottom: Eq.bottom
        },
        Yq = (0, Iq.g)(qq);
      if (Yq.whole) return [gq];
      const lq = function(qq) {
          const Eq = qq.right - qq.left,
            gq = qq.bottom - qq.top,
            Yq = Math.min(Eq, gq) / 2,
            lq = (qq.left + qq.right) / 2,
            Oq = (qq.top + qq.bottom) / 2;
          return Eq >= gq ? [{
            left: qq.left + Yq,
            top: qq.top,
            right: qq.right - Yq,
            bottom: qq.bottom
          }, ...jE(qq.left + Yq, Oq, Yq), ...jE(qq.right - Yq, Oq, Yq)] : [{
            left: qq.left,
            top: qq.top + Yq,
            right: qq.right,
            bottom: qq.bottom - Yq
          }, ...jE(lq, qq.top + Yq, Yq), ...jE(lq, qq.bottom - Yq, Yq)]
        }(gq),
        Oq = Yq.keyBox;
      if (Oq) {
        const qq = (gq.left + gq.right) / 2,
          Eq = (gq.top + gq.bottom) / 2;
        lq.push({
          left: qq - Oq.width / 2,
          top: Eq - Oq.height / 2,
          right: qq + Oq.width / 2,
          bottom: Eq + Oq.height / 2
        })
      }
      return lq
    }

    function QE(qq) {
      const Eq = qq.getBoundingClientRect();
      return 0 === Eq.width && 0 === Eq.height || "visible" !== getComputedStyle(qq).visibility ? [] : [(0, HE.m)(Eq, 44)]
    }

    function yE(qq, Eq) {
      (0, Yq.useEffect)((() => {
        const gq = qq.current;
        if (!Eq || !gq) return;
        const Yq = () => {
          const qq = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            Eq = qq.find((qq => qq.classList.contains("TouchInteractHit")));
          Eq !== lq && (lq && Oq.unobserve(lq), lq = Eq, Eq && Oq.observe(Eq));
          const Yq = Array.from(document.querySelectorAll(VE.c)),
            mq = [...qq.flatMap((qq => PE(qq))), ...Yq.flatMap(QE)],
            xq = function(qq, Eq) {
              const gq = Eq.map((Eq => ({
                left: Eq.left - qq.left,
                top: Eq.top - qq.top,
                right: Eq.right - qq.left,
                bottom: Eq.bottom - qq.top
              })));
              return dE(Math.ceil(qq.width), Math.ceil(qq.height), gq)
            }(gq.getBoundingClientRect(), mq);
          gq.style.clipPath !== xq && (gq.style.clipPath = xq)
        };
        let lq;
        const Oq = new ResizeObserver((() => {
          Yq()
        }));
        Yq(), Oq.observe(gq);
        const mq = gq.closest(".InGameUi"),
          xq = new MutationObserver(Yq);
        mq && xq.observe(mq, {
          attributes: !0,
          attributeFilter: ["class", oE.f]
        });
        const Aq = [(0, Pq.k)(aE.e, Yq), (0, Pq.k)(VE.m, Yq), (0, Pq.k)(VE.d, Yq)];
        return () => {
          Oq.disconnect(), xq.disconnect();
          for (const qq of Aq) qq();
          gq.style.clipPath = ""
        }
      }), [qq, Eq])
    }
    var tE = gq(4233);

    function rE(qq) {
      var Eq;
      let {
        onMove: gq,
        mode: lq,
        speedCurve: Oq,
        autorun: mq = !1
      } = qq;
      const xq = (0, Yq.useRef)(null),
        Aq = (0, Yq.useRef)(null),
        uq = (0, Yq.useRef)(null),
        Bq = (0, Yq.useRef)(null),
        Nq = (0, Yq.useRef)(null),
        aq = (0, Yq.useRef)(null),
        Vq = (0, Yq.useRef)(null),
        dq = (0, Yq.useRef)(null),
        jq = (0, Yq.useRef)(null),
        Hq = (0, Yq.useRef)(!1),
        oq = (0, Yq.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: Pq
        } = (0, iq.v)(),
        Qq = (0, tE.o)(lq),
        yq = (0, rq.j)(["notchSize"]).notchSize,
        tq = yq.left,
        vq = (0, Yq.useRef)(16),
        hq = (0, WE.e)(),
        [nq, bq, Zq] = "pinned" === lq ? BE.q : null !== (Eq = hq.hudElements.joystick) && void 0 !== Eq ? Eq : BE.q,
        fq = "pinned" === lq ? null : hq.hudSafe,
        Mq = Math.max(tE.k, tE.m * Zq);
      yE(Aq, "pinned" !== lq);
      const Tq = function(qq, Eq, gq, lq, Oq) {
        const mq = (0, Yq.useRef)(null),
          xq = () => {
            clearInterval(mq.current), mq.current = null
          },
          Aq = uE(qq, {
            create: qq => new AE(qq),
            elementRef: Eq,
            ringRef: gq,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Oq,
            onLocked: () => {
              mq.current = setInterval((() => {
                Wq.gameBridge.lookup("dropAhead", null) && (lE.e.play("autorunLedgeStop"), Aq.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              xq(), lq()
            }
          });
        return (0, Yq.useEffect)((() => xq), []), Aq
      }(mq, uq, Vq, (() => {
        Rq(), kq()
      }), (() => {
        zq(), null === jq.current && Tq.current.suspend()
      }));

      function zq() {
        const qq = uq.current.getBoundingClientRect();
        jq.current = EE(dq.current, qq, 80, gE(`.TouchInventoryKey, ${VE.c}`)), Hq.current = null !== jq.current && YE(oq.current, jq.current)
      }

      function Sq() {
        const {
          innerWidth: qq,
          innerHeight: Eq
        } = window, gq = (0, VE.y)(fq, qq, Eq, (0, VE.C)(yq, qq, Eq), vq.current);
        return {
          left: gq[3],
          bottom: gq[2]
        }
      }

      function Gq(qq) {
        uq.current.style.transform = `translate(${qq.x-Mq}px, ${qq.y-Mq}px)`
      }

      function Lq(qq) {
        const Eq = uq.current;
        Eq.classList.add("Resting"), Eq.classList.toggle("Returning", qq), Eq.style.display = "fixed_hidden" === lq ? "none" : "block", Gq(function() {
          const {
            innerWidth: qq,
            innerHeight: Eq
          } = window, gq = Sq(), Yq = tq * qq / 100 + gq.left, lq = xq.current.offsetHeight || Eq, Oq = ((0, NE.e)(qq, Eq) ? tE.g : tE.d) + gq.bottom;
          return {
            x: Math.min(qq - Mq, Math.max(Mq, Yq + tE.j + nq * qq)),
            y: Math.min(lq - Mq, Math.max(Mq, lq - Oq + bq * lq))
          }
        }())
      }
      const Jq = (0, Yq.useRef)({
        restFixed: Lq,
        release: Uq
      });

      function kq() {
        Qq ? Lq("fixed_shown" === lq) : "floating" === lq && (uq.current.style.display = "none"), gq({
          x: 0,
          y: 0
        })
      }

      function Rq() {
        aq.current = null, Nq.current = null, Bq.current.style.transform = "translate(-50%, -50%)"
      }

      function Uq(qq) {
        Rq();
        const Eq = Tq.current;
        qq && null !== Eq && void 0 !== Eq && Eq.lift() ? gq({
          x: 0,
          y: -Eq.lockedSpeed
        }) : (null === Eq || void 0 === Eq || Eq.cancel(), kq())
      }

      function Fq(qq) {
        const Eq = Array.from(qq.touches).find((qq => qq.identifier === aq.current));
        if (null === Nq.current || null === aq.current || (0, qE.H)(Eq)) return;
        const Yq = Tq.current,
          lq = Eq.clientX - Nq.current.x,
          mq = Eq.clientY - Nq.current.y,
          xq = Math.hypot(lq, mq),
          Aq = xq > 0 ? Math.min(1, Mq / xq) : 0,
          cq = lq * Aq,
          uq = mq * Aq,
          Wq = Math.hypot(cq, uq) / Mq,
          Vq = Oq && Wq > 0 ? Oq(Wq) / Wq : 1;
        Bq.current.style.transform = `translate(calc(-50% + ${cq}px), calc(-50% + ${uq}px))`;
        const dq = cq / Mq,
          Pq = uq / Mq;
        if (gq({
            x: dq * Vq,
            y: Pq * Vq
          }), null !== Yq && null !== jq.current) {
          Yq.move(dq, Pq, Wq * Vq), oq.current = {
            clientX: Eq.clientX,
            clientY: Eq.clientY
          };
          const qq = Hq.current;
          Hq.current = YE(Eq, jq.current), Hq.current !== qq && Yq.target(Hq.current)
        }
      }
      return Jq.current = {
        restFixed: Lq,
        release: Uq
      }, (0, Yq.useLayoutEffect)((() => {
        if (!Qq) return;
        const qq = () => {
          vq.current = (0, VE.H)(document)
        };
        qq(), null === aq.current && Jq.current.restFixed(!1);
        const Eq = new ResizeObserver((() => {
          qq(), null === aq.current && Jq.current.restFixed(!1)
        }));
        Eq.observe(xq.current);
        const gq = uq.current;
        return () => {
          Eq.disconnect(), gq.classList.remove("Resting", "Returning"), null === aq.current && (gq.style.display = "", gq.style.transform = "")
        }
      }), [Qq, lq, yq, nq, bq, Mq, fq]), (0, Yq.useEffect)((() => {
        const qq = qq => {
            const Eq = aq.current;
            null === Eq || Array.from(qq.touches).some((qq => qq.identifier === Eq)) || Jq.current.release("touchend" === qq.type && Array.from(qq.changedTouches).some((qq => qq.identifier === Eq)))
          },
          Eq = () => {
            null !== aq.current && Jq.current.release(!1)
          },
          gq = () => {
            "hidden" === document.visibilityState && Eq()
          };
        document.addEventListener("touchstart", qq, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", qq, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", qq, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", qq, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", Eq), document.addEventListener("visibilitychange", gq);
        const Yq = (0, cE.h)((qq => {
          let {
            keepsMovement: gq
          } = qq;
          gq || Eq()
        }));
        return () => {
          Yq(), document.removeEventListener("touchstart", qq, {
            capture: !0
          }), document.removeEventListener("touchmove", qq, {
            capture: !0
          }), document.removeEventListener("touchend", qq, {
            capture: !0
          }), document.removeEventListener("touchcancel", qq, {
            capture: !0
          }), window.removeEventListener("blur", Eq), document.removeEventListener("visibilitychange", gq)
        }
      }), []), (0, Yq.useEffect)((() => {
        const qq = xq.current,
          Eq = qq => {
            qq.preventDefault()
          };
        return qq.addEventListener("touchstart", Eq, {
          passive: !1
        }), () => {
          qq.removeEventListener("touchstart", Eq)
        }
      }), []), (0, cq.jsxs)("div", {
        ref: xq,
        className: "JoystickZone",
        style: Qq && (nq > 0 || Zq > 1 || Sq().left > 0) ? {
          width: `max(35vw, calc(${tq+100*nq}vw + ${Sq().left+tE.j+Mq+24}px))`
        } : void 0,
        onTouchStart: function(qq) {
          var Eq;
          if (null !== aq.current) return;
          const gq = Array.from(qq.changedTouches).find((qq => {
            var Eq;
            return null === (Eq = xq.current) || void 0 === Eq ? void 0 : Eq.contains(qq.target)
          }));
          if (gq) {
            if (null === (Eq = Tq.current) || void 0 === Eq || Eq.startTouch(), aq.current = gq.identifier, "pinned" === lq) {
              const qq = uq.current.getBoundingClientRect();
              Nq.current = {
                x: qq.left + qq.width / 2,
                y: qq.top + qq.height / 2
              }
            } else {
              Nq.current = {
                x: gq.clientX,
                y: gq.clientY
              }, uq.current.classList.remove("Resting", "Returning"), uq.current.style.display = "block";
              const qq = xq.current.getBoundingClientRect();
              Gq({
                x: gq.clientX - qq.left,
                y: gq.clientY - qq.top
              }), mq && (oq.current = {
                clientX: gq.clientX,
                clientY: gq.clientY
              }, zq())
            }
            Fq(qq)
          }
        },
        onTouchMove: Fq,
        children: [(0, cq.jsx)("div", {
          ref: Aq,
          className: "JoystickTouchLayer"
        }), (0, cq.jsxs)("div", {
          ref: uq,
          className: "Joystick",
          style: {
            width: 2 * Mq + "px",
            height: 2 * Mq + "px",
            transform: "pinned" === lq ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, cq.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * Mq + "px",
              height: 2 * Mq + "px"
            }
          }), mq && (0, cq.jsxs)(cq.Fragment, {
            children: [(0, cq.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, cq.jsx)("circle", {
                ref: Vq,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, cq.jsxs)("div", {
              ref: dq,
              className: "AutorunTarget",
              children: [(0, cq.jsx)(pq.d, {
                name: "lock"
              }), Pq("settingsMenu:autoRun")]
            })]
          }), (0, cq.jsx)("div", {
            ref: Bq,
            className: "JoystickKnob",
            style: {
              width: `${Mq}px`,
              height: `${Mq}px`
            }
          })]
        })]
      })
    }
    const vE = .35,
      hE = .22;

    function nE(qq) {
      if (qq < .1) return 0;
      if (qq < vE) {
        const Eq = (qq - .1) / (vE - .1);
        return .06 + .16 * Eq * Eq
      }
      return qq < .85 ? hE + .78 * (qq - vE) / .5 : 1
    }

    function bE(qq, Eq) {
      const gq = (0, Yq.useRef)(null);
      return (0, Yq.useLayoutEffect)((() => (Iq.k.set(qq, gq.current, Eq), () => {
        Iq.k.set(qq, null)
      })), [qq, Eq]), gq
    }
    const iE = "C",
      ZE = "J",
      fE = "U",
      ME = "P",
      TE = "A",
      zE = "G",
      SE = "X",
      pE = (0, Yq.forwardRef)((function(qq, Eq) {
        let {
          slot: gq,
          canvasZone: lq = !1,
          lit: mq = !1,
          label: xq,
          className: Aq,
          children: uq,
          ...Bq
        } = qq;
        return (0, Yq.useEffect)((() => (Pq.i.TV(aE.e), () => {
          Pq.i.TV(aE.e)
        })), []), (0, cq.jsx)("div", {
          ref: Eq,
          className: Oq()("TouchKeyHit", `TouchSlot${gq}`, Aq, {
            CanvasZone: lq
          }),
          ...Bq,
          children: (0, cq.jsxs)("div", {
            className: Oq()("TouchKey", {
              Lit: mq,
              Labelled: void 0 !== xq
            }),
            children: [uq, void 0 !== xq && (0, cq.jsx)("span", {
              className: "TouchKeyLabel",
              children: xq
            })]
          })
        })
      }));

    function GE(qq, Eq) {
      (0, Yq.useEffect)((() => () => {
        Eq.current && (Eq.current = !1, (0, Cq.y)(qq, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function LE(qq, Eq) {
      const gq = Eq ? [SE] : [ME, SE];
      return qq.filter((qq => null !== qq)).slice(0, gq.length).map(((qq, Eq) => {
        const lq = gq[Eq];
        return (0, cq.jsx)(Yq.Fragment, {
          children: qq.render(lq)
        }, `${qq.id}:${lq}`)
      }))
    }
    var JE = gq(36635);
    class kE extends OE {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(qq, Eq) {
        this.start = {
          x: qq,
          y: Eq
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(qq, Eq, gq) {
        const Yq = Math.hypot(qq - this.start.x, Eq - this.start.y) <= 12;
        this.moved ||= !Yq;
        const lq = null !== gq && Eq < this.start.y - 12 && YE({
          clientX: qq,
          clientY: Eq
        }, gq);
        this.hold(!this.moved, Yq || lq)
      }
    }
    const RE = new Set;

    function UE(qq) {
      const Eq = new Set(Array.from(qq.touches, (qq => qq.identifier)));
      for (const gq of RE) {
        for (const qq of gq.ids) Eq.has(qq) || gq.ids.delete(qq);
        if (0 === gq.ids.size) {
          RE.delete(gq);
          gq.pressesOnPointerDown && "touchstart" === qq.type && Array.from(qq.changedTouches).some((qq => qq.target instanceof Node && gq.element.contains(qq.target))) || gq.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const Vm of ["touchstart", "touchmove"]) window.addEventListener(Vm, UE, {
        capture: !0,
        passive: !0
      });

    function FE(qq) {
      let {
        pressesOnPointerDown: Eq = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gq = (0, Yq.useRef)(qq);
      gq.current = qq;
      const lq = (0, Yq.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: Eq,
        release: () => {
          gq.current()
        }
      });
      (0, Yq.useEffect)((() => {
        const qq = lq.current;
        return () => {
          RE.delete(qq), qq.ids.clear()
        }
      }), []);
      const Oq = qq => {
        const Eq = lq.current;
        for (const gq of Array.from(qq.changedTouches)) Eq.ids.delete(gq.identifier);
        0 === Eq.ids.size && RE.delete(Eq)
      };
      return {
        onTouchStart: qq => {
          const Eq = lq.current;
          Eq.element = qq.currentTarget;
          for (const gq of Array.from(qq.changedTouches)) gq.target instanceof Node && qq.currentTarget.contains(gq.target) && Eq.ids.add(gq.identifier);
          Eq.ids.size > 0 && RE.add(Eq)
        },
        onTouchEnd: Oq,
        onTouchCancel: Oq
      }
    }

    function sE(qq, Eq) {
      return null === Eq ? null : (0, JE.c)(qq.nativeEvent.changedTouches, Eq.id)
    }

    function XE(qq) {
      let {
        lockable: Eq
      } = qq;
      const {
        t: gq
      } = (0, iq.v)(), lq = "round" === (0, BE.fb)().hudShape, Oq = (0, Yq.useRef)(!1);
      GE(Kq.z.Jump, Oq);
      const mq = (0, Yq.useRef)(null),
        xq = (0, Yq.useRef)(null),
        Aq = (0, Yq.useRef)(null),
        uq = (0, Yq.useRef)(null),
        Bq = (0, Yq.useRef)(null),
        Wq = (0, Yq.useRef)(null),
        Nq = (0, Yq.useRef)(!1),
        aq = (qq, Eq) => {
          Oq.current = qq, (0, Cq.y)(Kq.z.Jump, qq, Eq)
        },
        Vq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Oq.current && (mq.current && (0, Dq.g)(mq.current, !1), aq(!1, qq))
        },
        dq = uE(Eq, {
          create: qq => new kE(qq),
          elementRef: mq,
          ringRef: xq,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const qq = mq.current.getBoundingClientRect(),
              Eq = Aq.current.parentElement,
              gq = Eq.getBoundingClientRect(),
              Yq = {
                left: gq.left + Eq.clientLeft,
                top: gq.top + Eq.clientTop,
                right: gq.right - Eq.clientLeft,
                bottom: gq.bottom - Eq.clientTop
              };
            if (Bq.current = EE(Aq.current, Yq, 16, gE(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${VE.c}`)), null === Bq.current) return void dq.current.suspend();
            const lq = Bq.current;
            Wq.current = {
              left: Math.min(qq.left, lq.left),
              top: lq.top,
              right: Math.max(qq.right, lq.right),
              bottom: qq.bottom
            }, Nq.current = null !== uq.current && YE({
              clientX: uq.current.x,
              clientY: uq.current.y
            }, lq)
          },
          onUnlocked: () => {
            null === uq.current && Vq()
          }
        }),
        jq = qq => {
          var Eq;
          uq.current = null, null === (Eq = dq.current) || void 0 === Eq || Eq.cancel(), Vq(qq)
        },
        Hq = FE((() => {
          jq()
        })),
        oq = qq => {
          const Eq = uq.current;
          var gq;
          return null === Eq ? null !== (gq = dq.current) && void 0 !== gq && gq.locked ? null : "lifted" : sE(qq, Eq) ? "lifted" : (0, JE.g)(qq.nativeEvent.touches, Eq.id) ? null : "dropped"
        };
      return (0, cq.jsxs)(pE, {
        ref: mq,
        slot: ZE,
        className: "JumpKey",
        onTouchStart: qq => {
          Hq.onTouchStart(qq), (0, Dq.g)(qq.currentTarget, !0), null === uq.current || (0, JE.g)(qq.nativeEvent.touches, uq.current.id) || jq();
          const Eq = qq.changedTouches[0];
          var gq;
          null === uq.current && Eq && (uq.current = {
            id: Eq.identifier,
            x: Eq.clientX,
            y: Eq.clientY
          }, null === (gq = dq.current) || void 0 === gq || gq.press(Eq.clientX, Eq.clientY));
          Oq.current || aq(!0, qq.nativeEvent)
        },
        onTouchMove: qq => {
          const Eq = uq.current,
            gq = sE(qq, Eq);
          if (!gq) return;
          const Yq = dq.current;
          if (null === Yq || void 0 === Yq || Yq.move(gq.clientX, gq.clientY, Wq.current), null !== Yq && void 0 !== Yq && Yq.offered) {
            const qq = YE(gq, Bq.current);
            qq !== Nq.current && (Nq.current = qq, Yq.target(qq))
          }
          Eq.x = gq.clientX, Eq.y = gq.clientY
        },
        onTouchEnd: qq => {
          var Eq;
          Hq.onTouchEnd(qq);
          const gq = oq(qq);
          null !== gq && ("dropped" !== gq ? (uq.current = null, null !== (Eq = dq.current) && void 0 !== Eq && Eq.lift() ? (0, Dq.g)(qq.currentTarget, !1) : Vq(qq.nativeEvent)) : jq(qq.nativeEvent))
        },
        onTouchCancel: qq => {
          Hq.onTouchCancel(qq), null !== oq(qq) && jq(qq.nativeEvent)
        },
        children: [(0, cq.jsx)(pq.d, {
          name: "arrow-up-from-line"
        }), Eq && (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, cq.jsx)(pq.d, {
              name: "lock"
            })
          }), (0, cq.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, cq.jsx)("rect", {
              ref: xq,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: lq ? 48 : 0,
              pathLength: 1
            })
          }), (0, cq.jsxs)("div", {
            ref: Aq,
            className: "JumpLockTarget",
            children: [(0, cq.jsx)(pq.d, {
              name: "lock"
            }), gq("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const wE = new WeakMap;
    class KE {
      constructor(qq) {
        this.zones = qq, this.followed = new Map, this.onStart = qq => {
          if (this.releaseMissing(qq.touches), qq.target instanceof HTMLCanvasElement)
            for (let gq = 0; gq < qq.changedTouches.length; gq++) {
              var Eq;
              const {
                identifier: Yq,
                clientX: lq,
                clientY: Oq
              } = qq.changedTouches[gq];
              this.release(Yq);
              const mq = this.zones.hitZone(lq, Oq);
              if (!mq) continue;
              const {
                key: xq
              } = mq;
              null === (Eq = wE.get(xq)) || void 0 === Eq || Eq.cancel();
              const Aq = {
                hit: mq.element,
                key: xq,
                x: mq.x,
                y: mq.y,
                reach: .6 * mq.radius
              };
              this.followed.set(Yq, Aq), (0, Dq.g)(mq.element, !0), CE(Aq, lq, Oq)
            }
        }, this.onMove = qq => {
          this.releaseMissing(qq.touches);
          for (let Eq = 0; Eq < qq.changedTouches.length; Eq++) {
            const {
              identifier: gq,
              clientX: Yq,
              clientY: lq
            } = qq.changedTouches[Eq], Oq = this.followed.get(gq);
            Oq && CE(Oq, Yq, lq)
          }
        }, this.onEnd = qq => {
          for (let Eq = 0; Eq < qq.changedTouches.length; Eq++) this.release(qq.changedTouches[Eq].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const qq = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, qq), document.addEventListener("touchmove", this.onMove, qq), document.addEventListener("touchend", this.onEnd, qq), document.addEventListener("touchcancel", this.onEnd, qq), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(qq) {
        for (const Eq of [...this.followed.keys()])(0, JE.g)(qq, Eq) || this.release(Eq)
      }
      releaseAll() {
        for (const qq of [...this.followed.keys()]) this.release(qq)
      }
      release(qq) {
        const Eq = this.followed.get(qq);
        if (!Eq) return;
        this.followed.delete(qq);
        for (const lq of this.followed.values())
          if (lq.key === Eq.key) return;
        (0, Dq.g)(Eq.hit, !1);
        const {
          key: gq
        } = Eq, Yq = gq.style.translate;
        gq.style.translate = "", Yq && wE.set(gq, gq.animate({
          translate: [Yq, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function CE(qq, Eq, gq) {
      let {
        key: Yq,
        x: lq,
        y: Oq,
        reach: mq
      } = qq;
      const xq = Eq - lq,
        Aq = gq - Oq,
        cq = Math.min(1, mq / (Math.hypot(xq, Aq) || 1));
      Yq.style.translate = `${xq*cq}px ${Aq*cq}px`
    }
    const IE = () => {
      const qq = (0, wq.o)(),
        Eq = (0, hq.q)();
      return qq || Eq
    };

    function eE(qq) {
      (0, Iq.l)(qq.x, qq.y)
    }
    const DE = (0, Yq.memo)((function() {
        const qq = IE(),
          {
            joystickMode: Eq,
            touchSpeedCurve: gq,
            autorun: lq
          } = (0, rq.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Yq.useEffect)((() => ((0, eq.k)(Kq.C.TouchControls, Kq.C.TouchControls), () => {
          (0, eq.k)(Kq.C.TouchControls, 0), (0, Iq.l)(0, 0)
        })), []), (0, cq.jsx)("div", {
          className: Oq()("TouchMovementWrapper", {
            Hidden: qq
          }),
          "data-camera-keeper": "",
          children: (0, cq.jsx)(rE, {
            onMove: eE,
            mode: Eq,
            speedCurve: gq ? nE : void 0,
            autorun: lq
          })
        })
      })),
      qg = (0, Yq.memo)((function() {
        const qq = IE(),
          {
            clientEscMenuOptions: Eq
          } = (0, rq.j)(["clientEscMenuOptions"]),
          gq = Eq.touchActionButtons;
        return (0, Yq.useEffect)((() => new KE(Iq.k).start()), []), (0, Yq.useEffect)((() => {
          Pq.i.TV(aE.e)
        }), [qq]), (0, cq.jsxs)("div", {
          className: Oq()("TouchComponentsButtons", {
            Hidden: qq
          }),
          "data-camera-keeper": "",
          children: [(0, cq.jsx)(XE, {
            lockable: Eq.jumpLock && !qq
          }), (0, cq.jsx)(Wg, {
            hidden: qq,
            actionButtons: gq
          }), (0, cq.jsx)(gg, {})]
        })
      }));

    function Eg(qq) {
      const Eq = Eq => gq => {
        (0, Dq.g)(gq.currentTarget, Eq), qq(Eq, gq.nativeEvent)
      };
      return {
        onPointerDown: Eq(!0),
        onPointerUp: Eq(!1),
        onPointerCancel: Eq(!1)
      }
    }

    function gg() {
      const qq = (0, oq.h)("canCrouch"),
        Eq = (0, tq.g)("crouching"),
        gq = (0, Yq.useRef)(!1);
      GE(Kq.z.Crouch, gq);
      const lq = (qq, Eq) => {
          gq.current = qq, (0, Cq.y)(Kq.z.Crouch, qq, Eq)
        },
        Oq = (0, Yq.useRef)(null),
        mq = () => {
          gq.current && (Oq.current && (0, Dq.g)(Oq.current, !1), lq(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        xq = FE(mq);
      return (0, Yq.useEffect)((() => {
        !1 === qq && mq()
      }), [qq]), !1 === qq ? null : (0, cq.jsx)(pE, {
        ref: Oq,
        slot: iE,
        className: "CrouchKey",
        lit: Eq,
        ...xq,
        ...Eg(lq),
        children: (0, cq.jsx)(pq.d, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Yg = [{
        icon: "arrows-rotate"
      }],
      lg = [{
        icon: "Arrow"
      }],
      Og = [{
        icon: "crosshairs"
      }],
      mg = [{
        icon: "swords"
      }],
      xg = [{
        icon: "hand-back-point-up"
      }],
      Ag = [{
        icon: "Firecracker"
      }];

    function cg(qq, Eq, gq, Yq) {
      return {
        id: JSON.stringify(Eq),
        render: lq => (0, cq.jsx)(Ng, {
          code: qq,
          slot: lq,
          icon: Eq,
          label: Yq,
          hidden: gq
        })
      }
    }

    function ug(qq, Eq) {
      return {
        id: "fly",
        render: gq => (0, cq.jsx)(Bg, {
          slot: gq,
          flying: qq,
          label: Eq
        })
      }
    }

    function Bg(qq) {
      let {
        slot: Eq,
        flying: gq,
        label: Yq
      } = qq;
      return (0, cq.jsx)(pE, {
        slot: Eq,
        className: "FlyKey",
        lit: gq,
        label: Yq,
        ...Eg(((qq, Eq) => {
          (0, Cq.y)(Kq.z.Fly, qq, Eq)
        })),
        children: (0, cq.jsx)(pq.d, {
          name: "feather-pointed"
        })
      })
    }

    function Wg(qq) {
      var Eq, gq;
      let {
        hidden: Yq,
        actionButtons: lq
      } = qq;
      const {
        t: Oq
      } = (0, iq.v)(), {
        gun: mq,
        aimable: xq,
        chargeName: Aq
      } = (0, tq.g)("heldItemAim"), uq = (0, tq.g)("gliderBoostFuel"), {
        canFly: Bq,
        flying: Wq
      } = (0, tq.g)("flight"), Nq = (0, oq.h)("touchscreenActionButton"), aq = mq ? Yg : Nq, Vq = xq ? {
        icon: lg,
        label: Oq("touchKeys:aim")
      } : null, dq = null !== Aq ? {
        icon: [{
          icon: Aq
        }]
      } : null, jq = null !== Vq && void 0 !== Vq ? Vq : dq, Hq = null !== (Eq = null === (gq = mq ? Vq : null !== dq && void 0 !== dq ? dq : Vq) || void 0 === gq ? void 0 : gq.icon) && void 0 !== Eq ? Eq : xg, Pq = [!lq && jq ? cg(Iq.d.Action2, jq.icon, Yq, jq.label) : null, mq ? cg(Iq.d.Action3, Og, Yq, Oq("touchKeys:scope")) : null, Bq ? ug(Wq, Oq("touchKeys:fly")) : null];
      return (0, cq.jsxs)(cq.Fragment, {
        children: [aq && (0, cq.jsx)(Ng, {
          code: Iq.d.Action1,
          slot: zE,
          icon: aq,
          label: mq ? Oq("touchKeys:reload") : void 0,
          hidden: Yq
        }, JSON.stringify(aq)), lq && (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)(Ng, {
            code: Iq.d.Attack,
            slot: TE,
            icon: mg,
            name: Oq("touchKeys:attack"),
            hidden: Yq
          }), (0, cq.jsx)(Ng, {
            code: Iq.d.Use,
            slot: fE,
            icon: Hq,
            name: Oq("touchKeys:use"),
            hidden: Yq
          })]
        }), LE(Pq, lq), uq > 0 && (0, cq.jsx)(Ng, {
          code: Iq.d.Boost,
          slot: SE,
          icon: Ag,
          label: Oq("touchKeys:boost", {
            fuel: uq > 99 ? "99+" : uq
          }),
          hidden: Yq
        })]
      })
    }

    function Ng(qq) {
      let {
        code: Eq,
        slot: gq,
        icon: Yq,
        label: lq,
        name: Oq,
        hidden: mq
      } = qq;
      const xq = bE(Eq, mq);
      return (0, cq.jsx)(pE, {
        ref: xq,
        slot: gq,
        className: "TouchActionKey",
        canvasZone: !0,
        label: lq,
        role: void 0 !== Oq ? "img" : void 0,
        "aria-label": Oq,
        children: (0, cq.jsx)(Aq.c, {
          text: Yq
        })
      })
    }
    var ag = gq(4111),
      Vg = gq(2907),
      dg = gq(616);
    const jg = (0, Yq.memo)((function() {
      (0, jq.b)();
      const qq = (0, Yq.useRef)([]),
        Eq = (0, Vg.c)(),
        gq = (0, Yq.useRef)(0),
        lq = (0, Yq.useRef)(0),
        Oq = (0, Yq.useRef)([]),
        mq = (0, Yq.useRef)(null);

      function uq(gq, Yq, lq, Oq) {
        const mq = (0, dg.d)(),
          xq = setTimeout((() => {
            qq.current = qq.current.filter((qq => qq.id !== mq)), Eq()
          }), Oq);
        Wq.gameBridge.send("recordFlyingMiddleText", {
          content: gq,
          hg: Yq,
          angle: lq,
          ng: Oq
        }), qq.current.push({
          id: mq,
          content: gq,
          hg: Yq,
          ng: Oq,
          removeTimeout: xq,
          angle: lq
        }), Eq()
      }
      return (0, tq.d)("shotDamageToShow", (qq => {
        let {
          damage: Eq,
          wasCrit: gq,
          distance: Yq
        } = qq;
        const lq = -Math.PI / 4 + Math.random() * Math.PI / 2;
        uq(gq ? [{
          str: Eq.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [Eq.toString()], Yq, lq, 1e3)
      })), (0, xq.f)("flyingMiddleMessage", (qq => {
        let {
          content: Eq,
          hg: Yq,
          ng: xq
        } = qq;
        Oq.current.push({
          content: Eq,
          hg: Yq,
          ng: xq
        });
        const Aq = () => {
          const {
            content: qq,
            hg: Eq,
            ng: Yq
          } = Oq.current.shift(), mq = function(qq) {
            const Eq = -Math.PI / 4,
              gq = Math.PI / 4,
              Yq = gq - Eq,
              lq = (1 + Math.sqrt(5)) / 2,
              Oq = 2 * Math.PI / (lq * lq);
            let mq = qq + Oq;
            for (; mq > gq;) mq -= Yq;
            for (; mq < Eq;) mq += Yq;
            const xq = Math.PI / 6;
            if (Math.abs(mq - qq) < xq) {
              mq = qq + (Math.sign(mq - qq) || 1) * xq, mq > gq && (mq = qq - xq), mq < Eq && (mq = qq + xq)
            }
            return mq
          }(lq.current);
          lq.current = mq, gq.current = Date.now(), uq(qq, Eq, mq, Yq)
        };
        if (!mq.current) {
          const qq = () => {
            Oq.current.length > 0 && Aq(), 0 === Oq.current.length && (clearInterval(mq.current), mq.current = null)
          };
          mq.current = setInterval(qq, 200), gq.current + 200 < Date.now() && qq()
        }
        for (; Oq.current.length > 4;) Aq()
      })), (0, xq.f)("forceFlyingMiddleMessage", (qq => {
        let {
          content: Eq,
          hg: gq,
          angle: Yq,
          ng: lq
        } = qq;
        uq(Eq, gq, Yq, lq)
      })), (0, Yq.useEffect)((() => () => {
        clearInterval(mq.current), mq.current = null;
        for (const Eq of qq.current) clearTimeout(Eq.removeTimeout)
      }), []), (0, cq.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: qq.current.map((qq => {
          const {
            id: Eq,
            content: gq,
            hg: Yq,
            ng: lq,
            angle: Oq
          } = qq;
          return qq.pos || (qq.pos = function(qq, Eq) {
            const gq = 50 / (qq ** .7 * .35);
            return {
              x: gq * Math.sin(Eq),
              y: -gq * Math.cos(Eq)
            }
          }(Yq, Oq)), (0, cq.jsx)(Hg, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: lq,
            enterActiveStyle: {
              transform: `translate(${qq.pos.x}vw, ${qq.pos.y}vh)`,
              transition: `transform ${lq}ms ease-out`
            },
            children: (0, cq.jsx)("div", {
              children: (0, cq.jsx)(Aq.c, {
                text: gq
              })
            })
          }, Eq)
        }))
      })
    }));

    function Hg(qq) {
      let {
        children: Eq,
        className: gq,
        classNames: lq,
        timeout: Oq,
        enterActiveStyle: mq
      } = qq;
      const [xq, Aq] = (0, Yq.useState)(!1), [uq, Bq] = (0, Yq.useState)(!1), Wq = (0, Yq.useRef)(null);
      return (0, Yq.useEffect)((() => {
        Aq(!0)
      }), []), (0, cq.jsx)(ag.c, {
        className: gq,
        classNames: lq || gq,
        in: xq,
        timeout: Oq,
        nodeRef: Wq,
        onEntering: () => {
          Bq(!0)
        },
        children: (0, Yq.cloneElement)(Eq, {
          ref: Wq,
          style: uq && mq || void 0
        })
      })
    }
    var og = gq(36648);

    function Pg() {
      const qq = (0, tq.g)("health");
      return (0, cq.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, cq.jsx)(og.c, {
          placement: "statBars"
        }), (0, cq.jsx)(Qg, {
          actualValue: qq.shield,
          maxValue: qq.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, cq.jsx)(Qg, {
          actualValue: qq.health,
          maxValue: qq.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Qg(qq) {
      let {
        actualValue: Eq,
        maxValue: gq,
        hideAtValue: Yq,
        icon: lq,
        className: Oq
      } = qq;
      return (0, jq.c)(), null === Eq || null === gq || Eq === Yq || gq === Yq ? null : (0, cq.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, cq.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, cq.jsx)("div", {
            className: `BottomScreenStatBar ${Oq}`,
            style: {
              transform: `scaleX(${Math.max(Eq/gq,0)})`,
              transformOrigin: "left center"
            }
          }), (0, cq.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, cq.jsx)(pq.d, {
              name: lq
            }), ` ${Math.ceil(Eq)}/${gq}`]
          })]
        })
      })
    }
    var yg = gq(9277),
      tg = gq(4359),
      rg = gq(1313),
      vg = gq(2653),
      hg = gq(1422),
      ng = gq(1298),
      bg = gq(3286),
      ig = gq(3341),
      Zg = gq(3311),
      fg = gq(729),
      Mg = gq(3358),
      Tg = gq(136),
      zg = gq(9178),
      Sg = gq(307);

    function pg(qq, Eq) {
      let {
        shownName: gq,
        lifeformType: Yq
      } = qq;
      return null !== gq ? gq : null !== Yq ? Eq(`lifeform:${(0,Sg.ue)(Yq)}`) : null
    }
    var Gg = gq(3296),
      Lg = gq(3303);
    const Jg = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      kg = (0, Yq.memo)((function() {
        var qq, Eq;
        const gq = (0, jq.b)(),
          lq = (0, Nq.useNavigatePreserveSearch)(),
          {
            t: mq
          } = (0, iq.v)(),
          {
            loadingOverlayVisible: Aq
          } = (0, rq.j)(["loadingOverlayVisible"]),
          uq = (0, hq.q)(),
          [Bq, aq] = (0, Yq.useState)(!1),
          [Vq, dq] = (0, Yq.useState)(!0),
          [Hq, Pq] = (0, Yq.useState)(null),
          yq = (0, Vg.c)(),
          vq = (0, oq.h)("respawnButtonText"),
          nq = (0, oq.h)("usePlayAgainButton"),
          bq = (0, oq.h)("useRespawnButton"),
          {
            gameNameWithVariation: Zq
          } = (0, tq.g)("connectedGame"),
          fq = (0, Yq.useRef)(Qq.c.get("secsToRespawn")),
          Mq = (0, Yq.useRef)(Wq.gameBridge.latest("localPlayerAlive")),
          Tq = (0, Yq.useRef)(Qq.c.get("secsToRespawn")),
          zq = (0, Yq.useRef)(Qq.c.get("autoRespawn")),
          Sq = (0, Yq.useRef)(null),
          Gq = (0, Yq.useRef)(0),
          Lq = (0, Yq.useRef)(0),
          [Jq, Rq] = (0, Yq.useState)(!1),
          Uq = (0, Yq.useRef)(null),
          Fq = (0, Yq.useRef)(null),
          sq = (0, Yq.useRef)(null);
        (0, oq.g)("secsToRespawn", (qq => {
          console.log("Received new secsToRespawn with", qq, "and current canRespawn value of ", zq.current), Tq.current = qq, Cq()
        })), (0, oq.g)("autoRespawn", (qq => {
          console.log("Received autorespawn", qq, "current canRespawn value of ", fq.current), zq.current = qq, Cq()
        }));
        const Xq = qq => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", qq), qq || Gq.current++, Mq.current = qq, Cq()
        };
        (0, tq.d)("localPlayerAliveSet", Xq), (0, xq.f)(ig.n, (qq => {
          "connected" === qq && !Mq.current && zq.current && fq.current <= 0 && (Lq.current = 0, Iq())
        })), (0, Yq.useEffect)((() => {
          const qq = Wq.gameBridge.latest("localPlayerAlive");
          qq === Mq.current ? (console.log("Updating respawn component from initial mount"), Cq()) : Xq(qq)
        }), []), (0, Yq.useEffect)((() => {
          if (Bq) {
            Rq(!1);
            const qq = setTimeout((() => {
              Rq(!0)
            }), 600);
            return (0, zg.h)(), () => {
              clearTimeout(qq)
            }
          }
          return () => {}
        }), [Bq]);
        (0, tq.d)("kill", (qq => {
          let {
            killer: Eq,
            victim: gq,
            withItem: Yq
          } = qq;
          if (!gq.local) return;
          const lq = ((qq, Eq) => {
            if (qq.local) {
              const qq = Jg[Eq];
              return qq ? mq(qq) : null
            }
            const gq = pg(qq, mq);
            return gq ? mq("respawnPage:killedBy", {
              name: gq
            }) : null
          })(Eq, Yq);
          lq && Pq({
            text: lq,
            deathCount: Mq.current ? Gq.current + 1 : Gq.current
          })
        }));
        const wq = () => {
            Bq && zq.current && Mq.current && Jq && aq(!1)
          },
          Kq = Bq && zq.current && Mq.current && Jq && !Aq;
        (0, xq.f)("usedKeyboard", (() => {
          wq()
        })), (0, Lg.e)("respawn", Kq, wq);
        const Cq = () => {
            dq(Tq.current >= 3 || !zq.current), Mq.current ? (clearInterval(Sq.current), Sq.current = null, zq.current ? yq() : aq(!1)) : (aq(!0), fq.current = Tq.current, yq(), console.log("Running respawn stats updated", zq.current, fq.current), zq.current && fq.current <= 0 && Iq(), clearInterval(Sq.current), fq.current > 0 && (Sq.current = setInterval((() => {
              fq.current = Math.max(fq.current - 1, 0), yq(), fq.current <= 0 && (clearInterval(Sq.current), Sq.current = null, Qq.c.get("autoRespawn") && Iq())
            }), 1e3)))
          },
          Iq = () => {
            if (Date.now() - Lq.current > 1e3) {
              const qq = () => {
                Wq.gameBridge.send("respawn", null), Lq.current = Date.now()
              };
              Qq.c.get("autoRespawn") ? qq() : (0, ng.ob)((() => {
                qq()
              }), "video_respawn")
            }
          },
          eq = (0, Yq.useMemo)((() => {
            var qq;
            return null === (qq = (0, fg.m)(Zq)) || void 0 === qq ? void 0 : qq.otherGameLinksOnRespawnPage
          }), [Zq]),
          Dq = 0 === fq.current,
          qE = (null === Hq || void 0 === Hq ? void 0 : Hq.deathCount) === Gq.current ? Hq.text : null,
          EE = Bq && Vq && !Aq,
          gE = uq && Kq && null !== (qq = null === (Eq = (0, kq.g)()) || void 0 === Eq ? void 0 : Eq.getBoundButton("menuConfirm")) && void 0 !== qq ? qq : null,
          YE = qq => Dq ? qq : mq("respawnPage:actionInSeconds", {
            action: qq,
            seconds: fq.current
          });
        return (0, cq.jsx)(yg.b, {
          showing: Bq,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, cq.jsx)(bg.d, {
            show: Bq,
            "data-holds-camera-keeper": "",
            children: (0, cq.jsxs)(tg.c, {
              close: () => {
                aq(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: zq.current || Aq ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Tg.i)() && (0, cq.jsx)(hg.d, {
                onClick: Zg.e,
                children: mq("homePage:backToGames")
              }), (0, cq.jsxs)("div", {
                className: "RespawnContainer",
                onClick: wq,
                children: [(0, cq.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, cq.jsx)("div", {
                    ref: Fq,
                    className: "RespawnSideSquareBannerDiv",
                    children: gq[0] > 925 && (0, cq.jsx)(vg.d, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: Fq
                      },
                      showing: EE,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, cq.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, cq.jsxs)("div", {
                      className: Oq()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: uq
                      }),
                      children: [zq.current && (0, cq.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, cq.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, cq.jsx)(pq.d, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), mq("respawnPage:youDied")]
                        }), (0, cq.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === gE && (Mq.current ? mq("respawnPage:pressAnywhereToContinue") : Dq ? mq("respawnPage:respawning") : YE(mq("general:respawn"))), null !== gE && (0, cq.jsx)(Gg.c, {
                            text: mq("controller:screensPressToContinue", {
                              button: Gg.e
                            }),
                            glyph: gE,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), qE && (0, cq.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: qE
                        })]
                      }), !zq.current && (0, cq.jsxs)(cq.Fragment, {
                        children: [(0, cq.jsxs)("div", {
                          className: Oq()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !eq
                          }),
                          children: [nq && (0, cq.jsx)(hg.p, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, ng.ob)((() => {
                                (0, rq.f)("inGameReplay");
                                const qq = (0, rg.e)(Zq);
                                lq(qq)
                              }), "video_start")
                            },
                            disabled: !Dq || !Jq,
                            touchPressOn: "pointerup",
                            children: YE(mq("respawnPage:playAgain"))
                          }), bq && (0, cq.jsx)(hg.g, {
                            className: "RespawnPageButton",
                            onClick: Iq,
                            padDefaultFocus: !nq,
                            padBack: "sessionBasedGame:stayInLobby" === vq,
                            disabled: !Dq || !Jq,
                            touchPressOn: "pointerup",
                            children: YE(mq(vq))
                          }), !(0, Tg.i)() && (0, cq.jsx)(hg.K, {
                            className: "RespawnPageButton",
                            onClick: Zg.e,
                            disabled: !Dq || !Jq,
                            touchPressOn: "pointerup",
                            children: YE(mq("respawnPage:exitGame"))
                          })]
                        }), eq && (0, cq.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, cq.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: mq("respawnPage:orTry")
                          }), (0, cq.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: eq.map((qq => (0, cq.jsx)(Mg.e, {
                              source: {
                                type: "game",
                                gameNameWithVariation: qq
                              },
                              disabled: !Dq || !Jq,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, rq.f)("inGameReplay");
                                const Eq = (0, rg.e)(qq);
                                lq(Eq)
                              }
                            }, qq)))
                          })]
                        })]
                      })]
                    })
                  }), (0, cq.jsx)("div", {
                    ref: sq,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, cq.jsx)("div", {
                  ref: Uq,
                  className: "RespawnBottom",
                  children: (0, cq.jsx)(vg.d, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Uq
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
    var Rg = gq(36669);
    const Ug = [{
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
      Fg = [{
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
      sg = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Xg = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      wg = (0, Yq.memo)((function() {
        const qq = (0, Yq.useRef)(null),
          Eq = (0, Yq.useRef)(null);

        function gq(gq) {
          var Yq;
          let {
            vq: lq,
            screenPos: Oq
          } = gq;
          const mq = qq.current;
          null === (Yq = Eq.current) || void 0 === Yq || Yq.cancel(), mq.classList.remove("HitmarkerCrit"), Oq ? (mq.style.left = `${Oq.x}%`, mq.style.top = `${Oq.y}%`) : (mq.style.left = "50%", mq.style.top = "50%"), mq.style.rotate = 16 * (Math.random() - .5) + "deg", lq && mq.classList.add("HitmarkerCrit");
          const xq = mq.animate(lq ? Fg : Ug, lq ? Xg : sg);
          Eq.current = xq, xq.onfinish = () => {
            mq.classList.remove("HitmarkerCrit")
          }
        }
        return (0, xq.f)("localGunHitmarker", (qq => {
          let {
            vq: Eq
          } = qq;
          gq({
            vq: Eq
          })
        })), (0, xq.f)("yourAttackHit", (qq => {
          let {
            vq: Eq,
            screenPos: Yq
          } = qq;
          gq({
            vq: Eq,
            screenPos: rq.b.get("isTouchScreen") ? Yq : void 0
          })
        })), (0, xq.f)("sendHitmarker", (qq => {
          let {
            vq: Eq,
            screenPos: Yq
          } = qq;
          gq({
            vq: Eq,
            screenPos: Yq
          })
        })), (0, cq.jsxs)("div", {
          ref: qq,
          className: "Hitmarker",
          children: [(0, cq.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, cq.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, cq.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, cq.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Kg() {
      const qq = (0, Yq.useRef)(!0);
      return (0, xq.f)("localBlockMined", (() => {
        lE.e.play("blockMined")
      })), (0, xq.f)("yourAttackHit", (() => {
        lE.e.play("hitLanded")
      })), (0, xq.f)("localGunHitmarker", (() => {
        lE.e.play("hitLanded")
      })), (0, xq.f)("damagedByOtherPlayer", (() => {
        lE.e.play("damageTaken")
      })), (0, tq.d)("localPlayerAliveSet", (Eq => {
        !Eq && qq.current && lE.e.play("death"), qq.current = Eq
      })), null
    }
    var Cg = gq(1895),
      Ig = gq(36687),
      eg = gq.n(Ig),
      Dg = gq(2005),
      qY = gq(1994),
      EY = gq(3166),
      gY = gq(9301);
    const YY = Sg.ke ? 7e7 : 7e3,
      lY = eg()("#ffffff").alpha(.5).string();

    function OY(qq) {
      const Eq = (0, EY.e)(qq);
      return void 0 !== Eq && "Gun" === (0, gY.itemTypeOf)(Eq)
    }

    function mY(qq) {
      if (!qq) return console.error(`Killfeed colour was ${qq}`), lY;
      try {
        return eg()(qq).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${qq} is not a colour`), lY
      }
    }
    const xY = (0, Yq.memo)((function() {
      const {
        t: qq
      } = (0, iq.v)(), Eq = (0, Yq.useRef)([]), gq = (0, Vg.c)();
      return (0, tq.d)("kill", (function(Yq) {
        var lq, Oq;
        let {
          killer: mq,
          victim: xq,
          withItem: Aq,
          killstreak: cq
        } = Yq;
        const uq = Eq.current;
        if (uq.length >= 3) {
          const qq = uq.shift();
          clearTimeout(qq.timeout)
        }
        const Bq = Wq.gameBridge.latest("hiddenPlayerNames"),
          Nq = {
            deadName: pg(xq, qq),
            killerName: pg(mq, qq),
            isFriend: {
              killer: (0, Dg.h)(mq.realName, Bq),
              dead: (0, Dg.h)(xq.realName, Bq)
            },
            withItem: Aq,
            wasHeadshot: !1,
            killstreak: cq,
            timeout: setTimeout((() => {
              uq.shift(), gq()
            }), YY),
            reactId: `${null!==(lq=mq.id)&&void 0!==lq?lq:mq.shownName}|${null!==(Oq=xq.id)&&void 0!==Oq?Oq:xq.shownName}|${Date.now()}`,
            killerBackground: mY(mq.colour),
            deadBackground: mY(xq.colour)
          };
        uq.push(Nq), gq()
      })), (0, Yq.useEffect)((() => {
        const qq = Eq.current;
        return () => {
          for (; qq.length > 0;) {
            const {
              timeout: Eq
            } = qq.pop();
            clearTimeout(Eq)
          }
        }
      }), []), (0, cq.jsx)("div", {
        className: "Killfeed",
        children: Eq.current.map((qq => {
          let {
            deadName: Eq,
            killerName: gq,
            withItem: Yq,
            wasHeadshot: lq,
            killstreak: Oq,
            killerBackground: mq,
            deadBackground: xq,
            reactId: Aq,
            isFriend: uq
          } = qq;
          return (0, cq.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${mq} calc(100% - 10rem), ${xq} 100%)`
            },
            children: [Oq >= 2 ? (0, cq.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Sg.X)(Oq)
            }) : null, (0, cq.jsx)("div", {
              className: "KillfeedKillerName",
              children: gq
            }), uq.killer && (0, cq.jsx)(qY.b, {}), (0, cq.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: OY(Yq) ? "7.5vmin" : "5vmin"
              },
              children: (0, cq.jsx)(Cg.e, {
                itemName: Yq,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), lq ? (0, cq.jsx)(pq.d, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, cq.jsx)("div", {
              className: "KillfeedDeadName",
              children: Eq
            }), uq.dead && (0, cq.jsx)(qY.b, {})]
          }, Aq)
        }))
      })
    }));
    var AY = gq(36734),
      cY = gq(1117),
      uY = gq.n(cY),
      BY = gq(3265),
      WY = gq(36736),
      NY = gq(1283);
    const aY = {},
      VY = (0, Yq.memo)((function() {
        const qq = (0, Yq.useRef)({}),
          [, Eq] = (0, Yq.useReducer)((qq => qq + 1), 0);
        (0, xq.f)("setDirectionArrow", (gq => {
          let {
            id: Yq,
            position: lq,
            style: Oq,
            text: mq,
            AY: xq
          } = gq;
          const Aq = qq.current,
            cq = Oq || aY,
            uq = mq,
            Bq = Aq[Yq];
          if (!Bq) return Aq[Yq] = {
            position: lq,
            style: cq,
            text: uq,
            shouldShowDistance: xq,
            mF: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void Eq();
          const Wq = !uY()(Bq.style, cq) || !uY()(Bq.text, uq) || Bq.shouldShowDistance !== xq;
          Bq.position = lq, Bq.style = cq, Bq.text = uq, Bq.shouldShowDistance = xq, Wq && Eq()
        })), (0, xq.f)("clearDirectionArrow", (gq => {
          let {
            id: Yq
          } = gq;
          const lq = qq.current;
          if (null === Yq)
            for (const qq in lq) delete lq[qq];
          else delete lq[Yq];
          Eq()
        })), (0, Yq.useEffect)((() => {
          const Eq = qq.current,
            gq = (0, NY.t)((() => {
              ! function(qq) {
                const Eq = Wq.gameBridge.lookup("localPos", null),
                  gq = BY.c - dY,
                  Yq = (0, BY.l)() - dY;
                for (const lq in qq) {
                  const Oq = qq[lq];
                  if (!Oq.mF) continue;
                  const mq = Wq.gameBridge.lookup("screenPos", Oq.position),
                    xq = mq.x - 50,
                    Aq = mq.y - 50;
                  mq.x === Oq.lastScreenX && mq.y === Oq.lastScreenY || (Oq.lastScreenX = mq.x, Oq.lastScreenY = mq.y, Oq.mF.style.translate = `${mq.x}vw ${mq.y}vh`, Oq.chevronElement && (Oq.chevronElement.style.rotate = `${Sg.c.fastATan2(Aq,xq)}rad`));
                  const cq = Math.abs(xq) < gq && Math.abs(Aq) < Yq;
                  if (cq !== Oq.onScreen && (Oq.onScreen = cq, Oq.mF.classList.toggle("DirectionArrowOnScreen", cq)), Oq.shouldShowDistance && Oq.distanceElement) {
                    const qq = Oq.position[0] - Eq[0],
                      gq = Oq.position[1] - Eq[1],
                      Yq = Oq.position[2] - Eq[2],
                      lq = Math.round(Math.sqrt(qq * qq + gq * gq + Yq * Yq));
                    (-1 === Oq.lastRenderedDist || (0, WY.b)(lq, Oq.lastRenderedDist, Oq.lastDistUpdateTime)) && (Oq.distanceElement.textContent = `${lq}m`, Oq.lastRenderedDist = lq, Oq.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(Eq)
            }));
          return () => {
            gq();
            for (const qq in Eq) delete Eq[qq]
          }
        }), []);
        const gq = qq.current;
        return (0, cq.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(gq).map((qq => {
            var Eq;
            let [Yq, lq] = qq;
            const Oq = null !== (Eq = (0, Hq.Tb)(lq.style)) && void 0 !== Eq ? Eq : "#ffffff";
            return (0, cq.jsxs)("div", {
              ref: qq => {
                gq[Yq] && (gq[Yq].mF = qq)
              },
              className: "DirectionArrow",
              style: {
                fontSize: lq.style.fontSize,
                opacity: lq.style.opacity
              },
              children: [(0, cq.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: qq => {
                  gq[Yq] && (gq[Yq].chevronElement = qq)
                },
                children: [(0, cq.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, cq.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, cq.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, cq.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, cq.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Oq
                    }
                  }), (0, cq.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Oq
                    }
                  })]
                })]
              }), (0, cq.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Oq,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Oq}`
                }
              }), lq.text && (0, cq.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Oq,
                  fontWeight: lq.style.fontWeight,
                  fontStyle: lq.style.fontStyle
                },
                children: (0, cq.jsx)(Aq.c, {
                  text: lq.text
                })
              }), lq.shouldShowDistance && (0, cq.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: qq => {
                  gq[Yq] && (gq[Yq].distanceElement = qq)
                },
                style: {
                  color: Oq,
                  fontWeight: lq.style.fontWeight,
                  fontStyle: lq.style.fontStyle
                }
              })]
            }, Yq)
          }))
        })
      })),
      dY = .5;
    const jY = (0, Yq.memo)((function(qq) {
        let {
          isTouchScreen: Eq
        } = qq;
        return (0, cq.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, cq.jsx)(QY, {}), Eq && (0, cq.jsx)(qg, {})]
        })
      })),
      HY = {
        readyForNext: 0,
        running: 1
      },
      oY = 50;

    function PY(qq) {
      console.assert(qq.state.current === HY.readyForNext);
      const Eq = qq.queue.current,
        gq = qq.foreground.current;
      if (Eq.length > 0 && gq) {
        const {
          toFraction: Yq,
          toDuration: lq
        } = Eq.shift();
        qq.state.current = HY.running, gq.style.transition = `transform ${Math.max(lq-oY,0)}ms linear`, gq.classList.remove("Complete"), qq.timeout.current = setTimeout((() => {
          gq.style.transform = `scaleX(${Yq})`, qq.timeout.current = setTimeout((() => {
            1 === Yq && gq.classList.add("Complete"), qq.state.current = HY.readyForNext, PY(qq)
          }), Math.max(lq - oY, 0))
        }), oY)
      }
    }

    function QY() {
      const qq = (0, Yq.useRef)([]),
        Eq = (0, Yq.useRef)(HY.readyForNext),
        gq = (0, Yq.useRef)(void 0),
        lq = (0, Yq.useRef)(null),
        Oq = (0, Yq.useRef)({
          queue: qq,
          state: Eq,
          timeout: gq,
          foreground: lq
        }),
        mq = (0, oq.h)("showProgressBar");
      if ((0, Yq.useLayoutEffect)((() => (mq && Eq.current === HY.readyForNext && PY(Oq.current), () => {
          Eq.current = HY.readyForNext, clearTimeout(gq.current), mq && (qq.current.length = 0)
        })), [mq]), (0, xq.f)("progressBarUpdate", (gq => {
          let {
            toFraction: Yq,
            toDuration: lq
          } = gq;
          qq.current.push({
            toFraction: Yq,
            toDuration: lq
          }), Eq.current === HY.readyForNext && PY(Oq.current)
        })), !mq) return null;
      return (0, cq.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, cq.jsx)("div", {
          className: "ProgressBarForeground",
          ref: lq,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var yY = gq(36740),
      tY = gq(2424);
    const rY = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function vY(qq) {
      let {
        classes: Eq,
        gone: gq
      } = qq;
      const Yq = document.documentElement;
      Yq.classList.remove(...Eq);
      for (const lq of gq) lq.style.display = "block";
      return () => {
        Yq.classList.add(...Eq);
        for (const qq of gq) qq.style.display = ""
      }
    }

    function hY(qq) {
      const {
        isTouchScreen: Eq
      } = (0, rq.j)(["isTouchScreen"]);
      (0, Yq.useLayoutEffect)((() => {
        if (!Eq) return;
        const gq = qq.current,
          Yq = document.querySelector(`.${yY.i}`),
          lq = qq => {
            const Eq = () => {
              const Eq = qq.querySelector(tY.k),
                Yq = function(qq) {
                  const Eq = document.documentElement;
                  return {
                    classes: BE.G.map(VE.s).filter((qq => Eq.classList.contains(qq))),
                    gone: [...qq.querySelectorAll(`.TopRightTrayToggle.${tY.o}`)]
                  }
                }(qq);
              Eq && function(qq, Eq) {
                (0, tY.E)(qq, Eq.classes.length > 0 || Eq.gone.length > 0, (() => vY(Eq)))
              }(Eq, Yq);
              const lq = `${Math.floor(function(qq,Eq,gq){const Yq=document.documentElement,lq=Yq.classList.contains((0,VE.x)("menu")),Oq=Yq.style.getPropertyValue((0,VE.A)("menu"));if(!lq&&""===Oq)return qq.getBoundingClientRect().left;const mq=Eq?(0,tY.u)(Eq):()=>{},xq=vY(gq);Yq.classList.remove((0,VE.x)("menu")),Yq.style.removeProperty((0,VE.A)("menu"));const Aq=qq.getBoundingClientRect().left;return xq(),mq(),lq&&Yq.classList.add((0,VE.x)("menu")),""!==Oq&&Yq.style.setProperty((0,VE.A)("menu"),Oq),Aq}(qq,Eq,Yq)-gq.getBoundingClientRect().left-4)}px`;
              gq.style.getPropertyValue("--InGameHeaderMaxWidth") !== lq && gq.style.setProperty("--InGameHeaderMaxWidth", lq)
            };
            Eq();
            const lq = new ResizeObserver(Eq);
            lq.observe(qq), lq.observe(Yq), window.addEventListener("resize", Eq);
            const Oq = () => rY.map((qq => document.documentElement.style.getPropertyValue(qq))).join();
            let mq = Oq();
            const xq = new MutationObserver((() => {
              const qq = Oq();
              qq !== mq && (mq = qq, Eq())
            }));
            xq.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Aq = (0, Pq.k)(VE.d, Eq),
              cq = new MutationObserver(Eq);
            return cq.observe(qq, {
              childList: !0,
              subtree: !0
            }), () => {
              lq.disconnect(), xq.disconnect(), cq.disconnect(), Aq(), window.removeEventListener("resize", Eq);
              const gq = qq.querySelector(tY.k);
              gq && (0, tY.u)(gq)
            }
          },
          Oq = () => Yq.querySelector(".TopRightIconsContainer"),
          mq = Oq();
        let xq;
        if (mq) xq = lq(mq);
        else {
          const qq = new MutationObserver((() => {
            const Eq = Oq();
            Eq && (qq.disconnect(), xq = lq(Eq))
          }));
          qq.observe(Yq, {
            childList: !0,
            subtree: !0
          }), xq = () => {
            qq.disconnect()
          }
        }
        return () => {
          xq(), gq.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [Eq, qq])
    }
    var nY = gq(3542),
      bY = gq(3536),
      iY = gq(1622),
      ZY = gq(1477),
      fY = gq(1628),
      MY = gq(1710),
      TY = gq(1824),
      zY = gq(1109),
      SY = gq(4137),
      pY = gq(1448),
      GY = gq(1339);
    const LY = 2e4,
      JY = 6e5,
      kY = new Set;

    function RY() {
      const {
        gameEntrySource: qq,
        loadingOverlayVisible: Eq
      } = (0, rq.j)(["gameEntrySource", "loadingOverlayVisible"]), gq = (0, tq.f)("connectedGame", (qq => (0, SY.h)(qq) ? qq.lobbyName : null)), lq = (0, tq.g)("localPlayerAlive"), Oq = (0, tq.f)("players", (qq => null !== qq.localId && void 0 !== qq.byId[qq.localId])), [mq, xq] = (0, Yq.useState)(null);
      return !Eq && lq && Oq && null !== gq && mq !== gq && xq(gq), (0, Yq.useEffect)((() => {
        if (!(0, SY.j)(qq) || null === mq || mq !== gq || kY.has(mq)) return;
        const Eq = setTimeout((() => {
          kY.add(mq), async function(qq) {
            const Eq = await zY.userContextManager.getCurrentUserContext();
            let gq;
            try {
              gq = (await ZY.e.getWorldOwnerFriendOffer(Eq)).owner
            } catch (lq) {
              return void console.warn("Couldn't ask who owns this world", lq)
            }
            if (!gq || (0, SY.n)(gq.name, Date.now())) return;
            const Yq = gq;
            ! function(qq, Eq) {
              const gq = Date.now() + JY;
              let Yq = Date.now(),
                lq = 0;
              const Oq = () => {
                const mq = Date.now(),
                  xq = Wq.gameBridge.latest("connectedGame");
                xq.lobbyName !== qq || mq > gq || (null === xq.websocketUrl ? Yq = 1 / 0 : Yq === 1 / 0 && !rq.b.get("loadingOverlayVisible") && Wq.gameBridge.latest("localPlayerAlive") && (Yq = mq + LY), lq = mq < Yq || !Wq.gameBridge.latest("localPlayerAlive") || rq.b.get("isUiHidden") || rq.b.get("isUiHiddenByCamera") || (0, MY.isTypingInInput)() || rq.b.get("loadingOverlayVisible") || (0, iY.p)() || (0, nY.c)() || (0, GY.l)() ? 0 : lq + 1, lq >= 2 ? Eq() : setTimeout(Oq, 500))
              };
              Oq()
            }(qq, (() => {
              (0, SY.e)(fY.c.getSocialState().friends, Yq.name) || ((0, SY.k)(Yq.name, Date.now()), TY.g.showWorldOwnerOffer(Yq), (0, pY.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(mq).catch((qq => {
            console.error("Failed to offer the world's owner as a friend", qq)
          }))
        }), LY);
        return () => {
          clearTimeout(Eq)
        }
      }), [qq, mq, gq]), null
    }
    var UY = gq(1884);
    const FY = (0, Yq.memo)((function(qq) {
        let {
          durationMs: Eq,
          endsAtMs: gq
        } = qq;
        const [, lq] = (0, Yq.useReducer)((qq => qq + 1), 0), Oq = null === gq ? Eq : Math.max(gq - Date.now(), 0);
        return (0, Yq.useEffect)((() => {
          if (null === gq || Oq <= 0) return;
          const qq = setTimeout(lq, Oq - 1e3 * (Math.ceil(Oq / 1e3) - 1));
          return () => {
            clearTimeout(qq)
          }
        })), (0, cq.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Sg.ob)(Oq)
        })
      })),
      sY = (0, Yq.memo)((function() {
        const qq = (0, tq.g)("localEffects");
        return (0, cq.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(qq).map((qq => {
            let [Eq, {
              icon: gq,
              displayName: Yq,
              durationMs: lq,
              endsAtMs: Oq,
              level: mq
            }] = qq;
            return (0, cq.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, cq.jsx)(UY.e, {
                icon: gq,
                className: "EffectInfoIcon"
              }), (0, cq.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== lq ? "0" : "1rem"
                },
                children: [(0, cq.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, cq.jsx)(Aq.c, {
                    text: null !== Yq && void 0 !== Yq ? Yq : Eq,
                    className: "EffectInfoName SmallTextBold"
                  }), mq > 1 && (0, cq.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Sg.X)(mq)
                  })]
                }), null !== lq && (0, cq.jsx)(FY, {
                  durationMs: lq,
                  endsAtMs: Oq
                })]
              })]
            }, Eq)
          }))
        })
      }));
    var XY = gq(36742),
      wY = gq(36955),
      KY = gq(190),
      CY = gq(1336),
      IY = gq(2664),
      eY = gq(2845);

    function DY(qq, Eq) {
      (0, Yq.useLayoutEffect)((() => {
        let Eq, gq;
        const Yq = requestAnimationFrame((() => {
          gq = setTimeout((() => {
            gq = void 0;
            const Yq = qq();
            Eq = "function" === typeof Yq ? Yq : void 0
          }), 0)
        }));
        return () => {
          var qq;
          cancelAnimationFrame(Yq), clearTimeout(gq), null === (qq = Eq) || void 0 === qq || qq()
        }
      }), Eq)
    }
    const ql = [5, 5, 5],
      El = [7, 4, 4, 4];

    function gl(qq) {
      return qq.reduce(((qq, Eq) => qq + Eq), 0)
    }

    function Yl(qq, Eq, gq, Yq, lq) {
      const Oq = qq.getContext("2d");
      if (!Oq) return null;
      const mq = Eq.fontFamily,
        xq = Eq.fontWeight;
      return qq.width = gq, qq.height = Yq, Oq.fillStyle = Eq.color, Oq.textAlign = "center", Oq.textBaseline = "middle", Oq.font = `${xq} ${lq}px ${mq}`, Oq
    }
    const ll = (0, Yq.memo)((function(qq) {
      let {
        show: Eq
      } = qq;
      const gq = (0, Yq.useRef)(null),
        lq = (0, Yq.useRef)(null),
        Oq = (0, Yq.useRef)(null),
        mq = (0, aq.j)();
      return (0, Yq.useEffect)((() => mq.whenShown((() => {
        let qq = 0,
          Eq = 0,
          gq = performance.now(),
          Yq = 0;
        const mq = (0, NY.t)((() => {
          var mq, xq, Aq;
          qq++, Eq++;
          const cq = performance.now();
          if (cq - gq < 1e3) return;
          const uq = Math.round(qq / (cq - gq) * 1e3);
          if (lq.current = uq, null === (mq = Oq.current) || void 0 === mq || mq.call(Oq, uq), qq = 0, gq = cq, uq >= 55) return void(Yq = 0);
          if (Yq += 1, Yq < 15) return;
          const Bq = null !== (xq = yq.i.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== xq ? xq : 0,
            [Nq, aq] = Qq.c.get("minChunkAddDist");
          if (function(qq, Eq) {
              const gq = Wq.gameBridge.lookup("Gy", null);
              return null !== gq && (gq.horizontal > qq || gq.vertical > Eq)
            }(Nq, aq) && (null !== (Aq = yq.i.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Aq ? Aq : 0) + 432e5 < Date.now() && Bq < 3) {
            yq.i.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            CY.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((qq => {
              "notificationTornDown" !== qq && (qq ? (Wq.gameBridge.send("setChunkAddDistance", {
                horizontal: Nq,
                vertical: aq
              }), yq.i.setItem("chunkHorizAddDist", Nq), yq.i.setItem("chunkVertAddDist", aq), Pq.i.TV("updatedChunkLoadDist"), yq.i.setItem("decreaseLoadDistPromptDeniedCount", 0)) : yq.i.setItem("decreaseLoadDistPromptDeniedCount", Bq + 1))
            }))
          }
        }));
        let xq = performance.now();
        Eq = 0;
        let Aq = null,
          cq = !document.hidden;

        function uq() {
          const qq = performance.now() - xq,
            gq = 1e3 * Eq / qq;
          cq && (null === Aq && (Aq = gq), IY.c.setFps(gq, Aq)), Eq = 0, xq = performance.now()
        }
        let Bq = setInterval(uq, eY.b);

        function Nq() {
          const qq = cq;
          cq = !document.hidden, !qq && cq && (Eq = 0, xq = performance.now(), clearInterval(Bq), Bq = setInterval(uq, eY.b))
        }
        return document.addEventListener("visibilitychange", Nq), () => {
          mq(), document.removeEventListener("visibilitychange", Nq), clearInterval(Bq)
        }
      }))), [mq]), DY((() => {
        var qq;
        if (!Eq || Oq.current) return;
        const Yq = gq.current,
          mq = window.getComputedStyle(Yq.parentElement),
          xq = null !== (qq = window.devicePixelRatio) && void 0 !== qq ? qq : 1,
          Aq = parseFloat(mq.fontSize) * xq,
          cq = Math.round(3 * Aq),
          uq = Math.round(Aq),
          Bq = Yl(Yq, mq, cq, uq, Aq);
        if (!Bq) return;
        const Wq = qq => {
          Bq.clearRect(0, 0, Yq.width, Yq.height), Bq.fillText(qq.toString(), Yq.width / 2, Yq.height / 2)
        };
        Oq.current = Wq, null !== lq.current && Wq(lq.current)
      }), [Eq]), (0, cq.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: Eq ? "flex" : "none"
        },
        children: [(0, cq.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, cq.jsx)("canvas", {
          className: "FpsCanvas",
          ref: gq,
          width: 48,
          height: 16
        })]
      })
    }));

    function Ol(qq) {
      return Math.sign(qq) * Math.round(100 * Math.abs(qq))
    }

    function ml(qq) {
      let {
        getCoordinates: Eq,
        showChunkCoords: gq,
        columns: lq
      } = qq;
      const Oq = (0, Yq.useRef)(null);
      return DY((() => {
        var qq;
        const Yq = Oq.current,
          mq = window.getComputedStyle(Yq.parentElement),
          xq = null !== (qq = window.devicePixelRatio) && void 0 !== qq ? qq : 1,
          Aq = parseFloat(mq.fontSize) * xq,
          cq = Math.round(Aq * gl(lq)),
          uq = Math.round(Aq),
          Bq = Yl(Yq, mq, cq, uq, Aq);
        if (!Bq) return;
        let Nq = !0,
          aq = 0,
          Vq = 0,
          dq = 0,
          jq = 0,
          Hq = 0,
          oq = 0;
        const Pq = () => {
          Nq = !0
        };
        document.fonts.load(Bq.font).then(Pq, Pq);
        const Qq = () => {
          Yl(Yq, mq, cq, uq, Aq), Pq()
        };
        Yq.addEventListener("contextrestored", Qq);
        const yq = (0, NY.y)((() => {
          var qq, Oq, mq, xq, cq, uq;
          const [Pq, Qq, yq] = Eq(), tq = Ol(Pq), rq = Ol(Qq), vq = Ol(yq);
          let hq = null;
          if (gq) {
            const qq = Wq.gameBridge.lookup("localPos", null);
            hq = (0, qE.ab)(qq[0], qq[1], qq[2])
          }
          const nq = null !== (qq = null === (Oq = hq) || void 0 === Oq ? void 0 : Oq[0]) && void 0 !== qq ? qq : 0,
            bq = null !== (mq = null === (xq = hq) || void 0 === xq ? void 0 : xq[1]) && void 0 !== mq ? mq : 0,
            iq = null !== (cq = null === (uq = hq) || void 0 === uq ? void 0 : uq[2]) && void 0 !== cq ? cq : 0;
          if (!Nq && tq === aq && rq === Vq && vq === dq && nq === jq && bq === Hq && iq === oq) return;
          Nq = !1, aq = tq, Vq = rq, dq = vq, jq = nq, Hq = bq, oq = iq;
          const Zq = [(tq / 100).toFixed(2), (rq / 100).toFixed(2), (vq / 100).toFixed(2)];
          hq && Zq.unshift(`${nq} ${bq} ${iq}`), Bq.clearRect(0, 0, Yq.width, Yq.height);
          const fq = Yq.height / 2;
          let Mq = 0;
          for (let Eq = 0; Eq < Zq.length; Eq++) {
            const qq = Aq * lq[Eq];
            Bq.fillText(Zq[Eq], Mq + qq / 2, fq, qq), Mq += qq
          }
        }));
        return () => {
          yq(), Yq.removeEventListener("contextrestored", Qq)
        }
      }), [Eq, gq, lq]), (0, cq.jsx)("div", {
        className: "CoordinateUI",
        children: (0, cq.jsx)("canvas", {
          ref: Oq,
          className: "CoordinateCanvas",
          width: 16 * gl(lq),
          height: 16
        })
      })
    }
    const xl = (0, Yq.memo)((function() {
        const qq = (0, Yq.useCallback)((() => {
          const qq = Wq.gameBridge.lookup("localPos", null);
          return [qq[0], qq[1], qq[2]]
        }), []);
        return (0, cq.jsx)(ml, {
          getCoordinates: qq,
          showChunkCoords: !1,
          columns: ql
        })
      })),
      Al = (0, Yq.memo)((function() {
        const qq = (0, Yq.useCallback)((() => {
          const qq = Wq.gameBridge.lookup("localPos", null),
            Eq = KY.c.Oa;
          let gq = qq[0] % Eq,
            Yq = qq[1] % Eq,
            lq = qq[2] % Eq;
          return gq < 0 && (gq += Eq), Yq < 0 && (Yq += Eq), lq < 0 && (lq += Eq), [gq, Yq, lq]
        }), []);
        return (0, cq.jsx)(ml, {
          getCoordinates: qq,
          showChunkCoords: !0,
          columns: El
        })
      }));
    var cl = gq(2043),
      ul = gq(1326),
      Bl = gq(987),
      Wl = gq(1214),
      Nl = gq(96),
      al = gq(36789),
      Vl = gq(1431),
      dl = gq(3056);
    const jl = (0, Yq.memo)((function() {
      const qq = (0, oq.h)("maxAuraLevel");
      return 0 === qq ? null : (0, cq.jsx)(Hl, {
        maxLevel: qq
      })
    }));

    function Hl(qq) {
      let {
        maxLevel: Eq
      } = qq;
      const gq = (0, oq.h)("auraPerLevel"),
        [lq, Oq] = (0, Yq.useState)((() => {
          var qq;
          return null !== (qq = Wq.gameBridge.latest("aura")) && void 0 !== qq ? qq : void 0
        })),
        [mq, xq] = (0, Yq.useState)((() => Pq(lq))),
        [Aq, uq] = (0, Yq.useReducer)((qq => qq + 1), 0),
        Bq = (0, Yq.useRef)(null),
        Nq = (0, Yq.useRef)([]),
        aq = (0, Yq.useRef)({
          width: 0,
          level: 0
        }),
        Vq = (0, Yq.useRef)(null),
        dq = (0, Yq.useRef)(null);

      function Hq() {
        if (null !== Vq.current) return;
        if (0 === Nq.current.length) return;
        const {
          width: qq,
          level: Eq
        } = Nq.current.shift();
        let gq;
        if (Eq !== aq.current.level && Eq > aq.current.level !== qq > aq.current.width) {
          const Yq = Eq > aq.current.level;
          gq = Yq ? qq : 100 - qq, Bq.current.style.transition = "none", Bq.current.style.width = Yq ? "0%" : "100%", Bq.current.offsetWidth
        } else gq = Math.abs(qq - aq.current.width);
        const Yq = 100 * gq / 20;
        Bq.current.style.transition = `width ${Yq}ms linear`, xq(qq), aq.current = {
          width: qq,
          level: Eq
        }, Nq.current.length > 0 && (Vq.current = setTimeout((() => {
          Vq.current = null, Hq()
        }), Yq))
      }

      function Pq(qq) {
        return Math.floor(qq / gq) === Eq ? 100 : qq % gq / gq * 100
      }
      return (0, Yq.useEffect)((() => () => {
        clearTimeout(Vq.current), clearTimeout(dq.current), Vq.current = null, dq.current = null
      }), []), (0, tq.d)("aura", (qq => {
        if (dq.current && clearTimeout(dq.current), null === qq) return clearTimeout(Vq.current), dq.current = null, Vq.current = null, Nq.current = [], aq.current = {
          width: 0,
          level: 0
        }, Oq(void 0), void xq(0);
        dq.current = setTimeout((() => {
          const Eq = Math.floor(lq / gq),
            Yq = Math.floor(qq / gq),
            mq = Pq(qq);
          qq > lq && al.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Yq > Eq ? (Yq % 5 === 0 && al.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), uq(), Nq.current.push({
            width: 100,
            level: Eq
          })) : Yq < Eq && Nq.current.push({
            width: 0,
            level: Eq
          }), qq === lq && Yq === Eq || Nq.current.push({
            width: mq,
            level: Yq
          }), Oq(qq), Hq()
        }), 50)
      })), (0, jq.c)(), (0, cq.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, cq.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, cq.jsx)(Vl.b, {
            showSignal: Aq,
            particleElement: (0, cq.jsx)("img", {
              src: (0, dl.e)("glint"),
              alt: ""
            })
          }), (0, cq.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, dl.e)("glint"),
            alt: "aura"
          }), (0, cq.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== lq && void 0 !== lq ? lq : 0) / gq)
          })]
        }), (0, cq.jsx)("div", {
          className: "AuraBar",
          children: (0, cq.jsx)("div", {
            ref: Bq,
            className: "AuraBarBackground",
            style: {
              width: `${mq}%`
            }
          })
        })]
      })
    }
    var ol = gq(2493);

    function Pl(qq) {
      qq.timed && (qq.endedAnimation = qq.timed.animation, qq.timed = null)
    }
    const Ql = (0, Yq.memo)((function() {
      const qq = (0, Yq.useRef)(null),
        Eq = (0, Yq.useRef)(null),
        gq = (0, Yq.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, xq.f)("middleScreenBarInitiate", (qq => {
        var Yq;
        let {
          duration: lq,
          uE: Oq,
          horizBarRemOffset: mq
        } = qq;
        const xq = gq.current;
        Pl(xq);
        const Aq = Eq.current;
        if (!(lq >= 0) || !Aq) return;
        null === (Yq = xq.endedAnimation) || void 0 === Yq || Yq.cancel(), xq.endedAnimation = null;
        const cq = Aq.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: lq,
          fill: "forwards"
        });
        xq.timed = {
          uE: Oq,
          horizBarRemOffset: mq,
          animation: cq
        }
      })), (0, xq.f)("middleScreenBarRemove", (() => {
        Pl(gq.current)
      })), (0, Yq.useEffect)((() => {
        const Yq = gq.current;
        let lq = Number.NaN,
          Oq = Number.NaN,
          mq = Number.NaN;
        return (0, NY.s)((() => {
          var gq, xq, Aq, cq;
          const uq = qq.current,
            Bq = Eq.current;
          if (!uq || !Bq) return;
          null !== (gq = Yq.timed) && void 0 !== gq && gq.uE && "finished" === Yq.timed.animation.playState && Pl(Yq), null === (xq = Yq.endedAnimation) || void 0 === xq || xq.cancel(), Yq.endedAnimation = null;
          let Nq = Yq.timed ? 1 : 0;
          if (!Yq.timed) {
            const qq = Wq.gameBridge.lookup("momentumFrac", null);
            Nq = qq > 0 ? 1 : 0, qq !== mq && (mq = qq, Bq.style.transform = `scaleX(${qq})`)
          }
          const aq = null !== (Aq = null === (cq = Yq.timed) || void 0 === cq ? void 0 : cq.horizBarRemOffset) && void 0 !== Aq ? Aq : 0;
          aq === lq && Nq === Oq || (lq = aq, Oq = Nq, uq.style.transform = `translateX(calc(-50% + ${aq}rem)) scaleX(${Nq})`)
        }))
      }), []), (0, cq.jsx)("div", {
        className: "MiddleScreenBar",
        ref: qq,
        children: (0, cq.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: Eq
        })
      })
    }));
    var yl = gq(4508),
      tl = gq(2650);

    function rl() {
      const {
        t: qq
      } = (0, iq.v)(), Eq = (0, xq.h)("serverUpdating", null), gq = (0, tl.b)(250, null !== Eq);
      return null === Eq || gq - Eq > 3e4 ? null : (0, cq.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, cq.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: qq("updateWaiting:updatingIn", {
            countdown: (0, yl.k)(Eq - gq)
          })
        }), (0, cq.jsx)("div", {
          children: qq("updateWaiting:bringYouBack")
        })]
      })
    }
    var vl = gq(36974),
      hl = gq(1952);
    const nl = [{
        translationKey: "general:interact"
      }],
      bl = (0, Yq.memo)((function() {
        const qq = (0, oq.h)("crosshairText"),
          {
            interactPrompt: Eq,
            blockText: gq,
            neededTool: lq
          } = (0, tq.g)("crosshairTarget"),
          {
            isTouchScreen: Oq
          } = (0, rq.j)(["isTouchScreen"]),
          mq = (0, hq.q)(),
          uq = (0, bq.e)("alt-fire");
        (0, Yq.useEffect)((() => {
          Wq.gameBridge.send("setCrosshairInteractPrompt", !Oq || mq ? "key" : "touch")
        }), [Oq, mq]);
        const [Bq, Nq] = (0, Yq.useReducer)((qq => qq + 1), 0);
        (0, xq.f)("customBindingsChanged", Nq);
        var aq;
        if (null !== Eq && (mq && null !== uq || !Oq && null !== (0, hl.o)("alt-fire"))) return (0, cq.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, cq.jsx)(vq.c, {
            noaAction: "alt-fire"
          }), (0, cq.jsx)(Aq.c, {
            text: null !== (aq = Eq.label) && void 0 !== aq ? aq : nl
          })]
        });
        let Vq = null;
        return null !== gq ? Vq = gq : null !== qq && "" !== qq ? Vq = qq : null !== lq && (Vq = [{
          icon: lq,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Vq ? (0, cq.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, cq.jsx)(Aq.c, {
            text: Vq
          })
        }) : null
      }));
    var il = gq(2501);
    const Zl = (0, Yq.memo)((function() {
      var qq;
      const {
        interactPrompt: Eq
      } = (0, tq.g)("crosshairTarget"), {
        openInGameMenuName: gq,
        openEverythingMenuName: Yq
      } = (0, rq.j)(["openInGameMenuName", "openEverythingMenuName"]), lq = (0, xq.h)("aimingOverlay", "none"), Oq = (0, wq.o)(), mq = (0, il.d)();
      return null === Eq || null !== gq || null !== Yq || "sniper" === lq || Oq || mq ? null : (0, cq.jsx)(fl, {
        label: null !== (qq = Eq.label) && void 0 !== qq ? qq : nl
      })
    }));

    function fl(qq) {
      let {
        label: Eq
      } = qq;
      const gq = bE(Iq.d.Interact, !1);
      return (0, Yq.useEffect)((() => (Pq.i.TV(VE.m), () => {
        Pq.i.TV(VE.m)
      })), []), (0, cq.jsx)("div", {
        ref: gq,
        className: "TouchInteractHit",
        children: (0, cq.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, cq.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, cq.jsx)(pq.d, {
              name: "hand-back-point-up"
            })
          }), (0, cq.jsx)(Aq.c, {
            text: Eq
          })]
        })
      })
    }
    var Ml = gq(4588),
      Tl = gq(4648);
    const zl = (0, Yq.forwardRef)((function(qq, Eq) {
        let {
          text: gq,
          className: Yq,
          children: lq
        } = qq;
        return gq.hasText ? (0, cq.jsx)("div", {
          ref: Eq,
          className: Oq()("HudTextPanel", Yq, {
            NoBackground: !gq.showBackground
          }),
          children: null !== lq && void 0 !== lq ? lq : (0, cq.jsx)(Aq.c, {
            text: gq.content
          })
        }) : null
      })),
      Sl = (0, Yq.memo)((function() {
        const qq = (0, oq.k)("middleTextTop"),
          [Eq, gq] = (0, Yq.useState)(null),
          lq = (0, yY.j)(Eq);
        return qq.hasText ? (0, cq.jsx)("div", {
          className: Oq()("MiddleTextTopContainer", {
            MiddleTextTopBelow: lq
          }),
          children: (0, cq.jsx)(zl, {
            ref: gq,
            className: "MiddleTextTop",
            text: qq
          })
        }) : null
      })),
      pl = (0, Yq.memo)((function() {
        const qq = (0, oq.d)();
        return (0, cq.jsx)(cq.Fragment, {
          children: qq.map(((qq, Eq) => (0, cq.jsx)(zl, {
            className: "HeaderChip",
            text: qq
          }, Eq)))
        })
      }));
    var Gl = gq(3492),
      Ll = gq(4430);
    const Jl = (0, Yq.memo)((function() {
      const {
        t: qq
      } = (0, iq.v)(), [Eq, gq] = (0, Yq.useState)(!1), lq = (0, Yq.useRef)(!1), Oq = function(qq) {
        let {
          gameNameWithVariation: Eq,
          lobbyName: gq
        } = qq;
        if ((0, Bl.j)(Eq)) return kl;
        if ((0, Wl.I)(gq)) return Rl;
        return null
      }((0, tq.g)("connectedGame"));
      if (!Oq || Eq) return null;
      const mq = Ll.d[Oq.target];
      return (0, cq.jsx)(Sq.e, {
        tooltipInner: (0, cq.jsx)("div", {
          children: qq(mq.reportButtonTooltip)
        }),
        children: (0, cq.jsx)("div", {
          children: (0, cq.jsx)(hg.P, {
            onClick: () => {
              lq.current || (lq.current = !0, (0, Ll.e)(Oq.reportPolicyIds, mq).then((qq => {
                null !== qq && void 0 !== qq && qq.selectedPolicyId && (Wq.gameBridge.send("reportLobbyOrGame", {
                  target: Oq.target,
                  Oc: qq.selectedPolicyId,
                  details: qq.mc
                }), gq(!0))
              })).finally((() => {
                lq.current = !1
              })))
            }
          })
        })
      })
    }));
    const kl = {
        target: "customGame",
        reportPolicyIds: Gl.d
      },
      Rl = {
        target: "lobby",
        reportPolicyIds: Gl.h
      };
    var Ul = gq(8750),
      Fl = gq(36989),
      sl = gq(36995),
      Xl = gq(37004),
      wl = gq(37011),
      Kl = gq(37033);

    function Cl(qq) {
      return qq instanceof Error && Il.has(qq.message) ? qq.message : void 0
    }
    const Il = new Set([Kl.d.saveBusy.text, Kl.d.saveClosed.text, Kl.d.cropBusy.text]);
    let el = !1;
    async function Dl(qq, Eq) {
      var gq, Yq;
      const {
        files: lq
      } = Eq, Oq = lq.replayKey();
      if (null === Oq) return "none";
      if (el) throw new Error(Kl.d.saveBusy.text);
      const mq = null !== (gq = null === (Yq = lq.saveRefusal) || void 0 === Yq ? void 0 : Yq.call(lq)) && void 0 !== gq ? gq : null;
      if (null !== mq) throw new Error(mq);
      el = !0;
      try {
        return await async function(qq, Eq, gq) {
          const {
            files: Yq
          } = Eq, lq = () => Yq.replayKey() === gq, Oq = (qq, Eq) => {
            lq() && Yq.markSaved(qq, Eq)
          };
          let mq = null;
          if (Eq.pickerSupported()) {
            try {
              if (mq = await Eq.chooseFile(qq ? null : Yq.fileHandle()), null === mq) return "lE"
            } catch (Aq) {
              Eq.onFallback(Aq)
            }
            if (!lq()) throw new Error(Kl.d.saveClosed.text)
          }
          const xq = await Yq.encode();
          if (null === xq) {
            if (null !== mq) throw new Error(Kl.d.saveClosed.text);
            return "none"
          }
          if (null !== mq) try {
            return await Eq.write(mq, xq), Oq(mq), "written"
          } catch (Aq) {
            Eq.onFallback(Aq)
          }
          return Oq(null, Eq.download(xq)), "downloaded"
        }(qq, Eq, Oq)
      } finally {
        el = !1
      }
    }
    var qO = gq(4367),
      EO = gq(71);
    const gO = [1, 2, 4, 8, 16, 32, 64];

    function YO(qq, Eq) {
      return Math.max(0, Math.min(qq, Eq))
    }

    function lO(qq, Eq, gq) {
      return gq <= Eq ? 0 : (qq - Eq) / (gq - Eq) * 100
    }

    function OO(qq, Eq, gq) {
      const Yq = gq - Eq;
      return Math.round(Eq + qq / 100 * Yq)
    }

    function mO(qq, Eq) {
      const gq = Math.floor(qq / Eq / 60),
        Yq = Math.floor(qq / Eq % 60),
        lq = qq % Eq;
      return `${gq.toString().padStart(2,"0")}:${Yq.toString().padStart(2,"0")}:${lq.toString().padStart(2,"0")}`
    }

    function xO(qq) {
      return Number.isInteger(qq) || gO.includes(qq) ? `${Math.round(qq)}\xd7` : `${qq.toFixed(1)}\xd7`
    }

    function AO(qq, Eq) {
      const gq = gO.indexOf(qq);
      if (-1 !== gq) return "in" === Eq ? gO[Math.min(gq + 1, gO.length - 1)] : gO[Math.max(gq - 1, 0)];
      if ("in" === Eq) {
        for (const Eq of gO)
          if (Eq >= qq) return Eq;
        return qq
      }
      for (let Yq = gO.length - 1; Yq >= 0; Yq--)
        if (gO[Yq] <= qq) return gO[Yq];
      return gO[0]
    }

    function cO(qq, Eq) {
      const gq = Eq.getBoundingClientRect();
      if (gq.width <= 0) return 0;
      const Yq = (qq - gq.left) / gq.width * 100;
      return Math.max(0, Math.min(100, Yq))
    }

    function uO(qq, Eq) {
      return Eq <= 0 ? 0 : qq / Eq * 100
    }

    function BO(qq, Eq, gq) {
      const Yq = [];
      let lq = Math.ceil(qq / gq) * gq;
      for (; lq <= Eq;) Yq.push(lq), lq += gq;
      return Yq
    }
    var WO = gq(37042);
    const NO = [{
        label: "Linear",
        easing: WO.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: WO.f
      }, {
        label: "Ease Out",
        easing: WO.i
      }, {
        label: "Ease In Out",
        easing: WO.c
      }],
      aO = 200,
      VO = 150;

    function dO(qq) {
      const Eq = qq => Number(qq.toFixed(3)).toString();
      return `cubic-bezier(${Eq(qq[0])}, ${Eq(qq[1])}, ${Eq(qq[2])}, ${Eq(qq[3])})`
    }

    function jO(qq, Eq) {
      return {
        cx: 25 + qq * VO,
        cy: 25 + (1 - Eq) * VO
      }
    }

    function HO(qq, Eq, gq) {
      const Yq = qq - gq.left,
        lq = Eq - gq.top;
      return {
        x: Sg.c.clamp((Yq - 25) / VO, 0, 1),
        y: Sg.c.clamp(1 - (lq - 25) / VO, -1, 2)
      }
    }

    function oO(qq, Eq, gq, Yq, lq) {
      return {
        x: (0, WO.u)(qq, gq, lq),
        y: (0, WO.u)(Eq, Yq, lq)
      }
    }
    const PO = (0, Yq.memo)((function(qq) {
      let {
        value: Eq,
        onChange: gq
      } = qq;
      const lq = (0, Yq.useRef)(null),
        Oq = (0, Yq.useRef)(null),
        [mq, xq] = (0, Yq.useState)(null),
        Aq = (0, Yq.useCallback)((() => {
          const qq = lq.current;
          if (!qq) return;
          const gq = qq.getContext("2d");
          if (!gq) return;
          const Yq = window.devicePixelRatio || 1;
          qq.width = aO * Yq, qq.height = aO * Yq, gq.setTransform(Yq, 0, 0, Yq, 0, 0), gq.clearRect(0, 0, aO, aO), gq.fillStyle = "rgba(38, 52, 93, 0.85)", gq.fillRect(0, 0, aO, aO), gq.beginPath();
          const Oq = jO(0, 0),
            xq = jO(1, 1);
          gq.moveTo(Oq.cx, Oq.cy), gq.lineTo(xq.cx, xq.cy), gq.strokeStyle = "rgba(164, 164, 164, 0.35)", gq.setLineDash([3, 3]), gq.stroke(), gq.setLineDash([]);
          const [Aq, cq, uq, Bq] = Eq, Wq = jO(Aq, cq), Nq = jO(uq, Bq);
          gq.strokeStyle = "rgba(252, 211, 115, 0.55)", gq.lineWidth = 1.5, gq.beginPath(), gq.moveTo(Oq.cx, Oq.cy), gq.lineTo(Wq.cx, Wq.cy), gq.moveTo(xq.cx, xq.cy), gq.lineTo(Nq.cx, Nq.cy), gq.stroke(), gq.strokeStyle = "#fcd373", gq.lineWidth = 2, gq.beginPath();
          for (let Eq = 0; Eq <= 50; Eq++) {
            const qq = oO(Aq, cq, uq, Bq, Eq / 50),
              Yq = jO(qq.x, qq.y);
            0 === Eq ? gq.moveTo(Yq.cx, Yq.cy) : gq.lineTo(Yq.cx, Yq.cy)
          }
          gq.stroke();
          const aq = (qq, Eq, Yq) => {
            gq.beginPath(), gq.arc(qq, Eq, Yq ? 6 : 5, 0, 2 * Math.PI), gq.fillStyle = Yq ? "#ffb914" : "#fcd373", gq.fill(), gq.strokeStyle = "#1a1f2e", gq.lineWidth = 1.5, gq.stroke()
          };
          aq(Wq.cx, Wq.cy, "p1" === mq), aq(Nq.cx, Nq.cy, "p2" === mq)
        }), [mq, Eq]);
      (0, Yq.useEffect)((() => {
        Aq()
      }), [Aq]);
      const uq = (0, Yq.useCallback)(((qq, Yq) => {
          const mq = lq.current,
            xq = Oq.current;
          if (!mq || !xq) return;
          const Aq = mq.getBoundingClientRect(),
            {
              x: cq,
              y: uq
            } = HO(qq, Yq, Aq);
          gq("p1" === xq ? [cq, uq, Eq[2], Eq[3]] : [Eq[0], Eq[1], cq, uq])
        }), [gq, Eq]),
        Bq = (0, Yq.useCallback)((qq => {
          const gq = lq.current;
          if (!gq) return;
          const Yq = gq.getBoundingClientRect();
          let {
            x: mq,
            y: Aq
          } = HO(qq.clientX, qq.clientY, Yq);
          mq = Sg.c.clamp(mq, 0, 1), Aq = Sg.c.clamp(Aq, 0, 1);
          const [cq, Bq, Wq, Nq] = Eq.map((qq => Sg.c.clamp(qq, 0, 1))), aq = Math.hypot(mq - cq, Aq - Bq), Vq = Math.hypot(mq - Wq, Aq - Nq), dq = aq <= Vq ? "p1" : "p2";
          ("p1" === dq ? aq : Vq) > .12 || (Oq.current = dq, xq(dq), gq.setPointerCapture(qq.pointerId), uq(qq.clientX, qq.clientY))
        }), [uq, Eq]),
        Wq = (0, Yq.useCallback)((qq => {
          Oq.current && uq(qq.clientX, qq.clientY)
        }), [uq]),
        Nq = (0, Yq.useCallback)((qq => {
          Oq.current = null, xq(null), qq.currentTarget.hasPointerCapture(qq.pointerId) && qq.currentTarget.releasePointerCapture(qq.pointerId)
        }), []);
      return (0, cq.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, cq.jsx)("canvas", {
          ref: lq,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: aO,
            height: aO
          },
          onPointerDown: Bq,
          onPointerMove: Wq,
          onPointerUp: Nq,
          onPointerCancel: Nq
        }), (0, cq.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: dO(Eq)
        })]
      })
    }));
    var QO = gq(1668),
      yO = gq(1646);
    const tO = 12;

    function rO(qq) {
      return {
        left: qq.left + qq.width / 2,
        top: qq.top - 8
      }
    }

    function vO(qq, Eq) {
      const [gq, lq] = (0, Yq.useState)(null);
      return (0, Yq.useLayoutEffect)((() => {
        const gq = qq.current;
        if (!gq) return;
        const {
          width: Yq,
          height: Oq
        } = gq.getBoundingClientRect();
        lq(function(qq, Eq, gq) {
          const Yq = window.innerWidth,
            lq = window.innerHeight,
            Oq = Eq / 2;
          let mq = qq.left + qq.width / 2;
          mq = Math.max(tO + Oq, Math.min(mq, Yq - tO - Oq));
          const xq = qq.top - 8 - tO,
            Aq = lq - qq.bottom - 8 - tO,
            cq = xq < gq && Aq >= xq;
          let uq;
          cq ? (uq = qq.bottom + 8, uq + gq > lq - tO && (uq = lq - tO - gq), uq = Math.max(tO, uq)) : (uq = qq.top - 8, uq - gq < tO && (uq = tO + gq));
          return {
            left: mq,
            top: uq,
            placeBelow: cq
          }
        }(Eq, Yq, Oq))
      }), [Eq, qq]), gq
    }

    function hO(qq, Eq, gq) {
      (0, Yq.useEffect)((() => (0, yO.e)("pointerdown", (Yq => {
        var lq, Oq;
        const mq = Yq.target;
        mq instanceof Node && (null !== (lq = qq.current) && void 0 !== lq && lq.contains(mq) || null !== gq && void 0 !== gq && null !== (Oq = gq.current) && void 0 !== Oq && Oq.contains(mq) || (0, QO.j)(mq) || Eq())
      }))), [gq, Eq, qq])
    }

    function nO(qq) {
      let {
        label: Eq,
        value: gq,
        onChange: Yq
      } = qq;
      return (0, cq.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, cq.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: Eq
        }), (0, cq.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((qq, Eq) => (0, cq.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, cq.jsx)("span", {
              children: qq
            }), (0, cq.jsx)("input", {
              type: "number",
              step: "any",
              value: gq[Eq],
              onChange: qq => {
                const lq = Number.parseFloat(qq.target.value);
                if (Number.isNaN(lq)) return;
                const Oq = [gq[0], gq[1], gq[2]];
                Oq[Eq] = lq, Yq(Oq)
              }
            })]
          }, qq)))
        })]
      })
    }
    const bO = (0, Yq.memo)((function(qq) {
        var Eq, gq, lq;
        let {
          keyframe: mq,
          anchor: xq,
          hasOutgoingSegment: Aq,
          onClose: uq,
          onApply: Bq,
          onDelete: Wq,
          onUseCurrentCamera: Nq
        } = qq;
        const aq = (0, Yq.useRef)(null),
          Vq = vO(aq, xq.rect),
          [dq, jq] = (0, Yq.useState)((() => [mq.position[0], mq.position[1], mq.position[2]])),
          [Hq, oq] = (0, Yq.useState)((() => [mq.direction[0], mq.direction[1], mq.direction[2]])),
          [Pq, Qq] = (0, Yq.useState)((() => mq.easing));
        (0, Yq.useEffect)((() => {
          jq([mq.position[0], mq.position[1], mq.position[2]]), oq([mq.direction[0], mq.direction[1], mq.direction[2]]), Qq(mq.easing)
        }), [mq]), hO(aq, uq);
        const yq = (0, Yq.useCallback)((() => {
            Bq({
              SB: mq.SB,
              position: dq,
              direction: Hq,
              easing: Pq
            }), uq()
          }), [Hq, Pq, mq.SB, Bq, uq, dq]),
          tq = (0, Yq.useCallback)((() => {
            Wq(mq.SB), uq()
          }), [mq.SB, Wq, uq]),
          rq = (0, Yq.useCallback)((() => {
            const qq = Nq();
            qq && (jq([qq.position[0], qq.position[1], qq.position[2]]), oq([qq.direction[0], qq.direction[1], qq.direction[2]]))
          }), [Nq]),
          vq = rO(xq.rect);
        return (0, cq.jsxs)("div", {
          ref: aq,
          className: Oq()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (Eq = null === Vq || void 0 === Vq ? void 0 : Vq.placeBelow) && void 0 !== Eq && Eq,
            Positioned: null !== Vq
          }),
          style: {
            left: `${null!==(gq=null===Vq||void 0===Vq?void 0:Vq.left)&&void 0!==gq?gq:vq.left}px`,
            top: `${null!==(lq=null===Vq||void 0===Vq?void 0:Vq.top)&&void 0!==lq?lq:vq.top}px`
          },
          onPointerDown: qq => {
            qq.stopPropagation()
          },
          children: [(0, cq.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, cq.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, cq.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", xq.SB]
            })]
          }), (0, cq.jsx)(nO, {
            label: "Position",
            value: dq,
            onChange: jq
          }), (0, cq.jsx)(nO, {
            label: "Direction",
            value: Hq,
            onChange: oq
          }), Aq && (0, cq.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, cq.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, cq.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: NO.map((qq => {
                const Eq = (gq = Pq, Yq = qq.easing, gq[0] === Yq[0] && gq[1] === Yq[1] && gq[2] === Yq[2] && gq[3] === Yq[3]);
                var gq, Yq;
                return (0, cq.jsx)(hg.Q, {
                  className: Oq()("ReplayKeyframePopoverPreset", {
                    Active: Eq
                  }),
                  onClick: () => {
                    Qq(qq.easing)
                  },
                  children: qq.label
                }, qq.label)
              }))
            }), (0, cq.jsx)(PO, {
              value: Pq,
              onChange: Qq
            })]
          }), (0, cq.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, cq.jsx)(hg.g, {
              className: "ReplayViewerCompactButton",
              onClick: rq,
              children: "Use current view"
            }), (0, cq.jsx)(hg.p, {
              className: "ReplayViewerCompactButton",
              onClick: yq,
              children: "Apply"
            }), (0, cq.jsx)(hg.K, {
              className: "ReplayViewerCompactButton",
              onClick: tq,
              children: "Delete"
            })]
          })]
        })
      })),
      iO = (0, Yq.memo)((function(qq) {
        var Eq, gq, lq;
        let {
          anchor: mq,
          hasPlaybackMark: xq,
          onClose: Aq,
          onMark: uq,
          onZoom: Bq,
          onCrop: Wq,
          onDeleteKeyframes: Nq,
          onClearMark: aq
        } = qq;
        const Vq = (0, Yq.useRef)(null),
          dq = vO(Vq, mq.rect),
          jq = rO(mq.rect),
          Hq = {
            startTick: mq.startTick,
            endTick: mq.endTick
          },
          oq = mq.endTick > mq.startTick;
        return hO(Vq, Aq), (0, cq.jsx)("div", {
          ref: Vq,
          className: Oq()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (Eq = null === dq || void 0 === dq ? void 0 : dq.placeBelow) && void 0 !== Eq && Eq,
            Positioned: null !== dq
          }),
          style: {
            left: `${null!==(gq=null===dq||void 0===dq?void 0:dq.left)&&void 0!==gq?gq:jq.left}px`,
            top: `${null!==(lq=null===dq||void 0===dq?void 0:dq.top)&&void 0!==lq?lq:jq.top}px`
          },
          onPointerDown: qq => {
            qq.stopPropagation()
          },
          children: (0, cq.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, cq.jsx)(hg.p, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                uq(Hq)
              },
              disabled: !oq,
              children: (0, cq.jsx)("span", {
                children: " Play range "
              })
            }), (0, cq.jsx)(hg.g, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Bq(Hq)
              },
              children: (0, cq.jsx)("span", {
                children: " Zoom "
              })
            }), (0, cq.jsx)(hg.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Wq(Hq)
              },
              disabled: !oq,
              children: (0, cq.jsx)("span", {
                children: " Crop "
              })
            }), (0, cq.jsx)(hg.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Nq(Hq)
              },
              children: (0, cq.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), xq && (0, cq.jsx)(hg.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                aq()
              },
              children: (0, cq.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      ZO = (0, Yq.memo)((function(qq) {
        var Eq, gq;
        let {
          maxTick: lq,
          displayTick: mq,
          bJ: xq,
          cameraKeyframes: Aq,
          playbackMark: uq,
          onSeek: Bq,
          onPause: Wq,
          onScrubTickChange: Nq,
          onMoveCameraKeyframe: aq,
          onUpdateCameraKeyframe: Vq,
          onDeleteCameraKeyframe: dq,
          onUseCurrentCamera: jq,
          onMarkRange: Hq,
          onCropRange: oq,
          onDeleteKeyframesInRange: Pq,
          onClearMark: Qq,
          zoomLevel: yq,
          onZoomLevelChange: tq
        } = qq;
        const rq = (0, Yq.useRef)(null),
          vq = (0, Yq.useRef)(null),
          hq = (0, Yq.useRef)(!1),
          nq = (0, Yq.useRef)(!1),
          bq = (0, Yq.useRef)(yq),
          iq = (0, Yq.useRef)(null),
          Zq = (0, Yq.useRef)(null),
          fq = (0, Yq.useRef)(null),
          Mq = (0, Yq.useRef)(null),
          [Tq, zq] = (0, Yq.useState)(null),
          [Sq, pq] = (0, Yq.useState)(mq),
          [Gq, Lq] = (0, Yq.useState)(null),
          [Jq, kq] = (0, Yq.useState)(null),
          [Rq, Uq] = (0, Yq.useState)(null),
          [Fq, sq] = (0, Yq.useState)(null),
          Xq = (0, Yq.useMemo)((() => Aq.map((qq => qq.SB))), [Aq]),
          wq = null !== Tq && void 0 !== Tq ? Tq : mq,
          {
            viewStart: Kq,
            viewEnd: Cq
          } = (0, Yq.useMemo)((() => function(qq) {
            const Eq = qq.maxTick + 1,
              gq = Math.max(1, Math.ceil(Eq / qq.zoomLevel)),
              Yq = Math.floor(gq / 2);
            let lq = qq.centerTick - Yq;
            return lq = Math.max(0, Math.min(lq, qq.maxTick - gq + 1)), {
              viewStart: lq,
              viewEnd: Math.min(qq.maxTick, lq + gq - 1)
            }
          }({
            maxTick: lq,
            zoomLevel: yq,
            centerTick: Sq
          })), [lq, yq, Sq]);
        (0, Yq.useEffect)((() => {
          if (null !== Tq || null !== Zq.current || null !== fq.current || null !== Mq.current) return;
          if (hq.current) return void(hq.current = !1);
          if (nq.current) return void(nq.current = !1);
          const qq = bq.current !== yq;
          bq.current = yq, qq && pq(mq)
        }), [yq, mq, Tq]);
        const Iq = (0, Yq.useCallback)((qq => {
            let Eq = YO(qq, lq);
            return uq && (Eq = Math.max(uq.inTick, Math.min(Eq, uq.outTick))), Eq
          }), [lq, uq]),
          eq = (0, Yq.useCallback)(((qq, Eq) => {
            const gq = Iq(qq);
            Bq(gq), Eq && pq(gq)
          }), [Iq, Bq]),
          Dq = (0, Yq.useCallback)(((qq, Eq) => {
            const gq = Iq(qq);
            zq(gq), Nq(gq), eq(gq, Eq)
          }), [Iq, eq, Nq]),
          qE = (0, Yq.useCallback)((() => {
            zq((qq => (null !== qq && pq(qq), null))), Nq(null)
          }), [Nq]),
          EE = (0, Yq.useCallback)((() => {
            Uq(null), sq(null)
          }), []),
          gE = (0, Yq.useCallback)((qq => {
            const Eq = rq.current;
            if (!Eq) return 0;
            return YO(OO(cO(qq, Eq), Kq, Cq), lq)
          }), [lq, Cq, Kq]),
          YE = (0, Yq.useCallback)((qq => {
            const Eq = vq.current;
            if (!Eq) return 0;
            return YO(OO(cO(qq, Eq), 0, lq), lq)
          }), [lq]),
          lE = (0, Yq.useMemo)((() => {
            if (!Gq) return [...Xq];
            const qq = Xq.filter((qq => qq !== Gq.fromTick));
            return qq.push(Gq.previewTick), qq.sort(((qq, Eq) => qq - Eq)), qq
          }), [Xq, Gq]),
          OE = (0, Yq.useMemo)((() => {
            var qq;
            return Jq && null !== (qq = Aq.find((qq => qq.SB === Jq.SB))) && void 0 !== qq ? qq : null
          }), [Aq, Jq]),
          mE = (0, Yq.useMemo)((() => !!OE && Aq.some((qq => qq.SB > OE.SB))), [Aq, OE]);
        (0, Yq.useEffect)((() => {
          Jq && !OE && kq(null)
        }), [Jq, OE]), (0, Yq.useEffect)((() => {
          if (!Fq) return () => {};
          const qq = qq => {
            "Escape" === qq.key && EE()
          };
          return window.addEventListener("keydown", qq), () => {
            window.removeEventListener("keydown", qq)
          }
        }), [EE, Fq]);
        const xE = (0, Yq.useCallback)(((qq, Eq) => {
            EE(), Wq(), Bq(qq, {
              ignorePlaybackMark: !0
            }), kq({
              SB: qq,
              rect: Eq.getBoundingClientRect()
            })
          }), [EE, Wq, Bq]),
          AE = (0, Yq.useCallback)(((qq, Eq) => gq => {
            0 === gq.button && (gq.stopPropagation(), kq(null), EE(), Wq(), iq.current = {
              fromTick: qq,
              startX: gq.clientX,
              startY: gq.clientY,
              didDrag: !1,
              track: Eq
            }, Lq({
              fromTick: qq,
              previewTick: qq,
              track: Eq
            }), gq.currentTarget.setPointerCapture(gq.pointerId))
          }), [EE, Wq]),
          cE = (0, Yq.useCallback)((qq => {
            if (!Gq) return;
            qq.stopPropagation();
            const Eq = iq.current;
            if (Eq && !Eq.didDrag) {
              const gq = qq.clientX - Eq.startX,
                Yq = qq.clientY - Eq.startY;
              Math.hypot(gq, Yq) > 5 && (Eq.didDrag = !0)
            }
            const gq = "detail" === Gq.track ? gE(qq.clientX) : YE(qq.clientX);
            gq !== Gq.previewTick && Lq({
              ...Gq,
              previewTick: gq
            })
          }), [Gq, gE, YE]),
          uE = (0, Yq.useCallback)((qq => {
            if (!Gq) return;
            qq.stopPropagation();
            const Eq = iq.current,
              gq = "detail" === Gq.track ? gE(qq.clientX) : YE(qq.clientX);
            Eq && !Eq.didDrag ? xE(Eq.fromTick, qq.currentTarget) : gq !== Gq.fromTick && aq(Gq.fromTick, gq), Lq(null), iq.current = null, qq.currentTarget.releasePointerCapture(qq.pointerId)
          }), [Gq, aq, xE, gE, YE]),
          BE = (0, Yq.useCallback)((qq => {
            if (0 !== qq.button) return;
            kq(null), Wq();
            const Eq = gE(qq.clientX);
            Zq.current = {
              pointerId: qq.pointerId,
              startX: qq.clientX,
              startY: qq.clientY,
              startTick: Eq,
              currentTick: Eq,
              didSelect: !1
            }, Uq(null), sq(null), qq.currentTarget.setPointerCapture(qq.pointerId)
          }), [Wq, gE]),
          WE = (0, Yq.useCallback)((qq => {
            const Eq = Zq.current;
            if (!Eq || Eq.pointerId !== qq.pointerId) return;
            const gq = gE(qq.clientX);
            if (Eq.currentTick = gq, !Eq.didSelect) {
              const gq = qq.clientX - Eq.startX,
                Yq = qq.clientY - Eq.startY;
              if (Math.hypot(gq, Yq) <= 5) return;
              Eq.didSelect = !0
            }
            const Yq = Math.min(Eq.startTick, gq),
              lq = Math.max(Eq.startTick, gq);
            Uq({
              startTick: Yq,
              endTick: lq
            })
          }), [gE]),
          NE = (0, Yq.useCallback)((qq => {
            const Eq = Zq.current;
            if (!Eq || Eq.pointerId !== qq.pointerId) return;
            if (Zq.current = null, qq.currentTarget.releasePointerCapture(qq.pointerId), !Eq.didSelect) return EE(), void eq(Eq.startTick, !0);
            const gq = gE(qq.clientX),
              Yq = Math.min(Eq.startTick, gq),
              lq = Math.max(Eq.startTick, gq),
              Oq = {
                startTick: Yq,
                endTick: lq
              };
            Uq(Oq);
            const mq = rq.current;
            if (!mq) return;
            const xq = mq.getBoundingClientRect(),
              Aq = lO(Yq, Kq, Cq) / 100,
              cq = lO(lq, Kq, Cq) / 100,
              uq = xq.left + Aq * xq.width,
              Bq = xq.left + cq * xq.width;
            sq({
              ...Oq,
              rect: new DOMRect(uq, xq.top, Math.max(Bq - uq, 1), xq.height)
            })
          }), [EE, eq, gE, Cq, Kq]),
          aE = (0, Yq.useCallback)((qq => Eq => {
            if (0 !== Eq.button) return;
            Eq.stopPropagation(), kq(null), EE(), Wq(), fq.current = {
              pointerId: Eq.pointerId,
              track: qq
            }, Eq.currentTarget.setPointerCapture(Eq.pointerId);
            const gq = "detail" === qq ? gE(Eq.clientX) : YE(Eq.clientX);
            Dq(gq, !1)
          }), [EE, Wq, Dq, gE, YE]),
          VE = (0, Yq.useCallback)((qq => {
            const Eq = fq.current;
            if (!Eq || Eq.pointerId !== qq.pointerId) return;
            qq.stopPropagation();
            const gq = "detail" === Eq.track ? gE(qq.clientX) : YE(qq.clientX);
            Dq(gq, !1)
          }), [Dq, gE, YE]),
          dE = (0, Yq.useCallback)((qq => {
            const Eq = fq.current;
            Eq && Eq.pointerId === qq.pointerId && (qq.stopPropagation(), fq.current = null, qq.currentTarget.releasePointerCapture(qq.pointerId), qE())
          }), [qE]),
          jE = (0, Yq.useCallback)((qq => {
            0 === qq.button && (EE(), Wq(), Mq.current = {
              pointerId: qq.pointerId
            }, qq.currentTarget.setPointerCapture(qq.pointerId), Dq(YE(qq.clientX), !0))
          }), [EE, Wq, Dq, YE]),
          HE = (0, Yq.useCallback)((qq => {
            const Eq = Mq.current;
            Eq && Eq.pointerId === qq.pointerId && Dq(YE(qq.clientX), !0)
          }), [Dq, YE]),
          oE = (0, Yq.useCallback)((qq => {
            const Eq = Mq.current;
            Eq && Eq.pointerId === qq.pointerId && (Mq.current = null, qq.currentTarget.releasePointerCapture(qq.pointerId), qE())
          }), [qE]),
          PE = (0, Yq.useCallback)((qq => {
            const Eq = Math.max(1, qq.endTick - qq.startTick + 1),
              gq = lq + 1,
              Yq = gq / Eq,
              Oq = Math.max(1, Math.ceil(gq / Yq)),
              mq = qq.startTick + Math.floor((Oq - 1) / 2);
            nq.current = !0, bq.current = Yq, pq(YO(mq, lq)), tq(Yq), EE()
          }), [EE, lq, tq]),
          QE = (0, Yq.useCallback)((qq => {
            Hq(qq), EE()
          }), [EE, Hq]),
          yE = (0, Yq.useCallback)((qq => {
            oq(qq), EE()
          }), [EE, oq]),
          tE = (0, Yq.useCallback)((qq => {
            Pq(qq), EE()
          }), [EE, Pq]),
          rE = (0, Yq.useCallback)((() => {
            Qq(), EE()
          }), [EE, Qq]);
        (0, Yq.useEffect)((() => {
          const qq = rq.current;
          if (!qq) return () => {};
          const Eq = Eq => {
            Eq.preventDefault();
            const gq = YO(OO(cO(Eq.clientX, qq), Kq, Cq), lq),
              Yq = Eq.deltaY < 0 ? "in" : "out",
              Oq = AO(yq, Yq);
            Oq !== yq && (hq.current = !0, pq(gq), tq(Oq))
          };
          return qq.addEventListener("wheel", Eq, {
            passive: !1
          }), () => {
            qq.removeEventListener("wheel", Eq)
          }
        }), [lq, tq, Cq, Kq, yq]);
        const vE = lO(wq, Kq, Cq),
          hE = uO(wq, lq),
          nE = uO(Kq, lq),
          bE = lq > 0 ? uO(Cq, lq) : 100,
          iE = null !== uq,
          ZE = null !== (Eq = null === uq || void 0 === uq ? void 0 : uq.inTick) && void 0 !== Eq ? Eq : 0,
          fE = null !== (gq = null === uq || void 0 === uq ? void 0 : uq.outTick) && void 0 !== gq ? gq : lq,
          ME = uO(ZE, lq),
          TE = Math.max(uO(fE, lq) - ME, 0),
          zE = lO(Math.max(ZE, Kq), Kq, Cq),
          SE = lO(Math.min(fE, Cq), Kq, Cq),
          pE = Math.max(SE - zE, 0),
          GE = iE && fE >= Kq && ZE <= Cq,
          LE = lO(ZE, Kq, Cq),
          JE = lO(fE, Kq, Cq),
          kE = iE && ZE >= Kq && ZE <= Cq,
          RE = iE && fE >= Kq && fE <= Cq,
          UE = uO(ZE, lq),
          FE = uO(fE, lq),
          sE = null !== Rq && void 0 !== Rq ? Rq : Fq ? {
            startTick: Fq.startTick,
            endTick: Fq.endTick
          } : null,
          XE = sE ? lO(Math.max(sE.startTick, Kq), Kq, Cq) : 0,
          wE = sE ? lO(Math.min(sE.endTick, Cq), Kq, Cq) : 0,
          KE = Math.max(wE - XE, 0),
          CE = null !== sE && sE.endTick >= Kq && sE.startTick <= Cq,
          IE = (0, Yq.useMemo)((() => BO(0, lq, xq)), [lq, xq]),
          eE = (0, Yq.useMemo)((() => BO(Kq, Cq, xq)), [Kq, Cq, xq]),
          DE = (0, Yq.useMemo)((() => lE.filter((qq => qq >= Kq && qq <= Cq))), [lE, Cq, Kq]),
          qg = (0, Yq.useCallback)(((qq, Eq, gq) => {
            const Yq = "detail" === Eq ? lO(qq, Kq, Cq) : uO(qq, lq),
              mq = null !== Gq && gq === Gq.fromTick,
              xq = null !== Jq && Jq.SB === gq;
            return (0, cq.jsx)("button", {
              type: "button",
              className: Oq()("ReplayTimelineCameraKeyframeMarker", "detail" === Eq ? "Detail" : "Overview", {
                Dragging: mq,
                Selected: xq
              }),
              style: {
                left: `${Yq}%`
              },
              onPointerDown: AE(gq, Eq),
              onPointerMove: cE,
              onPointerUp: uE,
              onPointerCancel: uE,
              "aria-label": `Camera keyframe at tick ${gq}`
            }, `cam-${Eq}-${gq}`)
          }), [AE, Jq, uE, Gq, lq, cE, Cq, Kq]),
          Eg = (0, Yq.useCallback)((qq => Gq && qq === Gq.previewTick ? Gq.fromTick : qq), [Gq]);
        return lq <= 0 ? null : (0, cq.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Jq && OE && (0, EO.createPortal)((0, cq.jsx)(bO, {
            keyframe: OE,
            anchor: Jq,
            hasOutgoingSegment: mE,
            onClose: () => {
              kq(null)
            },
            onApply: Vq,
            onDelete: dq,
            onUseCurrentCamera: jq
          }), document.body), Fq && (0, EO.createPortal)((0, cq.jsx)(iO, {
            anchor: Fq,
            hasPlaybackMark: iE,
            onClose: EE,
            onMark: QE,
            onZoom: PE,
            onCrop: yE,
            onDeleteKeyframes: tE,
            onClearMark: rE
          }), document.body), (0, cq.jsxs)("div", {
            className: Oq()("ReplayTimelineOverviewSection", {
              Hidden: yq <= 1
            }),
            children: [(0, cq.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, cq.jsxs)("div", {
              ref: vq,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: jE,
              onPointerMove: HE,
              onPointerUp: oE,
              onPointerCancel: oE,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": lq,
              "aria-valuenow": wq,
              tabIndex: 0,
              children: [IE.map((qq => {
                const Eq = uO(qq, lq);
                return (0, cq.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${Eq}%`
                  }
                }, qq)
              })), iE && (0, cq.jsxs)(cq.Fragment, {
                children: [(0, cq.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${ME}%`,
                    width: `${TE}%`
                  }
                }), (0, cq.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${UE}%`
                  },
                  "aria-hidden": !0
                }), (0, cq.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${FE}%`
                  },
                  "aria-hidden": !0
                })]
              }), lE.map((qq => qg(qq, "overview", Eg(qq)))), (0, cq.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${nE}%`,
                  width: `${Math.max(bE-nE,.5)}%`
                }
              }), (0, cq.jsx)("button", {
                type: "button",
                className: Oq()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Tq
                }),
                style: {
                  left: `${hE}%`
                },
                onPointerDown: aE("overview"),
                onPointerMove: VE,
                onPointerUp: dE,
                onPointerCancel: dE,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, cq.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, cq.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, cq.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, cq.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [mO(Kq, xq), " \u2013 ", mO(Cq, xq), yq > 1 && (0, cq.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: xO(yq)
                })]
              })]
            }), (0, cq.jsxs)("div", {
              ref: rq,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: BE,
              onPointerMove: WE,
              onPointerUp: NE,
              onPointerCancel: NE,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Kq,
              "aria-valuemax": Cq,
              "aria-valuenow": wq,
              tabIndex: 0,
              children: [eE.map((qq => {
                const Eq = lO(qq, Kq, Cq);
                return (0, cq.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${Eq}%`
                  }
                }, qq)
              })), GE && (0, cq.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${zE}%`,
                  width: `${pE}%`
                }
              }), kE && (0, cq.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${LE}%`
                },
                "aria-label": `Play range start at tick ${ZE}`
              }), RE && (0, cq.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${JE}%`
                },
                "aria-label": `Play range end at tick ${fE}`
              }), CE && sE && (0, cq.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${XE}%`,
                  width: `${KE}%`
                }
              }), DE.map((qq => qg(qq, "detail", Eg(qq)))), (0, cq.jsx)("button", {
                type: "button",
                className: Oq()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Tq
                }),
                style: {
                  left: `${vE}%`
                },
                onPointerDown: aE("detail"),
                onPointerMove: VE,
                onPointerUp: dE,
                onPointerCancel: dE,
                "aria-label": "Scrub playhead"
              })]
            }), (0, cq.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, cq.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      fO = (0, Yq.memo)((function(qq) {
        let {
          enabled: Eq
        } = qq;
        const gq = (0, Yq.useRef)(!1),
          lq = (0, Yq.useRef)(null),
          [mq, xq] = (0, Yq.useState)(!1),
          Aq = (0, Yq.useCallback)((qq => {
            Eq && 0 === qq.button && (gq.current = !0, xq(!0), lq.current = {
              x: qq.clientX,
              y: qq.clientY
            }, qq.currentTarget.setPointerCapture(qq.pointerId))
          }), [Eq]),
          uq = (0, Yq.useCallback)((qq => {
            if (!Eq || !gq.current || !lq.current) return;
            const Yq = qq.clientX - lq.current.x,
              Oq = qq.clientY - lq.current.y;
            lq.current = {
              x: qq.clientX,
              y: qq.clientY
            }, Wq.gameBridge.send("dragReplayCamera", {
              dx: Yq,
              dy: Oq
            })
          }), [Eq]),
          Bq = (0, Yq.useCallback)((qq => {
            gq.current && (gq.current = !1, xq(!1), lq.current = null, qq.currentTarget.releasePointerCapture(qq.pointerId))
          }), []);
        return Eq ? (0, cq.jsx)("div", {
          className: Oq()("ReplayViewerCameraDragSurface", {
            Dragging: mq
          }),
          onPointerDown: Aq,
          onPointerMove: uq,
          onPointerUp: Bq,
          onPointerCancel: Bq,
          "aria-hidden": !0
        }) : null
      }));
    var MO = gq(37050),
      TO = gq(37054);
    const zO = (0, Yq.memo)((function(qq) {
        var Eq, gq, lq;
        let {
          anchorRect: mq,
          anchorRef: Aq,
          onClose: uq
        } = qq;
        const Bq = (0, Yq.useRef)(null),
          Wq = vO(Bq, mq),
          [Nq, aq] = (0, Yq.useState)(TO.c),
          Vq = (0, Yq.useMemo)((() => Object.values(Nq).every((qq => qq))), [Nq]);
        (0, xq.f)("replayViewer|uiVisibilityChanged", (() => {
          aq((0, TO.c)())
        })), hO(Bq, uq, Aq);
        const dq = (0, Yq.useCallback)(((qq, Eq) => {
            (0, TO.i)(qq, Eq), aq((0, TO.c)())
          }), []),
          jq = (0, Yq.useCallback)((qq => {
            for (const {
                group: Eq
              }
              of MO.e)(0, TO.i)(Eq, qq);
            aq((0, TO.c)())
          }), []),
          Hq = rO(mq);
        return (0, EO.createPortal)((0, cq.jsxs)("div", {
          ref: Bq,
          className: Oq()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (Eq = null === Wq || void 0 === Wq ? void 0 : Wq.placeBelow) && void 0 !== Eq && Eq,
            Positioned: null !== Wq
          }),
          style: {
            left: `${null!==(gq=null===Wq||void 0===Wq?void 0:Wq.left)&&void 0!==gq?gq:Hq.left}px`,
            top: `${null!==(lq=null===Wq||void 0===Wq?void 0:Wq.top)&&void 0!==lq?lq:Hq.top}px`
          },
          onPointerDown: qq => {
            qq.stopPropagation()
          },
          children: [(0, cq.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, cq.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, cq.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, cq.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, cq.jsx)("input", {
                type: "checkbox",
                checked: Vq,
                onChange: qq => {
                  jq(qq.target.checked)
                }
              }), (0, cq.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), MO.e.map((qq => {
              let {
                group: Eq,
                label: gq
              } = qq;
              return (0, cq.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, cq.jsx)("input", {
                  type: "checkbox",
                  checked: Nq[Eq],
                  onChange: qq => {
                    dq(Eq, qq.target.checked)
                  }
                }), (0, cq.jsx)("span", {
                  children: gq
                })]
              }, Eq)
            }))]
          })]
        }), document.body)
      })),
      SO = (0, Yq.memo)((function(qq) {
        let {
          disabled: Eq
        } = qq;
        const gq = (0, Yq.useRef)(null),
          [lq, Oq] = (0, Yq.useState)(!1),
          [mq, xq] = (0, Yq.useState)(null),
          Aq = (0, Yq.useCallback)((() => {
            gq.current && (xq(gq.current.getBoundingClientRect()), Oq((qq => !qq)))
          }), []),
          uq = (0, Yq.useCallback)((() => {
            Oq(!1)
          }), []);
        return (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)("div", {
            ref: gq,
            children: (0, cq.jsx)(hg.g, {
              className: "ReplayViewerActionButton",
              onClick: Aq,
              disabled: Eq,
              children: (0, cq.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), lq && mq && (0, cq.jsx)(zO, {
            anchorRect: mq,
            anchorRef: gq,
            onClose: uq
          })]
        })
      })),
      pO = ["freeCamUp", "freeCamDown"];

    function GO(qq, Eq) {
      Wq.gameBridge.send("holdReplayFreecamVertical", {
        action: qq,
        Fc: Eq
      })
    }
    const LO = (0, Yq.memo)((function() {
        (0, Yq.useEffect)((() => () => {
          ! function() {
            Wq.gameBridge.send("moveReplayFreecam", null);
            for (const qq of pO) GO(qq, !1)
          }()
        }), []);
        const qq = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("moveReplayFreecam", qq)
          }), []),
          Eq = (0, Yq.useCallback)((qq => ({
            onTouchStart: Eq => {
              Eq.preventDefault(), Eq.stopPropagation(), GO(qq, !0)
            },
            onTouchEnd: Eq => {
              Eq.preventDefault(), Eq.stopPropagation(), GO(qq, !1)
            },
            onTouchCancel: Eq => {
              Eq.preventDefault(), Eq.stopPropagation(), GO(qq, !1)
            }
          })), []);
        return (0, cq.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, cq.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, cq.jsx)(rE, {
              onMove: qq,
              mode: "pinned"
            })
          }), (0, cq.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, cq.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...Eq("freeCamUp"),
              children: (0, cq.jsx)(pq.d, {
                name: "angle-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, cq.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...Eq("freeCamDown"),
              children: (0, cq.jsx)(pq.d, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      JO = [],
      kO = (0, Yq.memo)((function() {
        const qq = (0, wq.o)();
        return (0, tq.d)("replayViewerRequested", (qq => {
          (0, wq.l)("toggle" === qq ? !(0, wq.i)() : "open" === qq)
        })), qq ? (0, cq.jsx)(RO, {}) : null
      })),
      RO = (0, Yq.memo)((function() {
        var qq, Eq, gq, lq, mq, xq, Aq, uq, Bq, Nq, aq, Vq;
        const dq = Yq.useRef(null),
          [jq, Hq] = (0, Yq.useState)(null),
          [oq, Pq] = (0, Yq.useState)(1),
          [Qq, yq] = (0, Yq.useState)(null),
          [hq, nq] = (0, Yq.useState)(!1),
          {
            isTouchScreen: bq
          } = (0, rq.j)(["isTouchScreen"]),
          iq = (0, tq.g)("replay"),
          Zq = (0, tq.g)("replayEdits"),
          fq = null !== iq,
          Mq = null !== (qq = null === iq || void 0 === iq ? void 0 : iq.SB) && void 0 !== qq ? qq : 0,
          Tq = null !== (Eq = null === iq || void 0 === iq ? void 0 : iq.totalTicks) && void 0 !== Eq ? Eq : 0,
          zq = Math.max(0, Tq - 1),
          Gq = null !== (gq = null === iq || void 0 === iq ? void 0 : iq.playing) && void 0 !== gq && gq,
          Lq = null !== (lq = null === iq || void 0 === iq ? void 0 : iq.speed) && void 0 !== lq ? lq : 1,
          Jq = null !== (mq = null === iq || void 0 === iq ? void 0 : iq.bJ) && void 0 !== mq ? mq : 20,
          kq = null !== Qq && void 0 !== Qq ? Qq : Mq,
          Rq = null !== (xq = null === iq || void 0 === iq ? void 0 : iq.freecam) && void 0 !== xq && xq,
          Uq = null !== (Aq = null === iq || void 0 === iq ? void 0 : iq.cameraMode) && void 0 !== Aq ? Aq : "recording",
          Fq = null !== (uq = null === Zq || void 0 === Zq ? void 0 : Zq.cameraKeyframes) && void 0 !== uq ? uq : JO,
          sq = null !== (Bq = null === Zq || void 0 === Zq ? void 0 : Zq.playbackMark) && void 0 !== Bq ? Bq : null,
          Xq = null !== (Nq = null === Zq || void 0 === Zq ? void 0 : Zq.fileName) && void 0 !== Nq ? Nq : null,
          Kq = null !== (aq = null === Zq || void 0 === Zq ? void 0 : Zq.unsavedChanges) && void 0 !== aq && aq,
          Cq = null !== (Vq = null === Zq || void 0 === Zq ? void 0 : Zq.suggestSaveAs) && void 0 !== Vq && Vq,
          Iq = (0, tq.g)("replayVideoExporting"),
          eq = !Iq && fq && ("freecam" === Uq || ("recording" === Uq || "keyframe" === Uq) && !Gq),
          Dq = bq && fq && "freecam" === Uq && !Iq && !hq;
        (0, qO.e)(!0, !0, "ReplayViewerOverlay"), (0, Yq.useEffect)((() => {
          Wq.gameBridge.send("syncReplayCameraMode", null)
        }), [Rq]);
        const qE = (0, Yq.useCallback)(((qq, Eq) => {
            Wq.gameBridge.send("seekReplay", {
              SB: qq,
              ignorePlaybackMark: null === Eq || void 0 === Eq ? void 0 : Eq.ignorePlaybackMark
            })
          }), []),
          EE = (0, Yq.useCallback)((() => {
            Wq.gameBridge.send("setReplayPlaying", !1)
          }), []),
          gE = (0, Yq.useCallback)(((qq, Eq) => {
            Wq.gameBridge.send("moveReplayCameraKeyframe", {
              from: qq,
              to: Eq
            })
          }), []),
          YE = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("setReplayCameraKeyframe", qq)
          }), []),
          lE = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("deleteReplayCameraKeyframes", {
              start: qq,
              end: qq
            })
          }), []),
          OE = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("deleteReplayCameraKeyframes", {
              start: qq.startTick,
              end: qq.endTick
            })
          }), []),
          mE = (0, Yq.useCallback)((() => Wq.gameBridge.lookup("replayCamera", null)), []),
          xE = (0, Yq.useCallback)((qq => {
            yq(qq)
          }), []),
          AE = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("setReplayPlaybackMark", {
              inTick: qq.startTick,
              outTick: qq.endTick
            })
          }), []),
          cE = (0, Yq.useCallback)((() => {
            Wq.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          uE = (0, Yq.useCallback)((qq => {
            const Eq = Wq.gameBridge.latest("replay");
            if (null === Eq || qq.endTick <= qq.startTick) return;
            const gq = qq.startTick,
              Yq = qq.endTick;
            CY.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((qq => {
              var lq;
              if (!0 !== qq) return;
              if ((null === (lq = Wq.gameBridge.latest("replay")) || void 0 === lq ? void 0 : lq.id) !== Eq.id) return;
              Wq.gameBridge.send("cropReplay", {
                start: gq,
                end: Yq
              }) && (yq(null), Pq(1))
            }))
          }), []),
          BE = (0, Yq.useCallback)(((qq, Eq) => {
            Hq(null), Pq(1), yq(null), (0, Fl.c)().open(qq, Eq).catch((qq => {
              console.error(qq), Hq(qq instanceof Error ? qq.message : "Failed to parse recording")
            }))
          }), []),
          WE = (0, Yq.useCallback)(((qq, Eq) => {
            null !== Wq.gameBridge.latest("connectedGame").websocketUrl ? CY.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((gq => {
              !0 === gq && BE(qq, Eq)
            })) : BE(qq, Eq)
          }), [BE]),
          NE = (0, Yq.useCallback)((qq => {
            var Eq;
            const gq = null === (Eq = qq.target.files) || void 0 === Eq ? void 0 : Eq[0];
            if (qq.target.value = "", !gq) return;
            const Yq = new FileReader;
            Yq.onload = () => {
              WE(new Uint8Array(Yq.result), {
                fileName: gq.name
              })
            }, Yq.onerror = () => {
              Hq("Failed to read file")
            }, Yq.readAsArrayBuffer(gq)
          }), [WE]),
          aE = (0, Yq.useCallback)((() => {
            const qq = () => {
              var qq;
              null === (qq = dq.current) || void 0 === qq || qq.click()
            };
            (0, wl.j)() ? (0, wl.d)().then((qq => {
              qq && WE(qq.bytes, {
                fileHandle: qq.handle
              })
            })).catch((Eq => {
              console.error(Eq), qq()
            })): qq()
          }), [WE]),
          VE = (0, Yq.useCallback)((async function() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let Eq;
            try {
              Eq = await Dl(qq, {
                files: (0, Fl.c)(),
                pickerSupported: wl.j,
                chooseFile: wl.c,
                write: wl.k,
                download: Xl.h,
                onFallback: console.error
              })
            } catch (gq) {
              return void(qq => {
                console.error(qq), CY.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: Cl(qq),
                  confirmText: "OK"
                })
              })(gq)
            }
            "written" !== Eq && "downloaded" !== Eq || (() => {
              const qq = CY.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                qq.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          dE = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("replayAction", qq)
          }), []),
          jE = (0, Yq.useCallback)((qq => {
            Pq((Eq => AO(Eq, qq)))
          }), []),
          HE = (0, Yq.useCallback)((qq => {
            if (!Wq.gameBridge.latest("replayVideoExporting")) switch (qq) {
              case "replayLoad":
                aE();
                break;
              case "replaySave":
                VE(!1);
                break;
              case "replaySaveAs":
                VE(!0);
                break;
              case "replayTimelineZoomIn":
                jE("in");
                break;
              case "replayTimelineZoomOut":
                jE("out")
            }
          }), [aE, VE, jE]);
        (0, tq.d)("replayUiActionRequested", HE);
        const oE = (0, Yq.useCallback)((qq => {
            Wq.gameBridge.send("setReplayCameraMode", qq)
          }), []),
          PE = fq ? hg.g : hg.p,
          QE = Kq && !Cq ? hg.p : hg.g,
          yE = Kq && Cq ? hg.p : hg.g;
        return (0, cq.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, cq.jsx)(fO, {
            enabled: eq
          }), Dq && (0, cq.jsx)(LO, {}), (0, cq.jsx)("input", {
            ref: dq,
            type: "file",
            accept: Xl.d,
            className: "ReplayViewerFileInput",
            onChange: NE
          }), (0, cq.jsxs)("div", {
            className: Oq()("ReplayViewerBar", {
              Collapsed: hq
            }),
            children: [(0, cq.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                hq ? nq(!1) : fq ? nq(!0) : (0, wq.e)()
              },
              "aria-expanded": !hq,
              "aria-label": hq ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, cq.jsx)(pq.d, {
                name: hq ? "angle-up" : "angle-down"
              })
            }), !hq && (0, cq.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [fq && Tq > 0 && (0, cq.jsx)(ZO, {
                maxTick: zq,
                displayTick: kq,
                bJ: Jq,
                cameraKeyframes: Fq,
                playbackMark: sq,
                onSeek: qE,
                onPause: EE,
                onScrubTickChange: xE,
                onMoveCameraKeyframe: gE,
                onUpdateCameraKeyframe: YE,
                onDeleteCameraKeyframe: lE,
                onUseCurrentCamera: mE,
                onMarkRange: AE,
                onCropRange: uE,
                onDeleteKeyframesInRange: OE,
                onClearMark: cE,
                zoomLevel: oq,
                onZoomLevelChange: Pq
              }, zq), (0, cq.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, cq.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, cq.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [fq && (0, cq.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Xq && void 0 !== Xq ? Xq : "Unsaved recording", Kq ? " *" : ""]
                    }), (0, cq.jsxs)(PE, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        HE("replayLoad")
                      },
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, cq.jsxs)(hg.g, {
                      className: "ReplayViewerActionButton",
                      onClick: wq.e,
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, cq.jsxs)(QE, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        HE("replaySave")
                      },
                      disabled: !fq,
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, cq.jsxs)(hg.g, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Wq.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !fq,
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, cq.jsxs)(yE, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        HE("replaySaveAs")
                      },
                      disabled: !fq,
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, cq.jsxs)(hg.g, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Wq.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !fq || 0 === Tq || Iq,
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, cq.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, cq.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, cq.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, cq.jsx)(vq.c, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, cq.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, cq.jsx)(Sq.e, {
                        tooltipInner: (0, cq.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, cq.jsxs)(hg.Q, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Uq,
                          onClick: () => {
                            oE("recording")
                          },
                          disabled: !fq,
                          children: ["Recorded ", (0, cq.jsx)(pq.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, cq.jsx)(Sq.e, {
                        tooltipInner: (0, cq.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, cq.jsxs)(hg.Q, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Uq,
                          onClick: () => {
                            oE("freecam")
                          },
                          disabled: !fq,
                          children: ["Free ", (0, cq.jsx)(pq.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, cq.jsx)(Sq.e, {
                        tooltipInner: (0, cq.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, cq.jsxs)(hg.Q, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Uq,
                          onClick: () => {
                            oE("keyframe")
                          },
                          disabled: !fq,
                          children: ["Preview ", (0, cq.jsx)(pq.d, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, cq.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, cq.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, cq.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, cq.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: mO(kq, Jq)
                      }), (0, cq.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, cq.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: mO(zq, Jq)
                      })]
                    }), (0, cq.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", kq, " / ", zq]
                    })]
                  }), (0, cq.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, cq.jsxs)(hg.g, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        dE("replaySkipBack")
                      },
                      disabled: !fq,
                      children: [(0, cq.jsxs)("span", {
                        children: [" ", (0, cq.jsx)(pq.d, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, cq.jsx)(vq.c, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, cq.jsxs)(hg.p, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Wq.gameBridge.send("setReplayPlaying", !Gq)
                      },
                      disabled: !fq,
                      children: [(0, cq.jsxs)("span", {
                        children: [" ", Gq ? (0, cq.jsx)(pq.d, {
                          name: "pause"
                        }) : (0, cq.jsx)(pq.d, {
                          name: "play"
                        }), " "]
                      }), (0, cq.jsx)(vq.c, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, cq.jsxs)(hg.g, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        dE("replaySkipForward")
                      },
                      disabled: !fq,
                      children: [(0, cq.jsxs)("span", {
                        children: [" ", (0, cq.jsx)(pq.d, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, cq.jsx)(vq.c, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, cq.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, cq.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, cq.jsxs)(hg.p, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        dE("replayRecordKeyframe")
                      },
                      disabled: !fq,
                      children: [(0, cq.jsx)(vq.c, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, cq.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, cq.jsx)(SO, {
                      disabled: !fq
                    }), sq && (0, cq.jsx)(hg.Q, {
                      className: "ReplayViewerActionButton",
                      onClick: cE,
                      disabled: !fq,
                      children: (0, cq.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, cq.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, cq.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, cq.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, cq.jsx)(hg.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          dE("replaySpeedDown")
                        },
                        disabled: !fq || (0, sl.h)(Lq),
                        children: (0, cq.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, cq.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Lq, "\xd7"]
                      }), (0, cq.jsx)(hg.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          dE("replaySpeedUp")
                        },
                        disabled: !fq || (0, sl.d)(Lq),
                        children: (0, cq.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, cq.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, cq.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, cq.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, cq.jsxs)(hg.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          HE("replayTimelineZoomOut")
                        },
                        disabled: !fq || oq <= gO[0],
                        children: [(0, cq.jsx)("span", {
                          children: " \u2212 "
                        }), (0, cq.jsx)(vq.c, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, cq.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: xO(oq)
                      }), (0, cq.jsxs)(hg.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          HE("replayTimelineZoomIn")
                        },
                        disabled: !fq || oq >= gO[gO.length - 1],
                        children: [(0, cq.jsx)("span", {
                          children: " + "
                        }), (0, cq.jsx)(vq.c, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, cq.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !fq && "Load a recording to begin playback"
              }), jq && (0, cq.jsx)("div", {
                className: "ReplayViewerError",
                children: jq
              })]
            })]
          })]
        })
      }));
    var UO = gq(1308);

    function FO() {
      const [, qq] = (0, Yq.useState)(0);
      return (0, xq.f)("replayViewer|uiVisibilityChanged", (() => {
          qq((qq => qq + 1))
        })), (0, xq.f)("replayViewer|replayLoaded", (() => {
          qq((qq => qq + 1))
        })),
        function() {
          if (!(0, UO.i)()) return {};
          const qq = {
              [MO.c]: "true"
            },
            Eq = (0, TO.c)();
          for (const {
              group: gq,
              dataAttr: Yq
            }
            of MO.e) Yq && !Eq[gq] && (qq[Yq] = "true");
          return qq
        }()
    }
    var sO = gq(9270),
      XO = gq(2052),
      wO = gq(8699),
      KO = gq(8686),
      CO = gq(2059);
    const IO = (0, Yq.memo)((function() {
      var qq, Eq, gq;
      const lq = (0, oq.h)("customButtons");
      (0, Yq.useEffect)((() => lq ? (Wq.gameBridge.send("bindCustomButtonKeys", lq.filter(wO.f).map((qq => {
        let {
          id: Eq,
          keycode: gq
        } = qq;
        return {
          id: Eq,
          keycode: gq
        }
      }))), () => {
        Wq.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [lq]);
      const Oq = null !== (qq = null === lq || void 0 === lq ? void 0 : lq.filter(wO.f)) && void 0 !== qq ? qq : [],
        mq = (0, KO.h)(),
        xq = null !== (Eq = null === (gq = (0, CO.d)()) || void 0 === gq ? void 0 : gq.hideButtonHints) && void 0 !== Eq && Eq,
        Aq = "customButton" !== (null === mq || void 0 === mq ? void 0 : mq.kind) || xq ? null : mq.id,
        uq = Oq.length > 0,
        Bq = (0, Yq.useRef)(null);
      return (0, Yq.useLayoutEffect)((() => {
        if (!uq) return () => {};
        const qq = Bq.current,
          Eq = qq.closest(".InGameUi"),
          gq = () => {
            Eq.style.setProperty("--custom-buttons-top", `${qq.offsetTop}px`)
          };
        gq();
        const Yq = new ResizeObserver(gq);
        return Yq.observe(qq), Yq.observe(qq.parentElement), () => {
          Yq.disconnect(), Eq.style.removeProperty("--custom-buttons-top")
        }
      }), [uq]), (0, cq.jsx)("div", {
        ref: Bq,
        className: "" + ((0, Nl.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Oq.map((qq => {
          var Eq, gq;
          return (0, cq.jsx)(eO, {
            button: qq,
            padGlyph: qq.id === Aq && null !== (Eq = null === (gq = (0, kq.g)()) || void 0 === gq ? void 0 : gq.getBoundButton("actionButton")) && void 0 !== Eq ? Eq : null
          }, qq.id)
        }))
      })
    }));

    function eO(qq) {
      let {
        button: Eq,
        padGlyph: gq
      } = qq;
      const lq = (0, Yq.useRef)(null),
        Oq = () => {
          null !== lq.current && (lq.current = null, Wq.gameBridge.send("pressCustomButton", {
            id: Eq.id,
            down: !1
          }))
        };
      (0, Yq.useEffect)((() => Oq), []);
      const mq = FE(Oq, {
          pressesOnPointerDown: !0
        }),
        xq = qq => {
          lq.current === qq.pointerId && Oq()
        };
      return (0, cq.jsxs)("div", {
        className: "CustomIcon",
        ...mq,
        onLostPointerCapture: xq,
        children: [(0, cq.jsx)(XO.e, {
          icon: Eq.icon,
          keyboardHint: (0, wO.b)(Eq.keycode),
          padGlyph: gq,
          onPointerDown: qq => {
            try {
              qq.currentTarget.setPointerCapture(qq.pointerId)
            } catch {
              return
            }
            null === lq.current && Wq.gameBridge.send("pressCustomButton", {
              id: Eq.id,
              down: !0
            }), lq.current = qq.pointerId
          },
          onPointerUp: xq,
          onPointerCancel: xq,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), Eq.description && (0, cq.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: Eq.description
        })]
      })
    }
    var DO = gq(2377),
      qm = gq(248);
    const Em = {
      frame: qq => {
        const Eq = requestAnimationFrame((() => {
          qq()
        }));
        return () => {
          cancelAnimationFrame(Eq)
        }
      },
      afterFrame: qq => {
        const Eq = setTimeout(qq, 0);
        return () => {
          clearTimeout(Eq)
        }
      }
    };
    class gm {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qm.e,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Em;
        this.idle = qq, this.frames = Eq, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (qq(), () => {}) : (Eq ? this.waiting.unshift(qq) : this.waiting.push(qq), this.schedule(), () => {
          const Eq = this.waiting.indexOf(qq);
          Eq >= 0 && (this.waiting.splice(Eq, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((qq => {
          for (this.cancelIdle = null; this.waiting.length > 0 && qq.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const qq = this.waiting.shift();
        try {
          qq()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var qq, Eq, gq;
        null === (qq = this.cancelIdle) || void 0 === qq || qq.call(this), this.cancelIdle = null, null === (Eq = this.cancelFrame) || void 0 === Eq || Eq.call(this), this.cancelFrame = null, null === (gq = this.cancelAfterFrame) || void 0 === gq || gq.call(this), this.cancelAfterFrame = null
      }
    }
    const Ym = (0, Yq.createContext)(null);

    function lm(qq) {
      let {
        children: Eq,
        first: gq = !1
      } = qq;
      const lq = (0, Yq.useContext)(Ym),
        [Oq, mq] = (0, Yq.useState)(null === lq);
      return (0, Yq.useEffect)((() => {
        if (!Oq && null !== lq) return lq.request((() => {
          mq(!0)
        }), gq)
      }), [gq, Oq, lq]), Oq ? (0, Yq.createElement)(Yq.Fragment, null, Eq) : null
    }
    const Om = (0, Yq.memo)((function(qq) {
        let {
          shown: Eq
        } = qq;
        const [gq] = (0, Yq.useState)((() => new aq.e(Eq))), [lq] = (0, Yq.useState)((() => Eq ? null : new gm));
        return (0, Yq.useLayoutEffect)((() => {
          Eq && (null === lq || void 0 === lq || lq.show(), gq.show())
        }), [Eq, gq, lq]), (0, cq.jsx)(aq.b.Provider, {
          value: gq,
          children: (0, cq.jsx)(Ym.Provider, {
            value: lq,
            children: (0, cq.jsx)(mm, {})
          })
        })
      })),
      mm = (0, Yq.memo)((function() {
        const {
          isUiHidden: qq,
          isUiHiddenByCamera: Eq,
          worldPanelHud: gq,
          isTouchScreen: lq
        } = (0, rq.j)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), mq = (0, wY.c)(), xq = FO(), Aq = (0, aq.j)(), uq = (0, Yq.useRef)(null), Bq = (0, oq.h)("showKillfeed");
        return function() {
            const qq = (0, aq.j)();
            (0, Yq.useEffect)((() => qq.whenShown(Vq)), [qq])
          }(),
          function() {
            const qq = (0, oq.h)("inventoryColourOverride");
            (0, Yq.useEffect)((() => {
              if (!qq) return;
              const {
                panel: Eq,
                slot: gq,
                slotSelected: Yq,
                slotUnavailable: lq
              } = Uq(qq), Oq = document.documentElement.style;
              return Oq.setProperty("--InventoryPanelColour", Eq), Oq.setProperty("--InventorySlotColour", gq), Oq.setProperty("--InventorySlotSelectedColour", Yq), Oq.setProperty("--InventorySlotUnavailableColour", lq), () => {
                Oq.removeProperty("--InventoryPanelColour"), Oq.removeProperty("--InventorySlotColour"), Oq.removeProperty("--InventorySlotSelectedColour"), Oq.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [qq])
          }(), (0, Yq.useLayoutEffect)((() => Aq.whenShown((() => {
            var qq;
            null === (qq = uq.current) || void 0 === qq || qq.classList.remove("PreMounted")
          }))), [Aq]), (0, cq.jsxs)(cq.Fragment, {
            children: [(0, cq.jsxs)("div", {
              ref: uq,
              className: Oq()("InGameUi", {
                PreMounted: !Aq.shown,
                Hidden: qq,
                HiddenByCamera: Eq,
                HiddenByWorldPanel: null !== gq,
                WorldPanelTouchControl: "touchControls" === gq
              }),
              ...xq,
              children: [(0, cq.jsxs)(lm, {
                children: [(0, cq.jsx)(Rg.b, {}), (0, cq.jsx)(wg, {})]
              }), (0, cq.jsx)(aq.g, {
                children: (0, cq.jsx)(Kg, {})
              }), (0, cq.jsxs)(lm, {
                children: [(0, cq.jsx)(Ql, {}), (0, cq.jsx)(bl, {}), lq && (0, cq.jsx)(Zl, {})]
              }), (0, cq.jsxs)(lm, {
                children: [(0, cq.jsx)(jg, {}), (0, cq.jsx)(AY.d, {}), (0, cq.jsx)(VY, {})]
              }), (0, cq.jsx)(aq.g, {
                children: (0, cq.jsx)(kg, {})
              }), (0, cq.jsxs)(lm, {
                children: [(0, cq.jsx)(vl.c, {}), (0, cq.jsx)(kO, {})]
              }), (0, cq.jsxs)(lm, {
                children: [(0, cq.jsx)(Ml.f, {}), (0, cq.jsx)(Tl.g, {})]
              }), (0, cq.jsx)(lm, {
                children: (0, cq.jsx)(og.j, {})
              }), (0, cq.jsx)(lm, {
                children: (0, cq.jsx)(Nm, {
                  showChat: mq
                })
              }), (0, cq.jsxs)(lm, {
                children: [(0, cq.jsx)(Sl, {}), (0, cq.jsx)(rl, {})]
              }), (0, cq.jsxs)("div", {
                className: Oq()("RightElements", {
                  RightElementsTouchscreen: lq
                }),
                "data-camera-keeper-host": "",
                children: [(0, cq.jsxs)("div", {
                  className: yY.i,
                  "data-holds-camera-keeper": "",
                  children: [(0, cq.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, cq.jsx)(lm, {
                      children: (0, cq.jsx)(cl.d, {})
                    }), (0, cq.jsxs)(lm, {
                      children: [(0, cq.jsx)(Gq, {}), (0, cq.jsx)(nY.b, {})]
                    }), Nl.featureFlags.useSocialFeatures && (0, cq.jsx)(aq.g, {
                      children: (0, cq.jsx)(bY.c, {
                        placement: "inGame"
                      })
                    }), Nl.featureFlags.useSocialFeatures && (0, cq.jsx)(aq.g, {
                      children: (0, cq.jsx)(RY, {})
                    }), Bq && (0, cq.jsx)(aq.g, {
                      children: (0, cq.jsx)(xY, {})
                    }), (0, cq.jsx)(lm, {
                      children: (0, cq.jsx)(sO.b, {})
                    })]
                  }), Nl.featureFlags.useSocialFeatures && (0, cq.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, cq.jsx)(lm, {
                      children: (0, cq.jsx)(ol.d, {})
                    })
                  })]
                }), (0, cq.jsxs)(lm, {
                  children: [(0, cq.jsx)(og.c, {
                    placement: "topRight"
                  }), (0, cq.jsx)(am, {})]
                })]
              }), (0, cq.jsx)("div", {
                className: "LeftCentre",
                children: (0, cq.jsx)(lm, {
                  children: (0, cq.jsx)(IO, {})
                })
              }), (0, cq.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": lq ? "" : void 0,
                children: [(0, cq.jsx)(aq.g, {
                  children: (0, cq.jsx)(Zq, {})
                }), (0, cq.jsx)(lm, {
                  children: (0, cq.jsx)(Am, {})
                }), (0, cq.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": lq ? "" : void 0,
                  children: [(0, cq.jsx)("div", {
                    className: Oq()("BottomLeftElements", {
                      Touch: lq
                    }),
                    children: (0, cq.jsxs)(lm, {
                      children: [(0, cq.jsx)(sY, {}), !lq && (0, cq.jsx)(DO.d, {})]
                    })
                  }), (0, cq.jsx)(lm, {
                    children: (0, cq.jsx)(Wm, {})
                  }), (0, cq.jsx)(lm, {
                    children: (0, cq.jsx)(jY, {
                      isTouchScreen: lq
                    })
                  })]
                })]
              }), (0, cq.jsx)("div", {
                className: "MiddleLeft"
              }), lq && (0, cq.jsx)(lm, {
                children: (0, cq.jsx)(DE, {})
              }), (0, cq.jsx)("div", {
                className: "CameraFadeHost",
                ref: oE.m
              })]
            }), (0, cq.jsx)(aq.g, {
              children: (0, cq.jsx)(Ul.c, {})
            }), (0, cq.jsx)(lm, {
              first: !0,
              children: (0, cq.jsx)(XY.e, {})
            }), (0, cq.jsx)(aq.g, {
              children: (0, cq.jsx)(xm, {})
            })]
          })
      }));

    function xm() {
      return (0, Yq.useEffect)((() => {
        const qq = setTimeout((() => {
          (0, Pq.g)()
        }), 0);
        return () => {
          clearTimeout(qq), Pq.i.uH(!1)
        }
      }), []), null
    }
    const Am = (0, Yq.memo)((function() {
        const qq = (0, xq.h)("aimingOverlay", "none");
        (0, jq.b)();
        const Eq = (0, oq.k)("middleTextUpper"),
          gq = (0, oq.k)("middleTextLower");
        return (0, cq.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === qq ? {
            visibility: "hidden"
          } : {},
          children: [(0, cq.jsx)(Bm, {
            text: Eq,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: cm
          }), (0, cq.jsx)(Bm, {
            text: gq,
            className: "MiddleText",
            maxHeightFraction: um
          })]
        })
      })),
      cm = .3,
      um = .2;

    function Bm(qq) {
      let {
        text: Eq,
        className: gq,
        maxHeightFraction: lq
      } = qq;
      const Oq = (0, Yq.useRef)(null),
        mq = (0, Yq.useRef)(null);
      return function(qq, Eq, gq, lq) {
        (0, Yq.useLayoutEffect)((() => {
          const Yq = qq.current,
            lq = Eq.current;
          if (!Yq || !lq) return;
          let Oq = -1,
            mq = -1;
          const xq = qq => (lq.style.setProperty("zoom", String(qq)), Yq.getBoundingClientRect().height),
            Aq = () => {
              const qq = document.documentElement.clientHeight * gq;
              let Eq = 1;
              if (xq(1) > qq) {
                let gq = .5,
                  Yq = 1;
                for (let Eq = 0; Eq < 6; Eq++) {
                  const Eq = (gq + Yq) / 2;
                  xq(Eq) <= qq ? gq = Eq : Yq = Eq
                }
                Eq = gq
              }
              mq = xq(Eq), Oq = Yq.getBoundingClientRect().width
            };
          Aq();
          let cq = 0;
          const uq = () => {
              cancelAnimationFrame(cq), cq = requestAnimationFrame(Aq)
            },
            Bq = new ResizeObserver((() => {
              const {
                width: qq,
                height: Eq
              } = Yq.getBoundingClientRect();
              qq === Oq && Eq === mq || uq()
            }));
          return Bq.observe(Yq), window.addEventListener("resize", uq), () => {
            Bq.disconnect(), window.removeEventListener("resize", uq), cancelAnimationFrame(cq), lq.style.removeProperty("zoom")
          }
        }), [qq, Eq, gq, lq])
      }(Oq, mq, lq, Eq.content), (0, cq.jsx)("div", {
        ref: Oq,
        className: "MiddleTextFit",
        children: (0, cq.jsx)(zl, {
          ref: mq,
          text: Eq,
          className: gq
        })
      })
    }
    const Wm = (0, Yq.memo)((function() {
        const qq = (0, xq.h)("aimingOverlay", "none");
        (0, jq.b)();
        const Eq = (0, oq.h)("useInventory");
        return (0, cq.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === qq ? {
            visibility: "hidden"
          } : {},
          children: [(0, cq.jsx)(uq, {}), (0, cq.jsx)(og.c, {}), (0, cq.jsx)(Pg, {}), (0, cq.jsx)(aq.g, {
            children: (0, cq.jsx)(jl, {})
          }), (0, cq.jsxs)("div", {
            className: "HotBarRow",
            children: [Eq ? (0, cq.jsx)(Jq.c, {}) : (0, cq.jsx)(Jq.e, {}), (0, cq.jsx)(Rq, {})]
          })]
        })
      })),
      Nm = (0, Yq.memo)((function(qq) {
        let {
          showChat: Eq
        } = qq;
        const {
          t: gq
        } = (0, iq.v)(), {
          clientEscMenuOptions: lq,
          isTouchScreen: mq
        } = (0, rq.j)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, jq.b)();
        const {
          userContext: xq,
          isUserContextUpdating: Aq
        } = (0, dq.c)(), uq = (0, oq.h)("hideCoordinates"), Wq = (0, oq.h)("customVariationTitle"), {
          requestedGameNameWithVariation: Nq,
          gameNameWithVariation: aq,
          lobbyName: Vq,
          shownLobbyName: Pq
        } = (0, tq.g)("connectedGame"), Qq = (0, Bq.c)(Nq, Vq, !1), [yq, vq] = (0, Yq.useState)(null), hq = (0, Bl.k)(aq || Nq || ""), nq = Wq || hq || "";
        (0, Yq.useEffect)((() => {
          Aq || ZY.e.getFavouriteLobbies(xq).then((qq => {
            console.log("Got favourite lobbies", qq), vq(qq)
          }))
        }), [Aq, xq]);
        const bq = (0, Yq.useRef)(null);
        return (0, Yq.useLayoutEffect)((() => {
          const qq = bq.current,
            Eq = document.documentElement,
            gq = new ResizeObserver((() => {
              Eq.style.setProperty("--InGameHeaderRowsHeight", `${qq.offsetHeight}px`)
            }));
          return gq.observe(qq), () => {
            gq.disconnect(), Eq.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), hY(bq), (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsxs)("div", {
            className: Oq()(yY.e, {
              Touchscreen: mq
            }),
            ref: bq,
            children: [(0, cq.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, cq.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: qq => {
                  qq.stopPropagation(), qq.preventDefault()
                },
                onClick: () => {
                  rq.b.set({
                    openEverythingMenuName: Hq.p.SETTINGS
                  })
                },
                children: [(0, cq.jsx)(ul.e, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, cq.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, cq.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Qq && (0, cq.jsx)(ul.e, {}), null !== Qq && (0, cq.jsxs)(cq.Fragment, {
                  children: [Qq, nq && ` ${nq}`]
                })]
              }), (0, cq.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, cq.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: Pq
              }), (0, Wl.I)(Vq) && (0, cq.jsx)(Sq.e, {
                tooltipInner: (0, cq.jsx)("div", {
                  children: gq(null !== yq && yq.includes(Vq) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, cq.jsx)("div", {
                  children: (0, cq.jsx)(hg.x, {
                    isLiked: null !== yq && yq.includes(Vq),
                    onClick: () => {
                      try {
                        if (!yq) return;
                        yq.includes(Vq) ? (ZY.e.unfavouriteLobby(xq, Vq).catch((qq => {
                          console.error("Failed to favourite lobby", qq)
                        })), vq(yq.filter((qq => qq !== Vq)))) : (ZY.e.favouriteLobby(xq, Vq).catch((qq => {
                          console.error("Failed to favourite lobby", qq)
                        })), vq([...yq, Vq]))
                      } catch (qq) {
                        console.error("Failed to like lobby", qq)
                      }
                    },
                    isLoading: null === yq
                  })
                })
              }), (0, cq.jsx)(Jl, {})]
            }), (0, cq.jsx)(ll, {
              show: lq.showFPS
            }), !uq && lq.showCoordinates && (0, cq.jsx)(xl, {}), !uq && lq.showChunkCoordinates && (0, cq.jsx)(Al, {}), (0, cq.jsx)(pl, {})]
          }), (0, cq.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, cq.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: Eq && (0, cq.jsx)(Xq.e, {})
            })
          })]
        })
      })),
      am = (0, Yq.memo)((function() {
        (0, jq.b)();
        const qq = (0, oq.k)("RightInfoText"),
          [Eq, gq] = (0, Yq.useState)(null);
        return (0, aE.h)(Eq, ".RightElements"), qq.hasText ? (0, cq.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, cq.jsx)(zl, {
            ref: gq,
            text: qq,
            className: "RightInfoDiv",
            children: (0, cq.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, cq.jsx)(Aq.c, {
                text: qq.content
              })
            })
          })
        }) : null
      }))
  },
  4656: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq
    });
    var Yq = gq(57),
      lq = gq(296),
      Oq = gq(1895),
      mq = gq(1070);

    function xq(qq) {
      let {
        text: Eq
      } = qq;
      const gq = [];
      let xq = "";
      return (0, lq.Zb)(Eq).forEach(((qq, Eq) => {
        if ("string" === typeof qq || !(0, Oq.i)(qq.icon)) return void(xq += "string" === typeof qq ? qq : qq.icon);
        const lq = Math.max(0, xq.trimEnd().search(/\S{1,12}$/));
        gq.push((0, mq.jsxs)(Yq.Fragment, {
          children: [xq.slice(0, lq), (0, mq.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [xq.slice(lq), (0, mq.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": qq.icon,
              children: (0, mq.jsx)(Oq.e, {
                itemName: qq.icon,
                amount: 0
              })
            })]
          })]
        }, Eq)), xq = ""
      })), gq.push(xq), (0, mq.jsx)(mq.Fragment, {
        children: gq
      })
    }
  },
  36575: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      h: () => uq,
      l: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1895),
      xq = gq(1070);
    const Aq = 350;
    let cq = 0;

    function uq() {
      return cq += 1, cq
    }

    function Bq(qq, Eq) {
      let gq = 0;
      for (const Yq of qq) "ingredient" !== Yq.kind && Yq.eA === Eq && (gq += Yq.amount);
      return gq > 0 ? {
        idx: Eq,
        amount: gq
      } : null
    }

    function Wq(qq) {
      var Eq, gq;
      let {
        anim: lq,
        onComplete: cq
      } = qq;
      const uq = null !== (Eq = lq.delayMs) && void 0 !== Eq ? Eq : 0,
        Bq = null !== (gq = lq.durationMs) && void 0 !== gq ? gq : Aq,
        [Wq, Nq] = (0, Yq.useState)(lq.from),
        [aq, Vq] = (0, Yq.useState)(0 === uq),
        [dq, jq] = (0, Yq.useState)(!1),
        Hq = (0, Yq.useRef)(!1);
      return (0, Yq.useEffect)((() => {
        let qq, Eq;
        const gq = () => {
            Hq.current = !0, Vq(!0), qq = requestAnimationFrame((() => {
              Eq = requestAnimationFrame((() => {
                Nq({
                  x: lq.to.x,
                  y: lq.to.y
                }), jq(!0)
              }))
            }))
          },
          Yq = Hq.current ? 0 : uq;
        let Oq;
        Yq > 0 ? Oq = setTimeout(gq, Yq) : gq();
        const mq = setTimeout((() => {
          cq(lq.id)
        }), Yq + Bq + 50);
        return () => {
          clearTimeout(Oq), cancelAnimationFrame(qq), cancelAnimationFrame(Eq), clearTimeout(mq)
        }
      }), [lq.id, lq.to.x, lq.to.y, cq, uq, Bq]), (0, xq.jsx)("div", {
        className: Oq()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === lq.kind,
          Waiting: !aq,
          Arrived: dq
        }),
        style: {
          left: Wq.x,
          top: Wq.y,
          "--fly-duration": `${Bq}ms`
        },
        children: (0, xq.jsx)(mq.e, {
          itemName: lq.itemName,
          amount: lq.amount
        })
      })
    }
  },
  36555: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => zq,
      e: () => Gq
    });
    var Yq = gq(57),
      lq = gq(2907),
      Oq = gq(6434),
      mq = gq(2052),
      xq = gq(2383),
      Aq = gq(8812),
      cq = gq(307),
      uq = gq(31),
      Bq = gq(1416),
      Wq = gq(38),
      Nq = gq(1018),
      aq = gq.n(Nq),
      Vq = gq(296),
      dq = gq(36560),
      jq = gq(1876),
      Hq = gq(1942),
      oq = gq(8629),
      Pq = gq(1070);

    function Qq(qq) {
      var Eq, gq;
      let {
        slotIdx: Oq
      } = qq;
      const mq = (0, Hq.f)("hotbar", (qq => {
          var Eq;
          return null !== (Eq = qq.items[Oq]) && void 0 !== Eq ? Eq : null
        })),
        Aq = (0, Hq.f)("hotbar", (qq => qq.ammo)),
        [uq, Bq] = (0, Yq.useState)(!1),
        Wq = (0, Yq.useRef)(null),
        [Nq, Vq] = (0, Yq.useState)(null),
        [dq, Qq] = (0, Yq.useState)(null),
        yq = (0, xq.h)("maxAuraLevel"),
        tq = (0, lq.c)(),
        rq = (0, Yq.useCallback)((() => {
          if (clearTimeout(Wq.current), mq) {
            var qq, Eq, gq, Yq;
            const Aq = mq.displayName,
              uq = [],
              Bq = Array.isArray(Aq) ? Aq : [Aq],
              Wq = {
                fontStyle: null !== (qq = mq.attributes.customAttributes) && void 0 !== qq && qq.author ? "italic" : "normal"
              };
            for (const qq of Bq) qq.str ? uq.push(qq) : uq.push({
              str: qq,
              style: Wq
            });
            if (null !== (Eq = mq.attributes.customAttributes) && void 0 !== Eq && Eq.enchantments) {
              uq.push(" ");
              const qq = Object.entries(mq.attributes.customAttributes.enchantments).sort(((qq, Eq) => Eq[1] - qq[1])),
                Eq = mq.attributes.customAttributes.enchantmentData;
              for (const [gq, Yq] of qq) {
                var lq, Oq;
                const qq = null !== (lq = null === Eq || void 0 === Eq || null === (Oq = Eq[gq]) || void 0 === Oq ? void 0 : Oq.icon) && void 0 !== lq ? lq : `${gq} Enchantment`;
                var xq;
                if (Yq < 4)
                  for (let Eq = 0; Eq < Yq; Eq++) uq.push({
                    icon: qq,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else uq.push({
                  icon: qq,
                  style: {
                    fontSize: "1.5em"
                  }
                }), uq.push(null !== (xq = (0, cq.X)(Yq)) && void 0 !== xq ? xq : Yq.toString())
              }
            }
            Vq(uq), Qq(null !== (gq = null === (Yq = mq.attributes.customAttributes) || void 0 === Yq ? void 0 : Yq.enchantmentTier) && void 0 !== gq ? gq : null)
          } else Vq(null), Qq(null);
          Bq(!0), tq();
          const Aq = null === mq || void 0 === mq ? void 0 : mq.attributes.customAttributes;
          void 0 === (null === Aq || void 0 === Aq ? void 0 : Aq.shotsLeft) && (Wq.current = setTimeout((() => {
            Bq(!1)
          }), 2e3))
        }), [null === mq || void 0 === mq ? void 0 : mq.name, Oq, null === mq || void 0 === mq ? void 0 : mq.instance, null === mq || void 0 === mq ? void 0 : mq.displayName]);
      (0, Yq.useEffect)((() => (rq(), () => {
        clearTimeout(Wq.current), Bq(!1)
      })), [null === mq || void 0 === mq ? void 0 : mq.name, Oq, null === mq || void 0 === mq ? void 0 : mq.instance, rq]);
      const vq = null === mq || void 0 === mq || null === (Eq = mq.attributes.customAttributes) || void 0 === Eq ? void 0 : Eq.shotsLeft,
        hq = void 0 === vq ? null : (0, Pq.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${vq}|${mq.requiresAmmo?`${Aq}x${mq.clipSize}`:mq.clipSize}`
        }),
        nq = (0, oq.j)();
      return (0, Pq.jsx)(Pq.Fragment, {
        children: uq && mq && !nq.showing ? (0, Pq.jsxs)("div", {
          className: aq()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === yq,
            Enchanted: null !== dq
          }),
          style: {
            "--enchantmentColour": null !== (gq = cq.Ab[dq]) && void 0 !== gq ? gq : cq.Ab.None,
            "--duration": dq ? (0, cq.sb)(dq) + "s" : void 0
          },
          children: [dq && (0, Pq.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, Pq.jsx)(jq.c, {
              text: Nq
            }), hq]
          }), (0, Pq.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, Pq.jsx)(jq.c, {
              text: Nq
            }), hq]
          })]
        }) : null
      })
    }
    var yq = gq(36575),
      tq = gq(24),
      rq = gq(1904),
      vq = gq(598),
      hq = gq(2386),
      nq = gq(3265),
      bq = gq(3273);
    var iq = gq(1095),
      Zq = gq(1086),
      fq = gq(2437);

    function Mq() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Tq = gq(1440);
    const zq = (0, Yq.memo)((function() {
      const [qq, Eq] = (0, Yq.useState)(0), gq = (0, xq.h)("useFullInventory"), mq = (0, xq.h)("highlightedHotbarSlots"), {
        isTouchScreen: Aq,
        openInGameMenuName: cq
      } = (0, tq.j)(["isTouchScreen", "openInGameMenuName"]), Wq = null !== cq && "inventory" !== cq, Nq = (0, Hq.g)("fullInventory") && "inventory" === cq, Vq = function() {
        const qq = (0, iq.n)(((qq, Eq) => `${qq}:${(0,Zq.e)(qq,Eq)?"portrait":"landscape"}`)),
          [Eq, gq] = (0, Yq.useState)(Mq);
        return (0, Yq.useLayoutEffect)((() => {
          gq(Mq())
        }), [qq]), (0, Bq.f)(fq.d, (() => {
          gq(Mq())
        })), Eq
      }(), jq = Aq && !Vq;
      ! function(qq, Eq, gq) {
        (0, Yq.useLayoutEffect)((() => {
          const Yq = document.documentElement.classList;
          return qq && (Yq.add("TouchHotbar"), Yq.toggle("TouchHotbarKeysAbove", Eq), Yq.toggle("TouchHotbarHasBag", gq)), (0, nq.i)(), uq.i.TV(bq.e), () => {
            Yq.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, nq.i)(), uq.i.TV(bq.e)
          }
        }), [qq, Eq, gq])
      }(Aq, jq, gq);
      const [oq, hq] = (0, Oq.b)("changedHotbarUsingNumkeys", !0), Tq = (0, Hq.f)("hotbar", (qq => qq.selectedSlot)), zq = null !== Tq && void 0 !== Tq ? Tq : qq, Lq = (0, lq.c)(), Jq = (0, Yq.useRef)(null), Rq = (0, Bq.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Bq.f)("inventoryDraggedItemUpdated", (qq => {
        Jq.current = qq, Lq()
      })), (0, Hq.d)("hotbarScrolled", (qq => {
        null === Tq && Fq(qq)
      })), (0, Hq.d)("hotbarSlotRequested", (qq => {
        Uq(qq), hq(!1)
      })), (0, Hq.d)("numberKeyPressed", (() => {
        hq(!1)
      })), (0, Hq.d)("hotbarDropRequested", (qq => {
        const Eq = rq.gameBridge.latest("hotbar").items[zq];
        if (Eq) {
          var gq;
          const Yq = qq && null !== (gq = Eq.amount) && void 0 !== gq ? gq : 1;
          rq.gameBridge.send("removeInventoryItem", {
            slot: zq,
            amount: Yq,
            drop: !0
          })
        }
      }));
      const Uq = qq => {
          rq.gameBridge.send("selectHotbarSlot", qq), Eq(qq)
        },
        Fq = qq => {
          Uq((zq + qq + vq.o) % vq.o)
        };
      let sq, Xq = null,
        wq = null,
        Kq = qq => qq => {},
        Cq = qq => Eq => {
          Uq(qq)
        },
        Iq = qq => qq => {},
        eq = [];
      if (Nq) {
        var Dq;
        const qq = Jq.current;
        if (null === qq || void 0 === qq || !qq.setHovered) return (0, Pq.jsx)("div", {
          className: aq()("HotBarContainer", {
            Touch: Aq,
            KeysAbove: jq
          }),
          children: (0, Pq.jsx)("div", {
            className: "HotBar"
          })
        });
        Xq = qq.draggedInfo, wq = qq.specialItemInfo, Kq = qq.setHovered, Cq = qq.pointerDown, Iq = qq.pointerUp, sq = qq.variation, eq = null !== (Dq = qq.craftFlyAnims) && void 0 !== Dq ? Dq : []
      }
      return (0, Pq.jsxs)("div", {
        className: aq()("HotBarContainer", {
          Touch: Aq,
          PopupOpen: Aq && Wq,
          KeysAbove: jq
        }),
        children: [(0, Pq.jsxs)("div", {
          className: aq()("HotBar", {
            HoverDisabled: Rq
          }),
          children: [Aq && (0, Pq.jsxs)(Pq.Fragment, {
            children: [(0, Pq.jsx)(pq, {
              useFullInventory: gq,
              inventoryOpen: Nq
            }), (0, Pq.jsx)(Sq, {
              direction: "Previous",
              onPress: () => {
                Fq(-1)
              }
            })]
          }), !Aq && (0, Pq.jsxs)(Pq.Fragment, {
            children: [(0, Pq.jsx)(Gq, {}), (0, Pq.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, Pq.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((qq, Eq) => (0, Pq.jsx)(dq.b, {
              idx: Eq,
              draggedInfo: Xq,
              specialItemInfo: wq,
              craftFlyHoldbackInfo: (0, yq.l)(eq, Eq),
              setHovered: Kq(Eq),
              pointerDown: Cq(Eq),
              pointerUp: Iq(Eq),
              variation: sq,
              isSelected: Eq === zq,
              hotbarHighlighted: !0 === (null === mq || void 0 === mq ? void 0 : mq.includes(Eq)),
              hoverDisabled: Rq,
              showNumber: oq && !Aq
            }, Eq)))
          }), Aq && (0, Pq.jsx)(Sq, {
            direction: "Next",
            onPress: () => {
              Fq(1)
            }
          }), !Aq && (0, Pq.jsxs)(Pq.Fragment, {
            children: [(0, Pq.jsx)("div", {
              className: "HotBarFiller"
            }), (0, Pq.jsx)("div", {
              className: aq()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !gq
              }),
              onPointerDown: () => {
                uq.i.TV("toggleMenu", "inventory")
              },
              children: (0, Pq.jsx)(kq, {})
            })]
          })]
        }), (0, Pq.jsx)(Qq, {
          slotIdx: zq
        })]
      })
    }));

    function Sq(qq) {
      let {
        direction: Eq,
        onPress: gq
      } = qq;
      return (0, Pq.jsx)("div", {
        className: aq()("HotBarArrow", Eq),
        ...Tq.d,
        children: (0, Pq.jsx)(mq.e, {
          icon: "Previous" === Eq ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: gq
        })
      })
    }
    const pq = (0, Yq.memo)((function(qq) {
        let {
          useFullInventory: Eq,
          inventoryOpen: gq
        } = qq;
        const lq = (0, xq.h)("maxAuraLevel"),
          Oq = (0, Yq.useRef)(null);
        return function(qq, Eq, gq) {
          (0, Yq.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", Eq), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [Eq]), (0, Yq.useLayoutEffect)((() => {
            const Eq = qq.current.closest(".BottomMiddleElements");
            return Eq.classList.toggle("TouchInventoryOpen", gq), () => {
              Eq.classList.remove("TouchInventoryOpen")
            }
          }), [qq, gq])
        }(Oq, (0, Aq.e)(), gq), (0, Pq.jsxs)("div", {
          ref: Oq,
          className: aq()("TouchInventoryKeys", {
            NoAuraBar: 0 === lq,
            InventoryOpen: gq
          }),
          children: [(0, Pq.jsx)(Gq, {
            touchKey: !0
          }), (0, Pq.jsx)("div", {
            className: aq()("TouchInventoryKey BagKey", {
              Hidden: !Eq
            }),
            ...Tq.d,
            children: (0, Pq.jsx)(kq, {
              touchKey: !0
            })
          })]
        })
      })),
      Gq = (0, Yq.memo)((function(qq) {
        let {
          touchKey: Eq = !1
        } = qq;
        const gq = (0, Aq.e)();
        return (0, Pq.jsx)("div", {
          className: Eq ? aq()("TouchInventoryKey ShopKey", {
            Hidden: !gq
          }) : aq()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !gq
          }),
          ...Eq ? Tq.d : {},
          children: (0, Pq.jsx)(mq.e, {
            icon: (0, cq.jc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              gq && tq.b.set({
                openEverythingMenuName: Vq.p.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Lq(qq) {
      let {
        player: Eq
      } = qq;
      return Eq.some((qq => null !== qq && cq.$c.includes(qq.name)))
    }

    function Jq(qq) {
      qq.creative || Wq.i.getItem("LogInInventoryRedDotTutorialComplete") || (Lq(qq) ? (uq.i.TV("RedDotOpenInventoryIcon", !0), uq.i.TV("TouchTutorialOpenInventoryIcon", !0)) : (uq.i.TV("RedDotOpenInventoryIcon", !1), uq.i.TV("TouchTutorialOpenInventoryIcon", !1)))
    }
    const kq = (0, Yq.memo)((function(qq) {
      let {
        touchKey: Eq = !1
      } = qq;
      const {
        backpackPointerRequested: gq
      } = (0, tq.j)(["backpackPointerRequested"]);
      (0, Yq.useEffect)((() => {
        Jq(rq.gameBridge.latest("inventory"))
      }), []), (0, Hq.d)("inventory", Jq);
      const lq = (0, hq.j)();
      return (0, Bq.f)("toggleMenu", (qq => {
        lq.shown && (null !== qq && void 0 !== qq && qq.startsWith("inventory") && Lq(rq.gameBridge.latest("inventory")) ? (Wq.i.setItem("LogInInventoryRedDotTutorialComplete", !0), uq.i.TV("RedDotOpenInventoryIcon", !1), uq.i.TV("TouchTutorialOpenInventoryIcon", !1)) : "shop" === qq && uq.i.TV("showShopTouchTutorial", !1))
      })), Eq ? (0, Pq.jsx)(mq.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          uq.i.TV("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: gq,
        touchIconPosition: "topleft"
      }) : (0, Pq.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          uq.i.TV("toggleMenu", "inventory")
        },
        children: (0, Pq.jsx)(mq.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: qq => {
            uq.i.TV("toggleMenu", "inventory"), qq.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: gq,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36560: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => dq,
      c: () => aq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1902),
      xq = gq(1895),
      Aq = gq(1904),
      cq = gq(1942),
      uq = gq(36568),
      Bq = gq(9297),
      Wq = gq(1367),
      Nq = gq(1070);
    const aq = (qq, Eq, gq) => {
      let Yq = Eq,
        lq = !1;
      for (const Oq of gq)(null === Oq || void 0 === Oq ? void 0 : Oq.idx) === qq && (lq = !0, Yq > 0 && (Yq -= Oq.amount));
      return {
        displayedAmt: Yq,
        shown: !lq || Yq > 0
      }
    };
    const Vq = qq => {
        let {
          idx: Eq
        } = qq;
        return (0, Wq.q)() ? null : (0, Nq.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: Eq < 9 ? Eq + 1 : 0
        })
      },
      dq = (0, Yq.memo)((function(qq) {
        var Eq, gq, Yq;
        let {
          idx: lq,
          setHovered: Wq,
          pointerDown: dq,
          pointerUp: jq,
          draggedInfo: Hq,
          specialItemInfo: oq,
          craftFlyHoldbackInfo: Pq,
          defaultIconB64: Qq = null,
          variation: yq,
          isSelected: tq = !1,
          hotbarHighlighted: rq = !1,
          hoverDisabled: vq = !1,
          showNumber: hq = !1,
          showNewDot: nq = !1
        } = qq;
        const bq = (0, cq.f)("inventory", (qq => lq === uq.i ? null : (0, Bq.k)(qq, lq)));
        let iq, Zq, fq, Mq;
        if (lq === uq.i) oq && (iq = oq.name, fq = oq.amount, Mq = oq.attributes);
        else if (bq) {
          var Tq;
          iq = bq.name, Zq = bq.icon, fq = null !== (Tq = bq.amount) && void 0 !== Tq ? Tq : 0, Mq = bq.attributes
        }
        const zq = null === (Eq = Mq) || void 0 === Eq || null === (gq = Eq.customAttributes) || void 0 === gq ? void 0 : gq.enchantmentTier,
          Sq = (0, mq.i)(Mq),
          {
            displayedAmt: pq,
            shown: Gq
          } = aq(lq, fq, [Hq, oq, Pq]),
          Lq = iq && Gq,
          Jq = void 0 !== yq && function(qq, Eq) {
            const {
              enchantable: gq,
              salvageable: Yq
            } = Aq.gameBridge.latest("stationItems");
            return "Enchanting Table" === qq ? !0 === gq[Eq] : "Salvaging Table" === qq && !0 === Yq[Eq]
          }(yq, iq);
        return (0, Nq.jsxs)("div", {
          className: Oq()("InvenItem", {
            Highlighted: Lq && Jq,
            Selected: tq,
            HotbarHighlighted: rq,
            HoverDisabled: vq
          }),
          onPointerEnter: () => {
            null === Wq || void 0 === Wq || Wq(!0)
          },
          onPointerLeave: () => {
            null === Wq || void 0 === Wq || Wq(!1)
          },
          onPointerDown: dq,
          onPointerUp: jq,
          "data-inven-idx": lq,
          children: [Lq && (0, Nq.jsx)(xq.e, {
            itemName: null !== (Yq = Zq) && void 0 !== Yq ? Yq : iq,
            amount: pq,
            enchantmentTier: zq,
            bar: Sq
          }), Lq && nq && (0, Nq.jsx)("div", {
            className: "InvenItemNewDot"
          }), hq && (0, Nq.jsx)(Vq, {
            idx: lq
          }), Qq && !Lq && (0, Nq.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Qq})`
            }
          })]
        })
      }))
  },
  9283: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq
    });
    var Yq = gq(307),
      lq = gq(9292);

    function Oq(qq, Eq, gq) {
      const Oq = Object.entries(Eq).sort(((qq, Eq) => Eq[1] - qq[1])),
        mq = (0, Yq.Eb)(qq);
      mq.push(qq ? "\n\n" : "\n");
      for (const [lq, aq] of Oq) {
        var xq, Aq, cq;
        const qq = null !== (xq = null === gq || void 0 === gq || null === (Aq = gq[lq]) || void 0 === Aq ? void 0 : Aq.icon) && void 0 !== xq ? xq : `${lq} Enchantment`;
        mq.push({
          icon: qq,
          style: {
            fontSize: "1.5rem"
          }
        }), mq.push({
          str: `${lq} ${null!==(cq=(0,Yq.X)(aq))&&void 0!==cq?cq:aq}\n`
        })
      }
      mq.push({
        str: "\n"
      });
      for (const [Yq, aq] of Oq) {
        var uq, Bq, Wq, Nq;
        const qq = null !== (uq = null === gq || void 0 === gq || null === (Bq = gq[Yq]) || void 0 === Bq ? void 0 : Bq.icon) && void 0 !== uq ? uq : `${Yq} Enchantment`,
          Eq = null !== (Wq = null === gq || void 0 === gq || null === (Nq = gq[Yq]) || void 0 === Nq ? void 0 : Nq.description) && void 0 !== Wq ? Wq : (0, lq.n)(Yq);
        mq.push({
          icon: qq,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), mq.push({
          str: Eq,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), mq.push({
          str: "\n"
        })
      }
      return mq
    }
  },
  36568: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      i: () => lq
    });
    const Yq = -1,
      lq = -2
  },
  9297: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      h: () => Hq,
      i: () => dq,
      k: () => Aq,
      m: () => jq,
      n: () => uq,
      q: () => Wq,
      t: () => Vq,
      x: () => Bq
    });
    var Yq = gq(296),
      lq = gq(598),
      Oq = gq(307),
      mq = gq(4085),
      xq = gq(9283);

    function Aq(qq, Eq) {
      var gq;
      let {
        player: Yq,
        chestOrCreative: lq
      } = qq;
      var Oq;
      return Eq < Yq.length ? null !== (Oq = Yq[Eq]) && void 0 !== Oq ? Oq : null : null !== (gq = lq[Eq - Yq.length]) && void 0 !== gq ? gq : null
    }

    function cq(qq) {
      var Eq;
      return null !== (Eq = qq.amount) && void 0 !== Eq ? Eq : 0
    }

    function uq(qq) {
      return 0 === qq.button || void 0 === qq.button
    }

    function Bq(qq) {
      return !!qq.shiftKey
    }

    function Wq(qq) {
      return "touches" in qq || "touch" === qq.pointerType || "pen" === qq.pointerType
    }
    const Nq = new Set,
      aq = 50;

    function Vq(qq, Eq) {
      var gq;
      const Yq = null === (gq = qq[Eq]) || void 0 === gq ? void 0 : gq.displayName;
      return (0, lq.H)(Yq) ? "string" !== typeof Eq ? "" : (!Nq.has(Eq) && Nq.size < aq && (Nq.add(Eq), console.warn(`No item called "${Eq}", so its hover shows the name as given`)), Eq) : Yq
    }

    function dq(qq, Eq, gq) {
      var Aq, cq, uq, Bq, Wq, Nq, aq, dq, jq, Hq, oq, Pq, Qq, yq;
      const tq = qq.attributes,
        rq = null !== (Aq = null === (cq = Eq[qq.name]) || void 0 === cq ? void 0 : cq.rootName) && void 0 !== Aq ? Aq : qq.name,
        vq = null !== (uq = null !== (Bq = tq.customDisplayName) && void 0 !== Bq ? Bq : null === (Wq = Eq[qq.name]) || void 0 === Wq ? void 0 : Wq.displayName) && void 0 !== uq ? uq : Vq(Eq, rq);
      let hq = vq;
      const nq = null === (Nq = tq.customAttributes) || void 0 === Nq ? void 0 : Nq.enchantmentTier;
      nq && (hq = (0, Oq.Eb)(vq, {
        colour: Oq.Ab[nq]
      }));
      const bq = null !== (aq = null !== (dq = null !== (jq = function(qq, Eq) {
        var gq;
        if (void 0 === qq || null !== (gq = Eq.customAttributes) && void 0 !== gq && gq.author) return qq;
        const lq = (0, Yq.Zb)(qq);
        return lq.every((qq => "string" === typeof qq)) ? qq : lq.map((qq => "string" === typeof qq ? qq : {
          icon: qq.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(tq.customDescription, tq)) && void 0 !== jq ? jq : null === (Hq = Eq[qq.name]) || void 0 === Hq ? void 0 : Hq.description) && void 0 !== dq ? dq : null === (oq = Eq[rq]) || void 0 === oq ? void 0 : oq.description) && void 0 !== aq ? aq : "";
      let iq = bq;
      if (null !== (Pq = tq.customAttributes) && void 0 !== Pq && Pq.enchantments) iq = (0, xq.e)(bq, tq.customAttributes.enchantments, tq.customAttributes.enchantmentData);
      else if (gq[rq]) iq = (0, Oq.Eb)(bq), iq.push({
        str: "\n"
      }), iq.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Qq = tq.customAttributes) && void 0 !== Qq && Qq.mobSettings) {
        var Zq, fq;
        const qq = tq.customAttributes.mobSettings;
        var Mq, Tq;
        if (iq = [], (0, lq.H)(tq.customAttributes.health) || (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: tq.customAttributes.health.toString()
          }), (0, lq.H)(qq.maxHealth) || (iq.push({
            str: "/"
          }), iq.push({
            str: qq.maxHealth.toString()
          }))), !(0, lq.H)(qq.attackDamage) && qq.attackDamage > 0 && (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: qq.attackDamage.toString()
          })), !(0, lq.H)(qq.secondaryAttackDamage) && qq.secondaryAttackDamage > 0 && (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: qq.secondaryAttackDamage.toString()
          })), (0, lq.H)(qq.baseRunningSpeed) || (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: qq.baseRunningSpeed.toFixed(2)
          })), "Saddled" === qq.metaInfo) iq.push({
          str: "\n"
        }), iq.push({
          str: {
            translationKey: "general:has"
          }
        }), iq.push({
          str: " "
        }), iq.push({
          icon: null !== (Mq = null === (Tq = qq.tameInfo) || void 0 === Tq ? void 0 : Tq.saddleItemName) && void 0 !== Mq ? Mq : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (iq.push({
            str: "\n"
          }), iq.push({
            str: "\n"
          }), qq.petInfo && null !== (Zq = qq.tameInfo) && void 0 !== Zq && Zq.supportsFriendship) {
          const Eq = mq.c.getIconsFromFriendshipPoints(qq.petInfo.friendshipPoints);
          for (const qq of Eq) iq.push({
            icon: qq,
            style: {
              fontSize: "1.5em"
            }
          });
          iq.push({
            str: "\n"
          });
          const gq = mq.c.getMobHungerLevel(qq.petInfo.lastFedAt);
          for (const qq of mq.c.hungerLevelIcons[gq]) iq.push({
            icon: qq,
            style: {
              fontSize: "1.5em"
            }
          });
          iq.push({
            str: " "
          }), iq.push({
            str: mq.c.hungerLevelTranslations[gq],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (qq.tameInfo && null !== (fq = qq.tameInfo) && void 0 !== fq && fq.supportsFriendship) {
          var zq, Sq;
          let Eq = null !== (zq = qq.tameInfo.likedFoods) && void 0 !== zq ? zq : [];
          iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Superliked]
            }
          }), iq.push({
            str: " "
          }), null !== (Sq = qq.petInfo) && void 0 !== Sq && Sq.superlikedFoodKnown ? (iq.push({
            icon: qq.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Eq = Eq.filter((Eq => Eq !== qq.petInfo.superlikedFood))) : iq.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Liked]
            }
          }), iq.push({
            str: " "
          });
          for (const qq of Eq) iq.push({
            icon: qq,
            style: {
              fontSize: "1.5em"
            }
          });
          iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Neutral]
            }
          }), iq.push({
            str: " "
          });
          for (const gq of null !== (pq = qq.tameInfo.neutralFoods) && void 0 !== pq ? pq : []) {
            var pq;
            iq.push({
              icon: gq,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Disliked]
            }
          }), iq.push({
            str: " "
          });
          for (const gq of null !== (Gq = qq.tameInfo.dislikedFoods) && void 0 !== Gq ? Gq : []) {
            var Gq;
            iq.push({
              icon: gq,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        iq.length > 0 ? (iq.shift(), iq.unshift(...(0, Oq.Eb)(bq))) : iq = (0, Oq.Eb)(bq)
      }
      return {
        name: hq,
        desc: iq,
        fontStyle: null !== (yq = tq.customAttributes) && void 0 !== yq && yq.author ? "italic" : "normal"
      }
    }

    function jq(qq, Eq, gq, Yq) {
      const lq = Aq(qq, gq),
        Oq = Aq(qq, Yq);
      if (!lq) return !1;
      const mq = Eq[lq.name].armourReduction,
        xq = Eq[Oq.name].armourReduction;
      if (xq === mq) {
        var cq, uq, Bq, Wq;
        const qq = null !== (cq = null === (uq = lq.attributes.customAttributes) || void 0 === uq ? void 0 : uq.enchantmentTier) && void 0 !== cq ? cq : "Tier 0",
          Eq = null !== (Bq = null === (Wq = Oq.attributes.customAttributes) || void 0 === Wq ? void 0 : Wq.enchantmentTier) && void 0 !== Bq ? Bq : "Tier 0";
        return parseInt(qq.replace("Tier ", "")) >= parseInt(Eq.replace("Tier ", ""))
      }
      return mq > xq
    }

    function Hq(qq) {
      let Eq;
      if ("number" === typeof qq) {
        const gq = document.querySelector(`[data-inven-idx="${qq}"]`);
        if (!gq) return null;
        Eq = gq.getBoundingClientRect()
      } else Eq = qq.getBoundingClientRect();
      return {
        x: Eq.left + Eq.width / 2,
        y: Eq.top + Eq.height / 2
      }
    }
  },
  9176: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      e: () => aq,
      g: () => Vq
    });
    var Yq = gq(1422),
      lq = gq(57),
      Oq = gq(1298),
      mq = gq(4359),
      xq = gq(2325),
      Aq = gq(1183),
      cq = gq(96),
      uq = gq(1942),
      Bq = gq(1326),
      Wq = gq(1070);

    function Nq(qq) {
      let {
        show: Eq,
        onClose: gq
      } = qq;
      const {
        requestedGameNameWithVariation: Yq,
        lobbyName: lq,
        shownLobbyName: Oq
      } = (0, uq.g)("connectedGame"), Aq = (0, xq.c)(Yq, lq, !1);
      return cq.featureFlags.canUseInviteLinks && (0, Wq.jsx)(mq.c, {
        show: Eq,
        close: gq,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Wq.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Wq.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Wq.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Wq.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Aq ? (0, Wq.jsx)(Bq.e, {}) : Aq, (0, Wq.jsx)("br", {}), "Lobby Name: ", Oq, (0, Wq.jsx)("br", {}), (0, Wq.jsx)("br", {}), (0, Wq.jsx)("br", {}), (0, Wq.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Wq.jsx)(aq, {})]
        })
      })
    }

    function aq() {
      var qq;
      const {
        t: Eq
      } = (0, Aq.v)(), gq = null !== (qq = Vq(cq.featureFlags.canUseInviteLinks)) && void 0 !== qq ? qq : "Loading Link...", [Oq, mq] = (0, lq.useState)(0), [xq, uq] = (0, lq.useReducer)((qq => qq + 1), 0);
      return (0, lq.useEffect)((() => {
        const qq = setTimeout((() => {
          uq()
        }), 1100);
        return () => {
          clearTimeout(qq)
        }
      }), [Oq]), cq.featureFlags.canUseInviteLinks && (0, Wq.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Wq.jsx)("div", {
          className: "InviteLinkInner",
          children: gq
        }), (0, Wq.jsx)(Yq.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(gq).catch((qq => {
              console.error("Failed to copy invite link:", qq)
            })), mq(Date.now())
          },
          disabled: Date.now() - Oq < 1e3,
          children: Date.now() - Oq < 1e3 ? Eq("general:copied") : Eq("general:copy")
        })]
      })
    }

    function Vq(qq) {
      const [Eq, gq] = (0, lq.useState)(null);
      return (0, lq.useEffect)((() => {
        if (!qq) return;
        let Eq = !0;
        return (0, Oq.G)().then((qq => {
          Eq && gq(qq)
        })).catch((qq => {
          console.error("Failed to get invite link:", qq)
        })), () => {
          Eq = !1
        }
      }), [qq]), Eq
    }
  },
  37060: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => vq
    });
    var Yq = gq(57),
      lq = gq(2383),
      Oq = gq(1876),
      mq = gq(576),
      xq = gq(31),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(36597),
      Bq = gq(2522),
      Wq = gq(36599),
      Nq = gq(2548),
      aq = gq(2530),
      Vq = gq(3476),
      dq = gq(36606),
      jq = gq(24),
      Hq = gq(2005),
      oq = gq(2332),
      Pq = gq(1214),
      Qq = gq(4748),
      yq = gq(1942),
      tq = gq(96),
      rq = gq(1070);
    const vq = (0, Yq.memo)((function() {
      const qq = (0, lq.h)("lobbyLeaderboardInfo"),
        Eq = (0, yq.g)("players"),
        gq = (0, yq.g)("lobbyLeaderboardRows"),
        xq = (0, yq.g)("hiddenPlayerNames"),
        Aq = (0, Yq.useRef)(null),
        [cq, uq] = (0, Yq.useReducer)((qq => qq + 1), 0);
      return (0, Yq.useEffect)((() => (0, Hq.e)((() => {
        uq()
      }))), []), (0, rq.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, rq.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!qq) return (0, rq.jsx)(rq.Fragment, {});
            const Yq = JSON.parse(JSON.stringify(qq)),
              lq = [...Eq.ids],
              cq = {},
              uq = {};
            for (const qq of lq) {
              var Bq, Nq;
              cq[qq] = null === (Bq = gq[qq]) || void 0 === Bq ? void 0 : Bq.colour;
              const Eq = null === (Nq = gq[qq]) || void 0 === Nq ? void 0 : Nq.values;
              Eq && (uq[qq] = {
                ...Eq
              })
            }
            const aq = Object.keys(Yq);
            aq.sort(((qq, Eq) => Yq[qq].sortPriority - Yq[Eq].sortPriority)), lq.sort(((qq, Eq) => {
              if (!uq[qq] || !uq[Eq]) return 0;
              for (const gq of aq) {
                const lq = uq[qq][gq],
                  Oq = uq[Eq][gq];
                let mq = 0;
                if ("string" == typeof lq && "string" == typeof Oq ? mq = lq.localeCompare(Oq) : "number" == typeof lq && "number" == typeof Oq ? mq = lq - Oq : "number" == typeof lq && "string" == typeof Oq ? mq = 1 : "string" == typeof lq && "number" == typeof Oq && (mq = -1), mq) return mq * ("ascending" === Yq[gq].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const qq of lq) {
              var Vq, dq, jq;
              const {
                name: Yq,
                ranks: lq,
                cosmetics: Oq
              } = Eq.byId[qq], xq = [], Aq = null !== (Vq = null === (dq = gq[qq]) || void 0 === dq || null === (jq = dq.tags) || void 0 === jq ? void 0 : jq.flatMap((qq => 0 === qq.length ? qq : [...qq, String.fromCharCode(8198)]))) && void 0 !== Vq ? Vq : [];
              xq.push(...Aq), xq.push(...(0, Pq.u)(lq, Yq, (null === Oq || void 0 === Oq ? void 0 : Oq.nameColour) === mq.e || null === Oq || void 0 === Oq ? void 0 : Oq.nameColour)), uq[qq] ??= {}, uq[qq].name = xq
            }

            function yq(qq, gq) {
              if (uq[qq] && void 0 !== uq[qq][gq]) {
                if ("name" === gq) {
                  const {
                    name: Yq,
                    cosmetics: lq
                  } = Eq.byId[qq];
                  return (0, rq.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [lq && (0, rq.jsx)(oq.e, {
                      cosmetics: lq
                    }), " ", (0, rq.jsx)(Oq.c, {
                      text: uq[qq][gq],
                      friendBadgeFor: (0, Hq.h)(Yq, xq) ? Yq : void 0
                    })]
                  })
                }
                return (0, rq.jsx)(Oq.c, {
                  text: uq[qq][gq]
                })
              }
              return ""
            }
            const tq = Object.keys(Yq).filter((qq => !0 !== Yq[qq].hidden)).map((qq => {
              var Eq;
              return {
                key: qq,
                header: (0, rq.jsx)(Oq.c, {
                  text: null !== (Eq = Yq[qq].displayName) && void 0 !== Eq ? Eq : ""
                })
              }
            }));
            return (0, rq.jsx)("div", {
              ref: Aq,
              className: "LobbyLeaderboard",
              children: (0, rq.jsx)(Qq.c, {
                columns: tq,
                rows: lq,
                getRowKey: qq => qq,
                renderRow: qq => {
                  const gq = qq !== Eq.localId;
                  return (0, rq.jsx)(hq, {
                    playerId: qq,
                    playerName: Eq.byId[qq].name,
                    isOtherPlayer: gq,
                    opensProfileCard: (0, Wq.f)(gq, Eq.byId[qq].name, xq),
                    lobbyLeaderboardInfo: Yq,
                    getPlayerValue: yq,
                    playerColors: cq
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function hq(qq) {
      let {
        playerId: Eq,
        playerName: gq,
        isOtherPlayer: lq,
        opensProfileCard: Oq,
        lobbyLeaderboardInfo: mq,
        getPlayerValue: Aq,
        playerColors: Hq
      } = qq;
      const oq = (0, Yq.useRef)(null);
      (0, Yq.useEffect)((() => () => {
        Bq.c.closeIfOwner(oq)
      }), []);
      const Pq = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            xq.i.TV("OpenReportMenu", {
              playerEId: Eq,
              playerName: gq,
              Hc: null,
              serverChatMsgId: null
            })
          }
        },
        Qq = () => ({
          ...(0, Wq.d)(Eq, gq),
          showLocation: !1,
          status: null,
          extraActions: [Pq],
          moderationActions: null === gq ? [] : (0, dq.c)(gq),
          friendRequestSource: "leaderboard"
        });
      return (0, rq.jsxs)("tr", {
        ref: oq,
        "data-pad-focusable": Oq || void 0,
        [Bq.d]: Oq || void 0,
        onClick: Oq ? () => {
          var qq;
          Bq.c.toggle(oq, {
            ...Qq(),
            anchor: null !== (qq = oq.current.querySelector(".PlayerPfpAndName")) && void 0 !== qq ? qq : oq.current
          })
        } : void 0,
        onContextMenu: Oq ? qq => {
          (0, Nq.c)(oq, qq, Qq(), jq.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Oq ? qq => {
          (0, aq.d)(qq, (() => (0, Wq.d)(Eq, gq).playerSocialPreview))
        } : void 0,
        children: [Object.keys(mq).map((qq => !0 === mq[qq].hidden ? null : (0, rq.jsxs)("td", {
          className: cq()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !lq
          }),
          children: [(0, rq.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Aq(Eq, qq)
          }), (0, rq.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: Hq[Eq]
            }
          })]
        }, qq))), lq && !Oq && (0, rq.jsx)(uq.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: oq,
          options: [{
            icon: Pq.icon,
            text: Pq.text,
            onPointerDown: Pq.onClick
          }, ...null === gq || tq.featureFlags.useSocialFeatures ? [] : (0, Vq.c)(null, gq)]
        })]
      })
    }
  },
  36606: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => uq
    });
    var Yq = gq(1926),
      lq = gq(2402),
      Oq = gq(36612);
    const mq = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function xq(qq, Eq) {
      return async () => function(qq, Eq, gq) {
        return null === Eq ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : Eq.ok ? {
          message: {
            key: mq[qq.type]
          },
          next: gq
        } : {
          message: {
            fromServer: Eq.message
          },
          next: null
        }
      }(qq, await (0, Oq.g)(qq), Eq())
    }

    function Aq(qq) {
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
        run: xq({
          type: "ban",
          name: qq
        }, (() => function(qq) {
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
            run: xq({
              type: "unban",
              name: qq
            }, (() => null))
          }
        }(qq)))
      }
    }

    function cq(qq, Eq) {
      if (null === qq) return [];
      const gq = [],
        Yq = function(qq, Eq) {
          var gq, Yq;
          return null !== (gq = null !== (Yq = qq.here.find((qq => qq.name === Eq))) && void 0 !== Yq ? Yq : qq.away.find((qq => qq.name === Eq))) && void 0 !== gq ? gq : null
        }(qq, Eq);
      var Oq, mq;
      return null !== Yq && void 0 !== Yq && Yq.can.kick && gq.push((Oq = Eq, mq = Yq.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: xq({
          type: "kick",
          name: Oq
        }, (() => mq ? Aq(Oq) : null))
      })), null !== Yq && void 0 !== Yq && Yq.can.ban && gq.push(Aq(Eq)), gq.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, lq.f)({
            page: "players",
            focusName: Eq,
            source: "profile_card"
          })
        }
      }), gq
    }

    function uq(qq) {
      var Eq;
      return cq(null !== (Eq = Yq.c.get("lobbyManage")) && void 0 !== Eq ? Eq : null, qq)
    }
  },
  36612: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      g: () => Aq
    });
    var Yq = gq(1448),
      lq = gq(1926),
      Oq = gq(1904);
    const mq = 1e4;
    let xq = 0;

    function Aq(qq) {
      const Eq = ++xq;
      return new Promise((gq => {
        const xq = Eq => {
            Aq(), clearTimeout(cq), !1 === (null === Eq || void 0 === Eq ? void 0 : Eq.ok) && (0, Yq.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: qq.type
            }), gq(Eq)
          },
          Aq = lq.c.subscribe("lobbyManage", (qq => {
            const gq = function(qq, Eq) {
              var gq;
              return null !== (gq = null === qq || void 0 === qq ? void 0 : qq.results.find((qq => qq.requestId === Eq))) && void 0 !== gq ? gq : null
            }(qq, Eq);
            null !== gq && xq(gq)
          })),
          cq = setTimeout((() => {
            xq(null)
          }), mq);
        Oq.gameBridge.send("lobbyManage", {
          ...qq,
          requestId: Eq
        })
      }))
    }
    const cq = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class uq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Aq;
        this.onChange = qq, this.sendAction = Eq, this.pending = new Map, this.statuses = new Map
      }
      send(qq, Eq, gq) {
        var Yq;
        return this.statuses.delete(Eq), this.pending.set(Eq, (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 0) + 1), this.sendAction(qq).then((qq => {
          var Yq;
          const lq = null !== qq && void 0 !== qq ? qq : {
              requestId: -1,
              ok: !1,
              message: cq
            },
            Oq = (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 1) - 1;
          Oq > 0 ? this.pending.set(Eq, Oq) : this.pending.delete(Eq);
          const mq = !lq.ok || lq.message.length > 0 ? lq.message : null === gq ? null : [gq];
          return null !== mq && this.statuses.set(Eq, {
            ok: lq.ok,
            text: mq,
            until: Date.now() + 4e3
          }), this.onChange(), lq
        }))
      }
      show(qq, Eq) {
        this.statuses.set(qq, {
          ...Eq,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(qq) {
        for (const [Eq, gq] of this.statuses) gq.until <= qq && this.statuses.delete(Eq)
      }
      nextDeadline() {
        let qq = null;
        for (const gq of this.statuses.values()) {
          var Eq;
          qq = Math.min(null !== (Eq = qq) && void 0 !== Eq ? Eq : 1 / 0, gq.until)
        }
        return qq
      }
      statusOf(qq, Eq) {
        const gq = this.statuses.get(qq);
        return !gq || gq.until <= Eq ? null : {
          ok: gq.ok,
          text: gq.text
        }
      }
      isPending(qq) {
        return this.pending.has(qq)
      }
    }
  },
  4588: (qq, Eq, gq) => {
    gq.d(Eq, {
      f: () => Hq,
      d: () => jq
    });
    var Yq = gq(57),
      lq = gq(1416),
      Oq = gq(1876),
      mq = gq(4597),
      xq = gq(1070);
    const Aq = (0, Yq.memo)((function(qq) {
      let {
        initialParameters: Eq
      } = qq;
      const gq = (0, Yq.useRef)(null),
        lq = (0, Yq.useRef)(null),
        Aq = (0, Yq.useRef)(0),
        cq = (0, Yq.useRef)(null),
        uq = Eq.description,
        Bq = Eq.zY,
        {
          scale: Wq,
          rotation: Nq
        } = null !== Eq && void 0 !== Eq ? Eq : {},
        aq = (0, mq.f)();
      return (0, Yq.useEffect)((() => {
        const qq = aq.onFrame((() => {
          const qq = aq.getState();
          if (!qq.isActive || !gq.current || !lq.current) return;
          const Eq = qq.state;
          if (gq.current.value = Eq.progress, Eq.clickCount > Aq.current) {
            Aq.current = Eq.clickCount;
            const qq = lq.current;
            qq.classList.add("pulse"), cq.current = setTimeout((() => {
              qq.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(cq.current), qq()
        }
      }), [aq]), (0, xq.jsx)(xq.Fragment, {
        children: (0, xq.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Wq && {
              "--scale": Wq
            },
            ...null !== Nq && {
              "--rotation": `${Nq}deg`
            }
          },
          children: [(0, xq.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: gq
          }), (0, xq.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: lq,
            children: (0, xq.jsx)(Oq.c, {
              text: [{
                icon: Bq
              }]
            })
          }), (0, xq.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, xq.jsx)(Oq.c, {
              text: uq
            })
          })]
        })
      })
    }));
    var cq = gq(1018),
      uq = gq.n(cq);
    const Bq = 2 * Math.PI * 90,
      Wq = (0, Yq.memo)((function(qq) {
        let {
          initialParameters: Eq
        } = qq;
        const gq = (0, Yq.useRef)(null),
          lq = (0, Yq.useRef)(null),
          Aq = (0, Yq.useRef)(null),
          cq = Eq.label,
          Wq = Eq.icon,
          Nq = Eq.GY,
          {
            scale: aq,
            rotation: Vq,
            LY: dq
          } = null !== Eq && void 0 !== Eq ? Eq : {},
          jq = (0, mq.f)();
        return (0, Yq.useEffect)((() => {
          const qq = jq.onFrame((() => {
            var qq, Eq;
            const Yq = jq.getState();
            if (!Yq.isActive || !lq.current) return;
            const Oq = Yq.state,
              mq = null !== (qq = Oq.timeRemaining) && void 0 !== qq ? qq : 0,
              xq = null !== (Eq = Oq.pY) && void 0 !== Eq ? Eq : 1,
              cq = Bq * (1 - mq / xq);
            lq.current.style.strokeDashoffset = `${cq}`, gq.current && (gq.current.style.opacity = mq > 0 ? "1" : "0"), Aq.current && Nq && (Aq.current.textContent = `${(mq/1e3).toFixed(1)}s`)
          }));
          return () => {
            qq()
          }
        }), [jq, Nq]), (0, xq.jsxs)("div", {
          className: "QTETimedClick",
          ref: gq,
          style: {
            ...null !== aq && {
              "--scale": aq
            },
            ...null !== Vq && {
              "--rotation": `${Vq}deg`
            }
          },
          children: [(0, xq.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, xq.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, xq.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, xq.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Bq,
                ref: lq
              })]
            }), (0, xq.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, xq.jsx)(Oq.c, {
                text: [{
                  icon: Wq
                }],
                className: uq()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: dq
                })
              })
            })]
          }), (0, xq.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, xq.jsx)(Oq.c, {
              text: cq,
              className: "QTETimedClickLabelText"
            }), Nq && (0, xq.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Aq
            })]
          })]
        })
      })),
      Nq = (0, Yq.memo)((function(qq) {
        let {
          initialParameters: Eq
        } = qq;
        const gq = (0, Yq.useRef)(null),
          lq = (0, Yq.useRef)(null),
          Aq = (0, Yq.useRef)(null),
          cq = (0, Yq.useRef)(!1),
          uq = Eq.description,
          Bq = null === Eq || void 0 === Eq ? void 0 : Eq.icon,
          Wq = (0, mq.f)();
        return (0, Yq.useEffect)((() => {
          const qq = Wq.onFrame((() => {
            const qq = Wq.getState();
            if (!qq.isActive) return;
            const Eq = qq.state;
            if (gq.current) {
              const qq = 100 * (Eq.catchZonePosition - Eq.kY / 2);
              gq.current.style.left = `${qq}%`, gq.current.style.width = 100 * Eq.kY + "%", Eq.isCatching !== cq.current && (cq.current = Eq.isCatching, Eq.isCatching ? gq.current.classList.add("catching") : gq.current.classList.remove("catching"))
            }
            lq.current && (lq.current.style.left = 100 * Eq.moverPosition + "%"), Aq.current && (Aq.current.value = Eq.progress)
          }));
          return () => {
            qq()
          }
        }), [Wq]), (0, xq.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, xq.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, xq.jsx)(Oq.c, {
              text: uq
            })
          }), (0, xq.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Aq
          }), (0, xq.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, xq.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: gq
            }), (0, xq.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: lq,
              children: (0, xq.jsx)("span", {
                children: Bq && (0, xq.jsx)(Oq.c, {
                  text: [{
                    icon: Bq,
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
    var aq = gq(598);
    const Vq = (0, Yq.memo)((function(qq) {
        let {
          initialParameters: Eq
        } = qq;
        const gq = (0, Yq.useRef)(null),
          lq = Eq.label,
          Aq = Eq.KY,
          {
            icon: cq,
            scale: uq,
            rotation: Bq
          } = null !== Eq && void 0 !== Eq ? Eq : {},
          Wq = 100 * (.5 - Aq / 2),
          Nq = 100 * Aq,
          Vq = (0, mq.f)();
        return (0, Yq.useEffect)((() => {
          const qq = Vq.onFrame((() => {
            const qq = Vq.getState();
            if (!qq.isActive || !gq.current) return;
            const Eq = qq.state;
            gq.current.style.left = 100 * Eq.markerPosition + "%"
          }));
          return () => {
            qq()
          }
        }), [Vq]), (0, xq.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, aq.H)(uq) && {
              "--scale": uq
            },
            ...!(0, aq.H)(Bq) && {
              "--rotation": `${Bq}deg`
            }
          },
          children: [cq && (0, xq.jsx)(Oq.c, {
            text: [{
              icon: cq
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, xq.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, xq.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Wq}%`,
                width: `${Nq}%`
              }
            }), (0, xq.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: gq
            })]
          }), (0, xq.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, xq.jsx)(Oq.c, {
              text: lq
            })
          })]
        })
      })),
      dq = (0, Yq.memo)((function(qq) {
        let {
          initialParameters: Eq
        } = qq;
        const gq = (0, Yq.useRef)(null),
          [lq, Aq] = (0, Yq.useState)((() => new Array(Eq.IY).fill("pending"))),
          [cq, uq] = (0, Yq.useState)((() => {
            const qq = Eq.ql;
            return (0, aq.H)(qq) || qq <= 0 ? [] : new Array(qq).fill("pending")
          })),
          Bq = Eq.label,
          {
            icon: Wq
          } = Eq,
          Nq = (0, Yq.useRef)(0),
          Vq = (0, Yq.useRef)(0),
          dq = (0, Yq.useRef)([]),
          jq = (0, mq.f)();
        return (0, Yq.useEffect)((() => {
          const qq = jq.onFrame((() => {
            const qq = jq.getState();
            if (!qq.isActive || !gq.current) return;
            const Eq = qq.state,
              Yq = 30 + 60 * Eq.outerCircleProgress;
            if (gq.current.setAttribute("r", String(Yq)), !0 === Eq.lastClickResult && Eq.successes > Nq.current) {
              gq.current.classList.remove("QTERhythmClickOuterCircle--miss"), gq.current.classList.add("QTERhythmClickOuterCircle--hit");
              const qq = setTimeout((() => {
                var qq;
                null === (qq = gq.current) || void 0 === qq || qq.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              dq.current.push(qq)
            } else if (!1 === Eq.lastClickResult && Eq.misses > Vq.current) {
              gq.current.classList.remove("QTERhythmClickOuterCircle--hit"), gq.current.classList.add("QTERhythmClickOuterCircle--miss");
              const qq = setTimeout((() => {
                var qq;
                null === (qq = gq.current) || void 0 === qq || qq.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              dq.current.push(qq)
            }
            Eq.successes === Nq.current && Eq.misses === Vq.current || (Nq.current = Eq.successes, Vq.current = Eq.misses, Aq((qq => {
              const gq = [...qq];
              for (let Yq = 0; Yq < Eq.IY; Yq++) gq[Yq] = Yq < Eq.successes ? "success" : "pending";
              return gq
            })), uq((qq => {
              if (0 === qq.length) return qq;
              const gq = [...qq];
              for (let Yq = 0; Yq < gq.length; Yq++) gq[Yq] = Yq < Eq.misses ? "miss" : "pending";
              return gq
            })))
          }));
          return () => {
            qq();
            for (const qq of dq.current) clearTimeout(qq);
            dq.current = []
          }
        }), [jq]), (0, xq.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, xq.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: lq.map(((qq, Eq) => (0, xq.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === qq ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, Eq)))
          }), (0, xq.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, xq.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, xq.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, xq.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: gq
              })]
            }), Wq && (0, xq.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, xq.jsx)(Oq.c, {
                text: [{
                  icon: Wq
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), cq.length > 0 && (0, xq.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: cq.map(((qq, Eq) => (0, xq.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === qq ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, Eq)))
          }), (0, xq.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, xq.jsx)(Oq.c, {
              text: Bq
            })
          })]
        })
      }));

    function jq(qq) {
      let {
        qte: Eq
      } = qq;
      switch (Eq.type) {
        case "progressBar":
          return (0, xq.jsx)(Aq, {
            initialParameters: Eq.parameters
          });
        case "timedClick":
          return (0, xq.jsx)(Wq, {
            initialParameters: Eq.parameters
          });
        case "gravityBar":
          return (0, xq.jsx)(Nq, {
            initialParameters: Eq.parameters
          });
        case "precisionBar":
          return (0, xq.jsx)(Vq, {
            initialParameters: Eq.parameters
          });
        case "rhythmClick":
          return (0, xq.jsx)(dq, {
            initialParameters: Eq.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Hq = (0, Yq.memo)((function() {
      const [qq, Eq] = (0, Yq.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, lq.f)("qteStateUpdated", (qq => {
        Eq(qq)
      })), qq.isActive && qq.type ? (0, xq.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, xq.jsx)(jq, {
          qte: qq
        })
      }) : null
    }))
  },
  4597: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      f: () => Aq
    });
    var Yq = gq(57),
      lq = gq(1283),
      Oq = gq(4606);
    const mq = {
        getState: () => Oq.b.getCurrentState(),
        onFrame: lq.s
      },
      xq = (0, Yq.createContext)(mq);

    function Aq() {
      return (0, Yq.useContext)(xq)
    }
  },
  9270: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1942),
      xq = gq(1070);

    function Aq(qq) {
      const Eq = Math.floor(qq / 3600),
        gq = Math.floor(qq % 3600 / 60),
        Yq = Math.floor(qq % 60),
        lq = `${gq.toString().padStart(2,"0")}:${Yq.toString().padStart(2,"0")}`;
      return Eq > 0 ? `${Eq}:${lq}` : lq
    }
    const cq = (0, Yq.memo)((function(qq) {
      let {
        className: Eq
      } = qq;
      const {
        recording: gq,
        seconds: Yq
      } = (0, mq.g)("replayRecorder");
      return gq ? (0, xq.jsxs)("div", {
        className: Oq()("RecordingIndicator", Eq),
        children: [(0, xq.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, xq.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, xq.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Aq(Yq)
        })]
      }) : null
    }))
  },
  36415: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Wq
    });
    var Yq = gq(57),
      lq = gq(1336),
      Oq = gq(1183),
      mq = gq(1326),
      xq = gq(3358),
      Aq = gq(4764),
      cq = gq(1070);

    function uq(qq) {
      let {
        loading: Eq,
        schematics: gq,
        onSchematicPicked: Yq,
        selectedSchematicIdList: lq = [],
        disableAutoExport: Aq
      } = qq;
      const {
        t: uq
      } = (0, Oq.v)();
      return (0, cq.jsxs)("div", {
        className: "SchematicList",
        children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
          className: "NoSchematicsText",
          children: uq("worldBuilder:noSavedSchematic")
        }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
          source: {
            type: "schematic",
            schematic: qq
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Yq(qq)
          },
          isSelected: lq.includes(qq.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: qq.isAutoExported && Aq,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, qq.schematicId)))]
      })
    }

    function Bq(qq) {
      let {
        ownedSchematics: Eq,
        currentWorldSchematicId: gq,
        onClose: lq
      } = qq;
      const {
        t: mq
      } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
      return (0, cq.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === xq && (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mq("worldBuilder:schematicList")
          }), (0, cq.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mq("worldBuilder:clickSchematicForOptions")
          }), (0, cq.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cq.jsx)(uq, {
              loading: !1,
              schematics: Eq,
              onSchematicPicked: qq => {
                Bq(qq)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== xq && (0, cq.jsx)(Aq.i, {
          schematic: xq,
          inSourceWorld: xq.schematicId === gq,
          onSchematicUpdate: qq => {
            Bq(qq)
          },
          onClose: () => {
            Bq(null), lq()
          }
        })]
      })
    }

    function Wq(qq) {
      let {
        ownedSchematics: Eq,
        currentWorldSchematicId: gq,
        onClose: Yq
      } = qq;
      lq.NotificationProvider.showCustomPopup({
        body: qq => (0, cq.jsx)(Bq, {
          ownedSchematics: Eq,
          currentWorldSchematicId: gq,
          onClose: qq
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Yq,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36974: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Qq,
      g: () => Pq
    });
    var Yq = gq(4111),
      lq = gq(1416),
      Oq = gq(57),
      mq = gq(6348),
      xq = gq(4098),
      Aq = gq(1274),
      cq = gq(1904),
      uq = gq(1876),
      Bq = gq(1422),
      Wq = gq(1183),
      Nq = gq(36979),
      aq = gq(1018),
      Vq = gq.n(aq),
      dq = gq(1298),
      jq = gq(1025),
      Hq = gq(1267),
      oq = gq(1070);
    const Pq = "SleepingOverlay";

    function Qq() {
      const {
        t: qq
      } = (0, Wq.v)(), [Eq, gq] = (0, Oq.useState)(!1), [aq, Qq] = (0, Oq.useState)(null), [tq, rq] = (0, Oq.useState)(1), [vq, hq] = (0, Oq.useState)(!1), [nq, bq] = (0, Oq.useState)(!1), iq = (0, Oq.useRef)(0), Zq = (0, Oq.useRef)(!1), fq = (0, Oq.useRef)(!1), Mq = (0, Oq.useRef)(), Tq = (0, Oq.useRef)(null);

      function zq() {
        const qq = null !== aq && void 0 !== aq ? aq : "Rested Speed";
        cq.gameBridge.send("wakeUp", nq ? qq : null), Tq.current = null, gq(!1), Qq(null), rq(1), hq(!1), bq(!1)
      }

      function Sq() {
        return !vq && (zq(), !0)
      }
      return (0, lq.f)("PlayerPhysicsTypeUpdate", (qq => {
        qq !== Tq.current && (Tq.current = qq, qq === mq.t.SLEEPING ? (fq.current || (iq.current = cq.gameBridge.lookup("cameraZoom", null), fq.current = !0), Zq.current = !0, cq.gameBridge.send("setCameraZoom", 3), gq(!0), rq(function() {
          for (const qq of cq.gameBridge.lookup("blocksStandingOn", null)) {
            if (Nq.e.leafBeds.includes(qq)) return console.log(`Found leaf bed: ${qq}`), 1;
            if (Nq.e.woolBeds.includes(qq)) return console.log(`Found woold bed: ${qq}`), 2;
            if (Nq.e.strongBeds.includes(qq)) return console.log(`Found strong bed ${qq}`), 3
          }
          return 1
        }())) : (fq.current = !1, gq(!1), Qq(null), rq(1)))
      })), (0, Oq.useEffect)((() => () => {
        (0, Aq.j)(Pq)
      }), []), (0, Oq.useEffect)((() => {
        Eq ? (0, Aq.m)(Pq) : ((0, Aq.j)(Pq), Zq.current && (cq.gameBridge.send("setCameraZoom", iq.current), Zq.current = !1))
      }), [Eq]), (0, Hq.w)("overlay", Mq, Sq, Eq), (0, oq.jsx)(Yq.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Eq,
        timeout: 300,
        nodeRef: Mq,
        unmountOnExit: !0,
        children: (0, oq.jsx)("div", {
          ref: Mq,
          onClick: qq => {
            Sq() && qq.stopPropagation()
          },
          children: (0, oq.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, oq.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: xq.f.map((Eq => (0, oq.jsxs)(yq, {
                restedEffect: Eq,
                Bm: aq,
                setChosenRestedEffect: Qq,
                children: [(0, oq.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, oq.jsx)(uq.c, {
                    text: [{
                      icon: Eq
                    }]
                  }), xq.c[Eq].shortName]
                }), (0, oq.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: qq(xq.c[Eq].description, {
                    time: xq.c[Eq].effectLevelDurations[tq] / 6e4
                  })
                })]
              }, Eq)))
            }), (0, oq.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, oq.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, oq.jsxs)(Bq.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: qq => {
                  nq ? zq() : (hq(!0), (0, dq.kb)((() => {
                    hq(!1), bq(!0)
                  }), !0)), qq.stopPropagation()
                },
                loading: vq,
                children: [!nq && (0, oq.jsxs)(oq.Fragment, {
                  children: [(0, oq.jsx)(jq.d, {
                    name: "film"
                  }), " ", qq("classicGame:watchAdToGetRestedPerk")]
                }), nq && qq("classicGame:wakeUp")]
              }), (0, oq.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, oq.jsx)("div", {
                  className: Vq()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === tq
                  }),
                  children: (0, oq.jsx)(uq.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, oq.jsx)("div", {
                  className: Vq()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === tq
                  }),
                  children: (0, oq.jsx)(uq.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, oq.jsx)("div", {
                  className: Vq()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === tq
                  }),
                  children: (0, oq.jsx)(uq.c, {
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
    const yq = (0, Oq.memo)((function(qq) {
      let {
        children: Eq,
        restedEffect: gq,
        Bm: Yq,
        setChosenRestedEffect: lq
      } = qq;
      return gq === Yq ? (0, oq.jsx)(Bq.p, {
        onClick: qq => {
          qq.stopPropagation()
        },
        children: Eq
      }) : (0, oq.jsx)(Bq.i, {
        onClick: qq => {
          lq(gq), qq.stopPropagation()
        },
        children: Eq
      })
    }))
  },
  36599: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      f: () => Aq
    });
    var Yq = gq(576),
      lq = gq(1904),
      Oq = gq(1628),
      mq = gq(96),
      xq = gq(1252);

    function Aq(qq, Eq, gq) {
      return mq.featureFlags.useSocialFeatures && qq && null === (0, xq.d)(Eq, gq)
    }

    function cq(qq, Eq) {
      var gq, mq;
      const xq = Oq.c.getSocialState().friends.find((qq => qq.name.toLowerCase() === Eq.toLowerCase())),
        Aq = lq.gameBridge.latest("players").byId[qq],
        cq = void 0 !== Aq && Aq.name === Eq,
        uq = cq && null !== (gq = Aq.cosmetics) && void 0 !== gq ? gq : void 0,
        Bq = xq && uq ? {
          ...xq,
          cosmetics: uq
        } : xq;
      return {
        playerSocialPreview: null !== Bq && void 0 !== Bq ? Bq : {
          isError: !1,
          name: Eq,
          ranks: cq ? [...Aq.ranks] : [],
          cosmetics: null !== uq && void 0 !== uq ? uq : {},
          nameColour: null !== (mq = null === uq || void 0 === uq ? void 0 : uq.nameColour) && void 0 !== mq ? mq : Yq.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== xq
      }
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  4748: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1070);

    function xq(qq) {
      let {
        columns: Eq,
        rows: gq,
        getRowKey: lq,
        renderRow: xq,
        className: Aq
      } = qq;
      return (0, mq.jsxs)("table", {
        className: Oq()("Table", Aq),
        children: [(0, mq.jsx)("thead", {
          children: (0, mq.jsx)("tr", {
            children: Eq.map((qq => (0, mq.jsx)("th", {
              children: qq.header
            }, qq.key)))
          })
        }), (0, mq.jsx)("tbody", {
          children: gq.map((qq => (0, mq.jsx)(Yq.Fragment, {
            children: xq(qq)
          }, lq(qq))))
        })]
      })
    }
  },
  36931: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => rq,
      e: () => yq,
      h: () => tq,
      l: () => aq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(71),
      xq = gq(1343),
      Aq = gq(1422),
      cq = gq(1341),
      uq = gq(1267),
      Bq = gq(1183),
      Wq = gq(36935),
      Nq = gq(1070);

    function aq(qq) {
      const [Eq, gq] = (0, Oq.useState)((() => (0, Wq.j)(qq)));
      return (0, Oq.useEffect)((() => (gq((0, Wq.j)(qq)), (0, Wq.L)((() => {
        gq((0, Wq.j)(qq))
      })))), [qq]), Eq
    }

    function Vq(qq, Eq) {
      "function" === typeof qq ? qq(Eq) : qq && (qq.current = Eq)
    }

    function dq(qq) {
      let {
        tutorial: Eq,
        step: gq,
        enabled: Yq = !0
      } = qq;
      const lq = aq(Eq);
      return Yq && lq === gq
    }

    function jq(qq, Eq) {
      const gq = (0, Wq.m)(qq),
        Yq = gq.indexOf(Eq);
      return !gq.slice(Yq + 1).some((Eq => (0, Wq.u)(qq, Eq)))
    }

    function Hq(qq, Eq, gq, Yq) {
      let {
        tutorial: lq,
        step: Oq,
        waitForClick: mq = !1,
        onPrevious: xq
      } = qq;
      const Aq = Eq && (0, Wq.s)(lq, Oq),
        cq = Eq && !jq(lq, Oq),
        Bq = mq ? Yq : gq;
      let Nq = null;
      Aq ? Nq = () => {
        null === xq || void 0 === xq || xq(), (0, Wq.p)(lq, Oq)
      } : cq && (Nq = () => {
        (0, Wq.i)(lq)
      }), (0, uq.w)("popup", null !== Bq && void 0 !== Bq ? Bq : gq, Nq, Eq && null !== Bq, null, Aq ? void 0 : "controller:menusSkipTutorial")
    }

    function oq(qq) {
      let {
        tutorial: Eq,
        step: gq,
        text: Yq,
        waitForClick: lq = !1,
        onPrevious: Oq
      } = qq;
      const {
        t: mq
      } = (0, Bq.v)(), xq = jq(Eq, gq);
      return (0, Nq.jsxs)(Nq.Fragment, {
        children: [(0, Nq.jsx)("div", {
          className: "TutorialStepText",
          children: Yq
        }), (0, Nq.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Wq.s)(Eq, gq) && (0, Nq.jsx)(Aq.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Oq || void 0 === Oq || Oq(), (0, Wq.p)(Eq, gq)
            },
            children: mq("tutorial:back")
          }), !lq && (0, Nq.jsx)(Aq.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wq.e)(gq)
            },
            padDefaultFocus: !0,
            children: mq(xq ? "tutorial:done" : "tutorial:next")
          }), !xq && (0, Nq.jsx)(Aq.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wq.i)(Eq)
            },
            children: mq("tutorial:skip")
          })]
        })]
      })
    }
    const Pq = 6;

    function Qq(qq) {
      let {
        rect: Eq,
        margin: gq
      } = qq;
      const Yq = Math.max(0, Eq.top - gq),
        lq = Eq.bottom + gq,
        Oq = Math.max(0, Eq.left - gq),
        mq = Eq.right + gq;
      return (0, Nq.jsxs)(Nq.Fragment, {
        children: [(0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Yq
          }
        }), (0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: lq,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Yq,
            left: 0,
            width: Oq,
            height: lq - Yq
          }
        }), (0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Yq,
            left: mq,
            right: 0,
            height: lq - Yq
          }
        })]
      })
    }

    function yq(qq) {
      let {
        target: Eq,
        placement: gq,
        boxRef: Yq,
        className: Aq,
        spotlightMargin: uq = Pq,
        children: Bq
      } = qq;
      const {
        getArrowProps: Wq,
        getTooltipProps: aq,
        setTooltipRef: Vq,
        setTriggerRef: dq
      } = (0, xq.d)({
        placement: gq,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, uq]
      });
      (0, Oq.useLayoutEffect)((() => {
        dq(Eq)
      }), [Eq, dq]);
      const jq = function(qq, Eq) {
        const [gq, Yq] = (0, Oq.useState)(null);
        return (0, Oq.useEffect)((() => {
          if (!Eq || !qq) return void Yq(null);
          let gq = 0,
            lq = null;
          const Oq = () => {
            const Eq = qq.getBoundingClientRect();
            lq && Eq.left === lq.left && Eq.top === lq.top && Eq.width === lq.width && Eq.height === lq.height || (lq = Eq, Yq(Eq)), gq = requestAnimationFrame(Oq)
          };
          return Oq(), () => {
            cancelAnimationFrame(gq)
          }
        }), [qq, Eq]), gq
      }(Eq, !0);
      (0, Oq.useEffect)((() => {
        null === Eq || void 0 === Eq || Eq.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Eq]);
      const Hq = (0, Oq.useCallback)((qq => {
        Vq(qq), Yq && (Yq.current = qq)
      }), [Vq, Yq]);
      return (0, mq.createPortal)((0, Nq.jsxs)(Nq.Fragment, {
        children: [jq && (0, Nq.jsx)(Qq, {
          rect: jq,
          margin: uq
        }), (0, Nq.jsxs)("div", {
          ref: Hq,
          ...aq({
            className: lq()("tooltip-container SmallTextLight TutorialStep", Aq)
          }),
          children: [Bq, (0, Nq.jsx)("div", {
            ...Wq({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, cq.f)())
    }
    const tq = (0, Oq.forwardRef)((function(qq, Eq) {
      let {
        placement: gq = "right",
        children: Yq,
        ...lq
      } = qq;
      const mq = dq(lq),
        xq = (0, Oq.useRef)(null),
        Aq = (0, Oq.useRef)(null);
      Hq(lq, mq, xq, Aq);
      const [cq, uq] = (0, Oq.useState)(null), Bq = Yq.ref, Wq = (0, Oq.useCallback)((qq => {
        Aq.current = qq, uq(qq), Vq(Eq, qq), Vq(Bq, qq)
      }), [Eq, Bq]);
      return (0, Nq.jsxs)(Nq.Fragment, {
        children: [(0, Oq.cloneElement)(Yq, {
          ref: Wq
        }), mq && (0, Nq.jsx)(yq, {
          target: cq,
          placement: gq,
          boxRef: xq,
          children: (0, Nq.jsx)(oq, {
            ...lq
          })
        })]
      })
    }));

    function rq(qq) {
      const Eq = dq(qq),
        gq = (0, Oq.useRef)(null);
      return Hq(qq, Eq, gq, null), Eq ? (0, mq.createPortal)((0, Nq.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nq.jsx)("div", {
          ref: gq,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nq.jsx)(oq, {
            ...qq
          })
        })
      }), (0, cq.f)()) : null
    }
  },
  36740: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => mq,
      i: () => xq,
      j: () => Aq
    });
    var Yq = gq(57),
      lq = gq(3018);
    const Oq = 8,
      mq = "InGameHeaderContainer",
      xq = "TopRightElements";

    function Aq(qq) {
      const [Eq] = (0, lq.b)(), [gq, Aq] = (0, Yq.useState)(!1);
      return (0, Yq.useLayoutEffect)((() => {
        if (!qq) return;
        const Eq = document.querySelector(`.${mq}`),
          gq = document.querySelector(`.${xq}`),
          Yq = () => {
            const Yq = qq.getBoundingClientRect(),
              lq = Eq ? Eq.getBoundingClientRect().right : 0,
              mq = gq ? gq.getBoundingClientRect().left : window.innerWidth,
              xq = Yq.left < lq + Oq,
              cq = Yq.right > mq - Oq;
            Aq(xq || cq)
          };
        Yq();
        const lq = new ResizeObserver(Yq);
        return lq.observe(qq), Eq && lq.observe(Eq), gq && lq.observe(gq), () => {
          lq.disconnect()
        }
      }), [qq, Eq]), gq
    }
  },
  6434: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(57),
      lq = gq(38);

    function Oq(qq, Eq) {
      var gq;
      const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
      return [Oq, Eq => {
        lq.i.setItem(qq, Eq), mq(Eq)
      }]
    }
  },
  36768: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1659),
      xq = gq(1422),
      Aq = gq(1326),
      cq = gq(1025),
      uq = gq(1070);

    function Bq(qq) {
      let {
        label: Eq,
        icon: gq,
        placeholder: lq,
        onSubmit: Bq
      } = qq;
      const Wq = (0, Yq.useRef)(null),
        [Nq, aq] = (0, Yq.useState)(""),
        [Vq, dq] = (0, Yq.useState)("Enter"),
        [jq, Hq] = (0, Yq.useState)(null);
      (0, Yq.useEffect)((() => {
        if ("Success" !== Vq && "Error" !== Vq) return;
        const qq = setTimeout((() => {
          "Success" === Vq && Wq.current && (Wq.current.value = "", aq("")), dq("Enter")
        }), "Success" === Vq ? 1e3 : 4e3);
        return () => {
          clearTimeout(qq)
        }
      }), [Vq]);
      const oq = () => {
        const qq = Nq.trim();
        "" !== qq && "Enter" === Vq && (dq("Loading"), Bq(qq).then((qq => {
          Wq.current && ("error" in qq ? null === qq.error ? dq("Enter") : (Hq(qq.error), dq("Error")) : dq("Success"))
        })))
      };
      return (0, uq.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: qq => {
          qq.target === Wq.current && "Escape" !== qq.key && qq.stopPropagation()
        },
        children: [(0, uq.jsxs)("div", {
          className: Oq()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Vq}`),
          children: ["Loading" === Vq && (0, uq.jsx)(Aq.e, {}), "Success" === Vq && (0, uq.jsx)(cq.d, {
            name: "check"
          }), "Error" === Vq && jq]
        }), (0, uq.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, uq.jsx)(mq.b, {
            className: "PlayerSearchInput",
            domRef: Wq,
            maxLength: 32,
            placeholderText: lq,
            ariaLabel: lq,
            stopPropagation: !1,
            onValueChange: qq => {
              aq(qq)
            },
            onEnter: oq
          }), (0, uq.jsxs)(xq.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Vq || "" === Nq.trim(),
            onClick: oq,
            children: [(0, uq.jsx)(cq.d, {
              name: gq
            }), " ", Eq]
          })]
        })]
      })
    }
  },
  36757: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1183),
      xq = gq(1025),
      Aq = gq(1070);
    const cq = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      uq = ["unlisted", "public", "whitelist", "private"];

    function Bq(qq) {
      let {
        visibility: Eq,
        onPick: gq
      } = qq;
      const {
        t: lq
      } = (0, mq.v)(), Bq = (0, Yq.useRef)([]);
      return (0, Aq.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": lq("worldSocial:whoCanJoin"),
        children: uq.map(((qq, Yq) => {
          const mq = qq === Eq;
          return (0, Aq.jsxs)("button", {
            ref: qq => {
              Bq.current[Yq] = qq
            },
            type: "button",
            className: Oq()("WorldSocialTile", {
              WorldSocialTileSelected: mq
            }),
            "aria-pressed": mq,
            tabIndex: mq ? 0 : -1,
            onKeyDown: qq => {
              ((qq, Eq) => {
                const gq = "ArrowRight" === qq.key || "ArrowDown" === qq.key ? 1 : "ArrowLeft" === qq.key || "ArrowUp" === qq.key ? -1 : 0;
                var Yq;
                0 !== gq && (qq.preventDefault(), null === (Yq = Bq.current[(Eq + gq + uq.length) % uq.length]) || void 0 === Yq || Yq.focus())
              })(qq, Yq)
            },
            onClick: () => {
              gq(qq)
            },
            children: [(0, Aq.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Aq.jsx)(xq.d, {
                name: cq[qq]
              })
            }), (0, Aq.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Aq.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: lq(`worldSocial:${qq}`)
              }), (0, Aq.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: lq(`worldSocial:${qq}Description`)
              })]
            })]
          }, qq)
        }))
      })
    }
  },
  36764: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    var Yq = gq(1183),
      lq = gq(2563),
      Oq = gq(4195),
      mq = gq(1070);

    function xq(qq) {
      let {
        SB: Eq,
        children: gq,
        ...xq
      } = qq;
      const {
        t: Aq
      } = (0, Yq.v)();
      return (0, mq.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Eq.onChange(!Eq.on)
        },
        children: (0, mq.jsx)(lq.i, {
          ...xq,
          opensProfileCard: !1,
          children: (0, mq.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: qq => {
              qq.stopPropagation()
            },
            children: [gq, (0, mq.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, mq.jsx)(Oq.b, {
                checked: Eq.on,
                disabled: !1,
                ariaLabel: Aq("worldSocial:letJoin", {
                  playerName: xq.playerSocialPreview.name
                }),
                onChange: qq => {
                  Eq.onChange(qq.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36755: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => aq
    });
    var Yq = gq(57),
      lq = gq(1183),
      Oq = gq(1824),
      mq = gq(96),
      xq = gq(24),
      Aq = gq(1448),
      cq = gq(2595),
      uq = gq(9176),
      Bq = gq(1422),
      Wq = gq(1025),
      Nq = gq(1070);

    function aq(qq) {
      let {
        worldCode: Eq,
        message: gq
      } = qq;
      const {
        t: aq
      } = (0, lq.v)(), {
        isTouchScreen: Vq
      } = (0, xq.j)(["isTouchScreen"]), dq = mq.featureFlags.canUseInviteLinks, jq = (0, uq.g)(dq && null === gq), [Hq, oq] = (0, cq.i)(), Pq = (0, Yq.useRef)(null);
      if (null !== gq) return (0, Nq.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Nq.jsx)(Wq.d, {
          name: "lock"
        }), (0, Nq.jsx)("span", {
          children: gq
        })]
      });
      const Qq = dq ? jq : Eq,
        yq = Vq && dq && (0, cq.b)();
      return (0, Nq.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!dq && (0, Nq.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: aq("worldSocial:worldCode")
        }), (0, Nq.jsx)("input", {
          ref: Pq,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Qq && void 0 !== Qq ? Qq : "",
          "aria-label": aq(dq ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: qq => {
            qq.currentTarget.select()
          }
        }), (0, Nq.jsxs)(Bq.g, {
          className: "WorldSocialCopy",
          disabled: null === Qq,
          onClick: () => {
            null !== Qq && (0, cq.f)(Qq, {
              useShareSheet: yq,
              onOutcome: qq => {
                if ((0, Aq.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== qq || dq ? qq : "code"
                  }), "copied" === qq) oq();
                else if ("failed" === qq) {
                  var Eq;
                  null === (Eq = Pq.current) || void 0 === Eq || Eq.focus(), Oq.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Nq.jsx)(Wq.d, {
            name: Hq ? "check" : yq ? "up-from-bracket" : "copy"
          }), " ", aq(Hq ? "general:copied" : yq ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36759: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Nq,
      h: () => Wq,
      l: () => Bq
    });
    var Yq = gq(576),
      lq = gq(1183),
      Oq = gq(1628),
      mq = gq(2563),
      xq = gq(2517),
      Aq = gq(1422),
      cq = gq(36764),
      uq = gq(1070);

    function Bq(qq, Eq) {
      var gq;
      return {
        isError: !1,
        name: qq,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Eq && void 0 !== Eq ? Eq : {},
        nameColour: null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.nameColour) && void 0 !== gq ? gq : Yq.e,
        location: {
          status: "offline"
        }
      }
    }

    function Wq(qq) {
      let {
        player: Eq,
        isFriend: gq = !1,
        status: Yq,
        showLocation: Aq = void 0 === Yq,
        SB: Bq,
        onSendFriendRequest: Wq,
        actions: Nq,
        zIndex: aq
      } = qq;
      const {
        t: Vq
      } = (0, lq.v)();
      let dq = Yq;
      null !== Bq && void 0 !== Bq && Bq.on && (dq = (0, uq.jsxs)(uq.Fragment, {
        children: [null !== Yq && void 0 !== Yq ? Yq : (0, uq.jsx)(xq.e, {
          socialPreview: Eq
        }), (0, uq.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Vq("worldSocial:canJoin")]
        })]
      }));
      const jq = {
        playerSocialPreview: Eq,
        isFriend: gq,
        hideFriendBadge: !0,
        onFriendRemoved: gq ? qq => {
          Oq.c.removeFriendFromState(qq)
        } : void 0,
        status: dq,
        showLocation: Aq,
        onSendFriendRequest: Wq,
        zIndex: aq
      };
      return Bq ? (0, uq.jsx)(cq.d, {
        ...jq,
        SB: Bq,
        children: Nq
      }) : (0, uq.jsx)(mq.i, {
        ...jq,
        opensProfileCard: !1,
        children: Nq || void 0
      })
    }

    function Nq(qq) {
      let {
        row: Eq,
        SB: gq,
        canInvite: Yq,
        invited: Oq,
        onInvite: mq,
        zIndex: xq
      } = qq;
      const {
        t: cq
      } = (0, lq.v)(), Bq = "online" === Eq.place ? Aq.g : Aq.i;
      return (0, uq.jsx)(Wq, {
        player: Eq.friend,
        isFriend: !0,
        status: "here" === Eq.place ? cq("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        SB: gq,
        zIndex: xq,
        actions: Yq && (0, uq.jsx)(Bq, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Oq,
          onClick: mq,
          ariaLabel: `${cq("worldSocial:invite")} ${Eq.friend.name}`,
          children: cq(Oq ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36748: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq,
      h: () => mq,
      j: () => cq
    });
    var Yq = gq(57),
      lq = gq(4413),
      Oq = gq(1824);

    function mq(qq) {
      const Eq = {
        lobbyName: qq,
        answer: null,
        response: lq.d.getSocialSettings(qq)
      };
      return Eq.response.then((qq => {
        Eq.answer = qq
      })), Eq
    }
    const xq = new Map;

    function Aq(qq) {
      xq.set(qq.lobbyName, qq)
    }

    function cq(qq) {
      const [Eq] = (0, Yq.useState)((() => function(qq) {
        var Eq;
        const gq = null !== (Eq = xq.get(qq)) && void 0 !== Eq ? Eq : null;
        return null !== gq && void 0 !== gq && gq.answer && "error" in gq.answer ? null : gq
      }(qq))), [gq, mq] = (0, Yq.useState)((() => null !== Eq && void 0 !== Eq && Eq.answer && "settings" in Eq.answer ? Eq.answer.settings : null)), [Aq, cq] = (0, Yq.useState)(!0), [uq, Bq] = (0, Yq.useState)(null !== gq), Wq = (0, Yq.useRef)(gq);
      Wq.current = gq;
      const Nq = (0, Yq.useRef)(0),
        aq = (0, Yq.useRef)(0),
        Vq = (0, Yq.useRef)(!1),
        dq = (0, Yq.useRef)(!0),
        jq = (0, Yq.useCallback)((async Eq => {
          const gq = ++Nq.current,
            Yq = await (null !== Eq && void 0 !== Eq ? Eq : lq.d.getSocialSettings(qq));
          dq.current && gq === Nq.current && (Bq(!0), cq(!1), "error" in Yq || mq(Yq.settings))
        }), [qq]),
        Hq = (0, Yq.useCallback)((() => {
          cq(!0), jq()
        }), [jq]),
        oq = (0, Yq.useCallback)((() => {
          aq.current > 0 ? Vq.current = !0 : jq()
        }), [jq]);
      (0, Yq.useEffect)((() => (dq.current = !0, xq.delete(qq), cq(!0), jq(null === Eq || void 0 === Eq ? void 0 : Eq.response), () => {
        dq.current = !1
      })), [jq, qq, Eq]);
      const Pq = qq => {
        Nq.current++, cq(!1), Wq.current = qq, mq(qq)
      };
      return {
        settings: gq,
        loading: Aq,
        answered: uq,
        retry: Hq,
        refresh: oq,
        change: async function(Eq, gq) {
          let {
            quiet: Yq = !1,
            onAnswer: mq
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const xq = Wq.current;
          if (null === xq) return !1;
          Pq(gq(xq)), aq.current > 0 && (Vq.current = !0), aq.current++;
          const Aq = await lq.d.setSocialSettings(qq, Eq);
          aq.current--;
          const cq = !("error" in Aq);
          if (!dq.current) return cq;
          if (null === mq || void 0 === mq || mq(Aq), Yq);
          else if ("error" in Aq) Oq.g.showMessage({
            translationKey: Aq.error
          });
          else
            for (const qq of Aq.notFound) Oq.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: qq
              }
            });
          if (aq.current > 0) return cq;
          const uq = Vq.current;
          return Vq.current = !1, !uq && "settings" in Aq ? Pq(Aq.settings) : (uq || Pq(xq), jq()), cq
        }
      }
    }
  },
  36775: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      e: () => Oq
    });
    var Yq = gq(163);
    const lq = new Map;

    function Oq(qq, Eq) {
      var gq;
      const Yq = null !== (gq = lq.get(qq)) && void 0 !== gq ? gq : new Map;
      Yq.set(Eq, Date.now()), lq.set(qq, Yq)
    }

    function mq(qq) {
      const Eq = lq.get(qq);
      if (!Eq) return [];
      const gq = Date.now();
      for (const [lq, Oq] of Eq) gq - Oq >= Yq.j && Eq.delete(lq);
      return [...Eq.keys()]
    }
  },
  36753: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      const gq = Eq.toLowerCase();
      for (const Yq of qq)
        if (Yq.toLowerCase() === gq) return !0;
      return !1
    }

    function lq(qq, Eq, gq) {
      const lq = [],
        Oq = [],
        mq = [];
      for (const xq of qq) !xq.isError && xq.name && ("inGame" === xq.location.status && xq.location.inLobbyName === Eq || Yq(gq, xq.name) ? Oq.push({
        friend: xq,
        place: "here"
      }) : "offline" === xq.location.status ? mq.push({
        friend: xq,
        place: "offline"
      }) : lq.push({
        friend: xq,
        place: "online"
      }));
      return [...lq, ...Oq, ...mq]
    }

    function Oq(qq, Eq, gq) {
      const lq = [],
        Oq = qq.flatMap((qq => "here" === qq.place ? [qq.friend.name] : []));
      for (const mq of [...Oq, ...Eq]) Yq(lq, mq) || Yq(gq, mq) || lq.push(mq);
      return lq
    }

    function mq(qq, Eq) {
      return null === qq || void 0 === qq || !qq.canManage || Yq(qq.whitelist, Eq) ? "none" : "whitelist" === qq.visibility ? "required" : "quiet"
    }

    function xq(qq) {
      if (null === qq) return !0;
      const {
        visibility: Eq
      } = qq;
      return "public" === Eq || "unlisted" === Eq || "whitelist" === Eq && qq.canManage
    }

    function Aq(qq, Eq, gq) {
      if (gq) {
        const gq = Eq.filter((Eq => !Yq(qq.whitelist, Eq)));
        return {
          ...qq,
          whitelist: [...qq.whitelist, ...gq]
        }
      }
      return {
        ...qq,
        whitelist: qq.whitelist.filter((qq => !Yq(Eq, qq)))
      }
    }

    function cq(qq, Eq) {
      const gq = [];
      for (let Yq = 0; Yq < qq.length; Yq += Eq) gq.push(qq.slice(Yq, Yq + Eq));
      return gq
    }
    gq.d(Eq, {
      c: () => xq,
      d: () => Oq,
      h: () => lq,
      k: () => Yq,
      l: () => cq,
      o: () => mq,
      s: () => Aq
    })
  },
  36955: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(24),
      lq = gq(1298);

    function Oq() {
      const {
        clientEscMenuOptions: qq
      } = (0, Yq.j)(["clientEscMenuOptions"]);
      return (0, lq.F)() && qq.showChat
    }
  },
  36888: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq
    });
    var Yq = gq(2668),
      lq = gq(3545),
      Oq = gq(2834);
    const mq = ["Unable to create vertex buffer"];
    let xq = {};

    function Aq(qq, Eq) {
      const gq = new Date;
      console.error(`${gq.getUTCHours()}:${gq.getUTCMinutes()}:${gq.getUTCSeconds()}`, qq, Eq, null === Eq || void 0 === Eq ? void 0 : Eq.stack), mq.includes(null === Eq || void 0 === Eq ? void 0 : Eq.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Yq.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${Eq.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Oq.logError)("warning", `${qq}\n ${Eq} "\n" ${null===Eq||void 0===Eq?void 0:Eq.stack}`);
      const lq = qq + Eq + (null === Eq || void 0 === Eq ? void 0 : Eq.stack);
      lq in xq || ((0, Oq.logError)("error", `${qq}\n ${Eq} "\n" ${null===Eq||void 0===Eq?void 0:Eq.stack}`), xq[lq] = !0)
    }(0, lq.onGameReset)((() => {
      xq = {}
    }))
  },
  4662: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Tq,
      f: () => Mq
    });
    var Yq = gq(4671),
      lq = gq(296);
    const Oq = 120,
      mq = 260,
      xq = 1.15,
      Aq = 1.2,
      cq = 2,
      uq = 1.08,
      Bq = .8,
      Wq = .95,
      Nq = 8,
      aq = "[\"')\\]\u300d\u300f\uff09]*",
      Vq = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${aq}$`),
      dq = new RegExp(`[?\uff1f]${aq}$`),
      jq = new RegExp(`[!\uff01]${aq}$`),
      Hq = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      oq = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Pq = new RegExp(`[${oq}]`),
      Qq = new RegExp(`[${oq}]|[^${oq}]+`, "g"),
      yq = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function tq(qq) {
      let Eq = 2166136261;
      for (let gq = 0; gq < qq.length; gq++) Eq ^= qq.charCodeAt(gq), Eq = Math.imul(Eq, 16777619);
      return (Eq >>> 0) / 4294967295 * 2 - 1
    }

    function rq(qq) {
      var Eq;
      if (Pq.test(qq)) return 1;
      const gq = qq.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Yq = gq.replace(/[^0-9]/g, "");
      if (Yq.length > 0 && !/\p{L}/u.test(gq)) return Math.min(Yq.length, 4);
      const lq = null !== (Eq = gq.match(yq)) && void 0 !== Eq ? Eq : [];
      if (0 === lq.length) {
        var Oq, mq;
        const qq = null !== (Oq = null === (mq = gq.match(/\p{L}/gu)) || void 0 === mq ? void 0 : mq.length) && void 0 !== Oq ? Oq : 0;
        return 0 === qq ? 0 : Math.min(Math.max(1, Math.round(qq / 2.5)), Nq)
      }
      const xq = gq.replace(/[^\p{L}]/gu, ""),
        Aq = lq.length > 1 && "e" === lq.at(-1) && xq.endsWith("e") && !xq.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(qq.replace(/[^\p{L}]/gu, ""));
      return Math.min(lq.length - (Aq ? 1 : 0), Nq)
    }

    function vq(qq) {
      return qq.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function hq(qq) {
      const Eq = qq.replace(/[^\p{L}]/gu, "");
      return Eq.length >= 2 && Eq === Eq.toUpperCase() && Eq !== Eq.toLowerCase()
    }

    function nq(qq, Eq) {
      var gq;
      const Nq = Eq && (0, Yq.i)(Eq),
        aq = null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.syllableMs) && void 0 !== gq ? gq : Yq.b,
        oq = function(qq) {
          const Eq = [];
          for (const Yq of (0, lq.Zb)(qq))
            if ("string" === typeof Yq)
              for (const qq of Yq.split(/(\s+)/)) {
                if ("" === qq) continue;
                if (/^\s+$/.test(qq)) {
                  Eq.push({
                    kind: "space",
                    text: qq
                  });
                  continue
                }
                if (!Pq.test(qq)) {
                  Eq.push({
                    kind: "word",
                    text: qq,
                    delayMs: 0
                  });
                  continue
                }
                let Yq = !0;
                for (const lq of null !== (gq = qq.match(Qq)) && void 0 !== gq ? gq : []) {
                  var gq;
                  const qq = Eq.at(-1);
                  Yq || "word" !== (null === qq || void 0 === qq ? void 0 : qq.kind) || Pq.test(lq) || /[\p{L}\p{N}]/u.test(lq) ? (Yq || Eq.push({
                    kind: "space",
                    text: "\u200b"
                  }), Eq.push({
                    kind: "word",
                    text: lq,
                    delayMs: 0
                  }), Yq = !1) : qq.text += lq
                }
              } else Eq.push({
                kind: "icon",
                text: Yq.icon,
                delayMs: 0
              });
          return Eq
        }(qq),
        yq = [];
      let nq = [];
      for (const Yq of oq) "space" !== Yq.kind && (nq.push(Yq), Vq.test(Yq.text) && (yq.push(nq), nq = []));
      yq.push(nq);
      const bq = [];
      let iq = 0;
      for (const Yq of yq) {
        var Zq, fq;
        const qq = null !== (Zq = null === (fq = Yq.at(-1)) || void 0 === fq ? void 0 : fq.text) && void 0 !== Zq ? Zq : "",
          Eq = dq.test(qq),
          gq = jq.test(qq),
          lq = Yq.map((qq => "word" === qq.kind ? rq(qq.text) : 1)),
          oq = lq.findLastIndex((qq => qq > 0));
        for (const [dq, jq] of Yq.entries()) {
          const qq = "word" === jq.kind,
            Yq = lq[dq];
          jq.delayMs = iq;
          for (let lq = 0; Nq && lq < Yq; lq++) {
            const {
              intonation: Oq
            } = Nq;
            let mq = oq > 0 ? -Oq.declineSemitones * (dq / oq) : 0;
            mq += tq(`${vq(jq.text)}|${lq}`) * Oq.variationSemitones;
            const Vq = Math.min(1, Oq.variationSemitones);
            let Hq = Nq.glideSemitones,
              Pq = 1;
            gq && (mq += Oq.exclaimLiftSemitones, Pq *= xq), Eq && dq === oq && (mq += Oq.questionRiseSemitones * (Yq > 1 ? .5 + .5 * lq / (Yq - 1) : 1), lq === Yq - 1 && (Hq = Math.abs(Hq) + Oq.questionRiseSemitones / 2)), qq && hq(jq.text) && (mq += cq * Vq, Pq *= Aq), Yq > 1 && 0 === lq && (mq += Bq * Vq, Pq *= uq), bq.push({
              atMs: iq + lq * aq,
              semitones: mq,
              glideSemitones: Hq,
              durationMs: lq < Yq - 1 ? Math.min(Nq.durationMs, aq * Wq) : Nq.durationMs,
              level: Pq
            })
          }
          iq += Yq * aq + (Vq.test(jq.text) ? mq : Hq.test(jq.text) ? Oq : 0)
        }
      }
      return {
        pieces: oq.map((qq => "space" === qq.kind ? qq : "icon" === qq.kind ? {
          kind: "icon",
          icon: qq.text,
          delayMs: qq.delayMs
        } : {
          kind: "word",
          text: qq.text,
          delayMs: qq.delayMs
        })),
        blips: bq
      }
    }
    var bq = gq(1183),
      iq = gq(1241),
      Zq = gq(1906);

    function fq(qq) {
      if ("string" === typeof qq) return qq;
      const Eq = iq.h.get().getCurrentLanguageCode();
      return (0, bq.n)(Eq, qq.translationKey, (0, bq.j)(qq.params, Zq.d.shown))
    }

    function Mq(qq) {
      const Eq = void 0 === qq.voice ? null : (0, Yq.m)(qq.voice),
        gq = Eq && (0, Yq.i)(Eq);
      return {
        plan: nq(fq(qq.line), gq),
        synth: gq
      }
    }

    function Tq(qq) {
      const Eq = [];
      let gq = [];
      for (const [lq, Oq] of qq.entries()) {
        var Yq;
        "space" === Oq.kind && (" " !== Oq.text || "icon" !== (null === (Yq = qq[lq + 1]) || void 0 === Yq ? void 0 : Yq.kind)) ? (gq.length > 0 && Eq.push(gq), Eq.push([Oq]), gq = []) : gq.push(Oq)
      }
      return gq.length > 0 && Eq.push(gq), Eq
    }
  },
  36736: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    const Yq = [{
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

    function lq(qq, Eq, gq) {
      const lq = Math.abs(qq - Eq),
        Oq = Date.now() - gq;
      for (const mq of Yq)
        if (qq < mq.maxDist) return lq >= mq.hardUpdateDist || Oq > mq.timeBetweenSoftChecks && lq >= mq.softUpdateDist;
      return !1
    }
  },
  36995: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      h: () => Oq,
      l: () => lq
    });
    const Yq = [.25, .5, 1, 2, 4, 8, 16];

    function lq(qq, Eq) {
      const gq = Yq;
      let lq = gq.indexOf(qq);
      return -1 === lq && (lq = gq.findIndex((Eq => Eq >= qq)), -1 === lq && (lq = gq.length - 1)), "up" === Eq ? gq[Math.min(lq + 1, gq.length - 1)] : gq[Math.max(lq - 1, 0)]
    }

    function Oq(qq) {
      return qq <= Yq[0]
    }

    function mq(qq) {
      return qq >= Yq[Yq.length - 1]
    }
  },
  37050: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      e: () => lq
    });
    const Yq = "data-replay-ui-active",
      lq = [{
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
  37054: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      e: () => Bq,
      i: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(37050);

    function mq() {
      const qq = {};
      for (const {
          group: Eq
        }
        of Oq.e) qq[Eq] = !0;
      return qq
    }
    let xq = mq();

    function Aq() {
      lq.i.TV("replayViewer|uiVisibilityChanged")
    }

    function cq() {
      return xq
    }

    function uq(qq, Eq) {
      xq[qq] !== Eq && (xq = {
        ...xq,
        [qq]: Eq
      }, "nametag" === qq && Yq.b.set({
        areNametagsHidden: !Eq
      }), Aq())
    }

    function Bq() {
      xq = mq(), Yq.b.set({
        areNametagsHidden: !1
      }), Aq()
    }
  },
  9321: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      f: () => uq
    });
    var Yq = gq(1547);

    function lq(qq) {
      var Eq;
      return {
        ...mq.store,
        yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
      }
    }
    const Oq = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mq = {
        player: Oq,
        store: {
          ...Oq,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xq(qq, Eq) {
      qq instanceof Promise ? qq.then(Eq).catch((qq => {
        console.error("Couldn't open the preview", qq)
      })) : Eq(qq)
    }
    class Aq {
      constructor(qq) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
        }))
      }
      show(qq) {
        var Eq;
        this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    class cq {
      constructor(qq) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(qq).then((qq => qq.ready)), xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
      }
      setCosmetic(qq, Eq) {
        var gq;
        null === (gq = this.opened) || void 0 === gq || gq.setCosmetic(qq, Eq)
      }
      playEmote(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.playEmote(qq)
      }
      setOrbit(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.setOrbit(qq)
      }
      resetCamera() {
        var qq;
        null === (qq = this.opened) || void 0 === qq || qq.resetCamera()
      }
      async untilDrawn(qq) {
        var Eq;
        await this.ready, await (null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    const uq = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(qq) {
        this.host = qq
      }
      setDefaultHost(qq) {
        this.makeDefault = qq
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(qq) {
        return new Aq(this.current().openMob(qq))
      }
      openPet(qq) {
        return new Aq(this.current().openPet(qq))
      }
      openMobLineup(qq) {
        return new Aq(this.current().openMobLineup(qq))
      }
      openCharacter(qq, Eq) {
        return new cq(this.current().openCharacter(qq, Eq))
      }
    }
  },
  9313: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq.c,
      f: () => Yq.d,
      i: () => Yq.f
    });
    var Yq = gq(9321);
    class lq {
      constructor(qq) {
        this.load = qq, this.loaded = null, this.loading = null
      }
      run(qq) {
        return null !== this.loaded ? qq(this.loaded) : (this.loading ??= this.load().then((qq => (this.loaded = qq, qq)), (qq => {
          throw this.loading = null, qq
        })), this.loading.then(qq))
      }
    }
    class Oq {
      constructor() {
        this.mobScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(155)]).then((() => gq(40829))))), this.characterScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(154)]).then((() => gq(40917)))))
      }
      openMob(qq) {
        return this.mobScene.run((Eq => Eq.openMobPreview(qq)))
      }
      openPet(qq) {
        return this.mobScene.run((Eq => Eq.openPetPreview(qq)))
      }
      openMobLineup(qq) {
        return this.mobScene.run((Eq => Eq.openMobLineupPreview(qq)))
      }
      openCharacter(qq, Eq) {
        return this.characterScene.run((gq => gq.openCharacterPreview(qq, Eq)))
      }
    }
    Yq.f.setDefaultHost((() => new Oq))
  },
  36880: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq
    });
    const Yq = new Map;

    function lq(qq) {
      var Eq;
      return null === qq ? null : null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
    }

    function Oq(qq, Eq) {
      return Yq.set(qq, Eq), () => {
        Yq.get(qq) === Eq && Yq.delete(qq)
      }
    }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  37019: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => IE,
      g: () => CE
    });
    var Yq = gq(4096),
      lq = gq(598),
      Oq = gq(3584),
      mq = gq(3600),
      xq = gq.n(mq);
    const Aq = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      cq = "EV_boolean",
      uq = "EV_double",
      Bq = "EV_string",
      Wq = "EV_doubleArr",
      Nq = "EV_armour",
      aq = "EV_other",
      Vq = "EV_cosmetics",
      dq = "OEV_boolean",
      jq = "OEV_int",
      Hq = "OEV_double",
      oq = "OEV_string",
      Pq = "OEV_stringArr",
      Qq = "OEV_meshScaling",
      yq = "IV_int",
      tq = "IV_string",
      rq = "IV_doubleArr",
      vq = "IV_double",
      hq = "HV_int",
      nq = "HV_slots",
      bq = "EnvV_string",
      iq = "EnvV_double",
      Zq = "EnvV_doubleArr",
      fq = "EnvV_boolean",
      Mq = {
        type: Bq,
        name: Bq,
        position: Wq,
        rotation: Wq,
        scale: uq,
        speed: uq,
        jumping: cq,
        crouching: cq,
        cameraPitch: uq,
        armSwinging: cq,
        heldItemName: Bq,
        heldItemEnchantmentTier: Bq,
        pose: Bq,
        followingEId: Bq,
        ridingVehicleEId: Bq,
        leaderboardTop: Bq,
        meshKind: Bq,
        meshOpts: Bq,
        followingOffset: Wq,
        shouldMatchFollowingEntityRotation: cq,
        meshOffset: Wq,
        baseRenderHeading: uq,
        armour: Nq,
        jR: aq,
        playerCustomisations: Vq,
        variation: Bq,
        metaInfo: Bq,
        soundName: Bq,
        volume: uq,
        refDistance: uq,
        maxHearDist: uq,
        rate: uq,
        aiState: Bq
      },
      Tq = {
        opacity: Hq,
        zIndex: jq,
        overlayColour: oq,
        canSee: dq,
        meshScaling: Qq,
        nameTagInfo: oq,
        multilineTextBox: oq,
        hasPriorityNametag: dq,
        ranks: Pq,
        nameColour: oq,
        _isAlive: dq,
        _invisibleEffect: dq,
        _invincible: dq,
        killfeedColour: oq,
        hideNameSeed: jq,
        _glowingEffect: dq,
        lockHeadToBody: dq
      },
      zq = {
        itemName: tq,
        amount: yq,
        position: rq,
        size: vq,
        attributes: tq
      },
      Sq = {
        skyBox: bq,
        fogColourOverride: bq,
        fogChunkDistanceOverride: iq,
        cameraTint: Zq,
        fogOnSkybox: fq,
        fogBlockDistanceOverride: iq
      },
      pq = {
        type: "array",
        items: "double"
      },
      Gq = {
        type: "array",
        items: "int"
      },
      Lq = {
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
      Jq = {
        type: "map",
        values: pq
      };

    function kq(qq, Eq) {
      return {
        type: "record",
        name: qq,
        fields: [{
          name: "x",
          type: Eq
        }]
      }
    }
    const Rq = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kq(dq, "boolean"), kq(jq, "int"), kq(Hq, "double"), kq(oq, "string"), kq(Pq, {
              type: "array",
              items: "string"
            }), kq(Qq, Jq)]
          }]
        }
      },
      Uq = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kq(cq, "boolean"), kq(uq, "double"), kq(Bq, "string"), kq(Wq, pq), kq(Nq, Lq), kq(aq, Rq), kq(Vq, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      Fq = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kq(yq, "int"), kq(tq, "string"), kq(vq, "double"), kq(rq, pq)]
          }]
        }
      },
      sq = {
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
      Xq = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", kq(hq, "int"), kq(nq, sq)]
        }]
      },
      wq = {
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
      Kq = {
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
      Cq = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kq(bq, "string"), kq(iq, "double"), kq(Zq, pq), kq(fq, "boolean")]
          }]
        }
      },
      Iq = [{
        name: "xJ",
        type: "record",
        fields: [{
          name: "pos",
          type: Gq
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
          type: Gq
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
      eq = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "KE",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "eE",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "DE",
              type: ["null", "string", pq],
              default: null
            }, {
              name: "qg",
              type: ["null", "double"],
              default: null
            }, {
              name: "Eg",
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
          name: "xq",
          type: "string"
        }, {
          name: "Aq",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "cq",
          type: "double"
        }, {
          name: "uq",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "jY",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: pq
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "RE",
          type: "string"
        }, {
          name: "Yg",
          type: ["null", "double"],
          default: null
        }, {
          name: "lg",
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
          name: "hg",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "ng",
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
      Dq = [{
        name: "position",
        type: pq
      }, {
        name: "direction",
        type: pq
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

    function qE() {
      const qq = [{
        name: "entities",
        type: {
          type: "map",
          values: Uq
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: Fq
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Dq
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
              items: Xq
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", wq],
        default: null
      }];
      return qq.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "RE",
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
      }), qq.push({
        name: "uiElements",
        type: Kq
      }, {
        name: "environment",
        type: Cq
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: Iq
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: eq
        }
      }), qq
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
                name: "SB",
                type: "int"
              }, {
                name: "position",
                type: pq
              }, {
                name: "direction",
                type: pq
              }, {
                name: "easing",
                type: pq
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
    let gE;

    function YE(qq) {
      if (9 === qq) return gE ??= (Eq = [{
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
            name: "bJ",
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
              type: Gq
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
            fields: qE()
          }
        }
      }, EE], xq().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: Eq
      }, {
        FW: Object.create(null)
      })), gE;
      var Eq
    }
    var lE = gq(2744);
    let OE, mE, xE, AE;
    const cE = 12;
    var uE, BE;
    const WE = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 2, 3, 91, 8191, 88, 13, 14, 60, !1, !0, 16, 120, 4, 121, 122, 15, 127, 128, 10, 5, 11, 9];

    function NE(qq) {
      return typeof Eg !== WE[5] && Eg ? (new Eg).decode(new gg(qq)) : typeof Yg !== WE[5] && Yg ? Yg.from(qq).toString("utf-8") : mg(qq)
    }

    function aE() {}

    function VE() {
      VE = function() {}
    }
    var dE, jE;
    VE(uE = {}, BE = [".LFtxwAbIAC~m!APSFjRu&Ai13k3gwdEDBPe", 'D8jio^*2mJl1feVZ%iuolU8PM12Xcd%Ifvh6Wy^CnA<!>ItI$"', ':*#Pob(Gaj>S5w%ZF*7/rRj~/jB9)9xPCq%2n@3"', 'y8H9jI7_hj,0bh_$nYVBL8n"M!T"*4E~9vE8q^3JAx{D"', "?xYz)B+]6j%#8hra~YXik80_u!]t}+n]!*n5", "ciL0<Q*^WKebn7AGACGmhmXiWK", "vk=z/ov~vKH7G?!0e<0EdJ+49/,X;Y.cG/|/", "./S8i@u|Uu>S[?|", "WqyFF%34H[5Y2YachkmE:ys", "S#y6b^mbv1[H+?fG0q^00CaXn;.K]*.]lk0|wR?)P3R7@*#EsBw#[&Z?", ")C@#Cgxx1ZCtG:b0R!4iC6bCbj{", "6LOmSpu|gj!3XnhGQBE0B=&2`JfQ!I!]J*?", "#Ed#h!`}JA+YF:+]gLN#~!o|.jbe1p6;`Nz8i&ju.qi:fa?a", "#[He=,^PNb8Sga0Qe,ztfneZ$/6rq*AGp#YV!Hu]qBm5Wh8#N/aP}QDQ_u8rs", "9vNeUFR}4wQ@N9DCvjNofIe)9}C![:LPa^kS+I0?1xcYZz", "N*rJzQXbp..|Q4u+Z,~V|8d~$<~#V+eP`7`,oHYu8q?/Swu%2*P/j", 'J/2Jo7QZ5oUXdQdE]jdoG!LXv!v|}[9C<v"V5H08.j[j[:oE', "#}G/?_;|XJgXg9mI>7*/4%4]YwV!h$V)lDt+h", "2DnVhm9|oAxKK:#GZxYtkHePs.)LK?X%w/:FK*&Z#3", "6j;S+!cX:BNYuRAa.,Y", "S0fFd==c6!$6AYrhF{{Rm@X}4[.~}+VZY9@8oxN~MK", "`Ug5hC)2DA}qNe", "[BWFecr~?B/+rb1DN{tR1o8C*/SQtNX{!Dy6K__bEL&m![|;^kz#JNs)%b9", ']LS{hmn.#<"/@e=+^,VPsb05w51D<h{E5,={G&Cb/tlaBhJ]', "n)kt0XJGwJ.2e,,N!DCBf2XilU~Y41u{wGa9f!>EGbF~%:/", "K.S{zoMAkBQ", ")Logdb$Qu!Ijl1O+3k8zW!c}WLQmlbi", "{/@t!bh;[x5D*Y{0*NE#5m)}F}PHxn{)aCO2*kcZtL(8$4Oc", 'n#/+^SJ|m1m5.$wQ1}wJ<wF]+q(SI:_OP"', "2{,m9NmZ*}rSG{{~D[Y", "Xq{VB^ZbxU<X~7|#0qImG.s", "(co2$mcam57<o:Y#<GL|pLa^Uq8O4?", 'e/,g^ky]QARV[IfEW%@oMNLb".ic/Qza%FYE)XZ2.D', 'j/Vg%k?A6KZH)7F]j.|P5w6."wrZMn_0>it+"pq.$3*gd*RISs', "}ZyF&S(EDuc@5,x))L68I9KhW!Re&uWE+wP0+.`CDAai$4wQ", "`Usi$8j]K!gS)N#E:FTgCX^ZZ.~<de", 'Hj(&4dwZx}6VLNPQ+^(&{gZ?%A[c"', '~.]F^d"]QA.7+1m;dk7eIN"Jhb)', "t,Eeu@TCTDeNm[LGdGyFoSD?pZJgy$&0K9rV8mIZQ/!", "YVDtnps", "19GPRL2ZY", 'rL<S_m]"', 'VC*Bc`3|)Dk3rIy#E"', '"w$Fipr]*<W79uUE<s', "9*I2lBo~0L#L[{?l", '3xVi)6;~$3F3"', 'E8QtRm2PS!*2Pz`C!!"', 'rkhVBcba>D;c1z`%_!fByglxjx{abhz#/.8Sob0}jB<JK?5hxL.BYH3ExU)~"', 'x/RiO2z]D.0H|&;cRL^2JSIP9xW"}%m{', "qkwSO&ZQ)q<1,1AQDDY", 'M{2Eu*J~$<B~u$9+G^r8:@Gp(u}qG??#l,G0f2<}XxujSa.Eb19i26%"', '5}5/Nk$^nB<K}!FcO^]Bd=";fjca+1h]i"', 'f*O29xH|v5iGuQ#ES!r&8wdx;/x0N$FCz[28c!"]"w,r,{i', 'u.7mh.CZVx@hT[WO@L49oF,E(;Qt89qjYeN#kHSuio1i"', "cCW5zJ0aj}vmhN}IRs", 'yNLm<8t_?w&1Zzv%0"', "9DT932s", "L0,0eouxe", "PCIm49q~|u%H<In]kG2S>`T^X}", "2,I9%B&_aDr<(Q4+RB7|Xn@E[wVmfpxEdNj+E4s", '"V(,2N_agjDm0+QaVi{Vf(R^lKdXpp,#s<X9twtQUD<0{z', "lNA9dbzJ;}kS?da)t,1|G2zu}LJxX[(0lD:5#4QPl5}Gm+5h2vY", 'l,mS(2"hXJZ6sY', "<FZVQ!>HV}wxaY*c!C;S$LC}L5n8vNBC]EYRa", 'LG$iN!Z??/b7l:>E>1KEn!/6`5"Pq*yQ.!FSOmT_)LXp.*=CZ.@eO', '>7KS|c2CM1aiuw3]Pq|ydHPaqZ)2.*H{/9>e6Lc}^U"$da(~D"', "v,WS328c*[#t$+kI)q^0*=s", "nv{6M~V_q.}G1ddG)kS8*6l.61AU/$0],i}S]N{Xy[K65=j+lFaFS&s", "xql8!b!62Bcce[RI$N^0C6E4Y", 'ul4gC9kP.jo9;1za1VJo=n3~5b/De,2Cn*9VG!u|#}XrW9ght"', 'pg49s*("', 'kG"6]6IQkAYb3QsQF*KE*%WcFAK6[?*{^D`|nI}Z<.b2IN$Dx/`#Gm/"', ".CsynIf|9BDt5Y#EW%5i3@=clD5Dl1VaPGBosw724[t/|IT0R)={1", 'zV>m6o#@gjiq8psQ!!e#tIPP8LKc"', "i/J8):p~]Lebpwlh$}P#f4?)AJx!#?+)ZZ{+9Us", "9lktuo~|r.{qC+n].s", "A0H/;nA}IAGD^90)2CWF#4G|sZy", '|~U9$m!G^UEDL@b)4BNeDCgED/W^"', 'Zw.BG4]~u<HJ[?C{qL[P^kj~s<:E"', 'tlMEHI|p~/Jx"', 'VkAgECjEu<nV+?w]#lPoy95^;."u$!C;t9|Bum!Ev5!~TY', "Cja9Xna2eusi/$KhlNwt,c/pi", "1.Igmn<ZS!A9c9V)HcXBK&%|t1SS)uNhDZS,Uxa8q.ca.RMI.,EepnwZz", 't,S232f"', 'SvUB!cH@s<q"jRH%`Da/', ")iztP2+EYBSp@e", '&*"RU=m_]j?$TYW$fLY', "]qI09%s", "9Fo0dS~py.tPG&<a", './qBt8`}^!$j~:wP,*bJA^IX"x#@fpEE_0&VNNaamUy@2n;+mG~VQds', "nq6{=!eQDAc@&1U~)E|ytQ&2q}eHP?q#rY?6GIh4z", "a^=EGns", 'dG`e&62ZH[#b"$*%%8Qt', '2Ds`2=?7p[Y$~I7I"ChPLJta~})', ".F+E4k.4)15PSeBC0G#ew7iQ)!h+0,m%JiaP3mxEs}p9;&/", "djx/hIEpq/s:{N|#bBJmeR;;E<a", "/kgF6L|x~/3YM,z#*D}Ex8xGUb!!.QO];x(m3m7iVw(SaR1", "=qWEt8(~&;67+![{t^?", ')EI0}m{5UDN3dw?ZX#}E{mpFZ;RX"', 'Tv?VTyn"', 'p70|$po"<[Vax:l%U*)F]9p.|bg"~?', "D[]ioHL}Xxj+wY", "`q%2_v$Ap[kVo:<Z>g^#ocWCBuy@Xn!j},{E9kJEBbc3=4ZDGB$B$o{aHZ", 'hB:ElBG"to^mSefO?wQt', "`vm{{`D?", '",U?bpFw', "V,Xed35w", "MZ:xdq*B", "J`heJ3(%", "5rGB[X{%", "H8v#B", "`#qOj+MJ", "w0^)ltQO", 'M<n"nR>O', "5fdSbs+k", "W0O$t!=z", "44vR#", "+{w?~Dm%", "LD4ejny%", "Qc1]B", "!<2F", "J<{,DV)6", "TcM%", "+;0clPf6", "7<RWEzC6", "C(M6", ".xTYj^*T", "Xg+p>73;B%Gkh", "GyrENJ4bR0Jlh", "~/=l,V==t@%k9", "m|zPvJ+?n1", '|=^!WfW}"~.KGAs', "%~Ll=%6}){Ok12$", "leZgH!(keLw<xms", "<V$Z.@|eQnyLjMS", "OcT!#C6}0LD2xAs", "`O(QxX]GR/dZ2jSQ{eC[F,Nk5:", "o#kINu)k|4+HRM0QSOkI3.P5IY", "2E@7JU91PB..)XAQmf%PbU*}Y$", "`IIpw.q~{B>~HXQtc+Rc(UeAY$", "uIIp>Kh*,WSkc6[Br2o[+!P5hY", "2E@7_;n>eBAU)U^Tc+Zc&.^=}B", "}IEMR.Ne0LOU%G^T1j)gU!le:Y", "RBXv", "7(hw]+B~"]), VE(qg = function() {
        var qq, Eq, gq, Yq = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        VE(qq = void 0, Eq = []);
        try {
          VE(qq = Object, Eq[WE[11]]("".__proto__.constructor.name))
        } catch (gg) {}
        qq: for (gq = WE[0]; gq < Yq[WE[4]]; gq++) try {
          var lq;
          for (qq = Yq[gq](), lq = WE[0]; lq < Eq[WE[4]]; lq++)
            if (typeof qq[Eq[lq]] === WE[5]) continue qq;
          return qq
        } catch (gg) {}
        return qq || this
      }() || {}, Eg = qg.TextDecoder, gg = qg.Uint8Array, Yg = qg.IN, lg = qg.String || String, Og = qg.Array || Array, mg = function() {
        var qq, Eq, gq = new Og(WE[29]);
        return VE(qq = lg[WE[8]] || lg.fromCharCode, Eq = []),
          function(Yq) {
            var lq, Oq, mq, xq;
            for (VE(Oq = void 0, mq = Yq[WE[4]], Eq[WE[4]] = WE[0]), xq = WE[0]; xq < mq;) VE(Oq = Yq[xq++], Oq <= WE[28] ? lq = Oq : Oq <= 223 ? lq = (31 & Oq) << WE[7] | Yq[xq++] & WE[6] : Oq <= 239 ? lq = (Oq & WE[27]) << WE[10] | (Yq[xq++] & WE[6]) << WE[7] | Yq[xq++] & WE[6] : lg[WE[8]] ? lq = (Oq & WE[9]) << 18 | (Yq[xq++] & WE[6]) << WE[10] | (Yq[xq++] & WE[6]) << WE[7] | Yq[xq++] & WE[6] : (lq = WE[6], xq += WE[13]), Eq[WE[11]](gq[lq] || (gq[lq] = qq(lq))));
            return Eq.join("")
          }
      }()),
      function(qq) {
        return typeof uE[qq] === WE[5] ? uE[qq] = function(qq) {
          var Eq, gq, Yq, lq, Oq, mq, xq;
          for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
            var Aq = 's"?Yezi|5/tK}u1[$jZ;D3OGah{+0EP#Vyc~QNI%C])lMv^4*9&F2JBoU.b!wdLxAq<rk@7,Rg86mS`HXp:n=(_>TfW'.indexOf(Eq[xq]);
            if (Aq !== -WE[1])
              if (mq < WE[0]) mq = Aq;
              else {
                VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                do {
                  VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                } while (Oq > WE[9]);
                mq = -WE[1]
              }
          }
          return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
        }(BE[qq]) : uE[qq]
      }(104) + "n" in aE && function() {
        const qq = require("big-integer");
        class Eq {
          static randomPrime(Eq) {
            const gq = qq.one.shiftLeft(Eq - WE[1]),
              Yq = qq.one.shiftLeft(Eq).prev();
            for (; WE[21];) {
              let Eq = qq.randBetween(gq, Yq);
              if (Eq.isProbablePrime(256)) return Eq
            }
          }
          static generate(Eq) {
            const gq = qq(65537);
            let Yq, lq, Oq;
            do {
              VE(Yq = this.randomPrime(Eq / WE[12]), lq = this.randomPrime(Eq / WE[12]), Oq = qq.lcm(Yq.prev(), lq.prev()))
            } while (qq.gcd(gq, Oq).notEquals(WE[1]) || Yq.minus(lq).abs().shiftRight(Eq / WE[12] - 100).isZero());
            return {
              e: gq,
              n: Yq.multiply(lq),
              d: gq.modInv(Oq)
            }
          }
          static encrypt(Eq, gq, Yq) {
            return qq(Eq).modPow(Yq, gq)
          }
          static decrypt(Eq, gq, Yq) {
            return qq(Eq).modPow(gq, Yq)
          }
          static encode(Eq) {
            const gq = Eq.split("").map((qq => qq.charCodeAt())).join("");
            return qq(gq)
          }
          static decode(qq) {
            const Eq = qq.toString();
            let gq = "";
            for (let Yq = WE[0]; Yq < Eq.length; Yq += WE[12]) {
              let qq = Number(Eq.substr(Yq, WE[12]));
              qq <= 30 ? (gq += String.fromCharCode(Number(Eq.substr(Yq, WE[13]))), Yq++) : gq += String.fromCharCode(qq)
            }
            return gq
          }
        }
        module.exports = Eq
      }(), (() => {
        function qq(qq) {
          return typeof uE[qq] === WE[5] ? uE[qq] = function(qq) {
            var Eq, gq, Yq, lq, Oq, mq, xq;
            for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
              var Aq = '$w%/[*0"}u:zt2+8.|(P9>yASQBN~C7Hevch=LpVUxkW)dm_ZgM];r?n!Jl&{Eo,6i^4`X#D<5qKj3RFOYaGfITs1b@'.indexOf(Eq[xq]);
              if (Aq !== -WE[1])
                if (mq < WE[0]) mq = Aq;
                else {
                  VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                  do {
                    VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                  } while (Oq > WE[9]);
                  mq = -WE[1]
                }
            }
            return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
          }(BE[qq]) : uE[qq]
        }
        qq(105);
        const Eq = WE[22],
          gq = qq(108) + qq(109) + qq(110),
          Yq = [WE[0], WE[1], WE[12], WE[13]].map((qq => {
            (function(qq) {
              return typeof uE[qq] === WE[5] ? uE[qq] = function(qq) {
                var Eq, gq, Yq, lq, Oq, mq, xq;
                for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                  var Aq = 'iJnsZPrpOABtowK=>^SIXFuLCk,E0[g<`}cz3(T$vNDHjd#"Vfh1W7+|mRQUe_GYbMla)~59x!6*:.{4;2%8@&?y]/q'.indexOf(Eq[xq]);
                  if (Aq !== -WE[1])
                    if (mq < WE[0]) mq = Aq;
                    else {
                      VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                      do {
                        VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                      } while (Oq > WE[9]);
                      mq = -WE[1]
                    }
                }
                return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
              }(BE[qq]) : uE[qq]
            })(111) in aE && function() {
              function qq(qq) {
                var Eq, gq, Yq, lq, Oq, mq, xq, Aq = 'EOkC9z)&+d~KPBg,Z7UY_AIw^p.|xhHq=v<(:iac!QXM`f%>m*RSDebt]JsjorLW{43V8[lTy?N"F5$u1n;}2#6@0/G';
                for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                  var cq = Aq.indexOf(Eq[xq]);
                  if (cq !== -WE[1])
                    if (mq < WE[0]) mq = cq;
                    else {
                      VE(mq += cq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                      do {
                        VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                      } while (Oq > WE[9]);
                      mq = -WE[1]
                    }
                }
                return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
              }

              function Eq(Eq) {
                return typeof uE[Eq] === WE[5] ? uE[Eq] = qq(BE[Eq]) : uE[Eq]
              }

              function gq(qq) {
                const Eq = {};
                for (let gq of qq.replace(/[^w]/g, "").toLowerCase()) Eq[gq] = Eq[gq] + WE[1] || WE[1];
                return Eq
              }

              function Yq(qq, Eq) {
                const gq = buildCharMap(qq),
                  Yq = buildCharMap(Eq);
                for (let lq in gq)
                  if (gq[lq] !== Yq[lq]) return WE[20];
                return Object.keys(gq).length !== Object.keys(Yq).length ? WE[20] : WE[21]
              }

              function lq(qq) {
                return Oq(qq) !== 1 / 0
              }

              function Oq(qq) {
                if (!qq) return -WE[1];
                const Eq = Oq(qq.left),
                  gq = Oq(qq.right),
                  Yq = Math.abs(Eq - gq);
                if (Eq === 1 / 0 || gq === 1 / 0 || Yq > WE[1]) return 1 / 0;
                return Math.max(Eq, gq) + WE[1]
              }
              window[Eq(112) + Eq(113) + Eq(114) + "_"] = {
                buildCharacterMap: gq,
                isAnagrams: Yq,
                isBalanced: lq,
                getHeightBalanced: Oq
              }
            }();
            let Eq = WE[0];
            for (let Yq = WE[13]; Yq >= WE[0]; Yq--) {
              function lq(qq) {
                var Eq, gq, Yq, lq, Oq, mq, xq;
                for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                  var Aq = '&3zP*R^HB~d85_)4IX`7q>J0peDZk#"a1KYcgm(t=QofSM}!:|,%O$WLjEUi/Tr@VFwAv2C?<uy.nGlNx{]6[s9bh+;'.indexOf(Eq[xq]);
                  if (Aq !== -WE[1])
                    if (mq < WE[0]) mq = Aq;
                    else {
                      VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                      do {
                        VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                      } while (Oq > WE[9]);
                      mq = -WE[1]
                    }
                }
                return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
              }

              function Oq(qq) {
                return typeof uE[qq] === WE[5] ? uE[qq] = lq(BE[qq]) : uE[qq]
              }
              Eq = Eq << WE[2] | gq[Oq(115) + Oq(116)](qq * WE[24] + Yq)
            }
            return Eq >>> WE[0]
          })),
          lq = (qq, Eq) => qq << Eq | qq >>> 32 - Eq,
          Oq = (qq, Eq, gq, Yq, Oq) => {
            VE(qq[Eq] += qq[gq], qq[Oq] = lq(qq[Oq] ^ qq[Eq], WE[22]), qq[Yq] += qq[Oq], qq[gq] = lq(qq[gq] ^ qq[Yq], WE[10]), qq[Eq] += qq[gq], qq[Oq] = lq(qq[Oq] ^ qq[Eq], WE[2]), qq[Yq] += qq[Oq], qq[gq] = lq(qq[gq] ^ qq[Yq], WE[9]))
          };
        AE = (gq, lq, mq, xq) => {
          function Aq(qq) {
            return typeof uE[qq] === WE[5] ? uE[qq] = function(qq) {
              var Eq, gq, Yq, lq, Oq, mq, xq;
              for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                var Aq = '"069%_bD](F/yY+<tsJ$R2^7x=C@lB!m,SGjAM)wk:iv`Kfpoh|>QrcdOLUZ;g85unT{#?IPN&VaqWE~Hz*13.4}X[e'.indexOf(Eq[xq]);
                if (Aq !== -WE[1])
                  if (mq < WE[0]) mq = Aq;
                  else {
                    VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                    do {
                      VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                    } while (Oq > WE[9]);
                    mq = -WE[1]
                  }
              }
              return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
            }(BE[qq]) : uE[qq]
          }
          const cq = new DataView(lq[qq(117)], lq[qq(118) + Aq(119)], cE),
            uq = new Uint32Array(Eq);
          VE(uq[Aq(WE[23])](Yq), uq[Aq(WE[23])](gq, WE[24]), uq[WE[17]] = cq[Aq(WE[25]) + Aq(WE[26])](WE[0], WE[21]), uq[WE[18]] = cq[Aq(WE[25]) + Aq(WE[26])](WE[24], WE[21]), uq[WE[27]] = cq[Aq(WE[25]) + Aq(WE[26])](WE[2], WE[21]));
          const Bq = new Uint32Array(Eq),
            Wq = new Uint8Array(Bq[Aq(123)]);
          for (let Nq = WE[0], aq = mq; Nq < xq[Aq(124)]; Nq += Eq * WE[24], aq++) {
            function Vq(qq) {
              var Eq, gq, Yq, lq, Oq, mq, xq;
              for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                var Aq = '9y~)[4%$>v68#3x(mUZ"hM57^1B;@0Cc<A*.WVr!_Pduk2FRz|HlEpsja:?LDe&=XniY,SINofQg}w]Jt+`{KO/qGTb'.indexOf(Eq[xq]);
                if (Aq !== -WE[1])
                  if (mq < WE[0]) mq = Aq;
                  else {
                    VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                    do {
                      VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                    } while (Oq > WE[9]);
                    mq = -WE[1]
                  }
              }
              return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
            }

            function dq(qq) {
              return typeof uE[qq] === WE[5] ? uE[qq] = Vq(BE[qq]) : uE[qq]
            }
            VE(uq[WE[10]] = aq, Bq[dq(125)](uq));
            for (let Hq = WE[0]; Hq < WE[30]; Hq++) {
              function oq(qq) {
                var Eq, gq, Yq, lq, Oq, mq, xq;
                for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                  var Aq = 'wTC<X:`vHf9+Me,Nng};{!Wj_I#YR>z21s)mObpEUtkq?ac[B7QxZ.i*|^h(o@uA&=VP3yG~S]Kd"r%$6lDJ4L0F58/'.indexOf(Eq[xq]);
                  if (Aq !== -WE[1])
                    if (mq < WE[0]) mq = Aq;
                    else {
                      VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                      do {
                        VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                      } while (Oq > WE[9]);
                      mq = -WE[1]
                    }
                }
                return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
              }

              function Pq(qq) {
                return typeof uE[qq] === WE[5] ? uE[qq] = oq(BE[qq]) : uE[qq]
              }

              function Qq() {
                var qq, Eq, gq;

                function Yq(qq) {
                  return typeof uE[qq] === WE[5] ? uE[qq] = function(qq) {
                    var Eq, gq, Yq, lq, Oq, mq, xq;
                    for (VE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = WE[0], Oq = WE[0], mq = -WE[1]), xq = WE[0]; xq < gq; xq++) {
                      var Aq = 'h9Gcms#$gY0oSATO:Bt1Fn%e}E[p.`_!Qu5|3j]z,i8C^x*>IZ"kLlD{V<6/y4W~@Kd(;U2JM)=7PfvbXN+aHq?r&Rw'.indexOf(Eq[xq]);
                      if (Aq !== -WE[1])
                        if (mq < WE[0]) mq = Aq;
                        else {
                          VE(mq += Aq * WE[14], lq |= mq << Oq, Oq += (mq & WE[15]) > WE[16] ? WE[17] : WE[18]);
                          do {
                            VE(Yq.push(lq & WE[3]), lq >>= WE[2], Oq -= WE[2])
                          } while (Oq > WE[9]);
                          mq = -WE[1]
                        }
                    }
                    return mq > -WE[1] && Yq.push((lq | mq << Oq) & WE[3]), NE(Yq)
                  }(BE[qq]) : uE[qq]
                }
                VE(qq = Yq(WE[28]) + Yq(WE[29]) + Yq(129) + Yq(130), Eq = Yq(131) + Yq(132) + Yq(133) + Yq(134) + Yq(135) + "?", gq = Yq(136) + Yq(137) + Yq(138) + Yq(139) + Yq(140) + Yq(141) + Yq(142) + ")", qq.match(Eq + gq))
              }
              Pq(126) + "y" in aE && Qq(), VE(Oq(Bq, WE[0], WE[24], WE[2], WE[10]), Oq(Bq, WE[1], WE[31], WE[33], WE[17]), Oq(Bq, WE[12], WE[7], WE[30], WE[18]), Oq(Bq, WE[13], WE[9], WE[32], WE[27]), Oq(Bq, WE[0], WE[31], WE[30], WE[27]), Oq(Bq, WE[1], WE[7], WE[32], WE[10]), Oq(Bq, WE[12], WE[9], WE[2], WE[17]), Oq(Bq, WE[13], WE[24], WE[33], WE[18]))
            }
            for (let yq = WE[0]; yq < Eq; yq++) Bq[yq] += uq[yq];
            const jq = Math[dq(143)](Eq * WE[24], xq[dq(144)] - Nq);
            for (let tq = WE[0]; tq < jq; tq++) xq[Nq + tq] ^= Wq[tq]
          }
        }
      })();
    const HE = [1, "b", 0, 8, 3, 36, 51, 5, 77, "d", 255, "length", 89, 2, 140, 134, 4, "undefined", 88, void 0, 108, "a", 63, 6, "fromCodePoint", 7, 12, "push", 249, 131, 220, 164, 15, 37, 91, 163, 38, 8191, 13, 14, 167, 9, 222, "g", 70, 194, 203, "e", 1023, 42, 65536, 10, 55296, 56320, 211, 244, 46, 111, "f", 127, 128, 31, 18, "h", 124, "c", 82, 139, 226, 160, 192, "i", 224, 59, 240, 246, 172, 188, !1, 173, 199, 74, 16, 155, 141, 45, 193, 247, null, 187, !0];

    function oE(...qq) {
      return qq[HE[11]] = HE[0], typeof Eg !== HE[17] && Eg ? (new Eg).decode(new gg(qq[HE[2]])) : typeof Yg !== HE[17] && Yg ? Yg.from(qq[HE[2]]).toString("utf-8") : mg(qq[HE[2]])
    }

    function PE() {}

    function QE() {
      QE = function() {}
    }
    QE(dE = {}, jE = ["Bgs|Q6JpiFNe2", "my9v0iO@AM+v@rh)(;{dn^gzGziMp^K:E_Z)]cD", "$;xF0wV?0(", "((Bs7g+C]U,bCJ^)|g+Ac^HNZ=ktD", "<8M;@sB|)3&`0Kj:Qezt{GahZmg1trY`:;rB~J#6B5;XwJQp{R81<p6*&", "m_`)`JV?&wX1*YR(tS,7yc(Mce", "GUI:yJpcs.jsN_&ZJSHafbPIS9;mQKfC;RPZf_+BD+K+4>/C~r6v/IAsamU", "9F`?uS&!>emX2", 'S`;T]$s7^5:u"gjNUStH_Rzz?}19H$|8WUkZlAJ8|(rzE{)|', "*Z#H^l45^;^Uc$j)fFHBf}n|AM5u_*//vsB}gSD", 'Y1ZvYSMqMw$2S`Q"@[0v', "{aZt#kt6~+kU%*,`r)f|)/.%Xrbxv&z76Hx,S_:Wk9uvt%r7FI`}_Hn6m6a", "2[Z1`IIk0F9$.bS7WUF;6$~7YF@@huIZ$uF7:6v%$w_tSwH:7~is>/Yhu", "Gyh,1HQ~M}0Cc$T>FaC;&W;IZ(w", 'u(!Z=SVL:L.uvJ"I(2', '6LnZwb8pNLm(1"I/QLmMW}?Cb@VrTg$/Oak}2qXw,6]?4>=>{;QteSD', "GC9F0}3!D(5ZPKX>?Rman6!?m6KM2", "/[APHzLW6#.v[l~(1_zP3K>h<BU3x`mL:~ydW,*Nl=Ek!h3I};}1VKy2", "N`91Jrk=;@mt*K&5l#kZlTZ?$@M@~CVI$8SPf_swlF4G|`pL", "gekT*$1c7mga[/RZ~6lH=", "O[iB{sHpZ3aT;lq~6yWvD%ek&", "TL{d#4{7++j^b:$(!D", "vsQ;kzl~PFhTP:_~1_L:*RPIY+.H_:wNXe2A>tA~5=y!K+=", 'SUd:e!Nz"rYcSlI5IH;{', "hR)ZtWY7ar=dnh,8tHOnBzhPrBBT._@", "I;AZ!!Vpt#TzVe:|]HPd.!82", "ruKBc!F2", "zUEMQA2VzzRMm@d", "yZT>_l}2", 'oShvC/XP<#1X^`#8C>>:mB/wrS^tRUO>"=*T/j<hemu~Fr)pe1*1CK1c8@', "Bv7Zd!SqS(", "ge&}6B?@i0?;iuZ]H_yP}z7P<B1XrK%(:rJZ24CNG(!r6%.:tH!g=^62", "HZFvqgwYYzZ#j_M(", "b9B)S_[*neY,XgKNZ~STkz5BK67ho!;N+H?AO/2coS)LVemZH64tuSD", "^_DFK!xM(z%!ggU]l)DvhP}8v", "V_^MQ/*@JBSP_UT4{8P|Ds.hrLMurUm`", "yHeZ;4u@^z~u2", "g#Cax/5BwS7~;C8plUf^~p=wz9ifbumL{6^bF%1N4w7GipP~n~u", "Yr>bD%$wCL>@th?/`>KML/G2R6f(EX[>x#Q1)", "lHg{/XW2", 'Jt0t:ICWJOq^g/)%JLZ{9w7(cUxu3",`E#e}rBHjv0"bx`8~d2', "]./T8g~Y*(tn5Uo)Q]$g,tH*E.xdu$j)$.=|/j1zV@NpI:X~BIT>wnz6|e", "N#DHE/1zyO<", "m;K|e%T~z=3!/$dCw_lMVPms#+", 'l_Q18P45)#C:}wz8XUg{t%g6i;:@.K"4h8f|"W~P:U.@E{]Z+F4T|X^P0=jx2', '@z5sA}*@d}irAWtZISA?4tp5"FmX2r}|^H.|.K@@de', "7;)?MWC|Q#Nu1{f%3=7?(W/0)SvvPUi)2m4v4*D", 'a;!^&BnH(r`uM+"IOzJ{3', "juoMlKoI>UF#AC.~I.8FoK25FwwX@&VN", "F>xZBBH|p;|T*+k5TOJ}LKbwvd#erK@:G$.Z`RD", "/|oMsr>XOL", "/;ItagoI)#lxxW+:", "VuR|(W#HY6%?JhQ)Z8Itfs>0$w?:fla]3|e?zG?NB0RXD", 'v|PsHzo=h#)w[>0%i_8{3I??jw$2z/">?ggt=', "LH8;0G+?M#QfNCj)>rpaBwj@vw=G;e>|/>Bs,U|5)#4}Nb`CLg|},I2pu", "%H;F]Rz!ZzbrrU[4l#a1?SV|7z,Ubg~7S88TvGik^;i^+/r8/=gF#k(%GM:", "b#eZ]9mwx5PXIUvCx|_F7", "dI;)5A|N_z2v$WM", "iHB{H$oP3;|bNJH:(IY", "h8*)Dbf!amBt#re>=12", "R_${?~Av<38S~Jm72;oBt}vwrestHe@.Y{(bX%IPOePhsWw]dkRd", 'NLI;#%i~"F', ">>C;[p:NR5Tzw!!h#Rb;Zgsh#+", "Vt>bk1$kwLkPJ_();g^:,tjNzB<", ".=TBsSmh<e[!meE~aF?FXTL@l5)", "jC&s&!p*/5zUNbN4}#I7s/{%&", ";6T^GS3|06)", '"61ve_=M=L=}IUD7P6EMjPp|{', "(kIvo/bkl;F8S1.~9Ux{,tvq<e`tTUq)UeY", "N#S)`*2W1Fh_RU/`jvrsKU5!@3_t__e>MaPs:;Svlz!)2", "Q.)dD4Sh*MO:T+z],8Y", "5+x?Oq$hu", "jtHM;~ewXBw$u>Y7F8:b(^f2y(ztY$#`", "EBj?]REGk(c(^JB)6D", 'vshA(6.ke(/L#riIw8D,8!ON2=eGN")8p|FH,U:B3;$([$H~/vQv]`D', "XO+T~j(h[etp4wNZVHL:4jOBY+P(TKB:D3c|Q/J!OL", "&[#;4Jf|u6#ea:t/uaS?*R~hj@6U?>y5:#&Pi/I0Iwgf_uE]=[.d", "9#T&xPL!AM%Zt{NZAL6HuS62%6(b^/u[r#Ev", "/r`)ig,pkmh@0+~Zg]p|pX5?EL^pWXr8[HFc[c(s(rrXc:`5qD", "&(WH*H$=&0lsc/C|^;faD4kII.P", "S8n^T_#N0=ok#{z`7;sHF!D", "$L`}[$mk^F", ",H{}MW||!@^Te&.~O1DH)P||f0|P*lx~_v|Z2ik=]U)@~&", '.k2:~RC?X=W$*wD(!R"vEK+@"=O8F"7pL>5|&_s(26C', '^;wn04x%"rjr[Y(:XSdcZPzN!wQ6auZ`L+!}$S;s#z?c[Ke', "I>+P$by2h#{YU$|8B=2;u_#6cS|:J_d.CIN:4cC?XBB3QpN4b;qF", "fS!s,pJpoeulkCd>$S5|*H&N2zP)S@7%{meZ8!a=50)", "|sX19$u5j;|S#%~`@(kZ{kD", ";6A)yHD", "x;w|Dr>YsULL6_s>(|faZAtHceKac>c5HHgvjKxqq0S2ru", ":~a;,j(h6S0zPuNZ.HbF2kV8]OyUule", '.|.dO6WpF#1m6"xN]#B)SkJN%@9O9UCN:|F:Y_(Y', "H.>axAXwd#/tXhm8>rZ1ylRh{;5_hKlI9.ub%Jz*[SPTk@`h", "Eeys}w*cv", 'N|cnZpkw6#(d2"U8~;5svWih.04Twe07S_OabGk=06@.$CX:x6B?g~}?we', "prVtT}7=t#9X7Jg/c~Qv>T*5J9o$x&u(+[`ZC", "ceV1ds(%OUx#h*<5", '=g1:[cY%|(|}"+O', "/F$P7gj|:.{@V>e4By6v$r,?>S=_Ue=/G`9FMWG2}0Mbt!tZakLaWTAqTM@J2", "PI+P!GPk=L~_}wZ7QOn?8*ew(;F;Ve4`h|JdYS,6[S0Ur:~hCgUM", "$`mHk$82~+J3l1MZL[$Z~j?N@U>v+>8Nt9UB_l]YGM6X]wz8;.I7=%g@(+", "@6psP`@*8wtt.+Spgvqg@^mkH0Lue&+", "Fg;)]RwX+3B", "`gQHYkD", "#S0v,*AI@(Vf2", "ft,HgB/P#Fa#nh$C5(dHYSCBwO$1z/||$tCA<piqvdu;2", '6u4)N;n|Ew2*R:".{|nZtrC5)#7!+:a(YzdnkJ:B<S~!Z*d', ";~`Zd%z@ye.h2", "5=T&PHp5>URMr+O/1g8{^Hz!*z7~[Y", "N#6H/`1?Fd7#4l<>`FR&$Gy2", "<#Y&fSY(S+9$5u]5AZ4)XSQ=,zFF2", "HgBP?%j8~r=Ro>C~U_u&qj`p,;2AKpa(6>fM|gJN?", "5zmHJnj|:eu*T:0(;IPB]lw(.@57.u4`fH2", "?s>HwH5*b@6p(JM/[sLc}l`?QwaG;/zLv2", 'yLfaL6b7"=Lbu$b>r;2:`jB8`@(#5/lIKU[dvBzp0+.lJhX:8F!^n!D', "|*r!9E<NN", "#fK7XDhy}", "5As)droN}", "ikX)IDsH}", ":#D`?P&/m", "[*RlQ.~hq)/5Ff)_", 'SK6">{?}p4hvJP4{', ",m9MC#[#<4=4wNzC", "|h`qdg+ZAhDM*Q0y", 'xZ_"Q.Th{!YM8Bm', '4;N"a6!k', "fCay5.#x", "T<Gsdn!x", "6=y*CeA", "$*%|8sKx", "*+&DbJ4x", "PBG@X.lx", "PBPy*", "eC8xg{kh:2@y#P1DrCn/PH;", "XOrRAfy0!ja/Gz{@DLhk=yVe6C~(Jq9", "$Nj#I=70ZsU/6?vO)N9m?<;", "ABe@:,.s/1cw(za9V+vo`.tZf2iS?P)", "=utv4o8Tsenr1K[lIbUwk8,*S{$(P}#", "h#t7CMI/R6)@7VEy8wtA7Xu/Mh6", "ig}:8T5", ":#x`k5@N", "[oX;", "a@_.f87X", '9p3Hf"GX', "DS+]@<49", "g@Nt./~X", "I:a6wDjf", "6*BYOOvak,)", ".Sxb?wg^", '=K5"Vwz^', "`S>p", "SShskw3^", "w#Ad}", "8Sq`+dh", "8S*IRna^", "0S+p", "fBn)WOJN", "^U29`XO}Uhuo.q>>xea!22]FO;yvblZ", "m.P7WrB44y8", "2DwzlEQN", "oOHWjW5t", "^[tWe9Kt", "Yk#T^(!~", "+_@ob$}6", "9z@9x0Ne9h", "uxHJp&V~", "D;QC", "vzFC!", "&_GC", "Qxt9+qH", "Pk}3isV~"]), QE(qg = function(...qq) {
      QE(qq[HE[11]] = HE[2], qq[HE[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], qq[HE[12]] = HE[19], qq[HE[13]] = []);
      try {
        QE(qq[HE[12]] = Object, qq[HE[13]][HE[27]]("".__proto__.constructor.name))
      } catch (jE) {}
      qq: for (qq[-HE[14]] = HE[2]; qq[-HE[14]] < qq[HE[15]][HE[11]]; qq[-HE[14]]++) try {
        for (qq[HE[12]] = qq[HE[15]][qq[-HE[14]]](), qq[HE[16]] = HE[2]; qq[HE[16]] < qq[HE[13]][HE[11]]; qq[HE[16]]++)
          if (typeof qq[HE[12]][qq[HE[13]][qq[HE[16]]]] === HE[17]) continue qq;
        return qq[HE[12]]
      } catch (jE) {}
      return qq[HE[12]] || this
    }() || {}, Eg = qg.TextDecoder, gg = qg.Uint8Array, Yg = qg.IN, lg = qg.String || String, Og = qg.Array || Array, mg = function(...qq) {
      return QE(qq[HE[11]] = HE[2], qq[HE[28]] = new Og(HE[60]), qq[-HE[29]] = lg[HE[24]] || lg.fromCharCode, qq[HE[18]] = []),
        function(...Eq) {
          for (QE(Eq[HE[11]] = HE[0], Eq[HE[21]] = HE[19], Eq[HE[20]] = HE[19], Eq[HE[4]] = Eq[HE[2]][HE[11]], qq[HE[18]][HE[11]] = HE[2]), Eq[HE[16]] = HE[2]; Eq[HE[16]] < Eq[HE[4]];) QE(Eq[HE[20]] = Eq[HE[2]][Eq[HE[16]]++], Eq[HE[20]] <= HE[59] ? Eq[HE[21]] = Eq[HE[20]] : Eq[HE[20]] <= 223 ? Eq[HE[21]] = (Eq[HE[20]] & HE[61]) << HE[23] | Eq[HE[2]][Eq[HE[16]]++] & HE[22] : Eq[HE[20]] <= 239 ? Eq[HE[21]] = (Eq[HE[20]] & HE[32]) << HE[26] | (Eq[HE[2]][Eq[HE[16]]++] & HE[22]) << HE[23] | Eq[HE[2]][Eq[HE[16]]++] & HE[22] : lg[HE[24]] ? Eq[HE[21]] = (Eq[HE[20]] & HE[25]) << HE[62] | (Eq[HE[2]][Eq[HE[16]]++] & HE[22]) << HE[26] | (Eq[HE[2]][Eq[HE[16]]++] & HE[22]) << HE[23] | Eq[HE[2]][Eq[HE[16]]++] & HE[22] : (Eq[HE[21]] = HE[22], Eq[HE[16]] += HE[4]), qq[HE[18]][HE[27]](qq[HE[28]][Eq[HE[21]]] || (qq[HE[28]][Eq[HE[21]]] = qq[-HE[29]](Eq[HE[21]]))));
          return qq[HE[18]].join("")
        }
    }()), (() => {
      function qq(...qq) {
        return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(...qq) {
          for (QE(qq[HE[11]] = HE[0], qq[-HE[33]] = '%kNKq^m}A!zwZH*BahJyC,DY/if"@(x`7S_{G.Q>#WbUdL+91l6vo4)8ne[V<:ucR;&jE0gX5sIOM?2prP]t$TF~|=3', qq[HE[30]] = "" + (qq[HE[2]] || ""), qq[HE[4]] = qq[HE[30]].length, qq[-HE[40]] = [], qq[-HE[35]] = HE[2], qq[-HE[36]] = HE[2], qq[HE[25]] = -HE[0]), qq[HE[31]] = HE[2]; qq[HE[31]] < qq[HE[4]]; qq[HE[31]]++)
            if (qq[-HE[32]] = qq[-HE[33]].indexOf(qq[HE[30]][qq[HE[31]]]), qq[-HE[32]] !== -HE[0])
              if (qq[HE[25]] < HE[2]) qq[HE[25]] = qq[-HE[32]];
              else {
                QE(qq[HE[25]] += qq[-HE[32]] * HE[34], qq[-HE[35]] |= qq[HE[25]] << qq[-HE[36]], qq[-HE[36]] += (qq[HE[25]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                do {
                  QE(qq[-HE[40]].push(qq[-HE[35]] & HE[10]), qq[-HE[35]] >>= HE[3], qq[-HE[36]] -= HE[3])
                } while (qq[-HE[36]] > HE[25]);
                qq[HE[25]] = -HE[0]
              } return qq[HE[25]] > -HE[0] && qq[-HE[40]].push((qq[-HE[35]] | qq[HE[25]] << qq[-HE[36]]) & HE[10]), oE(qq[-HE[40]])
        }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
      } [][HE[11]] = HE[2];
      const Eq = HE[41],
        gq = qq(115) + qq(116) + qq(117) + qq(118) + qq(119),
        Yq = {
          [HE[41]]: qq(120) + qq(121) + qq(122) + qq(123) + qq(HE[64])
        },
        lq = (...Eq) => {
          Eq[HE[11]] = HE[0];
          const gq = Yq[Eq[HE[2]]];
          if (!gq) {
            function lq(qq) {
              var Eq, gq, Yq, lq, Oq, mq, xq;
              for (QE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = HE[2], Oq = HE[2], mq = -HE[0]), xq = HE[2]; xq < gq; xq++) {
                var Aq = '9SXkpaLABbHlWECjTQdsGYPqIroeZgDft)R}UKiF6J7@O+n.Vm~N{#h5cyM0=3*x42?:/wv8|%;"]!_,<>1[(`^$zu&'.indexOf(Eq[xq]);
                if (Aq !== -HE[0])
                  if (mq < HE[2]) mq = Aq;
                  else {
                    QE(mq += Aq * HE[34], lq |= mq << Oq, Oq += (mq & HE[37]) > HE[18] ? HE[38] : HE[39]);
                    do {
                      QE(Yq.push(lq & HE[10]), lq >>= HE[3], Oq -= HE[3])
                    } while (Oq > HE[25]);
                    mq = -HE[0]
                  }
              }
              return mq > -HE[0] && Yq.push((lq | mq << Oq) & HE[10]), oE(Yq)
            }

            function Oq(...qq) {
              return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = lq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
            }

            function mq(...Eq) {
              Eq[HE[11]] = HE[2],
                function(...Eq) {
                  function gq(...qq) {
                    for (QE(qq[HE[11]] = HE[0], qq[HE[0]] = [], qq[HE[13]] = HE[2], qq[-HE[45]] = qq[HE[2]].length, qq[HE[46]] = HE[19], qq[HE[47]] = HE[19]); qq[HE[13]] < qq[-HE[45]];) QE(qq[HE[46]] = qq[HE[2]].charCodeAt(qq[HE[13]]++), qq[HE[46]] >= HE[52] && qq[HE[46]] <= 56319 && qq[HE[13]] < qq[-HE[45]] ? (qq[HE[47]] = qq[HE[2]].charCodeAt(qq[HE[13]]++), (64512 & qq[HE[47]]) == HE[53] ? qq[HE[0]].push(((qq[HE[46]] & HE[48]) << HE[51]) + (qq[HE[47]] & HE[48]) + HE[50]) : (qq[HE[0]].push(qq[HE[46]]), qq[HE[13]]--)) : qq[HE[0]].push(qq[HE[46]]));
                    return qq[HE[0]]
                  }

                  function Yq(...qq) {
                    if (qq[HE[11]] = HE[0], qq[HE[2]] >= HE[52] && qq[HE[2]] <= 57343) {
                      function Eq(...qq) {
                        for (QE(qq[HE[11]] = HE[0], qq[HE[0]] = 'A+xfEzH7D]|R!%u=4/}a2>.:I*Qrq3e6y{BhO?;vK8_Ck~"0#&)<G@lcFj[1t$9U,^pdw(`5nZXPgsVMJmSYToiWbLN', qq[-HE[54]] = "" + (qq[HE[2]] || ""), qq[HE[4]] = qq[-HE[54]].length, qq[HE[16]] = [], qq[HE[57]] = HE[2], qq[HE[58]] = HE[2], qq[-HE[56]] = -HE[0]), qq[HE[30]] = HE[2]; qq[HE[30]] < qq[HE[4]]; qq[HE[30]]++)
                          if (qq[-HE[55]] = qq[HE[0]].indexOf(qq[-HE[54]][qq[HE[30]]]), qq[-HE[55]] !== -HE[0])
                            if (qq[-HE[56]] < HE[2]) qq[-HE[56]] = qq[-HE[55]];
                            else {
                              QE(qq[-HE[56]] += qq[-HE[55]] * HE[34], qq[HE[57]] |= qq[-HE[56]] << qq[HE[58]], qq[HE[58]] += (qq[-HE[56]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                              do {
                                QE(qq[HE[16]].push(qq[HE[57]] & HE[10]), qq[HE[57]] >>= HE[3], qq[HE[58]] -= HE[3])
                              } while (qq[HE[58]] > HE[25]);
                              qq[-HE[56]] = -HE[0]
                            } return qq[-HE[56]] > -HE[0] && qq[HE[16]].push((qq[HE[57]] | qq[-HE[56]] << qq[HE[58]]) & HE[10]), oE(qq[HE[16]])
                      }

                      function gq(...qq) {
                        return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = Eq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                      }
                      throw Error(gq(126) + gq(HE[59]) + gq(HE[60]) + qq[HE[2]].toString(HE[82]).toUpperCase() + (gq(129) + gq(130) + gq(HE[29]) + gq(132)))
                    }
                  }

                  function lq(...qq) {
                    return qq[HE[11]] = HE[13], Eq[HE[0]](qq[HE[2]] >> qq[HE[0]] & HE[22] | HE[60])
                  }

                  function Oq(...qq) {
                    return qq[HE[11]] = HE[0], (4294967168 & qq[HE[2]]) == HE[2] ? Eq[HE[0]](qq[HE[2]]) : (qq[HE[0]] = "", (4294965248 & qq[HE[2]]) == HE[2] ? qq[HE[0]] = Eq[HE[0]](qq[HE[2]] >> HE[23] & HE[61] | HE[70]) : (4294901760 & qq[HE[2]]) == HE[2] ? QE(Yq(qq[HE[2]]), qq[HE[0]] = Eq[HE[0]](qq[HE[2]] >> HE[26] & HE[32] | HE[72]), qq[HE[0]] += lq(qq[HE[2]], HE[23])) : (4292870144 & qq[HE[2]]) == HE[2] && QE(qq[HE[0]] = Eq[HE[0]](qq[HE[2]] >> HE[62] & HE[25] | HE[74]), qq[HE[0]] += lq(qq[HE[2]], HE[26]), qq[HE[0]] += lq(qq[HE[2]], HE[23])), qq[HE[0]] += Eq[HE[0]](qq[HE[2]] & HE[22] | HE[60]), qq[HE[0]])
                  }

                  function mq(...qq) {
                    if (qq[HE[11]] = HE[2], Eq[HE[64]] >= Eq[HE[65]]) {
                      function gq(...qq) {
                        for (QE(qq[HE[11]] = HE[0], qq[-HE[66]] = ';+v?.2}i!YoDRF]K4e$Ng>Zjh6<qXEn/x3#1G[*LC,W97Q_OdraI^buV&c|wsP=:l@m%BTM5SJk){zt0yf`8HApU(~"', qq[HE[13]] = "" + (qq[HE[2]] || ""), qq[HE[65]] = qq[HE[13]].length, qq[HE[69]] = [], qq[HE[47]] = HE[2], qq[HE[58]] = HE[2], qq[HE[68]] = -HE[0]), qq[HE[32]] = HE[2]; qq[HE[32]] < qq[HE[65]]; qq[HE[32]]++)
                          if (qq[HE[67]] = qq[-HE[66]].indexOf(qq[HE[13]][qq[HE[32]]]), qq[HE[67]] !== -HE[0])
                            if (qq[HE[68]] < HE[2]) qq[HE[68]] = qq[HE[67]];
                            else {
                              QE(qq[HE[68]] += qq[HE[67]] * HE[34], qq[HE[47]] |= qq[HE[68]] << qq[HE[58]], qq[HE[58]] += (qq[HE[68]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                              do {
                                QE(qq[HE[69]].push(qq[HE[47]] & HE[10]), qq[HE[47]] >>= HE[3], qq[HE[58]] -= HE[3])
                              } while (qq[HE[58]] > HE[25]);
                              qq[HE[68]] = -HE[0]
                            } return qq[HE[68]] > -HE[0] && qq[HE[69]].push((qq[HE[47]] | qq[HE[68]] << qq[HE[58]]) & HE[10]), oE(qq[HE[69]])
                      }

                      function Yq(...qq) {
                        return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = gq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                      }
                      throw Error(Yq(133))
                    }
                    if (QE(qq[HE[21]] = Eq[HE[16]][Eq[HE[64]]] & HE[10], Eq[HE[64]]++), (qq[HE[21]] & HE[70]) == HE[60]) return qq[HE[21]] & HE[22];
                    throw Error(function(...qq) {
                      return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(...qq) {
                        for (QE(qq[HE[11]] = HE[0], qq[-HE[7]] = 'W^#"lCc{kUwY9.s=;XQVA`o20)D+&[TgR$JN*@,_O75Z4nFK|zjhvi%}MP8aLqt6!~/pIxESd?y]fmG1(eBr<u3:Hb>', qq[HE[13]] = "" + (qq[HE[2]] || ""), qq[HE[4]] = qq[HE[13]].length, qq[HE[9]] = [], qq[HE[7]] = HE[2], qq[HE[58]] = HE[2], qq[HE[43]] = -HE[0]), qq[HE[63]] = HE[2]; qq[HE[63]] < qq[HE[4]]; qq[HE[63]]++)
                          if (qq[HE[41]] = qq[-HE[7]].indexOf(qq[HE[13]][qq[HE[63]]]), qq[HE[41]] !== -HE[0])
                            if (qq[HE[43]] < HE[2]) qq[HE[43]] = qq[HE[41]];
                            else {
                              QE(qq[HE[43]] += qq[HE[41]] * HE[34], qq[HE[7]] |= qq[HE[43]] << qq[HE[58]], qq[HE[58]] += (qq[HE[43]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                              do {
                                QE(qq[HE[9]].push(qq[HE[7]] & HE[10]), qq[HE[7]] >>= HE[3], qq[HE[58]] -= HE[3])
                              } while (qq[HE[58]] > HE[25]);
                              qq[HE[43]] = -HE[0]
                            } return qq[HE[43]] > -HE[0] && qq[HE[9]].push((qq[HE[7]] | qq[HE[43]] << qq[HE[58]]) & HE[10]), oE(qq[HE[9]])
                      }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                    }(HE[15]))
                  }

                  function xq(...gq) {
                    if (QE(gq[HE[11]] = HE[2], gq[HE[9]] = HE[19], gq[HE[47]] = HE[19], gq[HE[13]] = HE[19], gq[HE[43]] = HE[19], gq[HE[16]] = HE[19]), Eq[HE[64]] > Eq[HE[65]]) {
                      function lq(...qq) {
                        for (QE(qq[HE[11]] = HE[0], qq[HE[21]] = ';&y{(sDlMVQO3AwKR$,PIWFL08g[4x9m#G6vJ~Y2N|X@}1!>*)T`phfaHBk5]?rZeU%SCE:_ou7b=ctd/zij<q"n+^.', qq[HE[13]] = "" + (qq[HE[2]] || ""), qq[HE[65]] = qq[HE[13]].length, qq[HE[16]] = [], qq[HE[47]] = HE[2], qq[HE[23]] = HE[2], qq[HE[43]] = -HE[0]), qq[HE[3]] = HE[2]; qq[HE[3]] < qq[HE[65]]; qq[HE[3]]++)
                          if (qq[HE[71]] = qq[HE[21]].indexOf(qq[HE[13]][qq[HE[3]]]), qq[HE[71]] !== -HE[0])
                            if (qq[HE[43]] < HE[2]) qq[HE[43]] = qq[HE[71]];
                            else {
                              QE(qq[HE[43]] += qq[HE[71]] * HE[34], qq[HE[47]] |= qq[HE[43]] << qq[HE[23]], qq[HE[23]] += (qq[HE[43]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                              do {
                                QE(qq[HE[16]].push(qq[HE[47]] & HE[10]), qq[HE[47]] >>= HE[3], qq[HE[23]] -= HE[3])
                              } while (qq[HE[23]] > HE[25]);
                              qq[HE[43]] = -HE[0]
                            } return qq[HE[43]] > -HE[0] && qq[HE[16]].push((qq[HE[47]] | qq[HE[43]] << qq[HE[23]]) & HE[10]), oE(qq[HE[16]])
                      }

                      function Oq(...qq) {
                        return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = lq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                      }
                      throw Error(Oq(135))
                    }
                    if (Eq[HE[64]] == Eq[HE[65]]) return HE[78];
                    if (QE(gq[HE[9]] = Eq[HE[16]][Eq[HE[64]]] & HE[10], Eq[HE[64]]++), (gq[HE[9]] & HE[60]) == HE[2]) return gq[HE[9]];
                    if ((gq[HE[9]] & HE[72]) == HE[70]) {
                      if (QE(gq[HE[47]] = mq(), gq[HE[16]] = (gq[HE[9]] & HE[61]) << HE[23] | gq[HE[47]]), gq[HE[16]] >= HE[60]) return gq[HE[16]];
                      {
                        function xq(...qq) {
                          for (QE(qq[HE[11]] = HE[0], qq[HE[0]] = '7!RQq2~aouK4)%5`&ATt:#0=sdV"_nHE@k?O[9{UB*C^bh|3gz1vM]mL6pyc+Pjf/iwN;r$}lY.>,W(ISZ8exGXDF<J', qq[HE[1]] = "" + (qq[HE[2]] || ""), qq[HE[65]] = qq[HE[1]].length, qq[HE[16]] = [], qq[HE[36]] = HE[2], qq[-HE[73]] = HE[2], qq[HE[25]] = -HE[0]), qq[HE[63]] = HE[2]; qq[HE[63]] < qq[HE[65]]; qq[HE[63]]++)
                            if (qq[HE[41]] = qq[HE[0]].indexOf(qq[HE[1]][qq[HE[63]]]), qq[HE[41]] !== -HE[0])
                              if (qq[HE[25]] < HE[2]) qq[HE[25]] = qq[HE[41]];
                              else {
                                QE(qq[HE[25]] += qq[HE[41]] * HE[34], qq[HE[36]] |= qq[HE[25]] << qq[-HE[73]], qq[-HE[73]] += (qq[HE[25]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                                do {
                                  QE(qq[HE[16]].push(qq[HE[36]] & HE[10]), qq[HE[36]] >>= HE[3], qq[-HE[73]] -= HE[3])
                                } while (qq[-HE[73]] > HE[25]);
                                qq[HE[25]] = -HE[0]
                              } return qq[HE[25]] > -HE[0] && qq[HE[16]].push((qq[HE[36]] | qq[HE[25]] << qq[-HE[73]]) & HE[10]), oE(qq[HE[16]])
                        }

                        function Aq(...qq) {
                          return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = xq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                        }
                        throw Error(Aq(136))
                      }
                    }
                    if ((gq[HE[9]] & HE[74]) == HE[72]) {
                      if (QE(gq[HE[47]] = mq(), gq[HE[13]] = mq(), gq[HE[16]] = (gq[HE[9]] & HE[32]) << HE[26] | gq[HE[47]] << HE[23] | gq[HE[13]]), gq[HE[16]] >= 2048) return Yq(gq[HE[16]]), gq[HE[16]];
                      {
                        function cq(...qq) {
                          for (QE(qq[HE[11]] = HE[0], qq[-HE[75]] = ':@`0^{)[w3x>#Bikm=L,4G+ZTQIF&]2/vqPa~lMNu.W6<D5!hKeUjE?d"C_nb}cSs$rgXA7;OJ8zoR1f(*VtyH|9%Yp', qq[HE[13]] = "" + (qq[HE[2]] || ""), qq[HE[4]] = qq[HE[13]].length, qq[-HE[77]] = [], qq[HE[47]] = HE[2], qq[HE[76]] = HE[2], qq[HE[25]] = -HE[0]), qq[HE[63]] = HE[2]; qq[HE[63]] < qq[HE[4]]; qq[HE[63]]++)
                            if (qq[HE[71]] = qq[-HE[75]].indexOf(qq[HE[13]][qq[HE[63]]]), qq[HE[71]] !== -HE[0])
                              if (qq[HE[25]] < HE[2]) qq[HE[25]] = qq[HE[71]];
                              else {
                                QE(qq[HE[25]] += qq[HE[71]] * HE[34], qq[HE[47]] |= qq[HE[25]] << qq[HE[76]], qq[HE[76]] += (qq[HE[25]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                                do {
                                  QE(qq[-HE[77]].push(qq[HE[47]] & HE[10]), qq[HE[47]] >>= HE[3], qq[HE[76]] -= HE[3])
                                } while (qq[HE[76]] > HE[25]);
                                qq[HE[25]] = -HE[0]
                              } return qq[HE[25]] > -HE[0] && qq[-HE[77]].push((qq[HE[47]] | qq[HE[25]] << qq[HE[76]]) & HE[10]), oE(qq[-HE[77]])
                        }

                        function uq(...qq) {
                          return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = cq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                        }
                        throw Error(uq(137))
                      }
                    }
                    if ((248 & gq[HE[9]]) == HE[74] && (QE(gq[HE[47]] = mq(), gq[HE[13]] = mq(), gq[HE[43]] = mq(), gq[HE[16]] = (gq[HE[9]] & HE[25]) << HE[62] | gq[HE[47]] << HE[26] | gq[HE[13]] << HE[23] | gq[HE[43]]), gq[HE[16]] >= HE[50] && gq[HE[16]] <= 1114111)) return gq[HE[16]];
                    throw Error(qq(138))
                  }
                  Eq[HE[11]] = HE[0], Eq[HE[0]] = String.fromCharCode, QE(Eq[HE[16]] = HE[19], Eq[HE[65]] = HE[19], Eq[HE[64]] = HE[19]), QE(Eq[HE[2]].version = function(...qq) {
                    return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(qq) {
                      var Eq, gq, Yq, lq, Oq, mq, xq;
                      for (QE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = HE[2], Oq = HE[2], mq = -HE[0]), xq = HE[2]; xq < gq; xq++) {
                        var Aq = '5aWfmPNq2^vX4!),`J]$[3}*LBMFCR_%sTI~9<dg>E=e@n?1+:Kc/|QhHS(U&y"tozDOY6w7jk{blV#Z8;AuxGip.0r'.indexOf(Eq[xq]);
                        if (Aq !== -HE[0])
                          if (mq < HE[2]) mq = Aq;
                          else {
                            QE(mq += Aq * HE[34], lq |= mq << Oq, Oq += (mq & HE[37]) > HE[18] ? HE[38] : HE[39]);
                            do {
                              QE(Yq.push(lq & HE[10]), lq >>= HE[3], Oq -= HE[3])
                            } while (Oq > HE[25]);
                            mq = -HE[0]
                          }
                      }
                      return mq > -HE[0] && Yq.push((lq | mq << Oq) & HE[10]), oE(Yq)
                    }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                  }(HE[67]), Eq[HE[2]].encode = function(...qq) {
                    for (QE(qq[HE[11]] = HE[0], qq[HE[0]] = gq(qq[HE[2]]), qq[HE[1]] = qq[HE[0]].length, qq[HE[4]] = -HE[0], qq[HE[9]] = HE[19], qq[HE[47]] = ""); ++qq[HE[4]] < qq[HE[1]];) QE(qq[HE[9]] = qq[HE[0]][qq[HE[4]]], qq[HE[47]] += Oq(qq[HE[9]]));
                    return qq[HE[47]]
                  }, Eq[HE[2]].decode = function(qq) {
                    var Yq, lq;
                    for (QE(Eq[HE[16]] = gq(qq), Eq[HE[65]] = Eq[HE[16]].length, Eq[HE[64]] = HE[2], Yq = [], lq = void 0);
                      (lq = xq()) !== HE[78];) Yq.push(lq);
                    return function(...qq) {
                      for (QE(qq[HE[11]] = HE[0], qq[HE[21]] = qq[HE[2]].length, qq[-HE[7]] = -HE[0], qq[HE[49]] = HE[19], qq[HE[16]] = ""); ++qq[-HE[7]] < qq[HE[21]];) qq[HE[49]] = qq[HE[2]][qq[-HE[7]]], qq[HE[49]] > 65535 && QE(qq[HE[49]] -= HE[50], qq[HE[16]] += Eq[HE[0]](qq[HE[49]] >>> HE[51] & HE[48] | HE[52]), qq[HE[49]] = HE[53] | qq[HE[49]] & HE[48]), qq[HE[16]] += Eq[HE[0]](qq[HE[49]]);
                      return qq[HE[16]]
                    }(Yq)
                  })
                }(typeof exports === qq(HE[14]) + function(...qq) {
                  return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(...qq) {
                    for (QE(qq[HE[11]] = HE[0], qq[HE[21]] = 'AwWKbn1N;.*7,PSo3xE`6R$Iy[lHY+/8k5LgBaC{~iQ|T}Uf0]>:MtOv#Z4%?)s@V2r9zjD"<pdXh!&qu(F=GJm_ce^', qq[HE[13]] = "" + (qq[HE[2]] || ""), qq[HE[4]] = qq[HE[13]].length, qq[HE[16]] = [], qq[HE[7]] = HE[2], qq[HE[44]] = HE[2], qq[HE[43]] = -HE[0]), qq[HE[42]] = HE[2]; qq[HE[42]] < qq[HE[4]]; qq[HE[42]]++)
                      if (qq[HE[41]] = qq[HE[21]].indexOf(qq[HE[13]][qq[HE[42]]]), qq[HE[41]] !== -HE[0])
                        if (qq[HE[43]] < HE[2]) qq[HE[43]] = qq[HE[41]];
                        else {
                          QE(qq[HE[43]] += qq[HE[41]] * HE[34], qq[HE[7]] |= qq[HE[43]] << qq[HE[44]], qq[HE[44]] += (qq[HE[43]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                          do {
                            QE(qq[HE[16]].push(qq[HE[7]] & HE[10]), qq[HE[7]] >>= HE[3], qq[HE[44]] -= HE[3])
                          } while (qq[HE[44]] > HE[25]);
                          qq[HE[43]] = -HE[0]
                        } return qq[HE[43]] > -HE[0] && qq[HE[16]].push((qq[HE[7]] | qq[HE[43]] << qq[HE[44]]) & HE[10]), oE(qq[HE[16]])
                  }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
                }(HE[84]) ? this.utf8 = {} : exports)
            }
            throw qq(125) in PE && mq(), new Error(Oq(142) + Oq(143) + Oq(144) + Oq(145) + " v" + Eq[HE[2]])
          }
          return [HE[2], HE[0], HE[13], HE[4], HE[16], HE[7], HE[23], HE[25]].map(((...qq) => {
            function Eq(...qq) {
              return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(...qq) {
                for (QE(qq[HE[11]] = HE[0], qq[HE[21]] = 'Cf4x1TA/n=;w_vPB7!d+mi.:}0W#?[>6(uq9Q$k{`~]Nb@2"85^)<a|3%yz&*RtK,SsXZcJeIGDUYhoLFOrVpgHMEjl', qq[HE[13]] = "" + (qq[HE[2]] || ""), qq[HE[65]] = qq[HE[13]].length, qq[-HE[80]] = [], qq[-HE[79]] = HE[2], qq[HE[23]] = HE[2], qq[HE[25]] = -HE[0]), qq[HE[63]] = HE[2]; qq[HE[63]] < qq[HE[65]]; qq[HE[63]]++)
                  if (qq[HE[71]] = qq[HE[21]].indexOf(qq[HE[13]][qq[HE[63]]]), qq[HE[71]] !== -HE[0])
                    if (qq[HE[25]] < HE[2]) qq[HE[25]] = qq[HE[71]];
                    else {
                      QE(qq[HE[25]] += qq[HE[71]] * HE[34], qq[-HE[79]] |= qq[HE[25]] << qq[HE[23]], qq[HE[23]] += (qq[HE[25]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                      do {
                        QE(qq[-HE[80]].push(qq[-HE[79]] & HE[10]), qq[-HE[79]] >>= HE[3], qq[HE[23]] -= HE[3])
                      } while (qq[HE[23]] > HE[25]);
                      qq[HE[25]] = -HE[0]
                    } return qq[HE[25]] > -HE[0] && qq[-HE[80]].push((qq[-HE[79]] | qq[HE[25]] << qq[HE[23]]) & HE[10]), oE(qq[-HE[80]])
              }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
            }
            return qq[HE[11]] = HE[0], Eq(146) in PE && function(...qq) {
              QE(qq[HE[11]] = HE[2], qq[HE[1]] = function(...qq) {
                for (QE(qq[HE[11]] = HE[0], qq[HE[81]] = qq[HE[2]].length, qq[HE[1]] = [], qq[HE[65]] = HE[2]), qq[HE[16]] = HE[2]; qq[HE[16]] < qq[HE[81]]; qq[HE[16]]++) qq[HE[1]].push(qq[HE[16]] !== HE[2] && qq[HE[2]][qq[HE[16]]] > qq[HE[2]][qq[HE[16]] - HE[0]] ? qq[HE[1]][qq[HE[16]] - HE[0]] + HE[0] : HE[0]);
                for (qq[HE[47]] = qq[HE[81]] - HE[0]; qq[HE[47]] >= HE[2]; qq[HE[47]]--) qq[HE[47]] !== qq[HE[81]] - HE[0] && qq[HE[2]][qq[HE[47]]] > qq[HE[2]][qq[HE[47]] + HE[0]] && (qq[HE[1]][qq[HE[47]]] = Math.max(qq[HE[1]][qq[HE[47]]], qq[HE[1]][qq[HE[47]] + HE[0]] + HE[0])), qq[HE[65]] += qq[HE[1]][qq[HE[47]]];
                return qq[HE[65]]
              }, console.log(qq[HE[1]]))
            }(), parseInt(gq[Eq(147)](qq[HE[2]] * HE[3], qq[HE[2]] * HE[3] + HE[3]), HE[82])
          }))
        };
      QE(OE = (...qq) => (qq[HE[11]] = HE[0], qq[HE[2]] >= Eq), mE = (...qq) => {
        function Eq(...qq) {
          return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(...qq) {
            for (QE(qq[HE[11]] = HE[0], qq[HE[0]] = 'hv^~<@A6!spE1>LS%o.N*+x87Ya=2}0j`(z,XUg9?V]K[yMk&m3#T4"bP5{u)_eC;WD/w$r:B|ildIRcQnFqZJtOfHG', qq[HE[1]] = "" + (qq[HE[2]] || ""), qq[HE[4]] = qq[HE[1]].length, qq[HE[16]] = [], qq[HE[7]] = HE[2], qq[HE[58]] = HE[2], qq[HE[25]] = -HE[0]), qq[-HE[76]] = HE[2]; qq[-HE[76]] < qq[HE[4]]; qq[-HE[76]]++)
              if (qq[HE[41]] = qq[HE[0]].indexOf(qq[HE[1]][qq[-HE[76]]]), qq[HE[41]] !== -HE[0])
                if (qq[HE[25]] < HE[2]) qq[HE[25]] = qq[HE[41]];
                else {
                  QE(qq[HE[25]] += qq[HE[41]] * HE[34], qq[HE[7]] |= qq[HE[25]] << qq[HE[58]], qq[HE[58]] += (qq[HE[25]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                  do {
                    QE(qq[HE[16]].push(qq[HE[7]] & HE[10]), qq[HE[7]] >>= HE[3], qq[HE[58]] -= HE[3])
                  } while (qq[HE[58]] > HE[25]);
                  qq[HE[25]] = -HE[0]
                } return qq[HE[25]] > -HE[0] && qq[HE[16]].push((qq[HE[7]] | qq[HE[25]] << qq[HE[58]]) & HE[10]), oE(qq[HE[16]])
          }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
        }
        qq[HE[11]] = HE[13];
        const gq = crypto[Eq(148) + Eq(149) + Eq(150)](new Uint8Array(cE)),
          Yq = lE[HE[9]][Eq(151) + Eq(152)](qq[HE[0]], {
            [Eq(153)]: HE[0]
          });
        AE(lq(qq[HE[2]]), gq, HE[0], Yq);
        const Oq = new Uint8Array(cE + Yq[Eq(154)]);
        return QE(Oq[Eq(HE[83])](gq), Oq[Eq(HE[83])](Yq, cE)), Oq
      }, xE = (...Eq) => {
        function Yq(...qq) {
          return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = function(qq) {
            var Eq, gq, Yq, lq, Oq, mq, xq;
            for (QE(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = HE[2], Oq = HE[2], mq = -HE[0]), xq = HE[2]; xq < gq; xq++) {
              var Aq = 'H6~l;GDoeJCINF@k<ur2#h4Yfi!,vPt93*18wKLWxEZygQdp%nV_AM`+b7B}z{a$S]:j&>qRXm)UsT^O0(|"./5[=?c'.indexOf(Eq[xq]);
              if (Aq !== -HE[0])
                if (mq < HE[2]) mq = Aq;
                else {
                  QE(mq += Aq * HE[34], lq |= mq << Oq, Oq += (mq & HE[37]) > HE[18] ? HE[38] : HE[39]);
                  do {
                    QE(Yq.push(lq & HE[10]), lq >>= HE[3], Oq -= HE[3])
                  } while (Oq > HE[25]);
                  mq = -HE[0]
                }
            }
            return mq > -HE[0] && Yq.push((lq | mq << Oq) & HE[10]), oE(Yq)
          }(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
        }
        if (Eq[HE[11]] = HE[13], qq(156) + "2" in PE && (module.exports = async (Eq = () => {
            throw new Error(qq(157))
          }) => {
            const gq = new Set(process.argv.slice(HE[13]));
            if (!gq.has(qq(158))) {
              if (gq.size !== HE[0]) return HE[78];
              if (!gq.has("-v")) return HE[78]
            }
            return await (async (qq, gq) => {
              function Yq(...qq) {
                for (QE(qq[HE[11]] = HE[0], qq[HE[85]] = 'GctOHY3E1PQ~KahdNpu(5Z[S7UrCf/l]x+2Tg)}iXL.qmk%MByI|zn:J>b<wjv`*VF@_#9"A!,0?6W^=4sRoe$&{8;D', qq[-HE[57]] = "" + (qq[HE[2]] || ""), qq[HE[84]] = qq[-HE[57]].length, qq[HE[9]] = [], qq[HE[7]] = HE[2], qq[HE[23]] = HE[2], qq[HE[25]] = -HE[0]), qq[HE[3]] = HE[2]; qq[HE[3]] < qq[HE[84]]; qq[HE[3]]++)
                  if (qq[HE[86]] = qq[HE[85]].indexOf(qq[-HE[57]][qq[HE[3]]]), qq[HE[86]] !== -HE[0])
                    if (qq[HE[25]] < HE[2]) qq[HE[25]] = qq[HE[86]];
                    else {
                      QE(qq[HE[25]] += qq[HE[86]] * HE[34], qq[HE[7]] |= qq[HE[25]] << qq[HE[23]], qq[HE[23]] += (qq[HE[25]] & HE[37]) > HE[18] ? HE[38] : HE[39]);
                      do {
                        QE(qq[HE[9]].push(qq[HE[7]] & HE[10]), qq[HE[7]] >>= HE[3], qq[HE[23]] -= HE[3])
                      } while (qq[HE[23]] > HE[25]);
                      qq[HE[25]] = -HE[0]
                    } return qq[HE[25]] > -HE[0] && qq[HE[9]].push((qq[HE[7]] | qq[HE[25]] << qq[HE[23]]) & HE[10]), oE(qq[HE[9]])
              }

              function lq(...qq) {
                return qq[HE[11]] = HE[0], typeof dE[qq[HE[2]]] === HE[17] ? dE[qq[HE[2]]] = Yq(jE[qq[HE[2]]]) : dE[qq[HE[2]]]
              }
              return gq === await Eq() ? lq(161) + "l)" : ""
            })(), HE[90]
          }), Eq[HE[0]][Yq(162)] < cE) {
          function xq(...qq) {
            function Eq() {}
            qq[HE[11]] = HE[2], QE(qq[-HE[22]] = function(...qq) {
              for (QE(qq[HE[11]] = HE[13], qq[HE[13]] = HE[2], qq[HE[4]] = HE[2], qq[HE[65]] = new Eq(HE[2]), qq[HE[89]] = qq[HE[65]], qq[-HE[87]] = qq[HE[2]], qq[HE[58]] = qq[HE[0]]); qq[-HE[87]] !== HE[88] || qq[HE[58]] !== HE[88];) QE(qq[HE[4]] = (qq[-HE[87]] ? qq[-HE[87]].val : HE[2]) + (qq[HE[58]] ? qq[HE[58]].val : HE[2]) + qq[HE[13]], qq[HE[13]] = Math.floor(qq[HE[4]] / HE[51]), qq[HE[89]].next = new Eq(qq[HE[4]] % HE[51]), qq[HE[89]] = qq[HE[89]].next, qq[-HE[87]] = qq[-HE[87]] ? qq[-HE[87]].next : HE[88], qq[HE[58]] = qq[HE[58]] ? qq[HE[58]].next : HE[88]);
              return qq[HE[13]] && (qq[HE[89]].next = new Eq(qq[HE[13]])), qq[HE[65]].next
            }, console.log(qq[-HE[22]]))
          }
          throw Yq(HE[35]) + "t" in PE && xq(), new Error(gq)
        }
        const Oq = new Uint8Array(Eq[HE[0]][Yq(HE[31])](cE));
        AE(lq(Eq[HE[2]]), Eq[HE[0]][Yq(HE[31])](HE[2], cE), HE[0], Oq);
        const mq = new(lE[HE[9]][Yq(165) + HE[47]])({
          [Yq(166)]: HE[90]
        });
        if (mq[Yq(HE[40])](Oq), mq[Yq(168)] || !mq[Yq(169)]) throw new Error(gq);
        return mq[Yq(170)]
      })
    })();
    var yE = gq(37025),
      tE = gq(37030);

    function rE(qq) {
      return Oq.IN.from(Uint8Array.from(qq))
    }

    function vE(qq) {
      return Array.from(qq)
    }

    function hE(qq, Eq) {
      return {
        [qq]: {
          x: Eq
        }
      }
    }

    function nE(qq) {
      if (null === qq || "object" !== typeof qq || Array.isArray(qq)) return qq;
      const Eq = Object.keys(qq);
      if (1 !== Eq.length) return qq;
      const gq = qq[Eq[0]];
      return null !== gq && "object" === typeof gq && !Array.isArray(gq) && "x" in gq ? gq.x : qq
    }

    function bE(qq, Eq) {
      return void 0 === Eq ? null : Aq.has(qq) ? null === Eq ? null : JSON.stringify(Eq) : Eq
    }

    function iE(qq, Eq) {
      return null === Eq && Aq.has(qq) ? null : "string" === typeof Eq && Aq.has(qq) ? JSON.parse(Eq) : Eq
    }

    function ZE(qq, Eq, gq) {
      return (0, lq.H)(gq) ? null : hE(qq, bE(Eq, gq))
    }

    function fE(qq, Eq) {
      return (0, lq.H)(Eq) ? null : iE(qq, nE(Eq))
    }

    function ME(qq) {
      const Eq = {};
      for (const gq in qq) {
        const Yq = qq[gq];
        Eq[gq] = void 0 === Yq ? null : Yq
      }
      return Eq
    }

    function TE(qq) {
      const Eq = {};
      for (const gq in qq) {
        const Yq = qq[gq];
        null !== Yq && void 0 !== Yq && (Eq[gq] = Yq)
      }
      return Eq
    }

    function zE(qq, Eq) {
      return Object.prototype.hasOwnProperty.call(qq, Eq)
    }

    function SE(qq, Eq) {
      const gq = {};
      for (const Yq in qq) {
        const lq = qq[Yq];
        gq[Yq] = Eq(lq)
      }
      return gq
    }

    function pE(qq, Eq, gq) {
      const Yq = [];
      for (let lq = 0; lq < Eq.length; lq++) {
        const Oq = Eq[lq];
        zE(qq, Oq) && Yq.push({
          i: lq,
          v: gq(Oq, qq[Oq])
        })
      }
      return Yq
    }

    function GE(qq, Eq, gq) {
      const Yq = {};
      for (const lq of qq) {
        const qq = Eq[lq.i];
        void 0 !== qq ? Yq[qq] = gq(qq, lq.v) : console.error(`Unknown Partial field index ${lq.i}`)
      }
      return Yq
    }

    function LE(qq, Eq) {
      return (0, lq.H)(Eq) ? null : "jR" === qq ? function(qq) {
        return hE(aq, pE(qq, tE.x, ((qq, Eq) => ZE(Tq[qq], qq, Eq))))
      }(Eq) : ZE(Mq[qq], qq, Eq)
    }

    function JE(qq, Eq) {
      return (0, lq.H)(Eq) ? null : "jR" === qq ? function(qq) {
        return (0, lq.H)(qq) ? null : GE(qq, tE.x, fE)
      }(nE(Eq)) : fE(qq, Eq)
    }

    function kE(qq) {
      const {
        type: Eq,
        ...gq
      } = qq, Yq = {};
      for (const lq in gq) {
        const qq = gq[lq];
        Yq[lq] = bE(lq, qq)
      }
      if ("chunkAdded" === Eq || "chunkRemoved" === Eq) Yq.rle = rE(Yq.rle);
      else if ("playSound" === Eq) {
        const qq = Yq.eE;
        Yq.eE = (0, lq.H)(qq) ? null : ME(qq)
      } else if ("customKillfeed" === Eq) {
        var Oq, mq;
        Yq.killer = ME(null !== (Oq = Yq.killer) && void 0 !== Oq ? Oq : {}), Yq.victim = ME(null !== (mq = Yq.victim) && void 0 !== mq ? mq : {})
      }
      return {
        [Eq]: Yq
      }
    }

    function RE(qq) {
      const Eq = Object.keys(qq)[0],
        gq = qq[Eq],
        Yq = {};
      for (const lq in gq) {
        const qq = gq[lq];
        Yq[lq] = iE(lq, qq)
      }
      if ("chunkAdded" === Eq || "chunkRemoved" === Eq) Yq.rle = vE(Yq.rle);
      else if ("playSound" === Eq) {
        const qq = Yq.eE;
        Yq.eE = (0, lq.H)(qq) ? null : TE(qq)
      } else if ("customKillfeed" === Eq) {
        var Oq, mq;
        Yq.killer = TE(null !== (Oq = Yq.killer) && void 0 !== Oq ? Oq : {}), Yq.victim = TE(null !== (mq = Yq.victim) && void 0 !== mq ? mq : {})
      }
      return {
        type: Eq,
        ...Yq
      }
    }

    function UE(qq) {
      var Eq, gq;
      return (0, lq.H)(qq) ? null : {
        name: qq.name,
        amount: null !== (Eq = qq.amount) && void 0 !== Eq ? Eq : null,
        attributes: JSON.stringify(null !== (gq = qq.attributes) && void 0 !== gq ? gq : {})
      }
    }

    function FE(qq) {
      if ((0, lq.H)(qq)) return null;
      const Eq = qq;
      return {
        name: Eq.name,
        amount: Eq.amount,
        attributes: JSON.parse(Eq.attributes)
      }
    }

    function sE(qq) {
      if ((0, lq.H)(qq)) return null;
      return {
        fullSlotsArray: Array.isArray(qq.slots),
        entries: pE(qq, tE.k, ((qq, Eq) => {
          if ((0, lq.H)(Eq)) return null;
          if ("slots" === qq) {
            const qq = Array.isArray(Eq) ? function(qq) {
              const Eq = {};
              for (let gq = 0; gq < qq.length; gq++) Eq[gq] = qq[gq];
              return Eq
            }(Eq) : Eq;
            return hE(nq, function(qq) {
              const Eq = {};
              for (const gq in qq) {
                const Yq = qq[gq];
                Eq[gq] = UE(Yq)
              }
              return Eq
            }(qq))
          }
          return hE(hq, Eq)
        }))
      }
    }

    function XE(qq) {
      if ((0, lq.H)(qq)) return;
      const Eq = qq.fullSlotsArray;
      return GE(qq.entries, tE.k, ((qq, gq) => {
        if ((0, lq.H)(gq)) return null;
        if ("slots" === qq) {
          const qq = function(qq) {
            const Eq = {};
            for (const gq in qq) {
              const Yq = qq[gq];
              Eq[Number(gq)] = FE(Yq)
            }
            return Eq
          }(nE(gq));
          return Eq ? function(qq) {
            const Eq = [];
            for (let gq = 0; gq < lq.o; gq++) Eq.push(gq in qq ? qq[gq] : null);
            return Eq
          }(qq) : qq
        }
        return nE(gq)
      }))
    }

    function wE(qq) {
      return {
        entities: SE(qq.entities, (qq => pE(qq, tE.j, LE))),
        items: SE(qq.items, (qq => pE(qq, tE.p, ((qq, Eq) => ZE(zq[qq], qq, Eq))))),
        camera: qq.camera,
        hotbar: sE(qq.hotbar),
        playerHud: (0, lq.H)(qq.playerHud) ? null : pE(qq.playerHud, tE.t, ((qq, Eq) => (0, lq.H)(Eq) ? null : function(qq, Eq) {
          return {
            [qq]: Eq
          }
        }("double", Eq))),
        effects: (0, lq.H)(qq.effects) ? null : (0, yE.i)(qq.effects),
        uiElements: pE(qq.uiElements, tE.A, ((qq, Eq) => (0, lq.H)(Eq) ? null : JSON.stringify(Eq))),
        environment: pE(qq.environment, tE.v, ((qq, Eq) => ZE(Sq[qq], qq, Eq))),
        structuralEvents: qq.structuralEvents.map(kE),
        ephemeralEvents: qq.ephemeralEvents.map(kE)
      }
    }

    function KE(qq) {
      var Eq;
      const gq = {
          entities: SE(qq.entities, (qq => {
            const Eq = GE(qq, tE.j, JE),
              gq = Eq.type ? (0, Yq.s)(Eq.type) : null;
            return gq && (Eq.type = "Mesh", Eq.meshKind = gq.meshKind, Eq.meshOpts = gq.meshOpts), Eq
          })),
          items: SE(qq.items, (qq => GE(qq, tE.p, fE))),
          camera: {
            ...qq.camera,
            charging: null !== (Eq = qq.camera.charging) && void 0 !== Eq && Eq
          },
          uiElements: GE(qq.uiElements, tE.A, ((qq, Eq) => "string" === typeof Eq ? JSON.parse(Eq) : Eq)),
          environment: GE(qq.environment, tE.v, fE),
          structuralEvents: qq.structuralEvents.map((qq => {
            const Eq = RE(qq);
            return "xJ" === Eq.type ? (Eq.fromBlockData ??= null, Eq.toBlockData ??= null) : "chunkAdded" !== Eq.type && "chunkRemoved" !== Eq.type || (Eq.sharedBlockData ??= []), Eq
          })),
          ephemeralEvents: qq.ephemeralEvents.map((qq => RE(qq)))
        },
        Oq = XE(qq.hotbar);
      return void 0 !== Oq && (gq.hotbar = Oq), (0, lq.H)(qq.playerHud) || (gq.playerHud = GE(qq.playerHud, tE.t, ((qq, Eq) => (0, lq.H)(Eq) ? null : function(qq) {
        if (null === qq || "object" !== typeof qq || Array.isArray(qq)) return qq;
        const Eq = Object.keys(qq);
        return 1 !== Eq.length || "int" !== Eq[0] && "double" !== Eq[0] ? qq : qq[Eq[0]]
      }(Eq)))), (0, lq.H)(qq.effects) || (gq.effects = (0, yE.e)(qq.effects)), gq
    }
    let CE, IE;
    var eE, DE, qg, Eg, gg, Yg, lg, Og, mg, xg, Ag;
    const cg = [2, 0, 1, 29, 115, "a", 9, "g", 5, "f", 6, 8, 255, "length", 124, 3, "e", "undefined", 180, 63, "fromCodePoint", 7, 12, "push", "b", 91, "h", 60, 245, 8191, 88, 13, 14, 89, 64, "c", "i", 57, 176, 42, void 0, 159, 4, 52, 1023, 90, 65536, "d", 10, 55296, 56320, 165, 79, 154, 128, 31, 15, 18, 148, 54, 213, 192, 82, 224, 240, 102, !1, 81, 68, 71, 172, 217, "join", 223, 16, "A", 512, 123, 127, 212, 243, 141, 56319, 57343, 65535, 100, 32, 24, 11, 19, 117, 26, 187, 145, 142, 51, 173, null, 70, 36, 50, ".", 215, 150, 59, 33554432, 67108864, 156, 227, "IN", 28, 34, 106, 62, 110, 38, 35, !0, 234, 133, 242, 149, 185, 92, 84, "-v", 37, 138, ")", "l)"];

    function ug(...qq) {
      return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
        for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = '}nDAgSqup4t[*F7_Or92`sLd=@!>0a~?&mI+BQ)Y6fx3CMXlv]Nw#z.1%P:j{"UJ(EkhTV;8^W5RiH,G/y$<Kcbo|Ze', qq[cg[0]] = "" + (qq[cg[1]] || ""), qq[-cg[4]] = qq[cg[0]].length, qq[-cg[10]] = [], qq[cg[8]] = cg[1], qq[cg[9]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[3]] = cg[1]; qq[cg[3]] < qq[-cg[4]]; qq[cg[3]]++)
          if (qq[cg[6]] = qq[cg[5]].indexOf(qq[cg[0]][qq[cg[3]]]), qq[cg[6]] !== -cg[2])
            if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[cg[6]];
            else {
              Vg(qq[cg[7]] += qq[cg[6]] * cg[25], qq[cg[8]] |= qq[cg[7]] << qq[cg[9]], qq[cg[9]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
              do {
                Vg(qq[-cg[10]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[cg[9]] -= cg[11])
              } while (qq[cg[9]] > cg[21]);
              qq[cg[7]] = -cg[2]
            } return qq[cg[7]] > -cg[2] && qq[-cg[10]].push((qq[cg[8]] | qq[cg[7]] << qq[cg[9]]) & cg[12]), Bg(qq[-cg[10]])
      }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
    }

    function Bg(qq) {
      return typeof Eg !== cg[17] && Eg ? (new Eg).decode(new gg(qq)) : typeof Yg !== cg[17] && Yg ? Yg.from(qq).toString("utf-8") : mg(qq)
    }

    function Wg(...qq) {
      if (qq[cg[13]] = cg[15], qq[cg[1]] === ug(cg[45]) + cg[75]) return qq[cg[2]] + qq[cg[0]]
    }

    function Ng() {}

    function ag(qq, Eq, gq, Yq = {}, lq, Oq, mq, xq) {
      if (Oq || (Oq = function(...qq) {
          return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = lq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
        }), lq || (lq = function(qq) {
          var Eq, gq, Yq, lq, Oq, mq, xq;
          for (Vg(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = cg[1], Oq = cg[1], mq = -cg[2]), xq = cg[1]; xq < gq; xq++) {
            var Aq = 'e[NVjAfKPOnhBrS1wYI_cF2G!k,E7%#qDdx0Rv:U<HJuX6Wbsgm+MZ=l;a?iy9^L@*8>.)zCo~t]T|5`}4{(pQ/3$"&'.indexOf(Eq[xq]);
            if (Aq !== -cg[2])
              if (mq < cg[1]) mq = Aq;
              else {
                Vg(mq += Aq * cg[25], lq |= mq << Oq, Oq += (mq & cg[29]) > cg[30] ? cg[31] : cg[32]);
                do {
                  Vg(Yq.push(lq & cg[12]), lq >>= cg[11], Oq -= cg[11])
                } while (Oq > cg[21]);
                mq = -cg[2]
              }
          }
          return mq > -cg[2] && Yq.push((lq | mq << Oq) & cg[12]), Bg(Yq)
        }), Vg(mq = void 0, xq = {
          [ug(108)]: function(...qq) {
            function Eq(...qq) {
              return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
                for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = 'rV_41M+NYt@ne)XCb"`l?5&q9$xpF8>dwj~s%*{c/#Gmo]agEDz=};vWu2,<L3JT|7IHhfyi(Q.B!0^SKPA6ZUkO[:R', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[cg[65]] = qq[cg[24]].length, qq[cg[42]] = [], qq[cg[70]] = cg[1], qq[-cg[71]] = cg[1], qq[-cg[69]] = -cg[2]), qq[cg[26]] = cg[1]; qq[cg[26]] < qq[cg[65]]; qq[cg[26]]++)
                  if (qq[-cg[68]] = qq[cg[5]].indexOf(qq[cg[24]][qq[cg[26]]]), qq[-cg[68]] !== -cg[2])
                    if (qq[-cg[69]] < cg[1]) qq[-cg[69]] = qq[-cg[68]];
                    else {
                      Vg(qq[-cg[69]] += qq[-cg[68]] * cg[25], qq[cg[70]] |= qq[-cg[69]] << qq[-cg[71]], qq[-cg[71]] += (qq[-cg[69]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                      do {
                        Vg(qq[cg[42]].push(qq[cg[70]] & cg[12]), qq[cg[70]] >>= cg[11], qq[-cg[71]] -= cg[11])
                      } while (qq[-cg[71]] > cg[21]);
                      qq[-cg[69]] = -cg[2]
                    } return qq[-cg[69]] > -cg[2] && qq[cg[42]].push((qq[cg[70]] | qq[-cg[69]] << qq[-cg[71]]) & cg[12]), Bg(qq[cg[42]])
              }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
            }
            Vg([
              [qq[cg[5]], qq[cg[2]], qq[cg[35]]], qq[cg[15]]
            ] = Ag, console[Eq(109)]("" + qq[cg[5]][cg[72]](cg[101]) + (Eq(cg[114]) + Eq(111)) + qq[cg[35]][Eq(112) + "me"] + Eq(113) + qq[cg[2]]))
          }
        }), Eq === Oq(114) + Oq(cg[4])) {
        function Aq(...qq) {
          Vg(qq[cg[13]] = cg[1], qq[-cg[88]] = function(...qq) {
            function Eq(qq, Eq) {
              return mq(Yq(xq(qq), xq(Eq)))
            }

            function gq(qq, Eq, gq) {
              return function(...qq) {
                var Eq, gq, Yq, lq;
                for (Vg(qq[cg[13]] = cg[0], qq[cg[5]] = qq[cg[2]].length, qq[cg[24]] = Array()), qq[cg[42]] = Array(Math.ceil(qq[cg[1]].length / cg[0])), Eq = cg[1]; Eq < qq[cg[42]].length; Eq++) qq[cg[42]][Eq] = qq[cg[1]].charCodeAt(Eq * cg[0]) << cg[11] | qq[cg[1]].charCodeAt(Eq * cg[0] + cg[2]);
                for (; qq[cg[42]].length > cg[1];) {
                  for (Vg(lq = Array(), Yq = cg[1]), Eq = cg[1]; Eq < qq[cg[42]].length; Eq++) Vg(Yq = (Yq << cg[74]) + qq[cg[42]][Eq], gq = Math.floor(Yq / qq[cg[5]]), Yq -= gq * qq[cg[5]]), (lq.length > cg[1] || gq > cg[1]) && (lq[lq.length] = gq);
                  Vg(qq[cg[24]][qq[cg[24]].length] = Yq, qq[cg[42]] = lq)
                }
                for (qq[cg[47]] = "", Eq = qq[cg[24]].length - cg[2]; Eq >= cg[1]; Eq--) qq[cg[47]] += qq[cg[2]].charAt(qq[cg[24]][Eq]);
                for (qq[cg[10]] = Math.ceil(qq[cg[1]].length * cg[11] / (Math.log(qq[cg[2]].length) / Math.log(cg[0]))), Eq = qq[cg[47]].length; Eq < qq[cg[10]]; Eq++) qq[cg[47]] = qq[cg[2]][cg[1]] + qq[cg[47]];
                return qq[cg[47]]
              }(Yq(xq(qq), xq(Eq)), gq)
            }

            function Yq(...qq) {
              Vg(qq[cg[13]] = cg[0], qq[cg[0]] = Aq(qq[cg[1]])), qq[cg[0]].length > cg[74] && (qq[cg[0]] = Hq(qq[cg[0]], qq[cg[1]].length * cg[11]));
              var Eq = Array(cg[74]),
                gq = Array(cg[74]);
              for (qq[cg[24]] = cg[1]; qq[cg[24]] < cg[74]; qq[cg[24]]++) Vg(Eq[qq[cg[24]]] = 909522486 ^ qq[cg[0]][qq[cg[24]]], gq[qq[cg[24]]] = 1549556828 ^ qq[cg[0]][qq[cg[24]]]);
              return qq[cg[42]] = Hq(Eq.concat(Aq(qq[cg[2]])), cg[76] + qq[cg[2]].length * cg[11]), cq(Hq(gq.concat(qq[cg[42]]), Wg(Oq(122) + cg[75], cg[76], 256)))
            }

            function lq(...Eq) {
              function Yq(...qq) {
                return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(qq) {
                  var Eq, gq, Yq, lq, Oq, mq, xq;
                  for (Vg(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = cg[1], Oq = cg[1], mq = -cg[2]), xq = cg[1]; xq < gq; xq++) {
                    var Aq = ';PYqCXjVAJI]z1,G"|d+eKu`rM>oUD/7WERg{SvF=[O^&w4095l2sfhpx#<$N~%6kmb(}cB!tZH_i@aQ3nLT):y?*8.'.indexOf(Eq[xq]);
                    if (Aq !== -cg[2])
                      if (mq < cg[1]) mq = Aq;
                      else {
                        Vg(mq += Aq * cg[25], lq |= mq << Oq, Oq += (mq & cg[29]) > cg[30] ? cg[31] : cg[32]);
                        do {
                          Vg(Yq.push(lq & cg[12]), lq >>= cg[11], Oq -= cg[11])
                        } while (Oq > cg[21]);
                        mq = -cg[2]
                      }
                  }
                  return mq > -cg[2] && Yq.push((lq | mq << Oq) & cg[12]), Bg(Yq)
                }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
              }
              Eq[cg[13]] = cg[2];
              try {
                qq[-cg[73]]
              } catch (gq) {
                qq[-cg[73]] = cg[1]
              }
              for (Vg(Eq[cg[5]] = qq[-cg[73]] ? Yq(cg[77]) + Yq(cg[14]) + Yq(125) : Yq(cg[77]) + Yq(126) + Yq(cg[78]), Eq[cg[0]] = "", Eq[cg[15]] = cg[40]), Eq[cg[47]] = cg[1]; Eq[cg[47]] < Eq[cg[1]].length; Eq[cg[47]]++) Vg(Eq[cg[15]] = Eq[cg[1]].charCodeAt(Eq[cg[47]]), Eq[cg[0]] += Eq[cg[5]].charAt(Eq[cg[15]] >>> cg[42] & cg[56]) + Eq[cg[5]].charAt(Eq[cg[15]] & cg[56]));
              return Eq[cg[0]]
            }

            function mq(...Eq) {
              function Yq(...qq) {
                return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
                  for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = 'Q2gArYk(f`)_wO&@%/GL>US9!vTylMtIW=*HhpPd8q[oE3:#Zx7$+n1az^VF}4~juN{is<,D|RBJ5Km.06"C?;X]cbe', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[cg[15]] = qq[cg[24]].length, qq[cg[42]] = [], qq[cg[8]] = cg[1], qq[cg[10]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[cg[15]]; qq[cg[11]]++)
                    if (qq[-cg[79]] = qq[cg[5]].indexOf(qq[cg[24]][qq[cg[11]]]), qq[-cg[79]] !== -cg[2])
                      if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[-cg[79]];
                      else {
                        Vg(qq[cg[7]] += qq[-cg[79]] * cg[25], qq[cg[8]] |= qq[cg[7]] << qq[cg[10]], qq[cg[10]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                        do {
                          Vg(qq[cg[42]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[cg[10]] -= cg[11])
                        } while (qq[cg[10]] > cg[21]);
                        qq[cg[7]] = -cg[2]
                      } return qq[cg[7]] > -cg[2] && qq[cg[42]].push((qq[cg[8]] | qq[cg[7]] << qq[cg[10]]) & cg[12]), Bg(qq[cg[42]])
                }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
              }
              Eq[cg[13]] = cg[2];
              try {
                qq[cg[35]]
              } catch (gq) {
                qq[cg[35]] = ""
              }
              for (Vg(Eq[cg[2]] = Yq(cg[54]) + Yq(129) + Yq(130) + Yq(131) + Yq(132) + Yq(cg[119]), Eq[-cg[81]] = "", Eq[-cg[80]] = Eq[cg[1]].length), Eq[cg[47]] = cg[1]; Eq[cg[47]] < Eq[-cg[80]]; Eq[cg[47]] += cg[15])
                for (Eq[cg[16]] = Eq[cg[1]].charCodeAt(Eq[cg[47]]) << cg[74] | (Eq[cg[47]] + cg[2] < Eq[-cg[80]] ? Eq[cg[1]].charCodeAt(Eq[cg[47]] + cg[2]) << cg[11] : cg[1]) | (Eq[cg[47]] + cg[0] < Eq[-cg[80]] ? Eq[cg[1]].charCodeAt(Eq[cg[47]] + cg[0]) : cg[1]), Eq[cg[51]] = cg[1]; Eq[cg[51]] < cg[42]; Eq[cg[51]]++) Eq[cg[47]] * cg[11] + Eq[cg[51]] * cg[10] > Eq[cg[1]].length * cg[11] ? Eq[-cg[81]] += qq[cg[35]] : Eq[-cg[81]] += Eq[cg[2]].charAt(Eq[cg[16]] >>> cg[10] * (cg[15] - Eq[cg[51]]) & cg[19]);
              return Eq[-cg[81]]
            }

            function xq(qq) {
              var Eq, gq, Yq, lq = "";
              for (Eq = -cg[2]; ++Eq < qq.length;) Vg(gq = qq.charCodeAt(Eq), Yq = Eq + cg[2] < qq.length ? qq.charCodeAt(Eq + cg[2]) : cg[1]), cg[49] <= gq && gq <= cg[82] && cg[50] <= Yq && Yq <= cg[83] && Vg(gq = cg[46] + ((gq & cg[44]) << cg[48]) + (Yq & cg[44]), Eq++), gq <= cg[78] ? lq += String.fromCharCode(gq) : gq <= 2047 ? lq += String.fromCharCode(cg[61] | gq >>> cg[10] & cg[55], cg[54] | gq & cg[19]) : gq <= cg[84] ? lq += String.fromCharCode(cg[63] | gq >>> cg[22] & cg[56], cg[54] | gq >>> cg[10] & cg[19], cg[54] | gq & cg[19]) : gq <= 2097151 && (lq += String.fromCharCode(cg[64] | gq >>> cg[57] & cg[21], cg[54] | gq >>> cg[22] & cg[19], cg[54] | gq >>> cg[10] & cg[19], cg[54] | gq & cg[19]));
              return lq
            }

            function Aq(...qq) {
              for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = Array(qq[cg[1]].length >> cg[0])), qq[cg[0]] = cg[1]; qq[cg[0]] < qq[cg[5]].length; qq[cg[0]]++) qq[cg[5]][qq[cg[0]]] = cg[1];
              for (qq[cg[0]] = cg[1]; qq[cg[0]] < qq[cg[1]].length * cg[11]; qq[cg[0]] += cg[11]) qq[cg[5]][qq[cg[0]] >> cg[8]] |= (qq[cg[1]].charCodeAt(qq[cg[0]] / cg[11]) & cg[12]) << cg[87] - qq[cg[0]] % cg[86];
              return qq[cg[5]]
            }

            function cq(...qq) {
              for (Vg(qq[cg[13]] = cg[2], qq[cg[2]] = ""), qq[cg[24]] = cg[1]; qq[cg[24]] < qq[cg[1]].length * cg[86]; qq[cg[24]] += cg[11]) qq[cg[2]] += String.fromCharCode(qq[cg[1]][qq[cg[24]] >> cg[8]] >>> cg[87] - qq[cg[24]] % cg[86] & cg[12]);
              return qq[cg[2]]
            }

            function uq(...qq) {
              return qq[cg[13]] = cg[0], qq[cg[1]] >>> qq[cg[2]] | qq[cg[1]] << cg[86] - qq[cg[2]]
            }

            function Bq(...qq) {
              return qq[cg[13]] = cg[0], qq[cg[1]] >>> qq[cg[2]]
            }

            function Wq(...qq) {
              return qq[cg[13]] = cg[15], qq[cg[1]] & qq[cg[2]] ^ ~qq[cg[1]] & qq[cg[0]]
            }

            function Nq(...qq) {
              return qq[cg[13]] = cg[15], qq[cg[1]] & qq[cg[2]] ^ qq[cg[1]] & qq[cg[0]] ^ qq[cg[2]] & qq[cg[0]]
            }

            function aq(qq) {
              return uq(qq, cg[0]) ^ uq(qq, cg[31]) ^ uq(qq, 22)
            }

            function Vq(...qq) {
              return qq[cg[13]] = cg[2], uq(qq[cg[1]], cg[10]) ^ uq(qq[cg[1]], cg[88]) ^ uq(qq[cg[1]], 25)
            }

            function dq(qq) {
              return uq(qq, cg[21]) ^ uq(qq, cg[57]) ^ Bq(qq, cg[15])
            }

            function jq(...qq) {
              return qq[cg[13]] = cg[2], uq(qq[cg[1]], 17) ^ uq(qq[cg[1]], cg[89]) ^ Bq(qq[cg[1]], cg[48])
            }

            function Hq(Eq, gq) {
              var Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Hq, Pq, Qq, yq, tq = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
              for (Yq = new Array(cg[34]), Vg(Eq[gq >> cg[8]] |= cg[54] << cg[87] - gq % cg[86], Eq[(gq + cg[34] >> cg[6] << cg[42]) + cg[56]] = gq), Hq = cg[1]; Hq < Eq.length; Hq += cg[74]) {
                for (Vg(lq = tq[cg[1]], Oq = tq[cg[2]], mq = tq[cg[0]], xq = tq[cg[15]], Aq = tq[cg[42]], cq = tq[cg[8]], uq = tq[cg[10]], Bq = tq[cg[21]]), Pq = cg[1]; Pq < cg[34]; Pq++) Vg(Pq < cg[74] ? Yq[Pq] = Eq[Pq + Hq] : Yq[Pq] = oq(oq(oq(jq(Yq[Pq - cg[0]]), Yq[Pq - cg[21]]), dq(Yq[Pq - cg[56]])), Yq[Pq - cg[74]]), Qq = oq(oq(oq(oq(Bq, Vq(Aq)), Wq(Aq, cq, uq)), qq[cg[47]][Pq]), Yq[Pq]), yq = oq(aq(lq), Nq(lq, Oq, mq)), Bq = uq, uq = cq, cq = Aq, Aq = oq(xq, Qq), xq = mq, mq = Oq, Oq = lq, lq = oq(Qq, yq));
                Vg(tq[cg[1]] = oq(lq, tq[cg[1]]), tq[cg[2]] = oq(Oq, tq[cg[2]]), tq[cg[0]] = oq(mq, tq[cg[0]]), tq[cg[15]] = oq(xq, tq[cg[15]]), tq[cg[42]] = oq(Aq, tq[cg[42]]), tq[cg[8]] = oq(cq, tq[cg[8]]), tq[cg[10]] = oq(uq, tq[cg[10]]), tq[cg[21]] = oq(Bq, tq[cg[21]]))
              }
              return tq
            }

            function oq(qq, Eq) {
              var gq = (qq & cg[84]) + (Eq & cg[84]);
              return (qq >> cg[74]) + (Eq >> cg[74]) + (gq >> cg[74]) << cg[74] | gq & cg[84]
            }
            return Vg(qq[cg[13]] = cg[1], qq[-cg[73]] = cg[1], qq[cg[35]] = ""), qq[cg[47]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...qq) {
                return qq[cg[13]] = cg[2], lq(function(qq) {
                  return cq(Hq(Aq(qq), qq.length * cg[11]))
                }(xq(qq[cg[1]])))
              },
              b64: Eq,
              any: gq,
              hex_hmac: function(...qq) {
                return qq[cg[13]] = cg[0], lq(Yq(xq(qq[cg[1]]), xq(qq[cg[2]])))
              },
              b64_hmac: Eq,
              any_hmac: gq
            }
          }(), console.log(qq[-cg[88]]))
        }
        Oq(116) in Ng && Aq(), Ag = []
      }
      if (Eq === Oq(134) + Oq(135)) {
        function cq() {
          var Eq = function(...Eq) {
            return function(...qq) {
              return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(qq) {
                var Eq, gq, Yq, lq, Oq, mq, xq;
                for (Vg(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = cg[1], Oq = cg[1], mq = -cg[2]), xq = cg[1]; xq < gq; xq++) {
                  var Aq = 'CNZ8u@$}zn3&vV_!W*~/4Dp=wP5rh#6^(FJB,fsaY|E1l[j"279oA%<`Mi>G?X:L{;Ux]+c0ORTtI.g)KbeHQSmkqdy'.indexOf(Eq[xq]);
                  if (Aq !== -cg[2])
                    if (mq < cg[1]) mq = Aq;
                    else {
                      Vg(mq += Aq * cg[25], lq |= mq << Oq, Oq += (mq & cg[29]) > cg[30] ? cg[31] : cg[32]);
                      do {
                        Vg(Yq.push(lq & cg[12]), lq >>= cg[11], Oq -= cg[11])
                      } while (Oq > cg[21]);
                      mq = -cg[2]
                    }
                }
                return mq > -cg[2] && Yq.push((lq | mq << Oq) & cg[12]), Bg(Yq)
              }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
            }(136) in Ng && function(...qq) {
              Vg(qq[cg[13]] = cg[1], qq[cg[24]] = function(...qq) {
                for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = cg[1], qq[cg[0]] = {}, qq[cg[15]] = cg[1], qq[cg[42]] = cg[1], qq[cg[91]] = cg[1], qq[cg[10]] = qq[cg[1]].length), qq[cg[90]] = cg[1]; qq[cg[90]] < qq[cg[10]]; qq[cg[90]]++) {
                  for (Vg(qq[cg[0]] = {}, qq[cg[15]] = cg[1], qq[cg[42]] = cg[2]), qq[cg[11]] = qq[cg[90]] + cg[2]; qq[cg[11]] < qq[cg[10]]; qq[cg[11]]++) qq[cg[1]][qq[cg[90]]].x !== qq[cg[1]][qq[cg[11]]].x || qq[cg[1]][qq[cg[90]]].y !== qq[cg[1]][qq[cg[11]]].y ? (qq[cg[1]][qq[cg[90]]].y === qq[cg[1]][qq[cg[11]]].y ? qq[cg[91]] = Number.MAX_SAFE_INTEGER : qq[cg[91]] = (qq[cg[1]][qq[cg[90]]].x - qq[cg[1]][qq[cg[11]]].x) / (qq[cg[1]][qq[cg[90]]].y - qq[cg[1]][qq[cg[11]]].y), qq[cg[0]][qq[cg[91]]] || (qq[cg[0]][qq[cg[91]]] = cg[1]), Vg(qq[cg[0]][qq[cg[91]]]++, qq[cg[15]] = Math.max(qq[cg[15]], qq[cg[0]][qq[cg[91]]]))) : qq[cg[42]]++;
                  Vg(qq[cg[15]] += qq[cg[42]], qq[cg[5]] = Math.max(qq[cg[5]], qq[cg[15]]))
                }
                return qq[cg[5]]
              }, console.log(qq[cg[24]]))
            }(), Ag = Eq, xq[qq].apply(this)
          };
          if (Yq[qq]) {
            function gq(...qq) {
              for (Vg(qq[cg[13]] = cg[2], qq[-cg[92]] = '*>v/`:[<=(cGA6tWVOfR9?sZCyIeMqEu@,7Fw8!pH"a14U|kK5JSm;]PdT#gBoj&}D_x0izXnLQ^2.bN$Y~%h3l){+r', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[-cg[28]] = qq[cg[24]].length, qq[-cg[93]] = [], qq[cg[16]] = cg[1], qq[cg[9]] = cg[1], qq[cg[21]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[-cg[28]]; qq[cg[11]]++)
                if (qq[cg[36]] = qq[-cg[92]].indexOf(qq[cg[24]][qq[cg[11]]]), qq[cg[36]] !== -cg[2])
                  if (qq[cg[21]] < cg[1]) qq[cg[21]] = qq[cg[36]];
                  else {
                    Vg(qq[cg[21]] += qq[cg[36]] * cg[25], qq[cg[16]] |= qq[cg[21]] << qq[cg[9]], qq[cg[9]] += (qq[cg[21]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                    do {
                      Vg(qq[-cg[93]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[9]] -= cg[11])
                    } while (qq[cg[9]] > cg[21]);
                    qq[cg[21]] = -cg[2]
                  } return qq[cg[21]] > -cg[2] && qq[-cg[93]].push((qq[cg[16]] | qq[cg[21]] << qq[cg[9]]) & cg[12]), Bg(qq[-cg[93]])
            }

            function lq(...qq) {
              return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = gq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
            }

            function Oq(...qq) {
              qq[cg[13]] = cg[1]
            }
            lq(137) in Ng && Oq()
          }
          return Eq
        }
        mq = xg[qq] || (xg[qq] = cq())
      } else {
        function uq(...qq) {
          for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = '8z_#x|<!3}(:>4X$[ptEBc;^.+Lhba)~H@7yw=Y{Sv/jUiFN2G&5n,KRqgr%ADPfuCdeJ0QoWM9T]Ims6*ZOlV1?k`"', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[-cg[94]] = qq[cg[24]].length, qq[cg[47]] = [], qq[cg[95]] = cg[1], qq[cg[96]] = cg[1], qq[cg[21]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[-cg[94]]; qq[cg[11]]++)
            if (qq[cg[6]] = qq[cg[5]].indexOf(qq[cg[24]][qq[cg[11]]]), qq[cg[6]] !== -cg[2])
              if (qq[cg[21]] < cg[1]) qq[cg[21]] = qq[cg[6]];
              else {
                Vg(qq[cg[21]] += qq[cg[6]] * cg[25], qq[cg[95]] |= qq[cg[21]] << qq[cg[96]], qq[cg[96]] += (qq[cg[21]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                do {
                  Vg(qq[cg[47]].push(qq[cg[95]] & cg[12]), qq[cg[95]] >>= cg[11], qq[cg[96]] -= cg[11])
                } while (qq[cg[96]] > cg[21]);
                qq[cg[21]] = -cg[2]
              } return qq[cg[21]] > -cg[2] && qq[cg[47]].push((qq[cg[95]] | qq[cg[21]] << qq[cg[96]]) & cg[12]), Bg(qq[cg[47]])
        }

        function Bq(...qq) {
          return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = uq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
        }

        function Wq(...qq) {
          var Eq;
          Vg(qq[cg[13]] = cg[1], Eq = function(...qq) {
            Vg(qq[cg[13]] = cg[2], this.WB = qq[cg[1]], this.length = cg[1], this.map = {}, this.head = cg[97], this.tail = cg[97])
          }, Eq.prototype.get = function(...qq) {
            var Eq;
            return Vg(qq[cg[13]] = cg[2], Eq = this.map[qq[cg[1]]]), Eq ? (this.remove(Eq), this.insert(Eq.key, Eq.val), Eq.val) : -cg[2]
          }, Eq.prototype.put = function(qq, Eq) {
            this.map[qq] ? (this.remove(this.map[qq]), this.insert(qq, Eq)) : this.length === this.WB ? (this.remove(this.head), this.insert(qq, Eq)) : (this.insert(qq, Eq), this.length++)
          }, Eq.prototype.remove = function(...qq) {
            Vg(qq[cg[13]] = cg[2], qq[cg[2]] = qq[cg[1]].prev, qq[cg[24]] = qq[cg[1]].next), qq[cg[24]] && (qq[cg[24]].prev = qq[cg[2]]), qq[cg[2]] && (qq[cg[2]].next = qq[cg[24]]), this.head === qq[cg[1]] && (this.head = qq[cg[24]]), this.tail === qq[cg[1]] && (this.tail = qq[cg[2]]), delete this.map[qq[cg[1]].key]
          }, Eq.prototype.insert = function(...qq) {
            Vg(qq[cg[13]] = cg[0], qq[cg[5]] = new List(qq[cg[1]], qq[cg[2]]), this.tail ? (this.tail.next = qq[cg[5]], qq[cg[5]].prev = this.tail, this.tail = qq[cg[5]]) : (this.tail = qq[cg[5]], this.head = qq[cg[5]]), this.map[qq[cg[1]]] = qq[cg[5]])
          }, console.log(Eq))
        }
        Bq(cg[127]) + "n" in Ng && Wq(), mq = xq[qq]()
      }
      if (gq === Oq(139) + Oq(140)) {
        function Nq(...qq) {
          for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = '[dQlc7.xi94!qjv`^GVr2u/p#"3K0oR>,|Ln)f}8;w<sZmaO6$IJyUA=N5HPTebg?zB1(&tM%:hE~CX_@YWD]{S*F+k', qq[cg[0]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[0]].length, qq[cg[42]] = [], qq[cg[16]] = cg[1], qq[cg[9]] = cg[1], qq[cg[21]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[cg[35]]; qq[cg[11]]++)
            if (qq[cg[36]] = qq[cg[5]].indexOf(qq[cg[0]][qq[cg[11]]]), qq[cg[36]] !== -cg[2])
              if (qq[cg[21]] < cg[1]) qq[cg[21]] = qq[cg[36]];
              else {
                Vg(qq[cg[21]] += qq[cg[36]] * cg[25], qq[cg[16]] |= qq[cg[21]] << qq[cg[9]], qq[cg[9]] += (qq[cg[21]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                do {
                  Vg(qq[cg[42]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[9]] -= cg[11])
                } while (qq[cg[9]] > cg[21]);
                qq[cg[21]] = -cg[2]
              } return qq[cg[21]] > -cg[2] && qq[cg[42]].push((qq[cg[16]] | qq[cg[21]] << qq[cg[9]]) & cg[12]), Bg(qq[cg[42]])
        }

        function aq(...qq) {
          return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Nq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
        }

        function Vq(...qq) {
          qq[cg[13]] = cg[1]
        }
        return aq(cg[81]) + "D" in Ng && Vq(), {
          [aq(cg[94]) + aq(143)]: mq
        }
      } {
        function dq() {
          var qq, Eq, gq;
          Vg(qq = function(...Yq) {
            for (Yq[cg[13]] = cg[42], Yq[cg[74]] = Yq[cg[15]]; Yq[cg[74]] < Yq[cg[0]]; Yq[cg[74]]++) {
              if (Yq[cg[2]].length !== Yq[cg[74]]) return;
              for (Yq[-cg[99]] = cg[1]; Yq[-cg[99]] < Yq[cg[0]]; Yq[-cg[99]]++) gq(Yq[cg[2]], [Yq[cg[74]], Yq[-cg[99]]]) && (Vg(Yq[cg[2]].push([Yq[cg[74]], Yq[-cg[99]]]), qq(Yq[cg[1]], Yq[cg[2]], Yq[cg[0]], Yq[cg[74]] + cg[2])), Yq[cg[2]].length === Yq[cg[0]] && Yq[cg[1]].push(Eq(Yq[cg[2]])), Yq[cg[2]].pop())
            }
          }, Eq = function(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[cg[2]] = [], qq[-cg[53]] = qq[cg[1]].length), qq[-cg[100]] = cg[1]; qq[-cg[100]] < qq[-cg[53]]; qq[-cg[100]]++)
              for (qq[cg[2]][qq[-cg[100]]] = "", qq[cg[42]] = cg[1]; qq[cg[42]] < qq[-cg[53]]; qq[cg[42]]++) qq[cg[2]][qq[-cg[100]]] += qq[cg[1]][qq[-cg[100]]][cg[2]] === qq[cg[42]] ? "Q" : cg[101];
            return qq[cg[2]]
          }, gq = function(...qq) {
            for (Vg(qq[cg[13]] = cg[0], qq[-cg[102]] = qq[cg[1]].length), qq[cg[15]] = cg[1]; qq[cg[15]] < qq[-cg[102]]; qq[cg[15]]++) {
              if (qq[cg[1]][qq[cg[15]]][cg[1]] === qq[cg[2]][cg[1]] || qq[cg[1]][qq[cg[15]]][cg[2]] === qq[cg[2]][cg[2]]) return cg[66];
              if (Math.abs((qq[cg[1]][qq[cg[15]]][cg[1]] - qq[cg[2]][cg[1]]) / (qq[cg[1]][qq[cg[15]]][cg[2]] - qq[cg[2]][cg[2]])) === cg[2]) return cg[66]
            }
            return cg[117]
          }, console.log((function(...Eq) {
            return Vg(Eq[cg[13]] = cg[2], Eq[cg[98]] = []), (Eq[cg[1]] === cg[2] || Eq[cg[1]] >= cg[42]) && qq(Eq[cg[98]], [], Eq[cg[1]], cg[1]), Eq[cg[98]]
          })))
        }
        return Oq(144) + "2" in Ng && dq(), mq
      }
    }

    function Vg() {
      Vg = function() {}
    }
    Vg(eE = {}, DE = [",?7umW!=I_z#Qg", '6qo#UGe#eUatvjoadw*Hbcwf8:4"w:hQ*]5&6.BD', 'G;s?s8su)(j%k]B=w4)u)"f2CEz/N]YQm4;8sNU:,%#+d$IQ&.Hua+e*@U`An', "gk^4VBCD", "NA`ty155uFsVIFkr2w*aNTny~9<5XFjBXwI^WPi=79", "Q3Bae<}9m9@`l:/6_qa1L", "57_muBC:?9udh;4Y7{I&ec8a_JsEzg4YJvDSy1pX{7*:Vg{~y0O4", "oqYio#Y2k*E[j$&BVThp", "9J2&Q%nFkPLFE^fYq.)iA1|*Y:7Ep_yIorO4", '__&q$Uw2}*7"D@%0m*?0+,Jd}PSGu_X>l?fw4UEa{%&^qN!x1I8gGNwnj`_rn', "]qx^[b;X|rP[WBf?{!bg5{*:;2b@o!oI99+&{G(/AP]/{v1+aENwyi0#qF", "3`2^d,3l!`Kp~Qu@VT3^pG|#4EglIS", ").iNvKiqMjehmFy!u]5p?cB:+PN+[7(~/%z?B.F2R%&=Vg", "oWd4A^Zn", '3!SN#QQV(9}RP")Q1A7ib8/q<{F:UyrYlP)0]HjV<2bhs{B=g.p.UIfPL(Y', "48fwiix~Ms>", "@dpqjH;:D*", "+_k&@Pv:jUy;~D[@j.)#+.~D", "r{z5nz7Bx`H{/ly>P7jp@lRnGp17BA", 'wE,0C+7=lzC?1$X!Td/46J):U%"W_DH2$MSt', "q5.1|iMli%<aKA", "6Pkw4{7=r_A$=l2>wvdg", 'YP+t;^8RMj9wR7zISJ|]VVU=t7k+X";)<@dgwwt~c:w/A;R)T4"tAv}', 'UjYW{w&#Csr`V=|I?.g?a+]l^rl1NQ&~i%SiwRgp+P|n!"t@x3{zt{LpCr', "OPY~NK0B^:P", "H08iu5U=@rCv;V3Y?Q4~~/,:s(YrV{D=F8oW28B~I2s:9Si!78p.*", "%7M5j;p~ZUXWR7b+p!/4", "HTDHjI,=u", '[*4~&#):!`CUj$L6(WG4PX"+v_"J*8F', "VWgS4B5*|FtA5V*!.wa1B/KIlJwJj;a+g.SNLV]FE9", 'y0M5^B&Btj/[rBb008r&kz/6$P4OE^{x/``aI."Ji7CA3:<f46q#DvB=0r', ",T~4eP/6utG{*__>iILiL)@uA{#0R7k9bM?WvRC*~jIsK_s>[3|W^BUXJ_@", "8QO,jw!=q(K;A8O`w!9>*", "+PP.).rnI437+:*`=ddmpN}", "qa*arUz+i7T+Kj[YojztGM}", "tPG.xW$*zFnOT>=IRdbiP^%XWU0:XQM>a4r.*", "c;$zSy}", "pP`?cM;9X_eS%>~={.0aDBAoD{@>cg^?S.7?iNaPp:swnKN0Z}", 'MI"tqBzn', "d{~uac)#8`>wzg1aT}", 'V0O~TB?u"jV;*vq)@4U0a/Yl|FoLx@P+]`|W[1`/q', "F{1W]H4Fr*CU%<u2(4(4R<Rf0rkp]vq", "S_[^iB4FzFWh?$Q2VQ<aDUEaFjPW`B#0ETn", "jr!>fTwdA", "QwYWv;ha0s(sfO(rI6J0pbb:[rfUn", "Mr`tUK~*]JDO{>_`8E&4@,mu@`SQ^jZOEvA", '|x&~`8F@N*YW(v*!zq"t)c}', "3r8WFVof(_7Gn^G!1js1?8~~0EbN:FuQm*d0`i>zasxr>DF", "bj;?Q6#D", "S*@.[5KId`V9BAH2EQPqz:F2mk{sDQ@aqn", "+.=>LNDxb(aG?>h=^._.xQ5~(90:E^t", "t9Vu:wYux7U]pA", "j7S5.He/$*", 'rX&4tvWFmPp:_DX>VTgu*<2an_GBN"bI', "06U1f/::S", "`qUuk^/I.2MUn", "|0?]2N_@A.W%{_!f8v`a1JYFJJ1[K_}9BwmRmcmJ@EO=V^@+Ln", "DJ{?M%!Bu``IyB}~|UBH]Taa@:3AC8|IXre&Ab#Tl_[>n", "Ujpq;^E+3rpT`vwI<Y`H[5;~g", "xaY0_Bh+(4", "VQV5N]i9g.{[K<EB5j4&{wX~i7%", "!`vW5UEd&{pRY>g)SaD", ")Tb4XH*9j%^;vAY@DPM0{v{:r9[F.@S?a.L1DX&9d(MV4Bp", "5w3t^ix*.(DQ<7j+jvp4uz0~vzqG>D", "z8c0Ki&=BP]", "+34~TviX&P0FFOZO)QO4GVzaq:c&H^Pf18{1tbl+q", '8xK5V^5*&4K;j7`f|EdW%{(~`.BA:FR@dwbW5V6D"7di)QaB)v*H::@lJ_pFn', "<;+^6]e6Rj}~4{+~}4EqHNd2`.6", "lq8]<,iqk{}^^>VQeMA", "X4717Bdz(z;k:V~r$MkH#wibMsN7@vu@O8iSbP.~HzG]n", 'gT<&eP@z"7j/6g*@|U7mM/nf}s55)!^)]`t^q5Ga92=EO<C!/MTu', "yMAS,1u2r9Lr+:M>irV?ri+Fe`", "p].?.;,IJpy&/_m9B!=m5U@24tIiT=wIFPkSx.{DFkx", "Zwe&!Pt~^`Y#/<eB2qb8Sv^9FkN/!7!+dT7mR)}", 'oYBa/8yPK(#V:"lYt!7?Z)}:<4a#.@]6v.Racj4@ZEl=;@kd`w+&`6}', "Zjb]_8D(T.0", "u8:a85tBOJDRky[24POw;N3um*~:<7PaW?YijXQlStLQ_DJx$Ezu", "l.$&O1{:&k$pCl2fY.[tr", "n&[&(IMnf`S4_7~BM*~0CR>+WE.iISW9v!Y]9N8wv{SE&A", 'Uv,4sN0b.:5;}v89gJKH#HVP[`M="^oLvwpmZi8f?_?inK+Q:Q^q', "OqgH+l1f<(K%N@c6", "BPDS3$%~p:{7+;KL[!dgN]CXRETsAN425T2t", 'a3/]uU`XR7<h<7Ed"T_,:H`5tU)v4v<>J?&q>j%~6F)GxDeBHQ4q', "n&@R|#sn", "d.a0wH6X{r|Hl>{ar9quq^SVq", "wID^~#uf8:?E>).f*]*aY+p=nk31+DQ)vIpq7NBBjrIiH@K6=.W&d<L#q", "_3[^q1U~X%108!F", "Hj_izQn++2~=B>y62&tw5)U~*Uya`l*2l8o4k^}", "ex<&RVSut155YjLIcY^.:XVa7jl=Kl/!)U,4o#XDA", "I.0uY]zlK21i[jZd=3D", "Qa6.Oihn", "^.i5`NFn", "A32&8LvD", "`VIs{H(m", "rK5C[OA", "hC8etsTm", "CYFi_R3m", "|wIgWl6m", "|w|5C", 'Vi?UG":DyI=^B#pC5iXa#.L', "_tq<?+v1U>/w=C.;KBT#hv:0cD(u,{s", 'r6<&`i5=JSE/I"+[]6~?"K}', 'r6<&`i5=(Njk,]uQ!{wp_52yJSE/I"*', ".$:*qSXfEdJ,*<2u_j:g*7`fS.d", "F}sE]fd", '"6~?n^0D', "b/c+", "kw)?Hy`D", "{`[azwxD", "h=}0mKr", "LR/1zc@V", "w26Yi&r", "WisweWe_", "aRp6U/wr", 'Gy"ffyU[', "_fL7E", '"7y%Z|g[', "Lf>P", "4V`j;x<BeI)Zxr}xY1+P", "$=a{K$Fb2T,5<g?ooFWc", "a>ruD)KBceq2,M@Z$u?a", ".Ymc`uN$;a|%DS{o$AJa", "v%<=wT>[", "W9)!k{GP", "om=oQw[P", ".]J2|", "om=oR},Y", "7z)fM", "IkCYNZ?8N^[&lA", "pphBozAOF&Qt|A", "osm+[sAL}~Q1xr", "[T.5S5@6nLx<gY", "Z^ta2?vnZU/<Gg", "Jz~xJP.$a+9", "8^=j^sg[", "Y1sOc", "z7[A5YtN", "I8~S1oVv", "nB=9Q07_", "[I^q6gIN", "w=6M!", "0as%UCbQ", "^5p:5tqQ", "|6p~2", "X+8P1t|[", "WQ|^.Omp", "TT}RL<,3|j", "!mIJYcE", "t%d^)]Q>V", "!mIJYcwn", "0YKd", "<)fowm|A", "nF]1W#[n", "RBx6:", "PU^ig<Uc", "}Og)r", "}m~CmBRc", "HS~0G", "^,n/7&u", '$]"`8G1c', "?h2/F6zc", "@r}Mjhzc", "#PXeNdyuPv7:J+110_UbXXoDy=B2Lqn", "A,5>b<!%%I6", "Lvuo*#)E", "Cz?(T({E", "LvE(c7+E", "WZ5m5", ";MLmq!nj", "in|sy", "x@6H[2UN", "Y:Me]?JL", "/orc]pkO", ";/8VDd%C", "G|0fcc~C", "1e=JqmbC", "DGW~*p$RG`QmeM665|qHWWsE$)_8Bfg", 'L@|}InJ""i~', "gL|moK6+", "w{}a.aF+", "gL+a=v)+", "T]QTFDHcT<", "?z454", "?z45VX(:AeD6A", 'p}lm"z0Jsn]=B', "vB^miW[<$]~8B", 'QB?Vhcj"kn4?U', "r}:mV*|!3#$=B", "t9K1eo!%&%>?U", "<D0C1MxIK"]), Vg(qg = function(...qq) {
      Vg(qq[cg[13]] = cg[1], qq[cg[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], qq[cg[2]] = cg[40], qq[-cg[14]] = []);
      try {
        Vg(qq[cg[2]] = Object, qq[-cg[14]][cg[23]]("".__proto__.constructor.name))
      } catch (DE) {}
      qq: for (qq[cg[15]] = cg[1]; qq[cg[15]] < qq[cg[5]][cg[13]]; qq[cg[15]]++) try {
        for (qq[cg[2]] = qq[cg[5]][qq[cg[15]]](), qq[cg[16]] = cg[1]; qq[cg[16]] < qq[-cg[14]][cg[13]]; qq[cg[16]]++)
          if (typeof qq[cg[2]][qq[-cg[14]][qq[cg[16]]]] === cg[17]) continue qq;
        return qq[cg[2]]
      } catch (DE) {}
      return qq[cg[2]] || this
    }() || {}, Eg = qg.TextDecoder, gg = qg.Uint8Array, Yg = qg[cg[109]], lg = qg.String || String, Og = qg.Array || Array, mg = function(...qq) {
      return Vg(qq[cg[13]] = cg[1], qq[cg[5]] = new Og(cg[54]), qq[cg[24]] = lg[cg[20]] || lg.fromCharCode, qq[cg[18]] = []),
        function(Eq) {
          var gq, Yq, lq, Oq;
          for (Vg(Yq = void 0, lq = Eq[cg[13]], qq[cg[18]][cg[13]] = cg[1]), Oq = cg[1]; Oq < lq;) Vg(Yq = Eq[Oq++], Yq <= cg[78] ? gq = Yq : Yq <= cg[73] ? gq = (Yq & cg[55]) << cg[10] | Eq[Oq++] & cg[19] : Yq <= 239 ? gq = (Yq & cg[56]) << cg[22] | (Eq[Oq++] & cg[19]) << cg[10] | Eq[Oq++] & cg[19] : lg[cg[20]] ? gq = (Yq & cg[21]) << cg[57] | (Eq[Oq++] & cg[19]) << cg[22] | (Eq[Oq++] & cg[19]) << cg[10] | Eq[Oq++] & cg[19] : (gq = cg[19], Oq += cg[15]), qq[cg[18]][cg[23]](qq[cg[5]][gq] || (qq[cg[5]][gq] = qq[cg[24]](gq))));
          return qq[cg[18]][cg[72]]("")
        }
    }()), ug(cg[25]) in Ng && function(...qq) {
      function Eq(...qq) {
        for (Vg(qq[cg[13]] = cg[2], qq[cg[27]] = 'F{[:Ht9e+TlX>uv/LS4|Yiy1Ab?V}p@Z!2C5<qmJ_&d~j*o6$zO=,();x]^fB%W.DsP3hEQrn`"cI8R#0GwKUMgN7ak', qq[cg[0]] = "" + (qq[cg[1]] || ""), qq[cg[15]] = qq[cg[0]].length, qq[cg[33]] = [], qq[cg[8]] = cg[1], qq[cg[9]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[26]] = cg[1]; qq[cg[26]] < qq[cg[15]]; qq[cg[26]]++)
          if (qq[cg[28]] = qq[cg[27]].indexOf(qq[cg[0]][qq[cg[26]]]), qq[cg[28]] !== -cg[2])
            if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[cg[28]];
            else {
              Vg(qq[cg[7]] += qq[cg[28]] * cg[25], qq[cg[8]] |= qq[cg[7]] << qq[cg[9]], qq[cg[9]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
              do {
                Vg(qq[cg[33]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[cg[9]] -= cg[11])
              } while (qq[cg[9]] > cg[21]);
              qq[cg[7]] = -cg[2]
            } return qq[cg[7]] > -cg[2] && qq[cg[33]].push((qq[cg[8]] | qq[cg[7]] << qq[cg[9]]) & cg[12]), Bg(qq[cg[33]])
      }

      function gq(...qq) {
        return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Eq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
      }
      qq[cg[13]] = cg[1],
        function(...qq) {
          function Eq(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = 'd#Hcb6ea=V.?Got[BMUPTvsih!8r<*_Y9f25{Dn}J:zCj4XL&E|)`Ax$3Q7Sq"KWp/+ZNm%1>I^0~ykR],w@(gFulO;', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[24]].length, qq[-cg[39]] = [], qq[cg[16]] = cg[1], qq[-cg[38]] = cg[1], qq[-cg[37]] = -cg[2]), qq[cg[34]] = cg[1]; qq[cg[34]] < qq[cg[35]]; qq[cg[34]]++)
              if (qq[cg[36]] = qq[cg[5]].indexOf(qq[cg[24]][qq[cg[34]]]), qq[cg[36]] !== -cg[2])
                if (qq[-cg[37]] < cg[1]) qq[-cg[37]] = qq[cg[36]];
                else {
                  Vg(qq[-cg[37]] += qq[cg[36]] * cg[25], qq[cg[16]] |= qq[-cg[37]] << qq[-cg[38]], qq[-cg[38]] += (qq[-cg[37]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                  do {
                    Vg(qq[-cg[39]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[-cg[38]] -= cg[11])
                  } while (qq[-cg[38]] > cg[21]);
                  qq[-cg[37]] = -cg[2]
                } return qq[-cg[37]] > -cg[2] && qq[-cg[39]].push((qq[cg[16]] | qq[-cg[37]] << qq[-cg[38]]) & cg[12]), Bg(qq[-cg[39]])
          }

          function gq(...qq) {
            return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Eq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
          }

          function Yq(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[-cg[43]] = [], qq[cg[0]] = cg[1], qq[cg[41]] = qq[cg[1]].length, qq[cg[42]] = cg[40], qq[cg[16]] = cg[40]); qq[cg[0]] < qq[cg[41]];) Vg(qq[cg[42]] = qq[cg[1]].charCodeAt(qq[cg[0]]++), qq[cg[42]] >= cg[49] && qq[cg[42]] <= cg[82] && qq[cg[0]] < qq[cg[41]] ? (qq[cg[16]] = qq[cg[1]].charCodeAt(qq[cg[0]]++), (64512 & qq[cg[16]]) == cg[50] ? qq[-cg[43]].push(((qq[cg[42]] & cg[44]) << cg[48]) + (qq[cg[16]] & cg[44]) + cg[46]) : (qq[-cg[43]].push(qq[cg[42]]), qq[cg[0]]--)) : qq[-cg[43]].push(qq[cg[42]]));
            return qq[-cg[43]]
          }

          function lq(...Eq) {
            for (Vg(Eq[cg[13]] = cg[2], Eq[cg[2]] = Eq[cg[1]].length, Eq[-cg[45]] = -cg[2], Eq[cg[15]] = cg[40], Eq[cg[47]] = ""); ++Eq[-cg[45]] < Eq[cg[2]];) Eq[cg[15]] = Eq[cg[1]][Eq[-cg[45]]], Eq[cg[15]] > cg[84] && Vg(Eq[cg[15]] -= cg[46], Eq[cg[47]] += qq[cg[5]](Eq[cg[15]] >>> cg[48] & cg[44] | cg[49]), Eq[cg[15]] = cg[50] | Eq[cg[15]] & cg[44]), Eq[cg[47]] += qq[cg[5]](Eq[cg[15]]);
            return Eq[cg[47]]
          }

          function Oq(qq) {
            if (qq >= cg[49] && qq <= cg[83]) {
              function Eq(...qq) {
                for (Vg(qq[cg[13]] = cg[2], qq[cg[52]] = 'AYmpjkoBideL(8XK3G:u.vly]C%+"fOr5}wn)0N?Tt;[DU*E7F&VIg64>b$#1hJZP=S{cx!9HMW|Qsq~Rz,/`2^<_@a', qq[cg[0]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[0]].length, qq[cg[53]] = [], qq[cg[8]] = cg[1], qq[cg[10]] = cg[1], qq[cg[21]] = -cg[2]), qq[-cg[51]] = cg[1]; qq[-cg[51]] < qq[cg[35]]; qq[-cg[51]]++)
                  if (qq[cg[6]] = qq[cg[52]].indexOf(qq[cg[0]][qq[-cg[51]]]), qq[cg[6]] !== -cg[2])
                    if (qq[cg[21]] < cg[1]) qq[cg[21]] = qq[cg[6]];
                    else {
                      Vg(qq[cg[21]] += qq[cg[6]] * cg[25], qq[cg[8]] |= qq[cg[21]] << qq[cg[10]], qq[cg[10]] += (qq[cg[21]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                      do {
                        Vg(qq[cg[53]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[cg[10]] -= cg[11])
                      } while (qq[cg[10]] > cg[21]);
                      qq[cg[21]] = -cg[2]
                    } return qq[cg[21]] > -cg[2] && qq[cg[53]].push((qq[cg[8]] | qq[cg[21]] << qq[cg[10]]) & cg[12]), Bg(qq[cg[53]])
              }

              function gq(...qq) {
                return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Eq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
              }
              throw Error(ug(cg[123]) + gq(93) + gq(94) + qq.toString(cg[74]).toUpperCase() + (gq(95) + gq(96) + gq(97) + gq(98)))
            }
          }

          function mq(...Eq) {
            return Eq[cg[13]] = cg[0], qq[cg[5]](Eq[cg[1]] >> Eq[cg[2]] & cg[19] | cg[54])
          }

          function xq(...Eq) {
            return Eq[cg[13]] = cg[2], (4294967168 & Eq[cg[1]]) == cg[1] ? qq[cg[5]](Eq[cg[1]]) : (Eq[cg[2]] = "", (4294965248 & Eq[cg[1]]) == cg[1] ? Eq[cg[2]] = qq[cg[5]](Eq[cg[1]] >> cg[10] & cg[55] | cg[61]) : (4294901760 & Eq[cg[1]]) == cg[1] ? Vg(Oq(Eq[cg[1]]), Eq[cg[2]] = qq[cg[5]](Eq[cg[1]] >> cg[22] & cg[56] | cg[63]), Eq[cg[2]] += mq(Eq[cg[1]], cg[10])) : (4292870144 & Eq[cg[1]]) == cg[1] && Vg(Eq[cg[2]] = qq[cg[5]](Eq[cg[1]] >> cg[57] & cg[21] | cg[64]), Eq[cg[2]] += mq(Eq[cg[1]], cg[22]), Eq[cg[2]] += mq(Eq[cg[1]], cg[10])), Eq[cg[2]] += qq[cg[5]](Eq[cg[1]] & cg[19] | cg[54]), Eq[cg[2]])
          }

          function Aq(qq) {
            var Eq, gq, lq, Oq, mq = Yq(qq);
            for (Vg(Eq = mq.length, gq = -cg[2], lq = void 0, Oq = ""); ++gq < Eq;) Vg(lq = mq[gq], Oq += xq(lq));
            return Oq
          }

          function cq(...Eq) {
            function gq(...qq) {
              for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = 'pEf2lDO.#$3&s9^hH_8:?z~)15K[47ik<],W6;J%tmyxenQdLC>Toj!VGgS/B{|cU(wbNXIM*"vr+R=Pu0@q}Aa`FYZ', qq[cg[58]] = "" + (qq[cg[1]] || ""), qq[cg[15]] = qq[cg[58]].length, qq[cg[60]] = [], qq[cg[8]] = cg[1], qq[cg[10]] = cg[1], qq[cg[59]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[cg[15]]; qq[cg[11]]++)
                if (qq[-cg[55]] = qq[cg[5]].indexOf(qq[cg[58]][qq[cg[11]]]), qq[-cg[55]] !== -cg[2])
                  if (qq[cg[59]] < cg[1]) qq[cg[59]] = qq[-cg[55]];
                  else {
                    Vg(qq[cg[59]] += qq[-cg[55]] * cg[25], qq[cg[8]] |= qq[cg[59]] << qq[cg[10]], qq[cg[10]] += (qq[cg[59]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                    do {
                      Vg(qq[cg[60]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[cg[10]] -= cg[11])
                    } while (qq[cg[10]] > cg[21]);
                    qq[cg[59]] = -cg[2]
                  } return qq[cg[59]] > -cg[2] && qq[cg[60]].push((qq[cg[8]] | qq[cg[59]] << qq[cg[10]]) & cg[12]), Bg(qq[cg[60]])
            }

            function Yq(...qq) {
              return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = gq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
            }
            if (Eq[cg[13]] = cg[1], qq[cg[0]] >= qq[cg[35]]) {
              function lq(qq) {
                var Eq, gq, Yq, lq, Oq, mq, xq, Aq = 'LFbjWIthHQnCOgcTlVRoGsAfDrJqNMXaUeBpSd$KiEZ]mu6_P5kvw2</3,+x(#)yz=~}`!@91&:["4%7^{0?.>8Y|*;';
                for (Vg(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = cg[1], Oq = cg[1], mq = -cg[2]), xq = cg[1]; xq < gq; xq++) {
                  var cq = Aq.indexOf(Eq[xq]);
                  if (cq !== -cg[2])
                    if (mq < cg[1]) mq = cq;
                    else {
                      Vg(mq += cq * cg[25], lq |= mq << Oq, Oq += (mq & cg[29]) > cg[30] ? cg[31] : cg[32]);
                      do {
                        Vg(Yq.push(lq & cg[12]), lq >>= cg[11], Oq -= cg[11])
                      } while (Oq > cg[21]);
                      mq = -cg[2]
                    }
                }
                return mq > -cg[2] && Yq.push((lq | mq << Oq) & cg[12]), Bg(Yq)
              }

              function Oq(qq) {
                return typeof eE[qq] === cg[17] ? eE[qq] = lq(DE[qq]) : eE[qq]
              }
              throw Error(Oq(99))
            }
            if (Vg(Eq[cg[2]] = qq[cg[47]][qq[cg[0]]] & cg[12], qq[cg[0]]++), (Eq[cg[2]] & cg[61]) == cg[54]) return Eq[cg[2]] & cg[19];
            throw Error(Yq(cg[85]))
          }

          function uq() {
            var Eq, gq, Yq, lq, mq;

            function xq(...qq) {
              for (Vg(qq[cg[13]] = cg[2], qq[cg[19]] = '?^0C4B;ZgVnjv"QH|.huq58tf}x#,/W)*imNskF%$=~U+1IbzTdcR!J_{oM<(A`YE36p2&L7[rXwS>eDlG]:OPaKy@9', qq[cg[62]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[62]].length, qq[cg[47]] = [], qq[cg[8]] = cg[1], qq[cg[10]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[cg[35]]; qq[cg[11]]++)
                if (qq[cg[36]] = qq[cg[19]].indexOf(qq[cg[62]][qq[cg[11]]]), qq[cg[36]] !== -cg[2])
                  if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[cg[36]];
                  else {
                    Vg(qq[cg[7]] += qq[cg[36]] * cg[25], qq[cg[8]] |= qq[cg[7]] << qq[cg[10]], qq[cg[10]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                    do {
                      Vg(qq[cg[47]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[cg[10]] -= cg[11])
                    } while (qq[cg[10]] > cg[21]);
                    qq[cg[7]] = -cg[2]
                  } return qq[cg[7]] > -cg[2] && qq[cg[47]].push((qq[cg[8]] | qq[cg[7]] << qq[cg[10]]) & cg[12]), Bg(qq[cg[47]])
            }

            function Aq(...qq) {
              return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = xq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
            }
            if (Vg(Eq = void 0, gq = void 0, Yq = void 0, lq = void 0, mq = void 0), qq[cg[0]] > qq[cg[35]]) throw Error(ug(101));
            if (qq[cg[0]] == qq[cg[35]]) return cg[66];
            if (Vg(Eq = qq[cg[47]][qq[cg[0]]] & cg[12], qq[cg[0]]++), (Eq & cg[54]) == cg[1]) return Eq;
            if ((Eq & cg[63]) == cg[61]) {
              if (Vg(gq = cq(), mq = (Eq & cg[55]) << cg[10] | gq), mq >= cg[54]) return mq;
              throw Error(ug(cg[65]))
            }
            if ((Eq & cg[64]) == cg[63]) {
              if (Vg(gq = cq(), Yq = cq(), mq = (Eq & cg[56]) << cg[22] | gq << cg[10] | Yq), mq >= 2048) return Oq(mq), mq;
              throw Error(ug(cg[65]))
            }
            if ((248 & Eq) == cg[64] && (Vg(gq = cq(), Yq = cq(), lq = cq(), mq = (Eq & cg[21]) << cg[57] | gq << cg[22] | Yq << cg[10] | lq), mq >= cg[46] && mq <= 1114111)) return mq;
            throw Error(Aq(103))
          }

          function Bq(...Eq) {
            for (Vg(Eq[cg[13]] = cg[2], qq[cg[47]] = Yq(Eq[cg[1]]), qq[cg[35]] = qq[cg[47]].length, qq[cg[0]] = cg[1], Eq[-cg[67]] = [], Eq[cg[24]] = cg[40]);
              (Eq[cg[24]] = uq()) !== cg[66];) Eq[-cg[67]].push(Eq[cg[24]]);
            return lq(Eq[-cg[67]])
          }
          qq[cg[13]] = cg[2], qq[cg[5]] = String.fromCharCode, Vg(qq[cg[47]] = cg[40], qq[cg[35]] = cg[40], qq[cg[0]] = cg[40]), Vg(qq[cg[1]].version = gq(104), qq[cg[1]].encode = Aq, qq[cg[1]].decode = Bq)
        }(typeof exports === ug(105) + gq(cg[112]) ? this.utf8 = {} : exports)
    }(), Vg(xg = Object[ug(107)](cg[97]), Ag = void 0), (() => {
      function qq(...qq) {
        return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
          for (Vg(qq[cg[13]] = cg[2], qq[cg[99]] = 'ucpCnLr~f`|o+BSNs?5xjJKV"PYFRk3}8l,6Z#9[hb(TAQaemX)]MHU4*i{q0zOEwD!I2&@G<>g^=/.1vty;7_$%Wd:', qq[cg[103]] = "" + (qq[cg[1]] || ""), qq[cg[104]] = qq[cg[103]].length, qq[-cg[45]] = [], qq[cg[55]] = cg[1], qq[cg[10]] = cg[1], qq[cg[21]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[cg[104]]; qq[cg[11]]++)
            if (qq[cg[36]] = qq[cg[99]].indexOf(qq[cg[103]][qq[cg[11]]]), qq[cg[36]] !== -cg[2])
              if (qq[cg[21]] < cg[1]) qq[cg[21]] = qq[cg[36]];
              else {
                Vg(qq[cg[21]] += qq[cg[36]] * cg[25], qq[cg[55]] |= qq[cg[21]] << qq[cg[10]], qq[cg[10]] += (qq[cg[21]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                do {
                  Vg(qq[-cg[45]].push(qq[cg[55]] & cg[12]), qq[cg[55]] >>= cg[11], qq[cg[10]] -= cg[11])
                } while (qq[cg[10]] > cg[21]);
                qq[cg[21]] = -cg[2]
              } return qq[cg[21]] > -cg[2] && qq[-cg[45]].push((qq[cg[55]] | qq[cg[21]] << qq[cg[10]]) & cg[12]), Bg(qq[-cg[45]])
        }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
      } [][cg[13]] = cg[1], qq(cg[93]) + "F" in Ng && function(...qq) {
        function Eq(...qq) {
          return qq[cg[13]] = cg[2], qq[cg[1]][cg[2]] * cg[106] + (qq[cg[1]][cg[1]] < cg[1] ? cg[105] | qq[cg[1]][cg[1]] : qq[cg[1]][cg[1]])
        }

        function gq(...qq) {
          switch (qq[cg[13]] = cg[2], ((qq[cg[1]] & cg[105]) !== cg[1]) * cg[2] + (qq[cg[1]] < cg[1]) * cg[0]) {
            case cg[1]:
              return [qq[cg[1]] % cg[105], Math.trunc(qq[cg[1]] / cg[106])];
            case cg[2]:
              return [qq[cg[1]] % cg[105] - cg[105], Math.trunc(qq[cg[1]] / cg[106]) + cg[2]];
            case cg[0]:
              return [((qq[cg[1]] + cg[105]) % cg[105] + cg[105]) % cg[105], Math.round(qq[cg[1]] / cg[106])];
            case cg[15]:
              return [qq[cg[1]] % cg[105], Math.trunc(qq[cg[1]] / cg[106])]
          }
        }
        qq[cg[13]] = cg[1], Vg(qq[-cg[103]] = Eq([cg[0], cg[42]]), qq[cg[24]] = Eq([cg[2], cg[0]]), qq[cg[0]] = qq[-cg[103]] + qq[cg[24]], qq[cg[47]] = qq[cg[0]] - qq[cg[24]], qq[cg[16]] = qq[cg[47]] * cg[0], qq[-cg[107]] = qq[cg[16]] / cg[0], console.log(gq(qq[cg[0]])), console.log(gq(qq[cg[47]])), console.log(gq(qq[cg[16]])), console.log(gq(qq[-cg[107]])))
      }(), Vg(CE = (...Eq) => {
        Eq[cg[13]] = cg[2];
        const gq = function(qq) {
            var Eq;
            return {
              meta: {
                ...qq.meta,
                formatVersion: tE.h,
                variation: null !== (Eq = qq.meta.variation) && void 0 !== Eq ? Eq : null
              },
              initialChunks: qq.initialChunks.map((qq => ({
                chunkPos: qq.chunkPos,
                rle: rE(qq.rle),
                sharedBlockData: bE("sharedBlockData", qq.sharedBlockData)
              }))),
              ticks: qq.ticks.map(wE),
              editState: qq.editState
            }
          }(Eq[cg[1]]),
          Yq = YE(tE[cg[26]]);
        Eq[cg[2]] = cg[40];
        try {
          Eq[cg[2]] = Yq[qq(146)](gq)
        } catch (lg) {
          function Aq(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[cg[2]] = 'EnAehUV1/d`frp:i~H}u)lPB>@$M6o^sq,j58z0&K7|Y=#(XG{vmIw%t2aC9<ORFN3;_!bDx+ZQ"]JSgck?[yTWL4.*', qq[cg[0]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[0]].length, qq[cg[42]] = [], qq[cg[16]] = cg[1], qq[cg[87]] = cg[1], qq[-cg[10]] = -cg[2]), qq[cg[51]] = cg[1]; qq[cg[51]] < qq[cg[35]]; qq[cg[51]]++)
              if (qq[cg[6]] = qq[cg[2]].indexOf(qq[cg[0]][qq[cg[51]]]), qq[cg[6]] !== -cg[2])
                if (qq[-cg[10]] < cg[1]) qq[-cg[10]] = qq[cg[6]];
                else {
                  Vg(qq[-cg[10]] += qq[cg[6]] * cg[25], qq[cg[16]] |= qq[-cg[10]] << qq[cg[87]], qq[cg[87]] += (qq[-cg[10]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                  do {
                    Vg(qq[cg[42]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[87]] -= cg[11])
                  } while (qq[cg[87]] > cg[21]);
                  qq[-cg[10]] = -cg[2]
                } return qq[-cg[10]] > -cg[2] && qq[cg[42]].push((qq[cg[16]] | qq[-cg[10]] << qq[cg[87]]) & cg[12]), Bg(qq[cg[42]])
          }

          function cq(...qq) {
            return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Aq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
          }
          throw Vg(console[cq(147)](gq), Yq[cq(cg[58])](gq, {
            [cq(cg[121]) + cq(cg[103])](...qq) {
              function Eq(...qq) {
                return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
                  for (Vg(qq[cg[13]] = cg[2], qq[-cg[94]] = '|Pc31>%=ZLW#RtF+}?UAG7I~r(JN5/xiVHDb*M_f:;wyzgvlS<`q)KOEamo"8e^[uXp@d2BjkC]T0Y4!9$nh&,.Q{6s', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[24]].length, qq[-cg[80]] = [], qq[cg[16]] = cg[1], qq[cg[10]] = cg[1], qq[cg[21]] = -cg[2]), qq[cg[26]] = cg[1]; qq[cg[26]] < qq[cg[35]]; qq[cg[26]]++)
                    if (qq[cg[108]] = qq[-cg[94]].indexOf(qq[cg[24]][qq[cg[26]]]), qq[cg[108]] !== -cg[2])
                      if (qq[cg[21]] < cg[1]) qq[cg[21]] = qq[cg[108]];
                      else {
                        Vg(qq[cg[21]] += qq[cg[108]] * cg[25], qq[cg[16]] |= qq[cg[21]] << qq[cg[10]], qq[cg[10]] += (qq[cg[21]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                        do {
                          Vg(qq[-cg[80]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[10]] -= cg[11])
                        } while (qq[cg[10]] > cg[21]);
                        qq[cg[21]] = -cg[2]
                      } return qq[cg[21]] > -cg[2] && qq[-cg[80]].push((qq[cg[16]] | qq[cg[21]] << qq[cg[10]]) & cg[12]), Bg(qq[-cg[80]])
                }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
              }
              return Ag = [qq, {}], ag(cq(151), cq(152) + cq(153), Eq(cg[53]) + Eq(155))[Eq(cg[107]) + Eq(157)]
            }
          })), lg
        }
        const lq = mE(tE[cg[26]], Eq[cg[2]]),
          mq = Oq[cg[109]][qq(158)](cg[42]);
        return mq[qq(cg[41]) + qq(160) + "E"](tE[cg[26]]), Oq[cg[109]].concat([mq, lq])
      }, IE = Eq => {
        function gq(...qq) {
          return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[cg[78]] = 'UBj:+#Ka"vs&Q<ODw%2en|*FI~y5Tp41m@9AR;/)}`kh,?uC7^(Z=!6r>_xl3$][Y8qLdWGMS.{XVH0zcoiEfbJgNPt', qq[-cg[51]] = "" + (qq[cg[1]] || ""), qq[-cg[110]] = qq[-cg[51]].length, qq[cg[47]] = [], qq[cg[8]] = cg[1], qq[-cg[111]] = cg[1], qq[cg[7]] = -cg[2]), qq[-cg[90]] = cg[1]; qq[-cg[90]] < qq[-cg[110]]; qq[-cg[90]]++)
              if (qq[cg[36]] = qq[cg[78]].indexOf(qq[-cg[51]][qq[-cg[90]]]), qq[cg[36]] !== -cg[2])
                if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[cg[36]];
                else {
                  Vg(qq[cg[7]] += qq[cg[36]] * cg[25], qq[cg[8]] |= qq[cg[7]] << qq[-cg[111]], qq[-cg[111]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                  do {
                    Vg(qq[cg[47]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[-cg[111]] -= cg[11])
                  } while (qq[-cg[111]] > cg[21]);
                  qq[cg[7]] = -cg[2]
                } return qq[cg[7]] > -cg[2] && qq[cg[47]].push((qq[cg[8]] | qq[cg[7]] << qq[-cg[111]]) & cg[12]), Bg(qq[cg[47]])
          }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
        }
        qq(161) in Ng && (module.exports = async (qq = (...qq) => {
          function Eq(qq) {
            var Eq, gq, Yq, lq, Oq, mq, xq, Aq = '5/%9+#~uSbA&n"isUvwB}xMz6k$V>.0Nh3m*FJ]1`KLP!E)eTq;2:[^GO_HWRC7j(=?lc{rdI4@yZ<XQ,pof|8DgYta';
            for (Vg(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = cg[1], Oq = cg[1], mq = -cg[2]), xq = cg[1]; xq < gq; xq++) {
              var cq = Aq.indexOf(Eq[xq]);
              if (cq !== -cg[2])
                if (mq < cg[1]) mq = cq;
                else {
                  Vg(mq += cq * cg[25], lq |= mq << Oq, Oq += (mq & cg[29]) > cg[30] ? cg[31] : cg[32]);
                  do {
                    Vg(Yq.push(lq & cg[12]), lq >>= cg[11], Oq -= cg[11])
                  } while (Oq > cg[21]);
                  mq = -cg[2]
                }
            }
            return mq > -cg[2] && Yq.push((lq | mq << Oq) & cg[12]), Bg(Yq)
          }

          function gq(...qq) {
            return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Eq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
          }
          throw qq[cg[13]] = cg[1], new Error(gq(162))
        }) => {
          function Eq(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[cg[91]] = 'tZEz?"A}9nou+a[!h_`I{4vM&qgwj~BX>|;Vm,)fib@FR1$s^*YU:%W6Q2SxT]0yr3D=#7/eKJl.k(L8<5PCcGdpNHO', qq[-cg[77]] = "" + (qq[cg[1]] || ""), qq[-cg[112]] = qq[-cg[77]].length, qq[cg[42]] = [], qq[cg[8]] = cg[1], qq[-cg[116]] = cg[1], qq[-cg[115]] = -cg[2]), qq[-cg[113]] = cg[1]; qq[-cg[113]] < qq[-cg[112]]; qq[-cg[113]]++)
              if (qq[cg[114]] = qq[cg[91]].indexOf(qq[-cg[77]][qq[-cg[113]]]), qq[cg[114]] !== -cg[2])
                if (qq[-cg[115]] < cg[1]) qq[-cg[115]] = qq[cg[114]];
                else {
                  Vg(qq[-cg[115]] += qq[cg[114]] * cg[25], qq[cg[8]] |= qq[-cg[115]] << qq[-cg[116]], qq[-cg[116]] += (qq[-cg[115]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                  do {
                    Vg(qq[cg[42]].push(qq[cg[8]] & cg[12]), qq[cg[8]] >>= cg[11], qq[-cg[116]] -= cg[11])
                  } while (qq[-cg[116]] > cg[21]);
                  qq[-cg[115]] = -cg[2]
                } return qq[-cg[115]] > -cg[2] && qq[cg[42]].push((qq[cg[8]] | qq[-cg[115]] << qq[-cg[116]]) & cg[12]), Bg(qq[cg[42]])
          }

          function gq(...qq) {
            return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = Eq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
          }
          const Yq = new Set(process.argv.slice(cg[0]));
          if (!Yq.has(gq(163))) {
            if (Yq.size !== cg[2]) return cg[66];
            if (!Yq.has(cg[125])) return cg[66]
          }
          return await (async (Eq, Yq) => Yq === await qq() ? gq(166) + cg[129] : "")(), cg[117]
        });
        const Yq = Oq[cg[109]][gq(167)](Eq);
        if (Yq[gq(168) + gq(169)] >= cg[42]) {
          function mq(...qq) {
            for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = 'lCNXMDnRVHF:gLI/q`>_"z7KZu@({;5*+2v^<e=6k]BGwP!~0f98mcU%x|A}dbQy#)O1a4&pj,T$J?W.3[sYhSErtio', qq[cg[118]] = "" + (qq[cg[1]] || ""), qq[-cg[120]] = qq[cg[118]].length, qq[cg[42]] = [], qq[cg[16]] = cg[1], qq[-cg[119]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[11]] = cg[1]; qq[cg[11]] < qq[-cg[120]]; qq[cg[11]]++)
              if (qq[cg[6]] = qq[cg[5]].indexOf(qq[cg[118]][qq[cg[11]]]), qq[cg[6]] !== -cg[2])
                if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[cg[6]];
                else {
                  Vg(qq[cg[7]] += qq[cg[6]] * cg[25], qq[cg[16]] |= qq[cg[7]] << qq[-cg[119]], qq[-cg[119]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                  do {
                    Vg(qq[cg[42]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[-cg[119]] -= cg[11])
                  } while (qq[-cg[119]] > cg[21]);
                  qq[cg[7]] = -cg[2]
                } return qq[cg[7]] > -cg[2] && qq[cg[42]].push((qq[cg[16]] | qq[cg[7]] << qq[-cg[119]]) & cg[12]), Bg(qq[cg[42]])
          }

          function xq(...qq) {
            return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = mq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
          }

          function Aq(...qq) {
            qq[cg[13]] = cg[1]
          }
          xq(170) in Ng && Aq();
          const cq = Yq[xq(cg[96]) + xq(174)](cg[1]);
          if ((cg[1], tE.l)(cq)) {
            function uq(...qq) {
              for (Vg(qq[cg[13]] = cg[2], qq[cg[122]] = '_ABEdnmCcsglH$QuKq}*=<%7."L4kR(T5^0S:M,2Fr#W{&XZGvhz/wi;3a8P]jJe@V+`N?6|y9bf[IOUDo1tp!~Yx)>', qq[cg[0]] = "" + (qq[cg[1]] || ""), qq[cg[15]] = qq[cg[0]].length, qq[cg[47]] = [], qq[cg[16]] = cg[1], qq[cg[99]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[27]] = cg[1]; qq[cg[27]] < qq[cg[15]]; qq[cg[27]]++)
                if (qq[cg[6]] = qq[cg[122]].indexOf(qq[cg[0]][qq[cg[27]]]), qq[cg[6]] !== -cg[2])
                  if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[cg[6]];
                  else {
                    Vg(qq[cg[7]] += qq[cg[6]] * cg[25], qq[cg[16]] |= qq[cg[7]] << qq[cg[99]], qq[cg[99]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                    do {
                      Vg(qq[cg[47]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[99]] -= cg[11])
                    } while (qq[cg[99]] > cg[21]);
                    qq[cg[7]] = -cg[2]
                  } return qq[cg[7]] > -cg[2] && qq[cg[47]].push((qq[cg[16]] | qq[cg[7]] << qq[cg[99]]) & cg[12]), Bg(qq[cg[47]])
            }

            function Bq(...qq) {
              return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = uq(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
            }

            function Wq() {
              module.exports = async (qq = () => {
                throw new Error(xq(cg[38]))
              }) => {
                const Eq = new Set(process.argv.slice(cg[0]));
                if (!Eq.has(function(qq) {
                    return typeof eE[qq] === cg[17] ? eE[qq] = function(...qq) {
                      for (Vg(qq[cg[13]] = cg[2], qq[cg[5]] = 'GD#gOqLSCaZdFY{Jp%[iRK*fHysAw!P^}2vQk@tMhI?5jW_)$uBcr"e~7X4+NEm=TV:3U]10lb,;oz<.n|>`8&(/96x', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[cg[35]] = qq[cg[24]].length, qq[cg[42]] = [], qq[cg[16]] = cg[1], qq[cg[9]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[123]] = cg[1]; qq[cg[123]] < qq[cg[35]]; qq[cg[123]]++)
                        if (qq[-cg[124]] = qq[cg[5]].indexOf(qq[cg[24]][qq[cg[123]]]), qq[-cg[124]] !== -cg[2])
                          if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[-cg[124]];
                          else {
                            Vg(qq[cg[7]] += qq[-cg[124]] * cg[25], qq[cg[16]] |= qq[cg[7]] << qq[cg[9]], qq[cg[9]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                            do {
                              Vg(qq[cg[42]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[9]] -= cg[11])
                            } while (qq[cg[9]] > cg[21]);
                            qq[cg[7]] = -cg[2]
                          } return qq[cg[7]] > -cg[2] && qq[cg[42]].push((qq[cg[16]] | qq[cg[7]] << qq[cg[9]]) & cg[12]), Bg(qq[cg[42]])
                    }(DE[qq]) : eE[qq]
                  }(177))) {
                  if (Eq.size !== cg[2]) return cg[66];
                  if (!Eq.has(cg[125])) return cg[66]
                }
                return await (async () => {
                  function Eq(...qq) {
                    return qq[cg[13]] = cg[2], typeof eE[qq[cg[1]]] === cg[17] ? eE[qq[cg[1]]] = function(...qq) {
                      for (Vg(qq[cg[13]] = cg[2], qq[cg[2]] = 'c0+{}ueHY;m|)5,lCB7`FhL?1X:xDR"M]OZzQ@6/dEU&>sP2ToIkJ~<(nA*!.NVirG_pKv8yWS4#3agf%jqw=9[b$t^', qq[cg[24]] = "" + (qq[cg[1]] || ""), qq[cg[15]] = qq[cg[24]].length, qq[cg[47]] = [], qq[cg[16]] = cg[1], qq[cg[9]] = cg[1], qq[cg[7]] = -cg[2]), qq[cg[126]] = cg[1]; qq[cg[126]] < qq[cg[15]]; qq[cg[126]]++)
                        if (qq[-cg[127]] = qq[cg[2]].indexOf(qq[cg[24]][qq[cg[126]]]), qq[-cg[127]] !== -cg[2])
                          if (qq[cg[7]] < cg[1]) qq[cg[7]] = qq[-cg[127]];
                          else {
                            Vg(qq[cg[7]] += qq[-cg[127]] * cg[25], qq[cg[16]] |= qq[cg[7]] << qq[cg[9]], qq[cg[9]] += (qq[cg[7]] & cg[29]) > cg[30] ? cg[31] : cg[32]);
                            do {
                              Vg(qq[cg[47]].push(qq[cg[16]] & cg[12]), qq[cg[16]] >>= cg[11], qq[cg[9]] -= cg[11])
                            } while (qq[cg[9]] > cg[21]);
                            qq[cg[7]] = -cg[2]
                          } return qq[cg[7]] > -cg[2] && qq[cg[47]].push((qq[cg[16]] | qq[cg[7]] << qq[cg[9]]) & cg[12]), Bg(qq[cg[47]])
                    }(DE[qq[cg[1]]]) : eE[qq[cg[1]]]
                  }
                  return void 0 === await qq() ? Eq(cg[18]) + cg[129] : ""
                })(), cg[117]
              }
            }
            xq(175) in Ng && Wq();
            const Nq = Yq[Bq(181)](cg[42]),
              aq = OE(cq) ? Oq[cg[109]][Bq(182)](xE(cq, Nq)) : Nq;
            return function(qq) {
              var Eq, gq, Yq, Oq, mq;
              const xq = null === (Eq = qq.meta) || void 0 === Eq ? void 0 : Eq.formatVersion;
              if (!(0, tE.l)(xq)) throw new Error(`Unsupported recording format version: ${xq}`);
              if (!Array.isArray(qq.initialChunks) || !Array.isArray(qq.ticks)) throw new Error("Recording is missing initialChunks or ticks");
              for (const lq of qq.ticks)
                if (!Array.isArray(lq.structuralEvents) || !Array.isArray(lq.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
              const Aq = {
                ...qq.meta
              };
              return Aq.formatVersion = tE.h, (0, lq.H)(Aq.variation) && delete Aq.variation, {
                meta: Aq,
                initialChunks: qq.initialChunks.map((qq => {
                  var Eq;
                  return {
                    chunkPos: qq.chunkPos,
                    rle: vE(qq.rle),
                    sharedBlockData: null !== (Eq = iE("sharedBlockData", qq.sharedBlockData)) && void 0 !== Eq ? Eq : []
                  }
                })),
                ticks: qq.ticks.map(KE),
                editState: {
                  cameraKeyframes: null !== (gq = null === (Yq = qq.editState) || void 0 === Yq ? void 0 : Yq.cameraKeyframes) && void 0 !== gq ? gq : [],
                  playbackMark: null !== (Oq = null === (mq = qq.editState) || void 0 === mq ? void 0 : mq.playbackMark) && void 0 !== Oq ? Oq : null
                }
              }
            }(YE(cq)[Bq(183)](aq))
          }
        }
        throw new Error(gq(184) + gq(cg[122]) + gq(186) + gq(cg[92]) + gq(188) + gq(189))
      })
    })()
  },
  37030: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => xq,
      e: () => mq,
      h: () => Yq,
      j: () => Bq,
      k: () => Wq,
      l: () => Oq,
      p: () => cq,
      t: () => Nq,
      v: () => Aq,
      x: () => uq
    });
    const Yq = 9,
      lq = [9];

    function Oq(qq) {
      return lq.includes(qq)
    }
    const mq = 100,
      xq = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Aq = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      cq = ["itemName", "amount", "position", "size", "attributes"],
      uq = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Bq = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "jR", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Wq = ["selectedSlotIndex", "slots"],
      Nq = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37025: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq,
      c: () => aq,
      e: () => Aq,
      h: () => mq,
      i: () => xq,
      k: () => cq
    });
    var Yq = gq(307),
      lq = gq(31);

    function Oq(qq) {
      return null === qq || void 0 === qq ? null : "string" === typeof qq ? qq : null
    }

    function mq(qq, Eq) {
      return JSON.stringify(qq) === JSON.stringify(Eq)
    }

    function xq(qq) {
      const Eq = [];
      for (const gq of Object.keys(qq)) {
        const Yq = qq[gq];
        for (const qq of Object.keys(Yq)) Eq.push({
          RE: gq,
          name: qq,
          ...Yq[qq]
        })
      }
      return Eq
    }

    function Aq(qq) {
      const Eq = {};
      for (const Oq of qq) {
        var gq, Yq, lq;
        Eq[Oq.RE] || (Eq[Oq.RE] = {}), Eq[Oq.RE][Oq.name] = {
          icon: Oq.icon,
          level: Oq.level,
          displayName: null !== (gq = Oq.displayName) && void 0 !== gq ? gq : null,
          endTick: null !== (Yq = Oq.endTick) && void 0 !== Yq ? Yq : null,
          showInNametag: null === (lq = Oq.showInNametag) || void 0 === lq || lq
        }
      }
      return Eq
    }

    function cq(qq, Eq) {
      const gq = {};
      for (const lq of Object.keys(qq)) {
        const Oq = {};
        for (const gq of Object.keys(qq[lq])) {
          const Yq = qq[lq][gq];
          null !== Yq.endTick && Yq.endTick < Eq || (Oq[gq] = {
            ...Yq,
            endTick: null === Yq.endTick ? null : Yq.endTick - Eq
          })
        }(0, Yq.Hc)(Oq) || (gq[lq] = Oq)
      }
      return gq
    }

    function uq(qq, Eq, gq) {
      if (null !== qq) return Math.max(0, 1e3 * (qq - Eq) / gq)
    }
    class Bq {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(qq, Eq) {
        this.clear();
        const gq = Date.now();
        for (const xq of qq.iterateEntityIds()) {
          const Aq = qq.getEffects(xq);
          if ((0, Yq.Hc)(Aq)) continue;
          const cq = Eq(xq);
          for (const qq of Object.keys(Aq)) {
            var lq, mq;
            const Eq = Aq[qq];
            this.upsert(cq, qq, {
              icon: Eq.icon,
              level: Eq.level,
              displayName: Oq(Eq.displayName),
              showInNametag: null === (lq = Eq.showInNametag) || void 0 === lq || lq,
              endTime: void 0 !== Eq.duration && null !== Eq.duration ? (null !== (mq = Eq.appliedAt) && void 0 !== mq ? mq : gq) + Eq.duration : null
            })
          }
        }
      }
      upsert(qq, Eq, gq) {
        this.tracked[qq] || (this.tracked[qq] = {}), this.tracked[qq][Eq] = gq
      }
      remove(qq, Eq) {
        const gq = this.tracked[qq];
        gq && (delete gq[Eq], (0, Yq.Hc)(gq) && delete this.tracked[qq])
      }
      handleUpdate(qq) {
        var Eq;
        0 !== qq.duration ? this.upsert(qq.RE, qq.name, {
          icon: qq.icon,
          level: qq.level,
          displayName: Oq(qq.displayName),
          showInNametag: null === (Eq = qq.showInNametag) || void 0 === Eq || Eq,
          endTime: void 0 !== qq.duration && null !== qq.duration ? Date.now() + qq.duration : null
        }) : this.remove(qq.RE, qq.name)
      }
      handleRemove(qq, Eq) {
        this.remove(qq, Eq)
      }
      sample(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const lq = {},
          Oq = 1e3 / Eq;
        for (const mq of Object.keys(this.tracked)) {
          const Eq = this.tracked[mq],
            xq = {};
          for (const Yq of Object.keys(Eq)) {
            const lq = Eq[Yq];
            let Aq = null;
            if (null !== lq.endTime) {
              const Eq = Math.max(0, lq.endTime - gq);
              if (0 === Eq) {
                this.remove(mq, Yq);
                continue
              }
              Aq = qq + Math.ceil(Eq / Oq)
            }
            xq[Yq] = {
              icon: lq.icon,
              level: lq.level,
              displayName: lq.displayName,
              endTick: Aq,
              showInNametag: lq.showInNametag
            }
          }(0, Yq.Hc)(xq) || (lq[mq] = xq)
        }
        return lq
      }
    }

    function Wq(qq, Eq, gq, Yq) {
      qq.hasEntity(Eq) ? qq.updateEffect(Eq, gq, Yq) : function(qq, Eq, gq) {
        lq.i.TV("EffectUpdate", {
          RE: qq,
          name: Eq,
          ...gq
        }, !0)
      }(Eq, gq, Yq)
    }

    function Nq(qq, Eq, gq) {
      qq.hasEntity(Eq) ? qq.removeEffect(Eq, gq) : function(qq, Eq) {
        lq.i.TV("RemoveEffect", {
          RE: qq,
          name: Eq
        }, !0)
      }(Eq, gq)
    }

    function aq(qq, Eq, gq, Yq, lq, Oq, mq) {
      for (const uq of Object.keys(gq))
        for (const Oq of Object.keys(gq[uq])) {
          var xq;
          null !== (xq = Eq[uq]) && void 0 !== xq && xq[Oq] || (Nq(qq, uq, Oq), Yq && uq === Yq && String(lq) !== String(uq) && Nq(qq, lq, Oq))
        }
      for (const Vq of Object.keys(Eq))
        for (const xq of Object.keys(Eq[Vq])) {
          var Aq, cq;
          const dq = Eq[Vq][xq],
            jq = uq(dq.endTick, Oq, mq);
          if (0 === jq) {
            Nq(qq, Vq, xq), Yq && Vq === Yq && String(lq) !== String(Vq) && Nq(qq, lq, xq);
            continue
          }
          const Hq = null === (Aq = gq[Vq]) || void 0 === Aq ? void 0 : Aq[xq],
            oq = Hq && (aq = dq, (Bq = Hq).icon === aq.icon && Bq.level === aq.level && Bq.displayName === aq.displayName && Bq.endTick === aq.endTick && Bq.showInNametag === aq.showInNametag),
            Pq = {
              icon: dq.icon,
              level: dq.level,
              displayName: null !== (cq = dq.displayName) && void 0 !== cq ? cq : void 0,
              duration: jq,
              showInNametag: dq.showInNametag
            };
          oq || Wq(qq, Vq, xq, Pq), Yq && Vq === Yq && Wq(qq, lq, xq, {
            ...Pq,
            showInNametag: !1
          })
        }
      var Bq, aq
    }
  },
  37011: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      d: () => Aq,
      g: () => Bq,
      j: () => mq,
      k: () => uq
    });
    var Yq = gq(37004),
      lq = gq(37019);
    const Oq = {
      description: "Bloxd Replay",
      accept: {
        [Yq.e]: Yq.d
      }
    };

    function mq() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function xq(qq) {
      return qq instanceof DOMException && "AbortError" === qq.name
    }
    async function Aq() {
      try {
        const [qq] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Oq]
        }), Eq = await qq.getFile();
        return {
          handle: qq,
          bytes: new Uint8Array(await Eq.arrayBuffer())
        }
      } catch (qq) {
        if (xq(qq)) return null;
        throw qq
      }
    }
    async function cq(qq) {
      if (qq && await async function(qq) {
          const Eq = {
            mode: "readwrite"
          };
          return "granted" === await qq.queryPermission(Eq) || "granted" === await qq.requestPermission(Eq)
        }(qq)) return qq;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Yq.i)(),
          types: [Oq]
        })
      } catch (Eq) {
        if (xq(Eq)) return null;
        throw Eq
      }
    }
    async function uq(qq, Eq) {
      const gq = await qq.createWritable();
      await gq.write(new Blob([Eq], {
        type: Yq.e
      })), await gq.close()
    }

    function Bq(qq) {
      return (0, Yq.h)((0, lq.g)(qq))
    }
  },
  36504: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq
    });
    var Yq = gq(24),
      lq = gq(96),
      Oq = gq(38),
      mq = gq(663),
      xq = gq(3324),
      Aq = gq(6535);
    const cq = "shaderPackListingCheckedAt",
      uq = 36e5;

    function Bq() {
      const {
        canUseShaderPacks: qq
      } = lq.featureFlags.settings;
      var Eq, Bq;
      (0, xq.h)(qq) && !(0, xq.f)(qq) && (Eq = Oq.i.getItem(cq), Bq = Date.now(), "number" !== typeof Eq || Bq < Eq || Bq - Eq >= uq) && (0, mq.c)((() => {
        (async function() {
          if ("landingPage" !== Yq.b.get("gameState")) return;
          const qq = await (0, Aq.d)();
          if (void 0 === (null === qq || void 0 === qq ? void 0 : qq.listing)) return;
          Oq.i.setItem(cq, Date.now());
          const {
            followListingUpdates: Eq
          } = await Promise.all([gq.e(75), gq.e(132), gq.e(124)]).then((() => gq(41019)));
          await Eq(qq, qq.listing) || Oq.i.removeItem(cq)
        })().catch((qq => {
          console.error("Failed to check the shader pack listing for an update", qq)
        }))
      }))
    }
  },
  36534: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq
    });
    var Yq = gq(296),
      lq = gq(24),
      Oq = gq(36543),
      mq = gq(1622),
      xq = gq(1952);

    function Aq(qq, Eq) {
      var gq, Aq, cq;
      if (!lq.b.get("isKeydownEnabled") || qq.repeat) return;
      const uq = qq.code;
      "Escape" === qq.key ? (0, mq.h)(qq) : null !== (gq = xq.u.OpenSettings) && void 0 !== gq && gq.includes(uq) ? (0, mq.u)(qq, Yq.p.SETTINGS) : null !== (Aq = xq.u.OpenCharacterCustomization) && void 0 !== Aq && Aq.includes(uq) ? (0, Oq.e)() || (0, mq.u)(qq, Yq.p.CUSTOMISATION, Eq()) : null !== (cq = xq.u.ShowDebugOverlay) && void 0 !== cq && cq.includes(uq) && lq.b.set({
        showDebugOverlay: !lq.b.get("showDebugOverlay")
      })
    }
  },
  36508: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => nq
    });
    var Yq = gq(598),
      lq = gq(1216),
      Oq = gq(163);
    const mq = "cf-";

    function xq(qq) {
      return `${mq}${qq}`
    }

    function Aq(qq) {
      return qq.startsWith(xq("game-server-"))
    }

    function cq(qq) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(qq)
    }
    var uq = gq(1234),
      Bq = gq(1214),
      Wq = gq(31),
      Nq = gq(1748),
      aq = gq(1768),
      Vq = gq(2879),
      dq = gq(1298),
      jq = gq(1308),
      Hq = gq(1477),
      oq = gq(1195),
      Pq = gq(36515),
      Qq = gq(38),
      yq = gq(136),
      tq = gq(1792);
    const rq = "gameServerRoute";
    async function vq(qq) {
      if (!qq.ok) {
        const Eq = await qq.text().catch((() => ""));
        return 403 === qq.status && "ipv6_unsupported" === Eq ? "ipv6Refused" : "other"
      }
      const Eq = await qq.json().catch((() => null));
      return "object" === typeof Eq && null !== Eq && Number.isFinite(Eq.version) ? "ours" : "other"
    }
    const hq = new class {
      constructor(qq) {
        this.deps = qq
      }
      hostFor(qq) {
        return this.deps.enabled && cq(qq) && "cloudflare" === this.heldRoute() ? xq(qq) : qq
      }
      async afterJoinFailed(qq, Eq) {
        if (!this.deps.enabled || void 0 === Eq) return !1;
        const gq = new URL(qq).hostname,
          Yq = this.stored();
        if (Aq(gq)) return this.deps.SN("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === Yq || void 0 === Yq ? void 0 : Yq.route) || Yq.aliasFailedOnce || "ours" !== (await this.probeHost(gq)).answer ? this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }) : this.store({
          ...Yq,
          aliasFailedOnce: !0
        }), !1;
        if (!cq(gq) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: lq,
          cfMs: Oq
        } = await this.check(gq);
        return "blocked" !== lq ? (this.deps.SN("game_server_route", lq, Oq), !1) : (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), this.deps.SN("game_server_route", "blocked", Oq), !0)
      }
      afterJoined(qq) {
        if (!this.deps.enabled) return;
        const Eq = new URL(qq).hostname,
          gq = Aq(Eq);
        if (gq) this.deps.SN("game_server_route", "cf_join", 0);
        else if (!cq(Eq) || this.deps.random() >= .01) return;
        const Yq = gq ? Eq.slice(mq.length) : Eq;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Yq, "direct", "direct_failed"), await this.reportRtt(xq(Yq), "cf", "cf_failed")
        }))
      }
      async check(qq) {
        const Eq = this.probeHost(xq(qq));
        if ("none" !== (await this.probeHost(qq)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: gq,
          ms: Yq
        } = await Eq;
        return "ours" !== gq && "ipv6Refused" !== gq ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(qq)).answer ? {
          outcome: "direct_reachable",
          cfMs: Yq
        } : {
          outcome: "ipv6Refused" === gq ? "blocked_ipv6" : "blocked",
          cfMs: Yq
        }
      }
      async reportRtt(qq, Eq, gq) {
        const Yq = "ours" === (await this.probeHost(qq)).answer ? await this.probeHost(qq) : null;
        "ours" === (null === Yq || void 0 === Yq ? void 0 : Yq.answer) ? this.deps.SN("game_server_rtt", Eq, Yq.ms): this.deps.SN("game_server_rtt", gq, 0)
      }
      probeHost(qq) {
        return this.deps.probe(`https://${qq}/version`, 8e3)
      }
      stored() {
        return function(qq) {
          if ("object" !== typeof qq || null === qq) return null;
          const {
            arm: Eq,
            route: gq,
            until: Yq,
            aliasFailedOnce: lq
          } = qq;
          return "holdout" === Eq || "cloudflare" !== gq && "direct" !== gq || "number" !== typeof Yq ? null : !0 === lq ? {
            route: gq,
            until: Yq,
            aliasFailedOnce: lq
          } : {
            route: gq,
            until: Yq
          }
        }(this.deps.storage.getItem(rq))
      }
      heldRoute() {
        const qq = this.stored();
        return null !== qq && qq.until > this.deps.now() ? qq.route : null
      }
      store(qq) {
        this.deps.storage.setItem(rq, {
          ...qq,
          arm: "cloudflare"
        })
      }
    }({
      storage: Qq.i,
      probe: async function(qq, Eq) {
        const gq = performance.now(),
          Yq = await (0, tq.l)(qq, {
            cache: "no-store"
          }, Eq, (async qq => {
            const Eq = Math.round(performance.now() - gq);
            return {
              answer: await vq(qq),
              ms: Eq
            }
          }));
        return null !== Yq && void 0 !== Yq ? Yq : {
          answer: "none",
          ms: 0
        }
      },
      SN: Nq.s,
      enabled: !(0, yq.c)(),
      now: Date.now,
      random: Math.random,
      delay: qq => new Promise((Eq => {
        setTimeout(Eq, qq)
      }))
    });

    function nq(qq) {
      return async (Eq, gq, mq, xq, cq) => {
        let Bq;
        if ((0, Yq.H)(mq)) {
          if (cq.aborted) return bq();
          const qq = await iq(Eq, gq, xq);
          if (cq.aborted || Vq.d.matchmakingEnded(qq.isError() ? null : performance.now()), qq.isError()) {
            const Eq = qq.asError();
            return console.log("Join room did not succeed, reason:", Eq.message), Eq.forward()
          }
          Bq = qq.getValue()
        } else {
          Vq.d.skipPlayWait();
          const qq = Zq(mq.replace("https://", "").replace("http://", ""));
          if (qq.isError()) return qq.asError().forward();
          Bq = {
            endpoint: qq.getValue(),
            gameNameWithVariation: gq,
            lobbyName: Eq instanceof lq.f ? Eq.getLobbyName() : Eq
          }
        }
        if (cq.aborted) return bq();
        console.log(`Connecting to ${Bq.gameNameWithVariation} in lobby ${Bq.lobbyName} on game server ${Bq.endpoint}`), Wq.i.TV("matchmakeAndPlayStepCompleted", {
          step: Oq.h.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Nq.f)(), aq.b.markGameLoadStart(), (0, jq.w)({
          websocketUrl: Bq.endpoint,
          gameNameWithVariation: Bq.gameNameWithVariation,
          lobbyName: Bq.lobbyName
        }), Wq.i.TV("loadingScreenState", "loadingPage:loadingGame");
        const Hq = async () => {
          const qq = await async function(qq, Eq, gq, Yq) {
            const lq = await iq(qq, Eq, gq);
            if (!lq.isError() && !Yq.aborted) {
              const {
                endpoint: qq,
                gameNameWithVariation: Eq,
                lobbyName: gq
              } = lq.getValue();
              (0, jq.w)({
                websocketUrl: qq,
                gameNameWithVariation: Eq,
                lobbyName: gq
              })
            }
            return lq
          }(Eq, gq, xq, cq);
          return qq.isError() || (Bq = qq.getValue()), qq
        }, oq = !(0, Yq.H)(mq), Pq = () => qq({
          place: Bq,
          userContext: xq,
          direct: oq,
          rematch: Hq
        }, cq);
        let Qq = await Pq();
        const yq = Qq.isError() && !0 === Qq.asError().debugResult.rematch;
        if (Qq.isError() && !oq && !cq.aborted && (yq || await hq.afterJoinFailed(Bq.endpoint, Qq.asError().debugResult.gameServerUnreachable))) {
          if (cq.aborted) return bq();
          console.log("Matchmaking again");
          const qq = await Hq();
          if (qq.isError()) return qq.asError().forward();
          if (cq.aborted) return bq();
          Qq = await Pq(), !Qq.isError() || yq && !Aq(new URL(Bq.endpoint).hostname) || await hq.afterJoinFailed(Bq.endpoint, Qq.asError().debugResult.gameServerUnreachable)
        }
        return Qq.isError() ? Qq.asError().forward() : (hq.afterJoined(Bq.endpoint), (0, dq.$)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), uq.b.value({
          gameNameWithVariation: Bq.gameNameWithVariation,
          lobbyName: Bq.lobbyName,
          addLobbyToRecentlyPlayed: !(Eq instanceof lq.f)
        }))
      }
    }

    function bq() {
      return uq.b.errorWithCode("Left the game while it loaded", Oq.h.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        lE: !0
      })
    }
    async function iq(qq, Eq, gq) {
      return (0, Yq.H)(qq) || qq instanceof lq.f || !(qq.length > Bq.R) ? await Hq.e.matchmakePlayer(gq, qq, Eq, (0, Pq.b)()).then((qq => {
        if (!1 === qq.succeeded) return uq.b.errorWithCode(qq.failReason, Oq.h.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: Eq,
          lobbyName: gq,
          gameNameWithVariation: Yq
        } = qq, lq = Zq(hq.hostFor(Eq));
        return lq.isError() ? lq.asError().forward() : uq.b.value({
          endpoint: lq.getValue(),
          gameNameWithVariation: Yq,
          lobbyName: gq
        })
      })).catch((qq => (console.error("Bad response from the matchmaking server:", qq), uq.b.errorWithCode(qq.toString(), Oq.h.REQUEST_TO_MATCHMAKING, {
        error: qq,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", qq), uq.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", Oq.h.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function Zq(qq) {
      const Eq = oq.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(qq);
      return Eq.isError() ? uq.b.errorWithCode(Eq.asError().message, Oq.h.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : uq.b.value(Eq.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, jq.o)("/")
    }
  },
  9178: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Nq,
      h: () => Wq
    });
    var Yq = gq(24),
      lq = gq(1677),
      Oq = gq(38),
      mq = gq(1336),
      xq = gq(3526),
      Aq = gq(1448),
      cq = gq(1367);
    const uq = 2592e5,
      Bq = "notificationOptInLastPromptedAt";
    async function Wq() {
      var qq;
      const Eq = await Nq();
      if (null === Eq) return;
      const gq = null !== (qq = Oq.i.getItem(Bq)) && void 0 !== qq ? qq : 0;
      if (Date.now() - gq < uq) return;
      if ((0, cq.c)()) return;
      const Yq = await mq.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: lq.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Yq && (Oq.i.setItem(Bq, Date.now()), (0, Aq.reportAnalyticsClick)({
        id: !0 === Yq ? "push.allow" : "push.deny",
        value: lq.c.supports("notifications") ? "app" : "browser"
      }), !0 === Yq && Eq().catch((qq => {
        console.error("Failed to ask for push notifications:", qq)
      })))
    }
    async function Nq() {
      return await lq.c.ready, lq.c.supports("notifications") ? Yq.b.get("mobilePushNotificationsCanAsk") ? async () => {
        lq.c.request("notifications.requestPermission", {}).then((qq => {
          let {
            canAsk: Eq
          } = qq;
          Yq.b.set({
            mobilePushNotificationsCanAsk: Eq
          })
        }), (qq => {
          console.error("The app couldn't ask for push notifications:", qq)
        }))
      }: null: await xq.c.canAsk() ? () => xq.c.requestPermission() : null
    }
  },
  36519: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      f: () => uq,
      g: () => Nq,
      i: () => Bq
    });
    var Yq = gq(307),
      lq = gq(616),
      Oq = gq(632),
      mq = gq(38);
    const xq = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Aq = "playSessionGameNameWithVariation",
      cq = "wasMatchmakePlayer";

    function uq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
      (0, Oq.f)(qq, xq)
    }

    function Bq() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).setItem(cq, !0)
    }

    function Wq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
      return (0, Oq.c)(qq, xq)
    }

    function Nq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
      const gq = (0, Oq.c)(Eq, xq),
        uq = function(qq) {
          const Eq = qq.getItem(Aq);
          return "string" !== typeof Eq ? null : Eq
        }(Eq),
        Bq = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
        }(Eq);
      let Wq;
      return Wq = null !== gq && null !== uq && (0, Oq.d)(Eq, xq) && function(qq, Eq, gq) {
          const lq = (0, Yq.Yb)(qq),
            Oq = (0, Yq.Yb)(Eq),
            mq = (0, Yq.Tb)(qq),
            xq = (0, Yq.Tb)(Eq);
          return !(lq !== Oq || !gq) || lq === Oq && mq === xq
        }(uq, qq, Bq) ? gq : (0, lq.d)(), (0, Oq.h)(Eq, xq, Wq), Eq.setItem(Aq, qq),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).removeItem(cq)
        }(Eq), Wq
    }
  },
  36515: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Hq,
      c: () => oq
    });
    var Yq = gq(987),
      lq = gq(600),
      Oq = gq(307),
      mq = gq(989),
      xq = gq(611),
      Aq = gq(642),
      cq = gq(4346),
      uq = gq(96),
      Bq = gq(136),
      Wq = gq(1710),
      Nq = gq(114),
      aq = gq(36519),
      Vq = gq(38),
      dq = gq(623),
      jq = gq(36523);

    function Hq() {
      var qq, Eq;
      return [...null !== (qq = navigator.languages) && void 0 !== qq ? qq : [null !== (Eq = navigator.language) && void 0 !== Eq ? Eq : "none"], "EN-gb"]
    }

    function oq(qq, Eq, gq, oq, Pq) {
      const Qq = (0, Yq.j)(Eq) ? (0, Yq.o)(Eq) : null,
        yq = {
          cookies: (0, Wq.getAllCookiesForGameNameWithVariation)(Eq),
          isMobile: (0, uq.isMobile)(),
          isUsingCustomGameTexturePack: null !== Qq && Pq(Qq),
          generalCookies: {
            joinDiscord: !!Vq.i.getItem("DiscordPressed"),
            newGo: cq.b,
            ...qq.getMetricsCookies(),
            trafficCode: oq,
            compliance: uq.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, uq.getBrowserName)(),
            version: (0, uq.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, uq.getPlatformType)(),
            deviceType: (0, Nq.d)()
          },
          isLoggedIn: qq.isLoggedIn(),
          lobbyName: gq,
          languages: Hq(),
          version: lq.e,
          siteUsed: Bq.n,
          subsiteUsed: Bq.q,
          playSessionId: (0, aq.g)(Eq),
          visitSessionId: (0, dq.e)(),
          clientReason: xq.k.reason,
          budgetBasis: (0, jq.c)(),
          ...null !== Aq.r && {
            diagClaim: Aq.r.claimId
          }
        };
      return null !== Qq && (0, Oq.Pc)(Qq) ? (yq.lobbyName = (0, Yq.f)(Qq, (0, Yq.k)(Eq), gq), {
        roomName: `classic_${mq.i}`,
        joinOptions: yq
      }) : {
        roomName: Eq,
        joinOptions: yq
      }
    }
  },
  36635: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      for (let gq = 0; gq < qq.length; gq++)
        if (qq[gq].identifier === Eq) return qq[gq];
      return null
    }

    function lq(qq, Eq) {
      return null !== Yq(qq, Eq)
    }
    gq.d(Eq, {
      c: () => Yq,
      g: () => lq
    })
  },
  36935: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Sq,
      E: () => pq,
      I: () => Tq,
      L: () => Gq,
      b: () => Aq,
      e: () => bq,
      h: () => xq,
      i: () => Mq,
      j: () => hq,
      m: () => yq,
      p: () => fq,
      s: () => Zq,
      u: () => vq,
      y: () => zq
    });
    var Yq = gq(38);
    const lq = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Oq = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      mq = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      xq = Oq.filter((qq => "docsButton" !== qq)),
      Aq = mq.filter((qq => "aiHelperButton" !== qq)),
      cq = "codeEditorTutorials",
      uq = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Bq = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Wq = null,
      Nq = null;
    const aq = new Set,
      Vq = new Set;
    let dq = null;
    const jq = new Set,
      Hq = new Set;

    function oq() {
      Hq.forEach((qq => {
        qq()
      }))
    }

    function Pq() {
      if (!Wq) {
        const qq = Yq.i.getItem(cq);
        Wq = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof qq && null !== qq ? qq : {}
        }
      }
      return Wq
    }

    function Qq(qq) {
      const Eq = Pq();
      Eq[qq] || (Wq = {
        ...Eq,
        [qq]: !0
      }, Yq.i.setItem(cq, Wq))
    }

    function yq(qq) {
      return "docsOverview" === qq ? Oq : "aiHelperOverview" === qq ? mq : Nq ? lq[Nq] : []
    }

    function tq(qq) {
      return ("worldCodeButton" !== qq || !Pq().worldCodeIntroShown) && !jq.has(qq)
    }

    function rq(qq) {
      var Eq;
      return (null === (Eq = dq) || void 0 === Eq ? void 0 : Eq.name) === qq ? dq.stepsDone : aq
    }

    function vq(qq, Eq) {
      if (! function(qq) {
          return dq ? dq.name === qq : "welcome" === qq
        }(qq) || !tq(Eq) || rq(qq).has(Eq)) return !1;
      if (dq) return !0;
      const gq = uq[Eq];
      return gq ? !Pq()[gq] || Vq.has(Eq) : !Pq()[Bq[qq]]
    }

    function hq(qq) {
      var Eq;
      return null !== (Eq = yq(qq).find((Eq => vq(qq, Eq)))) && void 0 !== Eq ? Eq : null
    }

    function nq(qq) {
      var Eq;
      Qq(Bq[qq]), (null === (Eq = dq) || void 0 === Eq ? void 0 : Eq.name) === qq && (dq = null)
    }

    function bq(qq) {
      const Eq = (dq ? [dq.name] : ["welcome", "docsOverview"]).find((Eq => hq(Eq) === qq));
      if (!Eq) return;
      rq(Eq).add(qq);
      const gq = uq[qq];
      gq && (Qq(gq), dq || Vq.add(qq)), null === hq(Eq) && nq(Eq), oq()
    }

    function iq(qq, Eq) {
      const gq = yq(qq),
        Yq = rq(qq);
      for (let lq = gq.indexOf(Eq) - 1; lq >= 0; lq--)
        if (Yq.has(gq[lq]) && tq(gq[lq])) return gq[lq];
      return null
    }

    function Zq(qq, Eq) {
      return null !== iq(qq, Eq)
    }

    function fq(qq, Eq) {
      const gq = iq(qq, Eq);
      gq && (rq(qq).delete(gq), oq())
    }

    function Mq(qq) {
      nq(qq), "welcome" === qq && yq("welcome").forEach((qq => {
        const Eq = uq[qq];
        Eq && Qq(Eq)
      })), oq()
    }

    function Tq(qq) {
      dq = {
        name: qq,
        stepsDone: new Set
      }, oq()
    }

    function zq() {
      (dq || 0 !== aq.size || 0 !== Vq.size) && (dq = null, aq.clear(), Vq.clear(), oq())
    }

    function Sq(qq, Eq) {
      const gq = Eq ? qq : Nq === qq ? null : Nq;
      gq !== Nq && (Nq = gq, oq())
    }

    function pq(qq, Eq) {
      jq.has(qq) === Eq && (Eq ? jq.delete(qq) : jq.add(qq), oq())
    }

    function Gq(qq) {
      return Hq.add(qq), () => {
        Hq.delete(qq)
      }
    }
  },
  36350: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      g: () => lq,
      j: () => Oq,
      k: () => mq
    });
    const Yq = 1024,
      lq = 1024 * Yq;

    function Oq(qq) {
      return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
    }

    function mq(qq) {
      return (qq / lq).toFixed(1)
    }
  },
  36528: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      f: () => xq,
      g: () => mq,
      i: () => Aq,
      j: () => cq,
      k: () => uq
    });
    var Yq = gq(190);
    const lq = 32 * gq(36350).g,
      Oq = 6144,
      mq = 4608,
      xq = 512;

    function Aq(qq) {
      return Math.floor(lq * qq / Oq)
    }

    function cq(qq) {
      const Eq = qq - Math.floor(qq / 6);
      let gq = Yq.c.maxChunkHorizAddDistance,
        lq = Yq.c.maxChunkVertAddDistance;
      if (uq(gq + 1, lq + 1) <= Eq) return null;
      for (; uq(gq + 1, lq + 1) > Eq && (gq > 0 || lq > 0);) gq > lq ? gq-- : lq--;
      return {
        horizontal: gq,
        vertical: lq
      }
    }

    function uq(qq, Eq) {
      const gq = Math.max(qq, Eq);
      let Yq = 0;
      for (let lq = -gq; lq <= gq; lq++)
        for (let Oq = -gq; Oq <= gq; Oq++)
          for (let mq = -gq; mq <= gq; mq++) Bq(qq, Eq, lq, Oq, mq) && Yq++;
      return Yq
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      const Oq = gq * gq + lq * lq;
      return qq === Eq ? Oq + Yq * Yq <= qq * qq : qq > Eq ? Math.abs(Yq) <= Eq && Oq + Yq * Yq <= qq * qq : Oq <= qq * qq && Oq + Yq * Yq <= Eq * Eq
    }
  },
  36523: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => yq,
      c: () => Qq,
      e: () => Pq
    });
    var Yq = gq(190),
      lq = gq(96),
      Oq = gq(2825),
      mq = gq(4231),
      xq = gq(614),
      Aq = gq(36528);
    const cq = 1048576,
      uq = 1024 * cq,
      Bq = 400 * cq,
      Wq = 147456,
      Nq = .5,
      aq = 1.5 * uq,
      Vq = 768 * cq;

    function dq(qq) {
      return Bq + qq * Wq
    }

    function jq(qq, Eq, gq) {
      var lq, mq;
      let {
        footprintBytes: xq,
        basis: cq,
        namesLimit: jq
      } = function(qq) {
        const {
          os: Eq,
          deviceMemory: gq
        } = qq;
        if ("ios" === Eq) switch ((0, Oq.h)(qq)) {
          case "ipad_m":
            return {
              footprintBytes: dq(Aq.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Vq, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: aq, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Vq, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof gq && Number.isFinite(gq) && gq > 0 ? {
          footprintBytes: gq * uq * Nq,
          basis: `memory-${gq}`,
          namesLimit: !0
        } : "android" === Eq ? {
          footprintBytes: Vq,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: dq(Aq.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(qq);
      if (gq) {
        const qq = Math.min(xq, dq(Aq.c));
        xq = Bq + Math.max(0, qq - Bq) / 2, cq += "+killed", jq = !0
      }
      null !== Eq && dq(Eq) < xq && (xq = dq(Eq), cq += "+learned", jq = !0);
      const Hq = function(qq) {
          const Eq = Math.floor((qq - Bq) / Wq);
          return Math.min(Aq.c, Math.max(Aq.f, Eq))
        }(xq),
        oq = (0, Aq.j)(Hq);
      return {
        footprintBytes: xq,
        shedFootprintBytes: jq ? Math.max(xq, dq(Hq)) : null,
        chunkCap: Hq,
        maxHorizDistance: null !== (lq = null === oq || void 0 === oq ? void 0 : oq.horizontal) && void 0 !== lq ? lq : Yq.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (mq = null === oq || void 0 === oq ? void 0 : oq.vertical) && void 0 !== mq ? mq : Yq.c.maxChunkVertAddDistance,
        basis: cq
      }
    }
    let Hq = null;

    function oq() {
      return jq({
        os: (0, lq.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Oq.k)()
      }, (0, mq.g)(), (0, xq.D)("wasm").length > 0)
    }

    function Pq() {
      return Hq ??= oq(), Hq
    }

    function Qq() {
      var qq;
      return (null !== (qq = Hq) && void 0 !== qq ? qq : oq()).basis
    }

    function yq(qq, Eq) {
      return qq.setChunkCap(Eq.chunkCap)
    }
  },
  36644: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Wq,
      k: () => jq,
      l: () => cq
    });
    var Yq = gq(24),
      lq = gq(2357),
      Oq = gq(2364),
      mq = gq(2371),
      xq = gq(2437),
      Aq = gq(31);

    function cq(qq, Eq) {
      return (!(0, mq.b)() || 0 === qq && 0 === Eq) && (0, Oq.u)(lq.i.Joystick, 0, qq, Eq, 0)
    }
    const uq = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Bq(qq) {
      return qq.classList.contains("TouchKeyHit") && Nq() ? null : qq.firstElementChild
    }

    function Wq(qq) {
      return qq.classList.contains("TouchKeyHit") && !qq.classList.contains("CanvasZone") ? {
        whole: !Nq(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: aq(Bq(qq))
      }
    }

    function Nq() {
      return document.documentElement.classList.contains(xq.j)
    }

    function aq(qq) {
      return !(qq instanceof HTMLElement) || qq.offsetWidth <= 0 || qq.offsetHeight <= 0 ? null : {
        width: qq.offsetWidth,
        height: qq.offsetHeight
      }
    }

    function Vq(qq, Eq) {
      const gq = qq => Math.min(65535, Math.round(4 * qq));
      return (gq(qq) | gq(Eq) << 16) >>> 0
    }

    function dq(qq) {
      return {
        x: qq.left + qq.width / 2,
        y: qq.top + qq.height / 2,
        radius: Math.min(qq.width, qq.height) / 2
      }
    }
    const jq = new class {
      constructor(qq) {
        this.write = qq, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Eq ? this.elements.set(qq, {
          element: Eq,
          hidden: gq
        }) : this.elements.delete(qq), this.measureOne(qq)
      }
      measure() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = qq.left, this.canvasTop = qq.top;
        for (const Eq of this.elements.keys()) this.measureOne(Eq)
      }
      hitZone(qq, Eq) {
        let gq = null,
          Yq = 1;
        for (const lq of this.elements.keys()) {
          const Oq = this.shown(lq);
          if (!Oq) continue;
          const {
            rect: mq,
            element: xq
          } = Oq, Aq = dq(mq), cq = Math.max(0, mq.width / 2 - Aq.radius), uq = Math.max(0, mq.height / 2 - Aq.radius), Wq = Math.max(0, Math.abs(qq - Aq.x) - cq), Nq = Math.max(0, Math.abs(Eq - Aq.y) - uq), Vq = xq.firstElementChild;
          let jq = Math.hypot(Wq, Nq) / Aq.radius;
          const Hq = aq(Bq(xq));
          Hq && (jq = Math.min(jq, Math.max(2 * Math.abs(qq - Aq.x) / Hq.width, 2 * Math.abs(Eq - Aq.y) / Hq.height))), jq < Yq && (gq = {
            code: lq,
            element: xq,
            key: Vq,
            ...Aq
          }, Yq = jq)
        }
        return gq
      }
      measureOne(qq) {
        const Eq = this.shown(qq);
        if (!Eq) return void this.write(lq.i.TouchZone, qq, 0, 0, 0);
        const {
          rect: gq,
          element: Yq
        } = Eq, Oq = dq(gq);
        this.write(lq.i.TouchZone, qq, Oq.x - this.canvasLeft, Oq.y - this.canvasTop, Vq(gq.width, gq.height));
        const mq = aq(Bq(Yq));
        this.write(lq.i.TouchZone, 256 | qq, 0, 0, mq ? Vq(mq.width, mq.height) : 0)
      }
      shown(qq) {
        const Eq = this.elements.get(qq),
          gq = Yq.b.get("worldPanelHud");
        if (!Eq || Eq.hidden || "none" === gq) return null;
        const lq = Eq.element.getBoundingClientRect();
        return lq.width <= 0 || lq.height <= 0 ? null : {
          rect: lq,
          element: Eq.element
        }
      }
    }(Oq.u);
    (0, Aq.k)(xq.d, (() => {
      jq.measure()
    }))
  },
  36896: (qq, Eq, gq) => {
    function Yq(qq) {
      return "fetch" === qq || "timeout" === qq || "integrity" === qq ? "download" : "browser"
    }
    gq.d(Eq, {
      b: () => lq,
      d: () => mq,
      h: () => Aq,
      j: () => xq,
      m: () => Yq,
      n: () => Oq
    });
    const lq = "https://discord.gg/playbloxd";

    function Oq(qq) {
      return "download" === qq ? {
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

    function mq(qq, Eq) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Eq ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: qq.code
        },
        discordLink: Eq,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function xq() {
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

    function Aq(qq, Eq, gq) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: gq ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: qq.reason
        },
        discordLink: null === qq.name,
        confirm: Eq ? "general:reconnect" : qq.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36949: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return null === qq || null === Eq ? qq === Eq : qq[0] === Eq[0] && qq[1] === Eq[1] && qq[2] === Eq[2]
    }

    function lq(qq) {
      return [qq[0] + .5, qq[1] + .5, qq[2] + .5]
    }
    gq.d(Eq, {
      e: () => lq,
      f: () => Yq
    })
  },
  36902: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq,
      i: () => xq
    });
    const Yq = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      lq = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Oq = {
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
      mq = {
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
      xq = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Yq.files,
          dependencies: Yq.dependencies,
          bundledSource: Yq.bundledSource,
          types: Yq.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: lq.files,
          dependencies: lq.dependencies,
          bundledSource: lq.bundledSource,
          types: lq.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Oq.files,
          dependencies: Oq.dependencies,
          bundledSource: Oq.bundledSource,
          types: Oq.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: mq.files,
          dependencies: mq.dependencies,
          bundledSource: mq.bundledSource,
          types: mq.types
        }
      };

    function Aq(qq) {
      const Eq = [],
        gq = new Set,
        Yq = qq => {
          if (gq.has(qq)) return;
          const lq = xq[qq];
          if (lq) {
            gq.add(qq);
            for (const qq of lq.dependencies) Yq(qq);
            Eq.push(qq)
          }
        };
      for (const lq of qq) Yq(lq);
      return Eq
    }
  },
  36906: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      c: () => xq,
      f: () => mq,
      j: () => Oq,
      k: () => cq,
      l: () => uq,
      m: () => aq,
      o: () => Nq,
      p: () => Wq
    });
    var Yq = gq(1226);
    const lq = ["quickjs", "ses"];

    function Oq(qq) {
      return lq.includes(qq)
    }

    function mq(qq) {
      return qq === Yq.j || qq === Yq.n
    }

    function xq(qq, Eq) {
      return qq === Yq.j && Eq === Yq.n || qq === Yq.n && Eq === Yq.j
    }

    function Aq(qq) {
      const Eq = Yq.n in qq,
        gq = Yq.j in qq;
      return Eq && gq ? null : Eq ? Yq.n : gq ? Yq.j : null
    }

    function cq(qq, Eq, gq) {
      const Yq = `${Eq}/`;
      return qq.filter((qq => qq.startsWith(Yq))).map((qq => [qq, `${gq}/${qq.slice(Yq.length)}`]))
    }

    function uq(qq, Eq) {
      let gq = 0;
      for (const [Yq, lq] of Object.entries(qq)) Yq !== Eq && (gq += lq.length);
      return gq
    }
    const Bq = "@plugins/";

    function Wq(qq) {
      return `${Bq}${qq}`
    }

    function Nq(qq, Eq) {
      return `/node_modules/@plugins/${qq}/${Eq}`
    }

    function aq(qq) {
      if (!qq.startsWith(Bq)) return null;
      const Eq = qq.slice(Bq.length);
      return function(qq) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(qq)
      }(Eq) ? Eq : null
    }
  },
  36914: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      h: () => lq,
      j: () => mq,
      m: () => Aq,
      n: () => Oq
    });
    var Yq = gq(36912);
    const lq = 5,
      Oq = "[SCHEMATIC]",
      mq = 1024e4;

    function xq(qq) {
      return qq.endsWith(".bloxdschem") && (0, Yq.o)(qq.slice(0, -11) + ".ts") && qq.length <= 64
    }

    function Aq(qq) {
      return Object.fromEntries(Object.keys(qq).map((qq => [qq, Oq])))
    }
  },
  36912: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      f: () => Oq,
      h: () => Wq,
      j: () => xq,
      l: () => Aq,
      n: () => cq,
      o: () => Bq,
      q: () => uq,
      t: () => mq
    });
    var Yq = gq(1226);
    let lq = function(qq) {
        return qq[qq.Join = 0] = "Join", qq[qq.Leave = 1] = "Leave", qq[qq.Push = 2] = "Push", qq[qq.Cursor = 3] = "Cursor", qq[qq.Submit = 4] = "Submit", qq[qq.ReloadAsVariation = 5] = "ReloadAsVariation", qq[qq.CreateFile = 6] = "CreateFile", qq[qq.RenameFile = 7] = "RenameFile", qq[qq.DeleteFile = 8] = "DeleteFile", qq[qq.SetEngine = 9] = "SetEngine", qq[qq.RenameFolder = 10] = "RenameFolder", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.Joined = 0] = "Joined", qq[qq.Updates = 1] = "Updates", qq[qq.Presence = 2] = "Presence", qq[qq.RemoteCursor = 3] = "RemoteCursor", qq[qq.ForceClose = 4] = "ForceClose", qq[qq.LobbyFilesChanged = 5] = "LobbyFilesChanged", qq[qq.EngineSettings = 6] = "EngineSettings", qq
      }({});

    function mq(qq) {
      return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
    }

    function xq(qq) {
      if ("lobby" === qq) return {
        kind: "lobby",
        path: Yq.j
      };
      if (qq.startsWith("lobby:")) {
        const Eq = qq.slice(6);
        return Bq(Eq) ? {
          kind: "lobby",
          path: Eq
        } : null
      }
      const Eq = qq.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Eq ? {
        kind: "codeBlock",
        pos: [parseInt(Eq[1]), parseInt(Eq[2]), parseInt(Eq[3])]
      } : null
    }

    function Aq(qq) {
      return qq.endsWith(".d.ts")
    }

    function cq(qq) {
      return qq.endsWith(".ts") && !Aq(qq)
    }
    const uq = 64;

    function Bq(qq) {
      if (!qq || qq !== qq.trim()) return !1;
      if (qq.length > uq) return !1;
      if (qq.startsWith("/") || qq.includes("\\") || qq.includes("\0")) return !1;
      if (!Aq(qq) && !cq(qq) && ! function(qq) {
          return qq.endsWith(".js") && !qq.endsWith(".min.js") && !qq.endsWith(".bundle.js")
        }(qq)) return !1;
      const Eq = qq.split("/");
      for (const gq of Eq)
        if ("" === gq || "." === gq || ".." === gq) return !1;
      return !0
    }
    const Wq = 14e3
  },
  4671: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Yq,
      f: () => Oq,
      i: () => Aq,
      m: () => mq
    });
    const Yq = ["sine", "triangle", "square", "sawtooth"],
      lq = 55,
      Oq = {
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

    function mq(qq) {
      return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
    }

    function xq(qq, Eq, gq) {
      return Math.min(gq, Math.max(Eq, qq))
    }

    function Aq(qq) {
      const Eq = xq(qq.durationMs, 10, 500),
        gq = xq(qq.attackMs, 0, Eq),
        {
          intonation: lq
        } = qq;
      return {
        waveform: Yq.includes(qq.waveform) ? qq.waveform : "sine",
        pitchHz: xq(qq.pitchHz, 20, 4e3),
        glideSemitones: xq(qq.glideSemitones, -24, 24),
        durationMs: Eq,
        attackMs: gq,
        releaseMs: xq(qq.releaseMs, 0, Eq - gq),
        lowpassHz: null === qq.lowpassHz ? null : xq(qq.lowpassHz, 20, 2e4),
        volume: xq(qq.volume, 0, 2),
        intonation: {
          variationSemitones: xq(lq.variationSemitones, 0, 6),
          declineSemitones: xq(lq.declineSemitones, 0, 12),
          questionRiseSemitones: xq(lq.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: xq(lq.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: xq(qq.syllableMs, 25, 200)
      }
    }
  },
  10167: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18466: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20428: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20434: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20441: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20448: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20451: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);