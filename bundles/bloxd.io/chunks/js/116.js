export const id = 116;
export const ids = [116];
export const modules = {
  5388: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1323),
      Ke = He(1320),
      Ue = He(3892),
      Fe = He(125),
      Je = He(3937),
      oe = He(3927),
      Re = He(1228);

    function ke(ee) {
      let {
        game: ie
      } = ee;
      const He = (0, Fe.is99NightsCrazyGamesBundle)() ? "large" : "small",
        ye = (0, Je.h)(ie, He),
        ke = (0, Ue.f)(ye),
        qe = void 0 !== ke.blurhash;
      return (0, Re.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ke.isLoading && !qe && (0, Re.jsx)(Ke.b, {
          loaderType: "Secondary"
        }), !ke.failed && (null !== ke.src || qe) && (0, Re.jsx)("div", {
          className: be()("SchematicImage", oe.l, {
            SchematicImageFadeIn: ke.fadeIn && !qe
          }),
          style: (0, oe.i)(ke),
          children: (0, Re.jsx)(oe.e, {
            image: ke
          })
        }), ke.failed && (0, Re.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Re.jsx)(Me.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5552: (ee, ie, He) => {
    He.d(ie, {
      e: () => pe
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(5454),
      Ue = He(1320),
      Fe = He(1127),
      Je = He(3473),
      oe = He(3618),
      Re = He(1323),
      ke = He(3482),
      qe = He(5557),
      fe = He(5578),
      Te = He(1228);

    function pe(ee) {
      let {
        folderName: ie,
        onTexturePackUpdated: be,
        disabled: pe = !1,
        maxFileSizeMb: Xe,
        packOwner: ze
      } = ee;
      const {
        t: Be
      } = (0, Fe.v)(), [Ee, ge] = (0, ye.useState)(!1), [Oe, de] = (0, ye.useState)(null), [We, te] = (0, ye.useState)(null), Ze = (0, ye.useRef)(null);
      async function we(ee) {
        ge(!0);
        try {
          const ie = await (0, Je.r)(ee);
          if ("customGame" === ze && (0, oe.l)(ie)) return void de(Be(oe.d));
          if (void 0 !== Xe) {
            const ee = JSON.stringify(ie).length / 1048576;
            if (ee > Xe) return void de(Be("customTexturePack:packTooBig", {
              size: ee.toFixed(1),
              max: Xe
            }))
          }
          de(null), te(null), be(ie), Ze.current = ie,
            function(ee, ie) {
              const ye = ee.modelOverrides;
              ye && Promise.all([He.e(227), He.e(226)]).then((() => He(34975))).then((He => {
                let {
                  packDisplayName: be,
                  refusedPackModels: Me,
                  packModelSummary: Ke
                } = He;
                const Ue = be(ee.metaData);
                ie(Ke(Ue, Me(Ue, ye, !1)))
              })).catch((ee => {
                console.error("Checking the texture pack's models failed:", ee)
              }))
            }(ie, (ee => {
              Ze.current === ie && te(ee)
            }))
        } catch (ie) {
          if (ie instanceof ke.b) {
            const ee = "customTexturePack:invalidPack" !== ie.translationKey || (0, fe.f)() ? ie.translationKey : "customTexturePack:invalidPackZip";
            de((0, qe.i)(Be, ee, ie.params))
          } else console.error("Couldn't read the texture pack", ie), de(Be("customTexturePack:errorTitle"))
        } finally {
          ge(!1)
        }
      }
      const {
        getRootProps: De,
        getInputProps: Pe,
        isDragActive: Ae,
        open: Ye
      } = (0, Ke.d)({
        onDrop: we,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: pe
      });
      return (0, Te.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Te.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Be("settingsMenu:customTextureWarning"), ".", (0, Te.jsx)("br", {}), Be("settingsMenu:viewDocumentation"), ":", " ", (0, Te.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Oe && (0, Te.jsxs)("div", {
          className: "CustomTextureError",
          children: [Be("general:error"), ": ", Oe]
        }), We && (0, Te.jsx)("div", {
          className: "CustomTextureError",
          children: We
        }), (0, Te.jsxs)("div", {
          ...De({
            className: Me()("CustomTextureFolderUpload", {
              ActiveDrag: Ae,
              Disabled: pe
            })
          }),
          children: [(0, Te.jsx)("input", {
            ...Pe({
              webkitdirectory: "true"
            })
          }), Ee && (0, Te.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Te.jsx)(Ue.b, {})
          }), !Ee && !Ae && ie && (0, Te.jsxs)(Te.Fragment, {
            children: [(0, Te.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Te.jsx)(Re.e, {
                name: "folder-image"
              })
            }), (0, Te.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: ie
            })]
          }), !Ee && (Ae || !ie) && (0, Te.jsxs)(Te.Fragment, {
            children: [(0, Te.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Te.jsx)(Re.e, {
                name: "up-from-bracket"
              })
            }), (0, Te.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: Be((0, fe.f)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !Ee && (0, Te.jsx)(fe.e, {
            disabled: pe,
            openFolderPicker: Ye,
            onFiles: ee => {
              we(ee)
            }
          })]
        })]
      })
    }
  },
  5578: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Je
    });
    var ye = He(59),
      be = He(1438),
      Me = He(1127),
      Ke = He(97),
      Ue = He(3447),
      Fe = He(1228);

    function Je() {
      return !(0, Ke.isMobile)()
    }

    function oe(ee) {
      let {
        disabled: ie,
        openFolderPicker: He,
        onFiles: Ke
      } = ee;
      const {
        t: oe
      } = (0, Me.v)(), Re = (0, ye.useRef)(null);
      return (0, Fe.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, Fe.jsx)("input", {
          ref: Re,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(ee) {
            const ie = Array.from(ee.target.files);
            ee.target.value = "", Ke(ie)
          }
        }), Je() && (0, Fe.jsx)(be.c, {
          disabled: ie,
          onClick: He,
          children: oe("general:chooseFolder")
        }), (0, Fe.jsx)(be.c, {
          disabled: ie,
          onClick: () => {
            (0, Ue.f)(Re.current)
          },
          children: oe("general:chooseZip")
        })]
      })
    }
  },
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
  5496: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe,
      f: () => Xe
    });
    var ye = He(3473),
      be = He(2181),
      Me = He(59),
      Ke = He(1053),
      Ue = He.n(Ke),
      Fe = He(1320),
      Je = He(3465),
      oe = He(1340),
      Re = He(5501),
      ke = He(5552),
      qe = He(645),
      fe = He(5587),
      Te = He(1228);

    function pe(ee) {
      var ie;
      let {
        setApplySettingsCallback: He
      } = ee;
      const [, Ke] = (0, Me.useReducer)((ee => ee + 1), 0), Ue = (0, Me.useRef)(!1), Fe = (0, Me.useRef)(null);

      function pe(ee, ie) {
        Je.c.setFromJson(ee, "player");
        const ye = Je.c.saveTexturePack();
        if (qe.I) {
          const ee = Je.c.toJson();
          ye.then((ie => {
            ie && (0, fe.c)(ee)
          }))
        } else Ue.current ||= ie, Fe.current !== Je.c.getId() || Je.c.getId() === be.o.CUSTOM && Ue.current ? He((() => Re.j)) : He(null);
        Ke()
      }
      async function ze(ee) {
        if (Je.c.getId() !== ee.metaData.id) {
          if (Je.c.getId() === be.o.CUSTOM && Je.c.getFromFolderName()) {
            const ee = oe.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await ee.getResult()) return
          }
          pe(ee, !1)
        }
      }(0, Me.useEffect)((() => {
        Fe.current = Je.c.getId()
      }), []);
      const Be = ye.e,
        Ee = [Be, ...Object.values(be.o).filter((ee => ee !== Be))];
      return (0, Te.jsx)(Te.Fragment, {
        children: (0, Te.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Te.jsx)("div", {
            className: "TexturePackList",
            children: Ee.map((ee => (0, Te.jsx)(Xe, {
              id: ee,
              isSelected: ee === Je.c.getId(),
              setSelected: ze
            }, ee)))
          }), Je.c.getId() === be.o.CUSTOM && (0, Te.jsx)(ke.e, {
            folderName: null !== (ie = Je.c.getFromFolderName()) && void 0 !== ie ? ie : null,
            onTexturePackUpdated: function(ee) {
              pe(ee, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Xe(ee) {
      let {
        id: ie,
        isSelected: He,
        setSelected: Ke,
        disabled: Je = !1
      } = ee;
      const [oe, Re] = (0, Me.useState)(!0), [ke, qe] = (0, Me.useState)(""), [fe, pe] = (0, Me.useState)(""), [Xe, ze] = (0, Me.useState)(""), Be = (0, Me.useRef)({});
      return (0, Me.useEffect)((() => {
        (0, ye.p)(ie).then((ee => {
          var ie;
          ee && (Be.current = ee, Re(!1), qe(Be.current.metaData.name), pe(Be.current.metaData.author), ze(null !== (ie = Be.current.metaData.previewImage) && void 0 !== ie ? ie : ""))
        })).catch((ee => {
          console.warn(`Failed to fetch texture pack ${ie}`, ee)
        }))
      }), [ie]), (0, Te.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Je || void 0,
        className: Ue()("TexturePack", {
          Selected: He,
          Custom: ie === be.o.CUSTOM,
          Disabled: Je
        }),
        onClick: () => {
          oe || Je || Ke(Be.current)
        },
        children: [(0, Te.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Xe ? `url(${Xe})` : void 0
          }
        }), oe && (0, Te.jsx)("div", {
          className: "TexturePackName",
          children: (0, Te.jsx)(Fe.b, {})
        }), !oe && ke && (0, Te.jsx)("div", {
          className: "TexturePackName",
          children: ke
        }), !oe && fe && (0, Te.jsx)("div", {
          className: "TexturePackAuthor",
          children: fe
        })]
      })
    }
  },
  5557: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      e: () => Ke,
      i: () => Me
    });
    var ye = He(5563);
    const be = [ee => ee.strict ? "strict" : "nonStrict", ee => ee.program];

    function Me(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ye = {};
      for (const be in He) ye[be] = `\0${be}\0`;
      return ee(ie, ye).replace(/\0(\w+)\0/g, ((ee, ie) => He[ie]))
    }

    function Ke(ee) {
      return null === ee.file ? null : ee.line > 0 ? `${ee.file}:${ee.line}` : ee.file
    }

    function Ue(ee) {
      const ie = new Map(ee.map((ee => [Fe(ee).join("."), ee])));
      if (0 === ie.size) return [];
      const He = oe([...ie.values()]);
      return 0 === He[0].length ? [] : He
    }

    function Fe(ee) {
      return be.map((ie => ie(ee)))
    }
    const Je = be.map((ee => new Set(ye.g.map(ee)).size));

    function oe(ee) {
      const ie = be.map((ie => new Set(ee.map(ie)))),
        He = ie.reduce(((ee, ie) => ee * ie.size), 1),
        ye = ie.every(((ee, ie) => 1 === ee.size || ee.size === Je[ie]));
      if (He === ee.length && ye) return [be.filter(((ee, He) => 1 === ie[He].size)).map((ie => ie(ee[0])))];
      let Me = null;
      for (let Ke = 0; Ke < be.length; Ke++) {
        if (1 === ie[Ke].size) continue;
        const He = Re(ee, be[Ke]).flatMap(oe);
        (null === Me || He.length < Me.length) && (Me = He)
      }
      return Me
    }

    function Re(ee, ie) {
      const He = new Map;
      for (const be of ee) {
        var ye;
        const ee = ie(be);
        He.set(ee, [...null !== (ye = He.get(ee)) && void 0 !== ye ? ye : [], be])
      }
      return [...He.values()]
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
  5563: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.e,
      g: () => be,
      h: () => ye.m
    });
    var ye = He(5570);
    const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
      strict: ee,
      program: ie
    })))))
  },
  5596: (ee, ie, He) => {
    function ye(ee, ie) {
      return be(ee, ie)
    }

    function be(ee, ie) {
      if (ee === ie) return !0;
      if ("object" !== typeof ee || "object" !== typeof ie || null === ee || null === ie || Array.isArray(ee) !== Array.isArray(ie)) return !1;
      const He = ee,
        ye = ie,
        Me = Object.keys(He);
      return Me.length === Object.keys(ye).length && Me.every((ee => Object.prototype.hasOwnProperty.call(ye, ee) && be(He[ee], ye[ee])))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  5587: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Ue
    });
    var ye = He(2181),
      be = He(5596);
    let Me = null;

    function Ke(ee) {
      Me = {
        pack: ee.metaData.id === ye.b ? null : ee
      }
    }

    function Ue(ee) {
      return !(null === Me || !(0, be.d)(Me.pack, ee)) && (Me = null, !0)
    }
  },
  5570: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      e: () => ye,
      h: () => Te,
      k: () => Re,
      m: () => be,
      q: () => Me,
      r: () => Je,
      s: () => oe,
      t: () => ke
    });
    const ye = 5;

    function be(ee) {
      return ee === ye
    }

    function Me(ee) {
      return [...ee.features]
    }
    const Ke = 262144,
      Ue = 256,
      Fe = 256;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
      const ie = [];
      for (const [He, ye] of Object.entries(ee)) {
        if ("string" !== typeof ye) return `${He} isn't text.`;
        ie.push({
          path: He,
          source: ye
        })
      }
      return ie.sort(((ee, ie) => Re(ee.path, ie.path))),
        function(ee) {
          if (0 === ee.length) return "The pack has no .wgsl files.";
          if (ee.length > Ue) return `The pack has more than ${Ue} .wgsl files.`;
          const ie = new Set;
          for (const {
              path: He
            }
            of ee) {
            const ee = qe(He);
            if (null !== ee) return ee;
            if (ie.has(He)) return `The pack has two files at ${He}.`;
            ie.add(He)
          }
          return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
        }(ie) ?? ie
    }

    function oe(ee) {
      const ie = {};
      for (const He of ee) ie[He.path] = He.source;
      return ie
    }

    function Re(ee, ie) {
      return ee < ie ? -1 : ee > ie ? 1 : 0
    }

    function ke(ee) {
      const ie = new TextEncoder;
      let He = 0;
      for (const {
          source: ye
        }
        of ee) He += ie.encode(ye).byteLength;
      return He
    }

    function qe(ee) {
      if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
      if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
      if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
      return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
    }
    const fe = /^(.*)\[rot\[([1-4])$/;

    function Te(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ye = new Map;
      ie.forEach(((ee, ie) => {
        let {
          numAnimStates: He,
          animStartIdx: be
        } = ee;
        for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
      }));
      const be = Object.entries(ee),
        Me = new Map;
      for (const [Te, pe] of be) {
        const ee = fe.exec(Te);
        "1" === ee?.[2] && Me.set(ee[1], pe + 1)
      }
      const Ke = ee => {
          const ie = fe.exec(ee);
          return ie && Me.has(ie[1]) ? {
            root: ie[1],
            rotation: Number(ie[2]) - 1
          } : null
        },
        Ue = new Set(be.map((ee => {
          let [ie] = ee;
          return Ke(ie)?.root ?? ie
        }))),
        Fe = (ee, He) => {
          const ye = ee.replace(/_?0$/, "");
          return (ie[He]?.numAnimStates ?? 0) > 1 && !Ue.has(ye) ? ye : ee
        },
        Je = new Map;
      for (const [fe, Te] of be) Je.set(Te, Fe(Ke(fe)?.root ?? fe, Te));
      const oe = be.reduce(((ee, ie) => {
          let [, He] = ie;
          return Math.max(ee, He + 1)
        }), 0),
        Re = Array.from({
          length: oe
        }, ((ee, ie) => ({
          id: ie + 1,
          rotation: 0
        }))),
        ke = new Map,
        qe = new Map;
      for (const [fe, Te] of be) {
        const ee = Ke(fe),
          ie = ye.get(Te);
        if (void 0 !== ie) {
          const He = Je.get(ie);
          qe.set(fe, {
            name: fe,
            texture: He,
            kind: "frame"
          }), ee && !qe.has(ee.root) && qe.set(ee.root, {
            name: ee.root,
            texture: He,
            kind: "frame"
          });
          continue
        }
        const He = Je.get(Te),
          be = ee?.root ?? fe;
        if (He !== be && qe.set(be, {
            name: be,
            texture: He,
            kind: "frame"
          }), ee) {
          const ie = Me.get(ee.root);
          Re[Te] = {
            id: ie,
            rotation: ee.rotation
          }, ke.set(He, ie), qe.set(fe, {
            name: fe,
            texture: He,
            kind: "rotation"
          })
        } else ke.set(He, Te + 1)
      }
      for (const fe of ke.keys()) qe.delete(fe);
      for (const [fe, Te] of He) {
        const ee = ke.get(Te);
        void 0 === ee || ke.has(fe) || (ke.set(fe, ee), qe.delete(fe))
      }
      return {
        named: [...ke].sort(((ee, ie) => {
          let [He] = ee, [ye] = ie;
          return He < ye ? -1 : He > ye ? 1 : 0
        })).map((ee => {
          let [ie, He] = ee;
          return {
            name: ie,
            id: He
          }
        })),
        aliases: [...qe.values()],
        layers: Re
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);