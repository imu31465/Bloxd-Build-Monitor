export const id = 104;
export const ids = [104];
export const modules = {
  4681: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv,
      f: () => lv,
      g: () => Wv
    });
    Pv(4685);
    var hv = Pv(1175),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1344),
      pv = (Pv(52), Pv(4129)),
      dv = Pv(1042),
      Nv = Pv(1082);

    function lv(vv) {
      let {
        children: zv,
        label: Pv,
        className: Sv,
        circleInfoText: pv,
        disabled: lv,
        onLabelClick: Tv
      } = vv;
      const {
        t: Wv
      } = (0, hv.x)(), wv = (0, Nv.jsxs)("div", {
        className: ev()("Label", {
          ClickableLabel: void 0 !== Tv
        }),
        onClick: Tv,
        children: [Wv(Pv), pv && (0, Nv.jsx)(dv.b, {
          name: "circle-info"
        })]
      });
      return (0, Nv.jsxs)("div", {
        className: ev()("LabeledInput", {
          [Sv]: Sv,
          DisabledLabelInput: lv
        }),
        children: [pv && (0, Nv.jsx)(gv.h, {
          tooltipInner: (0, Nv.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Wv(pv)
          }),
          children: wv
        }), !pv && wv, zv]
      })
    }

    function Tv(vv) {
      let {
        checked: zv,
        setChecked: Pv
      } = vv;
      return (0, Nv.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: vv => {
          Pv(!zv)
        },
        children: (0, Nv.jsx)(pv.e, {
          checked: zv,
          onChange: vv => {
            Pv(vv.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Wv(vv) {
      let {
        checked: zv,
        setChecked: Pv,
        disabled: hv
      } = vv;
      return (0, Nv.jsx)("div", {
        className: ev()("SwitchContainer", {
          SwitchContainerDisabled: hv
        }),
        onClick: () => {
          hv || Pv(!zv)
        },
        children: (0, Nv.jsx)(pv.e, {
          className: "SwitchCheckbox",
          checked: zv,
          onChange: vv => {
            Pv(vv.target.checked)
          },
          disabled: !!hv
        })
      })
    }
  },
  4694: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Nv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(4386),
      gv = Pv(1175),
      pv = Pv(1082);
    const dv = [...ev.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Nv(vv) {
      const {
        disabled: zv,
        hideWrapper: Pv
      } = vv, {
        t: hv
      } = (0, gv.x)(), Nv = vv.advancedMode ? dv.map((zv => [zv, vv.callbacks[zv]])) : ev.j.map((zv => [zv, vv.callbacks[zv]])), Tv = (0, pv.jsx)("div", {
        className: Sv()("PluginsGrid", {
          SectionBody: !Pv
        }),
        children: Nv.map((vv => {
          let [Pv, hv] = vv;
          return (0, pv.jsx)(lv, {
            plugin: Pv,
            callbacks: hv,
            disabled: zv
          }, Pv)
        }))
      });
      return Pv ? Tv : (0, pv.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, pv.jsx)("div", {
          className: "SectionTitle",
          children: hv("worldBuilder:pluginsSection")
        }), Tv]
      })
    }

    function lv(vv) {
      let {
        plugin: zv,
        callbacks: {
          isEnabled: Pv,
          uF: hv
        },
        disabled: ev
      } = vv;
      const {
        t: dv
      } = (0, gv.x)(), Nv = Pv();
      return (0, pv.jsxs)("div", {
        className: Sv()("PluginCard", {
          PluginCardEnabled: Nv,
          PluginCardDisabledForm: ev
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ev || void 0,
        onClick: () => {
          ev || hv(!Nv)
        },
        children: [(0, pv.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, pv.jsx)("img", {
            src: `/textures/games/classic/customGames/${zv}.png`,
            alt: zv
          })
        }), (0, pv.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, pv.jsx)("div", {
            className: "PluginCardTitle",
            children: dv(Tv[zv])
          }), (0, pv.jsx)("div", {
            className: "PluginCardDescription",
            children: dv(Wv[zv])
          })]
        }), (0, pv.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: dv(Nv ? "general:on" : "general:off")
        })]
      })
    }
    const Tv = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Wv = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4679: (vv, zv, Pv) => {
    Pv.d(zv, {
      h: () => Sz,
      e: () => hz,
      f: () => Pz,
      j: () => ez
    });
    var hv = Pv(52),
      Sv = Pv(1336),
      ev = Pv(1442),
      gv = Pv(1647),
      pv = Pv(1175),
      dv = Pv(1327),
      Nv = Pv(1344),
      lv = Pv(1042),
      Tv = Pv(1209),
      Wv = Pv(1035),
      wv = Pv.n(Wv),
      av = Pv(302),
      sv = Pv(4386),
      Cv = Pv(1226),
      iv = Pv(4681),
      cv = Pv(2917),
      Gv = Pv(4694),
      mv = Pv(1082);

    function jv(vv) {
      let {
        icon: zv,
        title: Pv,
        disabled: hv,
        children: Sv
      } = vv;
      return (0, mv.jsxs)("div", {
        className: wv()("ManageCard", {
          ManageCardDisabled: hv
        }),
        children: [(0, mv.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, mv.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, mv.jsx)(lv.b, {
              name: zv
            })
          }), (0, mv.jsx)("div", {
            children: (0, mv.jsx)("h2", {
              className: "ManageCardTitle",
              children: Pv
            })
          })]
        }), (0, mv.jsxs)("div", {
          className: "ManageCardBody",
          children: [Sv, hv && (0, mv.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function fv(vv) {
      let {
        label: zv,
        caption: Pv,
        children: hv
      } = vv;
      return (0, mv.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, mv.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: zv
        }), hv, Pv && (0, mv.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Pv
        })]
      })
    }

    function Fv(vv) {
      let {
        label: zv,
        caption: Pv,
        disabled: hv,
        children: Sv
      } = vv;
      return (0, mv.jsxs)("div", {
        className: wv()("ManageField", {
          ManageFieldDisabled: hv
        }),
        children: [(0, mv.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, mv.jsx)("div", {
            className: "ManageFieldLabel",
            children: zv
          }), (0, mv.jsx)("div", {
            className: "ManageFieldCaption",
            children: Pv
          })]
        }), (0, mv.jsx)("div", {
          className: "ManageFieldControl",
          children: Sv
        })]
      })
    }

    function Yv(vv) {
      var zv, Pv;
      let {
        schematicData: hv,
        updateSchematicData: Sv,
        publishFormEnabled: ev,
        formEnabled: gv
      } = vv;
      const {
        t: dv
      } = (0, pv.x)(), Nv = !ev, lv = {
        tpRequests: {
          isEnabled: () => !hv.disableTpRequests,
          uF: vv => Sv("disableTpRequests", !vv)
        },
        spawnProtection: {
          isEnabled: () => !hv.disableSpawnProtection,
          uF: vv => Sv("disableSpawnProtection", !vv)
        },
        spawnReset: {
          isEnabled: () => !!hv.enableSpawnReset,
          uF: vv => Sv("enableSpawnReset", vv)
        },
        smpMarketplace: {
          isEnabled: () => !!hv.enableSmpMarketplace,
          uF: vv => Sv("enableSmpMarketplace", vv)
        },
        survivalGuns: {
          isEnabled: () => !!hv.enableSurvivalGuns,
          uF: vv => Sv("enableSurvivalGuns", vv)
        },
        fallDamage: {
          isEnabled: () => !hv.disableFallDamage,
          uF: vv => Sv("disableFallDamage", !vv)
        },
        dayNight: {
          isEnabled: () => !!hv.enableDayNight,
          uF: vv => Sv("enableDayNight", vv)
        }
      };
      return (0, mv.jsxs)(mv.Fragment, {
        children: [!1 === hv.schematicContainsSpawnBlock && (0, mv.jsx)("div", {
          className: "ManageWarningBanner",
          children: dv("worldBuilder:mustContainSpawnBlock")
        }), (0, mv.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, mv.jsxs)(jv, {
            icon: "globe",
            title: dv("worldBuilder:worldRulesSection"),
            disabled: !gv,
            children: [(0, mv.jsx)(Fv, {
              label: dv("classic:defaultGamemode"),
              caption: dv("classic:defaultGamemodeDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(cv.e, {
                controlClassName: "ManageDropdown",
                options: sv.B.map((vv => ({
                  value: vv,
                  label: av.p[vv]
                }))),
                value: hv.defaultGamemode,
                onChange: vv => Sv("defaultGamemode", vv.value)
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:voidDeathHeight"),
              caption: dv("classic:voidDeathHeightDescription"),
              disabled: Nv,
              children: (0, mv.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, mv.jsx)("input", {
                  type: "number",
                  max: Cv.D,
                  value: null !== (zv = hv.voidDeathHeight) && void 0 !== zv ? zv : "",
                  onChange: vv => {
                    const zv = parseInt(vv.target.value);
                    Sv("voidDeathHeight", zv)
                  }
                }), (0, mv.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: dv("worldBuilder:blocksUnit")
                })]
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:worldBorder"),
              caption: dv("classic:worldBorderDescription"),
              disabled: Nv,
              children: (0, mv.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, mv.jsx)("input", {
                  type: "number",
                  min: Cv.I,
                  max: Cv.F,
                  placeholder: dv("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Pv = hv.worldBorder) && void 0 !== Pv ? Pv : "",
                  onChange: vv => {
                    const zv = parseInt(vv.target.value);
                    Sv("worldBorder", isNaN(zv) ? null : zv)
                  }
                }), (0, mv.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: dv("worldBuilder:blocksUnit")
                })]
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:disableMobs"),
              caption: dv("classic:disableMobsDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(iv.g, {
                checked: hv.disableMobs,
                setChecked: vv => Sv("disableMobs", vv),
                disabled: Nv
              })
            })]
          }), (0, mv.jsxs)(jv, {
            icon: "user-group",
            title: dv("worldBuilder:playerAndLobbySection"),
            disabled: !gv,
            children: [(0, mv.jsx)(Fv, {
              label: dv("classic:disableKeepInventory"),
              caption: dv("classic:disableKeepInventoryDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(iv.g, {
                checked: hv.disableKeepInventory,
                setChecked: vv => Sv("disableKeepInventory", vv),
                disabled: Nv
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:persistInventory"),
              caption: dv("classic:persistInventoryDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(cv.e, {
                controlClassName: "ManageDropdown",
                options: sv.k.map((vv => ({
                  value: vv,
                  label: av.i[vv]
                }))),
                value: hv.persistInventory,
                onChange: vv => Sv("persistInventory", vv.value)
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:persistWorld"),
              caption: dv("classic:persistWorldDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(iv.g, {
                checked: hv.persistWorld,
                setChecked: vv => Sv("persistWorld", vv),
                disabled: Nv
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:disableLobbySpawn"),
              caption: dv("classic:disableLobbySpawnDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(iv.g, {
                checked: hv.disableLobbySpawn,
                setChecked: vv => Sv("disableLobbySpawn", vv),
                disabled: Nv
              })
            }), (0, mv.jsx)(Fv, {
              label: dv("classic:hideLobbyCode"),
              caption: dv("classic:hideLobbyCodeDescription"),
              disabled: Nv,
              children: (0, mv.jsx)(iv.g, {
                checked: hv.hideLobbyCode,
                setChecked: vv => Sv("hideLobbyCode", vv),
                disabled: Nv
              })
            })]
          })]
        }), (0, mv.jsx)(jv, {
          icon: "layer-group",
          title: dv("worldBuilder:pluginsSection"),
          disabled: !gv,
          children: (0, mv.jsx)(Gv.d, {
            callbacks: lv,
            disabled: Nv,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var nv = Pv(4696),
      Ov = Pv(4129),
      Dv = Pv(1482),
      Kv = Pv(3247),
      Vv = Pv(1108),
      Uv = Pv(4653),
      Rv = Pv(4698),
      xv = Pv(1445);
    const tv = 50,
      qv = .3;
    async function Iv(vv) {
      const zv = await
      function(vv) {
        return new Promise(((zv, Pv) => {
          const hv = new FileReader;
          hv.onload = () => zv(hv.result), hv.onerror = Pv, hv.readAsDataURL(vv)
        }))
      }(vv), Pv = await
      function(vv) {
        return new Promise(((zv, Pv) => {
          const hv = new Image;
          hv.onload = () => zv(hv), hv.onerror = () => Pv(new Error("Failed to load image")), hv.src = vv
        }))
      }(zv);
      if (Pv.naturalHeight > Pv.naturalWidth) throw new Qv;
      const hv = 1024 * tv,
        {
          dataUrl: Sv,
          finalQuality: ev
        } = function(vv, zv) {
          const Pv = document.createElement("canvas");
          Pv.width = vv.naturalWidth, Pv.height = vv.naturalHeight, Pv.getContext("2d").drawImage(vv, 0, 0);
          let hv = .92,
            Sv = Pv.toDataURL("image/jpeg", hv);
          for (; .75 * Sv.length > zv && hv > .05;) hv -= .05, Sv = Pv.toDataURL("image/jpeg", hv);
          return {
            dataUrl: Sv,
            finalQuality: hv
          }
        }(Pv, hv);
      if (Math.ceil(.75 * Sv.length) > hv) throw new Zv;
      return {
        base64Jpg: Sv,
        heavilyCompressed: ev < qv
      }
    }
    class Qv extends Error {}
    class Zv extends Error {}
    var Av = function(vv) {
      return vv[vv.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", vv[vv.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", vv
    }(Av || {});

    function Lv(vv) {
      var zv;
      let {
        schematicId: Pv,
        hasReadUploadPolicy: Sv,
        onPolicyValidationError: dv,
        onThumbnailReady: Nv
      } = vv;
      const {
        t: Wv
      } = (0, pv.x)(), [av, sv] = (0, hv.useState)(null), [Cv, iv] = (0, hv.useState)(""), [cv, Gv] = (0, hv.useState)(""), [jv, fv] = (0, hv.useState)(!0), [Fv, Yv] = (0, hv.useState)(!1), nv = (0, hv.useRef)(!1), [Ov, Dv] = (0, hv.useState)(null), [Kv, Vv] = (0, hv.useState)(!1), [Uv, xv] = (0, hv.useState)(!1), tv = (0, hv.useRef)(0), {
        getRootProps: qv,
        getInputProps: Av,
        isDragActive: Lv
      } = (0, Rv.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async vv => {
          if (0 === vv.length) return;
          const zv = vv[0],
            Pv = ++tv.current;
          Dv(null), Vv(!1), sv(null), iv(zv.name);
          try {
            const vv = await Iv(zv);
            if (Pv !== tv.current) return;
            sv(vv), Vv(vv.heavilyCompressed)
          } catch (hv) {
            if (Pv !== tv.current) return;
            Dv(Wv(hv instanceof Qv ? "thumbnail:portraitImagesNotAllowed" : hv instanceof Zv ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Hv = Cv.length <= 30 ? Cv : `${Cv.slice(0,27)}...`, Mv = null !== (zv = null === av || void 0 === av ? void 0 : av.base64Jpg) && void 0 !== zv ? zv : null, yv = cv.trim(), Bv = yv.length >= Tv.n && yv.length <= Tv.j, Jv = Uv && !av && !Ov, Ev = Uv && !Bv;
      return (0, mv.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, mv.jsxs)("div", {
          ...qv({
            className: wv()("ThumbnailUploadDropzone", {
              ActiveDrag: Lv,
              ValidationError: Jv
            })
          }),
          children: [(0, mv.jsx)("input", {
            ...Av()
          }), !Lv && Mv ? (0, mv.jsxs)(mv.Fragment, {
            children: [(0, mv.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, mv.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, mv.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, mv.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, mv.jsx)("img", {
                    src: Mv,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, mv.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, mv.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, mv.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, mv.jsx)("img", {
                    src: Mv,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, mv.jsxs)("div", {
              children: [(0, mv.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Hv
              }), (0, mv.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Wv("thumbnail:preview")
              })]
            })]
          }) : (0, mv.jsxs)(mv.Fragment, {
            children: [(0, mv.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, mv.jsx)(lv.b, {
                name: "image"
              })
            }), (0, mv.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Wv("thumbnail:dragImageHere")
            })]
          })]
        }), Jv && (0, mv.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Wv("thumbnail:imageRequired")
        }), (0, mv.jsx)(gv.c, {
          className: wv()("ThumbnailUploadNameInput", {
            ValidationError: Ev
          }),
          placeholderText: Wv("thumbnail:thumbnailName"),
          defaultValue: cv,
          onValueChange: vv => {
            Gv(vv)
          },
          maxLength: Tv.j
        }), Ev && (0, mv.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Wv("thumbnail:nameRequired", {
            min: Tv.n,
            max: Tv.j
          })
        }), (0, mv.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, mv.jsx)("input", {
            type: "checkbox",
            checked: jv,
            onChange: vv => {
              fv(vv.target.checked)
            }
          }), Wv("thumbnail:setAsThumbnailOnceApproved")]
        }), Kv && (0, mv.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Wv("thumbnail:heavyCompressionWarning")
        }), Ov && (0, mv.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Ov
        }), (0, mv.jsx)(ev.j, {
          disabled: Fv,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (xv(!0), !nv.current && av && Bv && Sv) {
              nv.current = !0, Yv(!0), Dv(null);
              try {
                await Nv(av.base64Jpg, yv, jv ? Pv : null)
              } catch (vv) {
                Dv(vv.errorMessageForUser ? Wv(vv.errorMessageForUser, vv.errorMessageTranslationParams) : Wv("thumbnail:failedToUploadImage"))
              } finally {
                nv.current = !1, Yv(!1)
              }
            } else Sv || dv()
          },
          children: Wv(Fv ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Hv = 2e3;

    function Mv(vv) {
      let {
        schematicId: zv,
        ownedThumbnailCount: Pv,
        onClose: Sv,
        onThumbnailReady: ev
      } = vv;
      const {
        t: gv
      } = (0, pv.x)(), {
        userContext: dv
      } = (0, Vv.d)(), [Nv, Wv] = (0, hv.useState)(!1), [av, sv] = (0, hv.useState)(!1), [Cv, iv] = (0, hv.useState)(!1), cv = (0, hv.useRef)();
      (0, hv.useEffect)((() => () => {
        clearTimeout(cv.current)
      }), []);
      const Gv = function(vv, zv) {
        const Pv = [];
        return vv.isLoggedIn() || Pv.push(Av.NOT_LOGGED_IN), zv >= Tv.ab && Pv.push(Av.THUMBNAIL_LIMIT_REACHED), Pv
      }(dv, Pv);
      if (Gv.length > 0) {
        const vv = {
          [Av.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Av.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Tv.ab
            }
          }
        };
        return (0, mv.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, mv.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gv("thumbnail:cannotUploadThumbnail")
          }), Gv.map(((zv, Pv) => {
            const hv = vv[zv];
            return (0, mv.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, mv.jsx)(lv.b, {
                name: "triangle-exclamation"
              }), (0, mv.jsx)("span", {
                children: gv(hv.key, hv.params)
              })]
            }, Pv)
          }))]
        })
      }
      return (0, mv.jsxs)("div", {
        className: wv()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Nv
        }),
        children: [Nv && (0, mv.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, mv.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, mv.jsx)(lv.b, {
              name: "check"
            }), (0, mv.jsx)(xv.d, {})]
          }), (0, mv.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: gv("thumbnail:thumbnailUploaded")
          })]
        }), (0, mv.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: gv("thumbnail:uploadThumbnail")
        }), (0, mv.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, mv.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, mv.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: gv("thumbnail:chooseImage", {
                maxSizeKb: tv
              })
            }), (0, mv.jsx)(Lv, {
              schematicId: zv,
              hasReadUploadPolicy: av,
              onPolicyValidationError: () => {
                iv(!0)
              },
              onThumbnailReady: async (vv, zv, Pv) => {
                await ev(vv, zv, Pv), Wv(!0), cv.current = setTimeout(Sv, Hv)
              }
            })]
          }), (0, mv.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, mv.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: gv("thumbnail:uploadPolicy")
            }), (0, mv.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "check"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyFollowGuidelines")
                })]
              }), (0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "check"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyInGameAssets")
                })]
              }), (0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "check"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyLimitText")
                })]
              }), (0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "x"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyCopyrightContent")
                })]
              }), (0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "x"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "x"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyBloxdTags")
                })]
              }), (0, mv.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mv.jsx)(lv.b, {
                  name: "x"
                }), (0, mv.jsx)("span", {
                  children: gv("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, mv.jsxs)("label", {
              className: wv()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Cv && !av
              }),
              children: [(0, mv.jsx)("input", {
                type: "checkbox",
                checked: av,
                onChange: vv => {
                  sv(vv.target.checked)
                }
              }), gv("thumbnail:agreeToUploadPolicy")]
            }), Cv && !av && (0, mv.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: gv("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var yv = Pv(1184);
    const Bv = {
      "custom-game-bad-thumbnail": {
        reason: "thumbnail:rejectionInappropriate",
        tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
      },
      "thumbnail-copyright-content": {
        reason: "thumbnail:rejectionCopyright",
        tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
      },
      "thumbnail-random-irrelevant-content": {
        reason: "thumbnail:rejectionIrrelevant",
        tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
      },
      "thumbnail-sexual-content": {
        reason: "thumbnail:rejectionSexual",
        tips: ["thumbnail:rejectionSexualTip1", "thumbnail:rejectionSexualTip2", "thumbnail:rejectionSexualTip3"]
      },
      "thumbnail-substances-content": {
        reason: "thumbnail:rejectionSubstances",
        tips: ["thumbnail:rejectionSubstancesTip1", "thumbnail:rejectionSubstancesTip2"]
      },
      "thumbnail-unauthorized-bloxd-branding": {
        reason: "thumbnail:rejectionUnauthorisedBranding",
        tips: ["thumbnail:rejectionUnauthorisedBrandingTip1", "thumbnail:rejectionUnauthorisedBrandingTip2", "thumbnail:rejectionUnauthorisedBrandingTip3", "thumbnail:rejectionUnauthorisedBrandingTip4"]
      },
      "thumbnail-violent-gore-content": {
        reason: "thumbnail:rejectionViolence",
        tips: ["thumbnail:rejectionViolenceTip1", "thumbnail:rejectionViolenceTip2", "thumbnail:rejectionViolenceTip3", "thumbnail:rejectionViolenceTip4"]
      }
    };

    function Jv(vv) {
      var zv, Pv;
      let {
        schematicData: gv,
        updateSchematicData: Nv,
        publishFormEnabled: Tv,
        onClose: Wv
      } = vv;
      const {
        t: av
      } = (0, pv.x)(), {
        userContext: sv,
        isUserContextUpdating: Cv
      } = (0, Vv.d)(), iv = (0, Kv.b)(), [cv, Gv] = (0, hv.useState)([]), [jv, fv] = (0, hv.useState)([]), [Fv, Yv] = (0, hv.useState)(!0), [nv, Ov] = (0, hv.useState)(null !== (zv = gv.customThumbnailId) && void 0 !== zv ? zv : null), [Rv, xv] = (0, hv.useState)(null), tv = (0, hv.useRef)(null !== (Pv = gv.customThumbnailId) && void 0 !== Pv ? Pv : null), qv = (0, hv.useRef)(0), Iv = (0, hv.useRef)(null), Qv = (0, hv.useRef)(null), Zv = (0, hv.useRef)(null), Av = (0, hv.useRef)(!1);

      function Lv(vv, zv) {
        Zv.current && (clearTimeout(Zv.current), Zv.current = null), xv(vv), null !== vv && zv && (Zv.current = setTimeout((() => {
          xv(null), Zv.current = null
        }), 5e3))
      }(0, hv.useEffect)((() => () => {
        clearTimeout(Qv.current), clearTimeout(Zv.current)
      }), []);
      const Hv = (0, hv.useCallback)((() => {
        Yv(!0), Dv.e.getOwnedThumbnails(sv).then((vv => {
          const zv = [],
            Pv = [];
          for (const hv of vv.thumbnails) hv.rejectionPolicyId ? zv.push(hv) : Pv.push(hv);
          zv.sort(((vv, zv) => vv.lastUpdatedAt - zv.lastUpdatedAt)), Pv.sort(((vv, zv) => {
            const Pv = vv.approved ? 1 : 0,
              hv = (zv.approved ? 1 : 0) - Pv;
            return 0 !== hv ? hv : zv.lastUpdatedAt - vv.lastUpdatedAt
          })), fv(zv), Gv(Pv)
        })).catch((vv => {
          console.error("Failed to fetch thumbnails:", vv)
        })).finally((() => {
          Yv(!1)
        }))
      }), [sv]);
      async function Bv(vv, zv, Pv) {
        return Dv.e.uploadSchematicThumbnail(sv, vv, zv, Pv).then((() => {
          Lv({
            text: av("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Hv()
        }))
      }

      function Jv() {
        qv.current = Date.now(), Qv.current = null;
        const vv = Iv.current;
        Iv.current = null, Lv({
          text: av("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Dv.e.setSchematicThumbnail(sv, gv.schematicId, vv).then((() => {
          iv.current && (Lv({
            text: av("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), tv.current = vv, Nv("customThumbnailId", vv), Nv("customThumbnailBlurhash", void 0), Nv("customThumbnailVariants", void 0))
        })).catch((vv => {
          iv.current && (Lv({
            text: vv.errorMessageForUser ? av(vv.errorMessageForUser, vv.errorMessageTranslationParams) : av("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Ov(tv.current))
        }))
      }

      function bv(vv) {
        Ov(vv), Iv.current = vv;
        const zv = Date.now() - qv.current;
        zv >= 1e3 ? Jv() : (Lv({
          text: av("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Qv.current || (Qv.current = setTimeout((() => {
          Jv()
        }), 1e3 - zv)))
      }
      return (0, hv.useEffect)((() => {
        !1 === Cv && Hv()
      }), [Cv, Hv]), jv.length > 0 ? (0, mv.jsx)(Ev, {
        rejectedThumbnails: jv,
        userContext: sv,
        isMountedRef: iv,
        onAcknowledged: Hv
      }) : (0, mv.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, mv.jsxs)("div", {
          className: "SectionTitle",
          children: [av("thumbnail:gameThumbnail"), Rv && (0, mv.jsx)("span", {
            className: wv()("ThumbnailActionMsg", `ThumbnailActionMsg--${Rv.type}`),
            children: Rv.text
          })]
        }), (0, mv.jsx)("div", {
          className: "SectionBody",
          children: (0, mv.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, mv.jsxs)("div", {
              className: wv()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === nv
              }),
              onClick: () => bv(null),
              children: [(0, mv.jsx)(Uv.e, {
                game: {
                  schematicId: gv.schematicId,
                  imageBlurhash: gv.imageBlurhash
                }
              }), (0, mv.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: av("general:default")
              })]
            }), Fv && (0, mv.jsx)(dv.c, {}), cv.map(((vv, zv) => (0, mv.jsxs)("div", {
              className: wv()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: nv === vv.id,
                ThumbnailGridItemPending: !vv.approved
              }),
              onClick: () => {
                vv.approved && bv(vv.id)
              },
              children: [vv.approved && (0, mv.jsx)("img", {
                src: `${yv.clientSideServerUrls.s3Url}/customThumbnails/${vv.id}.jpg`,
                alt: "Thumbnail"
              }), vv.approved && (0, mv.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: vv.name
              }), vv.id && (0, mv.jsx)(ev.A, {
                className: "ThumbnailDeleteButton",
                onClick: zv => async function(vv, zv, Pv) {
                  vv.stopPropagation();
                  const hv = await Sv.NotificationProvider.showCustomPopup({
                      body: vv => (0, mv.jsx)(ov, {
                        thumbnailId: zv,
                        thumbnailName: Pv,
                        onClose: zv => {
                          zv && (Av.current = !0), vv()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Wv
                    }).getResult(),
                    ev = Av.current;
                  Av.current = !1, ev && !0 === hv && (iv.current && Lv({
                    text: av("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Dv.e.deleteSchematicThumbnail(sv, zv).then((() => {
                    iv.current && (Lv({
                      text: av("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), tv.current === zv && bv(null), Hv())
                  })).catch((vv => {
                    iv.current && Lv({
                      text: vv.errorMessageForUser ? av(vv.errorMessageForUser, vv.errorMessageTranslationParams) : av("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(zv, vv.id, vv.name),
                children: (0, mv.jsx)(lv.b, {
                  name: "trash-can"
                })
              }), !vv.approved && (0, mv.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, mv.jsx)(lv.b, {
                  name: "hourglass-clock"
                })
              }), !vv.approved && (0, mv.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [vv.name, (0, mv.jsx)("br", {}), av("thumbnail:pendingApproval")]
              })]
            }, zv))), (0, mv.jsxs)("div", {
              className: wv()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Tv
              }),
              onClick: () => {
                Tv && function(vv) {
                  let {
                    schematicId: zv,
                    ownedThumbnailCount: Pv,
                    onThumbnailReady: hv,
                    onClose: ev
                  } = vv;
                  Sv.NotificationProvider.showCustomPopup({
                    body: vv => (0, mv.jsx)(Mv, {
                      schematicId: zv,
                      ownedThumbnailCount: Pv,
                      onClose: vv,
                      onThumbnailReady: hv
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: ev,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: gv.schematicId,
                  ownedThumbnailCount: cv.length,
                  onThumbnailReady: Bv,
                  onClose: Wv
                })
              },
              children: [(0, mv.jsx)(lv.b, {
                name: "plus"
              }), (0, mv.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: av("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Ev(vv) {
      let {
        rejectedThumbnails: zv,
        userContext: Pv,
        isMountedRef: Sv,
        onAcknowledged: gv
      } = vv;
      const {
        t: Nv
      } = (0, pv.x)(), [Tv, Wv] = (0, hv.useState)(!1), [wv, av] = (0, hv.useState)(!1), sv = function(vv) {
        const zv = new Map;
        for (const Pv of vv) {
          const vv = Pv.rejectionPolicyId,
            hv = zv.get(vv);
          hv ? hv.push(Pv) : zv.set(vv, [Pv])
        }
        return zv
      }(zv);
      return (0, mv.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, mv.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, mv.jsx)(lv.b, {
            name: "triangle-exclamation"
          }), " ", Nv("thumbnail:thumbnailsRejected"), " ", (0, mv.jsx)(lv.b, {
            name: "triangle-exclamation"
          })]
        }), (0, mv.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Nv("thumbnail:thumbnailsRejectedDescription")
        }), (0, mv.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...sv.entries()].map((vv => {
            let [zv, Pv] = vv;
            const hv = Bv[zv];
            return (0, mv.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, mv.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: Pv.map((vv => (0, mv.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, mv.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, mv.jsx)(lv.b, {
                      name: "image-slash"
                    })
                  }), (0, mv.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, mv.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: vv.name
                    })
                  })]
                }, vv.id)))
              }), (0, mv.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Nv("thumbnail:rejectionReason"), " ", hv ? Nv(hv.reason) : zv]
              }), hv && (0, mv.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: hv.tips.map((vv => (0, mv.jsx)("li", {
                  children: Nv(vv)
                }, vv)))
              })]
            }, zv)
          }))
        }), (0, mv.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, mv.jsx)(Ov.e, {
            checked: Tv,
            onChange: vv => Wv(vv.target.checked),
            disabled: wv
          }), (0, mv.jsx)("span", {
            children: Nv("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, mv.jsx)(ev.j, {
          onClick: async function() {
            av(!0);
            const vv = await Promise.allSettled(zv.map((vv => Dv.e.deleteSchematicThumbnail(Pv, vv.id))));
            if (!Sv.current) return;
            const hv = vv.filter((vv => "rejected" === vv.status));
            hv.length > 0 && console.error("Some rejected thumbnails failed to delete:", hv), gv()
          },
          disabled: !Tv || wv,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: wv ? (0, mv.jsx)(dv.c, {}) : Nv("general:accept")
        })]
      })
    }

    function ov(vv) {
      let {
        thumbnailId: zv,
        thumbnailName: Pv,
        onClose: hv
      } = vv;
      const {
        t: Sv
      } = (0, pv.x)();
      return (0, mv.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, mv.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Sv("thumbnail:deleteThumbnail")
        }), (0, mv.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, mv.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${yv.clientSideServerUrls.s3Url}/customThumbnails/${zv}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, mv.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Pv
          })]
        }), (0, mv.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Sv("thumbnail:deleteThumbnailConfirmation")
        }), (0, mv.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, mv.jsxs)(ev.A, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => hv(!0),
            children: [(0, mv.jsx)(lv.b, {
              name: "trash-can"
            }), " ", Sv("general:delete")]
          }), (0, mv.jsx)(ev.e, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => hv(!1),
            children: Sv("general:cancel")
          })]
        })]
      })
    }
    var bv = Pv(2944),
      rv = Pv(4719),
      kv = Pv(4727),
      Xv = Pv(4782);

    function uv(vv) {
      let {
        schematicData: zv,
        setTexturePack: Pv,
        initializeTexturePack: Sv,
        publishFormEnabled: ev
      } = vv;
      const {
        t: gv
      } = (0, pv.x)(), [dv, Nv] = (0, hv.useState)(null), [lv, Tv] = (0, hv.useState)(null), [Wv, av] = (0, hv.useState)(!1), sv = (0, Kv.b)(), Cv = ev && !Wv, iv = zv.customTexturePackKey;

      function cv(vv) {
        var zv;
        Nv(vv.metaData.id), Tv(null !== (zv = vv.metaData.fromFolderName) && void 0 !== zv ? zv : null), (vv.metaData.id !== bv.j.CUSTOM || vv.metaData.fromFolderName) && Pv(vv)
      }
      return (0, hv.useEffect)((() => {
        iv && (av(!0), (0, rv.d)(iv).then((vv => {
          var zv;
          sv.current && (vv ? (Nv(vv.metaData.id), Tv(null !== (zv = vv.metaData.fromFolderName) && void 0 !== zv ? zv : null), Sv(vv)) : console.error(`No texture pack at ${iv}`))
        })).catch((vv => {
          console.error("Error fetching texture pack: ", vv)
        })).finally((() => {
          av(!1)
        })))
      }), [iv, Sv, sv]), (0, mv.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, mv.jsx)("div", {
          className: "SectionTitle",
          children: gv("customTexturePack:customTexturePack")
        }), (0, mv.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, mv.jsx)("div", {
            className: wv()("TexturePack", {
              Selected: null === dv && !Wv,
              Disabled: !Cv
            }),
            onClick: () => {
              Cv && (Nv(null), Pv(null), Tv(null))
            },
            children: (0, mv.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(bv.j).map((vv => (0, mv.jsx)(kv.g, {
            id: vv,
            isSelected: vv === dv,
            setSelected: cv,
            disabled: !Cv
          }, vv)))]
        }), dv === bv.j.CUSTOM && (0, mv.jsx)(Xv.e, {
          folderName: lv,
          onTexturePackUpdated: cv,
          disabled: !Cv,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var vz = Pv(4791);

    function zz(vv) {
      var zv;
      let {
        gameCategory: Pv,
        setGameCategory: hv,
        disabled: Sv
      } = vv;
      const gv = null !== (zv = (0, av.ab)(Pv)) && void 0 !== zv ? zv : "other";
      return (0, mv.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, mv.jsx)(iv.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Sv,
          children: (0, mv.jsx)(cv.e, {
            options: av.R.map((vv => ({
              value: vv,
              label: av.Q[vv]
            }))),
            value: gv,
            onChange: vv => {
              vv.value !== gv && hv(av.K[vv.value][0])
            }
          })
        }), (0, mv.jsx)(iv.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Sv,
          children: (0, mv.jsx)("div", {
            className: "GameCategoryOptions",
            children: av.K[gv].map((vv => (0, mv.jsx)(ev.K, {
              active: vv === Pv,
              onClick: () => {
                hv(vv)
              },
              children: (0, av.Z)(vv)
            }, vv)))
          })
        })]
      })
    }

    function Pz(vv) {
      let {
        editor: zv,
        onClose: Pv
      } = vv;
      const {
        t: hv
      } = (0, pv.x)(), {
        schematicData: Sv,
        updateSchematicData: ev,
        publishFormEnabled: dv,
        formEnabled: Nv
      } = zv;
      return (0, mv.jsxs)(mv.Fragment, {
        children: [(0, mv.jsxs)(jv, {
          icon: "pen-to-square",
          title: hv("worldBuilder:basicsSection"),
          disabled: !Nv,
          children: [(0, mv.jsx)(fv, {
            label: hv("general:name"),
            caption: hv("worldBuilder:schematicNameTagsHint"),
            children: (0, mv.jsx)(gv.c, {
              className: "SchematicPageName",
              defaultValue: Sv.name,
              onValueChange: vv => ev("name", vv),
              placeholderText: hv("worldBuilder:schematicNamePlaceholder"),
              maxLength: Tv.sb
            })
          }), (0, mv.jsx)(fv, {
            label: hv("general:description"),
            children: (0, mv.jsx)(gv.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Sv.description,
              onValueChange: vv => ev("description", vv),
              placeholderText: hv("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Tv.ob
            })
          }), (0, mv.jsx)(zz, {
            gameCategory: Sv.gameCategory,
            setGameCategory: vv => ev("gameCategory", vv),
            disabled: !dv
          }), !0 === Sv.gamePublished && (0, mv.jsx)(Jv, {
            schematicData: Sv,
            updateSchematicData: ev,
            publishFormEnabled: dv,
            onClose: function() {
              null === Pv || void 0 === Pv || Pv()
            }
          })]
        }), (0, mv.jsx)(Yv, {
          schematicData: Sv,
          updateSchematicData: ev,
          publishFormEnabled: dv,
          formEnabled: Nv
        }), !0 === Sv.gamePublished && (0, mv.jsx)(jv, {
          icon: "palette",
          title: hv("worldBuilder:texturePackSection"),
          disabled: !Nv,
          children: (0, mv.jsx)(uv, {
            schematicData: Sv,
            setTexturePack: zv.setTexturePack,
            initializeTexturePack: zv.initializeTexturePack,
            publishFormEnabled: dv
          })
        })]
      })
    }

    function hz(vv) {
      let {
        editor: zv
      } = vv;
      const {
        t: Pv
      } = (0, pv.x)(), {
        schematicData: hv,
        formEnabled: Sv,
        hasUnsavedChanges: gv
      } = zv, Tv = Sv && gv;
      return (0, mv.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Sv && gv && (0, mv.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, mv.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Pv("worldBuilder:unsavedChanges")]
        }), (0, mv.jsx)(Nv.h, {
          tooltipInner: (0, mv.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Pv(Sv && !gv ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, mv.jsxs)(ev.d, {
            className: "SaveChangesButton",
            onClick: () => zv.saveSchematic(hv.gamePublished),
            disabled: !Tv,
            children: [(0, mv.jsxs)("span", {
              className: Sv ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, mv.jsx)(lv.b, {
                name: "wrench"
              }), " ", Pv("worldBuilder:saveChanges")]
            }), !Sv && (0, mv.jsx)(dv.c, {})]
          })
        })]
      })
    }

    function Sz(vv) {
      let {
        schematic: zv,
        onSchematicUpdate: Pv,
        onClose: Sv,
        inSourceWorld: gv
      } = vv;
      const {
        t: dv
      } = (0, pv.x)();

      function Nv() {
        null === Sv || void 0 === Sv || Sv()
      }
      const lv = (0, vz.e)(zv, {
        onNavigateAway: Nv,
        inSourceWorld: gv
      });
      return (0, hv.useEffect)((() => {
        null === Pv || void 0 === Pv || Pv(lv.schematicData)
      }), [lv.schematicData, Pv]), (0, mv.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, mv.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, mv.jsx)(ev.b, {
            onClick: Nv,
            children: dv("worldBuilder:back")
          }), (0, mv.jsx)(jv, {
            icon: "rocket-launch",
            title: dv("worldBuilder:actionsSection"),
            disabled: !lv.formEnabled,
            children: (0, mv.jsx)(nv.d, {
              editor: lv
            })
          }), (0, mv.jsx)(Pz, {
            editor: lv,
            onClose: Nv
          })]
        }), (0, mv.jsx)(hz, {
          editor: lv
        })]
      })
    }

    function ez(vv) {
      let {
        schematic: zv,
        onSchematicUpdate: Pv,
        onClose: hv,
        inSourceWorld: ev
      } = vv;
      Sv.NotificationProvider.showCustomPopup({
        body: vv => (0, mv.jsx)(Sz, {
          schematic: zv,
          onSchematicUpdate: Pv,
          onClose: vv,
          inSourceWorld: ev
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hv,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4696: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1175),
      gv = Pv(1042),
      pv = Pv(1442),
      dv = Pv(1344),
      Nv = Pv(1327),
      lv = Pv(1082);

    function Tv(vv) {
      let {
        editor: zv,
        className: Pv
      } = vv;
      const {
        t: hv
      } = (0, ev.x)(), {
        schematicData: Tv,
        formEnabled: Wv,
        publishFormEnabled: wv
      } = zv, av = !Wv || !wv;
      return (0, lv.jsxs)("div", {
        className: Sv()("PublishButtonContainer", Pv),
        children: [zv.canEditSourceWorld && (0, lv.jsxs)(pv.d, {
          onClick: zv.editSourceWorld,
          disabled: av,
          children: [(0, lv.jsx)(gv.b, {
            name: "edit"
          }), " ", hv("worldBuilder:editSourceWorld")]
        }), !Tv.gamePublished && (0, lv.jsx)(dv.h, {
          tooltipInner: (0, lv.jsx)("div", {
            className: "PublishButtonTooltip",
            children: hv("worldBuilder:publishAsGameDescription")
          }),
          children: (0, lv.jsxs)(pv.j, {
            onClick: () => zv.saveSchematic(!0),
            disabled: av,
            children: [(0, lv.jsx)(gv.b, {
              name: "rocket-launch"
            }), " ", hv("worldBuilder:publishAsGame"), " ", (0, lv.jsx)(gv.b, {
              name: "info-circle"
            })]
          })
        }), !0 === Tv.gamePublished && (0, lv.jsxs)(lv.Fragment, {
          children: [(0, lv.jsx)(dv.h, {
            tooltipInner: (0, lv.jsx)("div", {
              className: "PublishButtonTooltip",
              children: hv("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, lv.jsxs)(pv.A, {
              onClick: zv.unpublishSchematic,
              disabled: av,
              children: [(0, lv.jsx)(gv.b, {
                name: "rocket-launch"
              }), " ", hv("worldBuilder:unpublishAsGame"), " ", (0, lv.jsx)(gv.b, {
                name: "info-circle"
              })]
            })
          }), (0, lv.jsxs)(pv.d, {
            onClick: zv.playGame,
            disabled: av,
            children: [(0, lv.jsx)(gv.b, {
              name: "joystick"
            }), " ", hv("general:playGame")]
          })]
        }), !Wv && (0, lv.jsx)(Nv.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4719: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv
    });
    var hv = Pv(1184);
    async function Sv(vv) {
      const zv = await fetch(`${hv.clientSideServerUrls.s3Url}/${vv}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === zv.status || 403 === zv.status) return null;
      if (!zv.ok) throw new Error(`Failed to download the texture pack (${zv.status})`);
      return await zv.json()
    }
  },
  4791: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Cv
    });
    var hv = Pv(52),
      Sv = Pv(1311),
      ev = Pv(1002),
      gv = Pv(144),
      pv = Pv(1534),
      dv = Pv(22),
      Nv = Pv(1876),
      lv = Pv(1482),
      Tv = Pv(4342),
      Wv = Pv(1336),
      wv = Pv(1108),
      av = Pv(1492);

    function sv(vv, zv) {
      return {
        schematicId: vv.schematicId,
        name: vv.name,
        description: vv.description,
        gamePublished: zv,
        gameCategory: vv.gameCategory,
        defaultGamemode: vv.defaultGamemode,
        voidDeathHeight: vv.voidDeathHeight,
        disableKeepInventory: vv.disableKeepInventory,
        disableTpRequests: vv.disableTpRequests,
        disableLobbySpawn: vv.disableLobbySpawn,
        disableMobs: vv.disableMobs,
        disableSpawnProtection: vv.disableSpawnProtection,
        disableFallDamage: vv.disableFallDamage,
        worldBorder: vv.worldBorder,
        hideLobbyCode: vv.hideLobbyCode,
        enableSmpMarketplace: vv.enableSmpMarketplace,
        enableSurvivalGuns: vv.enableSurvivalGuns,
        enableSpawnReset: vv.enableSpawnReset,
        enableDayNight: vv.enableDayNight,
        persistWorld: vv.persistWorld,
        persistInventory: vv.persistInventory
      }
    }

    function Cv(vv) {
      let {
        onNavigateAway: zv,
        inSourceWorld: Pv = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Cv
      } = (0, wv.d)(), iv = (0, av.useNavigatePreserveSearch)(), [cv, Gv] = (0, hv.useState)({
        ...vv
      }), [mv, jv] = (0, hv.useState)("Enter"), [fv, Fv] = (0, hv.useState)(void 0), Yv = (0, hv.useRef)(sv(vv, vv.gamePublished)), nv = (0, hv.useRef)(void 0), Ov = "Enter" === mv, Dv = Cv.playerHasRank("developer") || Cv.playerHasRank("admin") || "Enter" === mv && !1 !== cv.schematicContainsSpawnBlock, Kv = void 0 !== fv && fv !== nv.current || JSON.stringify(sv(cv, cv.gamePublished)) !== JSON.stringify(Yv.current);

      function Vv(vv, zv) {
        Gv((Pv => ({
          ...Pv,
          [vv]: zv
        })))
      }
      const Uv = (0, hv.useCallback)((vv => {
        nv.current = vv, Fv(vv)
      }), []);

      function Rv(vv) {
        jv("Loading");
        const zv = sv(cv, vv),
          Pv = fv !== nv.current ? fv : void 0;
        lv.e.updateSchematic(Cv, zv, Pv).then((Pv => {
          let {
            customTexturePackKey: hv
          } = Pv;
          jv("Success"), Vv("customTexturePackKey", hv), Yv.current = zv, nv.current = void 0, Fv(void 0), setTimeout((() => {
            Vv("gamePublished", vv), jv("Enter")
          }), 1e3)
        })).catch((vv => {
          var zv;
          (console.error("Failed to save schematic:", vv), jv("Error"), vv instanceof gv.c && vv.errorMessageForUser) && Wv.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: vv.errorMessageForUser,
            textOpts: {
              subtitle: null !== (zv = vv.errorMessageTranslationParams) && void 0 !== zv ? zv : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            jv("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: cv,
        updateSchematicData: Vv,
        setTexturePack: Fv,
        initializeTexturePack: Uv,
        updateState: mv,
        formEnabled: Ov,
        publishFormEnabled: Dv,
        hasUnsavedChanges: Kv,
        canEditSourceWorld: !Pv,
        saveSchematic: Rv,
        unpublishSchematic: function() {
          Wv.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((vv => {
            !0 === vv && Rv(!1)
          }))
        },
        editSourceWorld: function() {
          jv("Loading"), Tv.e.getSourceWorld(cv.schematicId).then((vv => {
            Nv.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, dv.g)("other"), iv((0, Sv.e)("classic", vv)), null === zv || void 0 === zv || zv()
          })).catch((vv => {
            console.error("Failed to get source world:", vv), jv("Error"), setTimeout((() => {
              jv("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Nv.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), iv((0, pv.G)((0, ev.u)(cv.schematicId), cv)), null === zv || void 0 === zv || zv()
        }
      }
    }
  },
  4685: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);