export const id = 105;
export const ids = [105];
export const modules = {
  5077: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1116),
      Xu = ju(1393),
      lu = ju(3691),
      qu = ju(131),
      fu = ju(3738),
      Cu = ju(3729),
      bu = ju(1154);

    function cu(uu) {
      let {
        game: Eu
      } = uu;
      const ju = (0, qu.is99NightsCrazyGamesBundle)() ? "large" : "small",
        su = (0, fu.e)(Eu, ju),
        cu = (0, lu.h)(su),
        Nu = void 0 !== cu.blurhash;
      return (0, bu.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [cu.isLoading && !Nu && (0, bu.jsx)(Xu.b, {
          loaderType: "Secondary"
        }), !cu.failed && (null !== cu.src || Nu) && (0, bu.jsx)("div", {
          className: Uu()("SchematicImage", Cu.d, {
            SchematicImageFadeIn: cu.fadeIn && !Nu
          }),
          style: (0, Cu.c)(cu),
          children: (0, bu.jsx)(Cu.b, {
            image: cu
          })
        }), cu.failed && (0, bu.jsx)("div", {
          className: "SchematicImageError",
          children: (0, bu.jsx)(Zu.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5188: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(5120),
      lu = ju(1393),
      qu = ju(1244),
      fu = ju(3340),
      Cu = ju(3489),
      bu = ju(1116),
      cu = ju(3343),
      Nu = ju(5197),
      Ou = ju(5216),
      Yu = ju(1154);

    function hu(uu) {
      let {
        folderName: Eu,
        onTexturePackUpdated: Uu,
        disabled: hu = !1,
        maxFileSizeMb: Du,
        packOwner: gu
      } = uu;
      const {
        t: Mu
      } = (0, qu.A)(), [eu, Gu] = (0, su.useState)(!1), [pu, wu] = (0, su.useState)(null), [Ju, du] = (0, su.useState)(null), au = (0, su.useRef)(null);
      async function Pu(uu) {
        Gu(!0);
        try {
          const Eu = await (0, fu.o)(uu);
          if ("customGame" === gu && (0, Cu.g)(Eu)) return void wu(Mu(Cu.c));
          if (void 0 !== Du) {
            const uu = JSON.stringify(Eu).length / 1048576;
            if (uu > Du) return void wu(Mu("customTexturePack:packTooBig", {
              size: uu.toFixed(1),
              max: Du
            }))
          }
          wu(null), du(null), Uu(Eu), au.current = Eu,
            function(uu, Eu) {
              const su = uu.modelOverrides;
              su && Promise.all([ju.e(206), ju.e(205)]).then((() => ju(34615))).then((ju => {
                let {
                  packDisplayName: Uu,
                  refusedPackModels: Zu,
                  packModelSummary: Xu
                } = ju;
                const lu = Uu(uu.metaData);
                Eu(Xu(lu, Zu(lu, su, !1)))
              })).catch((uu => {
                console.error("Checking the texture pack's models failed:", uu)
              }))
            }(Eu, (uu => {
              au.current === Eu && du(uu)
            }))
        } catch (Eu) {
          if (Eu instanceof cu.d) {
            const uu = "customTexturePack:invalidPack" !== Eu.translationKey || (0, Ou.h)() ? Eu.translationKey : "customTexturePack:invalidPackZip";
            wu((0, Nu.g)(Mu, uu, Eu.params))
          } else console.error("Couldn't read the texture pack", Eu), wu(Mu("customTexturePack:errorTitle"))
        } finally {
          Gu(!1)
        }
      }
      const {
        getRootProps: ou,
        getInputProps: ku,
        isDragActive: mu,
        open: vu
      } = (0, Xu.c)({
        onDrop: Pu,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: hu
      });
      return (0, Yu.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Yu.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Mu("settingsMenu:customTextureWarning"), ".", (0, Yu.jsx)("br", {}), Mu("settingsMenu:viewDocumentation"), ":", " ", (0, Yu.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), pu && (0, Yu.jsxs)("div", {
          className: "CustomTextureError",
          children: [Mu("general:error"), ": ", pu]
        }), Ju && (0, Yu.jsx)("div", {
          className: "CustomTextureError",
          children: Ju
        }), (0, Yu.jsxs)("div", {
          ...ou({
            className: Zu()("CustomTextureFolderUpload", {
              ActiveDrag: mu,
              Disabled: hu
            })
          }),
          children: [(0, Yu.jsx)("input", {
            ...ku({
              webkitdirectory: "true"
            })
          }), eu && (0, Yu.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Yu.jsx)(lu.b, {})
          }), !eu && !mu && Eu && (0, Yu.jsxs)(Yu.Fragment, {
            children: [(0, Yu.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Yu.jsx)(bu.e, {
                name: "folder-image"
              })
            }), (0, Yu.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Eu
            })]
          }), !eu && (mu || !Eu) && (0, Yu.jsxs)(Yu.Fragment, {
            children: [(0, Yu.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Yu.jsx)(bu.e, {
                name: "up-from-bracket"
              })
            }), (0, Yu.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: Mu((0, Ou.h)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !eu && (0, Yu.jsx)(Ou.d, {
            disabled: hu,
            openFolderPicker: vu,
            onFiles: uu => {
              Pu(uu)
            }
          })]
        })]
      })
    }
  },
  5216: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      h: () => fu
    });
    var su = ju(58),
      Uu = ju(1506),
      Zu = ju(1244),
      Xu = ju(91),
      lu = ju(3318),
      qu = ju(1154);

    function fu() {
      return !(0, Xu.isMobile)()
    }

    function Cu(uu) {
      let {
        disabled: Eu,
        openFolderPicker: ju,
        onFiles: Xu
      } = uu;
      const {
        t: Cu
      } = (0, Zu.A)(), bu = (0, su.useRef)(null);
      return (0, qu.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, qu.jsx)("input", {
          ref: bu,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(uu) {
            const Eu = Array.from(uu.target.files);
            uu.target.value = "", Xu(Eu)
          }
        }), fu() && (0, qu.jsx)(Uu.f, {
          disabled: Eu,
          onClick: ju,
          children: Cu("general:chooseFolder")
        }), (0, qu.jsx)(Uu.f, {
          disabled: Eu,
          onClick: () => {
            (0, lu.e)(bu.current)
          },
          children: Cu("general:chooseZip")
        })]
      })
    }
  },
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
  5151: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => hu,
      g: () => Du
    });
    var su = ju(3340),
      Uu = ju(2239),
      Zu = ju(58),
      Xu = ju(1105),
      lu = ju.n(Xu),
      qu = ju(1393),
      fu = ju(3336),
      Cu = ju(1405),
      bu = ju(5155),
      cu = ju(5188),
      Nu = ju(680),
      Ou = ju(5223),
      Yu = ju(1154);

    function hu(uu) {
      var Eu;
      let {
        setApplySettingsCallback: ju
      } = uu;
      const [, Xu] = (0, Zu.useReducer)((uu => uu + 1), 0), lu = (0, Zu.useRef)(!1), qu = (0, Zu.useRef)(null);

      function hu(uu, Eu) {
        fu.d.setFromJson(uu, "player");
        const su = fu.d.saveTexturePack();
        if (Nu.y) {
          const uu = fu.d.toJson();
          su.then((Eu => {
            Eu && (0, Ou.c)(uu)
          }))
        } else lu.current ||= Eu, qu.current !== fu.d.getId() || fu.d.getId() === Uu.p.CUSTOM && lu.current ? ju((() => bu.l)) : ju(null);
        Xu()
      }
      async function gu(uu) {
        if (fu.d.getId() !== uu.metaData.id) {
          if (fu.d.getId() === Uu.p.CUSTOM && fu.d.getFromFolderName()) {
            const uu = Cu.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await uu.getResult()) return
          }
          hu(uu, !1)
        }
      }(0, Zu.useEffect)((() => {
        qu.current = fu.d.getId()
      }), []);
      const Mu = su.c,
        eu = [Mu, ...Object.values(Uu.p).filter((uu => uu !== Mu))];
      return (0, Yu.jsx)(Yu.Fragment, {
        children: (0, Yu.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Yu.jsx)("div", {
            className: "TexturePackList",
            children: eu.map((uu => (0, Yu.jsx)(Du, {
              id: uu,
              isSelected: uu === fu.d.getId(),
              setSelected: gu
            }, uu)))
          }), fu.d.getId() === Uu.p.CUSTOM && (0, Yu.jsx)(cu.e, {
            folderName: null !== (Eu = fu.d.getFromFolderName()) && void 0 !== Eu ? Eu : null,
            onTexturePackUpdated: function(uu) {
              hu(uu, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Du(uu) {
      let {
        id: Eu,
        isSelected: ju,
        setSelected: Xu,
        disabled: fu = !1
      } = uu;
      const [Cu, bu] = (0, Zu.useState)(!0), [cu, Nu] = (0, Zu.useState)(""), [Ou, hu] = (0, Zu.useState)(""), [Du, gu] = (0, Zu.useState)(""), Mu = (0, Zu.useRef)({});
      return (0, Zu.useEffect)((() => {
        (0, su.n)(Eu).then((uu => {
          var Eu;
          uu && (Mu.current = uu, bu(!1), Nu(Mu.current.metaData.name), hu(Mu.current.metaData.author), gu(null !== (Eu = Mu.current.metaData.previewImage) && void 0 !== Eu ? Eu : ""))
        })).catch((uu => {
          console.warn(`Failed to fetch texture pack ${Eu}`, uu)
        }))
      }), [Eu]), (0, Yu.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": fu || void 0,
        className: lu()("TexturePack", {
          Selected: ju,
          Custom: Eu === Uu.p.CUSTOM,
          Disabled: fu
        }),
        onClick: () => {
          Cu || fu || Xu(Mu.current)
        },
        children: [(0, Yu.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Du ? `url(${Du})` : void 0
          }
        }), Cu && (0, Yu.jsx)("div", {
          className: "TexturePackName",
          children: (0, Yu.jsx)(qu.b, {})
        }), !Cu && cu && (0, Yu.jsx)("div", {
          className: "TexturePackName",
          children: cu
        }), !Cu && Ou && (0, Yu.jsx)("div", {
          className: "TexturePackAuthor",
          children: Ou
        })]
      })
    }
  },
  5197: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      f: () => Xu,
      g: () => Zu
    });
    var su = ju(5206);
    const Uu = [uu => uu.strict ? "strict" : "nonStrict", uu => uu.program];

    function Zu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const su = {};
      for (const Uu in ju) su[Uu] = `\0${Uu}\0`;
      return uu(Eu, su).replace(/\0(\w+)\0/g, ((uu, Eu) => ju[Eu]))
    }

    function Xu(uu) {
      return null === uu.file ? null : uu.line > 0 ? `${uu.file}:${uu.line}` : uu.file
    }

    function lu(uu) {
      const Eu = new Map(uu.map((uu => [qu(uu).join("."), uu])));
      if (0 === Eu.size) return [];
      const ju = Cu([...Eu.values()]);
      return 0 === ju[0].length ? [] : ju
    }

    function qu(uu) {
      return Uu.map((Eu => Eu(uu)))
    }
    const fu = Uu.map((uu => new Set(su.h.map(uu)).size));

    function Cu(uu) {
      const Eu = Uu.map((Eu => new Set(uu.map(Eu)))),
        ju = Eu.reduce(((uu, Eu) => uu * Eu.size), 1),
        su = Eu.every(((uu, Eu) => 1 === uu.size || uu.size === fu[Eu]));
      if (ju === uu.length && su) return [Uu.filter(((uu, ju) => 1 === Eu[ju].size)).map((Eu => Eu(uu[0])))];
      let Zu = null;
      for (let Xu = 0; Xu < Uu.length; Xu++) {
        if (1 === Eu[Xu].size) continue;
        const ju = bu(uu, Uu[Xu]).flatMap(Cu);
        (null === Zu || ju.length < Zu.length) && (Zu = ju)
      }
      return Zu
    }

    function bu(uu, Eu) {
      const ju = new Map;
      for (const Uu of uu) {
        var su;
        const uu = Eu(Uu);
        ju.set(uu, [...null !== (su = ju.get(uu)) && void 0 !== su ? su : [], Uu])
      }
      return [...ju.values()]
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
  5206: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.h,
      h: () => Uu,
      k: () => su.o
    });
    var su = ju(5209);
    const Uu = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Eu => ({
      strict: uu,
      program: Eu
    })))))
  },
  5230: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return Uu(uu, Eu)
    }

    function Uu(uu, Eu) {
      if (uu === Eu) return !0;
      if ("object" !== typeof uu || "object" !== typeof Eu || null === uu || null === Eu || Array.isArray(uu) !== Array.isArray(Eu)) return !1;
      const ju = uu,
        su = Eu,
        Zu = Object.keys(ju);
      return Zu.length === Object.keys(su).length && Zu.every((uu => Object.prototype.hasOwnProperty.call(su, uu) && Uu(ju[uu], su[uu])))
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  5223: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      g: () => lu
    });
    var su = ju(2239),
      Uu = ju(5230);
    let Zu = null;

    function Xu(uu) {
      Zu = {
        pack: uu.metaData.id === su.e ? null : uu
      }
    }

    function lu(uu) {
      return !(null === Zu || !(0, Uu.c)(Zu.pack, uu)) && (Zu = null, !0)
    }
  },
  5209: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      c: () => lu,
      e: () => Xu,
      h: () => su,
      j: () => Yu,
      k: () => bu,
      o: () => Uu,
      p: () => Zu,
      s: () => fu,
      w: () => Cu
    });
    const su = 5;

    function Uu(uu) {
      return uu === su
    }

    function Zu(uu) {
      return [...uu.features]
    }
    const Xu = 262144,
      lu = 256,
      qu = 256;

    function fu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Eu = [];
      for (const [ju, su] of Object.entries(uu)) {
        if ("string" !== typeof su) return `${ju} isn't text.`;
        Eu.push({
          path: ju,
          source: su
        })
      }
      return Eu.sort(((uu, Eu) => bu(uu.path, Eu.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > lu) return `The pack has more than ${lu} .wgsl files.`;
          const Eu = new Set;
          for (const {
              path: ju
            }
            of uu) {
            const uu = Nu(ju);
            if (null !== uu) return uu;
            if (Eu.has(ju)) return `The pack has two files at ${ju}.`;
            Eu.add(ju)
          }
          return cu(uu) > Xu ? `The pack's .wgsl files are over ${Xu/1024} KB in total.` : null
        }(Eu) ?? Eu
    }

    function Cu(uu) {
      const Eu = {};
      for (const ju of uu) Eu[ju.path] = ju.source;
      return Eu
    }

    function bu(uu, Eu) {
      return uu < Eu ? -1 : uu > Eu ? 1 : 0
    }

    function cu(uu) {
      const Eu = new TextEncoder;
      let ju = 0;
      for (const {
          source: su
        }
        of uu) ju += Eu.encode(su).byteLength;
      return ju
    }

    function Nu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > qu) return `A file path is over ${qu} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const Ou = /^(.*)\[rot\[([1-4])$/;

    function Yu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const su = new Map;
      Eu.forEach(((uu, Eu) => {
        let {
          numAnimStates: ju,
          animStartIdx: Uu
        } = uu;
        for (let Zu = 1; Zu < ju; Zu++) su.set(Uu + Zu - 1, Eu)
      }));
      const Uu = Object.entries(uu),
        Zu = new Map;
      for (const [Yu, hu] of Uu) {
        const uu = Ou.exec(Yu);
        "1" === uu?.[2] && Zu.set(uu[1], hu + 1)
      }
      const Xu = uu => {
          const Eu = Ou.exec(uu);
          return Eu && Zu.has(Eu[1]) ? {
            root: Eu[1],
            rotation: Number(Eu[2]) - 1
          } : null
        },
        lu = new Set(Uu.map((uu => {
          let [Eu] = uu;
          return Xu(Eu)?.root ?? Eu
        }))),
        qu = (uu, ju) => {
          const su = uu.replace(/_?0$/, "");
          return (Eu[ju]?.numAnimStates ?? 0) > 1 && !lu.has(su) ? su : uu
        },
        fu = new Map;
      for (const [Ou, Yu] of Uu) fu.set(Yu, qu(Xu(Ou)?.root ?? Ou, Yu));
      const Cu = Uu.reduce(((uu, Eu) => {
          let [, ju] = Eu;
          return Math.max(uu, ju + 1)
        }), 0),
        bu = Array.from({
          length: Cu
        }, ((uu, Eu) => ({
          id: Eu + 1,
          rotation: 0
        }))),
        cu = new Map,
        Nu = new Map;
      for (const [Ou, Yu] of Uu) {
        const uu = Xu(Ou),
          Eu = su.get(Yu);
        if (void 0 !== Eu) {
          const ju = fu.get(Eu);
          Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "frame"
          }), uu && !Nu.has(uu.root) && Nu.set(uu.root, {
            name: uu.root,
            texture: ju,
            kind: "frame"
          });
          continue
        }
        const ju = fu.get(Yu),
          Uu = uu?.root ?? Ou;
        if (ju !== Uu && Nu.set(Uu, {
            name: Uu,
            texture: ju,
            kind: "frame"
          }), uu) {
          const Eu = Zu.get(uu.root);
          bu[Yu] = {
            id: Eu,
            rotation: uu.rotation
          }, cu.set(ju, Eu), Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "rotation"
          })
        } else cu.set(ju, Yu + 1)
      }
      for (const Ou of cu.keys()) Nu.delete(Ou);
      for (const [Ou, Yu] of ju) {
        const uu = cu.get(Yu);
        void 0 === uu || cu.has(Ou) || (cu.set(Ou, uu), Nu.delete(Ou))
      }
      return {
        named: [...cu].sort(((uu, Eu) => {
          let [ju] = uu, [su] = Eu;
          return ju < su ? -1 : ju > su ? 1 : 0
        })).map((uu => {
          let [Eu, ju] = uu;
          return {
            name: Eu,
            id: ju
          }
        })),
        aliases: [...Nu.values()],
        layers: bu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);