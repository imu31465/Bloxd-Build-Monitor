export const id = 102;
export const ids = [102];
export const modules = {
  4794: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1059),
      Pd = kd(1359),
      Zd = kd(3360),
      gd = kd(126),
      Cd = kd(3408),
      Kd = kd(3397),
      od = kd(1103);

    function ld(dd) {
      let {
        game: Jd
      } = dd;
      const kd = (0, gd.n)() ? "large" : "small",
        pd = (0, Cd.d)(Jd, kd),
        ld = (0, Zd.h)(pd),
        Qd = void 0 !== ld.blurhash;
      return (0, od.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ld.isLoading && !Qd && (0, od.jsx)(Pd.b, {
          loaderType: "Secondary"
        }), !ld.failed && (null !== ld.src || Qd) && (0, od.jsx)("div", {
          className: Nd()("SchematicImage", Kd.f, {
            SchematicImageFadeIn: ld.fadeIn && !Qd
          }),
          style: (0, Kd.c)(ld),
          children: (0, od.jsx)(Kd.b, {
            image: ld
          })
        }), ld.failed && (0, od.jsx)("div", {
          className: "SchematicImageError",
          children: (0, od.jsx)(Wd.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4909: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Qd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(4841),
      Zd = kd(1359),
      gd = kd(1211),
      Cd = kd(3014),
      Kd = kd(3142),
      od = kd(1059),
      ld = kd(1103);

    function Qd(dd) {
      let {
        folderName: Jd,
        onTexturePackUpdated: Nd,
        disabled: Qd = !1,
        maxFileSizeMb: Ld,
        packOwner: Od
      } = dd;
      const {
        t: ed
      } = (0, gd.B)(), [Rd, Id] = (0, pd.useState)(!1), [Gd, vd] = (0, pd.useState)(null), [xd, qd] = (0, pd.useState)(null), Bd = (0, pd.useRef)(null);
      const {
        getRootProps: sd,
        getInputProps: ad,
        isDragActive: Md
      } = (0, Pd.c)({
        onDrop: async function(dd) {
          Id(!0);
          try {
            const Jd = await (0, Cd.o)(dd);
            if ("customGame" === Od && (0, Kd.l)(Jd)) return void vd(ed(Kd.b));
            if (void 0 !== Ld) {
              const dd = JSON.stringify(Jd).length / 1048576;
              if (dd > Ld) return void vd(`File size is too large. Max size is ${Ld}MB. Current size is ${dd}MB.`)
            }
            vd(null), qd(null), Nd(Jd), Bd.current = Jd,
              function(dd, Jd) {
                const pd = dd.modelOverrides;
                pd && Promise.all([kd.e(196), kd.e(195)]).then((() => kd(9306))).then((kd => {
                  let {
                    packDisplayName: Nd,
                    refusedPackModels: Wd,
                    packModelSummary: Pd
                  } = kd;
                  const Zd = Nd(dd.metaData);
                  Jd(Pd(Zd, Wd(Zd, pd, !1)))
                })).catch((dd => {
                  console.error("Checking the texture pack's models failed:", dd)
                }))
              }(Jd, (dd => {
                Bd.current === Jd && qd(dd)
              }))
          } catch {
            vd("Invalid Texture Pack Folder")
          } finally {
            Id(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: Qd
      });
      return (0, ld.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, ld.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [ed("settingsMenu:customTextureWarning"), ".", (0, ld.jsx)("br", {}), ed("settingsMenu:viewDocumentation"), ":", " ", (0, ld.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Gd && (0, ld.jsxs)("div", {
          className: "CustomTextureError",
          children: [ed("general:error"), ": ", Gd]
        }), xd && (0, ld.jsx)("div", {
          className: "CustomTextureError",
          children: xd
        }), (0, ld.jsxs)("div", {
          ...sd({
            className: Wd()("CustomTextureFolderUpload", {
              ActiveDrag: Md,
              Disabled: Qd
            })
          }),
          children: [(0, ld.jsx)("input", {
            ...ad({
              webkitdirectory: "true"
            })
          }), Rd && (0, ld.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, ld.jsx)(Zd.b, {})
          }), !Rd && !Md && Jd && (0, ld.jsxs)(ld.Fragment, {
            children: [(0, ld.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, ld.jsx)(od.e, {
                name: "folder-image"
              })
            }), (0, ld.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Jd
            })]
          }), !Rd && (Md || !Jd) && (0, ld.jsxs)(ld.Fragment, {
            children: [(0, ld.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, ld.jsx)(od.e, {
                name: "up-from-bracket"
              })
            }), (0, ld.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
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
  4869: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Rd,
      f: () => Id
    });
    var pd = kd(3014),
      Nd = kd(3018),
      Wd = kd(56),
      Pd = kd(1044),
      Zd = kd.n(Pd),
      gd = kd(1359),
      Cd = kd(3011),
      Kd = kd(1371),
      od = kd(4877),
      ld = kd(4909),
      Qd = kd(626),
      Ld = kd(4911),
      Od = kd(1103);

    function ed() {
      (0, od.l)("texturePackPickReload")
    }

    function Rd(dd) {
      var Jd;
      let {
        setApplySettingsCallback: kd
      } = dd;
      const [, Pd] = (0, Wd.useReducer)((dd => dd + 1), 0), Zd = (0, Wd.useRef)(!1), gd = (0, Wd.useRef)(null);

      function Rd(dd, Jd) {
        Cd.d.setFromJson(dd, "player");
        const pd = Cd.d.saveTexturePack();
        if (Qd.x) {
          const dd = Cd.d.toJson();
          pd.then((Jd => {
            Jd && (0, Ld.i)(dd, ed)
          }))
        } else Zd.current ||= Jd, gd.current !== Cd.d.getId() || Cd.d.getId() === Nd.s.CUSTOM && Zd.current ? kd((() => od.l)) : kd(null);
        Pd()
      }
      async function Gd(dd) {
        if (Cd.d.getId() !== dd.metaData.id) {
          if (Cd.d.getId() === Nd.s.CUSTOM && Cd.d.getFromFolderName()) {
            const dd = Kd.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await dd.getResult()) return
          }
          Rd(dd, !1)
        }
      }(0, Wd.useEffect)((() => {
        gd.current = Cd.d.getId()
      }), []);
      const vd = pd.b,
        xd = [vd, ...Object.values(Nd.s).filter((dd => dd !== vd))];
      return (0, Od.jsx)(Od.Fragment, {
        children: (0, Od.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Od.jsx)("div", {
            className: "TexturePackList",
            children: xd.map((dd => (0, Od.jsx)(Id, {
              id: dd,
              isSelected: dd === Cd.d.getId(),
              setSelected: Gd
            }, dd)))
          }), Cd.d.getId() === Nd.s.CUSTOM && (0, Od.jsx)(ld.c, {
            folderName: null !== (Jd = Cd.d.getFromFolderName()) && void 0 !== Jd ? Jd : null,
            onTexturePackUpdated: function(dd) {
              Rd(dd, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Id(dd) {
      let {
        id: Jd,
        isSelected: kd,
        setSelected: Pd,
        disabled: Cd = !1
      } = dd;
      const [Kd, od] = (0, Wd.useState)(!0), [ld, Qd] = (0, Wd.useState)(""), [Ld, ed] = (0, Wd.useState)(""), [Rd, Id] = (0, Wd.useState)(""), Gd = (0, Wd.useRef)({});
      return (0, Wd.useEffect)((() => {
        (0, pd.k)(Jd).then((dd => {
          var Jd;
          dd && (Gd.current = dd, od(!1), Qd(Gd.current.metaData.name), ed(Gd.current.metaData.author), Id(null !== (Jd = Gd.current.metaData.previewImage) && void 0 !== Jd ? Jd : ""))
        })).catch((dd => {
          console.warn(`Failed to fetch texture pack ${Jd}`, dd)
        }))
      }), [Jd]), (0, Od.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Cd || void 0,
        className: Zd()("TexturePack", {
          Selected: kd,
          Custom: Jd === Nd.s.CUSTOM,
          Disabled: Cd
        }),
        onClick: () => {
          Kd || Cd || Pd(Gd.current)
        },
        children: [(0, Od.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Rd ? `url(${Rd})` : void 0
          }
        }), Kd && (0, Od.jsx)("div", {
          className: "TexturePackName",
          children: (0, Od.jsx)(gd.b, {})
        }), !Kd && ld && (0, Od.jsx)("div", {
          className: "TexturePackName",
          children: ld
        }), !Kd && Ld && (0, Od.jsx)("div", {
          className: "TexturePackAuthor",
          children: Ld
        })]
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
  4911: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      i: () => Pd
    });
    var pd = kd(3018),
      Nd = kd(4915);
    let Wd = null;

    function Pd(dd, Jd) {
      Wd = {
        pack: dd.metaData.id === pd.e ? null : dd,
        prompt: Jd
      }
    }

    function Zd(dd, Jd) {
      const kd = Wd;
      null !== kd && (0, Nd.d)(kd.pack, dd) && (Wd = null, Jd && kd.prompt())
    }
  },
  4915: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return Nd(dd, Jd)
    }

    function Nd(dd, Jd) {
      if (dd === Jd) return !0;
      if ("object" !== typeof dd || "object" !== typeof Jd || null === dd || null === Jd || Array.isArray(dd) !== Array.isArray(Jd)) return !1;
      const kd = dd,
        pd = Jd,
        Wd = Object.keys(kd);
      return Wd.length === Object.keys(pd).length && Wd.every((dd => Object.prototype.hasOwnProperty.call(pd, dd) && Nd(kd[dd], pd[dd])))
    }
    kd.d(Jd, {
      d: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);