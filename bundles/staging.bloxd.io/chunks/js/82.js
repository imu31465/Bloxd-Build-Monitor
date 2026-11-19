export const id = 82;
export const ids = [82];
export const modules = {
  35965: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => MY,
      f: () => dY
    });
    var FY = DY(61),
      AY = DY(1808),
      IY = DY(35974),
      RY = DY.n(IY),
      OY = DY(4097),
      gY = DY(1778),
      aY = DY(1430),
      vY = DY(99),
      uY = DY(117),
      sY = DY(341),
      iY = DY(1092),
      yY = DY.n(iY),
      QY = DY(19),
      oY = DY(1098),
      WY = DY(1619),
      EY = DY(1699),
      mY = DY(1663),
      VY = DY(1863),
      SY = DY(1392),
      lY = DY(1934),
      TY = DY(1384),
      eY = DY(8189),
      NY = DY(35980),
      BY = DY(35991),
      cY = DY(1447),
      KY = DY(2291),
      HY = DY(1211),
      zY = DY(36002);
    var ZY = DY(8677);
    var CY = DY(1125);
    const fY = DY(36008),
      jY = ["enter", "t", "/"];
    let hY = !1;

    function dY() {
      return hY || (0, EY.isTextEntry)(document.activeElement)
    }

    function JY() {
      var YY, rY;
      (0, lY.d)();
      const DY = null !== (YY = null === (rY = (0, SY.g)()) || void 0 === rY ? void 0 : rY.getBoundButton("keyboardChannel")) && void 0 !== YY ? YY : null;
      return DY ? (0, CY.jsx)(VY.c, {
        className: "ChatInputChannelGlyph",
        glyph: DY
      }) : null
    }

    function MY() {
      const {
        t: YY
      } = (0, HY.C)(), {
        isTouchScreen: rY
      } = (0, QY.j)(["isTouchScreen"]), DY = (0, TY.p)(), [IY, iY] = (0, FY.useState)(!1), VY = (0, FY.useRef)(IY), SY = (0, FY.useRef)(null), {
        messages: lY,
        reportedPlayers: dY,
        channel: MY
      } = (0, eY.n)(), bY = (0, FY.useRef)(0), XY = (0, FY.useRef)(""), qY = (0, FY.useRef)(null);
      var pY;
      pY = qY, (0, FY.useEffect)((() => {
        if (!(0, vY.isIOS)()) return;
        const YY = pY.current;
        let rY = null;
        const DY = DY => {
            const FY = DY.changedTouches[0];
            rY = "none" === getComputedStyle(YY).pointerEvents ? {
              id: FY.identifier,
              y: FY.clientY
            } : null
          },
          FY = DY => {
            const FY = rY,
              AY = FY && (0, zY.c)(DY.changedTouches, FY.id);
            AY && (DY.preventDefault(), YY.scrollBy({
              top: FY.y - AY.clientY,
              behavior: "instant"
            }), FY.y = AY.clientY)
          };
        return YY.addEventListener("touchstart", DY, {
          passive: !0
        }), YY.addEventListener("touchmove", FY, {
          passive: !1
        }), () => {
          YY.removeEventListener("touchstart", DY), YY.removeEventListener("touchmove", FY)
        }
      }), [pY]);
      const [kY, GY] = (0, FY.useState)(!1), [xY, nY] = (0, FY.useState)(!1), PY = (0, FY.useRef)(kY), UY = (0, FY.useRef)(null), LY = (0, FY.useRef)(!1), tY = (0, FY.useRef)(null), Yr = (0, FY.useRef)(null), rr = (0, FY.useRef)(null), Dr = (0, FY.useRef)(Rr);
      Dr.current = Rr;
      const Fr = (0, KY.m)();

      function Ar() {
        VY.current = !1, iY(!1), Yr.current.blur()
      }

      function Ir(YY) {
        PY.current = YY, GY(YY)
      }

      function Rr() {
        const YY = Yr.current.value;
        Yr.current.value = "", Or(YY)
      }

      function Or(YY) {
        (0, eY.l)(YY), bY.current = 0, Ir(!1)
      }

      function gr(YY, rY) {
        0 === bY.current && (XY.current = Yr.current.value);
        const DY = (0, eY.k)(bY.current + YY, rY);
        bY.current = DY.stepsBack, Yr.current.value = 0 === DY.stepsBack ? XY.current : DY.text, setTimeout((() => {
          Yr.current && Yr.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function ar() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        qY.current && (!YY && PY.current || (qY.current.scrollTop = 1e5))
      }
      return (0, OY.b)(!0, IY, "ChatComponent"), (0, FY.useEffect)((() => (hY = IY, () => {
          hY = !1
        })), [IY]), (0, aY.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, WY.t)() && iY(!1)
        })), (0, FY.useEffect)((() => {
          Yr.current.addEventListener("blur", (YY => {
            if (null === Yr.current) return;
            Array.from(document.querySelectorAll(":hover")).some((YY => YY.classList.contains("ChatInputChannel") || YY.classList.contains("ChatMsgSelectWrapper"))) || ((0, vY.isMobile)() && VY.current && "" !== Yr.current.value && Dr.current(), iY(!1))
          }));
          const YY = YY => {
            SY.current.contains(YY.target) || (0, mY.j)(YY.target) || iY(!1)
          };
          document.addEventListener("touchstart", YY, {
            capture: !0
          });
          const rY = YY => {
            (0, BY.g)(YY.target) && (VY.current = !1, iY(!1))
          };
          document.addEventListener("mousedown", rY, {
            capture: !0
          });
          const DY = () => {
              clearTimeout(UY.current), Ir(!0)
            },
            FY = () => {
              clearTimeout(UY.current), UY.current = setTimeout((() => {
                Ir(!1), ar()
              }), 4e3)
            },
            IY = () => {
              document.pointerLockElement ? (iY(!1), nY(!0), LY.current = !1, Ir(!1), ar()) : nY(!1)
            };
          qY.current.addEventListener("pointermove", (YY => {
            "touch" === YY.pointerType || LY.current || document.pointerLockElement || (LY.current = !0, clearTimeout(UY.current))
          })), qY.current.addEventListener("pointerleave", (YY => {
            "touch" !== YY.pointerType && (LY.current = !1, PY.current && FY())
          })), qY.current.addEventListener("pointerdown", (YY => {
            "touch" === YY.pointerType || document.pointerLockElement || (LY.current = !0, DY())
          })), qY.current.addEventListener("wheel", (YY => {
            document.pointerLockElement || YY.deltaY >= 0 && Math.abs(qY.current.scrollTop) < 1 || (DY(), LY.current || (UY.current = setTimeout((() => {
              Ir(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), qY.current.addEventListener("touchstart", DY), qY.current.addEventListener("touchend", FY), qY.current.addEventListener("touchcancel", FY), document.addEventListener("pointerlockchange", IY);
          const OY = YY => {
            if (Fr.shown && (VY.current || ! function(YY) {
                if ((0, EY.isTypingInInput)()) return !0;
                const rY = document.activeElement;
                return (rY instanceof HTMLButtonElement || "button" === (null === rY || void 0 === rY ? void 0 : rY.getAttribute("role"))) && ["Enter", " "].includes(YY.key)
              }(YY)) && "codeEditor" !== QY.b.get("openInGameMenuName") && "lobbyCodeEditor" !== QY.b.get("openInGameMenuName") && !AY.gameBridge.latest("connectedGame").replay)
              if (VY.current || !(0, WY.t)()) {
                if (VY.current) {
                  if ("ArrowUp" === YY.code || "ArrowDown" === YY.code) return gr("ArrowUp" === YY.code ? 1 : -1, !1), void YY.stopPropagation();
                  if ("Tab" === YY.code) return eY.c.selectNextChannel(), YY.stopPropagation(), void YY.preventDefault();
                  if (YY.ctrlKey && wY.includes(fY[YY.keyCode])) return YY.preventDefault(), void YY.stopPropagation()
                }
                if ([...jY, "esc"].includes(RY()(YY)))
                  if ("esc" !== RY()(YY)) {
                    if (!VY.current || "/" !== RY()(YY)) {
                      if ("t" === RY()(YY)) {
                        if (VY.current) return void YY.stopPropagation();
                        YY.preventDefault()
                      }
                      VY.current && "" !== Yr.current.value && Dr.current(), YY.repeat || (VY.current || "/" === RY()(YY) && (Yr.current.value = "/", YY.preventDefault()), iY(!VY.current))
                    }
                  } else VY.current && (iY(!1), YY.stopPropagation());
                else VY.current && YY.stopPropagation()
              } else jY.includes(RY()(YY)) && (YY.preventDefault(), YY.stopPropagation(), (0, WY.d)(YY))
          };
          document.addEventListener("keydown", OY, {
            capture: !0
          });
          const gY = qY.current;
          let aY = !1;
          const uY = new ResizeObserver((() => {
              aY && (aY = !1, ar())
            })),
            sY = () => {
              aY = !0, uY.unobserve(gY), uY.observe(gY)
            };
          tY.current = sY;
          const yY = new MutationObserver(sY);
          return yY.observe(gY, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", OY, {
              capture: !0
            }), document.removeEventListener("touchstart", YY, {
              capture: !0
            }), document.removeEventListener("mousedown", rY, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", IY), tY.current = null, yY.disconnect(), uY.disconnect(), clearTimeout(UY.current)
          }
        }), []), (0, mY.q)(Yr, {
          open: () => {
            iY(!0)
          },
          close: () => {
            Ar()
          },
          submit: () => {
            "" !== Yr.current.value && Rr(), Ar()
          },
          stepHistory: () => {
            gr(1, !0)
          },
          sendLine: YY => {
            Or(YY), Ar()
          },
          selectNextChannel: () => {
            eY.c.selectNextChannel()
          }
        }), (0, FY.useEffect)((() => {
          var YY;
          (VY.current = IY, Yr.current) && (IY ? (bY.current = 0, Yr.current.focus()) : (Yr.current.blur(), null === (YY = tY.current) || void 0 === YY || YY.call(tY)))
        }), [IY]),
        function(YY, rY) {
          (0, FY.useLayoutEffect)((() => {
            if (!rY) return;
            ZY.c.hold();
            const DY = YY.current.closest(".InGameHeaderAndChat"),
              FY = window.visualViewport;
            let AY = "";
            const IY = () => {
              const YY = `${FY.offsetTop+FY.height}px`;
              YY !== AY && (AY = YY, DY.style.setProperty("--keyboard-top", YY))
            };
            return IY(), FY.addEventListener("resize", IY), FY.addEventListener("scroll", IY), () => {
              FY.removeEventListener("resize", IY), FY.removeEventListener("scroll", IY), DY.style.removeProperty("--keyboard-top"), ZY.c.release()
            }
          }), [YY, rY])
        }(SY, IY && rY), (0, CY.jsx)(CY.Fragment, {
          children: (0, CY.jsxs)("div", {
            ref: SY,
            className: yY()("Chat", {
              Chatting: IY
            }),
            "data-camera-keeper": IY ? "" : void 0,
            children: [(0, CY.jsx)("div", {
              ref: qY,
              className: yY()("ChatMessages", {
                HideScrollbar: !kY && !IY,
                NoScrolling: !(0, vY.isMobile)() && xY
              }),
              children: (0, CY.jsx)(NY.e, {
                messages: lY,
                reportedPlayers: dY
              })
            }), rY && !IY && (0, CY.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": YY("general:chat"),
              ...(0, cY.c)((() => {
                iY(!0), rr.current.style.display = "flex", (0, vY.isIOS)() && Yr.current.focus()
              }), "pointerup"),
              children: (0, CY.jsx)(oY.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, CY.jsxs)("div", {
              ref: rr,
              className: "ChatInputWrapper",
              style: {
                display: "" + (IY ? "flex" : "none")
              },
              children: [MY && (0, CY.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: MY.elementBgColor
                },
                onClick: YY => {
                  eY.c.selectNextChannel(), Yr.current.focus()
                },
                children: (0, CY.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, CY.jsx)(gY.b, {
                    text: MY.elementContent
                  })
                })
              }), MY && DY && (0, CY.jsx)(JY, {}), (0, CY.jsx)("input", {
                className: "ChatInput",
                maxLength: sY.Vc,
                ref: Yr,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": YY("general:chat"),
                placeholder: MY ? `${MY.channelName} Chat${"touchOnly"===(0,uY.d)()||DY?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const wY = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35980: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => eY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(8197),
      OY = DY(25),
      gY = DY(2223),
      aY = DY(3184),
      vY = DY(1881),
      uY = DY(19),
      sY = DY(1778),
      iY = DY(35982),
      yY = DY(2016),
      QY = DY(35984),
      oY = DY(2378),
      WY = DY(2362),
      EY = DY(2360),
      mY = DY(3207),
      VY = DY(2707),
      SY = DY(1834),
      lY = DY(1125);

    function TY(YY) {
      for (let DY = YY.length - 1; DY >= 0; DY--) {
        const FY = "string" === typeof(rY = YY[DY]) ? rY : "str" in rY && "string" === typeof rY.str ? rY.str : "";
        if ("" !== FY.trim()) return FY
      }
      var rY;
      return ""
    }

    function eY(YY) {
      let {
        messages: rY,
        reportedPlayers: DY
      } = YY;
      return (0, lY.jsx)(lY.Fragment, {
        children: rY.map((YY => (0, lY.jsx)(NY, {
          message: YY,
          reportedPlayers: DY
        }, YY.clientChatMsgId)))
      })
    }
    const NY = (0, FY.memo)((function(YY) {
      var rY;
      let {
        message: DY,
        reportedPlayers: AY
      } = YY;
      const eY = (0, FY.useRef)(null),
        [NY] = (0, FY.useState)(VY.e),
        {
          author: BY
        } = DY,
        cY = null === BY || void 0 === BY ? void 0 : BY.id,
        KY = null !== (rY = null === BY || void 0 === BY ? void 0 : BY.name) && void 0 !== rY ? rY : void 0,
        HY = (0, vY.c)(KY),
        zY = null !== BY && void 0 !== BY && BY.profileEffect ? yY.f[BY.profileEffect] : void 0,
        ZY = null !== BY && !BY.local,
        CY = null === BY && null !== DY.serverChatMsgId,
        fY = (0, SY.f)("hiddenPlayerNames", (YY => (0, QY.f)(ZY, KY, YY))),
        jY = null === DY.serverChatMsgId || null === BY ? null : {
          text: TY(DY.content),
          serverChatMsgId: DY.serverChatMsgId,
          authorId: BY.id
        },
        hY = CY || null !== jY && !AY.includes(cY),
        dY = (0, aY.i)(ZY && null !== KY && void 0 !== KY ? KY : null),
        JY = (0, EY.g)(eY);
      (0, FY.useEffect)((() => () => {
        EY.b.closeIfOwner(eY)
      }), []);
      const MY = () => {
          CY ? OY.g.vo("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            vv: (0, RY.e)(DY.content),
            serverChatMsgId: DY.serverChatMsgId
          }) : null !== jY ? OY.g.vo("OpenReportMenu", {
            playerEId: cY,
            playerName: KY,
            vv: jY.text,
            serverChatMsgId: jY.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        wY = void 0 === KY ? [] : (0, mY.b)(dY, KY, jY);
      return (0, lY.jsxs)("div", {
        ref: eY,
        className: IY()("MessageWrapper", {
          ChatMsgSelectWrapper: cY,
          Still: NY
        }),
        onContextMenu: fY ? YY => {
          (0, oY.d)(eY, YY, {
            ...(0, QY.b)(cY, KY),
            showLocation: !1,
            status: null,
            extraActions: hY ? [{
              icon: "flag",
              text: "Report",
              onClick: MY
            }] : [],
            friendRequestSource: "chat"
          }, uY.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: fY ? YY => {
          (0, WY.d)(YY, (() => (0, QY.b)(cY, KY).playerSocialPreview))
        } : void 0,
        children: [zY && (0, lY.jsx)(zY, {
          className: "ChatMessageBackground",
          simple: !0
        }), (ZY || CY) && !JY && (0, lY.jsx)(iY.d, {
          className: "ChatFloatingActions",
          triggerElementRef: eY,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: MY,
            show: hY
          }, ...wY, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: YY => {
              (0, gY.j)(KY, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: fY && "blocked" !== dY
          }]
        }), (0, lY.jsx)(sY.b, {
          text: DY.content,
          friendBadgeFor: HY ? KY : void 0
        }, DY.clientChatMsgId)]
      }, DY.clientChatMsgId)
    }))
  },
  36025: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => iY,
      e: () => yY,
      g: () => sY,
      h: () => uY
    });
    var FY = DY(8745),
      AY = DY(36032),
      IY = DY(36034),
      RY = DY(8111),
      OY = DY(1430),
      gY = DY(61),
      aY = DY(76),
      vY = DY(1125);

    function uY() {
      var YY;
      return (0, OY.k)(AY.d, (0, AY.n)()), (0, vY.jsx)(vY.Fragment, {
        children: null === (YY = (0, AY.n)()) || void 0 === YY ? void 0 : YY.content
      })
    }

    function sY(YY) {
      var rY;
      let {
        show: DY
      } = YY;
      (0, OY.k)(AY.d, (0, AY.n)());
      const aY = null === (rY = (0, AY.n)()) || void 0 === rY ? void 0 : rY.menu;
      return (0, gY.useEffect)((() => {
        var YY;
        DY || (null === aY || void 0 === aY || null === (YY = aY.onClose) || void 0 === YY || YY.call(aY), (0, IY.t)())
      }), [DY, aY]), (0, gY.useEffect)((() => DY ? (0, RY.f)(IY.y, IY.i) : void 0), [DY]), (0, vY.jsx)(FY.d, {
        showing: DY,
        globallyUniqueKey: "clientGameMenu",
        children: null === aY || void 0 === aY ? void 0 : aY.content
      })
    }

    function iY(YY) {
      let {
        placement: rY = "bottom"
      } = YY;
      return (0, vY.jsx)("div", {
        id: `clientGameHud-${rY}`,
        style: {
          display: "contents"
        }
      })
    }

    function yY(YY) {
      let {
        children: rY,
        placement: DY = "bottom"
      } = YY;
      const [FY, AY] = (0, gY.useState)(null);
      return (0, gY.useEffect)((() => {
        AY(document.getElementById(`clientGameHud-${DY}`))
      }), [DY]), FY ? (0, aY.createPortal)(rY, FY) : null
    }
  },
  36271: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      e: () => aY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1125);
    const OY = 200,
      gY = 160;

    function aY() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function vY(YY) {
      let {
        side: rY,
        defaultSize: DY,
        covers: AY,
        children: aY
      } = YY;
      const vY = (0, FY.useRef)(null),
        [uY, sY] = (0, FY.useState)(null),
        [iY, yY] = (0, FY.useState)(DY);
      iY !== DY && (yY(DY), sY(null));
      const QY = (0, FY.useRef)(null),
        oY = "top" === rY,
        WY = YY => oY ? YY.clientY : YY.clientX,
        EY = () => {
          QY.current = null
        };
      return (0, RY.jsxs)("div", {
        ref: vY,
        className: IY()("ResizableSidePanel", `ResizableSidePanel-${rY}`, {
          Covers: "always" === AY,
          CoversWhenNarrow: "narrow" === AY,
          Dragged: null !== uY
        }),
        style: {
          [oY ? "height" : "width"]: null !== uY && void 0 !== uY ? uY : DY
        },
        children: [aY, (0, RY.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": oY ? "horizontal" : "vertical",
          onPointerDown: YY => {
            if (0 !== YY.button) return;
            YY.preventDefault();
            const rY = vY.current,
              DY = Array.from(rY.parentElement.children).reduce(((YY, DY) => DY !== rY && "0" !== getComputedStyle(DY).flexGrow ? YY + (YY => oY ? YY.clientHeight : YY.clientWidth)(DY) : YY), 0),
              FY = oY ? rY.offsetHeight : rY.offsetWidth,
              AY = Math.min(OY, FY),
              IY = Math.max(AY, FY + Math.max(0, DY - gY));
            QY.current = {
              start: WY(YY),
              startSize: FY,
              minSize: AY,
              maxSize: IY
            }, YY.currentTarget.setPointerCapture(YY.pointerId)
          },
          onPointerMove: YY => {
            const DY = QY.current;
            if (!DY) return;
            const FY = "right" === rY ? DY.start - YY.clientX : WY(YY) - DY.start;
            sY(Math.min(DY.maxSize, Math.max(DY.minSize, DY.startSize + FY)))
          },
          onPointerUp: EY,
          onPointerCancel: EY,
          onLostPointerCapture: EY
        })]
      })
    }
  },
  36300: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => eY,
      D: () => AY,
      H: () => TY,
      d: () => mY,
      e: () => oY,
      h: () => yY,
      l: () => iY,
      m: () => EY,
      q: () => NY,
      t: () => VY,
      w: () => lY,
      z: () => SY
    });
    var FY = DY(61);
    const AY = 5e3,
      IY = 500,
      RY = 3e3;
    let OY = null,
      gY = null,
      aY = null;
    const vY = new Set;

    function uY(YY) {
      OY = YY;
      for (const rY of vY) rY()
    }

    function sY() {
      if (!OY || void 0 !== OY.endedAt) return;
      null !== gY && (clearTimeout(gY), gY = null), uY({
        ...OY,
        endedAt: Date.now()
      });
      const YY = aY;
      aY = null, null === YY || void 0 === YY || YY()
    }

    function iY(YY, rY) {
      let {
        submit: DY,
        reopen: FY
      } = rY;
      null !== gY && clearTimeout(gY), aY = FY, uY({
        ...YY,
        startedAt: Date.now(),
        errors: []
      }), gY = setTimeout(sY, RY), DY()
    }

    function yY() {
      OY && void 0 === OY.endedAt && void 0 === OY.ranAt && (null !== gY && clearTimeout(gY), uY({
        ...OY,
        ranAt: Date.now()
      }), gY = setTimeout(sY, AY))
    }
    const QY = 3;

    function oY(YY) {
      if (!OY || void 0 === OY.ranAt || void 0 !== OY.endedAt || OY.errors.includes(YY) || OY.errors.length >= QY) return;
      const rY = 0 === OY.errors.length;
      uY({
        ...OY,
        errors: [...OY.errors, YY]
      }), rY && (null !== gY && clearTimeout(gY), gY = setTimeout(sY, IY))
    }

    function WY(YY) {
      var rY;
      return (null === (rY = OY) || void 0 === rY ? void 0 : rY.chatKey) === YY ? OY : null
    }

    function EY(YY) {
      const rY = WY(YY);
      return rY && void 0 !== rY.endedAt ? (uY(null), rY) : null
    }

    function mY(YY) {
      var rY;
      (null === (rY = OY) || void 0 === rY ? void 0 : rY.chatKey) === YY && (null !== gY && (clearTimeout(gY), gY = null), aY = null, uY(null))
    }
    const VY = "These changes from your last answer didn't go in. Make them again.";

    function SY(YY) {
      const rY = [...new Set(YY)].slice(0, QY);
      return `Fix this in your change: when it ran, the world showed ${1===rY.length?"this error":"these errors"}: ${rY.join(" ")}`
    }

    function lY(YY) {
      return `Your change didn't go in, because the code wouldn't run at all: ${YY.join(" ")} Send the whole change again with that fixed.`
    }

    function TY(YY) {
      return `Fix this in your change: ${YY.join(" ")}`
    }

    function eY(YY) {
      var rY;
      if (void 0 === YY.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const DY = Math.max(1, Math.round(((null !== (rY = YY.endedAt) && void 0 !== rY ? rY : YY.ranAt) - YY.ranAt) / 1e3)),
        FY = `Your change ran in your world for ${DY} ${1===DY?"second":"seconds"}`;
      return 0 === YY.errors.length ? {
        title: "Tested: no errors",
        text: `${FY} without an error.`
      } : {
        title: 1 === YY.errors.length ? "Tested: it showed an error" : `Tested: it showed ${YY.errors.length} errors`,
        text: `${FY} and showed: ${YY.errors.join(" ")}`
      }
    }

    function NY(YY) {
      const [rY, DY] = (0, FY.useState)((() => WY(YY)));
      return (0, FY.useEffect)((() => {
        const rY = () => {
          DY(WY(YY))
        };
        return rY(), vY.add(rY), () => {
          vY.delete(rY)
        }
      }), [YY]), rY
    }
  },
  36308: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => FY
    });
    const FY = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function AY(YY, rY, DY) {
      return {
        key: YY,
        label: `Code block at ${rY.join(", ")}`,
        codeBlock: !0,
        pos: rY,
        canChangePos: DY
      }
    }
  },
  36293: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      e: () => IY,
      f: () => RY,
      g: () => AY
    });
    const FY = "code block",
      AY = "World Code/";

    function IY(YY) {
      return YY.trim().toLowerCase().startsWith(AY.toLowerCase())
    }

    function RY(YY) {
      return YY.trim().slice(AY.length).replace(/^\.?\//, "")
    }
  },
  36254: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => KY,
      D: () => BY,
      F: () => sY,
      I: () => CY,
      L: () => eY,
      M: () => NY,
      N: () => ZY,
      b: () => yY,
      e: () => gY,
      f: () => QY,
      i: () => cY,
      j: () => OY,
      m: () => vY,
      q: () => iY,
      u: () => oY,
      x: () => VY
    });
    var FY = DY(36244),
      AY = DY(36252);
    const IY = "bloxd-world-code-directory-sync",
      RY = "handles",
      OY = "[INVALID SCHEMATIC PLACEHOLDER]";

    function gY(YY, rY) {
      return `${YY}::${rY}`
    }
    const aY = new Set(["node_modules", ".git"]);

    function vY() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function uY() {
      return new Promise(((YY, rY) => {
        const DY = indexedDB.open(IY, 1);
        DY.onupgradeneeded = () => {
          const YY = DY.result;
          YY.objectStoreNames.contains(RY) || YY.createObjectStore(RY)
        }, DY.onsuccess = () => {
          YY(DY.result)
        }, DY.onerror = () => {
          var YY;
          rY(null !== (YY = DY.error) && void 0 !== YY ? YY : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function sY(YY, rY) {
      const DY = await uY();
      try {
        await new Promise(((FY, AY) => {
          const IY = DY.transaction(RY, "readwrite");
          IY.objectStore(RY).put(rY, YY), IY.oncomplete = () => {
            FY()
          }, IY.onerror = () => {
            var YY;
            AY(null !== (YY = IY.error) && void 0 !== YY ? YY : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        DY.close()
      }
    }
    async function iY(YY) {
      const rY = await uY();
      try {
        return await new Promise(((DY, FY) => {
          const AY = rY.transaction(RY, "readonly").objectStore(RY).get(YY);
          AY.onsuccess = () => {
            var YY;
            DY(null !== (YY = AY.result) && void 0 !== YY ? YY : null)
          }, AY.onerror = () => {
            var YY;
            FY(null !== (YY = AY.error) && void 0 !== YY ? YY : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        rY.close()
      }
    }
    async function yY(YY) {
      const rY = await uY();
      try {
        await new Promise(((DY, FY) => {
          const AY = rY.transaction(RY, "readwrite");
          AY.objectStore(RY).delete(YY), AY.oncomplete = () => {
            DY()
          }, AY.onerror = () => {
            var YY;
            FY(null !== (YY = AY.error) && void 0 !== YY ? YY : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        rY.close()
      }
    }
    async function QY(YY) {
      const rY = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await YY.queryPermission(rY) || "granted" === await YY.requestPermission(rY)
    }
    async function oY(YY) {
      if (!vY()) return null;
      try {
        const rY = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await sY(YY, rY), rY
      } catch (rY) {
        if (function(YY) {
            return YY instanceof DOMException && "AbortError" === YY.name
          }(rY)) return null;
        throw rY
      }
    }

    function WY(YY) {
      return YY.startsWith(".") || aY.has(YY)
    }

    function EY(YY) {
      if (!YY) return !0;
      const rY = YY.split("/");
      for (const DY of rY)
        if ("" === DY || "." === DY || ".." === DY) return !1;
      return !0
    }
    async function mY(YY, rY, DY) {
      for await (const [IY, RY] of YY.entries()) {
        if ("directory" === RY.kind) {
          if (WY(IY)) continue;
          const YY = rY ? `${rY}/${IY}` : IY;
          if (!EY(YY)) continue;
          await mY(RY, YY, DY);
          continue
        }
        const YY = rY ? `${rY}/${IY}` : IY;
        if (!(0, FY.p)(YY) && !(0, AY.c)(YY)) continue;
        const OY = await RY.getFile();
        DY[YY] = (0, AY.c)(YY) ? await HY(OY) : await OY.text()
      }
    }
    async function VY(YY) {
      const rY = {};
      return await mY(YY, "", rY), rY
    }

    function SY(YY) {
      return !(!YY || YY !== YY.trim() || YY.startsWith("/") || YY.includes("\\") || YY.includes("\0")) && EY(YY)
    }
    async function lY(YY, rY, DY) {
      const FY = rY.split("/"),
        AY = FY[FY.length - 1];
      let IY = YY;
      for (let RY = 0; RY < FY.length - 1; RY++) IY = await IY.getDirectoryHandle(FY[RY], {
        create: DY
      });
      return {
        dir: IY,
        fileName: AY
      }
    }
    async function TY(YY, rY, DY) {
      if (!SY(rY)) throw new Error(`Refusing to write unsafe path: ${rY}`);
      const {
        dir: FY,
        fileName: AY
      } = await lY(YY, rY, !0), IY = await FY.getFileHandle(AY, {
        create: !0
      }), RY = await IY.createWritable();
      await RY.write(DY), await RY.close()
    }
    async function eY(YY, rY, DY) {
      const FY = await async function(YY, rY) {
        if (!SY(rY)) return null;
        try {
          const {
            dir: DY,
            fileName: FY
          } = await lY(YY, rY, !1), AY = await DY.getFileHandle(FY), IY = await AY.getFile();
          return await IY.text()
        } catch (DY) {
          if (DY instanceof DOMException && ("NotFoundError" === DY.name || "NotAllowedError" === DY.name)) return null;
          throw DY
        }
      }(YY, rY);
      FY !== DY && await TY(YY, rY, DY)
    }
    async function NY(YY, rY, DY) {
      if (!(0, FY.p)(rY) && !(0, AY.c)(rY)) throw new Error(`Refusing to write non-allowlisted path: ${rY}`);
      if ((0, AY.c)(rY)) {
        if (await zY(YY, rY) === OY) throw new Error(`Move the binary schematic ${rY} outside the linked folder before syncing its placeholder`)
      }
      await TY(YY, rY, DY)
    }
    async function BY(YY, rY) {
      if (!SY(rY)) throw new Error(`Refusing to remove unsafe path: ${rY}`);
      try {
        const {
          dir: DY,
          fileName: FY
        } = await lY(YY, rY, !1);
        await DY.removeEntry(FY)
      } catch (DY) {
        if (DY instanceof DOMException && ("NotFoundError" === DY.name || "NotAllowedError" === DY.name)) return;
        throw DY
      }
    }
    async function cY(YY, rY) {
      if (!SY(rY)) return null;
      try {
        const DY = rY.split("/");
        let FY = YY;
        for (const YY of DY) FY = await FY.getDirectoryHandle(YY);
        return FY
      } catch (DY) {
        if (DY instanceof DOMException && ("NotFoundError" === DY.name || "NotAllowedError" === DY.name)) return null;
        throw DY
      }
    }
    async function KY(YY, rY) {
      if ((0, FY.p)(rY) || (0, AY.c)(rY)) {
        if ((0, AY.c)(rY)) {
          if (await zY(YY, rY) === OY) throw new Error(`Refusing to remove a binary schematic: ${rY}`)
        }
        await BY(YY, rY)
      }
    }
    async function HY(YY) {
      if (YY.size > 64) return OY;
      const rY = await YY.text();
      return Array.from(rY).some((YY => {
        const rY = YY.charCodeAt(0);
        return rY < 9 || rY > 13 && rY < 32 || 65533 === rY
      })) ? OY : rY
    }
    async function zY(YY, rY) {
      try {
        const {
          dir: DY,
          fileName: FY
        } = await lY(YY, rY, !1);
        return await HY(await (await DY.getFileHandle(FY)).getFile())
      } catch (DY) {
        if (DY instanceof DOMException && "NotFoundError" === DY.name) return null;
        throw DY
      }
    }
    async function ZY(YY, rY) {
      const DY = await VY(YY);
      for (const FY of Object.keys(DY)) FY in rY || (0, AY.c)(FY) || await KY(YY, FY);
      for (const [IY, RY] of Object.entries(rY))((0, FY.p)(IY) || (0, AY.c)(IY)) && await NY(YY, IY, RY)
    }

    function CY(YY, rY) {
      var DY, FY;
      let AY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const IY = null !== (DY = AY.debounceMs) && void 0 !== DY ? DY : 300,
        RY = null !== (FY = AY.pollMs) && void 0 !== FY ? FY : 1e3;
      let OY = !1,
        gY = null,
        aY = null,
        vY = null;
      const uY = () => {
          OY || (gY && clearTimeout(gY), gY = setTimeout((() => {
            gY = null, sY()
          }), IY))
        },
        sY = async () => {
          if (!OY) try {
            if (!await QY(YY, "readwrite")) return;
            const DY = await VY(YY);
            OY || rY(DY)
          } catch (DY) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", DY)
          }
        };
      sY();
      const iY = window.FileSystemObserver;
      if (iY) try {
        vY = new iY((() => {
          uY()
        })), vY.observe(YY, {
          recursive: !0
        })
      } catch (yY) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", yY), vY = null
      }
      return vY || (aY = setInterval((() => {
        uY()
      }), RY)), () => {
        OY = !0, gY && clearTimeout(gY), aY && clearInterval(aY), vY && vY.disconnect()
      }
    }
  },
  4408: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => oY,
      d: () => WY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(1211),
      OY = DY(4410),
      gY = DY(1778),
      aY = DY(2282),
      vY = DY(4419),
      uY = DY(1125);
    const sY = new WeakMap;
    let iY = 0;

    function yY(YY) {
      let rY = sY.get(YY);
      return void 0 === rY && (rY = iY++, sY.set(YY, rY)), rY
    }

    function QY(YY) {
      let {
        piece: rY
      } = YY;
      return "space" === rY.kind ? (0, uY.jsx)(uY.Fragment, {
        children: rY.text
      }) : (0, uY.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${rY.delayMs}ms`
        },
        children: (0, uY.jsx)(OY.c, {
          text: "icon" === rY.kind ? `[[${rY.icon}]]` : rY.text
        })
      })
    }

    function oY(YY) {
      let {
        display: rY
      } = YY;
      const {
        selectedLanguage: DY
      } = (0, RY.C)(), FY = (0, IY.useMemo)((() => (0, vY.e)((0, vY.g)(rY).plan.pieces)), [rY, DY.code]);
      return (0, uY.jsxs)("div", {
        className: AY()("Dialogue", {
          DialogueAnimateIn: !1 !== rY.animateIn
        }),
        children: [rY.speakerName && (0, uY.jsx)(gY.b, {
          text: rY.speakerName,
          className: "DialogueSpeaker"
        }), (0, uY.jsx)("p", {
          className: "DialogueLine",
          children: FY.map(((YY, rY) => 1 === YY.length && "space" === YY[0].kind ? YY[0].text : (0, uY.jsx)("span", {
            className: "DialogueGlue",
            children: YY.map(((YY, rY) => (0, uY.jsx)(QY, {
              piece: YY
            }, rY)))
          }, rY)))
        })]
      })
    }
    const WY = (0, IY.memo)((function() {
      const YY = (0, aY.j)("dialogue");
      return (0, uY.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: YY && (0, uY.jsx)(oY, {
          display: YY
        }, yY(YY))
      })
    }))
  },
  36114: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => iY,
      g: () => yY
    });
    var FY = DY(61),
      AY = DY(2620),
      IY = DY(1430),
      RY = DY(1834),
      OY = DY(36052),
      gY = DY(625),
      aY = DY(1092),
      vY = DY.n(aY),
      uY = DY(1125);
    const sY = {},
      iY = (0, FY.memo)((function() {
        const YY = (0, AY.c)();
        return (0, IY.g)("damagedByOtherPlayer", (rY => {
          let {
            QF: DY,
            direction: FY
          } = rY;
          const AY = DY || "nonDirectional";
          if (sY[AY]) {
            const rY = sY[AY];
            clearTimeout(rY.timeout), rY.direction = FY, rY.timeout = setTimeout((() => {
              delete sY[AY], YY()
            }), 800)
          } else sY[AY] = {
            direction: FY,
            DH: null,
            timeout: setTimeout((() => {
              delete sY[AY], YY()
            }), 800)
          };
          YY()
        })), (0, RY.c)("kill", (rY => {
          let {
            killer: DY,
            victim: FY
          } = rY;
          const AY = FY.id;
          DY.local && AY && AY in sY && (clearTimeout(sY[AY].timeout), delete sY[AY], YY())
        })), (0, FY.useEffect)((() => {
          const YY = (0, OY.g)("turnDamageIndicators", yY);
          return () => {
            YY();
            for (const YY in sY) clearTimeout(sY[YY].timeout), delete sY[YY]
          }
        }), []), (0, uY.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(sY).map((YY => {
            let [rY, DY] = YY;
            const FY = (0, gY.H)(DY.direction);
            return (0, uY.jsx)("div", {
              ref: YY => {
                sY[rY] && (sY[rY].DH = YY)
              },
              className: vY()("DamageIndicator", {
                DamageIndicatorFullCircle: FY
              })
            }, rY)
          }))
        })
      }));

    function yY(YY) {
      for (const rY in sY) {
        const {
          direction: DY,
          DH: FY
        } = sY[rY];
        if ((0, gY.H)(DY)) continue;
        const AY = DY - YY;
        FY.style.rotate = `${AY}rad`
      }
    }
  },
  8202: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => zY,
      i: () => BY,
      l: () => cY
    });
    var FY = DY(61),
      AY = DY(4097),
      IY = DY(1152),
      RY = DY(1430),
      OY = DY(25),
      gY = DY(2984),
      aY = DY(2099),
      vY = DY(1244),
      uY = DY(8236),
      sY = DY(1808),
      iY = DY(1834),
      yY = DY(1211),
      QY = DY(19),
      oY = DY(1619),
      WY = DY(1092),
      EY = DY.n(WY),
      mY = DY(8208),
      VY = DY(8216),
      SY = DY(8225),
      lY = DY(8104),
      TY = DY(8230),
      eY = (DY(8233), DY(1125));
    let NY = null;

    function BY() {
      return null !== NY
    }

    function cY() {
      return "pad" === NY
    }

    function KY() {
      return "inGame" === QY.b.get("gameState") && !(0, oY.p)()
    }

    function HY(YY) {
      return (0, VY.x)(YY, vY.m, VY.f, VY.i, VY.m)
    }
    const zY = (0, FY.memo)((function() {
      const {
        t: YY
      } = (0, yY.C)(), {
        userContext: rY
      } = (0, IY.d)(), [DY, QY] = (0, FY.useState)(null), [WY, BY] = (0, FY.useState)(null), cY = (0, FY.useRef)(null), zY = (0, FY.useCallback)((YY => {
        cY.current = YY, BY(YY)
      }), []), ZY = (0, FY.useRef)(0), CY = (0, FY.useRef)(null), fY = (0, FY.useRef)({
        x: 0,
        y: 0
      }), [jY, hY] = (0, FY.useState)(0), dY = (0, FY.useMemo)((() => function(YY) {
        const rY = [];
        for (let FY = 0; FY < vY.m; FY++) {
          var DY;
          rY.push(null !== (DY = YY[FY]) && void 0 !== DY ? DY : null)
        }
        return rY
      }((0, uY.f)(rY.getPlayerCosmetics().emote))), [rY, jY]);
      (0, iY.c)("cosmeticsUpdated", (YY => {
        YY.some((YY => YY.local && "emote" === YY.rY)) && hY((YY => YY + 1))
      }));
      const JY = (0, FY.useRef)(!1),
        MY = (0, FY.useCallback)((function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === YY && (0, SY.h)(), JY.current = rY, fY.current = {
            x: 0,
            y: 0
          }, zY(null), QY(YY)
        }), [zY]),
        wY = (0, FY.useCallback)((() => {
          QY(null), zY(null), fY.current = {
            x: 0,
            y: 0
          }
        }), [zY]),
        bY = (0, FY.useCallback)((YY => {
          if (Date.now() < ZY.current) return;
          const rY = (0, aY.h)(YY),
            DY = !!rY.holdUntilMove,
            FY = DY ? 600 : Math.ceil(1e3 * rY.animation.animation_length / aY.c) + 200;
          ZY.current = Date.now() + FY, CY.current = YY, sY.gameBridge.send("playEmote", YY), sY.gameBridge.send("applyTemporaryThirdPerson", DY ? {} : {
            durationMs: FY
          })
        }), []);
      (0, RY.g)("requestToggleEmoteWheel", (() => {
        null === DY ? KY() && MY("click") : wY()
      })), (0, RY.g)("requestEmoteWheelHoldOpen", (() => {
        null === DY && KY() && MY((0, mY.b)() ? "hold" : "click")
      })), (0, RY.g)("requestEmoteWheelPadOpen", (YY => {
        null !== DY || !KY() || (0, lY.d)() || (0, TY.o)() || MY("pad", YY)
      })), (0, RY.g)("requestEmoteRepeatLast", (() => {
        if (null !== DY || !KY() || (0, lY.d)() || (0, TY.o)()) return;
        const YY = CY.current;
        null !== YY && dY.includes(YY) ? bY(YY) : MY("pad", !0)
      }));
      const XY = () => {
        const YY = cY.current,
          rY = null !== YY ? dY[YY] : null;
        null !== rY && "pad" === DY && Date.now() < ZY.current || (wY(), null !== rY && bY(rY))
      };
      (0, RY.g)("emoteWheelPadAim", (YY => {
        if ("pad" !== DY) return;
        const rY = (0, VY.I)(YY, vY.m, cY.current);
        zY(null !== rY && null !== dY[rY] ? rY : null)
      })), (0, RY.g)("requestEmoteWheelPadCommit", (YY => {
        "pad" !== DY || YY && JY.current || XY()
      })), (0, RY.g)("appManagerUpdated|activeInputDevice", (YY => {
        null !== DY && "pad" === DY !== ("gamepad" === YY) && wY()
      })), (0, FY.useLayoutEffect)((() => (NY = DY, (0, gY.v)("emoteWheel", "pad" === DY), OY.g.vo(gY.n), () => {
        NY = null, (0, gY.v)("emoteWheel", !1), OY.g.vo(gY.n)
      })), [DY]), (0, RY.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === DY && XY()
      })), (0, RY.g)("requestEmoteWheelClose", (() => {
        null !== DY && wY()
      })), (0, RY.g)("appManagerUpdated|gameState", (YY => {
        "inGame" !== YY && wY()
      }));
      const qY = () => {
        (0, oY.p)() && wY()
      };
      if ((0, RY.g)("appManagerUpdated|openEverythingMenuName", qY), (0, RY.g)("appManagerUpdated|openInGameMenuName", qY), (0, RY.g)("pointerLockUpdate", (YY => {
          YY || "hold" !== DY || wY()
        })), (0, FY.useEffect)((() => {
          if (null === DY) return;
          const YY = YY => {
            "Escape" === YY.key && (YY.stopImmediatePropagation(), YY.preventDefault(), wY())
          };
          return document.addEventListener("keydown", YY, !0), () => {
            document.removeEventListener("keydown", YY, !0)
          }
        }), [DY, wY]), (0, AY.b)(!0, "click" === DY, "EmoteWheelOverlay"), (0, FY.useEffect)((() => {
          if ("hold" === DY) return sY.gameBridge.send("holdEmoteWheel", !0), () => {
            sY.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [DY]), (0, FY.useEffect)((() => {
          if ("hold" !== DY) return;
          const YY = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            rY = VY.t * YY,
            FY = VY.r * YY,
            AY = YY => {
              let DY = fY.current.x + YY.movementX,
                AY = fY.current.y + YY.movementY;
              const IY = Math.hypot(DY, AY);
              if (IY > rY) {
                const YY = rY / IY;
                DY *= YY, AY *= YY
              }
              fY.current = {
                x: DY,
                y: AY
              }, zY(function(YY, rY, DY, FY) {
                if (Math.hypot(YY, rY) < DY) return null;
                const AY = (0, VY.B)(YY, rY, vY.m);
                return null === FY[AY] ? null : AY
              }(DY, AY, FY, dY))
            };
          return document.addEventListener("mousemove", AY), () => {
            document.removeEventListener("mousemove", AY)
          }
        }), [DY, dY, zY]), null === DY) return null;
      const pY = "hold" === DY || "pad" === DY,
        kY = null !== WY ? dY[WY] : null,
        GY = null !== kY ? (0, aY.h)(kY).displayName : YY("emotes:pickEmote");
      return (0, eY.jsx)("div", {
        className: EY()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === DY
        }),
        onMouseDown: YY => {
          YY.target === YY.currentTarget && wY()
        },
        children: (0, eY.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * VY.t + "rem",
            height: 2 * VY.t + "rem"
          },
          children: [(0, eY.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${VY.q} ${VY.q}`,
            children: [dY.map(((rY, DY) => {
              const FY = null !== rY,
                AY = pY && DY === WY;
              return (0, eY.jsx)("path", {
                d: HY(DY),
                className: EY()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: AY,
                  EmoteWheelWedgeDisabled: !FY
                }),
                onClick: YY => {
                  YY.stopPropagation(), null !== rY && (YY => {
                    wY(), bY(YY)
                  })(rY)
                },
                "aria-label": null !== rY ? (0, aY.h)(rY).displayName : YY("emotes:emptySlot")
              }, DY)
            })), (0, eY.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: VY.f,
              cy: VY.f,
              r: VY.m
            }), (0, eY.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: VY.f,
              cy: VY.f,
              r: VY.i
            }), pY && null !== WY && (0, eY.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: HY(WY)
            })]
          }), dY.map(((YY, rY) => {
            const DY = null !== YY,
              FY = pY && rY === WY,
              AY = (0, VY.E)(rY, vY.m),
              IY = VY.b * Math.cos(AY),
              RY = VY.b * Math.sin(AY);
            return (0, eY.jsx)("div", {
              className: EY()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: FY,
                EmoteWheelSlotIconDisabled: !DY
              }),
              style: {
                left: `calc(50% + ${IY}rem)`,
                top: `calc(50% + ${RY}rem)`,
                backgroundImage: DY ? `url(/textures/charSkins/previews/emote_${YY}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, rY)
          })), (0, eY.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: GY
          })]
        })
      })
    }))
  },
  35982: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => oY
    });
    var FY = DY(61),
      AY = DY(76),
      IY = DY(1211),
      RY = DY(1092),
      OY = DY.n(RY),
      gY = DY(1699),
      aY = DY(1098),
      vY = DY(1284),
      uY = DY(1450),
      sY = DY(1646),
      iY = DY(1447),
      yY = DY(1125);
    const QY = 14;

    function oY(YY) {
      let {
        className: rY,
        triggerElementRef: DY,
        options: RY
      } = YY;
      const {
        t: oY
      } = (0, IY.C)(), [WY, EY] = (0, FY.useState)(!1), [mY, VY] = (0, FY.useState)({
        x: 0,
        y: 0
      }), SY = (0, FY.useRef)(null);
      (0, FY.useEffect)((() => {
        let YY = null;
        const rY = rY => {
            YY = {
              x: rY.clientX,
              y: rY.clientY
            }
          },
          FY = rY => {
            if (null === YY || !(0, iY.b)(YY, rY)) return;
            YY = null;
            const DY = QY * (0, gY.getRemInPx)();
            VY({
              x: Math.min(rY.clientX, window.innerWidth - DY - 5),
              y: rY.clientY
            }), EY((YY => !YY))
          },
          AY = YY => {
            var rY;
            null !== (rY = SY.current) && void 0 !== rY && rY.contains(YY.relatedTarget) || EY(!1)
          },
          IY = DY.current;
        return IY.addEventListener("pointerdown", rY), IY.addEventListener("pointerup", FY), IY.addEventListener("mouseleave", AY), () => {
          IY.removeEventListener("pointerdown", rY), IY.removeEventListener("pointerup", FY), IY.removeEventListener("mouseleave", AY)
        }
      }), [DY]), (0, FY.useEffect)((() => {
        if (WY) return (0, sY.c)("pointerdown", (YY => {
          !SY.current || SY.current.contains(YY.target) || DY.current.contains(YY.target) || EY(!1)
        }))
      }), [WY, DY]), (0, FY.useLayoutEffect)((() => {
        if (!WY || !SY.current) return;
        const YY = SY.current.getBoundingClientRect().height,
          rY = Math.max(5, window.innerHeight - YY - 5);
        mY.y > rY && VY({
          x: mY.x,
          y: rY
        })
      }), [WY, mY]), (0, vY.t)("popup", SY, (() => {
        EY(!1)
      }), WY);
      const lY = RY.filter((YY => !1 !== YY.show));
      return WY && 0 !== lY.length ? (0, AY.createPortal)((0, yY.jsx)("div", {
        ref: SY,
        className: OY()("FloatingActions", {
          [rY]: rY
        }),
        style: {
          width: `${QY}rem`,
          top: mY.y,
          left: mY.x
        },
        children: lY.map((YY => {
          let {
            icon: rY,
            text: DY,
            onPointerDown: FY,
            analyticsClick: AY
          } = YY;
          return (0, yY.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: YY => {
              void 0 !== AY && (0, uY.reportAnalyticsClick)(AY), FY(YY), EY(!1), YY.stopPropagation()
            },
            children: [(0, yY.jsx)(aY.e, {
              name: rY
            }), (0, yY.jsx)("div", {
              children: oY(DY)
            })]
          }, DY)
        }))
      }), function() {
        var YY;
        return null !== (YY = document.querySelector(".WholeAppWrapperInner")) && void 0 !== YY ? YY : document.body
      }()) : null
    }
  },
  36132: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sR
    });
    var FY = DY(36025),
      AY = DY(61),
      IY = DY(1926),
      RY = DY(4086),
      OY = DY(4093),
      gY = DY(2282),
      aY = DY(1808),
      vY = DY(1125);

    function uY(YY) {
      let {
        className: rY,
        style: DY,
        vw: FY,
        maxPx: AY,
        children: IY
      } = YY;
      console.assert("number" === typeof FY && "number" === typeof AY, "vw and maxPx passed to Text must be numbers");
      const RY = window.innerWidth * (FY / 100) > AY ? `${AY}px` : `${FY}vw`;
      return (0, vY.jsx)("div", {
        className: rY,
        style: {
          ...DY,
          fontSize: RY
        },
        children: IY
      })
    }
    var sY = DY(36135),
      iY = DY(1437),
      yY = DY(25),
      QY = DY(1823),
      oY = DY(1098);

    function WY(YY) {
      let {
        tasks: rY,
        lastDisplayedTasks: DY
      } = YY;
      return (0, vY.jsx)(vY.Fragment, {
        children: Object.keys(rY).map((YY => (0, vY.jsx)(EY, {
          task: rY[YY],
          lastDisplayedAs: DY[YY]
        }, rY[YY].text)))
      })
    }

    function EY(YY) {
      let {
        task: rY,
        lastDisplayedAs: DY
      } = YY;
      const [FY, IY] = (0, AY.useState)(null !== DY && void 0 !== DY && DY.progress ? DY.progress / rY.goal : 0), [RY, OY] = (0, AY.useState)(!1), [gY, aY] = (0, AY.useState)(rY.claimed || !1);
      return (0, AY.useEffect)((() => {
        IY(rY.progress / rY.goal)
      }), [rY.progress, rY.goal]), gY ? null : (0, vY.jsxs)("div", {
        className: "Task",
        children: [(0, vY.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, vY.jsx)(uY, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: rY.text
          })
        }), rY.progress < rY.goal ? (0, vY.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== FY ? (0, vY.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * FY + "%"
            }
          }) : null, (0, vY.jsx)("div", {
            className: "TaskProgressText",
            children: `${rY.progress}/${rY.goal}`
          })]
        }) : (0, vY.jsx)(iY.n, {
          className: "ClaimRewardButton",
          onClick: () => {
            OY(!0)
          },
          children: (0, vY.jsx)(uY, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), RY ? (0, vY.jsx)(mY, {
          task: rY,
          close: () => {
            rY.claimed = !0, aY(!0), OY(!1)
          }
        }) : null]
      })
    }

    function mY(YY) {
      let {
        task: rY,
        close: DY
      } = YY;
      const [FY, IY] = (0, AY.useState)({}), [RY, OY] = (0, AY.useState)("closed");
      (0, AY.useEffect)((() => {
        let YY;
        return "animStart" === RY && (YY = setTimeout((() => {
          OY("animEnd")
        }), 700)), () => {
          clearTimeout(YY)
        }
      }), [RY]), (0, sY.e)((() => {
        aY.gameBridge.send("completeTask", rY.text)
      }));
      const uY = (0, gY.j)("currencyAmounts");
      return (0, vY.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === RY)
            if (0 === rY.rewards.length) DY(), aY.gameBridge.send("completeTask", rY.text);
            else {
              const YY = {
                ...QY.b.get("currencyAmounts")
              };
              for (const rY in FY) YY[rY] = {
                ...YY[rY],
                amount: YY[rY].amount + FY[rY]
              };
              QY.b.apply({
                currencyAmounts: YY
              }), OY("closed")
            }
          else "closed" === RY && (IY(rY.rewards.pop()), OY("animStart"))
        },
        children: [(0, vY.jsx)("img", {
          className: "Chest",
          alt: "closed" !== RY ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==RY?"open":"closed"}.png`
        }), (0, vY.jsx)("div", {
          className: "Rewards",
          children: "closed" !== RY ? Object.keys(FY).map((YY => {
            const rY = null === uY || void 0 === uY ? void 0 : uY[YY];
            return !rY || rY.hidden ? null : (0, vY.jsxs)("div", {
              className: "Reward",
              children: [(0, vY.jsx)(oY.e, {
                name: rY.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: rY.iconColour
                }
              }), (0, vY.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === RY ? 0 : FY[YY]
              })]
            }, YY)
          })) : null
        }), "animStart" === RY ? (0, vY.jsx)(VY, {}) : null, (0, vY.jsx)("div", {
          className: "ChestsLeft",
          children: rY.rewards.length
        })]
      })
    }

    function VY() {
      const [YY, rY] = (0, AY.useState)(0);
      (0, AY.useEffect)((() => {
        rY(1)
      }), []);
      return (0, vY.jsx)(vY.Fragment, {
        children: Array.from({
          length: 40
        }).map(((rY, DY) => (0, vY.jsx)(oY.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * YY * Math.cos(DY / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * YY * Math.sin(DY / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === YY ? 1 : 0
          }
        }, DY)))
      })
    }
    yY.g.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const YY = new Image,
          rY = new Image;
        YY.src = "/textures/miscImages/Treasure Chest open.png", rY.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var SY = DY(2722),
      lY = DY(1152),
      TY = DY(1778),
      eY = DY(1430),
      NY = DY(341),
      BY = DY(1834),
      cY = DY(1337);

    function KY(YY) {
      var rY, DY;
      let {
        byId: FY,
        localId: AY
      } = YY;
      return null === AY ? null : null !== (rY = null === (DY = FY[AY]) || void 0 === DY ? void 0 : DY.name) && void 0 !== rY ? rY : null
    }

    function HY(YY) {
      let {
        lbStats: rY,
        storedState: DY = {}
      } = YY;
      const {
        userContext: FY
      } = (0, lY.d)(), IY = (0, BY.f)("players", KY), [RY, OY] = (0, AY.useState)(DY.selectedCat || (null === rY || void 0 === rY ? void 0 : rY[0]) || null), [gY, uY] = (0, AY.useState)(DY.selectedTimeframe || "Today"), [sY, iY] = (0, AY.useState)(null);
      (0, AY.useEffect)((() => {
        null === RY && null !== rY && rY.length > 0 && OY(rY[0])
      }), [rY, RY]);
      const [yY, QY] = (0, AY.useState)(DY.seeingTop || !1), [oY, WY] = (0, AY.useState)(!1), EY = (0, AY.useCallback)((() => {
        null !== RY && null !== gY && (aY.gameBridge.send("requestLeaderboard", {
          category: RY.value,
          timeframe: gY,
          seeTop: yY
        }), VY(!0), CY && fY(null))
      }), [RY, gY, DY, yY]);
      (0, AY.useEffect)((() => {
        EY(), DY.selectedCat = RY, DY.selectedTimeframe = gY, DY.seeingTop = yY
      }), [RY, gY, DY, yY, EY]), (0, AY.useEffect)((() => {
        if ((null === sY || void 0 === sY ? void 0 : sY.length) > 0)
          if (yY) yY && WY(null === HY(sY));
          else {
            for (const YY of sY)
              if (1 === YY.place) return void WY(!1);
            WY(!0)
          }
      }), [sY, yY]), (0, eY.g)("leaderboardResponse", (YY => {
        let {
          category: DY,
          timeframe: FY,
          data: AY
        } = YY;
        for (let IY = 0; IY < rY; IY++)
          if (rY[IY].value === DY) {
            OY(rY[IY]);
            break
          } uY(FY), iY(AY), VY(!1)
      }));
      const [mY, VY] = (0, AY.useState)(!0);

      function HY(YY) {
        const rY = KY(aY.gameBridge.latest("players"));
        for (let DY = 0; DY < YY.length; DY++)
          if (YY[DY].name === rY) return YY[DY].place;
        return null
      }
      const [zY, ZY] = (0, AY.useState)(!1), [CY, fY] = (0, AY.useState)(null);
      (0, AY.useEffect)((() => {
        if (sY && !zY) {
          const YY = HY(sY);
          YY < (DY.lastSeenPlayerPlace || 0) && fY(DY.lastSeenPlayerPlace - YY), ZY(!0)
        }
      }), [sY, DY, zY]), (0, AY.useEffect)((() => () => {
        sY && (DY.lastSeenPlayerPlace = HY(sY))
      }), [sY, DY]);
      const jY = (0, AY.useRef)(null),
        [hY, dY] = (0, AY.useState)(void 0);
      return (0, AY.useEffect)((() => {
        var YY, rY;
        hY !== (null === (YY = jY.current) || void 0 === YY ? void 0 : YY.offsetHeight) && dY(null === (rY = jY.current) || void 0 === rY ? void 0 : rY.offsetHeight)
      })), FY.isLoggedIn() ? (0, vY.jsxs)(vY.Fragment, {
        children: [(0, vY.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, vY.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, vY.jsx)(SY.b, {
              options: rY.map((YY => ({
                label: YY.label,
                value: YY.value
              }))),
              value: RY,
              onChange: YY => {
                OY(YY)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, vY.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, vY.jsx)(SY.b, {
              options: NY.Nc.map((YY => ({
                value: YY,
                label: YY,
                className: "LBDropdownMenuItem"
              }))),
              value: gY,
              onChange: YY => {
                uY(YY.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), oY ? (0, vY.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              QY(!yY)
            },
            children: yY ? "See Yourself" : "See Top"
          }) : null]
        }), (0, vY.jsx)("div", {
          className: "LBTableWrapper",
          children: mY ? (0, vY.jsx)("div", {
            className: "LoaderContainer",
            children: (0, vY.jsx)(cY.c, {})
          }) : null === CY ? (0, vY.jsx)(vY.Fragment, {
            children: (0, vY.jsxs)("table", {
              className: "LBTable",
              children: [(0, vY.jsx)("thead", {
                className: "LBTableTHead",
                ref: jY,
                children: (0, vY.jsxs)("tr", {
                  children: [(0, vY.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, vY.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, vY.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: RY.label.toUpperCase()
                  })]
                })
              }), (0, vY.jsx)("tbody", {
                children: sY.map((YY => (0, vY.jsxs)("tr", {
                  className: "LBTableTR " + (YY.name === IY ? "LBTableTRYou" : ""),
                  children: [(0, vY.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${YY.place}`
                  }), (0, vY.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, vY.jsx)(TY.b, {
                      text: [{
                        entityName: YY.name
                      }]
                    })
                  }), (0, vY.jsx)("td", {
                    className: "LBTableTD",
                    children: YY.stat
                  })]
                }, YY.name)))
              })]
            })
          }) : (0, vY.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              fY(null)
            },
            children: (0, vY.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, vY.jsx)("div", {
                className: "TriangleUp"
              }), (0, vY.jsx)("div", {
                className: "LBIncreaseText",
                children: `${CY} Place${CY>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, vY.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, vY.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, vY.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var zY = DY(1143),
      ZY = DY(99),
      CY = DY(40),
      fY = DY(2975);
    const jY = (0, AY.memo)((function(YY) {
      let {
        show: rY,
        onClose: DY
      } = YY;
      (0, zY.c)();
      const FY = (0, gY.j)("_tasks"),
        IY = (0, gY.j)("_availableLeaderboards"),
        [aY, uY] = (0, AY.useState)({});
      FY && Object.keys(FY).length > 0 && 0 === Object.keys(aY).length && uY(FY);
      const [sY] = (0, AY.useState)({
        tasks: {},
        leaderboard: {}
      }), iY = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!FY && Object.keys(FY).length > 0,
          content: (0, vY.jsx)(WY, {
            tasks: FY,
            lastDisplayedTasks: aY
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === IY || void 0 === IY ? void 0 : IY.length) > 0,
          content: (0, vY.jsx)(HY, {
            lbStats: IY,
            storedState: sY.leaderboard
          })
        }
      };

      function yY() {
        for (const YY in iY)
          if (iY[YY].getIsDefined()) return YY;
        return null
      }
      const [QY, oY] = (0, AY.useState)(yY());

      function EY() {
        uY({
          ...FY
        }), DY()
      }(0, AY.useEffect)((() => {
        QY || oY(yY())
      }), [yY()]), (0, OY.c)(!0, QY && rY), (0, AY.useEffect)((() => {
        rY && !QY && (console.log("CLOSE"), EY())
      }), [rY, QY]);
      const [mY, VY] = (0, AY.useState)(!1);
      return (0, AY.useEffect)((() => {
        rY && QY && !mY && VY(!0)
      }), [rY, mY, QY]), (0, AY.useEffect)((() => {
        !mY && FY && "tasks" !== QY && oY("tasks")
      }), [mY, FY, QY]), (0, vY.jsx)(vY.Fragment, {
        children: QY ? (0, vY.jsx)(fY.b, {
          className: "RetentionFeaturesWrapper",
          show: rY,
          children: (0, vY.jsxs)(RY.e, {
            close: EY,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, vY.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, vY.jsx)(dY, {}), (0, vY.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, vY.jsx)(hY, {
                  setCategory: oY,
                  menuCategories: iY,
                  selectedCat: QY
                }), (0, vY.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: iY[QY].content
                })]
              })]
            }), (0, vY.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: ZY.featureFlags.useDiscord && (0, vY.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, vY.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, vY.jsx)(JY, {
                    tasks: FY
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function hY(YY) {
      let {
        selectedCat: rY,
        setCategory: DY,
        menuCategories: FY
      } = YY;
      return (0, vY.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(FY).map((YY => FY[YY].getIsDefined() ? (0, vY.jsx)("div", {
          className: "MenuHeaderCategory " + (YY === rY ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            DY(YY)
          },
          children: FY[YY].Title
        }, YY) : null))
      })
    }

    function dY() {
      const YY = (0, gY.j)("currencyAmounts");
      return (0, vY.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== YY && void 0 !== YY ? YY : {}).map((rY => {
          const DY = YY[rY];
          return DY.hidden ? null : (0, vY.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, vY.jsx)(oY.e, {
              name: DY.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: DY.iconColour
              }
            }), (0, vY.jsx)("div", {
              className: "UiCurrencyAmount",
              children: DY.amount
            })]
          }, rY)
        }))
      })
    }

    function JY(YY) {
      let {
        tasks: rY
      } = YY;
      return (0, vY.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, vY.jsx)(oY.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            CY.m.setItem("DiscordPressed", !0), aY.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in rY && yY.g.vo("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, vY.jsx)(IY.b, {})]
      })
    }
    var MY = DY(19),
      wY = DY(1619),
      bY = DY(35965),
      XY = DY(8649),
      qY = DY(4201),
      pY = DY(183),
      kY = DY(1226),
      GY = DY(1354),
      xY = DY(2397),
      nY = DY(1211),
      PY = DY(1623),
      UY = DY(2233),
      LY = DY(2223),
      tY = DY(1966),
      Yr = DY(1893),
      rr = DY(1267),
      Dr = DY(1450),
      Fr = DY(4147);

    function Ar(YY) {
      const rY = {
        lobbyName: YY,
        answer: null,
        response: Fr.e.getSocialSettings(YY)
      };
      return rY.response.then((YY => {
        rY.answer = YY
      })), rY
    }
    const Ir = new Map;

    function Rr(YY) {
      const [rY] = (0, AY.useState)((() => function(YY) {
        var rY;
        const DY = null !== (rY = Ir.get(YY)) && void 0 !== rY ? rY : null;
        return null !== DY && void 0 !== DY && DY.answer && "error" in DY.answer ? null : DY
      }(YY))), [DY, FY] = (0, AY.useState)((() => null !== rY && void 0 !== rY && rY.answer && "settings" in rY.answer ? rY.answer.settings : null)), [IY, RY] = (0, AY.useState)(!0), [OY, gY] = (0, AY.useState)(null !== DY), aY = (0, AY.useRef)(DY);
      aY.current = DY;
      const vY = (0, AY.useRef)(0),
        uY = (0, AY.useRef)(0),
        sY = (0, AY.useRef)(!1),
        iY = (0, AY.useRef)(!0),
        yY = (0, AY.useCallback)((async rY => {
          const DY = ++vY.current,
            AY = await (null !== rY && void 0 !== rY ? rY : Fr.e.getSocialSettings(YY));
          iY.current && DY === vY.current && (gY(!0), RY(!1), "error" in AY || FY(AY.settings))
        }), [YY]),
        QY = (0, AY.useCallback)((() => {
          RY(!0), yY()
        }), [yY]);
      (0, AY.useEffect)((() => (iY.current = !0, Ir.delete(YY), RY(!0), yY(null === rY || void 0 === rY ? void 0 : rY.response), () => {
        iY.current = !1
      })), [yY, YY, rY]);
      const oY = YY => {
        vY.current++, RY(!1), aY.current = YY, FY(YY)
      };
      return {
        settings: DY,
        loading: IY,
        answered: OY,
        retry: QY,
        change: async function(rY, DY) {
          let {
            quiet: FY = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const AY = aY.current;
          if (null === AY) return !1;
          oY(DY(AY)), uY.current > 0 && (sY.current = !0), uY.current++;
          const IY = await Fr.e.setSocialSettings(YY, rY);
          uY.current--;
          const RY = !("error" in IY);
          if (!iY.current) return RY;
          if (FY);
          else if ("error" in IY) tY.f.showMessage({
            translationKey: IY.error
          });
          else
            for (const YY of IY.notFound) tY.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: YY
              }
            });
          if (uY.current > 0) return RY;
          const OY = sY.current;
          return sY.current = !1, !OY && "settings" in IY ? oY(IY.settings) : (OY || oY(AY), yY()), RY
        }
      }
    }

    function Or(YY, rY) {
      const DY = rY.toLowerCase();
      for (const FY of YY)
        if (FY.toLowerCase() === DY) return !0;
      return !1
    }

    function gr(YY) {
      if (null === YY) return !0;
      const {
        visibility: rY
      } = YY;
      return "public" === rY || "unlisted" === rY || "whitelist" === rY && YY.canManage
    }

    function ar(YY, rY, DY) {
      if (DY) {
        const DY = rY.filter((rY => !Or(YY.whitelist, rY)));
        return {
          ...YY,
          whitelist: [...YY.whitelist, ...DY]
        }
      }
      return {
        ...YY,
        whitelist: YY.whitelist.filter((YY => !Or(rY, YY)))
      }
    }
    var vr = DY(2417);

    function ur(YY) {
      let {
        worldCode: rY,
        message: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), {
        isTouchScreen: IY
      } = (0, MY.j)(["isTouchScreen"]), RY = ZY.featureFlags.canUseInviteLinks, OY = (0, XY.i)(RY && null === DY), [gY, aY] = (0, vr.f)(), uY = (0, AY.useRef)(null);
      if (null !== DY) return (0, vY.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, vY.jsx)(oY.e, {
          name: "lock"
        }), (0, vY.jsx)("span", {
          children: DY
        })]
      });
      const sY = RY ? OY : rY,
        yY = IY && RY && (0, vr.c)();
      return (0, vY.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!RY && (0, vY.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: FY("worldSocial:worldCode")
        }), (0, vY.jsx)("input", {
          ref: uY,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== sY && void 0 !== sY ? sY : "",
          "aria-label": FY(RY ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: YY => {
            YY.currentTarget.select()
          }
        }), (0, vY.jsxs)(iY.f, {
          className: "WorldSocialCopy",
          disabled: null === sY,
          onClick: () => {
            null !== sY && (0, vr.e)(sY, {
              useShareSheet: yY,
              onOutcome: YY => {
                if ((0, Dr.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== YY || RY ? YY : "code"
                  }), "copied" === YY) aY();
                else if ("failed" === YY) {
                  var rY;
                  null === (rY = uY.current) || void 0 === rY || rY.focus(), tY.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, vY.jsx)(oY.e, {
            name: gY ? "check" : yY ? "up-from-bracket" : "copy"
          }), " ", FY(gY ? "general:copied" : yY ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var sr = DY(1092),
      ir = DY.n(sr);
    const yr = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Qr = ["unlisted", "public", "whitelist", "private"];

    function or(YY) {
      let {
        visibility: rY,
        onPick: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), IY = (0, AY.useRef)([]);
      return (0, vY.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": FY("worldSocial:whoCanJoin"),
        children: Qr.map(((YY, AY) => {
          const RY = YY === rY;
          return (0, vY.jsxs)("button", {
            ref: YY => {
              IY.current[AY] = YY
            },
            type: "button",
            className: ir()("WorldSocialTile", {
              WorldSocialTileSelected: RY
            }),
            "aria-pressed": RY,
            tabIndex: RY ? 0 : -1,
            onKeyDown: YY => {
              ((YY, rY) => {
                const DY = "ArrowRight" === YY.key || "ArrowDown" === YY.key ? 1 : "ArrowLeft" === YY.key || "ArrowUp" === YY.key ? -1 : 0;
                var FY;
                0 !== DY && (YY.preventDefault(), null === (FY = IY.current[(rY + DY + Qr.length) % Qr.length]) || void 0 === FY || FY.focus())
              })(YY, AY)
            },
            onClick: () => {
              DY(YY)
            },
            children: [(0, vY.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, vY.jsx)(oY.e, {
                name: yr[YY]
              })
            }), (0, vY.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, vY.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: FY(`worldSocial:${YY}`)
              }), (0, vY.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: FY(`worldSocial:${YY}Description`)
              })]
            })]
          }, YY)
        }))
      })
    }
    var Wr = DY(605),
      Er = DY(2392),
      mr = DY(2353),
      Vr = DY(3920);

    function Sr(YY, rY) {
      var DY;
      return {
        isError: !1,
        name: YY,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== rY && void 0 !== rY ? rY : {},
        nameColour: null !== (DY = null === rY || void 0 === rY ? void 0 : rY.nameColour) && void 0 !== DY ? DY : Wr.e,
        location: {
          status: "offline"
        }
      }
    }

    function lr(YY) {
      let {
        player: rY,
        isFriend: DY = !1,
        status: FY,
        showLocation: AY = void 0 === FY,
        Zu: IY,
        onSendFriendRequest: RY,
        actions: OY,
        zIndex: gY
      } = YY;
      const {
        t: aY
      } = (0, nY.C)();
      let uY, sY = FY;
      return null !== IY && void 0 !== IY && IY.on && (sY = (0, vY.jsxs)(vY.Fragment, {
        children: [null !== FY && void 0 !== FY ? FY : (0, vY.jsx)(mr.e, {
          socialPreview: rY
        }), (0, vY.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", aY("worldSocial:canJoin")]
        })]
      })), (OY || IY) && (uY = (0, vY.jsxs)(vY.Fragment, {
        children: [OY, IY && (0, vY.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, vY.jsx)(Vr.d, {
            checked: IY.on,
            disabled: !1,
            ariaLabel: aY("worldSocial:letJoin", {
              playerName: rY.name
            }),
            onChange: YY => {
              IY.onChange(YY.target.checked)
            }
          })
        })]
      })), (0, vY.jsx)(Er.e, {
        playerSocialPreview: rY,
        isFriend: DY,
        hideFriendBadge: !0,
        onFriendRemoved: DY ? YY => {
          PY.c.removeFriendFromState(YY)
        } : void 0,
        status: sY,
        showLocation: AY,
        onSendFriendRequest: RY,
        opensProfileCard: !1,
        zIndex: gY,
        children: uY
      })
    }

    function Tr(YY) {
      let {
        row: rY,
        Zu: DY,
        canInvite: FY,
        invited: AY,
        onInvite: IY,
        zIndex: RY
      } = YY;
      const {
        t: OY
      } = (0, nY.C)(), gY = "online" === rY.place ? iY.f : iY.j;
      return (0, vY.jsx)(lr, {
        player: rY.friend,
        isFriend: !0,
        status: "here" === rY.place ? OY("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Zu: DY,
        zIndex: RY,
        actions: FY && (0, vY.jsx)(gY, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: AY,
          onClick: IY,
          ariaLabel: `${OY("worldSocial:invite")} ${rY.friend.name}`,
          children: OY(AY ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var er = DY(2447);

    function Nr(YY) {
      let {
        playersHere: rY,
        exclude: DY,
        kE: FY
      } = YY;
      const {
        t: IY
      } = (0, nY.C)(), RY = (0, er.n)(er.i), [OY, gY] = (0, AY.useState)([]), aY = [], uY = (YY, rY) => {
        const FY = [...DY, ...aY.map((YY => YY.player.name))];
        aY.length < 3 && !Or(FY, YY.name) && aY.push({
          player: YY,
          status: rY
        })
      };
      for (const AY of rY) uY(Sr(AY.name, AY.cosmetics, AY.ranks), IY("worldSocial:inThisWorld"));
      if ("loaded" === RY.state.status)
        for (const AY of RY.state.recentPlayers) AY.preview.name && !AY.preview.isError && uY({
          ...AY.preview,
          location: {
            status: "offline"
          }
        }, IY("worldSocial:playedWithYou"));
      const sY = YY => {
        gY((rY => [...rY, YY])), FY(YY).finally((() => {
          gY((rY => rY.filter((rY => rY !== YY))))
        }))
      };
      return (0, vY.jsx)(vY.Fragment, {
        children: aY.map(((YY, rY) => {
          let {
            player: DY,
            status: FY
          } = YY;
          return (0, vY.jsx)(lr, {
            zIndex: aY.length - rY,
            player: DY,
            status: FY,
            onSendFriendRequest: () => {
              sY(DY.name)
            },
            actions: (0, vY.jsx)(GY.g, {
              tooltipInner: (0, vY.jsx)(vY.Fragment, {
                children: IY("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, vY.jsx)(iY.f, {
                className: "FriendRequestButton",
                disabled: OY.includes(DY.name),
                ariaLabel: `${IY("recentPlayers:addFriend")} ${DY.name}`,
                onClick: () => {
                  sY(DY.name)
                },
                children: (0, vY.jsx)(oY.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${DY.name}`)
        }))
      })
    }
    var Br = DY(1654);

    function cr(YY) {
      let {
        kE: rY
      } = YY;
      const {
        t: DY
      } = (0, nY.C)(), FY = (0, AY.useRef)(null), [IY, RY] = (0, AY.useState)(""), [OY, gY] = (0, AY.useState)(!1), aY = () => {
        const YY = IY.trim();
        "" === YY || OY || (gY(!0), rY(YY).then((YY => {
          YY && FY.current && (FY.current.value = "", RY(""))
        })).finally((() => {
          gY(!1)
        })))
      };
      return (0, vY.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: YY => {
          YY.target === FY.current && "Escape" !== YY.key && YY.stopPropagation()
        },
        children: [(0, vY.jsx)(Br.d, {
          className: "WorldSocialAddFriendInput",
          domRef: FY,
          maxLength: 32,
          placeholderText: DY("worldSocial:addFriendPlaceholder"),
          ariaLabel: DY("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: YY => {
            RY(YY)
          },
          onEnter: aY
        }), (0, vY.jsxs)(iY.f, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: OY || "" === IY.trim(),
          onClick: aY,
          children: [(0, vY.jsx)(oY.e, {
            name: "user-plus"
          }), " ", DY("socialBar:sendRequest")]
        })]
      })
    }
    const Kr = new Map;

    function Hr(YY) {
      const rY = Kr.get(YY);
      if (!rY) return [];
      const DY = Date.now();
      for (const [FY, AY] of rY) DY - AY >= pY.p && rY.delete(FY);
      return [...rY.keys()]
    }
    var zr = DY(1231),
      Zr = DY(1469),
      Cr = DY(4197),
      fr = DY(309),
      jr = DY(4179);
    const hr = ["auto", "auto_existing"];

    function dr(YY) {
      return hr.includes(YY)
    }

    function Jr(YY, rY) {
      const DY = (0, zr.ub)(YY);
      return null !== rY && (0, zr.ub)(rY) === DY || (0, jr.b)().some((YY => (0, zr.ub)(YY.name) === DY))
    }
    const Mr = new Set;

    function wr(YY) {
      return `worldSocialSeen:${YY}`
    }

    function br(YY) {
      return !YY || Mr.has(YY) || !0 === CY.m.getItem(wr(YY))
    }

    function Xr(YY) {
      YY && !Mr.has(YY) && (Mr.add(YY), CY.m.setItem(wr(YY), !0))
    }

    function qr(YY) {
      let {
        show: rY,
        onClose: DY,
        opener: FY
      } = YY;
      const {
        lobbyName: IY,
        shownLobbyName: OY
      } = (0, BY.h)("connectedGame");
      return (0, AY.useEffect)((() => {
        rY && (0, Dr.reportAnalyticsClick)({
          id: "world_social.open",
          value: FY
        })
      }), [rY]), (0, vY.jsx)(RY.e, {
        show: rY && null !== IY,
        close: DY,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== FY,
        children: rY && null !== IY && (0, vY.jsx)(pr, {
          lobbyName: IY,
          worldCode: null !== OY && void 0 !== OY ? OY : IY,
          onClose: DY
        }, IY)
      })
    }

    function pr(YY) {
      var rY;
      let {
        lobbyName: DY,
        worldCode: FY,
        onClose: IY
      } = YY;
      const {
        t: RY
      } = (0, nY.C)(), OY = (0, AY.useRef)(null), {
        settings: gY,
        loading: aY,
        answered: uY,
        change: sY,
        retry: yY
      } = Rr(DY), QY = (0, PY.j)(), WY = (0, BY.h)("players"), EY = (0, BY.h)("hiddenPlayerNames"), [mY, VY] = (0, AY.useState)([]), [SY, TY] = (0, AY.useState)([]), [eY, NY] = (0, AY.useState)(!1), KY = (0, AY.useMemo)((() => {
        var YY, rY;
        const DY = null === WY.localId ? null : null !== (YY = null === (rY = WY.byId[WY.localId]) || void 0 === rY ? void 0 : rY.name) && void 0 !== YY ? YY : null;
        return WY.ids.flatMap((YY => {
          const rY = WY.byId[YY];
          return null !== rY && void 0 !== rY && rY.name && rY.name !== DY ? [{
            name: rY.name,
            cosmetics: rY.cosmetics,
            ranks: rY.ranks
          }] : []
        }))
      }), [WY]), HY = (0, AY.useMemo)((() => function(YY, rY, DY) {
        const FY = [],
          AY = [],
          IY = [];
        for (const RY of YY) !RY.isError && RY.name && ("inGame" === RY.location.status && RY.location.inLobbyName === rY || Or(DY, RY.name) ? AY.push({
          friend: RY,
          place: "here"
        }) : "offline" === RY.location.status ? IY.push({
          friend: RY,
          place: "offline"
        }) : FY.push({
          friend: RY,
          place: "online"
        }));
        return [...FY, ...AY, ...IY]
      }(QY.friends, DY, KY.map((YY => YY.name)))), [QY.friends, DY, KY]), zY = ZY.featureFlags.canSeeRealPlayerNames ? KY.filter((YY => null === (0, rr.c)(YY.name, EY))) : [], CY = null !== gY && void 0 !== gY && gY.canManage ? gY : null, fY = null !== CY, jY = null !== (rY = null === gY || void 0 === gY ? void 0 : gY.visibility) && void 0 !== rY ? rY : null, hY = "whitelist" === (null === CY || void 0 === CY ? void 0 : CY.visibility), dY = "private" === jY || "whitelist" === jY && !fY, {
        userContext: JY
      } = (0, lY.d)();
      (0, AY.useEffect)((() => {
        fY && Jr(DY, JY.getPersonalWorldLobbyName()) && Xr(JY.whamm)
      }), [fY, DY, JY]);
      const MY = dY ? RY("whitelist" === jY ? "socialBar:inviteWorldManagersOnly" : fY ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        wY = null === MY;
      (0, AY.useEffect)((() => dY ? void 0 : tY.f.quietFriendAdded()), [dY]), (0, AY.useEffect)((() => tY.f.quietFriendRequests()), []);
      const XY = (0, AY.useRef)(!1);
      (0, AY.useEffect)((() => {
        const YY = OY.current,
          rY = !XY.current;
        XY.current = !0;
        const DY = null === document.activeElement || document.activeElement === document.body;
        null !== YY && void 0 !== YY && YY.contains(document.activeElement) || !rY && !DY || (0, bY.f)() || null === YY || void 0 === YY || YY.focus({
          preventScroll: !0
        })
      }), [wY]), (0, AY.useEffect)((() => {
        const YY = YY => {
          "Escape" !== YY.key || null !== document.activeElement && document.activeElement !== document.body || IY()
        };
        return document.addEventListener("keydown", YY), () => {
          document.removeEventListener("keydown", YY)
        }
      }), [IY]);
      const Fr = null === gY && !uY,
        Ar = (aY || QY.loading) && 0 === QY.friends.length,
        Ir = QY.friends.flatMap((YY => YY.name ? [YY.name] : [])),
        vr = mY.filter((YY => !Or(Ir, YY))),
        sr = HY.length + 3,
        ir = vr.length + sr,
        yr = eY ? QY.requests : QY.requests.slice(0, 1),
        Qr = async function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const DY of function(YY, rY) {
              const DY = [];
              for (let FY = 0; FY < YY.length; FY += rY) DY.push(YY.slice(FY, FY + rY));
              return DY
            }(YY, qY.C)) {
            if (!await sY({
                whitelistAdd: DY
              }, (YY => ar(YY, DY, !0)), {
                quiet: rY
              })) return !1
          }
          return !0
        }, Wr = async YY => {
          if (YY === jY) return;
          (0, Dr.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: YY
          });
          const rY = [...Hr(DY), ...SY],
            FY = "whitelist" === YY && gY ? function(YY, rY, DY) {
              const FY = [],
                AY = YY.flatMap((YY => "here" === YY.place ? [YY.friend.name] : []));
              for (const IY of [...AY, ...rY]) Or(FY, IY) || Or(DY, IY) || FY.push(IY);
              return FY
            }(HY, rY, gY.whitelist) : [];
          await sY({
            setVisibility: YY
          }, (rY => ({
            ...rY,
            visibility: YY
          }))) && await Qr(FY)
        }, Er = YY => {
          if (hY && CY) return {
            on: Or(CY.whitelist, YY),
            onChange: rY => {
              (0, Dr.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: rY ? "on" : "off"
              }), sY(rY ? {
                whitelistAdd: [YY]
              } : {
                whitelistRemove: YY
              }, (DY => ar(DY, [YY], rY)))
            }
          }
        }, mr = async YY => {
          (0, Dr.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const rY = () => {
            TY((rY => rY.filter((rY => rY !== YY))))
          };
          TY((rY => [...rY, YY]));
          const FY = function(YY, rY) {
            return null === YY || void 0 === YY || !YY.canManage || Or(YY.whitelist, rY) ? "none" : "whitelist" === YY.visibility ? "required" : "quiet"
          }(gY, YY);
          if ("none" !== FY) {
            const DY = Qr([YY], "quiet" === FY);
            if ("required" === FY && !await DY) return void rY()
          }
          await (0, UY.n)(YY, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(YY, rY) {
            var DY;
            const FY = null !== (DY = Kr.get(YY)) && void 0 !== DY ? DY : new Map;
            FY.set(rY, Date.now()), Kr.set(YY, FY)
          }(DY, YY), setTimeout(rY, pY.r)) : rY()
        }, Vr = async (YY, rY) => {
          (0, Dr.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: rY
          });
          const DY = await (0, LY.h)(YY, "world_social");
          return (0, LY.c)(DY, YY, {
            announceSent: !1
          }), "failed" !== DY.kind && ("sent" === DY.kind && VY((rY => Or(rY, YY) ? rY : [...rY, YY])), hY && await Qr([YY]), !0)
        };
      return (0, vY.jsxs)("div", {
        ref: OY,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: YY => {
          YY.target === YY.currentTarget && " " === YY.key && YY.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, vY.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, vY.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: RY("worldSocial:title")
          }), (0, vY.jsx)(iY.k, {
            className: "WorldSocialClose",
            onClick: IY
          })]
        }), Fr && (0, vY.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, vY.jsx)(cY.c, {})
        }), !Fr && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)(ur, {
            worldCode: FY,
            message: MY
          }), null === gY && !aY && (0, vY.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: yY,
            children: RY("worldSocial:loadFailed")
          }), fY && null !== jY && (0, vY.jsx)(or, {
            visibility: jY,
            onPick: YY => {
              Wr(YY)
            }
          }), QY.requests.length > 0 && (0, vY.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, vY.jsx)(xY.b, {
              label: (0, vY.jsxs)(vY.Fragment, {
                children: [(0, vY.jsx)(oY.e, {
                  name: Yr.g
                }), " ", RY("socialBar:requests")]
              }),
              meta: (0, vY.jsxs)(vY.Fragment, {
                children: [QY.requests.length, QY.requests.length === kY.o && (0, vY.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: RY("socialBar:limitReached")
                }), !eY && QY.requests.length > 1 && (0, vY.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    NY(!0)
                  },
                  children: RY("worldSocial:moreRequests", {
                    count: QY.requests.length - 1
                  })
                })]
              })
            }), (0, vY.jsx)("div", {
              className: "PlayerRows",
              children: yr.map(((YY, rY) => (0, vY.jsx)(lr, {
                zIndex: yr.length - rY,
                player: YY,
                actions: (0, vY.jsxs)(vY.Fragment, {
                  children: [(0, vY.jsx)(GY.g, {
                    tooltipInner: (0, vY.jsx)(vY.Fragment, {
                      children: RY("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, vY.jsx)(iY.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${RY("general:accept")} ${YY.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, LY.e)(YY.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, vY.jsx)(oY.e, {
                        name: "check"
                      })
                    })
                  }), (0, vY.jsx)(GY.g, {
                    tooltipInner: (0, vY.jsx)(vY.Fragment, {
                      children: RY("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, vY.jsx)(iY.j, {
                      className: "FriendRequestButton",
                      ariaLabel: `${RY("general:decline")} ${YY.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, LY.e)(YY.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, vY.jsx)(oY.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${YY.name}`)))
            })]
          }), (0, vY.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, vY.jsx)(xY.b, {
              label: (0, vY.jsxs)(vY.Fragment, {
                children: [(0, vY.jsx)(oY.e, {
                  name: Yr.d
                }), " ", RY("socialBar:friends")]
              }),
              meta: QY.loaded && !dY ? QY.friends.length : void 0
            }), (0, vY.jsx)(cr, {
              kE: YY => Vr(YY, "field")
            }), Ar && (0, vY.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, vY.jsx)(cY.c, {})
            }), !Ar && (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsxs)("div", {
                className: "PlayerRows",
                children: [vr.map(((YY, rY) => (0, vY.jsx)(lr, {
                  zIndex: ir - rY,
                  player: Sr(YY, null),
                  status: RY("worldSocial:requestSent"),
                  Zu: Er(YY)
                }, `request:${YY}`))), !dY && HY.map(((YY, rY) => (0, vY.jsx)(Tr, {
                  zIndex: sr - rY,
                  row: YY,
                  Zu: Er(YY.friend.name),
                  canInvite: gr(gY) && "here" !== YY.place,
                  invited: SY.includes(YY.friend.name),
                  onInvite: () => {
                    mr(YY.friend.name)
                  }
                }, YY.friend.name))), QY.loaded && 0 === QY.friends.length && (0, vY.jsx)(Nr, {
                  playersHere: zY,
                  exclude: mY,
                  kE: YY => Vr(YY, "suggestion")
                })]
              }), hY && QY.loaded && 0 === QY.friends.length && 0 === vr.length && (0, vY.jsx)("div", {
                className: "WorldSocialEmpty",
                children: RY("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var kr = DY(2270),
      Gr = DY(2291);

    function xr(YY) {
      let {
        show: rY,
        onClose: DY,
        option: FY
      } = YY;
      const IY = (0, BY.f)("connectedGame", (YY => (0, kr.c)(YY) ? YY.lobbyName : null));
      return function(YY) {
        const {
          gameEntrySource: rY,
          loadingOverlayVisible: DY
        } = (0, MY.j)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: FY
        } = (0, lY.d)(), IY = (0, BY.h)("localPlayerAlive"), RY = (0, BY.f)("players", (YY => null !== YY.localId && void 0 !== YY.byId[YY.localId])), OY = (0, Gr.m)(), gY = (0, AY.useRef)(null), aY = (0, AY.useRef)(null), vY = "worldCreation" === rY, uY = FY.whamm, sY = FY.getPersonalWorldLobbyName();
        (0, AY.useEffect)((() => {
          var rY;
          null !== YY && (null === (rY = aY.current) || void 0 === rY ? void 0 : rY.lobbyName) !== YY && null !== Lr(YY, vY, uY, sY) && (aY.current = Ar(YY))
        }), [vY, YY, uY, sY]), (0, AY.useEffect)((() => {
          if (null !== YY && (!DY && IY && RY)) return OY.whenShown((() => {
            var rY;
            const DY = gY.current === YY ? null : Lr(YY, vY, uY, sY);
            if (null === DY) return;
            const FY = (null === (rY = aY.current) || void 0 === rY ? void 0 : rY.lobbyName) === YY ? aY.current : Ar(YY);
            aY.current = null, gY.current = YY,
              function(YY, rY, DY, FY) {
                const {
                  lobbyName: AY
                } = YY, IY = () => {
                  ! function(YY, rY) {
                    if (!FD()) return void rY(!0);
                    const DY = performance.now() + rD;
                    let FY = 0;
                    const AY = () => {
                      FY = FD() ? 0 : FY + 1, FY >= 2 ? rY(!0) : !DD(YY) || performance.now() > DY ? rY(!1) : setTimeout(AY, YD)
                    };
                    setTimeout(AY, YD)
                  }(AY, (IY => {
                    FY();
                    const RY = "auto_existing" === rY && br(DY);
                    IY && DD(AY) && !Pr(AY) && !RY && (tr(YY) ? Ur(AY) : (Ur(AY), Xr(DY), function(YY) {
                      const rY = fr.e.world_social_popup_v1;
                      return (0, fr.m)("world_social_popup_v1"), (0, Dr.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${rY}:${(0,Cr.d)()}:${YY}`
                      }), (0, Zr.flushClientAnalyticsEvents)(), "auto_open" === rY
                    }(rY) && (! function(YY) {
                      Ir.set(YY.lobbyName, YY)
                    }(YY), yY.g.vo("toggleMenu", `inviteLink|${rY}`), "inviteLink" !== MY.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === rY && !tr(YY)) return void IY();
                YY.response.then((YY => {
                  if (!("error" in YY)) return YY.settings.canManage ? void IY() : (Ur(AY), void FY());
                  FY()
                }))
              }(FY, DY, uY, (() => {
                gY.current === YY && (gY.current = null)
              }))
          }))
        }), [OY, vY, DY, YY, IY, RY, uY, sY])
      }(IY), (0, AY.useEffect)((() => {
        rY && null !== IY && Ur(IY)
      }), [rY, IY]), null !== IY ? (0, vY.jsx)(qr, {
        show: rY,
        onClose: DY,
        opener: dr(FY) ? FY : "icon"
      }) : (0, vY.jsx)(XY.b, {
        show: rY,
        onClose: DY
      })
    }
    const nr = new Set;

    function Pr(YY) {
      return nr.has(YY) || !!CY.q.getItem(`worldSocialShown:${YY}`)
    }

    function Ur(YY) {
      nr.add(YY), CY.q.setItem(`worldSocialShown:${YY}`, !0)
    }

    function Lr(YY, rY, DY, FY) {
      return Pr(YY) ? null : function(YY) {
        let {
          justMade: rY,
          playerId: DY,
          lobbyName: FY,
          personalWorld: AY
        } = YY;
        return rY ? "auto" : !br(DY) && Jr(FY, AY) ? "auto_existing" : null
      }({
        justMade: rY,
        playerId: DY,
        lobbyName: YY,
        personalWorld: FY
      })
    }

    function tr(YY) {
      let {
        answer: rY
      } = YY;
      return null !== rY && "settings" in rY && !rY.settings.canManage
    }
    const YD = 500,
      rD = 3e4;

    function DD(YY) {
      return "inGame" === MY.b.get("gameState") && aY.gameBridge.latest("connectedGame").lobbyName === YY
    }

    function FD() {
      return (0, bY.f)() || MY.b.get("loadingOverlayVisible") || (0, wY.p)()
    }
    var AD = DY(36140),
      ID = DY(2746),
      RD = DY(1851),
      OD = DY(2743);

    function gD(YY, rY, DY) {
      return OD.d.overridesTexture(YY) ? OD.d.getTexture(YY, rY).url : DY
    }
    var aD = DY(9565);
    const vD = (YY, rY) => {
        (0, AY.useEffect)((() => {
          setTimeout((() => {
            YY && YY.current && YY.current.focus()
          }), 1)
        }), [rY])
      },
      uD = (0, AY.memo)((function(YY) {
        let {
          isInputActive: rY,
          onClose: DY,
          onChange: FY,
          textAreaRef: AY,
          fontSize: IY,
          lineHeight: RY,
          currText: OY
        } = YY;
        return (0, vY.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, vY.jsx)("img", {
            src: gD("board_full", ID.i.BLOCK, aD),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, vY.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: OY,
            ref: AY,
            style: {
              fontSize: `${IY}rem`,
              lineHeight: `${RY}rem`
            },
            onKeyDown: YY => {
              var rY;
              "Escape" !== YY.key && (YY.stopPropagation(), "Tab" === YY.key && function(YY) {
                YY.preventDefault();
                const rY = YY.target,
                  {
                    value: DY
                  } = rY;
                let FY = rY.selectionStart,
                  AY = rY.selectionEnd,
                  IY = DY.slice(FY, AY);
                if (!IY.includes("\n") && !YY.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; FY > 0 && "\n" !== DY[FY - 1];) FY--;
                const RY = "\n" === DY[AY - 1];
                RY && AY--;
                IY = DY.slice(FY, AY);
                const OY = IY.split("\n").map((rY => YY.shiftKey ? rY.replace(/^\t/, "") : "\t" + rY)).join("\n");
                if (YY.shiftKey && DY.slice(FY, AY) === OY) return;
                let {
                  selectionStart: gY
                } = rY;
                rY.setSelectionRange(FY, AY), gY > FY && (!YY.shiftKey || "\t" === IY[0]) && (gY += YY.shiftKey ? -1 : 1);
                AY = FY + OY.length + (RY ? 1 : 0), document.execCommand("insertText", !1, OY), rY.setSelectionRange(gY, AY)
              }(YY), /^F\d+$/i.test(YY.code) && null !== (rY = RD.u.OpenCodeEditor) && void 0 !== rY && rY.includes(YY.code) && DY())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: FY
          })]
        })
      }));

    function sD(YY) {
      return 1.3 * YY
    }
    var iD = DY(1663);
    const yD = (0, AY.memo)((function(YY) {
        let {
          show: rY,
          onOpen: DY,
          onClose: FY
        } = YY;
        const [IY, OY] = (0, AY.useState)(null), [gY, uY] = (0, AY.useState)(""), [sY, yY] = (0, AY.useState)(0), [QY, oY] = (0, AY.useState)(null), [WY, EY] = (0, AY.useState)({
          text: "",
          textSize: 0
        }), mY = (YY, rY) => QY ? (0, AD.l)(YY, rY, QY.width, QY.height) : (0, AD.f)(YY, rY), VY = YY => {
          uY(mY(gY, YY)), yY(YY), CY.m.setItem("lastBoardTextSize", YY)
        }, SY = () => {
          FY(), QY && gY === WY.text && sY === WY.textSize || aY.gameBridge.send("writeOnBoard", {
            pos: IY,
            text: gY,
            textSize: sY
          })
        };
        (0, BY.c)("boardEditRequested", (YY => {
          var AY, IY;
          if (!ZY.featureFlags.canSeePlayerWrittenText) return;
          if (null === YY) return OY(null), void(rY && FY());
          const {
            pos: RY,
            noticeboardSpan: gY,
            text: aY
          } = YY;
          OY(RY), oY(gY), uY(aY);
          const vY = null !== (AY = null !== (IY = YY.textSize) && void 0 !== IY ? IY : CY.m.getItem("lastBoardTextSize")) && void 0 !== AY ? AY : 0;
          yY(vY), EY({
            text: aY,
            textSize: vY
          }), CY.m.setItem("lastBoardTextSize", vY), DY()
        }));
        const lY = (0, AY.useRef)(null);
        vD(lY, rY), (0, iD.t)(lY, {
          kind: "sign",
          submit: SY
        });
        const TY = function(YY, rY) {
            const DY = AD.d[YY];
            if (!rY) return DY.uiFontSize;
            const {
              numLines: FY,
              charsPerLine: AY
            } = (0, AD.u)(rY.width, rY.height, YY);
            return DY.uiFontSize * Math.min(DY.charsPerLine / AY, DY.numLines / FY)
          }(sY, QY),
          eY = sD(TY);
        return (0, vY.jsxs)(RY.e, {
          className: "WriteOnBoardBg",
          close: SY,
          escDoesExit: !0,
          show: rY,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, vY.jsx)(uD, {
            isInputActive: () => rY,
            onClose: SY,
            onChange: YY => {
              uY(mY(YY.target.value, sY))
            },
            textAreaRef: lY,
            fontSize: TY,
            lineHeight: eY,
            currText: gY
          }), (0, vY.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, vY.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, vY.jsx)(iY.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                VY(0)
              },
              disabled: 0 === sY,
              children: "Small"
            }), (0, vY.jsx)(iY.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                VY(1)
              },
              disabled: 1 === sY,
              children: "Medium"
            }), (0, vY.jsx)(iY.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                VY(2)
              },
              disabled: 2 === sY,
              children: "Large"
            })]
          })]
        })
      })),
      QD = (0, AY.memo)((function(YY) {
        let {
          show: rY,
          onOpen: DY,
          onClose: FY
        } = YY;
        const [IY, OY] = (0, AY.useState)(""), gY = () => {
          FY(), aY.gameBridge.send("writeNameTag", IY)
        };
        (0, eY.g)("EditNameTag", (YY => {
          ZY.featureFlags.canSeePlayerWrittenText && null !== YY && (OY(YY), DY())
        }));
        const uY = (0, AY.useRef)(null);
        vD(uY, rY), (0, iD.t)(uY, {
          kind: "nameTag",
          submit: gY
        });
        const sY = AD.D.nameTag.uiFontSize,
          yY = sD(sY);
        return (0, vY.jsxs)(RY.e, {
          className: "WriteOnBoardBg",
          close: gY,
          escDoesExit: !0,
          show: rY,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, vY.jsx)("div", {
            className: "NameTagTrim",
            children: (0, vY.jsx)(uD, {
              isInputActive: () => rY,
              onClose: gY,
              onChange: YY => {
                const rY = YY.target.value.replaceAll("\n", "");
                OY((0, AD.o)(rY, "nameTag"))
              },
              textAreaRef: uY,
              fontSize: sY,
              lineHeight: yY,
              currText: IY
            })
          }), (0, vY.jsx)(iY.f, {
            onClick: gY,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var oD = DY(17843);
    const WD = (0, AY.memo)((function(YY) {
      let {
        show: rY,
        onOpen: DY,
        onClose: FY
      } = YY;
      const [IY, OY] = (0, AY.useState)(""), [gY, uY] = (0, AY.useState)(0), [sY, yY] = (0, AY.useState)(!1), [QY, oY] = (0, AY.useState)(["", "", "", "", "", "", "", "", "", ""]), [WY, EY] = (0, AY.useState)("Title"), [mY, VY] = (0, AY.useState)(!0), [SY, lY] = (0, AY.useState)(!1);
      (0, eY.g)("EditBook", (YY => {
        let {
          pages: rY,
          title: FY,
          isPublished: AY
        } = YY;
        var IY;
        ZY.featureFlags.canSeePlayerWrittenText && (null !== rY ? (oY(rY), OY(null !== (IY = rY[0]) && void 0 !== IY ? IY : ""), EY(FY), uY(0), yY(!1), VY(!AY), lY(!1), DY()) : oY(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const TY = (0, AY.useRef)(null),
        NY = (0, AY.useRef)(null);
      vD(TY, rY), (0, iD.t)(TY, {
        kind: "book"
      }), (0, iD.t)(NY, {
        kind: "LR"
      });
      const BY = AD.D.book.uiFontSize,
        cY = sD(BY),
        KY = () => {
          (mY || SY) && aY.gameBridge.send("writeBook", {
            pages: [...QY],
            title: WY,
            published: !mY && SY
          })
        },
        HY = YY => {
          sY && (QY[gY] = IY, yY(!1)), OY(QY[YY]), uY(YY)
        };
      return (0, vY.jsxs)(RY.e, {
        className: "WriteOnBoardBg",
        close: () => {
          FY(), QY[gY] = IY, KY()
        },
        escDoesExit: !0,
        show: rY,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, vY.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, vY.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: WY,
            ref: NY,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${cY}rem`
            },
            onKeyDown: YY => {
              mY && YY.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: YY => {
              let rY = YY.target.value;
              rY = (0, AD.o)(rY, "LR"), EY(rY)
            },
            readOnly: !mY
          }), (0, vY.jsx)("img", {
            src: gD("book_page", ID.i.ITEM, oD),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, vY.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, vY.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: IY,
              ref: TY,
              style: {
                fontSize: `${BY}rem`,
                lineHeight: `${cY}rem`
              },
              onKeyDown: YY => {
                mY && YY.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: YY => {
                const rY = YY.target.value;
                OY((0, AD.o)(rY, "book")), yY(!0)
              },
              readOnly: !mY
            })
          })]
        }), (0, vY.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, vY.jsx)(iY.f, {
            disabled: 0 === gY,
            onClick: () => {
              HY(gY - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, vY.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, vY.jsx)(iY.f, {
            disabled: 9 === gY,
            onClick: () => {
              HY(gY + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, vY.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, vY.jsx)(iY.f, {
            onClick: () => {
              VY(!mY), lY(!0)
            },
            className: "BookNavButton",
            children: mY ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var ED = DY(36034),
      mD = DY(8087),
      VD = DY(1384),
      SD = DY(1793);

    function lD(YY) {
      let {
        show: rY,
        buttons: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), IY = (0, AY.useRef)(null);
      return (0, AY.useEffect)((() => {
        var YY, DY;
        const FY = rY ? (0, ED.C)() : null;
        if (!FY || !(0, VD.f)()) return;
        const AY = (0, ED.n)().findIndex((YY => YY.id === FY));
        (0, mD.s)(null !== (YY = null === (DY = IY.current) || void 0 === DY ? void 0 : DY.children[AY]) && void 0 !== YY ? YY : null)
      }), [rY]), 0 === DY.length ? null : (0, vY.jsx)("div", {
        ref: IY,
        className: "ClientGameInventoryButtons",
        onPointerDown: YY => {
          YY.stopPropagation()
        },
        onPointerUp: YY => {
          YY.stopPropagation()
        },
        children: DY.map((YY => {
          const rY = FY(YY.labelKey);
          return (0, vY.jsxs)(iY.n, {
            className: YY.className,
            disabled: YY.disabled,
            onClick: () => {
              (0, ED.v)(YY)
            },
            ariaLabel: YY.iconOnly ? rY : void 0,
            title: YY.iconOnly ? rY : void 0,
            children: [YY.icon && (0, vY.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === YY.icon.kind && (0, vY.jsx)(SD.c, {
                itemName: YY.icon.name,
                amount: 0
              }), "image" === YY.icon.kind && (0, vY.jsx)("img", {
                src: YY.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === YY.icon.kind && (0, vY.jsx)(oY.e, {
                name: YY.icon.name
              })]
            }), !YY.iconOnly && rY]
          }, YY.id)
        }))
      })
    }
    var TD = DY(36149),
      eD = DY(2479),
      ND = DY(8765),
      BD = DY(35963),
      cD = DY(35958);
    let KD = null;
    window.setShowInventoryAdsOverride = YY => {
      KD = YY
    };
    const HD = 24e4;
    var zD = DY(1801);

    function ZD(YY) {
      var rY;
      let {
        draggedInfo: {
          name: DY,
          attributes: FY,
          amount: AY
        },
        toAddRef: IY
      } = YY;
      return (0, vY.jsx)("div", {
        className: "DraggedInvenItem",
        ref: IY,
        children: (0, vY.jsx)(SD.c, {
          itemName: DY,
          amount: AY,
          enchantmentTier: null === FY || void 0 === FY || null === (rY = FY.customAttributes) || void 0 === rY ? void 0 : rY.enchantmentTier,
          bar: (0, zD.i)(FY)
        })
      })
    }

    function CD(YY) {
      let {
        className: rY = "",
        displayInfo: DY,
        domRef: FY
      } = YY;
      return (0, vY.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${rY}`,
        ref: FY,
        children: [(0, vY.jsx)(TY.b, {
          text: (0, NY.qb)(DY.name, {
            fontStyle: DY.fontStyle
          })
        }), (0, vY.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, vY.jsx)(TY.b, {
            text: DY.desc
          })
        })]
      })
    }

    function fD(YY) {
      let {
        info: rY,
        draggedInfo: DY
      } = YY;
      const FY = (0, AY.useRef)(null);
      return (0, AY.useLayoutEffect)((() => {
        const YY = FY.current,
          {
            left: DY,
            top: AY
          } = function(YY, rY, DY, FY) {
            const AY = FY.left * DY.width / 100 + 4,
              IY = DY.width - FY.right * DY.width / 100 - 4 - rY.width,
              RY = FY.top * DY.height / 100 + 4,
              OY = DY.height - 4 - rY.height;
            return {
              left: Math.max(AY, Math.min(YY.x - rY.width / 2, IY)),
              top: Math.max(RY, Math.min(YY.y - 48 - rY.height, OY))
            }
          }({
            x: rY.initTouchX,
            y: rY.initTouchY
          }, {
            width: YY.offsetWidth,
            height: YY.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, MY.b.get("notchSize"));
        YY.style.left = `${DY}px`, YY.style.top = `${AY}px`
      }), [rY]), (0, vY.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: FY,
        children: [(0, vY.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: DY.amount / rY.maxAmount * 100 + "%"
          }
        }), (0, vY.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [DY.amount, "/", rY.maxAmount]
        })]
      })
    }
    var jD = DY(213);
    const hD = (0, AY.memo)((function(YY) {
      let {
        show: rY,
        onOpen: DY,
        onClose: FY
      } = YY;
      const IY = (0, AY.useRef)({
          pos: null
        }),
        [OY, gY] = (0, AY.useState)([0, 0, 0, 0]),
        {
          userContext: uY
        } = (0, lY.d)();
      (0, BY.c)("ironChestOpenRequested", (YY => {
        let {
          pos: rY,
          ownerDbId: FY,
          cachedPasskey: AY
        } = YY;
        if (IY.current.pos = rY, FY !== uY.whamm) return null !== AY ? (gY(AY), void sY(AY)) : void DY();
        sY(OY)
      })), (0, BY.c)("localEffectUpdated", (YY => {
        "Thief" === YY && FY()
      }));
      const sY = YY => {
        const {
          pos: rY
        } = IY.current;
        aY.gameBridge.send("openIronChest", {
          pos: rY,
          kI: YY
        })
      };
      return (0, vY.jsx)(RY.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: FY,
        escDoesExit: !0,
        show: rY,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, vY.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, vY.jsx)(dD, {
            kI: OY,
            onPasskeyUpdated: gY,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              sY(OY)
            }
          })
        })
      })
    }));

    function dD(YY) {
      let {
        className: rY = "",
        kI: DY,
        onPasskeyUpdated: FY,
        confirmText: AY,
        onConfirm: IY
      } = YY;
      const {
        t: RY
      } = (0, nY.C)();
      return (0, vY.jsxs)("div", {
        className: `${rY} IronChestPasskeyInput`,
        children: [(0, vY.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: RY("ironChest:passkeyInputTitle")
        }), (0, vY.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(jD.d.ironChestPasskeyLength).fill(0).map(((YY, rY) => (0, vY.jsx)(JD, {
            digit: DY[rY],
            onPasskeyDigitUpdated: YY => {
              const AY = [...DY];
              AY[rY] = YY, FY(AY)
            }
          }, rY)))
        }), (0, vY.jsx)(iY.n, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: IY,
          children: RY(AY)
        })]
      })
    }

    function JD(YY) {
      let {
        digit: rY,
        onPasskeyDigitUpdated: DY
      } = YY;
      return (0, vY.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, vY.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, vY.jsx)(iY.n, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              DY(NY.c.mod(rY + 1, 10))
            },
            children: (0, vY.jsx)(oY.e, {
              name: "angle-up"
            })
          }), (0, vY.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: rY
          }), (0, vY.jsx)(iY.n, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              DY(NY.c.mod(rY - 1, 10))
            },
            children: (0, vY.jsx)(oY.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var MD = DY(8756),
      wD = DY(36184),
      bD = DY(35953);

    function XD(YY) {
      let {
        specialItemInfo: rY,
        setHovered: DY,
        pointerDown: FY,
        pointerUp: IY,
        enchantingTablePosition: RY,
        enchantingTableBlockName: OY
      } = YY;
      const {
        t: uY
      } = (0, nY.C)(), [sY, yY] = (0, AY.useState)(null), [QY, oY] = (0, AY.useState)(null), WY = (0, gY.j)("auraPerLevel"), EY = Math.floor((0, BY.h)("aura") / WY);
      (0, AY.useEffect)((() => {
        if (!rY) return void yY(null);
        let YY = !0;
        return aY.gameBridge.query("enchantingOffer", {
          slot: rY.idx,
          name: rY.name,
          blockName: OY
        }).then((DY => {
          var FY, AY;
          let {
            perks: IY,
            options: RY
          } = DY;
          if (!YY) return;
          const OY = {
            isEnchantable: IY.length > 0,
            possibleEnchantments: IY,
            options: RY.map((YY => {
              let {
                level: rY,
                odds: DY
              } = YY;
              return {
                level: rY,
                possibilities: Object.fromEntries(DY.map(((YY, rY) => [`Tier ${rY+1}`, YY])))
              }
            })),
            isAlreadyEnchanted: IY.length > 0 && void 0 !== (null === (FY = rY.attributes) || void 0 === FY || null === (AY = FY.customAttributes) || void 0 === AY ? void 0 : AY.enchantmentTier)
          };
          yY(OY), (YY => {
            const rY = YY.options.map((YY => Object.entries(YY.possibilities).map((YY => {
              let [rY, DY] = YY;
              return {
                str: `${rY}: ${DY>0?DY<.01?DY.toPrecision(1):DY.toFixed(2):0}%\n`,
                style: {
                  color: NY.nb[rY]
                }
              }
            }))));
            oY(rY)
          })(OY)
        })), () => {
          YY = !1
        }
      }), [rY, RY, OY]);
      const mY = [];
      for (let AY = 0; AY < wD.b; AY++) {
        const YY = null === sY || void 0 === sY ? void 0 : sY.options[AY],
          FY = !YY || YY.level > EY;
        mY.push((0, vY.jsx)(iY.f, {
          className: "EnchantmentButton",
          onPointerEnter: YY ? YY => null === DY || void 0 === DY ? void 0 : DY()(!0, {
            name: "",
            desc: QY[AY]
          }, YY) : void 0,
          onPointerLeave: YY ? () => null === DY || void 0 === DY ? void 0 : DY()(!1) : void 0,
          onClick: FY ? void 0 : () => {
            aY.gameBridge.send("enchantItem", {
              slot: rY.idx,
              level: YY.level,
              tablePos: RY
            }), yY(null)
          },
          disabled: FY,
          children: YY ? (0, vY.jsxs)(vY.Fragment, {
            children: [(0, vY.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, vY.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [uY("enchantments:cost"), ": "]
              }), " ", uY("enchantments:levels", {
                level: YY.level
              })]
            }), (0, vY.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, vY.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, vY.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: uY("enchantments:tier")
                }), Object.entries(YY.possibilities).map((YY => {
                  let [rY, DY] = YY;
                  return 0 === DY ? null : (0, vY.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: NY.nb[rY]
                    },
                    children: rY
                  }, rY)
                }))]
              }), (0, vY.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, vY.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: uY("enchantments:odds")
                }), Object.entries(YY.possibilities).map((YY => {
                  let [rY, DY] = YY;
                  return 0 === DY ? null : (0, vY.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: NY.nb[rY]
                    },
                    children: [DY > 0 && DY < .1 ? "<0.1" : DY.toFixed(0 < DY && DY < .95 ? 1 : 0), "%"]
                  }, rY)
                }))]
              })]
            })]
          }) : !1 === (null === sY || void 0 === sY ? void 0 : sY.isEnchantable) ? (0, vY.jsx)("h1", {
            className: "EnchantmentLevels",
            children: uY("enchantments:notEnchantable")
          }) : (0, vY.jsx)("h1", {
            className: "EnchantmentLevels",
            children: uY("enchantments:enterItem")
          })
        }, AY))
      }
      return (0, vY.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, vY.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: OY
        }), (0, vY.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, vY.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, vY.jsx)(bD.e, {
              idx: cD.h,
              setHovered: YY => {
                null === DY || void 0 === DY || DY(cD.h)(YY)
              },
              pointerDown: FY,
              pointerUp: IY,
              draggedInfo: null,
              specialItemInfo: rY,
              variation: "Enchanting Table"
            }), sY && sY.possibleEnchantments.length > 0 && (0, vY.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, vY.jsx)("h2", {
                children: "Possible Perks:"
              }), sY.possibleEnchantments.map((YY => (0, vY.jsxs)(AY.Fragment, {
                children: [(0, vY.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, vY.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, vY.jsx)(SD.c, {
                      itemName: `${YY} Enchantment`,
                      amount: 1
                    })
                  }), (0, vY.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: YY
                  })]
                }), (0, vY.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: uY((0, MD.l)(YY).translationKey)
                })]
              }, YY)))]
            })]
          }), (0, vY.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [sY && sY.isAlreadyEnchanted && (0, vY.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: uY("enchantments:alreadyEnchanted")
            }), mY]
          })]
        })]
      })
    }
    var qD = DY(36187);

    function pD(YY) {
      var rY;
      let {
        specialItemInfo: DY,
        setSpecialItemInfo: FY,
        setHovered: IY,
        pointerDown: RY,
        pointerUp: OY
      } = YY;
      const {
        t: gY
      } = (0, nY.C)(), uY = (0, BY.f)("inventory", (YY => YY.freeSlots)), [sY, yY] = (0, AY.useState)(null);
      (0, AY.useEffect)((() => {
        if (DY) {
          const YY = (0, qD.b)(DY.name, DY.amount);
          yY({
            salvageable: !!YY,
            produces: YY
          })
        } else yY(null)
      }), [DY, null === DY || void 0 === DY ? void 0 : DY.name, null === DY || void 0 === DY ? void 0 : DY.amount]);
      const QY = !!DY && !(null === sY || void 0 === sY || !sY.salvageable) && !(null !== (rY = sY.produces) && void 0 !== rY && rY.some((YY => {
        let {
          amt: rY
        } = YY;
        return rY < 1
      })));
      return (0, vY.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, vY.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: gY("item:salvagingTable")
        }), (0, vY.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, vY.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, vY.jsx)(bD.e, {
              idx: cD.h,
              setHovered: YY => {
                null === IY || void 0 === IY || IY(cD.h)(YY)
              },
              pointerDown: RY,
              pointerUp: OY,
              draggedInfo: null,
              specialItemInfo: DY,
              variation: "Salvaging Table"
            })
          }), (0, vY.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, vY.jsx)(iY.f, {
              className: "SalvageButton",
              onClick: QY ? () => {
                const {
                  idx: YY,
                  name: rY,
                  amount: AY
                } = DY;
                aY.gameBridge.send("salvageItem", {
                  slot: YY,
                  name: rY,
                  amount: AY
                }) && (yY(null), FY(null))
              } : void 0,
              disabled: !QY,
              children: sY ? sY.salvageable ? sY.produces.some((YY => {
                let {
                  amt: rY
                } = YY;
                return rY < 1
              })) ? (0, vY.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, vY.jsx)("div", {
                  className: "SalvageText Error",
                  children: gY("salvagingTable:notEnoughResources")
                })
              }) : uY < sY.produces.length ? (0, vY.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, vY.jsx)("div", {
                  className: "SalvageText Error",
                  children: gY("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, vY.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, vY.jsx)("div", {
                  className: "SalvageText",
                  children: gY("salvagingTable:salvage")
                }), (0, vY.jsx)("div", {
                  className: "SalvageIcons",
                  children: sY.produces.map(((YY, rY) => {
                    let {
                      item: DY,
                      amt: FY
                    } = YY;
                    return (0, vY.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: DY,
                        amount: Math.floor(FY)
                      })
                    }, rY)
                  }))
                })]
              }) : (0, vY.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, vY.jsx)("div", {
                  className: "SalvageText Error",
                  children: gY("salvagingTable:unsalvageable")
                })
              }) : (0, vY.jsx)(vY.Fragment, {})
            })
          })]
        })]
      })
    }
    var kD = DY(229),
      GD = DY(8830),
      xD = DY(2437),
      nD = DY(8094),
      PD = DY(8090),
      UD = DY(1646),
      LD = DY(1863),
      tD = DY(1392),
      YF = DY(1934);

    function rF(YY, rY, DY) {
      const FY = YY.trim().toLowerCase();
      if ("" === FY) return 0;
      let AY = null;
      for (const IY of rY) {
        const YY = IY.toLowerCase().indexOf(FY);
        if (0 === YY) return 0;
        YY > 0 && (AY = 1)
      }
      if (null !== AY) return AY;
      for (const IY of DY)
        if (IY.toLowerCase().includes(FY)) return 2;
      return null
    }

    function DF(YY) {
      return YY.map((YY => {
        var rY;
        return YY ? {
          name: YY.name,
          amount: null !== (rY = YY.amount) && void 0 !== rY ? rY : 1
        } : null
      }))
    }

    function FF(YY) {
      return YY < 1e3 ? `${YY}` : YY < 1e4 ? Math.floor(YY / 100) / 10 + "k" : `${Math.floor(YY/1e3)}k`
    }
    var AF = DY(36189);
    const IF = iY.f,
      RF = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      OF = () => {
        const YY = (0, tD.g)();
        return YY ? YY.getPadRepeatTiming(RF) : RF
      };

    function gF(YY, rY, DY) {
      var FY, AY;
      const IY = (0, ND.t)(rY, YY);
      let RY = null === (FY = rY[YY]) || void 0 === FY ? void 0 : FY.description;
      if (DY && (null === (AY = (0, AF.e)().get(YY)) || void 0 === AY || !AY.hideIngredients)) {
        RY ? (RY = (0, NY.qb)(RY), RY.push({
          str: "\n"
        })) : RY = [], RY.push({
          str: "\n"
        }), RY.push({
          str: "Can be crafted from:\n"
        });
        for (const YY of DY) "string" === typeof YY && (RY.push({
          icon: YY,
          style: {
            fontSize: "1.5em"
          }
        }), RY.push({
          str: " "
        }), RY.push(...(0, NY.qb)((0, ND.t)(rY, YY))), RY.push({
          str: "\n"
        }))
      }
      return {
        name: IY,
        desc: RY
      }
    }

    function aF(YY) {
      let {
        name: rY,
        Wv: DY
      } = YY;
      return `${rY}_${DY}`
    }

    function vF(YY) {
      var rY;
      let {
        onClick: DY,
        itemName: FY,
        recipeId: IY,
        isSelected: RY,
        haveIngredients: OY,
        craftable: gY,
        setHovered: aY,
        padActions: uY,
        marked: sY,
        lock: iY,
        itemInfo: yY
      } = YY;
      const QY = (0, AY.useRef)(null);
      return (0, nD.e)(QY, {
        press: YY => !OY || "secondary" === YY && !gY ? (uY.refuse(), !1) : "primary" === YY ? (uY.choose(), !0) : uY.craft(),
        release: uY.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, vY.jsxs)("div", {
        ref: QY,
        className: ir()("InvenItem", {
          CraftableItemNotEnoughIngredients: !OY && !iY,
          CraftableItemMarked: sY,
          CraftableItemLocked: void 0 !== iY,
          CraftableItemLockedFar: (null !== (rY = null === iY || void 0 === iY ? void 0 : iY.stepsAway) && void 0 !== rY ? rY : 1) > 1
        }),
        "data-recipe-key": IY,
        "data-pad-inventory-default": RY ? "" : void 0,
        onClick: DY,
        style: {
          cursor: RY ? null : "pointer"
        },
        onPointerEnter: YY => {
          null === aY || void 0 === aY || aY(!0, gF(FY, yY)), !RY && (0, UD.m)(YY.nativeEvent) && (0, PD.i)() && DY()
        },
        onPointerLeave: () => {
          null === aY || void 0 === aY || aY(!1)
        },
        children: [(0, vY.jsx)(SD.c, {
          itemName: FY,
          amount: 1
        }), sY && (0, vY.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), iY && (0, vY.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, vY.jsx)(oY.e, {
            name: "lock"
          }), (0, vY.jsx)(TY.b, {
            text: iY.tag
          })]
        })]
      })
    }

    function uF(YY) {
      let {
        idx: rY,
        status: DY,
        shownItem: FY,
        dim: IY,
        onHoverStart: RY,
        onHoverEnd: OY,
        onPadBack: gY
      } = YY;
      const aY = (0, AY.useRef)(null);
      (0, nD.e)(aY, {
        press: () => !1,
        back: gY,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const uY = DY.need > 0 ? Math.min(DY.have / DY.need, 1) : 1;
      return (0, vY.jsxs)("div", {
        ref: aY,
        className: ir()("CupTile", {
          Short: DY.missing > 0
        }),
        style: {
          width: IY,
          height: IY
        },
        "data-craft-ingredient": rY,
        onPointerEnter: RY,
        onPointerLeave: OY,
        children: [(0, vY.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${uY})`
          }
        }), (0, vY.jsx)(SD.c, {
          itemName: FY,
          amount: 0
        }), (0, vY.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [FF(DY.have), "/", FF(DY.need)]
        })]
      })
    }

    function sF(YY) {
      var rY, DY, FY, IY, RY;
      let {
        show: OY,
        recipeItem: {
          name: gY,
          Wv: uY,
          requires: sY,
          produces: iY,
          haveIngredients: yY
        },
        detail: QY,
        onCraft: oY,
        setHovered: WY,
        craftButtonRef: EY,
        onPadBack: mY,
        showPadShortcut: VY,
        refusedCount: SY,
        lock: lY,
        itemInfo: eY
      } = YY;
      const {
        t: NY
      } = (0, nY.C)(), BY = null !== QY && !QY.roomForOne, cY = null !== (rY = null === QY || void 0 === QY ? void 0 : QY.craftAllTimes) && void 0 !== rY ? rY : 0, KY = function(YY, rY) {
        return YY.map((YY => {
          let {
            items: DY,
            amt: FY
          } = YY, AY = 0;
          const IY = [];
          for (const RY of DY) {
            const YY = rY(RY);
            AY += YY, YY > 0 && IY.push(RY)
          }
          return 0 === IY.length && IY.push(DY[0]), {
            shownItems: IY,
            need: FY,
            have: AY,
            missing: Math.max(FY - AY, 0)
          }
        }))
      }(sY, (YY => {
        var rY;
        return null !== (rY = null === QY || void 0 === QY ? void 0 : QY.amounts[YY]) && void 0 !== rY ? rY : 0
      }));
      let HY = "4rem",
        zY = 4;
      3 === sY.length || 4 === sY.length ? HY = "3.75rem" : sY.length >= 5 && (HY = "3rem"), 4 === sY.length ? zY = 2 : sY.length <= 6 && (zY = 3);
      const ZY = `calc(${zY} * ${HY} + ${zY-1} * 0.4rem + 1px)`,
        CY = (0, AY.useRef)(null),
        fY = (0, AY.useRef)(null);
      (0, AY.useLayoutEffect)((() => {
        CY.current.scrollTop = 0
      }), [gY, uY]);
      const jY = (0, AY.useRef)(SY);
      (0, AY.useEffect)((() => {
        if (SY === jY.current) return;
        jY.current = SY;
        const YY = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const FY of null !== (rY = null === (DY = CY.current) || void 0 === DY ? void 0 : DY.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== rY ? rY : []) {
          var rY, DY;
          FY.animate(YY, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [SY]);
      const hY = (YY, rY, DY) => {
          var FY;
          if ((0, AF.e)().has(gY)) return void(DY && clearInterval(dY.current));
          const AY = null !== (FY = null === QY || void 0 === QY ? void 0 : QY.resultStackable) && void 0 !== FY && FY,
            IY = DF(aY.gameBridge.latest("inventory").player),
            {
              Ev: RY,
              da: OY,
              amountAddedToSlot: vY
            } = aY.gameBridge.send("craftRecipe", {
              name: gY,
              Wv: uY,
              times: rY || YY && AY ? null : 1
            });
          if (RY > 0) {
            const rY = [],
              FY = new Set(sY.flatMap((YY => {
                let {
                  items: rY
                } = YY;
                return rY
              }))),
              RY = function(YY, rY, DY) {
                const FY = [];
                for (let AY = 0; AY < YY.length; AY++) {
                  const IY = YY[AY];
                  if (!IY || !DY.has(IY.name)) continue;
                  const RY = rY[AY],
                    OY = (null === RY || void 0 === RY ? void 0 : RY.name) === IY.name ? RY.amount : 0;
                  OY < IY.amount && FY.push({
                    idx: AY,
                    itemName: IY.name,
                    amount: IY.amount - OY
                  })
                }
                return FY
              }(IY, DF(aY.gameBridge.latest("inventory").player), FY).slice(0, 12),
              uY = DY ? 0 : Math.min(50, 400 / RY.length),
              yY = DY ? 220 : 320;
            for (const YY of RY) {
              var iY;
              const DY = sY.findIndex((rY => {
                  let {
                    items: DY
                  } = rY;
                  return DY.includes(YY.itemName)
                })),
                FY = null === (iY = CY.current) || void 0 === iY ? void 0 : iY.querySelector(`[data-craft-ingredient="${DY}"]`),
                AY = (0, ND.c)(YY.idx);
              FY && AY && rY.push({
                kind: "ingredient",
                itemName: YY.itemName,
                amount: YY.amount,
                da: YY.idx,
                from: AY,
                to: (0, ND.c)(FY),
                delayMs: Math.round(rY.length * uY),
                durationMs: yY
              })
            }
            let QY;
            if (null !== OY && vY > 0 && fY.current) {
              const YY = rY.length > 0 ? rY[rY.length - 1].delayMs + .6 * yY : 0;
              QY = {
                itemName: gY,
                amount: vY,
                da: OY,
                from: (0, ND.c)(fY.current),
                delayMs: Math.round(YY)
              }
            }
            oY(QY, YY && !AY ? OY : null, rY), TD.b.play("wood1", .5).rate(1.75)
          }
        },
        dY = (0, AY.useRef)(null);
      (0, AY.useEffect)((() => () => {
        clearInterval(dY.current)
      }), []);
      const JY = (YY, rY) => {
          hY(YY, !1, !1), clearInterval(dY.current), rY && (dY.current = setTimeout((() => {
            dY.current = setInterval((() => {
              hY(YY, !1, !0)
            }), rY.intervalMs)
          }), rY.initialDelayMs))
        },
        MY = () => {
          clearInterval(dY.current)
        },
        wY = !yY || BY || Boolean(lY),
        bY = (0, AY.useRef)(null),
        XY = null !== (DY = null === (FY = (0, YF.d)()) || void 0 === FY ? void 0 : FY.hideButtonHints) && void 0 !== DY && DY,
        qY = null !== (IY = null === (RY = (0, tD.g)()) || void 0 === RY ? void 0 : RY.getBoundButton("inventorySecondary")) && void 0 !== IY ? IY : null,
        pY = () => !wY && (hY(!1, !0, !1), !0);
      (0, nD.e)(EY, {
        press: YY => "secondary" === YY ? pY() : !wY && (JY(!1, OF()), !0),
        release: MY,
        back: mY,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, nD.e)(bY, {
        press: pY,
        back: mY,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [kY, GY] = (0, AY.useState)(0), [xY, PY] = (0, AY.useState)(null);
      (0, AY.useEffect)((() => {
        if (!0 === OY) {
          GY(0);
          const YY = setInterval((() => {
            GY((YY => YY + 1))
          }), 1e3);
          return () => {
            clearInterval(YY)
          }
        }
        return () => {}
      }), [OY]);
      const UY = null === QY || void 0 === QY ? void 0 : QY.ingredientsCraftedFrom,
        LY = (0, AY.useRef)(WY);
      (0, AY.useEffect)((() => {
        LY.current = WY
      }), [WY]);
      const tY = !(null === lY || void 0 === lY || !lY.hideIngredients);
      (0, AY.useEffect)((() => {
        var YY, rY;
        if (!xY) return;
        if (tY) return PY(null), void(null === (rY = LY.current) || void 0 === rY || rY.call(LY, !1));
        const DY = xY[kY % xY.length];
        null === (YY = LY.current) || void 0 === YY || YY.call(LY, !0, gF(DY, eY, null === UY || void 0 === UY ? void 0 : UY[DY]))
      }), [xY, kY, eY, UY, tY]);
      const Yr = !!lY,
        rr = (0, AY.useRef)(!1);
      (0, AY.useEffect)((() => {
        var YY;
        Yr && (clearInterval(dY.current), tY && rr.current && (rr.current = !1, null === (YY = LY.current) || void 0 === YY || YY.call(LY, !1)))
      }), [Yr, tY]);
      const Dr = (0, ND.t)(eY, gY);
      return (0, vY.jsxs)("div", {
        ref: CY,
        className: "CraftableInfo SmallTextBold",
        children: [(0, vY.jsx)("div", {
          className: "CraftableHeader",
          children: (0, vY.jsx)(TY.b, {
            text: Dr
          })
        }), !tY && (0, vY.jsx)("div", {
          className: ir()("CraftableIngredients", {
            Compact: sY.length >= 5
          }),
          style: {
            maxWidth: ZY
          },
          children: KY.map(((YY, rY) => {
            const DY = YY.shownItems[kY % YY.shownItems.length];
            return (0, vY.jsx)(uF, {
              idx: rY,
              status: YY,
              shownItem: DY,
              dim: HY,
              onHoverStart: () => {
                PY(YY.shownItems)
              },
              onHoverEnd: () => {
                PY(null), null === WY || void 0 === WY || WY(!1)
              },
              onPadBack: mY
            }, rY)
          }))
        }), lY && (0, vY.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, vY.jsx)(TY.b, {
            text: lY.reason
          })
        }), !lY && (!yY || BY) && (0, vY.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!yY && "Missing ingredients", (0, vY.jsx)("br", {}), BY && "Inventory is full"]
        }), !tY && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsxs)(IF, {
            ref: EY,
            className: "DoCraftButton",
            onPointerDown: YY => {
              JY((0, ND.w)(YY), (0, UD.m)(YY.nativeEvent) ? OF() : RF)
            },
            onPointerUp: MY,
            onPointerLeave: MY,
            disabled: wY,
            children: [VY && qY && !wY && !XY && (0, vY.jsx)(LD.c, {
              className: "CraftShortcutGlyph",
              glyph: qY
            }), (0, vY.jsx)("div", {
              ref: fY,
              className: "DoCraftItem",
              onPointerEnter: () => {
                rr.current = !0, null === WY || void 0 === WY || WY(!0, gF(gY, eY))
              },
              onPointerLeave: () => {
                rr.current = !1, null === WY || void 0 === WY || WY(!1)
              },
              children: (0, vY.jsx)(SD.c, {
                itemName: gY,
                amount: iY
              })
            })]
          }), (0, vY.jsxs)(IF, {
            ref: bY,
            className: "DoCraftAllButton",
            onPointerDown: YY => {
              hY((0, ND.w)(YY), !0, !1)
            },
            disabled: wY,
            children: [(0, vY.jsx)("span", {
              className: "CraftAllLabel",
              children: NY("general:craftAll")
            }), cY > 0 && (0, vY.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", FF(cY)]
            })]
          })]
        })]
      })
    }

    function iF(YY) {
      let {
        selectedIdx: rY,
        hidden: DY
      } = YY;
      const FY = (0, VD.p)(),
        IY = (0, AY.useRef)(null);
      return (0, AY.useLayoutEffect)((() => {
        const YY = IY.current,
          FY = null === YY || void 0 === YY ? void 0 : YY.parentElement;
        if (!FY || !YY) return;
        const AY = FY.querySelector(".CraftableItems"),
          RY = () => {
            var IY, RY;
            if (DY) return void(YY.style.opacity = "0");
            const OY = null === AY || void 0 === AY ? void 0 : AY.children[rY],
              gY = null === (IY = null !== (RY = null === OY || void 0 === OY ? void 0 : OY.querySelector(".InvenItem")) && void 0 !== RY ? RY : OY) || void 0 === IY ? void 0 : IY.getBoundingClientRect();
            if (!gY || 0 === gY.width) return void(YY.style.opacity = "0");
            const aY = FY.getBoundingClientRect();
            YY.style.opacity = "1", YY.style.width = `${gY.width}px`, YY.style.height = `${gY.height}px`, YY.style.transform = `translate(${gY.left-aY.left+FY.scrollLeft}px, ${gY.top-aY.top+FY.scrollTop}px)`
          };
        RY();
        const OY = new MutationObserver(RY),
          gY = new ResizeObserver(RY);
        return gY.observe(FY), AY && (OY.observe(AY, {
          childList: !0,
          subtree: !0
        }), gY.observe(AY)), () => {
          OY.disconnect(), gY.disconnect()
        }
      }), [rY, DY]), (0, vY.jsx)("div", {
        ref: IY,
        className: ir()("SelectionReticle", {
          Secondary: FY
        })
      })
    }

    function yF(YY, rY, DY) {
      return YY ? (0, kD.c)(GD.h, YY) ? QF(YY, rY, DY) : YY : DY("classicGame:handCrafting")
    }

    function QF(YY, rY, DY) {
      var FY;
      const AY = null === (FY = rY[YY]) || void 0 === FY ? void 0 : FY.displayName;
      if ("string" === typeof AY) return DY(AY);
      const IY = aY.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(AY) ? AY.map((YY => {
        if ("string" === typeof YY) return YY;
        if ("translationKey" in YY) return DY(YY.translationKey, (0, nY.r)(YY.params, IY));
        if ("str" in YY) {
          if ("string" === typeof YY.str) return YY.str;
          if ("translationKey" in YY.str) return DY(YY.str.translationKey, (0, nY.r)(YY.str.params, IY))
        }
        return ""
      })).join("") : AY && "translationKey" in AY ? DY(AY.translationKey, (0, nY.r)(AY.params, IY)) : YY
    }

    function oF(YY, rY) {
      return YY === rY || null !== YY && null !== rY && YY.name === rY.name && YY.Wv === rY.Wv
    }

    function WF(YY) {
      var rY, DY, FY;
      let {
        show: IY,
        onCraft: RY,
        dispatchSelectedCraftable: OY,
        selectedCraftable: gY,
        craftingStation: uY,
        setHovered: sY
      } = YY;
      const {
        t: iY
      } = (0, nY.C)(), [yY, QY] = (0, AY.useState)(""), [oY, WY] = (0, AY.useState)(0);
      (0, AY.useEffect)((() => {
        IY || (QY(""), WY((YY => YY + 1)))
      }), [IY]);
      const [EY, mY] = (0, AY.useState)(uY);
      EY !== uY && (mY(uY), "" !== yY && (QY(""), WY((YY => YY + 1))));
      const VY = (0, AY.useRef)(null),
        SY = (0, AY.useRef)(null),
        lY = (0, PD.k)(),
        TY = lY.showing && "recipe" === lY.kind,
        [eY, NY] = (0, AY.useState)(0),
        cY = null !== uY && void 0 !== uY ? uY : null,
        KY = (0, AY.useRef)(null),
        HY = YY => {
          return !((rY = KY.current) === (DY = YY) || null !== rY && null !== DY && rY.station === DY.station && oF(rY.recipe, DY.recipe)) && (KY.current = YY, aY.gameBridge.send("focusCrafting", YY), !0);
          var rY, DY
        };
      HY(IY ? {
        station: cY,
        recipe: (null === (rY = KY.current) || void 0 === rY ? void 0 : rY.station) === cY ? KY.current.recipe : null
      } : null);
      let zY = aY.gameBridge.latest("crafting");
      const ZY = (0, BY.h)("itemInfo"),
        CY = "" !== yY.trim(),
        fY = (0, AF.u)(),
        jY = (0, AF.q)(),
        hY = (0, AF.w)(),
        dY = function(YY, rY) {
          const [DY, FY] = (0, AY.useState)(!1);
          (0, AY.useEffect)((() => {
            if (!YY) return void FY(!1);
            const rY = setTimeout((() => {
              FY(!0)
            }), 0);
            return () => {
              clearTimeout(rY)
            }
          }), [YY]);
          const IY = YY && DY,
            RY = (0, AY.useRef)({
              station: rY,
              at: new Map
            });
          return (RY.current.station !== rY || !IY && RY.current.at.size > 0) && (RY.current = {
            station: rY,
            at: new Map
          }), IY ? RY.current.at : null
        }(IY, uY);
      let JY = zY.recipes.filter((YY => {
        let {
          listed: rY
        } = YY;
        return rY
      }));
      if (CY) {
        const YY = [];
        for (const rY of zY.recipes) {
          var MY;
          const DY = null !== (MY = jY.get(rY.name)) && void 0 !== MY && MY.hideIngredients ? [] : rY.requires.flatMap((YY => {
              let {
                items: rY
              } = YY;
              return rY.flatMap((YY => [YY, QF(YY, ZY, iY)]))
            })),
            FY = rF(yY, [rY.name, QF(rY.name, ZY, iY)], DY);
          null !== FY && YY.push({
            item: rY,
            rank: FY
          })
        }
        YY.sort(((YY, rY) => YY.rank - rY.rank)), JY = YY.map((YY => {
          let {
            item: rY
          } = YY;
          return rY
        }))
      } else {
        if (dY && dY.size > 0) {
          const YY = zY.recipes.filter((YY => !YY.listed && dY.has(aF(YY))));
          JY = JY.concat(YY)
        }
        JY = (0, AF.g)(JY, fY, jY, hY), dY && (JY = (0, AF.f)(JY, dY, aF))
      }
      const wY = YY => JY.find((rY => aF(rY) === YY)),
        bY = `${uY}|${yY}`,
        [XY, qY] = (0, AY.useState)(null),
        pY = (null === XY || void 0 === XY ? void 0 : XY.context) === bY ? XY.key : null,
        kY = gY ? aF(gY) : null,
        GY = null !== (DY = null !== (FY = wY(kY)) && void 0 !== FY ? FY : wY(pY)) && void 0 !== DY ? DY : JY[0],
        xY = GY ? aF(GY) : null,
        PY = GY ? {
          name: GY.name,
          Wv: GY.Wv
        } : null;
      IY && HY({
        station: cY,
        recipe: PY
      }) && (zY = aY.gameBridge.latest("crafting")), xY !== kY && xY !== pY && qY(xY ? {
        context: bY,
        key: xY
      } : null), (0, AY.useEffect)((() => () => {
        KY.current = null, aY.gameBridge.send("focusCrafting", null)
      }), []);
      const UY = oF(zY.detail, PY) ? zY.detail : null,
        LY = null !== UY && !UY.roomForOne,
        tY = JY.findIndex((YY => aF(YY) === aF(GY))),
        Yr = () => SY.current ? (0, nD.b)(SY.current) : null,
        rr = (0, AY.useRef)(null),
        Dr = (0, AY.useRef)(0);
      Dr.current++;
      const Fr = Dr.current;
      (0, AY.useEffect)((() => {
        const YY = rr.current;
        if (!YY || Fr <= YY.afterRender) return;
        if (rr.current = null, YY.key !== xY) return;
        const rY = Yr();
        var DY;
        null !== rY && void 0 !== rY && rY.press("primary") && !YY.ja && (null === (DY = rY.release) || void 0 === DY || DY.call(rY))
      }));
      const Ar = YY => {
          const rY = {
            name: YY.name,
            Wv: YY.Wv
          };
          return {
            choose: () => {
              OY(rY), (0, mD.s)(SY.current)
            },
            craft: () => {
              var YY, DY;
              return OY(rY), aF(rY) !== aF(GY) ? (rr.current = {
                key: aF(rY),
                ja: !0,
                afterRender: Dr.current
              }, !0) : null !== (YY = null === (DY = Yr()) || void 0 === DY ? void 0 : DY.press("primary")) && void 0 !== YY && YY
            },
            stopCraft: () => {
              var YY, rY;
              rr.current ? rr.current.ja = !1 : null === (YY = Yr()) || void 0 === YY || null === (rY = YY.release) || void 0 === rY || rY.call(YY)
            },
            refuse: () => {
              aF(rY) !== aF(GY) && OY(rY), NY((YY => YY + 1))
            }
          }
        },
        Ir = () => {
          var YY, rY, DY;
          (0, mD.s)(null !== (YY = null === (rY = VY.current) || void 0 === rY || null === (DY = rY.querySelector(".CraftableItems")) || void 0 === DY ? void 0 : DY.children[tY]) && void 0 !== YY ? YY : null)
        },
        Rr = JY.map(aF).join("|"),
        Or = (0, AY.useRef)(Rr);
      return (0, AY.useEffect)((() => {
        Or.current !== Rr && (Or.current = Rr, TY && tY >= 0 && (0, PD.i)() && Ir())
      })), (0, vY.jsxs)("div", {
        className: "Craftables",
        children: [(0, vY.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: yF(uY, ZY, iY)
        }), (0, vY.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, vY.jsx)(Br.d, {
            className: "CraftingSearch",
            placeholderText: iY("general:searchRecipes"),
            defaultValue: yY,
            maxLength: 100,
            onValueChange: YY => {
              QY(YY)
            },
            blurOnEnter: !0
          }, oY), 0 === JY.length && CY && (0, vY.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: iY("general:noRecipesMatchSearch")
          }), JY.length > 0 && (0, vY.jsxs)(vY.Fragment, {
            children: [(0, vY.jsxs)("div", {
              ref: VY,
              className: "CraftablesLeftSide",
              children: [(0, vY.jsx)(xD.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(JY.map((YY => {
                  let {
                    name: rY,
                    Wv: DY,
                    haveIngredients: FY
                  } = YY;
                  return {
                    name: rY,
                    Wv: DY,
                    haveIngredients: FY
                  }
                })))],
                observing: IY,
                children: JY.map((YY => {
                  const {
                    name: rY,
                    Wv: DY,
                    haveIngredients: FY
                  } = YY, AY = aF(YY);
                  return (0, vY.jsx)(vF, {
                    recipeId: AY,
                    itemName: rY,
                    onClick: () => {
                      OY({
                        name: rY,
                        Wv: DY
                      })
                    },
                    isSelected: aF(GY) === AY,
                    haveIngredients: FY,
                    craftable: FY && !jY.has(rY) && !(aF(GY) === AY && LY),
                    setHovered: sY,
                    padActions: Ar(YY),
                    marked: fY.has(rY),
                    lock: jY.get(rY),
                    itemInfo: ZY
                  }, AY)
                }))
              }), (0, vY.jsx)(iF, {
                selectedIdx: tY,
                hidden: TY && lY.steppingSlots
              })]
            }), (0, vY.jsx)(sF, {
              show: IY,
              recipeItem: GY,
              detail: UY,
              onCraft: RY,
              setHovered: sY,
              craftButtonRef: SY,
              onPadBack: Ir,
              showPadShortcut: TY,
              refusedCount: eY,
              lock: jY.get(GY.name),
              itemInfo: ZY
            })]
          })]
        })]
      })
    }
    var EF = DY(8770),
      mF = DY(2864),
      VF = DY(1980),
      SF = DY(8084);
    class lF {
      constructor(YY, rY, DY) {
        this.commit = YY, this.delayMs = rY, this.defers = DY, this.pending = null, this.timer = void 0, this.ja = !1, this.flush = () => {
          clearTimeout(this.timer);
          const YY = this.pending;
          null !== YY && (this.pending = null, this.commit(YY))
        }
      }
      type(YY) {
        this.pending = YY, clearTimeout(this.timer), this.ja || this.defers() ? this.ja || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(YY) {
        var rY;
        return null !== (rY = this.pending) && void 0 !== rY ? rY : YY
      }
      isHeld() {
        return this.ja
      }
      setHeld(YY) {
        this.ja = YY, YY || this.flush()
      }
    }

    function TF(YY) {
      return null === YY ? "creativeInventory:all" : `creativeInventory:${YY}`
    }

    function eF(YY) {
      let {
        category: rY
      } = YY;
      return null === rY ? (0, vY.jsx)(oY.e, {
        name: "layer-group"
      }) : (0, vY.jsx)(SD.c, {
        itemName: EF.creativeItemCategoryIcons[rY],
        amount: 0
      })
    }

    function NF(YY) {
      let {
        labelKey: rY,
        isSelected: DY,
        onSelect: FY,
        setHovered: AY,
        children: IY
      } = YY;
      return (0, vY.jsx)("div", {
        className: ir()("CreativeCategoryTab", {
          Selected: DY
        }),
        onClick: FY,
        onPointerEnter: YY => {
          (0, ND.p)(YY) || AY(!0, {
            name: {
              translationKey: rY
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          AY(!1)
        },
        children: IY
      })
    }

    function BF(YY) {
      let {
        categories: rY,
        selectedCategory: DY,
        onSelect: FY
      } = YY;
      const {
        t: IY
      } = (0, nY.C)(), [RY, OY] = (0, AY.useState)(!1), gY = (0, AY.useRef)(null), aY = (0, AY.useCallback)((() => {
        OY(!1)
      }), []);
      return (0, VF.e)(gY, aY), (0, vY.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: gY,
        children: [(0, vY.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            OY(!RY)
          },
          children: [(0, vY.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, vY.jsx)(eF, {
              category: DY
            })
          }), (0, vY.jsx)("span", {
            children: IY(TF(DY))
          }), (0, vY.jsx)(oY.e, {
            name: RY ? "caret-up" : "caret-down"
          })]
        }), RY && (0, vY.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: rY.map((YY => (0, vY.jsxs)("div", {
            className: ir()("CreativeCategoryDropdownOption", {
              Selected: DY === YY
            }),
            onClick: () => {
              FY(YY), OY(!1)
            },
            children: [(0, vY.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, vY.jsx)(eF, {
                category: YY
              })
            }), (0, vY.jsx)("span", {
              children: IY(TF(YY))
            })]
          }, null !== YY && void 0 !== YY ? YY : "all")))
        })]
      })
    }
    const cF = (0, AY.memo)((function(YY) {
      let {
        creativeScrollDiv: rY,
        playerInvenNumSlots: DY,
        getSetHoveringForIdx: FY,
        getPointerDownForIdx: IY,
        getPointerUpForIdx: RY,
        creativeSearchVal: OY,
        setCreativeSearchVal: aY,
        creativeCategory: uY,
        setCreativeCategory: sY,
        show: iY
      } = YY;
      const {
        t: yY
      } = (0, nY.C)(), QY = (0, BY.h)("creativeVisibility"), {
        userContext: WY
      } = (0, lY.d)(), EY = (0, gY.j)("canUseDevCreativeItems"), mY = WY.playerHasRank("developer") || !!EY, VY = (0, AY.useMemo)((() => HF("", QY, mY)), [QY, mY]), SY = (0, AY.useMemo)((() => {
        const YY = (0, EF.creativeItemIds)(),
          rY = new Set(VY.map((rY => (0, EF.creativeCategoryOf)(YY[rY]))));
        return EF.creativeItemCategories.filter((YY => rY.has(YY)))
      }), [VY]), TY = null !== uY && SY.includes(uY) ? uY : null, NY = (0, AY.useMemo)((() => "" === OY ? VY : HF(OY, QY, mY)), [VY, OY, QY, mY]), cY = (0, AY.useMemo)((() => {
        const YY = (0, EF.creativeItemIds)();
        return null !== TY ? NY.filter((rY => (0, EF.creativeCategoryOf)(YY[rY]) === TY)) : "" === OY ? NY.filter((rY => !(0, EF.showOnlyInCreativeCategory)(YY[rY]))) : NY
      }), [NY, TY, OY]), KY = FY();

      function HY(YY) {
        sY(YY), rY.current.scrollTop = 0
      }
      const zY = [null, ...SY],
        {
          isTouchScreen: ZY
        } = (0, MY.j)(["isTouchScreen"]),
        CY = !ZY,
        fY = (0, AY.useRef)(null),
        [jY, hY] = (0, AY.useState)(0);
      (0, AY.useEffect)((() => {
        const YY = fY.current;
        if (!YY) return;
        const rY = new ResizeObserver((YY => {
          hY(YY[0].contentRect.height)
        }));
        return rY.observe(YY), () => {
          rY.disconnect()
        }
      }), [CY]);
      const dY = (0, AY.useRef)(null),
        JY = (0, AY.useCallback)((function YY() {
          "up" === dY.current ? rY.current.scrollTop -= 10 : "down" === dY.current && (rY.current.scrollTop += 10), dY.current && requestAnimationFrame(YY)
        }), [rY]),
        wY = (0, AY.useCallback)((function(YY) {
          dY.current || (dY.current = YY, JY())
        }), [JY]);

      function bY() {
        dY.current = null
      }
      const XY = (0, AY.useRef)({
        creativeSearchVal: OY,
        setCreativeSearchVal: aY
      });
      XY.current = {
        creativeSearchVal: OY,
        setCreativeSearchVal: aY
      };
      const [qY] = (0, AY.useState)((() => new lF((YY => {
        XY.current.setCreativeSearchVal(YY)
      }), 250, VD.f))), pY = YY => {
        var DY;
        null === (DY = rY.current) || void 0 === DY || DY.classList.toggle("CreativeItemSlotsStale", YY)
      };
      (0, eY.g)(SF.e, (YY => {
        qY.setHeld(YY), YY || pY(!1)
      })), (0, AY.useEffect)((() => qY.flush), [qY]);
      const kY = (0, vY.jsx)(Br.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: OY,
          maxLength: 1e4,
          onValueChange: (YY, rY) => {
            "" === qY.getTyped(XY.current.creativeSearchVal) && "" !== YY && sY(null), qY.type(YY), pY(qY.isHeld())
          },
          onEnter: qY.flush,
          blurOnEnter: !0
        }),
        GY = (0, vY.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [ZY && (0, vY.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, vY.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                wY("up")
              },
              onPointerLeave: bY,
              onPointerUp: bY,
              children: (0, vY.jsx)(oY.e, {
                name: "arrow-up"
              })
            }), (0, vY.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                wY("down")
              },
              onPointerLeave: bY,
              onPointerUp: bY,
              children: (0, vY.jsx)(oY.e, {
                name: "arrow-up"
              })
            })]
          }), (0, vY.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: rY,
            children: [0 === cY.length && "" !== OY && (0, vY.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: yY("general:noResults")
            }), (0, vY.jsx)(xD.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [OY, TY],
              observerRoot: "CreativeItemSlots",
              observing: iY,
              children: cY.map((YY => {
                const rY = DY + YY;
                return (0, vY.jsx)(bD.e, {
                  idx: rY,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: FY(rY),
                  pointerDown: IY(rY),
                  pointerUp: RY(rY)
                }, rY)
              }))
            })]
          })]
        });
      return (0, vY.jsxs)("div", {
        className: ir()("CreativeItemSlotsWrapper", CY ? "WithRail" : "WithDropdown"),
        children: [CY && (0, vY.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: fY,
          style: {
            "--rail-height": jY > 0 ? `${jY}px` : void 0,
            "--tab-rows": Math.ceil(zY.length / 2)
          },
          children: zY.map((YY => (0, vY.jsx)(NF, {
            labelKey: TF(YY),
            isSelected: TY === YY,
            onSelect: () => {
              HY(YY)
            },
            setHovered: KY,
            children: (0, vY.jsx)(eF, {
              category: YY
            })
          }, null !== YY && void 0 !== YY ? YY : "all")))
        }), (0, vY.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, vY.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [kY, !CY && (0, vY.jsx)(BF, {
              categories: zY,
              selectedCategory: TY,
              onSelect: HY
            })]
          }), GY]
        })]
      })
    }));

    function KF(YY) {
      var rY;
      return null !== (rY = (0, mF.e)(YY)) && void 0 !== rY ? rY : ""
    }

    function HF(YY, rY, DY) {
      let {
        publicLobby: FY,
        shownInGame: AY
      } = rY;
      const IY = YY.toLowerCase(),
        RY = (0, EF.creativeItemIds)(),
        OY = YY => {
          var rY;
          const IY = RY[YY];
          return !(0, EF.itemIsDisabled)(IY, FY, null === (rY = AY[KF(IY)]) || void 0 === rY || rY, DY)
        };
      if ("" === IY) return RY.map(((YY, rY) => rY)).filter((YY => !(0, EF.showOnlyInCreativeSearch)(RY[YY]))).filter(OY);
      const gY = [];
      for (let aY = 0; aY < RY.length; aY++) KF(RY[aY]).toLowerCase().includes(IY) && gY.push(aY);
      gY.sort(((YY, rY) => {
        const DY = KF(RY[YY]).toLowerCase(),
          FY = KF(RY[rY]).toLowerCase();
        return DY.indexOf(IY) - FY.indexOf(IY)
      }));
      for (const [aY, vY] of(0, EF.creativeAltNames)())
        for (const YY of vY)
          if (YY.toLowerCase().includes(IY)) {
            const YY = RY.indexOf(aY);
            gY.includes(YY) || gY.push(YY)
          } return gY.filter(OY)
    }
    var zF = DY(36206),
      ZF = DY(625);

    function CF(YY) {
      return YY > ZF.i
    }

    function fF(YY) {
      const rY = YY / 2,
        DY = [];
      for (let FY = 0; FY < rY / 6; FY++)
        for (let YY = 0; YY < 12; YY++) {
          const AY = YY < 6 ? 0 : rY;
          DY.push(AY + 6 * FY + YY % 6)
        }
      return DY
    }

    function jF(YY) {
      let {
        numSlots: rY,
        renderSlot: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), IY = (0, AY.useRef)(null);
      var RY;
      return RY = IY, (0, AY.useLayoutEffect)((() => {
        var YY;
        const rY = null === (YY = RY.current) || void 0 === YY ? void 0 : YY.closest(".InvenBody");
        if (!rY) return;
        const DY = () => {
          rY.style.zoom = "";
          const YY = parseFloat(getComputedStyle(document.documentElement).fontSize),
            DY = window.innerWidth - 2 * YY,
            FY = rY.getBoundingClientRect().width;
          FY > DY && (rY.style.zoom = "" + DY / FY)
        };
        return DY(), window.addEventListener("resize", DY), () => {
          window.removeEventListener("resize", DY), rY.style.zoom = ""
        }
      }), [RY]), (0, vY.jsxs)("div", {
        ref: IY,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, vY.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: FY("doubleChest:title")
        }), (0, vY.jsx)("div", {
          className: "GridItemSlots",
          children: fF(rY).map((YY => DY(YY)))
        })]
      })
    }

    function hF(YY) {
      let {
        lF: rY,
        initialPasskey: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), [IY, RY] = (0, AY.useState)(DY), [OY, gY] = (0, AY.useState)(DY);
      (0, AY.useEffect)((() => {
        RY(DY), gY(DY)
      }), [...rY]);
      return (0, vY.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, vY.jsx)("div", {
          className: "SmallTextBold",
          children: FY("ironChest:currentPasskey", {
            currentPasskey: IY.join("")
          })
        }), (0, vY.jsx)(dD, {
          className: "IronChestPasskeyEditor",
          kI: OY,
          onPasskeyUpdated: gY,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            aY.gameBridge.send("changeIronChestPasskey", {
              pos: [...rY],
              kI: [...OY]
            }), RY([...OY])
          }
        })]
      })
    }

    function dF(YY) {
      let {
        variation: rY,
        canCraft: DY,
        show: FY,
        creativeMounted: AY,
        specialItemRef: IY,
        draggedInfo: RY,
        getSetHovering: OY,
        getPointerDownForIdx: gY,
        getPointerUpForIdx: aY,
        enchantingTablePosition: uY,
        enchantingTableBlockName: sY,
        selectedCraftable: iY,
        dispatchSelectedCraftable: yY,
        creativeScrollDiv: QY,
        creativeSearchVal: oY,
        setCreativeSearchVal: WY,
        creativeCategory: EY,
        setCreativeCategory: mY,
        onCraft: VY
      } = YY;
      const {
        userContext: SY
      } = (0, lY.d)(), {
        t: TY
      } = (0, nY.C)(), eY = (0, BY.f)("inventory", (YY => YY.chest)), NY = (0, BY.f)("inventory", (YY => YY.player.length)), cY = (0, BY.f)("inventory", (YY => YY.creative));
      if (0 === NY) return null;
      let KY, HY;
      const zY = YY => {
          const rY = NY + YY;
          return (0, vY.jsx)(bD.e, {
            idx: rY,
            draggedInfo: RY,
            specialItemInfo: IY.current,
            setHovered: OY(rY),
            pointerDown: gY(rY),
            pointerUp: aY(rY)
          }, rY)
        },
        ZY = eY ? (0, zF.e)(eY.type) : null;
      if (ZY) KY = ir()("InvenLeftSideChestCustom", ZY.className), HY = (0, vY.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: ZY.render({
          lF: eY.pos,
          renderSlot: zY
        })
      });
      else if (eY) {
        const YY = eY.pos,
          rY = "Iron" === eY.type || "Moonstone" === eY.type ? eY.type : "Standard";
        let DY = !1,
          FY = null;
        "Iron" === rY && (DY = eY.ironChest.ownerDbId === SY.whamm, FY = eY.ironChest.kI), KY = `InvenLeftSideChest${rY}`;
        const AY = CF(eY.numSlots);
        HY = (0, vY.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [DY && (0, vY.jsx)(hF, {
            lF: YY,
            initialPasskey: FY
          }), AY && (0, vY.jsx)(jF, {
            numSlots: eY.numSlots,
            renderSlot: zY
          }), !AY && (0, vY.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, vY.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: TY("Moonstone" === rY ? "item:moonstoneChest" : "Iron" === rY ? "item:ironChest" : "item:chest")
            }), (0, vY.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(eY.numSlots).fill(0).map(((YY, rY) => zY(rY)))
            })]
          })]
        })
      } else if (!cY || rY && DY)
        if (DY && "Enchanting Table" === rY) KY = `InvenLeftSide${(null!==sY&&void 0!==sY?sY:"").replace(/ /gi,"")}`, HY = (0, vY.jsx)(XD, {
          specialItemInfo: IY.current,
          setHovered: OY,
          pointerDown: gY(cD.h),
          pointerUp: aY(cD.h),
          enchantingTablePosition: uY,
          enchantingTableBlockName: sY
        });
        else if (DY && "Salvaging Table" === rY) KY = "InvenLeftSideSalvagingTable", HY = (0, vY.jsx)(pD, {
        specialItemInfo: IY.current,
        setSpecialItemInfo: YY => {
          IY.current = YY
        },
        setHovered: OY,
        pointerDown: gY(cD.h),
        pointerUp: aY(cD.h)
      });
      else {
        if (!DY) return null;
        KY = `InvenLeftSide${(null!==rY&&void 0!==rY?rY:"HandCrafting").replace(/ /gi,"")}`, HY = (0, vY.jsx)(WF, {
          show: FY,
          onCraft: VY,
          craftingStation: rY,
          selectedCraftable: iY,
          dispatchSelectedCraftable: yY,
          setHovered: OY()
        })
      } else KY = "InvenLeftSideCreative", HY = AY ? (0, vY.jsx)(cF, {
        creativeScrollDiv: QY,
        playerInvenNumSlots: NY,
        getSetHoveringForIdx: OY,
        getPointerDownForIdx: gY,
        getPointerUpForIdx: aY,
        creativeSearchVal: oY,
        setCreativeSearchVal: WY,
        creativeCategory: EY,
        setCreativeCategory: mY,
        show: FY
      }) : null;
      const CY = !!eY || DY && !!rY;
      return (0, vY.jsx)("div", {
        className: `InvenLeftSide ${KY}`,
        "data-pad-inventory-start": CY ? "" : void 0,
        children: HY
      })
    }
    var JF = DY(614),
      MF = DY(19785),
      wF = DY(19794),
      bF = DY(19801);
    const XF = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: DY(19810)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: wF
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: bF
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: DY(19818)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: MF
      }
    };

    function qF(YY) {
      const {
        sprite: rY,
        image: DY
      } = XF[YY];
      return gD(rY, ID.i.ITEM, DY)
    }

    function pF(YY) {
      let {
        draggedInfo: rY,
        specialItemInfo: DY,
        craftFlyAnims: FY,
        getSetHovering: AY,
        getPointerDownForIdx: IY,
        getPointerUpForIdx: RY,
        variation: OY,
        canCraft: gY,
        isNewSlot: aY
      } = YY;
      const uY = (0, BY.f)("inventory", (YY => YY.player.length));
      return 0 === uY ? null : (0, vY.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, vY.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(JF.e.length).fill(0).map(((YY, sY) => {
            const iY = uY - JF.e.length + sY;
            return (0, vY.jsx)(bD.e, {
              idx: iY,
              draggedInfo: rY,
              specialItemInfo: DY,
              craftFlyHoldbackInfo: (0, BD.k)(FY, iY),
              setHovered: AY(iY),
              pointerDown: IY(iY),
              pointerUp: RY(iY),
              defaultIconB64: qF(JF.e[sY]),
              variation: gY ? OY : void 0,
              showNewDot: aY(iY)
            }, iY)
          }))
        }), (0, vY.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(uY - 10 - JF.e.length).fill(0).map(((YY, sY) => {
            const iY = uY - JF.e.length - sY - 1;
            return (0, vY.jsx)(bD.e, {
              idx: iY,
              draggedInfo: rY,
              specialItemInfo: DY,
              craftFlyHoldbackInfo: (0, BD.k)(FY, iY),
              setHovered: AY(iY),
              pointerDown: IY(iY),
              pointerUp: RY(iY),
              variation: gY ? OY : void 0,
              showNewDot: aY(iY)
            }, iY)
          }))
        })]
      })
    }
    var kF = DY(36212),
      GF = DY(36221);

    function xF(YY) {
      const {
        e: rY,
        idx: DY
      } = YY, FY = (0, ND.i)(YY.readInventory(), DY), AY = (0, ND.m)(rY);
      DY === cD.e ? function(YY, rY) {
        const {
          draggedInfoRef: DY,
          removeItem: FY,
          removeDraggedInfoRef: AY,
          close: IY
        } = YY;
        if (DY.current) {
          const YY = rY && DY.current.amount || 1;
          FY(DY.current.idx, YY, !0) && (DY.current.amount -= YY, DY.current.amount <= 0 && AY())
        } else rY && IY()
      }(YY, AY) : DY === cD.h ? function(YY, rY) {
        const {
          e: DY,
          draggedInfoRef: FY,
          specialItemRef: AY,
          moveAmtIntoSlot: IY,
          removeDraggedInfoRef: RY
        } = YY;
        if ((0, ND.w)(DY) && AY.current) AY.current = null;
        else if (FY.current && AY.current && (FY.current.idx === AY.current.idx || (0, GF.b)(FY.current, AY.current)) && FY.current.amount > 0 && AY.current.amount > 0 && AY.current.amount < jD.d.maxItemStackSize)
          if (FY.current.idx === AY.current.idx) {
            if (rY) {
              const YY = Math.min(FY.current.amount, jD.d.maxItemStackSize - AY.current.amount);
              AY.current.amount += YY, FY.current.amount -= YY
            } else FY.current.amount--, AY.current.amount++;
            FY.current.amount <= 0 && RY()
          } else if (rY) {
          const YY = Math.min(FY.current.amount, jD.d.maxItemStackSize - AY.current.amount);
          IY(AY.current.idx, YY) && (AY.current.amount += YY)
        } else {
          IY(AY.current.idx, 1) && AY.current.amount++
        } else if (!FY.current || AY.current || rY) {
          const YY = FY.current;
          FY.current = AY.current, AY.current = YY
        } else FY.current.amount--, AY.current = {
          idx: FY.current.idx,
          name: FY.current.name,
          attributes: FY.current.attributes,
          amount: 1
        }
      }(YY, AY) : (0, ND.w)(rY) ? function(YY, rY) {
        var DY, FY;
        const {
          idx: AY,
          draggedInfoRef: IY,
          specialItemRef: RY,
          canCraft: OY,
          variation: gY,
          swapSlots: aY,
          moveIntoSlots: vY
        } = YY;
        if (!rY) return;
        let uY = rY.amount;
        AY === (null === (DY = IY.current) || void 0 === DY ? void 0 : DY.idx) && (uY = IY.current.amount <= 0 ? 0 : rY.amount - IY.current.amount);
        AY === (null === (FY = RY.current) || void 0 === FY ? void 0 : FY.idx) && (uY = RY.current.amount <= 0 ? 0 : rY.amount - RY.current.amount);
        if (0 === uY) return;
        const sY = YY.readInventory(),
          iY = sY.player.length,
          yY = sY.chest,
          QY = iY - JF.e.length,
          oY = () => {
            if (!(0, VD.f)()) return void vY(10, QY, AY, uY);
            const YY = YY => {
              const DY = (0, ND.i)(sY, YY);
              return DY ? {
                amount: DY.amount,
                stacksWithMoved: (0, GF.b)(DY, rY)
              } : null
            };
            for (const rY of ((YY, rY, DY, FY, AY) => {
                const IY = [];
                let RY = FY;
                if (null !== FY) {
                  let OY = 0;
                  for (let FY = rY; FY < DY; FY++) {
                    const rY = YY(FY);
                    null !== rY && void 0 !== rY && rY.stacksWithMoved && null !== rY.amount && rY.amount > 0 && (OY += Math.max(0, AY - rY.amount))
                  }
                  const gY = Math.min(FY, OY);
                  if (gY > 0 && (IY.push({
                      start: rY,
                      end: DY,
                      amount: gY
                    }), RY = FY - gY), RY <= 0) return IY
                }
                for (let OY = DY - 1; OY >= rY; OY--)
                  if (null === YY(OY)) {
                    IY.push({
                      start: OY,
                      end: OY + 1,
                      amount: RY
                    });
                    break
                  } return IY
              })(YY, 10, QY, uY, jD.d.maxItemStackSize)) vY(rY.start, rY.end, AY, rY.amount)
          };
        if (!OY || "Enchanting Table" !== gY && "Salvaging Table" !== gY) {
          const DY = (0, NY.zb)(rY.name),
            FY = DY ? (0, NY.vb)(DY) : null;
          if (!JF.e.includes(DY) || AY !== FY && (0, ND.j)(sY, YY.itemInfo, FY, AY))
            if (yY)
              if (AY < iY) {
                var WY, EY;
                const [YY, rY] = null !== (WY = null === (EY = (0, zF.e)(yY.type)) || void 0 === EY ? void 0 : EY.quickMoveRange) && void 0 !== WY ? WY : [0, yY.numSlots];
                vY(iY + YY, iY + rY, AY, uY)
              } else vY(0, iY - JF.e.length, AY, uY);
          else sY.creative ? AY < 10 ? oY() : AY < iY ? vY(0, 10, AY, uY) : vY(0, iY - JF.e.length, AY, null !== rY.amount ? jD.d.maxItemStackSize : null) : AY < 10 ? oY() : vY(0, 10, AY, uY);
          else AY < iY - JF.e.length || AY >= iY ? aY(FY, AY) : (vY(0, iY - JF.e.length, FY, uY), TD.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else RY.current = {
          idx: AY,
          name: rY.name,
          attributes: rY.attributes,
          amount: null !== rY.amount ? uY : 0
        }
      }(YY, FY) : YY.draggedInfoRef.current ? function(YY, rY, DY, FY) {
        const {
          draggedInfoRef: AY,
          specialItemRef: IY,
          moveAmtIntoSlot: RY,
          swapSlots: OY,
          removeItem: gY,
          removeDraggedInfoRef: aY
        } = YY, vY = YY.readInventory(), uY = AY.current.idx;
        if (DY && (rY === uY || (0, GF.b)(AY.current, DY)) && AY.current.amount > 0 && (0, ND.b)(DY) > 0 && (DY.amount < jD.d.maxItemStackSize || rY === uY)) FY ? DY.amount + AY.current.amount <= jD.d.maxItemStackSize || rY === uY ? RY(rY, AY.current.amount) : RY(rY, jD.d.maxItemStackSize - DY.amount) : RY(rY, 1);
        else if (AY.current.amount > 0 && !DY) RY(rY, FY ? AY.current.amount : 1);
        else if (FY || DY || 0 === AY.current.amount)
          if (vY.creative && !vY.chest && rY >= vY.player.length) {
            const YY = 0 === AY.current.amount ? 1 : AY.current.amount;
            gY(AY.current.idx, YY, !1) && aY()
          } else {
            var sY;
            const DY = (null === (sY = IY.current) || void 0 === sY ? void 0 : sY.idx) === rY;
            if (OY(rY, AY.current.idx)) {
              const FY = YY.readInventory(),
                RY = (0, ND.i)(FY, uY),
                OY = !FY.chest && FY.creative && AY.current.idx >= FY.player.length;
              if (RY && AY.current.idx !== rY && !OY) {
                let YY = (0, ND.b)(RY);
                DY && (YY -= IY.current.amount), AY.current = DY && 0 === YY ? null : {
                  idx: AY.current.idx,
                  name: RY.name,
                  attributes: RY.attributes,
                  amount: YY
                }
              } else aY()
            }
          }
        else RY(rY, 1)
      }(YY, DY, FY, AY) : function(YY, rY, DY, FY) {
        var AY;
        const {
          draggedInfoRef: IY,
          specialItemRef: RY
        } = YY;
        if (!DY) return;
        let OY = (0, ND.b)(DY);
        const gY = (null === (AY = RY.current) || void 0 === AY ? void 0 : AY.idx) === rY;
        gY && (OY -= RY.current.amount);
        FY || (OY = Math.ceil(OY / 2));
        IY.current = gY && 0 === OY ? null : {
          idx: rY,
          name: DY.name,
          attributes: DY.attributes,
          amount: OY
        }
      }(YY, DY, FY, AY)
    }

    function nF(YY, rY) {
      return !!rY && rY.name === YY.name
    }

    function PF() {
      return aY.gameBridge.latest("inventory")
    }

    function UF(YY, rY, DY) {
      return aY.gameBridge.send("removeInventoryItem", {
        slot: YY,
        amount: rY,
        drop: DY
      })
    }

    function LF(YY) {
      return (0, ND.e)(YY, aY.gameBridge.latest("itemInfo"), aY.gameBridge.latest("stationItems").enchantable)
    }

    function tF(YY) {
      let {
        show: rY,
        close: DY,
        canCraft: FY,
        variation: IY,
        inventoryItemsMoveable: RY,
        setCraftFlyAnims: OY
      } = YY;
      (0, BY.h)("itemInfo");
      const [gY, vY] = (0, AY.useState)(null), [uY, sY] = (0, AY.useState)(null), [iY, yY] = (0, AY.useState)(!1), QY = (0, AY.useRef)(null), oY = (0, AY.useRef)(null), WY = (0, AY.useRef)(null), EY = (0, AY.useRef)(null), [mY, VY] = (0, AY.useReducer)((YY => YY + 1), 0), SY = (0, AY.useCallback)((() => {
        rY && VY()
      }), [rY, VY]), lY = (0, AY.useCallback)((() => {
        oY.current = null, jY.current = null, SY()
      }), [SY]), TY = (0, AY.useCallback)(((YY, rY) => {
        OY((DY => DY.map((DY => "ingredient" === DY.kind ? DY : DY.da === YY ? {
          ...DY,
          da: rY,
          to: (0, ND.c)(rY)
        } : DY.da === rY ? {
          ...DY,
          da: YY,
          to: (0, ND.c)(YY)
        } : DY))))
      }), [OY]), eY = (0, AY.useCallback)(((YY, rY) => {
        const DY = JY.current;
        if (DY.x = YY, DY.y = rY, QY.current) !MY.current.isTouch || MY.current.itemBeingDragged && !jY.current ? (QY.current.style.transform = `translate(${DY.x}px, ${DY.y}px)`, yY(MY.current.isTouch && !jY.current)) : (QY.current.style.transform = "translate(0.5rem, 0.5rem)", yY(!0));
        else if (EY.current) {
          const DY = EY.current;
          let FY = YY + 10,
            AY = rY + 10;
          const IY = DY.offsetWidth,
            RY = DY.offsetHeight;
          FY + IY > window.innerWidth && (FY = YY - IY - 10), AY + RY > window.innerHeight && (AY = rY - RY - 10), FY < 0 && (FY = 0), AY < 0 && (AY = 0), EY.current.style.transform = `translate(${FY}px, ${AY}px)`
        }
      }), []), cY = (0, AY.useCallback)((YY => (rY, DY, FY) => {
        if (vY(rY && void 0 !== YY ? YY : null), rY) {
          if (void 0 === YY && !DY) return void(0, kF.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== YY) {
            var AY;
            const rY = PF();
            let DY;
            if (DY = YY === cD.h ? WY.current ? (0, ND.i)(rY, WY.current.idx) : null : (0, ND.i)(rY, YY), !DY) return void sY(null);
            if ((null === (AY = WY.current) || void 0 === AY ? void 0 : AY.idx) === YY) {
              if (0 === (0, ND.b)(DY) - WY.current.amount) return void sY(null)
            }
            sY(LF(DY))
          } else sY({
            name: DY.name,
            desc: DY.desc,
            fontStyle: "normal"
          })
        } else sY(null);
        FY && setTimeout((() => {
          eY(FY.pageX, FY.pageY)
        }), 0)
      }), [eY]), KY = (0, AY.useCallback)(((YY, rY) => {
        const DY = aY.gameBridge.send("moveInventoryItem", {
          from: oY.current.idx,
          to: YY,
          amount: rY
        });
        return DY ? (oY.current.amount -= rY, oY.current.amount <= 0 && lY()) : console.error("moveInventoryItem failed"), DY
      }), [lY]), HY = (0, AY.useCallback)(((YY, rY) => {
        const DY = WY.current,
          FY = null === DY || void 0 === DY ? void 0 : DY.idx;
        DY && (DY.idx = function(YY, rY, DY) {
          return YY === rY ? DY : YY === DY ? rY : YY
        }(FY, YY, rY));
        const AY = aY.gameBridge.send("swapInventorySlots", {
          a: YY,
          b: rY
        });
        return AY ? TY(YY, rY) : DY && (DY.idx = FY), AY
      }), [TY]), zY = (0, AY.useCallback)(((YY, rY, DY, FY) => {
        const AY = aY.gameBridge.send("quickMoveInventoryItem", {
          slot: DY,
          start: YY,
          end: rY,
          amount: FY
        });
        null !== AY && TY(DY, AY)
      }), [TY]), ZY = (0, AY.useCallback)(((YY, rY) => {
        var AY;
        ((YY, rY, DY) => {
          const FY = YY - (DY - JF.e.length);
          return !(!rY || FY < 0 || FY >= JF.e.length) && (0, NY.zb)(rY) !== JF.e[FY]
        })(rY, null === (AY = oY.current) || void 0 === AY ? void 0 : AY.name, PF().player.length) || (xF({
          e: YY,
          idx: rY,
          readInventory: PF,
          itemInfo: aY.gameBridge.latest("itemInfo"),
          draggedInfoRef: oY,
          specialItemRef: WY,
          moveAmtIntoSlot: KY,
          swapSlots: HY,
          moveIntoSlots: zY,
          removeItem: UF,
          removeDraggedInfoRef: lY,
          close: DY,
          canCraft: FY,
          variation: IY
        }), SY())
      }), [FY, DY, KY, zY, lY, HY, IY, SY]), CY = (0, AY.useRef)(0), fY = (0, AY.useRef)(null), jY = (0, AY.useRef)(null), hY = (0, AY.useRef)(null), dY = (0, AY.useRef)(new Set), JY = (0, AY.useRef)({
        x: 0,
        y: 0
      }), MY = (0, AY.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), wY = (0, AY.useCallback)((() => (hY.current = null, MY.current.itemBeingDragged = !1, clearTimeout(fY.current), !!jY.current && (jY.current = null, SY(), !0))), [SY]);
      (0, AY.useEffect)((() => {
        wY(), dY.current.clear()
      }), [rY]);
      const bY = YY => void 0 !== YY && (dY.current.has(YY) || null !== hY.current && YY !== hY.current),
        XY = YY => {
          MY.current.isTouch = (0, ND.p)(YY)
        },
        qY = (0, AY.useCallback)((YY => rY => {
          const FY = (0, ND.p)(rY);
          if (FY || eY(rY.pageX, rY.pageY), RY)
            if (bY(rY.pointerId)) void 0 !== rY.pointerId && dY.current.add(rY.pointerId);
            else {
              if (XY(rY), FY) {
                CY.current = rY.timeStamp, MY.current.itemBeingDragged = !0, hY.current = rY.pointerId;
                const DY = (0, ND.i)(PF(), YY);
                if (DY && DY.amount && DY.amount > 0) {
                  const DY = rY.pageX,
                    FY = rY.pageY,
                    AY = JY.current.x,
                    IY = JY.current.y;
                  clearTimeout(fY.current), fY.current = setTimeout((() => {
                    if (oY.current && oY.current.idx === YY && (Math.abs(DY - JY.current.x) < 20 && Math.abs(FY - JY.current.y) < 20 || AY === JY.current.x && IY === JY.current.y) && MY.current.itemBeingDragged) {
                      const YY = PF(),
                        DY = YY.creative && !YY.chest && oY.current.idx >= jD.d.numInvenSlots && null !== (0, ND.i)(YY, oY.current.idx).amount ? jD.d.maxItemStackSize : oY.current.amount;
                      jY.current = {
                        initTouchX: rY.pageX,
                        initTouchY: rY.pageY,
                        maxAmount: DY
                      }, oY.current.amount = Math.ceil(oY.current.amount / 2), QY.current.style.transform = "translate(0.5rem, 0.5rem)", yY(!0), SY()
                    }
                  }), 500)
                }
              }
              ZY(rY, YY)
            }
          else YY === cD.e && (0, ND.m)(rY) && DY()
        }), [eY, ZY, RY, DY, SY]),
        pY = (0, AY.useCallback)((YY => YY => {
          if (bY(YY.pointerId)) return;
          const rY = (0, ND.p)(YY);
          if (XY(YY), !wY()) {
            if (rY && oY.current && YY.timeStamp - CY.current > 150) {
              const rY = document.elementFromPoint(YY.clientX, YY.clientY);
              if (null !== rY) {
                const DY = rY.getAttribute("data-inven-idx");
                null !== DY ? ZY(YY, parseInt(DY)) : rY.classList.contains("InventoryBackgroundScreen") && ZY(YY, -1)
              }
            }
            eY(YY.pageX, YY.pageY)
          }
        }), [eY, ZY, wY]);
      (0, AY.useEffect)((() => {
        let YY;
        const DY = ["pointerup", "pointercancel"],
          FY = YY => {
            dY.current.has(YY.pointerId) ? setTimeout((() => {
              dY.current.delete(YY.pointerId)
            }), 0) : YY.pointerId === hY.current && setTimeout((() => {
              hY.current === YY.pointerId && wY()
            }), 0)
          };
        if (rY) {
          for (const YY of DY) document.addEventListener(YY, FY, !0);
          if (!MY.current.isTouch) {
            const YY = JY.current;
            eY(YY.x, YY.y)
          }
          YY = YY => {
            YY.preventDefault(), bY(YY.pointerId) || (XY(YY), eY(YY.pageX, YY.pageY), jY.current && YY.pointerId === hY.current && (YY => {
              if (!oY.current) return jY.current = null, void SY();
              const {
                initTouchX: rY,
                maxAmount: DY
              } = jY.current, FY = (YY.pageX - rY) * jY.current.maxAmount / 160, AY = Math.ceil(DY / 2) + Math.ceil(FY);
              oY.current.amount = Math.min(DY, Math.max(1, AY)), SY()
            })(YY))
          }, document.addEventListener("pointermove", YY, !0)
        }
        return () => {
          document.removeEventListener("pointermove", YY, !0);
          for (const YY of DY) document.removeEventListener(YY, FY, !0)
        }
      }));
      const kY = (0, AY.useCallback)((() => {
          if (oY.current) {
            const YY = (0, ND.i)(PF(), oY.current.idx);
            (!nF(oY.current, YY) || YY.amount < oY.current.amount) && lY()
          }
        }), [lY]),
        GY = (0, AY.useCallback)((() => {
          const YY = oY.current;
          if (YY) {
            const rY = (0, ND.i)(PF(), YY.idx);
            nF(YY, rY) && (YY.attributes = rY.attributes)
          }
        }), []);
      return {
        draggedDomRef: QY,
        draggedInfoRef: oY,
        specialItemRef: WY,
        hoverInfoDomRef: EY,
        longHoldSplitInfoRef: jY,
        currHoveredIdx: gY,
        currHoveredDisplayInfo: uY,
        displayDraggedItemName: iY,
        forceRerenderIfVisible: SY,
        removeDraggedInfoRef: lY,
        checkDraggedItemConsistencyWithInven: kY,
        refreshDraggedAttributes: GY,
        swapSlots: HY,
        getPointerDownForIdx: qY,
        getPointerUpForIdx: pY,
        getSetHovering: cY,
        setCurrHoveredDisplayInfo: sY,
        moveFollowerTo: eY
      }
    }
    class YA {
      constructor(YY) {
        this.snapshot = [], this.newSlots = new Set, this.update(YY, !1)
      }
      update(YY, rY) {
        const DY = YY.map((YY => {
          var rY;
          return YY ? {
            name: YY.name,
            amount: null !== (rY = YY.amount) && void 0 !== rY ? rY : 1
          } : null
        }));
        DY.forEach(((YY, DY) => {
          const FY = this.snapshot[DY],
            AY = (null === YY || void 0 === YY ? void 0 : YY.name) !== (null === FY || void 0 === FY ? void 0 : FY.name);
          (!YY || AY || YY.amount < FY.amount) && this.newSlots.delete(DY), rY && YY && (AY || YY.amount > FY.amount) && this.newSlots.add(DY)
        })), this.snapshot = DY
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(YY) {
        return this.newSlots.has(YY)
      }
    }
    const rA = (YY, rY, DY) => ({
      button: rY,
      shiftKey: DY,
      pageX: YY.clientX,
      pageY: YY.clientY,
      clientX: YY.clientX,
      clientY: YY.clientY,
      pointerType: "mouse"
    });

    function DA(YY) {
      const [rY, DY] = (0, AY.useState)(YY);
      return YY && !rY && DY(!0), (0, AY.useEffect)((() => {
        if (rY) return;
        let YY = !0;
        const FY = () => {
            YY && (YY = !1, DY(!0))
          },
          AY = "function" === typeof window.requestIdleCallback,
          IY = AY ? window.requestIdleCallback(FY, {
            timeout: 2e3
          }) : void 0,
          RY = setTimeout(FY, AY ? 2e3 : 1e3);
        return () => {
          YY = !1, clearTimeout(RY), void 0 !== IY && window.cancelIdleCallback(IY)
        }
      }), [rY]), rY
    }
    const FA = (0, AY.memo)((function(YY) {
      var rY;
      let {
        show: DY,
        onOpen: FY,
        onClose: IY,
        variation: OY
      } = YY;
      const uY = (0, AY.useRef)(null),
        sY = (0, AY.useRef)(null),
        iY = function(YY) {
          const [rY, DY] = (0, AY.useState)(!0), [FY, IY] = (0, AY.useState)(!1), RY = (0, AY.useRef)(null), OY = (0, AY.useRef)(null), aY = (0, gY.j)("_shield"), vY = (0, AY.useRef)(null), uY = (0, gY.j)("_health"), sY = (0, AY.useRef)(null);

          function iY(YY) {
            const rY = Date.now() + YY;
            rY < OY.current || (DY(!1), clearTimeout(RY.current), OY.current = rY, RY.current = setTimeout((() => {
              DY(!0)
            }), YY))
          }
          return (0, AY.useEffect)((() => {
            iY(HD);
            const YY = yY.g.subscribe("requestingPlayVideoAd", (() => {
              iY(HD)
            }));
            return () => {
              clearTimeout(RY.current), yY.g.unsubscribe(YY)
            }
          }), []), (0, AY.useEffect)((() => {
            (vY.current > aY || sY.current > uY) && iY(6e4), vY.current = aY, sY.current = uY
          }), [aY, uY]), (0, AY.useEffect)((() => {
            let rY = null;
            return YY ? rY = setTimeout((() => {
              IY(!0)
            }), 250) : IY(!1), () => {
              clearTimeout(rY)
            }
          }), [YY]), rY && FY
        }(DY);
      (0, eY.k)(ED.e, null);
      const QY = (0, ED.n)(),
        oY = QY.some((YY => YY.panel)),
        WY = (0, BY.f)("inventory", (YY => null !== YY.chest && (null !== YY.chest.ironChest || CF(YY.chest.numSlots)))),
        EY = DA(DY),
        mY = DA(DY),
        [VY, SY] = (0, AY.useState)([]),
        lY = (0, AY.useCallback)((YY => {
          SY((rY => rY.filter((rY => rY.id !== YY))))
        }), []),
        TY = (0, AY.useRef)(null),
        cY = (0, AY.useRef)(0),
        KY = (0, AY.useCallback)((() => {
          TY.current && (cY.current = TY.current.scrollTop), IY()
        }), [IY]),
        HY = (0, gY.j)("inventoryItemsMoveable"),
        zY = (0, gY.j)("canCraft"),
        {
          clientEscMenuOptions: ZY
        } = (0, MY.j)(["clientEscMenuOptions"]),
        CY = (0, AY.useRef)(null);
      CY.current || (CY.current = new YA(aY.gameBridge.latest("inventory").player));
      const jY = CY.current,
        {
          draggedDomRef: hY,
          draggedInfoRef: dY,
          specialItemRef: JY,
          hoverInfoDomRef: wY,
          longHoldSplitInfoRef: bY,
          currHoveredIdx: XY,
          currHoveredDisplayInfo: qY,
          displayDraggedItemName: pY,
          forceRerenderIfVisible: kY,
          removeDraggedInfoRef: GY,
          checkDraggedItemConsistencyWithInven: xY,
          refreshDraggedAttributes: nY,
          swapSlots: PY,
          getPointerDownForIdx: UY,
          getPointerUpForIdx: LY,
          getSetHovering: tY,
          setCurrHoveredDisplayInfo: Yr,
          moveFollowerTo: rr
        } = tF({
          show: DY,
          close: KY,
          canCraft: zY,
          variation: OY,
          inventoryItemsMoveable: HY,
          setCraftFlyAnims: SY
        });
      (0, AY.useEffect)((() => {
        const YY = !DY && null !== aY.gameBridge.latest("inventory").chest;
        if (YY && aY.gameBridge.send("closeChest", null), DY || (jY.clearMarks(), tY(null)(!1)), YY) {
          TD.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [DY]), (0, BY.c)("chestToggled", (YY => {
        if (YY ? FY() : DY && KY(), YY) {
          TD.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Dr = (0, Gr.m)();
      (0, BY.c)("inventory", (YY => {
        let {
          player: rY
        } = YY;
        var FY, AY, IY;
        (jY.update(rY, !DY && Dr.shown), JY.current) && (JY.current = (AY = JY.current, IY = null !== (FY = rY[JY.current.idx]) && void 0 !== FY ? FY : null, nF(AY, IY) ? (AY.attributes = IY.attributes, null !== IY.amount && AY.amount > IY.amount && (AY.amount = IY.amount), AY) : null));
        nY(), null !== XY && tY(XY)(!0), kY()
      })), (0, AY.useEffect)((() => (aY.gameBridge.send("setInventoryOpen", DY), () => {
        aY.gameBridge.send("setInventoryOpen", !1)
      })), [DY]);
      const Fr = (YY, rY) => {
        if (YY === cD.h) return void(YY => {
          const rY = JY.current;
          if (!rY || null === (0, ND.i)(aY.gameBridge.latest("inventory"), rY.idx)) return;
          const DY = YY ? Math.max(rY.amount, 1) : 1,
            FY = rY.amount - DY;
          if (!aY.gameBridge.send("removeInventoryItem", {
              slot: rY.idx,
              amount: DY,
              drop: !0
            })) return;
          const AY = JY.current;
          AY && (AY.amount = Math.min(AY.amount, FY), AY.amount <= 0 && (JY.current = null)), kY()
        })(rY);
        const DY = null === YY ? null : (0, ND.i)(aY.gameBridge.latest("inventory"), YY);
        if (null !== DY) {
          var FY, AY, IY;
          const RY = rY && null !== (FY = DY.amount) && void 0 !== FY ? FY : 1;
          aY.gameBridge.send("removeInventoryItem", {
            slot: YY,
            amount: RY,
            drop: !0
          }), YY === (null === (AY = dY.current) || void 0 === AY ? void 0 : AY.idx) && (dY.current.amount -= RY, dY.current.amount <= 0 && GY(), kY()), YY === (null === (IY = JY.current) || void 0 === IY ? void 0 : IY.idx) && (JY.current = null, kY())
        }
      };
      (0, BY.c)("inventoryDropRequested", (YY => {
        DY && XY !== cD.h && Fr(XY, YY)
      }));
      const Ar = (YY, rY) => {
        let DY = rY;
        if (rY === cD.h) {
          if (!JY.current) return;
          DY = JY.current.idx
        }
        const FY = PY(YY, DY);
        if (FY && dY.current && (dY.current.idx === DY ? dY.current.idx = YY : dY.current.idx === YY && (dY.current.idx = DY)), FY && rY === cD.h) {
          const YY = (0, ND.i)(aY.gameBridge.latest("inventory"), DY);
          JY.current = YY ? {
            idx: DY,
            name: YY.name,
            attributes: YY.attributes,
            amount: YY.amount
          } : null
        }
        kY()
      };
      (0, BY.c)("numberKeyPressed", (YY => {
        null !== XY && DY && Ar(YY - 1, XY)
      })), (0, AY.useEffect)((() => {
        DY || (JY.current = null, GY(), Yr(null))
      }), [DY, GY, Yr, JY]);
      const Ir = JY.current;
      (0, AY.useEffect)((() => {
        XY === cD.h && tY(cD.h)(!0)
      }), [Ir, XY, tY]);
      const Rr = () => {
        xY(), nY(), kY()
      };
      (0, BY.c)("chestRefreshed", Rr), (0, BY.c)("inventorySynced", Rr);
      const [Or, gr] = (0, AY.useState)(new Map), ar = null !== (rY = Or.get(OY)) && void 0 !== rY ? rY : null, vr = (YY, rY) => {
        gr((DY => {
          const FY = DY.get(YY);
          return FY && FY.name === rY.name && FY.Wv === rY.Wv ? DY : new Map(DY).set(YY, rY)
        }))
      };
      (0, eY.g)("craftingRecipesEdited", (() => {
        kY()
      })), (0, eY.g)(AF.c, (YY => {
        let {
          variation: rY,
          itemName: DY
        } = YY;
        vr(rY, {
          name: DY,
          Wv: 0
        })
      }));
      const [ur, sr] = (0, AY.useState)(null), [yr, Qr] = (0, AY.useState)(null);
      (0, BY.c)("enchantingTableOpened", (YY => {
        let {
          position: rY,
          blockName: DY
        } = YY;
        sr(rY), Qr(DY)
      }));
      const [or, Wr] = (0, AY.useState)(""), [Er, mr] = (0, AY.useState)(null);
      (0, AY.useEffect)((() => {
        DY && TY.current && (TY.current.scrollTop = cY.current)
      }), [DY]);
      return (YY => {
        const rY = (0, AY.useRef)(YY);
        rY.current = YY, (0, AY.useEffect)((() => {
          if (!YY.show) return;
          const DY = (YY, DY, FY, AY) => {
              const {
                getPointerDownForIdx: IY,
                getPointerUpForIdx: RY
              } = rY.current;
              IY(YY)(rA(DY, FY, AY)), RY(YY)(rA(DY, FY, AY))
            },
            FY = {
              primary: (YY, rY) => {
                DY(YY, rY, 0, !1)
              },
              secondary: (YY, rY) => {
                DY(YY, rY, 2, !1)
              },
              quickMove: (YY, rY) => {
                DY(YY, rY, 0, !0)
              },
              dropHeld: (YY, DY) => {
                rY.current.getPointerDownForIdx(cD.e)(rA(DY, YY ? 0 : 2, !1))
              },
              dropSlot: (YY, DY) => {
                rY.current.dropFromIdx(YY, DY)
              },
              swapWithHotbar: (YY, DY) => {
                rY.current.swapWithHotbar(YY, DY)
              },
              cancel: () => {
                rY.current.removeDraggedInfoRef()
              },
              isHolding: () => !!rY.current.draggedInfoRef.current,
              hasItemAt: YY => {
                const {
                  draggedInfoRef: DY,
                  specialItemRef: FY
                } = rY.current;
                if (YY === cD.h) return !!FY.current;
                const AY = (0, ND.i)(aY.gameBridge.latest("inventory"), YY);
                return !!AY && (0, bD.h)(YY, (0, ND.b)(AY), [DY.current, FY.current]).shown
              },
              hover: (YY, DY) => {
                const {
                  moveFollowerTo: FY,
                  getSetHovering: AY
                } = rY.current;
                FY(DY.clientX, DY.clientY), AY(null !== YY && void 0 !== YY ? YY : void 0)(null !== YY, void 0, {
                  pageX: DY.clientX,
                  pageY: DY.clientY
                })
              },
              moveTo: YY => {
                rY.current.moveFollowerTo(YY.clientX, YY.clientY)
              },
              close: () => {
                rY.current.close()
              }
            };
          return (0, mD.o)(FY)
        }), [YY.show])
      })({
        show: DY,
        close: KY,
        draggedInfoRef: dY,
        specialItemRef: JY,
        getPointerDownForIdx: UY,
        getPointerUpForIdx: LY,
        getSetHovering: tY,
        moveFollowerTo: rr,
        removeDraggedInfoRef: GY,
        dropFromIdx: Fr,
        swapWithHotbar: Ar
      }), (0, AY.useEffect)((() => {
        yY.g.vo("inventoryDraggedItemUpdated", {
          draggedInfo: dY.current,
          specialItemInfo: JY.current,
          setHovered: tY,
          pointerDown: UY,
          pointerUp: LY,
          variation: zY ? OY : void 0,
          craftFlyAnims: VY
        })
      })), (0, vY.jsxs)(fY.b, {
        show: DY,
        style: {
          touchAction: DY ? "none" : void 0
        },
        children: [dY.current && (0, vY.jsx)(ZD, {
          draggedInfo: dY.current,
          toAddRef: hY
        }), dY.current && pY && (0, vY.jsx)(CD, {
          className: "DraggedInvenItemName",
          displayInfo: LF(dY.current),
          domRef: null
        }), !dY.current && qY && (0, vY.jsx)(CD, {
          displayInfo: qY,
          domRef: wY
        }), bY.current && dY.current && (0, vY.jsx)(fD, {
          info: bY.current,
          draggedInfo: dY.current
        }), VY.map((YY => (0, vY.jsx)(BD.c, {
          anim: YY,
          onComplete: lY
        }, YY.id))), (0, vY.jsx)(RY.e, {
          show: DY,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: KY,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: UY(cD.e),
          pointerUp: LY(cD.e),
          doGameplayStartStopOnShow: !0
        }), EY && (0, vY.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, vY.jsx)("div", {
            ref: uY,
            className: "InventoryAdOuter",
            children: (0, vY.jsx)(eD.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: uY
              },
              verticalAlign: "start",
              showing: DY && iY,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, vY.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, vY.jsxs)("div", {
              className: ir()("Inventory", {
                WithPanelButtons: oY,
                WideChestOpen: WY
              }),
              children: [(0, vY.jsx)("div", {
                className: "InventoryFiller"
              }), (0, vY.jsx)(lD, {
                show: DY,
                buttons: QY
              }), (0, vY.jsxs)("div", {
                className: "InvenBody",
                children: [(0, vY.jsx)(dF, {
                  variation: OY,
                  canCraft: zY,
                  show: DY,
                  creativeMounted: mY,
                  specialItemRef: JY,
                  draggedInfo: dY.current,
                  getSetHovering: tY,
                  getPointerDownForIdx: UY,
                  getPointerUpForIdx: LY,
                  enchantingTablePosition: ur,
                  enchantingTableBlockName: yr,
                  selectedCraftable: ar,
                  dispatchSelectedCraftable: YY => {
                    vr(OY, YY)
                  },
                  creativeScrollDiv: TY,
                  creativeSearchVal: or,
                  setCreativeSearchVal: Wr,
                  creativeCategory: Er,
                  setCreativeCategory: mr,
                  onCraft: function(YY, rY) {
                    let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (xY(), (YY || DY.length > 0) && SY((rY => {
                        const FY = [...rY],
                          AY = rY.filter((YY => "ingredient" === YY.kind)).length;
                        for (const YY of DY.slice(0, Math.max(0, 24 - AY))) FY.push({
                          id: (0, BD.g)(),
                          ...YY,
                          to: YY.to
                        });
                        return YY && FY.push({
                          id: (0, BD.g)(),
                          ...YY,
                          to: (0, ND.c)(YY.da)
                        }), FY
                      })), null !== rY) {
                      var FY;
                      const YY = aY.gameBridge.latest("inventory");
                      (0, NY.zb)(null === (FY = (0, ND.i)(YY, rY)) || void 0 === FY ? void 0 : FY.name) ? UY(rY)({
                        button: 0,
                        shiftKey: !0
                      }): PY(rY, YY.selectedSlot)
                    }
                  }
                }), (0, vY.jsx)(pF, {
                  draggedInfo: dY.current,
                  specialItemInfo: JY.current,
                  craftFlyAnims: VY,
                  getSetHovering: tY,
                  getPointerDownForIdx: UY,
                  getPointerUpForIdx: LY,
                  variation: OY,
                  canCraft: zY,
                  isNewSlot: YY => ZY.showNewItemIndicator && jY.isNew(YY)
                })]
              })]
            }), (0, vY.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, vY.jsx)("div", {
                ref: sY,
                className: "InventoryAd",
                children: (0, vY.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var AA = DY(1413),
      IA = DY(144);
    const RA = (0, AY.memo)((function(YY) {
      let {
        show: rY,
        onOpen: DY,
        onClose: FY
      } = YY;
      const IY = (0, AY.useRef)(0),
        OY = () => (0, AA.g)() && !(0, AA.s)() && IY.current <= 2;
      rY = OY() && rY;
      const gY = () => {
        IY.current++, FY()
      };
      (0, eY.g)("ctrlCrouchWithoutFullscreen", (() => {
        OY() && DY()
      })), (0, eY.g)("displaymodeFullscreenChange", (YY => {
        rY && YY && gY()
      }));
      const aY = "crazygames" === IA.s;
      return (0, vY.jsx)(RY.e, {
        close: gY,
        escDoesExit: !0,
        show: rY,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, vY.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, vY.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), aY && (0, vY.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, vY.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, vY.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!aY && (0, vY.jsx)(iY.n, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, AA.y)(), gY()
              },
              children: (0, vY.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, vY.jsx)(iY.D, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                gY()
              },
              children: (0, vY.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var OA = DY(3209),
      gA = DY(3231),
      aA = DY(1346),
      vA = DY(3184),
      uA = DY(1351),
      sA = DY(35984),
      iA = DY(3199),
      yA = DY(3207);

    function QA(YY, rY) {
      return (0, sA.f)(!0, YY, rY) ? () => {
        !async function(YY) {
          await vA.e.refresh();
          const {
            data: rY,
            failed: DY
          } = vA.e.getState();
          if (null === rY || DY) return;
          const FY = vA.e.getExclusion(YY);
          if ("blocked" === FY) return;
          const AY = null === FY;
          aA.NotificationProvider.showCustomPopup({
            body: rY => {
              const DY = DY => ({
                text: iA.h[DY].text,
                onClick: () => {
                  rY(), (0, yA.c)(DY, YY, null)
                }
              });
              return (0, vY.jsx)(uA.i, {
                title: AY ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: YY
                  }
                },
                secondary: AY ? DY("ignore") : void 0,
                confirm: DY("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: rY
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(YY)
      } : null
    }
    DY(3218);
    const oA = (0, AY.memo)((function(YY) {
        let {
          show: rY,
          onOpen: DY,
          onClose: FY
        } = YY;
        const [IY, OY] = (0, AY.useState)(""), [gY, uY] = (0, AY.useState)(""), [sY, iY] = (0, AY.useState)(null), [yY, QY] = (0, AY.useState)(null), oY = (0, BY.h)("hiddenPlayerNames"), WY = {
          kind: "worldCodeLine",
          onSubmit: (YY, rY) => {
            FY(), aY.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: yY,
              Qa: YY,
              details: rY
            })
          }
        }, EY = {
          kind: "player",
          shownPlayerName: (0, rr.g)(IY, oY),
          onSubmit: (YY, rY) => {
            FY(), (0, gA.e)({
              playerId: gY,
              playerName: IY,
              chatMsgId: yY,
              policyId: YY,
              details: rY,
              onAccepted: QA(IY, oY)
            })
          }
        };
        return (0, eY.g)("OpenReportMenu", (YY => {
          let {
            playerEId: rY,
            playerName: FY,
            vv: AY,
            serverChatMsgId: IY
          } = YY;
          uY(rY), OY(FY), iY(AY), QY(IY), DY()
        })), (0, vY.jsx)(RY.e, {
          show: rY,
          close: FY,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, vY.jsx)("div", {
            className: "ReportMenu",
            children: rY && (0, vY.jsx)(OA.d, {
              reported: null === gY ? WY : EY,
              chatMessage: sY,
              inGame: !0,
              onCancel: FY
            })
          })
        })
      })),
      WA = (0, AY.memo)((function(YY) {
        let {
          show: rY,
          onOpen: DY,
          onClose: FY
        } = YY;
        const [IY, OY] = (0, AY.useState)(null), [gY, uY] = (0, AY.useState)(0);
        (0, eY.g)("OpenDiscordReportBox", (YY => {
          aY.gameBridge.send("requestDiscordReportKey", YY), uY(0), DY()
        }));
        return (0, eY.g)("setDiscordReportKey", (YY => {
          OY(YY)
        })), (0, vY.jsx)(RY.e, {
          show: rY,
          close: () => {
            FY(), OY(null), uY(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, vY.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, vY.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, vY.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, vY.jsx)("br", {}), (0, vY.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, vY.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, vY.jsx)("br", {}), "2. Copy the Report Key below", (0, vY.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, vY.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, vY.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, vY.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== IY && void 0 !== IY ? IY : "Loading report key..."
              }), (0, vY.jsx)(iY.f, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(IY).catch((YY => {
                    console.error("Failed to copy report key:", YY)
                  })), uY(Date.now())
                },
                disabled: Date.now() - gY < 1e3 || !IY,
                children: Date.now() - gY < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var EA = DY(1287);
    const mA = {
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
      VA = (0, AY.memo)((function(YY) {
        let {
          show: rY,
          onOpen: DY,
          onClose: FY
        } = YY;
        const [IY, OY] = (0, AY.useState)(null), gY = (0, AY.useRef)(0), uY = (0, AY.useRef)(null), {
          t: sY
        } = (0, nY.C)();
        (0, eY.g)("EditCustomLobbyBlock", (YY => {
          let {
            pos: rY
          } = YY;
          OY(rY), null !== rY && DY(), uY.current.scrollTo(0, gY.current)
        }));
        const iY = YY => {
          aY.gameBridge.send("setCustomLobbyBlock", {
            pos: IY,
            blockName: YY
          }), FY()
        };
        return (0, vY.jsx)(RY.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: FY,
          escDoesExit: !0,
          show: rY,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, vY.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: uY,
            onScroll: () => {
              gY.current = uY.current.scrollTop
            },
            children: (0, vY.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(mA).map((YY => {
                let [rY, DY] = YY;
                return (0, vY.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, vY.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: sY(rY)
                  }), (0, vY.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(DY).map((YY => {
                      let [rY, {
                        tooltip: DY,
                        blocks: FY
                      }] = YY;
                      return (0, vY.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, vY.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [sY(rY), (0, vY.jsx)(GY.d, {
                            hoverInfo: sY(DY),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, vY.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: FY.map((YY => (0, vY.jsx)(SA, {
                            blockName: YY,
                            selectBlock: iY
                          }, YY)))
                        })]
                      }, rY)
                    }))
                  })]
                }, rY)
              }))
            })
          })
        })
      })),
      SA = (0, AY.memo)((function(YY) {
        var rY;
        let {
          blockName: DY,
          selectBlock: FY
        } = YY;
        const AY = (0, mF.b)(DY),
          IY = null !== (rY = void 0 === AY ? void 0 : (0, EF.displayNameOf)(AY)) && void 0 !== rY ? rY : DY,
          RY = void 0 === AY ? void 0 : (0, EF.descriptionOf)(AY);
        return (0, vY.jsx)(GY.g, {
          tooltipInner: (0, vY.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, vY.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, vY.jsx)(TY.b, {
                text: IY
              })
            }), RY && (0, vY.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, vY.jsx)(TY.b, {
                text: RY
              })
            })]
          }),
          children: (0, vY.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => FY(DY),
            children: (0, vY.jsx)(SD.c, {
              itemName: DY,
              amount: 1
            })
          })
        }, DY)
      }));
    var lA = DY(2620),
      TA = DY(3808),
      eA = DY(36228);

    function NA() {
      const YY = (0, BY.h)("itemInfo");
      return (0, AY.useMemo)((() => function(YY) {
        return {
          getDefaultItemStat(rY, DY) {
            var FY;
            const AY = YY[rY];
            return "description" === DY ? null === AY || void 0 === AY ? void 0 : AY.description : null !== (FY = null === AY || void 0 === AY ? void 0 : AY.displayName) && void 0 !== FY ? FY : rY
          }
        }
      }(YY)), [YY])
    }
    const BA = (0, AY.memo)((function(YY) {
        var rY, DY, FY, IY, OY, gY, aY, uY, sY, iY, yY, QY, WY, EY, mY, VY, SY, lY, TY, NY, BY, cY, KY;
        let {
          togglePointerLock: HY,
          show: zY,
          onOpen: ZY,
          onClose: CY
        } = YY;
        const {
          t: fY
        } = (0, nY.C)(), jY = NA(), hY = (0, AY.useRef)(null), dY = (0, AY.useRef)(TA.c.MobHungerLevel.Hungry), JY = (0, AY.useRef)(null), MY = (0, lA.c)(), wY = (0, AY.useRef)(null), bY = (0, AY.useRef)(null), XY = hY.current;
        (0, AY.useEffect)((() => {
          if (!zY) return;
          const YY = eA.b.openPet(wY.current);
          return bY.current = YY, () => {
            YY.close(), bY.current = null
          }
        }), [zY]), (0, AY.useEffect)((() => {
          zY && XY && bY.current.show(function(YY) {
            var rY;
            let {
              mobType: DY,
              mobSettings: FY
            } = YY;
            return {
              mobType: DY,
              variation: null !== (rY = FY.variation) && void 0 !== rY ? rY : "default",
              metaInfo: FY.metaInfo,
              tamed: !(0, ZF.H)(FY.ownerDbId)
            }
          }(XY))
        }), [zY, XY]), (0, AY.useEffect)((() => {
          const YY = () => {
            var YY;
            const rY = TA.c.getMobHungerLevel(null === (YY = hY.current) || void 0 === YY ? void 0 : YY.mobSettings.petInfo.lastFedAt);
            if (rY !== dY.current && (dY.current = rY, MY()), JY.current) {
              var DY;
              const YY = Date.now(),
                rY = TA.c.getNextStateAt(null === (DY = hY.current) || void 0 === DY ? void 0 : DY.mobSettings.petInfo.lastFedAt);
              let FY = Math.floor((rY - YY) / 1e3),
                AY = "";
              if (FY > 3600) {
                AY += Math.floor(FY / 60 / 60).toString().padStart(2, "0"), AY += ":", FY %= 3600
              }
              const IY = FY % 60;
              AY += Math.floor(FY / 60).toString().padStart(2, "0"), AY += ":", AY += IY.toString().padStart(2, "0"), JY.current.textContent = AY
            }
          };
          YY();
          const rY = setInterval(YY, 250);
          return () => {
            clearInterval(rY)
          }
        }), [XY, MY]), (0, eY.g)("showPetUi", (YY => {
          let {
            mobType: rY,
            mobSettings: DY
          } = YY;
          hY.current = {
            mobType: rY,
            mobSettings: DY
          }, zY || ZY()
        }));
        const qY = null === (rY = hY.current) || void 0 === rY ? void 0 : rY.mobSettings.health,
          pY = null === (DY = hY.current) || void 0 === DY ? void 0 : DY.mobSettings.maxHealth,
          kY = TA.c.getFriendshipLevelInfo(null !== (FY = null === (IY = hY.current) || void 0 === IY ? void 0 : IY.mobSettings.petInfo.friendshipPoints) && void 0 !== FY ? FY : 0);
        return (0, vY.jsx)(RY.e, {
          className: "PetUIOuter",
          close: CY,
          escDoesExit: !0,
          show: zY,
          togglePointerLock: HY,
          forcePointerUnlock: zY,
          globallyUniqueKey: "PetUI",
          children: (0, vY.jsx)("div", {
            className: "PetUI",
            children: (0, vY.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, vY.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, vY.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (OY = null === (gY = hY.current) || void 0 === gY ? void 0 : gY.mobSettings.name) && void 0 !== OY ? OY : "Your Pet"
                }), (0, vY.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: wY
                })]
              }), (0, vY.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, ZF.H)(null === (aY = hY.current) || void 0 === aY ? void 0 : aY.mobSettings.petInfo.friendshipPoints) && (0, vY.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, vY.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: fY("mobAiPlugin:friendshipTitle")
                  }), (0, vY.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: TA.c.getIconsFromFriendshipPoints(null !== (uY = hY.current.mobSettings.petInfo.friendshipPoints) && void 0 !== uY ? uY : 0).map(((YY, rY) => (0, vY.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: YY,
                        amount: 1
                      })
                    }, rY)))
                  }), (0, vY.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, vY.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, vY.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${kY.totalPointsForNextLevel>0?Math.max(kY.pointsIntoCurrentLevel/kY.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, vY.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: kY.totalPointsForNextLevel > 0 ? ` ${Math.ceil(kY.pointsIntoCurrentLevel)}/${Math.ceil(kY.totalPointsForNextLevel)}` : Math.ceil(kY.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, vY.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, vY.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: fY("mobAiPlugin:hungerTitle")
                  }), (0, vY.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: TA.c.hungerLevelIcons[dY.current].map(((YY, rY) => (0, vY.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: YY,
                        amount: 1
                      })
                    }, rY)))
                  }), (0, vY.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [fY(TA.c.hungerLevelTranslations[dY.current].translationKey), dY.current !== TA.c.MobHungerLevel.Starving && !(0, ZF.H)(null === (sY = hY.current) || void 0 === sY ? void 0 : sY.mobSettings.petInfo.lastFedAt) && (0, vY.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [fY("mobAiPlugin:nextFeedIn", {
                        state: fY(TA.c.hungerLevelTranslations[dY.current + 1].translationKey)
                      }), ":", " ", (0, vY.jsx)("span", {
                        ref: JY
                      })]
                    })]
                  })]
                }), (0, vY.jsx)(GY.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vY.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: fY("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, vY.jsxs)("div", {
                    className: ir()("PetUIQuickStatsItem", {
                      Disabled: (0, ZF.H)(qY) || (0, ZF.H)(pY)
                    }),
                    children: [(0, vY.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, vY.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, ZF.H)(qY) || (0, ZF.H)(pY) ? "" : (0, vY.jsxs)(vY.Fragment, {
                        children: [Math.ceil(qY), (0, vY.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(pY)]
                        })]
                      })
                    })]
                  })
                }), (0, vY.jsx)(GY.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vY.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: fY("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, vY.jsxs)("div", {
                    className: ir()("PetUIQuickStatsItem", {
                      Disabled: (0, ZF.H)(null === (iY = hY.current) || void 0 === iY ? void 0 : iY.mobSettings.attackDamage) || hY.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, vY.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, vY.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (yY = hY.current) || void 0 === yY ? void 0 : yY.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, vY.jsx)(GY.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vY.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: fY("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, vY.jsxs)("div", {
                    className: ir()("PetUIQuickStatsItem", {
                      Disabled: (0, ZF.H)(null === (QY = hY.current) || void 0 === QY ? void 0 : QY.mobSettings.secondaryAttackDamage) || hY.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, vY.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, vY.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (WY = hY.current) || void 0 === WY ? void 0 : WY.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, vY.jsx)(GY.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vY.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: fY("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, vY.jsxs)("div", {
                    className: ir()("PetUIQuickStatsItem", {
                      Disabled: (0, ZF.H)(null === (EY = hY.current) || void 0 === EY ? void 0 : EY.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, vY.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, vY.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (mY = null === (VY = hY.current) || void 0 === VY || null === (SY = VY.mobSettings.baseRunningSpeed) || void 0 === SY ? void 0 : SY.toFixed(2)) && void 0 !== mY ? mY : ""
                    })]
                  })
                }), (0, vY.jsx)(GY.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vY.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: fY("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, vY.jsxs)("div", {
                    className: ir()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (lY = hY.current) || void 0 === lY ? void 0 : lY.mobSettings.metaInfo)
                    }),
                    children: [(0, vY.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vY.jsx)(SD.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, vY.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (TY = hY.current) || void 0 === TY ? void 0 : TY.mobSettings.metaInfo) ? (0, vY.jsx)(oY.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, ZF.H)(null === (NY = hY.current) || void 0 === NY ? void 0 : NY.mobSettings.tameInfo) && (0, vY.jsxs)(vY.Fragment, {
                  children: [(0, vY.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, vY.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vY.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vY.jsx)(KA, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: TA.c.feedTextColours[TA.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vY.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, vY.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: hY.current.mobSettings.petInfo.superlikedFoodKnown ? (0, vY.jsx)(cA, {
                            food: hY.current.mobSettings.petInfo.superlikedFood
                          }) : (0, vY.jsx)(KA, {
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
                    }), (0, vY.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vY.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vY.jsx)(KA, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: TA.c.feedTextColours[TA.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vY.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (BY = hY.current.mobSettings.tameInfo.likedFoods) || void 0 === BY ? void 0 : BY.filter((YY => !hY.current.mobSettings.petInfo.superlikedFoodKnown || YY !== hY.current.mobSettings.petInfo.superlikedFood)).map((YY => (0, vY.jsx)(cA, {
                          food: YY
                        }, YY)))
                      })]
                    }), (0, vY.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vY.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vY.jsx)(KA, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: TA.c.feedTextColours[TA.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vY.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (cY = hY.current.mobSettings.tameInfo.neutralFoods) || void 0 === cY ? void 0 : cY.map((YY => (0, vY.jsx)(cA, {
                          food: YY
                        }, YY)))
                      })]
                    }), (0, vY.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vY.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vY.jsx)(KA, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: TA.c.feedTextColours[TA.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vY.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (KY = hY.current.mobSettings.tameInfo.dislikedFoods) || void 0 === KY ? void 0 : KY.map((YY => (0, vY.jsx)(cA, {
                          food: YY
                        }, YY)))
                      })]
                    })]
                  }), hY.current.mobSettings.tameInfo.levelUpBonuses && (0, vY.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: TA.c.MAX_LEVEL + 1
                    }).map(((YY, rY) => {
                      const DY = rY;
                      if (0 === DY) return null;
                      const FY = hY.current.mobSettings.tameInfo.levelUpBonuses[DY],
                        AY = TA.c.getBonusDisplayInfo(jY, hY.current.mobSettings, hY.current.mobType, FY);
                      return (0, vY.jsxs)("div", {
                        className: ir()("PetUIFeedDropContainer", {
                          Selected: DY === TA.c.getFriendshipLevelInfo(hY.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, vY.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: DY
                          }).map(((YY, rY) => (0, vY.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, vY.jsx)(SD.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${DY}-${rY}`)))
                        }), (0, vY.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: AY && (0, vY.jsx)(KA, {
                            icon: AY.icon,
                            displayName: AY.displayName,
                            description: AY.description
                          })
                        })]
                      }, DY)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      cA = (0, AY.memo)((function(YY) {
        let {
          food: rY,
          includeDescription: DY = !1
        } = YY;
        const FY = NA(),
          AY = FY.getDefaultItemStat(rY, "displayName"),
          IY = FY.getDefaultItemStat(rY, "description");
        return (0, vY.jsx)(KA, {
          icon: rY,
          displayName: AY,
          description: DY ? IY : null
        })
      })),
      KA = (0, AY.memo)((function(YY) {
        let {
          icon: rY,
          displayName: DY,
          description: FY,
          tintColor: AY,
          className: IY = "PetUIFoodItem"
        } = YY;
        return (0, vY.jsx)(GY.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, vY.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, vY.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, vY.jsx)(TY.b, {
                text: DY
              })
            }), FY && (0, vY.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, vY.jsx)(TY.b, {
                text: FY
              })
            })]
          }),
          children: (0, vY.jsx)("div", {
            className: IY,
            children: (0, vY.jsx)(SD.c, {
              itemName: rY,
              amount: 1,
              tintColor: AY
            })
          })
        })
      }));
    var HA = DY(3366),
      zA = DY(1159),
      ZA = DY(1244),
      CA = DY(36244),
      fA = DY(36241),
      jA = DY(1057),
      hA = DY(2219);

    function dA(YY) {
      let {
        peers: rY
      } = YY;
      const [DY, FY] = (0, AY.useState)(null), IY = (0, BY.h)("players");
      return (0, vY.jsx)("div", {
        className: "CodeEditorPresence",
        children: rY.map((YY => {
          var rY, AY;
          const RY = null !== (rY = null === (AY = IY.byId[YY.playerId]) || void 0 === AY ? void 0 : AY.cosmetics) && void 0 !== rY ? rY : {};
          return (0, vY.jsxs)("div", {
            className: ir()("PresenceIcon", {
              Viewer: !YY.isEditor
            }),
            style: {
              backgroundColor: YY.colour
            },
            onMouseEnter: () => {
              FY(YY.playerId)
            },
            onMouseLeave: () => {
              FY(null)
            },
            children: [(0, vY.jsx)(hA.c, {
              cosmetics: RY
            }), DY === YY.playerId && (0, vY.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: YY.colour
              },
              children: YY.playerName
            })]
          }, YY.playerId)
        }))
      })
    }
    var JA = DY(662),
      MA = DY(36237),
      wA = DY(35982),
      bA = DY(36252);

    function XA(YY) {
      const rY = YY.split("/"),
        DY = [];
      for (let FY = 1; FY < rY.length; FY++) DY.push(rY.slice(0, FY).join("/"));
      return DY
    }

    function qA(YY) {
      return YY.slice(YY.lastIndexOf("/") + 1)
    }
    const pA = (0, AY.memo)((function(YY) {
      var rY;
      let {
        files: DY,
        activePath: FY,
        canEdit: IY,
        directoryLinked: RY,
        pluginNames: OY,
        activePluginName: gY,
        activePluginFile: aY,
        onSelect: uY,
        onSelectPlugin: sY,
        onCreate: yY,
        onRename: QY,
        onRenameFolder: WY,
        onDelete: EY,
        onToggleDirectorySync: mY,
        schematics: VY,
        onManageSchematic: SY
      } = YY;
      const {
        t: lY
      } = (0, nY.C)(), TY = null !== (rY = (0, fA.c)(DY)) && void 0 !== rY ? rY : ZA.e, eY = Object.keys(DY), [NY, BY] = (0, AY.useState)((() => new Set)), cY = function(YY, rY, DY) {
        const FY = {
          folders: new Map,
          files: []
        };
        for (const RY of YY) {
          if (RY === rY) continue;
          let YY = FY;
          for (const rY of XA(RY)) {
            let DY = YY.folders.get(rY);
            DY || (DY = {
              folders: new Map,
              files: []
            }, YY.folders.set(rY, DY)), YY = DY
          }
          YY.files.push(RY)
        }
        const AY = [];
        YY.includes(rY) && AY.push({
          kind: "file",
          path: rY,
          name: qA(rY),
          depth: 0
        });
        const IY = (YY, rY) => {
          const FY = [...YY.folders.entries()].sort(((YY, rY) => {
            let [DY] = YY, [FY] = rY;
            return DY.localeCompare(FY)
          }));
          for (const [RY, OY] of FY) {
            const YY = DY.has(RY);
            AY.push({
              kind: "folder",
              path: RY,
              name: qA(RY),
              depth: rY,
              collapsed: YY
            }), YY || IY(OY, rY + 1)
          }
          YY.files.sort(((YY, rY) => YY.localeCompare(rY)));
          for (const DY of YY.files) AY.push({
            kind: "file",
            path: DY,
            name: qA(DY),
            depth: rY
          })
        };
        return IY(FY, 0), AY
      }(eY, TY, NY);
      (0, AY.useEffect)((() => {
        BY((YY => {
          const rY = new Set(YY);
          let DY = !1;
          for (const AY of XA(FY)) DY = rY.delete(AY) || DY;
          return DY ? rY : YY
        }))
      }), [FY]);
      const KY = eY.length >= AD.y,
        HY = (YY, rY) => {
          if (YY.length > CA.t) return `Path must be at most ${CA.t} characters`;
          if (!(0, CA.p)(YY)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === YY) return "index.d.ts cannot be the world-code entry";
          const FY = !!rY && (0, fA.d)(rY, YY);
          if (rY && (0, fA.g)(rY) && !FY) return `Cannot rename ${rY} (only swapping ${ZA.e} and ${ZA.i} is allowed)`;
          if (YY in DY) return "A file with that path already exists";
          if ((0, fA.g)(YY) && !FY) {
            if ((YY === ZA.e ? ZA.i : ZA.e) in DY) return `World code cannot have both ${ZA.e} and ${ZA.i}`
          }
          return null
        },
        zY = YY => {
          aA.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === YY ? void 0 : `${YY}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: YY => HY(YY)
          }).getResult().then((YY => {
            "notificationTornDown" !== YY && null !== YY && "submit" === YY.type && yY(YY.value)
          }))
        },
        ZY = YY => {
          aA.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: YY,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: rY => rY === YY ? "That is already the file's path" : HY(rY, YY)
          }).getResult().then((rY => {
            "notificationTornDown" !== rY && null !== rY && "submit" === rY.type && QY(YY, rY.value)
          }))
        },
        CY = YY => {
          const rY = YY => YY.replace(/\/+$/, "");
          aA.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: YY,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: DY => {
              const FY = rY(DY);
              if (FY === YY) return "That is already the folder's path";
              for (const [rY, AY] of(0, fA.l)(eY, YY, FY)) {
                const YY = HY(AY, rY);
                if (null !== YY) return YY
              }
              return null
            }
          }).getResult().then((DY => {
            "notificationTornDown" !== DY && null !== DY && "submit" === DY.type && WY(YY, rY(DY.value))
          }))
        },
        fY = YY => {
          aA.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: YY
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((rY => {
            !0 === rY && EY(YY)
          }))
        };
      return (0, vY.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, vY.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, vY.jsx)("span", {
            children: "Files"
          }), IY && !KY && (0, vY.jsx)(iY.p, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              zY()
            },
            children: (0, vY.jsx)(oY.e, {
              name: "plus"
            })
          })]
        }), (0, vY.jsxs)("div", {
          className: "FileTreeList",
          children: [cY.map((YY => {
            const rY = YY.path;
            if ("folder" === YY.kind) return (0, vY.jsx)(xA, {
              path: rY,
              name: YY.name,
              depth: YY.depth,
              collapsed: YY.collapsed,
              onToggle: () => {
                var YY;
                YY = rY, BY((rY => {
                  const DY = new Set(rY);
                  return DY.delete(YY) || DY.add(YY), DY
                }))
              },
              canCreate: IY && !KY,
              canRename: IY,
              onCreate: zY,
              onRename: CY
            }, `folder:${rY}`);
            const AY = (0, fA.g)(rY),
              RY = ZA.e in DY && ZA.i in DY,
              OY = !AY || RY,
              aY = null === gY && rY === FY;
            return (0, vY.jsx)(PA, {
              path: rY,
              label: YY.name,
              depth: YY.depth,
              isActive: aY,
              canRename: IY,
              onSelect: uY,
              onRename: ZY,
              onDelete: fY,
              canDelete: OY && IY
            }, rY)
          })), (0, vY.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, vY.jsxs)("span", {
              children: ["Schematics (", Object.keys(VY).length, "/", bA.d, ")"]
            }), IY && (0, vY.jsx)(iY.p, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(VY).length >= bA.d,
              onClick: () => {
                SY("")
              },
              children: (0, vY.jsx)(oY.e, {
                name: "plus"
              })
            })]
          }), Object.keys(VY).sort().map((YY => (0, vY.jsx)(PA, {
            path: YY,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: SY
          }, YY))), OY.length > 0 && (0, vY.jsxs)(vY.Fragment, {
            children: [(0, vY.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, vY.jsx)("span", {
                children: "Plugins"
              })
            }), OY.map((YY => {
              var rY;
              const DY = MA.f[YY],
                FY = Object.keys(null !== (rY = null === DY || void 0 === DY ? void 0 : DY.files) && void 0 !== rY ? rY : {
                  "index.ts": ""
                }).sort(((YY, rY) => "index.ts" === YY ? -1 : "index.ts" === rY ? 1 : YY.localeCompare(rY)));
              return (0, vY.jsxs)("div", {
                children: [(0, vY.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, fA.t)(YY)
                }), FY.map((rY => (0, vY.jsx)(PA, {
                  path: rY,
                  nested: !0,
                  isActive: gY === YY && aY === rY,
                  canRename: !1,
                  onSelect: () => {
                    sY(YY, rY)
                  },
                  canDelete: !1
                }, rY)))]
              }, YY)
            }))]
          })]
        }), (0, vY.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, vY.jsx)(iY.f, {
            className: "FileTreeFooterButton",
            onClick: mY,
            children: lY(RY ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function kA(YY) {
      return YY > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": YY
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function GA(YY) {
      let {
        depth: rY
      } = YY;
      return (0, vY.jsx)(vY.Fragment, {
        children: Array.from({
          length: rY
        }, ((YY, rY) => (0, vY.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": rY
          }
        }, rY)))
      })
    }

    function xA(YY) {
      let {
        path: rY,
        name: DY,
        depth: FY,
        collapsed: AY,
        onToggle: IY,
        canCreate: RY,
        canRename: OY,
        onCreate: gY,
        onRename: aY
      } = YY;
      const uY = [];
      RY && uY.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          gY(rY)
        }
      }), OY && uY.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          aY(rY)
        }
      });
      const sY = kA(FY);
      return (0, vY.jsxs)("div", {
        className: ir()("FileTreeItem FileTreeFolder", sY.className),
        style: sY.style,
        children: [(0, vY.jsx)(GA, {
          depth: FY
        }), (0, vY.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !AY,
          onClick: IY,
          children: [(0, vY.jsx)(oY.e, {
            className: "FileTreeFolderCaret",
            name: AY ? "caret-right" : "caret-down"
          }), (0, vY.jsx)(oY.e, {
            className: "FileTreeFolderIcon",
            name: AY ? "folder" : "folder-open"
          }), DY]
        }), (0, vY.jsx)(nA, {
          path: rY,
          actions: uY
        })]
      })
    }

    function nA(YY) {
      let {
        path: rY,
        actions: DY
      } = YY;
      const FY = (0, AY.useRef)(null);
      return 0 === DY.length ? null : (0, vY.jsxs)("div", {
        ref: FY,
        className: "FileTreeItemActions",
        children: [(0, vY.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${rY}`,
          children: (0, vY.jsx)(oY.e, {
            name: "ellipsis"
          })
        }), (0, vY.jsx)(wA.d, {
          triggerElementRef: FY,
          options: DY
        })]
      })
    }

    function PA(YY) {
      let {
        path: rY,
        label: DY = rY,
        depth: FY = 0,
        isActive: AY,
        canRename: IY,
        onSelect: RY,
        onRename: OY,
        onDelete: gY,
        canDelete: aY,
        nested: uY
      } = YY;
      const sY = [];
      IY && OY && sY.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          OY(rY)
        }
      }), aY && gY && sY.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          gY(rY)
        }
      });
      const iY = kA(FY);
      return (0, vY.jsxs)("div", {
        className: ir()("FileTreeItem", iY.className, {
          Active: AY,
          Nested: uY
        }),
        style: iY.style,
        children: [(0, vY.jsx)(GA, {
          depth: FY
        }), (0, vY.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: DY === rY ? void 0 : rY,
          onClick: () => {
            RY(rY)
          },
          children: DY
        }), (0, vY.jsx)(nA, {
          path: rY,
          actions: sY
        })]
      })
    }
    async function UA(YY) {
      const rY = (0, fA.c)(YY);
      if (!rY || "" === YY[rY].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: FY
      } = await Promise.all([DY.e(289), DY.e(290)]).then((() => DY(40543)));
      return (0, MA.d)(FY(YY))
    }
    var LA = DY(36254);

    function tA(YY, rY) {
      const DY = Object.keys(YY),
        FY = Object.keys(rY);
      if (DY.length !== FY.length) return !1;
      for (const AY of DY)
        if (!(AY in rY) || YY[AY] !== rY[AY]) return !1;
      return !0
    }

    function YI(YY, rY) {
      const DY = [],
        FY = [],
        AY = [];
      for (const IY of Object.keys(rY)) IY in YY ? YY[IY] !== rY[IY] && AY.push(IY) : DY.push(IY);
      for (const IY of Object.keys(YY)) IY in rY || FY.push(IY);
      return DY.sort(), FY.sort(), AY.sort(), {
        creates: DY,
        deletes: FY,
        updates: AY
      }
    }

    function rI(YY, rY) {
      var DY;
      const FY = {
          ...YY
        },
        AY = (0, fA.c)(rY),
        IY = (0, fA.c)(FY);
      if (ZA.e in FY && ZA.i in FY) {
        const YY = null !== AY && void 0 !== AY ? AY : ZA.i,
          DY = YY === ZA.e ? ZA.i : ZA.e;
        var RY;
        if (!(YY in FY)) FY[YY] = null !== (RY = rY[YY]) && void 0 !== RY ? RY : "";
        return delete FY[DY], FY
      }
      var OY;
      return AY && !(AY in FY) ? (IY || (FY[AY] = null !== (OY = rY[AY]) && void 0 !== OY ? OY : ""), FY) : (IY || AY || (FY[ZA.e] = null !== (DY = FY[ZA.e]) && void 0 !== DY ? DY : "", delete FY[ZA.i]), FY)
    }

    function DI(YY, rY) {
      const DY = (0, fA.c)(rY),
        FY = ZA.e in rY && ZA.i in rY;
      return YY.filter((YY => !(0, fA.g)(YY) || (!!FY || DY !== YY)))
    }
    async function FI(YY, rY, FY) {
      const AY = YY.getLobbyFiles(),
        IY = (0, AD.h)(FY, (0, fA.m)(AY, rY)),
        RY = await YY.ensureJoined(rY),
        OY = (0, CA.u)(RY.docKey);
      if (RY.doc === IY) return;
      for (let DY = 0; DY < 100; DY++) {
        const DY = YY.getCollabSnapshot();
        if (DY && (0, CA.u)(DY.docKey) === OY && YY.getActivePath() === rY) {
          if (YY.replaceActiveDoc(OY, IY)) return;
          await (0, ZF.M)(40)
        } else await (0, ZF.M)(40)
      }
      const {
        ChangeSet: gY
      } = await DY.e(285).then((() => DY(40395))), vY = YY.getCollabSnapshot(), uY = vY && (0, CA.u)(vY.docKey) === OY ? vY : RY;
      await async function(YY, rY, DY, FY) {
        const AY = YY.of({
            from: 0,
            to: DY.length,
            insert: FY
          }, DY.length),
          IY = JSON.stringify([{
            clientID: rY.clientID,
            changes: AY.toJSON()
          }]),
          RY = (0, CA.u)(rY.docKey);
        IY.length <= CA.f ? aY.gameBridge.send("sendCodeCollab", {
          br: CA.c.Push,
          Xr: RY,
          qr: rY.version,
          nr: IY
        }) : await (0, zA.postJsonWithMetricsCookiesAndJsonResponse)(`${rY.httpConfig.gsUrl}/code/collab-push`, HA.o["collab-push"].toBuffer({
          gameNameWithVariation: rY.httpConfig.gameNameWithVariation,
          lobbyName: rY.httpConfig.lobbyName,
          docKey: RY,
          version: rY.version,
          updates: IY
        }), {
          retries: 0
        })
      }(gY, uY, uY.doc, IY)
    }
    class AI {
      constructor(YY) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = YY
      }
      async writeLobbyFiles(YY) {
        const rY = {
            ...this.bridge.getLobbyFiles()
          },
          DY = {
            ...rY
          };
        for (const {
            path: IY,
            text: RY
          }
          of YY) DY[IY] = RY;
        if (!YY.every((YY => {
            let {
              path: rY,
              text: FY
            } = YY;
            return (0, AD.h)(FY, (0, fA.m)(DY, rY)) === FY
          }))) return !1;
        const FY = [];
        try {
          for (const {
              path: rY,
              text: DY
            }
            of YY) FY.push(rY), rY in this.bridge.getLobbyFiles() || (this.bridge.createFile(rY, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(rY, !0)), await FI(this.bridge, rY, DY)
        } catch (AY) {
          for (const YY of FY) YY in rY ? await FI(this.bridge, YY, rY[YY]).catch((rY => {
            console.error("World Code AI: couldn't put back", YY, rY)
          })) : this.bridge.deleteFile(YY);
          throw AY
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const YY = await (0, LA.u)(this.bridge.getStorageKey());
        return !!YY && (this.handle = YY, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(YY), !0)
      }
      async unlinkFolder() {
        const YY = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, LA.b)(YY), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const YY = this.bridge.getStorageKey(),
          rY = await (0, LA.q)(YY);
        return !!rY && (!!await (0, LA.f)(rY, "readwrite") && (this.handle = rY, this.linked = !0, await (0, LA.F)(YY, rY), await this.scaffoldLocalTypes(rY), !0))
      }
      scaffoldLocalTypes(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const FY = (await UA(rY)).map((YY => MA.f[YY])),
              AY = FY.map((YY => {
                var rY;
                return `${YY.name}:${Object.keys(null!==(rY=null===YY||void 0===YY?void 0:YY.files)&&void 0!==rY?rY:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === AY) return;
            const {
              ensureLocalBloxdTypes: IY
            } = await Promise.all([DY.e(81), DY.e(287), DY.e(292)]).then((() => DY(40547)));
            await IY(YY, FY), this.scaffoldedPluginNamesKey = AY
          } catch (FY) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", FY)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(YY) {
        this.handle && await this.scaffoldLocalTypes(this.handle, YY), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(YY)
      }
      async onDocTextChanged(YY, rY) {
        if (!this.handle) return;
        const DY = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [YY]: rY
        })];
        this.running && (this.pendingDocText.set(YY, rY), DY.push(this.flushDocTextToDisk())), await Promise.all(DY)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const YY = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const rY = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [DY, FY] of rY) this.lastSynced[DY] !== FY && (await (0, LA.M)(YY, DY, FY), this.lastSynced = {
              ...this.lastSynced,
              [DY]: FY
            })
          }
        } catch (rY) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", rY), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, LA.x)(this.handle))
          } catch (YY) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", YY)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, LA.f)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const rY = this.bridge.getLobbyFiles(),
              DY = await (0, LA.x)(this.handle);
            for (const YY of Object.keys(rY).filter(bA.c)) {
              if (DY[YY] === LA.j) return void this.bridge.setMessage(`Move ${YY} outside the linked folder before syncing its placeholder.`, "warning");
              DY[YY] = bA.m
            }
            if (tA(DY, rY)) {
              for (const YY of Object.keys(rY).filter(bA.c)) await (0, LA.M)(this.handle, YY, bA.m);
              return this.lastSynced = {
                ...DY
              }, void this.beginWatch()
            }
            const FY = await this.promptReconcile(function(YY) {
              return null !== (0, fA.c)(YY)
            }(DY));
            if ("unlink" === FY) return void await this.unlinkFolder();
            if ("dismissed" === FY) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === FY) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(DY);
                for (const YY of Object.keys(rY).filter(bA.c)) await (0, LA.M)(this.handle, YY, bA.m);
                this.lastSynced = {
                  ...await (0, LA.x)(this.handle)
                }
              } else await (0, LA.N)(this.handle, rY), this.lastSynced = {
                ...rY
              }
            } catch (YY) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", YY), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(YY) {
        return await new Promise((rY => {
          const DY = [{
              choice: "local",
              Button: iY.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: iY.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: iY.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            FY = (0, vY.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, vY.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, vY.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: YY ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, vY.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: DY.filter((rY => "local" !== rY.choice || YY)).map((YY => {
                  let {
                    choice: DY,
                    Button: FY,
                    labelKey: IY,
                    descriptionKey: RY
                  } = YY;
                  return (0, vY.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, vY.jsx)(FY, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (YY => {
                          AY.tearDownNotification(), rY(YY)
                        })(DY)
                      },
                      children: this.bridge.t(`codeEditor:${IY}`)
                    }), (0, vY.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${RY}`)
                    })]
                  }, DY)
                }))
              })]
            }),
            AY = aA.NotificationProvider.showCustomPopup({
              body: FY,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          AY.getResult().then((YY => {
            "notificationTornDown" === YY && rY("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, LA.I)(this.handle, (YY => {
          this.onDiskFilesChanged(YY)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (YY) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", YY)
        }
      }
      async onDiskFilesChanged(YY) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const rY = this.bridge.getLobbyFiles();
        let DY = rI(YY, this.lastSynced);
        for (const IY in rY)
          if ((0, bA.c)(IY) && DY[IY] === LA.j) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const FY = Object.keys(DY).filter((YY => (0, bA.c)(YY) && !(YY in rY)));
        FY.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const IY of Object.keys(rY).filter(bA.c))(IY in DY || FY.length > 0 || !(IY in this.lastSynced)) && (DY[IY] = bA.m);
        if (!tA(DY, YY)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(YY, DY), DY = rI(await (0, LA.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!tA(DY, this.lastSynced)) {
          this.applying = !0;
          try {
            const YY = YI(this.lastSynced, DY);
            if (await this.pushDiskDeltaToLobby(DY, rY), null !== this.lastLobbySeen)
              for (const DY of [...YY.creates, ...YY.updates, ...YY.deletes])(0, bA.c)(DY) || (DY in rY ? this.lastLobbySeen[DY] = rY[DY] : delete this.lastLobbySeen[DY]);
            this.lastSynced = {
              ...DY
            }
          } catch (AY) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", AY), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(YY, rY) {
        if (this.handle) {
          for (const DY of Object.keys(YY)) DY in rY || await (0, LA.B)(this.handle, DY);
          for (const [DY, FY] of Object.entries(rY)) YY[DY] !== FY && await (0, LA.M)(this.handle, DY, FY)
        }
      }
      async applyRemoteTreeToDisk(YY) {
        if (!this.handle) return;
        const rY = this.lastLobbySeen;
        if (null === rY) return void(this.lastLobbySeen = {
          ...YY
        });
        const DY = Object.keys(YY).filter((DY => rY[DY] !== YY[DY])),
          FY = Object.keys(rY).filter((rY => !(rY in YY)));
        if (0 !== DY.length || 0 !== FY.length) {
          this.applying = !0;
          try {
            for (const rY of [...FY, ...DY]) try {
              if (rY in YY) await (0, LA.M)(this.handle, rY, YY[rY]), this.lastSynced = {
                ...this.lastSynced,
                [rY]: YY[rY]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [rY]: YY[rY]
              };
              else {
                await (0, LA.B)(this.handle, rY);
                const YY = {
                  ...this.lastSynced
                };
                delete YY[rY], this.lastSynced = YY;
                const DY = {
                  ...this.lastLobbySeen
                };
                delete DY[rY], this.lastLobbySeen = DY
              }
            } catch (AY) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", AY), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(YY, rY) {
        const DY = function(YY, rY) {
          const DY = (0, fA.c)(YY),
            FY = (0, fA.c)(rY);
          return DY && FY && DY !== FY ? {
            from: DY,
            to: FY
          } : null
        }(YY, rY);
        return !!DY && (this.bridge.renameFile(DY.from, DY.to), await this.bridge.waitForLobbyPath(DY.to, !0), !0)
      }
      async applyLocalTreeToLobby(YY) {
        var rY;
        const DY = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), YY);
        const FY = this.bridge.getLobbyFiles(),
          AY = YI(FY, YY),
          IY = DI(AY.deletes, FY);
        for (const aY of AY.creates)(0, bA.c)(aY) || (this.bridge.createFile(aY, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(aY, !0));
        for (const aY of IY)(0, bA.c)(aY) || (this.bridge.deleteFile(aY), await this.bridge.waitForLobbyPath(aY, !1));
        if (!(0, fA.c)(this.bridge.getLobbyFiles()) && !(0, fA.c)(YY)) {
          if (this.bridge.createFile(ZA.e, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(ZA.e, !0), !this.handle) return;
          await (0, LA.M)(this.handle, ZA.e, ""), YY = {
            ...YY,
            [ZA.e]: ""
          }
        }
        const RY = this.bridge.getLobbyFiles();
        for (const aY of Object.keys(YY))(0, bA.c)(aY) || RY[aY] !== YY[aY] && await FI(this.bridge, aY, YY[aY]);
        const OY = this.bridge.getLobbyFiles(),
          gY = DY in OY ? DY : null !== (rY = (0, fA.c)(OY)) && void 0 !== rY ? rY : ZA.e;
        await this.bridge.ensureJoined(gY)
      }
      async pushDiskDeltaToLobby(YY, rY) {
        const DY = this.bridge.getActivePath(),
          FY = await this.renameLobbyEntryIfSwitched(rY, YY) ? this.bridge.getLobbyFiles() : rY,
          AY = YI(this.lastSynced, YY),
          IY = DI(AY.deletes, FY).filter((YY => YY in FY));
        for (const RY of AY.creates)(0, bA.c)(RY) || (RY in this.bridge.getLobbyFiles() || (this.bridge.createFile(RY, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(RY, !0)), await FI(this.bridge, RY, YY[RY]));
        for (const RY of IY)(0, bA.c)(RY) ? await this.bridge.deleteSchematic(RY) : (this.bridge.deleteFile(RY), await this.bridge.waitForLobbyPath(RY, !1));
        for (const RY of AY.updates)(0, bA.c)(RY) || await FI(this.bridge, RY, YY[RY]);
        DY in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== DY && await this.bridge.ensureJoined(DY)
      }
    }
    var II = DY(1222);

    function RI() {
      const {
        websocketUrl: YY,
        gameNameWithVariation: rY,
        lobbyName: DY
      } = aY.gameBridge.latest("connectedGame");
      return {
        gsUrl: II.clientSideServerUrls.getHttpUrlFromWebSocketUrl(YY),
        gameNameWithVariation: rY,
        lobbyName: DY
      }
    }
    async function OI(YY) {
      const {
        gsUrl: rY,
        gameNameWithVariation: DY,
        lobbyName: FY
      } = RI();
      return await (0, zA.postBinaryWithMetricsCookiesAndCustomResponse)(`${rY}/code/schematics`, HA.Rj.schematics.toBuffer({
        gameNameWithVariation: DY,
        lobbyName: FY,
        request: JSON.stringify(YY)
      }), {
        retries: 0
      }, zA.HttpPayloadType.json)
    }
    var gI = DY(35782);

    function aI(YY) {
      let {
        path: rY,
        revision: DY
      } = YY;
      const [FY, IY] = (0, AY.useState)(""), [RY, OY] = (0, AY.useState)(!1), [gY, aY] = (0, AY.useState)(0);
      return (0, AY.useEffect)((() => {
        let YY = !1;
        return IY(""), OY(!1), OI({
          action: "preview",
          path: rY
        }).then((rY => {
          YY || IY(`data:image/webp;base64,${rY.previewBase64}`)
        })).catch((rY => {
          console.error("Could not load schematic preview", rY), YY || OY(!0)
        })), () => {
          YY = !0
        }
      }), [rY, DY, gY]), (0, vY.jsxs)("div", {
        className: "SchematicPreview",
        children: [FY && (0, vY.jsx)("img", {
          src: FY,
          alt: `Preview of ${rY}`
        }), !FY && !RY && (0, vY.jsx)(cY.c, {
          loaderType: "Secondary"
        }), RY && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, vY.jsx)(iY.f, {
            onClick: () => {
              aY(gY + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function vI(YY) {
      var rY;
      let {
        initialPath: DY,
        onChanged: FY,
        onClose: IY
      } = YY;
      const RY = "" === DY,
        [OY, gY] = (0, AY.useState)(null),
        [aY, uY] = (0, AY.useState)(DY),
        [sY, yY] = (0, AY.useState)(!1),
        [QY, oY] = (0, AY.useState)(!1),
        [WY, EY] = (0, AY.useState)(null),
        [mY, VY] = (0, AY.useState)(!1),
        [SY, lY] = (0, AY.useState)(""),
        TY = (0, AY.useRef)(null),
        eY = (0, AY.useRef)(!1),
        NY = (0, AY.useRef)(!0);
      (0, AY.useEffect)((() => (NY.current = !0, OI({
        action: "state"
      }).then((YY => {
        NY.current && gY(YY)
      })).catch((YY => {
        console.error("Could not load schematic assets", YY), NY.current && lY("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        NY.current = !1
      })), []);
      const BY = null === OY || void 0 === OY ? void 0 : OY.assets[DY],
        cY = Object.keys(null !== (rY = null === OY || void 0 === OY ? void 0 : OY.assets) && void 0 !== rY ? rY : {}).length,
        KY = aY.trim(),
        HY = KY ? (0, bA.c)(KY) ? null !== OY && void 0 !== OY && OY.assets[KY] && (RY || KY !== DY) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        zY = !!KY && !HY && (RY ? cY < bA.d : KY !== DY),
        ZY = mY || !OY;
      async function CY(YY) {
        if (!eY.current && NY.current) {
          eY.current = !0, VY(!0), lY("");
          try {
            const rY = await OI({
              ...YY,
              expectedRevision: OY.revision
            });
            FY(rY), NY.current && IY()
          } catch (DY) {
            var rY;
            if (console.error("Schematic asset operation failed", DY), NY.current) lY(DY instanceof pY.e ? null !== (rY = DY.errorMessageForUser) && void 0 !== rY ? rY : DY.message : String(DY));
            try {
              const YY = await OI({
                action: "state"
              });
              FY(YY), NY.current && gY(YY)
            } catch (AY) {
              console.error("Could not refresh schematic assets", AY)
            }
          } finally {
            eY.current = !1, NY.current && VY(!1)
          }
        }
      }
      return (0, vY.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, vY.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: RY ? "New schematic" : sY ? "Rename schematic" : "Schematic"
        }), SY && (0, vY.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: SY
        }), !OY && !SY && (0, vY.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, vY.jsxs)("fieldset", {
          disabled: ZY,
          children: [RY || sY ? (0, vY.jsxs)("label", {
            className: "SchematicField",
            children: [(0, vY.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, vY.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, vY.jsx)(Br.d, {
                className: "InputGenericPopupInput",
                defaultValue: DY,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: uY
              }, sY ? "rename" : "create")
            })]
          }) : (0, vY.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: DY
          }), (RY || sY) && HY && (0, vY.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: HY
          }), RY ? (0, vY.jsxs)(vY.Fragment, {
            children: [cY >= bA.d && (0, vY.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", bA.d, " maximum)."]
            }), QY ? (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, vY.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": ZY || !zY,
                children: (0, vY.jsx)(gI.b, {
                  loading: null === WY,
                  schematics: null !== WY && void 0 !== WY ? WY : [],
                  disableAutoExport: !0,
                  onSchematicPicked: YY => {
                    !ZY && zY && CY({
                      action: "profile",
                      path: KY,
                      schematicId: YY.schematicId
                    })
                  }
                })
              }), (0, vY.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, vY.jsx)(iY.f, {
                  className: "InputGenericPopupButton",
                  disabled: ZY,
                  onClick: () => {
                    oY(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, vY.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, vY.jsx)(iY.f, {
                className: "InputGenericPopupButton",
                disabled: ZY || !zY,
                onClick: () => {
                  TY.current.click()
                },
                children: "Upload Schematic"
              }), (0, vY.jsx)(iY.f, {
                className: "InputGenericPopupButton",
                disabled: ZY || !zY,
                onClick: () => {
                  !async function() {
                    if (oY(!0), lY(""), !WY) try {
                      const YY = await (0, zA.postJsonWithMetricsCookiesAndJsonResponse)(`${II.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      NY.current && EY(YY)
                    } catch (YY) {
                      console.error("Could not load profile schematics", YY), NY.current && (oY(!1), lY("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, vY.jsx)("input", {
              ref: TY,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: YY => {
                var rY;
                const DY = null === (rY = YY.target.files) || void 0 === rY ? void 0 : rY[0];
                if (YY.target.value = "", !DY) return;
                if (DY.size > bA.h) return void lY("The schematic file is too large.");
                const FY = KY;
                VY(!0);
                const AY = new FileReader;
                AY.onload = () => {
                  CY({
                    action: "upload",
                    path: FY,
                    base64: String(AY.result).split(",")[1]
                  })
                }, AY.onerror = () => {
                  console.error("Could not read schematic file", AY.error), NY.current && (VY(!1), lY("Could not read the selected file."))
                }, AY.readAsDataURL(DY)
              }
            })]
          }) : BY ? (0, vY.jsxs)(vY.Fragment, {
            children: [!sY && (0, vY.jsx)(aI, {
              path: DY,
              revision: OY.revision
            }), !sY && (0, vY.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(BY.byteSize / 1024), " KB \xb7 ", BY.dimensions.join(" \xd7 "), " blocks"]
            }), (0, vY.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: sY ? (0, vY.jsxs)(vY.Fragment, {
                children: [(0, vY.jsx)(iY.f, {
                  className: "InputGenericPopupButton",
                  disabled: ZY || !zY,
                  onClick: () => {
                    CY({
                      action: "rename",
                      path: DY,
                      newPath: KY
                    })
                  },
                  children: "Rename"
                }), (0, vY.jsx)(iY.f, {
                  className: "InputGenericPopupButton",
                  disabled: ZY,
                  onClick: () => {
                    yY(!1), uY(DY)
                  },
                  children: "Cancel"
                })]
              }) : (0, vY.jsxs)(vY.Fragment, {
                children: [(0, vY.jsx)(iY.f, {
                  className: "InputGenericPopupButton",
                  disabled: ZY,
                  onClick: () => {
                    yY(!0)
                  },
                  children: "Rename"
                }), (0, vY.jsx)(iY.D, {
                  className: "InputGenericPopupButton",
                  disabled: ZY,
                  onClick: () => {
                    CY({
                      action: "remove",
                      path: DY
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : OY && (0, vY.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function uI(YY) {
      if ("string" !== typeof YY) return null;
      try {
        const rY = JSON.parse(YY);
        return (0, fA.k)(null === rY || void 0 === rY ? void 0 : rY.worldCodeEngine) && "boolean" === typeof rY.engineLocked && function(YY) {
          if (null === YY) return !0;
          const rY = null === YY || void 0 === YY ? void 0 : YY.location;
          return "string" === typeof(null === YY || void 0 === YY ? void 0 : YY.reason) && (null === rY || "string" === typeof(null === rY || void 0 === rY ? void 0 : rY.path) && Number.isInteger(rY.line))
        }(rY.fallback) ? rY : (console.error("[CodeCollab] Malformed engine settings", YY), null)
      } catch (rY) {
        return console.error("[CodeCollab] Failed to parse engine settings", rY), null
      }
    }

    function sI(YY) {
      let {
        fallback: rY,
        onGoToLine: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), {
        location: AY
      } = rY;
      return (0, vY.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [FY("codeEditorEngine:notice", {
          reason: rY.reason
        }), AY && (0, vY.jsxs)(vY.Fragment, {
          children: [" ", (0, vY.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              DY(AY.path, AY.line)
            },
            children: FY("codeEditorEngine:goToLine", {
              line: String(AY.line)
            })
          })]
        })]
      })
    }
    var iI = DY(4516);

    function yI(YY) {
      let {
        label: rY,
        hint: DY,
        checked: FY,
        onChange: AY
      } = YY;
      return (0, vY.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, vY.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, vY.jsx)("span", {
            children: rY
          }), (0, vY.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: DY
          })]
        }), (0, vY.jsx)("span", {
          className: "SwitchContainer",
          children: (0, vY.jsx)(Vr.d, {
            className: "SwitchCheckbox",
            checked: FY,
            onChange: YY => {
              AY(YY.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function QI(YY) {
      let {
        engine: rY,
        onSetEngine: DY,
        aiHints: FY,
        variation: AY
      } = YY;
      const {
        t: IY
      } = (0, nY.C)();
      return (0, vY.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, vY.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: IY("codeEditor:moreOptions")
        }), rY && (0, vY.jsx)(yI, {
          label: IY("codeEditorEngine:toggle"),
          hint: IY("codeEditorEngine:toggleHint"),
          checked: "ses" === rY,
          onChange: YY => {
            DY(YY ? "ses" : "quickjs")
          }
        }), FY && (0, vY.jsx)(yI, {
          label: IY("codeEditorAiHints:toggle"),
          hint: IY("codeEditorAiHints:toggleHint"),
          checked: FY.shown,
          onChange: FY.setShown
        }), AY && (0, vY.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, vY.jsx)(iI.f, {
            label: "codeEditor:variationLabel",
            children: (0, vY.jsx)(Br.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: AY.name,
              onValueChange: AY.setName,
              onEnter: AY.reload
            })
          }), (0, vY.jsx)(iY.u, {
            className: "CodeEditorButton",
            onClick: AY.reload,
            children: IY("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var oI = DY(36263),
      WI = DY(36268);

    function EI(YY) {
      let {
        close: rY
      } = YY;
      const {
        t: DY
      } = (0, nY.C)(), FY = [{
        name: DY("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: DY("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: DY("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, vY.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, vY.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: DY("codeEditor:tutorialsTitle")
        }), (0, vY.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: FY.map((YY => (0, vY.jsx)(iY.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              rY(), (0, WI.K)(YY.tutorial)
            },
            children: YY.name
          }, YY.tutorial)))
        })]
      })
    }
    var mI = DY(117),
      VI = DY(35980),
      SI = DY(8189);
    const lI = (0, AY.forwardRef)((function(YY, rY) {
      let {
        value: DY,
        onChange: FY,
        onSubmit: AY,
        placeholder: IY,
        maxLength: RY,
        rows: OY = 2,
        allowNewLines: gY = !1,
        onKeyDown: aY,
        before: uY
      } = YY;
      const {
        t: sY
      } = (0, nY.C)(), yY = "" !== DY.trim(), QY = () => {
        yY && AY()
      };
      return (0, vY.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [uY, (0, vY.jsx)("textarea", {
          ref: rY,
          className: "PanelPromptInput",
          value: DY,
          maxLength: RY,
          rows: OY,
          placeholder: IY,
          spellCheck: !1,
          autoComplete: "off",
          onChange: YY => {
            FY(gY ? YY.target.value : YY.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: YY => {
            YY.nativeEvent.isComposing || 229 === YY.nativeEvent.keyCode ? YY.stopPropagation() : "Escape" !== YY.key && (YY.stopPropagation(), null === aY || void 0 === aY || aY(YY), YY.defaultPrevented || "Enter" !== YY.key || gY && YY.shiftKey || (YY.preventDefault(), QY()))
          }
        }), (0, vY.jsx)(iY.f, {
          className: "PanelPromptSend",
          disabled: !yY,
          onClick: QY,
          ariaLabel: sY("codeEditorPanels:send"),
          children: (0, vY.jsx)(oY.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function TI(YY) {
      let {
        close: rY,
        inputRef: DY
      } = YY;
      const {
        t: FY
      } = (0, nY.C)(), {
        messages: IY,
        reportedPlayers: RY,
        channel: OY
      } = (0, SI.n)(), [gY, aY] = (0, AY.useState)(""), uY = (0, AY.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, vY.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, vY.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, vY.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: FY("codeEditorChat:title")
          }), (0, vY.jsx)(iY.k, {
            className: "CodeEditorChatHide",
            onClick: rY
          })]
        }), 0 === IY.length ? (0, vY.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: FY("codeEditorChat:empty")
        }) : (0, vY.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, vY.jsx)(VI.e, {
            messages: IY,
            reportedPlayers: RY
          })
        }), (0, vY.jsx)(lI, {
          ref: DY,
          value: gY,
          onChange: aY,
          onSubmit: () => {
            (0, SI.l)(gY), aY(""), uY.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: NY.Vc,
          rows: 1,
          placeholder: OY ? FY("touchOnly" === (0, mI.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: OY.channelName
          }) : FY("codeEditorChat:placeholder"),
          before: OY && (0, vY.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: OY.elementBgColor
            },
            onClick: () => {
              SI.c.selectNextChannel(), DY.current.focus()
            },
            children: (0, vY.jsx)(TY.b, {
              text: OY.elementContent
            })
          }),
          onKeyDown: YY => {
            const rY = gY === uY.current.text;
            if ("ArrowUp" !== YY.key && "ArrowDown" !== YY.key || !rY && "" !== gY) "Tab" === YY.key && !YY.shiftKey && OY && (YY.preventDefault(), SI.c.selectNextChannel());
            else {
              YY.preventDefault();
              const DY = rY ? uY.current.stepsBack : 0;
              uY.current = (0, SI.k)(DY + ("ArrowUp" === YY.key ? 1 : -1)), aY(uY.current.text)
            }
          }
        })]
      })
    }
    var eI = DY(36271);

    function NI(YY) {
      let {
        Mu: rY,
        worldPanel: DY,
        aiShown: FY,
        defaultWidth: AY,
        children: IY
      } = YY;
      const RY = "hidden" !== rY;
      return (0, vY.jsx)(eI.c, {
        side: "right",
        defaultSize: RY ? "max(18rem, 40%)" : AY,
        covers: "expanded" === rY ? "always" : RY || FY ? "narrow" : void 0,
        children: (0, vY.jsxs)("div", {
          className: ir()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === rY
          }),
          children: [RY && (0, vY.jsx)(eI.c, {
            side: "top",
            children: DY
          }), IY]
        })
      })
    }
    var BI = DY(1842),
      cI = DY(1943),
      KI = DY(1298);
    class HI {
      constructor(YY, rY, DY) {
        this.measure = YY, this.apply = rY, this.now = DY, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var YY, rY;
        return null !== (YY = null === (rY = this.last) || void 0 === rY ? void 0 : rY.rect) && void 0 !== YY ? YY : null
      }
      sync() {
        const YY = function(YY) {
          const rY = Math.round(YY.left),
            DY = Math.round(YY.top);
          return {
            left: rY,
            top: DY,
            width: Math.round(YY.right) - rY,
            height: Math.round(YY.bottom) - DY
          }
        }(this.measure());
        if (YY.width <= 0 || YY.height <= 0) return;
        const rY = this.now(),
          DY = this.last;
        let FY = {
          width: YY.width,
          height: YY.height
        };
        null === DY || YY.width === DY.rect.width && YY.height === DY.rect.height || (this.resizing = rY - this.resizedAt < 100, this.resizedAt = rY);
        const AY = null !== DY && this.resizing && rY - this.resizedAt < 100 && (YY.width !== DY.bufferSize.width || YY.height !== DY.bufferSize.height);
        AY && (this.stretchedAt ??= rY), AY && rY - this.stretchedAt < 250 ? FY = DY.bufferSize : this.stretchedAt = null;
        const IY = {
          rect: YY,
          bufferSize: FY
        };
        var RY, OY;
        null !== DY && (OY = IY, (RY = DY).rect.left === OY.rect.left && RY.rect.top === OY.rect.top && RY.rect.width === OY.rect.width && RY.rect.height === OY.rect.height && RY.bufferSize.width === OY.bufferSize.width && RY.bufferSize.height === OY.bufferSize.height) || (this.last = IY, this.apply(IY))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function zI(YY) {
      const {
        style: rY
      } = document.documentElement;
      for (const [DY, FY] of [
          ["--worldViewLeft", null === YY || void 0 === YY ? void 0 : YY.left],
          ["--worldViewTop", null === YY || void 0 === YY ? void 0 : YY.top],
          ["--worldViewWidth", null === YY || void 0 === YY ? void 0 : YY.width],
          ["--worldViewHeight", null === YY || void 0 === YY ? void 0 : YY.height]
        ]) void 0 === FY ? rY.removeProperty(DY) : rY.setProperty(DY, `${FY}px`)
    }
    var ZI = DY(1699),
      CI = DY(1859);

    function fI(YY, rY) {
      (0, AY.useEffect)((() => {
        if (!YY) return;
        const DY = YY => {
          var DY;
          "Escape" === YY.key ? (YY.stopPropagation(), YY.preventDefault(), rY()) : (DY = YY.code, Object.entries(RD.u).some((YY => {
            let [rY, FY] = YY;
            const AY = CI.e[rY];
            return AY.includes("ui") && !AY.includes("core") && FY.includes(DY)
          })) && !(0, ZI.isTextEntry)(YY.target) && YY.preventDefault())
        };
        window.addEventListener("keydown", DY, !0);
        const FY = (0, wY.m)(rY);
        return () => {
          window.removeEventListener("keydown", DY, !0), FY()
        }
      }), [YY, rY])
    }

    function jI() {
      return (0, EA.h)().some((YY => YY !== EA.d))
    }

    function hI(YY, rY) {
      return YY.map((YY => rY ? String(YY) : YY.toFixed(1))).join(", ")
    }

    function dI(YY) {
      let {
        freeCamera: rY,
        picking: DY,
        hovered: FY
      } = YY;
      const {
        t: IY
      } = (0, nY.C)(), RY = (0, AY.useRef)(null), OY = (0, AY.useRef)(null);
      return (0, AY.useEffect)((() => {
        const YY = (YY, rY) => {
            YY.textContent !== rY && (YY.textContent = rY)
          },
          DY = () => {
            const DY = rY ? aY.gameBridge.lookup("freeCameraPos", null) : null;
            YY(RY.current, hI(null !== DY && void 0 !== DY ? DY : aY.gameBridge.lookup("localPos", null), !1));
            const FY = aY.gameBridge.lookup("targetedBlockPos", null);
            YY(OY.current, FY ? hI(FY, !0) : "-")
          };
        return DY(), (0, KI.A)(DY)
      }), [rY]), (0, vY.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, vY.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: IY(rY ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, vY.jsx)("span", {
          ref: RY
        }), (0, vY.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: IY("codeEditorWorld:lookingAt")
        }), (0, vY.jsx)("span", {
          ref: OY,
          hidden: DY
        }), DY && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)("span", {
            children: FY ? hI(FY.pos, !0) : "-"
          }), FY && (0, vY.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: FY.name
          })]
        })]
      })
    }
    var JI = DY(36277);

    function MI(YY) {
      const rY = YY.currentTarget.getBoundingClientRect();
      return {
        x: (YY.clientX - rY.left) / rY.width,
        y: (YY.clientY - rY.top) / rY.height
      }
    }

    function wI(YY) {
      const [rY, DY] = (0, AY.useState)(!1), [FY, IY] = (0, AY.useState)(null), RY = (0, AY.useRef)(null);
      (0, AY.useEffect)((() => {
        if (!rY) return;
        let YY = null,
          DY = null,
          FY = 1 / 0;
        const AY = (0, KI.s)((rY => {
          FY += rY;
          const AY = RY.current;
          if (AY === DY && FY < 100) return;
          DY = AY, FY = 0;
          const OY = AY && aY.gameBridge.lookup("blockAtViewPoint", AY);
          var gY, vY;
          (gY = OY) === (vY = YY) || null !== gY && null !== vY && gY.name === vY.name && (0, JI.g)(gY.pos, vY.pos) && (0, JI.g)(gY.normal, vY.normal) || (YY = OY, IY(OY), aY.gameBridge.send("setBlockHighlight", OY))
        }));
        return () => {
          AY(), null !== YY && aY.gameBridge.send("setBlockHighlight", null), IY(null)
        }
      }), [rY]);
      const OY = (0, AY.useCallback)((() => {
        DY(!1)
      }), []);
      fI(rY, OY);
      const gY = {
        onPointerMove: YY => {
          RY.current = MI(YY)
        },
        onPointerLeave: () => {
          RY.current = null
        },
        onClick: FY => {
          if (!rY) return;
          const AY = aY.gameBridge.lookup("blockAtViewPoint", MI(FY));
          null !== AY && (DY(!1), YY(AY.pos))
        }
      };
      return {
        picking: rY,
        setPicking: DY,
        hovered: FY,
        slotHandlers: gY
      }
    }

    function bI(YY) {
      aY.gameBridge.send("setFreeCameraMovesFly", YY)
    }

    function XI(YY) {
      let {
        shown: rY,
        setShown: DY,
        canInsertCode: FY
      } = YY;
      const {
        t: IY
      } = (0, nY.C)(), {
        isTouchScreen: RY
      } = (0, MY.j)(["isTouchScreen"]), OY = (0, AY.useRef)(null), aY = (0, AY.useCallback)((() => {
        var YY;
        null === (YY = OY.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === YY || YY.focus()
      }), []), {
        control: uY,
        take: sY,
        release: QY,
        blocked: WY
      } = function(YY) {
        const [rY, DY] = (0, AY.useState)("none"), FY = (0, AY.useRef)("none"), [IY, RY] = (0, AY.useState)(!1), OY = YY => {
          FY.current = YY, DY(YY)
        }, gY = (0, AY.useCallback)((() => {
          const rY = FY.current;
          "none" !== rY && (OY("none"), (0, EA.k)(EA.d), "mouse" === rY && YY())
        }), [YY]), aY = (0, AY.useCallback)((YY => {
          jI() ? RY(!0) : (OY("mouse" === YY && "touchOnly" !== (0, mI.d)() ? "mouse" : "touch"), (0, EA.j)(EA.d))
        }), []);
        return (0, eY.g)("pointerLockUpdate", (YY => {
          YY && "touch" === FY.current && "touchOnly" !== (0, mI.d)() ? OY("mouse") : YY || "mouse" !== FY.current || gY()
        })), (0, AY.useEffect)((() => {
          if (!IY) return;
          const YY = () => {
            jI() || RY(!1)
          };
          return YY(), (0, EA.f)(YY)
        }), [IY]), fI("none" !== rY, gY), (0, AY.useEffect)((() => {
          if ("none" === rY) return;
          const YY = YY => {
            (0, ZI.isTextEntry)(YY.target) && gY()
          };
          return document.addEventListener("focusin", YY), () => {
            document.removeEventListener("focusin", YY)
          }
        }), [rY, gY]), (0, AY.useEffect)((() => (document.addEventListener("pointerlockerror", gY), () => {
          document.removeEventListener("pointerlockerror", gY)
        })), [gY]), (0, AY.useEffect)((() => () => {
          "none" !== FY.current && null !== MY.b.get("openInGameMenuName") && (0, EA.k)(EA.d)
        }), []), {
          control: rY,
          take: aY,
          release: gY,
          blocked: IY
        }
      }(aY), EY = (0, cI.d)(eI.e);
      (0, AY.useEffect)((() => {
        "touch" !== uY || "shown" !== rY || EY ? "none" === uY && "expanded" === rY && DY("shown") : DY("expanded")
      }), [uY, EY]),
      function(YY, rY) {
        const DY = (0, AY.useRef)(rY);
        DY.current = rY;
        const FY = (0, AY.useRef)(null);
        (0, AY.useLayoutEffect)((() => {
          const rY = new HI((() => YY.current.getBoundingClientRect()), (YY => {
            var rY;
            "none" !== DY.current && zI(null !== (rY = null === YY || void 0 === YY ? void 0 : YY.rect) && void 0 !== rY ? rY : null), (0, KI.F)().setGameView(YY)
          }), (() => performance.now()));
          FY.current = rY, rY.sync();
          const AY = (0, KI.p)((() => {
            rY.sync()
          }));
          return () => {
            AY(), MY.b.set({
              worldPanelHud: null
            }), rY.stop()
          }
        }), [YY]), (0, AY.useLayoutEffect)((() => {
          FY.current.sync(), zI("none" === rY ? null : FY.current.rect), MY.b.set({
            worldPanelHud: rY
          })
        }), [rY])
      }(OY, "touch" === uY ? "touchControls" : "none");
      const {
        picking: mY,
        setPicking: VY,
        hovered: SY,
        slotHandlers: lY
      } = wI((YY => {
        yY.g.vo("CodeEditorInsertText", {
          text: `[${YY.join(", ")}]`,
          focus: !RY
        }), (0, eI.e)() && DY("hidden")
      })), TY = function() {
        const {
          allowed: YY,
          movesFly: rY
        } = (0, BY.h)("freeCamera"), DY = (0, AY.useRef)(rY), FY = (0, AY.useRef)(rY);
        return FY.current !== rY && (FY.current = rY, DY.current = rY), (0, AY.useEffect)((() => () => {
          DY.current && bI(!1)
        }), []), {
          allowed: YY,
          on: rY,
          toggle: () => {
            DY.current = !rY, bI(!rY)
          }
        }
      }(), NY = (0, gY.j)("hideCoordinates"), cY = (0, BY.h)("localPlayerAlive"), KY = !cY || WY;
      (0, AY.useEffect)((() => {
        cY || QY()
      }), [cY, QY]), (0, AY.useEffect)((() => {
        !KY && FY || VY(!1)
      }), [KY, FY, VY]);
      const HY = TY.on ? iY.n : iY.f,
        zY = mY ? iY.n : iY.f;
      return (0, vY.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, vY.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, vY.jsx)("span", {
            className: "WorldPanelTitle",
            children: IY("codeEditorWorld:title")
          }), "touch" === uY && !EY && (0, vY.jsx)(iY.f, {
            className: "WorldPanelButton",
            onClick: QY,
            children: IY("codeEditorWorld:backToCode")
          }), !KY && TY.allowed && !RY && (0, vY.jsx)(GY.g, {
            tooltipInner: IY("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, vY.jsx)(HY, {
              className: "WorldPanelButton",
              ariaPressed: TY.on,
              ariaLabel: IY("codeEditorWorld:freeCamera"),
              onClick: TY.toggle,
              children: (0, vY.jsx)(oY.e, {
                name: "video"
              })
            })
          }), !KY && FY && (0, vY.jsx)(GY.g, {
            tooltipInner: IY("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, vY.jsxs)(zY, {
              className: "WorldPanelButton",
              ariaPressed: mY,
              onClick: () => {
                QY(), VY(!mY)
              },
              children: [(0, vY.jsx)(oY.e, {
                name: "crosshairs"
              }), IY("codeEditorWorld:pick")]
            })
          }), (0, vY.jsx)(iY.k, {
            className: "WorldPanelHide",
            onClick: () => {
              DY("hidden")
            }
          })]
        }), !NY && (0, vY.jsx)(dI, {
          freeCamera: TY.on,
          picking: mY,
          hovered: SY
        }), (0, vY.jsxs)("div", {
          ref: OY,
          className: ir()("WorldPanelSlot", {
            TouchControl: "touch" === uY,
            Picking: mY
          }),
          onPointerDown: YY => {
            0 !== YY.button || KY || mY || sY(YY.pointerType)
          },
          ...lY,
          children: [!KY && !mY && (0, vY.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !KY && "touch" !== uY && (0, vY.jsxs)("div", {
            className: "WorldPanelHint",
            children: [mY && IY(RY ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !mY && "none" === uY && !TY.on && IY(RY ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !mY && "none" === uY && TY.on && IY("codeEditorWorld:clickToFly"), "mouse" === uY && (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsx)(BI.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), IY("codeEditorWorld:backToCode")]
            })]
          }), KY && (0, vY.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, vY.jsx)("span", {
              children: IY(cY ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, vY.jsx)(iY.f, {
              onClick: wY.e,
              children: IY("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var qI = DY(4608);

    function pI(YY) {
      let {
        Mu: rY,
        setWorld: DY,
        toggleWorld: FY,
        aiShown: AY,
        closeAi: IY
      } = YY;
      const {
        t: RY
      } = (0, nY.C)(), OY = AY ? "ai" : "hidden" !== rY ? "world" : "code", gY = [{
        value: "code",
        label: RY("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: RY("codeEditorWorld:title")
      }];
      AY && gY.push({
        value: "ai",
        label: RY("codeEditorWorld:aiPane")
      });
      return (0, vY.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, vY.jsx)(qI.d, {
          options: gY,
          value: OY,
          onChange: YY => {
            "world" !== YY ? (AY && IY(), DY("hidden")) : "hidden" === rY ? FY() : IY()
          },
          ariaLabel: RY("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var kI = DY(36286);
    class GI {
      constructor(YY, rY) {
        this.storageKey = YY, this.defaultValue = rY, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const YY = CY.m.getItem(this.storageKey);
            this.value = "boolean" === typeof YY ? YY : this.defaultValue
          }
          return this.value
        }, this.set = YY => {
          this.value = YY, CY.m.setItem(this.storageKey, YY);
          for (const rY of this.listeners) rY(YY)
        }
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
    }
    const xI = new GI("codeEditorLightMode", !1),
      nI = new GI("codeEditorAiHints", !0);

    function PI(YY) {
      const [rY, DY] = (0, AY.useState)(YY.get);
      return (0, AY.useEffect)((() => {
        const rY = YY.subscribe(DY);
        return DY(YY.get()), rY
      }), [YY]), [rY, YY.set]
    }
    var UI = DY(36293),
      LI = DY(36300),
      tI = DY(36308);
    const YR = (0, AY.lazy)((() => Promise.all([DY.e(289), DY.e(285), DY.e(288), DY.e(284), DY.e(81), DY.e(287), DY.e(286), DY.e(283)]).then((() => DY(40378))))),
      rR = (0, AY.lazy)((() => Promise.all([DY.e(76), DY.e(79), DY.e(80), DY.e(78), DY.e(291)]).then((() => DY(40536))))),
      DR = (0, AY.lazy)((() => Promise.all([DY.e(289), DY.e(288), DY.e(81), DY.e(79), DY.e(80), DY.e(78), DY.e(287), DY.e(286), DY.e(77), DY.e(88)]).then((() => DY(40539)))));

    function FR(YY) {
      return aY.gameBridge.query("worldCodeAiChunk", YY)
    }

    function AR() {
      return aY.gameBridge.query("worldCodeAiGameState", null)
    }

    function IR(YY) {
      const {
        gsUrl: rY,
        gameNameWithVariation: DY,
        lobbyName: FY
      } = RI();
      return (0, zA.postJsonWithMetricsCookiesAndJsonResponse)(`${rY}/code/get-lobby-code`, HA.Rj["get-lobby-code"].toBuffer({
        gameNameWithVariation: DY,
        lobbyName: FY,
        path: YY
      }), {
        retries: 1
      })
    }
    let RR = !1;
    const OR = [],
      gR = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      aR = (0, AY.memo)((function(YY) {
        var rY, DY;
        let {
          show: FY,
          onOpen: IY,
          onClose: OY,
          isLobbyCode: uY
        } = YY;
        const sY = (0, AY.useRef)(""),
          [QY, WY] = (0, AY.useState)(null),
          EY = (0, AY.useRef)(uY),
          [mY, VY] = (0, AY.useState)({
            message: null,
            type: null
          }),
          [SY, lY] = (0, AY.useState)(""),
          TY = mY.message ? mY : {
            message: SY,
            type: "warning"
          },
          [KY, HY] = (0, AY.useState)(!0),
          [zY, CY] = PI(xI),
          [fY, jY] = PI(nI),
          [hY, dY] = (0, AY.useState)(!1),
          [JY, bY] = (0, AY.useState)(!1),
          XY = (0, AY.useRef)(null),
          qY = (0, AY.useRef)(!1);
        (0, AY.useEffect)((() => {
          var YY;
          JY && qY.current && (qY.current = !1, null === (YY = XY.current) || void 0 === YY || YY.focus())
        }), [JY]);
        const pY = (0, kI.d)(),
          kY = (0, AY.useRef)(null),
          xY = (0, AY.useRef)(null),
          {
            openInGameMenuName: PY,
            openEverythingMenuName: UY
          } = (0, MY.j)(["openInGameMenuName", "openEverythingMenuName"]),
          LY = YY => {
            FY && (kY.current = YY, Nr.current = !0)
          };
        (0, eY.g)("OpenReportMenu", (() => {
          LY("gy")
        })), (0, eY.g)("OpenStoreFromCodeEditor", (() => {
          LY("store")
        })), (0, AY.useEffect)((() => {
          const YY = kY.current;
          null === YY || "gy" === YY && ("makeReport" === PY || "makeDiscordReport" === PY) || "store" === YY && null !== UY || (kY.current = null, null === PY && null === UY ? uY ? (xY.current = rD.current, yY.g.vo("EditLobbyCode", QY)) : yY.g.vo("EditCodeBlock", {
            pos: QY,
            canChangePos: EY.current
          }) : (0, WI.E)())
        }), [PY, UY, uY, QY]), (0, AY.useEffect)((() => {
          if (FY) return () => {
            xY.current = null
          }
        }), [FY]);
        const [tY, Yr] = function() {
          const [YY, rY] = (0, AY.useState)(RR);
          return (0, eY.g)("CodeEditorAiHelperShown", (YY => {
            rY(YY)
          })), [YY, (0, AY.useCallback)((YY => {
            RR = YY, yY.g.vo("CodeEditorAiHelperShown", YY)
          }), [])]
        }(), [rr, Dr] = (0, AY.useState)(null), [Fr, Ar] = (0, AY.useState)([]), [Ir, Rr] = (0, AY.useState)(0), [Or, gr] = (0, AY.useState)(0), [ar, vr] = (0, AY.useState)(""), ur = (0, AY.useRef)(null), [sr, yr] = (0, AY.useState)(uY ? tI.d : null), Qr = uY || null !== QY, or = (0, gY.j)("canEditCode"), Wr = (0, gY.j)("canUseDevCreativeItems"), Er = (0, oI.j)("welcome"), mr = (0, oI.j)("docsOverview"), Vr = mr ? "docsOverview" : "welcome", Sr = null !== mr && void 0 !== mr ? mr : Er, lr = (0, oI.j)("aiHelperOverview"), Tr = lr ? "aiHelperOverview" : "welcome", er = null !== lr && void 0 !== lr ? lr : Er, Nr = (0, AY.useRef)(!1), Br = (0, AY.useRef)(!1), cr = (0, AY.useRef)(null), [Kr, Hr] = (0, AY.useState)(""), [Zr, Cr] = (0, AY.useState)(!1), [fr, jr] = (0, AY.useState)(null), hr = (0, BY.h)("connectedGame"), dr = uY && or && "classic" === hr.gameNameWithVariation && !(0, zr.P)(hr.lobbyName), [Jr, Mr] = (0, AY.useState)(null), [wr, br] = (0, AY.useState)({
          [ZA.e]: ""
        }), [Xr, qr] = (0, AY.useState)({
          assets: {},
          revision: 0
        }), pr = (0, AY.useRef)(Xr), kr = (0, AY.useCallback)((YY => {
          var rY;
          YY.revision < pr.current.revision || (pr.current = YY, qr(YY), lY(YY.startupError ? `Schematics could not load: ${YY.startupError}` : ""), null === (rY = QD.current) || void 0 === rY || rY.onLobbyFilesChanged({
            ...gD.current,
            ...(0, bA.l)(YY.assets)
          }))
        }), []), [Gr, xr] = (0, AY.useState)(ZA.e), [nr, Pr] = (0, AY.useState)(null), [Ur, Lr] = (0, AY.useState)(null), tr = (0, AY.useRef)(!1), YD = (0, AY.useRef)(null), rD = (0, AY.useRef)(Gr);
        rD.current = Gr;
        const DD = (0, AY.useRef)(nr);
        DD.current = nr;
        const FD = nr ? null : fr,
          ID = FD && !FD.engineLocked ? FD.worldCodeEngine : null,
          OD = (0, AY.useRef)(Ur);
        OD.current = Ur;
        const gD = (0, AY.useRef)(wr);
        gD.current = wr;
        const aD = (0, AY.useRef)(null),
          vD = (0, AY.useRef)(null),
          [uD, sD] = (0, AY.useState)(!1),
          iD = (0, LA.m)(),
          yD = (0, AY.useRef)([]),
          QD = (0, AY.useRef)(null),
          oD = (0, AY.useRef)(null),
          WD = (0, AY.useRef)(null);

        function ED(YY) {
          VY(YY), clearTimeout(cr.current), cr.current = setTimeout((() => {
            VY({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const mD = (0, AY.useCallback)((function() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            tr.current && YD.current && (aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.Leave,
              Xr: (0, CA.u)(YD.current),
              Va: !!YY || null
            }), tr.current = !1, YD.current = null), Mr(null)
          }), []),
          VD = (0, AY.useCallback)((YY => {
            const rY = {
              kind: "lobby",
              path: YY
            };
            YD.current = rY, xr(YY), sY.current = "", aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.Join,
              Xr: (0, CA.u)(rY)
            }), tr.current = !0
          }), []),
          SD = (0, AY.useCallback)((YY => {
            var rY;
            const DY = null === (rY = oD.current) || void 0 === rY ? void 0 : rY.collabState;
            return DY && "lobby" === DY.docKey.kind && DY.docKey.path === YY && rD.current === YY ? Promise.resolve({
              doc: DY.doc,
              version: DY.version,
              clientID: DY.clientID,
              docKey: DY.docKey,
              httpConfig: DY.httpConfig
            }) : new Promise(((rY, DY) => {
              const FY = setTimeout((() => {
                  yD.current = yD.current.filter((YY => YY !== AY)), DY(new Error(`Timed out joining ${YY}`))
                }), 15e3),
                AY = DY => {
                  "lobby" === DY.docKey.kind && DY.docKey.path === YY && (clearTimeout(FY), yD.current = yD.current.filter((YY => YY !== AY)), rY(DY))
                };
              yD.current.push(AY), rD.current !== YY ? (mD(!0), VD(YY)) : tr.current || VD(YY)
            }))
          }), [VD, mD]),
          lD = (0, AY.useCallback)((async function(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const FY = Date.now();
            let AY = YY in gD.current;
            for (; AY !== rY;) {
              if (Date.now() - FY > DY) throw new Error(`Timed out waiting for lobby path ${YY} present=${rY}`);
              await (0, ZF.M)(50), AY = YY in gD.current
            }
          }), []),
          TD = (0, AY.useCallback)((YY => {
            const rY = gD.current,
              DY = ZA.e in rY && ZA.i in rY;
            if (!(0, fA.g)(YY) || DY) {
              if (rD.current === YY) {
                var FY;
                const AY = DY && (0, fA.g)(YY) ? YY === ZA.e ? ZA.i : ZA.e : null !== (FY = (0, fA.c)(rY)) && void 0 !== FY ? FY : ZA.e;
                vD.current = {
                  fromPath: YY,
                  toPath: AY
                }, xr(AY)
              }
              aY.gameBridge.send("sendCodeCollab", {
                br: CA.c.DeleteFile,
                Xr: (0, CA.u)({
                  kind: "lobby",
                  path: rD.current
                }),
                Sa: YY
              })
            }
          }), []),
          eD = (0, AY.useCallback)((YY => {
            xY.current = null, Pr(null), Lr(null), !uY || YY === rD.current && tr.current || (mD(!0), VD(YY))
          }), [uY, mD, VD]),
          ND = (0, AY.useCallback)(((YY, rY) => {
            const DY = MA.f[YY],
              FY = DY && rY in DY.files ? rY : "index.ts";
            if (YY !== DD.current || FY !== OD.current) {
              var AY;
              if (YY !== DD.current) null === (AY = QD.current) || void 0 === AY || AY.stopContinuousSync(), mD(!0);
              Pr(YY), Lr(FY)
            }
          }), [mD]),
          BD = (0, AY.useCallback)((YY => {
            var rY;
            const DY = rD.current,
              FY = gD.current[DY],
              AY = tr.current && !DD.current && DY in YY && void 0 !== FY ? {
                ...YY,
                [DY]: FY
              } : YY;
            br(AY);
            const IY = aD.current;
            if (IY && IY in YY) aD.current = null, IY !== rD.current && eD(IY);
            else if (!(rD.current in YY) && tr.current && !DD.current) {
              var RY;
              eD(null !== (RY = (0, fA.c)(YY)) && void 0 !== RY ? RY : ZA.e)
            }
            null === (rY = QD.current) || void 0 === rY || rY.onLobbyFilesChanged({
              ...AY,
              ...(0, bA.l)(pr.current.assets)
            })
          }), [eD]),
          cD = (0, AY.useCallback)((() => IR(rD.current).then((async YY => {
            if (!tr.current || !YY.files) return null;
            BD(YY.files);
            const rY = await OI({
              action: "state"
            });
            return kr(rY), {
              ...YY.files,
              ...(0, bA.l)(rY.assets)
            }
          })).catch((YY => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", YY), ED({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [BD, kr]),
          KD = () => {
            OY()
          };
        (0, AY.useEffect)((() => {
          if (lY(""), !FY || !uY) return;
          let YY = !1;
          return pr.current = {
            assets: {},
            revision: 0
          }, qr(pr.current), OI({
            action: "state"
          }).then((rY => {
            YY || kr(rY)
          })).catch((rY => {
            console.error("Could not load project schematics", rY), YY || lY("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            YY = !0
          }
        }), [FY, uY, kr]);
        const HD = (0, AY.useCallback)((function() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            YD.current && aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.Submit,
              Xr: (0, CA.u)(YD.current),
              ...YY ? {
                nr: "keepOpen"
              } : {}
            })
          }), []),
          zD = (0, AY.useCallback)((() => {
            if (!YD.current || "lobby" !== YD.current.kind) return;
            const YY = Kr.trim();
            (0, jA.v)(YY) ? (aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.ReloadAsVariation,
              Xr: (0, CA.u)(YD.current),
              nr: YY
            }), Cr(!1)) : ED({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Kr]),
          ZD = (0, AY.useCallback)((YY => {
            aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.SetEngine,
              Xr: (0, CA.u)({
                kind: "lobby",
                path: rD.current
              }),
              nr: YY
            })
          }), []),
          CD = (0, AY.useCallback)((YY => {
            if (!DD.current && or && (EY.current || uY)) {
              if (uY) {
                var rY;
                const DY = (0, fA.m)(gD.current, rD.current),
                  FY = Math.min(AD.v, Math.max(0, AD.B - DY)),
                  AY = YY.slice(0, FY);
                return sY.current = AY, br((YY => ({
                  ...YY,
                  [rD.current]: AY
                }))), void(null === (rY = QD.current) || void 0 === rY || rY.onDocTextChanged(rD.current, AY))
              }
              sY.current = YY, vr(YY)
            }
          }), [or, uY]);
        (0, eY.g)("EditLobbyCode", (YY => {
          var rY;
          ZY.featureFlags.canSeePlayerWrittenText && uY && (mD(), WY(YY), sY.current = "", br({
            [ZA.e]: ""
          }), jr(null), xr(ZA.e), Pr(null), Lr(null), aD.current = null, vD.current = null, null === (rY = QD.current) || void 0 === rY || rY.stopContinuousSync(), IY(), VD(ZA.e))
        })), (0, eY.g)("EditCodeBlock", (YY => {
          let {
            pos: rY,
            canChangePos: DY
          } = YY;
          if (ZY.featureFlags.canSeePlayerWrittenText && !uY)
            if (mD(), null !== rY && (rY = [...rY]), WY(rY), EY.current = DY, null !== rY) {
              sY.current = "", vr(""), IY();
              const YY = {
                  kind: "codeBlock",
                  pos: rY
                },
                FY = (0, CA.u)(YY);
              ur.current !== FY && (ur.current = FY, Ar([]), gr(Ir)), yr((0, tI.c)(FY, [rY[0], rY[1], rY[2]], !!DY)), YD.current = YY, aY.gameBridge.send("sendCodeCollab", {
                br: CA.c.Join,
                Xr: (0, CA.u)(YY)
              }), tr.current = !0
            } else FY && OY()
        })), (0, eY.g)("codeCollabRejoin", (YY => {
          const rY = YD.current ? (0, CA.u)(YD.current) : null;
          rY && YY.docKey === rY && (sY.current = YY.doc, uY || vr(YY.doc), Mr((rY => rY ? {
            ...rY,
            doc: YY.doc,
            version: YY.version,
            clientID: (0, JA.b)()
          } : rY)))
        })), (0, eY.g)("codeCollab", (YY => {
          var rY;
          const DY = YD.current ? (0, CA.u)(YD.current) : null;
          if (YY.type === CA.d.LobbyFilesChanged && uY) {
            if ("string" !== typeof YY.files) return void cD();
            try {
              BD(JSON.parse(YY.files))
            } catch (aY) {
              console.error("[CodeCollab] Failed to parse lobby files", aY), cD()
            }
            return
          }
          if (YY.type === CA.d.EngineSettings && uY) return void jr(uI(YY.engineSettings));
          const AY = YY.type === CA.d.Joined ? (0, CA.j)(YY.docKey) : null,
            IY = uY && "lobby" === (null === (rY = YD.current) || void 0 === rY ? void 0 : rY.kind) && (0, fA.g)(YD.current.path) && "lobby" === (null === AY || void 0 === AY ? void 0 : AY.kind) && (0, fA.g)(AY.path);
          if (!DY || YY.docKey === DY || IY)
            if (YY.type !== CA.d.ForceClose) {
              if (FY)
                if (YY.type === CA.d.Joined) {
                  var RY;
                  const vY = JSON.parse(YY.peers),
                    iY = YY.existingCursors ? JSON.parse(YY.existingCursors) : [],
                    oY = (0, JA.b)(),
                    WY = RI(),
                    {
                      gsUrl: EY,
                      gameNameWithVariation: mY,
                      lobbyName: SY
                    } = WY,
                    lY = null !== (RY = (0, CA.j)(YY.docKey)) && void 0 !== RY ? RY : YD.current;
                  lY && (YD.current = lY, "lobby" === lY.kind && (xr(lY.path), rD.current = lY.path));
                  const TY = lY || (uY ? {
                    kind: "lobby",
                    path: rD.current
                  } : {
                    kind: "codeBlock",
                    pos: QY
                  });

                  function eY(rY) {
                    var DY, FY;
                    if (!tr.current) return;
                    const AY = null !== (DY = rY.code) && void 0 !== DY ? DY : "",
                      IY = null !== (FY = rY.collabVersion) && void 0 !== FY ? FY : 0;
                    sY.current = AY, uY || vr(AY), uY && rY.files ? br(rY.files) : uY && br((YY => ({
                      ...YY,
                      [rD.current]: AY
                    })));
                    const RY = {
                      doc: AY,
                      version: IY,
                      clientID: oY,
                      docKey: TY,
                      peers: vY,
                      editorCount: YY.editorCount,
                      existingCursors: iY,
                      httpConfig: WY
                    };
                    if (Mr(RY), "lobby" === TY.kind) {
                      var OY;
                      const YY = {
                        doc: AY,
                        version: IY,
                        clientID: oY,
                        docKey: TY,
                        httpConfig: WY
                      };
                      for (const rY of [...yD.current]) rY(YY);
                      null === (OY = QD.current) || void 0 === OY || OY.startWhenReady()
                    }
                    rY.canSeeCode ? (clearTimeout(cr.current), VY({
                      message: null,
                      type: null
                    })) : function(YY) {
                      clearTimeout(cr.current), VY(YY)
                    }(gR);
                    const gY = xY.current;
                    xY.current = null, uY && gY && rY.files && gY in rY.files && gY !== rD.current && eD(gY)
                  }
                  uY ? IR(rD.current).then(eY).catch((YY => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", YY), mD()
                  })) : (0, zA.postJsonWithMetricsCookiesAndJsonResponse)(`${EY}/code/get-code-block`, HA.Rj["get-code-block"].toBuffer({
                    gameNameWithVariation: mY,
                    lobbyName: SY,
                    pos: QY
                  }), {
                    retries: 1
                  }).then(eY).catch((YY => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", YY), mD()
                  }))
                } else if (YY.type === CA.d.Presence) {
                if (!DY) return;
                const NY = JSON.parse(YY.peers);
                Mr((rY => rY ? {
                  ...rY,
                  peers: NY,
                  editorCount: YY.editorCount
                } : rY))
              }
            } else {
              var gY;
              if (!DY) return;
              FY && uY && "keptOpen" === YY.updates && yY.g.vo("CodeEditorKeepEdits");
              const BY = YD.current;
              tr.current = !1, YD.current = null, Mr(null);
              if (!uY || "close" === YY.updates) return (0, LI.h)(), void(FY && OY());
              if (!FY) return;
              const cY = gD.current,
                KY = vD.current;
              vD.current = null;
              const HY = "lobby" === (null === BY || void 0 === BY ? void 0 : BY.kind) && BY.path === (null === KY || void 0 === KY ? void 0 : KY.fromPath),
                zY = KY && (HY || KY.toPath in cY || (0, fA.g)(KY.toPath)) ? KY.toPath : rD.current in cY ? rD.current : null !== (gY = (0, fA.c)(cY)) && void 0 !== gY ? gY : ZA.e;
              VD(zY)
            }
        })), (0, eY.g)("refetchCode", (() => {
          ZY.featureFlags.canSeePlayerWrittenText && FY && tr.current && (or || (mD(), uY ? yY.g.vo("EditLobbyCode", QY) : yY.g.vo("EditCodeBlock", {
            pos: QY,
            canChangePos: EY.current
          })))
        }));
        const fD = (0, AY.useCallback)((() => {
            FY && (dY(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [FY]),
          jD = (0, AY.useCallback)((() => {
            dY(!1)
          }), []);
        (0, AY.useEffect)((() => {
          FY && or && ("docsButton" === Sr && hY ? (0, WI.d)("docsButton") : Sr && WI.g.includes(Sr) && !hY && (dY(!0), Yr(!1)))
        }), [FY, or, Sr, hY, Yr]);
        const hD = (0, AY.useCallback)((() => {
          Yr(!1)
        }), [Yr]);
        (0, AY.useEffect)((() => {
          FY && or && Qr && ("aiHelperButton" === er && tY ? (0, WI.d)("aiHelperButton") : er && WI.b.includes(er) && !tY && (Yr(!0), dY(!1)))
        }), [FY, or, Qr, er, tY, Yr]), (0, AY.useEffect)((() => {
          if (!FY || !or) return;
          const YY = uY ? "worldCode" : "codeBlock";
          return (0, WI.G)(YY, !0), () => {
            (0, WI.G)(YY, !1)
          }
        }), [FY, or, uY]), (0, AY.useEffect)((() => {
          if (FY) return () => {
            Nr.current ? Nr.current = !1 : (0, WI.E)()
          }
        }), [FY]), (0, AY.useEffect)((() => {
          (0, WI.H)("exportButton", !!Wr)
        }), [Wr]);
        const {
          t: dD
        } = (0, nY.C)(), JD = !tY && Ir > Or, MD = JD ? iY.D : iY.u, wD = (0, AY.useCallback)(((YY, rY) => {
          yY.g.vo("CodeEditorGoToLine", {
            path: YY,
            line: rY
          }), eD(YY)
        }), [eD]), bD = (0, AY.useCallback)((YY => {
          WD.current = YY
        }), []), XD = function(YY, rY) {
          const [DY, FY] = (0, AY.useState)(null);
          return (0, AY.useEffect)((() => {
            if (!rY) return void FY(null);
            let DY = !1;
            return UA(YY).then((YY => {
              DY || FY(YY)
            }), (YY => {
              console.error("[CodeEditor] could not collect the imported plugins", YY), DY || FY(null)
            })), () => {
              DY = !0
            }
          }), [YY, rY]), DY
        }(wr, FY);
        (0, AY.useEffect)((() => {
          XD && nr && !XD.includes(nr) && (Pr(null), Lr(null), uY && !tr.current && VD(rD.current))
        }), [nr, XD, uY, VD]), oD.current = {
          collabState: Jr,
          ensureJoinedPath: SD,
          waitForLobbyPath: lD,
          pullLobbyFiles: cD,
          t: dD,
          canEditCode: !!or
        }, QD.current || (QD.current = new AI({
          getLobbyFiles: () => ({
            ...gD.current,
            ...(0, bA.l)(pr.current.assets)
          }),
          deleteSchematic: async YY => {
            const rY = await OI({
              action: "remove",
              path: YY,
              expectedRevision: pr.current.revision
            });
            kr(rY)
          },
          getActivePath: () => rD.current,
          getCollabSnapshot: () => {
            var YY;
            if (DD.current) return null;
            const rY = null === (YY = oD.current) || void 0 === YY ? void 0 : YY.collabState;
            return rY ? {
              doc: rY.doc,
              version: rY.version,
              clientID: rY.clientID,
              docKey: rY.docKey,
              httpConfig: rY.httpConfig
            } : null
          },
          replaceActiveDoc: (YY, rY) => {
            var DY, FY;
            return null !== (DY = null === (FY = WD.current) || void 0 === FY ? void 0 : FY.call(WD, YY, rY)) && void 0 !== DY && DY
          },
          ensureJoined: YY => oD.current.ensureJoinedPath(YY),
          createFile: (YY, rY) => {
            !1 !== (null === rY || void 0 === rY ? void 0 : rY.focus) && (aD.current = YY), aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.CreateFile,
              Xr: (0, CA.u)({
                kind: "lobby",
                path: rD.current
              }),
              Sa: YY
            })
          },
          renameFile: (YY, rY) => {
            const DY = (0, CA.u)({
              kind: "lobby",
              path: rD.current
            });
            rD.current === YY && (vD.current = {
              fromPath: YY,
              toPath: rY
            }, xr(rY)), aY.gameBridge.send("sendCodeCollab", {
              br: CA.c.RenameFile,
              Xr: DY,
              Sa: YY,
              la: rY
            })
          },
          deleteFile: YY => {
            TD(YY)
          },
          waitForLobbyPath: (YY, rY, DY) => oD.current.waitForLobbyPath(YY, rY, DY),
          pullLobbyFiles: () => oD.current.pullLobbyFiles(),
          setMessage: (YY, rY) => {
            ED({
              message: YY,
              type: rY
            })
          },
          onUnlinked: () => {
            sD(!1)
          },
          t: YY => oD.current.t(YY),
          canEditCode: () => oD.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: YY,
              lobbyName: rY
            } = aY.gameBridge.latest("connectedGame");
            return (0, LA.e)(YY, rY)
          }
        }));
        const qD = (0, AY.useCallback)((async YY => {
            const rY = QD.current;
            if (!rY) return !1;
            try {
              return await rY.writeLobbyFiles(YY)
            } catch (DY) {
              return console.error("World Code AI: couldn't write the change", DY), !1
            }
          }), []),
          pD = (0, AY.useCallback)((async YY => {
            var rY, DY;
            const FY = null === (rY = YY.find((YY => YY.path === UI.b))) || void 0 === rY ? void 0 : rY.text,
              AY = YD.current;
            return void 0 !== FY && "codeBlock" === (null === AY || void 0 === AY ? void 0 : AY.kind) && (!(null === (DY = WD.current) || void 0 === DY || !DY.call(WD, (0, CA.u)(AY), FY)) && (sY.current = FY, vr(FY), !0))
          }), []),
          kD = (0, AY.useCallback)((async () => {
            try {
              var YY, rY;
              const DY = await IR(ZA.e);
              return !1 === DY.canSeeCode ? null : null !== (YY = DY.files) && void 0 !== YY ? YY : {
                [ZA.e]: null !== (rY = DY.code) && void 0 !== rY ? rY : ""
              }
            } catch (DY) {
              return console.error("World Code AI: couldn't read World Code for a code block", DY), null
            }
          }), []),
          GD = (0, AY.useMemo)((() => ({
            [UI.b]: ar
          })), [ar]),
          xD = (0, AY.useCallback)(((YY, rY) => {
            yY.g.vo("CodeEditorGoToLine", {
              path: UI.b,
              line: rY
            })
          }), []);
        (0, AY.useEffect)((() => {
          tY && FY && gr(Ir)
        }), [tY, FY, Ir]);
        const nD = (0, AY.useCallback)((() => {
            var YY, rY;
            HD();
            const DY = (0, ZY.isTouchscreen)() ? "open World Code again" : `press ${null!==(YY=null===(rY=RD.u.OpenCodeEditor)||void 0===rY?void 0:rY[0])&&void 0!==YY?YY:"F8"}`,
              FY = uY ? `\ud83e\udd16 Try out your change, then ${DY} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            yY.g.vo("chat", {
              content: [{
                str: FY,
                style: {
                  color: NY.K.cyanUiText
                }
              }]
            })
          }), [HD, uY]),
          PD = (0, AY.useCallback)((YY => {
            const rY = QY,
              DY = EY.current;
            uY || !rY || aY.gameBridge.lookup("codeBlockClickable", rY) ? (0, LI.l)(YY, {
              submit: () => {
                HD(), yY.g.vo("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: NY.K.cyanUiText
                    }
                  }]
                }), !uY && rY && setTimeout((() => {
                  aY.gameBridge.send("clickCodeBlock", rY)
                }), 1e3)
              },
              reopen: () => {
                (0, wY.p)() || (uY ? yY.g.vo("EditLobbyCode", rY) : yY.g.vo("EditCodeBlock", {
                  pos: rY,
                  canChangePos: DY
                }))
              }
            }) : nD()
          }), [HD, uY, QY, nD]),
          UD = (0, AY.useCallback)((() => {
            Yr(!1)
          }), [Yr]),
          LD = (0, AY.useRef)(KD);
        LD.current = KD;
        const tD = (0, AY.useCallback)((function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            yY.g.vo("WorldCodeAiDraft", {
              text: YY,
              send: rY
            }), LD.current(), yY.g.vo("EditLobbyCode", QY)
          }), [QY]),
          YF = (0, AY.useCallback)((YY => {
            LD.current(), YY.codeBlock ? yY.g.vo("EditCodeBlock", {
              pos: [...YY.pos],
              canChangePos: YY.canChangePos
            }) : yY.g.vo("EditLobbyCode", QY)
          }), [QY]);
        (0, eY.g)("WorldCodeAiDraft", (YY => {
          uY && (Dr(YY), Yr(!0))
        }));
        const rF = !!or && !!Sr && WI.g.includes(Sr);
        (0, AY.useEffect)((() => {
          FY && tY && Qr && !rF && dY(!1)
        }), [FY, tY, Qr, rF]);
        const DF = (0, AY.useCallback)((() => {
            Yr(!1), dY(!1)
          }), [Yr]),
          {
            Mu: FF,
            setWorld: AF,
            toggleWorld: IF
          } = function(YY) {
            let {
              showAi: rY,
              showDocs: DY,
              showChat: FY,
              hideOtherRightPanels: IY
            } = YY;
            const [RY, OY] = (0, AY.useState)("hidden"), gY = (0, AY.useRef)(null), aY = (0, AY.useCallback)((() => {
              gY.current = null, OY((YY => "hidden" === YY ? YY : (0, eI.e)() ? "hidden" : "shown"))
            }), []);
            (0, AY.useEffect)((() => {
              (rY || DY) && aY()
            }), [rY, DY, aY]), (0, AY.useEffect)((() => {
              FY && aY()
            }), [FY, aY]);
            const vY = "hidden" !== RY && (0, eI.e)();
            (0, AY.useLayoutEffect)((() => {
              if (vY) {
                const YY = document.activeElement;
                YY instanceof HTMLElement && YY.closest(".cm-content") && (gY.current = YY, YY.blur())
              } else {
                var YY;
                null === (YY = gY.current) || void 0 === YY || YY.focus(), gY.current = null
              }
            }), [vY]);
            const uY = (0, AY.useCallback)((() => {
              "hidden" === RY ? (OY("shown"), (0, eI.e)() && IY()) : OY("hidden")
            }), [RY, IY]);
            return {
              Mu: RY,
              setWorld: OY,
              toggleWorld: uY
            }
          }({
            showAi: tY,
            showDocs: hY,
            showChat: JY,
            hideOtherRightPanels: DF
          }),
          RF = tY && null !== sr && Qr,
          OF = (0, AY.useCallback)((() => {
            Dr(null)
          }), []),
          [gF, aF] = (0, AY.useState)(null);
        (0, eY.g)("WorldCodeAiSelection", (YY => {
          FY && (aF(YY), Yr(!0), dY(!1))
        }));
        const vF = (0, AY.useCallback)((() => {
          aF(null)
        }), []);
        (0, eY.g)("chat", (YY => {
          let {
            content: rY
          } = YY;
          if (!uY && null === ur.current) return;
          const DY = Array.isArray(rY) ? rY : [rY],
            FY = DY.some((YY => {
              var rY;
              return (null === YY || void 0 === YY || null === (rY = YY.style) || void 0 === rY ? void 0 : rY.color) === NY.K.redUiText
            })),
            AY = DY.map((YY => {
              var rY;
              const DY = null !== (rY = null === YY || void 0 === YY ? void 0 : YY.str) && void 0 !== rY ? rY : YY;
              return "string" === typeof DY ? DY : ""
            })).join("");
          FY && /world code|error/i.test(AY) && (Ar((YY => [...YY, AY].slice(-10))), Rr((YY => YY + 1)), (0, LI.e)(AY))
        })), (0, AY.useEffect)((() => {
          if (!FY || !uY || !iD) return;
          let YY = !1;
          return (async (rY, DY) => {
            const FY = await (null === (rY = QD.current) || void 0 === rY ? void 0 : rY.tryRestoreHandle());
            !YY && FY && (sD(!0), null === (DY = QD.current) || void 0 === DY || DY.startWhenReady())
          })(), () => {
            YY = !0
          }
        }), [FY, uY, iD]), (0, AY.useEffect)((() => {
          var YY;
          FY || (null === (YY = QD.current) || void 0 === YY || YY.stopContinuousSync(), mD(!1), Br.current && (Br.current = !1, aY.gameBridge.send("sendChatMessage", {
            vv: "//export",
            channelName: null
          })))
        }), [FY, mD]);
        const uF = (0, AY.useCallback)((async () => {
            if (iD && QD.current) try {
              if (!await QD.current.linkFolder()) return;
              sD(!0), await QD.current.startWhenReady()
            } catch (YY) {
              console.error("[WorldCodeDirectorySync] Link failed", YY), ED({
                message: dD("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [iD, dD]),
          sF = (0, AY.useCallback)((async () => {
            QD.current && await QD.current.unlinkFolder()
          }), []),
          iF = (0, AY.useCallback)((() => {
            iD ? uD ? sF() : uF() : aA.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [iD, uD, uF, sF]),
          yF = uY && "hidden" !== FF;
        return (0, vY.jsxs)(RY.e, {
          className: ir()("CodeEditorBg", {
            CodeEditorLight: zY,
            WorldShown: "hidden" !== FF
          }),
          close: KD,
          escDoesExit: !0,
          show: FY,
          togglePointerLock: !1,
          globallyUniqueKey: uY ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, vY.jsx)(oI.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: dD("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!or && !uY
          }), (0, vY.jsx)(oI.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsx)("p", {
                children: dD("codeEditor:tutorialWorldCodeWelcome")
              }), (0, vY.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, vY.jsx)("li", {
                  children: dD("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, vY.jsx)("li", {
                  children: dD("codeEditor:tutorialWorldCodeUseReact")
                }), (0, vY.jsx)("li", {
                  children: dD("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!or && uY
          }), (0, vY.jsx)("div", {
            className: "CodeEditorTitle",
            children: uY ? "World Code" : "Code Block"
          }), (0, vY.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, vY.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, vY.jsx)(GY.g, {
                tooltipInner: dD(Wr ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: Wr ? void 0 : 0,
                hideTooltip: "exportButton" === Er,
                children: (0, vY.jsx)(oI.f, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: dD("codeEditor:tutorialExport"),
                  enabled: !!or,
                  children: (0, vY.jsx)(iY.n, {
                    className: "CodeEditorButton",
                    disabled: !Wr,
                    onClick: () => {
                      "exportButton" === Er && ((0, WI.d)("exportButton"), Nr.current = !0), Br.current = !0, KD()
                    },
                    padDestructive: !0,
                    children: dD("codeEditor:exportWorld")
                  })
                })
              }), (0, vY.jsx)(pI, {
                Mu: FF,
                setWorld: AF,
                toggleWorld: IF,
                aiShown: RF,
                closeAi: UD
              })]
            }), (0, vY.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [or && (0, vY.jsx)(GY.g, {
                tooltipInner: dD("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Er,
                children: (0, vY.jsx)(oI.f, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: dD("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, vY.jsx)(iY.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: dD("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, WI.d)("helpButton"), aA.NotificationProvider.showCustomPopup({
                        body: YY => (0, vY.jsx)(EI, {
                          close: YY
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, vY.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, vY.jsx)(oY.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, vY.jsx)(GY.g, {
                tooltipInner: dD("codeEditor:closeTooltip"),
                children: (0, vY.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    KD()
                  },
                  children: (0, vY.jsx)(iY.k, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, vY.jsx)(dA, {
            peers: null !== (rY = null === Jr || void 0 === Jr ? void 0 : Jr.peers) && void 0 !== rY ? rY : []
          }), (0, vY.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [JY && pY && (0, vY.jsx)(eI.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              children: (0, vY.jsx)(TI, {
                inputRef: XY,
                close: () => {
                  bY(!1)
                }
              })
            }), uY && (0, vY.jsx)(pA, {
              schematics: Xr.assets,
              onManageSchematic: YY => {
                or && aA.NotificationProvider.showCustomPopup({
                  body: rY => (0, vY.jsx)(vI, {
                    initialPath: YY,
                    onChanged: kr,
                    onClose: rY
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: wr,
              activePath: Gr,
              canEdit: !!or,
              directoryLinked: uD,
              pluginNames: null !== XD && void 0 !== XD ? XD : OR,
              activePluginName: nr,
              activePluginFile: Ur,
              onSelect: eD,
              onSelectPlugin: ND,
              onToggleDirectorySync: iF,
              onCreate: YY => {
                aD.current = YY, aY.gameBridge.send("sendCodeCollab", {
                  br: CA.c.CreateFile,
                  Xr: (0, CA.u)({
                    kind: "lobby",
                    path: rD.current
                  }),
                  Sa: YY
                })
              },
              onRename: (YY, rY) => {
                rD.current === YY && (vD.current = {
                  fromPath: YY,
                  toPath: rY
                }, xr(rY)), aY.gameBridge.send("sendCodeCollab", {
                  br: CA.c.RenameFile,
                  Xr: (0, CA.u)({
                    kind: "lobby",
                    path: rD.current
                  }),
                  Sa: YY,
                  la: rY
                })
              },
              onRenameFolder: (YY, rY) => {
                const [DY] = (0, fA.l)([rD.current], YY, rY);
                DY && (vD.current = {
                  fromPath: DY[0],
                  toPath: DY[1]
                }, xr(DY[1])), aY.gameBridge.send("sendCodeCollab", {
                  br: CA.c.RenameFolder,
                  Xr: (0, CA.u)({
                    kind: "lobby",
                    path: rD.current
                  }),
                  Sa: YY,
                  la: rY
                })
              },
              onDelete: TD
            }), (0, vY.jsx)("div", {
              className: ir()("CodeEditorMessage", {
                CodeEditorMessageHidden: !TY.message,
                CodeEditorMessageSuccess: "success" === TY.type
              }),
              children: TY.message && (0, vY.jsx)("div", {
                className: "CodeEditorMessageText",
                children: TY.message
              })
            }), (0, vY.jsx)(AY.Suspense, {
              fallback: (0, vY.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, vY.jsx)(cY.c, {})
              }),
              children: (0, vY.jsx)(YR, {
                isLobbyCode: uY,
                code: Jr ? Jr.doc : sY.current,
                files: uY ? wr : void 0,
                activePath: uY ? Gr : void 0,
                pluginName: nr,
                pluginFile: Ur,
                pluginSource: nr && Ur ? null === (DY = MA.f[nr]) || void 0 === DY ? void 0 : DY.files[Ur] : void 0,
                onChange: CD,
                canEditCode: or,
                setTemporaryMessage: ED,
                close: KD,
                showTooltips: KY,
                lightMode: zY,
                collabState: Jr,
                setActiveDocReplacer: bD,
                showAiHints: Qr && fY,
                canAiChangeCode: !!or && (uY || !!EY.current),
                onRemoteDocChange: YY => {
                  var rY;
                  (sY.current = YY, uY) ? (br((rY => ({
                    ...rY,
                    [rD.current]: YY
                  }))), null === (rY = QD.current) || void 0 === rY || rY.onDocTextChanged(rD.current, YY)) : vr(YY)
                }
              })
            }), (hY || RF || "hidden" !== FF) && (0, vY.jsxs)(NI, {
              Mu: FF,
              worldPanel: (0, vY.jsx)(XI, {
                shown: FF,
                setShown: AF,
                canInsertCode: !!or && !nr
              }),
              aiShown: RF,
              defaultWidth: hY ? "40%" : "max(18rem, 36%)",
              children: [hY && (0, vY.jsx)(AY.Suspense, {
                fallback: (0, vY.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, vY.jsx)(cY.c, {})
                }),
                children: (0, vY.jsx)(rR, {
                  popOutDocs: fD,
                  hideDocs: jD,
                  tutorialEnabled: !!or
                })
              }), RF && (0, vY.jsx)(AY.Suspense, {
                fallback: (0, vY.jsx)("div", {
                  className: "CodeEditorPanelLoading",
                  children: (0, vY.jsx)(cY.c, {})
                }),
                children: (0, vY.jsx)(DR, {
                  target: sr,
                  chatKey: `${hr.gameNameWithVariation}/${hr.lobbyName}/aiHelper`,
                  historyKey: `${hr.gameNameWithVariation}/${hr.lobbyName}/${sr.key}`,
                  files: sr.codeBlock ? GD : wr,
                  activePath: sr.codeBlock ? UI.b : Gr,
                  canEdit: !!or && (sr.codeBlock ? !!EY.current : !nr),
                  isLoaded: null !== Jr,
                  errors: Fr,
                  errorCount: Ir,
                  applyFiles: sr.codeBlock ? pD : qD,
                  submit: nD,
                  testRun: PD,
                  close: UD,
                  goToLine: sr.codeBlock ? xD : wD,
                  openWorldCode: sr.codeBlock ? tD : void 0,
                  readWorldCode: sr.codeBlock ? kD : void 0,
                  viewChunk: FR,
                  viewGameState: AR,
                  openTarget: or ? YF : void 0,
                  draft: rr,
                  onDraftUsed: OF,
                  selection: gF,
                  onSelectionUsed: vF
                }, sr.key)
              })]
            })]
          }), (null === FD || void 0 === FD ? void 0 : FD.fallback) && (0, vY.jsx)(sI, {
            fallback: FD.fallback,
            onGoToLine: wD
          }), (0, vY.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, vY.jsx)(GY.g, {
              tooltipInner: dD(zY ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, vY.jsx)(iY.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: dD(zY ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  CY(!zY)
                },
                children: (0, vY.jsx)(oY.e, {
                  name: zY ? "moon" : "sun-bright"
                })
              })
            }), (0, vY.jsx)(GY.g, {
              tooltipInner: dD(yF ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.n, {
                className: "CodeEditorButton",
                onClick: () => {
                  HD(yF)
                },
                padDefaultFocus: !0,
                children: dD("codeEditor:submitCode")
              })
            }), (0, vY.jsx)(GY.g, {
              tooltipInner: dD(hY ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Sr || "hideDocsButton" === Sr,
              children: (0, vY.jsx)(oI.f, {
                tutorial: Vr,
                step: hY ? "hideDocsButton" : "docsButton",
                text: dD(hY ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!or,
                placement: "top",
                waitForClick: !0,
                onPrevious: hY && "welcome" === Vr ? jD : void 0,
                children: (0, vY.jsx)(iY.u, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, WI.d)(hY ? "hideDocsButton" : "docsButton"), dY(!hY), Yr(!1)
                  },
                  children: dD(hY ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Qr && (0, vY.jsx)(oI.f, {
              tutorial: Tr,
              step: tY ? "hideAiHelperButton" : "aiHelperButton",
              text: dD(tY ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Tr ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!or,
              placement: "top",
              waitForClick: !0,
              onPrevious: tY && "welcome" === Tr ? hD : void 0,
              children: (0, vY.jsx)(MD, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, WI.d)(tY ? "hideAiHelperButton" : "aiHelperButton"), Yr(!tY), dY(!1)
                },
                children: tY ? "Hide AI Helper" : JD ? "Fix error with AI" : "AI Helper"
              })
            }), pY && (0, vY.jsx)(GY.g, {
              tooltipInner: dD(JY ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.u, {
                className: "CodeEditorButton",
                onClick: () => {
                  qY.current = !JY, bY(!JY)
                },
                children: dD(JY ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, vY.jsx)(GY.g, {
              tooltipInner: dD("hidden" === FF ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.u, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: IF,
                children: dD("hidden" === FF ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, vY.jsx)(GY.g, {
              tooltipInner: dD("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  yY.g.vo("FormatCode")
                },
                children: dD("codeEditor:formatCode")
              })
            }), (0, vY.jsx)(GY.g, {
              tooltipInner: dD("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(sY.current).then((() => {
                    ED({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    ED({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: dD("codeEditor:copyCode")
              })
            }), (0, vY.jsx)(GY.g, {
              tooltipInner: dD(KY ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  HY(!KY)
                },
                children: dD(KY ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !uY && (0, vY.jsx)(GY.g, {
              tooltipInner: dD("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Er,
              children: (0, vY.jsx)(oI.f, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: dD("codeEditor:tutorialWorldCodeButton"),
                enabled: !!or,
                placement: "top",
                waitForClick: !0,
                children: (0, vY.jsx)(iY.u, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Er && ((0, WI.d)("worldCodeButton"), Nr.current = !0), KD(), yY.g.vo("EditLobbyCode", QY)
                  },
                  children: dD("codeEditor:worldCode")
                })
              })
            }), (dr || ID || Qr) && (0, vY.jsx)(GY.g, {
              tooltipInner: dD("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, vY.jsx)(iY.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Cr(!0)
                },
                children: (0, vY.jsx)(oY.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), Zr && (0, vY.jsx)(uA.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Cr(!1)
            },
            body: (0, vY.jsx)(QI, {
              engine: ID,
              onSetEngine: ZD,
              aiHints: Qr ? {
                shown: fY,
                setShown: jY
              } : null,
              variation: dr ? {
                name: Kr,
                setName: Hr,
                reload: zD
              } : null
            })
          })]
        })
      })),
      vR = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function uR(YY) {
      return "inventory" === YY
    }
    const sR = (0, AY.memo)((function() {
      const {
        openEverythingMenuName: YY,
        openInGameMenuName: rY
      } = (0, MY.j)(["openEverythingMenuName", "openInGameMenuName"]), DY = (0, BY.h)("fullInventory"), IY = (0, AY.useRef)(null), RY = (0, Gr.m)();
      (0, eY.g)("toggleMenu", (YY => {
        var rY;
        if (!RY.shown) return;
        const DY = MY.b.get("openInGameMenuName");
        let FY = YY.split("|")[0];
        const AY = null !== (rY = YY.split("|")[1]) && void 0 !== rY ? rY : null;
        ("closeCurrentMenu" === AY && DY || FY === DY) && (IY.current = null, FY = null);
        const OY = "closeCurrentMenu" === AY ? null : AY;
        IY.current !== OY && (IY.current = OY), null !== FY && (0, EA.k)(EA.d, {
          keepsMovement: uR(FY)
        }), MY.b.set({
          openInGameMenuName: FY
        })
      }));
      const OY = (0, AY.useCallback)((YY => () => {
          yY.g.vo("toggleMenu", YY)
        }), []),
        gY = (0, AY.useRef)({
          cantCrouchIfNotFullscreen: OY("cantCrouchIfNotFullscreen"),
          makeReport: OY("makeReport"),
          makeDiscordReport: OY("makeDiscordReport"),
          editBook: OY("editBook"),
          editNameTag: OY("editNameTag"),
          inventory: OY("inventory"),
          inviteLink: OY("inviteLink"),
          writeOnBoard: OY("writeOnBoard"),
          codeEditor: OY("codeEditor"),
          lobbyCodeEditor: OY("lobbyCodeEditor"),
          customLobbyBlockEditor: OY("customLobbyBlockEditor"),
          ironChestPasskeyInput: OY("ironChestPasskeyInput"),
          petUi: OY("petUi")
        }),
        aY = (0, AY.useCallback)((() => {
          MY.b.set({
            openInGameMenuName: null
          })
        }), []),
        uY = (0, AY.useRef)(null);
      return (0, AY.useEffect)((() => {
        if (rY) {
          var YY;
          (0, EA.k)(EA.d, {
            keepsMovement: uR(rY)
          }), uY.current = vR.has(rY) ? null !== (YY = MY.b.get("openEverythingMenuName")) && void 0 !== YY ? YY : uY.current : null, MY.b.set({
            openEverythingMenuName: null
          })
        } else {
          const YY = uY.current;
          uY.current = null, null !== YY && null === MY.b.get("openEverythingMenuName") && MY.b.set({
            openEverythingMenuName: YY
          }), IY.current = null, (0, EA.j)(EA.d)
        }
      }), [rY]), (0, AY.useEffect)((() => {
        null !== YY && aY()
      }), [YY, aY]), (0, vY.jsxs)(vY.Fragment, {
        children: [(0, vY.jsx)(FY.g, {
          show: "clientGame" === rY
        }), (0, vY.jsx)(RA, {
          show: "cantCrouchIfNotFullscreen" === rY,
          onOpen: gY.current.cantCrouchIfNotFullscreen,
          onClose: aY
        }), (0, vY.jsx)(oA, {
          show: "makeReport" === rY,
          onOpen: gY.current.makeReport,
          onClose: aY
        }), (0, vY.jsx)(WA, {
          show: "makeDiscordReport" === rY,
          onOpen: gY.current.makeDiscordReport,
          onClose: aY
        }), (0, vY.jsx)(WD, {
          show: "editBook" === rY,
          onOpen: gY.current.editBook,
          onClose: aY
        }), (0, vY.jsx)(QD, {
          show: "editNameTag" === rY,
          onOpen: gY.current.editNameTag,
          onClose: aY
        }), DY && (0, vY.jsx)(FA, {
          show: "inventory" === rY,
          onOpen: gY.current.inventory,
          onClose: aY,
          variation: IY.current
        }), (0, vY.jsx)(xr, {
          show: "inviteLink" === rY,
          onClose: aY,
          option: IY.current
        }), (0, vY.jsx)(jY, {
          show: "retentionFeatures" === rY,
          onClose: aY
        }), (0, vY.jsx)(yD, {
          show: "writeOnBoard" === rY,
          onOpen: gY.current.writeOnBoard,
          onClose: aY
        }), (0, vY.jsx)(aR, {
          show: "lobbyCodeEditor" === rY,
          onOpen: gY.current.lobbyCodeEditor,
          onClose: aY,
          isLobbyCode: !0
        }), (0, vY.jsx)(aR, {
          show: "codeEditor" === rY,
          onOpen: gY.current.codeEditor,
          onClose: aY,
          isLobbyCode: !1
        }), (0, vY.jsx)(VA, {
          show: "customLobbyBlockEditor" === rY,
          onOpen: gY.current.customLobbyBlockEditor,
          onClose: aY
        }), (0, vY.jsx)(hD, {
          show: "ironChestPasskeyInput" === rY,
          onOpen: gY.current.ironChestPasskeyInput,
          onClose: aY
        }), (0, vY.jsx)(BA, {
          togglePointerLock: !0,
          show: "petUi" === rY,
          onOpen: gY.current.petUi,
          onClose: aY
        })]
      })
    }))
  },
  35935: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => DR
    });
    DY(35941);
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(3350),
      OY = DY(1430),
      gY = DY(1778),
      aY = DY(1125);

    function vY() {
      const YY = 2e3,
        [rY, DY] = (0, FY.useState)(null),
        [AY, vY] = (0, FY.useState)(null),
        uY = (0, FY.useRef)(null);
      (0, OY.g)("showBottomMessage", (rY => {
        let {
          message: DY,
          timeoutLength: FY = YY,
          type: AY
        } = rY;
        vY({
          message: DY,
          type: AY
        }), clearTimeout(uY.current), uY.current = setTimeout((() => {
          vY(null)
        }), FY)
      })), (0, OY.g)("showPermanentBottomMessage", (YY => {
        DY(YY)
      })), (0, FY.useEffect)((() => ((0, RY.c)((() => {
        DY(null)
      })), () => {
        clearTimeout(uY.current)
      })), []);
      const sY = AY || rY;
      return sY ? (0, aY.jsx)("div", {
        className: IY()("BottomScreenMessage", sY.type),
        children: (0, aY.jsx)(gY.b, {
          text: sY.message
        })
      }) : null
    }
    var uY = DY(2211),
      sY = DY(1808),
      iY = DY(1488),
      yY = DY(2291);

    function QY() {
      let YY;
      const rY = () => {
          clearTimeout(YY), YY = setTimeout((() => {
            sY.gameBridge.latest("connectedGame").replay || (sY.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, iY.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        DY = () => {
          clearTimeout(YY)
        };
      return window.addEventListener("focus", DY), window.addEventListener("blur", rY), () => {
        window.removeEventListener("blur", rY), window.removeEventListener("focus", DY), clearTimeout(YY)
      }
    }
    var oY = DY(1152),
      WY = DY(1143),
      EY = DY(332),
      mY = DY(2282),
      VY = DY(25),
      SY = DY(1823),
      lY = DY(40),
      TY = DY(1834),
      eY = DY(19),
      NY = DY(1842),
      BY = DY(1384),
      cY = DY(8240),
      KY = DY(1868),
      HY = DY(1211);
    const zY = (0, FY.memo)((function() {
      const {
        isTouchScreen: YY,
        loadingOverlayVisible: rY,
        openInGameMenuName: DY,
        openEverythingMenuName: AY
      } = (0, eY.j)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), RY = (0, BY.p)();
      (0, WY.c)();
      const OY = (0, mY.j)("showBasicMovementControls"),
        [gY, vY] = (0, FY.useState)("movement"),
        uY = "movement" === gY,
        sY = RY && !1 !== OY;
      (0, FY.useEffect)((() => {
        "padActions" !== gY || sY || vY("done")
      }), [gY, sY]);
      const iY = rY || null !== DY || null !== AY,
        yY = (0, FY.useRef)({
          step: gY,
          ms: 0
        });
      return (0, FY.useEffect)((() => {
        if (iY || "done" === gY) return;
        yY.current.step !== gY && (yY.current = {
          step: gY,
          ms: 0
        });
        const YY = yY.current,
          rY = performance.now(),
          DY = setTimeout((() => {
            vY("movement" === gY && (0, BY.f)() ? "padActions" : "done")
          }), 7e3 - YY.ms);
        return () => {
          clearTimeout(DY), YY.ms += performance.now() - rY
        }
      }), [iY, gY]), lY.m.getItem(EY.Ib) > 2 ? (0, aY.jsx)(jY, {
        showingMovementControls: !1
      }) : (0, aY.jsxs)(aY.Fragment, {
        children: [YY && !RY || !uY || !1 === OY ? null : (0, aY.jsxs)("div", {
          className: IY()("ControlsTutorialDiv", {
            Covered: iY
          }),
          children: [(0, aY.jsx)(ZY, {}), (0, aY.jsx)(fY, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, aY.jsx)(fY, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === gY && sY && (0, aY.jsx)(CY, {
          covered: iY
        }), (0, aY.jsx)(jY, {
          showingMovementControls: "done" !== gY
        })]
      })
    }));

    function ZY() {
      const YY = (0, BY.p)();
      return (0, aY.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, aY.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), YY && (0, aY.jsx)(NY.d, {
          noaAction: "forward"
        }), !YY && (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, aY.jsx)(NY.d, {
              noaAction: "forward"
            })
          }), (0, aY.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, aY.jsx)(NY.d, {
              noaAction: "left"
            }), (0, aY.jsx)(NY.d, {
              noaAction: "backward"
            }), (0, aY.jsx)(NY.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function CY(YY) {
      let {
        covered: rY
      } = YY;
      const {
        t: DY
      } = (0, HY.C)(), FY = (0, mY.j)("useInventory");
      return (0, aY.jsxs)("div", {
        className: IY()("ControlsTutorialDiv", {
          Covered: rY
        }),
        children: [(0, aY.jsx)(fY, {
          header: DY("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, aY.jsx)(fY, {
          header: DY("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== FY && (0, aY.jsx)(fY, {
          header: DY("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, aY.jsx)(fY, {
          header: DY("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function fY(YY) {
      let {
        header: rY,
        noaAction: DY
      } = YY;
      return (0, aY.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, aY.jsx)("div", {
          className: "KeyHeader",
          children: rY
        }), (0, aY.jsx)(NY.d, {
          noaAction: DY
        })]
      })
    }

    function jY(YY) {
      let {
        showingMovementControls: rY
      } = YY;
      const {
        isTouchScreen: DY
      } = (0, eY.j)(["isTouchScreen"]), AY = (0, BY.p)(), IY = (0, KY.b)("OpenShop"), [RY, OY] = (0, FY.useState)(!1), gY = `SeenShopControls|${(0,TY.f)("connectedGame",(YY=>YY.gameNameWithVariation))}`, vY = () => (!(0, BY.f)() || null !== (0, cY.d)("OpenShop")) && !lY.m.getItem(gY) && SY.b.get("shopInfo") && !rY, uY = () => (OY(!0), lY.m.setItem(gY, !0), (0, BY.f)() || VY.g.vo("showShopTouchTutorial"), setTimeout((() => {
        OY(!1)
      }), 7e3));
      (0, FY.useEffect)((() => {
        let YY;
        const rY = VY.g.subscribe("showShopTutorial", (() => {
          vY() && (YY = uY())
        }));
        return () => {
          clearTimeout(YY), VY.g.unsubscribe(rY)
        }
      }), [rY]);
      const sY = (0, FY.useRef)();
      return (0, mY.f)("currencyAmounts", (YY => {
        if (vY()) {
          let DY = !1;
          const FY = SY.b.get("shopInfo");
          for (const AY in FY) {
            for (const IY in FY[AY].items) {
              var rY;
              const RY = FY[AY].items[IY];
              if (void 0 !== RY.currency && YY[RY.currency] && RY.cost <= YY[RY.currency].amount && (null === (rY = RY.hidden) || void 0 === rY || !rY)) {
                DY = !0;
                break
              }
            }
            if (DY) break
          }
          DY && (sY.current = uY())
        }
      })), (0, FY.useEffect)((() => () => {
        clearTimeout(sY.current)
      }), [rY]), !RY || AY && !IY ? null : (0, aY.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: DY && !AY ? null : (0, aY.jsx)(fY, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var hY = DY(1354),
      dY = DY(1098);
    const JY = (0, FY.memo)((function() {
      return (0, WY.c)(), (0, aY.jsx)(MY, {})
    }));
    class MY extends FY.Component {
      constructor(YY) {
        super(YY), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = VY.g.subscribe("TopRightHelper", (YY => {
          this.showQueue.push(YY), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        VY.g.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(YY, rY) {
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
        let YY, rY, DY, FY, AY, IY = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, YY = "slideIn") : "slideOut" === this.state.currState ? YY = "slideOut" : null === this.currMessage && (IY = !1), this.currMessage) {
          const IY = this.currMessage.color || "rgb(102, 102, 102)";
          rY = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === YY ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, DY = {
            backgroundColor: IY
          }, FY = {
            animation: "2s " + ("slideOut" === YY ? "CloseNotification" : "ExpandNotification")
          }, AY = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === YY ? "textDisappear" : "textAppear")
          }
        }
        return IY ? (0, aY.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...rY
          },
          children: [(0, aY.jsx)("div", {
            className: "LeftSide",
            style: DY,
            children: (0, aY.jsx)(dY.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, aY.jsx)("div", {
            className: "RightSide",
            style: FY,
            children: (0, aY.jsx)("div", {
              className: "HelperText",
              style: AY,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var wY = DY(35944),
      bY = DY(1392);
    const XY = (0, bY.k)((YY => YY.PadSneakChip));

    function qY(YY) {
      const [rY, DY, FY] = function(YY) {
        const rY = parseInt(YY.substring(1), 16),
          DY = (rY >> 16) / 255,
          FY = (rY >> 8 & 255) / 255,
          AY = (255 & rY) / 255,
          IY = Math.max(DY, FY, AY),
          RY = Math.min(DY, FY, AY),
          OY = (IY + RY) / 2,
          gY = IY - RY;
        if (0 === gY) return [0, 0, OY];
        const aY = gY / (1 - Math.abs(2 * OY - 1));
        let vY;
        vY = IY === DY ? (FY - AY) / gY % 6 : IY === FY ? (AY - DY) / gY + 2 : (DY - FY) / gY + 4;
        return [(60 * vY + 360) % 360, aY, OY]
      }(YY), AY = 0 === DY ? 0 : Math.min(.6, DY + .03), IY = FY > .5 ? -1 : 1, RY = pY(FY + .09 * IY);
      return {
        panel: YY,
        slot: kY(rY, AY, RY),
        slotSelected: kY(rY, AY, pY(RY + .2 * IY)),
        slotUnavailable: kY(rY, AY, pY(FY + -.1 * IY))
      }
    }

    function pY(YY) {
      return Math.min(1, Math.max(0, YY))
    }

    function kY(YY, rY, DY) {
      const FY = (1 - Math.abs(2 * DY - 1)) * rY,
        AY = FY * (1 - Math.abs(YY / 60 % 2 - 1)),
        IY = DY - FY / 2;
      let RY;
      return RY = YY < 60 ? [FY, AY, 0] : YY < 120 ? [AY, FY, 0] : YY < 180 ? [0, FY, AY] : YY < 240 ? [0, AY, FY] : YY < 300 ? [AY, 0, FY] : [FY, 0, AY], "#" + RY.map((YY => function(YY) {
        return Math.round(255 * YY).toString(16).padStart(2, "0")
      }(YY + IY))).join("")
    }
    var GY = DY(35965),
      xY = DY(3852),
      nY = DY(2251),
      PY = DY(2256),
      UY = DY(36016),
      LY = DY(4396),
      tY = DY(1445),
      Yr = DY(625);

    function rr(YY, rY, DY, FY) {
      YY.style.display = "";
      const AY = YY.offsetWidth,
        IY = YY.offsetHeight,
        RY = Math.min(Math.max((rY.left + rY.right) / 2 - AY / 2, 8), window.innerWidth - 8 - AY);
      let OY = rY.top - DY - IY;
      const gY = [...FY].sort(((YY, rY) => rY.top - YY.top));
      for (const aY of gY) RY < aY.right && RY + AY > aY.left && OY < aY.bottom && OY + IY > aY.top && (OY = aY.top - 8 - IY);
      return OY < 8 ? (YY.style.display = "none", null) : (YY.style.transform = `translate(${RY-rY.left}px, ${OY-rY.top}px)`, {
        left: RY,
        top: OY,
        right: RY + AY,
        bottom: OY + IY
      })
    }

    function Dr(YY) {
      const rY = [];
      for (const DY of document.querySelectorAll(YY)) {
        const YY = DY.getBoundingClientRect();
        YY.width > 0 && "visible" === getComputedStyle(DY).visibility && rY.push(YY)
      }
      return rY
    }

    function Fr(YY, rY) {
      return YY.clientX >= rY.left - 8 && YY.clientX <= rY.right + 8 && YY.clientY >= rY.top - 8 && YY.clientY <= rY.bottom + 8
    }
    var Ar = DY(8287);
    class Ir {
      constructor(YY) {
        this.deps = YY, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(YY) {
        YY && "armed" === this.phase ? this.setPhase("ready") : YY || "ready" !== this.phase || this.setPhase("armed")
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
      hold(YY, rY) {
        this.suspended || (this.offered ? rY || this.setPhase("idle") : YY && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : YY || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(YY) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const rY = this.phase;
        this.phase = YY, this.deps.onPhase(YY, rY)
      }
    }
    const Rr = 25 * Math.PI / 180,
      Or = 45 * Math.PI / 180;
    class gr extends Ir {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(YY, rY, DY) {
        this.speed = DY;
        const FY = Math.hypot(YY, rY),
          AY = FY > 0 ? Math.acos(Math.min(1, -rY / FY)) : Math.PI;
        this.hold(FY >= .8 && AY <= Rr, FY >= .5 && AY <= Or)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var ar = DY(1287);

    function vr(YY, rY) {
      const DY = (0, FY.useRef)(null),
        AY = (0, FY.useRef)(rY);
      return AY.current = rY, (0, FY.useEffect)((() => {
        if (!YY) return;
        const {
          create: rY,
          elementRef: FY,
          ringRef: IY,
          classPrefix: RY,
          keptBehindMovementPanels: OY,
          resizeEnds: gY
        } = AY.current, aY = {
          charging: `${RY}Charging`,
          armed: `${RY}Armed`,
          ready: `${RY}Ready`,
          locked: `${RY}Locked`
        };
        let vY = null;
        const uY = rY({
          onPhase: (YY, rY) => {
            const DY = FY.current;
            if (null !== DY) {
              for (const [rY, FY] of Object.entries(aY)) DY.classList.toggle(FY, rY === YY);
              if ("charging" === YY) vY = IY.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === YY) {
                var RY;
                null === (RY = vY) || void 0 === RY || RY.cancel(), vY = null
              }
              var OY, gY;
              if ("armed" === YY && "charging" === rY && AY.current.onArmed(), "ready" === YY && Ar.f.play("lockReady"), "locked" === YY) Ar.f.play("lockLocked"), null === (OY = (gY = AY.current).onLocked) || void 0 === OY || OY.call(gY);
              "locked" === rY && AY.current.onUnlocked()
            }
          }
        });
        DY.current = uY;
        const sY = () => {
            uY.suspend()
          },
          iY = () => {
            "hidden" === document.visibilityState && sY()
          },
          yY = () => {
            gY ? uY.suspend() : uY.suspendArming()
          },
          QY = (0, ar.g)((YY => {
            let {
              keepsMovement: rY
            } = YY;
            rY && OY ? uY.suspendArming() : sY()
          }));
        return document.addEventListener("visibilitychange", iY), window.addEventListener("blur", sY), window.addEventListener("resize", yY), () => {
          QY(), document.removeEventListener("visibilitychange", iY), window.removeEventListener("blur", sY), window.removeEventListener("resize", yY), uY.cancel(), DY.current = null
        }
      }), [YY]), (0, TY.c)("localPlayerAliveSet", (() => {
        var YY;
        null === (YY = DY.current) || void 0 === YY || YY.suspend()
      })), DY
    }
    var ur = DY(3944),
      sr = DY(8291),
      ir = DY(1134),
      yr = DY(2971),
      Qr = DY(3955);

    function or(YY, rY, DY) {
      const FY = function(YY, rY, DY) {
        const FY = DY.map((DY => ({
            left: Math.max(0, DY.left),
            top: Math.max(0, DY.top),
            right: Math.min(YY, DY.right),
            bottom: Math.min(rY, DY.bottom)
          }))).filter((YY => YY.right > YY.left && YY.bottom > YY.top)),
          AY = [...new Set([0, rY, ...FY.flatMap((YY => [YY.top, YY.bottom]))])].sort(((YY, rY) => YY - rY)),
          IY = [];
        for (let RY = 0; RY < AY.length - 1; RY++) {
          const rY = AY[RY],
            DY = AY[RY + 1],
            OY = FY.filter((YY => YY.top <= rY && YY.bottom >= DY)).map((YY => [YY.left, YY.right])).sort(((YY, rY) => YY[0] - rY[0]));
          let gY = 0;
          for (const [YY, FY] of OY) YY > gY && IY.push({
            left: gY,
            top: rY,
            right: YY,
            bottom: DY
          }), gY = Math.max(gY, FY);
          gY < YY && IY.push({
            left: gY,
            top: rY,
            right: YY,
            bottom: DY
          })
        }
        return IY
      }(YY, rY, DY);
      if (0 === FY.length) return 'path("M0 0Z")';
      if (1 === FY.length && 0 === FY[0].left && 0 === FY[0].top && FY[0].right === YY && FY[0].bottom === rY) return "";
      const AY = YY => Math.round(10 * YY) / 10;
      return `path("${FY.map((YY=>`M${AY(YY.left)} ${AY(YY.top)}H${AY(YY.right)}V${AY(YY.bottom)}H${AY(YY.left)}Z`)).join("")}")`
    }

    function Wr(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const AY = [],
        IY = 2 * DY / FY;
      for (let RY = 0; RY < FY; RY++) {
        const FY = rY - DY + RY * IY,
          OY = FY + IY,
          gY = Math.min(Math.max(rY, FY), OY) - rY,
          aY = Math.sqrt(Math.max(0, DY * DY - gY * gY));
        AY.push({
          left: YY - aY,
          top: FY,
          right: YY + aY,
          bottom: OY
        })
      }
      return AY
    }

    function Er(YY) {
      const rY = YY.getBoundingClientRect(),
        DY = {
          left: rY.left,
          top: rY.top,
          right: rY.right,
          bottom: rY.bottom
        },
        FY = (0, UY.f)(YY);
      if (FY.whole) return [DY];
      const AY = function(YY) {
          const rY = YY.right - YY.left,
            DY = YY.bottom - YY.top,
            FY = Math.min(rY, DY) / 2,
            AY = (YY.left + YY.right) / 2,
            IY = (YY.top + YY.bottom) / 2;
          return rY >= DY ? [{
            left: YY.left + FY,
            top: YY.top,
            right: YY.right - FY,
            bottom: YY.bottom
          }, ...Wr(YY.left + FY, IY, FY), ...Wr(YY.right - FY, IY, FY)] : [{
            left: YY.left,
            top: YY.top + FY,
            right: YY.right,
            bottom: YY.bottom - FY
          }, ...Wr(AY, YY.top + FY, FY), ...Wr(AY, YY.bottom - FY, FY)]
        }(DY),
        IY = FY.keyBox;
      if (IY) {
        const YY = (DY.left + DY.right) / 2,
          rY = (DY.top + DY.bottom) / 2;
        AY.push({
          left: YY - IY.width / 2,
          top: rY - IY.height / 2,
          right: YY + IY.width / 2,
          bottom: rY + IY.height / 2
        })
      }
      return AY
    }
    const mr = "joystickZoneAvoidChanged";

    function Vr(YY, rY) {
      (0, FY.useEffect)((() => {
        const DY = YY.current;
        if (!rY || !DY) return;
        const FY = () => {
          const YY = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            rY = YY.find((YY => YY.classList.contains("TouchInteractHit")));
          rY !== AY && (AY && IY.unobserve(AY), AY = rY, rY && IY.observe(rY));
          const FY = YY.flatMap((YY => Er(YY))),
            RY = function(YY, rY) {
              const DY = rY.map((rY => ({
                left: rY.left - YY.left,
                top: rY.top - YY.top,
                right: rY.right - YY.left,
                bottom: rY.bottom - YY.top
              })));
              return or(Math.ceil(YY.width), Math.ceil(YY.height), DY)
            }(DY.getBoundingClientRect(), FY);
          DY.style.clipPath !== RY && (DY.style.clipPath = RY)
        };
        let AY;
        const IY = new ResizeObserver((() => {
          FY()
        }));
        FY(), IY.observe(DY);
        const RY = [(0, VY.j)(yr.e, FY), (0, VY.j)(mr, FY), (0, VY.j)(Qr.e, FY)];
        return () => {
          IY.disconnect();
          for (const YY of RY) YY();
          DY.style.clipPath = ""
        }
      }), [YY, rY])
    }
    var Sr = DY(3953);

    function lr(YY) {
      var rY;
      let {
        onMove: DY,
        mode: AY,
        speedCurve: IY,
        autorun: RY = !1
      } = YY;
      const OY = (0, FY.useRef)(null),
        gY = (0, FY.useRef)(null),
        vY = (0, FY.useRef)(null),
        uY = (0, FY.useRef)(null),
        iY = (0, FY.useRef)(null),
        yY = (0, FY.useRef)(null),
        QY = (0, FY.useRef)(null),
        oY = (0, FY.useRef)(null),
        WY = (0, FY.useRef)(null),
        EY = (0, FY.useRef)(!1),
        mY = (0, FY.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: VY
        } = (0, HY.C)(),
        SY = (0, Sr.n)(AY),
        lY = (0, eY.j)(["notchSize"]).notchSize,
        TY = lY.left,
        NY = (0, FY.useRef)(16),
        BY = (0, sr.e)(),
        [cY, KY, zY] = "pinned" === AY ? ur.l : null !== (rY = BY.hudElements.joystick) && void 0 !== rY ? rY : ur.l,
        ZY = "pinned" === AY ? null : BY.hudSafe,
        CY = Math.max(Sr.k, Sr.m * zY);
      Vr(gY, "pinned" !== AY);
      const fY = function(YY, rY, DY, AY, IY) {
        const RY = (0, FY.useRef)(null),
          OY = () => {
            clearInterval(RY.current), RY.current = null
          },
          gY = vr(YY, {
            create: YY => new gr(YY),
            elementRef: rY,
            ringRef: DY,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: IY,
            onLocked: () => {
              RY.current = setInterval((() => {
                sY.gameBridge.lookup("dropAhead", null) && (Ar.f.play("autorunLedgeStop"), gY.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              OY(), AY()
            }
          });
        return (0, FY.useEffect)((() => OY), []), gY
      }(RY, vY, QY, (() => {
        XY(), bY()
      }), (() => {
        jY(), null === WY.current && fY.current.suspend()
      }));

      function jY() {
        const YY = vY.current.getBoundingClientRect();
        WY.current = rr(oY.current, YY, 80, Dr(`.TouchInventoryKey, ${Qr.c}`)), EY.current = null !== WY.current && Fr(mY.current, WY.current)
      }

      function hY() {
        const {
          innerWidth: YY,
          innerHeight: rY
        } = window, DY = (0, Qr.A)(ZY, YY, rY, (0, Qr.F)(lY, YY, rY), NY.current);
        return {
          left: DY[3],
          bottom: DY[2]
        }
      }

      function JY(YY) {
        vY.current.style.transform = `translate(${YY.x-CY}px, ${YY.y-CY}px)`
      }

      function MY(YY) {
        const rY = vY.current;
        rY.classList.add("Resting"), rY.classList.toggle("Returning", YY), rY.style.display = "fixed_hidden" === AY ? "none" : "block", JY(function() {
          const {
            innerWidth: YY,
            innerHeight: rY
          } = window, DY = hY(), FY = TY * YY / 100 + DY.left, AY = OY.current.offsetHeight || rY, IY = ((0, ir.b)(YY, rY) ? Sr.g : Sr.c) + DY.bottom;
          return {
            x: Math.min(YY - CY, Math.max(CY, FY + Sr.j + cY * YY)),
            y: Math.min(AY - CY, Math.max(CY, AY - IY + KY * AY))
          }
        }())
      }
      const wY = (0, FY.useRef)({
        restFixed: MY,
        release: qY
      });

      function bY() {
        SY ? MY("fixed_shown" === AY) : "floating" === AY && (vY.current.style.display = "none"), DY({
          x: 0,
          y: 0
        })
      }

      function XY() {
        yY.current = null, iY.current = null, uY.current.style.transform = "translate(-50%, -50%)"
      }

      function qY(YY) {
        XY();
        const rY = fY.current;
        YY && null !== rY && void 0 !== rY && rY.lift() ? DY({
          x: 0,
          y: -rY.lockedSpeed
        }) : (null === rY || void 0 === rY || rY.cancel(), bY())
      }

      function pY(YY) {
        const rY = Array.from(YY.touches).find((YY => YY.identifier === yY.current));
        if (null === iY.current || null === yY.current || (0, Yr.H)(rY)) return;
        const FY = fY.current,
          AY = rY.clientX - iY.current.x,
          RY = rY.clientY - iY.current.y,
          OY = Math.hypot(AY, RY),
          gY = OY > 0 ? Math.min(1, CY / OY) : 0,
          aY = AY * gY,
          vY = RY * gY,
          sY = Math.hypot(aY, vY) / CY,
          QY = IY && sY > 0 ? IY(sY) / sY : 1;
        uY.current.style.transform = `translate(calc(-50% + ${aY}px), calc(-50% + ${vY}px))`;
        const oY = aY / CY,
          VY = vY / CY;
        if (DY({
            x: oY * QY,
            y: VY * QY
          }), null !== FY && null !== WY.current) {
          FY.move(oY, VY, sY * QY), mY.current = {
            clientX: rY.clientX,
            clientY: rY.clientY
          };
          const YY = EY.current;
          EY.current = Fr(rY, WY.current), EY.current !== YY && FY.target(EY.current)
        }
      }
      return wY.current = {
        restFixed: MY,
        release: qY
      }, (0, FY.useLayoutEffect)((() => {
        if (!SY) return;
        const YY = () => {
          NY.current = (0, Qr.L)(document)
        };
        YY(), null === yY.current && wY.current.restFixed(!1);
        const rY = new ResizeObserver((() => {
          YY(), null === yY.current && wY.current.restFixed(!1)
        }));
        rY.observe(OY.current);
        const DY = vY.current;
        return () => {
          rY.disconnect(), DY.classList.remove("Resting", "Returning"), null === yY.current && (DY.style.display = "", DY.style.transform = "")
        }
      }), [SY, AY, lY, cY, KY, CY, ZY]), (0, FY.useEffect)((() => {
        const YY = YY => {
            const rY = yY.current;
            null === rY || Array.from(YY.touches).some((YY => YY.identifier === rY)) || wY.current.release("touchend" === YY.type && Array.from(YY.changedTouches).some((YY => YY.identifier === rY)))
          },
          rY = () => {
            null !== yY.current && wY.current.release(!1)
          },
          DY = () => {
            "hidden" === document.visibilityState && rY()
          };
        document.addEventListener("touchstart", YY, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", YY, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", YY, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", YY, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", rY), document.addEventListener("visibilitychange", DY);
        const FY = (0, ar.g)((YY => {
          let {
            keepsMovement: DY
          } = YY;
          DY || rY()
        }));
        return () => {
          FY(), document.removeEventListener("touchstart", YY, {
            capture: !0
          }), document.removeEventListener("touchmove", YY, {
            capture: !0
          }), document.removeEventListener("touchend", YY, {
            capture: !0
          }), document.removeEventListener("touchcancel", YY, {
            capture: !0
          }), window.removeEventListener("blur", rY), document.removeEventListener("visibilitychange", DY)
        }
      }), []), (0, FY.useEffect)((() => {
        const YY = OY.current,
          rY = YY => {
            YY.preventDefault()
          };
        return YY.addEventListener("touchstart", rY, {
          passive: !1
        }), () => {
          YY.removeEventListener("touchstart", rY)
        }
      }), []), (0, aY.jsxs)("div", {
        ref: OY,
        className: "JoystickZone",
        style: SY && (cY > 0 || zY > 1 || hY().left > 0) ? {
          width: `max(35vw, calc(${TY+100*cY}vw + ${hY().left+Sr.j+CY+24}px))`
        } : void 0,
        onTouchStart: function(YY) {
          var rY;
          if (null !== yY.current) return;
          const DY = Array.from(YY.changedTouches).find((YY => {
            var rY;
            return null === (rY = OY.current) || void 0 === rY ? void 0 : rY.contains(YY.target)
          }));
          if (DY) {
            if (null === (rY = fY.current) || void 0 === rY || rY.startTouch(), yY.current = DY.identifier, "pinned" === AY) {
              const YY = vY.current.getBoundingClientRect();
              iY.current = {
                x: YY.left + YY.width / 2,
                y: YY.top + YY.height / 2
              }
            } else {
              iY.current = {
                x: DY.clientX,
                y: DY.clientY
              }, vY.current.classList.remove("Resting", "Returning"), vY.current.style.display = "block";
              const YY = OY.current.getBoundingClientRect();
              JY({
                x: DY.clientX - YY.left,
                y: DY.clientY - YY.top
              }), RY && (mY.current = {
                clientX: DY.clientX,
                clientY: DY.clientY
              }, jY())
            }
            pY(YY)
          }
        },
        onTouchMove: pY,
        children: [(0, aY.jsx)("div", {
          ref: gY,
          className: "JoystickTouchLayer"
        }), (0, aY.jsxs)("div", {
          ref: vY,
          className: "Joystick",
          style: {
            width: 2 * CY + "px",
            height: 2 * CY + "px",
            transform: "pinned" === AY ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, aY.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * CY + "px",
              height: 2 * CY + "px"
            }
          }), RY && (0, aY.jsxs)(aY.Fragment, {
            children: [(0, aY.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, aY.jsx)("circle", {
                ref: QY,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, aY.jsxs)("div", {
              ref: oY,
              className: "AutorunTarget",
              children: [(0, aY.jsx)(dY.e, {
                name: "lock"
              }), VY("settingsMenu:autoRun")]
            })]
          }), (0, aY.jsx)("div", {
            ref: uY,
            className: "JoystickKnob",
            style: {
              width: `${CY}px`,
              height: `${CY}px`
            }
          })]
        })]
      })
    }
    const Tr = .35,
      er = .22;

    function Nr(YY) {
      if (YY < .1) return 0;
      if (YY < Tr) {
        const rY = (YY - .1) / (Tr - .1);
        return .06 + .16 * rY * rY
      }
      return YY < .85 ? er + .78 * (YY - Tr) / .5 : 1
    }

    function Br(YY, rY) {
      const DY = (0, FY.useRef)(null);
      return (0, FY.useLayoutEffect)((() => (UY.j.set(YY, DY.current, rY), () => {
        UY.j.set(YY, null)
      })), [YY, rY]), DY
    }
    const cr = "C",
      Kr = "J",
      Hr = "U",
      zr = "P",
      Zr = "A",
      Cr = "G",
      fr = "X",
      jr = (0, FY.forwardRef)((function(YY, rY) {
        let {
          slot: DY,
          canvasZone: AY = !1,
          lit: RY = !1,
          label: OY,
          className: gY,
          children: vY,
          ...uY
        } = YY;
        return (0, FY.useEffect)((() => (VY.g.vo(yr.e), () => {
          VY.g.vo(yr.e)
        })), []), (0, aY.jsx)("div", {
          ref: rY,
          className: IY()("TouchKeyHit", `TouchSlot${DY}`, gY, {
            CanvasZone: AY
          }),
          ...uY,
          children: (0, aY.jsxs)("div", {
            className: IY()("TouchKey", {
              Lit: RY,
              Labelled: void 0 !== OY
            }),
            children: [vY, void 0 !== OY && (0, aY.jsx)("span", {
              className: "TouchKeyLabel",
              children: OY
            })]
          })
        })
      }));

    function hr(YY, rY) {
      (0, FY.useEffect)((() => () => {
        rY.current && (rY.current = !1, (0, PY.C)(YY, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function dr(YY, rY) {
      const DY = rY ? [fr] : [zr, fr];
      return YY.filter((YY => null !== YY)).slice(0, DY.length).map(((YY, rY) => {
        const AY = DY[rY];
        return (0, aY.jsx)(FY.Fragment, {
          children: YY.render(AY)
        }, `${YY.id}:${AY}`)
      }))
    }
    var Jr = DY(36002);
    class Mr extends Ir {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(YY, rY) {
        this.start = {
          x: YY,
          y: rY
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(YY, rY, DY) {
        const FY = Math.hypot(YY - this.start.x, rY - this.start.y) <= 12;
        this.moved ||= !FY;
        const AY = null !== DY && rY < this.start.y - 12 && Fr({
          clientX: YY,
          clientY: rY
        }, DY);
        this.hold(!this.moved, FY || AY)
      }
    }
    const wr = new Set;

    function br(YY) {
      const rY = new Set(Array.from(YY.touches, (YY => YY.identifier)));
      for (const DY of wr) {
        for (const YY of DY.ids) rY.has(YY) || DY.ids.delete(YY);
        if (0 === DY.ids.size) {
          wr.delete(DY);
          DY.pressesOnPointerDown && "touchstart" === YY.type && Array.from(YY.changedTouches).some((YY => YY.target instanceof Node && DY.element.contains(YY.target))) || DY.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const sR of ["touchstart", "touchmove"]) window.addEventListener(sR, br, {
        capture: !0,
        passive: !0
      });

    function Xr(YY) {
      let {
        pressesOnPointerDown: rY = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const DY = (0, FY.useRef)(YY);
      DY.current = YY;
      const AY = (0, FY.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: rY,
        release: () => {
          DY.current()
        }
      });
      (0, FY.useEffect)((() => {
        const YY = AY.current;
        return () => {
          wr.delete(YY), YY.ids.clear()
        }
      }), []);
      const IY = YY => {
        const rY = AY.current;
        for (const DY of Array.from(YY.changedTouches)) rY.ids.delete(DY.identifier);
        0 === rY.ids.size && wr.delete(rY)
      };
      return {
        onTouchStart: YY => {
          const rY = AY.current;
          rY.element = YY.currentTarget;
          for (const DY of Array.from(YY.changedTouches)) DY.target instanceof Node && YY.currentTarget.contains(DY.target) && rY.ids.add(DY.identifier);
          rY.ids.size > 0 && wr.add(rY)
        },
        onTouchEnd: IY,
        onTouchCancel: IY
      }
    }

    function qr(YY, rY) {
      return null === rY ? null : (0, Jr.c)(YY.nativeEvent.changedTouches, rY.id)
    }

    function pr(YY) {
      let {
        lockable: rY
      } = YY;
      const {
        t: DY
      } = (0, HY.C)(), AY = "round" === (0, ur.T)().hudShape, IY = (0, FY.useRef)(!1);
      hr(nY.u.Jump, IY);
      const RY = (0, FY.useRef)(null),
        OY = (0, FY.useRef)(null),
        gY = (0, FY.useRef)(null),
        vY = (0, FY.useRef)(null),
        uY = (0, FY.useRef)(null),
        sY = (0, FY.useRef)(null),
        iY = (0, FY.useRef)(!1),
        yY = (YY, rY) => {
          IY.current = YY, (0, PY.C)(nY.u.Jump, YY, rY)
        },
        QY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          IY.current && (RY.current && (0, tY.i)(RY.current, !1), yY(!1, YY))
        },
        oY = vr(rY, {
          create: YY => new Mr(YY),
          elementRef: RY,
          ringRef: OY,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const YY = RY.current.getBoundingClientRect(),
              rY = gY.current.parentElement,
              DY = rY.getBoundingClientRect(),
              FY = {
                left: DY.left + rY.clientLeft,
                top: DY.top + rY.clientTop,
                right: DY.right - rY.clientLeft,
                bottom: DY.bottom - rY.clientTop
              };
            if (uY.current = rr(gY.current, FY, 16, Dr(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${Qr.c}`)), null === uY.current) return void oY.current.suspend();
            const AY = uY.current;
            sY.current = {
              left: Math.min(YY.left, AY.left),
              top: AY.top,
              right: Math.max(YY.right, AY.right),
              bottom: YY.bottom
            }, iY.current = null !== vY.current && Fr({
              clientX: vY.current.x,
              clientY: vY.current.y
            }, AY)
          },
          onUnlocked: () => {
            null === vY.current && QY()
          }
        }),
        WY = YY => {
          var rY;
          vY.current = null, null === (rY = oY.current) || void 0 === rY || rY.cancel(), QY(YY)
        },
        EY = Xr((() => {
          WY()
        })),
        mY = YY => {
          const rY = vY.current;
          var DY;
          return null === rY ? null !== (DY = oY.current) && void 0 !== DY && DY.locked ? null : "lifted" : qr(YY, rY) ? "lifted" : (0, Jr.g)(YY.nativeEvent.touches, rY.id) ? null : "dropped"
        };
      return (0, aY.jsxs)(jr, {
        ref: RY,
        slot: Kr,
        className: "JumpKey",
        onTouchStart: YY => {
          EY.onTouchStart(YY), (0, tY.i)(YY.currentTarget, !0), null === vY.current || (0, Jr.g)(YY.nativeEvent.touches, vY.current.id) || WY();
          const rY = YY.changedTouches[0];
          var DY;
          null === vY.current && rY && (vY.current = {
            id: rY.identifier,
            x: rY.clientX,
            y: rY.clientY
          }, null === (DY = oY.current) || void 0 === DY || DY.press(rY.clientX, rY.clientY));
          IY.current || yY(!0, YY.nativeEvent)
        },
        onTouchMove: YY => {
          const rY = vY.current,
            DY = qr(YY, rY);
          if (!DY) return;
          const FY = oY.current;
          if (null === FY || void 0 === FY || FY.move(DY.clientX, DY.clientY, sY.current), null !== FY && void 0 !== FY && FY.offered) {
            const YY = Fr(DY, uY.current);
            YY !== iY.current && (iY.current = YY, FY.target(YY))
          }
          rY.x = DY.clientX, rY.y = DY.clientY
        },
        onTouchEnd: YY => {
          var rY;
          EY.onTouchEnd(YY);
          const DY = mY(YY);
          null !== DY && ("dropped" !== DY ? (vY.current = null, null !== (rY = oY.current) && void 0 !== rY && rY.lift() ? (0, tY.i)(YY.currentTarget, !1) : QY(YY.nativeEvent)) : WY(YY.nativeEvent))
        },
        onTouchCancel: YY => {
          EY.onTouchCancel(YY), null !== mY(YY) && WY(YY.nativeEvent)
        },
        children: [(0, aY.jsx)(dY.e, {
          name: "arrow-up-from-line"
        }), rY && (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, aY.jsx)(dY.e, {
              name: "lock"
            })
          }), (0, aY.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, aY.jsx)("rect", {
              ref: OY,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: AY ? 48 : 0,
              pathLength: 1
            })
          }), (0, aY.jsxs)("div", {
            ref: gY,
            className: "JumpLockTarget",
            children: [(0, aY.jsx)(dY.e, {
              name: "lock"
            }), DY("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const kr = new WeakMap;
    class Gr {
      constructor(YY) {
        this.zones = YY, this.followed = new Map, this.onStart = YY => {
          if (this.releaseMissing(YY.touches), YY.target instanceof HTMLCanvasElement)
            for (let DY = 0; DY < YY.changedTouches.length; DY++) {
              var rY;
              const {
                identifier: FY,
                clientX: AY,
                clientY: IY
              } = YY.changedTouches[DY];
              this.release(FY);
              const RY = this.zones.hitZone(AY, IY);
              if (!RY) continue;
              const {
                key: OY
              } = RY;
              null === (rY = kr.get(OY)) || void 0 === rY || rY.cancel();
              const gY = {
                hit: RY.element,
                key: OY,
                x: RY.x,
                y: RY.y,
                reach: .6 * RY.radius
              };
              this.followed.set(FY, gY), (0, tY.i)(RY.element, !0), xr(gY, AY, IY)
            }
        }, this.onMove = YY => {
          this.releaseMissing(YY.touches);
          for (let rY = 0; rY < YY.changedTouches.length; rY++) {
            const {
              identifier: DY,
              clientX: FY,
              clientY: AY
            } = YY.changedTouches[rY], IY = this.followed.get(DY);
            IY && xr(IY, FY, AY)
          }
        }, this.onEnd = YY => {
          for (let rY = 0; rY < YY.changedTouches.length; rY++) this.release(YY.changedTouches[rY].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const YY = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, YY), document.addEventListener("touchmove", this.onMove, YY), document.addEventListener("touchend", this.onEnd, YY), document.addEventListener("touchcancel", this.onEnd, YY), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(YY) {
        for (const rY of [...this.followed.keys()])(0, Jr.g)(YY, rY) || this.release(rY)
      }
      releaseAll() {
        for (const YY of [...this.followed.keys()]) this.release(YY)
      }
      release(YY) {
        const rY = this.followed.get(YY);
        if (!rY) return;
        this.followed.delete(YY);
        for (const AY of this.followed.values())
          if (AY.key === rY.key) return;
        (0, tY.i)(rY.hit, !1);
        const {
          key: DY
        } = rY, FY = DY.style.translate;
        DY.style.translate = "", FY && kr.set(DY, DY.animate({
          translate: [FY, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function xr(YY, rY, DY) {
      let {
        key: FY,
        x: AY,
        y: IY,
        reach: RY
      } = YY;
      const OY = rY - AY,
        gY = DY - IY,
        aY = Math.min(1, RY / (Math.hypot(OY, gY) || 1));
      FY.style.translate = `${OY*aY}px ${gY*aY}px`
    }
    const nr = () => {
      const YY = (0, xY.i)(),
        rY = (0, BY.p)();
      return YY || rY
    };

    function Pr(YY) {
      (0, UY.m)(YY.x, YY.y)
    }
    const Ur = (0, FY.memo)((function() {
        const YY = nr(),
          {
            joystickMode: rY,
            touchSpeedCurve: DY,
            autorun: AY
          } = (0, eY.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, FY.useEffect)((() => ((0, LY.k)(nY.w.TouchControls, nY.w.TouchControls), () => {
          (0, LY.k)(nY.w.TouchControls, 0), (0, UY.m)(0, 0)
        })), []), (0, aY.jsx)("div", {
          className: IY()("TouchMovementWrapper", {
            Hidden: YY
          }),
          "data-camera-keeper": "",
          children: (0, aY.jsx)(lr, {
            onMove: Pr,
            mode: rY,
            speedCurve: DY ? Nr : void 0,
            autorun: AY
          })
        })
      })),
      Lr = (0, FY.memo)((function() {
        const YY = nr(),
          {
            clientEscMenuOptions: rY
          } = (0, eY.j)(["clientEscMenuOptions"]),
          DY = rY.touchActionButtons;
        return (0, FY.useEffect)((() => new Gr(UY.j).start()), []), (0, FY.useEffect)((() => {
          VY.g.vo(yr.e)
        }), [YY]), (0, aY.jsxs)("div", {
          className: IY()("TouchComponentsButtons", {
            Hidden: YY
          }),
          "data-camera-keeper": "",
          children: [(0, aY.jsx)(pr, {
            lockable: rY.jumpLock && !YY
          }), (0, aY.jsx)(vD, {
            hidden: YY,
            actionButtons: DY
          }), (0, aY.jsx)(YD, {})]
        })
      }));

    function tr(YY) {
      const rY = rY => DY => {
        (0, tY.i)(DY.currentTarget, rY), YY(rY, DY.nativeEvent)
      };
      return {
        onPointerDown: rY(!0),
        onPointerUp: rY(!1),
        onPointerCancel: rY(!1)
      }
    }

    function YD() {
      const YY = (0, mY.j)("canCrouch"),
        rY = (0, TY.h)("crouching"),
        DY = (0, FY.useRef)(!1);
      hr(nY.u.Crouch, DY);
      const AY = (YY, rY) => {
          DY.current = YY, (0, PY.C)(nY.u.Crouch, YY, rY)
        },
        IY = (0, FY.useRef)(null),
        RY = () => {
          DY.current && (IY.current && (0, tY.i)(IY.current, !1), AY(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        OY = Xr(RY);
      return (0, FY.useEffect)((() => {
        !1 === YY && RY()
      }), [YY]), !1 === YY ? null : (0, aY.jsx)(jr, {
        ref: IY,
        slot: cr,
        className: "CrouchKey",
        lit: rY,
        ...OY,
        ...tr(AY),
        children: (0, aY.jsx)(dY.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const rD = [{
        icon: "arrows-rotate"
      }],
      DD = [{
        icon: "Arrow"
      }],
      FD = [{
        icon: "crosshairs"
      }],
      AD = [{
        icon: "swords"
      }],
      ID = [{
        icon: "hand-back-point-up"
      }],
      RD = [{
        icon: "Firecracker"
      }];

    function OD(YY, rY, DY, FY) {
      return {
        id: JSON.stringify(rY),
        render: AY => (0, aY.jsx)(uD, {
          code: YY,
          slot: AY,
          icon: rY,
          label: FY,
          hidden: DY
        })
      }
    }

    function gD(YY, rY) {
      return {
        id: "fly",
        render: DY => (0, aY.jsx)(aD, {
          slot: DY,
          flying: YY,
          label: rY
        })
      }
    }

    function aD(YY) {
      let {
        slot: rY,
        flying: DY,
        label: FY
      } = YY;
      return (0, aY.jsx)(jr, {
        slot: rY,
        className: "FlyKey",
        lit: DY,
        label: FY,
        ...tr(((YY, rY) => {
          (0, PY.C)(nY.u.Fly, YY, rY)
        })),
        children: (0, aY.jsx)(dY.e, {
          name: "feather-pointed"
        })
      })
    }

    function vD(YY) {
      var rY, DY;
      let {
        hidden: FY,
        actionButtons: AY
      } = YY;
      const {
        t: IY
      } = (0, HY.C)(), {
        gun: RY,
        aimable: OY,
        chargeName: gY
      } = (0, TY.h)("heldItemAim"), vY = (0, TY.h)("gliderBoostFuel"), {
        canFly: uY,
        flying: sY
      } = (0, TY.h)("flight"), iY = (0, mY.j)("touchscreenActionButton"), yY = RY ? rD : iY, QY = OY ? {
        icon: DD,
        label: IY("touchKeys:aim")
      } : null, oY = null !== gY ? {
        icon: [{
          icon: gY
        }]
      } : null, WY = null !== QY && void 0 !== QY ? QY : oY, EY = null !== (rY = null === (DY = RY ? QY : null !== oY && void 0 !== oY ? oY : QY) || void 0 === DY ? void 0 : DY.icon) && void 0 !== rY ? rY : ID, VY = [!AY && WY ? OD(UY.d.Action2, WY.icon, FY, WY.label) : null, RY ? OD(UY.d.Action3, FD, FY, IY("touchKeys:scope")) : null, uY ? gD(sY, IY("touchKeys:fly")) : null];
      return (0, aY.jsxs)(aY.Fragment, {
        children: [yY && (0, aY.jsx)(uD, {
          code: UY.d.Action1,
          slot: Cr,
          icon: yY,
          label: RY ? IY("touchKeys:reload") : void 0,
          hidden: FY
        }, JSON.stringify(yY)), AY && (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)(uD, {
            code: UY.d.Attack,
            slot: Zr,
            icon: AD,
            name: IY("touchKeys:attack"),
            hidden: FY
          }), (0, aY.jsx)(uD, {
            code: UY.d.Use,
            slot: Hr,
            icon: EY,
            name: IY("touchKeys:use"),
            hidden: FY
          })]
        }), dr(VY, AY), vY > 0 && (0, aY.jsx)(uD, {
          code: UY.d.Boost,
          slot: fr,
          icon: RD,
          label: IY("touchKeys:boost", {
            fuel: vY > 99 ? "99+" : vY
          }),
          hidden: FY
        })]
      })
    }

    function uD(YY) {
      let {
        code: rY,
        slot: DY,
        icon: FY,
        label: AY,
        name: IY,
        hidden: RY
      } = YY;
      const OY = Br(rY, RY);
      return (0, aY.jsx)(jr, {
        ref: OY,
        slot: DY,
        className: "TouchActionKey",
        canvasZone: !0,
        label: AY,
        role: void 0 !== IY ? "img" : void 0,
        "aria-label": IY,
        children: (0, aY.jsx)(gY.b, {
          text: FY
        })
      })
    }
    var sD = DY(3832),
      iD = DY(2620),
      yD = DY(662);
    const QD = (0, FY.memo)((function() {
      (0, WY.c)();
      const YY = (0, FY.useRef)([]),
        rY = (0, iD.c)(),
        DY = (0, FY.useRef)(0),
        AY = (0, FY.useRef)(0),
        IY = (0, FY.useRef)([]),
        RY = (0, FY.useRef)(null);

      function vY(DY, FY, AY, IY) {
        const RY = (0, yD.b)(),
          OY = setTimeout((() => {
            YY.current = YY.current.filter((YY => YY.id !== RY)), rY()
          }), IY);
        sY.gameBridge.send("recordFlyingMiddleText", {
          content: DY,
          hY: FY,
          angle: AY,
          dY: IY
        }), YY.current.push({
          id: RY,
          content: DY,
          hY: FY,
          dY: IY,
          removeTimeout: OY,
          angle: AY
        }), rY()
      }
      return (0, TY.c)("shotDamageToShow", (YY => {
        let {
          damage: rY,
          wasCrit: DY,
          distance: FY
        } = YY;
        const AY = -Math.PI / 4 + Math.random() * Math.PI / 2;
        vY(DY ? [{
          str: rY.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [rY.toString()], FY, AY, 1e3)
      })), (0, OY.g)("flyingMiddleMessage", (YY => {
        let {
          content: rY,
          hY: FY,
          dY: OY
        } = YY;
        IY.current.push({
          content: rY,
          hY: FY,
          dY: OY
        });
        const gY = () => {
          const {
            content: YY,
            hY: rY,
            dY: FY
          } = IY.current.shift(), RY = function(YY) {
            const rY = -Math.PI / 4,
              DY = Math.PI / 4,
              FY = DY - rY,
              AY = (1 + Math.sqrt(5)) / 2,
              IY = 2 * Math.PI / (AY * AY);
            let RY = YY + IY;
            for (; RY > DY;) RY -= FY;
            for (; RY < rY;) RY += FY;
            const OY = Math.PI / 6;
            if (Math.abs(RY - YY) < OY) {
              RY = YY + (Math.sign(RY - YY) || 1) * OY, RY > DY && (RY = YY - OY), RY < rY && (RY = YY + OY)
            }
            return RY
          }(AY.current);
          AY.current = RY, DY.current = Date.now(), vY(YY, rY, RY, FY)
        };
        if (!RY.current) {
          const YY = () => {
            IY.current.length > 0 && gY(), 0 === IY.current.length && (clearInterval(RY.current), RY.current = null)
          };
          RY.current = setInterval(YY, 200), DY.current + 200 < Date.now() && YY()
        }
        for (; IY.current.length > 4;) gY()
      })), (0, OY.g)("forceFlyingMiddleMessage", (YY => {
        let {
          content: rY,
          hY: DY,
          angle: FY,
          dY: AY
        } = YY;
        vY(rY, DY, FY, AY)
      })), (0, FY.useEffect)((() => () => {
        clearInterval(RY.current), RY.current = null;
        for (const rY of YY.current) clearTimeout(rY.removeTimeout)
      }), []), (0, aY.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: YY.current.map((YY => {
          const {
            id: rY,
            content: DY,
            hY: FY,
            dY: AY,
            angle: IY
          } = YY;
          return YY.pos || (YY.pos = function(YY, rY) {
            const DY = 50 / (YY ** .7 * .35);
            return {
              x: DY * Math.sin(rY),
              y: -DY * Math.cos(rY)
            }
          }(FY, IY)), (0, aY.jsx)(oD, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: AY,
            enterActiveStyle: {
              transform: `translate(${YY.pos.x}vw, ${YY.pos.y}vh)`,
              transition: `transform ${AY}ms ease-out`
            },
            children: (0, aY.jsx)("div", {
              children: (0, aY.jsx)(gY.b, {
                text: DY
              })
            })
          }, rY)
        }))
      })
    }));

    function oD(YY) {
      let {
        children: rY,
        className: DY,
        classNames: AY,
        timeout: IY,
        enterActiveStyle: RY
      } = YY;
      const [OY, gY] = (0, FY.useState)(!1), [vY, uY] = (0, FY.useState)(!1), sY = (0, FY.useRef)(null);
      return (0, FY.useEffect)((() => {
        gY(!0)
      }), []), (0, aY.jsx)(sD.b, {
        className: DY,
        classNames: AY || DY,
        in: OY,
        timeout: IY,
        nodeRef: sY,
        onEntering: () => {
          uY(!0)
        },
        children: (0, FY.cloneElement)(rY, {
          ref: sY,
          style: vY && RY || void 0
        })
      })
    }
    var WD = DY(36025);

    function ED() {
      const YY = (0, TY.h)("health");
      return (0, aY.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, aY.jsx)(WD.d, {
          placement: "statBars"
        }), (0, aY.jsx)(mD, {
          actualValue: YY.shield,
          maxValue: YY.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, aY.jsx)(mD, {
          actualValue: YY.health,
          maxValue: YY.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function mD(YY) {
      let {
        actualValue: rY,
        maxValue: DY,
        hideAtValue: FY,
        icon: AY,
        className: IY
      } = YY;
      return (0, WY.e)(), null === rY || null === DY || rY === FY || DY === FY ? null : (0, aY.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, aY.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, aY.jsx)("div", {
            className: `BottomScreenStatBar ${IY}`,
            style: {
              transform: `scaleX(${Math.max(rY/DY,0)})`,
              transformOrigin: "left center"
            }
          }), (0, aY.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, aY.jsx)(dY.e, {
              name: AY
            }), ` ${Math.ceil(rY)}/${DY}`]
          })]
        })
      })
    }
    var VD = DY(8745),
      SD = DY(4086),
      lD = DY(1330),
      TD = DY(2479),
      eD = DY(1437),
      ND = DY(1314),
      BD = DY(2975),
      cD = DY(3036),
      KD = DY(3e3),
      HD = DY(778),
      zD = DY(3061),
      ZD = DY(144),
      CD = DY(8653),
      fD = DY(341);

    function jD(YY, rY) {
      let {
        shownName: DY,
        lifeformType: FY
      } = YY;
      return null !== DY ? DY : null !== FY ? rY(`lifeform:${(0,fD.te)(FY)}`) : null
    }
    var hD = DY(2986),
      dD = DY(2991);
    const JD = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      MD = (0, FY.memo)((function() {
        var YY, rY;
        const DY = (0, WY.c)(),
          AY = (0, iY.useNavigatePreserveSearch)(),
          {
            t: RY
          } = (0, HY.C)(),
          {
            loadingOverlayVisible: gY
          } = (0, eY.j)(["loadingOverlayVisible"]),
          vY = (0, BY.p)(),
          [uY, yY] = (0, FY.useState)(!1),
          [QY, oY] = (0, FY.useState)(!0),
          [EY, VY] = (0, FY.useState)(null),
          lY = (0, iD.c)(),
          NY = (0, mY.j)("respawnButtonText"),
          cY = (0, mY.j)("usePlayAgainButton"),
          KY = (0, mY.j)("useRespawnButton"),
          {
            gameNameWithVariation: zY
          } = (0, TY.h)("connectedGame"),
          ZY = (0, FY.useRef)(SY.b.get("secsToRespawn")),
          CY = (0, FY.useRef)(sY.gameBridge.latest("localPlayerAlive")),
          fY = (0, FY.useRef)(SY.b.get("secsToRespawn")),
          jY = (0, FY.useRef)(SY.b.get("autoRespawn")),
          hY = (0, FY.useRef)(null),
          JY = (0, FY.useRef)(0),
          MY = (0, FY.useRef)(0),
          [wY, XY] = (0, FY.useState)(!1),
          qY = (0, FY.useRef)(null),
          pY = (0, FY.useRef)(null),
          kY = (0, FY.useRef)(null);
        (0, mY.f)("secsToRespawn", (YY => {
          console.log("Received new secsToRespawn with", YY, "and current canRespawn value of ", jY.current), fY.current = YY, PY()
        })), (0, mY.f)("autoRespawn", (YY => {
          console.log("Received autorespawn", YY, "current canRespawn value of ", ZY.current), jY.current = YY, PY()
        }));
        const GY = YY => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", YY), YY || JY.current++, CY.current = YY, PY()
        };
        (0, TY.c)("localPlayerAliveSet", GY), (0, OY.g)(cD.l, (YY => {
          "connected" === YY && !CY.current && jY.current && ZY.current <= 0 && (MY.current = 0, UY())
        })), (0, FY.useEffect)((() => {
          const YY = sY.gameBridge.latest("localPlayerAlive");
          YY === CY.current ? (console.log("Updating respawn component from initial mount"), PY()) : GY(YY)
        }), []), (0, FY.useEffect)((() => {
          if (uY) {
            XY(!1);
            const YY = setTimeout((() => {
              XY(!0)
            }), 600);
            return (0, CD.i)(), () => {
              clearTimeout(YY)
            }
          }
          return () => {}
        }), [uY]);
        (0, TY.c)("kill", (YY => {
          let {
            killer: rY,
            victim: DY,
            withItem: FY
          } = YY;
          if (!DY.local) return;
          const AY = ((YY, rY) => {
            if (YY.local) {
              const YY = JD[rY];
              return YY ? RY(YY) : null
            }
            const DY = jD(YY, RY);
            return DY ? RY("respawnPage:killedBy", {
              name: DY
            }) : null
          })(rY, FY);
          AY && VY({
            text: AY,
            deathCount: CY.current ? JY.current + 1 : JY.current
          })
        }));
        const xY = () => {
            uY && jY.current && CY.current && wY && yY(!1)
          },
          nY = uY && jY.current && CY.current && wY && !gY;
        (0, OY.g)("usedKeyboard", (() => {
          xY()
        })), (0, dD.d)("respawn", nY, xY);
        const PY = () => {
            oY(fY.current >= 3 || !jY.current), CY.current ? (clearInterval(hY.current), hY.current = null, jY.current ? lY() : yY(!1)) : (yY(!0), ZY.current = fY.current, lY(), console.log("Running respawn stats updated", jY.current, ZY.current), jY.current && ZY.current <= 0 && UY(), clearInterval(hY.current), ZY.current > 0 && (hY.current = setInterval((() => {
              ZY.current = Math.max(ZY.current - 1, 0), lY(), ZY.current <= 0 && (clearInterval(hY.current), hY.current = null, SY.b.get("autoRespawn") && UY())
            }), 1e3)))
          },
          UY = () => {
            if (Date.now() - MY.current > 1e3) {
              const YY = () => {
                sY.gameBridge.send("respawn", null), MY.current = Date.now()
              };
              SY.b.get("autoRespawn") ? YY() : (0, ND.W)((() => {
                YY()
              }), "video_respawn")
            }
          },
          LY = (0, FY.useMemo)((() => {
            var YY;
            return null === (YY = (0, HD.n)(zY)) || void 0 === YY ? void 0 : YY.otherGameLinksOnRespawnPage
          }), [zY]),
          tY = 0 === ZY.current,
          Yr = (null === EY || void 0 === EY ? void 0 : EY.deathCount) === JY.current ? EY.text : null,
          rr = uY && QY && !gY,
          Dr = vY && nY && null !== (YY = null === (rY = (0, bY.g)()) || void 0 === rY ? void 0 : rY.getBoundButton("menuConfirm")) && void 0 !== YY ? YY : null,
          Fr = YY => tY ? YY : RY("respawnPage:actionInSeconds", {
            action: YY,
            seconds: ZY.current
          });
        return (0, aY.jsx)(VD.d, {
          showing: uY,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, aY.jsx)(BD.b, {
            show: uY,
            "data-holds-camera-keeper": "",
            children: (0, aY.jsxs)(SD.e, {
              close: () => {
                yY(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: jY.current || gY ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, ZD.h)() && (0, aY.jsx)(eD.b, {
                onClick: KD.e,
                children: RY("homePage:backToGames")
              }), (0, aY.jsxs)("div", {
                className: "RespawnContainer",
                onClick: xY,
                children: [(0, aY.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, aY.jsx)("div", {
                    ref: pY,
                    className: "RespawnSideSquareBannerDiv",
                    children: DY[0] > 925 && (0, aY.jsx)(TD.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: pY
                      },
                      showing: rr,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, aY.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, aY.jsxs)("div", {
                      className: IY()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: vY
                      }),
                      children: [jY.current && (0, aY.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, aY.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, aY.jsx)(dY.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), RY("respawnPage:youDied")]
                        }), (0, aY.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Dr && (CY.current ? RY("respawnPage:pressAnywhereToContinue") : tY ? RY("respawnPage:respawning") : Fr(RY("general:respawn"))), null !== Dr && (0, aY.jsx)(hD.e, {
                            text: RY("controller:screensPressToContinue", {
                              button: hD.h
                            }),
                            glyph: Dr,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), Yr && (0, aY.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: Yr
                        })]
                      }), !jY.current && (0, aY.jsxs)(aY.Fragment, {
                        children: [(0, aY.jsxs)("div", {
                          className: IY()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !LY
                          }),
                          children: [cY && (0, aY.jsx)(eD.n, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, ND.W)((() => {
                                (0, eY.g)("inGameReplay");
                                const YY = (0, lD.d)(zY);
                                AY(YY)
                              }), "video_start")
                            },
                            disabled: !tY || !wY,
                            touchPressOn: "pointerup",
                            children: Fr(RY("respawnPage:playAgain"))
                          }), KY && (0, aY.jsx)(eD.f, {
                            className: "RespawnPageButton",
                            onClick: UY,
                            padDefaultFocus: !cY,
                            padBack: "sessionBasedGame:stayInLobby" === NY,
                            disabled: !tY || !wY,
                            touchPressOn: "pointerup",
                            children: Fr(RY(NY))
                          }), !(0, ZD.h)() && (0, aY.jsx)(eD.D, {
                            className: "RespawnPageButton",
                            onClick: KD.e,
                            disabled: !tY || !wY,
                            touchPressOn: "pointerup",
                            children: Fr(RY("respawnPage:exitGame"))
                          })]
                        }), LY && (0, aY.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, aY.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: RY("respawnPage:orTry")
                          }), (0, aY.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: LY.map((YY => (0, aY.jsx)(zD.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: YY
                              },
                              disabled: !tY || !wY,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, eY.g)("inGameReplay");
                                const rY = (0, lD.d)(YY);
                                AY(rY)
                              }
                            }, YY)))
                          })]
                        })]
                      })]
                    })
                  }), (0, aY.jsx)("div", {
                    ref: kY,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, aY.jsx)("div", {
                  ref: qY,
                  className: "RespawnBottom",
                  children: (0, aY.jsx)(TD.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: qY
                    },
                    showing: rr,
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
    var wD = DY(36041);
    const bD = [{
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
      XD = [{
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
      qD = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      pD = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      kD = (0, FY.memo)((function() {
        const YY = (0, FY.useRef)(null),
          rY = (0, FY.useRef)(null);

        function DY(DY) {
          var FY;
          let {
            iD: AY,
            screenPos: IY
          } = DY;
          const RY = YY.current;
          null === (FY = rY.current) || void 0 === FY || FY.cancel(), RY.classList.remove("HitmarkerCrit"), IY ? (RY.style.left = `${IY.x}%`, RY.style.top = `${IY.y}%`) : (RY.style.left = "50%", RY.style.top = "50%"), RY.style.rotate = 16 * (Math.random() - .5) + "deg", AY && RY.classList.add("HitmarkerCrit");
          const OY = RY.animate(AY ? XD : bD, AY ? pD : qD);
          rY.current = OY, OY.onfinish = () => {
            RY.classList.remove("HitmarkerCrit")
          }
        }
        return (0, OY.g)("localGunHitmarker", (YY => {
          let {
            iD: rY
          } = YY;
          DY({
            iD: rY
          })
        })), (0, OY.g)("yourAttackHit", (YY => {
          let {
            iD: rY,
            screenPos: FY
          } = YY;
          DY({
            iD: rY,
            screenPos: eY.b.get("isTouchScreen") ? FY : void 0
          })
        })), (0, OY.g)("sendHitmarker", (YY => {
          let {
            iD: rY,
            screenPos: FY
          } = YY;
          DY({
            iD: rY,
            screenPos: FY
          })
        })), (0, aY.jsxs)("div", {
          ref: YY,
          className: "Hitmarker",
          children: [(0, aY.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, aY.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, aY.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, aY.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function GD() {
      const YY = (0, FY.useRef)(!0);
      return (0, OY.g)("localBlockMined", (() => {
        Ar.f.play("blockMined")
      })), (0, OY.g)("yourAttackHit", (() => {
        Ar.f.play("hitLanded")
      })), (0, OY.g)("localGunHitmarker", (() => {
        Ar.f.play("hitLanded")
      })), (0, OY.g)("damagedByOtherPlayer", (() => {
        Ar.f.play("damageTaken")
      })), (0, TY.c)("localPlayerAliveSet", (rY => {
        !rY && YY.current && Ar.f.play("death"), YY.current = rY
      })), null
    }
    var xD = DY(1793),
      nD = DY(36058),
      PD = DY.n(nD),
      UD = DY(1886),
      LD = DY(1877),
      tD = DY(2864),
      YF = DY(8770);
    const rF = fD.ee ? 7e7 : 7e3,
      DF = PD()("#ffffff").alpha(.5).string();

    function FF(YY) {
      const rY = (0, tD.b)(YY);
      return void 0 !== rY && "Gun" === (0, YF.itemTypeOf)(rY)
    }

    function AF(YY) {
      if (!YY) return console.error(`Killfeed colour was ${YY}`), DF;
      try {
        return PD()(YY).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${YY} is not a colour`), DF
      }
    }
    const IF = (0, FY.memo)((function() {
      const {
        t: YY
      } = (0, HY.C)(), rY = (0, FY.useRef)([]), DY = (0, iD.c)();
      return (0, TY.c)("kill", (function(FY) {
        var AY, IY;
        let {
          killer: RY,
          victim: OY,
          withItem: gY,
          killstreak: aY
        } = FY;
        const vY = rY.current;
        if (vY.length >= 3) {
          const YY = vY.shift();
          clearTimeout(YY.timeout)
        }
        const uY = sY.gameBridge.latest("hiddenPlayerNames"),
          iY = {
            deadName: jD(OY, YY),
            killerName: jD(RY, YY),
            isFriend: {
              killer: (0, UD.e)(RY.realName, uY),
              dead: (0, UD.e)(OY.realName, uY)
            },
            withItem: gY,
            wasHeadshot: !1,
            killstreak: aY,
            timeout: setTimeout((() => {
              vY.shift(), DY()
            }), rF),
            reactId: `${null!==(AY=RY.id)&&void 0!==AY?AY:RY.shownName}|${null!==(IY=OY.id)&&void 0!==IY?IY:OY.shownName}|${Date.now()}`,
            killerBackground: AF(RY.colour),
            deadBackground: AF(OY.colour)
          };
        vY.push(iY), DY()
      })), (0, FY.useEffect)((() => {
        const YY = rY.current;
        return () => {
          for (; YY.length > 0;) {
            const {
              timeout: rY
            } = YY.pop();
            clearTimeout(rY)
          }
        }
      }), []), (0, aY.jsx)("div", {
        className: "Killfeed",
        children: rY.current.map((YY => {
          let {
            deadName: rY,
            killerName: DY,
            withItem: FY,
            wasHeadshot: AY,
            killstreak: IY,
            killerBackground: RY,
            deadBackground: OY,
            reactId: gY,
            isFriend: vY
          } = YY;
          return (0, aY.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${RY} calc(100% - 10rem), ${OY} 100%)`
            },
            children: [IY >= 2 ? (0, aY.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, fD.R)(IY)
            }) : null, (0, aY.jsx)("div", {
              className: "KillfeedKillerName",
              children: DY
            }), vY.killer && (0, aY.jsx)(LD.c, {}), (0, aY.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: FF(FY) ? "7.5vmin" : "5vmin"
              },
              children: (0, aY.jsx)(xD.c, {
                itemName: FY,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), AY ? (0, aY.jsx)(dY.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, aY.jsx)("div", {
              className: "KillfeedDeadName",
              children: rY
            }), vY.dead && (0, aY.jsx)(LD.c, {})]
          }, gY)
        }))
      })
    }));
    var RF = DY(36114),
      OF = DY(36116),
      gF = DY.n(OF),
      aF = DY(2963),
      vF = DY(36123),
      uF = DY(1298);
    const sF = {},
      iF = (0, FY.memo)((function() {
        const YY = (0, FY.useRef)({}),
          [, rY] = (0, FY.useReducer)((YY => YY + 1), 0);
        (0, OY.g)("setDirectionArrow", (DY => {
          let {
            id: FY,
            position: AY,
            style: IY,
            text: RY,
            aY: OY
          } = DY;
          const gY = YY.current,
            aY = IY || sF,
            vY = RY,
            uY = gY[FY];
          if (!uY) return gY[FY] = {
            position: AY,
            style: aY,
            text: vY,
            shouldShowDistance: OY,
            DH: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void rY();
          const sY = !gF()(uY.style, aY) || !gF()(uY.text, vY) || uY.shouldShowDistance !== OY;
          uY.position = AY, uY.style = aY, uY.text = vY, uY.shouldShowDistance = OY, sY && rY()
        })), (0, OY.g)("clearDirectionArrow", (DY => {
          let {
            id: FY
          } = DY;
          const AY = YY.current;
          if (null === FY)
            for (const YY in AY) delete AY[YY];
          else delete AY[FY];
          rY()
        })), (0, FY.useEffect)((() => {
          const rY = YY.current,
            DY = (0, uF.s)((() => {
              ! function(YY) {
                const rY = sY.gameBridge.lookup("localPos", null),
                  DY = aF.c - yF,
                  FY = (0, aF.h)() - yF;
                for (const AY in YY) {
                  const IY = YY[AY];
                  if (!IY.DH) continue;
                  const RY = sY.gameBridge.lookup("screenPos", IY.position),
                    OY = RY.x - 50,
                    gY = RY.y - 50;
                  RY.x === IY.lastScreenX && RY.y === IY.lastScreenY || (IY.lastScreenX = RY.x, IY.lastScreenY = RY.y, IY.DH.style.translate = `${RY.x}vw ${RY.y}vh`, IY.chevronElement && (IY.chevronElement.style.rotate = `${fD.c.fastATan2(gY,OY)}rad`));
                  const aY = Math.abs(OY) < DY && Math.abs(gY) < FY;
                  if (aY !== IY.onScreen && (IY.onScreen = aY, IY.DH.classList.toggle("DirectionArrowOnScreen", aY)), IY.shouldShowDistance && IY.distanceElement) {
                    const YY = IY.position[0] - rY[0],
                      DY = IY.position[1] - rY[1],
                      FY = IY.position[2] - rY[2],
                      AY = Math.round(Math.sqrt(YY * YY + DY * DY + FY * FY));
                    (-1 === IY.lastRenderedDist || (0, vF.c)(AY, IY.lastRenderedDist, IY.lastDistUpdateTime)) && (IY.distanceElement.textContent = `${AY}m`, IY.lastRenderedDist = AY, IY.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(rY)
            }));
          return () => {
            DY();
            for (const YY in rY) delete rY[YY]
          }
        }), []);
        const DY = YY.current;
        return (0, aY.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(DY).map((YY => {
            var rY;
            let [FY, AY] = YY;
            const IY = null !== (rY = (0, EY.Ub)(AY.style)) && void 0 !== rY ? rY : "#ffffff";
            return (0, aY.jsxs)("div", {
              ref: YY => {
                DY[FY] && (DY[FY].DH = YY)
              },
              className: "DirectionArrow",
              style: {
                fontSize: AY.style.fontSize,
                opacity: AY.style.opacity
              },
              children: [(0, aY.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: YY => {
                  DY[FY] && (DY[FY].chevronElement = YY)
                },
                children: [(0, aY.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, aY.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, aY.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, aY.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, aY.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: IY
                    }
                  }), (0, aY.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: IY
                    }
                  })]
                })]
              }), (0, aY.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: IY,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${IY}`
                }
              }), AY.text && (0, aY.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: IY,
                  fontWeight: AY.style.fontWeight,
                  fontStyle: AY.style.fontStyle
                },
                children: (0, aY.jsx)(gY.b, {
                  text: AY.text
                })
              }), AY.shouldShowDistance && (0, aY.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: YY => {
                  DY[FY] && (DY[FY].distanceElement = YY)
                },
                style: {
                  color: IY,
                  fontWeight: AY.style.fontWeight,
                  fontStyle: AY.style.fontStyle
                }
              })]
            }, FY)
          }))
        })
      })),
      yF = .5;
    const QF = (0, FY.memo)((function(YY) {
        let {
          isTouchScreen: rY
        } = YY;
        return (0, aY.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, aY.jsx)(mF, {}), rY && (0, aY.jsx)(Lr, {})]
        })
      })),
      oF = {
        readyForNext: 0,
        running: 1
      },
      WF = 50;

    function EF(YY) {
      console.assert(YY.state.current === oF.readyForNext);
      const rY = YY.queue.current,
        DY = YY.foreground.current;
      if (rY.length > 0 && DY) {
        const {
          toFraction: FY,
          toDuration: AY
        } = rY.shift();
        YY.state.current = oF.running, DY.style.transition = `transform ${Math.max(AY-WF,0)}ms linear`, DY.classList.remove("Complete"), YY.timeout.current = setTimeout((() => {
          DY.style.transform = `scaleX(${FY})`, YY.timeout.current = setTimeout((() => {
            1 === FY && DY.classList.add("Complete"), YY.state.current = oF.readyForNext, EF(YY)
          }), Math.max(AY - WF, 0))
        }), WF)
      }
    }

    function mF() {
      const YY = (0, FY.useRef)([]),
        rY = (0, FY.useRef)(oF.readyForNext),
        DY = (0, FY.useRef)(void 0),
        AY = (0, FY.useRef)(null),
        IY = (0, FY.useRef)({
          queue: YY,
          state: rY,
          timeout: DY,
          foreground: AY
        }),
        RY = (0, mY.j)("showProgressBar");
      if ((0, FY.useLayoutEffect)((() => (RY && rY.current === oF.readyForNext && EF(IY.current), () => {
          rY.current = oF.readyForNext, clearTimeout(DY.current), RY && (YY.current.length = 0)
        })), [RY]), (0, OY.g)("progressBarUpdate", (DY => {
          let {
            toFraction: FY,
            toDuration: AY
          } = DY;
          YY.current.push({
            toFraction: FY,
            toDuration: AY
          }), rY.current === oF.readyForNext && EF(IY.current)
        })), !RY) return null;
      return (0, aY.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, aY.jsx)("div", {
          className: "ProgressBarForeground",
          ref: AY,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var VF = DY(36130);
    const SF = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function lF(YY) {
      const {
        isTouchScreen: rY
      } = (0, eY.j)(["isTouchScreen"]);
      (0, FY.useLayoutEffect)((() => {
        if (!rY) return;
        const DY = YY.current,
          FY = document.querySelector(`.${VF.j}`),
          AY = YY => {
            const rY = () => {
              const rY = `${Math.floor(function(YY){const rY=document.documentElement,DY=rY.classList.contains((0,Qr.z)("menu")),FY=rY.style.getPropertyValue((0,Qr.D)("menu"));if(!DY&&""===FY)return YY.getBoundingClientRect().left;rY.classList.remove((0,Qr.z)("menu")),rY.style.removeProperty((0,Qr.D)("menu"));const AY=YY.getBoundingClientRect().left;return DY&&rY.classList.add((0,Qr.z)("menu")),""!==FY&&rY.style.setProperty((0,Qr.D)("menu"),FY),AY}(YY)-DY.getBoundingClientRect().left-4)}px`;
              DY.style.getPropertyValue("--InGameHeaderMaxWidth") !== rY && DY.style.setProperty("--InGameHeaderMaxWidth", rY)
            };
            rY();
            const AY = new ResizeObserver(rY);
            AY.observe(YY), AY.observe(FY), window.addEventListener("resize", rY);
            const IY = () => SF.map((YY => document.documentElement.style.getPropertyValue(YY))).join();
            let RY = IY();
            const OY = new MutationObserver((() => {
              const YY = IY();
              YY !== RY && (RY = YY, rY())
            }));
            OY.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const gY = (0, VY.j)(Qr.e, rY);
            return () => {
              AY.disconnect(), OY.disconnect(), gY(), window.removeEventListener("resize", rY)
            }
          },
          IY = () => FY.querySelector(".TopRightIconsContainer"),
          RY = IY();
        let OY;
        if (RY) OY = AY(RY);
        else {
          const YY = new MutationObserver((() => {
            const rY = IY();
            rY && (YY.disconnect(), OY = AY(rY))
          }));
          YY.observe(FY, {
            childList: !0,
            subtree: !0
          }), OY = () => {
            YY.disconnect()
          }
        }
        return () => {
          OY(), DY.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [rY, YY])
    }
    var TF = DY(3286),
      eF = DY(3284),
      NF = DY(1619),
      BF = DY(1471),
      cF = DY(1623),
      KF = DY(1699),
      HF = DY(1966),
      zF = DY(1159),
      ZF = DY(3857),
      CF = DY(1450),
      fF = DY(1351);
    const jF = 2e4,
      hF = 6e5,
      dF = new Set;

    function JF() {
      const {
        gameEntrySource: YY,
        loadingOverlayVisible: rY
      } = (0, eY.j)(["gameEntrySource", "loadingOverlayVisible"]), DY = (0, TY.f)("connectedGame", (YY => (0, ZF.i)(YY) ? YY.lobbyName : null)), AY = (0, TY.h)("localPlayerAlive"), IY = (0, TY.f)("players", (YY => null !== YY.localId && void 0 !== YY.byId[YY.localId])), [RY, OY] = (0, FY.useState)(null);
      return !rY && AY && IY && null !== DY && RY !== DY && OY(DY), (0, FY.useEffect)((() => {
        if (!(0, ZF.l)(YY) || null === RY || RY !== DY || dF.has(RY)) return;
        const rY = setTimeout((() => {
          dF.add(RY), async function(YY) {
            const rY = await zF.userContextManager.getCurrentUserContext();
            let DY;
            try {
              DY = (await BF.e.getWorldOwnerFriendOffer(rY)).owner
            } catch (AY) {
              return void console.warn("Couldn't ask who owns this world", AY)
            }
            if (!DY || (0, ZF.p)(DY.name, Date.now())) return;
            const FY = DY;
            ! function(YY, rY) {
              const DY = Date.now() + hF;
              let FY = Date.now(),
                AY = 0;
              const IY = () => {
                const RY = Date.now(),
                  OY = sY.gameBridge.latest("connectedGame");
                OY.lobbyName !== YY || RY > DY || (null === OY.websocketUrl ? FY = 1 / 0 : FY === 1 / 0 && !eY.b.get("loadingOverlayVisible") && sY.gameBridge.latest("localPlayerAlive") && (FY = RY + jF), AY = RY < FY || !sY.gameBridge.latest("localPlayerAlive") || eY.b.get("isUiHidden") || eY.b.get("isUiHiddenByCamera") || (0, KF.isTypingInInput)() || eY.b.get("loadingOverlayVisible") || (0, NF.p)() || (0, TF.e)() || (0, fF.k)() ? 0 : AY + 1, AY >= 2 ? rY() : setTimeout(IY, 500))
              };
              IY()
            }(YY, (() => {
              (0, ZF.h)(cF.c.getSocialState().friends, FY.name) || ((0, ZF.m)(FY.name, Date.now()), HF.f.showWorldOwnerOffer(FY), (0, CF.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(RY).catch((YY => {
            console.error("Failed to offer the world's owner as a friend", YY)
          }))
        }), jF);
        return () => {
          clearTimeout(rY)
        }
      }), [YY, RY, DY]), null
    }
    var MF = DY(1780);
    const wF = (0, FY.memo)((function(YY) {
        let {
          durationMs: rY,
          endsAtMs: DY
        } = YY;
        const [, AY] = (0, FY.useReducer)((YY => YY + 1), 0), IY = null === DY ? rY : Math.max(DY - Date.now(), 0);
        return (0, FY.useEffect)((() => {
          if (null === DY || IY <= 0) return;
          const YY = setTimeout(AY, IY - 1e3 * (Math.ceil(IY / 1e3) - 1));
          return () => {
            clearTimeout(YY)
          }
        })), (0, aY.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, fD.gb)(IY)
        })
      })),
      bF = (0, FY.memo)((function() {
        const YY = (0, TY.h)("localEffects");
        return (0, aY.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(YY).map((YY => {
            let [rY, {
              icon: DY,
              displayName: FY,
              durationMs: AY,
              endsAtMs: IY,
              level: RY
            }] = YY;
            return (0, aY.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, aY.jsx)(MF.c, {
                icon: DY,
                className: "EffectInfoIcon"
              }), (0, aY.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== AY ? "0" : "1rem"
                },
                children: [(0, aY.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, aY.jsx)(gY.b, {
                    text: null !== FY && void 0 !== FY ? FY : rY,
                    className: "EffectInfoName SmallTextBold"
                  }), RY > 1 && (0, aY.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, fD.R)(RY)
                  })]
                }), null !== AY && (0, aY.jsx)(wF, {
                  durationMs: AY,
                  endsAtMs: IY
                })]
              })]
            }, rY)
          }))
        })
      }));
    var XF = DY(36132),
      qF = DY(36286),
      pF = DY(213),
      kF = DY(1346),
      GF = DY(2496),
      xF = DY(2595);

    function nF(YY, rY) {
      (0, FY.useLayoutEffect)((() => {
        let rY, DY;
        const FY = requestAnimationFrame((() => {
          DY = setTimeout((() => {
            DY = void 0;
            const FY = YY();
            rY = "function" === typeof FY ? FY : void 0
          }), 0)
        }));
        return () => {
          var YY;
          cancelAnimationFrame(FY), clearTimeout(DY), null === (YY = rY) || void 0 === YY || YY()
        }
      }), rY)
    }
    const PF = [5, 5, 5],
      UF = [7, 4, 4, 4];

    function LF(YY) {
      return YY.reduce(((YY, rY) => YY + rY), 0)
    }

    function tF(YY, rY, DY, FY, AY) {
      const IY = YY.getContext("2d");
      if (!IY) return null;
      const RY = rY.fontFamily,
        OY = rY.fontWeight;
      return YY.width = DY, YY.height = FY, IY.fillStyle = rY.color, IY.textAlign = "center", IY.textBaseline = "middle", IY.font = `${OY} ${AY}px ${RY}`, IY
    }
    const YA = (0, FY.memo)((function(YY) {
      let {
        show: rY
      } = YY;
      const DY = (0, FY.useRef)(null),
        AY = (0, FY.useRef)(null),
        IY = (0, FY.useRef)(null),
        RY = (0, yY.m)();
      return (0, FY.useEffect)((() => RY.whenShown((() => {
        let YY = 0,
          rY = 0,
          DY = 0,
          FY = 0;
        const RY = (0, uF.s)((() => {
          var RY;
          YY++, rY++;
          const OY = performance.now();
          if (OY - DY < 1e3) return;
          const gY = Math.round(YY / (OY - DY) * 1e3);
          if (AY.current = gY, null === (RY = IY.current) || void 0 === RY || RY.call(IY, gY), YY = 0, DY = OY, gY < 55) {
            var aY, vY;
            FY += 1;
            const YY = lY.m.getItem("decreaseLoadDistPromptDeniedCount"),
              [rY, DY] = SY.b.get("minChunkAddDist");
            if (FY >= 15 && function(YY, rY) {
                const DY = sY.gameBridge.lookup("qE", null);
                return null !== DY && (DY.horizontal > YY || DY.vertical > rY)
              }(rY, DY) && (null !== (aY = lY.m.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== aY ? aY : 0) + 432e5 < Date.now() && (null !== (vY = lY.m.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== vY ? vY : 0) < 3) {
              lY.m.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              kF.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((FY => {
                "notificationTornDown" !== FY && (FY ? (sY.gameBridge.send("setChunkAddDistance", {
                  horizontal: rY,
                  vertical: DY
                }), lY.m.setItem("chunkHorizAddDist", rY), lY.m.setItem("chunkVertAddDist", DY), VY.g.vo("updatedChunkLoadDist"), lY.m.setItem("decreaseLoadDistPromptDeniedCount", 0)) : lY.m.setItem("decreaseLoadDistPromptDeniedCount", YY + 1))
              }))
            }
          } else FY = 0
        }));
        let OY = performance.now();
        rY = 0;
        let gY = null,
          aY = !document.hidden;

        function vY() {
          const YY = performance.now() - OY,
            DY = 1e3 * rY / YY;
          aY && (null === gY && (gY = DY), GF.d.setFps(DY, gY)), rY = 0, OY = performance.now()
        }
        let uY = setInterval(vY, xF.b);

        function iY() {
          const YY = aY;
          aY = !document.hidden, !YY && aY && (rY = 0, OY = performance.now(), clearInterval(uY), uY = setInterval(vY, xF.b))
        }
        return document.addEventListener("visibilitychange", iY), () => {
          RY(), document.removeEventListener("visibilitychange", iY), clearInterval(uY)
        }
      }))), [RY]), nF((() => {
        var YY;
        if (!rY || IY.current) return;
        const FY = DY.current,
          RY = window.getComputedStyle(FY.parentElement),
          OY = null !== (YY = window.devicePixelRatio) && void 0 !== YY ? YY : 1,
          gY = parseFloat(RY.fontSize) * OY,
          aY = Math.round(3 * gY),
          vY = Math.round(gY),
          uY = tF(FY, RY, aY, vY, gY);
        if (!uY) return;
        const sY = YY => {
          uY.clearRect(0, 0, FY.width, FY.height), uY.fillText(YY.toString(), FY.width / 2, FY.height / 2)
        };
        IY.current = sY, null !== AY.current && sY(AY.current)
      }), [rY]), (0, aY.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: rY ? "flex" : "none"
        },
        children: [(0, aY.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, aY.jsx)("canvas", {
          className: "FpsCanvas",
          ref: DY,
          width: 48,
          height: 16
        })]
      })
    }));

    function rA(YY) {
      return Math.sign(YY) * Math.round(100 * Math.abs(YY))
    }

    function DA(YY) {
      let {
        getCoordinates: rY,
        showChunkCoords: DY,
        columns: AY
      } = YY;
      const IY = (0, FY.useRef)(null);
      return nF((() => {
        var YY;
        const FY = IY.current,
          RY = window.getComputedStyle(FY.parentElement),
          OY = null !== (YY = window.devicePixelRatio) && void 0 !== YY ? YY : 1,
          gY = parseFloat(RY.fontSize) * OY,
          aY = Math.round(gY * LF(AY)),
          vY = Math.round(gY),
          uY = tF(FY, RY, aY, vY, gY);
        if (!uY) return;
        let iY = !0,
          yY = 0,
          QY = 0,
          oY = 0,
          WY = 0,
          EY = 0,
          mY = 0;
        const VY = () => {
          iY = !0
        };
        document.fonts.load(uY.font).then(VY, VY);
        const SY = () => {
          tF(FY, RY, aY, vY, gY), VY()
        };
        FY.addEventListener("contextrestored", SY);
        const lY = (0, uF.A)((() => {
          var YY, IY, RY, OY, aY, vY;
          const [VY, SY, lY] = rY(), TY = rA(VY), eY = rA(SY), NY = rA(lY);
          let BY = null;
          if (DY) {
            const YY = sY.gameBridge.lookup("localPos", null);
            BY = (0, Yr._)(YY[0], YY[1], YY[2])
          }
          const cY = null !== (YY = null === (IY = BY) || void 0 === IY ? void 0 : IY[0]) && void 0 !== YY ? YY : 0,
            KY = null !== (RY = null === (OY = BY) || void 0 === OY ? void 0 : OY[1]) && void 0 !== RY ? RY : 0,
            HY = null !== (aY = null === (vY = BY) || void 0 === vY ? void 0 : vY[2]) && void 0 !== aY ? aY : 0;
          if (!iY && TY === yY && eY === QY && NY === oY && cY === WY && KY === EY && HY === mY) return;
          iY = !1, yY = TY, QY = eY, oY = NY, WY = cY, EY = KY, mY = HY;
          const zY = [(TY / 100).toFixed(2), (eY / 100).toFixed(2), (NY / 100).toFixed(2)];
          BY && zY.unshift(`${cY} ${KY} ${HY}`), uY.clearRect(0, 0, FY.width, FY.height);
          const ZY = FY.height / 2;
          let CY = 0;
          for (let rY = 0; rY < zY.length; rY++) {
            const YY = gY * AY[rY];
            uY.fillText(zY[rY], CY + YY / 2, ZY, YY), CY += YY
          }
        }));
        return () => {
          lY(), FY.removeEventListener("contextrestored", SY)
        }
      }), [rY, DY, AY]), (0, aY.jsx)("div", {
        className: "CoordinateUI",
        children: (0, aY.jsx)("canvas", {
          ref: IY,
          className: "CoordinateCanvas",
          width: 16 * LF(AY),
          height: 16
        })
      })
    }
    const FA = (0, FY.memo)((function() {
        const YY = (0, FY.useCallback)((() => {
          const YY = sY.gameBridge.lookup("localPos", null);
          return [YY[0], YY[1], YY[2]]
        }), []);
        return (0, aY.jsx)(DA, {
          getCoordinates: YY,
          showChunkCoords: !1,
          columns: PF
        })
      })),
      AA = (0, FY.memo)((function() {
        const YY = (0, FY.useCallback)((() => {
          const YY = sY.gameBridge.lookup("localPos", null),
            rY = pF.d.Jy;
          let DY = YY[0] % rY,
            FY = YY[1] % rY,
            AY = YY[2] % rY;
          return DY < 0 && (DY += rY), FY < 0 && (FY += rY), AY < 0 && (AY += rY), [DY, FY, AY]
        }), []);
        return (0, aY.jsx)(DA, {
          getCoordinates: YY,
          showChunkCoords: !0,
          columns: UF
        })
      }));
    var IA = DY(1914),
      RA = DY(1337),
      OA = DY(1057),
      gA = DY(1231),
      aA = DY(99),
      vA = DY(36149),
      uA = DY(1441),
      sA = DY(2743);
    const iA = (0, FY.memo)((function() {
      const YY = (0, mY.j)("maxAuraLevel");
      return 0 === YY ? null : (0, aY.jsx)(yA, {
        maxLevel: YY
      })
    }));

    function yA(YY) {
      let {
        maxLevel: rY
      } = YY;
      const DY = (0, mY.j)("auraPerLevel"),
        [AY, IY] = (0, FY.useState)((() => {
          var YY;
          return null !== (YY = sY.gameBridge.latest("aura")) && void 0 !== YY ? YY : void 0
        })),
        [RY, OY] = (0, FY.useState)((() => VY(AY))),
        [gY, vY] = (0, FY.useReducer)((YY => YY + 1), 0),
        uY = (0, FY.useRef)(null),
        iY = (0, FY.useRef)([]),
        yY = (0, FY.useRef)({
          width: 0,
          level: 0
        }),
        QY = (0, FY.useRef)(null),
        oY = (0, FY.useRef)(null);

      function EY() {
        if (null !== QY.current) return;
        if (0 === iY.current.length) return;
        const {
          width: YY,
          level: rY
        } = iY.current.shift();
        let DY;
        if (rY !== yY.current.level && rY > yY.current.level !== YY > yY.current.width) {
          const FY = rY > yY.current.level;
          DY = FY ? YY : 100 - YY, uY.current.style.transition = "none", uY.current.style.width = FY ? "0%" : "100%", uY.current.offsetWidth
        } else DY = Math.abs(YY - yY.current.width);
        const FY = 100 * DY / 20;
        uY.current.style.transition = `width ${FY}ms linear`, OY(YY), yY.current = {
          width: YY,
          level: rY
        }, iY.current.length > 0 && (QY.current = setTimeout((() => {
          QY.current = null, EY()
        }), FY))
      }

      function VY(YY) {
        return Math.floor(YY / DY) === rY ? 100 : YY % DY / DY * 100
      }
      return (0, FY.useEffect)((() => () => {
        clearTimeout(QY.current), clearTimeout(oY.current), QY.current = null, oY.current = null
      }), []), (0, TY.c)("aura", (YY => {
        if (oY.current && clearTimeout(oY.current), null === YY) return clearTimeout(QY.current), oY.current = null, QY.current = null, iY.current = [], yY.current = {
          width: 0,
          level: 0
        }, IY(void 0), void OY(0);
        oY.current = setTimeout((() => {
          const rY = Math.floor(AY / DY),
            FY = Math.floor(YY / DY),
            RY = VY(YY);
          YY > AY && vA.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), FY > rY ? (FY % 5 === 0 && vA.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), vY(), iY.current.push({
            width: 100,
            level: rY
          })) : FY < rY && iY.current.push({
            width: 0,
            level: rY
          }), YY === AY && FY === rY || iY.current.push({
            width: RY,
            level: FY
          }), IY(YY), EY()
        }), 50)
      })), (0, WY.e)(), (0, aY.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, aY.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, aY.jsx)(uA.b, {
            showSignal: gY,
            particleElement: (0, aY.jsx)("img", {
              src: (0, sA.g)("glint"),
              alt: ""
            })
          }), (0, aY.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, sA.g)("glint"),
            alt: "aura"
          }), (0, aY.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== AY && void 0 !== AY ? AY : 0) / DY)
          })]
        }), (0, aY.jsx)("div", {
          className: "AuraBar",
          children: (0, aY.jsx)("div", {
            ref: uY,
            className: "AuraBarBackground",
            style: {
              width: `${RY}%`
            }
          })
        })]
      })
    }
    var QA = DY(2335);

    function oA(YY) {
      YY.timed && (YY.endedAnimation = YY.timed.animation, YY.timed = null)
    }
    const WA = (0, FY.memo)((function() {
      const YY = (0, FY.useRef)(null),
        rY = (0, FY.useRef)(null),
        DY = (0, FY.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, OY.g)("middleScreenBarInitiate", (YY => {
        var FY;
        let {
          duration: AY,
          Nr: IY,
          horizBarRemOffset: RY
        } = YY;
        const OY = DY.current;
        oA(OY);
        const gY = rY.current;
        if (!(AY >= 0) || !gY) return;
        null === (FY = OY.endedAnimation) || void 0 === FY || FY.cancel(), OY.endedAnimation = null;
        const aY = gY.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: AY,
          fill: "forwards"
        });
        OY.timed = {
          Nr: IY,
          horizBarRemOffset: RY,
          animation: aY
        }
      })), (0, OY.g)("middleScreenBarRemove", (() => {
        oA(DY.current)
      })), (0, FY.useEffect)((() => {
        const FY = DY.current;
        let AY = Number.NaN,
          IY = Number.NaN,
          RY = Number.NaN;
        return (0, uF.p)((() => {
          var DY, OY, gY, aY;
          const vY = YY.current,
            uY = rY.current;
          if (!vY || !uY) return;
          null !== (DY = FY.timed) && void 0 !== DY && DY.Nr && "finished" === FY.timed.animation.playState && oA(FY), null === (OY = FY.endedAnimation) || void 0 === OY || OY.cancel(), FY.endedAnimation = null;
          let iY = FY.timed ? 1 : 0;
          if (!FY.timed) {
            const YY = sY.gameBridge.lookup("momentumFrac", null);
            iY = YY > 0 ? 1 : 0, YY !== RY && (RY = YY, uY.style.transform = `scaleX(${YY})`)
          }
          const yY = null !== (gY = null === (aY = FY.timed) || void 0 === aY ? void 0 : aY.horizBarRemOffset) && void 0 !== gY ? gY : 0;
          yY === AY && iY === IY || (AY = yY, IY = iY, vY.style.transform = `translateX(calc(-50% + ${yY}rem)) scaleX(${iY})`)
        }))
      }), []), (0, aY.jsx)("div", {
        className: "MiddleScreenBar",
        ref: YY,
        children: (0, aY.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: rY
        })
      })
    }));
    var EA = DY(4252),
      mA = DY(2471);

    function VA() {
      const {
        t: YY
      } = (0, HY.C)(), rY = (0, OY.k)("serverUpdating", null), DY = (0, mA.d)(250, null !== rY);
      return null === rY || DY - rY > 3e4 ? null : (0, aY.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, aY.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: YY("updateWaiting:updatingIn", {
            countdown: (0, EA.q)(rY - DY)
          })
        }), (0, aY.jsx)("div", {
          children: YY("updateWaiting:bringYouBack")
        })]
      })
    }
    var SA = DY(36311),
      lA = DY(1851);
    const TA = [{
        translationKey: "general:interact"
      }],
      eA = (0, FY.memo)((function() {
        const YY = (0, mY.j)("crosshairText"),
          {
            interactPrompt: rY,
            blockText: DY,
            neededTool: AY
          } = (0, TY.h)("crosshairTarget"),
          {
            isTouchScreen: IY
          } = (0, eY.j)(["isTouchScreen"]),
          RY = (0, BY.p)(),
          vY = (0, KY.b)("alt-fire");
        (0, FY.useEffect)((() => {
          sY.gameBridge.send("setCrosshairInteractPrompt", !IY || RY ? "key" : "touch")
        }), [IY, RY]);
        const [uY, iY] = (0, FY.useReducer)((YY => YY + 1), 0);
        (0, OY.g)("customBindingsChanged", iY);
        var yY;
        if (null !== rY && (RY && null !== vY || !IY && null !== (0, lA.p)("alt-fire"))) return (0, aY.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, aY.jsx)(NY.d, {
            noaAction: "alt-fire"
          }), (0, aY.jsx)(gY.b, {
            text: null !== (yY = rY.label) && void 0 !== yY ? yY : TA
          })]
        });
        let QY = null;
        return null !== DY ? QY = DY : null !== YY && "" !== YY ? QY = YY : null !== AY && (QY = [{
          icon: AY,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), QY ? (0, aY.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, aY.jsx)(gY.b, {
            text: QY
          })
        }) : null
      }));
    var NA = DY(2341);
    const BA = (0, FY.memo)((function() {
      var YY;
      const {
        interactPrompt: rY
      } = (0, TY.h)("crosshairTarget"), {
        openInGameMenuName: DY,
        openEverythingMenuName: FY
      } = (0, eY.j)(["openInGameMenuName", "openEverythingMenuName"]), AY = (0, OY.k)("aimingOverlay", "none"), IY = (0, xY.i)(), RY = (0, NA.e)();
      return null === rY || null !== DY || null !== FY || "sniper" === AY || IY || RY ? null : (0, aY.jsx)(cA, {
        label: null !== (YY = rY.label) && void 0 !== YY ? YY : TA
      })
    }));

    function cA(YY) {
      let {
        label: rY
      } = YY;
      const DY = Br(UY.d.Interact, !1);
      return (0, FY.useEffect)((() => (VY.g.vo(mr), () => {
        VY.g.vo(mr)
      })), []), (0, aY.jsx)("div", {
        ref: DY,
        className: "TouchInteractHit",
        children: (0, aY.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, aY.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, aY.jsx)(dY.e, {
              name: "hand-back-point-up"
            })
          }), (0, aY.jsx)(gY.b, {
            text: rY
          })]
        })
      })
    }
    var KA = DY(4349),
      HA = DY(4408);
    const zA = (0, FY.forwardRef)((function(YY, rY) {
        let {
          text: DY,
          className: FY,
          children: AY
        } = YY;
        return DY.hasText ? (0, aY.jsx)("div", {
          ref: rY,
          className: IY()("HudTextPanel", FY, {
            NoBackground: !DY.showBackground
          }),
          children: null !== AY && void 0 !== AY ? AY : (0, aY.jsx)(gY.b, {
            text: DY.content
          })
        }) : null
      })),
      ZA = (0, FY.memo)((function() {
        const YY = (0, mY.l)("middleTextTop"),
          [rY, DY] = (0, FY.useState)(null),
          AY = (0, VF.l)(rY);
        return YY.hasText ? (0, aY.jsx)("div", {
          className: IY()("MiddleTextTopContainer", {
            MiddleTextTopBelow: AY
          }),
          children: (0, aY.jsx)(zA, {
            ref: DY,
            className: "MiddleTextTop",
            text: YY
          })
        }) : null
      })),
      CA = (0, FY.memo)((function() {
        const YY = (0, mY.d)();
        return (0, aY.jsx)(aY.Fragment, {
          children: YY.map(((YY, rY) => (0, aY.jsx)(zA, {
            className: "HeaderChip",
            text: YY
          }, rY)))
        })
      }));
    var fA = DY(3225),
      jA = DY(4171);
    const hA = (0, FY.memo)((function() {
      const {
        t: YY
      } = (0, HY.C)(), [rY, DY] = (0, FY.useState)(!1), AY = (0, FY.useRef)(!1), IY = function(YY) {
        let {
          gameNameWithVariation: rY,
          lobbyName: DY
        } = YY;
        if ((0, OA.l)(rY)) return dA;
        if ((0, gA.K)(DY)) return JA;
        return null
      }((0, TY.h)("connectedGame"));
      if (!IY || rY) return null;
      const RY = jA.d[IY.target];
      return (0, aY.jsx)(hY.g, {
        tooltipInner: (0, aY.jsx)("div", {
          children: YY(RY.reportButtonTooltip)
        }),
        children: (0, aY.jsx)("div", {
          children: (0, aY.jsx)(eD.H, {
            onClick: () => {
              AY.current || (AY.current = !0, (0, jA.g)(IY.reportPolicyIds, RY).then((YY => {
                null !== YY && void 0 !== YY && YY.selectedPolicyId && (sY.gameBridge.send("reportLobbyOrGame", {
                  target: IY.target,
                  Qa: YY.selectedPolicyId,
                  details: YY.oa
                }), DY(!0))
              })).finally((() => {
                AY.current = !1
              })))
            }
          })
        })
      })
    }));
    const dA = {
        target: "customGame",
        reportPolicyIds: fA.e
      },
      JA = {
        target: "lobby",
        reportPolicyIds: fA.i
      };
    var MA = DY(8202),
      wA = DY(36322),
      bA = DY(36324),
      XA = DY(36326),
      qA = DY(36333),
      pA = DY(36356);

    function kA(YY) {
      return YY instanceof Error && GA.has(YY.message) ? YY.message : void 0
    }
    const GA = new Set([pA.c.saveBusy.text, pA.c.saveClosed.text, pA.c.cropBusy.text]);
    let xA = !1;
    async function nA(YY, rY) {
      var DY, FY;
      const {
        files: AY
      } = rY, IY = AY.replayKey();
      if (null === IY) return "none";
      if (xA) throw new Error(pA.c.saveBusy.text);
      const RY = null !== (DY = null === (FY = AY.saveRefusal) || void 0 === FY ? void 0 : FY.call(AY)) && void 0 !== DY ? DY : null;
      if (null !== RY) throw new Error(RY);
      xA = !0;
      try {
        return await async function(YY, rY, DY) {
          const {
            files: FY
          } = rY, AY = () => FY.replayKey() === DY, IY = (YY, rY) => {
            AY() && FY.markSaved(YY, rY)
          };
          let RY = null;
          if (rY.pickerSupported()) {
            try {
              if (RY = await rY.chooseFile(YY ? null : FY.fileHandle()), null === RY) return "Hr"
            } catch (gY) {
              rY.onFallback(gY)
            }
            if (!AY()) throw new Error(pA.c.saveClosed.text)
          }
          const OY = await FY.encode();
          if (null === OY) {
            if (null !== RY) throw new Error(pA.c.saveClosed.text);
            return "none"
          }
          if (null !== RY) try {
            return await rY.write(RY, OY), IY(RY), "written"
          } catch (gY) {
            rY.onFallback(gY)
          }
          return IY(null, rY.download(OY)), "downloaded"
        }(YY, rY, IY)
      } finally {
        xA = !1
      }
    }
    var PA = DY(4097),
      UA = DY(76);
    const LA = [1, 2, 4, 8, 16, 32, 64];

    function tA(YY, rY) {
      return Math.max(0, Math.min(YY, rY))
    }

    function YI(YY, rY, DY) {
      return DY <= rY ? 0 : (YY - rY) / (DY - rY) * 100
    }

    function rI(YY, rY, DY) {
      const FY = DY - rY;
      return Math.round(rY + YY / 100 * FY)
    }

    function DI(YY, rY) {
      const DY = Math.floor(YY / rY / 60),
        FY = Math.floor(YY / rY % 60),
        AY = YY % rY;
      return `${DY.toString().padStart(2,"0")}:${FY.toString().padStart(2,"0")}:${AY.toString().padStart(2,"0")}`
    }

    function FI(YY) {
      return Number.isInteger(YY) || LA.includes(YY) ? `${Math.round(YY)}\xd7` : `${YY.toFixed(1)}\xd7`
    }

    function AI(YY, rY) {
      const DY = LA.indexOf(YY);
      if (-1 !== DY) return "in" === rY ? LA[Math.min(DY + 1, LA.length - 1)] : LA[Math.max(DY - 1, 0)];
      if ("in" === rY) {
        for (const rY of LA)
          if (rY >= YY) return rY;
        return YY
      }
      for (let FY = LA.length - 1; FY >= 0; FY--)
        if (LA[FY] <= YY) return LA[FY];
      return LA[0]
    }

    function II(YY, rY) {
      const DY = rY.getBoundingClientRect();
      if (DY.width <= 0) return 0;
      const FY = (YY - DY.left) / DY.width * 100;
      return Math.max(0, Math.min(100, FY))
    }

    function RI(YY, rY) {
      return rY <= 0 ? 0 : YY / rY * 100
    }

    function OI(YY, rY, DY) {
      const FY = [];
      let AY = Math.ceil(YY / DY) * DY;
      for (; AY <= rY;) FY.push(AY), AY += DY;
      return FY
    }
    var gI = DY(36359);
    const aI = [{
        label: "Linear",
        easing: gI.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: gI.f
      }, {
        label: "Ease Out",
        easing: gI.g
      }, {
        label: "Ease In Out",
        easing: gI.e
      }],
      vI = 200,
      uI = 150;

    function sI(YY) {
      const rY = YY => Number(YY.toFixed(3)).toString();
      return `cubic-bezier(${rY(YY[0])}, ${rY(YY[1])}, ${rY(YY[2])}, ${rY(YY[3])})`
    }

    function iI(YY, rY) {
      return {
        cx: 25 + YY * uI,
        cy: 25 + (1 - rY) * uI
      }
    }

    function yI(YY, rY, DY) {
      const FY = YY - DY.left,
        AY = rY - DY.top;
      return {
        x: fD.c.clamp((FY - 25) / uI, 0, 1),
        y: fD.c.clamp(1 - (AY - 25) / uI, -1, 2)
      }
    }

    function QI(YY, rY, DY, FY, AY) {
      return {
        x: (0, gI.l)(YY, DY, AY),
        y: (0, gI.l)(rY, FY, AY)
      }
    }
    const oI = (0, FY.memo)((function(YY) {
      let {
        value: rY,
        onChange: DY
      } = YY;
      const AY = (0, FY.useRef)(null),
        IY = (0, FY.useRef)(null),
        [RY, OY] = (0, FY.useState)(null),
        gY = (0, FY.useCallback)((() => {
          const YY = AY.current;
          if (!YY) return;
          const DY = YY.getContext("2d");
          if (!DY) return;
          const FY = window.devicePixelRatio || 1;
          YY.width = vI * FY, YY.height = vI * FY, DY.setTransform(FY, 0, 0, FY, 0, 0), DY.clearRect(0, 0, vI, vI), DY.fillStyle = "rgba(38, 52, 93, 0.85)", DY.fillRect(0, 0, vI, vI), DY.beginPath();
          const IY = iI(0, 0),
            OY = iI(1, 1);
          DY.moveTo(IY.cx, IY.cy), DY.lineTo(OY.cx, OY.cy), DY.strokeStyle = "rgba(164, 164, 164, 0.35)", DY.setLineDash([3, 3]), DY.stroke(), DY.setLineDash([]);
          const [gY, aY, vY, uY] = rY, sY = iI(gY, aY), iY = iI(vY, uY);
          DY.strokeStyle = "rgba(252, 211, 115, 0.55)", DY.lineWidth = 1.5, DY.beginPath(), DY.moveTo(IY.cx, IY.cy), DY.lineTo(sY.cx, sY.cy), DY.moveTo(OY.cx, OY.cy), DY.lineTo(iY.cx, iY.cy), DY.stroke(), DY.strokeStyle = "#fcd373", DY.lineWidth = 2, DY.beginPath();
          for (let rY = 0; rY <= 50; rY++) {
            const YY = QI(gY, aY, vY, uY, rY / 50),
              FY = iI(YY.x, YY.y);
            0 === rY ? DY.moveTo(FY.cx, FY.cy) : DY.lineTo(FY.cx, FY.cy)
          }
          DY.stroke();
          const yY = (YY, rY, FY) => {
            DY.beginPath(), DY.arc(YY, rY, FY ? 6 : 5, 0, 2 * Math.PI), DY.fillStyle = FY ? "#ffb914" : "#fcd373", DY.fill(), DY.strokeStyle = "#1a1f2e", DY.lineWidth = 1.5, DY.stroke()
          };
          yY(sY.cx, sY.cy, "p1" === RY), yY(iY.cx, iY.cy, "p2" === RY)
        }), [RY, rY]);
      (0, FY.useEffect)((() => {
        gY()
      }), [gY]);
      const vY = (0, FY.useCallback)(((YY, FY) => {
          const RY = AY.current,
            OY = IY.current;
          if (!RY || !OY) return;
          const gY = RY.getBoundingClientRect(),
            {
              x: aY,
              y: vY
            } = yI(YY, FY, gY);
          DY("p1" === OY ? [aY, vY, rY[2], rY[3]] : [rY[0], rY[1], aY, vY])
        }), [DY, rY]),
        uY = (0, FY.useCallback)((YY => {
          const DY = AY.current;
          if (!DY) return;
          const FY = DY.getBoundingClientRect();
          let {
            x: RY,
            y: gY
          } = yI(YY.clientX, YY.clientY, FY);
          RY = fD.c.clamp(RY, 0, 1), gY = fD.c.clamp(gY, 0, 1);
          const [aY, uY, sY, iY] = rY.map((YY => fD.c.clamp(YY, 0, 1))), yY = Math.hypot(RY - aY, gY - uY), QY = Math.hypot(RY - sY, gY - iY), oY = yY <= QY ? "p1" : "p2";
          ("p1" === oY ? yY : QY) > .12 || (IY.current = oY, OY(oY), DY.setPointerCapture(YY.pointerId), vY(YY.clientX, YY.clientY))
        }), [vY, rY]),
        sY = (0, FY.useCallback)((YY => {
          IY.current && vY(YY.clientX, YY.clientY)
        }), [vY]),
        iY = (0, FY.useCallback)((YY => {
          IY.current = null, OY(null), YY.currentTarget.hasPointerCapture(YY.pointerId) && YY.currentTarget.releasePointerCapture(YY.pointerId)
        }), []);
      return (0, aY.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, aY.jsx)("canvas", {
          ref: AY,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: vI,
            height: vI
          },
          onPointerDown: uY,
          onPointerMove: sY,
          onPointerUp: iY,
          onPointerCancel: iY
        }), (0, aY.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: sI(rY)
        })]
      })
    }));
    var WI = DY(1663),
      EI = DY(1646);
    const mI = 12;

    function VI(YY) {
      return {
        left: YY.left + YY.width / 2,
        top: YY.top - 8
      }
    }

    function SI(YY, rY) {
      const [DY, AY] = (0, FY.useState)(null);
      return (0, FY.useLayoutEffect)((() => {
        const DY = YY.current;
        if (!DY) return;
        const {
          width: FY,
          height: IY
        } = DY.getBoundingClientRect();
        AY(function(YY, rY, DY) {
          const FY = window.innerWidth,
            AY = window.innerHeight,
            IY = rY / 2;
          let RY = YY.left + YY.width / 2;
          RY = Math.max(mI + IY, Math.min(RY, FY - mI - IY));
          const OY = YY.top - 8 - mI,
            gY = AY - YY.bottom - 8 - mI,
            aY = OY < DY && gY >= OY;
          let vY;
          aY ? (vY = YY.bottom + 8, vY + DY > AY - mI && (vY = AY - mI - DY), vY = Math.max(mI, vY)) : (vY = YY.top - 8, vY - DY < mI && (vY = mI + DY));
          return {
            left: RY,
            top: vY,
            placeBelow: aY
          }
        }(rY, FY, IY))
      }), [rY, YY]), DY
    }

    function lI(YY, rY, DY) {
      (0, FY.useEffect)((() => (0, EI.c)("pointerdown", (FY => {
        var AY, IY;
        const RY = FY.target;
        RY instanceof Node && (null !== (AY = YY.current) && void 0 !== AY && AY.contains(RY) || null !== DY && void 0 !== DY && null !== (IY = DY.current) && void 0 !== IY && IY.contains(RY) || (0, WI.j)(RY) || rY())
      }))), [DY, rY, YY])
    }

    function TI(YY) {
      let {
        label: rY,
        value: DY,
        onChange: FY
      } = YY;
      return (0, aY.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, aY.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: rY
        }), (0, aY.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((YY, rY) => (0, aY.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, aY.jsx)("span", {
              children: YY
            }), (0, aY.jsx)("input", {
              type: "number",
              step: "any",
              value: DY[rY],
              onChange: YY => {
                const AY = Number.parseFloat(YY.target.value);
                if (Number.isNaN(AY)) return;
                const IY = [DY[0], DY[1], DY[2]];
                IY[rY] = AY, FY(IY)
              }
            })]
          }, YY)))
        })]
      })
    }
    const eI = (0, FY.memo)((function(YY) {
        var rY, DY, AY;
        let {
          keyframe: RY,
          anchor: OY,
          hasOutgoingSegment: gY,
          onClose: vY,
          onApply: uY,
          onDelete: sY,
          onUseCurrentCamera: iY
        } = YY;
        const yY = (0, FY.useRef)(null),
          QY = SI(yY, OY.rect),
          [oY, WY] = (0, FY.useState)((() => [RY.position[0], RY.position[1], RY.position[2]])),
          [EY, mY] = (0, FY.useState)((() => [RY.direction[0], RY.direction[1], RY.direction[2]])),
          [VY, SY] = (0, FY.useState)((() => RY.easing));
        (0, FY.useEffect)((() => {
          WY([RY.position[0], RY.position[1], RY.position[2]]), mY([RY.direction[0], RY.direction[1], RY.direction[2]]), SY(RY.easing)
        }), [RY]), lI(yY, vY);
        const lY = (0, FY.useCallback)((() => {
            uY({
              Zu: RY.Zu,
              position: oY,
              direction: EY,
              easing: VY
            }), vY()
          }), [EY, VY, RY.Zu, uY, vY, oY]),
          TY = (0, FY.useCallback)((() => {
            sY(RY.Zu), vY()
          }), [RY.Zu, sY, vY]),
          eY = (0, FY.useCallback)((() => {
            const YY = iY();
            YY && (WY([YY.position[0], YY.position[1], YY.position[2]]), mY([YY.direction[0], YY.direction[1], YY.direction[2]]))
          }), [iY]),
          NY = VI(OY.rect);
        return (0, aY.jsxs)("div", {
          ref: yY,
          className: IY()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (rY = null === QY || void 0 === QY ? void 0 : QY.placeBelow) && void 0 !== rY && rY,
            Positioned: null !== QY
          }),
          style: {
            left: `${null!==(DY=null===QY||void 0===QY?void 0:QY.left)&&void 0!==DY?DY:NY.left}px`,
            top: `${null!==(AY=null===QY||void 0===QY?void 0:QY.top)&&void 0!==AY?AY:NY.top}px`
          },
          onPointerDown: YY => {
            YY.stopPropagation()
          },
          children: [(0, aY.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, aY.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, aY.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", OY.Zu]
            })]
          }), (0, aY.jsx)(TI, {
            label: "Position",
            value: oY,
            onChange: WY
          }), (0, aY.jsx)(TI, {
            label: "Direction",
            value: EY,
            onChange: mY
          }), gY && (0, aY.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, aY.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, aY.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: aI.map((YY => {
                const rY = (DY = VY, FY = YY.easing, DY[0] === FY[0] && DY[1] === FY[1] && DY[2] === FY[2] && DY[3] === FY[3]);
                var DY, FY;
                return (0, aY.jsx)(eD.J, {
                  className: IY()("ReplayKeyframePopoverPreset", {
                    Active: rY
                  }),
                  onClick: () => {
                    SY(YY.easing)
                  },
                  children: YY.label
                }, YY.label)
              }))
            }), (0, aY.jsx)(oI, {
              value: VY,
              onChange: SY
            })]
          }), (0, aY.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, aY.jsx)(eD.f, {
              className: "ReplayViewerCompactButton",
              onClick: eY,
              children: "Use current view"
            }), (0, aY.jsx)(eD.n, {
              className: "ReplayViewerCompactButton",
              onClick: lY,
              children: "Apply"
            }), (0, aY.jsx)(eD.D, {
              className: "ReplayViewerCompactButton",
              onClick: TY,
              children: "Delete"
            })]
          })]
        })
      })),
      NI = (0, FY.memo)((function(YY) {
        var rY, DY, AY;
        let {
          anchor: RY,
          hasPlaybackMark: OY,
          onClose: gY,
          onMark: vY,
          onZoom: uY,
          onCrop: sY,
          onDeleteKeyframes: iY,
          onClearMark: yY
        } = YY;
        const QY = (0, FY.useRef)(null),
          oY = SI(QY, RY.rect),
          WY = VI(RY.rect),
          EY = {
            startTick: RY.startTick,
            endTick: RY.endTick
          },
          mY = RY.endTick > RY.startTick;
        return lI(QY, gY), (0, aY.jsx)("div", {
          ref: QY,
          className: IY()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (rY = null === oY || void 0 === oY ? void 0 : oY.placeBelow) && void 0 !== rY && rY,
            Positioned: null !== oY
          }),
          style: {
            left: `${null!==(DY=null===oY||void 0===oY?void 0:oY.left)&&void 0!==DY?DY:WY.left}px`,
            top: `${null!==(AY=null===oY||void 0===oY?void 0:oY.top)&&void 0!==AY?AY:WY.top}px`
          },
          onPointerDown: YY => {
            YY.stopPropagation()
          },
          children: (0, aY.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, aY.jsx)(eD.n, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                vY(EY)
              },
              disabled: !mY,
              children: (0, aY.jsx)("span", {
                children: " Play range "
              })
            }), (0, aY.jsx)(eD.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                uY(EY)
              },
              children: (0, aY.jsx)("span", {
                children: " Zoom "
              })
            }), (0, aY.jsx)(eD.J, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                sY(EY)
              },
              disabled: !mY,
              children: (0, aY.jsx)("span", {
                children: " Crop "
              })
            }), (0, aY.jsx)(eD.J, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                iY(EY)
              },
              children: (0, aY.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), OY && (0, aY.jsx)(eD.J, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                yY()
              },
              children: (0, aY.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      BI = (0, FY.memo)((function(YY) {
        var rY, DY;
        let {
          maxTick: AY,
          displayTick: RY,
          eT: OY,
          cameraKeyframes: gY,
          playbackMark: vY,
          onSeek: uY,
          onPause: sY,
          onScrubTickChange: iY,
          onMoveCameraKeyframe: yY,
          onUpdateCameraKeyframe: QY,
          onDeleteCameraKeyframe: oY,
          onUseCurrentCamera: WY,
          onMarkRange: EY,
          onCropRange: mY,
          onDeleteKeyframesInRange: VY,
          onClearMark: SY,
          zoomLevel: lY,
          onZoomLevelChange: TY
        } = YY;
        const eY = (0, FY.useRef)(null),
          NY = (0, FY.useRef)(null),
          BY = (0, FY.useRef)(!1),
          cY = (0, FY.useRef)(!1),
          KY = (0, FY.useRef)(lY),
          HY = (0, FY.useRef)(null),
          zY = (0, FY.useRef)(null),
          ZY = (0, FY.useRef)(null),
          CY = (0, FY.useRef)(null),
          [fY, jY] = (0, FY.useState)(null),
          [hY, dY] = (0, FY.useState)(RY),
          [JY, MY] = (0, FY.useState)(null),
          [wY, bY] = (0, FY.useState)(null),
          [XY, qY] = (0, FY.useState)(null),
          [pY, kY] = (0, FY.useState)(null),
          GY = (0, FY.useMemo)((() => gY.map((YY => YY.Zu))), [gY]),
          xY = null !== fY && void 0 !== fY ? fY : RY,
          {
            viewStart: nY,
            viewEnd: PY
          } = (0, FY.useMemo)((() => function(YY) {
            const rY = YY.maxTick + 1,
              DY = Math.max(1, Math.ceil(rY / YY.zoomLevel)),
              FY = Math.floor(DY / 2);
            let AY = YY.centerTick - FY;
            return AY = Math.max(0, Math.min(AY, YY.maxTick - DY + 1)), {
              viewStart: AY,
              viewEnd: Math.min(YY.maxTick, AY + DY - 1)
            }
          }({
            maxTick: AY,
            zoomLevel: lY,
            centerTick: hY
          })), [AY, lY, hY]);
        (0, FY.useEffect)((() => {
          if (null !== fY || null !== zY.current || null !== ZY.current || null !== CY.current) return;
          if (BY.current) return void(BY.current = !1);
          if (cY.current) return void(cY.current = !1);
          const YY = KY.current !== lY;
          KY.current = lY, YY && dY(RY)
        }), [lY, RY, fY]);
        const UY = (0, FY.useCallback)((YY => {
            let rY = tA(YY, AY);
            return vY && (rY = Math.max(vY.inTick, Math.min(rY, vY.outTick))), rY
          }), [AY, vY]),
          LY = (0, FY.useCallback)(((YY, rY) => {
            const DY = UY(YY);
            uY(DY), rY && dY(DY)
          }), [UY, uY]),
          tY = (0, FY.useCallback)(((YY, rY) => {
            const DY = UY(YY);
            jY(DY), iY(DY), LY(DY, rY)
          }), [UY, LY, iY]),
          Yr = (0, FY.useCallback)((() => {
            jY((YY => (null !== YY && dY(YY), null))), iY(null)
          }), [iY]),
          rr = (0, FY.useCallback)((() => {
            qY(null), kY(null)
          }), []),
          Dr = (0, FY.useCallback)((YY => {
            const rY = eY.current;
            if (!rY) return 0;
            return tA(rI(II(YY, rY), nY, PY), AY)
          }), [AY, PY, nY]),
          Fr = (0, FY.useCallback)((YY => {
            const rY = NY.current;
            if (!rY) return 0;
            return tA(rI(II(YY, rY), 0, AY), AY)
          }), [AY]),
          Ar = (0, FY.useMemo)((() => {
            if (!JY) return [...GY];
            const YY = GY.filter((YY => YY !== JY.fromTick));
            return YY.push(JY.previewTick), YY.sort(((YY, rY) => YY - rY)), YY
          }), [GY, JY]),
          Ir = (0, FY.useMemo)((() => {
            var YY;
            return wY && null !== (YY = gY.find((YY => YY.Zu === wY.Zu))) && void 0 !== YY ? YY : null
          }), [gY, wY]),
          Rr = (0, FY.useMemo)((() => !!Ir && gY.some((YY => YY.Zu > Ir.Zu))), [gY, Ir]);
        (0, FY.useEffect)((() => {
          wY && !Ir && bY(null)
        }), [wY, Ir]), (0, FY.useEffect)((() => {
          if (!pY) return () => {};
          const YY = YY => {
            "Escape" === YY.key && rr()
          };
          return window.addEventListener("keydown", YY), () => {
            window.removeEventListener("keydown", YY)
          }
        }), [rr, pY]);
        const Or = (0, FY.useCallback)(((YY, rY) => {
            rr(), sY(), uY(YY, {
              ignorePlaybackMark: !0
            }), bY({
              Zu: YY,
              rect: rY.getBoundingClientRect()
            })
          }), [rr, sY, uY]),
          gr = (0, FY.useCallback)(((YY, rY) => DY => {
            0 === DY.button && (DY.stopPropagation(), bY(null), rr(), sY(), HY.current = {
              fromTick: YY,
              startX: DY.clientX,
              startY: DY.clientY,
              didDrag: !1,
              track: rY
            }, MY({
              fromTick: YY,
              previewTick: YY,
              track: rY
            }), DY.currentTarget.setPointerCapture(DY.pointerId))
          }), [rr, sY]),
          ar = (0, FY.useCallback)((YY => {
            if (!JY) return;
            YY.stopPropagation();
            const rY = HY.current;
            if (rY && !rY.didDrag) {
              const DY = YY.clientX - rY.startX,
                FY = YY.clientY - rY.startY;
              Math.hypot(DY, FY) > 5 && (rY.didDrag = !0)
            }
            const DY = "detail" === JY.track ? Dr(YY.clientX) : Fr(YY.clientX);
            DY !== JY.previewTick && MY({
              ...JY,
              previewTick: DY
            })
          }), [JY, Dr, Fr]),
          vr = (0, FY.useCallback)((YY => {
            if (!JY) return;
            YY.stopPropagation();
            const rY = HY.current,
              DY = "detail" === JY.track ? Dr(YY.clientX) : Fr(YY.clientX);
            rY && !rY.didDrag ? Or(rY.fromTick, YY.currentTarget) : DY !== JY.fromTick && yY(JY.fromTick, DY), MY(null), HY.current = null, YY.currentTarget.releasePointerCapture(YY.pointerId)
          }), [JY, yY, Or, Dr, Fr]),
          ur = (0, FY.useCallback)((YY => {
            if (0 !== YY.button) return;
            bY(null), sY();
            const rY = Dr(YY.clientX);
            zY.current = {
              pointerId: YY.pointerId,
              startX: YY.clientX,
              startY: YY.clientY,
              startTick: rY,
              currentTick: rY,
              didSelect: !1
            }, qY(null), kY(null), YY.currentTarget.setPointerCapture(YY.pointerId)
          }), [sY, Dr]),
          sr = (0, FY.useCallback)((YY => {
            const rY = zY.current;
            if (!rY || rY.pointerId !== YY.pointerId) return;
            const DY = Dr(YY.clientX);
            if (rY.currentTick = DY, !rY.didSelect) {
              const DY = YY.clientX - rY.startX,
                FY = YY.clientY - rY.startY;
              if (Math.hypot(DY, FY) <= 5) return;
              rY.didSelect = !0
            }
            const FY = Math.min(rY.startTick, DY),
              AY = Math.max(rY.startTick, DY);
            qY({
              startTick: FY,
              endTick: AY
            })
          }), [Dr]),
          ir = (0, FY.useCallback)((YY => {
            const rY = zY.current;
            if (!rY || rY.pointerId !== YY.pointerId) return;
            if (zY.current = null, YY.currentTarget.releasePointerCapture(YY.pointerId), !rY.didSelect) return rr(), void LY(rY.startTick, !0);
            const DY = Dr(YY.clientX),
              FY = Math.min(rY.startTick, DY),
              AY = Math.max(rY.startTick, DY),
              IY = {
                startTick: FY,
                endTick: AY
              };
            qY(IY);
            const RY = eY.current;
            if (!RY) return;
            const OY = RY.getBoundingClientRect(),
              gY = YI(FY, nY, PY) / 100,
              aY = YI(AY, nY, PY) / 100,
              vY = OY.left + gY * OY.width,
              uY = OY.left + aY * OY.width;
            kY({
              ...IY,
              rect: new DOMRect(vY, OY.top, Math.max(uY - vY, 1), OY.height)
            })
          }), [rr, LY, Dr, PY, nY]),
          yr = (0, FY.useCallback)((YY => rY => {
            if (0 !== rY.button) return;
            rY.stopPropagation(), bY(null), rr(), sY(), ZY.current = {
              pointerId: rY.pointerId,
              track: YY
            }, rY.currentTarget.setPointerCapture(rY.pointerId);
            const DY = "detail" === YY ? Dr(rY.clientX) : Fr(rY.clientX);
            tY(DY, !1)
          }), [rr, sY, tY, Dr, Fr]),
          Qr = (0, FY.useCallback)((YY => {
            const rY = ZY.current;
            if (!rY || rY.pointerId !== YY.pointerId) return;
            YY.stopPropagation();
            const DY = "detail" === rY.track ? Dr(YY.clientX) : Fr(YY.clientX);
            tY(DY, !1)
          }), [tY, Dr, Fr]),
          or = (0, FY.useCallback)((YY => {
            const rY = ZY.current;
            rY && rY.pointerId === YY.pointerId && (YY.stopPropagation(), ZY.current = null, YY.currentTarget.releasePointerCapture(YY.pointerId), Yr())
          }), [Yr]),
          Wr = (0, FY.useCallback)((YY => {
            0 === YY.button && (rr(), sY(), CY.current = {
              pointerId: YY.pointerId
            }, YY.currentTarget.setPointerCapture(YY.pointerId), tY(Fr(YY.clientX), !0))
          }), [rr, sY, tY, Fr]),
          Er = (0, FY.useCallback)((YY => {
            const rY = CY.current;
            rY && rY.pointerId === YY.pointerId && tY(Fr(YY.clientX), !0)
          }), [tY, Fr]),
          mr = (0, FY.useCallback)((YY => {
            const rY = CY.current;
            rY && rY.pointerId === YY.pointerId && (CY.current = null, YY.currentTarget.releasePointerCapture(YY.pointerId), Yr())
          }), [Yr]),
          Vr = (0, FY.useCallback)((YY => {
            const rY = Math.max(1, YY.endTick - YY.startTick + 1),
              DY = AY + 1,
              FY = DY / rY,
              IY = Math.max(1, Math.ceil(DY / FY)),
              RY = YY.startTick + Math.floor((IY - 1) / 2);
            cY.current = !0, KY.current = FY, dY(tA(RY, AY)), TY(FY), rr()
          }), [rr, AY, TY]),
          Sr = (0, FY.useCallback)((YY => {
            EY(YY), rr()
          }), [rr, EY]),
          lr = (0, FY.useCallback)((YY => {
            mY(YY), rr()
          }), [rr, mY]),
          Tr = (0, FY.useCallback)((YY => {
            VY(YY), rr()
          }), [rr, VY]),
          er = (0, FY.useCallback)((() => {
            SY(), rr()
          }), [rr, SY]);
        (0, FY.useEffect)((() => {
          const YY = eY.current;
          if (!YY) return () => {};
          const rY = rY => {
            rY.preventDefault();
            const DY = tA(rI(II(rY.clientX, YY), nY, PY), AY),
              FY = rY.deltaY < 0 ? "in" : "out",
              IY = AI(lY, FY);
            IY !== lY && (BY.current = !0, dY(DY), TY(IY))
          };
          return YY.addEventListener("wheel", rY, {
            passive: !1
          }), () => {
            YY.removeEventListener("wheel", rY)
          }
        }), [AY, TY, PY, nY, lY]);
        const Nr = YI(xY, nY, PY),
          Br = RI(xY, AY),
          cr = RI(nY, AY),
          Kr = AY > 0 ? RI(PY, AY) : 100,
          Hr = null !== vY,
          zr = null !== (rY = null === vY || void 0 === vY ? void 0 : vY.inTick) && void 0 !== rY ? rY : 0,
          Zr = null !== (DY = null === vY || void 0 === vY ? void 0 : vY.outTick) && void 0 !== DY ? DY : AY,
          Cr = RI(zr, AY),
          fr = Math.max(RI(Zr, AY) - Cr, 0),
          jr = YI(Math.max(zr, nY), nY, PY),
          hr = YI(Math.min(Zr, PY), nY, PY),
          dr = Math.max(hr - jr, 0),
          Jr = Hr && Zr >= nY && zr <= PY,
          Mr = YI(zr, nY, PY),
          wr = YI(Zr, nY, PY),
          br = Hr && zr >= nY && zr <= PY,
          Xr = Hr && Zr >= nY && Zr <= PY,
          qr = RI(zr, AY),
          pr = RI(Zr, AY),
          kr = null !== XY && void 0 !== XY ? XY : pY ? {
            startTick: pY.startTick,
            endTick: pY.endTick
          } : null,
          Gr = kr ? YI(Math.max(kr.startTick, nY), nY, PY) : 0,
          xr = kr ? YI(Math.min(kr.endTick, PY), nY, PY) : 0,
          nr = Math.max(xr - Gr, 0),
          Pr = null !== kr && kr.endTick >= nY && kr.startTick <= PY,
          Ur = (0, FY.useMemo)((() => OI(0, AY, OY)), [AY, OY]),
          Lr = (0, FY.useMemo)((() => OI(nY, PY, OY)), [nY, PY, OY]),
          tr = (0, FY.useMemo)((() => Ar.filter((YY => YY >= nY && YY <= PY))), [Ar, PY, nY]),
          YD = (0, FY.useCallback)(((YY, rY, DY) => {
            const FY = "detail" === rY ? YI(YY, nY, PY) : RI(YY, AY),
              RY = null !== JY && DY === JY.fromTick,
              OY = null !== wY && wY.Zu === DY;
            return (0, aY.jsx)("button", {
              type: "button",
              className: IY()("ReplayTimelineCameraKeyframeMarker", "detail" === rY ? "Detail" : "Overview", {
                Dragging: RY,
                Selected: OY
              }),
              style: {
                left: `${FY}%`
              },
              onPointerDown: gr(DY, rY),
              onPointerMove: ar,
              onPointerUp: vr,
              onPointerCancel: vr,
              "aria-label": `Camera keyframe at tick ${DY}`
            }, `cam-${rY}-${DY}`)
          }), [gr, wY, vr, JY, AY, ar, PY, nY]),
          rD = (0, FY.useCallback)((YY => JY && YY === JY.previewTick ? JY.fromTick : YY), [JY]);
        return AY <= 0 ? null : (0, aY.jsxs)("div", {
          className: "ReplayTimeline",
          children: [wY && Ir && (0, UA.createPortal)((0, aY.jsx)(eI, {
            keyframe: Ir,
            anchor: wY,
            hasOutgoingSegment: Rr,
            onClose: () => {
              bY(null)
            },
            onApply: QY,
            onDelete: oY,
            onUseCurrentCamera: WY
          }), document.body), pY && (0, UA.createPortal)((0, aY.jsx)(NI, {
            anchor: pY,
            hasPlaybackMark: Hr,
            onClose: rr,
            onMark: Sr,
            onZoom: Vr,
            onCrop: lr,
            onDeleteKeyframes: Tr,
            onClearMark: er
          }), document.body), (0, aY.jsxs)("div", {
            className: IY()("ReplayTimelineOverviewSection", {
              Hidden: lY <= 1
            }),
            children: [(0, aY.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, aY.jsxs)("div", {
              ref: NY,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Wr,
              onPointerMove: Er,
              onPointerUp: mr,
              onPointerCancel: mr,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": AY,
              "aria-valuenow": xY,
              tabIndex: 0,
              children: [Ur.map((YY => {
                const rY = RI(YY, AY);
                return (0, aY.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${rY}%`
                  }
                }, YY)
              })), Hr && (0, aY.jsxs)(aY.Fragment, {
                children: [(0, aY.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Cr}%`,
                    width: `${fr}%`
                  }
                }), (0, aY.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${qr}%`
                  },
                  "aria-hidden": !0
                }), (0, aY.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${pr}%`
                  },
                  "aria-hidden": !0
                })]
              }), Ar.map((YY => YD(YY, "overview", rD(YY)))), (0, aY.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${cr}%`,
                  width: `${Math.max(Kr-cr,.5)}%`
                }
              }), (0, aY.jsx)("button", {
                type: "button",
                className: IY()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== fY
                }),
                style: {
                  left: `${Br}%`
                },
                onPointerDown: yr("overview"),
                onPointerMove: Qr,
                onPointerUp: or,
                onPointerCancel: or,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, aY.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, aY.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, aY.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, aY.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [DI(nY, OY), " \u2013 ", DI(PY, OY), lY > 1 && (0, aY.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: FI(lY)
                })]
              })]
            }), (0, aY.jsxs)("div", {
              ref: eY,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: ur,
              onPointerMove: sr,
              onPointerUp: ir,
              onPointerCancel: ir,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": nY,
              "aria-valuemax": PY,
              "aria-valuenow": xY,
              tabIndex: 0,
              children: [Lr.map((YY => {
                const rY = YI(YY, nY, PY);
                return (0, aY.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${rY}%`
                  }
                }, YY)
              })), Jr && (0, aY.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${jr}%`,
                  width: `${dr}%`
                }
              }), br && (0, aY.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${Mr}%`
                },
                "aria-label": `Play range start at tick ${zr}`
              }), Xr && (0, aY.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${wr}%`
                },
                "aria-label": `Play range end at tick ${Zr}`
              }), Pr && kr && (0, aY.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Gr}%`,
                  width: `${nr}%`
                }
              }), tr.map((YY => YD(YY, "detail", rD(YY)))), (0, aY.jsx)("button", {
                type: "button",
                className: IY()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== fY
                }),
                style: {
                  left: `${Nr}%`
                },
                onPointerDown: yr("detail"),
                onPointerMove: Qr,
                onPointerUp: or,
                onPointerCancel: or,
                "aria-label": "Scrub playhead"
              })]
            }), (0, aY.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, aY.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      cI = (0, FY.memo)((function(YY) {
        let {
          enabled: rY
        } = YY;
        const DY = (0, FY.useRef)(!1),
          AY = (0, FY.useRef)(null),
          [RY, OY] = (0, FY.useState)(!1),
          gY = (0, FY.useCallback)((YY => {
            rY && 0 === YY.button && (DY.current = !0, OY(!0), AY.current = {
              x: YY.clientX,
              y: YY.clientY
            }, YY.currentTarget.setPointerCapture(YY.pointerId))
          }), [rY]),
          vY = (0, FY.useCallback)((YY => {
            if (!rY || !DY.current || !AY.current) return;
            const FY = YY.clientX - AY.current.x,
              IY = YY.clientY - AY.current.y;
            AY.current = {
              x: YY.clientX,
              y: YY.clientY
            }, sY.gameBridge.send("dragReplayCamera", {
              dx: FY,
              dy: IY
            })
          }), [rY]),
          uY = (0, FY.useCallback)((YY => {
            DY.current && (DY.current = !1, OY(!1), AY.current = null, YY.currentTarget.releasePointerCapture(YY.pointerId))
          }), []);
        return rY ? (0, aY.jsx)("div", {
          className: IY()("ReplayViewerCameraDragSurface", {
            Dragging: RY
          }),
          onPointerDown: gY,
          onPointerMove: vY,
          onPointerUp: uY,
          onPointerCancel: uY,
          "aria-hidden": !0
        }) : null
      }));
    var KI = DY(36366),
      HI = DY(36370);
    const zI = (0, FY.memo)((function(YY) {
        var rY, DY, AY;
        let {
          anchorRect: RY,
          anchorRef: gY,
          onClose: vY
        } = YY;
        const uY = (0, FY.useRef)(null),
          sY = SI(uY, RY),
          [iY, yY] = (0, FY.useState)(HI.e),
          QY = (0, FY.useMemo)((() => Object.values(iY).every((YY => YY))), [iY]);
        (0, OY.g)("replayViewer|uiVisibilityChanged", (() => {
          yY((0, HI.e)())
        })), lI(uY, vY, gY);
        const oY = (0, FY.useCallback)(((YY, rY) => {
            (0, HI.g)(YY, rY), yY((0, HI.e)())
          }), []),
          WY = (0, FY.useCallback)((YY => {
            for (const {
                group: rY
              }
              of KI.f)(0, HI.g)(rY, YY);
            yY((0, HI.e)())
          }), []),
          EY = VI(RY);
        return (0, UA.createPortal)((0, aY.jsxs)("div", {
          ref: uY,
          className: IY()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (rY = null === sY || void 0 === sY ? void 0 : sY.placeBelow) && void 0 !== rY && rY,
            Positioned: null !== sY
          }),
          style: {
            left: `${null!==(DY=null===sY||void 0===sY?void 0:sY.left)&&void 0!==DY?DY:EY.left}px`,
            top: `${null!==(AY=null===sY||void 0===sY?void 0:sY.top)&&void 0!==AY?AY:EY.top}px`
          },
          onPointerDown: YY => {
            YY.stopPropagation()
          },
          children: [(0, aY.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, aY.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, aY.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, aY.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, aY.jsx)("input", {
                type: "checkbox",
                checked: QY,
                onChange: YY => {
                  WY(YY.target.checked)
                }
              }), (0, aY.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), KI.f.map((YY => {
              let {
                group: rY,
                label: DY
              } = YY;
              return (0, aY.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, aY.jsx)("input", {
                  type: "checkbox",
                  checked: iY[rY],
                  onChange: YY => {
                    oY(rY, YY.target.checked)
                  }
                }), (0, aY.jsx)("span", {
                  children: DY
                })]
              }, rY)
            }))]
          })]
        }), document.body)
      })),
      ZI = (0, FY.memo)((function(YY) {
        let {
          disabled: rY
        } = YY;
        const DY = (0, FY.useRef)(null),
          [AY, IY] = (0, FY.useState)(!1),
          [RY, OY] = (0, FY.useState)(null),
          gY = (0, FY.useCallback)((() => {
            DY.current && (OY(DY.current.getBoundingClientRect()), IY((YY => !YY)))
          }), []),
          vY = (0, FY.useCallback)((() => {
            IY(!1)
          }), []);
        return (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)("div", {
            ref: DY,
            children: (0, aY.jsx)(eD.f, {
              className: "ReplayViewerActionButton",
              onClick: gY,
              disabled: rY,
              children: (0, aY.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), AY && RY && (0, aY.jsx)(zI, {
            anchorRect: RY,
            anchorRef: DY,
            onClose: vY
          })]
        })
      })),
      CI = ["freeCamUp", "freeCamDown"];

    function fI(YY, rY) {
      sY.gameBridge.send("holdReplayFreecamVertical", {
        action: YY,
        ja: rY
      })
    }
    const jI = (0, FY.memo)((function() {
        (0, FY.useEffect)((() => () => {
          ! function() {
            sY.gameBridge.send("moveReplayFreecam", null);
            for (const YY of CI) fI(YY, !1)
          }()
        }), []);
        const YY = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("moveReplayFreecam", YY)
          }), []),
          rY = (0, FY.useCallback)((YY => ({
            onTouchStart: rY => {
              rY.preventDefault(), rY.stopPropagation(), fI(YY, !0)
            },
            onTouchEnd: rY => {
              rY.preventDefault(), rY.stopPropagation(), fI(YY, !1)
            },
            onTouchCancel: rY => {
              rY.preventDefault(), rY.stopPropagation(), fI(YY, !1)
            }
          })), []);
        return (0, aY.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, aY.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, aY.jsx)(lr, {
              onMove: YY,
              mode: "pinned"
            })
          }), (0, aY.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, aY.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...rY("freeCamUp"),
              children: (0, aY.jsx)(dY.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, aY.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...rY("freeCamDown"),
              children: (0, aY.jsx)(dY.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      hI = [],
      dI = (0, FY.memo)((function() {
        const YY = (0, xY.i)();
        return (0, TY.c)("replayViewerRequested", (YY => {
          (0, xY.f)("toggle" === YY ? !(0, xY.c)() : "open" === YY)
        })), YY ? (0, aY.jsx)(JI, {}) : null
      })),
      JI = (0, FY.memo)((function() {
        var YY, rY, DY, AY, RY, OY, gY, vY, uY, iY, yY, QY;
        const oY = FY.useRef(null),
          [WY, EY] = (0, FY.useState)(null),
          [mY, VY] = (0, FY.useState)(1),
          [SY, lY] = (0, FY.useState)(null),
          [BY, cY] = (0, FY.useState)(!1),
          {
            isTouchScreen: KY
          } = (0, eY.j)(["isTouchScreen"]),
          HY = (0, TY.h)("replay"),
          zY = (0, TY.h)("replayEdits"),
          ZY = null !== HY,
          CY = null !== (YY = null === HY || void 0 === HY ? void 0 : HY.Zu) && void 0 !== YY ? YY : 0,
          fY = null !== (rY = null === HY || void 0 === HY ? void 0 : HY.totalTicks) && void 0 !== rY ? rY : 0,
          jY = Math.max(0, fY - 1),
          JY = null !== (DY = null === HY || void 0 === HY ? void 0 : HY.playing) && void 0 !== DY && DY,
          MY = null !== (AY = null === HY || void 0 === HY ? void 0 : HY.speed) && void 0 !== AY ? AY : 1,
          wY = null !== (RY = null === HY || void 0 === HY ? void 0 : HY.eT) && void 0 !== RY ? RY : 20,
          bY = null !== SY && void 0 !== SY ? SY : CY,
          XY = null !== (OY = null === HY || void 0 === HY ? void 0 : HY.freecam) && void 0 !== OY && OY,
          qY = null !== (gY = null === HY || void 0 === HY ? void 0 : HY.cameraMode) && void 0 !== gY ? gY : "recording",
          pY = null !== (vY = null === zY || void 0 === zY ? void 0 : zY.cameraKeyframes) && void 0 !== vY ? vY : hI,
          kY = null !== (uY = null === zY || void 0 === zY ? void 0 : zY.playbackMark) && void 0 !== uY ? uY : null,
          GY = null !== (iY = null === zY || void 0 === zY ? void 0 : zY.fileName) && void 0 !== iY ? iY : null,
          nY = null !== (yY = null === zY || void 0 === zY ? void 0 : zY.unsavedChanges) && void 0 !== yY && yY,
          PY = null !== (QY = null === zY || void 0 === zY ? void 0 : zY.suggestSaveAs) && void 0 !== QY && QY,
          UY = (0, TY.h)("replayVideoExporting"),
          LY = !UY && ZY && ("freecam" === qY || ("recording" === qY || "keyframe" === qY) && !JY),
          tY = KY && ZY && "freecam" === qY && !UY && !BY;
        (0, PA.b)(!0, !0, "ReplayViewerOverlay"), (0, FY.useEffect)((() => {
          sY.gameBridge.send("syncReplayCameraMode", null)
        }), [XY]);
        const Yr = (0, FY.useCallback)(((YY, rY) => {
            sY.gameBridge.send("seekReplay", {
              Zu: YY,
              ignorePlaybackMark: null === rY || void 0 === rY ? void 0 : rY.ignorePlaybackMark
            })
          }), []),
          rr = (0, FY.useCallback)((() => {
            sY.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Dr = (0, FY.useCallback)(((YY, rY) => {
            sY.gameBridge.send("moveReplayCameraKeyframe", {
              from: YY,
              to: rY
            })
          }), []),
          Fr = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("setReplayCameraKeyframe", YY)
          }), []),
          Ar = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("deleteReplayCameraKeyframes", {
              start: YY,
              end: YY
            })
          }), []),
          Ir = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("deleteReplayCameraKeyframes", {
              start: YY.startTick,
              end: YY.endTick
            })
          }), []),
          Rr = (0, FY.useCallback)((() => sY.gameBridge.lookup("replayCamera", null)), []),
          Or = (0, FY.useCallback)((YY => {
            lY(YY)
          }), []),
          gr = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("setReplayPlaybackMark", {
              inTick: YY.startTick,
              outTick: YY.endTick
            })
          }), []),
          ar = (0, FY.useCallback)((() => {
            sY.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          vr = (0, FY.useCallback)((YY => {
            const rY = sY.gameBridge.latest("replay");
            if (null === rY || YY.endTick <= YY.startTick) return;
            const DY = YY.startTick,
              FY = YY.endTick;
            kF.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((YY => {
              var AY;
              if (!0 !== YY) return;
              if ((null === (AY = sY.gameBridge.latest("replay")) || void 0 === AY ? void 0 : AY.id) !== rY.id) return;
              sY.gameBridge.send("cropReplay", {
                start: DY,
                end: FY
              }) && (lY(null), VY(1))
            }))
          }), []),
          ur = (0, FY.useCallback)(((YY, rY) => {
            EY(null), VY(1), lY(null), (0, wA.b)().open(YY, rY).catch((YY => {
              console.error(YY), EY(YY instanceof Error ? YY.message : "Failed to parse recording")
            }))
          }), []),
          sr = (0, FY.useCallback)(((YY, rY) => {
            null !== sY.gameBridge.latest("connectedGame").websocketUrl ? kF.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((DY => {
              !0 === DY && ur(YY, rY)
            })) : ur(YY, rY)
          }), [ur]),
          ir = (0, FY.useCallback)((YY => {
            var rY;
            const DY = null === (rY = YY.target.files) || void 0 === rY ? void 0 : rY[0];
            if (YY.target.value = "", !DY) return;
            const FY = new FileReader;
            FY.onload = () => {
              sr(new Uint8Array(FY.result), {
                fileName: DY.name
              })
            }, FY.onerror = () => {
              EY("Failed to read file")
            }, FY.readAsArrayBuffer(DY)
          }), [sr]),
          yr = (0, FY.useCallback)((() => {
            const YY = () => {
              var YY;
              null === (YY = oY.current) || void 0 === YY || YY.click()
            };
            (0, qA.h)() ? (0, qA.e)().then((YY => {
              YY && sr(YY.bytes, {
                fileHandle: YY.handle
              })
            })).catch((rY => {
              console.error(rY), YY()
            })): YY()
          }), [sr]),
          Qr = (0, FY.useCallback)((async function() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let rY;
            try {
              rY = await nA(YY, {
                files: (0, wA.b)(),
                pickerSupported: qA.h,
                chooseFile: qA.d,
                write: qA.k,
                download: XA.h,
                onFallback: console.error
              })
            } catch (DY) {
              return void(YY => {
                console.error(YY), kF.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: kA(YY),
                  confirmText: "OK"
                })
              })(DY)
            }
            "written" !== rY && "downloaded" !== rY || (() => {
              const YY = kF.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                YY.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          or = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("replayAction", YY)
          }), []),
          Wr = (0, FY.useCallback)((YY => {
            VY((rY => AI(rY, YY)))
          }), []),
          Er = (0, FY.useCallback)((YY => {
            if (!sY.gameBridge.latest("replayVideoExporting")) switch (YY) {
              case "replayLoad":
                yr();
                break;
              case "replaySave":
                Qr(!1);
                break;
              case "replaySaveAs":
                Qr(!0);
                break;
              case "replayTimelineZoomIn":
                Wr("in");
                break;
              case "replayTimelineZoomOut":
                Wr("out")
            }
          }), [yr, Qr, Wr]);
        (0, TY.c)("replayUiActionRequested", Er);
        const mr = (0, FY.useCallback)((YY => {
            sY.gameBridge.send("setReplayCameraMode", YY)
          }), []),
          Vr = ZY ? eD.f : eD.n,
          Sr = nY && !PY ? eD.n : eD.f,
          lr = nY && PY ? eD.n : eD.f;
        return (0, aY.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, aY.jsx)(cI, {
            enabled: LY
          }), tY && (0, aY.jsx)(jI, {}), (0, aY.jsx)("input", {
            ref: oY,
            type: "file",
            accept: XA.d,
            className: "ReplayViewerFileInput",
            onChange: ir
          }), (0, aY.jsxs)("div", {
            className: IY()("ReplayViewerBar", {
              Collapsed: BY
            }),
            children: [(0, aY.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                BY ? cY(!1) : ZY ? cY(!0) : (0, xY.b)()
              },
              "aria-expanded": !BY,
              "aria-label": BY ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, aY.jsx)(dY.e, {
                name: BY ? "angle-up" : "angle-down"
              })
            }), !BY && (0, aY.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [ZY && fY > 0 && (0, aY.jsx)(BI, {
                maxTick: jY,
                displayTick: bY,
                eT: wY,
                cameraKeyframes: pY,
                playbackMark: kY,
                onSeek: Yr,
                onPause: rr,
                onScrubTickChange: Or,
                onMoveCameraKeyframe: Dr,
                onUpdateCameraKeyframe: Fr,
                onDeleteCameraKeyframe: Ar,
                onUseCurrentCamera: Rr,
                onMarkRange: gr,
                onCropRange: vr,
                onDeleteKeyframesInRange: Ir,
                onClearMark: ar,
                zoomLevel: mY,
                onZoomLevelChange: VY
              }, jY), (0, aY.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, aY.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, aY.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [ZY && (0, aY.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== GY && void 0 !== GY ? GY : "Unsaved recording", nY ? " *" : ""]
                    }), (0, aY.jsxs)(Vr, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Er("replayLoad")
                      },
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, aY.jsxs)(eD.f, {
                      className: "ReplayViewerActionButton",
                      onClick: xY.b,
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, aY.jsxs)(Sr, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Er("replaySave")
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, aY.jsxs)(eD.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        sY.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, aY.jsxs)(lr, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Er("replaySaveAs")
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, aY.jsxs)(eD.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        sY.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !ZY || 0 === fY || UY,
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, aY.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, aY.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, aY.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, aY.jsx)(NY.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, aY.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, aY.jsx)(hY.g, {
                        tooltipInner: (0, aY.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, aY.jsxs)(eD.J, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === qY,
                          onClick: () => {
                            mr("recording")
                          },
                          disabled: !ZY,
                          children: ["Recorded ", (0, aY.jsx)(dY.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, aY.jsx)(hY.g, {
                        tooltipInner: (0, aY.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, aY.jsxs)(eD.J, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === qY,
                          onClick: () => {
                            mr("freecam")
                          },
                          disabled: !ZY,
                          children: ["Free ", (0, aY.jsx)(dY.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, aY.jsx)(hY.g, {
                        tooltipInner: (0, aY.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, aY.jsxs)(eD.J, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === qY,
                          onClick: () => {
                            mr("keyframe")
                          },
                          disabled: !ZY,
                          children: ["Preview ", (0, aY.jsx)(dY.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, aY.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, aY.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, aY.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, aY.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: DI(bY, wY)
                      }), (0, aY.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, aY.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: DI(jY, wY)
                      })]
                    }), (0, aY.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", bY, " / ", jY]
                    })]
                  }), (0, aY.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, aY.jsxs)(eD.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        or("replaySkipBack")
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsxs)("span", {
                        children: [" ", (0, aY.jsx)(dY.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, aY.jsx)(NY.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, aY.jsxs)(eD.n, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        sY.gameBridge.send("setReplayPlaying", !JY)
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsxs)("span", {
                        children: [" ", JY ? (0, aY.jsx)(dY.e, {
                          name: "pause"
                        }) : (0, aY.jsx)(dY.e, {
                          name: "play"
                        }), " "]
                      }), (0, aY.jsx)(NY.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, aY.jsxs)(eD.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        or("replaySkipForward")
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsxs)("span", {
                        children: [" ", (0, aY.jsx)(dY.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, aY.jsx)(NY.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, aY.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, aY.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, aY.jsxs)(eD.n, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        or("replayRecordKeyframe")
                      },
                      disabled: !ZY,
                      children: [(0, aY.jsx)(NY.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, aY.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, aY.jsx)(ZI, {
                      disabled: !ZY
                    }), kY && (0, aY.jsx)(eD.J, {
                      className: "ReplayViewerActionButton",
                      onClick: ar,
                      disabled: !ZY,
                      children: (0, aY.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, aY.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, aY.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, aY.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, aY.jsx)(eD.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          or("replaySpeedDown")
                        },
                        disabled: !ZY || (0, bA.f)(MY),
                        children: (0, aY.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, aY.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [MY, "\xd7"]
                      }), (0, aY.jsx)(eD.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          or("replaySpeedUp")
                        },
                        disabled: !ZY || (0, bA.c)(MY),
                        children: (0, aY.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, aY.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, aY.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, aY.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, aY.jsxs)(eD.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Er("replayTimelineZoomOut")
                        },
                        disabled: !ZY || mY <= LA[0],
                        children: [(0, aY.jsx)("span", {
                          children: " \u2212 "
                        }), (0, aY.jsx)(NY.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, aY.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: FI(mY)
                      }), (0, aY.jsxs)(eD.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Er("replayTimelineZoomIn")
                        },
                        disabled: !ZY || mY >= LA[LA.length - 1],
                        children: [(0, aY.jsx)("span", {
                          children: " + "
                        }), (0, aY.jsx)(NY.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, aY.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !ZY && "Load a recording to begin playback"
              }), WY && (0, aY.jsx)("div", {
                className: "ReplayViewerError",
                children: WY
              })]
            })]
          })]
        })
      }));
    var MI = DY(1322);

    function wI() {
      const [, YY] = (0, FY.useState)(0);
      return (0, OY.g)("replayViewer|uiVisibilityChanged", (() => {
          YY((YY => YY + 1))
        })), (0, OY.g)("replayViewer|replayLoaded", (() => {
          YY((YY => YY + 1))
        })),
        function() {
          if (!(0, MI.d)()) return {};
          const YY = {
              [KI.e]: "true"
            },
            rY = (0, HI.e)();
          for (const {
              group: DY,
              dataAttr: FY
            }
            of KI.f) FY && !rY[DY] && (YY[FY] = "true");
          return YY
        }()
    }
    var bI = DY(8739),
      XI = DY(1917),
      qI = DY(8138),
      pI = DY(8126),
      kI = DY(1934);
    const GI = (0, FY.memo)((function() {
      var YY, rY, DY;
      const AY = (0, mY.j)("customButtons");
      (0, FY.useEffect)((() => AY ? (sY.gameBridge.send("bindCustomButtonKeys", AY.filter(qI.g).map((YY => {
        let {
          id: rY,
          keycode: DY
        } = YY;
        return {
          id: rY,
          keycode: DY
        }
      }))), () => {
        sY.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [AY]);
      const IY = null !== (YY = null === AY || void 0 === AY ? void 0 : AY.filter(qI.g)) && void 0 !== YY ? YY : [],
        RY = (0, pI.i)(),
        OY = null !== (rY = null === (DY = (0, kI.d)()) || void 0 === DY ? void 0 : DY.hideButtonHints) && void 0 !== rY && rY,
        gY = "customButton" !== (null === RY || void 0 === RY ? void 0 : RY.kind) || OY ? null : RY.id,
        vY = IY.length > 0,
        uY = (0, FY.useRef)(null);
      return (0, FY.useLayoutEffect)((() => {
        if (!vY) return () => {};
        const YY = uY.current,
          rY = YY.closest(".InGameUi"),
          DY = () => {
            rY.style.setProperty("--custom-buttons-top", `${YY.offsetTop}px`)
          };
        DY();
        const FY = new ResizeObserver(DY);
        return FY.observe(YY), FY.observe(YY.parentElement), () => {
          FY.disconnect(), rY.style.removeProperty("--custom-buttons-top")
        }
      }), [vY]), (0, aY.jsx)("div", {
        ref: uY,
        className: "" + ((0, aA.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: IY.map((YY => {
          var rY, DY;
          return (0, aY.jsx)(xI, {
            button: YY,
            padGlyph: YY.id === gY && null !== (rY = null === (DY = (0, bY.g)()) || void 0 === DY ? void 0 : DY.getBoundButton("actionButton")) && void 0 !== rY ? rY : null
          }, YY.id)
        }))
      })
    }));

    function xI(YY) {
      let {
        button: rY,
        padGlyph: DY
      } = YY;
      const AY = (0, FY.useRef)(null),
        IY = () => {
          null !== AY.current && (AY.current = null, sY.gameBridge.send("pressCustomButton", {
            id: rY.id,
            down: !1
          }))
        };
      (0, FY.useEffect)((() => IY), []);
      const RY = Xr(IY, {
          pressesOnPointerDown: !0
        }),
        OY = YY => {
          AY.current === YY.pointerId && IY()
        };
      return (0, aY.jsxs)("div", {
        className: "CustomIcon",
        ...RY,
        onLostPointerCapture: OY,
        children: [(0, aY.jsx)(XI.e, {
          icon: rY.icon,
          keyboardHint: (0, qI.d)(rY.keycode),
          padGlyph: DY,
          onPointerDown: YY => {
            try {
              YY.currentTarget.setPointerCapture(YY.pointerId)
            } catch {
              return
            }
            null === AY.current && sY.gameBridge.send("pressCustomButton", {
              id: rY.id,
              down: !0
            }), AY.current = YY.pointerId
          },
          onPointerUp: OY,
          onPointerCancel: OY,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), rY.description && (0, aY.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: rY.description
        })]
      })
    }
    var nI = DY(2274),
      PI = DY(35991),
      UI = DY(275);
    const LI = {
      frame: YY => {
        const rY = requestAnimationFrame((() => {
          YY()
        }));
        return () => {
          cancelAnimationFrame(rY)
        }
      },
      afterFrame: YY => {
        const rY = setTimeout(YY, 0);
        return () => {
          clearTimeout(rY)
        }
      }
    };
    class tI {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UI.b,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LI;
        this.idle = YY, this.frames = rY, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (YY(), () => {}) : (rY ? this.waiting.unshift(YY) : this.waiting.push(YY), this.schedule(), () => {
          const rY = this.waiting.indexOf(YY);
          rY >= 0 && (this.waiting.splice(rY, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((YY => {
          for (this.cancelIdle = null; this.waiting.length > 0 && YY.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const YY = this.waiting.shift();
        try {
          YY()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var YY, rY, DY;
        null === (YY = this.cancelIdle) || void 0 === YY || YY.call(this), this.cancelIdle = null, null === (rY = this.cancelFrame) || void 0 === rY || rY.call(this), this.cancelFrame = null, null === (DY = this.cancelAfterFrame) || void 0 === DY || DY.call(this), this.cancelAfterFrame = null
      }
    }
    const YR = (0, FY.createContext)(null);

    function rR(YY) {
      let {
        children: rY,
        first: DY = !1
      } = YY;
      const AY = (0, FY.useContext)(YR),
        [IY, RY] = (0, FY.useState)(null === AY);
      return (0, FY.useEffect)((() => {
        if (!IY && null !== AY) return AY.request((() => {
          RY(!0)
        }), DY)
      }), [DY, IY, AY]), IY ? (0, FY.createElement)(FY.Fragment, null, rY) : null
    }
    const DR = (0, FY.memo)((function(YY) {
        let {
          shown: rY
        } = YY;
        const [DY] = (0, FY.useState)((() => new yY.g(rY))), [AY] = (0, FY.useState)((() => rY ? null : new tI));
        return (0, FY.useLayoutEffect)((() => {
          rY && (null === AY || void 0 === AY || AY.show(), DY.show())
        }), [rY, DY, AY]), (0, aY.jsx)(yY.c.Provider, {
          value: DY,
          children: (0, aY.jsx)(YR.Provider, {
            value: AY,
            children: (0, aY.jsx)(FR, {})
          })
        })
      })),
      FR = (0, FY.memo)((function() {
        const {
          isUiHidden: YY,
          isUiHiddenByCamera: rY,
          worldPanelHud: DY,
          isTouchScreen: AY
        } = (0, eY.j)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), RY = (0, qF.d)(), OY = wI(), gY = (0, yY.m)(), vY = (0, FY.useRef)(null), uY = (0, mY.j)("showKillfeed");
        return function() {
            const YY = (0, yY.m)();
            (0, FY.useEffect)((() => YY.whenShown(QY)), [YY])
          }(),
          function() {
            const YY = (0, mY.j)("inventoryColourOverride");
            (0, FY.useEffect)((() => {
              if (!YY) return;
              const {
                panel: rY,
                slot: DY,
                slotSelected: FY,
                slotUnavailable: AY
              } = qY(YY), IY = document.documentElement.style;
              return IY.setProperty("--InventoryPanelColour", rY), IY.setProperty("--InventorySlotColour", DY), IY.setProperty("--InventorySlotSelectedColour", FY), IY.setProperty("--InventorySlotUnavailableColour", AY), () => {
                IY.removeProperty("--InventoryPanelColour"), IY.removeProperty("--InventorySlotColour"), IY.removeProperty("--InventorySlotSelectedColour"), IY.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [YY])
          }(), (0, FY.useLayoutEffect)((() => gY.whenShown((() => {
            var YY;
            null === (YY = vY.current) || void 0 === YY || YY.classList.remove("PreMounted")
          }))), [gY]), (0, aY.jsxs)(aY.Fragment, {
            children: [(0, aY.jsxs)("div", {
              ref: vY,
              className: IY()("InGameUi", {
                PreMounted: !gY.shown,
                Hidden: YY,
                HiddenByCamera: rY,
                HiddenByWorldPanel: null !== DY,
                WorldPanelTouchControl: "touchControls" === DY
              }),
              ...OY,
              children: [(0, aY.jsxs)(rR, {
                children: [(0, aY.jsx)(wD.c, {}), (0, aY.jsx)(kD, {})]
              }), (0, aY.jsx)(yY.j, {
                children: (0, aY.jsx)(GD, {})
              }), (0, aY.jsxs)(rR, {
                children: [(0, aY.jsx)(WA, {}), (0, aY.jsx)(eA, {}), AY && (0, aY.jsx)(BA, {})]
              }), (0, aY.jsxs)(rR, {
                children: [(0, aY.jsx)(QD, {}), (0, aY.jsx)(RF.e, {}), (0, aY.jsx)(iF, {})]
              }), (0, aY.jsx)(yY.j, {
                children: (0, aY.jsx)(MD, {})
              }), (0, aY.jsxs)(rR, {
                children: [(0, aY.jsx)(SA.e, {}), (0, aY.jsx)(dI, {})]
              }), (0, aY.jsxs)(rR, {
                children: [(0, aY.jsx)(KA.c, {}), (0, aY.jsx)(HA.d, {})]
              }), (0, aY.jsx)(rR, {
                children: (0, aY.jsx)(WD.h, {})
              }), (0, aY.jsx)(rR, {
                children: (0, aY.jsx)(vR, {
                  showChat: RY
                })
              }), (0, aY.jsxs)(rR, {
                children: [(0, aY.jsx)(ZA, {}), (0, aY.jsx)(VA, {})]
              }), (0, aY.jsxs)("div", {
                className: IY()("RightElements", {
                  RightElementsTouchscreen: AY
                }),
                "data-camera-keeper-host": "",
                children: [(0, aY.jsxs)("div", {
                  className: VF.j,
                  "data-holds-camera-keeper": "",
                  children: [(0, aY.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, aY.jsx)(rR, {
                      children: (0, aY.jsx)(IA.b, {})
                    }), (0, aY.jsxs)(rR, {
                      children: [(0, aY.jsx)(JY, {}), (0, aY.jsx)(TF.c, {})]
                    }), aA.featureFlags.useSocialFeatures && (0, aY.jsx)(yY.j, {
                      children: (0, aY.jsx)(eF.b, {
                        placement: "inGame"
                      })
                    }), aA.featureFlags.useSocialFeatures && (0, aY.jsx)(yY.j, {
                      children: (0, aY.jsx)(JF, {})
                    }), uY && (0, aY.jsx)(yY.j, {
                      children: (0, aY.jsx)(IF, {})
                    }), (0, aY.jsx)(rR, {
                      children: (0, aY.jsx)(bI.d, {})
                    })]
                  }), aA.featureFlags.useSocialFeatures && (0, aY.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, aY.jsx)(rR, {
                      children: (0, aY.jsx)(QA.d, {})
                    })
                  })]
                }), (0, aY.jsxs)(rR, {
                  children: [(0, aY.jsx)(WD.d, {
                    placement: "topRight"
                  }), (0, aY.jsx)(uR, {})]
                })]
              }), (0, aY.jsx)("div", {
                className: "LeftCentre",
                children: (0, aY.jsx)(rR, {
                  children: (0, aY.jsx)(GI, {})
                })
              }), (0, aY.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": AY ? "" : void 0,
                children: [(0, aY.jsx)(yY.j, {
                  children: (0, aY.jsx)(zY, {})
                }), (0, aY.jsx)(rR, {
                  children: (0, aY.jsx)(IR, {})
                }), (0, aY.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": AY ? "" : void 0,
                  children: [(0, aY.jsx)("div", {
                    className: IY()("BottomLeftElements", {
                      Touch: AY
                    }),
                    children: (0, aY.jsxs)(rR, {
                      children: [(0, aY.jsx)(bF, {}), !AY && (0, aY.jsx)(nI.d, {})]
                    })
                  }), (0, aY.jsx)(rR, {
                    children: (0, aY.jsx)(aR, {})
                  }), (0, aY.jsx)(rR, {
                    children: (0, aY.jsx)(QF, {
                      isTouchScreen: AY
                    })
                  })]
                })]
              }), (0, aY.jsx)("div", {
                className: "MiddleLeft"
              }), AY && (0, aY.jsx)(rR, {
                children: (0, aY.jsx)(Ur, {})
              }), (0, aY.jsx)("div", {
                className: "CameraFadeHost",
                ref: PI.j
              })]
            }), (0, aY.jsx)(yY.j, {
              children: (0, aY.jsx)(MA.e, {})
            }), (0, aY.jsx)(rR, {
              first: !0,
              children: (0, aY.jsx)(XF.b, {})
            }), (0, aY.jsx)(yY.j, {
              children: (0, aY.jsx)(AR, {})
            })]
          })
      }));

    function AR() {
      return (0, FY.useEffect)((() => {
        const YY = setTimeout((() => {
          (0, VY.d)()
        }), 0);
        return () => {
          clearTimeout(YY), VY.g.iW(!1)
        }
      }), []), null
    }
    const IR = (0, FY.memo)((function() {
        const YY = (0, OY.k)("aimingOverlay", "none");
        (0, WY.c)();
        const rY = (0, mY.l)("middleTextUpper"),
          DY = (0, mY.l)("middleTextLower");
        return (0, aY.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === YY ? {
            visibility: "hidden"
          } : {},
          children: [(0, aY.jsx)(gR, {
            text: rY,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: RR
          }), (0, aY.jsx)(gR, {
            text: DY,
            className: "MiddleText",
            maxHeightFraction: OR
          })]
        })
      })),
      RR = .3,
      OR = .2;

    function gR(YY) {
      let {
        text: rY,
        className: DY,
        maxHeightFraction: AY
      } = YY;
      const IY = (0, FY.useRef)(null),
        RY = (0, FY.useRef)(null);
      return function(YY, rY, DY, AY) {
        (0, FY.useLayoutEffect)((() => {
          const FY = YY.current,
            AY = rY.current;
          if (!FY || !AY) return;
          let IY = -1,
            RY = -1;
          const OY = YY => (AY.style.setProperty("zoom", String(YY)), FY.getBoundingClientRect().height),
            gY = () => {
              const YY = document.documentElement.clientHeight * DY;
              let rY = 1;
              if (OY(1) > YY) {
                let DY = .5,
                  FY = 1;
                for (let rY = 0; rY < 6; rY++) {
                  const rY = (DY + FY) / 2;
                  OY(rY) <= YY ? DY = rY : FY = rY
                }
                rY = DY
              }
              RY = OY(rY), IY = FY.getBoundingClientRect().width
            };
          gY();
          let aY = 0;
          const vY = () => {
              cancelAnimationFrame(aY), aY = requestAnimationFrame(gY)
            },
            uY = new ResizeObserver((() => {
              const {
                width: YY,
                height: rY
              } = FY.getBoundingClientRect();
              YY === IY && rY === RY || vY()
            }));
          return uY.observe(FY), window.addEventListener("resize", vY), () => {
            uY.disconnect(), window.removeEventListener("resize", vY), cancelAnimationFrame(aY), AY.style.removeProperty("zoom")
          }
        }), [YY, rY, DY, AY])
      }(IY, RY, AY, rY.content), (0, aY.jsx)("div", {
        ref: IY,
        className: "MiddleTextFit",
        children: (0, aY.jsx)(zA, {
          ref: RY,
          text: rY,
          className: DY
        })
      })
    }
    const aR = (0, FY.memo)((function() {
        const YY = (0, OY.k)("aimingOverlay", "none");
        (0, WY.c)();
        const rY = (0, mY.j)("useInventory");
        return (0, aY.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === YY ? {
            visibility: "hidden"
          } : {},
          children: [(0, aY.jsx)(vY, {}), (0, aY.jsx)(WD.d, {}), (0, aY.jsx)(ED, {}), (0, aY.jsx)(yY.j, {
            children: (0, aY.jsx)(iA, {})
          }), (0, aY.jsxs)("div", {
            className: "HotBarRow",
            children: [rY ? (0, aY.jsx)(wY.b, {}) : (0, aY.jsx)(wY.c, {}), (0, aY.jsx)(XY, {})]
          })]
        })
      })),
      vR = (0, FY.memo)((function(YY) {
        let {
          showChat: rY
        } = YY;
        const {
          t: DY
        } = (0, HY.C)(), {
          clientEscMenuOptions: AY,
          isTouchScreen: RY
        } = (0, eY.j)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, WY.c)();
        const {
          userContext: OY,
          isUserContextUpdating: gY
        } = (0, oY.d)(), vY = (0, mY.j)("hideCoordinates"), sY = (0, mY.j)("customVariationTitle"), {
          requestedGameNameWithVariation: iY,
          gameNameWithVariation: yY,
          lobbyName: QY,
          shownLobbyName: VY
        } = (0, TY.h)("connectedGame"), SY = (0, uY.d)(iY, QY, !1), [lY, NY] = (0, FY.useState)(null), BY = (0, OA.p)(yY || iY || ""), cY = sY || BY || "";
        (0, FY.useEffect)((() => {
          gY || BF.e.getFavouriteLobbies(OY).then((YY => {
            console.log("Got favourite lobbies", YY), NY(YY)
          }))
        }), [gY, OY]);
        const KY = (0, FY.useRef)(null);
        return (0, FY.useLayoutEffect)((() => {
          const YY = KY.current,
            rY = document.documentElement,
            DY = new ResizeObserver((() => {
              rY.style.setProperty("--InGameHeaderRowsHeight", `${YY.offsetHeight}px`)
            }));
          return DY.observe(YY), () => {
            DY.disconnect(), rY.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), lF(KY), (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsxs)("div", {
            className: IY()(VF.h, {
              Touchscreen: RY
            }),
            ref: KY,
            children: [(0, aY.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, aY.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: YY => {
                  YY.stopPropagation(), YY.preventDefault()
                },
                onClick: () => {
                  eY.b.set({
                    openEverythingMenuName: EY.t.SETTINGS
                  })
                },
                children: [(0, aY.jsx)(RA.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, aY.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, aY.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === SY && (0, aY.jsx)(RA.c, {}), null !== SY && (0, aY.jsxs)(aY.Fragment, {
                  children: [SY, cY && ` ${cY}`]
                })]
              }), (0, aY.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, aY.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: VY
              }), (0, gA.K)(QY) && (0, aY.jsx)(hY.g, {
                tooltipInner: (0, aY.jsx)("div", {
                  children: DY(null !== lY && lY.includes(QY) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, aY.jsx)("div", {
                  children: (0, aY.jsx)(eD.q, {
                    isLiked: null !== lY && lY.includes(QY),
                    onClick: () => {
                      try {
                        if (!lY) return;
                        lY.includes(QY) ? (BF.e.unfavouriteLobby(OY, QY).catch((YY => {
                          console.error("Failed to favourite lobby", YY)
                        })), NY(lY.filter((YY => YY !== QY)))) : (BF.e.favouriteLobby(OY, QY).catch((YY => {
                          console.error("Failed to favourite lobby", YY)
                        })), NY([...lY, QY]))
                      } catch (YY) {
                        console.error("Failed to like lobby", YY)
                      }
                    },
                    isLoading: null === lY
                  })
                })
              }), (0, aY.jsx)(hA, {})]
            }), (0, aY.jsx)(YA, {
              show: AY.showFPS
            }), !vY && AY.showCoordinates && (0, aY.jsx)(FA, {}), !vY && AY.showChunkCoordinates && (0, aY.jsx)(AA, {}), (0, aY.jsx)(CA, {})]
          }), (0, aY.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, aY.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: rY && (0, aY.jsx)(GY.c, {})
            })
          })]
        })
      })),
      uR = (0, FY.memo)((function() {
        (0, WY.c)();
        const YY = (0, mY.l)("RightInfoText"),
          [rY, DY] = (0, FY.useState)(null);
        return (0, yr.l)(rY, ".RightElements"), YY.hasText ? (0, aY.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, aY.jsx)(zA, {
            ref: DY,
            text: YY,
            className: "RightInfoDiv",
            children: (0, aY.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, aY.jsx)(gY.b, {
                text: YY.content
              })
            })
          })
        }) : null
      }))
  },
  4410: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(61),
      AY = DY(332),
      IY = DY(1793),
      RY = DY(1125);

    function OY(YY) {
      let {
        text: rY
      } = YY;
      const DY = [];
      let OY = "";
      return (0, AY.cc)(rY).forEach(((YY, rY) => {
        if ("string" === typeof YY || !(0, IY.f)(YY.icon)) return void(OY += "string" === typeof YY ? YY : YY.icon);
        const AY = Math.max(0, OY.trimEnd().search(/\S{1,12}$/));
        DY.push((0, RY.jsxs)(FY.Fragment, {
          children: [OY.slice(0, AY), (0, RY.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [OY.slice(AY), (0, RY.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": YY.icon,
              children: (0, RY.jsx)(IY.c, {
                itemName: YY.icon,
                amount: 0
              })
            })]
          })]
        }, rY)), OY = ""
      })), DY.push(OY), (0, RY.jsx)(RY.Fragment, {
        children: DY
      })
    }
  },
  35963: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY,
      g: () => vY,
      k: () => uY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1793),
      OY = DY(1125);
    const gY = 350;
    let aY = 0;

    function vY() {
      return aY += 1, aY
    }

    function uY(YY, rY) {
      let DY = 0;
      for (const FY of YY) "ingredient" !== FY.kind && FY.da === rY && (DY += FY.amount);
      return DY > 0 ? {
        idx: rY,
        amount: DY
      } : null
    }

    function sY(YY) {
      var rY, DY;
      let {
        anim: AY,
        onComplete: aY
      } = YY;
      const vY = null !== (rY = AY.delayMs) && void 0 !== rY ? rY : 0,
        uY = null !== (DY = AY.durationMs) && void 0 !== DY ? DY : gY,
        [sY, iY] = (0, FY.useState)(AY.from),
        [yY, QY] = (0, FY.useState)(0 === vY),
        [oY, WY] = (0, FY.useState)(!1),
        EY = (0, FY.useRef)(!1);
      return (0, FY.useEffect)((() => {
        let YY, rY;
        const DY = () => {
            EY.current = !0, QY(!0), YY = requestAnimationFrame((() => {
              rY = requestAnimationFrame((() => {
                iY({
                  x: AY.to.x,
                  y: AY.to.y
                }), WY(!0)
              }))
            }))
          },
          FY = EY.current ? 0 : vY;
        let IY;
        FY > 0 ? IY = setTimeout(DY, FY) : DY();
        const RY = setTimeout((() => {
          aY(AY.id)
        }), FY + uY + 50);
        return () => {
          clearTimeout(IY), cancelAnimationFrame(YY), cancelAnimationFrame(rY), clearTimeout(RY)
        }
      }), [AY.id, AY.to.x, AY.to.y, aY, vY, uY]), (0, OY.jsx)("div", {
        className: IY()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === AY.kind,
          Waiting: !yY,
          Arrived: oY
        }),
        style: {
          left: sY.x,
          top: sY.y,
          "--fly-duration": `${uY}ms`
        },
        children: (0, OY.jsx)(RY.c, {
          itemName: AY.itemName,
          amount: AY.amount
        })
      })
    }
  },
  35944: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => jY,
      c: () => JY
    });
    var FY = DY(61),
      AY = DY(2620),
      IY = DY(6128),
      RY = DY(1917),
      OY = DY(2282),
      gY = DY(8250),
      aY = DY(341),
      vY = DY(25),
      uY = DY(1430),
      sY = DY(40),
      iY = DY(1092),
      yY = DY.n(iY),
      QY = DY(332),
      oY = DY(35953),
      WY = DY(1778),
      EY = DY(1834),
      mY = DY(8090),
      VY = DY(1125);

    function SY(YY) {
      var rY, DY;
      let {
        slotIdx: IY
      } = YY;
      const RY = (0, EY.f)("hotbar", (YY => {
          var rY;
          return null !== (rY = YY.items[IY]) && void 0 !== rY ? rY : null
        })),
        gY = (0, EY.f)("hotbar", (YY => YY.ammo)),
        [vY, uY] = (0, FY.useState)(!1),
        sY = (0, FY.useRef)(null),
        [iY, QY] = (0, FY.useState)(null),
        [oY, SY] = (0, FY.useState)(null),
        lY = (0, OY.j)("maxAuraLevel"),
        TY = (0, AY.c)(),
        eY = (0, FY.useCallback)((() => {
          if (clearTimeout(sY.current), RY) {
            var YY, rY, DY, FY;
            const gY = RY.displayName,
              vY = [],
              uY = Array.isArray(gY) ? gY : [gY],
              sY = {
                fontStyle: null !== (YY = RY.attributes.customAttributes) && void 0 !== YY && YY.author ? "italic" : "normal"
              };
            for (const YY of uY) YY.str ? vY.push(YY) : vY.push({
              str: YY,
              style: sY
            });
            if (null !== (rY = RY.attributes.customAttributes) && void 0 !== rY && rY.enchantments) {
              vY.push(" ");
              const YY = Object.entries(RY.attributes.customAttributes.enchantments).sort(((YY, rY) => rY[1] - YY[1])),
                rY = RY.attributes.customAttributes.enchantmentData;
              for (const [DY, FY] of YY) {
                var AY, IY;
                const YY = null !== (AY = null === rY || void 0 === rY || null === (IY = rY[DY]) || void 0 === IY ? void 0 : IY.icon) && void 0 !== AY ? AY : `${DY} Enchantment`;
                var OY;
                if (FY < 4)
                  for (let rY = 0; rY < FY; rY++) vY.push({
                    icon: YY,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else vY.push({
                  icon: YY,
                  style: {
                    fontSize: "1.5em"
                  }
                }), vY.push(null !== (OY = (0, aY.R)(FY)) && void 0 !== OY ? OY : FY.toString())
              }
            }
            QY(vY), SY(null !== (DY = null === (FY = RY.attributes.customAttributes) || void 0 === FY ? void 0 : FY.enchantmentTier) && void 0 !== DY ? DY : null)
          } else QY(null), SY(null);
          uY(!0), TY();
          const gY = null === RY || void 0 === RY ? void 0 : RY.attributes.customAttributes;
          void 0 === (null === gY || void 0 === gY ? void 0 : gY.shotsLeft) && (sY.current = setTimeout((() => {
            uY(!1)
          }), 2e3))
        }), [null === RY || void 0 === RY ? void 0 : RY.name, IY, null === RY || void 0 === RY ? void 0 : RY.instance, null === RY || void 0 === RY ? void 0 : RY.displayName]);
      (0, FY.useEffect)((() => (eY(), () => {
        clearTimeout(sY.current), uY(!1)
      })), [null === RY || void 0 === RY ? void 0 : RY.name, IY, null === RY || void 0 === RY ? void 0 : RY.instance, eY]);
      const NY = null === RY || void 0 === RY || null === (rY = RY.attributes.customAttributes) || void 0 === rY ? void 0 : rY.shotsLeft,
        BY = void 0 === NY ? null : (0, VY.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${NY}|${RY.requiresAmmo?`${gY}x${RY.clipSize}`:RY.clipSize}`
        }),
        cY = (0, mY.k)();
      return (0, VY.jsx)(VY.Fragment, {
        children: vY && RY && !cY.showing ? (0, VY.jsxs)("div", {
          className: yY()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === lY,
            Enchanted: null !== oY
          }),
          style: {
            "--enchantmentColour": null !== (DY = aY.nb[oY]) && void 0 !== DY ? DY : aY.nb.None,
            "--duration": oY ? (0, aY.ib)(oY) + "s" : void 0
          },
          children: [oY && (0, VY.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, VY.jsx)(WY.b, {
              text: iY
            }), BY]
          }), (0, VY.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, VY.jsx)(WY.b, {
              text: iY
            }), BY]
          })]
        }) : null
      })
    }
    var lY = DY(35963),
      TY = DY(19),
      eY = DY(1808),
      NY = DY(625),
      BY = DY(2291),
      cY = DY(2963),
      KY = DY(2971);
    var HY = DY(1943),
      zY = DY(1134),
      ZY = DY(3955);

    function CY() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var fY = DY(1445);
    const jY = (0, FY.memo)((function() {
      const [YY, rY] = (0, FY.useState)(0), DY = (0, OY.j)("useFullInventory"), RY = (0, OY.j)("highlightedHotbarSlots"), {
        isTouchScreen: gY,
        openInGameMenuName: aY
      } = (0, TY.j)(["isTouchScreen", "openInGameMenuName"]), sY = null !== aY && "inventory" !== aY, iY = (0, EY.h)("fullInventory") && "inventory" === aY, QY = function() {
        const YY = (0, HY.d)(((YY, rY) => `${YY}:${(0,zY.b)(YY,rY)?"portrait":"landscape"}`)),
          [rY, DY] = (0, FY.useState)(CY);
        return (0, FY.useLayoutEffect)((() => {
          DY(CY())
        }), [YY]), (0, uY.g)(ZY.e, (() => {
          DY(CY())
        })), rY
      }(), WY = gY && !QY;
      ! function(YY, rY, DY) {
        (0, FY.useLayoutEffect)((() => {
          const FY = document.documentElement.classList;
          return YY && (FY.add("TouchHotbar"), FY.toggle("TouchHotbarKeysAbove", rY), FY.toggle("TouchHotbarHasBag", DY)), (0, cY.e)(), vY.g.vo(KY.e), () => {
            FY.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, cY.e)(), vY.g.vo(KY.e)
          }
        }), [YY, rY, DY])
      }(gY, WY, DY);
      const [mY, BY] = (0, IY.e)("changedHotbarUsingNumkeys", !0), fY = (0, EY.f)("hotbar", (YY => YY.selectedSlot)), jY = null !== fY && void 0 !== fY ? fY : YY, MY = (0, AY.c)(), wY = (0, FY.useRef)(null), XY = (0, uY.k)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, uY.g)("inventoryDraggedItemUpdated", (YY => {
        wY.current = YY, MY()
      })), (0, EY.c)("hotbarScrolled", (YY => {
        null === fY && pY(YY)
      })), (0, EY.c)("hotbarSlotRequested", (YY => {
        qY(YY), BY(!1)
      })), (0, EY.c)("numberKeyPressed", (() => {
        BY(!1)
      })), (0, EY.c)("hotbarDropRequested", (YY => {
        const rY = eY.gameBridge.latest("hotbar").items[jY];
        if (rY) {
          var DY;
          const FY = YY && null !== (DY = rY.amount) && void 0 !== DY ? DY : 1;
          eY.gameBridge.send("removeInventoryItem", {
            slot: jY,
            amount: FY,
            drop: !0
          })
        }
      }));
      const qY = YY => {
          eY.gameBridge.send("selectHotbarSlot", YY), rY(YY)
        },
        pY = YY => {
          qY((jY + YY + NY.k) % NY.k)
        };
      let kY, GY = null,
        xY = null,
        nY = YY => YY => {},
        PY = YY => rY => {
          qY(YY)
        },
        UY = YY => YY => {},
        LY = [];
      if (iY) {
        var tY;
        const YY = wY.current;
        if (null === YY || void 0 === YY || !YY.setHovered) return (0, VY.jsx)("div", {
          className: yY()("HotBarContainer", {
            Touch: gY,
            KeysAbove: WY
          }),
          children: (0, VY.jsx)("div", {
            className: "HotBar"
          })
        });
        GY = YY.draggedInfo, xY = YY.specialItemInfo, nY = YY.setHovered, PY = YY.pointerDown, UY = YY.pointerUp, kY = YY.variation, LY = null !== (tY = YY.craftFlyAnims) && void 0 !== tY ? tY : []
      }
      return (0, VY.jsxs)("div", {
        className: yY()("HotBarContainer", {
          Touch: gY,
          PopupOpen: gY && sY,
          KeysAbove: WY
        }),
        children: [(0, VY.jsxs)("div", {
          className: yY()("HotBar", {
            HoverDisabled: XY
          }),
          children: [gY && (0, VY.jsxs)(VY.Fragment, {
            children: [(0, VY.jsx)(dY, {
              useFullInventory: DY,
              inventoryOpen: iY
            }), (0, VY.jsx)(hY, {
              direction: "Previous",
              onPress: () => {
                pY(-1)
              }
            })]
          }), !gY && (0, VY.jsxs)(VY.Fragment, {
            children: [(0, VY.jsx)(JY, {}), (0, VY.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, VY.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((YY, rY) => (0, VY.jsx)(oY.e, {
              idx: rY,
              draggedInfo: GY,
              specialItemInfo: xY,
              craftFlyHoldbackInfo: (0, lY.k)(LY, rY),
              setHovered: nY(rY),
              pointerDown: PY(rY),
              pointerUp: UY(rY),
              variation: kY,
              isSelected: rY === jY,
              hotbarHighlighted: !0 === (null === RY || void 0 === RY ? void 0 : RY.includes(rY)),
              hoverDisabled: XY,
              showNumber: mY && !gY
            }, rY)))
          }), gY && (0, VY.jsx)(hY, {
            direction: "Next",
            onPress: () => {
              pY(1)
            }
          }), !gY && (0, VY.jsxs)(VY.Fragment, {
            children: [(0, VY.jsx)("div", {
              className: "HotBarFiller"
            }), (0, VY.jsx)("div", {
              className: yY()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !DY
              }),
              onPointerDown: () => {
                vY.g.vo("toggleMenu", "inventory")
              },
              children: (0, VY.jsx)(bY, {})
            })]
          })]
        }), (0, VY.jsx)(SY, {
          slotIdx: jY
        })]
      })
    }));

    function hY(YY) {
      let {
        direction: rY,
        onPress: DY
      } = YY;
      return (0, VY.jsx)("div", {
        className: yY()("HotBarArrow", rY),
        ...fY.e,
        children: (0, VY.jsx)(RY.e, {
          icon: "Previous" === rY ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: DY
        })
      })
    }
    const dY = (0, FY.memo)((function(YY) {
        let {
          useFullInventory: rY,
          inventoryOpen: DY
        } = YY;
        const AY = (0, OY.j)("maxAuraLevel"),
          IY = (0, FY.useRef)(null);
        return function(YY, rY, DY) {
          (0, FY.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", rY), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [rY]), (0, FY.useLayoutEffect)((() => {
            const rY = YY.current.closest(".BottomMiddleElements");
            return rY.classList.toggle("TouchInventoryOpen", DY), () => {
              rY.classList.remove("TouchInventoryOpen")
            }
          }), [YY, DY])
        }(IY, (0, gY.b)(), DY), (0, VY.jsxs)("div", {
          ref: IY,
          className: yY()("TouchInventoryKeys", {
            NoAuraBar: 0 === AY,
            InventoryOpen: DY
          }),
          children: [(0, VY.jsx)(JY, {
            touchKey: !0
          }), (0, VY.jsx)("div", {
            className: yY()("TouchInventoryKey BagKey", {
              Hidden: !rY
            }),
            ...fY.e,
            children: (0, VY.jsx)(bY, {
              touchKey: !0
            })
          })]
        })
      })),
      JY = (0, FY.memo)((function(YY) {
        let {
          touchKey: rY = !1
        } = YY;
        const DY = (0, gY.b)();
        return (0, VY.jsx)("div", {
          className: rY ? yY()("TouchInventoryKey ShopKey", {
            Hidden: !DY
          }) : yY()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !DY
          }),
          ...rY ? fY.e : {},
          children: (0, VY.jsx)(RY.e, {
            icon: (0, aY.ec)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              DY && TY.b.set({
                openEverythingMenuName: QY.t.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function MY(YY) {
      let {
        player: rY
      } = YY;
      return rY.some((YY => null !== YY && aY.Sc.includes(YY.name)))
    }

    function wY(YY) {
      YY.creative || sY.m.getItem("LogInInventoryRedDotTutorialComplete") || (MY(YY) ? (vY.g.vo("RedDotOpenInventoryIcon", !0), vY.g.vo("TouchTutorialOpenInventoryIcon", !0)) : (vY.g.vo("RedDotOpenInventoryIcon", !1), vY.g.vo("TouchTutorialOpenInventoryIcon", !1)))
    }
    const bY = (0, FY.memo)((function(YY) {
      let {
        touchKey: rY = !1
      } = YY;
      const {
        backpackPointerRequested: DY
      } = (0, TY.j)(["backpackPointerRequested"]);
      (0, FY.useEffect)((() => {
        wY(eY.gameBridge.latest("inventory"))
      }), []), (0, EY.c)("inventory", wY);
      const AY = (0, BY.m)();
      return (0, uY.g)("toggleMenu", (YY => {
        AY.shown && (null !== YY && void 0 !== YY && YY.startsWith("inventory") && MY(eY.gameBridge.latest("inventory")) ? (sY.m.setItem("LogInInventoryRedDotTutorialComplete", !0), vY.g.vo("RedDotOpenInventoryIcon", !1), vY.g.vo("TouchTutorialOpenInventoryIcon", !1)) : "shop" === YY && vY.g.vo("showShopTouchTutorial", !1))
      })), rY ? (0, VY.jsx)(RY.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          vY.g.vo("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: DY,
        touchIconPosition: "topleft"
      }) : (0, VY.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          vY.g.vo("toggleMenu", "inventory")
        },
        children: (0, VY.jsx)(RY.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: YY => {
            vY.g.vo("toggleMenu", "inventory"), YY.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: DY,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35953: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => oY,
      h: () => yY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1801),
      OY = DY(1793),
      gY = DY(1808),
      aY = DY(1834),
      vY = DY(35958),
      uY = DY(8765),
      sY = DY(1384),
      iY = DY(1125);
    const yY = (YY, rY, DY) => {
      let FY = rY,
        AY = !1;
      for (const IY of DY)(null === IY || void 0 === IY ? void 0 : IY.idx) === YY && (AY = !0, FY > 0 && (FY -= IY.amount));
      return {
        displayedAmt: FY,
        shown: !AY || FY > 0
      }
    };
    const QY = YY => {
        let {
          idx: rY
        } = YY;
        return (0, sY.p)() ? null : (0, iY.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: rY < 9 ? rY + 1 : 0
        })
      },
      oY = (0, FY.memo)((function(YY) {
        var rY, DY, FY;
        let {
          idx: AY,
          setHovered: sY,
          pointerDown: oY,
          pointerUp: WY,
          draggedInfo: EY,
          specialItemInfo: mY,
          craftFlyHoldbackInfo: VY,
          defaultIconB64: SY = null,
          variation: lY,
          isSelected: TY = !1,
          hotbarHighlighted: eY = !1,
          hoverDisabled: NY = !1,
          showNumber: BY = !1,
          showNewDot: cY = !1
        } = YY;
        const KY = (0, aY.f)("inventory", (YY => AY === vY.h ? null : (0, uY.i)(YY, AY)));
        let HY, zY, ZY, CY;
        if (AY === vY.h) mY && (HY = mY.name, ZY = mY.amount, CY = mY.attributes);
        else if (KY) {
          var fY;
          HY = KY.name, zY = KY.icon, ZY = null !== (fY = KY.amount) && void 0 !== fY ? fY : 0, CY = KY.attributes
        }
        const jY = null === (rY = CY) || void 0 === rY || null === (DY = rY.customAttributes) || void 0 === DY ? void 0 : DY.enchantmentTier,
          hY = (0, RY.i)(CY),
          {
            displayedAmt: dY,
            shown: JY
          } = yY(AY, ZY, [EY, mY, VY]),
          MY = HY && JY,
          wY = void 0 !== lY && function(YY, rY) {
            const {
              enchantable: DY,
              salvageable: FY
            } = gY.gameBridge.latest("stationItems");
            return "Enchanting Table" === YY ? !0 === DY[rY] : "Salvaging Table" === YY && !0 === FY[rY]
          }(lY, HY);
        return (0, iY.jsxs)("div", {
          className: IY()("InvenItem", {
            Highlighted: MY && wY,
            Selected: TY,
            HotbarHighlighted: eY,
            HoverDisabled: NY
          }),
          onPointerEnter: () => {
            null === sY || void 0 === sY || sY(!0)
          },
          onPointerLeave: () => {
            null === sY || void 0 === sY || sY(!1)
          },
          onPointerDown: oY,
          onPointerUp: WY,
          "data-inven-idx": AY,
          children: [MY && (0, iY.jsx)(OY.c, {
            itemName: null !== (FY = zY) && void 0 !== FY ? FY : HY,
            amount: dY,
            enchantmentTier: jY,
            bar: hY
          }), MY && cY && (0, iY.jsx)("div", {
            className: "InvenItemNewDot"
          }), BY && (0, iY.jsx)(QY, {
            idx: AY
          }), SY && !MY && (0, iY.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${SY})`
            }
          })]
        })
      }))
  },
  8748: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(341),
      AY = DY(8756);

    function IY(YY, rY, DY) {
      const IY = Object.entries(rY).sort(((YY, rY) => rY[1] - YY[1])),
        RY = (0, FY.qb)(YY);
      RY.push(YY ? "\n\n" : "\n");
      for (const [AY, yY] of IY) {
        var OY, gY, aY;
        const YY = null !== (OY = null === DY || void 0 === DY || null === (gY = DY[AY]) || void 0 === gY ? void 0 : gY.icon) && void 0 !== OY ? OY : `${AY} Enchantment`;
        RY.push({
          icon: YY,
          style: {
            fontSize: "1.5rem"
          }
        }), RY.push({
          str: `${AY} ${null!==(aY=(0,FY.R)(yY))&&void 0!==aY?aY:yY}\n`
        })
      }
      RY.push({
        str: "\n"
      });
      for (const [FY, yY] of IY) {
        var vY, uY, sY, iY;
        const YY = null !== (vY = null === DY || void 0 === DY || null === (uY = DY[FY]) || void 0 === uY ? void 0 : uY.icon) && void 0 !== vY ? vY : `${FY} Enchantment`,
          rY = null !== (sY = null === DY || void 0 === DY || null === (iY = DY[FY]) || void 0 === iY ? void 0 : iY.description) && void 0 !== sY ? sY : (0, AY.l)(FY);
        RY.push({
          icon: YY,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), RY.push({
          str: rY,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), RY.push({
          str: "\n"
        })
      }
      return RY
    }
  },
  35958: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      h: () => AY
    });
    const FY = -1,
      AY = -2
  },
  8765: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      c: () => EY,
      e: () => oY,
      i: () => gY,
      j: () => WY,
      m: () => vY,
      p: () => sY,
      t: () => QY,
      w: () => uY
    });
    var FY = DY(332),
      AY = DY(625),
      IY = DY(341),
      RY = DY(3808),
      OY = DY(8748);

    function gY(YY, rY) {
      var DY;
      let {
        player: FY,
        chestOrCreative: AY
      } = YY;
      var IY;
      return rY < FY.length ? null !== (IY = FY[rY]) && void 0 !== IY ? IY : null : null !== (DY = AY[rY - FY.length]) && void 0 !== DY ? DY : null
    }

    function aY(YY) {
      var rY;
      return null !== (rY = YY.amount) && void 0 !== rY ? rY : 0
    }

    function vY(YY) {
      return 0 === YY.button || void 0 === YY.button
    }

    function uY(YY) {
      return !!YY.shiftKey
    }

    function sY(YY) {
      return "touches" in YY || "touch" === YY.pointerType || "pen" === YY.pointerType
    }
    const iY = new Set,
      yY = 50;

    function QY(YY, rY) {
      var DY;
      const FY = null === (DY = YY[rY]) || void 0 === DY ? void 0 : DY.displayName;
      return (0, AY.H)(FY) ? "string" !== typeof rY ? "" : (!iY.has(rY) && iY.size < yY && (iY.add(rY), console.warn(`No item called "${rY}", so its hover shows the name as given`)), rY) : FY
    }

    function oY(YY, rY, DY) {
      var gY, aY, vY, uY, sY, iY, yY, oY, WY, EY, mY, VY, SY, lY;
      const TY = YY.attributes,
        eY = null !== (gY = null === (aY = rY[YY.name]) || void 0 === aY ? void 0 : aY.rootName) && void 0 !== gY ? gY : YY.name,
        NY = null !== (vY = null !== (uY = TY.customDisplayName) && void 0 !== uY ? uY : null === (sY = rY[YY.name]) || void 0 === sY ? void 0 : sY.displayName) && void 0 !== vY ? vY : QY(rY, eY);
      let BY = NY;
      const cY = null === (iY = TY.customAttributes) || void 0 === iY ? void 0 : iY.enchantmentTier;
      cY && (BY = (0, IY.qb)(NY, {
        colour: IY.nb[cY]
      }));
      const KY = null !== (yY = null !== (oY = null !== (WY = function(YY, rY) {
        var DY;
        if (void 0 === YY || null !== (DY = rY.customAttributes) && void 0 !== DY && DY.author) return YY;
        const AY = (0, FY.cc)(YY);
        return AY.every((YY => "string" === typeof YY)) ? YY : AY.map((YY => "string" === typeof YY ? YY : {
          icon: YY.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(TY.customDescription, TY)) && void 0 !== WY ? WY : null === (EY = rY[YY.name]) || void 0 === EY ? void 0 : EY.description) && void 0 !== oY ? oY : null === (mY = rY[eY]) || void 0 === mY ? void 0 : mY.description) && void 0 !== yY ? yY : "";
      let HY = KY;
      if (null !== (VY = TY.customAttributes) && void 0 !== VY && VY.enchantments) HY = (0, OY.c)(KY, TY.customAttributes.enchantments, TY.customAttributes.enchantmentData);
      else if (DY[eY]) HY = (0, IY.qb)(KY), HY.push({
        str: "\n"
      }), HY.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (SY = TY.customAttributes) && void 0 !== SY && SY.mobSettings) {
        var zY, ZY;
        const YY = TY.customAttributes.mobSettings;
        var CY, fY;
        if (HY = [], (0, AY.H)(TY.customAttributes.health) || (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: TY.customAttributes.health.toString()
          }), (0, AY.H)(YY.maxHealth) || (HY.push({
            str: "/"
          }), HY.push({
            str: YY.maxHealth.toString()
          }))), !(0, AY.H)(YY.attackDamage) && YY.attackDamage > 0 && (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: YY.attackDamage.toString()
          })), !(0, AY.H)(YY.secondaryAttackDamage) && YY.secondaryAttackDamage > 0 && (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: YY.secondaryAttackDamage.toString()
          })), (0, AY.H)(YY.baseRunningSpeed) || (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: YY.baseRunningSpeed.toFixed(2)
          })), "Saddled" === YY.metaInfo) HY.push({
          str: "\n"
        }), HY.push({
          str: {
            translationKey: "general:has"
          }
        }), HY.push({
          str: " "
        }), HY.push({
          icon: null !== (CY = null === (fY = YY.tameInfo) || void 0 === fY ? void 0 : fY.saddleItemName) && void 0 !== CY ? CY : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (HY.push({
            str: "\n"
          }), HY.push({
            str: "\n"
          }), YY.petInfo && null !== (zY = YY.tameInfo) && void 0 !== zY && zY.supportsFriendship) {
          const rY = RY.c.getIconsFromFriendshipPoints(YY.petInfo.friendshipPoints);
          for (const YY of rY) HY.push({
            icon: YY,
            style: {
              fontSize: "1.5em"
            }
          });
          HY.push({
            str: "\n"
          });
          const DY = RY.c.getMobHungerLevel(YY.petInfo.lastFedAt);
          for (const YY of RY.c.hungerLevelIcons[DY]) HY.push({
            icon: YY,
            style: {
              fontSize: "1.5em"
            }
          });
          HY.push({
            str: " "
          }), HY.push({
            str: RY.c.hungerLevelTranslations[DY],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (YY.tameInfo && null !== (ZY = YY.tameInfo) && void 0 !== ZY && ZY.supportsFriendship) {
          var jY, hY;
          let rY = null !== (jY = YY.tameInfo.likedFoods) && void 0 !== jY ? jY : [];
          HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Superliked]
            }
          }), HY.push({
            str: " "
          }), null !== (hY = YY.petInfo) && void 0 !== hY && hY.superlikedFoodKnown ? (HY.push({
            icon: YY.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), rY = rY.filter((rY => rY !== YY.petInfo.superlikedFood))) : HY.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Liked]
            }
          }), HY.push({
            str: " "
          });
          for (const YY of rY) HY.push({
            icon: YY,
            style: {
              fontSize: "1.5em"
            }
          });
          HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Neutral]
            }
          }), HY.push({
            str: " "
          });
          for (const DY of null !== (dY = YY.tameInfo.neutralFoods) && void 0 !== dY ? dY : []) {
            var dY;
            HY.push({
              icon: DY,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Disliked]
            }
          }), HY.push({
            str: " "
          });
          for (const DY of null !== (JY = YY.tameInfo.dislikedFoods) && void 0 !== JY ? JY : []) {
            var JY;
            HY.push({
              icon: DY,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        HY.length > 0 ? (HY.shift(), HY.unshift(...(0, IY.qb)(KY))) : HY = (0, IY.qb)(KY)
      }
      return {
        name: BY,
        desc: HY,
        fontStyle: null !== (lY = TY.customAttributes) && void 0 !== lY && lY.author ? "italic" : "normal"
      }
    }

    function WY(YY, rY, DY, FY) {
      const AY = gY(YY, DY),
        IY = gY(YY, FY);
      if (!AY) return !1;
      const RY = rY[AY.name].armourReduction,
        OY = rY[IY.name].armourReduction;
      if (OY === RY) {
        var aY, vY, uY, sY;
        const YY = null !== (aY = null === (vY = AY.attributes.customAttributes) || void 0 === vY ? void 0 : vY.enchantmentTier) && void 0 !== aY ? aY : "Tier 0",
          rY = null !== (uY = null === (sY = IY.attributes.customAttributes) || void 0 === sY ? void 0 : sY.enchantmentTier) && void 0 !== uY ? uY : "Tier 0";
        return parseInt(YY.replace("Tier ", "")) >= parseInt(rY.replace("Tier ", ""))
      }
      return RY > OY
    }

    function EY(YY) {
      let rY;
      if ("number" === typeof YY) {
        const DY = document.querySelector(`[data-inven-idx="${YY}"]`);
        if (!DY) return null;
        rY = DY.getBoundingClientRect()
      } else rY = YY.getBoundingClientRect();
      return {
        x: rY.left + rY.width / 2,
        y: rY.top + rY.height / 2
      }
    }
  },
  8649: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => iY,
      f: () => yY,
      i: () => QY
    });
    var FY = DY(1437),
      AY = DY(61),
      IY = DY(1314),
      RY = DY(4086),
      OY = DY(2211),
      gY = DY(1211),
      aY = DY(99),
      vY = DY(1834),
      uY = DY(1337),
      sY = DY(1125);

    function iY(YY) {
      let {
        show: rY,
        onClose: DY
      } = YY;
      const {
        requestedGameNameWithVariation: FY,
        lobbyName: AY,
        shownLobbyName: IY
      } = (0, vY.h)("connectedGame"), gY = (0, OY.d)(FY, AY, !1);
      return aY.featureFlags.canUseInviteLinks && (0, sY.jsx)(RY.e, {
        show: rY,
        close: DY,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, sY.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, sY.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, sY.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, sY.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === gY ? (0, sY.jsx)(uY.c, {}) : gY, (0, sY.jsx)("br", {}), "Lobby Name: ", IY, (0, sY.jsx)("br", {}), (0, sY.jsx)("br", {}), (0, sY.jsx)("br", {}), (0, sY.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, sY.jsx)(yY, {})]
        })
      })
    }

    function yY() {
      var YY;
      const {
        t: rY
      } = (0, gY.C)(), DY = null !== (YY = QY(aY.featureFlags.canUseInviteLinks)) && void 0 !== YY ? YY : "Loading Link...", [IY, RY] = (0, AY.useState)(0), [OY, vY] = (0, AY.useReducer)((YY => YY + 1), 0);
      return (0, AY.useEffect)((() => {
        const YY = setTimeout((() => {
          vY()
        }), 1100);
        return () => {
          clearTimeout(YY)
        }
      }), [IY]), aY.featureFlags.canUseInviteLinks && (0, sY.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, sY.jsx)("div", {
          className: "InviteLinkInner",
          children: DY
        }), (0, sY.jsx)(FY.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(DY).catch((YY => {
              console.error("Failed to copy invite link:", YY)
            })), RY(Date.now())
          },
          disabled: Date.now() - IY < 1e3,
          children: Date.now() - IY < 1e3 ? rY("general:copied") : rY("general:copy")
        })]
      })
    }

    function QY(YY) {
      const [rY, DY] = (0, AY.useState)(null);
      return (0, AY.useEffect)((() => {
        if (!YY) return;
        let rY = !0;
        return (0, IY.z)().then((YY => {
          rY && DY(YY)
        })).catch((YY => {
          console.error("Failed to get invite link:", YY)
        })), () => {
          rY = !1
        }
      }), [YY]), rY
    }
  },
  36372: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => eY
    });
    var FY = DY(61),
      AY = DY(2282),
      IY = DY(1778),
      RY = DY(605),
      OY = DY(25),
      gY = DY(1092),
      aY = DY.n(gY),
      vY = DY(35982),
      uY = DY(2360),
      sY = DY(35984),
      iY = DY(2378),
      yY = DY(2362),
      QY = DY(3207),
      oY = DY(19),
      WY = DY(1886),
      EY = DY(2219),
      mY = DY(1231),
      VY = DY(4491),
      SY = DY(1834),
      lY = DY(99),
      TY = DY(1125);
    const eY = (0, FY.memo)((function() {
      const YY = (0, AY.j)("lobbyLeaderboardInfo"),
        rY = (0, SY.h)("players"),
        DY = (0, SY.h)("lobbyLeaderboardRows"),
        OY = (0, SY.h)("hiddenPlayerNames"),
        gY = (0, FY.useRef)(null),
        [aY, vY] = (0, FY.useReducer)((YY => YY + 1), 0);
      return (0, FY.useEffect)((() => (0, WY.c)((() => {
        vY()
      }))), []), (0, TY.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, TY.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!YY) return (0, TY.jsx)(TY.Fragment, {});
            const FY = JSON.parse(JSON.stringify(YY)),
              AY = [...rY.ids],
              aY = {},
              vY = {};
            for (const YY of AY) {
              var uY, iY;
              aY[YY] = null === (uY = DY[YY]) || void 0 === uY ? void 0 : uY.colour;
              const rY = null === (iY = DY[YY]) || void 0 === iY ? void 0 : iY.values;
              rY && (vY[YY] = {
                ...rY
              })
            }
            const yY = Object.keys(FY);
            yY.sort(((YY, rY) => FY[YY].sortPriority - FY[rY].sortPriority)), AY.sort(((YY, rY) => {
              if (!vY[YY] || !vY[rY]) return 0;
              for (const DY of yY) {
                const AY = vY[YY][DY],
                  IY = vY[rY][DY];
                let RY = 0;
                if ("string" == typeof AY && "string" == typeof IY ? RY = AY.localeCompare(IY) : "number" == typeof AY && "number" == typeof IY ? RY = AY - IY : "number" == typeof AY && "string" == typeof IY ? RY = 1 : "string" == typeof AY && "number" == typeof IY && (RY = -1), RY) return RY * ("ascending" === FY[DY].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const YY of AY) {
              var QY, oY, SY;
              const {
                name: FY,
                ranks: AY,
                cosmetics: IY
              } = rY.byId[YY], OY = [], gY = null !== (QY = null === (oY = DY[YY]) || void 0 === oY || null === (SY = oY.tags) || void 0 === SY ? void 0 : SY.flatMap((YY => 0 === YY.length ? YY : [...YY, String.fromCharCode(8198)]))) && void 0 !== QY ? QY : [];
              OY.push(...gY), OY.push(...(0, mY.z)(AY, FY, (null === IY || void 0 === IY ? void 0 : IY.nameColour) === RY.e || null === IY || void 0 === IY ? void 0 : IY.nameColour)), vY[YY] ??= {}, vY[YY].name = OY
            }

            function lY(YY, DY) {
              if (vY[YY] && void 0 !== vY[YY][DY]) {
                if ("name" === DY) {
                  const {
                    name: FY,
                    cosmetics: AY
                  } = rY.byId[YY];
                  return (0, TY.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [AY && (0, TY.jsx)(EY.c, {
                      cosmetics: AY
                    }), " ", (0, TY.jsx)(IY.b, {
                      text: vY[YY][DY],
                      friendBadgeFor: (0, WY.e)(FY, OY) ? FY : void 0
                    })]
                  })
                }
                return (0, TY.jsx)(IY.b, {
                  text: vY[YY][DY]
                })
              }
              return ""
            }
            const eY = Object.keys(FY).filter((YY => !0 !== FY[YY].hidden)).map((YY => {
              var rY;
              return {
                key: YY,
                header: (0, TY.jsx)(IY.b, {
                  text: null !== (rY = FY[YY].displayName) && void 0 !== rY ? rY : ""
                })
              }
            }));
            return (0, TY.jsx)("div", {
              ref: gY,
              className: "LobbyLeaderboard",
              children: (0, TY.jsx)(VY.e, {
                columns: eY,
                rows: AY,
                getRowKey: YY => YY,
                renderRow: YY => {
                  const DY = YY !== rY.localId;
                  return (0, TY.jsx)(NY, {
                    playerId: YY,
                    playerName: rY.byId[YY].name,
                    isOtherPlayer: DY,
                    opensProfileCard: (0, sY.f)(DY, rY.byId[YY].name, OY),
                    lobbyLeaderboardInfo: FY,
                    getPlayerValue: lY,
                    playerColors: aY
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function NY(YY) {
      let {
        playerId: rY,
        playerName: DY,
        isOtherPlayer: AY,
        opensProfileCard: IY,
        lobbyLeaderboardInfo: RY,
        getPlayerValue: gY,
        playerColors: WY
      } = YY;
      const EY = (0, FY.useRef)(null);
      (0, FY.useEffect)((() => () => {
        uY.b.closeIfOwner(EY)
      }), []);
      const mY = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            OY.g.vo("OpenReportMenu", {
              playerEId: rY,
              playerName: DY,
              vv: null,
              serverChatMsgId: null
            })
          }
        },
        VY = () => ({
          ...(0, sY.b)(rY, DY),
          showLocation: !1,
          status: null,
          extraActions: [mY],
          friendRequestSource: "leaderboard"
        });
      return (0, TY.jsxs)("tr", {
        ref: EY,
        "data-pad-focusable": IY || void 0,
        [uY.f]: IY || void 0,
        onClick: IY ? () => {
          var YY;
          uY.b.toggle(EY, {
            ...VY(),
            anchor: null !== (YY = EY.current.querySelector(".PlayerPfpAndName")) && void 0 !== YY ? YY : EY.current
          })
        } : void 0,
        onContextMenu: IY ? YY => {
          (0, iY.d)(EY, YY, VY(), oY.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: IY ? YY => {
          (0, yY.d)(YY, (() => (0, sY.b)(rY, DY).playerSocialPreview))
        } : void 0,
        children: [Object.keys(RY).map((YY => !0 === RY[YY].hidden ? null : (0, TY.jsxs)("td", {
          className: aY()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !AY
          }),
          children: [(0, TY.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: gY(rY, YY)
          }), (0, TY.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: WY[rY]
            }
          })]
        }, YY))), AY && !IY && (0, TY.jsx)(vY.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: EY,
          options: [{
            icon: mY.icon,
            text: mY.text,
            onPointerDown: mY.onClick
          }, ...null === DY || lY.featureFlags.useSocialFeatures ? [] : (0, QY.b)(null, DY)]
        })]
      })
    }
  },
  4349: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => EY,
      b: () => WY
    });
    var FY = DY(61),
      AY = DY(1430),
      IY = DY(1778),
      RY = DY(4355),
      OY = DY(1125);
    const gY = (0, FY.memo)((function(YY) {
      let {
        initialParameters: rY
      } = YY;
      const DY = (0, FY.useRef)(null),
        AY = (0, FY.useRef)(null),
        gY = (0, FY.useRef)(0),
        aY = (0, FY.useRef)(null),
        vY = rY.description,
        uY = rY.pD,
        {
          scale: sY,
          rotation: iY
        } = null !== rY && void 0 !== rY ? rY : {},
        yY = (0, RY.d)();
      return (0, FY.useEffect)((() => {
        const YY = yY.onFrame((() => {
          const YY = yY.getState();
          if (!YY.isActive || !DY.current || !AY.current) return;
          const rY = YY.state;
          if (DY.current.value = rY.progress, rY.clickCount > gY.current) {
            gY.current = rY.clickCount;
            const YY = AY.current;
            YY.classList.add("pulse"), aY.current = setTimeout((() => {
              YY.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(aY.current), YY()
        }
      }), [yY]), (0, OY.jsx)(OY.Fragment, {
        children: (0, OY.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== sY && {
              "--scale": sY
            },
            ...null !== iY && {
              "--rotation": `${iY}deg`
            }
          },
          children: [(0, OY.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: DY
          }), (0, OY.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: AY,
            children: (0, OY.jsx)(IY.b, {
              text: [{
                icon: uY
              }]
            })
          }), (0, OY.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, OY.jsx)(IY.b, {
              text: vY
            })
          })]
        })
      })
    }));
    var aY = DY(1092),
      vY = DY.n(aY);
    const uY = 2 * Math.PI * 90,
      sY = (0, FY.memo)((function(YY) {
        let {
          initialParameters: rY
        } = YY;
        const DY = (0, FY.useRef)(null),
          AY = (0, FY.useRef)(null),
          gY = (0, FY.useRef)(null),
          aY = rY.label,
          sY = rY.icon,
          iY = rY.xD,
          {
            scale: yY,
            rotation: QY,
            nD: oY
          } = null !== rY && void 0 !== rY ? rY : {},
          WY = (0, RY.d)();
        return (0, FY.useEffect)((() => {
          const YY = WY.onFrame((() => {
            var YY, rY;
            const FY = WY.getState();
            if (!FY.isActive || !AY.current) return;
            const IY = FY.state,
              RY = null !== (YY = IY.timeRemaining) && void 0 !== YY ? YY : 0,
              OY = null !== (rY = IY.GD) && void 0 !== rY ? rY : 1,
              aY = uY * (1 - RY / OY);
            AY.current.style.strokeDashoffset = `${aY}`, DY.current && (DY.current.style.opacity = RY > 0 ? "1" : "0"), gY.current && iY && (gY.current.textContent = `${(RY/1e3).toFixed(1)}s`)
          }));
          return () => {
            YY()
          }
        }), [WY, iY]), (0, OY.jsxs)("div", {
          className: "QTETimedClick",
          ref: DY,
          style: {
            ...null !== yY && {
              "--scale": yY
            },
            ...null !== QY && {
              "--rotation": `${QY}deg`
            }
          },
          children: [(0, OY.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, OY.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, OY.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, OY.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: uY,
                ref: AY
              })]
            }), (0, OY.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, OY.jsx)(IY.b, {
                text: [{
                  icon: sY
                }],
                className: vY()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: oY
                })
              })
            })]
          }), (0, OY.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, OY.jsx)(IY.b, {
              text: aY,
              className: "QTETimedClickLabelText"
            }), iY && (0, OY.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: gY
            })]
          })]
        })
      })),
      iY = (0, FY.memo)((function(YY) {
        let {
          initialParameters: rY
        } = YY;
        const DY = (0, FY.useRef)(null),
          AY = (0, FY.useRef)(null),
          gY = (0, FY.useRef)(null),
          aY = (0, FY.useRef)(!1),
          vY = rY.description,
          uY = null === rY || void 0 === rY ? void 0 : rY.icon,
          sY = (0, RY.d)();
        return (0, FY.useEffect)((() => {
          const YY = sY.onFrame((() => {
            const YY = sY.getState();
            if (!YY.isActive) return;
            const rY = YY.state;
            if (DY.current) {
              const YY = 100 * (rY.catchZonePosition - rY.UD / 2);
              DY.current.style.left = `${YY}%`, DY.current.style.width = 100 * rY.UD + "%", rY.isCatching !== aY.current && (aY.current = rY.isCatching, rY.isCatching ? DY.current.classList.add("catching") : DY.current.classList.remove("catching"))
            }
            AY.current && (AY.current.style.left = 100 * rY.moverPosition + "%"), gY.current && (gY.current.value = rY.progress)
          }));
          return () => {
            YY()
          }
        }), [sY]), (0, OY.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, OY.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, OY.jsx)(IY.b, {
              text: vY
            })
          }), (0, OY.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: gY
          }), (0, OY.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, OY.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: DY
            }), (0, OY.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: AY,
              children: (0, OY.jsx)("span", {
                children: uY && (0, OY.jsx)(IY.b, {
                  text: [{
                    icon: uY,
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
    var yY = DY(625);
    const QY = (0, FY.memo)((function(YY) {
        let {
          initialParameters: rY
        } = YY;
        const DY = (0, FY.useRef)(null),
          AY = rY.label,
          gY = rY.AF,
          {
            icon: aY,
            scale: vY,
            rotation: uY
          } = null !== rY && void 0 !== rY ? rY : {},
          sY = 100 * (.5 - gY / 2),
          iY = 100 * gY,
          QY = (0, RY.d)();
        return (0, FY.useEffect)((() => {
          const YY = QY.onFrame((() => {
            const YY = QY.getState();
            if (!YY.isActive || !DY.current) return;
            const rY = YY.state;
            DY.current.style.left = 100 * rY.markerPosition + "%"
          }));
          return () => {
            YY()
          }
        }), [QY]), (0, OY.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, yY.H)(vY) && {
              "--scale": vY
            },
            ...!(0, yY.H)(uY) && {
              "--rotation": `${uY}deg`
            }
          },
          children: [aY && (0, OY.jsx)(IY.b, {
            text: [{
              icon: aY
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, OY.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, OY.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${sY}%`,
                width: `${iY}%`
              }
            }), (0, OY.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: DY
            })]
          }), (0, OY.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, OY.jsx)(IY.b, {
              text: AY
            })
          })]
        })
      })),
      oY = (0, FY.memo)((function(YY) {
        let {
          initialParameters: rY
        } = YY;
        const DY = (0, FY.useRef)(null),
          [AY, gY] = (0, FY.useState)((() => new Array(rY.RF).fill("pending"))),
          [aY, vY] = (0, FY.useState)((() => {
            const YY = rY.vF;
            return (0, yY.H)(YY) || YY <= 0 ? [] : new Array(YY).fill("pending")
          })),
          uY = rY.label,
          {
            icon: sY
          } = rY,
          iY = (0, FY.useRef)(0),
          QY = (0, FY.useRef)(0),
          oY = (0, FY.useRef)([]),
          WY = (0, RY.d)();
        return (0, FY.useEffect)((() => {
          const YY = WY.onFrame((() => {
            const YY = WY.getState();
            if (!YY.isActive || !DY.current) return;
            const rY = YY.state,
              FY = 30 + 60 * rY.outerCircleProgress;
            if (DY.current.setAttribute("r", String(FY)), !0 === rY.lastClickResult && rY.successes > iY.current) {
              DY.current.classList.remove("QTERhythmClickOuterCircle--miss"), DY.current.classList.add("QTERhythmClickOuterCircle--hit");
              const YY = setTimeout((() => {
                var YY;
                null === (YY = DY.current) || void 0 === YY || YY.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              oY.current.push(YY)
            } else if (!1 === rY.lastClickResult && rY.misses > QY.current) {
              DY.current.classList.remove("QTERhythmClickOuterCircle--hit"), DY.current.classList.add("QTERhythmClickOuterCircle--miss");
              const YY = setTimeout((() => {
                var YY;
                null === (YY = DY.current) || void 0 === YY || YY.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              oY.current.push(YY)
            }
            rY.successes === iY.current && rY.misses === QY.current || (iY.current = rY.successes, QY.current = rY.misses, gY((YY => {
              const DY = [...YY];
              for (let FY = 0; FY < rY.RF; FY++) DY[FY] = FY < rY.successes ? "success" : "pending";
              return DY
            })), vY((YY => {
              if (0 === YY.length) return YY;
              const DY = [...YY];
              for (let FY = 0; FY < DY.length; FY++) DY[FY] = FY < rY.misses ? "miss" : "pending";
              return DY
            })))
          }));
          return () => {
            YY();
            for (const YY of oY.current) clearTimeout(YY);
            oY.current = []
          }
        }), [WY]), (0, OY.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, OY.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: AY.map(((YY, rY) => (0, OY.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === YY ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, rY)))
          }), (0, OY.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, OY.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, OY.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, OY.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: DY
              })]
            }), sY && (0, OY.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, OY.jsx)(IY.b, {
                text: [{
                  icon: sY
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), aY.length > 0 && (0, OY.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: aY.map(((YY, rY) => (0, OY.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === YY ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, rY)))
          }), (0, OY.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, OY.jsx)(IY.b, {
              text: uY
            })
          })]
        })
      }));

    function WY(YY) {
      let {
        qte: rY
      } = YY;
      switch (rY.type) {
        case "progressBar":
          return (0, OY.jsx)(gY, {
            initialParameters: rY.parameters
          });
        case "timedClick":
          return (0, OY.jsx)(sY, {
            initialParameters: rY.parameters
          });
        case "gravityBar":
          return (0, OY.jsx)(iY, {
            initialParameters: rY.parameters
          });
        case "precisionBar":
          return (0, OY.jsx)(QY, {
            initialParameters: rY.parameters
          });
        case "rhythmClick":
          return (0, OY.jsx)(oY, {
            initialParameters: rY.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const EY = (0, FY.memo)((function() {
      const [YY, rY] = (0, FY.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, AY.g)("qteStateUpdated", (YY => {
        rY(YY)
      })), YY.isActive && YY.type ? (0, OY.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, OY.jsx)(WY, {
          qte: YY
        })
      }) : null
    }))
  },
  4355: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY,
      d: () => gY
    });
    var FY = DY(61),
      AY = DY(1298),
      IY = DY(4361);
    const RY = {
        getState: () => IY.b.getCurrentState(),
        onFrame: AY.p
      },
      OY = (0, FY.createContext)(RY);

    function gY() {
      return (0, FY.useContext)(OY)
    }
  },
  8739: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1834),
      OY = DY(1125);

    function gY(YY) {
      const rY = Math.floor(YY / 3600),
        DY = Math.floor(YY % 3600 / 60),
        FY = Math.floor(YY % 60),
        AY = `${DY.toString().padStart(2,"0")}:${FY.toString().padStart(2,"0")}`;
      return rY > 0 ? `${rY}:${AY}` : AY
    }
    const aY = (0, FY.memo)((function(YY) {
      let {
        className: rY
      } = YY;
      const {
        recording: DY,
        seconds: FY
      } = (0, RY.h)("replayRecorder");
      return DY ? (0, OY.jsxs)("div", {
        className: IY()("RecordingIndicator", rY),
        children: [(0, OY.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, OY.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, OY.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: gY(FY)
        })]
      }) : null
    }))
  },
  35782: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      d: () => sY
    });
    var FY = DY(61),
      AY = DY(1346),
      IY = DY(1211),
      RY = DY(1337),
      OY = DY(3061),
      gY = DY(4507),
      aY = DY(1125);

    function vY(YY) {
      let {
        loading: rY,
        schematics: DY,
        onSchematicPicked: FY,
        selectedSchematicIdList: AY = [],
        disableAutoExport: gY
      } = YY;
      const {
        t: vY
      } = (0, IY.C)();
      return (0, aY.jsxs)("div", {
        className: "SchematicList",
        children: [rY && (0, aY.jsx)(RY.c, {}), !rY && 0 === DY.length && (0, aY.jsx)("div", {
          className: "NoSchematicsText",
          children: vY("worldBuilder:noSavedSchematic")
        }), !rY && DY.map((YY => (0, aY.jsx)(OY.g, {
          source: {
            type: "schematic",
            schematic: YY
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            FY(YY)
          },
          isSelected: AY.includes(YY.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: YY.isAutoExported && gY,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, YY.schematicId)))]
      })
    }

    function uY(YY) {
      let {
        ownedSchematics: rY,
        currentWorldSchematicId: DY,
        onClose: AY
      } = YY;
      const {
        t: RY
      } = (0, IY.C)(), [OY, uY] = (0, FY.useState)(null);
      return (0, aY.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === OY && (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: RY("worldBuilder:schematicList")
          }), (0, aY.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: RY("worldBuilder:clickSchematicForOptions")
          }), (0, aY.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, aY.jsx)(vY, {
              loading: !1,
              schematics: rY,
              onSchematicPicked: YY => {
                uY(YY)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== OY && (0, aY.jsx)(gY.g, {
          schematic: OY,
          inSourceWorld: OY.schematicId === DY,
          onSchematicUpdate: YY => {
            uY(YY)
          },
          onClose: () => {
            uY(null), AY()
          }
        })]
      })
    }

    function sY(YY) {
      let {
        ownedSchematics: rY,
        currentWorldSchematicId: DY,
        onClose: FY
      } = YY;
      AY.NotificationProvider.showCustomPopup({
        body: YY => (0, aY.jsx)(uY, {
          ownedSchematics: rY,
          currentWorldSchematicId: DY,
          onClose: YY
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FY,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36311: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => SY,
      i: () => VY
    });
    var FY = DY(3832),
      AY = DY(1430),
      IY = DY(61),
      RY = DY(6041),
      OY = DY(3823),
      gY = DY(1287),
      aY = DY(1808),
      vY = DY(1778),
      uY = DY(1437),
      sY = DY(1211),
      iY = DY(36314),
      yY = DY(1092),
      QY = DY.n(yY),
      oY = DY(1314),
      WY = DY(1098),
      EY = DY(1284),
      mY = DY(1125);
    const VY = "SleepingOverlay";

    function SY() {
      const {
        t: YY
      } = (0, sY.C)(), [rY, DY] = (0, IY.useState)(!1), [yY, SY] = (0, IY.useState)(null), [TY, eY] = (0, IY.useState)(1), [NY, BY] = (0, IY.useState)(!1), [cY, KY] = (0, IY.useState)(!1), HY = (0, IY.useRef)(0), zY = (0, IY.useRef)(!1), ZY = (0, IY.useRef)(!1), CY = (0, IY.useRef)(), fY = (0, IY.useRef)(null);

      function jY() {
        const YY = null !== yY && void 0 !== yY ? yY : "Rested Speed";
        aY.gameBridge.send("wakeUp", cY ? YY : null), fY.current = null, DY(!1), SY(null), eY(1), BY(!1), KY(!1)
      }

      function hY() {
        return !NY && (jY(), !0)
      }
      return (0, AY.g)("PlayerPhysicsTypeUpdate", (YY => {
        YY !== fY.current && (fY.current = YY, YY === RY.n.SLEEPING ? (ZY.current || (HY.current = aY.gameBridge.lookup("cameraZoom", null), ZY.current = !0), zY.current = !0, aY.gameBridge.send("setCameraZoom", 3), DY(!0), eY(function() {
          for (const YY of aY.gameBridge.lookup("blocksStandingOn", null)) {
            if (iY.c.leafBeds.includes(YY)) return console.log(`Found leaf bed: ${YY}`), 1;
            if (iY.c.woolBeds.includes(YY)) return console.log(`Found woold bed: ${YY}`), 2;
            if (iY.c.strongBeds.includes(YY)) return console.log(`Found strong bed ${YY}`), 3
          }
          return 1
        }())) : (ZY.current = !1, DY(!1), SY(null), eY(1)))
      })), (0, IY.useEffect)((() => () => {
        (0, gY.j)(VY)
      }), []), (0, IY.useEffect)((() => {
        rY ? (0, gY.k)(VY) : ((0, gY.j)(VY), zY.current && (aY.gameBridge.send("setCameraZoom", HY.current), zY.current = !1))
      }), [rY]), (0, EY.t)("overlay", CY, hY, rY), (0, mY.jsx)(FY.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: rY,
        timeout: 300,
        nodeRef: CY,
        unmountOnExit: !0,
        children: (0, mY.jsx)("div", {
          ref: CY,
          onClick: YY => {
            hY() && YY.stopPropagation()
          },
          children: (0, mY.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, mY.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: OY.d.map((rY => (0, mY.jsxs)(lY, {
                restedEffect: rY,
                eR: yY,
                setChosenRestedEffect: SY,
                children: [(0, mY.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, mY.jsx)(vY.b, {
                    text: [{
                      icon: rY
                    }]
                  }), OY.c[rY].shortName]
                }), (0, mY.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: YY(OY.c[rY].description, {
                    time: OY.c[rY].effectLevelDurations[TY] / 6e4
                  })
                })]
              }, rY)))
            }), (0, mY.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, mY.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, mY.jsxs)(uY.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: YY => {
                  cY ? jY() : (BY(!0), (0, oY.V)((() => {
                    BY(!1), KY(!0)
                  }), !0)), YY.stopPropagation()
                },
                loading: NY,
                children: [!cY && (0, mY.jsxs)(mY.Fragment, {
                  children: [(0, mY.jsx)(WY.e, {
                    name: "film"
                  }), " ", YY("classicGame:watchAdToGetRestedPerk")]
                }), cY && YY("classicGame:wakeUp")]
              }), (0, mY.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, mY.jsx)("div", {
                  className: QY()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === TY
                  }),
                  children: (0, mY.jsx)(vY.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, mY.jsx)("div", {
                  className: QY()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === TY
                  }),
                  children: (0, mY.jsx)(vY.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, mY.jsx)("div", {
                  className: QY()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === TY
                  }),
                  children: (0, mY.jsx)(vY.b, {
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
    const lY = (0, IY.memo)((function(YY) {
      let {
        children: rY,
        restedEffect: DY,
        eR: FY,
        setChosenRestedEffect: AY
      } = YY;
      return DY === FY ? (0, mY.jsx)(uY.n, {
        onClick: YY => {
          YY.stopPropagation()
        },
        children: rY
      }) : (0, mY.jsx)(uY.j, {
        onClick: YY => {
          AY(DY), YY.stopPropagation()
        },
        children: rY
      })
    }))
  },
  35984: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      f: () => gY
    });
    var FY = DY(605),
      AY = DY(1808),
      IY = DY(1623),
      RY = DY(99),
      OY = DY(1267);

    function gY(YY, rY, DY) {
      return RY.featureFlags.useSocialFeatures && YY && null === (0, OY.c)(rY, DY)
    }

    function aY(YY, rY) {
      var DY, RY;
      const OY = IY.c.getSocialState().friends.find((YY => YY.name.toLowerCase() === rY.toLowerCase())),
        gY = AY.gameBridge.latest("players").byId[YY],
        aY = void 0 !== gY && gY.name === rY,
        vY = aY && null !== (DY = gY.cosmetics) && void 0 !== DY ? DY : void 0,
        uY = OY && vY ? {
          ...OY,
          cosmetics: vY
        } : OY;
      return {
        playerSocialPreview: null !== uY && void 0 !== uY ? uY : {
          isError: !1,
          name: rY,
          ranks: aY ? [...gY.ranks] : [],
          cosmetics: null !== vY && void 0 !== vY ? vY : {},
          nameColour: null !== (RY = null === vY || void 0 === vY ? void 0 : vY.nameColour) && void 0 !== RY ? RY : FY.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== OY
      }
    }
  },
  8745: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(4093),
      AY = DY(4097);

    function IY(YY) {
      let {
        children: rY,
        showing: DY,
        globallyUniqueKey: IY,
        alwaysMountChildren: RY = !1,
        doGameplayStartStopOnShow: OY = !0,
        keepsMovement: gY = !1
      } = YY;
      return (0, AY.b)(!0, DY, IY, gY), (0, FY.c)(OY, DY), DY || RY ? rY : null
    }
  },
  4491: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1125);

    function OY(YY) {
      let {
        columns: rY,
        rows: DY,
        getRowKey: AY,
        renderRow: OY,
        className: gY
      } = YY;
      return (0, RY.jsxs)("table", {
        className: IY()("Table", gY),
        children: [(0, RY.jsx)("thead", {
          children: (0, RY.jsx)("tr", {
            children: rY.map((YY => (0, RY.jsx)("th", {
              children: YY.header
            }, YY.key)))
          })
        }), (0, RY.jsx)("tbody", {
          children: DY.map((YY => (0, RY.jsx)(FY.Fragment, {
            children: OY(YY)
          }, AY(YY))))
        })]
      })
    }
  },
  36263: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => eY,
      d: () => lY,
      f: () => TY,
      j: () => yY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(76),
      OY = DY(1359),
      gY = DY(1437),
      aY = DY(1354),
      vY = DY(1284),
      uY = DY(1211),
      sY = DY(36268),
      iY = DY(1125);

    function yY(YY) {
      const [rY, DY] = (0, IY.useState)((() => (0, sY.o)(YY)));
      return (0, IY.useEffect)((() => (DY((0, sY.o)(YY)), (0, sY.O)((() => {
        DY((0, sY.o)(YY))
      })))), [YY]), rY
    }

    function QY(YY, rY) {
      "function" === typeof YY ? YY(rY) : YY && (YY.current = rY)
    }

    function oY(YY) {
      let {
        tutorial: rY,
        step: DY,
        enabled: FY = !0
      } = YY;
      const AY = yY(rY);
      return FY && AY === DY
    }

    function WY(YY, rY) {
      const DY = (0, sY.r)(YY),
        FY = DY.indexOf(rY);
      return !DY.slice(FY + 1).some((rY => (0, sY.B)(YY, rY)))
    }

    function EY(YY, rY, DY, FY) {
      let {
        tutorial: AY,
        step: IY,
        waitForClick: RY = !1,
        onPrevious: OY
      } = YY;
      const gY = rY && (0, sY.x)(AY, IY),
        aY = rY && !WY(AY, IY),
        uY = RY ? FY : DY;
      let iY = null;
      gY ? iY = () => {
        null === OY || void 0 === OY || OY(), (0, sY.v)(AY, IY)
      } : aY && (iY = () => {
        (0, sY.k)(AY)
      }), (0, vY.t)("popup", null !== uY && void 0 !== uY ? uY : DY, iY, rY && null !== uY, null, gY ? void 0 : "controller:menusSkipTutorial")
    }

    function mY(YY) {
      let {
        tutorial: rY,
        step: DY,
        text: FY,
        waitForClick: AY = !1,
        onPrevious: IY
      } = YY;
      const {
        t: RY
      } = (0, uY.C)(), OY = WY(rY, DY);
      return (0, iY.jsxs)(iY.Fragment, {
        children: [(0, iY.jsx)("div", {
          className: "TutorialStepText",
          children: FY
        }), (0, iY.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, sY.x)(rY, DY) && (0, iY.jsx)(gY.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === IY || void 0 === IY || IY(), (0, sY.v)(rY, DY)
            },
            children: RY("tutorial:back")
          }), !AY && (0, iY.jsx)(gY.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, sY.d)(DY)
            },
            padDefaultFocus: !0,
            children: RY(OY ? "tutorial:done" : "tutorial:next")
          }), !OY && (0, iY.jsx)(gY.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, sY.k)(rY)
            },
            children: RY("tutorial:skip")
          })]
        })]
      })
    }
    const VY = 6;

    function SY(YY) {
      let {
        rect: rY,
        margin: DY
      } = YY;
      const FY = Math.max(0, rY.top - DY),
        AY = rY.bottom + DY,
        IY = Math.max(0, rY.left - DY),
        RY = rY.right + DY;
      return (0, iY.jsxs)(iY.Fragment, {
        children: [(0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: FY
          }
        }), (0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: AY,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FY,
            left: 0,
            width: IY,
            height: AY - FY
          }
        }), (0, iY.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FY,
            left: RY,
            right: 0,
            height: AY - FY
          }
        })]
      })
    }

    function lY(YY) {
      let {
        target: rY,
        placement: DY,
        boxRef: FY,
        className: gY,
        spotlightMargin: vY = VY,
        children: uY
      } = YY;
      const {
        getArrowProps: sY,
        getTooltipProps: yY,
        setTooltipRef: QY,
        setTriggerRef: oY
      } = (0, OY.d)({
        placement: DY,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, vY]
      });
      (0, IY.useLayoutEffect)((() => {
        oY(rY)
      }), [rY, oY]);
      const WY = function(YY, rY) {
        const [DY, FY] = (0, IY.useState)(null);
        return (0, IY.useEffect)((() => {
          if (!rY || !YY) return void FY(null);
          let DY = 0,
            AY = null;
          const IY = () => {
            const rY = YY.getBoundingClientRect();
            AY && rY.left === AY.left && rY.top === AY.top && rY.width === AY.width && rY.height === AY.height || (AY = rY, FY(rY)), DY = requestAnimationFrame(IY)
          };
          return IY(), () => {
            cancelAnimationFrame(DY)
          }
        }), [YY, rY]), DY
      }(rY, !0);
      (0, IY.useEffect)((() => {
        null === rY || void 0 === rY || rY.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [rY]);
      const EY = (0, IY.useCallback)((YY => {
        QY(YY), FY && (FY.current = YY)
      }), [QY, FY]);
      return (0, RY.createPortal)((0, iY.jsxs)(iY.Fragment, {
        children: [WY && (0, iY.jsx)(SY, {
          rect: WY,
          margin: vY
        }), (0, iY.jsxs)("div", {
          ref: EY,
          ...yY({
            className: AY()("tooltip-container SmallTextLight TutorialStep", gY)
          }),
          children: [uY, (0, iY.jsx)("div", {
            ...sY({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, aY.h)())
    }
    const TY = (0, IY.forwardRef)((function(YY, rY) {
      let {
        placement: DY = "right",
        children: FY,
        ...AY
      } = YY;
      const RY = oY(AY),
        OY = (0, IY.useRef)(null),
        gY = (0, IY.useRef)(null);
      EY(AY, RY, OY, gY);
      const [aY, vY] = (0, IY.useState)(null), uY = FY.ref, sY = (0, IY.useCallback)((YY => {
        gY.current = YY, vY(YY), QY(rY, YY), QY(uY, YY)
      }), [rY, uY]);
      return (0, iY.jsxs)(iY.Fragment, {
        children: [(0, IY.cloneElement)(FY, {
          ref: sY
        }), RY && (0, iY.jsx)(lY, {
          target: aY,
          placement: DY,
          boxRef: OY,
          children: (0, iY.jsx)(mY, {
            ...AY
          })
        })]
      })
    }));

    function eY(YY) {
      const rY = oY(YY),
        DY = (0, IY.useRef)(null);
      return EY(YY, rY, DY, null), rY ? (0, RY.createPortal)((0, iY.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, iY.jsx)("div", {
          ref: DY,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, iY.jsx)(mY, {
            ...YY
          })
        })
      }), (0, aY.h)()) : null
    }
  },
  36130: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => RY,
      j: () => OY,
      l: () => gY
    });
    var FY = DY(61),
      AY = DY(1143);
    const IY = 8,
      RY = "InGameHeaderContainer",
      OY = "TopRightElements";

    function gY(YY) {
      const [rY] = (0, AY.c)(), [DY, gY] = (0, FY.useState)(!1);
      return (0, FY.useLayoutEffect)((() => {
        if (!YY) return;
        const rY = document.querySelector(`.${RY}`),
          DY = document.querySelector(`.${OY}`),
          FY = () => {
            const FY = YY.getBoundingClientRect(),
              AY = rY ? rY.getBoundingClientRect().right : 0,
              RY = DY ? DY.getBoundingClientRect().left : window.innerWidth,
              OY = FY.left < AY + IY,
              aY = FY.right > RY - IY;
            gY(OY || aY)
          };
        FY();
        const AY = new ResizeObserver(FY);
        return AY.observe(YY), rY && AY.observe(rY), DY && AY.observe(DY), () => {
          AY.disconnect()
        }
      }), [YY, rY]), DY
    }
  },
  6128: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(61),
      AY = DY(40);

    function IY(YY, rY) {
      var DY;
      const [IY, RY] = (0, FY.useState)(null !== (DY = AY.m.getItem(YY)) && void 0 !== DY ? DY : rY);
      return [IY, rY => {
        AY.m.setItem(YY, rY), RY(rY)
      }]
    }
  },
  8189: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY,
      g: () => yY,
      k: () => QY,
      l: () => iY,
      n: () => sY
    });
    var FY = DY(61),
      AY = DY(8197),
      IY = DY(25),
      RY = DY(1808),
      OY = DY(40),
      gY = DY(1267),
      aY = DY(1823);
    const vY = 50;
    const uY = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = YY => {
          if (0 === this.listeners.size) {
            var rY, DY;
            this.state = {
              ...this.state,
              channel: null !== (rY = null === (DY = aY.b.get("chatChannels")) || void 0 === DY ? void 0 : DY[0]) && void 0 !== rY ? rY : null
            };
            const YY = IY.g.subscribe("reportPlayer", (YY => {
              let {
                playerEId: rY
              } = YY;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, rY]
              })
            }));
            this.stopListening = [RY.gameBridge.subscribe("chatReceived", (YY => {
              let {
                serverChatMsgId: rY,
                content: DY,
                author: FY
              } = YY;
              this.addMessage(rY, DY, FY)
            })), () => {
              IY.g.unsubscribe(YY)
            }, aY.b.subscribe("chatChannels", (YY => {
              var rY;
              this.setState({
                ...this.state,
                channel: null !== (rY = null === YY || void 0 === YY ? void 0 : YY[0]) && void 0 !== rY ? rY : null
              })
            }))]
          }
          return this.listeners.add(YY), () => {
            if (this.listeners.delete(YY), 0 === this.listeners.size) {
              for (const YY of this.stopListening) YY();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FY = {
          serverChatMsgId: YY,
          content: rY,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: DY
        };
        this.setState({
          ...this.state,
          messages: [FY, ...this.state.messages].slice(0, AY.i)
        })
      }
      selectNextChannel() {
        const YY = aY.b.get("chatChannels");
        if (YY) {
          const rY = YY.findIndex((YY => {
            var rY;
            return YY.channelName === (null === (rY = this.state.channel) || void 0 === rY ? void 0 : rY.channelName)
          }));
          this.setState({
            ...this.state,
            channel: YY[(rY + 1) % YY.length]
          })
        }
      }
      setState(YY) {
        this.state = YY;
        for (const rY of this.listeners) rY()
      }
    };

    function sY() {
      const [YY, rY] = (0, FY.useState)(uY.getState);
      return (0, FY.useEffect)((() => {
        const YY = uY.subscribe((() => {
          rY(uY.getState())
        }));
        return rY(uY.getState()), YY
      }), []), YY
    }

    function iY(YY) {
      var rY, DY;
      if (YY.startsWith("/report")) {
        var FY;
        const rY = null !== (FY = YY.replace("/report", "").trim().split(" ")[0]) && void 0 !== FY ? FY : "";
        if ("" === rY) return void uY.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const DY = RY.gameBridge.latest("players"),
          AY = RY.gameBridge.latest("hiddenPlayerNames"),
          OY = YY => {
            var FY, IY;
            const RY = null !== (FY = null === (IY = DY.byId[YY]) || void 0 === IY ? void 0 : IY.name) && void 0 !== FY ? FY : null;
            return null !== RY && (RY === rY || (0, gY.c)(RY, AY) === rY)
          };
        if (null !== DY.localId && OY(DY.localId)) return void uY.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const YY of DY.ids)
          if (OY(YY)) return IY.g.vo("OpenReportMenu", {
            playerEId: YY,
            playerName: DY.byId[YY].name,
            vv: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        uY.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      RY.gameBridge.send("sendChatMessage", {
          vv: YY,
          channelName: null !== (rY = null === (DY = uY.getState().channel) || void 0 === DY ? void 0 : DY.channelName) && void 0 !== rY ? rY : null
        }),
        function(YY) {
          var rY;
          const DY = null !== (rY = OY.m.getItem("recentlySentChatMsgs")) && void 0 !== rY ? rY : [];
          DY.push(YY), DY.length > vY && DY.shift();
          OY.m.setItem("recentlySentChatMsgs", DY)
        }(YY)
    }

    function yY() {
      var YY;
      return null !== (YY = OY.m.getItem("recentlySentChatMsgs")) && void 0 !== YY ? YY : []
    }

    function QY(YY) {
      var rY;
      let DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const FY = null !== (rY = OY.m.getItem("recentlySentChatMsgs")) && void 0 !== rY ? rY : [],
        AY = FY.length + 1,
        IY = DY ? (YY % AY + AY) % AY : Math.min(FY.length, Math.max(0, YY));
      return {
        stepsBack: IY,
        text: 0 === IY ? "" : FY[FY.length - IY]
      }
    }
  },
  8138: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      g: () => IY
    });
    var FY = DY(1861);
    const AY = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      IY = YY => "string" === typeof YY.icon && "" !== YY.icon && "string" === typeof YY.keycode && AY.test(YY.keycode),
      RY = YY => "Space" === YY ? "_" : FY.f[YY]
  },
  8208: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(19);

    function AY() {
      return !FY.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8291: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      f: () => IY
    });
    var FY = DY(61),
      AY = DY(3944);

    function IY() {
      const [YY, rY] = (0, FY.useState)(AY.i);
      return (0, FY.useEffect)((() => {
        const YY = () => {
          rY((0, AY.i)())
        };
        return window.addEventListener("resize", YY), () => {
          window.removeEventListener("resize", YY)
        }
      }), []), YY
    }

    function RY() {
      return (0, AY.T)().hudLayouts[IY()]
    }
  },
  8216: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => uY,
      E: () => vY,
      G: () => sY,
      I: () => iY,
      b: () => IY,
      f: () => OY,
      i: () => aY,
      m: () => gY,
      q: () => RY,
      r: () => AY,
      t: () => FY,
      x: () => yY
    });
    const FY = 14,
      AY = 6,
      IY = (FY + AY) / 2,
      RY = 200,
      OY = RY / 2,
      gY = RY / 2 - 1,
      aY = AY / FY * (RY / 2),
      vY = (YY, rY) => -Math.PI / 2 + 2 * YY * Math.PI / rY,
      uY = (YY, rY, DY) => {
        const FY = 2 * Math.PI / DY;
        return (Math.round((Math.atan2(rY, YY) + Math.PI / 2) / FY) % DY + DY) % DY
      },
      sY = .5,
      iY = (YY, rY, DY) => Math.hypot(YY.x, YY.y) < sY ? DY : uY(YY.x, YY.y, rY),
      yY = (YY, rY, DY, FY, AY) => {
        const IY = Math.PI / rY,
          RY = vY(YY, rY),
          OY = RY - IY,
          gY = RY + IY,
          aY = (YY, rY) => `${DY+YY*Math.cos(rY)} ${DY+YY*Math.sin(rY)}`;
        return [`M ${aY(FY,OY)}`, `L ${aY(AY,OY)}`, `A ${AY} ${AY} 0 0 1 ${aY(AY,gY)}`, `L ${aY(FY,gY)}`, `A ${FY} ${FY} 0 0 0 ${aY(FY,OY)}`, "Z"].join(" ")
      }
  },
  36286: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(19),
      AY = DY(1314);

    function IY() {
      const {
        clientEscMenuOptions: YY
      } = (0, FY.j)(["clientEscMenuOptions"]);
      return (0, AY.y)() && YY.showChat
    }
  },
  8250: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(61),
      AY = DY(8173),
      IY = DY(2282);

    function RY() {
      const YY = (0, IY.j)("shopInfo"),
        [, rY] = (0, FY.useReducer)((YY => YY + 1), 0);
      return (0, IY.f)("shopInfo", rY), !(0, AY.d)(YY)
    }
  },
  36212: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(2501),
      AY = DY(3289),
      IY = DY(2579);
    const RY = ["Unable to create vertex buffer"];
    let OY = {};

    function gY(YY, rY) {
      const DY = new Date;
      console.error(`${DY.getUTCHours()}:${DY.getUTCMinutes()}:${DY.getUTCSeconds()}`, YY, rY, null === rY || void 0 === rY ? void 0 : rY.stack), RY.includes(null === rY || void 0 === rY ? void 0 : rY.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, FY.c)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${rY.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, IY.logError)("warning", `${YY}\n ${rY} "\n" ${null===rY||void 0===rY?void 0:rY.stack}`);
      const AY = YY + rY + (null === rY || void 0 === rY ? void 0 : rY.stack);
      AY in OY || ((0, IY.logError)("error", `${YY}\n ${rY} "\n" ${null===rY||void 0===rY?void 0:rY.stack}`), OY[AY] = !0)
    }(0, AY.onGameReset)((() => {
      OY = {}
    }))
  },
  4419: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => fY,
      g: () => CY
    });
    var FY = DY(4422),
      AY = DY(332);
    const IY = 120,
      RY = 260,
      OY = 1.15,
      gY = 1.2,
      aY = 2,
      vY = 1.08,
      uY = .8,
      sY = .95,
      iY = 8,
      yY = "[\"')\\]\u300d\u300f\uff09]*",
      QY = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yY}$`),
      oY = new RegExp(`[?\uff1f]${yY}$`),
      WY = new RegExp(`[!\uff01]${yY}$`),
      EY = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mY = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      VY = new RegExp(`[${mY}]`),
      SY = new RegExp(`[${mY}]|[^${mY}]+`, "g"),
      lY = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function TY(YY) {
      let rY = 2166136261;
      for (let DY = 0; DY < YY.length; DY++) rY ^= YY.charCodeAt(DY), rY = Math.imul(rY, 16777619);
      return (rY >>> 0) / 4294967295 * 2 - 1
    }

    function eY(YY) {
      var rY;
      if (VY.test(YY)) return 1;
      const DY = YY.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        FY = DY.replace(/[^0-9]/g, "");
      if (FY.length > 0 && !/\p{L}/u.test(DY)) return Math.min(FY.length, 4);
      const AY = null !== (rY = DY.match(lY)) && void 0 !== rY ? rY : [];
      if (0 === AY.length) {
        var IY, RY;
        const YY = null !== (IY = null === (RY = DY.match(/\p{L}/gu)) || void 0 === RY ? void 0 : RY.length) && void 0 !== IY ? IY : 0;
        return 0 === YY ? 0 : Math.min(Math.max(1, Math.round(YY / 2.5)), iY)
      }
      const OY = DY.replace(/[^\p{L}]/gu, ""),
        gY = AY.length > 1 && "e" === AY.at(-1) && OY.endsWith("e") && !OY.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(YY.replace(/[^\p{L}]/gu, ""));
      return Math.min(AY.length - (gY ? 1 : 0), iY)
    }

    function NY(YY) {
      return YY.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function BY(YY) {
      const rY = YY.replace(/[^\p{L}]/gu, "");
      return rY.length >= 2 && rY === rY.toUpperCase() && rY !== rY.toLowerCase()
    }

    function cY(YY, rY) {
      var DY;
      const iY = rY && (0, FY.l)(rY),
        yY = null !== (DY = null === iY || void 0 === iY ? void 0 : iY.syllableMs) && void 0 !== DY ? DY : FY.b,
        mY = function(YY) {
          const rY = [];
          for (const FY of (0, AY.cc)(YY))
            if ("string" === typeof FY)
              for (const YY of FY.split(/(\s+)/)) {
                if ("" === YY) continue;
                if (/^\s+$/.test(YY)) {
                  rY.push({
                    kind: "space",
                    text: YY
                  });
                  continue
                }
                if (!VY.test(YY)) {
                  rY.push({
                    kind: "word",
                    text: YY,
                    delayMs: 0
                  });
                  continue
                }
                let FY = !0;
                for (const AY of null !== (DY = YY.match(SY)) && void 0 !== DY ? DY : []) {
                  var DY;
                  const YY = rY.at(-1);
                  FY || "word" !== (null === YY || void 0 === YY ? void 0 : YY.kind) || VY.test(AY) || /[\p{L}\p{N}]/u.test(AY) ? (FY || rY.push({
                    kind: "space",
                    text: "\u200b"
                  }), rY.push({
                    kind: "word",
                    text: AY,
                    delayMs: 0
                  }), FY = !1) : YY.text += AY
                }
              } else rY.push({
                kind: "icon",
                text: FY.icon,
                delayMs: 0
              });
          return rY
        }(YY),
        lY = [];
      let cY = [];
      for (const FY of mY) "space" !== FY.kind && (cY.push(FY), QY.test(FY.text) && (lY.push(cY), cY = []));
      lY.push(cY);
      const KY = [];
      let HY = 0;
      for (const FY of lY) {
        var zY, ZY;
        const YY = null !== (zY = null === (ZY = FY.at(-1)) || void 0 === ZY ? void 0 : ZY.text) && void 0 !== zY ? zY : "",
          rY = oY.test(YY),
          DY = WY.test(YY),
          AY = FY.map((YY => "word" === YY.kind ? eY(YY.text) : 1)),
          mY = AY.findLastIndex((YY => YY > 0));
        for (const [oY, WY] of FY.entries()) {
          const YY = "word" === WY.kind,
            FY = AY[oY];
          WY.delayMs = HY;
          for (let AY = 0; iY && AY < FY; AY++) {
            const {
              intonation: IY
            } = iY;
            let RY = mY > 0 ? -IY.declineSemitones * (oY / mY) : 0;
            RY += TY(`${NY(WY.text)}|${AY}`) * IY.variationSemitones;
            const QY = Math.min(1, IY.variationSemitones);
            let EY = iY.glideSemitones,
              VY = 1;
            DY && (RY += IY.exclaimLiftSemitones, VY *= OY), rY && oY === mY && (RY += IY.questionRiseSemitones * (FY > 1 ? .5 + .5 * AY / (FY - 1) : 1), AY === FY - 1 && (EY = Math.abs(EY) + IY.questionRiseSemitones / 2)), YY && BY(WY.text) && (RY += aY * QY, VY *= gY), FY > 1 && 0 === AY && (RY += uY * QY, VY *= vY), KY.push({
              atMs: HY + AY * yY,
              semitones: RY,
              glideSemitones: EY,
              durationMs: AY < FY - 1 ? Math.min(iY.durationMs, yY * sY) : iY.durationMs,
              level: VY
            })
          }
          HY += FY * yY + (QY.test(WY.text) ? RY : EY.test(WY.text) ? IY : 0)
        }
      }
      return {
        pieces: mY.map((YY => "space" === YY.kind ? YY : "icon" === YY.kind ? {
          kind: "icon",
          icon: YY.text,
          delayMs: YY.delayMs
        } : {
          kind: "word",
          text: YY.text,
          delayMs: YY.delayMs
        })),
        blips: KY
      }
    }
    var KY = DY(1211),
      HY = DY(1256),
      zY = DY(1816);

    function ZY(YY) {
      if ("string" === typeof YY) return YY;
      const rY = HY.h.get().getCurrentLanguageCode();
      return (0, KY.u)(rY, YY.translationKey, (0, KY.r)(YY.params, zY.e.shown))
    }

    function CY(YY) {
      const rY = void 0 === YY.voice ? null : (0, FY.m)(YY.voice),
        DY = rY && (0, FY.l)(rY);
      return {
        plan: cY(ZY(YY.line), DY),
        synth: DY
      }
    }

    function fY(YY) {
      const rY = [];
      let DY = [];
      for (const [AY, IY] of YY.entries()) {
        var FY;
        "space" === IY.kind && (" " !== IY.text || "icon" !== (null === (FY = YY[AY + 1]) || void 0 === FY ? void 0 : FY.kind)) ? (DY.length > 0 && rY.push(DY), rY.push([IY]), DY = []) : DY.push(IY)
      }
      return DY.length > 0 && rY.push(DY), rY
    }
  },
  36123: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    const FY = [{
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

    function AY(YY, rY, DY) {
      const AY = Math.abs(YY - rY),
        IY = Date.now() - DY;
      for (const RY of FY)
        if (YY < RY.maxDist) return AY >= RY.hardUpdateDist || IY > RY.timeBetweenSoftChecks && AY >= RY.softUpdateDist;
      return !1
    }
  },
  36324: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => IY,
      h: () => AY
    });
    const FY = [.25, .5, 1, 2, 4, 8, 16];

    function AY(YY, rY) {
      const DY = FY;
      let AY = DY.indexOf(YY);
      return -1 === AY && (AY = DY.findIndex((rY => rY >= YY)), -1 === AY && (AY = DY.length - 1)), "up" === rY ? DY[Math.min(AY + 1, DY.length - 1)] : DY[Math.max(AY - 1, 0)]
    }

    function IY(YY) {
      return YY <= FY[0]
    }

    function RY(YY) {
      return YY >= FY[FY.length - 1]
    }
  },
  36366: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY
    });
    const FY = "data-replay-ui-active",
      AY = [{
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
  36370: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      f: () => uY,
      g: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(36366);

    function RY() {
      const YY = {};
      for (const {
          group: rY
        }
        of IY.f) YY[rY] = !0;
      return YY
    }
    let OY = RY();

    function gY() {
      AY.g.vo("replayViewer|uiVisibilityChanged")
    }

    function aY() {
      return OY
    }

    function vY(YY, rY) {
      OY[YY] !== rY && (OY = {
        ...OY,
        [YY]: rY
      }, "nametag" === YY && FY.b.set({
        areNametagsHidden: !rY
      }), gY())
    }

    function uY() {
      OY = RY(), FY.b.set({
        areNametagsHidden: !1
      }), gY()
    }
  },
  8129: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => RY,
      j: () => OY,
      l: () => AY
    });
    var FY = DY(8138);
    const AY = YY => {
        const rY = [];
        YY.holdingGun && rY.push({
          kind: "reload"
        }), YY.touchscreenActionButton && rY.push({
          kind: "touchButton",
          label: YY.touchscreenActionButton
        });
        for (const IY of null !== (DY = null === (AY = YY.customButtons) || void 0 === AY ? void 0 : AY.filter(FY.g)) && void 0 !== DY ? DY : []) {
          var DY, AY;
          rY.push({
            kind: "customButton",
            id: IY.id,
            icon: IY.icon,
            description: IY.description
          })
        }
        return rY
      },
      IY = YY => YY.length >= 2,
      RY = YY => "specialAction" !== YY.kind,
      OY = (YY, rY) => {
        if (null === YY || null === rY) return YY === rY;
        if (YY.kind !== rY.kind) return !1;
        switch (YY.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return YY.action === rY.action;
          case "customButton":
            return YY.id === rY.id && YY.icon === rY.icon;
          case "touchButton":
            return YY.label === rY.label
        }
      }
  },
  8126: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      g: () => iY,
      i: () => uY,
      k: () => yY
    });
    var FY = DY(61),
      AY = DY(25),
      IY = DY(1430),
      RY = DY(8129),
      OY = DY(8146);
    let gY = null;
    const aY = () => gY,
      vY = YY => {
        (0, RY.j)(gY, YY) || (gY = YY, AY.g.vo(OY.h, gY))
      },
      uY = () => {
        const [YY, rY] = (0, FY.useState)(aY);
        return (0, IY.g)(OY.h, rY), YY
      };
    let sY = !1;
    const iY = YY => {
        YY !== sY && (sY = YY, AY.g.vo(OY.j, YY))
      },
      yY = () => {
        const [YY, rY] = (0, FY.useState)(sY);
        return (0, IY.g)(OY.j, rY), YY
      }
  },
  8146: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => FY,
      j: () => AY,
      n: () => OY,
      o: () => gY,
      p: () => aY,
      t: () => RY
    });
    const FY = "controllerActionHintChanged",
      AY = "controllerActionWheelHintChanged",
      IY = "controllerOpenChat",
      RY = "controllerSneakToggledChanged",
      OY = "controllerAttackLatchedChanged",
      gY = "controllerDropStackHoldChanged",
      aY = "controllerPickBlockHintChanged"
  },
  8090: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      g: () => IY,
      i: () => gY,
      k: () => OY
    });
    var FY = DY(1430),
      AY = DY(1392);
    const IY = "controllerInventoryCursorChanged",
      RY = {
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
      OY = () => {
        var YY, rY;
        return (0, FY.k)(IY, null !== (YY = null === (rY = (0, AY.g)()) || void 0 === rY ? void 0 : rY.getInventoryCursorState()) && void 0 !== YY ? YY : RY)
      },
      gY = () => {
        var YY, rY;
        return null !== (YY = null === (rY = (0, AY.g)()) || void 0 === rY ? void 0 : rY.isPadSteppingSlots()) && void 0 !== YY && YY
      }
  },
  8087: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY,
      e: () => OY,
      i: () => gY,
      m: () => RY,
      o: () => IY,
      s: () => vY,
      t: () => uY
    });
    let FY = null;
    const AY = new Set,
      IY = YY => (FY = YY, () => {
        if (FY === YY) {
          FY = null;
          for (const YY of AY) YY()
        }
      }),
      RY = YY => (AY.add(YY), () => {
        AY.delete(YY)
      }),
      OY = () => FY,
      gY = () => null !== FY;
    let aY = null;
    const vY = YY => {
        aY = YY
      },
      uY = () => {
        const YY = aY;
        return aY = null, YY
      },
      sY = (YY, rY) => {
        var DY, FY;
        return null !== (DY = null !== (FY = YY.find((YY => YY.element === rY))) && void 0 !== FY ? FY : YY.find((YY => YY.element.contains(rY)))) && void 0 !== DY ? DY : null
      }
  },
  8094: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      e: () => RY
    });
    var FY = DY(61);
    const AY = new WeakMap,
      IY = YY => {
        var rY, DY;
        return null !== (rY = null === (DY = AY.get(YY)) || void 0 === DY ? void 0 : DY.current) && void 0 !== rY ? rY : null
      },
      RY = (YY, rY) => {
        const DY = (0, FY.useRef)(rY);
        DY.current = rY;
        const IY = (0, FY.useRef)(null);
        (0, FY.useEffect)((() => {
          const rY = YY.current,
            FY = IY.current;
          rY !== FY && (FY && AY.get(FY) === DY && AY.delete(FY), IY.current = rY, rY && AY.set(rY, DY))
        })), (0, FY.useEffect)((() => () => {
          const YY = IY.current;
          YY && AY.get(YY) === DY && AY.delete(YY), IY.current = null
        }), [])
      }
  },
  8240: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      g: () => aY,
      i: () => uY,
      m: () => vY,
      p: () => gY,
      r: () => iY
    });
    var FY = DY(25),
      AY = DY(1874),
      IY = DY(1392),
      RY = DY(1384);
    const OY = YY => {
        var rY, DY;
        return (0, RY.f)() && null !== (rY = null === (DY = (0, IY.g)()) || void 0 === DY ? void 0 : DY.getGlyphForNoaAction(YY)) && void 0 !== rY ? rY : null
      },
      gY = "controllerGlyph:",
      aY = YY => {
        var rY, DY;
        return null !== (rY = null === (DY = (0, IY.g)()) || void 0 === DY ? void 0 : DY.getPadGlyphIconName(YY)) && void 0 !== rY ? rY : `${gY}xbox/${YY}`
      },
      vY = YY => YY.startsWith(gY),
      uY = YY => {
        var rY, DY;
        return vY(YY) && null !== (rY = null === (DY = (0, IY.g)()) || void 0 === DY ? void 0 : DY.getPadGlyphIconUrl(YY)) && void 0 !== rY ? rY : null
      },
      sY = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", RY.b, AY.f, AY.e],
      iY = YY => {
        const rY = sY.map((rY => FY.g.subscribe(rY, YY)));
        return () => {
          for (const YY of rY) FY.g.unsubscribe(YY)
        }
      }
  },
  8084: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      i: () => FY
    });
    const FY = "controllerOpenKeyboard",
      AY = "controllerKeyboardVisible"
  },
  8111: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      f: () => AY
    });
    let FY = null;
    const AY = function(YY) {
        const rY = {
          cycle: YY,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FY = rY, () => {
          FY === rY && (FY = null)
        }
      },
      IY = () => {
        var YY;
        return null !== (YY = FY) && void 0 !== YY && YY.canCycle() ? FY.cycle : null
      }
  },
  8230: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => RY,
      h: () => IY,
      l: () => FY,
      n: () => OY,
      o: () => aY,
      r: () => vY
    });
    const FY = "controllerActionWheelOpen",
      AY = "controllerActionWheelAim",
      IY = "controllerActionWheelCommit",
      RY = "controllerActionWheelClose",
      OY = "controllerActionWheelPick";
    let gY = !1;
    const aY = () => gY,
      vY = YY => {
        gY = YY
      }
  },
  8225: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => AY
    });
    let FY = 0;
    const AY = () => {
        FY++
      },
      IY = () => FY
  },
  8104: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY,
      g: () => AY,
      h: () => RY,
      i: () => IY,
      k: () => FY,
      m: () => aY
    });
    const FY = "controllerQuickChatWheelOpen",
      AY = "controllerQuickChatWheelAim",
      IY = "controllerQuickChatWheelCommit",
      RY = "controllerQuickChatWheelClose";
    let OY = !1;
    const gY = () => OY,
      aY = YY => {
        OY = YY
      }
  },
  36231: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => gY
    });
    const FY = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AY = {
        player: FY,
        store: {
          ...FY,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function IY(YY, rY) {
      YY instanceof Promise ? YY.then(rY).catch((YY => {
        console.error("Couldn't open the preview", YY)
      })) : rY(YY)
    }
    class RY {
      constructor(YY) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height), null !== this.view && YY.show(this.view))
        }))
      }
      show(YY) {
        var rY;
        this.view = YY, null === (rY = this.opened) || void 0 === rY || rY.show(YY)
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    class OY {
      constructor(YY) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(YY).then((YY => YY.ready)), IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var YY, rY;
        return null !== (YY = null === (rY = this.opened) || void 0 === rY ? void 0 : rY.isReady()) && void 0 !== YY && YY
      }
      setCosmetic(YY, rY) {
        var DY;
        null === (DY = this.opened) || void 0 === DY || DY.setCosmetic(YY, rY)
      }
      playEmote(YY) {
        var rY;
        null === (rY = this.opened) || void 0 === rY || rY.playEmote(YY)
      }
      resetCamera() {
        var YY;
        null === (YY = this.opened) || void 0 === YY || YY.resetCamera()
      }
      async untilDrawn(YY) {
        var rY;
        await this.ready, await (null === (rY = this.opened) || void 0 === rY ? void 0 : rY.untilDrawn(YY))
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    const gY = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(YY) {
        this.host = YY
      }
      setDefaultHost(YY) {
        this.makeDefault = YY
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(YY) {
        return new RY(this.current().openMob(YY))
      }
      openPet(YY) {
        return new RY(this.current().openPet(YY))
      }
      openMobLineup(YY) {
        return new RY(this.current().openMobLineup(YY))
      }
      openCharacter(YY, rY) {
        return new OY(this.current().openCharacter(YY, rY))
      }
    }
  },
  36228: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY.c
    });
    var FY = DY(36231);
    class AY {
      constructor(YY) {
        this.load = YY, this.loaded = null, this.loading = null
      }
      run(YY) {
        return null !== this.loaded ? YY(this.loaded) : (this.loading ??= this.load().then((YY => (this.loaded = YY, YY)), (YY => {
          throw this.loading = null, YY
        })), this.loading.then(YY))
      }
    }
    class IY {
      constructor() {
        this.mobScene = new AY((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(72), DY.e(71), DY.e(241), DY.e(70), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(214), DY.e(281), DY.e(219), DY.e(234), DY.e(246), DY.e(249), DY.e(74), DY.e(194), DY.e(215), DY.e(230), DY.e(114), DY.e(231), DY.e(73), DY.e(113), DY.e(282), DY.e(154)]).then((() => DY(40289))))), this.characterScene = new AY((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(72), DY.e(71), DY.e(241), DY.e(70), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(214), DY.e(281), DY.e(219), DY.e(234), DY.e(246), DY.e(249), DY.e(74), DY.e(194), DY.e(215), DY.e(230), DY.e(114), DY.e(231), DY.e(73), DY.e(113), DY.e(282), DY.e(153)]).then((() => DY(40376)))))
      }
      openMob(YY) {
        return this.mobScene.run((rY => rY.openMobPreview(YY)))
      }
      openPet(YY) {
        return this.mobScene.run((rY => rY.openPetPreview(YY)))
      }
      openMobLineup(YY) {
        return this.mobScene.run((rY => rY.openMobLineupPreview(YY)))
      }
      openCharacter(YY, rY) {
        return this.characterScene.run((DY => DY.openCharacterPreview(YY, rY)))
      }
    }
    FY.c.setDefaultHost((() => new IY))
  },
  36206: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      f: () => IY
    });
    const FY = new Map;

    function AY(YY) {
      var rY;
      return null === YY ? null : null !== (rY = FY.get(YY)) && void 0 !== rY ? rY : null
    }

    function IY(YY, rY) {
      return FY.set(YY, rY), () => {
        FY.get(YY) === rY && FY.delete(YY)
      }
    }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  36335: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => Ur,
      g: () => Pr
    });
    var FY = DY(3815),
      AY = DY(625),
      IY = DY(3353),
      RY = DY(3371),
      OY = DY.n(RY);
    const gY = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      aY = "EV_boolean",
      vY = "EV_double",
      uY = "EV_string",
      sY = "EV_doubleArr",
      iY = "EV_armour",
      yY = "EV_other",
      QY = "EV_cosmetics",
      oY = "OEV_boolean",
      WY = "OEV_int",
      EY = "OEV_double",
      mY = "OEV_string",
      VY = "OEV_stringArr",
      SY = "OEV_meshScaling",
      lY = "IV_int",
      TY = "IV_string",
      eY = "IV_doubleArr",
      NY = "IV_double",
      BY = "HV_int",
      cY = "HV_slots",
      KY = "EnvV_string",
      HY = "EnvV_double",
      zY = "EnvV_doubleArr",
      ZY = "EnvV_boolean",
      CY = {
        type: uY,
        name: uY,
        position: sY,
        rotation: sY,
        scale: vY,
        speed: vY,
        jumping: aY,
        crouching: aY,
        cameraPitch: vY,
        armSwinging: aY,
        heldItemName: uY,
        heldItemEnchantmentTier: uY,
        pose: uY,
        followingEId: uY,
        ridingVehicleEId: uY,
        leaderboardTop: uY,
        meshKind: uY,
        meshOpts: uY,
        followingOffset: sY,
        shouldMatchFollowingEntityRotation: aY,
        meshOffset: sY,
        baseRenderHeading: vY,
        armour: iY,
        uB: yY,
        playerCustomisations: QY,
        variation: uY,
        metaInfo: uY,
        soundName: uY,
        volume: vY,
        refDistance: vY,
        maxHearDist: vY,
        rate: vY,
        aiState: uY
      },
      fY = {
        opacity: EY,
        zIndex: WY,
        overlayColour: mY,
        canSee: oY,
        meshScaling: SY,
        nameTagInfo: mY,
        multilineTextBox: mY,
        hasPriorityNametag: oY,
        ranks: VY,
        nameColour: mY,
        _isAlive: oY,
        _invisibleEffect: oY,
        _invincible: oY,
        killfeedColour: mY,
        hideNameSeed: WY,
        _glowingEffect: oY,
        lockHeadToBody: oY
      },
      jY = {
        itemName: TY,
        amount: lY,
        position: eY,
        size: NY,
        attributes: TY
      },
      hY = {
        skyBox: KY,
        fogColourOverride: KY,
        fogChunkDistanceOverride: HY,
        cameraTint: zY,
        fogOnSkybox: ZY,
        fogBlockDistanceOverride: HY
      },
      dY = {
        type: "array",
        items: "double"
      },
      JY = {
        type: "array",
        items: "int"
      },
      MY = {
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
      wY = {
        type: "map",
        values: dY
      };

    function bY(YY, rY) {
      return {
        type: "record",
        name: YY,
        fields: [{
          name: "x",
          type: rY
        }]
      }
    }
    const XY = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", bY(oY, "boolean"), bY(WY, "int"), bY(EY, "double"), bY(mY, "string"), bY(VY, {
              type: "array",
              items: "string"
            }), bY(SY, wY)]
          }]
        }
      },
      qY = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", bY(aY, "boolean"), bY(vY, "double"), bY(uY, "string"), bY(sY, dY), bY(iY, MY), bY(yY, XY), bY(QY, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      pY = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", bY(lY, "int"), bY(TY, "string"), bY(NY, "double"), bY(eY, dY)]
          }]
        }
      },
      kY = {
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
      GY = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", bY(BY, "int"), bY(cY, kY)]
        }]
      },
      xY = {
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
      nY = {
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
      PY = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", bY(KY, "string"), bY(HY, "double"), bY(zY, dY), bY(ZY, "boolean")]
          }]
        }
      },
      UY = [{
        name: "Rl",
        type: "record",
        fields: [{
          name: "pos",
          type: JY
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
          type: JY
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
      LY = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "BY",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "HY",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "zY",
              type: ["null", "string", dY],
              default: null
            }, {
              name: "ZY",
              type: ["null", "double"],
              default: null
            }, {
              name: "CY",
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
          name: "pF",
          type: "string"
        }, {
          name: "kF",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "GF",
          type: "double"
        }, {
          name: "nF",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "QF",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: dY
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "VY",
          type: "string"
        }, {
          name: "sF",
          type: ["null", "double"],
          default: null
        }, {
          name: "iF",
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
          name: "hY",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "dY",
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
      tY = [{
        name: "position",
        type: dY
      }, {
        name: "direction",
        type: dY
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

    function Yr() {
      const YY = [{
        name: "entities",
        type: {
          type: "map",
          values: qY
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: pY
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: tY
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
              items: GY
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", xY],
        default: null
      }];
      return YY.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "VY",
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
      }), YY.push({
        name: "uiElements",
        type: nY
      }, {
        name: "environment",
        type: PY
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: UY
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: LY
        }
      }), YY
    }
    const rr = {
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
                name: "Zu",
                type: "int"
              }, {
                name: "position",
                type: dY
              }, {
                name: "direction",
                type: dY
              }, {
                name: "easing",
                type: dY
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
    let Dr;

    function Fr(YY) {
      if (9 === YY) return Dr ??= (rY = [{
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
            name: "eT",
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
              type: JY
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
            fields: Yr()
          }
        }
      }, rr], OY().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: rY
      }, {
        Oi: Object.create(null)
      })), Dr;
      var rY
    }
    var Ar = DY(36338);
    let Ir, Rr, Or, gr;
    const ar = 12;
    var vr, ur;
    const sr = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 2, 3, 127, 128, 16, null, 10, 135, 4, 136, 137, !0, 15, !1, 5, 11, 9];

    function ir(YY) {
      return typeof rD !== sr[5] && rD ? (new rD).decode(new DD(YY)) : typeof FD !== sr[5] && FD ? FD.from(YY).toString("utf-8") : RD(YY)
    }

    function yr() {}

    function Qr() {
      Qr = function() {}
    }
    var or, Wr;
    Qr(vr = {}, ur = ["^{H>=i2f[QKUsuJq+S?ikIT", '_6QInof!={v|_6*??B8X[utLTBt1+sb|dQ)5xcCJgpU7"u%', "t3~1HFW=9p8cAnyL1Aj0RE7I(_Uc7`", '@COi0f"gJ?U6Xb_47ddZX;Y![%eGIbZNG}[Jq:9ym~Uw1*S?2E1nSVQM9QD)[', "c>X&IECE`", "R2gI.46$#7r&[W[y5ZDMi)sLa)vc/inNbQ:dzck$=91qLu^P#T", "={$xmizE`=rgsu#Y*S`2+F_I]Bddzj!j", "9}[#Z1Ua)XY|}uW4i7gsFW2!(XG.=$`?VSr>lo55%}b=[", "W3|J|f%EA$Y![", '@"UJ)pna8ZI_ouFMdA723f8Ihx>k28KL!/uZH.V$R)8:]+x', "4>^2I#eAsdojoqT,AngIZ_Ir", "3>|0%VM!P}gRg7MHj}<Zc8[p*", "2,DGh8Q>j7HxB+KLF{r", "F9d#}EXXW~qb3*=A[*[#P+Lw~d/2Bn}qIb&h", 'DZvN/6!g.$CN<!6|Y"b', '"|%M"W8=6OE3j*', 'UD2J.4^Q+a@|ZsO~MC<dCs3"W~h@M@WvjZrP,/Y$/ZC7suFAyA6M%', "8Cv*_EF!6{w?Q.^PTG8>9iZr", "]2y0Mo?:)9cG``AMH>TJ]9MgtZ_3?/VL.^JNB8:%dVus[", '**hc)=I=T%Uw2t8COMFVJ3ZIj}".>7)q`dYcW^w#_{p', "<}@d/Fd~tdaQ@6u4#^#`OuUlk$]EwqO~E}#`580I,|u_+$JHf7>X?f;5b", "Y9[hR9G4Q%Smr/LYbZgZC3$Le7f?0w1Ph*a3UZ$[", "1{8ULgNqN7[J$uRJ,SrM,Zz4|B.*aBEPK^nMH:YfT):Xr/RqUhcnN", "VZ^xRpOj(|<mP73?e6Y3XuRJ)pI2cPQMHC)p*;@.|QznS.S/t3S3Ow$[", 'aA5IXGB57k.)@P[q0>#U!oLoe|RRV7"LXAZ5~9f!!aT#{6xnlT', "(/e>@SJI}%$F_Br/{>ZN/3YfBB93H.u4", "W}mpp#>!Mk{/<6ALN4Y3{wahkaIw6PR|4)Q*~+T", "kSp5t6~Mx{/wauqJG6>p3fF[h$DRaB&q#Deh2SwMQpI*~7eNIT", 'ADgNP!K5Q?4y{B|4dQp5)1Il/$ssL@6!H/MGBt5~$?Hu"qPMP,!UqZvr', "KY@&[uTX,XqNV+p!v{bM=4T", ':}^5.4.%$95DaBk!NMlcntBL.a1p~7KC_{mU@"A!`~5=Db', ">uqML3=EH|67Yr+y+|DMH#Rl@)SvHj^nCZF2K8hq1_1G1sMq", '>{`VlopM}B?$1*cnQN9Ihpq%&"/;:b`yVu.sJ', 'f/[hQY{q%9s2d)_H$)Kc59W4C$}!.$"!)nDp7uu?&BV', "??YcYD:EEX:suth?wAD8E/@I2RSs?fJHNE+*", 'PEY3n"IEh', '8btXDp!ge|uRZjAC,nTJT4>A@?4cSnEC"7#M.pt!e|/I[', 'J"D2}fo$s)(RNgi?a/T0ycC=&Bp5.jF!5Z95', "/G/2WtQ!x}w1z7FHvBb", '@Bw5(F2"H}^7N6!|rBD894vGu%eM)B84"uc5>__EI~UbTP2q%UBc}Ei%x6Q.[', "}Nsh4:xqrdDp!ri2h%/VCQaEF9j{}yh?/DJ3>1Ha$67h1yUJ#>CPO8Y5*", 'qhyZoo|p0_!cpu+?J"NVTqJr', "#6sZm4hq5", 'aD^*&6"LGOZ.8/<@i{HiVE%r', "xDY*:cf!Wa.R0w*?hsI5>s`L&?^cDb|4]^nP8>(%G{DO^*O", '$"T0jtLQH{', "wh#1nC1LH7QI~8[AOS?1DV=G,})I[", '=9811^EJH|Cxrf]Cu4F2L3c%"7>2^uUAk"%MCgwMZ~,5Ub1nS^UJ>#4lBk5$[', '/D@JMS.E|"gO4jB', "c6?1#wT", "Bd@Z.;<Em~h]An4Jc^DSow:=[QMP_t_H$*`Gu#z4e}@PuBsCGHr", "v}4UBcal5VO>M*~Ldn)M#VD?&R>::tX2", "mN?iGwhahx)6{6,n,SPUJ", "vUOUhqFLQBu2Y.7nG2oST;ay<$yV,rOnGA6pO9dLkaQ_2+L~IT", "#DOxe+&~a%~]K.bJzpu>NI!~a?J;x8:P!,hcs_B~h", "B>2*4o5fx{wkS._4eu@06;V5@Q@](Pb|4M9*d)vEBk", '}|mU:8"gAa#G<BzAqG_dSw0lt~)6%bZLY,d>zc<Et%hDyg#~:T', "fhEIDq[#^6!;~7aJBEYZAwUaG{pwZ.VMgn&J)=A!j9)", "P{pVh)F!4%+cp@VNe6(5Ug15+$pcr/djvhp2[iT?+=w!H$x", "#6l*oIE?v=!R5n}2yd;d", 'h![J!68rO9qyk@NL:9@#_)Tq}Z"sY+1Y?>LiTi.J]d@4E$[2O[', "$EAIjo2M0_)RBrd+IhJV|I4%Aa1E/*U|^4wx", "gSYc*q4y2Ro1ws${W.r", "l6biQY6!i|<Mlf`~MA`8aEXI]B5@g74A;3^V~", "ZS5IDEm>uRa.r8sC5QqVdfi%F9om^j.+&)`2XVfM5", "V^>US4C:h", "bM~1H!N%taU4[", "BQlsjC8?K{D_Q+NJ96w5", "U)1N:c1;hx@#8s#+G>hcHZpAcOxJ4`", "MMXJ(Zs$S$uyV+kNN[", "5MbifIJIXxeq:6%", 'ES?UdumL#6vcR.NH[Cs>"izC.$', 'V>DSJ0+r/Z=7{6DJ?UAcKSL5]"xiEsJqZSc1Kcjg<{di}$NqNDYsA0IIn9fO[', "]}@hpYk!8d{iXBD+eYr#Z1Mpqa{w>PfYx,0*DpO$TQfjuB&HOGb", 'UAxiTVOpk=|]")3Y,hKdJg|M#Xs!TbVLFuk5', "oHo8zof!P9u!}yX", 'd!is!:2"c6I_[', 'pbxPhiM"|RR:xF3j9bE*Sp#w*', "w{YI)Yk$69mj:Bi2+dLh1cfM`", "XEL#/s6LB)L6e)9ym2ni~t`K*", "0/o5SGnI$6B#].NAO*{xg=^5aB$;6b", ')},GYZ1"XV__g]jN*"IVP6}Q|dC5)6pLV>#X', "Yn18Ac0=8B", 'D9,Uai1$]Zb/[ub2_>MN8]z9R%O}b+$Ps}1S|"6$O|Dk[', 'I>0In3$$7?tpabfY"D%5w)6o`~5bV.!//u%1Rik5f%^svfWPMEIMRG}[', 'i2!M9i^!V=H|Dtk!$)iZ6Y#LTQTZGs=Lu/)Mhw$js"0G^/!JX[', "7)bU&SY!hV.N)tX", '^/Td1uiIx{":;bPHAAysfqpL&Z@>+sS28CjZ08(C$k31)qLYDDUPkC,5n7', 'D/23B94ya"U;:tpLw>.I>s9yx|e[t.h?iOjPPSf"^9&P5n3Y', "~)gN_EMMd{F6g=.+8b$VxG>#1O&4i6y4g22d43L5Uks!)BevQ7Mx", 'U/cp?0?E}dTD4n{C#^qM?"(I&)K1puNqau?#~+XXL=?x=$nAkD>1|cGy5', ",>J2[)J:~~F_%g[y5%W`}iIDL}Z.m.JyG{D8TW,~gpswT", "<}K*^FiGH{%F!.(Yv>GUhw)JZaDX<b", "/%.S4FTl&d>Qe:N!%QeXnt;[", "Pdo2I>p!*d`@GwkL?QVs54!5L=8cbB$P", "b*cMV>4y#}G1`iY/oNb", "].s>)p[!^6_cn]JM%Q*M,>G?p~6_%g<vbM/28.mAsQc1x+UA(AIx~", '{n12=)(?oaLV1iLjIbH#e6,$0?$J#7"!,}J*rlhINk(:u),j//*x', ".},xcVc%cpfB3yMAM)4M}fayF7I!uBsP,Mb1~", "sZv*xfT", "K^!MEQ3wXx|ir`5/ZZk*3;k5>)=./*O", "pA5Ir9`5G{$D}$^~c^EVX9:E&dJ;G7ZN>b_h]9T?Y$.Qe)7", "2DudA00y(_X#0s_4Vbid5p>!cO_**bcn6}l5", "W602/sdLX=%{RsS2TZWS=1HE2)@;=jvL<4r", "auZIp/!Q{Z?yY]nM=du3cc|g4Z1GZ$fY", "%SihkcJIAa_", "f^8M&sbp@?]vzw_!7/?>H.+JEXg3VP`JS2`2*43>adl.CP$", "bnE2$wvr", "Vdi]JzO:", "6t2IaPll", "$qRE^+fD", "_LN7_J1C", "pE.ekZtC", "q;%Ye", "rMB=(IV9", "gI[Bl<c78/jGD?<X", "682Km9f]g3=,1ja~", "Hv_MG[6ooI4iYqX", "]}QL>e>T,&J*jXU", "/&N+}/WTdROGtif", '+5kI=L"G5N0pxDU', "pZfkJA]5:!?Nv_b", "OPYLH9WThN3ixXU", '@O":xg(jy2#kivb:R59~u`4G]qHK)TH', "R2F~?*/it?16wDlVTKikyJD}`R%6oqb", "ZZ+EBAHA9>#kjk;Y@KKB0Jr&R8l&=gH", "4)&o5JHA~8XsvXxY3vDETAtlmN`gsXU", "3vokCckG]q26wDlVTK3kyJD}IfrpmWf", "+5ok<(BrZ8l&1]mz3dnPvJZHzM%p{", "LAqlt$y9", "OO76B", "lM6+a]]C", "ztD{)sFC", "MeD!w_+G", "gkS5V", "RI=9", ".ID!`A&G", "~kMN", "Q1vkseTG", "zIc2a/qG", "k.53VNdW", "%05.!_pQ", 'ox`.w+1p:PHF6JvS?dh&DDfVj/25"(vSjZ,aj?o3~|5lGO?x(x7@&', 'ox`.w+1p:PHF6JvS?dh&DDfVj/25"(vSF^$a**MQ?wHRk,6uI)', "c^5.F4W3%]h>u`jNN^GmKDFQHe<RZF?KAs6Ra", "Qj&_", "YdC&", "X7+@jehW", "yE|a", "idw_D*EQ"]), Qr(YD = function() {
        var YY, rY, DY, FY = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        Qr(YY = void 0, rY = []);
        try {
          Qr(YY = Object, rY[sr[11]]("".__proto__.constructor.name))
        } catch (DD) {}
        YY: for (DY = sr[0]; DY < FY[sr[4]]; DY++) try {
          var AY;
          for (YY = FY[DY](), AY = sr[0]; AY < rY[sr[4]]; AY++)
            if (typeof YY[rY[AY]] === sr[5]) continue YY;
          return YY
        } catch (DD) {}
        return YY || this
      }() || {}, rD = YD.TextDecoder, DD = YD.Uint8Array, FD = YD.Ny, AD = YD.String || String, ID = YD.Array || Array, RD = function() {
        var YY, rY, DY = new ID(sr[20]);
        return Qr(YY = AD[sr[8]] || AD.fromCharCode, rY = []),
          function(FY) {
            var AY, IY, RY, OY;
            for (Qr(IY = void 0, RY = FY[sr[4]], rY[sr[4]] = sr[0]), OY = sr[0]; OY < RY;) Qr(IY = FY[OY++], IY <= sr[19] ? AY = IY : IY <= 223 ? AY = (31 & IY) << sr[7] | FY[OY++] & sr[6] : IY <= 239 ? AY = (IY & sr[29]) << sr[10] | (FY[OY++] & sr[6]) << sr[7] | FY[OY++] & sr[6] : AD[sr[8]] ? AY = (IY & sr[9]) << 18 | (FY[OY++] & sr[6]) << sr[10] | (FY[OY++] & sr[6]) << sr[7] | FY[OY++] & sr[6] : (AY = sr[6], OY += sr[18]), rY[sr[11]](DY[AY] || (DY[AY] = YY(AY))));
            return rY.join("")
          }
      }()),
      function(YY) {
        return typeof vr[YY] === sr[5] ? vr[YY] = function(YY) {
          var rY, DY, FY, AY, IY, RY, OY;
          for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
            var gY = 'T[rb*`h5XdxO%$7B@|?~{kvAyjnPNMJ2U&4!q/+YCLH,(^Egus8>IpZV_"=6)F9Qa}RmDw.Si3G#c10;:f]tWolK<ez'.indexOf(rY[OY]);
            if (gY !== -sr[1])
              if (RY < sr[0]) RY = gY;
              else {
                Qr(RY += gY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                do {
                  Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                } while (IY > sr[9]);
                RY = -sr[1]
              }
          }
          return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
        }(ur[YY]) : vr[YY]
      }(107) in yr && function() {
        function YY(YY) {
          var rY, DY, FY, AY, IY, RY, OY, gY = 'hl:$H=rA8tp&Y%iB`eOfRumv^F>)oG"JI5Mq*1Ed;WX}~D6{C],NysnaKQc#9LZUgk/2_wPz?S3[|.0(TVx+b!7@<4j';
          for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
            var aY = gY.indexOf(rY[OY]);
            if (aY !== -sr[1])
              if (RY < sr[0]) RY = aY;
              else {
                Qr(RY += aY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                do {
                  Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                } while (IY > sr[9]);
                RY = -sr[1]
              }
          }
          return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
        }

        function rY(rY) {
          return typeof vr[rY] === sr[5] ? vr[rY] = YY(ur[rY]) : vr[rY]
        }
        const DY = require("path"),
          {
            version: FY
          } = require("../../package"),
          {
            version: AY
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: IY
          } = require("@redacted/components/package"),
          {
            sdkVersion: RY
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), DY.resolve(__dirname, rY(108) + rY(109) + "js")
      }(), (() => {
        function YY(YY) {
          return typeof vr[YY] === sr[5] ? vr[YY] = function(YY) {
            var rY, DY, FY, AY, IY, RY, OY;
            for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
              var gY = '6DCokbngTMQxBPz;vu1,9:/2=?eX)d}q7%@NR*l8GwWHOSF!]f3~UE{yA_K4t5"[>jmaLZYsIpV0#J+ch&^.$(|ri`<'.indexOf(rY[OY]);
              if (gY !== -sr[1])
                if (RY < sr[0]) RY = gY;
                else {
                  Qr(RY += gY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                  do {
                    Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                  } while (IY > sr[9]);
                  RY = -sr[1]
                }
            }
            return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
          }(ur[YY]) : vr[YY]
        }
        YY(110) + "X" in yr && function() {
          var YY = function(YY) {
            var rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY = YY.length;
            if (uY < sr[17]) return sr[0];
            if (Qr(rY = Math.max(...YY), DY = Math.min(...YY)), rY === DY) return sr[0];
            for (Qr(FY = Array(uY - sr[1]).fill(Number.MAX_SAFE_INTEGER), AY = Array(uY - sr[1]).fill(Number.MIN_SAFE_INTEGER), IY = Math.ceil((rY - DY) / (uY - sr[1])), RY = sr[0]), OY = sr[0]; OY < uY; OY++) YY[OY] !== DY && YY[OY] !== rY && Qr(RY = Math.floor((YY[OY] - DY) / IY), FY[RY] = Math.min(FY[RY], YY[OY]), AY[RY] = Math.max(AY[RY], YY[OY]));
            for (Qr(gY = Number.MIN_SAFE_INTEGER, aY = DY), vY = sr[0]; vY < uY - sr[1]; vY++) FY[vY] === Number.MAX_SAFE_INTEGER && AY[vY] === Number.MIN_SAFE_INTEGER || Qr(gY = Math.max(gY, FY[vY] - aY), aY = AY[vY]);
            return gY = Math.max(gY, rY - aY)
          };
          console.log(YY)
        }();
        const rY = sr[21],
          DY = YY(111) + YY(112) + YY(113),
          FY = [sr[0], sr[1], sr[17], sr[18]].map((YY => {
            function rY(YY) {
              return typeof vr[YY] === sr[5] ? vr[YY] = function(YY) {
                var rY, DY, FY, AY, IY, RY, OY;
                for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
                  var gY = '189Geb^vO]7g%CkK(0r;~!>A3_W=:52aD[VEmTjty#nN*s<$Bo`+qlLIh)/w?xuMP}Q"&cd6i|@zSH,YX.fRJFU4Z{p'.indexOf(rY[OY]);
                  if (gY !== -sr[1])
                    if (RY < sr[0]) RY = gY;
                    else {
                      Qr(RY += gY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                      do {
                        Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                      } while (IY > sr[9]);
                      RY = -sr[1]
                    }
                }
                return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
              }(ur[YY]) : vr[YY]
            }
            rY(114) + "k" in yr && function() {
              var YY, rY, DY;

              function FY(YY) {
                var rY, DY, FY, AY, IY, RY, OY, gY = '{CjPDUHfIMhFbXYOz8;tu!/5T)~BJ@oL:.V]cv(S`w^9Qx6lKk,GN+3RZpW2?q>&A*#"7siE_d}<ae|$g4[1=rm%ny0';
                for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
                  var aY = gY.indexOf(rY[OY]);
                  if (aY !== -sr[1])
                    if (RY < sr[0]) RY = aY;
                    else {
                      Qr(RY += aY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                      do {
                        Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                      } while (IY > sr[9]);
                      RY = -sr[1]
                    }
                }
                return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
              }

              function AY(YY) {
                return typeof vr[YY] === sr[5] ? vr[YY] = FY(ur[YY]) : vr[YY]
              }
              Qr(YY = AY(115) + AY(116) + AY(117), rY = AY(118) + AY(119) + AY(120) + AY(121) + AY(122) + "?", DY = AY(123) + AY(124) + AY(125) + AY(126) + AY(sr[19]) + AY(sr[20]), YY.match(rY + DY))
            }();
            let FY = sr[0];
            for (let AY = sr[18]; AY >= sr[0]; AY--) {
              function IY(YY) {
                var rY, DY, FY, AY, IY, RY, OY;
                for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
                  var gY = 'DHR,u6S=)2I[$ofO~CMrPJ<t|?vKYBe.la:FzL350@nAkwxy+&Q_1%Ej};h/!dgTc*G47sqX#({]iW"pU8>V^`ZmN9b'.indexOf(rY[OY]);
                  if (gY !== -sr[1])
                    if (RY < sr[0]) RY = gY;
                    else {
                      Qr(RY += gY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                      do {
                        Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                      } while (IY > sr[9]);
                      RY = -sr[1]
                    }
                }
                return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
              }

              function RY(YY) {
                return typeof vr[YY] === sr[5] ? vr[YY] = IY(ur[YY]) : vr[YY]
              }
              FY = FY << sr[2] | DY[rY(129) + RY(130)](YY * sr[25] + AY)
            }
            return FY >>> sr[0]
          })),
          AY = (YY, rY) => YY << rY | YY >>> 32 - rY,
          IY = (YY, rY, DY, FY, IY) => {
            Qr(YY[rY] += YY[DY], YY[IY] = AY(YY[IY] ^ YY[rY], sr[21]), YY[FY] += YY[IY], YY[DY] = AY(YY[DY] ^ YY[FY], sr[10]), YY[rY] += YY[DY], YY[IY] = AY(YY[IY] ^ YY[rY], sr[2]), YY[FY] += YY[IY], YY[DY] = AY(YY[DY] ^ YY[FY], sr[9]))
          };
        gr = (DY, AY, RY, OY) => {
          function gY(YY) {
            return typeof vr[YY] === sr[5] ? vr[YY] = function(YY) {
              var rY, DY, FY, AY, IY, RY, OY;
              for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
                var gY = 'EvGlNXp`5L9]PKQIZ).uc=+z8Bq;sVRb!$3J*M&(?|>#",TWhdfFgHk_ry{U1^@%:j~D0Cie}nA[w2ax</4Som7OYt6'.indexOf(rY[OY]);
                if (gY !== -sr[1])
                  if (RY < sr[0]) RY = gY;
                  else {
                    Qr(RY += gY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                    do {
                      Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                    } while (IY > sr[9]);
                    RY = -sr[1]
                  }
              }
              return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
            }(ur[YY]) : vr[YY]
          }
          YY(131) in yr && function() {
            var YY;

            function rY() {}
            Qr(YY = function(YY, DY) {
              var FY, AY, IY, RY, OY, gY = sr[0];
              for (Qr(FY = sr[0], AY = new rY(sr[0]), IY = AY, RY = YY, OY = DY); RY !== sr[22] || OY !== sr[22];) Qr(FY = (RY ? RY.val : sr[0]) + (OY ? OY.val : sr[0]) + gY, gY = Math.floor(FY / sr[23]), IY.next = new rY(FY % sr[23]), IY = IY.next, RY = RY ? RY.next : sr[22], OY = OY ? OY.next : sr[22]);
              return gY && (IY.next = new rY(gY)), AY.next
            }, console.log(YY))
          }();
          const aY = new DataView(AY[YY(132)], AY[gY(133) + gY(134)], ar),
            vY = new Uint32Array(rY);
          Qr(vY[gY(sr[24])](FY), vY[gY(sr[24])](DY, sr[25]), vY[sr[15]] = aY[gY(sr[26]) + gY(sr[27])](sr[0], sr[28]), vY[sr[16]] = aY[gY(sr[26]) + gY(sr[27])](sr[25], sr[28]), vY[sr[29]] = aY[gY(sr[26]) + gY(sr[27])](sr[2], sr[28]));
          const uY = new Uint32Array(rY),
            sY = new Uint8Array(uY[gY(138)]);
          for (let iY = sr[0], yY = RY; iY < OY[gY(139)]; iY += rY * sr[25], yY++) {
            function QY(YY) {
              var rY, DY, FY, AY, IY, RY, OY;
              for (Qr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = sr[0], IY = sr[0], RY = -sr[1]), OY = sr[0]; OY < DY; OY++) {
                var gY = ')WQbsPGtAa&S#k^dJoB2wC?ipUEzTXY@.6Kvu[NZxI"n}lFy%(O5r37m$08!Mhe:|/]94qR~,>1j+_D=L*f`;<VgHc{'.indexOf(rY[OY]);
                if (gY !== -sr[1])
                  if (RY < sr[0]) RY = gY;
                  else {
                    Qr(RY += gY * sr[12], AY |= RY << IY, IY += (RY & sr[13]) > sr[14] ? sr[15] : sr[16]);
                    do {
                      Qr(FY.push(AY & sr[3]), AY >>= sr[2], IY -= sr[2])
                    } while (IY > sr[9]);
                    RY = -sr[1]
                  }
              }
              return RY > -sr[1] && FY.push((AY | RY << IY) & sr[3]), ir(FY)
            }

            function oY(YY) {
              return typeof vr[YY] === sr[5] ? vr[YY] = QY(ur[YY]) : vr[YY]
            }
            oY(140), Qr(vY[sr[10]] = yY, uY[oY(146)](vY));
            for (let EY = sr[0]; EY < sr[23]; EY++) {
              function mY() {
                var YY, rY, DY;
                Qr(YY = function(FY, AY, IY, RY) {
                  var OY;
                  for (OY = RY; OY < IY; OY++) {
                    var gY;
                    if (AY.length !== OY) return;
                    for (gY = sr[0]; gY < IY; gY++) DY(AY, [OY, gY]) && (Qr(AY.push([OY, gY]), YY(FY, AY, IY, OY + sr[1])), AY.length === IY && FY.push(rY(AY)), AY.pop())
                  }
                }, rY = function(YY) {
                  var rY, DY, FY = [];
                  for (rY = YY.length, DY = sr[0]; DY < rY; DY++) {
                    var AY;
                    for (FY[DY] = "", AY = sr[0]; AY < rY; AY++) FY[DY] += YY[DY][sr[1]] === AY ? "Q" : "."
                  }
                  return FY
                }, DY = function(YY, rY) {
                  var DY, FY = YY.length;
                  for (DY = sr[0]; DY < FY; DY++) {
                    if (YY[DY][sr[0]] === rY[sr[0]] || YY[DY][sr[1]] === rY[sr[1]]) return sr[30];
                    if (Math.abs((YY[DY][sr[0]] - rY[sr[0]]) / (YY[DY][sr[1]] - rY[sr[1]])) === sr[1]) return sr[30]
                  }
                  return sr[28]
                }, console.log((function(rY) {
                  var DY = [];
                  return (rY === sr[1] || rY >= sr[25]) && YY(DY, [], rY, sr[0]), DY
                })))
              }
              oY(147) in yr && mY(), Qr(IY(uY, sr[0], sr[25], sr[2], sr[10]), IY(uY, sr[1], sr[31], sr[33], sr[15]), IY(uY, sr[17], sr[7], sr[23], sr[16]), IY(uY, sr[18], sr[9], sr[32], sr[29]), IY(uY, sr[0], sr[31], sr[23], sr[29]), IY(uY, sr[1], sr[7], sr[32], sr[10]), IY(uY, sr[17], sr[9], sr[2], sr[15]), IY(uY, sr[18], sr[25], sr[33], sr[16]))
            }
            for (let VY = sr[0]; VY < rY; VY++) uY[VY] += vY[VY];
            const WY = Math[oY(148)](rY * sr[25], OY[oY(149)] - iY);
            for (let SY = sr[0]; SY < WY; SY++) OY[iY + SY] ^= sY[SY]
          }
        }
      })();
    const Er = [0, 1, 8, 255, "length", "b", 196, 3, "a", 4, "undefined", 74, 63, 6, "fromCodePoint", 7, 12, "push", "c", void 0, 2, 213, 249, "f", 26, "i", 91, 5, 8191, 88, 13, 14, "d", "e", null, 57, 110, 10, 9, 139, 64, 116, 127, 238, 42, 206, 192, 188, 55, 128, 134, 230, 176, 136, !0, 31, 126, "h", 175, 112, 182];

    function mr(...YY) {
      return YY[Er[4]] = Er[1], typeof rD !== Er[10] && rD ? (new rD).decode(new DD(YY[Er[0]])) : typeof FD !== Er[10] && FD ? FD.from(YY[Er[0]]).toString("utf-8") : RD(YY[Er[0]])
    }

    function Vr() {}

    function Sr() {
      Sr = function() {}
    }
    Sr(or = {}, Wr = ['>ZUCU"NK:sC', "A2gHX(dj>_zFm?$EBgjQPzKNd", "z([Fl+pC/", "4*v`F,UBFIh`+l!$!Gakt&4=4I$S75mQAdiXM+ft~G0iAkLJ=GFHMkHJt", '!w=Ywo6CRI5/8pljo(*t{Cq)7%UC+jxGn"YO2^uJNIv"EZ!Mm}u!Hly', "go<_`._3feH$J>cAX}RX_Uy", "(4)C:./=9niic*WR", 'A0<09lLb%eGNYx2"5R0/', '7atQto:C{_@3i"<JrALJYB6Chn4|epGD|d?J?Y1G)c+T1Z5$+y', '_G34q.EsnG7/M$P`JJ$OCH"{pw3c+/', 'y3K0dU5jReSk>?=GAw3kzul1+mce1x5$3E"U1,=:NI*CFn6$TpL=7qYJi_W,y', '3"dtP+e3piP&T}1jT}6J](VS"0G"HpmlzZnFEF]3C0B%g1', "{7z5t:{[Ubk%?1IO<y", 'c_~QK@_btSJAPVT"/i3/4', "$2v/A#t{XG9IJp_`xZ1", "xn~Q,FgsvSo3jO%$=J`kX.dQvb}&&1el`)%,u*BbNo&n{pAG_w~|w", "gIUCvM,w)3>50MJzN`,=z;Hbx", '?V?ZiA:;iwD"~', '+$YNi8==g^^Fkb~g*E[hfKZ14e"F<a<A=~', 'N|v/={PshwF%}hBZ1,;0i,2SY*A`S"!', 'M*zXx8TK|*;TylC27|o#"(zN?_YeAxRs"KFxRudCzw"5wOVM!21', 'Uew,q.Lzdmw")k>A("4Js', "f9>.LHE]?m&/fj]PAn/JmUV)D_,)`9(j[(DUdlwSLe][~u^Rhp*JSAj11_", "LD3kW?;Cw9$|r$]G8||Xx8;)[bqk4L_", '40=_/Ucz_U?*|M!M)wT8~)<t6^JbsM6PEXuUi)sz%9tQ">j4f9EC.,FAx', 'r^HF)Hkz/bsNA$T"T`8!yPXQLeU/<VpP0a._=AV(e3#)pnaj', 'RJBCt{NKYKx1)u1jRaP4xl%smGpc=}A"u}p_oHM;abO', "b3|Xj?+&^D5$Y5bOa}M`~*%tIG1u39]sx3}", "kK{0L8*G_I0[GZ]Gvn^_{FYtDKJo6ajR", "?A<CAL)wxs|i5a`JV7^k$?mdeK0", 'sXy.;FTE~_C;lOAIm_/h)kjCrIT%4O1lna_Xr?ztz*z!gZGA^ETJL&Fw"SL', 'P"[,b,bBoGv&[bZzj($XVpJNF9/NUnnZ,y', "iRJU~&<Kls~d%1/G}gG|C|UBuLu~`M82Rg+a+[3~", 'Awz5@7"Bnw$!zMczz"vtalVCG*_N`BmE`)lU]^Q1tSjbg91QZ*1', "SL$5@?D1&=~qSbPjgdmkT)HbqKoc4?p2wkk0**Ez3wqG~", "^7J,T8iGRD!5/?r>?4(,`.:Ad!9N_@b", 'IKJ`x{Xj9n;^Z"6slp6tO', '20PCc+oS?s}&#{T"Oa4,vCFjk0f{rk}g}c+`"zH&pwSH#pd"G"i|3U@jt', "VpYdIaM1s*kF%B1l*p)C/A_b@02", "pDv`4LU]%eH,Il92oIotS|`J[bvINV_skgD!6NYKssa;lO_", '@$=d6u@C>wSC!"fJf4+Z"#R)rLwS~', "ndcUA+@S!Ujj?9jA{D#|cF1;^D&=K>AlGaqJu8Qwr9", '[`}HWY^Qdb6Ui[Jla}a/%[bt:S_S^Ll`I"h=a{AQ^DApHpi"u4HhrK_t5bK', "Jak=/:x$k_zF45iG.eC!G[m)KI", "SI$|e8yjx", "(#?H.K>Sp*|t_@iQ>*yOL8Y]u^mc4?4Qu#?=S|C(TK(Xrkl`", '"p2dNKctRLrHXabP)|15>My', 'jnVaUq}<gL/&7b04>X^d];x3Xw$eA"OzQ(AOO#{~', '[o]X]N8b]SCju//QR"p#j?{tG3!A0$5`;^<dj.K~xS(G8>r]SLdC);O8}', ".^$Np^<Ex", 'Bo>08^3J6^kzf*""@|rHp|+Ex', "$0b!/UTJReo~wLXjjD9`3)<~C_", "#9a/3*2S0bZUI>;Z2E}", "6oak?aFdYG}0EhAGz_utDhYKVSy0W}", "[`Uk<[W)(s3V7$,`50j_RzeJ;_s&ekJz,d_0=p@SFoz5e$`l+`U/a{y", "CaHZr._3yi6;o[Y`5pYQJCk+(0>AP9d", '93"CBPD;387U&M<v7dfdR"0,z_', "/_F,[U|E#S&*]paGMosXkHa~pKH,75+OgK.F(ly", "*aWk`.idamf$?MoI7(ok<KsBO9^FO?DOe|TH+hdl>n($>LnOv,+ho)%bd", "9ZZX<+IBt", "[7A|hklS(_@G>OHO]Kl!Y.nB0bZ", "OA:FtopGzm*", ";}<4Y.~NF9z&1{6sC`sH.K,G=SK#SkS4Yg,=F,aN`nZ[>OmR7`}", 'pe#0V,ksLDB!yOJz."m0Vop)k0P!SumGzE1', "@7HhgqKb1w", "*ZZ|S8/m%LvFV{DAO*lth|&|H%)c*?QRlKmd/)y", 'Jeh=R^IJOL}qHpbD,p/UU"IzfS2CWL|OzE4H5UMj|Ki;UqasdZ@8Yu]tNI', "lnE#F,%8`3.8.$mJ;^s,<L5)zs>(%9yEwG_QBq;)KI@V`1[G^I1", 'xg=YM"N]qw.l(n=sWRS|{KkzMb5#rMv440)4,h7s>i=Qbl6M', ">g*,HUy", "o9Hai)+t;w.kU9mIggF8C3FC}", "+Pedr0:S4eAp_l~gMeN8X#{bx", 'Ddyd[lPbh3?=^O4]u(2O$BGj(s#;Xa#`N"6!l;>lt', "yzHZF[h2T_=N1$n", 'UL9U2(S,Xw^;O}TQS"u`/:jjhwh[~u=sr=S=dpo1', "*0vYEa#|6e7#^/[j{V1NOL4jG*l`9uw", 'x3/UqM4Cls7LOZx"xJtCKV7tp*#~r{PGhap#2^@2LLD&OZaGt,/JA#y', "x(}HB|91iK+Ts1oEi|!HGoN~hn8jOhG2;7#X>l8~", "y/$0p^N|N9Ww&Mrv,(qJSA7~L=}AD}QE.4F8i{[|TKvo2B;A^a8!Y0jQx", "Ga^#e)wVvmYplaNs]aUFal^Q_!$bf/9", 'caa_QaRw9cA}K>]GSZ`Fml*)*^xeDa5Z"|.4~pBsOL,H8bNZ;}q=J', '["8td&ubu^P!.kx`||Vt$FJs!DF3,{+]V7>O0@8~O9Y', "&LXdIUD=4eAiJ5;P<p^_", "|0b,i{qj=UB%WLmGbw</,K+&z_Ctk/s4ua~", ',EC!_{R)bL@x">mjF|HZ@F;2LoljD}', "O03d1@N]B=3C+/", 'qpyYM"&b"m.,b{IPdkBdD[zs9c"Cgqt`5p;k.{q))%$Su/', "@7w`@Cs~mn3i_>^z9~", "XAb`CS7s|KfX3qCAUa}", "Eas!bU<&_efHgZygha_Q|H((vSz5DBv4nn2#:ats6c7", 'PIo/)(WC3wyEzMdM;D"t=*TbYKF~q{O]Yd3Cup~byc2Fmnd', 'e_QFV*+tGKAp)"1G#L@`g0kNgL79VbGDa_TJ`#kB4I', 'SLkX.[i,,oS;!xP"3dR|%{_b"s"#!Z[Geo20%MtbJ9B[(/', 'wwG5Mk[3"s|z[/O]T`o/No&+nc]#xxFMmp@xT{m)*=|3b*_', ":LIQ#KC)q00``1.P[(FJvadSd", "m}T=^A}8f9:J^Lv48(JCA.,w$Ih;aOeE+7yYO2T]=!7[!ZhO", 'Lo*HA#wlD_;)@BmEX"C!h|oS~whzXLeI|pT8K3+bB8`FW/yQ7oi=', "F%YQ*Sf&`nS%bpnO%)e|&,x$xS/>~5g$Fo(aI?IJrop", 'Wos!jL(w"s!p|qZJ/J;dfCZmBn:*$pbDk}O5NpS1u=#$+pb', 'OgCHo)PK&=2oQ"Mje0k|7z)2/', 'j_p_`u+]p*sNF?92ao"4_l/RDKsSP9Ozd/_O?h:(`3Hn)bGD1K%,G', "{|Yd5o=lF9c&aVP`Gax`jay", "v,0tm));{3{TO9UA1kZXH{o1", "7|7/hV91", "a+h]jUIM", "iKc~v!dM", "YnL~fX%x", "3Ck`f^HM", "fdc~$IPM", '>)"3ChQM', "h6NO3`x", "JK%wQ;tn.CL2P.", "%VUmOPr:,A^`P.", ",yOotQ*r.CDcQM", "O6x~/k{b)?6}F.", "L=w]0QW@c~e=jM", "dS!Xw;|luAL", 'n9"yU``4', "VyRBu`T1", "%i_AE7vv", "{M%`szKt*er", "Ps^si:]7mWa", "FMOR`w&G}W", "q)j`,L34", "UM[AnnE1v#R", "hyxf?JAM", "Mdc!%iAz", "Rw3Eei,z", "+U{mDi.z", "WwN`", "ww@MCi/z", "ivnc!", "lw6Wgc@", "lw>|O97z", "}wg`", '>9"Z^/mM', ">1u>sx=8>J", '}sHLp":r', "4az<", "[1G<c", '"yM<', "zs6>TfH", "G^]2t3V1", "lI@XVU:r"]), Sr(YD = function(...YY) {
      Sr(YY[Er[4]] = Er[0], YY[Er[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], YY[Er[5]] = Er[19], YY[Er[6]] = []);
      try {
        Sr(YY[Er[5]] = Object, YY[Er[6]][Er[17]]("".__proto__.constructor.name))
      } catch (Wr) {}
      YY: for (YY[Er[7]] = Er[0]; YY[Er[7]] < YY[Er[8]][Er[4]]; YY[Er[7]]++) try {
        for (YY[Er[5]] = YY[Er[8]][YY[Er[7]]](), YY[Er[9]] = Er[0]; YY[Er[9]] < YY[Er[6]][Er[4]]; YY[Er[9]]++)
          if (typeof YY[Er[5]][YY[Er[6]][YY[Er[9]]]] === Er[10]) continue YY;
        return YY[Er[5]]
      } catch (Wr) {}
      return YY[Er[5]] || this
    }() || {}, rD = YD.TextDecoder, DD = YD.Uint8Array, FD = YD.Ny, AD = YD.String || String, ID = YD.Array || Array, RD = function(...YY) {
      return Sr(YY[Er[4]] = Er[0], YY[Er[18]] = new ID(Er[49]), YY[Er[1]] = AD[Er[14]] || AD.fromCharCode, YY[-Er[11]] = []),
        function(rY) {
          var DY, FY, AY, IY;
          for (Sr(FY = void 0, AY = rY[Er[4]], YY[-Er[11]][Er[4]] = Er[0]), IY = Er[0]; IY < AY;) Sr(FY = rY[IY++], FY <= Er[42] ? DY = FY : FY <= 223 ? DY = (FY & Er[55]) << Er[13] | rY[IY++] & Er[12] : FY <= 239 ? DY = (15 & FY) << Er[16] | (rY[IY++] & Er[12]) << Er[13] | rY[IY++] & Er[12] : AD[Er[14]] ? DY = (FY & Er[15]) << 18 | (rY[IY++] & Er[12]) << Er[16] | (rY[IY++] & Er[12]) << Er[13] | rY[IY++] & Er[12] : (DY = Er[12], IY += Er[7]), YY[-Er[11]][Er[17]](YY[Er[18]][DY] || (YY[Er[18]][DY] = YY[Er[1]](DY))));
          return YY[-Er[11]].join("")
        }
    }()), (() => {
      function YY(...YY) {
        return YY[Er[4]] = Er[1], typeof or[YY[Er[0]]] === Er[10] ? or[YY[Er[0]]] = function(...YY) {
          for (Sr(YY[Er[4]] = Er[1], YY[-Er[24]] = 'x)M6.aVW]~(0{:K9enb@"YI>LGmoRgf7OklrF;QjPuEpD1Hv4w&=T[C3_5JSdBA?%yqN!8`X2,+$<Z^}c/h*zU|tis#', YY[Er[20]] = "" + (YY[Er[0]] || ""), YY[Er[7]] = YY[Er[20]].length, YY[Er[32]] = [], YY[Er[27]] = Er[0], YY[Er[23]] = Er[0], YY[Er[15]] = -Er[1]), YY[Er[2]] = Er[0]; YY[Er[2]] < YY[Er[7]]; YY[Er[2]]++)
            if (YY[Er[25]] = YY[-Er[24]].indexOf(YY[Er[20]][YY[Er[2]]]), YY[Er[25]] !== -Er[1])
              if (YY[Er[15]] < Er[0]) YY[Er[15]] = YY[Er[25]];
              else {
                Sr(YY[Er[15]] += YY[Er[25]] * Er[26], YY[Er[27]] |= YY[Er[15]] << YY[Er[23]], YY[Er[23]] += (YY[Er[15]] & Er[28]) > Er[29] ? Er[30] : Er[31]);
                do {
                  Sr(YY[Er[32]].push(YY[Er[27]] & Er[3]), YY[Er[27]] >>= Er[2], YY[Er[23]] -= Er[2])
                } while (YY[Er[23]] > Er[15]);
                YY[Er[15]] = -Er[1]
              } return YY[Er[15]] > -Er[1] && YY[Er[32]].push((YY[Er[27]] | YY[Er[15]] << YY[Er[23]]) & Er[3]), mr(YY[Er[32]])
        }(Wr[YY[Er[0]]]) : or[YY[Er[0]]]
      } [][Er[4]] = Er[0], YY(104) in Vr && function(...YY) {
        function rY() {}
        YY[Er[4]] = Er[0], Sr(YY[Er[29]] = function(...YY) {
          for (Sr(YY[Er[4]] = Er[20], YY[-Er[35]] = Er[0], YY[Er[5]] = Er[0], YY[Er[18]] = new rY(Er[0]), YY[-Er[36]] = YY[Er[18]], YY[Er[33]] = YY[Er[0]], YY[Er[27]] = YY[Er[1]]); YY[Er[33]] !== Er[34] || YY[Er[27]] !== Er[34];) Sr(YY[Er[5]] = (YY[Er[33]] ? YY[Er[33]].val : Er[0]) + (YY[Er[27]] ? YY[Er[27]].val : Er[0]) + YY[-Er[35]], YY[-Er[35]] = Math.floor(YY[Er[5]] / Er[37]), YY[-Er[36]].next = new rY(YY[Er[5]] % Er[37]), YY[-Er[36]] = YY[-Er[36]].next, YY[Er[33]] = YY[Er[33]] ? YY[Er[33]].next : Er[34], YY[Er[27]] = YY[Er[27]] ? YY[Er[27]].next : Er[34]);
          return YY[-Er[35]] && (YY[-Er[36]].next = new rY(YY[-Er[35]])), YY[Er[18]].next
        }, console.log(YY[Er[29]]))
      }();
      const rY = Er[38],
        DY = YY(105) + YY(106) + YY(107) + YY(108) + YY(109) + YY(Er[36]),
        FY = {
          [Er[38]]: YY(111) + YY(Er[59]) + YY(113) + YY(114) + YY(115) + YY(Er[41])
        },
        AY = (...YY) => {
          function rY(...YY) {
            return YY[Er[4]] = Er[1], typeof or[YY[Er[0]]] === Er[10] ? or[YY[Er[0]]] = function(YY) {
              var rY, DY, FY, AY, IY, RY, OY;
              for (Sr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = Er[0], IY = Er[0], RY = -Er[1]), OY = Er[0]; OY < DY; OY++) {
                var gY = 'a4Fpcz9b75yT!EJ[xhQo:3/GDV+|{=HUwe@k8)v.]Z?tN0&lu%rR;1CO2f~BM",_#$K(mgSsd`WPAI^Lin6qX>*j}<Y'.indexOf(rY[OY]);
                if (gY !== -Er[1])
                  if (RY < Er[0]) RY = gY;
                  else {
                    Sr(RY += gY * Er[26], AY |= RY << IY, IY += (RY & Er[28]) > Er[29] ? Er[30] : Er[31]);
                    do {
                      Sr(FY.push(AY & Er[3]), AY >>= Er[2], IY -= Er[2])
                    } while (IY > Er[15]);
                    RY = -Er[1]
                  }
              }
              return RY > -Er[1] && FY.push((AY | RY << IY) & Er[3]), mr(FY)
            }(Wr[YY[Er[0]]]) : or[YY[Er[0]]]
          }
          YY[Er[4]] = Er[1], rY(117) + "K" in Vr && function(...YY) {
            function rY(YY) {
              var rY, DY, FY, AY, IY, RY, OY, gY = '5v1+6z#!HilOXoReQ3Ta^t&n8(=q|0muAk?;@.pys2}NhM%{$B>CwSxEc]L*DJ9dj)f_/F7`W:P~g[4KGVU<,"IrYZb';
              for (Sr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = Er[0], IY = Er[0], RY = -Er[1]), OY = Er[0]; OY < DY; OY++) {
                var aY = gY.indexOf(rY[OY]);
                if (aY !== -Er[1])
                  if (RY < Er[0]) RY = aY;
                  else {
                    Sr(RY += aY * Er[26], AY |= RY << IY, IY += (RY & Er[28]) > Er[29] ? Er[30] : Er[31]);
                    do {
                      Sr(FY.push(AY & Er[3]), AY >>= Er[2], IY -= Er[2])
                    } while (IY > Er[15]);
                    RY = -Er[1]
                  }
              }
              return RY > -Er[1] && FY.push((AY | RY << IY) & Er[3]), mr(FY)
            }

            function DY(YY) {
              return typeof or[YY] === Er[10] ? or[YY] = rY(Wr[YY]) : or[YY]
            }
            YY[Er[4]] = Er[0];
            const FY = require("path"),
              {
                version: AY
              } = require("../../package"),
              {
                version: IY
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: RY
              } = require("@redacted/components/package"),
              {
                sdkVersion: OY
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), FY.resolve(__dirname, DY(118) + DY(119) + "js")
          }();
          const DY = FY[YY[Er[0]]];
          if (!DY) {
            function AY(YY) {
              var rY, DY, FY, AY, IY, RY, OY;
              for (Sr(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = Er[0], IY = Er[0], RY = -Er[1]), OY = Er[0]; OY < DY; OY++) {
                var gY = 'uQG4H{L@>Bm6*.!Zac|IWN:~ASDP=F)sRhn0k1^"9qlM<(3`Xv&O5x,+pf]$r[eCYy_gwt}zob2Vi;%UTjJ8E?7#dK/'.indexOf(rY[OY]);
                if (gY !== -Er[1])
                  if (RY < Er[0]) RY = gY;
                  else {
                    Sr(RY += gY * Er[26], AY |= RY << IY, IY += (RY & Er[28]) > Er[29] ? Er[30] : Er[31]);
                    do {
                      Sr(FY.push(AY & Er[3]), AY >>= Er[2], IY -= Er[2])
                    } while (IY > Er[15]);
                    RY = -Er[1]
                  }
              }
              return RY > -Er[1] && FY.push((AY | RY << IY) & Er[3]), mr(FY)
            }

            function IY(...YY) {
              return YY[Er[4]] = Er[1], typeof or[YY[Er[0]]] === Er[10] ? or[YY[Er[0]]] = AY(Wr[YY[Er[0]]]) : or[YY[Er[0]]]
            }
            throw new Error(IY(120) + IY(121) + IY(122) + YY[Er[0]])
          }
          return [Er[0], Er[1], Er[20], Er[7], Er[9], Er[27], Er[13], Er[15]].map(((...YY) => (YY[Er[4]] = Er[1], rY(123) in Vr && function(...YY) {
            YY[Er[4]] = Er[0]
          }(), parseInt(DY[rY(124)](YY[Er[0]] * Er[2], YY[Er[0]] * Er[2] + Er[2]), 16))))
        };
      Sr(Ir = DY => (YY(125) + "q" in Vr && function(...YY) {
        function rY() {}
        YY[Er[4]] = Er[0], Sr(YY[Er[5]] = function(...YY) {
          for (Sr(YY[Er[4]] = Er[20], YY[-Er[44]] = Er[0], YY[-Er[41]] = Er[0], YY[Er[9]] = new rY(Er[0]), YY[Er[27]] = YY[Er[9]], YY[-Er[42]] = YY[Er[0]], YY[Er[43]] = YY[Er[1]]); YY[-Er[42]] !== Er[34] || YY[Er[43]] !== Er[34];) Sr(YY[-Er[41]] = (YY[-Er[42]] ? YY[-Er[42]].val : Er[0]) + (YY[Er[43]] ? YY[Er[43]].val : Er[0]) + YY[-Er[44]], YY[-Er[44]] = Math.floor(YY[-Er[41]] / Er[37]), YY[Er[27]].next = new rY(YY[-Er[41]] % Er[37]), YY[Er[27]] = YY[Er[27]].next, YY[-Er[42]] = YY[-Er[42]] ? YY[-Er[42]].next : Er[34], YY[Er[43]] = YY[Er[43]] ? YY[Er[43]].next : Er[34]);
          return YY[-Er[44]] && (YY[Er[27]].next = new rY(YY[-Er[44]])), YY[Er[9]].next
        }, console.log(YY[Er[5]]))
      }(), DY >= rY), Rr = (...YY) => {
        function rY(YY) {
          return typeof or[YY] === Er[10] ? or[YY] = function(...YY) {
            for (Sr(YY[Er[4]] = Er[1], YY[Er[1]] = '@:z]_~n=(M`f1NFwAsRX>g3l*27+t!}^W%.B)Q,YeD8U5a[C0d/v?pmEV{yu;&H"GbhSi<k$oIZTc|Orj9J6#L4xqKP', YY[Er[20]] = "" + (YY[Er[0]] || ""), YY[Er[45]] = YY[Er[20]].length, YY[Er[9]] = [], YY[Er[33]] = Er[0], YY[Er[13]] = Er[0], YY[-Er[47]] = -Er[1]), YY[Er[2]] = Er[0]; YY[Er[2]] < YY[Er[45]]; YY[Er[2]]++)
              if (YY[Er[46]] = YY[Er[1]].indexOf(YY[Er[20]][YY[Er[2]]]), YY[Er[46]] !== -Er[1])
                if (YY[-Er[47]] < Er[0]) YY[-Er[47]] = YY[Er[46]];
                else {
                  Sr(YY[-Er[47]] += YY[Er[46]] * Er[26], YY[Er[33]] |= YY[-Er[47]] << YY[Er[13]], YY[Er[13]] += (YY[-Er[47]] & Er[28]) > Er[29] ? Er[30] : Er[31]);
                  do {
                    Sr(YY[Er[9]].push(YY[Er[33]] & Er[3]), YY[Er[33]] >>= Er[2], YY[Er[13]] -= Er[2])
                  } while (YY[Er[13]] > Er[15]);
                  YY[-Er[47]] = -Er[1]
                } return YY[-Er[47]] > -Er[1] && YY[Er[9]].push((YY[Er[33]] | YY[-Er[47]] << YY[Er[13]]) & Er[3]), mr(YY[Er[9]])
          }(Wr[YY]) : or[YY]
        }
        YY[Er[4]] = Er[20], rY(Er[56]) + "A" in Vr && function(...YY) {
          Sr(YY[Er[4]] = Er[0], YY[-Er[48]] = function(rY, DY) {
            var FY, AY = [];
            return Sr(FY = rY.length, rY.sort(((YY, rY) => YY - rY)), YY[Er[1]](AY, [], Er[0], FY, rY, DY)), AY
          }, YY[Er[1]] = function(rY, DY, FY, AY, IY, RY) {
            var OY, gY = Er[34];
            if (!(RY < Er[0])) {
              if (RY === Er[0]) return rY.push(DY);
              for (OY = FY; OY < AY && !(IY[OY] > RY); OY++) OY > FY && IY[OY] === IY[OY - Er[1]] || Sr(gY = Array.from(DY), gY.push(IY[OY]), YY[Er[1]](rY, gY, OY + Er[1], AY, IY, RY - IY[OY]))
            }
          }, console.log(YY[-Er[48]]))
        }();
        const DY = crypto[rY(Er[42]) + rY(Er[49]) + rY(129)](new Uint8Array(ar)),
          FY = Ar[Er[33]][rY(130) + rY(131)](YY[Er[1]], {
            [rY(132)]: Er[1]
          });
        gr(AY(YY[Er[0]]), DY, Er[1], FY);
        const IY = new Uint8Array(ar + FY[rY(133)]);
        return Sr(IY[rY(Er[50])](DY), IY[rY(Er[50])](FY, ar)), IY
      }, Or = (rY, FY) => {
        function IY(...YY) {
          return YY[Er[4]] = Er[1], typeof or[YY[Er[0]]] === Er[10] ? or[YY[Er[0]]] = function(...YY) {
            for (Sr(YY[Er[4]] = Er[1], YY[Er[1]] = 'HPr7aM4_8L<Q=GuI*}Y9/J^(BVcR[l6>XAnvDqN#sgWtwzhp+Z:yKe&Td?!@10$Ok|C%"Sf.];2`U,53x)ioE{~Fjmb', YY[Er[51]] = "" + (YY[Er[0]] || ""), YY[Er[52]] = YY[Er[51]].length, YY[Er[32]] = [], YY[Er[27]] = Er[0], YY[Er[42]] = Er[0], YY[Er[12]] = -Er[1]), YY[Er[2]] = Er[0]; YY[Er[2]] < YY[Er[52]]; YY[Er[2]]++)
              if (YY[Er[38]] = YY[Er[1]].indexOf(YY[Er[51]][YY[Er[2]]]), YY[Er[38]] !== -Er[1])
                if (YY[Er[12]] < Er[0]) YY[Er[12]] = YY[Er[38]];
                else {
                  Sr(YY[Er[12]] += YY[Er[38]] * Er[26], YY[Er[27]] |= YY[Er[12]] << YY[Er[42]], YY[Er[42]] += (YY[Er[12]] & Er[28]) > Er[29] ? Er[30] : Er[31]);
                  do {
                    Sr(YY[Er[32]].push(YY[Er[27]] & Er[3]), YY[Er[27]] >>= Er[2], YY[Er[42]] -= Er[2])
                  } while (YY[Er[42]] > Er[15]);
                  YY[Er[12]] = -Er[1]
                } return YY[Er[12]] > -Er[1] && YY[Er[32]].push((YY[Er[27]] | YY[Er[12]] << YY[Er[42]]) & Er[3]), mr(YY[Er[32]])
          }(Wr[YY[Er[0]]]) : or[YY[Er[0]]]
        }
        if (FY[YY(135)] < ar) throw new Error(DY);
        const RY = new Uint8Array(FY[IY(Er[53])](ar));
        gr(AY(rY), FY[IY(Er[53])](Er[0], ar), Er[1], RY);
        const OY = new(Ar[Er[33]][IY(137) + Er[33]])({
          [IY(138)]: Er[54]
        });
        if (OY[IY(Er[39])](RY), OY[IY(140)] || !OY[IY(141)]) {
          function gY(...YY) {
            for (Sr(YY[Er[4]] = Er[1], YY[Er[1]] = 'w1?^y&`[]7$|%:,d!8DkQ="Hej#mPnRJY>~A*6vcSFh_bxMLoIspWBaZirGtUNl<u}z.;(T5qX{)4923Ofg0KV@C+E/', YY[Er[20]] = "" + (YY[Er[0]] || ""), YY[-Er[55]] = YY[Er[20]].length, YY[Er[32]] = [], YY[Er[27]] = Er[0], YY[Er[56]] = Er[0], YY[Er[58]] = -Er[1]), YY[Er[57]] = Er[0]; YY[Er[57]] < YY[-Er[55]]; YY[Er[57]]++)
              if (YY[Er[25]] = YY[Er[1]].indexOf(YY[Er[20]][YY[Er[57]]]), YY[Er[25]] !== -Er[1])
                if (YY[Er[58]] < Er[0]) YY[Er[58]] = YY[Er[25]];
                else {
                  Sr(YY[Er[58]] += YY[Er[25]] * Er[26], YY[Er[27]] |= YY[Er[58]] << YY[Er[56]], YY[Er[56]] += (YY[Er[58]] & Er[28]) > Er[29] ? Er[30] : Er[31]);
                  do {
                    Sr(YY[Er[32]].push(YY[Er[27]] & Er[3]), YY[Er[27]] >>= Er[2], YY[Er[56]] -= Er[2])
                  } while (YY[Er[56]] > Er[15]);
                  YY[Er[58]] = -Er[1]
                } return YY[Er[58]] > -Er[1] && YY[Er[32]].push((YY[Er[27]] | YY[Er[58]] << YY[Er[56]]) & Er[3]), mr(YY[Er[32]])
          }

          function aY(...YY) {
            return YY[Er[4]] = Er[1], typeof or[YY[Er[0]]] === Er[10] ? or[YY[Er[0]]] = gY(Wr[YY[Er[0]]]) : or[YY[Er[0]]]
          }

          function vY() {
            var YY;

            function rY() {}
            Sr(YY = function(...YY) {
              for (Sr(YY[Er[4]] = Er[20], YY[Er[20]] = Er[0], YY[Er[7]] = Er[0], YY[Er[18]] = new rY(Er[0]), YY[-Er[60]] = YY[Er[18]], YY[-Er[59]] = YY[Er[0]], YY[Er[23]] = YY[Er[1]]); YY[-Er[59]] !== Er[34] || YY[Er[23]] !== Er[34];) Sr(YY[Er[7]] = (YY[-Er[59]] ? YY[-Er[59]].val : Er[0]) + (YY[Er[23]] ? YY[Er[23]].val : Er[0]) + YY[Er[20]], YY[Er[20]] = Math.floor(YY[Er[7]] / Er[37]), YY[-Er[60]].next = new rY(YY[Er[7]] % Er[37]), YY[-Er[60]] = YY[-Er[60]].next, YY[-Er[59]] = YY[-Er[59]] ? YY[-Er[59]].next : Er[34], YY[Er[23]] = YY[Er[23]] ? YY[Er[23]].next : Er[34]);
              return YY[Er[20]] && (YY[-Er[60]].next = new rY(YY[Er[20]])), YY[Er[18]].next
            }, console.log(YY))
          }
          throw aY(142) + "G" in Vr && vY(), new Error(DY)
        }
        return OY[IY(143)]
      })
    })();
    var lr = DY(36347),
      Tr = DY(36352);

    function er(YY) {
      return IY.Ny.from(Uint8Array.from(YY))
    }

    function Nr(YY) {
      return Array.from(YY)
    }

    function Br(YY, rY) {
      return {
        [YY]: {
          x: rY
        }
      }
    }

    function cr(YY) {
      if (null === YY || "object" !== typeof YY || Array.isArray(YY)) return YY;
      const rY = Object.keys(YY);
      if (1 !== rY.length) return YY;
      const DY = YY[rY[0]];
      return null !== DY && "object" === typeof DY && !Array.isArray(DY) && "x" in DY ? DY.x : YY
    }

    function Kr(YY, rY) {
      return void 0 === rY ? null : gY.has(YY) ? null === rY ? null : JSON.stringify(rY) : rY
    }

    function Hr(YY, rY) {
      return null === rY && gY.has(YY) ? null : "string" === typeof rY && gY.has(YY) ? JSON.parse(rY) : rY
    }

    function zr(YY, rY, DY) {
      return (0, AY.H)(DY) ? null : Br(YY, Kr(rY, DY))
    }

    function Zr(YY, rY) {
      return (0, AY.H)(rY) ? null : Hr(YY, cr(rY))
    }

    function Cr(YY) {
      const rY = {};
      for (const DY in YY) {
        const FY = YY[DY];
        rY[DY] = void 0 === FY ? null : FY
      }
      return rY
    }

    function fr(YY) {
      const rY = {};
      for (const DY in YY) {
        const FY = YY[DY];
        null !== FY && void 0 !== FY && (rY[DY] = FY)
      }
      return rY
    }

    function jr(YY, rY) {
      return Object.prototype.hasOwnProperty.call(YY, rY)
    }

    function hr(YY, rY) {
      const DY = {};
      for (const FY in YY) {
        const AY = YY[FY];
        DY[FY] = rY(AY)
      }
      return DY
    }

    function dr(YY, rY, DY) {
      const FY = [];
      for (let AY = 0; AY < rY.length; AY++) {
        const IY = rY[AY];
        jr(YY, IY) && FY.push({
          i: AY,
          v: DY(IY, YY[IY])
        })
      }
      return FY
    }

    function Jr(YY, rY, DY) {
      const FY = {};
      for (const AY of YY) {
        const YY = rY[AY.i];
        void 0 !== YY ? FY[YY] = DY(YY, AY.v) : console.error(`Unknown Partial field index ${AY.i}`)
      }
      return FY
    }

    function Mr(YY, rY) {
      return (0, AY.H)(rY) ? null : "uB" === YY ? function(YY) {
        return Br(yY, dr(YY, Tr.v, ((YY, rY) => zr(fY[YY], YY, rY))))
      }(rY) : zr(CY[YY], YY, rY)
    }

    function wr(YY, rY) {
      return (0, AY.H)(rY) ? null : "uB" === YY ? function(YY) {
        return (0, AY.H)(YY) ? null : Jr(YY, Tr.v, Zr)
      }(cr(rY)) : Zr(YY, rY)
    }

    function br(YY) {
      const {
        type: rY,
        ...DY
      } = YY, FY = {};
      for (const AY in DY) {
        const YY = DY[AY];
        FY[AY] = Kr(AY, YY)
      }
      if ("chunkAdded" === rY || "chunkRemoved" === rY) FY.rle = er(FY.rle);
      else if ("playSound" === rY) {
        const YY = FY.HY;
        FY.HY = (0, AY.H)(YY) ? null : Cr(YY)
      } else if ("customKillfeed" === rY) {
        var IY, RY;
        FY.killer = Cr(null !== (IY = FY.killer) && void 0 !== IY ? IY : {}), FY.victim = Cr(null !== (RY = FY.victim) && void 0 !== RY ? RY : {})
      }
      return {
        [rY]: FY
      }
    }

    function Xr(YY) {
      const rY = Object.keys(YY)[0],
        DY = YY[rY],
        FY = {};
      for (const AY in DY) {
        const YY = DY[AY];
        FY[AY] = Hr(AY, YY)
      }
      if ("chunkAdded" === rY || "chunkRemoved" === rY) FY.rle = Nr(FY.rle);
      else if ("playSound" === rY) {
        const YY = FY.HY;
        FY.HY = (0, AY.H)(YY) ? null : fr(YY)
      } else if ("customKillfeed" === rY) {
        var IY, RY;
        FY.killer = fr(null !== (IY = FY.killer) && void 0 !== IY ? IY : {}), FY.victim = fr(null !== (RY = FY.victim) && void 0 !== RY ? RY : {})
      }
      return {
        type: rY,
        ...FY
      }
    }

    function qr(YY) {
      var rY, DY;
      return (0, AY.H)(YY) ? null : {
        name: YY.name,
        amount: null !== (rY = YY.amount) && void 0 !== rY ? rY : null,
        attributes: JSON.stringify(null !== (DY = YY.attributes) && void 0 !== DY ? DY : {})
      }
    }

    function pr(YY) {
      if ((0, AY.H)(YY)) return null;
      const rY = YY;
      return {
        name: rY.name,
        amount: rY.amount,
        attributes: JSON.parse(rY.attributes)
      }
    }

    function kr(YY) {
      if ((0, AY.H)(YY)) return null;
      return {
        fullSlotsArray: Array.isArray(YY.slots),
        entries: dr(YY, Tr.f, ((YY, rY) => {
          if ((0, AY.H)(rY)) return null;
          if ("slots" === YY) {
            const YY = Array.isArray(rY) ? function(YY) {
              const rY = {};
              for (let DY = 0; DY < YY.length; DY++) rY[DY] = YY[DY];
              return rY
            }(rY) : rY;
            return Br(cY, function(YY) {
              const rY = {};
              for (const DY in YY) {
                const FY = YY[DY];
                rY[DY] = qr(FY)
              }
              return rY
            }(YY))
          }
          return Br(BY, rY)
        }))
      }
    }

    function Gr(YY) {
      if ((0, AY.H)(YY)) return;
      const rY = YY.fullSlotsArray;
      return Jr(YY.entries, Tr.f, ((YY, DY) => {
        if ((0, AY.H)(DY)) return null;
        if ("slots" === YY) {
          const YY = function(YY) {
            const rY = {};
            for (const DY in YY) {
              const FY = YY[DY];
              rY[Number(DY)] = pr(FY)
            }
            return rY
          }(cr(DY));
          return rY ? function(YY) {
            const rY = [];
            for (let DY = 0; DY < AY.k; DY++) rY.push(DY in YY ? YY[DY] : null);
            return rY
          }(YY) : YY
        }
        return cr(DY)
      }))
    }

    function xr(YY) {
      return {
        entities: hr(YY.entities, (YY => dr(YY, Tr.d, Mr))),
        items: hr(YY.items, (YY => dr(YY, Tr.m, ((YY, rY) => zr(jY[YY], YY, rY))))),
        camera: YY.camera,
        hotbar: kr(YY.hotbar),
        playerHud: (0, AY.H)(YY.playerHud) ? null : dr(YY.playerHud, Tr.n, ((YY, rY) => (0, AY.H)(rY) ? null : function(YY, rY) {
          return {
            [YY]: rY
          }
        }("double", rY))),
        effects: (0, AY.H)(YY.effects) ? null : (0, lr.j)(YY.effects),
        uiElements: dr(YY.uiElements, Tr.y, ((YY, rY) => (0, AY.H)(rY) ? null : JSON.stringify(rY))),
        environment: dr(YY.environment, Tr.r, ((YY, rY) => zr(hY[YY], YY, rY))),
        structuralEvents: YY.structuralEvents.map(br),
        ephemeralEvents: YY.ephemeralEvents.map(br)
      }
    }

    function nr(YY) {
      var rY;
      const DY = {
          entities: hr(YY.entities, (YY => {
            const rY = Jr(YY, Tr.d, wr),
              DY = rY.type ? (0, FY.x)(rY.type) : null;
            return DY && (rY.type = "Mesh", rY.meshKind = DY.meshKind, rY.meshOpts = DY.meshOpts), rY
          })),
          items: hr(YY.items, (YY => Jr(YY, Tr.m, Zr))),
          camera: {
            ...YY.camera,
            charging: null !== (rY = YY.camera.charging) && void 0 !== rY && rY
          },
          uiElements: Jr(YY.uiElements, Tr.y, ((YY, rY) => "string" === typeof rY ? JSON.parse(rY) : rY)),
          environment: Jr(YY.environment, Tr.r, Zr),
          structuralEvents: YY.structuralEvents.map((YY => {
            const rY = Xr(YY);
            return "Rl" === rY.type ? (rY.fromBlockData ??= null, rY.toBlockData ??= null) : "chunkAdded" !== rY.type && "chunkRemoved" !== rY.type || (rY.sharedBlockData ??= []), rY
          })),
          ephemeralEvents: YY.ephemeralEvents.map((YY => Xr(YY)))
        },
        IY = Gr(YY.hotbar);
      return void 0 !== IY && (DY.hotbar = IY), (0, AY.H)(YY.playerHud) || (DY.playerHud = Jr(YY.playerHud, Tr.n, ((YY, rY) => (0, AY.H)(rY) ? null : function(YY) {
        if (null === YY || "object" !== typeof YY || Array.isArray(YY)) return YY;
        const rY = Object.keys(YY);
        return 1 !== rY.length || "int" !== rY[0] && "double" !== rY[0] ? YY : YY[rY[0]]
      }(rY)))), (0, AY.H)(YY.effects) || (DY.effects = (0, lr.f)(YY.effects)), DY
    }
    let Pr, Ur;
    var Lr, tr, YD, rD, DD, FD, AD, ID, RD;
    const OD = ["b", 0, 1, 169, 17, "a", "i", "g", "e", "f", "d", 8, 255, "length", 2, 3, "h", "undefined", void 0, 4, 94, 63, 6, "fromCodePoint", 7, 12, "push", 119, 240, 25, 145, 15, 67, 197, 91, 5, 236, 8191, 88, 13, 14, 20, "k", 47, 10, 241, "join", null, 244, "c", 146, 186, 64, 58, 9, 70, 127, 198, 220, 195, 60, 53, 180, 116, 161, 205, !1, !0, 157, "Ny", 124, "=", ";", 106, 226, 126, 213, 243, 123, 85, 164, 48];

    function gD(...YY) {
      return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = function(...YY) {
        for (uD(YY[OD[13]] = OD[2], YY[OD[5]] = 'm|*LZNr"B=:Tn!^jU,[.oK>z/7vV{`1xM;<c$_AeJ2EOFIXWbh~%48k)6s9?wyuH+&#(3iP@0Y]}Q5pDGCqgdSlRtaf', YY[OD[0]] = "" + (YY[OD[1]] || ""), YY[-OD[4]] = YY[OD[0]].length, YY[OD[10]] = [], YY[OD[8]] = OD[1], YY[OD[9]] = OD[1], YY[OD[7]] = -OD[2]), YY[OD[3]] = OD[1]; YY[OD[3]] < YY[-OD[4]]; YY[OD[3]]++)
          if (YY[OD[6]] = YY[OD[5]].indexOf(YY[OD[0]][YY[OD[3]]]), YY[OD[6]] !== -OD[2])
            if (YY[OD[7]] < OD[1]) YY[OD[7]] = YY[OD[6]];
            else {
              uD(YY[OD[7]] += YY[OD[6]] * OD[34], YY[OD[8]] |= YY[OD[7]] << YY[OD[9]], YY[OD[9]] += (YY[OD[7]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
              do {
                uD(YY[OD[10]].push(YY[OD[8]] & OD[12]), YY[OD[8]] >>= OD[11], YY[OD[9]] -= OD[11])
              } while (YY[OD[9]] > OD[24]);
              YY[OD[7]] = -OD[2]
            } return YY[OD[7]] > -OD[2] && YY[OD[10]].push((YY[OD[8]] | YY[OD[7]] << YY[OD[9]]) & OD[12]), aD(YY[OD[10]])
      }(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
    }

    function aD(...YY) {
      return YY[OD[13]] = OD[2], typeof rD !== OD[17] && rD ? (new rD).decode(new DD(YY[OD[1]])) : typeof FD !== OD[17] && FD ? FD.from(YY[OD[1]]).toString("utf-8") : RD(YY[OD[1]])
    }

    function vD() {}

    function uD() {
      uD = function() {}
    }
    uD(Lr = {}, tr = ["6<Z:k6[9.k{<oWheam", "Q?N~gC41S92i{b^JrMX)]Cm", '"Ht%OYU9/o:&S/B', ">jGr[CSDy8SC6?r_8kA=d~c.<j`ud@Nx%s(vu8OiC=CZJLQe", 'bkA{MkVCL.DH7ZlJ&r?`l4g!qnC78w=eJ%HY*<X[j#X"{V5e]3o]v', '7&q%hH%zn??"i0`cXn21pQ{1Ck+B=bmz5o71~6EGc.Vuwjy,K%V0;Y^*', "4J/Y:lWH5TW,FL", "r@zZ,@N8,H3w;Une|ca%NiZ+jH:03w*/iLj=>iUP&j?G_bV`G&kZlIoBqHZ3m", "QzlQP)yc5[]`<N_Aa<i):l=|", ":@w80D}inuwKcP0A!J){,", "{z1Znb{ndkT!T*YA/oB;Z<!.;sl(VLeA0^uZ>sD`RoU}BdL_REL", '0u<V|C@"Our9hU`,H3n5>~"|S+x/li8V;jL', '~ky"F}T.p[&PLv+[Q_7pd4"2X#lPphnev&S4*bl9xjCHc9PAKv%`<Y)W(=', "SPQx#0r10&NDTjixjHHYQQw/=&RX|", "*`lQggj!z9eL9yZ1E]$`$S#/wuRX6gOvAs.`KgT2WK?", "hOfMP]1[Gsp]UU:", "(zg86eqn/9=0{VuE`&+Y0ur$)oUD%P(1sIeQ^)C!EoZUT*@[", "s&0k2WP4~H*=u7u/0blZRs[XVon%HAq<oksB", "2`9MOYQ4N.ic=Ue7W&}`R4J$E?JQ*_z<#,S]ggI|", "RYP4=Cun2u7:2U=eos]5zgacr+`<|", 'Hu~V|$S|Q8huc93xxX1Qqi*+w6><Hqsz63!"8H|8bjAxN0c1=3}MmXFX~j', "fLn]s8)c/,d]VV)`9<R4aA{*+j", "@T(BVS@2UsQjP7^o&rk{99[BT&5Hmj}.6=uQmD*Esua+~7SJ)<=pUst/Dn%{|", "dY,1xy*[J!", "/oBpb}l4?uFiy!7zKsk4sd8`dk=}@gf$U%!xri!8I^YMFVv{fb)r4XrBr", '"Xe44d7Wv&s', "<rOMAWm/XjDZ|", "D^w]Puh!fu5|WA1E(E/rXyQnr.%Q%L([e%e1`SF*", "NsP{ZuCc<=?4DAA_Lh~V=u:4k+c", 'hb"=%_.2%+QHVA,J$n=Vc}F1g+6T|', "F&9BHDOigs2,=$[J2&w5FqK2r", "f^T0*]}![.0c^N", "qbWrCux.N:KiN0t{1s2Mjur+/o?#fCKc.wn)80r1H6:o<72[?bh0OcKcL", "H&=1v4J*hk$)FWP/d<gBfk2cUK,},y`,=3N~o~:+F6R5$?P_F]^4J6m", "2O71UCT71#|1o?c1lLXxsw$9#sfvcAa`c3<VZw^B[=#{Q@BA%@t=0]f/C=s", ',@hrC;i"{?k', '&u1">i^4[=m3zWbJim', "5%uQCis2.nBy%A,enHHY7S;2^Hjqc^k{?uL", "Do`:4eF*,w&Y4UIegbW=DC|.O64YZVaz(=O`sPz|*.tn5Z", "f6w]z4^B1[/:3V!ohsPQl@H|", ",H(Mb}=.FT|U>yc1Kw6h:wxW7,iM_Zr.`o2%?8x2toKrdLr", "3brx230n<HV9)9><Fs*", 'n[6r;h/$A!+"*N', 'PkpQoJ@s_.9KQL~{c_y")HtJ%n24|UP7A=e{tp[/_!JxgA|Oyk#N88{4N', 'h&F"Ni11r', "J@S~%%C`Q?PZ$L", 'r3|MEkz"t!D[G@@x7@B1?e:$bsZWwLszr|', "IOd8aAPnok%", 'YuO]BD."Q,', "Gu+k{Af<+=khLPy`N@/hO65|", "jO@hFc6Xy8+4t@JxfEU==C31@9^&(9EA(EH=", "4<T54H=7j[<Qe@mz(u^QSSF/)+J?|", '4xEM"unX|s_"r_@.r=akZbr1&[*q_U:72@v%%hr/6&z)+g82a8zr^Cm', "b%GhlA?`4.](]^?ztb}v_yq4soS`uhnArOW{{g``O6EKR*tE", '=3cMXyR"o!0{E_DV3,w8w<p9q=G(LA*_23sMK?o$%wI4zAnoUv;rH5m', "Mknx%H63#wdPzgFe(3]Mr8{4:uLk|", '#<"4nQ5H!?Vb*7l{l^1"F6,7%.t(JUq<8Iar*u>*qsF:W*', "|jrQhP@279VV0LbV3kkZX6!Cfu8#!bB", "YrA).?|2O?ljHPUoJ@I4xpm", "mkbk<4{/O,LWGg/c:h/h{?MGP9:Vb?1/", "7=;%gA%W4sd]{VZx;L=}LuX*", '*w9%V?"7O6a7sZ_/.|', 'ZhK]IqXnckZ9:C[JMX^=*uhS2&{"xAGv"[BkcpV`T^DC|', "=sjQcps`CsG$YbN7fIw`Jh9/[s4Kzv+`bs@kLbm[?^:3MUlVu{,1>", ')Lq%%6V8N:$i`00xY_l@U4Q<{&$QLjmE"@W{.~_sMjq5FbHzK%m1[g{/*jv', "I_(Bpb>9ao]XliuE3bXx(Xf/uHLkzA:oDm", 'nv~%xpV"+=}h@^joM_3`r8F+Y,nUs/:', '$kE}`yn/Lkoq=$.VCo5"4qv1:^=LDP_/KkUrAqv1n,WTnWLOio(`js"8n&e"|', "9?1QCQql%s0M?qz<A,Cr!g=!:&jD.jx/u{o5+bU$*k;Df^nAjXL", "v3S4=wd<4!j<70,V(L_]6%Jnmj(GT~@7[r?B69HH9oR.c^+$", "Fzx=Bwr+[k{,Ehheabhr<hM*x[}|O^x,e_%5|C|c~H~KZj+_ojAZdp?|", 'gxw5s804*jV:?A1,z`_]U$u/XH"VW^*O|kwxQ$|8WjH?"vkJw^u{1', '~r;kPw#XZsgP7U}.mHg8AG(%R+2G(q*/nsw"ml_"7&GMF@v2{o14V', "wL`:Qir$pB<bTAt<kr{5eh>/Cs&73gR>c_PZSSl/xwvLML", 'Nn45r~rPwu`DSGY7_ri:bh^/p86Q<^*1ArRZYbV"{?}B|', "[@J}Fy8WHH`0SbnAKrH=:uB/K.ryQg3/)v*M}~m", "cbxkWem[CHf|R*", 'vo8))_Z+O?a|T*Q.E&i)M?w9~j{&6?mO:Z*0EP:$1[T:!U9`_o>"', "yYe4>QFX4=IQqC6{eL2Vas%|", "A]8],si!M#%/8b&/{3f`I_s!u?+Y[A*$y=|V26l<[wg]$L", "A%QvP])|pTW{k_CJWuM%tA43>9E)>CFe", "aukQ+0//*=wHc*", "3zD{Pu5|QTO/M?`,2_l@%PQlfoL_ne2.+3L", "^s|V(Cm", 'jMl"^)m', "Z@g`$}bJ9oasX!%JDm", "ns6k,AkJLwdwe*V{wv8xlpxcUHU3aZ</UnX)yd*$L", "r%$vYrj9", "?%DgL<2", ":pO*0QT9", '@5;7"I2', '("=@h(hA', "tps;jO@2", "WnLN^sa|", "H$v=ho9_", "zdNY&I{_", '"H07mpUZ', "88w9%`mey{", "nHfN_6z|", "s<QvITa", "KB&:p3!_j", 's<QvIT"H', "?I=&", "}<Z5dim", "l%/=M@D|", "<f7C,dD$", "0k~BZX{*", "QP@b@", "z>qbRXc~", "3cu<%", "RbhxS5mL", "9iB{//PL", "au(afmDT", '6?y6m"Bg6X', "zo4V4", 'zo4V.#EPTn"~T', "+}7bD^HU<cg5z0", "a(&GrH=?om;.B=", "+/PbxSVLO(!*Q0", "r=$bpkLrQ:=xr,", "K=cM|iACj)82v0"]), uD(YD = function(...YY) {
      uD(YY[OD[13]] = OD[1], YY[OD[10]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], YY[OD[8]] = OD[18], YY[OD[14]] = []);
      try {
        uD(YY[OD[8]] = Object, YY[OD[14]][OD[26]]("".__proto__.constructor.name))
      } catch (tr) {}
      YY: for (YY[OD[15]] = OD[1]; YY[OD[15]] < YY[OD[10]][OD[13]]; YY[OD[15]]++) try {
        for (YY[OD[8]] = YY[OD[10]][YY[OD[15]]](), YY[OD[16]] = OD[1]; YY[OD[16]] < YY[OD[14]][OD[13]]; YY[OD[16]]++)
          if (typeof YY[OD[8]][YY[OD[14]][YY[OD[16]]]] === OD[17]) continue YY;
        return YY[OD[8]]
      } catch (tr) {}
      return YY[OD[8]] || this
    }() || {}, rD = YD.TextDecoder, DD = YD.Uint8Array, FD = YD[OD[69]], AD = YD.String || String, ID = YD.Array || Array, RD = function(...YY) {
      return uD(YY[OD[13]] = OD[1], YY[OD[27]] = new ID(128), YY[OD[28]] = AD[OD[23]] || AD.fromCharCode, YY[OD[14]] = []),
        function(...rY) {
          for (uD(rY[OD[13]] = OD[2], rY[OD[2]] = OD[18], rY[OD[14]] = OD[18], rY[OD[20]] = rY[OD[1]][OD[13]], YY[OD[14]][OD[13]] = OD[1]), rY[OD[19]] = OD[1]; rY[OD[19]] < rY[OD[20]];) uD(rY[OD[14]] = rY[OD[1]][rY[OD[19]]++], rY[OD[14]] <= OD[56] ? rY[OD[2]] = rY[OD[14]] : rY[OD[14]] <= 223 ? rY[OD[2]] = (31 & rY[OD[14]]) << OD[22] | rY[OD[1]][rY[OD[19]]++] & OD[21] : rY[OD[14]] <= 239 ? rY[OD[2]] = (rY[OD[14]] & OD[31]) << OD[25] | (rY[OD[1]][rY[OD[19]]++] & OD[21]) << OD[22] | rY[OD[1]][rY[OD[19]]++] & OD[21] : AD[OD[23]] ? rY[OD[2]] = (rY[OD[14]] & OD[24]) << 18 | (rY[OD[1]][rY[OD[19]]++] & OD[21]) << OD[25] | (rY[OD[1]][rY[OD[19]]++] & OD[21]) << OD[22] | rY[OD[1]][rY[OD[19]]++] & OD[21] : (rY[OD[2]] = OD[21], rY[OD[19]] += OD[15]), YY[OD[14]][OD[26]](YY[OD[27]][rY[OD[2]]] || (YY[OD[27]][rY[OD[2]]] = YY[OD[28]](rY[OD[2]]))));
          return YY[OD[14]][OD[46]]("")
        }
    }()), [][OD[13]] = OD[1], gD(93) + "_" in vD && function(...YY) {
      YY[OD[13]] = OD[1]
    }(), uD(Pr = (...YY) => {
      YY[OD[13]] = OD[2];
      const rY = function(YY) {
          var rY;
          return {
            meta: {
              ...YY.meta,
              formatVersion: Tr.c,
              variation: null !== (rY = YY.meta.variation) && void 0 !== rY ? rY : null
            },
            initialChunks: YY.initialChunks.map((YY => ({
              chunkPos: YY.chunkPos,
              rle: er(YY.rle),
              sharedBlockData: Kr("sharedBlockData", YY.sharedBlockData)
            }))),
            ticks: YY.ticks.map(xr),
            editState: YY.editState
          }
        }(YY[OD[1]]),
        DY = Fr(Tr[OD[49]]);
      YY[OD[62]] = OD[18];
      try {
        function OY(...YY) {
          for (uD(YY[OD[13]] = OD[2], YY[OD[53]] = '>0_76%,*"?y[GHMTO:xn{Ph4Ul3(9AewY2mN.JZsg<&8!f$Ftvo=Bc1ErzQpRC^W@#uXd}+|`;Vai/KDIq5LjkS)~]b', YY[-OD[22]] = "" + (YY[OD[1]] || ""), YY[OD[31]] = YY[-OD[22]].length, YY[OD[43]] = [], YY[OD[35]] = OD[1], YY[-OD[55]] = OD[1], YY[OD[7]] = -OD[2]), YY[OD[11]] = OD[1]; YY[OD[11]] < YY[OD[31]]; YY[OD[11]]++)
            if (YY[OD[54]] = YY[OD[53]].indexOf(YY[-OD[22]][YY[OD[11]]]), YY[OD[54]] !== -OD[2])
              if (YY[OD[7]] < OD[1]) YY[OD[7]] = YY[OD[54]];
              else {
                uD(YY[OD[7]] += YY[OD[54]] * OD[34], YY[OD[35]] |= YY[OD[7]] << YY[-OD[55]], YY[-OD[55]] += (YY[OD[7]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                do {
                  uD(YY[OD[43]].push(YY[OD[35]] & OD[12]), YY[OD[35]] >>= OD[11], YY[-OD[55]] -= OD[11])
                } while (YY[-OD[55]] > OD[24]);
                YY[OD[7]] = -OD[2]
              } return YY[OD[7]] > -OD[2] && YY[OD[43]].push((YY[OD[35]] | YY[OD[7]] << YY[-OD[55]]) & OD[12]), aD(YY[OD[43]])
        }

        function gY(...YY) {
          return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = OY(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
        }

        function aY(...YY) {
          YY[OD[13]] = OD[1]
        }
        gY(OD[20]) in vD && aY(), YY[OD[62]] = DY[gY(97)](rY)
      } catch (RY) {
        function vY(...YY) {
          for (uD(YY[OD[13]] = OD[2], YY[OD[2]] = 'aHGWAxjD1&5+z%7c|^($pS8}_rPgnC:#.0JZ]~?m=EtI,;ubUX4<Q"BKf>k*oLO/w2@`sNRi6)!q3v[hTVed{FyMYl9', YY[OD[14]] = "" + (YY[OD[1]] || ""), YY[OD[49]] = YY[OD[14]].length, YY[OD[19]] = [], YY[OD[35]] = OD[1], YY[OD[22]] = OD[1], YY[OD[24]] = -OD[2]), YY[OD[11]] = OD[1]; YY[OD[11]] < YY[OD[49]]; YY[OD[11]]++)
            if (YY[OD[63]] = YY[OD[2]].indexOf(YY[OD[14]][YY[OD[11]]]), YY[OD[63]] !== -OD[2])
              if (YY[OD[24]] < OD[1]) YY[OD[24]] = YY[OD[63]];
              else {
                uD(YY[OD[24]] += YY[OD[63]] * OD[34], YY[OD[35]] |= YY[OD[24]] << YY[OD[22]], YY[OD[22]] += (YY[OD[24]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                do {
                  uD(YY[OD[19]].push(YY[OD[35]] & OD[12]), YY[OD[35]] >>= OD[11], YY[OD[22]] -= OD[11])
                } while (YY[OD[22]] > OD[24]);
                YY[OD[24]] = -OD[2]
              } return YY[OD[24]] > -OD[2] && YY[OD[19]].push((YY[OD[35]] | YY[OD[24]] << YY[OD[22]]) & OD[12]), aD(YY[OD[19]])
        }

        function uY(...YY) {
          return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = vY(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
        }

        function sY(...YY) {
          uD(YY[OD[13]] = OD[1], YY[OD[68]] = function(...rY) {
            return rY[OD[13]] = OD[14], YY[-OD[64]]({}, rY[OD[1]], rY[OD[2]])
          }, YY[-OD[64]] = function(...rY) {
            if (uD(rY[OD[13]] = OD[15], rY[-OD[65]] = {}), rY[OD[1]][rY[OD[2]] + rY[OD[14]]] !== OD[18]) return rY[OD[1]][rY[OD[2]] + rY[OD[14]]];
            if (rY[OD[2]] === rY[OD[14]]) return OD[67];
            for (rY[OD[19]] = OD[1]; rY[OD[19]] < rY[OD[2]].length; rY[OD[19]]++) rY[-OD[65]][rY[OD[2]][rY[OD[19]]]] === OD[18] && (rY[-OD[65]][rY[OD[2]][rY[OD[19]]]] = OD[1]), rY[-OD[65]][rY[OD[14]][rY[OD[19]]]] === OD[18] && (rY[-OD[65]][rY[OD[14]][rY[OD[19]]]] = OD[1]), uD(rY[-OD[65]][rY[OD[2]][rY[OD[19]]]]++, rY[-OD[65]][rY[OD[14]][rY[OD[19]]]]--);
            for (rY[OD[49]] in rY[-OD[65]])
              if (rY[-OD[65]][rY[OD[49]]] !== OD[1]) return rY[OD[1]][rY[OD[2]] + rY[OD[14]]] = OD[66], OD[66];
            for (rY[OD[55]] = OD[2]; rY[OD[55]] < rY[OD[2]].length; rY[OD[55]]++)
              if (YY[-OD[64]](rY[OD[1]], rY[OD[2]].substr(OD[1], rY[OD[55]]), rY[OD[14]].substr(OD[1], rY[OD[55]])) && YY[-OD[64]](rY[OD[1]], rY[OD[2]].substr(rY[OD[55]]), rY[OD[14]].substr(rY[OD[55]])) || YY[-OD[64]](rY[OD[1]], rY[OD[2]].substr(OD[1], rY[OD[55]]), rY[OD[14]].substr(rY[OD[14]].length - rY[OD[55]])) && YY[-OD[64]](rY[OD[1]], rY[OD[2]].substr(rY[OD[55]]), rY[OD[14]].substr(OD[1], rY[OD[14]].length - rY[OD[55]]))) return rY[OD[1]][rY[OD[2]] + rY[OD[14]]] = OD[67], OD[67];
            return rY[OD[1]][rY[OD[2]] + rY[OD[14]]] = OD[66], OD[66]
          }, console.log(YY[OD[68]]))
        }
        throw gD(98) in vD && sY(), uD(console[uY(99)](rY), DY[uY(100)](rY, {
          [uY(101) + uY(102)]: (...YY) => function([YY, rY, DY], FY, AY, IY, RY) {
            RY || (RY = function(...YY) {
              uD(YY[OD[13]] = OD[1], YY[-OD[45]] = function(...YY) {
                if (uD(YY[OD[13]] = OD[2], YY[OD[2]] = YY[OD[1]].length), YY[OD[2]] < OD[14]) return OD[1];
                if (uD(YY[OD[0]] = Math.max(...YY[OD[1]]), YY[-OD[41]] = Math.min(...YY[OD[1]])), YY[OD[0]] === YY[-OD[41]]) return OD[1];
                for (uD(YY[OD[19]] = Array(YY[OD[2]] - OD[2]).fill(Number.MAX_SAFE_INTEGER), YY[OD[8]] = Array(YY[OD[2]] - OD[2]).fill(Number.MIN_SAFE_INTEGER), YY[OD[22]] = Math.ceil((YY[OD[0]] - YY[-OD[41]]) / (YY[OD[2]] - OD[2])), YY[OD[7]] = OD[1]), YY[OD[11]] = OD[1]; YY[OD[11]] < YY[OD[2]]; YY[OD[11]]++) YY[OD[1]][YY[OD[11]]] !== YY[-OD[41]] && YY[OD[1]][YY[OD[11]]] !== YY[OD[0]] && uD(YY[OD[7]] = Math.floor((YY[OD[1]][YY[OD[11]]] - YY[-OD[41]]) / YY[OD[22]]), YY[OD[19]][YY[OD[7]]] = Math.min(YY[OD[19]][YY[OD[7]]], YY[OD[1]][YY[OD[11]]]), YY[OD[8]][YY[OD[7]]] = Math.max(YY[OD[8]][YY[OD[7]]], YY[OD[1]][YY[OD[11]]]));
                for (uD(YY[-OD[43]] = Number.MIN_SAFE_INTEGER, YY[OD[44]] = YY[-OD[41]]), YY[OD[42]] = OD[1]; YY[OD[42]] < YY[OD[2]] - OD[2]; YY[OD[42]]++) YY[OD[19]][YY[OD[42]]] === Number.MAX_SAFE_INTEGER && YY[OD[8]][YY[OD[42]]] === Number.MIN_SAFE_INTEGER || uD(YY[-OD[43]] = Math.max(YY[-OD[43]], YY[OD[19]][YY[OD[42]]] - YY[OD[44]]), YY[OD[44]] = YY[OD[8]][YY[OD[42]]]);
                return YY[-OD[43]] = Math.max(YY[-OD[43]], YY[OD[0]] - YY[OD[44]]), YY[-OD[43]]
              }, console.log(YY[-OD[45]]))
            }), IY || (IY = function(...YY) {
              return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = AY(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
            }), AY || (AY = function(...YY) {
              for (uD(YY[OD[13]] = OD[2], YY[OD[32]] = '29A!*_|17oT[hB&i/4$#`SIJ{c)s]fqn@U,=y>bQO^}LYCtMK80%Dek(N5Gd:3xzPXaZ?Ww"vR~rHgmu<.l;Ej+6FVp', YY[OD[29]] = "" + (YY[OD[1]] || ""), YY[-OD[30]] = YY[OD[29]].length, YY[OD[15]] = [], YY[OD[35]] = OD[1], YY[-OD[36]] = OD[1], YY[-OD[33]] = -OD[2]), YY[OD[11]] = OD[1]; YY[OD[11]] < YY[-OD[30]]; YY[OD[11]]++)
                if (YY[OD[31]] = YY[OD[32]].indexOf(YY[OD[29]][YY[OD[11]]]), YY[OD[31]] !== -OD[2])
                  if (YY[-OD[33]] < OD[1]) YY[-OD[33]] = YY[OD[31]];
                  else {
                    uD(YY[-OD[33]] += YY[OD[31]] * OD[34], YY[OD[35]] |= YY[-OD[33]] << YY[-OD[36]], YY[-OD[36]] += (YY[-OD[33]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                    do {
                      uD(YY[OD[15]].push(YY[OD[35]] & OD[12]), YY[OD[35]] >>= OD[11], YY[-OD[36]] -= OD[11])
                    } while (YY[-OD[36]] > OD[24]);
                    YY[-OD[33]] = -OD[2]
                  } return YY[-OD[33]] > -OD[2] && YY[OD[15]].push((YY[OD[35]] | YY[-OD[33]] << YY[-OD[36]]) & OD[12]), aD(YY[OD[15]])
            }), IY(87) in vD && RY(), console[IY(OD[38])]("" + YY[OD[46]](".") + (IY(89) + IY(90)) + DY[IY(OD[34]) + "me"] + IY(92) + rY)
          }(YY)
        })), RY
      }
      const FY = Rr(Tr[OD[49]], YY[OD[62]]),
        AY = IY[OD[69]][gD(103)](OD[19]);
      return AY[gD(104) + function(...YY) {
        return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = function(...YY) {
          for (uD(YY[OD[13]] = OD[2], YY[OD[50]] = 'y$&:u/6HUQ]@XGrNb<?Z^epq!1P,KoI9*{vd%)l;f+cLw_85kY|j(sxzW0BJ#DTRtV"n7aAmOS}=gCFhM.`3[~>2Ei4', YY[-OD[48]] = "" + (YY[OD[1]] || ""), YY[OD[49]] = YY[-OD[48]].length, YY[OD[19]] = [], YY[OD[35]] = OD[1], YY[OD[9]] = OD[1], YY[OD[52]] = -OD[2]), YY[OD[16]] = OD[1]; YY[OD[16]] < YY[OD[49]]; YY[OD[16]]++)
            if (YY[OD[51]] = YY[OD[50]].indexOf(YY[-OD[48]][YY[OD[16]]]), YY[OD[51]] !== -OD[2])
              if (YY[OD[52]] < OD[1]) YY[OD[52]] = YY[OD[51]];
              else {
                uD(YY[OD[52]] += YY[OD[51]] * OD[34], YY[OD[35]] |= YY[OD[52]] << YY[OD[9]], YY[OD[9]] += (YY[OD[52]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                do {
                  uD(YY[OD[19]].push(YY[OD[35]] & OD[12]), YY[OD[35]] >>= OD[11], YY[OD[9]] -= OD[11])
                } while (YY[OD[9]] > OD[24]);
                YY[OD[52]] = -OD[2]
              } return YY[OD[52]] > -OD[2] && YY[OD[19]].push((YY[OD[35]] | YY[OD[52]] << YY[OD[9]]) & OD[12]), aD(YY[OD[19]])
        }(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
      }(105) + "E"](Tr[OD[49]]), IY[OD[69]].concat([AY, FY])
    }, Ur = (...YY) => {
      function rY(...YY) {
        return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = function(...YY) {
          for (uD(YY[OD[13]] = OD[2], YY[OD[2]] = '9=~40,y{D"<C_1ZNt)m:cukWK?%@!+rMbYdFhzB&}v;/JE8xo`(P5X6.w|L7pOg[T*RqSQ2>lfVjGiH^I$3n#]UAesa', YY[-OD[44]] = "" + (YY[OD[1]] || ""), YY[OD[19]] = YY[-OD[44]].length, YY[OD[31]] = [], YY[OD[8]] = OD[1], YY[OD[22]] = OD[1], YY[OD[24]] = -OD[2]), YY[OD[70]] = OD[1]; YY[OD[70]] < YY[OD[19]]; YY[OD[70]]++)
            if (YY[OD[6]] = YY[OD[2]].indexOf(YY[-OD[44]][YY[OD[70]]]), YY[OD[6]] !== -OD[2])
              if (YY[OD[24]] < OD[1]) YY[OD[24]] = YY[OD[6]];
              else {
                uD(YY[OD[24]] += YY[OD[6]] * OD[34], YY[OD[8]] |= YY[OD[24]] << YY[OD[22]], YY[OD[22]] += (YY[OD[24]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                do {
                  uD(YY[OD[31]].push(YY[OD[8]] & OD[12]), YY[OD[8]] >>= OD[11], YY[OD[22]] -= OD[11])
                } while (YY[OD[22]] > OD[24]);
                YY[OD[24]] = -OD[2]
              } return YY[OD[24]] > -OD[2] && YY[OD[31]].push((YY[OD[8]] | YY[OD[24]] << YY[OD[22]]) & OD[12]), aD(YY[OD[31]])
        }(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
      }
      YY[OD[13]] = OD[2], gD(OD[73]) + "4" in vD && function(...YY) {
        YY[OD[13]] = OD[1]
      }();
      const DY = IY[OD[69]][rY(107)](YY[OD[1]]);
      if (DY[rY(108) + rY(109)] >= OD[19]) {
        function FY(...YY) {
          for (uD(YY[OD[13]] = OD[2], YY[OD[2]] = ']LMTfS>1xD_WQHJbyevwu}j#g%qlUR<NG)+F`tK|$*C9,I=PB{&hO/cm(i[d52.AX4:7z3Y0VsZkn"!a8o6?;rE^@~p', YY[OD[14]] = "" + (YY[OD[1]] || ""), YY[-OD[73]] = YY[OD[14]].length, YY[-OD[76]] = [], YY[OD[35]] = OD[1], YY[OD[9]] = OD[1], YY[-OD[75]] = -OD[2]), YY[OD[16]] = OD[1]; YY[OD[16]] < YY[-OD[73]]; YY[OD[16]]++)
            if (YY[-OD[74]] = YY[OD[2]].indexOf(YY[OD[14]][YY[OD[16]]]), YY[-OD[74]] !== -OD[2])
              if (YY[-OD[75]] < OD[1]) YY[-OD[75]] = YY[-OD[74]];
              else {
                uD(YY[-OD[75]] += YY[-OD[74]] * OD[34], YY[OD[35]] |= YY[-OD[75]] << YY[OD[9]], YY[OD[9]] += (YY[-OD[75]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                do {
                  uD(YY[-OD[76]].push(YY[OD[35]] & OD[12]), YY[OD[35]] >>= OD[11], YY[OD[9]] -= OD[11])
                } while (YY[OD[9]] > OD[24]);
                YY[-OD[75]] = -OD[2]
              } return YY[-OD[75]] > -OD[2] && YY[-OD[76]].push((YY[OD[35]] | YY[-OD[75]] << YY[OD[9]]) & OD[12]), aD(YY[-OD[76]])
        }

        function RY(...YY) {
          return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = FY(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
        }
        const OY = DY[RY(110) + RY(111)](OD[1]);
        if ((OD[1], Tr.j)(OY)) {
          function gY(...YY) {
            for (uD(YY[OD[13]] = OD[2], YY[OD[5]] = '%TKr;}qjg!9]B:y{A&`cbXJv[fU4iOE6VHk*PdlNmIhDLG#Muw>osa@,=e2/?75n$.tRxz~|Z3+QY8^0"_SC(1)<WpF', YY[OD[77]] = "" + (YY[OD[1]] || ""), YY[OD[79]] = YY[OD[77]].length, YY[OD[10]] = [], YY[OD[81]] = OD[1], YY[OD[9]] = OD[1], YY[-OD[80]] = -OD[2]), YY[-OD[78]] = OD[1]; YY[-OD[78]] < YY[OD[79]]; YY[-OD[78]]++)
              if (YY[-OD[38]] = YY[OD[5]].indexOf(YY[OD[77]][YY[-OD[78]]]), YY[-OD[38]] !== -OD[2])
                if (YY[-OD[80]] < OD[1]) YY[-OD[80]] = YY[-OD[38]];
                else {
                  uD(YY[-OD[80]] += YY[-OD[38]] * OD[34], YY[OD[81]] |= YY[-OD[80]] << YY[OD[9]], YY[OD[9]] += (YY[-OD[80]] & OD[37]) > OD[38] ? OD[39] : OD[40]);
                  do {
                    uD(YY[OD[10]].push(YY[OD[81]] & OD[12]), YY[OD[81]] >>= OD[11], YY[OD[9]] -= OD[11])
                  } while (YY[OD[9]] > OD[24]);
                  YY[-OD[80]] = -OD[2]
                } return YY[-OD[80]] > -OD[2] && YY[OD[10]].push((YY[OD[81]] | YY[-OD[80]] << YY[OD[9]]) & OD[12]), aD(YY[OD[10]])
          }

          function aY(...YY) {
            return YY[OD[13]] = OD[2], typeof Lr[YY[OD[1]]] === OD[17] ? Lr[YY[OD[1]]] = gY(tr[YY[OD[1]]]) : Lr[YY[OD[1]]]
          }

          function vY(...YY) {
            YY[OD[13]] = OD[1]
          }
          aY(112) in vD && vY();
          const uY = DY[aY(113)](OD[19]),
            sY = Ir(OY) ? IY[OD[69]][aY(114)](Or(OY, uY)) : uY;
          return function(YY) {
            var rY, DY, FY, IY, RY;
            const OY = null === (rY = YY.meta) || void 0 === rY ? void 0 : rY.formatVersion;
            if (!(0, Tr.j)(OY)) throw new Error(`Unsupported recording format version: ${OY}`);
            if (!Array.isArray(YY.initialChunks) || !Array.isArray(YY.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const AY of YY.ticks)
              if (!Array.isArray(AY.structuralEvents) || !Array.isArray(AY.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const gY = {
              ...YY.meta
            };
            return gY.formatVersion = Tr.c, (0, AY.H)(gY.variation) && delete gY.variation, {
              meta: gY,
              initialChunks: YY.initialChunks.map((YY => {
                var rY;
                return {
                  chunkPos: YY.chunkPos,
                  rle: Nr(YY.rle),
                  sharedBlockData: null !== (rY = Hr("sharedBlockData", YY.sharedBlockData)) && void 0 !== rY ? rY : []
                }
              })),
              ticks: YY.ticks.map(nr),
              editState: {
                cameraKeyframes: null !== (DY = null === (FY = YY.editState) || void 0 === FY ? void 0 : FY.cameraKeyframes) && void 0 !== DY ? DY : [],
                playbackMark: null !== (IY = null === (RY = YY.editState) || void 0 === RY ? void 0 : RY.playbackMark) && void 0 !== IY ? IY : null
              }
            }
          }(Fr(OY)[aY(115)](sY))
        }
      }
      throw new Error(rY(OD[63]) + rY(117) + rY(118) + rY(OD[27]) + rY(120) + "ad")
    })
  },
  36352: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      c: () => FY,
      d: () => uY,
      f: () => sY,
      j: () => IY,
      m: () => aY,
      n: () => iY,
      r: () => gY,
      v: () => vY,
      y: () => OY
    });
    const FY = 9,
      AY = [9];

    function IY(YY) {
      return AY.includes(YY)
    }
    const RY = 100,
      OY = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      gY = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      aY = ["itemName", "amount", "position", "size", "attributes"],
      vY = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      uY = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "uB", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      sY = ["selectedSlotIndex", "slots"],
      iY = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36347: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY,
      e: () => yY,
      f: () => gY,
      i: () => RY,
      j: () => OY,
      k: () => aY
    });
    var FY = DY(341),
      AY = DY(25);

    function IY(YY) {
      return null === YY || void 0 === YY ? null : "string" === typeof YY ? YY : null
    }

    function RY(YY, rY) {
      return JSON.stringify(YY) === JSON.stringify(rY)
    }

    function OY(YY) {
      const rY = [];
      for (const DY of Object.keys(YY)) {
        const FY = YY[DY];
        for (const YY of Object.keys(FY)) rY.push({
          VY: DY,
          name: YY,
          ...FY[YY]
        })
      }
      return rY
    }

    function gY(YY) {
      const rY = {};
      for (const IY of YY) {
        var DY, FY, AY;
        rY[IY.VY] || (rY[IY.VY] = {}), rY[IY.VY][IY.name] = {
          icon: IY.icon,
          level: IY.level,
          displayName: null !== (DY = IY.displayName) && void 0 !== DY ? DY : null,
          endTick: null !== (FY = IY.endTick) && void 0 !== FY ? FY : null,
          showInNametag: null === (AY = IY.showInNametag) || void 0 === AY || AY
        }
      }
      return rY
    }

    function aY(YY, rY) {
      const DY = {};
      for (const AY of Object.keys(YY)) {
        const IY = {};
        for (const DY of Object.keys(YY[AY])) {
          const FY = YY[AY][DY];
          null !== FY.endTick && FY.endTick < rY || (IY[DY] = {
            ...FY,
            endTick: null === FY.endTick ? null : FY.endTick - rY
          })
        }(0, FY.uc)(IY) || (DY[AY] = IY)
      }
      return DY
    }

    function vY(YY, rY, DY) {
      if (null !== YY) return Math.max(0, 1e3 * (YY - rY) / DY)
    }
    class uY {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(YY, rY) {
        this.clear();
        const DY = Date.now();
        for (const OY of YY.iterateEntityIds()) {
          const gY = YY.getEffects(OY);
          if ((0, FY.uc)(gY)) continue;
          const aY = rY(OY);
          for (const YY of Object.keys(gY)) {
            var AY, RY;
            const rY = gY[YY];
            this.upsert(aY, YY, {
              icon: rY.icon,
              level: rY.level,
              displayName: IY(rY.displayName),
              showInNametag: null === (AY = rY.showInNametag) || void 0 === AY || AY,
              endTime: void 0 !== rY.duration && null !== rY.duration ? (null !== (RY = rY.appliedAt) && void 0 !== RY ? RY : DY) + rY.duration : null
            })
          }
        }
      }
      upsert(YY, rY, DY) {
        this.tracked[YY] || (this.tracked[YY] = {}), this.tracked[YY][rY] = DY
      }
      remove(YY, rY) {
        const DY = this.tracked[YY];
        DY && (delete DY[rY], (0, FY.uc)(DY) && delete this.tracked[YY])
      }
      handleUpdate(YY) {
        var rY;
        0 !== YY.duration ? this.upsert(YY.VY, YY.name, {
          icon: YY.icon,
          level: YY.level,
          displayName: IY(YY.displayName),
          showInNametag: null === (rY = YY.showInNametag) || void 0 === rY || rY,
          endTime: void 0 !== YY.duration && null !== YY.duration ? Date.now() + YY.duration : null
        }) : this.remove(YY.VY, YY.name)
      }
      handleRemove(YY, rY) {
        this.remove(YY, rY)
      }
      sample(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const AY = {},
          IY = 1e3 / rY;
        for (const RY of Object.keys(this.tracked)) {
          const rY = this.tracked[RY],
            OY = {};
          for (const FY of Object.keys(rY)) {
            const AY = rY[FY];
            let gY = null;
            if (null !== AY.endTime) {
              const rY = Math.max(0, AY.endTime - DY);
              if (0 === rY) {
                this.remove(RY, FY);
                continue
              }
              gY = YY + Math.ceil(rY / IY)
            }
            OY[FY] = {
              icon: AY.icon,
              level: AY.level,
              displayName: AY.displayName,
              endTick: gY,
              showInNametag: AY.showInNametag
            }
          }(0, FY.uc)(OY) || (AY[RY] = OY)
        }
        return AY
      }
    }

    function sY(YY, rY, DY, FY) {
      YY.hasEntity(rY) ? YY.updateEffect(rY, DY, FY) : function(YY, rY, DY) {
        AY.g.vo("EffectUpdate", {
          VY: YY,
          name: rY,
          ...DY
        }, !0)
      }(rY, DY, FY)
    }

    function iY(YY, rY, DY) {
      YY.hasEntity(rY) ? YY.removeEffect(rY, DY) : function(YY, rY) {
        AY.g.vo("RemoveEffect", {
          VY: YY,
          name: rY
        }, !0)
      }(rY, DY)
    }

    function yY(YY, rY, DY, FY, AY, IY, RY) {
      for (const vY of Object.keys(DY))
        for (const IY of Object.keys(DY[vY])) {
          var OY;
          null !== (OY = rY[vY]) && void 0 !== OY && OY[IY] || (iY(YY, vY, IY), FY && vY === FY && String(AY) !== String(vY) && iY(YY, AY, IY))
        }
      for (const QY of Object.keys(rY))
        for (const OY of Object.keys(rY[QY])) {
          var gY, aY;
          const oY = rY[QY][OY],
            WY = vY(oY.endTick, IY, RY);
          if (0 === WY) {
            iY(YY, QY, OY), FY && QY === FY && String(AY) !== String(QY) && iY(YY, AY, OY);
            continue
          }
          const EY = null === (gY = DY[QY]) || void 0 === gY ? void 0 : gY[OY],
            mY = EY && (yY = oY, (uY = EY).icon === yY.icon && uY.level === yY.level && uY.displayName === yY.displayName && uY.endTick === yY.endTick && uY.showInNametag === yY.showInNametag),
            VY = {
              icon: oY.icon,
              level: oY.level,
              displayName: null !== (aY = oY.displayName) && void 0 !== aY ? aY : void 0,
              duration: WY,
              showInNametag: oY.showInNametag
            };
          mY || sY(YY, QY, OY, VY), FY && QY === FY && sY(YY, AY, OY, {
            ...VY,
            showInNametag: !1
          })
        }
      var uY, yY
    }
  },
  36333: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY,
      e: () => gY,
      g: () => uY,
      h: () => RY,
      k: () => vY
    });
    var FY = DY(36326),
      AY = DY(36335);
    const IY = {
      description: "Bloxd Replay",
      accept: {
        [FY.e]: FY.d
      }
    };

    function RY() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function OY(YY) {
      return YY instanceof DOMException && "AbortError" === YY.name
    }
    async function gY() {
      try {
        const [YY] = await window.showOpenFilePicker({
          multiple: !1,
          types: [IY]
        }), rY = await YY.getFile();
        return {
          handle: YY,
          bytes: new Uint8Array(await rY.arrayBuffer())
        }
      } catch (YY) {
        if (OY(YY)) return null;
        throw YY
      }
    }
    async function aY(YY) {
      if (YY && await async function(YY) {
          const rY = {
            mode: "readwrite"
          };
          return "granted" === await YY.queryPermission(rY) || "granted" === await YY.requestPermission(rY)
        }(YY)) return YY;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, FY.j)(),
          types: [IY]
        })
      } catch (rY) {
        if (OY(rY)) return null;
        throw rY
      }
    }
    async function vY(YY, rY) {
      const DY = await YY.createWritable();
      await DY.write(new Blob([rY], {
        type: FY.e
      })), await DY.close()
    }

    function uY(YY) {
      return (0, FY.h)((0, AY.g)(YY))
    }
  },
  35881: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY
    });
    var FY = DY(19),
      AY = DY(99),
      IY = DY(40),
      RY = DY(713),
      OY = DY(3015),
      gY = DY(6230);
    const aY = "shaderPackListingCheckedAt",
      vY = 36e5;

    function uY() {
      const {
        canUseShaderPacks: YY
      } = AY.featureFlags.settings;
      var rY, uY;
      (0, OY.g)(YY) && !(0, OY.f)(YY) && (rY = IY.m.getItem(aY), uY = Date.now(), "number" !== typeof rY || uY < rY || uY - rY >= vY) && (0, RY.d)((() => {
        (async function() {
          if ("landingPage" !== FY.b.get("gameState")) return;
          const YY = await (0, gY.e)();
          if (void 0 === (null === YY || void 0 === YY ? void 0 : YY.listing)) return;
          IY.m.setItem(aY, Date.now());
          const {
            followListingUpdates: rY
          } = await Promise.all([DY.e(74), DY.e(132), DY.e(124)]).then((() => DY(40280)));
          await rY(YY, YY.listing) || IY.m.removeItem(aY)
        })().catch((YY => {
          console.error("Failed to check the shader pack listing for an update", YY)
        }))
      }))
    }
  },
  35921: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(332),
      AY = DY(19),
      IY = DY(35928),
      RY = DY(1619),
      OY = DY(1851);

    function gY(YY, rY) {
      var DY, gY, aY;
      if (!AY.b.get("isKeydownEnabled") || YY.repeat) return;
      const vY = YY.code;
      "Escape" === YY.key ? (0, RY.h)(YY) : null !== (DY = OY.u.OpenSettings) && void 0 !== DY && DY.includes(vY) ? (0, RY.v)(YY, FY.t.SETTINGS) : null !== (gY = OY.u.OpenCharacterCustomization) && void 0 !== gY && gY.includes(vY) ? (0, IY.e)() || (0, RY.v)(YY, FY.t.CUSTOMISATION, rY()) : null !== (aY = OY.u.ShowDebugOverlay) && void 0 !== aY && aY.includes(vY) && AY.b.set({
        showDebugOverlay: !AY.b.get("showDebugOverlay")
      })
    }
  },
  8287: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => gY
    });
    var FY = DY(19),
      AY = DY(1322),
      IY = DY(99);
    const RY = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function OY() {
      return (0, IY.isMobile)() && "function" === typeof navigator.vibrate
    }
    const gY = new class {
      constructor(YY) {
        this.deps = YY, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(YY, rY) {
        var DY;
        if (!this.deps.enabled()) return;
        const FY = RY[YY],
          AY = null !== rY && void 0 !== rY ? rY : FY.pattern;
        if (null === AY) return void console.warn("No vibration pattern for", YY);
        const IY = this.deps.now();
        IY - this.lastAnyAt < 40 && FY.priority < this.playingPriority || IY - (null !== (DY = this.lastAt.get(YY)) && void 0 !== DY ? DY : -1 / 0) < FY.minGapMs || IY < this.playingUntil && FY.priority < this.playingPriority || (this.lastAt.set(YY, IY), this.lastAnyAt = IY, this.playingUntil = IY + AY.reduce(((YY, rY) => YY + rY), 0), this.playingPriority = FY.priority, this.deps.vibrate(AY))
      }
    }({
      vibrate: YY => {
        navigator.vibrate([...YY])
      },
      now: () => performance.now(),
      enabled: () => OY() && FY.b.get("isTouchScreen") && FY.b.get("clientEscMenuOptions").vibration && !(0, AY.d)()
    })
  },
  35886: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => HY
    });
    var FY = DY(625),
      AY = DY(1233),
      IY = DY(183);
    const RY = "cf-";

    function OY(YY) {
      return `${RY}${YY}`
    }

    function gY(YY) {
      return YY.startsWith(OY("game-server-"))
    }

    function aY(YY) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(YY)
    }
    var vY = DY(1253),
      uY = DY(1231),
      sY = DY(25),
      iY = DY(1729),
      yY = DY(1759),
      QY = DY(2602),
      oY = DY(1314),
      WY = DY(1322),
      EY = DY(1471),
      mY = DY(1222),
      VY = DY(35894),
      SY = DY(40),
      lY = DY(144),
      TY = DY(3258);
    const eY = Date.UTC(2026, 10, 25),
      NY = 1728e5,
      BY = "gameServerRoute";
    async function cY(YY) {
      if (!YY.ok) {
        const rY = await YY.text().catch((() => ""));
        return 403 === YY.status && "ipv6_unsupported" === rY ? "ipv6Refused" : "other"
      }
      const rY = await YY.json().catch((() => null));
      return "object" === typeof rY && null !== rY && Number.isFinite(rY.version) ? "ours" : "other"
    }
    const KY = new class {
      constructor(YY) {
        this.deps = YY
      }
      hostFor(YY) {
        return this.deps.enabled && aY(YY) && "cloudflare" === this.heldRoute() ? OY(YY) : YY
      }
      async afterJoinFailed(YY, rY) {
        var DY;
        if (!this.deps.enabled || void 0 === rY) return !1;
        const FY = new URL(YY).hostname,
          AY = this.stored();
        if (gY(FY)) {
          var IY;
          if (this.deps.gy("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === AY || void 0 === AY ? void 0 : AY.route) || AY.aliasFailedOnce || "ours" !== (await this.probeHost(FY)).answer) this.store({
            arm: null !== (IY = null === AY || void 0 === AY ? void 0 : AY.arm) && void 0 !== IY ? IY : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...AY,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!aY(FY) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: RY,
          cfMs: OY
        } = await this.check(FY);
        if ("blocked" !== RY) return this.deps.gy("game_server_route", RY, OY), !1;
        const vY = this.deps.now() >= eY ? "cloudflare" : null !== (DY = null === AY || void 0 === AY ? void 0 : AY.arm) && void 0 !== DY ? DY : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === vY ? (this.store({
          arm: vY,
          route: "direct",
          until: Math.min(this.deps.now() + NY, eY)
        }), this.deps.gy("game_server_route", "blocked_holdout", OY), !1) : (this.store({
          arm: vY,
          route: "cloudflare",
          until: this.deps.now() + NY
        }), this.deps.gy("game_server_route", "blocked", OY), !0)
      }
      afterJoined(YY) {
        if (!this.deps.enabled) return;
        const rY = new URL(YY).hostname,
          DY = gY(rY);
        if (DY) this.deps.gy("game_server_route", "cf_join", 0);
        else if (!aY(rY) || this.deps.random() >= .01) return;
        const FY = DY ? rY.slice(RY.length) : rY;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(FY, "direct", "direct_failed"), await this.reportRtt(OY(FY), "cf", "cf_failed")
        }))
      }
      async check(YY) {
        const rY = this.probeHost(OY(YY));
        if ("none" !== (await this.probeHost(YY)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: DY,
          ms: FY
        } = await rY;
        return "ours" !== DY && "ipv6Refused" !== DY ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(YY)).answer ? {
          outcome: "direct_reachable",
          cfMs: FY
        } : {
          outcome: "ipv6Refused" === DY ? "blocked_ipv6" : "blocked",
          cfMs: FY
        }
      }
      async reportRtt(YY, rY, DY) {
        const FY = "ours" === (await this.probeHost(YY)).answer ? await this.probeHost(YY) : null;
        "ours" === (null === FY || void 0 === FY ? void 0 : FY.answer) ? this.deps.gy("game_server_rtt", rY, FY.ms): this.deps.gy("game_server_rtt", DY, 0)
      }
      probeHost(YY) {
        return this.deps.probe(`https://${YY}/version`, 8e3)
      }
      stored() {
        return function(YY) {
          if ("object" !== typeof YY || null === YY) return null;
          const {
            arm: rY,
            route: DY,
            until: FY,
            aliasFailedOnce: AY
          } = YY;
          return "cloudflare" !== rY && "holdout" !== rY || "cloudflare" !== DY && "direct" !== DY || "number" !== typeof FY ? null : !0 === AY ? {
            arm: rY,
            route: DY,
            until: FY,
            aliasFailedOnce: AY
          } : {
            arm: rY,
            route: DY,
            until: FY
          }
        }(this.deps.storage.getItem(BY))
      }
      heldRoute() {
        const YY = this.stored();
        return null !== YY && YY.until > this.deps.now() ? YY.route : null
      }
      store(YY) {
        this.deps.storage.setItem(BY, YY)
      }
    }({
      storage: SY.m,
      probe: async function(YY, rY) {
        const DY = performance.now(),
          FY = await (0, TY.n)(YY, {
            cache: "no-store"
          }, rY, (async YY => {
            const rY = Math.round(performance.now() - DY);
            return {
              answer: await cY(YY),
              ms: rY
            }
          }));
        return null !== FY && void 0 !== FY ? FY : {
          answer: "none",
          ms: 0
        }
      },
      gy: iY.m,
      enabled: !(0, lY.b)(),
      now: Date.now,
      random: Math.random,
      delay: YY => new Promise((rY => {
        setTimeout(rY, YY)
      }))
    });

    function HY(YY) {
      return async (rY, DY, RY, OY, aY) => {
        let uY;
        if ((0, FY.H)(RY)) {
          if (aY.aborted) return zY();
          const YY = await ZY(rY, DY, OY);
          if (aY.aborted || QY.f.matchmakingEnded(YY.isError() ? null : performance.now()), YY.isError()) {
            const rY = YY.asError();
            return console.log("Join room did not succeed, reason:", rY.message), rY.forward()
          }
          uY = YY.getValue()
        } else {
          QY.f.skipPlayWait();
          const YY = CY(RY.replace("https://", "").replace("http://", ""));
          if (YY.isError()) return YY.asError().forward();
          uY = {
            endpoint: YY.getValue(),
            gameNameWithVariation: DY,
            lobbyName: rY instanceof AY.g ? rY.getLobbyName() : rY
          }
        }
        if (aY.aborted) return zY();
        console.log(`Connecting to ${uY.gameNameWithVariation} in lobby ${uY.lobbyName} on game server ${uY.endpoint}`), sY.g.vo("matchmakeAndPlayStepCompleted", {
          step: IY.l.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, iY.f)(), yY.e.markGameLoadStart(), (0, WY.n)({
          websocketUrl: uY.endpoint,
          gameNameWithVariation: uY.gameNameWithVariation,
          lobbyName: uY.lobbyName
        }), sY.g.vo("loadingScreenState", "loadingPage:loadingGame");
        const EY = async () => {
          const YY = await async function(YY, rY, DY, FY) {
            const AY = await ZY(YY, rY, DY);
            if (!AY.isError() && !FY.aborted) {
              const {
                endpoint: YY,
                gameNameWithVariation: rY,
                lobbyName: DY
              } = AY.getValue();
              (0, WY.n)({
                websocketUrl: YY,
                gameNameWithVariation: rY,
                lobbyName: DY
              })
            }
            return AY
          }(rY, DY, OY, aY);
          return YY.isError() || (uY = YY.getValue()), YY
        }, mY = !(0, FY.H)(RY), VY = () => YY({
          place: uY,
          userContext: OY,
          direct: mY,
          rematch: EY
        }, aY);
        let SY = await VY();
        const lY = SY.isError() && !0 === SY.asError().debugResult.rematch;
        if (SY.isError() && !mY && !aY.aborted && (lY || await KY.afterJoinFailed(uY.endpoint, SY.asError().debugResult.gameServerUnreachable))) {
          if (aY.aborted) return zY();
          console.log("Matchmaking again");
          const YY = await EY();
          if (YY.isError()) return YY.asError().forward();
          if (aY.aborted) return zY();
          SY = await VY(), !SY.isError() || lY && !gY(new URL(uY.endpoint).hostname) || await KY.afterJoinFailed(uY.endpoint, SY.asError().debugResult.gameServerUnreachable)
        }
        return SY.isError() ? SY.asError().forward() : (KY.afterJoined(uY.endpoint), (0, oY.M)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), vY.e.value({
          gameNameWithVariation: uY.gameNameWithVariation,
          lobbyName: uY.lobbyName,
          addLobbyToRecentlyPlayed: !(rY instanceof AY.g)
        }))
      }
    }

    function zY() {
      return vY.e.errorWithCode("Left the game while it loaded", IY.l.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Hr: !0
      })
    }
    async function ZY(YY, rY, DY) {
      return (0, FY.H)(YY) || YY instanceof AY.g || !(YY.length > uY.Q) ? await EY.e.matchmakePlayer(DY, YY, rY, (0, VY.b)()).then((YY => {
        if (!1 === YY.succeeded) return vY.e.errorWithCode(YY.failReason, IY.l.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: rY,
          lobbyName: DY,
          gameNameWithVariation: FY
        } = YY, AY = CY(KY.hostFor(rY));
        return AY.isError() ? AY.asError().forward() : vY.e.value({
          endpoint: AY.getValue(),
          gameNameWithVariation: FY,
          lobbyName: DY
        })
      })).catch((YY => (console.error("Bad response from the matchmaking server:", YY), vY.e.errorWithCode(YY.toString(), IY.l.REQUEST_TO_MATCHMAKING, {
        error: YY,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", YY), vY.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", IY.l.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function CY(YY) {
      const rY = mY.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(YY);
      return rY.isError() ? vY.e.errorWithCode(rY.asError().message, IY.l.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : vY.e.value(rY.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, WY.j)("/")
    }
  },
  8653: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => iY,
      i: () => sY
    });
    var FY = DY(19),
      AY = DY(1665),
      IY = DY(40),
      RY = DY(1346),
      OY = DY(3272),
      gY = DY(1450),
      aY = DY(1384);
    const vY = 2592e5,
      uY = "notificationOptInLastPromptedAt";
    async function sY() {
      var YY;
      const rY = await iY();
      if (null === rY) return;
      const DY = null !== (YY = IY.m.getItem(uY)) && void 0 !== YY ? YY : 0;
      if (Date.now() - DY < vY) return;
      if ((0, aY.f)()) return;
      const FY = await RY.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: AY.e.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== FY && (IY.m.setItem(uY, Date.now()), (0, gY.reportAnalyticsClick)({
        id: !0 === FY ? "push.allow" : "push.deny",
        value: AY.e.supports("notifications") ? "app" : "browser"
      }), !0 === FY && rY().catch((YY => {
        console.error("Failed to ask for push notifications:", YY)
      })))
    }
    async function iY() {
      return await AY.e.ready, AY.e.supports("notifications") ? FY.b.get("mobilePushNotificationsCanAsk") ? async () => {
        AY.e.request("notifications.requestPermission", {}).then((YY => {
          let {
            canAsk: rY
          } = YY;
          FY.b.set({
            mobilePushNotificationsCanAsk: rY
          })
        }), (YY => {
          console.error("The app couldn't ask for push notifications:", YY)
        }))
      }: null: await OY.c.canAsk() ? () => OY.c.requestPermission() : null
    }
  },
  35903: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sY,
      c: () => vY,
      d: () => iY,
      f: () => uY
    });
    var FY = DY(341),
      AY = DY(662),
      IY = DY(674),
      RY = DY(40);
    const OY = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      gY = "playSessionGameNameWithVariation",
      aY = "wasMatchmakePlayer";

    function vY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q;
      (0, IY.i)(YY, OY)
    }

    function uY() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).setItem(aY, !0)
    }

    function sY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q;
      return (0, IY.b)(YY, OY)
    }

    function iY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RY.q;
      const DY = (0, IY.b)(rY, OY),
        vY = function(YY) {
          const rY = YY.getItem(gY);
          return "string" !== typeof rY ? null : rY
        }(rY),
        uY = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).getItem(aY)
        }(rY);
      let sY;
      return sY = null !== DY && null !== vY && (0, IY.e)(rY, OY) && function(YY, rY, DY) {
          const AY = (0, FY.Pb)(YY),
            IY = (0, FY.Pb)(rY),
            RY = (0, FY.Kb)(YY),
            OY = (0, FY.Kb)(rY);
          return !(AY !== IY || !DY) || AY === IY && RY === OY
        }(vY, YY, uY) ? DY : (0, AY.b)(), (0, IY.j)(rY, OY, sY), rY.setItem(gY, YY),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).removeItem(aY)
        }(rY), sY
    }
  },
  35894: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => EY,
      d: () => mY
    });
    var FY = DY(1057),
      AY = DY(631),
      IY = DY(341),
      RY = DY(1064),
      OY = DY(649),
      gY = DY(680),
      aY = DY(4070),
      vY = DY(99),
      uY = DY(144),
      sY = DY(1699),
      iY = DY(117),
      yY = DY(35903),
      QY = DY(40),
      oY = DY(668),
      WY = DY(35907);

    function EY() {
      var YY, rY;
      return [...null !== (YY = navigator.languages) && void 0 !== YY ? YY : [null !== (rY = navigator.language) && void 0 !== rY ? rY : "none"], "EN-gb"]
    }

    function mY(YY, rY, DY, mY, VY) {
      const SY = (0, FY.l)(rY) ? (0, FY.r)(rY) : null,
        lY = {
          cookies: (0, sY.getAllCookiesForGameNameWithVariation)(rY),
          isMobile: (0, vY.isMobile)(),
          isUsingCustomGameTexturePack: null !== SY && VY(SY),
          generalCookies: {
            joinDiscord: !!QY.m.getItem("DiscordPressed"),
            newGo: aY.d,
            ...YY.getMetricsCookies(),
            trafficCode: mY,
            compliance: vY.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vY.getBrowserName)(),
            version: (0, vY.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vY.getPlatformType)(),
            deviceType: (0, iY.d)()
          },
          isLoggedIn: YY.isLoggedIn(),
          lobbyName: DY,
          languages: EY(),
          version: AY.d,
          siteUsed: uY.s,
          subsiteUsed: uY.C,
          playSessionId: (0, yY.d)(rY),
          visitSessionId: (0, oY.d)(),
          clientReason: OY.i.reason,
          budgetBasis: (0, WY.e)(),
          ...null !== gY.p && {
            diagClaim: gY.p.claimId
          }
        };
      return null !== SY && (0, IY.Cc)(SY) ? (lY.lobbyName = (0, FY.i)(SY, (0, FY.p)(rY), DY), {
        roomName: `classic_${RY.f}`,
        joinOptions: lY
      }) : {
        roomName: rY,
        joinOptions: lY
      }
    }
  },
  8173: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(8181),
      AY = DY(625),
      IY = DY(144);

    function RY(YY) {
      var rY, DY;
      if ((0, AY.H)(YY)) return !0;
      const RY = null !== (rY = null === (DY = IY.l[IY.s]) || void 0 === DY ? void 0 : DY.adConfig.showRewardedAds) && void 0 !== rY && rY;
      for (const AY in YY) {
        const rY = YY[AY];
        if (null !== rY && void 0 !== rY && rY.items)
          for (const YY in rY.items)
            if ((0, FY.m)(rY.items[YY], RY)) return !1
      }
      return !0
    }
  },
  36002: (YY, rY, DY) => {
    function FY(YY, rY) {
      for (let DY = 0; DY < YY.length; DY++)
        if (YY[DY].identifier === rY) return YY[DY];
      return null
    }

    function AY(YY, rY) {
      return null !== FY(YY, rY)
    }
    DY.d(rY, {
      c: () => FY,
      g: () => AY
    })
  },
  36268: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => NY,
      E: () => jY,
      G: () => hY,
      H: () => dY,
      K: () => fY,
      O: () => JY,
      b: () => gY,
      d: () => KY,
      g: () => OY,
      k: () => CY,
      o: () => BY,
      r: () => lY,
      v: () => ZY,
      x: () => zY
    });
    var FY = DY(40);
    const AY = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      IY = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      RY = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      OY = IY.filter((YY => "docsButton" !== YY)),
      gY = RY.filter((YY => "aiHelperButton" !== YY)),
      aY = "codeEditorTutorials",
      vY = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      uY = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let sY = null,
      iY = null;
    const yY = new Set,
      QY = new Set;
    let oY = null;
    const WY = new Set,
      EY = new Set;

    function mY() {
      EY.forEach((YY => {
        YY()
      }))
    }

    function VY() {
      if (!sY) {
        const YY = FY.m.getItem(aY);
        sY = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof YY && null !== YY ? YY : {}
        }
      }
      return sY
    }

    function SY(YY) {
      const rY = VY();
      rY[YY] || (sY = {
        ...rY,
        [YY]: !0
      }, FY.m.setItem(aY, sY))
    }

    function lY(YY) {
      return "docsOverview" === YY ? IY : "aiHelperOverview" === YY ? RY : iY ? AY[iY] : []
    }

    function TY(YY) {
      return ("worldCodeButton" !== YY || !VY().worldCodeIntroShown) && !WY.has(YY)
    }

    function eY(YY) {
      var rY;
      return (null === (rY = oY) || void 0 === rY ? void 0 : rY.name) === YY ? oY.stepsDone : yY
    }

    function NY(YY, rY) {
      if (! function(YY) {
          return oY ? oY.name === YY : "welcome" === YY
        }(YY) || !TY(rY) || eY(YY).has(rY)) return !1;
      if (oY) return !0;
      const DY = vY[rY];
      return DY ? !VY()[DY] || QY.has(rY) : !VY()[uY[YY]]
    }

    function BY(YY) {
      var rY;
      return null !== (rY = lY(YY).find((rY => NY(YY, rY)))) && void 0 !== rY ? rY : null
    }

    function cY(YY) {
      var rY;
      SY(uY[YY]), (null === (rY = oY) || void 0 === rY ? void 0 : rY.name) === YY && (oY = null)
    }

    function KY(YY) {
      const rY = (oY ? [oY.name] : ["welcome", "docsOverview"]).find((rY => BY(rY) === YY));
      if (!rY) return;
      eY(rY).add(YY);
      const DY = vY[YY];
      DY && (SY(DY), oY || QY.add(YY)), null === BY(rY) && cY(rY), mY()
    }

    function HY(YY, rY) {
      const DY = lY(YY),
        FY = eY(YY);
      for (let AY = DY.indexOf(rY) - 1; AY >= 0; AY--)
        if (FY.has(DY[AY]) && TY(DY[AY])) return DY[AY];
      return null
    }

    function zY(YY, rY) {
      return null !== HY(YY, rY)
    }

    function ZY(YY, rY) {
      const DY = HY(YY, rY);
      DY && (eY(YY).delete(DY), mY())
    }

    function CY(YY) {
      cY(YY), "welcome" === YY && lY("welcome").forEach((YY => {
        const rY = vY[YY];
        rY && SY(rY)
      })), mY()
    }

    function fY(YY) {
      oY = {
        name: YY,
        stepsDone: new Set
      }, mY()
    }

    function jY() {
      (oY || 0 !== yY.size || 0 !== QY.size) && (oY = null, yY.clear(), QY.clear(), mY())
    }

    function hY(YY, rY) {
      const DY = rY ? YY : iY === YY ? null : iY;
      DY !== iY && (iY = DY, mY())
    }

    function dY(YY, rY) {
      WY.has(YY) === rY && (rY ? WY.delete(YY) : WY.add(YY), mY())
    }

    function JY(YY) {
      return EY.add(YY), () => {
        EY.delete(YY)
      }
    }
  },
  35916: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY,
      g: () => IY
    });
    const FY = 1024,
      AY = 1024 * FY;

    function IY(YY) {
      return (YY / AY).toFixed(1)
    }
  },
  35913: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      f: () => OY,
      h: () => RY,
      l: () => gY,
      n: () => aY
    });
    var FY = DY(213);
    const AY = 32 * DY(35916).f,
      IY = 6144,
      RY = 4608,
      OY = 512;

    function gY(YY) {
      return Math.floor(AY * YY / IY)
    }

    function aY(YY) {
      const rY = YY - Math.floor(YY / 6);
      let DY = FY.d.maxChunkHorizAddDistance,
        AY = FY.d.maxChunkVertAddDistance;
      if (vY(DY + 1, AY + 1) <= rY) return null;
      for (; vY(DY + 1, AY + 1) > rY && (DY > 0 || AY > 0);) DY > AY ? DY-- : AY--;
      return {
        horizontal: DY,
        vertical: AY
      }
    }

    function vY(YY, rY) {
      const DY = Math.max(YY, rY);
      let FY = 0;
      for (let AY = -DY; AY <= DY; AY++)
        for (let IY = -DY; IY <= DY; IY++)
          for (let RY = -DY; RY <= DY; RY++) uY(YY, rY, AY, IY, RY) && FY++;
      return FY
    }

    function uY(YY, rY, DY, FY, AY) {
      const IY = DY * DY + AY * AY;
      return YY === rY ? IY + FY * FY <= YY * YY : YY > rY ? Math.abs(FY) <= rY && IY + FY * FY <= YY * YY : IY <= YY * YY && IY + FY * FY <= rY * rY
    }
  },
  35907: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => lY,
      e: () => SY,
      h: () => VY
    });
    var FY = DY(213),
      AY = DY(99),
      IY = DY(2575),
      RY = DY(3942),
      OY = DY(656),
      gY = DY(35913);
    const aY = 1048576,
      vY = 1024 * aY,
      uY = 400 * aY,
      sY = 147456,
      iY = .5,
      yY = 1.5 * vY,
      QY = 768 * aY;

    function oY(YY) {
      return uY + YY * sY
    }

    function WY(YY, rY, DY) {
      var AY, RY;
      let {
        footprintBytes: OY,
        basis: aY,
        namesLimit: WY
      } = function(YY) {
        const {
          os: rY,
          deviceMemory: DY
        } = YY;
        if ("ios" === rY) switch ((0, IY.e)(YY)) {
          case "ipad_m":
            return {
              footprintBytes: oY(gY.b), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: QY, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: yY, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: QY, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof DY && Number.isFinite(DY) && DY > 0 ? {
          footprintBytes: DY * vY * iY,
          basis: `memory-${DY}`,
          namesLimit: !0
        } : "android" === rY ? {
          footprintBytes: QY,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: oY(gY.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(YY);
      if (DY) {
        const YY = Math.min(OY, oY(gY.b));
        OY = uY + Math.max(0, YY - uY) / 2, aY += "+killed", WY = !0
      }
      null !== rY && oY(rY) < OY && (OY = oY(rY), aY += "+learned", WY = !0);
      const EY = function(YY) {
          const rY = Math.floor((YY - uY) / sY);
          return Math.min(gY.b, Math.max(gY.f, rY))
        }(OY),
        mY = (0, gY.n)(EY);
      return {
        footprintBytes: OY,
        shedFootprintBytes: WY ? Math.max(OY, oY(EY)) : null,
        chunkCap: EY,
        maxHorizDistance: null !== (AY = null === mY || void 0 === mY ? void 0 : mY.horizontal) && void 0 !== AY ? AY : FY.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (RY = null === mY || void 0 === mY ? void 0 : mY.vertical) && void 0 !== RY ? RY : FY.d.maxChunkVertAddDistance,
        basis: aY
      }
    }
    let EY = null;

    function mY() {
      return WY({
        os: (0, AY.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, IY.h)()
      }, (0, RY.f)(), (0, OY.A)("wasm").length > 0)
    }

    function VY() {
      return EY ??= mY(), EY
    }

    function SY() {
      var YY;
      return (null !== (YY = EY) && void 0 !== YY ? YY : mY()).basis
    }

    function lY(YY, rY) {
      return YY.setChunkCap(rY.chunkCap)
    }
  },
  36016: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY,
      f: () => sY,
      j: () => WY,
      m: () => aY
    });
    var FY = DY(19),
      AY = DY(2251),
      IY = DY(2256),
      RY = DY(2262),
      OY = DY(3955),
      gY = DY(25);

    function aY(YY, rY) {
      return (!(0, RY.d)() || 0 === YY && 0 === rY) && (0, IY.B)(AY.j.Joystick, 0, YY, rY, 0)
    }
    const vY = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function uY(YY) {
      return YY.classList.contains("TouchKeyHit") && iY() ? null : YY.firstElementChild
    }

    function sY(YY) {
      return YY.classList.contains("TouchKeyHit") && !YY.classList.contains("CanvasZone") ? {
        whole: !iY(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: yY(uY(YY))
      }
    }

    function iY() {
      return document.documentElement.classList.contains(OY.k)
    }

    function yY(YY) {
      return !(YY instanceof HTMLElement) || YY.offsetWidth <= 0 || YY.offsetHeight <= 0 ? null : {
        width: YY.offsetWidth,
        height: YY.offsetHeight
      }
    }

    function QY(YY, rY) {
      const DY = YY => Math.min(65535, Math.round(4 * YY));
      return (DY(YY) | DY(rY) << 16) >>> 0
    }

    function oY(YY) {
      return {
        x: YY.left + YY.width / 2,
        y: YY.top + YY.height / 2,
        radius: Math.min(YY.width, YY.height) / 2
      }
    }
    const WY = new class {
      constructor(YY) {
        this.write = YY, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        rY ? this.elements.set(YY, {
          element: rY,
          hidden: DY
        }) : this.elements.delete(YY), this.measureOne(YY)
      }
      measure() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = YY.left, this.canvasTop = YY.top;
        for (const rY of this.elements.keys()) this.measureOne(rY)
      }
      hitZone(YY, rY) {
        let DY = null,
          FY = 1;
        for (const AY of this.elements.keys()) {
          const IY = this.shown(AY);
          if (!IY) continue;
          const {
            rect: RY,
            element: OY
          } = IY, gY = oY(RY), aY = Math.max(0, RY.width / 2 - gY.radius), vY = Math.max(0, RY.height / 2 - gY.radius), sY = Math.max(0, Math.abs(YY - gY.x) - aY), iY = Math.max(0, Math.abs(rY - gY.y) - vY), QY = OY.firstElementChild;
          let WY = Math.hypot(sY, iY) / gY.radius;
          const EY = yY(uY(OY));
          EY && (WY = Math.min(WY, Math.max(2 * Math.abs(YY - gY.x) / EY.width, 2 * Math.abs(rY - gY.y) / EY.height))), WY < FY && (DY = {
            code: AY,
            element: OY,
            key: QY,
            ...gY
          }, FY = WY)
        }
        return DY
      }
      measureOne(YY) {
        const rY = this.shown(YY);
        if (!rY) return void this.write(AY.j.TouchZone, YY, 0, 0, 0);
        const {
          rect: DY,
          element: FY
        } = rY, IY = oY(DY);
        this.write(AY.j.TouchZone, YY, IY.x - this.canvasLeft, IY.y - this.canvasTop, QY(DY.width, DY.height));
        const RY = yY(uY(FY));
        this.write(AY.j.TouchZone, 256 | YY, 0, 0, RY ? QY(RY.width, RY.height) : 0)
      }
      shown(YY) {
        const rY = this.elements.get(YY),
          DY = FY.b.get("worldPanelHud");
        if (!rY || rY.hidden || "none" === DY) return null;
        const AY = rY.element.getBoundingClientRect();
        return AY.width <= 0 || AY.height <= 0 ? null : {
          rect: AY,
          element: rY.element
        }
      }
    }(IY.B);
    (0, gY.j)(OY.e, (() => {
      WY.measure()
    }))
  },
  36277: (YY, rY, DY) => {
    function FY(YY, rY) {
      return null === YY || null === rY ? YY === rY : YY[0] === rY[0] && YY[1] === rY[1] && YY[2] === rY[2]
    }

    function AY(YY) {
      return [YY[0] + .5, YY[1] + .5, YY[2] + .5]
    }
    DY.d(rY, {
      c: () => AY,
      g: () => FY
    })
  },
  8197: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      i: () => FY
    });
    const FY = 100;

    function AY(YY) {
      let {
        translationKeys: rY = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return YY.map((YY => {
        var DY;
        return null !== (DY = function(YY, rY) {
          if ("string" === typeof YY) return YY;
          const DY = "str" in YY ? YY.str : YY;
          if ("string" === typeof DY) return DY;
          if ("entityName" in DY) return DY.entityName;
          if (rY && "translationKey" in DY) return `{${DY.translationKey}${void 0===DY.params?"":` ${JSON.stringify(DY.params)}`}}`;
          return null
        }(YY, rY)) && void 0 !== DY ? DY : " "
      })).join("")
    }
  },
  8236: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      f: () => OY,
      i: () => gY
    });
    var FY = DY(2091),
      AY = DY(1244),
      IY = DY(2099);
    const RY = ",";

    function OY(YY) {
      if (!YY) return [];
      const rY = new Set,
        DY = [];
      for (const FY of YY.split(RY)) {
        const YY = FY.trim();
        if ((0, IY.j)(YY) && !rY.has(YY) && (rY.add(YY), DY.push(YY), DY.length >= AY.m)) break
      }
      return DY
    }

    function gY(YY) {
      const rY = new Set,
        DY = [];
      for (const FY of YY)
        if ((0, IY.j)(FY) && !rY.has(FY) && (rY.add(FY), DY.push(FY), DY.length >= AY.m)) break;
      return DY.join(RY)
    }

    function aY() {
      return gY(IY.e)
    }

    function vY(YY) {
      var rY;
      return "emote" === YY ? aY() : null !== (rY = uY[YY][0]) && void 0 !== rY ? rY : sY[YY]
    }
    const uY = AY.u.reduce(((YY, rY) => {
        const DY = [];
        for (const IY in FY.g[rY]) {
          var AY;
          "default" === (null === (AY = (0, FY.n)(rY, IY)) || void 0 === AY ? void 0 : AY.cosmeticPack) && DY.push(IY)
        }
        return YY[rY] = DY, YY
      }), {}),
      sY = AY.u.reduce(((YY, rY) => (YY[rY] = Object.keys(FY.g[rY])[0], YY)), {})
  },
  36237: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY,
      f: () => OY
    });
    const FY = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      AY = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      IY = {
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
      RY = {
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
      OY = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: FY.files,
          dependencies: FY.dependencies,
          bundledSource: FY.bundledSource,
          types: FY.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: AY.files,
          dependencies: AY.dependencies,
          bundledSource: AY.bundledSource,
          types: AY.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: IY.files,
          dependencies: IY.dependencies,
          bundledSource: IY.bundledSource,
          types: IY.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: RY.files,
          dependencies: RY.dependencies,
          bundledSource: RY.bundledSource,
          types: RY.types
        }
      };

    function gY(YY) {
      const rY = [],
        DY = new Set,
        FY = YY => {
          if (DY.has(YY)) return;
          const AY = OY[YY];
          if (AY) {
            DY.add(YY);
            for (const YY of AY.dependencies) FY(YY);
            rY.push(YY)
          }
        };
      for (const AY of YY) FY(AY);
      return rY
    }
  },
  36241: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      d: () => OY,
      g: () => RY,
      k: () => IY,
      l: () => aY,
      m: () => vY,
      p: () => yY,
      q: () => iY,
      t: () => sY
    });
    var FY = DY(1244);
    const AY = ["quickjs", "ses"];

    function IY(YY) {
      return AY.includes(YY)
    }

    function RY(YY) {
      return YY === FY.e || YY === FY.i
    }

    function OY(YY, rY) {
      return YY === FY.e && rY === FY.i || YY === FY.i && rY === FY.e
    }

    function gY(YY) {
      const rY = FY.i in YY,
        DY = FY.e in YY;
      return rY && DY ? null : rY ? FY.i : DY ? FY.e : null
    }

    function aY(YY, rY, DY) {
      const FY = `${rY}/`;
      return YY.filter((YY => YY.startsWith(FY))).map((YY => [YY, `${DY}/${YY.slice(FY.length)}`]))
    }

    function vY(YY, rY) {
      let DY = 0;
      for (const [FY, AY] of Object.entries(YY)) FY !== rY && (DY += AY.length);
      return DY
    }
    const uY = "@plugins/";

    function sY(YY) {
      return `${uY}${YY}`
    }

    function iY(YY, rY) {
      return `/node_modules/@plugins/${YY}/${rY}`
    }

    function yY(YY) {
      if (!YY.startsWith(uY)) return null;
      const rY = YY.slice(uY.length);
      return function(YY) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(YY)
      }(rY) ? rY : null
    }
  },
  36252: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      d: () => AY,
      h: () => RY,
      l: () => gY,
      m: () => IY
    });
    var FY = DY(36244);
    const AY = 5,
      IY = "[SCHEMATIC]",
      RY = 1024e4;

    function OY(YY) {
      return YY.endsWith(".bloxdschem") && (0, FY.p)(YY.slice(0, -11) + ".ts") && YY.length <= 64
    }

    function gY(YY) {
      return Object.fromEntries(Object.keys(YY).map((YY => [YY, IY])))
    }
  },
  8181: (YY, rY, DY) => {
    function FY(YY, rY) {
      return !YY.hidden && (rY || !YY.isRewardedAd)
    }

    function AY(YY) {
      return "object" === typeof YY ? YY.option : YY
    }

    function IY(YY, rY) {
      var DY;
      if ("dropdown" === (null === (DY = YY.userInput) || void 0 === DY ? void 0 : DY.type) && "object" === typeof YY.userInput.dropdownOptions[0]) {
        for (const DY of YY.userInput.dropdownOptions)
          if (AY(DY) === rY) return "object" === typeof DY ? DY.cost : YY.cost;
        console.error("Didn't find matching option for dropdown item. Item:", YY, "input:", rY)
      }
      return YY.cost
    }

    function RY(YY, rY, DY) {
      var FY;
      const AY = null !== (FY = DY.excludedPlayers) && void 0 !== FY ? FY : [rY];
      return YY.filter((YY => !AY.includes(YY)))
    }
    DY.d(rY, {
      c: () => IY,
      e: () => AY,
      i: () => RY,
      m: () => FY
    })
  },
  36244: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => IY,
      f: () => sY,
      j: () => OY,
      k: () => gY,
      o: () => aY,
      p: () => uY,
      t: () => vY,
      u: () => RY
    });
    var FY = DY(1244);
    let AY = function(YY) {
        return YY[YY.Join = 0] = "Join", YY[YY.Leave = 1] = "Leave", YY[YY.Push = 2] = "Push", YY[YY.Cursor = 3] = "Cursor", YY[YY.Submit = 4] = "Submit", YY[YY.ReloadAsVariation = 5] = "ReloadAsVariation", YY[YY.CreateFile = 6] = "CreateFile", YY[YY.RenameFile = 7] = "RenameFile", YY[YY.DeleteFile = 8] = "DeleteFile", YY[YY.SetEngine = 9] = "SetEngine", YY[YY.RenameFolder = 10] = "RenameFolder", YY
      }({}),
      IY = function(YY) {
        return YY[YY.Joined = 0] = "Joined", YY[YY.Updates = 1] = "Updates", YY[YY.Presence = 2] = "Presence", YY[YY.RemoteCursor = 3] = "RemoteCursor", YY[YY.ForceClose = 4] = "ForceClose", YY[YY.LobbyFilesChanged = 5] = "LobbyFilesChanged", YY[YY.EngineSettings = 6] = "EngineSettings", YY
      }({});

    function RY(YY) {
      return "lobby" === YY.kind ? `lobby:${YY.path}` : `codeBlock:${YY.pos[0]},${YY.pos[1]},${YY.pos[2]}`
    }

    function OY(YY) {
      if ("lobby" === YY) return {
        kind: "lobby",
        path: FY.e
      };
      if (YY.startsWith("lobby:")) {
        const rY = YY.slice(6);
        return uY(rY) ? {
          kind: "lobby",
          path: rY
        } : null
      }
      const rY = YY.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return rY ? {
        kind: "codeBlock",
        pos: [parseInt(rY[1]), parseInt(rY[2]), parseInt(rY[3])]
      } : null
    }

    function gY(YY) {
      return YY.endsWith(".d.ts")
    }

    function aY(YY) {
      return YY.endsWith(".ts") && !gY(YY)
    }
    const vY = 64;

    function uY(YY) {
      if (!YY || YY !== YY.trim()) return !1;
      if (YY.length > vY) return !1;
      if (YY.startsWith("/") || YY.includes("\\") || YY.includes("\0")) return !1;
      if (!gY(YY) && !aY(YY) && ! function(YY) {
          return YY.endsWith(".js") && !YY.endsWith(".min.js") && !YY.endsWith(".bundle.js")
        }(YY)) return !1;
      const rY = YY.split("/");
      for (const DY of rY)
        if ("" === DY || "." === DY || ".." === DY) return !1;
      return !0
    }
    const sY = 14e3
  },
  4422: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => FY,
      i: () => IY,
      l: () => gY,
      m: () => RY
    });
    const FY = ["sine", "triangle", "square", "sawtooth"],
      AY = 55,
      IY = {
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

    function RY(YY) {
      return "string" !== typeof YY ? YY : Object.hasOwn(IY, YY) ? IY[YY] : null
    }

    function OY(YY, rY, DY) {
      return Math.min(DY, Math.max(rY, YY))
    }

    function gY(YY) {
      const rY = OY(YY.durationMs, 10, 500),
        DY = OY(YY.attackMs, 0, rY),
        {
          intonation: AY
        } = YY;
      return {
        waveform: FY.includes(YY.waveform) ? YY.waveform : "sine",
        pitchHz: OY(YY.pitchHz, 20, 4e3),
        glideSemitones: OY(YY.glideSemitones, -24, 24),
        durationMs: rY,
        attackMs: DY,
        releaseMs: OY(YY.releaseMs, 0, rY - DY),
        lowpassHz: null === YY.lowpassHz ? null : OY(YY.lowpassHz, 20, 2e4),
        volume: OY(YY.volume, 0, 2),
        intonation: {
          variationSemitones: OY(AY.variationSemitones, 0, 6),
          declineSemitones: OY(AY.declineSemitones, 0, 12),
          questionRiseSemitones: OY(AY.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: OY(AY.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: OY(YY.syllableMs, 25, 200)
      }
    }
  },
  8233: () => {},
  9565: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  17843: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19785: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19794: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19801: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19810: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19818: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);