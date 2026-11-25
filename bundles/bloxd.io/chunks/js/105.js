export const id = 105;
export const ids = [105];
export const modules = {
  5081: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1152),
      mt = Vt(1436),
      dt = Vt(3564),
      jt = Vt(153),
      Ht = Vt(3613),
      Xt = Vt(3597),
      Qt = Vt(1188);

    function lt(tt) {
      let {
        game: et
      } = tt;
      const Vt = (0, jt.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Ot = (0, Ht.h)(et, Vt),
        lt = (0, dt.g)(Ot),
        Et = void 0 !== lt.blurhash;
      return (0, Qt.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [lt.isLoading && !Et && (0, Qt.jsx)(mt.b, {
          loaderType: "Secondary"
        }), !lt.failed && (null !== lt.src || Et) && (0, Qt.jsx)("div", {
          className: qt()("SchematicImage", Xt.j, {
            SchematicImageFadeIn: lt.fadeIn && !Et
          }),
          style: (0, Xt.h)(lt),
          children: (0, Qt.jsx)(Xt.e, {
            image: lt
          })
        }), lt.failed && (0, Qt.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Qt.jsx)(Dt.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5200: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => yt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(5124),
      dt = Vt(1436),
      jt = Vt(1286),
      Ht = Vt(3219),
      Xt = Vt(3353),
      Qt = Vt(1152),
      lt = Vt(3223),
      Et = Vt(5208),
      ft = Vt(5228),
      wt = Vt(1188);

    function yt(tt) {
      let {
        folderName: et,
        onTexturePackUpdated: qt,
        disabled: yt = !1,
        maxFileSizeMb: Nt,
        packOwner: Mt
      } = tt;
      const {
        t: bt
      } = (0, jt.H)(), [Jt, Ct] = (0, Ot.useState)(!1), [ut, Kt] = (0, Ot.useState)(null), [ht, vt] = (0, Ot.useState)(null), Wt = (0, Ot.useRef)(null);
      async function St(tt) {
        Ct(!0);
        try {
          const et = await (0, Ht.t)(tt);
          if ("customGame" === Mt && (0, Xt.j)(et)) return void Kt(bt(Xt.e));
          if (void 0 !== Nt) {
            const tt = JSON.stringify(et).length / 1048576;
            if (tt > Nt) return void Kt(bt("customTexturePack:packTooBig", {
              size: tt.toFixed(1),
              max: Nt
            }))
          }
          Kt(null), vt(null), qt(et), Wt.current = et,
            function(tt, et) {
              const Ot = tt.modelOverrides;
              Ot && Promise.all([Vt.e(206), Vt.e(205)]).then((() => Vt(34452))).then((Vt => {
                let {
                  packDisplayName: qt,
                  refusedPackModels: Dt,
                  packModelSummary: mt
                } = Vt;
                const dt = qt(tt.metaData);
                et(mt(dt, Dt(dt, Ot, !1)))
              })).catch((tt => {
                console.error("Checking the texture pack's models failed:", tt)
              }))
            }(et, (tt => {
              Wt.current === et && vt(tt)
            }))
        } catch (et) {
          if (et instanceof lt.d) {
            const tt = "customTexturePack:invalidPack" !== et.translationKey || (0, ft.g)() ? et.translationKey : "customTexturePack:invalidPackZip";
            Kt((0, Et.j)(bt, tt, et.params))
          } else console.error("Couldn't read the texture pack", et), Kt(bt("customTexturePack:errorTitle"))
        } finally {
          Ct(!1)
        }
      }
      const {
        getRootProps: ct,
        getInputProps: Rt,
        isDragActive: It,
        open: Pt
      } = (0, mt.e)({
        onDrop: St,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: yt
      });
      return (0, wt.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, wt.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [bt("settingsMenu:customTextureWarning"), ".", (0, wt.jsx)("br", {}), bt("settingsMenu:viewDocumentation"), ":", " ", (0, wt.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), ut && (0, wt.jsxs)("div", {
          className: "CustomTextureError",
          children: [bt("general:error"), ": ", ut]
        }), ht && (0, wt.jsx)("div", {
          className: "CustomTextureError",
          children: ht
        }), (0, wt.jsxs)("div", {
          ...ct({
            className: Dt()("CustomTextureFolderUpload", {
              ActiveDrag: It,
              Disabled: yt
            })
          }),
          children: [(0, wt.jsx)("input", {
            ...Rt({
              webkitdirectory: "true"
            })
          }), Jt && (0, wt.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, wt.jsx)(dt.b, {})
          }), !Jt && !It && et && (0, wt.jsxs)(wt.Fragment, {
            children: [(0, wt.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, wt.jsx)(Qt.b, {
                name: "folder-image"
              })
            }), (0, wt.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: et
            })]
          }), !Jt && (It || !et) && (0, wt.jsxs)(wt.Fragment, {
            children: [(0, wt.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, wt.jsx)(Qt.b, {
                name: "up-from-bracket"
              })
            }), (0, wt.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: bt((0, ft.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !Jt && (0, wt.jsx)(ft.d, {
            disabled: yt,
            openFolderPicker: Pt,
            onFiles: tt => {
              St(tt)
            }
          })]
        })]
      })
    }
  },
  5228: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      g: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(1556),
      Dt = Vt(1286),
      mt = Vt(106),
      dt = Vt(3207),
      jt = Vt(1188);

    function Ht() {
      return !(0, mt.isMobile)()
    }

    function Xt(tt) {
      let {
        disabled: et,
        openFolderPicker: Vt,
        onFiles: mt
      } = tt;
      const {
        t: Xt
      } = (0, Dt.H)(), Qt = (0, Ot.useRef)(null);
      return (0, jt.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, jt.jsx)("input", {
          ref: Qt,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(tt) {
            const et = Array.from(tt.target.files);
            tt.target.value = "", mt(et)
          }
        }), Ht() && (0, jt.jsx)(qt.f, {
          disabled: et,
          onClick: Vt,
          children: Xt("general:chooseFolder")
        }), (0, jt.jsx)(qt.f, {
          disabled: et,
          onClick: () => {
            (0, dt.f)(Qt.current)
          },
          children: Xt("general:chooseZip")
        })]
      })
    }
  },
  5155: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ft,
      e: () => bt,
      f: () => wt,
      j: () => Mt
    });
    var Ot = Vt(63),
      qt = Vt(5162),
      Dt = Vt(4475),
      mt = Vt(1464),
      dt = Vt(5186),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(1450),
      Qt = Vt(1826),
      lt = Vt(5194),
      Et = Vt(1188);

    function ft(tt) {
      let {
        label: et,
        onClick: Vt,
        checked: Ot,
        circleInfoText: qt,
        className: dt,
        disabled: jt,
        note: Xt
      } = tt;
      return (0, Et.jsxs)("div", {
        "aria-disabled": jt || void 0,
        "data-pad-focusable": !0,
        className: Ht()("SettingBox CheckboxContainer", {
          [dt]: dt,
          SettingBoxDisabled: jt
        }),
        onClick: () => {
          jt || Vt(!Ot)
        },
        children: [(0, Et.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Et.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Et.jsx)(Dt.b, {
              className: "SettingsCheckbox",
              checked: Ot,
              disabled: jt,
              onChange: () => {}
            })
          }), (0, Et.jsxs)("div", {
            className: "CheckboxText",
            children: [et, qt && (0, Et.jsx)("span", {
              onClick: tt => tt.stopPropagation(),
              children: (0, Et.jsx)(mt.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qt
              })
            })]
          })]
        }), Xt && (0, Et.jsx)("div", {
          className: "SettingNote",
          children: Xt
        })]
      })
    }

    function wt(tt) {
      let {
        name: et,
        onChange: Vt,
        min: qt,
        max: Dt,
        step: dt,
        initValue: jt,
        circleInfoText: Xt,
        format: Qt,
        className: lt,
        padStep: ft,
        disabled: wt = !1,
        selectableMax: yt,
        cappedNote: Mt,
        onChangeComplete: bt
      } = tt;
      const [Jt, Ct] = (0, Ot.useState)(jt), ut = (0, Ot.useRef)(jt);
      (0, Ot.useEffect)((() => {
        ut.current = jt, Ct(jt)
      }), [jt]);
      const Kt = void 0 !== yt && yt < Dt,
        ht = Kt ? {
          "--slider-selectable": (yt - qt) / (Dt - qt)
        } : void 0;
      return (0, Et.jsxs)("div", {
        className: Ht()("SettingBox SettingsSliderDiv", {
          [lt]: lt,
          SettingBoxDisabled: wt,
          SliderCapped: Kt
        }),
        style: ht,
        children: [(0, Et.jsxs)("div", {
          className: "SliderText",
          children: [`${et}: ${Qt?Qt(Jt):Jt}`, Xt && (0, Et.jsx)(mt.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Xt
          })]
        }), (0, Et.jsx)("div", {
          className: "SliderDiv",
          children: (0, Et.jsx)(Nt, {
            value: Jt,
            min: qt,
            max: Dt,
            step: dt,
            onChange: tt => {
              if (Kt && tt >= yt && Jt === yt) return;
              const et = Kt ? Math.min(tt, yt) : tt;
              ut.current = et, Ct(et), Vt(et)
            },
            onChangeComplete: bt && (() => {
              bt(ut.current)
            }),
            format: Qt,
            padStep: ft,
            disabled: wt
          })
        }), Kt && Mt && (0, Et.jsx)("div", {
          className: "SettingNote",
          children: Mt
        })]
      })
    }
    const yt = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Nt(tt) {
      var et;
      let {
        value: Vt,
        min: Dt,
        max: mt,
        step: dt,
        onChange: jt,
        orientation: Ht,
        reverse: Xt,
        setIsChanging: Qt,
        tooltip: ft,
        labels: wt,
        handleLabel: Nt,
        format: Mt,
        onChangeStart: bt,
        onChangeComplete: Jt,
        padStep: Ct,
        disabled: ut = !1
      } = tt;
      const Kt = (0, Ot.useRef)(null),
        ht = (0, Ot.useRef)(null);
      (0, Ot.useLayoutEffect)((() => {
        var tt, et, Vt;
        const Ot = null !== (tt = null === (et = Kt.current) || void 0 === et ? void 0 : et.querySelector(".rangeslider")) && void 0 !== tt ? tt : null;
        null === Ot || void 0 === Ot || Ot.setAttribute("data-pad-slider", ""), null === Ot || void 0 === Ot || Ot.setAttribute("data-pad-focusable", ""), null === Ot || void 0 === Ot || null === (Vt = Ot.querySelector(".rangeslider__handle")) || void 0 === Vt || Vt.setAttribute("data-pad-slider-handle", ""), ht.current = Ot
      }), []), (0, Ot.useLayoutEffect)((() => {
        var tt, et;
        ut ? null === (tt = ht.current) || void 0 === tt || tt.setAttribute("aria-disabled", "true") : null === (et = ht.current) || void 0 === et || et.removeAttribute("aria-disabled")
      }), [ut]);
      const vt = (null !== (et = String(dt).split(".")[1]) && void 0 !== et ? et : "").length,
        Wt = tt => {
          const et = Number((Math.round((tt - Dt) / dt) * dt + Dt).toFixed(vt));
          return Math.min(mt, Math.max(Dt, et))
        },
        St = (0, Ot.useRef)(Jt);
      St.current = Jt, (0, Ot.useEffect)((() => {
        const tt = Kt.current;
        if (!tt) return;
        const et = tt => {
          var et;
          yt.has(tt.key) && (null === (et = St.current) || void 0 === et || et.call(St))
        };
        return tt.addEventListener("keyup", et), () => {
          tt.removeEventListener("keyup", et)
        }
      }), []);
      const ct = (0, Ot.useRef)(!1);
      return (0, lt.i)(ht, {
        adjust: tt => {
          if (ut) return;
          const et = null !== Ct && void 0 !== Ct ? Ct : Math.max(dt, Math.round((mt - Dt) / 20 / dt) * dt),
            Ot = Wt(Vt + tt * et * (Xt ? -1 : 1));
          Ot !== Vt && (null === bt || void 0 === bt || bt(), jt(Ot), null === Jt || void 0 === Jt || Jt())
        },
        setFraction: tt => {
          if (ut) return;
          const et = Wt(Dt + (Xt ? 1 - tt : tt) * (mt - Dt));
          et !== Vt && (ct.current || (ct.current = !0, null === bt || void 0 === bt || bt()), jt(et))
        },
        endDrag: () => {
          ct.current && (ct.current = !1, null === Jt || void 0 === Jt || Jt())
        }
      }), (0, Et.jsx)("div", {
        ref: Kt,
        style: {
          display: "contents"
        },
        children: (0, Et.jsx)(qt.d, {
          value: Vt,
          min: Dt,
          max: mt,
          step: dt,
          onChange: jt,
          orientation: Ht,
          reverse: Xt,
          tooltip: ft,
          labels: wt,
          handleLabel: Nt,
          format: Mt,
          onChangeStart: () => {
            null === bt || void 0 === bt || bt(), null === Qt || void 0 === Qt || Qt(!0)
          },
          onChangeComplete: () => {
            null === Qt || void 0 === Qt || Qt(!1), null === Jt || void 0 === Jt || Jt()
          }
        })
      })
    }
    async function Mt() {
      const tt = Xt.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await tt.getResult() && (0, Qt.reloadBloxd)()
    }

    function bt(tt) {
      let {
        label: et,
        options: Vt,
        value: Ot,
        onChange: qt,
        circleInfoText: Dt
      } = tt;
      return (0, Et.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Et.jsxs)("div", {
          className: "SliderText",
          children: [et, Dt && (0, Et.jsx)(mt.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Dt
          })]
        }), (0, Et.jsx)(dt.c, {
          ariaLabel: et,
          options: Vt,
          value: Ot,
          onChange: qt
        })]
      })
    }
  },
  5150: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt,
      g: () => Nt
    });
    var Ot = Vt(3219),
      qt = Vt(2219),
      Dt = Vt(63),
      mt = Vt(1140),
      dt = Vt.n(mt),
      jt = Vt(1436),
      Ht = Vt(3217),
      Xt = Vt(1450),
      Qt = Vt(5155),
      lt = Vt(5200),
      Et = Vt(725),
      ft = Vt(5235),
      wt = Vt(1188);

    function yt(tt) {
      var et;
      let {
        setApplySettingsCallback: Vt
      } = tt;
      const [, mt] = (0, Dt.useReducer)((tt => tt + 1), 0), dt = (0, Dt.useRef)(!1), jt = (0, Dt.useRef)(null);

      function yt(tt, et) {
        Ht.e.setFromJson(tt, "player");
        const Ot = Ht.e.saveTexturePack();
        if (Et.K) {
          const tt = Ht.e.toJson();
          Ot.then((et => {
            et && (0, ft.d)(tt)
          }))
        } else dt.current ||= et, jt.current !== Ht.e.getId() || Ht.e.getId() === qt.p.CUSTOM && dt.current ? Vt((() => Qt.j)) : Vt(null);
        mt()
      }
      async function Mt(tt) {
        if (Ht.e.getId() !== tt.metaData.id) {
          if (Ht.e.getId() === qt.p.CUSTOM && Ht.e.getFromFolderName()) {
            const tt = Xt.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await tt.getResult()) return
          }
          yt(tt, !1)
        }
      }(0, Dt.useEffect)((() => {
        jt.current = Ht.e.getId()
      }), []);
      const bt = Ot.e,
        Jt = [bt, ...Object.values(qt.p).filter((tt => tt !== bt))];
      return (0, wt.jsx)(wt.Fragment, {
        children: (0, wt.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, wt.jsx)("div", {
            className: "TexturePackList",
            children: Jt.map((tt => (0, wt.jsx)(Nt, {
              id: tt,
              isSelected: tt === Ht.e.getId(),
              setSelected: Mt
            }, tt)))
          }), Ht.e.getId() === qt.p.CUSTOM && (0, wt.jsx)(lt.c, {
            folderName: null !== (et = Ht.e.getFromFolderName()) && void 0 !== et ? et : null,
            onTexturePackUpdated: function(tt) {
              yt(tt, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Nt(tt) {
      let {
        id: et,
        isSelected: Vt,
        setSelected: mt,
        disabled: Ht = !1
      } = tt;
      const [Xt, Qt] = (0, Dt.useState)(!0), [lt, Et] = (0, Dt.useState)(""), [ft, yt] = (0, Dt.useState)(""), [Nt, Mt] = (0, Dt.useState)(""), bt = (0, Dt.useRef)({});
      return (0, Dt.useEffect)((() => {
        (0, Ot.q)(et).then((tt => {
          var et;
          tt && (bt.current = tt, Qt(!1), Et(bt.current.metaData.name), yt(bt.current.metaData.author), Mt(null !== (et = bt.current.metaData.previewImage) && void 0 !== et ? et : ""))
        })).catch((tt => {
          console.warn(`Failed to fetch texture pack ${et}`, tt)
        }))
      }), [et]), (0, wt.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Ht || void 0,
        className: dt()("TexturePack", {
          Selected: Vt,
          Custom: et === qt.p.CUSTOM,
          Disabled: Ht
        }),
        onClick: () => {
          Xt || Ht || mt(bt.current)
        },
        children: [(0, wt.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Nt ? `url(${Nt})` : void 0
          }
        }), Xt && (0, wt.jsx)("div", {
          className: "TexturePackName",
          children: (0, wt.jsx)(jt.b, {})
        }), !Xt && lt && (0, wt.jsx)("div", {
          className: "TexturePackName",
          children: lt
        }), !Xt && ft && (0, wt.jsx)("div", {
          className: "TexturePackAuthor",
          children: ft
        })]
      })
    }
  },
  5208: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      f: () => mt,
      j: () => Dt
    });
    var Ot = Vt(5216);
    const qt = [tt => tt.strict ? "strict" : "nonStrict", tt => tt.program];

    function Dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ot = {};
      for (const qt in Vt) Ot[qt] = `\0${qt}\0`;
      return tt(et, Ot).replace(/\0(\w+)\0/g, ((tt, et) => Vt[et]))
    }

    function mt(tt) {
      return null === tt.file ? null : tt.line > 0 ? `${tt.file}:${tt.line}` : tt.file
    }

    function dt(tt) {
      const et = new Map(tt.map((tt => [jt(tt).join("."), tt])));
      if (0 === et.size) return [];
      const Vt = Xt([...et.values()]);
      return 0 === Vt[0].length ? [] : Vt
    }

    function jt(tt) {
      return qt.map((et => et(tt)))
    }
    const Ht = qt.map((tt => new Set(Ot.g.map(tt)).size));

    function Xt(tt) {
      const et = qt.map((et => new Set(tt.map(et)))),
        Vt = et.reduce(((tt, et) => tt * et.size), 1),
        Ot = et.every(((tt, et) => 1 === tt.size || tt.size === Ht[et]));
      if (Vt === tt.length && Ot) return [qt.filter(((tt, Vt) => 1 === et[Vt].size)).map((et => et(tt[0])))];
      let Dt = null;
      for (let mt = 0; mt < qt.length; mt++) {
        if (1 === et[mt].size) continue;
        const Vt = Qt(tt, qt[mt]).flatMap(Xt);
        (null === Dt || Vt.length < Dt.length) && (Dt = Vt)
      }
      return Dt
    }

    function Qt(tt, et) {
      const Vt = new Map;
      for (const qt of tt) {
        var Ot;
        const tt = et(qt);
        Vt.set(tt, [...null !== (Ot = Vt.get(tt)) && void 0 !== Ot ? Ot : [], qt])
      }
      return [...Vt.values()]
    }
  },
  5186: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1188);

    function mt(tt) {
      let {
        options: et,
        value: Vt,
        onChange: Ot,
        ariaLabel: mt,
        className: dt,
        reselectable: jt = !1,
        keepsFocus: Ht = !1,
        padTabs: Xt
      } = tt;
      const Qt = void 0 !== Xt;
      return (0, Dt.jsx)("div", {
        className: qt()("SegmentedToggle", dt),
        role: "group",
        "aria-label": mt,
        "data-pad-tabs": Xt,
        children: et.map((tt => {
          const et = tt.value === Vt;
          return (0, Dt.jsx)("button", {
            type: "button",
            "aria-pressed": et,
            "data-pad-tab": Qt || void 0,
            "data-pad-selected": Qt && et ? "true" : void 0,
            "data-pad-default-focus": Qt && et || void 0,
            "aria-label": tt.ariaLabel,
            title: tt.ariaLabel,
            className: qt()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: et
            }),
            onMouseDown: Ht ? tt => {
              tt.preventDefault()
            } : void 0,
            onClick: () => {
              et && !jt || Ot(tt.value)
            },
            children: tt.label
          }, tt.value)
        }))
      })
    }
  },
  5194: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => mt
    });
    var Ot = Vt(63);
    const qt = new WeakMap,
      Dt = tt => {
        var et;
        const Vt = tt.closest("[data-pad-slider]");
        return Vt && null !== (et = qt.get(Vt)) && void 0 !== et ? et : null
      },
      mt = (tt, et) => {
        const Vt = (0, Ot.useRef)(et);
        Vt.current = et, (0, Ot.useEffect)((() => {
          if (tt.current) return ((tt, et) => (qt.set(tt, et), () => {
            qt.get(tt) === et && qt.delete(tt)
          }))(tt.current, {
            adjust: tt => {
              Vt.current.adjust(tt)
            },
            setFraction: tt => {
              Vt.current.setFraction(tt)
            },
            endDrag: () => {
              Vt.current.endDrag()
            }
          })
        }), [tt])
      }
  },
  5216: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.k,
      g: () => qt,
      h: () => Ot.s
    });
    var Ot = Vt(5223);
    const qt = [!1, !0].flatMap((tt => ["terrain", "liquid", "model"].map((et => ({
      strict: tt,
      program: et
    })))))
  },
  5243: (tt, et, Vt) => {
    function Ot(tt, et) {
      return qt(tt, et)
    }

    function qt(tt, et) {
      if (tt === et) return !0;
      if ("object" !== typeof tt || "object" !== typeof et || null === tt || null === et || Array.isArray(tt) !== Array.isArray(et)) return !1;
      const Vt = tt,
        Ot = et,
        Dt = Object.keys(Vt);
      return Dt.length === Object.keys(Ot).length && Dt.every((tt => Object.prototype.hasOwnProperty.call(Ot, tt) && qt(Vt[tt], Ot[tt])))
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  5235: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      f: () => dt
    });
    var Ot = Vt(2219),
      qt = Vt(5243);
    let Dt = null;

    function mt(tt) {
      Dt = {
        pack: tt.metaData.id === Ot.d ? null : tt
      }
    }

    function dt(tt) {
      return !(null === Dt || !(0, qt.e)(Dt.pack, tt)) && (Dt = null, !0)
    }
  },
  5223: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Xt,
      E: () => lt,
      e: () => dt,
      h: () => mt,
      k: () => Ot,
      m: () => wt,
      p: () => Qt,
      s: () => qt,
      u: () => Dt,
      y: () => Ht
    });
    const Ot = 5;

    function qt(tt) {
      return tt === Ot
    }

    function Dt(tt) {
      return [...tt.features]
    }
    const mt = 262144,
      dt = 256,
      jt = 256;

    function Ht(tt) {
      if ("object" !== typeof tt || null === tt || Array.isArray(tt)) return "The pack has no files.";
      const et = [];
      for (const [Vt, Ot] of Object.entries(tt)) {
        if ("string" !== typeof Ot) return `${Vt} isn't text.`;
        et.push({
          path: Vt,
          source: Ot
        })
      }
      return et.sort(((tt, et) => Qt(tt.path, et.path))),
        function(tt) {
          if (0 === tt.length) return "The pack has no .wgsl files.";
          if (tt.length > dt) return `The pack has more than ${dt} .wgsl files.`;
          const et = new Set;
          for (const {
              path: Vt
            }
            of tt) {
            const tt = Et(Vt);
            if (null !== tt) return tt;
            if (et.has(Vt)) return `The pack has two files at ${Vt}.`;
            et.add(Vt)
          }
          return lt(tt) > mt ? `The pack's .wgsl files are over ${mt/1024} KB in total.` : null
        }(et) ?? et
    }

    function Xt(tt) {
      const et = {};
      for (const Vt of tt) et[Vt.path] = Vt.source;
      return et
    }

    function Qt(tt, et) {
      return tt < et ? -1 : tt > et ? 1 : 0
    }

    function lt(tt) {
      const et = new TextEncoder;
      let Vt = 0;
      for (const {
          source: Ot
        }
        of tt) Vt += et.encode(Ot).byteLength;
      return Vt
    }

    function Et(tt) {
      if (!tt.toLowerCase().endsWith(".wgsl")) return `${tt} isn't a .wgsl file.`;
      if (tt.length > jt) return `A file path is over ${jt} characters.`;
      if (tt.includes("\\") || /[\u0000-\u001f]/.test(tt)) return `${tt} isn't a valid file path.`;
      return tt.split("/").some((tt => "" === tt || "." === tt || ".." === tt)) ? `${tt} isn't a valid file path.` : null
    }
    const ft = /^(.*)\[rot\[([1-4])$/;

    function wt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ot = new Map;
      et.forEach(((tt, et) => {
        let {
          numAnimStates: Vt,
          animStartIdx: qt
        } = tt;
        for (let Dt = 1; Dt < Vt; Dt++) Ot.set(qt + Dt - 1, et)
      }));
      const qt = Object.entries(tt),
        Dt = new Map;
      for (const [wt, yt] of qt) {
        const tt = ft.exec(wt);
        "1" === tt?.[2] && Dt.set(tt[1], yt + 1)
      }
      const mt = tt => {
          const et = ft.exec(tt);
          return et && Dt.has(et[1]) ? {
            root: et[1],
            rotation: Number(et[2]) - 1
          } : null
        },
        dt = new Set(qt.map((tt => {
          let [et] = tt;
          return mt(et)?.root ?? et
        }))),
        jt = (tt, Vt) => {
          const Ot = tt.replace(/_?0$/, "");
          return (et[Vt]?.numAnimStates ?? 0) > 1 && !dt.has(Ot) ? Ot : tt
        },
        Ht = new Map;
      for (const [ft, wt] of qt) Ht.set(wt, jt(mt(ft)?.root ?? ft, wt));
      const Xt = qt.reduce(((tt, et) => {
          let [, Vt] = et;
          return Math.max(tt, Vt + 1)
        }), 0),
        Qt = Array.from({
          length: Xt
        }, ((tt, et) => ({
          id: et + 1,
          rotation: 0
        }))),
        lt = new Map,
        Et = new Map;
      for (const [ft, wt] of qt) {
        const tt = mt(ft),
          et = Ot.get(wt);
        if (void 0 !== et) {
          const Vt = Ht.get(et);
          Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "frame"
          }), tt && !Et.has(tt.root) && Et.set(tt.root, {
            name: tt.root,
            texture: Vt,
            kind: "frame"
          });
          continue
        }
        const Vt = Ht.get(wt),
          qt = tt?.root ?? ft;
        if (Vt !== qt && Et.set(qt, {
            name: qt,
            texture: Vt,
            kind: "frame"
          }), tt) {
          const et = Dt.get(tt.root);
          Qt[wt] = {
            id: et,
            rotation: tt.rotation
          }, lt.set(Vt, et), Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "rotation"
          })
        } else lt.set(Vt, wt + 1)
      }
      for (const ft of lt.keys()) Et.delete(ft);
      for (const [ft, wt] of Vt) {
        const tt = lt.get(wt);
        void 0 === tt || lt.has(ft) || (lt.set(ft, tt), Et.delete(ft))
      }
      return {
        named: [...lt].sort(((tt, et) => {
          let [Vt] = tt, [Ot] = et;
          return Vt < Ot ? -1 : Vt > Ot ? 1 : 0
        })).map((tt => {
          let [et, Vt] = tt;
          return {
            name: et,
            id: Vt
          }
        })),
        aliases: [...Et.values()],
        layers: Qt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);