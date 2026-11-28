export const id = 134;
export const ids = [134];
export const modules = {
  5901: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd,
      h: () => Yd,
      i: () => Hd,
      l: () => pd
    });
    var Wd = md(66),
      Fd = md(5909),
      Rd = md(5003),
      Xd = md(1471),
      Kd = md(4199),
      hd = md(1155),
      vd = md.n(hd),
      Qd = md(1462),
      td = md(1890),
      od = md(5936),
      Nd = md(1341);

    function qd(dd) {
      let {
        label: Od,
        onClick: md,
        checked: Wd,
        circleInfoText: Fd,
        className: Kd,
        disabled: hd,
        note: Qd
      } = dd;
      return (0, Nd.jsxs)("div", {
        "aria-disabled": hd || void 0,
        "data-pad-focusable": !0,
        className: vd()("SettingBox CheckboxContainer", {
          [Kd]: Kd,
          SettingBoxDisabled: hd
        }),
        onClick: () => {
          hd || md(!Wd)
        },
        children: [(0, Nd.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nd.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nd.jsx)(Rd.d, {
              className: "SettingsCheckbox",
              checked: Wd,
              disabled: hd,
              onChange: () => {}
            })
          }), (0, Nd.jsxs)("div", {
            className: "CheckboxText",
            children: [Od, Fd && (0, Nd.jsx)("span", {
              onClick: dd => dd.stopPropagation(),
              children: (0, Nd.jsx)(Xd.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Fd
              })
            })]
          })]
        }), Qd && (0, Nd.jsx)("div", {
          className: "SettingNote",
          children: Qd
        })]
      })
    }

    function Hd(dd) {
      let {
        name: Od,
        onChange: md,
        min: Fd,
        max: Rd,
        step: Kd,
        initValue: hd,
        circleInfoText: Qd,
        format: td,
        className: od,
        padStep: qd,
        disabled: Hd = !1,
        selectableMax: yd,
        cappedNote: bd,
        note: pd,
        onChangeComplete: Yd
      } = dd;
      const [gd, wd] = (0, Wd.useState)(hd), Ed = (0, Wd.useRef)(hd);
      (0, Wd.useEffect)((() => {
        Ed.current = hd, wd(hd)
      }), [hd]);
      const Jd = void 0 !== yd && yd < Rd,
        Ud = Jd ? {
          "--slider-selectable": (yd - Fd) / (Rd - Fd)
        } : void 0,
        xd = Jd && bd ? bd : pd;
      return (0, Nd.jsxs)("div", {
        className: vd()("SettingBox SettingsSliderDiv", {
          [od]: od,
          SettingBoxDisabled: Hd,
          SliderCapped: Jd
        }),
        style: Ud,
        children: [(0, Nd.jsxs)("div", {
          className: "SliderText",
          children: [`${Od}: ${td?td(gd):gd}`, Qd && (0, Nd.jsx)(Xd.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Qd
          })]
        }), (0, Nd.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nd.jsx)(Td, {
            value: gd,
            min: Fd,
            max: Rd,
            step: Kd,
            onChange: dd => {
              if (Jd && dd >= yd && gd === yd) return;
              const Od = Jd ? Math.min(dd, yd) : dd;
              Ed.current = Od, wd(Od), md(Od)
            },
            onChangeComplete: Yd && (() => {
              Yd(Ed.current)
            }),
            format: td,
            padStep: qd,
            disabled: Hd
          })
        }), xd && (0, Nd.jsx)("div", {
          className: "SettingNote",
          children: xd
        })]
      })
    }
    const yd = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function bd(dd) {
      var Od;
      return (null !== (Od = String(dd).split(".")[1]) && void 0 !== Od ? Od : "").length
    }

    function Td(dd) {
      let {
        value: Od,
        min: md,
        max: Rd,
        step: Xd,
        onChange: Kd,
        orientation: hd,
        reverse: vd,
        setIsChanging: Qd,
        tooltip: td,
        labels: qd,
        handleLabel: Hd,
        format: Td,
        onChangeStart: pd,
        onChangeComplete: Yd,
        padStep: gd,
        disabled: wd = !1
      } = dd;
      const Ed = (0, Wd.useRef)(null),
        Jd = (0, Wd.useRef)(null);
      (0, Wd.useLayoutEffect)((() => {
        var dd, Od, md;
        const Wd = null !== (dd = null === (Od = Ed.current) || void 0 === Od ? void 0 : Od.querySelector(".rangeslider")) && void 0 !== dd ? dd : null;
        null === Wd || void 0 === Wd || Wd.setAttribute("data-pad-slider", ""), null === Wd || void 0 === Wd || Wd.setAttribute("data-pad-focusable", ""), null === Wd || void 0 === Wd || null === (md = Wd.querySelector(".rangeslider__handle")) || void 0 === md || md.setAttribute("data-pad-slider-handle", ""), Jd.current = Wd
      }), []), (0, Wd.useLayoutEffect)((() => {
        var dd, Od;
        wd ? null === (dd = Jd.current) || void 0 === dd || dd.setAttribute("aria-disabled", "true") : null === (Od = Jd.current) || void 0 === Od || Od.removeAttribute("aria-disabled")
      }), [wd]);
      const Ud = Math.max(bd(Xd), bd(md)),
        xd = dd => {
          if (dd >= Rd) return Rd;
          if (dd <= md) return md;
          const Od = Number((Math.round((dd - md) / Xd) * Xd + md).toFixed(Ud));
          return Math.min(Rd, Math.max(md, Od))
        },
        Bd = (0, Wd.useRef)(Yd);
      Bd.current = Yd, (0, Wd.useEffect)((() => {
        const dd = Ed.current;
        if (!dd) return;
        const Od = dd => {
          var Od;
          yd.has(dd.key) && (null === (Od = Bd.current) || void 0 === Od || Od.call(Bd))
        };
        return dd.addEventListener("keyup", Od), () => {
          dd.removeEventListener("keyup", Od)
        }
      }), []);
      const Sd = (0, Wd.useRef)(!1);
      return (0, od.f)(Jd, {
        adjust: dd => {
          if (wd) return;
          const Wd = null !== gd && void 0 !== gd ? gd : Math.max(Xd, Math.round((Rd - md) / 20 / Xd) * Xd),
            Fd = xd(Od + dd * Wd * (vd ? -1 : 1));
          Fd !== Od && (null === pd || void 0 === pd || pd(), Kd(Fd), null === Yd || void 0 === Yd || Yd())
        },
        setFraction: dd => {
          if (wd) return;
          const Wd = xd(md + (vd ? 1 - dd : dd) * (Rd - md));
          Wd !== Od && (Sd.current || (Sd.current = !0, null === pd || void 0 === pd || pd()), Kd(Wd))
        },
        endDrag: () => {
          Sd.current && (Sd.current = !1, null === Yd || void 0 === Yd || Yd())
        }
      }), (0, Nd.jsx)("div", {
        ref: Ed,
        style: {
          display: "contents"
        },
        children: (0, Nd.jsx)(Fd.e, {
          value: Od,
          min: md,
          max: Rd,
          step: Xd,
          onChange: dd => {
            Kd(xd(dd))
          },
          orientation: hd,
          reverse: vd,
          tooltip: td,
          labels: qd,
          handleLabel: Hd,
          format: Td,
          onChangeStart: () => {
            null === pd || void 0 === pd || pd(), null === Qd || void 0 === Qd || Qd(!0)
          },
          onChangeComplete: () => {
            null === Qd || void 0 === Qd || Qd(!1), null === Yd || void 0 === Yd || Yd()
          }
        })
      })
    }
    async function pd() {
      const dd = Qd.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await dd.getResult() && (0, td.reloadBloxd)()
    }

    function Yd(dd) {
      let {
        label: Od,
        options: md,
        value: Wd,
        onChange: Fd,
        circleInfoText: Rd
      } = dd;
      return (0, Nd.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nd.jsxs)("div", {
          className: "SliderText",
          children: [Od, Rd && (0, Nd.jsx)(Xd.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Rd
          })]
        }), (0, Nd.jsx)(Kd.e, {
          ariaLabel: Od,
          options: md,
          value: Wd,
          onChange: Fd
        })]
      })
    }
  },
  7608: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Md
    });
    var Wd = md(66),
      Fd = md(1650),
      Rd = md(7512),
      Xd = md(1286),
      Kd = md(405),
      hd = md(1670),
      vd = md(1436),
      Qd = md(1641),
      td = md(1572),
      od = md(1471),
      Nd = md(1739),
      qd = md(3662),
      Hd = md(3794),
      yd = md(5220),
      bd = md(1186),
      Td = md(1627),
      pd = md(107),
      Yd = md(1238);
    const gd = md.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var wd = md(1155),
      Ed = md.n(wd),
      Jd = md(1443),
      Ud = md(1462),
      xd = md(7509),
      Bd = md(1341);
    const Sd = (0, Wd.lazy)((() => Promise.all([md.e(128), md.e(91), md.e(157), md.e(156), md.e(135), md.e(716)]).then((() => md(7550))).then((dd => ({
      default: dd.ShaderPackPublishForm
    })))));

    function sd(dd) {
      let {
        details: Od,
        owner: md,
        onChanged: Fd
      } = dd;
      const {
        t: Xd
      } = (0, Yd.G)(), Kd = (0, Qd.useNavigatePreserveSearch)(), {
        userContext: hd
      } = (0, bd.d)(), [od, Nd] = (0, Wd.useState)(!1), [qd, Hd] = (0, Wd.useState)(null), [yd, pd] = (0, Wd.useState)(!1), {
        packId: gd,
        name: wd,
        description: sd,
        live: ud
      } = Od;
      async function Vd(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd;
        Nd(!0), Hd(null);
        try {
          await dd(), Od()
        } catch (md) {
          console.error("Failed to change a shader pack", md), Hd((0, xd.w)(md, Xd, "shaderPackListing:ownerActionFailed"))
        } finally {
          Nd(!1)
        }
      }
      const Ad = (0, xd.r)(hd);
      return (0, Bd.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Bd.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Xd("general:manage")
        }), (0, xd.X)(md, !(null === ud || void 0 === ud || !ud.renderId), Date.now(), Xd).map((dd => (0, Bd.jsxs)("div", {
          className: Ed()("ShaderPackOwnerNotice", {
            Warning: "warning" === dd.tone
          }),
          children: [(0, Bd.jsx)(Jd.c, {
            name: "warning" === dd.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Bd.jsxs)("div", {
            children: [dd.text, dd.detail && (0, Bd.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: dd.detail
            })]
          })]
        }, dd.text))), Od.ban && (0, Bd.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Bd.jsx)(Jd.c, {
            name: "ban"
          }), (0, Bd.jsxs)("div", {
            children: ["Banned by ", Od.ban.byName, " on ", new Date(Od.ban.at).toLocaleString()]
          })]
        }), qd && (0, Bd.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: qd
        }), (0, Bd.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Bd.jsxs)(td.S, {
            disabled: od,
            onClick: () => {
              !async function() {
                const dd = await Ud.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: wd,
                  maxLength: Rd.w,
                  submitText: "general:save",
                  validate: dd => dd.trim().length < Rd.y ? Xd("shaderPackListing:nameTooShort", {
                    min: String(Rd.y)
                  }) : null
                }).getResult();
                "notificationTornDown" !== dd && "submit" === (null === dd || void 0 === dd ? void 0 : dd.type) && dd.value.trim() !== wd && await Vd((() => Td.e.updateShaderPack(hd, {
                  packId: gd,
                  name: dd.value.trim()
                })))
              }()
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: "pen"
            }), " ", Xd("shaderPackListing:rename")]
          }), (0, Bd.jsxs)(td.S, {
            disabled: od,
            onClick: () => {
              !async function() {
                const dd = await Ud.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: sd,
                  maxLength: Rd.p,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== dd && "submit" === (null === dd || void 0 === dd ? void 0 : dd.type) && dd.value.trim() !== sd && await Vd((() => Td.e.updateShaderPack(hd, {
                  packId: gd,
                  description: dd.value.trim()
                })))
              }()
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: "file-lines"
            }), " ", Xd("shaderPackListing:editDescription")]
          }), (0, Bd.jsxs)(td.S, {
            disabled: od || md.isBanned && !md.listed,
            onClick: () => {
              Vd((() => Td.e.updateShaderPack(hd, {
                packId: gd,
                listed: !md.listed
              })))
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: md.listed ? "eye-slash" : "eye"
            }), " ", Xd(md.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !md.isBanned && (0, Bd.jsxs)(td.g, {
            disabled: od,
            onClick: () => {
              pd(!yd)
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: "upload"
            }), " ", Xd("shaderPackListing:uploadVersion")]
          }), (0, Bd.jsxs)(td.K, {
            disabled: od || md.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Ud.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Vd((() => Td.e.deleteShaderPack(hd, gd)), (() => {
                  Kd(`${xd.U}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: "trash-can"
            }), " ", Xd("general:delete")]
          }), Ad && (0, Bd.jsxs)(td.K, {
            disabled: od,
            onClick: () => {
              Vd((() => Td.e.setShaderPackBanned(hd, gd, !md.isBanned)))
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: md.isBanned ? "circle-check" : "ban"
            }), " ", md.isBanned ? "Unban" : "Ban"]
          })]
        }), yd && (0, Bd.jsx)(Wd.Suspense, {
          fallback: (0, Bd.jsx)(vd.c, {}),
          children: (0, Bd.jsx)(Sd, {
            existing: {
              packId: gd,
              name: wd,
              description: sd
            },
            onPublished: () => {
              pd(!1), Fd()
            }
          })
        })]
      })
    }
    var ud = md(86),
      Vd = md(2057),
      Ad = md(1333),
      rd = md(5936),
      Gd = md(1253),
      nd = md(7523),
      Ld = md(7515),
      Pd = md(7539);

    function zd(dd) {
      let {
        item: Od
      } = dd;
      const {
        t: md
      } = (0, Yd.G)(), [Fd] = (0, nd.j)(), [Xd, Kd] = (0, Wd.useState)(Fd), [hd, vd] = (0, Wd.useState)(!1), [Qd, td] = (0, Wd.useState)(!1), {
        s3Url: od
      } = Gd.clientSideServerUrls, {
        width: Nd,
        height: qd
      } = Rd.q.large, Hd = (0, Rd.r)(od, Od, Xd, "large"), {
        renderVersion: yd
      } = Od;
      return (0, Bd.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Bd.jsx)(Pd.d, {
          selected: Xd,
          onSelect: dd => {
            Kd(dd), vd(!1)
          },
          imageUrl: dd => (0, Rd.r)(od, Od, dd, "thumb")
        }), (0, Bd.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!hd && (0, Bd.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === yd ? void 0 : md("shaderPackListing:fullSize"),
            disabled: null === yd,
            onClick: () => {
              td(!0)
            },
            children: [(0, Bd.jsx)("img", {
              src: Hd,
              width: Nd,
              height: qd,
              alt: md(xd.hb[Xd]),
              draggable: !1
            }), (0, Bd.jsx)(Ld.d, {
              item: Od
            })]
          }), !hd && null !== yd && (0, Bd.jsxs)(ed, {
            side: "Right",
            onClick: () => {
              vd(!0)
            },
            children: [(0, Bd.jsx)(Jd.c, {
              name: "arrows-left-right"
            }), " ", md("shaderPackListing:compare")]
          }), hd && null !== yd && (0, Bd.jsx)(Dd, {
            item: Od,
            packUrl: Hd,
            baselineUrl: (0, Rd.n)(od, yd, Xd, "large")
          }), hd && (0, Bd.jsx)(ed, {
            side: "Left",
            onClick: () => {
              vd(!1)
            },
            children: md("shaderPackListing:withPack")
          }), hd && (0, Bd.jsx)(ed, {
            side: "Right",
            onClick: () => {
              vd(!1)
            },
            children: md("shaderPackListing:withoutPack")
          })]
        }), Qd && (0, Bd.jsx)(cd, {
          fullUrl: (0, Rd.r)(od, Od, Xd, "full"),
          largeUrl: Hd,
          alt: md(xd.hb[Xd]),
          onClose: () => {
            td(!1)
          }
        })]
      })
    }

    function cd(dd) {
      let {
        fullUrl: Od,
        largeUrl: md,
        alt: Fd,
        onClose: Rd
      } = dd;
      const Xd = (0, Wd.useRef)(null);
      return (0, Ad.m)("popup", Xd, Rd), (0, Wd.useEffect)((() => {
        function dd(dd) {
          "Escape" === dd.key && (dd.stopPropagation(), Rd())
        }
        return window.addEventListener("keydown", dd, !0), () => {
          window.removeEventListener("keydown", dd, !0)
        }
      }), [Rd]), (0, ud.createPortal)((0, Bd.jsxs)("div", {
        ref: Xd,
        className: "ShaderPackFullSize",
        onClick: Rd,
        children: [(0, Bd.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Od,
          alt: Fd,
          draggable: !1,
          style: {
            backgroundImage: `url(${md})`
          }
        }), (0, Bd.jsx)(td.j, {
          className: "ShaderPackFullSizeClose",
          onClick: Rd
        })]
      }), document.body)
    }
    const jd = 5;

    function Dd(dd) {
      let {
        item: Od,
        packUrl: md,
        baselineUrl: Fd
      } = dd;
      const {
        t: Xd
      } = (0, Yd.G)(), [Kd, hd] = (0, Wd.useState)(50), vd = (0, Wd.useRef)(!1), Qd = (0, Wd.useRef)(null), {
        width: td,
        height: od
      } = Rd.q.large;

      function Nd(dd) {
        hd((Od => (0, Vd.h)(Od + dd, 0, 100)))
      }

      function qd(dd) {
        const Od = dd.currentTarget.getBoundingClientRect();
        hd((0, Vd.h)((dd.clientX - Od.left) / Od.width * 100, 0, 100))
      }
      return (0, rd.f)(Qd, {
        adjust: dd => {
          Nd(dd * jd)
        },
        setFraction: dd => {
          hd(100 * dd)
        },
        endDrag: () => {}
      }), (0, Bd.jsxs)("div", {
        ref: Qd,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Xd("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Kd),
        style: {
          "--split": `${Kd}%`
        },
        onKeyDown: function(dd) {
          const Od = "ArrowLeft" === dd.key ? -jd : "ArrowRight" === dd.key ? jd : 0;
          0 !== Od && (dd.preventDefault(), Nd(Od))
        },
        onPointerDown: dd => {
          vd.current = !0, dd.currentTarget.setPointerCapture(dd.pointerId), qd(dd)
        },
        onPointerMove: dd => {
          vd.current && qd(dd)
        },
        onPointerUp: () => {
          vd.current = !1
        },
        onPointerCancel: () => {
          vd.current = !1
        },
        children: [(0, Bd.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Fd,
          width: td,
          height: od,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${md})`
          }
        }), (0, Bd.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Bd.jsx)("img", {
          className: "ShaderPackComparePack",
          src: md,
          width: td,
          height: od,
          alt: "",
          draggable: !1
        }), (0, Bd.jsx)(Ld.d, {
          item: Od,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function ed(dd) {
      let {
        side: Od,
        onClick: md,
        children: Wd
      } = dd;
      return (0, Bd.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Od}`,
        onClick: md,
        children: (0, Bd.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Wd
        })
      })
    }
    var Id = md(5901),
      ld = md(373),
      Cd = md(7602);
    const Zd = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function kd(dd) {
      const {
        userContext: Od
      } = (0, bd.d)(), [Fd, Rd] = (0, Wd.useState)(null), [Xd, Kd] = (0, Wd.useState)(!1), [hd, vd] = (0, Wd.useState)(!1), [Qd, td] = (0, Wd.useState)(null), od = null === dd || void 0 === dd ? void 0 : dd.packId, Nd = null === dd || void 0 === dd ? void 0 : dd.sourceHash;
      return (0, Wd.useEffect)((() => {
        if (Kd(!1), td(null), void 0 === od) return;
        let dd = !1;
        return Promise.all([(0, pd.hasUsableWebGpuAdapter)(), (0, Cd.g)()]).then((Od => {
          let [md, Wd] = Od;
          var Fd;
          dd || (Rd(md), Kd((null === Wd || void 0 === Wd || null === (Fd = Wd.listing) || void 0 === Fd ? void 0 : Fd.packId) === od && Wd.listing.sourceHash === Nd))
        })).catch((Od => {
          console.error("Failed to check whether this shader pack can be used", Od), dd || Rd(!1)
        })), () => {
          dd = !0
        }
      }), [od, Nd]), {
        webGpuUsable: Fd,
        inUse: Xd,
        busy: hd,
        errorKey: Qd,
        use: () => {
          null !== dd && async function(dd) {
            vd(!0), td(null);
            try {
              const {
                installListedShaderPack: Wd
              } = await Promise.all([md.e(91), md.e(157), md.e(136)]).then((() => md(42441))), Fd = await Wd({
                packId: dd.packId,
                sourceHash: dd.sourceHash,
                name: dd.name,
                ownerName: dd.ownerName,
                description: dd.description
              });
              if ("failed" === Fd.kind) return void td(Zd[Fd.reason]);
              Kd(!0), Td.e.recordShaderPackDownload(Od, dd.packId).catch((dd => {
                console.error("Failed to count a shader pack's download", dd)
              })), (0, Id.l)()
            } catch (Wd) {
              console.error("Failed to use the shader pack", Wd), td("shaderPack:unexpectedError")
            } finally {
              vd(!1)
            }
          }(dd)
        }
      }
    }

    function fd(dd) {
      let {
        packUse: Od
      } = dd;
      const {
        t: md
      } = (0, Yd.G)(), {
        webGpuUsable: Wd,
        inUse: Fd,
        busy: Rd,
        errorKey: Xd,
        use: Kd
      } = Od;
      return (0, Bd.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Bd.jsxs)(td.m, {
          disabled: !0 !== Wd || Fd,
          loading: Rd,
          onClick: Kd,
          children: [(0, Bd.jsx)(Jd.c, {
            name: Fd ? "check" : "download"
          }), " ", md(Fd ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Wd && (0, Bd.jsx)("div", {
          className: "ShaderPackUseNote",
          children: md((0, ld.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Xd && (0, Bd.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: md(Xd)
        })]
      })
    }

    function Md() {
      var dd;
      const {
        t: Od
      } = (0, Yd.G)(), md = (0, Qd.useNavigatePreserveSearch)(), {
        packId: Rd
      } = (0, Fd.u)(), {
        userContext: Xd,
        isUserContextUpdating: Kd
      } = (0, bd.d)(), [od, qd] = (0, Wd.useState)(null), [Hd, pd] = (0, Wd.useState)(null), [gd, wd] = (0, Wd.useState)(0), Ed = (0, Wd.useRef)(0);

      function Jd() {
        var dd;
        null !== (dd = (0, Qd.getPreviousLocation)()) && void 0 !== dd && dd.startsWith(xd.U) ? md(-1) : md(xd.U)
      }(0, yd.d)(Jd), (0, nd.e)(), (0, Wd.useEffect)((() => {
        if (Kd || void 0 === Rd) return;
        const dd = ++Ed.current;
        pd(null), Td.e.getShaderPack(Xd, Rd).then((Od => {
          Ed.current === dd && qd(Od)
        })).catch((Od => {
          Ed.current === dd && (console.error("Failed to get the shader pack", Od), qd(null), pd({
            error: Od
          }))
        }))
      }), [Rd, Xd, Kd, gd]);
      const Ud = () => {
          wd((dd => dd + 1))
        },
        Sd = (null === od || void 0 === od ? void 0 : od.packId) === Rd ? od : null,
        ud = (0, nd.k)(),
        Vd = kd(null !== (dd = null === Sd || void 0 === Sd ? void 0 : Sd.live) && void 0 !== dd ? dd : null),
        Ad = null !== Sd && void 0 !== Sd && Sd.live ? (0, Bd.jsx)(dO, {
          item: Sd.live,
          favourites: ud,
          packUse: Vd
        }) : null;
      return (0, Bd.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== Sd && (0, Bd.jsx)(Nd.c, {
          meta: (0, hd.eb)(Sd.name)
        }), (0, Bd.jsx)(td.d, {
          onClick: Jd,
          children: Od("shaderPackListing:backToPacks")
        }), null === Sd && null === Hd && (0, Bd.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Bd.jsx)(vd.c, {})
        }), null !== Hd && (0, Bd.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, xd.w)(Hd.error, Od, "shaderPackListing:loadPackFailed"), (0, Bd.jsx)(td.g, {
            onClick: Ud,
            children: Od("general:tryAgain")
          })]
        }), null !== Sd && null === Hd && (0, Bd.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Bd.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Bd.jsx)("h1", {
              className: "FullyFancyText",
              children: Sd.name
            }), Ad]
          }), Sd.live && (0, Bd.jsx)(zd, {
            item: Sd.live
          }), Sd.live && (0, Bd.jsx)(OO, {
            item: Sd.live,
            ownerPreview: Sd.ownerPreview,
            bloxdhubSlug: Sd.bloxdhubSlug,
            actions: Ad
          }), Sd.owner && (0, Bd.jsx)(sd, {
            details: Sd,
            owner: Sd.owner,
            onChanged: Ud
          })]
        })]
      })
    }

    function dO(dd) {
      let {
        item: Od,
        favourites: md,
        packUse: Wd
      } = dd;
      const Fd = md.isFavourite(Od.packId);
      return (0, Bd.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [pd.featureFlags.settings.canUseShaderPacks && (0, Bd.jsx)(fd, {
          packUse: Wd
        }), (0, Bd.jsx)(td.z, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            md.toggle(Od.packId)
          },
          isLiked: !0 === Fd,
          isLoading: null === Fd
        })]
      })
    }

    function OO(dd) {
      let {
        item: Od,
        ownerPreview: md,
        bloxdhubSlug: Wd,
        actions: Fd
      } = dd;
      const {
        t: Kd
      } = (0, Yd.G)(), hd = (0, Hd.v)(), vd = null === Wd ? null : (0, Rd.f)(Wd);
      return (0, Bd.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Od.description && (0, Bd.jsx)("p", {
          className: "ShaderPackDescription",
          children: Od.description
        }), (0, Bd.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== md || null !== vd) && (0, Bd.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== md ? (0, Bd.jsxs)(Bd.Fragment, {
              children: [(0, Bd.jsx)(qd.c, {
                playerSocialPreview: md,
                showLocation: !1,
                linkToProfile: !0
              }), null !== vd && (0, Bd.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: vd,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Bd.jsx)("img", {
                  src: gd,
                  alt: Rd.d
                })
              })]
            }) : (0, Bd.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: vd,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Rd.d, (0, Bd.jsx)("img", {
                src: gd,
                alt: ""
              })]
            })
          }), xd.z.filter((dd => Od.features.includes(dd))).map((dd => (0, Bd.jsx)(Qd.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, xd.N)(dd),
            children: Kd(xd.O[dd])
          }, dd)))]
        }), Fd, (0, Bd.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Bd.jsxs)("div", {
            children: [(0, Bd.jsx)("dt", {
              children: Kd("shaderPackListing:downloads")
            }), (0, Bd.jsx)("dd", {
              children: (0, Xd.M)(Od.downloads)
            })]
          }), (0, Bd.jsx)(mO, {
            label: Kd("shaderPackListing:updated"),
            time: Od.listedUpdatedAt,
            now: hd
          }), (0, Bd.jsx)(mO, {
            label: Kd("shaderPackListing:created"),
            time: Od.publishedAt,
            now: hd
          }), null !== Od.gpuCost && (0, Bd.jsxs)("div", {
            children: [(0, Bd.jsx)("dt", {
              children: Kd("shaderPackListing:lag")
            }), (0, Bd.jsx)("dd", {
              children: Kd("shaderPackListing:lagPercent", {
                percent: String((0, xd.R)(Od.gpuCost))
              })
            })]
          }), (0, Bd.jsxs)("div", {
            children: [(0, Bd.jsx)("dt", {
              children: Kd("shaderPackListing:size")
            }), (0, Bd.jsx)("dd", {
              children: Kd("shaderPackListing:sizeValue", {
                kilobytes: String((0, xd.Q)(Od.sourceBytes))
              })
            })]
          }), (0, Bd.jsxs)("div", {
            children: [(0, Bd.jsx)("dt", {
              children: Kd("shaderPackListing:files")
            }), (0, Bd.jsx)("dd", {
              children: Od.fileCount
            })]
          })]
        })]
      })
    }

    function mO(dd) {
      let {
        label: Od,
        time: md,
        now: Wd
      } = dd;
      const {
        t: Fd,
        selectedLanguage: Rd
      } = (0, Yd.G)(), Xd = new Date(md);
      let hd = Xd.toLocaleDateString();
      if (Wd - md <= 30 * Kd.f) {
        const dd = (0, Yd.p)(Rd.code, "shaderPackListing:timeAgo");
        hd = Fd("shaderPackListing:timeAgo", {
          time: (0, Kd.Q)(dd, md, Wd)
        })
      }
      return (0, Bd.jsx)(od.g, {
        tooltipInner: Xd.toLocaleString(),
        children: (0, Bd.jsxs)("div", {
          children: [(0, Bd.jsx)("dt", {
            children: Od
          }), (0, Bd.jsx)("dd", {
            children: hd
          })]
        })
      })
    }
  },
  5936: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd
    });
    var Wd = md(66);
    const Fd = new WeakMap,
      Rd = dd => {
        var Od;
        const md = dd.closest("[data-pad-slider]");
        return md && null !== (Od = Fd.get(md)) && void 0 !== Od ? Od : null
      },
      Xd = (dd, Od) => {
        const md = (0, Wd.useRef)(Od);
        md.current = Od, (0, Wd.useEffect)((() => {
          if (dd.current) return ((dd, Od) => (Fd.set(dd, Od), () => {
            Fd.get(dd) === Od && Fd.delete(dd)
          }))(dd.current, {
            adjust: dd => {
              md.current.adjust(dd)
            },
            setFraction: dd => {
              md.current.setFraction(dd)
            },
            endDrag: () => {
              md.current.endDrag()
            }
          })
        }), [dd])
      }
  },
  7602: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    var Wd = md(46);
    const Fd = "shaderPack";
    async function Rd() {
      var dd;
      let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await Wd.h.getItem(Fd, Od)) && void 0 !== dd ? dd : null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);