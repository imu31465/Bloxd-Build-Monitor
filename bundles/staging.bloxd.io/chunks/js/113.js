export const id = 113;
export const ids = [113];
export const modules = {
  5155: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ft,
      e: () => bt,
      f: () => wt,
      j: () => Mt
    });
    var Ot = Vt(63),
      qt = Vt(5162),
      Dt = Vt(4475),
      mt = Vt(1464),
      dt = Vt(5186),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(1450),
      Qt = Vt(1826),
      lt = Vt(5194),
      Et = Vt(1188);

    function ft(tt) {
      let {
        label: et,
        onClick: Vt,
        checked: Ot,
        circleInfoText: qt,
        className: dt,
        disabled: jt,
        note: Xt
      } = tt;
      return (0, Et.jsxs)("div", {
        "aria-disabled": jt || void 0,
        "data-pad-focusable": !0,
        className: Ht()("SettingBox CheckboxContainer", {
          [dt]: dt,
          SettingBoxDisabled: jt
        }),
        onClick: () => {
          jt || Vt(!Ot)
        },
        children: [(0, Et.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Et.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Et.jsx)(Dt.b, {
              className: "SettingsCheckbox",
              checked: Ot,
              disabled: jt,
              onChange: () => {}
            })
          }), (0, Et.jsxs)("div", {
            className: "CheckboxText",
            children: [et, qt && (0, Et.jsx)("span", {
              onClick: tt => tt.stopPropagation(),
              children: (0, Et.jsx)(mt.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qt
              })
            })]
          })]
        }), Xt && (0, Et.jsx)("div", {
          className: "SettingNote",
          children: Xt
        })]
      })
    }

    function wt(tt) {
      let {
        name: et,
        onChange: Vt,
        min: qt,
        max: Dt,
        step: dt,
        initValue: jt,
        circleInfoText: Xt,
        format: Qt,
        className: lt,
        padStep: ft,
        disabled: wt = !1,
        selectableMax: yt,
        cappedNote: Mt,
        onChangeComplete: bt
      } = tt;
      const [Jt, Ct] = (0, Ot.useState)(jt), ut = (0, Ot.useRef)(jt);
      (0, Ot.useEffect)((() => {
        ut.current = jt, Ct(jt)
      }), [jt]);
      const Kt = void 0 !== yt && yt < Dt,
        ht = Kt ? {
          "--slider-selectable": (yt - qt) / (Dt - qt)
        } : void 0;
      return (0, Et.jsxs)("div", {
        className: Ht()("SettingBox SettingsSliderDiv", {
          [lt]: lt,
          SettingBoxDisabled: wt,
          SliderCapped: Kt
        }),
        style: ht,
        children: [(0, Et.jsxs)("div", {
          className: "SliderText",
          children: [`${et}: ${Qt?Qt(Jt):Jt}`, Xt && (0, Et.jsx)(mt.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Xt
          })]
        }), (0, Et.jsx)("div", {
          className: "SliderDiv",
          children: (0, Et.jsx)(Nt, {
            value: Jt,
            min: qt,
            max: Dt,
            step: dt,
            onChange: tt => {
              if (Kt && tt >= yt && Jt === yt) return;
              const et = Kt ? Math.min(tt, yt) : tt;
              ut.current = et, Ct(et), Vt(et)
            },
            onChangeComplete: bt && (() => {
              bt(ut.current)
            }),
            format: Qt,
            padStep: ft,
            disabled: wt
          })
        }), Kt && Mt && (0, Et.jsx)("div", {
          className: "SettingNote",
          children: Mt
        })]
      })
    }
    const yt = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Nt(tt) {
      var et;
      let {
        value: Vt,
        min: Dt,
        max: mt,
        step: dt,
        onChange: jt,
        orientation: Ht,
        reverse: Xt,
        setIsChanging: Qt,
        tooltip: ft,
        labels: wt,
        handleLabel: Nt,
        format: Mt,
        onChangeStart: bt,
        onChangeComplete: Jt,
        padStep: Ct,
        disabled: ut = !1
      } = tt;
      const Kt = (0, Ot.useRef)(null),
        ht = (0, Ot.useRef)(null);
      (0, Ot.useLayoutEffect)((() => {
        var tt, et, Vt;
        const Ot = null !== (tt = null === (et = Kt.current) || void 0 === et ? void 0 : et.querySelector(".rangeslider")) && void 0 !== tt ? tt : null;
        null === Ot || void 0 === Ot || Ot.setAttribute("data-pad-slider", ""), null === Ot || void 0 === Ot || Ot.setAttribute("data-pad-focusable", ""), null === Ot || void 0 === Ot || null === (Vt = Ot.querySelector(".rangeslider__handle")) || void 0 === Vt || Vt.setAttribute("data-pad-slider-handle", ""), ht.current = Ot
      }), []), (0, Ot.useLayoutEffect)((() => {
        var tt, et;
        ut ? null === (tt = ht.current) || void 0 === tt || tt.setAttribute("aria-disabled", "true") : null === (et = ht.current) || void 0 === et || et.removeAttribute("aria-disabled")
      }), [ut]);
      const vt = (null !== (et = String(dt).split(".")[1]) && void 0 !== et ? et : "").length,
        Wt = tt => {
          const et = Number((Math.round((tt - Dt) / dt) * dt + Dt).toFixed(vt));
          return Math.min(mt, Math.max(Dt, et))
        },
        St = (0, Ot.useRef)(Jt);
      St.current = Jt, (0, Ot.useEffect)((() => {
        const tt = Kt.current;
        if (!tt) return;
        const et = tt => {
          var et;
          yt.has(tt.key) && (null === (et = St.current) || void 0 === et || et.call(St))
        };
        return tt.addEventListener("keyup", et), () => {
          tt.removeEventListener("keyup", et)
        }
      }), []);
      const ct = (0, Ot.useRef)(!1);
      return (0, lt.i)(ht, {
        adjust: tt => {
          if (ut) return;
          const et = null !== Ct && void 0 !== Ct ? Ct : Math.max(dt, Math.round((mt - Dt) / 20 / dt) * dt),
            Ot = Wt(Vt + tt * et * (Xt ? -1 : 1));
          Ot !== Vt && (null === bt || void 0 === bt || bt(), jt(Ot), null === Jt || void 0 === Jt || Jt())
        },
        setFraction: tt => {
          if (ut) return;
          const et = Wt(Dt + (Xt ? 1 - tt : tt) * (mt - Dt));
          et !== Vt && (ct.current || (ct.current = !0, null === bt || void 0 === bt || bt()), jt(et))
        },
        endDrag: () => {
          ct.current && (ct.current = !1, null === Jt || void 0 === Jt || Jt())
        }
      }), (0, Et.jsx)("div", {
        ref: Kt,
        style: {
          display: "contents"
        },
        children: (0, Et.jsx)(qt.d, {
          value: Vt,
          min: Dt,
          max: mt,
          step: dt,
          onChange: jt,
          orientation: Ht,
          reverse: Xt,
          tooltip: ft,
          labels: wt,
          handleLabel: Nt,
          format: Mt,
          onChangeStart: () => {
            null === bt || void 0 === bt || bt(), null === Qt || void 0 === Qt || Qt(!0)
          },
          onChangeComplete: () => {
            null === Qt || void 0 === Qt || Qt(!1), null === Jt || void 0 === Jt || Jt()
          }
        })
      })
    }
    async function Mt() {
      const tt = Xt.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await tt.getResult() && (0, Qt.reloadBloxd)()
    }

    function bt(tt) {
      let {
        label: et,
        options: Vt,
        value: Ot,
        onChange: qt,
        circleInfoText: Dt
      } = tt;
      return (0, Et.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Et.jsxs)("div", {
          className: "SliderText",
          children: [et, Dt && (0, Et.jsx)(mt.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Dt
          })]
        }), (0, Et.jsx)(dt.c, {
          ariaLabel: et,
          options: Vt,
          value: Ot,
          onChange: qt
        })]
      })
    }
  },
  6881: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => st
    });
    var Ot = Vt(63),
      qt = Vt(1623),
      Dt = Vt(6756),
      mt = Vt(1308),
      dt = Vt(391),
      jt = Vt(1641),
      Ht = Vt(1436),
      Xt = Vt(1613),
      Qt = Vt(1556),
      lt = Vt(1464),
      Et = Vt(1709),
      ft = Vt(2693),
      wt = Vt(2807),
      yt = Vt(4689),
      Nt = Vt(1218),
      Mt = Vt(1600),
      bt = Vt(106),
      Jt = Vt(1286);
    const Ct = Vt.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var ut = Vt(1140),
      Kt = Vt.n(ut),
      ht = Vt(1152),
      vt = Vt(1450),
      Wt = Vt(6754),
      St = Vt(1188);
    const ct = (0, Ot.lazy)((() => Promise.all([Vt.e(109), Vt.e(78), Vt.e(136), Vt.e(135), Vt.e(114), Vt.e(402)]).then((() => Vt(6797))).then((tt => ({
      default: tt.ShaderPackPublishForm
    })))));

    function Rt(tt) {
      let {
        details: et,
        owner: Vt,
        onChanged: qt
      } = tt;
      const {
        t: mt
      } = (0, Jt.H)(), dt = (0, Xt.useNavigatePreserveSearch)(), {
        userContext: jt
      } = (0, Nt.d)(), [lt, Et] = (0, Ot.useState)(!1), [ft, wt] = (0, Ot.useState)(null), [yt, bt] = (0, Ot.useState)(!1), {
        packId: Ct,
        name: ut,
        description: Rt,
        live: It
      } = et;
      async function Pt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt;
        Et(!0), wt(null);
        try {
          await tt(), et()
        } catch (Vt) {
          console.error("Failed to change a shader pack", Vt), wt((0, Wt.z)(Vt, mt, "shaderPackListing:ownerActionFailed"))
        } finally {
          Et(!1)
        }
      }
      const Zt = (0, Wt.s)(jt);
      return (0, St.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, St.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: mt("general:manage")
        }), (0, Wt._)(Vt, !(null === It || void 0 === It || !It.renderId), Date.now(), mt).map((tt => (0, St.jsxs)("div", {
          className: Kt()("ShaderPackOwnerNotice", {
            Warning: "warning" === tt.tone
          }),
          children: [(0, St.jsx)(ht.b, {
            name: "warning" === tt.tone ? "triangle-exclamation" : "circle-info"
          }), (0, St.jsxs)("div", {
            children: [tt.text, tt.detail && (0, St.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: tt.detail
            })]
          })]
        }, tt.text))), et.ban && (0, St.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, St.jsx)(ht.b, {
            name: "ban"
          }), (0, St.jsxs)("div", {
            children: ["Banned by ", et.ban.byName, " on ", new Date(et.ban.at).toLocaleString()]
          })]
        }), ft && (0, St.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: ft
        }), (0, St.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, St.jsxs)(Qt.Q, {
            disabled: lt,
            onClick: () => {
              !async function() {
                const tt = await vt.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: ut,
                  maxLength: Dt.B,
                  submitText: "general:save",
                  validate: tt => tt.trim().length < Dt.E ? mt("shaderPackListing:nameTooShort", {
                    min: String(Dt.E)
                  }) : null
                }).getResult();
                "notificationTornDown" !== tt && "submit" === (null === tt || void 0 === tt ? void 0 : tt.type) && tt.value.trim() !== ut && await Pt((() => Mt.e.updateShaderPack(jt, {
                  packId: Ct,
                  name: tt.value.trim()
                })))
              }()
            },
            children: [(0, St.jsx)(ht.b, {
              name: "pen"
            }), " ", mt("shaderPackListing:rename")]
          }), (0, St.jsxs)(Qt.Q, {
            disabled: lt,
            onClick: () => {
              !async function() {
                const tt = await vt.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Rt,
                  maxLength: Dt.u,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== tt && "submit" === (null === tt || void 0 === tt ? void 0 : tt.type) && tt.value.trim() !== Rt && await Pt((() => Mt.e.updateShaderPack(jt, {
                  packId: Ct,
                  description: tt.value.trim()
                })))
              }()
            },
            children: [(0, St.jsx)(ht.b, {
              name: "file-lines"
            }), " ", mt("shaderPackListing:editDescription")]
          }), (0, St.jsxs)(Qt.Q, {
            disabled: lt || Vt.isBanned && !Vt.listed,
            onClick: () => {
              Pt((() => Mt.e.updateShaderPack(jt, {
                packId: Ct,
                listed: !Vt.listed
              })))
            },
            children: [(0, St.jsx)(ht.b, {
              name: Vt.listed ? "eye-slash" : "eye"
            }), " ", mt(Vt.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Vt.isBanned && (0, St.jsxs)(Qt.f, {
            disabled: lt,
            onClick: () => {
              bt(!yt)
            },
            children: [(0, St.jsx)(ht.b, {
              name: "upload"
            }), " ", mt("shaderPackListing:uploadVersion")]
          }), (0, St.jsxs)(Qt.K, {
            disabled: lt || Vt.isBanned,
            onClick: () => {
              !async function() {
                !0 === await vt.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Pt((() => Mt.e.deleteShaderPack(jt, Ct)), (() => {
                  dt(`${Wt.Z}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, St.jsx)(ht.b, {
              name: "trash-can"
            }), " ", mt("general:delete")]
          }), Zt && (0, St.jsxs)(Qt.K, {
            disabled: lt,
            onClick: () => {
              Pt((() => Mt.e.setShaderPackBanned(jt, Ct, !Vt.isBanned)))
            },
            children: [(0, St.jsx)(ht.b, {
              name: Vt.isBanned ? "circle-check" : "ban"
            }), " ", Vt.isBanned ? "Unban" : "Ban"]
          })]
        }), yt && (0, St.jsx)(Ot.Suspense, {
          fallback: (0, St.jsx)(Ht.b, {}),
          children: (0, St.jsx)(ct, {
            existing: {
              packId: Ct,
              name: ut,
              description: Rt
            },
            onPublished: () => {
              bt(!1), qt()
            }
          })
        })]
      })
    }
    var It = Vt(83),
      Pt = Vt(1993),
      Zt = Vt(1371),
      Lt = Vt(5194),
      Ft = Vt(1293),
      kt = Vt(6772),
      Gt = Vt(6763),
      zt = Vt(6785);

    function ot(tt) {
      let {
        item: et
      } = tt;
      const {
        t: Vt
      } = (0, Jt.H)(), [qt] = (0, kt.g)(), [mt, dt] = (0, Ot.useState)(qt), [jt, Ht] = (0, Ot.useState)(!1), [Xt, Qt] = (0, Ot.useState)(!1), {
        s3Url: lt
      } = Ft.clientSideServerUrls, {
        width: Et,
        height: ft
      } = Dt.v.large, wt = (0, Dt.w)(lt, et, mt, "large"), {
        renderVersion: yt
      } = et;
      return (0, St.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, St.jsx)(zt.d, {
          selected: mt,
          onSelect: tt => {
            dt(tt), Ht(!1)
          },
          imageUrl: tt => (0, Dt.w)(lt, et, tt, "thumb")
        }), (0, St.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!jt && (0, St.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === yt ? void 0 : Vt("shaderPackListing:fullSize"),
            disabled: null === yt,
            onClick: () => {
              Qt(!0)
            },
            children: [(0, St.jsx)("img", {
              src: wt,
              width: Et,
              height: ft,
              alt: Vt(Wt.lb[mt]),
              draggable: !1
            }), (0, St.jsx)(Gt.b, {
              item: et
            })]
          }), !jt && null !== yt && (0, St.jsxs)(it, {
            side: "Right",
            onClick: () => {
              Ht(!0)
            },
            children: [(0, St.jsx)(ht.b, {
              name: "arrows-left-right"
            }), " ", Vt("shaderPackListing:compare")]
          }), jt && null !== yt && (0, St.jsx)(At, {
            item: et,
            packUrl: wt,
            baselineUrl: (0, Dt.t)(lt, yt, mt, "large")
          }), jt && (0, St.jsx)(it, {
            side: "Left",
            onClick: () => {
              Ht(!1)
            },
            children: Vt("shaderPackListing:withPack")
          }), jt && (0, St.jsx)(it, {
            side: "Right",
            onClick: () => {
              Ht(!1)
            },
            children: Vt("shaderPackListing:withoutPack")
          })]
        }), Xt && (0, St.jsx)(rt, {
          fullUrl: (0, Dt.w)(lt, et, mt, "full"),
          largeUrl: wt,
          alt: Vt(Wt.lb[mt]),
          onClose: () => {
            Qt(!1)
          }
        })]
      })
    }

    function rt(tt) {
      let {
        fullUrl: et,
        largeUrl: Vt,
        alt: qt,
        onClose: Dt
      } = tt;
      const mt = (0, Ot.useRef)(null);
      return (0, Zt.w)("popup", mt, Dt), (0, Ot.useEffect)((() => {
        function tt(tt) {
          "Escape" === tt.key && (tt.stopPropagation(), Dt())
        }
        return window.addEventListener("keydown", tt, !0), () => {
          window.removeEventListener("keydown", tt, !0)
        }
      }), [Dt]), (0, It.createPortal)((0, St.jsxs)("div", {
        ref: mt,
        className: "ShaderPackFullSize",
        onClick: Dt,
        children: [(0, St.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: et,
          alt: qt,
          draggable: !1,
          style: {
            backgroundImage: `url(${Vt})`
          }
        }), (0, St.jsx)(Qt.j, {
          className: "ShaderPackFullSizeClose",
          onClick: Dt
        })]
      }), document.body)
    }
    const Ut = 5;

    function At(tt) {
      let {
        item: et,
        packUrl: Vt,
        baselineUrl: qt
      } = tt;
      const {
        t: mt
      } = (0, Jt.H)(), [dt, jt] = (0, Ot.useState)(50), Ht = (0, Ot.useRef)(!1), Xt = (0, Ot.useRef)(null), {
        width: Qt,
        height: lt
      } = Dt.v.large;

      function Et(tt) {
        jt((et => (0, Pt.e)(et + tt, 0, 100)))
      }

      function ft(tt) {
        const et = tt.currentTarget.getBoundingClientRect();
        jt((0, Pt.e)((tt.clientX - et.left) / et.width * 100, 0, 100))
      }
      return (0, Lt.i)(Xt, {
        adjust: tt => {
          Et(tt * Ut)
        },
        setFraction: tt => {
          jt(100 * tt)
        },
        endDrag: () => {}
      }), (0, St.jsxs)("div", {
        ref: Xt,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": mt("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(dt),
        style: {
          "--split": `${dt}%`
        },
        onKeyDown: function(tt) {
          const et = "ArrowLeft" === tt.key ? -Ut : "ArrowRight" === tt.key ? Ut : 0;
          0 !== et && (tt.preventDefault(), Et(et))
        },
        onPointerDown: tt => {
          Ht.current = !0, tt.currentTarget.setPointerCapture(tt.pointerId), ft(tt)
        },
        onPointerMove: tt => {
          Ht.current && ft(tt)
        },
        onPointerUp: () => {
          Ht.current = !1
        },
        onPointerCancel: () => {
          Ht.current = !1
        },
        children: [(0, St.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: qt,
          width: Qt,
          height: lt,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Vt})`
          }
        }), (0, St.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, St.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Vt,
          width: Qt,
          height: lt,
          alt: "",
          draggable: !1
        }), (0, St.jsx)(Gt.b, {
          item: et,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function it(tt) {
      let {
        side: et,
        onClick: Vt,
        children: Ot
      } = tt;
      return (0, St.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${et}`,
        onClick: Vt,
        children: (0, St.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Ot
        })
      })
    }
    var Yt = Vt(5155),
      Bt = Vt(366),
      pt = Vt(6873);
    const xt = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Tt(tt) {
      const {
        userContext: et
      } = (0, Nt.d)(), [qt, Dt] = (0, Ot.useState)(null), [mt, dt] = (0, Ot.useState)(!1), [jt, Ht] = (0, Ot.useState)(!1), [Xt, Qt] = (0, Ot.useState)(null), lt = null === tt || void 0 === tt ? void 0 : tt.packId, Et = null === tt || void 0 === tt ? void 0 : tt.sourceHash;
      return (0, Ot.useEffect)((() => {
        if (dt(!1), Qt(null), void 0 === lt) return;
        let tt = !1;
        return Promise.all([(0, bt.hasUsableWebGpuAdapter)(), (0, pt.g)()]).then((et => {
          let [Vt, Ot] = et;
          var qt;
          tt || (Dt(Vt), dt((null === Ot || void 0 === Ot || null === (qt = Ot.listing) || void 0 === qt ? void 0 : qt.packId) === lt && Ot.listing.sourceHash === Et))
        })).catch((et => {
          console.error("Failed to check whether this shader pack can be used", et), tt || Dt(!1)
        })), () => {
          tt = !0
        }
      }), [lt, Et]), {
        webGpuUsable: qt,
        inUse: mt,
        busy: jt,
        errorKey: Xt,
        use: () => {
          null !== tt && async function(tt) {
            Ht(!0), Qt(null);
            try {
              const {
                installListedShaderPack: Ot
              } = await Promise.all([Vt.e(78), Vt.e(136), Vt.e(115)]).then((() => Vt(40682))), qt = await Ot({
                packId: tt.packId,
                sourceHash: tt.sourceHash,
                name: tt.name,
                ownerName: tt.ownerName,
                description: tt.description
              });
              if ("failed" === qt.kind) return void Qt(xt[qt.reason]);
              dt(!0), Mt.e.recordShaderPackDownload(et, tt.packId).catch((tt => {
                console.error("Failed to count a shader pack's download", tt)
              })), (0, Yt.j)()
            } catch (Ot) {
              console.error("Failed to use the shader pack", Ot), Qt("shaderPack:unexpectedError")
            } finally {
              Ht(!1)
            }
          }(tt)
        }
      }
    }

    function gt(tt) {
      let {
        packUse: et
      } = tt;
      const {
        t: Vt
      } = (0, Jt.H)(), {
        webGpuUsable: Ot,
        inUse: qt,
        busy: Dt,
        errorKey: mt,
        use: dt
      } = et;
      return (0, St.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, St.jsxs)(Qt.m, {
          disabled: !0 !== Ot || qt,
          loading: Dt,
          onClick: dt,
          children: [(0, St.jsx)(ht.b, {
            name: qt ? "check" : "download"
          }), " ", Vt(qt ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Ot && (0, St.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Vt((0, Bt.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), mt && (0, St.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Vt(mt)
        })]
      })
    }

    function st() {
      var tt;
      const {
        t: et
      } = (0, Jt.H)(), Vt = (0, Xt.useNavigatePreserveSearch)(), {
        packId: Dt
      } = (0, qt.B)(), {
        userContext: mt,
        isUserContextUpdating: dt
      } = (0, Nt.d)(), [lt, ft] = (0, Ot.useState)(null), [wt, bt] = (0, Ot.useState)(null), [Ct, ut] = (0, Ot.useState)(0), Kt = (0, Ot.useRef)(0);

      function ht() {
        var tt;
        null !== (tt = (0, Xt.getPreviousLocation)()) && void 0 !== tt && tt.startsWith(Wt.Z) ? Vt(-1) : Vt(Wt.Z)
      }(0, yt.b)(ht), (0, kt.e)(), (0, Ot.useEffect)((() => {
        if (dt || void 0 === Dt) return;
        const tt = ++Kt.current;
        bt(null), Mt.e.getShaderPack(mt, Dt).then((et => {
          Kt.current === tt && ft(et)
        })).catch((et => {
          Kt.current === tt && (console.error("Failed to get the shader pack", et), ft(null), bt({
            error: et
          }))
        }))
      }), [Dt, mt, dt, Ct]);
      const vt = () => {
          ut((tt => tt + 1))
        },
        ct = (null === lt || void 0 === lt ? void 0 : lt.packId) === Dt ? lt : null,
        It = (0, kt.h)(),
        Pt = Tt(null !== (tt = null === ct || void 0 === ct ? void 0 : ct.live) && void 0 !== tt ? tt : null),
        Zt = null !== ct && void 0 !== ct && ct.live ? (0, St.jsx)(nt, {
          item: ct.live,
          favourites: It,
          packUse: Pt
        }) : null;
      return (0, St.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== ct && (0, St.jsx)(Et.c, {
          meta: (0, jt.U)(ct.name)
        }), (0, St.jsx)(Qt.d, {
          onClick: ht,
          children: et("shaderPackListing:backToPacks")
        }), null === ct && null === wt && (0, St.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, St.jsx)(Ht.b, {})
        }), null !== wt && (0, St.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Wt.z)(wt.error, et, "shaderPackListing:loadPackFailed"), (0, St.jsx)(Qt.f, {
            onClick: vt,
            children: et("general:tryAgain")
          })]
        }), null !== ct && null === wt && (0, St.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, St.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, St.jsx)("h1", {
              className: "FullyFancyText",
              children: ct.name
            }), Zt]
          }), ct.live && (0, St.jsx)(ot, {
            item: ct.live
          }), ct.live && (0, St.jsx)(te, {
            item: ct.live,
            ownerPreview: ct.ownerPreview,
            bloxdhubSlug: ct.bloxdhubSlug,
            actions: Zt
          }), ct.owner && (0, St.jsx)(Rt, {
            details: ct,
            owner: ct.owner,
            onChanged: vt
          })]
        })]
      })
    }

    function nt(tt) {
      let {
        item: et,
        favourites: Vt,
        packUse: Ot
      } = tt;
      const qt = Vt.isFavourite(et.packId);
      return (0, St.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [bt.featureFlags.settings.canUseShaderPacks && (0, St.jsx)(gt, {
          packUse: Ot
        }), (0, St.jsx)(Qt.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Vt.toggle(et.packId)
          },
          isLiked: !0 === qt,
          isLoading: null === qt
        })]
      })
    }

    function te(tt) {
      let {
        item: et,
        ownerPreview: Vt,
        bloxdhubSlug: Ot,
        actions: qt
      } = tt;
      const {
        t: dt
      } = (0, Jt.H)(), jt = (0, wt.p)(), Ht = null === Ot ? null : (0, Dt.i)(Ot);
      return (0, St.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [et.description && (0, St.jsx)("p", {
          className: "ShaderPackDescription",
          children: et.description
        }), (0, St.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Vt || null !== Ht) && (0, St.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Vt ? (0, St.jsxs)(St.Fragment, {
              children: [(0, St.jsx)(ft.f, {
                playerSocialPreview: Vt,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Ht && (0, St.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Ht,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, St.jsx)("img", {
                  src: Ct,
                  alt: Dt.e
                })
              })]
            }) : (0, St.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Ht,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Dt.e, (0, St.jsx)("img", {
                src: Ct,
                alt: ""
              })]
            })
          }), Wt.B.filter((tt => et.features.includes(tt))).map((tt => (0, St.jsx)(Xt.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Wt.O)(tt),
            children: dt(Wt.Q[tt])
          }, tt)))]
        }), qt, (0, St.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, St.jsxs)("div", {
            children: [(0, St.jsx)("dt", {
              children: dt("shaderPackListing:downloads")
            }), (0, St.jsx)("dd", {
              children: (0, mt.S)(et.downloads)
            })]
          }), (0, St.jsx)(ee, {
            label: dt("shaderPackListing:updated"),
            time: et.listedUpdatedAt,
            now: jt
          }), (0, St.jsx)(ee, {
            label: dt("shaderPackListing:created"),
            time: et.publishedAt,
            now: jt
          }), null !== et.gpuCost && (0, St.jsxs)("div", {
            children: [(0, St.jsx)("dt", {
              children: dt("shaderPackListing:lag")
            }), (0, St.jsx)("dd", {
              children: dt("shaderPackListing:lagPercent", {
                percent: String((0, Wt.X)(et.gpuCost))
              })
            })]
          }), (0, St.jsxs)("div", {
            children: [(0, St.jsx)("dt", {
              children: dt("shaderPackListing:size")
            }), (0, St.jsx)("dd", {
              children: dt("shaderPackListing:sizeValue", {
                kilobytes: String((0, Wt.U)(et.sourceBytes))
              })
            })]
          }), (0, St.jsxs)("div", {
            children: [(0, St.jsx)("dt", {
              children: dt("shaderPackListing:files")
            }), (0, St.jsx)("dd", {
              children: et.fileCount
            })]
          })]
        })]
      })
    }

    function ee(tt) {
      let {
        label: et,
        time: Vt,
        now: Ot
      } = tt;
      const {
        t: qt,
        selectedLanguage: Dt
      } = (0, Jt.H)(), mt = new Date(Vt);
      let jt = mt.toLocaleDateString();
      if (Ot - Vt <= 30 * dt.l) {
        const tt = (0, Jt.o)(Dt.code, "shaderPackListing:timeAgo");
        jt = qt("shaderPackListing:timeAgo", {
          time: (0, dt.mb)(tt, Vt, Ot)
        })
      }
      return (0, St.jsx)(lt.g, {
        tooltipInner: mt.toLocaleString(),
        children: (0, St.jsxs)("div", {
          children: [(0, St.jsx)("dt", {
            children: et
          }), (0, St.jsx)("dd", {
            children: jt
          })]
        })
      })
    }
  },
  5186: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1188);

    function mt(tt) {
      let {
        options: et,
        value: Vt,
        onChange: Ot,
        ariaLabel: mt,
        className: dt,
        reselectable: jt = !1,
        keepsFocus: Ht = !1,
        padTabs: Xt
      } = tt;
      const Qt = void 0 !== Xt;
      return (0, Dt.jsx)("div", {
        className: qt()("SegmentedToggle", dt),
        role: "group",
        "aria-label": mt,
        "data-pad-tabs": Xt,
        children: et.map((tt => {
          const et = tt.value === Vt;
          return (0, Dt.jsx)("button", {
            type: "button",
            "aria-pressed": et,
            "data-pad-tab": Qt || void 0,
            "data-pad-selected": Qt && et ? "true" : void 0,
            "data-pad-default-focus": Qt && et || void 0,
            "aria-label": tt.ariaLabel,
            title: tt.ariaLabel,
            className: qt()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: et
            }),
            onMouseDown: Ht ? tt => {
              tt.preventDefault()
            } : void 0,
            onClick: () => {
              et && !jt || Ot(tt.value)
            },
            children: tt.label
          }, tt.value)
        }))
      })
    }
  },
  5194: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => mt
    });
    var Ot = Vt(63);
    const qt = new WeakMap,
      Dt = tt => {
        var et;
        const Vt = tt.closest("[data-pad-slider]");
        return Vt && null !== (et = qt.get(Vt)) && void 0 !== et ? et : null
      },
      mt = (tt, et) => {
        const Vt = (0, Ot.useRef)(et);
        Vt.current = et, (0, Ot.useEffect)((() => {
          if (tt.current) return ((tt, et) => (qt.set(tt, et), () => {
            qt.get(tt) === et && qt.delete(tt)
          }))(tt.current, {
            adjust: tt => {
              Vt.current.adjust(tt)
            },
            setFraction: tt => {
              Vt.current.setFraction(tt)
            },
            endDrag: () => {
              Vt.current.endDrag()
            }
          })
        }), [tt])
      }
  },
  6873: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(39);
    const qt = "shaderPack";
    async function Dt() {
      var tt;
      let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (tt = await Ot.c.getItem(qt, et)) && void 0 !== tt ? tt : null
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);