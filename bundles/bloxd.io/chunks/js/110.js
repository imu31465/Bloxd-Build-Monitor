export const id = 110;
export const ids = [110];
export const modules = {
  4765: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb,
      g: () => Kb,
      h: () => pb,
      k: () => lb
    });
    var Bb = hb(49),
      Ob = hb(4770),
      Gb = hb(4123),
      Ub = hb(1260),
      Lb = hb(4791),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(1249),
      Hb = hb(1622),
      wb = hb(4800),
      Zb = hb(1007);

    function Xb(bb) {
      let {
        label: ub,
        onClick: hb,
        checked: Bb,
        circleInfoText: Ob,
        className: Lb,
        disabled: Yb,
        note: ab
      } = bb;
      return (0, Zb.jsxs)("div", {
        "aria-disabled": Yb || void 0,
        "data-pad-focusable": !0,
        className: Sb()("SettingBox CheckboxContainer", {
          [Lb]: Lb,
          SettingBoxDisabled: Yb
        }),
        onClick: () => {
          Yb || hb(!Bb)
        },
        children: [(0, Zb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Zb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Zb.jsx)(Gb.d, {
              className: "SettingsCheckbox",
              checked: Bb,
              disabled: Yb,
              onChange: () => {}
            })
          }), (0, Zb.jsxs)("div", {
            className: "CheckboxText",
            children: [ub, Ob && (0, Zb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, Zb.jsx)(Ub.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ob
              })
            })]
          })]
        }), ab && (0, Zb.jsx)("div", {
          className: "SettingNote",
          children: ab
        })]
      })
    }

    function pb(bb) {
      let {
        name: ub,
        onChange: hb,
        min: Ob,
        max: Gb,
        step: Lb,
        initValue: Yb,
        circleInfoText: ab,
        format: Hb,
        className: wb,
        padStep: Xb,
        disabled: pb = !1,
        selectableMax: ob,
        cappedNote: lb,
        onChangeComplete: Kb
      } = bb;
      const [Wb, Cb] = (0, Bb.useState)(Yb), db = (0, Bb.useRef)(Yb);
      (0, Bb.useEffect)((() => {
        db.current = Yb, Cb(Yb)
      }), [Yb]);
      const rb = void 0 !== ob && ob < Gb,
        jb = rb ? {
          "--slider-selectable": (ob - Ob) / (Gb - Ob)
        } : void 0;
      return (0, Zb.jsxs)("div", {
        className: Sb()("SettingBox SettingsSliderDiv", {
          [wb]: wb,
          SettingBoxDisabled: pb,
          SliderCapped: rb
        }),
        style: jb,
        children: [(0, Zb.jsxs)("div", {
          className: "SliderText",
          children: [`${ub}: ${Hb?Hb(Wb):Wb}`, ab && (0, Zb.jsx)(Ub.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ab
          })]
        }), (0, Zb.jsx)("div", {
          className: "SliderDiv",
          children: (0, Zb.jsx)(Ab, {
            value: Wb,
            min: Ob,
            max: Gb,
            step: Lb,
            onChange: bb => {
              if (rb && bb >= ob && Wb === ob) return;
              const ub = rb ? Math.min(bb, ob) : bb;
              db.current = ub, Cb(ub), hb(ub)
            },
            onChangeComplete: Kb && (() => {
              Kb(db.current)
            }),
            format: Hb,
            padStep: Xb,
            disabled: pb
          })
        }), rb && lb && (0, Zb.jsx)("div", {
          className: "SettingNote",
          children: lb
        })]
      })
    }
    const ob = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Ab(bb) {
      var ub;
      let {
        value: hb,
        min: Gb,
        max: Ub,
        step: Lb,
        onChange: Yb,
        orientation: Sb,
        reverse: ab,
        setIsChanging: Hb,
        tooltip: Xb,
        labels: pb,
        handleLabel: Ab,
        format: lb,
        onChangeStart: Kb,
        onChangeComplete: Wb,
        padStep: Cb,
        disabled: db = !1
      } = bb;
      const rb = (0, Bb.useRef)(null),
        jb = (0, Bb.useRef)(null);
      (0, Bb.useLayoutEffect)((() => {
        var bb, ub, hb;
        const Bb = null !== (bb = null === (ub = rb.current) || void 0 === ub ? void 0 : ub.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === Bb || void 0 === Bb || Bb.setAttribute("data-pad-slider", ""), null === Bb || void 0 === Bb || Bb.setAttribute("data-pad-focusable", ""), null === Bb || void 0 === Bb || null === (hb = Bb.querySelector(".rangeslider__handle")) || void 0 === hb || hb.setAttribute("data-pad-slider-handle", ""), jb.current = Bb
      }), []), (0, Bb.useLayoutEffect)((() => {
        var bb, ub;
        db ? null === (bb = jb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (ub = jb.current) || void 0 === ub || ub.removeAttribute("aria-disabled")
      }), [db]);
      const nb = (null !== (ub = String(Lb).split(".")[1]) && void 0 !== ub ? ub : "").length,
        Db = bb => {
          const ub = Number((Math.round((bb - Gb) / Lb) * Lb + Gb).toFixed(nb));
          return Math.min(Ub, Math.max(Gb, ub))
        },
        xb = (0, Bb.useRef)(Wb);
      xb.current = Wb, (0, Bb.useEffect)((() => {
        const bb = rb.current;
        if (!bb) return;
        const ub = bb => {
          var ub;
          ob.has(bb.key) && (null === (ub = xb.current) || void 0 === ub || ub.call(xb))
        };
        return bb.addEventListener("keyup", ub), () => {
          bb.removeEventListener("keyup", ub)
        }
      }), []);
      const zb = (0, Bb.useRef)(!1);
      return (0, wb.h)(jb, {
        adjust: bb => {
          if (db) return;
          const ub = null !== Cb && void 0 !== Cb ? Cb : Math.max(Lb, Math.round((Ub - Gb) / 20 / Lb) * Lb),
            Bb = Db(hb + bb * ub * (ab ? -1 : 1));
          Bb !== hb && (null === Kb || void 0 === Kb || Kb(), Yb(Bb), null === Wb || void 0 === Wb || Wb())
        },
        setFraction: bb => {
          if (db) return;
          const ub = Db(Gb + (ab ? 1 - bb : bb) * (Ub - Gb));
          ub !== hb && (zb.current || (zb.current = !0, null === Kb || void 0 === Kb || Kb()), Yb(ub))
        },
        endDrag: () => {
          zb.current && (zb.current = !1, null === Wb || void 0 === Wb || Wb())
        }
      }), (0, Zb.jsx)("div", {
        ref: rb,
        style: {
          display: "contents"
        },
        children: (0, Zb.jsx)(Ob.b, {
          value: hb,
          min: Gb,
          max: Ub,
          step: Lb,
          onChange: Yb,
          orientation: Sb,
          reverse: ab,
          tooltip: Xb,
          labels: pb,
          handleLabel: Ab,
          format: lb,
          onChangeStart: () => {
            null === Kb || void 0 === Kb || Kb(), null === Hb || void 0 === Hb || Hb(!0)
          },
          onChangeComplete: () => {
            null === Hb || void 0 === Hb || Hb(!1), null === Wb || void 0 === Wb || Wb()
          }
        })
      })
    }
    async function lb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const ub = ab.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await ub.getResult() && (0, Hb.reloadBloxd)()
    }

    function Kb(bb) {
      let {
        label: ub,
        options: hb,
        value: Bb,
        onChange: Ob,
        circleInfoText: Gb
      } = bb;
      return (0, Zb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Zb.jsxs)("div", {
          className: "SliderText",
          children: [ub, Gb && (0, Zb.jsx)(Ub.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Gb
          })]
        }), (0, Zb.jsx)(Lb.c, {
          ariaLabel: ub,
          options: hb,
          value: Bb,
          onChange: Ob
        })]
      })
    }
  },
  6401: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => kb
    });
    var Bb = hb(49),
      Ob = hb(1431),
      Gb = hb(6281),
      Ub = hb(1124),
      Lb = hb(314),
      Yb = hb(1242),
      Sb = hb(1415),
      ab = hb(1357),
      Hb = hb(1260),
      wb = hb(2418),
      Zb = hb(2536),
      Xb = hb(4318),
      pb = hb(1029),
      ob = hb(1398),
      Ab = hb(86),
      lb = hb(1095);
    const Kb = hb.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Wb = hb(958),
      Cb = hb.n(Wb),
      db = hb(966),
      rb = hb(1249),
      jb = hb(6279),
      nb = hb(1007);
    const Db = (0, Bb.lazy)((() => Promise.all([hb.e(106), hb.e(75), hb.e(132), hb.e(126), hb.e(125)]).then((() => hb(6316))).then((bb => ({
      default: bb.ShaderPackPublishForm
    })))));

    function xb(bb) {
      let {
        details: ub,
        owner: hb,
        onChanged: Ob
      } = bb;
      const {
        t: Ub
      } = (0, lb.K)(), Lb = (0, Sb.useNavigatePreserveSearch)(), {
        userContext: Hb
      } = (0, pb.d)(), [wb, Zb] = (0, Bb.useState)(!1), [Xb, Ab] = (0, Bb.useState)(null), [Kb, Wb] = (0, Bb.useState)(!1), {
        packId: xb,
        name: zb,
        description: gb,
        live: ib
      } = ub;
      async function vb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob;
        Zb(!0), Ab(null);
        try {
          await bb(), ub()
        } catch (hb) {
          console.error("Failed to change a shader pack", hb), Ab((0, jb.w)(hb, Ub, "shaderPackListing:ownerActionFailed"))
        } finally {
          Zb(!1)
        }
      }
      const tb = (0, jb.u)(Hb);
      return (0, nb.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, nb.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Ub("general:manage")
        }), (0, jb.V)(hb, !(null === ib || void 0 === ib || !ib.renderId), Date.now(), Ub).map((bb => (0, nb.jsxs)("div", {
          className: Cb()("ShaderPackOwnerNotice", {
            Warning: "warning" === bb.tone
          }),
          children: [(0, nb.jsx)(db.e, {
            name: "warning" === bb.tone ? "triangle-exclamation" : "circle-info"
          }), (0, nb.jsxs)("div", {
            children: [bb.text, bb.detail && (0, nb.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: bb.detail
            })]
          })]
        }, bb.text))), ub.ban && (0, nb.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, nb.jsx)(db.e, {
            name: "ban"
          }), (0, nb.jsxs)("div", {
            children: ["Banned by ", ub.ban.byName, " on ", new Date(ub.ban.at).toLocaleString()]
          })]
        }), Xb && (0, nb.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Xb
        }), (0, nb.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, nb.jsxs)(ab.O, {
            disabled: wb,
            onClick: () => {
              !async function() {
                const bb = await rb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: zb,
                  maxLength: Gb.s,
                  submitText: "general:save",
                  validate: bb => bb.trim().length < Gb.v ? Ub("shaderPackListing:nameTooShort", {
                    min: String(Gb.v)
                  }) : null
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== zb && await vb((() => ob.e.updateShaderPack(Hb, {
                  packId: xb,
                  name: bb.value.trim()
                })))
              }()
            },
            children: [(0, nb.jsx)(db.e, {
              name: "pen"
            }), " ", Ub("shaderPackListing:rename")]
          }), (0, nb.jsxs)(ab.O, {
            disabled: wb,
            onClick: () => {
              !async function() {
                const bb = await rb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: gb,
                  maxLength: Gb.l,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== gb && await vb((() => ob.e.updateShaderPack(Hb, {
                  packId: xb,
                  description: bb.value.trim()
                })))
              }()
            },
            children: [(0, nb.jsx)(db.e, {
              name: "file-lines"
            }), " ", Ub("shaderPackListing:editDescription")]
          }), (0, nb.jsxs)(ab.O, {
            disabled: wb || hb.isBanned && !hb.listed,
            onClick: () => {
              vb((() => ob.e.updateShaderPack(Hb, {
                packId: xb,
                listed: !hb.listed
              })))
            },
            children: [(0, nb.jsx)(db.e, {
              name: hb.listed ? "eye-slash" : "eye"
            }), " ", Ub(hb.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !hb.isBanned && (0, nb.jsxs)(ab.e, {
            disabled: wb,
            onClick: () => {
              Wb(!Kb)
            },
            children: [(0, nb.jsx)(db.e, {
              name: "upload"
            }), " ", Ub("shaderPackListing:uploadVersion")]
          }), (0, nb.jsxs)(ab.I, {
            disabled: wb || hb.isBanned,
            onClick: () => {
              !async function() {
                !0 === await rb.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await vb((() => ob.e.deleteShaderPack(Hb, xb)), (() => {
                  Lb(`${jb.U}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, nb.jsx)(db.e, {
              name: "trash-can"
            }), " ", Ub("general:delete")]
          }), tb && (0, nb.jsxs)(ab.I, {
            disabled: wb,
            onClick: () => {
              vb((() => ob.e.setShaderPackBanned(Hb, xb, !hb.isBanned)))
            },
            children: [(0, nb.jsx)(db.e, {
              name: hb.isBanned ? "circle-check" : "ban"
            }), " ", hb.isBanned ? "Unban" : "Ban"]
          })]
        }), Kb && (0, nb.jsx)(Bb.Suspense, {
          fallback: (0, nb.jsx)(Yb.c, {}),
          children: (0, nb.jsx)(Db, {
            existing: {
              packId: xb,
              name: zb,
              description: gb
            },
            onPublished: () => {
              Wb(!1), Ob()
            }
          })
        })]
      })
    }
    var zb = hb(65),
      gb = hb(1784),
      ib = hb(1177),
      vb = hb(4800),
      tb = hb(1103),
      Jb = hb(6292),
      eb = hb(6285),
      Nb = hb(6309);

    function sb(bb) {
      let {
        item: ub
      } = bb;
      const {
        t: hb
      } = (0, lb.K)(), [Ob] = (0, Jb.d)(), [Ub, Lb] = (0, Bb.useState)(Ob), [Yb, Sb] = (0, Bb.useState)(!1), [ab, Hb] = (0, Bb.useState)(!1), {
        s3Url: wb
      } = tb.clientSideServerUrls, {
        width: Zb,
        height: Xb
      } = Gb.o.large, pb = (0, Gb.p)(wb, ub, Ub, "large"), {
        renderVersion: ob
      } = ub;
      return (0, nb.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, nb.jsx)(Nb.d, {
          selected: Ub,
          onSelect: bb => {
            Lb(bb), Sb(!1)
          },
          imageUrl: bb => (0, Gb.p)(wb, ub, bb, "thumb")
        }), (0, nb.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Yb && (0, nb.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === ob ? void 0 : hb("shaderPackListing:fullSize"),
            disabled: null === ob,
            onClick: () => {
              Hb(!0)
            },
            children: [(0, nb.jsx)("img", {
              src: pb,
              width: Zb,
              height: Xb,
              alt: hb(jb.db[Ub]),
              draggable: !1
            }), (0, nb.jsx)(eb.d, {
              item: ub
            })]
          }), !Yb && null !== ob && (0, nb.jsxs)(Pb, {
            side: "Right",
            onClick: () => {
              Sb(!0)
            },
            children: [(0, nb.jsx)(db.e, {
              name: "arrows-left-right"
            }), " ", hb("shaderPackListing:compare")]
          }), Yb && null !== ob && (0, nb.jsx)(Ib, {
            item: ub,
            packUrl: pb,
            baselineUrl: (0, Gb.k)(wb, ob, Ub, "large")
          }), Yb && (0, nb.jsx)(Pb, {
            side: "Left",
            onClick: () => {
              Sb(!1)
            },
            children: hb("shaderPackListing:withPack")
          }), Yb && (0, nb.jsx)(Pb, {
            side: "Right",
            onClick: () => {
              Sb(!1)
            },
            children: hb("shaderPackListing:withoutPack")
          })]
        }), ab && (0, nb.jsx)(Mb, {
          fullUrl: (0, Gb.p)(wb, ub, Ub, "full"),
          largeUrl: pb,
          alt: hb(jb.db[Ub]),
          onClose: () => {
            Hb(!1)
          }
        })]
      })
    }

    function Mb(bb) {
      let {
        fullUrl: ub,
        largeUrl: hb,
        alt: Ob,
        onClose: Gb
      } = bb;
      const Ub = (0, Bb.useRef)(null);
      return (0, ib.v)("popup", Ub, Gb), (0, Bb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), Gb())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [Gb]), (0, zb.createPortal)((0, nb.jsxs)("div", {
        ref: Ub,
        className: "ShaderPackFullSize",
        onClick: Gb,
        children: [(0, nb.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: ub,
          alt: Ob,
          draggable: !1,
          style: {
            backgroundImage: `url(${hb})`
          }
        }), (0, nb.jsx)(ab.i, {
          className: "ShaderPackFullSizeClose",
          onClick: Gb
        })]
      }), document.body)
    }
    const mb = 5;

    function Ib(bb) {
      let {
        item: ub,
        packUrl: hb,
        baselineUrl: Ob
      } = bb;
      const {
        t: Ub
      } = (0, lb.K)(), [Lb, Yb] = (0, Bb.useState)(50), Sb = (0, Bb.useRef)(!1), ab = (0, Bb.useRef)(null), {
        width: Hb,
        height: wb
      } = Gb.o.large;

      function Zb(bb) {
        Yb((ub => (0, gb.f)(ub + bb, 0, 100)))
      }

      function Xb(bb) {
        const ub = bb.currentTarget.getBoundingClientRect();
        Yb((0, gb.f)((bb.clientX - ub.left) / ub.width * 100, 0, 100))
      }
      return (0, vb.h)(ab, {
        adjust: bb => {
          Zb(bb * mb)
        },
        setFraction: bb => {
          Yb(100 * bb)
        },
        endDrag: () => {}
      }), (0, nb.jsxs)("div", {
        ref: ab,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Ub("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Lb),
        style: {
          "--split": `${Lb}%`
        },
        onKeyDown: function(bb) {
          const ub = "ArrowLeft" === bb.key ? -mb : "ArrowRight" === bb.key ? mb : 0;
          0 !== ub && (bb.preventDefault(), Zb(ub))
        },
        onPointerDown: bb => {
          Sb.current = !0, bb.currentTarget.setPointerCapture(bb.pointerId), Xb(bb)
        },
        onPointerMove: bb => {
          Sb.current && Xb(bb)
        },
        onPointerUp: () => {
          Sb.current = !1
        },
        onPointerCancel: () => {
          Sb.current = !1
        },
        children: [(0, nb.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Ob,
          width: Hb,
          height: wb,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${hb})`
          }
        }), (0, nb.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, nb.jsx)("img", {
          className: "ShaderPackComparePack",
          src: hb,
          width: Hb,
          height: wb,
          alt: "",
          draggable: !1
        }), (0, nb.jsx)(eb.d, {
          item: ub,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Pb(bb) {
      let {
        side: ub,
        onClick: hb,
        children: Bb
      } = bb;
      return (0, nb.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${ub}`,
        onClick: hb,
        children: (0, nb.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Bb
        })
      })
    }
    var qb = hb(4765),
      Eb = hb(270),
      yb = hb(6394);
    const Vb = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Fb(bb) {
      const {
        userContext: ub
      } = (0, pb.d)(), [Ob, Gb] = (0, Bb.useState)(null), [Ub, Lb] = (0, Bb.useState)(!1), [Yb, Sb] = (0, Bb.useState)(!1), [ab, Hb] = (0, Bb.useState)(null), wb = null === bb || void 0 === bb ? void 0 : bb.packId, Zb = null === bb || void 0 === bb ? void 0 : bb.sourceHash;
      return (0, Bb.useEffect)((() => {
        if (Lb(!1), Hb(null), void 0 === wb) return;
        let bb = !1;
        return Promise.all([(0, Ab.hasUsableWebGpuAdapter)(), (0, yb.g)()]).then((ub => {
          let [hb, Bb] = ub;
          var Ob;
          bb || (Gb(hb), Lb((null === Bb || void 0 === Bb || null === (Ob = Bb.listing) || void 0 === Ob ? void 0 : Ob.packId) === wb && Bb.listing.sourceHash === Zb))
        })).catch((ub => {
          console.error("Failed to check whether this shader pack can be used", ub), bb || Gb(!1)
        })), () => {
          bb = !0
        }
      }), [wb, Zb]), {
        webGpuUsable: Ob,
        inUse: Ub,
        busy: Yb,
        errorKey: ab,
        use: () => {
          null !== bb && async function(bb) {
            Sb(!0), Hb(null);
            try {
              const {
                installListedShaderPack: Bb
              } = await Promise.all([hb.e(75), hb.e(132), hb.e(127)]).then((() => hb(39950))), Ob = await Bb({
                packId: bb.packId,
                sourceHash: bb.sourceHash,
                name: bb.name,
                ownerName: bb.ownerName,
                description: bb.description
              });
              if ("failed" === Ob.kind) return void Hb(Vb[Ob.reason]);
              Lb(!0), ob.e.recordShaderPackDownload(ub, bb.packId).catch((bb => {
                console.error("Failed to count a shader pack's download", bb)
              })), (0, qb.k)()
            } catch (Bb) {
              console.error("Failed to use the shader pack", Bb), Hb("shaderPack:unexpectedError")
            } finally {
              Sb(!1)
            }
          }(bb)
        }
      }
    }

    function fb(bb) {
      let {
        packUse: ub
      } = bb;
      const {
        t: hb
      } = (0, lb.K)(), {
        webGpuUsable: Bb,
        inUse: Ob,
        busy: Gb,
        errorKey: Ub,
        use: Lb
      } = ub;
      return (0, nb.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, nb.jsxs)(ab.m, {
          disabled: !0 !== Bb || Ob,
          loading: Gb,
          onClick: Lb,
          children: [(0, nb.jsx)(db.e, {
            name: Ob ? "check" : "download"
          }), " ", hb(Ob ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Bb && (0, nb.jsx)("div", {
          className: "ShaderPackUseNote",
          children: hb((0, Eb.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Ub && (0, nb.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: hb(Ub)
        })]
      })
    }

    function kb() {
      var bb;
      const {
        t: ub
      } = (0, lb.K)(), hb = (0, Sb.useNavigatePreserveSearch)(), {
        packId: Gb
      } = (0, Ob.F)(), {
        userContext: Ub,
        isUserContextUpdating: Lb
      } = (0, pb.d)(), [Hb, wb] = (0, Bb.useState)(null), [Zb, Ab] = (0, Bb.useState)(null), [Kb, Wb] = (0, Bb.useState)(0), Cb = (0, Bb.useRef)(0);

      function db() {
        var bb;
        null !== (bb = (0, Sb.getPreviousLocation)()) && void 0 !== bb && bb.startsWith(jb.U) ? hb(-1) : hb(jb.U)
      }(0, Xb.c)(db), (0, Jb.b)(), (0, Bb.useEffect)((() => {
        if (Lb || void 0 === Gb) return;
        const bb = ++Cb.current;
        Ab(null), ob.e.getShaderPack(Ub, Gb).then((ub => {
          Cb.current === bb && wb(ub)
        })).catch((ub => {
          Cb.current === bb && (console.error("Failed to get the shader pack", ub), wb(null), Ab({
            error: ub
          }))
        }))
      }), [Gb, Ub, Lb, Kb]);
      const rb = () => {
          Wb((bb => bb + 1))
        },
        Db = (null === Hb || void 0 === Hb ? void 0 : Hb.packId) === Gb ? Hb : null,
        zb = (0, Jb.f)(),
        gb = Fb(null !== (bb = null === Db || void 0 === Db ? void 0 : Db.live) && void 0 !== bb ? bb : null),
        ib = null !== Db && void 0 !== Db && Db.live ? (0, nb.jsx)(Tb, {
          item: Db.live,
          favourites: zb,
          packUse: gb
        }) : null;
      return (0, nb.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, nb.jsx)(ab.d, {
          onClick: db,
          children: ub("shaderPackListing:backToPacks")
        }), null === Db && null === Zb && (0, nb.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, nb.jsx)(Yb.c, {})
        }), null !== Zb && (0, nb.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, jb.w)(Zb.error, ub, "shaderPackListing:loadPackFailed"), (0, nb.jsx)(ab.e, {
            onClick: rb,
            children: ub("general:tryAgain")
          })]
        }), null !== Db && null === Zb && (0, nb.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, nb.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, nb.jsx)("h1", {
              className: "FullyFancyText",
              children: Db.name
            }), ib]
          }), Db.live && (0, nb.jsx)(sb, {
            item: Db.live
          }), Db.live && (0, nb.jsx)(cb, {
            item: Db.live,
            ownerPreview: Db.ownerPreview,
            bloxdhubSlug: Db.bloxdhubSlug,
            actions: ib
          }), Db.owner && (0, nb.jsx)(xb, {
            details: Db,
            owner: Db.owner,
            onChanged: rb
          })]
        })]
      })
    }

    function Tb(bb) {
      let {
        item: ub,
        favourites: hb,
        packUse: Bb
      } = bb;
      const Ob = hb.isFavourite(ub.packId);
      return (0, nb.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Ab.featureFlags.settings.canUseShaderPacks && (0, nb.jsx)(fb, {
          packUse: Bb
        }), (0, nb.jsx)(ab.u, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            hb.toggle(ub.packId)
          },
          isLiked: !0 === Ob,
          isLoading: null === Ob
        })]
      })
    }

    function cb(bb) {
      let {
        item: ub,
        ownerPreview: hb,
        bloxdhubSlug: Bb,
        actions: Ob
      } = bb;
      const {
        t: Lb
      } = (0, lb.K)(), Yb = (0, Zb.p)(), ab = null === Bb ? null : (0, Gb.f)(Bb);
      return (0, nb.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [ub.description && (0, nb.jsx)("p", {
          className: "ShaderPackDescription",
          children: ub.description
        }), (0, nb.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== hb || null !== ab) && (0, nb.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== hb ? (0, nb.jsxs)(nb.Fragment, {
              children: [(0, nb.jsx)(wb.h, {
                playerSocialPreview: hb,
                showLocation: !1,
                linkToProfile: !0
              }), null !== ab && (0, nb.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: ab,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, nb.jsx)("img", {
                  src: Kb,
                  alt: Gb.d
                })
              })]
            }) : (0, nb.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: ab,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Gb.d, (0, nb.jsx)("img", {
                src: Kb,
                alt: ""
              })]
            })
          }), jb.A.filter((bb => ub.features.includes(bb))).map((bb => (0, nb.jsx)(Sb.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, jb.L)(bb),
            children: Lb(jb.M[bb])
          }, bb)))]
        }), Ob, (0, nb.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, nb.jsxs)("div", {
            children: [(0, nb.jsx)("dt", {
              children: Lb("shaderPackListing:downloads")
            }), (0, nb.jsx)("dd", {
              children: (0, Ub._)(ub.downloads)
            })]
          }), (0, nb.jsx)(Qb, {
            label: Lb("shaderPackListing:updated"),
            time: ub.listedUpdatedAt,
            now: Yb
          }), (0, nb.jsx)(Qb, {
            label: Lb("shaderPackListing:created"),
            time: ub.publishedAt,
            now: Yb
          }), null !== ub.gpuCost && (0, nb.jsxs)("div", {
            children: [(0, nb.jsx)("dt", {
              children: Lb("shaderPackListing:lag")
            }), (0, nb.jsx)("dd", {
              children: Lb("shaderPackListing:lagPercent", {
                percent: String((0, jb.R)(ub.gpuCost))
              })
            })]
          }), (0, nb.jsxs)("div", {
            children: [(0, nb.jsx)("dt", {
              children: Lb("shaderPackListing:size")
            }), (0, nb.jsx)("dd", {
              children: Lb("shaderPackListing:sizeValue", {
                kilobytes: String((0, jb.P)(ub.sourceBytes))
              })
            })]
          }), (0, nb.jsxs)("div", {
            children: [(0, nb.jsx)("dt", {
              children: Lb("shaderPackListing:files")
            }), (0, nb.jsx)("dd", {
              children: ub.fileCount
            })]
          })]
        })]
      })
    }

    function Qb(bb) {
      let {
        label: ub,
        time: hb,
        now: Bb
      } = bb;
      const {
        t: Ob,
        selectedLanguage: Gb
      } = (0, lb.K)(), Ub = new Date(hb);
      let Yb = Ub.toLocaleDateString();
      if (Bb - hb <= 30 * Lb.g) {
        const bb = (0, lb.o)(Gb.code, "shaderPackListing:timeAgo");
        Yb = Ob("shaderPackListing:timeAgo", {
          time: (0, Lb.fb)(bb, hb, Bb)
        })
      }
      return (0, nb.jsx)(Hb.d, {
        tooltipInner: Ub.toLocaleString(),
        children: (0, nb.jsxs)("div", {
          children: [(0, nb.jsx)("dt", {
            children: ub
          }), (0, nb.jsx)("dd", {
            children: Yb
          })]
        })
      })
    }
  },
  4791: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1007);

    function Ub(bb) {
      let {
        options: ub,
        value: hb,
        onChange: Bb,
        ariaLabel: Ub,
        className: Lb,
        reselectable: Yb = !1,
        keepsFocus: Sb = !1,
        padTabs: ab
      } = bb;
      const Hb = void 0 !== ab;
      return (0, Gb.jsx)("div", {
        className: Ob()("SegmentedToggle", Lb),
        role: "group",
        "aria-label": Ub,
        "data-pad-tabs": ab,
        children: ub.map((bb => {
          const ub = bb.value === hb;
          return (0, Gb.jsx)("button", {
            type: "button",
            "aria-pressed": ub,
            "data-pad-tab": Hb || void 0,
            "data-pad-selected": Hb && ub ? "true" : void 0,
            "data-pad-default-focus": Hb && ub || void 0,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Ob()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ub
            }),
            onMouseDown: Sb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ub && !Yb || Bb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  4800: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      h: () => Ub
    });
    var Bb = hb(49);
    const Ob = new WeakMap,
      Gb = bb => {
        var ub;
        const hb = bb.closest("[data-pad-slider]");
        return hb && null !== (ub = Ob.get(hb)) && void 0 !== ub ? ub : null
      },
      Ub = (bb, ub) => {
        const hb = (0, Bb.useRef)(ub);
        hb.current = ub, (0, Bb.useEffect)((() => {
          if (bb.current) return ((bb, ub) => (Ob.set(bb, ub), () => {
            Ob.get(bb) === ub && Ob.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              hb.current.adjust(bb)
            },
            setFraction: bb => {
              hb.current.setFraction(bb)
            },
            endDrag: () => {
              hb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  6394: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Gb
    });
    var Bb = hb(29);
    const Ob = "shaderPack";
    async function Gb() {
      var bb;
      let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);