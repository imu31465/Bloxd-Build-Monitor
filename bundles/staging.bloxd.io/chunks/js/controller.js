export const id = 28;
export const ids = [28];
export const modules = {
  8356: (pp, ip, cp) => {
    var Op = {
      "./nintendo/A.svg": 8358,
      "./nintendo/B.svg": 8366,
      "./nintendo/Down.svg": 8374,
      "./nintendo/Home.svg": 8378,
      "./nintendo/LB.svg": 8382,
      "./nintendo/LS.svg": 8389,
      "./nintendo/LT.svg": 8394,
      "./nintendo/Left.svg": 8399,
      "./nintendo/LeftStick.svg": 8402,
      "./nintendo/Menu.svg": 8408,
      "./nintendo/RB.svg": 8411,
      "./nintendo/RS.svg": 8414,
      "./nintendo/RT.svg": 8420,
      "./nintendo/Right.svg": 8427,
      "./nintendo/RightStick.svg": 8429,
      "./nintendo/Up.svg": 8435,
      "./nintendo/View.svg": 8439,
      "./nintendo/X.svg": 8442,
      "./nintendo/Y.svg": 8448,
      "./playstation/A.svg": 8451,
      "./playstation/B.svg": 8454,
      "./playstation/Down.svg": 8462,
      "./playstation/Home.svg": 8469,
      "./playstation/LB.svg": 8478,
      "./playstation/LS.svg": 8484,
      "./playstation/LT.svg": 8492,
      "./playstation/Left.svg": 8501,
      "./playstation/LeftStick.svg": 8506,
      "./playstation/Menu.svg": 8510,
      "./playstation/RB.svg": 8514,
      "./playstation/RS.svg": 8520,
      "./playstation/RT.svg": 8525,
      "./playstation/Right.svg": 8533,
      "./playstation/RightStick.svg": 8542,
      "./playstation/Up.svg": 8549,
      "./playstation/View.svg": 8556,
      "./playstation/X.svg": 8562,
      "./playstation/Y.svg": 8571,
      "./steamdeck/A.svg": 8577,
      "./steamdeck/B.svg": 8584,
      "./steamdeck/Down.svg": 8586,
      "./steamdeck/Home.svg": 8595,
      "./steamdeck/LB.svg": 8598,
      "./steamdeck/LS.svg": 8603,
      "./steamdeck/LT.svg": 8608,
      "./steamdeck/Left.svg": 8616,
      "./steamdeck/LeftStick.svg": 8619,
      "./steamdeck/Menu.svg": 8628,
      "./steamdeck/RB.svg": 8636,
      "./steamdeck/RS.svg": 8643,
      "./steamdeck/RT.svg": 8651,
      "./steamdeck/Right.svg": 8657,
      "./steamdeck/RightStick.svg": 8664,
      "./steamdeck/Up.svg": 8666,
      "./steamdeck/View.svg": 8668,
      "./steamdeck/X.svg": 8671,
      "./steamdeck/Y.svg": 8677,
      "./xbox/A.svg": 8682,
      "./xbox/B.svg": 8689,
      "./xbox/Down.svg": 8696,
      "./xbox/Home.svg": 8700,
      "./xbox/LB.svg": 8708,
      "./xbox/LS.svg": 8711,
      "./xbox/LT.svg": 8720,
      "./xbox/Left.svg": 8728,
      "./xbox/LeftStick.svg": 8733,
      "./xbox/Menu.svg": 8735,
      "./xbox/RB.svg": 8737,
      "./xbox/RS.svg": 8743,
      "./xbox/RT.svg": 8749,
      "./xbox/Right.svg": 8755,
      "./xbox/RightStick.svg": 8761,
      "./xbox/Up.svg": 8765,
      "./xbox/View.svg": 8768,
      "./xbox/X.svg": 8771,
      "./xbox/Y.svg": 8777
    };

    function op(pp) {
      var ip = Ip(pp);
      return cp(ip)
    }

    function Ip(pp) {
      if (!cp.o(Op, pp)) {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }
      return Op[pp]
    }
    op.keys = function() {
      return Object.keys(Op)
    }, op.resolve = Ip, pp.exports = op, op.id = 8356
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
  9024: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => vp,
      d: () => dp
    });
    var Op = cp(62),
      op = cp(34),
      Ip = cp(2543),
      Sp = cp(3520);
    const xp = 6,
      Lp = 4;

    function Yp(pp) {
      let {
        slotsLeft: ip,
        slotsRight: cp,
        width: Op,
        height: op,
        zoneRight: Ip,
        rowTop: Sp,
        besideBottom: Yp,
        obstacles: Dp
      } = pp;
      const Ap = Math.max(0, Math.floor(cp - ip - Op)),
        Pp = null === Ip ? 0 : Math.min(Ap, Math.max(0, Math.ceil(Ip + xp - ip))),
        Wp = ip + Pp - xp,
        yp = ip + Pp + Op + xp,
        Up = Dp.filter((pp => pp.left < yp && pp.right > Wp));
      let wp = Yp;
      for (let xp = 0; xp <= Up.length; xp++) {
        const pp = Up.filter((pp => pp.top < wp + Lp && pp.bottom > wp - op - Lp));
        if (0 === pp.length) break;
        wp = Math.min(...pp.map((pp => pp.top))) - Lp
      }
      return {
        shift: Pp,
        rise: wp === Yp ? null : Math.ceil(Sp - wp)
      }
    }

    function Dp(pp) {
      return Array.from(pp.children).filter((pp => !pp.classList.contains("HotBarRow")))
    }

    function Ap(pp) {
      return function(pp) {
        const ip = [],
          cp = (pp, Op) => {
            const op = pp.getBoundingClientRect();
            if (op.width > 0 && op.height > 0) ip.push(pp);
            else if (Op < 2)
              for (const ip of Array.from(pp.children)) cp(ip, Op + 1)
          };
        for (const Op of pp) cp(Op, 0);
        return ip
      }(Dp(pp).flatMap((pp => pp.classList.contains("AuraBarWrapper") ? [] : pp.classList.contains("BottomScreenStatBarList") ? Array.from(pp.children) : [pp])))
    }

    function Pp(pp) {
      var ip;
      const cp = pp.getBoundingClientRect();
      if (0 === cp.width) return null;
      const Op = null === (ip = pp.parentElement) || void 0 === ip ? void 0 : ip.getBoundingClientRect();
      return Op && Op.width > 0 ? Math.min(cp.right, Op.left + Op.width * Wp) : cp.right
    }
    const Wp = .35,
      yp = new WeakMap,
      Up = ".BottomScreenMessage, [role='status']",
      wp = new WeakMap;

    function vp(pp) {
      tp(pp) && tp(pp)
    }

    function tp(pp) {
      var ip, cp, Op, op, Ip, Sp;
      const xp = pp.documentElement.classList;
      if (!xp.contains("TouchHotbar") || xp.contains("TouchHotbarKeysAbove") || xp.contains("HudMove-inventory") || xp.contains("HudLocked-inventory") || null === (ip = pp.defaultView) || void 0 === ip || null === (cp = ip.matchMedia) || void 0 === cp || !cp.call(ip, Hp).matches) return !1;
      const Dp = pp.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Wp = null === Dp || void 0 === Dp ? void 0 : Dp.parentElement,
        vp = null === Dp || void 0 === Dp ? void 0 : Dp.closest(".BottomMiddleElements"),
        tp = null === vp || void 0 === vp ? void 0 : vp.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Dp || !Wp || !vp || !tp || vp.classList.contains("TouchInventoryOpen")) return !1;
      const dp = Dp.getBoundingClientRect();
      if (0 === dp.width) return !1;
      const ep = pp.querySelector(".JoystickZone"),
        jp = tp.getBoundingClientRect(),
        kp = Wp.getBoundingClientRect().top,
        mp = null === (Op = vp.querySelector(":scope > .AuraBarWrapper")) || void 0 === Op ? void 0 : Op.getBoundingClientRect(),
        Rp = Ap(vp),
        qp = {
          slotsLeft: jp.left,
          slotsRight: jp.right,
          width: dp.width,
          height: dp.height,
          zoneRight: ep ? Pp(ep) : null,
          rowTop: kp,
          besideBottom: (mp && mp.height > 0 ? mp.top : kp) - Lp,
          obstacles: Rp.map((pp => pp.getBoundingClientRect()))
        },
        Mp = Yp({
          ...qp,
          obstacles: Rp.filter((pp => !pp.matches(Up))).map((pp => pp.getBoundingClientRect()))
        }),
        Cp = pp.defaultView,
        Ep = `${null===Cp||void 0===Cp?void 0:Cp.innerWidth}x${null===Cp||void 0===Cp?void 0:Cp.innerHeight}:${Mp.shift}:${Math.round(dp.width)}:${Math.round(kp)}`,
        Xp = wp.get(vp),
        lp = (null === Xp || void 0 === Xp ? void 0 : Xp.at) === Ep ? (Qp = Xp.rise, Jp = Mp.rise, null === Qp ? Jp : null === Jp ? Qp : Math.max(Qp, Jp)) : Mp.rise;
      var Qp, Jp;
      const Bp = Yp({
          ...qp,
          besideBottom: null === lp ? qp.besideBottom : kp - lp
        }),
        Np = {
          shift: Mp.shift,
          rise: null !== (op = Bp.rise) && void 0 !== op ? op : lp
        },
        Tp = yp.get(vp);
      return (null !== (Ip = null === Tp || void 0 === Tp ? void 0 : Tp.shift) && void 0 !== Ip ? Ip : 0) === Np.shift && wp.set(vp, {
        at: Ep,
        rise: lp
      }), (null === Tp || void 0 === Tp ? void 0 : Tp.shift) !== Np.shift && vp.style.setProperty("--touch-shop-above-shift", `${Np.shift}px`), (null === Tp || void 0 === Tp ? void 0 : Tp.rise) !== Np.rise && (vp.classList.toggle("ShopAboveUp", null !== Np.rise), null === Np.rise ? vp.style.removeProperty("--touch-shop-above-rise") : vp.style.setProperty("--touch-shop-above-rise", `${Np.rise}px`)), yp.set(vp, Np), (null !== (Sp = null === Tp || void 0 === Tp ? void 0 : Tp.shift) && void 0 !== Sp ? Sp : 0) !== Np.shift
    }
    const Hp = "(orientation: landscape) and (max-height: 500px)";

    function dp(pp, ip, cp) {
      (0, Op.useLayoutEffect)((() => {
        var ip;
        const Op = null === (ip = pp.current) || void 0 === ip ? void 0 : ip.closest(".BottomMiddleElements");
        if (!Op || cp) return;
        const xp = new ResizeObserver((() => {
            Wp(!1)
          })),
          Lp = () => {
            xp.disconnect();
            const pp = document.querySelector(".JoystickZone");
            for (const ip of [pp, Op, Op.querySelector(".HotBarGameItemsContainer"), ...Ap(Op)]) ip && xp.observe(ip)
          };
        let Yp = null,
          Pp = !1;
        const Wp = pp => {
            Pp ||= pp, Yp ??= requestAnimationFrame((() => {
              Yp = null, Pp && (Pp = !1, Lp()), vp(document)
            }))
          },
          yp = new MutationObserver((() => {
            Wp(!0)
          }));
        yp.observe(Op, {
          childList: !0
        });
        for (const pp of Dp(Op)) yp.observe(pp, {
          childList: !0,
          subtree: !0
        });
        vp(document), Lp();
        const Up = () => {
            Wp(!0)
          },
          wp = [(0, op.n)(Ip.e, Up), (0, op.n)(Sp.e, Up)];
        return () => {
          null !== Yp && cancelAnimationFrame(Yp), xp.disconnect(), yp.disconnect();
          for (const pp of wp) pp()
        }
      }), [pp, ip, cp])
    }
  },
  5113: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp,
      f: () => Hp,
      i: () => Up,
      l: () => tp
    });
    var Op = cp(62),
      op = cp(5122),
      Ip = cp(4462),
      Sp = cp(1387),
      xp = cp(5146),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(1372),
      Ap = cp(1765),
      Pp = cp(5149),
      Wp = cp(1112);

    function yp(pp) {
      let {
        label: ip,
        onClick: cp,
        checked: Op,
        circleInfoText: op,
        className: xp,
        disabled: Lp,
        note: Dp
      } = pp;
      return (0, Wp.jsxs)("div", {
        "aria-disabled": Lp || void 0,
        "data-pad-focusable": !0,
        className: Yp()("SettingBox CheckboxContainer", {
          [xp]: xp,
          SettingBoxDisabled: Lp
        }),
        onClick: () => {
          Lp || cp(!Op)
        },
        children: [(0, Wp.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Wp.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Wp.jsx)(Ip.b, {
              className: "SettingsCheckbox",
              checked: Op,
              disabled: Lp,
              onChange: () => {}
            })
          }), (0, Wp.jsxs)("div", {
            className: "CheckboxText",
            children: [ip, op && (0, Wp.jsx)("span", {
              onClick: pp => pp.stopPropagation(),
              children: (0, Wp.jsx)(Sp.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: op
              })
            })]
          })]
        }), Dp && (0, Wp.jsx)("div", {
          className: "SettingNote",
          children: Dp
        })]
      })
    }

    function Up(pp) {
      let {
        name: ip,
        onChange: cp,
        min: op,
        max: Ip,
        step: xp,
        initValue: Lp,
        circleInfoText: Dp,
        format: Ap,
        className: Pp,
        padStep: yp,
        disabled: Up = !1,
        selectableMax: wp,
        cappedNote: tp,
        onChangeComplete: Hp
      } = pp;
      const [dp, ep] = (0, Op.useState)(Lp), jp = (0, Op.useRef)(Lp);
      (0, Op.useEffect)((() => {
        jp.current = Lp, ep(Lp)
      }), [Lp]);
      const kp = void 0 !== wp && wp < Ip,
        mp = kp ? {
          "--slider-selectable": (wp - op) / (Ip - op)
        } : void 0;
      return (0, Wp.jsxs)("div", {
        className: Yp()("SettingBox SettingsSliderDiv", {
          [Pp]: Pp,
          SettingBoxDisabled: Up,
          SliderCapped: kp
        }),
        style: mp,
        children: [(0, Wp.jsxs)("div", {
          className: "SliderText",
          children: [`${ip}: ${Ap?Ap(dp):dp}`, Dp && (0, Wp.jsx)(Sp.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Dp
          })]
        }), (0, Wp.jsx)("div", {
          className: "SliderDiv",
          children: (0, Wp.jsx)(vp, {
            value: dp,
            min: op,
            max: Ip,
            step: xp,
            onChange: pp => {
              if (kp && pp >= wp && dp === wp) return;
              const ip = kp ? Math.min(pp, wp) : pp;
              jp.current = ip, ep(ip), cp(ip)
            },
            onChangeComplete: Hp && (() => {
              Hp(jp.current)
            }),
            format: Ap,
            padStep: yp,
            disabled: Up
          })
        }), kp && tp && (0, Wp.jsx)("div", {
          className: "SettingNote",
          children: tp
        })]
      })
    }
    const wp = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vp(pp) {
      var ip;
      let {
        value: cp,
        min: Ip,
        max: Sp,
        step: xp,
        onChange: Lp,
        orientation: Yp,
        reverse: Dp,
        setIsChanging: Ap,
        tooltip: yp,
        labels: Up,
        handleLabel: vp,
        format: tp,
        onChangeStart: Hp,
        onChangeComplete: dp,
        padStep: ep,
        disabled: jp = !1
      } = pp;
      const kp = (0, Op.useRef)(null),
        mp = (0, Op.useRef)(null);
      (0, Op.useLayoutEffect)((() => {
        var pp, ip, cp;
        const Op = null !== (pp = null === (ip = kp.current) || void 0 === ip ? void 0 : ip.querySelector(".rangeslider")) && void 0 !== pp ? pp : null;
        null === Op || void 0 === Op || Op.setAttribute("data-pad-slider", ""), null === Op || void 0 === Op || Op.setAttribute("data-pad-focusable", ""), null === Op || void 0 === Op || null === (cp = Op.querySelector(".rangeslider__handle")) || void 0 === cp || cp.setAttribute("data-pad-slider-handle", ""), mp.current = Op
      }), []), (0, Op.useLayoutEffect)((() => {
        var pp, ip;
        jp ? null === (pp = mp.current) || void 0 === pp || pp.setAttribute("aria-disabled", "true") : null === (ip = mp.current) || void 0 === ip || ip.removeAttribute("aria-disabled")
      }), [jp]);
      const Rp = (null !== (ip = String(xp).split(".")[1]) && void 0 !== ip ? ip : "").length,
        qp = pp => {
          const ip = Number((Math.round((pp - Ip) / xp) * xp + Ip).toFixed(Rp));
          return Math.min(Sp, Math.max(Ip, ip))
        },
        Mp = (0, Op.useRef)(dp);
      Mp.current = dp, (0, Op.useEffect)((() => {
        const pp = kp.current;
        if (!pp) return;
        const ip = pp => {
          var ip;
          wp.has(pp.key) && (null === (ip = Mp.current) || void 0 === ip || ip.call(Mp))
        };
        return pp.addEventListener("keyup", ip), () => {
          pp.removeEventListener("keyup", ip)
        }
      }), []);
      const Cp = (0, Op.useRef)(!1);
      return (0, Pp.h)(mp, {
        adjust: pp => {
          if (jp) return;
          const ip = null !== ep && void 0 !== ep ? ep : Math.max(xp, Math.round((Sp - Ip) / 20 / xp) * xp),
            Op = qp(cp + pp * ip * (Dp ? -1 : 1));
          Op !== cp && (null === Hp || void 0 === Hp || Hp(), Lp(Op), null === dp || void 0 === dp || dp())
        },
        setFraction: pp => {
          if (jp) return;
          const ip = qp(Ip + (Dp ? 1 - pp : pp) * (Sp - Ip));
          ip !== cp && (Cp.current || (Cp.current = !0, null === Hp || void 0 === Hp || Hp()), Lp(ip))
        },
        endDrag: () => {
          Cp.current && (Cp.current = !1, null === dp || void 0 === dp || dp())
        }
      }), (0, Wp.jsx)("div", {
        ref: kp,
        style: {
          display: "contents"
        },
        children: (0, Wp.jsx)(op.b, {
          value: cp,
          min: Ip,
          max: Sp,
          step: xp,
          onChange: Lp,
          orientation: Yp,
          reverse: Dp,
          tooltip: yp,
          labels: Up,
          handleLabel: vp,
          format: tp,
          onChangeStart: () => {
            null === Hp || void 0 === Hp || Hp(), null === Ap || void 0 === Ap || Ap(!0)
          },
          onChangeComplete: () => {
            null === Ap || void 0 === Ap || Ap(!1), null === dp || void 0 === dp || dp()
          }
        })
      })
    }
    async function tp() {
      const pp = Dp.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await pp.getResult() && (0, Ap.reloadBloxd)()
    }

    function Hp(pp) {
      let {
        label: ip,
        options: cp,
        value: Op,
        onChange: op,
        circleInfoText: Ip
      } = pp;
      return (0, Wp.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Wp.jsxs)("div", {
          className: "SliderText",
          children: [ip, Ip && (0, Wp.jsx)(Sp.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Ip
          })]
        }), (0, Wp.jsx)(xp.b, {
          ariaLabel: ip,
          options: cp,
          value: Op,
          onChange: op
        })]
      })
    }
  },
  5146: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1112);

    function Sp(pp) {
      let {
        options: ip,
        value: cp,
        onChange: Op,
        ariaLabel: Sp,
        className: xp,
        reselectable: Lp = !1,
        keepsFocus: Yp = !1,
        padTabs: Dp
      } = pp;
      const Ap = void 0 !== Dp;
      return (0, Ip.jsx)("div", {
        className: op()("SegmentedToggle", xp),
        role: "group",
        "aria-label": Sp,
        "data-pad-tabs": Dp,
        children: ip.map((pp => {
          const ip = pp.value === cp;
          return (0, Ip.jsx)("button", {
            type: "button",
            "aria-pressed": ip,
            "data-pad-tab": Ap || void 0,
            "data-pad-selected": Ap && ip ? "true" : void 0,
            "data-pad-default-focus": Ap && ip || void 0,
            "aria-label": pp.ariaLabel,
            title: pp.ariaLabel,
            className: op()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ip
            }),
            onMouseDown: Yp ? pp => {
              pp.preventDefault()
            } : void 0,
            onClick: () => {
              ip && !Lp || Op(pp.value)
            },
            children: pp.label
          }, pp.value)
        }))
      })
    }
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
  9015: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => Lp,
      D: () => Pp,
      H: () => Yp,
      I: () => yp,
      J: () => Ip,
      d: () => op,
      h: () => xp,
      j: () => Op,
      m: () => Up,
      n: () => Wp,
      o: () => Dp,
      r: () => Sp,
      u: () => wp,
      y: () => Ap
    });
    const Op = pp => ({
      left: pp.left,
      top: pp.top,
      right: pp.right,
      bottom: pp.bottom
    });

    function op(pp) {
      return {
        x: (pp.left + pp.right) / 2,
        y: (pp.top + pp.bottom) / 2
      }
    }

    function Ip(pp) {
      return 0 === pp.length ? null : pp.reduce(((pp, ip) => ({
        left: Math.min(pp.left, ip.left),
        top: Math.min(pp.top, ip.top),
        right: Math.max(pp.right, ip.right),
        bottom: Math.max(pp.bottom, ip.bottom)
      })))
    }

    function Sp(pp, ip) {
      const cp = Math.max(0, (ip - (pp.right - pp.left)) / 2),
        Op = Math.max(0, (ip - (pp.bottom - pp.top)) / 2);
      return {
        left: pp.left - cp,
        top: pp.top - Op,
        right: pp.right + cp,
        bottom: pp.bottom + Op
      }
    }

    function xp(pp, ip) {
      return ip.x >= pp.left && ip.x <= pp.right && ip.y >= pp.top && ip.y <= pp.bottom
    }

    function Lp(pp, ip, cp) {
      let Op = null,
        Ip = 1 / 0;
      for (const {
          id: op,
          box: Sp
        }
        of ip) {
        const ip = (Sp.right - Sp.left) * (Sp.bottom - Sp.top);
        xp(Sp, pp) && ip < Ip && (Ip = ip, Op = op)
      }
      if (null !== Op) return Op;
      let Lp = 1 / 0;
      for (const {
          id: Yp,
          box: Dp
        }
        of ip) {
        if (!xp(Sp(Dp, cp), pp)) continue;
        const ip = op(Dp),
          Ip = Math.hypot(pp.x - ip.x, pp.y - ip.y);
        Ip < Lp && (Lp = Ip, Op = Yp)
      }
      return Op
    }

    function Yp(pp, ip, cp) {
      return {
        left: cp.left,
        top: cp.top,
        right: pp - cp.right,
        bottom: ip - cp.bottom
      }
    }

    function Dp(pp, ip, cp, Op) {
      const op = (pp, ip, cp) => Math.max(Math.min(ip, 0), Math.min(Math.max(cp, 0), pp));
      return {
        x: op(ip, Op.left - pp.left, Op.right - pp.right),
        y: op(cp, Op.top - pp.top, Op.bottom - pp.bottom)
      }
    }

    function Ap(pp, ip, cp, Op, op) {
      const Ip = pp.dx * Op + ip,
        Sp = pp.dy * op + cp,
        xp = pp => Math.max(-1, Math.min(1, pp));
      return {
        dx: xp(Ip / Op),
        dy: xp(Sp / op)
      }
    }

    function Pp(pp, ip, cp, Op) {
      return ip <= 0 || cp <= 0 ? 1 : Math.max(.05, Math.min(1, pp / ip, Op / cp))
    }

    function Wp(pp, ip, cp) {
      return Math.min(pp.right, ip.right) - Math.max(pp.left, ip.left) > cp && Math.min(pp.bottom, ip.bottom) - Math.max(pp.top, ip.top) > cp
    }

    function yp(pp, ip) {
      const cp = (pp, ip, cp, Op) => ip - pp > Op - cp ? cp - pp > ip - Op ? Op - ip : cp - pp : pp < cp ? cp - pp : ip > Op ? Op - ip : 0;
      return {
        x: cp(pp.left, pp.right, ip.left, ip.right),
        y: cp(pp.top, pp.bottom, ip.top, ip.bottom)
      }
    }

    function Up(pp, ip, cp) {
      return Wp(pp, {
        left: 0,
        top: 0,
        right: ip,
        bottom: cp
      }, 0)
    }

    function wp(pp, ip) {
      let {
        avoid: cp = null,
        bounds: Op = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, op = 0, Ip = 1 / 0;
      return pp.forEach(((pp, Sp) => {
        const xp = ip.filter((ip => Wp(pp, ip, 0))).length,
          Lp = null !== Op && (pp.left < Op.left || pp.top < Op.top || pp.right > Op.right || pp.bottom > Op.bottom),
          Yp = xp + (cp && Wp(pp, cp, 0) ? 1e3 : 0) + (Lp ? 1e6 : 0);
        Yp < Ip && (op = Sp, Ip = Yp)
      })), op
    }
  },
  9019: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      c: () => Ip,
      e: () => op,
      f: () => Sp,
      j: () => Ap,
      n: () => Dp,
      r: () => Yp,
      s: () => Lp
    });
    var Op = cp(2525);
    const op = ["J", "C", "A", "P", "U", "X", "G"],
      Ip = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function Sp(pp) {
      return pp ? ["X"] : ["P", "X"]
    }
    const xp = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: Op.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function Lp(pp, ip, cp) {
      const Op = pp.querySelector(".InGameUi .TouchComponentsButtons");
      if (!Op) return xp;
      const Ip = {},
        Sp = {};
      for (const xp of op) {
        const pp = Op.querySelector(`.TouchSlot${xp} > .TouchKey`);
        if (pp) {
          var Lp, Yp;
          Ip[xp] = pp.cloneNode(!0);
          const ip = (null !== (Lp = null === (Yp = pp.querySelector(".TouchKeyLabel")) || void 0 === Yp ? void 0 : Yp.textContent) && void 0 !== Lp ? Lp : "").split(/\s+/).filter((pp => !/[\d\xd7]/.test(pp))).join(" ");
          ip && (Sp[xp] = ip)
        }
      }
      const Dp = ip => {
          const cp = pp.querySelector(`.InGameUi ${ip}`);
          return null !== cp && !cp.classList.contains("Hidden")
        },
        Ap = [...pp.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((pp => pp.cloneNode(!0)));
      return {
        faces: Object.keys(Ip).length > 0 ? Ip : null,
        names: Sp,
        shop: Dp(".TouchInventoryKey.ShopKey"),
        bag: Dp(".TouchInventoryKey.BagKey"),
        sprint: Dp(".TouchSprintHit"),
        items: Ap.length > 0 ? Ap : null,
        rowIcons: ip,
        pinnedIcons: cp
      }
    }

    function Yp(pp, ip) {
      const cp = {};
      for (const Op of [...Sp(ip), "G"]) {
        const ip = pp.names[Op];
        ip && (cp[Ip[Op]] = ip)
      }
      return cp
    }

    function Dp(pp, ip) {
      const {
        faces: cp
      } = pp;
      if (null === cp) return [];
      const Op = new Set(Object.keys(cp).map((pp => Ip[pp])));
      return Sp(ip).filter((pp => !Op.has(Ip[pp])))
    }

    function Ap(pp, ip) {
      pp.replaceChildren(...[...ip.childNodes].map((pp => pp.cloneNode(!0))))
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
  8318: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      h: () => Ip,
      k: () => Pp,
      m: () => Ap,
      p: () => Yp,
      r: () => xp,
      s: () => Op,
      w: () => Wp,
      x: () => yp
    });
    const Op = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      op = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Op
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Ip = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        pickBlock: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      Sp = ["pickBlock", "perspective"],
      xp = pp => Sp.includes(pp) ? Sp : [pp],
      Lp = Object.fromEntries(op.flatMap((pp => {
        let {
          group: ip,
          actions: cp
        } = pp;
        return cp.map((pp => [pp, ip]))
      }))),
      Yp = pp => Lp[pp],
      Dp = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Ap = pp => {
        var ip;
        return [Yp(pp), ...null !== (ip = Dp[pp]) && void 0 !== ip ? ip : []]
      },
      Pp = new Set(["menu", "inventory", "keyboard"]),
      Wp = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      yp = new Set(["forward", "backward", "left", "right"])
  },
  8310: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => qp,
      D: () => Dp,
      H: () => Rp,
      K: () => Ep,
      c: () => tp,
      e: () => ep,
      g: () => Pp,
      j: () => Wp,
      n: () => lp,
      o: () => Cp,
      p: () => Mp,
      q: () => dp,
      t: () => Xp,
      v: () => mp,
      y: () => Hp
    });
    var Op = cp(8318),
      op = cp(8320),
      Ip = cp(8298),
      Sp = cp(8334);
    const xp = pp => "pickBlock" === pp ? "perspective" : pp,
      Lp = (pp, ip) => {
        var cp;
        const op = xp(ip);
        return null !== (cp = pp[op]) && void 0 !== cp ? cp : Op.h[op]
      },
      Yp = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((pp => {
        let [ip, cp] = pp;
        return [
          [ip, cp],
          [cp, ip]
        ]
      }))),
      Dp = (pp, ip) => null !== pp && void 0 !== pp ? pp : "nintendo" === ip,
      Ap = pp => Dp((0, op.h)().swapConfirmBack, (0, op.k)()) && Yp.get(pp) || pp,
      Pp = pp => Lp((0, op.h)().bindings, Ap(pp)),
      Wp = pp => Op.h[Ap(pp)],
      yp = Object.keys(Op.h),
      Up = pp => "gameplay" === (0, Op.p)(pp) ? ["gameplay"] : (0, Op.m)(pp),
      wp = (pp, ip) => {
        const cp = Up(ip);
        return Up(pp).some((pp => cp.includes(pp)))
      },
      vp = (pp, ip, cp) => {
        const op = Lp(pp, ip),
          Sp = new Set((0, Op.r)(ip)),
          Yp = [...Sp];
        for (let Op = Yp.pop(); Op; Op = Yp.pop())
          for (const ip of yp) {
            const Ip = Lp(pp, ip);
            Sp.has(ip) || Ip !== cp && Ip !== op || !wp(Op, ip) || (Sp.add(ip), Yp.push(ip))
          }
        const Dp = {
          ...pp
        };
        for (const Ap of Sp) {
          const ip = Lp(pp, Ap) === op ? cp : op,
            Sp = (0, Op.m)(Ap).some((pp => Op.k.has(pp)));
          if ((0, Ip.C)(ip) && Sp) return null;
          Dp[xp(Ap)] = ip
        }
        for (const Ip of Object.keys(Dp)) Dp[Ip] === Op.h[Ip] && delete Dp[Ip];
        return Dp
      },
      tp = (pp, ip) => null !== vp((0, op.h)().bindings, Ap(pp), ip),
      Hp = (pp, ip) => {
        if (Pp(pp) === ip) return !0;
        const cp = vp((0, op.h)().bindings, Ap(pp), ip);
        return !!cp && ((0, op.o)({
          bindings: cp
        }), !0)
      },
      dp = (pp, ip) => {
        const cp = (0, Op.r)(ip);
        return yp.filter((ip => xp(ip) === ip && !cp.includes(ip) && Lp(pp, Ap(ip)) !== Pp(ip)))
      },
      ep = ["southpaw", "triggersSwapped"],
      jp = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      kp = pp => Object.keys(jp[pp]),
      mp = (pp, ip) => "southpaw" === pp ? ip.swapSticks : kp(pp).every((cp => Lp(ip.bindings, cp) === jp[pp][cp])),
      Rp = (pp, ip) => {
        const cp = (0, op.h)();
        let Ip = cp.bindings;
        for (const op of kp(pp)) {
          const cp = ip ? jp[pp][op] : Op.h[op];
          if (Ip = vp(Ip, op, cp), !Ip) return !1
        }
        return (0, op.o)({
          swapSticks: "southpaw" === pp ? ip : cp.swapSticks,
          bindings: Ip
        }), !0
      },
      qp = () => {
        (0, op.o)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Mp = () => (0, op.h)().swapSticks ? "RightStick" : "LeftStick",
      Cp = () => (0, op.h)().swapSticks ? "LeftStick" : "RightStick",
      Ep = pp => (0, op.h)().swapSticks && (0, Ip.C)(pp),
      Xp = pp => Ep(pp) ? Mp() : Cp(),
      lp = pp => {
        if (Op.x.has(pp)) return Mp();
        const ip = Op.w[pp];
        return ip && ("leaderboard" !== ip || (0, Sp.e)(pp, (0, Sp.d)())) ? Pp(ip) : null
      }
  },
  8288: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ControllerCategory: () => kx,
      ControllerGlyph: () => Ro,
      ControllerRoot: () => kS,
      PadLobbyShortcuts: () => hS,
      PadSneakChip: () => XS,
      PadTooltip: () => QS,
      attachPressToContinue: () => zS,
      getBoundButton: () => Dp.g,
      getControllerSettings: () => Pp.h,
      getGlyphForNoaAction: () => Dp.n,
      getInventoryCursorState: () => Rx,
      getMenuShortcutButton: () => rc,
      getPadGlyphIconName: () => MS,
      getPadGlyphIconUrl: () => CS,
      getPadRepeatTiming: () => Up.g,
      handOverPadFocus: () => Mx,
      hasActivePad: () => mx,
      isPadSteppingSlots: () => qx
    });
    const Op = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var op = cp(1201),
      Ip = cp(1432),
      Sp = cp(8290),
      xp = cp(82),
      Lp = cp(25),
      Yp = cp(34),
      Dp = cp(8310),
      Ap = cp(8336),
      Pp = cp(8320),
      Wp = cp(8338),
      yp = cp(8298),
      Up = cp(8793),
      wp = cp(8801),
      vp = cp(1677);
    const tp = (pp, ip, cp) => Math.max(ip, Math.min(cp, pp)),
      Hp = pp => Math.min(pp.width, pp.height) / 720,
      dp = pp => Math.max(.15, pp);
    class ep {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(pp, ip) {
        const cp = Math.hypot(pp.x, pp.y) >= (pp => Math.max(.3, pp))(ip);
        return this.locked ? (this.locked = cp, !1) : cp
      }
    }
    const jp = (pp, ip) => {
        const cp = tp(ip.dtMs, 0, 100),
          Op = cp / 1e3,
          op = Hp(ip.viewport) * (ip.cursorSpeedPercent / 100),
          Ip = (0, yp.h)(ip.stick, dp(ip.moveDeadzone)),
          Sp = Math.hypot(Ip.x, Ip.y),
          xp = ((pp, ip, cp) => {
            if (ip < .3) return 0;
            const Op = cp / 350;
            return ip >= .85 ? Math.min(1, pp + Op) : Math.max(0, pp - Op)
          })(pp.speedRamp, Sp, cp);
        let Lp = pp.x,
          Yp = pp.y;
        if (Sp > 0) {
          const pp = .45 + .55 * xp,
            cp = ip.context.overInteractive ? .45 : 1,
            Dp = 1400 * (pp => {
              const ip = tp(pp, 0, 1);
              return .3 * ip + .7 * ip * ip
            })(Sp) * op * pp * cp;
          Lp += Ip.x / Sp * Dp * Op, Yp += Ip.y / Sp * Dp * Op
        }
        const Dp = Math.hypot(ip.dpad.x, ip.dpad.y);
        if (Dp > 0) {
          const pp = 500 * op;
          Lp += ip.dpad.x / Dp * pp * Op, Yp += ip.dpad.y / Dp * pp * Op
        }
        const Ap = ip.context.magnetTarget;
        if (Ap && Sp < .3 && 0 === Dp) {
          const pp = ((pp, ip, cp, Op, op) => {
            const Ip = ip.x - pp.x,
              Sp = ip.y - pp.y,
              xp = Math.hypot(Ip, Sp);
            if (0 === xp) return {
              x: 0,
              y: 0
            };
            const Lp = Math.min(xp, op * (1 - Op / .3));
            let Yp = Ip / xp * Lp,
              Dp = Sp / xp * Lp;
            if (Op > 0) {
              const pp = cp.x / Op,
                ip = cp.y / Op,
                op = Yp * pp + Dp * ip;
              op < 0 && (Yp -= op * pp, Dp -= op * ip)
            }
            return {
              x: Yp,
              y: Dp
            }
          })({
            x: Lp,
            y: Yp
          }, Ap, Ip, Sp, 120 * Hp(ip.viewport) * Op);
          Lp += pp.x, Yp += pp.y
        }
        return {
          x: tp(Lp, 0, Math.max(0, ip.viewport.width - 1)),
          y: tp(Yp, 0, Math.max(0, ip.viewport.height - 1)),
          speedRamp: xp
        }
      },
      kp = pp => {
        const ip = (0, yp.h)(pp, .2);
        return 0 !== ip.x || 0 !== ip.y
      },
      mp = (pp, ip) => {
        const cp = (0, yp.h)(pp, .2),
          Op = Math.hypot(cp.x, cp.y);
        if (0 === Op) return {
          x: 0,
          y: 0
        };
        const op = Op * Op * 1600,
          Ip = tp(ip, 0, 100) / 1e3;
        return {
          x: cp.x / Op * op * Ip,
          y: cp.y / Op * op * Ip
        }
      },
      Rp = (pp, ip) => "y" === ip ? pp.scrollHeight > pp.clientHeight + 1 : pp.scrollWidth > pp.clientWidth + 1,
      qp = (pp, ip) => {
        if (!Rp(pp, ip)) return !1;
        const cp = getComputedStyle(pp),
          Op = "y" === ip ? cp.overflowY : cp.overflowX;
        return "auto" === Op || "scroll" === Op
      },
      Mp = (pp, ip, cp) => {
        for (let Ip = pp instanceof HTMLElement ? pp : null !== (Op = null === pp || void 0 === pp ? void 0 : pp.parentElement) && void 0 !== Op ? Op : null; Ip; Ip = Ip.parentElement) {
          var Op;
          if (qp(Ip, ip)) return Ip;
          if (Ip === cp) return null
        }
        if (cp) return null;
        const op = document.scrollingElement;
        return op instanceof HTMLElement && Rp(op, ip) ? op : null
      },
      Cp = new WeakMap,
      Ep = (pp, ip) => {
        const cp = performance.now(),
          Op = Cp.get(pp);
        if (Op && Op.axis === ip && cp - Op.atMs < 500 && (!Op.container || Op.container.isConnected)) return Op.container;
        const op = Xp(pp, ip);
        return Cp.set(pp, {
          axis: ip,
          atMs: cp,
          container: op
        }), op
      },
      Xp = (pp, ip) => {
        let cp = qp(pp, ip) ? pp : null,
          Op = cp ? cp.clientWidth * cp.clientHeight : 0;
        for (const op of pp.querySelectorAll("*")) {
          const pp = op.clientWidth * op.clientHeight;
          pp > Op && qp(op, ip) && (cp = op, Op = pp)
        }
        return cp
      },
      lp = (pp, ip, cp) => "y" === ip ? cp < 0 ? pp.scrollTop > 0 : pp.scrollTop + pp.clientHeight < pp.scrollHeight - 1 : cp < 0 ? pp.scrollLeft > 0 : pp.scrollLeft + pp.clientWidth < pp.scrollWidth - 1,
      Qp = (pp, ip, cp) => {
        "y" === ip ? pp.scrollBy({
          top: cp,
          behavior: "instant"
        }) : pp.scrollBy({
          left: cp,
          behavior: "instant"
        })
      },
      Jp = pp => {
        if (!pp || pp === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const ip = pp.getBoundingClientRect(),
          cp = Math.max(0, ip.left),
          Op = Math.max(0, ip.top);
        return new DOMRect(cp, Op, Math.min(window.innerWidth, ip.right) - cp, Math.min(window.innerHeight, ip.bottom) - Op)
      },
      Bp = (pp, ip) => pp.left < ip.right && ip.left < pp.right && pp.top < ip.bottom && ip.top < pp.bottom;
    var Np = cp(62),
      Tp = cp(1049),
      fp = cp.n(Tp),
      bp = cp(1112);
    let hp = 0,
      ap = !1;
    class np {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(pp) {
        this.element = pp, this.shownKey = "", this.gap = null
      }
      show(pp) {
        const ip = this.element;
        if (!ip) return;
        const cp = pp ? this.keepOnScreen(ip, pp) : null,
          Op = cp ? `${cp.left},${cp.top},${cp.width},${cp.height}` : "";
        if (Op === this.shownKey) return;
        const op = "" === this.shownKey;
        this.shownKey = Op, ip.classList.toggle("Visible", null !== cp), cp && (ip.classList.toggle("Snap", op), ip.style.width = `${cp.width}px`, ip.style.height = `${cp.height}px`, ip.style.transform = `translate(${cp.left}px, ${cp.top}px)`, op && (ip.offsetWidth, ip.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(pp, ip) {
        var cp;
        const Op = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!ap){ap=!0;const pp=document.createElement("div");pp.setAttribute("aria-hidden","true"),pp.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(pp),new ResizeObserver((()=>{hp++})).observe(pp)}return String(hp)})()}`;
        (null === (cp = this.gap) || void 0 === cp ? void 0 : cp.key) !== Op && (this.gap = {
          px: parseFloat(getComputedStyle(pp).paddingLeft) || 0,
          key: Op
        });
        const op = this.gap.px + 2,
          Ip = Math.max(ip.left, op),
          Sp = Math.max(ip.top, op),
          xp = Math.min(ip.left + ip.width, window.innerWidth - op),
          Lp = Math.min(ip.top + ip.height, window.innerHeight - op);
        return xp <= Ip || Lp <= Sp ? ip : {
          left: Ip,
          top: Sp,
          width: xp - Ip,
          height: Lp - Sp
        }
      }
    }
    const Fp = pp => {
      let {
        placer: ip,
        className: cp
      } = pp;
      const Op = (0, Np.useCallback)((pp => {
        ip.setElement(pp)
      }), [ip]);
      return (0, bp.jsx)("div", {
        ref: Op,
        className: fp()("PadReticle", cp),
        "aria-hidden": !0
      })
    };
    var gp = cp(8803);
    const Gp = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const rp = new class {
      constructor() {
        this.state = Gp, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(pp) {
        if (ip = this.state, cp = pp, (ip.visible || cp.visible) && (ip.visible !== cp.visible || ip.x !== cp.x || ip.y !== cp.y || ip.pressed !== cp.pressed)) {
          var ip, cp;
          this.state = pp;
          for (const ip of this.listeners) ip(pp)
        }
      }
      hide() {
        this.set(Gp)
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
    };
    var Zp = cp(8809);
    const zp = (pp, ip) => {
        let {
          kind: cp,
          holding: Op,
          hasPress: op,
          hasBack: Ip,
          slotHasItem: Sp
        } = ip;
        switch (pp) {
          case "primary":
            return "slot" === cp ? "slotPrimary" : "recipe" === cp || "button" === cp ? op ? "pressPrimary" : "click" : "textField" === cp ? "openKeyboard" : null;
          case "secondary":
            return "slot" === cp ? "slotSecondary" : "button" !== cp && "recipe" !== cp || !op ? null : "pressSecondary";
          case "quickMove":
            return "slot" === cp && Sp ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === cp && Sp && !Op ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Op ? "cancel" : Ip ? "pressBack" : "close"
        }
      },
      sp = pp => {
        const ip = [];
        if (pp.hotbarPicking) return ip.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), ip.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), ip;
        if (pp.holding) "slot" === pp.kind ? (ip.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), ip.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === pp.kind && ip.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), ip.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), ip.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), pp.openButtonCloses && ip.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var cp;
          "slot" === pp.kind && pp.slotHasItem ? (ip.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), ip.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), ip.push({
            actions: ["inventoryQuickMove"],
            labelKey: pp.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), ip.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), ip.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== pp.kind && "recipe" !== pp.kind || !pp.pressHints ? "button" === pp.kind || "recipe" === pp.kind ? ip.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === pp.kind && ip.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (pp.pressHints.primary && ip.push({
            actions: ["inventoryPrimary"],
            labelKey: pp.pressHints.primary
          }), pp.pressHints.secondary && ip.push({
            actions: ["inventorySecondary"],
            labelKey: pp.pressHints.secondary
          }));
          const Op = null === (cp = pp.pressHints) || void 0 === cp ? void 0 : cp.back;
          Op && ip.push({
            actions: ["inventoryClose"],
            labelKey: Op
          });
          const op = [];
          pp.openButtonCloses && op.push("inventory"), Op || op.push("inventoryClose"), op.length > 0 && ip.push({
            actions: op,
            labelKey: "inventoryClose"
          })
        }
        return ip.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), pp.hasCategories ? ip.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : pp.hasList && ip.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), ip
      };
    var Kp = cp(8821),
      Vp = cp(8816);
    class ii {
      constructor(pp) {
        this.probes = pp, this.byContainer = new Map, this.byParent = new Map
      }
      find(pp, ip) {
        const cp = Mp(pp, "y", ip);
        if (!cp) return null;
        let Op = this.byContainer.get(cp);
        return Op || (this.probes.push({
          element: cp,
          rect: Ii(cp.getBoundingClientRect())
        }), Op = {
          container: cp,
          box: Jp(cp),
          group: oi(cp)
        }, this.byContainer.set(cp, Op)), Op
      }
      findForParent(pp, ip) {
        let cp = this.byParent.get(pp);
        return void 0 === cp && (cp = this.find(pp, ip), this.byParent.set(pp, cp)), cp
      }
    }
    const ci = new WeakMap;
    let Oi = 0;
    const oi = pp => {
        let ip = ci.get(pp);
        return ip || (ip = "el:" + Oi++, ci.set(pp, ip)), ip
      },
      Ii = pp => ({
        left: pp.left,
        top: pp.top,
        width: pp.width,
        height: pp.height
      }),
      Si = pp => pp.width > 0 && pp.height > 0,
      xi = (pp, ip) => Si(pp) && pp.left + pp.width > 0 && pp.top + pp.height > 0 && pp.left < ip.width && pp.top < ip.height,
      Li = (pp, ip, cp) => {
        const Op = pp.top + pp.height / 2;
        return xi(pp, ip) && (!cp || Op >= cp.top && Op <= cp.bottom)
      },
      Yi = pp => ({
        x: pp.left + pp.width / 2,
        y: pp.top + pp.height / 2
      }),
      Di = (pp, ip, cp) => pp < 0 ? cp >= 0 ? 0 : ip - 1 : ((pp + cp) % ip + ip) % ip,
      Ai = pp => "Left" === pp || "Right" === pp,
      Pi = (pp, ip, cp) => {
        const Op = Ai(cp),
          op = Op ? pp.top : pp.left,
          Ip = Op ? pp.height : pp.width,
          Sp = Op ? ip.top : ip.left,
          xp = Op ? ip.height : ip.width,
          Lp = Math.max(0, Math.max(Sp - (op + Ip), op - (Sp + xp)));
        return Ip > 1.5 * xp ? {
          gap: Lp,
          offset: Math.max(0, Sp - op) + .1 * Math.max(0, op - Sp)
        } : {
          gap: Lp,
          offset: Math.abs(Sp + xp / 2 - (op + Ip / 2))
        }
      },
      Wi = (pp, ip, cp) => {
        const Op = ((pp, ip, cp) => {
          const Op = Yi(pp),
            op = Yi(ip),
            Ip = Ai(cp) ? Math.min(pp.width, ip.width) / 4 : Math.min(pp.height, ip.height) / 4;
          switch (cp) {
            case "Right":
              return op.x - Op.x >= Ip ? Math.max(0, ip.left - (pp.left + pp.width)) : null;
            case "Left":
              return Op.x - op.x >= Ip ? Math.max(0, pp.left - (ip.left + ip.width)) : null;
            case "Down":
              return op.y - Op.y >= Ip ? Math.max(0, ip.top - (pp.top + pp.height)) : null;
            case "Up":
              return Op.y - op.y >= Ip ? Math.max(0, pp.top - (ip.top + ip.height)) : null
          }
        })(pp, ip, cp);
        if (null === Op) return null;
        const op = Pi(pp, ip, cp);
        return Op + 3 * op.gap + .5 * op.offset
      },
      yi = (pp, ip) => ip.visible || null !== ip.scrollGroup && ip.scrollGroup === pp.scrollGroup,
      Ui = (pp, ip, cp, Op) => {
        let op = null,
          Ip = 1 / 0;
        for (const Sp of ip) {
          if (Sp.key === pp.key || !yi(pp, Sp) || !Op(Sp)) continue;
          const ip = Wi(pp.rect, Sp.rect, cp);
          null !== ip && ip < Ip && (op = Sp, Ip = ip)
        }
        return op
      },
      wi = (pp, ip, cp) => {
        const Op = Ui(pp, ip, cp, (() => !0));
        if (!Op || Ai(cp) || null === pp.scrollGroup || Op.scrollGroup === pp.scrollGroup) return Op;
        const op = Ui(pp, ip, cp, (ip => 0 === Pi(pp.rect, ip.rect, cp).gap));
        return null !== op && void 0 !== op ? op : Op
      },
      vi = (pp, ip, cp) => {
        let Op = null,
          op = 1 / 0;
        for (const Ip of ip) {
          if (!Ip.visible || cp && !cp(Ip)) continue;
          const ip = Yi(Ip.rect),
            Sp = Math.hypot(ip.x - pp.x, ip.y - pp.y);
          Sp < op && (Op = Ip, op = Sp)
        }
        return Op
      },
      ti = pp => {
        const {
          rect: ip,
          clip: cp
        } = pp;
        if (!cp) return ip;
        const Op = Math.max(ip.left, cp.left),
          op = Math.max(ip.top, cp.top);
        return {
          left: Op,
          top: op,
          width: Math.min(ip.left + ip.width, cp.left + cp.width) - Op,
          height: Math.min(ip.top + ip.height, cp.top + cp.height) - op
        }
      },
      Hi = (pp, ip) => ip.x >= pp.left && ip.x < pp.left + pp.width && ip.y >= pp.top && ip.y < pp.top + pp.height,
      di = (pp, ip) => {
        let cp = null,
          Op = 1 / 0;
        for (const op of ip) {
          const ip = ti(op);
          (op.visible || op.clip) && Hi(ip, pp) && (ip.width * ip.height < Op && (cp = op, Op = ip.width * ip.height))
        }
        return cp
      },
      ei = pp => {
        let ip = null;
        for (const cp of pp) {
          if (!cp.visible) continue;
          if (!ip) {
            ip = cp;
            continue
          }
          const pp = Math.min(ip.rect.height, cp.rect.height) / 2,
            Op = cp.rect.top - ip.rect.top;
          (Op < -pp || Math.abs(Op) <= pp && cp.rect.left < ip.rect.left) && (ip = cp)
        }
        return ip
      },
      ui = (pp, ip, cp, Op, op) => {
        const Ip = op % ip,
          Sp = Math.floor(op / ip);
        return {
          left: pp.left + Ip * cp,
          top: pp.top + Sp * Op,
          width: pp.width,
          height: pp.height
        }
      },
      ji = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      ki = ".LazyLoadedItemWrapper",
      mi = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Ri = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      qi = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Mi = pp => pp.hasAttribute("data-inven-idx") ? "slot" : pp.hasAttribute("data-recipe-key") ? "recipe" : pp.hasAttribute("data-craft-ingredient") || (0, Vp.z)(pp) ? "info" : (0, gp.B)(pp) ? "textField" : "button",
      Ci = (pp, ip) => "slot" === ip ? Number(pp.getAttribute("data-inven-idx")) : null,
      Ei = pp => pp.matches(ki) ? pp.querySelector(mi) : pp,
      Xi = pp => {
        var ip, cp;
        return {
          element: pp,
          recipe: null !== (ip = pp && (null === (cp = Ei(pp)) || void 0 === cp ? void 0 : cp.getAttribute("data-recipe-key"))) && void 0 !== ip ? ip : null
        }
      },
      li = pp => {
        const ip = Ei(pp);
        if (!ip) return {
          kind: "pending",
          idx: null
        };
        const cp = Mi(ip);
        return {
          kind: cp,
          idx: Ci(ip, cp)
        }
      },
      Qi = pp => {
        const ip = [];
        for (const [cp, Op] of Ri) {
          pp.matches(Op) && ip.push([cp, pp]);
          for (const op of pp.querySelectorAll(Op)) ip.push([cp, op])
        }
        return ip
      },
      Ji = (pp, ip) => {
        for (const [cp, Op] of pp)
          if (Op.contains(ip)) return cp;
        return "other"
      },
      Bi = (pp, ip, cp, Op, op, Ip, Sp, xp) => {
        var Lp;
        const Yp = pp.children,
          Dp = Ii(Yp[0].getBoundingClientRect()),
          Ap = [{
            element: Yp[0],
            rect: Dp
          }];
        if (Ip.push(Ap[0]), 0 === Dp.width || 0 === Dp.height) return;
        let Pp = 1;
        for (; Pp < Yp.length && Math.abs(Yp[Pp].getBoundingClientRect().top - Dp.top) < 1;) Pp++;
        const Wp = pp => {
            const ip = {
              element: Yp[pp],
              rect: Ii(Yp[pp].getBoundingClientRect())
            };
            return Ip.push(ip), Ap.push(ip), ip.rect
          },
          yp = Pp > 1 ? Wp(1).left - Dp.left : Dp.width,
          Up = Yp.length > Pp ? Wp(Pp).top - Dp.top : Dp.height,
          wp = Sp.find(pp, ip);
        let vp = null;
        if (wp) {
          var tp;
          const {
            container: pp,
            box: ip
          } = wp;
          vp = null !== (tp = xp.get(pp)) && void 0 !== tp ? tp : null, vp || (vp = {
            top: pp.scrollTop,
            left: pp.scrollLeft,
            box: ip,
            viewport: Op,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, xp.set(pp, vp)), vp.probes.push(...Ap)
        }
        const Hp = op.length;
        for (let kp = 0; kp < Yp.length; kp++) {
          var dp, ep, jp;
          const pp = Yp[kp],
            ip = ui(Dp, Pp, yp, Up, kp),
            Ip = pp.firstElementChild ? pp.querySelector(mi) : null,
            Sp = Ip ? Mi(Ip) : "pending";
          op.push({
            key: oi(pp),
            rect: ip,
            panel: cp,
            scrollGroup: null !== (dp = null === wp || void 0 === wp ? void 0 : wp.group) && void 0 !== dp ? dp : null,
            visible: Li(ip, Op, null === wp || void 0 === wp ? void 0 : wp.box),
            clip: null !== (ep = null === wp || void 0 === wp ? void 0 : wp.box) && void 0 !== ep ? ep : null,
            element: pp,
            kind: Sp,
            idx: Ip ? Ci(Ip, Sp) : null,
            scrollContainer: null !== (jp = null === wp || void 0 === wp ? void 0 : wp.container) && void 0 !== jp ? jp : null
          })
        }
        null === (Lp = vp) || void 0 === Lp || Lp.targets.push(...op.slice(Hp))
      },
      Ni = pp => pp instanceof Element && null !== pp.closest(ki),
      Ti = pp => null !== pp.scrollContainer && Ni(pp.element);
    class fi {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(pp, ip, cp, Op) {
        this.latched = {
          source: pp,
          focusKey: ip,
          sinceMs: cp,
          hold: {
            id: ++this.presses,
            holdMs: Op
          }
        }
      }
      update(pp, ip, cp) {
        const Op = this.latched;
        return Op ? pp && ip === Op.focusKey ? cp - Op.sinceMs < Op.hold.holdMs ? null : (this.latched = null, Op.source) : (this.latched = null, null) : null
      }
      getHold() {
        var pp, ip;
        return null !== (pp = null === (ip = this.latched) || void 0 === ip ? void 0 : ip.hold) && void 0 !== pp ? pp : null
      }
      reset() {
        this.latched = null
      }
    }
    var bi = cp(8826);
    const ai = {
        kind: "none"
      },
      ni = pp => ({
        x: pp.clientX,
        y: pp.clientY
      }),
      Fi = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class gi {
      constructor() {
        this.hovered = ai, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(pp, ip, cp, Op, op) {
        const Ip = null !== ip ? {
            kind: "slot",
            idx: ip
          } : cp ? {
            kind: "element",
            element: cp
          } : ai,
          Sp = `${op}|${Math.round(Op.clientX)},${Math.round(Op.clientY)}`,
          xp = (Lp = this.hovered, Yp = Ip, "slot" === Lp.kind && "slot" === Yp.kind ? Lp.idx === Yp.idx : "element" === Lp.kind && "element" === Yp.kind ? Lp.element === Yp.element : Lp.kind === Yp.kind);
        var Lp, Yp;
        if (xp && Sp === this.signature) return;
        const Dp = !xp || op !== this.holding || "" === this.signature;
        this.signature = Sp, this.holding = op, this.lastPoint = Op;
        const Ap = this.hovered;
        if (this.hovered = Ip, "slot" === Ip.kind) return this.leaveElement(Ap, null, Op), void(Dp ? pp.hover(Ip.idx, Op) : pp.moveTo(Op));
        if (xp) return void("element" === Ip.kind ? (0, gp.m)(Ip.element, Ip.element, ni(Op)) : pp.hover(null, Op));
        pp.hover(null, Op);
        const Pp = "element" === Ip.kind ? Ip.element : null;
        "element" === Ap.kind ? (0, gp.m)(Ap.element, Pp, ni(Op)) : Pp && (0, gp.m)(null, Pp, ni(Op))
      }
      invalidate() {
        this.signature = ""
      }
      clear(pp) {
        const ip = this.hovered;
        this.hovered = ai, this.signature = "", "none" !== ip.kind && (this.leaveElement(ip, null, this.lastPoint), pp && "slot" === ip.kind && pp.hover(null, this.lastPoint))
      }
      leaveElement(pp, ip, cp) {
        "element" === pp.kind && (0, gp.m)(pp.element, ip, ni(cp))
      }
    }
    class Gi {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(pp, ip) {
        kp(pp) && (this.lastTiltedMs = ip)
      }
      allowsClick(pp) {
        return pp - this.lastTiltedMs > 150
      }
    }
    class ri {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(pp) {
        return 0 !== (0, yp.h)(pp, .2).y
      }
      step(pp, ip, cp) {
        pp !== this.container && (this.container = pp, this.remainder = 0);
        const Op = mp(ip, cp).y;
        if (0 === Op) return this.remainder = 0, !1;
        const op = this.remainder + Op,
          Ip = Math.trunc(op);
        if (this.remainder = op - Ip, 0 === Ip) return !1;
        const Sp = pp.scrollTop;
        return pp.scrollTop = Sp + Ip, pp.scrollTop !== Sp
      }
      current() {
        var pp;
        return null !== (pp = this.container) && void 0 !== pp && pp.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Zi = cp(8828);
    const zi = "[data-pad-inventory-default]",
      si = ".HotBarGameItemsContainer .InvenItem.Selected",
      Ki = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      Vi = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      pc = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      ic = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      cc = [...pc, ...ic],
      Oc = () => {
        return pp = (0, Dp.g)("inventory"), !cc.map(Dp.g).includes(pp) && !(0, yp.C)(pp);
        var pp
      },
      oc = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      Ic = (pp, ip) => {
        const cp = !(null === ip || void 0 === ip || !ip.isHolding());
        return function(pp, ip) {
          const cp = pp.find((pp => pp.visible && ip(pp)));
          if (cp) return cp;
          for (var Op = arguments.length, op = new Array(Op > 2 ? Op - 2 : 0), Ip = 2; Ip < Op; Ip++) op[Ip - 2] = arguments[Ip];
          for (const Sp of op) {
            const ip = ei(pp.filter(Sp));
            if (ip) return ip
          }
          return ei(pp)
        }(pp, (pp => {
          const {
            element: ip
          } = pp;
          return ip.matches(zi) || null !== ip.querySelector(zi) || ip.matches(si)
        }), (pp => "slot" === pp.kind ? cp || null !== pp.idx && !(null === ip || void 0 === ip || !ip.hasItemAt(pp.idx)) : "recipe" === pp.kind || "pending" === pp.kind), (pp => "slot" === pp.kind || "button" === pp.kind))
      };
    class Sc {
      constructor() {
        this.set = null, this.observer = new MutationObserver((pp => {
          pp.some((pp => !Ni(pp.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = pp => {
          this.scrolled(pp.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const pp = [],
              ip = [];
            let cp = !1;
            const Op = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              op = new Map,
              Ip = new ii(ip);
            for (const Ap of document.querySelectorAll(ji)) {
              const Dp = Qi(Ap);
              cp ||= null !== Ap.querySelector(".CreativeCategoryTab");
              for (const cp of Ap.querySelectorAll(`${ki}:first-child`)) {
                const Sp = cp.parentElement;
                Bi(Sp, Ap, Ji(Dp, Sp), Op, pp, ip, Ip, op)
              }
              for (const cp of Ap.querySelectorAll(mi)) {
                var Sp, xp, Lp, Yp;
                if (cp.closest(ki) || cp.closest("[data-pad-ignore]")) continue;
                const Pp = null === (Sp = cp.parentElement) || void 0 === Sp ? void 0 : Sp.closest(mi);
                if (Pp && Ap.contains(Pp)) continue;
                const Wp = Mi(cp),
                  yp = Ci(cp, Wp);
                if (-1 === yp) continue;
                const Up = Ii(cp.getBoundingClientRect());
                ip.push({
                  element: cp,
                  rect: Up
                });
                const wp = Ip.findForParent(cp.parentElement, Ap),
                  vp = wp && !op.has(wp.container) ? wp : null;
                (vp ? Si(Up) : xi(Up, Op)) && pp.push({
                  key: oi(cp),
                  rect: Up,
                  panel: Ji(Dp, cp),
                  scrollGroup: null !== (xp = null === vp || void 0 === vp ? void 0 : vp.group) && void 0 !== xp ? xp : null,
                  visible: Li(Up, Op, null === vp || void 0 === vp ? void 0 : vp.box),
                  clip: null !== (Lp = null === vp || void 0 === vp ? void 0 : vp.box) && void 0 !== Lp ? Lp : null,
                  element: cp,
                  kind: Wp,
                  idx: yp,
                  scrollContainer: null !== (Yp = null === vp || void 0 === vp ? void 0 : vp.container) && void 0 !== Yp ? Yp : null
                })
              }
            }
            for (const [Ap, Pp] of op) Pp.holdsOthers = ip.some((pp => pp.element !== Ap && Ap.contains(pp.element) && !pp.element.closest(ki)));
            const Dp = new Map;
            for (const Ap of pp) Dp.set(Ap.element, Ap);
            return {
              targets: pp,
              byElement: Dp,
              hasCategories: cp,
              probes: ip,
              scrollers: op
            }
          })(), this.observer.disconnect();
          for (const pp of document.querySelectorAll(ji)) this.observer.observe(pp, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(pp) {
        !this.set || pp instanceof Element && ((pp, ip) => {
          const cp = pp.scrollers.get(ip);
          if (!cp || cp.holdsOthers || ip.scrollLeft !== cp.left) return !1;
          const Op = ip.scrollTop - cp.top;
          if (0 === Op) return !0;
          cp.top = ip.scrollTop;
          for (const op of cp.probes) op.rect.top -= Op;
          for (const op of cp.targets) op.rect.top -= Op, op.visible = Li(op.rect, cp.viewport, cp.box);
          return !0
        })(this.set, pp) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((pp => {
          return ip = pp.rect, cp = pp.element.getBoundingClientRect(), !(ip.left === cp.left && ip.top === cp.top && ip.width === cp.width && ip.height === cp.height);
          var ip, cp
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const xc = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(yp.w.map((pp => [pp, (0, Up.e)(yp.y)]))), this.stickRepeat = new yp.b((0, Up.e)(yp.W)), this.pageUpTimer = (0, Up.e)(yp.R), this.pageDownTimer = (0, Up.e)(yp.R), this.stickGate = new ep, this.pointer = null, this.activePress = null, this.dropLatch = new fi, this.scroller = new ri, this.scrollStickClick = new Gi, this.hover = new gi, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new np, this.targets = new Sc, this.hasCategories = !1, this.wasShowing = !1, this.state = bi.d, this.isActive = () => (0, Kp.e)(), this.isShowing = () => "inventory" === Ap.d.getActiveConsumerName() && (0, Wp.n)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Kp.c)()), (0, Kp.e)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var pp;
            this.reopenSlotIdx = null !== (pp = this.focused ? li(this.focused).idx : null) && void 0 !== pp ? pp : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Kp.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = pp => {
            (0, xp.unstable_batchedUpdates)((() => {
              this.frame(pp)
            }))
          }, this.shouldBlockRealPointer = pp => pp.isTrusted && !(0, vp.v)(pp) && this.isShowing(), this.noteRealPointer = pp => {
            pp instanceof MouseEvent && pp.isTrusted && !(0, vp.v)(pp) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = pp.clientX, this.lastRealPointer.y = pp.clientY)
          }, this.wakePressActs = pp => {
            var ip;
            return pp === (0, Dp.g)("inventoryClose") ? !(null !== (ip = (0, Kp.c)()) && void 0 !== ip && ip.isHolding()) : !(pp !== (0, Dp.g)("inventory") || !Oc()) || ((0, yp.C)(pp) ? this.isNavButton(pp) : ic.some((ip => (0, Dp.g)(ip) === pp)))
          }
        }
        frame(pp) {
          var ip, cp, Op, op, Ip;
          const Sp = (0, Kp.c)();
          if (!(0, Wp.n)()) return void(this.wasShowing && (this.endInteraction(Sp), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), pp.wokeDevice && this.focusWakePointer(!(null === Sp || void 0 === Sp || !Sp.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Pp.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const xp = performance.now();
          this.handleNavigation(pp, xp), this.handlePanels(pp), this.handlePaging(pp, xp), this.handleScroll(pp), this.handleButtons(pp, xp, Sp), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Lp = this.ensureFocus(),
            Yp = this.focusContext(Sp);
          this.ring.show(Lp);
          const Ap = "slot" === Yp.kind ? Yp.idx : null,
            yp = null !== (ip = null === (cp = Yp.actionElement) || void 0 === cp ? void 0 : cp.querySelector(".DoCraftItem")) && void 0 !== ip ? ip : Yp.actionElement;
          this.pointer ? (this.hover.sync(Sp, Ap, yp, ((pp, ip) => {
            const cp = ip ? Fi() : 0;
            return {
              clientX: pp.x - cp,
              clientY: pp.y - cp
            }
          })(this.pointer, Yp.holding), Yp.holding), rp.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: pp.isHeld((0, Dp.g)("inventoryPrimary"))
          })) : Lp && this.focused && this.hover.sync(Sp, Ap, yp, ((pp, ip) => {
            if (!ip) return {
              clientX: pp.left + pp.width - 10,
              clientY: pp.top + pp.height / 2 - 10
            };
            const cp = Fi();
            return {
              clientX: pp.left + pp.width / 2 - cp,
              clientY: pp.top + pp.height / 2 - cp
            }
          })(Lp, Yp.holding), Yp.holding), this.publishState({
            showing: !0,
            kind: Yp.kind,
            holding: Yp.holding,
            slotHasItem: Yp.slotHasItem,
            pressHints: null !== (Op = null === (op = Yp.press) || void 0 === op ? void 0 : op.hints) && void 0 !== Op ? Op : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Ti(this.focusTarget),
            openButtonCloses: Oc(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Yp.kind && !(null === (Ip = Yp.actionElement) || void 0 === Ip || !Ip.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(pp) {
          var ip;
          const cp = (0, Wp.d)();
          if (!cp) return;
          this.targets.revalidate();
          const Op = this.getTargets().targets;
          this.setFocus(null !== (ip = di(cp, Op)) && void 0 !== ip ? ip : pp ? vi(cp, Op, (pp => {
            let {
              rect: ip
            } = pp;
            const Op = Math.max(ip.left - cp.x, 0, cp.x - (ip.left + ip.width)),
              op = Math.max(ip.top - cp.y, 0, cp.y - (ip.top + ip.height));
            return Math.hypot(Op, op) <= Math.min(ip.width, ip.height) / 2
          })) : null, !1), "cursor" === (0, Pp.h)().inventoryNavigation && (this.pointer = {
            x: cp.x,
            y: cp.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const pp = this.lastRealPointer;
          if (!pp || "keyboardMouse" !== Lp.c.get("activeInputDevice")) return;
          const ip = document.elementFromPoint(pp.x, pp.y);
          ip && (0, gp.m)(null, ip, pp)
        }
        endInteraction(pp) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const ip of this.dpadTimers.values()) ip.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(pp), this.ring.hide(), this.releasePointer(), this.publishState(bi.d)
        }
        getTargets() {
          const pp = this.targets.get();
          return this.hasCategories = pp.hasCategories, pp
        }
        currentTarget() {
          var pp;
          return this.focused && null !== (pp = this.getTargets().byElement.get(this.focused)) && void 0 !== pp ? pp : null
        }
        readFocusRect() {
          const pp = this.focused;
          if (null === pp || void 0 === pp || !pp.isConnected || !pp.closest(ji)) return null;
          const ip = pp.getBoundingClientRect();
          return ip.width > 0 && ip.height > 0 ? {
            left: ip.left,
            top: ip.top,
            width: ip.width,
            height: ip.height
          } : null
        }
        ensureFocus() {
          const pp = this.readFocusRect();
          if (pp || this.pointer) return pp;
          const {
            targets: ip,
            byElement: cp
          } = this.getTargets();
          let Op = null,
            op = !1;
          if (this.lastRect) Op = vi(Yi(this.lastRect), ip);
          else {
            var Ip, Sp;
            const pp = ((pp, ip) => {
                const cp = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return cp ? Ic(pp.filter((pp => cp.contains(pp.element))), ip) : null
              })(ip, (0, Kp.c)()),
              xp = ip.find((pp => null !== pp.idx && pp.idx === this.reopenSlotIdx)),
              Lp = document.querySelector(si);
            op = null !== pp || void 0 !== xp, Op = null !== (Ip = null !== (Sp = null !== pp && void 0 !== pp ? pp : xp) && void 0 !== Sp ? Sp : Lp && cp.get(Lp)) && void 0 !== Ip ? Ip : ei(ip)
          }
          return this.setFocus(Op, op), this.lastRect
        }
        setFocus(pp) {
          let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          pp && (this.focused = pp.element, this.focusTarget = pp, this.panelMemory.set(pp.panel, pp.element), ip && pp.scrollContainer && ((pp, ip) => {
            const cp = pp.getBoundingClientRect(),
              Op = Jp(ip),
              op = ip.scrollTop;
            return cp.top < Op.top ? ip.scrollTop -= Op.top - cp.top : cp.bottom > Op.bottom && (ip.scrollTop += cp.bottom - Op.bottom), ip.scrollTop !== op
          })(pp.element, pp.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Pp.h)().inventoryNavigation) {
              if (this.lastRect) {
                const pp = Yi(this.lastRect);
                this.pointer = {
                  x: pp.x,
                  y: pp.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const pp = this.lastRect ? Yi(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: pp.x,
            y: pp.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, rp.hide()
        }
        hoverAtPointer() {
          var pp;
          const ip = di(this.pointer, this.getTargets().targets);
          this.focusTarget = ip, (null === ip || void 0 === ip ? void 0 : ip.element) !== this.focused && (this.focused = null !== (pp = null === ip || void 0 === ip ? void 0 : ip.element) && void 0 !== pp ? pp : null, ip && (this.panelMemory.set(ip.panel, ip.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(pp, ip) {
          const cp = this.focusTarget,
            Op = cp && (0, Pp.h)().cursorMagnetism ? Yi(ti(cp)) : null;
          this.pointer = jp(this.pointer, {
            stick: pp.leftStick,
            moveDeadzone: (0, Pp.h)().moveDeadzone,
            dpad: ip,
            dtMs: pp.dtMs,
            cursorSpeedPercent: (0, Pp.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Op
            }
          })
        }
        move(pp) {
          this.targets.revalidate();
          const ip = this.currentTarget();
          ip && this.setFocus(wi(ip, this.getTargets().targets, pp))
        }
        step(pp) {
          const ip = this.pointer;
          if (ip && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((pp, ip, cp) => {
            var Op;
            const op = {
              key: "",
              rect: {
                left: pp.x,
                top: pp.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Op = wi(op, ip, cp)) && void 0 !== Op ? Op : vi(pp, ip)
          })(ip, this.getTargets().targets, pp));
          this.move(pp)
        }
        isNavButton(pp) {
          return !pc.some((ip => (0, Dp.g)(ip) === pp)) && !(pp === (0, Dp.g)("inventory") && Oc())
        }
        handleNavigation(pp, ip) {
          const cp = (0, Pp.h)().inventoryNavigation,
            Op = {
              x: 0,
              y: 0
            };
          let op = null;
          for (const Lp of yp.w) {
            const Ip = this.isNavButton(Lp) && pp.isHeld(Lp);
            Ip && (Op.x += Ki[Lp].x, Op.y += Ki[Lp].y), this.dpadTimers.get(Lp).update(Ip, ip) && "cursor" !== cp && (op ??= Lp)
          }
          const Ip = this.stickGate.update(pp.leftStick, (0, Pp.h)().moveDeadzone);
          if (op && (this.step(op), this.stickGate.lock()), "slot" !== cp) {
            const ip = ((pp, ip, cp, Op) => "hybrid" !== pp ? "cursor" === pp : !Op && (ip || cp))(cp, null !== this.pointer, Ip, null !== op);
            return ip && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(pp, "cursor" === cp ? Op : {
              x: 0,
              y: 0
            }))
          }
          const Sp = (0, yp.h)(pp.leftStick, (0, Pp.h)().moveDeadzone),
            xp = this.stickRepeat.update(Ip ? (0, yp._)(Sp) : null, ip);
          xp && this.move(xp)
        }
        applyCategoryPlace() {
          const pp = this.placeAfterCategory;
          if (!pp) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const ip = vi(Yi(pp.rect), this.getTargets().targets, (ip => ip.scrollGroup === pp.scrollGroup));
          this.setFocus(ip, !1)
        }
        applyFocusRequest() {
          const pp = (0, Kp.r)();
          pp && (this.targets.invalidate(), this.setFocus((0, Kp.b)(this.getTargets().targets, pp)))
        }
        handlePanels(pp) {
          var ip, cp, Op;
          const op = pp.wasPressed((0, Dp.g)("inventoryPanelPrevious")),
            Ip = pp.wasPressed((0, Dp.g)("inventoryPanelNext"));
          if (!op && !Ip) return;
          const {
            targets: Sp
          } = this.getTargets(), xp = (Lp = ((pp, ip) => {
            const cp = [];
            for (const op of pp) op.visible && !cp.includes(op.panel) && cp.push(op.panel);
            const Op = pp => {
              const Op = ip.indexOf(pp);
              return -1 === Op ? ip.length + cp.indexOf(pp) : Op
            };
            return cp.sort(((pp, ip) => Op(pp) - Op(ip)))
          })(Sp, qi), Yp = null !== (ip = null === (cp = this.focusTarget) || void 0 === cp ? void 0 : cp.panel) && void 0 !== ip ? ip : null, Ap = Ip ? 1 : -1, 0 === Lp.length ? null : Lp[Di(null === Yp ? -1 : Lp.indexOf(Yp), Lp.length, Ap)]);
          var Lp, Yp, Ap;
          if (null === xp) return;
          const Pp = this.panelMemory.get(xp),
            Wp = Sp.filter((pp => pp.panel === xp)),
            yp = null !== (Op = Wp.find((pp => pp.element === Pp && pp.visible))) && void 0 !== Op ? Op : Ic(Wp, (0, Kp.c)());
          this.setFocus(yp)
        }
        handlePaging(pp, ip) {
          const cp = (0, Dp.g)("menuPageUp"),
            Op = (0, Dp.g)("menuPageDown"),
            op = this.pageUpTimer.update(pp.isHeld(cp), ip),
            Ip = this.pageDownTimer.update(pp.isHeld(Op), ip);
          if (!op && !Ip) return;
          const Sp = Ip ? 1 : -1;
          if (!pp.wasPressed(Ip ? Op : cp) && this.hasCategories) return;
          if ((pp => {
              const ip = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === ip.length) return !1;
              const cp = ip.findIndex((pp => pp.classList.contains("Selected"))),
                Op = ip[Di(cp, ip.length, pp)];
              return (0, gp.k)(Op, (0, gp.q)(Op)), !0
            })(Sp)) {
            var xp, Lp;
            this.targets.invalidate();
            const pp = null !== (xp = null === (Lp = this.focusTarget) || void 0 === Lp ? void 0 : Lp.scrollGroup) && void 0 !== xp ? xp : null,
              ip = this.readFocusRect();
            return void(this.placeAfterCategory = null !== pp && ip && !this.pointer ? {
              rect: ip,
              scrollGroup: pp
            } : null)
          }
          const {
            targets: Yp
          } = this.getTargets(), Ap = this.currentTarget(), Pp = Ap && Ti(Ap) ? Ap : Yp.find((pp => Ti(pp) && pp.visible));
          if (!Pp) return;
          const Wp = ((pp, ip, cp, Op) => {
            if (null === pp.scrollGroup) return null;
            const op = Yi(pp.rect),
              Ip = op.x,
              Sp = op.y + ("Down" === cp ? Op : -Op);
            let xp = null,
              Lp = 1 / 0;
            for (const Yp of ip) {
              if (Yp.scrollGroup !== pp.scrollGroup || Yp.key === pp.key) continue;
              const ip = Yi(Yp.rect);
              if ("Down" === cp ? ip.y <= op.y : ip.y >= op.y) continue;
              const Op = Math.hypot(ip.x - Ip, ip.y - Sp);
              Op < Lp && (xp = Yp, Lp = Op)
            }
            return xp
          })(Pp, Yp, Sp > 0 ? "Down" : "Up", Pp.scrollContainer.clientHeight);
          this.setFocus(null !== Wp && void 0 !== Wp ? Wp : Pp)
        }
        handleScroll(pp) {
          var ip, cp, Op, op, Ip, Sp;
          if (!this.scroller.isScrolling(pp.rightStick)) return void this.scroller.reset();
          const {
            targets: xp
          } = this.getTargets(), Lp = this.pointer, Yp = !Lp && this.focusTarget && Ti(this.focusTarget) ? this.focusTarget.scrollContainer : null, Dp = Lp && (null === (ip = xp.find((pp => pp.clip && Hi(pp.clip, Lp)))) || void 0 === ip ? void 0 : ip.scrollContainer), Ap = null !== (cp = null !== (Op = null !== (op = this.scroller.current()) && void 0 !== op ? op : Dp) && void 0 !== Op ? Op : Yp) && void 0 !== cp ? cp : null === (Ip = xp.find(Ti)) || void 0 === Ip ? void 0 : Ip.scrollContainer;
          if (!Ap || !this.scroller.step(Ap, pp.rightStick, pp.dtMs)) return;
          this.targets.scrolled(Ap);
          const Pp = Lp || (null === (Sp = this.focusTarget) || void 0 === Sp ? void 0 : Sp.scrollContainer) !== Ap ? null : this.readFocusRect();
          if (!Pp) return;
          const Wp = Jp(Ap),
            yp = Yi(Pp);
          if (yp.y < Wp.top || yp.y > Wp.bottom) {
            const pp = this.focusTarget.scrollGroup,
              ip = vi(yp, this.getTargets().targets, (ip => ip.scrollGroup === pp));
            this.setFocus(ip, !1)
          }
        }
        focusContext(pp) {
          const {
            kind: ip,
            idx: cp
          } = this.focused ? li(this.focused) : {
            kind: null,
            idx: null
          }, Op = this.focused ? Ei(this.focused) : null, op = Op ? (0, Zi.d)(Op) : null;
          return {
            kind: ip,
            idx: cp,
            actionElement: Op,
            press: op,
            hasPress: null !== op,
            hasBack: !(null === op || void 0 === op || !op.back),
            holding: pp.isHolding(),
            slotHasItem: null !== cp && pp.hasItemAt(cp)
          }
        }
        handleButtons(pp, ip, cp) {
          var Op, op;
          if (!this.activePress || pp.isHeld(this.activePress.button) && (Op = this.activePress.target, op = this.focused, null !== Op.recipe ? Xi(op).recipe === Op.recipe : op === Op.element) || this.releasePress(), this.scrollStickClick.update(pp.rightStick, ip), !this.handleHotbarPick(pp, cp)) {
            for (const [Op, op] of Vi) {
              const Ip = (0, Dp.g)(op);
              if (!pp.wasPressed(Ip) || "openButton" === Op && !Oc()) continue;
              if ("RS" === Ip && !this.scrollStickClick.allowsClick(ip)) continue;
              const Sp = this.focusContext(cp),
                xp = zp(Op, Sp);
              xp && this.runIntent(xp, Sp, Ip, cp)
            }
            this.handleDrop(pp, ip, cp)
          }
        }
        handleHotbarPick(pp, ip) {
          const cp = this.hotbarPick;
          if (!cp) return !1;
          const Op = pp.wasPressed((0, Dp.g)("inventoryPrimary")) || pp.wasPressed((0, Dp.g)("inventoryHotbarSwap"));
          if (!Op && !pp.wasPressed((0, Dp.g)("inventoryClose")) && !ip.isHolding()) return !(pp.wasPressed((0, Dp.g)("inventory")) && Oc());
          const op = this.focusTarget;
          Op && "hotbar" === (null === op || void 0 === op ? void 0 : op.panel) && null !== op.idx && op.idx !== cp.idx && (ip.swapWithHotbar(op.idx, cp.idx), this.afterAction()), this.hotbarPick = null;
          const Ip = cp.element.isConnected ? this.getTargets().byElement.get(cp.element) : void 0;
          return Ip && this.setFocus(Ip), !0
        }
        startHotbarPick(pp) {
          var ip;
          const {
            targets: cp,
            byElement: Op
          } = this.getTargets(), op = document.querySelector(si), Ip = null !== (ip = op && Op.get(op)) && void 0 !== ip ? ip : cp.find((pp => "hotbar" === pp.panel));
          Ip && this.focused && (this.hotbarPick = {
            idx: pp,
            element: this.focused
          }, this.setFocus(Ip))
        }
        focusKey() {
          return this.focused ? oi(this.focused) : null
        }
        handleDrop(pp, ip, cp) {
          const Op = (0, Dp.g)("inventoryDrop");
          if (pp.wasPressed(Op)) {
            const pp = (op = this.focusContext(cp)).holding ? {
              kind: "sx"
            } : "slot" === op.kind && op.slotHasItem && null !== op.idx ? {
              kind: "slot",
              idx: op.idx
            } : null;
            return void(pp && (this.dropFrom(pp, !1, cp), this.dropLatch.press(pp, this.focusKey(), ip, wp.e[(0, Pp.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var op;
          const Ip = this.dropLatch.update(pp.isHeld(Op), this.focusKey(), ip);
          Ip && ((pp, ip, cp) => "sx" === pp.kind ? ip : !ip && cp(pp.idx))(Ip, cp.isHolding(), cp.hasItemAt) && (this.dropFrom(Ip, !0, cp), this.afterAction())
        }
        dropFrom(pp, ip, cp) {
          "sx" === pp.kind ? cp.dropHeld(ip, this.slotPoint()) : cp.dropSlot(pp.idx, ip)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (pp => {
            const ip = Yi(pp);
            return {
              clientX: ip.x,
              clientY: ip.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(pp, ip, cp, Op) {
          const op = ip.idx,
            Ip = ip.actionElement;
          switch (Ip && oc.has(pp) && (0, vp.z)(Ip), pp) {
            case "slotPrimary":
              Op.primary(op, this.slotPoint());
              break;
            case "slotSecondary":
              Op.secondary(op, this.slotPoint());
              break;
            case "slotQuickMove":
              Op.quickMove(op, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(op);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(ip.press, "pressPrimary" === pp ? "primary" : "secondary", cp);
              break;
            case "click":
              (0, gp.k)(Ip, (0, gp.q)(Ip));
              break;
            case "openKeyboard":
              (0, gp.B)(Ip) && (0, gp.z)(Ip);
              break;
            case "pressBack":
              ip.press.back();
              break;
            case "cancel":
              Op.cancel();
              break;
            case "close":
              return this.releasePress(), void Op.close()
          }
          this.afterAction()
        }
        startPress(pp, ip, cp) {
          this.releasePress(), pp.press(ip) && (this.activePress = {
            handlers: pp,
            button: cp,
            target: Xi(this.focused)
          })
        }
        releasePress() {
          var pp, ip, cp;
          null === (pp = this.activePress) || void 0 === pp || null === (ip = (cp = pp.handlers).release) || void 0 === ip || ip.call(cp), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(pp) {
          ((pp, ip) => {
            var cp, Op, op, Ip, Sp, xp;
            return pp.showing === ip.showing && pp.kind === ip.kind && pp.holding === ip.holding && pp.slotHasItem === ip.slotHasItem && (null === (cp = pp.pressHints) || void 0 === cp ? void 0 : cp.primary) === (null === (Op = ip.pressHints) || void 0 === Op ? void 0 : Op.primary) && (null === (op = pp.pressHints) || void 0 === op ? void 0 : op.secondary) === (null === (Ip = ip.pressHints) || void 0 === Ip ? void 0 : Ip.secondary) && (null === (Sp = pp.pressHints) || void 0 === Sp ? void 0 : Sp.back) === (null === (xp = ip.pressHints) || void 0 === xp ? void 0 : xp.back) && pp.hasCategories === ip.hasCategories && pp.hasList === ip.hasList && pp.openButtonCloses === ip.openButtonCloses && pp.steppingSlots === ip.steppingSlots && pp.hotbarPicking === ip.hotbarPicking && pp.quickMoveToHotbar === ip.quickMoveToHotbar && pp.dropStackHold === ip.dropStackHold
          })(pp, this.state) || (this.state = pp, Yp.m.GA(bi.g, pp))
        }
      },
      Lc = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Yc = cp(8835),
      Dc = cp(322),
      Ac = cp(1650),
      Pc = cp(8318);
    const Wc = "[data-pad-secondary]",
      yc = pp => pp instanceof HTMLElement && (0, Vp.t)(pp) && !(0, Vp.z)(pp),
      Uc = pp => {
        const ip = pp.querySelector(Wc);
        if (ip && yc(ip)) return ip;
        for (const op of null !== (cp = null === (Op = pp.parentElement) || void 0 === Op ? void 0 : Op.children) && void 0 !== cp ? cp : []) {
          var cp, Op;
          if (op !== pp && op.matches(Wc) && yc(op)) return op
        }
        return null
      },
      wc = (pp, ip, cp, Op) => Math.max(0, Math.max(pp, cp) - Math.min(ip, Op)),
      vc = (pp, ip, cp, Op) => Math.max(0, Math.min(ip, Op) - Math.max(pp, cp)),
      tc = (pp, ip, cp) => {
        const Op = (pp.left + pp.right) / 2,
          op = (pp.top + pp.bottom) / 2,
          Ip = (ip.left + ip.right) / 2,
          Sp = (ip.top + ip.bottom) / 2;
        if ("Left" === cp || "Right" === cp) {
          const xp = "Right" === cp ? 1 : -1;
          return {
            forwardGap: "Right" === cp ? ip.left - pp.right : pp.left - ip.right,
            centreForward: (Ip - Op) * xp,
            sidewaysGap: wc(pp.top, pp.bottom, ip.top, ip.bottom),
            sidewaysOverlap: vc(pp.top, pp.bottom, ip.top, ip.bottom),
            centreSideways: Math.abs(Sp - op),
            startSideways: Math.abs(ip.top - pp.top),
            fromSidewaysSize: pp.bottom - pp.top,
            toSidewaysSize: ip.bottom - ip.top,
            toLength: ip.right - ip.left
          }
        }
        const xp = "Down" === cp ? 1 : -1;
        return {
          forwardGap: "Down" === cp ? ip.top - pp.bottom : pp.top - ip.bottom,
          centreForward: (Sp - op) * xp,
          sidewaysGap: wc(pp.left, pp.right, ip.left, ip.right),
          sidewaysOverlap: vc(pp.left, pp.right, ip.left, ip.right),
          centreSideways: Math.abs(Ip - Op),
          startSideways: Math.abs(ip.left - pp.left),
          fromSidewaysSize: pp.right - pp.left,
          toSidewaysSize: ip.right - ip.left,
          toLength: ip.bottom - ip.top
        }
      },
      Hc = pp => pp.centreForward > .5 && pp.forwardGap >= -pp.toLength / 2,
      dc = pp => {
        const ip = pp.sidewaysOverlap > 0 ? 0 : 2 * pp.fromSidewaysSize,
          cp = pp.fromSidewaysSize > 1.5 * pp.toSidewaysSize ? pp.startSideways : pp.centreSideways;
        return Math.max(0, pp.forwardGap) + 3 * pp.sidewaysGap + ip + .1 * cp
      },
      ec = (pp, ip) => vc(pp.top, pp.bottom, ip.top, ip.bottom) > 0 || ip.bottom - ip.top > ip.right - ip.left,
      uc = (pp, ip, cp, Op, op, Ip) => {
        const Sp = op ? kc(pp, ip, cp, op) : new Set,
          xp = Rc(pp, ip, cp, Sp);
        return xp < 0 && Sp.size > 0 && Ip ? jc(pp, ip, cp, Ip) : Op && xp >= 0 ? mc(pp, ip, cp, Op, xp, Sp) : xp
      },
      jc = (pp, ip, cp, Op) => {
        const op = new Set,
          Ip = Rc(pp, ip, "Up", op) >= 0,
          Sp = Rc(pp, ip, "Down", op) >= 0,
          xp = new Set;
        return ip.forEach(((ip, cp) => {
          const op = ip.top + ip.bottom < pp.top + pp.bottom;
          Op[cp] && !(op ? Ip : Sp) || xp.add(cp)
        })), Rc(pp, ip, cp, xp)
      },
      kc = (pp, ip, cp, Op) => {
        const op = new Set;
        return "Left" !== cp && "Right" !== cp || ip.forEach(((ip, cp) => {
          Op[cp] && vc(pp.top, pp.bottom, ip.top, ip.bottom) <= 0 && op.add(cp)
        })), op
      },
      mc = (pp, ip, cp, Op, op, Ip) => {
        const Sp = tc(pp, ip[op], cp).forwardGap;
        let xp = op,
          Lp = Op[op],
          Yp = 1 / 0;
        return ip.forEach(((ip, Dp) => {
          const Ap = Op[Dp];
          if (Ip.has(Dp) || Ap < Lp || Ap === Lp && xp === op) return;
          const Pp = tc(pp, ip, cp);
          if (!Hc(Pp) || Pp.forwardGap < 0 || Pp.forwardGap >= Sp) return;
          const Wp = dc(Pp);
          (Ap > Lp || Wp < Yp) && (xp = Dp, Lp = Ap, Yp = Wp)
        })), xp
      },
      Rc = (pp, ip, cp, Op) => {
        let op = -1,
          Ip = 1 / 0;
        if (ip.forEach(((ip, Sp) => {
            const xp = ((pp, ip, cp) => {
              const Op = tc(pp, ip, cp);
              if (!Hc(Op)) return null;
              const op = Math.max(0, Op.forwardGap);
              return Op.sidewaysOverlap <= 0 && Op.sidewaysGap > 2 * (op + 1) ? null : dc(Op)
            })(pp, ip, cp);
            null !== xp && xp < Ip && !Op.has(Sp) && (Ip = xp, op = Sp)
          })), op < 0) return -1;
        const Sp = ip[op],
          xp = tc(pp, Sp, cp).forwardGap;
        let Lp = xp,
          Yp = op;
        return ip.forEach(((ip, Ip) => {
          if (Ip === op || Op.has(Ip) || !((pp, ip, cp) => {
              const Op = "Left" === cp || "Right" === cp,
                op = Op ? vc(pp.top, pp.bottom, ip.top, ip.bottom) : vc(pp.left, pp.right, ip.left, ip.right),
                Ip = Op ? Math.min(pp.bottom - pp.top, ip.bottom - ip.top) : Math.min(pp.right - pp.left, ip.right - ip.left);
              return op > 0 && op >= Ip / 2
            })(ip, Sp, cp)) return;
          const Dp = tc(pp, ip, cp);
          Hc(Dp) && Dp.forwardGap + Dp.toLength <= xp + 1 && Dp.forwardGap < Lp && (Lp = Dp.forwardGap, Yp = Ip)
        })), Yp
      },
      qc = (pp, ip) => {
        let cp = -1,
          Op = 1 / 0;
        return ip.forEach(((ip, op) => {
          const Ip = Math.max(ip.left - pp.x, 0, pp.x - ip.right),
            Sp = Math.max(ip.top - pp.y, 0, pp.y - ip.bottom),
            xp = Math.hypot(Ip, Sp);
          xp < Op && (Op = xp, cp = op)
        })), cp
      },
      Mc = (pp, ip) => {
        const cp = Math.min(pp.bottom - pp.top, ip.bottom - ip.top) / 2;
        return Math.abs(pp.top - ip.top) > cp ? pp.top - ip.top : pp.left - ip.left
      },
      Cc = pp => {
        let ip = -1;
        for (let cp = 0; cp < pp.length; cp++)(ip < 0 || Mc(pp[cp], pp[ip]) < 0) && (ip = cp);
        return ip
      };
    var Ec = cp(1698),
      Xc = cp(8839),
      lc = cp(8843);
    const Qc = pp => {
        if ("death" !== pp || "inGame" !== Lp.c.get("gameState") || "off" === (0, Pp.h)().quickChat || null === (0, Ec.b)()) return !1;
        const ip = (0, Dp.g)("chat");
        return ip !== (0, Dp.g)("menuConfirm") && ip !== (0, Dp.g)("menuBack")
      },
      Jc = new Xc.e;
    var Bc = cp(4379),
      Nc = cp(8852),
      Tc = cp(8858);
    const fc = pp => {
        let ip = null;
        for (const cp of pp.querySelectorAll("[data-pad-tabs]"))(0, Vp.t)(cp) && (!ip || Number(cp.dataset.padTabs) < Number(ip.dataset.padTabs)) && (ip = cp);
        return ip
      },
      bc = (pp, ip, cp, Op) => {
        pp.focusWhenFound((() => {
          const op = pp.pickInitial(ip);
          if (op && !cp.has(op) && (null === Op || void 0 === Op || !Op.contains(op))) return op;
          const Ip = ((pp, ip) => {
              const cp = ip => pp.getEnabledCandidates(ip).filter((pp => !pp.closest("[data-pad-tabs]")));
              for (const Op of (0, Vp.i)(ip)) {
                const pp = cp(Op);
                if (pp.length > 0) return pp
              }
              return cp(ip)
            })(pp, ip).filter((pp => !cp.has(pp))),
            Sp = Cc(Ip.map((pp => pp.getBoundingClientRect())));
          return Sp >= 0 ? Ip[Sp] : null
        }), 3e3)
      },
      hc = (pp, ip, cp, Op) => {
        var op;
        const Ip = ((pp, ip) => {
          if (0 === pp.length) return null;
          const cp = pp.findIndex((pp => "true" === pp.dataset.padSelected));
          return cp < 0 ? ip > 0 ? pp[0] : pp[pp.length - 1] : pp[(cp + ip + pp.length) % pp.length]
        })([...cp.querySelectorAll("[data-pad-tab]")].filter((pp => (0, Vp.t)(pp) && !(0, Vp.z)(pp))), Op);
        if (!Ip) return;
        const Sp = null !== (op = null === pp || void 0 === pp ? void 0 : pp.getFocused()) && void 0 !== op ? op : null,
          xp = !(null === Sp || void 0 === Sp || !Sp.isConnected) && cp.contains(Sp),
          Lp = pp && !xp ? new Set(pp.getEnabledCandidates(ip)) : null;
        (0, gp.b)(Ip), pp && (Lp ? bc(pp, ip, Lp, cp) : pp.setFocus(Ip, {
          byUser: !0
        }))
      },
      ac = pp => {
        var ip;
        const cp = Jp(null !== (ip = Mp(pp, "x")) && void 0 !== ip ? ip : pp),
          Op = (0, Vp.e)(pp).filter((pp => !(0, Vp.z)(pp))),
          op = Op.filter((pp => Bp(pp.getBoundingClientRect(), cp)));
        return (op.length > 0 ? op : Op).sort(((pp, ip) => Mc(pp.getBoundingClientRect(), ip.getBoundingClientRect())))
      },
      nc = (pp, ip, cp) => {
        const Op = [...ip.querySelectorAll("[data-pad-row]")].filter(Vp.t),
          op = pp.getFocused(),
          Ip = op ? Op.findIndex((pp => pp.contains(op))) : -1;
        let Sp = 0,
          xp = cp > 0 ? 0 : Op.length - 1;
        if (Ip >= 0 && op) Sp = Math.max(0, ac(Op[Ip]).indexOf(op)), xp = Ip + cp;
        else if (op) {
          const pp = op.getBoundingClientRect(),
            ip = Op.map((ip => {
              const Op = ip.getBoundingClientRect();
              return cp > 0 ? Op.top >= pp.top : Op.bottom <= pp.bottom
            }));
          xp = cp > 0 ? ip.indexOf(!0) : ip.lastIndexOf(!0)
        }
        for (let Lp = xp; Lp >= 0 && Lp < Op.length; Lp += cp) {
          const ip = ac(Op[Lp]);
          if (ip.length > 0) return void pp.setFocus(ip[Math.min(Sp, ip.length - 1)], {
            byUser: !0
          })
        }
      },
      Fc = (pp, ip, cp) => {
        var Op, op;
        const Ip = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.getFocused()) && void 0 !== Op ? Op : null,
          Sp = null !== Ip && void 0 !== Ip && Ip.closest("[data-pad-row]") ? "x" : "y",
          xp = null !== (op = Ip ? Mp(Ip, Sp, ip) : null) && void 0 !== op ? op : Ep(ip, Sp);
        if (!xp) return;
        const Lp = Ip ? (0, gp.q)(Ip) : null;
        if (Qp(xp, Sp, cp * ("y" === Sp ? xp.clientHeight : xp.clientWidth) * .85), !pp || !Lp) return;
        const Yp = Jp(xp),
          Dp = pp.getEnabledCandidates(ip).filter((pp => xp.contains(pp) && Bp(pp.getBoundingClientRect(), Yp))),
          Ap = qc(Lp, Dp.map((pp => pp.getBoundingClientRect())));
        Ap >= 0 && pp.setFocus(Dp[Ap], {
          scroll: !1,
          byUser: !0
        })
      };
    let gc = null;
    const Gc = (pp, ip) => {
        var cp, Op;
        const op = ip.querySelector("[data-pad-friends-column]"),
          Ip = pp.getFocused();
        if (!op || !Ip || !op.contains(Ip)) return !1;
        const Sp = pp.getEnabledCandidates(ip).filter((pp => !op.contains(pp))),
          xp = qc((0, gp.q)(Ip), Sp.map((pp => pp.getBoundingClientRect()))),
          Lp = null === (cp = gc) || void 0 === cp ? void 0 : cp.deref();
        return pp.setFocus(null !== Lp && void 0 !== Lp && Lp.isConnected ? Lp : null !== (Op = Sp[xp]) && void 0 !== Op ? Op : null, {
          byUser: !0
        }), !0
      },
      rc = pp => {
        const ip = (0, Dp.g)(pp);
        return (0, yp.C)(ip) || Pc.s.some((pp => (0, Dp.g)(pp) === ip)) ? null : ip
      },
      Zc = (pp, ip) => {
        const cp = rc(ip);
        return null !== cp && pp.wasPressed(cp)
      },
      zc = function(pp, ip, cp) {
        let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const op = (pp => {
            var ip, cp;
            return null !== (ip = null === (cp = fc(pp)) || void 0 === cp ? void 0 : cp.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ip ? ip : null
          })(ip),
          Ip = pp && op ? new Set(pp.getEnabledCandidates(ip)) : null;
        (0, Yc.b)(), cp === Dc.n.SETTINGS && (0, Ac.j)(Lp.c.get("openEverythingMenuName")) ? Lp.c.set({
          openEverythingMenuName: cp
        }) : (0, Ac.q)((0, Tc.b)("padMenuShortcut"), cp, Op), pp && Ip && op && bc(pp, ip, Ip, op.closest("[data-pad-tabs]"))
      },
      sc = pp => null !== pp.closest(".Dropdown-root") || null !== pp.querySelector(".Dropdown-root.is-open"),
      Kc = pp => null !== (0, Nc.b)() && "popup" !== pp.layer.kind && !fc(pp.root) && !sc(pp.root),
      Vc = (0, Up.e)(yp.R),
      pO = (0, Up.e)(yp.R),
      iO = (pp, ip, cp) => {
        if (((pp, ip) => {
            const cp = (0, Dp.g)("chat");
            return Qc(ip) && pp.isHeld(cp) ? "hold" === Jc.update(pp.wasPressed(cp), pp.isHeld(cp), performance.now(), wp.e[(0, Pp.h)().tapHoldTime].wheelMs) && (Ap.d.consumeButton(cp), Yp.m.GA(lc.n), !0) : (Jc.release(), !1)
          })(ip, cp.layer.kind)) return !0;
        const Op = cp.root;
        for (const [Sp, xp] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (ip.wasPressed((0, Dp.g)(Sp))) {
            const ip = sc(Op) ? null : fc(Op);
            if (ip) hc(pp, Op, ip, xp);
            else if (Kc(cp)) {
              var op;
              const ip = pp ? new Set(pp.getEnabledCandidates(Op)) : null;
              null !== (op = (0, Nc.b)()) && void 0 !== op && op(xp) && pp && ip && bc(pp, Op, ip, null)
            } else pp && nc(pp, Op, xp);
            return !0
          } for (const [Sp, xp, Lp] of [
            ["menuPageUp", -1, Vc],
            ["menuPageDown", 1, pO]
          ]) {
          const cp = (0, Dp.g)(Sp);
          if (ip.wasPressed(cp) && Lp.reset(), Lp.update(ip.isHeld(cp), performance.now())) return Fc(pp, Op, xp), !0
        }
        const Ip = "popup" === cp.layer.kind;
        return Zc(ip, "pause") ? (Ip || (0, Ac.n)() && "menu" !== cp.layer.kind || zc(pp, Op, (0, Ac.n)() ? Dc.n.SETTINGS : (0, Bc.d)()), !0) : !!Zc(ip, "leaderboard") && ("home" === cp.layer.kind ? (pp => {
          const ip = [...pp.querySelectorAll("[data-pad-notifications]")].find(Vp.t);
          ip && (0, gp.b)(ip)
        })(Op) : Ip || zc(pp, Op, Dc.n.LOBBY_LEADERBOARD, "inGame" === Lp.c.get("gameState")), !0)
      },
      cO = (pp, ip, cp) => {
        if (iO(pp, ip, cp)) return !0;
        const Op = "home" === cp.layer.kind;
        if (ip.wasPressed((0, Dp.g)("menuSecondary"))) {
          const ip = pp.getFocused(),
            op = ip ? Uc(ip) : null;
          if (op) return (0, gp.b)(op), !0;
          if (Op) {
            const ip = cp.root.querySelector("[data-pad-search] input");
            return ip && (0, Vp.v)(ip, cp.root) ? (pp.setFocus(ip, {
              byUser: !0
            }), (0, gp.b)(ip)) : Lp.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Op || !Zc(ip, "inventory")) && (((pp, ip) => {
          var cp, Op;
          const op = ip.querySelector("[data-pad-friends-column]");
          if (!op || !(0, Vp.t)(op)) return void(0, Ac.q)((0, Tc.b)("padMenuShortcut"), Dc.n.SOCIAL);
          if (Gc(pp, ip)) return;
          const Ip = null !== (cp = null === (Op = op.querySelector("[data-pad-friends-start]")) || void 0 === Op ? void 0 : Op.getBoundingClientRect().top) && void 0 !== cp ? cp : -1 / 0,
            Sp = pp.getEnabledCandidates(op),
            xp = Sp.filter((pp => pp.getBoundingClientRect().top >= Ip)),
            Lp = xp.length > 0 ? xp : Sp,
            Yp = Cc(Lp.map((pp => pp.getBoundingClientRect())));
          pp.setFocus(Yp >= 0 ? Lp[Yp] : null, {
            byUser: !0
          })
        })(pp, cp.root), !0)
      },
      OO = pp => {
        var ip, cp, Op;
        const op = (0, gp.r)(pp);
        if (null !== op) return op;
        const Ip = (null !== (ip = null !== (cp = null !== (Op = pp.getAttribute("aria-label")) && void 0 !== Op ? Op : pp.getAttribute("title")) && void 0 !== cp ? cp : pp.textContent) && void 0 !== ip ? ip : "").replace(/\s+/g, " ").trim();
        return Ip ? `${pp.tagName}:${Ip.slice(0,100)}` : null
      };
    class oO {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(pp) {
        const ip = this.history.indexOf(pp);
        if (ip >= 0) {
          for (const pp of this.history.splice(ip + 1)) this.remembered.delete(pp);
          return !0
        }
        return this.remembered.delete(pp), this.history.push(pp), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(pp) {
        this.remembered.delete(pp);
        const ip = this.history.indexOf(pp);
        ip >= 0 && this.history.splice(ip, 1)
      }
      remember(pp, ip, cp, Op) {
        const op = OO(ip),
          Ip = (0, gp.r)(ip),
          Sp = null !== Ip && ((pp, ip) => {
            let cp = 0;
            for (const Op of pp.querySelectorAll("[data-pad-key], [href]"))
              if ((Op.getAttribute("data-pad-key") === ip || Op.getAttribute("href") === ip) && (cp++, cp > 1)) return !0;
            return !1
          })(cp, Ip) ? Math.max(0, this.twins(Op(), Ip).indexOf(ip)) : 0;
        this.remembered.set(pp, {
          element: new WeakRef(ip),
          identity: op,
          ordinal: Sp
        })
      }
      has(pp) {
        return this.remembered.has(pp)
      }
      recall(pp, ip) {
        var cp, Op;
        const op = this.remembered.get(pp);
        if (!op) return null;
        const Ip = op.element.deref();
        if (Ip && ip.includes(Ip)) return Ip;
        if (null === op.identity) return null;
        const Sp = this.twins(ip, op.identity);
        return null !== (cp = null !== (Op = Sp[op.ordinal]) && void 0 !== Op ? Op : Sp[0]) && void 0 !== cp ? cp : null
      }
      twins(pp, ip) {
        return pp.filter((pp => OO(pp) === ip))
      }
    }
    var IO = cp(1295);
    const SO = pp => {
        const ip = [];
        let cp = pp;
        for (; cp && cp !== document.body;) {
          const pp = getComputedStyle(cp).zIndex;
          "auto" !== pp && ip.push(Number(pp) || 0), cp = cp.parentElement
        }
        return ip.reverse()
      },
      xO = (pp, ip) => {
        const cp = ((pp, ip) => {
          const cp = Math.max(pp.length, ip.length);
          for (let Ip = 0; Ip < cp; Ip++) {
            var Op, op;
            const cp = (null !== (Op = pp[Ip]) && void 0 !== Op ? Op : 0) - (null !== (op = ip[Ip]) && void 0 !== op ? op : 0);
            if (0 !== cp) return cp
          }
          return 0
        })(SO(pp), SO(ip));
        if (0 !== cp) return cp > 0;
        if (pp.contains(ip)) return !1;
        if (ip.contains(pp)) return !0;
        const Op = pp.compareDocumentPosition(ip);
        return !!(Op & Node.DOCUMENT_POSITION_PRECEDING) || !(Op & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      LO = (pp, ip) => {
        var cp;
        return null !== (cp = xO(pp.root, ip.root)) && void 0 !== cp ? cp : pp.order > ip.order
      },
      YO = (pp, ip) => ip.some((ip => !ip.contains(pp) && !pp.contains(ip) && !0 === xO(ip, pp)));
    let DO = null,
      AO = null,
      PO = -1;
    const WO = () => {
        var pp;
        const ip = null === (pp = document.timeline) || void 0 === pp ? void 0 : pp.currentTime,
          cp = "number" === typeof ip ? ip : null;
        if (null !== cp && cp === AO && PO === (0, IO.c)()) return DO;
        let Op = null;
        const op = [],
          Ip = [...document.querySelectorAll("[data-pad-covers]")].filter(Vp.t);
        for (const Sp of (0, IO.g)()) {
          const pp = Sp.getRoot(),
            ip = !!pp && (0, Vp.t)(pp) && !YO(pp, Ip);
          if (Sp.shown && !ip && op.push(Sp), Sp.shown = ip, !pp || !ip) continue;
          const cp = {
            layer: Sp,
            root: pp,
            order: Sp.order
          };
          Op && !LO(cp, Op) || (Op = cp)
        }
        DO = Op, AO = cp, PO = (0, IO.c)();
        for (const Sp of op)(0, IO.k)(Sp);
        return DO
      },
      yO = () => {
        const pp = WO();
        return !(null === pp || void 0 === pp || !pp.layer.close) && (pp.layer.close(), AO = null, !0)
      },
      UO = () => {
        var pp, ip;
        return null !== (pp = null === (ip = WO()) || void 0 === ip ? void 0 : ip.root) && void 0 !== pp ? pp : null
      },
      wO = pp => pp ? {
        ...pp,
        root: UO()
      } : null;
    let vO = null,
      tO = null,
      HO = (0, Pp.h)().menuNavigation,
      dO = null;
    const eO = new ep;
    let uO = null;
    Yp.m.subscribe(Pp.g, (() => {
      const pp = (0, Pp.h)().menuNavigation;
      pp !== HO && (HO = pp, vO = null, tO = null)
    }));
    const jO = () => {
        var pp;
        return null !== (pp = vO) && void 0 !== pp ? pp : (0, Pp.h)().menuNavigation
      },
      kO = pp => {
        if (MO()) {
          if (dO = wO(pp), "hybrid" === jO()) return eO.lock(), void(tO = tO ? null : UO());
          vO = "focus" === jO() ? "cursor" : "focus"
        }
      },
      mO = () => {
        const pp = dO;
        return dO = null, pp
      };
    let RO = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const qO = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const cp = RO.root === pp,
          Op = cp ? RO.firstSeenMs : ip,
          op = RO.has || ip - Op > 1e3;
        return (!cp || !op || ip - RO.atMs > 250) && (RO = {
          root: pp,
          firstSeenMs: Op,
          atMs: ip,
          has: (0, Vp.l)(pp)
        }), RO.has
      },
      MO = () => {
        const pp = UO();
        return null !== pp && qO(pp)
      },
      CO = () => {
        const pp = WO();
        return tO && (null === pp || void 0 === pp ? void 0 : pp.root) !== tO && (tO = null), (pp => {
          let {
            mode: ip,
            hasLayer: cp,
            hasCandidates: Op,
            hybridCursorEngaged: op
          } = pp;
          return cp ? "cursor" !== ip && Op() ? "hybrid" === ip && op ? "cursor" : "focus" : "cursor" : null
        })({
          mode: jO(),
          hasLayer: null !== pp,
          hasCandidates: () => null !== pp && qO(pp.root),
          hybridCursorEngaged: null !== tO
        })
      },
      EO = () => "hybrid" === jO() && MO(),
      XO = "pad-focused";
    var lO = cp(4643),
      QO = cp(5149);
    const JO = "[data-pad-destructive]",
      BO = `${JO}, [data-pad-back]`,
      NO = pp => ({
        rect: pp.getBoundingClientRect(),
        destructive: pp.matches(JO),
        closes: null !== pp.closest("[data-pad-close-button]"),
        unavailable: pp.matches("[data-pad-unavailable]")
      }),
      TO = pp => {
        let {
          destructive: ip,
          closes: cp,
          unavailable: Op
        } = pp;
        return ip ? cp ? 2 : 3 : Op ? 1 : 0
      },
      fO = pp => {
        let ip = -1;
        for (let cp = 0; cp < pp.length; cp++) {
          if (ip < 0) {
            ip = cp;
            continue
          }
          const Op = pp[cp],
            op = pp[ip];
          TO(Op) === TO(op) ? Mc(Op.rect, op.rect) < 0 && (ip = cp) : TO(Op) < TO(op) && (ip = cp)
        }
        return ip
      },
      bO = "[data-pad-tabs]",
      hO = "[data-pad-tab]",
      aO = (pp, ip) => {
        const cp = pp.querySelector(`${hO}[data-pad-selected='true']`);
        return cp && ip.includes(cp) ? cp : null
      },
      nO = (pp, ip) => {
        let cp = ip;
        for (let Op = ip.parentElement; Op && !Op.contains(pp); Op = Op.parentElement) cp = Op;
        return cp
      };
    class FO {
      constructor() {
        this.contentReturn = null
      }
      redirect(pp, ip, cp, Op) {
        var op, Ip;
        const Sp = pp.closest(bO),
          xp = ip.closest(bO);
        var Lp;
        if (xp && xp !== Sp) return Sp || (this.contentReturn = new WeakRef(pp)), null !== (Lp = aO(xp, cp)) && void 0 !== Lp ? Lp : ip;
        if (!Sp || xp) return ip;
        const Yp = nO(pp, ip),
          Dp = null === (op = this.contentReturn) || void 0 === op ? void 0 : op.deref();
        return Dp && Yp.contains(Dp) && cp.includes(Dp) ? Dp : null !== (Ip = this.pickRegionStart(Yp, Mp(ip, "y", Op), cp)) && void 0 !== Ip ? Ip : ip
      }
      findTabContent(pp, ip, cp) {
        const Op = pp.closest(bO);
        if (!Op || !pp.matches(hO) || Op.contains(ip)) return null;
        const op = ip.closest(bO);
        if (op && Number(op.dataset.padTabs) <= Number(Op.dataset.padTabs)) return null;
        const Ip = nO(pp, ip);
        return cp.some((pp => Ip.contains(pp) && !pp.closest(BO))) || !ip.closest(BO) ? Ip : null
      }
      pickContentStart(pp, ip, cp) {
        return this.contentReturn = null, this.pickRegionStart(pp, Mp(pp, "y", cp), ip)
      }
      pickReplacedContentStart(pp, ip, cp, Op) {
        if (!ip.contains(pp)) return null;
        const op = nO(ip, pp),
          Ip = cp.filter((pp => ip.contains(pp) && !op.contains(pp) && !pp.closest(BO)));
        return 0 === Ip.length ? null : (this.contentReturn = null, this.pickRegionStart(ip, Mp(Ip[0], "y", Op), Ip))
      }
      backToStrip(pp, ip, cp) {
        if (pp.closest(bO)) return null;
        const Op = fc(cp);
        for (const op of cp.querySelectorAll(bO)) {
          if (Number(op.dataset.padTabs) <= 1 || op === Op) continue;
          const Ip = aO(op, ip),
            Sp = Ip ? nO(pp, op).parentElement : null;
          if (Ip && Sp && Sp !== cp && cp.contains(Sp)) return this.contentReturn = new WeakRef(pp), Ip
        }
        return null
      }
      pickRegionStart(pp, ip, cp) {
        const Op = Jp(ip),
          op = pp => {
            const ip = cp.filter((ip => pp.contains(ip) && !ip.closest(bO) && Bp(ip.getBoundingClientRect(), Op))),
              op = fO(ip.map(NO));
            return op >= 0 ? ip[op] : null
          };
        for (const Ip of (0, Vp.i)(pp)) {
          const pp = op(Ip);
          if (pp) return pp
        }
        for (const Ip of pp.querySelectorAll(bO)) {
          const pp = aO(Ip, cp);
          if (pp) return pp
        }
        return op(pp)
      }
    }
    const gO = "[data-pad-default-focus], .Dropdown-option.is-selected",
      GO = ".Dropdown-root.is-open > .Dropdown-menu",
      rO = "[data-pad-no-step-in]",
      ZO = "[data-pad-tabs]",
      zO = "[data-pad-press-area]",
      sO = pp => {
        let ip = pp;
        for (let cp = 0; ip && cp <= 4; cp++, ip = ip.parentElement) {
          const cp = ip.querySelector(".CircleInfo");
          if (cp) return ip === pp || ip.querySelectorAll(Vp.b).length <= 1 ? cp : null;
          if (ip !== pp && ip.querySelectorAll(Vp.b).length > 1) return null
        }
        return null
      },
      KO = (pp, ip, cp) => {
        (0, gp.m)(pp, ip, cp);
        const Op = null !== pp && void 0 !== pp && pp.isConnected ? sO(pp) : null,
          op = sO(ip);
        Op !== op && (0, gp.m)(Op, op, op ? (0, gp.q)(op) : cp, {
          leaveBelow: pp,
          enterBelow: ip
        })
      },
      VO = pp => pp.getBoundingClientRect(),
      po = (pp, ip, cp) => {
        const Op = new Set(cp);
        for (let op = pp; op; op = op === ip ? null : op.parentElement)
          if (Op.has(op)) return op;
        return null
      },
      io = (pp, ip) => !pp.root || pp.root === ip || ip.matches(GO) && pp.root.contains(ip);
    const co = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new oO, this.tabStripNav = new FO, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Up.e)(yp.p), this.dpadRepeats = new Map(yp.w.map((pp => [pp, (0, Up.e)(yp.y)]))), this.stickRepeat = new yp.b((0, Up.e)(yp.W)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const pp = Ap.d.register({
            name: "focus",
            isActive: () => (0, Wp.n)() && "focus" === CO(),
            onFrame: pp => {
              this.onFrame(pp)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: pp => (0, Ap.f)(pp) || pp === (0, Dp.g)("menuConfirm") && (0, gp.v)((0, Wp.d)())
          }),
          ip = (0, IO.o)((pp => {
            const ip = (0, IO.t)(pp);
            null === pp.memoryKey && this.memory.forget(ip), ip === this.layerKey && (this.layerKey = null)
          }));
        let cp = -1 / 0;
        const Op = Sp.e.onFrame((pp => {
            (0, Wp.n)() || pp.timestampMs - cp < 100 || (cp = pp.timestampMs, WO())
          })),
          op = pp => {
            pp.isTrusted && pp.target instanceof Element && Sp.e.getActivePad() && this.noteChosenStop(pp.target)
          };
        return document.addEventListener("click", op, !0), () => {
          pp(), ip(), Op(), document.removeEventListener("click", op, !0), this.deactivate()
        }
      }
      noteChosenStop(pp) {
        var ip, cp;
        const Op = WO();
        if (!Op || !Op.root.contains(pp)) return;
        const op = null !== (ip = null === (cp = pp.closest(".Dropdown-root")) || void 0 === cp ? void 0 : cp.querySelector(".Dropdown-control")) && void 0 !== ip ? ip : pp,
          Ip = po(op, Op.root, this.getEnabledCandidates(Op.root));
        if (!Ip) return;
        const Sp = (0, IO.t)(Op.layer);
        Sp === this.layerKey && Op.root === this.layerRoot || this.beginLayer(Op, Sp), this.wasActive ? this.setFocus(Ip, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Ip, this.lastFocusedCentre = (0, gp.q)(Ip), this.rememberFocus(Ip), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      notify() {
        for (const pp of this.listeners) pp()
      }
      deactivate() {
        var pp;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const pp of this.dpadRepeats.values()) pp.reset();
          this.stickRepeat.reset(), null !== (pp = this.focused) && void 0 !== pp && pp.isConnected && KO(this.focused, null, (0, gp.q)(this.focused)), this.notify()
        }
      }
      setFocus(pp) {
        var ip;
        let {
          scroll: cp = !0,
          byUser: Op = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Op && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), pp === this.focused) return;
        const op = null !== (ip = this.focused) && void 0 !== ip && ip.isConnected ? this.focused : null;
        if (this.focused = pp, pp) {
          cp && (pp.classList.add(XO), pp.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Op && ((pp, ip) => {
            const cp = ip.closest("[data-pad-friends-column]");
            cp && pp && !cp.contains(pp) && (gc = new WeakRef(pp))
          })(op, pp);
          const ip = (0, gp.q)(pp);
          this.lastFocusedCentre = ip, this.movedInLayer && this.rememberFocus(pp), KO(op, pp, ip), "false" === pp.getAttribute("aria-pressed") && pp.closest("[data-pad-select-on-focus]") && (0, gp.b)(pp)
        } else op && KO(op, null, (0, gp.q)(op));
        this.notify()
      }
      rememberFocus(pp) {
        const ip = this.layerRoot;
        this.layerKey && ip && this.memory.remember(this.layerKey, pp, ip, (() => this.getEnabledCandidates(ip)))
      }
      noteCursorActivation(pp) {
        const ip = WO();
        if (!ip || !ip.root.contains(pp)) return;
        const cp = this.getEnabledCandidates(ip.root),
          Op = new Set(cp);
        let op = pp;
        for (; op && !Op.has(op);) op = op === ip.root ? null : op.parentElement;
        if (!(op instanceof HTMLElement)) return;
        const Ip = (0, IO.t)(ip.layer);
        this.memory.enter(Ip), this.memory.remember(Ip, op, ip.root, (() => cp))
      }
      notePageEnteredByCursor(pp) {
        return this.memory.enter(pp)
      }
      recallStop(pp, ip) {
        return this.findRemembered(pp, ip)
      }
      focusWhenFound(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: pp,
          untilMs: performance.now() + ip,
          holdWhile: cp
        }
      }
      getEnabledCandidates(pp) {
        return (0, Vp.e)(pp).filter((pp => !(0, Vp.z)(pp)))
      }
      onFrame(pp) {
        var ip;
        const cp = WO();
        if (!cp) return;
        const Op = null !== (ip = this.findOpenDropdown(cp)) && void 0 !== ip ? ip : cp,
          op = performance.now(),
          Ip = (0, IO.t)(Op.layer);
        if (Ip !== this.layerKey || Op.root !== this.layerRoot) {
          const ip = this.focused;
          if (null !== this.layerKey && Op.root === this.layerRoot && ip && (0, Vp.v)(ip, Op.root)) this.continueLayer(Ip, ip), this.wasActive || this.resume(Op.root, op);
          else {
            const ip = !this.wasActive && !pp.wokeDevice,
              Sp = "death" === this.layerKind || ip,
              xp = this.enterLayer(Op, Ip);
            "popup" !== Op.layer.kind || Op !== cp || xp ? "menu" === Op.layer.kind && Sp && "inGame" === Lp.c.get("gameState") && !(0, Yc.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = op + lO.c) : (this.pressGuardExtends = ip, this.pressGuardUntilMs = op + (ip ? lO.c : Sp ? 500 : 250))
          }
        } else this.wasActive || this.resume(Op.root, op);
        if (this.layerKind = Op.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), pp.wokeDevice && this.focusPointedStop(Op.root), this.validateFocus(Op, op), op < this.pressGuardUntilMs && this.pressGuardExtends && (pp.wasPressed((0, Dp.g)("menuConfirm")) || pp.wasPressed((0, Dp.g)("menuBack"))) && (this.pressGuardUntilMs = op + lO.c), op >= this.pressGuardUntilMs && this.handleButtons(pp, Op)) return;
        const Sp = "hybrid" === jO();
        if (Sp && (pp => {
            const ip = UO();
            return ip !== uO && (uO = ip, eO.lock()), eO.update(pp, (0, Pp.h)().moveDeadzone)
          })(pp.leftStick)) return xp = this.getHandoff(), dO = wO(xp), tO = UO(), void Ap.d.handOffHeldInput();
        var xp;
        this.handleDirections(pp, Op, op, !Sp), this.handleScroll(pp, Op)
      }
      findOpenDropdown(pp) {
        const ip = pp.root.querySelector(GO);
        if (!ip || !(0, Vp.t)(ip)) return null;
        let cp = this.dropdownLayers.get(ip);
        return cp || (this.dropdownLayerCounter++, cp = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: pp.layer.kind,
          getRoot: () => ip,
          close: () => {
            (0, gp.g)(ip)
          },
          memoryKey: null
        }, this.dropdownLayers.set(ip, cp)), {
          layer: cp,
          root: ip,
          order: pp.order
        }
      }
      focusPointedStop(pp) {
        const ip = (0, Wp.d)(),
          cp = ip ? document.elementFromPoint(ip.x, ip.y) : null;
        if (!cp || !pp.contains(cp)) return;
        const Op = po(cp, pp, this.getEnabledCandidates(pp));
        Op && this.setFocus(Op, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(pp, ip) {
        const cp = this.beginLayer(pp, ip),
          Op = mO();
        return Op && io(Op, pp.root) ? (this.takeOver(pp.root, Op, this.enteredLayerAtMs), cp) : (this.restoreLayerFocus(pp.root, cp), cp)
      }
      beginLayer(pp, ip) {
        return this.layerKey = ip, this.layerRoot = pp.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(ip)
      }
      restoreLayerFocus(pp, ip) {
        const cp = ip && this.layerKey ? this.findRemembered(pp, this.layerKey) : null;
        this.restoredFromMemory = null !== cp, this.setFocus(null !== cp && void 0 !== cp ? cp : this.pickInitial(pp, {
          waitForContent: !0
        }))
      }
      continueLayer(pp, ip) {
        this.layerKey = pp;
        const cp = this.memory.enter(pp);
        this.restoreOnFocusLoss = cp, this.movedInLayer && !cp && this.rememberFocus(ip)
      }
      resume(pp, ip) {
        var cp;
        const Op = mO();
        Op && io(Op, pp) ? this.takeOver(pp, Op, ip) : null !== (cp = this.focused) && void 0 !== cp && cp.isConnected && KO(null, this.focused, (0, gp.q)(this.focused))
      }
      pickPreferred(pp) {
        var ip;
        return null !== (ip = this.layerKey ? this.findRemembered(pp, this.layerKey) : null) && void 0 !== ip ? ip : this.pickInitial(pp, {
          waitForContent: !0
        })
      }
      findRemembered(pp, ip) {
        return this.memory.has(ip) ? this.memory.recall(ip, this.getEnabledCandidates(pp)) : null
      }
      getHandoff() {
        var pp, ip, cp;
        const Op = null !== (pp = this.focused) && void 0 !== pp && pp.isConnected ? this.focused : null,
          op = null !== (ip = this.layerRoot) && void 0 !== ip && ip.isConnected ? this.layerRoot : null;
        return {
          point: Op ? (0, gp.q)(Op) : null !== (cp = this.lastFocusedCentre) && void 0 !== cp ? cp : this.getLayerStartPoint(op),
          element: Op,
          direction: null
        }
      }
      getLayerStartPoint(pp) {
        if (!pp) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const ip = this.pickInitial(pp, {
          includeDisabled: !0
        });
        return (0, gp.q)(null !== ip && void 0 !== ip ? ip : pp)
      }
      takeOver(pp, ip, cp) {
        const {
          element: Op,
          direction: op,
          point: Ip
        } = ip, Sp = Op instanceof HTMLElement && (0, Vp.v)(Op, pp) ? Op : null;
        if (!op) {
          const ip = this.focused;
          return Sp ? this.setFocus(Sp, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(pp, Ip), void(this.focused && this.focused === ip && this.focused.isConnected && KO(null, this.focused, (0, gp.q)(this.focused)))
        }
        if (this.dpadRepeats.get(op).update(!0, cp), Sp) return this.setFocus(Sp, {
          scroll: !1,
          byUser: !0
        }), void this.move(pp, op, cp, !0);
        const xp = this.getEnabledCandidates(pp),
          Lp = xp.map(VO),
          Yp = uc(new DOMRect(Ip.x, Ip.y, 0, 0), Lp, op),
          Dp = Yp >= 0 ? Yp : qc(Ip, Lp);
        this.setFocus(Dp >= 0 ? xp[Dp] : this.pickInitial(pp), {
          byUser: !0
        })
      }
      focusNearest(pp, ip) {
        const cp = this.getEnabledCandidates(pp),
          Op = qc(ip, cp.map(VO));
        this.setFocus(Op >= 0 ? cp[Op] : this.pickInitial(pp), {
          byUser: !0
        })
      }
      pickDefault(pp) {
        let {
          includeDisabled: ip = !1,
          exclude: cp = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Op = [...pp.querySelectorAll(gO)].filter((Op => (null === cp || void 0 === cp || !cp.has(Op)) && (ip ? (0, Vp.C)(Op, pp) : (0, Vp.v)(Op, pp)))),
          op = fO(Op.map(NO));
        return op >= 0 ? Op[op] : null
      }
      pickNewAreaStart(pp, ip) {
        const cp = [...pp.querySelectorAll(zO)].filter(Vp.t);
        for (const Op of [...(0, Vp.i)(pp), ...cp]) {
          if (ip.has(Op)) continue;
          const pp = this.getEnabledCandidates(Op),
            cp = fO(pp.map(NO));
          if (cp >= 0) return pp[cp]
        }
        return null
      }
      pickInitial(pp) {
        let {
          includeDisabled: ip = !1,
          waitForContent: cp = !1,
          enteredAtMs: Op = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const op = this.pickDefault(pp, {
          includeDisabled: ip
        });
        if (op) return op;
        const Ip = pp => ip ? (0, Vp.e)(pp) : this.getEnabledCandidates(pp);
        let Sp = [];
        for (const Pp of (0, Vp.i)(pp))
          if (Sp = Ip(Pp), Sp.length > 0) break;
        if (0 === Sp.length) {
          if (cp && performance.now() - Op < 1e4 && (0, Vp.p)(pp)) return null;
          Sp = Ip(pp)
        }
        const xp = Sp.map(VO),
          Lp = Jp(null),
          Yp = Sp.filter(((pp, ip) => Bp(xp[ip], Lp))),
          Dp = Yp.length > 0 ? Yp : Sp,
          Ap = fO(Dp.map(NO));
        return Ap >= 0 ? Dp[Ap] : null
      }
      validateFocus(pp, ip) {
        if (this.pendingFocus) {
          var cp, Op;
          const op = this.pendingFocus.find();
          if (op && (0, Vp.v)(op, pp.root)) return this.pendingFocus = null, void this.setFocus(op, {
            byUser: !0
          });
          ip > this.pendingFocus.untilMs && (null === (cp = (Op = this.pendingFocus).holdWhile) || void 0 === cp || !cp.call(Op)) && (this.pendingFocus = null)
        }
        const op = this.focused,
          Ip = !!op && (0, Vp.v)(op, pp.root);
        if (!(!Ip && op && op === this.lastActivated && ip - this.lastActivatedAtMs < 5e3 && pp.root.contains(op) && (0, Vp.t)(op) && (0, Vp.z)(op))) {
          if (!Ip && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = ip, void this.restoreLayerFocus(pp.root, !0);
          if ((!Ip || !this.movedInLayer && !this.scrolledInLayer) && !(ip - this.lastRefocusCheckMs < (Ip ? 200 : 50)))
            if (this.lastRefocusCheckMs = ip, Ip) {
              const cp = ip - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(pp.root) : null,
                Op = null !== cp && void 0 !== cp ? cp : this.restoredFromMemory ? null : this.pickDefault(pp.root);
              Op && Op !== op && this.setFocus(Op)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const ip = this.pendingFocus;
                return this.focusNearest(pp.root, this.lastFocusedCentre), void(this.pendingFocus = ip)
              }
              this.setFocus(this.pickPreferred(pp.root))
            }
        }
      }
      handleButtons(pp, ip) {
        if (pp.wasPressed((0, Dp.g)("menuToggleCursor"))) return kO(this.getHandoff()), !0;
        if (pp.wasPressed((0, Dp.g)("menuBack"))) {
          const pp = (0, gp.g)(ip.root);
          return pp ? this.setFocus(pp, {
            byUser: !0
          }) : Gc(this, ip.root) || ((0, gp.c)(ip.root) ? this.returnToOpener(ip.root) : this.backToStrip(ip.root) || yO()), !0
        }
        const cp = (0, Dp.g)("menuConfirm");
        var Op, op;
        pp.wasPressed(cp) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Op = null === (op = this.focused) || void 0 === op ? void 0 : op.getAttribute("data-pad-repeat")) && void 0 !== Op ? Op : null, this.confirmRepeated = pp.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (pp.wasReleased(cp)) {
          const pp = this.confirmPressedOn;
          if (this.confirmPressedOn = null, pp && !this.confirmRepeated && pp === this.focused && pp.isConnected && !(0, Vp.z)(pp)) {
            const cp = pp.matches("[data-pad-tab]") ? pp.closest(ZO) : null;
            cp ? this.enterTab(pp, cp, ip.root, performance.now()) : this.activate(pp)
          }
          return !0
        }
        return this.repeatConfirm(pp, cp), cO(this, pp, ip)
      }
      repeatConfirm(pp, ip) {
        const cp = this.confirmPressedOn;
        cp && null !== this.confirmRepeatKey && pp.isHeld(ip) && (cp === this.focused && cp.isConnected && !(0, Vp.z)(cp) && cp.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? cp.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(cp)) : this.confirmRepeatKey = null)
      }
      backToStrip(pp) {
        const ip = this.focused;
        if (!(0, Pp.h)().menuBackToCategories) return !1;
        const cp = null !== ip && void 0 !== ip && ip.isConnected ? this.tabStripNav.backToStrip(ip, this.getEnabledCandidates(pp), pp) : null;
        return cp && this.setFocus(cp, {
          byUser: !0
        }), null !== cp
      }
      returnToOpener(pp) {
        const ip = this.lastActivatedKey;
        ip && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var cp;
          return null !== (cp = this.getEnabledCandidates(pp).find((pp => (0, gp.r)(pp) === ip))) && void 0 !== cp ? cp : null
        })))
      }
      activate(pp) {
        var ip;
        if ((0, QO.e)(pp) || (0, gp.t)(pp)) return;
        this.lastActivatedKey = null !== (ip = (0, gp.r)(pp)) && void 0 !== ip ? ip : this.lastActivatedKey, this.lastActivated = pp, this.lastActivatedAtMs = performance.now(), this.rememberFocus(pp);
        const cp = this.layerRoot;
        if (cp) {
          const ip = new Set(cp.querySelectorAll(gO)),
            Op = new Set(cp.querySelectorAll(`[data-pad-initial-area], ${zO}`)),
            op = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var op;
            return (0, Vp.v)(pp, cp) ? null : null !== (op = this.pickDefault(cp, {
              exclude: ip
            })) && void 0 !== op ? op : this.pickNewAreaStart(cp, Op)
          }), 5e3, (() => pp.isConnected && (0, Vp.z)(pp) && performance.now() - op < 6e4))
        }(0, gp.b)(pp), (0, gp.e)(pp)
      }
      handleDirections(pp, ip, cp, Op) {
        const op = Qc(ip.layer.kind) ? (0, Dp.g)("chat") : null;
        for (const xp of yp.w) {
          this.dpadRepeats.get(xp).update(pp.isHeld(xp), cp) && (xp !== op || pp.wasPressed(xp)) && this.move(ip.root, xp, cp, !0)
        }
        const Ip = Op ? (0, yp.h)(pp.leftStick, (0, Pp.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Sp = this.stickRepeat.update((0, yp._)(Ip), cp);
        if (Sp && this.move(ip.root, Sp, cp, !0), this.retryMove && cp >= this.retryMove.atMs) {
          const {
            direction: pp
          } = this.retryMove;
          this.retryMove = null, this.move(ip.root, pp, cp, !1)
        }
      }
      move(pp, ip, cp, Op) {
        var op;
        let Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (op = this.tabOpenWait) || void 0 === op ? void 0 : op.wait) && ip === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Sp = this.focused;
        if (!Sp || !Sp.isConnected) {
          const ip = this.pickInitial(pp);
          return void(ip && this.setFocus(ip, {
            byUser: !0
          }))
        }
        const xp = "Left" === ip || "Right" === ip,
          Lp = xp ? (0, QO.e)(Sp) : null;
        if (Lp) return void Lp.adjust("Left" === ip ? -1 : 1);
        const Yp = pp => null !== pp.closest("[data-pad-friends-column]"),
          Dp = Yp(Sp),
          Ap = VO(Sp),
          Pp = xp || Sp.closest(ZO) ? null : (pp => {
            const ip = new Map;
            return cp => {
              const Op = cp.closest(ZO);
              if (!Op) return !1;
              let op = ip.get(Op);
              if (void 0 === op) {
                const cp = VO(Op);
                op = ec(pp, cp) && (cp.right <= pp.left || cp.left >= pp.right), ip.set(Op, op)
              }
              return op
            }
          })(Ap),
          Wp = null !== Sp.closest(rO),
          yp = this.getEnabledCandidates(pp).filter((pp => pp !== Sp && (xp || Yp(pp) === Dp) && !(null !== Pp && void 0 !== Pp && Pp(pp)) && (Wp || !pp.closest(rO)))),
          Up = yp.map(VO),
          wp = Mp(Sp, "y", pp),
          vp = Jp(wp);
        if (!Ip && !Bp(Ap, vp)) {
          const pp = yp.filter(((pp, ip) => Bp(Up[ip], vp)));
          if (pp.length > 0) {
            const ip = {
              x: vp.left + vp.width / 2,
              y: vp.top + vp.height / 2
            };
            return void this.setFocus(pp[qc(ip, pp.map(VO))], {
              byUser: !0
            })
          }
        }
        const tp = xp ? ((pp, ip, cp) => {
            const Op = VO(pp),
              op = pp.closest(ZO),
              Ip = op ? VO(op) : null;
            return ip.map(((ip, Sp) => {
              const xp = cp[Sp];
              if (xp.bottom > Op.top && xp.top < Op.bottom) return !0;
              const Lp = ip.closest(ZO);
              if (op && Ip) return Lp !== op && (null !== Lp || xp.bottom <= Ip.top || xp.top >= Ip.bottom);
              if (Lp) return !ec(Op, VO(Lp));
              let Yp = pp;
              for (let cp = pp.parentElement; cp && !cp.contains(ip); cp = cp.parentElement) Yp = cp;
              const Dp = VO(Yp);
              return xp.right > Dp.left && xp.left < Dp.right
            }))
          })(Sp, yp, Up) : void 0,
          Hp = xp && !Sp.closest(ZO) ? (pp => pp.map((pp => !pp.closest(BO))))(yp) : void 0,
          dp = ((pp, ip) => {
            const cp = [];
            for (let op = pp; op; op = op.parentElement) cp.push(op);
            const Op = new Map;
            return cp.forEach(((pp, ip) => {
              Op.set(pp, cp.length - 1 - ip)
            })), ip.map((pp => {
              for (let ip = pp; ip; ip = ip.parentElement) {
                const pp = Op.get(ip);
                if (void 0 !== pp) return pp
              }
              return -1
            }))
          })(Sp, yp),
          ep = xp ? "x" : "y",
          jp = Mp(Sp, ep, pp);
        let kp = uc(Ap, Up, ip, dp, tp, Hp);
        if (kp >= 0 && jp && !jp.contains(yp[kp])) {
          const pp = yp.flatMap(((pp, ip) => jp.contains(pp) ? [ip] : [])),
            cp = ip => ip && pp.map((pp => ip[pp])),
            Op = uc(Ap, pp.map((pp => Up[pp])), ip, pp.map((pp => dp[pp])), cp(tp), cp(Hp));
          kp = Op >= 0 ? pp[Op] : kp
        }
        if (kp >= 0) return void this.moveTo(Sp, yp[kp], yp, pp, ip, Ip);
        if (!Op) return;
        const mp = "Right" === ip || "Down" === ip ? 1 : -1;
        if (jp && lp(jp, ep, mp)) {
          const pp = "y" === ep ? jp.clientHeight : jp.clientWidth;
          Qp(jp, ep, mp * pp * .5), this.retryMove = {
            direction: ip,
            atMs: cp + 80
          }
        }
      }
      moveTo(pp, ip, cp, Op, op, Ip) {
        const Sp = this.tabStripNav.findTabContent(pp, ip, cp);
        Sp && "true" !== pp.dataset.padSelected ? this.openTab(pp, Sp, Op, op) : Ip && !Sp || this.setFocus(this.tabStripNav.redirect(pp, ip, cp, Op), {
          byUser: !0
        })
      }
      openTab(pp, ip, cp, Op) {
        const op = ip.parentElement;
        (0, gp.b)(pp), this.focusWhenFound((() => "true" !== pp.dataset.padSelected ? null : ip.isConnected ? this.tabStripNav.pickContentStart(ip, this.getEnabledCandidates(cp), cp) : op ? this.tabStripNav.pickReplacedContentStart(pp, op, this.getEnabledCandidates(cp), cp) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Op
        }
      }
      enterTab(pp, ip, cp, Op) {
        this.move(cp, (pp => {
          const ip = [...pp.querySelectorAll(hO)].filter((ip => ip.closest(bO) === pp));
          if (ip.length >= 2) {
            const pp = ip[0].getBoundingClientRect(),
              cp = ip[1].getBoundingClientRect();
            return Math.abs(cp.top - pp.top) > Math.abs(cp.left - pp.left) ? "Right" : "Down"
          }
          const cp = pp.getBoundingClientRect();
          return cp.height > cp.width ? "Right" : "Down"
        })(ip), Op, !1, !0), this.focused !== pp || this.pendingFocus || this.activate(pp)
      }
      handleScroll(pp, ip) {
        const cp = (0, yp.h)(pp.rightStick, .2);
        if (0 === cp.x && 0 === cp.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Op = pp.dtMs / 1e3;
        for (const Ip of ["x", "y"]) {
          var op;
          const pp = cp[Ip];
          if (0 === pp) continue;
          const Sp = null !== (op = Mp(this.focused, Ip, ip.root)) && void 0 !== op ? op : Ep(ip.root, Ip);
          if (!Sp) continue;
          const xp = Math.sign(pp) * pp * pp * 1500 * Op + this.scrollRemainder[Ip],
            Lp = Math.trunc(xp);
          this.scrollRemainder[Ip] = xp - Lp, 0 !== Lp && (Qp(Sp, Ip, Lp), this.scrolledInLayer = !0)
        }
      }
    };
    var Oo = cp(8346);
    var oo = cp(8861);
    const Io = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      So = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...Io,
          minIntervalMs: 1e3
        },
        preview: {
          ...Io,
          minIntervalMs: 0
        }
      };
    const xo = new class {
        constructor(pp) {
          this.deps = pp, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = pp => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", pp))
          }
        }
        play(pp, ip) {
          const cp = So[pp];
          if (!this.deps.isVibrationOn() || cp.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Op = this.lastPlayedMs[pp];
          if (void 0 !== Op && ip - Op < cp.minIntervalMs) return !1;
          const op = this.deps.getActuator();
          if (!op) return !1;
          this.lastPlayedMs[pp] = ip;
          const {
            duration: Ip,
            strongMagnitude: Sp,
            weakMagnitude: xp
          } = cp;
          try {
            op.playEffect("dual-rumble", {
              duration: Ip,
              strongMagnitude: Sp,
              weakMagnitude: xp
            }).catch(this.logFailure)
          } catch (Lp) {
            this.logFailure(Lp)
          }
          return !0
        }
      }({
        getActuator: () => (pp => {
          const ip = null === pp || void 0 === pp ? void 0 : pp.vibrationActuator;
          return "function" === typeof(null === ip || void 0 === ip ? void 0 : ip.playEffect) ? ip : null
        })(Sp.e.getActiveGamepad()),
        isVibrationOn: () => (0, Pp.h)().vibration,
        isPadInUse: Wp.n
      }),
      Lo = pp => {
        xo.play(pp, performance.now())
      };
    var Yo = cp(8348),
      Do = cp(3003),
      Ao = cp(116),
      Po = cp(44),
      Wo = cp(670);
    class yo {
      constructor(pp) {
        this.deps = pp
      }
      check() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ip = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!ip) return "skipped";
        const cp = pp ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === cp || this.deps.readReportedVisitId() === cp ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(cp), this.deps.Yy(ip, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Uo = "controllerUsageReportedVisit";
    var wo = cp(1372),
      vo = cp(1765),
      to = cp(657),
      Ho = cp(1476),
      eo = cp(1260);
    const uo = pp => ({
        translationKey: `controller:${pp}`
      }),
      jo = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: uo("padButtonView"),
        Menu: uo("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: uo("padButtonDpadUp"),
        Down: uo("padButtonDpadDown"),
        Left: uo("padButtonDpadLeft"),
        Right: uo("padButtonDpadRight"),
        Home: uo("padButtonHome"),
        LeftStick: uo("padButtonLeftStick"),
        RightStick: uo("padButtonRightStick")
      },
      ko = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: uo("padButtonCreate"),
          Menu: uo("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      mo = (pp, ip) => {
        var cp;
        const Op = null !== (cp = ko[pp][ip]) && void 0 !== cp ? cp : jo[ip];
        return "string" === typeof Op ? Op : (0, op.B)(eo.g.get().getCurrentLanguageCode(), Op.translationKey)
      },
      Ro = pp => {
        let {
          glyph: ip,
          family: cp,
          className: Op
        } = pp;
        const op = (0, Wp.I)(),
          Ip = null !== cp && void 0 !== cp ? cp : op,
          Sp = (0, Yo.g)(Ip, ip);
        return (0, bp.jsx)("span", {
          className: fp()("ControllerGlyph", Op),
          role: "img",
          "aria-label": mo(Ip, ip),
          style: {
            "--pad-glyph-mask": `url(${Sp})`,
            "--pad-glyph-aspect": (0, Yo.c)(Ip, ip)
          }
        })
      };
    var qo = cp(1929);
    const Mo = pp => {
      let {
        action: ip
      } = pp;
      const {
        t: cp
      } = (0, op.H)();
      switch (ip.kind) {
        case "reload":
          return (0, bp.jsx)("span", {
            children: cp("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, bp.jsx)(qo.e, {
            text: ip.description ? [{
              icon: ip.icon
            }, ` ${ip.description}`] : [{
              icon: ip.icon
            }]
          });
        case "touchButton":
          return (0, bp.jsx)(qo.e, {
            text: ip.label
          })
      }
    };
    var Co = cp(8869);
    const Eo = pp => {
      let {
        hold: ip
      } = pp;
      return (0, bp.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${ip.holdMs}ms`
        },
        children: (0, bp.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, ip.id)
    };
    var Xo = cp(8885),
      Qo = cp(8887),
      Jo = cp(8890),
      Bo = cp(8883);
    const No = () => {
        const {
          gameState: pp
        } = (0, Lp.o)(["gameState"]), ip = (0, Wp.H)(), [Op, op] = (0, Np.useState)(!1), [Ip, Sp] = (0, Np.useState)(!1);
        return (0, Np.useEffect)((() => {
          "inGame" === pp && op(!0)
        }), [pp]), (0, Np.useEffect)((() => {
          if (!Op) return;
          let pp = null,
            ip = !1;
          return (to.z ? Promise.all([cp.e(73), cp.e(90), cp.e(273), cp.e(191), cp.e(229), cp.e(228), cp.e(89)]).then((() => cp(40730))).then((pp => pp.startWasmPadGameplay)) : Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(98), cp.e(76), cp.e(75), cp.e(74), cp.e(187), cp.e(233), cp.e(78), cp.e(90), cp.e(188), cp.e(227), cp.e(97), cp.e(239), cp.e(230), cp.e(246), cp.e(121), cp.e(215), cp.e(87), cp.e(247), cp.e(77), cp.e(160), cp.e(248), cp.e(229), cp.e(200)]).then((() => cp(40871))).then((pp => pp.startPadGameplay))).then((cp => {
            ip || (pp = cp())
          })).catch((pp => {
            console.error("Pad gameplay failed to load", pp), ip || Sp(!0)
          })), () => {
            var cp;
            ip = !0, null === (cp = pp) || void 0 === cp || cp()
          }
        }), [Op]), (0, Np.useEffect)((() => {
          Ip && ip && (Sp(!1), wo.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((pp => {
            !0 === pp && (0, vo.reloadBloxd)()
          })))
        }), [Ip, ip]), (0, bp.jsxs)(bp.Fragment, {
          children: [(0, bp.jsx)(To, {}), (0, bp.jsx)(fo, {}), (0, bp.jsx)(bo, {})]
        })
      },
      To = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Wp.H)(), {
          gameState: cp,
          isUiHidden: Op
        } = (0, Lp.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: Ip
        } = (0, Pp.s)(), Sp = (0, Co.h)(), xp = (0, Co.i)(), [Yp, Ap] = (0, Np.useState)(Jo.e);
        return (0, Ho.f)(Bo.m, Ap), !ip || Ip || Op || "inGame" !== cp || !Sp && !Yp ? null : (0, bp.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Sp && (0, bp.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, bp.jsx)(Ro, {
              glyph: (0, Dp.g)("actionButton")
            }), (0, bp.jsx)(Mo, {
              action: Sp
            }), xp && (0, bp.jsx)("span", {
              className: "PadActionHintMore",
              children: pp("controller:gameplayActionWheelHint")
            })]
          }), Yp && (0, bp.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, bp.jsx)(Ro, {
              glyph: (0, Dp.g)("pickBlock")
            }), (0, bp.jsx)("span", {
              children: pp("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      fo = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Wp.H)(), {
          gameState: cp,
          isUiHidden: Op
        } = (0, Lp.o)(["gameState", "isUiHidden"]), [Ip, Sp] = (0, Np.useState)(Xo.e);
        return (0, Ho.f)(Bo.k, Sp), ip && !Op && "inGame" === cp && Ip ? (0, bp.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, bp.jsx)("span", {
            children: pp("controller:gameplayDropStack")
          }), (0, bp.jsx)(Eo, {
            hold: Ip
          })]
        }) : null
      },
      bo = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Wp.H)(), {
          gameState: cp,
          isUiHidden: Op
        } = (0, Lp.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: Ip
        } = (0, Pp.s)(), [Sp, xp] = (0, Np.useState)(Qo.b);
        return (0, Ho.f)(Bo.i, xp), ip && !Op && "inGame" === cp && Sp ? (0, bp.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Ip && (0, bp.jsx)(Ro, {
            glyph: (0, Dp.g)("attack")
          }), (0, bp.jsx)("span", {
            children: pp("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var ho = cp(8895),
      ao = cp(1982),
      no = cp(2492),
      Fo = cp(8334);
    const go = pp => pp && !(0, ho.b)(ao.c.get("shopInfo")),
      Go = () => {
        const pp = "inGame" === (0, Lp.o)(["gameState"]).gameState;
        return (0, no.e)("shopInfo", (() => {
          (0, Fo.i)(go(pp))
        })), (0, Np.useEffect)((() => {
          (0, Fo.i)(go(pp))
        }), [pp]), null
      },
      ro = () => {
        const {
          t: pp
        } = (0, op.H)(), {
          hideButtonHints: ip
        } = (0, Pp.s)();
        (0, Wp.I)();
        const cp = (0, bi.l)();
        return (0, Np.useEffect)((() => (() => {
          const pp = Ap.d.register({
              name: "inventory",
              isActive: xc.isActive,
              onFrame: xc.onFrame,
              onDeactivate: xc.onDeactivate,
              wakePressActs: xc.wakePressActs
            }),
            ip = pp => {
              xc.noteRealPointer(pp), xc.shouldBlockRealPointer(pp) && pp.stopPropagation()
            };
          for (const Sp of Lc) window.addEventListener(Sp, ip, !0);
          const cp = (0, Kp.i)((() => {
              "inventory" !== Ap.d.getActiveConsumerName() && xc.forgetSurface()
            })),
            Op = pp => {
              const ip = pp.target;
              (0, Wp.n)() && (0, Zp.g)(ip) && ip.closest(ji) && (0, Kp.e)() && (0, Kp.p)(ip)
            };
          document.addEventListener("focusout", Op, !0);
          const {
            invalidate: op,
            onScroll: Ip
          } = xc.targets;
          return document.addEventListener("scroll", Ip, !0), window.addEventListener("resize", op), () => {
            pp(), cp();
            for (const pp of Lc) window.removeEventListener(pp, ip, !0);
            document.removeEventListener("scroll", Ip, !0), document.removeEventListener("focusout", Op, !0), window.removeEventListener("resize", op), xc.targets.disconnect()
          }
        })()), []), (0, bp.jsxs)(bp.Fragment, {
          children: [(0, bp.jsx)(Fp, {
            placer: xc.ring,
            className: "InventorySlotCursorRing"
          }), cp.showing && !ip && (0, bp.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: sp(cp).map((ip => {
              let {
                actions: Op,
                labelKey: op
              } = ip;
              return (0, bp.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Op.map((pp => (0, bp.jsx)(Ro, {
                  glyph: (0, Dp.g)(pp)
                }, pp))), (0, bp.jsx)("span", {
                  children: pp(`controller:${op}`)
                }), "inventoryDrop" === op && cp.dropStackHold && (0, bp.jsx)(Eo, {
                  hold: cp.dropStackHold
                })]
              }, op)
            }))
          })]
        })
      },
      Zo = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      zo = pp => Array.from(pp).map((pp => ({
        type: "char",
        char: pp,
        width: 1
      }))),
      so = function(pp) {
        return {
          type: "command",
          command: pp,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Ko = [so("page", 2), so("otherPage"), so("caretLeft"), so("space", 3), so("caretRight"), so("close", 1.5), so("submit", 1.5)],
      Vo = [so("page", 2), so("otherPage"), so("caretLeft"), so("space", 2), so("caretRight"), so("newline"), so("close", 1.5), so("submit", 1.5)],
      pI = [
        [...zo("1234567890"), so("backspace")], zo("qwertyuiop/"), zo("asdfghjkl'?"), [so("shift", 2), ...zo("zxcvbnm,.")]
      ],
      iI = [
        [...zo("1234567890"), so("backspace")], zo("!@#$%^&*()/"), zo('-_=+[]{};:"'), zo("~`|\\<>'\u20ac\xa3,.")
      ],
      cI = {
        letters: pI,
        accents: [
          [...zo("1234567890"), so("backspace")], zo("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), zo("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [so("shift", 2), ...zo("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: iI
      },
      OI = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      oI = (pp, ip) => "letters" === pp ? ip ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === pp ? "symbols" : "accents"
      },
      II = function(pp, ip) {
        const cp = ((pp, ip) => [...cI[pp], ip ? Vo : Ko])(pp, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === ip) return cp;
        const Op = Math.min(2, SI(cp[0]) / ip);
        return [Array.from({
          length: ip
        }, ((pp, ip) => ({
          type: "phrase",
          phraseIndex: ip,
          width: Op
        }))), ...cp]
      },
      SI = pp => pp.reduce(((pp, ip) => pp + ip.width), 0),
      xI = pp => Math.max(...pp.map(SI)),
      LI = (pp, ip) => {
        const cp = pp[ip.row];
        let Op = (xI(pp) - SI(cp)) / 2;
        for (let op = 0; op < ip.col; op++) Op += cp[op].width;
        return Op + cp[ip.col].width / 2
      },
      YI = (pp, ip, cp) => {
        let Op = 0,
          op = 1 / 0;
        for (let Ip = 0; Ip < pp[ip].length; Ip++) {
          const Sp = Math.abs(LI(pp, {
            row: ip,
            col: Ip
          }) - cp);
          Sp < op - 1e-9 && (Op = Ip, op = Sp)
        }
        return Op
      },
      DI = (pp, ip) => {
        const cp = Math.max(0, Math.min(pp.length - 1, ip.row));
        return {
          row: cp,
          col: Math.max(0, Math.min(pp[cp].length - 1, ip.col))
        }
      },
      AI = (pp, ip, cp) => "once" === pp && ip - cp <= 400 ? "caps" : "off" === pp ? "once" : "off",
      PI = (pp, ip) => "once" === pp && (pp => pp.toLowerCase() !== pp.toUpperCase())(ip) ? "off" : pp,
      WI = (pp, ip, cp) => {
        if ("symbols" === ip || "off" === cp) return pp;
        const Op = pp.toUpperCase();
        return 1 === Op.length ? Op : pp
      };
    var yI = cp(8785);
    const UI = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const wI = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(pp) {
          return !(pp - this.lastSendMs < 2e3) && (this.lastSendMs = pp, !0)
        }
      },
      vI = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      tI = ["Ux", "nameTag"],
      HI = pp => {
        const ip = pp.target instanceof HTMLTextAreaElement && !tI.includes(pp.kind);
        return II(pp.page, "chat" === pp.kind ? UI.length : 0, ip)
      },
      dI = pp => {
        const ip = pp.getBoundingClientRect(),
          cp = window.innerHeight,
          Op = ip.top + ip.height / 2 < cp / 2 ? "bottom" : "top",
          op = "bottom" === Op ? cp - ip.bottom - 6 : ip.top - 6;
        return {
          placement: Op,
          maxHeightPx: Math.min(.46 * cp, Math.max(.3 * cp, op))
        }
      },
      eI = pp => {
        (0, Ec.f)(pp) ? (0, Ec.b)().close(): (co.noteChosenStop(pp), pp.blur())
      };
    class uI {
      constructor(pp) {
        this.host = pp, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(pp, ip) {
        this.phraseTexts = pp, this.phrasesFill = ip
      }
      pressKey(pp) {
        const ip = this.host.getState(),
          cp = HI(ip),
          Op = cp[pp.row][pp.col];
        this.host.setState({
          ...ip,
          focus: pp,
          preferredX: LI(cp, pp)
        }), "char" === Op.type ? this.typeChar(Op.char) : "command" === Op.type ? this.runCommand(Op.command) : this.sendPhrase(Op.phraseIndex)
      }
      runCommand(pp) {
        const ip = this.host.getState();
        switch (pp) {
          case "backspace":
            (0, Zp.b)(ip.target);
            break;
          case "space":
            (0, Zp.c)(ip.target, " ");
            break;
          case "newline":
            (0, Zp.c)(ip.target, "\n");
            break;
          case "caretLeft":
            (0, Zp.j)(ip.target, -1);
            break;
          case "caretRight":
            (0, Zp.j)(ip.target, 1);
            break;
          case "shift": {
            const pp = performance.now();
            this.host.setState({
              ...ip,
              shift: AI(ip.shift, pp, this.lastShiftPressMs)
            }), this.lastShiftPressMs = pp;
            break
          }
          case "page":
          case "otherPage": {
            const cp = oI(ip.page, ip.accentsFirst)[pp];
            this.host.setState({
              ...ip,
              page: cp,
              focus: DI(HI({
                ...ip,
                page: cp
              }), ip.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, Ec.f)(ip.target) && (0, Ec.b)().selectNextChannel()
        }
      }
      submit() {
        var pp, ip;
        const {
          target: cp
        } = this.host.getState();
        this.host.hide(), (0, Ec.f)(cp) ? (0, Ec.b)().submit() : (co.noteChosenStop(cp), null === (pp = (ip = (0, Ec.e)(cp)).submit) || void 0 === pp || pp.call(ip), document.activeElement === cp && cp.blur())
      }
      close() {
        const {
          target: pp
        } = this.host.getState();
        this.host.hide(), eI(pp)
      }
      typeChar(pp) {
        const {
          target: ip,
          page: cp,
          shift: Op
        } = this.host.getState();
        (0, Zp.c)(ip, WI(pp, cp, Op)), this.host.setState({
          ...this.host.getState(),
          shift: PI(Op, pp)
        })
      }
      sendPhrase(pp) {
        if (this.phrasesFill) {
          const {
            target: ip
          } = this.host.getState(), cp = this.phraseTexts[pp];
          cp && (ip.setSelectionRange(0, ip.value.length), (0, Zp.c)(ip, cp))
        } else wI.claim(performance.now()) && (this.host.hide(), (0, Ec.b)().sendLine(this.phraseTexts[pp]))
      }
    }
    var jI = cp(8807);
    const kI = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      mI = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class RI {
      constructor(pp, ip) {
        this.host = pp, this.editor = ip, this.lastDirection = null, this.navRepeat = new yp.b((0, Up.e)(kI)), this.commandRepeats = new Map(Zo.filter((pp => {
          let {
            repeats: ip
          } = pp;
          return ip
        })).map((pp => {
          let {
            command: ip
          } = pp;
          return [ip, (0, Up.e)(mI)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const pp of this.commandRepeats.values()) pp.reset()
      }
      onVisibleFrame(pp) {
        const ip = performance.now();
        for (const {
            command: op,
            action: Ip
          }
          of Zo) {
          const cp = (0, Dp.g)(Ip),
            Op = this.commandRepeats.get(op);
          if ((Op ? Op.update(pp.isHeld(cp), ip) : pp.wasPressed(cp)) && (this.editor.runCommand(op), !this.host.getState().visible)) return
        }
        if (pp.wasPressed((0, Dp.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const cp = this.readNavDirection(pp);
        this.lastDirection = cp;
        const Op = this.navRepeat.update(cp, ip);
        Op && this.navigate(Op)
      }
      onHiddenFrame(pp, ip) {
        var cp;
        if (pp.wasPressed((0, Dp.g)("keyboardClose"))) return void eI(ip);
        const Op = (0, Dp.g)("keyboardType");
        if (pp.wasPressed(Op)) return Ap.d.consumeButton(Op), void this.host.open(ip);
        const op = this.readNavDirection(pp),
          Ip = null !== op && op !== this.lastDirection;
        if (this.lastDirection = op, !Ip || (0, Ec.f)(ip)) return;
        const Sp = (null === (cp = WO()) || void 0 === cp ? void 0 : cp.root.contains(ip)) || null !== ip.closest(".EntireInventoryWrapper");
        eI(ip), Sp && Ap.d.handOffHeldInput()
      }
      navigate(pp) {
        const ip = this.host.getState();
        if ("Up" === pp && 0 === ip.focus.row && "chat" === ip.kind) return (0, Ec.b)().stepHistory(), void this.host.setState({
          ...ip
        });
        const cp = ((pp, ip, cp, Op) => {
          if ("Left" === cp || "Right" === cp) {
            const Op = pp[ip.row].length,
              op = (ip.col + ("Right" === cp ? 1 : -1) + Op) % Op,
              Ip = {
                row: ip.row,
                col: op
              };
            return {
              pos: Ip,
              preferredX: LI(pp, Ip)
            }
          }
          const op = (ip.row + ("Down" === cp ? 1 : -1) + pp.length) % pp.length;
          return {
            pos: {
              row: op,
              col: YI(pp, op, Op)
            },
            preferredX: Op
          }
        })(HI(ip), ip.focus, pp, ip.preferredX);
        this.host.setState({
          ...ip,
          focus: cp.pos,
          preferredX: cp.preferredX
        })
      }
      readNavDirection(pp) {
        for (const ip of yp.w)
          if (pp.isHeld(ip)) return ip;
        return (0, yp._)((0, yp.h)(pp.leftStick, (0, Pp.h)().moveDeadzone))
      }
    }
    const qI = ["Up", "Down", "Left", "Right"],
      MI = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const CI = new class {
      constructor() {
        this.state = vI, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new uI(this), this.padInput = new RI(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(pp) {
        const ip = pp.visible !== this.state.visible;
        this.state = pp;
        for (const cp of this.listeners) cp();
        ip && Yp.m.GA(jI.b, pp.visible)
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      install() {
        const pp = Ap.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Zp.g)(document.activeElement),
            onFrame: pp => {
              this.onFrame(pp)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: pp => qI.includes(pp) || !this.state.visible && pp === (0, Dp.g)("keyboardType")
          }),
          ip = pp => {
            const ip = pp.target;
            (0, Zp.g)(ip) && (ip === this.pendingChatInput || (0, Wp.n)() ? this.open(ip) : this.state.visible && ip !== this.state.target && (this.ownedField = null, this.hide()))
          },
          cp = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Op = pp => {
            pp.isTrusted && this.state.visible && (pp => !pp.repeat && !MI.has(pp.key) && !(0, yI.d)(pp.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(pp.key))(pp) && this.hide()
          },
          op = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...dI(this.state.target)
            })
          };
        document.addEventListener("focusin", ip, !0), document.addEventListener("focusout", cp, !0), window.addEventListener("keydown", Op, !0), window.addEventListener("resize", op);
        const Ip = Yp.m.subscribe(Bo.d, (() => {
            this.openChat()
          })),
          Sp = Yp.m.subscribe(jI.e, (pp => {
            this.openForField(pp)
          }));
        return () => {
          pp(), document.removeEventListener("focusin", ip, !0), document.removeEventListener("focusout", cp, !0), window.removeEventListener("keydown", Op, !0), window.removeEventListener("resize", op), Yp.m.unsubscribe(Ip), Yp.m.unsubscribe(Sp), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const pp = (0, Ec.b)();
        pp ? document.activeElement !== pp.input ? (this.clearPendingChat(), this.pendingChatInput = pp.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), pp.open()) : this.open(pp.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(pp) {
        (0, Zp.g)(pp) ? (document.activeElement !== pp && pp.focus(), document.activeElement === pp && this.open(pp)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", pp)
      }
      open(pp) {
        var ip;
        if (this.clearPendingChat(), this.ownedField = pp, this.state.visible && this.state.target === pp) return;
        this.restoreInputMode(), (0, Zp.k)(pp), this.savedInputMode = pp.getAttribute("inputmode"), pp.setAttribute("inputmode", "none");
        const cp = {
          ...vI,
          visible: !0,
          target: pp,
          kind: (0, Ec.f)(pp) ? "chat" : null !== (ip = (0, Ec.e)(pp).kind) && void 0 !== ip ? ip : null,
          accentsFirst: (Op = eo.g.get().getCurrentLanguageCode(), OI.has(Op)),
          ...dI(pp)
        };
        var Op;
        const op = HI(cp),
          Ip = ((pp, ip) => {
            for (let cp = 0; cp < pp.length; cp++) {
              const Op = pp[cp].findIndex((pp => "char" === pp.type && pp.char === ip));
              if (-1 !== Op) return {
                row: cp,
                col: Op
              }
            }
            return null
          })(op, "q");
        this.padInput.reset(), this.setState({
          ...cp,
          focus: Ip,
          preferredX: LI(op, Ip)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(vI))
      }
      onFrame(pp) {
        if (this.releaseLostField()) return;
        const ip = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(pp) : (0, Zp.g)(ip) && this.padInput.onHiddenFrame(pp, ip)
      }
      releaseLostField() {
        const pp = this.ownedField;
        return !(null === pp || pp.isConnected && document.activeElement === pp) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: pp
        } = this.state;
        pp && (null === this.savedInputMode ? pp.removeAttribute("inputmode") : pp.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var EI = cp(3722);
    const XI = new Map(Zo.map((pp => {
        let {
          command: ip,
          action: cp
        } = pp;
        return [ip, cp]
      }))),
      lI = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      QI = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Ux: "controller:keyboardTargetBookTitle"
      },
      JI = pp => {
        const ip = (() => {
          const [, pp] = (0, Np.useReducer)((pp => pp + 1), 0);
          return pp
        })();
        (0, Np.useEffect)((() => {
          if (!pp) return;
          const cp = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const op of cp) pp.addEventListener(op, ip);
          document.addEventListener("selectionchange", ip);
          const Op = new MutationObserver(ip);
          return Op.observe(pp, {
            attributeFilter: ["placeholder"]
          }), () => {
            Op.disconnect();
            for (const Op of cp) pp.removeEventListener(Op, ip);
            document.removeEventListener("selectionchange", ip)
          }
        }), [pp, ip])
      },
      BI = pp => {
        pp.preventDefault()
      },
      NI = pp => {
        "mouse" !== pp.pointerType && pp.preventDefault()
      },
      TI = () => {
        var pp;
        const {
          t: ip
        } = (0, op.H)(), cp = (() => {
          const [pp, ip] = (0, Np.useState)(CI.getState());
          return (0, Np.useEffect)((() => CI.subscribe((() => {
            ip(CI.getState())
          }))), []), pp
        })(), Op = (0, Wp.H)(), Ip = (0, Np.useRef)(null);
        (0, Pp.s)(), (0, Wp.I)(), (0, Np.useEffect)((() => {
          const pp = CI.install(),
            ip = null;
          return () => {
            pp(), null === ip || void 0 === ip || ip()
          }
        }), []);
        const Sp = (0, Np.useMemo)((() => UI.map((pp => ip(pp)))), [ip]),
          xp = cp.visible && "chat" === cp.kind ? cp.target : null;
        JI(xp);
        const Lp = null !== (pp = null === xp || void 0 === xp ? void 0 : xp.value) && void 0 !== pp ? pp : "",
          Yp = ((pp, ip, cp) => {
            if (!pp.startsWith("/")) return [];
            const Op = [];
            for (let op = ip.length - 1; op >= 0 && Op.length < cp; op--) {
              const cp = ip[op].trim();
              cp.startsWith(pp) && cp !== pp && !Op.includes(cp) && Op.push(cp)
            }
            return Op
          })(Lp, Lp.startsWith("/") ? (0, EI.f)() : [], UI.length),
          Ap = Lp.startsWith("/"),
          yp = Ap ? UI.map(((pp, ip) => {
            var cp;
            return null !== (cp = Yp[ip]) && void 0 !== cp ? cp : ""
          })) : Sp;
        if ((0, Np.useEffect)((() => {
            CI.editor.setPhraseRow(yp, Ap)
          })), (0, Np.useEffect)((() => {
            const pp = Ip.current;
            if (pp) return pp.addEventListener("touchstart", BI, {
              passive: !1
            }), () => {
              pp.removeEventListener("touchstart", BI)
            }
          }), [cp.visible]), !cp.visible) return null;
        const Up = HI(cp),
          wp = xI(Up),
          vp = pp => "char" === pp.type ? WI(pp.char, cp.page, cp.shift) : "phrase" === pp.type ? yp[pp.phraseIndex] : (pp => {
            switch (pp) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === cp.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return lI[oI(cp.page, cp.accentsFirst)[pp]];
              case "space":
                return ip("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return ip("chat" === cp.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(pp.command),
          tp = pp => {
            CI.editor.pressKey(pp)
          };
        return (0, bp.jsxs)("div", {
          ref: Ip,
          className: fp()(Ec.k, "top" === cp.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: cp.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Up.length,
            "--pad-keyboard-height": `${cp.maxHeightPx}px`
          },
          onPointerDown: NI,
          onMouseDown: BI,
          children: [(0, bp.jsx)(fI, {
            target: cp.target,
            label: cp.kind ? ip(QI[cp.kind]) : cp.target.placeholder || ip("controller:keyboardTargetText")
          }), (0, bp.jsx)("div", {
            className: "PadKeyboardRows",
            children: Up.map(((pp, ip) => (0, bp.jsx)("div", {
              className: fp()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === pp[0].type
              }),
              children: pp.map(((pp, op) => {
                const Ip = Op && cp.focus.row === ip && cp.focus.col === op,
                  Sp = "command" === pp.type ? XI.get(pp.command) : void 0;
                return (0, bp.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: pp.width / wp * 100 + "%"
                  },
                  children: (0, bp.jsxs)("div", {
                    className: fp()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Ip,
                      PadKeyboardKeyCommand: "command" === pp.type,
                      PadKeyboardKeyPhrase: "phrase" === pp.type,
                      PadKeyboardKeyActive: "command" === pp.type && "shift" === pp.command && "off" !== cp.shift,
                      PadKeyboardKeySubmit: "command" === pp.type && "submit" === pp.command
                    }),
                    role: "button",
                    onClick: () => {
                      tp({
                        row: ip,
                        col: op
                      })
                    },
                    onTouchEnd: pp => {
                      var cp, Op;
                      pp.preventDefault(), cp = pp.changedTouches[0], Op = pp.currentTarget.getBoundingClientRect(), cp && cp.clientX >= Op.left && cp.clientX <= Op.right && cp.clientY >= Op.top && cp.clientY <= Op.bottom && tp({
                        row: ip,
                        col: op
                      })
                    },
                    children: [(0, bp.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: vp(pp)
                    }), Op && Sp && (0, bp.jsx)(Ro, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Dp.g)(Sp)
                    })]
                  })
                }, op)
              }))
            }, ip)))
          })]
        })
      },
      fI = pp => {
        let {
          target: ip,
          label: cp
        } = pp;
        JI(ip);
        const Op = (0, Np.useRef)(null),
          op = (0, Np.useRef)(null),
          Ip = ip instanceof HTMLTextAreaElement;
        (0, Np.useLayoutEffect)((() => {
          const pp = Op.current,
            ip = op.current;
          Ip ? pp.scrollTop = ip.offsetTop - pp.clientHeight / 2 : pp.scrollLeft = ip.offsetLeft - pp.clientWidth / 2
        }));
        const {
          value: Sp,
          start: xp,
          end: Lp
        } = (0, Zp.o)(ip), Yp = "password" === ip.type ? "\u2022".repeat(Sp.length) : Sp;
        return (0, bp.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, bp.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: cp
          }), (0, bp.jsxs)("div", {
            ref: Op,
            className: fp()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Ip
            }),
            children: [(0, bp.jsx)("span", {
              children: Yp.slice(0, xp)
            }), (0, bp.jsx)("span", {
              ref: op,
              className: "PadKeyboardCaret"
            }), xp !== Lp && (0, bp.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Yp.slice(xp, Lp)
            }), (0, bp.jsx)("span", {
              children: Yp.slice(Lp)
            }), 0 === Yp.length && ip.placeholder && ip.placeholder !== cp && (0, bp.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: ip.placeholder
            })]
          })]
        })
      };
    var bI = cp(1419),
      hI = cp(3532);
    const aI = function() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return ip.map(Dp.g)
      },
      nI = (pp, ip) => {
        const cp = rc(pp);
        return cp ? [{
          glyphs: [cp],
          labelKey: ip
        }] : []
      },
      FI = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      gI = "--pad-hint-bar-clearance",
      GI = "[data-pad-hint-bar-avoid]",
      rI = pp => {
        const ip = [];
        for (const cp of pp)(0, Vp.t)(cp) && ip.push(cp.getBoundingClientRect());
        return ip
      },
      ZI = pp => {
        if (!pp) return null;
        const ip = WO(),
          cp = ip ? rI(((pp, ip) => {
            const cp = pp.closest(GI);
            return cp ? [cp] : ("popup" === ip ? document : pp).querySelectorAll(GI)
          })(ip.root, ip.layer.kind)) : [],
          Op = !ip || ip.root.hasAttribute("data-pad-shows-hud");
        if (((0, hI.k)(null === ip || void 0 === ip ? void 0 : ip.layer.kind, (0, hI.o)()) || Op) && cp.push(...rI(document.querySelectorAll(FI.join(",")))), 0 === cp.length) return null;
        const {
          width: op,
          height: Ip
        } = pp.getBoundingClientRect(), Sp = window.innerHeight - 8, xp = (0, hI.s)(Sp, {
          width: op,
          height: Ip
        }, window.innerWidth / 2, cp, 8);
        return xp === Sp ? null : Math.round(window.innerHeight - xp)
      },
      zI = pp => {
        const ip = document.documentElement.style,
          cp = pp ? `${Math.round(window.innerHeight-pp.getBoundingClientRect().top)}px` : "";
        ip.getPropertyValue(gI) !== cp && (cp ? ip.setProperty(gI, cp) : ip.removeProperty(gI))
      },
      sI = () => {
        const {
          t: pp
        } = (0, op.H)(), {
          hideButtonHints: ip
        } = (0, Pp.s)(), cp = (0, Wp.H)(), [Op, Ip] = (0, Np.useState)(!1), [Sp, Yp] = (0, Np.useState)([]), [Up, wp] = (0, Np.useState)(null), vp = (0, Np.useRef)(null), tp = (0, Np.useRef)(null);
        (0, Ho.f)(jI.b, (pp => {
          Ip(pp)
        })), (0, Ho.f)(hI.r, (() => {
          var pp;
          null === (pp = tp.current) || void 0 === pp || pp.call(tp)
        }));
        const Hp = cp && !ip && !Op;
        return (0, Np.useEffect)((() => {
          if (!Hp) return;
          let pp = null;
          const ip = () => {
            const ip = (() => {
                var pp;
                const ip = Ap.d.getActiveConsumerName(),
                  cp = (0, hI.i)();
                if (cp) {
                  const pp = (0, Dp.g)(cp),
                    ip = "emoteWheel" === cp && "wheel" === (0, Pp.h)().emoteButton || !(0, yp.D)(Ap.d.getLastFrame().values, pp) ? {
                      glyphs: aI("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [pp],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Dp.t)(pp)],
                    labelKey: "controller:wheelChoose"
                  }, ip, {
                    glyphs: aI("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Op = WO();
                if (!Op || "focus" !== ip && "cursor" !== ip) return (0, hI.e)(Dp.g);
                const op = [],
                  Ip = {
                    glyphs: aI("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Sp = (0, gp.p)(Op.root),
                  xp = Sp ? !(0, Vp.z)(Sp) : Boolean(Op.layer.close),
                  Yp = !Sp && Op.layer.closeLabelKey ? Op.layer.closeLabelKey : Ip.labelKey,
                  Wp = xp ? [{
                    ...Ip,
                    labelKey: Yp
                  }] : [],
                  Up = Qc(Op.layer.kind) ? [{
                    glyphs: aI("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === ip) return op.push({
                  glyphs: aI("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), op.push({
                  glyphs: aI("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), op.push(...Wp), op.push(...Up), op.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), MO() && op.push({
                  glyphs: aI("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), op;
                const wp = co.getFocused();
                wp && (0, QO.e)(wp) ? op.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : wp && (0, gp.t)(wp) ? op.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : op.push({
                  glyphs: aI("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const vp = wp ? null === (pp = Uc(wp)) || void 0 === pp ? void 0 : pp.dataset.padSecondary : void 0;
                vp && op.push({
                  glyphs: aI("menuSecondary"),
                  labelKey: vp
                }), op.push(...null !== wp && void 0 !== wp && wp.closest("[data-pad-friends-column]") ? [Ip] : Wp), op.push(...Up);
                const tp = "home" === Op.layer.kind;
                sc(Op.root) || !fc(Op.root) && !Kc(Op) ? tp && op.push({
                  glyphs: aI("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : op.push({
                  glyphs: aI("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), tp && (op.push(...nI("inventory", "controller:menusFriends")), vp || op.push({
                  glyphs: aI("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), op.push(...nI("pause", "controller:menusSettings")), op.push(...nI("leaderboard", "controller:menusNotifications")));
                const Hp = Lp.c.get("openEverythingMenuName");
                return "inGame" === Lp.c.get("gameState") && "popup" !== Op.layer.kind && null !== Hp && ((0, Ac.j)(Hp) ? op.push(...nI("leaderboard", "controller:menusClose")) : Hp !== Dc.n.LOBBY_LEADERBOARD && op.push(...nI("leaderboard", "controller:menusLobby"))), op.push({
                  glyphs: aI("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), op
              })(),
              cp = ZI(vp.current),
              Op = ((pp, ip) => `${pp.map((pp=>`${pp.glyphs.join("+")}:${pp.labelKey}`)).join("|")}@${ip}`)(ip, cp);
            Op !== pp && (pp = Op, (0, xp.unstable_batchedUpdates)((() => {
              Yp(ip), wp(cp)
            }))), zI(vp.current)
          };
          ip(), tp.current = ip;
          const cp = requestAnimationFrame(ip),
            Op = setInterval(ip, 150);
          return () => {
            tp.current = null, cancelAnimationFrame(cp), clearInterval(Op), zI(null)
          }
        }), [Hp]), (0, Np.useLayoutEffect)((() => {
          if (!Hp) return;
          if (0 === Sp.length) return void zI(null);
          const pp = ZI(vp.current);
          pp === Up ? zI(vp.current) : wp(pp)
        }), [Hp, Sp, Up]), Hp && 0 !== Sp.length ? (0, bp.jsx)("div", {
          ref: vp,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Up ? void 0 : {
            bottom: Up
          },
          "aria-hidden": !0,
          children: Sp.map((ip => (0, bp.jsxs)("div", {
            className: "PadButtonHint",
            children: [ip.glyphs.map((pp => (0, bp.jsx)(Ro, {
              glyph: pp,
              className: "PadButtonHintGlyph"
            }, pp))), (0, bp.jsx)("span", {
              children: pp(ip.labelKey)
            })]
          }, ip.labelKey)))
        }) : null
      };
    var KI = cp(1770);
    const VI = [Vp.b, "label", "[data-pad-slider]"].join(","),
      pS = "data-pad-cursor-probe",
      iS = pp => {
        var ip;
        const cp = (pp => {
          const ip = [];
          for (let Op = pp; Op && Op !== document.body && Op !== document.documentElement && (ip.push(Op), !(ip.length > 8)); Op = Op.parentElement);
          const cp = document.documentElement.classList.contains(Wp.y) ? ip[ip.length - 1] : void 0;
          null === cp || void 0 === cp || cp.setAttribute(pS, "");
          try {
            return ip.map((pp => ({
              element: pp,
              cursor: getComputedStyle(pp).cursor
            })))
          } finally {
            null === cp || void 0 === cp || cp.removeAttribute(pS)
          }
        })(pp);
        if ("pointer" !== (null === (ip = cp[0]) || void 0 === ip ? void 0 : ip.cursor)) return null;
        let Op = 0;
        for (; Op + 1 < cp.length && "pointer" === cp[Op + 1].cursor;) Op++;
        return cp[Op].element
      },
      cS = (pp, ip, cp, Op) => {
        const op = Op.root.contains(pp) ? Op.root : null;
        for (let Ip = pp; Ip && Ip !== document.body && Ip !== document.documentElement; Ip = Ip.parentElement) {
          if (Ip instanceof HTMLElement && qp(Ip, ip) && lp(Ip, ip, cp)) return Ip;
          if (Ip === op) break
        }
        return "home" === Op.layer.kind || "gamePage" === Op.layer.kind ? ((pp, ip) => {
          const cp = document.scrollingElement;
          return cp instanceof HTMLElement && ![document.documentElement, document.body].some((ip => {
            const cp = getComputedStyle(ip),
              Op = "y" === pp ? cp.overflowY : cp.overflowX;
            return "hidden" === Op || "clip" === Op
          })) && lp(cp, pp, ip) ? cp : null
        })(ip, cp) : null
      };
    const OS = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Up.e)(yp.p), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const pp = Ap.d.register({
              name: "cursor",
              isActive: () => "cursor" === CO(),
              onFrame: pp => {
                this.onFrame(pp)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: pp => (0, Ap.f)(pp) || pp === (0, Dp.g)("menuConfirm") && (0, gp.v)((0, Wp.d)())
            }),
            ip = (0, IO.o)((pp => {
              const ip = pp.getRoot();
              ip && this.layerPoints.delete(ip), ip === this.layerRoot && (this.layerRoot = null)
            })),
            cp = Yp.m.subscribe("appManagerUpdated|activeInputDevice", (pp => {
              "gamepad" !== pp && this.active && !this.hidden && this.hide()
            }));
          return () => {
            pp(), ip(), Yp.m.unsubscribe(cp), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Wp.n)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.GA()
        }
        activate(pp) {
          this.active = !0, this.hidden = !1;
          const ip = mO();
          !ip || ip.root && ip.root !== pp.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(pp), this.jumpTo(ip.point))
        }
        jumpTo(pp) {
          this.state = {
            x: pp.x,
            y: pp.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.GA())
        }
        onFrame(pp) {
          const ip = WO();
          if (!ip) return;
          if (this.active || this.activate(ip), this.followPage(ip)) return;
          this.followLayer(ip);
          const cp = pp.wokeDevice ? (0, Wp.d)() : null;
          if (cp && this.jumpTo(cp), !(0, Wp.n)()) return void this.hide();
          const Op = (0, Dp.g)("menuToggleCursor");
          if (pp.wasPressed(Op)) return Ap.d.consumeButton(Op), void kO(this.getHandoff(null));
          if (this.handBackToFocus(pp)) return;
          const op = (0, Dp.g)("menuConfirm"),
            Ip = (0, Dp.g)("menuSecondary");
          if (pp.wasPressed((0, Dp.g)("menuBack"))) return (0, gp.g)(ip.root) || (0, gp.c)(ip.root) || yO(), void this.GA();
          if (iO(null, pp, ip)) return pp.wasReleased(op) && this.press && (this.updateHit(!1), this.updateConfirm(pp, op)), void this.GA();
          if (document.pointerLockElement) return void this.hide();
          const Sp = EO() ? {
              x: 0,
              y: 0
            } : (pp => {
              const ip = (pp, ip) => (pp ? 1 : 0) - (ip ? 1 : 0);
              return {
                x: ip(pp.isHeld("Right"), pp.isHeld("Left")),
                y: ip(pp.isHeld("Down"), pp.isHeld("Up"))
              }
            })(pp),
            xp = (0, Pp.h)().moveDeadzone,
            Lp = ((pp, ip) => {
              const cp = (0, yp.h)(pp, dp(ip));
              return Math.hypot(cp.x, cp.y)
            })(pp.leftStick, xp) > 0 || 0 !== Sp.x || 0 !== Sp.y;
          if (this.hidden) {
            const ip = pp.wasPressed(op),
              cp = pp.wasPressed(Ip);
            if (!Lp && !kp(pp.rightStick) && !ip && !cp && !pp.wokeDevice) return void this.GA();
            if (this.hidden = !1, this.updateHit(!1), ip || cp) return ip && (this.press = {
              kind: "ignored"
            }, pp.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.GA()
          }
          this.movePendingPageStart(Lp);
          const Yp = this.getPoint();
          this.state = jp(this.state, {
            stick: pp.leftStick,
            moveDeadzone: xp,
            dpad: Sp,
            dtMs: pp.dtMs,
            cursorSpeedPercent: (0, Pp.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Up = this.state.x !== Yp.x || this.state.y !== Yp.y,
            wp = [op, Ip].some((ip => pp.wasPressed(ip) || pp.wasReleased(ip)));
          (Up || wp || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Up), this.updateConfirm(pp, op), this.updateSecondary(pp, Ip), this.updateScroll(pp, ip), this.GA()
        }
        followPage(pp) {
          const ip = "home" === pp.layer.kind || "gamePage" === pp.layer.kind,
            cp = this.page;
          if (this.page = ip ? {
              key: (0, IO.t)(pp.layer),
              root: pp.root
            } : null, !this.page || !cp || cp.root !== pp.root || cp.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(pp), "hybrid" === jO()) return dO = null, tO = null, eO.lock(), !0;
          const {
            key: Op
          } = this.page;
          return this.pendingPageStart = {
            root: pp.root,
            key: Op,
            returning: co.notePageEnteredByCursor(Op),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(pp) {
          const ip = this.pendingPageStart;
          if (!ip) return;
          if (pp || ip.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const cp = ip.returning ? co.recallStop(ip.root, ip.key) : null;
          if (!cp && ip.returning && performance.now() - ip.enteredAtMs < 1e3) return;
          const Op = null !== cp && void 0 !== cp ? cp : co.pickInitial(ip.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: ip.enteredAtMs
          });
          Op && (this.pendingPageStart = null, this.jumpTo((0, gp.q)(Op)))
        }
        setLayer(pp) {
          this.layerRoot = pp.root, this.layerOrder = pp.order
        }
        followLayer(pp) {
          var ip;
          if (pp.root === this.layerRoot) return;
          null !== (ip = this.layerRoot) && void 0 !== ip && ip.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const cp = this.layerPoints.get(pp.root),
            Op = cp && pp.order <= this.layerOrder ? cp : co.getLayerStartPoint(pp.root);
          this.setLayer(pp), this.jumpTo(Op)
        }
        getHandoff(pp) {
          var ip;
          return {
            point: this.getPoint(),
            element: null !== (ip = this.interactive) && void 0 !== ip ? ip : this.findDraggedSliderNearby(),
            direction: pp
          }
        }
        findDraggedSliderNearby() {
          const pp = this.draggedSlider;
          if (null === pp || void 0 === pp || !pp.isConnected) return null;
          const ip = pp.getBoundingClientRect(),
            {
              y: cp
            } = this.getPoint();
          return cp >= ip.top - 40 && cp <= ip.bottom + 40 ? pp : null
        }
        handBackToFocus(pp) {
          if (!EO()) return !1;
          const ip = yp.w.find((ip => pp.wasPressed(ip)));
          return !!ip && (cp = this.getHandoff(ip), dO = wO(cp), tO = null, eO.lock(), Ap.d.handOffHeldInput(), !0);
          var cp
        }
        getAssistContext() {
          const pp = this.interactive;
          if (null === pp || void 0 === pp || !pp.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ip = pp.getBoundingClientRect();
          if (ip.width > .4 * window.innerWidth || ip.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const cp = (0, Pp.h)().cursorMagnetism && !(0, KI.b)(pp) && !pp.closest("[data-pad-slider]"),
            Op = this.magnet && this.magnet !== pp && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : ip;
          return {
            overInteractive: !0,
            magnetTarget: cp ? {
              x: Op.left + Op.width / 2,
              y: Op.top + Op.height / 2
            } : null
          }
        }
        updateHit(pp) {
          this.lastHitTestMs = performance.now();
          const ip = this.getPoint(),
            cp = document.elementFromPoint(ip.x, ip.y),
            Op = cp && !(0, vp.u)(cp) && (pp => {
              var ip;
              const cp = WO();
              return !(cp && !cp.root.contains(pp) && !pp.closest(".tooltip-container")) || !(null !== (ip = document.getElementById("root")) && void 0 !== ip && ip.contains(pp))
            })(cp) ? cp : null;
          if (Op !== this.hit) return (0, gp.m)(this.hit, Op, ip), this.hit = Op, void this.setInteractive(Op ? (pp => {
            const ip = pp.closest(VI);
            if (ip) {
              var cp, Op;
              const pp = null !== (cp = null === (Op = ip.parentElement) || void 0 === Op ? void 0 : Op.closest("[data-pad-focusable]")) && void 0 !== cp ? cp : ip;
              return (0, Vp.z)(pp) ? {
                element: null,
                magnet: null
              } : {
                element: pp,
                magnet: ip
              }
            }
            const op = iS(pp);
            return {
              element: op,
              magnet: op
            }
          })(Op) : {
            element: null,
            magnet: null
          });
          pp && Op && (0, gp.m)(Op, Op, ip)
        }
        setInteractive(pp) {
          let {
            element: ip,
            magnet: cp
          } = pp;
          this.interactive = ip, this.magnet = cp
        }
        clearHover() {
          this.hit && (0, gp.m)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const pp = this.hit;
          if (!pp || (0, gp.t)(pp)) return {
            kind: "ignored"
          };
          const ip = (0, QO.e)(pp),
            cp = pp.closest("[data-pad-slider]");
          return ip && cp ? {
            kind: "slider",
            slider: cp,
            adjuster: ip
          } : ((0, gp.n)(pp, this.getPoint()), {
            kind: "pointer",
            target: pp
          })
        }
        applySliderFraction(pp) {
          var ip;
          const cp = pp.slider.getBoundingClientRect(),
            Op = cp.height > cp.width,
            op = null === (ip = pp.slider.querySelector("[data-pad-slider-handle]")) || void 0 === ip ? void 0 : ip.getBoundingClientRect(),
            Ip = op ? Op ? op.height : op.width : 0,
            Sp = (Op ? cp.height : cp.width) - Ip;
          if (Sp <= 0) return;
          const xp = Op ? cp.bottom - Ip / 2 - this.state.y : this.state.x - cp.left - Ip / 2;
          pp.adjuster.setFraction(Math.max(0, Math.min(1, xp / Sp)))
        }
        updateConfirm(pp, ip) {
          pp.wasPressed(ip) && (this.press = pp.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const cp = this.press;
          if (!cp) return;
          if (pp.isHeld(ip)) return "slider" === cp.kind && this.applySliderFraction(cp), void this.updateRepeat();
          this.press = null;
          const Op = this.repeated;
          if (this.endRepeat(), !pp.wasReleased(ip)) return void this.endPressWithoutClick(cp);
          const op = this.getPoint(),
            Ip = this.hit;
          if ("slider" === cp.kind && cp.adjuster.endDrag(), "pointer" === cp.kind) {
            const pp = null !== Ip && void 0 !== Ip ? Ip : cp.target.isConnected ? cp.target : null;
            pp && (0, gp.o)(pp, op);
            const ip = Ip && cp.target.isConnected && !Op ? ((pp, ip) => {
              for (let cp = pp; cp; cp = cp.parentElement)
                if (cp.contains(ip)) return cp;
              return null
            })(cp.target, Ip) : null;
            ip && (co.noteCursorActivation(ip), (0, vp.g)(ip, new MouseEvent("click", (0, gp.F)(op, 0, 0))), (0, gp.e)(ip), (0, gp.B)(ip) && (0, gp.z)(ip))
          }
        }
        beginRepeat() {
          var pp, ip, cp;
          const Op = null !== (pp = null === (ip = this.hit) || void 0 === ip ? void 0 : ip.closest("[data-pad-repeat]")) && void 0 !== pp ? pp : null;
          this.repeatStop = Op, this.repeatKey = null !== (cp = null === Op || void 0 === Op ? void 0 : Op.getAttribute("data-pad-repeat")) && void 0 !== cp ? cp : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const pp = this.repeatStop;
          if (!pp) return;
          const ip = this.hit;
          pp.isConnected && !(0, Vp.z)(pp) && pp.getAttribute("data-pad-repeat") === this.repeatKey && ip && pp.contains(ip) ? pp.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, co.noteCursorActivation(pp), (0, vp.g)(pp, new MouseEvent("click", (0, gp.F)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(pp) {
          "slider" === pp.kind && pp.adjuster.endDrag(), "pointer" === pp.kind && pp.target.isConnected && (0, gp.o)(pp.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(pp, ip) {
          pp.wasPressed(ip) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !pp.isHeld(ip) && (this.secondaryArmed = !1, pp.wasReleased(ip) && this.hit && (0, gp.k)(this.hit, this.getPoint(), 2))
        }
        updateScroll(pp, ip) {
          const cp = mp(pp.rightStick, pp.dtMs);
          if (0 === cp.x && 0 === cp.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + cp.x,
            y: this.scrollRemainder.y + cp.y
          };
          const Op = Math.trunc(this.scrollRemainder.x),
            op = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Op,
            y: this.scrollRemainder.y - op
          };
          const Ip = this.hit;
          if (!Ip) return;
          let Sp = !1;
          if (0 !== op) {
            const pp = cS(Ip, "y", op > 0 ? 1 : -1, ip);
            pp && (pp.scrollBy({
              top: op,
              behavior: "instant"
            }), Sp = !0)
          }
          if (0 !== Op) {
            const pp = cS(Ip, "x", Op > 0 ? 1 : -1, ip);
            pp && (pp.scrollBy({
              left: Op,
              behavior: "instant"
            }), Sp = !0)
          }
          Sp && (this.lastHitTestMs = -1 / 0)
        }
        GA() {
          rp.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      oS = () => {
        const pp = (0, Np.useMemo)((() => new np), []),
          ip = (0, Wp.H)();
        return (0, Np.useEffect)((() => {
          if (!ip) return;
          let cp = 0,
            Op = {
              of: null,
              atMs: 0,
              list: []
            };
          const op = document.getElementsByClassName(XO),
            Ip = pp => {
              for (const ip of [...op]) ip !== pp && ip.classList.remove(XO)
            },
            Sp = () => {
              var ip;
              cp = requestAnimationFrame(Sp);
              const op = (() => {
                const pp = co.getFocused();
                if (co.isActive() && null !== pp && void 0 !== pp && pp.isConnected) return pp;
                const ip = OS.getHighlighted();
                return null !== ip && void 0 !== ip && ip.isConnected ? ip : null
              })();
              Ip(op), op && !op.classList.contains(XO) && op.classList.add(XO);
              const xp = null !== (ip = null === op || void 0 === op ? void 0 : op.closest("[data-pad-reticle-box]")) && void 0 !== ip ? ip : op;
              pp.show(xp ? ((pp, ip) => {
                let cp = pp.left,
                  Op = pp.top,
                  op = pp.right,
                  Ip = pp.bottom;
                for (const Sp of ip) {
                  if (!Sp) continue;
                  const pp = Jp(Sp);
                  cp = Math.max(cp, pp.left), Op = Math.max(Op, pp.top), op = Math.min(op, pp.right), Ip = Math.min(Ip, pp.bottom)
                }
                return op <= cp || Ip <= Op ? null : {
                  left: cp,
                  top: Op,
                  width: op - cp,
                  height: Ip - Op
                }
              })(xp.getBoundingClientRect(), (pp => {
                const ip = performance.now();
                return (Op.of !== pp || ip - Op.atMs > 500) && (Op = {
                  of: pp,
                  atMs: ip,
                  list: [Mp(pp, "y"), Mp(pp, "x")]
                }), Op.list
              })(xp)) : null)
            };
          return cp = requestAnimationFrame(Sp), () => {
            cancelAnimationFrame(cp), Ip(null), pp.hide()
          }
        }), [ip, pp]), (0, bp.jsx)(Fp, {
          placer: pp,
          className: "PadFocusRing"
        })
      },
      IS = (pp, ip) => {
        pp.style.transform = `translate3d(${ip.x}px, ${ip.y}px, 0)`, pp.classList.toggle("Visible", ip.visible), pp.classList.toggle("Pressed", ip.pressed)
      },
      SS = () => {
        const pp = (0, Np.useRef)(null);
        return (0, Np.useEffect)((() => {
          const ip = rp.subscribe((ip => {
            pp.current && IS(pp.current, ip)
          }));
          return pp.current && IS(pp.current, rp.get()), ip
        }), []), (0, bp.jsx)("div", {
          ref: pp,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, bp.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      xS = "#ncmp__modal.ncmp__active",
      LS = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(xS) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(xS),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      YS = "PadOverThirdParty",
      DS = new Set(LS.map((pp => pp.id))),
      AS = () => {
        const pp = LS.map((pp => {
            let {
              id: ip,
              find: cp,
              startSelectors: Op
            } = pp;
            return (0, IO.q)({
              id: ip,
              kind: "popup",
              getRoot: () => {
                const pp = cp(),
                  ip = pp ? ((pp, ip) => {
                    var cp;
                    for (const Op of ip) {
                      const ip = pp.querySelector(Op);
                      if (ip) return ip
                    }
                    return null !== (cp = [...pp.querySelectorAll("button")].find((pp => !pp.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== cp ? cp : null
                  })(pp, Op) : null;
                if (pp && ip && !ip.hasAttribute("data-pad-default-focus")) {
                  for (const ip of pp.querySelectorAll("[data-pad-default-focus]")) ip.removeAttribute("data-pad-default-focus");
                  for (const ip of pp.querySelectorAll("[data-pad-hint-bar-avoid]")) ip.removeAttribute("data-pad-hint-bar-avoid");
                  ip.setAttribute("data-pad-default-focus", ""), ((pp, ip) => {
                    let cp = pp;
                    for (let Op = pp.parentElement; Op && ip.contains(Op) && !(Op.getBoundingClientRect().height >= window.innerHeight / 2); Op = Op.parentElement) cp = Op;
                    return cp
                  })(ip, pp).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return pp
              },
              close: null,
              memoryKey: null
            })
          })),
          ip = document.documentElement,
          cp = Sp.e.onFrame((() => {
            const pp = (0, Wp.n)() ? WO() : null,
              cp = !!pp && (Op = pp.layer, DS.has(Op.id));
            var Op;
            ip.classList.contains(YS) !== cp && ip.classList.toggle(YS, cp)
          }));
        return () => {
          for (const ip of pp) ip();
          cp(), ip.classList.remove(YS)
        }
      },
      PS = "PadLargePointer",
      WS = () => {
        (0, Np.useEffect)((() => {
          const pp = (0, vp.n)(document.body),
            ip = co.install(),
            cp = OS.install(),
            Op = AS();
          return () => {
            pp(), ip(), cp(), Op()
          }
        }), []);
        const {
          largePointer: pp
        } = (0, Pp.s)(), ip = (0, bI.r)() && pp;
        return (0, Np.useEffect)((() => {
          if (ip) return document.documentElement.classList.add(PS), () => {
            document.documentElement.classList.remove(PS)
          }
        }), [ip]), (0, xp.createPortal)((0, bp.jsxs)(bp.Fragment, {
          children: [(0, bp.jsx)(sI, {}), (0, bp.jsx)(oS, {}), (0, bp.jsx)(SS, {})]
        }), document.body)
      };
    var yS = cp(8900),
      US = cp(8928),
      wS = cp(8917);
    cp(8937);
    const vS = (pp, ip) => {
        const [cp, Op] = (0, Np.useState)(!1), [op, Ip] = (0, Np.useState)(null), Sp = (0, Np.useRef)(null), xp = (0, Np.useCallback)((pp => {
          Sp.current = pp, Ip(pp)
        }), []), Lp = (0, Np.useCallback)((() => {
          Op(!1), xp(null)
        }), [xp]), Dp = (0, Np.useCallback)((() => {
          Op(!0)
        }), []), Ap = (0, Np.useCallback)(((pp, ip) => {
          xp((0, wS.A)(pp, ip, Sp.current))
        }), [xp]);
        (0, Np.useLayoutEffect)((() => (ip(cp), (0, hI.y)(pp, cp), Yp.m.GA(hI.r), () => {
          ip(!1), (0, hI.y)(pp, !1), Yp.m.GA(hI.r)
        })), [cp, pp, ip]), (0, Ho.f)("appManagerUpdated|activeInputDevice", (pp => {
          "gamepad" !== pp && Lp()
        })), (0, Ho.f)("appManagerUpdated|gameState", (pp => {
          "inGame" !== pp && Lp()
        }));
        const Pp = () => {
          (0, Ac.l)() && Lp()
        };
        return (0, Ho.f)("appManagerUpdated|openEverythingMenuName", Pp), (0, Ho.f)("appManagerUpdated|openInGameMenuName", Pp), {
          open: cp,
          picked: op,
          pickedRef: Sp,
          show: Dp,
          aim: Ap,
          close: Lp
        }
      },
      tS = pp => {
        let {
          className: ip,
          slotCount: cp,
          picked: Op,
          slotLabel: op,
          renderSlot: Ip,
          centre: Sp
        } = pp;
        const xp = Array.from({
          length: cp
        }, ((pp, ip) => ip));
        return (0, bp.jsx)("div", {
          className: fp()("EmoteWheelOverlay PadRadialWheel", ip),
          children: (0, bp.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * wS.r + "rem",
              height: 2 * wS.r + "rem"
            },
            children: [(0, bp.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${wS.m} ${wS.m}`,
              children: [xp.map((pp => (0, bp.jsx)("path", {
                d: (0, wS.t)(pp, cp, wS.f, wS.h, wS.k),
                className: fp()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: pp === Op
                }),
                "aria-label": op(pp)
              }, pp))), (0, bp.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: wS.f,
                cy: wS.f,
                r: wS.k
              }), (0, bp.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: wS.f,
                cy: wS.f,
                r: wS.h
              }), null !== Op && (0, bp.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, wS.t)(Op, cp, wS.f, wS.h, wS.k)
              })]
            }), xp.map((pp => {
              const ip = (0, wS.w)(pp, cp);
              return (0, bp.jsx)("div", {
                className: fp()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: pp === Op
                }),
                style: {
                  left: `calc(50% + ${wS.c*Math.cos(ip)}rem)`,
                  top: `calc(50% + ${wS.c*Math.sin(ip)}rem)`
                },
                "aria-hidden": !0,
                children: Ip(pp)
              }, pp)
            })), (0, bp.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Sp
            })]
          })
        })
      },
      HS = UI.length,
      dS = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = vS("chat", lc.r), cp = (0, Np.useMemo)((() => UI.map((ip => pp(ip)))), [pp]);
        return (0, Ho.f)(lc.n, (() => {
          ip.open || (0, yS.f)() || (0, US.x)() || "inGame" !== Lp.c.get("gameState") || (0, Ac.l)() || !(0, Ec.b)() || ip.show()
        })), (0, Ho.f)(lc.h, (pp => {
          ip.open && ip.aim(pp, HS)
        })), (0, Ho.f)(lc.m, (() => {
          var pp;
          if (!ip.open) return;
          const Op = ip.pickedRef.current;
          null !== Op ? wI.claim(performance.now()) && (ip.close(), null === (pp = (0, Ec.b)()) || void 0 === pp || pp.sendLine(cp[Op])) : ip.close()
        })), (0, Ho.f)(lc.l, ip.close), ip.open ? (0, bp.jsx)(tS, {
          className: "QuickChatWheel",
          slotCount: HS,
          picked: ip.picked,
          slotLabel: pp => cp[pp],
          renderSlot: pp => cp[pp],
          centre: null !== ip.picked ? cp[ip.picked] : pp("controller:quickChatPick")
        }) : null
      },
      eS = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = vS("actionButton", US.z), [cp, Op] = (0, Np.useState)([]);
        if ((0, Ho.f)(US.p, (pp => {
            ip.open || (0, yS.f)() || (0, lc.d)() || "inGame" !== Lp.c.get("gameState") || (0, Ac.l)() || (Op(pp), ip.show())
          })), (0, Ho.f)(US.e, (pp => {
            ip.open && ip.aim(pp, cp.length)
          })), (0, Ho.f)(US.l, (() => {
            if (!ip.open) return;
            const pp = ip.pickedRef.current;
            ip.close(), null !== pp && Yp.m.GA(US.t, cp[pp])
          })), (0, Ho.f)(US.i, ip.close), !ip.open) return null;
        const Ip = null !== ip.picked ? cp[ip.picked] : null;
        return (0, bp.jsx)(tS, {
          className: "ActionWheel",
          slotCount: cp.length,
          picked: ip.picked,
          slotLabel: ip => {
            const Op = cp[ip];
            return "reload" === Op.kind ? pp("controller:gameplayReload") : "customButton" === Op.kind ? Op.description || Op.icon : "touchButton" === Op.kind && "string" === typeof Op.label ? Op.label : ""
          },
          renderSlot: pp => (0, bp.jsx)(Mo, {
            action: cp[pp]
          }),
          centre: Ip ? (0, bp.jsx)(Mo, {
            action: Ip
          }) : pp("controller:actionWheelPick")
        })
      };
    var uS = cp(104);
    const jS = () => ((0, Np.useEffect)((() => {
        var pp, ip;
        const cp = (0, vp.n)(document.getElementById("root")),
          Op = (0, Wp.h)(),
          op = (() => {
            const pp = [Yp.m.subscribe(oo.f, (() => {
                Lo("blockBreak")
              })), Yp.m.subscribe("damagedByOtherPlayer", (() => {
                Lo("damage")
              })), Yp.m.subscribe("yourAttackHit", (pp => {
                let {
                  hitSelf: ip
                } = pp;
                ip || Lo("hit")
              }))],
              ip = Sp.e.onActivePadChanged((pp => {
                pp && Lo("connect")
              }));
            return () => {
              for (const ip of pp) Yp.m.unsubscribe(ip);
              ip()
            }
          })(),
          Ip = (() => {
            const pp = new yo({
              getVisitId: Wo.g,
              peekVisitId: Wo.peekVisitSessionId,
              readReportedVisitId: () => {
                const pp = Po.l.getItem(Uo);
                return "string" === typeof pp ? pp : null
              },
              writeReportedVisitId: pp => {
                Po.l.setItem(Uo, pp)
              },
              isPadActive: Wp.n,
              getPadFamily: () => {
                var pp, ip;
                return null !== (pp = null === (ip = Sp.e.getActivePad()) || void 0 === ip ? void 0 : ip.family) && void 0 !== pp ? pp : null
              },
              canReport: Do.isBloxdGa4Ready,
              getInputType: Ao.c,
              Yy: Do.logControllerUsedToGtag
            });
            let ip = 0,
              cp = null;
            const Op = op => {
                null === cp && ("notReady" !== pp.check(op) || null !== cp || ip >= 20 || (ip++, cp = setTimeout((() => {
                  cp = null, Op(!1)
                }), 3e3)))
              },
              op = Yp.m.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Op(!0)
              })),
              Ip = (0, Wo.m)((() => {
                ip = 0, Op(!0)
              }));
            return () => {
              Yp.m.unsubscribe(op), Ip(), null !== cp && clearTimeout(cp)
            }
          })(),
          xp = Sp.e.onFrame(((pp, ip, cp) => {
            const Op = (0, Wp.u)(pp, cp);
            Ap.d.dispatch(pp, ip, Op)
          }));
        let Dp = null !== (pp = null === (ip = Sp.e.getActivePad()) || void 0 === ip ? void 0 : ip.family) && void 0 !== pp ? pp : null;
        const yp = Sp.e.onActivePadChanged((pp => {
            var ip, cp;
            (Ap.d.reset(), (0, Wp.A)(), Yp.m.GA(Sp.c, pp), (null !== (ip = null === pp || void 0 === pp ? void 0 : pp.family) && void 0 !== ip ? ip : null) !== Dp) && (Dp = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.family) && void 0 !== cp ? cp : null, Yp.m.GA(Pp.c, (0, Pp.h)()));
            !pp && (0, Wp.n)() && (0, Wp.E)(Lp.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Up = () => {
            "visible" !== document.visibilityState && Ap.d.clear()
          },
          wp = () => {
            Ap.d.clear()
          };
        document.addEventListener("visibilitychange", Up), window.addEventListener("blur", wp), Sp.e.start(), (0, Yo.k)();
        const tp = null;
        return () => {
          cp(), Op(), op(), Ip(), xp(), yp(), document.removeEventListener("visibilitychange", Up), window.removeEventListener("blur", wp), Sp.e.stop(), null === tp || void 0 === tp || tp()
        }
      }), []), (0, bp.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, bp.jsx)(No, {}), (0, bp.jsx)(Go, {}), (0, bp.jsx)(ro, {}), (0, bp.jsx)(TI, {}), (0, bp.jsx)(WS, {}), (0, bp.jsx)(dS, {}), (0, bp.jsx)(eS, {})]
      })),
      kS = () => uS.featureFlags.useControllerSupport ? (0, bp.jsx)(jS, {}) : null;
    var mS = cp(8327),
      RS = cp(8944);
    const qS = new Set(Yo.h),
      MS = pp => `${RS.o}${(0,Pp.k)()}/${pp}`,
      CS = pp => {
        if (!(0, RS.l)(pp)) return null;
        const [ip, cp] = pp.slice(RS.o.length).split("/");
        return (0, mS.f)(ip) && qS.has(cp) ? (0, Yo.g)(ip, cp) : null
      };
    var ES = cp(8952);
    const XS = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Wp.H)(), {
          gameState: cp,
          isUiHidden: Op
        } = (0, Lp.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: Ip,
          sneakMode: Sp
        } = (0, Pp.s)(), [xp, Yp] = (0, Np.useState)(ES.b);
        return (0, Ho.f)(Bo.p, Yp), ip && !Op && "inGame" === cp && xp ? (0, bp.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Ip && (0, bp.jsx)(Ro, {
            glyph: (0, Dp.g)("toggle" === Sp ? "sneak" : "sneakToggle")
          }), (0, bp.jsx)("span", {
            children: pp("controller:gameplaySneaking")
          })]
        }) : null
      },
      lS = 12,
      QS = pp => {
        let {
          trigger: ip,
          className: cp,
          children: Op
        } = pp;
        const op = (0, Np.useRef)(null);
        return (0, Np.useEffect)((() => {
          let pp = 0;
          const cp = Mp(ip, "y"),
            Op = () => {
              pp = requestAnimationFrame(Op);
              const Ip = op.current;
              if (!Ip || null === ip || void 0 === ip || !ip.isConnected) return;
              const {
                left: Sp,
                top: xp
              } = function(pp, ip, cp) {
                let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Ip = pp.left + pp.width / 2,
                  Sp = Math.max(lS, cp.width - lS - ip.width),
                  xp = Math.min(Math.max(Ip - ip.width / 2, lS), Sp),
                  Lp = cp.height - Op;
                let Yp = 0,
                  Dp = Lp;
                if (op) {
                  const pp = Math.max(0, op.top),
                    Op = Math.min(Lp, op.bottom);
                  Op - pp >= Math.max(cp.height / 2, ip.height + 24) && (Yp = pp, Dp = Op)
                }
                const Ap = pp.top + pp.height / 2 < (Yp + Dp) / 2 ? Dp - lS - ip.height : Yp + lS;
                return {
                  left: xp,
                  top: Math.max(lS, Ap)
                }
              }(ip.getBoundingClientRect(), {
                width: Ip.offsetWidth,
                height: Ip.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(gI)) || 0, null !== cp && void 0 !== cp && cp.isConnected ? cp.getBoundingClientRect() : null);
              Ip.style.transform = `translate3d(${Math.round(Sp)}px, ${Math.round(xp)}px, 0)`, Ip.style.visibility = "visible"
            };
          return Op(), () => {
            cancelAnimationFrame(pp)
          }
        }), [ip]), (0, bp.jsx)("div", {
          ref: op,
          className: cp,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Op
        })
      };
    var JS = cp(1060),
      BS = cp(8961),
      NS = cp(1480),
      TS = cp(8967),
      fS = cp(8972);
    const bS = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        leave: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      hS = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Wp.H)(), cp = (0, BS.d)(), Op = (0, no.i)("_tasks"), Ip = (0, no.i)("_availableLeaderboards");
        if (!ip) return null;
        const Sp = (pp => {
          let {
            hasShop: ip,
            hasTasksOrLeaderboards: cp,
            canInvite: Op
          } = pp;
          const op = [];
          return ip && op.push("shop"), cp && op.push("tasks"), Op && op.push("invite"), op.push("leave"), op
        })({
          hasShop: cp,
          hasTasksOrLeaderboards: !(!Op && !Ip),
          canInvite: !!uS.featureFlags.canUseInviteLinks
        });
        return (0, bp.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Sp.map((ip => {
            const {
              icon: cp,
              labelKey: Op
            } = bS[ip], op = "leave" === ip ? NS.K : NS.f;
            return (0, bp.jsx)(op, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (pp => {
                  switch (pp) {
                    case "shop":
                      return Yp.m.GA(fS.i), void Lp.c.set({
                        openEverythingMenuName: Dc.n.SHOP
                      });
                    case "tasks":
                      return void Yp.m.GA("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Yp.m.GA("toggleMenu", "inviteLink");
                    case "leave":
                      (0, TS.b)()
                  }
                })(ip)
              },
              children: (0, bp.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, bp.jsx)(JS.d, {
                  name: cp
                }), (0, bp.jsx)("span", {
                  children: pp(Op)
                })]
              })
            }, ip)
          }))
        })
      };
    var aS = cp(2012);
    const nS = yp.u,
      FS = ["forward", "backward", "left", "right", "sprint"],
      gS = pp => pp.ctrlKey || pp.altKey || "Alt" === pp.key || "ArrowUp" === pp.key || "ArrowDown" === pp.key || "Tab" === pp.code || "/" === pp.key || "Slash" === pp.code;
    class GS {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(yp.N).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(pp) {
        this.armed = pp
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || ip ? !pp.repeat && this.swallowedKeys.delete(pp.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(pp.code),
          continues: !1
        } : "Escape" === pp.key || pp.repeat && !this.swallowedKeys.has(pp.code) ? {
          swallow: !1,
          continues: !1
        } : cp ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(pp.code), {
          swallow: !0,
          continues: (0, Wp.j)(pp)
        })
      }
      onKeyUp(pp) {
        return this.swallowedKeys.delete(pp.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const op = (0, yp.m)(pp.values, this.previousHeld),
          Ip = null === cp ? -1 : (0, yp.i)(cp),
          Sp = Ip >= 0 && op[Ip] && !this.previousHeld[Ip],
          xp = op.some(((pp, ip) => pp && !this.previousHeld[ip] && ip !== Ip)),
          Lp = Math.hypot(pp.leftStick.x, pp.leftStick.y) >= nS,
          Yp = Math.hypot(pp.rightStick.x, pp.rightStick.y) >= nS,
          Dp = Lp && !this.leftStickWasPressed || Yp && !this.rightStickWasPressed;
        this.previousHeld = op, this.leftStickWasPressed = Lp, this.rightStickWasPressed = Yp;
        let Ap = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Ap = !0);
        const Pp = !ip && Sp && !Op,
          Wp = !Pp && this.armed && !ip && (xp || Dp);
        return (Pp || Wp) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Wp, Ap = !0), {
          continues: Wp,
          back: Pp,
          consumeHeld: Ap
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const rS = new Set([...aS.i, ...aS.B]),
      ZS = pp => ((pp, ip, cp) => {
        const Op = Object.keys(ip).filter((Op => !cp.has(Op) && ip[Op].includes(pp)));
        return Op.length > 0 && Op.every((pp => FS.includes(pp)))
      })(pp, aS.t, rS),
      zS = (pp, ip, cp) => {
        const Op = new GS,
          op = pp => {
            if (!pp.isTrusted) return;
            const {
              swallow: cp,
              continues: op
            } = Op.onKeyDown(pp, !(0, Wp.J)(pp) || (0, Oo.f)() || (0, Ac.l)(), ZS(pp.code));
            cp && (pp.stopImmediatePropagation(), gS(pp) && pp.preventDefault()), op && ((0, Wp.E)("keyboardMouse"), ip())
          },
          Ip = pp => {
            pp.isTrusted && Op.onKeyUp(pp) && (pp.stopImmediatePropagation(), gS(pp) && pp.preventDefault())
          },
          xp = () => {
            Op.forgetKeys()
          };
        window.addEventListener("keydown", op, !0), window.addEventListener("keyup", Ip, !0), window.addEventListener("blur", xp);
        const Lp = Sp.e.onFrame((pp => {
            const op = Ap.d.getActiveConsumerName(),
              Ip = cp(),
              Sp = Ip ? (0, Dp.g)("menuBack") : null,
              xp = null !== op && "gameplay" !== op,
              {
                continues: Lp,
                back: Yp,
                consumeHeld: yp
              } = Op.onPadFrame(pp, xp, Sp, (0, Wp.r)(pp));
            if (yp) {
              const pp = (0, Pp.h)().swapSticks ? "right" : "left";
              Ap.d.consumeAllHeld(Op.consumeLeavesMoveStick() ? pp : null)
            }
            Yp ? null === Ip || void 0 === Ip || Ip() : Lp && ip()
          })),
          Yp = (0, Oo.i)(`pressToContinue:${pp}`, (() => Op.blocksGameplay()));
        return {
          setArmed: pp => {
            Op.setArmed(pp)
          },
          dispose: () => {
            window.removeEventListener("keydown", op, !0), window.removeEventListener("keyup", Ip, !0), window.removeEventListener("blur", xp), Lp(), Yp()
          }
        }
      };
    var sS = cp(5113),
      KS = cp(3537),
      VS = cp(3224),
      px = cp(8331);
    const ix = pp => {
        let {
          text: ip
        } = pp;
        return (0, bp.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: ip
        })
      },
      cx = pp => {
        let {
          label: ip,
          hint: cp,
          options: Op,
          value: Ip,
          onChange: Sp
        } = pp;
        const {
          t: xp
        } = (0, op.H)();
        return (0, bp.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, bp.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, bp.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, bp.jsx)("div", {
                className: "SliderText",
                children: ip
              }), cp && (0, bp.jsx)("div", {
                className: "ControllerSettingsHint",
                children: cp
              })]
            }), (0, bp.jsx)(VS.d, {
              options: Op.map((pp => ({
                label: "label" in pp ? pp.label : xp(pp.labelKey),
                value: pp.value
              }))),
              value: Ip,
              onChange: pp => {
                Sp(pp.value)
              }
            })]
          })
        })
      },
      Ox = pp => {
        let {
          settingKey: ip,
          label: cp,
          range: Op,
          format: op
        } = pp;
        const Ip = (0, Pp.s)();
        return (0, bp.jsx)(sS.i, {
          name: cp,
          min: Op.min,
          max: Op.max,
          step: Op.step,
          padStep: Op.step,
          initValue: Ip[ip],
          format: op,
          onChange: pp => {
            (0, Pp.o)({
              [ip]: (0, px.w)(pp, Op)
            })
          }
        })
      };
    var ox = cp(8979),
      Ix = cp(8988);
    const Sx = pp => pp instanceof DOMException && ("SecurityError" === pp.name || "NotAllowedError" === pp.name),
      xx = pp => {
        const [ip] = [...pp.controllers].sort(((pp, ip) => Ix.o[pp] - Ix.o[ip]));
        return Ix.k[ip]
      },
      Lx = pp => {
        (0, ox.e)().allowPhoneMotion().catch((ip => {
          pp && Sx(ip) ? pp() : console.warn("Could not enable the motion sensor", ip)
        }))
      },
      Yx = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Dx = pp => {
        let {
          status: ip
        } = pp;
        const {
          t: cp
        } = (0, op.H)(), [Op, Ip] = (0, Np.useState)(null), Sp = `${ip.controllers.join(",")}|${ip.phoneMotion}`;
        (0, Np.useEffect)((() => {
          Ip(null)
        }), [Sp]);
        const xp = () => {
          (0, ox.e)().connectController().then((pp => {
            Ip(pp > 0 ? "openFailed" : null)
          })).catch((pp => {
            Sx(pp) ? Ip("needsClick") : console.warn("Could not connect motion controller", pp)
          }))
        };
        if (ip.hidSupported) {
          let pp = cp("controller:settingsGyroConnectHint");
          return "needsClick" === Op ? pp = cp("controller:settingsGyroConnectNeedsClick") : "openFailed" === Op ? pp = cp("controller:settingsGyroOpenFailed") : ip.controllers.length > 0 && (pp = cp("controller:settingsGyroConnected", {
            name: xx(ip)
          })), (0, bp.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, bp.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, bp.jsx)("div", {
                className: "ControllerSettingsHint",
                children: pp
              }), (0, bp.jsx)(NS.f, {
                onClick: xp,
                children: cp("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === ip.phoneMotion) return (0, bp.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, bp.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Op && (0, bp.jsx)("div", {
              className: "ControllerSettingsHint",
              children: cp("controller:settingsGyroAllowNeedsTap")
            }), (0, bp.jsx)(NS.f, {
              onClick: () => {
                Lx((() => {
                  Ip("needsTap")
                }))
              },
              children: cp("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Lp = Yx[ip.phoneMotion];
        return Lp ? (0, bp.jsx)("div", {
          className: "ControllerSettingsHint",
          children: cp(Lp)
        }) : null
      },
      Ax = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Pp.s)(), cp = (0, ox.i)(), Op = (0, Wp.I)(), Ip = !cp.hidSupported && cp.phoneSupported && !cp.padConnected, Sp = (cp.hidSupported || cp.phoneSupported) && !Ip, xp = (0, Dp.g)("pause");
        return (0, bp.jsxs)(bp.Fragment, {
          children: [(0, bp.jsx)(ix, {
            text: pp("controller:settingsGyro")
          }), Ip && (0, bp.jsx)("div", {
            className: "ControllerSettingsHint",
            children: pp("controller:settingsGyroPhoneNeedsController")
          }), !Sp && !Ip && (0, bp.jsx)("div", {
            className: "ControllerSettingsHint",
            children: pp(cp.hidBlocked || cp.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Sp && (0, bp.jsx)(sS.b, {
            label: pp(cp.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: ip.gyroAiming,
            onClick: pp => {
              var ip, cp;
              (0, Pp.o)({
                gyroAiming: pp
              });
              const Op = null === (ip = null === (cp = navigator.userActivation) || void 0 === cp ? void 0 : cp.isActive) || void 0 === ip || ip;
              if (!pp || !Op) return;
              const op = (0, ox.e)(),
                Ip = op.getStatus();
              Ip.hidSupported ? op.connectControllerIfNoneGranted().catch((pp => {
                console.warn("Motion controller picker unavailable", pp)
              })) : "needsPermission" === Ip.phoneMotion && Lx()
            },
            circleInfoText: pp(cp.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Sp && cp.hidSupported && (0, bp.jsx)("div", {
            className: "ControllerSettingsHint",
            children: pp("controller:settingsGyroSteamHint")
          }), Sp && ip.gyroAiming && (0, bp.jsxs)(bp.Fragment, {
            children: [(0, bp.jsx)(Dx, {
              status: cp
            }), (0, bp.jsx)(Ox, {
              settingKey: "gyroSensitivity",
              label: pp("controller:settingsGyroSensitivity"),
              range: px.P,
              format: px.J
            }), (0, bp.jsx)(cx, {
              label: pp("controller:settingsGyroActivation"),
              hint: "aiming" === ip.gyroActivation && (0, bp.jsx)(KS.d, {
                text: pp("controller:settingsGyroAimingHint", {
                  button: KS.g
                }),
                glyph: (0, Dp.g)("use")
              }),
              options: px.N,
              value: ip.gyroActivation,
              onChange: pp => {
                (0, Pp.o)({
                  gyroActivation: pp
                })
              }
            }), "button" === ip.gyroActivation && (0, bp.jsx)(cx, {
              label: pp("controller:settingsGyroButton"),
              hint: pp("controller:settingsGyroButtonHint"),
              options: px.r.filter((pp => pp !== xp || pp === ip.gyroButton)).map((pp => ({
                label: mo(Op, pp),
                value: pp
              }))),
              value: ip.gyroButton,
              onChange: pp => {
                (0, Pp.o)({
                  gyroButton: pp
                })
              }
            })]
          })]
        })
      };
    var Px = cp(1880);
    const Wx = () => {
      const {
        t: pp
      } = (0, op.H)(), ip = (0, Pp.s)(), cp = (0, Wp.I)();
      return (0, bp.jsxs)(bp.Fragment, {
        children: [(0, bp.jsx)(ix, {
          text: pp("controller:settingsAccessibility")
        }), (0, bp.jsx)(sS.b, {
          label: pp("controller:settingsSwapConfirmBack"),
          checked: (0, Dp.D)(ip.swapConfirmBack, cp),
          onClick: pp => {
            (0, Pp.o)({
              swapConfirmBack: pp === (0, Dp.D)(null, cp) ? null : pp
            }), Px.i.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: pp("controller:settingsSwapConfirmBackInfo")
        }), (0, bp.jsx)(cx, {
          label: pp("controller:settingsButtonRepeat"),
          hint: pp("controller:settingsButtonRepeatHint"),
          options: px.p,
          value: ip.buttonRepeat,
          onChange: pp => {
            (0, Pp.o)({
              buttonRepeat: pp
            })
          }
        }), (0, bp.jsx)(cx, {
          label: pp("controller:settingsTapHoldTime"),
          hint: pp("controller:settingsTapHoldTimeHint"),
          options: px.qb,
          value: ip.tapHoldTime,
          onChange: pp => {
            (0, Pp.o)({
              tapHoldTime: pp
            })
          }
        }), (0, bp.jsx)(cx, {
          label: pp("controller:settingsEmoteButton"),
          hint: pp("wheel" === ip.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: px.E,
          value: ip.emoteButton,
          onChange: pp => {
            (0, Pp.o)({
              emoteButton: pp
            })
          }
        }), (0, bp.jsx)(cx, {
          label: pp("controller:settingsAttackMode"),
          hint: pp("toggle" === ip.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: px.m,
          value: ip.attackMode,
          onChange: pp => {
            (0, Pp.o)({
              attackMode: pp
            })
          }
        }), (0, bp.jsx)(sS.b, {
          label: pp("controller:settingsLargePointer"),
          checked: ip.largePointer,
          onClick: pp => {
            (0, Pp.o)({
              largePointer: pp
            })
          },
          circleInfoText: pp("controller:settingsLargePointerInfo")
        })]
      })
    };
    var yx = cp(8990);
    const Ux = new class {
        constructor(pp) {
          this.router = pp, this.current = null
        }
        claim(pp, ip) {
          const cp = this.current;
          cp && (this.current = null, cp.release(), cp.onTakenOver());
          const Op = this.router.register({
              ...pp,
              name: "capture"
            }),
            op = {
              release: Op,
              onTakenOver: ip
            };
          return this.current = op, () => {
            this.current === op && (this.current = null), Op()
          }
        }
      }(Ap.d),
      wx = pp => {
        (0, Np.useEffect)((() => {
          if (!pp) return;
          const ip = pp();
          let cp = !1;
          const Op = () => {
              cp || (cp = !0, ip.onEnd())
            },
            op = Ux.claim({
              isActive: () => !cp,
              onFrame: pp => {
                ip.onFrame(pp, Op)
              }
            }, Op),
            Ip = void 0 === ip.timeoutMs ? void 0 : window.setTimeout(Op, ip.timeoutMs),
            Sp = pp => {
              "Escape" === pp.key && (pp.preventDefault(), pp.stopPropagation(), Op())
            };
          return window.addEventListener("keydown", Sp, !0), () => {
            cp = !0, op(), window.clearTimeout(Ip), window.removeEventListener("keydown", Sp, !0)
          }
        }), [pp])
      },
      vx = pp => {
        let {
          row: ip,
          capturing: cp,
          onCapture: Op,
          holdFillRef: Ip,
          onRebind: Sp,
          swapped: xp
        } = pp;
        const {
          t: Lp
        } = (0, op.H)();
        if ("fixed" === ip.kind) return (0, bp.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, bp.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, bp.jsx)("div", {
              className: "ControlName",
              children: Lp(ip.labelKey)
            }), (0, bp.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, bp.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, bp.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, bp.jsx)(Ro, {
                    glyph: "move" === ip.stick ? (0, Dp.p)() : (0, Dp.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Yp
        } = ip, Ap = (0, Dp.g)(Yp), Pp = (0, Dp.j)(Yp), Wp = Ap !== Pp && (0, Dp.c)(Yp, Pp);
        return (0, bp.jsxs)("div", {
          className: fp()("ControlRow PadControlRow", {
            Capturing: cp
          }),
          children: [(0, bp.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, bp.jsx)("div", {
              className: "ControlName",
              children: Lp(px.j[Yp])
            }), (0, bp.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!cp && (0, bp.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, bp.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Op(Yp)
                  },
                  children: (0, bp.jsx)(Ro, {
                    glyph: Ap
                  })
                }), Wp && (0, bp.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Lp("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Sp(Yp, Pp)
                  },
                  children: (0, bp.jsx)(JS.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), cp && (0, bp.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, bp.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, bp.jsx)("span", {
                    children: Lp("controller:settingsCapturePrompt")
                  }), (0, bp.jsx)("div", {
                    ref: Ip,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, bp.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Op(null)
                  },
                  children: "\xd7"
                })]
              }), cp && (0, bp.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, bp.jsx)(KS.d, {
                  text: Lp((0, Dp.c)(Yp, (0, Dp.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: KS.g
                  }),
                  glyph: (0, Dp.g)("menuBack")
                })
              })]
            })]
          }), xp.map((pp => (0, bp.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, bp.jsx)(KS.d, {
              text: Lp("controller:settingsSwapNotice", {
                action: Lp(px.j[pp]),
                button: KS.g
              }),
              glyph: (0, Dp.g)(pp)
            })
          }, pp))), cp && (0, bp.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${px.v}ms`
            }
          })]
        })
      },
      tx = [],
      Hx = pp => {
        let {
          layoutSetting: ip
        } = pp;
        const {
          t: cp
        } = (0, op.H)(), Op = (0, Pp.s)();
        (0, Wp.I)();
        const Ip = (0, Np.useRef)(null),
          [Sp, xp] = (0, Np.useState)(null),
          Lp = (0, Np.useCallback)(((pp, ip) => {
            const cp = (0, Pp.h)().bindings;
            (0, Dp.y)(pp, ip);
            const Op = (0, Dp.q)(cp, pp);
            xp(Op.length > 0 ? {
              action: pp,
              swapped: Op
            } : null)
          }), []),
          [Yp, Up] = ((pp, ip) => {
            const [cp, Op] = (0, Np.useState)(null), op = (0, Np.useMemo)((() => cp ? () => {
              const op = (0, Dp.g)("menuBack"),
                Ip = new px.c(op, (0, Dp.g)("menuConfirm"), (pp => (0, Dp.c)(cp, pp)));
              return {
                onFrame: (Op, Sp) => {
                  var xp;
                  const Lp = Op.frame.timestampMs,
                    Yp = Ip.update({
                      ...Op,
                      isDown: pp => (0, yp.D)(Op.frame.values, pp)
                    }, Lp);
                  null === (xp = pp.current) || void 0 === xp || xp.style.setProperty("width", 100 * Ip.getBindHoldProgress(Lp) + "%"), Yp && ("bind" === Yp.kind ? (Ap.d.consumeButton(Yp.button), ip(cp, Yp.button)) : Ap.d.consumeButton(op), Sp())
                },
                onEnd: () => {
                  Op(null)
                },
                timeoutMs: px.v
              }
            } : null), [cp, pp, ip]);
            return wx(op), [cp, Op]
          })(Ip, Lp),
          wp = pp => {
            pp && xp(null), Up(pp)
          };
        (0, Np.useEffect)((() => {
          if (!Sp) return;
          const pp = window.setTimeout((() => {
            xp(null)
          }), px.ob);
          return () => {
            window.clearTimeout(pp)
          }
        }), [Sp]);
        const vp = !Op.swapSticks && 0 === Object.keys(Op.bindings).length;
        return (0, bp.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, bp.jsx)("div", {
            className: "SliderText",
            children: cp("controller:settingsRemap")
          }), (0, bp.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cp("controller:settingsRemapHint")
          }), (0, bp.jsx)(NS.K, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: vp,
            onClick: () => {
              wp(null), xp(null), (0, Dp.A)()
            },
            children: cp("controller:settingsResetAll")
          }), ip, px.db.map(((pp, ip) => (0, bp.jsx)(yx.c, {
            title: cp(pp.titleKey),
            defaultOpen: 0 === ip,
            children: pp.rows.map((pp => (0, bp.jsx)(vx, {
              row: pp,
              capturing: "action" === pp.kind && pp.action === Yp,
              onCapture: wp,
              holdFillRef: Ip,
              onRebind: Lp,
              swapped: "action" === pp.kind && (null === Sp || void 0 === Sp ? void 0 : Sp.action) === pp.action ? Sp.swapped : tx
            }, "action" === pp.kind ? pp.action : pp.labelKey)))
          }, pp.titleKey)))]
        })
      },
      dx = pp => {
        let {
          deadzone: ip,
          dotRef: cp,
          labelKey: Op
        } = pp;
        const {
          t: Ip
        } = (0, op.H)();
        return (0, bp.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, bp.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, bp.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * ip + "%",
                height: 100 * ip + "%"
              }
            }), (0, bp.jsx)("div", {
              ref: cp,
              className: "ControllerTesterDot"
            })]
          }), (0, bp.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Ip(Op)
          })]
        })
      },
      ex = (pp, ip, cp, Op) => {
        var op;
        pp && (pp.style.left = 50 + 50 * Math.max(-1, Math.min(1, ip.x)) + "%", pp.style.top = 50 + 50 * Math.max(-1, Math.min(1, ip.y)) + "%", null === (op = pp.parentElement) || void 0 === op || op.classList.toggle("Active", Op || Math.hypot(ip.x, ip.y) > cp))
      },
      ux = pp => {
        const ip = {
            deadzone: pp.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          cp = {
            deadzone: pp.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return pp.swapSticks ? {
          left: cp,
          right: ip
        } : {
          left: ip,
          right: cp
        }
      },
      jx = () => {
        const {
          t: pp
        } = (0, op.H)(), ip = (() => {
          const [pp, ip] = (0, Np.useState)((() => Sp.e.getActivePad()));
          return (0, Ho.f)(Sp.c, (() => {
            ip(Sp.e.getActivePad())
          })), pp
        })(), cp = ux((0, Pp.s)()), Op = (0, Np.useRef)(null), Ip = (0, Np.useRef)(null), xp = (0, Np.useRef)([]), Lp = (0, Np.useRef)(null), Yp = (0, Np.useRef)(null), [Wp, Up] = (pp => {
          const [ip, cp] = (0, Np.useState)(!1), Op = (0, Np.useMemo)((() => ip ? () => {
            const ip = (0, Dp.g)("menuBack"),
              Op = new px.g;
            return {
              onFrame: (cp, op) => {
                var Ip;
                const Sp = Op.update({
                  pressed: cp.wasPressed(ip),
                  sx: cp.isHeld(ip)
                }, cp.frame.timestampMs);
                null === (Ip = pp.current) || void 0 === Ip || Ip.style.setProperty("width", 100 * Sp + "%"), Sp >= 1 && (Ap.d.consumeButton(ip), op())
              },
              onEnd: () => {
                cp(!1)
              }
            }
          } : null), [ip, pp]);
          return wx(Op), [ip, cp]
        })(Ip);
        (0, Np.useEffect)((() => {
          const pp = pp => {
            for (const cp of yp.Q) {
              const ip = (0, yp.i)(cp),
                Op = xp.current[ip];
              if (!Op) continue;
              const op = pp.values[ip];
              Op.classList.toggle("Pressed", op >= yp.u), (0, yp.E)(ip) && Op.style.setProperty("--trigger-fill", `${Math.round(100*op)}%`)
            }
            const ip = ux((0, Pp.h)());
            ex(Lp.current, pp.leftStick, ip.left.deadzone, pp.values[(0, yp.i)("LS")] >= yp.u), ex(Yp.current, pp.rightStick, ip.right.deadzone, pp.values[(0, yp.i)("RS")] >= yp.u)
          };
          return ip || pp((0, yp.s)()), Sp.e.onFrame(pp)
        }), [ip]), (0, Np.useEffect)((() => {
          ip || Up(!1)
        }), [ip, Up]), (0, Np.useEffect)((() => {
          var pp;
          Wp && (null === (pp = Op.current) || void 0 === pp || pp.scrollIntoView({
            block: "nearest"
          }))
        }), [Wp]);
        const wp = px._.find((pp => pp.value === (null === ip || void 0 === ip ? void 0 : ip.family)));
        return (0, bp.jsxs)("div", {
          ref: Op,
          className: fp()("SettingBox ControllerTester", {
            Testing: Wp
          }),
          children: [(0, bp.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, bp.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [ip && (0, bp.jsx)("div", {
                children: pp("controller:settingsTesterFamily", {
                  family: wp ? pp(wp.labelKey) : ip.family
                })
              }), ip && (0, bp.jsx)("div", {
                className: "ControllerTesterPadId",
                children: ip.id
              }), !ip && (0, bp.jsx)("div", {
                children: pp("controller:settingsTesterNoPad")
              })]
            }), (ip || Wp) && (0, bp.jsx)(NS.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Up(!Wp)
              },
              children: pp(Wp ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), ip && !Wp && (0, bp.jsx)("div", {
            className: "ControllerSettingsHint",
            children: pp("controller:settingsTesterHint")
          }), Wp && (0, bp.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, bp.jsx)(KS.d, {
              text: pp("controller:settingsTesterTesting", {
                button: KS.g
              }),
              glyph: (0, Dp.g)("menuBack")
            }), (0, bp.jsx)("div", {
              ref: Ip,
              className: "ControllerTesterExitFill"
            })]
          }), (0, bp.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, bp.jsx)(dx, {
              deadzone: cp.left.deadzone,
              dotRef: Lp,
              labelKey: cp.left.labelKey
            }), (0, bp.jsx)("div", {
              className: "ControllerTesterButtons",
              children: yp.Q.map((pp => {
                const cp = (0, yp.i)(pp);
                return (0, bp.jsx)("div", {
                  ref: pp => {
                    xp.current[cp] = pp
                  },
                  className: (0, yp.E)(cp) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, bp.jsx)(Ro, {
                    glyph: pp,
                    family: null === ip || void 0 === ip ? void 0 : ip.family
                  })
                }, pp)
              }))
            }), (0, bp.jsx)(dx, {
              deadzone: cp.right.deadzone,
              dotRef: Yp,
              labelKey: cp.right.labelKey
            })]
          })]
        })
      },
      kx = (0, Np.memo)((function() {
        const {
          t: pp
        } = (0, op.H)(), ip = (0, Pp.s)(), [cp, Op] = (0, Np.useState)(!1);
        return (0, Np.useEffect)((() => {
          if (!cp) return;
          const pp = window.setTimeout((() => {
            Op(!1)
          }), px.ob);
          return () => {
            window.clearTimeout(pp)
          }
        }), [cp]), (0, bp.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, bp.jsx)(ix, {
            text: pp("controller:settingsLook")
          }), (0, bp.jsx)(Ox, {
            settingKey: "lookSensitivityX",
            label: pp("controller:settingsLookSensitivityX"),
            range: px.hb,
            format: px.M
          }), (0, bp.jsx)(Ox, {
            settingKey: "lookSensitivityY",
            label: pp("controller:settingsLookSensitivityY"),
            range: px.hb,
            format: px.M
          }), (0, bp.jsx)(Ox, {
            settingKey: "aimLookSensitivity",
            label: pp("controller:settingsAimLookSensitivity"),
            range: px.k,
            format: px.M
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsLookCurve"),
            hint: pp("controller:settingsLookCurveHint"),
            options: px.Y,
            value: ip.lookCurve,
            onChange: pp => {
              (0, Pp.o)({
                lookCurve: pp
              })
            }
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsInvertLookX"),
            checked: ip.invertLookX,
            onClick: pp => {
              (0, Pp.o)({
                invertLookX: pp
              })
            }
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsInvertLookY"),
            checked: ip.invertLookY,
            onClick: pp => {
              (0, Pp.o)({
                invertLookY: pp
              })
            }
          }), (0, bp.jsx)(Ox, {
            settingKey: "lookDeadzone",
            label: pp("controller:settingsLookDeadzone"),
            range: px.A,
            format: px.I
          }), (0, bp.jsx)(Ax, {}), (0, bp.jsx)(ix, {
            text: pp("controller:settingsMovement")
          }), (0, bp.jsx)(Ox, {
            settingKey: "moveDeadzone",
            label: pp("controller:settingsMoveDeadzone"),
            range: px.A,
            format: px.I
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsAutoSprint"),
            checked: ip.autoSprint,
            onClick: pp => {
              (0, Pp.o)({
                autoSprint: pp
              })
            },
            circleInfoText: pp("controller:settingsAutoSprintInfo")
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsSneak"),
            options: px.kb,
            value: ip.sneakMode,
            onChange: pp => {
              (0, Pp.o)({
                sneakMode: pp
              })
            }
          }), (0, bp.jsx)(ix, {
            text: pp("controller:settingsButtons")
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsPromptFamily"),
            options: px._,
            value: ip.promptFamily,
            onChange: pp => {
              (0, Pp.o)({
                promptFamily: pp
              })
            }
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsHideButtonHints"),
            checked: ip.hideButtonHints,
            onClick: pp => {
              (0, Pp.o)({
                hideButtonHints: pp
              })
            }
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsVibration"),
            checked: ip.vibration,
            onClick: pp => {
              (0, Pp.o)({
                vibration: pp
              }), pp && Lo("preview")
            }
          }), (0, bp.jsx)(Ox, {
            settingKey: "cursorSpeed",
            label: pp("controller:settingsCursorSpeed"),
            range: px.z,
            format: px.M
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsCursorMagnetism"),
            checked: ip.cursorMagnetism,
            onClick: pp => {
              (0, Pp.o)({
                cursorMagnetism: pp
              })
            }
          }), (0, bp.jsx)(sS.b, {
            label: pp("controller:settingsMenuBackToCategories"),
            checked: ip.menuBackToCategories,
            onClick: pp => {
              (0, Pp.o)({
                menuBackToCategories: pp
              })
            }
          }), (0, bp.jsx)(Hx, {
            layoutSetting: (0, bp.jsxs)(bp.Fragment, {
              children: [Dp.e.map((cp => (0, bp.jsx)(sS.b, {
                label: pp(px.V[cp]),
                checked: (0, Dp.v)(cp, ip),
                onClick: pp => {
                  Op(!(0, Dp.H)(cp, pp))
                }
              }, cp))), cp && (0, bp.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: pp("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, bp.jsx)(Wx, {}), (0, bp.jsx)(ix, {
            text: pp("controller:settingsAlternatives")
          }), (0, bp.jsx)("div", {
            className: "ControllerSettingsHint",
            children: pp("controller:settingsAlternativesHint")
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsMenuNavigation"),
            hint: pp("controller:settingsMenuNavigationHint"),
            options: px.Z,
            value: ip.menuNavigation,
            onChange: pp => {
              (0, Pp.o)({
                menuNavigation: pp
              })
            }
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsInventoryNavigation"),
            hint: pp("controller:settingsInventoryNavigationHint"),
            options: px.R,
            value: ip.inventoryNavigation,
            onChange: pp => {
              (0, Pp.o)({
                inventoryNavigation: pp
              })
            }
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsQuickChat"),
            hint: pp("controller:settingsQuickChatHint"),
            options: px.$,
            value: ip.quickChat,
            onChange: pp => {
              (0, Pp.o)({
                quickChat: pp
              })
            }
          }), (0, bp.jsx)(cx, {
            label: pp("controller:settingsLeaderboardButton"),
            hint: pp("controller:settingsLeaderboardButtonHint"),
            options: px.W,
            value: ip.leaderboardButton,
            onChange: pp => {
              (0, Pp.o)({
                leaderboardButton: pp
              })
            }
          }), (0, bp.jsx)(ix, {
            text: pp("controller:settingsTester")
          }), (0, bp.jsx)(jx, {})]
        })
      }));
    (0, op.d)(Op);
    for (const Cx of (0, Ip.q)()) Cx.connected ? Sp.e.handleConnectionEvent(Cx) : Sp.e.handleDisconnectionEvent(Cx);
    const mx = () => null !== Sp.e.getActivePad(),
      Rx = () => xc.getState(),
      qx = () => xc.isSteppingSlots(),
      Mx = (pp, ip) => {
        const cp = co.getFocused();
        co.isActive() && cp && pp.contains(cp) && co.setFocus(ip, {
          scroll: !1
        })
      }
  },
  8307: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      g: () => Yp
    });
    var Op = cp(1454),
      op = cp(1447);
    const Ip = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Sp = "28de",
      xp = new Set(["1205"]),
      Lp = (pp, ip) => {
        const cp = (0, Op.d)(pp);
        if ((null === cp || void 0 === cp ? void 0 : cp.vendor) === Sp) return xp.has(cp.product) ? "steamdeck" : "xbox";
        if (cp && Ip[cp.vendor]) return Ip[cp.vendor];
        if ((0, op.b)(pp)) return "nintendo";
        const Lp = `${pp} ${null!==ip&&void 0!==ip?ip:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Lp) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Lp) ? "nintendo" : /steam deck/.test(Lp) ? "steamdeck" : "xbox"
      },
      Yp = pp => {
        var ip;
        return (null === (ip = (0, Op.d)(pp)) || void 0 === ip ? void 0 : ip.vendor) === Sp
      }
  },
  8336: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      f: () => xp
    });
    var Op = cp(8298);
    const op = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Ip = new Set(["capture", "gameplay"]),
      Sp = ["Up", "Down", "Left", "Right"],
      xp = pp => Sp.includes(pp),
      Lp = .25;
    const Yp = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.sx = new Array(Op.N).fill(!1), this.previousHeld = new Array(Op.N).fill(!1), this.consumedButtons = new Array(Op.N).fill(!1), this.suppressedReleases = new Array(Op.N).fill(!1), this.wakeOwned = new Array(Op.N).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Op.s)()
      }
      register(pp) {
        return this.consumers.has(pp.name) && console.warn(`Controller consumer "${pp.name}" registered twice; the newer one replaces it.`), this.consumers.set(pp.name, pp), () => {
          var ip;
          this.consumers.get(pp.name) === pp && (this.activeName === pp.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (ip = this.peek) || void 0 === ip ? void 0 : ip.over) === pp.name && (this.peek = null), this.consumers.delete(pp.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(pp) {
        return this.sx[(0, Op.i)(pp)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.sx = new Array(Op.N).fill(!1), this.previousHeld = new Array(Op.N).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Op.s)()
      }
      dispatch(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = pp, this.previousHeld = this.sx, this.sx = (0, Op.m)(pp.values, this.previousHeld);
        for (let Ip = 0; Ip < Op.N; Ip++) this.suppressedReleases[Ip] = !this.sx[Ip] && this.consumedButtons[Ip], this.sx[Ip] || (this.consumedButtons[Ip] = !1), this.wakeOwned[Ip] && (this.sx[Ip] ? (this.consumedButtons[Ip] = !0, this.wakeOwned[Ip] = !1) : pp.values[Ip] < Op.K && (this.wakeOwned[Ip] = !1));
        Math.hypot(pp.leftStick.x, pp.leftStick.y) < Lp && (this.leftStickConsumed = !1), Math.hypot(pp.rightStick.x, pp.rightStick.y) < Lp && (this.rightStickConsumed = !1);
        const op = this.pickActive();
        if ((null === op || void 0 === op ? void 0 : op.name) !== this.activeName) {
          var Sp, xp, Yp, Dp, Ap, Pp;
          const pp = this.activeName,
            ip = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            cp = null !== (Sp = null === op || void 0 === op || null === (xp = op.peek) || void 0 === xp ? void 0 : xp.call(op)) && void 0 !== Sp ? Sp : null,
            Ip = null === pp && !!cp && !(null === (Yp = this.consumers.get(cp.over)) || void 0 === Yp || !Yp.onPeekFrame),
            Lp = cp && (cp.over === pp || Ip) ? cp : null,
            Wp = null !== this.peek && this.peek.over === (null === op || void 0 === op ? void 0 : op.name) ? this.peek : null;
          this.deactivateCurrent(null !== Lp, null !== Wp), this.activeName = null !== (Dp = null === op || void 0 === op ? void 0 : op.name) && void 0 !== Dp ? Dp : null, null === pp || this.handOffPending || this.consumeAllHeld();
          const yp = null === (Ap = null !== Lp && void 0 !== Lp ? Lp : Wp) || void 0 === Ap ? void 0 : Ap.stick;
          "left" === yp && ip.left ? this.leftStickConsumed = !1 : "right" === yp && ip.right && (this.rightStickConsumed = !1), this.peek = Lp, op || null === pp ? op && (null === (Pp = this.idleResume) || void 0 === Pp ? void 0 : Pp.name) === op.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: pp,
            left: ip.left && this.leftStickConsumed,
            right: ip.right && this.rightStickConsumed
          }, op && (this.idleResume = null);
          for (let op = 0; op < Op.N; op++) this.previousHeld[op] && !this.sx[op] && (this.suppressedReleases[op] = !0)
        }
        var Wp, yp;
        (this.handOffPending = !1, op) && (cp && !Ip.has(op.name) && this.consumeWakePress(op), op.onFrame(this.buildInput(pp, ip, cp)), this.peek && (null === (Wp = this.consumers.get(this.peek.over)) || void 0 === Wp || null === (yp = Wp.onPeekFrame) || void 0 === yp || yp.call(Wp, this.buildInput(pp, ip, !1, this.peek.stick))))
      }
      consumeWakePress(pp) {
        for (let op = 0; op < Op.N; op++) {
          var ip, cp;
          const Ip = Op.Q[op];
          (null !== (ip = null === (cp = pp.wakePressActs) || void 0 === cp ? void 0 : cp.call(pp, Ip)) && void 0 !== ip ? ip : Sp.includes(Ip)) || (this.sx[op] ? this.consumedButtons[op] = !0 : this.lastFrame.values[op] >= Op.I && (this.wakeOwned[op] = !0))
        }
      }
      pickActive() {
        for (const pp of op) {
          const ip = this.consumers.get(pp);
          if (ip && ip.isActive()) return ip
        }
        return null
      }
      deactivateCurrent() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var cp, Op, op, Ip;
        this.activeName && (null === (cp = this.consumers.get(this.activeName)) || void 0 === cp || null === (Op = cp.onDeactivate) || void 0 === Op || Op.call(cp, pp));
        this.peek && !ip && (null === (op = this.consumers.get(this.peek.over)) || void 0 === op || null === (Ip = op.onDeactivate) || void 0 === Ip || Ip.call(op, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let op = 0; op < Op.N; op++) this.sx[op] && (this.consumedButtons[op] = !0);
        const {
          leftStick: ip,
          rightStick: cp
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== pp && (this.leftStickConsumed || Math.hypot(ip.x, ip.y) >= Lp), this.rightStickConsumed = "right" !== pp && (this.rightStickConsumed || Math.hypot(cp.x, cp.y) >= Lp)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(pp) {
        const ip = (0, Op.i)(pp);
        this.sx[ip] && (this.consumedButtons[ip] = !0)
      }
      buildInput(pp, ip, cp, op) {
        const Ip = this.sx,
          Sp = this.previousHeld,
          xp = op ? new Array(Op.N).fill(!0) : [...this.consumedButtons],
          Lp = op ? xp : [...this.suppressedReleases],
          Yp = !this.leftStickConsumed && (!op || "left" === op),
          Dp = !this.rightStickConsumed && (!op || "right" === op);
        return {
          frame: pp,
          dtMs: ip,
          isHeld: pp => {
            const ip = (0, Op.i)(pp);
            return Ip[ip] && !xp[ip]
          },
          wasPressed: pp => {
            const ip = (0, Op.i)(pp);
            return Ip[ip] && !Sp[ip] && !xp[ip]
          },
          wasReleased: pp => {
            const ip = (0, Op.i)(pp);
            return !Ip[ip] && Sp[ip] && !Lp[ip]
          },
          value: ip => {
            const cp = (0, Op.i)(ip);
            return xp[cp] ? 0 : pp.values[cp]
          },
          leftStick: Yp ? pp.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Dp ? pp.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: cp
        }
      }
    }
  },
  8320: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap.e,
      g: () => Ap.i,
      h: () => Mp,
      k: () => Cp,
      o: () => Ep,
      s: () => Xp
    });
    var Op = cp(62),
      op = cp(34),
      Ip = cp(1476),
      Sp = cp(44),
      xp = cp(8327),
      Lp = cp(8298),
      Yp = cp(8318),
      Dp = cp(8290),
      Ap = cp(2048),
      Pp = cp(8331);
    const Wp = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        bindings: {}
      },
      yp = "controllerSettings",
      Up = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      wp = ["auto", ...xp.e],
      vp = (pp, ip) => "string" === typeof ip && pp.includes(ip),
      tp = pp => ip => "number" === typeof ip && Number.isFinite(ip) ? (0, Pp.w)(ip, pp) : void 0,
      Hp = pp => "boolean" === typeof pp ? pp : void 0,
      dp = pp => ip => vp(pp, ip) ? ip : void 0,
      ep = {
        lookSensitivityX: tp(Pp.hb),
        lookSensitivityY: tp(Pp.hb),
        aimLookSensitivity: tp(Pp.k),
        invertLookX: Hp,
        invertLookY: Hp,
        lookCurve: dp(Lp.F),
        lookDeadzone: tp(Pp.A),
        moveDeadzone: tp(Pp.A),
        swapSticks: Hp,
        autoSprint: Hp,
        sneakMode: dp(["toggle", "hold"]),
        tapHoldTime: dp(["short", "medium", "long"]),
        attackMode: dp(["hold", "toggle"]),
        promptFamily: dp(wp),
        hideButtonHints: Hp,
        vibration: Hp,
        cursorSpeed: tp(Pp.z),
        cursorMagnetism: Hp,
        buttonRepeat: dp(Lp.l),
        largePointer: Hp,
        menuBackToCategories: Hp,
        swapConfirmBack: Hp,
        menuNavigation: dp(["hybrid", "focus", "cursor"]),
        inventoryNavigation: dp(["hybrid", "slot", "cursor"]),
        quickChat: dp(["wheel", "off"]),
        leaderboardButton: dp(["shop", "leaderboard"]),
        gyroAiming: Hp,
        gyroSensitivity: tp(Pp.P),
        gyroActivation: dp(["always", "aiming", "button"]),
        gyroButton: dp(Lp.Q),
        emoteButton: dp(["tapHold", "wheel"])
      },
      jp = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      kp = pp => {
        const ip = {};
        if ("object" !== typeof pp || null === pp) return ip;
        for (const [cp, Op] of Object.entries(pp)) Object.prototype.hasOwnProperty.call(Yp.h, cp) && vp(Lp.Q, Op) && (ip[cp] = Op);
        return ip
      },
      mp = pp => {
        const ip = {};
        for (const cp of Object.keys(Wp))("bindings" === cp ? Object.keys(pp.bindings).length > 0 : pp[cp] !== Wp[cp]) && (ip[cp] = pp[cp]);
        0 !== Object.keys(ip).length ? Sp.h.setItem(yp, ip) : Sp.h.removeItem(yp)
      };
    let Rp = (() => {
        const pp = Sp.h.getItem(yp),
          ip = (pp => {
            const ip = "object" === typeof pp && null !== pp ? pp : {},
              cp = {
                ...Wp,
                bindings: kp(ip.bindings)
              };
            for (const op of Object.keys(ep)) {
              const pp = ep[op](ip[op]);
              void 0 !== pp && (cp[op] = pp)
            }
            const Op = Object.keys(ip).filter((pp => !!Object.prototype.hasOwnProperty.call(Wp, pp) && ("bindings" === pp ? "object" !== typeof ip.bindings || null === ip.bindings || Object.keys(ip.bindings).length !== Object.keys(cp.bindings).length : cp[pp] !== ip[pp])));
            return Op.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Op.join(", ")}`), cp
          })(pp);
        return null !== pp && void 0 !== pp && mp(ip), ip
      })(),
      qp = {
        ...Rp,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const pp = {},
            ip = new URLSearchParams(window.location.search);
          for (const {
              param: cp,
              key: Op
            }
            of jp) {
            const op = ep[Op](ip.get(cp));
            void 0 !== op && (pp[Op] = op)
          }
          return pp
        })()
      };
    const Mp = () => qp,
      Cp = () => {
        var pp, ip;
        const cp = Mp().promptFamily;
        return "auto" !== cp ? cp : null !== (pp = null === (ip = Dp.e.getActivePad()) || void 0 === ip ? void 0 : ip.family) && void 0 !== pp ? pp : "xbox"
      },
      Ep = pp => {
        const ip = qp;
        Rp = {
          ...Rp,
          ...pp
        }, mp(Rp), qp = {
          ...qp,
          ...pp
        }, (pp => {
          op.m.GA(Ap.i, qp), Up.some((ip => pp[ip] !== qp[ip])) && op.m.GA(Ap.e, qp)
        })(ip)
      },
      Xp = () => {
        const [pp, ip] = (0, Op.useState)(qp);
        return (0, Ip.f)(Ap.i, ip), pp
      }
  },
  8785: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    const Op = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      op = pp => Op.has(pp)
  },
  8290: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Up.b,
      e: () => Hp
    });
    var Op = cp(8298),
      op = cp(8307);
    const Ip = .1,
      Sp = .3;
    class xp {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(pp, ip) {
        const cp = null === this.lastMs ? 0 : Math.min(Math.max(0, ip - this.lastMs), 100);
        this.lastMs = ip;
        const Op = Math.hypot(pp.x, pp.y);
        if (Op >= Sp) return this.anchor = null, void(this.returning = !0);
        Op >= Ip || (this.returning = !1);
        const op = this.anchor;
        if (!op || Math.hypot(pp.x - op.x, pp.y - op.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: pp.x,
          y: pp.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += cp, this.steadyMs < 1e3) return;
        const xp = Math.max(Op, Math.hypot(op.x, op.y));
        xp < Ip ? this.deadzone = 0 : this.returning && (this.deadzone = xp + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(pp) {
        return Math.hypot(pp.x, pp.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : pp
      }
    }
    const Lp = (pp, ip) => {
        var cp, Op;
        return null !== (cp = pp && (null === (Op = Object.getOwnPropertyDescriptor(pp, ip)) || void 0 === Op ? void 0 : Op.get)) && void 0 !== cp ? cp : null
      },
      Yp = pp => {
        const ip = pp.vendorName;
        return "string" === typeof ip ? ip : void 0
      },
      Dp = ((pp, ip) => {
        const cp = Lp(pp, "index"),
          Op = Lp(pp, "id"),
          op = Lp(pp, "connected"),
          Ip = Lp(pp, "mapping"),
          Sp = Lp(pp, "buttons"),
          xp = Lp(pp, "axes"),
          Dp = Lp(ip, "pressed"),
          Ap = Lp(ip, "value");
        return cp && Op && op && Ip && Sp && xp && Dp && Ap ? pp => {
          const ip = Sp.call(pp),
            Lp = xp.call(pp),
            Pp = {
              index: Number(cp.call(pp)),
              id: String(Op.call(pp)),
              connected: !0 === op.call(pp),
              mapping: String(Ip.call(pp)),
              buttons: [],
              axes: [],
              vendorName: Yp(pp)
            };
          for (let cp = 0; cp < ip.length; cp++) Pp.buttons.push({
            pressed: !0 === Dp.call(ip[cp]),
            value: Number(Ap.call(ip[cp]))
          });
          for (let cp = 0; cp < Lp.length; cp++) Pp.axes.push(Number(Lp[cp]));
          return Pp
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Ap = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Pp = cp(1441),
      Wp = cp(1447);
    const yp = pp => ({
      pressed: pp,
      value: pp ? 1 : 0
    });
    var Up = cp(2048);
    const wp = Sp,
      vp = pp => {
        const ip = new Array(Op.N).fill(0);
        for (let cp = 0; cp < Op.N && cp < pp.buttons.length; cp++) {
          const op = pp.buttons[cp];
          ip[cp] = op.pressed && !(0, Op.E)(cp) ? Math.max(op.value, Op.u) : op.value
        }
        return ip
      },
      tp = (pp, ip) => {
        var cp, Op;
        return {
          x: null !== (cp = pp.axes[ip]) && void 0 !== cp ? cp : 0,
          y: null !== (Op = pp.axes[ip + 1]) && void 0 !== Op ? Op : 0
        }
      };
    const Hp = new class {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dp;
        this.readGamepads = pp, this.requireTrustedPads = ip, this.nativeReader = cp, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = pp => {
          pp.isTrusted && this.trustedIndices.add(pp.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = pp => {
          this.trustedIndices.delete(pp.gamepad.index)
        }, this.LP = pp => {
          if (this.rafId = 0, !this.running) return;
          const ip = 0 === this.lastTimestampMs ? 16 : Math.min(100, pp - this.lastTimestampMs);
          this.lastTimestampMs = pp;
          try {
            this.poll(pp, ip)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.LP))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(pp) {
        return this.frameListeners.add(pp), () => {
          this.frameListeners.delete(pp)
        }
      }
      onActivePadChanged(pp) {
        return this.connectionListeners.add(pp), () => {
          this.connectionListeners.delete(pp)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(pp) {
        return this.connectedListeners.add(pp), () => {
          this.connectedListeners.delete(pp)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const pp = this.readPads()[this.activeInfo.index],
          ip = pp ? this.readPad(pp) : null;
        return ip && ip.id === this.activeInfo.id ? pp : null
      }
      poll(pp, ip) {
        var cp, op;
        const Ip = this.readPads();
        let Sp = null,
          Lp = !1;
        const Yp = [],
          Dp = Math.max(Ip.length, this.slots.length);
        for (let Hp = 0; Hp < Dp; Hp++) {
          var Ap;
          const ip = Hp < Ip.length ? Ip[Hp] : null,
            cp = ip ? this.readPad(ip) : null;
          if (!cp || !cp.connected || !this.isUsable(cp)) {
            this.slots[Hp] = null;
            continue
          }
          let op = this.slots[Hp];
          op && op.id === cp.id || (op = {
            id: cp.id,
            sx: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new xp,
            rightRest: new xp
          }, this.slots[Hp] = op);
          const Dp = tp(cp, 0),
            Pp = tp(cp, 2);
          !op.leftSettled && Math.hypot(Dp.x, Dp.y) < wp && (op.leftSettled = !0), !op.rightSettled && Math.hypot(Pp.x, Pp.y) < wp && (op.rightSettled = !0), op.leftRest.observe(Dp, pp), op.rightRest.observe(Pp, pp);
          const Wp = vp(cp),
            yp = (0, Op.m)(Wp, op.sx),
            Up = op.sx,
            dp = yp.map(((pp, ip) => pp && !Up[ip]));
          op.sx = yp;
          const ep = {
            pad: cp,
            slot: op,
            values: Wp
          };
          Hp === (null === (Ap = this.activeInfo) || void 0 === Ap ? void 0 : Ap.index) && cp.id === this.activeInfo.id ? (Sp = ep, Lp = dp.includes(!0)) : dp.includes(!0) && Yp.push({
            polled: ep,
            rose: dp
          })
        }
        const Pp = this.slots.some((pp => null !== pp));
        if (Pp !== this.anyPadConnected) {
          this.anyPadConnected = Pp;
          for (const pp of this.connectedListeners) pp()
        }
        const Wp = null !== (cp = null === (op = Sp) || void 0 === op ? void 0 : op.slot.sx) && void 0 !== cp ? cp : [],
          yp = Lp ? void 0 : Yp.find((pp => {
            let {
              rose: ip
            } = pp;
            return ip.some(((pp, ip) => pp && !Wp[ip]))
          }));
        if (yp ? (Sp = yp.polled, this.setActive(yp.polled.pad)) : this.activeInfo && !Sp && this.setActive(null), !Sp || !this.activeInfo) return;
        const Up = ((pp, ip) => {
          let {
            pad: cp,
            slot: op,
            values: Ip
          } = pp;
          const Sp = (0, Op.s)(ip);
          return Sp.values = Ip, op.leftSettled && (Sp.leftStick = op.leftRest.apply(tp(cp, 0))), op.rightSettled && (Sp.rightStick = op.rightRest.apply(tp(cp, 2))), Sp
        })(Sp, pp);
        for (const Op of this.frameListeners) Op(Up, ip, this.activeInfo)
      }
      readPad(pp) {
        const ip = this.readSnapshot(pp);
        return ip && (0, Wp.e)(ip) ? (pp => {
          const ip = ip => {
              var cp;
              return null !== (cp = pp.buttons[ip]) && void 0 !== cp ? cp : yp(!1)
            },
            cp = ip => {
              var cp;
              return null !== (cp = pp.axes[ip]) && void 0 !== cp ? cp : 0
            },
            Op = pp.axes.length > 9,
            op = Op ? (pp => {
              const ip = 0 !== pp;
              return {
                up: ip && (pp >= -1 && pp < -.7 || pp >= .95 && pp <= 1),
                right: ip && pp >= -.75 && pp < -.1,
                down: ip && pp >= -.2 && pp < .45,
                left: ip && pp >= .4 && pp <= 1
              }
            })(cp(9)) : {
              up: cp(5) < -.5,
              down: cp(5) > .5,
              left: cp(4) < -.5,
              right: cp(4) > .5
            };
          return {
            ...pp,
            mapping: "standard",
            buttons: [ip(1), ip(2), ip(0), ip(3), ip(4), ip(5), ip(6), ip(7), ip(8), ip(9), ip(10), ip(11), yp(op.up), yp(op.down), yp(op.left), yp(op.right), ip(12)],
            axes: [cp(0), cp(1), cp(2), cp(Op ? 5 : 3)]
          }
        })(ip) : ip
      }
      readSnapshot(pp) {
        if (this.nativeReader) try {
          return this.nativeReader(pp)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (pp => {
          const ip = pp;
          return {
            index: ip.index,
            id: ip.id,
            connected: ip.connected,
            mapping: ip.mapping,
            buttons: Array.from(ip.buttons, (pp => ({
              pressed: pp.pressed,
              value: pp.value
            }))),
            axes: Array.from(ip.axes),
            vendorName: Yp(pp)
          }
        })(pp)
      }
      isUsable(pp) {
        return !(0, Pp.f)(pp.id) && ("standard" !== pp.mapping ? (this.warnedNonStandardIds.has(pp.id) || (this.warnedNonStandardIds.add(pp.id), console.warn(`Controller "${pp.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(pp.index))
      }
      setActive(pp) {
        this.activeInfo = pp ? {
          index: pp.index,
          id: pp.id,
          family: (0, op.c)(pp.id, pp.vendorName)
        } : null;
        for (const ip of this.connectionListeners) ip(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (pp) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", pp)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.LP))
      }
    }((() => Ap ? Ap.call(navigator) : []), !0);
    Hp.listenForConnections()
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
  8801: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    const Op = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
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
  8887: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      f: () => xp
    });
    var Op = cp(34),
      op = cp(8883);
    let Ip = !1;
    const Sp = () => Ip,
      xp = pp => {
        pp !== Ip && (Ip = pp, Op.m.GA(op.i, Ip))
      }
  },
  8885: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      h: () => Lp
    });
    var Op = cp(34),
      op = cp(8883);
    let Ip = null,
      Sp = 0;
    const xp = () => Ip,
      Lp = pp => {
        null === pp && null === Ip || (Ip = null === pp ? null : {
          id: ++Sp,
          holdMs: pp
        }, Op.m.GA(op.k, Ip))
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
  8890: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => xp
    });
    var Op = cp(34),
      op = cp(8883);
    let Ip = !1;
    const Sp = () => Ip,
      xp = pp => {
        pp !== Ip && (Ip = pp, Op.m.GA(op.m, Ip))
      }
  },
  8952: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => xp
    });
    var Op = cp(34),
      op = cp(8883);
    let Ip = !1;
    const Sp = () => Ip,
      xp = pp => {
        pp !== Ip && (Ip = pp, Op.m.GA(op.p, Ip))
      }
  },
  8839: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      constructor() {
        this.downAtMs = null
      }
      update(pp, ip, cp, Op) {
        if (pp) return this.downAtMs = cp, null;
        if (null === this.downAtMs) return null;
        const op = cp - this.downAtMs >= Op;
        return ip ? op ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, op ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8348: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap,
      g: () => Pp,
      h: () => xp,
      k: () => Hp,
      o: () => tp
    });
    var Op = cp(44),
      op = cp(8327),
      Ip = cp(8298);
    const Sp = (() => {
        try {
          return cp(8356)
        } catch {
          return null
        }
      })(),
      xp = [...Ip.Q, "LeftStick", "RightStick"],
      Lp = new Map,
      Yp = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Dp = (new Set(Object.values(Yp)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      Ap = (pp, ip) => {
        var cp, Op;
        return null !== (cp = null === (Op = Dp[Yp[pp]]) || void 0 === Op ? void 0 : Op[ip]) && void 0 !== cp ? cp : 1
      },
      Pp = (pp, ip) => {
        const cp = `./${Yp[pp]}/${ip}.svg`;
        let Op = Lp.get(cp);
        return void 0 === Op && (Op = Sp ? Sp(cp) : "", Lp.set(cp, Op)), Op
      },
      Wp = new Set,
      yp = [],
      Up = pp => {
        if (!Wp.has(pp)) {
          Wp.add(pp);
          for (const ip of xp) {
            const cp = Pp(pp, ip);
            if (cp) {
              const pp = new Image;
              pp.crossOrigin = "anonymous", pp.src = cp, yp.push(pp)
            }
          }
        }
      },
      wp = "controllerGlyphFamily";
    let vp = null;
    const tp = pp => {
        pp !== vp && (vp = pp, Op.h.setItem(wp, pp), Up(pp))
      },
      Hp = () => {
        const pp = Op.h.getItem(wp);
        (0, op.f)(pp) && pp !== vp && (vp = pp, Up(pp))
      }
  },
  8979: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => fp,
      i: () => bp
    });
    var Op = cp(62),
      op = cp(34),
      Ip = cp(1476),
      Sp = cp(8310),
      xp = cp(8290),
      Lp = cp(8336),
      Yp = cp(8320);
    const Dp = {
        x: 0,
        y: 0,
        z: 0
      },
      Ap = Math.PI / 180,
      Pp = pp => Math.hypot(pp.x, pp.y, pp.z),
      Wp = (pp, ip) => ({
        x: pp.x * ip,
        y: pp.y * ip,
        z: pp.z * ip
      }),
      yp = (pp, ip) => ({
        x: pp.x + ip.x,
        y: pp.y + ip.y,
        z: pp.z + ip.z
      }),
      Up = (pp, ip) => ({
        x: pp.x - ip.x,
        y: pp.y - ip.y,
        z: pp.z - ip.z
      }),
      wp = pp => {
        const ip = Pp(pp);
        return 0 === ip ? Dp : Wp(pp, 1 / ip)
      },
      vp = pp => ({
        min: {
          ...pp
        },
        max: {
          ...pp
        }
      }),
      tp = (pp, ip) => ({
        min: {
          x: Math.min(pp.min.x, ip.x),
          y: Math.min(pp.min.y, ip.y),
          z: Math.min(pp.min.z, ip.z)
        },
        max: {
          x: Math.max(pp.max.x, ip.x),
          y: Math.max(pp.max.y, ip.y),
          z: Math.max(pp.max.z, ip.z)
        }
      }),
      Hp = (pp, ip) => pp.max.x - pp.min.x <= ip && pp.max.y - pp.min.y <= ip && pp.max.z - pp.min.z <= ip;
    class dp {
      constructor() {
        this.bias = Dp, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Dp, this.windowSec = 0
      }
      update(pp) {
        const ip = this.gyroRange ? tp(this.gyroRange, pp.gyro) : vp(pp.gyro),
          cp = pp.accel ? this.accelRange ? tp(this.accelRange, pp.accel) : vp(pp.accel) : null;
        if (!Hp(ip, 1) || cp && !Hp(cp, .01)) return void this.restartWindow(pp);
        if (this.gyroRange = ip, this.accelRange = cp, this.sum = yp(this.sum, Wp(pp.gyro, pp.dtSec)), this.windowSec += pp.dtSec, this.windowSec < 1) return;
        const Op = Wp(this.sum, 1 / this.windowSec);
        if (Pp(Op) > 5) return;
        const op = Up(Op, this.bias);
        let Ip = 0;
        !this.calibrated || this.windowSec >= 3 ? Ip = 1 : Pp(op) <= 1 && (Ip = Math.min(1, pp.dtSec / 1)), this.bias = yp(this.bias, Wp(op, Ip)), this.calibrated = this.calibrated || Ip > 0
      }
      correct(pp) {
        return Up(pp, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Dp, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Dp, this.windowSec = 0
      }
      restartWindow(pp) {
        this.gyroRange = vp(pp.gyro), this.accelRange = pp.accel ? vp(pp.accel) : null, this.sum = Dp, this.windowSec = 0
      }
    }
    class ep {
      constructor() {
        this.down = null
      }
      update(pp, ip, cp) {
        const Op = wp(Wp(ip, -1));
        if (!this.down) return this.down = Op, Op;
        const op = Wp(pp, Ap * cp),
          Ip = this.down,
          Sp = {
            x: Ip.x - (op.y * Ip.z - op.z * Ip.y),
            y: Ip.y - (op.z * Ip.x - op.x * Ip.z),
            z: Ip.z - (op.x * Ip.y - op.y * Ip.x)
          },
          xp = 0 === Pp(Op) ? 0 : Math.min(1, cp / .25);
        var Lp, Yp;
        return this.down = wp((Yp = xp, yp(Lp = Sp, Wp(Up(Op, Lp), Yp)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class jp {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(pp, ip, cp) {
        const Op = Math.hypot(pp, ip),
          op = Math.max(0, Math.min(1, (Op - 2) / 2)),
          Ip = {
            yaw: pp * (1 - op),
            pitch: ip * (1 - op),
            dtSec: cp
          };
        for (this.entries.push(Ip), this.windowSec += cp; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Sp = 0,
          xp = 0;
        for (const Yp of this.entries) Sp += Yp.yaw * Yp.dtSec, xp += Yp.pitch * Yp.dtSec;
        const Lp = this.windowSec > 0 ? {
          yaw: Sp / this.windowSec,
          pitch: xp / this.windowSec
        } : {
          yaw: Ip.yaw,
          pitch: Ip.pitch
        };
        return {
          yaw: pp * op + Lp.yaw,
          pitch: ip * op + Lp.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class kp {
      constructor() {
        this.calibrator = new dp, this.gravity = new ep, this.smoother = new jp
      }
      process(pp, ip, cp) {
        const Op = Math.max(0, Math.min(.05, ip));
        this.calibrator.update({
          ...pp,
          dtSec: Op
        });
        const op = this.calibrator.correct(pp.gyro);
        let Ip = op.y;
        "player" === cp && pp.accel && (Ip = ((pp, ip) => {
          const cp = pp.y * ip.y + pp.z * ip.z;
          return -Math.sign(cp) * Math.min(1.41 * Math.abs(cp), Math.hypot(pp.y, pp.z))
        })(op, this.gravity.update(op, pp.accel, Op)));
        const Sp = this.smoother.apply(Ip, op.x, Op),
          xp = ((pp, ip) => {
            const cp = Math.hypot(pp, ip);
            if (cp >= 1) return {
              yaw: pp,
              pitch: ip
            };
            const Op = cp / 1;
            return {
              yaw: pp * Op,
              pitch: ip * Op
            }
          })(Sp.yaw, Sp.pitch);
        return {
          yawDeg: xp.yaw * Op,
          pitchDeg: xp.pitch * Op
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const mp = (pp, ip) => {
      var cp, Op, op;
      const Ip = ip * Ap,
        Sp = null !== (cp = pp.beta) && void 0 !== cp ? cp : 0,
        xp = null !== (Op = pp.gamma) && void 0 !== Op ? Op : 0;
      return {
        x: Sp * Math.cos(Ip) - xp * Math.sin(Ip),
        y: Sp * Math.sin(Ip) + xp * Math.cos(Ip),
        z: null !== (op = pp.alpha) && void 0 !== op ? op : 0
      }
    };
    var Rp = cp(8988);
    class qp {
      constructor(pp, ip, cp) {
        this.hid = pp, this.sink = ip, this.onControllersChanged = cp, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = pp => {
          this.openController(pp.device).catch((pp => {
            console.warn("Could not open motion controller", pp)
          }))
        }, this.onDisconnect = pp => {
          this.opening.has(pp.device) && this.disconnectedWhileOpening.add(pp.device);
          const ip = this.controllers.get(pp.device);
          ip && (this.forget(ip), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const pp = await this.hid.getDevices();
        for (const ip of pp) await this.openController(ip).catch((pp => {
          console.warn("Could not open motion controller", pp)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const pp of [...this.controllers.values()]) this.forget(pp);
        this.onControllersChanged()
      }
      async request() {
        const pp = await this.hid.requestDevice({
          filters: Rp.i
        });
        let ip = 0;
        for (const cp of pp) await this.openController(cp).catch((pp => {
          console.warn("Could not open motion controller", pp), ip++
        }));
        return ip
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((pp => null !== (0, Rp.e)(pp.vendorId, pp.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((pp => pp.kind))
      }
      forget(pp) {
        pp.device.removeEventListener("inputreport", pp.onReport), this.controllers.get(pp.device) === pp && this.controllers.delete(pp.device)
      }
      async openController(pp) {
        const ip = (0, Rp.e)(pp.vendorId, pp.productId);
        if (!ip || !this.running || this.controllers.has(pp) || this.opening.has(pp)) return;
        this.opening.add(pp);
        let cp = !1;
        try {
          pp.opened || await pp.open()
        } finally {
          this.opening.delete(pp), cp = this.disconnectedWhileOpening.delete(pp)
        }
        if (cp) return void pp.close().catch((pp => {
          console.debug("Could not close an unplugged motion controller", pp)
        }));
        if (!this.running) return;
        const Op = {
          device: pp,
          kind: ip,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: pp => {
            this.onReport(Op, pp)
          }
        };
        this.controllers.set(pp, Op), pp.addEventListener("inputreport", Op.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Op)
        } catch (op) {
          console.warn(`Could not turn on motion for ${ip}`, op), this.controllers.get(pp) === Op && (this.forget(Op), this.onControllersChanged())
        }
      }
      async enableMotion(pp) {
        let {
          device: ip,
          kind: cp
        } = pp;
        if ((0, Rp.g)(cp))
          for (const Op of Rp.u[cp]) await ip.receiveFeatureReport(Op).catch((pp => {
            console.debug(`Motion controller feature report ${Op} unavailable`, pp)
          }));
        else
          for (let Op = 0; Op < 2; Op++)
            for (const {
                subcommand: pp,
                args: cp
              }
              of Rp.w) await ip.sendReport(Rp.x, (0, Rp.d)(this.switchPacketCounter++, pp, cp)), await new Promise((pp => {
              setTimeout(pp, 60)
            }))
      }
      onReport(pp, ip) {
        const cp = (0, Rp.p)(pp.kind, ip.reportId, ip.data, pp.device.productId);
        if (!cp) return;
        const Op = null === pp.lastEventMs ? 0 : (ip.timeStamp - pp.lastEventMs) / 1e3;
        pp.lastEventMs = ip.timeStamp;
        let op = cp.dtSec;
        if (null !== op && Op > 0 && (op = Math.max(.001, Math.min(.017, Op / cp.readings.length))), null === op && null !== cp.sensorClock && (0, Rp.g)(pp.kind)) {
          const ip = (0, Rp.s)(pp.kind, pp.lastClock, cp.sensorClock);
          pp.lastClock = cp.sensorClock, op = 0 === ip ? null : ip
        }
        if (pp.lastReadingMs = ip.timeStamp, this.isPreferred(pp, ip.timeStamp))
          for (const Sp of cp.readings) {
            var Ip;
            this.sink(Sp, null !== (Ip = op) && void 0 !== Ip ? Ip : Op, `hid${pp.openedOrder}`)
          }
      }
      isPreferred(pp, ip) {
        const cp = pp => 1e6 * Rp.o[pp.kind] + pp.openedOrder;
        for (const Op of this.controllers.values())
          if (Op !== pp && ip - Op.lastReadingMs < 500 && cp(Op) < cp(pp)) return !1;
        return !0
      }
    }
    var Mp = cp(104);
    const Cp = () => DeviceMotionEvent,
      Ep = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Mp.isMobile)(),
      Xp = () => {
        var pp;
        const ip = null === (pp = window.screen.orientation) || void 0 === pp ? void 0 : pp.angle;
        return "number" === typeof ip ? ip : "number" === typeof window.orientation ? window.orientation : 0
      };
    class lp {
      constructor(pp, ip) {
        this.sink = pp, this.onStateChanged = ip, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((pp => {
            console.warn("Could not enable the motion sensor", pp)
          }))
        }, this.onMotion = pp => {
          const ip = pp.rotationRate;
          if (!ip || null === ip.alpha && null === ip.beta && null === ip.gamma) return;
          const cp = null === this.lastEventMs ? 0 : (pp.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = pp.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: mp(ip, Xp()),
            accel: null
          }, cp, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Cp().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const pp = Cp().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof pp) return void this.listen();
        let ip;
        this.disarmGestureRequest();
        try {
          ip = await pp.call(DeviceMotionEvent)
        } catch (cp) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), cp
        }
        this.wanted && ("granted" === ip ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(pp) {
        this.state !== pp && (this.state = pp, this.onStateChanged())
      }
    }
    const Qp = "controllerGyroStatusChanged",
      Jp = {
        QE: 0,
        TE: 0
      },
      Bp = pp => {
        var ip, cp;
        return "undefined" === typeof document || (null === (ip = null === (cp = document.featurePolicy) || void 0 === cp ? void 0 : cp.allowsFeature(pp)) || void 0 === ip || ip)
      };
    class Np {
      constructor() {
        this.processor = new kp, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = pp => {
          const ip = pp.gyroAiming && xp.e.hasConnectedPad();
          var cp, Op;
          ip !== this.phoneRunning && (this.phoneRunning = ip, ip ? null === (cp = this.phone) || void 0 === cp || cp.start() : null === (Op = this.phone) || void 0 === Op || Op.stop());
          if (pp.gyroAiming !== this.running) {
            var op, Ip;
            if (this.running = pp.gyroAiming, this.running) null === (op = this.hid) || void 0 === op || op.start().catch((pp => {
              console.warn("Could not open motion controllers", pp)
            }));
            else null === (Ip = this.hid) || void 0 === Ip || Ip.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          op.m.GA(Qp, this.getStatus())
        };
        const pp = (() => {
            var pp;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (pp = navigator.hid) && void 0 !== pp ? pp : null
          })(),
          ip = Bp("hid");
        this.hidBlocked = null !== pp && !ip, this.hid = pp && ip ? new qp(pp, ((pp, ip, cp) => {
          this.lastHidReadingMs = performance.now(), this.feed(pp, ip, "player", cp)
        }), this.publishStatus) : null;
        const cp = Bp("accelerometer") && Bp("gyroscope");
        this.phoneBlocked = Ep() && !cp, this.phone = Ep() && cp ? new lp(((pp, ip, cp) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(pp, ip, "local", cp)
        }), this.publishStatus) : null, op.m.subscribe(Yp.g, this.syncWithSettings), xp.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Yp.h)()), this.publishStatus()
        })), this.syncWithSettings((0, Yp.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var pp, ip, cp, Op;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (pp = null === (ip = this.hid) || void 0 === ip ? void 0 : ip.getConnectedKinds()) && void 0 !== pp ? pp : [],
          phoneMotion: null !== (cp = null === (Op = this.phone) || void 0 === Op ? void 0 : Op.getState()) && void 0 !== cp ? cp : "off",
          padConnected: xp.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var pp;
        await (null === (pp = this.phone) || void 0 === pp ? void 0 : pp.requestPermission())
      }
      drainLookDelta() {
        const pp = performance.now();
        pp - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = pp;
        const ip = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const cp = (0, Yp.h)();
        return cp.gyroAiming && (pp => {
          let {
            activation: ip,
            isHeld: cp,
            useButton: Op,
            gyroButton: op
          } = pp;
          return "always" === ip || cp("aiming" === ip ? Op : op)
        })({
          activation: cp.gyroActivation,
          isHeld: pp => Lp.d.isButtonHeld(pp),
          useButton: (0, Sp.g)("use"),
          gyroButton: cp.gyroButton
        }) ? ((pp, ip) => ({
          QE: -pp.yawDeg * ip * Ap,
          TE: -pp.pitchDeg * ip * Ap
        }))(ip, cp.gyroSensitivity) : Jp
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(pp, ip) {
        this.feed(pp, ip, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(pp, ip, cp, Op) {
        this.source !== Op && (this.processor.reset(), this.source = Op);
        const op = this.processor.process(pp, ip, cp);
        this.pendingYawDeg += op.yawDeg, this.pendingPitchDeg += op.pitchDeg
      }
    }
    let Tp = null;
    const fp = () => (Tp || (Tp = new Np), Tp),
      bp = () => {
        const [pp, ip] = (0, Op.useState)((() => fp().getStatus()));
        return (0, Ip.f)(Qp, ip), (0, Op.useEffect)((() => {
          ip(fp().getStatus())
        }), []), pp
      }
  },
  8988: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => ep,
      e: () => Lp,
      g: () => Op,
      i: () => xp,
      k: () => Yp,
      o: () => Dp,
      p: () => tp,
      s: () => wp,
      u: () => kp,
      w: () => jp,
      x: () => Hp
    });
    const Op = pp => "dualShock4" === pp || "dualSense" === pp,
      op = 1356,
      Ip = 1406,
      Sp = [{
        vendorId: op,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: op,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: op,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: op,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: op,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Ip,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Ip,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Ip,
        productId: 8199,
        kind: "joyConRight"
      }],
      xp = Sp.map((pp => {
        let {
          vendorId: ip,
          productId: cp
        } = pp;
        return {
          vendorId: ip,
          productId: cp
        }
      })),
      Lp = (pp, ip) => {
        var cp, Op;
        return null !== (cp = null === (Op = Sp.find((cp => cp.vendorId === pp && cp.productId === ip))) || void 0 === Op ? void 0 : Op.kind) && void 0 !== cp ? cp : null
      },
      Yp = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Dp = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Ap = 2e3 / 32767,
      Pp = 1 / 8192,
      Wp = 936 / 13371,
      yp = (pp, ip, cp) => ({
        x: pp.getInt16(ip, !0) * cp,
        y: pp.getInt16(ip + 2, !0) * cp,
        z: pp.getInt16(ip + 4, !0) * cp
      }),
      Up = pp => 0 === pp.x && 0 === pp.y && 0 === pp.z,
      wp = (pp, ip, cp) => null === ip ? null : "dualShock4" === pp ? 16 * (cp - ip & 65535) / 3 / 1e6 : (cp - ip >>> 0) / 3 / 1e6,
      vp = (pp, ip) => "joyConRight" === ip ? {
        x: pp.y,
        y: -pp.z,
        z: -pp.x
      } : {
        x: -pp.y,
        y: pp.z,
        z: -pp.x
      },
      tp = (pp, ip, cp, op) => Op(pp) ? ((pp, ip, cp, Op) => {
        const op = ((pp, ip, cp) => "dualShock4" === pp ? 1 === ip && cp >= 63 ? 0 : 17 === ip && cp >= 65 ? 2 : null : 1 === ip && cp >= 62 ? 0 : 49 === ip && cp >= 63 ? 1 : null)(pp, ip, cp.byteLength);
        if (null === op) return null;
        if (2976 === Op && 1 === ip && 0 !== (4 & cp.getUint8(30))) return null;
        const Ip = op + ("dualShock4" === pp ? 12 : 15),
          Sp = yp(cp, Ip, Ap),
          xp = yp(cp, Ip + 6, Pp);
        return Up(Sp) && Up(xp) ? null : {
          readings: [{
            gyro: Sp,
            accel: xp
          }],
          dtSec: null,
          sensorClock: "dualShock4" === pp ? cp.getUint16(op + 9, !0) : cp.getUint32(op + 27, !0)
        }
      })(pp, ip, cp, op) : ((pp, ip, cp) => {
        if (48 !== ip && 49 !== ip || cp.byteLength < 48) return null;
        const Op = [];
        for (let op = 0; op < 3; op++) {
          const ip = yp(cp, 12 + 12 * op, 244e-6),
            Ip = yp(cp, 18 + 12 * op, Wp);
          if (Up(Ip) && Up(ip)) return null;
          Op.push({
            gyro: vp(Ip, pp),
            accel: vp(ip, pp)
          })
        }
        return {
          readings: Op,
          dtSec: .005,
          sensorClock: null
        }
      })(pp, ip, cp),
      Hp = 1,
      dp = [0, 1, 64, 64, 0, 1, 64, 64],
      ep = (pp, ip, cp) => new Uint8Array([15 & pp, ...dp, ip, ...cp]),
      jp = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      kp = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8338: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Np,
      h: () => Fp,
      j: () => jp,
      n: () => Wp.h,
      r: () => bp,
      u: () => fp,
      y: () => kp,
      A: () => hp,
      E: () => Wp.n,
      H: () => Wp.r,
      I: () => gp,
      J: () => Wp.u,
      N: () => lp
    });
    var Op = cp(62),
      op = cp(25),
      Ip = cp(34),
      Sp = cp(1476),
      xp = cp(1308),
      Lp = cp(8320),
      Yp = cp(8346),
      Dp = cp(8307),
      Ap = cp(8290),
      Pp = cp(8348),
      Wp = cp(1419),
      yp = cp(8298),
      Up = cp(8785),
      wp = cp(4469),
      vp = cp(116);
    class tp {
      constructor(pp) {
        this.deps = pp, this.pads = new Map
      }
      observe(pp, ip, cp) {
        if (!this.deps.touchOnly) return;
        const Op = this.pads.get(ip.id);
        "proven" !== Op && cp ? (this.pads.set(ip.id, "proven"), void 0 !== Op && this.deps.onReleased(ip, pp, pp.timestampMs - Op)) : void 0 === Op && (this.pads.set(ip.id, pp.timestampMs), this.deps.onHeld(ip, pp)), this.deps.setMayHide("proven" === this.pads.get(ip.id))
      }
    }
    const Hp = pp => pp.values.flatMap(((pp, ip) => pp >= yp.I ? [String(ip)] : [])).join(",") || "none",
      dp = (pp, ip, Op, op, Ip) => {
        const Sp = (0, Wp.e)(),
          xp = document.visibilityState,
          Lp = document.hasFocus();
        Promise.all([Promise.resolve().then((() => cp(3003))), Promise.resolve().then((() => cp(1080))), Promise.resolve().then((() => cp(131)))]).then((cp => {
          let [{
            logControllerHudHoldToGtag: Yp
          }, {
            logClientLineFromEveryPage: Dp
          }, {
            siteUsed: Ap
          }] = cp;
          Yp(pp, ip.family, null === Ip ? void 0 : Math.round(Ip / 1e3)), Dp(`touch HUD pad ${pp}`, ep(ip, Op, op, Ip, Sp, xp, Lp, Ap))
        }), (() => {}))
      },
      ep = (pp, ip, cp, Op, op, Ip, Sp, xp) => {
        var Lp;
        const Yp = {
          pad_id: pp.id.slice(0, 120),
          pad_family: pp.family,
          pad_mapping: null !== (Lp = null === cp || void 0 === cp ? void 0 : cp.mapping) && void 0 !== Lp ? Lp : "unread",
          pad_axes: cp ? String(cp.axes.length) : "unread",
          pad_buttons: cp ? String(cp.buttons.length) : "unread",
          pressed: Hp(ip),
          ms_since_touch: null === op ? "none" : String(Math.round(ip.timestampMs - op)),
          visibility: Ip,
          focused: String(Sp),
          site: xp
        };
        return null !== Op && (Yp.held_ms = String(Math.round(Op))), Yp
      };
    const jp = pp => !pp.repeat && !(0, Up.d)(pp.key),
      kp = "PadHidesCursor";
    let mp = !1;
    const Rp = pp => {
        pp !== mp && (mp = pp, document.documentElement.classList.toggle(kp, pp))
      },
      qp = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(pp) {
          let ip = !1,
            cp = !1;
          pp.values.forEach(((pp, Op) => {
            const op = pp >= (this.buttonsDown[Op] ? yp.K : yp.I);
            op && !this.buttonsDown[Op] && (ip = !0, cp = !0), this.buttonsDown[Op] = op
          }));
          return [pp.leftStick, pp.rightStick].forEach(((pp, Op) => {
            const op = this.stickAnchors[Op];
            Math.hypot(pp.x, pp.y) < (op ? yp.K : .3) ? this.stickAnchors[Op] = null : (!op || Math.hypot(pp.x - op.x, pp.y - op.y) >= .3) && (this.stickAnchors[Op] = {
              x: pp.x,
              y: pp.y
            }, ip = !0, cp ||= !op)
          })), ip && (this.lastActivityMs = pp.timestampMs), this.onlyMovedOn = ip && !cp, ip
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(pp) {
          return !(pp - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((pp => pp)) || this.stickAnchors.some((pp => null !== pp)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((pp => null !== pp))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      Mp = (Cp = () => Ap.e.getActiveGamepad(), new tp({
        touchOnly: "touchOnly" === (0, vp.c)(),
        setMayHide: Wp.q,
        onHeld: (pp, ip) => {
          dp("sx", pp, ip, Cp(), null)
        },
        onReleased: (pp, ip, cp) => {
          dp("released", pp, ip, Cp(), cp)
        }
      }));
    var Cp;
    let Ep = null,
      Xp = !1;
    const lp = () => Xp;
    let Qp = null,
      Jp = !1,
      Bp = null;
    const Np = () => Bp;
    let Tp = !1;
    const fp = (pp, ip) => {
        if (!qp.observe(pp)) return !1;
        if (Mp.observe(pp, ip, qp.isStickOffRest()), Tp && qp.wasOnlyMoveOn() && !(0, Wp.h)()) return !1;
        Tp = !1, Xp = !1;
        const cp = !(0, Wp.h)();
        return cp && (Ep = pp, Bp = !mp && Jp && Qp ? {
          ...Qp
        } : null), Jp = !1, (0, Wp.n)("gamepad"), Rp(!0), (0, Pp.o)((0, Lp.k)()), cp
      },
      bp = pp => !(0, Wp.h)() || pp === Ep,
      hp = () => {
        qp.reset()
      },
      ap = () => {
        const pp = op.c.get("activeInputDevice"),
          ip = "gamepad" === pp ? Ap.e.getActivePad() : null;
        return {
          device: pp,
          inGame: (0, xp.t)(),
          padMovesMouse: null !== ip && (0, Dp.g)(ip.id)
        }
      },
      np = pp => {
        document.pointerLockElement ? Qp = null : (Qp ??= {
          x: 0,
          y: 0
        }, Qp.x = pp.clientX, Qp.y = pp.clientY)
      },
      Fp = () => {
        const pp = new wp.d,
          ip = ip => {
            pp.reset(), Tp = !1, (0, Wp.n)(ip)
          },
          cp = pp => {
            if (pp.isTrusted) {
              if (pp instanceof KeyboardEvent) {
                if ((0, Wp.l)(pp), !jp(pp)) return;
                Xp = !0
              }
              if (pp instanceof PointerEvent && "touch" === pp.pointerType) return Qp = null, void ip("touch");
              pp instanceof PointerEvent && (np(pp), Jp = !0), ("pointerdown" !== pp.type || (pp => {
                let {
                  device: ip,
                  inGame: cp,
                  padMovesMouse: Op
                } = pp;
                return !("gamepad" === ip && Op && cp)
              })(ap())) && ip("keyboardMouse")
            }
          },
          Op = pp => {
            pp.isTrusted && (Qp = null, ip("touch"))
          },
          Sp = pp => {
            pp.isTrusted && "touch" !== pp.pointerType && !pp.relatedTarget && (Qp = null)
          },
          xp = cp => {
            if (!cp.isTrusted || "touch" === cp.pointerType) return;
            np(cp);
            const Op = cp.movementX || 0,
              Ip = cp.movementY || 0;
            if (0 === Op && 0 === Ip) return;
            if (Jp = !0, Rp(!1), "keyboardMouse" === op.c.get("activeInputDevice")) return;
            const Sp = qp.isHolding(cp.timeStamp),
              xp = ap(),
              Lp = (pp => {
                let {
                  device: ip,
                  inGame: cp,
                  padMovesMouse: Op,
                  padHolding: op
                } = pp;
                return ("gamepad" !== ip || !Op) && "keyboardMouse" !== ip && (cp || !op)
              })({
                ...xp,
                inGame: xp.inGame && (0, Yp.e)(),
                padHolding: Sp
              });
            Lp && pp.add(Op, Ip, cp.timeStamp) && (ip("keyboardMouse"), Tp = qp.isStickOffRest())
          },
          Lp = pp => {
            Rp("gamepad" === pp)
          },
          Dp = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", cp, Dp), window.addEventListener("pointerdown", cp, Dp), window.addEventListener("wheel", cp, Dp), window.addEventListener("touchstart", Op, Dp), window.addEventListener("pointermove", xp, Dp), window.addEventListener("pointerout", Sp, Dp);
        const Ap = Ip.m.subscribe("appManagerUpdated|activeInputDevice", Lp);
        return Lp(op.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", cp, Dp), window.removeEventListener("pointerdown", cp, Dp), window.removeEventListener("wheel", cp, Dp), window.removeEventListener("touchstart", Op, Dp), window.removeEventListener("pointermove", xp, Dp), window.removeEventListener("pointerout", Sp, Dp), Qp = null, Ip.m.unsubscribe(Ap), Rp(!1)
        }
      },
      gp = () => {
        const [pp, ip] = (0, Op.useState)(Lp.k);
        return (0, Sp.f)(Lp.c, (() => {
          ip((0, Lp.k)())
        })), (0, Sp.f)(Ap.c, (() => {
          ip((0, Lp.k)())
        })), pp
      }
  },
  8327: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      f: () => op
    });
    const Op = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      op = pp => Op.includes(pp)
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
  8807: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => Op
    });
    const Op = "controllerOpenKeyboard",
      op = "controllerKeyboardVisible"
  },
  8346: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      e: () => Dp,
      f: () => Lp,
      i: () => xp
    });
    var Op = cp(25),
      op = cp(1650),
      Ip = cp(1770);
    const Sp = new Map,
      xp = (pp, ip) => (Sp.has(pp) && console.warn(`Gameplay blocker "${pp}" registered twice; the newer one replaces it.`), Sp.set(pp, ip), () => {
        Sp.get(pp) === ip && Sp.delete(pp)
      }),
      Lp = () => (0, Ip.b)(document.activeElement),
      Yp = function() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [ip, cp] of Sp)
          if (!pp.includes(ip) && cp()) return ip;
        return null
      },
      Dp = function() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Op.c.get("gameState") && (!(0, op.l)() && (!Lp() && null === Yp(pp)))
      }
  },
  8298: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => dp,
      D: () => vp,
      E: () => wp,
      F: () => Yp,
      I: () => Pp,
      K: () => Wp,
      N: () => op,
      Q: () => Op,
      R: () => jp,
      S: () => Mp,
      W: () => Xp,
      _: () => ep,
      b: () => lp,
      c: () => Cp,
      d: () => Dp,
      h: () => Lp,
      i: () => xp,
      l: () => mp,
      m: () => tp,
      p: () => kp,
      s: () => Ip,
      u: () => Ap,
      w: () => Hp,
      y: () => Ep
    });
    const Op = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      op = Op.length,
      Ip = function() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(op).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: pp
        }
      },
      Sp = Object.fromEntries(Op.map(((pp, ip) => [pp, ip]))),
      xp = pp => Sp[pp],
      Lp = function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Op = Math.hypot(pp.x, pp.y);
        if (Op <= ip) return {
          x: 0,
          y: 0
        };
        const op = Math.min(1, (Op - ip) / Math.max(1e-4, cp - ip));
        return {
          x: pp.x / Op * op,
          y: pp.y / Op * op
        }
      },
      Yp = ["exponential", "linear", "boost"],
      Dp = (pp, ip) => {
        const cp = Math.hypot(pp.x, pp.y);
        if (0 === cp) return {
          x: 0,
          y: 0
        };
        const Op = ((pp, ip) => {
          const cp = Math.max(0, Math.min(1, pp));
          return "linear" === ip ? cp : cp * cp
        })(cp, ip);
        return {
          x: pp.x / cp * Op,
          y: pp.y / cp * Op
        }
      },
      Ap = .5,
      Pp = .3,
      Wp = .2,
      yp = xp("LT"),
      Up = xp("RT"),
      wp = pp => pp === yp || pp === Up,
      vp = (pp, ip) => {
        const cp = xp(ip);
        return wp(cp) ? pp[cp] > .35 : pp[cp] >= Ap
      },
      tp = (pp, ip) => pp.map(((pp, cp) => wp(cp) ? ip[cp] ? pp > .35 : pp >= .55 : pp >= Ap)),
      Hp = ["Up", "Down", "Left", "Right"],
      dp = pp => Hp.includes(pp),
      ep = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(pp.x, pp.y) < ip ? null : Math.abs(pp.x) > Math.abs(pp.y) ? pp.x > 0 ? "Right" : "Left" : pp.y > 0 ? "Down" : "Up"
      },
      jp = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      kp = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      mp = ["default", "slow", "off"],
      Rp = 800,
      qp = 250,
      Mp = (pp, ip) => "off" === ip ? null : "slow" === ip ? {
        initialDelayMs: Math.max(pp.initialDelayMs, Rp),
        intervalMs: Math.max(pp.intervalMs, qp)
      } : pp;
    class Cp {
      constructor(pp) {
        this.readTiming = pp, this.sx = !1, this.timing = null, this.nextFireMs = 0
      }
      update(pp, ip) {
        return pp ? this.sx ? !!(this.timing && ip >= this.nextFireMs) && (this.nextFireMs = ip + this.timing.intervalMs, !0) : (this.sx = !0, this.timing = this.readTiming(), this.nextFireMs = ip + (null !== (cp = null === (Op = this.timing) || void 0 === Op ? void 0 : Op.initialDelayMs) && void 0 !== cp ? cp : 0), !0) : (this.sx = !1, !1);
        var cp, Op
      }
      reset() {
        this.sx = !1
      }
    }
    const Ep = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Xp = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class lp {
      constructor(pp) {
        this.timer = pp, this.direction = null
      }
      update(pp, ip) {
        return pp !== this.direction && (this.timer.reset(), this.direction = pp), this.timer.update(null !== pp, ip) ? pp : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8835: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => Ip
    });
    let Op = -1 / 0;
    const op = () => {
        Op = performance.now()
      },
      Ip = pp => performance.now() - Op < pp
  },
  8793: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      g: () => Ip
    });
    var Op = cp(8320),
      op = cp(8298);
    const Ip = pp => (0, op.S)(pp, (0, Op.h)().buttonRepeat),
      Sp = pp => new op.c((() => Ip(pp)))
  },
  8334: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp,
      e: () => Ip,
      i: () => xp
    });
    var Op = cp(34),
      op = cp(8320);
    const Ip = (pp, ip) => "OpenShop" === pp ? "shop" === ip : "OpenLobbyLeaderboard" !== pp || "leaderboard" === ip;
    let Sp = !1;
    const xp = pp => {
        pp !== Sp && (Sp = pp, Op.m.GA(op.c, (0, op.h)()))
      },
      Lp = () => ((pp, ip) => "shop" === pp && ip ? "shop" : "leaderboard")((0, op.h)().leaderboardButton, Sp)
  },
  8331: (pp, ip, cp) => {
    cp.d(ip, {
      $: () => tp,
      A: () => xp,
      E: () => ep,
      I: () => Pp,
      J: () => Wp,
      M: () => Ap,
      N: () => dp,
      P: () => Yp,
      R: () => vp,
      V: () => qp,
      W: () => Hp,
      Y: () => Up,
      Z: () => wp,
      _: () => yp,
      c: () => Jp,
      db: () => Xp,
      g: () => Np,
      hb: () => Ip,
      j: () => Mp,
      k: () => Sp,
      kb: () => jp,
      m: () => Rp,
      ob: () => Bp,
      p: () => kp,
      qb: () => mp,
      r: () => lp,
      v: () => Qp,
      w: () => Dp,
      z: () => Lp
    });
    var Op = cp(8318),
      op = cp(8298);
    const Ip = {
        min: 25,
        max: 500,
        step: 5
      },
      Sp = {
        min: 25,
        max: 100,
        step: 5
      },
      xp = {
        min: 0,
        max: .4,
        step: .01
      },
      Lp = {
        min: 25,
        max: 300,
        step: 5
      },
      Yp = {
        min: .5,
        max: 6,
        step: .1
      },
      Dp = (pp, ip) => {
        if (!Number.isFinite(pp)) return ip.min;
        const cp = ip.min + Math.round((pp - ip.min) / ip.step) * ip.step,
          Op = Math.min(ip.max, Math.max(ip.min, cp));
        return Math.round(1e3 * Op) / 1e3
      },
      Ap = pp => `${Math.round(pp)}%`,
      Pp = pp => Ap(100 * pp),
      Wp = pp => `${pp.toFixed(1)}\xd7`,
      yp = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      Up = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      wp = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      vp = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      tp = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Hp = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      dp = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      ep = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      jp = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      kp = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      mp = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Rp = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      qp = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Mp = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        sprint: "controller:settingsActionSprint",
        attack: "controller:settingsActionAttack",
        use: "controller:settingsActionUse",
        hotbarPrevious: "controller:settingsActionHotbarPrevious",
        hotbarNext: "controller:settingsActionHotbarNext",
        inventory: "controller:settingsActionInventory",
        actionButton: "controller:settingsActionActionButton",
        perspective: "controller:settingsActionPerspective",
        pickBlock: "controller:settingsActionPickBlock",
        drop: "controller:settingsActionDrop",
        emoteWheel: "controller:settingsActionEmoteWheel",
        chat: "controller:settingsActionChat",
        pause: "controller:settingsActionPause",
        leaderboard: "controller:settingsActionLeaderboard",
        menuConfirm: "controller:settingsActionMenuConfirm",
        menuBack: "controller:settingsActionMenuBack",
        menuTabPrevious: "controller:settingsActionMenuTabPrevious",
        menuTabNext: "controller:settingsActionMenuTabNext",
        menuPageUp: "controller:settingsActionMenuPageUp",
        menuPageDown: "controller:settingsActionMenuPageDown",
        menuSecondary: "controller:settingsActionMenuSecondary",
        menuToggleCursor: "controller:settingsActionMenuToggleCursor",
        inventoryPrimary: "controller:settingsActionInventoryPrimary",
        inventorySecondary: "controller:settingsActionInventorySecondary",
        inventoryQuickMove: "controller:settingsActionInventoryQuickMove",
        inventoryClose: "controller:settingsActionInventoryClose",
        inventoryPanelPrevious: "controller:settingsActionInventoryPanelPrevious",
        inventoryPanelNext: "controller:settingsActionInventoryPanelNext",
        inventoryDrop: "controller:settingsActionInventoryDrop",
        inventoryHotbarSwap: "controller:settingsActionInventoryHotbarSwap",
        keyboardType: "controller:settingsActionKeyboardType",
        keyboardBackspace: "controller:settingsActionKeyboardBackspace",
        keyboardSpace: "controller:settingsActionKeyboardSpace",
        keyboardCaretLeft: "controller:settingsActionKeyboardCaretLeft",
        keyboardCaretRight: "controller:settingsActionKeyboardCaretRight",
        keyboardShift: "controller:settingsActionKeyboardShift",
        keyboardSymbols: "controller:settingsActionKeyboardSymbols",
        keyboardSubmit: "controller:settingsActionKeyboardSubmit",
        keyboardClose: "controller:settingsActionKeyboardClose",
        keyboardChannel: "controller:settingsActionKeyboardChannel"
      },
      Cp = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Ep = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Xp = Op.e.map((pp => {
        let {
          group: ip,
          actions: cp
        } = pp;
        const Op = cp.map((pp => ({
          kind: "action",
          action: pp
        })));
        return {
          titleKey: Cp[ip],
          rows: "gameplay" === ip ? [...Ep, ...Op] : Op
        }
      })),
      lp = op.Q.filter((pp => "Home" !== pp)),
      Qp = 1e4;
    class Jp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = pp, this.openButton = ip, this.accepts = cp, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(pp, ip) {
        var cp;
        this.updateIgnored(pp, ip);
        const Op = ip - (null !== (cp = this.startMs) && void 0 !== cp ? cp : ip) >= 250;
        for (const op of lp)
          if (op !== this.cancelButton && Op && !this.ignoredUntilMs.has(op) && pp.wasPressed(op) && this.accepts(op)) return {
            kind: "bind",
            button: op
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (pp.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = ip
        }
        return null === this.cancelDownAtMs ? null : pp.isHeld(this.cancelButton) && ip - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : pp.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(pp) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (pp - this.cancelDownAtMs) / 700)
      }
      updateIgnored(pp, ip) {
        if (null === this.startMs) {
          this.startMs = ip;
          for (const ip of lp) pp.isDown(ip) && this.ignoredUntilMs.set(ip, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, ip + 250)
        }
        for (const [cp, Op] of this.ignoredUntilMs) {
          const op = pp.isDown(cp);
          Op === 1 / 0 ? op || cp !== this.openButton ? op || this.ignoredUntilMs.delete(cp) : this.ignoredUntilMs.set(cp, ip + 250) : ip >= Op ? this.ignoredUntilMs.delete(cp) : op && this.ignoredUntilMs.set(cp, 1 / 0)
        }
      }
    }
    const Bp = 6e3;
    class Np {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(pp, ip) {
        let {
          pressed: cp,
          sx: Op
        } = pp;
        if (cp) {
          const pp = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== pp && ip - pp < 1500 ? [...this.pressesAtMs, ip] : [ip], this.pressesAtMs.length >= 3) return 1
        }
        return Op ? (this.downAtMs ??= ip, Math.min(1, (ip - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
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
  5149: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => Sp
    });
    var Op = cp(62);
    const op = new WeakMap,
      Ip = pp => {
        var ip;
        const cp = pp.closest("[data-pad-slider]");
        return cp && null !== (ip = op.get(cp)) && void 0 !== ip ? ip : null
      },
      Sp = (pp, ip) => {
        const cp = (0, Op.useRef)(ip);
        cp.current = ip, (0, Op.useEffect)((() => {
          if (pp.current) return ((pp, ip) => (op.set(pp, ip), () => {
            op.get(pp) === ip && op.delete(pp)
          }))(pp.current, {
            adjust: pp => {
              cp.current.adjust(pp)
            },
            setFraction: pp => {
              cp.current.setFraction(pp)
            },
            endDrag: () => {
              cp.current.endDrag()
            }
          })
        }), [pp])
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
  8861: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      f: () => op
    });
    var Op = cp(34);
    const op = "localBlockBroken";

    function Ip() {
      return {
        onPlayerChangeBlock(pp, ip, cp, Ip, Sp, xp) {
          "Air" === xp && Op.m.GA(op)
        }
      }
    }
  },
  9002: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      f: () => Lp
    });
    var Op = cp(25),
      op = cp(1349),
      Ip = cp(104);
    const Sp = {
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

    function xp() {
      return (0, Ip.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Lp = new class {
      constructor(pp) {
        this.deps = pp, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(pp, ip) {
        var cp;
        if (!this.deps.enabled()) return;
        const Op = Sp[pp],
          op = null !== ip && void 0 !== ip ? ip : Op.pattern;
        if (null === op) return void console.warn("No vibration pattern for", pp);
        const Ip = this.deps.now();
        Ip - this.lastAnyAt < 40 && Op.priority < this.playingPriority || Ip - (null !== (cp = this.lastAt.get(pp)) && void 0 !== cp ? cp : -1 / 0) < Op.minGapMs || Ip < this.playingUntil && Op.priority < this.playingPriority || (this.lastAt.set(pp, Ip), this.lastAnyAt = Ip, this.playingUntil = Ip + op.reduce(((pp, ip) => pp + ip), 0), this.playingPriority = Op.priority, this.deps.vibrate(op))
      }
    }({
      vibrate: pp => {
        navigator.vibrate([...pp])
      },
      now: () => performance.now(),
      enabled: () => xp() && Op.c.get("isTouchScreen") && Op.c.get("clientEscMenuOptions").vibration && !(0, op.e)()
    })
  },
  8858: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(1268);

    function op(pp, ip) {
      var cp, op;
      try {
        const cp = (0, Op.b)();
        if ("function" === typeof cp) {
          const Op = new cp(pp, ip);
          if (Op.type === pp) return Op
        }
      } catch {}
      const Ip = document.createEvent("Event");
      return Ip.initEvent(pp, null !== (cp = null === ip || void 0 === ip ? void 0 : ip.bubbles) && void 0 !== cp && cp, null !== (op = null === ip || void 0 === ip ? void 0 : ip.cancelable) && void 0 !== op && op), Ip
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
  8897: (pp, ip, cp) => {
    function Op(pp, ip) {
      return !pp.hidden && (ip || !pp.isRewardedAd)
    }

    function op(pp) {
      return "object" === typeof pp ? pp.option : pp
    }

    function Ip(pp, ip) {
      var cp;
      if ("dropdown" === (null === (cp = pp.userInput) || void 0 === cp ? void 0 : cp.type) && "object" === typeof pp.userInput.dropdownOptions[0]) {
        for (const cp of pp.userInput.dropdownOptions)
          if (op(cp) === ip) return "object" === typeof cp ? cp.cost : pp.cost;
        console.error("Didn't find matching option for dropdown item. Item:", pp, "input:", ip)
      }
      return pp.cost
    }

    function Sp(pp, ip, cp) {
      var Op;
      const op = null !== (Op = cp.excludedPlayers) && void 0 !== Op ? Op : [ip];
      return pp.filter((pp => !op.includes(pp)))
    }
    cp.d(ip, {
      b: () => Ip,
      c: () => op,
      g: () => Sp,
      h: () => Op
    })
  },
  8937: () => {},
  8358: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8366: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8374: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8378: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8382: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8389: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8394: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8399: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8402: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8408: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8411: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8414: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8420: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8427: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8429: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8435: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8439: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8442: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8448: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8451: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8454: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8462: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8469: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8478: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8484: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8492: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8501: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8506: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8510: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8514: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8520: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8525: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8533: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8542: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8549: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8556: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8562: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8571: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8577: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8584: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8586: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8595: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8598: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8603: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8608: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8616: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8619: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8628: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8636: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8643: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8651: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8657: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8664: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8666: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8668: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8671: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8677: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8682: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8689: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8696: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8700: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8708: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8711: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8720: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8728: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8733: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8735: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8737: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8743: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8749: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8755: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8761: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8765: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8768: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8771: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8777: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);