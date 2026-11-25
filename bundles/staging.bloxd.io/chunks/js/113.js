export const id = 113;
export const ids = [113];
export const modules = {
  5155: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ou,
      f: () => Mu,
      h: () => Yu,
      l: () => gu
    });
    var su = ju(58),
      Uu = ju(5158),
      Zu = ju(4528),
      Xu = ju(1419),
      lu = ju(5179),
      qu = ju(1105),
      fu = ju.n(qu),
      Cu = ju(1405),
      bu = ju(1779),
      cu = ju(5182),
      Nu = ju(1154);

    function Ou(uu) {
      let {
        label: Eu,
        onClick: ju,
        checked: su,
        circleInfoText: Uu,
        className: lu,
        disabled: qu,
        note: Cu
      } = uu;
      return (0, Nu.jsxs)("div", {
        "aria-disabled": qu || void 0,
        "data-pad-focusable": !0,
        className: fu()("SettingBox CheckboxContainer", {
          [lu]: lu,
          SettingBoxDisabled: qu
        }),
        onClick: () => {
          qu || ju(!su)
        },
        children: [(0, Nu.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nu.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nu.jsx)(Zu.d, {
              className: "SettingsCheckbox",
              checked: su,
              disabled: qu,
              onChange: () => {}
            })
          }), (0, Nu.jsxs)("div", {
            className: "CheckboxText",
            children: [Eu, Uu && (0, Nu.jsx)("span", {
              onClick: uu => uu.stopPropagation(),
              children: (0, Nu.jsx)(Xu.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Uu
              })
            })]
          })]
        }), Cu && (0, Nu.jsx)("div", {
          className: "SettingNote",
          children: Cu
        })]
      })
    }

    function Yu(uu) {
      let {
        name: Eu,
        onChange: ju,
        min: Uu,
        max: Zu,
        step: lu,
        initValue: qu,
        circleInfoText: Cu,
        format: bu,
        className: cu,
        padStep: Ou,
        disabled: Yu = !1,
        selectableMax: hu,
        cappedNote: gu,
        onChangeComplete: Mu
      } = uu;
      const [eu, Gu] = (0, su.useState)(qu), pu = (0, su.useRef)(qu);
      (0, su.useEffect)((() => {
        pu.current = qu, Gu(qu)
      }), [qu]);
      const wu = void 0 !== hu && hu < Zu,
        Ju = wu ? {
          "--slider-selectable": (hu - Uu) / (Zu - Uu)
        } : void 0;
      return (0, Nu.jsxs)("div", {
        className: fu()("SettingBox SettingsSliderDiv", {
          [cu]: cu,
          SettingBoxDisabled: Yu,
          SliderCapped: wu
        }),
        style: Ju,
        children: [(0, Nu.jsxs)("div", {
          className: "SliderText",
          children: [`${Eu}: ${bu?bu(eu):eu}`, Cu && (0, Nu.jsx)(Xu.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Cu
          })]
        }), (0, Nu.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nu.jsx)(Du, {
            value: eu,
            min: Uu,
            max: Zu,
            step: lu,
            onChange: uu => {
              if (wu && uu >= hu && eu === hu) return;
              const Eu = wu ? Math.min(uu, hu) : uu;
              pu.current = Eu, Gu(Eu), ju(Eu)
            },
            onChangeComplete: Mu && (() => {
              Mu(pu.current)
            }),
            format: bu,
            padStep: Ou,
            disabled: Yu
          })
        }), wu && gu && (0, Nu.jsx)("div", {
          className: "SettingNote",
          children: gu
        })]
      })
    }
    const hu = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Du(uu) {
      var Eu;
      let {
        value: ju,
        min: Zu,
        max: Xu,
        step: lu,
        onChange: qu,
        orientation: fu,
        reverse: Cu,
        setIsChanging: bu,
        tooltip: Ou,
        labels: Yu,
        handleLabel: Du,
        format: gu,
        onChangeStart: Mu,
        onChangeComplete: eu,
        padStep: Gu,
        disabled: pu = !1
      } = uu;
      const wu = (0, su.useRef)(null),
        Ju = (0, su.useRef)(null);
      (0, su.useLayoutEffect)((() => {
        var uu, Eu, ju;
        const su = null !== (uu = null === (Eu = wu.current) || void 0 === Eu ? void 0 : Eu.querySelector(".rangeslider")) && void 0 !== uu ? uu : null;
        null === su || void 0 === su || su.setAttribute("data-pad-slider", ""), null === su || void 0 === su || su.setAttribute("data-pad-focusable", ""), null === su || void 0 === su || null === (ju = su.querySelector(".rangeslider__handle")) || void 0 === ju || ju.setAttribute("data-pad-slider-handle", ""), Ju.current = su
      }), []), (0, su.useLayoutEffect)((() => {
        var uu, Eu;
        pu ? null === (uu = Ju.current) || void 0 === uu || uu.setAttribute("aria-disabled", "true") : null === (Eu = Ju.current) || void 0 === Eu || Eu.removeAttribute("aria-disabled")
      }), [pu]);
      const du = (null !== (Eu = String(lu).split(".")[1]) && void 0 !== Eu ? Eu : "").length,
        au = uu => {
          const Eu = Number((Math.round((uu - Zu) / lu) * lu + Zu).toFixed(du));
          return Math.min(Xu, Math.max(Zu, Eu))
        },
        Pu = (0, su.useRef)(eu);
      Pu.current = eu, (0, su.useEffect)((() => {
        const uu = wu.current;
        if (!uu) return;
        const Eu = uu => {
          var Eu;
          hu.has(uu.key) && (null === (Eu = Pu.current) || void 0 === Eu || Eu.call(Pu))
        };
        return uu.addEventListener("keyup", Eu), () => {
          uu.removeEventListener("keyup", Eu)
        }
      }), []);
      const ou = (0, su.useRef)(!1);
      return (0, cu.e)(Ju, {
        adjust: uu => {
          if (pu) return;
          const Eu = null !== Gu && void 0 !== Gu ? Gu : Math.max(lu, Math.round((Xu - Zu) / 20 / lu) * lu),
            su = au(ju + uu * Eu * (Cu ? -1 : 1));
          su !== ju && (null === Mu || void 0 === Mu || Mu(), qu(su), null === eu || void 0 === eu || eu())
        },
        setFraction: uu => {
          if (pu) return;
          const Eu = au(Zu + (Cu ? 1 - uu : uu) * (Xu - Zu));
          Eu !== ju && (ou.current || (ou.current = !0, null === Mu || void 0 === Mu || Mu()), qu(Eu))
        },
        endDrag: () => {
          ou.current && (ou.current = !1, null === eu || void 0 === eu || eu())
        }
      }), (0, Nu.jsx)("div", {
        ref: wu,
        style: {
          display: "contents"
        },
        children: (0, Nu.jsx)(Uu.c, {
          value: ju,
          min: Zu,
          max: Xu,
          step: lu,
          onChange: qu,
          orientation: fu,
          reverse: Cu,
          tooltip: Ou,
          labels: Yu,
          handleLabel: Du,
          format: gu,
          onChangeStart: () => {
            null === Mu || void 0 === Mu || Mu(), null === bu || void 0 === bu || bu(!0)
          },
          onChangeComplete: () => {
            null === bu || void 0 === bu || bu(!1), null === eu || void 0 === eu || eu()
          }
        })
      })
    }
    async function gu() {
      const uu = Cu.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await uu.getResult() && (0, bu.reloadBloxd)()
    }

    function Mu(uu) {
      let {
        label: Eu,
        options: ju,
        value: su,
        onChange: Uu,
        circleInfoText: Zu
      } = uu;
      return (0, Nu.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nu.jsxs)("div", {
          className: "SliderText",
          children: [Eu, Zu && (0, Nu.jsx)(Xu.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Zu
          })]
        }), (0, Nu.jsx)(lu.c, {
          ariaLabel: Eu,
          options: ju,
          value: su,
          onChange: Uu
        })]
      })
    }
  },
  6863: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => yu
    });
    var su = ju(58),
      Uu = ju(1580),
      Zu = ju(6764),
      Xu = ju(1278),
      lu = ju(349),
      qu = ju(1600),
      fu = ju(1393),
      Cu = ju(1570),
      bu = ju(1506),
      cu = ju(1419),
      Nu = ju(1667),
      Ou = ju(2716),
      Yu = ju(2861),
      hu = ju(4737),
      Du = ju(1178),
      gu = ju(1559),
      Mu = ju(91),
      eu = ju(1244);
    const Gu = ju.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var pu = ju(1105),
      wu = ju.n(pu),
      Ju = ju(1116),
      du = ju(1405),
      au = ju(6761),
      Pu = ju(1154);
    const ou = (0, su.lazy)((() => Promise.all([ju.e(109), ju.e(78), ju.e(136), ju.e(135), ju.e(114), ju.e(402)]).then((() => ju(6796))).then((uu => ({
      default: uu.ShaderPackPublishForm
    })))));

    function ku(uu) {
      let {
        details: Eu,
        owner: ju,
        onChanged: Uu
      } = uu;
      const {
        t: Xu
      } = (0, eu.A)(), lu = (0, Cu.useNavigatePreserveSearch)(), {
        userContext: qu
      } = (0, Du.c)(), [cu, Nu] = (0, su.useState)(!1), [Ou, Yu] = (0, su.useState)(null), [hu, Mu] = (0, su.useState)(!1), {
        packId: Gu,
        name: pu,
        description: ku,
        live: mu
      } = Eu;
      async function vu(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu;
        Nu(!0), Yu(null);
        try {
          await uu(), Eu()
        } catch (ju) {
          console.error("Failed to change a shader pack", ju), Yu((0, au.x)(ju, Xu, "shaderPackListing:ownerActionFailed"))
        } finally {
          Nu(!1)
        }
      }
      const Ku = (0, au.s)(qu);
      return (0, Pu.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Pu.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Xu("general:manage")
        }), (0, au.T)(ju, !(null === mu || void 0 === mu || !mu.renderId), Date.now(), Xu).map((uu => (0, Pu.jsxs)("div", {
          className: wu()("ShaderPackOwnerNotice", {
            Warning: "warning" === uu.tone
          }),
          children: [(0, Pu.jsx)(Ju.e, {
            name: "warning" === uu.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Pu.jsxs)("div", {
            children: [uu.text, uu.detail && (0, Pu.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: uu.detail
            })]
          })]
        }, uu.text))), Eu.ban && (0, Pu.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Pu.jsx)(Ju.e, {
            name: "ban"
          }), (0, Pu.jsxs)("div", {
            children: ["Banned by ", Eu.ban.byName, " on ", new Date(Eu.ban.at).toLocaleString()]
          })]
        }), Ou && (0, Pu.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Ou
        }), (0, Pu.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Pu.jsxs)(bu.$, {
            disabled: cu,
            onClick: () => {
              !async function() {
                const uu = await du.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: pu,
                  maxLength: Zu.F,
                  submitText: "general:save",
                  validate: uu => uu.trim().length < Zu.I ? Xu("shaderPackListing:nameTooShort", {
                    min: String(Zu.I)
                  }) : null
                }).getResult();
                "notificationTornDown" !== uu && "submit" === (null === uu || void 0 === uu ? void 0 : uu.type) && uu.value.trim() !== pu && await vu((() => gu.b.updateShaderPack(qu, {
                  packId: Gu,
                  name: uu.value.trim()
                })))
              }()
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: "pen"
            }), " ", Xu("shaderPackListing:rename")]
          }), (0, Pu.jsxs)(bu.$, {
            disabled: cu,
            onClick: () => {
              !async function() {
                const uu = await du.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: ku,
                  maxLength: Zu.x,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== uu && "submit" === (null === uu || void 0 === uu ? void 0 : uu.type) && uu.value.trim() !== ku && await vu((() => gu.b.updateShaderPack(qu, {
                  packId: Gu,
                  description: uu.value.trim()
                })))
              }()
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: "file-lines"
            }), " ", Xu("shaderPackListing:editDescription")]
          }), (0, Pu.jsxs)(bu.$, {
            disabled: cu || ju.isBanned && !ju.listed,
            onClick: () => {
              vu((() => gu.b.updateShaderPack(qu, {
                packId: Gu,
                listed: !ju.listed
              })))
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: ju.listed ? "eye-slash" : "eye"
            }), " ", Xu(ju.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !ju.isBanned && (0, Pu.jsxs)(bu.f, {
            disabled: cu,
            onClick: () => {
              Mu(!hu)
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: "upload"
            }), " ", Xu("shaderPackListing:uploadVersion")]
          }), (0, Pu.jsxs)(bu.U, {
            disabled: cu || ju.isBanned,
            onClick: () => {
              !async function() {
                !0 === await du.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await vu((() => gu.b.deleteShaderPack(qu, Gu)), (() => {
                  lu(`${au.R}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: "trash-can"
            }), " ", Xu("general:delete")]
          }), Ku && (0, Pu.jsxs)(bu.U, {
            disabled: cu,
            onClick: () => {
              vu((() => gu.b.setShaderPackBanned(qu, Gu, !ju.isBanned)))
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: ju.isBanned ? "circle-check" : "ban"
            }), " ", ju.isBanned ? "Unban" : "Ban"]
          })]
        }), hu && (0, Pu.jsx)(su.Suspense, {
          fallback: (0, Pu.jsx)(fu.b, {}),
          children: (0, Pu.jsx)(ou, {
            existing: {
              packId: Gu,
              name: pu,
              description: ku
            },
            onPublished: () => {
              Mu(!1), Uu()
            }
          })
        })]
      })
    }
    var mu = ju(65),
      vu = ju(1955),
      Ku = ju(1330),
      Vu = ju(5182),
      ru = ju(1255),
      Qu = ju(6771),
      iu = ju(6768),
      Wu = ju(6779);

    function Su(uu) {
      let {
        item: Eu
      } = uu;
      const {
        t: ju
      } = (0, eu.A)(), [Uu] = (0, Qu.f)(), [Xu, lu] = (0, su.useState)(Uu), [qu, fu] = (0, su.useState)(!1), [Cu, bu] = (0, su.useState)(!1), {
        s3Url: cu
      } = ru.clientSideServerUrls, {
        width: Nu,
        height: Ou
      } = Zu.z.large, Yu = (0, Zu.C)(cu, Eu, Xu, "large"), {
        renderVersion: hu
      } = Eu;
      return (0, Pu.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Pu.jsx)(Wu.b, {
          selected: Xu,
          onSelect: uu => {
            lu(uu), fu(!1)
          },
          imageUrl: uu => (0, Zu.C)(cu, Eu, uu, "thumb")
        }), (0, Pu.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!qu && (0, Pu.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === hu ? void 0 : ju("shaderPackListing:fullSize"),
            disabled: null === hu,
            onClick: () => {
              bu(!0)
            },
            children: [(0, Pu.jsx)("img", {
              src: Yu,
              width: Nu,
              height: Ou,
              alt: ju(au.ab[Xu]),
              draggable: !1
            }), (0, Pu.jsx)(iu.c, {
              item: Eu
            })]
          }), !qu && null !== hu && (0, Pu.jsxs)(Lu, {
            side: "Right",
            onClick: () => {
              fu(!0)
            },
            children: [(0, Pu.jsx)(Ju.e, {
              name: "arrows-left-right"
            }), " ", ju("shaderPackListing:compare")]
          }), qu && null !== hu && (0, Pu.jsx)(Bu, {
            item: Eu,
            packUrl: Yu,
            baselineUrl: (0, Zu.t)(cu, hu, Xu, "large")
          }), qu && (0, Pu.jsx)(Lu, {
            side: "Left",
            onClick: () => {
              fu(!1)
            },
            children: ju("shaderPackListing:withPack")
          }), qu && (0, Pu.jsx)(Lu, {
            side: "Right",
            onClick: () => {
              fu(!1)
            },
            children: ju("shaderPackListing:withoutPack")
          })]
        }), Cu && (0, Pu.jsx)(Iu, {
          fullUrl: (0, Zu.C)(cu, Eu, Xu, "full"),
          largeUrl: Yu,
          alt: ju(au.ab[Xu]),
          onClose: () => {
            bu(!1)
          }
        })]
      })
    }

    function Iu(uu) {
      let {
        fullUrl: Eu,
        largeUrl: ju,
        alt: Uu,
        onClose: Zu
      } = uu;
      const Xu = (0, su.useRef)(null);
      return (0, Ku.w)("popup", Xu, Zu), (0, su.useEffect)((() => {
        function uu(uu) {
          "Escape" === uu.key && (uu.stopPropagation(), Zu())
        }
        return window.addEventListener("keydown", uu, !0), () => {
          window.removeEventListener("keydown", uu, !0)
        }
      }), [Zu]), (0, mu.createPortal)((0, Pu.jsxs)("div", {
        ref: Xu,
        className: "ShaderPackFullSize",
        onClick: Zu,
        children: [(0, Pu.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Eu,
          alt: Uu,
          draggable: !1,
          style: {
            backgroundImage: `url(${ju})`
          }
        }), (0, Pu.jsx)(bu.l, {
          className: "ShaderPackFullSizeClose",
          onClick: Zu
        })]
      }), document.body)
    }
    const Fu = 5;

    function Bu(uu) {
      let {
        item: Eu,
        packUrl: ju,
        baselineUrl: Uu
      } = uu;
      const {
        t: Xu
      } = (0, eu.A)(), [lu, qu] = (0, su.useState)(50), fu = (0, su.useRef)(!1), Cu = (0, su.useRef)(null), {
        width: bu,
        height: cu
      } = Zu.z.large;

      function Nu(uu) {
        qu((Eu => (0, vu.c)(Eu + uu, 0, 100)))
      }

      function Ou(uu) {
        const Eu = uu.currentTarget.getBoundingClientRect();
        qu((0, vu.c)((uu.clientX - Eu.left) / Eu.width * 100, 0, 100))
      }
      return (0, Vu.e)(Cu, {
        adjust: uu => {
          Nu(uu * Fu)
        },
        setFraction: uu => {
          qu(100 * uu)
        },
        endDrag: () => {}
      }), (0, Pu.jsxs)("div", {
        ref: Cu,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Xu("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(lu),
        style: {
          "--split": `${lu}%`
        },
        onKeyDown: function(uu) {
          const Eu = "ArrowLeft" === uu.key ? -Fu : "ArrowRight" === uu.key ? Fu : 0;
          0 !== Eu && (uu.preventDefault(), Nu(Eu))
        },
        onPointerDown: uu => {
          fu.current = !0, uu.currentTarget.setPointerCapture(uu.pointerId), Ou(uu)
        },
        onPointerMove: uu => {
          fu.current && Ou(uu)
        },
        onPointerUp: () => {
          fu.current = !1
        },
        onPointerCancel: () => {
          fu.current = !1
        },
        children: [(0, Pu.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Uu,
          width: bu,
          height: cu,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${ju})`
          }
        }), (0, Pu.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Pu.jsx)("img", {
          className: "ShaderPackComparePack",
          src: ju,
          width: bu,
          height: cu,
          alt: "",
          draggable: !1
        }), (0, Pu.jsx)(iu.c, {
          item: Eu,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Lu(uu) {
      let {
        side: Eu,
        onClick: ju,
        children: su
      } = uu;
      return (0, Pu.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Eu}`,
        onClick: ju,
        children: (0, Pu.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: su
        })
      })
    }
    var tu = ju(5155),
      xu = ju(326),
      Tu = ju(6854);
    const Hu = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Au(uu) {
      const {
        userContext: Eu
      } = (0, Du.c)(), [Uu, Zu] = (0, su.useState)(null), [Xu, lu] = (0, su.useState)(!1), [qu, fu] = (0, su.useState)(!1), [Cu, bu] = (0, su.useState)(null), cu = null === uu || void 0 === uu ? void 0 : uu.packId, Nu = null === uu || void 0 === uu ? void 0 : uu.sourceHash;
      return (0, su.useEffect)((() => {
        if (lu(!1), bu(null), void 0 === cu) return;
        let uu = !1;
        return Promise.all([(0, Mu.hasUsableWebGpuAdapter)(), (0, Tu.e)()]).then((Eu => {
          let [ju, su] = Eu;
          var Uu;
          uu || (Zu(ju), lu((null === su || void 0 === su || null === (Uu = su.listing) || void 0 === Uu ? void 0 : Uu.packId) === cu && su.listing.sourceHash === Nu))
        })).catch((Eu => {
          console.error("Failed to check whether this shader pack can be used", Eu), uu || Zu(!1)
        })), () => {
          uu = !0
        }
      }), [cu, Nu]), {
        webGpuUsable: Uu,
        inUse: Xu,
        busy: qu,
        errorKey: Cu,
        use: () => {
          null !== uu && async function(uu) {
            fu(!0), bu(null);
            try {
              const {
                installListedShaderPack: su
              } = await Promise.all([ju.e(78), ju.e(136), ju.e(115)]).then((() => ju(40753))), Uu = await su({
                packId: uu.packId,
                sourceHash: uu.sourceHash,
                name: uu.name,
                ownerName: uu.ownerName,
                description: uu.description
              });
              if ("failed" === Uu.kind) return void bu(Hu[Uu.reason]);
              lu(!0), gu.b.recordShaderPackDownload(Eu, uu.packId).catch((uu => {
                console.error("Failed to count a shader pack's download", uu)
              })), (0, tu.l)()
            } catch (su) {
              console.error("Failed to use the shader pack", su), bu("shaderPack:unexpectedError")
            } finally {
              fu(!1)
            }
          }(uu)
        }
      }
    }

    function nu(uu) {
      let {
        packUse: Eu
      } = uu;
      const {
        t: ju
      } = (0, eu.A)(), {
        webGpuUsable: su,
        inUse: Uu,
        busy: Zu,
        errorKey: Xu,
        use: lu
      } = Eu;
      return (0, Pu.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Pu.jsxs)(bu.p, {
          disabled: !0 !== su || Uu,
          loading: Zu,
          onClick: lu,
          children: [(0, Pu.jsx)(Ju.e, {
            name: Uu ? "check" : "download"
          }), " ", ju(Uu ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === su && (0, Pu.jsx)("div", {
          className: "ShaderPackUseNote",
          children: ju((0, xu.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Xu && (0, Pu.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: ju(Xu)
        })]
      })
    }

    function yu() {
      var uu;
      const {
        t: Eu
      } = (0, eu.A)(), ju = (0, Cu.useNavigatePreserveSearch)(), {
        packId: Zu
      } = (0, Uu.B)(), {
        userContext: Xu,
        isUserContextUpdating: lu
      } = (0, Du.c)(), [cu, Ou] = (0, su.useState)(null), [Yu, Mu] = (0, su.useState)(null), [Gu, pu] = (0, su.useState)(0), wu = (0, su.useRef)(0);

      function Ju() {
        var uu;
        null !== (uu = (0, Cu.getPreviousLocation)()) && void 0 !== uu && uu.startsWith(au.R) ? ju(-1) : ju(au.R)
      }(0, hu.b)(Ju), (0, Qu.b)(), (0, su.useEffect)((() => {
        if (lu || void 0 === Zu) return;
        const uu = ++wu.current;
        Mu(null), gu.b.getShaderPack(Xu, Zu).then((Eu => {
          wu.current === uu && Ou(Eu)
        })).catch((Eu => {
          wu.current === uu && (console.error("Failed to get the shader pack", Eu), Ou(null), Mu({
            error: Eu
          }))
        }))
      }), [Zu, Xu, lu, Gu]);
      const du = () => {
          pu((uu => uu + 1))
        },
        ou = (null === cu || void 0 === cu ? void 0 : cu.packId) === Zu ? cu : null,
        mu = (0, Qu.g)(),
        vu = Au(null !== (uu = null === ou || void 0 === ou ? void 0 : ou.live) && void 0 !== uu ? uu : null),
        Ku = null !== ou && void 0 !== ou && ou.live ? (0, Pu.jsx)(zu, {
          item: ou.live,
          favourites: mu,
          packUse: vu
        }) : null;
      return (0, Pu.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== ou && (0, Pu.jsx)(Nu.d, {
          meta: (0, qu.ab)(ou.name)
        }), (0, Pu.jsx)(bu.d, {
          onClick: Ju,
          children: Eu("shaderPackListing:backToPacks")
        }), null === ou && null === Yu && (0, Pu.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Pu.jsx)(fu.b, {})
        }), null !== Yu && (0, Pu.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, au.x)(Yu.error, Eu, "shaderPackListing:loadPackFailed"), (0, Pu.jsx)(bu.f, {
            onClick: du,
            children: Eu("general:tryAgain")
          })]
        }), null !== ou && null === Yu && (0, Pu.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Pu.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Pu.jsx)("h1", {
              className: "FullyFancyText",
              children: ou.name
            }), Ku]
          }), ou.live && (0, Pu.jsx)(Su, {
            item: ou.live
          }), ou.live && (0, Pu.jsx)(Ru, {
            item: ou.live,
            ownerPreview: ou.ownerPreview,
            bloxdhubSlug: ou.bloxdhubSlug,
            actions: Ku
          }), ou.owner && (0, Pu.jsx)(ku, {
            details: ou,
            owner: ou.owner,
            onChanged: du
          })]
        })]
      })
    }

    function zu(uu) {
      let {
        item: Eu,
        favourites: ju,
        packUse: su
      } = uu;
      const Uu = ju.isFavourite(Eu.packId);
      return (0, Pu.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Mu.featureFlags.settings.canUseShaderPacks && (0, Pu.jsx)(nu, {
          packUse: su
        }), (0, Pu.jsx)(bu.A, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            ju.toggle(Eu.packId)
          },
          isLiked: !0 === Uu,
          isLoading: null === Uu
        })]
      })
    }

    function Ru(uu) {
      let {
        item: Eu,
        ownerPreview: ju,
        bloxdhubSlug: su,
        actions: Uu
      } = uu;
      const {
        t: lu
      } = (0, eu.A)(), qu = (0, Yu.q)(), fu = null === su ? null : (0, Zu.f)(su);
      return (0, Pu.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Eu.description && (0, Pu.jsx)("p", {
          className: "ShaderPackDescription",
          children: Eu.description
        }), (0, Pu.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== ju || null !== fu) && (0, Pu.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== ju ? (0, Pu.jsxs)(Pu.Fragment, {
              children: [(0, Pu.jsx)(Ou.f, {
                playerSocialPreview: ju,
                showLocation: !1,
                linkToProfile: !0
              }), null !== fu && (0, Pu.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: fu,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Pu.jsx)("img", {
                  src: Gu,
                  alt: Zu.c
                })
              })]
            }) : (0, Pu.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: fu,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Zu.c, (0, Pu.jsx)("img", {
                src: Gu,
                alt: ""
              })]
            })
          }), au.y.filter((uu => Eu.features.includes(uu))).map((uu => (0, Pu.jsx)(Cu.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, au.H)(uu),
            children: lu(au.I[uu])
          }, uu)))]
        }), Uu, (0, Pu.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Pu.jsxs)("div", {
            children: [(0, Pu.jsx)("dt", {
              children: lu("shaderPackListing:downloads")
            }), (0, Pu.jsx)("dd", {
              children: (0, Xu.S)(Eu.downloads)
            })]
          }), (0, Pu.jsx)(uE, {
            label: lu("shaderPackListing:updated"),
            time: Eu.listedUpdatedAt,
            now: qu
          }), (0, Pu.jsx)(uE, {
            label: lu("shaderPackListing:created"),
            time: Eu.publishedAt,
            now: qu
          }), null !== Eu.gpuCost && (0, Pu.jsxs)("div", {
            children: [(0, Pu.jsx)("dt", {
              children: lu("shaderPackListing:lag")
            }), (0, Pu.jsx)("dd", {
              children: lu("shaderPackListing:lagPercent", {
                percent: String((0, au.N)(Eu.gpuCost))
              })
            })]
          }), (0, Pu.jsxs)("div", {
            children: [(0, Pu.jsx)("dt", {
              children: lu("shaderPackListing:size")
            }), (0, Pu.jsx)("dd", {
              children: lu("shaderPackListing:sizeValue", {
                kilobytes: String((0, au.M)(Eu.sourceBytes))
              })
            })]
          }), (0, Pu.jsxs)("div", {
            children: [(0, Pu.jsx)("dt", {
              children: lu("shaderPackListing:files")
            }), (0, Pu.jsx)("dd", {
              children: Eu.fileCount
            })]
          })]
        })]
      })
    }

    function uE(uu) {
      let {
        label: Eu,
        time: ju,
        now: su
      } = uu;
      const {
        t: Uu,
        selectedLanguage: Zu
      } = (0, eu.A)(), Xu = new Date(ju);
      let qu = Xu.toLocaleDateString();
      if (su - ju <= 30 * lu.h) {
        const uu = (0, eu.n)(Zu.code, "shaderPackListing:timeAgo");
        qu = Uu("shaderPackListing:timeAgo", {
          time: (0, lu._)(uu, ju, su)
        })
      }
      return (0, Pu.jsx)(cu.e, {
        tooltipInner: Xu.toLocaleString(),
        children: (0, Pu.jsxs)("div", {
          children: [(0, Pu.jsx)("dt", {
            children: Eu
          }), (0, Pu.jsx)("dd", {
            children: qu
          })]
        })
      })
    }
  },
  5179: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1154);

    function Xu(uu) {
      let {
        options: Eu,
        value: ju,
        onChange: su,
        ariaLabel: Xu,
        className: lu,
        reselectable: qu = !1,
        keepsFocus: fu = !1,
        padTabs: Cu
      } = uu;
      const bu = void 0 !== Cu;
      return (0, Zu.jsx)("div", {
        className: Uu()("SegmentedToggle", lu),
        role: "group",
        "aria-label": Xu,
        "data-pad-tabs": Cu,
        children: Eu.map((uu => {
          const Eu = uu.value === ju;
          return (0, Zu.jsx)("button", {
            type: "button",
            "aria-pressed": Eu,
            "data-pad-tab": bu || void 0,
            "data-pad-selected": bu && Eu ? "true" : void 0,
            "data-pad-default-focus": bu && Eu || void 0,
            "aria-label": uu.ariaLabel,
            title: uu.ariaLabel,
            className: Uu()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eu
            }),
            onMouseDown: fu ? uu => {
              uu.preventDefault()
            } : void 0,
            onClick: () => {
              Eu && !qu || su(uu.value)
            },
            children: uu.label
          }, uu.value)
        }))
      })
    }
  },
  5182: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      e: () => Xu
    });
    var su = ju(58);
    const Uu = new WeakMap,
      Zu = uu => {
        var Eu;
        const ju = uu.closest("[data-pad-slider]");
        return ju && null !== (Eu = Uu.get(ju)) && void 0 !== Eu ? Eu : null
      },
      Xu = (uu, Eu) => {
        const ju = (0, su.useRef)(Eu);
        ju.current = Eu, (0, su.useEffect)((() => {
          if (uu.current) return ((uu, Eu) => (Uu.set(uu, Eu), () => {
            Uu.get(uu) === Eu && Uu.delete(uu)
          }))(uu.current, {
            adjust: uu => {
              ju.current.adjust(uu)
            },
            setFraction: uu => {
              ju.current.setFraction(uu)
            },
            endDrag: () => {
              ju.current.endDrag()
            }
          })
        }), [uu])
      }
  },
  6854: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      e: () => Zu
    });
    var su = ju(31);
    const Uu = "shaderPack";
    async function Zu() {
      var uu;
      let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await su.h.getItem(Uu, Eu)) && void 0 !== uu ? uu : null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);