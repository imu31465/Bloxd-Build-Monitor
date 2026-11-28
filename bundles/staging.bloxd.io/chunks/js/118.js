export const id = 118;
export const ids = [118];
export const modules = {
  5691: (dd, Od, md) => {
    md.d(Od, {
      e: () => od
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1443),
      Xd = md(1436),
      Kd = md(4734),
      hd = md(151),
      vd = md(4776),
      Qd = md(4767),
      td = md(1341);

    function od(dd) {
      let {
        game: Od
      } = dd;
      const md = (0, hd.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Wd = (0, vd.i)(Od, md),
        od = (0, Kd.g)(Wd),
        Nd = void 0 !== od.blurhash;
      return (0, td.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [od.isLoading && !Nd && (0, td.jsx)(Xd.c, {
          loaderType: "Secondary"
        }), !od.failed && (null !== od.src || Nd) && (0, td.jsx)("div", {
          className: Fd()("SchematicImage", Qd.j, {
            SchematicImageFadeIn: od.fadeIn && !Nd
          }),
          style: (0, Qd.g)(od),
          children: (0, td.jsx)(Qd.e, {
            image: od
          })
        }), od.failed && (0, td.jsx)("div", {
          className: "SchematicImageError",
          children: (0, td.jsx)(Rd.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5944: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(5861),
      Kd = md(1436),
      hd = md(1238),
      vd = md(4373),
      Qd = md(4518),
      td = md(1443),
      od = md(4378),
      Nd = md(5947),
      qd = md(5958),
      Hd = md(1341);

    function yd(dd) {
      let {
        folderName: Od,
        onTexturePackUpdated: Fd,
        disabled: yd = !1,
        maxFileSizeMb: bd,
        packOwner: Td
      } = dd;
      const {
        t: pd
      } = (0, hd.G)(), [Yd, gd] = (0, Wd.useState)(!1), [wd, Ed] = (0, Wd.useState)(null), [Jd, Ud] = (0, Wd.useState)(null), xd = (0, Wd.useRef)(null);
      async function Bd(dd) {
        gd(!0);
        try {
          const Od = await (0, vd.r)(dd);
          if ("customGame" === Td && (0, Qd.i)(Od)) return void Ed(pd(Qd.c));
          if (void 0 !== bd) {
            const dd = JSON.stringify(Od).length / 1048576;
            if (dd > bd) return void Ed(pd("customTexturePack:packTooBig", {
              size: dd.toFixed(1),
              max: bd
            }))
          }
          Ed(null), Ud(null), Fd(Od), xd.current = Od,
            function(dd, Od) {
              const Wd = dd.modelOverrides;
              Wd && Promise.all([md.e(234), md.e(233)]).then((() => md(35647))).then((md => {
                let {
                  packDisplayName: Fd,
                  refusedPackModels: Rd,
                  packModelSummary: Xd
                } = md;
                const Kd = Fd(dd.metaData);
                Od(Xd(Kd, Rd(Kd, Wd, !1)))
              })).catch((dd => {
                console.error("Checking the texture pack's models failed:", dd)
              }))
            }(Od, (dd => {
              xd.current === Od && Ud(dd)
            }))
        } catch (Od) {
          if (Od instanceof od.b) {
            const dd = "customTexturePack:invalidPack" !== Od.translationKey || (0, qd.g)() ? Od.translationKey : "customTexturePack:invalidPackZip";
            Ed((0, Nd.i)(pd, dd, Od.params))
          } else console.error("Couldn't read the texture pack", Od), Ed(pd("customTexturePack:errorTitle"))
        } finally {
          gd(!1)
        }
      }
      const {
        getRootProps: Sd,
        getInputProps: sd,
        isDragActive: ud,
        open: Vd
      } = (0, Xd.b)({
        onDrop: Bd,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: yd
      });
      return (0, Hd.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Hd.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [pd("settingsMenu:customTextureWarning"), ".", (0, Hd.jsx)("br", {}), pd("settingsMenu:viewDocumentation"), ":", " ", (0, Hd.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), wd && (0, Hd.jsxs)("div", {
          className: "CustomTextureError",
          children: [pd("general:error"), ": ", wd]
        }), Jd && (0, Hd.jsx)("div", {
          className: "CustomTextureError",
          children: Jd
        }), (0, Hd.jsxs)("div", {
          ...Sd({
            className: Rd()("CustomTextureFolderUpload", {
              ActiveDrag: ud,
              Disabled: yd
            })
          }),
          children: [(0, Hd.jsx)("input", {
            ...sd({
              webkitdirectory: "true"
            })
          }), Yd && (0, Hd.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Hd.jsx)(Kd.c, {})
          }), !Yd && !ud && Od && (0, Hd.jsxs)(Hd.Fragment, {
            children: [(0, Hd.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Hd.jsx)(td.c, {
                name: "folder-image"
              })
            }), (0, Hd.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Od
            })]
          }), !Yd && (ud || !Od) && (0, Hd.jsxs)(Hd.Fragment, {
            children: [(0, Hd.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Hd.jsx)(td.c, {
                name: "up-from-bracket"
              })
            }), (0, Hd.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: pd((0, qd.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !Yd && (0, Hd.jsx)(qd.e, {
            disabled: yd,
            openFolderPicker: Vd,
            onFiles: dd => {
              Bd(dd)
            }
          })]
        })]
      })
    }
  },
  5958: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      g: () => vd
    });
    var Wd = md(66),
      Fd = md(1572),
      Rd = md(1238),
      Xd = md(107),
      Kd = md(4337),
      hd = md(1341);

    function vd() {
      return !(0, Xd.isMobile)()
    }

    function Qd(dd) {
      let {
        disabled: Od,
        openFolderPicker: md,
        onFiles: Xd
      } = dd;
      const {
        t: Qd
      } = (0, Rd.G)(), td = (0, Wd.useRef)(null);
      return (0, hd.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, hd.jsx)("input", {
          ref: td,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(dd) {
            const Od = Array.from(dd.target.files);
            dd.target.value = "", Xd(Od)
          }
        }), vd() && (0, hd.jsx)(Fd.g, {
          disabled: Od,
          onClick: md,
          children: Qd("general:chooseFolder")
        }), (0, hd.jsx)(Fd.g, {
          disabled: Od,
          onClick: () => {
            (0, Kd.g)(td.current)
          },
          children: Qd("general:chooseZip")
        })]
      })
    }
  },
  5901: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd,
      h: () => Yd,
      i: () => Hd,
      l: () => pd
    });
    var Wd = md(66),
      Fd = md(5909),
      Rd = md(5003),
      Xd = md(1471),
      Kd = md(4199),
      hd = md(1155),
      vd = md.n(hd),
      Qd = md(1462),
      td = md(1890),
      od = md(5936),
      Nd = md(1341);

    function qd(dd) {
      let {
        label: Od,
        onClick: md,
        checked: Wd,
        circleInfoText: Fd,
        className: Kd,
        disabled: hd,
        note: Qd
      } = dd;
      return (0, Nd.jsxs)("div", {
        "aria-disabled": hd || void 0,
        "data-pad-focusable": !0,
        className: vd()("SettingBox CheckboxContainer", {
          [Kd]: Kd,
          SettingBoxDisabled: hd
        }),
        onClick: () => {
          hd || md(!Wd)
        },
        children: [(0, Nd.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nd.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nd.jsx)(Rd.d, {
              className: "SettingsCheckbox",
              checked: Wd,
              disabled: hd,
              onChange: () => {}
            })
          }), (0, Nd.jsxs)("div", {
            className: "CheckboxText",
            children: [Od, Fd && (0, Nd.jsx)("span", {
              onClick: dd => dd.stopPropagation(),
              children: (0, Nd.jsx)(Xd.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Fd
              })
            })]
          })]
        }), Qd && (0, Nd.jsx)("div", {
          className: "SettingNote",
          children: Qd
        })]
      })
    }

    function Hd(dd) {
      let {
        name: Od,
        onChange: md,
        min: Fd,
        max: Rd,
        step: Kd,
        initValue: hd,
        circleInfoText: Qd,
        format: td,
        className: od,
        padStep: qd,
        disabled: Hd = !1,
        selectableMax: yd,
        cappedNote: bd,
        note: pd,
        onChangeComplete: Yd
      } = dd;
      const [gd, wd] = (0, Wd.useState)(hd), Ed = (0, Wd.useRef)(hd);
      (0, Wd.useEffect)((() => {
        Ed.current = hd, wd(hd)
      }), [hd]);
      const Jd = void 0 !== yd && yd < Rd,
        Ud = Jd ? {
          "--slider-selectable": (yd - Fd) / (Rd - Fd)
        } : void 0,
        xd = Jd && bd ? bd : pd;
      return (0, Nd.jsxs)("div", {
        className: vd()("SettingBox SettingsSliderDiv", {
          [od]: od,
          SettingBoxDisabled: Hd,
          SliderCapped: Jd
        }),
        style: Ud,
        children: [(0, Nd.jsxs)("div", {
          className: "SliderText",
          children: [`${Od}: ${td?td(gd):gd}`, Qd && (0, Nd.jsx)(Xd.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Qd
          })]
        }), (0, Nd.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nd.jsx)(Td, {
            value: gd,
            min: Fd,
            max: Rd,
            step: Kd,
            onChange: dd => {
              if (Jd && dd >= yd && gd === yd) return;
              const Od = Jd ? Math.min(dd, yd) : dd;
              Ed.current = Od, wd(Od), md(Od)
            },
            onChangeComplete: Yd && (() => {
              Yd(Ed.current)
            }),
            format: td,
            padStep: qd,
            disabled: Hd
          })
        }), xd && (0, Nd.jsx)("div", {
          className: "SettingNote",
          children: xd
        })]
      })
    }
    const yd = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function bd(dd) {
      var Od;
      return (null !== (Od = String(dd).split(".")[1]) && void 0 !== Od ? Od : "").length
    }

    function Td(dd) {
      let {
        value: Od,
        min: md,
        max: Rd,
        step: Xd,
        onChange: Kd,
        orientation: hd,
        reverse: vd,
        setIsChanging: Qd,
        tooltip: td,
        labels: qd,
        handleLabel: Hd,
        format: Td,
        onChangeStart: pd,
        onChangeComplete: Yd,
        padStep: gd,
        disabled: wd = !1
      } = dd;
      const Ed = (0, Wd.useRef)(null),
        Jd = (0, Wd.useRef)(null);
      (0, Wd.useLayoutEffect)((() => {
        var dd, Od, md;
        const Wd = null !== (dd = null === (Od = Ed.current) || void 0 === Od ? void 0 : Od.querySelector(".rangeslider")) && void 0 !== dd ? dd : null;
        null === Wd || void 0 === Wd || Wd.setAttribute("data-pad-slider", ""), null === Wd || void 0 === Wd || Wd.setAttribute("data-pad-focusable", ""), null === Wd || void 0 === Wd || null === (md = Wd.querySelector(".rangeslider__handle")) || void 0 === md || md.setAttribute("data-pad-slider-handle", ""), Jd.current = Wd
      }), []), (0, Wd.useLayoutEffect)((() => {
        var dd, Od;
        wd ? null === (dd = Jd.current) || void 0 === dd || dd.setAttribute("aria-disabled", "true") : null === (Od = Jd.current) || void 0 === Od || Od.removeAttribute("aria-disabled")
      }), [wd]);
      const Ud = Math.max(bd(Xd), bd(md)),
        xd = dd => {
          if (dd >= Rd) return Rd;
          if (dd <= md) return md;
          const Od = Number((Math.round((dd - md) / Xd) * Xd + md).toFixed(Ud));
          return Math.min(Rd, Math.max(md, Od))
        },
        Bd = (0, Wd.useRef)(Yd);
      Bd.current = Yd, (0, Wd.useEffect)((() => {
        const dd = Ed.current;
        if (!dd) return;
        const Od = dd => {
          var Od;
          yd.has(dd.key) && (null === (Od = Bd.current) || void 0 === Od || Od.call(Bd))
        };
        return dd.addEventListener("keyup", Od), () => {
          dd.removeEventListener("keyup", Od)
        }
      }), []);
      const Sd = (0, Wd.useRef)(!1);
      return (0, od.f)(Jd, {
        adjust: dd => {
          if (wd) return;
          const Wd = null !== gd && void 0 !== gd ? gd : Math.max(Xd, Math.round((Rd - md) / 20 / Xd) * Xd),
            Fd = xd(Od + dd * Wd * (vd ? -1 : 1));
          Fd !== Od && (null === pd || void 0 === pd || pd(), Kd(Fd), null === Yd || void 0 === Yd || Yd())
        },
        setFraction: dd => {
          if (wd) return;
          const Wd = xd(md + (vd ? 1 - dd : dd) * (Rd - md));
          Wd !== Od && (Sd.current || (Sd.current = !0, null === pd || void 0 === pd || pd()), Kd(Wd))
        },
        endDrag: () => {
          Sd.current && (Sd.current = !1, null === Yd || void 0 === Yd || Yd())
        }
      }), (0, Nd.jsx)("div", {
        ref: Ed,
        style: {
          display: "contents"
        },
        children: (0, Nd.jsx)(Fd.e, {
          value: Od,
          min: md,
          max: Rd,
          step: Xd,
          onChange: dd => {
            Kd(xd(dd))
          },
          orientation: hd,
          reverse: vd,
          tooltip: td,
          labels: qd,
          handleLabel: Hd,
          format: Td,
          onChangeStart: () => {
            null === pd || void 0 === pd || pd(), null === Qd || void 0 === Qd || Qd(!0)
          },
          onChangeComplete: () => {
            null === Qd || void 0 === Qd || Qd(!1), null === Yd || void 0 === Yd || Yd()
          }
        })
      })
    }
    async function pd() {
      const dd = Qd.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await dd.getResult() && (0, td.reloadBloxd)()
    }

    function Yd(dd) {
      let {
        label: Od,
        options: md,
        value: Wd,
        onChange: Fd,
        circleInfoText: Rd
      } = dd;
      return (0, Nd.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nd.jsxs)("div", {
          className: "SliderText",
          children: [Od, Rd && (0, Nd.jsx)(Xd.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Rd
          })]
        }), (0, Nd.jsx)(Kd.e, {
          ariaLabel: Od,
          options: md,
          value: Wd,
          onChange: Fd
        })]
      })
    }
  },
  5895: (dd, Od, md) => {
    md.d(Od, {
      d: () => yd,
      g: () => bd
    });
    var Wd = md(4373),
      Fd = md(2337),
      Rd = md(66),
      Xd = md(1155),
      Kd = md.n(Xd),
      hd = md(1436),
      vd = md(4365),
      Qd = md(1462),
      td = md(5901),
      od = md(5944),
      Nd = md(732),
      qd = md(5967),
      Hd = md(1341);

    function yd(dd) {
      var Od;
      let {
        setApplySettingsCallback: md
      } = dd;
      const [, Xd] = (0, Rd.useReducer)((dd => dd + 1), 0), Kd = (0, Rd.useRef)(!1), hd = (0, Rd.useRef)(null);

      function yd(dd, Od) {
        vd.c.setFromJson(dd, "player");
        const Wd = vd.c.saveTexturePack();
        if (Nd.G) {
          const dd = vd.c.toJson();
          Wd.then((Od => {
            Od && (0, qd.b)(dd)
          }))
        } else Kd.current ||= Od, hd.current !== vd.c.getId() || vd.c.getId() === Fd.n.CUSTOM && Kd.current ? md((() => td.l)) : md(null);
        Xd()
      }
      async function Td(dd) {
        if (vd.c.getId() !== dd.metaData.id) {
          if (vd.c.getId() === Fd.n.CUSTOM && vd.c.getFromFolderName()) {
            const dd = Qd.NotificationProvider.showPromptPopup({
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
          yd(dd, !1)
        }
      }(0, Rd.useEffect)((() => {
        hd.current = vd.c.getId()
      }), []);
      const pd = Wd.b,
        Yd = [pd, ...Object.values(Fd.n).filter((dd => dd !== pd))];
      return (0, Hd.jsx)(Hd.Fragment, {
        children: (0, Hd.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Hd.jsx)("div", {
            className: "TexturePackList",
            children: Yd.map((dd => (0, Hd.jsx)(bd, {
              id: dd,
              isSelected: dd === vd.c.getId(),
              setSelected: Td
            }, dd)))
          }), vd.c.getId() === Fd.n.CUSTOM && (0, Hd.jsx)(od.e, {
            folderName: null !== (Od = vd.c.getFromFolderName()) && void 0 !== Od ? Od : null,
            onTexturePackUpdated: function(dd) {
              yd(dd, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function bd(dd) {
      let {
        id: Od,
        isSelected: md,
        setSelected: Xd,
        disabled: vd = !1
      } = dd;
      const [Qd, td] = (0, Rd.useState)(!0), [od, Nd] = (0, Rd.useState)(""), [qd, yd] = (0, Rd.useState)(""), [bd, Td] = (0, Rd.useState)(""), pd = (0, Rd.useRef)({});
      return (0, Rd.useEffect)((() => {
        (0, Wd.n)(Od).then((dd => {
          var Od;
          dd && (pd.current = dd, td(!1), Nd(pd.current.metaData.name), yd(pd.current.metaData.author), Td(null !== (Od = pd.current.metaData.previewImage) && void 0 !== Od ? Od : ""))
        })).catch((dd => {
          console.warn(`Failed to fetch texture pack ${Od}`, dd)
        }))
      }), [Od]), (0, Hd.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": vd || void 0,
        className: Kd()("TexturePack", {
          Selected: md,
          Custom: Od === Fd.n.CUSTOM,
          Disabled: vd
        }),
        onClick: () => {
          Qd || vd || Xd(pd.current)
        },
        children: [(0, Hd.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: bd ? `url(${bd})` : void 0
          }
        }), Qd && (0, Hd.jsx)("div", {
          className: "TexturePackName",
          children: (0, Hd.jsx)(hd.c, {})
        }), !Qd && od && (0, Hd.jsx)("div", {
          className: "TexturePackName",
          children: od
        }), !Qd && qd && (0, Hd.jsx)("div", {
          className: "TexturePackAuthor",
          children: qd
        })]
      })
    }
  },
  5947: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => Xd,
      i: () => Rd
    });
    var Wd = md(5951);
    const Fd = [dd => dd.strict ? "strict" : "nonStrict", dd => dd.program];

    function Rd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Wd = {};
      for (const Fd in md) Wd[Fd] = `\0${Fd}\0`;
      return dd(Od, Wd).replace(/\0(\w+)\0/g, ((dd, Od) => md[Od]))
    }

    function Xd(dd) {
      return null === dd.file ? null : dd.line > 0 ? `${dd.file}:${dd.line}` : dd.file
    }

    function Kd(dd) {
      const Od = new Map(dd.map((dd => [hd(dd).join("."), dd])));
      if (0 === Od.size) return [];
      const md = Qd([...Od.values()]);
      return 0 === md[0].length ? [] : md
    }

    function hd(dd) {
      return Fd.map((Od => Od(dd)))
    }
    const vd = Fd.map((dd => new Set(Wd.g.map(dd)).size));

    function Qd(dd) {
      const Od = Fd.map((Od => new Set(dd.map(Od)))),
        md = Od.reduce(((dd, Od) => dd * Od.size), 1),
        Wd = Od.every(((dd, Od) => 1 === dd.size || dd.size === vd[Od]));
      if (md === dd.length && Wd) return [Fd.filter(((dd, md) => 1 === Od[md].size)).map((Od => Od(dd[0])))];
      let Rd = null;
      for (let Xd = 0; Xd < Fd.length; Xd++) {
        if (1 === Od[Xd].size) continue;
        const md = td(dd, Fd[Xd]).flatMap(Qd);
        (null === Rd || md.length < Rd.length) && (Rd = md)
      }
      return Rd
    }

    function td(dd, Od) {
      const md = new Map;
      for (const Fd of dd) {
        var Wd;
        const dd = Od(Fd);
        md.set(dd, [...null !== (Wd = md.get(dd)) && void 0 !== Wd ? Wd : [], Fd])
      }
      return [...md.values()]
    }
  },
  5936: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd
    });
    var Wd = md(66);
    const Fd = new WeakMap,
      Rd = dd => {
        var Od;
        const md = dd.closest("[data-pad-slider]");
        return md && null !== (Od = Fd.get(md)) && void 0 !== Od ? Od : null
      },
      Xd = (dd, Od) => {
        const md = (0, Wd.useRef)(Od);
        md.current = Od, (0, Wd.useEffect)((() => {
          if (dd.current) return ((dd, Od) => (Fd.set(dd, Od), () => {
            Fd.get(dd) === Od && Fd.delete(dd)
          }))(dd.current, {
            adjust: dd => {
              md.current.adjust(dd)
            },
            setFraction: dd => {
              md.current.setFraction(dd)
            },
            endDrag: () => {
              md.current.endDrag()
            }
          })
        }), [dd])
      }
  },
  5951: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.f,
      g: () => Fd,
      k: () => Wd.o
    });
    var Wd = md(5954);
    const Fd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Od => ({
      strict: dd,
      program: Od
    })))))
  },
  5975: (dd, Od, md) => {
    function Wd(dd, Od) {
      return Fd(dd, Od)
    }

    function Fd(dd, Od) {
      if (dd === Od) return !0;
      if ("object" !== typeof dd || "object" !== typeof Od || null === dd || null === Od || Array.isArray(dd) !== Array.isArray(Od)) return !1;
      const md = dd,
        Wd = Od,
        Rd = Object.keys(md);
      return Rd.length === Object.keys(Wd).length && Rd.every((dd => Object.prototype.hasOwnProperty.call(Wd, dd) && Fd(md[dd], Wd[dd])))
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  5967: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Kd
    });
    var Wd = md(2337),
      Fd = md(5975);
    let Rd = null;

    function Xd(dd) {
      Rd = {
        pack: dd.metaData.id === Wd.d ? null : dd
      }
    }

    function Kd(dd) {
      return !(null === Rd || !(0, Fd.c)(Rd.pack, dd)) && (Rd = null, !0)
    }
  },
  5954: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      e: () => Xd,
      f: () => Wd,
      h: () => Hd,
      l: () => td,
      o: () => Fd,
      p: () => Rd,
      r: () => vd,
      v: () => Qd,
      w: () => od
    });
    const Wd = 5;

    function Fd(dd) {
      return dd === Wd
    }

    function Rd(dd) {
      return [...dd.features]
    }
    const Xd = 262144,
      Kd = 256,
      hd = 256;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Od = [];
      for (const [md, Wd] of Object.entries(dd)) {
        if ("string" !== typeof Wd) return `${md} isn't text.`;
        Od.push({
          path: md,
          source: Wd
        })
      }
      return Od.sort(((dd, Od) => td(dd.path, Od.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Kd) return `The pack has more than ${Kd} .wgsl files.`;
          const Od = new Set;
          for (const {
              path: md
            }
            of dd) {
            const dd = Nd(md);
            if (null !== dd) return dd;
            if (Od.has(md)) return `The pack has two files at ${md}.`;
            Od.add(md)
          }
          return od(dd) > Xd ? `The pack's .wgsl files are over ${Xd/1024} KB in total.` : null
        }(Od) ?? Od
    }

    function Qd(dd) {
      const Od = {};
      for (const md of dd) Od[md.path] = md.source;
      return Od
    }

    function td(dd, Od) {
      return dd < Od ? -1 : dd > Od ? 1 : 0
    }

    function od(dd) {
      const Od = new TextEncoder;
      let md = 0;
      for (const {
          source: Wd
        }
        of dd) md += Od.encode(Wd).byteLength;
      return md
    }

    function Nd(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > hd) return `A file path is over ${hd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const qd = /^(.*)\[rot\[([1-4])$/;

    function Hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Wd = new Map;
      Od.forEach(((dd, Od) => {
        let {
          numAnimStates: md,
          animStartIdx: Fd
        } = dd;
        for (let Rd = 1; Rd < md; Rd++) Wd.set(Fd + Rd - 1, Od)
      }));
      const Fd = Object.entries(dd),
        Rd = new Map;
      for (const [Hd, yd] of Fd) {
        const dd = qd.exec(Hd);
        "1" === dd?.[2] && Rd.set(dd[1], yd + 1)
      }
      const Xd = dd => {
          const Od = qd.exec(dd);
          return Od && Rd.has(Od[1]) ? {
            root: Od[1],
            rotation: Number(Od[2]) - 1
          } : null
        },
        Kd = new Set(Fd.map((dd => {
          let [Od] = dd;
          return Xd(Od)?.root ?? Od
        }))),
        hd = (dd, md) => {
          const Wd = dd.replace(/_?0$/, "");
          return (Od[md]?.numAnimStates ?? 0) > 1 && !Kd.has(Wd) ? Wd : dd
        },
        vd = new Map;
      for (const [qd, Hd] of Fd) vd.set(Hd, hd(Xd(qd)?.root ?? qd, Hd));
      const Qd = Fd.reduce(((dd, Od) => {
          let [, md] = Od;
          return Math.max(dd, md + 1)
        }), 0),
        td = Array.from({
          length: Qd
        }, ((dd, Od) => ({
          id: Od + 1,
          rotation: 0
        }))),
        od = new Map,
        Nd = new Map;
      for (const [qd, Hd] of Fd) {
        const dd = Xd(qd),
          Od = Wd.get(Hd);
        if (void 0 !== Od) {
          const md = vd.get(Od);
          Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "frame"
          }), dd && !Nd.has(dd.root) && Nd.set(dd.root, {
            name: dd.root,
            texture: md,
            kind: "frame"
          });
          continue
        }
        const md = vd.get(Hd),
          Fd = dd?.root ?? qd;
        if (md !== Fd && Nd.set(Fd, {
            name: Fd,
            texture: md,
            kind: "frame"
          }), dd) {
          const Od = Rd.get(dd.root);
          td[Hd] = {
            id: Od,
            rotation: dd.rotation
          }, od.set(md, Od), Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "rotation"
          })
        } else od.set(md, Hd + 1)
      }
      for (const qd of od.keys()) Nd.delete(qd);
      for (const [qd, Hd] of md) {
        const dd = od.get(Hd);
        void 0 === dd || od.has(qd) || (od.set(qd, dd), Nd.delete(qd))
      }
      return {
        named: [...od].sort(((dd, Od) => {
          let [md] = dd, [Wd] = Od;
          return md < Wd ? -1 : md > Wd ? 1 : 0
        })).map((dd => {
          let [Od, md] = dd;
          return {
            name: Od,
            id: md
          }
        })),
        aliases: [...Nd.values()],
        layers: td
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);