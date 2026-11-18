export const id = 99;
export const ids = [99];
export const modules = {
  4200: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => sy,
      d: () => mb,
      f: () => Sy,
      g: () => ly
    });
    var Uy = Wy(55),
      hy = Wy(4207),
      fy = Wy(3630),
      Zy = Wy(1217),
      cb = Wy(4222),
      Py = Wy(898),
      oy = Wy.n(Py),
      By = Wy(1207),
      Ky = Wy(1496),
      ey = Wy(4229),
      qb = Wy(952);

    function sy(yb) {
      let {
        label: bb,
        onClick: Wy,
        checked: Uy,
        circleInfoText: hy,
        className: cb,
        disabled: Py
      } = yb;
      return (0, qb.jsx)("div", {
        "aria-disabled": Py || void 0,
        "data-pad-focusable": !0,
        className: oy()("SettingBox CheckboxContainer", {
          [cb]: cb,
          SettingBoxDisabled: Py
        }),
        onClick: () => {
          Py || Wy(!Uy)
        },
        children: (0, qb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, qb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, qb.jsx)(fy.c, {
              className: "SettingsCheckbox",
              checked: Uy,
              disabled: Py,
              onChange: () => {}
            })
          }), (0, qb.jsxs)("div", {
            className: "CheckboxText",
            children: [bb, hy && (0, qb.jsx)("span", {
              onClick: yb => yb.stopPropagation(),
              children: (0, qb.jsx)(Zy.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: hy
              })
            })]
          })]
        })
      })
    }

    function Sy(yb) {
      let {
        name: bb,
        onChange: Wy,
        min: hy,
        max: fy,
        step: cb,
        initValue: Py,
        circleInfoText: By,
        format: Ky,
        className: ey,
        padStep: sy,
        disabled: Sy = !1,
        selectableMax: ly,
        cappedNote: mb
      } = yb;
      const [Cy, Ty] = (0, Uy.useState)(Py);
      (0, Uy.useEffect)((() => {
        Ty(Py)
      }), [Py]);
      const Vy = void 0 !== ly && ly < fy,
        Jy = Vy ? {
          "--slider-selectable": (ly - hy) / (fy - hy)
        } : void 0;
      return (0, qb.jsxs)("div", {
        className: oy()("SettingBox SettingsSliderDiv", {
          [ey]: ey,
          SettingBoxDisabled: Sy,
          SliderCapped: Vy
        }),
        style: Jy,
        children: [(0, qb.jsxs)("div", {
          className: "SliderText",
          children: [`${bb}: ${Ky?Ky(Cy):Cy}`, By && (0, qb.jsx)(Zy.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: By
          })]
        }), (0, qb.jsx)("div", {
          className: "SliderDiv",
          children: (0, qb.jsx)(Ey, {
            value: Cy,
            min: hy,
            max: fy,
            step: cb,
            onChange: yb => {
              if (Vy && yb >= ly && Cy === ly) return;
              const bb = Vy ? Math.min(yb, ly) : yb;
              Ty(bb), Wy(bb)
            },
            format: Ky,
            padStep: sy,
            disabled: Sy
          })
        }), Vy && mb && (0, qb.jsx)("div", {
          className: "SliderNote",
          children: mb
        })]
      })
    }

    function Ey(yb) {
      var bb;
      let {
        value: Wy,
        min: fy,
        max: Zy,
        step: cb,
        onChange: Py,
        orientation: oy,
        reverse: By,
        setIsChanging: Ky,
        tooltip: sy,
        labels: Sy,
        handleLabel: Ey,
        format: ly,
        onChangeStart: mb,
        onChangeComplete: Cy,
        padStep: Ty,
        disabled: Vy = !1
      } = yb;
      const Jy = (0, Uy.useRef)(null),
        gb = (0, Uy.useRef)(null);
      (0, Uy.useLayoutEffect)((() => {
        var yb, bb, Wy;
        const Uy = null !== (yb = null === (bb = Jy.current) || void 0 === bb ? void 0 : bb.querySelector(".rangeslider")) && void 0 !== yb ? yb : null;
        null === Uy || void 0 === Uy || Uy.setAttribute("data-pad-slider", ""), null === Uy || void 0 === Uy || Uy.setAttribute("data-pad-focusable", ""), null === Uy || void 0 === Uy || null === (Wy = Uy.querySelector(".rangeslider__handle")) || void 0 === Wy || Wy.setAttribute("data-pad-slider-handle", ""), gb.current = Uy
      }), []), (0, Uy.useLayoutEffect)((() => {
        var yb, bb;
        Vy ? null === (yb = gb.current) || void 0 === yb || yb.setAttribute("aria-disabled", "true") : null === (bb = gb.current) || void 0 === bb || bb.removeAttribute("aria-disabled")
      }), [Vy]);
      const Gy = (null !== (bb = String(cb).split(".")[1]) && void 0 !== bb ? bb : "").length,
        Oy = yb => {
          const bb = Number((Math.round((yb - fy) / cb) * cb + fy).toFixed(Gy));
          return Math.min(Zy, Math.max(fy, bb))
        },
        Ry = (0, Uy.useRef)(!1);
      return (0, ey.h)(gb, {
        adjust: yb => {
          if (Vy) return;
          const bb = null !== Ty && void 0 !== Ty ? Ty : Math.max(cb, Math.round((Zy - fy) / 20 / cb) * cb),
            Uy = Oy(Wy + yb * bb * (By ? -1 : 1));
          Uy !== Wy && (null === mb || void 0 === mb || mb(), Py(Uy), null === Cy || void 0 === Cy || Cy())
        },
        setFraction: yb => {
          if (Vy) return;
          const bb = Oy(fy + (By ? 1 - yb : yb) * (Zy - fy));
          bb !== Wy && (Ry.current || (Ry.current = !0, null === mb || void 0 === mb || mb()), Py(bb))
        },
        endDrag: () => {
          Ry.current && (Ry.current = !1, null === Cy || void 0 === Cy || Cy())
        }
      }), (0, qb.jsx)("div", {
        ref: Jy,
        style: {
          display: "contents"
        },
        children: (0, qb.jsx)(hy.b, {
          value: Wy,
          min: fy,
          max: Zy,
          step: cb,
          onChange: Py,
          orientation: oy,
          reverse: By,
          tooltip: sy,
          labels: Sy,
          handleLabel: Ey,
          format: ly,
          onChangeStart: () => {
            null === mb || void 0 === mb || mb(), null === Ky || void 0 === Ky || Ky(!0)
          },
          onChangeComplete: () => {
            null === Ky || void 0 === Ky || Ky(!1), null === Cy || void 0 === Cy || Cy()
          }
        })
      })
    }
    async function ly() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const bb = By.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: yb
      });
      !0 === await bb.getResult() && (0, Ky.reloadBloxd)()
    }

    function mb(yb) {
      let {
        label: bb,
        options: Wy,
        value: Uy,
        onChange: hy,
        circleInfoText: fy
      } = yb;
      return (0, qb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, qb.jsxs)("div", {
          className: "SliderText",
          children: [bb, fy && (0, qb.jsx)(Zy.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: fy
          })]
        }), (0, qb.jsx)(cb.c, {
          ariaLabel: bb,
          options: Wy,
          value: Uy,
          onChange: hy
        })]
      })
    }
  },
  5928: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => zb
    });
    var Uy = Wy(55),
      hy = Wy(1370),
      fy = Wy(5801),
      Zy = Wy(1080),
      cb = Wy(258),
      Py = Wy(1194),
      oy = Wy(1356),
      By = Wy(1273),
      Ky = Wy(1217),
      ey = Wy(2078),
      qb = Wy(2198),
      sy = Wy(3750),
      Sy = Wy(980),
      Ey = Wy(1339),
      ly = Wy(94),
      mb = Wy(1042);
    const Cy = Wy.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Ty = Wy(898),
      Vy = Wy.n(Ty),
      Jy = Wy(910),
      gb = Wy(1207),
      Gy = Wy(5799),
      Oy = Wy(952);
    const Ry = (0, Uy.lazy)((() => Promise.all([Wy.e(95), Wy.e(126), Wy.e(123), Wy.e(117), Wy.e(116)]).then((() => Wy(5833))).then((yb => ({
      default: yb.ShaderPackPublishForm
    })))));

    function vb(yb) {
      let {
        details: bb,
        owner: Wy,
        onChanged: hy
      } = yb;
      const {
        t: Zy
      } = (0, mb.D)(), cb = (0, oy.useNavigatePreserveSearch)(), {
        userContext: Ky
      } = (0, Sy.c)(), [ey, qb] = (0, Uy.useState)(!1), [sy, ly] = (0, Uy.useState)(null), [Cy, Ty] = (0, Uy.useState)(!1), {
        packId: vb,
        name: ib,
        description: My,
        live: Yy
      } = bb;
      async function Xy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy;
        qb(!0), ly(null);
        try {
          await yb(), bb()
        } catch (Wy) {
          console.error("Failed to change a shader pack", Wy), ly((0, Gy.t)(Wy, Zy, "shaderPackListing:ownerActionFailed"))
        } finally {
          qb(!1)
        }
      }
      const ny = (0, Gy.o)(Ky);
      return (0, Oy.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Oy.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Zy("general:manage")
        }), (0, Gy.S)(Wy, !(null === Yy || void 0 === Yy || !Yy.renderId), Date.now(), Zy).map((yb => (0, Oy.jsxs)("div", {
          className: Vy()("ShaderPackOwnerNotice", {
            Warning: "warning" === yb.tone
          }),
          children: [(0, Oy.jsx)(Jy.e, {
            name: "warning" === yb.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Oy.jsxs)("div", {
            children: [yb.text, yb.detail && (0, Oy.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: yb.detail
            })]
          })]
        }, yb.text))), bb.ban && (0, Oy.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Oy.jsx)(Jy.e, {
            name: "ban"
          }), (0, Oy.jsxs)("div", {
            children: ["Banned by ", bb.ban.byName, " on ", new Date(bb.ban.at).toLocaleString()]
          })]
        }), sy && (0, Oy.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: sy
        }), (0, Oy.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Oy.jsxs)(By.M, {
            disabled: ey,
            onClick: () => {
              !async function() {
                const yb = await gb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: ib,
                  maxLength: fy.H,
                  submitText: "general:save",
                  validate: yb => yb.trim().length < fy.J ? Zy("shaderPackListing:nameTooShort", {
                    min: String(fy.J)
                  }) : null
                }).getResult();
                "notificationTornDown" !== yb && "submit" === (null === yb || void 0 === yb ? void 0 : yb.type) && yb.value.trim() !== ib && await Xy((() => Ey.c.updateShaderPack(Ky, {
                  packId: vb,
                  name: yb.value.trim()
                })))
              }()
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: "pen"
            }), " ", Zy("shaderPackListing:rename")]
          }), (0, Oy.jsxs)(By.M, {
            disabled: ey,
            onClick: () => {
              !async function() {
                const yb = await gb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: My,
                  maxLength: fy.r,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== yb && "submit" === (null === yb || void 0 === yb ? void 0 : yb.type) && yb.value.trim() !== My && await Xy((() => Ey.c.updateShaderPack(Ky, {
                  packId: vb,
                  description: yb.value.trim()
                })))
              }()
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: "file-lines"
            }), " ", Zy("shaderPackListing:editDescription")]
          }), (0, Oy.jsxs)(By.M, {
            disabled: ey || Wy.isBanned && !Wy.listed,
            onClick: () => {
              Xy((() => Ey.c.updateShaderPack(Ky, {
                packId: vb,
                listed: !Wy.listed
              })))
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: Wy.listed ? "eye-slash" : "eye"
            }), " ", Zy(Wy.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Wy.isBanned && (0, Oy.jsxs)(By.f, {
            disabled: ey,
            onClick: () => {
              Ty(!Cy)
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: "upload"
            }), " ", Zy("shaderPackListing:uploadVersion")]
          }), (0, Oy.jsxs)(By.F, {
            disabled: ey || Wy.isBanned,
            onClick: () => {
              !async function() {
                !0 === await gb.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Xy((() => Ey.c.deleteShaderPack(Ky, vb)), (() => {
                  cb(`${Gy.P}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: "trash-can"
            }), " ", Zy("general:delete")]
          }), ny && (0, Oy.jsxs)(By.F, {
            disabled: ey,
            onClick: () => {
              Xy((() => Ey.c.setShaderPackBanned(Ky, vb, !Wy.isBanned)))
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: Wy.isBanned ? "circle-check" : "ban"
            }), " ", Wy.isBanned ? "Unban" : "Ban"]
          })]
        }), Cy && (0, Oy.jsx)(Uy.Suspense, {
          fallback: (0, Oy.jsx)(Py.e, {}),
          children: (0, Oy.jsx)(Ry, {
            existing: {
              packId: vb,
              name: ib,
              description: My
            },
            onPublished: () => {
              Ty(!1), hy()
            }
          })
        })]
      })
    }
    var ib = Wy(70),
      My = Wy(1541),
      Yy = Wy(1136),
      Xy = Wy(4229),
      ny = Wy(1052),
      uy = Wy(5815),
      rb = Wy(5807),
      Hy = Wy(5821);

    function ab(yb) {
      let {
        item: bb
      } = yb;
      const {
        t: Wy
      } = (0, mb.D)(), [hy] = (0, uy.k)(), [Zy, cb] = (0, Uy.useState)(hy), [Py, oy] = (0, Uy.useState)(!1), [By, Ky] = (0, Uy.useState)(!1), {
        s3Url: ey
      } = ny.clientSideServerUrls, {
        width: qb,
        height: sy
      } = fy.v.large, Sy = (0, fy.z)(ey, bb, Zy, "large"), {
        renderVersion: Ey
      } = bb;
      return (0, Oy.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Oy.jsx)(Hy.d, {
          selected: Zy,
          onSelect: yb => {
            cb(yb), oy(!1)
          },
          imageUrl: yb => (0, fy.z)(ey, bb, yb, "thumb")
        }), (0, Oy.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Py && (0, Oy.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Ey ? void 0 : Wy("shaderPackListing:fullSize"),
            disabled: null === Ey,
            onClick: () => {
              Ky(!0)
            },
            children: [(0, Oy.jsx)("img", {
              src: Sy,
              width: qb,
              height: sy,
              alt: Wy(Gy.$[Zy]),
              draggable: !1
            }), (0, Oy.jsx)(rb.c, {
              item: bb
            })]
          }), !Py && null !== Ey && (0, Oy.jsxs)(Qy, {
            side: "Right",
            onClick: () => {
              oy(!0)
            },
            children: [(0, Oy.jsx)(Jy.e, {
              name: "arrows-left-right"
            }), " ", Wy("shaderPackListing:compare")]
          }), Py && null !== Ey && (0, Oy.jsx)(Ly, {
            item: bb,
            packUrl: Sy,
            baselineUrl: (0, fy.p)(ey, Ey, Zy, "large")
          }), Py && (0, Oy.jsx)(Qy, {
            side: "Left",
            onClick: () => {
              oy(!1)
            },
            children: Wy("shaderPackListing:withPack")
          }), Py && (0, Oy.jsx)(Qy, {
            side: "Right",
            onClick: () => {
              oy(!1)
            },
            children: Wy("shaderPackListing:withoutPack")
          })]
        }), By && (0, Oy.jsx)(Fy, {
          fullUrl: (0, fy.z)(ey, bb, Zy, "full"),
          largeUrl: Sy,
          alt: Wy(Gy.$[Zy]),
          onClose: () => {
            Ky(!1)
          }
        })]
      })
    }

    function Fy(yb) {
      let {
        fullUrl: bb,
        largeUrl: Wy,
        alt: hy,
        onClose: fy
      } = yb;
      const Zy = (0, Uy.useRef)(null);
      return (0, Yy.x)("popup", Zy, fy), (0, Uy.useEffect)((() => {
        function yb(yb) {
          "Escape" === yb.key && (yb.stopPropagation(), fy())
        }
        return window.addEventListener("keydown", yb, !0), () => {
          window.removeEventListener("keydown", yb, !0)
        }
      }), [fy]), (0, ib.createPortal)((0, Oy.jsxs)("div", {
        ref: Zy,
        className: "ShaderPackFullSize",
        onClick: fy,
        children: [(0, Oy.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: bb,
          alt: hy,
          draggable: !1,
          style: {
            backgroundImage: `url(${Wy})`
          }
        }), (0, Oy.jsx)(By.h, {
          className: "ShaderPackFullSizeClose",
          onClick: fy
        })]
      }), document.body)
    }
    const py = 5;

    function Ly(yb) {
      let {
        item: bb,
        packUrl: Wy,
        baselineUrl: hy
      } = yb;
      const {
        t: Zy
      } = (0, mb.D)(), [cb, Py] = (0, Uy.useState)(50), oy = (0, Uy.useRef)(!1), By = (0, Uy.useRef)(null), {
        width: Ky,
        height: ey
      } = fy.v.large;

      function qb(yb) {
        Py((bb => (0, My.f)(bb + yb, 0, 100)))
      }

      function sy(yb) {
        const bb = yb.currentTarget.getBoundingClientRect();
        Py((0, My.f)((yb.clientX - bb.left) / bb.width * 100, 0, 100))
      }
      return (0, Xy.h)(By, {
        adjust: yb => {
          qb(yb * py)
        },
        setFraction: yb => {
          Py(100 * yb)
        },
        endDrag: () => {}
      }), (0, Oy.jsxs)("div", {
        ref: By,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Zy("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(cb),
        style: {
          "--split": `${cb}%`
        },
        onKeyDown: function(yb) {
          const bb = "ArrowLeft" === yb.key ? -py : "ArrowRight" === yb.key ? py : 0;
          0 !== bb && (yb.preventDefault(), qb(bb))
        },
        onPointerDown: yb => {
          oy.current = !0, yb.currentTarget.setPointerCapture(yb.pointerId), sy(yb)
        },
        onPointerMove: yb => {
          oy.current && sy(yb)
        },
        onPointerUp: () => {
          oy.current = !1
        },
        onPointerCancel: () => {
          oy.current = !1
        },
        children: [(0, Oy.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: hy,
          width: Ky,
          height: ey,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Wy})`
          }
        }), (0, Oy.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Oy.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Wy,
          width: Ky,
          height: ey,
          alt: "",
          draggable: !1
        }), (0, Oy.jsx)(rb.c, {
          item: bb,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Qy(yb) {
      let {
        side: bb,
        onClick: Wy,
        children: Uy
      } = yb;
      return (0, Oy.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${bb}`,
        onClick: Wy,
        children: (0, Oy.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Uy
        })
      })
    }
    var jb = Wy(4200),
      Dy = Wy(240),
      tb = Wy(5923);
    const wy = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function kb(yb) {
      const {
        userContext: bb
      } = (0, Sy.c)(), [hy, fy] = (0, Uy.useState)(null), [Zy, cb] = (0, Uy.useState)(!1), [Py, oy] = (0, Uy.useState)(!1), [By, Ky] = (0, Uy.useState)(null), ey = null === yb || void 0 === yb ? void 0 : yb.packId, qb = null === yb || void 0 === yb ? void 0 : yb.sourceHash;
      return (0, Uy.useEffect)((() => {
        if (cb(!1), Ky(null), void 0 === ey) return;
        let yb = !1;
        return Promise.all([(0, ly.hasUsableWebGpuAdapter)(), (0, tb.g)()]).then((bb => {
          let [Wy, Uy] = bb;
          var hy;
          yb || (fy(Wy), cb((null === Uy || void 0 === Uy || null === (hy = Uy.listing) || void 0 === hy ? void 0 : hy.packId) === ey && Uy.listing.sourceHash === qb))
        })).catch((bb => {
          console.error("Failed to check whether this shader pack can be used", bb), yb || fy(!1)
        })), () => {
          yb = !0
        }
      }), [ey, qb]), {
        webGpuUsable: hy,
        inUse: Zy,
        busy: Py,
        errorKey: By,
        use: () => {
          null !== yb && async function(yb) {
            oy(!0), Ky(null);
            try {
              const {
                installListedShaderPack: Uy
              } = await Promise.all([Wy.e(126), Wy.e(123), Wy.e(118)]).then((() => Wy(39003))), hy = await Uy({
                packId: yb.packId,
                sourceHash: yb.sourceHash,
                name: yb.name,
                ownerName: yb.ownerName,
                description: yb.description
              });
              if ("failed" === hy.kind) return void Ky(wy[hy.reason]);
              cb(!0), Ey.c.recordShaderPackDownload(bb, yb.packId).catch((yb => {
                console.error("Failed to count a shader pack's download", yb)
              })), (0, jb.g)()
            } catch (Uy) {
              console.error("Failed to use the shader pack", Uy), Ky("shaderPack:unexpectedError")
            } finally {
              oy(!1)
            }
          }(yb)
        }
      }
    }

    function Ny(yb) {
      let {
        packUse: bb
      } = yb;
      const {
        t: Wy
      } = (0, mb.D)(), {
        webGpuUsable: Uy,
        inUse: hy,
        busy: fy,
        errorKey: Zy,
        use: cb
      } = bb;
      return (0, Oy.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Oy.jsxs)(By.i, {
          disabled: !0 !== Uy || hy,
          loading: fy,
          onClick: cb,
          children: [(0, Oy.jsx)(Jy.e, {
            name: hy ? "check" : "download"
          }), " ", Wy(hy ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Uy && (0, Oy.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Wy((0, Dy.b)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Zy && (0, Oy.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Wy(Zy)
        })]
      })
    }

    function zb() {
      var yb;
      const {
        t: bb
      } = (0, mb.D)(), Wy = (0, oy.useNavigatePreserveSearch)(), {
        packId: fy
      } = (0, hy.F)(), {
        userContext: Zy,
        isUserContextUpdating: cb
      } = (0, Sy.c)(), [Ky, ey] = (0, Uy.useState)(null), [qb, ly] = (0, Uy.useState)(null), [Cy, Ty] = (0, Uy.useState)(0), Vy = (0, Uy.useRef)(0);

      function Jy() {
        var yb;
        null !== (yb = (0, oy.getPreviousLocation)()) && void 0 !== yb && yb.startsWith(Gy.P) ? Wy(-1) : Wy(Gy.P)
      }(0, sy.e)(Jy), (0, uy.e)(), (0, Uy.useEffect)((() => {
        if (cb || void 0 === fy) return;
        const yb = ++Vy.current;
        ly(null), Ey.c.getShaderPack(Zy, fy).then((bb => {
          Vy.current === yb && ey(bb)
        })).catch((bb => {
          Vy.current === yb && (console.error("Failed to get the shader pack", bb), ey(null), ly({
            error: bb
          }))
        }))
      }), [fy, Zy, cb, Cy]);
      const gb = () => {
          Ty((yb => yb + 1))
        },
        Ry = (null === Ky || void 0 === Ky ? void 0 : Ky.packId) === fy ? Ky : null,
        ib = (0, uy.o)(),
        My = kb(null !== (yb = null === Ry || void 0 === Ry ? void 0 : Ry.live) && void 0 !== yb ? yb : null),
        Yy = null !== Ry && void 0 !== Ry && Ry.live ? (0, Oy.jsx)(Iy, {
          item: Ry.live,
          favourites: ib,
          packUse: My
        }) : null;
      return (0, Oy.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Oy.jsx)(By.d, {
          onClick: Jy,
          children: bb("shaderPackListing:backToPacks")
        }), null === Ry && null === qb && (0, Oy.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Oy.jsx)(Py.e, {})
        }), null !== qb && (0, Oy.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Gy.t)(qb.error, bb, "shaderPackListing:loadPackFailed"), (0, Oy.jsx)(By.f, {
            onClick: gb,
            children: bb("general:tryAgain")
          })]
        }), null !== Ry && null === qb && (0, Oy.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Oy.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Oy.jsx)("h1", {
              className: "FullyFancyText",
              children: Ry.name
            }), Yy]
          }), Ry.live && (0, Oy.jsx)(ab, {
            item: Ry.live
          }), Ry.live && (0, Oy.jsx)(xb, {
            item: Ry.live,
            ownerPreview: Ry.ownerPreview,
            bloxdhubSlug: Ry.bloxdhubSlug,
            actions: Yy
          }), Ry.owner && (0, Oy.jsx)(vb, {
            details: Ry,
            owner: Ry.owner,
            onChanged: gb
          })]
        })]
      })
    }

    function Iy(yb) {
      let {
        item: bb,
        favourites: Wy,
        packUse: Uy
      } = yb;
      const hy = Wy.isFavourite(bb.packId);
      return (0, Oy.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [ly.featureFlags.settings.canUseShaderPacks && (0, Oy.jsx)(Ny, {
          packUse: Uy
        }), (0, Oy.jsx)(By.n, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Wy.toggle(bb.packId)
          },
          isLiked: !0 === hy,
          isLoading: null === hy
        })]
      })
    }

    function xb(yb) {
      let {
        item: bb,
        ownerPreview: Wy,
        bloxdhubSlug: Uy,
        actions: hy
      } = yb;
      const {
        t: cb
      } = (0, mb.D)(), Py = (0, qb.m)(), By = null === Uy ? null : (0, fy.h)(Uy);
      return (0, Oy.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [bb.description && (0, Oy.jsx)("p", {
          className: "ShaderPackDescription",
          children: bb.description
        }), (0, Oy.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Wy || null !== By) && (0, Oy.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Wy ? (0, Oy.jsxs)(Oy.Fragment, {
              children: [(0, Oy.jsx)(ey.d, {
                playerSocialPreview: Wy,
                showLocation: !1,
                linkToProfile: !0
              }), null !== By && (0, Oy.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: By,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Oy.jsx)("img", {
                  src: Cy,
                  alt: fy.e
                })
              })]
            }) : (0, Oy.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: By,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [fy.e, (0, Oy.jsx)("img", {
                src: Cy,
                alt: ""
              })]
            })
          }), Gy.u.filter((yb => bb.features.includes(yb))).map((yb => (0, Oy.jsx)(oy.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Gy.F)(yb),
            children: cb(Gy.I[yb])
          }, yb)))]
        }), hy, (0, Oy.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Oy.jsxs)("div", {
            children: [(0, Oy.jsx)("dt", {
              children: cb("shaderPackListing:downloads")
            }), (0, Oy.jsx)("dd", {
              children: (0, Zy.S)(bb.downloads)
            })]
          }), (0, Oy.jsx)(Ay, {
            label: cb("shaderPackListing:updated"),
            time: bb.listedUpdatedAt,
            now: Py
          }), (0, Oy.jsx)(Ay, {
            label: cb("shaderPackListing:created"),
            time: bb.publishedAt,
            now: Py
          }), null !== bb.gpuCost && (0, Oy.jsxs)("div", {
            children: [(0, Oy.jsx)("dt", {
              children: cb("shaderPackListing:lag")
            }), (0, Oy.jsx)("dd", {
              children: cb("shaderPackListing:lagPercent", {
                percent: String((0, Gy.L)(bb.gpuCost))
              })
            })]
          }), (0, Oy.jsxs)("div", {
            children: [(0, Oy.jsx)("dt", {
              children: cb("shaderPackListing:size")
            }), (0, Oy.jsx)("dd", {
              children: cb("shaderPackListing:sizeValue", {
                kilobytes: String((0, Gy.J)(bb.sourceBytes))
              })
            })]
          }), (0, Oy.jsxs)("div", {
            children: [(0, Oy.jsx)("dt", {
              children: cb("shaderPackListing:files")
            }), (0, Oy.jsx)("dd", {
              children: bb.fileCount
            })]
          })]
        })]
      })
    }

    function Ay(yb) {
      let {
        label: bb,
        time: Wy,
        now: Uy
      } = yb;
      const {
        t: hy,
        selectedLanguage: fy
      } = (0, mb.D)(), Zy = new Date(Wy);
      let Py = Zy.toLocaleDateString();
      if (Uy - Wy <= 30 * cb.j) {
        const yb = (0, mb.o)(fy.code, "shaderPackListing:timeAgo");
        Py = hy("shaderPackListing:timeAgo", {
          time: (0, cb.bb)(yb, Wy, Uy)
        })
      }
      return (0, Oy.jsx)(Ky.f, {
        tooltipInner: Zy.toLocaleString(),
        children: (0, Oy.jsxs)("div", {
          children: [(0, Oy.jsx)("dt", {
            children: bb
          }), (0, Oy.jsx)("dd", {
            children: Py
          })]
        })
      })
    }
  },
  4222: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(952);

    function Zy(yb) {
      let {
        options: bb,
        value: Wy,
        onChange: Uy,
        ariaLabel: Zy
      } = yb;
      return (0, fy.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": Zy,
        children: bb.map((yb => {
          const bb = yb.value === Wy;
          return (0, fy.jsx)("button", {
            type: "button",
            "aria-pressed": bb,
            className: hy()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bb
            }),
            onClick: () => {
              bb || Uy(yb.value)
            },
            children: yb.label
          }, yb.value)
        }))
      })
    }
  },
  4229: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => Zy
    });
    var Uy = Wy(55);
    const hy = new WeakMap,
      fy = yb => {
        var bb;
        const Wy = yb.closest("[data-pad-slider]");
        return Wy && null !== (bb = hy.get(Wy)) && void 0 !== bb ? bb : null
      },
      Zy = (yb, bb) => {
        const Wy = (0, Uy.useRef)(bb);
        Wy.current = bb, (0, Uy.useEffect)((() => {
          if (yb.current) return ((yb, bb) => (hy.set(yb, bb), () => {
            hy.get(yb) === bb && hy.delete(yb)
          }))(yb.current, {
            adjust: yb => {
              Wy.current.adjust(yb)
            },
            setFraction: yb => {
              Wy.current.setFraction(yb)
            },
            endDrag: () => {
              Wy.current.endDrag()
            }
          })
        }), [yb])
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
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);