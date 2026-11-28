export const id = 134;
export const ids = [134];
export const modules = {
  6050: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Cb,
      f: () => hb,
      j: () => Eb,
      l: () => mb
    });
    var eb = Mb(64),
      Hb = Mb(6056),
      pb = Mb(5193),
      Vb = Mb(1516),
      gb = Mb(4374),
      lb = Mb(1159),
      Lb = Mb.n(lb),
      Ib = Mb(1504),
      Ob = Mb(1965),
      Ub = Mb(6090),
      tb = Mb(1364);

    function Cb(bb) {
      let {
        label: wb,
        onClick: Mb,
        checked: eb,
        circleInfoText: Hb,
        className: gb,
        disabled: lb,
        note: Ib
      } = bb;
      return (0, tb.jsxs)("div", {
        "aria-disabled": lb || void 0,
        "data-pad-focusable": !0,
        className: Lb()("SettingBox CheckboxContainer", {
          [gb]: gb,
          SettingBoxDisabled: lb
        }),
        onClick: () => {
          lb || Mb(!eb)
        },
        children: [(0, tb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, tb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, tb.jsx)(pb.c, {
              className: "SettingsCheckbox",
              checked: eb,
              disabled: lb,
              onChange: () => {}
            })
          }), (0, tb.jsxs)("div", {
            className: "CheckboxText",
            children: [wb, Hb && (0, tb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, tb.jsx)(Vb.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Hb
              })
            })]
          })]
        }), Ib && (0, tb.jsx)("div", {
          className: "SettingNote",
          children: Ib
        })]
      })
    }

    function Eb(bb) {
      let {
        name: wb,
        onChange: Mb,
        min: Hb,
        max: pb,
        step: gb,
        initValue: lb,
        circleInfoText: Ib,
        format: Ob,
        className: Ub,
        padStep: Cb,
        disabled: Eb = !1,
        selectableMax: Fb,
        cappedNote: Bb,
        note: mb,
        onChangeComplete: hb
      } = bb;
      const [zb, Xb] = (0, eb.useState)(lb), xb = (0, eb.useRef)(lb);
      (0, eb.useEffect)((() => {
        xb.current = lb, Xb(lb)
      }), [lb]);
      const jb = void 0 !== Fb && Fb < pb,
        Kb = jb ? {
          "--slider-selectable": (Fb - Hb) / (pb - Hb)
        } : void 0,
        rb = jb && Bb ? Bb : mb;
      return (0, tb.jsxs)("div", {
        className: Lb()("SettingBox SettingsSliderDiv", {
          [Ub]: Ub,
          SettingBoxDisabled: Eb,
          SliderCapped: jb
        }),
        style: Kb,
        children: [(0, tb.jsxs)("div", {
          className: "SliderText",
          children: [`${wb}: ${Ob?Ob(zb):zb}`, Ib && (0, tb.jsx)(Vb.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Ib
          })]
        }), (0, tb.jsx)("div", {
          className: "SliderDiv",
          children: (0, tb.jsx)(sb, {
            value: zb,
            min: Hb,
            max: pb,
            step: gb,
            onChange: bb => {
              if (jb && bb >= Fb && zb === Fb) return;
              const wb = jb ? Math.min(bb, Fb) : bb;
              xb.current = wb, Xb(wb), Mb(wb)
            },
            onChangeComplete: hb && (() => {
              hb(xb.current)
            }),
            format: Ob,
            padStep: Cb,
            disabled: Eb
          })
        }), rb && (0, tb.jsx)("div", {
          className: "SettingNote",
          children: rb
        })]
      })
    }
    const Fb = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Bb(bb) {
      var wb;
      return (null !== (wb = String(bb).split(".")[1]) && void 0 !== wb ? wb : "").length
    }

    function sb(bb) {
      let {
        value: wb,
        min: Mb,
        max: pb,
        step: Vb,
        onChange: gb,
        orientation: lb,
        reverse: Lb,
        setIsChanging: Ib,
        tooltip: Ob,
        labels: Cb,
        handleLabel: Eb,
        format: sb,
        onChangeStart: mb,
        onChangeComplete: hb,
        padStep: zb,
        disabled: Xb = !1
      } = bb;
      const xb = (0, eb.useRef)(null),
        jb = (0, eb.useRef)(null);
      (0, eb.useLayoutEffect)((() => {
        var bb, wb, Mb;
        const eb = null !== (bb = null === (wb = xb.current) || void 0 === wb ? void 0 : wb.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === eb || void 0 === eb || eb.setAttribute("data-pad-slider", ""), null === eb || void 0 === eb || eb.setAttribute("data-pad-focusable", ""), null === eb || void 0 === eb || null === (Mb = eb.querySelector(".rangeslider__handle")) || void 0 === Mb || Mb.setAttribute("data-pad-slider-handle", ""), jb.current = eb
      }), []), (0, eb.useLayoutEffect)((() => {
        var bb, wb;
        Xb ? null === (bb = jb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (wb = jb.current) || void 0 === wb || wb.removeAttribute("aria-disabled")
      }), [Xb]);
      const Kb = Math.max(Bb(Vb), Bb(Mb)),
        rb = bb => {
          if (bb >= pb) return pb;
          if (bb <= Mb) return Mb;
          const wb = Number((Math.round((bb - Mb) / Vb) * Vb + Mb).toFixed(Kb));
          return Math.min(pb, Math.max(Mb, wb))
        },
        Rb = (0, eb.useRef)(hb);
      Rb.current = hb, (0, eb.useEffect)((() => {
        const bb = xb.current;
        if (!bb) return;
        const wb = bb => {
          var wb;
          Fb.has(bb.key) && (null === (wb = Rb.current) || void 0 === wb || wb.call(Rb))
        };
        return bb.addEventListener("keyup", wb), () => {
          bb.removeEventListener("keyup", wb)
        }
      }), []);
      const Db = (0, eb.useRef)(!1);
      return (0, Ub.f)(jb, {
        adjust: bb => {
          if (Xb) return;
          const eb = null !== zb && void 0 !== zb ? zb : Math.max(Vb, Math.round((pb - Mb) / 20 / Vb) * Vb),
            Hb = rb(wb + bb * eb * (Lb ? -1 : 1));
          Hb !== wb && (null === mb || void 0 === mb || mb(), gb(Hb), null === hb || void 0 === hb || hb())
        },
        setFraction: bb => {
          if (Xb) return;
          const eb = rb(Mb + (Lb ? 1 - bb : bb) * (pb - Mb));
          eb !== wb && (Db.current || (Db.current = !0, null === mb || void 0 === mb || mb()), gb(eb))
        },
        endDrag: () => {
          Db.current && (Db.current = !1, null === hb || void 0 === hb || hb())
        }
      }), (0, tb.jsx)("div", {
        ref: xb,
        style: {
          display: "contents"
        },
        children: (0, tb.jsx)(Hb.e, {
          value: wb,
          min: Mb,
          max: pb,
          step: Vb,
          onChange: bb => {
            gb(rb(bb))
          },
          orientation: lb,
          reverse: Lb,
          tooltip: Ob,
          labels: Cb,
          handleLabel: Eb,
          format: sb,
          onChangeStart: () => {
            null === mb || void 0 === mb || mb(), null === Ib || void 0 === Ib || Ib(!0)
          },
          onChangeComplete: () => {
            null === Ib || void 0 === Ib || Ib(!1), null === hb || void 0 === hb || hb()
          }
        })
      })
    }
    async function mb() {
      const bb = Ib.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await bb.getResult() && (0, Ob.reloadBloxd)()
    }

    function hb(bb) {
      let {
        label: wb,
        options: Mb,
        value: eb,
        onChange: Hb,
        circleInfoText: pb
      } = bb;
      return (0, tb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, tb.jsxs)("div", {
          className: "SliderText",
          children: [wb, pb && (0, tb.jsx)(Vb.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pb
          })]
        }), (0, tb.jsx)(gb.c, {
          ariaLabel: wb,
          options: Mb,
          value: eb,
          onChange: Hb
        })]
      })
    }
  },
  7854: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => ob
    });
    var eb = Mb(64),
      Hb = Mb(1696),
      pb = Mb(7760),
      Vb = Mb(1301),
      gb = Mb(382),
      lb = Mb(1720),
      Lb = Mb(1468),
      Ib = Mb(1686),
      Ob = Mb(1616),
      Ub = Mb(1516),
      tb = Mb(1799),
      Cb = Mb(3797),
      Eb = Mb(3948),
      Fb = Mb(5405),
      Bb = Mb(1179),
      sb = Mb(1677),
      mb = Mb(110),
      hb = Mb(1259);
    const zb = Mb.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Xb = Mb(1159),
      xb = Mb.n(Xb),
      jb = Mb(1475),
      Kb = Mb(1504),
      rb = Mb(7754),
      Rb = Mb(1364);
    const Db = (0, eb.lazy)((() => Promise.all([Mb.e(128), Mb.e(91), Mb.e(157), Mb.e(156), Mb.e(135), Mb.e(716)]).then((() => Mb(7784))).then((bb => ({
      default: bb.ShaderPackPublishForm
    })))));

    function cb(bb) {
      let {
        details: wb,
        owner: Mb,
        onChanged: Hb
      } = bb;
      const {
        t: Vb
      } = (0, hb.C)(), gb = (0, Ib.useNavigatePreserveSearch)(), {
        userContext: lb
      } = (0, Bb.e)(), [Ub, tb] = (0, eb.useState)(!1), [Cb, Eb] = (0, eb.useState)(null), [Fb, mb] = (0, eb.useState)(!1), {
        packId: zb,
        name: Xb,
        description: cb,
        live: Yb
      } = wb;
      async function Zb(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb;
        tb(!0), Eb(null);
        try {
          await bb(), wb()
        } catch (Mb) {
          console.error("Failed to change a shader pack", Mb), Eb((0, rb.t)(Mb, Vb, "shaderPackListing:ownerActionFailed"))
        } finally {
          tb(!1)
        }
      }
      const fb = (0, rb.m)(lb);
      return (0, Rb.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Rb.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Vb("general:manage")
        }), (0, rb.Q)(Mb, !(null === Yb || void 0 === Yb || !Yb.renderId), Date.now(), Vb).map((bb => (0, Rb.jsxs)("div", {
          className: xb()("ShaderPackOwnerNotice", {
            Warning: "warning" === bb.tone
          }),
          children: [(0, Rb.jsx)(jb.b, {
            name: "warning" === bb.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Rb.jsxs)("div", {
            children: [bb.text, bb.detail && (0, Rb.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: bb.detail
            })]
          })]
        }, bb.text))), wb.ban && (0, Rb.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Rb.jsx)(jb.b, {
            name: "ban"
          }), (0, Rb.jsxs)("div", {
            children: ["Banned by ", wb.ban.byName, " on ", new Date(wb.ban.at).toLocaleString()]
          })]
        }), Cb && (0, Rb.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Cb
        }), (0, Rb.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Rb.jsxs)(Ob.Y, {
            disabled: Ub,
            onClick: () => {
              !async function() {
                const bb = await Kb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Xb,
                  maxLength: pb.G,
                  submitText: "general:save",
                  validate: bb => bb.trim().length < pb.H ? Vb("shaderPackListing:nameTooShort", {
                    min: String(pb.H)
                  }) : null
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== Xb && await Zb((() => sb.e.updateShaderPack(lb, {
                  packId: zb,
                  name: bb.value.trim()
                })))
              }()
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: "pen"
            }), " ", Vb("shaderPackListing:rename")]
          }), (0, Rb.jsxs)(Ob.Y, {
            disabled: Ub,
            onClick: () => {
              !async function() {
                const bb = await Kb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: cb,
                  maxLength: pb.y,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== cb && await Zb((() => sb.e.updateShaderPack(lb, {
                  packId: zb,
                  description: bb.value.trim()
                })))
              }()
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: "file-lines"
            }), " ", Vb("shaderPackListing:editDescription")]
          }), (0, Rb.jsxs)(Ob.Y, {
            disabled: Ub || Mb.isBanned && !Mb.listed,
            onClick: () => {
              Zb((() => sb.e.updateShaderPack(lb, {
                packId: zb,
                listed: !Mb.listed
              })))
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: Mb.listed ? "eye-slash" : "eye"
            }), " ", Vb(Mb.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Mb.isBanned && (0, Rb.jsxs)(Ob.f, {
            disabled: Ub,
            onClick: () => {
              mb(!Fb)
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: "upload"
            }), " ", Vb("shaderPackListing:uploadVersion")]
          }), (0, Rb.jsxs)(Ob.S, {
            disabled: Ub || Mb.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Kb.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Zb((() => sb.e.deleteShaderPack(lb, zb)), (() => {
                  gb(`${rb.N}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: "trash-can"
            }), " ", Vb("general:delete")]
          }), fb && (0, Rb.jsxs)(Ob.S, {
            disabled: Ub,
            onClick: () => {
              Zb((() => sb.e.setShaderPackBanned(lb, zb, !Mb.isBanned)))
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: Mb.isBanned ? "circle-check" : "ban"
            }), " ", Mb.isBanned ? "Unban" : "Ban"]
          })]
        }), Fb && (0, Rb.jsx)(eb.Suspense, {
          fallback: (0, Rb.jsx)(Lb.c, {}),
          children: (0, Rb.jsx)(Db, {
            existing: {
              packId: zb,
              name: Xb,
              description: cb
            },
            onPublished: () => {
              mb(!1), Hb()
            }
          })
        })]
      })
    }
    var Yb = Mb(81),
      Zb = Mb(2107),
      fb = Mb(1350),
      Ab = Mb(6090),
      Wb = Mb(1271),
      Jb = Mb(7768),
      Sb = Mb(7762),
      Nb = Mb(7780);

    function vb(bb) {
      let {
        item: wb
      } = bb;
      const {
        t: Mb
      } = (0, hb.C)(), [Hb] = (0, Jb.j)(), [Vb, gb] = (0, eb.useState)(Hb), [lb, Lb] = (0, eb.useState)(!1), [Ib, Ob] = (0, eb.useState)(!1), {
        s3Url: Ub
      } = Wb.clientSideServerUrls, {
        width: tb,
        height: Cb
      } = pb.z.large, Eb = (0, pb.B)(Ub, wb, Vb, "large"), {
        renderVersion: Fb
      } = wb;
      return (0, Rb.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Rb.jsx)(Nb.c, {
          selected: Vb,
          onSelect: bb => {
            gb(bb), Lb(!1)
          },
          imageUrl: bb => (0, pb.B)(Ub, wb, bb, "thumb")
        }), (0, Rb.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!lb && (0, Rb.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Fb ? void 0 : Mb("shaderPackListing:fullSize"),
            disabled: null === Fb,
            onClick: () => {
              Ob(!0)
            },
            children: [(0, Rb.jsx)("img", {
              src: Eb,
              width: tb,
              height: Cb,
              alt: Mb(rb.cb[Vb]),
              draggable: !1
            }), (0, Rb.jsx)(Sb.b, {
              item: wb
            })]
          }), !lb && null !== Fb && (0, Rb.jsxs)(ab, {
            side: "Right",
            onClick: () => {
              Lb(!0)
            },
            children: [(0, Rb.jsx)(jb.b, {
              name: "arrows-left-right"
            }), " ", Mb("shaderPackListing:compare")]
          }), lb && null !== Fb && (0, Rb.jsx)(qb, {
            item: wb,
            packUrl: Eb,
            baselineUrl: (0, pb.u)(Ub, Fb, Vb, "large")
          }), lb && (0, Rb.jsx)(ab, {
            side: "Left",
            onClick: () => {
              Lb(!1)
            },
            children: Mb("shaderPackListing:withPack")
          }), lb && (0, Rb.jsx)(ab, {
            side: "Right",
            onClick: () => {
              Lb(!1)
            },
            children: Mb("shaderPackListing:withoutPack")
          })]
        }), Ib && (0, Rb.jsx)(Qb, {
          fullUrl: (0, pb.B)(Ub, wb, Vb, "full"),
          largeUrl: Eb,
          alt: Mb(rb.cb[Vb]),
          onClose: () => {
            Ob(!1)
          }
        })]
      })
    }

    function Qb(bb) {
      let {
        fullUrl: wb,
        largeUrl: Mb,
        alt: Hb,
        onClose: pb
      } = bb;
      const Vb = (0, eb.useRef)(null);
      return (0, fb.r)("popup", Vb, pb), (0, eb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), pb())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [pb]), (0, Yb.createPortal)((0, Rb.jsxs)("div", {
        ref: Vb,
        className: "ShaderPackFullSize",
        onClick: pb,
        children: [(0, Rb.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: wb,
          alt: Hb,
          draggable: !1,
          style: {
            backgroundImage: `url(${Mb})`
          }
        }), (0, Rb.jsx)(Ob.l, {
          className: "ShaderPackFullSizeClose",
          onClick: pb
        })]
      }), document.body)
    }
    const Gb = 5;

    function qb(bb) {
      let {
        item: wb,
        packUrl: Mb,
        baselineUrl: Hb
      } = bb;
      const {
        t: Vb
      } = (0, hb.C)(), [gb, lb] = (0, eb.useState)(50), Lb = (0, eb.useRef)(!1), Ib = (0, eb.useRef)(null), {
        width: Ob,
        height: Ub
      } = pb.z.large;

      function tb(bb) {
        lb((wb => (0, Zb.i)(wb + bb, 0, 100)))
      }

      function Cb(bb) {
        const wb = bb.currentTarget.getBoundingClientRect();
        lb((0, Zb.i)((bb.clientX - wb.left) / wb.width * 100, 0, 100))
      }
      return (0, Ab.f)(Ib, {
        adjust: bb => {
          tb(bb * Gb)
        },
        setFraction: bb => {
          lb(100 * bb)
        },
        endDrag: () => {}
      }), (0, Rb.jsxs)("div", {
        ref: Ib,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Vb("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(gb),
        style: {
          "--split": `${gb}%`
        },
        onKeyDown: function(bb) {
          const wb = "ArrowLeft" === bb.key ? -Gb : "ArrowRight" === bb.key ? Gb : 0;
          0 !== wb && (bb.preventDefault(), tb(wb))
        },
        onPointerDown: bb => {
          Lb.current = !0, bb.currentTarget.setPointerCapture(bb.pointerId), Cb(bb)
        },
        onPointerMove: bb => {
          Lb.current && Cb(bb)
        },
        onPointerUp: () => {
          Lb.current = !1
        },
        onPointerCancel: () => {
          Lb.current = !1
        },
        children: [(0, Rb.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Hb,
          width: Ob,
          height: Ub,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Mb})`
          }
        }), (0, Rb.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Rb.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Mb,
          width: Ob,
          height: Ub,
          alt: "",
          draggable: !1
        }), (0, Rb.jsx)(Sb.b, {
          item: wb,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function ab(bb) {
      let {
        side: wb,
        onClick: Mb,
        children: eb
      } = bb;
      return (0, Rb.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${wb}`,
        onClick: Mb,
        children: (0, Rb.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: eb
        })
      })
    }
    var ib = Mb(6050),
      ub = Mb(361),
      db = Mb(7848);
    const Pb = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function nb(bb) {
      const {
        userContext: wb
      } = (0, Bb.e)(), [Hb, pb] = (0, eb.useState)(null), [Vb, gb] = (0, eb.useState)(!1), [lb, Lb] = (0, eb.useState)(!1), [Ib, Ob] = (0, eb.useState)(null), Ub = null === bb || void 0 === bb ? void 0 : bb.packId, tb = null === bb || void 0 === bb ? void 0 : bb.sourceHash;
      return (0, eb.useEffect)((() => {
        if (gb(!1), Ob(null), void 0 === Ub) return;
        let bb = !1;
        return Promise.all([(0, mb.hasUsableWebGpuAdapter)(), (0, db.g)()]).then((wb => {
          let [Mb, eb] = wb;
          var Hb;
          bb || (pb(Mb), gb((null === eb || void 0 === eb || null === (Hb = eb.listing) || void 0 === Hb ? void 0 : Hb.packId) === Ub && eb.listing.sourceHash === tb))
        })).catch((wb => {
          console.error("Failed to check whether this shader pack can be used", wb), bb || pb(!1)
        })), () => {
          bb = !0
        }
      }), [Ub, tb]), {
        webGpuUsable: Hb,
        inUse: Vb,
        busy: lb,
        errorKey: Ib,
        use: () => {
          null !== bb && async function(bb) {
            Lb(!0), Ob(null);
            try {
              const {
                installListedShaderPack: eb
              } = await Promise.all([Mb.e(91), Mb.e(157), Mb.e(136)]).then((() => Mb(42181))), Hb = await eb({
                packId: bb.packId,
                sourceHash: bb.sourceHash,
                name: bb.name,
                ownerName: bb.ownerName,
                description: bb.description
              });
              if ("failed" === Hb.kind) return void Ob(Pb[Hb.reason]);
              gb(!0), sb.e.recordShaderPackDownload(wb, bb.packId).catch((bb => {
                console.error("Failed to count a shader pack's download", bb)
              })), (0, ib.l)()
            } catch (eb) {
              console.error("Failed to use the shader pack", eb), Ob("shaderPack:unexpectedError")
            } finally {
              Lb(!1)
            }
          }(bb)
        }
      }
    }

    function yb(bb) {
      let {
        packUse: wb
      } = bb;
      const {
        t: Mb
      } = (0, hb.C)(), {
        webGpuUsable: eb,
        inUse: Hb,
        busy: pb,
        errorKey: Vb,
        use: gb
      } = wb;
      return (0, Rb.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Rb.jsxs)(Ob.p, {
          disabled: !0 !== eb || Hb,
          loading: pb,
          onClick: gb,
          children: [(0, Rb.jsx)(jb.b, {
            name: Hb ? "check" : "download"
          }), " ", Mb(Hb ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === eb && (0, Rb.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Mb((0, ub.j)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Vb && (0, Rb.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Mb(Vb)
        })]
      })
    }

    function ob() {
      var bb;
      const {
        t: wb
      } = (0, hb.C)(), Mb = (0, Ib.useNavigatePreserveSearch)(), {
        packId: pb
      } = (0, Hb.E)(), {
        userContext: Vb,
        isUserContextUpdating: gb
      } = (0, Bb.e)(), [Ub, Cb] = (0, eb.useState)(null), [Eb, mb] = (0, eb.useState)(null), [zb, Xb] = (0, eb.useState)(0), xb = (0, eb.useRef)(0);

      function jb() {
        var bb;
        null !== (bb = (0, Ib.getPreviousLocation)()) && void 0 !== bb && bb.startsWith(rb.N) ? Mb(-1) : Mb(rb.N)
      }(0, Fb.e)(jb), (0, Jb.d)(), (0, eb.useEffect)((() => {
        if (gb || void 0 === pb) return;
        const bb = ++xb.current;
        mb(null), sb.e.getShaderPack(Vb, pb).then((wb => {
          xb.current === bb && Cb(wb)
        })).catch((wb => {
          xb.current === bb && (console.error("Failed to get the shader pack", wb), Cb(null), mb({
            error: wb
          }))
        }))
      }), [pb, Vb, gb, zb]);
      const Kb = () => {
          Xb((bb => bb + 1))
        },
        Db = (null === Ub || void 0 === Ub ? void 0 : Ub.packId) === pb ? Ub : null,
        Yb = (0, Jb.n)(),
        Zb = nb(null !== (bb = null === Db || void 0 === Db ? void 0 : Db.live) && void 0 !== bb ? bb : null),
        fb = null !== Db && void 0 !== Db && Db.live ? (0, Rb.jsx)(Tb, {
          item: Db.live,
          favourites: Yb,
          packUse: Zb
        }) : null;
      return (0, Rb.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== Db && (0, Rb.jsx)(tb.d, {
          meta: (0, lb.T)(Db.name)
        }), (0, Rb.jsx)(Ob.b, {
          onClick: jb,
          children: wb("shaderPackListing:backToPacks")
        }), null === Db && null === Eb && (0, Rb.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Rb.jsx)(Lb.c, {})
        }), null !== Eb && (0, Rb.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, rb.t)(Eb.error, wb, "shaderPackListing:loadPackFailed"), (0, Rb.jsx)(Ob.f, {
            onClick: Kb,
            children: wb("general:tryAgain")
          })]
        }), null !== Db && null === Eb && (0, Rb.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Rb.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Rb.jsx)("h1", {
              className: "FullyFancyText",
              children: Db.name
            }), fb]
          }), Db.live && (0, Rb.jsx)(vb, {
            item: Db.live
          }), Db.live && (0, Rb.jsx)(kb, {
            item: Db.live,
            ownerPreview: Db.ownerPreview,
            bloxdhubSlug: Db.bloxdhubSlug,
            actions: fb
          }), Db.owner && (0, Rb.jsx)(cb, {
            details: Db,
            owner: Db.owner,
            onChanged: Kb
          })]
        })]
      })
    }

    function Tb(bb) {
      let {
        item: wb,
        favourites: Mb,
        packUse: eb
      } = bb;
      const Hb = Mb.isFavourite(wb.packId);
      return (0, Rb.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [mb.featureFlags.settings.canUseShaderPacks && (0, Rb.jsx)(yb, {
          packUse: eb
        }), (0, Rb.jsx)(Ob.C, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Mb.toggle(wb.packId)
          },
          isLiked: !0 === Hb,
          isLoading: null === Hb
        })]
      })
    }

    function kb(bb) {
      let {
        item: wb,
        ownerPreview: Mb,
        bloxdhubSlug: eb,
        actions: Hb
      } = bb;
      const {
        t: gb
      } = (0, hb.C)(), lb = (0, Eb.m)(), Lb = null === eb ? null : (0, pb.i)(eb);
      return (0, Rb.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [wb.description && (0, Rb.jsx)("p", {
          className: "ShaderPackDescription",
          children: wb.description
        }), (0, Rb.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Mb || null !== Lb) && (0, Rb.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Mb ? (0, Rb.jsxs)(Rb.Fragment, {
              children: [(0, Rb.jsx)(Cb.d, {
                playerSocialPreview: Mb,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Lb && (0, Rb.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Lb,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Rb.jsx)("img", {
                  src: zb,
                  alt: pb.e
                })
              })]
            }) : (0, Rb.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Lb,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [pb.e, (0, Rb.jsx)("img", {
                src: zb,
                alt: ""
              })]
            })
          }), rb.w.filter((bb => wb.features.includes(bb))).map((bb => (0, Rb.jsx)(Ib.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, rb.G)(bb),
            children: gb(rb.H[bb])
          }, bb)))]
        }), Hb, (0, Rb.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Rb.jsxs)("div", {
            children: [(0, Rb.jsx)("dt", {
              children: gb("shaderPackListing:downloads")
            }), (0, Rb.jsx)("dd", {
              children: (0, Vb.L)(wb.downloads)
            })]
          }), (0, Rb.jsx)(bw, {
            label: gb("shaderPackListing:updated"),
            time: wb.listedUpdatedAt,
            now: lb
          }), (0, Rb.jsx)(bw, {
            label: gb("shaderPackListing:created"),
            time: wb.publishedAt,
            now: lb
          }), null !== wb.gpuCost && (0, Rb.jsxs)("div", {
            children: [(0, Rb.jsx)("dt", {
              children: gb("shaderPackListing:lag")
            }), (0, Rb.jsx)("dd", {
              children: gb("shaderPackListing:lagPercent", {
                percent: String((0, rb.L)(wb.gpuCost))
              })
            })]
          }), (0, Rb.jsxs)("div", {
            children: [(0, Rb.jsx)("dt", {
              children: gb("shaderPackListing:size")
            }), (0, Rb.jsx)("dd", {
              children: gb("shaderPackListing:sizeValue", {
                kilobytes: String((0, rb.I)(wb.sourceBytes))
              })
            })]
          }), (0, Rb.jsxs)("div", {
            children: [(0, Rb.jsx)("dt", {
              children: gb("shaderPackListing:files")
            }), (0, Rb.jsx)("dd", {
              children: wb.fileCount
            })]
          })]
        })]
      })
    }

    function bw(bb) {
      let {
        label: wb,
        time: Mb,
        now: eb
      } = bb;
      const {
        t: Hb,
        selectedLanguage: pb
      } = (0, hb.C)(), Vb = new Date(Mb);
      let lb = Vb.toLocaleDateString();
      if (eb - Mb <= 30 * gb.l) {
        const bb = (0, hb.l)(pb.code, "shaderPackListing:timeAgo");
        lb = Hb("shaderPackListing:timeAgo", {
          time: (0, gb.ib)(bb, Mb, eb)
        })
      }
      return (0, Rb.jsx)(Ub.d, {
        tooltipInner: Vb.toLocaleString(),
        children: (0, Rb.jsxs)("div", {
          children: [(0, Rb.jsx)("dt", {
            children: wb
          }), (0, Rb.jsx)("dd", {
            children: lb
          })]
        })
      })
    }
  },
  6090: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      f: () => Vb
    });
    var eb = Mb(64);
    const Hb = new WeakMap,
      pb = bb => {
        var wb;
        const Mb = bb.closest("[data-pad-slider]");
        return Mb && null !== (wb = Hb.get(Mb)) && void 0 !== wb ? wb : null
      },
      Vb = (bb, wb) => {
        const Mb = (0, eb.useRef)(wb);
        Mb.current = wb, (0, eb.useEffect)((() => {
          if (bb.current) return ((bb, wb) => (Hb.set(bb, wb), () => {
            Hb.get(bb) === wb && Hb.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              Mb.current.adjust(bb)
            },
            setFraction: bb => {
              Mb.current.setFraction(bb)
            },
            endDrag: () => {
              Mb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  7848: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(43);
    const Hb = "shaderPack";
    async function pb() {
      var bb;
      let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await eb.h.getItem(Hb, wb)) && void 0 !== bb ? bb : null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);