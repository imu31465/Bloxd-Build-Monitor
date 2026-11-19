export const id = 82;
export const ids = [82];
export const modules = {
  35941: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => GD,
      g: () => LD
    });
    var ID = cD(53),
      pD = cD(1905),
      iD = cD(35944),
      fD = cD.n(iD),
      bD = cD(4337),
      QD = cD(1872),
      wD = cD(1440),
      SD = cD(90),
      BD = cD(107),
      yD = cD(326),
      MD = cD(1049),
      tD = cD.n(MD),
      ZD = cD(16),
      oD = cD(1064),
      vD = cD(1627),
      ND = cD(1701),
      gD = cD(1660),
      XD = cD(1972),
      mD = cD(1403),
      nD = cD(2039),
      OD = cD(1388),
      PD = cD(8472),
      HD = cD(35953),
      UD = cD(35970),
      xD = cD(1462),
      qD = cD(2361),
      JD = cD(1192),
      KD = cD(35981);
    var aD = cD(8983);
    var VD = cD(1093);
    const zD = cD(35987),
      jD = ["enter", "t", "/"];
    let lD = !1;

    function LD() {
      return lD || (0, ND.isTextEntry)(document.activeElement)
    }

    function TD() {
      var DD, CD;
      (0, nD.e)();
      const cD = null !== (DD = null === (CD = (0, mD.d)()) || void 0 === CD ? void 0 : CD.getBoundButton("keyboardChannel")) && void 0 !== DD ? DD : null;
      return cD ? (0, VD.jsx)(XD.c, {
        className: "ChatInputChannelGlyph",
        glyph: cD
      }) : null
    }

    function GD() {
      const {
        t: DD
      } = (0, JD.F)(), {
        isTouchScreen: CD
      } = (0, ZD.o)(["isTouchScreen"]), cD = (0, OD.p)(), [iD, MD] = (0, ID.useState)(!1), XD = (0, ID.useRef)(iD), mD = (0, ID.useRef)(null), {
        messages: nD,
        reportedPlayers: LD,
        channel: GD
      } = (0, PD.k)(), kD = (0, ID.useRef)(0), dD = (0, ID.useRef)(""), YD = (0, ID.useRef)(null);
      var WD;
      WD = YD, (0, ID.useEffect)((() => {
        if (!(0, SD.isIOS)()) return;
        const DD = WD.current;
        let CD = null;
        const cD = cD => {
            const ID = cD.changedTouches[0];
            CD = "none" === getComputedStyle(DD).pointerEvents ? {
              id: ID.identifier,
              y: ID.clientY
            } : null
          },
          ID = cD => {
            const ID = CD,
              pD = ID && (0, KD.e)(cD.changedTouches, ID.id);
            pD && (cD.preventDefault(), DD.scrollBy({
              top: ID.y - pD.clientY,
              behavior: "instant"
            }), ID.y = pD.clientY)
          };
        return DD.addEventListener("touchstart", cD, {
          passive: !0
        }), DD.addEventListener("touchmove", ID, {
          passive: !1
        }), () => {
          DD.removeEventListener("touchstart", cD), DD.removeEventListener("touchmove", ID)
        }
      }), [WD]);
      const [sD, ED] = (0, ID.useState)(!1), [eD, uD] = (0, ID.useState)(!1), hD = (0, ID.useRef)(sD), rD = (0, ID.useRef)(null), AD = (0, ID.useRef)(!1), FD = (0, ID.useRef)(null), DC = (0, ID.useRef)(null), CC = (0, ID.useRef)(null), cC = (0, ID.useRef)(fC);
      cC.current = fC;
      const IC = (0, qD.h)();

      function pC() {
        XD.current = !1, MD(!1), DC.current.blur()
      }

      function iC(DD) {
        hD.current = DD, ED(DD)
      }

      function fC() {
        const DD = DC.current.value;
        DC.current.value = "", bC(DD)
      }

      function bC(DD) {
        (0, PD.j)(DD), kD.current = 0, iC(!1)
      }

      function QC(DD, CD) {
        0 === kD.current && (dD.current = DC.current.value);
        const cD = (0, PD.f)(kD.current + DD, CD);
        kD.current = cD.stepsBack, DC.current.value = 0 === cD.stepsBack ? dD.current : cD.text, setTimeout((() => {
          DC.current && DC.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function wC() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        YD.current && (!DD && hD.current || (YD.current.scrollTop = 1e5))
      }
      return (0, bD.e)(!0, iD, "ChatComponent"), (0, ID.useEffect)((() => (lD = iD, () => {
          lD = !1
        })), [iD]), (0, wD.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, vD.v)() && MD(!1)
        })), (0, ID.useEffect)((() => {
          DC.current.addEventListener("blur", (DD => {
            if (null === DC.current) return;
            Array.from(document.querySelectorAll(":hover")).some((DD => DD.classList.contains("ChatInputChannel") || DD.classList.contains("ChatMsgSelectWrapper"))) || ((0, SD.isMobile)() && XD.current && "" !== DC.current.value && cC.current(), MD(!1))
          }));
          const DD = DD => {
            mD.current.contains(DD.target) || (0, gD.l)(DD.target) || MD(!1)
          };
          document.addEventListener("touchstart", DD, {
            capture: !0
          });
          const CD = DD => {
            (0, UD.j)(DD.target) && (XD.current = !1, MD(!1))
          };
          document.addEventListener("mousedown", CD, {
            capture: !0
          });
          const cD = () => {
              clearTimeout(rD.current), iC(!0)
            },
            ID = () => {
              clearTimeout(rD.current), rD.current = setTimeout((() => {
                iC(!1), wC()
              }), 4e3)
            },
            iD = () => {
              document.pointerLockElement ? (MD(!1), uD(!0), AD.current = !1, iC(!1), wC()) : uD(!1)
            };
          YD.current.addEventListener("pointermove", (DD => {
            "touch" === DD.pointerType || AD.current || document.pointerLockElement || (AD.current = !0, clearTimeout(rD.current))
          })), YD.current.addEventListener("pointerleave", (DD => {
            "touch" !== DD.pointerType && (AD.current = !1, hD.current && ID())
          })), YD.current.addEventListener("pointerdown", (DD => {
            "touch" === DD.pointerType || document.pointerLockElement || (AD.current = !0, cD())
          })), YD.current.addEventListener("wheel", (DD => {
            document.pointerLockElement || DD.deltaY >= 0 && Math.abs(YD.current.scrollTop) < 1 || (cD(), AD.current || (rD.current = setTimeout((() => {
              iC(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), YD.current.addEventListener("touchstart", cD), YD.current.addEventListener("touchend", ID), YD.current.addEventListener("touchcancel", ID), document.addEventListener("pointerlockchange", iD);
          const bD = DD => {
            if (IC.shown && (XD.current || ! function(DD) {
                if ((0, ND.isTypingInInput)()) return !0;
                const CD = document.activeElement;
                return (CD instanceof HTMLButtonElement || "button" === (null === CD || void 0 === CD ? void 0 : CD.getAttribute("role"))) && ["Enter", " "].includes(DD.key)
              }(DD)) && "codeEditor" !== ZD.d.get("openInGameMenuName") && "lobbyCodeEditor" !== ZD.d.get("openInGameMenuName") && !pD.gameBridge.latest("connectedGame").replay)
              if (XD.current || !(0, vD.v)()) {
                if (XD.current) {
                  if ("ArrowUp" === DD.code || "ArrowDown" === DD.code) return QC("ArrowUp" === DD.code ? 1 : -1, !1), void DD.stopPropagation();
                  if ("Tab" === DD.code) return PD.c.selectNextChannel(), DD.stopPropagation(), void DD.preventDefault();
                  if (DD.ctrlKey && RD.includes(zD[DD.keyCode])) return DD.preventDefault(), void DD.stopPropagation()
                }
                if ([...jD, "esc"].includes(fD()(DD)))
                  if ("esc" !== fD()(DD)) {
                    if (!XD.current || "/" !== fD()(DD)) {
                      if ("t" === fD()(DD)) {
                        if (XD.current) return void DD.stopPropagation();
                        DD.preventDefault()
                      }
                      XD.current && "" !== DC.current.value && cC.current(), DD.repeat || (XD.current || "/" === fD()(DD) && (DC.current.value = "/", DD.preventDefault()), MD(!XD.current))
                    }
                  } else XD.current && (MD(!1), DD.stopPropagation());
                else XD.current && DD.stopPropagation()
              } else jD.includes(fD()(DD)) && (DD.preventDefault(), DD.stopPropagation(), (0, vD.d)(DD))
          };
          document.addEventListener("keydown", bD, {
            capture: !0
          });
          const QD = YD.current;
          let wD = !1;
          const BD = new ResizeObserver((() => {
              wD && (wD = !1, wC())
            })),
            yD = () => {
              wD = !0, BD.unobserve(QD), BD.observe(QD)
            };
          FD.current = yD;
          const tD = new MutationObserver(yD);
          return tD.observe(QD, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", bD, {
              capture: !0
            }), document.removeEventListener("touchstart", DD, {
              capture: !0
            }), document.removeEventListener("mousedown", CD, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", iD), FD.current = null, tD.disconnect(), BD.disconnect(), clearTimeout(rD.current)
          }
        }), []), (0, gD.s)(DC, {
          open: () => {
            MD(!0)
          },
          close: () => {
            pC()
          },
          submit: () => {
            "" !== DC.current.value && fC(), pC()
          },
          stepHistory: () => {
            QC(1, !0)
          },
          sendLine: DD => {
            bC(DD), pC()
          },
          selectNextChannel: () => {
            PD.c.selectNextChannel()
          }
        }), (0, ID.useEffect)((() => {
          var DD;
          (XD.current = iD, DC.current) && (iD ? (kD.current = 0, DC.current.focus()) : (DC.current.blur(), null === (DD = FD.current) || void 0 === DD || DD.call(FD)))
        }), [iD]),
        function(DD, CD) {
          (0, ID.useLayoutEffect)((() => {
            if (!CD) return;
            aD.b.hold();
            const cD = DD.current.closest(".InGameHeaderAndChat"),
              ID = window.visualViewport;
            let pD = "";
            const iD = () => {
              const DD = `${ID.offsetTop+ID.height}px`;
              DD !== pD && (pD = DD, cD.style.setProperty("--keyboard-top", DD))
            };
            return iD(), ID.addEventListener("resize", iD), ID.addEventListener("scroll", iD), () => {
              ID.removeEventListener("resize", iD), ID.removeEventListener("scroll", iD), cD.style.removeProperty("--keyboard-top"), aD.b.release()
            }
          }), [DD, CD])
        }(mD, iD && CD), (0, VD.jsx)(VD.Fragment, {
          children: (0, VD.jsxs)("div", {
            ref: mD,
            className: tD()("Chat", {
              Chatting: iD
            }),
            "data-camera-keeper": iD ? "" : void 0,
            children: [(0, VD.jsx)("div", {
              ref: YD,
              className: tD()("ChatMessages", {
                HideScrollbar: !sD && !iD,
                NoScrolling: !(0, SD.isMobile)() && eD
              }),
              children: (0, VD.jsx)(HD.c, {
                messages: nD,
                reportedPlayers: LD
              })
            }), CD && !iD && (0, VD.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": DD("general:chat"),
              ...(0, xD.f)((() => {
                MD(!0), CC.current.style.display = "flex", (0, SD.isIOS)() && DC.current.focus()
              }), "pointerup"),
              children: (0, VD.jsx)(oD.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, VD.jsxs)("div", {
              ref: CC,
              className: "ChatInputWrapper",
              style: {
                display: "" + (iD ? "flex" : "none")
              },
              children: [GD && (0, VD.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: GD.elementBgColor
                },
                onClick: DD => {
                  PD.c.selectNextChannel(), DC.current.focus()
                },
                children: (0, VD.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, VD.jsx)(QD.c, {
                    text: GD.elementContent
                  })
                })
              }), GD && cD && (0, VD.jsx)(TD, {}), (0, VD.jsx)("input", {
                className: "ChatInput",
                maxLength: yD.Xc,
                ref: DC,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": DD("general:chat"),
                placeholder: GD ? `${GD.channelName} Chat${"touchOnly"===(0,BD.d)()||cD?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const RD = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35953: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => PD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(8476),
      bD = cD(20),
      QD = cD(2317),
      wD = cD(3395),
      SD = cD(1997),
      BD = cD(16),
      yD = cD(1872),
      MD = cD(35958),
      tD = cD(2112),
      ZD = cD(35962),
      oD = cD(2495),
      vD = cD(2474),
      ND = cD(2468),
      gD = cD(3410),
      XD = cD(2908),
      mD = cD(1954),
      nD = cD(1093);

    function OD(DD) {
      for (let cD = DD.length - 1; cD >= 0; cD--) {
        const ID = "string" === typeof(CD = DD[cD]) ? CD : "str" in CD && "string" === typeof CD.str ? CD.str : "";
        if ("" !== ID.trim()) return ID
      }
      var CD;
      return ""
    }

    function PD(DD) {
      let {
        messages: CD,
        reportedPlayers: cD
      } = DD;
      return (0, nD.jsx)(nD.Fragment, {
        children: CD.map((DD => (0, nD.jsx)(HD, {
          message: DD,
          reportedPlayers: cD
        }, DD.clientChatMsgId)))
      })
    }
    const HD = (0, ID.memo)((function(DD) {
      var CD;
      let {
        message: cD,
        reportedPlayers: pD
      } = DD;
      const PD = (0, ID.useRef)(null),
        [HD] = (0, ID.useState)(XD.j),
        {
          author: UD
        } = cD,
        xD = null === UD || void 0 === UD ? void 0 : UD.id,
        qD = null !== (CD = null === UD || void 0 === UD ? void 0 : UD.name) && void 0 !== CD ? CD : void 0,
        JD = (0, SD.b)(qD),
        KD = null !== UD && void 0 !== UD && UD.profileEffect ? tD.h[UD.profileEffect] : void 0,
        aD = null !== UD && !UD.local,
        VD = null === UD && null !== cD.serverChatMsgId,
        zD = (0, mD.g)("hiddenPlayerNames", (DD => (0, ZD.h)(aD, qD, DD))),
        jD = null === cD.serverChatMsgId || null === UD ? null : {
          text: OD(cD.content),
          serverChatMsgId: cD.serverChatMsgId,
          authorId: UD.id
        },
        lD = VD || null !== jD && !pD.includes(xD),
        LD = (0, wD.f)(aD && null !== qD && void 0 !== qD ? qD : null),
        TD = (0, ND.g)(PD);
      (0, ID.useEffect)((() => () => {
        ND.b.closeIfOwner(PD)
      }), []);
      const GD = () => {
          VD ? bD.i.Uo("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Rf: (0, fD.d)(cD.content),
            serverChatMsgId: cD.serverChatMsgId
          }) : null !== jD ? bD.i.Uo("OpenReportMenu", {
            playerEId: xD,
            playerName: qD,
            Rf: jD.text,
            serverChatMsgId: jD.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        RD = void 0 === qD ? [] : (0, gD.c)(LD, qD, jD);
      return (0, nD.jsxs)("div", {
        ref: PD,
        className: iD()("MessageWrapper", {
          ChatMsgSelectWrapper: xD,
          Still: HD
        }),
        onContextMenu: zD ? DD => {
          (0, oD.h)(PD, DD, {
            ...(0, ZD.e)(xD, qD),
            showLocation: !1,
            status: null,
            extraActions: lD ? [{
              icon: "flag",
              text: "Report",
              onClick: GD
            }] : [],
            friendRequestSource: "chat"
          }, BD.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: zD ? DD => {
          (0, vD.c)(DD, (() => (0, ZD.e)(xD, qD).playerSocialPreview))
        } : void 0,
        children: [KD && (0, nD.jsx)(KD, {
          className: "ChatMessageBackground",
          simple: !0
        }), (aD || VD) && !TD && (0, nD.jsx)(MD.e, {
          className: "ChatFloatingActions",
          triggerElementRef: PD,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: GD,
            show: lD
          }, ...RD, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: DD => {
              (0, QD.e)(qD, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: zD && "blocked" !== LD
          }]
        }), (0, nD.jsx)(yD.c, {
          text: cD.content,
          friendBadgeFor: JD ? qD : void 0
        }, cD.clientChatMsgId)]
      }, cD.clientChatMsgId)
    }))
  },
  35994: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      e: () => tD,
      f: () => yD,
      h: () => BD
    });
    var ID = cD(9041),
      pD = cD(35996),
      iD = cD(36002),
      fD = cD(8394),
      bD = cD(1440),
      QD = cD(53),
      wD = cD(62),
      SD = cD(1093);

    function BD() {
      var DD;
      return (0, bD.g)(pD.b, (0, pD.o)()), (0, SD.jsx)(SD.Fragment, {
        children: null === (DD = (0, pD.o)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function yD(DD) {
      var CD;
      let {
        show: cD
      } = DD;
      (0, bD.g)(pD.b, (0, pD.o)());
      const wD = null === (CD = (0, pD.o)()) || void 0 === CD ? void 0 : CD.menu;
      return (0, QD.useEffect)((() => {
        var DD;
        cD || (null === wD || void 0 === wD || null === (DD = wD.onClose) || void 0 === DD || DD.call(wD), (0, iD.q)())
      }), [cD, wD]), (0, QD.useEffect)((() => cD ? (0, fD.i)(iD.B, iD.e) : void 0), [cD]), (0, SD.jsx)(ID.c, {
        showing: cD,
        globallyUniqueKey: "clientGameMenu",
        children: null === wD || void 0 === wD ? void 0 : wD.content
      })
    }

    function MD(DD) {
      let {
        placement: CD = "bottom"
      } = DD;
      return (0, SD.jsx)("div", {
        id: `clientGameHud-${CD}`,
        style: {
          display: "contents"
        }
      })
    }

    function tD(DD) {
      let {
        children: CD,
        placement: cD = "bottom"
      } = DD;
      const [ID, pD] = (0, QD.useState)(null);
      return (0, QD.useEffect)((() => {
        pD(document.getElementById(`clientGameHud-${cD}`))
      }), [cD]), ID ? (0, wD.createPortal)(CD, ID) : null
    }
  },
  36249: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => BD,
      i: () => SD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1442),
      bD = cD(1093);
    const QD = 200,
      wD = 160;

    function SD() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function BD(DD) {
      let {
        side: CD,
        defaultSize: cD,
        covers: pD,
        onClose: SD,
        children: BD
      } = DD;
      const yD = (0, ID.useRef)(null),
        [MD, tD] = (0, ID.useState)(null),
        [ZD, oD] = (0, ID.useState)(cD);
      ZD !== cD && (oD(cD), tD(null));
      const vD = (0, ID.useRef)(null),
        ND = "top" === CD,
        gD = DD => ND ? DD.clientY : DD.clientX,
        XD = () => {
          vD.current = null
        };
      return (0, bD.jsxs)("div", {
        ref: yD,
        className: iD()("ResizableSidePanel", CD && `ResizableSidePanel-${CD}`, {
          Covers: "always" === pD,
          CoversWhenNarrow: "narrow" === pD,
          Dragged: null !== MD
        }),
        style: {
          [ND ? "height" : "width"]: null !== MD && void 0 !== MD ? MD : cD
        },
        children: [BD, CD && (0, bD.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": ND ? "horizontal" : "vertical",
          onPointerDown: DD => {
            if (0 !== DD.button) return;
            DD.preventDefault();
            const CD = yD.current,
              cD = Array.from(CD.parentElement.children).reduce(((DD, cD) => cD !== CD && "0" !== getComputedStyle(cD).flexGrow ? DD + (DD => ND ? DD.clientHeight : DD.clientWidth)(cD) : DD), 0),
              ID = ND ? CD.offsetHeight : CD.offsetWidth,
              pD = Math.min(QD, ID),
              iD = Math.max(pD, ID + Math.max(0, cD - wD));
            vD.current = {
              start: gD(DD),
              startSize: ID,
              minSize: pD,
              maxSize: iD
            }, DD.currentTarget.setPointerCapture(DD.pointerId)
          },
          onPointerMove: DD => {
            const cD = vD.current;
            if (!cD) return;
            const ID = "right" === CD ? cD.start - DD.clientX : gD(DD) - cD.start;
            tD(Math.min(cD.maxSize, Math.max(cD.minSize, cD.startSize + ID)))
          },
          onPointerUp: XD,
          onPointerCancel: XD,
          onLostPointerCapture: XD
        }), SD && (0, bD.jsx)(fD.l, {
          className: "ResizableSidePanelClose",
          onClick: SD
        })]
      })
    }
  },
  36273: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => PD,
      F: () => pD,
      J: () => OD,
      e: () => gD,
      f: () => oD,
      g: () => tD,
      h: () => MD,
      l: () => ND,
      p: () => HD,
      r: () => XD,
      u: () => nD,
      y: () => mD
    });
    var ID = cD(53);
    const pD = 5e3,
      iD = 500,
      fD = 3e3;
    let bD = null,
      QD = null,
      wD = null;
    const SD = new Set;

    function BD(DD) {
      bD = DD;
      for (const CD of SD) CD()
    }

    function yD() {
      if (!bD || void 0 !== bD.endedAt) return;
      null !== QD && (clearTimeout(QD), QD = null), BD({
        ...bD,
        endedAt: Date.now()
      });
      const DD = wD;
      wD = null, null === DD || void 0 === DD || DD()
    }

    function MD(DD, CD) {
      let {
        submit: cD,
        reopen: ID
      } = CD;
      null !== QD && clearTimeout(QD), wD = ID, BD({
        ...DD,
        startedAt: Date.now(),
        errors: []
      }), QD = setTimeout(yD, fD), cD()
    }

    function tD() {
      bD && void 0 === bD.endedAt && void 0 === bD.ranAt && (null !== QD && clearTimeout(QD), BD({
        ...bD,
        ranAt: Date.now()
      }), QD = setTimeout(yD, pD))
    }
    const ZD = 3;

    function oD(DD) {
      if (!bD || void 0 === bD.ranAt || void 0 !== bD.endedAt || bD.errors.includes(DD) || bD.errors.length >= ZD) return;
      const CD = 0 === bD.errors.length;
      BD({
        ...bD,
        errors: [...bD.errors, DD]
      }), CD && (null !== QD && clearTimeout(QD), QD = setTimeout(yD, iD))
    }

    function vD(DD) {
      var CD;
      return (null === (CD = bD) || void 0 === CD ? void 0 : CD.chatKey) === DD ? bD : null
    }

    function ND(DD) {
      const CD = vD(DD);
      return CD && void 0 !== CD.endedAt ? (BD(null), CD) : null
    }

    function gD(DD) {
      var CD;
      (null === (CD = bD) || void 0 === CD ? void 0 : CD.chatKey) === DD && (null !== QD && (clearTimeout(QD), QD = null), wD = null, BD(null))
    }
    const XD = "These changes from your last answer didn't go in. Make them again.";

    function mD(DD) {
      const CD = [...new Set(DD)].slice(0, ZD);
      return `Fix this in your change: when it ran, the world showed ${1===CD.length?"this error":"these errors"}: ${CD.join(" ")}`
    }

    function nD(DD) {
      return `Your change didn't go in, because the code wouldn't run at all: ${DD.join(" ")} Send the whole change again with that fixed.`
    }

    function OD(DD) {
      return `Fix this in your change: ${DD.join(" ")}`
    }

    function PD(DD) {
      var CD;
      if (void 0 === DD.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const cD = Math.max(1, Math.round(((null !== (CD = DD.endedAt) && void 0 !== CD ? CD : DD.ranAt) - DD.ranAt) / 1e3)),
        ID = `Your change ran in your world for ${cD} ${1===cD?"second":"seconds"}`;
      return 0 === DD.errors.length ? {
        title: "Tested: no errors",
        text: `${ID} without an error.`
      } : {
        title: 1 === DD.errors.length ? "Tested: it showed an error" : `Tested: it showed ${DD.errors.length} errors`,
        text: `${ID} and showed: ${DD.errors.join(" ")}`
      }
    }

    function HD(DD) {
      const [CD, cD] = (0, ID.useState)((() => vD(DD)));
      return (0, ID.useEffect)((() => {
        const CD = () => {
          cD(vD(DD))
        };
        return CD(), SD.add(CD), () => {
          SD.delete(CD)
        }
      }), [DD]), CD
    }
  },
  36280: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      e: () => ID
    });
    const ID = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function pD(DD, CD, cD) {
      return {
        key: DD,
        label: `Code block at ${CD.join(", ")}`,
        codeBlock: !0,
        pos: CD,
        canChangePos: cD
      }
    }
  },
  36265: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID,
      d: () => iD,
      g: () => fD,
      h: () => pD
    });
    const ID = "code block",
      pD = "World Code/";

    function iD(DD) {
      return DD.trim().toLowerCase().startsWith(pD.toLowerCase())
    }

    function fD(DD) {
      return DD.trim().slice(pD.length).replace(/^\.?\//, "")
    }
  },
  36231: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => yD,
      E: () => VD,
      H: () => PD,
      I: () => HD,
      L: () => aD,
      b: () => tD,
      d: () => QD,
      g: () => ZD,
      i: () => xD,
      m: () => bD,
      n: () => SD,
      p: () => MD,
      r: () => oD,
      v: () => XD,
      w: () => qD,
      z: () => UD
    });
    var ID = cD(36216),
      pD = cD(36223);
    const iD = "bloxd-world-code-directory-sync",
      fD = "handles",
      bD = "[INVALID SCHEMATIC PLACEHOLDER]";

    function QD(DD, CD) {
      return `${DD}::${CD}`
    }
    const wD = new Set(["node_modules", ".git"]);

    function SD() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function BD() {
      return new Promise(((DD, CD) => {
        const cD = indexedDB.open(iD, 1);
        cD.onupgradeneeded = () => {
          const DD = cD.result;
          DD.objectStoreNames.contains(fD) || DD.createObjectStore(fD)
        }, cD.onsuccess = () => {
          DD(cD.result)
        }, cD.onerror = () => {
          var DD;
          CD(null !== (DD = cD.error) && void 0 !== DD ? DD : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function yD(DD, CD) {
      const cD = await BD();
      try {
        await new Promise(((ID, pD) => {
          const iD = cD.transaction(fD, "readwrite");
          iD.objectStore(fD).put(CD, DD), iD.oncomplete = () => {
            ID()
          }, iD.onerror = () => {
            var DD;
            pD(null !== (DD = iD.error) && void 0 !== DD ? DD : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        cD.close()
      }
    }
    async function MD(DD) {
      const CD = await BD();
      try {
        return await new Promise(((cD, ID) => {
          const pD = CD.transaction(fD, "readonly").objectStore(fD).get(DD);
          pD.onsuccess = () => {
            var DD;
            cD(null !== (DD = pD.result) && void 0 !== DD ? DD : null)
          }, pD.onerror = () => {
            var DD;
            ID(null !== (DD = pD.error) && void 0 !== DD ? DD : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        CD.close()
      }
    }
    async function tD(DD) {
      const CD = await BD();
      try {
        await new Promise(((cD, ID) => {
          const pD = CD.transaction(fD, "readwrite");
          pD.objectStore(fD).delete(DD), pD.oncomplete = () => {
            cD()
          }, pD.onerror = () => {
            var DD;
            ID(null !== (DD = pD.error) && void 0 !== DD ? DD : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        CD.close()
      }
    }
    async function ZD(DD) {
      const CD = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await DD.queryPermission(CD) || "granted" === await DD.requestPermission(CD)
    }
    async function oD(DD) {
      if (!SD()) return null;
      try {
        const CD = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await yD(DD, CD), CD
      } catch (CD) {
        if (function(DD) {
            return DD instanceof DOMException && "AbortError" === DD.name
          }(CD)) return null;
        throw CD
      }
    }

    function vD(DD) {
      return DD.startsWith(".") || wD.has(DD)
    }

    function ND(DD) {
      if (!DD) return !0;
      const CD = DD.split("/");
      for (const cD of CD)
        if ("" === cD || "." === cD || ".." === cD) return !1;
      return !0
    }
    async function gD(DD, CD, cD) {
      for await (const [iD, fD] of DD.entries()) {
        if ("directory" === fD.kind) {
          if (vD(iD)) continue;
          const DD = CD ? `${CD}/${iD}` : iD;
          if (!ND(DD)) continue;
          await gD(fD, DD, cD);
          continue
        }
        const DD = CD ? `${CD}/${iD}` : iD;
        if (!(0, ID.q)(DD) && !(0, pD.b)(DD)) continue;
        const bD = await fD.getFile();
        cD[DD] = (0, pD.b)(DD) ? await JD(bD) : await bD.text()
      }
    }
    async function XD(DD) {
      const CD = {};
      return await gD(DD, "", CD), CD
    }

    function mD(DD) {
      return !(!DD || DD !== DD.trim() || DD.startsWith("/") || DD.includes("\\") || DD.includes("\0")) && ND(DD)
    }
    async function nD(DD, CD, cD) {
      const ID = CD.split("/"),
        pD = ID[ID.length - 1];
      let iD = DD;
      for (let fD = 0; fD < ID.length - 1; fD++) iD = await iD.getDirectoryHandle(ID[fD], {
        create: cD
      });
      return {
        dir: iD,
        fileName: pD
      }
    }
    async function OD(DD, CD, cD) {
      if (!mD(CD)) throw new Error(`Refusing to write unsafe path: ${CD}`);
      const {
        dir: ID,
        fileName: pD
      } = await nD(DD, CD, !0), iD = await ID.getFileHandle(pD, {
        create: !0
      }), fD = await iD.createWritable();
      await fD.write(cD), await fD.close()
    }
    async function PD(DD, CD, cD) {
      const ID = await async function(DD, CD) {
        if (!mD(CD)) return null;
        try {
          const {
            dir: cD,
            fileName: ID
          } = await nD(DD, CD, !1), pD = await cD.getFileHandle(ID), iD = await pD.getFile();
          return await iD.text()
        } catch (cD) {
          if (cD instanceof DOMException && ("NotFoundError" === cD.name || "NotAllowedError" === cD.name)) return null;
          throw cD
        }
      }(DD, CD);
      ID !== cD && await OD(DD, CD, cD)
    }
    async function HD(DD, CD, cD) {
      if (!(0, ID.q)(CD) && !(0, pD.b)(CD)) throw new Error(`Refusing to write non-allowlisted path: ${CD}`);
      if ((0, pD.b)(CD)) {
        if (await KD(DD, CD) === bD) throw new Error(`Move the binary schematic ${CD} outside the linked folder before syncing its placeholder`)
      }
      await OD(DD, CD, cD)
    }
    async function UD(DD, CD) {
      if (!mD(CD)) throw new Error(`Refusing to remove unsafe path: ${CD}`);
      try {
        const {
          dir: cD,
          fileName: ID
        } = await nD(DD, CD, !1);
        await cD.removeEntry(ID)
      } catch (cD) {
        if (cD instanceof DOMException && ("NotFoundError" === cD.name || "NotAllowedError" === cD.name)) return;
        throw cD
      }
    }
    async function xD(DD, CD) {
      if (!mD(CD)) return null;
      try {
        const cD = CD.split("/");
        let ID = DD;
        for (const DD of cD) ID = await ID.getDirectoryHandle(DD);
        return ID
      } catch (cD) {
        if (cD instanceof DOMException && ("NotFoundError" === cD.name || "NotAllowedError" === cD.name)) return null;
        throw cD
      }
    }
    async function qD(DD, CD) {
      if ((0, ID.q)(CD) || (0, pD.b)(CD)) {
        if ((0, pD.b)(CD)) {
          if (await KD(DD, CD) === bD) throw new Error(`Refusing to remove a binary schematic: ${CD}`)
        }
        await UD(DD, CD)
      }
    }
    async function JD(DD) {
      if (DD.size > 64) return bD;
      const CD = await DD.text();
      return Array.from(CD).some((DD => {
        const CD = DD.charCodeAt(0);
        return CD < 9 || CD > 13 && CD < 32 || 65533 === CD
      })) ? bD : CD
    }
    async function KD(DD, CD) {
      try {
        const {
          dir: cD,
          fileName: ID
        } = await nD(DD, CD, !1);
        return await JD(await (await cD.getFileHandle(ID)).getFile())
      } catch (cD) {
        if (cD instanceof DOMException && "NotFoundError" === cD.name) return null;
        throw cD
      }
    }
    async function aD(DD, CD) {
      const cD = await XD(DD);
      for (const ID of Object.keys(cD)) ID in CD || (0, pD.b)(ID) || await qD(DD, ID);
      for (const [iD, fD] of Object.entries(CD))((0, ID.q)(iD) || (0, pD.b)(iD)) && await HD(DD, iD, fD)
    }

    function VD(DD, CD) {
      var cD, ID;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const iD = null !== (cD = pD.debounceMs) && void 0 !== cD ? cD : 300,
        fD = null !== (ID = pD.pollMs) && void 0 !== ID ? ID : 1e3;
      let bD = !1,
        QD = null,
        wD = null,
        SD = null;
      const BD = () => {
          bD || (QD && clearTimeout(QD), QD = setTimeout((() => {
            QD = null, yD()
          }), iD))
        },
        yD = async () => {
          if (!bD) try {
            if (!await ZD(DD, "readwrite")) return;
            const cD = await XD(DD);
            bD || CD(cD)
          } catch (cD) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", cD)
          }
        };
      yD();
      const MD = window.FileSystemObserver;
      if (MD) try {
        SD = new MD((() => {
          BD()
        })), SD.observe(DD, {
          recursive: !0
        })
      } catch (tD) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", tD), SD = null
      }
      return SD || (wD = setInterval((() => {
        BD()
      }), fD)), () => {
        bD = !0, QD && clearTimeout(QD), wD && clearInterval(wD), SD && SD.disconnect()
      }
    }
  },
  4599: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD,
      e: () => vD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(1192),
      bD = cD(4606),
      QD = cD(1872),
      wD = cD(2358),
      SD = cD(4608),
      BD = cD(1093);
    const yD = new WeakMap;
    let MD = 0;

    function tD(DD) {
      let CD = yD.get(DD);
      return void 0 === CD && (CD = MD++, yD.set(DD, CD)), CD
    }

    function ZD(DD) {
      let {
        piece: CD
      } = DD;
      return "space" === CD.kind ? (0, BD.jsx)(BD.Fragment, {
        children: CD.text
      }) : (0, BD.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${CD.delayMs}ms`
        },
        children: (0, BD.jsx)(bD.b, {
          text: "icon" === CD.kind ? `[[${CD.icon}]]` : CD.text
        })
      })
    }

    function oD(DD) {
      let {
        display: CD
      } = DD;
      const {
        selectedLanguage: cD
      } = (0, fD.F)(), ID = (0, iD.useMemo)((() => (0, SD.d)((0, SD.e)(CD).plan.pieces)), [CD, cD.code]);
      return (0, BD.jsxs)("div", {
        className: pD()("Dialogue", {
          DialogueAnimateIn: !1 !== CD.animateIn
        }),
        children: [CD.speakerName && (0, BD.jsx)(QD.c, {
          text: CD.speakerName,
          className: "DialogueSpeaker"
        }), (0, BD.jsx)("p", {
          className: "DialogueLine",
          children: ID.map(((DD, CD) => 1 === DD.length && "space" === DD[0].kind ? DD[0].text : (0, BD.jsx)("span", {
            className: "DialogueGlue",
            children: DD.map(((DD, CD) => (0, BD.jsx)(ZD, {
              piece: DD
            }, CD)))
          }, CD)))
        })]
      })
    }
    const vD = (0, iD.memo)((function() {
      const DD = (0, wD.h)("dialogue");
      return (0, BD.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: DD && (0, BD.jsx)(oD, {
          display: DD
        }, tD(DD))
      })
    }))
  },
  36075: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => MD,
      e: () => tD
    });
    var ID = cD(53),
      pD = cD(2790),
      iD = cD(1440),
      fD = cD(1954),
      bD = cD(36018),
      QD = cD(624),
      wD = cD(1049),
      SD = cD.n(wD),
      BD = cD(1093);
    const yD = {},
      MD = (0, ID.memo)((function() {
        const DD = (0, pD.b)();
        return (0, iD.f)("damagedByOtherPlayer", (CD => {
          let {
            Wc: cD,
            direction: ID
          } = CD;
          const pD = cD || "nonDirectional";
          if (yD[pD]) {
            const CD = yD[pD];
            clearTimeout(CD.timeout), CD.direction = ID, CD.timeout = setTimeout((() => {
              delete yD[pD], DD()
            }), 800)
          } else yD[pD] = {
            direction: ID,
            wV: null,
            timeout: setTimeout((() => {
              delete yD[pD], DD()
            }), 800)
          };
          DD()
        })), (0, fD.c)("kill", (CD => {
          let {
            killer: cD,
            victim: ID
          } = CD;
          const pD = ID.id;
          cD.local && pD && pD in yD && (clearTimeout(yD[pD].timeout), delete yD[pD], DD())
        })), (0, ID.useEffect)((() => {
          const DD = (0, bD.c)("turnDamageIndicators", tD);
          return () => {
            DD();
            for (const DD in yD) clearTimeout(yD[DD].timeout), delete yD[DD]
          }
        }), []), (0, BD.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(yD).map((DD => {
            let [CD, cD] = DD;
            const ID = (0, QD.C)(cD.direction);
            return (0, BD.jsx)("div", {
              ref: DD => {
                yD[CD] && (yD[CD].wV = DD)
              },
              className: SD()("DamageIndicator", {
                DamageIndicatorFullCircle: ID
              })
            }, CD)
          }))
        })
      }));

    function tD(DD) {
      for (const CD in yD) {
        const {
          direction: cD,
          wV: ID
        } = yD[CD];
        if ((0, QD.C)(cD)) continue;
        const pD = cD - DD;
        ID.style.rotate = `${pD}rad`
      }
    }
  },
  35958: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => oD
    });
    var ID = cD(53),
      pD = cD(62),
      iD = cD(1192),
      fD = cD(1049),
      bD = cD.n(fD),
      QD = cD(1701),
      wD = cD(1064),
      SD = cD(1280),
      BD = cD(1471),
      yD = cD(1645),
      MD = cD(1462),
      tD = cD(1093);
    const ZD = 14;

    function oD(DD) {
      let {
        className: CD,
        triggerElementRef: cD,
        options: fD
      } = DD;
      const {
        t: oD
      } = (0, iD.F)(), [vD, ND] = (0, ID.useState)(!1), [gD, XD] = (0, ID.useState)({
        x: 0,
        y: 0
      }), mD = (0, ID.useRef)(null);
      (0, ID.useEffect)((() => {
        let DD = null;
        const CD = CD => {
            DD = {
              x: CD.clientX,
              y: CD.clientY
            }
          },
          ID = CD => {
            if (null === DD || !(0, MD.b)(DD, CD)) return;
            DD = null;
            const cD = ZD * (0, QD.getRemInPx)();
            XD({
              x: Math.min(CD.clientX, window.innerWidth - cD - 5),
              y: CD.clientY
            }), ND((DD => !DD))
          },
          pD = DD => {
            var CD;
            null !== (CD = mD.current) && void 0 !== CD && CD.contains(DD.relatedTarget) || ND(!1)
          },
          iD = cD.current;
        return iD.addEventListener("pointerdown", CD), iD.addEventListener("pointerup", ID), iD.addEventListener("mouseleave", pD), () => {
          iD.removeEventListener("pointerdown", CD), iD.removeEventListener("pointerup", ID), iD.removeEventListener("mouseleave", pD)
        }
      }), [cD]), (0, ID.useEffect)((() => {
        if (vD) return (0, yD.d)("pointerdown", (DD => {
          !mD.current || mD.current.contains(DD.target) || cD.current.contains(DD.target) || ND(!1)
        }))
      }), [vD, cD]), (0, ID.useLayoutEffect)((() => {
        if (!vD || !mD.current) return;
        const DD = mD.current.getBoundingClientRect().height,
          CD = Math.max(5, window.innerHeight - DD - 5);
        gD.y > CD && XD({
          x: gD.x,
          y: CD
        })
      }), [vD, gD]), (0, SD.t)("popup", mD, (() => {
        ND(!1)
      }), vD);
      const nD = fD.filter((DD => !1 !== DD.show));
      return vD && 0 !== nD.length ? (0, pD.createPortal)((0, tD.jsx)("div", {
        ref: mD,
        className: bD()("FloatingActions", {
          [CD]: CD
        }),
        style: {
          width: `${ZD}rem`,
          top: gD.y,
          left: gD.x
        },
        children: nD.map((DD => {
          let {
            icon: CD,
            text: cD,
            onPointerDown: ID,
            analyticsClick: pD
          } = DD;
          return (0, tD.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: DD => {
              void 0 !== pD && (0, BD.reportAnalyticsClick)(pD), ID(DD), ND(!1), DD.stopPropagation()
            },
            children: [(0, tD.jsx)(wD.c, {
              name: CD
            }), (0, tD.jsx)("div", {
              children: oD(cD)
            })]
          }, cD)
        }))
      }), function() {
        var DD;
        return null !== (DD = document.querySelector(".WholeAppWrapperInner")) && void 0 !== DD ? DD : document.body
      }()) : null
    }
  },
  36091: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => Nf
    });
    var ID = cD(35994),
      pD = cD(53),
      iD = cD(2031),
      fD = cD(4325),
      bD = cD(4329),
      QD = cD(2358),
      wD = cD(1905),
      SD = cD(1093);

    function BD(DD) {
      let {
        className: CD,
        style: cD,
        vw: ID,
        maxPx: pD,
        children: iD
      } = DD;
      console.assert("number" === typeof ID && "number" === typeof pD, "vw and maxPx passed to Text must be numbers");
      const fD = window.innerWidth * (ID / 100) > pD ? `${pD}px` : `${ID}vw`;
      return (0, SD.jsx)("div", {
        className: CD,
        style: {
          ...cD,
          fontSize: fD
        },
        children: iD
      })
    }
    var yD = cD(36099),
      MD = cD(1442),
      tD = cD(20),
      ZD = cD(1928),
      oD = cD(1064);

    function vD(DD) {
      let {
        tasks: CD,
        lastDisplayedTasks: cD
      } = DD;
      return (0, SD.jsx)(SD.Fragment, {
        children: Object.keys(CD).map((DD => (0, SD.jsx)(ND, {
          task: CD[DD],
          lastDisplayedAs: cD[DD]
        }, CD[DD].text)))
      })
    }

    function ND(DD) {
      let {
        task: CD,
        lastDisplayedAs: cD
      } = DD;
      const [ID, iD] = (0, pD.useState)(null !== cD && void 0 !== cD && cD.progress ? cD.progress / CD.goal : 0), [fD, bD] = (0, pD.useState)(!1), [QD, wD] = (0, pD.useState)(CD.claimed || !1);
      return (0, pD.useEffect)((() => {
        iD(CD.progress / CD.goal)
      }), [CD.progress, CD.goal]), QD ? null : (0, SD.jsxs)("div", {
        className: "Task",
        children: [(0, SD.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, SD.jsx)(BD, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: CD.text
          })
        }), CD.progress < CD.goal ? (0, SD.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== ID ? (0, SD.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * ID + "%"
            }
          }) : null, (0, SD.jsx)("div", {
            className: "TaskProgressText",
            children: `${CD.progress}/${CD.goal}`
          })]
        }) : (0, SD.jsx)(MD.o, {
          className: "ClaimRewardButton",
          onClick: () => {
            bD(!0)
          },
          children: (0, SD.jsx)(BD, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), fD ? (0, SD.jsx)(gD, {
          task: CD,
          close: () => {
            CD.claimed = !0, wD(!0), bD(!1)
          }
        }) : null]
      })
    }

    function gD(DD) {
      let {
        task: CD,
        close: cD
      } = DD;
      const [ID, iD] = (0, pD.useState)({}), [fD, bD] = (0, pD.useState)("closed");
      (0, pD.useEffect)((() => {
        let DD;
        return "animStart" === fD && (DD = setTimeout((() => {
          bD("animEnd")
        }), 700)), () => {
          clearTimeout(DD)
        }
      }), [fD]), (0, yD.e)((() => {
        wD.gameBridge.send("completeTask", CD.text)
      }));
      const BD = (0, QD.h)("currencyAmounts");
      return (0, SD.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === fD)
            if (0 === CD.rewards.length) cD(), wD.gameBridge.send("completeTask", CD.text);
            else {
              const DD = {
                ...ZD.d.get("currencyAmounts")
              };
              for (const CD in ID) DD[CD] = {
                ...DD[CD],
                amount: DD[CD].amount + ID[CD]
              };
              ZD.d.apply({
                currencyAmounts: DD
              }), bD("closed")
            }
          else "closed" === fD && (iD(CD.rewards.pop()), bD("animStart"))
        },
        children: [(0, SD.jsx)("img", {
          className: "Chest",
          alt: "closed" !== fD ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==fD?"open":"closed"}.png`
        }), (0, SD.jsx)("div", {
          className: "Rewards",
          children: "closed" !== fD ? Object.keys(ID).map((DD => {
            const CD = null === BD || void 0 === BD ? void 0 : BD[DD];
            return !CD || CD.hidden ? null : (0, SD.jsxs)("div", {
              className: "Reward",
              children: [(0, SD.jsx)(oD.c, {
                name: CD.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: CD.iconColour
                }
              }), (0, SD.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === fD ? 0 : ID[DD]
              })]
            }, DD)
          })) : null
        }), "animStart" === fD ? (0, SD.jsx)(XD, {}) : null, (0, SD.jsx)("div", {
          className: "ChestsLeft",
          children: CD.rewards.length
        })]
      })
    }

    function XD() {
      const [DD, CD] = (0, pD.useState)(0);
      (0, pD.useEffect)((() => {
        CD(1)
      }), []);
      return (0, SD.jsx)(SD.Fragment, {
        children: Array.from({
          length: 40
        }).map(((CD, cD) => (0, SD.jsx)(oD.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * DD * Math.cos(cD / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * DD * Math.sin(cD / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === DD ? 1 : 0
          }
        }, cD)))
      })
    }
    tD.i.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const DD = new Image,
          CD = new Image;
        DD.src = "/textures/miscImages/Treasure Chest open.png", CD.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var mD = cD(2921),
      nD = cD(1120),
      OD = cD(1872),
      PD = cD(1440),
      HD = cD(326),
      UD = cD(1954),
      xD = cD(1328);

    function qD(DD) {
      var CD, cD;
      let {
        byId: ID,
        localId: pD
      } = DD;
      return null === pD ? null : null !== (CD = null === (cD = ID[pD]) || void 0 === cD ? void 0 : cD.name) && void 0 !== CD ? CD : null
    }

    function JD(DD) {
      let {
        lbStats: CD,
        storedState: cD = {}
      } = DD;
      const {
        userContext: ID
      } = (0, nD.c)(), iD = (0, UD.g)("players", qD), [fD, bD] = (0, pD.useState)(cD.selectedCat || (null === CD || void 0 === CD ? void 0 : CD[0]) || null), [QD, BD] = (0, pD.useState)(cD.selectedTimeframe || "Today"), [yD, MD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        null === fD && null !== CD && CD.length > 0 && bD(CD[0])
      }), [CD, fD]);
      const [tD, ZD] = (0, pD.useState)(cD.seeingTop || !1), [oD, vD] = (0, pD.useState)(!1), ND = (0, pD.useCallback)((() => {
        null !== fD && null !== QD && (wD.gameBridge.send("requestLeaderboard", {
          category: fD.value,
          timeframe: QD,
          seeTop: tD
        }), XD(!0), VD && zD(null))
      }), [fD, QD, cD, tD]);
      (0, pD.useEffect)((() => {
        ND(), cD.selectedCat = fD, cD.selectedTimeframe = QD, cD.seeingTop = tD
      }), [fD, QD, cD, tD, ND]), (0, pD.useEffect)((() => {
        if ((null === yD || void 0 === yD ? void 0 : yD.length) > 0)
          if (tD) tD && vD(null === JD(yD));
          else {
            for (const DD of yD)
              if (1 === DD.place) return void vD(!1);
            vD(!0)
          }
      }), [yD, tD]), (0, PD.f)("leaderboardResponse", (DD => {
        let {
          category: cD,
          timeframe: ID,
          data: pD
        } = DD;
        for (let iD = 0; iD < CD; iD++)
          if (CD[iD].value === cD) {
            bD(CD[iD]);
            break
          } BD(ID), MD(pD), XD(!1)
      }));
      const [gD, XD] = (0, pD.useState)(!0);

      function JD(DD) {
        const CD = qD(wD.gameBridge.latest("players"));
        for (let cD = 0; cD < DD.length; cD++)
          if (DD[cD].name === CD) return DD[cD].place;
        return null
      }
      const [KD, aD] = (0, pD.useState)(!1), [VD, zD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        if (yD && !KD) {
          const DD = JD(yD);
          DD < (cD.lastSeenPlayerPlace || 0) && zD(cD.lastSeenPlayerPlace - DD), aD(!0)
        }
      }), [yD, cD, KD]), (0, pD.useEffect)((() => () => {
        yD && (cD.lastSeenPlayerPlace = JD(yD))
      }), [yD, cD]);
      const jD = (0, pD.useRef)(null),
        [lD, LD] = (0, pD.useState)(void 0);
      return (0, pD.useEffect)((() => {
        var DD, CD;
        lD !== (null === (DD = jD.current) || void 0 === DD ? void 0 : DD.offsetHeight) && LD(null === (CD = jD.current) || void 0 === CD ? void 0 : CD.offsetHeight)
      })), ID.isLoggedIn() ? (0, SD.jsxs)(SD.Fragment, {
        children: [(0, SD.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, SD.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, SD.jsx)(mD.b, {
              options: CD.map((DD => ({
                label: DD.label,
                value: DD.value
              }))),
              value: fD,
              onChange: DD => {
                bD(DD)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, SD.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, SD.jsx)(mD.b, {
              options: HD.Mc.map((DD => ({
                value: DD,
                label: DD,
                className: "LBDropdownMenuItem"
              }))),
              value: QD,
              onChange: DD => {
                BD(DD.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), oD ? (0, SD.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              ZD(!tD)
            },
            children: tD ? "See Yourself" : "See Top"
          }) : null]
        }), (0, SD.jsx)("div", {
          className: "LBTableWrapper",
          children: gD ? (0, SD.jsx)("div", {
            className: "LoaderContainer",
            children: (0, SD.jsx)(xD.e, {})
          }) : null === VD ? (0, SD.jsx)(SD.Fragment, {
            children: (0, SD.jsxs)("table", {
              className: "LBTable",
              children: [(0, SD.jsx)("thead", {
                className: "LBTableTHead",
                ref: jD,
                children: (0, SD.jsxs)("tr", {
                  children: [(0, SD.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, SD.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, SD.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: fD.label.toUpperCase()
                  })]
                })
              }), (0, SD.jsx)("tbody", {
                children: yD.map((DD => (0, SD.jsxs)("tr", {
                  className: "LBTableTR " + (DD.name === iD ? "LBTableTRYou" : ""),
                  children: [(0, SD.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${DD.place}`
                  }), (0, SD.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, SD.jsx)(OD.c, {
                      text: [{
                        entityName: DD.name
                      }]
                    })
                  }), (0, SD.jsx)("td", {
                    className: "LBTableTD",
                    children: DD.stat
                  })]
                }, DD.name)))
              })]
            })
          }) : (0, SD.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              zD(null)
            },
            children: (0, SD.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, SD.jsx)("div", {
                className: "TriangleUp"
              }), (0, SD.jsx)("div", {
                className: "LBIncreaseText",
                children: `${VD} Place${VD>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, SD.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, SD.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, SD.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var KD = cD(1113),
      aD = cD(90),
      VD = cD(36),
      zD = cD(3211);
    const jD = (0, pD.memo)((function(DD) {
      let {
        show: CD,
        onClose: cD
      } = DD;
      (0, KD.b)();
      const ID = (0, QD.h)("_tasks"),
        iD = (0, QD.h)("_availableLeaderboards"),
        [wD, BD] = (0, pD.useState)({});
      ID && Object.keys(ID).length > 0 && 0 === Object.keys(wD).length && BD(ID);
      const [yD] = (0, pD.useState)({
        tasks: {},
        leaderboard: {}
      }), MD = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!ID && Object.keys(ID).length > 0,
          content: (0, SD.jsx)(vD, {
            tasks: ID,
            lastDisplayedTasks: wD
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === iD || void 0 === iD ? void 0 : iD.length) > 0,
          content: (0, SD.jsx)(JD, {
            lbStats: iD,
            storedState: yD.leaderboard
          })
        }
      };

      function tD() {
        for (const DD in MD)
          if (MD[DD].getIsDefined()) return DD;
        return null
      }
      const [ZD, oD] = (0, pD.useState)(tD());

      function ND() {
        BD({
          ...ID
        }), cD()
      }(0, pD.useEffect)((() => {
        ZD || oD(tD())
      }), [tD()]), (0, bD.b)(!0, ZD && CD), (0, pD.useEffect)((() => {
        CD && !ZD && (console.log("CLOSE"), ND())
      }), [CD, ZD]);
      const [gD, XD] = (0, pD.useState)(!1);
      return (0, pD.useEffect)((() => {
        CD && ZD && !gD && XD(!0)
      }), [CD, gD, ZD]), (0, pD.useEffect)((() => {
        !gD && ID && "tasks" !== ZD && oD("tasks")
      }), [gD, ID, ZD]), (0, SD.jsx)(SD.Fragment, {
        children: ZD ? (0, SD.jsx)(zD.c, {
          className: "RetentionFeaturesWrapper",
          show: CD,
          children: (0, SD.jsxs)(fD.e, {
            close: ND,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, SD.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, SD.jsx)(LD, {}), (0, SD.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, SD.jsx)(lD, {
                  setCategory: oD,
                  menuCategories: MD,
                  selectedCat: ZD
                }), (0, SD.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: MD[ZD].content
                })]
              })]
            }), (0, SD.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: aD.featureFlags.useDiscord && (0, SD.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, SD.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, SD.jsx)(TD, {
                    tasks: ID
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function lD(DD) {
      let {
        selectedCat: CD,
        setCategory: cD,
        menuCategories: ID
      } = DD;
      return (0, SD.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(ID).map((DD => ID[DD].getIsDefined() ? (0, SD.jsx)("div", {
          className: "MenuHeaderCategory " + (DD === CD ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            cD(DD)
          },
          children: ID[DD].Title
        }, DD) : null))
      })
    }

    function LD() {
      const DD = (0, QD.h)("currencyAmounts");
      return (0, SD.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== DD && void 0 !== DD ? DD : {}).map((CD => {
          const cD = DD[CD];
          return cD.hidden ? null : (0, SD.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, SD.jsx)(oD.c, {
              name: cD.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: cD.iconColour
              }
            }), (0, SD.jsx)("div", {
              className: "UiCurrencyAmount",
              children: cD.amount
            })]
          }, CD)
        }))
      })
    }

    function TD(DD) {
      let {
        tasks: CD
      } = DD;
      return (0, SD.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, SD.jsx)(oD.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            VD.h.setItem("DiscordPressed", !0), wD.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in CD && tD.i.Uo("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, SD.jsx)(iD.e, {})]
      })
    }
    var GD = cD(16),
      RD = cD(1627),
      kD = cD(35941),
      dD = cD(8940),
      YD = cD(4431),
      WD = cD(162),
      sD = cD(1210),
      ED = cD(1356),
      eD = cD(2519),
      uD = cD(1192),
      hD = cD(1629),
      rD = cD(2328),
      AD = cD(2317),
      FD = cD(1825),
      DC = cD(2010),
      CC = cD(1260),
      cC = cD(1471),
      IC = cD(4388);

    function pC(DD) {
      const CD = {
        lobbyName: DD,
        answer: null,
        response: IC.b.getSocialSettings(DD)
      };
      return CD.response.then((DD => {
        CD.answer = DD
      })), CD
    }
    const iC = new Map;

    function fC(DD) {
      const [CD] = (0, pD.useState)((() => function(DD) {
        var CD;
        const cD = null !== (CD = iC.get(DD)) && void 0 !== CD ? CD : null;
        return null !== cD && void 0 !== cD && cD.answer && "error" in cD.answer ? null : cD
      }(DD))), [cD, ID] = (0, pD.useState)((() => null !== CD && void 0 !== CD && CD.answer && "settings" in CD.answer ? CD.answer.settings : null)), [iD, fD] = (0, pD.useState)(!0), [bD, QD] = (0, pD.useState)(null !== cD), wD = (0, pD.useRef)(cD);
      wD.current = cD;
      const SD = (0, pD.useRef)(0),
        BD = (0, pD.useRef)(0),
        yD = (0, pD.useRef)(!1),
        MD = (0, pD.useRef)(!0),
        tD = (0, pD.useCallback)((async CD => {
          const cD = ++SD.current,
            pD = await (null !== CD && void 0 !== CD ? CD : IC.b.getSocialSettings(DD));
          MD.current && cD === SD.current && (QD(!0), fD(!1), "error" in pD || ID(pD.settings))
        }), [DD]),
        ZD = (0, pD.useCallback)((() => {
          fD(!0), tD()
        }), [tD]);
      (0, pD.useEffect)((() => (MD.current = !0, iC.delete(DD), fD(!0), tD(null === CD || void 0 === CD ? void 0 : CD.response), () => {
        MD.current = !1
      })), [tD, DD, CD]);
      const oD = DD => {
        SD.current++, fD(!1), wD.current = DD, ID(DD)
      };
      return {
        settings: cD,
        loading: iD,
        answered: bD,
        retry: ZD,
        change: async function(CD, cD) {
          let {
            quiet: ID = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const pD = wD.current;
          if (null === pD) return !1;
          oD(cD(pD)), BD.current > 0 && (yD.current = !0), BD.current++;
          const iD = await IC.b.setSocialSettings(DD, CD);
          BD.current--;
          const fD = !("error" in iD);
          if (!MD.current) return fD;
          if (ID);
          else if ("error" in iD) FD.g.showMessage({
            translationKey: iD.error
          });
          else
            for (const DD of iD.notFound) FD.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: DD
              }
            });
          if (BD.current > 0) return fD;
          const bD = yD.current;
          return yD.current = !1, !bD && "settings" in iD ? oD(iD.settings) : (bD || oD(pD), tD()), fD
        }
      }
    }

    function bC(DD, CD) {
      const cD = CD.toLowerCase();
      for (const ID of DD)
        if (ID.toLowerCase() === cD) return !0;
      return !1
    }

    function QC(DD) {
      if (null === DD) return !0;
      const {
        visibility: CD
      } = DD;
      return "public" === CD || "unlisted" === CD || "whitelist" === CD && DD.canManage
    }

    function wC(DD, CD, cD) {
      if (cD) {
        const cD = CD.filter((CD => !bC(DD.whitelist, CD)));
        return {
          ...DD,
          whitelist: [...DD.whitelist, ...cD]
        }
      }
      return {
        ...DD,
        whitelist: DD.whitelist.filter((DD => !bC(CD, DD)))
      }
    }
    var SC = cD(2551);

    function BC(DD) {
      let {
        worldCode: CD,
        message: cD
      } = DD;
      const {
        t: ID
      } = (0, uD.F)(), {
        isTouchScreen: iD
      } = (0, GD.o)(["isTouchScreen"]), fD = aD.featureFlags.canUseInviteLinks, bD = (0, dD.k)(fD && null === cD), [QD, wD] = (0, SC.h)(), BD = (0, pD.useRef)(null);
      if (null !== cD) return (0, SD.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, SD.jsx)(oD.c, {
          name: "lock"
        }), (0, SD.jsx)("span", {
          children: cD
        })]
      });
      const yD = fD ? bD : CD,
        tD = iD && fD && (0, SC.b)();
      return (0, SD.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!fD && (0, SD.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: ID("worldSocial:worldCode")
        }), (0, SD.jsx)("input", {
          ref: BD,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== yD && void 0 !== yD ? yD : "",
          "aria-label": ID(fD ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: DD => {
            DD.currentTarget.select()
          }
        }), (0, SD.jsxs)(MD.i, {
          className: "WorldSocialCopy",
          disabled: null === yD,
          onClick: () => {
            null !== yD && (0, SC.d)(yD, {
              useShareSheet: tD,
              onOutcome: DD => {
                if ((0, cC.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== DD || fD ? DD : "code"
                  }), "copied" === DD) wD();
                else if ("failed" === DD) {
                  var CD;
                  null === (CD = BD.current) || void 0 === CD || CD.focus(), FD.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, SD.jsx)(oD.c, {
            name: QD ? "check" : tD ? "up-from-bracket" : "copy"
          }), " ", ID(QD ? "general:copied" : tD ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var yC = cD(1049),
      MC = cD.n(yC);
    const tC = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      ZC = ["unlisted", "public", "whitelist", "private"];

    function oC(DD) {
      let {
        visibility: CD,
        onPick: cD
      } = DD;
      const {
        t: ID
      } = (0, uD.F)(), iD = (0, pD.useRef)([]);
      return (0, SD.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": ID("worldSocial:whoCanJoin"),
        children: ZC.map(((DD, pD) => {
          const fD = DD === CD;
          return (0, SD.jsxs)("button", {
            ref: DD => {
              iD.current[pD] = DD
            },
            type: "button",
            className: MC()("WorldSocialTile", {
              WorldSocialTileSelected: fD
            }),
            "aria-pressed": fD,
            tabIndex: fD ? 0 : -1,
            onKeyDown: DD => {
              ((DD, CD) => {
                const cD = "ArrowRight" === DD.key || "ArrowDown" === DD.key ? 1 : "ArrowLeft" === DD.key || "ArrowUp" === DD.key ? -1 : 0;
                var ID;
                0 !== cD && (DD.preventDefault(), null === (ID = iD.current[(CD + cD + ZC.length) % ZC.length]) || void 0 === ID || ID.focus())
              })(DD, pD)
            },
            onClick: () => {
              cD(DD)
            },
            children: [(0, SD.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, SD.jsx)(oD.c, {
                name: tC[DD]
              })
            }), (0, SD.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, SD.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: ID(`worldSocial:${DD}`)
              }), (0, SD.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: ID(`worldSocial:${DD}Description`)
              })]
            })]
          }, DD)
        }))
      })
    }
    var vC = cD(611),
      NC = cD(2515),
      gC = cD(2466),
      XC = cD(4182);

    function mC(DD, CD) {
      var cD;
      return {
        isError: !1,
        name: DD,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== CD && void 0 !== CD ? CD : {},
        nameColour: null !== (cD = null === CD || void 0 === CD ? void 0 : CD.nameColour) && void 0 !== cD ? cD : vC.b,
        location: {
          status: "offline"
        }
      }
    }

    function nC(DD) {
      let {
        player: CD,
        isFriend: cD = !1,
        status: ID,
        showLocation: pD = void 0 === ID,
        wy: iD,
        onSendFriendRequest: fD,
        actions: bD,
        zIndex: QD
      } = DD;
      const {
        t: wD
      } = (0, uD.F)();
      let BD, yD = ID;
      return null !== iD && void 0 !== iD && iD.on && (yD = (0, SD.jsxs)(SD.Fragment, {
        children: [null !== ID && void 0 !== ID ? ID : (0, SD.jsx)(gC.d, {
          socialPreview: CD
        }), (0, SD.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", wD("worldSocial:canJoin")]
        })]
      })), (bD || iD) && (BD = (0, SD.jsxs)(SD.Fragment, {
        children: [bD, iD && (0, SD.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, SD.jsx)(XC.e, {
            checked: iD.on,
            disabled: !1,
            ariaLabel: wD("worldSocial:letJoin", {
              playerName: CD.name
            }),
            onChange: DD => {
              iD.onChange(DD.target.checked)
            }
          })
        })]
      })), (0, SD.jsx)(NC.d, {
        playerSocialPreview: CD,
        isFriend: cD,
        hideFriendBadge: !0,
        onFriendRemoved: cD ? DD => {
          hD.e.removeFriendFromState(DD)
        } : void 0,
        status: yD,
        showLocation: pD,
        onSendFriendRequest: fD,
        opensProfileCard: !1,
        zIndex: QD,
        children: BD
      })
    }

    function OC(DD) {
      let {
        row: CD,
        wy: cD,
        canInvite: ID,
        invited: pD,
        onInvite: iD,
        zIndex: fD
      } = DD;
      const {
        t: bD
      } = (0, uD.F)(), QD = "online" === CD.place ? MD.i : MD.k;
      return (0, SD.jsx)(nC, {
        player: CD.friend,
        isFriend: !0,
        status: "here" === CD.place ? bD("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        wy: cD,
        zIndex: fD,
        actions: ID && (0, SD.jsx)(QD, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: pD,
          onClick: iD,
          ariaLabel: `${bD("worldSocial:invite")} ${CD.friend.name}`,
          children: bD(pD ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var PC = cD(2600);

    function HC(DD) {
      let {
        playersHere: CD,
        exclude: cD,
        Jm: ID
      } = DD;
      const {
        t: iD
      } = (0, uD.F)(), fD = (0, PC.m)(PC.g), [bD, QD] = (0, pD.useState)([]), wD = [], BD = (DD, CD) => {
        const ID = [...cD, ...wD.map((DD => DD.player.name))];
        wD.length < 3 && !bC(ID, DD.name) && wD.push({
          player: DD,
          status: CD
        })
      };
      for (const pD of CD) BD(mC(pD.name, pD.cosmetics, pD.ranks), iD("worldSocial:inThisWorld"));
      if ("loaded" === fD.state.status)
        for (const pD of fD.state.recentPlayers) pD.preview.name && !pD.preview.isError && BD({
          ...pD.preview,
          location: {
            status: "offline"
          }
        }, iD("worldSocial:playedWithYou"));
      const yD = DD => {
        QD((CD => [...CD, DD])), ID(DD).finally((() => {
          QD((CD => CD.filter((CD => CD !== DD))))
        }))
      };
      return (0, SD.jsx)(SD.Fragment, {
        children: wD.map(((DD, CD) => {
          let {
            player: cD,
            status: ID
          } = DD;
          return (0, SD.jsx)(nC, {
            zIndex: wD.length - CD,
            player: cD,
            status: ID,
            onSendFriendRequest: () => {
              yD(cD.name)
            },
            actions: (0, SD.jsx)(ED.f, {
              tooltipInner: (0, SD.jsx)(SD.Fragment, {
                children: iD("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, SD.jsx)(MD.i, {
                className: "FriendRequestButton",
                disabled: bD.includes(cD.name),
                ariaLabel: `${iD("recentPlayers:addFriend")} ${cD.name}`,
                onClick: () => {
                  yD(cD.name)
                },
                children: (0, SD.jsx)(oD.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${cD.name}`)
        }))
      })
    }
    var UC = cD(1655);

    function xC(DD) {
      let {
        Jm: CD
      } = DD;
      const {
        t: cD
      } = (0, uD.F)(), ID = (0, pD.useRef)(null), [iD, fD] = (0, pD.useState)(""), [bD, QD] = (0, pD.useState)(!1), wD = () => {
        const DD = iD.trim();
        "" === DD || bD || (QD(!0), CD(DD).then((DD => {
          DD && ID.current && (ID.current.value = "", fD(""))
        })).finally((() => {
          QD(!1)
        })))
      };
      return (0, SD.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: DD => {
          DD.target === ID.current && "Escape" !== DD.key && DD.stopPropagation()
        },
        children: [(0, SD.jsx)(UC.b, {
          className: "WorldSocialAddFriendInput",
          domRef: ID,
          maxLength: 32,
          placeholderText: cD("worldSocial:addFriendPlaceholder"),
          ariaLabel: cD("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: DD => {
            fD(DD)
          },
          onEnter: wD
        }), (0, SD.jsxs)(MD.i, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: bD || "" === iD.trim(),
          onClick: wD,
          children: [(0, SD.jsx)(oD.c, {
            name: "user-plus"
          }), " ", cD("socialBar:sendRequest")]
        })]
      })
    }
    const qC = new Map;

    function JC(DD) {
      const CD = qC.get(DD);
      if (!CD) return [];
      const cD = Date.now();
      for (const [ID, pD] of CD) cD - pD >= WD.q && CD.delete(ID);
      return [...CD.keys()]
    }
    var KC = cD(1221),
      aC = cD(1488),
      VC = cD(4422),
      zC = cD(300),
      jC = cD(4405);
    const lC = ["auto", "auto_existing"];

    function LC(DD) {
      return lC.includes(DD)
    }

    function TC(DD, CD) {
      const cD = (0, KC.sb)(DD);
      return null !== CD && (0, KC.sb)(CD) === cD || (0, jC.c)().some((DD => (0, KC.sb)(DD.name) === cD))
    }
    const GC = new Set;

    function RC(DD) {
      return `worldSocialSeen:${DD}`
    }

    function kC(DD) {
      return !DD || GC.has(DD) || !0 === VD.h.getItem(RC(DD))
    }

    function dC(DD) {
      DD && !GC.has(DD) && (GC.add(DD), VD.h.setItem(RC(DD), !0))
    }

    function YC(DD) {
      let {
        show: CD,
        onClose: cD,
        opener: ID
      } = DD;
      const {
        lobbyName: iD,
        shownLobbyName: bD
      } = (0, UD.h)("connectedGame");
      return (0, pD.useEffect)((() => {
        CD && (0, cC.reportAnalyticsClick)({
          id: "world_social.open",
          value: ID
        })
      }), [CD]), (0, SD.jsx)(fD.e, {
        show: CD && null !== iD,
        close: cD,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== ID,
        children: CD && null !== iD && (0, SD.jsx)(WC, {
          lobbyName: iD,
          worldCode: null !== bD && void 0 !== bD ? bD : iD,
          onClose: cD
        }, iD)
      })
    }

    function WC(DD) {
      var CD;
      let {
        lobbyName: cD,
        worldCode: ID,
        onClose: iD
      } = DD;
      const {
        t: fD
      } = (0, uD.F)(), bD = (0, pD.useRef)(null), {
        settings: QD,
        loading: wD,
        answered: BD,
        change: yD,
        retry: tD
      } = fC(cD), ZD = (0, hD.m)(), vD = (0, UD.h)("players"), ND = (0, UD.h)("hiddenPlayerNames"), [gD, XD] = (0, pD.useState)([]), [mD, OD] = (0, pD.useState)([]), [PD, HD] = (0, pD.useState)(!1), qD = (0, pD.useMemo)((() => {
        var DD, CD;
        const cD = null === vD.localId ? null : null !== (DD = null === (CD = vD.byId[vD.localId]) || void 0 === CD ? void 0 : CD.name) && void 0 !== DD ? DD : null;
        return vD.ids.flatMap((DD => {
          const CD = vD.byId[DD];
          return null !== CD && void 0 !== CD && CD.name && CD.name !== cD ? [{
            name: CD.name,
            cosmetics: CD.cosmetics,
            ranks: CD.ranks
          }] : []
        }))
      }), [vD]), JD = (0, pD.useMemo)((() => function(DD, CD, cD) {
        const ID = [],
          pD = [],
          iD = [];
        for (const fD of DD) !fD.isError && fD.name && ("inGame" === fD.location.status && fD.location.inLobbyName === CD || bC(cD, fD.name) ? pD.push({
          friend: fD,
          place: "here"
        }) : "offline" === fD.location.status ? iD.push({
          friend: fD,
          place: "offline"
        }) : ID.push({
          friend: fD,
          place: "online"
        }));
        return [...ID, ...pD, ...iD]
      }(ZD.friends, cD, qD.map((DD => DD.name)))), [ZD.friends, cD, qD]), KD = aD.featureFlags.canSeeRealPlayerNames ? qD.filter((DD => null === (0, CC.d)(DD.name, ND))) : [], VD = null !== QD && void 0 !== QD && QD.canManage ? QD : null, zD = null !== VD, jD = null !== (CD = null === QD || void 0 === QD ? void 0 : QD.visibility) && void 0 !== CD ? CD : null, lD = "whitelist" === (null === VD || void 0 === VD ? void 0 : VD.visibility), LD = "private" === jD || "whitelist" === jD && !zD, {
        userContext: TD
      } = (0, nD.c)();
      (0, pD.useEffect)((() => {
        zD && TC(cD, TD.getPersonalWorldLobbyName()) && dC(TD.whamm)
      }), [zD, cD, TD]);
      const GD = LD ? fD("whitelist" === jD ? "socialBar:inviteWorldManagersOnly" : zD ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        RD = null === GD;
      (0, pD.useEffect)((() => LD ? void 0 : FD.g.quietFriendAdded()), [LD]), (0, pD.useEffect)((() => FD.g.quietFriendRequests()), []);
      const dD = (0, pD.useRef)(!1);
      (0, pD.useEffect)((() => {
        const DD = bD.current,
          CD = !dD.current;
        dD.current = !0;
        const cD = null === document.activeElement || document.activeElement === document.body;
        null !== DD && void 0 !== DD && DD.contains(document.activeElement) || !CD && !cD || (0, kD.g)() || null === DD || void 0 === DD || DD.focus({
          preventScroll: !0
        })
      }), [RD]), (0, pD.useEffect)((() => {
        const DD = DD => {
          "Escape" !== DD.key || null !== document.activeElement && document.activeElement !== document.body || iD()
        };
        return document.addEventListener("keydown", DD), () => {
          document.removeEventListener("keydown", DD)
        }
      }), [iD]);
      const IC = null === QD && !BD,
        pC = (wD || ZD.loading) && 0 === ZD.friends.length,
        iC = ZD.friends.flatMap((DD => DD.name ? [DD.name] : [])),
        SC = gD.filter((DD => !bC(iC, DD))),
        yC = JD.length + 3,
        MC = SC.length + yC,
        tC = PD ? ZD.requests : ZD.requests.slice(0, 1),
        ZC = async function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const cD of function(DD, CD) {
              const cD = [];
              for (let ID = 0; ID < DD.length; ID += CD) cD.push(DD.slice(ID, ID + CD));
              return cD
            }(DD, YD.A)) {
            if (!await yD({
                whitelistAdd: cD
              }, (DD => wC(DD, cD, !0)), {
                quiet: CD
              })) return !1
          }
          return !0
        }, vC = async DD => {
          if (DD === jD) return;
          (0, cC.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: DD
          });
          const CD = [...JC(cD), ...mD],
            ID = "whitelist" === DD && QD ? function(DD, CD, cD) {
              const ID = [],
                pD = DD.flatMap((DD => "here" === DD.place ? [DD.friend.name] : []));
              for (const iD of [...pD, ...CD]) bC(ID, iD) || bC(cD, iD) || ID.push(iD);
              return ID
            }(JD, CD, QD.whitelist) : [];
          await yD({
            setVisibility: DD
          }, (CD => ({
            ...CD,
            visibility: DD
          }))) && await ZC(ID)
        }, NC = DD => {
          if (lD && VD) return {
            on: bC(VD.whitelist, DD),
            onChange: CD => {
              (0, cC.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: CD ? "on" : "off"
              }), yD(CD ? {
                whitelistAdd: [DD]
              } : {
                whitelistRemove: DD
              }, (cD => wC(cD, [DD], CD)))
            }
          }
        }, gC = async DD => {
          (0, cC.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const CD = () => {
            OD((CD => CD.filter((CD => CD !== DD))))
          };
          OD((CD => [...CD, DD]));
          const ID = function(DD, CD) {
            return null === DD || void 0 === DD || !DD.canManage || bC(DD.whitelist, CD) ? "none" : "whitelist" === DD.visibility ? "required" : "quiet"
          }(QD, DD);
          if ("none" !== ID) {
            const cD = ZC([DD], "quiet" === ID);
            if ("required" === ID && !await cD) return void CD()
          }
          await (0, rD.l)(DD, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(DD, CD) {
            var cD;
            const ID = null !== (cD = qC.get(DD)) && void 0 !== cD ? cD : new Map;
            ID.set(CD, Date.now()), qC.set(DD, ID)
          }(cD, DD), setTimeout(CD, WD.u)) : CD()
        }, XC = async (DD, CD) => {
          (0, cC.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: CD
          });
          const cD = await (0, AD.d)(DD, "world_social");
          return (0, AD.b)(cD, DD, {
            announceSent: !1
          }), "failed" !== cD.kind && ("sent" === cD.kind && XD((CD => bC(CD, DD) ? CD : [...CD, DD])), lD && await ZC([DD]), !0)
        };
      return (0, SD.jsxs)("div", {
        ref: bD,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: DD => {
          DD.target === DD.currentTarget && " " === DD.key && DD.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, SD.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, SD.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: fD("worldSocial:title")
          }), (0, SD.jsx)(MD.l, {
            className: "WorldSocialClose",
            onClick: iD
          })]
        }), IC && (0, SD.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, SD.jsx)(xD.e, {})
        }), !IC && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)(BC, {
            worldCode: ID,
            message: GD
          }), null === QD && !wD && (0, SD.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: tD,
            children: fD("worldSocial:loadFailed")
          }), zD && null !== jD && (0, SD.jsx)(oC, {
            visibility: jD,
            onPick: DD => {
              vC(DD)
            }
          }), ZD.requests.length > 0 && (0, SD.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, SD.jsx)(eD.d, {
              label: (0, SD.jsxs)(SD.Fragment, {
                children: [(0, SD.jsx)(oD.c, {
                  name: DC.e
                }), " ", fD("socialBar:requests")]
              }),
              meta: (0, SD.jsxs)(SD.Fragment, {
                children: [ZD.requests.length, ZD.requests.length === sD.s && (0, SD.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: fD("socialBar:limitReached")
                }), !PD && ZD.requests.length > 1 && (0, SD.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    HD(!0)
                  },
                  children: fD("worldSocial:moreRequests", {
                    count: ZD.requests.length - 1
                  })
                })]
              })
            }), (0, SD.jsx)("div", {
              className: "PlayerRows",
              children: tC.map(((DD, CD) => (0, SD.jsx)(nC, {
                zIndex: tC.length - CD,
                player: DD,
                actions: (0, SD.jsxs)(SD.Fragment, {
                  children: [(0, SD.jsx)(ED.f, {
                    tooltipInner: (0, SD.jsx)(SD.Fragment, {
                      children: fD("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, SD.jsx)(MD.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${fD("general:accept")} ${DD.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, AD.c)(DD.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, SD.jsx)(oD.c, {
                        name: "check"
                      })
                    })
                  }), (0, SD.jsx)(ED.f, {
                    tooltipInner: (0, SD.jsx)(SD.Fragment, {
                      children: fD("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, SD.jsx)(MD.k, {
                      className: "FriendRequestButton",
                      ariaLabel: `${fD("general:decline")} ${DD.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, AD.c)(DD.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, SD.jsx)(oD.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${DD.name}`)))
            })]
          }), (0, SD.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, SD.jsx)(eD.d, {
              label: (0, SD.jsxs)(SD.Fragment, {
                children: [(0, SD.jsx)(oD.c, {
                  name: DC.d
                }), " ", fD("socialBar:friends")]
              }),
              meta: ZD.loaded && !LD ? ZD.friends.length : void 0
            }), (0, SD.jsx)(xC, {
              Jm: DD => XC(DD, "field")
            }), pC && (0, SD.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, SD.jsx)(xD.e, {})
            }), !pC && (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsxs)("div", {
                className: "PlayerRows",
                children: [SC.map(((DD, CD) => (0, SD.jsx)(nC, {
                  zIndex: MC - CD,
                  player: mC(DD, null),
                  status: fD("worldSocial:requestSent"),
                  wy: NC(DD)
                }, `request:${DD}`))), !LD && JD.map(((DD, CD) => (0, SD.jsx)(OC, {
                  zIndex: yC - CD,
                  row: DD,
                  wy: NC(DD.friend.name),
                  canInvite: QC(QD) && "here" !== DD.place,
                  invited: mD.includes(DD.friend.name),
                  onInvite: () => {
                    gC(DD.friend.name)
                  }
                }, DD.friend.name))), ZD.loaded && 0 === ZD.friends.length && (0, SD.jsx)(HC, {
                  playersHere: KD,
                  exclude: gD,
                  Jm: DD => XC(DD, "suggestion")
                })]
              }), lD && ZD.loaded && 0 === ZD.friends.length && 0 === SC.length && (0, SD.jsx)("div", {
                className: "WorldSocialEmpty",
                children: fD("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var sC = cD(2388),
      EC = cD(2361);

    function eC(DD) {
      let {
        show: CD,
        onClose: cD,
        option: ID
      } = DD;
      const iD = (0, UD.g)("connectedGame", (DD => (0, sC.b)(DD) ? DD.lobbyName : null));
      return function(DD) {
        const {
          gameEntrySource: CD,
          loadingOverlayVisible: cD
        } = (0, GD.o)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: ID
        } = (0, nD.c)(), iD = (0, UD.h)("localPlayerAlive"), fD = (0, UD.g)("players", (DD => null !== DD.localId && void 0 !== DD.byId[DD.localId])), bD = (0, EC.h)(), QD = (0, pD.useRef)(null), wD = (0, pD.useRef)(null), SD = "worldCreation" === CD, BD = ID.whamm, yD = ID.getPersonalWorldLobbyName();
        (0, pD.useEffect)((() => {
          var CD;
          null !== DD && (null === (CD = wD.current) || void 0 === CD ? void 0 : CD.lobbyName) !== DD && null !== AC(DD, SD, BD, yD) && (wD.current = pC(DD))
        }), [SD, DD, BD, yD]), (0, pD.useEffect)((() => {
          if (null !== DD && (!cD && iD && fD)) return bD.whenShown((() => {
            var CD;
            const cD = QD.current === DD ? null : AC(DD, SD, BD, yD);
            if (null === cD) return;
            const ID = (null === (CD = wD.current) || void 0 === CD ? void 0 : CD.lobbyName) === DD ? wD.current : pC(DD);
            wD.current = null, QD.current = DD,
              function(DD, CD, cD, ID) {
                const {
                  lobbyName: pD
                } = DD, iD = () => {
                  ! function(DD, CD) {
                    if (!Ic()) return void CD(!0);
                    const cD = performance.now() + Cc;
                    let ID = 0;
                    const pD = () => {
                      ID = Ic() ? 0 : ID + 1, ID >= 2 ? CD(!0) : !cc(DD) || performance.now() > cD ? CD(!1) : setTimeout(pD, Dc)
                    };
                    setTimeout(pD, Dc)
                  }(pD, (iD => {
                    ID();
                    const fD = "auto_existing" === CD && kC(cD);
                    iD && cc(pD) && !hC(pD) && !fD && (FC(DD) ? rC(pD) : (rC(pD), dC(cD), function(DD) {
                      const CD = zC.b.world_social_popup_v1;
                      return (0, zC.k)("world_social_popup_v1"), (0, cC.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${CD}:${(0,VC.e)()}:${DD}`
                      }), (0, aC.flushClientAnalyticsEvents)(), "auto_open" === CD
                    }(CD) && (! function(DD) {
                      iC.set(DD.lobbyName, DD)
                    }(DD), tD.i.Uo("toggleMenu", `inviteLink|${CD}`), "inviteLink" !== GD.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === CD && !FC(DD)) return void iD();
                DD.response.then((DD => {
                  if (!("error" in DD)) return DD.settings.canManage ? void iD() : (rC(pD), void ID());
                  ID()
                }))
              }(ID, cD, BD, (() => {
                QD.current === DD && (QD.current = null)
              }))
          }))
        }), [bD, SD, cD, DD, iD, fD, BD, yD])
      }(iD), (0, pD.useEffect)((() => {
        CD && null !== iD && rC(iD)
      }), [CD, iD]), null !== iD ? (0, SD.jsx)(YC, {
        show: CD,
        onClose: cD,
        opener: LC(ID) ? ID : "icon"
      }) : (0, SD.jsx)(dD.d, {
        show: CD,
        onClose: cD
      })
    }
    const uC = new Set;

    function hC(DD) {
      return uC.has(DD) || !!VD.j.getItem(`worldSocialShown:${DD}`)
    }

    function rC(DD) {
      uC.add(DD), VD.j.setItem(`worldSocialShown:${DD}`, !0)
    }

    function AC(DD, CD, cD, ID) {
      return hC(DD) ? null : function(DD) {
        let {
          justMade: CD,
          playerId: cD,
          lobbyName: ID,
          personalWorld: pD
        } = DD;
        return CD ? "auto" : !kC(cD) && TC(ID, pD) ? "auto_existing" : null
      }({
        justMade: CD,
        playerId: cD,
        lobbyName: DD,
        personalWorld: ID
      })
    }

    function FC(DD) {
      let {
        answer: CD
      } = DD;
      return null !== CD && "settings" in CD && !CD.settings.canManage
    }
    const Dc = 500,
      Cc = 3e4;

    function cc(DD) {
      return "inGame" === GD.d.get("gameState") && wD.gameBridge.latest("connectedGame").lobbyName === DD
    }

    function Ic() {
      return (0, kD.g)() || GD.d.get("loadingOverlayVisible") || (0, RD.s)()
    }
    var pc = cD(36107),
      ic = cD(2948),
      fc = cD(1961),
      bc = cD(2946);

    function Qc(DD, CD, cD) {
      return bc.e.overridesTexture(DD) ? bc.e.getTexture(DD, CD).url : cD
    }
    var wc = cD(9889);
    const Sc = (DD, CD) => {
        (0, pD.useEffect)((() => {
          setTimeout((() => {
            DD && DD.current && DD.current.focus()
          }), 1)
        }), [CD])
      },
      Bc = (0, pD.memo)((function(DD) {
        let {
          isInputActive: CD,
          onClose: cD,
          onChange: ID,
          textAreaRef: pD,
          fontSize: iD,
          lineHeight: fD,
          currText: bD
        } = DD;
        return (0, SD.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, SD.jsx)("img", {
            src: Qc("board_full", ic.m.BLOCK, wc),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, SD.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: bD,
            ref: pD,
            style: {
              fontSize: `${iD}rem`,
              lineHeight: `${fD}rem`
            },
            onKeyDown: DD => {
              var CD;
              "Escape" !== DD.key && (DD.stopPropagation(), "Tab" === DD.key && function(DD) {
                DD.preventDefault();
                const CD = DD.target,
                  {
                    value: cD
                  } = CD;
                let ID = CD.selectionStart,
                  pD = CD.selectionEnd,
                  iD = cD.slice(ID, pD);
                if (!iD.includes("\n") && !DD.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; ID > 0 && "\n" !== cD[ID - 1];) ID--;
                const fD = "\n" === cD[pD - 1];
                fD && pD--;
                iD = cD.slice(ID, pD);
                const bD = iD.split("\n").map((CD => DD.shiftKey ? CD.replace(/^\t/, "") : "\t" + CD)).join("\n");
                if (DD.shiftKey && cD.slice(ID, pD) === bD) return;
                let {
                  selectionStart: QD
                } = CD;
                CD.setSelectionRange(ID, pD), QD > ID && (!DD.shiftKey || "\t" === iD[0]) && (QD += DD.shiftKey ? -1 : 1);
                pD = ID + bD.length + (fD ? 1 : 0), document.execCommand("insertText", !1, bD), CD.setSelectionRange(QD, pD)
              }(DD), /^F\d+$/i.test(DD.code) && null !== (CD = fc.q.OpenCodeEditor) && void 0 !== CD && CD.includes(DD.code) && cD())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: ID
          })]
        })
      }));

    function yc(DD) {
      return 1.3 * DD
    }
    var Mc = cD(1660);
    const tc = (0, pD.memo)((function(DD) {
        let {
          show: CD,
          onOpen: cD,
          onClose: ID
        } = DD;
        const [iD, bD] = (0, pD.useState)(null), [QD, BD] = (0, pD.useState)(""), [yD, tD] = (0, pD.useState)(0), [ZD, oD] = (0, pD.useState)(null), [vD, ND] = (0, pD.useState)({
          text: "",
          textSize: 0
        }), gD = (DD, CD) => ZD ? (0, pc.n)(DD, CD, ZD.width, ZD.height) : (0, pc.g)(DD, CD), XD = DD => {
          BD(gD(QD, DD)), tD(DD), VD.h.setItem("lastBoardTextSize", DD)
        }, mD = () => {
          ID(), ZD && QD === vD.text && yD === vD.textSize || wD.gameBridge.send("writeOnBoard", {
            pos: iD,
            text: QD,
            textSize: yD
          })
        };
        (0, UD.c)("boardEditRequested", (DD => {
          var pD, iD;
          if (!aD.featureFlags.canSeePlayerWrittenText) return;
          if (null === DD) return bD(null), void(CD && ID());
          const {
            pos: fD,
            noticeboardSpan: QD,
            text: wD
          } = DD;
          bD(fD), oD(QD), BD(wD);
          const SD = null !== (pD = null !== (iD = DD.textSize) && void 0 !== iD ? iD : VD.h.getItem("lastBoardTextSize")) && void 0 !== pD ? pD : 0;
          tD(SD), ND({
            text: wD,
            textSize: SD
          }), VD.h.setItem("lastBoardTextSize", SD), cD()
        }));
        const nD = (0, pD.useRef)(null);
        Sc(nD, CD), (0, Mc.w)(nD, {
          kind: "sign",
          submit: mD
        });
        const OD = function(DD, CD) {
            const cD = pc.e[DD];
            if (!CD) return cD.uiFontSize;
            const {
              numLines: ID,
              charsPerLine: pD
            } = (0, pc.t)(CD.width, CD.height, DD);
            return cD.uiFontSize * Math.min(cD.charsPerLine / pD, cD.numLines / ID)
          }(yD, ZD),
          PD = yc(OD);
        return (0, SD.jsxs)(fD.e, {
          className: "WriteOnBoardBg",
          close: mD,
          escDoesExit: !0,
          show: CD,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, SD.jsx)(Bc, {
            isInputActive: () => CD,
            onClose: mD,
            onChange: DD => {
              BD(gD(DD.target.value, yD))
            },
            textAreaRef: nD,
            fontSize: OD,
            lineHeight: PD,
            currText: QD
          }), (0, SD.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, SD.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, SD.jsx)(MD.i, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                XD(0)
              },
              disabled: 0 === yD,
              children: "Small"
            }), (0, SD.jsx)(MD.i, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                XD(1)
              },
              disabled: 1 === yD,
              children: "Medium"
            }), (0, SD.jsx)(MD.i, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                XD(2)
              },
              disabled: 2 === yD,
              children: "Large"
            })]
          })]
        })
      })),
      Zc = (0, pD.memo)((function(DD) {
        let {
          show: CD,
          onOpen: cD,
          onClose: ID
        } = DD;
        const [iD, bD] = (0, pD.useState)(""), QD = () => {
          ID(), wD.gameBridge.send("writeNameTag", iD)
        };
        (0, PD.f)("EditNameTag", (DD => {
          aD.featureFlags.canSeePlayerWrittenText && null !== DD && (bD(DD), cD())
        }));
        const BD = (0, pD.useRef)(null);
        Sc(BD, CD), (0, Mc.w)(BD, {
          kind: "nameTag",
          submit: QD
        });
        const yD = pc.D.nameTag.uiFontSize,
          tD = yc(yD);
        return (0, SD.jsxs)(fD.e, {
          className: "WriteOnBoardBg",
          close: QD,
          escDoesExit: !0,
          show: CD,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, SD.jsx)("div", {
            className: "NameTagTrim",
            children: (0, SD.jsx)(Bc, {
              isInputActive: () => CD,
              onClose: QD,
              onChange: DD => {
                const CD = DD.target.value.replaceAll("\n", "");
                bD((0, pc.o)(CD, "nameTag"))
              },
              textAreaRef: BD,
              fontSize: yD,
              lineHeight: tD,
              currText: iD
            })
          }), (0, SD.jsx)(MD.i, {
            onClick: QD,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var oc = cD(18008);
    const vc = (0, pD.memo)((function(DD) {
      let {
        show: CD,
        onOpen: cD,
        onClose: ID
      } = DD;
      const [iD, bD] = (0, pD.useState)(""), [QD, BD] = (0, pD.useState)(0), [yD, tD] = (0, pD.useState)(!1), [ZD, oD] = (0, pD.useState)(["", "", "", "", "", "", "", "", "", ""]), [vD, ND] = (0, pD.useState)("Title"), [gD, XD] = (0, pD.useState)(!0), [mD, nD] = (0, pD.useState)(!1);
      (0, PD.f)("EditBook", (DD => {
        let {
          pages: CD,
          title: ID,
          isPublished: pD
        } = DD;
        var iD;
        aD.featureFlags.canSeePlayerWrittenText && (null !== CD ? (oD(CD), bD(null !== (iD = CD[0]) && void 0 !== iD ? iD : ""), ND(ID), BD(0), tD(!1), XD(!pD), nD(!1), cD()) : oD(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const OD = (0, pD.useRef)(null),
        HD = (0, pD.useRef)(null);
      Sc(OD, CD), (0, Mc.w)(OD, {
        kind: "book"
      }), (0, Mc.w)(HD, {
        kind: "Vb"
      });
      const UD = pc.D.book.uiFontSize,
        xD = yc(UD),
        qD = () => {
          (gD || mD) && wD.gameBridge.send("writeBook", {
            pages: [...ZD],
            title: vD,
            published: !gD && mD
          })
        },
        JD = DD => {
          yD && (ZD[QD] = iD, tD(!1)), bD(ZD[DD]), BD(DD)
        };
      return (0, SD.jsxs)(fD.e, {
        className: "WriteOnBoardBg",
        close: () => {
          ID(), ZD[QD] = iD, qD()
        },
        escDoesExit: !0,
        show: CD,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, SD.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, SD.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: vD,
            ref: HD,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${xD}rem`
            },
            onKeyDown: DD => {
              gD && DD.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: DD => {
              let CD = DD.target.value;
              CD = (0, pc.o)(CD, "Vb"), ND(CD)
            },
            readOnly: !gD
          }), (0, SD.jsx)("img", {
            src: Qc("book_page", ic.m.ITEM, oc),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, SD.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, SD.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: iD,
              ref: OD,
              style: {
                fontSize: `${UD}rem`,
                lineHeight: `${xD}rem`
              },
              onKeyDown: DD => {
                gD && DD.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: DD => {
                const CD = DD.target.value;
                bD((0, pc.o)(CD, "book")), tD(!0)
              },
              readOnly: !gD
            })
          })]
        }), (0, SD.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, SD.jsx)(MD.i, {
            disabled: 0 === QD,
            onClick: () => {
              JD(QD - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, SD.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, SD.jsx)(MD.i, {
            disabled: 9 === QD,
            onClick: () => {
              JD(QD + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, SD.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, SD.jsx)(MD.i, {
            onClick: () => {
              XD(!gD), nD(!0)
            },
            className: "BookNavButton",
            children: gD ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var Nc = cD(36002),
      gc = cD(8363),
      Xc = cD(1388),
      mc = cD(1893);

    function nc(DD) {
      let {
        show: CD,
        buttons: cD
      } = DD;
      const {
        t: ID
      } = (0, uD.F)(), iD = (0, pD.useRef)(null);
      return (0, pD.useEffect)((() => {
        var DD, cD;
        const ID = CD ? (0, Nc.C)() : null;
        if (!ID || !(0, Xc.e)()) return;
        const pD = (0, Nc.l)().findIndex((DD => DD.id === ID));
        (0, gc.p)(null !== (DD = null === (cD = iD.current) || void 0 === cD ? void 0 : cD.children[pD]) && void 0 !== DD ? DD : null)
      }), [CD]), 0 === cD.length ? null : (0, SD.jsx)("div", {
        ref: iD,
        className: "ClientGameInventoryButtons",
        onPointerDown: DD => {
          DD.stopPropagation()
        },
        onPointerUp: DD => {
          DD.stopPropagation()
        },
        children: cD.map((DD => {
          const CD = ID(DD.labelKey);
          return (0, SD.jsxs)(MD.o, {
            className: DD.className,
            disabled: DD.disabled,
            onClick: () => {
              (0, Nc.t)(DD)
            },
            ariaLabel: DD.iconOnly ? CD : void 0,
            title: DD.iconOnly ? CD : void 0,
            children: [DD.icon && (0, SD.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === DD.icon.kind && (0, SD.jsx)(mc.d, {
                itemName: DD.icon.name,
                amount: 0
              }), "image" === DD.icon.kind && (0, SD.jsx)("img", {
                src: DD.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === DD.icon.kind && (0, SD.jsx)(oD.c, {
                name: DD.icon.name
              })]
            }), !DD.iconOnly && CD]
          }, DD.id)
        }))
      })
    }
    var Oc = cD(36113),
      Pc = cD(2619),
      Hc = cD(9057),
      Uc = cD(35937),
      xc = cD(35932);
    let qc = null;
    window.setShowInventoryAdsOverride = DD => {
      qc = DD
    };
    const Jc = 24e4;
    var Kc = cD(1896);

    function ac(DD) {
      var CD;
      let {
        draggedInfo: {
          name: cD,
          attributes: ID,
          amount: pD
        },
        toAddRef: iD
      } = DD;
      return (0, SD.jsx)("div", {
        className: "DraggedInvenItem",
        ref: iD,
        children: (0, SD.jsx)(mc.d, {
          itemName: cD,
          amount: pD,
          enchantmentTier: null === ID || void 0 === ID || null === (CD = ID.customAttributes) || void 0 === CD ? void 0 : CD.enchantmentTier,
          bar: (0, Kc.h)(ID)
        })
      })
    }

    function Vc(DD) {
      let {
        className: CD = "",
        displayInfo: cD,
        domRef: ID
      } = DD;
      return (0, SD.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${CD}`,
        ref: ID,
        children: [(0, SD.jsx)(OD.c, {
          text: (0, HD.tb)(cD.name, {
            fontStyle: cD.fontStyle
          })
        }), (0, SD.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, SD.jsx)(OD.c, {
            text: cD.desc
          })
        })]
      })
    }

    function zc(DD) {
      let {
        info: CD,
        draggedInfo: cD
      } = DD;
      const ID = (0, pD.useRef)(null);
      return (0, pD.useLayoutEffect)((() => {
        const DD = ID.current,
          {
            left: cD,
            top: pD
          } = function(DD, CD, cD, ID) {
            const pD = ID.left * cD.width / 100 + 4,
              iD = cD.width - ID.right * cD.width / 100 - 4 - CD.width,
              fD = ID.top * cD.height / 100 + 4,
              bD = cD.height - 4 - CD.height;
            return {
              left: Math.max(pD, Math.min(DD.x - CD.width / 2, iD)),
              top: Math.max(fD, Math.min(DD.y - 48 - CD.height, bD))
            }
          }({
            x: CD.initTouchX,
            y: CD.initTouchY
          }, {
            width: DD.offsetWidth,
            height: DD.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, GD.d.get("notchSize"));
        DD.style.left = `${cD}px`, DD.style.top = `${pD}px`
      }), [CD]), (0, SD.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: ID,
        children: [(0, SD.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: cD.amount / CD.maxAmount * 100 + "%"
          }
        }), (0, SD.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [cD.amount, "/", CD.maxAmount]
        })]
      })
    }
    var jc = cD(194);
    const lc = (0, pD.memo)((function(DD) {
      let {
        show: CD,
        onOpen: cD,
        onClose: ID
      } = DD;
      const iD = (0, pD.useRef)({
          pos: null
        }),
        [bD, QD] = (0, pD.useState)([0, 0, 0, 0]),
        {
          userContext: BD
        } = (0, nD.c)();
      (0, UD.c)("ironChestOpenRequested", (DD => {
        let {
          pos: CD,
          ownerDbId: ID,
          cachedPasskey: pD
        } = DD;
        if (iD.current.pos = CD, ID !== BD.whamm) return null !== pD ? (QD(pD), void yD(pD)) : void cD();
        yD(bD)
      })), (0, UD.c)("localEffectUpdated", (DD => {
        "Thief" === DD && ID()
      }));
      const yD = DD => {
        const {
          pos: CD
        } = iD.current;
        wD.gameBridge.send("openIronChest", {
          pos: CD,
          Lw: DD
        })
      };
      return (0, SD.jsx)(fD.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: ID,
        escDoesExit: !0,
        show: CD,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, SD.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, SD.jsx)(Lc, {
            Lw: bD,
            onPasskeyUpdated: QD,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              yD(bD)
            }
          })
        })
      })
    }));

    function Lc(DD) {
      let {
        className: CD = "",
        Lw: cD,
        onPasskeyUpdated: ID,
        confirmText: pD,
        onConfirm: iD
      } = DD;
      const {
        t: fD
      } = (0, uD.F)();
      return (0, SD.jsxs)("div", {
        className: `${CD} IronChestPasskeyInput`,
        children: [(0, SD.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: fD("ironChest:passkeyInputTitle")
        }), (0, SD.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(jc.h.ironChestPasskeyLength).fill(0).map(((DD, CD) => (0, SD.jsx)(Tc, {
            digit: cD[CD],
            onPasskeyDigitUpdated: DD => {
              const pD = [...cD];
              pD[CD] = DD, ID(pD)
            }
          }, CD)))
        }), (0, SD.jsx)(MD.o, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: iD,
          children: fD(pD)
        })]
      })
    }

    function Tc(DD) {
      let {
        digit: CD,
        onPasskeyDigitUpdated: cD
      } = DD;
      return (0, SD.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, SD.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, SD.jsx)(MD.o, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              cD(HD.e.mod(CD + 1, 10))
            },
            children: (0, SD.jsx)(oD.c, {
              name: "angle-up"
            })
          }), (0, SD.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: CD
          }), (0, SD.jsx)(MD.o, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              cD(HD.e.mod(CD - 1, 10))
            },
            children: (0, SD.jsx)(oD.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Gc = cD(9050),
      Rc = cD(36149),
      kc = cD(35929);

    function dc(DD) {
      let {
        specialItemInfo: CD,
        setHovered: cD,
        pointerDown: ID,
        pointerUp: iD,
        enchantingTablePosition: fD,
        enchantingTableBlockName: bD
      } = DD;
      const {
        t: BD
      } = (0, uD.F)(), [yD, tD] = (0, pD.useState)(null), [ZD, oD] = (0, pD.useState)(null), vD = (0, QD.h)("auraPerLevel"), ND = Math.floor((0, UD.h)("aura") / vD);
      (0, pD.useEffect)((() => {
        if (!CD) return void tD(null);
        let DD = !0;
        return wD.gameBridge.query("enchantingOffer", {
          slot: CD.idx,
          name: CD.name,
          blockName: bD
        }).then((cD => {
          var ID, pD;
          let {
            perks: iD,
            options: fD
          } = cD;
          if (!DD) return;
          const bD = {
            isEnchantable: iD.length > 0,
            possibleEnchantments: iD,
            options: fD.map((DD => {
              let {
                level: CD,
                odds: cD
              } = DD;
              return {
                level: CD,
                possibilities: Object.fromEntries(cD.map(((DD, CD) => [`Tier ${CD+1}`, DD])))
              }
            })),
            isAlreadyEnchanted: iD.length > 0 && void 0 !== (null === (ID = CD.attributes) || void 0 === ID || null === (pD = ID.customAttributes) || void 0 === pD ? void 0 : pD.enchantmentTier)
          };
          tD(bD), (DD => {
            const CD = DD.options.map((DD => Object.entries(DD.possibilities).map((DD => {
              let [CD, cD] = DD;
              return {
                str: `${CD}: ${cD>0?cD<.01?cD.toPrecision(1):cD.toFixed(2):0}%\n`,
                style: {
                  color: HD.lb[CD]
                }
              }
            }))));
            oD(CD)
          })(bD)
        })), () => {
          DD = !1
        }
      }), [CD, fD, bD]);
      const gD = [];
      for (let pD = 0; pD < Rc.b; pD++) {
        const DD = null === yD || void 0 === yD ? void 0 : yD.options[pD],
          ID = !DD || DD.level > ND;
        gD.push((0, SD.jsx)(MD.i, {
          className: "EnchantmentButton",
          onPointerEnter: DD ? DD => null === cD || void 0 === cD ? void 0 : cD()(!0, {
            name: "",
            desc: ZD[pD]
          }, DD) : void 0,
          onPointerLeave: DD ? () => null === cD || void 0 === cD ? void 0 : cD()(!1) : void 0,
          onClick: ID ? void 0 : () => {
            wD.gameBridge.send("enchantItem", {
              slot: CD.idx,
              level: DD.level,
              tablePos: fD
            }), tD(null)
          },
          disabled: ID,
          children: DD ? (0, SD.jsxs)(SD.Fragment, {
            children: [(0, SD.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, SD.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [BD("enchantments:cost"), ": "]
              }), " ", BD("enchantments:levels", {
                level: DD.level
              })]
            }), (0, SD.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, SD.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, SD.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: BD("enchantments:tier")
                }), Object.entries(DD.possibilities).map((DD => {
                  let [CD, cD] = DD;
                  return 0 === cD ? null : (0, SD.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: HD.lb[CD]
                    },
                    children: CD
                  }, CD)
                }))]
              }), (0, SD.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, SD.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: BD("enchantments:odds")
                }), Object.entries(DD.possibilities).map((DD => {
                  let [CD, cD] = DD;
                  return 0 === cD ? null : (0, SD.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: HD.lb[CD]
                    },
                    children: [cD > 0 && cD < .1 ? "<0.1" : cD.toFixed(0 < cD && cD < .95 ? 1 : 0), "%"]
                  }, CD)
                }))]
              })]
            })]
          }) : !1 === (null === yD || void 0 === yD ? void 0 : yD.isEnchantable) ? (0, SD.jsx)("h1", {
            className: "EnchantmentLevels",
            children: BD("enchantments:notEnchantable")
          }) : (0, SD.jsx)("h1", {
            className: "EnchantmentLevels",
            children: BD("enchantments:enterItem")
          })
        }, pD))
      }
      return (0, SD.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, SD.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: bD
        }), (0, SD.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, SD.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, SD.jsx)(kc.c, {
              idx: xc.c,
              setHovered: DD => {
                null === cD || void 0 === cD || cD(xc.c)(DD)
              },
              pointerDown: ID,
              pointerUp: iD,
              draggedInfo: null,
              specialItemInfo: CD,
              variation: "Enchanting Table"
            }), yD && yD.possibleEnchantments.length > 0 && (0, SD.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, SD.jsx)("h2", {
                children: "Possible Perks:"
              }), yD.possibleEnchantments.map((DD => (0, SD.jsxs)(pD.Fragment, {
                children: [(0, SD.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, SD.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, SD.jsx)(mc.d, {
                      itemName: `${DD} Enchantment`,
                      amount: 1
                    })
                  }), (0, SD.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: DD
                  })]
                }), (0, SD.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: BD((0, Gc.j)(DD).translationKey)
                })]
              }, DD)))]
            })]
          }), (0, SD.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [yD && yD.isAlreadyEnchanted && (0, SD.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: BD("enchantments:alreadyEnchanted")
            }), gD]
          })]
        })]
      })
    }
    var Yc = cD(36156);

    function Wc(DD) {
      var CD;
      let {
        specialItemInfo: cD,
        setSpecialItemInfo: ID,
        setHovered: iD,
        pointerDown: fD,
        pointerUp: bD
      } = DD;
      const {
        t: QD
      } = (0, uD.F)(), BD = (0, UD.g)("inventory", (DD => DD.freeSlots)), [yD, tD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        if (cD) {
          const DD = (0, Yc.b)(cD.name, cD.amount);
          tD({
            salvageable: !!DD,
            produces: DD
          })
        } else tD(null)
      }), [cD, null === cD || void 0 === cD ? void 0 : cD.name, null === cD || void 0 === cD ? void 0 : cD.amount]);
      const ZD = !!cD && !(null === yD || void 0 === yD || !yD.salvageable) && !(null !== (CD = yD.produces) && void 0 !== CD && CD.some((DD => {
        let {
          amt: CD
        } = DD;
        return CD < 1
      })));
      return (0, SD.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, SD.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: QD("item:salvagingTable")
        }), (0, SD.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, SD.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, SD.jsx)(kc.c, {
              idx: xc.c,
              setHovered: DD => {
                null === iD || void 0 === iD || iD(xc.c)(DD)
              },
              pointerDown: fD,
              pointerUp: bD,
              draggedInfo: null,
              specialItemInfo: cD,
              variation: "Salvaging Table"
            })
          }), (0, SD.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, SD.jsx)(MD.i, {
              className: "SalvageButton",
              onClick: ZD ? () => {
                const {
                  idx: DD,
                  name: CD,
                  amount: pD
                } = cD;
                wD.gameBridge.send("salvageItem", {
                  slot: DD,
                  name: CD,
                  amount: pD
                }) && (tD(null), ID(null))
              } : void 0,
              disabled: !ZD,
              children: yD ? yD.salvageable ? yD.produces.some((DD => {
                let {
                  amt: CD
                } = DD;
                return CD < 1
              })) ? (0, SD.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, SD.jsx)("div", {
                  className: "SalvageText Error",
                  children: QD("salvagingTable:notEnoughResources")
                })
              }) : BD < yD.produces.length ? (0, SD.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, SD.jsx)("div", {
                  className: "SalvageText Error",
                  children: QD("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, SD.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, SD.jsx)("div", {
                  className: "SalvageText",
                  children: QD("salvagingTable:salvage")
                }), (0, SD.jsx)("div", {
                  className: "SalvageIcons",
                  children: yD.produces.map(((DD, CD) => {
                    let {
                      item: cD,
                      amt: ID
                    } = DD;
                    return (0, SD.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: cD,
                        amount: Math.floor(ID)
                      })
                    }, CD)
                  }))
                })]
              }) : (0, SD.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, SD.jsx)("div", {
                  className: "SalvageText Error",
                  children: QD("salvagingTable:unsalvageable")
                })
              }) : (0, SD.jsx)(SD.Fragment, {})
            })
          })]
        })]
      })
    }
    var sc = cD(208),
      Ec = cD(9141),
      ec = cD(2587),
      uc = cD(8372),
      hc = cD(8369),
      rc = cD(1645),
      Ac = cD(1972),
      Fc = cD(1403),
      DI = cD(2039);

    function CI(DD, CD, cD) {
      const ID = DD.trim().toLowerCase();
      if ("" === ID) return 0;
      let pD = null;
      for (const iD of CD) {
        const DD = iD.toLowerCase().indexOf(ID);
        if (0 === DD) return 0;
        DD > 0 && (pD = 1)
      }
      if (null !== pD) return pD;
      for (const iD of cD)
        if (iD.toLowerCase().includes(ID)) return 2;
      return null
    }

    function cI(DD) {
      return DD.map((DD => {
        var CD;
        return DD ? {
          name: DD.name,
          amount: null !== (CD = DD.amount) && void 0 !== CD ? CD : 1
        } : null
      }))
    }

    function II(DD) {
      return DD < 1e3 ? `${DD}` : DD < 1e4 ? Math.floor(DD / 100) / 10 + "k" : `${Math.floor(DD/1e3)}k`
    }
    var pI = cD(36161);
    const iI = MD.i,
      fI = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      bI = () => {
        const DD = (0, Fc.d)();
        return DD ? DD.getPadRepeatTiming(fI) : fI
      };

    function QI(DD, CD, cD) {
      var ID, pD;
      const iD = (0, Hc.t)(CD, DD);
      let fD = null === (ID = CD[DD]) || void 0 === ID ? void 0 : ID.description;
      if (cD && (null === (pD = (0, pI.g)().get(DD)) || void 0 === pD || !pD.hideIngredients)) {
        fD ? (fD = (0, HD.tb)(fD), fD.push({
          str: "\n"
        })) : fD = [], fD.push({
          str: "\n"
        }), fD.push({
          str: "Can be crafted from:\n"
        });
        for (const DD of cD) "string" === typeof DD && (fD.push({
          icon: DD,
          style: {
            fontSize: "1.5em"
          }
        }), fD.push({
          str: " "
        }), fD.push(...(0, HD.tb)((0, Hc.t)(CD, DD))), fD.push({
          str: "\n"
        }))
      }
      return {
        name: iD,
        desc: fD
      }
    }

    function wI(DD) {
      let {
        name: CD,
        xS: cD
      } = DD;
      return `${CD}_${cD}`
    }

    function SI(DD) {
      var CD;
      let {
        onClick: cD,
        itemName: ID,
        recipeId: iD,
        isSelected: fD,
        haveIngredients: bD,
        craftable: QD,
        setHovered: wD,
        padActions: BD,
        marked: yD,
        lock: MD,
        itemInfo: tD
      } = DD;
      const ZD = (0, pD.useRef)(null);
      return (0, uc.f)(ZD, {
        press: DD => !bD || "secondary" === DD && !QD ? (BD.refuse(), !1) : "primary" === DD ? (BD.choose(), !0) : BD.craft(),
        release: BD.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, SD.jsxs)("div", {
        ref: ZD,
        className: MC()("InvenItem", {
          CraftableItemNotEnoughIngredients: !bD && !MD,
          CraftableItemMarked: yD,
          CraftableItemLocked: void 0 !== MD,
          CraftableItemLockedFar: (null !== (CD = null === MD || void 0 === MD ? void 0 : MD.stepsAway) && void 0 !== CD ? CD : 1) > 1
        }),
        "data-recipe-key": iD,
        "data-pad-inventory-default": fD ? "" : void 0,
        onClick: cD,
        style: {
          cursor: fD ? null : "pointer"
        },
        onPointerEnter: DD => {
          null === wD || void 0 === wD || wD(!0, QI(ID, tD)), !fD && (0, rc.t)(DD.nativeEvent) && (0, hc.h)() && cD()
        },
        onPointerLeave: () => {
          null === wD || void 0 === wD || wD(!1)
        },
        children: [(0, SD.jsx)(mc.d, {
          itemName: ID,
          amount: 1
        }), yD && (0, SD.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), MD && (0, SD.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, SD.jsx)(oD.c, {
            name: "lock"
          }), (0, SD.jsx)(OD.c, {
            text: MD.tag
          })]
        })]
      })
    }

    function BI(DD) {
      let {
        idx: CD,
        status: cD,
        shownItem: ID,
        dim: iD,
        onHoverStart: fD,
        onHoverEnd: bD,
        onPadBack: QD
      } = DD;
      const wD = (0, pD.useRef)(null);
      (0, uc.f)(wD, {
        press: () => !1,
        back: QD,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const BD = cD.need > 0 ? Math.min(cD.have / cD.need, 1) : 1;
      return (0, SD.jsxs)("div", {
        ref: wD,
        className: MC()("CupTile", {
          Short: cD.missing > 0
        }),
        style: {
          width: iD,
          height: iD
        },
        "data-craft-ingredient": CD,
        onPointerEnter: fD,
        onPointerLeave: bD,
        children: [(0, SD.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${BD})`
          }
        }), (0, SD.jsx)(mc.d, {
          itemName: ID,
          amount: 0
        }), (0, SD.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [II(cD.have), "/", II(cD.need)]
        })]
      })
    }

    function yI(DD) {
      var CD, cD, ID, iD, fD;
      let {
        show: bD,
        recipeItem: {
          name: QD,
          xS: BD,
          requires: yD,
          produces: MD,
          haveIngredients: tD
        },
        detail: ZD,
        onCraft: oD,
        setHovered: vD,
        craftButtonRef: ND,
        onPadBack: gD,
        showPadShortcut: XD,
        refusedCount: mD,
        lock: nD,
        itemInfo: PD
      } = DD;
      const {
        t: HD
      } = (0, uD.F)(), UD = null !== ZD && !ZD.roomForOne, xD = null !== (CD = null === ZD || void 0 === ZD ? void 0 : ZD.craftAllTimes) && void 0 !== CD ? CD : 0, qD = function(DD, CD) {
        return DD.map((DD => {
          let {
            items: cD,
            amt: ID
          } = DD, pD = 0;
          const iD = [];
          for (const fD of cD) {
            const DD = CD(fD);
            pD += DD, DD > 0 && iD.push(fD)
          }
          return 0 === iD.length && iD.push(cD[0]), {
            shownItems: iD,
            need: ID,
            have: pD,
            missing: Math.max(ID - pD, 0)
          }
        }))
      }(yD, (DD => {
        var CD;
        return null !== (CD = null === ZD || void 0 === ZD ? void 0 : ZD.amounts[DD]) && void 0 !== CD ? CD : 0
      }));
      let JD = "4rem",
        KD = 4;
      3 === yD.length || 4 === yD.length ? JD = "3.75rem" : yD.length >= 5 && (JD = "3rem"), 4 === yD.length ? KD = 2 : yD.length <= 6 && (KD = 3);
      const aD = `calc(${KD} * ${JD} + ${KD-1} * 0.4rem + 1px)`,
        VD = (0, pD.useRef)(null),
        zD = (0, pD.useRef)(null);
      (0, pD.useLayoutEffect)((() => {
        VD.current.scrollTop = 0
      }), [QD, BD]);
      const jD = (0, pD.useRef)(mD);
      (0, pD.useEffect)((() => {
        if (mD === jD.current) return;
        jD.current = mD;
        const DD = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const ID of null !== (CD = null === (cD = VD.current) || void 0 === cD ? void 0 : cD.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== CD ? CD : []) {
          var CD, cD;
          ID.animate(DD, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [mD]);
      const lD = (DD, CD, cD) => {
          var ID;
          if ((0, pI.g)().has(QD)) return void(cD && clearInterval(LD.current));
          const pD = null !== (ID = null === ZD || void 0 === ZD ? void 0 : ZD.resultStackable) && void 0 !== ID && ID,
            iD = cI(wD.gameBridge.latest("inventory").player),
            {
              qS: fD,
              iB: bD,
              amountAddedToSlot: SD
            } = wD.gameBridge.send("craftRecipe", {
              name: QD,
              xS: BD,
              times: CD || DD && pD ? null : 1
            });
          if (fD > 0) {
            const CD = [],
              ID = new Set(yD.flatMap((DD => {
                let {
                  items: CD
                } = DD;
                return CD
              }))),
              fD = function(DD, CD, cD) {
                const ID = [];
                for (let pD = 0; pD < DD.length; pD++) {
                  const iD = DD[pD];
                  if (!iD || !cD.has(iD.name)) continue;
                  const fD = CD[pD],
                    bD = (null === fD || void 0 === fD ? void 0 : fD.name) === iD.name ? fD.amount : 0;
                  bD < iD.amount && ID.push({
                    idx: pD,
                    itemName: iD.name,
                    amount: iD.amount - bD
                  })
                }
                return ID
              }(iD, cI(wD.gameBridge.latest("inventory").player), ID).slice(0, 12),
              BD = cD ? 0 : Math.min(50, 400 / fD.length),
              tD = cD ? 220 : 320;
            for (const DD of fD) {
              var MD;
              const cD = yD.findIndex((CD => {
                  let {
                    items: cD
                  } = CD;
                  return cD.includes(DD.itemName)
                })),
                ID = null === (MD = VD.current) || void 0 === MD ? void 0 : MD.querySelector(`[data-craft-ingredient="${cD}"]`),
                pD = (0, Hc.f)(DD.idx);
              ID && pD && CD.push({
                kind: "ingredient",
                itemName: DD.itemName,
                amount: DD.amount,
                iB: DD.idx,
                from: pD,
                to: (0, Hc.f)(ID),
                delayMs: Math.round(CD.length * BD),
                durationMs: tD
              })
            }
            let ZD;
            if (null !== bD && SD > 0 && zD.current) {
              const DD = CD.length > 0 ? CD[CD.length - 1].delayMs + .6 * tD : 0;
              ZD = {
                itemName: QD,
                amount: SD,
                iB: bD,
                from: (0, Hc.f)(zD.current),
                delayMs: Math.round(DD)
              }
            }
            oD(ZD, DD && !pD ? bD : null, CD), Oc.e.play("wood1", .5).rate(1.75)
          }
        },
        LD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => () => {
        clearInterval(LD.current)
      }), []);
      const TD = (DD, CD) => {
          lD(DD, !1, !1), clearInterval(LD.current), CD && (LD.current = setTimeout((() => {
            LD.current = setInterval((() => {
              lD(DD, !1, !0)
            }), CD.intervalMs)
          }), CD.initialDelayMs))
        },
        GD = () => {
          clearInterval(LD.current)
        },
        RD = !tD || UD || Boolean(nD),
        kD = (0, pD.useRef)(null),
        dD = null !== (cD = null === (ID = (0, DI.e)()) || void 0 === ID ? void 0 : ID.hideButtonHints) && void 0 !== cD && cD,
        YD = null !== (iD = null === (fD = (0, Fc.d)()) || void 0 === fD ? void 0 : fD.getBoundButton("inventorySecondary")) && void 0 !== iD ? iD : null,
        WD = () => !RD && (lD(!1, !0, !1), !0);
      (0, uc.f)(ND, {
        press: DD => "secondary" === DD ? WD() : !RD && (TD(!1, bI()), !0),
        release: GD,
        back: gD,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, uc.f)(kD, {
        press: WD,
        back: gD,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [sD, ED] = (0, pD.useState)(0), [eD, hD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        if (!0 === bD) {
          ED(0);
          const DD = setInterval((() => {
            ED((DD => DD + 1))
          }), 1e3);
          return () => {
            clearInterval(DD)
          }
        }
        return () => {}
      }), [bD]);
      const rD = null === ZD || void 0 === ZD ? void 0 : ZD.ingredientsCraftedFrom,
        AD = (0, pD.useRef)(vD);
      (0, pD.useEffect)((() => {
        AD.current = vD
      }), [vD]);
      const FD = !(null === nD || void 0 === nD || !nD.hideIngredients);
      (0, pD.useEffect)((() => {
        var DD, CD;
        if (!eD) return;
        if (FD) return hD(null), void(null === (CD = AD.current) || void 0 === CD || CD.call(AD, !1));
        const cD = eD[sD % eD.length];
        null === (DD = AD.current) || void 0 === DD || DD.call(AD, !0, QI(cD, PD, null === rD || void 0 === rD ? void 0 : rD[cD]))
      }), [eD, sD, PD, rD, FD]);
      const DC = !!nD,
        CC = (0, pD.useRef)(!1);
      (0, pD.useEffect)((() => {
        var DD;
        DC && (clearInterval(LD.current), FD && CC.current && (CC.current = !1, null === (DD = AD.current) || void 0 === DD || DD.call(AD, !1)))
      }), [DC, FD]);
      const cC = (0, Hc.t)(PD, QD);
      return (0, SD.jsxs)("div", {
        ref: VD,
        className: "CraftableInfo SmallTextBold",
        children: [(0, SD.jsx)("div", {
          className: "CraftableHeader",
          children: (0, SD.jsx)(OD.c, {
            text: cC
          })
        }), !FD && (0, SD.jsx)("div", {
          className: MC()("CraftableIngredients", {
            Compact: yD.length >= 5
          }),
          style: {
            maxWidth: aD
          },
          children: qD.map(((DD, CD) => {
            const cD = DD.shownItems[sD % DD.shownItems.length];
            return (0, SD.jsx)(BI, {
              idx: CD,
              status: DD,
              shownItem: cD,
              dim: JD,
              onHoverStart: () => {
                hD(DD.shownItems)
              },
              onHoverEnd: () => {
                hD(null), null === vD || void 0 === vD || vD(!1)
              },
              onPadBack: gD
            }, CD)
          }))
        }), nD && (0, SD.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, SD.jsx)(OD.c, {
            text: nD.reason
          })
        }), !nD && (!tD || UD) && (0, SD.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!tD && "Missing ingredients", (0, SD.jsx)("br", {}), UD && "Inventory is full"]
        }), !FD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsxs)(iI, {
            ref: ND,
            className: "DoCraftButton",
            onPointerDown: DD => {
              TD((0, Hc.w)(DD), (0, rc.t)(DD.nativeEvent) ? bI() : fI)
            },
            onPointerUp: GD,
            onPointerLeave: GD,
            disabled: RD,
            children: [XD && YD && !RD && !dD && (0, SD.jsx)(Ac.c, {
              className: "CraftShortcutGlyph",
              glyph: YD
            }), (0, SD.jsx)("div", {
              ref: zD,
              className: "DoCraftItem",
              onPointerEnter: () => {
                CC.current = !0, null === vD || void 0 === vD || vD(!0, QI(QD, PD))
              },
              onPointerLeave: () => {
                CC.current = !1, null === vD || void 0 === vD || vD(!1)
              },
              children: (0, SD.jsx)(mc.d, {
                itemName: QD,
                amount: MD
              })
            })]
          }), (0, SD.jsxs)(iI, {
            ref: kD,
            className: "DoCraftAllButton",
            onPointerDown: DD => {
              lD((0, Hc.w)(DD), !0, !1)
            },
            disabled: RD,
            children: [(0, SD.jsx)("span", {
              className: "CraftAllLabel",
              children: HD("general:craftAll")
            }), xD > 0 && (0, SD.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", II(xD)]
            })]
          })]
        })]
      })
    }

    function MI(DD) {
      let {
        selectedIdx: CD,
        hidden: cD
      } = DD;
      const ID = (0, Xc.p)(),
        iD = (0, pD.useRef)(null);
      return (0, pD.useLayoutEffect)((() => {
        const DD = iD.current,
          ID = null === DD || void 0 === DD ? void 0 : DD.parentElement;
        if (!ID || !DD) return;
        const pD = ID.querySelector(".CraftableItems"),
          fD = () => {
            var iD, fD;
            if (cD) return void(DD.style.opacity = "0");
            const bD = null === pD || void 0 === pD ? void 0 : pD.children[CD],
              QD = null === (iD = null !== (fD = null === bD || void 0 === bD ? void 0 : bD.querySelector(".InvenItem")) && void 0 !== fD ? fD : bD) || void 0 === iD ? void 0 : iD.getBoundingClientRect();
            if (!QD || 0 === QD.width) return void(DD.style.opacity = "0");
            const wD = ID.getBoundingClientRect();
            DD.style.opacity = "1", DD.style.width = `${QD.width}px`, DD.style.height = `${QD.height}px`, DD.style.transform = `translate(${QD.left-wD.left+ID.scrollLeft}px, ${QD.top-wD.top+ID.scrollTop}px)`
          };
        fD();
        const bD = new MutationObserver(fD),
          QD = new ResizeObserver(fD);
        return QD.observe(ID), pD && (bD.observe(pD, {
          childList: !0,
          subtree: !0
        }), QD.observe(pD)), () => {
          bD.disconnect(), QD.disconnect()
        }
      }), [CD, cD]), (0, SD.jsx)("div", {
        ref: iD,
        className: MC()("SelectionReticle", {
          Secondary: ID
        })
      })
    }

    function tI(DD, CD, cD) {
      return DD ? (0, sc.c)(Ec.g, DD) ? ZI(DD, CD, cD) : DD : cD("classicGame:handCrafting")
    }

    function ZI(DD, CD, cD) {
      var ID;
      const pD = null === (ID = CD[DD]) || void 0 === ID ? void 0 : ID.displayName;
      if ("string" === typeof pD) return cD(pD);
      const iD = wD.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(pD) ? pD.map((DD => {
        if ("string" === typeof DD) return DD;
        if ("translationKey" in DD) return cD(DD.translationKey, (0, uD.o)(DD.params, iD));
        if ("str" in DD) {
          if ("string" === typeof DD.str) return DD.str;
          if ("translationKey" in DD.str) return cD(DD.str.translationKey, (0, uD.o)(DD.str.params, iD))
        }
        return ""
      })).join("") : pD && "translationKey" in pD ? cD(pD.translationKey, (0, uD.o)(pD.params, iD)) : DD
    }

    function oI(DD, CD) {
      return DD === CD || null !== DD && null !== CD && DD.name === CD.name && DD.xS === CD.xS
    }

    function vI(DD) {
      var CD, cD, ID;
      let {
        show: iD,
        onCraft: fD,
        dispatchSelectedCraftable: bD,
        selectedCraftable: QD,
        craftingStation: BD,
        setHovered: yD
      } = DD;
      const {
        t: MD
      } = (0, uD.F)(), [tD, ZD] = (0, pD.useState)(""), [oD, vD] = (0, pD.useState)(0);
      (0, pD.useEffect)((() => {
        iD || (ZD(""), vD((DD => DD + 1)))
      }), [iD]);
      const [ND, gD] = (0, pD.useState)(BD);
      ND !== BD && (gD(BD), "" !== tD && (ZD(""), vD((DD => DD + 1))));
      const XD = (0, pD.useRef)(null),
        mD = (0, pD.useRef)(null),
        nD = (0, hc.i)(),
        OD = nD.showing && "recipe" === nD.kind,
        [PD, HD] = (0, pD.useState)(0),
        xD = null !== BD && void 0 !== BD ? BD : null,
        qD = (0, pD.useRef)(null),
        JD = DD => {
          return !((CD = qD.current) === (cD = DD) || null !== CD && null !== cD && CD.station === cD.station && oI(CD.recipe, cD.recipe)) && (qD.current = DD, wD.gameBridge.send("focusCrafting", DD), !0);
          var CD, cD
        };
      JD(iD ? {
        station: xD,
        recipe: (null === (CD = qD.current) || void 0 === CD ? void 0 : CD.station) === xD ? qD.current.recipe : null
      } : null);
      let KD = wD.gameBridge.latest("crafting");
      const aD = (0, UD.h)("itemInfo"),
        VD = "" !== tD.trim(),
        zD = (0, pI.A)(),
        jD = (0, pI.y)(),
        lD = (0, pI.D)(),
        LD = function(DD, CD) {
          const [cD, ID] = (0, pD.useState)(!1);
          (0, pD.useEffect)((() => {
            if (!DD) return void ID(!1);
            const CD = setTimeout((() => {
              ID(!0)
            }), 0);
            return () => {
              clearTimeout(CD)
            }
          }), [DD]);
          const iD = DD && cD,
            fD = (0, pD.useRef)({
              station: CD,
              at: new Map
            });
          return (fD.current.station !== CD || !iD && fD.current.at.size > 0) && (fD.current = {
            station: CD,
            at: new Map
          }), iD ? fD.current.at : null
        }(iD, BD);
      let TD = KD.recipes.filter((DD => {
        let {
          listed: CD
        } = DD;
        return CD
      }));
      if (VD) {
        const DD = [];
        for (const CD of KD.recipes) {
          var GD;
          const cD = null !== (GD = jD.get(CD.name)) && void 0 !== GD && GD.hideIngredients ? [] : CD.requires.flatMap((DD => {
              let {
                items: CD
              } = DD;
              return CD.flatMap((DD => [DD, ZI(DD, aD, MD)]))
            })),
            ID = CI(tD, [CD.name, ZI(CD.name, aD, MD)], cD);
          null !== ID && DD.push({
            item: CD,
            rank: ID
          })
        }
        DD.sort(((DD, CD) => DD.rank - CD.rank)), TD = DD.map((DD => {
          let {
            item: CD
          } = DD;
          return CD
        }))
      } else {
        if (LD && LD.size > 0) {
          const DD = KD.recipes.filter((DD => !DD.listed && LD.has(wI(DD))));
          TD = TD.concat(DD)
        }
        TD = (0, pI.j)(TD, zD, jD, lD), LD && (TD = (0, pI.i)(TD, LD, wI))
      }
      const RD = DD => TD.find((CD => wI(CD) === DD)),
        kD = `${BD}|${tD}`,
        [dD, YD] = (0, pD.useState)(null),
        WD = (null === dD || void 0 === dD ? void 0 : dD.context) === kD ? dD.key : null,
        sD = QD ? wI(QD) : null,
        ED = null !== (cD = null !== (ID = RD(sD)) && void 0 !== ID ? ID : RD(WD)) && void 0 !== cD ? cD : TD[0],
        eD = ED ? wI(ED) : null,
        hD = ED ? {
          name: ED.name,
          xS: ED.xS
        } : null;
      iD && JD({
        station: xD,
        recipe: hD
      }) && (KD = wD.gameBridge.latest("crafting")), eD !== sD && eD !== WD && YD(eD ? {
        context: kD,
        key: eD
      } : null), (0, pD.useEffect)((() => () => {
        qD.current = null, wD.gameBridge.send("focusCrafting", null)
      }), []);
      const rD = oI(KD.detail, hD) ? KD.detail : null,
        AD = null !== rD && !rD.roomForOne,
        FD = TD.findIndex((DD => wI(DD) === wI(ED))),
        DC = () => mD.current ? (0, uc.e)(mD.current) : null,
        CC = (0, pD.useRef)(null),
        cC = (0, pD.useRef)(0);
      cC.current++;
      const IC = cC.current;
      (0, pD.useEffect)((() => {
        const DD = CC.current;
        if (!DD || IC <= DD.afterRender) return;
        if (CC.current = null, DD.key !== eD) return;
        const CD = DC();
        var cD;
        null !== CD && void 0 !== CD && CD.press("primary") && !DD.Lb && (null === (cD = CD.release) || void 0 === cD || cD.call(CD))
      }));
      const pC = DD => {
          const CD = {
            name: DD.name,
            xS: DD.xS
          };
          return {
            choose: () => {
              bD(CD), (0, gc.p)(mD.current)
            },
            craft: () => {
              var DD, cD;
              return bD(CD), wI(CD) !== wI(ED) ? (CC.current = {
                key: wI(CD),
                Lb: !0,
                afterRender: cC.current
              }, !0) : null !== (DD = null === (cD = DC()) || void 0 === cD ? void 0 : cD.press("primary")) && void 0 !== DD && DD
            },
            stopCraft: () => {
              var DD, CD;
              CC.current ? CC.current.Lb = !1 : null === (DD = DC()) || void 0 === DD || null === (CD = DD.release) || void 0 === CD || CD.call(DD)
            },
            refuse: () => {
              wI(CD) !== wI(ED) && bD(CD), HD((DD => DD + 1))
            }
          }
        },
        iC = () => {
          var DD, CD, cD;
          (0, gc.p)(null !== (DD = null === (CD = XD.current) || void 0 === CD || null === (cD = CD.querySelector(".CraftableItems")) || void 0 === cD ? void 0 : cD.children[FD]) && void 0 !== DD ? DD : null)
        },
        fC = TD.map(wI).join("|"),
        bC = (0, pD.useRef)(fC);
      return (0, pD.useEffect)((() => {
        bC.current !== fC && (bC.current = fC, OD && FD >= 0 && (0, hc.h)() && iC())
      })), (0, SD.jsxs)("div", {
        className: "Craftables",
        children: [(0, SD.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: tI(BD, aD, MD)
        }), (0, SD.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, SD.jsx)(UC.b, {
            className: "CraftingSearch",
            placeholderText: MD("general:searchRecipes"),
            defaultValue: tD,
            maxLength: 100,
            onValueChange: DD => {
              ZD(DD)
            },
            blurOnEnter: !0
          }, oD), 0 === TD.length && VD && (0, SD.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: MD("general:noRecipesMatchSearch")
          }), TD.length > 0 && (0, SD.jsxs)(SD.Fragment, {
            children: [(0, SD.jsxs)("div", {
              ref: XD,
              className: "CraftablesLeftSide",
              children: [(0, SD.jsx)(ec.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(TD.map((DD => {
                  let {
                    name: CD,
                    xS: cD,
                    haveIngredients: ID
                  } = DD;
                  return {
                    name: CD,
                    xS: cD,
                    haveIngredients: ID
                  }
                })))],
                observing: iD,
                children: TD.map((DD => {
                  const {
                    name: CD,
                    xS: cD,
                    haveIngredients: ID
                  } = DD, pD = wI(DD);
                  return (0, SD.jsx)(SI, {
                    recipeId: pD,
                    itemName: CD,
                    onClick: () => {
                      bD({
                        name: CD,
                        xS: cD
                      })
                    },
                    isSelected: wI(ED) === pD,
                    haveIngredients: ID,
                    craftable: ID && !jD.has(CD) && !(wI(ED) === pD && AD),
                    setHovered: yD,
                    padActions: pC(DD),
                    marked: zD.has(CD),
                    lock: jD.get(CD),
                    itemInfo: aD
                  }, pD)
                }))
              }), (0, SD.jsx)(MI, {
                selectedIdx: FD,
                hidden: OD && nD.steppingSlots
              })]
            }), (0, SD.jsx)(yI, {
              show: iD,
              recipeItem: ED,
              detail: rD,
              onCraft: fD,
              setHovered: yD,
              craftButtonRef: mD,
              onPadBack: iC,
              showPadShortcut: OD,
              refusedCount: PD,
              lock: jD.get(ED.name),
              itemInfo: aD
            })]
          })]
        })]
      })
    }
    var NI = cD(9062),
      gI = cD(3083),
      XI = cD(2070),
      mI = cD(8355);
    class nI {
      constructor(DD, CD, cD) {
        this.commit = DD, this.delayMs = CD, this.defers = cD, this.pending = null, this.timer = void 0, this.Lb = !1, this.flush = () => {
          clearTimeout(this.timer);
          const DD = this.pending;
          null !== DD && (this.pending = null, this.commit(DD))
        }
      }
      type(DD) {
        this.pending = DD, clearTimeout(this.timer), this.Lb || this.defers() ? this.Lb || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(DD) {
        var CD;
        return null !== (CD = this.pending) && void 0 !== CD ? CD : DD
      }
      isHeld() {
        return this.Lb
      }
      setHeld(DD) {
        this.Lb = DD, DD || this.flush()
      }
    }

    function OI(DD) {
      return null === DD ? "creativeInventory:all" : `creativeInventory:${DD}`
    }

    function PI(DD) {
      let {
        category: CD
      } = DD;
      return null === CD ? (0, SD.jsx)(oD.c, {
        name: "layer-group"
      }) : (0, SD.jsx)(mc.d, {
        itemName: NI.creativeItemCategoryIcons[CD],
        amount: 0
      })
    }

    function HI(DD) {
      let {
        labelKey: CD,
        isSelected: cD,
        onSelect: ID,
        setHovered: pD,
        children: iD
      } = DD;
      return (0, SD.jsx)("div", {
        className: MC()("CreativeCategoryTab", {
          Selected: cD
        }),
        onClick: ID,
        onPointerEnter: DD => {
          (0, Hc.r)(DD) || pD(!0, {
            name: {
              translationKey: CD
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          pD(!1)
        },
        children: iD
      })
    }

    function UI(DD) {
      let {
        categories: CD,
        selectedCategory: cD,
        onSelect: ID
      } = DD;
      const {
        t: iD
      } = (0, uD.F)(), [fD, bD] = (0, pD.useState)(!1), QD = (0, pD.useRef)(null), wD = (0, pD.useCallback)((() => {
        bD(!1)
      }), []);
      return (0, XI.d)(QD, wD), (0, SD.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: QD,
        children: [(0, SD.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            bD(!fD)
          },
          children: [(0, SD.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, SD.jsx)(PI, {
              category: cD
            })
          }), (0, SD.jsx)("span", {
            children: iD(OI(cD))
          }), (0, SD.jsx)(oD.c, {
            name: fD ? "caret-up" : "caret-down"
          })]
        }), fD && (0, SD.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: CD.map((DD => (0, SD.jsxs)("div", {
            className: MC()("CreativeCategoryDropdownOption", {
              Selected: cD === DD
            }),
            onClick: () => {
              ID(DD), bD(!1)
            },
            children: [(0, SD.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, SD.jsx)(PI, {
                category: DD
              })
            }), (0, SD.jsx)("span", {
              children: iD(OI(DD))
            })]
          }, null !== DD && void 0 !== DD ? DD : "all")))
        })]
      })
    }
    const xI = (0, pD.memo)((function(DD) {
      let {
        creativeScrollDiv: CD,
        playerInvenNumSlots: cD,
        getSetHoveringForIdx: ID,
        getPointerDownForIdx: iD,
        getPointerUpForIdx: fD,
        creativeSearchVal: bD,
        setCreativeSearchVal: wD,
        creativeCategory: BD,
        setCreativeCategory: yD,
        show: MD
      } = DD;
      const {
        t: tD
      } = (0, uD.F)(), ZD = (0, UD.h)("creativeVisibility"), {
        userContext: vD
      } = (0, nD.c)(), ND = (0, QD.h)("canUseDevCreativeItems"), gD = vD.playerHasRank("developer") || !!ND, XD = (0, pD.useMemo)((() => JI("", ZD, gD)), [ZD, gD]), mD = (0, pD.useMemo)((() => {
        const DD = (0, NI.creativeItemIds)(),
          CD = new Set(XD.map((CD => (0, NI.creativeCategoryOf)(DD[CD]))));
        return NI.creativeItemCategories.filter((DD => CD.has(DD)))
      }), [XD]), OD = null !== BD && mD.includes(BD) ? BD : null, HD = (0, pD.useMemo)((() => "" === bD ? XD : JI(bD, ZD, gD)), [XD, bD, ZD, gD]), xD = (0, pD.useMemo)((() => {
        const DD = (0, NI.creativeItemIds)();
        return null !== OD ? HD.filter((CD => (0, NI.creativeCategoryOf)(DD[CD]) === OD)) : "" === bD ? HD.filter((CD => !(0, NI.showOnlyInCreativeCategory)(DD[CD]))) : HD
      }), [HD, OD, bD]), qD = ID();

      function JD(DD) {
        yD(DD), CD.current.scrollTop = 0
      }
      const KD = [null, ...mD],
        {
          isTouchScreen: aD
        } = (0, GD.o)(["isTouchScreen"]),
        VD = !aD,
        zD = (0, pD.useRef)(null),
        [jD, lD] = (0, pD.useState)(0);
      (0, pD.useEffect)((() => {
        const DD = zD.current;
        if (!DD) return;
        const CD = new ResizeObserver((DD => {
          lD(DD[0].contentRect.height)
        }));
        return CD.observe(DD), () => {
          CD.disconnect()
        }
      }), [VD]);
      const LD = (0, pD.useRef)(null),
        TD = (0, pD.useCallback)((function DD() {
          "up" === LD.current ? CD.current.scrollTop -= 10 : "down" === LD.current && (CD.current.scrollTop += 10), LD.current && requestAnimationFrame(DD)
        }), [CD]),
        RD = (0, pD.useCallback)((function(DD) {
          LD.current || (LD.current = DD, TD())
        }), [TD]);

      function kD() {
        LD.current = null
      }
      const dD = (0, pD.useRef)({
        creativeSearchVal: bD,
        setCreativeSearchVal: wD
      });
      dD.current = {
        creativeSearchVal: bD,
        setCreativeSearchVal: wD
      };
      const [YD] = (0, pD.useState)((() => new nI((DD => {
        dD.current.setCreativeSearchVal(DD)
      }), 250, Xc.e))), WD = DD => {
        var cD;
        null === (cD = CD.current) || void 0 === cD || cD.classList.toggle("CreativeItemSlotsStale", DD)
      };
      (0, PD.f)(mI.c, (DD => {
        YD.setHeld(DD), DD || WD(!1)
      })), (0, pD.useEffect)((() => YD.flush), [YD]);
      const sD = (0, SD.jsx)(UC.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: bD,
          maxLength: 1e4,
          onValueChange: (DD, CD) => {
            "" === YD.getTyped(dD.current.creativeSearchVal) && "" !== DD && yD(null), YD.type(DD), WD(YD.isHeld())
          },
          onEnter: YD.flush,
          blurOnEnter: !0
        }),
        ED = (0, SD.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [aD && (0, SD.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, SD.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                RD("up")
              },
              onPointerLeave: kD,
              onPointerUp: kD,
              children: (0, SD.jsx)(oD.c, {
                name: "arrow-up"
              })
            }), (0, SD.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                RD("down")
              },
              onPointerLeave: kD,
              onPointerUp: kD,
              children: (0, SD.jsx)(oD.c, {
                name: "arrow-up"
              })
            })]
          }), (0, SD.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: CD,
            children: [0 === xD.length && "" !== bD && (0, SD.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: tD("general:noResults")
            }), (0, SD.jsx)(ec.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [bD, OD],
              observerRoot: "CreativeItemSlots",
              observing: MD,
              children: xD.map((DD => {
                const CD = cD + DD;
                return (0, SD.jsx)(kc.c, {
                  idx: CD,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: ID(CD),
                  pointerDown: iD(CD),
                  pointerUp: fD(CD)
                }, CD)
              }))
            })]
          })]
        });
      return (0, SD.jsxs)("div", {
        className: MC()("CreativeItemSlotsWrapper", VD ? "WithRail" : "WithDropdown"),
        children: [VD && (0, SD.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: zD,
          style: {
            "--rail-height": jD > 0 ? `${jD}px` : void 0,
            "--tab-rows": Math.ceil(KD.length / 2)
          },
          children: KD.map((DD => (0, SD.jsx)(HI, {
            labelKey: OI(DD),
            isSelected: OD === DD,
            onSelect: () => {
              JD(DD)
            },
            setHovered: qD,
            children: (0, SD.jsx)(PI, {
              category: DD
            })
          }, null !== DD && void 0 !== DD ? DD : "all")))
        }), (0, SD.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, SD.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [sD, !VD && (0, SD.jsx)(UI, {
              categories: KD,
              selectedCategory: OD,
              onSelect: JD
            })]
          }), ED]
        })]
      })
    }));

    function qI(DD) {
      var CD;
      return null !== (CD = (0, gI.h)(DD)) && void 0 !== CD ? CD : ""
    }

    function JI(DD, CD, cD) {
      let {
        publicLobby: ID,
        shownInGame: pD
      } = CD;
      const iD = DD.toLowerCase(),
        fD = (0, NI.creativeItemIds)(),
        bD = DD => {
          var CD;
          const iD = fD[DD];
          return !(0, NI.itemIsDisabled)(iD, ID, null === (CD = pD[qI(iD)]) || void 0 === CD || CD, cD)
        };
      if ("" === iD) return fD.map(((DD, CD) => CD)).filter((DD => !(0, NI.showOnlyInCreativeSearch)(fD[DD]))).filter(bD);
      const QD = [];
      for (let wD = 0; wD < fD.length; wD++) qI(fD[wD]).toLowerCase().includes(iD) && QD.push(wD);
      QD.sort(((DD, CD) => {
        const cD = qI(fD[DD]).toLowerCase(),
          ID = qI(fD[CD]).toLowerCase();
        return cD.indexOf(iD) - ID.indexOf(iD)
      }));
      for (const [wD, SD] of(0, NI.creativeAltNames)())
        for (const DD of SD)
          if (DD.toLowerCase().includes(iD)) {
            const DD = fD.indexOf(wD);
            QD.includes(DD) || QD.push(DD)
          } return QD.filter(bD)
    }
    var KI = cD(36181),
      aI = cD(624);

    function VI(DD) {
      return DD > aI.i
    }

    function zI(DD) {
      const CD = DD / 2,
        cD = [];
      for (let ID = 0; ID < CD / 6; ID++)
        for (let DD = 0; DD < 12; DD++) {
          const pD = DD < 6 ? 0 : CD;
          cD.push(pD + 6 * ID + DD % 6)
        }
      return cD
    }

    function jI(DD) {
      let {
        numSlots: CD,
        renderSlot: cD
      } = DD;
      const {
        t: ID
      } = (0, uD.F)(), iD = (0, pD.useRef)(null);
      var fD;
      return fD = iD, (0, pD.useLayoutEffect)((() => {
        var DD;
        const CD = null === (DD = fD.current) || void 0 === DD ? void 0 : DD.closest(".InvenBody");
        if (!CD) return;
        const cD = () => {
          CD.style.zoom = "";
          const DD = parseFloat(getComputedStyle(document.documentElement).fontSize),
            cD = window.innerWidth - 2 * DD,
            ID = CD.getBoundingClientRect().width;
          ID > cD && (CD.style.zoom = "" + cD / ID)
        };
        return cD(), window.addEventListener("resize", cD), () => {
          window.removeEventListener("resize", cD), CD.style.zoom = ""
        }
      }), [fD]), (0, SD.jsxs)("div", {
        ref: iD,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, SD.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: ID("doubleChest:title")
        }), (0, SD.jsx)("div", {
          className: "GridItemSlots",
          children: zI(CD).map((DD => cD(DD)))
        })]
      })
    }

    function lI(DD) {
      let {
        si: CD,
        initialPasskey: cD
      } = DD;
      const {
        t: ID
      } = (0, uD.F)(), [iD, fD] = (0, pD.useState)(cD), [bD, QD] = (0, pD.useState)(cD);
      (0, pD.useEffect)((() => {
        fD(cD), QD(cD)
      }), [...CD]);
      return (0, SD.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, SD.jsx)("div", {
          className: "SmallTextBold",
          children: ID("ironChest:currentPasskey", {
            currentPasskey: iD.join("")
          })
        }), (0, SD.jsx)(Lc, {
          className: "IronChestPasskeyEditor",
          Lw: bD,
          onPasskeyUpdated: QD,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            wD.gameBridge.send("changeIronChestPasskey", {
              pos: [...CD],
              Lw: [...bD]
            }), fD([...bD])
          }
        })]
      })
    }

    function LI(DD) {
      let {
        variation: CD,
        canCraft: cD,
        show: ID,
        creativeMounted: pD,
        specialItemRef: iD,
        draggedInfo: fD,
        getSetHovering: bD,
        getPointerDownForIdx: QD,
        getPointerUpForIdx: wD,
        enchantingTablePosition: BD,
        enchantingTableBlockName: yD,
        selectedCraftable: MD,
        dispatchSelectedCraftable: tD,
        creativeScrollDiv: ZD,
        creativeSearchVal: oD,
        setCreativeSearchVal: vD,
        creativeCategory: ND,
        setCreativeCategory: gD,
        onCraft: XD
      } = DD;
      const {
        userContext: mD
      } = (0, nD.c)(), {
        t: OD
      } = (0, uD.F)(), PD = (0, UD.g)("inventory", (DD => DD.chest)), HD = (0, UD.g)("inventory", (DD => DD.player.length)), xD = (0, UD.g)("inventory", (DD => DD.creative));
      if (0 === HD) return null;
      let qD, JD;
      const KD = DD => {
          const CD = HD + DD;
          return (0, SD.jsx)(kc.c, {
            idx: CD,
            draggedInfo: fD,
            specialItemInfo: iD.current,
            setHovered: bD(CD),
            pointerDown: QD(CD),
            pointerUp: wD(CD)
          }, CD)
        },
        aD = PD ? (0, KI.b)(PD.type) : null;
      if (aD) qD = MC()("InvenLeftSideChestCustom", aD.className), JD = (0, SD.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: aD.render({
          si: PD.pos,
          renderSlot: KD
        })
      });
      else if (PD) {
        const DD = PD.pos,
          CD = "Iron" === PD.type || "Moonstone" === PD.type ? PD.type : "Standard";
        let cD = !1,
          ID = null;
        "Iron" === CD && (cD = PD.ironChest.ownerDbId === mD.whamm, ID = PD.ironChest.Lw), qD = `InvenLeftSideChest${CD}`;
        const pD = VI(PD.numSlots);
        JD = (0, SD.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [cD && (0, SD.jsx)(lI, {
            si: DD,
            initialPasskey: ID
          }), pD && (0, SD.jsx)(jI, {
            numSlots: PD.numSlots,
            renderSlot: KD
          }), !pD && (0, SD.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, SD.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: OD("Moonstone" === CD ? "item:moonstoneChest" : "Iron" === CD ? "item:ironChest" : "item:chest")
            }), (0, SD.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(PD.numSlots).fill(0).map(((DD, CD) => KD(CD)))
            })]
          })]
        })
      } else if (!xD || CD && cD)
        if (cD && "Enchanting Table" === CD) qD = `InvenLeftSide${(null!==yD&&void 0!==yD?yD:"").replace(/ /gi,"")}`, JD = (0, SD.jsx)(dc, {
          specialItemInfo: iD.current,
          setHovered: bD,
          pointerDown: QD(xc.c),
          pointerUp: wD(xc.c),
          enchantingTablePosition: BD,
          enchantingTableBlockName: yD
        });
        else if (cD && "Salvaging Table" === CD) qD = "InvenLeftSideSalvagingTable", JD = (0, SD.jsx)(Wc, {
        specialItemInfo: iD.current,
        setSpecialItemInfo: DD => {
          iD.current = DD
        },
        setHovered: bD,
        pointerDown: QD(xc.c),
        pointerUp: wD(xc.c)
      });
      else {
        if (!cD) return null;
        qD = `InvenLeftSide${(null!==CD&&void 0!==CD?CD:"HandCrafting").replace(/ /gi,"")}`, JD = (0, SD.jsx)(vI, {
          show: ID,
          onCraft: XD,
          craftingStation: CD,
          selectedCraftable: MD,
          dispatchSelectedCraftable: tD,
          setHovered: bD()
        })
      } else qD = "InvenLeftSideCreative", JD = pD ? (0, SD.jsx)(xI, {
        creativeScrollDiv: ZD,
        playerInvenNumSlots: HD,
        getSetHoveringForIdx: bD,
        getPointerDownForIdx: QD,
        getPointerUpForIdx: wD,
        creativeSearchVal: oD,
        setCreativeSearchVal: vD,
        creativeCategory: ND,
        setCreativeCategory: gD,
        show: ID
      }) : null;
      const VD = !!PD || cD && !!CD;
      return (0, SD.jsx)("div", {
        className: `InvenLeftSide ${qD}`,
        "data-pad-inventory-start": VD ? "" : void 0,
        children: JD
      })
    }
    var TI = cD(613),
      GI = cD(19881),
      RI = cD(19890),
      kI = cD(19896);
    const dI = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: cD(19904)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: RI
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: kI
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: cD(19906)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: GI
      }
    };

    function YI(DD) {
      const {
        sprite: CD,
        image: cD
      } = dI[DD];
      return Qc(CD, ic.m.ITEM, cD)
    }

    function WI(DD) {
      let {
        draggedInfo: CD,
        specialItemInfo: cD,
        craftFlyAnims: ID,
        getSetHovering: pD,
        getPointerDownForIdx: iD,
        getPointerUpForIdx: fD,
        variation: bD,
        canCraft: QD,
        isNewSlot: wD
      } = DD;
      const BD = (0, UD.g)("inventory", (DD => DD.player.length));
      return 0 === BD ? null : (0, SD.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, SD.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(TI.d.length).fill(0).map(((DD, yD) => {
            const MD = BD - TI.d.length + yD;
            return (0, SD.jsx)(kc.c, {
              idx: MD,
              draggedInfo: CD,
              specialItemInfo: cD,
              craftFlyHoldbackInfo: (0, Uc.i)(ID, MD),
              setHovered: pD(MD),
              pointerDown: iD(MD),
              pointerUp: fD(MD),
              defaultIconB64: YI(TI.d[yD]),
              variation: QD ? bD : void 0,
              showNewDot: wD(MD)
            }, MD)
          }))
        }), (0, SD.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(BD - 10 - TI.d.length).fill(0).map(((DD, yD) => {
            const MD = BD - TI.d.length - yD - 1;
            return (0, SD.jsx)(kc.c, {
              idx: MD,
              draggedInfo: CD,
              specialItemInfo: cD,
              craftFlyHoldbackInfo: (0, Uc.i)(ID, MD),
              setHovered: pD(MD),
              pointerDown: iD(MD),
              pointerUp: fD(MD),
              variation: QD ? bD : void 0,
              showNewDot: wD(MD)
            }, MD)
          }))
        })]
      })
    }
    var sI = cD(36189),
      EI = cD(36193);

    function eI(DD) {
      const {
        e: CD,
        idx: cD
      } = DD, ID = (0, Hc.i)(DD.readInventory(), cD), pD = (0, Hc.n)(CD);
      cD === xc.b ? function(DD, CD) {
        const {
          draggedInfoRef: cD,
          removeItem: ID,
          removeDraggedInfoRef: pD,
          close: iD
        } = DD;
        if (cD.current) {
          const DD = CD && cD.current.amount || 1;
          ID(cD.current.idx, DD, !0) && (cD.current.amount -= DD, cD.current.amount <= 0 && pD())
        } else CD && iD()
      }(DD, pD) : cD === xc.c ? function(DD, CD) {
        const {
          e: cD,
          draggedInfoRef: ID,
          specialItemRef: pD,
          moveAmtIntoSlot: iD,
          removeDraggedInfoRef: fD
        } = DD;
        if ((0, Hc.w)(cD) && pD.current) pD.current = null;
        else if (ID.current && pD.current && (ID.current.idx === pD.current.idx || (0, EI.b)(ID.current, pD.current)) && ID.current.amount > 0 && pD.current.amount > 0 && pD.current.amount < jc.h.maxItemStackSize)
          if (ID.current.idx === pD.current.idx) {
            if (CD) {
              const DD = Math.min(ID.current.amount, jc.h.maxItemStackSize - pD.current.amount);
              pD.current.amount += DD, ID.current.amount -= DD
            } else ID.current.amount--, pD.current.amount++;
            ID.current.amount <= 0 && fD()
          } else if (CD) {
          const DD = Math.min(ID.current.amount, jc.h.maxItemStackSize - pD.current.amount);
          iD(pD.current.idx, DD) && (pD.current.amount += DD)
        } else {
          iD(pD.current.idx, 1) && pD.current.amount++
        } else if (!ID.current || pD.current || CD) {
          const DD = ID.current;
          ID.current = pD.current, pD.current = DD
        } else ID.current.amount--, pD.current = {
          idx: ID.current.idx,
          name: ID.current.name,
          attributes: ID.current.attributes,
          amount: 1
        }
      }(DD, pD) : (0, Hc.w)(CD) ? function(DD, CD) {
        var cD, ID;
        const {
          idx: pD,
          draggedInfoRef: iD,
          specialItemRef: fD,
          canCraft: bD,
          variation: QD,
          swapSlots: wD,
          moveIntoSlots: SD
        } = DD;
        if (!CD) return;
        let BD = CD.amount;
        pD === (null === (cD = iD.current) || void 0 === cD ? void 0 : cD.idx) && (BD = iD.current.amount <= 0 ? 0 : CD.amount - iD.current.amount);
        pD === (null === (ID = fD.current) || void 0 === ID ? void 0 : ID.idx) && (BD = fD.current.amount <= 0 ? 0 : CD.amount - fD.current.amount);
        if (0 === BD) return;
        const yD = DD.readInventory(),
          MD = yD.player.length,
          tD = yD.chest,
          ZD = MD - TI.d.length,
          oD = () => {
            if (!(0, Xc.e)()) return void SD(10, ZD, pD, BD);
            const DD = DD => {
              const cD = (0, Hc.i)(yD, DD);
              return cD ? {
                amount: cD.amount,
                stacksWithMoved: (0, EI.b)(cD, CD)
              } : null
            };
            for (const CD of ((DD, CD, cD, ID, pD) => {
                const iD = [];
                let fD = ID;
                if (null !== ID) {
                  let bD = 0;
                  for (let ID = CD; ID < cD; ID++) {
                    const CD = DD(ID);
                    null !== CD && void 0 !== CD && CD.stacksWithMoved && null !== CD.amount && CD.amount > 0 && (bD += Math.max(0, pD - CD.amount))
                  }
                  const QD = Math.min(ID, bD);
                  if (QD > 0 && (iD.push({
                      start: CD,
                      end: cD,
                      amount: QD
                    }), fD = ID - QD), fD <= 0) return iD
                }
                for (let bD = cD - 1; bD >= CD; bD--)
                  if (null === DD(bD)) {
                    iD.push({
                      start: bD,
                      end: bD + 1,
                      amount: fD
                    });
                    break
                  } return iD
              })(DD, 10, ZD, BD, jc.h.maxItemStackSize)) SD(CD.start, CD.end, pD, CD.amount)
          };
        if (!bD || "Enchanting Table" !== QD && "Salvaging Table" !== QD) {
          const cD = (0, HD.zb)(CD.name),
            ID = cD ? (0, HD.vb)(cD) : null;
          if (!TI.d.includes(cD) || pD !== ID && (0, Hc.l)(yD, DD.itemInfo, ID, pD))
            if (tD)
              if (pD < MD) {
                var vD, ND;
                const [DD, CD] = null !== (vD = null === (ND = (0, KI.b)(tD.type)) || void 0 === ND ? void 0 : ND.quickMoveRange) && void 0 !== vD ? vD : [0, tD.numSlots];
                SD(MD + DD, MD + CD, pD, BD)
              } else SD(0, MD - TI.d.length, pD, BD);
          else yD.creative ? pD < 10 ? oD() : pD < MD ? SD(0, 10, pD, BD) : SD(0, MD - TI.d.length, pD, null !== CD.amount ? jc.h.maxItemStackSize : null) : pD < 10 ? oD() : SD(0, 10, pD, BD);
          else pD < MD - TI.d.length || pD >= MD ? wD(ID, pD) : (SD(0, MD - TI.d.length, ID, BD), Oc.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else fD.current = {
          idx: pD,
          name: CD.name,
          attributes: CD.attributes,
          amount: null !== CD.amount ? BD : 0
        }
      }(DD, ID) : DD.draggedInfoRef.current ? function(DD, CD, cD, ID) {
        const {
          draggedInfoRef: pD,
          specialItemRef: iD,
          moveAmtIntoSlot: fD,
          swapSlots: bD,
          removeItem: QD,
          removeDraggedInfoRef: wD
        } = DD, SD = DD.readInventory(), BD = pD.current.idx;
        if (cD && (CD === BD || (0, EI.b)(pD.current, cD)) && pD.current.amount > 0 && (0, Hc.d)(cD) > 0 && (cD.amount < jc.h.maxItemStackSize || CD === BD)) ID ? cD.amount + pD.current.amount <= jc.h.maxItemStackSize || CD === BD ? fD(CD, pD.current.amount) : fD(CD, jc.h.maxItemStackSize - cD.amount) : fD(CD, 1);
        else if (pD.current.amount > 0 && !cD) fD(CD, ID ? pD.current.amount : 1);
        else if (ID || cD || 0 === pD.current.amount)
          if (SD.creative && !SD.chest && CD >= SD.player.length) {
            const DD = 0 === pD.current.amount ? 1 : pD.current.amount;
            QD(pD.current.idx, DD, !1) && wD()
          } else {
            var yD;
            const cD = (null === (yD = iD.current) || void 0 === yD ? void 0 : yD.idx) === CD;
            if (bD(CD, pD.current.idx)) {
              const ID = DD.readInventory(),
                fD = (0, Hc.i)(ID, BD),
                bD = !ID.chest && ID.creative && pD.current.idx >= ID.player.length;
              if (fD && pD.current.idx !== CD && !bD) {
                let DD = (0, Hc.d)(fD);
                cD && (DD -= iD.current.amount), pD.current = cD && 0 === DD ? null : {
                  idx: pD.current.idx,
                  name: fD.name,
                  attributes: fD.attributes,
                  amount: DD
                }
              } else wD()
            }
          }
        else fD(CD, 1)
      }(DD, cD, ID, pD) : function(DD, CD, cD, ID) {
        var pD;
        const {
          draggedInfoRef: iD,
          specialItemRef: fD
        } = DD;
        if (!cD) return;
        let bD = (0, Hc.d)(cD);
        const QD = (null === (pD = fD.current) || void 0 === pD ? void 0 : pD.idx) === CD;
        QD && (bD -= fD.current.amount);
        ID || (bD = Math.ceil(bD / 2));
        iD.current = QD && 0 === bD ? null : {
          idx: CD,
          name: cD.name,
          attributes: cD.attributes,
          amount: bD
        }
      }(DD, cD, ID, pD)
    }

    function uI(DD, CD) {
      return !!CD && CD.name === DD.name
    }

    function hI() {
      return wD.gameBridge.latest("inventory")
    }

    function rI(DD, CD, cD) {
      return wD.gameBridge.send("removeInventoryItem", {
        slot: DD,
        amount: CD,
        drop: cD
      })
    }

    function AI(DD) {
      return (0, Hc.h)(DD, wD.gameBridge.latest("itemInfo"), wD.gameBridge.latest("stationItems").enchantable)
    }

    function FI(DD) {
      let {
        show: CD,
        close: cD,
        canCraft: ID,
        variation: iD,
        inventoryItemsMoveable: fD,
        setCraftFlyAnims: bD
      } = DD;
      (0, UD.h)("itemInfo");
      const [QD, SD] = (0, pD.useState)(null), [BD, yD] = (0, pD.useState)(null), [MD, tD] = (0, pD.useState)(!1), ZD = (0, pD.useRef)(null), oD = (0, pD.useRef)(null), vD = (0, pD.useRef)(null), ND = (0, pD.useRef)(null), [gD, XD] = (0, pD.useReducer)((DD => DD + 1), 0), mD = (0, pD.useCallback)((() => {
        CD && XD()
      }), [CD, XD]), nD = (0, pD.useCallback)((() => {
        oD.current = null, jD.current = null, mD()
      }), [mD]), OD = (0, pD.useCallback)(((DD, CD) => {
        bD((cD => cD.map((cD => "ingredient" === cD.kind ? cD : cD.iB === DD ? {
          ...cD,
          iB: CD,
          to: (0, Hc.f)(CD)
        } : cD.iB === CD ? {
          ...cD,
          iB: DD,
          to: (0, Hc.f)(DD)
        } : cD))))
      }), [bD]), PD = (0, pD.useCallback)(((DD, CD) => {
        const cD = TD.current;
        if (cD.x = DD, cD.y = CD, ZD.current) !GD.current.isTouch || GD.current.itemBeingDragged && !jD.current ? (ZD.current.style.transform = `translate(${cD.x}px, ${cD.y}px)`, tD(GD.current.isTouch && !jD.current)) : (ZD.current.style.transform = "translate(0.5rem, 0.5rem)", tD(!0));
        else if (ND.current) {
          const cD = ND.current;
          let ID = DD + 10,
            pD = CD + 10;
          const iD = cD.offsetWidth,
            fD = cD.offsetHeight;
          ID + iD > window.innerWidth && (ID = DD - iD - 10), pD + fD > window.innerHeight && (pD = CD - fD - 10), ID < 0 && (ID = 0), pD < 0 && (pD = 0), ND.current.style.transform = `translate(${ID}px, ${pD}px)`
        }
      }), []), xD = (0, pD.useCallback)((DD => (CD, cD, ID) => {
        if (SD(CD && void 0 !== DD ? DD : null), CD) {
          if (void 0 === DD && !cD) return void(0, sI.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== DD) {
            var pD;
            const CD = hI();
            let cD;
            if (cD = DD === xc.c ? vD.current ? (0, Hc.i)(CD, vD.current.idx) : null : (0, Hc.i)(CD, DD), !cD) return void yD(null);
            if ((null === (pD = vD.current) || void 0 === pD ? void 0 : pD.idx) === DD) {
              if (0 === (0, Hc.d)(cD) - vD.current.amount) return void yD(null)
            }
            yD(AI(cD))
          } else yD({
            name: cD.name,
            desc: cD.desc,
            fontStyle: "normal"
          })
        } else yD(null);
        ID && setTimeout((() => {
          PD(ID.pageX, ID.pageY)
        }), 0)
      }), [PD]), qD = (0, pD.useCallback)(((DD, CD) => {
        const cD = wD.gameBridge.send("moveInventoryItem", {
          from: oD.current.idx,
          to: DD,
          amount: CD
        });
        return cD ? (oD.current.amount -= CD, oD.current.amount <= 0 && nD()) : console.error("moveInventoryItem failed"), cD
      }), [nD]), JD = (0, pD.useCallback)(((DD, CD) => {
        const cD = vD.current,
          ID = null === cD || void 0 === cD ? void 0 : cD.idx;
        cD && (cD.idx = function(DD, CD, cD) {
          return DD === CD ? cD : DD === cD ? CD : DD
        }(ID, DD, CD));
        const pD = wD.gameBridge.send("swapInventorySlots", {
          a: DD,
          b: CD
        });
        return pD ? OD(DD, CD) : cD && (cD.idx = ID), pD
      }), [OD]), KD = (0, pD.useCallback)(((DD, CD, cD, ID) => {
        const pD = wD.gameBridge.send("quickMoveInventoryItem", {
          slot: cD,
          start: DD,
          end: CD,
          amount: ID
        });
        null !== pD && OD(cD, pD)
      }), [OD]), aD = (0, pD.useCallback)(((DD, CD) => {
        var pD;
        ((DD, CD, cD) => {
          const ID = DD - (cD - TI.d.length);
          return !(!CD || ID < 0 || ID >= TI.d.length) && (0, HD.zb)(CD) !== TI.d[ID]
        })(CD, null === (pD = oD.current) || void 0 === pD ? void 0 : pD.name, hI().player.length) || (eI({
          e: DD,
          idx: CD,
          readInventory: hI,
          itemInfo: wD.gameBridge.latest("itemInfo"),
          draggedInfoRef: oD,
          specialItemRef: vD,
          moveAmtIntoSlot: qD,
          swapSlots: JD,
          moveIntoSlots: KD,
          removeItem: rI,
          removeDraggedInfoRef: nD,
          close: cD,
          canCraft: ID,
          variation: iD
        }), mD())
      }), [ID, cD, qD, KD, nD, JD, iD, mD]), VD = (0, pD.useRef)(0), zD = (0, pD.useRef)(null), jD = (0, pD.useRef)(null), lD = (0, pD.useRef)(null), LD = (0, pD.useRef)(new Set), TD = (0, pD.useRef)({
        x: 0,
        y: 0
      }), GD = (0, pD.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), RD = (0, pD.useCallback)((() => (lD.current = null, GD.current.itemBeingDragged = !1, clearTimeout(zD.current), !!jD.current && (jD.current = null, mD(), !0))), [mD]);
      (0, pD.useEffect)((() => {
        RD(), LD.current.clear()
      }), [CD]);
      const kD = DD => void 0 !== DD && (LD.current.has(DD) || null !== lD.current && DD !== lD.current),
        dD = DD => {
          GD.current.isTouch = (0, Hc.r)(DD)
        },
        YD = (0, pD.useCallback)((DD => CD => {
          const ID = (0, Hc.r)(CD);
          if (ID || PD(CD.pageX, CD.pageY), fD)
            if (kD(CD.pointerId)) void 0 !== CD.pointerId && LD.current.add(CD.pointerId);
            else {
              if (dD(CD), ID) {
                VD.current = CD.timeStamp, GD.current.itemBeingDragged = !0, lD.current = CD.pointerId;
                const cD = (0, Hc.i)(hI(), DD);
                if (cD && cD.amount && cD.amount > 0) {
                  const cD = CD.pageX,
                    ID = CD.pageY,
                    pD = TD.current.x,
                    iD = TD.current.y;
                  clearTimeout(zD.current), zD.current = setTimeout((() => {
                    if (oD.current && oD.current.idx === DD && (Math.abs(cD - TD.current.x) < 20 && Math.abs(ID - TD.current.y) < 20 || pD === TD.current.x && iD === TD.current.y) && GD.current.itemBeingDragged) {
                      const DD = hI(),
                        cD = DD.creative && !DD.chest && oD.current.idx >= jc.h.numInvenSlots && null !== (0, Hc.i)(DD, oD.current.idx).amount ? jc.h.maxItemStackSize : oD.current.amount;
                      jD.current = {
                        initTouchX: CD.pageX,
                        initTouchY: CD.pageY,
                        maxAmount: cD
                      }, oD.current.amount = Math.ceil(oD.current.amount / 2), ZD.current.style.transform = "translate(0.5rem, 0.5rem)", tD(!0), mD()
                    }
                  }), 500)
                }
              }
              aD(CD, DD)
            }
          else DD === xc.b && (0, Hc.n)(CD) && cD()
        }), [PD, aD, fD, cD, mD]),
        WD = (0, pD.useCallback)((DD => DD => {
          if (kD(DD.pointerId)) return;
          const CD = (0, Hc.r)(DD);
          if (dD(DD), !RD()) {
            if (CD && oD.current && DD.timeStamp - VD.current > 150) {
              const CD = document.elementFromPoint(DD.clientX, DD.clientY);
              if (null !== CD) {
                const cD = CD.getAttribute("data-inven-idx");
                null !== cD ? aD(DD, parseInt(cD)) : CD.classList.contains("InventoryBackgroundScreen") && aD(DD, -1)
              }
            }
            PD(DD.pageX, DD.pageY)
          }
        }), [PD, aD, RD]);
      (0, pD.useEffect)((() => {
        let DD;
        const cD = ["pointerup", "pointercancel"],
          ID = DD => {
            LD.current.has(DD.pointerId) ? setTimeout((() => {
              LD.current.delete(DD.pointerId)
            }), 0) : DD.pointerId === lD.current && setTimeout((() => {
              lD.current === DD.pointerId && RD()
            }), 0)
          };
        if (CD) {
          for (const DD of cD) document.addEventListener(DD, ID, !0);
          if (!GD.current.isTouch) {
            const DD = TD.current;
            PD(DD.x, DD.y)
          }
          DD = DD => {
            DD.preventDefault(), kD(DD.pointerId) || (dD(DD), PD(DD.pageX, DD.pageY), jD.current && DD.pointerId === lD.current && (DD => {
              if (!oD.current) return jD.current = null, void mD();
              const {
                initTouchX: CD,
                maxAmount: cD
              } = jD.current, ID = (DD.pageX - CD) * jD.current.maxAmount / 160, pD = Math.ceil(cD / 2) + Math.ceil(ID);
              oD.current.amount = Math.min(cD, Math.max(1, pD)), mD()
            })(DD))
          }, document.addEventListener("pointermove", DD, !0)
        }
        return () => {
          document.removeEventListener("pointermove", DD, !0);
          for (const DD of cD) document.removeEventListener(DD, ID, !0)
        }
      }));
      const sD = (0, pD.useCallback)((() => {
          if (oD.current) {
            const DD = (0, Hc.i)(hI(), oD.current.idx);
            (!uI(oD.current, DD) || DD.amount < oD.current.amount) && nD()
          }
        }), [nD]),
        ED = (0, pD.useCallback)((() => {
          const DD = oD.current;
          if (DD) {
            const CD = (0, Hc.i)(hI(), DD.idx);
            uI(DD, CD) && (DD.attributes = CD.attributes)
          }
        }), []);
      return {
        draggedDomRef: ZD,
        draggedInfoRef: oD,
        specialItemRef: vD,
        hoverInfoDomRef: ND,
        longHoldSplitInfoRef: jD,
        currHoveredIdx: QD,
        currHoveredDisplayInfo: BD,
        displayDraggedItemName: MD,
        forceRerenderIfVisible: mD,
        removeDraggedInfoRef: nD,
        checkDraggedItemConsistencyWithInven: sD,
        refreshDraggedAttributes: ED,
        swapSlots: JD,
        getPointerDownForIdx: YD,
        getPointerUpForIdx: WD,
        getSetHovering: xD,
        setCurrHoveredDisplayInfo: yD,
        moveFollowerTo: PD
      }
    }
    class Dp {
      constructor(DD) {
        this.snapshot = [], this.newSlots = new Set, this.update(DD, !1)
      }
      update(DD, CD) {
        const cD = DD.map((DD => {
          var CD;
          return DD ? {
            name: DD.name,
            amount: null !== (CD = DD.amount) && void 0 !== CD ? CD : 1
          } : null
        }));
        cD.forEach(((DD, cD) => {
          const ID = this.snapshot[cD],
            pD = (null === DD || void 0 === DD ? void 0 : DD.name) !== (null === ID || void 0 === ID ? void 0 : ID.name);
          (!DD || pD || DD.amount < ID.amount) && this.newSlots.delete(cD), CD && DD && (pD || DD.amount > ID.amount) && this.newSlots.add(cD)
        })), this.snapshot = cD
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(DD) {
        return this.newSlots.has(DD)
      }
    }
    const Cp = (DD, CD, cD) => ({
      button: CD,
      shiftKey: cD,
      pageX: DD.clientX,
      pageY: DD.clientY,
      clientX: DD.clientX,
      clientY: DD.clientY,
      pointerType: "mouse"
    });

    function cp(DD) {
      const [CD, cD] = (0, pD.useState)(DD);
      return DD && !CD && cD(!0), (0, pD.useEffect)((() => {
        if (CD) return;
        let DD = !0;
        const ID = () => {
            DD && (DD = !1, cD(!0))
          },
          pD = "function" === typeof window.requestIdleCallback,
          iD = pD ? window.requestIdleCallback(ID, {
            timeout: 2e3
          }) : void 0,
          fD = setTimeout(ID, pD ? 2e3 : 1e3);
        return () => {
          DD = !1, clearTimeout(fD), void 0 !== iD && window.cancelIdleCallback(iD)
        }
      }), [CD]), CD
    }
    const Ip = (0, pD.memo)((function(DD) {
      var CD;
      let {
        show: cD,
        onOpen: ID,
        onClose: iD,
        variation: bD
      } = DD;
      const BD = (0, pD.useRef)(null),
        yD = (0, pD.useRef)(null),
        MD = function(DD) {
          const [CD, cD] = (0, pD.useState)(!0), [ID, iD] = (0, pD.useState)(!1), fD = (0, pD.useRef)(null), bD = (0, pD.useRef)(null), wD = (0, QD.h)("_shield"), SD = (0, pD.useRef)(null), BD = (0, QD.h)("_health"), yD = (0, pD.useRef)(null);

          function MD(DD) {
            const CD = Date.now() + DD;
            CD < bD.current || (cD(!1), clearTimeout(fD.current), bD.current = CD, fD.current = setTimeout((() => {
              cD(!0)
            }), DD))
          }
          return (0, pD.useEffect)((() => {
            MD(Jc);
            const DD = tD.i.subscribe("requestingPlayVideoAd", (() => {
              MD(Jc)
            }));
            return () => {
              clearTimeout(fD.current), tD.i.unsubscribe(DD)
            }
          }), []), (0, pD.useEffect)((() => {
            (SD.current > wD || yD.current > BD) && MD(6e4), SD.current = wD, yD.current = BD
          }), [wD, BD]), (0, pD.useEffect)((() => {
            let CD = null;
            return DD ? CD = setTimeout((() => {
              iD(!0)
            }), 250) : iD(!1), () => {
              clearTimeout(CD)
            }
          }), [DD]), CD && ID
        }(cD);
      (0, PD.g)(Nc.b, null);
      const ZD = (0, Nc.l)(),
        oD = ZD.some((DD => DD.panel)),
        vD = (0, UD.g)("inventory", (DD => null !== DD.chest && (null !== DD.chest.ironChest || VI(DD.chest.numSlots)))),
        ND = cp(cD),
        gD = cp(cD),
        [XD, mD] = (0, pD.useState)([]),
        nD = (0, pD.useCallback)((DD => {
          mD((CD => CD.filter((CD => CD.id !== DD))))
        }), []),
        OD = (0, pD.useRef)(null),
        xD = (0, pD.useRef)(0),
        qD = (0, pD.useCallback)((() => {
          OD.current && (xD.current = OD.current.scrollTop), iD()
        }), [iD]),
        JD = (0, QD.h)("inventoryItemsMoveable"),
        KD = (0, QD.h)("canCraft"),
        {
          clientEscMenuOptions: aD
        } = (0, GD.o)(["clientEscMenuOptions"]),
        VD = (0, pD.useRef)(null);
      VD.current || (VD.current = new Dp(wD.gameBridge.latest("inventory").player));
      const jD = VD.current,
        {
          draggedDomRef: lD,
          draggedInfoRef: LD,
          specialItemRef: TD,
          hoverInfoDomRef: RD,
          longHoldSplitInfoRef: kD,
          currHoveredIdx: dD,
          currHoveredDisplayInfo: YD,
          displayDraggedItemName: WD,
          forceRerenderIfVisible: sD,
          removeDraggedInfoRef: ED,
          checkDraggedItemConsistencyWithInven: eD,
          refreshDraggedAttributes: uD,
          swapSlots: hD,
          getPointerDownForIdx: rD,
          getPointerUpForIdx: AD,
          getSetHovering: FD,
          setCurrHoveredDisplayInfo: DC,
          moveFollowerTo: CC
        } = FI({
          show: cD,
          close: qD,
          canCraft: KD,
          variation: bD,
          inventoryItemsMoveable: JD,
          setCraftFlyAnims: mD
        });
      (0, pD.useEffect)((() => {
        const DD = !cD && null !== wD.gameBridge.latest("inventory").chest;
        if (DD && wD.gameBridge.send("closeChest", null), cD || (jD.clearMarks(), FD(null)(!1)), DD) {
          Oc.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [cD]), (0, UD.c)("chestToggled", (DD => {
        if (DD ? ID() : cD && qD(), DD) {
          Oc.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const cC = (0, EC.h)();
      (0, UD.c)("inventory", (DD => {
        let {
          player: CD
        } = DD;
        var ID, pD, iD;
        (jD.update(CD, !cD && cC.shown), TD.current) && (TD.current = (pD = TD.current, iD = null !== (ID = CD[TD.current.idx]) && void 0 !== ID ? ID : null, uI(pD, iD) ? (pD.attributes = iD.attributes, null !== iD.amount && pD.amount > iD.amount && (pD.amount = iD.amount), pD) : null));
        uD(), null !== dD && FD(dD)(!0), sD()
      })), (0, pD.useEffect)((() => (wD.gameBridge.send("setInventoryOpen", cD), () => {
        wD.gameBridge.send("setInventoryOpen", !1)
      })), [cD]);
      const IC = (DD, CD) => {
        if (DD === xc.c) return void(DD => {
          const CD = TD.current;
          if (!CD || null === (0, Hc.i)(wD.gameBridge.latest("inventory"), CD.idx)) return;
          const cD = DD ? Math.max(CD.amount, 1) : 1,
            ID = CD.amount - cD;
          if (!wD.gameBridge.send("removeInventoryItem", {
              slot: CD.idx,
              amount: cD,
              drop: !0
            })) return;
          const pD = TD.current;
          pD && (pD.amount = Math.min(pD.amount, ID), pD.amount <= 0 && (TD.current = null)), sD()
        })(CD);
        const cD = null === DD ? null : (0, Hc.i)(wD.gameBridge.latest("inventory"), DD);
        if (null !== cD) {
          var ID, pD, iD;
          const fD = CD && null !== (ID = cD.amount) && void 0 !== ID ? ID : 1;
          wD.gameBridge.send("removeInventoryItem", {
            slot: DD,
            amount: fD,
            drop: !0
          }), DD === (null === (pD = LD.current) || void 0 === pD ? void 0 : pD.idx) && (LD.current.amount -= fD, LD.current.amount <= 0 && ED(), sD()), DD === (null === (iD = TD.current) || void 0 === iD ? void 0 : iD.idx) && (TD.current = null, sD())
        }
      };
      (0, UD.c)("inventoryDropRequested", (DD => {
        cD && dD !== xc.c && IC(dD, DD)
      }));
      const pC = (DD, CD) => {
        let cD = CD;
        if (CD === xc.c) {
          if (!TD.current) return;
          cD = TD.current.idx
        }
        const ID = hD(DD, cD);
        if (ID && LD.current && (LD.current.idx === cD ? LD.current.idx = DD : LD.current.idx === DD && (LD.current.idx = cD)), ID && CD === xc.c) {
          const DD = (0, Hc.i)(wD.gameBridge.latest("inventory"), cD);
          TD.current = DD ? {
            idx: cD,
            name: DD.name,
            attributes: DD.attributes,
            amount: DD.amount
          } : null
        }
        sD()
      };
      (0, UD.c)("numberKeyPressed", (DD => {
        null !== dD && cD && pC(DD - 1, dD)
      })), (0, pD.useEffect)((() => {
        cD || (TD.current = null, ED(), DC(null))
      }), [cD, ED, DC, TD]);
      const iC = TD.current;
      (0, pD.useEffect)((() => {
        dD === xc.c && FD(xc.c)(!0)
      }), [iC, dD, FD]);
      const fC = () => {
        eD(), uD(), sD()
      };
      (0, UD.c)("chestRefreshed", fC), (0, UD.c)("inventorySynced", fC);
      const [bC, QC] = (0, pD.useState)(new Map), wC = null !== (CD = bC.get(bD)) && void 0 !== CD ? CD : null, SC = (DD, CD) => {
        QC((cD => {
          const ID = cD.get(DD);
          return ID && ID.name === CD.name && ID.xS === CD.xS ? cD : new Map(cD).set(DD, CD)
        }))
      };
      (0, PD.f)("craftingRecipesEdited", (() => {
        sD()
      })), (0, PD.f)(pI.d, (DD => {
        let {
          variation: CD,
          itemName: cD
        } = DD;
        SC(CD, {
          name: cD,
          xS: 0
        })
      }));
      const [BC, yC] = (0, pD.useState)(null), [tC, ZC] = (0, pD.useState)(null);
      (0, UD.c)("enchantingTableOpened", (DD => {
        let {
          position: CD,
          blockName: cD
        } = DD;
        yC(CD), ZC(cD)
      }));
      const [oC, vC] = (0, pD.useState)(""), [NC, gC] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        cD && OD.current && (OD.current.scrollTop = xD.current)
      }), [cD]);
      return (DD => {
        const CD = (0, pD.useRef)(DD);
        CD.current = DD, (0, pD.useEffect)((() => {
          if (!DD.show) return;
          const cD = (DD, cD, ID, pD) => {
              const {
                getPointerDownForIdx: iD,
                getPointerUpForIdx: fD
              } = CD.current;
              iD(DD)(Cp(cD, ID, pD)), fD(DD)(Cp(cD, ID, pD))
            },
            ID = {
              primary: (DD, CD) => {
                cD(DD, CD, 0, !1)
              },
              secondary: (DD, CD) => {
                cD(DD, CD, 2, !1)
              },
              quickMove: (DD, CD) => {
                cD(DD, CD, 0, !0)
              },
              dropHeld: (DD, cD) => {
                CD.current.getPointerDownForIdx(xc.b)(Cp(cD, DD ? 0 : 2, !1))
              },
              dropSlot: (DD, cD) => {
                CD.current.dropFromIdx(DD, cD)
              },
              swapWithHotbar: (DD, cD) => {
                CD.current.swapWithHotbar(DD, cD)
              },
              cancel: () => {
                CD.current.removeDraggedInfoRef()
              },
              isHolding: () => !!CD.current.draggedInfoRef.current,
              hasItemAt: DD => {
                const {
                  draggedInfoRef: cD,
                  specialItemRef: ID
                } = CD.current;
                if (DD === xc.c) return !!ID.current;
                const pD = (0, Hc.i)(wD.gameBridge.latest("inventory"), DD);
                return !!pD && (0, kc.e)(DD, (0, Hc.d)(pD), [cD.current, ID.current]).shown
              },
              hover: (DD, cD) => {
                const {
                  moveFollowerTo: ID,
                  getSetHovering: pD
                } = CD.current;
                ID(cD.clientX, cD.clientY), pD(null !== DD && void 0 !== DD ? DD : void 0)(null !== DD, void 0, {
                  pageX: cD.clientX,
                  pageY: cD.clientY
                })
              },
              moveTo: DD => {
                CD.current.moveFollowerTo(DD.clientX, DD.clientY)
              },
              close: () => {
                CD.current.close()
              }
            };
          return (0, gc.m)(ID)
        }), [DD.show])
      })({
        show: cD,
        close: qD,
        draggedInfoRef: LD,
        specialItemRef: TD,
        getPointerDownForIdx: rD,
        getPointerUpForIdx: AD,
        getSetHovering: FD,
        moveFollowerTo: CC,
        removeDraggedInfoRef: ED,
        dropFromIdx: IC,
        swapWithHotbar: pC
      }), (0, pD.useEffect)((() => {
        tD.i.Uo("inventoryDraggedItemUpdated", {
          draggedInfo: LD.current,
          specialItemInfo: TD.current,
          setHovered: FD,
          pointerDown: rD,
          pointerUp: AD,
          variation: KD ? bD : void 0,
          craftFlyAnims: XD
        })
      })), (0, SD.jsxs)(zD.c, {
        show: cD,
        style: {
          touchAction: cD ? "none" : void 0
        },
        children: [LD.current && (0, SD.jsx)(ac, {
          draggedInfo: LD.current,
          toAddRef: lD
        }), LD.current && WD && (0, SD.jsx)(Vc, {
          className: "DraggedInvenItemName",
          displayInfo: AI(LD.current),
          domRef: null
        }), !LD.current && YD && (0, SD.jsx)(Vc, {
          displayInfo: YD,
          domRef: RD
        }), kD.current && LD.current && (0, SD.jsx)(zc, {
          info: kD.current,
          draggedInfo: LD.current
        }), XD.map((DD => (0, SD.jsx)(Uc.d, {
          anim: DD,
          onComplete: nD
        }, DD.id))), (0, SD.jsx)(fD.e, {
          show: cD,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: qD,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: rD(xc.b),
          pointerUp: AD(xc.b),
          doGameplayStartStopOnShow: !0
        }), ND && (0, SD.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, SD.jsx)("div", {
            ref: BD,
            className: "InventoryAdOuter",
            children: (0, SD.jsx)(Pc.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: BD
              },
              verticalAlign: "start",
              showing: cD && MD,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, SD.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, SD.jsxs)("div", {
              className: MC()("Inventory", {
                WithPanelButtons: oD,
                WideChestOpen: vD
              }),
              children: [(0, SD.jsx)("div", {
                className: "InventoryFiller"
              }), (0, SD.jsx)(nc, {
                show: cD,
                buttons: ZD
              }), (0, SD.jsxs)("div", {
                className: "InvenBody",
                children: [(0, SD.jsx)(LI, {
                  variation: bD,
                  canCraft: KD,
                  show: cD,
                  creativeMounted: gD,
                  specialItemRef: TD,
                  draggedInfo: LD.current,
                  getSetHovering: FD,
                  getPointerDownForIdx: rD,
                  getPointerUpForIdx: AD,
                  enchantingTablePosition: BC,
                  enchantingTableBlockName: tC,
                  selectedCraftable: wC,
                  dispatchSelectedCraftable: DD => {
                    SC(bD, DD)
                  },
                  creativeScrollDiv: OD,
                  creativeSearchVal: oC,
                  setCreativeSearchVal: vC,
                  creativeCategory: NC,
                  setCreativeCategory: gC,
                  onCraft: function(DD, CD) {
                    let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (eD(), (DD || cD.length > 0) && mD((CD => {
                        const ID = [...CD],
                          pD = CD.filter((DD => "ingredient" === DD.kind)).length;
                        for (const DD of cD.slice(0, Math.max(0, 24 - pD))) ID.push({
                          id: (0, Uc.f)(),
                          ...DD,
                          to: DD.to
                        });
                        return DD && ID.push({
                          id: (0, Uc.f)(),
                          ...DD,
                          to: (0, Hc.f)(DD.iB)
                        }), ID
                      })), null !== CD) {
                      var ID;
                      const DD = wD.gameBridge.latest("inventory");
                      (0, HD.zb)(null === (ID = (0, Hc.i)(DD, CD)) || void 0 === ID ? void 0 : ID.name) ? rD(CD)({
                        button: 0,
                        shiftKey: !0
                      }): hD(CD, DD.selectedSlot)
                    }
                  }
                }), (0, SD.jsx)(WI, {
                  draggedInfo: LD.current,
                  specialItemInfo: TD.current,
                  craftFlyAnims: XD,
                  getSetHovering: FD,
                  getPointerDownForIdx: rD,
                  getPointerUpForIdx: AD,
                  variation: bD,
                  canCraft: KD,
                  isNewSlot: DD => aD.showNewItemIndicator && jD.isNew(DD)
                })]
              })]
            }), (0, SD.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, SD.jsx)("div", {
                ref: yD,
                className: "InventoryAd",
                children: (0, SD.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var pp = cD(1425),
      ip = cD(120);
    const fp = (0, pD.memo)((function(DD) {
      let {
        show: CD,
        onOpen: cD,
        onClose: ID
      } = DD;
      const iD = (0, pD.useRef)(0),
        bD = () => (0, pp.c)() && !(0, pp.l)() && iD.current <= 2;
      CD = bD() && CD;
      const QD = () => {
        iD.current++, ID()
      };
      (0, PD.f)("ctrlCrouchWithoutFullscreen", (() => {
        bD() && cD()
      })), (0, PD.f)("displaymodeFullscreenChange", (DD => {
        CD && DD && QD()
      }));
      const wD = "crazygames" === ip.p;
      return (0, SD.jsx)(fD.e, {
        close: QD,
        escDoesExit: !0,
        show: CD,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, SD.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, SD.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), wD && (0, SD.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, SD.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, SD.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!wD && (0, SD.jsx)(MD.o, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, pp.p)(), QD()
              },
              children: (0, SD.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, SD.jsx)(MD.J, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                QD()
              },
              children: (0, SD.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var bp = cD(3419),
      Qp = cD(3442),
      wp = cD(1340),
      Sp = cD(3395),
      Bp = cD(1347),
      yp = cD(35962),
      Mp = cD(3406),
      tp = cD(3410);

    function Zp(DD, CD) {
      return (0, yp.h)(!0, DD, CD) ? () => {
        !async function(DD) {
          await Sp.b.refresh();
          const {
            data: CD,
            failed: cD
          } = Sp.b.getState();
          if (null === CD || cD) return;
          const ID = Sp.b.getExclusion(DD);
          if ("blocked" === ID) return;
          const pD = null === ID;
          wp.NotificationProvider.showCustomPopup({
            body: CD => {
              const cD = cD => ({
                text: Mp.g[cD].text,
                onClick: () => {
                  CD(), (0, tp.f)(cD, DD, null)
                }
              });
              return (0, SD.jsx)(Bp.h, {
                title: pD ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: DD
                  }
                },
                secondary: pD ? cD("ignore") : void 0,
                confirm: cD("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: CD
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(DD)
      } : null
    }
    cD(3435);
    const op = (0, pD.memo)((function(DD) {
      let {
        show: CD,
        onOpen: cD,
        onClose: ID
      } = DD;
      const [iD, bD] = (0, pD.useState)(""), [QD, BD] = (0, pD.useState)(""), [yD, MD] = (0, pD.useState)(null), [tD, ZD] = (0, pD.useState)(null), oD = (0, UD.h)("hiddenPlayerNames"), vD = {
        kind: "worldCodeLine",
        onSubmit: (DD, CD) => {
          ID(), wD.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: tD,
            wf: DD,
            details: CD
          })
        }
      }, ND = {
        kind: "player",
        shownPlayerName: (0, CC.f)(iD, oD),
        onSubmit: (DD, CD) => {
          ID(), (0, Qp.b)({
            playerId: QD,
            playerName: iD,
            chatMsgId: tD,
            policyId: DD,
            details: CD,
            onAccepted: Zp(iD, oD)
          })
        }
      };
      return (0, PD.f)("OpenReportMenu", (DD => {
        let {
          playerEId: CD,
          playerName: ID,
          Rf: pD,
          serverChatMsgId: iD
        } = DD;
        BD(CD), bD(ID), MD(pD), ZD(iD), cD()
      })), (0, SD.jsx)(fD.e, {
        show: CD,
        close: ID,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, SD.jsx)("div", {
          className: "ReportPanel",
          children: CD && (0, SD.jsx)(bp.b, {
            reported: null === QD ? vD : ND,
            chatMessage: yD,
            inGame: !0,
            onCancel: ID
          })
        })
      })
    }));
    var vp = cD(36202);
    const Np = (0, pD.memo)((function(DD) {
      let {
        show: CD,
        onOpen: cD,
        onClose: ID
      } = DD;
      const {
        t: iD
      } = (0, uD.F)(), [bD, QD] = (0, pD.useState)(null), [BD, yD] = (0, pD.useState)(0);
      (0, PD.f)("OpenDiscordReportBox", (DD => {
        wD.gameBridge.send("requestDiscordReportKey", DD), yD(0), cD()
      }));
      const tD = () => {
        ID(), QD(null), yD(0)
      };
      return (0, PD.f)("setDiscordReportKey", (DD => {
        QD(DD)
      })), (0, SD.jsx)(fD.e, {
        show: CD,
        close: tD,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, SD.jsx)("div", {
          className: "ReportPanel",
          children: (0, SD.jsx)(Bp.h, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(vp.c, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: tD
            },
            padStartsOn: "cancel",
            children: (0, SD.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, SD.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== bD && void 0 !== bD ? bD : iD("report:loadingReportKey")
              }), (0, SD.jsx)(MD.i, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(bD).catch((DD => {
                    console.error("Failed to copy report key:", DD)
                  })), yD(Date.now())
                },
                disabled: Date.now() - BD < 1e3 || !bD,
                children: Date.now() - BD < 1e3 ? iD("general:copied") : iD("general:copy")
              })]
            })
          })
        })
      })
    }));
    var gp = cD(1284);
    const Xp = {
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
      mp = (0, pD.memo)((function(DD) {
        let {
          show: CD,
          onOpen: cD,
          onClose: ID
        } = DD;
        const [iD, bD] = (0, pD.useState)(null), QD = (0, pD.useRef)(0), BD = (0, pD.useRef)(null), {
          t: yD
        } = (0, uD.F)();
        (0, PD.f)("EditCustomLobbyBlock", (DD => {
          let {
            pos: CD
          } = DD;
          bD(CD), null !== CD && cD(), BD.current.scrollTo(0, QD.current)
        }));
        const MD = DD => {
          wD.gameBridge.send("setCustomLobbyBlock", {
            pos: iD,
            blockName: DD
          }), ID()
        };
        return (0, SD.jsx)(fD.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: ID,
          escDoesExit: !0,
          show: CD,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, SD.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: BD,
            onScroll: () => {
              QD.current = BD.current.scrollTop
            },
            children: (0, SD.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Xp).map((DD => {
                let [CD, cD] = DD;
                return (0, SD.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, SD.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: yD(CD)
                  }), (0, SD.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(cD).map((DD => {
                      let [CD, {
                        tooltip: cD,
                        blocks: ID
                      }] = DD;
                      return (0, SD.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, SD.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [yD(CD), (0, SD.jsx)(ED.d, {
                            hoverInfo: yD(cD),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, SD.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: ID.map((DD => (0, SD.jsx)(np, {
                            blockName: DD,
                            selectBlock: MD
                          }, DD)))
                        })]
                      }, CD)
                    }))
                  })]
                }, CD)
              }))
            })
          })
        })
      })),
      np = (0, pD.memo)((function(DD) {
        var CD;
        let {
          blockName: cD,
          selectBlock: ID
        } = DD;
        const pD = (0, gI.e)(cD),
          iD = null !== (CD = void 0 === pD ? void 0 : (0, NI.displayNameOf)(pD)) && void 0 !== CD ? CD : cD,
          fD = void 0 === pD ? void 0 : (0, NI.descriptionOf)(pD);
        return (0, SD.jsx)(ED.f, {
          tooltipInner: (0, SD.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, SD.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, SD.jsx)(OD.c, {
                text: iD
              })
            }), fD && (0, SD.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, SD.jsx)(OD.c, {
                text: fD
              })
            })]
          }),
          children: (0, SD.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => ID(cD),
            children: (0, SD.jsx)(mc.d, {
              itemName: cD,
              amount: 1
            })
          })
        }, cD)
      }));
    var Op = cD(2790),
      Pp = cD(4070),
      Hp = cD(9074);

    function Up() {
      const DD = (0, UD.h)("itemInfo");
      return (0, pD.useMemo)((() => function(DD) {
        return {
          getDefaultItemStat(CD, cD) {
            var ID;
            const pD = DD[CD];
            return "description" === cD ? null === pD || void 0 === pD ? void 0 : pD.description : null !== (ID = null === pD || void 0 === pD ? void 0 : pD.displayName) && void 0 !== ID ? ID : CD
          }
        }
      }(DD)), [DD])
    }
    const xp = (0, pD.memo)((function(DD) {
        var CD, cD, ID, iD, bD, QD, wD, BD, yD, MD, tD, ZD, vD, ND, gD, XD, mD, nD, OD, HD, UD, xD, qD;
        let {
          togglePointerLock: JD,
          show: KD,
          onOpen: aD,
          onClose: VD
        } = DD;
        const {
          t: zD
        } = (0, uD.F)(), jD = Up(), lD = (0, pD.useRef)(null), LD = (0, pD.useRef)(Pp.b.MobHungerLevel.Hungry), TD = (0, pD.useRef)(null), GD = (0, Op.b)(), RD = (0, pD.useRef)(null), kD = (0, pD.useRef)(null), dD = lD.current;
        (0, pD.useEffect)((() => {
          if (!KD) return;
          const DD = Hp.f.openPet(RD.current);
          return kD.current = DD, () => {
            DD.close(), kD.current = null
          }
        }), [KD]), (0, pD.useEffect)((() => {
          KD && dD && kD.current.show(function(DD) {
            var CD;
            let {
              mobType: cD,
              mobSettings: ID
            } = DD;
            return {
              mobType: cD,
              variation: null !== (CD = ID.variation) && void 0 !== CD ? CD : "default",
              metaInfo: ID.metaInfo,
              tamed: !(0, aI.C)(ID.ownerDbId)
            }
          }(dD))
        }), [KD, dD]), (0, pD.useEffect)((() => {
          const DD = () => {
            var DD;
            const CD = Pp.b.getMobHungerLevel(null === (DD = lD.current) || void 0 === DD ? void 0 : DD.mobSettings.petInfo.lastFedAt);
            if (CD !== LD.current && (LD.current = CD, GD()), TD.current) {
              var cD;
              const DD = Date.now(),
                CD = Pp.b.getNextStateAt(null === (cD = lD.current) || void 0 === cD ? void 0 : cD.mobSettings.petInfo.lastFedAt);
              let ID = Math.floor((CD - DD) / 1e3),
                pD = "";
              if (ID > 3600) {
                pD += Math.floor(ID / 60 / 60).toString().padStart(2, "0"), pD += ":", ID %= 3600
              }
              const iD = ID % 60;
              pD += Math.floor(ID / 60).toString().padStart(2, "0"), pD += ":", pD += iD.toString().padStart(2, "0"), TD.current.textContent = pD
            }
          };
          DD();
          const CD = setInterval(DD, 250);
          return () => {
            clearInterval(CD)
          }
        }), [dD, GD]), (0, PD.f)("showPetUi", (DD => {
          let {
            mobType: CD,
            mobSettings: cD
          } = DD;
          lD.current = {
            mobType: CD,
            mobSettings: cD
          }, KD || aD()
        }));
        const YD = null === (CD = lD.current) || void 0 === CD ? void 0 : CD.mobSettings.health,
          WD = null === (cD = lD.current) || void 0 === cD ? void 0 : cD.mobSettings.maxHealth,
          sD = Pp.b.getFriendshipLevelInfo(null !== (ID = null === (iD = lD.current) || void 0 === iD ? void 0 : iD.mobSettings.petInfo.friendshipPoints) && void 0 !== ID ? ID : 0);
        return (0, SD.jsx)(fD.e, {
          className: "PetUIOuter",
          close: VD,
          escDoesExit: !0,
          show: KD,
          togglePointerLock: JD,
          forcePointerUnlock: KD,
          globallyUniqueKey: "PetUI",
          children: (0, SD.jsx)("div", {
            className: "PetUI",
            children: (0, SD.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, SD.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, SD.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (bD = null === (QD = lD.current) || void 0 === QD ? void 0 : QD.mobSettings.name) && void 0 !== bD ? bD : "Your Pet"
                }), (0, SD.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: RD
                })]
              }), (0, SD.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, aI.C)(null === (wD = lD.current) || void 0 === wD ? void 0 : wD.mobSettings.petInfo.friendshipPoints) && (0, SD.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, SD.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: zD("mobAiPlugin:friendshipTitle")
                  }), (0, SD.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Pp.b.getIconsFromFriendshipPoints(null !== (BD = lD.current.mobSettings.petInfo.friendshipPoints) && void 0 !== BD ? BD : 0).map(((DD, CD) => (0, SD.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: DD,
                        amount: 1
                      })
                    }, CD)))
                  }), (0, SD.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, SD.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, SD.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${sD.totalPointsForNextLevel>0?Math.max(sD.pointsIntoCurrentLevel/sD.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, SD.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: sD.totalPointsForNextLevel > 0 ? ` ${Math.ceil(sD.pointsIntoCurrentLevel)}/${Math.ceil(sD.totalPointsForNextLevel)}` : Math.ceil(sD.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, SD.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, SD.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: zD("mobAiPlugin:hungerTitle")
                  }), (0, SD.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Pp.b.hungerLevelIcons[LD.current].map(((DD, CD) => (0, SD.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: DD,
                        amount: 1
                      })
                    }, CD)))
                  }), (0, SD.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [zD(Pp.b.hungerLevelTranslations[LD.current].translationKey), LD.current !== Pp.b.MobHungerLevel.Starving && !(0, aI.C)(null === (yD = lD.current) || void 0 === yD ? void 0 : yD.mobSettings.petInfo.lastFedAt) && (0, SD.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [zD("mobAiPlugin:nextFeedIn", {
                        state: zD(Pp.b.hungerLevelTranslations[LD.current + 1].translationKey)
                      }), ":", " ", (0, SD.jsx)("span", {
                        ref: TD
                      })]
                    })]
                  })]
                }), (0, SD.jsx)(ED.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, SD.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: zD("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, SD.jsxs)("div", {
                    className: MC()("PetUIQuickStatsItem", {
                      Disabled: (0, aI.C)(YD) || (0, aI.C)(WD)
                    }),
                    children: [(0, SD.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, SD.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, aI.C)(YD) || (0, aI.C)(WD) ? "" : (0, SD.jsxs)(SD.Fragment, {
                        children: [Math.ceil(YD), (0, SD.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(WD)]
                        })]
                      })
                    })]
                  })
                }), (0, SD.jsx)(ED.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, SD.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: zD("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, SD.jsxs)("div", {
                    className: MC()("PetUIQuickStatsItem", {
                      Disabled: (0, aI.C)(null === (MD = lD.current) || void 0 === MD ? void 0 : MD.mobSettings.attackDamage) || lD.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, SD.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, SD.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (tD = lD.current) || void 0 === tD ? void 0 : tD.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, SD.jsx)(ED.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, SD.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: zD("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, SD.jsxs)("div", {
                    className: MC()("PetUIQuickStatsItem", {
                      Disabled: (0, aI.C)(null === (ZD = lD.current) || void 0 === ZD ? void 0 : ZD.mobSettings.secondaryAttackDamage) || lD.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, SD.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, SD.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (vD = lD.current) || void 0 === vD ? void 0 : vD.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, SD.jsx)(ED.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, SD.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: zD("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, SD.jsxs)("div", {
                    className: MC()("PetUIQuickStatsItem", {
                      Disabled: (0, aI.C)(null === (ND = lD.current) || void 0 === ND ? void 0 : ND.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, SD.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, SD.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (gD = null === (XD = lD.current) || void 0 === XD || null === (mD = XD.mobSettings.baseRunningSpeed) || void 0 === mD ? void 0 : mD.toFixed(2)) && void 0 !== gD ? gD : ""
                    })]
                  })
                }), (0, SD.jsx)(ED.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, SD.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: zD("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, SD.jsxs)("div", {
                    className: MC()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (nD = lD.current) || void 0 === nD ? void 0 : nD.mobSettings.metaInfo)
                    }),
                    children: [(0, SD.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, SD.jsx)(mc.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, SD.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (OD = lD.current) || void 0 === OD ? void 0 : OD.mobSettings.metaInfo) ? (0, SD.jsx)(oD.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, aI.C)(null === (HD = lD.current) || void 0 === HD ? void 0 : HD.mobSettings.tameInfo) && (0, SD.jsxs)(SD.Fragment, {
                  children: [(0, SD.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, SD.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, SD.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, SD.jsx)(Jp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Pp.b.feedTextColours[Pp.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, SD.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, SD.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: lD.current.mobSettings.petInfo.superlikedFoodKnown ? (0, SD.jsx)(qp, {
                            food: lD.current.mobSettings.petInfo.superlikedFood
                          }) : (0, SD.jsx)(Jp, {
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
                    }), (0, SD.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, SD.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, SD.jsx)(Jp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Pp.b.feedTextColours[Pp.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, SD.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (UD = lD.current.mobSettings.tameInfo.likedFoods) || void 0 === UD ? void 0 : UD.filter((DD => !lD.current.mobSettings.petInfo.superlikedFoodKnown || DD !== lD.current.mobSettings.petInfo.superlikedFood)).map((DD => (0, SD.jsx)(qp, {
                          food: DD
                        }, DD)))
                      })]
                    }), (0, SD.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, SD.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, SD.jsx)(Jp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Pp.b.feedTextColours[Pp.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, SD.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (xD = lD.current.mobSettings.tameInfo.neutralFoods) || void 0 === xD ? void 0 : xD.map((DD => (0, SD.jsx)(qp, {
                          food: DD
                        }, DD)))
                      })]
                    }), (0, SD.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, SD.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, SD.jsx)(Jp, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Pp.b.feedTextColours[Pp.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, SD.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (qD = lD.current.mobSettings.tameInfo.dislikedFoods) || void 0 === qD ? void 0 : qD.map((DD => (0, SD.jsx)(qp, {
                          food: DD
                        }, DD)))
                      })]
                    })]
                  }), lD.current.mobSettings.tameInfo.levelUpBonuses && (0, SD.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Pp.b.MAX_LEVEL + 1
                    }).map(((DD, CD) => {
                      const cD = CD;
                      if (0 === cD) return null;
                      const ID = lD.current.mobSettings.tameInfo.levelUpBonuses[cD],
                        pD = Pp.b.getBonusDisplayInfo(jD, lD.current.mobSettings, lD.current.mobType, ID);
                      return (0, SD.jsxs)("div", {
                        className: MC()("PetUIFeedDropContainer", {
                          Selected: cD === Pp.b.getFriendshipLevelInfo(lD.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, SD.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: cD
                          }).map(((DD, CD) => (0, SD.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, SD.jsx)(mc.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${cD}-${CD}`)))
                        }), (0, SD.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: pD && (0, SD.jsx)(Jp, {
                            icon: pD.icon,
                            displayName: pD.displayName,
                            description: pD.description
                          })
                        })]
                      }, cD)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      qp = (0, pD.memo)((function(DD) {
        let {
          food: CD,
          includeDescription: cD = !1
        } = DD;
        const ID = Up(),
          pD = ID.getDefaultItemStat(CD, "displayName"),
          iD = ID.getDefaultItemStat(CD, "description");
        return (0, SD.jsx)(Jp, {
          icon: CD,
          displayName: pD,
          description: cD ? iD : null
        })
      })),
      Jp = (0, pD.memo)((function(DD) {
        let {
          icon: CD,
          displayName: cD,
          description: ID,
          tintColor: pD,
          className: iD = "PetUIFoodItem"
        } = DD;
        return (0, SD.jsx)(ED.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, SD.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, SD.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, SD.jsx)(OD.c, {
                text: cD
              })
            }), ID && (0, SD.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, SD.jsx)(OD.c, {
                text: ID
              })
            })]
          }),
          children: (0, SD.jsx)("div", {
            className: iD,
            children: (0, SD.jsx)(mc.d, {
              itemName: CD,
              amount: 1,
              tintColor: pD
            })
          })
        })
      }));
    var Kp = cD(3583),
      ap = cD(1127),
      Vp = cD(1240),
      zp = cD(36216),
      jp = cD(36213),
      lp = cD(1011),
      Lp = cD(2308);

    function Tp(DD) {
      let {
        peers: CD
      } = DD;
      const [cD, ID] = (0, pD.useState)(null), iD = (0, UD.h)("players");
      return (0, SD.jsx)("div", {
        className: "CodeEditorPresence",
        children: CD.map((DD => {
          var CD, pD;
          const fD = null !== (CD = null === (pD = iD.byId[DD.playerId]) || void 0 === pD ? void 0 : pD.cosmetics) && void 0 !== CD ? CD : {};
          return (0, SD.jsxs)("div", {
            className: MC()("PresenceIcon", {
              Viewer: !DD.isEditor
            }),
            style: {
              backgroundColor: DD.colour
            },
            onMouseEnter: () => {
              ID(DD.playerId)
            },
            onMouseLeave: () => {
              ID(null)
            },
            children: [(0, SD.jsx)(Lp.e, {
              cosmetics: fD
            }), cD === DD.playerId && (0, SD.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: DD.colour
              },
              children: DD.playerName
            })]
          }, DD.playerId)
        }))
      })
    }
    var Gp = cD(656),
      Rp = cD(36208),
      kp = cD(35958),
      dp = cD(36223);

    function Yp(DD) {
      const CD = DD.split("/"),
        cD = [];
      for (let ID = 1; ID < CD.length; ID++) cD.push(CD.slice(0, ID).join("/"));
      return cD
    }

    function Wp(DD) {
      return DD.slice(DD.lastIndexOf("/") + 1)
    }
    const sp = (0, pD.memo)((function(DD) {
      var CD;
      let {
        files: cD,
        activePath: ID,
        canEdit: iD,
        directoryLinked: fD,
        pluginNames: bD,
        activePluginName: QD,
        activePluginFile: wD,
        onSelect: BD,
        onSelectPlugin: yD,
        onCreate: tD,
        onRename: ZD,
        onRenameFolder: vD,
        onDelete: ND,
        onToggleDirectorySync: gD,
        schematics: XD,
        onManageSchematic: mD
      } = DD;
      const {
        t: nD
      } = (0, uD.F)(), OD = null !== (CD = (0, jp.d)(cD)) && void 0 !== CD ? CD : Vp.g, PD = Object.keys(cD), [HD, UD] = (0, pD.useState)((() => new Set)), xD = function(DD, CD, cD) {
        const ID = {
          folders: new Map,
          files: []
        };
        for (const fD of DD) {
          if (fD === CD) continue;
          let DD = ID;
          for (const CD of Yp(fD)) {
            let cD = DD.folders.get(CD);
            cD || (cD = {
              folders: new Map,
              files: []
            }, DD.folders.set(CD, cD)), DD = cD
          }
          DD.files.push(fD)
        }
        const pD = [];
        DD.includes(CD) && pD.push({
          kind: "file",
          path: CD,
          name: Wp(CD),
          depth: 0
        });
        const iD = (DD, CD) => {
          const ID = [...DD.folders.entries()].sort(((DD, CD) => {
            let [cD] = DD, [ID] = CD;
            return cD.localeCompare(ID)
          }));
          for (const [fD, bD] of ID) {
            const DD = cD.has(fD);
            pD.push({
              kind: "folder",
              path: fD,
              name: Wp(fD),
              depth: CD,
              collapsed: DD
            }), DD || iD(bD, CD + 1)
          }
          DD.files.sort(((DD, CD) => DD.localeCompare(CD)));
          for (const cD of DD.files) pD.push({
            kind: "file",
            path: cD,
            name: Wp(cD),
            depth: CD
          })
        };
        return iD(ID, 0), pD
      }(PD, OD, HD);
      (0, pD.useEffect)((() => {
        UD((DD => {
          const CD = new Set(DD);
          let cD = !1;
          for (const pD of Yp(ID)) cD = CD.delete(pD) || cD;
          return cD ? CD : DD
        }))
      }), [ID]);
      const qD = PD.length >= pc.y,
        JD = (DD, CD) => {
          if (DD.length > zp.r) return `Path must be at most ${zp.r} characters`;
          if (!(0, zp.q)(DD)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === DD) return "index.d.ts cannot be the world-code entry";
          const ID = !!CD && (0, jp.h)(CD, DD);
          if (CD && (0, jp.i)(CD) && !ID) return `Cannot rename ${CD} (only swapping ${Vp.g} and ${Vp.i} is allowed)`;
          if (DD in cD) return "A file with that path already exists";
          if ((0, jp.i)(DD) && !ID) {
            if ((DD === Vp.g ? Vp.i : Vp.g) in cD) return `World code cannot have both ${Vp.g} and ${Vp.i}`
          }
          return null
        },
        KD = DD => {
          wp.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === DD ? void 0 : `${DD}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: DD => JD(DD)
          }).getResult().then((DD => {
            "notificationTornDown" !== DD && null !== DD && "submit" === DD.type && tD(DD.value)
          }))
        },
        aD = DD => {
          wp.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: DD,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: CD => CD === DD ? "That is already the file's path" : JD(CD, DD)
          }).getResult().then((CD => {
            "notificationTornDown" !== CD && null !== CD && "submit" === CD.type && ZD(DD, CD.value)
          }))
        },
        VD = DD => {
          const CD = DD => DD.replace(/\/+$/, "");
          wp.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: DD,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: cD => {
              const ID = CD(cD);
              if (ID === DD) return "That is already the folder's path";
              for (const [CD, pD] of(0, jp.n)(PD, DD, ID)) {
                const DD = JD(pD, CD);
                if (null !== DD) return DD
              }
              return null
            }
          }).getResult().then((cD => {
            "notificationTornDown" !== cD && null !== cD && "submit" === cD.type && vD(DD, CD(cD.value))
          }))
        },
        zD = DD => {
          wp.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: DD
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((CD => {
            !0 === CD && ND(DD)
          }))
        };
      return (0, SD.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, SD.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, SD.jsx)("span", {
            children: "Files"
          }), iD && !qD && (0, SD.jsx)(MD.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              KD()
            },
            children: (0, SD.jsx)(oD.c, {
              name: "plus"
            })
          })]
        }), (0, SD.jsxs)("div", {
          className: "FileTreeList",
          children: [xD.map((DD => {
            const CD = DD.path;
            if ("folder" === DD.kind) return (0, SD.jsx)(hp, {
              path: CD,
              name: DD.name,
              depth: DD.depth,
              collapsed: DD.collapsed,
              onToggle: () => {
                var DD;
                DD = CD, UD((CD => {
                  const cD = new Set(CD);
                  return cD.delete(DD) || cD.add(DD), cD
                }))
              },
              canCreate: iD && !qD,
              canRename: iD,
              onCreate: KD,
              onRename: VD
            }, `folder:${CD}`);
            const pD = (0, jp.i)(CD),
              fD = Vp.g in cD && Vp.i in cD,
              bD = !pD || fD,
              wD = null === QD && CD === ID;
            return (0, SD.jsx)(Ap, {
              path: CD,
              label: DD.name,
              depth: DD.depth,
              isActive: wD,
              canRename: iD,
              onSelect: BD,
              onRename: aD,
              onDelete: zD,
              canDelete: bD && iD
            }, CD)
          })), (0, SD.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, SD.jsxs)("span", {
              children: ["Schematics (", Object.keys(XD).length, "/", dp.f, ")"]
            }), iD && (0, SD.jsx)(MD.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(XD).length >= dp.f,
              onClick: () => {
                mD("")
              },
              children: (0, SD.jsx)(oD.c, {
                name: "plus"
              })
            })]
          }), Object.keys(XD).sort().map((DD => (0, SD.jsx)(Ap, {
            path: DD,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: mD
          }, DD))), bD.length > 0 && (0, SD.jsxs)(SD.Fragment, {
            children: [(0, SD.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, SD.jsx)("span", {
                children: "Plugins"
              })
            }), bD.map((DD => {
              var CD;
              const cD = Rp.e[DD],
                ID = Object.keys(null !== (CD = null === cD || void 0 === cD ? void 0 : cD.files) && void 0 !== CD ? CD : {
                  "index.ts": ""
                }).sort(((DD, CD) => "index.ts" === DD ? -1 : "index.ts" === CD ? 1 : DD.localeCompare(CD)));
              return (0, SD.jsxs)("div", {
                children: [(0, SD.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, jp.w)(DD)
                }), ID.map((CD => (0, SD.jsx)(Ap, {
                  path: CD,
                  nested: !0,
                  isActive: QD === DD && wD === CD,
                  canRename: !1,
                  onSelect: () => {
                    yD(DD, CD)
                  },
                  canDelete: !1
                }, CD)))]
              }, DD)
            }))]
          })]
        }), (0, SD.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, SD.jsx)(MD.i, {
            className: "FileTreeFooterButton",
            onClick: gD,
            children: nD(fD ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Ep(DD) {
      return DD > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": DD
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function ep(DD) {
      let {
        depth: CD
      } = DD;
      return (0, SD.jsx)(SD.Fragment, {
        children: Array.from({
          length: CD
        }, ((DD, CD) => (0, SD.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": CD
          }
        }, CD)))
      })
    }

    function hp(DD) {
      let {
        path: CD,
        name: cD,
        depth: ID,
        collapsed: pD,
        onToggle: iD,
        canCreate: fD,
        canRename: bD,
        onCreate: QD,
        onRename: wD
      } = DD;
      const BD = [];
      fD && BD.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          QD(CD)
        }
      }), bD && BD.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          wD(CD)
        }
      });
      const yD = Ep(ID);
      return (0, SD.jsxs)("div", {
        className: MC()("FileTreeItem FileTreeFolder", yD.className),
        style: yD.style,
        children: [(0, SD.jsx)(ep, {
          depth: ID
        }), (0, SD.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !pD,
          onClick: iD,
          children: [(0, SD.jsx)(oD.c, {
            className: "FileTreeFolderCaret",
            name: pD ? "caret-right" : "caret-down"
          }), (0, SD.jsx)(oD.c, {
            className: "FileTreeFolderIcon",
            name: pD ? "folder" : "folder-open"
          }), cD]
        }), (0, SD.jsx)(rp, {
          path: CD,
          actions: BD
        })]
      })
    }

    function rp(DD) {
      let {
        path: CD,
        actions: cD
      } = DD;
      const ID = (0, pD.useRef)(null);
      return 0 === cD.length ? null : (0, SD.jsxs)("div", {
        ref: ID,
        className: "FileTreeItemActions",
        children: [(0, SD.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${CD}`,
          children: (0, SD.jsx)(oD.c, {
            name: "ellipsis"
          })
        }), (0, SD.jsx)(kp.e, {
          triggerElementRef: ID,
          options: cD
        })]
      })
    }

    function Ap(DD) {
      let {
        path: CD,
        label: cD = CD,
        depth: ID = 0,
        isActive: pD,
        canRename: iD,
        onSelect: fD,
        onRename: bD,
        onDelete: QD,
        canDelete: wD,
        nested: BD
      } = DD;
      const yD = [];
      iD && bD && yD.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          bD(CD)
        }
      }), wD && QD && yD.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          QD(CD)
        }
      });
      const MD = Ep(ID);
      return (0, SD.jsxs)("div", {
        className: MC()("FileTreeItem", MD.className, {
          Active: pD,
          Nested: BD
        }),
        style: MD.style,
        children: [(0, SD.jsx)(ep, {
          depth: ID
        }), (0, SD.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: cD === CD ? void 0 : CD,
          onClick: () => {
            fD(CD)
          },
          children: cD
        }), (0, SD.jsx)(rp, {
          path: CD,
          actions: yD
        })]
      })
    }
    async function Fp(DD) {
      const CD = (0, jp.d)(DD);
      if (!CD || "" === DD[CD].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: ID
      } = await Promise.all([cD.e(289), cD.e(290)]).then((() => cD(40534)));
      return (0, Rp.d)(ID(DD))
    }
    var Di = cD(36231);

    function Ci(DD, CD) {
      const cD = Object.keys(DD),
        ID = Object.keys(CD);
      if (cD.length !== ID.length) return !1;
      for (const pD of cD)
        if (!(pD in CD) || DD[pD] !== CD[pD]) return !1;
      return !0
    }

    function ci(DD, CD) {
      const cD = [],
        ID = [],
        pD = [];
      for (const iD of Object.keys(CD)) iD in DD ? DD[iD] !== CD[iD] && pD.push(iD) : cD.push(iD);
      for (const iD of Object.keys(DD)) iD in CD || ID.push(iD);
      return cD.sort(), ID.sort(), pD.sort(), {
        creates: cD,
        deletes: ID,
        updates: pD
      }
    }

    function Ii(DD, CD) {
      var cD;
      const ID = {
          ...DD
        },
        pD = (0, jp.d)(CD),
        iD = (0, jp.d)(ID);
      if (Vp.g in ID && Vp.i in ID) {
        const DD = null !== pD && void 0 !== pD ? pD : Vp.i,
          cD = DD === Vp.g ? Vp.i : Vp.g;
        var fD;
        if (!(DD in ID)) ID[DD] = null !== (fD = CD[DD]) && void 0 !== fD ? fD : "";
        return delete ID[cD], ID
      }
      var bD;
      return pD && !(pD in ID) ? (iD || (ID[pD] = null !== (bD = CD[pD]) && void 0 !== bD ? bD : ""), ID) : (iD || pD || (ID[Vp.g] = null !== (cD = ID[Vp.g]) && void 0 !== cD ? cD : "", delete ID[Vp.i]), ID)
    }

    function ii(DD, CD) {
      const cD = (0, jp.d)(CD),
        ID = Vp.g in CD && Vp.i in CD;
      return DD.filter((DD => !(0, jp.i)(DD) || (!!ID || cD !== DD)))
    }
    async function fi(DD, CD, ID) {
      const pD = DD.getLobbyFiles(),
        iD = (0, pc.j)(ID, (0, jp.p)(pD, CD)),
        fD = await DD.ensureJoined(CD),
        bD = (0, zp.u)(fD.docKey);
      if (fD.doc === iD) return;
      for (let cD = 0; cD < 100; cD++) {
        const cD = DD.getCollabSnapshot();
        if (cD && (0, zp.u)(cD.docKey) === bD && DD.getActivePath() === CD) {
          if (DD.replaceActiveDoc(bD, iD)) return;
          await (0, aI.H)(40)
        } else await (0, aI.H)(40)
      }
      const {
        ChangeSet: QD
      } = await cD.e(285).then((() => cD(40379))), SD = DD.getCollabSnapshot(), BD = SD && (0, zp.u)(SD.docKey) === bD ? SD : fD;
      await async function(DD, CD, cD, ID) {
        const pD = DD.of({
            from: 0,
            to: cD.length,
            insert: ID
          }, cD.length),
          iD = JSON.stringify([{
            clientID: CD.clientID,
            changes: pD.toJSON()
          }]),
          fD = (0, zp.u)(CD.docKey);
        iD.length <= zp.g ? wD.gameBridge.send("sendCodeCollab", {
          tC: zp.e.Push,
          ZC: fD,
          oC: CD.version,
          gC: iD
        }) : await (0, ap.postJsonWithMetricsCookiesAndJsonResponse)(`${CD.httpConfig.gsUrl}/code/collab-push`, Kp.p["collab-push"].toBuffer({
          gameNameWithVariation: CD.httpConfig.gameNameWithVariation,
          lobbyName: CD.httpConfig.lobbyName,
          docKey: fD,
          version: CD.version,
          updates: iD
        }), {
          retries: 0
        })
      }(QD, BD, BD.doc, iD)
    }
    class bi {
      constructor(DD) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = DD
      }
      async writeLobbyFiles(DD) {
        const CD = {
            ...this.bridge.getLobbyFiles()
          },
          cD = {
            ...CD
          };
        for (const {
            path: iD,
            text: fD
          }
          of DD) cD[iD] = fD;
        if (!DD.every((DD => {
            let {
              path: CD,
              text: ID
            } = DD;
            return (0, pc.j)(ID, (0, jp.p)(cD, CD)) === ID
          }))) return !1;
        const ID = [];
        try {
          for (const {
              path: CD,
              text: cD
            }
            of DD) ID.push(CD), CD in this.bridge.getLobbyFiles() || (this.bridge.createFile(CD, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(CD, !0)), await fi(this.bridge, CD, cD)
        } catch (pD) {
          for (const DD of ID) DD in CD ? await fi(this.bridge, DD, CD[DD]).catch((CD => {
            console.error("World Code AI: couldn't put back", DD, CD)
          })) : this.bridge.deleteFile(DD);
          throw pD
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const DD = await (0, Di.r)(this.bridge.getStorageKey());
        return !!DD && (this.handle = DD, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(DD), !0)
      }
      async unlinkFolder() {
        const DD = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Di.b)(DD), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const DD = this.bridge.getStorageKey(),
          CD = await (0, Di.p)(DD);
        return !!CD && (!!await (0, Di.g)(CD, "readwrite") && (this.handle = CD, this.linked = !0, await (0, Di.A)(DD, CD), await this.scaffoldLocalTypes(CD), !0))
      }
      scaffoldLocalTypes(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const ID = (await Fp(CD)).map((DD => Rp.e[DD])),
              pD = ID.map((DD => {
                var CD;
                return `${DD.name}:${Object.keys(null!==(CD=null===DD||void 0===DD?void 0:DD.files)&&void 0!==CD?CD:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === pD) return;
            const {
              ensureLocalBloxdTypes: iD
            } = await Promise.all([cD.e(81), cD.e(287), cD.e(292)]).then((() => cD(40543)));
            await iD(DD, ID), this.scaffoldedPluginNamesKey = pD
          } catch (ID) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", ID)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(DD) {
        this.handle && await this.scaffoldLocalTypes(this.handle, DD), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(DD)
      }
      async onDocTextChanged(DD, CD) {
        if (!this.handle) return;
        const cD = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [DD]: CD
        })];
        this.running && (this.pendingDocText.set(DD, CD), cD.push(this.flushDocTextToDisk())), await Promise.all(cD)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const DD = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const CD = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [cD, ID] of CD) this.lastSynced[cD] !== ID && (await (0, Di.I)(DD, cD, ID), this.lastSynced = {
              ...this.lastSynced,
              [cD]: ID
            })
          }
        } catch (CD) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", CD), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Di.v)(this.handle))
          } catch (DD) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", DD)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, Di.g)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const CD = this.bridge.getLobbyFiles(),
              cD = await (0, Di.v)(this.handle);
            for (const DD of Object.keys(CD).filter(dp.b)) {
              if (cD[DD] === Di.m) return void this.bridge.setMessage(`Move ${DD} outside the linked folder before syncing its placeholder.`, "warning");
              cD[DD] = dp.o
            }
            if (Ci(cD, CD)) {
              for (const DD of Object.keys(CD).filter(dp.b)) await (0, Di.I)(this.handle, DD, dp.o);
              return this.lastSynced = {
                ...cD
              }, void this.beginWatch()
            }
            const ID = await this.promptReconcile(function(DD) {
              return null !== (0, jp.d)(DD)
            }(cD));
            if ("unlink" === ID) return void await this.unlinkFolder();
            if ("dismissed" === ID) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === ID) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(cD);
                for (const DD of Object.keys(CD).filter(dp.b)) await (0, Di.I)(this.handle, DD, dp.o);
                this.lastSynced = {
                  ...await (0, Di.v)(this.handle)
                }
              } else await (0, Di.L)(this.handle, CD), this.lastSynced = {
                ...CD
              }
            } catch (DD) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", DD), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(DD) {
        return await new Promise((CD => {
          const cD = [{
              choice: "local",
              Button: MD.i,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: MD.i,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: MD.i,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            ID = (0, SD.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, SD.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, SD.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: DD ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, SD.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: cD.filter((CD => "local" !== CD.choice || DD)).map((DD => {
                  let {
                    choice: cD,
                    Button: ID,
                    labelKey: iD,
                    descriptionKey: fD
                  } = DD;
                  return (0, SD.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, SD.jsx)(ID, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (DD => {
                          pD.tearDownNotification(), CD(DD)
                        })(cD)
                      },
                      children: this.bridge.t(`codeEditor:${iD}`)
                    }), (0, SD.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${fD}`)
                    })]
                  }, cD)
                }))
              })]
            }),
            pD = wp.NotificationProvider.showCustomPopup({
              body: ID,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          pD.getResult().then((DD => {
            "notificationTornDown" === DD && CD("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Di.E)(this.handle, (DD => {
          this.onDiskFilesChanged(DD)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (DD) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", DD)
        }
      }
      async onDiskFilesChanged(DD) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const CD = this.bridge.getLobbyFiles();
        let cD = Ii(DD, this.lastSynced);
        for (const iD in CD)
          if ((0, dp.b)(iD) && cD[iD] === Di.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const ID = Object.keys(cD).filter((DD => (0, dp.b)(DD) && !(DD in CD)));
        ID.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const iD of Object.keys(CD).filter(dp.b))(iD in cD || ID.length > 0 || !(iD in this.lastSynced)) && (cD[iD] = dp.o);
        if (!Ci(cD, DD)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(DD, cD), cD = Ii(await (0, Di.v)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Ci(cD, this.lastSynced)) {
          this.applying = !0;
          try {
            const DD = ci(this.lastSynced, cD);
            if (await this.pushDiskDeltaToLobby(cD, CD), null !== this.lastLobbySeen)
              for (const cD of [...DD.creates, ...DD.updates, ...DD.deletes])(0, dp.b)(cD) || (cD in CD ? this.lastLobbySeen[cD] = CD[cD] : delete this.lastLobbySeen[cD]);
            this.lastSynced = {
              ...cD
            }
          } catch (pD) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", pD), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(DD, CD) {
        if (this.handle) {
          for (const cD of Object.keys(DD)) cD in CD || await (0, Di.w)(this.handle, cD);
          for (const [cD, ID] of Object.entries(CD)) DD[cD] !== ID && await (0, Di.I)(this.handle, cD, ID)
        }
      }
      async applyRemoteTreeToDisk(DD) {
        if (!this.handle) return;
        const CD = this.lastLobbySeen;
        if (null === CD) return void(this.lastLobbySeen = {
          ...DD
        });
        const cD = Object.keys(DD).filter((cD => CD[cD] !== DD[cD])),
          ID = Object.keys(CD).filter((CD => !(CD in DD)));
        if (0 !== cD.length || 0 !== ID.length) {
          this.applying = !0;
          try {
            for (const CD of [...ID, ...cD]) try {
              if (CD in DD) await (0, Di.I)(this.handle, CD, DD[CD]), this.lastSynced = {
                ...this.lastSynced,
                [CD]: DD[CD]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [CD]: DD[CD]
              };
              else {
                await (0, Di.w)(this.handle, CD);
                const DD = {
                  ...this.lastSynced
                };
                delete DD[CD], this.lastSynced = DD;
                const cD = {
                  ...this.lastLobbySeen
                };
                delete cD[CD], this.lastLobbySeen = cD
              }
            } catch (pD) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", pD), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(DD, CD) {
        const cD = function(DD, CD) {
          const cD = (0, jp.d)(DD),
            ID = (0, jp.d)(CD);
          return cD && ID && cD !== ID ? {
            from: cD,
            to: ID
          } : null
        }(DD, CD);
        return !!cD && (this.bridge.renameFile(cD.from, cD.to), await this.bridge.waitForLobbyPath(cD.to, !0), !0)
      }
      async applyLocalTreeToLobby(DD) {
        var CD;
        const cD = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), DD);
        const ID = this.bridge.getLobbyFiles(),
          pD = ci(ID, DD),
          iD = ii(pD.deletes, ID);
        for (const wD of pD.creates)(0, dp.b)(wD) || (this.bridge.createFile(wD, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(wD, !0));
        for (const wD of iD)(0, dp.b)(wD) || (this.bridge.deleteFile(wD), await this.bridge.waitForLobbyPath(wD, !1));
        if (!(0, jp.d)(this.bridge.getLobbyFiles()) && !(0, jp.d)(DD)) {
          if (this.bridge.createFile(Vp.g, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Vp.g, !0), !this.handle) return;
          await (0, Di.I)(this.handle, Vp.g, ""), DD = {
            ...DD,
            [Vp.g]: ""
          }
        }
        const fD = this.bridge.getLobbyFiles();
        for (const wD of Object.keys(DD))(0, dp.b)(wD) || fD[wD] !== DD[wD] && await fi(this.bridge, wD, DD[wD]);
        const bD = this.bridge.getLobbyFiles(),
          QD = cD in bD ? cD : null !== (CD = (0, jp.d)(bD)) && void 0 !== CD ? CD : Vp.g;
        await this.bridge.ensureJoined(QD)
      }
      async pushDiskDeltaToLobby(DD, CD) {
        const cD = this.bridge.getActivePath(),
          ID = await this.renameLobbyEntryIfSwitched(CD, DD) ? this.bridge.getLobbyFiles() : CD,
          pD = ci(this.lastSynced, DD),
          iD = ii(pD.deletes, ID).filter((DD => DD in ID));
        for (const fD of pD.creates)(0, dp.b)(fD) || (fD in this.bridge.getLobbyFiles() || (this.bridge.createFile(fD, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(fD, !0)), await fi(this.bridge, fD, DD[fD]));
        for (const fD of iD)(0, dp.b)(fD) ? await this.bridge.deleteSchematic(fD) : (this.bridge.deleteFile(fD), await this.bridge.waitForLobbyPath(fD, !1));
        for (const fD of pD.updates)(0, dp.b)(fD) || await fi(this.bridge, fD, DD[fD]);
        cD in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== cD && await this.bridge.ensureJoined(cD)
      }
    }
    var Qi = cD(1199);

    function wi() {
      const {
        websocketUrl: DD,
        gameNameWithVariation: CD,
        lobbyName: cD
      } = wD.gameBridge.latest("connectedGame");
      return {
        gsUrl: Qi.clientSideServerUrls.getHttpUrlFromWebSocketUrl(DD),
        gameNameWithVariation: CD,
        lobbyName: cD
      }
    }
    async function Si(DD) {
      const {
        gsUrl: CD,
        gameNameWithVariation: cD,
        lobbyName: ID
      } = wi();
      return await (0, ap.postBinaryWithMetricsCookiesAndCustomResponse)(`${CD}/code/schematics`, Kp.Uj.schematics.toBuffer({
        gameNameWithVariation: cD,
        lobbyName: ID,
        request: JSON.stringify(DD)
      }), {
        retries: 0
      }, ap.HttpPayloadType.json)
    }
    var Bi = cD(35769);

    function yi(DD) {
      let {
        path: CD,
        revision: cD
      } = DD;
      const [ID, iD] = (0, pD.useState)(""), [fD, bD] = (0, pD.useState)(!1), [QD, wD] = (0, pD.useState)(0);
      return (0, pD.useEffect)((() => {
        let DD = !1;
        return iD(""), bD(!1), Si({
          action: "preview",
          path: CD
        }).then((CD => {
          DD || iD(`data:image/webp;base64,${CD.previewBase64}`)
        })).catch((CD => {
          console.error("Could not load schematic preview", CD), DD || bD(!0)
        })), () => {
          DD = !0
        }
      }), [CD, cD, QD]), (0, SD.jsxs)("div", {
        className: "SchematicPreview",
        children: [ID && (0, SD.jsx)("img", {
          src: ID,
          alt: `Preview of ${CD}`
        }), !ID && !fD && (0, SD.jsx)(xD.e, {
          loaderType: "Secondary"
        }), fD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, SD.jsx)(MD.i, {
            onClick: () => {
              wD(QD + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function Mi(DD) {
      var CD;
      let {
        initialPath: cD,
        onChanged: ID,
        onClose: iD
      } = DD;
      const fD = "" === cD,
        [bD, QD] = (0, pD.useState)(null),
        [wD, BD] = (0, pD.useState)(cD),
        [yD, tD] = (0, pD.useState)(!1),
        [ZD, oD] = (0, pD.useState)(!1),
        [vD, ND] = (0, pD.useState)(null),
        [gD, XD] = (0, pD.useState)(!1),
        [mD, nD] = (0, pD.useState)(""),
        OD = (0, pD.useRef)(null),
        PD = (0, pD.useRef)(!1),
        HD = (0, pD.useRef)(!0);
      (0, pD.useEffect)((() => (HD.current = !0, Si({
        action: "state"
      }).then((DD => {
        HD.current && QD(DD)
      })).catch((DD => {
        console.error("Could not load schematic assets", DD), HD.current && nD("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        HD.current = !1
      })), []);
      const UD = null === bD || void 0 === bD ? void 0 : bD.assets[cD],
        xD = Object.keys(null !== (CD = null === bD || void 0 === bD ? void 0 : bD.assets) && void 0 !== CD ? CD : {}).length,
        qD = wD.trim(),
        JD = qD ? (0, dp.b)(qD) ? null !== bD && void 0 !== bD && bD.assets[qD] && (fD || qD !== cD) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        KD = !!qD && !JD && (fD ? xD < dp.f : qD !== cD),
        aD = gD || !bD;
      async function VD(DD) {
        if (!PD.current && HD.current) {
          PD.current = !0, XD(!0), nD("");
          try {
            const CD = await Si({
              ...DD,
              expectedRevision: bD.revision
            });
            ID(CD), HD.current && iD()
          } catch (cD) {
            var CD;
            if (console.error("Schematic asset operation failed", cD), HD.current) nD(cD instanceof WD.d ? null !== (CD = cD.errorMessageForUser) && void 0 !== CD ? CD : cD.message : String(cD));
            try {
              const DD = await Si({
                action: "state"
              });
              ID(DD), HD.current && QD(DD)
            } catch (pD) {
              console.error("Could not refresh schematic assets", pD)
            }
          } finally {
            PD.current = !1, HD.current && XD(!1)
          }
        }
      }
      return (0, SD.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, SD.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: fD ? "New schematic" : yD ? "Rename schematic" : "Schematic"
        }), mD && (0, SD.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: mD
        }), !bD && !mD && (0, SD.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, SD.jsxs)("fieldset", {
          disabled: aD,
          children: [fD || yD ? (0, SD.jsxs)("label", {
            className: "SchematicField",
            children: [(0, SD.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, SD.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, SD.jsx)(UC.b, {
                className: "InputGenericPopupInput",
                defaultValue: cD,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: BD
              }, yD ? "rename" : "create")
            })]
          }) : (0, SD.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: cD
          }), (fD || yD) && JD && (0, SD.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: JD
          }), fD ? (0, SD.jsxs)(SD.Fragment, {
            children: [xD >= dp.f && (0, SD.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", dp.f, " maximum)."]
            }), ZD ? (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, SD.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": aD || !KD,
                children: (0, SD.jsx)(Bi.e, {
                  loading: null === vD,
                  schematics: null !== vD && void 0 !== vD ? vD : [],
                  disableAutoExport: !0,
                  onSchematicPicked: DD => {
                    !aD && KD && VD({
                      action: "profile",
                      path: qD,
                      schematicId: DD.schematicId
                    })
                  }
                })
              }), (0, SD.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, SD.jsx)(MD.i, {
                  className: "InputGenericPopupButton",
                  disabled: aD,
                  onClick: () => {
                    oD(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, SD.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, SD.jsx)(MD.i, {
                className: "InputGenericPopupButton",
                disabled: aD || !KD,
                onClick: () => {
                  OD.current.click()
                },
                children: "Upload Schematic"
              }), (0, SD.jsx)(MD.i, {
                className: "InputGenericPopupButton",
                disabled: aD || !KD,
                onClick: () => {
                  !async function() {
                    if (oD(!0), nD(""), !vD) try {
                      const DD = await (0, ap.postJsonWithMetricsCookiesAndJsonResponse)(`${Qi.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      HD.current && ND(DD)
                    } catch (DD) {
                      console.error("Could not load profile schematics", DD), HD.current && (oD(!1), nD("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, SD.jsx)("input", {
              ref: OD,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: DD => {
                var CD;
                const cD = null === (CD = DD.target.files) || void 0 === CD ? void 0 : CD[0];
                if (DD.target.value = "", !cD) return;
                if (cD.size > dp.i) return void nD("The schematic file is too large.");
                const ID = qD;
                XD(!0);
                const pD = new FileReader;
                pD.onload = () => {
                  VD({
                    action: "upload",
                    path: ID,
                    base64: String(pD.result).split(",")[1]
                  })
                }, pD.onerror = () => {
                  console.error("Could not read schematic file", pD.error), HD.current && (XD(!1), nD("Could not read the selected file."))
                }, pD.readAsDataURL(cD)
              }
            })]
          }) : UD ? (0, SD.jsxs)(SD.Fragment, {
            children: [!yD && (0, SD.jsx)(yi, {
              path: cD,
              revision: bD.revision
            }), !yD && (0, SD.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(UD.byteSize / 1024), " KB \xb7 ", UD.dimensions.join(" \xd7 "), " blocks"]
            }), (0, SD.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: yD ? (0, SD.jsxs)(SD.Fragment, {
                children: [(0, SD.jsx)(MD.i, {
                  className: "InputGenericPopupButton",
                  disabled: aD || !KD,
                  onClick: () => {
                    VD({
                      action: "rename",
                      path: cD,
                      newPath: qD
                    })
                  },
                  children: "Rename"
                }), (0, SD.jsx)(MD.i, {
                  className: "InputGenericPopupButton",
                  disabled: aD,
                  onClick: () => {
                    tD(!1), BD(cD)
                  },
                  children: "Cancel"
                })]
              }) : (0, SD.jsxs)(SD.Fragment, {
                children: [(0, SD.jsx)(MD.i, {
                  className: "InputGenericPopupButton",
                  disabled: aD,
                  onClick: () => {
                    tD(!0)
                  },
                  children: "Rename"
                }), (0, SD.jsx)(MD.J, {
                  className: "InputGenericPopupButton",
                  disabled: aD,
                  onClick: () => {
                    VD({
                      action: "remove",
                      path: cD
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : bD && (0, SD.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function ti(DD) {
      if ("string" !== typeof DD) return null;
      try {
        const CD = JSON.parse(DD);
        return (0, jp.m)(null === CD || void 0 === CD ? void 0 : CD.worldCodeEngine) && "boolean" === typeof CD.engineLocked && function(DD) {
          if (null === DD) return !0;
          const CD = null === DD || void 0 === DD ? void 0 : DD.location;
          return "string" === typeof(null === DD || void 0 === DD ? void 0 : DD.reason) && (null === CD || "string" === typeof(null === CD || void 0 === CD ? void 0 : CD.path) && Number.isInteger(CD.line))
        }(CD.fallback) ? CD : (console.error("[CodeCollab] Malformed engine settings", DD), null)
      } catch (CD) {
        return console.error("[CodeCollab] Failed to parse engine settings", CD), null
      }
    }

    function Zi(DD) {
      let {
        fallback: CD,
        onGoToLine: cD
      } = DD;
      const {
        t: ID
      } = (0, uD.F)(), {
        location: pD
      } = CD;
      return (0, SD.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [ID("codeEditorEngine:notice", {
          reason: CD.reason
        }), pD && (0, SD.jsxs)(SD.Fragment, {
          children: [" ", (0, SD.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              cD(pD.path, pD.line)
            },
            children: ID("codeEditorEngine:goToLine", {
              line: String(pD.line)
            })
          })]
        })]
      })
    }
    var oi = cD(4713);

    function vi(DD) {
      let {
        label: CD,
        hint: cD,
        checked: ID,
        onChange: pD
      } = DD;
      return (0, SD.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, SD.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, SD.jsx)("span", {
            children: CD
          }), (0, SD.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: cD
          })]
        }), (0, SD.jsx)("span", {
          className: "SwitchContainer",
          children: (0, SD.jsx)(XC.e, {
            className: "SwitchCheckbox",
            checked: ID,
            onChange: DD => {
              pD(DD.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Ni(DD) {
      let {
        engine: CD,
        onSetEngine: cD,
        aiHints: ID,
        variation: pD
      } = DD;
      const {
        t: iD
      } = (0, uD.F)();
      return (0, SD.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, SD.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: iD("codeEditor:moreOptions")
        }), CD && (0, SD.jsx)(vi, {
          label: iD("codeEditorEngine:toggle"),
          hint: iD("codeEditorEngine:toggleHint"),
          checked: "ses" === CD,
          onChange: DD => {
            cD(DD ? "ses" : "quickjs")
          }
        }), ID && (0, SD.jsx)(vi, {
          label: iD("codeEditorAiHints:toggle"),
          hint: iD("codeEditorAiHints:toggleHint"),
          checked: ID.shown,
          onChange: ID.setShown
        }), pD && (0, SD.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, SD.jsx)(oi.e, {
            label: "codeEditor:variationLabel",
            children: (0, SD.jsx)(UC.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: pD.name,
              onValueChange: pD.setName,
              onEnter: pD.reload
            })
          }), (0, SD.jsx)(MD.x, {
            className: "CodeEditorButton",
            onClick: pD.reload,
            children: iD("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var gi = cD(36235),
      Xi = cD(36240);

    function mi(DD) {
      let {
        close: CD
      } = DD;
      const {
        t: cD
      } = (0, uD.F)(), ID = [{
        name: cD("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: cD("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: cD("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, SD.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, SD.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: cD("codeEditor:tutorialsTitle")
        }), (0, SD.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: ID.map((DD => (0, SD.jsx)(MD.i, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              CD(), (0, Xi.F)(DD.tutorial)
            },
            children: DD.name
          }, DD.tutorial)))
        })]
      })
    }
    var ni = cD(107),
      Oi = cD(35953),
      Pi = cD(8472);
    const Hi = (0, pD.forwardRef)((function(DD, CD) {
      let {
        value: cD,
        onChange: ID,
        onSubmit: pD,
        placeholder: iD,
        maxLength: fD,
        rows: bD = 2,
        allowNewLines: QD = !1,
        onKeyDown: wD,
        before: BD
      } = DD;
      const {
        t: yD
      } = (0, uD.F)(), tD = "" !== cD.trim(), ZD = () => {
        tD && pD()
      };
      return (0, SD.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [BD, (0, SD.jsx)("textarea", {
          ref: CD,
          className: "PanelPromptInput",
          value: cD,
          maxLength: fD,
          rows: bD,
          placeholder: iD,
          spellCheck: !1,
          autoComplete: "off",
          onChange: DD => {
            ID(QD ? DD.target.value : DD.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: DD => {
            DD.nativeEvent.isComposing || 229 === DD.nativeEvent.keyCode ? DD.stopPropagation() : "Escape" !== DD.key && (DD.stopPropagation(), null === wD || void 0 === wD || wD(DD), DD.defaultPrevented || "Enter" !== DD.key || QD && DD.shiftKey || (DD.preventDefault(), ZD()))
          }
        }), (0, SD.jsx)(MD.i, {
          className: "PanelPromptSend",
          disabled: !tD,
          onClick: ZD,
          ariaLabel: yD("codeEditorPanels:send"),
          children: (0, SD.jsx)(oD.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function Ui(DD) {
      let {
        inputRef: CD
      } = DD;
      const {
        t: cD
      } = (0, uD.F)(), {
        messages: ID,
        reportedPlayers: iD,
        channel: fD
      } = (0, Pi.k)(), [bD, QD] = (0, pD.useState)(""), wD = (0, pD.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, SD.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, SD.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, SD.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: cD("codeEditorChat:title")
          })
        }), 0 === ID.length ? (0, SD.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: cD("codeEditorChat:empty")
        }) : (0, SD.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, SD.jsx)(Oi.c, {
            messages: ID,
            reportedPlayers: iD
          })
        }), (0, SD.jsx)(Hi, {
          ref: CD,
          value: bD,
          onChange: QD,
          onSubmit: () => {
            (0, Pi.j)(bD), QD(""), wD.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: HD.Xc,
          rows: 1,
          placeholder: fD ? cD("touchOnly" === (0, ni.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: fD.channelName
          }) : cD("codeEditorChat:placeholder"),
          before: fD && (0, SD.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: fD.elementBgColor
            },
            onClick: () => {
              Pi.c.selectNextChannel(), CD.current.focus()
            },
            children: (0, SD.jsx)(OD.c, {
              text: fD.elementContent
            })
          }),
          onKeyDown: DD => {
            const CD = bD === wD.current.text;
            if ("ArrowUp" !== DD.key && "ArrowDown" !== DD.key || !CD && "" !== bD) "Tab" === DD.key && !DD.shiftKey && fD && (DD.preventDefault(), Pi.c.selectNextChannel());
            else {
              DD.preventDefault();
              const cD = CD ? wD.current.stepsBack : 0;
              wD.current = (0, Pi.f)(cD + ("ArrowUp" === DD.key ? 1 : -1)), QD(wD.current.text)
            }
          }
        })]
      })
    }
    var xi = cD(36249);

    function qi(DD) {
      let {
        Zy: CD,
        worldPanel: cD,
        closeWorld: ID,
        aiShown: pD,
        defaultWidth: iD,
        children: fD
      } = DD;
      const bD = "hidden" !== CD;
      return (0, SD.jsx)(xi.e, {
        side: "right",
        defaultSize: bD ? "max(18rem, 40%)" : iD,
        covers: "expanded" === CD ? "always" : bD || pD ? "narrow" : void 0,
        children: (0, SD.jsxs)("div", {
          className: MC()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === CD
          }),
          children: [bD && (0, SD.jsx)(xi.e, {
            side: "top",
            onClose: ID,
            children: cD
          }), fD]
        })
      })
    }
    var Ji = cD(1957),
      Ki = cD(2050),
      ai = cD(1294);
    class Vi {
      constructor(DD, CD, cD) {
        this.measure = DD, this.apply = CD, this.now = cD, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var DD, CD;
        return null !== (DD = null === (CD = this.last) || void 0 === CD ? void 0 : CD.rect) && void 0 !== DD ? DD : null
      }
      sync() {
        const DD = function(DD) {
          const CD = Math.round(DD.left),
            cD = Math.round(DD.top);
          return {
            left: CD,
            top: cD,
            width: Math.round(DD.right) - CD,
            height: Math.round(DD.bottom) - cD
          }
        }(this.measure());
        if (DD.width <= 0 || DD.height <= 0) return;
        const CD = this.now(),
          cD = this.last;
        let ID = {
          width: DD.width,
          height: DD.height
        };
        null === cD || DD.width === cD.rect.width && DD.height === cD.rect.height || (this.resizing = CD - this.resizedAt < 100, this.resizedAt = CD);
        const pD = null !== cD && this.resizing && CD - this.resizedAt < 100 && (DD.width !== cD.bufferSize.width || DD.height !== cD.bufferSize.height);
        pD && (this.stretchedAt ??= CD), pD && CD - this.stretchedAt < 250 ? ID = cD.bufferSize : this.stretchedAt = null;
        const iD = {
          rect: DD,
          bufferSize: ID
        };
        var fD, bD;
        null !== cD && (bD = iD, (fD = cD).rect.left === bD.rect.left && fD.rect.top === bD.rect.top && fD.rect.width === bD.rect.width && fD.rect.height === bD.rect.height && fD.bufferSize.width === bD.bufferSize.width && fD.bufferSize.height === bD.bufferSize.height) || (this.last = iD, this.apply(iD))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function zi(DD) {
      const {
        style: CD
      } = document.documentElement;
      for (const [cD, ID] of [
          ["--worldViewLeft", null === DD || void 0 === DD ? void 0 : DD.left],
          ["--worldViewTop", null === DD || void 0 === DD ? void 0 : DD.top],
          ["--worldViewWidth", null === DD || void 0 === DD ? void 0 : DD.width],
          ["--worldViewHeight", null === DD || void 0 === DD ? void 0 : DD.height]
        ]) void 0 === ID ? CD.removeProperty(cD) : CD.setProperty(cD, `${ID}px`)
    }
    var ji = cD(1701),
      li = cD(1965);

    function Li(DD, CD) {
      (0, pD.useEffect)((() => {
        if (!DD) return;
        const cD = DD => {
          var cD;
          "Escape" === DD.key ? (DD.stopPropagation(), DD.preventDefault(), CD()) : (cD = DD.code, Object.entries(fc.q).some((DD => {
            let [CD, ID] = DD;
            const pD = li.e[CD];
            return pD.includes("ui") && !pD.includes("core") && ID.includes(cD)
          })) && !(0, ji.isTextEntry)(DD.target) && DD.preventDefault())
        };
        window.addEventListener("keydown", cD, !0);
        const ID = (0, RD.p)(CD);
        return () => {
          window.removeEventListener("keydown", cD, !0), ID()
        }
      }), [DD, CD])
    }

    function Ti() {
      return (0, gp.i)().some((DD => DD !== gp.e))
    }

    function Gi(DD, CD) {
      return DD.map((DD => CD ? String(DD) : DD.toFixed(1))).join(", ")
    }

    function Ri(DD) {
      let {
        freeCamera: CD,
        picking: cD,
        hovered: ID
      } = DD;
      const {
        t: iD
      } = (0, uD.F)(), fD = (0, pD.useRef)(null), bD = (0, pD.useRef)(null);
      return (0, pD.useEffect)((() => {
        const DD = (DD, CD) => {
            DD.textContent !== CD && (DD.textContent = CD)
          },
          cD = () => {
            const cD = CD ? wD.gameBridge.lookup("freeCameraPos", null) : null;
            DD(fD.current, Gi(null !== cD && void 0 !== cD ? cD : wD.gameBridge.lookup("localPos", null), !1));
            const ID = wD.gameBridge.lookup("targetedBlockPos", null);
            DD(bD.current, ID ? Gi(ID, !0) : "-")
          };
        return cD(), (0, ai.w)(cD)
      }), [CD]), (0, SD.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, SD.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: iD(CD ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, SD.jsx)("span", {
          ref: fD
        }), (0, SD.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: iD("codeEditorWorld:lookingAt")
        }), (0, SD.jsx)("span", {
          ref: bD,
          hidden: cD
        }), cD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)("span", {
            children: ID ? Gi(ID.pos, !0) : "-"
          }), ID && (0, SD.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: ID.name
          })]
        })]
      })
    }
    var ki = cD(36252);

    function di(DD) {
      const CD = DD.currentTarget.getBoundingClientRect();
      return {
        x: (DD.clientX - CD.left) / CD.width,
        y: (DD.clientY - CD.top) / CD.height
      }
    }

    function Yi(DD) {
      const [CD, cD] = (0, pD.useState)(!1), [ID, iD] = (0, pD.useState)(null), fD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => {
        if (!CD) return;
        let DD = null,
          cD = null,
          ID = 1 / 0;
        const pD = (0, ai.o)((CD => {
          ID += CD;
          const pD = fD.current;
          if (pD === cD && ID < 100) return;
          cD = pD, ID = 0;
          const bD = pD && wD.gameBridge.lookup("blockAtViewPoint", pD);
          var QD, SD;
          (QD = bD) === (SD = DD) || null !== QD && null !== SD && QD.name === SD.name && (0, ki.f)(QD.pos, SD.pos) && (0, ki.f)(QD.normal, SD.normal) || (DD = bD, iD(bD), wD.gameBridge.send("setBlockHighlight", bD))
        }));
        return () => {
          pD(), null !== DD && wD.gameBridge.send("setBlockHighlight", null), iD(null)
        }
      }), [CD]);
      const bD = (0, pD.useCallback)((() => {
        cD(!1)
      }), []);
      Li(CD, bD);
      const QD = {
        onPointerMove: DD => {
          fD.current = di(DD)
        },
        onPointerLeave: () => {
          fD.current = null
        },
        onClick: ID => {
          if (!CD) return;
          const pD = wD.gameBridge.lookup("blockAtViewPoint", di(ID));
          null !== pD && (cD(!1), DD(pD.pos))
        }
      };
      return {
        picking: CD,
        setPicking: cD,
        hovered: ID,
        slotHandlers: QD
      }
    }

    function Wi(DD) {
      wD.gameBridge.send("setFreeCameraMovesFly", DD)
    }

    function si(DD) {
      let {
        shown: CD,
        setShown: cD,
        canInsertCode: ID
      } = DD;
      const {
        t: iD
      } = (0, uD.F)(), {
        isTouchScreen: fD
      } = (0, GD.o)(["isTouchScreen"]), bD = (0, pD.useRef)(null), wD = (0, pD.useCallback)((() => {
        var DD;
        null === (DD = bD.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === DD || DD.focus()
      }), []), {
        control: BD,
        take: yD,
        release: ZD,
        blocked: vD
      } = function(DD) {
        const [CD, cD] = (0, pD.useState)("none"), ID = (0, pD.useRef)("none"), [iD, fD] = (0, pD.useState)(!1), bD = DD => {
          ID.current = DD, cD(DD)
        }, QD = (0, pD.useCallback)((() => {
          const CD = ID.current;
          "none" !== CD && (bD("none"), (0, gp.p)(gp.e), "mouse" === CD && DD())
        }), [DD]), wD = (0, pD.useCallback)((DD => {
          Ti() ? fD(!0) : (bD("mouse" === DD && "touchOnly" !== (0, ni.d)() ? "mouse" : "touch"), (0, gp.l)(gp.e))
        }), []);
        return (0, PD.f)("pointerLockUpdate", (DD => {
          DD && "touch" === ID.current && "touchOnly" !== (0, ni.d)() ? bD("mouse") : DD || "mouse" !== ID.current || QD()
        })), (0, pD.useEffect)((() => {
          if (!iD) return;
          const DD = () => {
            Ti() || fD(!1)
          };
          return DD(), (0, gp.f)(DD)
        }), [iD]), Li("none" !== CD, QD), (0, pD.useEffect)((() => {
          if ("none" === CD) return;
          const DD = DD => {
            (0, ji.isTextEntry)(DD.target) && QD()
          };
          return document.addEventListener("focusin", DD), () => {
            document.removeEventListener("focusin", DD)
          }
        }), [CD, QD]), (0, pD.useEffect)((() => (document.addEventListener("pointerlockerror", QD), () => {
          document.removeEventListener("pointerlockerror", QD)
        })), [QD]), (0, pD.useEffect)((() => () => {
          "none" !== ID.current && null !== GD.d.get("openInGameMenuName") && (0, gp.p)(gp.e)
        }), []), {
          control: CD,
          take: wD,
          release: QD,
          blocked: iD
        }
      }(wD), ND = (0, Ki.b)(xi.i);
      (0, pD.useEffect)((() => {
        "touch" !== BD || "shown" !== CD || ND ? "none" === BD && "expanded" === CD && cD("shown") : cD("expanded")
      }), [BD, ND]),
      function(DD, CD) {
        const cD = (0, pD.useRef)(CD);
        cD.current = CD;
        const ID = (0, pD.useRef)(null);
        (0, pD.useLayoutEffect)((() => {
          const CD = new Vi((() => DD.current.getBoundingClientRect()), (DD => {
            var CD;
            "none" !== cD.current && zi(null !== (CD = null === DD || void 0 === DD ? void 0 : DD.rect) && void 0 !== CD ? CD : null), (0, ai.A)().setGameView(DD)
          }), (() => performance.now()));
          ID.current = CD, CD.sync();
          const pD = (0, ai.n)((() => {
            CD.sync()
          }));
          return () => {
            pD(), GD.d.set({
              worldPanelHud: null
            }), CD.stop()
          }
        }), [DD]), (0, pD.useLayoutEffect)((() => {
          ID.current.sync(), zi("none" === CD ? null : ID.current.rect), GD.d.set({
            worldPanelHud: CD
          })
        }), [CD])
      }(bD, "touch" === BD ? "touchControls" : "none");
      const {
        picking: gD,
        setPicking: XD,
        hovered: mD,
        slotHandlers: nD
      } = Yi((DD => {
        tD.i.Uo("CodeEditorInsertText", {
          text: `[${DD.join(", ")}]`,
          focus: !fD
        }), (0, xi.i)() && cD("hidden")
      })), OD = function() {
        const {
          allowed: DD,
          movesFly: CD
        } = (0, UD.h)("freeCamera"), cD = (0, pD.useRef)(CD), ID = (0, pD.useRef)(CD);
        return ID.current !== CD && (ID.current = CD, cD.current = CD), (0, pD.useEffect)((() => () => {
          cD.current && Wi(!1)
        }), []), {
          allowed: DD,
          on: CD,
          toggle: () => {
            cD.current = !CD, Wi(!CD)
          }
        }
      }(), HD = (0, QD.h)("hideCoordinates"), xD = (0, UD.h)("localPlayerAlive"), qD = !xD || vD;
      (0, pD.useEffect)((() => {
        xD || ZD()
      }), [xD, ZD]), (0, pD.useEffect)((() => {
        !qD && ID || XD(!1)
      }), [qD, ID, XD]);
      const JD = OD.on ? MD.o : MD.i,
        KD = gD ? MD.o : MD.i;
      return (0, SD.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, SD.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, SD.jsx)("span", {
            className: "WorldPanelTitle",
            children: iD("codeEditorWorld:title")
          }), "touch" === BD && !ND && (0, SD.jsx)(MD.i, {
            className: "WorldPanelButton",
            onClick: ZD,
            children: iD("codeEditorWorld:backToCode")
          }), !qD && OD.allowed && !fD && (0, SD.jsx)(ED.f, {
            tooltipInner: iD("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, SD.jsx)(JD, {
              className: "WorldPanelButton",
              ariaPressed: OD.on,
              ariaLabel: iD("codeEditorWorld:freeCamera"),
              onClick: OD.toggle,
              children: (0, SD.jsx)(oD.c, {
                name: "video"
              })
            })
          }), !qD && ID && (0, SD.jsx)(ED.f, {
            tooltipInner: iD("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, SD.jsxs)(KD, {
              className: "WorldPanelButton",
              ariaPressed: gD,
              onClick: () => {
                ZD(), XD(!gD)
              },
              children: [(0, SD.jsx)(oD.c, {
                name: "crosshairs"
              }), iD("codeEditorWorld:pick")]
            })
          })]
        }), !HD && (0, SD.jsx)(Ri, {
          freeCamera: OD.on,
          picking: gD,
          hovered: mD
        }), (0, SD.jsxs)("div", {
          ref: bD,
          className: MC()("WorldPanelSlot", {
            TouchControl: "touch" === BD,
            Picking: gD
          }),
          onPointerDown: DD => {
            0 !== DD.button || qD || gD || yD(DD.pointerType)
          },
          ...nD,
          children: [!qD && !gD && (0, SD.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !qD && "touch" !== BD && (0, SD.jsxs)("div", {
            className: "WorldPanelHint",
            children: [gD && iD(fD ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !gD && "none" === BD && !OD.on && iD(fD ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !gD && "none" === BD && OD.on && iD("codeEditorWorld:clickToFly"), "mouse" === BD && (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsx)(Ji.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), iD("codeEditorWorld:backToCode")]
            })]
          }), qD && (0, SD.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, SD.jsx)("span", {
              children: iD(xD ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, SD.jsx)(MD.i, {
              onClick: RD.g,
              children: iD("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var Ei = cD(4799);

    function ei(DD) {
      let {
        Zy: CD,
        setWorld: cD,
        toggleWorld: ID,
        aiShown: pD,
        closeAi: iD
      } = DD;
      const {
        t: fD
      } = (0, uD.F)(), bD = pD ? "ai" : "hidden" !== CD ? "world" : "code", QD = [{
        value: "code",
        label: fD("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: fD("codeEditorWorld:title")
      }];
      pD && QD.push({
        value: "ai",
        label: fD("codeEditorWorld:aiPane")
      });
      return (0, SD.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, SD.jsx)(Ei.b, {
          options: QD,
          value: bD,
          onChange: DD => {
            "world" !== DD ? (pD && iD(), cD("hidden")) : "hidden" === CD ? ID() : iD()
          },
          ariaLabel: fD("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var ui = cD(36260);
    class ri {
      constructor(DD, CD) {
        this.storageKey = DD, this.defaultValue = CD, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const DD = VD.h.getItem(this.storageKey);
            this.value = "boolean" === typeof DD ? DD : this.defaultValue
          }
          return this.value
        }, this.set = DD => {
          this.value = DD, VD.h.setItem(this.storageKey, DD);
          for (const CD of this.listeners) CD(DD)
        }
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
    }
    const Ai = new ri("codeEditorLightMode", !1),
      Fi = new ri("codeEditorAiHints", !0);

    function Df(DD) {
      const [CD, cD] = (0, pD.useState)(DD.get);
      return (0, pD.useEffect)((() => {
        const CD = DD.subscribe(cD);
        return cD(DD.get()), CD
      }), [DD]), [CD, DD.set]
    }
    var Cf = cD(36265),
      If = cD(36273),
      pf = cD(36280);
    const ff = (0, pD.lazy)((() => Promise.all([cD.e(289), cD.e(285), cD.e(288), cD.e(284), cD.e(81), cD.e(287), cD.e(286), cD.e(283)]).then((() => cD(40365))))),
      bf = (0, pD.lazy)((() => Promise.all([cD.e(76), cD.e(79), cD.e(80), cD.e(78), cD.e(291)]).then((() => cD(40523))))),
      Qf = (0, pD.lazy)((() => Promise.all([cD.e(289), cD.e(288), cD.e(81), cD.e(79), cD.e(80), cD.e(78), cD.e(287), cD.e(286), cD.e(77), cD.e(88)]).then((() => cD(40525)))));

    function wf(DD) {
      return wD.gameBridge.query("worldCodeAiChunk", DD)
    }

    function Sf() {
      return wD.gameBridge.query("worldCodeAiGameState", null)
    }

    function Bf(DD) {
      const {
        gsUrl: CD,
        gameNameWithVariation: cD,
        lobbyName: ID
      } = wi();
      return (0, ap.postJsonWithMetricsCookiesAndJsonResponse)(`${CD}/code/get-lobby-code`, Kp.Uj["get-lobby-code"].toBuffer({
        gameNameWithVariation: cD,
        lobbyName: ID,
        path: DD
      }), {
        retries: 1
      })
    }
    let yf = !1;
    const Mf = [],
      tf = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Zf = (0, pD.memo)((function(DD) {
        var CD, cD;
        let {
          show: ID,
          onOpen: iD,
          onClose: bD,
          isLobbyCode: BD
        } = DD;
        const yD = (0, pD.useRef)(""),
          [ZD, vD] = (0, pD.useState)(null),
          ND = (0, pD.useRef)(BD),
          [gD, XD] = (0, pD.useState)({
            message: null,
            type: null
          }),
          [mD, nD] = (0, pD.useState)(""),
          OD = gD.message ? gD : {
            message: mD,
            type: "warning"
          },
          [qD, JD] = (0, pD.useState)(!0),
          [KD, VD] = Df(Ai),
          [zD, jD] = Df(Fi),
          [lD, LD] = (0, pD.useState)(!1),
          [TD, kD] = (0, pD.useState)(!1),
          dD = (0, pD.useRef)(null),
          YD = (0, pD.useRef)(!1);
        (0, pD.useEffect)((() => {
          var DD;
          TD && YD.current && (YD.current = !1, null === (DD = dD.current) || void 0 === DD || DD.focus())
        }), [TD]);
        const WD = (0, ui.b)(),
          sD = (0, pD.useRef)(null),
          eD = (0, pD.useRef)(null),
          {
            openInGameMenuName: hD,
            openEverythingMenuName: rD
          } = (0, GD.o)(["openInGameMenuName", "openEverythingMenuName"]),
          AD = DD => {
            ID && (sD.current = DD, HC.current = !0)
          };
        (0, PD.f)("OpenReportMenu", (() => {
          AD("Nt")
        })), (0, PD.f)("OpenStoreFromCodeEditor", (() => {
          AD("store")
        })), (0, pD.useEffect)((() => {
          const DD = sD.current;
          null === DD || "Nt" === DD && ("makeReport" === hD || "makeDiscordReport" === hD) || "store" === DD && null !== rD || (sD.current = null, null === hD && null === rD ? BD ? (eD.current = Cc.current, tD.i.Uo("EditLobbyCode", ZD)) : tD.i.Uo("EditCodeBlock", {
            pos: ZD,
            canChangePos: ND.current
          }) : (0, Xi.y)())
        }), [hD, rD, BD, ZD]), (0, pD.useEffect)((() => {
          if (ID) return () => {
            eD.current = null
          }
        }), [ID]);
        const [FD, DC] = function() {
          const [DD, CD] = (0, pD.useState)(yf);
          return (0, PD.f)("CodeEditorAiHelperShown", (DD => {
            CD(DD)
          })), [DD, (0, pD.useCallback)((DD => {
            yf = DD, tD.i.Uo("CodeEditorAiHelperShown", DD)
          }), [])]
        }(), [CC, cC] = (0, pD.useState)(null), [IC, pC] = (0, pD.useState)([]), [iC, fC] = (0, pD.useState)(0), [bC, QC] = (0, pD.useState)(0), [wC, SC] = (0, pD.useState)(""), BC = (0, pD.useRef)(null), [yC, tC] = (0, pD.useState)(BD ? pf.e : null), ZC = BD || null !== ZD, oC = (0, QD.h)("canEditCode"), vC = (0, QD.h)("canUseDevCreativeItems"), NC = (0, gi.n)("welcome"), gC = (0, gi.n)("docsOverview"), XC = gC ? "docsOverview" : "welcome", mC = null !== gC && void 0 !== gC ? gC : NC, nC = (0, gi.n)("aiHelperOverview"), OC = nC ? "aiHelperOverview" : "welcome", PC = null !== nC && void 0 !== nC ? nC : NC, HC = (0, pD.useRef)(!1), UC = (0, pD.useRef)(!1), xC = (0, pD.useRef)(null), [qC, JC] = (0, pD.useState)(""), [aC, VC] = (0, pD.useState)(!1), [zC, jC] = (0, pD.useState)(null), lC = (0, UD.h)("connectedGame"), LC = BD && oC && "classic" === lC.gameNameWithVariation && !(0, KC.N)(lC.lobbyName), [TC, GC] = (0, pD.useState)(null), [RC, kC] = (0, pD.useState)({
          [Vp.g]: ""
        }), [dC, YC] = (0, pD.useState)({
          assets: {},
          revision: 0
        }), WC = (0, pD.useRef)(dC), sC = (0, pD.useCallback)((DD => {
          var CD;
          DD.revision < WC.current.revision || (WC.current = DD, YC(DD), nD(DD.startupError ? `Schematics could not load: ${DD.startupError}` : ""), null === (CD = Zc.current) || void 0 === CD || CD.onLobbyFilesChanged({
            ...Qc.current,
            ...(0, dp.m)(DD.assets)
          }))
        }), []), [EC, eC] = (0, pD.useState)(Vp.g), [uC, hC] = (0, pD.useState)(null), [rC, AC] = (0, pD.useState)(null), FC = (0, pD.useRef)(!1), Dc = (0, pD.useRef)(null), Cc = (0, pD.useRef)(EC);
        Cc.current = EC;
        const cc = (0, pD.useRef)(uC);
        cc.current = uC;
        const Ic = uC ? null : zC,
          ic = Ic && !Ic.engineLocked ? Ic.worldCodeEngine : null,
          bc = (0, pD.useRef)(rC);
        bc.current = rC;
        const Qc = (0, pD.useRef)(RC);
        Qc.current = RC;
        const wc = (0, pD.useRef)(null),
          Sc = (0, pD.useRef)(null),
          [Bc, yc] = (0, pD.useState)(!1),
          Mc = (0, Di.n)(),
          tc = (0, pD.useRef)([]),
          Zc = (0, pD.useRef)(null),
          oc = (0, pD.useRef)(null),
          vc = (0, pD.useRef)(null);

        function Nc(DD) {
          XD(DD), clearTimeout(xC.current), xC.current = setTimeout((() => {
            XD({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const gc = (0, pD.useCallback)((function() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            FC.current && Dc.current && (wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.Leave,
              ZC: (0, zp.u)(Dc.current),
              Lf: !!DD || null
            }), FC.current = !1, Dc.current = null), GC(null)
          }), []),
          Xc = (0, pD.useCallback)((DD => {
            const CD = {
              kind: "lobby",
              path: DD
            };
            Dc.current = CD, eC(DD), yD.current = "", wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.Join,
              ZC: (0, zp.u)(CD)
            }), FC.current = !0
          }), []),
          mc = (0, pD.useCallback)((DD => {
            var CD;
            const cD = null === (CD = oc.current) || void 0 === CD ? void 0 : CD.collabState;
            return cD && "lobby" === cD.docKey.kind && cD.docKey.path === DD && Cc.current === DD ? Promise.resolve({
              doc: cD.doc,
              version: cD.version,
              clientID: cD.clientID,
              docKey: cD.docKey,
              httpConfig: cD.httpConfig
            }) : new Promise(((CD, cD) => {
              const ID = setTimeout((() => {
                  tc.current = tc.current.filter((DD => DD !== pD)), cD(new Error(`Timed out joining ${DD}`))
                }), 15e3),
                pD = cD => {
                  "lobby" === cD.docKey.kind && cD.docKey.path === DD && (clearTimeout(ID), tc.current = tc.current.filter((DD => DD !== pD)), CD(cD))
                };
              tc.current.push(pD), Cc.current !== DD ? (gc(!0), Xc(DD)) : FC.current || Xc(DD)
            }))
          }), [Xc, gc]),
          nc = (0, pD.useCallback)((async function(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const ID = Date.now();
            let pD = DD in Qc.current;
            for (; pD !== CD;) {
              if (Date.now() - ID > cD) throw new Error(`Timed out waiting for lobby path ${DD} present=${CD}`);
              await (0, aI.H)(50), pD = DD in Qc.current
            }
          }), []),
          Oc = (0, pD.useCallback)((DD => {
            const CD = Qc.current,
              cD = Vp.g in CD && Vp.i in CD;
            if (!(0, jp.i)(DD) || cD) {
              if (Cc.current === DD) {
                var ID;
                const pD = cD && (0, jp.i)(DD) ? DD === Vp.g ? Vp.i : Vp.g : null !== (ID = (0, jp.d)(CD)) && void 0 !== ID ? ID : Vp.g;
                Sc.current = {
                  fromPath: DD,
                  toPath: pD
                }, eC(pD)
              }
              wD.gameBridge.send("sendCodeCollab", {
                tC: zp.e.DeleteFile,
                ZC: (0, zp.u)({
                  kind: "lobby",
                  path: Cc.current
                }),
                Tf: DD
              })
            }
          }), []),
          Pc = (0, pD.useCallback)((DD => {
            eD.current = null, hC(null), AC(null), !BD || DD === Cc.current && FC.current || (gc(!0), Xc(DD))
          }), [BD, gc, Xc]),
          Hc = (0, pD.useCallback)(((DD, CD) => {
            const cD = Rp.e[DD],
              ID = cD && CD in cD.files ? CD : "index.ts";
            if (DD !== cc.current || ID !== bc.current) {
              var pD;
              if (DD !== cc.current) null === (pD = Zc.current) || void 0 === pD || pD.stopContinuousSync(), gc(!0);
              hC(DD), AC(ID)
            }
          }), [gc]),
          Uc = (0, pD.useCallback)((DD => {
            var CD;
            const cD = Cc.current,
              ID = Qc.current[cD],
              pD = FC.current && !cc.current && cD in DD && void 0 !== ID ? {
                ...DD,
                [cD]: ID
              } : DD;
            kC(pD);
            const iD = wc.current;
            if (iD && iD in DD) wc.current = null, iD !== Cc.current && Pc(iD);
            else if (!(Cc.current in DD) && FC.current && !cc.current) {
              var fD;
              Pc(null !== (fD = (0, jp.d)(DD)) && void 0 !== fD ? fD : Vp.g)
            }
            null === (CD = Zc.current) || void 0 === CD || CD.onLobbyFilesChanged({
              ...pD,
              ...(0, dp.m)(WC.current.assets)
            })
          }), [Pc]),
          xc = (0, pD.useCallback)((() => Bf(Cc.current).then((async DD => {
            if (!FC.current || !DD.files) return null;
            Uc(DD.files);
            const CD = await Si({
              action: "state"
            });
            return sC(CD), {
              ...DD.files,
              ...(0, dp.m)(CD.assets)
            }
          })).catch((DD => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", DD), Nc({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Uc, sC]),
          qc = () => {
            bD()
          };
        (0, pD.useEffect)((() => {
          if (nD(""), !ID || !BD) return;
          let DD = !1;
          return WC.current = {
            assets: {},
            revision: 0
          }, YC(WC.current), Si({
            action: "state"
          }).then((CD => {
            DD || sC(CD)
          })).catch((CD => {
            console.error("Could not load project schematics", CD), DD || nD("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            DD = !0
          }
        }), [ID, BD, sC]);
        const Jc = (0, pD.useCallback)((function() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Dc.current && wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.Submit,
              ZC: (0, zp.u)(Dc.current),
              ...DD ? {
                gC: "keepOpen"
              } : {}
            })
          }), []),
          Kc = (0, pD.useCallback)((() => {
            if (!Dc.current || "lobby" !== Dc.current.kind) return;
            const DD = qC.trim();
            (0, lp.u)(DD) ? (wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.ReloadAsVariation,
              ZC: (0, zp.u)(Dc.current),
              gC: DD
            }), VC(!1)) : Nc({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [qC]),
          ac = (0, pD.useCallback)((DD => {
            wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.SetEngine,
              ZC: (0, zp.u)({
                kind: "lobby",
                path: Cc.current
              }),
              gC: DD
            })
          }), []),
          Vc = (0, pD.useCallback)((DD => {
            if (!cc.current && oC && (ND.current || BD)) {
              if (BD) {
                var CD;
                const cD = (0, jp.p)(Qc.current, Cc.current),
                  ID = Math.min(pc.u, Math.max(0, pc.z - cD)),
                  pD = DD.slice(0, ID);
                return yD.current = pD, kC((DD => ({
                  ...DD,
                  [Cc.current]: pD
                }))), void(null === (CD = Zc.current) || void 0 === CD || CD.onDocTextChanged(Cc.current, pD))
              }
              yD.current = DD, SC(DD)
            }
          }), [oC, BD]);
        (0, PD.f)("EditLobbyCode", (DD => {
          var CD;
          aD.featureFlags.canSeePlayerWrittenText && BD && (gc(), vD(DD), yD.current = "", kC({
            [Vp.g]: ""
          }), jC(null), eC(Vp.g), hC(null), AC(null), wc.current = null, Sc.current = null, null === (CD = Zc.current) || void 0 === CD || CD.stopContinuousSync(), iD(), Xc(Vp.g))
        })), (0, PD.f)("EditCodeBlock", (DD => {
          let {
            pos: CD,
            canChangePos: cD
          } = DD;
          if (aD.featureFlags.canSeePlayerWrittenText && !BD)
            if (gc(), null !== CD && (CD = [...CD]), vD(CD), ND.current = cD, null !== CD) {
              yD.current = "", SC(""), iD();
              const DD = {
                  kind: "codeBlock",
                  pos: CD
                },
                ID = (0, zp.u)(DD);
              BC.current !== ID && (BC.current = ID, pC([]), QC(iC)), tC((0, pf.b)(ID, [CD[0], CD[1], CD[2]], !!cD)), Dc.current = DD, wD.gameBridge.send("sendCodeCollab", {
                tC: zp.e.Join,
                ZC: (0, zp.u)(DD)
              }), FC.current = !0
            } else ID && bD()
        })), (0, PD.f)("codeCollabRejoin", (DD => {
          const CD = Dc.current ? (0, zp.u)(Dc.current) : null;
          CD && DD.docKey === CD && (yD.current = DD.doc, BD || SC(DD.doc), GC((CD => CD ? {
            ...CD,
            doc: DD.doc,
            version: DD.version,
            clientID: (0, Gp.b)()
          } : CD)))
        })), (0, PD.f)("codeCollab", (DD => {
          var CD;
          const cD = Dc.current ? (0, zp.u)(Dc.current) : null;
          if (DD.type === zp.f.LobbyFilesChanged && BD) {
            if ("string" !== typeof DD.files) return void xc();
            try {
              Uc(JSON.parse(DD.files))
            } catch (wD) {
              console.error("[CodeCollab] Failed to parse lobby files", wD), xc()
            }
            return
          }
          if (DD.type === zp.f.EngineSettings && BD) return void jC(ti(DD.engineSettings));
          const pD = DD.type === zp.f.Joined ? (0, zp.i)(DD.docKey) : null,
            iD = BD && "lobby" === (null === (CD = Dc.current) || void 0 === CD ? void 0 : CD.kind) && (0, jp.i)(Dc.current.path) && "lobby" === (null === pD || void 0 === pD ? void 0 : pD.kind) && (0, jp.i)(pD.path);
          if (!cD || DD.docKey === cD || iD)
            if (DD.type !== zp.f.ForceClose) {
              if (ID)
                if (DD.type === zp.f.Joined) {
                  var fD;
                  const SD = JSON.parse(DD.peers),
                    MD = DD.existingCursors ? JSON.parse(DD.existingCursors) : [],
                    oD = (0, Gp.b)(),
                    vD = wi(),
                    {
                      gsUrl: ND,
                      gameNameWithVariation: gD,
                      lobbyName: mD
                    } = vD,
                    nD = null !== (fD = (0, zp.i)(DD.docKey)) && void 0 !== fD ? fD : Dc.current;
                  nD && (Dc.current = nD, "lobby" === nD.kind && (eC(nD.path), Cc.current = nD.path));
                  const OD = nD || (BD ? {
                    kind: "lobby",
                    path: Cc.current
                  } : {
                    kind: "codeBlock",
                    pos: ZD
                  });

                  function PD(CD) {
                    var cD, ID;
                    if (!FC.current) return;
                    const pD = null !== (cD = CD.code) && void 0 !== cD ? cD : "",
                      iD = null !== (ID = CD.collabVersion) && void 0 !== ID ? ID : 0;
                    yD.current = pD, BD || SC(pD), BD && CD.files ? kC(CD.files) : BD && kC((DD => ({
                      ...DD,
                      [Cc.current]: pD
                    })));
                    const fD = {
                      doc: pD,
                      version: iD,
                      clientID: oD,
                      docKey: OD,
                      peers: SD,
                      editorCount: DD.editorCount,
                      existingCursors: MD,
                      httpConfig: vD
                    };
                    if (GC(fD), "lobby" === OD.kind) {
                      var bD;
                      const DD = {
                        doc: pD,
                        version: iD,
                        clientID: oD,
                        docKey: OD,
                        httpConfig: vD
                      };
                      for (const CD of [...tc.current]) CD(DD);
                      null === (bD = Zc.current) || void 0 === bD || bD.startWhenReady()
                    }
                    CD.canSeeCode ? (clearTimeout(xC.current), XD({
                      message: null,
                      type: null
                    })) : function(DD) {
                      clearTimeout(xC.current), XD(DD)
                    }(tf);
                    const QD = eD.current;
                    eD.current = null, BD && QD && CD.files && QD in CD.files && QD !== Cc.current && Pc(QD)
                  }
                  BD ? Bf(Cc.current).then(PD).catch((DD => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", DD), gc()
                  })) : (0, ap.postJsonWithMetricsCookiesAndJsonResponse)(`${ND}/code/get-code-block`, Kp.Uj["get-code-block"].toBuffer({
                    gameNameWithVariation: gD,
                    lobbyName: mD,
                    pos: ZD
                  }), {
                    retries: 1
                  }).then(PD).catch((DD => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", DD), gc()
                  }))
                } else if (DD.type === zp.f.Presence) {
                if (!cD) return;
                const HD = JSON.parse(DD.peers);
                GC((CD => CD ? {
                  ...CD,
                  peers: HD,
                  editorCount: DD.editorCount
                } : CD))
              }
            } else {
              var QD;
              if (!cD) return;
              ID && BD && "keptOpen" === DD.updates && tD.i.Uo("CodeEditorKeepEdits");
              const UD = Dc.current;
              FC.current = !1, Dc.current = null, GC(null);
              if (!BD || "close" === DD.updates) return (0, If.g)(), void(ID && bD());
              if (!ID) return;
              const xD = Qc.current,
                qD = Sc.current;
              Sc.current = null;
              const JD = "lobby" === (null === UD || void 0 === UD ? void 0 : UD.kind) && UD.path === (null === qD || void 0 === qD ? void 0 : qD.fromPath),
                KD = qD && (JD || qD.toPath in xD || (0, jp.i)(qD.toPath)) ? qD.toPath : Cc.current in xD ? Cc.current : null !== (QD = (0, jp.d)(xD)) && void 0 !== QD ? QD : Vp.g;
              Xc(KD)
            }
        })), (0, PD.f)("refetchCode", (() => {
          aD.featureFlags.canSeePlayerWrittenText && ID && FC.current && (oC || (gc(), BD ? tD.i.Uo("EditLobbyCode", ZD) : tD.i.Uo("EditCodeBlock", {
            pos: ZD,
            canChangePos: ND.current
          })))
        }));
        const zc = (0, pD.useCallback)((() => {
            ID && (LD(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [ID]),
          jc = (0, pD.useCallback)((() => {
            LD(!1)
          }), []);
        (0, pD.useEffect)((() => {
          ID && oC && ("docsButton" === mC && lD ? (0, Xi.f)("docsButton") : mC && Xi.j.includes(mC) && !lD && (LD(!0), DC(!1)))
        }), [ID, oC, mC, lD, DC]);
        const lc = (0, pD.useCallback)((() => {
          DC(!1)
        }), [DC]);
        (0, pD.useEffect)((() => {
          ID && oC && ZC && ("aiHelperButton" === PC && FD ? (0, Xi.f)("aiHelperButton") : PC && Xi.e.includes(PC) && !FD && (DC(!0), LD(!1)))
        }), [ID, oC, ZC, PC, FD, DC]), (0, pD.useEffect)((() => {
          if (!ID || !oC) return;
          const DD = BD ? "worldCode" : "codeBlock";
          return (0, Xi.A)(DD, !0), () => {
            (0, Xi.A)(DD, !1)
          }
        }), [ID, oC, BD]), (0, pD.useEffect)((() => {
          if (ID) return () => {
            HC.current ? HC.current = !1 : (0, Xi.y)()
          }
        }), [ID]), (0, pD.useEffect)((() => {
          (0, Xi.D)("exportButton", !!vC)
        }), [vC]);
        const {
          t: Lc
        } = (0, uD.F)(), Tc = !FD && iC > bC, Gc = Tc ? MD.J : MD.x, Rc = (0, pD.useCallback)(((DD, CD) => {
          tD.i.Uo("CodeEditorGoToLine", {
            path: DD,
            line: CD
          }), Pc(DD)
        }), [Pc]), kc = (0, pD.useCallback)((DD => {
          vc.current = DD
        }), []), dc = function(DD, CD) {
          const [cD, ID] = (0, pD.useState)(null);
          return (0, pD.useEffect)((() => {
            if (!CD) return void ID(null);
            let cD = !1;
            return Fp(DD).then((DD => {
              cD || ID(DD)
            }), (DD => {
              console.error("[CodeEditor] could not collect the imported plugins", DD), cD || ID(null)
            })), () => {
              cD = !0
            }
          }), [DD, CD]), cD
        }(RC, ID);
        (0, pD.useEffect)((() => {
          dc && uC && !dc.includes(uC) && (hC(null), AC(null), BD && !FC.current && Xc(Cc.current))
        }), [uC, dc, BD, Xc]), oc.current = {
          collabState: TC,
          ensureJoinedPath: mc,
          waitForLobbyPath: nc,
          pullLobbyFiles: xc,
          t: Lc,
          canEditCode: !!oC
        }, Zc.current || (Zc.current = new bi({
          getLobbyFiles: () => ({
            ...Qc.current,
            ...(0, dp.m)(WC.current.assets)
          }),
          deleteSchematic: async DD => {
            const CD = await Si({
              action: "remove",
              path: DD,
              expectedRevision: WC.current.revision
            });
            sC(CD)
          },
          getActivePath: () => Cc.current,
          getCollabSnapshot: () => {
            var DD;
            if (cc.current) return null;
            const CD = null === (DD = oc.current) || void 0 === DD ? void 0 : DD.collabState;
            return CD ? {
              doc: CD.doc,
              version: CD.version,
              clientID: CD.clientID,
              docKey: CD.docKey,
              httpConfig: CD.httpConfig
            } : null
          },
          replaceActiveDoc: (DD, CD) => {
            var cD, ID;
            return null !== (cD = null === (ID = vc.current) || void 0 === ID ? void 0 : ID.call(vc, DD, CD)) && void 0 !== cD && cD
          },
          ensureJoined: DD => oc.current.ensureJoinedPath(DD),
          createFile: (DD, CD) => {
            !1 !== (null === CD || void 0 === CD ? void 0 : CD.focus) && (wc.current = DD), wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.CreateFile,
              ZC: (0, zp.u)({
                kind: "lobby",
                path: Cc.current
              }),
              Tf: DD
            })
          },
          renameFile: (DD, CD) => {
            const cD = (0, zp.u)({
              kind: "lobby",
              path: Cc.current
            });
            Cc.current === DD && (Sc.current = {
              fromPath: DD,
              toPath: CD
            }, eC(CD)), wD.gameBridge.send("sendCodeCollab", {
              tC: zp.e.RenameFile,
              ZC: cD,
              Tf: DD,
              Gf: CD
            })
          },
          deleteFile: DD => {
            Oc(DD)
          },
          waitForLobbyPath: (DD, CD, cD) => oc.current.waitForLobbyPath(DD, CD, cD),
          pullLobbyFiles: () => oc.current.pullLobbyFiles(),
          setMessage: (DD, CD) => {
            Nc({
              message: DD,
              type: CD
            })
          },
          onUnlinked: () => {
            yc(!1)
          },
          t: DD => oc.current.t(DD),
          canEditCode: () => oc.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: DD,
              lobbyName: CD
            } = wD.gameBridge.latest("connectedGame");
            return (0, Di.d)(DD, CD)
          }
        }));
        const Yc = (0, pD.useCallback)((async DD => {
            const CD = Zc.current;
            if (!CD) return !1;
            try {
              return await CD.writeLobbyFiles(DD)
            } catch (cD) {
              return console.error("World Code AI: couldn't write the change", cD), !1
            }
          }), []),
          Wc = (0, pD.useCallback)((async DD => {
            var CD, cD;
            const ID = null === (CD = DD.find((DD => DD.path === Cf.b))) || void 0 === CD ? void 0 : CD.text,
              pD = Dc.current;
            return void 0 !== ID && "codeBlock" === (null === pD || void 0 === pD ? void 0 : pD.kind) && (!(null === (cD = vc.current) || void 0 === cD || !cD.call(vc, (0, zp.u)(pD), ID)) && (yD.current = ID, SC(ID), !0))
          }), []),
          sc = (0, pD.useCallback)((async () => {
            try {
              var DD, CD;
              const cD = await Bf(Vp.g);
              return !1 === cD.canSeeCode ? null : null !== (DD = cD.files) && void 0 !== DD ? DD : {
                [Vp.g]: null !== (CD = cD.code) && void 0 !== CD ? CD : ""
              }
            } catch (cD) {
              return console.error("World Code AI: couldn't read World Code for a code block", cD), null
            }
          }), []),
          Ec = (0, pD.useMemo)((() => ({
            [Cf.b]: wC
          })), [wC]),
          ec = (0, pD.useCallback)(((DD, CD) => {
            tD.i.Uo("CodeEditorGoToLine", {
              path: Cf.b,
              line: CD
            })
          }), []);
        (0, pD.useEffect)((() => {
          FD && ID && QC(iC)
        }), [FD, ID, iC]);
        const uc = (0, pD.useCallback)((() => {
            var DD, CD;
            Jc();
            const cD = (0, aD.isTouchscreen)() ? "open World Code again" : `press ${null!==(DD=null===(CD=fc.q.OpenCodeEditor)||void 0===CD?void 0:CD[0])&&void 0!==DD?DD:"F8"}`,
              ID = BD ? `\ud83e\udd16 Try out your change, then ${cD} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            tD.i.Uo("chat", {
              content: [{
                str: ID,
                style: {
                  color: HD.J.cyanUiText
                }
              }]
            })
          }), [Jc, BD]),
          hc = (0, pD.useCallback)((DD => {
            const CD = ZD,
              cD = ND.current;
            BD || !CD || wD.gameBridge.lookup("codeBlockClickable", CD) ? (0, If.h)(DD, {
              submit: () => {
                Jc(), tD.i.Uo("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: HD.J.cyanUiText
                    }
                  }]
                }), !BD && CD && setTimeout((() => {
                  wD.gameBridge.send("clickCodeBlock", CD)
                }), 1e3)
              },
              reopen: () => {
                (0, RD.s)() || (BD ? tD.i.Uo("EditLobbyCode", CD) : tD.i.Uo("EditCodeBlock", {
                  pos: CD,
                  canChangePos: cD
                }))
              }
            }) : uc()
          }), [Jc, BD, ZD, uc]),
          rc = (0, pD.useCallback)((() => {
            DC(!1)
          }), [DC]),
          Ac = (0, pD.useRef)(qc);
        Ac.current = qc;
        const Fc = (0, pD.useCallback)((function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            tD.i.Uo("WorldCodeAiDraft", {
              text: DD,
              send: CD
            }), Ac.current(), tD.i.Uo("EditLobbyCode", ZD)
          }), [ZD]),
          DI = (0, pD.useCallback)((DD => {
            Ac.current(), DD.codeBlock ? tD.i.Uo("EditCodeBlock", {
              pos: [...DD.pos],
              canChangePos: DD.canChangePos
            }) : tD.i.Uo("EditLobbyCode", ZD)
          }), [ZD]);
        (0, PD.f)("WorldCodeAiDraft", (DD => {
          BD && (cC(DD), DC(!0))
        }));
        const CI = !!oC && !!mC && Xi.j.includes(mC),
          cI = !!oC && !!PC && Xi.e.includes(PC);
        (0, pD.useEffect)((() => {
          ID && FD && ZC && !CI && LD(!1)
        }), [ID, FD, ZC, CI]);
        const II = (0, pD.useCallback)((() => {
            DC(!1), LD(!1)
          }), [DC]),
          {
            Zy: pI,
            setWorld: iI,
            toggleWorld: fI
          } = function(DD) {
            let {
              showAi: CD,
              showDocs: cD,
              showChat: ID,
              hideOtherRightPanels: iD
            } = DD;
            const [fD, bD] = (0, pD.useState)("hidden"), QD = (0, pD.useRef)(null), wD = (0, pD.useCallback)((() => {
              QD.current = null, bD((DD => "hidden" === DD ? DD : (0, xi.i)() ? "hidden" : "shown"))
            }), []);
            (0, pD.useEffect)((() => {
              (CD || cD) && wD()
            }), [CD, cD, wD]), (0, pD.useEffect)((() => {
              ID && wD()
            }), [ID, wD]);
            const SD = "hidden" !== fD && (0, xi.i)();
            (0, pD.useLayoutEffect)((() => {
              if (SD) {
                const DD = document.activeElement;
                DD instanceof HTMLElement && DD.closest(".cm-content") && (QD.current = DD, DD.blur())
              } else {
                var DD;
                null === (DD = QD.current) || void 0 === DD || DD.focus(), QD.current = null
              }
            }), [SD]);
            const BD = (0, pD.useCallback)((() => {
              "hidden" === fD ? (bD("shown"), (0, xi.i)() && iD()) : bD("hidden")
            }), [fD, iD]);
            return {
              Zy: fD,
              setWorld: bD,
              toggleWorld: BD
            }
          }({
            showAi: FD,
            showDocs: lD,
            showChat: TD,
            hideOtherRightPanels: II
          }),
          bI = FD && null !== yC && ZC,
          QI = (0, pD.useCallback)((() => {
            cC(null)
          }), []),
          [wI, SI] = (0, pD.useState)(null);
        (0, PD.f)("WorldCodeAiSelection", (DD => {
          ID && (SI(DD), DC(!0), LD(!1))
        }));
        const BI = (0, pD.useCallback)((() => {
          SI(null)
        }), []);
        (0, PD.f)("chat", (DD => {
          let {
            content: CD
          } = DD;
          if (!BD && null === BC.current) return;
          const cD = Array.isArray(CD) ? CD : [CD],
            ID = cD.some((DD => {
              var CD;
              return (null === DD || void 0 === DD || null === (CD = DD.style) || void 0 === CD ? void 0 : CD.color) === HD.J.redUiText
            })),
            pD = cD.map((DD => {
              var CD;
              const cD = null !== (CD = null === DD || void 0 === DD ? void 0 : DD.str) && void 0 !== CD ? CD : DD;
              return "string" === typeof cD ? cD : ""
            })).join("");
          ID && /world code|error/i.test(pD) && (pC((DD => [...DD, pD].slice(-10))), fC((DD => DD + 1)), (0, If.f)(pD))
        })), (0, pD.useEffect)((() => {
          if (!ID || !BD || !Mc) return;
          let DD = !1;
          return (async (CD, cD) => {
            const ID = await (null === (CD = Zc.current) || void 0 === CD ? void 0 : CD.tryRestoreHandle());
            !DD && ID && (yc(!0), null === (cD = Zc.current) || void 0 === cD || cD.startWhenReady())
          })(), () => {
            DD = !0
          }
        }), [ID, BD, Mc]), (0, pD.useEffect)((() => {
          var DD;
          ID || (null === (DD = Zc.current) || void 0 === DD || DD.stopContinuousSync(), gc(!1), UC.current && (UC.current = !1, wD.gameBridge.send("sendChatMessage", {
            Rf: "//export",
            channelName: null
          })))
        }), [ID, gc]);
        const yI = (0, pD.useCallback)((async () => {
            if (Mc && Zc.current) try {
              if (!await Zc.current.linkFolder()) return;
              yc(!0), await Zc.current.startWhenReady()
            } catch (DD) {
              console.error("[WorldCodeDirectorySync] Link failed", DD), Nc({
                message: Lc("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Mc, Lc]),
          MI = (0, pD.useCallback)((async () => {
            Zc.current && await Zc.current.unlinkFolder()
          }), []),
          tI = (0, pD.useCallback)((() => {
            Mc ? Bc ? MI() : yI() : wp.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Mc, Bc, yI, MI]),
          ZI = BD && "hidden" !== pI;
        return (0, SD.jsxs)(fD.e, {
          className: MC()("CodeEditorBg", {
            CodeEditorLight: KD,
            WorldShown: "hidden" !== pI
          }),
          close: qc,
          escDoesExit: !0,
          show: ID,
          togglePointerLock: !1,
          globallyUniqueKey: BD ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, SD.jsx)(gi.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Lc("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!oC && !BD
          }), (0, SD.jsx)(gi.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsx)("p", {
                children: Lc("codeEditor:tutorialWorldCodeWelcome")
              }), (0, SD.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, SD.jsx)("li", {
                  children: Lc("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, SD.jsx)("li", {
                  children: Lc("codeEditor:tutorialWorldCodeUseReact")
                }), (0, SD.jsx)("li", {
                  children: Lc("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!oC && BD
          }), (0, SD.jsx)("div", {
            className: "CodeEditorTitle",
            children: BD ? "World Code" : "Code Block"
          }), (0, SD.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, SD.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, SD.jsx)(ED.f, {
                tooltipInner: Lc(vC ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: vC ? void 0 : 0,
                hideTooltip: "exportButton" === NC,
                children: (0, SD.jsx)(gi.l, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Lc("codeEditor:tutorialExport"),
                  enabled: !!oC,
                  children: (0, SD.jsx)(MD.o, {
                    className: "CodeEditorButton",
                    disabled: !vC,
                    onClick: () => {
                      "exportButton" === NC && ((0, Xi.f)("exportButton"), HC.current = !0), UC.current = !0, qc()
                    },
                    padDestructive: !0,
                    children: Lc("codeEditor:exportWorld")
                  })
                })
              }), (0, SD.jsx)(ei, {
                Zy: pI,
                setWorld: iI,
                toggleWorld: fI,
                aiShown: bI,
                closeAi: rc
              })]
            }), (0, SD.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [oC && (0, SD.jsx)(ED.f, {
                tooltipInner: Lc("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === NC,
                children: (0, SD.jsx)(gi.l, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Lc("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, SD.jsx)(MD.i, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Lc("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, Xi.f)("helpButton"), wp.NotificationProvider.showCustomPopup({
                        body: DD => (0, SD.jsx)(mi, {
                          close: DD
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, SD.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, SD.jsx)(oD.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, SD.jsx)(ED.f, {
                tooltipInner: Lc("codeEditor:closeTooltip"),
                children: (0, SD.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    qc()
                  },
                  children: (0, SD.jsx)(MD.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, SD.jsx)(Tp, {
            peers: null !== (CD = null === TC || void 0 === TC ? void 0 : TC.peers) && void 0 !== CD ? CD : []
          }), (0, SD.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [TD && WD && (0, SD.jsx)(xi.e, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                kD(!1)
              },
              children: (0, SD.jsx)(Ui, {
                inputRef: dD
              })
            }), BD && (0, SD.jsx)(sp, {
              schematics: dC.assets,
              onManageSchematic: DD => {
                oC && wp.NotificationProvider.showCustomPopup({
                  body: CD => (0, SD.jsx)(Mi, {
                    initialPath: DD,
                    onChanged: sC,
                    onClose: CD
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: RC,
              activePath: EC,
              canEdit: !!oC,
              directoryLinked: Bc,
              pluginNames: null !== dc && void 0 !== dc ? dc : Mf,
              activePluginName: uC,
              activePluginFile: rC,
              onSelect: Pc,
              onSelectPlugin: Hc,
              onToggleDirectorySync: tI,
              onCreate: DD => {
                wc.current = DD, wD.gameBridge.send("sendCodeCollab", {
                  tC: zp.e.CreateFile,
                  ZC: (0, zp.u)({
                    kind: "lobby",
                    path: Cc.current
                  }),
                  Tf: DD
                })
              },
              onRename: (DD, CD) => {
                Cc.current === DD && (Sc.current = {
                  fromPath: DD,
                  toPath: CD
                }, eC(CD)), wD.gameBridge.send("sendCodeCollab", {
                  tC: zp.e.RenameFile,
                  ZC: (0, zp.u)({
                    kind: "lobby",
                    path: Cc.current
                  }),
                  Tf: DD,
                  Gf: CD
                })
              },
              onRenameFolder: (DD, CD) => {
                const [cD] = (0, jp.n)([Cc.current], DD, CD);
                cD && (Sc.current = {
                  fromPath: cD[0],
                  toPath: cD[1]
                }, eC(cD[1])), wD.gameBridge.send("sendCodeCollab", {
                  tC: zp.e.RenameFolder,
                  ZC: (0, zp.u)({
                    kind: "lobby",
                    path: Cc.current
                  }),
                  Tf: DD,
                  Gf: CD
                })
              },
              onDelete: Oc
            }), (0, SD.jsx)("div", {
              className: MC()("CodeEditorMessage", {
                CodeEditorMessageHidden: !OD.message,
                CodeEditorMessageSuccess: "success" === OD.type
              }),
              children: OD.message && (0, SD.jsx)("div", {
                className: "CodeEditorMessageText",
                children: OD.message
              })
            }), (0, SD.jsx)(pD.Suspense, {
              fallback: (0, SD.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, SD.jsx)(xD.e, {})
              }),
              children: (0, SD.jsx)(ff, {
                isLobbyCode: BD,
                code: TC ? TC.doc : yD.current,
                files: BD ? RC : void 0,
                activePath: BD ? EC : void 0,
                pluginName: uC,
                pluginFile: rC,
                pluginSource: uC && rC ? null === (cD = Rp.e[uC]) || void 0 === cD ? void 0 : cD.files[rC] : void 0,
                onChange: Vc,
                canEditCode: oC,
                setTemporaryMessage: Nc,
                close: qc,
                showTooltips: qD,
                lightMode: KD,
                collabState: TC,
                setActiveDocReplacer: kc,
                showAiHints: ZC && zD,
                canAiChangeCode: !!oC && (BD || !!ND.current),
                onRemoteDocChange: DD => {
                  var CD;
                  (yD.current = DD, BD) ? (kC((CD => ({
                    ...CD,
                    [Cc.current]: DD
                  }))), null === (CD = Zc.current) || void 0 === CD || CD.onDocTextChanged(Cc.current, DD)) : SC(DD)
                }
              })
            }), (lD || bI || "hidden" !== pI) && (0, SD.jsxs)(qi, {
              Zy: pI,
              worldPanel: (0, SD.jsx)(si, {
                shown: pI,
                setShown: iI,
                canInsertCode: !!oC && !uC
              }),
              closeWorld: () => {
                iI("hidden")
              },
              aiShown: bI,
              defaultWidth: lD ? "40%" : "max(18rem, 36%)",
              children: [lD && (0, SD.jsx)(xi.e, {
                onClose: CI ? void 0 : jc,
                children: (0, SD.jsx)(pD.Suspense, {
                  fallback: (0, SD.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, SD.jsx)(xD.e, {})
                  }),
                  children: (0, SD.jsx)(bf, {
                    popOutDocs: zc,
                    hideDocs: jc,
                    tutorialEnabled: !!oC
                  })
                })
              }), bI && (0, SD.jsx)(xi.e, {
                onClose: cI ? void 0 : rc,
                children: (0, SD.jsx)(pD.Suspense, {
                  fallback: (0, SD.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, SD.jsx)(xD.e, {})
                  }),
                  children: (0, SD.jsx)(Qf, {
                    target: yC,
                    chatKey: `${lC.gameNameWithVariation}/${lC.lobbyName}/aiHelper`,
                    historyKey: `${lC.gameNameWithVariation}/${lC.lobbyName}/${yC.key}`,
                    files: yC.codeBlock ? Ec : RC,
                    activePath: yC.codeBlock ? Cf.b : EC,
                    canEdit: !!oC && (yC.codeBlock ? !!ND.current : !uC),
                    isLoaded: null !== TC,
                    errors: IC,
                    errorCount: iC,
                    applyFiles: yC.codeBlock ? Wc : Yc,
                    submit: uc,
                    testRun: hc,
                    close: rc,
                    goToLine: yC.codeBlock ? ec : Rc,
                    openWorldCode: yC.codeBlock ? Fc : void 0,
                    readWorldCode: yC.codeBlock ? sc : void 0,
                    viewChunk: wf,
                    viewGameState: Sf,
                    openTarget: oC ? DI : void 0,
                    draft: CC,
                    onDraftUsed: QI,
                    selection: wI,
                    onSelectionUsed: BI
                  }, yC.key)
                })
              })]
            })]
          }), (null === Ic || void 0 === Ic ? void 0 : Ic.fallback) && (0, SD.jsx)(Zi, {
            fallback: Ic.fallback,
            onGoToLine: Rc
          }), (0, SD.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, SD.jsx)(ED.f, {
              tooltipInner: Lc(KD ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, SD.jsx)(MD.i, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Lc(KD ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  VD(!KD)
                },
                children: (0, SD.jsx)(oD.c, {
                  name: KD ? "moon" : "sun-bright"
                })
              })
            }), (0, SD.jsx)(ED.f, {
              tooltipInner: Lc(ZI ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.o, {
                className: "CodeEditorButton",
                onClick: () => {
                  Jc(ZI)
                },
                padDefaultFocus: !0,
                children: Lc("codeEditor:submitCode")
              })
            }), (0, SD.jsx)(ED.f, {
              tooltipInner: Lc(lD ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === mC || "hideDocsButton" === mC,
              children: (0, SD.jsx)(gi.l, {
                tutorial: XC,
                step: lD ? "hideDocsButton" : "docsButton",
                text: Lc(lD ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!oC,
                placement: "top",
                waitForClick: !0,
                onPrevious: lD && "welcome" === XC ? jc : void 0,
                children: (0, SD.jsx)(MD.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, Xi.f)(lD ? "hideDocsButton" : "docsButton"), LD(!lD), DC(!1)
                  },
                  children: Lc(lD ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), ZC && (0, SD.jsx)(gi.l, {
              tutorial: OC,
              step: FD ? "hideAiHelperButton" : "aiHelperButton",
              text: Lc(FD ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === OC ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!oC,
              placement: "top",
              waitForClick: !0,
              onPrevious: FD && "welcome" === OC ? lc : void 0,
              children: (0, SD.jsx)(Gc, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, Xi.f)(FD ? "hideAiHelperButton" : "aiHelperButton"), DC(!FD), LD(!1)
                },
                children: FD ? "Hide AI Helper" : Tc ? "Fix error with AI" : "AI Helper"
              })
            }), WD && (0, SD.jsx)(ED.f, {
              tooltipInner: Lc(TD ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.x, {
                className: "CodeEditorButton",
                onClick: () => {
                  YD.current = !TD, kD(!TD)
                },
                children: Lc(TD ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, SD.jsx)(ED.f, {
              tooltipInner: Lc("hidden" === pI ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.x, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: fI,
                children: Lc("hidden" === pI ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, SD.jsx)(ED.f, {
              tooltipInner: Lc("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.i, {
                className: "CodeEditorButton",
                onClick: () => {
                  tD.i.Uo("FormatCode")
                },
                children: Lc("codeEditor:formatCode")
              })
            }), (0, SD.jsx)(ED.f, {
              tooltipInner: Lc("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.i, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(yD.current).then((() => {
                    Nc({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Nc({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Lc("codeEditor:copyCode")
              })
            }), (0, SD.jsx)(ED.f, {
              tooltipInner: Lc(qD ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.i, {
                className: "CodeEditorButton",
                onClick: () => {
                  JD(!qD)
                },
                children: Lc(qD ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !BD && (0, SD.jsx)(ED.f, {
              tooltipInner: Lc("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === NC,
              children: (0, SD.jsx)(gi.l, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Lc("codeEditor:tutorialWorldCodeButton"),
                enabled: !!oC,
                placement: "top",
                waitForClick: !0,
                children: (0, SD.jsx)(MD.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === NC && ((0, Xi.f)("worldCodeButton"), HC.current = !0), qc(), tD.i.Uo("EditLobbyCode", ZD)
                  },
                  children: Lc("codeEditor:worldCode")
                })
              })
            }), (LC || ic || ZC) && (0, SD.jsx)(ED.f, {
              tooltipInner: Lc("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, SD.jsx)(MD.i, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  VC(!0)
                },
                children: (0, SD.jsx)(oD.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), aC && (0, SD.jsx)(Bp.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              VC(!1)
            },
            body: (0, SD.jsx)(Ni, {
              engine: ic,
              onSetEngine: ac,
              aiHints: ZC ? {
                shown: zD,
                setShown: jD
              } : null,
              variation: LC ? {
                name: qC,
                setName: JC,
                reload: Kc
              } : null
            })
          })]
        })
      })),
      of = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function vf(DD) {
      return "inventory" === DD
    }
    const Nf = (0, pD.memo)((function() {
      const {
        openEverythingMenuName: DD,
        openInGameMenuName: CD
      } = (0, GD.o)(["openEverythingMenuName", "openInGameMenuName"]), cD = (0, UD.h)("fullInventory"), iD = (0, pD.useRef)(null), fD = (0, EC.h)();
      (0, PD.f)("toggleMenu", (DD => {
        var CD;
        if (!fD.shown) return;
        const cD = GD.d.get("openInGameMenuName");
        let ID = DD.split("|")[0];
        const pD = null !== (CD = DD.split("|")[1]) && void 0 !== CD ? CD : null;
        ("closeCurrentMenu" === pD && cD || ID === cD) && (iD.current = null, ID = null);
        const bD = "closeCurrentMenu" === pD ? null : pD;
        iD.current !== bD && (iD.current = bD), null !== ID && (0, gp.p)(gp.e, {
          keepsMovement: vf(ID)
        }), GD.d.set({
          openInGameMenuName: ID
        })
      }));
      const bD = (0, pD.useCallback)((DD => () => {
          tD.i.Uo("toggleMenu", DD)
        }), []),
        QD = (0, pD.useRef)({
          cantCrouchIfNotFullscreen: bD("cantCrouchIfNotFullscreen"),
          makeReport: bD("makeReport"),
          makeDiscordReport: bD("makeDiscordReport"),
          editBook: bD("editBook"),
          editNameTag: bD("editNameTag"),
          inventory: bD("inventory"),
          inviteLink: bD("inviteLink"),
          writeOnBoard: bD("writeOnBoard"),
          codeEditor: bD("codeEditor"),
          lobbyCodeEditor: bD("lobbyCodeEditor"),
          customLobbyBlockEditor: bD("customLobbyBlockEditor"),
          ironChestPasskeyInput: bD("ironChestPasskeyInput"),
          petUi: bD("petUi")
        }),
        wD = (0, pD.useCallback)((() => {
          GD.d.set({
            openInGameMenuName: null
          })
        }), []),
        BD = (0, pD.useRef)(null);
      return (0, pD.useEffect)((() => {
        if (CD) {
          var DD;
          (0, gp.p)(gp.e, {
            keepsMovement: vf(CD)
          }), BD.current = of.has(CD) ? null !== (DD = GD.d.get("openEverythingMenuName")) && void 0 !== DD ? DD : BD.current : null, GD.d.set({
            openEverythingMenuName: null
          })
        } else {
          const DD = BD.current;
          BD.current = null, null !== DD && null === GD.d.get("openEverythingMenuName") && GD.d.set({
            openEverythingMenuName: DD
          }), iD.current = null, (0, gp.l)(gp.e)
        }
      }), [CD]), (0, pD.useEffect)((() => {
        null !== DD && wD()
      }), [DD, wD]), (0, SD.jsxs)(SD.Fragment, {
        children: [(0, SD.jsx)(ID.f, {
          show: "clientGame" === CD
        }), (0, SD.jsx)(fp, {
          show: "cantCrouchIfNotFullscreen" === CD,
          onOpen: QD.current.cantCrouchIfNotFullscreen,
          onClose: wD
        }), (0, SD.jsx)(op, {
          show: "makeReport" === CD,
          onOpen: QD.current.makeReport,
          onClose: wD
        }), (0, SD.jsx)(Np, {
          show: "makeDiscordReport" === CD,
          onOpen: QD.current.makeDiscordReport,
          onClose: wD
        }), (0, SD.jsx)(vc, {
          show: "editBook" === CD,
          onOpen: QD.current.editBook,
          onClose: wD
        }), (0, SD.jsx)(Zc, {
          show: "editNameTag" === CD,
          onOpen: QD.current.editNameTag,
          onClose: wD
        }), cD && (0, SD.jsx)(Ip, {
          show: "inventory" === CD,
          onOpen: QD.current.inventory,
          onClose: wD,
          variation: iD.current
        }), (0, SD.jsx)(eC, {
          show: "inviteLink" === CD,
          onClose: wD,
          option: iD.current
        }), (0, SD.jsx)(jD, {
          show: "retentionFeatures" === CD,
          onClose: wD
        }), (0, SD.jsx)(tc, {
          show: "writeOnBoard" === CD,
          onOpen: QD.current.writeOnBoard,
          onClose: wD
        }), (0, SD.jsx)(Zf, {
          show: "lobbyCodeEditor" === CD,
          onOpen: QD.current.lobbyCodeEditor,
          onClose: wD,
          isLobbyCode: !0
        }), (0, SD.jsx)(Zf, {
          show: "codeEditor" === CD,
          onOpen: QD.current.codeEditor,
          onClose: wD,
          isLobbyCode: !1
        }), (0, SD.jsx)(mp, {
          show: "customLobbyBlockEditor" === CD,
          onOpen: QD.current.customLobbyBlockEditor,
          onClose: wD
        }), (0, SD.jsx)(lc, {
          show: "ironChestPasskeyInput" === CD,
          onOpen: QD.current.ironChestPasskeyInput,
          onClose: wD
        }), (0, SD.jsx)(xp, {
          togglePointerLock: !0,
          show: "petUi" === CD,
          onOpen: QD.current.petUi,
          onClose: wD
        })]
      })
    }))
  },
  35912: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => Sf
    });
    cD(35920);
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(3555),
      bD = cD(1440),
      QD = cD(1872),
      wD = cD(1093);

    function SD() {
      const DD = 2e3,
        [CD, cD] = (0, ID.useState)(null),
        [pD, SD] = (0, ID.useState)(null),
        BD = (0, ID.useRef)(null);
      (0, bD.f)("showBottomMessage", (CD => {
        let {
          message: cD,
          timeoutLength: ID = DD,
          type: pD
        } = CD;
        SD({
          message: cD,
          type: pD
        }), clearTimeout(BD.current), BD.current = setTimeout((() => {
          SD(null)
        }), ID)
      })), (0, bD.f)("showPermanentBottomMessage", (DD => {
        cD(DD)
      })), (0, ID.useEffect)((() => ((0, fD.c)((() => {
        cD(null)
      })), () => {
        clearTimeout(BD.current)
      })), []);
      const yD = pD || CD;
      return yD ? (0, wD.jsx)("div", {
        className: iD()("BottomScreenMessage", yD.type),
        children: (0, wD.jsx)(QD.c, {
          text: yD.message
        })
      }) : null
    }
    var BD = cD(2295),
      yD = cD(1905),
      MD = cD(1508),
      tD = cD(2361);

    function ZD() {
      let DD;
      const CD = () => {
          clearTimeout(DD), DD = setTimeout((() => {
            yD.gameBridge.latest("connectedGame").replay || (yD.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, MD.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        cD = () => {
          clearTimeout(DD)
        };
      return window.addEventListener("focus", cD), window.addEventListener("blur", CD), () => {
        window.removeEventListener("blur", CD), window.removeEventListener("focus", cD), clearTimeout(DD)
      }
    }
    var oD = cD(1120),
      vD = cD(1113),
      ND = cD(312),
      gD = cD(2358),
      XD = cD(20),
      mD = cD(1928),
      nD = cD(36),
      OD = cD(1954),
      PD = cD(16),
      HD = cD(1957),
      UD = cD(1388),
      xD = cD(8528),
      qD = cD(1979),
      JD = cD(1192);
    const KD = (0, ID.memo)((function() {
      const {
        isTouchScreen: DD,
        loadingOverlayVisible: CD,
        openInGameMenuName: cD,
        openEverythingMenuName: pD
      } = (0, PD.o)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), fD = (0, UD.p)();
      (0, vD.b)();
      const bD = (0, gD.h)("showBasicMovementControls"),
        [QD, SD] = (0, ID.useState)("movement"),
        BD = "movement" === QD,
        yD = fD && !1 !== bD;
      (0, ID.useEffect)((() => {
        "padActions" !== QD || yD || SD("done")
      }), [QD, yD]);
      const MD = CD || null !== cD || null !== pD,
        tD = (0, ID.useRef)({
          step: QD,
          ms: 0
        });
      return (0, ID.useEffect)((() => {
        if (MD || "done" === QD) return;
        tD.current.step !== QD && (tD.current = {
          step: QD,
          ms: 0
        });
        const DD = tD.current,
          CD = performance.now(),
          cD = setTimeout((() => {
            SD("movement" === QD && (0, UD.e)() ? "padActions" : "done")
          }), 7e3 - DD.ms);
        return () => {
          clearTimeout(cD), DD.ms += performance.now() - CD
        }
      }), [MD, QD]), nD.h.getItem(ND.Hb) > 2 ? (0, wD.jsx)(jD, {
        showingMovementControls: !1
      }) : (0, wD.jsxs)(wD.Fragment, {
        children: [DD && !fD || !BD || !1 === bD ? null : (0, wD.jsxs)("div", {
          className: iD()("ControlsTutorialDiv", {
            Covered: MD
          }),
          children: [(0, wD.jsx)(aD, {}), (0, wD.jsx)(zD, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, wD.jsx)(zD, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === QD && yD && (0, wD.jsx)(VD, {
          covered: MD
        }), (0, wD.jsx)(jD, {
          showingMovementControls: "done" !== QD
        })]
      })
    }));

    function aD() {
      const DD = (0, UD.p)();
      return (0, wD.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, wD.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), DD && (0, wD.jsx)(HD.d, {
          noaAction: "forward"
        }), !DD && (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, wD.jsx)(HD.d, {
              noaAction: "forward"
            })
          }), (0, wD.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, wD.jsx)(HD.d, {
              noaAction: "left"
            }), (0, wD.jsx)(HD.d, {
              noaAction: "backward"
            }), (0, wD.jsx)(HD.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function VD(DD) {
      let {
        covered: CD
      } = DD;
      const {
        t: cD
      } = (0, JD.F)(), ID = (0, gD.h)("useInventory");
      return (0, wD.jsxs)("div", {
        className: iD()("ControlsTutorialDiv", {
          Covered: CD
        }),
        children: [(0, wD.jsx)(zD, {
          header: cD("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, wD.jsx)(zD, {
          header: cD("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== ID && (0, wD.jsx)(zD, {
          header: cD("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, wD.jsx)(zD, {
          header: cD("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function zD(DD) {
      let {
        header: CD,
        noaAction: cD
      } = DD;
      return (0, wD.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, wD.jsx)("div", {
          className: "KeyHeader",
          children: CD
        }), (0, wD.jsx)(HD.d, {
          noaAction: cD
        })]
      })
    }

    function jD(DD) {
      let {
        showingMovementControls: CD
      } = DD;
      const {
        isTouchScreen: cD
      } = (0, PD.o)(["isTouchScreen"]), pD = (0, UD.p)(), iD = (0, qD.c)("OpenShop"), [fD, bD] = (0, ID.useState)(!1), QD = `SeenShopControls|${(0,OD.g)("connectedGame",(DD=>DD.gameNameWithVariation))}`, SD = () => (!(0, UD.e)() || null !== (0, xD.d)("OpenShop")) && !nD.h.getItem(QD) && mD.d.get("shopInfo") && !CD, BD = () => (bD(!0), nD.h.setItem(QD, !0), (0, UD.e)() || XD.i.Uo("showShopTouchTutorial"), setTimeout((() => {
        bD(!1)
      }), 7e3));
      (0, ID.useEffect)((() => {
        let DD;
        const CD = XD.i.subscribe("showShopTutorial", (() => {
          SD() && (DD = BD())
        }));
        return () => {
          clearTimeout(DD), XD.i.unsubscribe(CD)
        }
      }), [CD]);
      const yD = (0, ID.useRef)();
      return (0, gD.e)("currencyAmounts", (DD => {
        if (SD()) {
          let cD = !1;
          const ID = mD.d.get("shopInfo");
          for (const pD in ID) {
            for (const iD in ID[pD].items) {
              var CD;
              const fD = ID[pD].items[iD];
              if (void 0 !== fD.currency && DD[fD.currency] && fD.cost <= DD[fD.currency].amount && (null === (CD = fD.hidden) || void 0 === CD || !CD)) {
                cD = !0;
                break
              }
            }
            if (cD) break
          }
          cD && (yD.current = BD())
        }
      })), (0, ID.useEffect)((() => () => {
        clearTimeout(yD.current)
      }), [CD]), !fD || pD && !iD ? null : (0, wD.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: cD && !pD ? null : (0, wD.jsx)(zD, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var lD = cD(1356),
      LD = cD(1064);
    const TD = (0, ID.memo)((function() {
      return (0, vD.b)(), (0, wD.jsx)(GD, {})
    }));
    class GD extends ID.Component {
      constructor(DD) {
        super(DD), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = XD.i.subscribe("TopRightHelper", (DD => {
          this.showQueue.push(DD), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        XD.i.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(DD, CD) {
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
        let DD, CD, cD, ID, pD, iD = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, DD = "slideIn") : "slideOut" === this.state.currState ? DD = "slideOut" : null === this.currMessage && (iD = !1), this.currMessage) {
          const iD = this.currMessage.color || "rgb(102, 102, 102)";
          CD = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === DD ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, cD = {
            backgroundColor: iD
          }, ID = {
            animation: "2s " + ("slideOut" === DD ? "CloseNotification" : "ExpandNotification")
          }, pD = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === DD ? "textDisappear" : "textAppear")
          }
        }
        return iD ? (0, wD.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...CD
          },
          children: [(0, wD.jsx)("div", {
            className: "LeftSide",
            style: cD,
            children: (0, wD.jsx)(LD.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, wD.jsx)("div", {
            className: "RightSide",
            style: ID,
            children: (0, wD.jsx)("div", {
              className: "HelperText",
              style: pD,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var RD = cD(35922),
      kD = cD(1403);
    const dD = (0, kD.e)((DD => DD.PadSneakChip));

    function YD(DD) {
      const [CD, cD, ID] = function(DD) {
        const CD = parseInt(DD.substring(1), 16),
          cD = (CD >> 16) / 255,
          ID = (CD >> 8 & 255) / 255,
          pD = (255 & CD) / 255,
          iD = Math.max(cD, ID, pD),
          fD = Math.min(cD, ID, pD),
          bD = (iD + fD) / 2,
          QD = iD - fD;
        if (0 === QD) return [0, 0, bD];
        const wD = QD / (1 - Math.abs(2 * bD - 1));
        let SD;
        SD = iD === cD ? (ID - pD) / QD % 6 : iD === ID ? (pD - cD) / QD + 2 : (cD - ID) / QD + 4;
        return [(60 * SD + 360) % 360, wD, bD]
      }(DD), pD = 0 === cD ? 0 : Math.min(.6, cD + .03), iD = ID > .5 ? -1 : 1, fD = WD(ID + .09 * iD);
      return {
        panel: DD,
        slot: sD(CD, pD, fD),
        slotSelected: sD(CD, pD, WD(fD + .2 * iD)),
        slotUnavailable: sD(CD, pD, WD(ID + -.1 * iD))
      }
    }

    function WD(DD) {
      return Math.min(1, Math.max(0, DD))
    }

    function sD(DD, CD, cD) {
      const ID = (1 - Math.abs(2 * cD - 1)) * CD,
        pD = ID * (1 - Math.abs(DD / 60 % 2 - 1)),
        iD = cD - ID / 2;
      let fD;
      return fD = DD < 60 ? [ID, pD, 0] : DD < 120 ? [pD, ID, 0] : DD < 180 ? [0, ID, pD] : DD < 240 ? [0, pD, ID] : DD < 300 ? [pD, 0, ID] : [ID, 0, pD], "#" + fD.map((DD => function(DD) {
        return Math.round(255 * DD).toString(16).padStart(2, "0")
      }(DD + iD))).join("")
    }
    var ED = cD(35941),
      eD = cD(4119),
      uD = cD(2338),
      hD = cD(2343),
      rD = cD(35991),
      AD = cD(4592),
      FD = cD(1460),
      DC = cD(624);

    function CC(DD, CD, cD, ID) {
      DD.style.display = "";
      const pD = DD.offsetWidth,
        iD = DD.offsetHeight,
        fD = Math.min(Math.max((CD.left + CD.right) / 2 - pD / 2, 8), window.innerWidth - 8 - pD);
      let bD = CD.top - cD - iD;
      const QD = [...ID].sort(((DD, CD) => CD.top - DD.top));
      for (const wD of QD) fD < wD.right && fD + pD > wD.left && bD < wD.bottom && bD + iD > wD.top && (bD = wD.top - 8 - iD);
      return bD < 8 ? (DD.style.display = "none", null) : (DD.style.transform = `translate(${fD-CD.left}px, ${bD-CD.top}px)`, {
        left: fD,
        top: bD,
        right: fD + pD,
        bottom: bD + iD
      })
    }

    function cC(DD) {
      const CD = [];
      for (const cD of document.querySelectorAll(DD)) {
        const DD = cD.getBoundingClientRect();
        DD.width > 0 && "visible" === getComputedStyle(cD).visibility && CD.push(DD)
      }
      return CD
    }

    function IC(DD, CD) {
      return DD.clientX >= CD.left - 8 && DD.clientX <= CD.right + 8 && DD.clientY >= CD.top - 8 && DD.clientY <= CD.bottom + 8
    }
    var pC = cD(8583);
    class iC {
      constructor(DD) {
        this.deps = DD, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(DD) {
        DD && "armed" === this.phase ? this.setPhase("ready") : DD || "ready" !== this.phase || this.setPhase("armed")
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
      hold(DD, CD) {
        this.suspended || (this.offered ? CD || this.setPhase("idle") : DD && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : DD || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(DD) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const CD = this.phase;
        this.phase = DD, this.deps.onPhase(DD, CD)
      }
    }
    const fC = 25 * Math.PI / 180,
      bC = 45 * Math.PI / 180;
    class QC extends iC {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(DD, CD, cD) {
        this.speed = cD;
        const ID = Math.hypot(DD, CD),
          pD = ID > 0 ? Math.acos(Math.min(1, -CD / ID)) : Math.PI;
        this.hold(ID >= .8 && pD <= fC, ID >= .5 && pD <= bC)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var wC = cD(1284);

    function SC(DD, CD) {
      const cD = (0, ID.useRef)(null),
        pD = (0, ID.useRef)(CD);
      return pD.current = CD, (0, ID.useEffect)((() => {
        if (!DD) return;
        const {
          create: CD,
          elementRef: ID,
          ringRef: iD,
          classPrefix: fD,
          keptBehindMovementPanels: bD,
          resizeEnds: QD
        } = pD.current, wD = {
          charging: `${fD}Charging`,
          armed: `${fD}Armed`,
          ready: `${fD}Ready`,
          locked: `${fD}Locked`
        };
        let SD = null;
        const BD = CD({
          onPhase: (DD, CD) => {
            const cD = ID.current;
            if (null !== cD) {
              for (const [CD, ID] of Object.entries(wD)) cD.classList.toggle(ID, CD === DD);
              if ("charging" === DD) SD = iD.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === DD) {
                var fD;
                null === (fD = SD) || void 0 === fD || fD.cancel(), SD = null
              }
              var bD, QD;
              if ("armed" === DD && "charging" === CD && pD.current.onArmed(), "ready" === DD && pC.d.play("lockReady"), "locked" === DD) pC.d.play("lockLocked"), null === (bD = (QD = pD.current).onLocked) || void 0 === bD || bD.call(QD);
              "locked" === CD && pD.current.onUnlocked()
            }
          }
        });
        cD.current = BD;
        const yD = () => {
            BD.suspend()
          },
          MD = () => {
            "hidden" === document.visibilityState && yD()
          },
          tD = () => {
            QD ? BD.suspend() : BD.suspendArming()
          },
          ZD = (0, wC.g)((DD => {
            let {
              keepsMovement: CD
            } = DD;
            CD && bD ? BD.suspendArming() : yD()
          }));
        return document.addEventListener("visibilitychange", MD), window.addEventListener("blur", yD), window.addEventListener("resize", tD), () => {
          ZD(), document.removeEventListener("visibilitychange", MD), window.removeEventListener("blur", yD), window.removeEventListener("resize", tD), BD.cancel(), cD.current = null
        }
      }), [DD]), (0, OD.c)("localPlayerAliveSet", (() => {
        var DD;
        null === (DD = cD.current) || void 0 === DD || DD.suspend()
      })), cD
    }
    var BC = cD(2372),
      yC = cD(2391),
      MC = cD(1108),
      tC = cD(3200),
      ZC = cD(2398);

    function oC(DD, CD, cD) {
      const ID = function(DD, CD, cD) {
        const ID = cD.map((cD => ({
            left: Math.max(0, cD.left),
            top: Math.max(0, cD.top),
            right: Math.min(DD, cD.right),
            bottom: Math.min(CD, cD.bottom)
          }))).filter((DD => DD.right > DD.left && DD.bottom > DD.top)),
          pD = [...new Set([0, CD, ...ID.flatMap((DD => [DD.top, DD.bottom]))])].sort(((DD, CD) => DD - CD)),
          iD = [];
        for (let fD = 0; fD < pD.length - 1; fD++) {
          const CD = pD[fD],
            cD = pD[fD + 1],
            bD = ID.filter((DD => DD.top <= CD && DD.bottom >= cD)).map((DD => [DD.left, DD.right])).sort(((DD, CD) => DD[0] - CD[0]));
          let QD = 0;
          for (const [DD, ID] of bD) DD > QD && iD.push({
            left: QD,
            top: CD,
            right: DD,
            bottom: cD
          }), QD = Math.max(QD, ID);
          QD < DD && iD.push({
            left: QD,
            top: CD,
            right: DD,
            bottom: cD
          })
        }
        return iD
      }(DD, CD, cD);
      if (0 === ID.length) return 'path("M0 0Z")';
      if (1 === ID.length && 0 === ID[0].left && 0 === ID[0].top && ID[0].right === DD && ID[0].bottom === CD) return "";
      const pD = DD => Math.round(10 * DD) / 10;
      return `path("${ID.map((DD=>`M${pD(DD.left)} ${pD(DD.top)}H${pD(DD.right)}V${pD(DD.bottom)}H${pD(DD.left)}Z`)).join("")}")`
    }

    function vC(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const pD = [],
        iD = 2 * cD / ID;
      for (let fD = 0; fD < ID; fD++) {
        const ID = CD - cD + fD * iD,
          bD = ID + iD,
          QD = Math.min(Math.max(CD, ID), bD) - CD,
          wD = Math.sqrt(Math.max(0, cD * cD - QD * QD));
        pD.push({
          left: DD - wD,
          top: ID,
          right: DD + wD,
          bottom: bD
        })
      }
      return pD
    }
    var NC = cD(8591),
      gC = cD(35970);

    function XC(DD) {
      const CD = DD.getBoundingClientRect(),
        cD = {
          left: CD.left,
          top: CD.top,
          right: CD.right,
          bottom: CD.bottom
        },
        ID = (0, rD.e)(DD);
      if (ID.whole) return [cD];
      const pD = function(DD) {
          const CD = DD.right - DD.left,
            cD = DD.bottom - DD.top,
            ID = Math.min(CD, cD) / 2,
            pD = (DD.left + DD.right) / 2,
            iD = (DD.top + DD.bottom) / 2;
          return CD >= cD ? [{
            left: DD.left + ID,
            top: DD.top,
            right: DD.right - ID,
            bottom: DD.bottom
          }, ...vC(DD.left + ID, iD, ID), ...vC(DD.right - ID, iD, ID)] : [{
            left: DD.left,
            top: DD.top + ID,
            right: DD.right,
            bottom: DD.bottom - ID
          }, ...vC(pD, DD.top + ID, ID), ...vC(pD, DD.bottom - ID, ID)]
        }(cD),
        iD = ID.keyBox;
      if (iD) {
        const DD = (cD.left + cD.right) / 2,
          CD = (cD.top + cD.bottom) / 2;
        pD.push({
          left: DD - iD.width / 2,
          top: CD - iD.height / 2,
          right: DD + iD.width / 2,
          bottom: CD + iD.height / 2
        })
      }
      return pD
    }

    function mC(DD) {
      const CD = DD.getBoundingClientRect();
      return 0 === CD.width && 0 === CD.height || "visible" !== getComputedStyle(DD).visibility ? [] : [(0, NC.q)(CD, 44)]
    }

    function nC(DD, CD) {
      (0, ID.useEffect)((() => {
        const cD = DD.current;
        if (!CD || !cD) return;
        const ID = () => {
          const DD = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            CD = DD.find((DD => DD.classList.contains("TouchInteractHit")));
          CD !== pD && (pD && iD.unobserve(pD), pD = CD, CD && iD.observe(CD));
          const ID = Array.from(document.querySelectorAll(ZC.d)),
            fD = [...DD.flatMap((DD => XC(DD))), ...ID.flatMap(mC)],
            bD = function(DD, CD) {
              const cD = CD.map((CD => ({
                left: CD.left - DD.left,
                top: CD.top - DD.top,
                right: CD.right - DD.left,
                bottom: CD.bottom - DD.top
              })));
              return oC(Math.ceil(DD.width), Math.ceil(DD.height), cD)
            }(cD.getBoundingClientRect(), fD);
          cD.style.clipPath !== bD && (cD.style.clipPath = bD)
        };
        let pD;
        const iD = new ResizeObserver((() => {
          ID()
        }));
        ID(), iD.observe(cD);
        const fD = cD.closest(".InGameUi"),
          bD = new MutationObserver(ID);
        fD && bD.observe(fD, {
          attributes: !0,
          attributeFilter: ["class", gC.f]
        });
        const QD = [(0, XD.k)(tC.e, ID), (0, XD.k)(ZC.z, ID), (0, XD.k)(ZC.g, ID)];
        return () => {
          iD.disconnect(), bD.disconnect();
          for (const DD of QD) DD();
          cD.style.clipPath = ""
        }
      }), [DD, CD])
    }
    var OC = cD(4201);

    function PC(DD) {
      var CD;
      let {
        onMove: cD,
        mode: pD,
        speedCurve: iD,
        autorun: fD = !1
      } = DD;
      const bD = (0, ID.useRef)(null),
        QD = (0, ID.useRef)(null),
        SD = (0, ID.useRef)(null),
        BD = (0, ID.useRef)(null),
        MD = (0, ID.useRef)(null),
        tD = (0, ID.useRef)(null),
        ZD = (0, ID.useRef)(null),
        oD = (0, ID.useRef)(null),
        vD = (0, ID.useRef)(null),
        ND = (0, ID.useRef)(!1),
        gD = (0, ID.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: XD
        } = (0, JD.F)(),
        mD = (0, OC.n)(pD),
        nD = (0, PD.o)(["notchSize"]).notchSize,
        OD = nD.left,
        HD = (0, ID.useRef)(16),
        UD = (0, yC.d)(),
        [xD, qD, KD] = "pinned" === pD ? BC.m : null !== (CD = UD.hudElements.joystick) && void 0 !== CD ? CD : BC.m,
        aD = "pinned" === pD ? null : UD.hudSafe,
        VD = Math.max(OC.i, OC.m * KD);
      nC(QD, "pinned" !== pD);
      const zD = function(DD, CD, cD, pD, iD) {
        const fD = (0, ID.useRef)(null),
          bD = () => {
            clearInterval(fD.current), fD.current = null
          },
          QD = SC(DD, {
            create: DD => new QC(DD),
            elementRef: CD,
            ringRef: cD,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: iD,
            onLocked: () => {
              fD.current = setInterval((() => {
                yD.gameBridge.lookup("dropAhead", null) && (pC.d.play("autorunLedgeStop"), QD.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              bD(), pD()
            }
          });
        return (0, ID.useEffect)((() => bD), []), QD
      }(fD, SD, ZD, (() => {
        dD(), kD()
      }), (() => {
        jD(), null === vD.current && zD.current.suspend()
      }));

      function jD() {
        const DD = SD.current.getBoundingClientRect();
        vD.current = CC(oD.current, DD, 80, cC(`.TouchInventoryKey, ${ZC.d}`)), ND.current = null !== vD.current && IC(gD.current, vD.current)
      }

      function lD() {
        const {
          innerWidth: DD,
          innerHeight: CD
        } = window, cD = (0, ZC.U)(aD, DD, CD, (0, ZC.Y)(nD, DD, CD), HD.current);
        return {
          left: cD[3],
          bottom: cD[2]
        }
      }

      function TD(DD) {
        SD.current.style.transform = `translate(${DD.x-VD}px, ${DD.y-VD}px)`
      }

      function GD(DD) {
        const CD = SD.current;
        CD.classList.add("Resting"), CD.classList.toggle("Returning", DD), CD.style.display = "fixed_hidden" === pD ? "none" : "block", TD(function() {
          const {
            innerWidth: DD,
            innerHeight: CD
          } = window, cD = lD(), ID = OD * DD / 100 + cD.left, pD = bD.current.offsetHeight || CD, iD = ((0, MC.e)(DD, CD) ? OC.c : OC.b) + cD.bottom;
          return {
            x: Math.min(DD - VD, Math.max(VD, ID + OC.e + xD * DD)),
            y: Math.min(pD - VD, Math.max(VD, pD - iD + qD * pD))
          }
        }())
      }
      const RD = (0, ID.useRef)({
        restFixed: GD,
        release: YD
      });

      function kD() {
        mD ? GD("fixed_shown" === pD) : "floating" === pD && (SD.current.style.display = "none"), cD({
          x: 0,
          y: 0
        })
      }

      function dD() {
        tD.current = null, MD.current = null, BD.current.style.transform = "translate(-50%, -50%)"
      }

      function YD(DD) {
        dD();
        const CD = zD.current;
        DD && null !== CD && void 0 !== CD && CD.lift() ? cD({
          x: 0,
          y: -CD.lockedSpeed
        }) : (null === CD || void 0 === CD || CD.cancel(), kD())
      }

      function WD(DD) {
        const CD = Array.from(DD.touches).find((DD => DD.identifier === tD.current));
        if (null === MD.current || null === tD.current || (0, DC.C)(CD)) return;
        const ID = zD.current,
          pD = CD.clientX - MD.current.x,
          fD = CD.clientY - MD.current.y,
          bD = Math.hypot(pD, fD),
          QD = bD > 0 ? Math.min(1, VD / bD) : 0,
          wD = pD * QD,
          SD = fD * QD,
          yD = Math.hypot(wD, SD) / VD,
          ZD = iD && yD > 0 ? iD(yD) / yD : 1;
        BD.current.style.transform = `translate(calc(-50% + ${wD}px), calc(-50% + ${SD}px))`;
        const oD = wD / VD,
          XD = SD / VD;
        if (cD({
            x: oD * ZD,
            y: XD * ZD
          }), null !== ID && null !== vD.current) {
          ID.move(oD, XD, yD * ZD), gD.current = {
            clientX: CD.clientX,
            clientY: CD.clientY
          };
          const DD = ND.current;
          ND.current = IC(CD, vD.current), ND.current !== DD && ID.target(ND.current)
        }
      }
      return RD.current = {
        restFixed: GD,
        release: YD
      }, (0, ID.useLayoutEffect)((() => {
        if (!mD) return;
        const DD = () => {
          HD.current = (0, ZC.cb)(document)
        };
        DD(), null === tD.current && RD.current.restFixed(!1);
        const CD = new ResizeObserver((() => {
          DD(), null === tD.current && RD.current.restFixed(!1)
        }));
        CD.observe(bD.current);
        const cD = SD.current;
        return () => {
          CD.disconnect(), cD.classList.remove("Resting", "Returning"), null === tD.current && (cD.style.display = "", cD.style.transform = "")
        }
      }), [mD, pD, nD, xD, qD, VD, aD]), (0, ID.useEffect)((() => {
        const DD = DD => {
            const CD = tD.current;
            null === CD || Array.from(DD.touches).some((DD => DD.identifier === CD)) || RD.current.release("touchend" === DD.type && Array.from(DD.changedTouches).some((DD => DD.identifier === CD)))
          },
          CD = () => {
            null !== tD.current && RD.current.release(!1)
          },
          cD = () => {
            "hidden" === document.visibilityState && CD()
          };
        document.addEventListener("touchstart", DD, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", DD, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", DD, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", DD, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", CD), document.addEventListener("visibilitychange", cD);
        const ID = (0, wC.g)((DD => {
          let {
            keepsMovement: cD
          } = DD;
          cD || CD()
        }));
        return () => {
          ID(), document.removeEventListener("touchstart", DD, {
            capture: !0
          }), document.removeEventListener("touchmove", DD, {
            capture: !0
          }), document.removeEventListener("touchend", DD, {
            capture: !0
          }), document.removeEventListener("touchcancel", DD, {
            capture: !0
          }), window.removeEventListener("blur", CD), document.removeEventListener("visibilitychange", cD)
        }
      }), []), (0, ID.useEffect)((() => {
        const DD = bD.current,
          CD = DD => {
            DD.preventDefault()
          };
        return DD.addEventListener("touchstart", CD, {
          passive: !1
        }), () => {
          DD.removeEventListener("touchstart", CD)
        }
      }), []), (0, wD.jsxs)("div", {
        ref: bD,
        className: "JoystickZone",
        style: mD && (xD > 0 || KD > 1 || lD().left > 0) ? {
          width: `max(35vw, calc(${OD+100*xD}vw + ${lD().left+OC.e+VD+24}px))`
        } : void 0,
        onTouchStart: function(DD) {
          var CD;
          if (null !== tD.current) return;
          const cD = Array.from(DD.changedTouches).find((DD => {
            var CD;
            return null === (CD = bD.current) || void 0 === CD ? void 0 : CD.contains(DD.target)
          }));
          if (cD) {
            if (null === (CD = zD.current) || void 0 === CD || CD.startTouch(), tD.current = cD.identifier, "pinned" === pD) {
              const DD = SD.current.getBoundingClientRect();
              MD.current = {
                x: DD.left + DD.width / 2,
                y: DD.top + DD.height / 2
              }
            } else {
              MD.current = {
                x: cD.clientX,
                y: cD.clientY
              }, SD.current.classList.remove("Resting", "Returning"), SD.current.style.display = "block";
              const DD = bD.current.getBoundingClientRect();
              TD({
                x: cD.clientX - DD.left,
                y: cD.clientY - DD.top
              }), fD && (gD.current = {
                clientX: cD.clientX,
                clientY: cD.clientY
              }, jD())
            }
            WD(DD)
          }
        },
        onTouchMove: WD,
        children: [(0, wD.jsx)("div", {
          ref: QD,
          className: "JoystickTouchLayer"
        }), (0, wD.jsxs)("div", {
          ref: SD,
          className: "Joystick",
          style: {
            width: 2 * VD + "px",
            height: 2 * VD + "px",
            transform: "pinned" === pD ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, wD.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * VD + "px",
              height: 2 * VD + "px"
            }
          }), fD && (0, wD.jsxs)(wD.Fragment, {
            children: [(0, wD.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, wD.jsx)("circle", {
                ref: ZD,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, wD.jsxs)("div", {
              ref: oD,
              className: "AutorunTarget",
              children: [(0, wD.jsx)(LD.c, {
                name: "lock"
              }), XD("settingsMenu:autoRun")]
            })]
          }), (0, wD.jsx)("div", {
            ref: BD,
            className: "JoystickKnob",
            style: {
              width: `${VD}px`,
              height: `${VD}px`
            }
          })]
        })]
      })
    }
    const HC = .35,
      UC = .22;

    function xC(DD) {
      if (DD < .1) return 0;
      if (DD < HC) {
        const CD = (DD - .1) / (HC - .1);
        return .06 + .16 * CD * CD
      }
      return DD < .85 ? UC + .78 * (DD - HC) / .5 : 1
    }

    function qC(DD, CD) {
      const cD = (0, ID.useRef)(null);
      return (0, ID.useLayoutEffect)((() => (rD.h.set(DD, cD.current, CD), () => {
        rD.h.set(DD, null)
      })), [DD, CD]), cD
    }
    const JC = "C",
      KC = "J",
      aC = "U",
      VC = "P",
      zC = "A",
      jC = "G",
      lC = "X",
      LC = (0, ID.forwardRef)((function(DD, CD) {
        let {
          slot: cD,
          canvasZone: pD = !1,
          lit: fD = !1,
          label: bD,
          className: QD,
          children: SD,
          ...BD
        } = DD;
        return (0, ID.useEffect)((() => (XD.i.Uo(tC.e), () => {
          XD.i.Uo(tC.e)
        })), []), (0, wD.jsx)("div", {
          ref: CD,
          className: iD()("TouchKeyHit", `TouchSlot${cD}`, QD, {
            CanvasZone: pD
          }),
          ...BD,
          children: (0, wD.jsxs)("div", {
            className: iD()("TouchKey", {
              Lit: fD,
              Labelled: void 0 !== bD
            }),
            children: [SD, void 0 !== bD && (0, wD.jsx)("span", {
              className: "TouchKeyLabel",
              children: bD
            })]
          })
        })
      }));

    function TC(DD, CD) {
      (0, ID.useEffect)((() => () => {
        CD.current && (CD.current = !1, (0, hD.x)(DD, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function GC(DD, CD) {
      const cD = CD ? [lC] : [VC, lC];
      return DD.filter((DD => null !== DD)).slice(0, cD.length).map(((DD, CD) => {
        const pD = cD[CD];
        return (0, wD.jsx)(ID.Fragment, {
          children: DD.render(pD)
        }, `${DD.id}:${pD}`)
      }))
    }
    var RC = cD(35981);
    class kC extends iC {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(DD, CD) {
        this.start = {
          x: DD,
          y: CD
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(DD, CD, cD) {
        const ID = Math.hypot(DD - this.start.x, CD - this.start.y) <= 12;
        this.moved ||= !ID;
        const pD = null !== cD && CD < this.start.y - 12 && IC({
          clientX: DD,
          clientY: CD
        }, cD);
        this.hold(!this.moved, ID || pD)
      }
    }
    const dC = new Set;

    function YC(DD) {
      const CD = new Set(Array.from(DD.touches, (DD => DD.identifier)));
      for (const cD of dC) {
        for (const DD of cD.ids) CD.has(DD) || cD.ids.delete(DD);
        if (0 === cD.ids.size) {
          dC.delete(cD);
          cD.pressesOnPointerDown && "touchstart" === DD.type && Array.from(DD.changedTouches).some((DD => DD.target instanceof Node && cD.element.contains(DD.target))) || cD.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const Xf of ["touchstart", "touchmove"]) window.addEventListener(Xf, YC, {
        capture: !0,
        passive: !0
      });

    function WC(DD) {
      let {
        pressesOnPointerDown: CD = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cD = (0, ID.useRef)(DD);
      cD.current = DD;
      const pD = (0, ID.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: CD,
        release: () => {
          cD.current()
        }
      });
      (0, ID.useEffect)((() => {
        const DD = pD.current;
        return () => {
          dC.delete(DD), DD.ids.clear()
        }
      }), []);
      const iD = DD => {
        const CD = pD.current;
        for (const cD of Array.from(DD.changedTouches)) CD.ids.delete(cD.identifier);
        0 === CD.ids.size && dC.delete(CD)
      };
      return {
        onTouchStart: DD => {
          const CD = pD.current;
          CD.element = DD.currentTarget;
          for (const cD of Array.from(DD.changedTouches)) cD.target instanceof Node && DD.currentTarget.contains(cD.target) && CD.ids.add(cD.identifier);
          CD.ids.size > 0 && dC.add(CD)
        },
        onTouchEnd: iD,
        onTouchCancel: iD
      }
    }

    function sC(DD, CD) {
      return null === CD ? null : (0, RC.e)(DD.nativeEvent.changedTouches, CD.id)
    }

    function EC(DD) {
      let {
        lockable: CD
      } = DD;
      const {
        t: cD
      } = (0, JD.F)(), pD = "round" === (0, BC.W)().hudShape, iD = (0, ID.useRef)(!1);
      TC(uD.A.Jump, iD);
      const fD = (0, ID.useRef)(null),
        bD = (0, ID.useRef)(null),
        QD = (0, ID.useRef)(null),
        SD = (0, ID.useRef)(null),
        BD = (0, ID.useRef)(null),
        yD = (0, ID.useRef)(null),
        MD = (0, ID.useRef)(!1),
        tD = (DD, CD) => {
          iD.current = DD, (0, hD.x)(uD.A.Jump, DD, CD)
        },
        ZD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          iD.current && (fD.current && (0, FD.i)(fD.current, !1), tD(!1, DD))
        },
        oD = SC(CD, {
          create: DD => new kC(DD),
          elementRef: fD,
          ringRef: bD,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const DD = fD.current.getBoundingClientRect(),
              CD = QD.current.parentElement,
              cD = CD.getBoundingClientRect(),
              ID = {
                left: cD.left + CD.clientLeft,
                top: cD.top + CD.clientTop,
                right: cD.right - CD.clientLeft,
                bottom: cD.bottom - CD.clientTop
              };
            if (BD.current = CC(QD.current, ID, 16, cC(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${ZC.d}`)), null === BD.current) return void oD.current.suspend();
            const pD = BD.current;
            yD.current = {
              left: Math.min(DD.left, pD.left),
              top: pD.top,
              right: Math.max(DD.right, pD.right),
              bottom: DD.bottom
            }, MD.current = null !== SD.current && IC({
              clientX: SD.current.x,
              clientY: SD.current.y
            }, pD)
          },
          onUnlocked: () => {
            null === SD.current && ZD()
          }
        }),
        vD = DD => {
          var CD;
          SD.current = null, null === (CD = oD.current) || void 0 === CD || CD.cancel(), ZD(DD)
        },
        ND = WC((() => {
          vD()
        })),
        gD = DD => {
          const CD = SD.current;
          var cD;
          return null === CD ? null !== (cD = oD.current) && void 0 !== cD && cD.locked ? null : "lifted" : sC(DD, CD) ? "lifted" : (0, RC.h)(DD.nativeEvent.touches, CD.id) ? null : "dropped"
        };
      return (0, wD.jsxs)(LC, {
        ref: fD,
        slot: KC,
        className: "JumpKey",
        onTouchStart: DD => {
          ND.onTouchStart(DD), (0, FD.i)(DD.currentTarget, !0), null === SD.current || (0, RC.h)(DD.nativeEvent.touches, SD.current.id) || vD();
          const CD = DD.changedTouches[0];
          var cD;
          null === SD.current && CD && (SD.current = {
            id: CD.identifier,
            x: CD.clientX,
            y: CD.clientY
          }, null === (cD = oD.current) || void 0 === cD || cD.press(CD.clientX, CD.clientY));
          iD.current || tD(!0, DD.nativeEvent)
        },
        onTouchMove: DD => {
          const CD = SD.current,
            cD = sC(DD, CD);
          if (!cD) return;
          const ID = oD.current;
          if (null === ID || void 0 === ID || ID.move(cD.clientX, cD.clientY, yD.current), null !== ID && void 0 !== ID && ID.offered) {
            const DD = IC(cD, BD.current);
            DD !== MD.current && (MD.current = DD, ID.target(DD))
          }
          CD.x = cD.clientX, CD.y = cD.clientY
        },
        onTouchEnd: DD => {
          var CD;
          ND.onTouchEnd(DD);
          const cD = gD(DD);
          null !== cD && ("dropped" !== cD ? (SD.current = null, null !== (CD = oD.current) && void 0 !== CD && CD.lift() ? (0, FD.i)(DD.currentTarget, !1) : ZD(DD.nativeEvent)) : vD(DD.nativeEvent))
        },
        onTouchCancel: DD => {
          ND.onTouchCancel(DD), null !== gD(DD) && vD(DD.nativeEvent)
        },
        children: [(0, wD.jsx)(LD.c, {
          name: "arrow-up-from-line"
        }), CD && (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, wD.jsx)(LD.c, {
              name: "lock"
            })
          }), (0, wD.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, wD.jsx)("rect", {
              ref: bD,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: pD ? 48 : 0,
              pathLength: 1
            })
          }), (0, wD.jsxs)("div", {
            ref: QD,
            className: "JumpLockTarget",
            children: [(0, wD.jsx)(LD.c, {
              name: "lock"
            }), cD("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const eC = new WeakMap;
    class uC {
      constructor(DD) {
        this.zones = DD, this.followed = new Map, this.onStart = DD => {
          if (this.releaseMissing(DD.touches), DD.target instanceof HTMLCanvasElement)
            for (let cD = 0; cD < DD.changedTouches.length; cD++) {
              var CD;
              const {
                identifier: ID,
                clientX: pD,
                clientY: iD
              } = DD.changedTouches[cD];
              this.release(ID);
              const fD = this.zones.hitZone(pD, iD);
              if (!fD) continue;
              const {
                key: bD
              } = fD;
              null === (CD = eC.get(bD)) || void 0 === CD || CD.cancel();
              const QD = {
                hit: fD.element,
                key: bD,
                x: fD.x,
                y: fD.y,
                reach: .6 * fD.radius
              };
              this.followed.set(ID, QD), (0, FD.i)(fD.element, !0), hC(QD, pD, iD)
            }
        }, this.onMove = DD => {
          this.releaseMissing(DD.touches);
          for (let CD = 0; CD < DD.changedTouches.length; CD++) {
            const {
              identifier: cD,
              clientX: ID,
              clientY: pD
            } = DD.changedTouches[CD], iD = this.followed.get(cD);
            iD && hC(iD, ID, pD)
          }
        }, this.onEnd = DD => {
          for (let CD = 0; CD < DD.changedTouches.length; CD++) this.release(DD.changedTouches[CD].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const DD = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, DD), document.addEventListener("touchmove", this.onMove, DD), document.addEventListener("touchend", this.onEnd, DD), document.addEventListener("touchcancel", this.onEnd, DD), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(DD) {
        for (const CD of [...this.followed.keys()])(0, RC.h)(DD, CD) || this.release(CD)
      }
      releaseAll() {
        for (const DD of [...this.followed.keys()]) this.release(DD)
      }
      release(DD) {
        const CD = this.followed.get(DD);
        if (!CD) return;
        this.followed.delete(DD);
        for (const pD of this.followed.values())
          if (pD.key === CD.key) return;
        (0, FD.i)(CD.hit, !1);
        const {
          key: cD
        } = CD, ID = cD.style.translate;
        cD.style.translate = "", ID && eC.set(cD, cD.animate({
          translate: [ID, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function hC(DD, CD, cD) {
      let {
        key: ID,
        x: pD,
        y: iD,
        reach: fD
      } = DD;
      const bD = CD - pD,
        QD = cD - iD,
        wD = Math.min(1, fD / (Math.hypot(bD, QD) || 1));
      ID.style.translate = `${bD*wD}px ${QD*wD}px`
    }
    const rC = () => {
      const DD = (0, eD.o)(),
        CD = (0, UD.p)();
      return DD || CD
    };

    function AC(DD) {
      (0, rD.l)(DD.x, DD.y)
    }
    const FC = (0, ID.memo)((function() {
        const DD = rC(),
          {
            joystickMode: CD,
            touchSpeedCurve: cD,
            autorun: pD
          } = (0, PD.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, ID.useEffect)((() => ((0, AD.k)(uD.C.TouchControls, uD.C.TouchControls), () => {
          (0, AD.k)(uD.C.TouchControls, 0), (0, rD.l)(0, 0)
        })), []), (0, wD.jsx)("div", {
          className: iD()("TouchMovementWrapper", {
            Hidden: DD
          }),
          "data-camera-keeper": "",
          children: (0, wD.jsx)(PC, {
            onMove: AC,
            mode: CD,
            speedCurve: cD ? xC : void 0,
            autorun: pD
          })
        })
      })),
      Dc = (0, ID.memo)((function() {
        const DD = rC(),
          {
            clientEscMenuOptions: CD
          } = (0, PD.o)(["clientEscMenuOptions"]),
          cD = CD.touchActionButtons;
        return (0, ID.useEffect)((() => new uC(rD.h).start()), []), (0, ID.useEffect)((() => {
          XD.i.Uo(tC.e)
        }), [DD]), (0, wD.jsxs)("div", {
          className: iD()("TouchComponentsButtons", {
            Hidden: DD
          }),
          "data-camera-keeper": "",
          children: [(0, wD.jsx)(EC, {
            lockable: CD.jumpLock && !DD
          }), (0, wD.jsx)(yc, {
            hidden: DD,
            actionButtons: cD
          }), (0, wD.jsx)(cc, {})]
        })
      }));

    function Cc(DD) {
      const CD = CD => cD => {
        (0, FD.i)(cD.currentTarget, CD), DD(CD, cD.nativeEvent)
      };
      return {
        onPointerDown: CD(!0),
        onPointerUp: CD(!1),
        onPointerCancel: CD(!1)
      }
    }

    function cc() {
      const DD = (0, gD.h)("canCrouch"),
        CD = (0, OD.h)("crouching"),
        cD = (0, ID.useRef)(!1);
      TC(uD.A.Crouch, cD);
      const pD = (DD, CD) => {
          cD.current = DD, (0, hD.x)(uD.A.Crouch, DD, CD)
        },
        iD = (0, ID.useRef)(null),
        fD = () => {
          cD.current && (iD.current && (0, FD.i)(iD.current, !1), pD(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        bD = WC(fD);
      return (0, ID.useEffect)((() => {
        !1 === DD && fD()
      }), [DD]), !1 === DD ? null : (0, wD.jsx)(LC, {
        ref: iD,
        slot: JC,
        className: "CrouchKey",
        lit: CD,
        ...bD,
        ...Cc(pD),
        children: (0, wD.jsx)(LD.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Ic = [{
        icon: "arrows-rotate"
      }],
      pc = [{
        icon: "Arrow"
      }],
      ic = [{
        icon: "crosshairs"
      }],
      fc = [{
        icon: "swords"
      }],
      bc = [{
        icon: "hand-back-point-up"
      }],
      Qc = [{
        icon: "Firecracker"
      }];

    function wc(DD, CD, cD, ID) {
      return {
        id: JSON.stringify(CD),
        render: pD => (0, wD.jsx)(Mc, {
          code: DD,
          slot: pD,
          icon: CD,
          label: ID,
          hidden: cD
        })
      }
    }

    function Sc(DD, CD) {
      return {
        id: "fly",
        render: cD => (0, wD.jsx)(Bc, {
          slot: cD,
          flying: DD,
          label: CD
        })
      }
    }

    function Bc(DD) {
      let {
        slot: CD,
        flying: cD,
        label: ID
      } = DD;
      return (0, wD.jsx)(LC, {
        slot: CD,
        className: "FlyKey",
        lit: cD,
        label: ID,
        ...Cc(((DD, CD) => {
          (0, hD.x)(uD.A.Fly, DD, CD)
        })),
        children: (0, wD.jsx)(LD.c, {
          name: "feather-pointed"
        })
      })
    }

    function yc(DD) {
      var CD, cD;
      let {
        hidden: ID,
        actionButtons: pD
      } = DD;
      const {
        t: iD
      } = (0, JD.F)(), {
        gun: fD,
        aimable: bD,
        chargeName: QD
      } = (0, OD.h)("heldItemAim"), SD = (0, OD.h)("gliderBoostFuel"), {
        canFly: BD,
        flying: yD
      } = (0, OD.h)("flight"), MD = (0, gD.h)("touchscreenActionButton"), tD = fD ? Ic : MD, ZD = bD ? {
        icon: pc,
        label: iD("touchKeys:aim")
      } : null, oD = null !== QD ? {
        icon: [{
          icon: QD
        }]
      } : null, vD = null !== ZD && void 0 !== ZD ? ZD : oD, ND = null !== (CD = null === (cD = fD ? ZD : null !== oD && void 0 !== oD ? oD : ZD) || void 0 === cD ? void 0 : cD.icon) && void 0 !== CD ? CD : bc, XD = [!pD && vD ? wc(rD.d.Action2, vD.icon, ID, vD.label) : null, fD ? wc(rD.d.Action3, ic, ID, iD("touchKeys:scope")) : null, BD ? Sc(yD, iD("touchKeys:fly")) : null];
      return (0, wD.jsxs)(wD.Fragment, {
        children: [tD && (0, wD.jsx)(Mc, {
          code: rD.d.Action1,
          slot: jC,
          icon: tD,
          label: fD ? iD("touchKeys:reload") : void 0,
          hidden: ID
        }, JSON.stringify(tD)), pD && (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)(Mc, {
            code: rD.d.Attack,
            slot: zC,
            icon: fc,
            name: iD("touchKeys:attack"),
            hidden: ID
          }), (0, wD.jsx)(Mc, {
            code: rD.d.Use,
            slot: aC,
            icon: ND,
            name: iD("touchKeys:use"),
            hidden: ID
          })]
        }), GC(XD, pD), SD > 0 && (0, wD.jsx)(Mc, {
          code: rD.d.Boost,
          slot: lC,
          icon: Qc,
          label: iD("touchKeys:boost", {
            fuel: SD > 99 ? "99+" : SD
          }),
          hidden: ID
        })]
      })
    }

    function Mc(DD) {
      let {
        code: CD,
        slot: cD,
        icon: ID,
        label: pD,
        name: iD,
        hidden: fD
      } = DD;
      const bD = qC(CD, fD);
      return (0, wD.jsx)(LC, {
        ref: bD,
        slot: cD,
        className: "TouchActionKey",
        canvasZone: !0,
        label: pD,
        role: void 0 !== iD ? "img" : void 0,
        "aria-label": iD,
        children: (0, wD.jsx)(QD.c, {
          text: ID
        })
      })
    }
    var tc = cD(4102),
      Zc = cD(2790),
      oc = cD(656);
    const vc = (0, ID.memo)((function() {
      (0, vD.b)();
      const DD = (0, ID.useRef)([]),
        CD = (0, Zc.b)(),
        cD = (0, ID.useRef)(0),
        pD = (0, ID.useRef)(0),
        iD = (0, ID.useRef)([]),
        fD = (0, ID.useRef)(null);

      function SD(cD, ID, pD, iD) {
        const fD = (0, oc.b)(),
          bD = setTimeout((() => {
            DD.current = DD.current.filter((DD => DD.id !== fD)), CD()
          }), iD);
        yD.gameBridge.send("recordFlyingMiddleText", {
          content: cD,
          zi: ID,
          angle: pD,
          ji: iD
        }), DD.current.push({
          id: fD,
          content: cD,
          zi: ID,
          ji: iD,
          removeTimeout: bD,
          angle: pD
        }), CD()
      }
      return (0, OD.c)("shotDamageToShow", (DD => {
        let {
          damage: CD,
          wasCrit: cD,
          distance: ID
        } = DD;
        const pD = -Math.PI / 4 + Math.random() * Math.PI / 2;
        SD(cD ? [{
          str: CD.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [CD.toString()], ID, pD, 1e3)
      })), (0, bD.f)("flyingMiddleMessage", (DD => {
        let {
          content: CD,
          zi: ID,
          ji: bD
        } = DD;
        iD.current.push({
          content: CD,
          zi: ID,
          ji: bD
        });
        const QD = () => {
          const {
            content: DD,
            zi: CD,
            ji: ID
          } = iD.current.shift(), fD = function(DD) {
            const CD = -Math.PI / 4,
              cD = Math.PI / 4,
              ID = cD - CD,
              pD = (1 + Math.sqrt(5)) / 2,
              iD = 2 * Math.PI / (pD * pD);
            let fD = DD + iD;
            for (; fD > cD;) fD -= ID;
            for (; fD < CD;) fD += ID;
            const bD = Math.PI / 6;
            if (Math.abs(fD - DD) < bD) {
              fD = DD + (Math.sign(fD - DD) || 1) * bD, fD > cD && (fD = DD - bD), fD < CD && (fD = DD + bD)
            }
            return fD
          }(pD.current);
          pD.current = fD, cD.current = Date.now(), SD(DD, CD, fD, ID)
        };
        if (!fD.current) {
          const DD = () => {
            iD.current.length > 0 && QD(), 0 === iD.current.length && (clearInterval(fD.current), fD.current = null)
          };
          fD.current = setInterval(DD, 200), cD.current + 200 < Date.now() && DD()
        }
        for (; iD.current.length > 4;) QD()
      })), (0, bD.f)("forceFlyingMiddleMessage", (DD => {
        let {
          content: CD,
          zi: cD,
          angle: ID,
          ji: pD
        } = DD;
        SD(CD, cD, ID, pD)
      })), (0, ID.useEffect)((() => () => {
        clearInterval(fD.current), fD.current = null;
        for (const CD of DD.current) clearTimeout(CD.removeTimeout)
      }), []), (0, wD.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: DD.current.map((DD => {
          const {
            id: CD,
            content: cD,
            zi: ID,
            ji: pD,
            angle: iD
          } = DD;
          return DD.pos || (DD.pos = function(DD, CD) {
            const cD = 50 / (DD ** .7 * .35);
            return {
              x: cD * Math.sin(CD),
              y: -cD * Math.cos(CD)
            }
          }(ID, iD)), (0, wD.jsx)(Nc, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: pD,
            enterActiveStyle: {
              transform: `translate(${DD.pos.x}vw, ${DD.pos.y}vh)`,
              transition: `transform ${pD}ms ease-out`
            },
            children: (0, wD.jsx)("div", {
              children: (0, wD.jsx)(QD.c, {
                text: cD
              })
            })
          }, CD)
        }))
      })
    }));

    function Nc(DD) {
      let {
        children: CD,
        className: cD,
        classNames: pD,
        timeout: iD,
        enterActiveStyle: fD
      } = DD;
      const [bD, QD] = (0, ID.useState)(!1), [SD, BD] = (0, ID.useState)(!1), yD = (0, ID.useRef)(null);
      return (0, ID.useEffect)((() => {
        QD(!0)
      }), []), (0, wD.jsx)(tc.e, {
        className: cD,
        classNames: pD || cD,
        in: bD,
        timeout: iD,
        nodeRef: yD,
        onEntering: () => {
          BD(!0)
        },
        children: (0, ID.cloneElement)(CD, {
          ref: yD,
          style: SD && fD || void 0
        })
      })
    }
    var gc = cD(35994);

    function Xc() {
      const DD = (0, OD.h)("health");
      return (0, wD.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, wD.jsx)(gc.d, {
          placement: "statBars"
        }), (0, wD.jsx)(mc, {
          actualValue: DD.shield,
          maxValue: DD.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, wD.jsx)(mc, {
          actualValue: DD.health,
          maxValue: DD.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function mc(DD) {
      let {
        actualValue: CD,
        maxValue: cD,
        hideAtValue: ID,
        icon: pD,
        className: iD
      } = DD;
      return (0, vD.d)(), null === CD || null === cD || CD === ID || cD === ID ? null : (0, wD.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, wD.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, wD.jsx)("div", {
            className: `BottomScreenStatBar ${iD}`,
            style: {
              transform: `scaleX(${Math.max(CD/cD,0)})`,
              transformOrigin: "left center"
            }
          }), (0, wD.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, wD.jsx)(LD.c, {
              name: pD
            }), ` ${Math.ceil(CD)}/${cD}`]
          })]
        })
      })
    }
    var nc = cD(9041),
      Oc = cD(4325),
      Pc = cD(1319),
      Hc = cD(2619),
      Uc = cD(1442),
      xc = cD(1305),
      qc = cD(3211),
      Jc = cD(3275),
      Kc = cD(3241),
      ac = cD(767),
      Vc = cD(3295),
      zc = cD(120),
      jc = cD(8944),
      lc = cD(326);

    function Lc(DD, CD) {
      let {
        shownName: cD,
        lifeformType: ID
      } = DD;
      return null !== cD ? cD : null !== ID ? CD(`lifeform:${(0,lc.le)(ID)}`) : null
    }
    var Tc = cD(3227),
      Gc = cD(3234);
    const Rc = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      kc = (0, ID.memo)((function() {
        var DD, CD;
        const cD = (0, vD.b)(),
          pD = (0, MD.useNavigatePreserveSearch)(),
          {
            t: fD
          } = (0, JD.F)(),
          {
            loadingOverlayVisible: QD
          } = (0, PD.o)(["loadingOverlayVisible"]),
          SD = (0, UD.p)(),
          [BD, tD] = (0, ID.useState)(!1),
          [ZD, oD] = (0, ID.useState)(!0),
          [ND, XD] = (0, ID.useState)(null),
          nD = (0, Zc.b)(),
          HD = (0, gD.h)("respawnButtonText"),
          xD = (0, gD.h)("usePlayAgainButton"),
          qD = (0, gD.h)("useRespawnButton"),
          {
            gameNameWithVariation: KD
          } = (0, OD.h)("connectedGame"),
          aD = (0, ID.useRef)(mD.d.get("secsToRespawn")),
          VD = (0, ID.useRef)(yD.gameBridge.latest("localPlayerAlive")),
          zD = (0, ID.useRef)(mD.d.get("secsToRespawn")),
          jD = (0, ID.useRef)(mD.d.get("autoRespawn")),
          lD = (0, ID.useRef)(null),
          TD = (0, ID.useRef)(0),
          GD = (0, ID.useRef)(0),
          [RD, dD] = (0, ID.useState)(!1),
          YD = (0, ID.useRef)(null),
          WD = (0, ID.useRef)(null),
          sD = (0, ID.useRef)(null);
        (0, gD.e)("secsToRespawn", (DD => {
          console.log("Received new secsToRespawn with", DD, "and current canRespawn value of ", jD.current), zD.current = DD, hD()
        })), (0, gD.e)("autoRespawn", (DD => {
          console.log("Received autorespawn", DD, "current canRespawn value of ", aD.current), jD.current = DD, hD()
        }));
        const ED = DD => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", DD), DD || TD.current++, VD.current = DD, hD()
        };
        (0, OD.c)("localPlayerAliveSet", ED), (0, bD.f)(Jc.k, (DD => {
          "connected" === DD && !VD.current && jD.current && aD.current <= 0 && (GD.current = 0, rD())
        })), (0, ID.useEffect)((() => {
          const DD = yD.gameBridge.latest("localPlayerAlive");
          DD === VD.current ? (console.log("Updating respawn component from initial mount"), hD()) : ED(DD)
        }), []), (0, ID.useEffect)((() => {
          if (BD) {
            dD(!1);
            const DD = setTimeout((() => {
              dD(!0)
            }), 600);
            return (0, jc.g)(), () => {
              clearTimeout(DD)
            }
          }
          return () => {}
        }), [BD]);
        (0, OD.c)("kill", (DD => {
          let {
            killer: CD,
            victim: cD,
            withItem: ID
          } = DD;
          if (!cD.local) return;
          const pD = ((DD, CD) => {
            if (DD.local) {
              const DD = Rc[CD];
              return DD ? fD(DD) : null
            }
            const cD = Lc(DD, fD);
            return cD ? fD("respawnPage:killedBy", {
              name: cD
            }) : null
          })(CD, ID);
          pD && XD({
            text: pD,
            deathCount: VD.current ? TD.current + 1 : TD.current
          })
        }));
        const eD = () => {
            BD && jD.current && VD.current && RD && tD(!1)
          },
          uD = BD && jD.current && VD.current && RD && !QD;
        (0, bD.f)("usedKeyboard", (() => {
          eD()
        })), (0, Gc.d)("respawn", uD, eD);
        const hD = () => {
            oD(zD.current >= 3 || !jD.current), VD.current ? (clearInterval(lD.current), lD.current = null, jD.current ? nD() : tD(!1)) : (tD(!0), aD.current = zD.current, nD(), console.log("Running respawn stats updated", jD.current, aD.current), jD.current && aD.current <= 0 && rD(), clearInterval(lD.current), aD.current > 0 && (lD.current = setInterval((() => {
              aD.current = Math.max(aD.current - 1, 0), nD(), aD.current <= 0 && (clearInterval(lD.current), lD.current = null, mD.d.get("autoRespawn") && rD())
            }), 1e3)))
          },
          rD = () => {
            if (Date.now() - GD.current > 1e3) {
              const DD = () => {
                yD.gameBridge.send("respawn", null), GD.current = Date.now()
              };
              mD.d.get("autoRespawn") ? DD() : (0, xc.ab)((() => {
                DD()
              }), "video_respawn")
            }
          },
          AD = (0, ID.useMemo)((() => {
            var DD;
            return null === (DD = (0, ac.h)(KD)) || void 0 === DD ? void 0 : DD.otherGameLinksOnRespawnPage
          }), [KD]),
          FD = 0 === aD.current,
          DC = (null === ND || void 0 === ND ? void 0 : ND.deathCount) === TD.current ? ND.text : null,
          CC = BD && ZD && !QD,
          cC = SD && uD && null !== (DD = null === (CD = (0, kD.d)()) || void 0 === CD ? void 0 : CD.getBoundButton("menuConfirm")) && void 0 !== DD ? DD : null,
          IC = DD => FD ? DD : fD("respawnPage:actionInSeconds", {
            action: DD,
            seconds: aD.current
          });
        return (0, wD.jsx)(nc.c, {
          showing: BD,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, wD.jsx)(qc.c, {
            show: BD,
            "data-holds-camera-keeper": "",
            children: (0, wD.jsxs)(Oc.e, {
              close: () => {
                tD(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: jD.current || QD ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, zc.i)() && (0, wD.jsx)(Uc.e, {
                onClick: Kc.b,
                children: fD("homePage:backToGames")
              }), (0, wD.jsxs)("div", {
                className: "RespawnContainer",
                onClick: eD,
                children: [(0, wD.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, wD.jsx)("div", {
                    ref: WD,
                    className: "RespawnSideSquareBannerDiv",
                    children: cD[0] > 925 && (0, wD.jsx)(Hc.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: WD
                      },
                      showing: CC,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, wD.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, wD.jsxs)("div", {
                      className: iD()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: SD
                      }),
                      children: [jD.current && (0, wD.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, wD.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, wD.jsx)(LD.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), fD("respawnPage:youDied")]
                        }), (0, wD.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === cC && (VD.current ? fD("respawnPage:pressAnywhereToContinue") : FD ? fD("respawnPage:respawning") : IC(fD("general:respawn"))), null !== cC && (0, wD.jsx)(Tc.e, {
                            text: fD("controller:screensPressToContinue", {
                              button: Tc.h
                            }),
                            glyph: cC,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), DC && (0, wD.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: DC
                        })]
                      }), !jD.current && (0, wD.jsxs)(wD.Fragment, {
                        children: [(0, wD.jsxs)("div", {
                          className: iD()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !AD
                          }),
                          children: [xD && (0, wD.jsx)(Uc.o, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, xc.ab)((() => {
                                (0, PD.k)("inGameReplay");
                                const DD = (0, Pc.b)(KD);
                                pD(DD)
                              }), "video_start")
                            },
                            disabled: !FD || !RD,
                            touchPressOn: "pointerup",
                            children: IC(fD("respawnPage:playAgain"))
                          }), qD && (0, wD.jsx)(Uc.i, {
                            className: "RespawnPageButton",
                            onClick: rD,
                            padDefaultFocus: !xD,
                            padBack: "sessionBasedGame:stayInLobby" === HD,
                            disabled: !FD || !RD,
                            touchPressOn: "pointerup",
                            children: IC(fD(HD))
                          }), !(0, zc.i)() && (0, wD.jsx)(Uc.J, {
                            className: "RespawnPageButton",
                            onClick: Kc.b,
                            disabled: !FD || !RD,
                            touchPressOn: "pointerup",
                            children: IC(fD("respawnPage:exitGame"))
                          })]
                        }), AD && (0, wD.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, wD.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: fD("respawnPage:orTry")
                          }), (0, wD.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: AD.map((DD => (0, wD.jsx)(Vc.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: DD
                              },
                              disabled: !FD || !RD,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, PD.k)("inGameReplay");
                                const CD = (0, Pc.b)(DD);
                                pD(CD)
                              }
                            }, DD)))
                          })]
                        })]
                      })]
                    })
                  }), (0, wD.jsx)("div", {
                    ref: sD,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, wD.jsx)("div", {
                  ref: YD,
                  className: "RespawnBottom",
                  children: (0, wD.jsx)(Hc.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: YD
                    },
                    showing: CC,
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
    var dc = cD(36006);
    const Yc = [{
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
      Wc = [{
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
      sc = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Ec = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      ec = (0, ID.memo)((function() {
        const DD = (0, ID.useRef)(null),
          CD = (0, ID.useRef)(null);

        function cD(cD) {
          var ID;
          let {
            rC: pD,
            screenPos: iD
          } = cD;
          const fD = DD.current;
          null === (ID = CD.current) || void 0 === ID || ID.cancel(), fD.classList.remove("HitmarkerCrit"), iD ? (fD.style.left = `${iD.x}%`, fD.style.top = `${iD.y}%`) : (fD.style.left = "50%", fD.style.top = "50%"), fD.style.rotate = 16 * (Math.random() - .5) + "deg", pD && fD.classList.add("HitmarkerCrit");
          const bD = fD.animate(pD ? Wc : Yc, pD ? Ec : sc);
          CD.current = bD, bD.onfinish = () => {
            fD.classList.remove("HitmarkerCrit")
          }
        }
        return (0, bD.f)("localGunHitmarker", (DD => {
          let {
            rC: CD
          } = DD;
          cD({
            rC: CD
          })
        })), (0, bD.f)("yourAttackHit", (DD => {
          let {
            rC: CD,
            screenPos: ID
          } = DD;
          cD({
            rC: CD,
            screenPos: PD.d.get("isTouchScreen") ? ID : void 0
          })
        })), (0, bD.f)("sendHitmarker", (DD => {
          let {
            rC: CD,
            screenPos: ID
          } = DD;
          cD({
            rC: CD,
            screenPos: ID
          })
        })), (0, wD.jsxs)("div", {
          ref: DD,
          className: "Hitmarker",
          children: [(0, wD.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, wD.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, wD.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, wD.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function uc() {
      const DD = (0, ID.useRef)(!0);
      return (0, bD.f)("localBlockMined", (() => {
        pC.d.play("blockMined")
      })), (0, bD.f)("yourAttackHit", (() => {
        pC.d.play("hitLanded")
      })), (0, bD.f)("localGunHitmarker", (() => {
        pC.d.play("hitLanded")
      })), (0, bD.f)("damagedByOtherPlayer", (() => {
        pC.d.play("damageTaken")
      })), (0, OD.c)("localPlayerAliveSet", (CD => {
        !CD && DD.current && pC.d.play("death"), DD.current = CD
      })), null
    }
    var hc = cD(1893),
      rc = cD(36020),
      Ac = cD.n(rc),
      Fc = cD(2003),
      DI = cD(1990),
      CI = cD(3083),
      cI = cD(9062);
    const II = lc.ae ? 7e7 : 7e3,
      pI = Ac()("#ffffff").alpha(.5).string();

    function iI(DD) {
      const CD = (0, CI.e)(DD);
      return void 0 !== CD && "Gun" === (0, cI.itemTypeOf)(CD)
    }

    function fI(DD) {
      if (!DD) return console.error(`Killfeed colour was ${DD}`), pI;
      try {
        return Ac()(DD).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${DD} is not a colour`), pI
      }
    }
    const bI = (0, ID.memo)((function() {
      const {
        t: DD
      } = (0, JD.F)(), CD = (0, ID.useRef)([]), cD = (0, Zc.b)();
      return (0, OD.c)("kill", (function(ID) {
        var pD, iD;
        let {
          killer: fD,
          victim: bD,
          withItem: QD,
          killstreak: wD
        } = ID;
        const SD = CD.current;
        if (SD.length >= 3) {
          const DD = SD.shift();
          clearTimeout(DD.timeout)
        }
        const BD = yD.gameBridge.latest("hiddenPlayerNames"),
          MD = {
            deadName: Lc(bD, DD),
            killerName: Lc(fD, DD),
            isFriend: {
              killer: (0, Fc.f)(fD.realName, BD),
              dead: (0, Fc.f)(bD.realName, BD)
            },
            withItem: QD,
            wasHeadshot: !1,
            killstreak: wD,
            timeout: setTimeout((() => {
              SD.shift(), cD()
            }), II),
            reactId: `${null!==(pD=fD.id)&&void 0!==pD?pD:fD.shownName}|${null!==(iD=bD.id)&&void 0!==iD?iD:bD.shownName}|${Date.now()}`,
            killerBackground: fI(fD.colour),
            deadBackground: fI(bD.colour)
          };
        SD.push(MD), cD()
      })), (0, ID.useEffect)((() => {
        const DD = CD.current;
        return () => {
          for (; DD.length > 0;) {
            const {
              timeout: CD
            } = DD.pop();
            clearTimeout(CD)
          }
        }
      }), []), (0, wD.jsx)("div", {
        className: "Killfeed",
        children: CD.current.map((DD => {
          let {
            deadName: CD,
            killerName: cD,
            withItem: ID,
            wasHeadshot: pD,
            killstreak: iD,
            killerBackground: fD,
            deadBackground: bD,
            reactId: QD,
            isFriend: SD
          } = DD;
          return (0, wD.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${fD} calc(100% - 10rem), ${bD} 100%)`
            },
            children: [iD >= 2 ? (0, wD.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, lc.S)(iD)
            }) : null, (0, wD.jsx)("div", {
              className: "KillfeedKillerName",
              children: cD
            }), SD.killer && (0, wD.jsx)(DI.b, {}), (0, wD.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: iI(ID) ? "7.5vmin" : "5vmin"
              },
              children: (0, wD.jsx)(hc.d, {
                itemName: ID,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), pD ? (0, wD.jsx)(LD.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, wD.jsx)("div", {
              className: "KillfeedDeadName",
              children: CD
            }), SD.dead && (0, wD.jsx)(DI.b, {})]
          }, QD)
        }))
      })
    }));
    var QI = cD(36075),
      wI = cD(1129),
      SI = cD.n(wI),
      BI = cD(3193),
      yI = cD(36083),
      MI = cD(1294);
    const tI = {},
      ZI = (0, ID.memo)((function() {
        const DD = (0, ID.useRef)({}),
          [, CD] = (0, ID.useReducer)((DD => DD + 1), 0);
        (0, bD.f)("setDirectionArrow", (cD => {
          let {
            id: ID,
            position: pD,
            style: iD,
            text: fD,
            Fp: bD
          } = cD;
          const QD = DD.current,
            wD = iD || tI,
            SD = fD,
            BD = QD[ID];
          if (!BD) return QD[ID] = {
            position: pD,
            style: wD,
            text: SD,
            shouldShowDistance: bD,
            wV: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void CD();
          const yD = !SI()(BD.style, wD) || !SI()(BD.text, SD) || BD.shouldShowDistance !== bD;
          BD.position = pD, BD.style = wD, BD.text = SD, BD.shouldShowDistance = bD, yD && CD()
        })), (0, bD.f)("clearDirectionArrow", (cD => {
          let {
            id: ID
          } = cD;
          const pD = DD.current;
          if (null === ID)
            for (const DD in pD) delete pD[DD];
          else delete pD[ID];
          CD()
        })), (0, ID.useEffect)((() => {
          const CD = DD.current,
            cD = (0, MI.o)((() => {
              ! function(DD) {
                const CD = yD.gameBridge.lookup("localPos", null),
                  cD = BI.e - oI,
                  ID = (0, BI.l)() - oI;
                for (const pD in DD) {
                  const iD = DD[pD];
                  if (!iD.wV) continue;
                  const fD = yD.gameBridge.lookup("screenPos", iD.position),
                    bD = fD.x - 50,
                    QD = fD.y - 50;
                  fD.x === iD.lastScreenX && fD.y === iD.lastScreenY || (iD.lastScreenX = fD.x, iD.lastScreenY = fD.y, iD.wV.style.translate = `${fD.x}vw ${fD.y}vh`, iD.chevronElement && (iD.chevronElement.style.rotate = `${lc.e.fastATan2(QD,bD)}rad`));
                  const wD = Math.abs(bD) < cD && Math.abs(QD) < ID;
                  if (wD !== iD.onScreen && (iD.onScreen = wD, iD.wV.classList.toggle("DirectionArrowOnScreen", wD)), iD.shouldShowDistance && iD.distanceElement) {
                    const DD = iD.position[0] - CD[0],
                      cD = iD.position[1] - CD[1],
                      ID = iD.position[2] - CD[2],
                      pD = Math.round(Math.sqrt(DD * DD + cD * cD + ID * ID));
                    (-1 === iD.lastRenderedDist || (0, yI.d)(pD, iD.lastRenderedDist, iD.lastDistUpdateTime)) && (iD.distanceElement.textContent = `${pD}m`, iD.lastRenderedDist = pD, iD.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(CD)
            }));
          return () => {
            cD();
            for (const DD in CD) delete CD[DD]
          }
        }), []);
        const cD = DD.current;
        return (0, wD.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(cD).map((DD => {
            var CD;
            let [ID, pD] = DD;
            const iD = null !== (CD = (0, ND.Xb)(pD.style)) && void 0 !== CD ? CD : "#ffffff";
            return (0, wD.jsxs)("div", {
              ref: DD => {
                cD[ID] && (cD[ID].wV = DD)
              },
              className: "DirectionArrow",
              style: {
                fontSize: pD.style.fontSize,
                opacity: pD.style.opacity
              },
              children: [(0, wD.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: DD => {
                  cD[ID] && (cD[ID].chevronElement = DD)
                },
                children: [(0, wD.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, wD.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, wD.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, wD.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, wD.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: iD
                    }
                  }), (0, wD.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: iD
                    }
                  })]
                })]
              }), (0, wD.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: iD,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${iD}`
                }
              }), pD.text && (0, wD.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: iD,
                  fontWeight: pD.style.fontWeight,
                  fontStyle: pD.style.fontStyle
                },
                children: (0, wD.jsx)(QD.c, {
                  text: pD.text
                })
              }), pD.shouldShowDistance && (0, wD.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: DD => {
                  cD[ID] && (cD[ID].distanceElement = DD)
                },
                style: {
                  color: iD,
                  fontWeight: pD.style.fontWeight,
                  fontStyle: pD.style.fontStyle
                }
              })]
            }, ID)
          }))
        })
      })),
      oI = .5;
    const vI = (0, ID.memo)((function(DD) {
        let {
          isTouchScreen: CD
        } = DD;
        return (0, wD.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, wD.jsx)(mI, {}), CD && (0, wD.jsx)(Dc, {})]
        })
      })),
      NI = {
        readyForNext: 0,
        running: 1
      },
      gI = 50;

    function XI(DD) {
      console.assert(DD.state.current === NI.readyForNext);
      const CD = DD.queue.current,
        cD = DD.foreground.current;
      if (CD.length > 0 && cD) {
        const {
          toFraction: ID,
          toDuration: pD
        } = CD.shift();
        DD.state.current = NI.running, cD.style.transition = `transform ${Math.max(pD-gI,0)}ms linear`, cD.classList.remove("Complete"), DD.timeout.current = setTimeout((() => {
          cD.style.transform = `scaleX(${ID})`, DD.timeout.current = setTimeout((() => {
            1 === ID && cD.classList.add("Complete"), DD.state.current = NI.readyForNext, XI(DD)
          }), Math.max(pD - gI, 0))
        }), gI)
      }
    }

    function mI() {
      const DD = (0, ID.useRef)([]),
        CD = (0, ID.useRef)(NI.readyForNext),
        cD = (0, ID.useRef)(void 0),
        pD = (0, ID.useRef)(null),
        iD = (0, ID.useRef)({
          queue: DD,
          state: CD,
          timeout: cD,
          foreground: pD
        }),
        fD = (0, gD.h)("showProgressBar");
      if ((0, ID.useLayoutEffect)((() => (fD && CD.current === NI.readyForNext && XI(iD.current), () => {
          CD.current = NI.readyForNext, clearTimeout(cD.current), fD && (DD.current.length = 0)
        })), [fD]), (0, bD.f)("progressBarUpdate", (cD => {
          let {
            toFraction: ID,
            toDuration: pD
          } = cD;
          DD.current.push({
            toFraction: ID,
            toDuration: pD
          }), CD.current === NI.readyForNext && XI(iD.current)
        })), !fD) return null;
      return (0, wD.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, wD.jsx)("div", {
          className: "ProgressBarForeground",
          ref: pD,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var nI = cD(36085),
      OI = cD(2381);
    const PI = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function HI(DD) {
      let {
        classes: CD,
        gone: cD
      } = DD;
      const ID = document.documentElement;
      ID.classList.remove(...CD);
      for (const pD of cD) pD.style.display = "block";
      return () => {
        ID.classList.add(...CD);
        for (const DD of cD) DD.style.display = ""
      }
    }

    function UI(DD) {
      const {
        isTouchScreen: CD
      } = (0, PD.o)(["isTouchScreen"]);
      (0, ID.useLayoutEffect)((() => {
        if (!CD) return;
        const cD = DD.current,
          ID = document.querySelector(`.${nI.h}`),
          pD = DD => {
            const CD = () => {
              const CD = DD.querySelector(OI.h),
                ID = function(DD) {
                  const CD = document.documentElement;
                  return {
                    classes: BC.A.map(ZC.J).filter((DD => CD.classList.contains(DD))),
                    gone: [...DD.querySelectorAll(`.TopRightTrayToggle.${OI.i}`)]
                  }
                }(DD);
              CD && function(DD, CD) {
                (0, OI.A)(DD, CD.classes.length > 0 || CD.gone.length > 0, (() => HI(CD)))
              }(CD, ID);
              const pD = `${Math.floor(function(DD,CD,cD){const ID=document.documentElement,pD=ID.classList.contains((0,ZC.R)("menu")),iD=ID.style.getPropertyValue((0,ZC.W)("menu"));if(!pD&&""===iD)return DD.getBoundingClientRect().left;const fD=CD?(0,OI.o)(CD):()=>{},bD=HI(cD);ID.classList.remove((0,ZC.R)("menu")),ID.style.removeProperty((0,ZC.W)("menu"));const QD=DD.getBoundingClientRect().left;return bD(),fD(),pD&&ID.classList.add((0,ZC.R)("menu")),""!==iD&&ID.style.setProperty((0,ZC.W)("menu"),iD),QD}(DD,CD,ID)-cD.getBoundingClientRect().left-4)}px`;
              cD.style.getPropertyValue("--InGameHeaderMaxWidth") !== pD && cD.style.setProperty("--InGameHeaderMaxWidth", pD)
            };
            CD();
            const pD = new ResizeObserver(CD);
            pD.observe(DD), pD.observe(ID), window.addEventListener("resize", CD);
            const iD = () => PI.map((DD => document.documentElement.style.getPropertyValue(DD))).join();
            let fD = iD();
            const bD = new MutationObserver((() => {
              const DD = iD();
              DD !== fD && (fD = DD, CD())
            }));
            bD.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const QD = (0, XD.k)(ZC.g, CD),
              wD = new MutationObserver(CD);
            return wD.observe(DD, {
              childList: !0,
              subtree: !0
            }), () => {
              pD.disconnect(), bD.disconnect(), wD.disconnect(), QD(), window.removeEventListener("resize", CD);
              const cD = DD.querySelector(OI.h);
              cD && (0, OI.o)(cD)
            }
          },
          iD = () => ID.querySelector(".TopRightIconsContainer"),
          fD = iD();
        let bD;
        if (fD) bD = pD(fD);
        else {
          const DD = new MutationObserver((() => {
            const CD = iD();
            CD && (DD.disconnect(), bD = pD(CD))
          }));
          DD.observe(ID, {
            childList: !0,
            subtree: !0
          }), bD = () => {
            DD.disconnect()
          }
        }
        return () => {
          bD(), cD.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [CD, DD])
    }
    var xI = cD(3494),
      qI = cD(3486),
      JI = cD(1627),
      KI = cD(1497),
      aI = cD(1629),
      VI = cD(1701),
      zI = cD(1825),
      jI = cD(1127),
      lI = cD(4128),
      LI = cD(1471),
      TI = cD(1347);
    const GI = 2e4,
      RI = 6e5,
      kI = new Set;

    function dI() {
      const {
        gameEntrySource: DD,
        loadingOverlayVisible: CD
      } = (0, PD.o)(["gameEntrySource", "loadingOverlayVisible"]), cD = (0, OD.g)("connectedGame", (DD => (0, lI.h)(DD) ? DD.lobbyName : null)), pD = (0, OD.h)("localPlayerAlive"), iD = (0, OD.g)("players", (DD => null !== DD.localId && void 0 !== DD.byId[DD.localId])), [fD, bD] = (0, ID.useState)(null);
      return !CD && pD && iD && null !== cD && fD !== cD && bD(cD), (0, ID.useEffect)((() => {
        if (!(0, lI.i)(DD) || null === fD || fD !== cD || kI.has(fD)) return;
        const CD = setTimeout((() => {
          kI.add(fD), async function(DD) {
            const CD = await jI.userContextManager.getCurrentUserContext();
            let cD;
            try {
              cD = (await KI.c.getWorldOwnerFriendOffer(CD)).owner
            } catch (pD) {
              return void console.warn("Couldn't ask who owns this world", pD)
            }
            if (!cD || (0, lI.n)(cD.name, Date.now())) return;
            const ID = cD;
            ! function(DD, CD) {
              const cD = Date.now() + RI;
              let ID = Date.now(),
                pD = 0;
              const iD = () => {
                const fD = Date.now(),
                  bD = yD.gameBridge.latest("connectedGame");
                bD.lobbyName !== DD || fD > cD || (null === bD.websocketUrl ? ID = 1 / 0 : ID === 1 / 0 && !PD.d.get("loadingOverlayVisible") && yD.gameBridge.latest("localPlayerAlive") && (ID = fD + GI), pD = fD < ID || !yD.gameBridge.latest("localPlayerAlive") || PD.d.get("isUiHidden") || PD.d.get("isUiHiddenByCamera") || (0, VI.isTypingInInput)() || PD.d.get("loadingOverlayVisible") || (0, JI.s)() || (0, xI.f)() || (0, TI.l)() ? 0 : pD + 1, pD >= 2 ? CD() : setTimeout(iD, 500))
              };
              iD()
            }(DD, (() => {
              (0, lI.f)(aI.e.getSocialState().friends, ID.name) || ((0, lI.m)(ID.name, Date.now()), zI.g.showWorldOwnerOffer(ID), (0, LI.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(fD).catch((DD => {
            console.error("Failed to offer the world's owner as a friend", DD)
          }))
        }), GI);
        return () => {
          clearTimeout(CD)
        }
      }), [DD, fD, cD]), null
    }
    var YI = cD(1879);
    const WI = (0, ID.memo)((function(DD) {
        let {
          durationMs: CD,
          endsAtMs: cD
        } = DD;
        const [, pD] = (0, ID.useReducer)((DD => DD + 1), 0), iD = null === cD ? CD : Math.max(cD - Date.now(), 0);
        return (0, ID.useEffect)((() => {
          if (null === cD || iD <= 0) return;
          const DD = setTimeout(pD, iD - 1e3 * (Math.ceil(iD / 1e3) - 1));
          return () => {
            clearTimeout(DD)
          }
        })), (0, wD.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, lc.eb)(iD)
        })
      })),
      sI = (0, ID.memo)((function() {
        const DD = (0, OD.h)("localEffects");
        return (0, wD.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(DD).map((DD => {
            let [CD, {
              icon: cD,
              displayName: ID,
              durationMs: pD,
              endsAtMs: iD,
              level: fD
            }] = DD;
            return (0, wD.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, wD.jsx)(YI.d, {
                icon: cD,
                className: "EffectInfoIcon"
              }), (0, wD.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== pD ? "0" : "1rem"
                },
                children: [(0, wD.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, wD.jsx)(QD.c, {
                    text: null !== ID && void 0 !== ID ? ID : CD,
                    className: "EffectInfoName SmallTextBold"
                  }), fD > 1 && (0, wD.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, lc.S)(fD)
                  })]
                }), null !== pD && (0, wD.jsx)(WI, {
                  durationMs: pD,
                  endsAtMs: iD
                })]
              })]
            }, CD)
          }))
        })
      }));
    var EI = cD(36091),
      eI = cD(36260),
      uI = cD(194),
      hI = cD(1340),
      rI = cD(2635),
      AI = cD(2752);

    function FI(DD, CD) {
      (0, ID.useLayoutEffect)((() => {
        let CD, cD;
        const ID = requestAnimationFrame((() => {
          cD = setTimeout((() => {
            cD = void 0;
            const ID = DD();
            CD = "function" === typeof ID ? ID : void 0
          }), 0)
        }));
        return () => {
          var DD;
          cancelAnimationFrame(ID), clearTimeout(cD), null === (DD = CD) || void 0 === DD || DD()
        }
      }), CD)
    }
    const Dp = [5, 5, 5],
      Cp = [7, 4, 4, 4];

    function cp(DD) {
      return DD.reduce(((DD, CD) => DD + CD), 0)
    }

    function Ip(DD, CD, cD, ID, pD) {
      const iD = DD.getContext("2d");
      if (!iD) return null;
      const fD = CD.fontFamily,
        bD = CD.fontWeight;
      return DD.width = cD, DD.height = ID, iD.fillStyle = CD.color, iD.textAlign = "center", iD.textBaseline = "middle", iD.font = `${bD} ${pD}px ${fD}`, iD
    }
    const pp = (0, ID.memo)((function(DD) {
      let {
        show: CD
      } = DD;
      const cD = (0, ID.useRef)(null),
        pD = (0, ID.useRef)(null),
        iD = (0, ID.useRef)(null),
        fD = (0, tD.h)();
      return (0, ID.useEffect)((() => fD.whenShown((() => {
        let DD = 0,
          CD = 0,
          cD = 0,
          ID = 0;
        const fD = (0, MI.o)((() => {
          var fD;
          DD++, CD++;
          const bD = performance.now();
          if (bD - cD < 1e3) return;
          const QD = Math.round(DD / (bD - cD) * 1e3);
          if (pD.current = QD, null === (fD = iD.current) || void 0 === fD || fD.call(iD, QD), DD = 0, cD = bD, QD < 55) {
            var wD, SD;
            ID += 1;
            const DD = nD.h.getItem("decreaseLoadDistPromptDeniedCount"),
              [CD, cD] = mD.d.get("minChunkAddDist");
            if (ID >= 15 && function(DD, CD) {
                const cD = yD.gameBridge.lookup("Om", null);
                return null !== cD && (cD.horizontal > DD || cD.vertical > CD)
              }(CD, cD) && (null !== (wD = nD.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== wD ? wD : 0) + 432e5 < Date.now() && (null !== (SD = nD.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== SD ? SD : 0) < 3) {
              nD.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              hI.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((ID => {
                "notificationTornDown" !== ID && (ID ? (yD.gameBridge.send("setChunkAddDistance", {
                  horizontal: CD,
                  vertical: cD
                }), nD.h.setItem("chunkHorizAddDist", CD), nD.h.setItem("chunkVertAddDist", cD), XD.i.Uo("updatedChunkLoadDist"), nD.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : nD.h.setItem("decreaseLoadDistPromptDeniedCount", DD + 1))
              }))
            }
          } else ID = 0
        }));
        let bD = performance.now();
        CD = 0;
        let QD = null,
          wD = !document.hidden;

        function SD() {
          const DD = performance.now() - bD,
            cD = 1e3 * CD / DD;
          wD && (null === QD && (QD = cD), rI.b.setFps(cD, QD)), CD = 0, bD = performance.now()
        }
        let BD = setInterval(SD, AI.e);

        function MD() {
          const DD = wD;
          wD = !document.hidden, !DD && wD && (CD = 0, bD = performance.now(), clearInterval(BD), BD = setInterval(SD, AI.e))
        }
        return document.addEventListener("visibilitychange", MD), () => {
          fD(), document.removeEventListener("visibilitychange", MD), clearInterval(BD)
        }
      }))), [fD]), FI((() => {
        var DD;
        if (!CD || iD.current) return;
        const ID = cD.current,
          fD = window.getComputedStyle(ID.parentElement),
          bD = null !== (DD = window.devicePixelRatio) && void 0 !== DD ? DD : 1,
          QD = parseFloat(fD.fontSize) * bD,
          wD = Math.round(3 * QD),
          SD = Math.round(QD),
          BD = Ip(ID, fD, wD, SD, QD);
        if (!BD) return;
        const yD = DD => {
          BD.clearRect(0, 0, ID.width, ID.height), BD.fillText(DD.toString(), ID.width / 2, ID.height / 2)
        };
        iD.current = yD, null !== pD.current && yD(pD.current)
      }), [CD]), (0, wD.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: CD ? "flex" : "none"
        },
        children: [(0, wD.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, wD.jsx)("canvas", {
          className: "FpsCanvas",
          ref: cD,
          width: 48,
          height: 16
        })]
      })
    }));

    function ip(DD) {
      return Math.sign(DD) * Math.round(100 * Math.abs(DD))
    }

    function fp(DD) {
      let {
        getCoordinates: CD,
        showChunkCoords: cD,
        columns: pD
      } = DD;
      const iD = (0, ID.useRef)(null);
      return FI((() => {
        var DD;
        const ID = iD.current,
          fD = window.getComputedStyle(ID.parentElement),
          bD = null !== (DD = window.devicePixelRatio) && void 0 !== DD ? DD : 1,
          QD = parseFloat(fD.fontSize) * bD,
          wD = Math.round(QD * cp(pD)),
          SD = Math.round(QD),
          BD = Ip(ID, fD, wD, SD, QD);
        if (!BD) return;
        let MD = !0,
          tD = 0,
          ZD = 0,
          oD = 0,
          vD = 0,
          ND = 0,
          gD = 0;
        const XD = () => {
          MD = !0
        };
        document.fonts.load(BD.font).then(XD, XD);
        const mD = () => {
          Ip(ID, fD, wD, SD, QD), XD()
        };
        ID.addEventListener("contextrestored", mD);
        const nD = (0, MI.w)((() => {
          var DD, iD, fD, bD, wD, SD;
          const [XD, mD, nD] = CD(), OD = ip(XD), PD = ip(mD), HD = ip(nD);
          let UD = null;
          if (cD) {
            const DD = yD.gameBridge.lookup("localPos", null);
            UD = (0, DC.Q)(DD[0], DD[1], DD[2])
          }
          const xD = null !== (DD = null === (iD = UD) || void 0 === iD ? void 0 : iD[0]) && void 0 !== DD ? DD : 0,
            qD = null !== (fD = null === (bD = UD) || void 0 === bD ? void 0 : bD[1]) && void 0 !== fD ? fD : 0,
            JD = null !== (wD = null === (SD = UD) || void 0 === SD ? void 0 : SD[2]) && void 0 !== wD ? wD : 0;
          if (!MD && OD === tD && PD === ZD && HD === oD && xD === vD && qD === ND && JD === gD) return;
          MD = !1, tD = OD, ZD = PD, oD = HD, vD = xD, ND = qD, gD = JD;
          const KD = [(OD / 100).toFixed(2), (PD / 100).toFixed(2), (HD / 100).toFixed(2)];
          UD && KD.unshift(`${xD} ${qD} ${JD}`), BD.clearRect(0, 0, ID.width, ID.height);
          const aD = ID.height / 2;
          let VD = 0;
          for (let CD = 0; CD < KD.length; CD++) {
            const DD = QD * pD[CD];
            BD.fillText(KD[CD], VD + DD / 2, aD, DD), VD += DD
          }
        }));
        return () => {
          nD(), ID.removeEventListener("contextrestored", mD)
        }
      }), [CD, cD, pD]), (0, wD.jsx)("div", {
        className: "CoordinateUI",
        children: (0, wD.jsx)("canvas", {
          ref: iD,
          className: "CoordinateCanvas",
          width: 16 * cp(pD),
          height: 16
        })
      })
    }
    const bp = (0, ID.memo)((function() {
        const DD = (0, ID.useCallback)((() => {
          const DD = yD.gameBridge.lookup("localPos", null);
          return [DD[0], DD[1], DD[2]]
        }), []);
        return (0, wD.jsx)(fp, {
          getCoordinates: DD,
          showChunkCoords: !1,
          columns: Dp
        })
      })),
      Qp = (0, ID.memo)((function() {
        const DD = (0, ID.useCallback)((() => {
          const DD = yD.gameBridge.lookup("localPos", null),
            CD = uI.h.Wt;
          let cD = DD[0] % CD,
            ID = DD[1] % CD,
            pD = DD[2] % CD;
          return cD < 0 && (cD += CD), ID < 0 && (ID += CD), pD < 0 && (pD += CD), [cD, ID, pD]
        }), []);
        return (0, wD.jsx)(fp, {
          getCoordinates: DD,
          showChunkCoords: !0,
          columns: Cp
        })
      }));
    var wp = cD(2025),
      Sp = cD(1328),
      Bp = cD(1011),
      yp = cD(1221),
      Mp = cD(90),
      tp = cD(36113),
      Zp = cD(1444),
      op = cD(2946);
    const vp = (0, ID.memo)((function() {
      const DD = (0, gD.h)("maxAuraLevel");
      return 0 === DD ? null : (0, wD.jsx)(Np, {
        maxLevel: DD
      })
    }));

    function Np(DD) {
      let {
        maxLevel: CD
      } = DD;
      const cD = (0, gD.h)("auraPerLevel"),
        [pD, iD] = (0, ID.useState)((() => {
          var DD;
          return null !== (DD = yD.gameBridge.latest("aura")) && void 0 !== DD ? DD : void 0
        })),
        [fD, bD] = (0, ID.useState)((() => XD(pD))),
        [QD, SD] = (0, ID.useReducer)((DD => DD + 1), 0),
        BD = (0, ID.useRef)(null),
        MD = (0, ID.useRef)([]),
        tD = (0, ID.useRef)({
          width: 0,
          level: 0
        }),
        ZD = (0, ID.useRef)(null),
        oD = (0, ID.useRef)(null);

      function ND() {
        if (null !== ZD.current) return;
        if (0 === MD.current.length) return;
        const {
          width: DD,
          level: CD
        } = MD.current.shift();
        let cD;
        if (CD !== tD.current.level && CD > tD.current.level !== DD > tD.current.width) {
          const ID = CD > tD.current.level;
          cD = ID ? DD : 100 - DD, BD.current.style.transition = "none", BD.current.style.width = ID ? "0%" : "100%", BD.current.offsetWidth
        } else cD = Math.abs(DD - tD.current.width);
        const ID = 100 * cD / 20;
        BD.current.style.transition = `width ${ID}ms linear`, bD(DD), tD.current = {
          width: DD,
          level: CD
        }, MD.current.length > 0 && (ZD.current = setTimeout((() => {
          ZD.current = null, ND()
        }), ID))
      }

      function XD(DD) {
        return Math.floor(DD / cD) === CD ? 100 : DD % cD / cD * 100
      }
      return (0, ID.useEffect)((() => () => {
        clearTimeout(ZD.current), clearTimeout(oD.current), ZD.current = null, oD.current = null
      }), []), (0, OD.c)("aura", (DD => {
        if (oD.current && clearTimeout(oD.current), null === DD) return clearTimeout(ZD.current), oD.current = null, ZD.current = null, MD.current = [], tD.current = {
          width: 0,
          level: 0
        }, iD(void 0), void bD(0);
        oD.current = setTimeout((() => {
          const CD = Math.floor(pD / cD),
            ID = Math.floor(DD / cD),
            fD = XD(DD);
          DD > pD && tp.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), ID > CD ? (ID % 5 === 0 && tp.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), SD(), MD.current.push({
            width: 100,
            level: CD
          })) : ID < CD && MD.current.push({
            width: 0,
            level: CD
          }), DD === pD && ID === CD || MD.current.push({
            width: fD,
            level: ID
          }), iD(DD), ND()
        }), 50)
      })), (0, vD.d)(), (0, wD.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, wD.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, wD.jsx)(Zp.c, {
            showSignal: QD,
            particleElement: (0, wD.jsx)("img", {
              src: (0, op.g)("glint"),
              alt: ""
            })
          }), (0, wD.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, op.g)("glint"),
            alt: "aura"
          }), (0, wD.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== pD && void 0 !== pD ? pD : 0) / cD)
          })]
        }), (0, wD.jsx)("div", {
          className: "AuraBar",
          children: (0, wD.jsx)("div", {
            ref: BD,
            className: "AuraBarBackground",
            style: {
              width: `${fD}%`
            }
          })
        })]
      })
    }
    var gp = cD(2447);

    function Xp(DD) {
      DD.timed && (DD.endedAnimation = DD.timed.animation, DD.timed = null)
    }
    const mp = (0, ID.memo)((function() {
      const DD = (0, ID.useRef)(null),
        CD = (0, ID.useRef)(null),
        cD = (0, ID.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, bD.f)("middleScreenBarInitiate", (DD => {
        var ID;
        let {
          duration: pD,
          iI: iD,
          horizBarRemOffset: fD
        } = DD;
        const bD = cD.current;
        Xp(bD);
        const QD = CD.current;
        if (!(pD >= 0) || !QD) return;
        null === (ID = bD.endedAnimation) || void 0 === ID || ID.cancel(), bD.endedAnimation = null;
        const wD = QD.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: pD,
          fill: "forwards"
        });
        bD.timed = {
          iI: iD,
          horizBarRemOffset: fD,
          animation: wD
        }
      })), (0, bD.f)("middleScreenBarRemove", (() => {
        Xp(cD.current)
      })), (0, ID.useEffect)((() => {
        const ID = cD.current;
        let pD = Number.NaN,
          iD = Number.NaN,
          fD = Number.NaN;
        return (0, MI.n)((() => {
          var cD, bD, QD, wD;
          const SD = DD.current,
            BD = CD.current;
          if (!SD || !BD) return;
          null !== (cD = ID.timed) && void 0 !== cD && cD.iI && "finished" === ID.timed.animation.playState && Xp(ID), null === (bD = ID.endedAnimation) || void 0 === bD || bD.cancel(), ID.endedAnimation = null;
          let MD = ID.timed ? 1 : 0;
          if (!ID.timed) {
            const DD = yD.gameBridge.lookup("momentumFrac", null);
            MD = DD > 0 ? 1 : 0, DD !== fD && (fD = DD, BD.style.transform = `scaleX(${DD})`)
          }
          const tD = null !== (QD = null === (wD = ID.timed) || void 0 === wD ? void 0 : wD.horizBarRemOffset) && void 0 !== QD ? QD : 0;
          tD === pD && MD === iD || (pD = tD, iD = MD, SD.style.transform = `translateX(calc(-50% + ${tD}rem)) scaleX(${MD})`)
        }))
      }), []), (0, wD.jsx)("div", {
        className: "MiddleScreenBar",
        ref: DD,
        children: (0, wD.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: CD
        })
      })
    }));
    var np = cD(4476),
      Op = cD(2613);

    function Pp() {
      const {
        t: DD
      } = (0, JD.F)(), CD = (0, bD.g)("serverUpdating", null), cD = (0, Op.b)(250, null !== CD);
      return null === CD || cD - CD > 3e4 ? null : (0, wD.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, wD.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: DD("updateWaiting:updatingIn", {
            countdown: (0, np.p)(CD - cD)
          })
        }), (0, wD.jsx)("div", {
          children: DD("updateWaiting:bringYouBack")
        })]
      })
    }
    var Hp = cD(36285),
      Up = cD(1961);
    const xp = [{
        translationKey: "general:interact"
      }],
      qp = (0, ID.memo)((function() {
        const DD = (0, gD.h)("crosshairText"),
          {
            interactPrompt: CD,
            blockText: cD,
            neededTool: pD
          } = (0, OD.h)("crosshairTarget"),
          {
            isTouchScreen: iD
          } = (0, PD.o)(["isTouchScreen"]),
          fD = (0, UD.p)(),
          SD = (0, qD.c)("alt-fire");
        (0, ID.useEffect)((() => {
          yD.gameBridge.send("setCrosshairInteractPrompt", !iD || fD ? "key" : "touch")
        }), [iD, fD]);
        const [BD, MD] = (0, ID.useReducer)((DD => DD + 1), 0);
        (0, bD.f)("customBindingsChanged", MD);
        var tD;
        if (null !== CD && (fD && null !== SD || !iD && null !== (0, Up.n)("alt-fire"))) return (0, wD.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, wD.jsx)(HD.d, {
            noaAction: "alt-fire"
          }), (0, wD.jsx)(QD.c, {
            text: null !== (tD = CD.label) && void 0 !== tD ? tD : xp
          })]
        });
        let ZD = null;
        return null !== cD ? ZD = cD : null !== DD && "" !== DD ? ZD = DD : null !== pD && (ZD = [{
          icon: pD,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), ZD ? (0, wD.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, wD.jsx)(QD.c, {
            text: ZD
          })
        }) : null
      }));
    var Jp = cD(2450);
    const Kp = (0, ID.memo)((function() {
      var DD;
      const {
        interactPrompt: CD
      } = (0, OD.h)("crosshairTarget"), {
        openInGameMenuName: cD,
        openEverythingMenuName: ID
      } = (0, PD.o)(["openInGameMenuName", "openEverythingMenuName"]), pD = (0, bD.g)("aimingOverlay", "none"), iD = (0, eD.o)(), fD = (0, Jp.e)();
      return null === CD || null !== cD || null !== ID || "sniper" === pD || iD || fD ? null : (0, wD.jsx)(ap, {
        label: null !== (DD = CD.label) && void 0 !== DD ? DD : xp
      })
    }));

    function ap(DD) {
      let {
        label: CD
      } = DD;
      const cD = qC(rD.d.Interact, !1);
      return (0, ID.useEffect)((() => (XD.i.Uo(ZC.z), () => {
        XD.i.Uo(ZC.z)
      })), []), (0, wD.jsx)("div", {
        ref: cD,
        className: "TouchInteractHit",
        children: (0, wD.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, wD.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, wD.jsx)(LD.c, {
              name: "hand-back-point-up"
            })
          }), (0, wD.jsx)(QD.c, {
            text: CD
          })]
        })
      })
    }
    var Vp = cD(4557),
      zp = cD(4599);
    const jp = (0, ID.forwardRef)((function(DD, CD) {
        let {
          text: cD,
          className: ID,
          children: pD
        } = DD;
        return cD.hasText ? (0, wD.jsx)("div", {
          ref: CD,
          className: iD()("HudTextPanel", ID, {
            NoBackground: !cD.showBackground
          }),
          children: null !== pD && void 0 !== pD ? pD : (0, wD.jsx)(QD.c, {
            text: cD.content
          })
        }) : null
      })),
      lp = (0, ID.memo)((function() {
        const DD = (0, gD.l)("middleTextTop"),
          [CD, cD] = (0, ID.useState)(null),
          pD = (0, nI.i)(CD);
        return DD.hasText ? (0, wD.jsx)("div", {
          className: iD()("MiddleTextTopContainer", {
            MiddleTextTopBelow: pD
          }),
          children: (0, wD.jsx)(jp, {
            ref: cD,
            className: "MiddleTextTop",
            text: DD
          })
        }) : null
      })),
      Lp = (0, ID.memo)((function() {
        const DD = (0, gD.c)();
        return (0, wD.jsx)(wD.Fragment, {
          children: DD.map(((DD, CD) => (0, wD.jsx)(jp, {
            className: "HeaderChip",
            text: DD
          }, CD)))
        })
      }));
    var Tp = cD(3439),
      Gp = cD(4397);
    const Rp = (0, ID.memo)((function() {
      const {
        t: DD
      } = (0, JD.F)(), [CD, cD] = (0, ID.useState)(!1), pD = (0, ID.useRef)(!1), iD = function(DD) {
        let {
          gameNameWithVariation: CD,
          lobbyName: cD
        } = DD;
        if ((0, Bp.m)(CD)) return kp;
        if ((0, yp.F)(cD)) return dp;
        return null
      }((0, OD.h)("connectedGame"));
      if (!iD || CD) return null;
      const fD = Gp.d[iD.target];
      return (0, wD.jsx)(lD.f, {
        tooltipInner: (0, wD.jsx)("div", {
          children: DD(fD.reportButtonTooltip)
        }),
        children: (0, wD.jsx)("div", {
          children: (0, wD.jsx)(Uc.O, {
            onClick: () => {
              pD.current || (pD.current = !0, (0, Gp.g)(iD.reportPolicyIds, fD).then((DD => {
                null !== DD && void 0 !== DD && DD.selectedPolicyId && (yD.gameBridge.send("reportLobbyOrGame", {
                  target: iD.target,
                  wf: DD.selectedPolicyId,
                  details: DD.Sf
                }), cD(!0))
              })).finally((() => {
                pD.current = !1
              })))
            }
          })
        })
      })
    }));
    const kp = {
        target: "customGame",
        reportPolicyIds: Tp.b
      },
      dp = {
        target: "lobby",
        reportPolicyIds: Tp.d
      };
    var Yp = cD(8482),
      Wp = cD(36307),
      sp = cD(36315),
      Ep = cD(36324),
      ep = cD(36327),
      hp = cD(36359);

    function rp(DD) {
      return DD instanceof Error && Ap.has(DD.message) ? DD.message : void 0
    }
    const Ap = new Set([hp.c.saveBusy.text, hp.c.saveClosed.text, hp.c.cropBusy.text]);
    let Fp = !1;
    async function Di(DD, CD) {
      var cD, ID;
      const {
        files: pD
      } = CD, iD = pD.replayKey();
      if (null === iD) return "none";
      if (Fp) throw new Error(hp.c.saveBusy.text);
      const fD = null !== (cD = null === (ID = pD.saveRefusal) || void 0 === ID ? void 0 : ID.call(pD)) && void 0 !== cD ? cD : null;
      if (null !== fD) throw new Error(fD);
      Fp = !0;
      try {
        return await async function(DD, CD, cD) {
          const {
            files: ID
          } = CD, pD = () => ID.replayKey() === cD, iD = (DD, CD) => {
            pD() && ID.markSaved(DD, CD)
          };
          let fD = null;
          if (CD.pickerSupported()) {
            try {
              if (fD = await CD.chooseFile(DD ? null : ID.fileHandle()), null === fD) return "tc"
            } catch (QD) {
              CD.onFallback(QD)
            }
            if (!pD()) throw new Error(hp.c.saveClosed.text)
          }
          const bD = await ID.encode();
          if (null === bD) {
            if (null !== fD) throw new Error(hp.c.saveClosed.text);
            return "none"
          }
          if (null !== fD) try {
            return await CD.write(fD, bD), iD(fD), "written"
          } catch (QD) {
            CD.onFallback(QD)
          }
          return iD(null, CD.download(bD)), "downloaded"
        }(DD, CD, iD)
      } finally {
        Fp = !1
      }
    }
    var Ci = cD(4337),
      ci = cD(62);
    const Ii = [1, 2, 4, 8, 16, 32, 64];

    function ii(DD, CD) {
      return Math.max(0, Math.min(DD, CD))
    }

    function fi(DD, CD, cD) {
      return cD <= CD ? 0 : (DD - CD) / (cD - CD) * 100
    }

    function bi(DD, CD, cD) {
      const ID = cD - CD;
      return Math.round(CD + DD / 100 * ID)
    }

    function Qi(DD, CD) {
      const cD = Math.floor(DD / CD / 60),
        ID = Math.floor(DD / CD % 60),
        pD = DD % CD;
      return `${cD.toString().padStart(2,"0")}:${ID.toString().padStart(2,"0")}:${pD.toString().padStart(2,"0")}`
    }

    function wi(DD) {
      return Number.isInteger(DD) || Ii.includes(DD) ? `${Math.round(DD)}\xd7` : `${DD.toFixed(1)}\xd7`
    }

    function Si(DD, CD) {
      const cD = Ii.indexOf(DD);
      if (-1 !== cD) return "in" === CD ? Ii[Math.min(cD + 1, Ii.length - 1)] : Ii[Math.max(cD - 1, 0)];
      if ("in" === CD) {
        for (const CD of Ii)
          if (CD >= DD) return CD;
        return DD
      }
      for (let ID = Ii.length - 1; ID >= 0; ID--)
        if (Ii[ID] <= DD) return Ii[ID];
      return Ii[0]
    }

    function Bi(DD, CD) {
      const cD = CD.getBoundingClientRect();
      if (cD.width <= 0) return 0;
      const ID = (DD - cD.left) / cD.width * 100;
      return Math.max(0, Math.min(100, ID))
    }

    function yi(DD, CD) {
      return CD <= 0 ? 0 : DD / CD * 100
    }

    function Mi(DD, CD, cD) {
      const ID = [];
      let pD = Math.ceil(DD / cD) * cD;
      for (; pD <= CD;) ID.push(pD), pD += cD;
      return ID
    }
    var ti = cD(36366);
    const Zi = [{
        label: "Linear",
        easing: ti.n
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: ti.g
      }, {
        label: "Ease Out",
        easing: ti.j
      }, {
        label: "Ease In Out",
        easing: ti.c
      }],
      oi = 200,
      vi = 150;

    function Ni(DD) {
      const CD = DD => Number(DD.toFixed(3)).toString();
      return `cubic-bezier(${CD(DD[0])}, ${CD(DD[1])}, ${CD(DD[2])}, ${CD(DD[3])})`
    }

    function gi(DD, CD) {
      return {
        cx: 25 + DD * vi,
        cy: 25 + (1 - CD) * vi
      }
    }

    function Xi(DD, CD, cD) {
      const ID = DD - cD.left,
        pD = CD - cD.top;
      return {
        x: lc.e.clamp((ID - 25) / vi, 0, 1),
        y: lc.e.clamp(1 - (pD - 25) / vi, -1, 2)
      }
    }

    function mi(DD, CD, cD, ID, pD) {
      return {
        x: (0, ti.t)(DD, cD, pD),
        y: (0, ti.t)(CD, ID, pD)
      }
    }
    const ni = (0, ID.memo)((function(DD) {
      let {
        value: CD,
        onChange: cD
      } = DD;
      const pD = (0, ID.useRef)(null),
        iD = (0, ID.useRef)(null),
        [fD, bD] = (0, ID.useState)(null),
        QD = (0, ID.useCallback)((() => {
          const DD = pD.current;
          if (!DD) return;
          const cD = DD.getContext("2d");
          if (!cD) return;
          const ID = window.devicePixelRatio || 1;
          DD.width = oi * ID, DD.height = oi * ID, cD.setTransform(ID, 0, 0, ID, 0, 0), cD.clearRect(0, 0, oi, oi), cD.fillStyle = "rgba(38, 52, 93, 0.85)", cD.fillRect(0, 0, oi, oi), cD.beginPath();
          const iD = gi(0, 0),
            bD = gi(1, 1);
          cD.moveTo(iD.cx, iD.cy), cD.lineTo(bD.cx, bD.cy), cD.strokeStyle = "rgba(164, 164, 164, 0.35)", cD.setLineDash([3, 3]), cD.stroke(), cD.setLineDash([]);
          const [QD, wD, SD, BD] = CD, yD = gi(QD, wD), MD = gi(SD, BD);
          cD.strokeStyle = "rgba(252, 211, 115, 0.55)", cD.lineWidth = 1.5, cD.beginPath(), cD.moveTo(iD.cx, iD.cy), cD.lineTo(yD.cx, yD.cy), cD.moveTo(bD.cx, bD.cy), cD.lineTo(MD.cx, MD.cy), cD.stroke(), cD.strokeStyle = "#fcd373", cD.lineWidth = 2, cD.beginPath();
          for (let CD = 0; CD <= 50; CD++) {
            const DD = mi(QD, wD, SD, BD, CD / 50),
              ID = gi(DD.x, DD.y);
            0 === CD ? cD.moveTo(ID.cx, ID.cy) : cD.lineTo(ID.cx, ID.cy)
          }
          cD.stroke();
          const tD = (DD, CD, ID) => {
            cD.beginPath(), cD.arc(DD, CD, ID ? 6 : 5, 0, 2 * Math.PI), cD.fillStyle = ID ? "#ffb914" : "#fcd373", cD.fill(), cD.strokeStyle = "#1a1f2e", cD.lineWidth = 1.5, cD.stroke()
          };
          tD(yD.cx, yD.cy, "p1" === fD), tD(MD.cx, MD.cy, "p2" === fD)
        }), [fD, CD]);
      (0, ID.useEffect)((() => {
        QD()
      }), [QD]);
      const SD = (0, ID.useCallback)(((DD, ID) => {
          const fD = pD.current,
            bD = iD.current;
          if (!fD || !bD) return;
          const QD = fD.getBoundingClientRect(),
            {
              x: wD,
              y: SD
            } = Xi(DD, ID, QD);
          cD("p1" === bD ? [wD, SD, CD[2], CD[3]] : [CD[0], CD[1], wD, SD])
        }), [cD, CD]),
        BD = (0, ID.useCallback)((DD => {
          const cD = pD.current;
          if (!cD) return;
          const ID = cD.getBoundingClientRect();
          let {
            x: fD,
            y: QD
          } = Xi(DD.clientX, DD.clientY, ID);
          fD = lc.e.clamp(fD, 0, 1), QD = lc.e.clamp(QD, 0, 1);
          const [wD, BD, yD, MD] = CD.map((DD => lc.e.clamp(DD, 0, 1))), tD = Math.hypot(fD - wD, QD - BD), ZD = Math.hypot(fD - yD, QD - MD), oD = tD <= ZD ? "p1" : "p2";
          ("p1" === oD ? tD : ZD) > .12 || (iD.current = oD, bD(oD), cD.setPointerCapture(DD.pointerId), SD(DD.clientX, DD.clientY))
        }), [SD, CD]),
        yD = (0, ID.useCallback)((DD => {
          iD.current && SD(DD.clientX, DD.clientY)
        }), [SD]),
        MD = (0, ID.useCallback)((DD => {
          iD.current = null, bD(null), DD.currentTarget.hasPointerCapture(DD.pointerId) && DD.currentTarget.releasePointerCapture(DD.pointerId)
        }), []);
      return (0, wD.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, wD.jsx)("canvas", {
          ref: pD,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: oi,
            height: oi
          },
          onPointerDown: BD,
          onPointerMove: yD,
          onPointerUp: MD,
          onPointerCancel: MD
        }), (0, wD.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: Ni(CD)
        })]
      })
    }));
    var Oi = cD(1660),
      Pi = cD(1645);
    const Hi = 12;

    function Ui(DD) {
      return {
        left: DD.left + DD.width / 2,
        top: DD.top - 8
      }
    }

    function xi(DD, CD) {
      const [cD, pD] = (0, ID.useState)(null);
      return (0, ID.useLayoutEffect)((() => {
        const cD = DD.current;
        if (!cD) return;
        const {
          width: ID,
          height: iD
        } = cD.getBoundingClientRect();
        pD(function(DD, CD, cD) {
          const ID = window.innerWidth,
            pD = window.innerHeight,
            iD = CD / 2;
          let fD = DD.left + DD.width / 2;
          fD = Math.max(Hi + iD, Math.min(fD, ID - Hi - iD));
          const bD = DD.top - 8 - Hi,
            QD = pD - DD.bottom - 8 - Hi,
            wD = bD < cD && QD >= bD;
          let SD;
          wD ? (SD = DD.bottom + 8, SD + cD > pD - Hi && (SD = pD - Hi - cD), SD = Math.max(Hi, SD)) : (SD = DD.top - 8, SD - cD < Hi && (SD = Hi + cD));
          return {
            left: fD,
            top: SD,
            placeBelow: wD
          }
        }(CD, ID, iD))
      }), [CD, DD]), cD
    }

    function qi(DD, CD, cD) {
      (0, ID.useEffect)((() => (0, Pi.d)("pointerdown", (ID => {
        var pD, iD;
        const fD = ID.target;
        fD instanceof Node && (null !== (pD = DD.current) && void 0 !== pD && pD.contains(fD) || null !== cD && void 0 !== cD && null !== (iD = cD.current) && void 0 !== iD && iD.contains(fD) || (0, Oi.l)(fD) || CD())
      }))), [cD, CD, DD])
    }

    function Ji(DD) {
      let {
        label: CD,
        value: cD,
        onChange: ID
      } = DD;
      return (0, wD.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, wD.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: CD
        }), (0, wD.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((DD, CD) => (0, wD.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, wD.jsx)("span", {
              children: DD
            }), (0, wD.jsx)("input", {
              type: "number",
              step: "any",
              value: cD[CD],
              onChange: DD => {
                const pD = Number.parseFloat(DD.target.value);
                if (Number.isNaN(pD)) return;
                const iD = [cD[0], cD[1], cD[2]];
                iD[CD] = pD, ID(iD)
              }
            })]
          }, DD)))
        })]
      })
    }
    const Ki = (0, ID.memo)((function(DD) {
        var CD, cD, pD;
        let {
          keyframe: fD,
          anchor: bD,
          hasOutgoingSegment: QD,
          onClose: SD,
          onApply: BD,
          onDelete: yD,
          onUseCurrentCamera: MD
        } = DD;
        const tD = (0, ID.useRef)(null),
          ZD = xi(tD, bD.rect),
          [oD, vD] = (0, ID.useState)((() => [fD.position[0], fD.position[1], fD.position[2]])),
          [ND, gD] = (0, ID.useState)((() => [fD.direction[0], fD.direction[1], fD.direction[2]])),
          [XD, mD] = (0, ID.useState)((() => fD.easing));
        (0, ID.useEffect)((() => {
          vD([fD.position[0], fD.position[1], fD.position[2]]), gD([fD.direction[0], fD.direction[1], fD.direction[2]]), mD(fD.easing)
        }), [fD]), qi(tD, SD);
        const nD = (0, ID.useCallback)((() => {
            BD({
              wy: fD.wy,
              position: oD,
              direction: ND,
              easing: XD
            }), SD()
          }), [ND, XD, fD.wy, BD, SD, oD]),
          OD = (0, ID.useCallback)((() => {
            yD(fD.wy), SD()
          }), [fD.wy, yD, SD]),
          PD = (0, ID.useCallback)((() => {
            const DD = MD();
            DD && (vD([DD.position[0], DD.position[1], DD.position[2]]), gD([DD.direction[0], DD.direction[1], DD.direction[2]]))
          }), [MD]),
          HD = Ui(bD.rect);
        return (0, wD.jsxs)("div", {
          ref: tD,
          className: iD()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (CD = null === ZD || void 0 === ZD ? void 0 : ZD.placeBelow) && void 0 !== CD && CD,
            Positioned: null !== ZD
          }),
          style: {
            left: `${null!==(cD=null===ZD||void 0===ZD?void 0:ZD.left)&&void 0!==cD?cD:HD.left}px`,
            top: `${null!==(pD=null===ZD||void 0===ZD?void 0:ZD.top)&&void 0!==pD?pD:HD.top}px`
          },
          onPointerDown: DD => {
            DD.stopPropagation()
          },
          children: [(0, wD.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, wD.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, wD.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", bD.wy]
            })]
          }), (0, wD.jsx)(Ji, {
            label: "Position",
            value: oD,
            onChange: vD
          }), (0, wD.jsx)(Ji, {
            label: "Direction",
            value: ND,
            onChange: gD
          }), QD && (0, wD.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, wD.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, wD.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: Zi.map((DD => {
                const CD = (cD = XD, ID = DD.easing, cD[0] === ID[0] && cD[1] === ID[1] && cD[2] === ID[2] && cD[3] === ID[3]);
                var cD, ID;
                return (0, wD.jsx)(Uc.P, {
                  className: iD()("ReplayKeyframePopoverPreset", {
                    Active: CD
                  }),
                  onClick: () => {
                    mD(DD.easing)
                  },
                  children: DD.label
                }, DD.label)
              }))
            }), (0, wD.jsx)(ni, {
              value: XD,
              onChange: mD
            })]
          }), (0, wD.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, wD.jsx)(Uc.i, {
              className: "ReplayViewerCompactButton",
              onClick: PD,
              children: "Use current view"
            }), (0, wD.jsx)(Uc.o, {
              className: "ReplayViewerCompactButton",
              onClick: nD,
              children: "Apply"
            }), (0, wD.jsx)(Uc.J, {
              className: "ReplayViewerCompactButton",
              onClick: OD,
              children: "Delete"
            })]
          })]
        })
      })),
      ai = (0, ID.memo)((function(DD) {
        var CD, cD, pD;
        let {
          anchor: fD,
          hasPlaybackMark: bD,
          onClose: QD,
          onMark: SD,
          onZoom: BD,
          onCrop: yD,
          onDeleteKeyframes: MD,
          onClearMark: tD
        } = DD;
        const ZD = (0, ID.useRef)(null),
          oD = xi(ZD, fD.rect),
          vD = Ui(fD.rect),
          ND = {
            startTick: fD.startTick,
            endTick: fD.endTick
          },
          gD = fD.endTick > fD.startTick;
        return qi(ZD, QD), (0, wD.jsx)("div", {
          ref: ZD,
          className: iD()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (CD = null === oD || void 0 === oD ? void 0 : oD.placeBelow) && void 0 !== CD && CD,
            Positioned: null !== oD
          }),
          style: {
            left: `${null!==(cD=null===oD||void 0===oD?void 0:oD.left)&&void 0!==cD?cD:vD.left}px`,
            top: `${null!==(pD=null===oD||void 0===oD?void 0:oD.top)&&void 0!==pD?pD:vD.top}px`
          },
          onPointerDown: DD => {
            DD.stopPropagation()
          },
          children: (0, wD.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, wD.jsx)(Uc.o, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                SD(ND)
              },
              disabled: !gD,
              children: (0, wD.jsx)("span", {
                children: " Play range "
              })
            }), (0, wD.jsx)(Uc.i, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                BD(ND)
              },
              children: (0, wD.jsx)("span", {
                children: " Zoom "
              })
            }), (0, wD.jsx)(Uc.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                yD(ND)
              },
              disabled: !gD,
              children: (0, wD.jsx)("span", {
                children: " Crop "
              })
            }), (0, wD.jsx)(Uc.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                MD(ND)
              },
              children: (0, wD.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), bD && (0, wD.jsx)(Uc.P, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                tD()
              },
              children: (0, wD.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      Vi = (0, ID.memo)((function(DD) {
        var CD, cD;
        let {
          maxTick: pD,
          displayTick: fD,
          Yq: bD,
          cameraKeyframes: QD,
          playbackMark: SD,
          onSeek: BD,
          onPause: yD,
          onScrubTickChange: MD,
          onMoveCameraKeyframe: tD,
          onUpdateCameraKeyframe: ZD,
          onDeleteCameraKeyframe: oD,
          onUseCurrentCamera: vD,
          onMarkRange: ND,
          onCropRange: gD,
          onDeleteKeyframesInRange: XD,
          onClearMark: mD,
          zoomLevel: nD,
          onZoomLevelChange: OD
        } = DD;
        const PD = (0, ID.useRef)(null),
          HD = (0, ID.useRef)(null),
          UD = (0, ID.useRef)(!1),
          xD = (0, ID.useRef)(!1),
          qD = (0, ID.useRef)(nD),
          JD = (0, ID.useRef)(null),
          KD = (0, ID.useRef)(null),
          aD = (0, ID.useRef)(null),
          VD = (0, ID.useRef)(null),
          [zD, jD] = (0, ID.useState)(null),
          [lD, LD] = (0, ID.useState)(fD),
          [TD, GD] = (0, ID.useState)(null),
          [RD, kD] = (0, ID.useState)(null),
          [dD, YD] = (0, ID.useState)(null),
          [WD, sD] = (0, ID.useState)(null),
          ED = (0, ID.useMemo)((() => QD.map((DD => DD.wy))), [QD]),
          eD = null !== zD && void 0 !== zD ? zD : fD,
          {
            viewStart: uD,
            viewEnd: hD
          } = (0, ID.useMemo)((() => function(DD) {
            const CD = DD.maxTick + 1,
              cD = Math.max(1, Math.ceil(CD / DD.zoomLevel)),
              ID = Math.floor(cD / 2);
            let pD = DD.centerTick - ID;
            return pD = Math.max(0, Math.min(pD, DD.maxTick - cD + 1)), {
              viewStart: pD,
              viewEnd: Math.min(DD.maxTick, pD + cD - 1)
            }
          }({
            maxTick: pD,
            zoomLevel: nD,
            centerTick: lD
          })), [pD, nD, lD]);
        (0, ID.useEffect)((() => {
          if (null !== zD || null !== KD.current || null !== aD.current || null !== VD.current) return;
          if (UD.current) return void(UD.current = !1);
          if (xD.current) return void(xD.current = !1);
          const DD = qD.current !== nD;
          qD.current = nD, DD && LD(fD)
        }), [nD, fD, zD]);
        const rD = (0, ID.useCallback)((DD => {
            let CD = ii(DD, pD);
            return SD && (CD = Math.max(SD.inTick, Math.min(CD, SD.outTick))), CD
          }), [pD, SD]),
          AD = (0, ID.useCallback)(((DD, CD) => {
            const cD = rD(DD);
            BD(cD), CD && LD(cD)
          }), [rD, BD]),
          FD = (0, ID.useCallback)(((DD, CD) => {
            const cD = rD(DD);
            jD(cD), MD(cD), AD(cD, CD)
          }), [rD, AD, MD]),
          DC = (0, ID.useCallback)((() => {
            jD((DD => (null !== DD && LD(DD), null))), MD(null)
          }), [MD]),
          CC = (0, ID.useCallback)((() => {
            YD(null), sD(null)
          }), []),
          cC = (0, ID.useCallback)((DD => {
            const CD = PD.current;
            if (!CD) return 0;
            return ii(bi(Bi(DD, CD), uD, hD), pD)
          }), [pD, hD, uD]),
          IC = (0, ID.useCallback)((DD => {
            const CD = HD.current;
            if (!CD) return 0;
            return ii(bi(Bi(DD, CD), 0, pD), pD)
          }), [pD]),
          pC = (0, ID.useMemo)((() => {
            if (!TD) return [...ED];
            const DD = ED.filter((DD => DD !== TD.fromTick));
            return DD.push(TD.previewTick), DD.sort(((DD, CD) => DD - CD)), DD
          }), [ED, TD]),
          iC = (0, ID.useMemo)((() => {
            var DD;
            return RD && null !== (DD = QD.find((DD => DD.wy === RD.wy))) && void 0 !== DD ? DD : null
          }), [QD, RD]),
          fC = (0, ID.useMemo)((() => !!iC && QD.some((DD => DD.wy > iC.wy))), [QD, iC]);
        (0, ID.useEffect)((() => {
          RD && !iC && kD(null)
        }), [RD, iC]), (0, ID.useEffect)((() => {
          if (!WD) return () => {};
          const DD = DD => {
            "Escape" === DD.key && CC()
          };
          return window.addEventListener("keydown", DD), () => {
            window.removeEventListener("keydown", DD)
          }
        }), [CC, WD]);
        const bC = (0, ID.useCallback)(((DD, CD) => {
            CC(), yD(), BD(DD, {
              ignorePlaybackMark: !0
            }), kD({
              wy: DD,
              rect: CD.getBoundingClientRect()
            })
          }), [CC, yD, BD]),
          QC = (0, ID.useCallback)(((DD, CD) => cD => {
            0 === cD.button && (cD.stopPropagation(), kD(null), CC(), yD(), JD.current = {
              fromTick: DD,
              startX: cD.clientX,
              startY: cD.clientY,
              didDrag: !1,
              track: CD
            }, GD({
              fromTick: DD,
              previewTick: DD,
              track: CD
            }), cD.currentTarget.setPointerCapture(cD.pointerId))
          }), [CC, yD]),
          wC = (0, ID.useCallback)((DD => {
            if (!TD) return;
            DD.stopPropagation();
            const CD = JD.current;
            if (CD && !CD.didDrag) {
              const cD = DD.clientX - CD.startX,
                ID = DD.clientY - CD.startY;
              Math.hypot(cD, ID) > 5 && (CD.didDrag = !0)
            }
            const cD = "detail" === TD.track ? cC(DD.clientX) : IC(DD.clientX);
            cD !== TD.previewTick && GD({
              ...TD,
              previewTick: cD
            })
          }), [TD, cC, IC]),
          SC = (0, ID.useCallback)((DD => {
            if (!TD) return;
            DD.stopPropagation();
            const CD = JD.current,
              cD = "detail" === TD.track ? cC(DD.clientX) : IC(DD.clientX);
            CD && !CD.didDrag ? bC(CD.fromTick, DD.currentTarget) : cD !== TD.fromTick && tD(TD.fromTick, cD), GD(null), JD.current = null, DD.currentTarget.releasePointerCapture(DD.pointerId)
          }), [TD, tD, bC, cC, IC]),
          BC = (0, ID.useCallback)((DD => {
            if (0 !== DD.button) return;
            kD(null), yD();
            const CD = cC(DD.clientX);
            KD.current = {
              pointerId: DD.pointerId,
              startX: DD.clientX,
              startY: DD.clientY,
              startTick: CD,
              currentTick: CD,
              didSelect: !1
            }, YD(null), sD(null), DD.currentTarget.setPointerCapture(DD.pointerId)
          }), [yD, cC]),
          yC = (0, ID.useCallback)((DD => {
            const CD = KD.current;
            if (!CD || CD.pointerId !== DD.pointerId) return;
            const cD = cC(DD.clientX);
            if (CD.currentTick = cD, !CD.didSelect) {
              const cD = DD.clientX - CD.startX,
                ID = DD.clientY - CD.startY;
              if (Math.hypot(cD, ID) <= 5) return;
              CD.didSelect = !0
            }
            const ID = Math.min(CD.startTick, cD),
              pD = Math.max(CD.startTick, cD);
            YD({
              startTick: ID,
              endTick: pD
            })
          }), [cC]),
          MC = (0, ID.useCallback)((DD => {
            const CD = KD.current;
            if (!CD || CD.pointerId !== DD.pointerId) return;
            if (KD.current = null, DD.currentTarget.releasePointerCapture(DD.pointerId), !CD.didSelect) return CC(), void AD(CD.startTick, !0);
            const cD = cC(DD.clientX),
              ID = Math.min(CD.startTick, cD),
              pD = Math.max(CD.startTick, cD),
              iD = {
                startTick: ID,
                endTick: pD
              };
            YD(iD);
            const fD = PD.current;
            if (!fD) return;
            const bD = fD.getBoundingClientRect(),
              QD = fi(ID, uD, hD) / 100,
              wD = fi(pD, uD, hD) / 100,
              SD = bD.left + QD * bD.width,
              BD = bD.left + wD * bD.width;
            sD({
              ...iD,
              rect: new DOMRect(SD, bD.top, Math.max(BD - SD, 1), bD.height)
            })
          }), [CC, AD, cC, hD, uD]),
          tC = (0, ID.useCallback)((DD => CD => {
            if (0 !== CD.button) return;
            CD.stopPropagation(), kD(null), CC(), yD(), aD.current = {
              pointerId: CD.pointerId,
              track: DD
            }, CD.currentTarget.setPointerCapture(CD.pointerId);
            const cD = "detail" === DD ? cC(CD.clientX) : IC(CD.clientX);
            FD(cD, !1)
          }), [CC, yD, FD, cC, IC]),
          ZC = (0, ID.useCallback)((DD => {
            const CD = aD.current;
            if (!CD || CD.pointerId !== DD.pointerId) return;
            DD.stopPropagation();
            const cD = "detail" === CD.track ? cC(DD.clientX) : IC(DD.clientX);
            FD(cD, !1)
          }), [FD, cC, IC]),
          oC = (0, ID.useCallback)((DD => {
            const CD = aD.current;
            CD && CD.pointerId === DD.pointerId && (DD.stopPropagation(), aD.current = null, DD.currentTarget.releasePointerCapture(DD.pointerId), DC())
          }), [DC]),
          vC = (0, ID.useCallback)((DD => {
            0 === DD.button && (CC(), yD(), VD.current = {
              pointerId: DD.pointerId
            }, DD.currentTarget.setPointerCapture(DD.pointerId), FD(IC(DD.clientX), !0))
          }), [CC, yD, FD, IC]),
          NC = (0, ID.useCallback)((DD => {
            const CD = VD.current;
            CD && CD.pointerId === DD.pointerId && FD(IC(DD.clientX), !0)
          }), [FD, IC]),
          gC = (0, ID.useCallback)((DD => {
            const CD = VD.current;
            CD && CD.pointerId === DD.pointerId && (VD.current = null, DD.currentTarget.releasePointerCapture(DD.pointerId), DC())
          }), [DC]),
          XC = (0, ID.useCallback)((DD => {
            const CD = Math.max(1, DD.endTick - DD.startTick + 1),
              cD = pD + 1,
              ID = cD / CD,
              iD = Math.max(1, Math.ceil(cD / ID)),
              fD = DD.startTick + Math.floor((iD - 1) / 2);
            xD.current = !0, qD.current = ID, LD(ii(fD, pD)), OD(ID), CC()
          }), [CC, pD, OD]),
          mC = (0, ID.useCallback)((DD => {
            ND(DD), CC()
          }), [CC, ND]),
          nC = (0, ID.useCallback)((DD => {
            gD(DD), CC()
          }), [CC, gD]),
          OC = (0, ID.useCallback)((DD => {
            XD(DD), CC()
          }), [CC, XD]),
          PC = (0, ID.useCallback)((() => {
            mD(), CC()
          }), [CC, mD]);
        (0, ID.useEffect)((() => {
          const DD = PD.current;
          if (!DD) return () => {};
          const CD = CD => {
            CD.preventDefault();
            const cD = ii(bi(Bi(CD.clientX, DD), uD, hD), pD),
              ID = CD.deltaY < 0 ? "in" : "out",
              iD = Si(nD, ID);
            iD !== nD && (UD.current = !0, LD(cD), OD(iD))
          };
          return DD.addEventListener("wheel", CD, {
            passive: !1
          }), () => {
            DD.removeEventListener("wheel", CD)
          }
        }), [pD, OD, hD, uD, nD]);
        const HC = fi(eD, uD, hD),
          UC = yi(eD, pD),
          xC = yi(uD, pD),
          qC = pD > 0 ? yi(hD, pD) : 100,
          JC = null !== SD,
          KC = null !== (CD = null === SD || void 0 === SD ? void 0 : SD.inTick) && void 0 !== CD ? CD : 0,
          aC = null !== (cD = null === SD || void 0 === SD ? void 0 : SD.outTick) && void 0 !== cD ? cD : pD,
          VC = yi(KC, pD),
          zC = Math.max(yi(aC, pD) - VC, 0),
          jC = fi(Math.max(KC, uD), uD, hD),
          lC = fi(Math.min(aC, hD), uD, hD),
          LC = Math.max(lC - jC, 0),
          TC = JC && aC >= uD && KC <= hD,
          GC = fi(KC, uD, hD),
          RC = fi(aC, uD, hD),
          kC = JC && KC >= uD && KC <= hD,
          dC = JC && aC >= uD && aC <= hD,
          YC = yi(KC, pD),
          WC = yi(aC, pD),
          sC = null !== dD && void 0 !== dD ? dD : WD ? {
            startTick: WD.startTick,
            endTick: WD.endTick
          } : null,
          EC = sC ? fi(Math.max(sC.startTick, uD), uD, hD) : 0,
          eC = sC ? fi(Math.min(sC.endTick, hD), uD, hD) : 0,
          uC = Math.max(eC - EC, 0),
          hC = null !== sC && sC.endTick >= uD && sC.startTick <= hD,
          rC = (0, ID.useMemo)((() => Mi(0, pD, bD)), [pD, bD]),
          AC = (0, ID.useMemo)((() => Mi(uD, hD, bD)), [uD, hD, bD]),
          FC = (0, ID.useMemo)((() => pC.filter((DD => DD >= uD && DD <= hD))), [pC, hD, uD]),
          Dc = (0, ID.useCallback)(((DD, CD, cD) => {
            const ID = "detail" === CD ? fi(DD, uD, hD) : yi(DD, pD),
              fD = null !== TD && cD === TD.fromTick,
              bD = null !== RD && RD.wy === cD;
            return (0, wD.jsx)("button", {
              type: "button",
              className: iD()("ReplayTimelineCameraKeyframeMarker", "detail" === CD ? "Detail" : "Overview", {
                Dragging: fD,
                Selected: bD
              }),
              style: {
                left: `${ID}%`
              },
              onPointerDown: QC(cD, CD),
              onPointerMove: wC,
              onPointerUp: SC,
              onPointerCancel: SC,
              "aria-label": `Camera keyframe at tick ${cD}`
            }, `cam-${CD}-${cD}`)
          }), [QC, RD, SC, TD, pD, wC, hD, uD]),
          Cc = (0, ID.useCallback)((DD => TD && DD === TD.previewTick ? TD.fromTick : DD), [TD]);
        return pD <= 0 ? null : (0, wD.jsxs)("div", {
          className: "ReplayTimeline",
          children: [RD && iC && (0, ci.createPortal)((0, wD.jsx)(Ki, {
            keyframe: iC,
            anchor: RD,
            hasOutgoingSegment: fC,
            onClose: () => {
              kD(null)
            },
            onApply: ZD,
            onDelete: oD,
            onUseCurrentCamera: vD
          }), document.body), WD && (0, ci.createPortal)((0, wD.jsx)(ai, {
            anchor: WD,
            hasPlaybackMark: JC,
            onClose: CC,
            onMark: mC,
            onZoom: XC,
            onCrop: nC,
            onDeleteKeyframes: OC,
            onClearMark: PC
          }), document.body), (0, wD.jsxs)("div", {
            className: iD()("ReplayTimelineOverviewSection", {
              Hidden: nD <= 1
            }),
            children: [(0, wD.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, wD.jsxs)("div", {
              ref: HD,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: vC,
              onPointerMove: NC,
              onPointerUp: gC,
              onPointerCancel: gC,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": pD,
              "aria-valuenow": eD,
              tabIndex: 0,
              children: [rC.map((DD => {
                const CD = yi(DD, pD);
                return (0, wD.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${CD}%`
                  }
                }, DD)
              })), JC && (0, wD.jsxs)(wD.Fragment, {
                children: [(0, wD.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${VC}%`,
                    width: `${zC}%`
                  }
                }), (0, wD.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${YC}%`
                  },
                  "aria-hidden": !0
                }), (0, wD.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${WC}%`
                  },
                  "aria-hidden": !0
                })]
              }), pC.map((DD => Dc(DD, "overview", Cc(DD)))), (0, wD.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${xC}%`,
                  width: `${Math.max(qC-xC,.5)}%`
                }
              }), (0, wD.jsx)("button", {
                type: "button",
                className: iD()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== zD
                }),
                style: {
                  left: `${UC}%`
                },
                onPointerDown: tC("overview"),
                onPointerMove: ZC,
                onPointerUp: oC,
                onPointerCancel: oC,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, wD.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, wD.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, wD.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, wD.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Qi(uD, bD), " \u2013 ", Qi(hD, bD), nD > 1 && (0, wD.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: wi(nD)
                })]
              })]
            }), (0, wD.jsxs)("div", {
              ref: PD,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: BC,
              onPointerMove: yC,
              onPointerUp: MC,
              onPointerCancel: MC,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": uD,
              "aria-valuemax": hD,
              "aria-valuenow": eD,
              tabIndex: 0,
              children: [AC.map((DD => {
                const CD = fi(DD, uD, hD);
                return (0, wD.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${CD}%`
                  }
                }, DD)
              })), TC && (0, wD.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${jC}%`,
                  width: `${LC}%`
                }
              }), kC && (0, wD.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${GC}%`
                },
                "aria-label": `Play range start at tick ${KC}`
              }), dC && (0, wD.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${RC}%`
                },
                "aria-label": `Play range end at tick ${aC}`
              }), hC && sC && (0, wD.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${EC}%`,
                  width: `${uC}%`
                }
              }), FC.map((DD => Dc(DD, "detail", Cc(DD)))), (0, wD.jsx)("button", {
                type: "button",
                className: iD()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== zD
                }),
                style: {
                  left: `${HC}%`
                },
                onPointerDown: tC("detail"),
                onPointerMove: ZC,
                onPointerUp: oC,
                onPointerCancel: oC,
                "aria-label": "Scrub playhead"
              })]
            }), (0, wD.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, wD.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      zi = (0, ID.memo)((function(DD) {
        let {
          enabled: CD
        } = DD;
        const cD = (0, ID.useRef)(!1),
          pD = (0, ID.useRef)(null),
          [fD, bD] = (0, ID.useState)(!1),
          QD = (0, ID.useCallback)((DD => {
            CD && 0 === DD.button && (cD.current = !0, bD(!0), pD.current = {
              x: DD.clientX,
              y: DD.clientY
            }, DD.currentTarget.setPointerCapture(DD.pointerId))
          }), [CD]),
          SD = (0, ID.useCallback)((DD => {
            if (!CD || !cD.current || !pD.current) return;
            const ID = DD.clientX - pD.current.x,
              iD = DD.clientY - pD.current.y;
            pD.current = {
              x: DD.clientX,
              y: DD.clientY
            }, yD.gameBridge.send("dragReplayCamera", {
              dx: ID,
              dy: iD
            })
          }), [CD]),
          BD = (0, ID.useCallback)((DD => {
            cD.current && (cD.current = !1, bD(!1), pD.current = null, DD.currentTarget.releasePointerCapture(DD.pointerId))
          }), []);
        return CD ? (0, wD.jsx)("div", {
          className: iD()("ReplayViewerCameraDragSurface", {
            Dragging: fD
          }),
          onPointerDown: QD,
          onPointerMove: SD,
          onPointerUp: BD,
          onPointerCancel: BD,
          "aria-hidden": !0
        }) : null
      }));
    var ji = cD(36375),
      li = cD(36379);
    const Li = (0, ID.memo)((function(DD) {
        var CD, cD, pD;
        let {
          anchorRect: fD,
          anchorRef: QD,
          onClose: SD
        } = DD;
        const BD = (0, ID.useRef)(null),
          yD = xi(BD, fD),
          [MD, tD] = (0, ID.useState)(li.c),
          ZD = (0, ID.useMemo)((() => Object.values(MD).every((DD => DD))), [MD]);
        (0, bD.f)("replayViewer|uiVisibilityChanged", (() => {
          tD((0, li.c)())
        })), qi(BD, SD, QD);
        const oD = (0, ID.useCallback)(((DD, CD) => {
            (0, li.h)(DD, CD), tD((0, li.c)())
          }), []),
          vD = (0, ID.useCallback)((DD => {
            for (const {
                group: CD
              }
              of ji.f)(0, li.h)(CD, DD);
            tD((0, li.c)())
          }), []),
          ND = Ui(fD);
        return (0, ci.createPortal)((0, wD.jsxs)("div", {
          ref: BD,
          className: iD()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (CD = null === yD || void 0 === yD ? void 0 : yD.placeBelow) && void 0 !== CD && CD,
            Positioned: null !== yD
          }),
          style: {
            left: `${null!==(cD=null===yD||void 0===yD?void 0:yD.left)&&void 0!==cD?cD:ND.left}px`,
            top: `${null!==(pD=null===yD||void 0===yD?void 0:yD.top)&&void 0!==pD?pD:ND.top}px`
          },
          onPointerDown: DD => {
            DD.stopPropagation()
          },
          children: [(0, wD.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, wD.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, wD.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, wD.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, wD.jsx)("input", {
                type: "checkbox",
                checked: ZD,
                onChange: DD => {
                  vD(DD.target.checked)
                }
              }), (0, wD.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), ji.f.map((DD => {
              let {
                group: CD,
                label: cD
              } = DD;
              return (0, wD.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, wD.jsx)("input", {
                  type: "checkbox",
                  checked: MD[CD],
                  onChange: DD => {
                    oD(CD, DD.target.checked)
                  }
                }), (0, wD.jsx)("span", {
                  children: cD
                })]
              }, CD)
            }))]
          })]
        }), document.body)
      })),
      Ti = (0, ID.memo)((function(DD) {
        let {
          disabled: CD
        } = DD;
        const cD = (0, ID.useRef)(null),
          [pD, iD] = (0, ID.useState)(!1),
          [fD, bD] = (0, ID.useState)(null),
          QD = (0, ID.useCallback)((() => {
            cD.current && (bD(cD.current.getBoundingClientRect()), iD((DD => !DD)))
          }), []),
          SD = (0, ID.useCallback)((() => {
            iD(!1)
          }), []);
        return (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)("div", {
            ref: cD,
            children: (0, wD.jsx)(Uc.i, {
              className: "ReplayViewerActionButton",
              onClick: QD,
              disabled: CD,
              children: (0, wD.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), pD && fD && (0, wD.jsx)(Li, {
            anchorRect: fD,
            anchorRef: cD,
            onClose: SD
          })]
        })
      })),
      Gi = ["freeCamUp", "freeCamDown"];

    function Ri(DD, CD) {
      yD.gameBridge.send("holdReplayFreecamVertical", {
        action: DD,
        Lb: CD
      })
    }
    const ki = (0, ID.memo)((function() {
        (0, ID.useEffect)((() => () => {
          ! function() {
            yD.gameBridge.send("moveReplayFreecam", null);
            for (const DD of Gi) Ri(DD, !1)
          }()
        }), []);
        const DD = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("moveReplayFreecam", DD)
          }), []),
          CD = (0, ID.useCallback)((DD => ({
            onTouchStart: CD => {
              CD.preventDefault(), CD.stopPropagation(), Ri(DD, !0)
            },
            onTouchEnd: CD => {
              CD.preventDefault(), CD.stopPropagation(), Ri(DD, !1)
            },
            onTouchCancel: CD => {
              CD.preventDefault(), CD.stopPropagation(), Ri(DD, !1)
            }
          })), []);
        return (0, wD.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, wD.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, wD.jsx)(PC, {
              onMove: DD,
              mode: "pinned"
            })
          }), (0, wD.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, wD.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...CD("freeCamUp"),
              children: (0, wD.jsx)(LD.c, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, wD.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...CD("freeCamDown"),
              children: (0, wD.jsx)(LD.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      di = [],
      Yi = (0, ID.memo)((function() {
        const DD = (0, eD.o)();
        return (0, OD.c)("replayViewerRequested", (DD => {
          (0, eD.l)("toggle" === DD ? !(0, eD.i)() : "open" === DD)
        })), DD ? (0, wD.jsx)(Wi, {}) : null
      })),
      Wi = (0, ID.memo)((function() {
        var DD, CD, cD, pD, fD, bD, QD, SD, BD, MD, tD, ZD;
        const oD = ID.useRef(null),
          [vD, ND] = (0, ID.useState)(null),
          [gD, XD] = (0, ID.useState)(1),
          [mD, nD] = (0, ID.useState)(null),
          [UD, xD] = (0, ID.useState)(!1),
          {
            isTouchScreen: qD
          } = (0, PD.o)(["isTouchScreen"]),
          JD = (0, OD.h)("replay"),
          KD = (0, OD.h)("replayEdits"),
          aD = null !== JD,
          VD = null !== (DD = null === JD || void 0 === JD ? void 0 : JD.wy) && void 0 !== DD ? DD : 0,
          zD = null !== (CD = null === JD || void 0 === JD ? void 0 : JD.totalTicks) && void 0 !== CD ? CD : 0,
          jD = Math.max(0, zD - 1),
          TD = null !== (cD = null === JD || void 0 === JD ? void 0 : JD.playing) && void 0 !== cD && cD,
          GD = null !== (pD = null === JD || void 0 === JD ? void 0 : JD.speed) && void 0 !== pD ? pD : 1,
          RD = null !== (fD = null === JD || void 0 === JD ? void 0 : JD.Yq) && void 0 !== fD ? fD : 20,
          kD = null !== mD && void 0 !== mD ? mD : VD,
          dD = null !== (bD = null === JD || void 0 === JD ? void 0 : JD.freecam) && void 0 !== bD && bD,
          YD = null !== (QD = null === JD || void 0 === JD ? void 0 : JD.cameraMode) && void 0 !== QD ? QD : "recording",
          WD = null !== (SD = null === KD || void 0 === KD ? void 0 : KD.cameraKeyframes) && void 0 !== SD ? SD : di,
          sD = null !== (BD = null === KD || void 0 === KD ? void 0 : KD.playbackMark) && void 0 !== BD ? BD : null,
          ED = null !== (MD = null === KD || void 0 === KD ? void 0 : KD.fileName) && void 0 !== MD ? MD : null,
          uD = null !== (tD = null === KD || void 0 === KD ? void 0 : KD.unsavedChanges) && void 0 !== tD && tD,
          hD = null !== (ZD = null === KD || void 0 === KD ? void 0 : KD.suggestSaveAs) && void 0 !== ZD && ZD,
          rD = (0, OD.h)("replayVideoExporting"),
          AD = !rD && aD && ("freecam" === YD || ("recording" === YD || "keyframe" === YD) && !TD),
          FD = qD && aD && "freecam" === YD && !rD && !UD;
        (0, Ci.e)(!0, !0, "ReplayViewerOverlay"), (0, ID.useEffect)((() => {
          yD.gameBridge.send("syncReplayCameraMode", null)
        }), [dD]);
        const DC = (0, ID.useCallback)(((DD, CD) => {
            yD.gameBridge.send("seekReplay", {
              wy: DD,
              ignorePlaybackMark: null === CD || void 0 === CD ? void 0 : CD.ignorePlaybackMark
            })
          }), []),
          CC = (0, ID.useCallback)((() => {
            yD.gameBridge.send("setReplayPlaying", !1)
          }), []),
          cC = (0, ID.useCallback)(((DD, CD) => {
            yD.gameBridge.send("moveReplayCameraKeyframe", {
              from: DD,
              to: CD
            })
          }), []),
          IC = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("setReplayCameraKeyframe", DD)
          }), []),
          pC = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("deleteReplayCameraKeyframes", {
              start: DD,
              end: DD
            })
          }), []),
          iC = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("deleteReplayCameraKeyframes", {
              start: DD.startTick,
              end: DD.endTick
            })
          }), []),
          fC = (0, ID.useCallback)((() => yD.gameBridge.lookup("replayCamera", null)), []),
          bC = (0, ID.useCallback)((DD => {
            nD(DD)
          }), []),
          QC = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("setReplayPlaybackMark", {
              inTick: DD.startTick,
              outTick: DD.endTick
            })
          }), []),
          wC = (0, ID.useCallback)((() => {
            yD.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          SC = (0, ID.useCallback)((DD => {
            const CD = yD.gameBridge.latest("replay");
            if (null === CD || DD.endTick <= DD.startTick) return;
            const cD = DD.startTick,
              ID = DD.endTick;
            hI.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((DD => {
              var pD;
              if (!0 !== DD) return;
              if ((null === (pD = yD.gameBridge.latest("replay")) || void 0 === pD ? void 0 : pD.id) !== CD.id) return;
              yD.gameBridge.send("cropReplay", {
                start: cD,
                end: ID
              }) && (nD(null), XD(1))
            }))
          }), []),
          BC = (0, ID.useCallback)(((DD, CD) => {
            ND(null), XD(1), nD(null), (0, Wp.d)().open(DD, CD).catch((DD => {
              console.error(DD), ND(DD instanceof Error ? DD.message : "Failed to parse recording")
            }))
          }), []),
          yC = (0, ID.useCallback)(((DD, CD) => {
            null !== yD.gameBridge.latest("connectedGame").websocketUrl ? hI.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((cD => {
              !0 === cD && BC(DD, CD)
            })) : BC(DD, CD)
          }), [BC]),
          MC = (0, ID.useCallback)((DD => {
            var CD;
            const cD = null === (CD = DD.target.files) || void 0 === CD ? void 0 : CD[0];
            if (DD.target.value = "", !cD) return;
            const ID = new FileReader;
            ID.onload = () => {
              yC(new Uint8Array(ID.result), {
                fileName: cD.name
              })
            }, ID.onerror = () => {
              ND("Failed to read file")
            }, ID.readAsArrayBuffer(cD)
          }), [yC]),
          tC = (0, ID.useCallback)((() => {
            const DD = () => {
              var DD;
              null === (DD = oD.current) || void 0 === DD || DD.click()
            };
            (0, ep.l)() ? (0, ep.g)().then((DD => {
              DD && yC(DD.bytes, {
                fileHandle: DD.handle
              })
            })).catch((CD => {
              console.error(CD), DD()
            })): DD()
          }), [yC]),
          ZC = (0, ID.useCallback)((async function() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let CD;
            try {
              CD = await Di(DD, {
                files: (0, Wp.d)(),
                pickerSupported: ep.l,
                chooseFile: ep.c,
                write: ep.n,
                download: Ep.m,
                onFallback: console.error
              })
            } catch (cD) {
              return void(DD => {
                console.error(DD), hI.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: rp(DD),
                  confirmText: "OK"
                })
              })(cD)
            }
            "written" !== CD && "downloaded" !== CD || (() => {
              const DD = hI.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                DD.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          oC = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("replayAction", DD)
          }), []),
          vC = (0, ID.useCallback)((DD => {
            XD((CD => Si(CD, DD)))
          }), []),
          NC = (0, ID.useCallback)((DD => {
            if (!yD.gameBridge.latest("replayVideoExporting")) switch (DD) {
              case "replayLoad":
                tC();
                break;
              case "replaySave":
                ZC(!1);
                break;
              case "replaySaveAs":
                ZC(!0);
                break;
              case "replayTimelineZoomIn":
                vC("in");
                break;
              case "replayTimelineZoomOut":
                vC("out")
            }
          }), [tC, ZC, vC]);
        (0, OD.c)("replayUiActionRequested", NC);
        const gC = (0, ID.useCallback)((DD => {
            yD.gameBridge.send("setReplayCameraMode", DD)
          }), []),
          XC = aD ? Uc.i : Uc.o,
          mC = uD && !hD ? Uc.o : Uc.i,
          nC = uD && hD ? Uc.o : Uc.i;
        return (0, wD.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, wD.jsx)(zi, {
            enabled: AD
          }), FD && (0, wD.jsx)(ki, {}), (0, wD.jsx)("input", {
            ref: oD,
            type: "file",
            accept: Ep.e,
            className: "ReplayViewerFileInput",
            onChange: MC
          }), (0, wD.jsxs)("div", {
            className: iD()("ReplayViewerBar", {
              Collapsed: UD
            }),
            children: [(0, wD.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                UD ? xD(!1) : aD ? xD(!0) : (0, eD.e)()
              },
              "aria-expanded": !UD,
              "aria-label": UD ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, wD.jsx)(LD.c, {
                name: UD ? "angle-up" : "angle-down"
              })
            }), !UD && (0, wD.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [aD && zD > 0 && (0, wD.jsx)(Vi, {
                maxTick: jD,
                displayTick: kD,
                Yq: RD,
                cameraKeyframes: WD,
                playbackMark: sD,
                onSeek: DC,
                onPause: CC,
                onScrubTickChange: bC,
                onMoveCameraKeyframe: cC,
                onUpdateCameraKeyframe: IC,
                onDeleteCameraKeyframe: pC,
                onUseCurrentCamera: fC,
                onMarkRange: QC,
                onCropRange: SC,
                onDeleteKeyframesInRange: iC,
                onClearMark: wC,
                zoomLevel: gD,
                onZoomLevelChange: XD
              }, jD), (0, wD.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, wD.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, wD.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [aD && (0, wD.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== ED && void 0 !== ED ? ED : "Unsaved recording", uD ? " *" : ""]
                    }), (0, wD.jsxs)(XC, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        NC("replayLoad")
                      },
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, wD.jsxs)(Uc.i, {
                      className: "ReplayViewerActionButton",
                      onClick: eD.e,
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, wD.jsxs)(mC, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        NC("replaySave")
                      },
                      disabled: !aD,
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, wD.jsxs)(Uc.i, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yD.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !aD,
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, wD.jsxs)(nC, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        NC("replaySaveAs")
                      },
                      disabled: !aD,
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, wD.jsxs)(Uc.i, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yD.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !aD || 0 === zD || rD,
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, wD.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, wD.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, wD.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, wD.jsx)(HD.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, wD.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, wD.jsx)(lD.f, {
                        tooltipInner: (0, wD.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, wD.jsxs)(Uc.P, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === YD,
                          onClick: () => {
                            gC("recording")
                          },
                          disabled: !aD,
                          children: ["Recorded ", (0, wD.jsx)(LD.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, wD.jsx)(lD.f, {
                        tooltipInner: (0, wD.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, wD.jsxs)(Uc.P, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === YD,
                          onClick: () => {
                            gC("freecam")
                          },
                          disabled: !aD,
                          children: ["Free ", (0, wD.jsx)(LD.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, wD.jsx)(lD.f, {
                        tooltipInner: (0, wD.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, wD.jsxs)(Uc.P, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === YD,
                          onClick: () => {
                            gC("keyframe")
                          },
                          disabled: !aD,
                          children: ["Preview ", (0, wD.jsx)(LD.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, wD.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, wD.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, wD.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, wD.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Qi(kD, RD)
                      }), (0, wD.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, wD.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Qi(jD, RD)
                      })]
                    }), (0, wD.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", kD, " / ", jD]
                    })]
                  }), (0, wD.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, wD.jsxs)(Uc.i, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        oC("replaySkipBack")
                      },
                      disabled: !aD,
                      children: [(0, wD.jsxs)("span", {
                        children: [" ", (0, wD.jsx)(LD.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, wD.jsx)(HD.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, wD.jsxs)(Uc.o, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        yD.gameBridge.send("setReplayPlaying", !TD)
                      },
                      disabled: !aD,
                      children: [(0, wD.jsxs)("span", {
                        children: [" ", TD ? (0, wD.jsx)(LD.c, {
                          name: "pause"
                        }) : (0, wD.jsx)(LD.c, {
                          name: "play"
                        }), " "]
                      }), (0, wD.jsx)(HD.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, wD.jsxs)(Uc.i, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        oC("replaySkipForward")
                      },
                      disabled: !aD,
                      children: [(0, wD.jsxs)("span", {
                        children: [" ", (0, wD.jsx)(LD.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, wD.jsx)(HD.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, wD.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, wD.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, wD.jsxs)(Uc.o, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        oC("replayRecordKeyframe")
                      },
                      disabled: !aD,
                      children: [(0, wD.jsx)(HD.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, wD.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, wD.jsx)(Ti, {
                      disabled: !aD
                    }), sD && (0, wD.jsx)(Uc.P, {
                      className: "ReplayViewerActionButton",
                      onClick: wC,
                      disabled: !aD,
                      children: (0, wD.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, wD.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, wD.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, wD.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, wD.jsx)(Uc.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          oC("replaySpeedDown")
                        },
                        disabled: !aD || (0, sp.f)(GD),
                        children: (0, wD.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, wD.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [GD, "\xd7"]
                      }), (0, wD.jsx)(Uc.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          oC("replaySpeedUp")
                        },
                        disabled: !aD || (0, sp.b)(GD),
                        children: (0, wD.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, wD.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, wD.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, wD.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, wD.jsxs)(Uc.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          NC("replayTimelineZoomOut")
                        },
                        disabled: !aD || gD <= Ii[0],
                        children: [(0, wD.jsx)("span", {
                          children: " \u2212 "
                        }), (0, wD.jsx)(HD.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, wD.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: wi(gD)
                      }), (0, wD.jsxs)(Uc.i, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          NC("replayTimelineZoomIn")
                        },
                        disabled: !aD || gD >= Ii[Ii.length - 1],
                        children: [(0, wD.jsx)("span", {
                          children: " + "
                        }), (0, wD.jsx)(HD.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, wD.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !aD && "Load a recording to begin playback"
              }), vD && (0, wD.jsx)("div", {
                className: "ReplayViewerError",
                children: vD
              })]
            })]
          })]
        })
      }));
    var si = cD(1317);

    function Ei() {
      const [, DD] = (0, ID.useState)(0);
      return (0, bD.f)("replayViewer|uiVisibilityChanged", (() => {
          DD((DD => DD + 1))
        })), (0, bD.f)("replayViewer|replayLoaded", (() => {
          DD((DD => DD + 1))
        })),
        function() {
          if (!(0, si.c)()) return {};
          const DD = {
              [ji.e]: "true"
            },
            CD = (0, li.c)();
          for (const {
              group: cD,
              dataAttr: ID
            }
            of ji.f) ID && !CD[cD] && (DD[ID] = "true");
          return DD
        }()
    }
    var ei = cD(9039),
      ui = cD(2027),
      ri = cD(8420),
      Ai = cD(8409),
      Fi = cD(2039);
    const Df = (0, ID.memo)((function() {
      var DD, CD, cD;
      const pD = (0, gD.h)("customButtons");
      (0, ID.useEffect)((() => pD ? (yD.gameBridge.send("bindCustomButtonKeys", pD.filter(ri.d).map((DD => {
        let {
          id: CD,
          keycode: cD
        } = DD;
        return {
          id: CD,
          keycode: cD
        }
      }))), () => {
        yD.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [pD]);
      const iD = null !== (DD = null === pD || void 0 === pD ? void 0 : pD.filter(ri.d)) && void 0 !== DD ? DD : [],
        fD = (0, Ai.j)(),
        bD = null !== (CD = null === (cD = (0, Fi.e)()) || void 0 === cD ? void 0 : cD.hideButtonHints) && void 0 !== CD && CD,
        QD = "customButton" !== (null === fD || void 0 === fD ? void 0 : fD.kind) || bD ? null : fD.id,
        SD = iD.length > 0,
        BD = (0, ID.useRef)(null);
      return (0, ID.useLayoutEffect)((() => {
        if (!SD) return () => {};
        const DD = BD.current,
          CD = DD.closest(".InGameUi"),
          cD = () => {
            CD.style.setProperty("--custom-buttons-top", `${DD.offsetTop}px`)
          };
        cD();
        const ID = new ResizeObserver(cD);
        return ID.observe(DD), ID.observe(DD.parentElement), () => {
          ID.disconnect(), CD.style.removeProperty("--custom-buttons-top")
        }
      }), [SD]), (0, wD.jsx)("div", {
        ref: BD,
        className: "" + ((0, Mp.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: iD.map((DD => {
          var CD, cD;
          return (0, wD.jsx)(Cf, {
            button: DD,
            padGlyph: DD.id === QD && null !== (CD = null === (cD = (0, kD.d)()) || void 0 === cD ? void 0 : cD.getBoundButton("actionButton")) && void 0 !== CD ? CD : null
          }, DD.id)
        }))
      })
    }));

    function Cf(DD) {
      let {
        button: CD,
        padGlyph: cD
      } = DD;
      const pD = (0, ID.useRef)(null),
        iD = () => {
          null !== pD.current && (pD.current = null, yD.gameBridge.send("pressCustomButton", {
            id: CD.id,
            down: !1
          }))
        };
      (0, ID.useEffect)((() => iD), []);
      const fD = WC(iD, {
          pressesOnPointerDown: !0
        }),
        bD = DD => {
          pD.current === DD.pointerId && iD()
        };
      return (0, wD.jsxs)("div", {
        className: "CustomIcon",
        ...fD,
        onLostPointerCapture: bD,
        children: [(0, wD.jsx)(ui.d, {
          icon: CD.icon,
          keyboardHint: (0, ri.c)(CD.keycode),
          padGlyph: cD,
          onPointerDown: DD => {
            try {
              DD.currentTarget.setPointerCapture(DD.pointerId)
            } catch {
              return
            }
            null === pD.current && yD.gameBridge.send("pressCustomButton", {
              id: CD.id,
              down: !0
            }), pD.current = DD.pointerId
          },
          onPointerUp: bD,
          onPointerCancel: bD,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), CD.description && (0, wD.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: CD.description
        })]
      })
    }
    var If = cD(2355),
      pf = cD(266);
    const ff = {
      frame: DD => {
        const CD = requestAnimationFrame((() => {
          DD()
        }));
        return () => {
          cancelAnimationFrame(CD)
        }
      },
      afterFrame: DD => {
        const CD = setTimeout(DD, 0);
        return () => {
          clearTimeout(CD)
        }
      }
    };
    class bf {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pf.e,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ff;
        this.idle = DD, this.frames = CD, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (DD(), () => {}) : (CD ? this.waiting.unshift(DD) : this.waiting.push(DD), this.schedule(), () => {
          const CD = this.waiting.indexOf(DD);
          CD >= 0 && (this.waiting.splice(CD, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((DD => {
          for (this.cancelIdle = null; this.waiting.length > 0 && DD.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const DD = this.waiting.shift();
        try {
          DD()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var DD, CD, cD;
        null === (DD = this.cancelIdle) || void 0 === DD || DD.call(this), this.cancelIdle = null, null === (CD = this.cancelFrame) || void 0 === CD || CD.call(this), this.cancelFrame = null, null === (cD = this.cancelAfterFrame) || void 0 === cD || cD.call(this), this.cancelAfterFrame = null
      }
    }
    const Qf = (0, ID.createContext)(null);

    function wf(DD) {
      let {
        children: CD,
        first: cD = !1
      } = DD;
      const pD = (0, ID.useContext)(Qf),
        [iD, fD] = (0, ID.useState)(null === pD);
      return (0, ID.useEffect)((() => {
        if (!iD && null !== pD) return pD.request((() => {
          fD(!0)
        }), cD)
      }), [cD, iD, pD]), iD ? (0, ID.createElement)(ID.Fragment, null, CD) : null
    }
    const Sf = (0, ID.memo)((function(DD) {
        let {
          shown: CD
        } = DD;
        const [cD] = (0, ID.useState)((() => new tD.d(CD))), [pD] = (0, ID.useState)((() => CD ? null : new bf));
        return (0, ID.useLayoutEffect)((() => {
          CD && (null === pD || void 0 === pD || pD.show(), cD.show())
        }), [CD, cD, pD]), (0, wD.jsx)(tD.c.Provider, {
          value: cD,
          children: (0, wD.jsx)(Qf.Provider, {
            value: pD,
            children: (0, wD.jsx)(Bf, {})
          })
        })
      })),
      Bf = (0, ID.memo)((function() {
        const {
          isUiHidden: DD,
          isUiHiddenByCamera: CD,
          worldPanelHud: cD,
          isTouchScreen: pD
        } = (0, PD.o)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), fD = (0, eI.b)(), bD = Ei(), QD = (0, tD.h)(), SD = (0, ID.useRef)(null), BD = (0, gD.h)("showKillfeed");
        return function() {
            const DD = (0, tD.h)();
            (0, ID.useEffect)((() => DD.whenShown(ZD)), [DD])
          }(),
          function() {
            const DD = (0, gD.h)("inventoryColourOverride");
            (0, ID.useEffect)((() => {
              if (!DD) return;
              const {
                panel: CD,
                slot: cD,
                slotSelected: ID,
                slotUnavailable: pD
              } = YD(DD), iD = document.documentElement.style;
              return iD.setProperty("--InventoryPanelColour", CD), iD.setProperty("--InventorySlotColour", cD), iD.setProperty("--InventorySlotSelectedColour", ID), iD.setProperty("--InventorySlotUnavailableColour", pD), () => {
                iD.removeProperty("--InventoryPanelColour"), iD.removeProperty("--InventorySlotColour"), iD.removeProperty("--InventorySlotSelectedColour"), iD.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [DD])
          }(), (0, ID.useLayoutEffect)((() => QD.whenShown((() => {
            var DD;
            null === (DD = SD.current) || void 0 === DD || DD.classList.remove("PreMounted")
          }))), [QD]), (0, wD.jsxs)(wD.Fragment, {
            children: [(0, wD.jsxs)("div", {
              ref: SD,
              className: iD()("InGameUi", {
                PreMounted: !QD.shown,
                Hidden: DD,
                HiddenByCamera: CD,
                HiddenByWorldPanel: null !== cD,
                WorldPanelTouchControl: "touchControls" === cD
              }),
              ...bD,
              children: [(0, wD.jsxs)(wf, {
                children: [(0, wD.jsx)(dc.b, {}), (0, wD.jsx)(ec, {})]
              }), (0, wD.jsx)(tD.e, {
                children: (0, wD.jsx)(uc, {})
              }), (0, wD.jsxs)(wf, {
                children: [(0, wD.jsx)(mp, {}), (0, wD.jsx)(qp, {}), pD && (0, wD.jsx)(Kp, {})]
              }), (0, wD.jsxs)(wf, {
                children: [(0, wD.jsx)(vc, {}), (0, wD.jsx)(QI.c, {}), (0, wD.jsx)(ZI, {})]
              }), (0, wD.jsx)(tD.e, {
                children: (0, wD.jsx)(kc, {})
              }), (0, wD.jsxs)(wf, {
                children: [(0, wD.jsx)(Hp.d, {}), (0, wD.jsx)(Yi, {})]
              }), (0, wD.jsxs)(wf, {
                children: [(0, wD.jsx)(Vp.f, {}), (0, wD.jsx)(zp.e, {})]
              }), (0, wD.jsx)(wf, {
                children: (0, wD.jsx)(gc.h, {})
              }), (0, wD.jsx)(wf, {
                children: (0, wD.jsx)(Nf, {
                  showChat: fD
                })
              }), (0, wD.jsxs)(wf, {
                children: [(0, wD.jsx)(lp, {}), (0, wD.jsx)(Pp, {})]
              }), (0, wD.jsxs)("div", {
                className: iD()("RightElements", {
                  RightElementsTouchscreen: pD
                }),
                "data-camera-keeper-host": "",
                children: [(0, wD.jsxs)("div", {
                  className: nI.h,
                  "data-holds-camera-keeper": "",
                  children: [(0, wD.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, wD.jsx)(wf, {
                      children: (0, wD.jsx)(wp.e, {})
                    }), (0, wD.jsxs)(wf, {
                      children: [(0, wD.jsx)(TD, {}), (0, wD.jsx)(xI.c, {})]
                    }), Mp.featureFlags.useSocialFeatures && (0, wD.jsx)(tD.e, {
                      children: (0, wD.jsx)(qI.e, {
                        placement: "inGame"
                      })
                    }), Mp.featureFlags.useSocialFeatures && (0, wD.jsx)(tD.e, {
                      children: (0, wD.jsx)(dI, {})
                    }), BD && (0, wD.jsx)(tD.e, {
                      children: (0, wD.jsx)(bI, {})
                    }), (0, wD.jsx)(wf, {
                      children: (0, wD.jsx)(ei.c, {})
                    })]
                  }), Mp.featureFlags.useSocialFeatures && (0, wD.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, wD.jsx)(wf, {
                      children: (0, wD.jsx)(gp.e, {})
                    })
                  })]
                }), (0, wD.jsxs)(wf, {
                  children: [(0, wD.jsx)(gc.d, {
                    placement: "topRight"
                  }), (0, wD.jsx)(gf, {})]
                })]
              }), (0, wD.jsx)("div", {
                className: "LeftCentre",
                children: (0, wD.jsx)(wf, {
                  children: (0, wD.jsx)(Df, {})
                })
              }), (0, wD.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": pD ? "" : void 0,
                children: [(0, wD.jsx)(tD.e, {
                  children: (0, wD.jsx)(KD, {})
                }), (0, wD.jsx)(wf, {
                  children: (0, wD.jsx)(Mf, {})
                }), (0, wD.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": pD ? "" : void 0,
                  children: [(0, wD.jsx)("div", {
                    className: iD()("BottomLeftElements", {
                      Touch: pD
                    }),
                    children: (0, wD.jsxs)(wf, {
                      children: [(0, wD.jsx)(sI, {}), !pD && (0, wD.jsx)(If.c, {})]
                    })
                  }), (0, wD.jsx)(wf, {
                    children: (0, wD.jsx)(vf, {})
                  }), (0, wD.jsx)(wf, {
                    children: (0, wD.jsx)(vI, {
                      isTouchScreen: pD
                    })
                  })]
                })]
              }), (0, wD.jsx)("div", {
                className: "MiddleLeft"
              }), pD && (0, wD.jsx)(wf, {
                children: (0, wD.jsx)(FC, {})
              }), (0, wD.jsx)("div", {
                className: "CameraFadeHost",
                ref: gC.n
              })]
            }), (0, wD.jsx)(tD.e, {
              children: (0, wD.jsx)(Yp.c, {})
            }), (0, wD.jsx)(wf, {
              first: !0,
              children: (0, wD.jsx)(EI.d, {})
            }), (0, wD.jsx)(tD.e, {
              children: (0, wD.jsx)(yf, {})
            })]
          })
      }));

    function yf() {
      return (0, ID.useEffect)((() => {
        const DD = setTimeout((() => {
          (0, XD.h)()
        }), 0);
        return () => {
          clearTimeout(DD), XD.i.pN(!1)
        }
      }), []), null
    }
    const Mf = (0, ID.memo)((function() {
        const DD = (0, bD.g)("aimingOverlay", "none");
        (0, vD.b)();
        const CD = (0, gD.l)("middleTextUpper"),
          cD = (0, gD.l)("middleTextLower");
        return (0, wD.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === DD ? {
            visibility: "hidden"
          } : {},
          children: [(0, wD.jsx)(of, {
            text: CD,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: tf
          }), (0, wD.jsx)(of, {
            text: cD,
            className: "MiddleText",
            maxHeightFraction: Zf
          })]
        })
      })),
      tf = .3,
      Zf = .2;

    function of(DD) {
      let {
        text: CD,
        className: cD,
        maxHeightFraction: pD
      } = DD;
      const iD = (0, ID.useRef)(null),
        fD = (0, ID.useRef)(null);
      return function(DD, CD, cD, pD) {
        (0, ID.useLayoutEffect)((() => {
          const ID = DD.current,
            pD = CD.current;
          if (!ID || !pD) return;
          let iD = -1,
            fD = -1;
          const bD = DD => (pD.style.setProperty("zoom", String(DD)), ID.getBoundingClientRect().height),
            QD = () => {
              const DD = document.documentElement.clientHeight * cD;
              let CD = 1;
              if (bD(1) > DD) {
                let cD = .5,
                  ID = 1;
                for (let CD = 0; CD < 6; CD++) {
                  const CD = (cD + ID) / 2;
                  bD(CD) <= DD ? cD = CD : ID = CD
                }
                CD = cD
              }
              fD = bD(CD), iD = ID.getBoundingClientRect().width
            };
          QD();
          let wD = 0;
          const SD = () => {
              cancelAnimationFrame(wD), wD = requestAnimationFrame(QD)
            },
            BD = new ResizeObserver((() => {
              const {
                width: DD,
                height: CD
              } = ID.getBoundingClientRect();
              DD === iD && CD === fD || SD()
            }));
          return BD.observe(ID), window.addEventListener("resize", SD), () => {
            BD.disconnect(), window.removeEventListener("resize", SD), cancelAnimationFrame(wD), pD.style.removeProperty("zoom")
          }
        }), [DD, CD, cD, pD])
      }(iD, fD, pD, CD.content), (0, wD.jsx)("div", {
        ref: iD,
        className: "MiddleTextFit",
        children: (0, wD.jsx)(jp, {
          ref: fD,
          text: CD,
          className: cD
        })
      })
    }
    const vf = (0, ID.memo)((function() {
        const DD = (0, bD.g)("aimingOverlay", "none");
        (0, vD.b)();
        const CD = (0, gD.h)("useInventory");
        return (0, wD.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === DD ? {
            visibility: "hidden"
          } : {},
          children: [(0, wD.jsx)(SD, {}), (0, wD.jsx)(gc.d, {}), (0, wD.jsx)(Xc, {}), (0, wD.jsx)(tD.e, {
            children: (0, wD.jsx)(vp, {})
          }), (0, wD.jsxs)("div", {
            className: "HotBarRow",
            children: [CD ? (0, wD.jsx)(RD.e, {}) : (0, wD.jsx)(RD.g, {}), (0, wD.jsx)(dD, {})]
          })]
        })
      })),
      Nf = (0, ID.memo)((function(DD) {
        let {
          showChat: CD
        } = DD;
        const {
          t: cD
        } = (0, JD.F)(), {
          clientEscMenuOptions: pD,
          isTouchScreen: fD
        } = (0, PD.o)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, vD.b)();
        const {
          userContext: bD,
          isUserContextUpdating: QD
        } = (0, oD.c)(), SD = (0, gD.h)("hideCoordinates"), yD = (0, gD.h)("customVariationTitle"), {
          requestedGameNameWithVariation: MD,
          gameNameWithVariation: tD,
          lobbyName: ZD,
          shownLobbyName: XD
        } = (0, OD.h)("connectedGame"), mD = (0, BD.b)(MD, ZD, !1), [nD, HD] = (0, ID.useState)(null), UD = (0, Bp.q)(tD || MD || ""), xD = yD || UD || "";
        (0, ID.useEffect)((() => {
          QD || KI.c.getFavouriteLobbies(bD).then((DD => {
            console.log("Got favourite lobbies", DD), HD(DD)
          }))
        }), [QD, bD]);
        const qD = (0, ID.useRef)(null);
        return (0, ID.useLayoutEffect)((() => {
          const DD = qD.current,
            CD = document.documentElement,
            cD = new ResizeObserver((() => {
              CD.style.setProperty("--InGameHeaderRowsHeight", `${DD.offsetHeight}px`)
            }));
          return cD.observe(DD), () => {
            cD.disconnect(), CD.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), UI(qD), (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsxs)("div", {
            className: iD()(nI.g, {
              Touchscreen: fD
            }),
            ref: qD,
            children: [(0, wD.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, wD.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: DD => {
                  DD.stopPropagation(), DD.preventDefault()
                },
                onClick: () => {
                  PD.d.set({
                    openEverythingMenuName: ND.q.SETTINGS
                  })
                },
                children: [(0, wD.jsx)(Sp.e, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, wD.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, wD.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === mD && (0, wD.jsx)(Sp.e, {}), null !== mD && (0, wD.jsxs)(wD.Fragment, {
                  children: [mD, xD && ` ${xD}`]
                })]
              }), (0, wD.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, wD.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: XD
              }), (0, yp.F)(ZD) && (0, wD.jsx)(lD.f, {
                tooltipInner: (0, wD.jsx)("div", {
                  children: cD(null !== nD && nD.includes(ZD) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, wD.jsx)("div", {
                  children: (0, wD.jsx)(Uc.t, {
                    isLiked: null !== nD && nD.includes(ZD),
                    onClick: () => {
                      try {
                        if (!nD) return;
                        nD.includes(ZD) ? (KI.c.unfavouriteLobby(bD, ZD).catch((DD => {
                          console.error("Failed to favourite lobby", DD)
                        })), HD(nD.filter((DD => DD !== ZD)))) : (KI.c.favouriteLobby(bD, ZD).catch((DD => {
                          console.error("Failed to favourite lobby", DD)
                        })), HD([...nD, ZD]))
                      } catch (DD) {
                        console.error("Failed to like lobby", DD)
                      }
                    },
                    isLoading: null === nD
                  })
                })
              }), (0, wD.jsx)(Rp, {})]
            }), (0, wD.jsx)(pp, {
              show: pD.showFPS
            }), !SD && pD.showCoordinates && (0, wD.jsx)(bp, {}), !SD && pD.showChunkCoordinates && (0, wD.jsx)(Qp, {}), (0, wD.jsx)(Lp, {})]
          }), (0, wD.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, wD.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: CD && (0, wD.jsx)(ED.e, {})
            })
          })]
        })
      })),
      gf = (0, ID.memo)((function() {
        (0, vD.b)();
        const DD = (0, gD.l)("RightInfoText"),
          [CD, cD] = (0, ID.useState)(null);
        return (0, tC.j)(CD, ".RightElements"), DD.hasText ? (0, wD.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, wD.jsx)(jp, {
            ref: cD,
            text: DD,
            className: "RightInfoDiv",
            children: (0, wD.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, wD.jsx)(QD.c, {
                text: DD.content
              })
            })
          })
        }) : null
      }))
  },
  4606: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    var ID = cD(53),
      pD = cD(312),
      iD = cD(1893),
      fD = cD(1093);

    function bD(DD) {
      let {
        text: CD
      } = DD;
      const cD = [];
      let bD = "";
      return (0, pD.bc)(CD).forEach(((DD, CD) => {
        if ("string" === typeof DD || !(0, iD.g)(DD.icon)) return void(bD += "string" === typeof DD ? DD : DD.icon);
        const pD = Math.max(0, bD.trimEnd().search(/\S{1,12}$/));
        cD.push((0, fD.jsxs)(ID.Fragment, {
          children: [bD.slice(0, pD), (0, fD.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [bD.slice(pD), (0, fD.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": DD.icon,
              children: (0, fD.jsx)(iD.d, {
                itemName: DD.icon,
                amount: 0
              })
            })]
          })]
        }, CD)), bD = ""
      })), cD.push(bD), (0, fD.jsx)(fD.Fragment, {
        children: cD
      })
    }
  },
  35937: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => yD,
      f: () => SD,
      i: () => BD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1893),
      bD = cD(1093);
    const QD = 350;
    let wD = 0;

    function SD() {
      return wD += 1, wD
    }

    function BD(DD, CD) {
      let cD = 0;
      for (const ID of DD) "ingredient" !== ID.kind && ID.iB === CD && (cD += ID.amount);
      return cD > 0 ? {
        idx: CD,
        amount: cD
      } : null
    }

    function yD(DD) {
      var CD, cD;
      let {
        anim: pD,
        onComplete: wD
      } = DD;
      const SD = null !== (CD = pD.delayMs) && void 0 !== CD ? CD : 0,
        BD = null !== (cD = pD.durationMs) && void 0 !== cD ? cD : QD,
        [yD, MD] = (0, ID.useState)(pD.from),
        [tD, ZD] = (0, ID.useState)(0 === SD),
        [oD, vD] = (0, ID.useState)(!1),
        ND = (0, ID.useRef)(!1);
      return (0, ID.useEffect)((() => {
        let DD, CD;
        const cD = () => {
            ND.current = !0, ZD(!0), DD = requestAnimationFrame((() => {
              CD = requestAnimationFrame((() => {
                MD({
                  x: pD.to.x,
                  y: pD.to.y
                }), vD(!0)
              }))
            }))
          },
          ID = ND.current ? 0 : SD;
        let iD;
        ID > 0 ? iD = setTimeout(cD, ID) : cD();
        const fD = setTimeout((() => {
          wD(pD.id)
        }), ID + BD + 50);
        return () => {
          clearTimeout(iD), cancelAnimationFrame(DD), cancelAnimationFrame(CD), clearTimeout(fD)
        }
      }), [pD.id, pD.to.x, pD.to.y, wD, SD, BD]), (0, bD.jsx)("div", {
        className: iD()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === pD.kind,
          Waiting: !tD,
          Arrived: oD
        }),
        style: {
          left: yD.x,
          top: yD.y,
          "--fly-duration": `${BD}ms`
        },
        children: (0, bD.jsx)(fD.d, {
          itemName: pD.itemName,
          amount: pD.amount
        })
      })
    }
  },
  35922: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => jD,
      g: () => TD
    });
    var ID = cD(53),
      pD = cD(2790),
      iD = cD(6320),
      fD = cD(2027),
      bD = cD(2358),
      QD = cD(8537),
      wD = cD(326),
      SD = cD(20),
      BD = cD(1440),
      yD = cD(36),
      MD = cD(1049),
      tD = cD.n(MD),
      ZD = cD(312),
      oD = cD(35929),
      vD = cD(1872),
      ND = cD(1954),
      gD = cD(8369),
      XD = cD(1093);

    function mD(DD) {
      var CD, cD;
      let {
        slotIdx: iD
      } = DD;
      const fD = (0, ND.g)("hotbar", (DD => {
          var CD;
          return null !== (CD = DD.items[iD]) && void 0 !== CD ? CD : null
        })),
        QD = (0, ND.g)("hotbar", (DD => DD.ammo)),
        [SD, BD] = (0, ID.useState)(!1),
        yD = (0, ID.useRef)(null),
        [MD, ZD] = (0, ID.useState)(null),
        [oD, mD] = (0, ID.useState)(null),
        nD = (0, bD.h)("maxAuraLevel"),
        OD = (0, pD.b)(),
        PD = (0, ID.useCallback)((() => {
          if (clearTimeout(yD.current), fD) {
            var DD, CD, cD, ID;
            const QD = fD.displayName,
              SD = [],
              BD = Array.isArray(QD) ? QD : [QD],
              yD = {
                fontStyle: null !== (DD = fD.attributes.customAttributes) && void 0 !== DD && DD.author ? "italic" : "normal"
              };
            for (const DD of BD) DD.str ? SD.push(DD) : SD.push({
              str: DD,
              style: yD
            });
            if (null !== (CD = fD.attributes.customAttributes) && void 0 !== CD && CD.enchantments) {
              SD.push(" ");
              const DD = Object.entries(fD.attributes.customAttributes.enchantments).sort(((DD, CD) => CD[1] - DD[1])),
                CD = fD.attributes.customAttributes.enchantmentData;
              for (const [cD, ID] of DD) {
                var pD, iD;
                const DD = null !== (pD = null === CD || void 0 === CD || null === (iD = CD[cD]) || void 0 === iD ? void 0 : iD.icon) && void 0 !== pD ? pD : `${cD} Enchantment`;
                var bD;
                if (ID < 4)
                  for (let CD = 0; CD < ID; CD++) SD.push({
                    icon: DD,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else SD.push({
                  icon: DD,
                  style: {
                    fontSize: "1.5em"
                  }
                }), SD.push(null !== (bD = (0, wD.S)(ID)) && void 0 !== bD ? bD : ID.toString())
              }
            }
            ZD(SD), mD(null !== (cD = null === (ID = fD.attributes.customAttributes) || void 0 === ID ? void 0 : ID.enchantmentTier) && void 0 !== cD ? cD : null)
          } else ZD(null), mD(null);
          BD(!0), OD();
          const QD = null === fD || void 0 === fD ? void 0 : fD.attributes.customAttributes;
          void 0 === (null === QD || void 0 === QD ? void 0 : QD.shotsLeft) && (yD.current = setTimeout((() => {
            BD(!1)
          }), 2e3))
        }), [null === fD || void 0 === fD ? void 0 : fD.name, iD, null === fD || void 0 === fD ? void 0 : fD.instance, null === fD || void 0 === fD ? void 0 : fD.displayName]);
      (0, ID.useEffect)((() => (PD(), () => {
        clearTimeout(yD.current), BD(!1)
      })), [null === fD || void 0 === fD ? void 0 : fD.name, iD, null === fD || void 0 === fD ? void 0 : fD.instance, PD]);
      const HD = null === fD || void 0 === fD || null === (CD = fD.attributes.customAttributes) || void 0 === CD ? void 0 : CD.shotsLeft,
        UD = void 0 === HD ? null : (0, XD.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${HD}|${fD.requiresAmmo?`${QD}x${fD.clipSize}`:fD.clipSize}`
        }),
        xD = (0, gD.i)();
      return (0, XD.jsx)(XD.Fragment, {
        children: SD && fD && !xD.showing ? (0, XD.jsxs)("div", {
          className: tD()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === nD,
            Enchanted: null !== oD
          }),
          style: {
            "--enchantmentColour": null !== (cD = wD.lb[oD]) && void 0 !== cD ? cD : wD.lb.None,
            "--duration": oD ? (0, wD.gb)(oD) + "s" : void 0
          },
          children: [oD && (0, XD.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, XD.jsx)(vD.c, {
              text: MD
            }), UD]
          }), (0, XD.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, XD.jsx)(vD.c, {
              text: MD
            }), UD]
          })]
        }) : null
      })
    }
    var nD = cD(35937),
      OD = cD(16),
      PD = cD(1905),
      HD = cD(624),
      UD = cD(2361),
      xD = cD(3193),
      qD = cD(3200);
    var JD = cD(2050),
      KD = cD(1108),
      aD = cD(2398);

    function VD() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var zD = cD(1460);
    const jD = (0, ID.memo)((function() {
      const [DD, CD] = (0, ID.useState)(0), cD = (0, bD.h)("useFullInventory"), fD = (0, bD.h)("highlightedHotbarSlots"), {
        isTouchScreen: QD,
        openInGameMenuName: wD
      } = (0, OD.o)(["isTouchScreen", "openInGameMenuName"]), yD = null !== wD && "inventory" !== wD, MD = (0, ND.h)("fullInventory") && "inventory" === wD, ZD = function() {
        const DD = (0, JD.b)(((DD, CD) => `${DD}:${(0,KD.e)(DD,CD)?"portrait":"landscape"}`)),
          [CD, cD] = (0, ID.useState)(VD);
        return (0, ID.useLayoutEffect)((() => {
          cD(VD())
        }), [DD]), (0, BD.f)(aD.g, (() => {
          cD(VD())
        })), CD
      }(), vD = QD && !ZD;
      ! function(DD, CD, cD) {
        (0, ID.useLayoutEffect)((() => {
          const ID = document.documentElement.classList;
          return DD && (ID.add("TouchHotbar"), ID.toggle("TouchHotbarKeysAbove", CD), ID.toggle("TouchHotbarHasBag", cD)), (0, xD.i)(), SD.i.Uo(qD.e), () => {
            ID.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, xD.i)(), SD.i.Uo(qD.e)
          }
        }), [DD, CD, cD])
      }(QD, vD, cD);
      const [gD, UD] = (0, iD.c)("changedHotbarUsingNumkeys", !0), zD = (0, ND.g)("hotbar", (DD => DD.selectedSlot)), jD = null !== zD && void 0 !== zD ? zD : DD, GD = (0, pD.b)(), RD = (0, ID.useRef)(null), dD = (0, BD.g)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, BD.f)("inventoryDraggedItemUpdated", (DD => {
        RD.current = DD, GD()
      })), (0, ND.c)("hotbarScrolled", (DD => {
        null === zD && WD(DD)
      })), (0, ND.c)("hotbarSlotRequested", (DD => {
        YD(DD), UD(!1)
      })), (0, ND.c)("numberKeyPressed", (() => {
        UD(!1)
      })), (0, ND.c)("hotbarDropRequested", (DD => {
        const CD = PD.gameBridge.latest("hotbar").items[jD];
        if (CD) {
          var cD;
          const ID = DD && null !== (cD = CD.amount) && void 0 !== cD ? cD : 1;
          PD.gameBridge.send("removeInventoryItem", {
            slot: jD,
            amount: ID,
            drop: !0
          })
        }
      }));
      const YD = DD => {
          PD.gameBridge.send("selectHotbarSlot", DD), CD(DD)
        },
        WD = DD => {
          YD((jD + DD + HD.m) % HD.m)
        };
      let sD, ED = null,
        eD = null,
        uD = DD => DD => {},
        hD = DD => CD => {
          YD(DD)
        },
        rD = DD => DD => {},
        AD = [];
      if (MD) {
        var FD;
        const DD = RD.current;
        if (null === DD || void 0 === DD || !DD.setHovered) return (0, XD.jsx)("div", {
          className: tD()("HotBarContainer", {
            Touch: QD,
            KeysAbove: vD
          }),
          children: (0, XD.jsx)("div", {
            className: "HotBar"
          })
        });
        ED = DD.draggedInfo, eD = DD.specialItemInfo, uD = DD.setHovered, hD = DD.pointerDown, rD = DD.pointerUp, sD = DD.variation, AD = null !== (FD = DD.craftFlyAnims) && void 0 !== FD ? FD : []
      }
      return (0, XD.jsxs)("div", {
        className: tD()("HotBarContainer", {
          Touch: QD,
          PopupOpen: QD && yD,
          KeysAbove: vD
        }),
        children: [(0, XD.jsxs)("div", {
          className: tD()("HotBar", {
            HoverDisabled: dD
          }),
          children: [QD && (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsx)(LD, {
              useFullInventory: cD,
              inventoryOpen: MD
            }), (0, XD.jsx)(lD, {
              direction: "Previous",
              onPress: () => {
                WD(-1)
              }
            })]
          }), !QD && (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsx)(TD, {}), (0, XD.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, XD.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((DD, CD) => (0, XD.jsx)(oD.c, {
              idx: CD,
              draggedInfo: ED,
              specialItemInfo: eD,
              craftFlyHoldbackInfo: (0, nD.i)(AD, CD),
              setHovered: uD(CD),
              pointerDown: hD(CD),
              pointerUp: rD(CD),
              variation: sD,
              isSelected: CD === jD,
              hotbarHighlighted: !0 === (null === fD || void 0 === fD ? void 0 : fD.includes(CD)),
              hoverDisabled: dD,
              showNumber: gD && !QD
            }, CD)))
          }), QD && (0, XD.jsx)(lD, {
            direction: "Next",
            onPress: () => {
              WD(1)
            }
          }), !QD && (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsx)("div", {
              className: "HotBarFiller"
            }), (0, XD.jsx)("div", {
              className: tD()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !cD
              }),
              onPointerDown: () => {
                SD.i.Uo("toggleMenu", "inventory")
              },
              children: (0, XD.jsx)(kD, {})
            })]
          })]
        }), (0, XD.jsx)(mD, {
          slotIdx: jD
        })]
      })
    }));

    function lD(DD) {
      let {
        direction: CD,
        onPress: cD
      } = DD;
      return (0, XD.jsx)("div", {
        className: tD()("HotBarArrow", CD),
        ...zD.h,
        children: (0, XD.jsx)(fD.d, {
          icon: "Previous" === CD ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: cD
        })
      })
    }
    const LD = (0, ID.memo)((function(DD) {
        let {
          useFullInventory: CD,
          inventoryOpen: cD
        } = DD;
        const pD = (0, bD.h)("maxAuraLevel"),
          iD = (0, ID.useRef)(null);
        return function(DD, CD, cD) {
          (0, ID.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", CD), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [CD]), (0, ID.useLayoutEffect)((() => {
            const CD = DD.current.closest(".BottomMiddleElements");
            return CD.classList.toggle("TouchInventoryOpen", cD), () => {
              CD.classList.remove("TouchInventoryOpen")
            }
          }), [DD, cD])
        }(iD, (0, QD.c)(), cD), (0, XD.jsxs)("div", {
          ref: iD,
          className: tD()("TouchInventoryKeys", {
            NoAuraBar: 0 === pD,
            InventoryOpen: cD
          }),
          children: [(0, XD.jsx)(TD, {
            touchKey: !0
          }), (0, XD.jsx)("div", {
            className: tD()("TouchInventoryKey BagKey", {
              Hidden: !CD
            }),
            ...zD.h,
            children: (0, XD.jsx)(kD, {
              touchKey: !0
            })
          })]
        })
      })),
      TD = (0, ID.memo)((function(DD) {
        let {
          touchKey: CD = !1
        } = DD;
        const cD = (0, QD.c)();
        return (0, XD.jsx)("div", {
          className: CD ? tD()("TouchInventoryKey ShopKey", {
            Hidden: !cD
          }) : tD()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !cD
          }),
          ...CD ? zD.h : {},
          children: (0, XD.jsx)(fD.d, {
            icon: (0, wD.gc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              cD && OD.d.set({
                openEverythingMenuName: ZD.q.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function GD(DD) {
      let {
        player: CD
      } = DD;
      return CD.some((DD => null !== DD && wD.Qc.includes(DD.name)))
    }

    function RD(DD) {
      DD.creative || yD.h.getItem("LogInInventoryRedDotTutorialComplete") || (GD(DD) ? (SD.i.Uo("RedDotOpenInventoryIcon", !0), SD.i.Uo("TouchTutorialOpenInventoryIcon", !0)) : (SD.i.Uo("RedDotOpenInventoryIcon", !1), SD.i.Uo("TouchTutorialOpenInventoryIcon", !1)))
    }
    const kD = (0, ID.memo)((function(DD) {
      let {
        touchKey: CD = !1
      } = DD;
      const {
        backpackPointerRequested: cD
      } = (0, OD.o)(["backpackPointerRequested"]);
      (0, ID.useEffect)((() => {
        RD(PD.gameBridge.latest("inventory"))
      }), []), (0, ND.c)("inventory", RD);
      const pD = (0, UD.h)();
      return (0, BD.f)("toggleMenu", (DD => {
        pD.shown && (null !== DD && void 0 !== DD && DD.startsWith("inventory") && GD(PD.gameBridge.latest("inventory")) ? (yD.h.setItem("LogInInventoryRedDotTutorialComplete", !0), SD.i.Uo("RedDotOpenInventoryIcon", !1), SD.i.Uo("TouchTutorialOpenInventoryIcon", !1)) : "shop" === DD && SD.i.Uo("showShopTouchTutorial", !1))
      })), CD ? (0, XD.jsx)(fD.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          SD.i.Uo("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: cD,
        touchIconPosition: "topleft"
      }) : (0, XD.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          SD.i.Uo("toggleMenu", "inventory")
        },
        children: (0, XD.jsx)(fD.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: DD => {
            SD.i.Uo("toggleMenu", "inventory"), DD.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: cD,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35929: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD,
      e: () => tD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1896),
      bD = cD(1893),
      QD = cD(1905),
      wD = cD(1954),
      SD = cD(35932),
      BD = cD(9057),
      yD = cD(1388),
      MD = cD(1093);
    const tD = (DD, CD, cD) => {
      let ID = CD,
        pD = !1;
      for (const iD of cD)(null === iD || void 0 === iD ? void 0 : iD.idx) === DD && (pD = !0, ID > 0 && (ID -= iD.amount));
      return {
        displayedAmt: ID,
        shown: !pD || ID > 0
      }
    };
    const ZD = DD => {
        let {
          idx: CD
        } = DD;
        return (0, yD.p)() ? null : (0, MD.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: CD < 9 ? CD + 1 : 0
        })
      },
      oD = (0, ID.memo)((function(DD) {
        var CD, cD, ID;
        let {
          idx: pD,
          setHovered: yD,
          pointerDown: oD,
          pointerUp: vD,
          draggedInfo: ND,
          specialItemInfo: gD,
          craftFlyHoldbackInfo: XD,
          defaultIconB64: mD = null,
          variation: nD,
          isSelected: OD = !1,
          hotbarHighlighted: PD = !1,
          hoverDisabled: HD = !1,
          showNumber: UD = !1,
          showNewDot: xD = !1
        } = DD;
        const qD = (0, wD.g)("inventory", (DD => pD === SD.c ? null : (0, BD.i)(DD, pD)));
        let JD, KD, aD, VD;
        if (pD === SD.c) gD && (JD = gD.name, aD = gD.amount, VD = gD.attributes);
        else if (qD) {
          var zD;
          JD = qD.name, KD = qD.icon, aD = null !== (zD = qD.amount) && void 0 !== zD ? zD : 0, VD = qD.attributes
        }
        const jD = null === (CD = VD) || void 0 === CD || null === (cD = CD.customAttributes) || void 0 === cD ? void 0 : cD.enchantmentTier,
          lD = (0, fD.h)(VD),
          {
            displayedAmt: LD,
            shown: TD
          } = tD(pD, aD, [ND, gD, XD]),
          GD = JD && TD,
          RD = void 0 !== nD && function(DD, CD) {
            const {
              enchantable: cD,
              salvageable: ID
            } = QD.gameBridge.latest("stationItems");
            return "Enchanting Table" === DD ? !0 === cD[CD] : "Salvaging Table" === DD && !0 === ID[CD]
          }(nD, JD);
        return (0, MD.jsxs)("div", {
          className: iD()("InvenItem", {
            Highlighted: GD && RD,
            Selected: OD,
            HotbarHighlighted: PD,
            HoverDisabled: HD
          }),
          onPointerEnter: () => {
            null === yD || void 0 === yD || yD(!0)
          },
          onPointerLeave: () => {
            null === yD || void 0 === yD || yD(!1)
          },
          onPointerDown: oD,
          onPointerUp: vD,
          "data-inven-idx": pD,
          children: [GD && (0, MD.jsx)(bD.d, {
            itemName: null !== (ID = KD) && void 0 !== ID ? ID : JD,
            amount: LD,
            enchantmentTier: jD,
            bar: lD
          }), GD && xD && (0, MD.jsx)("div", {
            className: "InvenItemNewDot"
          }), UD && (0, MD.jsx)(ZD, {
            idx: pD
          }), mD && !GD && (0, MD.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${mD})`
            }
          })]
        })
      }))
  },
  9045: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(326),
      pD = cD(9050);

    function iD(DD, CD, cD) {
      const iD = Object.entries(CD).sort(((DD, CD) => CD[1] - DD[1])),
        fD = (0, ID.tb)(DD);
      fD.push(DD ? "\n\n" : "\n");
      for (const [pD, tD] of iD) {
        var bD, QD, wD;
        const DD = null !== (bD = null === cD || void 0 === cD || null === (QD = cD[pD]) || void 0 === QD ? void 0 : QD.icon) && void 0 !== bD ? bD : `${pD} Enchantment`;
        fD.push({
          icon: DD,
          style: {
            fontSize: "1.5rem"
          }
        }), fD.push({
          str: `${pD} ${null!==(wD=(0,ID.S)(tD))&&void 0!==wD?wD:tD}\n`
        })
      }
      fD.push({
        str: "\n"
      });
      for (const [ID, tD] of iD) {
        var SD, BD, yD, MD;
        const DD = null !== (SD = null === cD || void 0 === cD || null === (BD = cD[ID]) || void 0 === BD ? void 0 : BD.icon) && void 0 !== SD ? SD : `${ID} Enchantment`,
          CD = null !== (yD = null === cD || void 0 === cD || null === (MD = cD[ID]) || void 0 === MD ? void 0 : MD.description) && void 0 !== yD ? yD : (0, pD.j)(ID);
        fD.push({
          icon: DD,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), fD.push({
          str: CD,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), fD.push({
          str: "\n"
        })
      }
      return fD
    }
  },
  35932: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID,
      c: () => pD
    });
    const ID = -1,
      pD = -2
  },
  9057: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      f: () => ND,
      h: () => oD,
      i: () => QD,
      l: () => vD,
      n: () => SD,
      r: () => yD,
      t: () => ZD,
      w: () => BD
    });
    var ID = cD(312),
      pD = cD(624),
      iD = cD(326),
      fD = cD(4070),
      bD = cD(9045);

    function QD(DD, CD) {
      var cD;
      let {
        player: ID,
        chestOrCreative: pD
      } = DD;
      var iD;
      return CD < ID.length ? null !== (iD = ID[CD]) && void 0 !== iD ? iD : null : null !== (cD = pD[CD - ID.length]) && void 0 !== cD ? cD : null
    }

    function wD(DD) {
      var CD;
      return null !== (CD = DD.amount) && void 0 !== CD ? CD : 0
    }

    function SD(DD) {
      return 0 === DD.button || void 0 === DD.button
    }

    function BD(DD) {
      return !!DD.shiftKey
    }

    function yD(DD) {
      return "touches" in DD || "touch" === DD.pointerType || "pen" === DD.pointerType
    }
    const MD = new Set,
      tD = 50;

    function ZD(DD, CD) {
      var cD;
      const ID = null === (cD = DD[CD]) || void 0 === cD ? void 0 : cD.displayName;
      return (0, pD.C)(ID) ? "string" !== typeof CD ? "" : (!MD.has(CD) && MD.size < tD && (MD.add(CD), console.warn(`No item called "${CD}", so its hover shows the name as given`)), CD) : ID
    }

    function oD(DD, CD, cD) {
      var QD, wD, SD, BD, yD, MD, tD, oD, vD, ND, gD, XD, mD, nD;
      const OD = DD.attributes,
        PD = null !== (QD = null === (wD = CD[DD.name]) || void 0 === wD ? void 0 : wD.rootName) && void 0 !== QD ? QD : DD.name,
        HD = null !== (SD = null !== (BD = OD.customDisplayName) && void 0 !== BD ? BD : null === (yD = CD[DD.name]) || void 0 === yD ? void 0 : yD.displayName) && void 0 !== SD ? SD : ZD(CD, PD);
      let UD = HD;
      const xD = null === (MD = OD.customAttributes) || void 0 === MD ? void 0 : MD.enchantmentTier;
      xD && (UD = (0, iD.tb)(HD, {
        colour: iD.lb[xD]
      }));
      const qD = null !== (tD = null !== (oD = null !== (vD = function(DD, CD) {
        var cD;
        if (void 0 === DD || null !== (cD = CD.customAttributes) && void 0 !== cD && cD.author) return DD;
        const pD = (0, ID.bc)(DD);
        return pD.every((DD => "string" === typeof DD)) ? DD : pD.map((DD => "string" === typeof DD ? DD : {
          icon: DD.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(OD.customDescription, OD)) && void 0 !== vD ? vD : null === (ND = CD[DD.name]) || void 0 === ND ? void 0 : ND.description) && void 0 !== oD ? oD : null === (gD = CD[PD]) || void 0 === gD ? void 0 : gD.description) && void 0 !== tD ? tD : "";
      let JD = qD;
      if (null !== (XD = OD.customAttributes) && void 0 !== XD && XD.enchantments) JD = (0, bD.d)(qD, OD.customAttributes.enchantments, OD.customAttributes.enchantmentData);
      else if (cD[PD]) JD = (0, iD.tb)(qD), JD.push({
        str: "\n"
      }), JD.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (mD = OD.customAttributes) && void 0 !== mD && mD.mobSettings) {
        var KD, aD;
        const DD = OD.customAttributes.mobSettings;
        var VD, zD;
        if (JD = [], (0, pD.C)(OD.customAttributes.health) || (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: OD.customAttributes.health.toString()
          }), (0, pD.C)(DD.maxHealth) || (JD.push({
            str: "/"
          }), JD.push({
            str: DD.maxHealth.toString()
          }))), !(0, pD.C)(DD.attackDamage) && DD.attackDamage > 0 && (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: DD.attackDamage.toString()
          })), !(0, pD.C)(DD.secondaryAttackDamage) && DD.secondaryAttackDamage > 0 && (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: DD.secondaryAttackDamage.toString()
          })), (0, pD.C)(DD.baseRunningSpeed) || (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: DD.baseRunningSpeed.toFixed(2)
          })), "Saddled" === DD.metaInfo) JD.push({
          str: "\n"
        }), JD.push({
          str: {
            translationKey: "general:has"
          }
        }), JD.push({
          str: " "
        }), JD.push({
          icon: null !== (VD = null === (zD = DD.tameInfo) || void 0 === zD ? void 0 : zD.saddleItemName) && void 0 !== VD ? VD : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (JD.push({
            str: "\n"
          }), JD.push({
            str: "\n"
          }), DD.petInfo && null !== (KD = DD.tameInfo) && void 0 !== KD && KD.supportsFriendship) {
          const CD = fD.b.getIconsFromFriendshipPoints(DD.petInfo.friendshipPoints);
          for (const DD of CD) JD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          JD.push({
            str: "\n"
          });
          const cD = fD.b.getMobHungerLevel(DD.petInfo.lastFedAt);
          for (const DD of fD.b.hungerLevelIcons[cD]) JD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          JD.push({
            str: " "
          }), JD.push({
            str: fD.b.hungerLevelTranslations[cD],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (DD.tameInfo && null !== (aD = DD.tameInfo) && void 0 !== aD && aD.supportsFriendship) {
          var jD, lD;
          let CD = null !== (jD = DD.tameInfo.likedFoods) && void 0 !== jD ? jD : [];
          JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Superliked]
            }
          }), JD.push({
            str: " "
          }), null !== (lD = DD.petInfo) && void 0 !== lD && lD.superlikedFoodKnown ? (JD.push({
            icon: DD.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), CD = CD.filter((CD => CD !== DD.petInfo.superlikedFood))) : JD.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Liked]
            }
          }), JD.push({
            str: " "
          });
          for (const DD of CD) JD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Neutral]
            }
          }), JD.push({
            str: " "
          });
          for (const cD of null !== (LD = DD.tameInfo.neutralFoods) && void 0 !== LD ? LD : []) {
            var LD;
            JD.push({
              icon: cD,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Disliked]
            }
          }), JD.push({
            str: " "
          });
          for (const cD of null !== (TD = DD.tameInfo.dislikedFoods) && void 0 !== TD ? TD : []) {
            var TD;
            JD.push({
              icon: cD,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        JD.length > 0 ? (JD.shift(), JD.unshift(...(0, iD.tb)(qD))) : JD = (0, iD.tb)(qD)
      }
      return {
        name: UD,
        desc: JD,
        fontStyle: null !== (nD = OD.customAttributes) && void 0 !== nD && nD.author ? "italic" : "normal"
      }
    }

    function vD(DD, CD, cD, ID) {
      const pD = QD(DD, cD),
        iD = QD(DD, ID);
      if (!pD) return !1;
      const fD = CD[pD.name].armourReduction,
        bD = CD[iD.name].armourReduction;
      if (bD === fD) {
        var wD, SD, BD, yD;
        const DD = null !== (wD = null === (SD = pD.attributes.customAttributes) || void 0 === SD ? void 0 : SD.enchantmentTier) && void 0 !== wD ? wD : "Tier 0",
          CD = null !== (BD = null === (yD = iD.attributes.customAttributes) || void 0 === yD ? void 0 : yD.enchantmentTier) && void 0 !== BD ? BD : "Tier 0";
        return parseInt(DD.replace("Tier ", "")) >= parseInt(CD.replace("Tier ", ""))
      }
      return fD > bD
    }

    function ND(DD) {
      let CD;
      if ("number" === typeof DD) {
        const cD = document.querySelector(`[data-inven-idx="${DD}"]`);
        if (!cD) return null;
        CD = cD.getBoundingClientRect()
      } else CD = DD.getBoundingClientRect();
      return {
        x: CD.left + CD.width / 2,
        y: CD.top + CD.height / 2
      }
    }
  },
  8940: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      h: () => tD,
      k: () => ZD
    });
    var ID = cD(1442),
      pD = cD(53),
      iD = cD(1305),
      fD = cD(4325),
      bD = cD(2295),
      QD = cD(1192),
      wD = cD(90),
      SD = cD(1954),
      BD = cD(1328),
      yD = cD(1093);

    function MD(DD) {
      let {
        show: CD,
        onClose: cD
      } = DD;
      const {
        requestedGameNameWithVariation: ID,
        lobbyName: pD,
        shownLobbyName: iD
      } = (0, SD.h)("connectedGame"), QD = (0, bD.b)(ID, pD, !1);
      return wD.featureFlags.canUseInviteLinks && (0, yD.jsx)(fD.e, {
        show: CD,
        close: cD,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, yD.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, yD.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, yD.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, yD.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === QD ? (0, yD.jsx)(BD.e, {}) : QD, (0, yD.jsx)("br", {}), "Lobby Name: ", iD, (0, yD.jsx)("br", {}), (0, yD.jsx)("br", {}), (0, yD.jsx)("br", {}), (0, yD.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, yD.jsx)(tD, {})]
        })
      })
    }

    function tD() {
      var DD;
      const {
        t: CD
      } = (0, QD.F)(), cD = null !== (DD = ZD(wD.featureFlags.canUseInviteLinks)) && void 0 !== DD ? DD : "Loading Link...", [iD, fD] = (0, pD.useState)(0), [bD, SD] = (0, pD.useReducer)((DD => DD + 1), 0);
      return (0, pD.useEffect)((() => {
        const DD = setTimeout((() => {
          SD()
        }), 1100);
        return () => {
          clearTimeout(DD)
        }
      }), [iD]), wD.featureFlags.canUseInviteLinks && (0, yD.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, yD.jsx)("div", {
          className: "InviteLinkInner",
          children: cD
        }), (0, yD.jsx)(ID.i, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(cD).catch((DD => {
              console.error("Failed to copy invite link:", DD)
            })), fD(Date.now())
          },
          disabled: Date.now() - iD < 1e3,
          children: Date.now() - iD < 1e3 ? CD("general:copied") : CD("general:copy")
        })]
      })
    }

    function ZD(DD) {
      const [CD, cD] = (0, pD.useState)(null);
      return (0, pD.useEffect)((() => {
        if (!DD) return;
        let CD = !0;
        return (0, iD.u)().then((DD => {
          CD && cD(DD)
        })).catch((DD => {
          console.error("Failed to get invite link:", DD)
        })), () => {
          CD = !1
        }
      }), [DD]), CD
    }
  },
  36382: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => PD
    });
    var ID = cD(53),
      pD = cD(2358),
      iD = cD(1872),
      fD = cD(611),
      bD = cD(20),
      QD = cD(1049),
      wD = cD.n(QD),
      SD = cD(35958),
      BD = cD(2468),
      yD = cD(35962),
      MD = cD(2495),
      tD = cD(2474),
      ZD = cD(3410),
      oD = cD(16),
      vD = cD(2003),
      ND = cD(2308),
      gD = cD(1221),
      XD = cD(4681),
      mD = cD(1954),
      nD = cD(90),
      OD = cD(1093);
    const PD = (0, ID.memo)((function() {
      const DD = (0, pD.h)("lobbyLeaderboardInfo"),
        CD = (0, mD.h)("players"),
        cD = (0, mD.h)("lobbyLeaderboardRows"),
        bD = (0, mD.h)("hiddenPlayerNames"),
        QD = (0, ID.useRef)(null),
        [wD, SD] = (0, ID.useReducer)((DD => DD + 1), 0);
      return (0, ID.useEffect)((() => (0, vD.d)((() => {
        SD()
      }))), []), (0, OD.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, OD.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!DD) return (0, OD.jsx)(OD.Fragment, {});
            const ID = JSON.parse(JSON.stringify(DD)),
              pD = [...CD.ids],
              wD = {},
              SD = {};
            for (const DD of pD) {
              var BD, MD;
              wD[DD] = null === (BD = cD[DD]) || void 0 === BD ? void 0 : BD.colour;
              const CD = null === (MD = cD[DD]) || void 0 === MD ? void 0 : MD.values;
              CD && (SD[DD] = {
                ...CD
              })
            }
            const tD = Object.keys(ID);
            tD.sort(((DD, CD) => ID[DD].sortPriority - ID[CD].sortPriority)), pD.sort(((DD, CD) => {
              if (!SD[DD] || !SD[CD]) return 0;
              for (const cD of tD) {
                const pD = SD[DD][cD],
                  iD = SD[CD][cD];
                let fD = 0;
                if ("string" == typeof pD && "string" == typeof iD ? fD = pD.localeCompare(iD) : "number" == typeof pD && "number" == typeof iD ? fD = pD - iD : "number" == typeof pD && "string" == typeof iD ? fD = 1 : "string" == typeof pD && "number" == typeof iD && (fD = -1), fD) return fD * ("ascending" === ID[cD].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const DD of pD) {
              var ZD, oD, mD;
              const {
                name: ID,
                ranks: pD,
                cosmetics: iD
              } = CD.byId[DD], bD = [], QD = null !== (ZD = null === (oD = cD[DD]) || void 0 === oD || null === (mD = oD.tags) || void 0 === mD ? void 0 : mD.flatMap((DD => 0 === DD.length ? DD : [...DD, String.fromCharCode(8198)]))) && void 0 !== ZD ? ZD : [];
              bD.push(...QD), bD.push(...(0, gD.r)(pD, ID, (null === iD || void 0 === iD ? void 0 : iD.nameColour) === fD.b || null === iD || void 0 === iD ? void 0 : iD.nameColour)), SD[DD] ??= {}, SD[DD].name = bD
            }

            function nD(DD, cD) {
              if (SD[DD] && void 0 !== SD[DD][cD]) {
                if ("name" === cD) {
                  const {
                    name: ID,
                    cosmetics: pD
                  } = CD.byId[DD];
                  return (0, OD.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [pD && (0, OD.jsx)(ND.e, {
                      cosmetics: pD
                    }), " ", (0, OD.jsx)(iD.c, {
                      text: SD[DD][cD],
                      friendBadgeFor: (0, vD.f)(ID, bD) ? ID : void 0
                    })]
                  })
                }
                return (0, OD.jsx)(iD.c, {
                  text: SD[DD][cD]
                })
              }
              return ""
            }
            const PD = Object.keys(ID).filter((DD => !0 !== ID[DD].hidden)).map((DD => {
              var CD;
              return {
                key: DD,
                header: (0, OD.jsx)(iD.c, {
                  text: null !== (CD = ID[DD].displayName) && void 0 !== CD ? CD : ""
                })
              }
            }));
            return (0, OD.jsx)("div", {
              ref: QD,
              className: "LobbyLeaderboard",
              children: (0, OD.jsx)(XD.e, {
                columns: PD,
                rows: pD,
                getRowKey: DD => DD,
                renderRow: DD => {
                  const cD = DD !== CD.localId;
                  return (0, OD.jsx)(HD, {
                    playerId: DD,
                    playerName: CD.byId[DD].name,
                    isOtherPlayer: cD,
                    opensProfileCard: (0, yD.h)(cD, CD.byId[DD].name, bD),
                    lobbyLeaderboardInfo: ID,
                    getPlayerValue: nD,
                    playerColors: wD
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function HD(DD) {
      let {
        playerId: CD,
        playerName: cD,
        isOtherPlayer: pD,
        opensProfileCard: iD,
        lobbyLeaderboardInfo: fD,
        getPlayerValue: QD,
        playerColors: vD
      } = DD;
      const ND = (0, ID.useRef)(null);
      (0, ID.useEffect)((() => () => {
        BD.b.closeIfOwner(ND)
      }), []);
      const gD = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            bD.i.Uo("OpenReportMenu", {
              playerEId: CD,
              playerName: cD,
              Rf: null,
              serverChatMsgId: null
            })
          }
        },
        XD = () => ({
          ...(0, yD.e)(CD, cD),
          showLocation: !1,
          status: null,
          extraActions: [gD],
          friendRequestSource: "leaderboard"
        });
      return (0, OD.jsxs)("tr", {
        ref: ND,
        "data-pad-focusable": iD || void 0,
        [BD.f]: iD || void 0,
        onClick: iD ? () => {
          var DD;
          BD.b.toggle(ND, {
            ...XD(),
            anchor: null !== (DD = ND.current.querySelector(".PlayerPfpAndName")) && void 0 !== DD ? DD : ND.current
          })
        } : void 0,
        onContextMenu: iD ? DD => {
          (0, MD.h)(ND, DD, XD(), oD.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: iD ? DD => {
          (0, tD.c)(DD, (() => (0, yD.e)(CD, cD).playerSocialPreview))
        } : void 0,
        children: [Object.keys(fD).map((DD => !0 === fD[DD].hidden ? null : (0, OD.jsxs)("td", {
          className: wD()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !pD
          }),
          children: [(0, OD.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: QD(CD, DD)
          }), (0, OD.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: vD[CD]
            }
          })]
        }, DD))), pD && !iD && (0, OD.jsx)(SD.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: ND,
          options: [{
            icon: gD.icon,
            text: gD.text,
            onPointerDown: gD.onClick
          }, ...null === cD || nD.featureFlags.useSocialFeatures ? [] : (0, ZD.c)(null, cD)]
        })]
      })
    }
  },
  4557: (DD, CD, cD) => {
    cD.d(CD, {
      f: () => ND,
      b: () => vD
    });
    var ID = cD(53),
      pD = cD(1440),
      iD = cD(1872),
      fD = cD(4560),
      bD = cD(1093);
    const QD = (0, ID.memo)((function(DD) {
      let {
        initialParameters: CD
      } = DD;
      const cD = (0, ID.useRef)(null),
        pD = (0, ID.useRef)(null),
        QD = (0, ID.useRef)(0),
        wD = (0, ID.useRef)(null),
        SD = CD.description,
        BD = CD.LD,
        {
          scale: yD,
          rotation: MD
        } = null !== CD && void 0 !== CD ? CD : {},
        tD = (0, fD.e)();
      return (0, ID.useEffect)((() => {
        const DD = tD.onFrame((() => {
          const DD = tD.getState();
          if (!DD.isActive || !cD.current || !pD.current) return;
          const CD = DD.state;
          if (cD.current.value = CD.progress, CD.clickCount > QD.current) {
            QD.current = CD.clickCount;
            const DD = pD.current;
            DD.classList.add("pulse"), wD.current = setTimeout((() => {
              DD.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(wD.current), DD()
        }
      }), [tD]), (0, bD.jsx)(bD.Fragment, {
        children: (0, bD.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== yD && {
              "--scale": yD
            },
            ...null !== MD && {
              "--rotation": `${MD}deg`
            }
          },
          children: [(0, bD.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: cD
          }), (0, bD.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: pD,
            children: (0, bD.jsx)(iD.c, {
              text: [{
                icon: BD
              }]
            })
          }), (0, bD.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, bD.jsx)(iD.c, {
              text: SD
            })
          })]
        })
      })
    }));
    var wD = cD(1049),
      SD = cD.n(wD);
    const BD = 2 * Math.PI * 90,
      yD = (0, ID.memo)((function(DD) {
        let {
          initialParameters: CD
        } = DD;
        const cD = (0, ID.useRef)(null),
          pD = (0, ID.useRef)(null),
          QD = (0, ID.useRef)(null),
          wD = CD.label,
          yD = CD.icon,
          MD = CD.RD,
          {
            scale: tD,
            rotation: ZD,
            kD: oD
          } = null !== CD && void 0 !== CD ? CD : {},
          vD = (0, fD.e)();
        return (0, ID.useEffect)((() => {
          const DD = vD.onFrame((() => {
            var DD, CD;
            const ID = vD.getState();
            if (!ID.isActive || !pD.current) return;
            const iD = ID.state,
              fD = null !== (DD = iD.timeRemaining) && void 0 !== DD ? DD : 0,
              bD = null !== (CD = iD.GD) && void 0 !== CD ? CD : 1,
              wD = BD * (1 - fD / bD);
            pD.current.style.strokeDashoffset = `${wD}`, cD.current && (cD.current.style.opacity = fD > 0 ? "1" : "0"), QD.current && MD && (QD.current.textContent = `${(fD/1e3).toFixed(1)}s`)
          }));
          return () => {
            DD()
          }
        }), [vD, MD]), (0, bD.jsxs)("div", {
          className: "QTETimedClick",
          ref: cD,
          style: {
            ...null !== tD && {
              "--scale": tD
            },
            ...null !== ZD && {
              "--rotation": `${ZD}deg`
            }
          },
          children: [(0, bD.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, bD.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, bD.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, bD.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: BD,
                ref: pD
              })]
            }), (0, bD.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, bD.jsx)(iD.c, {
                text: [{
                  icon: yD
                }],
                className: SD()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: oD
                })
              })
            })]
          }), (0, bD.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, bD.jsx)(iD.c, {
              text: wD,
              className: "QTETimedClickLabelText"
            }), MD && (0, bD.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: QD
            })]
          })]
        })
      })),
      MD = (0, ID.memo)((function(DD) {
        let {
          initialParameters: CD
        } = DD;
        const cD = (0, ID.useRef)(null),
          pD = (0, ID.useRef)(null),
          QD = (0, ID.useRef)(null),
          wD = (0, ID.useRef)(!1),
          SD = CD.description,
          BD = null === CD || void 0 === CD ? void 0 : CD.icon,
          yD = (0, fD.e)();
        return (0, ID.useEffect)((() => {
          const DD = yD.onFrame((() => {
            const DD = yD.getState();
            if (!DD.isActive) return;
            const CD = DD.state;
            if (cD.current) {
              const DD = 100 * (CD.catchZonePosition - CD.YD / 2);
              cD.current.style.left = `${DD}%`, cD.current.style.width = 100 * CD.YD + "%", CD.isCatching !== wD.current && (wD.current = CD.isCatching, CD.isCatching ? cD.current.classList.add("catching") : cD.current.classList.remove("catching"))
            }
            pD.current && (pD.current.style.left = 100 * CD.moverPosition + "%"), QD.current && (QD.current.value = CD.progress)
          }));
          return () => {
            DD()
          }
        }), [yD]), (0, bD.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, bD.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, bD.jsx)(iD.c, {
              text: SD
            })
          }), (0, bD.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: QD
          }), (0, bD.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, bD.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: cD
            }), (0, bD.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: pD,
              children: (0, bD.jsx)("span", {
                children: BD && (0, bD.jsx)(iD.c, {
                  text: [{
                    icon: BD,
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
    var tD = cD(624);
    const ZD = (0, ID.memo)((function(DD) {
        let {
          initialParameters: CD
        } = DD;
        const cD = (0, ID.useRef)(null),
          pD = CD.label,
          QD = CD.rD,
          {
            icon: wD,
            scale: SD,
            rotation: BD
          } = null !== CD && void 0 !== CD ? CD : {},
          yD = 100 * (.5 - QD / 2),
          MD = 100 * QD,
          ZD = (0, fD.e)();
        return (0, ID.useEffect)((() => {
          const DD = ZD.onFrame((() => {
            const DD = ZD.getState();
            if (!DD.isActive || !cD.current) return;
            const CD = DD.state;
            cD.current.style.left = 100 * CD.markerPosition + "%"
          }));
          return () => {
            DD()
          }
        }), [ZD]), (0, bD.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, tD.C)(SD) && {
              "--scale": SD
            },
            ...!(0, tD.C)(BD) && {
              "--rotation": `${BD}deg`
            }
          },
          children: [wD && (0, bD.jsx)(iD.c, {
            text: [{
              icon: wD
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, bD.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, bD.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${yD}%`,
                width: `${MD}%`
              }
            }), (0, bD.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: cD
            })]
          }), (0, bD.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, bD.jsx)(iD.c, {
              text: pD
            })
          })]
        })
      })),
      oD = (0, ID.memo)((function(DD) {
        let {
          initialParameters: CD
        } = DD;
        const cD = (0, ID.useRef)(null),
          [pD, QD] = (0, ID.useState)((() => new Array(CD.FD).fill("pending"))),
          [wD, SD] = (0, ID.useState)((() => {
            const DD = CD.cC;
            return (0, tD.C)(DD) || DD <= 0 ? [] : new Array(DD).fill("pending")
          })),
          BD = CD.label,
          {
            icon: yD
          } = CD,
          MD = (0, ID.useRef)(0),
          ZD = (0, ID.useRef)(0),
          oD = (0, ID.useRef)([]),
          vD = (0, fD.e)();
        return (0, ID.useEffect)((() => {
          const DD = vD.onFrame((() => {
            const DD = vD.getState();
            if (!DD.isActive || !cD.current) return;
            const CD = DD.state,
              ID = 30 + 60 * CD.outerCircleProgress;
            if (cD.current.setAttribute("r", String(ID)), !0 === CD.lastClickResult && CD.successes > MD.current) {
              cD.current.classList.remove("QTERhythmClickOuterCircle--miss"), cD.current.classList.add("QTERhythmClickOuterCircle--hit");
              const DD = setTimeout((() => {
                var DD;
                null === (DD = cD.current) || void 0 === DD || DD.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              oD.current.push(DD)
            } else if (!1 === CD.lastClickResult && CD.misses > ZD.current) {
              cD.current.classList.remove("QTERhythmClickOuterCircle--hit"), cD.current.classList.add("QTERhythmClickOuterCircle--miss");
              const DD = setTimeout((() => {
                var DD;
                null === (DD = cD.current) || void 0 === DD || DD.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              oD.current.push(DD)
            }
            CD.successes === MD.current && CD.misses === ZD.current || (MD.current = CD.successes, ZD.current = CD.misses, QD((DD => {
              const cD = [...DD];
              for (let ID = 0; ID < CD.FD; ID++) cD[ID] = ID < CD.successes ? "success" : "pending";
              return cD
            })), SD((DD => {
              if (0 === DD.length) return DD;
              const cD = [...DD];
              for (let ID = 0; ID < cD.length; ID++) cD[ID] = ID < CD.misses ? "miss" : "pending";
              return cD
            })))
          }));
          return () => {
            DD();
            for (const DD of oD.current) clearTimeout(DD);
            oD.current = []
          }
        }), [vD]), (0, bD.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, bD.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: pD.map(((DD, CD) => (0, bD.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === DD ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, CD)))
          }), (0, bD.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, bD.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, bD.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, bD.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: cD
              })]
            }), yD && (0, bD.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, bD.jsx)(iD.c, {
                text: [{
                  icon: yD
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), wD.length > 0 && (0, bD.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: wD.map(((DD, CD) => (0, bD.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === DD ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, CD)))
          }), (0, bD.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, bD.jsx)(iD.c, {
              text: BD
            })
          })]
        })
      }));

    function vD(DD) {
      let {
        qte: CD
      } = DD;
      switch (CD.type) {
        case "progressBar":
          return (0, bD.jsx)(QD, {
            initialParameters: CD.parameters
          });
        case "timedClick":
          return (0, bD.jsx)(yD, {
            initialParameters: CD.parameters
          });
        case "gravityBar":
          return (0, bD.jsx)(MD, {
            initialParameters: CD.parameters
          });
        case "precisionBar":
          return (0, bD.jsx)(ZD, {
            initialParameters: CD.parameters
          });
        case "rhythmClick":
          return (0, bD.jsx)(oD, {
            initialParameters: CD.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const ND = (0, ID.memo)((function() {
      const [DD, CD] = (0, ID.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, pD.f)("qteStateUpdated", (DD => {
        CD(DD)
      })), DD.isActive && DD.type ? (0, bD.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, bD.jsx)(vD, {
          qte: DD
        })
      }) : null
    }))
  },
  4560: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      e: () => QD
    });
    var ID = cD(53),
      pD = cD(1294),
      iD = cD(4562);
    const fD = {
        getState: () => iD.e.getCurrentState(),
        onFrame: pD.n
      },
      bD = (0, ID.createContext)(fD);

    function QD() {
      return (0, ID.useContext)(bD)
    }
  },
  9039: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1954),
      bD = cD(1093);

    function QD(DD) {
      const CD = Math.floor(DD / 3600),
        cD = Math.floor(DD % 3600 / 60),
        ID = Math.floor(DD % 60),
        pD = `${cD.toString().padStart(2,"0")}:${ID.toString().padStart(2,"0")}`;
      return CD > 0 ? `${CD}:${pD}` : pD
    }
    const wD = (0, ID.memo)((function(DD) {
      let {
        className: CD
      } = DD;
      const {
        recording: cD,
        seconds: ID
      } = (0, fD.h)("replayRecorder");
      return cD ? (0, bD.jsxs)("div", {
        className: iD()("RecordingIndicator", CD),
        children: [(0, bD.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, bD.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, bD.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: QD(ID)
        })]
      }) : null
    }))
  },
  35769: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      g: () => yD
    });
    var ID = cD(53),
      pD = cD(1340),
      iD = cD(1192),
      fD = cD(1328),
      bD = cD(3295),
      QD = cD(4704),
      wD = cD(1093);

    function SD(DD) {
      let {
        loading: CD,
        schematics: cD,
        onSchematicPicked: ID,
        selectedSchematicIdList: pD = [],
        disableAutoExport: QD
      } = DD;
      const {
        t: SD
      } = (0, iD.F)();
      return (0, wD.jsxs)("div", {
        className: "SchematicList",
        children: [CD && (0, wD.jsx)(fD.e, {}), !CD && 0 === cD.length && (0, wD.jsx)("div", {
          className: "NoSchematicsText",
          children: SD("worldBuilder:noSavedSchematic")
        }), !CD && cD.map((DD => (0, wD.jsx)(bD.f, {
          source: {
            type: "schematic",
            schematic: DD
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            ID(DD)
          },
          isSelected: pD.includes(DD.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: DD.isAutoExported && QD,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, DD.schematicId)))]
      })
    }

    function BD(DD) {
      let {
        ownedSchematics: CD,
        currentWorldSchematicId: cD,
        onClose: pD
      } = DD;
      const {
        t: fD
      } = (0, iD.F)(), [bD, BD] = (0, ID.useState)(null);
      return (0, wD.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bD && (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: fD("worldBuilder:schematicList")
          }), (0, wD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fD("worldBuilder:clickSchematicForOptions")
          }), (0, wD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wD.jsx)(SD, {
              loading: !1,
              schematics: CD,
              onSchematicPicked: DD => {
                BD(DD)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bD && (0, wD.jsx)(QD.i, {
          schematic: bD,
          inSourceWorld: bD.schematicId === cD,
          onSchematicUpdate: DD => {
            BD(DD)
          },
          onClose: () => {
            BD(null), pD()
          }
        })]
      })
    }

    function yD(DD) {
      let {
        ownedSchematics: CD,
        currentWorldSchematicId: cD,
        onClose: ID
      } = DD;
      pD.NotificationProvider.showCustomPopup({
        body: DD => (0, wD.jsx)(BD, {
          ownedSchematics: CD,
          currentWorldSchematicId: cD,
          onClose: DD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ID,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36285: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => mD,
      g: () => XD
    });
    var ID = cD(4102),
      pD = cD(1440),
      iD = cD(53),
      fD = cD(6212),
      bD = cD(4089),
      QD = cD(1284),
      wD = cD(1905),
      SD = cD(1872),
      BD = cD(1442),
      yD = cD(1192),
      MD = cD(36292),
      tD = cD(1049),
      ZD = cD.n(tD),
      oD = cD(1305),
      vD = cD(1064),
      ND = cD(1280),
      gD = cD(1093);
    const XD = "SleepingOverlay";

    function mD() {
      const {
        t: DD
      } = (0, yD.F)(), [CD, cD] = (0, iD.useState)(!1), [tD, mD] = (0, iD.useState)(null), [OD, PD] = (0, iD.useState)(1), [HD, UD] = (0, iD.useState)(!1), [xD, qD] = (0, iD.useState)(!1), JD = (0, iD.useRef)(0), KD = (0, iD.useRef)(!1), aD = (0, iD.useRef)(!1), VD = (0, iD.useRef)(), zD = (0, iD.useRef)(null);

      function jD() {
        const DD = null !== tD && void 0 !== tD ? tD : "Rested Speed";
        wD.gameBridge.send("wakeUp", xD ? DD : null), zD.current = null, cD(!1), mD(null), PD(1), UD(!1), qD(!1)
      }

      function lD() {
        return !HD && (jD(), !0)
      }
      return (0, pD.f)("PlayerPhysicsTypeUpdate", (DD => {
        DD !== zD.current && (zD.current = DD, DD === fD.p.SLEEPING ? (aD.current || (JD.current = wD.gameBridge.lookup("cameraZoom", null), aD.current = !0), KD.current = !0, wD.gameBridge.send("setCameraZoom", 3), cD(!0), PD(function() {
          for (const DD of wD.gameBridge.lookup("blocksStandingOn", null)) {
            if (MD.b.leafBeds.includes(DD)) return console.log(`Found leaf bed: ${DD}`), 1;
            if (MD.b.woolBeds.includes(DD)) return console.log(`Found woold bed: ${DD}`), 2;
            if (MD.b.strongBeds.includes(DD)) return console.log(`Found strong bed ${DD}`), 3
          }
          return 1
        }())) : (aD.current = !1, cD(!1), mD(null), PD(1)))
      })), (0, iD.useEffect)((() => () => {
        (0, QD.l)(XD)
      }), []), (0, iD.useEffect)((() => {
        CD ? (0, QD.p)(XD) : ((0, QD.l)(XD), KD.current && (wD.gameBridge.send("setCameraZoom", JD.current), KD.current = !1))
      }), [CD]), (0, ND.t)("overlay", VD, lD, CD), (0, gD.jsx)(ID.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: CD,
        timeout: 300,
        nodeRef: VD,
        unmountOnExit: !0,
        children: (0, gD.jsx)("div", {
          ref: VD,
          onClick: DD => {
            lD() && DD.stopPropagation()
          },
          children: (0, gD.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, gD.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bD.i.map((CD => (0, gD.jsxs)(nD, {
                restedEffect: CD,
                qb: tD,
                setChosenRestedEffect: mD,
                children: [(0, gD.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, gD.jsx)(SD.c, {
                    text: [{
                      icon: CD
                    }]
                  }), bD.g[CD].shortName]
                }), (0, gD.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: DD(bD.g[CD].description, {
                    time: bD.g[CD].effectLevelDurations[OD] / 6e4
                  })
                })]
              }, CD)))
            }), (0, gD.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, gD.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, gD.jsxs)(BD.i, {
                className: "SleepingOverlayWakeUpButton",
                onClick: DD => {
                  xD ? jD() : (UD(!0), (0, oD.Z)((() => {
                    UD(!1), qD(!0)
                  }), !0)), DD.stopPropagation()
                },
                loading: HD,
                children: [!xD && (0, gD.jsxs)(gD.Fragment, {
                  children: [(0, gD.jsx)(vD.c, {
                    name: "film"
                  }), " ", DD("classicGame:watchAdToGetRestedPerk")]
                }), xD && DD("classicGame:wakeUp")]
              }), (0, gD.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, gD.jsx)("div", {
                  className: ZD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === OD
                  }),
                  children: (0, gD.jsx)(SD.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, gD.jsx)("div", {
                  className: ZD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === OD
                  }),
                  children: (0, gD.jsx)(SD.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, gD.jsx)("div", {
                  className: ZD()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === OD
                  }),
                  children: (0, gD.jsx)(SD.c, {
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
    const nD = (0, iD.memo)((function(DD) {
      let {
        children: CD,
        restedEffect: cD,
        qb: ID,
        setChosenRestedEffect: pD
      } = DD;
      return cD === ID ? (0, gD.jsx)(BD.o, {
        onClick: DD => {
          DD.stopPropagation()
        },
        children: CD
      }) : (0, gD.jsx)(BD.k, {
        onClick: DD => {
          pD(cD), DD.stopPropagation()
        },
        children: CD
      })
    }))
  },
  35962: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD,
      h: () => QD
    });
    var ID = cD(611),
      pD = cD(1905),
      iD = cD(1629),
      fD = cD(90),
      bD = cD(1260);

    function QD(DD, CD, cD) {
      return fD.featureFlags.useSocialFeatures && DD && null === (0, bD.d)(CD, cD)
    }

    function wD(DD, CD) {
      var cD, fD;
      const bD = iD.e.getSocialState().friends.find((DD => DD.name.toLowerCase() === CD.toLowerCase())),
        QD = pD.gameBridge.latest("players").byId[DD],
        wD = void 0 !== QD && QD.name === CD,
        SD = wD && null !== (cD = QD.cosmetics) && void 0 !== cD ? cD : void 0,
        BD = bD && SD ? {
          ...bD,
          cosmetics: SD
        } : bD;
      return {
        playerSocialPreview: null !== BD && void 0 !== BD ? BD : {
          isError: !1,
          name: CD,
          ranks: wD ? [...QD.ranks] : [],
          cosmetics: null !== SD && void 0 !== SD ? SD : {},
          nameColour: null !== (fD = null === SD || void 0 === SD ? void 0 : SD.nameColour) && void 0 !== fD ? fD : ID.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== bD
      }
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  4681: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1093);

    function bD(DD) {
      let {
        columns: CD,
        rows: cD,
        getRowKey: pD,
        renderRow: bD,
        className: QD
      } = DD;
      return (0, fD.jsxs)("table", {
        className: iD()("Table", QD),
        children: [(0, fD.jsx)("thead", {
          children: (0, fD.jsx)("tr", {
            children: CD.map((DD => (0, fD.jsx)("th", {
              children: DD.header
            }, DD.key)))
          })
        }), (0, fD.jsx)("tbody", {
          children: cD.map((DD => (0, fD.jsx)(ID.Fragment, {
            children: bD(DD)
          }, pD(DD))))
        })]
      })
    }
  },
  36235: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => PD,
      h: () => nD,
      l: () => OD,
      n: () => tD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(62),
      bD = cD(1365),
      QD = cD(1442),
      wD = cD(1356),
      SD = cD(1280),
      BD = cD(1192),
      yD = cD(36240),
      MD = cD(1093);

    function tD(DD) {
      const [CD, cD] = (0, iD.useState)((() => (0, yD.m)(DD)));
      return (0, iD.useEffect)((() => (cD((0, yD.m)(DD)), (0, yD.J)((() => {
        cD((0, yD.m)(DD))
      })))), [DD]), CD
    }

    function ZD(DD, CD) {
      "function" === typeof DD ? DD(CD) : DD && (DD.current = CD)
    }

    function oD(DD) {
      let {
        tutorial: CD,
        step: cD,
        enabled: ID = !0
      } = DD;
      const pD = tD(CD);
      return ID && pD === cD
    }

    function vD(DD, CD) {
      const cD = (0, yD.n)(DD),
        ID = cD.indexOf(CD);
      return !cD.slice(ID + 1).some((CD => (0, yD.u)(DD, CD)))
    }

    function ND(DD, CD, cD, ID) {
      let {
        tutorial: pD,
        step: iD,
        waitForClick: fD = !1,
        onPrevious: bD
      } = DD;
      const QD = CD && (0, yD.s)(pD, iD),
        wD = CD && !vD(pD, iD),
        BD = fD ? ID : cD;
      let MD = null;
      QD ? MD = () => {
        null === bD || void 0 === bD || bD(), (0, yD.o)(pD, iD)
      } : wD && (MD = () => {
        (0, yD.l)(pD)
      }), (0, SD.t)("popup", null !== BD && void 0 !== BD ? BD : cD, MD, CD && null !== BD, null, QD ? void 0 : "controller:menusSkipTutorial")
    }

    function gD(DD) {
      let {
        tutorial: CD,
        step: cD,
        text: ID,
        waitForClick: pD = !1,
        onPrevious: iD
      } = DD;
      const {
        t: fD
      } = (0, BD.F)(), bD = vD(CD, cD);
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("div", {
          className: "TutorialStepText",
          children: ID
        }), (0, MD.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, yD.s)(CD, cD) && (0, MD.jsx)(QD.k, {
            className: "TutorialStepButton",
            onClick: () => {
              null === iD || void 0 === iD || iD(), (0, yD.o)(CD, cD)
            },
            children: fD("tutorial:back")
          }), !pD && (0, MD.jsx)(QD.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, yD.f)(cD)
            },
            padDefaultFocus: !0,
            children: fD(bD ? "tutorial:done" : "tutorial:next")
          }), !bD && (0, MD.jsx)(QD.k, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, yD.l)(CD)
            },
            children: fD("tutorial:skip")
          })]
        })]
      })
    }
    const XD = 6;

    function mD(DD) {
      let {
        rect: CD,
        margin: cD
      } = DD;
      const ID = Math.max(0, CD.top - cD),
        pD = CD.bottom + cD,
        iD = Math.max(0, CD.left - cD),
        fD = CD.right + cD;
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: ID
          }
        }), (0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pD,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: ID,
            left: 0,
            width: iD,
            height: pD - ID
          }
        }), (0, MD.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: ID,
            left: fD,
            right: 0,
            height: pD - ID
          }
        })]
      })
    }

    function nD(DD) {
      let {
        target: CD,
        placement: cD,
        boxRef: ID,
        className: QD,
        spotlightMargin: SD = XD,
        children: BD
      } = DD;
      const {
        getArrowProps: yD,
        getTooltipProps: tD,
        setTooltipRef: ZD,
        setTriggerRef: oD
      } = (0, bD.c)({
        placement: cD,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, SD]
      });
      (0, iD.useLayoutEffect)((() => {
        oD(CD)
      }), [CD, oD]);
      const vD = function(DD, CD) {
        const [cD, ID] = (0, iD.useState)(null);
        return (0, iD.useEffect)((() => {
          if (!CD || !DD) return void ID(null);
          let cD = 0,
            pD = null;
          const iD = () => {
            const CD = DD.getBoundingClientRect();
            pD && CD.left === pD.left && CD.top === pD.top && CD.width === pD.width && CD.height === pD.height || (pD = CD, ID(CD)), cD = requestAnimationFrame(iD)
          };
          return iD(), () => {
            cancelAnimationFrame(cD)
          }
        }), [DD, CD]), cD
      }(CD, !0);
      (0, iD.useEffect)((() => {
        null === CD || void 0 === CD || CD.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [CD]);
      const ND = (0, iD.useCallback)((DD => {
        ZD(DD), ID && (ID.current = DD)
      }), [ZD, ID]);
      return (0, fD.createPortal)((0, MD.jsxs)(MD.Fragment, {
        children: [vD && (0, MD.jsx)(mD, {
          rect: vD,
          margin: SD
        }), (0, MD.jsxs)("div", {
          ref: ND,
          ...tD({
            className: pD()("tooltip-container SmallTextLight TutorialStep", QD)
          }),
          children: [BD, (0, MD.jsx)("div", {
            ...yD({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, wD.g)())
    }
    const OD = (0, iD.forwardRef)((function(DD, CD) {
      let {
        placement: cD = "right",
        children: ID,
        ...pD
      } = DD;
      const fD = oD(pD),
        bD = (0, iD.useRef)(null),
        QD = (0, iD.useRef)(null);
      ND(pD, fD, bD, QD);
      const [wD, SD] = (0, iD.useState)(null), BD = ID.ref, yD = (0, iD.useCallback)((DD => {
        QD.current = DD, SD(DD), ZD(CD, DD), ZD(BD, DD)
      }), [CD, BD]);
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, iD.cloneElement)(ID, {
          ref: yD
        }), fD && (0, MD.jsx)(nD, {
          target: wD,
          placement: cD,
          boxRef: bD,
          children: (0, MD.jsx)(gD, {
            ...pD
          })
        })]
      })
    }));

    function PD(DD) {
      const CD = oD(DD),
        cD = (0, iD.useRef)(null);
      return ND(DD, CD, cD, null), CD ? (0, fD.createPortal)((0, MD.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, MD.jsx)("div", {
          ref: cD,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, MD.jsx)(gD, {
            ...DD
          })
        })
      }), (0, wD.g)()) : null
    }
  },
  36085: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => fD,
      h: () => bD,
      i: () => QD
    });
    var ID = cD(53),
      pD = cD(1113);
    const iD = 8,
      fD = "InGameHeaderContainer",
      bD = "TopRightElements";

    function QD(DD) {
      const [CD] = (0, pD.b)(), [cD, QD] = (0, ID.useState)(!1);
      return (0, ID.useLayoutEffect)((() => {
        if (!DD) return;
        const CD = document.querySelector(`.${fD}`),
          cD = document.querySelector(`.${bD}`),
          ID = () => {
            const ID = DD.getBoundingClientRect(),
              pD = CD ? CD.getBoundingClientRect().right : 0,
              fD = cD ? cD.getBoundingClientRect().left : window.innerWidth,
              bD = ID.left < pD + iD,
              wD = ID.right > fD - iD;
            QD(bD || wD)
          };
        ID();
        const pD = new ResizeObserver(ID);
        return pD.observe(DD), CD && pD.observe(CD), cD && pD.observe(cD), () => {
          pD.disconnect()
        }
      }), [DD, CD]), cD
    }
  },
  6320: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(53),
      pD = cD(36);

    function iD(DD, CD) {
      var cD;
      const [iD, fD] = (0, ID.useState)(null !== (cD = pD.h.getItem(DD)) && void 0 !== cD ? cD : CD);
      return [iD, CD => {
        pD.h.setItem(DD, CD), fD(CD)
      }]
    }
  },
  36260: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(16),
      pD = cD(1305);

    function iD() {
      const {
        clientEscMenuOptions: DD
      } = (0, ID.o)(["clientEscMenuOptions"]);
      return (0, pD.t)() && DD.showChat
    }
  },
  36189: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD
    });
    var ID = cD(2642),
      pD = cD(3501),
      iD = cD(2737);
    const fD = ["Unable to create vertex buffer"];
    let bD = {};

    function QD(DD, CD) {
      const cD = new Date;
      console.error(`${cD.getUTCHours()}:${cD.getUTCMinutes()}:${cD.getUTCSeconds()}`, DD, CD, null === CD || void 0 === CD ? void 0 : CD.stack), fD.includes(null === CD || void 0 === CD ? void 0 : CD.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, ID.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${CD.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, iD.logError)("warning", `${DD}\n ${CD} "\n" ${null===CD||void 0===CD?void 0:CD.stack}`);
      const pD = DD + CD + (null === CD || void 0 === CD ? void 0 : CD.stack);
      pD in bD || ((0, iD.logError)("error", `${DD}\n ${CD} "\n" ${null===CD||void 0===CD?void 0:CD.stack}`), bD[pD] = !0)
    }(0, pD.onGameReset)((() => {
      bD = {}
    }))
  },
  4608: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => zD,
      e: () => VD
    });
    var ID = cD(4615),
      pD = cD(312);
    const iD = 120,
      fD = 260,
      bD = 1.15,
      QD = 1.2,
      wD = 2,
      SD = 1.08,
      BD = .8,
      yD = .95,
      MD = 8,
      tD = "[\"')\\]\u300d\u300f\uff09]*",
      ZD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${tD}$`),
      oD = new RegExp(`[?\uff1f]${tD}$`),
      vD = new RegExp(`[!\uff01]${tD}$`),
      ND = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      gD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      XD = new RegExp(`[${gD}]`),
      mD = new RegExp(`[${gD}]|[^${gD}]+`, "g"),
      nD = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function OD(DD) {
      let CD = 2166136261;
      for (let cD = 0; cD < DD.length; cD++) CD ^= DD.charCodeAt(cD), CD = Math.imul(CD, 16777619);
      return (CD >>> 0) / 4294967295 * 2 - 1
    }

    function PD(DD) {
      var CD;
      if (XD.test(DD)) return 1;
      const cD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ID = cD.replace(/[^0-9]/g, "");
      if (ID.length > 0 && !/\p{L}/u.test(cD)) return Math.min(ID.length, 4);
      const pD = null !== (CD = cD.match(nD)) && void 0 !== CD ? CD : [];
      if (0 === pD.length) {
        var iD, fD;
        const DD = null !== (iD = null === (fD = cD.match(/\p{L}/gu)) || void 0 === fD ? void 0 : fD.length) && void 0 !== iD ? iD : 0;
        return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), MD)
      }
      const bD = cD.replace(/[^\p{L}]/gu, ""),
        QD = pD.length > 1 && "e" === pD.at(-1) && bD.endsWith("e") && !bD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
      return Math.min(pD.length - (QD ? 1 : 0), MD)
    }

    function HD(DD) {
      return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function UD(DD) {
      const CD = DD.replace(/[^\p{L}]/gu, "");
      return CD.length >= 2 && CD === CD.toUpperCase() && CD !== CD.toLowerCase()
    }

    function xD(DD, CD) {
      var cD;
      const MD = CD && (0, ID.l)(CD),
        tD = null !== (cD = null === MD || void 0 === MD ? void 0 : MD.syllableMs) && void 0 !== cD ? cD : ID.d,
        gD = function(DD) {
          const CD = [];
          for (const ID of (0, pD.bc)(DD))
            if ("string" === typeof ID)
              for (const DD of ID.split(/(\s+)/)) {
                if ("" === DD) continue;
                if (/^\s+$/.test(DD)) {
                  CD.push({
                    kind: "space",
                    text: DD
                  });
                  continue
                }
                if (!XD.test(DD)) {
                  CD.push({
                    kind: "word",
                    text: DD,
                    delayMs: 0
                  });
                  continue
                }
                let ID = !0;
                for (const pD of null !== (cD = DD.match(mD)) && void 0 !== cD ? cD : []) {
                  var cD;
                  const DD = CD.at(-1);
                  ID || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || XD.test(pD) || /[\p{L}\p{N}]/u.test(pD) ? (ID || CD.push({
                    kind: "space",
                    text: "\u200b"
                  }), CD.push({
                    kind: "word",
                    text: pD,
                    delayMs: 0
                  }), ID = !1) : DD.text += pD
                }
              } else CD.push({
                kind: "icon",
                text: ID.icon,
                delayMs: 0
              });
          return CD
        }(DD),
        nD = [];
      let xD = [];
      for (const ID of gD) "space" !== ID.kind && (xD.push(ID), ZD.test(ID.text) && (nD.push(xD), xD = []));
      nD.push(xD);
      const qD = [];
      let JD = 0;
      for (const ID of nD) {
        var KD, aD;
        const DD = null !== (KD = null === (aD = ID.at(-1)) || void 0 === aD ? void 0 : aD.text) && void 0 !== KD ? KD : "",
          CD = oD.test(DD),
          cD = vD.test(DD),
          pD = ID.map((DD => "word" === DD.kind ? PD(DD.text) : 1)),
          gD = pD.findLastIndex((DD => DD > 0));
        for (const [oD, vD] of ID.entries()) {
          const DD = "word" === vD.kind,
            ID = pD[oD];
          vD.delayMs = JD;
          for (let pD = 0; MD && pD < ID; pD++) {
            const {
              intonation: iD
            } = MD;
            let fD = gD > 0 ? -iD.declineSemitones * (oD / gD) : 0;
            fD += OD(`${HD(vD.text)}|${pD}`) * iD.variationSemitones;
            const ZD = Math.min(1, iD.variationSemitones);
            let ND = MD.glideSemitones,
              XD = 1;
            cD && (fD += iD.exclaimLiftSemitones, XD *= bD), CD && oD === gD && (fD += iD.questionRiseSemitones * (ID > 1 ? .5 + .5 * pD / (ID - 1) : 1), pD === ID - 1 && (ND = Math.abs(ND) + iD.questionRiseSemitones / 2)), DD && UD(vD.text) && (fD += wD * ZD, XD *= QD), ID > 1 && 0 === pD && (fD += BD * ZD, XD *= SD), qD.push({
              atMs: JD + pD * tD,
              semitones: fD,
              glideSemitones: ND,
              durationMs: pD < ID - 1 ? Math.min(MD.durationMs, tD * yD) : MD.durationMs,
              level: XD
            })
          }
          JD += ID * tD + (ZD.test(vD.text) ? fD : ND.test(vD.text) ? iD : 0)
        }
      }
      return {
        pieces: gD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
          kind: "icon",
          icon: DD.text,
          delayMs: DD.delayMs
        } : {
          kind: "word",
          text: DD.text,
          delayMs: DD.delayMs
        })),
        blips: qD
      }
    }
    var qD = cD(1192),
      JD = cD(1250),
      KD = cD(1913);

    function aD(DD) {
      if ("string" === typeof DD) return DD;
      const CD = JD.e.get().getCurrentLanguageCode();
      return (0, qD.s)(CD, DD.translationKey, (0, qD.o)(DD.params, KD.c.shown))
    }

    function VD(DD) {
      const CD = void 0 === DD.voice ? null : (0, ID.p)(DD.voice),
        cD = CD && (0, ID.l)(CD);
      return {
        plan: xD(aD(DD.line), cD),
        synth: cD
      }
    }

    function zD(DD) {
      const CD = [];
      let cD = [];
      for (const [pD, iD] of DD.entries()) {
        var ID;
        "space" === iD.kind && (" " !== iD.text || "icon" !== (null === (ID = DD[pD + 1]) || void 0 === ID ? void 0 : ID.kind)) ? (cD.length > 0 && CD.push(cD), CD.push([iD]), cD = []) : cD.push(iD)
      }
      return cD.length > 0 && CD.push(cD), CD
    }
  },
  36083: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    const ID = [{
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

    function pD(DD, CD, cD) {
      const pD = Math.abs(DD - CD),
        iD = Date.now() - cD;
      for (const fD of ID)
        if (DD < fD.maxDist) return pD >= fD.hardUpdateDist || iD > fD.timeBetweenSoftChecks && pD >= fD.softUpdateDist;
      return !1
    }
  },
  36315: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      f: () => iD,
      i: () => pD
    });
    const ID = [.25, .5, 1, 2, 4, 8, 16];

    function pD(DD, CD) {
      const cD = ID;
      let pD = cD.indexOf(DD);
      return -1 === pD && (pD = cD.findIndex((CD => CD >= DD)), -1 === pD && (pD = cD.length - 1)), "up" === CD ? cD[Math.min(pD + 1, cD.length - 1)] : cD[Math.max(pD - 1, 0)]
    }

    function iD(DD) {
      return DD <= ID[0]
    }

    function fD(DD) {
      return DD >= ID[ID.length - 1]
    }
  },
  36375: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      f: () => pD
    });
    const ID = "data-replay-ui-active",
      pD = [{
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
  36379: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      d: () => BD,
      h: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(36375);

    function fD() {
      const DD = {};
      for (const {
          group: CD
        }
        of iD.f) DD[CD] = !0;
      return DD
    }
    let bD = fD();

    function QD() {
      pD.i.Uo("replayViewer|uiVisibilityChanged")
    }

    function wD() {
      return bD
    }

    function SD(DD, CD) {
      bD[DD] !== CD && (bD = {
        ...bD,
        [DD]: CD
      }, "nametag" === DD && ID.d.set({
        areNametagsHidden: !CD
      }), QD())
    }

    function BD() {
      bD = fD(), ID.d.set({
        areNametagsHidden: !1
      }), QD()
    }
  },
  9080: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => pD,
      h: () => SD
    });
    var ID = cD(1562);

    function pD(DD) {
      var CD;
      return {
        ...fD.store,
        yaw: fD.store.yaw + (null !== (CD = ID.c[DD].previewYaw) && void 0 !== CD ? CD : 0)
      }
    }
    const iD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      fD = {
        player: iD,
        store: {
          ...iD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bD(DD, CD) {
      DD instanceof Promise ? DD.then(CD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : CD(DD)
    }
    class QD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var CD;
        this.view = DD, null === (CD = this.opened) || void 0 === CD || CD.show(DD)
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class wD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, CD;
        return null !== (DD = null === (CD = this.opened) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, CD) {
        var cD;
        null === (cD = this.opened) || void 0 === cD || cD.setCosmetic(DD, CD)
      }
      playEmote(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.playEmote(DD)
      }
      setOrbit(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var CD;
        await this.ready, await (null === (CD = this.opened) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const SD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new QD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new QD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new QD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, CD) {
        return new wD(this.current().openCharacter(DD, CD))
      }
    }
  },
  9074: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.c,
      e: () => ID.g,
      f: () => ID.h
    });
    var ID = cD(9080);
    class pD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class iD {
      constructor() {
        this.mobScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(153)]).then((() => cD(40157))))), this.characterScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(152)]).then((() => cD(40228)))))
      }
      openMob(DD) {
        return this.mobScene.run((CD => CD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((CD => CD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((CD => CD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, CD) {
        return this.characterScene.run((cD => cD.openCharacterPreview(DD, CD)))
      }
    }
    ID.h.setDefaultHost((() => new iD))
  },
  36181: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      c: () => iD
    });
    const ID = new Map;

    function pD(DD) {
      var CD;
      return null === DD ? null : null !== (CD = ID.get(DD)) && void 0 !== CD ? CD : null
    }

    function iD(DD, CD) {
      return ID.set(DD, CD), () => {
        ID.get(DD) === CD && ID.delete(DD)
      }
    }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  36336: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => FC,
      h: () => AC
    });
    var ID = cD(4081),
      pD = cD(624),
      iD = cD(3563),
      fD = cD(3591),
      bD = cD.n(fD);
    const QD = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      wD = "EV_boolean",
      SD = "EV_double",
      BD = "EV_string",
      yD = "EV_doubleArr",
      MD = "EV_armour",
      tD = "EV_other",
      ZD = "EV_cosmetics",
      oD = "OEV_boolean",
      vD = "OEV_int",
      ND = "OEV_double",
      gD = "OEV_string",
      XD = "OEV_stringArr",
      mD = "OEV_meshScaling",
      nD = "IV_int",
      OD = "IV_string",
      PD = "IV_doubleArr",
      HD = "IV_double",
      UD = "HV_int",
      xD = "HV_slots",
      qD = "EnvV_string",
      JD = "EnvV_double",
      KD = "EnvV_doubleArr",
      aD = "EnvV_boolean",
      VD = {
        type: BD,
        name: BD,
        position: yD,
        rotation: yD,
        scale: SD,
        speed: SD,
        jumping: wD,
        crouching: wD,
        cameraPitch: SD,
        armSwinging: wD,
        heldItemName: BD,
        heldItemEnchantmentTier: BD,
        pose: BD,
        followingEId: BD,
        ridingVehicleEId: BD,
        leaderboardTop: BD,
        meshKind: BD,
        meshOpts: BD,
        followingOffset: yD,
        shouldMatchFollowingEntityRotation: wD,
        meshOffset: yD,
        baseRenderHeading: SD,
        armour: MD,
        KJ: tD,
        playerCustomisations: ZD,
        variation: BD,
        metaInfo: BD,
        soundName: BD,
        volume: SD,
        refDistance: SD,
        maxHearDist: SD,
        rate: SD,
        aiState: BD
      },
      zD = {
        opacity: ND,
        zIndex: vD,
        overlayColour: gD,
        canSee: oD,
        meshScaling: mD,
        nameTagInfo: gD,
        multilineTextBox: gD,
        hasPriorityNametag: oD,
        ranks: XD,
        nameColour: gD,
        _isAlive: oD,
        _invisibleEffect: oD,
        _invincible: oD,
        killfeedColour: gD,
        hideNameSeed: vD,
        _glowingEffect: oD,
        lockHeadToBody: oD
      },
      jD = {
        itemName: OD,
        amount: nD,
        position: PD,
        size: HD,
        attributes: OD
      },
      lD = {
        skyBox: qD,
        fogColourOverride: qD,
        fogChunkDistanceOverride: JD,
        cameraTint: KD,
        fogOnSkybox: aD,
        fogBlockDistanceOverride: JD
      },
      LD = {
        type: "array",
        items: "double"
      },
      TD = {
        type: "array",
        items: "int"
      },
      GD = {
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
      RD = {
        type: "map",
        values: LD
      };

    function kD(DD, CD) {
      return {
        type: "record",
        name: DD,
        fields: [{
          name: "x",
          type: CD
        }]
      }
    }
    const dD = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kD(oD, "boolean"), kD(vD, "int"), kD(ND, "double"), kD(gD, "string"), kD(XD, {
              type: "array",
              items: "string"
            }), kD(mD, RD)]
          }]
        }
      },
      YD = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kD(wD, "boolean"), kD(SD, "double"), kD(BD, "string"), kD(yD, LD), kD(MD, GD), kD(tD, dD), kD(ZD, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      WD = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kD(nD, "int"), kD(OD, "string"), kD(HD, "double"), kD(PD, LD)]
          }]
        }
      },
      sD = {
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
      ED = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", kD(UD, "int"), kD(xD, sD)]
        }]
      },
      eD = {
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
      uD = {
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
      hD = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", kD(qD, "string"), kD(JD, "double"), kD(KD, LD), kD(aD, "boolean")]
          }]
        }
      },
      rD = [{
        name: "Hx",
        type: "record",
        fields: [{
          name: "pos",
          type: TD
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
          type: TD
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
      AD = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "Op",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Up",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "xp",
              type: ["null", "string", LD],
              default: null
            }, {
              name: "qp",
              type: ["null", "double"],
              default: null
            }, {
              name: "Jp",
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
          name: "yi",
          type: "string"
        }, {
          name: "Mi",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Zi",
          type: "double"
        }, {
          name: "oi",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Wc",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: LD
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "IC",
          type: "string"
        }, {
          name: "JC",
          type: ["null", "double"],
          default: null
        }, {
          name: "KC",
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
          name: "zi",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "ji",
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
      FD = [{
        name: "position",
        type: LD
      }, {
        name: "direction",
        type: LD
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

    function DC() {
      const DD = [{
        name: "entities",
        type: {
          type: "map",
          values: YD
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: WD
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: FD
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
              items: ED
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", eD],
        default: null
      }];
      return DD.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "IC",
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
      }), DD.push({
        name: "uiElements",
        type: uD
      }, {
        name: "environment",
        type: hD
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: rD
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: AD
        }
      }), DD
    }
    const CC = {
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
                name: "wy",
                type: "int"
              }, {
                name: "position",
                type: LD
              }, {
                name: "direction",
                type: LD
              }, {
                name: "easing",
                type: LD
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
    let cC;

    function IC(DD) {
      if (9 === DD) return cC ??= (CD = [{
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
            name: "Yq",
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
              type: TD
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
            fields: DC()
          }
        }
      }, CC], bD().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: CD
      }, {
        nM: Object.create(null)
      })), cC;
      var CD
    }
    var pC = cD(36343);
    let iC, fC, bC, QC;
    const wC = 12;
    var SC, BC;
    const yC = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 60, 3, null, 10, 16, 123, 4, 124, 125, !0, 15, 120, 127, 128, 2, 5, 11, 9, void 0, !1, 1023, 65536, 55296, 56320, 31, 18, 192, 224, 240, 147];

    function MC(DD) {
      return typeof Ic !== yC[5] && Ic ? (new Ic).decode(new pc(DD)) : typeof ic !== yC[5] && ic ? ic.from(DD).toString("utf-8") : Qc(DD)
    }

    function tC() {}

    function ZC() {
      ZC = function() {}
    }
    var oC, vC;
    ZC(SC = {}, BC = ["Rqu<vT*(%WCCBt6).oB&9R5r{H", "gRsMMCk{(IiiHB8)T;/7A!p#L|1MI2bep7X<V]1CS5D.O", '[A"&GDiwH?]r7/]tdJW1luk3PM5C=`vtKJVkJVK;#Nt"xcjAU$,MONw@ay', 'NIiF8hWV~X*7WXX(P;{7uDPr"?77PNWDw?*o7D0/z|nj7Nmybb$o>~am', "!JYx{=11<n", "nb&h8u5xo^kj4Poy7AYoM&Z?y?zB,=+<cG", "^;$U#+KnZyp.&U7<", 'g"$UiuK>~Ww}pNSt5)qT!tBf"NEsFC`rSy"', "QTm&`iFFbpNoH!;y~>GI", "X?/M+]VWX.2A#!yHhJo>uJ9w_(=zD`wx3H*T`ZjAh?nW5c>", 'y>yUy?+XkMPraeL/UVV~^hp>on4Y5U/igz"', "acsTkg$W}p4/O", "h<_fD=^lw^ug#rpDeA}](tB3PIdSAm+lCszf,udTzyZbXN:2%a&<.", "Y4aKLMQ/aS}|O", "dJR7bZK>9pLik0n(^y9]}}+?!nOF%qxD7G", "UAExuJH@&S~Kd!Eq[Ic7!aG", "2+dq#h<gL?_Db^Vw7`39te@](?)UPU]lMM*MJFb/NzM}(m=;", "uCR7G@*rYz:]rtP;PG", "2Te~@?+}=|tYO", ":a^>`&FxbX", 'OrZPF]!r<.8db"@*?VLwk3)nRX+^X0`xNsJ<n]__~XT7O', "]TLFOcP(d?ugYedy[MoPpN>w`S", ".53b/93=w`Prlc~iRc!&jU=*u3l}=8+yEV!qCU`rZ1!djXbl}G", ">N^Ln!(*&zF1Qkl$j<nY/u!Zz[AZx2y;+M?M/+}TZ3gCSzsiK`kh[45rg?LzO", 'brNxy?cw[^</"h~xm|X~nDwwN3nUuzFlNzsBTC5?|1Xjrm=q,`m', "4iQKLu0n0?u1MPX", "<MYUY]onRHDKkgbt8Teb^K%OFaq", '!)6oPeiw"', 'R>#IJTtyyNbVZ"OD,%zKScy1AH77T8keWi#PC]SfRs"i!C.)%Vj<l', "@HYU+]rfG|o5#`$lnPV3T&dxtp.XR^{;zO", "UHjf33J}gICP:#.;P+h3=C%?yIU#2+WDrnAL2tNmsM+dgDGwk|V&uaG", "E<:MM8,4NS3/PN,r/;jf@+%=)5$}!=gBzoU7ztk3yIq", 'W"F1"i[Vay$z?b:r', '3T~>BMTxa3K&Z"bEoI}qL+G', '~VV]EC~xs|[&~"', "P+7o69W4zyY>jN~r0`O", "MAwK+i_xIWW.>e`*]zP>", "qN6Trj.*oNx5Bqbev<e~E|vyvRGMikGs>Mx<%rs=IY", "s^rxTT|Aqa@]~Bq)wM+I*FtyJz", 'Ei,>fNsr~WrB[l.iCAa909]/fYDiD"}(fx<P|ZJO%W)', "[s>9*P7O=[4KLe<w?zVYbUe(?zw9l2*%MiG>KcF?WsyFb0E(", "CeN&cR&*Rs0kP2Clg>fK(t;weM%9Jc{*2|)<A`~=p3J)sNX", "*AJ<5N7O", "8z8TK]mwK`}&<B,i$+eK6_J?YakA0^_Q", "=EwKtPzp)aIF4j1<&`;Mz~G", 'SP|Pzt^(/sHcR"jr>NA>WNmwgns>[P%<$n[1fNV/9XN[d8jD', "`Ad3=8K9E5Z|jU6Dy|}h?CU>n`w9dzsqeqx<2K5*zyK#AzPBx]:>b~!_>", 'bxpI)+`r*5Y8KB|Dr"vY@L)@qz~K5l"y%HXY.}+Tp?8yPcpAv;sFX', 'Eq;I}c94@pYY;"', '6z><Fhx(q`r`ygLs~aLw>Z}Xi(`yzk"sQ5ZbuK.O', ":3=9@?yD``*YyeP%=i>f{h,@FST/O", "kxH]Fc1W5yHUpDh;tsuf&cJfAHrUR/iD=ewf$M}O&a*", "4;!1/`X*|3>5WXmwwM)]t8mD#?*`JbftM?NYEjG", "8>*MN4(rG^51dzq*@io>t_vm", "DVlBA}~OvS=svBmD<nYo;M<*0(]#YjNrYApIA+$nxy", "n|@9cP{r}ML}xkaxy?g>(`{ASzOFr+7%Fs;PO4)/!(", 'PeQ9;VQDw^H~ijzHtEv&,?~=P^jR5/aD"?5T*r]iX[WP(q{r_>fKij24=^;', 'o?&+n]#/;s/sp"HiJ+]kzhYyf', 'ocq&6_egL^[o2^+eq4w<;#x==3LinBCly?#P@9)10Mp7UDrya"2>', 'kMp7A=M4v1*aINFlzqOw[NGD[n9r1!w$>xL>m0}f|^OeR"', "=eV]$8e=&S9K;=|xJHQb5~n4Ush</B1y>?rYx+A*U5j|)BX", "h?Q~RCanO?<ZX2tt", 'XEu<lt#>s[}#!ziw#"XYx;S}#Nvz5DQ;DT6TE#@4QW!dO', "q5;TL9=(Saa.n+8iJV{P)9L|(IbeO", "M5b~uh3FbpClqgWx|AiF)+&*Fs]xMlk/dJ1w)!dOLML", 'U"x]{?Y/&`/50"#i)4AP,!M9|^M}xkdwmE9x.', "DNk<RT`OWSx~[e@inE;>", "v>u+*Fk*J.w}O", "LT)]);>WCX$a:#1<L]n]9W>wfXOLIU!BY?O", "QM?M{K$/||%K_DgBY+<KCZ>DeW^V$tcqKG", '2qQ<i;h@!?1"U"', "yeE&09Ry!pC[[l_B[G", 'Yx@9.KTx"MpP1^zBgR|KquR9Tn%cR^flocDYaUQ1nz:d%C@2*n.~)', "WI$oE|U9/snZ<=|si;F&__Dm", ">?c>(tQ9ZNXwfqd<IxQ~_hnm", "hq/M@9gXeXp`V!bEhcDfPVflONr", "!e0q`WxfERh", '?HmUbDN]``yemgAx_"PB1c=*`z&1.2U<Xb|IIaon1Wwz#r>', 'c<N]C}lfF57o"t0Q1+`1stq9;Xq/C}O/Za!&n', "Ms,IW0}AZ3LUikK(DI;MrFr}P?F]PUV/M+{)cCp@=.9", "k?39VZGwjzh`)+;tZTBxn@G$3WB5O", 'tnYTOZ1yc3oK"B3*g72L0`N/Fs%', "@>c>7ZBg2nSUW8oA9?*o=&y1&`@NnB:QnPp>V~T(@pW[O", "E?2T_!(feWzi_NftA+PM+NY9+X", "pVw)l`4y^nycEqry/xK]T&NmsM7&`W%(X;;IRTlgs|~rPb5yFV[1`US}#n", 'h?go6`?ADXRr`zYtx;"k.9TFZ37C8t[sM;A)n', "f|Hx4C@;E5XU`W|$pM}bc0M;Ly(X*blAM?/T[iym", "OMGI5Df(;H%sdWOAe>`&r`_ZbMjltPis?5C~MWkO4^M7jP=qmbTol", ",i49+~e|YaDZPb{izIYBH!DnVp;7U/el95qxu]L(|NL}?gAxY?3YugG", "DARIOc3A)a:&CgowW5~IRNIOjz)WC}C/8),7t8#;kpN", '6"v&Ya<fz`RK{mXt', ')A$Bu]]4/W%"G+aD)EITG@&OAWx/W}Y', ")H!kTPD/o.jy?bk<4;{)/th4b", "Xq!&V]`x^[;/zgEq9Mm", "D^}fPP*}%XPs.2F(b^.]]aO38nXjhXJ%5G", "2^FxV~<r=[S~?c7(+c3]$Mb1PM1Xik~xf?UPX]F*cnw}M8YH.?#I", "`aS&{9mCUHiK!r3B?IBx7N;m", "z|dox`l}]z5C:lK(r?V]A+u@(I@?6lLA7AR7uJHm", "YyT38g8/t(,O:Dm/qEpM)_IFYzwUWgo/Yq~7m3dr[(15s2.B>EZI(?am", "^?qo&!tyb", "b?T1Bth9!nL.c^1<:5?Td~+xFHB>g/|e|VCPq7ty[n", '4aSoIDW4rnTz^qvl[s&h/+KylHLB"CxsgJfK5UG', "h;(o6!*?K`9K%8P%~5H~$j298N2VVc`AxO", "j`lMstjX%Wr[K`{r8G", "BIM9P&?=$5rY!Cc;>?LTD=TA$a>=O", 'dMkKA?&*=301^hbETcZP!}`|F50NPcpw".)]^+0#yM<}6lJB', "UR.~w7cmepAT,=+(vilBEP&}(I@?(t5s7RPM^aRm", 'BN9Y<7@iSz:&Cz/rp<~K:9=?>Y;"b!|$X?`1Q', "insMK}|FoynVrqKq", "Dne~M4=(tW1BBmNw;HJ~kZlr*W?C%!D/X+k<Z!d|v1;c2^I", "42H_Vq,b", "Hqm{s;#D", "ykjgsxEN", "=2:_=gjH", "/uV5h&SH", "kO(t5", '"<^pPrt>', "4Dav|jT_", "00B@K", "0/ZNXn{b", "kg8fVwU9", "^w[p>Si9", "vfmPu", ".Bt0", "KB[p+=A9", "Hf^C", "(BeWhZs9", 'R(or,c"i', "aTJU", "@:4YVcb9", "tgz(Vrn9", '+"NI:Tb|YA*t3BEg}`RDkk2_c4?Q^(EgcP{%c}+6a/QMX7}"("y1D', "3Ze(m/:n!$L[jlfv26=MJJaT}.xz7{fv[FR;<<%92mLSKkjs@P", 'n*&q,V<6wD9R#kxee*8T$?,Kp=Q_l,r$3a"_4', "0RxK", "kv~*e^!;", "<n&f", "BTX^0_ni", "eO4ns8(z", "+bTetz7O", "4_03/?AO", '^ie6b"$', "g6#>|3@O", "6%Kh:{}O", "5c0rDzLO", "5c5e6", '>A<]Xt"uGf^R&;5x|Ayd;Qo', "3E_;X7n|)pd$T0,^D8UK}n5W#[Lgq4b", "p}UC`[!8a9m7nXIH0}c|X2A", "yp.T{Naz6/FikJ])#sZ%&a;R:5WQAP_", "3E_;X7n|)pF=;ds5/v_K;rO|73p", "4;WlR9D", "4EI.za=>", "q)hL"]), ZC(cc = function() {
      var DD, CD, cD, ID = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      ZC(DD = void 0, CD = []);
      try {
        ZC(DD = Object, CD[yC[11]]("".__proto__.constructor.name))
      } catch (pc) {}
      DD: for (cD = yC[0]; cD < ID[yC[4]]; cD++) try {
        var pD;
        for (DD = ID[cD](), pD = yC[0]; pD < CD[yC[4]]; pD++)
          if (typeof DD[CD[pD]] === yC[5]) continue DD;
        return DD
      } catch (pc) {}
      return DD || this
    }() || {}, Ic = cc.TextDecoder, pc = cc.Uint8Array, ic = cc.lt, fc = cc.String || String, bc = cc.Array || Array, Qc = function() {
      var DD, CD, cD = new bc(yC[30]);
      return ZC(DD = fc[yC[8]] || fc.fromCharCode, CD = []),
        function(ID) {
          var pD, iD, fD, bD;
          for (ZC(iD = void 0, fD = ID[yC[4]], CD[yC[4]] = yC[0]), bD = yC[0]; bD < fD;) ZC(iD = ID[bD++], iD <= yC[29] ? pD = iD : iD <= 223 ? pD = (iD & yC[41]) << yC[7] | ID[bD++] & yC[6] : iD <= 239 ? pD = (iD & yC[27]) << yC[10] | (ID[bD++] & yC[6]) << yC[7] | ID[bD++] & yC[6] : fc[yC[8]] ? pD = (iD & yC[9]) << yC[42] | (ID[bD++] & yC[6]) << yC[10] | (ID[bD++] & yC[6]) << yC[7] | ID[bD++] & yC[6] : (pD = yC[6], bD += yC[18]), CD[yC[11]](cD[pD] || (cD[pD] = DD(pD))));
          return CD.join("")
        }
    }()), (() => {
      function DD(DD) {
        return typeof SC[DD] === yC[5] ? SC[DD] = function(DD) {
          var CD, cD, ID, pD, iD, fD, bD;
          for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
            var QD = '~bHrhJMEPDdamiXOKWjLpe6%4*5YNT$k_(U:l`x>zs|ovCR7+,^B}u<n)=8cS.qZwy"?2&tQ;/[A9g13F{IV@G0f#!]'.indexOf(CD[bD]);
            if (QD !== -yC[1])
              if (fD < yC[0]) fD = QD;
              else {
                ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                do {
                  ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                } while (iD > yC[9]);
                fD = -yC[1]
              }
          }
          return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
        }(BC[DD]) : SC[DD]
      }
      DD(110);
      const CD = yC[21],
        cD = DD(113) + DD(114) + DD(115),
        ID = [yC[0], yC[1], yC[31], yC[18]].map((DD => {
          let CD = yC[0];
          for (let ID = yC[18]; ID >= yC[0]; ID--) {
            function pD(DD) {
              var CD, cD, ID, pD, iD, fD, bD;
              for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                var QD = '%>_9:@`1=~86]&#0w,^bS{PDH*ziQKJypO3CL2"|T.W[gx;jZVreav4o}<ENRFuA/dYtB?G)fl57XUh!I(+M$smqckn'.indexOf(CD[bD]);
                if (QD !== -yC[1])
                  if (fD < yC[0]) fD = QD;
                  else {
                    ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                    do {
                      ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                    } while (iD > yC[9]);
                    fD = -yC[1]
                  }
              }
              return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
            }

            function iD(DD) {
              return typeof SC[DD] === yC[5] ? SC[DD] = pD(BC[DD]) : SC[DD]
            }

            function fD() {
              var DD;

              function CD() {}
              ZC(DD = function(DD, cD) {
                var ID, pD, iD, fD, bD, QD = yC[0];
                for (ZC(ID = yC[0], pD = new CD(yC[0]), iD = pD, fD = DD, bD = cD); fD !== yC[19] || bD !== yC[19];) ZC(ID = (fD ? fD.val : yC[0]) + (bD ? bD.val : yC[0]) + QD, QD = Math.floor(ID / yC[20]), iD.next = new CD(ID % yC[20]), iD = iD.next, fD = fD ? fD.next : yC[19], bD = bD ? bD.next : yC[19]);
                return QD && (iD.next = new CD(QD)), pD.next
              }, console.log(DD))
            }
            iD(116) in tC && fD(), CD = CD << yC[2] | cD[iD(117) + iD(118)](DD * yC[23] + ID)
          }
          return CD >>> yC[0]
        })),
        pD = (DD, CD) => DD << CD | DD >>> 32 - CD,
        iD = (CD, cD, ID, iD, fD) => {
          DD(119) in tC && function() {
            var DD = function(DD) {
              var CD, cD, ID, pD, iD = DD.length;
              for (ZC(CD = [], cD = yC[0]), ID = yC[0]; ID < iD; ID++) CD.push(ID !== yC[0] && DD[ID] > DD[ID - yC[1]] ? CD[ID - yC[1]] + yC[1] : yC[1]);
              for (pD = iD - yC[1]; pD >= yC[0]; pD--) pD !== iD - yC[1] && DD[pD] > DD[pD + yC[1]] && (CD[pD] = Math.max(CD[pD], CD[pD + yC[1]] + yC[1])), cD += CD[pD];
              return cD
            };
            console.log(DD)
          }(), ZC(CD[cD] += CD[ID], CD[fD] = pD(CD[fD] ^ CD[cD], yC[21]), CD[iD] += CD[fD], CD[ID] = pD(CD[ID] ^ CD[iD], yC[10]), CD[cD] += CD[ID], CD[fD] = pD(CD[fD] ^ CD[cD], yC[2]), CD[iD] += CD[fD], CD[ID] = pD(CD[ID] ^ CD[iD], yC[9]))
        };
      QC = (DD, cD, pD, fD) => {
        function bD(DD) {
          return typeof SC[DD] === yC[5] ? SC[DD] = function(DD) {
            var CD, cD, ID, pD, iD, fD, bD;
            for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
              var QD = 'G89TCD6+P{0qJakByrK<eti(`]s5Vu.zp:xE&^AMb~@!"jUX,2_nvOfSQ7?LgIY}#;H[3%Fw4R=|>WhN*Z1modc$)/l'.indexOf(CD[bD]);
              if (QD !== -yC[1])
                if (fD < yC[0]) fD = QD;
                else {
                  ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                  do {
                    ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                  } while (iD > yC[9]);
                  fD = -yC[1]
                }
            }
            return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
          }(BC[DD]) : SC[DD]
        }
        const QD = new DataView(cD[bD(yC[28])], cD[bD(121) + bD(122)], wC),
          wD = new Uint32Array(CD);
        ZC(wD[bD(yC[22])](ID), wD[bD(yC[22])](DD, yC[23]), wD[yC[15]] = QD[bD(yC[24]) + bD(yC[25])](yC[0], yC[26]), wD[yC[16]] = QD[bD(yC[24]) + bD(yC[25])](yC[23], yC[26]), wD[yC[27]] = QD[bD(yC[24]) + bD(yC[25])](yC[2], yC[26]));
        const SD = new Uint32Array(CD),
          BD = new Uint8Array(SD[bD(yC[28])]);
        for (let yD = yC[0], MD = pD; yD < fD[bD(126)]; yD += CD * yC[23], MD++) {
          function tD(DD) {
            var CD, cD, ID, pD, iD, fD, bD;
            for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
              var QD = 'SFigdVRjAfUEIZeTqGlYXJoBsCnMKQaWLpODchbkN2tPmH`<y("7%#[6*85;|)x.&z>~!3/9u]=,r^0@+_$1{w4v}:?'.indexOf(CD[bD]);
              if (QD !== -yC[1])
                if (fD < yC[0]) fD = QD;
                else {
                  ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                  do {
                    ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                  } while (iD > yC[9]);
                  fD = -yC[1]
                }
            }
            return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
          }

          function ZD(DD) {
            return typeof SC[DD] === yC[5] ? SC[DD] = tD(BC[DD]) : SC[DD]
          }

          function oD() {
            var DD = function(DD) {
              ZC(this.LB = DD, this.length = yC[0], this.map = {}, this.head = yC[19], this.tail = yC[19])
            };
            ZC(DD.prototype.get = function(DD) {
              var CD = this.map[DD];
              return CD ? (this.remove(CD), this.insert(CD.key, CD.val), CD.val) : -yC[1]
            }, DD.prototype.put = function(DD, CD) {
              this.map[DD] ? (this.remove(this.map[DD]), this.insert(DD, CD)) : this.length === this.LB ? (this.remove(this.head), this.insert(DD, CD)) : (this.insert(DD, CD), this.length++)
            }, DD.prototype.remove = function(DD) {
              var CD, cD = DD.prev;
              (CD = DD.next) && (CD.prev = cD), cD && (cD.next = CD), this.head === DD && (this.head = CD), this.tail === DD && (this.tail = cD), delete this.map[DD.key]
            }, DD.prototype.insert = function(DD, CD) {
              var cD = new List(DD, CD);
              ZC(this.tail ? (this.tail.next = cD, cD.prev = this.tail, this.tail = cD) : (this.tail = cD, this.head = cD), this.map[DD] = cD)
            }, console.log(DD))
          }
          ZD(yC[29]) in tC && oD(), ZC(wD[yC[10]] = MD, SD[ZD(yC[30])](wD));
          for (let ND = yC[0]; ND < yC[20]; ND++) {
            function gD(DD) {
              var CD, cD, ID, pD, iD, fD, bD;
              for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                var QD = 'P59^|$)>~;MvCKF6l3+xmi2pnDbX*Y1&(jOfs]"BZ@7U40[ut{`zNcW?Rg8V%=G!d.EHQASIkh:}/rJyw<ae_oTqL,#'.indexOf(CD[bD]);
                if (QD !== -yC[1])
                  if (fD < yC[0]) fD = QD;
                  else {
                    ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                    do {
                      ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                    } while (iD > yC[9]);
                    fD = -yC[1]
                  }
              }
              return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
            }

            function XD(DD) {
              return typeof SC[DD] === yC[5] ? SC[DD] = gD(BC[DD]) : SC[DD]
            }
            XD(129), ZC(iD(SD, yC[0], yC[23], yC[2], yC[10]), iD(SD, yC[1], yC[32], yC[34], yC[15]), iD(SD, yC[31], yC[7], yC[20], yC[16]), iD(SD, yC[18], yC[9], yC[33], yC[27]), iD(SD, yC[0], yC[32], yC[20], yC[27]), iD(SD, yC[1], yC[7], yC[33], yC[10]), iD(SD, yC[31], yC[9], yC[2], yC[15]), iD(SD, yC[18], yC[23], yC[34], yC[16]))
          }
          for (let mD = yC[0]; mD < CD; mD++) {
            function nD(DD) {
              var CD, cD, ID, pD, iD, fD, bD;
              for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                var QD = ':&;81[4$}+k6L#ut)J]ilqhEeG5YUW(mnaC,ZH^VNK3FrIy~!vd=*SMs`@0xT9.B_Dc2wfQz%/XpO?7P"o|g{jRA<b>'.indexOf(CD[bD]);
                if (QD !== -yC[1])
                  if (fD < yC[0]) fD = QD;
                  else {
                    ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                    do {
                      ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                    } while (iD > yC[9]);
                    fD = -yC[1]
                  }
              }
              return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
            }

            function OD(DD) {
              return typeof SC[DD] === yC[5] ? SC[DD] = nD(BC[DD]) : SC[DD]
            }

            function PD() {
              var DD;
              ZC(DD = function(CD, cD, ID) {
                var pD, iD, fD, bD = {};
                if (CD[cD + ID] !== yC[35]) return CD[cD + ID];
                if (cD === ID) return yC[26];
                for (pD = yC[0]; pD < cD.length; pD++) bD[cD[pD]] === yC[35] && (bD[cD[pD]] = yC[0]), bD[ID[pD]] === yC[35] && (bD[ID[pD]] = yC[0]), ZC(bD[cD[pD]]++, bD[ID[pD]]--);
                for (iD in bD)
                  if (bD[iD] !== yC[0]) return CD[cD + ID] = yC[36], yC[36];
                for (fD = yC[1]; fD < cD.length; fD++)
                  if (DD(CD, cD.substr(yC[0], fD), ID.substr(yC[0], fD)) && DD(CD, cD.substr(fD), ID.substr(fD)) || DD(CD, cD.substr(yC[0], fD), ID.substr(ID.length - fD)) && DD(CD, cD.substr(fD), ID.substr(yC[0], ID.length - fD))) return CD[cD + ID] = yC[26], yC[26];
                return CD[cD + ID] = yC[36], yC[36]
              }, console.log((function(CD, cD) {
                return DD({}, CD, cD)
              })))
            }
            OD(135) in tC && PD(), SD[mD] += wD[mD]
          }
          const vD = Math[ZD(136)](CD * yC[23], fD[ZD(137)] - yD);
          for (let HD = yC[0]; HD < vD; HD++) {
            function UD(DD) {
              var CD, cD, ID, pD, iD, fD, bD;
              for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                var QD = 'Az>Bu[@,KC+vbM"}m3j5X!hl|wDV=%I.;*q2G^9RE(HP6JxY10pUNkF/S]ed84O#)L$ysf:ra`nQ7&T?gWi_~{<cZot'.indexOf(CD[bD]);
                if (QD !== -yC[1])
                  if (fD < yC[0]) fD = QD;
                  else {
                    ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                    do {
                      ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                    } while (iD > yC[9]);
                    fD = -yC[1]
                  }
              }
              return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
            }

            function xD(DD) {
              return typeof SC[DD] === yC[5] ? SC[DD] = UD(BC[DD]) : SC[DD]
            }

            function qD() {
              ! function(DD) {
                var CD, cD, ID, pD;

                function iD(DD) {
                  var CD, cD, ID, pD, iD = [];
                  for (ZC(CD = yC[0], cD = DD.length, ID = void 0, pD = void 0); CD < cD;) ZC(ID = DD.charCodeAt(CD++), ID >= yC[39] && ID <= 56319 && CD < cD ? (64512 & (pD = DD.charCodeAt(CD++))) == yC[40] ? iD.push(((ID & yC[37]) << yC[20]) + (pD & yC[37]) + yC[38]) : (iD.push(ID), CD--) : iD.push(ID));
                  return iD
                }

                function fD(DD) {
                  var cD, ID, pD, iD = DD.length;
                  for (ZC(cD = -yC[1], ID = void 0, pD = ""); ++cD < iD;)(ID = DD[cD]) > 65535 && ZC(ID -= yC[38], pD += CD(ID >>> yC[20] & yC[37] | yC[39]), ID = yC[40] | ID & yC[37]), pD += CD(ID);
                  return pD
                }

                function bD(DD) {
                  if (DD >= yC[39] && DD <= 57343) {
                    function CD(DD) {
                      var CD, cD, ID, pD, iD, fD, bD;
                      for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                        var QD = '$%O+Jnf9ho>uA#.i}&vTX1z~`6,MQB"^eacm8F*H@|wb([VN7KY_0rLdEqjP!gU)ysC/x;It?lD5<3Wk{2Z=4RGS:p]'.indexOf(CD[bD]);
                        if (QD !== -yC[1])
                          if (fD < yC[0]) fD = QD;
                          else {
                            ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                            do {
                              ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                            } while (iD > yC[9]);
                            fD = -yC[1]
                          }
                      }
                      return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
                    }

                    function cD(DD) {
                      return typeof SC[DD] === yC[5] ? SC[DD] = CD(BC[DD]) : SC[DD]
                    }
                    throw Error(cD(139) + cD(140) + cD(141) + DD.toString(yC[21]).toUpperCase() + (cD(142) + cD(143) + cD(144) + cD(145)))
                  }
                }

                function QD(DD, cD) {
                  return CD(DD >> cD & yC[6] | yC[30])
                }

                function wD(DD) {
                  var cD;
                  return (4294967168 & DD) == yC[0] ? CD(DD) : (cD = "", (4294965248 & DD) == yC[0] ? cD = CD(DD >> yC[7] & yC[41] | yC[43]) : (4294901760 & DD) == yC[0] ? ZC(bD(DD), cD = CD(DD >> yC[10] & yC[27] | yC[44]), cD += QD(DD, yC[7])) : (4292870144 & DD) == yC[0] && ZC(cD = CD(DD >> yC[42] & yC[9] | yC[45]), cD += QD(DD, yC[10]), cD += QD(DD, yC[7])), cD += CD(DD & yC[6] | yC[30]))
                }

                function SD() {
                  var DD;
                  if (pD >= ID) {
                    function CD(DD) {
                      var CD, cD, ID, pD, iD, fD, bD;
                      for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                        var QD = 'obr.[fH}w/sxpv={B>k,XLgcu?O@hWyd]6&5~mq#A84!7jle_|)(+`12IJYSM;:G%^9ECzVZTD"3t0K$Ri*<QNUnFPa'.indexOf(CD[bD]);
                        if (QD !== -yC[1])
                          if (fD < yC[0]) fD = QD;
                          else {
                            ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                            do {
                              ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                            } while (iD > yC[9]);
                            fD = -yC[1]
                          }
                      }
                      return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
                    }

                    function iD(DD) {
                      return typeof SC[DD] === yC[5] ? SC[DD] = CD(BC[DD]) : SC[DD]
                    }
                    throw Error(iD(146))
                  }
                  if (ZC(DD = cD[pD] & yC[3], pD++), (DD & yC[43]) == yC[30]) return DD & yC[6];
                  throw Error(xD(yC[46]))
                }

                function BD() {
                  var DD, CD, iD, fD, QD;
                  if (ZC(CD = void 0, iD = void 0, fD = void 0, QD = void 0), pD > ID) {
                    function wD(DD) {
                      var CD, cD, ID, pD, iD, fD, bD;
                      for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                        var QD = 'Awyv?9KB"zeH(TifVp:^`ZsM8J*4]#c|C;nIt56$}E{uxQdY&0<Dh1kjLWG)RX/a%m=oFS,3N>!.[l_O7qrU2@~Pgb+'.indexOf(CD[bD]);
                        if (QD !== -yC[1])
                          if (fD < yC[0]) fD = QD;
                          else {
                            ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                            do {
                              ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                            } while (iD > yC[9]);
                            fD = -yC[1]
                          }
                      }
                      return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
                    }

                    function BD(DD) {
                      return typeof SC[DD] === yC[5] ? SC[DD] = wD(BC[DD]) : SC[DD]
                    }
                    throw Error(BD(148))
                  }
                  if (pD == ID) return yC[36];
                  if (ZC(DD = cD[pD] & yC[3], pD++), (DD & yC[30]) == yC[0]) return DD;
                  if ((DD & yC[44]) == yC[43]) {
                    if (ZC(CD = SD(), QD = (DD & yC[41]) << yC[7] | CD), QD >= yC[30]) return QD;
                    {
                      function yD(DD) {
                        var CD, cD, ID, pD, iD, fD, bD;
                        for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                          var QD = '4$8x@5w]%v!7_u*&^y`;{[<2zo#f3tMGTOA|V)qEpmD9?r=+"J/ZX0cgLUhFsPb:6WiHleCBKdaINSkYQR}.(n>1,~j'.indexOf(CD[bD]);
                          if (QD !== -yC[1])
                            if (fD < yC[0]) fD = QD;
                            else {
                              ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                              do {
                                ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                              } while (iD > yC[9]);
                              fD = -yC[1]
                            }
                        }
                        return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
                      }

                      function MD(DD) {
                        return typeof SC[DD] === yC[5] ? SC[DD] = yD(BC[DD]) : SC[DD]
                      }
                      throw Error(MD(149))
                    }
                  }
                  if ((DD & yC[45]) == yC[44]) {
                    if (ZC(CD = SD(), iD = SD(), QD = (DD & yC[27]) << yC[10] | CD << yC[7] | iD), QD >= 2048) return bD(QD), QD;
                    throw Error(xD(yC[46]))
                  }
                  if ((248 & DD) == yC[45] && (ZC(CD = SD(), iD = SD(), fD = SD(), QD = (DD & yC[9]) << yC[42] | CD << yC[10] | iD << yC[7] | fD), QD >= yC[38] && QD <= 1114111)) return QD;
                  throw Error(xD(150))
                }
                CD = String.fromCharCode, ZC(cD = void 0, ID = void 0, pD = void 0), ZC(DD.version = function(DD) {
                  return typeof SC[DD] === yC[5] ? SC[DD] = function(DD) {
                    var CD, cD, ID, pD, iD, fD, bD;
                    for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                      var QD = 'D]~%#C(B.nHzcS7$Z[qwuoWjyp|NXM:F19^5VU@;r*0e+)b}`ld&6,sTf{gm/a32YLEOhQ_GkxPi=AJtRK!<v>4"8?I'.indexOf(CD[bD]);
                      if (QD !== -yC[1])
                        if (fD < yC[0]) fD = QD;
                        else {
                          ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                          do {
                            ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                          } while (iD > yC[9]);
                          fD = -yC[1]
                        }
                    }
                    return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
                  }(BC[DD]) : SC[DD]
                }(151), DD.encode = function(DD) {
                  var CD, cD, ID, pD, fD = iD(DD);
                  for (ZC(CD = fD.length, cD = -yC[1], ID = void 0, pD = ""); ++cD < CD;) ZC(ID = fD[cD], pD += wD(ID));
                  return pD
                }, DD.decode = function(DD) {
                  var CD, bD;
                  for (ZC(cD = iD(DD), ID = cD.length, pD = yC[0], CD = [], bD = void 0);
                    (bD = BD()) !== yC[36];) CD.push(bD);
                  return fD(CD)
                })
              }(typeof exports === xD(152) + function(DD) {
                return typeof SC[DD] === yC[5] ? SC[DD] = function(DD) {
                  var CD, cD, ID, pD, iD, fD, bD;
                  for (ZC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = yC[0], iD = yC[0], fD = -yC[1]), bD = yC[0]; bD < cD; bD++) {
                    var QD = 'Uuo|QD]kLeHAOI8)c&5m^iWf?q.4vG@`g$nBCF}63>JN,Yl!j*"yTw<=0R{E1/Sba~%zpx9P7+;hXrsK:V[M(_2#dZt'.indexOf(CD[bD]);
                    if (QD !== -yC[1])
                      if (fD < yC[0]) fD = QD;
                      else {
                        ZC(fD += QD * yC[12], pD |= fD << iD, iD += (fD & yC[13]) > yC[14] ? yC[15] : yC[16]);
                        do {
                          ZC(ID.push(pD & yC[3]), pD >>= yC[2], iD -= yC[2])
                        } while (iD > yC[9]);
                        fD = -yC[1]
                      }
                  }
                  return fD > -yC[1] && ID.push((pD | fD << iD) & yC[3]), MC(ID)
                }(BC[DD]) : SC[DD]
              }(153) ? this.utf8 = {} : exports)
            }
            xD(138) in tC && qD(), fD[yD + HD] ^= BD[HD]
          }
        }
      }
    })();
    const NC = [58, 0, 1, 8, 3, "a", 99, "g", "e", "f", "d", 255, "length", "b", "c", 221, 165, "undefined", void 0, 217, 18, 37, 63, 6, "fromCodePoint", 7, 12, "push", 224, 91, 8191, 88, 13, 14, "h", 62, 9, 244, 5, "i", 236, !1, 20, 100, 162, 106, 27, 2, 50, 4, 85, 43, 101, 191, 16, 182, 512, 185, 222, 242, 125, 71, 15, 161, 166, 187, 79, 1023, 127, 31, 128, 23, 32, 24, 10, 19, 64, 65535, 25, 193, 129, 97, 240, 70, 36, 204, 179, 149, 144, 130, 202, 909522486, 1549556828, 256, 11, 234, 171, "j", 136, 181, 59, 105, 207, 55296, 56319, 56320, 57343, 65536, 2047, 192, 2097151, 55, 120, 22, 17, 28, 34, 39, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 46, 228, !0, 147, 103, 235];

    function gC(...DD) {
      return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = function(...DD) {
        for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = '`rfPMFjugI}x34N8%/QJ>LTaCzcp[y)Sl|Gvtb={DVZ@dnX2B*.E5$hH6;",_<R(&#WsK0!w~U+q9Aoke?]^1:7iOmY', DD[NC[0]] = "" + (DD[NC[1]] || ""), DD[NC[4]] = DD[NC[0]].length, DD[NC[10]] = [], DD[NC[8]] = NC[1], DD[NC[9]] = NC[1], DD[NC[7]] = -NC[2]), DD[NC[3]] = NC[1]; DD[NC[3]] < DD[NC[4]]; DD[NC[3]]++)
          if (DD[-NC[6]] = DD[NC[5]].indexOf(DD[NC[0]][DD[NC[3]]]), DD[-NC[6]] !== -NC[2])
            if (DD[NC[7]] < NC[1]) DD[NC[7]] = DD[-NC[6]];
            else {
              OC(DD[NC[7]] += DD[-NC[6]] * NC[29], DD[NC[8]] |= DD[NC[7]] << DD[NC[9]], DD[NC[9]] += (DD[NC[7]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
              do {
                OC(DD[NC[10]].push(DD[NC[8]] & NC[11]), DD[NC[8]] >>= NC[3], DD[NC[9]] -= NC[3])
              } while (DD[NC[9]] > NC[25]);
              DD[NC[7]] = -NC[2]
            } return DD[NC[7]] > -NC[2] && DD[NC[10]].push((DD[NC[8]] | DD[NC[7]] << DD[NC[9]]) & NC[11]), XC(DD[NC[10]])
      }(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
    }

    function XC(...DD) {
      return DD[NC[12]] = NC[2], typeof Ic !== NC[17] && Ic ? (new Ic).decode(new pc(DD[NC[1]])) : typeof ic !== NC[17] && ic ? ic.from(DD[NC[1]]).toString("utf-8") : Qc(DD[NC[1]])
    }

    function mC(DD, CD, cD) {
      if (DD === gC(82) + NC[39]) return CD + cD
    }

    function nC() {}

    function OC() {
      OC = function() {}
    }
    OC(oC = {}, vC = ["2S,ylv22%Lbur", "/Ek9rX<V1;8~/<9c_Dejk.)fINHe+cvCvBx~*q?rC4a#3w=Cm`", 'MQ"gF$^4u"%Ch<DQU>Kynv3X:Jrocf', "c_JA|e]5M", "8;A5>.~5ZNhzr", "0B!UyU0r", "XK6*[5I?z#F%<tW)", 'LwCUbKb2H>?gew(yQD`)Zbg"m"Z', "1>#E+0p$6#SH5p@z7,Ily^WQ)(}h[^BG3@!u", "sBD)bU2JF", '*#75J^T"a4L~eMWb$;kj!0zyMh%~?_HV^#6hW$/uuHHuw!YV`hflp', "hws}g9w;M", '4w{[x0."nR~v=*WQnK>H[e$V.IQ]2]$VHwNu', "53HIN+&C?_#6P.,a~a~*80nJ>h]xxN6GOnj5;{IJL4(Lr", 'Wn_AJ,?ri>C4?BbCawd+|U(y3/V9#tHG!P6h"GLVAQ|pL__tNj/ov<&)u', "9REgZU<qL4f<&pmvb;vA;E^u2(Kzcbxc+R/qjtG)<x", '(N*p~9Pzk_^F@cwSxK%)P$U0FJ"658ZcS;ihwR.Qo,4~Yf', "1U(UnAeD+,Jkvf~cSKqAgkE4o,l,3P|)twijy:22a4}4Y?CGH/:wU?Ju/8n", "[yw5onz2Y>:z32oD?zZ~L", "$34um^]G=Jj%<Cfb", "^B;g>,qV,x9yCwft*whU+B0V];mT)b{JP;Eg)::al;?Fp=)ZOR#l[", "Zc9A,AgXZx;vc?FC]!ShsX2r", '@EZyy,d3~"d/:M}Sxr', ".>buF~^4Zxh96M<)OUg|D*pJ%(gB[ppV`vP", ">(TMr_PiQ_MbJ=3c8@0u/?|JeQd5o?1T4;yMURqV:J]$c*~J", 'WG~Uo?/0lQx~{NlQDEzl}BEy",esW=Jpv_f', '>howO,W"5;;', "xDM.cDfgcNHvjF7D:zrhH{Sv23p", "TDYglhQfv37+CthG5n/~z;>tpNn*^cl/|G_}1=7Gj", "[_{M[hB)|QM~9Pec&RA9ConqD>+zWzs)0IeI[", "+K:5};#r", "Yn2MneOXG_2LFBB{o#|~(GFJW;+s;C|t[#1Sm|17*80(/%R)Qjf", "$nv~o+Hvz/3](NWS_aXS/;rV8_`o!=xJsK!w>", "Uxs$on]5~4>S7*xzr_)S__%7vIK[<~$v,Dowp", 'a#clDvi;.hz"G4lyr(T|YU%gEIG', "U,Vj8RtCU#jIr", "uhWyEXJJNQMk7cvbZj)[2!C&XQ9ymt^GS__H}+]+88Mqr", "aw2990{2IH:AQf", "Zy>y=<r?q,|R!4@Jc>Vj", '4l$S0+oG?QNbP.&Q<wlq#tMZlWX,~^q{"RKHN.#VW(kzr', "Y/WEL0RjW(;A:0~Q(#oSGe*uLhL#gpwCxQZ~d]E4]8h(b~Vz`3f", "ORh*i|x0nLIKXz&t]!%ocDiv!&^.Zz>Dk`", "o,hUj0oG%I", 'vBT|]tbuj}@u:ezvdGSUPk_QRxIBABJGHhh5!RZ)Ph~z;~~J@;0.IB"Ch"8/r', "!a9Aj_`", 'f_%EF~>+6>IqS="Z33`j#?_)%;gpics/]n!Ue5Sy[L~U^8uz{;!9<~Bf', "Jy=S#?MQ`Q{k9pSZ:UpAz:d)y,lpR*iyRaJlf1Y5mNn};BwSq,`qFt`", "J;4HwH5Qq,>07cQD+EfEC27Rx,CE9^Xc{/lI!BX).I:Tr", "}Q=HhA:/_#=kKPDS9E/oc", "~nAwJ0*2H&<x[PHD.DGp:.bJY>G0&8J>y+`h)oSV%I_(VB;a&RCjk+yuI/", "d>(IN.v2G(b[[^3", '2c9FEq7XU"y}9p2p[h$u=6~)M48~&Pla|3w90?75[LgK5M', 'Bc89Vq|;p#{P=bHG~jt+x.")%_/R=47v', "9,[H,$ZD?;U$W*TD2#!Ux.5QV#dL1^uQ/wW$#X^4r(5", "v_0cU?qE0&KLIth[tKgE[oi:r8r#VMSy", "cb3}DU[euH+M^fA=.#4}J=(2U/", "snZAB11XT&@/=znc^>gj", "5SDh)w8VQ(qXme,vj+>+r1MZW3VUl%St=ca[y", 'U6pASh|Vm"3Kd,VSA#wI', "w/4HV6:ym>kzr", "+B,g.Eejq#:zP.RZ{K1S2*qu$h7sac?p$;:9BK)CyQ20ppjz", "Aj2IK~z2*;u)~P{ba+$}_Ayv+>iA&M`)&b4}c:5)F", 'JQ!5fR8uq6|Nx]sboRs.loBf:"^y;~[vkb#j2{FrSQ', ".Pc~<B@r?3GGifnJ9#iIWX7DKI*,r", "kN4H{h=)NQPj<~FzM*:c^|,V5Izpu.(ZP(UE_18$>4)4|%(C@>hH`{Z&j", "uy5+k^ZDvhqrg8_v<S89U_;2QI}K<C>D}KQAs~`", '&Ru5G<rVkQ50""~S=RK+<_b2O/`ob<sbzDP', '!R!9}+vJ/;"v2N^[e!DU<B2(_g}q7?4pOPKyDh8?]_slJ]%G`yP', "H,yH>5[f:&Ij@=N", "KbVEJ0`", "`_j9P$Z&BWo!5pM@;c5}", "&a>yr?j7M&E9`", "QD2**!&jc/&*^N]pn>iM", ':,XHD(n;:&]641#/nE"$]twr', "f_xl|<L$l(mr3pTGk,7uLD0uZ#RUD^jC!#_yv2sy&;pHD,8{+af", "rD%joB(ar_ks>%?G_IH5{:V2,>!!G=9J_,z)CD@vcNFKJ.xc5jA.Q", 'U#6Ug7ia$".RwNHvmBeI~HlQvJ', "=yplZ<>X?3?r68u", "G+A+E(2(m//>:_vz4lZEW+R+EJ]_A~:pZ+9FD(IuG3", "Fcrh,$aVC4rK;_3>O[Zle=0VjJVU^,7D%h,gt:@qPIde{N$[%r", 'vBL9E"9CG8y}gw.GRNb+7;.eB3=[r', '<[(Iz,7"h&kX<M;[3(`j', ";R>y!~(r", "6_(/hh>D", 'r65TBq^b6W@})1##"&<>559F^3vd%R8', "WG`{#pUHH%y", "&vkh!z3n", "#x~8Y87$", "![$8L^I$", 'GSk?8"B$Gwcw,zz', "p[I~]MWLP(W2okL", "a=(p[#/U3owhbz", "FS)ARb!oz[Ytgd[HIuz4", ')ny5NJ0Y"[5h.Y}yl~$4', "NQ1KuHfniomWV89(Iupz", "O38zvWK,I[2s:B4Uu?5z", "P|ULlAk1", "Esi#lan1", "fe$^|/}E", "F|K)LB;1", "NP%SUAcH", "`tPl", "^_U8puViSFgYuChu", "2<Mleu>tv~oZ)46&", "i<Vk*&ui:lS+?Cvu", "^>N*TOLt~ef1ZC3v", 'SF%*U"~$WYTT@ki', "]w8(fygb", "mv!,]|wH", "@PZ@y%5<", "=(IYC", "c*X{1S$<", "@PZ@n6Mw", "QsXKx", "aZ1xCFypCUw", "ka&DZ>^zXn;", "OU}/+s//?jF", "v.bazGdvF[W", "!0UeElYYfCU", "%jyMCyycFWT", "ieYX7+9}Z>A", "~gwo++M}G]=", "+2y_5`d<", "f;EnI`#<", "m2>/", "226{c`0<", "`gv^j", "32am1^6", "32)hGAH<", "~21/", "|ZheUS9B", "fA@n", '.B1MoRJaur$;Ri}R`emOzR^H"L', "*A/x5^9w!Oz^89I`(;9[V8$mpL", "DbV[VJ7iZ_*]u{Av/`7M.%vhO`", ";~eJ!ywL", '"t@.e37A', "k|8kK9NA", "`?&1H", "k|8kMY*T", "jI@CR", "5r$J)97o)GIj#9REJ/Jf", "92#fWOnz+OJ*1:3ummsB", "}UnK+>k>8ZY,vEKoyO*a", ">,wpTuhNsB]&L{`DX5LA", "$bh/KV[B", "q]ExPvQY", "X2EXj1qnX8", "Fjzt~<9B", "AH.e", "d2Re[", "<gre", '.jxX"lz', "%]noE}Yk", "WbapU,9B"]), OC(cc = function(...DD) {
      OC(DD[NC[12]] = NC[1], DD[NC[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], DD[NC[13]] = NC[18], DD[NC[14]] = []);
      try {
        OC(DD[NC[13]] = Object, DD[NC[14]][NC[27]]("".__proto__.constructor.name))
      } catch (vC) {}
      DD: for (DD[NC[15]] = NC[1]; DD[NC[15]] < DD[NC[5]][NC[12]]; DD[NC[15]]++) try {
        for (DD[NC[13]] = DD[NC[5]][DD[NC[15]]](), DD[-NC[16]] = NC[1]; DD[-NC[16]] < DD[NC[14]][NC[12]]; DD[-NC[16]]++)
          if (typeof DD[NC[13]][DD[NC[14]][DD[-NC[16]]]] === NC[17]) continue DD;
        return DD[NC[13]]
      } catch (vC) {}
      return DD[NC[13]] || this
    }() || {}, Ic = cc.TextDecoder, pc = cc.Uint8Array, ic = cc.lt, fc = cc.String || String, bc = cc.Array || Array, Qc = function(...DD) {
      return OC(DD[NC[12]] = NC[1], DD[NC[5]] = new bc(NC[70]), DD[-NC[28]] = fc[NC[24]] || fc.fromCharCode, DD[NC[14]] = []),
        function(...CD) {
          for (OC(CD[NC[12]] = NC[2], CD[NC[21]] = NC[18], CD[NC[20]] = NC[18], CD[NC[19]] = CD[NC[1]][NC[12]], DD[NC[14]][NC[12]] = NC[1]), CD[NC[10]] = NC[1]; CD[NC[10]] < CD[NC[19]];) OC(CD[NC[20]] = CD[NC[1]][CD[NC[10]]++], CD[NC[20]] <= NC[68] ? CD[NC[21]] = CD[NC[20]] : CD[NC[20]] <= 223 ? CD[NC[21]] = (CD[NC[20]] & NC[69]) << NC[23] | CD[NC[1]][CD[NC[10]]++] & NC[22] : CD[NC[20]] <= 239 ? CD[NC[21]] = (CD[NC[20]] & NC[62]) << NC[26] | (CD[NC[1]][CD[NC[10]]++] & NC[22]) << NC[23] | CD[NC[1]][CD[NC[10]]++] & NC[22] : fc[NC[24]] ? CD[NC[21]] = (CD[NC[20]] & NC[25]) << NC[20] | (CD[NC[1]][CD[NC[10]]++] & NC[22]) << NC[26] | (CD[NC[1]][CD[NC[10]]++] & NC[22]) << NC[23] | CD[NC[1]][CD[NC[10]]++] & NC[22] : (CD[NC[21]] = NC[22], CD[NC[10]] += NC[4]), DD[NC[14]][NC[27]](DD[NC[5]][CD[NC[21]]] || (DD[NC[5]][CD[NC[21]]] = DD[-NC[28]](CD[NC[21]]))));
          return DD[NC[14]].join("")
        }
    }()), (() => {
      function DD(...DD) {
        return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = function(DD) {
          var CD, cD, ID, pD, iD, fD, bD;
          for (OC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = NC[1], iD = NC[1], fD = -NC[2]), bD = NC[1]; bD < cD; bD++) {
            var QD = '}=$uz47v^?{3XLS_9oEU(q+aYTd/|<]5jIHJybRNi,cVm`68QA1nhK[p:DFPBCwf)*0s"W~%t2>ZrOMxkl#&;.g!Ge@'.indexOf(CD[bD]);
            if (QD !== -NC[2])
              if (fD < NC[1]) fD = QD;
              else {
                OC(fD += QD * NC[29], pD |= fD << iD, iD += (fD & NC[30]) > NC[31] ? NC[32] : NC[33]);
                do {
                  OC(ID.push(pD & NC[11]), pD >>= NC[3], iD -= NC[3])
                } while (iD > NC[25]);
                fD = -NC[2]
              }
          }
          return fD > -NC[2] && ID.push((pD | fD << iD) & NC[11]), XC(ID)
        }(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
      } [][NC[12]] = NC[1];
      const CD = NC[36],
        cD = DD(89) + DD(90) + DD(NC[29]),
        ID = {
          [NC[36]]: DD(92) + DD(93) + DD(94) + DD(95)
        },
        pD = (...DD) => {
          DD[NC[12]] = NC[2];
          const CD = ID[DD[NC[1]]];
          if (!CD) {
            function cD(...DD) {
              for (OC(DD[NC[12]] = NC[2], DD[-NC[44]] = 'Ee12sP*mN>#{@`8Oxgczn7h3bRt_DFfl)jr(w"G]S<k|[$CL~H;K0W9Q!J+IYiv=}XudBMoAypVa^ZUT/&,5.46%:?q', DD[NC[42]] = "" + (DD[NC[1]] || ""), DD[NC[43]] = DD[NC[42]].length, DD[NC[10]] = [], DD[NC[8]] = NC[1], DD[NC[46]] = NC[1], DD[NC[25]] = -NC[2]), DD[NC[34]] = NC[1]; DD[NC[34]] < DD[NC[43]]; DD[NC[34]]++)
                if (DD[-NC[45]] = DD[-NC[44]].indexOf(DD[NC[42]][DD[NC[34]]]), DD[-NC[45]] !== -NC[2])
                  if (DD[NC[25]] < NC[1]) DD[NC[25]] = DD[-NC[45]];
                  else {
                    OC(DD[NC[25]] += DD[-NC[45]] * NC[29], DD[NC[8]] |= DD[NC[25]] << DD[NC[46]], DD[NC[46]] += (DD[NC[25]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                    do {
                      OC(DD[NC[10]].push(DD[NC[8]] & NC[11]), DD[NC[8]] >>= NC[3], DD[NC[46]] -= NC[3])
                    } while (DD[NC[46]] > NC[25]);
                    DD[NC[25]] = -NC[2]
                  } return DD[NC[25]] > -NC[2] && DD[NC[10]].push((DD[NC[8]] | DD[NC[25]] << DD[NC[46]]) & NC[11]), XC(DD[NC[10]])
            }

            function pD(...DD) {
              return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = cD(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
            }
            throw new Error(pD(96) + pD(NC[81]) + pD(98) + pD(NC[6]) + " v" + DD[NC[1]])
          }
          return [NC[1], NC[2], NC[47], NC[4], NC[49], NC[38], NC[23], NC[25]].map(((...DD) => {
            function cD(DD) {
              return typeof oC[DD] === NC[17] ? oC[DD] = function(...DD) {
                for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = '9HIjtDP3Za5r(MCwq1BeFWQ4R#{izES~m.8l|<GYX%K[_h$^vNb=)}7UuJ`cg0*n]6dO@/A,>VTko?fy:+"&!2x;Lps', DD[-NC[48]] = "" + (DD[NC[1]] || ""), DD[NC[4]] = DD[-NC[48]].length, DD[NC[10]] = [], DD[NC[38]] = NC[1], DD[NC[9]] = NC[1], DD[NC[7]] = -NC[2]), DD[NC[34]] = NC[1]; DD[NC[34]] < DD[NC[4]]; DD[NC[34]]++)
                  if (DD[NC[36]] = DD[NC[5]].indexOf(DD[-NC[48]][DD[NC[34]]]), DD[NC[36]] !== -NC[2])
                    if (DD[NC[7]] < NC[1]) DD[NC[7]] = DD[NC[36]];
                    else {
                      OC(DD[NC[7]] += DD[NC[36]] * NC[29], DD[NC[38]] |= DD[NC[7]] << DD[NC[9]], DD[NC[9]] += (DD[NC[7]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                      do {
                        OC(DD[NC[10]].push(DD[NC[38]] & NC[11]), DD[NC[38]] >>= NC[3], DD[NC[9]] -= NC[3])
                      } while (DD[NC[9]] > NC[25]);
                      DD[NC[7]] = -NC[2]
                    } return DD[NC[7]] > -NC[2] && DD[NC[10]].push((DD[NC[38]] | DD[NC[7]] << DD[NC[9]]) & NC[11]), XC(DD[NC[10]])
              }(vC[DD]) : oC[DD]
            }
            return DD[NC[12]] = NC[2], cD(NC[43]) + "z" in nC && function(...DD) {
              OC(DD[NC[12]] = NC[1], DD[NC[5]] = function(...DD) {
                function CD(DD) {
                  return QD(fD(BD(DD)))
                }

                function ID(...DD) {
                  return DD[NC[12]] = NC[47], QD(bD(BD(DD[NC[1]]), BD(DD[NC[2]])))
                }

                function pD(...DD) {
                  return DD[NC[12]] = NC[47], wD(bD(BD(DD[NC[1]]), BD(DD[NC[2]])))
                }

                function iD(...DD) {
                  return DD[NC[12]] = NC[4], SD(bD(BD(DD[NC[1]]), BD(DD[NC[2]])), DD[NC[47]])
                }

                function fD(DD) {
                  return MD(nD(yD(DD), DD.length * NC[3]))
                }

                function bD(...DD) {
                  function CD(...DD) {
                    for (OC(DD[NC[12]] = NC[2], DD[NC[53]] = '5bNCSMOVDmJPRU~E,$ZB8jla<T"7v(t{2;o9^HGYuQ!_%?n>*h@/id.cF]})=[wg6LsK41f#ypx|k+rXAIez&3`0Wq:', DD[NC[13]] = "" + (DD[NC[1]] || ""), DD[NC[51]] = DD[NC[13]].length, DD[NC[49]] = [], DD[NC[8]] = NC[1], DD[-NC[50]] = NC[1], DD[NC[25]] = -NC[2]), DD[-NC[33]] = NC[1]; DD[-NC[33]] < DD[NC[51]]; DD[-NC[33]]++)
                      if (DD[NC[52]] = DD[NC[53]].indexOf(DD[NC[13]][DD[-NC[33]]]), DD[NC[52]] !== -NC[2])
                        if (DD[NC[25]] < NC[1]) DD[NC[25]] = DD[NC[52]];
                        else {
                          OC(DD[NC[25]] += DD[NC[52]] * NC[29], DD[NC[8]] |= DD[NC[25]] << DD[-NC[50]], DD[-NC[50]] += (DD[NC[25]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                          do {
                            OC(DD[NC[49]].push(DD[NC[8]] & NC[11]), DD[NC[8]] >>= NC[3], DD[-NC[50]] -= NC[3])
                          } while (DD[-NC[50]] > NC[25]);
                          DD[NC[25]] = -NC[2]
                        } return DD[NC[25]] > -NC[2] && DD[NC[49]].push((DD[NC[8]] | DD[NC[25]] << DD[-NC[50]]) & NC[11]), XC(DD[NC[49]])
                  }

                  function cD(...DD) {
                    return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = CD(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
                  }
                  DD[NC[12]] = NC[47], DD[NC[5]] = yD(DD[NC[1]]), DD[NC[5]].length > NC[54] && (DD[NC[5]] = nD(DD[NC[5]], DD[NC[1]].length * NC[3]));
                  var ID = Array(NC[54]),
                    pD = Array(NC[54]);
                  for (DD[NC[4]] = NC[1]; DD[NC[4]] < NC[54]; DD[NC[4]]++) OC(ID[DD[NC[4]]] = DD[NC[5]][DD[NC[4]]] ^ NC[91], pD[DD[NC[4]]] = DD[NC[5]][DD[NC[4]]] ^ NC[92]);
                  return DD[NC[55]] = nD(ID.concat(yD(DD[NC[2]])), NC[56] + DD[NC[2]].length * NC[3]), MD(nD(pD.concat(DD[NC[55]]), mC(cD(107) + NC[39], NC[56], NC[93])))
                }

                function QD(...CD) {
                  function ID(...DD) {
                    for (OC(DD[NC[12]] = NC[2], DD[NC[59]] = 'L<w,?E0DJIj(spM$qC.o#>}`~x!@ziTQctnBS2f9Z5kA8%;H*[vYRKVGO+F&d"lg1P4b67){U]urmW/y_|NhX:3a^e=', DD[NC[57]] = "" + (DD[NC[1]] || ""), DD[NC[58]] = DD[NC[57]].length, DD[NC[10]] = [], DD[-NC[57]] = NC[1], DD[NC[23]] = NC[1], DD[-NC[60]] = -NC[2]), DD[NC[34]] = NC[1]; DD[NC[34]] < DD[NC[58]]; DD[NC[34]]++)
                      if (DD[NC[36]] = DD[NC[59]].indexOf(DD[NC[57]][DD[NC[34]]]), DD[NC[36]] !== -NC[2])
                        if (DD[-NC[60]] < NC[1]) DD[-NC[60]] = DD[NC[36]];
                        else {
                          OC(DD[-NC[60]] += DD[NC[36]] * NC[29], DD[-NC[57]] |= DD[-NC[60]] << DD[NC[23]], DD[NC[23]] += (DD[-NC[60]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                          do {
                            OC(DD[NC[10]].push(DD[-NC[57]] & NC[11]), DD[-NC[57]] >>= NC[3], DD[NC[23]] -= NC[3])
                          } while (DD[NC[23]] > NC[25]);
                          DD[-NC[60]] = -NC[2]
                        } return DD[-NC[60]] > -NC[2] && DD[NC[10]].push((DD[-NC[57]] | DD[-NC[60]] << DD[NC[23]]) & NC[11]), XC(DD[NC[10]])
                  }

                  function pD(DD) {
                    return typeof oC[DD] === NC[17] ? oC[DD] = ID(vC[DD]) : oC[DD]
                  }
                  CD[NC[12]] = NC[2];
                  try {
                    DD[NC[61]]
                  } catch (iD) {
                    DD[NC[61]] = NC[1]
                  }
                  for (OC(CD[NC[5]] = DD[NC[61]] ? cD(108) + pD(109) + pD(110) : pD(111) + pD(112) + pD(113), CD[NC[47]] = "", CD[NC[4]] = NC[18]), CD[NC[28]] = NC[1]; CD[NC[28]] < CD[NC[1]].length; CD[NC[28]]++) OC(CD[NC[4]] = CD[NC[1]].charCodeAt(CD[NC[28]]), CD[NC[47]] += CD[NC[5]].charAt(CD[NC[4]] >>> NC[49] & NC[62]) + CD[NC[5]].charAt(CD[NC[4]] & NC[62]));
                  return CD[NC[47]]
                }

                function wD(...CD) {
                  function cD(...DD) {
                    for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = 'izBoPxZ(Y.Q7fVngO8[&9A<2TdKXJDba%E0twN+`p;qh5R}vFS@_/We>uUc"jsH{*Cm^Ik6]GL$#)Ml3~?41y!,=:|r', DD[NC[47]] = "" + (DD[NC[1]] || ""), DD[-NC[64]] = DD[NC[47]].length, DD[NC[10]] = [], DD[NC[38]] = NC[1], DD[NC[65]] = NC[1], DD[NC[44]] = -NC[2]), DD[-NC[63]] = NC[1]; DD[-NC[63]] < DD[-NC[64]]; DD[-NC[63]]++)
                      if (DD[NC[39]] = DD[NC[5]].indexOf(DD[NC[47]][DD[-NC[63]]]), DD[NC[39]] !== -NC[2])
                        if (DD[NC[44]] < NC[1]) DD[NC[44]] = DD[NC[39]];
                        else {
                          OC(DD[NC[44]] += DD[NC[39]] * NC[29], DD[NC[38]] |= DD[NC[44]] << DD[NC[65]], DD[NC[65]] += (DD[NC[44]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                          do {
                            OC(DD[NC[10]].push(DD[NC[38]] & NC[11]), DD[NC[38]] >>= NC[3], DD[NC[65]] -= NC[3])
                          } while (DD[NC[65]] > NC[25]);
                          DD[NC[44]] = -NC[2]
                        } return DD[NC[44]] > -NC[2] && DD[NC[10]].push((DD[NC[38]] | DD[NC[44]] << DD[NC[65]]) & NC[11]), XC(DD[NC[10]])
                  }

                  function ID(...DD) {
                    return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = cD(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
                  }
                  CD[NC[12]] = NC[2];
                  try {
                    DD[-NC[66]]
                  } catch (iD) {
                    DD[-NC[66]] = ""
                  }
                  for (OC(CD[NC[5]] = ID(114) + ID(115) + ID(116) + ID(117) + ID(118) + ID(119) + ID(NC[112]) + "/", CD[NC[13]] = "", CD[NC[4]] = CD[NC[1]].length), CD[NC[49]] = NC[1]; CD[NC[49]] < CD[NC[4]]; CD[NC[49]] += NC[4])
                    for (CD[NC[8]] = CD[NC[1]].charCodeAt(CD[NC[49]]) << NC[54] | (CD[NC[49]] + NC[2] < CD[NC[4]] ? CD[NC[1]].charCodeAt(CD[NC[49]] + NC[2]) << NC[3] : NC[1]) | (CD[NC[49]] + NC[47] < CD[NC[4]] ? CD[NC[1]].charCodeAt(CD[NC[49]] + NC[47]) : NC[1]), CD[-NC[21]] = NC[1]; CD[-NC[21]] < NC[49]; CD[-NC[21]]++) CD[NC[49]] * NC[3] + CD[-NC[21]] * NC[23] > CD[NC[1]].length * NC[3] ? CD[NC[13]] += DD[-NC[66]] : CD[NC[13]] += CD[NC[5]].charAt(CD[NC[8]] >>> NC[23] * (NC[4] - CD[-NC[21]]) & NC[22]);
                  return CD[NC[13]]
                }

                function SD(DD, CD) {
                  var cD, ID, pD, iD, fD, bD, QD, wD, SD = CD.length;
                  for (cD = Array(), ID = Array(Math.ceil(DD.length / NC[47])), fD = NC[1]; fD < ID.length; fD++) ID[fD] = DD.charCodeAt(fD * NC[47]) << NC[3] | DD.charCodeAt(fD * NC[47] + NC[2]);
                  for (; ID.length > NC[1];) {
                    for (OC(wD = Array(), QD = NC[1]), fD = NC[1]; fD < ID.length; fD++) OC(QD = (QD << NC[54]) + ID[fD], bD = Math.floor(QD / SD), QD -= bD * SD), (wD.length > NC[1] || bD > NC[1]) && (wD[wD.length] = bD);
                    OC(cD[cD.length] = QD, ID = wD)
                  }
                  for (pD = "", fD = cD.length - NC[2]; fD >= NC[1]; fD--) pD += CD.charAt(cD[fD]);
                  for (iD = Math.ceil(DD.length * NC[3] / (Math.log(CD.length) / Math.log(NC[47]))), fD = pD.length; fD < iD; fD++) pD = CD[NC[1]] + pD;
                  return pD
                }

                function BD(...DD) {
                  var CD, cD;
                  for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = "", DD[NC[13]] = -NC[2]); ++DD[NC[13]] < DD[NC[1]].length;) OC(CD = DD[NC[1]].charCodeAt(DD[NC[13]]), cD = DD[NC[13]] + NC[2] < DD[NC[1]].length ? DD[NC[1]].charCodeAt(DD[NC[13]] + NC[2]) : NC[1]), NC[103] <= CD && CD <= NC[104] && NC[105] <= cD && cD <= NC[106] && OC(CD = NC[107] + ((CD & NC[67]) << NC[74]) + (cD & NC[67]), DD[NC[13]]++), CD <= NC[68] ? DD[NC[5]] += String.fromCharCode(CD) : CD <= NC[108] ? DD[NC[5]] += String.fromCharCode(NC[109] | CD >>> NC[23] & NC[69], NC[70] | CD & NC[22]) : CD <= NC[77] ? DD[NC[5]] += String.fromCharCode(NC[28] | CD >>> NC[26] & NC[62], NC[70] | CD >>> NC[23] & NC[22], NC[70] | CD & NC[22]) : CD <= NC[110] && (DD[NC[5]] += String.fromCharCode(NC[82] | CD >>> NC[20] & NC[25], NC[70] | CD >>> NC[26] & NC[22], NC[70] | CD >>> NC[23] & NC[22], NC[70] | CD & NC[22]));
                  return DD[NC[5]]
                }

                function yD(DD) {
                  var CD, cD = Array(DD.length >> NC[47]);
                  for (CD = NC[1]; CD < cD.length; CD++) cD[CD] = NC[1];
                  for (CD = NC[1]; CD < DD.length * NC[3]; CD += NC[3]) cD[CD >> NC[38]] |= (DD.charCodeAt(CD / NC[3]) & NC[11]) << NC[73] - CD % NC[72];
                  return cD
                }

                function MD(...DD) {
                  for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = ""), DD[-NC[71]] = NC[1]; DD[-NC[71]] < DD[NC[1]].length * NC[72]; DD[-NC[71]] += NC[3]) DD[NC[5]] += String.fromCharCode(DD[NC[1]][DD[-NC[71]] >> NC[38]] >>> NC[73] - DD[-NC[71]] % NC[72] & NC[11]);
                  return DD[NC[5]]
                }

                function tD(...DD) {
                  return DD[NC[12]] = NC[47], DD[NC[1]] >>> DD[NC[2]] | DD[NC[1]] << NC[72] - DD[NC[2]]
                }

                function ZD(DD, CD) {
                  return DD >>> CD
                }

                function oD(...DD) {
                  return DD[NC[12]] = NC[4], DD[NC[1]] & DD[NC[2]] ^ ~DD[NC[1]] & DD[NC[47]]
                }

                function vD(DD, CD, cD) {
                  return DD & CD ^ DD & cD ^ CD & cD
                }

                function ND(DD) {
                  return tD(DD, NC[47]) ^ tD(DD, NC[32]) ^ tD(DD, NC[113])
                }

                function gD(DD) {
                  return tD(DD, NC[23]) ^ tD(DD, NC[94]) ^ tD(DD, NC[78])
                }

                function XD(...DD) {
                  return DD[NC[12]] = NC[2], tD(DD[NC[1]], NC[25]) ^ tD(DD[NC[1]], NC[20]) ^ ZD(DD[NC[1]], NC[4])
                }

                function mD(DD) {
                  return tD(DD, NC[114]) ^ tD(DD, NC[75]) ^ ZD(DD, NC[74])
                }

                function nD(CD, cD) {
                  var ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, nD = new Array(NC[184], -NC[185], NC[186], -NC[187], NC[188], -NC[189], NC[190], NC[191]);
                  for (ID = new Array(NC[76]), OC(CD[cD >> NC[38]] |= NC[70] << NC[73] - cD % NC[72], CD[(cD + NC[76] >> NC[36] << NC[49]) + NC[62]] = cD), yD = NC[1]; yD < CD.length; yD += NC[54]) {
                    for (OC(pD = nD[NC[1]], iD = nD[NC[2]], fD = nD[NC[47]], bD = nD[NC[4]], QD = nD[NC[49]], wD = nD[NC[38]], SD = nD[NC[23]], BD = nD[NC[25]]), MD = NC[1]; MD < NC[76]; MD++) OC(MD < NC[54] ? ID[MD] = CD[MD + yD] : ID[MD] = OD(OD(OD(mD(ID[MD - NC[47]]), ID[MD - NC[25]]), XD(ID[MD - NC[62]])), ID[MD - NC[54]]), tD = OD(OD(OD(OD(BD, gD(QD)), oD(QD, wD, SD)), DD[NC[47]][MD]), ID[MD]), ZD = OD(ND(pD), vD(pD, iD, fD)), BD = SD, SD = wD, wD = QD, QD = OD(bD, tD), bD = fD, fD = iD, iD = pD, pD = OD(tD, ZD));
                    OC(nD[NC[1]] = OD(pD, nD[NC[1]]), nD[NC[2]] = OD(iD, nD[NC[2]]), nD[NC[47]] = OD(fD, nD[NC[47]]), nD[NC[4]] = OD(bD, nD[NC[4]]), nD[NC[49]] = OD(QD, nD[NC[49]]), nD[NC[38]] = OD(wD, nD[NC[38]]), nD[NC[23]] = OD(SD, nD[NC[23]]), nD[NC[25]] = OD(BD, nD[NC[25]]))
                  }
                  return nD
                }

                function OD(DD, CD) {
                  var cD = (DD & NC[77]) + (CD & NC[77]);
                  return (DD >> NC[54]) + (CD >> NC[54]) + (cD >> NC[54]) << NC[54] | cD & NC[77]
                }
                return OC(DD[NC[12]] = NC[1], DD[NC[61]] = NC[1], DD[-NC[66]] = ""), DD[NC[47]] = new Array(NC[120], NC[121], -NC[122], -NC[123], NC[124], NC[125], -NC[126], -NC[127], -NC[128], NC[129], NC[130], NC[131], NC[132], -NC[133], -NC[134], -NC[135], -NC[136], -NC[137], NC[138], NC[139], NC[140], NC[141], NC[142], NC[143], -NC[144], -NC[145], -NC[146], -NC[147], -NC[148], -NC[149], NC[150], NC[151], NC[152], NC[153], NC[154], NC[155], NC[156], NC[157], -NC[158], -NC[159], -NC[160], -NC[161], -NC[162], -NC[163], -NC[164], -NC[165], -NC[166], NC[167], NC[168], NC[169], NC[170], NC[171], NC[172], NC[173], NC[174], NC[175], NC[176], NC[177], -NC[178], -NC[179], -NC[180], -NC[181], -NC[182], -NC[183]), {
                  hex: CD,
                  b64: pD,
                  any: iD,
                  hex_hmac: ID,
                  b64_hmac: pD,
                  any_hmac: iD
                }
              }(), console.log(DD[NC[5]]))
            }(), parseInt(CD[cD(121)](DD[NC[1]] * NC[3], DD[NC[1]] * NC[3] + NC[3]), NC[54])
          }))
        };
      OC(iC = (...DD) => (DD[NC[12]] = NC[2], DD[NC[1]] >= CD), fC = (...DD) => {
        function CD(...DD) {
          return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = function(...DD) {
            for (OC(DD[NC[12]] = NC[2], DD[NC[2]] = '6%<?*$v7}{/u9>82zw+&)1y3etHfBj~4mV#QsodW5IU;SJ!crN0gqln_KEpxFD:X[YL=`(k],.RC^hGTPA|a@ZbMOi"', DD[NC[13]] = "" + (DD[NC[1]] || ""), DD[NC[14]] = DD[NC[13]].length, DD[NC[10]] = [], DD[NC[79]] = NC[1], DD[NC[23]] = NC[1], DD[NC[25]] = -NC[2]), DD[-NC[78]] = NC[1]; DD[-NC[78]] < DD[NC[14]]; DD[-NC[78]]++)
              if (DD[NC[36]] = DD[NC[2]].indexOf(DD[NC[13]][DD[-NC[78]]]), DD[NC[36]] !== -NC[2])
                if (DD[NC[25]] < NC[1]) DD[NC[25]] = DD[NC[36]];
                else {
                  OC(DD[NC[25]] += DD[NC[36]] * NC[29], DD[NC[79]] |= DD[NC[25]] << DD[NC[23]], DD[NC[23]] += (DD[NC[25]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                  do {
                    OC(DD[NC[10]].push(DD[NC[79]] & NC[11]), DD[NC[79]] >>= NC[3], DD[NC[23]] -= NC[3])
                  } while (DD[NC[23]] > NC[25]);
                  DD[NC[25]] = -NC[2]
                } return DD[NC[25]] > -NC[2] && DD[NC[10]].push((DD[NC[79]] | DD[NC[25]] << DD[NC[23]]) & NC[11]), XC(DD[NC[10]])
          }(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
        }
        DD[NC[12]] = NC[47];
        const cD = crypto[CD(122) + CD(123) + CD(124)](new Uint8Array(wC)),
          ID = pC[NC[13]][CD(NC[60]) + CD(126)](DD[NC[2]], {
            [CD(NC[68])]: NC[2]
          });
        QC(pD(DD[NC[1]]), cD, NC[2], ID);
        const iD = new Uint8Array(wC + ID[CD(NC[70])]);
        return OC(iD[CD(NC[80])](cD), iD[CD(NC[80])](ID, wC)), iD
      }, bC = (...DD) => {
        function CD(...DD) {
          return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = function(...DD) {
            for (OC(DD[NC[12]] = NC[2], DD[-NC[83]] = 'zkBJHrAintesqREbOFNyh8P${U[5dWxXpo3IwM&#jY])m.C~T`9g|4:"LQ_a2(^f!Z>@<+lDcv}=,/K61V7Su0?*%G;', DD[NC[13]] = "" + (DD[NC[1]] || ""), DD[NC[14]] = DD[NC[13]].length, DD[NC[85]] = [], DD[-NC[81]] = NC[1], DD[NC[84]] = NC[1], DD[NC[82]] = -NC[2]), DD[NC[3]] = NC[1]; DD[NC[3]] < DD[NC[14]]; DD[NC[3]]++)
              if (DD[NC[36]] = DD[-NC[83]].indexOf(DD[NC[13]][DD[NC[3]]]), DD[NC[36]] !== -NC[2])
                if (DD[NC[82]] < NC[1]) DD[NC[82]] = DD[NC[36]];
                else {
                  OC(DD[NC[82]] += DD[NC[36]] * NC[29], DD[-NC[81]] |= DD[NC[82]] << DD[NC[84]], DD[NC[84]] += (DD[NC[82]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                  do {
                    OC(DD[NC[85]].push(DD[-NC[81]] & NC[11]), DD[-NC[81]] >>= NC[3], DD[NC[84]] -= NC[3])
                  } while (DD[NC[84]] > NC[25]);
                  DD[NC[82]] = -NC[2]
                } return DD[NC[82]] > -NC[2] && DD[NC[85]].push((DD[-NC[81]] | DD[NC[82]] << DD[NC[84]]) & NC[11]), XC(DD[NC[85]])
          }(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
        }
        if (DD[NC[12]] = NC[47], CD(NC[89]) in nC && function(...DD) {
            OC(DD[NC[12]] = NC[1], DD[NC[5]] = function(...DD) {
              function CD(...DD) {
                return DD[NC[12]] = NC[2], bD(iD(SD(DD[NC[1]])))
              }

              function cD(...DD) {
                return DD[NC[12]] = NC[47], bD(fD(SD(DD[NC[1]]), SD(DD[NC[2]])))
              }

              function ID(...DD) {
                return DD[NC[12]] = NC[47], QD(fD(SD(DD[NC[1]]), SD(DD[NC[2]])))
              }

              function pD(DD, CD, cD) {
                return wD(fD(SD(DD), SD(CD)), cD)
              }

              function iD(DD) {
                return yD(mD(BD(DD), DD.length * NC[3]))
              }

              function fD(...DD) {
                function CD(...DD) {
                  for (OC(DD[NC[12]] = NC[2], DD[NC[2]] = 'uLCTGpaRWhDokFOAEMYcesQnSlbKUJZIHtdmiBg6q|j)V_`N7rPX9f>{v;8?35~w&x"}+2!/y[z,0<%^:4@=#*].$1(', DD[NC[13]] = "" + (DD[NC[1]] || ""), DD[-NC[86]] = DD[NC[13]].length, DD[NC[88]] = [], DD[NC[8]] = NC[1], DD[NC[23]] = NC[1], DD[NC[25]] = -NC[2]), DD[-NC[60]] = NC[1]; DD[-NC[60]] < DD[-NC[86]]; DD[-NC[60]]++)
                    if (DD[-NC[87]] = DD[NC[2]].indexOf(DD[NC[13]][DD[-NC[60]]]), DD[-NC[87]] !== -NC[2])
                      if (DD[NC[25]] < NC[1]) DD[NC[25]] = DD[-NC[87]];
                      else {
                        OC(DD[NC[25]] += DD[-NC[87]] * NC[29], DD[NC[8]] |= DD[NC[25]] << DD[NC[23]], DD[NC[23]] += (DD[NC[25]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                        do {
                          OC(DD[NC[88]].push(DD[NC[8]] & NC[11]), DD[NC[8]] >>= NC[3], DD[NC[23]] -= NC[3])
                        } while (DD[NC[23]] > NC[25]);
                        DD[NC[25]] = -NC[2]
                      } return DD[NC[25]] > -NC[2] && DD[NC[88]].push((DD[NC[8]] | DD[NC[25]] << DD[NC[23]]) & NC[11]), XC(DD[NC[88]])
                }

                function cD(DD) {
                  return typeof oC[DD] === NC[17] ? oC[DD] = CD(vC[DD]) : oC[DD]
                }
                DD[NC[12]] = NC[47], DD[NC[89]] = BD(DD[NC[1]]), DD[NC[89]].length > NC[54] && (DD[NC[89]] = mD(DD[NC[89]], DD[NC[1]].length * NC[3]));
                var ID = Array(NC[54]),
                  pD = Array(NC[54]);
                for (DD[NC[90]] = NC[1]; DD[NC[90]] < NC[54]; DD[NC[90]]++) OC(ID[DD[NC[90]]] = DD[NC[89]][DD[NC[90]]] ^ NC[91], pD[DD[NC[90]]] = DD[NC[89]][DD[NC[90]]] ^ NC[92]);
                return DD[NC[49]] = mD(ID.concat(BD(DD[NC[2]])), NC[56] + DD[NC[2]].length * NC[3]), yD(mD(pD.concat(DD[NC[49]]), mC(cD(135) + NC[39], NC[56], NC[93])))
              }

              function bD(CD) {
                var cD, ID, pD, iD;

                function fD(...DD) {
                  for (OC(DD[NC[12]] = NC[2], DD[-NC[96]] = '(ATohmE{S&^?I<*7XHL]Duc5~RlkFWnj"pM23Q+_8NOd/9vwtPi1,C>ZB4aJbG[:e|#VYfU.q!rszgxK}6;y@%0$)=`', DD[-NC[85]] = "" + (DD[NC[1]] || ""), DD[-NC[95]] = DD[-NC[85]].length, DD[NC[10]] = [], DD[NC[8]] = NC[1], DD[NC[7]] = NC[1], DD[NC[94]] = -NC[2]), DD[NC[3]] = NC[1]; DD[NC[3]] < DD[-NC[95]]; DD[NC[3]]++)
                    if (DD[NC[97]] = DD[-NC[96]].indexOf(DD[-NC[85]][DD[NC[3]]]), DD[NC[97]] !== -NC[2])
                      if (DD[NC[94]] < NC[1]) DD[NC[94]] = DD[NC[97]];
                      else {
                        OC(DD[NC[94]] += DD[NC[97]] * NC[29], DD[NC[8]] |= DD[NC[94]] << DD[NC[7]], DD[NC[7]] += (DD[NC[94]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                        do {
                          OC(DD[NC[10]].push(DD[NC[8]] & NC[11]), DD[NC[8]] >>= NC[3], DD[NC[7]] -= NC[3])
                        } while (DD[NC[7]] > NC[25]);
                        DD[NC[94]] = -NC[2]
                      } return DD[NC[94]] > -NC[2] && DD[NC[10]].push((DD[NC[8]] | DD[NC[94]] << DD[NC[7]]) & NC[11]), XC(DD[NC[10]])
                }

                function bD(...DD) {
                  return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = fD(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
                }
                try {
                  DD[NC[5]]
                } catch (QD) {
                  DD[NC[5]] = NC[1]
                }
                for (OC(cD = DD[NC[5]] ? bD(NC[98]) + bD(137) + bD(138) : bD(NC[98]) + bD(139) + bD(140), ID = "", pD = void 0), iD = NC[1]; iD < CD.length; iD++) OC(pD = CD.charCodeAt(iD), ID += cD.charAt(pD >>> NC[49] & NC[62]) + cD.charAt(pD & NC[62]));
                return ID
              }

              function QD(...CD) {
                function cD(...DD) {
                  for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = 'sWHbAJrfTBaYNLjmRSqDiedU<n:Eg#h5y0utC*8PozI/vlFk9+V2X.Kp[G}MOQw^Z)~(,`@1;x&>]4%_|{"$7=36?c!', DD[-NC[99]] = "" + (DD[NC[1]] || ""), DD[NC[14]] = DD[-NC[99]].length, DD[NC[10]] = [], DD[NC[38]] = NC[1], DD[NC[23]] = NC[1], DD[NC[25]] = -NC[2]), DD[NC[34]] = NC[1]; DD[NC[34]] < DD[NC[14]]; DD[NC[34]]++)
                    if (DD[NC[36]] = DD[NC[5]].indexOf(DD[-NC[99]][DD[NC[34]]]), DD[NC[36]] !== -NC[2])
                      if (DD[NC[25]] < NC[1]) DD[NC[25]] = DD[NC[36]];
                      else {
                        OC(DD[NC[25]] += DD[NC[36]] * NC[29], DD[NC[38]] |= DD[NC[25]] << DD[NC[23]], DD[NC[23]] += (DD[NC[25]] & NC[30]) > NC[31] ? NC[32] : NC[33]);
                        do {
                          OC(DD[NC[10]].push(DD[NC[38]] & NC[11]), DD[NC[38]] >>= NC[3], DD[NC[23]] -= NC[3])
                        } while (DD[NC[23]] > NC[25]);
                        DD[NC[25]] = -NC[2]
                      } return DD[NC[25]] > -NC[2] && DD[NC[10]].push((DD[NC[38]] | DD[NC[25]] << DD[NC[23]]) & NC[11]), XC(DD[NC[10]])
                }

                function ID(...DD) {
                  return DD[NC[12]] = NC[2], typeof oC[DD[NC[1]]] === NC[17] ? oC[DD[NC[1]]] = cD(vC[DD[NC[1]]]) : oC[DD[NC[1]]]
                }
                CD[NC[12]] = NC[2];
                try {
                  DD[NC[13]]
                } catch (pD) {
                  DD[NC[13]] = ""
                }
                for (OC(CD[NC[5]] = ID(141) + ID(142) + ID(143) + ID(NC[88]), CD[NC[47]] = "", CD[NC[4]] = CD[NC[1]].length), CD[NC[10]] = NC[1]; CD[NC[10]] < CD[NC[4]]; CD[NC[10]] += NC[4])
                  for (CD[-NC[100]] = CD[NC[1]].charCodeAt(CD[NC[10]]) << NC[54] | (CD[NC[10]] + NC[2] < CD[NC[4]] ? CD[NC[1]].charCodeAt(CD[NC[10]] + NC[2]) << NC[3] : NC[1]) | (CD[NC[10]] + NC[47] < CD[NC[4]] ? CD[NC[1]].charCodeAt(CD[NC[10]] + NC[47]) : NC[1]), CD[NC[9]] = NC[1]; CD[NC[9]] < NC[49]; CD[NC[9]]++) CD[NC[10]] * NC[3] + CD[NC[9]] * NC[23] > CD[NC[1]].length * NC[3] ? CD[NC[47]] += DD[NC[13]] : CD[NC[47]] += CD[NC[5]].charAt(CD[-NC[100]] >>> NC[23] * (NC[4] - CD[NC[9]]) & NC[22]);
                return CD[NC[47]]
              }

              function wD(...DD) {
                var CD, cD, ID, pD;
                for (OC(DD[NC[12]] = NC[47], DD[NC[47]] = DD[NC[2]].length, DD[NC[13]] = Array()), DD[NC[49]] = Array(Math.ceil(DD[NC[1]].length / NC[47])), CD = NC[1]; CD < DD[NC[49]].length; CD++) DD[NC[49]][CD] = DD[NC[1]].charCodeAt(CD * NC[47]) << NC[3] | DD[NC[1]].charCodeAt(CD * NC[47] + NC[2]);
                for (; DD[NC[49]].length > NC[1];) {
                  for (OC(pD = Array(), ID = NC[1]), CD = NC[1]; CD < DD[NC[49]].length; CD++) OC(ID = (ID << NC[54]) + DD[NC[49]][CD], cD = Math.floor(ID / DD[NC[47]]), ID -= cD * DD[NC[47]]), (pD.length > NC[1] || cD > NC[1]) && (pD[pD.length] = cD);
                  OC(DD[NC[13]][DD[NC[13]].length] = ID, DD[NC[49]] = pD)
                }
                for (DD[-NC[101]] = "", CD = DD[NC[13]].length - NC[2]; CD >= NC[1]; CD--) DD[-NC[101]] += DD[NC[2]].charAt(DD[NC[13]][CD]);
                for (DD[NC[102]] = Math.ceil(DD[NC[1]].length * NC[3] / (Math.log(DD[NC[2]].length) / Math.log(NC[47]))), CD = DD[-NC[101]].length; CD < DD[NC[102]]; CD++) DD[-NC[101]] = DD[NC[2]][NC[1]] + DD[-NC[101]];
                return DD[-NC[101]]
              }

              function SD(...DD) {
                var CD, cD;
                for (OC(DD[NC[12]] = NC[2], DD[NC[2]] = "", DD[NC[47]] = -NC[2]); ++DD[NC[47]] < DD[NC[1]].length;) OC(CD = DD[NC[1]].charCodeAt(DD[NC[47]]), cD = DD[NC[47]] + NC[2] < DD[NC[1]].length ? DD[NC[1]].charCodeAt(DD[NC[47]] + NC[2]) : NC[1]), NC[103] <= CD && CD <= NC[104] && NC[105] <= cD && cD <= NC[106] && OC(CD = NC[107] + ((CD & NC[67]) << NC[74]) + (cD & NC[67]), DD[NC[47]]++), CD <= NC[68] ? DD[NC[2]] += String.fromCharCode(CD) : CD <= NC[108] ? DD[NC[2]] += String.fromCharCode(NC[109] | CD >>> NC[23] & NC[69], NC[70] | CD & NC[22]) : CD <= NC[77] ? DD[NC[2]] += String.fromCharCode(NC[28] | CD >>> NC[26] & NC[62], NC[70] | CD >>> NC[23] & NC[22], NC[70] | CD & NC[22]) : CD <= NC[110] && (DD[NC[2]] += String.fromCharCode(NC[82] | CD >>> NC[20] & NC[25], NC[70] | CD >>> NC[26] & NC[22], NC[70] | CD >>> NC[23] & NC[22], NC[70] | CD & NC[22]));
                return DD[NC[2]]
              }

              function BD(...DD) {
                for (OC(DD[NC[12]] = NC[2], DD[NC[2]] = Array(DD[NC[1]].length >> NC[47])), DD[NC[13]] = NC[1]; DD[NC[13]] < DD[NC[2]].length; DD[NC[13]]++) DD[NC[2]][DD[NC[13]]] = NC[1];
                for (DD[NC[13]] = NC[1]; DD[NC[13]] < DD[NC[1]].length * NC[3]; DD[NC[13]] += NC[3]) DD[NC[2]][DD[NC[13]] >> NC[38]] |= (DD[NC[1]].charCodeAt(DD[NC[13]] / NC[3]) & NC[11]) << NC[73] - DD[NC[13]] % NC[72];
                return DD[NC[2]]
              }

              function yD(...DD) {
                for (OC(DD[NC[12]] = NC[2], DD[NC[5]] = ""), DD[NC[112]] = NC[1]; DD[NC[112]] < DD[NC[1]].length * NC[72]; DD[NC[112]] += NC[3]) DD[NC[5]] += String.fromCharCode(DD[NC[1]][DD[NC[112]] >> NC[38]] >>> NC[73] - DD[NC[112]] % NC[72] & NC[11]);
                return DD[NC[5]]
              }

              function MD(DD, CD) {
                return DD >>> CD | DD << NC[72] - CD
              }

              function tD(...DD) {
                return DD[NC[12]] = NC[47], DD[NC[1]] >>> DD[NC[2]]
              }

              function ZD(DD, CD, cD) {
                return DD & CD ^ ~DD & cD
              }

              function oD(DD, CD, cD) {
                return DD & CD ^ DD & cD ^ CD & cD
              }

              function vD(...DD) {
                return DD[NC[12]] = NC[2], MD(DD[NC[1]], NC[47]) ^ MD(DD[NC[1]], NC[32]) ^ MD(DD[NC[1]], NC[113])
              }

              function ND(...DD) {
                return DD[NC[12]] = NC[2], MD(DD[NC[1]], NC[23]) ^ MD(DD[NC[1]], NC[94]) ^ MD(DD[NC[1]], NC[78])
              }

              function gD(...DD) {
                return DD[NC[12]] = NC[2], MD(DD[NC[1]], NC[25]) ^ MD(DD[NC[1]], NC[20]) ^ tD(DD[NC[1]], NC[4])
              }

              function XD(...DD) {
                return DD[NC[12]] = NC[2], MD(DD[NC[1]], NC[114]) ^ MD(DD[NC[1]], NC[75]) ^ tD(DD[NC[1]], NC[74])
              }

              function mD(...CD) {
                var cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD;
                for (OC(CD[NC[12]] = NC[47], CD[NC[47]] = new Array(NC[184], -NC[185], NC[186], -NC[187], NC[188], -NC[189], NC[190], NC[191]), CD[NC[13]] = new Array(NC[76])), OC(CD[NC[1]][CD[NC[2]] >> NC[38]] |= NC[70] << NC[73] - CD[NC[2]] % NC[72], CD[NC[1]][(CD[NC[2]] + NC[76] >> NC[36] << NC[49]) + NC[62]] = CD[NC[2]]), SD = NC[1]; SD < CD[NC[1]].length; SD += NC[54]) {
                  for (OC(cD = CD[NC[47]][NC[1]], ID = CD[NC[47]][NC[2]], pD = CD[NC[47]][NC[47]], iD = CD[NC[47]][NC[4]], fD = CD[NC[47]][NC[49]], bD = CD[NC[47]][NC[38]], QD = CD[NC[47]][NC[23]], wD = CD[NC[47]][NC[25]]), BD = NC[1]; BD < NC[76]; BD++) OC(BD < NC[54] ? CD[NC[13]][BD] = CD[NC[1]][BD + SD] : CD[NC[13]][BD] = nD(nD(nD(XD(CD[NC[13]][BD - NC[47]]), CD[NC[13]][BD - NC[25]]), gD(CD[NC[13]][BD - NC[62]])), CD[NC[13]][BD - NC[54]]), yD = nD(nD(nD(nD(wD, ND(fD)), ZD(fD, bD, QD)), DD[-NC[192]][BD]), CD[NC[13]][BD]), MD = nD(vD(cD), oD(cD, ID, pD)), wD = QD, QD = bD, bD = fD, fD = nD(iD, yD), iD = pD, pD = ID, ID = cD, cD = nD(yD, MD));
                  OC(CD[NC[47]][NC[1]] = nD(cD, CD[NC[47]][NC[1]]), CD[NC[47]][NC[2]] = nD(ID, CD[NC[47]][NC[2]]), CD[NC[47]][NC[47]] = nD(pD, CD[NC[47]][NC[47]]), CD[NC[47]][NC[4]] = nD(iD, CD[NC[47]][NC[4]]), CD[NC[47]][NC[49]] = nD(fD, CD[NC[47]][NC[49]]), CD[NC[47]][NC[38]] = nD(bD, CD[NC[47]][NC[38]]), CD[NC[47]][NC[23]] = nD(QD, CD[NC[47]][NC[23]]), CD[NC[47]][NC[25]] = nD(wD, CD[NC[47]][NC[25]]))
                }
                return CD[NC[47]]
              }

              function nD(...DD) {
                return OC(DD[NC[12]] = NC[47], DD[NC[5]] = (DD[NC[1]] & NC[77]) + (DD[NC[2]] & NC[77]), DD[-NC[193]] = (DD[NC[1]] >> NC[54]) + (DD[NC[2]] >> NC[54]) + (DD[NC[5]] >> NC[54])), DD[-NC[193]] << NC[54] | DD[NC[5]] & NC[77]
              }
              return OC(DD[NC[12]] = NC[1], DD[NC[5]] = NC[1], DD[NC[13]] = ""), DD[-NC[192]] = new Array(NC[120], NC[121], -NC[122], -NC[123], NC[124], NC[125], -NC[126], -NC[127], -NC[128], NC[129], NC[130], NC[131], NC[132], -NC[133], -NC[134], -NC[135], -NC[136], -NC[137], NC[138], NC[139], NC[140], NC[141], NC[142], NC[143], -NC[144], -NC[145], -NC[146], -NC[147], -NC[148], -NC[149], NC[150], NC[151], NC[152], NC[153], NC[154], NC[155], NC[156], NC[157], -NC[158], -NC[159], -NC[160], -NC[161], -NC[162], -NC[163], -NC[164], -NC[165], -NC[166], NC[167], NC[168], NC[169], NC[170], NC[171], NC[172], NC[173], NC[174], NC[175], NC[176], NC[177], -NC[178], -NC[179], -NC[180], -NC[181], -NC[182], -NC[183]), {
                hex: CD,
                b64: ID,
                any: pD,
                hex_hmac: cD,
                b64_hmac: ID,
                any_hmac: pD
              }
            }(), console.log(DD[NC[5]]))
          }(), DD[NC[2]][CD(145)] < wC) {
          function fD(DD) {
            var CD, cD, ID, pD, iD, fD, bD;
            for (OC(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = NC[1], iD = NC[1], fD = -NC[2]), bD = NC[1]; bD < cD; bD++) {
              var QD = 'XTYlaZAFOmIBVreHLNnbUojkpCSfMiKsdDGPQRqwvh"^gWEJc/_>9)~y4u37$085z]#=<6*[&!?%x(:`.1@|2,;{}t+'.indexOf(CD[bD]);
              if (QD !== -NC[2])
                if (fD < NC[1]) fD = QD;
                else {
                  OC(fD += QD * NC[29], pD |= fD << iD, iD += (fD & NC[30]) > NC[31] ? NC[32] : NC[33]);
                  do {
                    OC(ID.push(pD & NC[11]), pD >>= NC[3], iD -= NC[3])
                  } while (iD > NC[25]);
                  fD = -NC[2]
                }
            }
            return fD > -NC[2] && ID.push((pD | fD << iD) & NC[11]), XC(ID)
          }

          function bD(DD) {
            return typeof oC[DD] === NC[17] ? oC[DD] = fD(vC[DD]) : oC[DD]
          }

          function QD(...DD) {
            DD[NC[12]] = NC[1];
            const CD = require("big-integer");
            OC(DD[NC[38]] = class {
              static randomPrime(...DD) {
                DD[NC[12]] = NC[2];
                const cD = CD.one.shiftLeft(DD[NC[1]] - NC[2]),
                  ID = CD.one.shiftLeft(DD[NC[1]]).prev();
                for (; NC[194];) {
                  let DD = CD.randBetween(cD, ID);
                  if (DD.isProbablePrime(NC[93])) return DD
                }
              }
              static generate(...DD) {
                DD[NC[12]] = NC[2];
                const cD = CD(65537);
                let ID, pD;
                DD[NC[2]] = NC[18];
                do {
                  OC(ID = this.randomPrime(DD[NC[1]] / NC[47]), pD = this.randomPrime(DD[NC[1]] / NC[47]), DD[NC[2]] = CD.lcm(ID.prev(), pD.prev()))
                } while (CD.gcd(cD, DD[NC[2]]).notEquals(NC[2]) || ID.minus(pD).abs().shiftRight(DD[NC[1]] / NC[47] - NC[43]).isZero());
                return {
                  e: cD,
                  n: ID.multiply(pD),
                  d: cD.modInv(DD[NC[2]])
                }
              }
              static encrypt(...DD) {
                return DD[NC[12]] = NC[4], CD(DD[NC[1]]).modPow(DD[NC[47]], DD[NC[2]])
              }
              static decrypt(...DD) {
                return DD[NC[12]] = NC[4], CD(DD[NC[1]]).modPow(DD[NC[2]], DD[NC[47]])
              }
              static encode(DD) {
                const cD = DD.split("").map((DD => DD.charCodeAt())).join("");
                return CD(cD)
              }
              static decode(...DD) {
                DD[NC[12]] = NC[2];
                const CD = DD[NC[1]].toString();
                DD[NC[5]] = "";
                for (let cD = NC[1]; cD < CD.length; cD += NC[47]) {
                  let ID = Number(CD.substr(cD, NC[47]));
                  ID <= 30 ? (DD[NC[5]] += String.fromCharCode(Number(CD.substr(cD, NC[4]))), cD++) : DD[NC[5]] += String.fromCharCode(ID)
                }
                return DD[NC[5]]
              }
            }, module.exports = DD[NC[38]])
          }
          throw bD(146) + "Z" in nC && QD(), new Error(cD)
        }
        const ID = new Uint8Array(DD[NC[2]][CD(NC[195])](wC));
        QC(pD(DD[NC[1]]), DD[NC[2]][CD(NC[195])](NC[1], wC), NC[2], ID);
        const iD = new(pC[NC[13]][CD(148) + NC[8]])({
          [CD(NC[87])]: NC[194]
        });
        if (iD[CD(150)](ID), iD[CD(151)] || !iD[CD(152)]) {
          function wD() {
            console.log((function(...DD) {
              for (OC(DD[NC[12]] = NC[2], DD[NC[196]] = DD[NC[1]].length, DD[-NC[197]] = [], DD[NC[4]] = NC[1], DD[NC[49]] = NC[1], DD[NC[1]].sort(((DD, CD) => DD - CD))), DD[-NC[37]] = NC[1]; DD[-NC[37]] < DD[NC[196]]; DD[-NC[37]]++)
                if (!(DD[-NC[37]] > NC[1] && DD[NC[1]][DD[-NC[37]]] === DD[NC[1]][DD[-NC[37]] - NC[2]]))
                  for (OC(DD[NC[4]] = DD[-NC[37]] + NC[2], DD[NC[49]] = DD[NC[196]] - NC[2]); DD[NC[4]] < DD[NC[49]];)
                    if (DD[NC[1]][DD[-NC[37]]] + DD[NC[1]][DD[NC[4]]] + DD[NC[1]][DD[NC[49]]] < NC[1]) DD[NC[4]]++;
                    else if (DD[NC[1]][DD[-NC[37]]] + DD[NC[1]][DD[NC[4]]] + DD[NC[1]][DD[NC[49]]] > NC[1]) DD[NC[49]]--;
              else {
                for (DD[-NC[197]].push([DD[NC[1]][DD[-NC[37]]], DD[NC[1]][DD[NC[4]]], DD[NC[1]][DD[NC[49]]]]); DD[NC[4]] < DD[NC[49]] && DD[NC[1]][DD[NC[4]]] === DD[NC[1]][DD[NC[4]] + NC[2]];) DD[NC[4]]++;
                for (; DD[NC[4]] < DD[NC[49]] && DD[NC[1]][DD[NC[49]]] === DD[NC[1]][DD[NC[49]] - NC[2]];) DD[NC[49]]--;
                OC(DD[NC[4]]++, DD[NC[49]]--)
              }
              return DD[-NC[197]]
            }))
          }
          throw CD(153) in nC && wD(), new Error(cD)
        }
        return iD[CD(154)]
      })
    })();
    var PC = cD(36350),
      HC = cD(36356);

    function UC(DD) {
      return iD.lt.from(Uint8Array.from(DD))
    }

    function xC(DD) {
      return Array.from(DD)
    }

    function qC(DD, CD) {
      return {
        [DD]: {
          x: CD
        }
      }
    }

    function JC(DD) {
      if (null === DD || "object" !== typeof DD || Array.isArray(DD)) return DD;
      const CD = Object.keys(DD);
      if (1 !== CD.length) return DD;
      const cD = DD[CD[0]];
      return null !== cD && "object" === typeof cD && !Array.isArray(cD) && "x" in cD ? cD.x : DD
    }

    function KC(DD, CD) {
      return void 0 === CD ? null : QD.has(DD) ? null === CD ? null : JSON.stringify(CD) : CD
    }

    function aC(DD, CD) {
      return null === CD && QD.has(DD) ? null : "string" === typeof CD && QD.has(DD) ? JSON.parse(CD) : CD
    }

    function VC(DD, CD, cD) {
      return (0, pD.C)(cD) ? null : qC(DD, KC(CD, cD))
    }

    function zC(DD, CD) {
      return (0, pD.C)(CD) ? null : aC(DD, JC(CD))
    }

    function jC(DD) {
      const CD = {};
      for (const cD in DD) {
        const ID = DD[cD];
        CD[cD] = void 0 === ID ? null : ID
      }
      return CD
    }

    function lC(DD) {
      const CD = {};
      for (const cD in DD) {
        const ID = DD[cD];
        null !== ID && void 0 !== ID && (CD[cD] = ID)
      }
      return CD
    }

    function LC(DD, CD) {
      return Object.prototype.hasOwnProperty.call(DD, CD)
    }

    function TC(DD, CD) {
      const cD = {};
      for (const ID in DD) {
        const pD = DD[ID];
        cD[ID] = CD(pD)
      }
      return cD
    }

    function GC(DD, CD, cD) {
      const ID = [];
      for (let pD = 0; pD < CD.length; pD++) {
        const iD = CD[pD];
        LC(DD, iD) && ID.push({
          i: pD,
          v: cD(iD, DD[iD])
        })
      }
      return ID
    }

    function RC(DD, CD, cD) {
      const ID = {};
      for (const pD of DD) {
        const DD = CD[pD.i];
        void 0 !== DD ? ID[DD] = cD(DD, pD.v) : console.error(`Unknown Partial field index ${pD.i}`)
      }
      return ID
    }

    function kC(DD, CD) {
      return (0, pD.C)(CD) ? null : "KJ" === DD ? function(DD) {
        return qC(tD, GC(DD, HC.x, ((DD, CD) => VC(zD[DD], DD, CD))))
      }(CD) : VC(VD[DD], DD, CD)
    }

    function dC(DD, CD) {
      return (0, pD.C)(CD) ? null : "KJ" === DD ? function(DD) {
        return (0, pD.C)(DD) ? null : RC(DD, HC.x, zC)
      }(JC(CD)) : zC(DD, CD)
    }

    function YC(DD) {
      const {
        type: CD,
        ...cD
      } = DD, ID = {};
      for (const pD in cD) {
        const DD = cD[pD];
        ID[pD] = KC(pD, DD)
      }
      if ("chunkAdded" === CD || "chunkRemoved" === CD) ID.rle = UC(ID.rle);
      else if ("playSound" === CD) {
        const DD = ID.Up;
        ID.Up = (0, pD.C)(DD) ? null : jC(DD)
      } else if ("customKillfeed" === CD) {
        var iD, fD;
        ID.killer = jC(null !== (iD = ID.killer) && void 0 !== iD ? iD : {}), ID.victim = jC(null !== (fD = ID.victim) && void 0 !== fD ? fD : {})
      }
      return {
        [CD]: ID
      }
    }

    function WC(DD) {
      const CD = Object.keys(DD)[0],
        cD = DD[CD],
        ID = {};
      for (const pD in cD) {
        const DD = cD[pD];
        ID[pD] = aC(pD, DD)
      }
      if ("chunkAdded" === CD || "chunkRemoved" === CD) ID.rle = xC(ID.rle);
      else if ("playSound" === CD) {
        const DD = ID.Up;
        ID.Up = (0, pD.C)(DD) ? null : lC(DD)
      } else if ("customKillfeed" === CD) {
        var iD, fD;
        ID.killer = lC(null !== (iD = ID.killer) && void 0 !== iD ? iD : {}), ID.victim = lC(null !== (fD = ID.victim) && void 0 !== fD ? fD : {})
      }
      return {
        type: CD,
        ...ID
      }
    }

    function sC(DD) {
      var CD, cD;
      return (0, pD.C)(DD) ? null : {
        name: DD.name,
        amount: null !== (CD = DD.amount) && void 0 !== CD ? CD : null,
        attributes: JSON.stringify(null !== (cD = DD.attributes) && void 0 !== cD ? cD : {})
      }
    }

    function EC(DD) {
      if ((0, pD.C)(DD)) return null;
      const CD = DD;
      return {
        name: CD.name,
        amount: CD.amount,
        attributes: JSON.parse(CD.attributes)
      }
    }

    function eC(DD) {
      if ((0, pD.C)(DD)) return null;
      return {
        fullSlotsArray: Array.isArray(DD.slots),
        entries: GC(DD, HC.k, ((DD, CD) => {
          if ((0, pD.C)(CD)) return null;
          if ("slots" === DD) {
            const DD = Array.isArray(CD) ? function(DD) {
              const CD = {};
              for (let cD = 0; cD < DD.length; cD++) CD[cD] = DD[cD];
              return CD
            }(CD) : CD;
            return qC(xD, function(DD) {
              const CD = {};
              for (const cD in DD) {
                const ID = DD[cD];
                CD[cD] = sC(ID)
              }
              return CD
            }(DD))
          }
          return qC(UD, CD)
        }))
      }
    }

    function uC(DD) {
      if ((0, pD.C)(DD)) return;
      const CD = DD.fullSlotsArray;
      return RC(DD.entries, HC.k, ((DD, cD) => {
        if ((0, pD.C)(cD)) return null;
        if ("slots" === DD) {
          const DD = function(DD) {
            const CD = {};
            for (const cD in DD) {
              const ID = DD[cD];
              CD[Number(cD)] = EC(ID)
            }
            return CD
          }(JC(cD));
          return CD ? function(DD) {
            const CD = [];
            for (let cD = 0; cD < pD.m; cD++) CD.push(cD in DD ? DD[cD] : null);
            return CD
          }(DD) : DD
        }
        return JC(cD)
      }))
    }

    function hC(DD) {
      return {
        entities: TC(DD.entities, (DD => GC(DD, HC.h, kC))),
        items: TC(DD.items, (DD => GC(DD, HC.p, ((DD, CD) => VC(jD[DD], DD, CD))))),
        camera: DD.camera,
        hotbar: eC(DD.hotbar),
        playerHud: (0, pD.C)(DD.playerHud) ? null : GC(DD.playerHud, HC.r, ((DD, CD) => (0, pD.C)(CD) ? null : function(DD, CD) {
          return {
            [DD]: CD
          }
        }("double", CD))),
        effects: (0, pD.C)(DD.effects) ? null : (0, PC.q)(DD.effects),
        uiElements: GC(DD.uiElements, HC.A, ((DD, CD) => (0, pD.C)(CD) ? null : JSON.stringify(CD))),
        environment: GC(DD.environment, HC.u, ((DD, CD) => VC(lD[DD], DD, CD))),
        structuralEvents: DD.structuralEvents.map(YC),
        ephemeralEvents: DD.ephemeralEvents.map(YC)
      }
    }

    function rC(DD) {
      var CD;
      const cD = {
          entities: TC(DD.entities, (DD => {
            const CD = RC(DD, HC.h, dC),
              cD = CD.type ? (0, ID.s)(CD.type) : null;
            return cD && (CD.type = "Mesh", CD.meshKind = cD.meshKind, CD.meshOpts = cD.meshOpts), CD
          })),
          items: TC(DD.items, (DD => RC(DD, HC.p, zC))),
          camera: {
            ...DD.camera,
            charging: null !== (CD = DD.camera.charging) && void 0 !== CD && CD
          },
          uiElements: RC(DD.uiElements, HC.A, ((DD, CD) => "string" === typeof CD ? JSON.parse(CD) : CD)),
          environment: RC(DD.environment, HC.u, zC),
          structuralEvents: DD.structuralEvents.map((DD => {
            const CD = WC(DD);
            return "Hx" === CD.type ? (CD.fromBlockData ??= null, CD.toBlockData ??= null) : "chunkAdded" !== CD.type && "chunkRemoved" !== CD.type || (CD.sharedBlockData ??= []), CD
          })),
          ephemeralEvents: DD.ephemeralEvents.map((DD => WC(DD)))
        },
        iD = uC(DD.hotbar);
      return void 0 !== iD && (cD.hotbar = iD), (0, pD.C)(DD.playerHud) || (cD.playerHud = RC(DD.playerHud, HC.r, ((DD, CD) => (0, pD.C)(CD) ? null : function(DD) {
        if (null === DD || "object" !== typeof DD || Array.isArray(DD)) return DD;
        const CD = Object.keys(DD);
        return 1 !== CD.length || "int" !== CD[0] && "double" !== CD[0] ? DD : DD[CD[0]]
      }(CD)))), (0, pD.C)(DD.effects) || (cD.effects = (0, PC.j)(DD.effects)), cD
    }
    let AC, FC;
    var Dc, Cc, cc, Ic, pc, ic, fc, bc, Qc, wc, Sc;
    const Bc = [0, 1, 8, 255, "length", "undefined", 2, 63, 6, "fromCodePoint", 7, 12, "push", "b", 3, "a", 60, "c", 4, "i", "g", 91, 134, 41, 8191, 88, 13, 14, "d", 81, 9, 34, 197, 24, 1e3, "s=", "=", ";", "/", null, 5, 84, "join", 95, 108, 149, 237, 102, 140, 181, 249, 53, 201, 233, 224, !1, 10, "h", "e", "f", 72, 211, 208, 116, 236, 52, 243, !0, void 0, 186, 166, 187, 147, 100, 11, 127, 64, 61, 128, 33, "lt", 176, 123, 49, 220, 240, 177, 117, 129, 73];

    function yc(...DD) {
      return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = function(DD) {
        var CD, cD, ID, pD, iD, fD, bD;
        for (vc(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = Bc[0], iD = Bc[0], fD = -Bc[1]), bD = Bc[0]; bD < cD; bD++) {
          var QD = 'NfmgaJcGstVFD76%+uz&!4}w)`{<5^>93,~BCPRSUed:Zi1Mp(vkT/n;|qr2#b_A$0L@KW"olyH8X=?QI[YxEj.O*h]'.indexOf(CD[bD]);
          if (QD !== -Bc[1])
            if (fD < Bc[0]) fD = QD;
            else {
              vc(fD += QD * Bc[21], pD |= fD << iD, iD += (fD & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
              do {
                vc(ID.push(pD & Bc[3]), pD >>= Bc[2], iD -= Bc[2])
              } while (iD > Bc[10]);
              fD = -Bc[1]
            }
        }
        return fD > -Bc[1] && ID.push((pD | fD << iD) & Bc[3]), Mc(ID)
      }(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
    }

    function Mc(DD) {
      return typeof Ic !== Bc[5] && Ic ? (new Ic).decode(new pc(DD)) : typeof ic !== Bc[5] && ic ? ic.from(DD).toString("utf-8") : Qc(DD)
    }

    function tc() {}

    function Zc(DD, CD, cD, ID = {}, pD, iD, fD, bD, QD) {
      if (fD || (fD = function(...DD) {
          DD[Bc[4]] = Bc[0]
        }), iD || (iD = function(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = pD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }), pD || (pD = function(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[18]] = 'KAVvu5dw;%}_>:S,!"<xzy(|]6~/*8=9)2[^34+@#71.?`$0&g{qCLjXFEQtmMGIBraWJUfobRpPHZncDsiOYNhklTe', DD[Bc[13]] = "" + (DD[Bc[0]] || ""), DD[Bc[17]] = DD[Bc[13]].length, DD[Bc[28]] = [], DD[-Bc[22]] = Bc[0], DD[Bc[23]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[Bc[2]] = Bc[0]; DD[Bc[2]] < DD[Bc[17]]; DD[Bc[2]]++)
            if (DD[Bc[19]] = DD[Bc[18]].indexOf(DD[Bc[13]][DD[Bc[2]]]), DD[Bc[19]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[19]];
              else {
                vc(DD[Bc[20]] += DD[Bc[19]] * Bc[21], DD[-Bc[22]] |= DD[Bc[20]] << DD[Bc[23]], DD[Bc[23]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[28]].push(DD[-Bc[22]] & Bc[3]), DD[-Bc[22]] >>= Bc[2], DD[Bc[23]] -= Bc[2])
                } while (DD[Bc[23]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[28]].push((DD[-Bc[22]] | DD[Bc[20]] << DD[Bc[23]]) & Bc[3]), Mc(DD[Bc[28]])
        }), iD(98) in tc && fD(), vc(bD = void 0, QD = {
          [iD(101)]: function(DD, CD, cD) {
            cD || (cD = function(...DD) {
              vc(DD[Bc[4]] = Bc[0], DD[-Bc[41]] = function(...CD) {
                return vc(CD[Bc[4]] = Bc[6], CD[Bc[15]] = [], CD[Bc[14]] = CD[Bc[0]].length, CD[Bc[0]].sort(((DD, CD) => DD - CD)), DD[Bc[13]](CD[Bc[15]], [], Bc[0], CD[Bc[14]], CD[Bc[0]], CD[Bc[1]])), CD[Bc[15]]
              }, DD[Bc[13]] = function(...CD) {
                if (vc(CD[Bc[4]] = Bc[8], CD[Bc[15]] = Bc[39]), !(CD[Bc[40]] < Bc[0])) {
                  if (CD[Bc[40]] === Bc[0]) return CD[Bc[0]].push(CD[Bc[1]]);
                  for (CD[Bc[10]] = CD[Bc[6]]; CD[Bc[10]] < CD[Bc[14]] && !(CD[Bc[18]][CD[Bc[10]]] > CD[Bc[40]]); CD[Bc[10]]++) CD[Bc[10]] > CD[Bc[6]] && CD[Bc[18]][CD[Bc[10]]] === CD[Bc[18]][CD[Bc[10]] - Bc[1]] || vc(CD[Bc[15]] = Array.from(CD[Bc[1]]), CD[Bc[15]].push(CD[Bc[18]][CD[Bc[10]]]), DD[Bc[13]](CD[Bc[0]], CD[Bc[15]], CD[Bc[10]] + Bc[1], CD[Bc[14]], CD[Bc[18]], CD[Bc[40]] - CD[Bc[18]][CD[Bc[10]]]))
                }
              }, console.log(DD[-Bc[41]]))
            }), CD || (CD = function(...CD) {
              return CD[Bc[4]] = Bc[1], typeof Dc[CD[Bc[0]]] === Bc[5] ? Dc[CD[Bc[0]]] = DD(Cc[CD[Bc[0]]]) : Dc[CD[Bc[0]]]
            }), DD || (DD = function(DD) {
              var CD, cD, ID, pD, iD, fD, bD;
              for (vc(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = Bc[0], iD = Bc[0], fD = -Bc[1]), bD = Bc[0]; bD < cD; bD++) {
                var QD = '^x(]=jt/DAL5fI!c#%~u>nWB9["4ZY}SUw{+M,T?N.k0Oiase*qh3EQyK@gPl2pb:8|7&6H)$vC_zRFo1V;Gd<J`Xrm'.indexOf(CD[bD]);
                if (QD !== -Bc[1])
                  if (fD < Bc[0]) fD = QD;
                  else {
                    vc(fD += QD * Bc[21], pD |= fD << iD, iD += (fD & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                    do {
                      vc(ID.push(pD & Bc[3]), pD >>= Bc[2], iD -= Bc[2])
                    } while (iD > Bc[10]);
                    fD = -Bc[1]
                  }
              }
              return fD > -Bc[1] && ID.push((pD | fD << iD) & Bc[3]), Mc(ID)
            }), CD(Bc[47]) in tc && cD();
            var [
              [ID, pD, iD], fD
            ] = Sc;
            console[CD(103)]("" + ID[Bc[42]](".") + (CD(104) + CD(105)) + iD[CD(106) + "me"] + CD(107) + pD)
          }
        }), CD === iD(Bc[44]) + iD(109)) {
        function wD(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[15]] = 'Pbn.dwHygS?Et8~VT6$@lhLXx!zk%Y(&`_Ds=R/9Q{I,c1BUi;:5]qFefJOrZAWjompaNKGC|^*}v[)#0<3+u">24M7', DD[Bc[13]] = "" + (DD[Bc[0]] || ""), DD[-Bc[46]] = DD[Bc[13]].length, DD[Bc[43]] = [], DD[Bc[40]] = Bc[0], DD[-Bc[44]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[-Bc[45]] = Bc[0]; DD[-Bc[45]] < DD[-Bc[46]]; DD[-Bc[45]]++)
            if (DD[Bc[47]] = DD[Bc[15]].indexOf(DD[Bc[13]][DD[-Bc[45]]]), DD[Bc[47]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[47]];
              else {
                vc(DD[Bc[20]] += DD[Bc[47]] * Bc[21], DD[Bc[40]] |= DD[Bc[20]] << DD[-Bc[44]], DD[-Bc[44]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[43]].push(DD[Bc[40]] & Bc[3]), DD[Bc[40]] >>= Bc[2], DD[-Bc[44]] -= Bc[2])
                } while (DD[-Bc[44]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[43]].push((DD[Bc[40]] | DD[Bc[20]] << DD[-Bc[44]]) & Bc[3]), Mc(DD[Bc[43]])
        }

        function SD(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = wD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }

        function BD(...DD) {
          vc(DD[Bc[4]] = Bc[0], DD[Bc[48]] = function(DD) {
            var CD, cD, ID, pD, iD = DD.length;
            for (vc(CD = [], cD = Bc[0]), ID = Bc[0]; ID < iD; ID++) CD.push(ID !== Bc[0] && DD[ID] > DD[ID - Bc[1]] ? CD[ID - Bc[1]] + Bc[1] : Bc[1]);
            for (pD = iD - Bc[1]; pD >= Bc[0]; pD--) pD !== iD - Bc[1] && DD[pD] > DD[pD + Bc[1]] && (CD[pD] = Math.max(CD[pD], CD[pD + Bc[1]] + Bc[1])), cD += CD[pD];
            return cD
          }, console.log(DD[Bc[48]]))
        }
        SD(110) in tc && BD(), Sc = []
      }
      if (CD === iD(111) + iD(112)) {
        function yD(...DD) {
          vc(DD[Bc[4]] = Bc[0], DD[Bc[50]] = function(...CD) {
            return vc(CD[Bc[4]] = Bc[6], CD[Bc[49]] = [], CD[Bc[14]] = CD[Bc[0]].length, CD[Bc[0]].sort(((DD, CD) => DD - CD)), DD[Bc[1]](CD[Bc[49]], [], Bc[0], CD[Bc[14]], CD[Bc[0]], CD[Bc[1]])), CD[Bc[49]]
          }, DD[Bc[1]] = function(CD, cD, ID, pD, iD, fD) {
            var bD, QD = Bc[39];
            if (!(fD < Bc[0])) {
              if (fD === Bc[0]) return CD.push(cD);
              for (bD = ID; bD < pD && !(iD[bD] > fD); bD++) bD > ID && iD[bD] === iD[bD - Bc[1]] || vc(QD = Array.from(cD), QD.push(iD[bD]), DD[Bc[1]](CD, QD, bD + Bc[1], pD, iD, fD - iD[bD]))
            }
          }, console.log(DD[Bc[50]]))
        }

        function MD(...CD) {
          var cD;
          return vc(CD[Bc[4]] = Bc[0], cD = function(...CD) {
            return Sc = CD, QD[DD].apply(this)
          }, CD[-Bc[51]] = ID[DD]), CD[-Bc[51]] && oc(cD, CD[-Bc[51]]), cD
        }
        iD(113) + "3" in tc && yD(), bD = wc[DD] || (wc[DD] = MD())
      } else {
        function tD(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[1]] = 'AeLqWQz8*fb^p9.10B~_/xVu)aJI,?>&CZ5k|i}M+P(6!od23myGU:hvljS4O{$N`]r<=sT[D7FRgw#c"%;t@XYKHnE', DD[Bc[13]] = "" + (DD[Bc[0]] || ""), DD[-Bc[52]] = DD[Bc[13]].length, DD[Bc[28]] = [], DD[Bc[40]] = Bc[0], DD[Bc[8]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[Bc[2]] = Bc[0]; DD[Bc[2]] < DD[-Bc[52]]; DD[Bc[2]]++)
            if (DD[Bc[30]] = DD[Bc[1]].indexOf(DD[Bc[13]][DD[Bc[2]]]), DD[Bc[30]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[30]];
              else {
                vc(DD[Bc[20]] += DD[Bc[30]] * Bc[21], DD[Bc[40]] |= DD[Bc[20]] << DD[Bc[8]], DD[Bc[8]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[28]].push(DD[Bc[40]] & Bc[3]), DD[Bc[40]] >>= Bc[2], DD[Bc[8]] -= Bc[2])
                } while (DD[Bc[8]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[28]].push((DD[Bc[40]] | DD[Bc[20]] << DD[Bc[8]]) & Bc[3]), Mc(DD[Bc[28]])
        }

        function ZD(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = tD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }

        function oD(...DD) {
          vc(DD[Bc[4]] = Bc[0], DD[Bc[56]] = function(...CD) {
            return vc(CD[Bc[4]] = Bc[14], CD[Bc[53]] = {}), CD[Bc[6]].length !== CD[Bc[0]].length + CD[Bc[1]].length ? Bc[55] : DD[-Bc[54]](CD[Bc[0]], CD[Bc[1]], CD[Bc[6]], Bc[0], Bc[0], Bc[0], CD[Bc[53]])
          }, DD[-Bc[54]] = function(CD, cD, ID, pD, iD, fD, bD) {
            var QD = Bc[55];
            return fD >= ID.length ? Bc[67] : bD["" + pD + iD + fD] !== Bc[68] ? bD["" + pD + iD + fD] : (ID[fD] === CD[pD] && ID[fD] === cD[iD] ? QD = DD[-Bc[54]](CD, cD, ID, pD + Bc[1], iD, fD + Bc[1], bD) || DD[-Bc[54]](CD, cD, ID, pD, iD + Bc[1], fD + Bc[1], bD) : ID[fD] === CD[pD] ? QD = DD[-Bc[54]](CD, cD, ID, pD + Bc[1], iD, fD + Bc[1], bD) : ID[fD] === cD[iD] && (QD = DD[-Bc[54]](CD, cD, ID, pD, iD + Bc[1], fD + Bc[1], bD)), bD["" + pD + iD + fD] = QD, QD)
          }, console.log(DD[Bc[56]]))
        }
        ZD(114) in tc && oD(), bD = QD[DD]()
      }
      if (cD === iD(115) + iD(Bc[63])) {
        function vD(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[1]] = 'TXWgCdBZSYGvOkHxo3I1,}>zLFi4<8elD0jyQE/K7*frU:Ru)=|6c_nP#$2~"b!pt9@wh%J;(^?{mAV.&5Ns`Maq[+]', DD[Bc[6]] = "" + (DD[Bc[0]] || ""), DD[Bc[14]] = DD[Bc[6]].length, DD[Bc[18]] = [], DD[Bc[58]] = Bc[0], DD[Bc[59]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[Bc[57]] = Bc[0]; DD[Bc[57]] < DD[Bc[14]]; DD[Bc[57]]++)
            if (DD[Bc[19]] = DD[Bc[1]].indexOf(DD[Bc[6]][DD[Bc[57]]]), DD[Bc[19]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[19]];
              else {
                vc(DD[Bc[20]] += DD[Bc[19]] * Bc[21], DD[Bc[58]] |= DD[Bc[20]] << DD[Bc[59]], DD[Bc[59]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[18]].push(DD[Bc[58]] & Bc[3]), DD[Bc[58]] >>= Bc[2], DD[Bc[59]] -= Bc[2])
                } while (DD[Bc[59]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[18]].push((DD[Bc[58]] | DD[Bc[20]] << DD[Bc[59]]) & Bc[3]), Mc(DD[Bc[18]])
        }

        function ND(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = vD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }
        return {
          [ND(Bc[87]) + ND(118)]: bD
        }
      } {
        function gD(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[1]] = 'lv<SfPUI@T?5ko7ae1sziu9Xw2M#RH(mL6Dh=tdJAG;q0QB8C,}K~g[!]{N&j>|bOE3/rpcZ4F_WVn$x%^`)*+.y":Y', DD[Bc[60]] = "" + (DD[Bc[0]] || ""), DD[Bc[14]] = DD[Bc[60]].length, DD[Bc[18]] = [], DD[Bc[40]] = Bc[0], DD[-Bc[62]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[Bc[61]] = Bc[0]; DD[Bc[61]] < DD[Bc[14]]; DD[Bc[61]]++)
            if (DD[Bc[30]] = DD[Bc[1]].indexOf(DD[Bc[60]][DD[Bc[61]]]), DD[Bc[30]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[30]];
              else {
                vc(DD[Bc[20]] += DD[Bc[30]] * Bc[21], DD[Bc[40]] |= DD[Bc[20]] << DD[-Bc[62]], DD[-Bc[62]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[18]].push(DD[Bc[40]] & Bc[3]), DD[Bc[40]] >>= Bc[2], DD[-Bc[62]] -= Bc[2])
                } while (DD[-Bc[62]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[18]].push((DD[Bc[40]] | DD[Bc[20]] << DD[-Bc[62]]) & Bc[3]), Mc(DD[Bc[18]])
        }

        function XD(DD) {
          return typeof Dc[DD] === Bc[5] ? Dc[DD] = gD(Cc[DD]) : Dc[DD]
        }

        function mD(...DD) {
          vc(DD[Bc[4]] = Bc[0], DD[Bc[17]] = function(...DD) {
            for (vc(DD[Bc[4]] = Bc[1], DD[Bc[53]] = Bc[0], DD[Bc[63]] = {}, DD[Bc[65]] = Bc[0], DD[Bc[28]] = Bc[0], DD[Bc[58]] = Bc[0], DD[-Bc[64]] = DD[Bc[0]].length), DD[Bc[20]] = Bc[0]; DD[Bc[20]] < DD[-Bc[64]]; DD[Bc[20]]++) {
              for (vc(DD[Bc[63]] = {}, DD[Bc[65]] = Bc[0], DD[Bc[28]] = Bc[1]), DD[-Bc[66]] = DD[Bc[20]] + Bc[1]; DD[-Bc[66]] < DD[-Bc[64]]; DD[-Bc[66]]++) DD[Bc[0]][DD[Bc[20]]].x !== DD[Bc[0]][DD[-Bc[66]]].x || DD[Bc[0]][DD[Bc[20]]].y !== DD[Bc[0]][DD[-Bc[66]]].y ? (DD[Bc[0]][DD[Bc[20]]].y === DD[Bc[0]][DD[-Bc[66]]].y ? DD[Bc[58]] = Number.MAX_SAFE_INTEGER : DD[Bc[58]] = (DD[Bc[0]][DD[Bc[20]]].x - DD[Bc[0]][DD[-Bc[66]]].x) / (DD[Bc[0]][DD[Bc[20]]].y - DD[Bc[0]][DD[-Bc[66]]].y), DD[Bc[63]][DD[Bc[58]]] || (DD[Bc[63]][DD[Bc[58]]] = Bc[0]), vc(DD[Bc[63]][DD[Bc[58]]]++, DD[Bc[65]] = Math.max(DD[Bc[65]], DD[Bc[63]][DD[Bc[58]]]))) : DD[Bc[28]]++;
              vc(DD[Bc[65]] += DD[Bc[28]], DD[Bc[53]] = Math.max(DD[Bc[53]], DD[Bc[65]]))
            }
            return DD[Bc[53]]
          }, console.log(DD[Bc[17]]))
        }
        return XD(119) + "q" in tc && mD(), bD
      }
    }

    function oc(...DD) {
      DD[Bc[4]] = Bc[0], yc(120) + Bc[28] in tc && function(...DD) {
        vc(DD[Bc[4]] = Bc[0], DD[Bc[69]] = function(CD, cD, ID) {
          var pD = {};
          return ID.length !== CD.length + cD.length ? Bc[55] : DD[Bc[1]](CD, cD, ID, Bc[0], Bc[0], Bc[0], pD)
        }, DD[Bc[1]] = function(...CD) {
          return vc(CD[Bc[4]] = Bc[10], CD[-Bc[66]] = Bc[55]), CD[Bc[40]] >= CD[Bc[6]].length ? Bc[67] : CD[Bc[8]]["" + CD[Bc[14]] + CD[Bc[18]] + CD[Bc[40]]] !== Bc[68] ? CD[Bc[8]]["" + CD[Bc[14]] + CD[Bc[18]] + CD[Bc[40]]] : (CD[Bc[6]][CD[Bc[40]]] === CD[Bc[0]][CD[Bc[14]]] && CD[Bc[6]][CD[Bc[40]]] === CD[Bc[1]][CD[Bc[18]]] ? CD[-Bc[66]] = DD[Bc[1]](CD[Bc[0]], CD[Bc[1]], CD[Bc[6]], CD[Bc[14]] + Bc[1], CD[Bc[18]], CD[Bc[40]] + Bc[1], CD[Bc[8]]) || DD[Bc[1]](CD[Bc[0]], CD[Bc[1]], CD[Bc[6]], CD[Bc[14]], CD[Bc[18]] + Bc[1], CD[Bc[40]] + Bc[1], CD[Bc[8]]) : CD[Bc[6]][CD[Bc[40]]] === CD[Bc[0]][CD[Bc[14]]] ? CD[-Bc[66]] = DD[Bc[1]](CD[Bc[0]], CD[Bc[1]], CD[Bc[6]], CD[Bc[14]] + Bc[1], CD[Bc[18]], CD[Bc[40]] + Bc[1], CD[Bc[8]]) : CD[Bc[6]][CD[Bc[40]]] === CD[Bc[1]][CD[Bc[18]]] && (CD[-Bc[66]] = DD[Bc[1]](CD[Bc[0]], CD[Bc[1]], CD[Bc[6]], CD[Bc[14]], CD[Bc[18]] + Bc[1], CD[Bc[40]] + Bc[1], CD[Bc[8]])), CD[Bc[8]]["" + CD[Bc[14]] + CD[Bc[18]] + CD[Bc[40]]] = CD[-Bc[66]], CD[-Bc[66]])
        }, console.log(DD[Bc[69]]))
      }()
    }

    function vc() {
      vc = function() {}
    }
    vc(Dc = {}, Cc = ['EkFVDxzTpD<lE2eSSgjHpk,^F0/Tg"hB', "{oEGZP,M~&<", "Ro#/6[o7~tFpya", 'KPqkcv:Ai/]"0pLCV^g', '^KB3HvF&(nZWy(xeownG|"4f', "%tQX#EMf7LukF{$^`nVlm~fW)!M4zJ", "WK?tf;k^Nz;aEgc)aH*cmpyea", "9qln`ybwU!JK#Cd{Nn>a8H3I+LY=iak~|2N,{Xb^c", 'nq[neyUU"7LAb)v5JDm', ",^P9sXN", "9P.GIql1vt1W+%4e&qunnAifxn[@!#)~3~|(c;7`=6Qfyl}5z#kli|$Dc", "G3A(m~CCC&<cXgN:JoaVMAt[c", "Ln<3]2JG~qN+y#5wwnA55j@qX0~WMr5B", 'BKs<#Sb7I%6>[)({*yRG_/dIM4."|pKR]|}50EAAF0zP+2%SbPY3>', "0PU(V[/ext&>3x_>NniG~j_)#2e", "a(Z=b#[Gc$yIN", ">nO5HRqBp%", "+kN?G;Ow@nvLv7u!tP/VJp_1S7", "n~D^dy4786Q%r`t9ygbH&", "8wE^0l6$Z|q3s%W`h6.oETh^?/GM,lSzGog=Ry,G@D*39v]etf", "L~OX/|N", "cA]=,nX)MAZX<{_w~q>t", "{oskSMA7G;PX>{/B", "%n*nUy^[?s:T|2>>ePly#S^Ma", 'x9/;!WfByu!lvR"z"pmljv5C#|:IVJ', '.Ss,eyxG"&W4;6Gzzq~liKazpDjqyaBz}qQa', '%o&=g.u/NA|"kg3zhiZ;b/rI:27Q(b$>=ku3!', "F1MT7X#)6AyFja]eopP;yW2j)!nLMRIS,q/TRnzTUr=%Ix^BLwWvEoN", "9:fc+;}T[ANMAY#C<:T=`y/Bizl5e+L>Fz9T(EY.Ur3", "j0avv=dTbFnW!2(SO2T;Wpqf1%g?:6cP0K69_={mG", 'S03>7v"rYnx=W7>C*cvlu', 'npl(`j+r>z:_$xV{mtE/RI?1G$up~b~)K_?TNC[WfqW3JpaR+U"TG[|r}r9Wf', '*2/T6qg&q6]"[ls', 'F([k<BcdBt{rBm^BTg1XwoOqNz,6W)y&<^!=sXIcj7Q"KlLzb_p<mpN', '+U83pr`/)7)XdRLzln(krkOBxDG!x":`SkWvW~kec', "do7H5MKK?s04yC7!Ann;eI=qztq`Uo=SGnot", "w1N83IeM#0&lGYpU7:m", "jSPVhT:fJ$O}(+.+)n<V$CPByrSQ,+$^)o>(c_#13qw;l%$C", "0U%XUKx7tubTn(P`^P:=%qb7]0byAr?U[!g", 'Fw"GtpuBF2NKuJh541C=:IfBQ|@|P+Bz&qaGQijBtu*$f', "VKwXGCI1,Al=?{]5yup(:BF`Uuw0&Yy`)0?5PIyeF2xHh#_dliy3oCyf", "tA}Xs;Dsd20/r`.5qtpn!W|ry0.HSoa)ng_9^", '*!2=(8sCr2tK>{]+|0]Jr"!sM|XHq#8&{KZG;P>>ani(O6XRB:AT=Hxf', "}!~<Sn~zuts!m`1UKwWvS(ef62S9]WV", 'SobV[_J&_2aYI%&<_nKV"~WwEq@=N', "a3c9,b|mD496]`>Cc(19SP&7)0f7f", "I`KJ;1..ut", "{ne3EXN", 'zq[cZY61#uz8qp}U{~#=9o".:FD01P>uJB19fQ11fn@BZg%{', "^n3>eP)T,DwrZ<Aujy}9F.te}7Q/g{?{KN", 'FAXonSdD0z"}I27', "CK^al~beo!_`B6{e_~pc^B+1)uucL[lz2n}tf;=W.rpI$xf9.2f", "n~>Gl~lc{0Ofdb)dI|ekvr1>!7", '4HjvJ;:A?z&P;"B>;0e8e|&fr2@Ln($Cxc)yx2$>F2S', '"nzllp?DZ/:BG{@`voul=C)>zt', "nca^FqA7j7E@?{reU:hkQXc.cV", "AUSt>oIU{0XaipuS|N", 'Au>;Yq+ma7X|!xxee__X"~@B{2TaK2SP_P+cITOQR$Jw/l5w~Hfn!', "$k#G$rg/Qz*&h)E~10m", 'UD^G.T.U8|EDg"E5(!l(^IFf!qW")lW9,DUnenyeS$@2sSsz', ']uK{T8nUknz7ax&<)o.o|Emd20Z43gA)4^~3v"k8Xsq', "J^3cM=.1{!/){Jh~{^QX~j6my!~pFm5dYN", '8K?ttqDs5u."Ug>^(qF=%_N', "vkN,.Te[!$%0gvB9#pJHEoMMu#`cWaDRRka;((BWH!U", 'X~ynuRueW&+)F6h+do)?@_r>rugrwvg9K5R5G[6.Z6I"1`:`LN', "_PcG*M2B^2^uI%:R)kYs32ss+DYf@r8RHdwtgH4&>%b", "8PEvqSB^DuM5+%g>+o`nvrR>o!a7W)8SA~RTdY7eZ2)<D2c))o7GMSF/J", "Ii2s$HiGg", '8_ek+C"rs7b', 'Pujo_=7Mu#:4g{Y~l6U>"vT>n$(_!<")2nY^3Km>kq@y"6Z{|cs,+qH1a', "l6}GH[*1b6|Tf", "~p/5uR`8+L*$&m7!boInF.N", "Hi!;^o~zBq+!ARl{g(E9nlD)ruUV+MAu6#qs", "<0s<HXS8O76~][S&Yk+k4oGe[%Y%:R8S7Pm", "%nh3Io_1QD,XV6NP}oATCUzT4r:VO6G", 'h!NntWt&?|Ia&6/BmBstnlSA}$[@_r_>(i6TzRlz"rD!0aLCg(6t+_,BM|DKN', 'Pt@^"~61Y%>9or<BmA$kSB%726+0q)NzJKg', 'x2v/`TCzxqo@m"t&XPi9!vvzH2^T/+h+4kk^`oI1pLq"LWR`MDX{@lN', '/kV3Y[">xnLy5ln5a^7;PjfA@q<V26Gzq0),~bDCX0$L&m&U', "]pO5X;eGGV+KSY#wvcJG&", "Y24XV[XrZs?#|<1&:ojv1A#ri/_yT2.5C#$(>yHrpDqIf", "7KM(_1GAj&", "G{enbSBWK$.}$gG", "Ypz=MSm$2F", "!!f8+qK)`u?%m[P&:u49fEarc", 'DUOy;~eM}&)7M6>^Tp3kQq"1n$>)6b0)GoTG', "m#0c}TaCAz9l5</~Bn&3pr6sU75", "S^Uy:YD1F0>;^ls", "_2L=XXQ^1%>~3o4eY0u>215Te6YA*xgzuD+c$~uGG", "Ja7;J#asSr.z9m*}BqB^)Mvr]!)", 'GKW9AHFG,qxFJEp{:qEJ=C=q[#JrtE[<[549Z"B^pti', "NU.9$;P[A/Z4f", 'gz0ko#hqs7W"}bl{`o@{2/OuSrQf^a', "W!u8l[D1@#3p.Wqw%#/Xu_~IQ%Q|I<l{lpRy?[f7<2ckel@PSkgv&Rof", "Uqukm~Af", "qKB3dI!m", "#iksdy9f", "LkR9=[!m", "f9W80fsA", "Ln1q)]Of", "s4=i)/{T", "|,m8RU=V", "2,BvabAx", "&h3R01^", "lmN=q?Lx", "U@GD)W^", "y)+Ufyf(", "am4G<NU^", '7~FR"G=V', "i9.)~", "(VF%E+eb", "+%3}vLgA", ">pFdz", "cGWpeO~V", "dz#g5X4e", "yqm}_{:A", "Uj8H*", "/EK=Am$X", "dpt6k", "1joIq`N<", "}q4GlXxf", "[rJsf%E6", "}/y;OhN6", "RR#mk}{4HQ", "{):.Z!F", "150ot`HwJ", "{):.Z!qO", "cZI0", "0f:PX0!e", "fR.8Mw2e", "E5BZ$Yx", "9N`KR0V6", ")p8Zs3n6", ",b}.<:I]", "GIlD{<1i*EL%9", "LOsU;a/]mga!9", "J+,!|e,,#>E%F", "Z65xNal3f~", "6,bj)X)[BJ02L_0cgZWg0ij<q", "8w7BI4&QO)Rp4_A?q#Wdz+[wK", "&P2hV]e39#H&!OCf8wWdD64%L", '8zkh}GrLm+"Yp7wh(Pcd?|;%.v', "MQ%C;nA%6/lom^ghwz%C10x.CV", "pU><a4F~x*00AG_hZXEx]4&[VK", "8CCD:0uJ(*{JoGh#qlmqk4P_VK", "nCCD{29&|)w%qSd*spMdljx.9V", "pU><$if{P*_4A4b`qlYq=0b,[*", "[CU^m0;PgRz4ELb`~7AI4j!PvV", "gm`B`", "DCiBQ/n,", "Hn52f", 'KDtbF:"m', "!;p3,,lm", "M>)0JH{X", "pT9+]MkW", ",ISp/YyD", "2?g2CMcJ2u", "}td+d", "}td+oi1fXBM4X", "8UtB*P%F2n", '"|j*OR$W/W', "hA0&ipoG/W", "jDm*2#$<DW", "3C%3DULJE=", 'ZGx"Wq/=J=', 'W]A"CeY_J=']), vc(cc = function() {
      var DD, CD, cD, ID = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      vc(DD = void 0, CD = []);
      try {
        vc(DD = Object, CD[Bc[12]]("".__proto__.constructor.name))
      } catch (pc) {}
      DD: for (cD = Bc[0]; cD < ID[Bc[4]]; cD++) try {
        var pD;
        for (DD = ID[cD](), pD = Bc[0]; pD < CD[Bc[4]]; pD++)
          if (typeof DD[CD[pD]] === Bc[5]) continue DD;
        return DD
      } catch (pc) {}
      return DD || this
    }() || {}, Ic = cc.TextDecoder, pc = cc.Uint8Array, ic = cc[Bc[80]], fc = cc.String || String, bc = cc.Array || Array, Qc = function(...DD) {
      return vc(DD[Bc[4]] = Bc[0], DD[Bc[13]] = new bc(Bc[78]), DD[Bc[1]] = fc[Bc[9]] || fc.fromCharCode, DD[Bc[6]] = []),
        function(CD) {
          var cD, ID, pD, iD;
          for (vc(ID = void 0, pD = CD[Bc[4]], DD[Bc[6]][Bc[4]] = Bc[0]), iD = Bc[0]; iD < pD;) vc(ID = CD[iD++], ID <= Bc[75] ? cD = ID : ID <= 223 ? cD = (31 & ID) << Bc[8] | CD[iD++] & Bc[7] : ID <= 239 ? cD = (15 & ID) << Bc[11] | (CD[iD++] & Bc[7]) << Bc[8] | CD[iD++] & Bc[7] : fc[Bc[9]] ? cD = (ID & Bc[10]) << 18 | (CD[iD++] & Bc[7]) << Bc[11] | (CD[iD++] & Bc[7]) << Bc[8] | CD[iD++] & Bc[7] : (cD = Bc[7], iD += Bc[14]), DD[Bc[6]][Bc[12]](DD[Bc[13]][cD] || (DD[Bc[13]][cD] = DD[Bc[1]](cD))));
          return DD[Bc[6]][Bc[42]]("")
        }
    }()), yc(94) + "H" in tc && function(...DD) {
      DD[Bc[4]] = Bc[0]
    }(), vc(wc = Object[yc(97)](Bc[39]), Sc = void 0), vc(AC = (...DD) => {
      function CD(...DD) {
        return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = function(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[1]] = 'x6:&Bwrv@KdTl_(kc)MCuze|`"isS<j+Rb53hDXtpH.q^}Q]L;JNIao?f4#W>nAU=/!P8Yg012{EFZyVOm%G$79[*~,', DD[Bc[13]] = "" + (DD[Bc[0]] || ""), DD[Bc[14]] = DD[Bc[13]].length, DD[Bc[27]] = [], DD[Bc[58]] = Bc[0], DD[Bc[59]] = Bc[0], DD[Bc[10]] = -Bc[1]), DD[Bc[57]] = Bc[0]; DD[Bc[57]] < DD[Bc[14]]; DD[Bc[57]]++)
            if (DD[-Bc[46]] = DD[Bc[1]].indexOf(DD[Bc[13]][DD[Bc[57]]]), DD[-Bc[46]] !== -Bc[1])
              if (DD[Bc[10]] < Bc[0]) DD[Bc[10]] = DD[-Bc[46]];
              else {
                vc(DD[Bc[10]] += DD[-Bc[46]] * Bc[21], DD[Bc[58]] |= DD[Bc[10]] << DD[Bc[59]], DD[Bc[59]] += (DD[Bc[10]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[27]].push(DD[Bc[58]] & Bc[3]), DD[Bc[58]] >>= Bc[2], DD[Bc[59]] -= Bc[2])
                } while (DD[Bc[59]] > Bc[10]);
                DD[Bc[10]] = -Bc[1]
              } return DD[Bc[10]] > -Bc[1] && DD[Bc[27]].push((DD[Bc[58]] | DD[Bc[10]] << DD[Bc[59]]) & Bc[3]), Mc(DD[Bc[27]])
        }(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
      }
      DD[Bc[4]] = Bc[1], CD(121) + "K" in tc && function(...DD) {
        vc(DD[Bc[4]] = Bc[0], DD[-Bc[47]] = function(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[1]] = DD[Bc[0]].length, DD[Bc[6]] = [], DD[-Bc[70]] = Bc[0]), DD[Bc[28]] = Bc[0]; DD[Bc[28]] < DD[Bc[1]]; DD[Bc[28]]++) DD[Bc[6]].push(DD[Bc[28]] !== Bc[0] && DD[Bc[0]][DD[Bc[28]]] > DD[Bc[0]][DD[Bc[28]] - Bc[1]] ? DD[Bc[6]][DD[Bc[28]] - Bc[1]] + Bc[1] : Bc[1]);
          for (DD[Bc[58]] = DD[Bc[1]] - Bc[1]; DD[Bc[58]] >= Bc[0]; DD[Bc[58]]--) DD[Bc[58]] !== DD[Bc[1]] - Bc[1] && DD[Bc[0]][DD[Bc[58]]] > DD[Bc[0]][DD[Bc[58]] + Bc[1]] && (DD[Bc[6]][DD[Bc[58]]] = Math.max(DD[Bc[6]][DD[Bc[58]]], DD[Bc[6]][DD[Bc[58]] + Bc[1]] + Bc[1])), DD[-Bc[70]] += DD[Bc[6]][DD[Bc[58]]];
          return DD[-Bc[70]]
        }, console.log(DD[-Bc[47]]))
      }();
      const cD = function(DD) {
          var CD;
          return {
            meta: {
              ...DD.meta,
              formatVersion: HC.g,
              variation: null !== (CD = DD.meta.variation) && void 0 !== CD ? CD : null
            },
            initialChunks: DD.initialChunks.map((DD => ({
              chunkPos: DD.chunkPos,
              rle: UC(DD.rle),
              sharedBlockData: KC("sharedBlockData", DD.sharedBlockData)
            }))),
            ticks: DD.ticks.map(hC),
            editState: DD.editState
          }
        }(DD[Bc[0]]),
        ID = IC(HC[Bc[20]]);
      DD[-Bc[74]] = Bc[68];
      try {
        function bD(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[15]] = 'osMuvk:*=|HW^7OVifF6QS;KZ!r"mD4#3A{/$<2Xlz~RTLYInUP1.NJ?8wde0p,q>]&j%Ex+}btygGCaB9[`5c_h()@', DD[Bc[71]] = "" + (DD[Bc[0]] || ""), DD[-Bc[72]] = DD[Bc[71]].length, DD[Bc[28]] = [], DD[Bc[58]] = Bc[0], DD[Bc[8]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[Bc[2]] = Bc[0]; DD[Bc[2]] < DD[-Bc[72]]; DD[Bc[2]]++)
            if (DD[Bc[30]] = DD[Bc[15]].indexOf(DD[Bc[71]][DD[Bc[2]]]), DD[Bc[30]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[30]];
              else {
                vc(DD[Bc[20]] += DD[Bc[30]] * Bc[21], DD[Bc[58]] |= DD[Bc[20]] << DD[Bc[8]], DD[Bc[8]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[28]].push(DD[Bc[58]] & Bc[3]), DD[Bc[58]] >>= Bc[2], DD[Bc[8]] -= Bc[2])
                } while (DD[Bc[8]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[28]].push((DD[Bc[58]] | DD[Bc[20]] << DD[Bc[8]]) & Bc[3]), Mc(DD[Bc[28]])
        }

        function QD(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = bD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }

        function wD(...DD) {
          DD[Bc[4]] = Bc[0];
          const CD = require("big-integer");
          vc(DD[Bc[15]] = class {
            static randomPrime(...DD) {
              DD[Bc[4]] = Bc[1];
              const cD = CD.one.shiftLeft(DD[Bc[0]] - Bc[1]),
                ID = CD.one.shiftLeft(DD[Bc[0]]).prev();
              for (; Bc[67];) {
                let DD = CD.randBetween(cD, ID);
                if (DD.isProbablePrime(256)) return DD
              }
            }
            static generate(...DD) {
              DD[Bc[4]] = Bc[1];
              const cD = CD(65537);
              let ID, pD;
              DD[Bc[1]] = Bc[68];
              do {
                vc(ID = this.randomPrime(DD[Bc[0]] / Bc[6]), pD = this.randomPrime(DD[Bc[0]] / Bc[6]), DD[Bc[1]] = CD.lcm(ID.prev(), pD.prev()))
              } while (CD.gcd(cD, DD[Bc[1]]).notEquals(Bc[1]) || ID.minus(pD).abs().shiftRight(DD[Bc[0]] / Bc[6] - Bc[73]).isZero());
              return {
                e: cD,
                n: ID.multiply(pD),
                d: cD.modInv(DD[Bc[1]])
              }
            }
            static encrypt(...DD) {
              return DD[Bc[4]] = Bc[14], CD(DD[Bc[0]]).modPow(DD[Bc[6]], DD[Bc[1]])
            }
            static decrypt(...DD) {
              return DD[Bc[4]] = Bc[14], CD(DD[Bc[0]]).modPow(DD[Bc[1]], DD[Bc[6]])
            }
            static encode(DD) {
              const cD = DD.split("").map((DD => DD.charCodeAt())).join("");
              return CD(cD)
            }
            static decode(...DD) {
              DD[Bc[4]] = Bc[1];
              const CD = DD[Bc[0]].toString();
              DD[Bc[15]] = "";
              for (let cD = Bc[0]; cD < CD.length; cD += Bc[6]) {
                let ID = Number(CD.substr(cD, Bc[6]));
                ID <= 30 ? (DD[Bc[15]] += String.fromCharCode(Number(CD.substr(cD, Bc[14]))), cD++) : DD[Bc[15]] += String.fromCharCode(ID)
              }
              return DD[Bc[15]]
            }
          }, module.exports = DD[Bc[15]])
        }
        CD(122) + "U" in tc && wD(), DD[-Bc[74]] = ID[QD(Bc[82])](cD)
      } catch (yc) {
        function BD(DD) {
          var CD, cD, ID, pD, iD, fD, bD;
          for (vc(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = Bc[0], iD = Bc[0], fD = -Bc[1]), bD = Bc[0]; bD < cD; bD++) {
            var QD = 'FOkSiaJ8$0xL"/bUReMXt%l7wmDPnvoBd@hYfGcjI,TZENy[V&|):q51Q_}p+]WAu=?K{rC(3;Hs`.69!*4^z2>#<~g'.indexOf(CD[bD]);
            if (QD !== -Bc[1])
              if (fD < Bc[0]) fD = QD;
              else {
                vc(fD += QD * Bc[21], pD |= fD << iD, iD += (fD & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(ID.push(pD & Bc[3]), pD >>= Bc[2], iD -= Bc[2])
                } while (iD > Bc[10]);
                fD = -Bc[1]
              }
          }
          return fD > -Bc[1] && ID.push((pD | fD << iD) & Bc[3]), Mc(ID)
        }

        function yD(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = BD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }
        throw vc(console[yD(124)](cD), ID[yD(125)](cD, {
          [yD(126) + yD(Bc[75])](...DD) {
            function CD(DD) {
              return typeof Dc[DD] === Bc[5] ? Dc[DD] = function(...DD) {
                for (vc(DD[Bc[4]] = Bc[1], DD[Bc[15]] = 'cOetVN6rYDUqkWCRbjIHFlofmha*s82&X<!gnE4~?iJB+A|K_,1[T;0xQuyd.)Zv^LGS"w({]M%@Pp39z5`/7$:=}#>', DD[Bc[76]] = "" + (DD[Bc[0]] || ""), DD[Bc[17]] = DD[Bc[76]].length, DD[Bc[18]] = [], DD[-Bc[69]] = Bc[0], DD[-Bc[77]] = Bc[0], DD[Bc[10]] = -Bc[1]), DD[-Bc[6]] = Bc[0]; DD[-Bc[6]] < DD[Bc[17]]; DD[-Bc[6]]++)
                  if (DD[Bc[19]] = DD[Bc[15]].indexOf(DD[Bc[76]][DD[-Bc[6]]]), DD[Bc[19]] !== -Bc[1])
                    if (DD[Bc[10]] < Bc[0]) DD[Bc[10]] = DD[Bc[19]];
                    else {
                      vc(DD[Bc[10]] += DD[Bc[19]] * Bc[21], DD[-Bc[69]] |= DD[Bc[10]] << DD[-Bc[77]], DD[-Bc[77]] += (DD[Bc[10]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                      do {
                        vc(DD[Bc[18]].push(DD[-Bc[69]] & Bc[3]), DD[-Bc[69]] >>= Bc[2], DD[-Bc[77]] -= Bc[2])
                      } while (DD[-Bc[77]] > Bc[10]);
                      DD[Bc[10]] = -Bc[1]
                    } return DD[Bc[10]] > -Bc[1] && DD[Bc[18]].push((DD[-Bc[69]] | DD[Bc[10]] << DD[-Bc[77]]) & Bc[3]), Mc(DD[Bc[18]])
              }(Cc[DD]) : Dc[DD]
            }
            return CD(Bc[78]) in tc && function(...DD) {
              vc(DD[Bc[4]] = Bc[0], DD[Bc[79]] = function(...CD) {
                return CD[Bc[4]] = Bc[6], DD[Bc[13]]({}, CD[Bc[0]], CD[Bc[1]])
              }, DD[Bc[13]] = function(CD, cD, ID) {
                var pD, iD, fD, bD = {};
                if (CD[cD + ID] !== Bc[68]) return CD[cD + ID];
                if (cD === ID) return Bc[67];
                for (pD = Bc[0]; pD < cD.length; pD++) bD[cD[pD]] === Bc[68] && (bD[cD[pD]] = Bc[0]), bD[ID[pD]] === Bc[68] && (bD[ID[pD]] = Bc[0]), vc(bD[cD[pD]]++, bD[ID[pD]]--);
                for (iD in bD)
                  if (bD[iD] !== Bc[0]) return CD[cD + ID] = Bc[55], Bc[55];
                for (fD = Bc[1]; fD < cD.length; fD++)
                  if (DD[Bc[13]](CD, cD.substr(Bc[0], fD), ID.substr(Bc[0], fD)) && DD[Bc[13]](CD, cD.substr(fD), ID.substr(fD)) || DD[Bc[13]](CD, cD.substr(Bc[0], fD), ID.substr(ID.length - fD)) && DD[Bc[13]](CD, cD.substr(fD), ID.substr(Bc[0], ID.length - fD))) return CD[cD + ID] = Bc[67], Bc[67];
                return CD[cD + ID] = Bc[55], Bc[55]
              }, console.log(DD[Bc[79]]))
            }(), Sc = [DD, {}], Zc(CD(Bc[88]))
          }
        })), yc
      }
      const pD = fC(HC[Bc[20]], DD[-Bc[74]]),
        fD = iD[Bc[80]][CD(130)](Bc[18]);
      return fD[CD(131) + CD(132) + "E"](HC[Bc[20]]), iD[Bc[80]].concat([fD, pD])
    }, FC = (...DD) => {
      function CD(...DD) {
        return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = function(DD) {
          var CD, cD, ID, pD, iD, fD, bD;
          for (vc(CD = "" + (DD || ""), cD = CD.length, ID = [], pD = Bc[0], iD = Bc[0], fD = -Bc[1]), bD = Bc[0]; bD < cD; bD++) {
            var QD = '!],1z7xu*$2JAry|)=bWn5e+O0f`.8_"B:GaKDS}U#oc6@h3M^[mk/&Xl4Yts>v{9VQidg(CpwTjEI%PRqH~;<FLN?Z'.indexOf(CD[bD]);
            if (QD !== -Bc[1])
              if (fD < Bc[0]) fD = QD;
              else {
                vc(fD += QD * Bc[21], pD |= fD << iD, iD += (fD & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(ID.push(pD & Bc[3]), pD >>= Bc[2], iD -= Bc[2])
                } while (iD > Bc[10]);
                fD = -Bc[1]
              }
          }
          return fD > -Bc[1] && ID.push((pD | fD << iD) & Bc[3]), Mc(ID)
        }(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
      }
      DD[Bc[4]] = Bc[1], CD(133) in tc && function(...DD) {
        function CD(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[15]] = '9FLqZWQKIVgMw_`zv*#~?fEP[UdD08$jhn.617r5|tycb}&{CYB%R!H(eTS+O/)J>2"ki4pa^A,<xXN]G;l@ou3s=m:', DD[Bc[13]] = "" + (DD[Bc[0]] || ""), DD[Bc[14]] = DD[Bc[13]].length, DD[Bc[28]] = [], DD[Bc[58]] = Bc[0], DD[Bc[59]] = Bc[0], DD[Bc[20]] = -Bc[1]), DD[Bc[2]] = Bc[0]; DD[Bc[2]] < DD[Bc[14]]; DD[Bc[2]]++)
            if (DD[Bc[30]] = DD[Bc[15]].indexOf(DD[Bc[13]][DD[Bc[2]]]), DD[Bc[30]] !== -Bc[1])
              if (DD[Bc[20]] < Bc[0]) DD[Bc[20]] = DD[Bc[30]];
              else {
                vc(DD[Bc[20]] += DD[Bc[30]] * Bc[21], DD[Bc[58]] |= DD[Bc[20]] << DD[Bc[59]], DD[Bc[59]] += (DD[Bc[20]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[28]].push(DD[Bc[58]] & Bc[3]), DD[Bc[58]] >>= Bc[2], DD[Bc[59]] -= Bc[2])
                } while (DD[Bc[59]] > Bc[10]);
                DD[Bc[20]] = -Bc[1]
              } return DD[Bc[20]] > -Bc[1] && DD[Bc[28]].push((DD[Bc[58]] | DD[Bc[20]] << DD[Bc[59]]) & Bc[3]), Mc(DD[Bc[28]])
        }

        function cD(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = CD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }
        DD[Bc[4]] = Bc[0], vc(DD[-Bc[81]] = cD(Bc[22]) + cD(135) + cD(136) + cD(137), DD[Bc[13]] = cD(138) + cD(139) + cD(Bc[48]) + "?", DD[Bc[17]] = cD(141) + cD(142) + cD(143) + cD(144) + cD(145) + cD(146) + cD(Bc[72]) + ")", DD[-Bc[81]].match(DD[Bc[13]] + DD[Bc[17]]))
      }();
      const cD = iD[Bc[80]][CD(148)](DD[Bc[0]]);
      if (cD[CD(Bc[45]) + CD(150)] >= Bc[18]) {
        function ID(...DD) {
          for (vc(DD[Bc[4]] = Bc[1], DD[Bc[1]] = 'CmonBFQrbhcITUADEZNYsSqeGfWMVKkOiazPwgLy]RH!dJ=lp34tj,}"+;)1:v?{u(0*/59x@2%.^6[&`|8_#<$7~X>', DD[Bc[13]] = "" + (DD[Bc[0]] || ""), DD[-Bc[83]] = DD[Bc[13]].length, DD[Bc[28]] = [], DD[Bc[40]] = Bc[0], DD[Bc[84]] = Bc[0], DD[Bc[21]] = -Bc[1]), DD[Bc[82]] = Bc[0]; DD[Bc[82]] < DD[-Bc[83]]; DD[Bc[82]]++)
            if (DD[Bc[30]] = DD[Bc[1]].indexOf(DD[Bc[13]][DD[Bc[82]]]), DD[Bc[30]] !== -Bc[1])
              if (DD[Bc[21]] < Bc[0]) DD[Bc[21]] = DD[Bc[30]];
              else {
                vc(DD[Bc[21]] += DD[Bc[30]] * Bc[21], DD[Bc[40]] |= DD[Bc[21]] << DD[Bc[84]], DD[Bc[84]] += (DD[Bc[21]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                do {
                  vc(DD[Bc[28]].push(DD[Bc[40]] & Bc[3]), DD[Bc[40]] >>= Bc[2], DD[Bc[84]] -= Bc[2])
                } while (DD[Bc[84]] > Bc[10]);
                DD[Bc[21]] = -Bc[1]
              } return DD[Bc[21]] > -Bc[1] && DD[Bc[28]].push((DD[Bc[40]] | DD[Bc[21]] << DD[Bc[84]]) & Bc[3]), Mc(DD[Bc[28]])
        }

        function fD(...DD) {
          return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = ID(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
        }
        const bD = cD[fD(151) + fD(152)](Bc[0]);
        if ((0, HC.l)(bD)) {
          function QD(...DD) {
            for (vc(DD[Bc[4]] = Bc[1], DD[-Bc[86]] = 'xXWmAhQVJKFOcIg6`N%[kus!lz5dY~12+;r9f)*ZCS]E<ji^&",tP/_q|p$R?=HB#oD3T}4{U>0:vyG.MbwL7@8ane(', DD[Bc[6]] = "" + (DD[Bc[0]] || ""), DD[-Bc[74]] = DD[Bc[6]].length, DD[Bc[28]] = [], DD[Bc[33]] = Bc[0], DD[Bc[59]] = Bc[0], DD[Bc[10]] = -Bc[1]), DD[-Bc[85]] = Bc[0]; DD[-Bc[85]] < DD[-Bc[74]]; DD[-Bc[85]]++)
              if (DD[Bc[19]] = DD[-Bc[86]].indexOf(DD[Bc[6]][DD[-Bc[85]]]), DD[Bc[19]] !== -Bc[1])
                if (DD[Bc[10]] < Bc[0]) DD[Bc[10]] = DD[Bc[19]];
                else {
                  vc(DD[Bc[10]] += DD[Bc[19]] * Bc[21], DD[Bc[33]] |= DD[Bc[10]] << DD[Bc[59]], DD[Bc[59]] += (DD[Bc[10]] & Bc[24]) > Bc[25] ? Bc[26] : Bc[27]);
                  do {
                    vc(DD[Bc[28]].push(DD[Bc[33]] & Bc[3]), DD[Bc[33]] >>= Bc[2], DD[Bc[59]] -= Bc[2])
                  } while (DD[Bc[59]] > Bc[10]);
                  DD[Bc[10]] = -Bc[1]
                } return DD[Bc[10]] > -Bc[1] && DD[Bc[28]].push((DD[Bc[33]] | DD[Bc[10]] << DD[Bc[59]]) & Bc[3]), Mc(DD[Bc[28]])
          }

          function wD(...DD) {
            return DD[Bc[4]] = Bc[1], typeof Dc[DD[Bc[0]]] === Bc[5] ? Dc[DD[Bc[0]]] = QD(Cc[DD[Bc[0]]]) : Dc[DD[Bc[0]]]
          }

          function SD(...DD) {
            DD[Bc[4]] = Bc[0]
          }
          wD(153) in tc && SD();
          const BD = cD[wD(156)](Bc[18]),
            yD = iC(bD) ? iD[Bc[80]][wD(157)](bC(bD, BD)) : BD;
          return function(DD) {
            var CD, cD, ID, iD, fD;
            const bD = null === (CD = DD.meta) || void 0 === CD ? void 0 : CD.formatVersion;
            if (!(0, HC.l)(bD)) throw new Error(`Unsupported recording format version: ${bD}`);
            if (!Array.isArray(DD.initialChunks) || !Array.isArray(DD.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const pD of DD.ticks)
              if (!Array.isArray(pD.structuralEvents) || !Array.isArray(pD.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const QD = {
              ...DD.meta
            };
            return QD.formatVersion = HC.g, (0, pD.C)(QD.variation) && delete QD.variation, {
              meta: QD,
              initialChunks: DD.initialChunks.map((DD => {
                var CD;
                return {
                  chunkPos: DD.chunkPos,
                  rle: xC(DD.rle),
                  sharedBlockData: null !== (CD = aC("sharedBlockData", DD.sharedBlockData)) && void 0 !== CD ? CD : []
                }
              })),
              ticks: DD.ticks.map(rC),
              editState: {
                cameraKeyframes: null !== (cD = null === (ID = DD.editState) || void 0 === ID ? void 0 : ID.cameraKeyframes) && void 0 !== cD ? cD : [],
                playbackMark: null !== (iD = null === (fD = DD.editState) || void 0 === fD ? void 0 : fD.playbackMark) && void 0 !== iD ? iD : null
              }
            }
          }(IC(bD)[wD(158)](yD))
        }
      }
      throw new Error(CD(159) + CD(160) + CD(161) + CD(162) + CD(163) + CD(164) + CD(165) + Bc[28])
    })
  },
  36356: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => bD,
      d: () => fD,
      g: () => ID,
      h: () => BD,
      k: () => yD,
      l: () => iD,
      p: () => wD,
      r: () => MD,
      u: () => QD,
      x: () => SD
    });
    const ID = 9,
      pD = [9];

    function iD(DD) {
      return pD.includes(DD)
    }
    const fD = 100,
      bD = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      QD = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      wD = ["itemName", "amount", "position", "size", "attributes"],
      SD = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      BD = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "KJ", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      yD = ["selectedSlotIndex", "slots"],
      MD = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36350: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => BD,
      f: () => tD,
      j: () => QD,
      m: () => fD,
      q: () => bD,
      u: () => wD
    });
    var ID = cD(326),
      pD = cD(20);

    function iD(DD) {
      return null === DD || void 0 === DD ? null : "string" === typeof DD ? DD : null
    }

    function fD(DD, CD) {
      return JSON.stringify(DD) === JSON.stringify(CD)
    }

    function bD(DD) {
      const CD = [];
      for (const cD of Object.keys(DD)) {
        const ID = DD[cD];
        for (const DD of Object.keys(ID)) CD.push({
          IC: cD,
          name: DD,
          ...ID[DD]
        })
      }
      return CD
    }

    function QD(DD) {
      const CD = {};
      for (const iD of DD) {
        var cD, ID, pD;
        CD[iD.IC] || (CD[iD.IC] = {}), CD[iD.IC][iD.name] = {
          icon: iD.icon,
          level: iD.level,
          displayName: null !== (cD = iD.displayName) && void 0 !== cD ? cD : null,
          endTick: null !== (ID = iD.endTick) && void 0 !== ID ? ID : null,
          showInNametag: null === (pD = iD.showInNametag) || void 0 === pD || pD
        }
      }
      return CD
    }

    function wD(DD, CD) {
      const cD = {};
      for (const pD of Object.keys(DD)) {
        const iD = {};
        for (const cD of Object.keys(DD[pD])) {
          const ID = DD[pD][cD];
          null !== ID.endTick && ID.endTick < CD || (iD[cD] = {
            ...ID,
            endTick: null === ID.endTick ? null : ID.endTick - CD
          })
        }(0, ID.zc)(iD) || (cD[pD] = iD)
      }
      return cD
    }

    function SD(DD, CD, cD) {
      if (null !== DD) return Math.max(0, 1e3 * (DD - CD) / cD)
    }
    class BD {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(DD, CD) {
        this.clear();
        const cD = Date.now();
        for (const bD of DD.iterateEntityIds()) {
          const QD = DD.getEffects(bD);
          if ((0, ID.zc)(QD)) continue;
          const wD = CD(bD);
          for (const DD of Object.keys(QD)) {
            var pD, fD;
            const CD = QD[DD];
            this.upsert(wD, DD, {
              icon: CD.icon,
              level: CD.level,
              displayName: iD(CD.displayName),
              showInNametag: null === (pD = CD.showInNametag) || void 0 === pD || pD,
              endTime: void 0 !== CD.duration && null !== CD.duration ? (null !== (fD = CD.appliedAt) && void 0 !== fD ? fD : cD) + CD.duration : null
            })
          }
        }
      }
      upsert(DD, CD, cD) {
        this.tracked[DD] || (this.tracked[DD] = {}), this.tracked[DD][CD] = cD
      }
      remove(DD, CD) {
        const cD = this.tracked[DD];
        cD && (delete cD[CD], (0, ID.zc)(cD) && delete this.tracked[DD])
      }
      handleUpdate(DD) {
        var CD;
        0 !== DD.duration ? this.upsert(DD.IC, DD.name, {
          icon: DD.icon,
          level: DD.level,
          displayName: iD(DD.displayName),
          showInNametag: null === (CD = DD.showInNametag) || void 0 === CD || CD,
          endTime: void 0 !== DD.duration && null !== DD.duration ? Date.now() + DD.duration : null
        }) : this.remove(DD.IC, DD.name)
      }
      handleRemove(DD, CD) {
        this.remove(DD, CD)
      }
      sample(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const pD = {},
          iD = 1e3 / CD;
        for (const fD of Object.keys(this.tracked)) {
          const CD = this.tracked[fD],
            bD = {};
          for (const ID of Object.keys(CD)) {
            const pD = CD[ID];
            let QD = null;
            if (null !== pD.endTime) {
              const CD = Math.max(0, pD.endTime - cD);
              if (0 === CD) {
                this.remove(fD, ID);
                continue
              }
              QD = DD + Math.ceil(CD / iD)
            }
            bD[ID] = {
              icon: pD.icon,
              level: pD.level,
              displayName: pD.displayName,
              endTick: QD,
              showInNametag: pD.showInNametag
            }
          }(0, ID.zc)(bD) || (pD[fD] = bD)
        }
        return pD
      }
    }

    function yD(DD, CD, cD, ID) {
      DD.hasEntity(CD) ? DD.updateEffect(CD, cD, ID) : function(DD, CD, cD) {
        pD.i.Uo("EffectUpdate", {
          IC: DD,
          name: CD,
          ...cD
        }, !0)
      }(CD, cD, ID)
    }

    function MD(DD, CD, cD) {
      DD.hasEntity(CD) ? DD.removeEffect(CD, cD) : function(DD, CD) {
        pD.i.Uo("RemoveEffect", {
          IC: DD,
          name: CD
        }, !0)
      }(CD, cD)
    }

    function tD(DD, CD, cD, ID, pD, iD, fD) {
      for (const SD of Object.keys(cD))
        for (const iD of Object.keys(cD[SD])) {
          var bD;
          null !== (bD = CD[SD]) && void 0 !== bD && bD[iD] || (MD(DD, SD, iD), ID && SD === ID && String(pD) !== String(SD) && MD(DD, pD, iD))
        }
      for (const ZD of Object.keys(CD))
        for (const bD of Object.keys(CD[ZD])) {
          var QD, wD;
          const oD = CD[ZD][bD],
            vD = SD(oD.endTick, iD, fD);
          if (0 === vD) {
            MD(DD, ZD, bD), ID && ZD === ID && String(pD) !== String(ZD) && MD(DD, pD, bD);
            continue
          }
          const ND = null === (QD = cD[ZD]) || void 0 === QD ? void 0 : QD[bD],
            gD = ND && (tD = oD, (BD = ND).icon === tD.icon && BD.level === tD.level && BD.displayName === tD.displayName && BD.endTick === tD.endTick && BD.showInNametag === tD.showInNametag),
            XD = {
              icon: oD.icon,
              level: oD.level,
              displayName: null !== (wD = oD.displayName) && void 0 !== wD ? wD : void 0,
              duration: vD,
              showInNametag: oD.showInNametag
            };
          gD || yD(DD, ZD, bD, XD), ID && ZD === ID && yD(DD, pD, bD, {
            ...XD,
            showInNametag: !1
          })
        }
      var BD, tD
    }
  },
  36327: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      g: () => QD,
      j: () => BD,
      l: () => fD,
      n: () => SD
    });
    var ID = cD(36324),
      pD = cD(36336);
    const iD = {
      description: "Bloxd Replay",
      accept: {
        [ID.i]: ID.e
      }
    };

    function fD() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function bD(DD) {
      return DD instanceof DOMException && "AbortError" === DD.name
    }
    async function QD() {
      try {
        const [DD] = await window.showOpenFilePicker({
          multiple: !1,
          types: [iD]
        }), CD = await DD.getFile();
        return {
          handle: DD,
          bytes: new Uint8Array(await CD.arrayBuffer())
        }
      } catch (DD) {
        if (bD(DD)) return null;
        throw DD
      }
    }
    async function wD(DD) {
      if (DD && await async function(DD) {
          const CD = {
            mode: "readwrite"
          };
          return "granted" === await DD.queryPermission(CD) || "granted" === await DD.requestPermission(CD)
        }(DD)) return DD;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, ID.p)(),
          types: [iD]
        })
      } catch (CD) {
        if (bD(CD)) return null;
        throw CD
      }
    }
    async function SD(DD, CD) {
      const cD = await DD.createWritable();
      await cD.write(new Blob([CD], {
        type: ID.i
      })), await cD.close()
    }

    function BD(DD) {
      return (0, ID.m)((0, pD.h)(DD))
    }
  },
  35872: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => BD
    });
    var ID = cD(16),
      pD = cD(90),
      iD = cD(36),
      fD = cD(712),
      bD = cD(3255),
      QD = cD(6409);
    const wD = "shaderPackListingCheckedAt",
      SD = 36e5;

    function BD() {
      const {
        canUseShaderPacks: DD
      } = pD.featureFlags.settings;
      var CD, BD;
      (0, bD.o)(DD) && !(0, bD.k)(DD) && (CD = iD.h.getItem(wD), BD = Date.now(), "number" !== typeof CD || BD < CD || BD - CD >= SD) && (0, fD.e)((() => {
        (async function() {
          if ("landingPage" !== ID.d.get("gameState")) return;
          const DD = await (0, QD.d)();
          if (void 0 === (null === DD || void 0 === DD ? void 0 : DD.listing)) return;
          iD.h.setItem(wD, Date.now());
          const {
            followListingUpdates: CD
          } = await Promise.all([cD.e(74), cD.e(131), cD.e(123)]).then((() => cD(40358)));
          await CD(DD, DD.listing) || iD.h.removeItem(wD)
        })().catch((DD => {
          console.error("Failed to check the shader pack listing for an update", DD)
        }))
      }))
    }
  },
  35906: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD
    });
    var ID = cD(312),
      pD = cD(16),
      iD = cD(35908),
      fD = cD(1627),
      bD = cD(1961);

    function QD(DD, CD) {
      var cD, QD, wD;
      if (!pD.d.get("isKeydownEnabled") || DD.repeat) return;
      const SD = DD.code;
      "Escape" === DD.key ? (0, fD.k)(DD) : null !== (cD = bD.q.OpenSettings) && void 0 !== cD && cD.includes(SD) ? (0, fD.y)(DD, ID.q.SETTINGS) : null !== (QD = bD.q.OpenCharacterCustomization) && void 0 !== QD && QD.includes(SD) ? (0, iD.d)() || (0, fD.y)(DD, ID.q.CUSTOMISATION, CD()) : null !== (wD = bD.q.ShowDebugOverlay) && void 0 !== wD && wD.includes(SD) && pD.d.set({
        showDebugOverlay: !pD.d.get("showDebugOverlay")
      })
    }
  },
  35875: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => JD
    });
    var ID = cD(624),
      pD = cD(1227),
      iD = cD(162);
    const fD = "cf-";

    function bD(DD) {
      return `${fD}${DD}`
    }

    function QD(DD) {
      return DD.startsWith(bD("game-server-"))
    }

    function wD(DD) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(DD)
    }
    var SD = cD(1243),
      BD = cD(1221),
      yD = cD(20),
      MD = cD(1750),
      tD = cD(1774),
      ZD = cD(2761),
      oD = cD(1305),
      vD = cD(1317),
      ND = cD(1497),
      gD = cD(1199),
      XD = cD(35879),
      mD = cD(36),
      nD = cD(120),
      OD = cD(1796);
    const PD = Date.UTC(2026, 10, 25),
      HD = 1728e5,
      UD = "gameServerRoute";
    async function xD(DD) {
      if (!DD.ok) {
        const CD = await DD.text().catch((() => ""));
        return 403 === DD.status && "ipv6_unsupported" === CD ? "ipv6Refused" : "other"
      }
      const CD = await DD.json().catch((() => null));
      return "object" === typeof CD && null !== CD && Number.isFinite(CD.version) ? "ours" : "other"
    }
    const qD = new class {
      constructor(DD) {
        this.deps = DD
      }
      hostFor(DD) {
        return this.deps.enabled && wD(DD) && "cloudflare" === this.heldRoute() ? bD(DD) : DD
      }
      async afterJoinFailed(DD, CD) {
        var cD;
        if (!this.deps.enabled || void 0 === CD) return !1;
        const ID = new URL(DD).hostname,
          pD = this.stored();
        if (QD(ID)) {
          var iD;
          if (this.deps.Nt("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === pD || void 0 === pD ? void 0 : pD.route) || pD.aliasFailedOnce || "ours" !== (await this.probeHost(ID)).answer) this.store({
            arm: null !== (iD = null === pD || void 0 === pD ? void 0 : pD.arm) && void 0 !== iD ? iD : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...pD,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!wD(ID) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: fD,
          cfMs: bD
        } = await this.check(ID);
        if ("blocked" !== fD) return this.deps.Nt("game_server_route", fD, bD), !1;
        const SD = this.deps.now() >= PD ? "cloudflare" : null !== (cD = null === pD || void 0 === pD ? void 0 : pD.arm) && void 0 !== cD ? cD : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === SD ? (this.store({
          arm: SD,
          route: "direct",
          until: Math.min(this.deps.now() + HD, PD)
        }), this.deps.Nt("game_server_route", "blocked_holdout", bD), !1) : (this.store({
          arm: SD,
          route: "cloudflare",
          until: this.deps.now() + HD
        }), this.deps.Nt("game_server_route", "blocked", bD), !0)
      }
      afterJoined(DD) {
        if (!this.deps.enabled) return;
        const CD = new URL(DD).hostname,
          cD = QD(CD);
        if (cD) this.deps.Nt("game_server_route", "cf_join", 0);
        else if (!wD(CD) || this.deps.random() >= .01) return;
        const ID = cD ? CD.slice(fD.length) : CD;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(ID, "direct", "direct_failed"), await this.reportRtt(bD(ID), "cf", "cf_failed")
        }))
      }
      async check(DD) {
        const CD = this.probeHost(bD(DD));
        if ("none" !== (await this.probeHost(DD)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: cD,
          ms: ID
        } = await CD;
        return "ours" !== cD && "ipv6Refused" !== cD ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(DD)).answer ? {
          outcome: "direct_reachable",
          cfMs: ID
        } : {
          outcome: "ipv6Refused" === cD ? "blocked_ipv6" : "blocked",
          cfMs: ID
        }
      }
      async reportRtt(DD, CD, cD) {
        const ID = "ours" === (await this.probeHost(DD)).answer ? await this.probeHost(DD) : null;
        "ours" === (null === ID || void 0 === ID ? void 0 : ID.answer) ? this.deps.Nt("game_server_rtt", CD, ID.ms): this.deps.Nt("game_server_rtt", cD, 0)
      }
      probeHost(DD) {
        return this.deps.probe(`https://${DD}/version`, 8e3)
      }
      stored() {
        return function(DD) {
          if ("object" !== typeof DD || null === DD) return null;
          const {
            arm: CD,
            route: cD,
            until: ID,
            aliasFailedOnce: pD
          } = DD;
          return "cloudflare" !== CD && "holdout" !== CD || "cloudflare" !== cD && "direct" !== cD || "number" !== typeof ID ? null : !0 === pD ? {
            arm: CD,
            route: cD,
            until: ID,
            aliasFailedOnce: pD
          } : {
            arm: CD,
            route: cD,
            until: ID
          }
        }(this.deps.storage.getItem(UD))
      }
      heldRoute() {
        const DD = this.stored();
        return null !== DD && DD.until > this.deps.now() ? DD.route : null
      }
      store(DD) {
        this.deps.storage.setItem(UD, DD)
      }
    }({
      storage: mD.h,
      probe: async function(DD, CD) {
        const cD = performance.now(),
          ID = await (0, OD.n)(DD, {
            cache: "no-store"
          }, CD, (async DD => {
            const CD = Math.round(performance.now() - cD);
            return {
              answer: await xD(DD),
              ms: CD
            }
          }));
        return null !== ID && void 0 !== ID ? ID : {
          answer: "none",
          ms: 0
        }
      },
      Nt: MD.v,
      enabled: !(0, nD.c)(),
      now: Date.now,
      random: Math.random,
      delay: DD => new Promise((CD => {
        setTimeout(CD, DD)
      }))
    });

    function JD(DD) {
      return async (CD, cD, fD, bD, wD) => {
        let BD;
        if ((0, ID.C)(fD)) {
          if (wD.aborted) return KD();
          const DD = await aD(CD, cD, bD);
          if (wD.aborted || ZD.g.matchmakingEnded(DD.isError() ? null : performance.now()), DD.isError()) {
            const CD = DD.asError();
            return console.log("Join room did not succeed, reason:", CD.message), CD.forward()
          }
          BD = DD.getValue()
        } else {
          ZD.g.skipPlayWait();
          const DD = VD(fD.replace("https://", "").replace("http://", ""));
          if (DD.isError()) return DD.asError().forward();
          BD = {
            endpoint: DD.getValue(),
            gameNameWithVariation: cD,
            lobbyName: CD instanceof pD.e ? CD.getLobbyName() : CD
          }
        }
        if (wD.aborted) return KD();
        console.log(`Connecting to ${BD.gameNameWithVariation} in lobby ${BD.lobbyName} on game server ${BD.endpoint}`), yD.i.Uo("matchmakeAndPlayStepCompleted", {
          step: iD.o.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, MD.k)(), tD.d.markGameLoadStart(), (0, vD.o)({
          websocketUrl: BD.endpoint,
          gameNameWithVariation: BD.gameNameWithVariation,
          lobbyName: BD.lobbyName
        }), yD.i.Uo("loadingScreenState", "loadingPage:loadingGame");
        const ND = async () => {
          const DD = await async function(DD, CD, cD, ID) {
            const pD = await aD(DD, CD, cD);
            if (!pD.isError() && !ID.aborted) {
              const {
                endpoint: DD,
                gameNameWithVariation: CD,
                lobbyName: cD
              } = pD.getValue();
              (0, vD.o)({
                websocketUrl: DD,
                gameNameWithVariation: CD,
                lobbyName: cD
              })
            }
            return pD
          }(CD, cD, bD, wD);
          return DD.isError() || (BD = DD.getValue()), DD
        }, gD = !(0, ID.C)(fD), XD = () => DD({
          place: BD,
          userContext: bD,
          direct: gD,
          rematch: ND
        }, wD);
        let mD = await XD();
        const nD = mD.isError() && !0 === mD.asError().debugResult.rematch;
        if (mD.isError() && !gD && !wD.aborted && (nD || await qD.afterJoinFailed(BD.endpoint, mD.asError().debugResult.gameServerUnreachable))) {
          if (wD.aborted) return KD();
          console.log("Matchmaking again");
          const DD = await ND();
          if (DD.isError()) return DD.asError().forward();
          if (wD.aborted) return KD();
          mD = await XD(), !mD.isError() || nD && !QD(new URL(BD.endpoint).hostname) || await qD.afterJoinFailed(BD.endpoint, mD.asError().debugResult.gameServerUnreachable)
        }
        return mD.isError() ? mD.asError().forward() : (qD.afterJoined(BD.endpoint), (0, oD.N)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), SD.e.value({
          gameNameWithVariation: BD.gameNameWithVariation,
          lobbyName: BD.lobbyName,
          addLobbyToRecentlyPlayed: !(CD instanceof pD.e)
        }))
      }
    }

    function KD() {
      return SD.e.errorWithCode("Left the game while it loaded", iD.o.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        tc: !0
      })
    }
    async function aD(DD, CD, cD) {
      return (0, ID.C)(DD) || DD instanceof pD.e || !(DD.length > BD.Q) ? await ND.c.matchmakePlayer(cD, DD, CD, (0, XD.d)()).then((DD => {
        if (!1 === DD.succeeded) return SD.e.errorWithCode(DD.failReason, iD.o.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: CD,
          lobbyName: cD,
          gameNameWithVariation: ID
        } = DD, pD = VD(qD.hostFor(CD));
        return pD.isError() ? pD.asError().forward() : SD.e.value({
          endpoint: pD.getValue(),
          gameNameWithVariation: ID,
          lobbyName: cD
        })
      })).catch((DD => (console.error("Bad response from the matchmaking server:", DD), SD.e.errorWithCode(DD.toString(), iD.o.REQUEST_TO_MATCHMAKING, {
        error: DD,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", DD), SD.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", iD.o.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function VD(DD) {
      const CD = gD.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(DD);
      return CD.isError() ? SD.e.errorWithCode(CD.asError().message, iD.o.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : SD.e.value(CD.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, vD.i)("/")
    }
  },
  8944: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      g: () => yD
    });
    var ID = cD(16),
      pD = cD(1664),
      iD = cD(36),
      fD = cD(1340),
      bD = cD(3474),
      QD = cD(1471),
      wD = cD(1388);
    const SD = 2592e5,
      BD = "notificationOptInLastPromptedAt";
    async function yD() {
      var DD;
      const CD = await MD();
      if (null === CD) return;
      const cD = null !== (DD = iD.h.getItem(BD)) && void 0 !== DD ? DD : 0;
      if (Date.now() - cD < SD) return;
      if ((0, wD.e)()) return;
      const ID = await fD.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: pD.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== ID && (iD.h.setItem(BD, Date.now()), (0, QD.reportAnalyticsClick)({
        id: !0 === ID ? "push.allow" : "push.deny",
        value: pD.b.supports("notifications") ? "app" : "browser"
      }), !0 === ID && CD().catch((DD => {
        console.error("Failed to ask for push notifications:", DD)
      })))
    }
    async function MD() {
      return await pD.b.ready, pD.b.supports("notifications") ? ID.d.get("mobilePushNotificationsCanAsk") ? async () => {
        pD.b.request("notifications.requestPermission", {}).then((DD => {
          let {
            canAsk: CD
          } = DD;
          ID.d.set({
            mobilePushNotificationsCanAsk: CD
          })
        }), (DD => {
          console.error("The app couldn't ask for push notifications:", DD)
        }))
      }: null: await bD.c.canAsk() ? () => bD.c.requestPermission() : null
    }
  },
  35883: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      f: () => SD,
      g: () => MD,
      i: () => BD
    });
    var ID = cD(326),
      pD = cD(656),
      iD = cD(668),
      fD = cD(36);
    const bD = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      QD = "playSessionGameNameWithVariation",
      wD = "wasMatchmakePlayer";

    function SD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j;
      (0, iD.j)(DD, bD)
    }

    function BD() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).setItem(wD, !0)
    }

    function yD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j;
      return (0, iD.e)(DD, bD)
    }

    function MD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fD.j;
      const cD = (0, iD.e)(CD, bD),
        SD = function(DD) {
          const CD = DD.getItem(QD);
          return "string" !== typeof CD ? null : CD
        }(CD),
        BD = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).getItem(wD)
        }(CD);
      let yD;
      return yD = null !== cD && null !== SD && (0, iD.f)(CD, bD) && function(DD, CD, cD) {
          const pD = (0, ID.Vb)(DD),
            iD = (0, ID.Vb)(CD),
            fD = (0, ID.Qb)(DD),
            bD = (0, ID.Qb)(CD);
          return !(pD !== iD || !cD) || pD === iD && fD === bD
        }(SD, DD, BD) ? cD : (0, pD.b)(), (0, iD.k)(CD, bD, yD), CD.setItem(QD, DD),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).removeItem(wD)
        }(CD), yD
    }
  },
  35879: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ND,
      h: () => gD
    });
    var ID = cD(1011),
      pD = cD(630),
      iD = cD(326),
      fD = cD(1020),
      bD = cD(646),
      QD = cD(684),
      wD = cD(4321),
      SD = cD(90),
      BD = cD(120),
      yD = cD(1701),
      MD = cD(107),
      tD = cD(35883),
      ZD = cD(36),
      oD = cD(659),
      vD = cD(35888);

    function ND() {
      var DD, CD;
      return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (CD = navigator.language) && void 0 !== CD ? CD : "none"], "en-Gb"]
    }

    function gD(DD, CD, cD, gD, XD) {
      const mD = (0, ID.m)(CD) ? (0, ID.t)(CD) : null,
        nD = {
          cookies: (0, yD.getAllCookiesForGameNameWithVariation)(CD),
          isMobile: (0, SD.isMobile)(),
          isUsingCustomGameTexturePack: null !== mD && XD(mD),
          generalCookies: {
            joinDiscord: !!ZD.h.getItem("DiscordPressed"),
            newGo: wD.e,
            ...DD.getMetricsCookies(),
            trafficCode: gD,
            compliance: SD.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, SD.getBrowserName)(),
            version: (0, SD.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, SD.getPlatformType)(),
            deviceType: (0, MD.d)()
          },
          isLoggedIn: DD.isLoggedIn(),
          lobbyName: cD,
          languages: ND(),
          version: pD.c,
          siteUsed: BD.p,
          subsiteUsed: BD.v,
          playSessionId: (0, tD.g)(CD),
          visitSessionId: (0, oD.b)(),
          clientReason: bD.g.reason,
          budgetBasis: (0, vD.f)(),
          ...null !== QD.q && {
            diagClaim: QD.q.claimId
          }
        };
      return null !== mD && (0, iD.Fc)(mD) ? (nD.lobbyName = (0, ID.j)(mD, (0, ID.q)(CD), cD), {
        roomName: `classic_${fD.g}`,
        joinOptions: nD
      }) : {
        roomName: CD,
        joinOptions: nD
      }
    }
  },
  35981: (DD, CD, cD) => {
    function ID(DD, CD) {
      for (let cD = 0; cD < DD.length; cD++)
        if (DD[cD].identifier === CD) return DD[cD];
      return null
    }

    function pD(DD, CD) {
      return null !== ID(DD, CD)
    }
    cD.d(CD, {
      e: () => ID,
      h: () => pD
    })
  },
  36240: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => lD,
      D: () => LD,
      F: () => zD,
      J: () => TD,
      e: () => QD,
      f: () => qD,
      j: () => bD,
      l: () => VD,
      m: () => UD,
      n: () => nD,
      o: () => aD,
      s: () => KD,
      u: () => HD,
      y: () => jD
    });
    var ID = cD(36);
    const pD = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      iD = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      fD = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      bD = iD.filter((DD => "docsButton" !== DD)),
      QD = fD.filter((DD => "aiHelperButton" !== DD)),
      wD = "codeEditorTutorials",
      SD = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      BD = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let yD = null,
      MD = null;
    const tD = new Set,
      ZD = new Set;
    let oD = null;
    const vD = new Set,
      ND = new Set;

    function gD() {
      ND.forEach((DD => {
        DD()
      }))
    }

    function XD() {
      if (!yD) {
        const DD = ID.h.getItem(wD);
        yD = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof DD && null !== DD ? DD : {}
        }
      }
      return yD
    }

    function mD(DD) {
      const CD = XD();
      CD[DD] || (yD = {
        ...CD,
        [DD]: !0
      }, ID.h.setItem(wD, yD))
    }

    function nD(DD) {
      return "docsOverview" === DD ? iD : "aiHelperOverview" === DD ? fD : MD ? pD[MD] : []
    }

    function OD(DD) {
      return ("worldCodeButton" !== DD || !XD().worldCodeIntroShown) && !vD.has(DD)
    }

    function PD(DD) {
      var CD;
      return (null === (CD = oD) || void 0 === CD ? void 0 : CD.name) === DD ? oD.stepsDone : tD
    }

    function HD(DD, CD) {
      if (! function(DD) {
          return oD ? oD.name === DD : "welcome" === DD
        }(DD) || !OD(CD) || PD(DD).has(CD)) return !1;
      if (oD) return !0;
      const cD = SD[CD];
      return cD ? !XD()[cD] || ZD.has(CD) : !XD()[BD[DD]]
    }

    function UD(DD) {
      var CD;
      return null !== (CD = nD(DD).find((CD => HD(DD, CD)))) && void 0 !== CD ? CD : null
    }

    function xD(DD) {
      var CD;
      mD(BD[DD]), (null === (CD = oD) || void 0 === CD ? void 0 : CD.name) === DD && (oD = null)
    }

    function qD(DD) {
      const CD = (oD ? [oD.name] : ["welcome", "docsOverview"]).find((CD => UD(CD) === DD));
      if (!CD) return;
      PD(CD).add(DD);
      const cD = SD[DD];
      cD && (mD(cD), oD || ZD.add(DD)), null === UD(CD) && xD(CD), gD()
    }

    function JD(DD, CD) {
      const cD = nD(DD),
        ID = PD(DD);
      for (let pD = cD.indexOf(CD) - 1; pD >= 0; pD--)
        if (ID.has(cD[pD]) && OD(cD[pD])) return cD[pD];
      return null
    }

    function KD(DD, CD) {
      return null !== JD(DD, CD)
    }

    function aD(DD, CD) {
      const cD = JD(DD, CD);
      cD && (PD(DD).delete(cD), gD())
    }

    function VD(DD) {
      xD(DD), "welcome" === DD && nD("welcome").forEach((DD => {
        const CD = SD[DD];
        CD && mD(CD)
      })), gD()
    }

    function zD(DD) {
      oD = {
        name: DD,
        stepsDone: new Set
      }, gD()
    }

    function jD() {
      (oD || 0 !== tD.size || 0 !== ZD.size) && (oD = null, tD.clear(), ZD.clear(), gD())
    }

    function lD(DD, CD) {
      const cD = CD ? DD : MD === DD ? null : MD;
      cD !== MD && (MD = cD, gD())
    }

    function LD(DD, CD) {
      vD.has(DD) === CD && (CD ? vD.delete(DD) : vD.add(DD), gD())
    }

    function TD(DD) {
      return ND.add(DD), () => {
        ND.delete(DD)
      }
    }
  },
  35903: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      g: () => pD,
      k: () => iD
    });
    const ID = 1024,
      pD = 1024 * ID;

    function iD(DD) {
      return (DD / pD).toFixed(1)
    }
  },
  35895: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      g: () => bD,
      k: () => fD,
      m: () => QD,
      p: () => wD
    });
    var ID = cD(194);
    const pD = 32 * cD(35903).g,
      iD = 6144,
      fD = 4608,
      bD = 512;

    function QD(DD) {
      return Math.floor(pD * DD / iD)
    }

    function wD(DD) {
      const CD = DD - Math.floor(DD / 6);
      let cD = ID.h.maxChunkHorizAddDistance,
        pD = ID.h.maxChunkVertAddDistance;
      if (SD(cD + 1, pD + 1) <= CD) return null;
      for (; SD(cD + 1, pD + 1) > CD && (cD > 0 || pD > 0);) cD > pD ? cD-- : pD--;
      return {
        horizontal: cD,
        vertical: pD
      }
    }

    function SD(DD, CD) {
      const cD = Math.max(DD, CD);
      let ID = 0;
      for (let pD = -cD; pD <= cD; pD++)
        for (let iD = -cD; iD <= cD; iD++)
          for (let fD = -cD; fD <= cD; fD++) BD(DD, CD, pD, iD, fD) && ID++;
      return ID
    }

    function BD(DD, CD, cD, ID, pD) {
      const iD = cD * cD + pD * pD;
      return DD === CD ? iD + ID * ID <= DD * DD : DD > CD ? Math.abs(ID) <= CD && iD + ID * ID <= DD * DD : iD <= DD * DD && iD + ID * ID <= CD * CD
    }
  },
  35888: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => nD,
      f: () => mD,
      i: () => XD
    });
    var ID = cD(194),
      pD = cD(90),
      iD = cD(2735),
      fD = cD(4197),
      bD = cD(651),
      QD = cD(35895);
    const wD = 1048576,
      SD = 1024 * wD,
      BD = 400 * wD,
      yD = 147456,
      MD = .5,
      tD = 1.5 * SD,
      ZD = 768 * wD;

    function oD(DD) {
      return BD + DD * yD
    }

    function vD(DD, CD, cD) {
      var pD, fD;
      let {
        footprintBytes: bD,
        basis: wD,
        namesLimit: vD
      } = function(DD) {
        const {
          os: CD,
          deviceMemory: cD
        } = DD;
        if ("ios" === CD) switch ((0, iD.h)(DD)) {
          case "ipad_m":
            return {
              footprintBytes: oD(QD.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: ZD, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: tD, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: ZD, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof cD && Number.isFinite(cD) && cD > 0 ? {
          footprintBytes: cD * SD * MD,
          basis: `memory-${cD}`,
          namesLimit: !0
        } : "android" === CD ? {
          footprintBytes: ZD,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: oD(QD.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(DD);
      if (cD) {
        const DD = Math.min(bD, oD(QD.e));
        bD = BD + Math.max(0, DD - BD) / 2, wD += "+killed", vD = !0
      }
      null !== CD && oD(CD) < bD && (bD = oD(CD), wD += "+learned", vD = !0);
      const ND = function(DD) {
          const CD = Math.floor((DD - BD) / yD);
          return Math.min(QD.e, Math.max(QD.g, CD))
        }(bD),
        gD = (0, QD.p)(ND);
      return {
        footprintBytes: bD,
        shedFootprintBytes: vD ? Math.max(bD, oD(ND)) : null,
        chunkCap: ND,
        maxHorizDistance: null !== (pD = null === gD || void 0 === gD ? void 0 : gD.horizontal) && void 0 !== pD ? pD : ID.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (fD = null === gD || void 0 === gD ? void 0 : gD.vertical) && void 0 !== fD ? fD : ID.h.maxChunkVertAddDistance,
        basis: wD
      }
    }
    let ND = null;

    function gD() {
      return vD({
        os: (0, pD.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, iD.i)()
      }, (0, fD.e)(), (0, bD.J)("wasm").length > 0)
    }

    function XD() {
      return ND ??= gD(), ND
    }

    function mD() {
      var DD;
      return (null !== (DD = ND) && void 0 !== DD ? DD : gD()).basis
    }

    function nD(DD, CD) {
      return DD.setChunkCap(CD.chunkCap)
    }
  },
  35991: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD,
      e: () => yD,
      h: () => vD,
      l: () => wD
    });
    var ID = cD(16),
      pD = cD(2338),
      iD = cD(2343),
      fD = cD(2347),
      bD = cD(2398),
      QD = cD(20);

    function wD(DD, CD) {
      return (!(0, fD.c)() || 0 === DD && 0 === CD) && (0, iD.u)(pD.k.Joystick, 0, DD, CD, 0)
    }
    const SD = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function BD(DD) {
      return DD.classList.contains("TouchKeyHit") && MD() ? null : DD.firstElementChild
    }

    function yD(DD) {
      return DD.classList.contains("TouchKeyHit") && !DD.classList.contains("CanvasZone") ? {
        whole: !MD(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: tD(BD(DD))
      }
    }

    function MD() {
      return document.documentElement.classList.contains(bD.o)
    }

    function tD(DD) {
      return !(DD instanceof HTMLElement) || DD.offsetWidth <= 0 || DD.offsetHeight <= 0 ? null : {
        width: DD.offsetWidth,
        height: DD.offsetHeight
      }
    }

    function ZD(DD, CD) {
      const cD = DD => Math.min(65535, Math.round(4 * DD));
      return (cD(DD) | cD(CD) << 16) >>> 0
    }

    function oD(DD) {
      return {
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2,
        radius: Math.min(DD.width, DD.height) / 2
      }
    }
    const vD = new class {
      constructor(DD) {
        this.write = DD, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        CD ? this.elements.set(DD, {
          element: CD,
          hidden: cD
        }) : this.elements.delete(DD), this.measureOne(DD)
      }
      measure() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = DD.left, this.canvasTop = DD.top;
        for (const CD of this.elements.keys()) this.measureOne(CD)
      }
      hitZone(DD, CD) {
        let cD = null,
          ID = 1;
        for (const pD of this.elements.keys()) {
          const iD = this.shown(pD);
          if (!iD) continue;
          const {
            rect: fD,
            element: bD
          } = iD, QD = oD(fD), wD = Math.max(0, fD.width / 2 - QD.radius), SD = Math.max(0, fD.height / 2 - QD.radius), yD = Math.max(0, Math.abs(DD - QD.x) - wD), MD = Math.max(0, Math.abs(CD - QD.y) - SD), ZD = bD.firstElementChild;
          let vD = Math.hypot(yD, MD) / QD.radius;
          const ND = tD(BD(bD));
          ND && (vD = Math.min(vD, Math.max(2 * Math.abs(DD - QD.x) / ND.width, 2 * Math.abs(CD - QD.y) / ND.height))), vD < ID && (cD = {
            code: pD,
            element: bD,
            key: ZD,
            ...QD
          }, ID = vD)
        }
        return cD
      }
      measureOne(DD) {
        const CD = this.shown(DD);
        if (!CD) return void this.write(pD.k.TouchZone, DD, 0, 0, 0);
        const {
          rect: cD,
          element: ID
        } = CD, iD = oD(cD);
        this.write(pD.k.TouchZone, DD, iD.x - this.canvasLeft, iD.y - this.canvasTop, ZD(cD.width, cD.height));
        const fD = tD(BD(ID));
        this.write(pD.k.TouchZone, 256 | DD, 0, 0, fD ? ZD(fD.width, fD.height) : 0)
      }
      shown(DD) {
        const CD = this.elements.get(DD),
          cD = ID.d.get("worldPanelHud");
        if (!CD || CD.hidden || "none" === cD) return null;
        const pD = CD.element.getBoundingClientRect();
        return pD.width <= 0 || pD.height <= 0 ? null : {
          rect: pD,
          element: CD.element
        }
      }
    }(iD.u);
    (0, QD.k)(bD.g, (() => {
      vD.measure()
    }))
  },
  36202: (DD, CD, cD) => {
    function ID(DD) {
      return "fetch" === DD || "timeout" === DD || "integrity" === DD ? "download" : "browser"
    }
    cD.d(CD, {
      c: () => pD,
      d: () => fD,
      h: () => QD,
      l: () => bD,
      o: () => ID,
      r: () => iD
    });
    const pD = "https://discord.gg/playbloxd";

    function iD(DD) {
      return "download" === DD ? {
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

    function fD(DD, CD) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: CD ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: DD.code
        },
        discordLink: CD,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function bD() {
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

    function QD(DD, CD, cD) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: cD ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: DD.reason
        },
        discordLink: null === DD.name,
        confirm: CD ? "general:reconnect" : DD.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36252: (DD, CD, cD) => {
    function ID(DD, CD) {
      return null === DD || null === CD ? DD === CD : DD[0] === CD[0] && DD[1] === CD[1] && DD[2] === CD[2]
    }

    function pD(DD) {
      return [DD[0] + .5, DD[1] + .5, DD[2] + .5]
    }
    cD.d(CD, {
      b: () => pD,
      f: () => ID
    })
  },
  36208: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      e: () => bD
    });
    const ID = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      pD = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      iD = {
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
      fD = {
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
      bD = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: ID.files,
          dependencies: ID.dependencies,
          bundledSource: ID.bundledSource,
          types: ID.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: pD.files,
          dependencies: pD.dependencies,
          bundledSource: pD.bundledSource,
          types: pD.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: iD.files,
          dependencies: iD.dependencies,
          bundledSource: iD.bundledSource,
          types: iD.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: fD.files,
          dependencies: fD.dependencies,
          bundledSource: fD.bundledSource,
          types: fD.types
        }
      };

    function QD(DD) {
      const CD = [],
        cD = new Set,
        ID = DD => {
          if (cD.has(DD)) return;
          const pD = bD[DD];
          if (pD) {
            cD.add(DD);
            for (const DD of pD.dependencies) ID(DD);
            CD.push(DD)
          }
        };
      for (const pD of DD) ID(pD);
      return CD
    }
  },
  36213: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      h: () => bD,
      i: () => fD,
      m: () => iD,
      n: () => wD,
      p: () => SD,
      t: () => tD,
      v: () => MD,
      w: () => yD
    });
    var ID = cD(1240);
    const pD = ["quickjs", "ses"];

    function iD(DD) {
      return pD.includes(DD)
    }

    function fD(DD) {
      return DD === ID.g || DD === ID.i
    }

    function bD(DD, CD) {
      return DD === ID.g && CD === ID.i || DD === ID.i && CD === ID.g
    }

    function QD(DD) {
      const CD = ID.i in DD,
        cD = ID.g in DD;
      return CD && cD ? null : CD ? ID.i : cD ? ID.g : null
    }

    function wD(DD, CD, cD) {
      const ID = `${CD}/`;
      return DD.filter((DD => DD.startsWith(ID))).map((DD => [DD, `${cD}/${DD.slice(ID.length)}`]))
    }

    function SD(DD, CD) {
      let cD = 0;
      for (const [ID, pD] of Object.entries(DD)) ID !== CD && (cD += pD.length);
      return cD
    }
    const BD = "@plugins/";

    function yD(DD) {
      return `${BD}${DD}`
    }

    function MD(DD, CD) {
      return `/node_modules/@plugins/${DD}/${CD}`
    }

    function tD(DD) {
      if (!DD.startsWith(BD)) return null;
      const CD = DD.slice(BD.length);
      return function(DD) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(DD)
      }(CD) ? CD : null
    }
  },
  36223: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      f: () => pD,
      i: () => fD,
      m: () => QD,
      o: () => iD
    });
    var ID = cD(36216);
    const pD = 5,
      iD = "[SCHEMATIC]",
      fD = 1024e4;

    function bD(DD) {
      return DD.endsWith(".bloxdschem") && (0, ID.q)(DD.slice(0, -11) + ".ts") && DD.length <= 64
    }

    function QD(DD) {
      return Object.fromEntries(Object.keys(DD).map((DD => [DD, iD])))
    }
  },
  36216: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD,
      g: () => yD,
      i: () => bD,
      k: () => QD,
      n: () => wD,
      q: () => BD,
      r: () => SD,
      u: () => fD
    });
    var ID = cD(1240);
    let pD = function(DD) {
        return DD[DD.Join = 0] = "Join", DD[DD.Leave = 1] = "Leave", DD[DD.Push = 2] = "Push", DD[DD.Cursor = 3] = "Cursor", DD[DD.Submit = 4] = "Submit", DD[DD.ReloadAsVariation = 5] = "ReloadAsVariation", DD[DD.CreateFile = 6] = "CreateFile", DD[DD.RenameFile = 7] = "RenameFile", DD[DD.DeleteFile = 8] = "DeleteFile", DD[DD.SetEngine = 9] = "SetEngine", DD[DD.RenameFolder = 10] = "RenameFolder", DD
      }({}),
      iD = function(DD) {
        return DD[DD.Joined = 0] = "Joined", DD[DD.Updates = 1] = "Updates", DD[DD.Presence = 2] = "Presence", DD[DD.RemoteCursor = 3] = "RemoteCursor", DD[DD.ForceClose = 4] = "ForceClose", DD[DD.LobbyFilesChanged = 5] = "LobbyFilesChanged", DD[DD.EngineSettings = 6] = "EngineSettings", DD
      }({});

    function fD(DD) {
      return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
    }

    function bD(DD) {
      if ("lobby" === DD) return {
        kind: "lobby",
        path: ID.g
      };
      if (DD.startsWith("lobby:")) {
        const CD = DD.slice(6);
        return BD(CD) ? {
          kind: "lobby",
          path: CD
        } : null
      }
      const CD = DD.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return CD ? {
        kind: "codeBlock",
        pos: [parseInt(CD[1]), parseInt(CD[2]), parseInt(CD[3])]
      } : null
    }

    function QD(DD) {
      return DD.endsWith(".d.ts")
    }

    function wD(DD) {
      return DD.endsWith(".ts") && !QD(DD)
    }
    const SD = 64;

    function BD(DD) {
      if (!DD || DD !== DD.trim()) return !1;
      if (DD.length > SD) return !1;
      if (DD.startsWith("/") || DD.includes("\\") || DD.includes("\0")) return !1;
      if (!QD(DD) && !wD(DD) && ! function(DD) {
          return DD.endsWith(".js") && !DD.endsWith(".min.js") && !DD.endsWith(".bundle.js")
        }(DD)) return !1;
      const CD = DD.split("/");
      for (const cD of CD)
        if ("" === cD || "." === cD || ".." === cD) return !1;
      return !0
    }
    const yD = 14e3
  },
  4615: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      h: () => ID,
      k: () => iD,
      l: () => QD,
      p: () => fD
    });
    const ID = ["sine", "triangle", "square", "sawtooth"],
      pD = 55,
      iD = {
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

    function fD(DD) {
      return "string" !== typeof DD ? DD : Object.hasOwn(iD, DD) ? iD[DD] : null
    }

    function bD(DD, CD, cD) {
      return Math.min(cD, Math.max(CD, DD))
    }

    function QD(DD) {
      const CD = bD(DD.durationMs, 10, 500),
        cD = bD(DD.attackMs, 0, CD),
        {
          intonation: pD
        } = DD;
      return {
        waveform: ID.includes(DD.waveform) ? DD.waveform : "sine",
        pitchHz: bD(DD.pitchHz, 20, 4e3),
        glideSemitones: bD(DD.glideSemitones, -24, 24),
        durationMs: CD,
        attackMs: cD,
        releaseMs: bD(DD.releaseMs, 0, CD - cD),
        lowpassHz: null === DD.lowpassHz ? null : bD(DD.lowpassHz, 20, 2e4),
        volume: bD(DD.volume, 0, 2),
        intonation: {
          variationSemitones: bD(pD.variationSemitones, 0, 6),
          declineSemitones: bD(pD.declineSemitones, 0, 12),
          questionRiseSemitones: bD(pD.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bD(pD.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bD(DD.syllableMs, 25, 200)
      }
    }
  },
  9889: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18008: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19881: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19890: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19896: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19904: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19906: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);