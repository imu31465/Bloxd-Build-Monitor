export const id = 107;
export const ids = [107];
export const modules = {
  5102: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => bu,
      e: () => Cu,
      h: () => cu
    });
    ju(5105);
    var su = ju(1244),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1419),
      lu = (ju(58), ju(4528)),
      qu = ju(1116),
      fu = ju(1154);

    function Cu(uu) {
      let {
        children: Eu,
        label: ju,
        className: Uu,
        circleInfoText: lu,
        disabled: Cu,
        onLabelClick: bu
      } = uu;
      const {
        t: cu
      } = (0, su.A)(), Nu = (0, fu.jsxs)("div", {
        className: Zu()("Label", {
          ClickableLabel: void 0 !== bu
        }),
        onClick: bu,
        children: [cu(ju), lu && (0, fu.jsx)(qu.e, {
          name: "circle-info"
        })]
      });
      return (0, fu.jsxs)("div", {
        className: Zu()("LabeledInput", {
          [Uu]: Uu,
          DisabledLabelInput: Cu
        }),
        children: [lu && (0, fu.jsx)(Xu.e, {
          tooltipInner: (0, fu.jsx)("div", {
            className: "LabeledInputTooltip",
            children: cu(lu)
          }),
          children: Nu
        }), !lu && Nu, Eu]
      })
    }

    function bu(uu) {
      let {
        checked: Eu,
        setChecked: ju
      } = uu;
      return (0, fu.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: uu => {
          ju(!Eu)
        },
        children: (0, fu.jsx)(lu.d, {
          checked: Eu,
          onChange: uu => {
            ju(uu.target.checked)
          },
          disabled: !1
        })
      })
    }

    function cu(uu) {
      let {
        checked: Eu,
        setChecked: ju,
        disabled: su
      } = uu;
      return (0, fu.jsx)("div", {
        className: Zu()("SwitchContainer", {
          SwitchContainerDisabled: su
        }),
        onClick: () => {
          su || ju(!Eu)
        },
        children: (0, fu.jsx)(lu.d, {
          className: "SwitchCheckbox",
          checked: Eu,
          onChange: uu => {
            ju(uu.target.checked)
          },
          disabled: !!su
        })
      })
    }
  },
  5110: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(4809),
      Xu = ju(1244),
      lu = ju(1154);
    const qu = [...Zu.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function fu(uu) {
      const {
        disabled: Eu,
        hideWrapper: ju
      } = uu, {
        t: su
      } = (0, Xu.A)(), fu = uu.advancedMode ? qu.map((Eu => [Eu, uu.callbacks[Eu]])) : Zu.l.map((Eu => [Eu, uu.callbacks[Eu]])), bu = (0, lu.jsx)("div", {
        className: Uu()("PluginsGrid", {
          SectionBody: !ju
        }),
        children: fu.map((uu => {
          let [ju, su] = uu;
          return (0, lu.jsx)(Cu, {
            plugin: ju,
            callbacks: su,
            disabled: Eu
          }, ju)
        }))
      });
      return ju ? bu : (0, lu.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, lu.jsx)("div", {
          className: "SectionTitle",
          children: su("worldBuilder:pluginsSection")
        }), bu]
      })
    }

    function Cu(uu) {
      let {
        plugin: Eu,
        callbacks: {
          isEnabled: ju,
          Wk: su
        },
        disabled: Zu
      } = uu;
      const {
        t: qu
      } = (0, Xu.A)(), fu = ju();
      return (0, lu.jsxs)("div", {
        className: Uu()("PluginCard", {
          PluginCardEnabled: fu,
          PluginCardDisabledForm: Zu
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Zu || void 0,
        onClick: () => {
          Zu || su(!fu)
        },
        children: [(0, lu.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, lu.jsx)("img", {
            src: `/textures/games/classic/customGames/${Eu}.png`,
            alt: Eu
          })
        }), (0, lu.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, lu.jsx)("div", {
            className: "PluginCardTitle",
            children: qu(bu[Eu])
          }), (0, lu.jsx)("div", {
            className: "PluginCardDescription",
            children: qu(cu[Eu])
          })]
        }), (0, lu.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qu(fu ? "general:on" : "general:off")
        })]
      })
    }
    const bu = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      cu = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5099: (uu, Eu, ju) => {
    ju.d(Eu, {
      h: () => UE,
      c: () => sE,
      f: () => jE,
      i: () => ZE
    });
    var su = ju(58),
      Uu = ju(1405),
      Zu = ju(1506),
      Xu = ju(1723),
      lu = ju(1244),
      qu = ju(1393),
      fu = ju(1419),
      Cu = ju(1116),
      bu = ju(1278),
      cu = ju(1105),
      Nu = ju.n(cu),
      Ou = ju(337),
      Yu = ju(4809),
      hu = ju(1298),
      Du = ju(5102),
      gu = ju(3309),
      Mu = ju(5110),
      eu = ju(1154);

    function Gu(uu) {
      let {
        icon: Eu,
        title: ju,
        disabled: su,
        children: Uu
      } = uu;
      return (0, eu.jsxs)("div", {
        className: Nu()("ManageCard", {
          ManageCardDisabled: su
        }),
        children: [(0, eu.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, eu.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, eu.jsx)(Cu.e, {
              name: Eu
            })
          }), (0, eu.jsx)("div", {
            children: (0, eu.jsx)("h2", {
              className: "ManageCardTitle",
              children: ju
            })
          })]
        }), (0, eu.jsxs)("div", {
          className: "ManageCardBody",
          children: [Uu, su && (0, eu.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function pu(uu) {
      let {
        label: Eu,
        caption: ju,
        children: su
      } = uu;
      return (0, eu.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, eu.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Eu
        }), su, ju && (0, eu.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: ju
        })]
      })
    }

    function wu(uu) {
      let {
        label: Eu,
        caption: ju,
        disabled: su,
        children: Uu
      } = uu;
      return (0, eu.jsxs)("div", {
        className: Nu()("ManageField", {
          ManageFieldDisabled: su
        }),
        children: [(0, eu.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, eu.jsx)("div", {
            className: "ManageFieldLabel",
            children: Eu
          }), (0, eu.jsx)("div", {
            className: "ManageFieldCaption",
            children: ju
          })]
        }), (0, eu.jsx)("div", {
          className: "ManageFieldControl",
          children: Uu
        })]
      })
    }

    function Ju(uu) {
      var Eu, ju;
      let {
        schematicData: su,
        updateSchematicData: Uu,
        publishFormEnabled: Zu,
        formEnabled: Xu
      } = uu;
      const {
        t: qu
      } = (0, lu.A)(), fu = !Zu, Cu = {
        tpRequests: {
          isEnabled: () => !su.disableTpRequests,
          Wk: uu => Uu("disableTpRequests", !uu)
        },
        spawnProtection: {
          isEnabled: () => !su.disableSpawnProtection,
          Wk: uu => Uu("disableSpawnProtection", !uu)
        },
        spawnReset: {
          isEnabled: () => !!su.enableSpawnReset,
          Wk: uu => Uu("enableSpawnReset", uu)
        },
        smpMarketplace: {
          isEnabled: () => !!su.enableSmpMarketplace,
          Wk: uu => Uu("enableSmpMarketplace", uu)
        },
        survivalGuns: {
          isEnabled: () => !!su.enableSurvivalGuns,
          Wk: uu => Uu("enableSurvivalGuns", uu)
        },
        fallDamage: {
          isEnabled: () => !su.disableFallDamage,
          Wk: uu => Uu("disableFallDamage", !uu)
        },
        dayNight: {
          isEnabled: () => !!su.enableDayNight,
          Wk: uu => Uu("enableDayNight", uu)
        }
      };
      return (0, eu.jsxs)(eu.Fragment, {
        children: [!1 === su.schematicContainsSpawnBlock && (0, eu.jsx)("div", {
          className: "ManageWarningBanner",
          children: qu("worldBuilder:mustContainSpawnBlock")
        }), (0, eu.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, eu.jsxs)(Gu, {
            icon: "globe",
            title: qu("worldBuilder:worldRulesSection"),
            disabled: !Xu,
            children: [(0, eu.jsx)(wu, {
              label: qu("classic:defaultGamemode"),
              caption: qu("classic:defaultGamemodeDescription"),
              disabled: fu,
              children: (0, eu.jsx)(gu.c, {
                controlClassName: "ManageDropdown",
                options: Yu.G.map((uu => ({
                  value: uu,
                  label: Ou.r[uu]
                }))),
                value: su.defaultGamemode,
                onChange: uu => Uu("defaultGamemode", uu.value)
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:voidDeathHeight"),
              caption: qu("classic:voidDeathHeightDescription"),
              disabled: fu,
              children: (0, eu.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, eu.jsx)("input", {
                  type: "number",
                  max: hu.D,
                  value: null !== (Eu = su.voidDeathHeight) && void 0 !== Eu ? Eu : "",
                  onChange: uu => {
                    const Eu = parseInt(uu.target.value);
                    Uu("voidDeathHeight", Eu)
                  }
                }), (0, eu.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qu("worldBuilder:blocksUnit")
                })]
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:worldBorder"),
              caption: qu("classic:worldBorderDescription"),
              disabled: fu,
              children: (0, eu.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, eu.jsx)("input", {
                  type: "number",
                  min: hu.I,
                  max: hu.E,
                  placeholder: qu("worldBuilder:noWorldBorderLimit"),
                  value: null !== (ju = su.worldBorder) && void 0 !== ju ? ju : "",
                  onChange: uu => {
                    const Eu = parseInt(uu.target.value);
                    Uu("worldBorder", isNaN(Eu) ? null : Eu)
                  }
                }), (0, eu.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qu("worldBuilder:blocksUnit")
                })]
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:disableMobs"),
              caption: qu("classic:disableMobsDescription"),
              disabled: fu,
              children: (0, eu.jsx)(Du.h, {
                checked: su.disableMobs,
                setChecked: uu => Uu("disableMobs", uu),
                disabled: fu
              })
            })]
          }), (0, eu.jsxs)(Gu, {
            icon: "user-group",
            title: qu("worldBuilder:playerAndLobbySection"),
            disabled: !Xu,
            children: [(0, eu.jsx)(wu, {
              label: qu("classic:disableKeepInventory"),
              caption: qu("classic:disableKeepInventoryDescription"),
              disabled: fu,
              children: (0, eu.jsx)(Du.h, {
                checked: su.disableKeepInventory,
                setChecked: uu => Uu("disableKeepInventory", uu),
                disabled: fu
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:persistInventory"),
              caption: qu("classic:persistInventoryDescription"),
              disabled: fu,
              children: (0, eu.jsx)(gu.c, {
                controlClassName: "ManageDropdown",
                options: Yu.n.map((uu => ({
                  value: uu,
                  label: Ou.h[uu]
                }))),
                value: su.persistInventory,
                onChange: uu => Uu("persistInventory", uu.value)
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:persistWorld"),
              caption: qu("classic:persistWorldDescription"),
              disabled: fu,
              children: (0, eu.jsx)(Du.h, {
                checked: su.persistWorld,
                setChecked: uu => Uu("persistWorld", uu),
                disabled: fu
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:disableLobbySpawn"),
              caption: qu("classic:disableLobbySpawnDescription"),
              disabled: fu,
              children: (0, eu.jsx)(Du.h, {
                checked: su.disableLobbySpawn,
                setChecked: uu => Uu("disableLobbySpawn", uu),
                disabled: fu
              })
            }), (0, eu.jsx)(wu, {
              label: qu("classic:hideLobbyCode"),
              caption: qu("classic:hideLobbyCodeDescription"),
              disabled: fu,
              children: (0, eu.jsx)(Du.h, {
                checked: su.hideLobbyCode,
                setChecked: uu => Uu("hideLobbyCode", uu),
                disabled: fu
              })
            })]
          })]
        }), (0, eu.jsx)(Gu, {
          icon: "layer-group",
          title: qu("worldBuilder:pluginsSection"),
          disabled: !Xu,
          children: (0, eu.jsx)(Mu.d, {
            callbacks: Cu,
            disabled: fu,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var du = ju(5115),
      au = ju(4528),
      Pu = ju(1559),
      ou = ju(3678),
      ku = ju(1178),
      mu = ju(5077),
      vu = ju(5120),
      Ku = ju(1510);
    const Vu = 50,
      ru = .3;
    async function Qu(uu) {
      const Eu = await
      function(uu) {
        return new Promise(((Eu, ju) => {
          const su = new FileReader;
          su.onload = () => Eu(su.result), su.onerror = ju, su.readAsDataURL(uu)
        }))
      }(uu), ju = await
      function(uu) {
        return new Promise(((Eu, ju) => {
          const su = new Image;
          su.onload = () => Eu(su), su.onerror = () => ju(new Error("Failed to load image")), su.src = uu
        }))
      }(Eu);
      if (ju.naturalHeight > ju.naturalWidth) throw new iu;
      const su = 1024 * Vu,
        {
          dataUrl: Uu,
          finalQuality: Zu
        } = function(uu, Eu) {
          const ju = document.createElement("canvas");
          ju.width = uu.naturalWidth, ju.height = uu.naturalHeight, ju.getContext("2d").drawImage(uu, 0, 0);
          let su = .92,
            Uu = ju.toDataURL("image/jpeg", su);
          for (; .75 * Uu.length > Eu && su > .05;) su -= .05, Uu = ju.toDataURL("image/jpeg", su);
          return {
            dataUrl: Uu,
            finalQuality: su
          }
        }(ju, su);
      if (Math.ceil(.75 * Uu.length) > su) throw new Wu;
      return {
        base64Jpg: Uu,
        heavilyCompressed: Zu < ru
      }
    }
    class iu extends Error {}
    class Wu extends Error {}
    var Su = function(uu) {
      return uu[uu.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", uu[uu.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", uu
    }(Su || {});

    function Iu(uu) {
      var Eu;
      let {
        schematicId: ju,
        hasReadUploadPolicy: Uu,
        onPolicyValidationError: qu,
        onThumbnailReady: fu
      } = uu;
      const {
        t: cu
      } = (0, lu.A)(), [Ou, Yu] = (0, su.useState)(null), [hu, Du] = (0, su.useState)(""), [gu, Mu] = (0, su.useState)(""), [Gu, pu] = (0, su.useState)(!0), [wu, Ju] = (0, su.useState)(!1), du = (0, su.useRef)(!1), [au, Pu] = (0, su.useState)(null), [ou, ku] = (0, su.useState)(!1), [mu, Ku] = (0, su.useState)(!1), Vu = (0, su.useRef)(0), {
        getRootProps: ru,
        getInputProps: Su,
        isDragActive: Iu
      } = (0, vu.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async uu => {
          if (0 === uu.length) return;
          const Eu = uu[0],
            ju = ++Vu.current;
          Pu(null), ku(!1), Yu(null), Du(Eu.name);
          try {
            const uu = await Qu(Eu);
            if (ju !== Vu.current) return;
            Yu(uu), ku(uu.heavilyCompressed)
          } catch (su) {
            if (ju !== Vu.current) return;
            Pu(cu(su instanceof iu ? "thumbnail:portraitImagesNotAllowed" : su instanceof Wu ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Fu = hu.length <= 30 ? hu : `${hu.slice(0,27)}...`, Bu = null !== (Eu = null === Ou || void 0 === Ou ? void 0 : Ou.base64Jpg) && void 0 !== Eu ? Eu : null, Lu = gu.trim(), tu = Lu.length >= bu.l && Lu.length <= bu.j, xu = mu && !Ou && !au, Tu = mu && !tu;
      return (0, eu.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, eu.jsxs)("div", {
          ...ru({
            className: Nu()("ThumbnailUploadDropzone", {
              ActiveDrag: Iu,
              ValidationError: xu
            })
          }),
          children: [(0, eu.jsx)("input", {
            ...Su()
          }), !Iu && Bu ? (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, eu.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, eu.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, eu.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, eu.jsx)("img", {
                    src: Bu,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, eu.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, eu.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, eu.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, eu.jsx)("img", {
                    src: Bu,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, eu.jsxs)("div", {
              children: [(0, eu.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Fu
              }), (0, eu.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: cu("thumbnail:preview")
              })]
            })]
          }) : (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, eu.jsx)(Cu.e, {
                name: "image"
              })
            }), (0, eu.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: cu("thumbnail:dragImageHere")
            })]
          })]
        }), xu && (0, eu.jsx)("div", {
          className: "ThumbnailUploadError",
          children: cu("thumbnail:imageRequired")
        }), (0, eu.jsx)(Xu.d, {
          className: Nu()("ThumbnailUploadNameInput", {
            ValidationError: Tu
          }),
          placeholderText: cu("thumbnail:thumbnailName"),
          defaultValue: gu,
          onValueChange: uu => {
            Mu(uu)
          },
          maxLength: bu.j
        }), Tu && (0, eu.jsx)("div", {
          className: "ThumbnailUploadError",
          children: cu("thumbnail:nameRequired", {
            min: bu.l,
            max: bu.j
          })
        }), (0, eu.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, eu.jsx)("input", {
            type: "checkbox",
            checked: Gu,
            onChange: uu => {
              pu(uu.target.checked)
            }
          }), cu("thumbnail:setAsThumbnailOnceApproved")]
        }), ou && (0, eu.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: cu("thumbnail:heavyCompressionWarning")
        }), au && (0, eu.jsx)("div", {
          className: "ThumbnailUploadError",
          children: au
        }), (0, eu.jsx)(Zu.p, {
          disabled: wu,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Ku(!0), !du.current && Ou && tu && Uu) {
              du.current = !0, Ju(!0), Pu(null);
              try {
                await fu(Ou.base64Jpg, Lu, Gu ? ju : null)
              } catch (uu) {
                Pu(uu.errorMessageForUser ? cu(uu.errorMessageForUser, uu.errorMessageTranslationParams) : cu("thumbnail:failedToUploadImage"))
              } finally {
                du.current = !1, Ju(!1)
              }
            } else Uu || qu()
          },
          children: cu(wu ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Fu = 2e3;

    function Bu(uu) {
      let {
        schematicId: Eu,
        ownedThumbnailCount: ju,
        onClose: Uu,
        onThumbnailReady: Zu
      } = uu;
      const {
        t: Xu
      } = (0, lu.A)(), {
        userContext: qu
      } = (0, ku.c)(), [fu, cu] = (0, su.useState)(!1), [Ou, Yu] = (0, su.useState)(!1), [hu, Du] = (0, su.useState)(!1), gu = (0, su.useRef)();
      (0, su.useEffect)((() => () => {
        clearTimeout(gu.current)
      }), []);
      const Mu = function(uu, Eu) {
        const ju = [];
        return uu.isLoggedIn() || ju.push(Su.NOT_LOGGED_IN), Eu >= bu.V && ju.push(Su.THUMBNAIL_LIMIT_REACHED), ju
      }(qu, ju);
      if (Mu.length > 0) {
        const uu = {
          [Su.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Su.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: bu.V
            }
          }
        };
        return (0, eu.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, eu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xu("thumbnail:cannotUploadThumbnail")
          }), Mu.map(((Eu, ju) => {
            const su = uu[Eu];
            return (0, eu.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, eu.jsx)(Cu.e, {
                name: "triangle-exclamation"
              }), (0, eu.jsx)("span", {
                children: Xu(su.key, su.params)
              })]
            }, ju)
          }))]
        })
      }
      return (0, eu.jsxs)("div", {
        className: Nu()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: fu
        }),
        children: [fu && (0, eu.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, eu.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, eu.jsx)(Cu.e, {
              name: "check"
            }), (0, eu.jsx)(Ku.c, {})]
          }), (0, eu.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Xu("thumbnail:thumbnailUploaded")
          })]
        }), (0, eu.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Xu("thumbnail:uploadThumbnail")
        }), (0, eu.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, eu.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, eu.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Xu("thumbnail:chooseImage", {
                maxSizeKb: Vu
              })
            }), (0, eu.jsx)(Iu, {
              schematicId: Eu,
              hasReadUploadPolicy: Ou,
              onPolicyValidationError: () => {
                Du(!0)
              },
              onThumbnailReady: async (uu, Eu, ju) => {
                await Zu(uu, Eu, ju), cu(!0), gu.current = setTimeout(Uu, Fu)
              }
            })]
          }), (0, eu.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, eu.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Xu("thumbnail:uploadPolicy")
            }), (0, eu.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "check"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyFollowGuidelines")
                })]
              }), (0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "check"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyInGameAssets")
                })]
              }), (0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "check"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyLimitText")
                })]
              }), (0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "x"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyCopyrightContent")
                })]
              }), (0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "x"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "x"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyBloxdTags")
                })]
              }), (0, eu.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, eu.jsx)(Cu.e, {
                  name: "x"
                }), (0, eu.jsx)("span", {
                  children: Xu("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, eu.jsxs)("label", {
              className: Nu()("ThumbnailUploadCheckbox Policy", {
                ValidationError: hu && !Ou
              }),
              children: [(0, eu.jsx)("input", {
                type: "checkbox",
                checked: Ou,
                onChange: uu => {
                  Yu(uu.target.checked)
                }
              }), Xu("thumbnail:agreeToUploadPolicy")]
            }), hu && !Ou && (0, eu.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Xu("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Lu = ju(1255);
    const tu = {
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

    function xu(uu) {
      var Eu, ju;
      let {
        schematicData: Xu,
        updateSchematicData: fu,
        publishFormEnabled: bu,
        onClose: cu
      } = uu;
      const {
        t: Ou
      } = (0, lu.A)(), {
        userContext: Yu,
        isUserContextUpdating: hu
      } = (0, ku.c)(), Du = (0, ou.c)(), [gu, Mu] = (0, su.useState)([]), [Gu, pu] = (0, su.useState)([]), [wu, Ju] = (0, su.useState)(!0), [du, au] = (0, su.useState)(null !== (Eu = Xu.customThumbnailId) && void 0 !== Eu ? Eu : null), [vu, Ku] = (0, su.useState)(null), Vu = (0, su.useRef)(null !== (ju = Xu.customThumbnailId) && void 0 !== ju ? ju : null), ru = (0, su.useRef)(0), Qu = (0, su.useRef)(null), iu = (0, su.useRef)(null), Wu = (0, su.useRef)(null), Su = (0, su.useRef)(!1);

      function Iu(uu, Eu) {
        Wu.current && (clearTimeout(Wu.current), Wu.current = null), Ku(uu), null !== uu && Eu && (Wu.current = setTimeout((() => {
          Ku(null), Wu.current = null
        }), 5e3))
      }(0, su.useEffect)((() => () => {
        clearTimeout(iu.current), clearTimeout(Wu.current)
      }), []);
      const Fu = (0, su.useCallback)((() => {
        Ju(!0), Pu.b.getOwnedThumbnails(Yu).then((uu => {
          const Eu = [],
            ju = [];
          for (const su of uu.thumbnails) su.rejectionPolicyId ? Eu.push(su) : ju.push(su);
          Eu.sort(((uu, Eu) => uu.lastUpdatedAt - Eu.lastUpdatedAt)), ju.sort(((uu, Eu) => {
            const ju = uu.approved ? 1 : 0,
              su = (Eu.approved ? 1 : 0) - ju;
            return 0 !== su ? su : Eu.lastUpdatedAt - uu.lastUpdatedAt
          })), pu(Eu), Mu(ju)
        })).catch((uu => {
          console.error("Failed to fetch thumbnails:", uu)
        })).finally((() => {
          Ju(!1)
        }))
      }), [Yu]);
      async function tu(uu, Eu, ju) {
        return Pu.b.uploadSchematicThumbnail(Yu, uu, Eu, ju).then((() => {
          Iu({
            text: Ou("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Fu()
        }))
      }

      function xu() {
        ru.current = Date.now(), iu.current = null;
        const uu = Qu.current;
        Qu.current = null, Iu({
          text: Ou("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Pu.b.setSchematicThumbnail(Yu, Xu.schematicId, uu).then((() => {
          Du.current && (Iu({
            text: Ou("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Vu.current = uu, fu("customThumbnailId", uu), fu("customThumbnailBlurhash", void 0), fu("customThumbnailVariants", void 0))
        })).catch((uu => {
          Du.current && (Iu({
            text: uu.errorMessageForUser ? Ou(uu.errorMessageForUser, uu.errorMessageTranslationParams) : Ou("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), au(Vu.current))
        }))
      }

      function Au(uu) {
        au(uu), Qu.current = uu;
        const Eu = Date.now() - ru.current;
        Eu >= 1e3 ? xu() : (Iu({
          text: Ou("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), iu.current || (iu.current = setTimeout((() => {
          xu()
        }), 1e3 - Eu)))
      }
      return (0, su.useEffect)((() => {
        !1 === hu && Fu()
      }), [hu, Fu]), Gu.length > 0 ? (0, eu.jsx)(Tu, {
        rejectedThumbnails: Gu,
        userContext: Yu,
        isMountedRef: Du,
        onAcknowledged: Fu
      }) : (0, eu.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, eu.jsxs)("div", {
          className: "SectionTitle",
          children: [Ou("thumbnail:gameThumbnail"), vu && (0, eu.jsx)("span", {
            className: Nu()("ThumbnailActionMsg", `ThumbnailActionMsg--${vu.type}`),
            children: vu.text
          })]
        }), (0, eu.jsx)("div", {
          className: "SectionBody",
          children: (0, eu.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, eu.jsxs)("div", {
              className: Nu()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === du
              }),
              onClick: () => Au(null),
              children: [(0, eu.jsx)(mu.b, {
                game: {
                  schematicId: Xu.schematicId,
                  imageBlurhash: Xu.imageBlurhash
                }
              }), (0, eu.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Ou("general:default")
              })]
            }), wu && (0, eu.jsx)(qu.b, {}), gu.map(((uu, Eu) => (0, eu.jsxs)("div", {
              className: Nu()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: du === uu.id,
                ThumbnailGridItemPending: !uu.approved
              }),
              onClick: () => {
                uu.approved && Au(uu.id)
              },
              children: [uu.approved && (0, eu.jsx)("img", {
                src: `${Lu.clientSideServerUrls.s3Url}/customThumbnails/${uu.id}.jpg`,
                alt: "Thumbnail"
              }), uu.approved && (0, eu.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: uu.name
              }), uu.id && (0, eu.jsx)(Zu.R, {
                className: "ThumbnailDeleteButton",
                onClick: Eu => async function(uu, Eu, ju) {
                  uu.stopPropagation();
                  const su = await Uu.NotificationProvider.showCustomPopup({
                      body: uu => (0, eu.jsx)(Hu, {
                        thumbnailId: Eu,
                        thumbnailName: ju,
                        onClose: Eu => {
                          Eu && (Su.current = !0), uu()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: cu
                    }).getResult(),
                    Zu = Su.current;
                  Su.current = !1, Zu && !0 === su && (Du.current && Iu({
                    text: Ou("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Pu.b.deleteSchematicThumbnail(Yu, Eu).then((() => {
                    Du.current && (Iu({
                      text: Ou("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Vu.current === Eu && Au(null), Fu())
                  })).catch((uu => {
                    Du.current && Iu({
                      text: uu.errorMessageForUser ? Ou(uu.errorMessageForUser, uu.errorMessageTranslationParams) : Ou("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Eu, uu.id, uu.name),
                children: (0, eu.jsx)(Cu.e, {
                  name: "trash-can"
                })
              }), !uu.approved && (0, eu.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, eu.jsx)(Cu.e, {
                  name: "hourglass-clock"
                })
              }), !uu.approved && (0, eu.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [uu.name, (0, eu.jsx)("br", {}), Ou("thumbnail:pendingApproval")]
              })]
            }, Eu))), (0, eu.jsxs)("div", {
              className: Nu()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !bu
              }),
              onClick: () => {
                bu && function(uu) {
                  let {
                    schematicId: Eu,
                    ownedThumbnailCount: ju,
                    onThumbnailReady: su,
                    onClose: Zu
                  } = uu;
                  Uu.NotificationProvider.showCustomPopup({
                    body: uu => (0, eu.jsx)(Bu, {
                      schematicId: Eu,
                      ownedThumbnailCount: ju,
                      onClose: uu,
                      onThumbnailReady: su
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Zu,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Xu.schematicId,
                  ownedThumbnailCount: gu.length,
                  onThumbnailReady: tu,
                  onClose: cu
                })
              },
              children: [(0, eu.jsx)(Cu.e, {
                name: "plus"
              }), (0, eu.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Ou("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Tu(uu) {
      let {
        rejectedThumbnails: Eu,
        userContext: ju,
        isMountedRef: Uu,
        onAcknowledged: Xu
      } = uu;
      const {
        t: fu
      } = (0, lu.A)(), [bu, cu] = (0, su.useState)(!1), [Nu, Ou] = (0, su.useState)(!1), Yu = function(uu) {
        const Eu = new Map;
        for (const ju of uu) {
          const uu = ju.rejectionPolicyId,
            su = Eu.get(uu);
          su ? su.push(ju) : Eu.set(uu, [ju])
        }
        return Eu
      }(Eu);
      return (0, eu.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, eu.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, eu.jsx)(Cu.e, {
            name: "triangle-exclamation"
          }), " ", fu("thumbnail:thumbnailsRejected"), " ", (0, eu.jsx)(Cu.e, {
            name: "triangle-exclamation"
          })]
        }), (0, eu.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: fu("thumbnail:thumbnailsRejectedDescription")
        }), (0, eu.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Yu.entries()].map((uu => {
            let [Eu, ju] = uu;
            const su = tu[Eu];
            return (0, eu.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, eu.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: ju.map((uu => (0, eu.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, eu.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, eu.jsx)(Cu.e, {
                      name: "image-slash"
                    })
                  }), (0, eu.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, eu.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: uu.name
                    })
                  })]
                }, uu.id)))
              }), (0, eu.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [fu("thumbnail:rejectionReason"), " ", su ? fu(su.reason) : Eu]
              }), su && (0, eu.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: su.tips.map((uu => (0, eu.jsx)("li", {
                  children: fu(uu)
                }, uu)))
              })]
            }, Eu)
          }))
        }), (0, eu.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, eu.jsx)(au.d, {
            checked: bu,
            onChange: uu => cu(uu.target.checked),
            disabled: Nu
          }), (0, eu.jsx)("span", {
            children: fu("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, eu.jsx)(Zu.p, {
          onClick: async function() {
            Ou(!0);
            const uu = await Promise.allSettled(Eu.map((uu => Pu.b.deleteSchematicThumbnail(ju, uu.id))));
            if (!Uu.current) return;
            const su = uu.filter((uu => "rejected" === uu.status));
            su.length > 0 && console.error("Some rejected thumbnails failed to delete:", su), Xu()
          },
          disabled: !bu || Nu,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Nu ? (0, eu.jsx)(qu.b, {}) : fu("general:accept")
        })]
      })
    }

    function Hu(uu) {
      let {
        thumbnailId: Eu,
        thumbnailName: ju,
        onClose: su
      } = uu;
      const {
        t: Uu
      } = (0, lu.A)();
      return (0, eu.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, eu.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Uu("thumbnail:deleteThumbnail")
        }), (0, eu.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, eu.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Lu.clientSideServerUrls.s3Url}/customThumbnails/${Eu}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, eu.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: ju
          })]
        }), (0, eu.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Uu("thumbnail:deleteThumbnailConfirmation")
        }), (0, eu.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, eu.jsxs)(Zu.R, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => su(!0),
            children: [(0, eu.jsx)(Cu.e, {
              name: "trash-can"
            }), " ", Uu("general:delete")]
          }), (0, eu.jsx)(Zu.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => su(!1),
            children: Uu("general:cancel")
          })]
        })]
      })
    }
    var Au = ju(2239),
      nu = ju(5146),
      yu = ju(5151),
      zu = ju(5188);

    function Ru(uu) {
      let {
        schematicData: Eu,
        setTexturePack: ju,
        initializeTexturePack: Uu,
        publishFormEnabled: Zu
      } = uu;
      const {
        t: Xu
      } = (0, lu.A)(), [qu, fu] = (0, su.useState)(null), [Cu, bu] = (0, su.useState)(null), [cu, Ou] = (0, su.useState)(!1), Yu = (0, ou.c)(), hu = Zu && !cu, Du = Eu.customTexturePackKey;

      function gu(uu) {
        var Eu;
        fu(uu.metaData.id), bu(null !== (Eu = uu.metaData.fromFolderName) && void 0 !== Eu ? Eu : null), (uu.metaData.id !== Au.p.CUSTOM || uu.metaData.fromFolderName) && ju(uu)
      }
      return (0, su.useEffect)((() => {
        Du && (Ou(!0), (0, nu.c)(Du).then((uu => {
          var Eu;
          Yu.current && (uu ? (fu(uu.metaData.id), bu(null !== (Eu = uu.metaData.fromFolderName) && void 0 !== Eu ? Eu : null), Uu(uu)) : console.error(`No texture pack at ${Du}`))
        })).catch((uu => {
          console.error("Error fetching texture pack: ", uu)
        })).finally((() => {
          Ou(!1)
        })))
      }), [Du, Uu, Yu]), (0, eu.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, eu.jsx)("div", {
          className: "SectionTitle",
          children: Xu("customTexturePack:customTexturePack")
        }), (0, eu.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, eu.jsx)("div", {
            className: Nu()("TexturePack", {
              Selected: null === qu && !cu,
              Disabled: !hu
            }),
            onClick: () => {
              hu && (fu(null), ju(null), bu(null))
            },
            children: (0, eu.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Au.p).map((uu => (0, eu.jsx)(yu.g, {
            id: uu,
            isSelected: uu === qu,
            setSelected: gu,
            disabled: !hu
          }, uu)))]
        }), qu === Au.p.CUSTOM && (0, eu.jsx)(zu.e, {
          folderName: Cu,
          onTexturePackUpdated: gu,
          disabled: !hu,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var uE = ju(5234);

    function EE(uu) {
      var Eu;
      let {
        gameCategory: ju,
        setGameCategory: su,
        disabled: Uu
      } = uu;
      const Xu = null !== (Eu = (0, Ou.lb)(ju)) && void 0 !== Eu ? Eu : "other";
      return (0, eu.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, eu.jsx)(Du.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Uu,
          children: (0, eu.jsx)(gu.c, {
            options: Ou.ab.map((uu => ({
              value: uu,
              label: Ou.$[uu]
            }))),
            value: Xu,
            onChange: uu => {
              uu.value !== Xu && su(Ou.U[uu.value][0])
            }
          })
        }), (0, eu.jsx)(Du.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Uu,
          children: (0, eu.jsx)("div", {
            className: "GameCategoryOptions",
            children: Ou.U[Xu].map((uu => (0, eu.jsx)(Zu.$, {
              active: uu === ju,
              onClick: () => {
                su(uu)
              },
              children: (0, Ou.ib)(uu)
            }, uu)))
          })
        })]
      })
    }

    function jE(uu) {
      let {
        editor: Eu,
        onClose: ju
      } = uu;
      const {
        t: su
      } = (0, lu.A)(), {
        schematicData: Uu,
        updateSchematicData: Zu,
        publishFormEnabled: qu,
        formEnabled: fu
      } = Eu;
      return (0, eu.jsxs)(eu.Fragment, {
        children: [(0, eu.jsxs)(Gu, {
          icon: "pen-to-square",
          title: su("worldBuilder:basicsSection"),
          disabled: !fu,
          children: [(0, eu.jsx)(pu, {
            label: su("general:name"),
            caption: su("worldBuilder:schematicNameTagsHint"),
            children: (0, eu.jsx)(Xu.d, {
              className: "SchematicPageName",
              defaultValue: Uu.name,
              onValueChange: uu => Zu("name", uu),
              placeholderText: su("worldBuilder:schematicNamePlaceholder"),
              maxLength: bu.sb
            })
          }), (0, eu.jsx)(pu, {
            label: su("general:description"),
            children: (0, eu.jsx)(Xu.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Uu.description,
              onValueChange: uu => Zu("description", uu),
              placeholderText: su("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: bu.pb
            })
          }), (0, eu.jsx)(EE, {
            gameCategory: Uu.gameCategory,
            setGameCategory: uu => Zu("gameCategory", uu),
            disabled: !qu
          }), !0 === Uu.gamePublished && (0, eu.jsx)(xu, {
            schematicData: Uu,
            updateSchematicData: Zu,
            publishFormEnabled: qu,
            onClose: function() {
              null === ju || void 0 === ju || ju()
            }
          })]
        }), (0, eu.jsx)(Ju, {
          schematicData: Uu,
          updateSchematicData: Zu,
          publishFormEnabled: qu,
          formEnabled: fu
        }), !0 === Uu.gamePublished && (0, eu.jsx)(Gu, {
          icon: "palette",
          title: su("worldBuilder:texturePackSection"),
          disabled: !fu,
          children: (0, eu.jsx)(Ru, {
            schematicData: Uu,
            setTexturePack: Eu.setTexturePack,
            initializeTexturePack: Eu.initializeTexturePack,
            publishFormEnabled: qu
          })
        })]
      })
    }

    function sE(uu) {
      let {
        editor: Eu
      } = uu;
      const {
        t: ju
      } = (0, lu.A)(), {
        schematicData: su,
        formEnabled: Uu,
        hasUnsavedChanges: Xu
      } = Eu, bu = Uu && Xu;
      return (0, eu.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Uu && Xu && (0, eu.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, eu.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), ju("worldBuilder:unsavedChanges")]
        }), (0, eu.jsx)(fu.e, {
          tooltipInner: (0, eu.jsx)("div", {
            className: "SaveButtonTooltip",
            children: ju(Uu && !Xu ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, eu.jsxs)(Zu.f, {
            className: "SaveChangesButton",
            onClick: () => Eu.saveSchematic(su.gamePublished),
            disabled: !bu,
            children: [(0, eu.jsxs)("span", {
              className: Uu ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, eu.jsx)(Cu.e, {
                name: "wrench"
              }), " ", ju("worldBuilder:saveChanges")]
            }), !Uu && (0, eu.jsx)(qu.b, {})]
          })
        })]
      })
    }

    function UE(uu) {
      let {
        schematic: Eu,
        onSchematicUpdate: ju,
        onClose: Uu,
        inSourceWorld: Xu
      } = uu;
      const {
        t: qu
      } = (0, lu.A)();

      function fu() {
        null === Uu || void 0 === Uu || Uu()
      }
      const Cu = (0, uE.e)(Eu, {
        onNavigateAway: fu,
        inSourceWorld: Xu
      });
      return (0, su.useEffect)((() => {
        null === ju || void 0 === ju || ju(Cu.schematicData)
      }), [Cu.schematicData, ju]), (0, eu.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, eu.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, eu.jsx)(Zu.d, {
            onClick: fu,
            children: qu("worldBuilder:back")
          }), (0, eu.jsx)(Gu, {
            icon: "rocket-launch",
            title: qu("worldBuilder:actionsSection"),
            disabled: !Cu.formEnabled,
            children: (0, eu.jsx)(du.d, {
              editor: Cu
            })
          }), (0, eu.jsx)(jE, {
            editor: Cu,
            onClose: fu
          })]
        }), (0, eu.jsx)(sE, {
          editor: Cu
        })]
      })
    }

    function ZE(uu) {
      let {
        schematic: Eu,
        onSchematicUpdate: ju,
        onClose: su,
        inSourceWorld: Zu
      } = uu;
      Uu.NotificationProvider.showCustomPopup({
        body: uu => (0, eu.jsx)(UE, {
          schematic: Eu,
          onSchematicUpdate: ju,
          onClose: uu,
          inSourceWorld: Zu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: su,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5115: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1244),
      Xu = ju(1116),
      lu = ju(1506),
      qu = ju(1419),
      fu = ju(1393),
      Cu = ju(1154);

    function bu(uu) {
      let {
        editor: Eu,
        className: ju
      } = uu;
      const {
        t: su
      } = (0, Zu.A)(), {
        schematicData: bu,
        formEnabled: cu,
        publishFormEnabled: Nu
      } = Eu, Ou = !cu || !Nu;
      return (0, Cu.jsxs)("div", {
        className: Uu()("PublishButtonContainer", ju),
        children: [Eu.canEditSourceWorld && (0, Cu.jsxs)(lu.f, {
          onClick: Eu.editSourceWorld,
          disabled: Ou,
          children: [(0, Cu.jsx)(Xu.e, {
            name: "edit"
          }), " ", su("worldBuilder:editSourceWorld")]
        }), !bu.gamePublished && (0, Cu.jsx)(qu.e, {
          tooltipInner: (0, Cu.jsx)("div", {
            className: "PublishButtonTooltip",
            children: su("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Cu.jsxs)(lu.p, {
            onClick: () => Eu.saveSchematic(!0),
            disabled: Ou,
            children: [(0, Cu.jsx)(Xu.e, {
              name: "rocket-launch"
            }), " ", su("worldBuilder:publishAsGame"), " ", (0, Cu.jsx)(Xu.e, {
              name: "info-circle"
            })]
          })
        }), !0 === bu.gamePublished && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)(qu.e, {
            tooltipInner: (0, Cu.jsx)("div", {
              className: "PublishButtonTooltip",
              children: su("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Cu.jsxs)(lu.R, {
              onClick: Eu.unpublishSchematic,
              disabled: Ou,
              children: [(0, Cu.jsx)(Xu.e, {
                name: "rocket-launch"
              }), " ", su("worldBuilder:unpublishAsGame"), " ", (0, Cu.jsx)(Xu.e, {
                name: "info-circle"
              })]
            })
          }), (0, Cu.jsxs)(lu.f, {
            onClick: Eu.playGame,
            disabled: Ou,
            children: [(0, Cu.jsx)(Xu.e, {
              name: "joystick"
            }), " ", su("general:playGame")]
          })]
        }), !cu && (0, Cu.jsx)(fu.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5146: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(1255);
    async function Uu(uu) {
      const Eu = await fetch(`${su.clientSideServerUrls.s3Url}/${uu}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Eu.status || 403 === Eu.status) return null;
      if (!Eu.ok) throw new Error(`Failed to download the texture pack (${Eu.status})`);
      return await Eu.json()
    }
  },
  5234: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu
    });
    var su = ju(58),
      Uu = ju(1376),
      Zu = ju(1069),
      Xu = ju(166),
      lu = ju(1600),
      qu = ju(22),
      fu = ju(1986),
      Cu = ju(1559),
      bu = ju(4769),
      cu = ju(1405),
      Nu = ju(1178),
      Ou = ju(1570);

    function Yu(uu, Eu) {
      return {
        schematicId: uu.schematicId,
        name: uu.name,
        description: uu.description,
        gamePublished: Eu,
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

    function hu(uu) {
      let {
        onNavigateAway: Eu,
        inSourceWorld: ju = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: hu
      } = (0, Nu.c)(), Du = (0, Ou.useNavigatePreserveSearch)(), [gu, Mu] = (0, su.useState)({
        ...uu
      }), [eu, Gu] = (0, su.useState)("Enter"), [pu, wu] = (0, su.useState)(void 0), Ju = (0, su.useRef)(Yu(uu, uu.gamePublished)), du = (0, su.useRef)(void 0), au = "Enter" === eu, Pu = hu.playerHasRank("developer") || hu.playerHasRank("admin") || "Enter" === eu && !1 !== gu.schematicContainsSpawnBlock, ou = void 0 !== pu && pu !== du.current || JSON.stringify(Yu(gu, gu.gamePublished)) !== JSON.stringify(Ju.current);

      function ku(uu, Eu) {
        Mu((ju => ({
          ...ju,
          [uu]: Eu
        })))
      }
      const mu = (0, su.useCallback)((uu => {
        du.current = uu, wu(uu)
      }), []);

      function vu(uu) {
        Gu("Loading");
        const Eu = Yu(gu, uu),
          ju = pu !== du.current ? pu : void 0;
        Cu.b.updateSchematic(hu, Eu, ju).then((ju => {
          let {
            customTexturePackKey: su
          } = ju;
          Gu("Success"), ku("customTexturePackKey", su), Ju.current = Eu, du.current = void 0, wu(void 0), setTimeout((() => {
            ku("gamePublished", uu), Gu("Enter")
          }), 1e3)
        })).catch((uu => {
          var Eu;
          (console.error("Failed to save schematic:", uu), Gu("Error"), uu instanceof Xu.b && uu.errorMessageForUser) && cu.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: uu.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Eu = uu.errorMessageTranslationParams) && void 0 !== Eu ? Eu : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Gu("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: gu,
        updateSchematicData: ku,
        setTexturePack: wu,
        initializeTexturePack: mu,
        updateState: eu,
        formEnabled: au,
        publishFormEnabled: Pu,
        hasUnsavedChanges: ou,
        canEditSourceWorld: !ju,
        saveSchematic: vu,
        unpublishSchematic: function() {
          cu.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((uu => {
            !0 === uu && vu(!1)
          }))
        },
        editSourceWorld: function() {
          Gu("Loading"), bu.d.getSourceWorld(gu.schematicId).then((uu => {
            fu.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, qu.j)("other"), Du((0, Uu.c)("classic", uu)), null === Eu || void 0 === Eu || Eu()
          })).catch((uu => {
            console.error("Failed to get source world:", uu), Gu("Error"), setTimeout((() => {
              Gu("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          fu.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Du((0, lu.F)((0, Zu.w)(gu.schematicId), gu)), null === Eu || void 0 === Eu || Eu()
        }
      }
    }
  },
  5105: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);