export const id = 101;
export const ids = [101];
export const modules = {
  4539: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1036),
      Oz = sz(1306),
      oz = sz(3169),
      vz = sz(133),
      Uz = sz(3215),
      Kz = sz(3202),
      uz = sz(1087);

    function Nz(zz) {
      let {
        game: tz
      } = zz;
      const sz = (0, vz.p)() ? "large" : "small",
        Fz = (0, Uz.e)(tz, sz),
        Nz = (0, oz.e)(Fz),
        bz = void 0 !== Nz.blurhash;
      return (0, uz.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Nz.isLoading && !bz && (0, uz.jsx)(Oz.d, {
          loaderType: "Secondary"
        }), !Nz.failed && (null !== Nz.src || bz) && (0, uz.jsx)("div", {
          className: Wz()("SchematicImage", Kz.h, {
            SchematicImageFadeIn: Nz.fadeIn && !bz
          }),
          style: (0, Kz.f)(Nz),
          children: (0, uz.jsx)(Kz.d, {
            image: Nz
          })
        }), Nz.failed && (0, uz.jsx)("div", {
          className: "SchematicImageError",
          children: (0, uz.jsx)(Xz.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4650: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => bz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(4580),
      oz = sz(1306),
      vz = sz(1173),
      Uz = sz(2881),
      Kz = sz(2975),
      uz = sz(1036),
      Nz = sz(1087);

    function bz(zz) {
      let {
        folderName: tz,
        onTexturePackUpdated: Wz,
        disabled: bz = !1,
        maxFileSizeMb: wz,
        packOwner: Dz
      } = zz;
      const {
        t: gz
      } = (0, vz.B)(), [Hz, Bz] = (0, Fz.useState)(!1), [Pz, rz] = (0, Fz.useState)(null), [Yz, xz] = (0, Fz.useState)(null), mz = (0, Fz.useRef)(null);
      const {
        getRootProps: Jz,
        getInputProps: Iz,
        isDragActive: Cz
      } = (0, Oz.e)({
        onDrop: async function(zz) {
          Bz(!0);
          try {
            const tz = await (0, Uz.s)(zz);
            if ("customGame" === Dz && (0, Kz.j)(tz)) return void rz(gz(Kz.e));
            if (void 0 !== wz) {
              const zz = JSON.stringify(tz).length / 1048576;
              if (zz > wz) return void rz(`File size is too large. Max size is ${wz}MB. Current size is ${zz}MB.`)
            }
            rz(null), xz(null), Wz(tz), mz.current = tz,
              function(zz, tz) {
                const Fz = zz.modelOverrides;
                Fz && Promise.all([sz.e(195), sz.e(194)]).then((() => sz(8916))).then((sz => {
                  let {
                    packDisplayName: Wz,
                    refusedPackModels: Xz,
                    packModelSummary: Oz
                  } = sz;
                  const oz = Wz(zz.metaData);
                  tz(Oz(oz, Xz(oz, Fz, !1)))
                })).catch((zz => {
                  console.error("Checking the texture pack's models failed:", zz)
                }))
              }(tz, (zz => {
                mz.current === tz && xz(zz)
              }))
          } catch {
            rz("Invalid Texture Pack Folder")
          } finally {
            Bz(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: bz
      });
      return (0, Nz.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Nz.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [gz("settingsMenu:customTextureWarning"), ".", (0, Nz.jsx)("br", {}), gz("settingsMenu:viewDocumentation"), ":", " ", (0, Nz.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Pz && (0, Nz.jsxs)("div", {
          className: "CustomTextureError",
          children: [gz("general:error"), ": ", Pz]
        }), Yz && (0, Nz.jsx)("div", {
          className: "CustomTextureError",
          children: Yz
        }), (0, Nz.jsxs)("div", {
          ...Jz({
            className: Xz()("CustomTextureFolderUpload", {
              ActiveDrag: Cz,
              Disabled: bz
            })
          }),
          children: [(0, Nz.jsx)("input", {
            ...Iz({
              webkitdirectory: "true"
            })
          }), Hz && (0, Nz.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Nz.jsx)(oz.d, {})
          }), !Hz && !Cz && tz && (0, Nz.jsxs)(Nz.Fragment, {
            children: [(0, Nz.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Nz.jsx)(uz.c, {
                name: "folder-image"
              })
            }), (0, Nz.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: tz
            })]
          }), !Hz && (Cz || !tz) && (0, Nz.jsxs)(Nz.Fragment, {
            children: [(0, Nz.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Nz.jsx)(uz.c, {
                name: "up-from-bracket"
              })
            }), (0, Nz.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4609: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => wz,
      d: () => Pz,
      g: () => Dz,
      h: () => Bz
    });
    var Fz = sz(65),
      Wz = sz(4616),
      Xz = sz(4022),
      Oz = sz(1333),
      oz = sz(4636),
      vz = sz(1020),
      Uz = sz.n(vz),
      Kz = sz(1319),
      uz = sz(1664),
      Nz = sz(4644),
      bz = sz(1087);

    function wz(zz) {
      let {
        label: tz,
        onClick: sz,
        checked: Fz,
        circleInfoText: Wz,
        className: oz,
        disabled: vz,
        note: Kz
      } = zz;
      return (0, bz.jsxs)("div", {
        "aria-disabled": vz || void 0,
        "data-pad-focusable": !0,
        className: Uz()("SettingBox CheckboxContainer", {
          [oz]: oz,
          SettingBoxDisabled: vz
        }),
        onClick: () => {
          vz || sz(!Fz)
        },
        children: [(0, bz.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, bz.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, bz.jsx)(Xz.e, {
              className: "SettingsCheckbox",
              checked: Fz,
              disabled: vz,
              onChange: () => {}
            })
          }), (0, bz.jsxs)("div", {
            className: "CheckboxText",
            children: [tz, Wz && (0, bz.jsx)("span", {
              onClick: zz => zz.stopPropagation(),
              children: (0, bz.jsx)(Oz.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wz
              })
            })]
          })]
        }), Kz && (0, bz.jsx)("div", {
          className: "SettingNote",
          children: Kz
        })]
      })
    }

    function Dz(zz) {
      let {
        name: tz,
        onChange: sz,
        min: Wz,
        max: Xz,
        step: oz,
        initValue: vz,
        circleInfoText: Kz,
        format: uz,
        className: Nz,
        padStep: wz,
        disabled: Dz = !1,
        selectableMax: gz,
        cappedNote: Bz,
        onChangeComplete: Pz
      } = zz;
      const [rz, Yz] = (0, Fz.useState)(vz), xz = (0, Fz.useRef)(vz);
      (0, Fz.useEffect)((() => {
        xz.current = vz, Yz(vz)
      }), [vz]);
      const mz = void 0 !== gz && gz < Xz,
        Jz = mz ? {
          "--slider-selectable": (gz - Wz) / (Xz - Wz)
        } : void 0;
      return (0, bz.jsxs)("div", {
        className: Uz()("SettingBox SettingsSliderDiv", {
          [Nz]: Nz,
          SettingBoxDisabled: Dz,
          SliderCapped: mz
        }),
        style: Jz,
        children: [(0, bz.jsxs)("div", {
          className: "SliderText",
          children: [`${tz}: ${uz?uz(rz):rz}`, Kz && (0, bz.jsx)(Oz.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Kz
          })]
        }), (0, bz.jsx)("div", {
          className: "SliderDiv",
          children: (0, bz.jsx)(Hz, {
            value: rz,
            min: Wz,
            max: Xz,
            step: oz,
            onChange: zz => {
              if (mz && zz >= gz && rz === gz) return;
              const tz = mz ? Math.min(zz, gz) : zz;
              xz.current = tz, Yz(tz), sz(tz)
            },
            onChangeComplete: Pz && (() => {
              Pz(xz.current)
            }),
            format: uz,
            padStep: wz,
            disabled: Dz
          })
        }), mz && Bz && (0, bz.jsx)("div", {
          className: "SettingNote",
          children: Bz
        })]
      })
    }
    const gz = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Hz(zz) {
      var tz;
      let {
        value: sz,
        min: Xz,
        max: Oz,
        step: oz,
        onChange: vz,
        orientation: Uz,
        reverse: Kz,
        setIsChanging: uz,
        tooltip: wz,
        labels: Dz,
        handleLabel: Hz,
        format: Bz,
        onChangeStart: Pz,
        onChangeComplete: rz,
        padStep: Yz,
        disabled: xz = !1
      } = zz;
      const mz = (0, Fz.useRef)(null),
        Jz = (0, Fz.useRef)(null);
      (0, Fz.useLayoutEffect)((() => {
        var zz, tz, sz;
        const Fz = null !== (zz = null === (tz = mz.current) || void 0 === tz ? void 0 : tz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
        null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-slider", ""), null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-focusable", ""), null === Fz || void 0 === Fz || null === (sz = Fz.querySelector(".rangeslider__handle")) || void 0 === sz || sz.setAttribute("data-pad-slider-handle", ""), Jz.current = Fz
      }), []), (0, Fz.useLayoutEffect)((() => {
        var zz, tz;
        xz ? null === (zz = Jz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (tz = Jz.current) || void 0 === tz || tz.removeAttribute("aria-disabled")
      }), [xz]);
      const Iz = (null !== (tz = String(oz).split(".")[1]) && void 0 !== tz ? tz : "").length,
        Cz = zz => {
          const tz = Number((Math.round((zz - Xz) / oz) * oz + Xz).toFixed(Iz));
          return Math.min(Oz, Math.max(Xz, tz))
        },
        ez = (0, Fz.useRef)(rz);
      ez.current = rz, (0, Fz.useEffect)((() => {
        const zz = mz.current;
        if (!zz) return;
        const tz = zz => {
          var tz;
          gz.has(zz.key) && (null === (tz = ez.current) || void 0 === tz || tz.call(ez))
        };
        return zz.addEventListener("keyup", tz), () => {
          zz.removeEventListener("keyup", tz)
        }
      }), []);
      const Zz = (0, Fz.useRef)(!1);
      return (0, Nz.g)(Jz, {
        adjust: zz => {
          if (xz) return;
          const tz = null !== Yz && void 0 !== Yz ? Yz : Math.max(oz, Math.round((Oz - Xz) / 20 / oz) * oz),
            Fz = Cz(sz + zz * tz * (Kz ? -1 : 1));
          Fz !== sz && (null === Pz || void 0 === Pz || Pz(), vz(Fz), null === rz || void 0 === rz || rz())
        },
        setFraction: zz => {
          if (xz) return;
          const tz = Cz(Xz + (Kz ? 1 - zz : zz) * (Oz - Xz));
          tz !== sz && (Zz.current || (Zz.current = !0, null === Pz || void 0 === Pz || Pz()), vz(tz))
        },
        endDrag: () => {
          Zz.current && (Zz.current = !1, null === rz || void 0 === rz || rz())
        }
      }), (0, bz.jsx)("div", {
        ref: mz,
        style: {
          display: "contents"
        },
        children: (0, bz.jsx)(Wz.c, {
          value: sz,
          min: Xz,
          max: Oz,
          step: oz,
          onChange: vz,
          orientation: Uz,
          reverse: Kz,
          tooltip: wz,
          labels: Dz,
          handleLabel: Hz,
          format: Bz,
          onChangeStart: () => {
            null === Pz || void 0 === Pz || Pz(), null === uz || void 0 === uz || uz(!0)
          },
          onChangeComplete: () => {
            null === uz || void 0 === uz || uz(!1), null === rz || void 0 === rz || rz()
          }
        })
      })
    }
    async function Bz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const tz = Kz.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: zz
      });
      !0 === await tz.getResult() && (0, uz.reloadBloxd)()
    }

    function Pz(zz) {
      let {
        label: tz,
        options: sz,
        value: Fz,
        onChange: Wz,
        circleInfoText: Xz
      } = zz;
      return (0, bz.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, bz.jsxs)("div", {
          className: "SliderText",
          children: [tz, Xz && (0, bz.jsx)(Oz.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Xz
          })]
        }), (0, bz.jsx)(oz.b, {
          ariaLabel: tz,
          options: sz,
          value: Fz,
          onChange: Wz
        })]
      })
    }
  },
  4607: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Hz,
      c: () => Bz
    });
    var Fz = sz(2881),
      Wz = sz(2883),
      Xz = sz(65),
      Oz = sz(1020),
      oz = sz.n(Oz),
      vz = sz(1306),
      Uz = sz(2873),
      Kz = sz(1319),
      uz = sz(4609),
      Nz = sz(4650),
      bz = sz(601),
      wz = sz(4656),
      Dz = sz(1087);

    function gz() {
      (0, uz.h)("texturePackPickReload")
    }

    function Hz(zz) {
      var tz;
      let {
        setApplySettingsCallback: sz
      } = zz;
      const [, Oz] = (0, Xz.useReducer)((zz => zz + 1), 0), oz = (0, Xz.useRef)(!1), vz = (0, Xz.useRef)(null);

      function Hz(zz, tz) {
        Uz.d.setFromJson(zz, "player");
        const Fz = Uz.d.saveTexturePack();
        if (bz.p) {
          const zz = Uz.d.toJson();
          Fz.then((tz => {
            tz && (0, wz.e)(zz, gz)
          }))
        } else oz.current ||= tz, vz.current !== Uz.d.getId() || Uz.d.getId() === Wz.s.CUSTOM && oz.current ? sz((() => uz.h)) : sz(null);
        Oz()
      }
      async function Pz(zz) {
        if (Uz.d.getId() !== zz.metaData.id) {
          if (Uz.d.getId() === Wz.s.CUSTOM && Uz.d.getFromFolderName()) {
            const zz = Kz.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await zz.getResult()) return
          }
          Hz(zz, !1)
        }
      }(0, Xz.useEffect)((() => {
        vz.current = Uz.d.getId()
      }), []);
      const rz = Fz.e,
        Yz = [rz, ...Object.values(Wz.s).filter((zz => zz !== rz))];
      return (0, Dz.jsx)(Dz.Fragment, {
        children: (0, Dz.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Dz.jsx)("div", {
            className: "TexturePackList",
            children: Yz.map((zz => (0, Dz.jsx)(Bz, {
              id: zz,
              isSelected: zz === Uz.d.getId(),
              setSelected: Pz
            }, zz)))
          }), Uz.d.getId() === Wz.s.CUSTOM && (0, Dz.jsx)(Nz.e, {
            folderName: null !== (tz = Uz.d.getFromFolderName()) && void 0 !== tz ? tz : null,
            onTexturePackUpdated: function(zz) {
              Hz(zz, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Bz(zz) {
      let {
        id: tz,
        isSelected: sz,
        setSelected: Oz,
        disabled: Uz = !1
      } = zz;
      const [Kz, uz] = (0, Xz.useState)(!0), [Nz, bz] = (0, Xz.useState)(""), [wz, gz] = (0, Xz.useState)(""), [Hz, Bz] = (0, Xz.useState)(""), Pz = (0, Xz.useRef)({});
      return (0, Xz.useEffect)((() => {
        (0, Fz.p)(tz).then((zz => {
          var tz;
          zz && (Pz.current = zz, uz(!1), bz(Pz.current.metaData.name), gz(Pz.current.metaData.author), Bz(null !== (tz = Pz.current.metaData.previewImage) && void 0 !== tz ? tz : ""))
        })).catch((zz => {
          console.warn(`Failed to fetch texture pack ${tz}`, zz)
        }))
      }), [tz]), (0, Dz.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Uz || void 0,
        className: oz()("TexturePack", {
          Selected: sz,
          Custom: tz === Wz.s.CUSTOM,
          Disabled: Uz
        }),
        onClick: () => {
          Kz || Uz || Oz(Pz.current)
        },
        children: [(0, Dz.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Hz ? `url(${Hz})` : void 0
          }
        }), Kz && (0, Dz.jsx)("div", {
          className: "TexturePackName",
          children: (0, Dz.jsx)(vz.d, {})
        }), !Kz && Nz && (0, Dz.jsx)("div", {
          className: "TexturePackName",
          children: Nz
        }), !Kz && wz && (0, Dz.jsx)("div", {
          className: "TexturePackAuthor",
          children: wz
        })]
      })
    }
  },
  4636: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1087);

    function Oz(zz) {
      let {
        options: tz,
        value: sz,
        onChange: Fz,
        ariaLabel: Oz,
        className: oz,
        reselectable: vz = !1,
        keepsFocus: Uz = !1
      } = zz;
      return (0, Xz.jsx)("div", {
        className: Wz()("SegmentedToggle", oz),
        role: "group",
        "aria-label": Oz,
        children: tz.map((zz => {
          const tz = zz.value === sz;
          return (0, Xz.jsx)("button", {
            type: "button",
            "aria-pressed": tz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: Wz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: tz
            }),
            onMouseDown: Uz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              tz && !vz || Fz(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
    }
  },
  4644: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Oz
    });
    var Fz = sz(65);
    const Wz = new WeakMap,
      Xz = zz => {
        var tz;
        const sz = zz.closest("[data-pad-slider]");
        return sz && null !== (tz = Wz.get(sz)) && void 0 !== tz ? tz : null
      },
      Oz = (zz, tz) => {
        const sz = (0, Fz.useRef)(tz);
        sz.current = tz, (0, Fz.useEffect)((() => {
          if (zz.current) return ((zz, tz) => (Wz.set(zz, tz), () => {
            Wz.get(zz) === tz && Wz.delete(zz)
          }))(zz.current, {
            adjust: zz => {
              sz.current.adjust(zz)
            },
            setFraction: zz => {
              sz.current.setFraction(zz)
            },
            endDrag: () => {
              sz.current.endDrag()
            }
          })
        }), [zz])
      }
  },
  4656: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      e: () => Oz
    });
    var Fz = sz(2883),
      Wz = sz(4665);
    let Xz = null;

    function Oz(zz, tz) {
      Xz = {
        pack: zz.metaData.id === Fz.e ? null : zz,
        prompt: tz
      }
    }

    function oz(zz, tz) {
      const sz = Xz;
      null !== sz && (0, Wz.d)(sz.pack, zz) && (Xz = null, tz && sz.prompt())
    }
  },
  4665: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return Wz(zz, tz)
    }

    function Wz(zz, tz) {
      if (zz === tz) return !0;
      if ("object" !== typeof zz || "object" !== typeof tz || null === zz || null === tz || Array.isArray(zz) !== Array.isArray(tz)) return !1;
      const sz = zz,
        Fz = tz,
        Xz = Object.keys(sz);
      return Xz.length === Object.keys(Fz).length && Xz.every((zz => Object.prototype.hasOwnProperty.call(Fz, zz) && Wz(sz[zz], Fz[zz])))
    }
    sz.d(tz, {
      d: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);