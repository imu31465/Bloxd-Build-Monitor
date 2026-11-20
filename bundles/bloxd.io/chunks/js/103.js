export const id = 103;
export const ids = [103];
export const modules = {
  4562: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz,
      h: () => Kz,
      k: () => Nz
    });
    sz(4565);
    var Fz = sz(1173),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1333),
      oz = (sz(65), sz(4022)),
      vz = sz(1036),
      Uz = sz(1087);

    function Kz(zz) {
      let {
        children: tz,
        label: sz,
        className: Wz,
        circleInfoText: oz,
        disabled: Kz,
        onLabelClick: uz
      } = zz;
      const {
        t: Nz
      } = (0, Fz.B)(), bz = (0, Uz.jsxs)("div", {
        className: Xz()("Label", {
          ClickableLabel: void 0 !== uz
        }),
        onClick: uz,
        children: [Nz(sz), oz && (0, Uz.jsx)(vz.c, {
          name: "circle-info"
        })]
      });
      return (0, Uz.jsxs)("div", {
        className: Xz()("LabeledInput", {
          [Wz]: Wz,
          DisabledLabelInput: Kz
        }),
        children: [oz && (0, Uz.jsx)(Oz.h, {
          tooltipInner: (0, Uz.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Nz(oz)
          }),
          children: bz
        }), !oz && bz, tz]
      })
    }

    function uz(zz) {
      let {
        checked: tz,
        setChecked: sz
      } = zz;
      return (0, Uz.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: zz => {
          sz(!tz)
        },
        children: (0, Uz.jsx)(oz.e, {
          checked: tz,
          onChange: zz => {
            sz(zz.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Nz(zz) {
      let {
        checked: tz,
        setChecked: sz,
        disabled: Fz
      } = zz;
      return (0, Uz.jsx)("div", {
        className: Xz()("SwitchContainer", {
          SwitchContainerDisabled: Fz
        }),
        onClick: () => {
          Fz || sz(!tz)
        },
        children: (0, Uz.jsx)(oz.e, {
          className: "SwitchCheckbox",
          checked: tz,
          onChange: zz => {
            sz(zz.target.checked)
          },
          disabled: !!Fz
        })
      })
    }
  },
  4570: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(4278),
      Oz = sz(1173),
      oz = sz(1087);
    const vz = [...Xz.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Uz(zz) {
      const {
        disabled: tz,
        hideWrapper: sz
      } = zz, {
        t: Fz
      } = (0, Oz.B)(), Uz = zz.advancedMode ? vz.map((tz => [tz, zz.callbacks[tz]])) : Xz.m.map((tz => [tz, zz.callbacks[tz]])), uz = (0, oz.jsx)("div", {
        className: Wz()("PluginsGrid", {
          SectionBody: !sz
        }),
        children: Uz.map((zz => {
          let [sz, Fz] = zz;
          return (0, oz.jsx)(Kz, {
            plugin: sz,
            callbacks: Fz,
            disabled: tz
          }, sz)
        }))
      });
      return sz ? uz : (0, oz.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, oz.jsx)("div", {
          className: "SectionTitle",
          children: Fz("worldBuilder:pluginsSection")
        }), uz]
      })
    }

    function Kz(zz) {
      let {
        plugin: tz,
        callbacks: {
          isEnabled: sz,
          Xx: Fz
        },
        disabled: Xz
      } = zz;
      const {
        t: vz
      } = (0, Oz.B)(), Uz = sz();
      return (0, oz.jsxs)("div", {
        className: Wz()("PluginCard", {
          PluginCardEnabled: Uz,
          PluginCardDisabledForm: Xz
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Xz || void 0,
        onClick: () => {
          Xz || Fz(!Uz)
        },
        children: [(0, oz.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, oz.jsx)("img", {
            src: `/textures/games/classic/customGames/${tz}.png`,
            alt: tz
          })
        }), (0, oz.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, oz.jsx)("div", {
            className: "PluginCardTitle",
            children: vz(uz[tz])
          }), (0, oz.jsx)("div", {
            className: "PluginCardDescription",
            children: vz(Nz[tz])
          })]
        }), (0, oz.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: vz(Uz ? "general:on" : "general:off")
        })]
      })
    }
    const uz = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Nz = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4559: (zz, tz, sz) => {
    sz.d(tz, {
      g: () => Wt,
      b: () => Ft,
      f: () => st,
      i: () => Xt
    });
    var Fz = sz(65),
      Wz = sz(1319),
      Xz = sz(1419),
      Oz = sz(1622),
      oz = sz(1173),
      vz = sz(1306),
      Uz = sz(1333),
      Kz = sz(1036),
      uz = sz(1213),
      Nz = sz(1020),
      bz = sz.n(Nz),
      wz = sz(308),
      Dz = sz(4278),
      gz = sz(1223),
      Hz = sz(4562),
      Bz = sz(2862),
      Pz = sz(4570),
      rz = sz(1087);

    function Yz(zz) {
      let {
        icon: tz,
        title: sz,
        disabled: Fz,
        children: Wz
      } = zz;
      return (0, rz.jsxs)("div", {
        className: bz()("ManageCard", {
          ManageCardDisabled: Fz
        }),
        children: [(0, rz.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, rz.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, rz.jsx)(Kz.c, {
              name: tz
            })
          }), (0, rz.jsx)("div", {
            children: (0, rz.jsx)("h2", {
              className: "ManageCardTitle",
              children: sz
            })
          })]
        }), (0, rz.jsxs)("div", {
          className: "ManageCardBody",
          children: [Wz, Fz && (0, rz.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function xz(zz) {
      let {
        label: tz,
        caption: sz,
        children: Fz
      } = zz;
      return (0, rz.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, rz.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: tz
        }), Fz, sz && (0, rz.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: sz
        })]
      })
    }

    function mz(zz) {
      let {
        label: tz,
        caption: sz,
        disabled: Fz,
        children: Wz
      } = zz;
      return (0, rz.jsxs)("div", {
        className: bz()("ManageField", {
          ManageFieldDisabled: Fz
        }),
        children: [(0, rz.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, rz.jsx)("div", {
            className: "ManageFieldLabel",
            children: tz
          }), (0, rz.jsx)("div", {
            className: "ManageFieldCaption",
            children: sz
          })]
        }), (0, rz.jsx)("div", {
          className: "ManageFieldControl",
          children: Wz
        })]
      })
    }

    function Jz(zz) {
      var tz, sz;
      let {
        schematicData: Fz,
        updateSchematicData: Wz,
        publishFormEnabled: Xz,
        formEnabled: Oz
      } = zz;
      const {
        t: vz
      } = (0, oz.B)(), Uz = !Xz, Kz = {
        tpRequests: {
          isEnabled: () => !Fz.disableTpRequests,
          Xx: zz => Wz("disableTpRequests", !zz)
        },
        spawnProtection: {
          isEnabled: () => !Fz.disableSpawnProtection,
          Xx: zz => Wz("disableSpawnProtection", !zz)
        },
        spawnReset: {
          isEnabled: () => !!Fz.enableSpawnReset,
          Xx: zz => Wz("enableSpawnReset", zz)
        },
        smpMarketplace: {
          isEnabled: () => !!Fz.enableSmpMarketplace,
          Xx: zz => Wz("enableSmpMarketplace", zz)
        },
        survivalGuns: {
          isEnabled: () => !!Fz.enableSurvivalGuns,
          Xx: zz => Wz("enableSurvivalGuns", zz)
        },
        fallDamage: {
          isEnabled: () => !Fz.disableFallDamage,
          Xx: zz => Wz("disableFallDamage", !zz)
        },
        dayNight: {
          isEnabled: () => !!Fz.enableDayNight,
          Xx: zz => Wz("enableDayNight", zz)
        }
      };
      return (0, rz.jsxs)(rz.Fragment, {
        children: [!1 === Fz.schematicContainsSpawnBlock && (0, rz.jsx)("div", {
          className: "ManageWarningBanner",
          children: vz("worldBuilder:mustContainSpawnBlock")
        }), (0, rz.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, rz.jsxs)(Yz, {
            icon: "globe",
            title: vz("worldBuilder:worldRulesSection"),
            disabled: !Oz,
            children: [(0, rz.jsx)(mz, {
              label: vz("classic:defaultGamemode"),
              caption: vz("classic:defaultGamemodeDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Bz.d, {
                controlClassName: "ManageDropdown",
                options: Dz.K.map((zz => ({
                  value: zz,
                  label: wz.t[zz]
                }))),
                value: Fz.defaultGamemode,
                onChange: zz => Wz("defaultGamemode", zz.value)
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:voidDeathHeight"),
              caption: vz("classic:voidDeathHeightDescription"),
              disabled: Uz,
              children: (0, rz.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, rz.jsx)("input", {
                  type: "number",
                  max: gz.D,
                  value: null !== (tz = Fz.voidDeathHeight) && void 0 !== tz ? tz : "",
                  onChange: zz => {
                    const tz = parseInt(zz.target.value);
                    Wz("voidDeathHeight", tz)
                  }
                }), (0, rz.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: vz("worldBuilder:blocksUnit")
                })]
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:worldBorder"),
              caption: vz("classic:worldBorderDescription"),
              disabled: Uz,
              children: (0, rz.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, rz.jsx)("input", {
                  type: "number",
                  min: gz.J,
                  max: gz.E,
                  placeholder: vz("worldBuilder:noWorldBorderLimit"),
                  value: null !== (sz = Fz.worldBorder) && void 0 !== sz ? sz : "",
                  onChange: zz => {
                    const tz = parseInt(zz.target.value);
                    Wz("worldBorder", isNaN(tz) ? null : tz)
                  }
                }), (0, rz.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: vz("worldBuilder:blocksUnit")
                })]
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:disableMobs"),
              caption: vz("classic:disableMobsDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Hz.k, {
                checked: Fz.disableMobs,
                setChecked: zz => Wz("disableMobs", zz),
                disabled: Uz
              })
            })]
          }), (0, rz.jsxs)(Yz, {
            icon: "user-group",
            title: vz("worldBuilder:playerAndLobbySection"),
            disabled: !Oz,
            children: [(0, rz.jsx)(mz, {
              label: vz("classic:disableKeepInventory"),
              caption: vz("classic:disableKeepInventoryDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Hz.k, {
                checked: Fz.disableKeepInventory,
                setChecked: zz => Wz("disableKeepInventory", zz),
                disabled: Uz
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:persistInventory"),
              caption: vz("classic:persistInventoryDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Bz.d, {
                controlClassName: "ManageDropdown",
                options: Dz.q.map((zz => ({
                  value: zz,
                  label: wz.g[zz]
                }))),
                value: Fz.persistInventory,
                onChange: zz => Wz("persistInventory", zz.value)
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:persistWorld"),
              caption: vz("classic:persistWorldDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Hz.k, {
                checked: Fz.persistWorld,
                setChecked: zz => Wz("persistWorld", zz),
                disabled: Uz
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:disableLobbySpawn"),
              caption: vz("classic:disableLobbySpawnDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Hz.k, {
                checked: Fz.disableLobbySpawn,
                setChecked: zz => Wz("disableLobbySpawn", zz),
                disabled: Uz
              })
            }), (0, rz.jsx)(mz, {
              label: vz("classic:hideLobbyCode"),
              caption: vz("classic:hideLobbyCodeDescription"),
              disabled: Uz,
              children: (0, rz.jsx)(Hz.k, {
                checked: Fz.hideLobbyCode,
                setChecked: zz => Wz("hideLobbyCode", zz),
                disabled: Uz
              })
            })]
          })]
        }), (0, rz.jsx)(Yz, {
          icon: "layer-group",
          title: vz("worldBuilder:pluginsSection"),
          disabled: !Oz,
          children: (0, rz.jsx)(Pz.c, {
            callbacks: Kz,
            disabled: Uz,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Iz = sz(4574),
      Cz = sz(4022),
      ez = sz(1466),
      Zz = sz(3163),
      Gz = sz(1116),
      Tz = sz(4539),
      cz = sz(4580),
      jz = sz(1423);
    const Az = 50,
      yz = .3;
    async function Mz(zz) {
      const tz = await
      function(zz) {
        return new Promise(((tz, sz) => {
          const Fz = new FileReader;
          Fz.onload = () => tz(Fz.result), Fz.onerror = sz, Fz.readAsDataURL(zz)
        }))
      }(zz), sz = await
      function(zz) {
        return new Promise(((tz, sz) => {
          const Fz = new Image;
          Fz.onload = () => tz(Fz), Fz.onerror = () => sz(new Error("Failed to load image")), Fz.src = zz
        }))
      }(tz);
      if (sz.naturalHeight > sz.naturalWidth) throw new dz;
      const Fz = 1024 * Az,
        {
          dataUrl: Wz,
          finalQuality: Xz
        } = function(zz, tz) {
          const sz = document.createElement("canvas");
          sz.width = zz.naturalWidth, sz.height = zz.naturalHeight, sz.getContext("2d").drawImage(zz, 0, 0);
          let Fz = .92,
            Wz = sz.toDataURL("image/jpeg", Fz);
          for (; .75 * Wz.length > tz && Fz > .05;) Fz -= .05, Wz = sz.toDataURL("image/jpeg", Fz);
          return {
            dataUrl: Wz,
            finalQuality: Fz
          }
        }(sz, Fz);
      if (Math.ceil(.75 * Wz.length) > Fz) throw new hz;
      return {
        base64Jpg: Wz,
        heavilyCompressed: Xz < yz
      }
    }
    class dz extends Error {}
    class hz extends Error {}
    var Qz = function(zz) {
      return zz[zz.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", zz[zz.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", zz
    }(Qz || {});

    function kz(zz) {
      var tz;
      let {
        schematicId: sz,
        hasReadUploadPolicy: Wz,
        onPolicyValidationError: vz,
        onThumbnailReady: Uz
      } = zz;
      const {
        t: Nz
      } = (0, oz.B)(), [wz, Dz] = (0, Fz.useState)(null), [gz, Hz] = (0, Fz.useState)(""), [Bz, Pz] = (0, Fz.useState)(""), [Yz, xz] = (0, Fz.useState)(!0), [mz, Jz] = (0, Fz.useState)(!1), Iz = (0, Fz.useRef)(!1), [Cz, ez] = (0, Fz.useState)(null), [Zz, Gz] = (0, Fz.useState)(!1), [Tz, jz] = (0, Fz.useState)(!1), Az = (0, Fz.useRef)(0), {
        getRootProps: yz,
        getInputProps: Qz,
        isDragActive: kz
      } = (0, cz.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async zz => {
          if (0 === zz.length) return;
          const tz = zz[0],
            sz = ++Az.current;
          ez(null), Gz(!1), Dz(null), Hz(tz.name);
          try {
            const zz = await Mz(tz);
            if (sz !== Az.current) return;
            Dz(zz), Gz(zz.heavilyCompressed)
          } catch (Fz) {
            if (sz !== Az.current) return;
            ez(Nz(Fz instanceof dz ? "thumbnail:portraitImagesNotAllowed" : Fz instanceof hz ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), iz = gz.length <= 30 ? gz : `${gz.slice(0,27)}...`, Lz = null !== (tz = null === wz || void 0 === wz ? void 0 : wz.base64Jpg) && void 0 !== tz ? tz : null, lz = Bz.trim(), nz = lz.length >= uz.o && lz.length <= uz.k, az = Tz && !wz && !Cz, qz = Tz && !nz;
      return (0, rz.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, rz.jsxs)("div", {
          ...yz({
            className: bz()("ThumbnailUploadDropzone", {
              ActiveDrag: kz,
              ValidationError: az
            })
          }),
          children: [(0, rz.jsx)("input", {
            ...Qz()
          }), !kz && Lz ? (0, rz.jsxs)(rz.Fragment, {
            children: [(0, rz.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, rz.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, rz.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, rz.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, rz.jsx)("img", {
                    src: Lz,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, rz.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, rz.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, rz.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, rz.jsx)("img", {
                    src: Lz,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, rz.jsxs)("div", {
              children: [(0, rz.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: iz
              }), (0, rz.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Nz("thumbnail:preview")
              })]
            })]
          }) : (0, rz.jsxs)(rz.Fragment, {
            children: [(0, rz.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, rz.jsx)(Kz.c, {
                name: "image"
              })
            }), (0, rz.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Nz("thumbnail:dragImageHere")
            })]
          })]
        }), az && (0, rz.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Nz("thumbnail:imageRequired")
        }), (0, rz.jsx)(Oz.d, {
          className: bz()("ThumbnailUploadNameInput", {
            ValidationError: qz
          }),
          placeholderText: Nz("thumbnail:thumbnailName"),
          defaultValue: Bz,
          onValueChange: zz => {
            Pz(zz)
          },
          maxLength: uz.k
        }), qz && (0, rz.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Nz("thumbnail:nameRequired", {
            min: uz.o,
            max: uz.k
          })
        }), (0, rz.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, rz.jsx)("input", {
            type: "checkbox",
            checked: Yz,
            onChange: zz => {
              xz(zz.target.checked)
            }
          }), Nz("thumbnail:setAsThumbnailOnceApproved")]
        }), Zz && (0, rz.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Nz("thumbnail:heavyCompressionWarning")
        }), Cz && (0, rz.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Cz
        }), (0, rz.jsx)(Xz.p, {
          disabled: mz,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (jz(!0), !Iz.current && wz && nz && Wz) {
              Iz.current = !0, Jz(!0), ez(null);
              try {
                await Uz(wz.base64Jpg, lz, Yz ? sz : null)
              } catch (zz) {
                ez(zz.errorMessageForUser ? Nz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : Nz("thumbnail:failedToUploadImage"))
              } finally {
                Iz.current = !1, Jz(!1)
              }
            } else Wz || vz()
          },
          children: Nz(mz ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const iz = 2e3;

    function Lz(zz) {
      let {
        schematicId: tz,
        ownedThumbnailCount: sz,
        onClose: Wz,
        onThumbnailReady: Xz
      } = zz;
      const {
        t: Oz
      } = (0, oz.B)(), {
        userContext: vz
      } = (0, Gz.b)(), [Uz, Nz] = (0, Fz.useState)(!1), [wz, Dz] = (0, Fz.useState)(!1), [gz, Hz] = (0, Fz.useState)(!1), Bz = (0, Fz.useRef)();
      (0, Fz.useEffect)((() => () => {
        clearTimeout(Bz.current)
      }), []);
      const Pz = function(zz, tz) {
        const sz = [];
        return zz.isLoggedIn() || sz.push(Qz.NOT_LOGGED_IN), tz >= uz.X && sz.push(Qz.THUMBNAIL_LIMIT_REACHED), sz
      }(vz, sz);
      if (Pz.length > 0) {
        const zz = {
          [Qz.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Qz.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: uz.X
            }
          }
        };
        return (0, rz.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, rz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Oz("thumbnail:cannotUploadThumbnail")
          }), Pz.map(((tz, sz) => {
            const Fz = zz[tz];
            return (0, rz.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, rz.jsx)(Kz.c, {
                name: "triangle-exclamation"
              }), (0, rz.jsx)("span", {
                children: Oz(Fz.key, Fz.params)
              })]
            }, sz)
          }))]
        })
      }
      return (0, rz.jsxs)("div", {
        className: bz()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Uz
        }),
        children: [Uz && (0, rz.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, rz.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, rz.jsx)(Kz.c, {
              name: "check"
            }), (0, rz.jsx)(jz.e, {})]
          }), (0, rz.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Oz("thumbnail:thumbnailUploaded")
          })]
        }), (0, rz.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Oz("thumbnail:uploadThumbnail")
        }), (0, rz.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, rz.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, rz.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Oz("thumbnail:chooseImage", {
                maxSizeKb: Az
              })
            }), (0, rz.jsx)(kz, {
              schematicId: tz,
              hasReadUploadPolicy: wz,
              onPolicyValidationError: () => {
                Hz(!0)
              },
              onThumbnailReady: async (zz, tz, sz) => {
                await Xz(zz, tz, sz), Nz(!0), Bz.current = setTimeout(Wz, iz)
              }
            })]
          }), (0, rz.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, rz.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Oz("thumbnail:uploadPolicy")
            }), (0, rz.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "check"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyFollowGuidelines")
                })]
              }), (0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "check"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyInGameAssets")
                })]
              }), (0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "check"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyLimitText")
                })]
              }), (0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "x"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyCopyrightContent")
                })]
              }), (0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "x"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "x"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyBloxdTags")
                })]
              }), (0, rz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, rz.jsx)(Kz.c, {
                  name: "x"
                }), (0, rz.jsx)("span", {
                  children: Oz("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, rz.jsxs)("label", {
              className: bz()("ThumbnailUploadCheckbox Policy", {
                ValidationError: gz && !wz
              }),
              children: [(0, rz.jsx)("input", {
                type: "checkbox",
                checked: wz,
                onChange: zz => {
                  Dz(zz.target.checked)
                }
              }), Oz("thumbnail:agreeToUploadPolicy")]
            }), gz && !wz && (0, rz.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Oz("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var lz = sz(1191);
    const nz = {
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

    function az(zz) {
      var tz, sz;
      let {
        schematicData: Oz,
        updateSchematicData: Uz,
        publishFormEnabled: uz,
        onClose: Nz
      } = zz;
      const {
        t: wz
      } = (0, oz.B)(), {
        userContext: Dz,
        isUserContextUpdating: gz
      } = (0, Gz.b)(), Hz = (0, Zz.d)(), [Bz, Pz] = (0, Fz.useState)([]), [Yz, xz] = (0, Fz.useState)([]), [mz, Jz] = (0, Fz.useState)(!0), [Iz, Cz] = (0, Fz.useState)(null !== (tz = Oz.customThumbnailId) && void 0 !== tz ? tz : null), [cz, jz] = (0, Fz.useState)(null), Az = (0, Fz.useRef)(null !== (sz = Oz.customThumbnailId) && void 0 !== sz ? sz : null), yz = (0, Fz.useRef)(0), Mz = (0, Fz.useRef)(null), dz = (0, Fz.useRef)(null), hz = (0, Fz.useRef)(null), Qz = (0, Fz.useRef)(!1);

      function kz(zz, tz) {
        hz.current && (clearTimeout(hz.current), hz.current = null), jz(zz), null !== zz && tz && (hz.current = setTimeout((() => {
          jz(null), hz.current = null
        }), 5e3))
      }(0, Fz.useEffect)((() => () => {
        clearTimeout(dz.current), clearTimeout(hz.current)
      }), []);
      const iz = (0, Fz.useCallback)((() => {
        Jz(!0), ez.d.getOwnedThumbnails(Dz).then((zz => {
          const tz = [],
            sz = [];
          for (const Fz of zz.thumbnails) Fz.rejectionPolicyId ? tz.push(Fz) : sz.push(Fz);
          tz.sort(((zz, tz) => zz.lastUpdatedAt - tz.lastUpdatedAt)), sz.sort(((zz, tz) => {
            const sz = zz.approved ? 1 : 0,
              Fz = (tz.approved ? 1 : 0) - sz;
            return 0 !== Fz ? Fz : tz.lastUpdatedAt - zz.lastUpdatedAt
          })), xz(tz), Pz(sz)
        })).catch((zz => {
          console.error("Failed to fetch thumbnails:", zz)
        })).finally((() => {
          Jz(!1)
        }))
      }), [Dz]);
      async function nz(zz, tz, sz) {
        return ez.d.uploadSchematicThumbnail(Dz, zz, tz, sz).then((() => {
          kz({
            text: wz("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), iz()
        }))
      }

      function az() {
        yz.current = Date.now(), dz.current = null;
        const zz = Mz.current;
        Mz.current = null, kz({
          text: wz("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ez.d.setSchematicThumbnail(Dz, Oz.schematicId, zz).then((() => {
          Hz.current && (kz({
            text: wz("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Az.current = zz, Uz("customThumbnailId", zz), Uz("customThumbnailBlurhash", void 0), Uz("customThumbnailVariants", void 0))
        })).catch((zz => {
          Hz.current && (kz({
            text: zz.errorMessageForUser ? wz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : wz("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Cz(Az.current))
        }))
      }

      function Vz(zz) {
        Cz(zz), Mz.current = zz;
        const tz = Date.now() - yz.current;
        tz >= 1e3 ? az() : (kz({
          text: wz("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), dz.current || (dz.current = setTimeout((() => {
          az()
        }), 1e3 - tz)))
      }
      return (0, Fz.useEffect)((() => {
        !1 === gz && iz()
      }), [gz, iz]), Yz.length > 0 ? (0, rz.jsx)(qz, {
        rejectedThumbnails: Yz,
        userContext: Dz,
        isMountedRef: Hz,
        onAcknowledged: iz
      }) : (0, rz.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, rz.jsxs)("div", {
          className: "SectionTitle",
          children: [wz("thumbnail:gameThumbnail"), cz && (0, rz.jsx)("span", {
            className: bz()("ThumbnailActionMsg", `ThumbnailActionMsg--${cz.type}`),
            children: cz.text
          })]
        }), (0, rz.jsx)("div", {
          className: "SectionBody",
          children: (0, rz.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, rz.jsxs)("div", {
              className: bz()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Iz
              }),
              onClick: () => Vz(null),
              children: [(0, rz.jsx)(Tz.c, {
                game: {
                  schematicId: Oz.schematicId,
                  imageBlurhash: Oz.imageBlurhash
                }
              }), (0, rz.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: wz("general:default")
              })]
            }), mz && (0, rz.jsx)(vz.d, {}), Bz.map(((zz, tz) => (0, rz.jsxs)("div", {
              className: bz()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Iz === zz.id,
                ThumbnailGridItemPending: !zz.approved
              }),
              onClick: () => {
                zz.approved && Vz(zz.id)
              },
              children: [zz.approved && (0, rz.jsx)("img", {
                src: `${lz.clientSideServerUrls.s3Url}/customThumbnails/${zz.id}.jpg`,
                alt: "Thumbnail"
              }), zz.approved && (0, rz.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: zz.name
              }), zz.id && (0, rz.jsx)(Xz.H, {
                className: "ThumbnailDeleteButton",
                onClick: tz => async function(zz, tz, sz) {
                  zz.stopPropagation();
                  const Fz = await Wz.NotificationProvider.showCustomPopup({
                      body: zz => (0, rz.jsx)(Sz, {
                        thumbnailId: tz,
                        thumbnailName: sz,
                        onClose: tz => {
                          tz && (Qz.current = !0), zz()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Nz
                    }).getResult(),
                    Xz = Qz.current;
                  Qz.current = !1, Xz && !0 === Fz && (Hz.current && kz({
                    text: wz("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), ez.d.deleteSchematicThumbnail(Dz, tz).then((() => {
                    Hz.current && (kz({
                      text: wz("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Az.current === tz && Vz(null), iz())
                  })).catch((zz => {
                    Hz.current && kz({
                      text: zz.errorMessageForUser ? wz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : wz("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(tz, zz.id, zz.name),
                children: (0, rz.jsx)(Kz.c, {
                  name: "trash-can"
                })
              }), !zz.approved && (0, rz.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, rz.jsx)(Kz.c, {
                  name: "hourglass-clock"
                })
              }), !zz.approved && (0, rz.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [zz.name, (0, rz.jsx)("br", {}), wz("thumbnail:pendingApproval")]
              })]
            }, tz))), (0, rz.jsxs)("div", {
              className: bz()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !uz
              }),
              onClick: () => {
                uz && function(zz) {
                  let {
                    schematicId: tz,
                    ownedThumbnailCount: sz,
                    onThumbnailReady: Fz,
                    onClose: Xz
                  } = zz;
                  Wz.NotificationProvider.showCustomPopup({
                    body: zz => (0, rz.jsx)(Lz, {
                      schematicId: tz,
                      ownedThumbnailCount: sz,
                      onClose: zz,
                      onThumbnailReady: Fz
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Xz,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Oz.schematicId,
                  ownedThumbnailCount: Bz.length,
                  onThumbnailReady: nz,
                  onClose: Nz
                })
              },
              children: [(0, rz.jsx)(Kz.c, {
                name: "plus"
              }), (0, rz.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: wz("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function qz(zz) {
      let {
        rejectedThumbnails: tz,
        userContext: sz,
        isMountedRef: Wz,
        onAcknowledged: Oz
      } = zz;
      const {
        t: Uz
      } = (0, oz.B)(), [uz, Nz] = (0, Fz.useState)(!1), [bz, wz] = (0, Fz.useState)(!1), Dz = function(zz) {
        const tz = new Map;
        for (const sz of zz) {
          const zz = sz.rejectionPolicyId,
            Fz = tz.get(zz);
          Fz ? Fz.push(sz) : tz.set(zz, [sz])
        }
        return tz
      }(tz);
      return (0, rz.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, rz.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, rz.jsx)(Kz.c, {
            name: "triangle-exclamation"
          }), " ", Uz("thumbnail:thumbnailsRejected"), " ", (0, rz.jsx)(Kz.c, {
            name: "triangle-exclamation"
          })]
        }), (0, rz.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Uz("thumbnail:thumbnailsRejectedDescription")
        }), (0, rz.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Dz.entries()].map((zz => {
            let [tz, sz] = zz;
            const Fz = nz[tz];
            return (0, rz.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, rz.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: sz.map((zz => (0, rz.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, rz.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, rz.jsx)(Kz.c, {
                      name: "image-slash"
                    })
                  }), (0, rz.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, rz.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: zz.name
                    })
                  })]
                }, zz.id)))
              }), (0, rz.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Uz("thumbnail:rejectionReason"), " ", Fz ? Uz(Fz.reason) : tz]
              }), Fz && (0, rz.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Fz.tips.map((zz => (0, rz.jsx)("li", {
                  children: Uz(zz)
                }, zz)))
              })]
            }, tz)
          }))
        }), (0, rz.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, rz.jsx)(Cz.e, {
            checked: uz,
            onChange: zz => Nz(zz.target.checked),
            disabled: bz
          }), (0, rz.jsx)("span", {
            children: Uz("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, rz.jsx)(Xz.p, {
          onClick: async function() {
            wz(!0);
            const zz = await Promise.allSettled(tz.map((zz => ez.d.deleteSchematicThumbnail(sz, zz.id))));
            if (!Wz.current) return;
            const Fz = zz.filter((zz => "rejected" === zz.status));
            Fz.length > 0 && console.error("Some rejected thumbnails failed to delete:", Fz), Oz()
          },
          disabled: !uz || bz,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: bz ? (0, rz.jsx)(vz.d, {}) : Uz("general:accept")
        })]
      })
    }

    function Sz(zz) {
      let {
        thumbnailId: tz,
        thumbnailName: sz,
        onClose: Fz
      } = zz;
      const {
        t: Wz
      } = (0, oz.B)();
      return (0, rz.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, rz.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Wz("thumbnail:deleteThumbnail")
        }), (0, rz.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, rz.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${lz.clientSideServerUrls.s3Url}/customThumbnails/${tz}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, rz.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: sz
          })]
        }), (0, rz.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Wz("thumbnail:deleteThumbnailConfirmation")
        }), (0, rz.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, rz.jsxs)(Xz.H, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Fz(!0),
            children: [(0, rz.jsx)(Kz.c, {
              name: "trash-can"
            }), " ", Wz("general:delete")]
          }), (0, rz.jsx)(Xz.l, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Fz(!1),
            children: Wz("general:cancel")
          })]
        })]
      })
    }
    var Vz = sz(2883),
      Rz = sz(4605),
      pz = sz(4607),
      fz = sz(4650);

    function Ez(zz) {
      let {
        schematicData: tz,
        setTexturePack: sz,
        initializeTexturePack: Wz,
        publishFormEnabled: Xz
      } = zz;
      const {
        t: Oz
      } = (0, oz.B)(), [vz, Uz] = (0, Fz.useState)(null), [Kz, uz] = (0, Fz.useState)(null), [Nz, wz] = (0, Fz.useState)(!1), Dz = (0, Zz.d)(), gz = Xz && !Nz, Hz = tz.customTexturePackKey;

      function Bz(zz) {
        var tz;
        Uz(zz.metaData.id), uz(null !== (tz = zz.metaData.fromFolderName) && void 0 !== tz ? tz : null), (zz.metaData.id !== Vz.s.CUSTOM || zz.metaData.fromFolderName) && sz(zz)
      }
      return (0, Fz.useEffect)((() => {
        Hz && (wz(!0), (0, Rz.c)(Hz).then((zz => {
          var tz;
          Dz.current && (zz ? (Uz(zz.metaData.id), uz(null !== (tz = zz.metaData.fromFolderName) && void 0 !== tz ? tz : null), Wz(zz)) : console.error(`No texture pack at ${Hz}`))
        })).catch((zz => {
          console.error("Error fetching texture pack: ", zz)
        })).finally((() => {
          wz(!1)
        })))
      }), [Hz, Wz, Dz]), (0, rz.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, rz.jsx)("div", {
          className: "SectionTitle",
          children: Oz("customTexturePack:customTexturePack")
        }), (0, rz.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, rz.jsx)("div", {
            className: bz()("TexturePack", {
              Selected: null === vz && !Nz,
              Disabled: !gz
            }),
            onClick: () => {
              gz && (Uz(null), sz(null), uz(null))
            },
            children: (0, rz.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Vz.s).map((zz => (0, rz.jsx)(pz.c, {
            id: zz,
            isSelected: zz === vz,
            setSelected: Bz,
            disabled: !gz
          }, zz)))]
        }), vz === Vz.s.CUSTOM && (0, rz.jsx)(fz.e, {
          folderName: Kz,
          onTexturePackUpdated: Bz,
          disabled: !gz,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var zt = sz(4674);

    function tt(zz) {
      var tz;
      let {
        gameCategory: sz,
        setGameCategory: Fz,
        disabled: Wz
      } = zz;
      const Oz = null !== (tz = (0, wz.hb)(sz)) && void 0 !== tz ? tz : "other";
      return (0, rz.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, rz.jsx)(Hz.h, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Wz,
          children: (0, rz.jsx)(Bz.d, {
            options: wz.Y.map((zz => ({
              value: zz,
              label: wz.V[zz]
            }))),
            value: Oz,
            onChange: zz => {
              zz.value !== Oz && Fz(wz.T[zz.value][0])
            }
          })
        }), (0, rz.jsx)(Hz.h, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Wz,
          children: (0, rz.jsx)("div", {
            className: "GameCategoryOptions",
            children: wz.T[Oz].map((zz => (0, rz.jsx)(Xz.Q, {
              active: zz === sz,
              onClick: () => {
                Fz(zz)
              },
              children: (0, wz.gb)(zz)
            }, zz)))
          })
        })]
      })
    }

    function st(zz) {
      let {
        editor: tz,
        onClose: sz
      } = zz;
      const {
        t: Fz
      } = (0, oz.B)(), {
        schematicData: Wz,
        updateSchematicData: Xz,
        publishFormEnabled: vz,
        formEnabled: Uz
      } = tz;
      return (0, rz.jsxs)(rz.Fragment, {
        children: [(0, rz.jsxs)(Yz, {
          icon: "pen-to-square",
          title: Fz("worldBuilder:basicsSection"),
          disabled: !Uz,
          children: [(0, rz.jsx)(xz, {
            label: Fz("general:name"),
            caption: Fz("worldBuilder:schematicNameTagsHint"),
            children: (0, rz.jsx)(Oz.d, {
              className: "SchematicPageName",
              defaultValue: Wz.name,
              onValueChange: zz => Xz("name", zz),
              placeholderText: Fz("worldBuilder:schematicNamePlaceholder"),
              maxLength: uz.tb
            })
          }), (0, rz.jsx)(xz, {
            label: Fz("general:description"),
            children: (0, rz.jsx)(Oz.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Wz.description,
              onValueChange: zz => Xz("description", zz),
              placeholderText: Fz("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: uz.pb
            })
          }), (0, rz.jsx)(tt, {
            gameCategory: Wz.gameCategory,
            setGameCategory: zz => Xz("gameCategory", zz),
            disabled: !vz
          }), !0 === Wz.gamePublished && (0, rz.jsx)(az, {
            schematicData: Wz,
            updateSchematicData: Xz,
            publishFormEnabled: vz,
            onClose: function() {
              null === sz || void 0 === sz || sz()
            }
          })]
        }), (0, rz.jsx)(Jz, {
          schematicData: Wz,
          updateSchematicData: Xz,
          publishFormEnabled: vz,
          formEnabled: Uz
        }), !0 === Wz.gamePublished && (0, rz.jsx)(Yz, {
          icon: "palette",
          title: Fz("worldBuilder:texturePackSection"),
          disabled: !Uz,
          children: (0, rz.jsx)(Ez, {
            schematicData: Wz,
            setTexturePack: tz.setTexturePack,
            initializeTexturePack: tz.initializeTexturePack,
            publishFormEnabled: vz
          })
        })]
      })
    }

    function Ft(zz) {
      let {
        editor: tz
      } = zz;
      const {
        t: sz
      } = (0, oz.B)(), {
        schematicData: Fz,
        formEnabled: Wz,
        hasUnsavedChanges: Oz
      } = tz, uz = Wz && Oz;
      return (0, rz.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Wz && Oz && (0, rz.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, rz.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), sz("worldBuilder:unsavedChanges")]
        }), (0, rz.jsx)(Uz.h, {
          tooltipInner: (0, rz.jsx)("div", {
            className: "SaveButtonTooltip",
            children: sz(Wz && !Oz ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, rz.jsxs)(Xz.h, {
            className: "SaveChangesButton",
            onClick: () => tz.saveSchematic(Fz.gamePublished),
            disabled: !uz,
            children: [(0, rz.jsxs)("span", {
              className: Wz ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, rz.jsx)(Kz.c, {
                name: "wrench"
              }), " ", sz("worldBuilder:saveChanges")]
            }), !Wz && (0, rz.jsx)(vz.d, {})]
          })
        })]
      })
    }

    function Wt(zz) {
      let {
        schematic: tz,
        onSchematicUpdate: sz,
        onClose: Wz,
        inSourceWorld: Oz
      } = zz;
      const {
        t: vz
      } = (0, oz.B)();

      function Uz() {
        null === Wz || void 0 === Wz || Wz()
      }
      const Kz = (0, zt.e)(tz, {
        onNavigateAway: Uz,
        inSourceWorld: Oz
      });
      return (0, Fz.useEffect)((() => {
        null === sz || void 0 === sz || sz(Kz.schematicData)
      }), [Kz.schematicData, sz]), (0, rz.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, rz.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, rz.jsx)(Xz.e, {
            onClick: Uz,
            children: vz("worldBuilder:back")
          }), (0, rz.jsx)(Yz, {
            icon: "rocket-launch",
            title: vz("worldBuilder:actionsSection"),
            disabled: !Kz.formEnabled,
            children: (0, rz.jsx)(Iz.e, {
              editor: Kz
            })
          }), (0, rz.jsx)(st, {
            editor: Kz,
            onClose: Uz
          })]
        }), (0, rz.jsx)(Ft, {
          editor: Kz
        })]
      })
    }

    function Xt(zz) {
      let {
        schematic: tz,
        onSchematicUpdate: sz,
        onClose: Fz,
        inSourceWorld: Xz
      } = zz;
      Wz.NotificationProvider.showCustomPopup({
        body: zz => (0, rz.jsx)(Wt, {
          schematic: tz,
          onSchematicUpdate: sz,
          onClose: zz,
          inSourceWorld: Xz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Fz,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4574: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1173),
      Oz = sz(1036),
      oz = sz(1419),
      vz = sz(1333),
      Uz = sz(1306),
      Kz = sz(1087);

    function uz(zz) {
      let {
        editor: tz,
        className: sz
      } = zz;
      const {
        t: Fz
      } = (0, Xz.B)(), {
        schematicData: uz,
        formEnabled: Nz,
        publishFormEnabled: bz
      } = tz, wz = !Nz || !bz;
      return (0, Kz.jsxs)("div", {
        className: Wz()("PublishButtonContainer", sz),
        children: [tz.canEditSourceWorld && (0, Kz.jsxs)(oz.h, {
          onClick: tz.editSourceWorld,
          disabled: wz,
          children: [(0, Kz.jsx)(Oz.c, {
            name: "edit"
          }), " ", Fz("worldBuilder:editSourceWorld")]
        }), !uz.gamePublished && (0, Kz.jsx)(vz.h, {
          tooltipInner: (0, Kz.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Fz("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Kz.jsxs)(oz.p, {
            onClick: () => tz.saveSchematic(!0),
            disabled: wz,
            children: [(0, Kz.jsx)(Oz.c, {
              name: "rocket-launch"
            }), " ", Fz("worldBuilder:publishAsGame"), " ", (0, Kz.jsx)(Oz.c, {
              name: "info-circle"
            })]
          })
        }), !0 === uz.gamePublished && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)(vz.h, {
            tooltipInner: (0, Kz.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Fz("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Kz.jsxs)(oz.H, {
              onClick: tz.unpublishSchematic,
              disabled: wz,
              children: [(0, Kz.jsx)(Oz.c, {
                name: "rocket-launch"
              }), " ", Fz("worldBuilder:unpublishAsGame"), " ", (0, Kz.jsx)(Oz.c, {
                name: "info-circle"
              })]
            })
          }), (0, Kz.jsxs)(oz.h, {
            onClick: tz.playGame,
            disabled: wz,
            children: [(0, Kz.jsx)(Oz.c, {
              name: "joystick"
            }), " ", Fz("general:playGame")]
          })]
        }), !Nz && (0, Kz.jsx)(Uz.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4605: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(1191);
    async function Wz(zz) {
      const tz = await fetch(`${Fz.clientSideServerUrls.s3Url}/${zz}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === tz.status || 403 === tz.status) return null;
      if (!tz.ok) throw new Error(`Failed to download the texture pack (${tz.status})`);
      return await tz.json()
    }
  },
  4674: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => gz
    });
    var Fz = sz(65),
      Wz = sz(1297),
      Xz = sz(991),
      Oz = sz(161),
      oz = sz(1511),
      vz = sz(30),
      Uz = sz(1857),
      Kz = sz(1466),
      uz = sz(4229),
      Nz = sz(1319),
      bz = sz(1116),
      wz = sz(1483);

    function Dz(zz, tz) {
      return {
        schematicId: zz.schematicId,
        name: zz.name,
        description: zz.description,
        gamePublished: tz,
        gameCategory: zz.gameCategory,
        defaultGamemode: zz.defaultGamemode,
        voidDeathHeight: zz.voidDeathHeight,
        disableKeepInventory: zz.disableKeepInventory,
        disableTpRequests: zz.disableTpRequests,
        disableLobbySpawn: zz.disableLobbySpawn,
        disableMobs: zz.disableMobs,
        disableSpawnProtection: zz.disableSpawnProtection,
        disableFallDamage: zz.disableFallDamage,
        worldBorder: zz.worldBorder,
        hideLobbyCode: zz.hideLobbyCode,
        enableSmpMarketplace: zz.enableSmpMarketplace,
        enableSurvivalGuns: zz.enableSurvivalGuns,
        enableSpawnReset: zz.enableSpawnReset,
        enableDayNight: zz.enableDayNight,
        persistWorld: zz.persistWorld,
        persistInventory: zz.persistInventory
      }
    }

    function gz(zz) {
      let {
        onNavigateAway: tz,
        inSourceWorld: sz = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: gz
      } = (0, bz.b)(), Hz = (0, wz.useNavigatePreserveSearch)(), [Bz, Pz] = (0, Fz.useState)({
        ...zz
      }), [rz, Yz] = (0, Fz.useState)("Enter"), [xz, mz] = (0, Fz.useState)(void 0), Jz = (0, Fz.useRef)(Dz(zz, zz.gamePublished)), Iz = (0, Fz.useRef)(void 0), Cz = "Enter" === rz, ez = gz.playerHasRank("developer") || gz.playerHasRank("admin") || "Enter" === rz && !1 !== Bz.schematicContainsSpawnBlock, Zz = void 0 !== xz && xz !== Iz.current || JSON.stringify(Dz(Bz, Bz.gamePublished)) !== JSON.stringify(Jz.current);

      function Gz(zz, tz) {
        Pz((sz => ({
          ...sz,
          [zz]: tz
        })))
      }
      const Tz = (0, Fz.useCallback)((zz => {
        Iz.current = zz, mz(zz)
      }), []);

      function cz(zz) {
        Yz("Loading");
        const tz = Dz(Bz, zz),
          sz = xz !== Iz.current ? xz : void 0;
        Kz.d.updateSchematic(gz, tz, sz).then((sz => {
          let {
            customTexturePackKey: Fz
          } = sz;
          Yz("Success"), Gz("customTexturePackKey", Fz), Jz.current = tz, Iz.current = void 0, mz(void 0), setTimeout((() => {
            Gz("gamePublished", zz), Yz("Enter")
          }), 1e3)
        })).catch((zz => {
          var tz;
          (console.error("Failed to save schematic:", zz), Yz("Error"), zz instanceof Oz.e && zz.errorMessageForUser) && Nz.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: zz.errorMessageForUser,
            textOpts: {
              subtitle: null !== (tz = zz.errorMessageTranslationParams) && void 0 !== tz ? tz : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Yz("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Bz,
        updateSchematicData: Gz,
        setTexturePack: mz,
        initializeTexturePack: Tz,
        updateState: rz,
        formEnabled: Cz,
        publishFormEnabled: ez,
        hasUnsavedChanges: Zz,
        canEditSourceWorld: !sz,
        saveSchematic: cz,
        unpublishSchematic: function() {
          Nz.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((zz => {
            !0 === zz && cz(!1)
          }))
        },
        editSourceWorld: function() {
          Yz("Loading"), uz.b.getSourceWorld(Bz.schematicId).then((zz => {
            Uz.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, vz.e)("other"), Hz((0, Wz.c)("classic", zz)), null === tz || void 0 === tz || tz()
          })).catch((zz => {
            console.error("Failed to get source world:", zz), Yz("Error"), setTimeout((() => {
              Yz("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Uz.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Hz((0, oz.w)((0, Xz.t)(Bz.schematicId), Bz)), null === tz || void 0 === tz || tz()
        }
      }
    }
  },
  4565: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);