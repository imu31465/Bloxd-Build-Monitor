export const id = 110;
export const ids = [110];
export const modules = {
  4732: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => av,
      f: () => Gv,
      i: () => sv,
      l: () => cv
    });
    var hv = Pv(52),
      Sv = Pv(4738),
      ev = Pv(4129),
      gv = Pv(1344),
      pv = Pv(4765),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(1336),
      Tv = Pv(1692),
      Wv = Pv(4773),
      wv = Pv(1082);

    function av(vv) {
      let {
        label: zv,
        onClick: Pv,
        checked: hv,
        circleInfoText: Sv,
        className: pv,
        disabled: dv,
        note: lv
      } = vv;
      return (0, wv.jsxs)("div", {
        "aria-disabled": dv || void 0,
        "data-pad-focusable": !0,
        className: Nv()("SettingBox CheckboxContainer", {
          [pv]: pv,
          SettingBoxDisabled: dv
        }),
        onClick: () => {
          dv || Pv(!hv)
        },
        children: [(0, wv.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, wv.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, wv.jsx)(ev.e, {
              className: "SettingsCheckbox",
              checked: hv,
              disabled: dv,
              onChange: () => {}
            })
          }), (0, wv.jsxs)("div", {
            className: "CheckboxText",
            children: [zv, Sv && (0, wv.jsx)("span", {
              onClick: vv => vv.stopPropagation(),
              children: (0, wv.jsx)(gv.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Sv
              })
            })]
          })]
        }), lv && (0, wv.jsx)("div", {
          className: "SettingNote",
          children: lv
        })]
      })
    }

    function sv(vv) {
      let {
        name: zv,
        onChange: Pv,
        min: Sv,
        max: ev,
        step: pv,
        initValue: dv,
        circleInfoText: lv,
        format: Tv,
        className: Wv,
        padStep: av,
        disabled: sv = !1,
        selectableMax: Cv,
        cappedNote: cv,
        onChangeComplete: Gv
      } = vv;
      const [mv, jv] = (0, hv.useState)(dv), fv = (0, hv.useRef)(dv);
      (0, hv.useEffect)((() => {
        fv.current = dv, jv(dv)
      }), [dv]);
      const Fv = void 0 !== Cv && Cv < ev,
        Yv = Fv ? {
          "--slider-selectable": (Cv - Sv) / (ev - Sv)
        } : void 0;
      return (0, wv.jsxs)("div", {
        className: Nv()("SettingBox SettingsSliderDiv", {
          [Wv]: Wv,
          SettingBoxDisabled: sv,
          SliderCapped: Fv
        }),
        style: Yv,
        children: [(0, wv.jsxs)("div", {
          className: "SliderText",
          children: [`${zv}: ${Tv?Tv(mv):mv}`, lv && (0, wv.jsx)(gv.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: lv
          })]
        }), (0, wv.jsx)("div", {
          className: "SliderDiv",
          children: (0, wv.jsx)(iv, {
            value: mv,
            min: Sv,
            max: ev,
            step: pv,
            onChange: vv => {
              if (Fv && vv >= Cv && mv === Cv) return;
              const zv = Fv ? Math.min(vv, Cv) : vv;
              fv.current = zv, jv(zv), Pv(zv)
            },
            onChangeComplete: Gv && (() => {
              Gv(fv.current)
            }),
            format: Tv,
            padStep: av,
            disabled: sv
          })
        }), Fv && cv && (0, wv.jsx)("div", {
          className: "SettingNote",
          children: cv
        })]
      })
    }
    const Cv = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function iv(vv) {
      var zv;
      let {
        value: Pv,
        min: ev,
        max: gv,
        step: pv,
        onChange: dv,
        orientation: Nv,
        reverse: lv,
        setIsChanging: Tv,
        tooltip: av,
        labels: sv,
        handleLabel: iv,
        format: cv,
        onChangeStart: Gv,
        onChangeComplete: mv,
        padStep: jv,
        disabled: fv = !1
      } = vv;
      const Fv = (0, hv.useRef)(null),
        Yv = (0, hv.useRef)(null);
      (0, hv.useLayoutEffect)((() => {
        var vv, zv, Pv;
        const hv = null !== (vv = null === (zv = Fv.current) || void 0 === zv ? void 0 : zv.querySelector(".rangeslider")) && void 0 !== vv ? vv : null;
        null === hv || void 0 === hv || hv.setAttribute("data-pad-slider", ""), null === hv || void 0 === hv || hv.setAttribute("data-pad-focusable", ""), null === hv || void 0 === hv || null === (Pv = hv.querySelector(".rangeslider__handle")) || void 0 === Pv || Pv.setAttribute("data-pad-slider-handle", ""), Yv.current = hv
      }), []), (0, hv.useLayoutEffect)((() => {
        var vv, zv;
        fv ? null === (vv = Yv.current) || void 0 === vv || vv.setAttribute("aria-disabled", "true") : null === (zv = Yv.current) || void 0 === zv || zv.removeAttribute("aria-disabled")
      }), [fv]);
      const nv = (null !== (zv = String(pv).split(".")[1]) && void 0 !== zv ? zv : "").length,
        Ov = vv => {
          const zv = Number((Math.round((vv - ev) / pv) * pv + ev).toFixed(nv));
          return Math.min(gv, Math.max(ev, zv))
        },
        Dv = (0, hv.useRef)(mv);
      Dv.current = mv, (0, hv.useEffect)((() => {
        const vv = Fv.current;
        if (!vv) return;
        const zv = vv => {
          var zv;
          Cv.has(vv.key) && (null === (zv = Dv.current) || void 0 === zv || zv.call(Dv))
        };
        return vv.addEventListener("keyup", zv), () => {
          vv.removeEventListener("keyup", zv)
        }
      }), []);
      const Kv = (0, hv.useRef)(!1);
      return (0, Wv.e)(Yv, {
        adjust: vv => {
          if (fv) return;
          const zv = null !== jv && void 0 !== jv ? jv : Math.max(pv, Math.round((gv - ev) / 20 / pv) * pv),
            hv = Ov(Pv + vv * zv * (lv ? -1 : 1));
          hv !== Pv && (null === Gv || void 0 === Gv || Gv(), dv(hv), null === mv || void 0 === mv || mv())
        },
        setFraction: vv => {
          if (fv) return;
          const zv = Ov(ev + (lv ? 1 - vv : vv) * (gv - ev));
          zv !== Pv && (Kv.current || (Kv.current = !0, null === Gv || void 0 === Gv || Gv()), dv(zv))
        },
        endDrag: () => {
          Kv.current && (Kv.current = !1, null === mv || void 0 === mv || mv())
        }
      }), (0, wv.jsx)("div", {
        ref: Fv,
        style: {
          display: "contents"
        },
        children: (0, wv.jsx)(Sv.d, {
          value: Pv,
          min: ev,
          max: gv,
          step: pv,
          onChange: dv,
          orientation: Nv,
          reverse: lv,
          tooltip: av,
          labels: sv,
          handleLabel: iv,
          format: cv,
          onChangeStart: () => {
            null === Gv || void 0 === Gv || Gv(), null === Tv || void 0 === Tv || Tv(!0)
          },
          onChangeComplete: () => {
            null === Tv || void 0 === Tv || Tv(!1), null === mv || void 0 === mv || mv()
          }
        })
      })
    }
    async function cv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const zv = lv.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: vv
      });
      !0 === await zv.getResult() && (0, Tv.reloadBloxd)()
    }

    function Gv(vv) {
      let {
        label: zv,
        options: Pv,
        value: hv,
        onChange: Sv,
        circleInfoText: ev
      } = vv;
      return (0, wv.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, wv.jsxs)("div", {
          className: "SliderText",
          children: [zv, ev && (0, wv.jsx)(gv.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ev
          })]
        }), (0, wv.jsx)(pv.c, {
          ariaLabel: zv,
          options: Pv,
          value: hv,
          onChange: Sv
        })]
      })
    }
  },
  6379: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => bv
    });
    var hv = Pv(52),
      Sv = Pv(1505),
      ev = Pv(6268),
      gv = Pv(1209),
      pv = Pv(312),
      dv = Pv(1327),
      Nv = Pv(1492),
      lv = Pv(1442),
      Tv = Pv(1344),
      Wv = Pv(2432),
      wv = Pv(2568),
      av = Pv(4310),
      sv = Pv(1108),
      Cv = Pv(1482),
      iv = Pv(73),
      cv = Pv(1175);
    const Gv = Pv.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var mv = Pv(1035),
      jv = Pv.n(mv),
      fv = Pv(1042),
      Fv = Pv(1336),
      Yv = Pv(6263),
      nv = Pv(1082);
    const Ov = (0, hv.lazy)((() => Promise.all([Pv.e(106), Pv.e(75), Pv.e(131), Pv.e(125), Pv.e(124)]).then((() => Pv(6302))).then((vv => ({
      default: vv.ShaderPackPublishForm
    })))));

    function Dv(vv) {
      let {
        details: zv,
        owner: Pv,
        onChanged: Sv
      } = vv;
      const {
        t: gv
      } = (0, cv.x)(), pv = (0, Nv.useNavigatePreserveSearch)(), {
        userContext: Tv
      } = (0, sv.d)(), [Wv, wv] = (0, hv.useState)(!1), [av, iv] = (0, hv.useState)(null), [Gv, mv] = (0, hv.useState)(!1), {
        packId: Dv,
        name: Kv,
        description: Vv,
        live: Uv
      } = zv;
      async function Rv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv;
        wv(!0), iv(null);
        try {
          await vv(), zv()
        } catch (Pv) {
          console.error("Failed to change a shader pack", Pv), iv((0, Yv.w)(Pv, gv, "shaderPackListing:ownerActionFailed"))
        } finally {
          wv(!1)
        }
      }
      const xv = (0, Yv.q)(Tv);
      return (0, nv.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, nv.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: gv("general:manage")
        }), (0, Yv.R)(Pv, !(null === Uv || void 0 === Uv || !Uv.renderId), Date.now(), gv).map((vv => (0, nv.jsxs)("div", {
          className: jv()("ShaderPackOwnerNotice", {
            Warning: "warning" === vv.tone
          }),
          children: [(0, nv.jsx)(fv.b, {
            name: "warning" === vv.tone ? "triangle-exclamation" : "circle-info"
          }), (0, nv.jsxs)("div", {
            children: [vv.text, vv.detail && (0, nv.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: vv.detail
            })]
          })]
        }, vv.text))), zv.ban && (0, nv.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, nv.jsx)(fv.b, {
            name: "ban"
          }), (0, nv.jsxs)("div", {
            children: ["Banned by ", zv.ban.byName, " on ", new Date(zv.ban.at).toLocaleString()]
          })]
        }), av && (0, nv.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: av
        }), (0, nv.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, nv.jsxs)(lv.K, {
            disabled: Wv,
            onClick: () => {
              !async function() {
                const vv = await Fv.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Kv,
                  maxLength: ev.A,
                  submitText: "general:save",
                  validate: vv => vv.trim().length < ev.B ? gv("shaderPackListing:nameTooShort", {
                    min: String(ev.B)
                  }) : null
                }).getResult();
                "notificationTornDown" !== vv && "submit" === (null === vv || void 0 === vv ? void 0 : vv.type) && vv.value.trim() !== Kv && await Rv((() => Cv.e.updateShaderPack(Tv, {
                  packId: Dv,
                  name: vv.value.trim()
                })))
              }()
            },
            children: [(0, nv.jsx)(fv.b, {
              name: "pen"
            }), " ", gv("shaderPackListing:rename")]
          }), (0, nv.jsxs)(lv.K, {
            disabled: Wv,
            onClick: () => {
              !async function() {
                const vv = await Fv.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Vv,
                  maxLength: ev.q,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== vv && "submit" === (null === vv || void 0 === vv ? void 0 : vv.type) && vv.value.trim() !== Vv && await Rv((() => Cv.e.updateShaderPack(Tv, {
                  packId: Dv,
                  description: vv.value.trim()
                })))
              }()
            },
            children: [(0, nv.jsx)(fv.b, {
              name: "file-lines"
            }), " ", gv("shaderPackListing:editDescription")]
          }), (0, nv.jsxs)(lv.K, {
            disabled: Wv || Pv.isBanned && !Pv.listed,
            onClick: () => {
              Rv((() => Cv.e.updateShaderPack(Tv, {
                packId: Dv,
                listed: !Pv.listed
              })))
            },
            children: [(0, nv.jsx)(fv.b, {
              name: Pv.listed ? "eye-slash" : "eye"
            }), " ", gv(Pv.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Pv.isBanned && (0, nv.jsxs)(lv.d, {
            disabled: Wv,
            onClick: () => {
              mv(!Gv)
            },
            children: [(0, nv.jsx)(fv.b, {
              name: "upload"
            }), " ", gv("shaderPackListing:uploadVersion")]
          }), (0, nv.jsxs)(lv.E, {
            disabled: Wv || Pv.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Fv.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Rv((() => Cv.e.deleteShaderPack(Tv, Dv)), (() => {
                  pv(`${Yv.O}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, nv.jsx)(fv.b, {
              name: "trash-can"
            }), " ", gv("general:delete")]
          }), xv && (0, nv.jsxs)(lv.E, {
            disabled: Wv,
            onClick: () => {
              Rv((() => Cv.e.setShaderPackBanned(Tv, Dv, !Pv.isBanned)))
            },
            children: [(0, nv.jsx)(fv.b, {
              name: Pv.isBanned ? "circle-check" : "ban"
            }), " ", Pv.isBanned ? "Unban" : "Ban"]
          })]
        }), Gv && (0, nv.jsx)(hv.Suspense, {
          fallback: (0, nv.jsx)(dv.c, {}),
          children: (0, nv.jsx)(Ov, {
            existing: {
              packId: Dv,
              name: Kv,
              description: Vv
            },
            onPublished: () => {
              mv(!1), Sv()
            }
          })
        })]
      })
    }
    var Kv = Pv(62),
      Vv = Pv(1855),
      Uv = Pv(1265),
      Rv = Pv(4773),
      xv = Pv(1184),
      tv = Pv(6278),
      qv = Pv(6276),
      Iv = Pv(6294);

    function Qv(vv) {
      let {
        item: zv
      } = vv;
      const {
        t: Pv
      } = (0, cv.x)(), [Sv] = (0, tv.h)(), [gv, pv] = (0, hv.useState)(Sv), [dv, Nv] = (0, hv.useState)(!1), [lv, Tv] = (0, hv.useState)(!1), {
        s3Url: Wv
      } = xv.clientSideServerUrls, {
        width: wv,
        height: av
      } = ev.t.large, sv = (0, ev.v)(Wv, zv, gv, "large"), {
        renderVersion: Cv
      } = zv;
      return (0, nv.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, nv.jsx)(Iv.c, {
          selected: gv,
          onSelect: vv => {
            pv(vv), Nv(!1)
          },
          imageUrl: vv => (0, ev.v)(Wv, zv, vv, "thumb")
        }), (0, nv.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!dv && (0, nv.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Cv ? void 0 : Pv("shaderPackListing:fullSize"),
            disabled: null === Cv,
            onClick: () => {
              Tv(!0)
            },
            children: [(0, nv.jsx)("img", {
              src: sv,
              width: wv,
              height: av,
              alt: Pv(Yv.cb[gv]),
              draggable: !1
            }), (0, nv.jsx)(qv.d, {
              item: zv
            })]
          }), !dv && null !== Cv && (0, nv.jsxs)(Hv, {
            side: "Right",
            onClick: () => {
              Nv(!0)
            },
            children: [(0, nv.jsx)(fv.b, {
              name: "arrows-left-right"
            }), " ", Pv("shaderPackListing:compare")]
          }), dv && null !== Cv && (0, nv.jsx)(Lv, {
            item: zv,
            packUrl: sv,
            baselineUrl: (0, ev.o)(Wv, Cv, gv, "large")
          }), dv && (0, nv.jsx)(Hv, {
            side: "Left",
            onClick: () => {
              Nv(!1)
            },
            children: Pv("shaderPackListing:withPack")
          }), dv && (0, nv.jsx)(Hv, {
            side: "Right",
            onClick: () => {
              Nv(!1)
            },
            children: Pv("shaderPackListing:withoutPack")
          })]
        }), lv && (0, nv.jsx)(Zv, {
          fullUrl: (0, ev.v)(Wv, zv, gv, "full"),
          largeUrl: sv,
          alt: Pv(Yv.cb[gv]),
          onClose: () => {
            Tv(!1)
          }
        })]
      })
    }

    function Zv(vv) {
      let {
        fullUrl: zv,
        largeUrl: Pv,
        alt: Sv,
        onClose: ev
      } = vv;
      const gv = (0, hv.useRef)(null);
      return (0, Uv.q)("popup", gv, ev), (0, hv.useEffect)((() => {
        function vv(vv) {
          "Escape" === vv.key && (vv.stopPropagation(), ev())
        }
        return window.addEventListener("keydown", vv, !0), () => {
          window.removeEventListener("keydown", vv, !0)
        }
      }), [ev]), (0, Kv.createPortal)((0, nv.jsxs)("div", {
        ref: gv,
        className: "ShaderPackFullSize",
        onClick: ev,
        children: [(0, nv.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: zv,
          alt: Sv,
          draggable: !1,
          style: {
            backgroundImage: `url(${Pv})`
          }
        }), (0, nv.jsx)(lv.i, {
          className: "ShaderPackFullSizeClose",
          onClick: ev
        })]
      }), document.body)
    }
    const Av = 5;

    function Lv(vv) {
      let {
        item: zv,
        packUrl: Pv,
        baselineUrl: Sv
      } = vv;
      const {
        t: gv
      } = (0, cv.x)(), [pv, dv] = (0, hv.useState)(50), Nv = (0, hv.useRef)(!1), lv = (0, hv.useRef)(null), {
        width: Tv,
        height: Wv
      } = ev.t.large;

      function wv(vv) {
        dv((zv => (0, Vv.e)(zv + vv, 0, 100)))
      }

      function av(vv) {
        const zv = vv.currentTarget.getBoundingClientRect();
        dv((0, Vv.e)((vv.clientX - zv.left) / zv.width * 100, 0, 100))
      }
      return (0, Rv.e)(lv, {
        adjust: vv => {
          wv(vv * Av)
        },
        setFraction: vv => {
          dv(100 * vv)
        },
        endDrag: () => {}
      }), (0, nv.jsxs)("div", {
        ref: lv,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": gv("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(pv),
        style: {
          "--split": `${pv}%`
        },
        onKeyDown: function(vv) {
          const zv = "ArrowLeft" === vv.key ? -Av : "ArrowRight" === vv.key ? Av : 0;
          0 !== zv && (vv.preventDefault(), wv(zv))
        },
        onPointerDown: vv => {
          Nv.current = !0, vv.currentTarget.setPointerCapture(vv.pointerId), av(vv)
        },
        onPointerMove: vv => {
          Nv.current && av(vv)
        },
        onPointerUp: () => {
          Nv.current = !1
        },
        onPointerCancel: () => {
          Nv.current = !1
        },
        children: [(0, nv.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Sv,
          width: Tv,
          height: Wv,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Pv})`
          }
        }), (0, nv.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, nv.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Pv,
          width: Tv,
          height: Wv,
          alt: "",
          draggable: !1
        }), (0, nv.jsx)(qv.d, {
          item: zv,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Hv(vv) {
      let {
        side: zv,
        onClick: Pv,
        children: hv
      } = vv;
      return (0, nv.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${zv}`,
        onClick: Pv,
        children: (0, nv.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: hv
        })
      })
    }
    var Mv = Pv(4732),
      yv = Pv(278),
      Bv = Pv(6377);
    const Jv = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Ev(vv) {
      const {
        userContext: zv
      } = (0, sv.d)(), [Sv, ev] = (0, hv.useState)(null), [gv, pv] = (0, hv.useState)(!1), [dv, Nv] = (0, hv.useState)(!1), [lv, Tv] = (0, hv.useState)(null), Wv = null === vv || void 0 === vv ? void 0 : vv.packId, wv = null === vv || void 0 === vv ? void 0 : vv.sourceHash;
      return (0, hv.useEffect)((() => {
        if (pv(!1), Tv(null), void 0 === Wv) return;
        let vv = !1;
        return Promise.all([(0, iv.hasUsableWebGpuAdapter)(), (0, Bv.g)()]).then((zv => {
          let [Pv, hv] = zv;
          var Sv;
          vv || (ev(Pv), pv((null === hv || void 0 === hv || null === (Sv = hv.listing) || void 0 === Sv ? void 0 : Sv.packId) === Wv && hv.listing.sourceHash === wv))
        })).catch((zv => {
          console.error("Failed to check whether this shader pack can be used", zv), vv || ev(!1)
        })), () => {
          vv = !0
        }
      }), [Wv, wv]), {
        webGpuUsable: Sv,
        inUse: gv,
        busy: dv,
        errorKey: lv,
        use: () => {
          null !== vv && async function(vv) {
            Nv(!0), Tv(null);
            try {
              const {
                installListedShaderPack: hv
              } = await Promise.all([Pv.e(75), Pv.e(131), Pv.e(126)]).then((() => Pv(39809))), Sv = await hv({
                packId: vv.packId,
                sourceHash: vv.sourceHash,
                name: vv.name,
                ownerName: vv.ownerName,
                description: vv.description
              });
              if ("failed" === Sv.kind) return void Tv(Jv[Sv.reason]);
              pv(!0), Cv.e.recordShaderPackDownload(zv, vv.packId).catch((vv => {
                console.error("Failed to count a shader pack's download", vv)
              })), (0, Mv.l)()
            } catch (hv) {
              console.error("Failed to use the shader pack", hv), Tv("shaderPack:unexpectedError")
            } finally {
              Nv(!1)
            }
          }(vv)
        }
      }
    }

    function ov(vv) {
      let {
        packUse: zv
      } = vv;
      const {
        t: Pv
      } = (0, cv.x)(), {
        webGpuUsable: hv,
        inUse: Sv,
        busy: ev,
        errorKey: gv,
        use: pv
      } = zv;
      return (0, nv.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, nv.jsxs)(lv.j, {
          disabled: !0 !== hv || Sv,
          loading: ev,
          onClick: pv,
          children: [(0, nv.jsx)(fv.b, {
            name: Sv ? "check" : "download"
          }), " ", Pv(Sv ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === hv && (0, nv.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Pv((0, yv.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), gv && (0, nv.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Pv(gv)
        })]
      })
    }

    function bv() {
      var vv;
      const {
        t: zv
      } = (0, cv.x)(), Pv = (0, Nv.useNavigatePreserveSearch)(), {
        packId: ev
      } = (0, Sv.B)(), {
        userContext: gv,
        isUserContextUpdating: pv
      } = (0, sv.d)(), [Tv, Wv] = (0, hv.useState)(null), [wv, iv] = (0, hv.useState)(null), [Gv, mv] = (0, hv.useState)(0), jv = (0, hv.useRef)(0);

      function fv() {
        var vv;
        null !== (vv = (0, Nv.getPreviousLocation)()) && void 0 !== vv && vv.startsWith(Yv.O) ? Pv(-1) : Pv(Yv.O)
      }(0, av.c)(fv), (0, tv.d)(), (0, hv.useEffect)((() => {
        if (pv || void 0 === ev) return;
        const vv = ++jv.current;
        iv(null), Cv.e.getShaderPack(gv, ev).then((zv => {
          jv.current === vv && Wv(zv)
        })).catch((zv => {
          jv.current === vv && (console.error("Failed to get the shader pack", zv), Wv(null), iv({
            error: zv
          }))
        }))
      }), [ev, gv, pv, Gv]);
      const Fv = () => {
          mv((vv => vv + 1))
        },
        Ov = (null === Tv || void 0 === Tv ? void 0 : Tv.packId) === ev ? Tv : null,
        Kv = (0, tv.i)(),
        Vv = Ev(null !== (vv = null === Ov || void 0 === Ov ? void 0 : Ov.live) && void 0 !== vv ? vv : null),
        Uv = null !== Ov && void 0 !== Ov && Ov.live ? (0, nv.jsx)(rv, {
          item: Ov.live,
          favourites: Kv,
          packUse: Vv
        }) : null;
      return (0, nv.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, nv.jsx)(lv.b, {
          onClick: fv,
          children: zv("shaderPackListing:backToPacks")
        }), null === Ov && null === wv && (0, nv.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, nv.jsx)(dv.c, {})
        }), null !== wv && (0, nv.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Yv.w)(wv.error, zv, "shaderPackListing:loadPackFailed"), (0, nv.jsx)(lv.d, {
            onClick: Fv,
            children: zv("general:tryAgain")
          })]
        }), null !== Ov && null === wv && (0, nv.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, nv.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, nv.jsx)("h1", {
              className: "FullyFancyText",
              children: Ov.name
            }), Uv]
          }), Ov.live && (0, nv.jsx)(Qv, {
            item: Ov.live
          }), Ov.live && (0, nv.jsx)(kv, {
            item: Ov.live,
            ownerPreview: Ov.ownerPreview,
            bloxdhubSlug: Ov.bloxdhubSlug,
            actions: Uv
          }), Ov.owner && (0, nv.jsx)(Dv, {
            details: Ov,
            owner: Ov.owner,
            onChanged: Fv
          })]
        })]
      })
    }

    function rv(vv) {
      let {
        item: zv,
        favourites: Pv,
        packUse: hv
      } = vv;
      const Sv = Pv.isFavourite(zv.packId);
      return (0, nv.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [iv.featureFlags.settings.canUseShaderPacks && (0, nv.jsx)(ov, {
          packUse: hv
        }), (0, nv.jsx)(lv.m, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Pv.toggle(zv.packId)
          },
          isLiked: !0 === Sv,
          isLoading: null === Sv
        })]
      })
    }

    function kv(vv) {
      let {
        item: zv,
        ownerPreview: Pv,
        bloxdhubSlug: hv,
        actions: Sv
      } = vv;
      const {
        t: pv
      } = (0, cv.x)(), dv = (0, wv.t)(), lv = null === hv ? null : (0, ev.f)(hv);
      return (0, nv.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [zv.description && (0, nv.jsx)("p", {
          className: "ShaderPackDescription",
          children: zv.description
        }), (0, nv.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Pv || null !== lv) && (0, nv.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Pv ? (0, nv.jsxs)(nv.Fragment, {
              children: [(0, nv.jsx)(Wv.e, {
                playerSocialPreview: Pv,
                showLocation: !1,
                linkToProfile: !0
              }), null !== lv && (0, nv.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: lv,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, nv.jsx)("img", {
                  src: Gv,
                  alt: ev.c
                })
              })]
            }) : (0, nv.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: lv,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [ev.c, (0, nv.jsx)("img", {
                src: Gv,
                alt: ""
              })]
            })
          }), Yv.y.filter((vv => zv.features.includes(vv))).map((vv => (0, nv.jsx)(Nv.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Yv.I)(vv),
            children: pv(Yv.J[vv])
          }, vv)))]
        }), Sv, (0, nv.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, nv.jsxs)("div", {
            children: [(0, nv.jsx)("dt", {
              children: pv("shaderPackListing:downloads")
            }), (0, nv.jsx)("dd", {
              children: (0, gv.X)(zv.downloads)
            })]
          }), (0, nv.jsx)(Xv, {
            label: pv("shaderPackListing:updated"),
            time: zv.listedUpdatedAt,
            now: dv
          }), (0, nv.jsx)(Xv, {
            label: pv("shaderPackListing:created"),
            time: zv.publishedAt,
            now: dv
          }), null !== zv.gpuCost && (0, nv.jsxs)("div", {
            children: [(0, nv.jsx)("dt", {
              children: pv("shaderPackListing:lag")
            }), (0, nv.jsx)("dd", {
              children: pv("shaderPackListing:lagPercent", {
                percent: String((0, Yv.L)(zv.gpuCost))
              })
            })]
          }), (0, nv.jsxs)("div", {
            children: [(0, nv.jsx)("dt", {
              children: pv("shaderPackListing:size")
            }), (0, nv.jsx)("dd", {
              children: pv("shaderPackListing:sizeValue", {
                kilobytes: String((0, Yv.K)(zv.sourceBytes))
              })
            })]
          }), (0, nv.jsxs)("div", {
            children: [(0, nv.jsx)("dt", {
              children: pv("shaderPackListing:files")
            }), (0, nv.jsx)("dd", {
              children: zv.fileCount
            })]
          })]
        })]
      })
    }

    function Xv(vv) {
      let {
        label: zv,
        time: Pv,
        now: hv
      } = vv;
      const {
        t: Sv,
        selectedLanguage: ev
      } = (0, cv.x)(), gv = new Date(Pv);
      let dv = gv.toLocaleDateString();
      if (hv - Pv <= 30 * pv.k) {
        const vv = (0, cv.g)(ev.code, "shaderPackListing:timeAgo");
        dv = Sv("shaderPackListing:timeAgo", {
          time: (0, pv.gb)(vv, Pv, hv)
        })
      }
      return (0, nv.jsx)(Tv.h, {
        tooltipInner: gv.toLocaleString(),
        children: (0, nv.jsxs)("div", {
          children: [(0, nv.jsx)("dt", {
            children: zv
          }), (0, nv.jsx)("dd", {
            children: dv
          })]
        })
      })
    }
  },
  4765: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1082);

    function gv(vv) {
      let {
        options: zv,
        value: Pv,
        onChange: hv,
        ariaLabel: gv,
        className: pv,
        reselectable: dv = !1,
        keepsFocus: Nv = !1,
        padTabs: lv
      } = vv;
      const Tv = void 0 !== lv;
      return (0, ev.jsx)("div", {
        className: Sv()("SegmentedToggle", pv),
        role: "group",
        "aria-label": gv,
        "data-pad-tabs": lv,
        children: zv.map((vv => {
          const zv = vv.value === Pv;
          return (0, ev.jsx)("button", {
            type: "button",
            "aria-pressed": zv,
            "data-pad-tab": Tv || void 0,
            "data-pad-selected": Tv && zv ? "true" : void 0,
            "data-pad-default-focus": Tv && zv || void 0,
            "aria-label": vv.ariaLabel,
            title: vv.ariaLabel,
            className: Sv()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zv
            }),
            onMouseDown: Nv ? vv => {
              vv.preventDefault()
            } : void 0,
            onClick: () => {
              zv && !dv || hv(vv.value)
            },
            children: vv.label
          }, vv.value)
        }))
      })
    }
  },
  4773: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => gv
    });
    var hv = Pv(52);
    const Sv = new WeakMap,
      ev = vv => {
        var zv;
        const Pv = vv.closest("[data-pad-slider]");
        return Pv && null !== (zv = Sv.get(Pv)) && void 0 !== zv ? zv : null
      },
      gv = (vv, zv) => {
        const Pv = (0, hv.useRef)(zv);
        Pv.current = zv, (0, hv.useEffect)((() => {
          if (vv.current) return ((vv, zv) => (Sv.set(vv, zv), () => {
            Sv.get(vv) === zv && Sv.delete(vv)
          }))(vv.current, {
            adjust: vv => {
              Pv.current.adjust(vv)
            },
            setFraction: vv => {
              Pv.current.setFraction(vv)
            },
            endDrag: () => {
              Pv.current.endDrag()
            }
          })
        }), [vv])
      }
  },
  6377: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    var hv = Pv(39);
    const Sv = "shaderPack";
    async function ev() {
      var vv;
      let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (vv = await hv.f.getItem(Sv, zv)) && void 0 !== vv ? vv : null
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);