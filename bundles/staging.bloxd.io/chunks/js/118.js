export const id = 118;
export const ids = [118];
export const modules = {
  5817: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ub
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1475),
      Vb = Mb(1468),
      gb = Mb(4896),
      lb = Mb(160),
      Lb = Mb(4929),
      Ib = Mb(4920),
      Ob = Mb(1364);

    function Ub(bb) {
      let {
        game: wb
      } = bb;
      const Mb = (0, lb.is99NightsCrazyGamesBundle)() ? "large" : "small",
        eb = (0, Lb.f)(wb, Mb),
        Ub = (0, gb.i)(eb),
        tb = void 0 !== Ub.blurhash;
      return (0, Ob.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Ub.isLoading && !tb && (0, Ob.jsx)(Vb.c, {
          loaderType: "Secondary"
        }), !Ub.failed && (null !== Ub.src || tb) && (0, Ob.jsx)("div", {
          className: Hb()("SchematicImage", Ib.h, {
            SchematicImageFadeIn: Ub.fadeIn && !tb
          }),
          style: (0, Ib.d)(Ub),
          children: (0, Ob.jsx)(Ib.b, {
            image: Ub
          })
        }), Ub.failed && (0, Ob.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ob.jsx)(pb.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6092: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Fb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(6014),
      gb = Mb(1468),
      lb = Mb(1259),
      Lb = Mb(4529),
      Ib = Mb(4668),
      Ob = Mb(1475),
      Ub = Mb(4536),
      tb = Mb(6098),
      Cb = Mb(6116),
      Eb = Mb(1364);

    function Fb(bb) {
      let {
        folderName: wb,
        onTexturePackUpdated: Hb,
        disabled: Fb = !1,
        maxFileSizeMb: Bb,
        packOwner: sb
      } = bb;
      const {
        t: mb
      } = (0, lb.C)(), [hb, zb] = (0, eb.useState)(!1), [Xb, xb] = (0, eb.useState)(null), [jb, Kb] = (0, eb.useState)(null), rb = (0, eb.useRef)(null);
      async function Rb(bb) {
        zb(!0);
        try {
          const wb = await (0, Lb.k)(bb);
          if ("customGame" === sb && (0, Ib.i)(wb)) return void xb(mb(Ib.b));
          if (void 0 !== Bb) {
            const bb = JSON.stringify(wb).length / 1048576;
            if (bb > Bb) return void xb(mb("customTexturePack:packTooBig", {
              size: bb.toFixed(1),
              max: Bb
            }))
          }
          xb(null), Kb(null), Hb(wb), rb.current = wb,
            function(bb, wb) {
              const eb = bb.modelOverrides;
              eb && Promise.all([Mb.e(234), Mb.e(233)]).then((() => Mb(35416))).then((Mb => {
                let {
                  packDisplayName: Hb,
                  refusedPackModels: pb,
                  packModelSummary: Vb
                } = Mb;
                const gb = Hb(bb.metaData);
                wb(Vb(gb, pb(gb, eb, !1)))
              })).catch((bb => {
                console.error("Checking the texture pack's models failed:", bb)
              }))
            }(wb, (bb => {
              rb.current === wb && Kb(bb)
            }))
        } catch (wb) {
          if (wb instanceof Ub.d) {
            const bb = "customTexturePack:invalidPack" !== wb.translationKey || (0, Cb.g)() ? wb.translationKey : "customTexturePack:invalidPackZip";
            xb((0, tb.i)(mb, bb, wb.params))
          } else console.error("Couldn't read the texture pack", wb), xb(mb("customTexturePack:errorTitle"))
        } finally {
          zb(!1)
        }
      }
      const {
        getRootProps: Db,
        getInputProps: cb,
        isDragActive: Yb,
        open: Zb
      } = (0, Vb.c)({
        onDrop: Rb,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Fb
      });
      return (0, Eb.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Eb.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [mb("settingsMenu:customTextureWarning"), ".", (0, Eb.jsx)("br", {}), mb("settingsMenu:viewDocumentation"), ":", " ", (0, Eb.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Xb && (0, Eb.jsxs)("div", {
          className: "CustomTextureError",
          children: [mb("general:error"), ": ", Xb]
        }), jb && (0, Eb.jsx)("div", {
          className: "CustomTextureError",
          children: jb
        }), (0, Eb.jsxs)("div", {
          ...Db({
            className: pb()("CustomTextureFolderUpload", {
              ActiveDrag: Yb,
              Disabled: Fb
            })
          }),
          children: [(0, Eb.jsx)("input", {
            ...cb({
              webkitdirectory: "true"
            })
          }), hb && (0, Eb.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Eb.jsx)(gb.c, {})
          }), !hb && !Yb && wb && (0, Eb.jsxs)(Eb.Fragment, {
            children: [(0, Eb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Eb.jsx)(Ob.b, {
                name: "folder-image"
              })
            }), (0, Eb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: wb
            })]
          }), !hb && (Yb || !wb) && (0, Eb.jsxs)(Eb.Fragment, {
            children: [(0, Eb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Eb.jsx)(Ob.b, {
                name: "up-from-bracket"
              })
            }), (0, Eb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: mb((0, Cb.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !hb && (0, Eb.jsx)(Cb.d, {
            disabled: Fb,
            openFolderPicker: Zb,
            onFiles: bb => {
              Rb(bb)
            }
          })]
        })]
      })
    }
  },
  6116: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      g: () => Lb
    });
    var eb = Mb(64),
      Hb = Mb(1616),
      pb = Mb(1259),
      Vb = Mb(110),
      gb = Mb(4498),
      lb = Mb(1364);

    function Lb() {
      return !(0, Vb.isMobile)()
    }

    function Ib(bb) {
      let {
        disabled: wb,
        openFolderPicker: Mb,
        onFiles: Vb
      } = bb;
      const {
        t: Ib
      } = (0, pb.C)(), Ob = (0, eb.useRef)(null);
      return (0, lb.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, lb.jsx)("input", {
          ref: Ob,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(bb) {
            const wb = Array.from(bb.target.files);
            bb.target.value = "", Vb(wb)
          }
        }), Lb() && (0, lb.jsx)(Hb.f, {
          disabled: wb,
          onClick: Mb,
          children: Ib("general:chooseFolder")
        }), (0, lb.jsx)(Hb.f, {
          disabled: wb,
          onClick: () => {
            (0, gb.f)(Ob.current)
          },
          children: Ib("general:chooseZip")
        })]
      })
    }
  },
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
  6045: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Fb,
      c: () => Bb
    });
    var eb = Mb(4529),
      Hb = Mb(2380),
      pb = Mb(64),
      Vb = Mb(1159),
      gb = Mb.n(Vb),
      lb = Mb(1468),
      Lb = Mb(4522),
      Ib = Mb(1504),
      Ob = Mb(6050),
      Ub = Mb(6092),
      tb = Mb(698),
      Cb = Mb(6123),
      Eb = Mb(1364);

    function Fb(bb) {
      var wb;
      let {
        setApplySettingsCallback: Mb
      } = bb;
      const [, Vb] = (0, pb.useReducer)((bb => bb + 1), 0), gb = (0, pb.useRef)(!1), lb = (0, pb.useRef)(null);

      function Fb(bb, wb) {
        Lb.d.setFromJson(bb, "player");
        const eb = Lb.d.saveTexturePack();
        if (tb.I) {
          const bb = Lb.d.toJson();
          eb.then((wb => {
            wb && (0, Cb.e)(bb)
          }))
        } else gb.current ||= wb, lb.current !== Lb.d.getId() || Lb.d.getId() === Hb.t.CUSTOM && gb.current ? Mb((() => Ob.l)) : Mb(null);
        Vb()
      }
      async function sb(bb) {
        if (Lb.d.getId() !== bb.metaData.id) {
          if (Lb.d.getId() === Hb.t.CUSTOM && Lb.d.getFromFolderName()) {
            const bb = Ib.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await bb.getResult()) return
          }
          Fb(bb, !1)
        }
      }(0, pb.useEffect)((() => {
        lb.current = Lb.d.getId()
      }), []);
      const mb = eb.c,
        hb = [mb, ...Object.values(Hb.t).filter((bb => bb !== mb))];
      return (0, Eb.jsx)(Eb.Fragment, {
        children: (0, Eb.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Eb.jsx)("div", {
            className: "TexturePackList",
            children: hb.map((bb => (0, Eb.jsx)(Bb, {
              id: bb,
              isSelected: bb === Lb.d.getId(),
              setSelected: sb
            }, bb)))
          }), Lb.d.getId() === Hb.t.CUSTOM && (0, Eb.jsx)(Ub.d, {
            folderName: null !== (wb = Lb.d.getFromFolderName()) && void 0 !== wb ? wb : null,
            onTexturePackUpdated: function(bb) {
              Fb(bb, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Bb(bb) {
      let {
        id: wb,
        isSelected: Mb,
        setSelected: Vb,
        disabled: Lb = !1
      } = bb;
      const [Ib, Ob] = (0, pb.useState)(!0), [Ub, tb] = (0, pb.useState)(""), [Cb, Fb] = (0, pb.useState)(""), [Bb, sb] = (0, pb.useState)(""), mb = (0, pb.useRef)({});
      return (0, pb.useEffect)((() => {
        (0, eb.j)(wb).then((bb => {
          var wb;
          bb && (mb.current = bb, Ob(!1), tb(mb.current.metaData.name), Fb(mb.current.metaData.author), sb(null !== (wb = mb.current.metaData.previewImage) && void 0 !== wb ? wb : ""))
        })).catch((bb => {
          console.warn(`Failed to fetch texture pack ${wb}`, bb)
        }))
      }), [wb]), (0, Eb.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Lb || void 0,
        className: gb()("TexturePack", {
          Selected: Mb,
          Custom: wb === Hb.t.CUSTOM,
          Disabled: Lb
        }),
        onClick: () => {
          Ib || Lb || Vb(mb.current)
        },
        children: [(0, Eb.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Bb ? `url(${Bb})` : void 0
          }
        }), Ib && (0, Eb.jsx)("div", {
          className: "TexturePackName",
          children: (0, Eb.jsx)(lb.c, {})
        }), !Ib && Ub && (0, Eb.jsx)("div", {
          className: "TexturePackName",
          children: Ub
        }), !Ib && Cb && (0, Eb.jsx)("div", {
          className: "TexturePackAuthor",
          children: Cb
        })]
      })
    }
  },
  6098: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Vb,
      i: () => pb
    });
    var eb = Mb(6105);
    const Hb = [bb => bb.strict ? "strict" : "nonStrict", bb => bb.program];

    function pb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const eb = {};
      for (const Hb in Mb) eb[Hb] = `\0${Hb}\0`;
      return bb(wb, eb).replace(/\0(\w+)\0/g, ((bb, wb) => Mb[wb]))
    }

    function Vb(bb) {
      return null === bb.file ? null : bb.line > 0 ? `${bb.file}:${bb.line}` : bb.file
    }

    function gb(bb) {
      const wb = new Map(bb.map((bb => [lb(bb).join("."), bb])));
      if (0 === wb.size) return [];
      const Mb = Ib([...wb.values()]);
      return 0 === Mb[0].length ? [] : Mb
    }

    function lb(bb) {
      return Hb.map((wb => wb(bb)))
    }
    const Lb = Hb.map((bb => new Set(eb.f.map(bb)).size));

    function Ib(bb) {
      const wb = Hb.map((wb => new Set(bb.map(wb)))),
        Mb = wb.reduce(((bb, wb) => bb * wb.size), 1),
        eb = wb.every(((bb, wb) => 1 === bb.size || bb.size === Lb[wb]));
      if (Mb === bb.length && eb) return [Hb.filter(((bb, Mb) => 1 === wb[Mb].size)).map((wb => wb(bb[0])))];
      let pb = null;
      for (let Vb = 0; Vb < Hb.length; Vb++) {
        if (1 === wb[Vb].size) continue;
        const Mb = Ob(bb, Hb[Vb]).flatMap(Ib);
        (null === pb || Mb.length < pb.length) && (pb = Mb)
      }
      return pb
    }

    function Ob(bb, wb) {
      const Mb = new Map;
      for (const Hb of bb) {
        var eb;
        const bb = wb(Hb);
        Mb.set(bb, [...null !== (eb = Mb.get(bb)) && void 0 !== eb ? eb : [], Hb])
      }
      return [...Mb.values()]
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
  6105: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g,
      f: () => Hb,
      h: () => eb.j
    });
    var eb = Mb(6110);
    const Hb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((wb => ({
      strict: bb,
      program: wb
    })))))
  },
  6129: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return Hb(bb, wb)
    }

    function Hb(bb, wb) {
      if (bb === wb) return !0;
      if ("object" !== typeof bb || "object" !== typeof wb || null === bb || null === wb || Array.isArray(bb) !== Array.isArray(wb)) return !1;
      const Mb = bb,
        eb = wb,
        pb = Object.keys(Mb);
      return pb.length === Object.keys(eb).length && pb.every((bb => Object.prototype.hasOwnProperty.call(eb, bb) && Hb(Mb[bb], eb[bb])))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  6123: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      i: () => gb
    });
    var eb = Mb(2380),
      Hb = Mb(6129);
    let pb = null;

    function Vb(bb) {
      pb = {
        pack: bb.metaData.id === eb.d ? null : bb
      }
    }

    function gb(bb) {
      return !(null === pb || !(0, Hb.c)(pb.pack, bb)) && (pb = null, !0)
    }
  },
  6110: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb,
      g: () => eb,
      h: () => Eb,
      i: () => Ob,
      j: () => Hb,
      l: () => pb,
      p: () => Lb,
      t: () => Ib,
      x: () => Ub
    });
    const eb = 5;

    function Hb(bb) {
      return bb === eb
    }

    function pb(bb) {
      return [...bb.features]
    }
    const Vb = 262144,
      gb = 256,
      lb = 256;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const wb = [];
      for (const [Mb, eb] of Object.entries(bb)) {
        if ("string" !== typeof eb) return `${Mb} isn't text.`;
        wb.push({
          path: Mb,
          source: eb
        })
      }
      return wb.sort(((bb, wb) => Ob(bb.path, wb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > gb) return `The pack has more than ${gb} .wgsl files.`;
          const wb = new Set;
          for (const {
              path: Mb
            }
            of bb) {
            const bb = tb(Mb);
            if (null !== bb) return bb;
            if (wb.has(Mb)) return `The pack has two files at ${Mb}.`;
            wb.add(Mb)
          }
          return Ub(bb) > Vb ? `The pack's .wgsl files are over ${Vb/1024} KB in total.` : null
        }(wb) ?? wb
    }

    function Ib(bb) {
      const wb = {};
      for (const Mb of bb) wb[Mb.path] = Mb.source;
      return wb
    }

    function Ob(bb, wb) {
      return bb < wb ? -1 : bb > wb ? 1 : 0
    }

    function Ub(bb) {
      const wb = new TextEncoder;
      let Mb = 0;
      for (const {
          source: eb
        }
        of bb) Mb += wb.encode(eb).byteLength;
      return Mb
    }

    function tb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > lb) return `A file path is over ${lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Cb = /^(.*)\[rot\[([1-4])$/;

    function Eb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const eb = new Map;
      wb.forEach(((bb, wb) => {
        let {
          numAnimStates: Mb,
          animStartIdx: Hb
        } = bb;
        for (let pb = 1; pb < Mb; pb++) eb.set(Hb + pb - 1, wb)
      }));
      const Hb = Object.entries(bb),
        pb = new Map;
      for (const [Eb, Fb] of Hb) {
        const bb = Cb.exec(Eb);
        "1" === bb?.[2] && pb.set(bb[1], Fb + 1)
      }
      const Vb = bb => {
          const wb = Cb.exec(bb);
          return wb && pb.has(wb[1]) ? {
            root: wb[1],
            rotation: Number(wb[2]) - 1
          } : null
        },
        gb = new Set(Hb.map((bb => {
          let [wb] = bb;
          return Vb(wb)?.root ?? wb
        }))),
        lb = (bb, Mb) => {
          const eb = bb.replace(/_?0$/, "");
          return (wb[Mb]?.numAnimStates ?? 0) > 1 && !gb.has(eb) ? eb : bb
        },
        Lb = new Map;
      for (const [Cb, Eb] of Hb) Lb.set(Eb, lb(Vb(Cb)?.root ?? Cb, Eb));
      const Ib = Hb.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return Math.max(bb, Mb + 1)
        }), 0),
        Ob = Array.from({
          length: Ib
        }, ((bb, wb) => ({
          id: wb + 1,
          rotation: 0
        }))),
        Ub = new Map,
        tb = new Map;
      for (const [Cb, Eb] of Hb) {
        const bb = Vb(Cb),
          wb = eb.get(Eb);
        if (void 0 !== wb) {
          const Mb = Lb.get(wb);
          tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "frame"
          }), bb && !tb.has(bb.root) && tb.set(bb.root, {
            name: bb.root,
            texture: Mb,
            kind: "frame"
          });
          continue
        }
        const Mb = Lb.get(Eb),
          Hb = bb?.root ?? Cb;
        if (Mb !== Hb && tb.set(Hb, {
            name: Hb,
            texture: Mb,
            kind: "frame"
          }), bb) {
          const wb = pb.get(bb.root);
          Ob[Eb] = {
            id: wb,
            rotation: bb.rotation
          }, Ub.set(Mb, wb), tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "rotation"
          })
        } else Ub.set(Mb, Eb + 1)
      }
      for (const Cb of Ub.keys()) tb.delete(Cb);
      for (const [Cb, Eb] of Mb) {
        const bb = Ub.get(Eb);
        void 0 === bb || Ub.has(Cb) || (Ub.set(Cb, bb), tb.delete(Cb))
      }
      return {
        named: [...Ub].sort(((bb, wb) => {
          let [Mb] = bb, [eb] = wb;
          return Mb < eb ? -1 : Mb > eb ? 1 : 0
        })).map((bb => {
          let [wb, Mb] = bb;
          return {
            name: wb,
            id: Mb
          }
        })),
        aliases: [...tb.values()],
        layers: Ob
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);