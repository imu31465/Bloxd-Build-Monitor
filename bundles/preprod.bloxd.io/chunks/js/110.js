export const id = 110;
export const ids = [110];
export const modules = {
  4828: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => aq,
      f: () => oq,
      h: () => Vq,
      l: () => Hq
    });
    var Yq = gq(57),
      lq = gq(4837),
      Oq = gq(4195),
      mq = gq(1341),
      xq = gq(4858),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(1336),
      Bq = gq(1710),
      Wq = gq(4866),
      Nq = gq(1070);

    function aq(qq) {
      let {
        label: Eq,
        onClick: gq,
        checked: Yq,
        circleInfoText: lq,
        className: xq,
        disabled: Aq,
        note: uq
      } = qq;
      return (0, Nq.jsxs)("div", {
        "aria-disabled": Aq || void 0,
        "data-pad-focusable": !0,
        className: cq()("SettingBox CheckboxContainer", {
          [xq]: xq,
          SettingBoxDisabled: Aq
        }),
        onClick: () => {
          Aq || gq(!Yq)
        },
        children: [(0, Nq.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nq.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nq.jsx)(Oq.b, {
              className: "SettingsCheckbox",
              checked: Yq,
              disabled: Aq,
              onChange: () => {}
            })
          }), (0, Nq.jsxs)("div", {
            className: "CheckboxText",
            children: [Eq, lq && (0, Nq.jsx)("span", {
              onClick: qq => qq.stopPropagation(),
              children: (0, Nq.jsx)(mq.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: lq
              })
            })]
          })]
        }), uq && (0, Nq.jsx)("div", {
          className: "SettingNote",
          children: uq
        })]
      })
    }

    function Vq(qq) {
      let {
        name: Eq,
        onChange: gq,
        min: lq,
        max: Oq,
        step: xq,
        initValue: Aq,
        circleInfoText: uq,
        format: Bq,
        className: Wq,
        padStep: aq,
        disabled: Vq = !1,
        selectableMax: dq,
        cappedNote: Hq,
        onChangeComplete: oq
      } = qq;
      const [Pq, Qq] = (0, Yq.useState)(Aq), yq = (0, Yq.useRef)(Aq);
      (0, Yq.useEffect)((() => {
        yq.current = Aq, Qq(Aq)
      }), [Aq]);
      const tq = void 0 !== dq && dq < Oq,
        rq = tq ? {
          "--slider-selectable": (dq - lq) / (Oq - lq)
        } : void 0;
      return (0, Nq.jsxs)("div", {
        className: cq()("SettingBox SettingsSliderDiv", {
          [Wq]: Wq,
          SettingBoxDisabled: Vq,
          SliderCapped: tq
        }),
        style: rq,
        children: [(0, Nq.jsxs)("div", {
          className: "SliderText",
          children: [`${Eq}: ${Bq?Bq(Pq):Pq}`, uq && (0, Nq.jsx)(mq.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uq
          })]
        }), (0, Nq.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nq.jsx)(jq, {
            value: Pq,
            min: lq,
            max: Oq,
            step: xq,
            onChange: qq => {
              if (tq && qq >= dq && Pq === dq) return;
              const Eq = tq ? Math.min(qq, dq) : qq;
              yq.current = Eq, Qq(Eq), gq(Eq)
            },
            onChangeComplete: oq && (() => {
              oq(yq.current)
            }),
            format: Bq,
            padStep: aq,
            disabled: Vq
          })
        }), tq && Hq && (0, Nq.jsx)("div", {
          className: "SettingNote",
          children: Hq
        })]
      })
    }
    const dq = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function jq(qq) {
      var Eq;
      let {
        value: gq,
        min: Oq,
        max: mq,
        step: xq,
        onChange: Aq,
        orientation: cq,
        reverse: uq,
        setIsChanging: Bq,
        tooltip: aq,
        labels: Vq,
        handleLabel: jq,
        format: Hq,
        onChangeStart: oq,
        onChangeComplete: Pq,
        padStep: Qq,
        disabled: yq = !1
      } = qq;
      const tq = (0, Yq.useRef)(null),
        rq = (0, Yq.useRef)(null);
      (0, Yq.useLayoutEffect)((() => {
        var qq, Eq, gq;
        const Yq = null !== (qq = null === (Eq = tq.current) || void 0 === Eq ? void 0 : Eq.querySelector(".rangeslider")) && void 0 !== qq ? qq : null;
        null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-slider", ""), null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-focusable", ""), null === Yq || void 0 === Yq || null === (gq = Yq.querySelector(".rangeslider__handle")) || void 0 === gq || gq.setAttribute("data-pad-slider-handle", ""), rq.current = Yq
      }), []), (0, Yq.useLayoutEffect)((() => {
        var qq, Eq;
        yq ? null === (qq = rq.current) || void 0 === qq || qq.setAttribute("aria-disabled", "true") : null === (Eq = rq.current) || void 0 === Eq || Eq.removeAttribute("aria-disabled")
      }), [yq]);
      const vq = (null !== (Eq = String(xq).split(".")[1]) && void 0 !== Eq ? Eq : "").length,
        hq = qq => {
          const Eq = Number((Math.round((qq - Oq) / xq) * xq + Oq).toFixed(vq));
          return Math.min(mq, Math.max(Oq, Eq))
        },
        nq = (0, Yq.useRef)(Pq);
      nq.current = Pq, (0, Yq.useEffect)((() => {
        const qq = tq.current;
        if (!qq) return;
        const Eq = qq => {
          var Eq;
          dq.has(qq.key) && (null === (Eq = nq.current) || void 0 === Eq || Eq.call(nq))
        };
        return qq.addEventListener("keyup", Eq), () => {
          qq.removeEventListener("keyup", Eq)
        }
      }), []);
      const bq = (0, Yq.useRef)(!1);
      return (0, Wq.i)(rq, {
        adjust: qq => {
          if (yq) return;
          const Eq = null !== Qq && void 0 !== Qq ? Qq : Math.max(xq, Math.round((mq - Oq) / 20 / xq) * xq),
            Yq = hq(gq + qq * Eq * (uq ? -1 : 1));
          Yq !== gq && (null === oq || void 0 === oq || oq(), Aq(Yq), null === Pq || void 0 === Pq || Pq())
        },
        setFraction: qq => {
          if (yq) return;
          const Eq = hq(Oq + (uq ? 1 - qq : qq) * (mq - Oq));
          Eq !== gq && (bq.current || (bq.current = !0, null === oq || void 0 === oq || oq()), Aq(Eq))
        },
        endDrag: () => {
          bq.current && (bq.current = !1, null === Pq || void 0 === Pq || Pq())
        }
      }), (0, Nq.jsx)("div", {
        ref: tq,
        style: {
          display: "contents"
        },
        children: (0, Nq.jsx)(lq.d, {
          value: gq,
          min: Oq,
          max: mq,
          step: xq,
          onChange: Aq,
          orientation: cq,
          reverse: uq,
          tooltip: aq,
          labels: Vq,
          handleLabel: jq,
          format: Hq,
          onChangeStart: () => {
            null === oq || void 0 === oq || oq(), null === Bq || void 0 === Bq || Bq(!0)
          },
          onChangeComplete: () => {
            null === Bq || void 0 === Bq || Bq(!1), null === Pq || void 0 === Pq || Pq()
          }
        })
      })
    }
    async function Hq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Eq = uq.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: qq
      });
      !0 === await Eq.getResult() && (0, Bq.reloadBloxd)()
    }

    function oq(qq) {
      let {
        label: Eq,
        options: gq,
        value: Yq,
        onChange: lq,
        circleInfoText: Oq
      } = qq;
      return (0, Nq.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nq.jsxs)("div", {
          className: "SliderText",
          children: [Eq, Oq && (0, Nq.jsx)(mq.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Oq
          })]
        }), (0, Nq.jsx)(xq.c, {
          ariaLabel: Eq,
          options: gq,
          value: Yq,
          onChange: lq
        })]
      })
    }
  },
  6540: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Kq
    });
    var Yq = gq(57),
      lq = gq(1512),
      Oq = gq(6424),
      mq = gq(1214),
      xq = gq(307),
      Aq = gq(1326),
      cq = gq(1498),
      uq = gq(1422),
      Bq = gq(1341),
      Wq = gq(2517),
      Nq = gq(2641),
      aq = gq(4379),
      Vq = gq(1101),
      dq = gq(1477),
      jq = gq(96),
      Hq = gq(1183);
    const oq = gq.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Pq = gq(1018),
      Qq = gq.n(Pq),
      yq = gq(1025),
      tq = gq(1336),
      rq = gq(6422),
      vq = gq(1070);
    const hq = (0, Yq.lazy)((() => Promise.all([gq.e(106), gq.e(75), gq.e(132), gq.e(126), gq.e(125)]).then((() => gq(6456))).then((qq => ({
      default: qq.ShaderPackPublishForm
    })))));

    function nq(qq) {
      let {
        details: Eq,
        owner: gq,
        onChanged: lq
      } = qq;
      const {
        t: mq
      } = (0, Hq.v)(), xq = (0, cq.useNavigatePreserveSearch)(), {
        userContext: Bq
      } = (0, Vq.c)(), [Wq, Nq] = (0, Yq.useState)(!1), [aq, jq] = (0, Yq.useState)(null), [oq, Pq] = (0, Yq.useState)(!1), {
        packId: nq,
        name: bq,
        description: iq,
        live: Zq
      } = Eq;
      async function fq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq;
        Nq(!0), jq(null);
        try {
          await qq(), Eq()
        } catch (gq) {
          console.error("Failed to change a shader pack", gq), jq((0, rq.s)(gq, mq, "shaderPackListing:ownerActionFailed"))
        } finally {
          Nq(!1)
        }
      }
      const Mq = (0, rq.p)(Bq);
      return (0, vq.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, vq.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: mq("general:manage")
        }), (0, rq.X)(gq, !(null === Zq || void 0 === Zq || !Zq.renderId), Date.now(), mq).map((qq => (0, vq.jsxs)("div", {
          className: Qq()("ShaderPackOwnerNotice", {
            Warning: "warning" === qq.tone
          }),
          children: [(0, vq.jsx)(yq.d, {
            name: "warning" === qq.tone ? "triangle-exclamation" : "circle-info"
          }), (0, vq.jsxs)("div", {
            children: [qq.text, qq.detail && (0, vq.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: qq.detail
            })]
          })]
        }, qq.text))), Eq.ban && (0, vq.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, vq.jsx)(yq.d, {
            name: "ban"
          }), (0, vq.jsxs)("div", {
            children: ["Banned by ", Eq.ban.byName, " on ", new Date(Eq.ban.at).toLocaleString()]
          })]
        }), aq && (0, vq.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: aq
        }), (0, vq.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, vq.jsxs)(uq.Q, {
            disabled: Wq,
            onClick: () => {
              !async function() {
                const qq = await tq.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: bq,
                  maxLength: Oq.z,
                  submitText: "general:save",
                  validate: qq => qq.trim().length < Oq.D ? mq("shaderPackListing:nameTooShort", {
                    min: String(Oq.D)
                  }) : null
                }).getResult();
                "notificationTornDown" !== qq && "submit" === (null === qq || void 0 === qq ? void 0 : qq.type) && qq.value.trim() !== bq && await fq((() => dq.e.updateShaderPack(Bq, {
                  packId: nq,
                  name: qq.value.trim()
                })))
              }()
            },
            children: [(0, vq.jsx)(yq.d, {
              name: "pen"
            }), " ", mq("shaderPackListing:rename")]
          }), (0, vq.jsxs)(uq.Q, {
            disabled: Wq,
            onClick: () => {
              !async function() {
                const qq = await tq.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: iq,
                  maxLength: Oq.n,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== qq && "submit" === (null === qq || void 0 === qq ? void 0 : qq.type) && qq.value.trim() !== iq && await fq((() => dq.e.updateShaderPack(Bq, {
                  packId: nq,
                  description: qq.value.trim()
                })))
              }()
            },
            children: [(0, vq.jsx)(yq.d, {
              name: "file-lines"
            }), " ", mq("shaderPackListing:editDescription")]
          }), (0, vq.jsxs)(uq.Q, {
            disabled: Wq || gq.isBanned && !gq.listed,
            onClick: () => {
              fq((() => dq.e.updateShaderPack(Bq, {
                packId: nq,
                listed: !gq.listed
              })))
            },
            children: [(0, vq.jsx)(yq.d, {
              name: gq.listed ? "eye-slash" : "eye"
            }), " ", mq(gq.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !gq.isBanned && (0, vq.jsxs)(uq.g, {
            disabled: Wq,
            onClick: () => {
              Pq(!oq)
            },
            children: [(0, vq.jsx)(yq.d, {
              name: "upload"
            }), " ", mq("shaderPackListing:uploadVersion")]
          }), (0, vq.jsxs)(uq.L, {
            disabled: Wq || gq.isBanned,
            onClick: () => {
              !async function() {
                !0 === await tq.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await fq((() => dq.e.deleteShaderPack(Bq, nq)), (() => {
                  xq(`${rq.V}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, vq.jsx)(yq.d, {
              name: "trash-can"
            }), " ", mq("general:delete")]
          }), Mq && (0, vq.jsxs)(uq.L, {
            disabled: Wq,
            onClick: () => {
              fq((() => dq.e.setShaderPackBanned(Bq, nq, !gq.isBanned)))
            },
            children: [(0, vq.jsx)(yq.d, {
              name: gq.isBanned ? "circle-check" : "ban"
            }), " ", gq.isBanned ? "Unban" : "Ban"]
          })]
        }), oq && (0, vq.jsx)(Yq.Suspense, {
          fallback: (0, vq.jsx)(Aq.e, {}),
          children: (0, vq.jsx)(hq, {
            existing: {
              packId: nq,
              name: bq,
              description: iq
            },
            onPublished: () => {
              Pq(!1), lq()
            }
          })
        })]
      })
    }
    var bq = gq(71),
      iq = gq(1870),
      Zq = gq(1267),
      fq = gq(4866),
      Mq = gq(1195),
      Tq = gq(6431),
      zq = gq(6428),
      Sq = gq(6443);

    function pq(qq) {
      let {
        item: Eq
      } = qq;
      const {
        t: gq
      } = (0, Hq.v)(), [lq] = (0, Tq.l)(), [mq, xq] = (0, Yq.useState)(lq), [Aq, cq] = (0, Yq.useState)(!1), [uq, Bq] = (0, Yq.useState)(!1), {
        s3Url: Wq
      } = Mq.clientSideServerUrls, {
        width: Nq,
        height: aq
      } = Oq.p.large, Vq = (0, Oq.r)(Wq, Eq, mq, "large"), {
        renderVersion: dq
      } = Eq;
      return (0, vq.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, vq.jsx)(Sq.c, {
          selected: mq,
          onSelect: qq => {
            xq(qq), cq(!1)
          },
          imageUrl: qq => (0, Oq.r)(Wq, Eq, qq, "thumb")
        }), (0, vq.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Aq && (0, vq.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === dq ? void 0 : gq("shaderPackListing:fullSize"),
            disabled: null === dq,
            onClick: () => {
              Bq(!0)
            },
            children: [(0, vq.jsx)("img", {
              src: Vq,
              width: Nq,
              height: aq,
              alt: gq(rq.fb[mq]),
              draggable: !1
            }), (0, vq.jsx)(zq.e, {
              item: Eq
            })]
          }), !Aq && null !== dq && (0, vq.jsxs)(kq, {
            side: "Right",
            onClick: () => {
              cq(!0)
            },
            children: [(0, vq.jsx)(yq.d, {
              name: "arrows-left-right"
            }), " ", gq("shaderPackListing:compare")]
          }), Aq && null !== dq && (0, vq.jsx)(Jq, {
            item: Eq,
            packUrl: Vq,
            baselineUrl: (0, Oq.m)(Wq, dq, mq, "large")
          }), Aq && (0, vq.jsx)(kq, {
            side: "Left",
            onClick: () => {
              cq(!1)
            },
            children: gq("shaderPackListing:withPack")
          }), Aq && (0, vq.jsx)(kq, {
            side: "Right",
            onClick: () => {
              cq(!1)
            },
            children: gq("shaderPackListing:withoutPack")
          })]
        }), uq && (0, vq.jsx)(Gq, {
          fullUrl: (0, Oq.r)(Wq, Eq, mq, "full"),
          largeUrl: Vq,
          alt: gq(rq.fb[mq]),
          onClose: () => {
            Bq(!1)
          }
        })]
      })
    }

    function Gq(qq) {
      let {
        fullUrl: Eq,
        largeUrl: gq,
        alt: lq,
        onClose: Oq
      } = qq;
      const mq = (0, Yq.useRef)(null);
      return (0, Zq.w)("popup", mq, Oq), (0, Yq.useEffect)((() => {
        function qq(qq) {
          "Escape" === qq.key && (qq.stopPropagation(), Oq())
        }
        return window.addEventListener("keydown", qq, !0), () => {
          window.removeEventListener("keydown", qq, !0)
        }
      }), [Oq]), (0, bq.createPortal)((0, vq.jsxs)("div", {
        ref: mq,
        className: "ShaderPackFullSize",
        onClick: Oq,
        children: [(0, vq.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Eq,
          alt: lq,
          draggable: !1,
          style: {
            backgroundImage: `url(${gq})`
          }
        }), (0, vq.jsx)(uq.m, {
          className: "ShaderPackFullSizeClose",
          onClick: Oq
        })]
      }), document.body)
    }
    const Lq = 5;

    function Jq(qq) {
      let {
        item: Eq,
        packUrl: gq,
        baselineUrl: lq
      } = qq;
      const {
        t: mq
      } = (0, Hq.v)(), [xq, Aq] = (0, Yq.useState)(50), cq = (0, Yq.useRef)(!1), uq = (0, Yq.useRef)(null), {
        width: Bq,
        height: Wq
      } = Oq.p.large;

      function Nq(qq) {
        Aq((Eq => (0, iq.e)(Eq + qq, 0, 100)))
      }

      function aq(qq) {
        const Eq = qq.currentTarget.getBoundingClientRect();
        Aq((0, iq.e)((qq.clientX - Eq.left) / Eq.width * 100, 0, 100))
      }
      return (0, fq.i)(uq, {
        adjust: qq => {
          Nq(qq * Lq)
        },
        setFraction: qq => {
          Aq(100 * qq)
        },
        endDrag: () => {}
      }), (0, vq.jsxs)("div", {
        ref: uq,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": mq("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(xq),
        style: {
          "--split": `${xq}%`
        },
        onKeyDown: function(qq) {
          const Eq = "ArrowLeft" === qq.key ? -Lq : "ArrowRight" === qq.key ? Lq : 0;
          0 !== Eq && (qq.preventDefault(), Nq(Eq))
        },
        onPointerDown: qq => {
          cq.current = !0, qq.currentTarget.setPointerCapture(qq.pointerId), aq(qq)
        },
        onPointerMove: qq => {
          cq.current && aq(qq)
        },
        onPointerUp: () => {
          cq.current = !1
        },
        onPointerCancel: () => {
          cq.current = !1
        },
        children: [(0, vq.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: lq,
          width: Bq,
          height: Wq,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${gq})`
          }
        }), (0, vq.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, vq.jsx)("img", {
          className: "ShaderPackComparePack",
          src: gq,
          width: Bq,
          height: Wq,
          alt: "",
          draggable: !1
        }), (0, vq.jsx)(zq.e, {
          item: Eq,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function kq(qq) {
      let {
        side: Eq,
        onClick: gq,
        children: Yq
      } = qq;
      return (0, vq.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Eq}`,
        onClick: gq,
        children: (0, vq.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Yq
        })
      })
    }
    var Rq = gq(4828),
      Uq = gq(275),
      Fq = gq(6535);
    const sq = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Xq(qq) {
      const {
        userContext: Eq
      } = (0, Vq.c)(), [lq, Oq] = (0, Yq.useState)(null), [mq, xq] = (0, Yq.useState)(!1), [Aq, cq] = (0, Yq.useState)(!1), [uq, Bq] = (0, Yq.useState)(null), Wq = null === qq || void 0 === qq ? void 0 : qq.packId, Nq = null === qq || void 0 === qq ? void 0 : qq.sourceHash;
      return (0, Yq.useEffect)((() => {
        if (xq(!1), Bq(null), void 0 === Wq) return;
        let qq = !1;
        return Promise.all([(0, jq.hasUsableWebGpuAdapter)(), (0, Fq.d)()]).then((Eq => {
          let [gq, Yq] = Eq;
          var lq;
          qq || (Oq(gq), xq((null === Yq || void 0 === Yq || null === (lq = Yq.listing) || void 0 === lq ? void 0 : lq.packId) === Wq && Yq.listing.sourceHash === Nq))
        })).catch((Eq => {
          console.error("Failed to check whether this shader pack can be used", Eq), qq || Oq(!1)
        })), () => {
          qq = !0
        }
      }), [Wq, Nq]), {
        webGpuUsable: lq,
        inUse: mq,
        busy: Aq,
        errorKey: uq,
        use: () => {
          null !== qq && async function(qq) {
            cq(!0), Bq(null);
            try {
              const {
                installListedShaderPack: Yq
              } = await Promise.all([gq.e(75), gq.e(132), gq.e(127)]).then((() => gq(40249))), lq = await Yq({
                packId: qq.packId,
                sourceHash: qq.sourceHash,
                name: qq.name,
                ownerName: qq.ownerName,
                description: qq.description
              });
              if ("failed" === lq.kind) return void Bq(sq[lq.reason]);
              xq(!0), dq.e.recordShaderPackDownload(Eq, qq.packId).catch((qq => {
                console.error("Failed to count a shader pack's download", qq)
              })), (0, Rq.l)()
            } catch (Yq) {
              console.error("Failed to use the shader pack", Yq), Bq("shaderPack:unexpectedError")
            } finally {
              cq(!1)
            }
          }(qq)
        }
      }
    }

    function wq(qq) {
      let {
        packUse: Eq
      } = qq;
      const {
        t: gq
      } = (0, Hq.v)(), {
        webGpuUsable: Yq,
        inUse: lq,
        busy: Oq,
        errorKey: mq,
        use: xq
      } = Eq;
      return (0, vq.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, vq.jsxs)(uq.p, {
          disabled: !0 !== Yq || lq,
          loading: Oq,
          onClick: xq,
          children: [(0, vq.jsx)(yq.d, {
            name: lq ? "check" : "download"
          }), " ", gq(lq ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Yq && (0, vq.jsx)("div", {
          className: "ShaderPackUseNote",
          children: gq((0, Uq.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), mq && (0, vq.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: gq(mq)
        })]
      })
    }

    function Kq() {
      var qq;
      const {
        t: Eq
      } = (0, Hq.v)(), gq = (0, cq.useNavigatePreserveSearch)(), {
        packId: Oq
      } = (0, lq.v)(), {
        userContext: mq,
        isUserContextUpdating: xq
      } = (0, Vq.c)(), [Bq, Wq] = (0, Yq.useState)(null), [Nq, jq] = (0, Yq.useState)(null), [oq, Pq] = (0, Yq.useState)(0), Qq = (0, Yq.useRef)(0);

      function yq() {
        var qq;
        null !== (qq = (0, cq.getPreviousLocation)()) && void 0 !== qq && qq.startsWith(rq.V) ? gq(-1) : gq(rq.V)
      }(0, aq.b)(yq), (0, Tq.e)(), (0, Yq.useEffect)((() => {
        if (xq || void 0 === Oq) return;
        const qq = ++Qq.current;
        jq(null), dq.e.getShaderPack(mq, Oq).then((Eq => {
          Qq.current === qq && Wq(Eq)
        })).catch((Eq => {
          Qq.current === qq && (console.error("Failed to get the shader pack", Eq), Wq(null), jq({
            error: Eq
          }))
        }))
      }), [Oq, mq, xq, oq]);
      const tq = () => {
          Pq((qq => qq + 1))
        },
        hq = (null === Bq || void 0 === Bq ? void 0 : Bq.packId) === Oq ? Bq : null,
        bq = (0, Tq.m)(),
        iq = Xq(null !== (qq = null === hq || void 0 === hq ? void 0 : hq.live) && void 0 !== qq ? qq : null),
        Zq = null !== hq && void 0 !== hq && hq.live ? (0, vq.jsx)(Cq, {
          item: hq.live,
          favourites: bq,
          packUse: iq
        }) : null;
      return (0, vq.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, vq.jsx)(uq.d, {
          onClick: yq,
          children: Eq("shaderPackListing:backToPacks")
        }), null === hq && null === Nq && (0, vq.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, vq.jsx)(Aq.e, {})
        }), null !== Nq && (0, vq.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, rq.s)(Nq.error, Eq, "shaderPackListing:loadPackFailed"), (0, vq.jsx)(uq.g, {
            onClick: tq,
            children: Eq("general:tryAgain")
          })]
        }), null !== hq && null === Nq && (0, vq.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, vq.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, vq.jsx)("h1", {
              className: "FullyFancyText",
              children: hq.name
            }), Zq]
          }), hq.live && (0, vq.jsx)(pq, {
            item: hq.live
          }), hq.live && (0, vq.jsx)(Iq, {
            item: hq.live,
            ownerPreview: hq.ownerPreview,
            bloxdhubSlug: hq.bloxdhubSlug,
            actions: Zq
          }), hq.owner && (0, vq.jsx)(nq, {
            details: hq,
            owner: hq.owner,
            onChanged: tq
          })]
        })]
      })
    }

    function Cq(qq) {
      let {
        item: Eq,
        favourites: gq,
        packUse: Yq
      } = qq;
      const lq = gq.isFavourite(Eq.packId);
      return (0, vq.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [jq.featureFlags.settings.canUseShaderPacks && (0, vq.jsx)(wq, {
          packUse: Yq
        }), (0, vq.jsx)(uq.x, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            gq.toggle(Eq.packId)
          },
          isLiked: !0 === lq,
          isLoading: null === lq
        })]
      })
    }

    function Iq(qq) {
      let {
        item: Eq,
        ownerPreview: gq,
        bloxdhubSlug: Yq,
        actions: lq
      } = qq;
      const {
        t: xq
      } = (0, Hq.v)(), Aq = (0, Nq.t)(), uq = null === Yq ? null : (0, Oq.g)(Yq);
      return (0, vq.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Eq.description && (0, vq.jsx)("p", {
          className: "ShaderPackDescription",
          children: Eq.description
        }), (0, vq.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== gq || null !== uq) && (0, vq.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== gq ? (0, vq.jsxs)(vq.Fragment, {
              children: [(0, vq.jsx)(Wq.h, {
                playerSocialPreview: gq,
                showLocation: !1,
                linkToProfile: !0
              }), null !== uq && (0, vq.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: uq,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, vq.jsx)("img", {
                  src: oq,
                  alt: Oq.e
                })
              })]
            }) : (0, vq.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: uq,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Oq.e, (0, vq.jsx)("img", {
                src: oq,
                alt: ""
              })]
            })
          }), rq.w.filter((qq => Eq.features.includes(qq))).map((qq => (0, vq.jsx)(cq.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, rq.G)(qq),
            children: xq(rq.K[qq])
          }, qq)))]
        }), lq, (0, vq.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, vq.jsxs)("div", {
            children: [(0, vq.jsx)("dt", {
              children: xq("shaderPackListing:downloads")
            }), (0, vq.jsx)("dd", {
              children: (0, mq.S)(Eq.downloads)
            })]
          }), (0, vq.jsx)(eq, {
            label: xq("shaderPackListing:updated"),
            time: Eq.listedUpdatedAt,
            now: Aq
          }), (0, vq.jsx)(eq, {
            label: xq("shaderPackListing:created"),
            time: Eq.publishedAt,
            now: Aq
          }), null !== Eq.gpuCost && (0, vq.jsxs)("div", {
            children: [(0, vq.jsx)("dt", {
              children: xq("shaderPackListing:lag")
            }), (0, vq.jsx)("dd", {
              children: xq("shaderPackListing:lagPercent", {
                percent: String((0, rq.R)(Eq.gpuCost))
              })
            })]
          }), (0, vq.jsxs)("div", {
            children: [(0, vq.jsx)("dt", {
              children: xq("shaderPackListing:size")
            }), (0, vq.jsx)("dd", {
              children: xq("shaderPackListing:sizeValue", {
                kilobytes: String((0, rq.O)(Eq.sourceBytes))
              })
            })]
          }), (0, vq.jsxs)("div", {
            children: [(0, vq.jsx)("dt", {
              children: xq("shaderPackListing:files")
            }), (0, vq.jsx)("dd", {
              children: Eq.fileCount
            })]
          })]
        })]
      })
    }

    function eq(qq) {
      let {
        label: Eq,
        time: gq,
        now: Yq
      } = qq;
      const {
        t: lq,
        selectedLanguage: Oq
      } = (0, Hq.v)(), mq = new Date(gq);
      let Aq = mq.toLocaleDateString();
      if (Yq - gq <= 30 * xq.k) {
        const qq = (0, Hq.h)(Oq.code, "shaderPackListing:timeAgo");
        Aq = lq("shaderPackListing:timeAgo", {
          time: (0, xq.lb)(qq, gq, Yq)
        })
      }
      return (0, vq.jsx)(Bq.e, {
        tooltipInner: mq.toLocaleString(),
        children: (0, vq.jsxs)("div", {
          children: [(0, vq.jsx)("dt", {
            children: Eq
          }), (0, vq.jsx)("dd", {
            children: Aq
          })]
        })
      })
    }
  },
  4858: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1070);

    function mq(qq) {
      let {
        options: Eq,
        value: gq,
        onChange: Yq,
        ariaLabel: mq,
        className: xq,
        reselectable: Aq = !1,
        keepsFocus: cq = !1,
        padTabs: uq
      } = qq;
      const Bq = void 0 !== uq;
      return (0, Oq.jsx)("div", {
        className: lq()("SegmentedToggle", xq),
        role: "group",
        "aria-label": mq,
        "data-pad-tabs": uq,
        children: Eq.map((qq => {
          const Eq = qq.value === gq;
          return (0, Oq.jsx)("button", {
            type: "button",
            "aria-pressed": Eq,
            "data-pad-tab": Bq || void 0,
            "data-pad-selected": Bq && Eq ? "true" : void 0,
            "data-pad-default-focus": Bq && Eq || void 0,
            "aria-label": qq.ariaLabel,
            title: qq.ariaLabel,
            className: lq()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eq
            }),
            onMouseDown: cq ? qq => {
              qq.preventDefault()
            } : void 0,
            onClick: () => {
              Eq && !Aq || Yq(qq.value)
            },
            children: qq.label
          }, qq.value)
        }))
      })
    }
  },
  4866: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => mq
    });
    var Yq = gq(57);
    const lq = new WeakMap,
      Oq = qq => {
        var Eq;
        const gq = qq.closest("[data-pad-slider]");
        return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
      },
      mq = (qq, Eq) => {
        const gq = (0, Yq.useRef)(Eq);
        gq.current = Eq, (0, Yq.useEffect)((() => {
          if (qq.current) return ((qq, Eq) => (lq.set(qq, Eq), () => {
            lq.get(qq) === Eq && lq.delete(qq)
          }))(qq.current, {
            adjust: qq => {
              gq.current.adjust(qq)
            },
            setFraction: qq => {
              gq.current.setFraction(qq)
            },
            endDrag: () => {
              gq.current.endDrag()
            }
          })
        }), [qq])
      }
  },
  6535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(38);
    const lq = "shaderPack";
    async function Oq() {
      var qq;
      let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);