export const id = 101;
export const ids = [101];
export const modules = {
  4686: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1043),
      mu = yu(1300),
      Ju = yu(3318),
      Nu = yu(145),
      Xu = yu(3361),
      Vu = yu(3347),
      ru = yu(1079);

    function Bu(uu) {
      let {
        game: Ru
      } = uu;
      const yu = (0, Nu.n)() ? "large" : "small",
        Eu = (0, Xu.g)(Ru, yu),
        Bu = (0, Ju.g)(Eu),
        xu = void 0 !== Bu.blurhash;
      return (0, ru.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Bu.isLoading && !xu && (0, ru.jsx)(mu.b, {
          loaderType: "Secondary"
        }), !Bu.failed && (null !== Bu.src || xu) && (0, ru.jsx)("div", {
          className: Ku()("SchematicImage", Vu.h, {
            SchematicImageFadeIn: Bu.fadeIn && !xu
          }),
          style: (0, Vu.f)(Bu),
          children: (0, ru.jsx)(Vu.c, {
            image: Bu
          })
        }), Bu.failed && (0, ru.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ru.jsx)(Qu.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4823: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => xu
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(4740),
      Ju = yu(1300),
      Nu = yu(1170),
      Xu = yu(2943),
      Vu = yu(3105),
      ru = yu(1043),
      Bu = yu(1079);

    function xu(uu) {
      let {
        folderName: Ru,
        onTexturePackUpdated: Ku,
        disabled: xu = !1,
        maxFileSizeMb: Su,
        packOwner: pu
      } = uu;
      const {
        t: Tu
      } = (0, Nu.E)(), [Wu, ju] = (0, Eu.useState)(!1), [Hu, du] = (0, Eu.useState)(null), [bu, Cu] = (0, Eu.useState)(null), ku = (0, Eu.useRef)(null);
      const {
        getRootProps: eu,
        getInputProps: Au,
        isDragActive: Du
      } = (0, mu.d)({
        onDrop: async function(uu) {
          ju(!0);
          try {
            const Ru = await (0, Xu.q)(uu);
            if ("customGame" === pu && (0, Vu.h)(Ru)) return void du(Tu(Vu.d));
            if (void 0 !== Su) {
              const uu = JSON.stringify(Ru).length / 1048576;
              if (uu > Su) return void du(`File size is too large. Max size is ${Su}MB. Current size is ${uu}MB.`)
            }
            du(null), Cu(null), Ku(Ru), ku.current = Ru,
              function(uu, Ru) {
                const Eu = uu.modelOverrides;
                Eu && Promise.all([yu.e(195), yu.e(194)]).then((() => yu(9127))).then((yu => {
                  let {
                    packDisplayName: Ku,
                    refusedPackModels: Qu,
                    packModelSummary: mu
                  } = yu;
                  const Ju = Ku(uu.metaData);
                  Ru(mu(Ju, Qu(Ju, Eu, !1)))
                })).catch((uu => {
                  console.error("Checking the texture pack's models failed:", uu)
                }))
              }(Ru, (uu => {
                ku.current === Ru && Cu(uu)
              }))
          } catch {
            du("Invalid Texture Pack Folder")
          } finally {
            ju(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: xu
      });
      return (0, Bu.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Bu.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Tu("settingsMenu:customTextureWarning"), ".", (0, Bu.jsx)("br", {}), Tu("settingsMenu:viewDocumentation"), ":", " ", (0, Bu.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Hu && (0, Bu.jsxs)("div", {
          className: "CustomTextureError",
          children: [Tu("general:error"), ": ", Hu]
        }), bu && (0, Bu.jsx)("div", {
          className: "CustomTextureError",
          children: bu
        }), (0, Bu.jsxs)("div", {
          ...eu({
            className: Qu()("CustomTextureFolderUpload", {
              ActiveDrag: Du,
              Disabled: xu
            })
          }),
          children: [(0, Bu.jsx)("input", {
            ...Au({
              webkitdirectory: "true"
            })
          }), Wu && (0, Bu.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Bu.jsx)(Ju.b, {})
          }), !Wu && !Du && Ru && (0, Bu.jsxs)(Bu.Fragment, {
            children: [(0, Bu.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Bu.jsx)(ru.c, {
                name: "folder-image"
              })
            }), (0, Bu.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Ru
            })]
          }), !Wu && (Du || !Ru) && (0, Bu.jsxs)(Bu.Fragment, {
            children: [(0, Bu.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Bu.jsx)(ru.c, {
                name: "up-from-bracket"
              })
            }), (0, Bu.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
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
  4780: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Wu,
      e: () => ju
    });
    var Eu = yu(2943),
      Ku = yu(2950),
      Qu = yu(64),
      mu = yu(1035),
      Ju = yu.n(mu),
      Nu = yu(1300),
      Xu = yu(2936),
      Vu = yu(1311),
      ru = yu(4782),
      Bu = yu(4823),
      xu = yu(624),
      Su = yu(4827),
      pu = yu(1079);

    function Tu() {
      (0, ru.i)("texturePackPickReload")
    }

    function Wu(uu) {
      var Ru;
      let {
        setApplySettingsCallback: yu
      } = uu;
      const [, mu] = (0, Qu.useReducer)((uu => uu + 1), 0), Ju = (0, Qu.useRef)(!1), Nu = (0, Qu.useRef)(null);

      function Wu(uu, Ru) {
        Xu.c.setFromJson(uu, "player");
        const Eu = Xu.c.saveTexturePack();
        if (xu.q) {
          const uu = Xu.c.toJson();
          Eu.then((Ru => {
            Ru && (0, Su.f)(uu, Tu)
          }))
        } else Ju.current ||= Ru, Nu.current !== Xu.c.getId() || Xu.c.getId() === Ku.r.CUSTOM && Ju.current ? yu((() => ru.i)) : yu(null);
        mu()
      }
      async function Hu(uu) {
        if (Xu.c.getId() !== uu.metaData.id) {
          if (Xu.c.getId() === Ku.r.CUSTOM && Xu.c.getFromFolderName()) {
            const uu = Vu.NotificationProvider.showPromptPopup({
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
          Wu(uu, !1)
        }
      }(0, Qu.useEffect)((() => {
        Nu.current = Xu.c.getId()
      }), []);
      const du = Eu.e,
        bu = [du, ...Object.values(Ku.r).filter((uu => uu !== du))];
      return (0, pu.jsx)(pu.Fragment, {
        children: (0, pu.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, pu.jsx)("div", {
            className: "TexturePackList",
            children: bu.map((uu => (0, pu.jsx)(ju, {
              id: uu,
              isSelected: uu === Xu.c.getId(),
              setSelected: Hu
            }, uu)))
          }), Xu.c.getId() === Ku.r.CUSTOM && (0, pu.jsx)(Bu.d, {
            folderName: null !== (Ru = Xu.c.getFromFolderName()) && void 0 !== Ru ? Ru : null,
            onTexturePackUpdated: function(uu) {
              Wu(uu, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function ju(uu) {
      let {
        id: Ru,
        isSelected: yu,
        setSelected: mu,
        disabled: Xu = !1
      } = uu;
      const [Vu, ru] = (0, Qu.useState)(!0), [Bu, xu] = (0, Qu.useState)(""), [Su, Tu] = (0, Qu.useState)(""), [Wu, ju] = (0, Qu.useState)(""), Hu = (0, Qu.useRef)({});
      return (0, Qu.useEffect)((() => {
        (0, Eu.p)(Ru).then((uu => {
          var Ru;
          uu && (Hu.current = uu, ru(!1), xu(Hu.current.metaData.name), Tu(Hu.current.metaData.author), ju(null !== (Ru = Hu.current.metaData.previewImage) && void 0 !== Ru ? Ru : ""))
        })).catch((uu => {
          console.warn(`Failed to fetch texture pack ${Ru}`, uu)
        }))
      }), [Ru]), (0, pu.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Xu || void 0,
        className: Ju()("TexturePack", {
          Selected: yu,
          Custom: Ru === Ku.r.CUSTOM,
          Disabled: Xu
        }),
        onClick: () => {
          Vu || Xu || mu(Hu.current)
        },
        children: [(0, pu.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Wu ? `url(${Wu})` : void 0
          }
        }), Vu && (0, pu.jsx)("div", {
          className: "TexturePackName",
          children: (0, pu.jsx)(Nu.b, {})
        }), !Vu && Bu && (0, pu.jsx)("div", {
          className: "TexturePackName",
          children: Bu
        }), !Vu && Su && (0, pu.jsx)("div", {
          className: "TexturePackAuthor",
          children: Su
        })]
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
  4827: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => mu
    });
    var Eu = yu(2950),
      Ku = yu(4836);
    let Qu = null;

    function mu(uu, Ru) {
      Qu = {
        pack: uu.metaData.id === Eu.e ? null : uu,
        prompt: Ru
      }
    }

    function Ju(uu, Ru) {
      const yu = Qu;
      null !== yu && (0, Ku.e)(yu.pack, uu) && (Qu = null, Ru && yu.prompt())
    }
  },
  4836: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return Ku(uu, Ru)
    }

    function Ku(uu, Ru) {
      if (uu === Ru) return !0;
      if ("object" !== typeof uu || "object" !== typeof Ru || null === uu || null === Ru || Array.isArray(uu) !== Array.isArray(Ru)) return !1;
      const yu = uu,
        Eu = Ru,
        Qu = Object.keys(yu);
      return Qu.length === Object.keys(Eu).length && Qu.every((uu => Object.prototype.hasOwnProperty.call(Eu, uu) && Ku(yu[uu], Eu[uu])))
    }
    yu.d(Ru, {
      e: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);