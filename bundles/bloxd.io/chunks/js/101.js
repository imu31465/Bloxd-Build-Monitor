export const id = 101;
export const ids = [101];
export const modules = {
  4670: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1047),
      lz = bz(1305),
      Mz = bz(3248),
      tz = bz(128),
      Hz = bz(3298),
      Oz = bz(3286),
      pz = bz(1089);

    function dz(zz) {
      let {
        game: uz
      } = zz;
      const bz = (0, tz.o)() ? "large" : "small",
        Ez = (0, Hz.e)(uz, bz),
        dz = (0, Mz.f)(Ez),
        Fz = void 0 !== dz.blurhash;
      return (0, pz.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [dz.isLoading && !Fz && (0, pz.jsx)(lz.c, {
          loaderType: "Secondary"
        }), !dz.failed && (null !== dz.src || Fz) && (0, pz.jsx)("div", {
          className: nz()("SchematicImage", Oz.i, {
            SchematicImageFadeIn: dz.fadeIn && !Fz
          }),
          style: (0, Oz.f)(dz),
          children: (0, pz.jsx)(Oz.d, {
            image: dz
          })
        }), dz.failed && (0, pz.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pz.jsx)(iz.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4780: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(4706),
      Mz = bz(1305),
      tz = bz(1181),
      Hz = bz(2907),
      Oz = bz(3059),
      pz = bz(1047),
      dz = bz(1089);

    function Fz(zz) {
      let {
        folderName: uz,
        onTexturePackUpdated: nz,
        disabled: Fz = !1,
        maxFileSizeMb: Zz,
        packOwner: Rz
      } = zz;
      const {
        t: Kz
      } = (0, tz.F)(), [wz, Xz] = (0, Ez.useState)(!1), [fz, sz] = (0, Ez.useState)(null), [rz, oz] = (0, Ez.useState)(null), Nz = (0, Ez.useRef)(null);
      const {
        getRootProps: vz,
        getInputProps: xz,
        isDragActive: Jz
      } = (0, lz.b)({
        onDrop: async function(zz) {
          Xz(!0);
          try {
            const uz = await (0, Hz.u)(zz);
            if ("customGame" === Rz && (0, Oz.p)(uz)) return void sz(Kz(Oz.e));
            if (void 0 !== Zz) {
              const zz = JSON.stringify(uz).length / 1048576;
              if (zz > Zz) return void sz(`File size is too large. Max size is ${Zz}MB. Current size is ${zz}MB.`)
            }
            sz(null), oz(null), nz(uz), Nz.current = uz,
              function(zz, uz) {
                const Ez = zz.modelOverrides;
                Ez && Promise.all([bz.e(195), bz.e(194)]).then((() => bz(9052))).then((bz => {
                  let {
                    packDisplayName: nz,
                    refusedPackModels: iz,
                    packModelSummary: lz
                  } = bz;
                  const Mz = nz(zz.metaData);
                  uz(lz(Mz, iz(Mz, Ez, !1)))
                })).catch((zz => {
                  console.error("Checking the texture pack's models failed:", zz)
                }))
              }(uz, (zz => {
                Nz.current === uz && oz(zz)
              }))
          } catch {
            sz("Invalid Texture Pack Folder")
          } finally {
            Xz(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: Fz
      });
      return (0, dz.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, dz.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Kz("settingsMenu:customTextureWarning"), ".", (0, dz.jsx)("br", {}), Kz("settingsMenu:viewDocumentation"), ":", " ", (0, dz.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), fz && (0, dz.jsxs)("div", {
          className: "CustomTextureError",
          children: [Kz("general:error"), ": ", fz]
        }), rz && (0, dz.jsx)("div", {
          className: "CustomTextureError",
          children: rz
        }), (0, dz.jsxs)("div", {
          ...vz({
            className: iz()("CustomTextureFolderUpload", {
              ActiveDrag: Jz,
              Disabled: Fz
            })
          }),
          children: [(0, dz.jsx)("input", {
            ...xz({
              webkitdirectory: "true"
            })
          }), wz && (0, dz.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, dz.jsx)(Mz.c, {})
          }), !wz && !Jz && uz && (0, dz.jsxs)(dz.Fragment, {
            children: [(0, dz.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, dz.jsx)(pz.c, {
                name: "folder-image"
              })
            }), (0, dz.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: uz
            })]
          }), !wz && (Jz || !uz) && (0, dz.jsxs)(dz.Fragment, {
            children: [(0, dz.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, dz.jsx)(pz.c, {
                name: "up-from-bracket"
              })
            }), (0, dz.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4746: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz,
      e: () => fz,
      f: () => Rz,
      j: () => Xz
    });
    var Ez = bz(56),
      nz = bz(4753),
      iz = bz(4144),
      lz = bz(1332),
      Mz = bz(4770),
      tz = bz(1038),
      Hz = bz.n(tz),
      Oz = bz(1322),
      pz = bz(1673),
      dz = bz(4776),
      Fz = bz(1089);

    function Zz(zz) {
      let {
        label: uz,
        onClick: bz,
        checked: Ez,
        circleInfoText: nz,
        className: Mz,
        disabled: tz,
        note: Oz
      } = zz;
      return (0, Fz.jsxs)("div", {
        "aria-disabled": tz || void 0,
        "data-pad-focusable": !0,
        className: Hz()("SettingBox CheckboxContainer", {
          [Mz]: Mz,
          SettingBoxDisabled: tz
        }),
        onClick: () => {
          tz || bz(!Ez)
        },
        children: [(0, Fz.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Fz.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Fz.jsx)(iz.b, {
              className: "SettingsCheckbox",
              checked: Ez,
              disabled: tz,
              onChange: () => {}
            })
          }), (0, Fz.jsxs)("div", {
            className: "CheckboxText",
            children: [uz, nz && (0, Fz.jsx)("span", {
              onClick: zz => zz.stopPropagation(),
              children: (0, Fz.jsx)(lz.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: nz
              })
            })]
          })]
        }), Oz && (0, Fz.jsx)("div", {
          className: "SettingNote",
          children: Oz
        })]
      })
    }

    function Rz(zz) {
      let {
        name: uz,
        onChange: bz,
        min: nz,
        max: iz,
        step: Mz,
        initValue: tz,
        circleInfoText: Oz,
        format: pz,
        className: dz,
        padStep: Zz,
        disabled: Rz = !1,
        selectableMax: Kz,
        cappedNote: Xz,
        onChangeComplete: fz
      } = zz;
      const [sz, rz] = (0, Ez.useState)(tz), oz = (0, Ez.useRef)(tz);
      (0, Ez.useEffect)((() => {
        oz.current = tz, rz(tz)
      }), [tz]);
      const Nz = void 0 !== Kz && Kz < iz,
        vz = Nz ? {
          "--slider-selectable": (Kz - nz) / (iz - nz)
        } : void 0;
      return (0, Fz.jsxs)("div", {
        className: Hz()("SettingBox SettingsSliderDiv", {
          [dz]: dz,
          SettingBoxDisabled: Rz,
          SliderCapped: Nz
        }),
        style: vz,
        children: [(0, Fz.jsxs)("div", {
          className: "SliderText",
          children: [`${uz}: ${pz?pz(sz):sz}`, Oz && (0, Fz.jsx)(lz.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Oz
          })]
        }), (0, Fz.jsx)("div", {
          className: "SliderDiv",
          children: (0, Fz.jsx)(wz, {
            value: sz,
            min: nz,
            max: iz,
            step: Mz,
            onChange: zz => {
              if (Nz && zz >= Kz && sz === Kz) return;
              const uz = Nz ? Math.min(zz, Kz) : zz;
              oz.current = uz, rz(uz), bz(uz)
            },
            onChangeComplete: fz && (() => {
              fz(oz.current)
            }),
            format: pz,
            padStep: Zz,
            disabled: Rz
          })
        }), Nz && Xz && (0, Fz.jsx)("div", {
          className: "SettingNote",
          children: Xz
        })]
      })
    }
    const Kz = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function wz(zz) {
      var uz;
      let {
        value: bz,
        min: iz,
        max: lz,
        step: Mz,
        onChange: tz,
        orientation: Hz,
        reverse: Oz,
        setIsChanging: pz,
        tooltip: Zz,
        labels: Rz,
        handleLabel: wz,
        format: Xz,
        onChangeStart: fz,
        onChangeComplete: sz,
        padStep: rz,
        disabled: oz = !1
      } = zz;
      const Nz = (0, Ez.useRef)(null),
        vz = (0, Ez.useRef)(null);
      (0, Ez.useLayoutEffect)((() => {
        var zz, uz, bz;
        const Ez = null !== (zz = null === (uz = Nz.current) || void 0 === uz ? void 0 : uz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
        null === Ez || void 0 === Ez || Ez.setAttribute("data-pad-slider", ""), null === Ez || void 0 === Ez || Ez.setAttribute("data-pad-focusable", ""), null === Ez || void 0 === Ez || null === (bz = Ez.querySelector(".rangeslider__handle")) || void 0 === bz || bz.setAttribute("data-pad-slider-handle", ""), vz.current = Ez
      }), []), (0, Ez.useLayoutEffect)((() => {
        var zz, uz;
        oz ? null === (zz = vz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (uz = vz.current) || void 0 === uz || uz.removeAttribute("aria-disabled")
      }), [oz]);
      const xz = (null !== (uz = String(Mz).split(".")[1]) && void 0 !== uz ? uz : "").length,
        Jz = zz => {
          const uz = Number((Math.round((zz - iz) / Mz) * Mz + iz).toFixed(xz));
          return Math.min(lz, Math.max(iz, uz))
        },
        Az = (0, Ez.useRef)(sz);
      Az.current = sz, (0, Ez.useEffect)((() => {
        const zz = Nz.current;
        if (!zz) return;
        const uz = zz => {
          var uz;
          Kz.has(zz.key) && (null === (uz = Az.current) || void 0 === uz || uz.call(Az))
        };
        return zz.addEventListener("keyup", uz), () => {
          zz.removeEventListener("keyup", uz)
        }
      }), []);
      const Tz = (0, Ez.useRef)(!1);
      return (0, dz.f)(vz, {
        adjust: zz => {
          if (oz) return;
          const uz = null !== rz && void 0 !== rz ? rz : Math.max(Mz, Math.round((lz - iz) / 20 / Mz) * Mz),
            Ez = Jz(bz + zz * uz * (Oz ? -1 : 1));
          Ez !== bz && (null === fz || void 0 === fz || fz(), tz(Ez), null === sz || void 0 === sz || sz())
        },
        setFraction: zz => {
          if (oz) return;
          const uz = Jz(iz + (Oz ? 1 - zz : zz) * (lz - iz));
          uz !== bz && (Tz.current || (Tz.current = !0, null === fz || void 0 === fz || fz()), tz(uz))
        },
        endDrag: () => {
          Tz.current && (Tz.current = !1, null === sz || void 0 === sz || sz())
        }
      }), (0, Fz.jsx)("div", {
        ref: Nz,
        style: {
          display: "contents"
        },
        children: (0, Fz.jsx)(nz.c, {
          value: bz,
          min: iz,
          max: lz,
          step: Mz,
          onChange: tz,
          orientation: Hz,
          reverse: Oz,
          tooltip: Zz,
          labels: Rz,
          handleLabel: wz,
          format: Xz,
          onChangeStart: () => {
            null === fz || void 0 === fz || fz(), null === pz || void 0 === pz || pz(!0)
          },
          onChangeComplete: () => {
            null === pz || void 0 === pz || pz(!1), null === sz || void 0 === sz || sz()
          }
        })
      })
    }
    async function Xz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const uz = Oz.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: zz
      });
      !0 === await uz.getResult() && (0, pz.reloadBloxd)()
    }

    function fz(zz) {
      let {
        label: uz,
        options: bz,
        value: Ez,
        onChange: nz,
        circleInfoText: iz
      } = zz;
      return (0, Fz.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Fz.jsxs)("div", {
          className: "SliderText",
          children: [uz, iz && (0, Fz.jsx)(lz.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: iz
          })]
        }), (0, Fz.jsx)(Mz.d, {
          ariaLabel: uz,
          options: bz,
          value: Ez,
          onChange: nz
        })]
      })
    }
  },
  4744: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => wz,
      e: () => Xz
    });
    var Ez = bz(2907),
      nz = bz(2916),
      iz = bz(56),
      lz = bz(1038),
      Mz = bz.n(lz),
      tz = bz(1305),
      Hz = bz(2899),
      Oz = bz(1322),
      pz = bz(4746),
      dz = bz(4780),
      Fz = bz(606),
      Zz = bz(4783),
      Rz = bz(1089);

    function Kz() {
      (0, pz.j)("texturePackPickReload")
    }

    function wz(zz) {
      var uz;
      let {
        setApplySettingsCallback: bz
      } = zz;
      const [, lz] = (0, iz.useReducer)((zz => zz + 1), 0), Mz = (0, iz.useRef)(!1), tz = (0, iz.useRef)(null);

      function wz(zz, uz) {
        Hz.e.setFromJson(zz, "player");
        const Ez = Hz.e.saveTexturePack();
        if (Fz.x) {
          const zz = Hz.e.toJson();
          Ez.then((uz => {
            uz && (0, Zz.i)(zz, Kz)
          }))
        } else Mz.current ||= uz, tz.current !== Hz.e.getId() || Hz.e.getId() === nz.r.CUSTOM && Mz.current ? bz((() => pz.j)) : bz(null);
        lz()
      }
      async function fz(zz) {
        if (Hz.e.getId() !== zz.metaData.id) {
          if (Hz.e.getId() === nz.r.CUSTOM && Hz.e.getFromFolderName()) {
            const zz = Oz.NotificationProvider.showPromptPopup({
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
          wz(zz, !1)
        }
      }(0, iz.useEffect)((() => {
        tz.current = Hz.e.getId()
      }), []);
      const sz = Ez.e,
        rz = [sz, ...Object.values(nz.r).filter((zz => zz !== sz))];
      return (0, Rz.jsx)(Rz.Fragment, {
        children: (0, Rz.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Rz.jsx)("div", {
            className: "TexturePackList",
            children: rz.map((zz => (0, Rz.jsx)(Xz, {
              id: zz,
              isSelected: zz === Hz.e.getId(),
              setSelected: fz
            }, zz)))
          }), Hz.e.getId() === nz.r.CUSTOM && (0, Rz.jsx)(dz.c, {
            folderName: null !== (uz = Hz.e.getFromFolderName()) && void 0 !== uz ? uz : null,
            onTexturePackUpdated: function(zz) {
              wz(zz, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Xz(zz) {
      let {
        id: uz,
        isSelected: bz,
        setSelected: lz,
        disabled: Hz = !1
      } = zz;
      const [Oz, pz] = (0, iz.useState)(!0), [dz, Fz] = (0, iz.useState)(""), [Zz, Kz] = (0, iz.useState)(""), [wz, Xz] = (0, iz.useState)(""), fz = (0, iz.useRef)({});
      return (0, iz.useEffect)((() => {
        (0, Ez.s)(uz).then((zz => {
          var uz;
          zz && (fz.current = zz, pz(!1), Fz(fz.current.metaData.name), Kz(fz.current.metaData.author), Xz(null !== (uz = fz.current.metaData.previewImage) && void 0 !== uz ? uz : ""))
        })).catch((zz => {
          console.warn(`Failed to fetch texture pack ${uz}`, zz)
        }))
      }), [uz]), (0, Rz.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Hz || void 0,
        className: Mz()("TexturePack", {
          Selected: bz,
          Custom: uz === nz.r.CUSTOM,
          Disabled: Hz
        }),
        onClick: () => {
          Oz || Hz || lz(fz.current)
        },
        children: [(0, Rz.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: wz ? `url(${wz})` : void 0
          }
        }), Oz && (0, Rz.jsx)("div", {
          className: "TexturePackName",
          children: (0, Rz.jsx)(tz.c, {})
        }), !Oz && dz && (0, Rz.jsx)("div", {
          className: "TexturePackName",
          children: dz
        }), !Oz && Zz && (0, Rz.jsx)("div", {
          className: "TexturePackAuthor",
          children: Zz
        })]
      })
    }
  },
  4770: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1089);

    function lz(zz) {
      let {
        options: uz,
        value: bz,
        onChange: Ez,
        ariaLabel: lz,
        className: Mz,
        reselectable: tz = !1,
        keepsFocus: Hz = !1
      } = zz;
      return (0, iz.jsx)("div", {
        className: nz()("SegmentedToggle", Mz),
        role: "group",
        "aria-label": lz,
        children: uz.map((zz => {
          const uz = zz.value === bz;
          return (0, iz.jsx)("button", {
            type: "button",
            "aria-pressed": uz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: nz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: uz
            }),
            onMouseDown: Hz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              uz && !tz || Ez(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
    }
  },
  4776: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => lz
    });
    var Ez = bz(56);
    const nz = new WeakMap,
      iz = zz => {
        var uz;
        const bz = zz.closest("[data-pad-slider]");
        return bz && null !== (uz = nz.get(bz)) && void 0 !== uz ? uz : null
      },
      lz = (zz, uz) => {
        const bz = (0, Ez.useRef)(uz);
        bz.current = uz, (0, Ez.useEffect)((() => {
          if (zz.current) return ((zz, uz) => (nz.set(zz, uz), () => {
            nz.get(zz) === uz && nz.delete(zz)
          }))(zz.current, {
            adjust: zz => {
              bz.current.adjust(zz)
            },
            setFraction: zz => {
              bz.current.setFraction(zz)
            },
            endDrag: () => {
              bz.current.endDrag()
            }
          })
        }), [zz])
      }
  },
  4783: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => lz
    });
    var Ez = bz(2916),
      nz = bz(4789);
    let iz = null;

    function lz(zz, uz) {
      iz = {
        pack: zz.metaData.id === Ez.c ? null : zz,
        prompt: uz
      }
    }

    function Mz(zz, uz) {
      const bz = iz;
      null !== bz && (0, nz.c)(bz.pack, zz) && (iz = null, uz && bz.prompt())
    }
  },
  4789: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return nz(zz, uz)
    }

    function nz(zz, uz) {
      if (zz === uz) return !0;
      if ("object" !== typeof zz || "object" !== typeof uz || null === zz || null === uz || Array.isArray(zz) !== Array.isArray(uz)) return !1;
      const bz = zz,
        Ez = uz,
        iz = Object.keys(bz);
      return iz.length === Object.keys(Ez).length && iz.every((zz => Object.prototype.hasOwnProperty.call(Ez, zz) && nz(bz[zz], Ez[zz])))
    }
    bz.d(uz, {
      c: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);