export const id = 111;
export const ids = [111];
export const modules = {
  4983: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ek,
      h: () => Pk,
      j: () => wk,
      m: () => xk
    });
    var Xk = Ik(58),
      Tk = Ik(4988),
      ik = Ik(4338),
      yk = Ik(1333),
      lk = Ik(5016),
      ak = Ik(1055),
      qk = Ik.n(ak),
      Lk = Ik(1324),
      tk = Ik(1665),
      Zk = Ik(5022),
      jk = Ik(1096);

    function ek(kk) {
      let {
        label: Fk,
        onClick: Ik,
        checked: Xk,
        circleInfoText: Tk,
        className: lk,
        disabled: ak,
        note: Lk
      } = kk;
      return (0, jk.jsxs)("div", {
        "aria-disabled": ak || void 0,
        "data-pad-focusable": !0,
        className: qk()("SettingBox CheckboxContainer", {
          [lk]: lk,
          SettingBoxDisabled: ak
        }),
        onClick: () => {
          ak || Ik(!Xk)
        },
        children: [(0, jk.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, jk.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, jk.jsx)(ik.d, {
              className: "SettingsCheckbox",
              checked: Xk,
              disabled: ak,
              onChange: () => {}
            })
          }), (0, jk.jsxs)("div", {
            className: "CheckboxText",
            children: [Fk, Tk && (0, jk.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, jk.jsx)(yk.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Tk
              })
            })]
          })]
        }), Lk && (0, jk.jsx)("div", {
          className: "SettingNote",
          children: Lk
        })]
      })
    }

    function wk(kk) {
      let {
        name: Fk,
        onChange: Ik,
        min: Tk,
        max: ik,
        step: lk,
        initValue: ak,
        circleInfoText: Lk,
        format: tk,
        className: Zk,
        padStep: ek,
        disabled: wk = !1,
        selectableMax: Hk,
        cappedNote: xk,
        onChangeComplete: Pk
      } = kk;
      const [Kk, Qk] = (0, Xk.useState)(ak), sk = (0, Xk.useRef)(ak);
      (0, Xk.useEffect)((() => {
        sk.current = ak, Qk(ak)
      }), [ak]);
      const Vk = void 0 !== Hk && Hk < ik,
        zk = Vk ? {
          "--slider-selectable": (Hk - Tk) / (ik - Tk)
        } : void 0;
      return (0, jk.jsxs)("div", {
        className: qk()("SettingBox SettingsSliderDiv", {
          [Zk]: Zk,
          SettingBoxDisabled: wk,
          SliderCapped: Vk
        }),
        style: zk,
        children: [(0, jk.jsxs)("div", {
          className: "SliderText",
          children: [`${Fk}: ${tk?tk(Kk):Kk}`, Lk && (0, jk.jsx)(yk.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Lk
          })]
        }), (0, jk.jsx)("div", {
          className: "SliderDiv",
          children: (0, jk.jsx)(Jk, {
            value: Kk,
            min: Tk,
            max: ik,
            step: lk,
            onChange: kk => {
              if (Vk && kk >= Hk && Kk === Hk) return;
              const Fk = Vk ? Math.min(kk, Hk) : kk;
              sk.current = Fk, Qk(Fk), Ik(Fk)
            },
            onChangeComplete: Pk && (() => {
              Pk(sk.current)
            }),
            format: tk,
            padStep: ek,
            disabled: wk
          })
        }), Vk && xk && (0, jk.jsx)("div", {
          className: "SettingNote",
          children: xk
        })]
      })
    }
    const Hk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Jk(kk) {
      var Fk;
      let {
        value: Ik,
        min: ik,
        max: yk,
        step: lk,
        onChange: ak,
        orientation: qk,
        reverse: Lk,
        setIsChanging: tk,
        tooltip: ek,
        labels: wk,
        handleLabel: Jk,
        format: xk,
        onChangeStart: Pk,
        onChangeComplete: Kk,
        padStep: Qk,
        disabled: sk = !1
      } = kk;
      const Vk = (0, Xk.useRef)(null),
        zk = (0, Xk.useRef)(null);
      (0, Xk.useLayoutEffect)((() => {
        var kk, Fk, Ik;
        const Xk = null !== (kk = null === (Fk = Vk.current) || void 0 === Fk ? void 0 : Fk.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Xk || void 0 === Xk || Xk.setAttribute("data-pad-slider", ""), null === Xk || void 0 === Xk || Xk.setAttribute("data-pad-focusable", ""), null === Xk || void 0 === Xk || null === (Ik = Xk.querySelector(".rangeslider__handle")) || void 0 === Ik || Ik.setAttribute("data-pad-slider-handle", ""), zk.current = Xk
      }), []), (0, Xk.useLayoutEffect)((() => {
        var kk, Fk;
        sk ? null === (kk = zk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (Fk = zk.current) || void 0 === Fk || Fk.removeAttribute("aria-disabled")
      }), [sk]);
      const Sk = (null !== (Fk = String(lk).split(".")[1]) && void 0 !== Fk ? Fk : "").length,
        vk = kk => {
          const Fk = Number((Math.round((kk - ik) / lk) * lk + ik).toFixed(Sk));
          return Math.min(yk, Math.max(ik, Fk))
        },
        Ek = (0, Xk.useRef)(Kk);
      Ek.current = Kk, (0, Xk.useEffect)((() => {
        const kk = Vk.current;
        if (!kk) return;
        const Fk = kk => {
          var Fk;
          Hk.has(kk.key) && (null === (Fk = Ek.current) || void 0 === Fk || Fk.call(Ek))
        };
        return kk.addEventListener("keyup", Fk), () => {
          kk.removeEventListener("keyup", Fk)
        }
      }), []);
      const Ok = (0, Xk.useRef)(!1);
      return (0, Zk.g)(zk, {
        adjust: kk => {
          if (sk) return;
          const Fk = null !== Qk && void 0 !== Qk ? Qk : Math.max(lk, Math.round((yk - ik) / 20 / lk) * lk),
            Xk = vk(Ik + kk * Fk * (Lk ? -1 : 1));
          Xk !== Ik && (null === Pk || void 0 === Pk || Pk(), ak(Xk), null === Kk || void 0 === Kk || Kk())
        },
        setFraction: kk => {
          if (sk) return;
          const Fk = vk(ik + (Lk ? 1 - kk : kk) * (yk - ik));
          Fk !== Ik && (Ok.current || (Ok.current = !0, null === Pk || void 0 === Pk || Pk()), ak(Fk))
        },
        endDrag: () => {
          Ok.current && (Ok.current = !1, null === Kk || void 0 === Kk || Kk())
        }
      }), (0, jk.jsx)("div", {
        ref: Vk,
        style: {
          display: "contents"
        },
        children: (0, jk.jsx)(Tk.c, {
          value: Ik,
          min: ik,
          max: yk,
          step: lk,
          onChange: ak,
          orientation: qk,
          reverse: Lk,
          tooltip: ek,
          labels: wk,
          handleLabel: Jk,
          format: xk,
          onChangeStart: () => {
            null === Pk || void 0 === Pk || Pk(), null === tk || void 0 === tk || tk(!0)
          },
          onChangeComplete: () => {
            null === tk || void 0 === tk || tk(!1), null === Kk || void 0 === Kk || Kk()
          }
        })
      })
    }
    async function xk() {
      const kk = Lk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await kk.getResult() && (0, tk.reloadBloxd)()
    }

    function Pk(kk) {
      let {
        label: Fk,
        options: Ik,
        value: Xk,
        onChange: Tk,
        circleInfoText: ik
      } = kk;
      return (0, jk.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, jk.jsxs)("div", {
          className: "SliderText",
          children: [Fk, ik && (0, jk.jsx)(yk.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ik
          })]
        }), (0, jk.jsx)(lk.b, {
          ariaLabel: Fk,
          options: Ik,
          value: Xk,
          onChange: Tk
        })]
      })
    }
  },
  6646: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => hk
    });
    var Xk = Ik(58),
      Tk = Ik(1485),
      ik = Ik(6544),
      yk = Ik(1217),
      lk = Ik(337),
      ak = Ik(1318),
      qk = Ik(1475),
      Lk = Ik(1406),
      tk = Ik(1333),
      Zk = Ik(2525),
      jk = Ik(2659),
      ek = Ik(4543),
      wk = Ik(1118),
      Hk = Ik(1453),
      Jk = Ik(95),
      xk = Ik(1179);
    const Pk = Ik.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Kk = Ik(1055),
      Qk = Ik.n(Kk),
      sk = Ik(1066),
      Vk = Ik(1324),
      zk = Ik(6541),
      Sk = Ik(1096);
    const vk = (0, Xk.lazy)((() => Promise.all([Ik.e(107), Ik.e(77), Ik.e(133), Ik.e(132), Ik.e(112), Ik.e(397)]).then((() => Ik(6582))).then((kk => ({
      default: kk.ShaderPackPublishForm
    })))));

    function Ek(kk) {
      let {
        details: Fk,
        owner: Ik,
        onChanged: Tk
      } = kk;
      const {
        t: yk
      } = (0, xk.y)(), lk = (0, qk.useNavigatePreserveSearch)(), {
        userContext: tk
      } = (0, wk.d)(), [Zk, jk] = (0, Xk.useState)(!1), [ek, Jk] = (0, Xk.useState)(null), [Pk, Kk] = (0, Xk.useState)(!1), {
        packId: Ek,
        name: Ok,
        description: nk,
        live: Gk
      } = Fk;
      async function pk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk;
        jk(!0), Jk(null);
        try {
          await kk(), Fk()
        } catch (Ik) {
          console.error("Failed to change a shader pack", Ik), Jk((0, zk.C)(Ik, yk, "shaderPackListing:ownerActionFailed"))
        } finally {
          jk(!1)
        }
      }
      const uk = (0, zk.u)(tk);
      return (0, Sk.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Sk.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: yk("general:manage")
        }), (0, zk.Z)(Ik, !(null === Gk || void 0 === Gk || !Gk.renderId), Date.now(), yk).map((kk => (0, Sk.jsxs)("div", {
          className: Qk()("ShaderPackOwnerNotice", {
            Warning: "warning" === kk.tone
          }),
          children: [(0, Sk.jsx)(sk.e, {
            name: "warning" === kk.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Sk.jsxs)("div", {
            children: [kk.text, kk.detail && (0, Sk.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: kk.detail
            })]
          })]
        }, kk.text))), Fk.ban && (0, Sk.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Sk.jsx)(sk.e, {
            name: "ban"
          }), (0, Sk.jsxs)("div", {
            children: ["Banned by ", Fk.ban.byName, " on ", new Date(Fk.ban.at).toLocaleString()]
          })]
        }), ek && (0, Sk.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: ek
        }), (0, Sk.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Sk.jsxs)(Lk.Q, {
            disabled: Zk,
            onClick: () => {
              !async function() {
                const kk = await Vk.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Ok,
                  maxLength: ik.C,
                  submitText: "general:save",
                  validate: kk => kk.trim().length < ik.E ? yk("shaderPackListing:nameTooShort", {
                    min: String(ik.E)
                  }) : null
                }).getResult();
                "notificationTornDown" !== kk && "submit" === (null === kk || void 0 === kk ? void 0 : kk.type) && kk.value.trim() !== Ok && await pk((() => Hk.e.updateShaderPack(tk, {
                  packId: Ek,
                  name: kk.value.trim()
                })))
              }()
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: "pen"
            }), " ", yk("shaderPackListing:rename")]
          }), (0, Sk.jsxs)(Lk.Q, {
            disabled: Zk,
            onClick: () => {
              !async function() {
                const kk = await Vk.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: nk,
                  maxLength: ik.q,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== kk && "submit" === (null === kk || void 0 === kk ? void 0 : kk.type) && kk.value.trim() !== nk && await pk((() => Hk.e.updateShaderPack(tk, {
                  packId: Ek,
                  description: kk.value.trim()
                })))
              }()
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: "file-lines"
            }), " ", yk("shaderPackListing:editDescription")]
          }), (0, Sk.jsxs)(Lk.Q, {
            disabled: Zk || Ik.isBanned && !Ik.listed,
            onClick: () => {
              pk((() => Hk.e.updateShaderPack(tk, {
                packId: Ek,
                listed: !Ik.listed
              })))
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: Ik.listed ? "eye-slash" : "eye"
            }), " ", yk(Ik.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Ik.isBanned && (0, Sk.jsxs)(Lk.d, {
            disabled: Zk,
            onClick: () => {
              Kk(!Pk)
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: "upload"
            }), " ", yk("shaderPackListing:uploadVersion")]
          }), (0, Sk.jsxs)(Lk.J, {
            disabled: Zk || Ik.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Vk.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await pk((() => Hk.e.deleteShaderPack(tk, Ek)), (() => {
                  lk(`${zk.X}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: "trash-can"
            }), " ", yk("general:delete")]
          }), uk && (0, Sk.jsxs)(Lk.J, {
            disabled: Zk,
            onClick: () => {
              pk((() => Hk.e.setShaderPackBanned(tk, Ek, !Ik.isBanned)))
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: Ik.isBanned ? "circle-check" : "ban"
            }), " ", Ik.isBanned ? "Unban" : "Ban"]
          })]
        }), Pk && (0, Sk.jsx)(Xk.Suspense, {
          fallback: (0, Sk.jsx)(ak.c, {}),
          children: (0, Sk.jsx)(vk, {
            existing: {
              packId: Ek,
              name: Ok,
              description: nk
            },
            onPublished: () => {
              Kk(!1), Tk()
            }
          })
        })]
      })
    }
    var Ok = Ik(74),
      nk = Ik(1844),
      Gk = Ik(1263),
      pk = Ik(5022),
      uk = Ik(1194),
      bk = Ik(6560),
      Rk = Ik(6551),
      Uk = Ik(6569);

    function Ck(kk) {
      let {
        item: Fk
      } = kk;
      const {
        t: Ik
      } = (0, xk.y)(), [Tk] = (0, bk.h)(), [yk, lk] = (0, Xk.useState)(Tk), [ak, qk] = (0, Xk.useState)(!1), [Lk, tk] = (0, Xk.useState)(!1), {
        s3Url: Zk
      } = uk.clientSideServerUrls, {
        width: jk,
        height: ek
      } = ik.u.large, wk = (0, ik.y)(Zk, Fk, yk, "large"), {
        renderVersion: Hk
      } = Fk;
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Sk.jsx)(Uk.c, {
          selected: yk,
          onSelect: kk => {
            lk(kk), qk(!1)
          },
          imageUrl: kk => (0, ik.y)(Zk, Fk, kk, "thumb")
        }), (0, Sk.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!ak && (0, Sk.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Hk ? void 0 : Ik("shaderPackListing:fullSize"),
            disabled: null === Hk,
            onClick: () => {
              tk(!0)
            },
            children: [(0, Sk.jsx)("img", {
              src: wk,
              width: jk,
              height: ek,
              alt: Ik(zk.ib[yk]),
              draggable: !1
            }), (0, Sk.jsx)(Rk.d, {
              item: Fk
            })]
          }), !ak && null !== Hk && (0, Sk.jsxs)(fk, {
            side: "Right",
            onClick: () => {
              qk(!0)
            },
            children: [(0, Sk.jsx)(sk.e, {
              name: "arrows-left-right"
            }), " ", Ik("shaderPackListing:compare")]
          }), ak && null !== Hk && (0, Sk.jsx)(Wk, {
            item: Fk,
            packUrl: wk,
            baselineUrl: (0, ik.p)(Zk, Hk, yk, "large")
          }), ak && (0, Sk.jsx)(fk, {
            side: "Left",
            onClick: () => {
              qk(!1)
            },
            children: Ik("shaderPackListing:withPack")
          }), ak && (0, Sk.jsx)(fk, {
            side: "Right",
            onClick: () => {
              qk(!1)
            },
            children: Ik("shaderPackListing:withoutPack")
          })]
        }), Lk && (0, Sk.jsx)(Nk, {
          fullUrl: (0, ik.y)(Zk, Fk, yk, "full"),
          largeUrl: wk,
          alt: Ik(zk.ib[yk]),
          onClose: () => {
            tk(!1)
          }
        })]
      })
    }

    function Nk(kk) {
      let {
        fullUrl: Fk,
        largeUrl: Ik,
        alt: Tk,
        onClose: ik
      } = kk;
      const yk = (0, Xk.useRef)(null);
      return (0, Gk.t)("popup", yk, ik), (0, Xk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), ik())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), [ik]), (0, Ok.createPortal)((0, Sk.jsxs)("div", {
        ref: yk,
        className: "ShaderPackFullSize",
        onClick: ik,
        children: [(0, Sk.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Fk,
          alt: Tk,
          draggable: !1,
          style: {
            backgroundImage: `url(${Ik})`
          }
        }), (0, Sk.jsx)(Lk.k, {
          className: "ShaderPackFullSizeClose",
          onClick: ik
        })]
      }), document.body)
    }
    const ck = 5;

    function Wk(kk) {
      let {
        item: Fk,
        packUrl: Ik,
        baselineUrl: Tk
      } = kk;
      const {
        t: yk
      } = (0, xk.y)(), [lk, ak] = (0, Xk.useState)(50), qk = (0, Xk.useRef)(!1), Lk = (0, Xk.useRef)(null), {
        width: tk,
        height: Zk
      } = ik.u.large;

      function jk(kk) {
        ak((Fk => (0, nk.e)(Fk + kk, 0, 100)))
      }

      function ek(kk) {
        const Fk = kk.currentTarget.getBoundingClientRect();
        ak((0, nk.e)((kk.clientX - Fk.left) / Fk.width * 100, 0, 100))
      }
      return (0, pk.g)(Lk, {
        adjust: kk => {
          jk(kk * ck)
        },
        setFraction: kk => {
          ak(100 * kk)
        },
        endDrag: () => {}
      }), (0, Sk.jsxs)("div", {
        ref: Lk,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": yk("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(lk),
        style: {
          "--split": `${lk}%`
        },
        onKeyDown: function(kk) {
          const Fk = "ArrowLeft" === kk.key ? -ck : "ArrowRight" === kk.key ? ck : 0;
          0 !== Fk && (kk.preventDefault(), jk(Fk))
        },
        onPointerDown: kk => {
          qk.current = !0, kk.currentTarget.setPointerCapture(kk.pointerId), ek(kk)
        },
        onPointerMove: kk => {
          qk.current && ek(kk)
        },
        onPointerUp: () => {
          qk.current = !1
        },
        onPointerCancel: () => {
          qk.current = !1
        },
        children: [(0, Sk.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Tk,
          width: tk,
          height: Zk,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Ik})`
          }
        }), (0, Sk.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Sk.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Ik,
          width: tk,
          height: Zk,
          alt: "",
          draggable: !1
        }), (0, Sk.jsx)(Rk.d, {
          item: Fk,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function fk(kk) {
      let {
        side: Fk,
        onClick: Ik,
        children: Xk
      } = kk;
      return (0, Sk.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Fk}`,
        onClick: Ik,
        children: (0, Sk.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Xk
        })
      })
    }
    var Bk = Ik(4983),
      dk = Ik(309),
      Yk = Ik(6644);
    const Ak = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function gk(kk) {
      const {
        userContext: Fk
      } = (0, wk.d)(), [Tk, ik] = (0, Xk.useState)(null), [yk, lk] = (0, Xk.useState)(!1), [ak, qk] = (0, Xk.useState)(!1), [Lk, tk] = (0, Xk.useState)(null), Zk = null === kk || void 0 === kk ? void 0 : kk.packId, jk = null === kk || void 0 === kk ? void 0 : kk.sourceHash;
      return (0, Xk.useEffect)((() => {
        if (lk(!1), tk(null), void 0 === Zk) return;
        let kk = !1;
        return Promise.all([(0, Jk.hasUsableWebGpuAdapter)(), (0, Yk.i)()]).then((Fk => {
          let [Ik, Xk] = Fk;
          var Tk;
          kk || (ik(Ik), lk((null === Xk || void 0 === Xk || null === (Tk = Xk.listing) || void 0 === Tk ? void 0 : Tk.packId) === Zk && Xk.listing.sourceHash === jk))
        })).catch((Fk => {
          console.error("Failed to check whether this shader pack can be used", Fk), kk || ik(!1)
        })), () => {
          kk = !0
        }
      }), [Zk, jk]), {
        webGpuUsable: Tk,
        inUse: yk,
        busy: ak,
        errorKey: Lk,
        use: () => {
          null !== kk && async function(kk) {
            qk(!0), tk(null);
            try {
              const {
                installListedShaderPack: Xk
              } = await Promise.all([Ik.e(77), Ik.e(133), Ik.e(113)]).then((() => Ik(40505))), Tk = await Xk({
                packId: kk.packId,
                sourceHash: kk.sourceHash,
                name: kk.name,
                ownerName: kk.ownerName,
                description: kk.description
              });
              if ("failed" === Tk.kind) return void tk(Ak[Tk.reason]);
              lk(!0), Hk.e.recordShaderPackDownload(Fk, kk.packId).catch((kk => {
                console.error("Failed to count a shader pack's download", kk)
              })), (0, Bk.m)()
            } catch (Xk) {
              console.error("Failed to use the shader pack", Xk), tk("shaderPack:unexpectedError")
            } finally {
              qk(!1)
            }
          }(kk)
        }
      }
    }

    function mk(kk) {
      let {
        packUse: Fk
      } = kk;
      const {
        t: Ik
      } = (0, xk.y)(), {
        webGpuUsable: Xk,
        inUse: Tk,
        busy: ik,
        errorKey: yk,
        use: lk
      } = Fk;
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Sk.jsxs)(Lk.m, {
          disabled: !0 !== Xk || Tk,
          loading: ik,
          onClick: lk,
          children: [(0, Sk.jsx)(sk.e, {
            name: Tk ? "check" : "download"
          }), " ", Ik(Tk ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Xk && (0, Sk.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Ik((0, dk.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), yk && (0, Sk.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Ik(yk)
        })]
      })
    }

    function hk() {
      var kk;
      const {
        t: Fk
      } = (0, xk.y)(), Ik = (0, qk.useNavigatePreserveSearch)(), {
        packId: ik
      } = (0, Tk.A)(), {
        userContext: yk,
        isUserContextUpdating: lk
      } = (0, wk.d)(), [tk, Zk] = (0, Xk.useState)(null), [jk, Jk] = (0, Xk.useState)(null), [Pk, Kk] = (0, Xk.useState)(0), Qk = (0, Xk.useRef)(0);

      function sk() {
        var kk;
        null !== (kk = (0, qk.getPreviousLocation)()) && void 0 !== kk && kk.startsWith(zk.X) ? Ik(-1) : Ik(zk.X)
      }(0, ek.b)(sk), (0, bk.c)(), (0, Xk.useEffect)((() => {
        if (lk || void 0 === ik) return;
        const kk = ++Qk.current;
        Jk(null), Hk.e.getShaderPack(yk, ik).then((Fk => {
          Qk.current === kk && Zk(Fk)
        })).catch((Fk => {
          Qk.current === kk && (console.error("Failed to get the shader pack", Fk), Zk(null), Jk({
            error: Fk
          }))
        }))
      }), [ik, yk, lk, Pk]);
      const Vk = () => {
          Kk((kk => kk + 1))
        },
        vk = (null === tk || void 0 === tk ? void 0 : tk.packId) === ik ? tk : null,
        Ok = (0, bk.i)(),
        nk = gk(null !== (kk = null === vk || void 0 === vk ? void 0 : vk.live) && void 0 !== kk ? kk : null),
        Gk = null !== vk && void 0 !== vk && vk.live ? (0, Sk.jsx)(rk, {
          item: vk.live,
          favourites: Ok,
          packUse: nk
        }) : null;
      return (0, Sk.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Sk.jsx)(Lk.c, {
          onClick: sk,
          children: Fk("shaderPackListing:backToPacks")
        }), null === vk && null === jk && (0, Sk.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Sk.jsx)(ak.c, {})
        }), null !== jk && (0, Sk.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, zk.C)(jk.error, Fk, "shaderPackListing:loadPackFailed"), (0, Sk.jsx)(Lk.d, {
            onClick: Vk,
            children: Fk("general:tryAgain")
          })]
        }), null !== vk && null === jk && (0, Sk.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Sk.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Sk.jsx)("h1", {
              className: "FullyFancyText",
              children: vk.name
            }), Gk]
          }), vk.live && (0, Sk.jsx)(Ck, {
            item: vk.live
          }), vk.live && (0, Sk.jsx)(Dk, {
            item: vk.live,
            ownerPreview: vk.ownerPreview,
            bloxdhubSlug: vk.bloxdhubSlug,
            actions: Gk
          }), vk.owner && (0, Sk.jsx)(Ek, {
            details: vk,
            owner: vk.owner,
            onChanged: Vk
          })]
        })]
      })
    }

    function rk(kk) {
      let {
        item: Fk,
        favourites: Ik,
        packUse: Xk
      } = kk;
      const Tk = Ik.isFavourite(Fk.packId);
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Jk.featureFlags.settings.canUseShaderPacks && (0, Sk.jsx)(mk, {
          packUse: Xk
        }), (0, Sk.jsx)(Lk.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Ik.toggle(Fk.packId)
          },
          isLiked: !0 === Tk,
          isLoading: null === Tk
        })]
      })
    }

    function Dk(kk) {
      let {
        item: Fk,
        ownerPreview: Ik,
        bloxdhubSlug: Xk,
        actions: Tk
      } = kk;
      const {
        t: lk
      } = (0, xk.y)(), ak = (0, jk.o)(), Lk = null === Xk ? null : (0, ik.e)(Xk);
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Fk.description && (0, Sk.jsx)("p", {
          className: "ShaderPackDescription",
          children: Fk.description
        }), (0, Sk.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Ik || null !== Lk) && (0, Sk.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Ik ? (0, Sk.jsxs)(Sk.Fragment, {
              children: [(0, Sk.jsx)(Zk.g, {
                playerSocialPreview: Ik,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Lk && (0, Sk.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Lk,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Sk.jsx)("img", {
                  src: Pk,
                  alt: ik.d
                })
              })]
            }) : (0, Sk.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Lk,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [ik.d, (0, Sk.jsx)("img", {
                src: Pk,
                alt: ""
              })]
            })
          }), zk.E.filter((kk => Fk.features.includes(kk))).map((kk => (0, Sk.jsx)(qk.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, zk.O)(kk),
            children: lk(zk.R[kk])
          }, kk)))]
        }), Tk, (0, Sk.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: lk("shaderPackListing:downloads")
            }), (0, Sk.jsx)("dd", {
              children: (0, yk.Q)(Fk.downloads)
            })]
          }), (0, Sk.jsx)(Mk, {
            label: lk("shaderPackListing:updated"),
            time: Fk.listedUpdatedAt,
            now: ak
          }), (0, Sk.jsx)(Mk, {
            label: lk("shaderPackListing:created"),
            time: Fk.publishedAt,
            now: ak
          }), null !== Fk.gpuCost && (0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: lk("shaderPackListing:lag")
            }), (0, Sk.jsx)("dd", {
              children: lk("shaderPackListing:lagPercent", {
                percent: String((0, zk.W)(Fk.gpuCost))
              })
            })]
          }), (0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: lk("shaderPackListing:size")
            }), (0, Sk.jsx)("dd", {
              children: lk("shaderPackListing:sizeValue", {
                kilobytes: String((0, zk.V)(Fk.sourceBytes))
              })
            })]
          }), (0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: lk("shaderPackListing:files")
            }), (0, Sk.jsx)("dd", {
              children: Fk.fileCount
            })]
          })]
        })]
      })
    }

    function Mk(kk) {
      let {
        label: Fk,
        time: Ik,
        now: Xk
      } = kk;
      const {
        t: Tk,
        selectedLanguage: ik
      } = (0, xk.y)(), yk = new Date(Ik);
      let ak = yk.toLocaleDateString();
      if (Xk - Ik <= 30 * lk.i) {
        const kk = (0, xk.l)(ik.code, "shaderPackListing:timeAgo");
        ak = Tk("shaderPackListing:timeAgo", {
          time: (0, lk.gb)(kk, Ik, Xk)
        })
      }
      return (0, Sk.jsx)(tk.g, {
        tooltipInner: yk.toLocaleString(),
        children: (0, Sk.jsxs)("div", {
          children: [(0, Sk.jsx)("dt", {
            children: Fk
          }), (0, Sk.jsx)("dd", {
            children: ak
          })]
        })
      })
    }
  },
  5016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1096);

    function yk(kk) {
      let {
        options: Fk,
        value: Ik,
        onChange: Xk,
        ariaLabel: yk,
        className: lk,
        reselectable: ak = !1,
        keepsFocus: qk = !1,
        padTabs: Lk
      } = kk;
      const tk = void 0 !== Lk;
      return (0, ik.jsx)("div", {
        className: Tk()("SegmentedToggle", lk),
        role: "group",
        "aria-label": yk,
        "data-pad-tabs": Lk,
        children: Fk.map((kk => {
          const Fk = kk.value === Ik;
          return (0, ik.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "data-pad-tab": tk || void 0,
            "data-pad-selected": tk && Fk ? "true" : void 0,
            "data-pad-default-focus": tk && Fk || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: Tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: qk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !ak || Xk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  5022: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      g: () => yk
    });
    var Xk = Ik(58);
    const Tk = new WeakMap,
      ik = kk => {
        var Fk;
        const Ik = kk.closest("[data-pad-slider]");
        return Ik && null !== (Fk = Tk.get(Ik)) && void 0 !== Fk ? Fk : null
      },
      yk = (kk, Fk) => {
        const Ik = (0, Xk.useRef)(Fk);
        Ik.current = Fk, (0, Xk.useEffect)((() => {
          if (kk.current) return ((kk, Fk) => (Tk.set(kk, Fk), () => {
            Tk.get(kk) === Fk && Tk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              Ik.current.adjust(kk)
            },
            setFraction: kk => {
              Ik.current.setFraction(kk)
            },
            endDrag: () => {
              Ik.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  6644: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(41);
    const Tk = "shaderPack";
    async function ik() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);