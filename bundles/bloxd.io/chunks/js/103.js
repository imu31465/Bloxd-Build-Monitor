export const id = 103;
export const ids = [103];
export const modules = {
  4718: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru,
      c: () => Vu,
      d: () => Bu
    });
    yu(4725);
    var Eu = yu(1170),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1325),
      Ju = (yu(64), yu(4139)),
      Nu = yu(1043),
      Xu = yu(1079);

    function Vu(uu) {
      let {
        children: Ru,
        label: yu,
        className: Ku,
        circleInfoText: Ju,
        disabled: Vu,
        onLabelClick: ru
      } = uu;
      const {
        t: Bu
      } = (0, Eu.E)(), xu = (0, Xu.jsxs)("div", {
        className: Qu()("Label", {
          ClickableLabel: void 0 !== ru
        }),
        onClick: ru,
        children: [Bu(yu), Ju && (0, Xu.jsx)(Nu.c, {
          name: "circle-info"
        })]
      });
      return (0, Xu.jsxs)("div", {
        className: Qu()("LabeledInput", {
          [Ku]: Ku,
          DisabledLabelInput: Vu
        }),
        children: [Ju && (0, Xu.jsx)(mu.i, {
          tooltipInner: (0, Xu.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Bu(Ju)
          }),
          children: xu
        }), !Ju && xu, Ru]
      })
    }

    function ru(uu) {
      let {
        checked: Ru,
        setChecked: yu
      } = uu;
      return (0, Xu.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: uu => {
          yu(!Ru)
        },
        children: (0, Xu.jsx)(Ju.b, {
          checked: Ru,
          onChange: uu => {
            yu(uu.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Bu(uu) {
      let {
        checked: Ru,
        setChecked: yu,
        disabled: Eu
      } = uu;
      return (0, Xu.jsx)("div", {
        className: Qu()("SwitchContainer", {
          SwitchContainerDisabled: Eu
        }),
        onClick: () => {
          Eu || yu(!Ru)
        },
        children: (0, Xu.jsx)(Ju.b, {
          className: "SwitchCheckbox",
          checked: Ru,
          onChange: uu => {
            yu(uu.target.checked)
          },
          disabled: !!Eu
        })
      })
    }
  },
  4728: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(4409),
      mu = yu(1170),
      Ju = yu(1079);
    const Nu = [...Qu.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Xu(uu) {
      const {
        disabled: Ru,
        hideWrapper: yu
      } = uu, {
        t: Eu
      } = (0, mu.E)(), Xu = uu.advancedMode ? Nu.map((Ru => [Ru, uu.callbacks[Ru]])) : Qu.n.map((Ru => [Ru, uu.callbacks[Ru]])), ru = (0, Ju.jsx)("div", {
        className: Ku()("PluginsGrid", {
          SectionBody: !yu
        }),
        children: Xu.map((uu => {
          let [yu, Eu] = uu;
          return (0, Ju.jsx)(Vu, {
            plugin: yu,
            callbacks: Eu,
            disabled: Ru
          }, yu)
        }))
      });
      return yu ? ru : (0, Ju.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ju.jsx)("div", {
          className: "SectionTitle",
          children: Eu("worldBuilder:pluginsSection")
        }), ru]
      })
    }

    function Vu(uu) {
      let {
        plugin: Ru,
        callbacks: {
          isEnabled: yu,
          tC: Eu
        },
        disabled: Qu
      } = uu;
      const {
        t: Nu
      } = (0, mu.E)(), Xu = yu();
      return (0, Ju.jsxs)("div", {
        className: Ku()("PluginCard", {
          PluginCardEnabled: Xu,
          PluginCardDisabledForm: Qu
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Qu || void 0,
        onClick: () => {
          Qu || Eu(!Xu)
        },
        children: [(0, Ju.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ju.jsx)("img", {
            src: `/textures/games/classic/customGames/${Ru}.png`,
            alt: Ru
          })
        }), (0, Ju.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ju.jsx)("div", {
            className: "PluginCardTitle",
            children: Nu(ru[Ru])
          }), (0, Ju.jsx)("div", {
            className: "PluginCardDescription",
            children: Nu(Bu[Ru])
          })]
        }), (0, Ju.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Nu(Xu ? "general:on" : "general:off")
        })]
      })
    }
    const ru = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Bu = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4709: (uu, Ru, yu) => {
    yu.d(Ru, {
      g: () => KR,
      c: () => ER,
      e: () => yR,
      h: () => QR
    });
    var Eu = yu(64),
      Ku = yu(1311),
      Qu = yu(1408),
      mu = yu(1617),
      Ju = yu(1170),
      Nu = yu(1300),
      Xu = yu(1325),
      Vu = yu(1043),
      ru = yu(1199),
      Bu = yu(1035),
      xu = yu.n(Bu),
      Su = yu(330),
      pu = yu(4409),
      Tu = yu(1215),
      Wu = yu(4718),
      ju = yu(2916),
      Hu = yu(4728),
      du = yu(1079);

    function bu(uu) {
      let {
        icon: Ru,
        title: yu,
        disabled: Eu,
        children: Ku
      } = uu;
      return (0, du.jsxs)("div", {
        className: xu()("ManageCard", {
          ManageCardDisabled: Eu
        }),
        children: [(0, du.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, du.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, du.jsx)(Vu.c, {
              name: Ru
            })
          }), (0, du.jsx)("div", {
            children: (0, du.jsx)("h2", {
              className: "ManageCardTitle",
              children: yu
            })
          })]
        }), (0, du.jsxs)("div", {
          className: "ManageCardBody",
          children: [Ku, Eu && (0, du.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Cu(uu) {
      let {
        label: Ru,
        caption: yu,
        children: Eu
      } = uu;
      return (0, du.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, du.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Ru
        }), Eu, yu && (0, du.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: yu
        })]
      })
    }

    function ku(uu) {
      let {
        label: Ru,
        caption: yu,
        disabled: Eu,
        children: Ku
      } = uu;
      return (0, du.jsxs)("div", {
        className: xu()("ManageField", {
          ManageFieldDisabled: Eu
        }),
        children: [(0, du.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, du.jsx)("div", {
            className: "ManageFieldLabel",
            children: Ru
          }), (0, du.jsx)("div", {
            className: "ManageFieldCaption",
            children: yu
          })]
        }), (0, du.jsx)("div", {
          className: "ManageFieldControl",
          children: Ku
        })]
      })
    }

    function eu(uu) {
      var Ru, yu;
      let {
        schematicData: Eu,
        updateSchematicData: Ku,
        publishFormEnabled: Qu,
        formEnabled: mu
      } = uu;
      const {
        t: Nu
      } = (0, Ju.E)(), Xu = !Qu, Vu = {
        tpRequests: {
          isEnabled: () => !Eu.disableTpRequests,
          tC: uu => Ku("disableTpRequests", !uu)
        },
        spawnProtection: {
          isEnabled: () => !Eu.disableSpawnProtection,
          tC: uu => Ku("disableSpawnProtection", !uu)
        },
        spawnReset: {
          isEnabled: () => !!Eu.enableSpawnReset,
          tC: uu => Ku("enableSpawnReset", uu)
        },
        smpMarketplace: {
          isEnabled: () => !!Eu.enableSmpMarketplace,
          tC: uu => Ku("enableSmpMarketplace", uu)
        },
        survivalGuns: {
          isEnabled: () => !!Eu.enableSurvivalGuns,
          tC: uu => Ku("enableSurvivalGuns", uu)
        },
        fallDamage: {
          isEnabled: () => !Eu.disableFallDamage,
          tC: uu => Ku("disableFallDamage", !uu)
        },
        dayNight: {
          isEnabled: () => !!Eu.enableDayNight,
          tC: uu => Ku("enableDayNight", uu)
        }
      };
      return (0, du.jsxs)(du.Fragment, {
        children: [!1 === Eu.schematicContainsSpawnBlock && (0, du.jsx)("div", {
          className: "ManageWarningBanner",
          children: Nu("worldBuilder:mustContainSpawnBlock")
        }), (0, du.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, du.jsxs)(bu, {
            icon: "globe",
            title: Nu("worldBuilder:worldRulesSection"),
            disabled: !mu,
            children: [(0, du.jsx)(ku, {
              label: Nu("classic:defaultGamemode"),
              caption: Nu("classic:defaultGamemodeDescription"),
              disabled: Xu,
              children: (0, du.jsx)(ju.d, {
                controlClassName: "ManageDropdown",
                options: pu.E.map((uu => ({
                  value: uu,
                  label: Su.v[uu]
                }))),
                value: Eu.defaultGamemode,
                onChange: uu => Ku("defaultGamemode", uu.value)
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:voidDeathHeight"),
              caption: Nu("classic:voidDeathHeightDescription"),
              disabled: Xu,
              children: (0, du.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, du.jsx)("input", {
                  type: "number",
                  max: Tu.G,
                  value: null !== (Ru = Eu.voidDeathHeight) && void 0 !== Ru ? Ru : "",
                  onChange: uu => {
                    const Ru = parseInt(uu.target.value);
                    Ku("voidDeathHeight", Ru)
                  }
                }), (0, du.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Nu("worldBuilder:blocksUnit")
                })]
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:worldBorder"),
              caption: Nu("classic:worldBorderDescription"),
              disabled: Xu,
              children: (0, du.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, du.jsx)("input", {
                  type: "number",
                  min: Tu.L,
                  max: Tu.H,
                  placeholder: Nu("worldBuilder:noWorldBorderLimit"),
                  value: null !== (yu = Eu.worldBorder) && void 0 !== yu ? yu : "",
                  onChange: uu => {
                    const Ru = parseInt(uu.target.value);
                    Ku("worldBorder", isNaN(Ru) ? null : Ru)
                  }
                }), (0, du.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Nu("worldBuilder:blocksUnit")
                })]
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:disableMobs"),
              caption: Nu("classic:disableMobsDescription"),
              disabled: Xu,
              children: (0, du.jsx)(Wu.d, {
                checked: Eu.disableMobs,
                setChecked: uu => Ku("disableMobs", uu),
                disabled: Xu
              })
            })]
          }), (0, du.jsxs)(bu, {
            icon: "user-group",
            title: Nu("worldBuilder:playerAndLobbySection"),
            disabled: !mu,
            children: [(0, du.jsx)(ku, {
              label: Nu("classic:disableKeepInventory"),
              caption: Nu("classic:disableKeepInventoryDescription"),
              disabled: Xu,
              children: (0, du.jsx)(Wu.d, {
                checked: Eu.disableKeepInventory,
                setChecked: uu => Ku("disableKeepInventory", uu),
                disabled: Xu
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:persistInventory"),
              caption: Nu("classic:persistInventoryDescription"),
              disabled: Xu,
              children: (0, du.jsx)(ju.d, {
                controlClassName: "ManageDropdown",
                options: pu.q.map((uu => ({
                  value: uu,
                  label: Su.k[uu]
                }))),
                value: Eu.persistInventory,
                onChange: uu => Ku("persistInventory", uu.value)
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:persistWorld"),
              caption: Nu("classic:persistWorldDescription"),
              disabled: Xu,
              children: (0, du.jsx)(Wu.d, {
                checked: Eu.persistWorld,
                setChecked: uu => Ku("persistWorld", uu),
                disabled: Xu
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:disableLobbySpawn"),
              caption: Nu("classic:disableLobbySpawnDescription"),
              disabled: Xu,
              children: (0, du.jsx)(Wu.d, {
                checked: Eu.disableLobbySpawn,
                setChecked: uu => Ku("disableLobbySpawn", uu),
                disabled: Xu
              })
            }), (0, du.jsx)(ku, {
              label: Nu("classic:hideLobbyCode"),
              caption: Nu("classic:hideLobbyCodeDescription"),
              disabled: Xu,
              children: (0, du.jsx)(Wu.d, {
                checked: Eu.hideLobbyCode,
                setChecked: uu => Ku("hideLobbyCode", uu),
                disabled: Xu
              })
            })]
          })]
        }), (0, du.jsx)(bu, {
          icon: "layer-group",
          title: Nu("worldBuilder:pluginsSection"),
          disabled: !mu,
          children: (0, du.jsx)(Hu.e, {
            callbacks: Vu,
            disabled: Xu,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Au = yu(4737),
      Du = yu(4139),
      Mu = yu(1447),
      Iu = yu(3307),
      Gu = yu(1107),
      Uu = yu(4686),
      nu = yu(4740),
      su = yu(1410);
    const tu = 50,
      lu = .3;
    async function gu(uu) {
      const Ru = await
      function(uu) {
        return new Promise(((Ru, yu) => {
          const Eu = new FileReader;
          Eu.onload = () => Ru(Eu.result), Eu.onerror = yu, Eu.readAsDataURL(uu)
        }))
      }(uu), yu = await
      function(uu) {
        return new Promise(((Ru, yu) => {
          const Eu = new Image;
          Eu.onload = () => Ru(Eu), Eu.onerror = () => yu(new Error("Failed to load image")), Eu.src = uu
        }))
      }(Ru);
      if (yu.naturalHeight > yu.naturalWidth) throw new cu;
      const Eu = 1024 * tu,
        {
          dataUrl: Ku,
          finalQuality: Qu
        } = function(uu, Ru) {
          const yu = document.createElement("canvas");
          yu.width = uu.naturalWidth, yu.height = uu.naturalHeight, yu.getContext("2d").drawImage(uu, 0, 0);
          let Eu = .92,
            Ku = yu.toDataURL("image/jpeg", Eu);
          for (; .75 * Ku.length > Ru && Eu > .05;) Eu -= .05, Ku = yu.toDataURL("image/jpeg", Eu);
          return {
            dataUrl: Ku,
            finalQuality: Eu
          }
        }(yu, Eu);
      if (Math.ceil(.75 * Ku.length) > Eu) throw new Lu;
      return {
        base64Jpg: Ku,
        heavilyCompressed: Qu < lu
      }
    }
    class cu extends Error {}
    class Lu extends Error {}
    var zu = function(uu) {
      return uu[uu.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", uu[uu.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", uu
    }(zu || {});

    function Fu(uu) {
      var Ru;
      let {
        schematicId: yu,
        hasReadUploadPolicy: Ku,
        onPolicyValidationError: Nu,
        onThumbnailReady: Xu
      } = uu;
      const {
        t: Bu
      } = (0, Ju.E)(), [Su, pu] = (0, Eu.useState)(null), [Tu, Wu] = (0, Eu.useState)(""), [ju, Hu] = (0, Eu.useState)(""), [bu, Cu] = (0, Eu.useState)(!0), [ku, eu] = (0, Eu.useState)(!1), Au = (0, Eu.useRef)(!1), [Du, Mu] = (0, Eu.useState)(null), [Iu, Gu] = (0, Eu.useState)(!1), [Uu, su] = (0, Eu.useState)(!1), tu = (0, Eu.useRef)(0), {
        getRootProps: lu,
        getInputProps: zu,
        isDragActive: Fu
      } = (0, nu.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async uu => {
          if (0 === uu.length) return;
          const Ru = uu[0],
            yu = ++tu.current;
          Mu(null), Gu(!1), pu(null), Wu(Ru.name);
          try {
            const uu = await gu(Ru);
            if (yu !== tu.current) return;
            pu(uu), Gu(uu.heavilyCompressed)
          } catch (Eu) {
            if (yu !== tu.current) return;
            Mu(Bu(Eu instanceof cu ? "thumbnail:portraitImagesNotAllowed" : Eu instanceof Lu ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), wu = Tu.length <= 30 ? Tu : `${Tu.slice(0,27)}...`, Zu = null !== (Ru = null === Su || void 0 === Su ? void 0 : Su.base64Jpg) && void 0 !== Ru ? Ru : null, hu = ju.trim(), Pu = hu.length >= ru.k && hu.length <= ru.j, iu = Uu && !Su && !Du, Yu = Uu && !Pu;
      return (0, du.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, du.jsxs)("div", {
          ...lu({
            className: xu()("ThumbnailUploadDropzone", {
              ActiveDrag: Fu,
              ValidationError: iu
            })
          }),
          children: [(0, du.jsx)("input", {
            ...zu()
          }), !Fu && Zu ? (0, du.jsxs)(du.Fragment, {
            children: [(0, du.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, du.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, du.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, du.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, du.jsx)("img", {
                    src: Zu,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, du.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, du.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, du.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, du.jsx)("img", {
                    src: Zu,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, du.jsxs)("div", {
              children: [(0, du.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: wu
              }), (0, du.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Bu("thumbnail:preview")
              })]
            })]
          }) : (0, du.jsxs)(du.Fragment, {
            children: [(0, du.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, du.jsx)(Vu.c, {
                name: "image"
              })
            }), (0, du.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Bu("thumbnail:dragImageHere")
            })]
          })]
        }), iu && (0, du.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Bu("thumbnail:imageRequired")
        }), (0, du.jsx)(mu.b, {
          className: xu()("ThumbnailUploadNameInput", {
            ValidationError: Yu
          }),
          placeholderText: Bu("thumbnail:thumbnailName"),
          defaultValue: ju,
          onValueChange: uu => {
            Hu(uu)
          },
          maxLength: ru.j
        }), Yu && (0, du.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Bu("thumbnail:nameRequired", {
            min: ru.k,
            max: ru.j
          })
        }), (0, du.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, du.jsx)("input", {
            type: "checkbox",
            checked: bu,
            onChange: uu => {
              Cu(uu.target.checked)
            }
          }), Bu("thumbnail:setAsThumbnailOnceApproved")]
        }), Iu && (0, du.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Bu("thumbnail:heavyCompressionWarning")
        }), Du && (0, du.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Du
        }), (0, du.jsx)(Qu.l, {
          disabled: ku,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (su(!0), !Au.current && Su && Pu && Ku) {
              Au.current = !0, eu(!0), Mu(null);
              try {
                await Xu(Su.base64Jpg, hu, bu ? yu : null)
              } catch (uu) {
                Mu(uu.errorMessageForUser ? Bu(uu.errorMessageForUser, uu.errorMessageTranslationParams) : Bu("thumbnail:failedToUploadImage"))
              } finally {
                Au.current = !1, eu(!1)
              }
            } else Ku || Nu()
          },
          children: Bu(ku ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const wu = 2e3;

    function Zu(uu) {
      let {
        schematicId: Ru,
        ownedThumbnailCount: yu,
        onClose: Ku,
        onThumbnailReady: Qu
      } = uu;
      const {
        t: mu
      } = (0, Ju.E)(), {
        userContext: Nu
      } = (0, Gu.d)(), [Xu, Bu] = (0, Eu.useState)(!1), [Su, pu] = (0, Eu.useState)(!1), [Tu, Wu] = (0, Eu.useState)(!1), ju = (0, Eu.useRef)();
      (0, Eu.useEffect)((() => () => {
        clearTimeout(ju.current)
      }), []);
      const Hu = function(uu, Ru) {
        const yu = [];
        return uu.isLoggedIn() || yu.push(zu.NOT_LOGGED_IN), Ru >= ru.T && yu.push(zu.THUMBNAIL_LIMIT_REACHED), yu
      }(Nu, yu);
      if (Hu.length > 0) {
        const uu = {
          [zu.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [zu.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: ru.T
            }
          }
        };
        return (0, du.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, du.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mu("thumbnail:cannotUploadThumbnail")
          }), Hu.map(((Ru, yu) => {
            const Eu = uu[Ru];
            return (0, du.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, du.jsx)(Vu.c, {
                name: "triangle-exclamation"
              }), (0, du.jsx)("span", {
                children: mu(Eu.key, Eu.params)
              })]
            }, yu)
          }))]
        })
      }
      return (0, du.jsxs)("div", {
        className: xu()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Xu
        }),
        children: [Xu && (0, du.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, du.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, du.jsx)(Vu.c, {
              name: "check"
            }), (0, du.jsx)(su.e, {})]
          }), (0, du.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: mu("thumbnail:thumbnailUploaded")
          })]
        }), (0, du.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: mu("thumbnail:uploadThumbnail")
        }), (0, du.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, du.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, du.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: mu("thumbnail:chooseImage", {
                maxSizeKb: tu
              })
            }), (0, du.jsx)(Fu, {
              schematicId: Ru,
              hasReadUploadPolicy: Su,
              onPolicyValidationError: () => {
                Wu(!0)
              },
              onThumbnailReady: async (uu, Ru, yu) => {
                await Qu(uu, Ru, yu), Bu(!0), ju.current = setTimeout(Ku, wu)
              }
            })]
          }), (0, du.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, du.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: mu("thumbnail:uploadPolicy")
            }), (0, du.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "check"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyFollowGuidelines")
                })]
              }), (0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "check"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyInGameAssets")
                })]
              }), (0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "check"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyLimitText")
                })]
              }), (0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "x"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyCopyrightContent")
                })]
              }), (0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "x"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "x"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyBloxdTags")
                })]
              }), (0, du.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, du.jsx)(Vu.c, {
                  name: "x"
                }), (0, du.jsx)("span", {
                  children: mu("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, du.jsxs)("label", {
              className: xu()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Tu && !Su
              }),
              children: [(0, du.jsx)("input", {
                type: "checkbox",
                checked: Su,
                onChange: uu => {
                  pu(uu.target.checked)
                }
              }), mu("thumbnail:agreeToUploadPolicy")]
            }), Tu && !Su && (0, du.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: mu("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var hu = yu(1176);
    const Pu = {
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

    function iu(uu) {
      var Ru, yu;
      let {
        schematicData: mu,
        updateSchematicData: Xu,
        publishFormEnabled: ru,
        onClose: Bu
      } = uu;
      const {
        t: Su
      } = (0, Ju.E)(), {
        userContext: pu,
        isUserContextUpdating: Tu
      } = (0, Gu.d)(), Wu = (0, Iu.b)(), [ju, Hu] = (0, Eu.useState)([]), [bu, Cu] = (0, Eu.useState)([]), [ku, eu] = (0, Eu.useState)(!0), [Au, Du] = (0, Eu.useState)(null !== (Ru = mu.customThumbnailId) && void 0 !== Ru ? Ru : null), [nu, su] = (0, Eu.useState)(null), tu = (0, Eu.useRef)(null !== (yu = mu.customThumbnailId) && void 0 !== yu ? yu : null), lu = (0, Eu.useRef)(0), gu = (0, Eu.useRef)(null), cu = (0, Eu.useRef)(null), Lu = (0, Eu.useRef)(null), zu = (0, Eu.useRef)(!1);

      function Fu(uu, Ru) {
        Lu.current && (clearTimeout(Lu.current), Lu.current = null), su(uu), null !== uu && Ru && (Lu.current = setTimeout((() => {
          su(null), Lu.current = null
        }), 5e3))
      }(0, Eu.useEffect)((() => () => {
        clearTimeout(cu.current), clearTimeout(Lu.current)
      }), []);
      const wu = (0, Eu.useCallback)((() => {
        eu(!0), Mu.e.getOwnedThumbnails(pu).then((uu => {
          const Ru = [],
            yu = [];
          for (const Eu of uu.thumbnails) Eu.rejectionPolicyId ? Ru.push(Eu) : yu.push(Eu);
          Ru.sort(((uu, Ru) => uu.lastUpdatedAt - Ru.lastUpdatedAt)), yu.sort(((uu, Ru) => {
            const yu = uu.approved ? 1 : 0,
              Eu = (Ru.approved ? 1 : 0) - yu;
            return 0 !== Eu ? Eu : Ru.lastUpdatedAt - uu.lastUpdatedAt
          })), Cu(Ru), Hu(yu)
        })).catch((uu => {
          console.error("Failed to fetch thumbnails:", uu)
        })).finally((() => {
          eu(!1)
        }))
      }), [pu]);
      async function Pu(uu, Ru, yu) {
        return Mu.e.uploadSchematicThumbnail(pu, uu, Ru, yu).then((() => {
          Fu({
            text: Su("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), wu()
        }))
      }

      function iu() {
        lu.current = Date.now(), cu.current = null;
        const uu = gu.current;
        gu.current = null, Fu({
          text: Su("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Mu.e.setSchematicThumbnail(pu, mu.schematicId, uu).then((() => {
          Wu.current && (Fu({
            text: Su("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), tu.current = uu, Xu("customThumbnailId", uu), Xu("customThumbnailBlurhash", void 0), Xu("customThumbnailVariants", void 0))
        })).catch((uu => {
          Wu.current && (Fu({
            text: uu.errorMessageForUser ? Su(uu.errorMessageForUser, uu.errorMessageTranslationParams) : Su("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Du(tu.current))
        }))
      }

      function qu(uu) {
        Du(uu), gu.current = uu;
        const Ru = Date.now() - lu.current;
        Ru >= 1e3 ? iu() : (Fu({
          text: Su("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), cu.current || (cu.current = setTimeout((() => {
          iu()
        }), 1e3 - Ru)))
      }
      return (0, Eu.useEffect)((() => {
        !1 === Tu && wu()
      }), [Tu, wu]), bu.length > 0 ? (0, du.jsx)(Yu, {
        rejectedThumbnails: bu,
        userContext: pu,
        isMountedRef: Wu,
        onAcknowledged: wu
      }) : (0, du.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, du.jsxs)("div", {
          className: "SectionTitle",
          children: [Su("thumbnail:gameThumbnail"), nu && (0, du.jsx)("span", {
            className: xu()("ThumbnailActionMsg", `ThumbnailActionMsg--${nu.type}`),
            children: nu.text
          })]
        }), (0, du.jsx)("div", {
          className: "SectionBody",
          children: (0, du.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, du.jsxs)("div", {
              className: xu()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Au
              }),
              onClick: () => qu(null),
              children: [(0, du.jsx)(Uu.e, {
                game: {
                  schematicId: mu.schematicId,
                  imageBlurhash: mu.imageBlurhash
                }
              }), (0, du.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Su("general:default")
              })]
            }), ku && (0, du.jsx)(Nu.b, {}), ju.map(((uu, Ru) => (0, du.jsxs)("div", {
              className: xu()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Au === uu.id,
                ThumbnailGridItemPending: !uu.approved
              }),
              onClick: () => {
                uu.approved && qu(uu.id)
              },
              children: [uu.approved && (0, du.jsx)("img", {
                src: `${hu.clientSideServerUrls.s3Url}/customThumbnails/${uu.id}.jpg`,
                alt: "Thumbnail"
              }), uu.approved && (0, du.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: uu.name
              }), uu.id && (0, du.jsx)(Qu.F, {
                className: "ThumbnailDeleteButton",
                onClick: Ru => async function(uu, Ru, yu) {
                  uu.stopPropagation();
                  const Eu = await Ku.NotificationProvider.showCustomPopup({
                      body: uu => (0, du.jsx)(ou, {
                        thumbnailId: Ru,
                        thumbnailName: yu,
                        onClose: Ru => {
                          Ru && (zu.current = !0), uu()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Bu
                    }).getResult(),
                    Qu = zu.current;
                  zu.current = !1, Qu && !0 === Eu && (Wu.current && Fu({
                    text: Su("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Mu.e.deleteSchematicThumbnail(pu, Ru).then((() => {
                    Wu.current && (Fu({
                      text: Su("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), tu.current === Ru && qu(null), wu())
                  })).catch((uu => {
                    Wu.current && Fu({
                      text: uu.errorMessageForUser ? Su(uu.errorMessageForUser, uu.errorMessageTranslationParams) : Su("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Ru, uu.id, uu.name),
                children: (0, du.jsx)(Vu.c, {
                  name: "trash-can"
                })
              }), !uu.approved && (0, du.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, du.jsx)(Vu.c, {
                  name: "hourglass-clock"
                })
              }), !uu.approved && (0, du.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [uu.name, (0, du.jsx)("br", {}), Su("thumbnail:pendingApproval")]
              })]
            }, Ru))), (0, du.jsxs)("div", {
              className: xu()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !ru
              }),
              onClick: () => {
                ru && function(uu) {
                  let {
                    schematicId: Ru,
                    ownedThumbnailCount: yu,
                    onThumbnailReady: Eu,
                    onClose: Qu
                  } = uu;
                  Ku.NotificationProvider.showCustomPopup({
                    body: uu => (0, du.jsx)(Zu, {
                      schematicId: Ru,
                      ownedThumbnailCount: yu,
                      onClose: uu,
                      onThumbnailReady: Eu
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Qu,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: mu.schematicId,
                  ownedThumbnailCount: ju.length,
                  onThumbnailReady: Pu,
                  onClose: Bu
                })
              },
              children: [(0, du.jsx)(Vu.c, {
                name: "plus"
              }), (0, du.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Su("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Yu(uu) {
      let {
        rejectedThumbnails: Ru,
        userContext: yu,
        isMountedRef: Ku,
        onAcknowledged: mu
      } = uu;
      const {
        t: Xu
      } = (0, Ju.E)(), [ru, Bu] = (0, Eu.useState)(!1), [xu, Su] = (0, Eu.useState)(!1), pu = function(uu) {
        const Ru = new Map;
        for (const yu of uu) {
          const uu = yu.rejectionPolicyId,
            Eu = Ru.get(uu);
          Eu ? Eu.push(yu) : Ru.set(uu, [yu])
        }
        return Ru
      }(Ru);
      return (0, du.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, du.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, du.jsx)(Vu.c, {
            name: "triangle-exclamation"
          }), " ", Xu("thumbnail:thumbnailsRejected"), " ", (0, du.jsx)(Vu.c, {
            name: "triangle-exclamation"
          })]
        }), (0, du.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Xu("thumbnail:thumbnailsRejectedDescription")
        }), (0, du.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...pu.entries()].map((uu => {
            let [Ru, yu] = uu;
            const Eu = Pu[Ru];
            return (0, du.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, du.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: yu.map((uu => (0, du.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, du.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, du.jsx)(Vu.c, {
                      name: "image-slash"
                    })
                  }), (0, du.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, du.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: uu.name
                    })
                  })]
                }, uu.id)))
              }), (0, du.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Xu("thumbnail:rejectionReason"), " ", Eu ? Xu(Eu.reason) : Ru]
              }), Eu && (0, du.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Eu.tips.map((uu => (0, du.jsx)("li", {
                  children: Xu(uu)
                }, uu)))
              })]
            }, Ru)
          }))
        }), (0, du.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, du.jsx)(Du.b, {
            checked: ru,
            onChange: uu => Bu(uu.target.checked),
            disabled: xu
          }), (0, du.jsx)("span", {
            children: Xu("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, du.jsx)(Qu.l, {
          onClick: async function() {
            Su(!0);
            const uu = await Promise.allSettled(Ru.map((uu => Mu.e.deleteSchematicThumbnail(yu, uu.id))));
            if (!Ku.current) return;
            const Eu = uu.filter((uu => "rejected" === uu.status));
            Eu.length > 0 && console.error("Some rejected thumbnails failed to delete:", Eu), mu()
          },
          disabled: !ru || xu,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: xu ? (0, du.jsx)(Nu.b, {}) : Xu("general:accept")
        })]
      })
    }

    function ou(uu) {
      let {
        thumbnailId: Ru,
        thumbnailName: yu,
        onClose: Eu
      } = uu;
      const {
        t: Ku
      } = (0, Ju.E)();
      return (0, du.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, du.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Ku("thumbnail:deleteThumbnail")
        }), (0, du.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, du.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${hu.clientSideServerUrls.s3Url}/customThumbnails/${Ru}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, du.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: yu
          })]
        }), (0, du.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Ku("thumbnail:deleteThumbnailConfirmation")
        }), (0, du.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, du.jsxs)(Qu.F, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Eu(!0),
            children: [(0, du.jsx)(Vu.c, {
              name: "trash-can"
            }), " ", Ku("general:delete")]
          }), (0, du.jsx)(Qu.f, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Eu(!1),
            children: Ku("general:cancel")
          })]
        })]
      })
    }
    var qu = yu(2950),
      Ou = yu(4771),
      vu = yu(4780),
      au = yu(4823);

    function fu(uu) {
      let {
        schematicData: Ru,
        setTexturePack: yu,
        initializeTexturePack: Ku,
        publishFormEnabled: Qu
      } = uu;
      const {
        t: mu
      } = (0, Ju.E)(), [Nu, Xu] = (0, Eu.useState)(null), [Vu, ru] = (0, Eu.useState)(null), [Bu, Su] = (0, Eu.useState)(!1), pu = (0, Iu.b)(), Tu = Qu && !Bu, Wu = Ru.customTexturePackKey;

      function ju(uu) {
        var Ru;
        Xu(uu.metaData.id), ru(null !== (Ru = uu.metaData.fromFolderName) && void 0 !== Ru ? Ru : null), (uu.metaData.id !== qu.r.CUSTOM || uu.metaData.fromFolderName) && yu(uu)
      }
      return (0, Eu.useEffect)((() => {
        Wu && (Su(!0), (0, Ou.d)(Wu).then((uu => {
          var Ru;
          pu.current && (uu ? (Xu(uu.metaData.id), ru(null !== (Ru = uu.metaData.fromFolderName) && void 0 !== Ru ? Ru : null), Ku(uu)) : console.error(`No texture pack at ${Wu}`))
        })).catch((uu => {
          console.error("Error fetching texture pack: ", uu)
        })).finally((() => {
          Su(!1)
        })))
      }), [Wu, Ku, pu]), (0, du.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, du.jsx)("div", {
          className: "SectionTitle",
          children: mu("customTexturePack:customTexturePack")
        }), (0, du.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, du.jsx)("div", {
            className: xu()("TexturePack", {
              Selected: null === Nu && !Bu,
              Disabled: !Tu
            }),
            onClick: () => {
              Tu && (Xu(null), yu(null), ru(null))
            },
            children: (0, du.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(qu.r).map((uu => (0, du.jsx)(vu.e, {
            id: uu,
            isSelected: uu === Nu,
            setSelected: ju,
            disabled: !Tu
          }, uu)))]
        }), Nu === qu.r.CUSTOM && (0, du.jsx)(au.d, {
          folderName: Vu,
          onTexturePackUpdated: ju,
          disabled: !Tu,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var uR = yu(4841);

    function RR(uu) {
      var Ru;
      let {
        gameCategory: yu,
        setGameCategory: Eu,
        disabled: Ku
      } = uu;
      const mu = null !== (Ru = (0, Su.ib)(yu)) && void 0 !== Ru ? Ru : "other";
      return (0, du.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, du.jsx)(Wu.c, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Ku,
          children: (0, du.jsx)(ju.d, {
            options: Su._.map((uu => ({
              value: uu,
              label: Su.Y[uu]
            }))),
            value: mu,
            onChange: uu => {
              uu.value !== mu && Eu(Su.R[uu.value][0])
            }
          })
        }), (0, du.jsx)(Wu.c, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Ku,
          children: (0, du.jsx)("div", {
            className: "GameCategoryOptions",
            children: Su.R[mu].map((uu => (0, du.jsx)(Qu.P, {
              active: uu === yu,
              onClick: () => {
                Eu(uu)
              },
              children: (0, Su.hb)(uu)
            }, uu)))
          })
        })]
      })
    }

    function yR(uu) {
      let {
        editor: Ru,
        onClose: yu
      } = uu;
      const {
        t: Eu
      } = (0, Ju.E)(), {
        schematicData: Ku,
        updateSchematicData: Qu,
        publishFormEnabled: Nu,
        formEnabled: Xu
      } = Ru;
      return (0, du.jsxs)(du.Fragment, {
        children: [(0, du.jsxs)(bu, {
          icon: "pen-to-square",
          title: Eu("worldBuilder:basicsSection"),
          disabled: !Xu,
          children: [(0, du.jsx)(Cu, {
            label: Eu("general:name"),
            caption: Eu("worldBuilder:schematicNameTagsHint"),
            children: (0, du.jsx)(mu.b, {
              className: "SchematicPageName",
              defaultValue: Ku.name,
              onValueChange: uu => Qu("name", uu),
              placeholderText: Eu("worldBuilder:schematicNamePlaceholder"),
              maxLength: ru.pb
            })
          }), (0, du.jsx)(Cu, {
            label: Eu("general:description"),
            children: (0, du.jsx)(mu.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Ku.description,
              onValueChange: uu => Qu("description", uu),
              placeholderText: Eu("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: ru.nb
            })
          }), (0, du.jsx)(RR, {
            gameCategory: Ku.gameCategory,
            setGameCategory: uu => Qu("gameCategory", uu),
            disabled: !Nu
          }), !0 === Ku.gamePublished && (0, du.jsx)(iu, {
            schematicData: Ku,
            updateSchematicData: Qu,
            publishFormEnabled: Nu,
            onClose: function() {
              null === yu || void 0 === yu || yu()
            }
          })]
        }), (0, du.jsx)(eu, {
          schematicData: Ku,
          updateSchematicData: Qu,
          publishFormEnabled: Nu,
          formEnabled: Xu
        }), !0 === Ku.gamePublished && (0, du.jsx)(bu, {
          icon: "palette",
          title: Eu("worldBuilder:texturePackSection"),
          disabled: !Xu,
          children: (0, du.jsx)(fu, {
            schematicData: Ku,
            setTexturePack: Ru.setTexturePack,
            initializeTexturePack: Ru.initializeTexturePack,
            publishFormEnabled: Nu
          })
        })]
      })
    }

    function ER(uu) {
      let {
        editor: Ru
      } = uu;
      const {
        t: yu
      } = (0, Ju.E)(), {
        schematicData: Eu,
        formEnabled: Ku,
        hasUnsavedChanges: mu
      } = Ru, ru = Ku && mu;
      return (0, du.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Ku && mu && (0, du.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, du.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), yu("worldBuilder:unsavedChanges")]
        }), (0, du.jsx)(Xu.i, {
          tooltipInner: (0, du.jsx)("div", {
            className: "SaveButtonTooltip",
            children: yu(Ku && !mu ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, du.jsxs)(Qu.e, {
            className: "SaveChangesButton",
            onClick: () => Ru.saveSchematic(Eu.gamePublished),
            disabled: !ru,
            children: [(0, du.jsxs)("span", {
              className: Ku ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, du.jsx)(Vu.c, {
                name: "wrench"
              }), " ", yu("worldBuilder:saveChanges")]
            }), !Ku && (0, du.jsx)(Nu.b, {})]
          })
        })]
      })
    }

    function KR(uu) {
      let {
        schematic: Ru,
        onSchematicUpdate: yu,
        onClose: Ku,
        inSourceWorld: mu
      } = uu;
      const {
        t: Nu
      } = (0, Ju.E)();

      function Xu() {
        null === Ku || void 0 === Ku || Ku()
      }
      const Vu = (0, uR.b)(Ru, {
        onNavigateAway: Xu,
        inSourceWorld: mu
      });
      return (0, Eu.useEffect)((() => {
        null === yu || void 0 === yu || yu(Vu.schematicData)
      }), [Vu.schematicData, yu]), (0, du.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, du.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, du.jsx)(Qu.b, {
            onClick: Xu,
            children: Nu("worldBuilder:back")
          }), (0, du.jsx)(bu, {
            icon: "rocket-launch",
            title: Nu("worldBuilder:actionsSection"),
            disabled: !Vu.formEnabled,
            children: (0, du.jsx)(Au.e, {
              editor: Vu
            })
          }), (0, du.jsx)(yR, {
            editor: Vu,
            onClose: Xu
          })]
        }), (0, du.jsx)(ER, {
          editor: Vu
        })]
      })
    }

    function QR(uu) {
      let {
        schematic: Ru,
        onSchematicUpdate: yu,
        onClose: Eu,
        inSourceWorld: Qu
      } = uu;
      Ku.NotificationProvider.showCustomPopup({
        body: uu => (0, du.jsx)(KR, {
          schematic: Ru,
          onSchematicUpdate: yu,
          onClose: uu,
          inSourceWorld: Qu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Eu,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4737: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ru
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1170),
      mu = yu(1043),
      Ju = yu(1408),
      Nu = yu(1325),
      Xu = yu(1300),
      Vu = yu(1079);

    function ru(uu) {
      let {
        editor: Ru,
        className: yu
      } = uu;
      const {
        t: Eu
      } = (0, Qu.E)(), {
        schematicData: ru,
        formEnabled: Bu,
        publishFormEnabled: xu
      } = Ru, Su = !Bu || !xu;
      return (0, Vu.jsxs)("div", {
        className: Ku()("PublishButtonContainer", yu),
        children: [Ru.canEditSourceWorld && (0, Vu.jsxs)(Ju.e, {
          onClick: Ru.editSourceWorld,
          disabled: Su,
          children: [(0, Vu.jsx)(mu.c, {
            name: "edit"
          }), " ", Eu("worldBuilder:editSourceWorld")]
        }), !ru.gamePublished && (0, Vu.jsx)(Nu.i, {
          tooltipInner: (0, Vu.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Eu("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Vu.jsxs)(Ju.l, {
            onClick: () => Ru.saveSchematic(!0),
            disabled: Su,
            children: [(0, Vu.jsx)(mu.c, {
              name: "rocket-launch"
            }), " ", Eu("worldBuilder:publishAsGame"), " ", (0, Vu.jsx)(mu.c, {
              name: "info-circle"
            })]
          })
        }), !0 === ru.gamePublished && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)(Nu.i, {
            tooltipInner: (0, Vu.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Eu("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Vu.jsxs)(Ju.F, {
              onClick: Ru.unpublishSchematic,
              disabled: Su,
              children: [(0, Vu.jsx)(mu.c, {
                name: "rocket-launch"
              }), " ", Eu("worldBuilder:unpublishAsGame"), " ", (0, Vu.jsx)(mu.c, {
                name: "info-circle"
              })]
            })
          }), (0, Vu.jsxs)(Ju.e, {
            onClick: Ru.playGame,
            disabled: Su,
            children: [(0, Vu.jsx)(mu.c, {
              name: "joystick"
            }), " ", Eu("general:playGame")]
          })]
        }), !Bu && (0, Vu.jsx)(Xu.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4771: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(1176);
    async function Ku(uu) {
      const Ru = await fetch(`${Eu.clientSideServerUrls.s3Url}/${uu}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Ru.status || 403 === Ru.status) return null;
      if (!Ru.ok) throw new Error(`Failed to download the texture pack (${Ru.status})`);
      return await Ru.json()
    }
  },
  4841: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Tu
    });
    var Eu = yu(64),
      Ku = yu(1289),
      Qu = yu(1001),
      mu = yu(174),
      Ju = yu(1499),
      Nu = yu(27),
      Xu = yu(1855),
      Vu = yu(1447),
      ru = yu(4362),
      Bu = yu(1311),
      xu = yu(1107),
      Su = yu(1467);

    function pu(uu, Ru) {
      return {
        schematicId: uu.schematicId,
        name: uu.name,
        description: uu.description,
        gamePublished: Ru,
        gameCategory: uu.gameCategory,
        defaultGamemode: uu.defaultGamemode,
        voidDeathHeight: uu.voidDeathHeight,
        disableKeepInventory: uu.disableKeepInventory,
        disableTpRequests: uu.disableTpRequests,
        disableLobbySpawn: uu.disableLobbySpawn,
        disableMobs: uu.disableMobs,
        disableSpawnProtection: uu.disableSpawnProtection,
        disableFallDamage: uu.disableFallDamage,
        worldBorder: uu.worldBorder,
        hideLobbyCode: uu.hideLobbyCode,
        enableSmpMarketplace: uu.enableSmpMarketplace,
        enableSurvivalGuns: uu.enableSurvivalGuns,
        enableSpawnReset: uu.enableSpawnReset,
        enableDayNight: uu.enableDayNight,
        persistWorld: uu.persistWorld,
        persistInventory: uu.persistInventory
      }
    }

    function Tu(uu) {
      let {
        onNavigateAway: Ru,
        inSourceWorld: yu = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Tu
      } = (0, xu.d)(), Wu = (0, Su.useNavigatePreserveSearch)(), [ju, Hu] = (0, Eu.useState)({
        ...uu
      }), [du, bu] = (0, Eu.useState)("Enter"), [Cu, ku] = (0, Eu.useState)(void 0), eu = (0, Eu.useRef)(pu(uu, uu.gamePublished)), Au = (0, Eu.useRef)(void 0), Du = "Enter" === du, Mu = Tu.playerHasRank("developer") || Tu.playerHasRank("admin") || "Enter" === du && !1 !== ju.schematicContainsSpawnBlock, Iu = void 0 !== Cu && Cu !== Au.current || JSON.stringify(pu(ju, ju.gamePublished)) !== JSON.stringify(eu.current);

      function Gu(uu, Ru) {
        Hu((yu => ({
          ...yu,
          [uu]: Ru
        })))
      }
      const Uu = (0, Eu.useCallback)((uu => {
        Au.current = uu, ku(uu)
      }), []);

      function nu(uu) {
        bu("Loading");
        const Ru = pu(ju, uu),
          yu = Cu !== Au.current ? Cu : void 0;
        Vu.e.updateSchematic(Tu, Ru, yu).then((yu => {
          let {
            customTexturePackKey: Eu
          } = yu;
          bu("Success"), Gu("customTexturePackKey", Eu), eu.current = Ru, Au.current = void 0, ku(void 0), setTimeout((() => {
            Gu("gamePublished", uu), bu("Enter")
          }), 1e3)
        })).catch((uu => {
          var Ru;
          (console.error("Failed to save schematic:", uu), bu("Error"), uu instanceof mu.e && uu.errorMessageForUser) && Bu.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: uu.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Ru = uu.errorMessageTranslationParams) && void 0 !== Ru ? Ru : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            bu("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: ju,
        updateSchematicData: Gu,
        setTexturePack: ku,
        initializeTexturePack: Uu,
        updateState: du,
        formEnabled: Du,
        publishFormEnabled: Mu,
        hasUnsavedChanges: Iu,
        canEditSourceWorld: !yu,
        saveSchematic: nu,
        unpublishSchematic: function() {
          Bu.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((uu => {
            !0 === uu && nu(!1)
          }))
        },
        editSourceWorld: function() {
          bu("Loading"), ru.e.getSourceWorld(ju.schematicId).then((uu => {
            Xu.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Nu.i)("other"), Wu((0, Ku.b)("classic", uu)), null === Ru || void 0 === Ru || Ru()
          })).catch((uu => {
            console.error("Failed to get source world:", uu), bu("Error"), setTimeout((() => {
              bu("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Xu.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Wu((0, Ju.y)((0, Qu.t)(ju.schematicId), ju)), null === Ru || void 0 === Ru || Ru()
        }
      }
    }
  },
  4725: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);