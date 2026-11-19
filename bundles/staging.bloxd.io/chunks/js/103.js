export const id = 103;
export const ids = [103];
export const modules = {
  4696: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => pz,
      d: () => Oz,
      e: () => dz
    });
    bz(4700);
    var Ez = bz(1181),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1332),
      Mz = (bz(56), bz(4144)),
      tz = bz(1047),
      Hz = bz(1089);

    function Oz(zz) {
      let {
        children: uz,
        label: bz,
        className: nz,
        circleInfoText: Mz,
        disabled: Oz,
        onLabelClick: pz
      } = zz;
      const {
        t: dz
      } = (0, Ez.F)(), Fz = (0, Hz.jsxs)("div", {
        className: iz()("Label", {
          ClickableLabel: void 0 !== pz
        }),
        onClick: pz,
        children: [dz(bz), Mz && (0, Hz.jsx)(tz.c, {
          name: "circle-info"
        })]
      });
      return (0, Hz.jsxs)("div", {
        className: iz()("LabeledInput", {
          [nz]: nz,
          DisabledLabelInput: Oz
        }),
        children: [Mz && (0, Hz.jsx)(lz.f, {
          tooltipInner: (0, Hz.jsx)("div", {
            className: "LabeledInputTooltip",
            children: dz(Mz)
          }),
          children: Fz
        }), !Mz && Fz, uz]
      })
    }

    function pz(zz) {
      let {
        checked: uz,
        setChecked: bz
      } = zz;
      return (0, Hz.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: zz => {
          bz(!uz)
        },
        children: (0, Hz.jsx)(Mz.b, {
          checked: uz,
          onChange: zz => {
            bz(zz.target.checked)
          },
          disabled: !1
        })
      })
    }

    function dz(zz) {
      let {
        checked: uz,
        setChecked: bz,
        disabled: Ez
      } = zz;
      return (0, Hz.jsx)("div", {
        className: iz()("SwitchContainer", {
          SwitchContainerDisabled: Ez
        }),
        onClick: () => {
          Ez || bz(!uz)
        },
        children: (0, Hz.jsx)(Mz.b, {
          className: "SwitchCheckbox",
          checked: uz,
          onChange: zz => {
            bz(zz.target.checked)
          },
          disabled: !!Ez
        })
      })
    }
  },
  4702: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(4385),
      lz = bz(1181),
      Mz = bz(1089);
    const tz = [...iz.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Hz(zz) {
      const {
        disabled: uz,
        hideWrapper: bz
      } = zz, {
        t: Ez
      } = (0, lz.F)(), Hz = zz.advancedMode ? tz.map((uz => [uz, zz.callbacks[uz]])) : iz.l.map((uz => [uz, zz.callbacks[uz]])), pz = (0, Mz.jsx)("div", {
        className: nz()("PluginsGrid", {
          SectionBody: !bz
        }),
        children: Hz.map((zz => {
          let [bz, Ez] = zz;
          return (0, Mz.jsx)(Oz, {
            plugin: bz,
            callbacks: Ez,
            disabled: uz
          }, bz)
        }))
      });
      return bz ? pz : (0, Mz.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Mz.jsx)("div", {
          className: "SectionTitle",
          children: Ez("worldBuilder:pluginsSection")
        }), pz]
      })
    }

    function Oz(zz) {
      let {
        plugin: uz,
        callbacks: {
          isEnabled: bz,
          Zx: Ez
        },
        disabled: iz
      } = zz;
      const {
        t: tz
      } = (0, lz.F)(), Hz = bz();
      return (0, Mz.jsxs)("div", {
        className: nz()("PluginCard", {
          PluginCardEnabled: Hz,
          PluginCardDisabledForm: iz
        }),
        "data-pad-focusable": !0,
        "aria-disabled": iz || void 0,
        onClick: () => {
          iz || Ez(!Hz)
        },
        children: [(0, Mz.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Mz.jsx)("img", {
            src: `/textures/games/classic/customGames/${uz}.png`,
            alt: uz
          })
        }), (0, Mz.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Mz.jsx)("div", {
            className: "PluginCardTitle",
            children: tz(pz[uz])
          }), (0, Mz.jsx)("div", {
            className: "PluginCardDescription",
            children: tz(dz[uz])
          })]
        }), (0, Mz.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: tz(Hz ? "general:on" : "general:off")
        })]
      })
    }
    const pz = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      dz = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4690: (zz, uz, bz) => {
    bz.d(uz, {
      i: () => nu,
      d: () => Eu,
      g: () => bu,
      k: () => iu
    });
    var Ez = bz(56),
      nz = bz(1322),
      iz = bz(1419),
      lz = bz(1628),
      Mz = bz(1181),
      tz = bz(1305),
      Hz = bz(1332),
      Oz = bz(1047),
      pz = bz(1212),
      dz = bz(1038),
      Fz = bz.n(dz),
      Zz = bz(316),
      Rz = bz(4385),
      Kz = bz(1226),
      wz = bz(4696),
      Xz = bz(2882),
      fz = bz(4702),
      sz = bz(1089);

    function rz(zz) {
      let {
        icon: uz,
        title: bz,
        disabled: Ez,
        children: nz
      } = zz;
      return (0, sz.jsxs)("div", {
        className: Fz()("ManageCard", {
          ManageCardDisabled: Ez
        }),
        children: [(0, sz.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, sz.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, sz.jsx)(Oz.c, {
              name: uz
            })
          }), (0, sz.jsx)("div", {
            children: (0, sz.jsx)("h2", {
              className: "ManageCardTitle",
              children: bz
            })
          })]
        }), (0, sz.jsxs)("div", {
          className: "ManageCardBody",
          children: [nz, Ez && (0, sz.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function oz(zz) {
      let {
        label: uz,
        caption: bz,
        children: Ez
      } = zz;
      return (0, sz.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, sz.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: uz
        }), Ez, bz && (0, sz.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: bz
        })]
      })
    }

    function Nz(zz) {
      let {
        label: uz,
        caption: bz,
        disabled: Ez,
        children: nz
      } = zz;
      return (0, sz.jsxs)("div", {
        className: Fz()("ManageField", {
          ManageFieldDisabled: Ez
        }),
        children: [(0, sz.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, sz.jsx)("div", {
            className: "ManageFieldLabel",
            children: uz
          }), (0, sz.jsx)("div", {
            className: "ManageFieldCaption",
            children: bz
          })]
        }), (0, sz.jsx)("div", {
          className: "ManageFieldControl",
          children: nz
        })]
      })
    }

    function vz(zz) {
      var uz, bz;
      let {
        schematicData: Ez,
        updateSchematicData: nz,
        publishFormEnabled: iz,
        formEnabled: lz
      } = zz;
      const {
        t: tz
      } = (0, Mz.F)(), Hz = !iz, Oz = {
        tpRequests: {
          isEnabled: () => !Ez.disableTpRequests,
          Zx: zz => nz("disableTpRequests", !zz)
        },
        spawnProtection: {
          isEnabled: () => !Ez.disableSpawnProtection,
          Zx: zz => nz("disableSpawnProtection", !zz)
        },
        spawnReset: {
          isEnabled: () => !!Ez.enableSpawnReset,
          Zx: zz => nz("enableSpawnReset", zz)
        },
        smpMarketplace: {
          isEnabled: () => !!Ez.enableSmpMarketplace,
          Zx: zz => nz("enableSmpMarketplace", zz)
        },
        survivalGuns: {
          isEnabled: () => !!Ez.enableSurvivalGuns,
          Zx: zz => nz("enableSurvivalGuns", zz)
        },
        fallDamage: {
          isEnabled: () => !Ez.disableFallDamage,
          Zx: zz => nz("disableFallDamage", !zz)
        },
        dayNight: {
          isEnabled: () => !!Ez.enableDayNight,
          Zx: zz => nz("enableDayNight", zz)
        }
      };
      return (0, sz.jsxs)(sz.Fragment, {
        children: [!1 === Ez.schematicContainsSpawnBlock && (0, sz.jsx)("div", {
          className: "ManageWarningBanner",
          children: tz("worldBuilder:mustContainSpawnBlock")
        }), (0, sz.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, sz.jsxs)(rz, {
            icon: "globe",
            title: tz("worldBuilder:worldRulesSection"),
            disabled: !lz,
            children: [(0, sz.jsx)(Nz, {
              label: tz("classic:defaultGamemode"),
              caption: tz("classic:defaultGamemodeDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(Xz.d, {
                controlClassName: "ManageDropdown",
                options: Rz.I.map((zz => ({
                  value: zz,
                  label: Zz.u[zz]
                }))),
                value: Ez.defaultGamemode,
                onChange: zz => nz("defaultGamemode", zz.value)
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:voidDeathHeight"),
              caption: tz("classic:voidDeathHeightDescription"),
              disabled: Hz,
              children: (0, sz.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, sz.jsx)("input", {
                  type: "number",
                  max: Kz.C,
                  value: null !== (uz = Ez.voidDeathHeight) && void 0 !== uz ? uz : "",
                  onChange: zz => {
                    const uz = parseInt(zz.target.value);
                    nz("voidDeathHeight", uz)
                  }
                }), (0, sz.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: tz("worldBuilder:blocksUnit")
                })]
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:worldBorder"),
              caption: tz("classic:worldBorderDescription"),
              disabled: Hz,
              children: (0, sz.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, sz.jsx)("input", {
                  type: "number",
                  min: Kz.G,
                  max: Kz.D,
                  placeholder: tz("worldBuilder:noWorldBorderLimit"),
                  value: null !== (bz = Ez.worldBorder) && void 0 !== bz ? bz : "",
                  onChange: zz => {
                    const uz = parseInt(zz.target.value);
                    nz("worldBorder", isNaN(uz) ? null : uz)
                  }
                }), (0, sz.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: tz("worldBuilder:blocksUnit")
                })]
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:disableMobs"),
              caption: tz("classic:disableMobsDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(wz.e, {
                checked: Ez.disableMobs,
                setChecked: zz => nz("disableMobs", zz),
                disabled: Hz
              })
            })]
          }), (0, sz.jsxs)(rz, {
            icon: "user-group",
            title: tz("worldBuilder:playerAndLobbySection"),
            disabled: !lz,
            children: [(0, sz.jsx)(Nz, {
              label: tz("classic:disableKeepInventory"),
              caption: tz("classic:disableKeepInventoryDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(wz.e, {
                checked: Ez.disableKeepInventory,
                setChecked: zz => nz("disableKeepInventory", zz),
                disabled: Hz
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:persistInventory"),
              caption: tz("classic:persistInventoryDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(Xz.d, {
                controlClassName: "ManageDropdown",
                options: Rz.p.map((zz => ({
                  value: zz,
                  label: Zz.i[zz]
                }))),
                value: Ez.persistInventory,
                onChange: zz => nz("persistInventory", zz.value)
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:persistWorld"),
              caption: tz("classic:persistWorldDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(wz.e, {
                checked: Ez.persistWorld,
                setChecked: zz => nz("persistWorld", zz),
                disabled: Hz
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:disableLobbySpawn"),
              caption: tz("classic:disableLobbySpawnDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(wz.e, {
                checked: Ez.disableLobbySpawn,
                setChecked: zz => nz("disableLobbySpawn", zz),
                disabled: Hz
              })
            }), (0, sz.jsx)(Nz, {
              label: tz("classic:hideLobbyCode"),
              caption: tz("classic:hideLobbyCodeDescription"),
              disabled: Hz,
              children: (0, sz.jsx)(wz.e, {
                checked: Ez.hideLobbyCode,
                setChecked: zz => nz("hideLobbyCode", zz),
                disabled: Hz
              })
            })]
          })]
        }), (0, sz.jsx)(rz, {
          icon: "layer-group",
          title: tz("worldBuilder:pluginsSection"),
          disabled: !lz,
          children: (0, sz.jsx)(fz.b, {
            callbacks: Oz,
            disabled: Hz,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var xz = bz(4704),
      Jz = bz(4144),
      Az = bz(1473),
      Tz = bz(3238),
      Lz = bz(1114),
      Pz = bz(4670),
      Gz = bz(4706),
      az = bz(1424);
    const Vz = 50,
      mz = .3;
    async function qz(zz) {
      const uz = await
      function(zz) {
        return new Promise(((uz, bz) => {
          const Ez = new FileReader;
          Ez.onload = () => uz(Ez.result), Ez.onerror = bz, Ez.readAsDataURL(zz)
        }))
      }(zz), bz = await
      function(zz) {
        return new Promise(((uz, bz) => {
          const Ez = new Image;
          Ez.onload = () => uz(Ez), Ez.onerror = () => bz(new Error("Failed to load image")), Ez.src = zz
        }))
      }(uz);
      if (bz.naturalHeight > bz.naturalWidth) throw new hz;
      const Ez = 1024 * Vz,
        {
          dataUrl: nz,
          finalQuality: iz
        } = function(zz, uz) {
          const bz = document.createElement("canvas");
          bz.width = zz.naturalWidth, bz.height = zz.naturalHeight, bz.getContext("2d").drawImage(zz, 0, 0);
          let Ez = .92,
            nz = bz.toDataURL("image/jpeg", Ez);
          for (; .75 * nz.length > uz && Ez > .05;) Ez -= .05, nz = bz.toDataURL("image/jpeg", Ez);
          return {
            dataUrl: nz,
            finalQuality: Ez
          }
        }(bz, Ez);
      if (Math.ceil(.75 * nz.length) > Ez) throw new Uz;
      return {
        base64Jpg: nz,
        heavilyCompressed: iz < mz
      }
    }
    class hz extends Error {}
    class Uz extends Error {}
    var cz = function(zz) {
      return zz[zz.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", zz[zz.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", zz
    }(cz || {});

    function gz(zz) {
      var uz;
      let {
        schematicId: bz,
        hasReadUploadPolicy: nz,
        onPolicyValidationError: tz,
        onThumbnailReady: Hz
      } = zz;
      const {
        t: dz
      } = (0, Mz.F)(), [Zz, Rz] = (0, Ez.useState)(null), [Kz, wz] = (0, Ez.useState)(""), [Xz, fz] = (0, Ez.useState)(""), [rz, oz] = (0, Ez.useState)(!0), [Nz, vz] = (0, Ez.useState)(!1), xz = (0, Ez.useRef)(!1), [Jz, Az] = (0, Ez.useState)(null), [Tz, Lz] = (0, Ez.useState)(!1), [Pz, az] = (0, Ez.useState)(!1), Vz = (0, Ez.useRef)(0), {
        getRootProps: mz,
        getInputProps: cz,
        isDragActive: gz
      } = (0, Gz.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async zz => {
          if (0 === zz.length) return;
          const uz = zz[0],
            bz = ++Vz.current;
          Az(null), Lz(!1), Rz(null), wz(uz.name);
          try {
            const zz = await qz(uz);
            if (bz !== Vz.current) return;
            Rz(zz), Lz(zz.heavilyCompressed)
          } catch (Ez) {
            if (bz !== Vz.current) return;
            Az(dz(Ez instanceof hz ? "thumbnail:portraitImagesNotAllowed" : Ez instanceof Uz ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Sz = Kz.length <= 30 ? Kz : `${Kz.slice(0,27)}...`, yz = null !== (uz = null === Zz || void 0 === Zz ? void 0 : Zz.base64Jpg) && void 0 !== uz ? uz : null, Dz = Xz.trim(), Qz = Dz.length >= pz.l && Dz.length <= pz.i, Wz = Pz && !Zz && !Jz, ez = Pz && !Qz;
      return (0, sz.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, sz.jsxs)("div", {
          ...mz({
            className: Fz()("ThumbnailUploadDropzone", {
              ActiveDrag: gz,
              ValidationError: Wz
            })
          }),
          children: [(0, sz.jsx)("input", {
            ...cz()
          }), !gz && yz ? (0, sz.jsxs)(sz.Fragment, {
            children: [(0, sz.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, sz.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, sz.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, sz.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, sz.jsx)("img", {
                    src: yz,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, sz.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, sz.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, sz.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, sz.jsx)("img", {
                    src: yz,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, sz.jsxs)("div", {
              children: [(0, sz.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Sz
              }), (0, sz.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: dz("thumbnail:preview")
              })]
            })]
          }) : (0, sz.jsxs)(sz.Fragment, {
            children: [(0, sz.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, sz.jsx)(Oz.c, {
                name: "image"
              })
            }), (0, sz.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: dz("thumbnail:dragImageHere")
            })]
          })]
        }), Wz && (0, sz.jsx)("div", {
          className: "ThumbnailUploadError",
          children: dz("thumbnail:imageRequired")
        }), (0, sz.jsx)(lz.d, {
          className: Fz()("ThumbnailUploadNameInput", {
            ValidationError: ez
          }),
          placeholderText: dz("thumbnail:thumbnailName"),
          defaultValue: Xz,
          onValueChange: zz => {
            fz(zz)
          },
          maxLength: pz.i
        }), ez && (0, sz.jsx)("div", {
          className: "ThumbnailUploadError",
          children: dz("thumbnail:nameRequired", {
            min: pz.l,
            max: pz.i
          })
        }), (0, sz.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, sz.jsx)("input", {
            type: "checkbox",
            checked: rz,
            onChange: zz => {
              oz(zz.target.checked)
            }
          }), dz("thumbnail:setAsThumbnailOnceApproved")]
        }), Tz && (0, sz.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: dz("thumbnail:heavyCompressionWarning")
        }), Jz && (0, sz.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Jz
        }), (0, sz.jsx)(iz.q, {
          disabled: Nz,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (az(!0), !xz.current && Zz && Qz && nz) {
              xz.current = !0, vz(!0), Az(null);
              try {
                await Hz(Zz.base64Jpg, Dz, rz ? bz : null)
              } catch (zz) {
                Az(zz.errorMessageForUser ? dz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : dz("thumbnail:failedToUploadImage"))
              } finally {
                xz.current = !1, vz(!1)
              }
            } else nz || tz()
          },
          children: dz(Nz ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Sz = 2e3;

    function yz(zz) {
      let {
        schematicId: uz,
        ownedThumbnailCount: bz,
        onClose: nz,
        onThumbnailReady: iz
      } = zz;
      const {
        t: lz
      } = (0, Mz.F)(), {
        userContext: tz
      } = (0, Lz.c)(), [Hz, dz] = (0, Ez.useState)(!1), [Zz, Rz] = (0, Ez.useState)(!1), [Kz, wz] = (0, Ez.useState)(!1), Xz = (0, Ez.useRef)();
      (0, Ez.useEffect)((() => () => {
        clearTimeout(Xz.current)
      }), []);
      const fz = function(zz, uz) {
        const bz = [];
        return zz.isLoggedIn() || bz.push(cz.NOT_LOGGED_IN), uz >= pz.X && bz.push(cz.THUMBNAIL_LIMIT_REACHED), bz
      }(tz, bz);
      if (fz.length > 0) {
        const zz = {
          [cz.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [cz.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: pz.X
            }
          }
        };
        return (0, sz.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, sz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lz("thumbnail:cannotUploadThumbnail")
          }), fz.map(((uz, bz) => {
            const Ez = zz[uz];
            return (0, sz.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, sz.jsx)(Oz.c, {
                name: "triangle-exclamation"
              }), (0, sz.jsx)("span", {
                children: lz(Ez.key, Ez.params)
              })]
            }, bz)
          }))]
        })
      }
      return (0, sz.jsxs)("div", {
        className: Fz()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Hz
        }),
        children: [Hz && (0, sz.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, sz.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, sz.jsx)(Oz.c, {
              name: "check"
            }), (0, sz.jsx)(az.c, {})]
          }), (0, sz.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: lz("thumbnail:thumbnailUploaded")
          })]
        }), (0, sz.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: lz("thumbnail:uploadThumbnail")
        }), (0, sz.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, sz.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, sz.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: lz("thumbnail:chooseImage", {
                maxSizeKb: Vz
              })
            }), (0, sz.jsx)(gz, {
              schematicId: uz,
              hasReadUploadPolicy: Zz,
              onPolicyValidationError: () => {
                wz(!0)
              },
              onThumbnailReady: async (zz, uz, bz) => {
                await iz(zz, uz, bz), dz(!0), Xz.current = setTimeout(nz, Sz)
              }
            })]
          }), (0, sz.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, sz.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: lz("thumbnail:uploadPolicy")
            }), (0, sz.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "check"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyFollowGuidelines")
                })]
              }), (0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "check"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyInGameAssets")
                })]
              }), (0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "check"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyLimitText")
                })]
              }), (0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "x"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyCopyrightContent")
                })]
              }), (0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "x"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "x"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyBloxdTags")
                })]
              }), (0, sz.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, sz.jsx)(Oz.c, {
                  name: "x"
                }), (0, sz.jsx)("span", {
                  children: lz("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, sz.jsxs)("label", {
              className: Fz()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Kz && !Zz
              }),
              children: [(0, sz.jsx)("input", {
                type: "checkbox",
                checked: Zz,
                onChange: zz => {
                  Rz(zz.target.checked)
                }
              }), lz("thumbnail:agreeToUploadPolicy")]
            }), Kz && !Zz && (0, sz.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: lz("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Dz = bz(1195);
    const Qz = {
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

    function Wz(zz) {
      var uz, bz;
      let {
        schematicData: lz,
        updateSchematicData: Hz,
        publishFormEnabled: pz,
        onClose: dz
      } = zz;
      const {
        t: Zz
      } = (0, Mz.F)(), {
        userContext: Rz,
        isUserContextUpdating: Kz
      } = (0, Lz.c)(), wz = (0, Tz.e)(), [Xz, fz] = (0, Ez.useState)([]), [rz, oz] = (0, Ez.useState)([]), [Nz, vz] = (0, Ez.useState)(!0), [xz, Jz] = (0, Ez.useState)(null !== (uz = lz.customThumbnailId) && void 0 !== uz ? uz : null), [Gz, az] = (0, Ez.useState)(null), Vz = (0, Ez.useRef)(null !== (bz = lz.customThumbnailId) && void 0 !== bz ? bz : null), mz = (0, Ez.useRef)(0), qz = (0, Ez.useRef)(null), hz = (0, Ez.useRef)(null), Uz = (0, Ez.useRef)(null), cz = (0, Ez.useRef)(!1);

      function gz(zz, uz) {
        Uz.current && (clearTimeout(Uz.current), Uz.current = null), az(zz), null !== zz && uz && (Uz.current = setTimeout((() => {
          az(null), Uz.current = null
        }), 5e3))
      }(0, Ez.useEffect)((() => () => {
        clearTimeout(hz.current), clearTimeout(Uz.current)
      }), []);
      const Sz = (0, Ez.useCallback)((() => {
        vz(!0), Az.c.getOwnedThumbnails(Rz).then((zz => {
          const uz = [],
            bz = [];
          for (const Ez of zz.thumbnails) Ez.rejectionPolicyId ? uz.push(Ez) : bz.push(Ez);
          uz.sort(((zz, uz) => zz.lastUpdatedAt - uz.lastUpdatedAt)), bz.sort(((zz, uz) => {
            const bz = zz.approved ? 1 : 0,
              Ez = (uz.approved ? 1 : 0) - bz;
            return 0 !== Ez ? Ez : uz.lastUpdatedAt - zz.lastUpdatedAt
          })), oz(uz), fz(bz)
        })).catch((zz => {
          console.error("Failed to fetch thumbnails:", zz)
        })).finally((() => {
          vz(!1)
        }))
      }), [Rz]);
      async function Qz(zz, uz, bz) {
        return Az.c.uploadSchematicThumbnail(Rz, zz, uz, bz).then((() => {
          gz({
            text: Zz("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Sz()
        }))
      }

      function Wz() {
        mz.current = Date.now(), hz.current = null;
        const zz = qz.current;
        qz.current = null, gz({
          text: Zz("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Az.c.setSchematicThumbnail(Rz, lz.schematicId, zz).then((() => {
          wz.current && (gz({
            text: Zz("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Vz.current = zz, Hz("customThumbnailId", zz), Hz("customThumbnailBlurhash", void 0), Hz("customThumbnailVariants", void 0))
        })).catch((zz => {
          wz.current && (gz({
            text: zz.errorMessageForUser ? Zz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : Zz("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Jz(Vz.current))
        }))
      }

      function Iz(zz) {
        Jz(zz), qz.current = zz;
        const uz = Date.now() - mz.current;
        uz >= 1e3 ? Wz() : (gz({
          text: Zz("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), hz.current || (hz.current = setTimeout((() => {
          Wz()
        }), 1e3 - uz)))
      }
      return (0, Ez.useEffect)((() => {
        !1 === Kz && Sz()
      }), [Kz, Sz]), rz.length > 0 ? (0, sz.jsx)(ez, {
        rejectedThumbnails: rz,
        userContext: Rz,
        isMountedRef: wz,
        onAcknowledged: Sz
      }) : (0, sz.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, sz.jsxs)("div", {
          className: "SectionTitle",
          children: [Zz("thumbnail:gameThumbnail"), Gz && (0, sz.jsx)("span", {
            className: Fz()("ThumbnailActionMsg", `ThumbnailActionMsg--${Gz.type}`),
            children: Gz.text
          })]
        }), (0, sz.jsx)("div", {
          className: "SectionBody",
          children: (0, sz.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, sz.jsxs)("div", {
              className: Fz()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === xz
              }),
              onClick: () => Iz(null),
              children: [(0, sz.jsx)(Pz.b, {
                game: {
                  schematicId: lz.schematicId,
                  imageBlurhash: lz.imageBlurhash
                }
              }), (0, sz.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Zz("general:default")
              })]
            }), Nz && (0, sz.jsx)(tz.c, {}), Xz.map(((zz, uz) => (0, sz.jsxs)("div", {
              className: Fz()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: xz === zz.id,
                ThumbnailGridItemPending: !zz.approved
              }),
              onClick: () => {
                zz.approved && Iz(zz.id)
              },
              children: [zz.approved && (0, sz.jsx)("img", {
                src: `${Dz.clientSideServerUrls.s3Url}/customThumbnails/${zz.id}.jpg`,
                alt: "Thumbnail"
              }), zz.approved && (0, sz.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: zz.name
              }), zz.id && (0, sz.jsx)(iz.K, {
                className: "ThumbnailDeleteButton",
                onClick: uz => async function(zz, uz, bz) {
                  zz.stopPropagation();
                  const Ez = await nz.NotificationProvider.showCustomPopup({
                      body: zz => (0, sz.jsx)(jz, {
                        thumbnailId: uz,
                        thumbnailName: bz,
                        onClose: uz => {
                          uz && (cz.current = !0), zz()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: dz
                    }).getResult(),
                    iz = cz.current;
                  cz.current = !1, iz && !0 === Ez && (wz.current && gz({
                    text: Zz("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Az.c.deleteSchematicThumbnail(Rz, uz).then((() => {
                    wz.current && (gz({
                      text: Zz("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Vz.current === uz && Iz(null), Sz())
                  })).catch((zz => {
                    wz.current && gz({
                      text: zz.errorMessageForUser ? Zz(zz.errorMessageForUser, zz.errorMessageTranslationParams) : Zz("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(uz, zz.id, zz.name),
                children: (0, sz.jsx)(Oz.c, {
                  name: "trash-can"
                })
              }), !zz.approved && (0, sz.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, sz.jsx)(Oz.c, {
                  name: "hourglass-clock"
                })
              }), !zz.approved && (0, sz.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [zz.name, (0, sz.jsx)("br", {}), Zz("thumbnail:pendingApproval")]
              })]
            }, uz))), (0, sz.jsxs)("div", {
              className: Fz()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !pz
              }),
              onClick: () => {
                pz && function(zz) {
                  let {
                    schematicId: uz,
                    ownedThumbnailCount: bz,
                    onThumbnailReady: Ez,
                    onClose: iz
                  } = zz;
                  nz.NotificationProvider.showCustomPopup({
                    body: zz => (0, sz.jsx)(yz, {
                      schematicId: uz,
                      ownedThumbnailCount: bz,
                      onClose: zz,
                      onThumbnailReady: Ez
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: iz,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: lz.schematicId,
                  ownedThumbnailCount: Xz.length,
                  onThumbnailReady: Qz,
                  onClose: dz
                })
              },
              children: [(0, sz.jsx)(Oz.c, {
                name: "plus"
              }), (0, sz.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Zz("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function ez(zz) {
      let {
        rejectedThumbnails: uz,
        userContext: bz,
        isMountedRef: nz,
        onAcknowledged: lz
      } = zz;
      const {
        t: Hz
      } = (0, Mz.F)(), [pz, dz] = (0, Ez.useState)(!1), [Fz, Zz] = (0, Ez.useState)(!1), Rz = function(zz) {
        const uz = new Map;
        for (const bz of zz) {
          const zz = bz.rejectionPolicyId,
            Ez = uz.get(zz);
          Ez ? Ez.push(bz) : uz.set(zz, [bz])
        }
        return uz
      }(uz);
      return (0, sz.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, sz.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, sz.jsx)(Oz.c, {
            name: "triangle-exclamation"
          }), " ", Hz("thumbnail:thumbnailsRejected"), " ", (0, sz.jsx)(Oz.c, {
            name: "triangle-exclamation"
          })]
        }), (0, sz.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Hz("thumbnail:thumbnailsRejectedDescription")
        }), (0, sz.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Rz.entries()].map((zz => {
            let [uz, bz] = zz;
            const Ez = Qz[uz];
            return (0, sz.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, sz.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: bz.map((zz => (0, sz.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, sz.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, sz.jsx)(Oz.c, {
                      name: "image-slash"
                    })
                  }), (0, sz.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, sz.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: zz.name
                    })
                  })]
                }, zz.id)))
              }), (0, sz.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Hz("thumbnail:rejectionReason"), " ", Ez ? Hz(Ez.reason) : uz]
              }), Ez && (0, sz.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Ez.tips.map((zz => (0, sz.jsx)("li", {
                  children: Hz(zz)
                }, zz)))
              })]
            }, uz)
          }))
        }), (0, sz.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, sz.jsx)(Jz.b, {
            checked: pz,
            onChange: zz => dz(zz.target.checked),
            disabled: Fz
          }), (0, sz.jsx)("span", {
            children: Hz("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, sz.jsx)(iz.q, {
          onClick: async function() {
            Zz(!0);
            const zz = await Promise.allSettled(uz.map((zz => Az.c.deleteSchematicThumbnail(bz, zz.id))));
            if (!nz.current) return;
            const Ez = zz.filter((zz => "rejected" === zz.status));
            Ez.length > 0 && console.error("Some rejected thumbnails failed to delete:", Ez), lz()
          },
          disabled: !pz || Fz,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Fz ? (0, sz.jsx)(tz.c, {}) : Hz("general:accept")
        })]
      })
    }

    function jz(zz) {
      let {
        thumbnailId: uz,
        thumbnailName: bz,
        onClose: Ez
      } = zz;
      const {
        t: nz
      } = (0, Mz.F)();
      return (0, sz.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, sz.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: nz("thumbnail:deleteThumbnail")
        }), (0, sz.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, sz.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Dz.clientSideServerUrls.s3Url}/customThumbnails/${uz}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, sz.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: bz
          })]
        }), (0, sz.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: nz("thumbnail:deleteThumbnailConfirmation")
        }), (0, sz.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, sz.jsxs)(iz.K, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Ez(!0),
            children: [(0, sz.jsx)(Oz.c, {
              name: "trash-can"
            }), " ", nz("general:delete")]
          }), (0, sz.jsx)(iz.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Ez(!1),
            children: nz("general:cancel")
          })]
        })]
      })
    }
    var Iz = bz(2916),
      Bz = bz(4737),
      Cz = bz(4744),
      Yz = bz(4780);

    function kz(zz) {
      let {
        schematicData: uz,
        setTexturePack: bz,
        initializeTexturePack: nz,
        publishFormEnabled: iz
      } = zz;
      const {
        t: lz
      } = (0, Mz.F)(), [tz, Hz] = (0, Ez.useState)(null), [Oz, pz] = (0, Ez.useState)(null), [dz, Zz] = (0, Ez.useState)(!1), Rz = (0, Tz.e)(), Kz = iz && !dz, wz = uz.customTexturePackKey;

      function Xz(zz) {
        var uz;
        Hz(zz.metaData.id), pz(null !== (uz = zz.metaData.fromFolderName) && void 0 !== uz ? uz : null), (zz.metaData.id !== Iz.r.CUSTOM || zz.metaData.fromFolderName) && bz(zz)
      }
      return (0, Ez.useEffect)((() => {
        wz && (Zz(!0), (0, Bz.c)(wz).then((zz => {
          var uz;
          Rz.current && (zz ? (Hz(zz.metaData.id), pz(null !== (uz = zz.metaData.fromFolderName) && void 0 !== uz ? uz : null), nz(zz)) : console.error(`No texture pack at ${wz}`))
        })).catch((zz => {
          console.error("Error fetching texture pack: ", zz)
        })).finally((() => {
          Zz(!1)
        })))
      }), [wz, nz, Rz]), (0, sz.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, sz.jsx)("div", {
          className: "SectionTitle",
          children: lz("customTexturePack:customTexturePack")
        }), (0, sz.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, sz.jsx)("div", {
            className: Fz()("TexturePack", {
              Selected: null === tz && !dz,
              Disabled: !Kz
            }),
            onClick: () => {
              Kz && (Hz(null), bz(null), pz(null))
            },
            children: (0, sz.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Iz.r).map((zz => (0, sz.jsx)(Cz.e, {
            id: zz,
            isSelected: zz === tz,
            setSelected: Xz,
            disabled: !Kz
          }, zz)))]
        }), tz === Iz.r.CUSTOM && (0, sz.jsx)(Yz.c, {
          folderName: Oz,
          onTexturePackUpdated: Xz,
          disabled: !Kz,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var zu = bz(4792);

    function uu(zz) {
      var uz;
      let {
        gameCategory: bz,
        setGameCategory: Ez,
        disabled: nz
      } = zz;
      const lz = null !== (uz = (0, Zz.rb)(bz)) && void 0 !== uz ? uz : "other";
      return (0, sz.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, sz.jsx)(wz.d, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: nz,
          children: (0, sz.jsx)(Xz.d, {
            options: Zz.eb.map((zz => ({
              value: zz,
              label: Zz.db[zz]
            }))),
            value: lz,
            onChange: zz => {
              zz.value !== lz && Ez(Zz.Z[zz.value][0])
            }
          })
        }), (0, sz.jsx)(wz.d, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: nz,
          children: (0, sz.jsx)("div", {
            className: "GameCategoryOptions",
            children: Zz.Z[lz].map((zz => (0, sz.jsx)(iz.V, {
              active: zz === bz,
              onClick: () => {
                Ez(zz)
              },
              children: (0, Zz.nb)(zz)
            }, zz)))
          })
        })]
      })
    }

    function bu(zz) {
      let {
        editor: uz,
        onClose: bz
      } = zz;
      const {
        t: Ez
      } = (0, Mz.F)(), {
        schematicData: nz,
        updateSchematicData: iz,
        publishFormEnabled: tz,
        formEnabled: Hz
      } = uz;
      return (0, sz.jsxs)(sz.Fragment, {
        children: [(0, sz.jsxs)(rz, {
          icon: "pen-to-square",
          title: Ez("worldBuilder:basicsSection"),
          disabled: !Hz,
          children: [(0, sz.jsx)(oz, {
            label: Ez("general:name"),
            caption: Ez("worldBuilder:schematicNameTagsHint"),
            children: (0, sz.jsx)(lz.d, {
              className: "SchematicPageName",
              defaultValue: nz.name,
              onValueChange: zz => iz("name", zz),
              placeholderText: Ez("worldBuilder:schematicNamePlaceholder"),
              maxLength: pz.xb
            })
          }), (0, sz.jsx)(oz, {
            label: Ez("general:description"),
            children: (0, sz.jsx)(lz.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: nz.description,
              onValueChange: zz => iz("description", zz),
              placeholderText: Ez("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: pz.ub
            })
          }), (0, sz.jsx)(uu, {
            gameCategory: nz.gameCategory,
            setGameCategory: zz => iz("gameCategory", zz),
            disabled: !tz
          }), !0 === nz.gamePublished && (0, sz.jsx)(Wz, {
            schematicData: nz,
            updateSchematicData: iz,
            publishFormEnabled: tz,
            onClose: function() {
              null === bz || void 0 === bz || bz()
            }
          })]
        }), (0, sz.jsx)(vz, {
          schematicData: nz,
          updateSchematicData: iz,
          publishFormEnabled: tz,
          formEnabled: Hz
        }), !0 === nz.gamePublished && (0, sz.jsx)(rz, {
          icon: "palette",
          title: Ez("worldBuilder:texturePackSection"),
          disabled: !Hz,
          children: (0, sz.jsx)(kz, {
            schematicData: nz,
            setTexturePack: uz.setTexturePack,
            initializeTexturePack: uz.initializeTexturePack,
            publishFormEnabled: tz
          })
        })]
      })
    }

    function Eu(zz) {
      let {
        editor: uz
      } = zz;
      const {
        t: bz
      } = (0, Mz.F)(), {
        schematicData: Ez,
        formEnabled: nz,
        hasUnsavedChanges: lz
      } = uz, pz = nz && lz;
      return (0, sz.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [nz && lz && (0, sz.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, sz.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), bz("worldBuilder:unsavedChanges")]
        }), (0, sz.jsx)(Hz.f, {
          tooltipInner: (0, sz.jsx)("div", {
            className: "SaveButtonTooltip",
            children: bz(nz && !lz ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, sz.jsxs)(iz.f, {
            className: "SaveChangesButton",
            onClick: () => uz.saveSchematic(Ez.gamePublished),
            disabled: !pz,
            children: [(0, sz.jsxs)("span", {
              className: nz ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, sz.jsx)(Oz.c, {
                name: "wrench"
              }), " ", bz("worldBuilder:saveChanges")]
            }), !nz && (0, sz.jsx)(tz.c, {})]
          })
        })]
      })
    }

    function nu(zz) {
      let {
        schematic: uz,
        onSchematicUpdate: bz,
        onClose: nz,
        inSourceWorld: lz
      } = zz;
      const {
        t: tz
      } = (0, Mz.F)();

      function Hz() {
        null === nz || void 0 === nz || nz()
      }
      const Oz = (0, zu.c)(uz, {
        onNavigateAway: Hz,
        inSourceWorld: lz
      });
      return (0, Ez.useEffect)((() => {
        null === bz || void 0 === bz || bz(Oz.schematicData)
      }), [Oz.schematicData, bz]), (0, sz.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, sz.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, sz.jsx)(iz.d, {
            onClick: Hz,
            children: tz("worldBuilder:back")
          }), (0, sz.jsx)(rz, {
            icon: "rocket-launch",
            title: tz("worldBuilder:actionsSection"),
            disabled: !Oz.formEnabled,
            children: (0, sz.jsx)(xz.d, {
              editor: Oz
            })
          }), (0, sz.jsx)(bu, {
            editor: Oz,
            onClose: Hz
          })]
        }), (0, sz.jsx)(Eu, {
          editor: Oz
        })]
      })
    }

    function iu(zz) {
      let {
        schematic: uz,
        onSchematicUpdate: bz,
        onClose: Ez,
        inSourceWorld: iz
      } = zz;
      nz.NotificationProvider.showCustomPopup({
        body: zz => (0, sz.jsx)(nu, {
          schematic: uz,
          onSchematicUpdate: bz,
          onClose: zz,
          inSourceWorld: iz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ez,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4704: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1181),
      lz = bz(1047),
      Mz = bz(1419),
      tz = bz(1332),
      Hz = bz(1305),
      Oz = bz(1089);

    function pz(zz) {
      let {
        editor: uz,
        className: bz
      } = zz;
      const {
        t: Ez
      } = (0, iz.F)(), {
        schematicData: pz,
        formEnabled: dz,
        publishFormEnabled: Fz
      } = uz, Zz = !dz || !Fz;
      return (0, Oz.jsxs)("div", {
        className: nz()("PublishButtonContainer", bz),
        children: [uz.canEditSourceWorld && (0, Oz.jsxs)(Mz.f, {
          onClick: uz.editSourceWorld,
          disabled: Zz,
          children: [(0, Oz.jsx)(lz.c, {
            name: "edit"
          }), " ", Ez("worldBuilder:editSourceWorld")]
        }), !pz.gamePublished && (0, Oz.jsx)(tz.f, {
          tooltipInner: (0, Oz.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Ez("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Oz.jsxs)(Mz.q, {
            onClick: () => uz.saveSchematic(!0),
            disabled: Zz,
            children: [(0, Oz.jsx)(lz.c, {
              name: "rocket-launch"
            }), " ", Ez("worldBuilder:publishAsGame"), " ", (0, Oz.jsx)(lz.c, {
              name: "info-circle"
            })]
          })
        }), !0 === pz.gamePublished && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)(tz.f, {
            tooltipInner: (0, Oz.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Ez("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Oz.jsxs)(Mz.K, {
              onClick: uz.unpublishSchematic,
              disabled: Zz,
              children: [(0, Oz.jsx)(lz.c, {
                name: "rocket-launch"
              }), " ", Ez("worldBuilder:unpublishAsGame"), " ", (0, Oz.jsx)(lz.c, {
                name: "info-circle"
              })]
            })
          }), (0, Oz.jsxs)(Mz.f, {
            onClick: uz.playGame,
            disabled: Zz,
            children: [(0, Oz.jsx)(lz.c, {
              name: "joystick"
            }), " ", Ez("general:playGame")]
          })]
        }), !dz && (0, Oz.jsx)(Hz.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4737: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(1195);
    async function nz(zz) {
      const uz = await fetch(`${Ez.clientSideServerUrls.s3Url}/${zz}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === uz.status || 403 === uz.status) return null;
      if (!uz.ok) throw new Error(`Failed to download the texture pack (${uz.status})`);
      return await uz.json()
    }
  },
  4792: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Kz
    });
    var Ez = bz(56),
      nz = bz(1298),
      iz = bz(994),
      lz = bz(158),
      Mz = bz(1519),
      tz = bz(20),
      Hz = bz(1871),
      Oz = bz(1473),
      pz = bz(4335),
      dz = bz(1322),
      Fz = bz(1114),
      Zz = bz(1482);

    function Rz(zz, uz) {
      return {
        schematicId: zz.schematicId,
        name: zz.name,
        description: zz.description,
        gamePublished: uz,
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

    function Kz(zz) {
      let {
        onNavigateAway: uz,
        inSourceWorld: bz = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Kz
      } = (0, Fz.c)(), wz = (0, Zz.useNavigatePreserveSearch)(), [Xz, fz] = (0, Ez.useState)({
        ...zz
      }), [sz, rz] = (0, Ez.useState)("Enter"), [oz, Nz] = (0, Ez.useState)(void 0), vz = (0, Ez.useRef)(Rz(zz, zz.gamePublished)), xz = (0, Ez.useRef)(void 0), Jz = "Enter" === sz, Az = Kz.playerHasRank("developer") || Kz.playerHasRank("admin") || "Enter" === sz && !1 !== Xz.schematicContainsSpawnBlock, Tz = void 0 !== oz && oz !== xz.current || JSON.stringify(Rz(Xz, Xz.gamePublished)) !== JSON.stringify(vz.current);

      function Lz(zz, uz) {
        fz((bz => ({
          ...bz,
          [zz]: uz
        })))
      }
      const Pz = (0, Ez.useCallback)((zz => {
        xz.current = zz, Nz(zz)
      }), []);

      function Gz(zz) {
        rz("Loading");
        const uz = Rz(Xz, zz),
          bz = oz !== xz.current ? oz : void 0;
        Oz.c.updateSchematic(Kz, uz, bz).then((bz => {
          let {
            customTexturePackKey: Ez
          } = bz;
          rz("Success"), Lz("customTexturePackKey", Ez), vz.current = uz, xz.current = void 0, Nz(void 0), setTimeout((() => {
            Lz("gamePublished", zz), rz("Enter")
          }), 1e3)
        })).catch((zz => {
          var uz;
          (console.error("Failed to save schematic:", zz), rz("Error"), zz instanceof lz.c && zz.errorMessageForUser) && dz.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: zz.errorMessageForUser,
            textOpts: {
              subtitle: null !== (uz = zz.errorMessageTranslationParams) && void 0 !== uz ? uz : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            rz("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Xz,
        updateSchematicData: Lz,
        setTexturePack: Nz,
        initializeTexturePack: Pz,
        updateState: sz,
        formEnabled: Jz,
        publishFormEnabled: Az,
        hasUnsavedChanges: Tz,
        canEditSourceWorld: !bz,
        saveSchematic: Gz,
        unpublishSchematic: function() {
          dz.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((zz => {
            !0 === zz && Gz(!1)
          }))
        },
        editSourceWorld: function() {
          rz("Loading"), pz.e.getSourceWorld(Xz.schematicId).then((zz => {
            Hz.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, tz.k)("other"), wz((0, nz.c)("classic", zz)), null === uz || void 0 === uz || uz()
          })).catch((zz => {
            console.error("Failed to get source world:", zz), rz("Error"), setTimeout((() => {
              rz("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Hz.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), wz((0, Mz.C)((0, iz.s)(Xz.schematicId), Xz)), null === uz || void 0 === uz || uz()
        }
      }
    }
  },
  4700: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);