export const id = 111;
export const ids = [111];
export const modules = {
  4954: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Om,
      i: () => Im,
      m: () => Ym,
      o: () => Vm
    });
    var hm = fm(59),
      Am = fm(4957),
      am = fm(4304),
      xm = fm(1362),
      wm = fm(4970),
      Dm = fm(1080),
      im = fm.n(Dm),
      Rm = fm(1354),
      pm = fm(1713),
      Em = fm(4974),
      om = fm(1135);

    function Om(mm) {
      let {
        label: Tm,
        onClick: fm,
        checked: hm,
        circleInfoText: Am,
        className: wm,
        disabled: Dm,
        note: Rm
      } = mm;
      return (0, om.jsxs)("div", {
        "aria-disabled": Dm || void 0,
        "data-pad-focusable": !0,
        className: im()("SettingBox CheckboxContainer", {
          [wm]: wm,
          SettingBoxDisabled: Dm
        }),
        onClick: () => {
          Dm || fm(!hm)
        },
        children: [(0, om.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, om.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, om.jsx)(am.b, {
              className: "SettingsCheckbox",
              checked: hm,
              disabled: Dm,
              onChange: () => {}
            })
          }), (0, om.jsxs)("div", {
            className: "CheckboxText",
            children: [Tm, Am && (0, om.jsx)("span", {
              onClick: mm => mm.stopPropagation(),
              children: (0, om.jsx)(xm.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Am
              })
            })]
          })]
        }), Rm && (0, om.jsx)("div", {
          className: "SettingNote",
          children: Rm
        })]
      })
    }

    function Ym(mm) {
      let {
        name: Tm,
        onChange: fm,
        min: Am,
        max: am,
        step: wm,
        initValue: Dm,
        circleInfoText: Rm,
        format: pm,
        className: Em,
        padStep: Om,
        disabled: Ym = !1,
        selectableMax: qm,
        cappedNote: Vm,
        onChangeComplete: Im
      } = mm;
      const [Km, Qm] = (0, hm.useState)(Dm), nm = (0, hm.useRef)(Dm);
      (0, hm.useEffect)((() => {
        nm.current = Dm, Qm(Dm)
      }), [Dm]);
      const Jm = void 0 !== qm && qm < am,
        cm = Jm ? {
          "--slider-selectable": (qm - Am) / (am - Am)
        } : void 0;
      return (0, om.jsxs)("div", {
        className: im()("SettingBox SettingsSliderDiv", {
          [Em]: Em,
          SettingBoxDisabled: Ym,
          SliderCapped: Jm
        }),
        style: cm,
        children: [(0, om.jsxs)("div", {
          className: "SliderText",
          children: [`${Tm}: ${pm?pm(Km):Km}`, Rm && (0, om.jsx)(xm.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Rm
          })]
        }), (0, om.jsx)("div", {
          className: "SliderDiv",
          children: (0, om.jsx)(jm, {
            value: Km,
            min: Am,
            max: am,
            step: wm,
            onChange: mm => {
              if (Jm && mm >= qm && Km === qm) return;
              const Tm = Jm ? Math.min(mm, qm) : mm;
              nm.current = Tm, Qm(Tm), fm(Tm)
            },
            onChangeComplete: Im && (() => {
              Im(nm.current)
            }),
            format: pm,
            padStep: Om,
            disabled: Ym
          })
        }), Jm && Vm && (0, om.jsx)("div", {
          className: "SettingNote",
          children: Vm
        })]
      })
    }
    const qm = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function jm(mm) {
      var Tm;
      let {
        value: fm,
        min: am,
        max: xm,
        step: wm,
        onChange: Dm,
        orientation: im,
        reverse: Rm,
        setIsChanging: pm,
        tooltip: Om,
        labels: Ym,
        handleLabel: jm,
        format: Vm,
        onChangeStart: Im,
        onChangeComplete: Km,
        padStep: Qm,
        disabled: nm = !1
      } = mm;
      const Jm = (0, hm.useRef)(null),
        cm = (0, hm.useRef)(null);
      (0, hm.useLayoutEffect)((() => {
        var mm, Tm, fm;
        const hm = null !== (mm = null === (Tm = Jm.current) || void 0 === Tm ? void 0 : Tm.querySelector(".rangeslider")) && void 0 !== mm ? mm : null;
        null === hm || void 0 === hm || hm.setAttribute("data-pad-slider", ""), null === hm || void 0 === hm || hm.setAttribute("data-pad-focusable", ""), null === hm || void 0 === hm || null === (fm = hm.querySelector(".rangeslider__handle")) || void 0 === fm || fm.setAttribute("data-pad-slider-handle", ""), cm.current = hm
      }), []), (0, hm.useLayoutEffect)((() => {
        var mm, Tm;
        nm ? null === (mm = cm.current) || void 0 === mm || mm.setAttribute("aria-disabled", "true") : null === (Tm = cm.current) || void 0 === Tm || Tm.removeAttribute("aria-disabled")
      }), [nm]);
      const zm = (null !== (Tm = String(wm).split(".")[1]) && void 0 !== Tm ? Tm : "").length,
        Zm = mm => {
          const Tm = Number((Math.round((mm - am) / wm) * wm + am).toFixed(zm));
          return Math.min(xm, Math.max(am, Tm))
        },
        km = (0, hm.useRef)(Km);
      km.current = Km, (0, hm.useEffect)((() => {
        const mm = Jm.current;
        if (!mm) return;
        const Tm = mm => {
          var Tm;
          qm.has(mm.key) && (null === (Tm = km.current) || void 0 === Tm || Tm.call(km))
        };
        return mm.addEventListener("keyup", Tm), () => {
          mm.removeEventListener("keyup", Tm)
        }
      }), []);
      const bm = (0, hm.useRef)(!1);
      return (0, Em.d)(cm, {
        adjust: mm => {
          if (nm) return;
          const Tm = null !== Qm && void 0 !== Qm ? Qm : Math.max(wm, Math.round((xm - am) / 20 / wm) * wm),
            hm = Zm(fm + mm * Tm * (Rm ? -1 : 1));
          hm !== fm && (null === Im || void 0 === Im || Im(), Dm(hm), null === Km || void 0 === Km || Km())
        },
        setFraction: mm => {
          if (nm) return;
          const Tm = Zm(am + (Rm ? 1 - mm : mm) * (xm - am));
          Tm !== fm && (bm.current || (bm.current = !0, null === Im || void 0 === Im || Im()), Dm(Tm))
        },
        endDrag: () => {
          bm.current && (bm.current = !1, null === Km || void 0 === Km || Km())
        }
      }), (0, om.jsx)("div", {
        ref: Jm,
        style: {
          display: "contents"
        },
        children: (0, om.jsx)(Am.d, {
          value: fm,
          min: am,
          max: xm,
          step: wm,
          onChange: Dm,
          orientation: im,
          reverse: Rm,
          tooltip: Om,
          labels: Ym,
          handleLabel: jm,
          format: Vm,
          onChangeStart: () => {
            null === Im || void 0 === Im || Im(), null === pm || void 0 === pm || pm(!0)
          },
          onChangeComplete: () => {
            null === pm || void 0 === pm || pm(!1), null === Km || void 0 === Km || Km()
          }
        })
      })
    }
    async function Vm() {
      const mm = Rm.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await mm.getResult() && (0, pm.reloadBloxd)()
    }

    function Im(mm) {
      let {
        label: Tm,
        options: fm,
        value: hm,
        onChange: Am,
        circleInfoText: am
      } = mm;
      return (0, om.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, om.jsxs)("div", {
          className: "SliderText",
          children: [Tm, am && (0, om.jsx)(xm.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: am
          })]
        }), (0, om.jsx)(wm.b, {
          ariaLabel: Tm,
          options: fm,
          value: hm,
          onChange: Am
        })]
      })
    }
  },
  6617: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => dm
    });
    var hm = fm(59),
      Am = fm(1537),
      am = fm(6509),
      xm = fm(1235),
      wm = fm(354),
      Dm = fm(1345),
      im = fm(1519),
      Rm = fm(1454),
      pm = fm(1362),
      Em = fm(2588),
      om = fm(2728),
      Om = fm(4495),
      Ym = fm(1160),
      qm = fm(1494),
      jm = fm(105),
      Vm = fm(1208);
    const Im = fm.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Km = fm(1080),
      Qm = fm.n(Km),
      nm = fm(1089),
      Jm = fm(1354),
      cm = fm(6507),
      zm = fm(1135);
    const Zm = (0, hm.lazy)((() => Promise.all([fm.e(107), fm.e(77), fm.e(133), fm.e(132), fm.e(112), fm.e(397)]).then((() => fm(6547))).then((mm => ({
      default: mm.ShaderPackPublishForm
    })))));

    function km(mm) {
      let {
        details: Tm,
        owner: fm,
        onChanged: Am
      } = mm;
      const {
        t: xm
      } = (0, Vm.A)(), wm = (0, im.useNavigatePreserveSearch)(), {
        userContext: pm
      } = (0, Ym.e)(), [Em, om] = (0, hm.useState)(!1), [Om, jm] = (0, hm.useState)(null), [Im, Km] = (0, hm.useState)(!1), {
        packId: km,
        name: bm,
        description: Sm,
        live: em
      } = Tm;
      async function Nm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am;
        om(!0), jm(null);
        try {
          await mm(), Tm()
        } catch (fm) {
          console.error("Failed to change a shader pack", fm), jm((0, cm.x)(fm, xm, "shaderPackListing:ownerActionFailed"))
        } finally {
          om(!1)
        }
      }
      const Gm = (0, cm.t)(pm);
      return (0, zm.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, zm.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: xm("general:manage")
        }), (0, cm.U)(fm, !(null === em || void 0 === em || !em.renderId), Date.now(), xm).map((mm => (0, zm.jsxs)("div", {
          className: Qm()("ShaderPackOwnerNotice", {
            Warning: "warning" === mm.tone
          }),
          children: [(0, zm.jsx)(nm.c, {
            name: "warning" === mm.tone ? "triangle-exclamation" : "circle-info"
          }), (0, zm.jsxs)("div", {
            children: [mm.text, mm.detail && (0, zm.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: mm.detail
            })]
          })]
        }, mm.text))), Tm.ban && (0, zm.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, zm.jsx)(nm.c, {
            name: "ban"
          }), (0, zm.jsxs)("div", {
            children: ["Banned by ", Tm.ban.byName, " on ", new Date(Tm.ban.at).toLocaleString()]
          })]
        }), Om && (0, zm.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Om
        }), (0, zm.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, zm.jsxs)(Rm.V, {
            disabled: Em,
            onClick: () => {
              !async function() {
                const mm = await Jm.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: bm,
                  maxLength: am.D,
                  submitText: "general:save",
                  validate: mm => mm.trim().length < am.H ? xm("shaderPackListing:nameTooShort", {
                    min: String(am.H)
                  }) : null
                }).getResult();
                "notificationTornDown" !== mm && "submit" === (null === mm || void 0 === mm ? void 0 : mm.type) && mm.value.trim() !== bm && await Nm((() => qm.d.updateShaderPack(pm, {
                  packId: km,
                  name: mm.value.trim()
                })))
              }()
            },
            children: [(0, zm.jsx)(nm.c, {
              name: "pen"
            }), " ", xm("shaderPackListing:rename")]
          }), (0, zm.jsxs)(Rm.V, {
            disabled: Em,
            onClick: () => {
              !async function() {
                const mm = await Jm.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Sm,
                  maxLength: am.r,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== mm && "submit" === (null === mm || void 0 === mm ? void 0 : mm.type) && mm.value.trim() !== Sm && await Nm((() => qm.d.updateShaderPack(pm, {
                  packId: km,
                  description: mm.value.trim()
                })))
              }()
            },
            children: [(0, zm.jsx)(nm.c, {
              name: "file-lines"
            }), " ", xm("shaderPackListing:editDescription")]
          }), (0, zm.jsxs)(Rm.V, {
            disabled: Em || fm.isBanned && !fm.listed,
            onClick: () => {
              Nm((() => qm.d.updateShaderPack(pm, {
                packId: km,
                listed: !fm.listed
              })))
            },
            children: [(0, zm.jsx)(nm.c, {
              name: fm.listed ? "eye-slash" : "eye"
            }), " ", xm(fm.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !fm.isBanned && (0, zm.jsxs)(Rm.e, {
            disabled: Em,
            onClick: () => {
              Km(!Im)
            },
            children: [(0, zm.jsx)(nm.c, {
              name: "upload"
            }), " ", xm("shaderPackListing:uploadVersion")]
          }), (0, zm.jsxs)(Rm.P, {
            disabled: Em || fm.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Jm.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Nm((() => qm.d.deleteShaderPack(pm, km)), (() => {
                  wm(`${cm.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, zm.jsx)(nm.c, {
              name: "trash-can"
            }), " ", xm("general:delete")]
          }), Gm && (0, zm.jsxs)(Rm.P, {
            disabled: Em,
            onClick: () => {
              Nm((() => qm.d.setShaderPackBanned(pm, km, !fm.isBanned)))
            },
            children: [(0, zm.jsx)(nm.c, {
              name: fm.isBanned ? "circle-check" : "ban"
            }), " ", fm.isBanned ? "Unban" : "Ban"]
          })]
        }), Im && (0, zm.jsx)(hm.Suspense, {
          fallback: (0, zm.jsx)(Dm.c, {}),
          children: (0, zm.jsx)(Zm, {
            existing: {
              packId: km,
              name: bm,
              description: Sm
            },
            onPublished: () => {
              Km(!1), Am()
            }
          })
        })]
      })
    }
    var bm = fm(77),
      Sm = fm(1877),
      em = fm(1281),
      Nm = fm(4974),
      Gm = fm(1214),
      Xm = fm(6521),
      Pm = fm(6518),
      Hm = fm(6538);

    function ym(mm) {
      let {
        item: Tm
      } = mm;
      const {
        t: fm
      } = (0, Vm.A)(), [Am] = (0, Xm.h)(), [xm, wm] = (0, hm.useState)(Am), [Dm, im] = (0, hm.useState)(!1), [Rm, pm] = (0, hm.useState)(!1), {
        s3Url: Em
      } = Gm.clientSideServerUrls, {
        width: om,
        height: Om
      } = am.t.large, Ym = (0, am.v)(Em, Tm, xm, "large"), {
        renderVersion: qm
      } = Tm;
      return (0, zm.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, zm.jsx)(Hm.e, {
          selected: xm,
          onSelect: mm => {
            wm(mm), im(!1)
          },
          imageUrl: mm => (0, am.v)(Em, Tm, mm, "thumb")
        }), (0, zm.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Dm && (0, zm.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === qm ? void 0 : fm("shaderPackListing:fullSize"),
            disabled: null === qm,
            onClick: () => {
              pm(!0)
            },
            children: [(0, zm.jsx)("img", {
              src: Ym,
              width: om,
              height: Om,
              alt: fm(cm.ab[xm]),
              draggable: !1
            }), (0, zm.jsx)(Pm.c, {
              item: Tm
            })]
          }), !Dm && null !== qm && (0, zm.jsxs)(lm, {
            side: "Right",
            onClick: () => {
              im(!0)
            },
            children: [(0, zm.jsx)(nm.c, {
              name: "arrows-left-right"
            }), " ", fm("shaderPackListing:compare")]
          }), Dm && null !== qm && (0, zm.jsx)(sm, {
            item: Tm,
            packUrl: Ym,
            baselineUrl: (0, am.o)(Em, qm, xm, "large")
          }), Dm && (0, zm.jsx)(lm, {
            side: "Left",
            onClick: () => {
              im(!1)
            },
            children: fm("shaderPackListing:withPack")
          }), Dm && (0, zm.jsx)(lm, {
            side: "Right",
            onClick: () => {
              im(!1)
            },
            children: fm("shaderPackListing:withoutPack")
          })]
        }), Rm && (0, zm.jsx)(Cm, {
          fullUrl: (0, am.v)(Em, Tm, xm, "full"),
          largeUrl: Ym,
          alt: fm(cm.ab[xm]),
          onClose: () => {
            pm(!1)
          }
        })]
      })
    }

    function Cm(mm) {
      let {
        fullUrl: Tm,
        largeUrl: fm,
        alt: Am,
        onClose: am
      } = mm;
      const xm = (0, hm.useRef)(null);
      return (0, em.s)("popup", xm, am), (0, hm.useEffect)((() => {
        function mm(mm) {
          "Escape" === mm.key && (mm.stopPropagation(), am())
        }
        return window.addEventListener("keydown", mm, !0), () => {
          window.removeEventListener("keydown", mm, !0)
        }
      }), [am]), (0, bm.createPortal)((0, zm.jsxs)("div", {
        ref: xm,
        className: "ShaderPackFullSize",
        onClick: am,
        children: [(0, zm.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Tm,
          alt: Am,
          draggable: !1,
          style: {
            backgroundImage: `url(${fm})`
          }
        }), (0, zm.jsx)(Rm.j, {
          className: "ShaderPackFullSizeClose",
          onClick: am
        })]
      }), document.body)
    }
    const rm = 5;

    function sm(mm) {
      let {
        item: Tm,
        packUrl: fm,
        baselineUrl: Am
      } = mm;
      const {
        t: xm
      } = (0, Vm.A)(), [wm, Dm] = (0, hm.useState)(50), im = (0, hm.useRef)(!1), Rm = (0, hm.useRef)(null), {
        width: pm,
        height: Em
      } = am.t.large;

      function om(mm) {
        Dm((Tm => (0, Sm.e)(Tm + mm, 0, 100)))
      }

      function Om(mm) {
        const Tm = mm.currentTarget.getBoundingClientRect();
        Dm((0, Sm.e)((mm.clientX - Tm.left) / Tm.width * 100, 0, 100))
      }
      return (0, Nm.d)(Rm, {
        adjust: mm => {
          om(mm * rm)
        },
        setFraction: mm => {
          Dm(100 * mm)
        },
        endDrag: () => {}
      }), (0, zm.jsxs)("div", {
        ref: Rm,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": xm("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(wm),
        style: {
          "--split": `${wm}%`
        },
        onKeyDown: function(mm) {
          const Tm = "ArrowLeft" === mm.key ? -rm : "ArrowRight" === mm.key ? rm : 0;
          0 !== Tm && (mm.preventDefault(), om(Tm))
        },
        onPointerDown: mm => {
          im.current = !0, mm.currentTarget.setPointerCapture(mm.pointerId), Om(mm)
        },
        onPointerMove: mm => {
          im.current && Om(mm)
        },
        onPointerUp: () => {
          im.current = !1
        },
        onPointerCancel: () => {
          im.current = !1
        },
        children: [(0, zm.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Am,
          width: pm,
          height: Em,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${fm})`
          }
        }), (0, zm.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, zm.jsx)("img", {
          className: "ShaderPackComparePack",
          src: fm,
          width: pm,
          height: Em,
          alt: "",
          draggable: !1
        }), (0, zm.jsx)(Pm.c, {
          item: Tm,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function lm(mm) {
      let {
        side: Tm,
        onClick: fm,
        children: hm
      } = mm;
      return (0, zm.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Tm}`,
        onClick: fm,
        children: (0, zm.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: hm
        })
      })
    }
    var Mm = fm(4954),
      um = fm(330),
      Bm = fm(6609);
    const Lm = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function tm(mm) {
      const {
        userContext: Tm
      } = (0, Ym.e)(), [Am, am] = (0, hm.useState)(null), [xm, wm] = (0, hm.useState)(!1), [Dm, im] = (0, hm.useState)(!1), [Rm, pm] = (0, hm.useState)(null), Em = null === mm || void 0 === mm ? void 0 : mm.packId, om = null === mm || void 0 === mm ? void 0 : mm.sourceHash;
      return (0, hm.useEffect)((() => {
        if (wm(!1), pm(null), void 0 === Em) return;
        let mm = !1;
        return Promise.all([(0, jm.hasUsableWebGpuAdapter)(), (0, Bm.e)()]).then((Tm => {
          let [fm, hm] = Tm;
          var Am;
          mm || (am(fm), wm((null === hm || void 0 === hm || null === (Am = hm.listing) || void 0 === Am ? void 0 : Am.packId) === Em && hm.listing.sourceHash === om))
        })).catch((Tm => {
          console.error("Failed to check whether this shader pack can be used", Tm), mm || am(!1)
        })), () => {
          mm = !0
        }
      }), [Em, om]), {
        webGpuUsable: Am,
        inUse: xm,
        busy: Dm,
        errorKey: Rm,
        use: () => {
          null !== mm && async function(mm) {
            im(!0), pm(null);
            try {
              const {
                installListedShaderPack: hm
              } = await Promise.all([fm.e(77), fm.e(133), fm.e(113)]).then((() => fm(40601))), Am = await hm({
                packId: mm.packId,
                sourceHash: mm.sourceHash,
                name: mm.name,
                ownerName: mm.ownerName,
                description: mm.description
              });
              if ("failed" === Am.kind) return void pm(Lm[Am.reason]);
              wm(!0), qm.d.recordShaderPackDownload(Tm, mm.packId).catch((mm => {
                console.error("Failed to count a shader pack's download", mm)
              })), (0, Mm.o)()
            } catch (hm) {
              console.error("Failed to use the shader pack", hm), pm("shaderPack:unexpectedError")
            } finally {
              im(!1)
            }
          }(mm)
        }
      }
    }

    function Um(mm) {
      let {
        packUse: Tm
      } = mm;
      const {
        t: fm
      } = (0, Vm.A)(), {
        webGpuUsable: hm,
        inUse: Am,
        busy: am,
        errorKey: xm,
        use: wm
      } = Tm;
      return (0, zm.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, zm.jsxs)(Rm.m, {
          disabled: !0 !== hm || Am,
          loading: am,
          onClick: wm,
          children: [(0, zm.jsx)(nm.c, {
            name: Am ? "check" : "download"
          }), " ", fm(Am ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === hm && (0, zm.jsx)("div", {
          className: "ShaderPackUseNote",
          children: fm((0, um.h)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), xm && (0, zm.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: fm(xm)
        })]
      })
    }

    function dm() {
      var mm;
      const {
        t: Tm
      } = (0, Vm.A)(), fm = (0, im.useNavigatePreserveSearch)(), {
        packId: am
      } = (0, Am.G)(), {
        userContext: xm,
        isUserContextUpdating: wm
      } = (0, Ym.e)(), [pm, Em] = (0, hm.useState)(null), [om, jm] = (0, hm.useState)(null), [Im, Km] = (0, hm.useState)(0), Qm = (0, hm.useRef)(0);

      function nm() {
        var mm;
        null !== (mm = (0, im.getPreviousLocation)()) && void 0 !== mm && mm.startsWith(cm.S) ? fm(-1) : fm(cm.S)
      }(0, Om.c)(nm), (0, Xm.e)(), (0, hm.useEffect)((() => {
        if (wm || void 0 === am) return;
        const mm = ++Qm.current;
        jm(null), qm.d.getShaderPack(xm, am).then((Tm => {
          Qm.current === mm && Em(Tm)
        })).catch((Tm => {
          Qm.current === mm && (console.error("Failed to get the shader pack", Tm), Em(null), jm({
            error: Tm
          }))
        }))
      }), [am, xm, wm, Im]);
      const Jm = () => {
          Km((mm => mm + 1))
        },
        Zm = (null === pm || void 0 === pm ? void 0 : pm.packId) === am ? pm : null,
        bm = (0, Xm.k)(),
        Sm = tm(null !== (mm = null === Zm || void 0 === Zm ? void 0 : Zm.live) && void 0 !== mm ? mm : null),
        em = null !== Zm && void 0 !== Zm && Zm.live ? (0, zm.jsx)(gm, {
          item: Zm.live,
          favourites: bm,
          packUse: Sm
        }) : null;
      return (0, zm.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, zm.jsx)(Rm.d, {
          onClick: nm,
          children: Tm("shaderPackListing:backToPacks")
        }), null === Zm && null === om && (0, zm.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, zm.jsx)(Dm.c, {})
        }), null !== om && (0, zm.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, cm.x)(om.error, Tm, "shaderPackListing:loadPackFailed"), (0, zm.jsx)(Rm.e, {
            onClick: Jm,
            children: Tm("general:tryAgain")
          })]
        }), null !== Zm && null === om && (0, zm.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, zm.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, zm.jsx)("h1", {
              className: "FullyFancyText",
              children: Zm.name
            }), em]
          }), Zm.live && (0, zm.jsx)(ym, {
            item: Zm.live
          }), Zm.live && (0, zm.jsx)(Wm, {
            item: Zm.live,
            ownerPreview: Zm.ownerPreview,
            bloxdhubSlug: Zm.bloxdhubSlug,
            actions: em
          }), Zm.owner && (0, zm.jsx)(km, {
            details: Zm,
            owner: Zm.owner,
            onChanged: Jm
          })]
        })]
      })
    }

    function gm(mm) {
      let {
        item: Tm,
        favourites: fm,
        packUse: hm
      } = mm;
      const Am = fm.isFavourite(Tm.packId);
      return (0, zm.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [jm.featureFlags.settings.canUseShaderPacks && (0, zm.jsx)(Um, {
          packUse: hm
        }), (0, zm.jsx)(Rm.s, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            fm.toggle(Tm.packId)
          },
          isLiked: !0 === Am,
          isLoading: null === Am
        })]
      })
    }

    function Wm(mm) {
      let {
        item: Tm,
        ownerPreview: fm,
        bloxdhubSlug: hm,
        actions: Am
      } = mm;
      const {
        t: wm
      } = (0, Vm.A)(), Dm = (0, om.u)(), Rm = null === hm ? null : (0, am.g)(hm);
      return (0, zm.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Tm.description && (0, zm.jsx)("p", {
          className: "ShaderPackDescription",
          children: Tm.description
        }), (0, zm.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== fm || null !== Rm) && (0, zm.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== fm ? (0, zm.jsxs)(zm.Fragment, {
              children: [(0, zm.jsx)(Em.f, {
                playerSocialPreview: fm,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Rm && (0, zm.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Rm,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, zm.jsx)("img", {
                  src: Im,
                  alt: am.e
                })
              })]
            }) : (0, zm.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Rm,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [am.e, (0, zm.jsx)("img", {
                src: Im,
                alt: ""
              })]
            })
          }), cm.y.filter((mm => Tm.features.includes(mm))).map((mm => (0, zm.jsx)(im.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, cm.J)(mm),
            children: wm(cm.L[mm])
          }, mm)))]
        }), Am, (0, zm.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, zm.jsxs)("div", {
            children: [(0, zm.jsx)("dt", {
              children: wm("shaderPackListing:downloads")
            }), (0, zm.jsx)("dd", {
              children: (0, xm.J)(Tm.downloads)
            })]
          }), (0, zm.jsx)(Fm, {
            label: wm("shaderPackListing:updated"),
            time: Tm.listedUpdatedAt,
            now: Dm
          }), (0, zm.jsx)(Fm, {
            label: wm("shaderPackListing:created"),
            time: Tm.publishedAt,
            now: Dm
          }), null !== Tm.gpuCost && (0, zm.jsxs)("div", {
            children: [(0, zm.jsx)("dt", {
              children: wm("shaderPackListing:lag")
            }), (0, zm.jsx)("dd", {
              children: wm("shaderPackListing:lagPercent", {
                percent: String((0, cm.O)(Tm.gpuCost))
              })
            })]
          }), (0, zm.jsxs)("div", {
            children: [(0, zm.jsx)("dt", {
              children: wm("shaderPackListing:size")
            }), (0, zm.jsx)("dd", {
              children: wm("shaderPackListing:sizeValue", {
                kilobytes: String((0, cm.N)(Tm.sourceBytes))
              })
            })]
          }), (0, zm.jsxs)("div", {
            children: [(0, zm.jsx)("dt", {
              children: wm("shaderPackListing:files")
            }), (0, zm.jsx)("dd", {
              children: Tm.fileCount
            })]
          })]
        })]
      })
    }

    function Fm(mm) {
      let {
        label: Tm,
        time: fm,
        now: hm
      } = mm;
      const {
        t: Am,
        selectedLanguage: am
      } = (0, Vm.A)(), xm = new Date(fm);
      let Dm = xm.toLocaleDateString();
      if (hm - fm <= 30 * wm.k) {
        const mm = (0, Vm.n)(am.code, "shaderPackListing:timeAgo");
        Dm = Am("shaderPackListing:timeAgo", {
          time: (0, wm.cb)(mm, fm, hm)
        })
      }
      return (0, zm.jsx)(pm.h, {
        tooltipInner: xm.toLocaleString(),
        children: (0, zm.jsxs)("div", {
          children: [(0, zm.jsx)("dt", {
            children: Tm
          }), (0, zm.jsx)("dd", {
            children: Dm
          })]
        })
      })
    }
  },
  4970: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1135);

    function xm(mm) {
      let {
        options: Tm,
        value: fm,
        onChange: hm,
        ariaLabel: xm,
        className: wm,
        reselectable: Dm = !1,
        keepsFocus: im = !1,
        padTabs: Rm
      } = mm;
      const pm = void 0 !== Rm;
      return (0, am.jsx)("div", {
        className: Am()("SegmentedToggle", wm),
        role: "group",
        "aria-label": xm,
        "data-pad-tabs": Rm,
        children: Tm.map((mm => {
          const Tm = mm.value === fm;
          return (0, am.jsx)("button", {
            type: "button",
            "aria-pressed": Tm,
            "data-pad-tab": pm || void 0,
            "data-pad-selected": pm && Tm ? "true" : void 0,
            "data-pad-default-focus": pm && Tm || void 0,
            "aria-label": mm.ariaLabel,
            title: mm.ariaLabel,
            className: Am()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Tm
            }),
            onMouseDown: im ? mm => {
              mm.preventDefault()
            } : void 0,
            onClick: () => {
              Tm && !Dm || hm(mm.value)
            },
            children: mm.label
          }, mm.value)
        }))
      })
    }
  },
  4974: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => xm
    });
    var hm = fm(59);
    const Am = new WeakMap,
      am = mm => {
        var Tm;
        const fm = mm.closest("[data-pad-slider]");
        return fm && null !== (Tm = Am.get(fm)) && void 0 !== Tm ? Tm : null
      },
      xm = (mm, Tm) => {
        const fm = (0, hm.useRef)(Tm);
        fm.current = Tm, (0, hm.useEffect)((() => {
          if (mm.current) return ((mm, Tm) => (Am.set(mm, Tm), () => {
            Am.get(mm) === Tm && Am.delete(mm)
          }))(mm.current, {
            adjust: mm => {
              fm.current.adjust(mm)
            },
            setFraction: mm => {
              fm.current.setFraction(mm)
            },
            endDrag: () => {
              fm.current.endDrag()
            }
          })
        }), [mm])
      }
  },
  6609: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(37);
    const Am = "shaderPack";
    async function am() {
      var mm;
      let Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (mm = await hm.e.getItem(Am, Tm)) && void 0 !== mm ? mm : null
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);