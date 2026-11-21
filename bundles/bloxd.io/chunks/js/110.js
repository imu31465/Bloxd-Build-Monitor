export const id = 110;
export const ids = [110];
export const modules = {
  4877: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ld,
      g: () => Gd,
      h: () => Od,
      l: () => Id
    });
    var pd = kd(56),
      Nd = kd(4883),
      Wd = kd(4203),
      Pd = kd(1384),
      Zd = kd(4904),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(1371),
      od = kd(1753),
      ld = kd(4907),
      Qd = kd(1103);

    function Ld(dd) {
      let {
        label: Jd,
        onClick: kd,
        checked: pd,
        circleInfoText: Nd,
        className: Zd,
        disabled: gd,
        note: Kd
      } = dd;
      return (0, Qd.jsxs)("div", {
        "aria-disabled": gd || void 0,
        "data-pad-focusable": !0,
        className: Cd()("SettingBox CheckboxContainer", {
          [Zd]: Zd,
          SettingBoxDisabled: gd
        }),
        onClick: () => {
          gd || kd(!pd)
        },
        children: [(0, Qd.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Qd.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Qd.jsx)(Wd.e, {
              className: "SettingsCheckbox",
              checked: pd,
              disabled: gd,
              onChange: () => {}
            })
          }), (0, Qd.jsxs)("div", {
            className: "CheckboxText",
            children: [Jd, Nd && (0, Qd.jsx)("span", {
              onClick: dd => dd.stopPropagation(),
              children: (0, Qd.jsx)(Pd.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Nd
              })
            })]
          })]
        }), Kd && (0, Qd.jsx)("div", {
          className: "SettingNote",
          children: Kd
        })]
      })
    }

    function Od(dd) {
      let {
        name: Jd,
        onChange: kd,
        min: Nd,
        max: Wd,
        step: Zd,
        initValue: gd,
        circleInfoText: Kd,
        format: od,
        className: ld,
        padStep: Ld,
        disabled: Od = !1,
        selectableMax: ed,
        cappedNote: Id,
        onChangeComplete: Gd
      } = dd;
      const [vd, xd] = (0, pd.useState)(gd), qd = (0, pd.useRef)(gd);
      (0, pd.useEffect)((() => {
        qd.current = gd, xd(gd)
      }), [gd]);
      const Bd = void 0 !== ed && ed < Wd,
        sd = Bd ? {
          "--slider-selectable": (ed - Nd) / (Wd - Nd)
        } : void 0;
      return (0, Qd.jsxs)("div", {
        className: Cd()("SettingBox SettingsSliderDiv", {
          [ld]: ld,
          SettingBoxDisabled: Od,
          SliderCapped: Bd
        }),
        style: sd,
        children: [(0, Qd.jsxs)("div", {
          className: "SliderText",
          children: [`${Jd}: ${od?od(vd):vd}`, Kd && (0, Qd.jsx)(Pd.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Kd
          })]
        }), (0, Qd.jsx)("div", {
          className: "SliderDiv",
          children: (0, Qd.jsx)(Rd, {
            value: vd,
            min: Nd,
            max: Wd,
            step: Zd,
            onChange: dd => {
              if (Bd && dd >= ed && vd === ed) return;
              const Jd = Bd ? Math.min(dd, ed) : dd;
              qd.current = Jd, xd(Jd), kd(Jd)
            },
            onChangeComplete: Gd && (() => {
              Gd(qd.current)
            }),
            format: od,
            padStep: Ld,
            disabled: Od
          })
        }), Bd && Id && (0, Qd.jsx)("div", {
          className: "SettingNote",
          children: Id
        })]
      })
    }
    const ed = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Rd(dd) {
      var Jd;
      let {
        value: kd,
        min: Wd,
        max: Pd,
        step: Zd,
        onChange: gd,
        orientation: Cd,
        reverse: Kd,
        setIsChanging: od,
        tooltip: Ld,
        labels: Od,
        handleLabel: Rd,
        format: Id,
        onChangeStart: Gd,
        onChangeComplete: vd,
        padStep: xd,
        disabled: qd = !1
      } = dd;
      const Bd = (0, pd.useRef)(null),
        sd = (0, pd.useRef)(null);
      (0, pd.useLayoutEffect)((() => {
        var dd, Jd, kd;
        const pd = null !== (dd = null === (Jd = Bd.current) || void 0 === Jd ? void 0 : Jd.querySelector(".rangeslider")) && void 0 !== dd ? dd : null;
        null === pd || void 0 === pd || pd.setAttribute("data-pad-slider", ""), null === pd || void 0 === pd || pd.setAttribute("data-pad-focusable", ""), null === pd || void 0 === pd || null === (kd = pd.querySelector(".rangeslider__handle")) || void 0 === kd || kd.setAttribute("data-pad-slider-handle", ""), sd.current = pd
      }), []), (0, pd.useLayoutEffect)((() => {
        var dd, Jd;
        qd ? null === (dd = sd.current) || void 0 === dd || dd.setAttribute("aria-disabled", "true") : null === (Jd = sd.current) || void 0 === Jd || Jd.removeAttribute("aria-disabled")
      }), [qd]);
      const ad = (null !== (Jd = String(Zd).split(".")[1]) && void 0 !== Jd ? Jd : "").length,
        Md = dd => {
          const Jd = Number((Math.round((dd - Wd) / Zd) * Zd + Wd).toFixed(ad));
          return Math.min(Pd, Math.max(Wd, Jd))
        },
        Fd = (0, pd.useRef)(vd);
      Fd.current = vd, (0, pd.useEffect)((() => {
        const dd = Bd.current;
        if (!dd) return;
        const Jd = dd => {
          var Jd;
          ed.has(dd.key) && (null === (Jd = Fd.current) || void 0 === Jd || Jd.call(Fd))
        };
        return dd.addEventListener("keyup", Jd), () => {
          dd.removeEventListener("keyup", Jd)
        }
      }), []);
      const Yd = (0, pd.useRef)(!1);
      return (0, ld.e)(sd, {
        adjust: dd => {
          if (qd) return;
          const Jd = null !== xd && void 0 !== xd ? xd : Math.max(Zd, Math.round((Pd - Wd) / 20 / Zd) * Zd),
            pd = Md(kd + dd * Jd * (Kd ? -1 : 1));
          pd !== kd && (null === Gd || void 0 === Gd || Gd(), gd(pd), null === vd || void 0 === vd || vd())
        },
        setFraction: dd => {
          if (qd) return;
          const Jd = Md(Wd + (Kd ? 1 - dd : dd) * (Pd - Wd));
          Jd !== kd && (Yd.current || (Yd.current = !0, null === Gd || void 0 === Gd || Gd()), gd(Jd))
        },
        endDrag: () => {
          Yd.current && (Yd.current = !1, null === vd || void 0 === vd || vd())
        }
      }), (0, Qd.jsx)("div", {
        ref: Bd,
        style: {
          display: "contents"
        },
        children: (0, Qd.jsx)(Nd.c, {
          value: kd,
          min: Wd,
          max: Pd,
          step: Zd,
          onChange: gd,
          orientation: Cd,
          reverse: Kd,
          tooltip: Ld,
          labels: Od,
          handleLabel: Rd,
          format: Id,
          onChangeStart: () => {
            null === Gd || void 0 === Gd || Gd(), null === od || void 0 === od || od(!0)
          },
          onChangeComplete: () => {
            null === od || void 0 === od || od(!1), null === vd || void 0 === vd || vd()
          }
        })
      })
    }
    async function Id() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Jd = Kd.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: dd
      });
      !0 === await Jd.getResult() && (0, od.reloadBloxd)()
    }

    function Gd(dd) {
      let {
        label: Jd,
        options: kd,
        value: pd,
        onChange: Nd,
        circleInfoText: Wd
      } = dd;
      return (0, Qd.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Qd.jsxs)("div", {
          className: "SliderText",
          children: [Jd, Wd && (0, Qd.jsx)(Pd.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Wd
          })]
        }), (0, Qd.jsx)(Zd.c, {
          ariaLabel: Jd,
          options: kd,
          value: pd,
          onChange: Nd
        })]
      })
    }
  },
  6538: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => zd
    });
    var pd = kd(56),
      Nd = kd(1557),
      Wd = kd(6425),
      Pd = kd(1245),
      Zd = kd(313),
      gd = kd(1359),
      Cd = kd(1543),
      Kd = kd(1461),
      od = kd(1384),
      ld = kd(2479),
      Qd = kd(2604),
      Ld = kd(4403),
      Od = kd(1140),
      ed = kd(1520),
      Rd = kd(95),
      Id = kd(1211);
    const Gd = kd.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var vd = kd(1044),
      xd = kd.n(vd),
      qd = kd(1059),
      Bd = kd(1371),
      sd = kd(6419),
      ad = kd(1103);
    const Md = (0, pd.lazy)((() => Promise.all([kd.e(106), kd.e(75), kd.e(132), kd.e(126), kd.e(125)]).then((() => kd(6451))).then((dd => ({
      default: dd.ShaderPackPublishForm
    })))));

    function Fd(dd) {
      let {
        details: Jd,
        owner: kd,
        onChanged: Nd
      } = dd;
      const {
        t: Pd
      } = (0, Id.B)(), Zd = (0, Cd.useNavigatePreserveSearch)(), {
        userContext: od
      } = (0, Od.c)(), [ld, Qd] = (0, pd.useState)(!1), [Ld, Rd] = (0, pd.useState)(null), [Gd, vd] = (0, pd.useState)(!1), {
        packId: Fd,
        name: Yd,
        description: md,
        live: bd
      } = Jd;
      async function Sd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd;
        Qd(!0), Rd(null);
        try {
          await dd(), Jd()
        } catch (kd) {
          console.error("Failed to change a shader pack", kd), Rd((0, sd.x)(kd, Pd, "shaderPackListing:ownerActionFailed"))
        } finally {
          Qd(!1)
        }
      }
      const jd = (0, sd.t)(od);
      return (0, ad.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, ad.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Pd("general:manage")
        }), (0, sd._)(kd, !(null === bd || void 0 === bd || !bd.renderId), Date.now(), Pd).map((dd => (0, ad.jsxs)("div", {
          className: xd()("ShaderPackOwnerNotice", {
            Warning: "warning" === dd.tone
          }),
          children: [(0, ad.jsx)(qd.e, {
            name: "warning" === dd.tone ? "triangle-exclamation" : "circle-info"
          }), (0, ad.jsxs)("div", {
            children: [dd.text, dd.detail && (0, ad.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: dd.detail
            })]
          })]
        }, dd.text))), Jd.ban && (0, ad.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, ad.jsx)(qd.e, {
            name: "ban"
          }), (0, ad.jsxs)("div", {
            children: ["Banned by ", Jd.ban.byName, " on ", new Date(Jd.ban.at).toLocaleString()]
          })]
        }), Ld && (0, ad.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Ld
        }), (0, ad.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, ad.jsxs)(Kd.G, {
            disabled: ld,
            onClick: () => {
              !async function() {
                const dd = await Bd.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Yd,
                  maxLength: Wd.t,
                  submitText: "general:save",
                  validate: dd => dd.trim().length < Wd.v ? Pd("shaderPackListing:nameTooShort", {
                    min: String(Wd.v)
                  }) : null
                }).getResult();
                "notificationTornDown" !== dd && "submit" === (null === dd || void 0 === dd ? void 0 : dd.type) && dd.value.trim() !== Yd && await Sd((() => ed.d.updateShaderPack(od, {
                  packId: Fd,
                  name: dd.value.trim()
                })))
              }()
            },
            children: [(0, ad.jsx)(qd.e, {
              name: "pen"
            }), " ", Pd("shaderPackListing:rename")]
          }), (0, ad.jsxs)(Kd.G, {
            disabled: ld,
            onClick: () => {
              !async function() {
                const dd = await Bd.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: md,
                  maxLength: Wd.m,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== dd && "submit" === (null === dd || void 0 === dd ? void 0 : dd.type) && dd.value.trim() !== md && await Sd((() => ed.d.updateShaderPack(od, {
                  packId: Fd,
                  description: dd.value.trim()
                })))
              }()
            },
            children: [(0, ad.jsx)(qd.e, {
              name: "file-lines"
            }), " ", Pd("shaderPackListing:editDescription")]
          }), (0, ad.jsxs)(Kd.G, {
            disabled: ld || kd.isBanned && !kd.listed,
            onClick: () => {
              Sd((() => ed.d.updateShaderPack(od, {
                packId: Fd,
                listed: !kd.listed
              })))
            },
            children: [(0, ad.jsx)(qd.e, {
              name: kd.listed ? "eye-slash" : "eye"
            }), " ", Pd(kd.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !kd.isBanned && (0, ad.jsxs)(Kd.d, {
            disabled: ld,
            onClick: () => {
              vd(!Gd)
            },
            children: [(0, ad.jsx)(qd.e, {
              name: "upload"
            }), " ", Pd("shaderPackListing:uploadVersion")]
          }), (0, ad.jsxs)(Kd.E, {
            disabled: ld || kd.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Bd.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Sd((() => ed.d.deleteShaderPack(od, Fd)), (() => {
                  Zd(`${sd.X}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, ad.jsx)(qd.e, {
              name: "trash-can"
            }), " ", Pd("general:delete")]
          }), jd && (0, ad.jsxs)(Kd.E, {
            disabled: ld,
            onClick: () => {
              Sd((() => ed.d.setShaderPackBanned(od, Fd, !kd.isBanned)))
            },
            children: [(0, ad.jsx)(qd.e, {
              name: kd.isBanned ? "circle-check" : "ban"
            }), " ", kd.isBanned ? "Unban" : "Ban"]
          })]
        }), Gd && (0, ad.jsx)(pd.Suspense, {
          fallback: (0, ad.jsx)(gd.b, {}),
          children: (0, ad.jsx)(Md, {
            existing: {
              packId: Fd,
              name: Yd,
              description: md
            },
            onPublished: () => {
              vd(!1), Nd()
            }
          })
        })]
      })
    }
    var Yd = kd(72),
      md = kd(1901),
      bd = kd(1302),
      Sd = kd(4907),
      jd = kd(1220),
      Xd = kd(6430),
      fd = kd(6428),
      nd = kd(6441);

    function Ud(dd) {
      let {
        item: Jd
      } = dd;
      const {
        t: kd
      } = (0, Id.B)(), [Nd] = (0, Xd.i)(), [Pd, Zd] = (0, pd.useState)(Nd), [gd, Cd] = (0, pd.useState)(!1), [Kd, od] = (0, pd.useState)(!1), {
        s3Url: ld
      } = jd.clientSideServerUrls, {
        width: Qd,
        height: Ld
      } = Wd.p.large, Od = (0, Wd.q)(ld, Jd, Pd, "large"), {
        renderVersion: ed
      } = Jd;
      return (0, ad.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, ad.jsx)(nd.b, {
          selected: Pd,
          onSelect: dd => {
            Zd(dd), Cd(!1)
          },
          imageUrl: dd => (0, Wd.q)(ld, Jd, dd, "thumb")
        }), (0, ad.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!gd && (0, ad.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === ed ? void 0 : kd("shaderPackListing:fullSize"),
            disabled: null === ed,
            onClick: () => {
              od(!0)
            },
            children: [(0, ad.jsx)("img", {
              src: Od,
              width: Qd,
              height: Ld,
              alt: kd(sd.gb[Pd]),
              draggable: !1
            }), (0, ad.jsx)(fd.b, {
              item: Jd
            })]
          }), !gd && null !== ed && (0, ad.jsxs)(Ed, {
            side: "Right",
            onClick: () => {
              Cd(!0)
            },
            children: [(0, ad.jsx)(qd.e, {
              name: "arrows-left-right"
            }), " ", kd("shaderPackListing:compare")]
          }), gd && null !== ed && (0, ad.jsx)(Td, {
            item: Jd,
            packUrl: Od,
            baselineUrl: (0, Wd.k)(ld, ed, Pd, "large")
          }), gd && (0, ad.jsx)(Ed, {
            side: "Left",
            onClick: () => {
              Cd(!1)
            },
            children: kd("shaderPackListing:withPack")
          }), gd && (0, ad.jsx)(Ed, {
            side: "Right",
            onClick: () => {
              Cd(!1)
            },
            children: kd("shaderPackListing:withoutPack")
          })]
        }), Kd && (0, ad.jsx)(yd, {
          fullUrl: (0, Wd.q)(ld, Jd, Pd, "full"),
          largeUrl: Od,
          alt: kd(sd.gb[Pd]),
          onClose: () => {
            od(!1)
          }
        })]
      })
    }

    function yd(dd) {
      let {
        fullUrl: Jd,
        largeUrl: kd,
        alt: Nd,
        onClose: Wd
      } = dd;
      const Pd = (0, pd.useRef)(null);
      return (0, bd.s)("popup", Pd, Wd), (0, pd.useEffect)((() => {
        function dd(dd) {
          "Escape" === dd.key && (dd.stopPropagation(), Wd())
        }
        return window.addEventListener("keydown", dd, !0), () => {
          window.removeEventListener("keydown", dd, !0)
        }
      }), [Wd]), (0, Yd.createPortal)((0, ad.jsxs)("div", {
        ref: Pd,
        className: "ShaderPackFullSize",
        onClick: Wd,
        children: [(0, ad.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Jd,
          alt: Nd,
          draggable: !1,
          style: {
            backgroundImage: `url(${kd})`
          }
        }), (0, ad.jsx)(Kd.i, {
          className: "ShaderPackFullSizeClose",
          onClick: Wd
        })]
      }), document.body)
    }
    const Dd = 5;

    function Td(dd) {
      let {
        item: Jd,
        packUrl: kd,
        baselineUrl: Nd
      } = dd;
      const {
        t: Pd
      } = (0, Id.B)(), [Zd, gd] = (0, pd.useState)(50), Cd = (0, pd.useRef)(!1), Kd = (0, pd.useRef)(null), {
        width: od,
        height: ld
      } = Wd.p.large;

      function Qd(dd) {
        gd((Jd => (0, md.h)(Jd + dd, 0, 100)))
      }

      function Ld(dd) {
        const Jd = dd.currentTarget.getBoundingClientRect();
        gd((0, md.h)((dd.clientX - Jd.left) / Jd.width * 100, 0, 100))
      }
      return (0, Sd.e)(Kd, {
        adjust: dd => {
          Qd(dd * Dd)
        },
        setFraction: dd => {
          gd(100 * dd)
        },
        endDrag: () => {}
      }), (0, ad.jsxs)("div", {
        ref: Kd,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Pd("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Zd),
        style: {
          "--split": `${Zd}%`
        },
        onKeyDown: function(dd) {
          const Jd = "ArrowLeft" === dd.key ? -Dd : "ArrowRight" === dd.key ? Dd : 0;
          0 !== Jd && (dd.preventDefault(), Qd(Jd))
        },
        onPointerDown: dd => {
          Cd.current = !0, dd.currentTarget.setPointerCapture(dd.pointerId), Ld(dd)
        },
        onPointerMove: dd => {
          Cd.current && Ld(dd)
        },
        onPointerUp: () => {
          Cd.current = !1
        },
        onPointerCancel: () => {
          Cd.current = !1
        },
        children: [(0, ad.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Nd,
          width: od,
          height: ld,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${kd})`
          }
        }), (0, ad.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, ad.jsx)("img", {
          className: "ShaderPackComparePack",
          src: kd,
          width: od,
          height: ld,
          alt: "",
          draggable: !1
        }), (0, ad.jsx)(fd.b, {
          item: Jd,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Ed(dd) {
      let {
        side: Jd,
        onClick: kd,
        children: pd
      } = dd;
      return (0, ad.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Jd}`,
        onClick: kd,
        children: (0, ad.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: pd
        })
      })
    }
    var cd = kd(4877),
      hd = kd(282),
      rd = kd(6534);
    const ud = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function td(dd) {
      const {
        userContext: Jd
      } = (0, Od.c)(), [Nd, Wd] = (0, pd.useState)(null), [Pd, Zd] = (0, pd.useState)(!1), [gd, Cd] = (0, pd.useState)(!1), [Kd, od] = (0, pd.useState)(null), ld = null === dd || void 0 === dd ? void 0 : dd.packId, Qd = null === dd || void 0 === dd ? void 0 : dd.sourceHash;
      return (0, pd.useEffect)((() => {
        if (Zd(!1), od(null), void 0 === ld) return;
        let dd = !1;
        return Promise.all([(0, Rd.hasUsableWebGpuAdapter)(), (0, rd.g)()]).then((Jd => {
          let [kd, pd] = Jd;
          var Nd;
          dd || (Wd(kd), Zd((null === pd || void 0 === pd || null === (Nd = pd.listing) || void 0 === Nd ? void 0 : Nd.packId) === ld && pd.listing.sourceHash === Qd))
        })).catch((Jd => {
          console.error("Failed to check whether this shader pack can be used", Jd), dd || Wd(!1)
        })), () => {
          dd = !0
        }
      }), [ld, Qd]), {
        webGpuUsable: Nd,
        inUse: Pd,
        busy: gd,
        errorKey: Kd,
        use: () => {
          null !== dd && async function(dd) {
            Cd(!0), od(null);
            try {
              const {
                installListedShaderPack: pd
              } = await Promise.all([kd.e(75), kd.e(132), kd.e(127)]).then((() => kd(40486))), Nd = await pd({
                packId: dd.packId,
                sourceHash: dd.sourceHash,
                name: dd.name,
                ownerName: dd.ownerName,
                description: dd.description
              });
              if ("failed" === Nd.kind) return void od(ud[Nd.reason]);
              Zd(!0), ed.d.recordShaderPackDownload(Jd, dd.packId).catch((dd => {
                console.error("Failed to count a shader pack's download", dd)
              })), (0, cd.l)()
            } catch (pd) {
              console.error("Failed to use the shader pack", pd), od("shaderPack:unexpectedError")
            } finally {
              Cd(!1)
            }
          }(dd)
        }
      }
    }

    function Vd(dd) {
      let {
        packUse: Jd
      } = dd;
      const {
        t: kd
      } = (0, Id.B)(), {
        webGpuUsable: pd,
        inUse: Nd,
        busy: Wd,
        errorKey: Pd,
        use: Zd
      } = Jd;
      return (0, ad.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, ad.jsxs)(Kd.j, {
          disabled: !0 !== pd || Nd,
          loading: Wd,
          onClick: Zd,
          children: [(0, ad.jsx)(qd.e, {
            name: Nd ? "check" : "download"
          }), " ", kd(Nd ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === pd && (0, ad.jsx)("div", {
          className: "ShaderPackUseNote",
          children: kd((0, hd.i)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Pd && (0, ad.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: kd(Pd)
        })]
      })
    }

    function zd() {
      var dd;
      const {
        t: Jd
      } = (0, Id.B)(), kd = (0, Cd.useNavigatePreserveSearch)(), {
        packId: Wd
      } = (0, Nd.y)(), {
        userContext: Pd,
        isUserContextUpdating: Zd
      } = (0, Od.c)(), [od, ld] = (0, pd.useState)(null), [Qd, Rd] = (0, pd.useState)(null), [Gd, vd] = (0, pd.useState)(0), xd = (0, pd.useRef)(0);

      function qd() {
        var dd;
        null !== (dd = (0, Cd.getPreviousLocation)()) && void 0 !== dd && dd.startsWith(sd.X) ? kd(-1) : kd(sd.X)
      }(0, Ld.d)(qd), (0, Xd.d)(), (0, pd.useEffect)((() => {
        if (Zd || void 0 === Wd) return;
        const dd = ++xd.current;
        Rd(null), ed.d.getShaderPack(Pd, Wd).then((Jd => {
          xd.current === dd && ld(Jd)
        })).catch((Jd => {
          xd.current === dd && (console.error("Failed to get the shader pack", Jd), ld(null), Rd({
            error: Jd
          }))
        }))
      }), [Wd, Pd, Zd, Gd]);
      const Bd = () => {
          vd((dd => dd + 1))
        },
        Md = (null === od || void 0 === od ? void 0 : od.packId) === Wd ? od : null,
        Yd = (0, Xd.j)(),
        md = td(null !== (dd = null === Md || void 0 === Md ? void 0 : Md.live) && void 0 !== dd ? dd : null),
        bd = null !== Md && void 0 !== Md && Md.live ? (0, ad.jsx)(Hd, {
          item: Md.live,
          favourites: Yd,
          packUse: md
        }) : null;
      return (0, ad.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, ad.jsx)(Kd.b, {
          onClick: qd,
          children: Jd("shaderPackListing:backToPacks")
        }), null === Md && null === Qd && (0, ad.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, ad.jsx)(gd.b, {})
        }), null !== Qd && (0, ad.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, sd.x)(Qd.error, Jd, "shaderPackListing:loadPackFailed"), (0, ad.jsx)(Kd.d, {
            onClick: Bd,
            children: Jd("general:tryAgain")
          })]
        }), null !== Md && null === Qd && (0, ad.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, ad.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, ad.jsx)("h1", {
              className: "FullyFancyText",
              children: Md.name
            }), bd]
          }), Md.live && (0, ad.jsx)(Ud, {
            item: Md.live
          }), Md.live && (0, ad.jsx)(wd, {
            item: Md.live,
            ownerPreview: Md.ownerPreview,
            bloxdhubSlug: Md.bloxdhubSlug,
            actions: bd
          }), Md.owner && (0, ad.jsx)(Fd, {
            details: Md,
            owner: Md.owner,
            onChanged: Bd
          })]
        })]
      })
    }

    function Hd(dd) {
      let {
        item: Jd,
        favourites: kd,
        packUse: pd
      } = dd;
      const Nd = kd.isFavourite(Jd.packId);
      return (0, ad.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Rd.featureFlags.settings.canUseShaderPacks && (0, ad.jsx)(Vd, {
          packUse: pd
        }), (0, ad.jsx)(Kd.p, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            kd.toggle(Jd.packId)
          },
          isLiked: !0 === Nd,
          isLoading: null === Nd
        })]
      })
    }

    function wd(dd) {
      let {
        item: Jd,
        ownerPreview: kd,
        bloxdhubSlug: pd,
        actions: Nd
      } = dd;
      const {
        t: Zd
      } = (0, Id.B)(), gd = (0, Qd.o)(), Kd = null === pd ? null : (0, Wd.f)(pd);
      return (0, ad.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Jd.description && (0, ad.jsx)("p", {
          className: "ShaderPackDescription",
          children: Jd.description
        }), (0, ad.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== kd || null !== Kd) && (0, ad.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== kd ? (0, ad.jsxs)(ad.Fragment, {
              children: [(0, ad.jsx)(ld.f, {
                playerSocialPreview: kd,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Kd && (0, ad.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Kd,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, ad.jsx)("img", {
                  src: Gd,
                  alt: Wd.c
                })
              })]
            }) : (0, ad.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Kd,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Wd.c, (0, ad.jsx)("img", {
                src: Gd,
                alt: ""
              })]
            })
          }), sd.B.filter((dd => Jd.features.includes(dd))).map((dd => (0, ad.jsx)(Cd.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, sd.L)(dd),
            children: Zd(sd.P[dd])
          }, dd)))]
        }), Nd, (0, ad.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, ad.jsxs)("div", {
            children: [(0, ad.jsx)("dt", {
              children: Zd("shaderPackListing:downloads")
            }), (0, ad.jsx)("dd", {
              children: (0, Pd.Q)(Jd.downloads)
            })]
          }), (0, ad.jsx)(Ad, {
            label: Zd("shaderPackListing:updated"),
            time: Jd.listedUpdatedAt,
            now: gd
          }), (0, ad.jsx)(Ad, {
            label: Zd("shaderPackListing:created"),
            time: Jd.publishedAt,
            now: gd
          }), null !== Jd.gpuCost && (0, ad.jsxs)("div", {
            children: [(0, ad.jsx)("dt", {
              children: Zd("shaderPackListing:lag")
            }), (0, ad.jsx)("dd", {
              children: Zd("shaderPackListing:lagPercent", {
                percent: String((0, sd.U)(Jd.gpuCost))
              })
            })]
          }), (0, ad.jsxs)("div", {
            children: [(0, ad.jsx)("dt", {
              children: Zd("shaderPackListing:size")
            }), (0, ad.jsx)("dd", {
              children: Zd("shaderPackListing:sizeValue", {
                kilobytes: String((0, sd.R)(Jd.sourceBytes))
              })
            })]
          }), (0, ad.jsxs)("div", {
            children: [(0, ad.jsx)("dt", {
              children: Zd("shaderPackListing:files")
            }), (0, ad.jsx)("dd", {
              children: Jd.fileCount
            })]
          })]
        })]
      })
    }

    function Ad(dd) {
      let {
        label: Jd,
        time: kd,
        now: pd
      } = dd;
      const {
        t: Nd,
        selectedLanguage: Wd
      } = (0, Id.B)(), Pd = new Date(kd);
      let gd = Pd.toLocaleDateString();
      if (pd - kd <= 30 * Zd.i) {
        const dd = (0, Id.n)(Wd.code, "shaderPackListing:timeAgo");
        gd = Nd("shaderPackListing:timeAgo", {
          time: (0, Zd.ib)(dd, kd, pd)
        })
      }
      return (0, ad.jsx)(od.f, {
        tooltipInner: Pd.toLocaleString(),
        children: (0, ad.jsxs)("div", {
          children: [(0, ad.jsx)("dt", {
            children: Jd
          }), (0, ad.jsx)("dd", {
            children: gd
          })]
        })
      })
    }
  },
  4904: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1103);

    function Pd(dd) {
      let {
        options: Jd,
        value: kd,
        onChange: pd,
        ariaLabel: Pd,
        className: Zd,
        reselectable: gd = !1,
        keepsFocus: Cd = !1,
        padTabs: Kd
      } = dd;
      const od = void 0 !== Kd;
      return (0, Wd.jsx)("div", {
        className: Nd()("SegmentedToggle", Zd),
        role: "group",
        "aria-label": Pd,
        "data-pad-tabs": Kd,
        children: Jd.map((dd => {
          const Jd = dd.value === kd;
          return (0, Wd.jsx)("button", {
            type: "button",
            "aria-pressed": Jd,
            "data-pad-tab": od || void 0,
            "data-pad-selected": od && Jd ? "true" : void 0,
            "data-pad-default-focus": od && Jd || void 0,
            "aria-label": dd.ariaLabel,
            title: dd.ariaLabel,
            className: Nd()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Jd
            }),
            onMouseDown: Cd ? dd => {
              dd.preventDefault()
            } : void 0,
            onClick: () => {
              Jd && !gd || pd(dd.value)
            },
            children: dd.label
          }, dd.value)
        }))
      })
    }
  },
  4907: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      e: () => Pd
    });
    var pd = kd(56);
    const Nd = new WeakMap,
      Wd = dd => {
        var Jd;
        const kd = dd.closest("[data-pad-slider]");
        return kd && null !== (Jd = Nd.get(kd)) && void 0 !== Jd ? Jd : null
      },
      Pd = (dd, Jd) => {
        const kd = (0, pd.useRef)(Jd);
        kd.current = Jd, (0, pd.useEffect)((() => {
          if (dd.current) return ((dd, Jd) => (Nd.set(dd, Jd), () => {
            Nd.get(dd) === Jd && Nd.delete(dd)
          }))(dd.current, {
            adjust: dd => {
              kd.current.adjust(dd)
            },
            setFraction: dd => {
              kd.current.setFraction(dd)
            },
            endDrag: () => {
              kd.current.endDrag()
            }
          })
        }), [dd])
      }
  },
  6534: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd
    });
    var pd = kd(33);
    const Nd = "shaderPack";
    async function Wd() {
      var dd;
      let Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await pd.f.getItem(Nd, Jd)) && void 0 !== dd ? dd : null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);