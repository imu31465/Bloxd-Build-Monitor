export const id = 103;
export const ids = [103];
export const modules = {
  4848: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Em
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1089),
      xm = fm(1345),
      wm = fm(3505),
      Dm = fm(135),
      im = fm(3551),
      Rm = fm(3537),
      pm = fm(1135);

    function Em(mm) {
      let {
        game: Tm
      } = mm;
      const fm = (0, Dm.g)() ? "large" : "small",
        hm = (0, im.f)(Tm, fm),
        Em = (0, wm.g)(hm),
        om = void 0 !== Em.blurhash;
      return (0, pm.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Em.isLoading && !om && (0, pm.jsx)(xm.c, {
          loaderType: "Secondary"
        }), !Em.failed && (null !== Em.src || om) && (0, pm.jsx)("div", {
          className: Am()("SchematicImage", Rm.j, {
            SchematicImageFadeIn: Em.fadeIn && !om
          }),
          style: (0, Rm.g)(Em),
          children: (0, pm.jsx)(Rm.c, {
            image: Em
          })
        }), Em.failed && (0, pm.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pm.jsx)(am.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4976: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => qm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(4904),
      wm = fm(1345),
      Dm = fm(1208),
      im = fm(3151),
      Rm = fm(3315),
      pm = fm(1089),
      Em = fm(3158),
      om = fm(4980),
      Om = fm(4993),
      Ym = fm(1135);

    function qm(mm) {
      let {
        folderName: Tm,
        onTexturePackUpdated: Am,
        disabled: qm = !1,
        maxFileSizeMb: jm,
        packOwner: Vm
      } = mm;
      const {
        t: Im
      } = (0, Dm.A)(), [Km, Qm] = (0, hm.useState)(!1), [nm, Jm] = (0, hm.useState)(null), [cm, zm] = (0, hm.useState)(null), Zm = (0, hm.useRef)(null);
      async function km(mm) {
        Qm(!0);
        try {
          const Tm = await (0, im.t)(mm);
          if ("customGame" === Vm && (0, Rm.n)(Tm)) return void Jm(Im(Rm.c));
          if (void 0 !== jm) {
            const mm = JSON.stringify(Tm).length / 1048576;
            if (mm > jm) return void Jm(Im("customTexturePack:packTooBig", {
              size: mm.toFixed(1),
              max: jm
            }))
          }
          Jm(null), zm(null), Am(Tm), Zm.current = Tm,
            function(mm, Tm) {
              const hm = mm.modelOverrides;
              hm && Promise.all([fm.e(203), fm.e(202)]).then((() => fm(34348))).then((fm => {
                let {
                  packDisplayName: Am,
                  refusedPackModels: am,
                  packModelSummary: xm
                } = fm;
                const wm = Am(mm.metaData);
                Tm(xm(wm, am(wm, hm, !1)))
              })).catch((mm => {
                console.error("Checking the texture pack's models failed:", mm)
              }))
            }(Tm, (mm => {
              Zm.current === Tm && zm(mm)
            }))
        } catch (Tm) {
          if (Tm instanceof Em.c) {
            const mm = "customTexturePack:invalidPack" !== Tm.translationKey || (0, Om.h)() ? Tm.translationKey : "customTexturePack:invalidPackZip";
            Jm((0, om.j)(Im, mm, Tm.params))
          } else console.error("Couldn't read the texture pack", Tm), Jm(Im("customTexturePack:errorTitle"))
        } finally {
          Qm(!1)
        }
      }
      const {
        getRootProps: bm,
        getInputProps: Sm,
        isDragActive: em,
        open: Nm
      } = (0, xm.e)({
        onDrop: km,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: qm
      });
      return (0, Ym.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Ym.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Im("settingsMenu:customTextureWarning"), ".", (0, Ym.jsx)("br", {}), Im("settingsMenu:viewDocumentation"), ":", " ", (0, Ym.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), nm && (0, Ym.jsxs)("div", {
          className: "CustomTextureError",
          children: [Im("general:error"), ": ", nm]
        }), cm && (0, Ym.jsx)("div", {
          className: "CustomTextureError",
          children: cm
        }), (0, Ym.jsxs)("div", {
          ...bm({
            className: am()("CustomTextureFolderUpload", {
              ActiveDrag: em,
              Disabled: qm
            })
          }),
          children: [(0, Ym.jsx)("input", {
            ...Sm({
              webkitdirectory: "true"
            })
          }), Km && (0, Ym.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Ym.jsx)(wm.c, {})
          }), !Km && !em && Tm && (0, Ym.jsxs)(Ym.Fragment, {
            children: [(0, Ym.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Ym.jsx)(pm.c, {
                name: "folder-image"
              })
            }), (0, Ym.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Tm
            })]
          }), !Km && (em || !Tm) && (0, Ym.jsxs)(Ym.Fragment, {
            children: [(0, Ym.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Ym.jsx)(pm.c, {
                name: "up-from-bracket"
              })
            }), (0, Ym.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: Im((0, Om.h)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !Km && (0, Ym.jsx)(Om.e, {
            disabled: qm,
            openFolderPicker: Nm,
            onFiles: mm => {
              km(mm)
            }
          })]
        })]
      })
    }
  },
  4993: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      h: () => im
    });
    var hm = fm(59),
      Am = fm(1454),
      am = fm(1208),
      xm = fm(105),
      wm = fm(3139),
      Dm = fm(1135);

    function im() {
      return !(0, xm.isMobile)()
    }

    function Rm(mm) {
      let {
        disabled: Tm,
        openFolderPicker: fm,
        onFiles: xm
      } = mm;
      const {
        t: Rm
      } = (0, am.A)(), pm = (0, hm.useRef)(null);
      return (0, Dm.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, Dm.jsx)("input", {
          ref: pm,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(mm) {
            const Tm = Array.from(mm.target.files);
            mm.target.value = "", xm(Tm)
          }
        }), im() && (0, Dm.jsx)(Am.e, {
          disabled: Tm,
          onClick: fm,
          children: Rm("general:chooseFolder")
        }), (0, Dm.jsx)(Am.e, {
          disabled: Tm,
          onClick: () => {
            (0, wm.e)(pm.current)
          },
          children: Rm("general:chooseZip")
        })]
      })
    }
  },
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
  4946: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => qm,
      g: () => jm
    });
    var hm = fm(3151),
      Am = fm(2123),
      am = fm(59),
      xm = fm(1080),
      wm = fm.n(xm),
      Dm = fm(1345),
      im = fm(3148),
      Rm = fm(1354),
      pm = fm(4954),
      Em = fm(4976),
      om = fm(675),
      Om = fm(4996),
      Ym = fm(1135);

    function qm(mm) {
      var Tm;
      let {
        setApplySettingsCallback: fm
      } = mm;
      const [, xm] = (0, am.useReducer)((mm => mm + 1), 0), wm = (0, am.useRef)(!1), Dm = (0, am.useRef)(null);

      function qm(mm, Tm) {
        im.b.setFromJson(mm, "player");
        const hm = im.b.saveTexturePack();
        if (om.A) {
          const mm = im.b.toJson();
          hm.then((Tm => {
            Tm && (0, Om.b)(mm)
          }))
        } else wm.current ||= Tm, Dm.current !== im.b.getId() || im.b.getId() === Am.l.CUSTOM && wm.current ? fm((() => pm.o)) : fm(null);
        xm()
      }
      async function Vm(mm) {
        if (im.b.getId() !== mm.metaData.id) {
          if (im.b.getId() === Am.l.CUSTOM && im.b.getFromFolderName()) {
            const mm = Rm.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await mm.getResult()) return
          }
          qm(mm, !1)
        }
      }(0, am.useEffect)((() => {
        Dm.current = im.b.getId()
      }), []);
      const Im = hm.e,
        Km = [Im, ...Object.values(Am.l).filter((mm => mm !== Im))];
      return (0, Ym.jsx)(Ym.Fragment, {
        children: (0, Ym.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Ym.jsx)("div", {
            className: "TexturePackList",
            children: Km.map((mm => (0, Ym.jsx)(jm, {
              id: mm,
              isSelected: mm === im.b.getId(),
              setSelected: Vm
            }, mm)))
          }), im.b.getId() === Am.l.CUSTOM && (0, Ym.jsx)(Em.b, {
            folderName: null !== (Tm = im.b.getFromFolderName()) && void 0 !== Tm ? Tm : null,
            onTexturePackUpdated: function(mm) {
              qm(mm, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function jm(mm) {
      let {
        id: Tm,
        isSelected: fm,
        setSelected: xm,
        disabled: im = !1
      } = mm;
      const [Rm, pm] = (0, am.useState)(!0), [Em, om] = (0, am.useState)(""), [Om, qm] = (0, am.useState)(""), [jm, Vm] = (0, am.useState)(""), Im = (0, am.useRef)({});
      return (0, am.useEffect)((() => {
        (0, hm.s)(Tm).then((mm => {
          var Tm;
          mm && (Im.current = mm, pm(!1), om(Im.current.metaData.name), qm(Im.current.metaData.author), Vm(null !== (Tm = Im.current.metaData.previewImage) && void 0 !== Tm ? Tm : ""))
        })).catch((mm => {
          console.warn(`Failed to fetch texture pack ${Tm}`, mm)
        }))
      }), [Tm]), (0, Ym.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": im || void 0,
        className: wm()("TexturePack", {
          Selected: fm,
          Custom: Tm === Am.l.CUSTOM,
          Disabled: im
        }),
        onClick: () => {
          Rm || im || xm(Im.current)
        },
        children: [(0, Ym.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: jm ? `url(${jm})` : void 0
          }
        }), Rm && (0, Ym.jsx)("div", {
          className: "TexturePackName",
          children: (0, Ym.jsx)(Dm.c, {})
        }), !Rm && Em && (0, Ym.jsx)("div", {
          className: "TexturePackName",
          children: Em
        }), !Rm && Om && (0, Ym.jsx)("div", {
          className: "TexturePackAuthor",
          children: Om
        })]
      })
    }
  },
  4980: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      f: () => xm,
      j: () => am
    });
    var hm = fm(4985);
    const Am = [mm => mm.strict ? "strict" : "nonStrict", mm => mm.program];

    function am(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hm = {};
      for (const Am in fm) hm[Am] = `\0${Am}\0`;
      return mm(Tm, hm).replace(/\0(\w+)\0/g, ((mm, Tm) => fm[Tm]))
    }

    function xm(mm) {
      return null === mm.file ? null : mm.line > 0 ? `${mm.file}:${mm.line}` : mm.file
    }

    function wm(mm) {
      const Tm = new Map(mm.map((mm => [Dm(mm).join("."), mm])));
      if (0 === Tm.size) return [];
      const fm = Rm([...Tm.values()]);
      return 0 === fm[0].length ? [] : fm
    }

    function Dm(mm) {
      return Am.map((Tm => Tm(mm)))
    }
    const im = Am.map((mm => new Set(hm.d.map(mm)).size));

    function Rm(mm) {
      const Tm = Am.map((Tm => new Set(mm.map(Tm)))),
        fm = Tm.reduce(((mm, Tm) => mm * Tm.size), 1),
        hm = Tm.every(((mm, Tm) => 1 === mm.size || mm.size === im[Tm]));
      if (fm === mm.length && hm) return [Am.filter(((mm, fm) => 1 === Tm[fm].size)).map((Tm => Tm(mm[0])))];
      let am = null;
      for (let xm = 0; xm < Am.length; xm++) {
        if (1 === Tm[xm].size) continue;
        const fm = pm(mm, Am[xm]).flatMap(Rm);
        (null === am || fm.length < am.length) && (am = fm)
      }
      return am
    }

    function pm(mm, Tm) {
      const fm = new Map;
      for (const Am of mm) {
        var hm;
        const mm = Tm(Am);
        fm.set(mm, [...null !== (hm = fm.get(mm)) && void 0 !== hm ? hm : [], Am])
      }
      return [...fm.values()]
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
  4985: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.d,
      d: () => Am,
      e: () => hm.l
    });
    var hm = fm(4989);
    const Am = [!1, !0].flatMap((mm => ["terrain", "liquid", "model"].map((Tm => ({
      strict: mm,
      program: Tm
    })))))
  },
  5004: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return Am(mm, Tm)
    }

    function Am(mm, Tm) {
      if (mm === Tm) return !0;
      if ("object" !== typeof mm || "object" !== typeof Tm || null === mm || null === Tm || Array.isArray(mm) !== Array.isArray(Tm)) return !1;
      const fm = mm,
        hm = Tm,
        am = Object.keys(fm);
      return am.length === Object.keys(hm).length && am.every((mm => Object.prototype.hasOwnProperty.call(hm, mm) && Am(fm[mm], hm[mm])))
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  4996: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      d: () => wm
    });
    var hm = fm(2123),
      Am = fm(5004);
    let am = null;

    function xm(mm) {
      am = {
        pack: mm.metaData.id === hm.c ? null : mm
      }
    }

    function wm(mm) {
      return !(null === am || !(0, Am.e)(am.pack, mm)) && (am = null, !0)
    }
  },
  4989: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => xm,
      d: () => hm,
      g: () => Ym,
      i: () => pm,
      l: () => Am,
      o: () => am,
      q: () => im,
      r: () => Rm,
      t: () => Em
    });
    const hm = 5;

    function Am(mm) {
      return mm === hm
    }

    function am(mm) {
      return [...mm.features]
    }
    const xm = 262144,
      wm = 256,
      Dm = 256;

    function im(mm) {
      if ("object" !== typeof mm || null === mm || Array.isArray(mm)) return "The pack has no files.";
      const Tm = [];
      for (const [fm, hm] of Object.entries(mm)) {
        if ("string" !== typeof hm) return `${fm} isn't text.`;
        Tm.push({
          path: fm,
          source: hm
        })
      }
      return Tm.sort(((mm, Tm) => pm(mm.path, Tm.path))),
        function(mm) {
          if (0 === mm.length) return "The pack has no .wgsl files.";
          if (mm.length > wm) return `The pack has more than ${wm} .wgsl files.`;
          const Tm = new Set;
          for (const {
              path: fm
            }
            of mm) {
            const mm = om(fm);
            if (null !== mm) return mm;
            if (Tm.has(fm)) return `The pack has two files at ${fm}.`;
            Tm.add(fm)
          }
          return Em(mm) > xm ? `The pack's .wgsl files are over ${xm/1024} KB in total.` : null
        }(Tm) ?? Tm
    }

    function Rm(mm) {
      const Tm = {};
      for (const fm of mm) Tm[fm.path] = fm.source;
      return Tm
    }

    function pm(mm, Tm) {
      return mm < Tm ? -1 : mm > Tm ? 1 : 0
    }

    function Em(mm) {
      const Tm = new TextEncoder;
      let fm = 0;
      for (const {
          source: hm
        }
        of mm) fm += Tm.encode(hm).byteLength;
      return fm
    }

    function om(mm) {
      if (!mm.toLowerCase().endsWith(".wgsl")) return `${mm} isn't a .wgsl file.`;
      if (mm.length > Dm) return `A file path is over ${Dm} characters.`;
      if (mm.includes("\\") || /[\u0000-\u001f]/.test(mm)) return `${mm} isn't a valid file path.`;
      return mm.split("/").some((mm => "" === mm || "." === mm || ".." === mm)) ? `${mm} isn't a valid file path.` : null
    }
    const Om = /^(.*)\[rot\[([1-4])$/;

    function Ym(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const hm = new Map;
      Tm.forEach(((mm, Tm) => {
        let {
          numAnimStates: fm,
          animStartIdx: Am
        } = mm;
        for (let am = 1; am < fm; am++) hm.set(Am + am - 1, Tm)
      }));
      const Am = Object.entries(mm),
        am = new Map;
      for (const [Ym, qm] of Am) {
        const mm = Om.exec(Ym);
        "1" === mm?.[2] && am.set(mm[1], qm + 1)
      }
      const xm = mm => {
          const Tm = Om.exec(mm);
          return Tm && am.has(Tm[1]) ? {
            root: Tm[1],
            rotation: Number(Tm[2]) - 1
          } : null
        },
        wm = new Set(Am.map((mm => {
          let [Tm] = mm;
          return xm(Tm)?.root ?? Tm
        }))),
        Dm = (mm, fm) => {
          const hm = mm.replace(/_?0$/, "");
          return (Tm[fm]?.numAnimStates ?? 0) > 1 && !wm.has(hm) ? hm : mm
        },
        im = new Map;
      for (const [Om, Ym] of Am) im.set(Ym, Dm(xm(Om)?.root ?? Om, Ym));
      const Rm = Am.reduce(((mm, Tm) => {
          let [, fm] = Tm;
          return Math.max(mm, fm + 1)
        }), 0),
        pm = Array.from({
          length: Rm
        }, ((mm, Tm) => ({
          id: Tm + 1,
          rotation: 0
        }))),
        Em = new Map,
        om = new Map;
      for (const [Om, Ym] of Am) {
        const mm = xm(Om),
          Tm = hm.get(Ym);
        if (void 0 !== Tm) {
          const fm = im.get(Tm);
          om.set(Om, {
            name: Om,
            texture: fm,
            kind: "frame"
          }), mm && !om.has(mm.root) && om.set(mm.root, {
            name: mm.root,
            texture: fm,
            kind: "frame"
          });
          continue
        }
        const fm = im.get(Ym),
          Am = mm?.root ?? Om;
        if (fm !== Am && om.set(Am, {
            name: Am,
            texture: fm,
            kind: "frame"
          }), mm) {
          const Tm = am.get(mm.root);
          pm[Ym] = {
            id: Tm,
            rotation: mm.rotation
          }, Em.set(fm, Tm), om.set(Om, {
            name: Om,
            texture: fm,
            kind: "rotation"
          })
        } else Em.set(fm, Ym + 1)
      }
      for (const Om of Em.keys()) om.delete(Om);
      for (const [Om, Ym] of fm) {
        const mm = Em.get(Ym);
        void 0 === mm || Em.has(Om) || (Em.set(Om, mm), om.delete(Om))
      }
      return {
        named: [...Em].sort(((mm, Tm) => {
          let [fm] = mm, [hm] = Tm;
          return fm < hm ? -1 : fm > hm ? 1 : 0
        })).map((mm => {
          let [Tm, fm] = mm;
          return {
            name: Tm,
            id: fm
          }
        })),
        aliases: [...om.values()],
        layers: pm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);