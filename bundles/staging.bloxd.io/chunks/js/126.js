export const id = 126;
export const ids = [126];
export const modules = {
  5501: (ee, ie, He) => {
    He.d(ie, {
      c: () => fe,
      e: () => Ee,
      f: () => Te,
      j: () => Be
    });
    var ye = He(59),
      be = He(5510),
      Me = He(4729),
      Ke = He(1351),
      Ue = He(5537),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(1340),
      Re = He(1768),
      ke = He(5544),
      qe = He(1228);

    function fe(ee) {
      let {
        label: ie,
        onClick: He,
        checked: ye,
        circleInfoText: be,
        className: Ue,
        disabled: Fe,
        note: oe
      } = ee;
      return (0, qe.jsxs)("div", {
        "aria-disabled": Fe || void 0,
        "data-pad-focusable": !0,
        className: Je()("SettingBox CheckboxContainer", {
          [Ue]: Ue,
          SettingBoxDisabled: Fe
        }),
        onClick: () => {
          Fe || He(!ye)
        },
        children: [(0, qe.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, qe.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, qe.jsx)(Me.d, {
              className: "SettingsCheckbox",
              checked: ye,
              disabled: Fe,
              onChange: () => {}
            })
          }), (0, qe.jsxs)("div", {
            className: "CheckboxText",
            children: [ie, be && (0, qe.jsx)("span", {
              onClick: ee => ee.stopPropagation(),
              children: (0, qe.jsx)(Ke.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: be
              })
            })]
          })]
        }), oe && (0, qe.jsx)("div", {
          className: "SettingNote",
          children: oe
        })]
      })
    }

    function Te(ee) {
      let {
        name: ie,
        onChange: He,
        min: be,
        max: Me,
        step: Ue,
        initValue: Fe,
        circleInfoText: oe,
        format: Re,
        className: ke,
        padStep: fe,
        disabled: Te = !1,
        selectableMax: pe,
        cappedNote: Xe,
        note: Be,
        onChangeComplete: Ee
      } = ee;
      const [ge, Oe] = (0, ye.useState)(Fe), de = (0, ye.useRef)(Fe);
      (0, ye.useEffect)((() => {
        de.current = Fe, Oe(Fe)
      }), [Fe]);
      const We = void 0 !== pe && pe < Me,
        te = We ? {
          "--slider-selectable": (pe - be) / (Me - be)
        } : void 0,
        Ze = We && Xe ? Xe : Be;
      return (0, qe.jsxs)("div", {
        className: Je()("SettingBox SettingsSliderDiv", {
          [ke]: ke,
          SettingBoxDisabled: Te,
          SliderCapped: We
        }),
        style: te,
        children: [(0, qe.jsxs)("div", {
          className: "SliderText",
          children: [`${ie}: ${Re?Re(ge):ge}`, oe && (0, qe.jsx)(Ke.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oe
          })]
        }), (0, qe.jsx)("div", {
          className: "SliderDiv",
          children: (0, qe.jsx)(ze, {
            value: ge,
            min: be,
            max: Me,
            step: Ue,
            onChange: ee => {
              if (We && ee >= pe && ge === pe) return;
              const ie = We ? Math.min(ee, pe) : ee;
              de.current = ie, Oe(ie), He(ie)
            },
            onChangeComplete: Ee && (() => {
              Ee(de.current)
            }),
            format: Re,
            padStep: fe,
            disabled: Te
          })
        }), Ze && (0, qe.jsx)("div", {
          className: "SettingNote",
          children: Ze
        })]
      })
    }
    const pe = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Xe(ee) {
      var ie;
      return (null !== (ie = String(ee).split(".")[1]) && void 0 !== ie ? ie : "").length
    }

    function ze(ee) {
      let {
        value: ie,
        min: He,
        max: Me,
        step: Ke,
        onChange: Ue,
        orientation: Fe,
        reverse: Je,
        setIsChanging: oe,
        tooltip: Re,
        labels: fe,
        handleLabel: Te,
        format: ze,
        onChangeStart: Be,
        onChangeComplete: Ee,
        padStep: ge,
        disabled: Oe = !1
      } = ee;
      const de = (0, ye.useRef)(null),
        We = (0, ye.useRef)(null);
      (0, ye.useLayoutEffect)((() => {
        var ee, ie, He;
        const ye = null !== (ee = null === (ie = de.current) || void 0 === ie ? void 0 : ie.querySelector(".rangeslider")) && void 0 !== ee ? ee : null;
        null === ye || void 0 === ye || ye.setAttribute("data-pad-slider", ""), null === ye || void 0 === ye || ye.setAttribute("data-pad-focusable", ""), null === ye || void 0 === ye || null === (He = ye.querySelector(".rangeslider__handle")) || void 0 === He || He.setAttribute("data-pad-slider-handle", ""), We.current = ye
      }), []), (0, ye.useLayoutEffect)((() => {
        var ee, ie;
        Oe ? null === (ee = We.current) || void 0 === ee || ee.setAttribute("aria-disabled", "true") : null === (ie = We.current) || void 0 === ie || ie.removeAttribute("aria-disabled")
      }), [Oe]);
      const te = Math.max(Xe(Ke), Xe(He)),
        Ze = ee => {
          if (ee >= Me) return Me;
          if (ee <= He) return He;
          const ie = Number((Math.round((ee - He) / Ke) * Ke + He).toFixed(te));
          return Math.min(Me, Math.max(He, ie))
        },
        we = (0, ye.useRef)(Ee);
      we.current = Ee, (0, ye.useEffect)((() => {
        const ee = de.current;
        if (!ee) return;
        const ie = ee => {
          var ie;
          pe.has(ee.key) && (null === (ie = we.current) || void 0 === ie || ie.call(we))
        };
        return ee.addEventListener("keyup", ie), () => {
          ee.removeEventListener("keyup", ie)
        }
      }), []);
      const De = (0, ye.useRef)(!1);
      return (0, ke.d)(We, {
        adjust: ee => {
          if (Oe) return;
          const ye = null !== ge && void 0 !== ge ? ge : Math.max(Ke, Math.round((Me - He) / 20 / Ke) * Ke),
            be = Ze(ie + ee * ye * (Je ? -1 : 1));
          be !== ie && (null === Be || void 0 === Be || Be(), Ue(be), null === Ee || void 0 === Ee || Ee())
        },
        setFraction: ee => {
          if (Oe) return;
          const ye = Ze(He + (Je ? 1 - ee : ee) * (Me - He));
          ye !== ie && (De.current || (De.current = !0, null === Be || void 0 === Be || Be()), Ue(ye))
        },
        endDrag: () => {
          De.current && (De.current = !1, null === Ee || void 0 === Ee || Ee())
        }
      }), (0, qe.jsx)("div", {
        ref: de,
        style: {
          display: "contents"
        },
        children: (0, qe.jsx)(be.c, {
          value: ie,
          min: He,
          max: Me,
          step: Ke,
          onChange: ee => {
            Ue(Ze(ee))
          },
          orientation: Fe,
          reverse: Je,
          tooltip: Re,
          labels: fe,
          handleLabel: Te,
          format: ze,
          onChangeStart: () => {
            null === Be || void 0 === Be || Be(), null === oe || void 0 === oe || oe(!0)
          },
          onChangeComplete: () => {
            null === oe || void 0 === oe || oe(!1), null === Ee || void 0 === Ee || Ee()
          }
        })
      })
    }
    async function Be() {
      const ee = oe.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await ee.getResult() && (0, Re.reloadBloxd)()
    }

    function Ee(ee) {
      let {
        label: ie,
        options: He,
        value: ye,
        onChange: be,
        circleInfoText: Me
      } = ee;
      return (0, qe.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, qe.jsxs)("div", {
          className: "SliderText",
          children: [ie, Me && (0, qe.jsx)(Ke.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Me
          })]
        }), (0, qe.jsx)(Ue.b, {
          ariaLabel: ie,
          options: He,
          value: ye,
          onChange: be
        })]
      })
    }
  },
  7301: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Ge
    });
    var ye = He(59),
      be = He(1515),
      Me = He(7206),
      Ke = He(1169),
      Ue = He(347),
      Fe = He(1538),
      Je = He(1320),
      oe = He(1502),
      Re = He(1438),
      ke = He(1351),
      qe = He(1603),
      fe = He(2749),
      Te = He(2893),
      pe = He(4942),
      Xe = He(1075),
      ze = He(1490),
      Be = He(97),
      Ee = He(1127);
    const ge = He.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Oe = He(1053),
      de = He.n(Oe),
      We = He(1323),
      te = He(1340),
      Ze = He(7201),
      we = He(1228);
    const De = (0, ye.lazy)((() => Promise.all([He.e(120), He.e(89), He.e(149), He.e(148), He.e(127), He.e(706)]).then((() => He(7238))).then((ee => ({
      default: ee.ShaderPackPublishForm
    })))));

    function Pe(ee) {
      let {
        details: ie,
        owner: He,
        onChanged: be
      } = ee;
      const {
        t: Ke
      } = (0, Ee.v)(), Ue = (0, oe.useNavigatePreserveSearch)(), {
        userContext: Fe
      } = (0, Xe.b)(), [ke, qe] = (0, ye.useState)(!1), [fe, Te] = (0, ye.useState)(null), [pe, Be] = (0, ye.useState)(!1), {
        packId: ge,
        name: Oe,
        description: Pe,
        live: Ae
      } = ie;
      async function Ye(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be;
        qe(!0), Te(null);
        try {
          await ee(), ie()
        } catch (He) {
          console.error("Failed to change a shader pack", He), Te((0, Ze.z)(He, Ke, "shaderPackListing:ownerActionFailed"))
        } finally {
          qe(!1)
        }
      }
      const Ve = (0, Ze.t)(Fe);
      return (0, we.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, we.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Ke("general:manage")
        }), (0, Ze.ab)(He, !(null === Ae || void 0 === Ae || !Ae.renderId), Date.now(), Ke).map((ee => (0, we.jsxs)("div", {
          className: de()("ShaderPackOwnerNotice", {
            Warning: "warning" === ee.tone
          }),
          children: [(0, we.jsx)(We.e, {
            name: "warning" === ee.tone ? "triangle-exclamation" : "circle-info"
          }), (0, we.jsxs)("div", {
            children: [ee.text, ee.detail && (0, we.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: ee.detail
            })]
          })]
        }, ee.text))), ie.ban && (0, we.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, we.jsx)(We.e, {
            name: "ban"
          }), (0, we.jsxs)("div", {
            children: ["Banned by ", ie.ban.byName, " on ", new Date(ie.ban.at).toLocaleString()]
          })]
        }), fe && (0, we.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: fe
        }), (0, we.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, we.jsxs)(Re.M, {
            disabled: ke,
            onClick: () => {
              !async function() {
                const ee = await te.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Oe,
                  maxLength: Me.y,
                  submitText: "general:save",
                  validate: ee => ee.trim().length < Me.A ? Ke("shaderPackListing:nameTooShort", {
                    min: String(Me.A)
                  }) : null
                }).getResult();
                "notificationTornDown" !== ee && "submit" === (null === ee || void 0 === ee ? void 0 : ee.type) && ee.value.trim() !== Oe && await Ye((() => ze.b.updateShaderPack(Fe, {
                  packId: ge,
                  name: ee.value.trim()
                })))
              }()
            },
            children: [(0, we.jsx)(We.e, {
              name: "pen"
            }), " ", Ke("shaderPackListing:rename")]
          }), (0, we.jsxs)(Re.M, {
            disabled: ke,
            onClick: () => {
              !async function() {
                const ee = await te.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Pe,
                  maxLength: Me.o,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== ee && "submit" === (null === ee || void 0 === ee ? void 0 : ee.type) && ee.value.trim() !== Pe && await Ye((() => ze.b.updateShaderPack(Fe, {
                  packId: ge,
                  description: ee.value.trim()
                })))
              }()
            },
            children: [(0, we.jsx)(We.e, {
              name: "file-lines"
            }), " ", Ke("shaderPackListing:editDescription")]
          }), (0, we.jsxs)(Re.M, {
            disabled: ke || He.isBanned && !He.listed,
            onClick: () => {
              Ye((() => ze.b.updateShaderPack(Fe, {
                packId: ge,
                listed: !He.listed
              })))
            },
            children: [(0, we.jsx)(We.e, {
              name: He.listed ? "eye-slash" : "eye"
            }), " ", Ke(He.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !He.isBanned && (0, we.jsxs)(Re.c, {
            disabled: ke,
            onClick: () => {
              Be(!pe)
            },
            children: [(0, we.jsx)(We.e, {
              name: "upload"
            }), " ", Ke("shaderPackListing:uploadVersion")]
          }), (0, we.jsxs)(Re.I, {
            disabled: ke || He.isBanned,
            onClick: () => {
              !async function() {
                !0 === await te.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Ye((() => ze.b.deleteShaderPack(Fe, ge)), (() => {
                  Ue(`${Ze.Y}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, we.jsx)(We.e, {
              name: "trash-can"
            }), " ", Ke("general:delete")]
          }), Ve && (0, we.jsxs)(Re.I, {
            disabled: ke,
            onClick: () => {
              Ye((() => ze.b.setShaderPackBanned(Fe, ge, !He.isBanned)))
            },
            children: [(0, we.jsx)(We.e, {
              name: He.isBanned ? "circle-check" : "ban"
            }), " ", He.isBanned ? "Unban" : "Ban"]
          })]
        }), pe && (0, we.jsx)(ye.Suspense, {
          fallback: (0, we.jsx)(Je.b, {}),
          children: (0, we.jsx)(De, {
            existing: {
              packId: ge,
              name: Oe,
              description: Pe
            },
            onPublished: () => {
              Be(!1), be()
            }
          })
        })]
      })
    }
    var Ae = He(77),
      Ye = He(1952),
      Ve = He(1215),
      ae = He(5544),
      ce = He(1141),
      xe = He(7213),
      Le = He(7210),
      Ce = He(7227);

    function ve(ee) {
      let {
        item: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), [be] = (0, xe.i)(), [Ke, Ue] = (0, ye.useState)(be), [Fe, Je] = (0, ye.useState)(!1), [oe, Re] = (0, ye.useState)(!1), {
        s3Url: ke
      } = ce.clientSideServerUrls, {
        width: qe,
        height: fe
      } = Me.s.large, Te = (0, Me.t)(ke, ie, Ke, "large"), {
        renderVersion: pe
      } = ie;
      return (0, we.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, we.jsx)(Ce.e, {
          selected: Ke,
          onSelect: ee => {
            Ue(ee), Je(!1)
          },
          imageUrl: ee => (0, Me.t)(ke, ie, ee, "thumb")
        }), (0, we.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Fe && (0, we.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === pe ? void 0 : He("shaderPackListing:fullSize"),
            disabled: null === pe,
            onClick: () => {
              Re(!0)
            },
            children: [(0, we.jsx)("img", {
              src: Te,
              width: qe,
              height: fe,
              alt: He(Ze.lb[Ke]),
              draggable: !1
            }), (0, we.jsx)(Le.b, {
              item: ie
            })]
          }), !Fe && null !== pe && (0, we.jsxs)(Se, {
            side: "Right",
            onClick: () => {
              Je(!0)
            },
            children: [(0, we.jsx)(We.e, {
              name: "arrows-left-right"
            }), " ", He("shaderPackListing:compare")]
          }), Fe && null !== pe && (0, we.jsx)(le, {
            item: ie,
            packUrl: Te,
            baselineUrl: (0, Me.m)(ke, pe, Ke, "large")
          }), Fe && (0, we.jsx)(Se, {
            side: "Left",
            onClick: () => {
              Je(!1)
            },
            children: He("shaderPackListing:withPack")
          }), Fe && (0, we.jsx)(Se, {
            side: "Right",
            onClick: () => {
              Je(!1)
            },
            children: He("shaderPackListing:withoutPack")
          })]
        }), oe && (0, we.jsx)(ue, {
          fullUrl: (0, Me.t)(ke, ie, Ke, "full"),
          largeUrl: Te,
          alt: He(Ze.lb[Ke]),
          onClose: () => {
            Re(!1)
          }
        })]
      })
    }

    function ue(ee) {
      let {
        fullUrl: ie,
        largeUrl: He,
        alt: be,
        onClose: Me
      } = ee;
      const Ke = (0, ye.useRef)(null);
      return (0, Ve.t)("popup", Ke, Me), (0, ye.useEffect)((() => {
        function ee(ee) {
          "Escape" === ee.key && (ee.stopPropagation(), Me())
        }
        return window.addEventListener("keydown", ee, !0), () => {
          window.removeEventListener("keydown", ee, !0)
        }
      }), [Me]), (0, Ae.createPortal)((0, we.jsxs)("div", {
        ref: Ke,
        className: "ShaderPackFullSize",
        onClick: Me,
        children: [(0, we.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: ie,
          alt: be,
          draggable: !1,
          style: {
            backgroundImage: `url(${He})`
          }
        }), (0, we.jsx)(Re.i, {
          className: "ShaderPackFullSizeClose",
          onClick: Me
        })]
      }), document.body)
    }
    const me = 5;

    function le(ee) {
      let {
        item: ie,
        packUrl: He,
        baselineUrl: be
      } = ee;
      const {
        t: Ke
      } = (0, Ee.v)(), [Ue, Fe] = (0, ye.useState)(50), Je = (0, ye.useRef)(!1), oe = (0, ye.useRef)(null), {
        width: Re,
        height: ke
      } = Me.s.large;

      function qe(ee) {
        Fe((ie => (0, Ye.c)(ie + ee, 0, 100)))
      }

      function fe(ee) {
        const ie = ee.currentTarget.getBoundingClientRect();
        Fe((0, Ye.c)((ee.clientX - ie.left) / ie.width * 100, 0, 100))
      }
      return (0, ae.d)(oe, {
        adjust: ee => {
          qe(ee * me)
        },
        setFraction: ee => {
          Fe(100 * ee)
        },
        endDrag: () => {}
      }), (0, we.jsxs)("div", {
        ref: oe,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Ke("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Ue),
        style: {
          "--split": `${Ue}%`
        },
        onKeyDown: function(ee) {
          const ie = "ArrowLeft" === ee.key ? -me : "ArrowRight" === ee.key ? me : 0;
          0 !== ie && (ee.preventDefault(), qe(ie))
        },
        onPointerDown: ee => {
          Je.current = !0, ee.currentTarget.setPointerCapture(ee.pointerId), fe(ee)
        },
        onPointerMove: ee => {
          Je.current && fe(ee)
        },
        onPointerUp: () => {
          Je.current = !1
        },
        onPointerCancel: () => {
          Je.current = !1
        },
        children: [(0, we.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: be,
          width: Re,
          height: ke,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${He})`
          }
        }), (0, we.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, we.jsx)("img", {
          className: "ShaderPackComparePack",
          src: He,
          width: Re,
          height: ke,
          alt: "",
          draggable: !1
        }), (0, we.jsx)(Le.b, {
          item: ie,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Se(ee) {
      let {
        side: ie,
        onClick: He,
        children: ye
      } = ee;
      return (0, we.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${ie}`,
        onClick: He,
        children: (0, we.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: ye
        })
      })
    }
    var ne = He(5501),
      je = He(325),
      se = He(7296);
    const Ie = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function he(ee) {
      const {
        userContext: ie
      } = (0, Xe.b)(), [be, Me] = (0, ye.useState)(null), [Ke, Ue] = (0, ye.useState)(!1), [Fe, Je] = (0, ye.useState)(!1), [oe, Re] = (0, ye.useState)(null), ke = null === ee || void 0 === ee ? void 0 : ee.packId, qe = null === ee || void 0 === ee ? void 0 : ee.sourceHash;
      return (0, ye.useEffect)((() => {
        if (Ue(!1), Re(null), void 0 === ke) return;
        let ee = !1;
        return Promise.all([(0, Be.hasUsableWebGpuAdapter)(), (0, se.h)()]).then((ie => {
          let [He, ye] = ie;
          var be;
          ee || (Me(He), Ue((null === ye || void 0 === ye || null === (be = ye.listing) || void 0 === be ? void 0 : be.packId) === ke && ye.listing.sourceHash === qe))
        })).catch((ie => {
          console.error("Failed to check whether this shader pack can be used", ie), ee || Me(!1)
        })), () => {
          ee = !0
        }
      }), [ke, qe]), {
        webGpuUsable: be,
        inUse: Ke,
        busy: Fe,
        errorKey: oe,
        use: () => {
          null !== ee && async function(ee) {
            Je(!0), Re(null);
            try {
              const {
                installListedShaderPack: ye
              } = await Promise.all([He.e(89), He.e(149), He.e(128)]).then((() => He(41618))), be = await ye({
                packId: ee.packId,
                sourceHash: ee.sourceHash,
                name: ee.name,
                ownerName: ee.ownerName,
                description: ee.description
              });
              if ("failed" === be.kind) return void Re(Ie[be.reason]);
              Ue(!0), ze.b.recordShaderPackDownload(ie, ee.packId).catch((ee => {
                console.error("Failed to count a shader pack's download", ee)
              })), (0, ne.j)()
            } catch (ye) {
              console.error("Failed to use the shader pack", ye), Re("shaderPack:unexpectedError")
            } finally {
              Je(!1)
            }
          }(ee)
        }
      }
    }

    function Ne(ee) {
      let {
        packUse: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), {
        webGpuUsable: ye,
        inUse: be,
        busy: Me,
        errorKey: Ke,
        use: Ue
      } = ie;
      return (0, we.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, we.jsxs)(Re.m, {
          disabled: !0 !== ye || be,
          loading: Me,
          onClick: Ue,
          children: [(0, we.jsx)(We.e, {
            name: be ? "check" : "download"
          }), " ", He(be ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === ye && (0, we.jsx)("div", {
          className: "ShaderPackUseNote",
          children: He((0, je.m)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Ke && (0, we.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: He(Ke)
        })]
      })
    }

    function Ge() {
      var ee;
      const {
        t: ie
      } = (0, Ee.v)(), He = (0, oe.useNavigatePreserveSearch)(), {
        packId: Me
      } = (0, be.B)(), {
        userContext: Ke,
        isUserContextUpdating: Ue
      } = (0, Xe.b)(), [ke, fe] = (0, ye.useState)(null), [Te, Be] = (0, ye.useState)(null), [ge, Oe] = (0, ye.useState)(0), de = (0, ye.useRef)(0);

      function We() {
        var ee;
        null !== (ee = (0, oe.getPreviousLocation)()) && void 0 !== ee && ee.startsWith(Ze.Y) ? He(-1) : He(Ze.Y)
      }(0, pe.c)(We), (0, xe.b)(), (0, ye.useEffect)((() => {
        if (Ue || void 0 === Me) return;
        const ee = ++de.current;
        Be(null), ze.b.getShaderPack(Ke, Me).then((ie => {
          de.current === ee && fe(ie)
        })).catch((ie => {
          de.current === ee && (console.error("Failed to get the shader pack", ie), fe(null), Be({
            error: ie
          }))
        }))
      }), [Me, Ke, Ue, ge]);
      const te = () => {
          Oe((ee => ee + 1))
        },
        De = (null === ke || void 0 === ke ? void 0 : ke.packId) === Me ? ke : null,
        Ae = (0, xe.l)(),
        Ye = he(null !== (ee = null === De || void 0 === De ? void 0 : De.live) && void 0 !== ee ? ee : null),
        Ve = null !== De && void 0 !== De && De.live ? (0, we.jsx)(re, {
          item: De.live,
          favourites: Ae,
          packUse: Ye
        }) : null;
      return (0, we.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== De && (0, we.jsx)(qe.e, {
          meta: (0, Fe.W)(De.name)
        }), (0, we.jsx)(Re.b, {
          onClick: We,
          children: ie("shaderPackListing:backToPacks")
        }), null === De && null === Te && (0, we.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, we.jsx)(Je.b, {})
        }), null !== Te && (0, we.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Ze.z)(Te.error, ie, "shaderPackListing:loadPackFailed"), (0, we.jsx)(Re.c, {
            onClick: te,
            children: ie("general:tryAgain")
          })]
        }), null !== De && null === Te && (0, we.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, we.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, we.jsx)("h1", {
              className: "FullyFancyText",
              children: De.name
            }), Ve]
          }), De.live && (0, we.jsx)(ve, {
            item: De.live
          }), De.live && (0, we.jsx)(Qe, {
            item: De.live,
            ownerPreview: De.ownerPreview,
            bloxdhubSlug: De.bloxdhubSlug,
            actions: Ve
          }), De.owner && (0, we.jsx)(Pe, {
            details: De,
            owner: De.owner,
            onChanged: te
          })]
        })]
      })
    }

    function re(ee) {
      let {
        item: ie,
        favourites: He,
        packUse: ye
      } = ee;
      const be = He.isFavourite(ie.packId);
      return (0, we.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Be.featureFlags.settings.canUseShaderPacks && (0, we.jsx)(Ne, {
          packUse: ye
        }), (0, we.jsx)(Re.r, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            He.toggle(ie.packId)
          },
          isLiked: !0 === be,
          isLoading: null === be
        })]
      })
    }

    function Qe(ee) {
      let {
        item: ie,
        ownerPreview: He,
        bloxdhubSlug: ye,
        actions: be
      } = ee;
      const {
        t: Ue
      } = (0, Ee.v)(), Fe = (0, Te.o)(), Je = null === ye ? null : (0, Me.h)(ye);
      return (0, we.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [ie.description && (0, we.jsx)("p", {
          className: "ShaderPackDescription",
          children: ie.description
        }), (0, we.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== He || null !== Je) && (0, we.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== He ? (0, we.jsxs)(we.Fragment, {
              children: [(0, we.jsx)(fe.h, {
                playerSocialPreview: He,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Je && (0, we.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Je,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, we.jsx)("img", {
                  src: ge,
                  alt: Me.d
                })
              })]
            }) : (0, we.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Je,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Me.d, (0, we.jsx)("img", {
                src: ge,
                alt: ""
              })]
            })
          }), Ze.C.filter((ee => ie.features.includes(ee))).map((ee => (0, we.jsx)(oe.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Ze.N)(ee),
            children: Ue(Ze.P[ee])
          }, ee)))]
        }), be, (0, we.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, we.jsxs)("div", {
            children: [(0, we.jsx)("dt", {
              children: Ue("shaderPackListing:downloads")
            }), (0, we.jsx)("dd", {
              children: (0, Ke.P)(ie.downloads)
            })]
          }), (0, we.jsx)(ei, {
            label: Ue("shaderPackListing:updated"),
            time: ie.listedUpdatedAt,
            now: Fe
          }), (0, we.jsx)(ei, {
            label: Ue("shaderPackListing:created"),
            time: ie.publishedAt,
            now: Fe
          }), null !== ie.gpuCost && (0, we.jsxs)("div", {
            children: [(0, we.jsx)("dt", {
              children: Ue("shaderPackListing:lag")
            }), (0, we.jsx)("dd", {
              children: Ue("shaderPackListing:lagPercent", {
                percent: String((0, Ze.V)(ie.gpuCost))
              })
            })]
          }), (0, we.jsxs)("div", {
            children: [(0, we.jsx)("dt", {
              children: Ue("shaderPackListing:size")
            }), (0, we.jsx)("dd", {
              children: Ue("shaderPackListing:sizeValue", {
                kilobytes: String((0, Ze.T)(ie.sourceBytes))
              })
            })]
          }), (0, we.jsxs)("div", {
            children: [(0, we.jsx)("dt", {
              children: Ue("shaderPackListing:files")
            }), (0, we.jsx)("dd", {
              children: ie.fileCount
            })]
          })]
        })]
      })
    }

    function ei(ee) {
      let {
        label: ie,
        time: He,
        now: ye
      } = ee;
      const {
        t: be,
        selectedLanguage: Me
      } = (0, Ee.v)(), Ke = new Date(He);
      let Fe = Ke.toLocaleDateString();
      if (ye - He <= 30 * Ue.h) {
        const ee = (0, Ee.l)(Me.code, "shaderPackListing:timeAgo");
        Fe = be("shaderPackListing:timeAgo", {
          time: (0, Ue.ib)(ee, He, ye)
        })
      }
      return (0, we.jsx)(ke.g, {
        tooltipInner: Ke.toLocaleString(),
        children: (0, we.jsxs)("div", {
          children: [(0, we.jsx)("dt", {
            children: ie
          }), (0, we.jsx)("dd", {
            children: Fe
          })]
        })
      })
    }
  },
  5537: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1228);

    function Ke(ee) {
      let {
        options: ie,
        value: He,
        onChange: ye,
        ariaLabel: Ke,
        className: Ue,
        reselectable: Fe = !1,
        keepsFocus: Je = !1,
        padTabs: oe
      } = ee;
      const Re = void 0 !== oe;
      return (0, Me.jsx)("div", {
        className: be()("SegmentedToggle", Ue),
        role: "group",
        "aria-label": Ke,
        "data-pad-tabs": oe,
        children: ie.map((ee => {
          const ie = ee.value === He;
          return (0, Me.jsx)("button", {
            type: "button",
            "aria-pressed": ie,
            "data-pad-tab": Re || void 0,
            "data-pad-selected": Re && ie ? "true" : void 0,
            "data-pad-default-focus": Re && ie || void 0,
            "aria-label": ee.ariaLabel,
            title: ee.ariaLabel,
            className: be()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ie
            }),
            onMouseDown: Je ? ee => {
              ee.preventDefault()
            } : void 0,
            onClick: () => {
              ie && !Fe || ye(ee.value)
            },
            children: ee.label
          }, ee.value)
        }))
      })
    }
  },
  5544: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => Ke
    });
    var ye = He(59);
    const be = new WeakMap,
      Me = ee => {
        var ie;
        const He = ee.closest("[data-pad-slider]");
        return He && null !== (ie = be.get(He)) && void 0 !== ie ? ie : null
      },
      Ke = (ee, ie) => {
        const He = (0, ye.useRef)(ie);
        He.current = ie, (0, ye.useEffect)((() => {
          if (ee.current) return ((ee, ie) => (be.set(ee, ie), () => {
            be.get(ee) === ie && be.delete(ee)
          }))(ee.current, {
            adjust: ee => {
              He.current.adjust(ee)
            },
            setFraction: ee => {
              He.current.setFraction(ee)
            },
            endDrag: () => {
              He.current.endDrag()
            }
          })
        }), [ee])
      }
  },
  7296: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => Me
    });
    var ye = He(35);
    const be = "shaderPack";
    async function Me() {
      var ee;
      let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);