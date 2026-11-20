export const id = 109;
export const ids = [109];
export const modules = {
  4782: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Su,
      f: () => Hu,
      g: () => pu,
      i: () => ju
    });
    var Eu = yu(64),
      Ku = yu(4785),
      Qu = yu(4139),
      mu = yu(1325),
      Ju = yu(4811),
      Nu = yu(1035),
      Xu = yu.n(Nu),
      Vu = yu(1311),
      ru = yu(1661),
      Bu = yu(4818),
      xu = yu(1079);

    function Su(uu) {
      let {
        label: Ru,
        onClick: yu,
        checked: Eu,
        circleInfoText: Ku,
        className: Ju,
        disabled: Nu,
        note: Vu
      } = uu;
      return (0, xu.jsxs)("div", {
        "aria-disabled": Nu || void 0,
        "data-pad-focusable": !0,
        className: Xu()("SettingBox CheckboxContainer", {
          [Ju]: Ju,
          SettingBoxDisabled: Nu
        }),
        onClick: () => {
          Nu || yu(!Eu)
        },
        children: [(0, xu.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, xu.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, xu.jsx)(Qu.b, {
              className: "SettingsCheckbox",
              checked: Eu,
              disabled: Nu,
              onChange: () => {}
            })
          }), (0, xu.jsxs)("div", {
            className: "CheckboxText",
            children: [Ru, Ku && (0, xu.jsx)("span", {
              onClick: uu => uu.stopPropagation(),
              children: (0, xu.jsx)(mu.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ku
              })
            })]
          })]
        }), Vu && (0, xu.jsx)("div", {
          className: "SettingNote",
          children: Vu
        })]
      })
    }

    function pu(uu) {
      let {
        name: Ru,
        onChange: yu,
        min: Ku,
        max: Qu,
        step: Ju,
        initValue: Nu,
        circleInfoText: Vu,
        format: ru,
        className: Bu,
        padStep: Su,
        disabled: pu = !1,
        selectableMax: Tu,
        cappedNote: ju,
        onChangeComplete: Hu
      } = uu;
      const [du, bu] = (0, Eu.useState)(Nu), Cu = (0, Eu.useRef)(Nu);
      (0, Eu.useEffect)((() => {
        Cu.current = Nu, bu(Nu)
      }), [Nu]);
      const ku = void 0 !== Tu && Tu < Qu,
        eu = ku ? {
          "--slider-selectable": (Tu - Ku) / (Qu - Ku)
        } : void 0;
      return (0, xu.jsxs)("div", {
        className: Xu()("SettingBox SettingsSliderDiv", {
          [Bu]: Bu,
          SettingBoxDisabled: pu,
          SliderCapped: ku
        }),
        style: eu,
        children: [(0, xu.jsxs)("div", {
          className: "SliderText",
          children: [`${Ru}: ${ru?ru(du):du}`, Vu && (0, xu.jsx)(mu.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Vu
          })]
        }), (0, xu.jsx)("div", {
          className: "SliderDiv",
          children: (0, xu.jsx)(Wu, {
            value: du,
            min: Ku,
            max: Qu,
            step: Ju,
            onChange: uu => {
              if (ku && uu >= Tu && du === Tu) return;
              const Ru = ku ? Math.min(uu, Tu) : uu;
              Cu.current = Ru, bu(Ru), yu(Ru)
            },
            onChangeComplete: Hu && (() => {
              Hu(Cu.current)
            }),
            format: ru,
            padStep: Su,
            disabled: pu
          })
        }), ku && ju && (0, xu.jsx)("div", {
          className: "SettingNote",
          children: ju
        })]
      })
    }
    const Tu = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Wu(uu) {
      var Ru;
      let {
        value: yu,
        min: Qu,
        max: mu,
        step: Ju,
        onChange: Nu,
        orientation: Xu,
        reverse: Vu,
        setIsChanging: ru,
        tooltip: Su,
        labels: pu,
        handleLabel: Wu,
        format: ju,
        onChangeStart: Hu,
        onChangeComplete: du,
        padStep: bu,
        disabled: Cu = !1
      } = uu;
      const ku = (0, Eu.useRef)(null),
        eu = (0, Eu.useRef)(null);
      (0, Eu.useLayoutEffect)((() => {
        var uu, Ru, yu;
        const Eu = null !== (uu = null === (Ru = ku.current) || void 0 === Ru ? void 0 : Ru.querySelector(".rangeslider")) && void 0 !== uu ? uu : null;
        null === Eu || void 0 === Eu || Eu.setAttribute("data-pad-slider", ""), null === Eu || void 0 === Eu || Eu.setAttribute("data-pad-focusable", ""), null === Eu || void 0 === Eu || null === (yu = Eu.querySelector(".rangeslider__handle")) || void 0 === yu || yu.setAttribute("data-pad-slider-handle", ""), eu.current = Eu
      }), []), (0, Eu.useLayoutEffect)((() => {
        var uu, Ru;
        Cu ? null === (uu = eu.current) || void 0 === uu || uu.setAttribute("aria-disabled", "true") : null === (Ru = eu.current) || void 0 === Ru || Ru.removeAttribute("aria-disabled")
      }), [Cu]);
      const Au = (null !== (Ru = String(Ju).split(".")[1]) && void 0 !== Ru ? Ru : "").length,
        Du = uu => {
          const Ru = Number((Math.round((uu - Qu) / Ju) * Ju + Qu).toFixed(Au));
          return Math.min(mu, Math.max(Qu, Ru))
        },
        Mu = (0, Eu.useRef)(du);
      Mu.current = du, (0, Eu.useEffect)((() => {
        const uu = ku.current;
        if (!uu) return;
        const Ru = uu => {
          var Ru;
          Tu.has(uu.key) && (null === (Ru = Mu.current) || void 0 === Ru || Ru.call(Mu))
        };
        return uu.addEventListener("keyup", Ru), () => {
          uu.removeEventListener("keyup", Ru)
        }
      }), []);
      const Iu = (0, Eu.useRef)(!1);
      return (0, Bu.g)(eu, {
        adjust: uu => {
          if (Cu) return;
          const Ru = null !== bu && void 0 !== bu ? bu : Math.max(Ju, Math.round((mu - Qu) / 20 / Ju) * Ju),
            Eu = Du(yu + uu * Ru * (Vu ? -1 : 1));
          Eu !== yu && (null === Hu || void 0 === Hu || Hu(), Nu(Eu), null === du || void 0 === du || du())
        },
        setFraction: uu => {
          if (Cu) return;
          const Ru = Du(Qu + (Vu ? 1 - uu : uu) * (mu - Qu));
          Ru !== yu && (Iu.current || (Iu.current = !0, null === Hu || void 0 === Hu || Hu()), Nu(Ru))
        },
        endDrag: () => {
          Iu.current && (Iu.current = !1, null === du || void 0 === du || du())
        }
      }), (0, xu.jsx)("div", {
        ref: ku,
        style: {
          display: "contents"
        },
        children: (0, xu.jsx)(Ku.d, {
          value: yu,
          min: Qu,
          max: mu,
          step: Ju,
          onChange: Nu,
          orientation: Xu,
          reverse: Vu,
          tooltip: Su,
          labels: pu,
          handleLabel: Wu,
          format: ju,
          onChangeStart: () => {
            null === Hu || void 0 === Hu || Hu(), null === ru || void 0 === ru || ru(!0)
          },
          onChangeComplete: () => {
            null === ru || void 0 === ru || ru(!1), null === du || void 0 === du || du()
          }
        })
      })
    }
    async function ju() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Ru = Vu.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: uu
      });
      !0 === await Ru.getResult() && (0, ru.reloadBloxd)()
    }

    function Hu(uu) {
      let {
        label: Ru,
        options: yu,
        value: Eu,
        onChange: Ku,
        circleInfoText: Qu
      } = uu;
      return (0, xu.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, xu.jsxs)("div", {
          className: "SliderText",
          children: [Ru, Qu && (0, xu.jsx)(mu.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Qu
          })]
        }), (0, xu.jsx)(Ju.b, {
          ariaLabel: Ru,
          options: yu,
          value: Eu,
          onChange: Ku
        })]
      })
    }
  },
  6439: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => qu
    });
    var Eu = yu(64),
      Ku = yu(1483),
      Qu = yu(6322),
      mu = yu(1199),
      Ju = yu(343),
      Nu = yu(1300),
      Xu = yu(1467),
      Vu = yu(1408),
      ru = yu(1325),
      Bu = yu(2457),
      xu = yu(2600),
      Su = yu(4322),
      pu = yu(1107),
      Tu = yu(1447),
      Wu = yu(106),
      ju = yu(1170);
    const Hu = yu.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var du = yu(1035),
      bu = yu.n(du),
      Cu = yu(1043),
      ku = yu(1311),
      eu = yu(6314),
      Au = yu(1079);
    const Du = (0, Eu.lazy)((() => Promise.all([yu.e(105), yu.e(74), yu.e(131), yu.e(125), yu.e(124)]).then((() => yu(6357))).then((uu => ({
      default: uu.ShaderPackPublishForm
    })))));

    function Mu(uu) {
      let {
        details: Ru,
        owner: yu,
        onChanged: Ku
      } = uu;
      const {
        t: mu
      } = (0, ju.E)(), Ju = (0, Xu.useNavigatePreserveSearch)(), {
        userContext: ru
      } = (0, pu.d)(), [Bu, xu] = (0, Eu.useState)(!1), [Su, Wu] = (0, Eu.useState)(null), [Hu, du] = (0, Eu.useState)(!1), {
        packId: Mu,
        name: Iu,
        description: Gu,
        live: Uu
      } = Ru;
      async function nu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku;
        xu(!0), Wu(null);
        try {
          await uu(), Ru()
        } catch (yu) {
          console.error("Failed to change a shader pack", yu), Wu((0, eu.u)(yu, mu, "shaderPackListing:ownerActionFailed"))
        } finally {
          xu(!1)
        }
      }
      const su = (0, eu.p)(ru);
      return (0, Au.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Au.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: mu("general:manage")
        }), (0, eu.W)(yu, !(null === Uu || void 0 === Uu || !Uu.renderId), Date.now(), mu).map((uu => (0, Au.jsxs)("div", {
          className: bu()("ShaderPackOwnerNotice", {
            Warning: "warning" === uu.tone
          }),
          children: [(0, Au.jsx)(Cu.c, {
            name: "warning" === uu.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Au.jsxs)("div", {
            children: [uu.text, uu.detail && (0, Au.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: uu.detail
            })]
          })]
        }, uu.text))), Ru.ban && (0, Au.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Au.jsx)(Cu.c, {
            name: "ban"
          }), (0, Au.jsxs)("div", {
            children: ["Banned by ", Ru.ban.byName, " on ", new Date(Ru.ban.at).toLocaleString()]
          })]
        }), Su && (0, Au.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Su
        }), (0, Au.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Au.jsxs)(Vu.P, {
            disabled: Bu,
            onClick: () => {
              !async function() {
                const uu = await ku.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Iu,
                  maxLength: Qu.w,
                  submitText: "general:save",
                  validate: uu => uu.trim().length < Qu.x ? mu("shaderPackListing:nameTooShort", {
                    min: String(Qu.x)
                  }) : null
                }).getResult();
                "notificationTornDown" !== uu && "submit" === (null === uu || void 0 === uu ? void 0 : uu.type) && uu.value.trim() !== Iu && await nu((() => Tu.e.updateShaderPack(ru, {
                  packId: Mu,
                  name: uu.value.trim()
                })))
              }()
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: "pen"
            }), " ", mu("shaderPackListing:rename")]
          }), (0, Au.jsxs)(Vu.P, {
            disabled: Bu,
            onClick: () => {
              !async function() {
                const uu = await ku.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Gu,
                  maxLength: Qu.l,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== uu && "submit" === (null === uu || void 0 === uu ? void 0 : uu.type) && uu.value.trim() !== Gu && await nu((() => Tu.e.updateShaderPack(ru, {
                  packId: Mu,
                  description: uu.value.trim()
                })))
              }()
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: "file-lines"
            }), " ", mu("shaderPackListing:editDescription")]
          }), (0, Au.jsxs)(Vu.P, {
            disabled: Bu || yu.isBanned && !yu.listed,
            onClick: () => {
              nu((() => Tu.e.updateShaderPack(ru, {
                packId: Mu,
                listed: !yu.listed
              })))
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: yu.listed ? "eye-slash" : "eye"
            }), " ", mu(yu.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !yu.isBanned && (0, Au.jsxs)(Vu.e, {
            disabled: Bu,
            onClick: () => {
              du(!Hu)
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: "upload"
            }), " ", mu("shaderPackListing:uploadVersion")]
          }), (0, Au.jsxs)(Vu.H, {
            disabled: Bu || yu.isBanned,
            onClick: () => {
              !async function() {
                !0 === await ku.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await nu((() => Tu.e.deleteShaderPack(ru, Mu)), (() => {
                  Ju(`${eu.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: "trash-can"
            }), " ", mu("general:delete")]
          }), su && (0, Au.jsxs)(Vu.H, {
            disabled: Bu,
            onClick: () => {
              nu((() => Tu.e.setShaderPackBanned(ru, Mu, !yu.isBanned)))
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: yu.isBanned ? "circle-check" : "ban"
            }), " ", yu.isBanned ? "Unban" : "Ban"]
          })]
        }), Hu && (0, Au.jsx)(Eu.Suspense, {
          fallback: (0, Au.jsx)(Nu.b, {}),
          children: (0, Au.jsx)(Du, {
            existing: {
              packId: Mu,
              name: Iu,
              description: Gu
            },
            onPublished: () => {
              du(!1), Ku()
            }
          })
        })]
      })
    }
    var Iu = yu(80),
      Gu = yu(1823),
      Uu = yu(1247),
      nu = yu(4818),
      su = yu(1176),
      tu = yu(6333),
      lu = yu(6325),
      gu = yu(6344);

    function cu(uu) {
      let {
        item: Ru
      } = uu;
      const {
        t: yu
      } = (0, ju.E)(), [Ku] = (0, tu.i)(), [mu, Ju] = (0, Eu.useState)(Ku), [Nu, Xu] = (0, Eu.useState)(!1), [Vu, ru] = (0, Eu.useState)(!1), {
        s3Url: Bu
      } = su.clientSideServerUrls, {
        width: xu,
        height: Su
      } = Qu.o.large, pu = (0, Qu.q)(Bu, Ru, mu, "large"), {
        renderVersion: Tu
      } = Ru;
      return (0, Au.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Au.jsx)(gu.c, {
          selected: mu,
          onSelect: uu => {
            Ju(uu), Xu(!1)
          },
          imageUrl: uu => (0, Qu.q)(Bu, Ru, uu, "thumb")
        }), (0, Au.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Nu && (0, Au.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Tu ? void 0 : yu("shaderPackListing:fullSize"),
            disabled: null === Tu,
            onClick: () => {
              ru(!0)
            },
            children: [(0, Au.jsx)("img", {
              src: pu,
              width: xu,
              height: Su,
              alt: yu(eu.gb[mu]),
              draggable: !1
            }), (0, Au.jsx)(lu.d, {
              item: Ru
            })]
          }), !Nu && null !== Tu && (0, Au.jsxs)(wu, {
            side: "Right",
            onClick: () => {
              Xu(!0)
            },
            children: [(0, Au.jsx)(Cu.c, {
              name: "arrows-left-right"
            }), " ", yu("shaderPackListing:compare")]
          }), Nu && null !== Tu && (0, Au.jsx)(Fu, {
            item: Ru,
            packUrl: pu,
            baselineUrl: (0, Qu.h)(Bu, Tu, mu, "large")
          }), Nu && (0, Au.jsx)(wu, {
            side: "Left",
            onClick: () => {
              Xu(!1)
            },
            children: yu("shaderPackListing:withPack")
          }), Nu && (0, Au.jsx)(wu, {
            side: "Right",
            onClick: () => {
              Xu(!1)
            },
            children: yu("shaderPackListing:withoutPack")
          })]
        }), Vu && (0, Au.jsx)(Lu, {
          fullUrl: (0, Qu.q)(Bu, Ru, mu, "full"),
          largeUrl: pu,
          alt: yu(eu.gb[mu]),
          onClose: () => {
            ru(!1)
          }
        })]
      })
    }

    function Lu(uu) {
      let {
        fullUrl: Ru,
        largeUrl: yu,
        alt: Ku,
        onClose: Qu
      } = uu;
      const mu = (0, Eu.useRef)(null);
      return (0, Uu.t)("popup", mu, Qu), (0, Eu.useEffect)((() => {
        function uu(uu) {
          "Escape" === uu.key && (uu.stopPropagation(), Qu())
        }
        return window.addEventListener("keydown", uu, !0), () => {
          window.removeEventListener("keydown", uu, !0)
        }
      }), [Qu]), (0, Iu.createPortal)((0, Au.jsxs)("div", {
        ref: mu,
        className: "ShaderPackFullSize",
        onClick: Qu,
        children: [(0, Au.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Ru,
          alt: Ku,
          draggable: !1,
          style: {
            backgroundImage: `url(${yu})`
          }
        }), (0, Au.jsx)(Vu.h, {
          className: "ShaderPackFullSizeClose",
          onClick: Qu
        })]
      }), document.body)
    }
    const zu = 5;

    function Fu(uu) {
      let {
        item: Ru,
        packUrl: yu,
        baselineUrl: Ku
      } = uu;
      const {
        t: mu
      } = (0, ju.E)(), [Ju, Nu] = (0, Eu.useState)(50), Xu = (0, Eu.useRef)(!1), Vu = (0, Eu.useRef)(null), {
        width: ru,
        height: Bu
      } = Qu.o.large;

      function xu(uu) {
        Nu((Ru => (0, Gu.e)(Ru + uu, 0, 100)))
      }

      function Su(uu) {
        const Ru = uu.currentTarget.getBoundingClientRect();
        Nu((0, Gu.e)((uu.clientX - Ru.left) / Ru.width * 100, 0, 100))
      }
      return (0, nu.g)(Vu, {
        adjust: uu => {
          xu(uu * zu)
        },
        setFraction: uu => {
          Nu(100 * uu)
        },
        endDrag: () => {}
      }), (0, Au.jsxs)("div", {
        ref: Vu,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": mu("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Ju),
        style: {
          "--split": `${Ju}%`
        },
        onKeyDown: function(uu) {
          const Ru = "ArrowLeft" === uu.key ? -zu : "ArrowRight" === uu.key ? zu : 0;
          0 !== Ru && (uu.preventDefault(), xu(Ru))
        },
        onPointerDown: uu => {
          Xu.current = !0, uu.currentTarget.setPointerCapture(uu.pointerId), Su(uu)
        },
        onPointerMove: uu => {
          Xu.current && Su(uu)
        },
        onPointerUp: () => {
          Xu.current = !1
        },
        onPointerCancel: () => {
          Xu.current = !1
        },
        children: [(0, Au.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Ku,
          width: ru,
          height: Bu,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${yu})`
          }
        }), (0, Au.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Au.jsx)("img", {
          className: "ShaderPackComparePack",
          src: yu,
          width: ru,
          height: Bu,
          alt: "",
          draggable: !1
        }), (0, Au.jsx)(lu.d, {
          item: Ru,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function wu(uu) {
      let {
        side: Ru,
        onClick: yu,
        children: Eu
      } = uu;
      return (0, Au.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Ru}`,
        onClick: yu,
        children: (0, Au.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Eu
        })
      })
    }
    var Zu = yu(4782),
      hu = yu(305),
      Pu = yu(6436);
    const iu = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Yu(uu) {
      const {
        userContext: Ru
      } = (0, pu.d)(), [Ku, Qu] = (0, Eu.useState)(null), [mu, Ju] = (0, Eu.useState)(!1), [Nu, Xu] = (0, Eu.useState)(!1), [Vu, ru] = (0, Eu.useState)(null), Bu = null === uu || void 0 === uu ? void 0 : uu.packId, xu = null === uu || void 0 === uu ? void 0 : uu.sourceHash;
      return (0, Eu.useEffect)((() => {
        if (Ju(!1), ru(null), void 0 === Bu) return;
        let uu = !1;
        return Promise.all([(0, Wu.hasUsableWebGpuAdapter)(), (0, Pu.h)()]).then((Ru => {
          let [yu, Eu] = Ru;
          var Ku;
          uu || (Qu(yu), Ju((null === Eu || void 0 === Eu || null === (Ku = Eu.listing) || void 0 === Ku ? void 0 : Ku.packId) === Bu && Eu.listing.sourceHash === xu))
        })).catch((Ru => {
          console.error("Failed to check whether this shader pack can be used", Ru), uu || Qu(!1)
        })), () => {
          uu = !0
        }
      }), [Bu, xu]), {
        webGpuUsable: Ku,
        inUse: mu,
        busy: Nu,
        errorKey: Vu,
        use: () => {
          null !== uu && async function(uu) {
            Xu(!0), ru(null);
            try {
              const {
                installListedShaderPack: Eu
              } = await Promise.all([yu.e(74), yu.e(131), yu.e(126)]).then((() => yu(40067))), Ku = await Eu({
                packId: uu.packId,
                sourceHash: uu.sourceHash,
                name: uu.name,
                ownerName: uu.ownerName,
                description: uu.description
              });
              if ("failed" === Ku.kind) return void ru(iu[Ku.reason]);
              Ju(!0), Tu.e.recordShaderPackDownload(Ru, uu.packId).catch((uu => {
                console.error("Failed to count a shader pack's download", uu)
              })), (0, Zu.i)()
            } catch (Eu) {
              console.error("Failed to use the shader pack", Eu), ru("shaderPack:unexpectedError")
            } finally {
              Xu(!1)
            }
          }(uu)
        }
      }
    }

    function ou(uu) {
      let {
        packUse: Ru
      } = uu;
      const {
        t: yu
      } = (0, ju.E)(), {
        webGpuUsable: Eu,
        inUse: Ku,
        busy: Qu,
        errorKey: mu,
        use: Ju
      } = Ru;
      return (0, Au.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Au.jsxs)(Vu.l, {
          disabled: !0 !== Eu || Ku,
          loading: Qu,
          onClick: Ju,
          children: [(0, Au.jsx)(Cu.c, {
            name: Ku ? "check" : "download"
          }), " ", yu(Ku ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Eu && (0, Au.jsx)("div", {
          className: "ShaderPackUseNote",
          children: yu((0, hu.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), mu && (0, Au.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: yu(mu)
        })]
      })
    }

    function qu() {
      var uu;
      const {
        t: Ru
      } = (0, ju.E)(), yu = (0, Xu.useNavigatePreserveSearch)(), {
        packId: Qu
      } = (0, Ku.A)(), {
        userContext: mu,
        isUserContextUpdating: Ju
      } = (0, pu.d)(), [ru, Bu] = (0, Eu.useState)(null), [xu, Wu] = (0, Eu.useState)(null), [Hu, du] = (0, Eu.useState)(0), bu = (0, Eu.useRef)(0);

      function Cu() {
        var uu;
        null !== (uu = (0, Xu.getPreviousLocation)()) && void 0 !== uu && uu.startsWith(eu.S) ? yu(-1) : yu(eu.S)
      }(0, Su.c)(Cu), (0, tu.b)(), (0, Eu.useEffect)((() => {
        if (Ju || void 0 === Qu) return;
        const uu = ++bu.current;
        Wu(null), Tu.e.getShaderPack(mu, Qu).then((Ru => {
          bu.current === uu && Bu(Ru)
        })).catch((Ru => {
          bu.current === uu && (console.error("Failed to get the shader pack", Ru), Bu(null), Wu({
            error: Ru
          }))
        }))
      }), [Qu, mu, Ju, Hu]);
      const ku = () => {
          du((uu => uu + 1))
        },
        Du = (null === ru || void 0 === ru ? void 0 : ru.packId) === Qu ? ru : null,
        Iu = (0, tu.m)(),
        Gu = Yu(null !== (uu = null === Du || void 0 === Du ? void 0 : Du.live) && void 0 !== uu ? uu : null),
        Uu = null !== Du && void 0 !== Du && Du.live ? (0, Au.jsx)(Ou, {
          item: Du.live,
          favourites: Iu,
          packUse: Gu
        }) : null;
      return (0, Au.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Au.jsx)(Vu.b, {
          onClick: Cu,
          children: Ru("shaderPackListing:backToPacks")
        }), null === Du && null === xu && (0, Au.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Au.jsx)(Nu.b, {})
        }), null !== xu && (0, Au.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, eu.u)(xu.error, Ru, "shaderPackListing:loadPackFailed"), (0, Au.jsx)(Vu.e, {
            onClick: ku,
            children: Ru("general:tryAgain")
          })]
        }), null !== Du && null === xu && (0, Au.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Au.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Au.jsx)("h1", {
              className: "FullyFancyText",
              children: Du.name
            }), Uu]
          }), Du.live && (0, Au.jsx)(cu, {
            item: Du.live
          }), Du.live && (0, Au.jsx)(vu, {
            item: Du.live,
            ownerPreview: Du.ownerPreview,
            bloxdhubSlug: Du.bloxdhubSlug,
            actions: Uu
          }), Du.owner && (0, Au.jsx)(Mu, {
            details: Du,
            owner: Du.owner,
            onChanged: ku
          })]
        })]
      })
    }

    function Ou(uu) {
      let {
        item: Ru,
        favourites: yu,
        packUse: Eu
      } = uu;
      const Ku = yu.isFavourite(Ru.packId);
      return (0, Au.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Wu.featureFlags.settings.canUseShaderPacks && (0, Au.jsx)(ou, {
          packUse: Eu
        }), (0, Au.jsx)(Vu.q, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            yu.toggle(Ru.packId)
          },
          isLiked: !0 === Ku,
          isLoading: null === Ku
        })]
      })
    }

    function vu(uu) {
      let {
        item: Ru,
        ownerPreview: yu,
        bloxdhubSlug: Eu,
        actions: Ku
      } = uu;
      const {
        t: Ju
      } = (0, ju.E)(), Nu = (0, xu.l)(), Vu = null === Eu ? null : (0, Qu.e)(Eu);
      return (0, Au.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Ru.description && (0, Au.jsx)("p", {
          className: "ShaderPackDescription",
          children: Ru.description
        }), (0, Au.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== yu || null !== Vu) && (0, Au.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== yu ? (0, Au.jsxs)(Au.Fragment, {
              children: [(0, Au.jsx)(Bu.e, {
                playerSocialPreview: yu,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Vu && (0, Au.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Vu,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Au.jsx)("img", {
                  src: Hu,
                  alt: Qu.c
                })
              })]
            }) : (0, Au.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Vu,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Qu.c, (0, Au.jsx)("img", {
                src: Hu,
                alt: ""
              })]
            })
          }), eu.v.filter((uu => Ru.features.includes(uu))).map((uu => (0, Au.jsx)(Xu.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, eu.E)(uu),
            children: Ju(eu.I[uu])
          }, uu)))]
        }), Ku, (0, Au.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Au.jsxs)("div", {
            children: [(0, Au.jsx)("dt", {
              children: Ju("shaderPackListing:downloads")
            }), (0, Au.jsx)("dd", {
              children: (0, mu.Q)(Ru.downloads)
            })]
          }), (0, Au.jsx)(au, {
            label: Ju("shaderPackListing:updated"),
            time: Ru.listedUpdatedAt,
            now: Nu
          }), (0, Au.jsx)(au, {
            label: Ju("shaderPackListing:created"),
            time: Ru.publishedAt,
            now: Nu
          }), null !== Ru.gpuCost && (0, Au.jsxs)("div", {
            children: [(0, Au.jsx)("dt", {
              children: Ju("shaderPackListing:lag")
            }), (0, Au.jsx)("dd", {
              children: Ju("shaderPackListing:lagPercent", {
                percent: String((0, eu.O)(Ru.gpuCost))
              })
            })]
          }), (0, Au.jsxs)("div", {
            children: [(0, Au.jsx)("dt", {
              children: Ju("shaderPackListing:size")
            }), (0, Au.jsx)("dd", {
              children: Ju("shaderPackListing:sizeValue", {
                kilobytes: String((0, eu.K)(Ru.sourceBytes))
              })
            })]
          }), (0, Au.jsxs)("div", {
            children: [(0, Au.jsx)("dt", {
              children: Ju("shaderPackListing:files")
            }), (0, Au.jsx)("dd", {
              children: Ru.fileCount
            })]
          })]
        })]
      })
    }

    function au(uu) {
      let {
        label: Ru,
        time: yu,
        now: Eu
      } = uu;
      const {
        t: Ku,
        selectedLanguage: Qu
      } = (0, ju.E)(), mu = new Date(yu);
      let Nu = mu.toLocaleDateString();
      if (Eu - yu <= 30 * Ju.g) {
        const uu = (0, ju.n)(Qu.code, "shaderPackListing:timeAgo");
        Nu = Ku("shaderPackListing:timeAgo", {
          time: (0, Ju.fb)(uu, yu, Eu)
        })
      }
      return (0, Au.jsx)(ru.i, {
        tooltipInner: mu.toLocaleString(),
        children: (0, Au.jsxs)("div", {
          children: [(0, Au.jsx)("dt", {
            children: Ru
          }), (0, Au.jsx)("dd", {
            children: Nu
          })]
        })
      })
    }
  },
  4811: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1079);

    function mu(uu) {
      let {
        options: Ru,
        value: yu,
        onChange: Eu,
        ariaLabel: mu,
        className: Ju,
        reselectable: Nu = !1,
        keepsFocus: Xu = !1
      } = uu;
      return (0, Qu.jsx)("div", {
        className: Ku()("SegmentedToggle", Ju),
        role: "group",
        "aria-label": mu,
        children: Ru.map((uu => {
          const Ru = uu.value === yu;
          return (0, Qu.jsx)("button", {
            type: "button",
            "aria-pressed": Ru,
            "aria-label": uu.ariaLabel,
            title: uu.ariaLabel,
            className: Ku()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Ru
            }),
            onMouseDown: Xu ? uu => {
              uu.preventDefault()
            } : void 0,
            onClick: () => {
              Ru && !Nu || Eu(uu.value)
            },
            children: uu.label
          }, uu.value)
        }))
      })
    }
  },
  4818: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => mu
    });
    var Eu = yu(64);
    const Ku = new WeakMap,
      Qu = uu => {
        var Ru;
        const yu = uu.closest("[data-pad-slider]");
        return yu && null !== (Ru = Ku.get(yu)) && void 0 !== Ru ? Ru : null
      },
      mu = (uu, Ru) => {
        const yu = (0, Eu.useRef)(Ru);
        yu.current = Ru, (0, Eu.useEffect)((() => {
          if (uu.current) return ((uu, Ru) => (Ku.set(uu, Ru), () => {
            Ku.get(uu) === Ru && Ku.delete(uu)
          }))(uu.current, {
            adjust: uu => {
              yu.current.adjust(uu)
            },
            setFraction: uu => {
              yu.current.setFraction(uu)
            },
            endDrag: () => {
              yu.current.endDrag()
            }
          })
        }), [uu])
      }
  },
  6436: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(47);
    const Ku = "shaderPack";
    async function Qu() {
      var uu;
      let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await Eu.f.getItem(Ku, Ru)) && void 0 !== uu ? uu : null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);