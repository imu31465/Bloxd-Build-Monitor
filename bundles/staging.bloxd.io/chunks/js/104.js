export const id = 104;
export const ids = [104];
export const modules = {
  4887: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => AT,
      g: () => IT,
      j: () => CT
    });
    cT(4893);
    var lT = cT(1195),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1379),
      yT = (cT(71), cT(4355)),
      fT = cT(1061),
      xT = cT(1099);

    function IT(TT) {
      let {
        children: kT,
        label: cT,
        className: MT,
        circleInfoText: yT,
        disabled: IT,
        onLabelClick: AT
      } = TT;
      const {
        t: CT
      } = (0, lT.B)(), jT = (0, xT.jsxs)("div", {
        className: KT()("Label", {
          ClickableLabel: void 0 !== AT
        }),
        onClick: AT,
        children: [CT(cT), yT && (0, xT.jsx)(fT.e, {
          name: "circle-info"
        })]
      });
      return (0, xT.jsxs)("div", {
        className: KT()("LabeledInput", {
          [MT]: MT,
          DisabledLabelInput: IT
        }),
        children: [yT && (0, xT.jsx)(OT.c, {
          tooltipInner: (0, xT.jsx)("div", {
            className: "LabeledInputTooltip",
            children: CT(yT)
          }),
          children: jT
        }), !yT && jT, kT]
      })
    }

    function AT(TT) {
      let {
        checked: kT,
        setChecked: cT
      } = TT;
      return (0, xT.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: TT => {
          cT(!kT)
        },
        children: (0, xT.jsx)(yT.d, {
          checked: kT,
          onChange: TT => {
            cT(TT.target.checked)
          },
          disabled: !1
        })
      })
    }

    function CT(TT) {
      let {
        checked: kT,
        setChecked: cT,
        disabled: lT
      } = TT;
      return (0, xT.jsx)("div", {
        className: KT()("SwitchContainer", {
          SwitchContainerDisabled: lT
        }),
        onClick: () => {
          lT || cT(!kT)
        },
        children: (0, xT.jsx)(yT.d, {
          className: "SwitchCheckbox",
          checked: kT,
          onChange: TT => {
            cT(TT.target.checked)
          },
          disabled: !!lT
        })
      })
    }
  },
  4899: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(4611),
      OT = cT(1195),
      yT = cT(1099);
    const fT = [...KT.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function xT(TT) {
      const {
        disabled: kT,
        hideWrapper: cT
      } = TT, {
        t: lT
      } = (0, OT.B)(), xT = TT.advancedMode ? fT.map((kT => [kT, TT.callbacks[kT]])) : KT.n.map((kT => [kT, TT.callbacks[kT]])), AT = (0, yT.jsx)("div", {
        className: MT()("PluginsGrid", {
          SectionBody: !cT
        }),
        children: xT.map((TT => {
          let [cT, lT] = TT;
          return (0, yT.jsx)(IT, {
            plugin: cT,
            callbacks: lT,
            disabled: kT
          }, cT)
        }))
      });
      return cT ? AT : (0, yT.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, yT.jsx)("div", {
          className: "SectionTitle",
          children: lT("worldBuilder:pluginsSection")
        }), AT]
      })
    }

    function IT(TT) {
      let {
        plugin: kT,
        callbacks: {
          isEnabled: cT,
          PD: lT
        },
        disabled: KT
      } = TT;
      const {
        t: fT
      } = (0, OT.B)(), xT = cT();
      return (0, yT.jsxs)("div", {
        className: MT()("PluginCard", {
          PluginCardEnabled: xT,
          PluginCardDisabledForm: KT
        }),
        "data-pad-focusable": !0,
        "aria-disabled": KT || void 0,
        onClick: () => {
          KT || lT(!xT)
        },
        children: [(0, yT.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, yT.jsx)("img", {
            src: `/textures/games/classic/customGames/${kT}.png`,
            alt: kT
          })
        }), (0, yT.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, yT.jsx)("div", {
            className: "PluginCardTitle",
            children: fT(AT[kT])
          }), (0, yT.jsx)("div", {
            className: "PluginCardDescription",
            children: fT(CT[kT])
          })]
        }), (0, yT.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: fT(xT ? "general:on" : "general:off")
        })]
      })
    }
    const AT = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      CT = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4880: (TT, kT, cT) => {
    cT.d(kT, {
      g: () => Mk,
      b: () => lk,
      e: () => ck,
      h: () => Kk
    });
    var lT = cT(71),
      MT = cT(1363),
      KT = cT(1470),
      OT = cT(1692),
      yT = cT(1195),
      fT = cT(1348),
      xT = cT(1379),
      IT = cT(1061),
      AT = cT(1226),
      CT = cT(1046),
      jT = cT.n(CT),
      vT = cT(328),
      tT = cT(4611),
      hT = cT(1244),
      NT = cT(4887),
      QT = cT(3059),
      ST = cT(4899),
      DT = cT(1099);

    function aT(TT) {
      let {
        icon: kT,
        title: cT,
        disabled: lT,
        children: MT
      } = TT;
      return (0, DT.jsxs)("div", {
        className: jT()("ManageCard", {
          ManageCardDisabled: lT
        }),
        children: [(0, DT.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, DT.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, DT.jsx)(IT.e, {
              name: kT
            })
          }), (0, DT.jsx)("div", {
            children: (0, DT.jsx)("h2", {
              className: "ManageCardTitle",
              children: cT
            })
          })]
        }), (0, DT.jsxs)("div", {
          className: "ManageCardBody",
          children: [MT, lT && (0, DT.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function FT(TT) {
      let {
        label: kT,
        caption: cT,
        children: lT
      } = TT;
      return (0, DT.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, DT.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: kT
        }), lT, cT && (0, DT.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: cT
        })]
      })
    }

    function rT(TT) {
      let {
        label: kT,
        caption: cT,
        disabled: lT,
        children: MT
      } = TT;
      return (0, DT.jsxs)("div", {
        className: jT()("ManageField", {
          ManageFieldDisabled: lT
        }),
        children: [(0, DT.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, DT.jsx)("div", {
            className: "ManageFieldLabel",
            children: kT
          }), (0, DT.jsx)("div", {
            className: "ManageFieldCaption",
            children: cT
          })]
        }), (0, DT.jsx)("div", {
          className: "ManageFieldControl",
          children: MT
        })]
      })
    }

    function PT(TT) {
      var kT, cT;
      let {
        schematicData: lT,
        updateSchematicData: MT,
        publishFormEnabled: KT,
        formEnabled: OT
      } = TT;
      const {
        t: fT
      } = (0, yT.B)(), xT = !KT, IT = {
        tpRequests: {
          isEnabled: () => !lT.disableTpRequests,
          PD: TT => MT("disableTpRequests", !TT)
        },
        spawnProtection: {
          isEnabled: () => !lT.disableSpawnProtection,
          PD: TT => MT("disableSpawnProtection", !TT)
        },
        spawnReset: {
          isEnabled: () => !!lT.enableSpawnReset,
          PD: TT => MT("enableSpawnReset", TT)
        },
        smpMarketplace: {
          isEnabled: () => !!lT.enableSmpMarketplace,
          PD: TT => MT("enableSmpMarketplace", TT)
        },
        survivalGuns: {
          isEnabled: () => !!lT.enableSurvivalGuns,
          PD: TT => MT("enableSurvivalGuns", TT)
        },
        fallDamage: {
          isEnabled: () => !lT.disableFallDamage,
          PD: TT => MT("disableFallDamage", !TT)
        },
        dayNight: {
          isEnabled: () => !!lT.enableDayNight,
          PD: TT => MT("enableDayNight", TT)
        }
      };
      return (0, DT.jsxs)(DT.Fragment, {
        children: [!1 === lT.schematicContainsSpawnBlock && (0, DT.jsx)("div", {
          className: "ManageWarningBanner",
          children: fT("worldBuilder:mustContainSpawnBlock")
        }), (0, DT.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, DT.jsxs)(aT, {
            icon: "globe",
            title: fT("worldBuilder:worldRulesSection"),
            disabled: !OT,
            children: [(0, DT.jsx)(rT, {
              label: fT("classic:defaultGamemode"),
              caption: fT("classic:defaultGamemodeDescription"),
              disabled: xT,
              children: (0, DT.jsx)(QT.d, {
                controlClassName: "ManageDropdown",
                options: tT.G.map((TT => ({
                  value: TT,
                  label: vT.q[TT]
                }))),
                value: lT.defaultGamemode,
                onChange: TT => MT("defaultGamemode", TT.value)
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:voidDeathHeight"),
              caption: fT("classic:voidDeathHeightDescription"),
              disabled: xT,
              children: (0, DT.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, DT.jsx)("input", {
                  type: "number",
                  max: hT.B,
                  value: null !== (kT = lT.voidDeathHeight) && void 0 !== kT ? kT : "",
                  onChange: TT => {
                    const kT = parseInt(TT.target.value);
                    MT("voidDeathHeight", kT)
                  }
                }), (0, DT.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: fT("worldBuilder:blocksUnit")
                })]
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:worldBorder"),
              caption: fT("classic:worldBorderDescription"),
              disabled: xT,
              children: (0, DT.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, DT.jsx)("input", {
                  type: "number",
                  min: hT.J,
                  max: hT.D,
                  placeholder: fT("worldBuilder:noWorldBorderLimit"),
                  value: null !== (cT = lT.worldBorder) && void 0 !== cT ? cT : "",
                  onChange: TT => {
                    const kT = parseInt(TT.target.value);
                    MT("worldBorder", isNaN(kT) ? null : kT)
                  }
                }), (0, DT.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: fT("worldBuilder:blocksUnit")
                })]
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:disableMobs"),
              caption: fT("classic:disableMobsDescription"),
              disabled: xT,
              children: (0, DT.jsx)(NT.j, {
                checked: lT.disableMobs,
                setChecked: TT => MT("disableMobs", TT),
                disabled: xT
              })
            })]
          }), (0, DT.jsxs)(aT, {
            icon: "user-group",
            title: fT("worldBuilder:playerAndLobbySection"),
            disabled: !OT,
            children: [(0, DT.jsx)(rT, {
              label: fT("classic:disableKeepInventory"),
              caption: fT("classic:disableKeepInventoryDescription"),
              disabled: xT,
              children: (0, DT.jsx)(NT.j, {
                checked: lT.disableKeepInventory,
                setChecked: TT => MT("disableKeepInventory", TT),
                disabled: xT
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:persistInventory"),
              caption: fT("classic:persistInventoryDescription"),
              disabled: xT,
              children: (0, DT.jsx)(QT.d, {
                controlClassName: "ManageDropdown",
                options: tT.q.map((TT => ({
                  value: TT,
                  label: vT.g[TT]
                }))),
                value: lT.persistInventory,
                onChange: TT => MT("persistInventory", TT.value)
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:persistWorld"),
              caption: fT("classic:persistWorldDescription"),
              disabled: xT,
              children: (0, DT.jsx)(NT.j, {
                checked: lT.persistWorld,
                setChecked: TT => MT("persistWorld", TT),
                disabled: xT
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:disableLobbySpawn"),
              caption: fT("classic:disableLobbySpawnDescription"),
              disabled: xT,
              children: (0, DT.jsx)(NT.j, {
                checked: lT.disableLobbySpawn,
                setChecked: TT => MT("disableLobbySpawn", TT),
                disabled: xT
              })
            }), (0, DT.jsx)(rT, {
              label: fT("classic:hideLobbyCode"),
              caption: fT("classic:hideLobbyCodeDescription"),
              disabled: xT,
              children: (0, DT.jsx)(NT.j, {
                checked: lT.hideLobbyCode,
                setChecked: TT => MT("hideLobbyCode", TT),
                disabled: xT
              })
            })]
          })]
        }), (0, DT.jsx)(aT, {
          icon: "layer-group",
          title: fT("worldBuilder:pluginsSection"),
          disabled: !OT,
          children: (0, DT.jsx)(ST.b, {
            callbacks: IT,
            disabled: xT,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var wT = cT(4905),
      mT = cT(4355),
      bT = cT(1518),
      zT = cT(3436),
      JT = cT(1130),
      oT = cT(4861),
      HT = cT(4909),
      eT = cT(1474);
    const GT = 50,
      VT = .3;
    async function ET(TT) {
      const kT = await
      function(TT) {
        return new Promise(((kT, cT) => {
          const lT = new FileReader;
          lT.onload = () => kT(lT.result), lT.onerror = cT, lT.readAsDataURL(TT)
        }))
      }(TT), cT = await
      function(TT) {
        return new Promise(((kT, cT) => {
          const lT = new Image;
          lT.onload = () => kT(lT), lT.onerror = () => cT(new Error("Failed to load image")), lT.src = TT
        }))
      }(kT);
      if (cT.naturalHeight > cT.naturalWidth) throw new ZT;
      const lT = 1024 * GT,
        {
          dataUrl: MT,
          finalQuality: KT
        } = function(TT, kT) {
          const cT = document.createElement("canvas");
          cT.width = TT.naturalWidth, cT.height = TT.naturalHeight, cT.getContext("2d").drawImage(TT, 0, 0);
          let lT = .92,
            MT = cT.toDataURL("image/jpeg", lT);
          for (; .75 * MT.length > kT && lT > .05;) lT -= .05, MT = cT.toDataURL("image/jpeg", lT);
          return {
            dataUrl: MT,
            finalQuality: lT
          }
        }(cT, lT);
      if (Math.ceil(.75 * MT.length) > lT) throw new uT;
      return {
        base64Jpg: MT,
        heavilyCompressed: KT < VT
      }
    }
    class ZT extends Error {}
    class uT extends Error {}
    var XT = function(TT) {
      return TT[TT.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", TT[TT.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", TT
    }(XT || {});

    function dT(TT) {
      var kT;
      let {
        schematicId: cT,
        hasReadUploadPolicy: MT,
        onPolicyValidationError: fT,
        onThumbnailReady: xT
      } = TT;
      const {
        t: CT
      } = (0, yT.B)(), [vT, tT] = (0, lT.useState)(null), [hT, NT] = (0, lT.useState)(""), [QT, ST] = (0, lT.useState)(""), [aT, FT] = (0, lT.useState)(!0), [rT, PT] = (0, lT.useState)(!1), wT = (0, lT.useRef)(!1), [mT, bT] = (0, lT.useState)(null), [zT, JT] = (0, lT.useState)(!1), [oT, eT] = (0, lT.useState)(!1), GT = (0, lT.useRef)(0), {
        getRootProps: VT,
        getInputProps: XT,
        isDragActive: dT
      } = (0, HT.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async TT => {
          if (0 === TT.length) return;
          const kT = TT[0],
            cT = ++GT.current;
          bT(null), JT(!1), tT(null), NT(kT.name);
          try {
            const TT = await ET(kT);
            if (cT !== GT.current) return;
            tT(TT), JT(TT.heavilyCompressed)
          } catch (lT) {
            if (cT !== GT.current) return;
            bT(CT(lT instanceof ZT ? "thumbnail:portraitImagesNotAllowed" : lT instanceof uT ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), LT = hT.length <= 30 ? hT : `${hT.slice(0,27)}...`, RT = null !== (kT = null === vT || void 0 === vT ? void 0 : vT.base64Jpg) && void 0 !== kT ? kT : null, gT = QT.trim(), UT = gT.length >= AT.m && gT.length <= AT.j, YT = oT && !vT && !mT, BT = oT && !UT;
      return (0, DT.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, DT.jsxs)("div", {
          ...VT({
            className: jT()("ThumbnailUploadDropzone", {
              ActiveDrag: dT,
              ValidationError: YT
            })
          }),
          children: [(0, DT.jsx)("input", {
            ...XT()
          }), !dT && RT ? (0, DT.jsxs)(DT.Fragment, {
            children: [(0, DT.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, DT.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, DT.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, DT.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, DT.jsx)("img", {
                    src: RT,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, DT.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, DT.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, DT.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, DT.jsx)("img", {
                    src: RT,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, DT.jsxs)("div", {
              children: [(0, DT.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: LT
              }), (0, DT.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: CT("thumbnail:preview")
              })]
            })]
          }) : (0, DT.jsxs)(DT.Fragment, {
            children: [(0, DT.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, DT.jsx)(IT.e, {
                name: "image"
              })
            }), (0, DT.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: CT("thumbnail:dragImageHere")
            })]
          })]
        }), YT && (0, DT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: CT("thumbnail:imageRequired")
        }), (0, DT.jsx)(OT.b, {
          className: jT()("ThumbnailUploadNameInput", {
            ValidationError: BT
          }),
          placeholderText: CT("thumbnail:thumbnailName"),
          defaultValue: QT,
          onValueChange: TT => {
            ST(TT)
          },
          maxLength: AT.j
        }), BT && (0, DT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: CT("thumbnail:nameRequired", {
            min: AT.m,
            max: AT.j
          })
        }), (0, DT.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, DT.jsx)("input", {
            type: "checkbox",
            checked: aT,
            onChange: TT => {
              FT(TT.target.checked)
            }
          }), CT("thumbnail:setAsThumbnailOnceApproved")]
        }), zT && (0, DT.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: CT("thumbnail:heavyCompressionWarning")
        }), mT && (0, DT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: mT
        }), (0, DT.jsx)(KT.m, {
          disabled: rT,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (eT(!0), !wT.current && vT && UT && MT) {
              wT.current = !0, PT(!0), bT(null);
              try {
                await xT(vT.base64Jpg, gT, aT ? cT : null)
              } catch (TT) {
                bT(TT.errorMessageForUser ? CT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : CT("thumbnail:failedToUploadImage"))
              } finally {
                wT.current = !1, PT(!1)
              }
            } else MT || fT()
          },
          children: CT(rT ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const LT = 2e3;

    function RT(TT) {
      let {
        schematicId: kT,
        ownedThumbnailCount: cT,
        onClose: MT,
        onThumbnailReady: KT
      } = TT;
      const {
        t: OT
      } = (0, yT.B)(), {
        userContext: fT
      } = (0, JT.b)(), [xT, CT] = (0, lT.useState)(!1), [vT, tT] = (0, lT.useState)(!1), [hT, NT] = (0, lT.useState)(!1), QT = (0, lT.useRef)();
      (0, lT.useEffect)((() => () => {
        clearTimeout(QT.current)
      }), []);
      const ST = function(TT, kT) {
        const cT = [];
        return TT.isLoggedIn() || cT.push(XT.NOT_LOGGED_IN), kT >= AT.W && cT.push(XT.THUMBNAIL_LIMIT_REACHED), cT
      }(fT, cT);
      if (ST.length > 0) {
        const TT = {
          [XT.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [XT.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: AT.W
            }
          }
        };
        return (0, DT.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, DT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: OT("thumbnail:cannotUploadThumbnail")
          }), ST.map(((kT, cT) => {
            const lT = TT[kT];
            return (0, DT.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, DT.jsx)(IT.e, {
                name: "triangle-exclamation"
              }), (0, DT.jsx)("span", {
                children: OT(lT.key, lT.params)
              })]
            }, cT)
          }))]
        })
      }
      return (0, DT.jsxs)("div", {
        className: jT()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: xT
        }),
        children: [xT && (0, DT.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, DT.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, DT.jsx)(IT.e, {
              name: "check"
            }), (0, DT.jsx)(eT.b, {})]
          }), (0, DT.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: OT("thumbnail:thumbnailUploaded")
          })]
        }), (0, DT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: OT("thumbnail:uploadThumbnail")
        }), (0, DT.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, DT.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, DT.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: OT("thumbnail:chooseImage", {
                maxSizeKb: GT
              })
            }), (0, DT.jsx)(dT, {
              schematicId: kT,
              hasReadUploadPolicy: vT,
              onPolicyValidationError: () => {
                NT(!0)
              },
              onThumbnailReady: async (TT, kT, cT) => {
                await KT(TT, kT, cT), CT(!0), QT.current = setTimeout(MT, LT)
              }
            })]
          }), (0, DT.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, DT.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: OT("thumbnail:uploadPolicy")
            }), (0, DT.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "check"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyFollowGuidelines")
                })]
              }), (0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "check"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyInGameAssets")
                })]
              }), (0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "check"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyLimitText")
                })]
              }), (0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "x"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyCopyrightContent")
                })]
              }), (0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "x"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "x"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyBloxdTags")
                })]
              }), (0, DT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, DT.jsx)(IT.e, {
                  name: "x"
                }), (0, DT.jsx)("span", {
                  children: OT("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, DT.jsxs)("label", {
              className: jT()("ThumbnailUploadCheckbox Policy", {
                ValidationError: hT && !vT
              }),
              children: [(0, DT.jsx)("input", {
                type: "checkbox",
                checked: vT,
                onChange: TT => {
                  tT(TT.target.checked)
                }
              }), OT("thumbnail:agreeToUploadPolicy")]
            }), hT && !vT && (0, DT.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: OT("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var gT = cT(1202);
    const UT = {
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

    function YT(TT) {
      var kT, cT;
      let {
        schematicData: OT,
        updateSchematicData: xT,
        publishFormEnabled: AT,
        onClose: CT
      } = TT;
      const {
        t: vT
      } = (0, yT.B)(), {
        userContext: tT,
        isUserContextUpdating: hT
      } = (0, JT.b)(), NT = (0, zT.b)(), [QT, ST] = (0, lT.useState)([]), [aT, FT] = (0, lT.useState)([]), [rT, PT] = (0, lT.useState)(!0), [wT, mT] = (0, lT.useState)(null !== (kT = OT.customThumbnailId) && void 0 !== kT ? kT : null), [HT, eT] = (0, lT.useState)(null), GT = (0, lT.useRef)(null !== (cT = OT.customThumbnailId) && void 0 !== cT ? cT : null), VT = (0, lT.useRef)(0), ET = (0, lT.useRef)(null), ZT = (0, lT.useRef)(null), uT = (0, lT.useRef)(null), XT = (0, lT.useRef)(!1);

      function dT(TT, kT) {
        uT.current && (clearTimeout(uT.current), uT.current = null), eT(TT), null !== TT && kT && (uT.current = setTimeout((() => {
          eT(null), uT.current = null
        }), 5e3))
      }(0, lT.useEffect)((() => () => {
        clearTimeout(ZT.current), clearTimeout(uT.current)
      }), []);
      const LT = (0, lT.useCallback)((() => {
        PT(!0), bT.d.getOwnedThumbnails(tT).then((TT => {
          const kT = [],
            cT = [];
          for (const lT of TT.thumbnails) lT.rejectionPolicyId ? kT.push(lT) : cT.push(lT);
          kT.sort(((TT, kT) => TT.lastUpdatedAt - kT.lastUpdatedAt)), cT.sort(((TT, kT) => {
            const cT = TT.approved ? 1 : 0,
              lT = (kT.approved ? 1 : 0) - cT;
            return 0 !== lT ? lT : kT.lastUpdatedAt - TT.lastUpdatedAt
          })), FT(kT), ST(cT)
        })).catch((TT => {
          console.error("Failed to fetch thumbnails:", TT)
        })).finally((() => {
          PT(!1)
        }))
      }), [tT]);
      async function UT(TT, kT, cT) {
        return bT.d.uploadSchematicThumbnail(tT, TT, kT, cT).then((() => {
          dT({
            text: vT("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), LT()
        }))
      }

      function YT() {
        VT.current = Date.now(), ZT.current = null;
        const TT = ET.current;
        ET.current = null, dT({
          text: vT("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), bT.d.setSchematicThumbnail(tT, OT.schematicId, TT).then((() => {
          NT.current && (dT({
            text: vT("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), GT.current = TT, xT("customThumbnailId", TT), xT("customThumbnailBlurhash", void 0), xT("customThumbnailVariants", void 0))
        })).catch((TT => {
          NT.current && (dT({
            text: TT.errorMessageForUser ? vT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : vT("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), mT(GT.current))
        }))
      }

      function nT(TT) {
        mT(TT), ET.current = TT;
        const kT = Date.now() - VT.current;
        kT >= 1e3 ? YT() : (dT({
          text: vT("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ZT.current || (ZT.current = setTimeout((() => {
          YT()
        }), 1e3 - kT)))
      }
      return (0, lT.useEffect)((() => {
        !1 === hT && LT()
      }), [hT, LT]), aT.length > 0 ? (0, DT.jsx)(BT, {
        rejectedThumbnails: aT,
        userContext: tT,
        isMountedRef: NT,
        onAcknowledged: LT
      }) : (0, DT.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, DT.jsxs)("div", {
          className: "SectionTitle",
          children: [vT("thumbnail:gameThumbnail"), HT && (0, DT.jsx)("span", {
            className: jT()("ThumbnailActionMsg", `ThumbnailActionMsg--${HT.type}`),
            children: HT.text
          })]
        }), (0, DT.jsx)("div", {
          className: "SectionBody",
          children: (0, DT.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, DT.jsxs)("div", {
              className: jT()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === wT
              }),
              onClick: () => nT(null),
              children: [(0, DT.jsx)(oT.e, {
                game: {
                  schematicId: OT.schematicId,
                  imageBlurhash: OT.imageBlurhash
                }
              }), (0, DT.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: vT("general:default")
              })]
            }), rT && (0, DT.jsx)(fT.d, {}), QT.map(((TT, kT) => (0, DT.jsxs)("div", {
              className: jT()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: wT === TT.id,
                ThumbnailGridItemPending: !TT.approved
              }),
              onClick: () => {
                TT.approved && nT(TT.id)
              },
              children: [TT.approved && (0, DT.jsx)("img", {
                src: `${gT.clientSideServerUrls.s3Url}/customThumbnails/${TT.id}.jpg`,
                alt: "Thumbnail"
              }), TT.approved && (0, DT.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: TT.name
              }), TT.id && (0, DT.jsx)(KT.I, {
                className: "ThumbnailDeleteButton",
                onClick: kT => async function(TT, kT, cT) {
                  TT.stopPropagation();
                  const lT = await MT.NotificationProvider.showCustomPopup({
                      body: TT => (0, DT.jsx)(WT, {
                        thumbnailId: kT,
                        thumbnailName: cT,
                        onClose: kT => {
                          kT && (XT.current = !0), TT()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: CT
                    }).getResult(),
                    KT = XT.current;
                  XT.current = !1, KT && !0 === lT && (NT.current && dT({
                    text: vT("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), bT.d.deleteSchematicThumbnail(tT, kT).then((() => {
                    NT.current && (dT({
                      text: vT("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), GT.current === kT && nT(null), LT())
                  })).catch((TT => {
                    NT.current && dT({
                      text: TT.errorMessageForUser ? vT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : vT("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(kT, TT.id, TT.name),
                children: (0, DT.jsx)(IT.e, {
                  name: "trash-can"
                })
              }), !TT.approved && (0, DT.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, DT.jsx)(IT.e, {
                  name: "hourglass-clock"
                })
              }), !TT.approved && (0, DT.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [TT.name, (0, DT.jsx)("br", {}), vT("thumbnail:pendingApproval")]
              })]
            }, kT))), (0, DT.jsxs)("div", {
              className: jT()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !AT
              }),
              onClick: () => {
                AT && function(TT) {
                  let {
                    schematicId: kT,
                    ownedThumbnailCount: cT,
                    onThumbnailReady: lT,
                    onClose: KT
                  } = TT;
                  MT.NotificationProvider.showCustomPopup({
                    body: TT => (0, DT.jsx)(RT, {
                      schematicId: kT,
                      ownedThumbnailCount: cT,
                      onClose: TT,
                      onThumbnailReady: lT
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: KT,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: OT.schematicId,
                  ownedThumbnailCount: QT.length,
                  onThumbnailReady: UT,
                  onClose: CT
                })
              },
              children: [(0, DT.jsx)(IT.e, {
                name: "plus"
              }), (0, DT.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: vT("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function BT(TT) {
      let {
        rejectedThumbnails: kT,
        userContext: cT,
        isMountedRef: MT,
        onAcknowledged: OT
      } = TT;
      const {
        t: xT
      } = (0, yT.B)(), [AT, CT] = (0, lT.useState)(!1), [jT, vT] = (0, lT.useState)(!1), tT = function(TT) {
        const kT = new Map;
        for (const cT of TT) {
          const TT = cT.rejectionPolicyId,
            lT = kT.get(TT);
          lT ? lT.push(cT) : kT.set(TT, [cT])
        }
        return kT
      }(kT);
      return (0, DT.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, DT.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, DT.jsx)(IT.e, {
            name: "triangle-exclamation"
          }), " ", xT("thumbnail:thumbnailsRejected"), " ", (0, DT.jsx)(IT.e, {
            name: "triangle-exclamation"
          })]
        }), (0, DT.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: xT("thumbnail:thumbnailsRejectedDescription")
        }), (0, DT.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...tT.entries()].map((TT => {
            let [kT, cT] = TT;
            const lT = UT[kT];
            return (0, DT.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, DT.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: cT.map((TT => (0, DT.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, DT.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, DT.jsx)(IT.e, {
                      name: "image-slash"
                    })
                  }), (0, DT.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, DT.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: TT.name
                    })
                  })]
                }, TT.id)))
              }), (0, DT.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [xT("thumbnail:rejectionReason"), " ", lT ? xT(lT.reason) : kT]
              }), lT && (0, DT.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: lT.tips.map((TT => (0, DT.jsx)("li", {
                  children: xT(TT)
                }, TT)))
              })]
            }, kT)
          }))
        }), (0, DT.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, DT.jsx)(mT.d, {
            checked: AT,
            onChange: TT => CT(TT.target.checked),
            disabled: jT
          }), (0, DT.jsx)("span", {
            children: xT("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, DT.jsx)(KT.m, {
          onClick: async function() {
            vT(!0);
            const TT = await Promise.allSettled(kT.map((TT => bT.d.deleteSchematicThumbnail(cT, TT.id))));
            if (!MT.current) return;
            const lT = TT.filter((TT => "rejected" === TT.status));
            lT.length > 0 && console.error("Some rejected thumbnails failed to delete:", lT), OT()
          },
          disabled: !AT || jT,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: jT ? (0, DT.jsx)(fT.d, {}) : xT("general:accept")
        })]
      })
    }

    function WT(TT) {
      let {
        thumbnailId: kT,
        thumbnailName: cT,
        onClose: lT
      } = TT;
      const {
        t: MT
      } = (0, yT.B)();
      return (0, DT.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, DT.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: MT("thumbnail:deleteThumbnail")
        }), (0, DT.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, DT.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${gT.clientSideServerUrls.s3Url}/customThumbnails/${kT}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, DT.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: cT
          })]
        }), (0, DT.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: MT("thumbnail:deleteThumbnailConfirmation")
        }), (0, DT.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, DT.jsxs)(KT.I, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => lT(!0),
            children: [(0, DT.jsx)(IT.e, {
              name: "trash-can"
            }), " ", MT("general:delete")]
          }), (0, DT.jsx)(KT.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => lT(!1),
            children: MT("general:cancel")
          })]
        })]
      })
    }
    var nT = cT(3092),
      pT = cT(4939),
      iT = cT(4943),
      qT = cT(4979);

    function sT(TT) {
      let {
        schematicData: kT,
        setTexturePack: cT,
        initializeTexturePack: MT,
        publishFormEnabled: KT
      } = TT;
      const {
        t: OT
      } = (0, yT.B)(), [fT, xT] = (0, lT.useState)(null), [IT, AT] = (0, lT.useState)(null), [CT, vT] = (0, lT.useState)(!1), tT = (0, zT.b)(), hT = KT && !CT, NT = kT.customTexturePackKey;

      function QT(TT) {
        var kT;
        xT(TT.metaData.id), AT(null !== (kT = TT.metaData.fromFolderName) && void 0 !== kT ? kT : null), (TT.metaData.id !== nT.r.CUSTOM || TT.metaData.fromFolderName) && cT(TT)
      }
      return (0, lT.useEffect)((() => {
        NT && (vT(!0), (0, pT.b)(NT).then((TT => {
          var kT;
          tT.current && (TT ? (xT(TT.metaData.id), AT(null !== (kT = TT.metaData.fromFolderName) && void 0 !== kT ? kT : null), MT(TT)) : console.error(`No texture pack at ${NT}`))
        })).catch((TT => {
          console.error("Error fetching texture pack: ", TT)
        })).finally((() => {
          vT(!1)
        })))
      }), [NT, MT, tT]), (0, DT.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, DT.jsx)("div", {
          className: "SectionTitle",
          children: OT("customTexturePack:customTexturePack")
        }), (0, DT.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, DT.jsx)("div", {
            className: jT()("TexturePack", {
              Selected: null === fT && !CT,
              Disabled: !hT
            }),
            onClick: () => {
              hT && (xT(null), cT(null), AT(null))
            },
            children: (0, DT.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(nT.r).map((TT => (0, DT.jsx)(iT.f, {
            id: TT,
            isSelected: TT === fT,
            setSelected: QT,
            disabled: !hT
          }, TT)))]
        }), fT === nT.r.CUSTOM && (0, DT.jsx)(qT.e, {
          folderName: IT,
          onTexturePackUpdated: QT,
          disabled: !hT,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Tk = cT(4993);

    function kk(TT) {
      var kT;
      let {
        gameCategory: cT,
        setGameCategory: lT,
        disabled: MT
      } = TT;
      const OT = null !== (kT = (0, vT.X)(cT)) && void 0 !== kT ? kT : "other";
      return (0, DT.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, DT.jsx)(NT.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: MT,
          children: (0, DT.jsx)(QT.d, {
            options: vT.Q.map((TT => ({
              value: TT,
              label: vT.P[TT]
            }))),
            value: OT,
            onChange: TT => {
              TT.value !== OT && lT(vT.N[TT.value][0])
            }
          })
        }), (0, DT.jsx)(NT.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: MT,
          children: (0, DT.jsx)("div", {
            className: "GameCategoryOptions",
            children: vT.N[OT].map((TT => (0, DT.jsx)(KT.P, {
              active: TT === cT,
              onClick: () => {
                lT(TT)
              },
              children: (0, vT.W)(TT)
            }, TT)))
          })
        })]
      })
    }

    function ck(TT) {
      let {
        editor: kT,
        onClose: cT
      } = TT;
      const {
        t: lT
      } = (0, yT.B)(), {
        schematicData: MT,
        updateSchematicData: KT,
        publishFormEnabled: fT,
        formEnabled: xT
      } = kT;
      return (0, DT.jsxs)(DT.Fragment, {
        children: [(0, DT.jsxs)(aT, {
          icon: "pen-to-square",
          title: lT("worldBuilder:basicsSection"),
          disabled: !xT,
          children: [(0, DT.jsx)(FT, {
            label: lT("general:name"),
            caption: lT("worldBuilder:schematicNameTagsHint"),
            children: (0, DT.jsx)(OT.b, {
              className: "SchematicPageName",
              defaultValue: MT.name,
              onValueChange: TT => KT("name", TT),
              placeholderText: lT("worldBuilder:schematicNamePlaceholder"),
              maxLength: AT.zb
            })
          }), (0, DT.jsx)(FT, {
            label: lT("general:description"),
            children: (0, DT.jsx)(OT.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: MT.description,
              onValueChange: TT => KT("description", TT),
              placeholderText: lT("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: AT.vb
            })
          }), (0, DT.jsx)(kk, {
            gameCategory: MT.gameCategory,
            setGameCategory: TT => KT("gameCategory", TT),
            disabled: !fT
          }), !0 === MT.gamePublished && (0, DT.jsx)(YT, {
            schematicData: MT,
            updateSchematicData: KT,
            publishFormEnabled: fT,
            onClose: function() {
              null === cT || void 0 === cT || cT()
            }
          })]
        }), (0, DT.jsx)(PT, {
          schematicData: MT,
          updateSchematicData: KT,
          publishFormEnabled: fT,
          formEnabled: xT
        }), !0 === MT.gamePublished && (0, DT.jsx)(aT, {
          icon: "palette",
          title: lT("worldBuilder:texturePackSection"),
          disabled: !xT,
          children: (0, DT.jsx)(sT, {
            schematicData: MT,
            setTexturePack: kT.setTexturePack,
            initializeTexturePack: kT.initializeTexturePack,
            publishFormEnabled: fT
          })
        })]
      })
    }

    function lk(TT) {
      let {
        editor: kT
      } = TT;
      const {
        t: cT
      } = (0, yT.B)(), {
        schematicData: lT,
        formEnabled: MT,
        hasUnsavedChanges: OT
      } = kT, AT = MT && OT;
      return (0, DT.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [MT && OT && (0, DT.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, DT.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), cT("worldBuilder:unsavedChanges")]
        }), (0, DT.jsx)(xT.c, {
          tooltipInner: (0, DT.jsx)("div", {
            className: "SaveButtonTooltip",
            children: cT(MT && !OT ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, DT.jsxs)(KT.e, {
            className: "SaveChangesButton",
            onClick: () => kT.saveSchematic(lT.gamePublished),
            disabled: !AT,
            children: [(0, DT.jsxs)("span", {
              className: MT ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, DT.jsx)(IT.e, {
                name: "wrench"
              }), " ", cT("worldBuilder:saveChanges")]
            }), !MT && (0, DT.jsx)(fT.d, {})]
          })
        })]
      })
    }

    function Mk(TT) {
      let {
        schematic: kT,
        onSchematicUpdate: cT,
        onClose: MT,
        inSourceWorld: OT
      } = TT;
      const {
        t: fT
      } = (0, yT.B)();

      function xT() {
        null === MT || void 0 === MT || MT()
      }
      const IT = (0, Tk.c)(kT, {
        onNavigateAway: xT,
        inSourceWorld: OT
      });
      return (0, lT.useEffect)((() => {
        null === cT || void 0 === cT || cT(IT.schematicData)
      }), [IT.schematicData, cT]), (0, DT.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, DT.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, DT.jsx)(KT.b, {
            onClick: xT,
            children: fT("worldBuilder:back")
          }), (0, DT.jsx)(aT, {
            icon: "rocket-launch",
            title: fT("worldBuilder:actionsSection"),
            disabled: !IT.formEnabled,
            children: (0, DT.jsx)(wT.d, {
              editor: IT
            })
          }), (0, DT.jsx)(ck, {
            editor: IT,
            onClose: xT
          })]
        }), (0, DT.jsx)(lk, {
          editor: IT
        })]
      })
    }

    function Kk(TT) {
      let {
        schematic: kT,
        onSchematicUpdate: cT,
        onClose: lT,
        inSourceWorld: KT
      } = TT;
      MT.NotificationProvider.showCustomPopup({
        body: TT => (0, DT.jsx)(Mk, {
          schematic: kT,
          onSchematicUpdate: cT,
          onClose: TT,
          inSourceWorld: KT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: lT,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4905: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1195),
      OT = cT(1061),
      yT = cT(1470),
      fT = cT(1379),
      xT = cT(1348),
      IT = cT(1099);

    function AT(TT) {
      let {
        editor: kT,
        className: cT
      } = TT;
      const {
        t: lT
      } = (0, KT.B)(), {
        schematicData: AT,
        formEnabled: CT,
        publishFormEnabled: jT
      } = kT, vT = !CT || !jT;
      return (0, IT.jsxs)("div", {
        className: MT()("PublishButtonContainer", cT),
        children: [kT.canEditSourceWorld && (0, IT.jsxs)(yT.e, {
          onClick: kT.editSourceWorld,
          disabled: vT,
          children: [(0, IT.jsx)(OT.e, {
            name: "edit"
          }), " ", lT("worldBuilder:editSourceWorld")]
        }), !AT.gamePublished && (0, IT.jsx)(fT.c, {
          tooltipInner: (0, IT.jsx)("div", {
            className: "PublishButtonTooltip",
            children: lT("worldBuilder:publishAsGameDescription")
          }),
          children: (0, IT.jsxs)(yT.m, {
            onClick: () => kT.saveSchematic(!0),
            disabled: vT,
            children: [(0, IT.jsx)(OT.e, {
              name: "rocket-launch"
            }), " ", lT("worldBuilder:publishAsGame"), " ", (0, IT.jsx)(OT.e, {
              name: "info-circle"
            })]
          })
        }), !0 === AT.gamePublished && (0, IT.jsxs)(IT.Fragment, {
          children: [(0, IT.jsx)(fT.c, {
            tooltipInner: (0, IT.jsx)("div", {
              className: "PublishButtonTooltip",
              children: lT("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, IT.jsxs)(yT.I, {
              onClick: kT.unpublishSchematic,
              disabled: vT,
              children: [(0, IT.jsx)(OT.e, {
                name: "rocket-launch"
              }), " ", lT("worldBuilder:unpublishAsGame"), " ", (0, IT.jsx)(OT.e, {
                name: "info-circle"
              })]
            })
          }), (0, IT.jsxs)(yT.e, {
            onClick: kT.playGame,
            disabled: vT,
            children: [(0, IT.jsx)(OT.e, {
              name: "joystick"
            }), " ", lT("general:playGame")]
          })]
        }), !CT && (0, IT.jsx)(xT.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4939: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(1202);
    async function MT(TT) {
      const kT = await fetch(`${lT.clientSideServerUrls.s3Url}/${TT}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === kT.status || 403 === kT.status) return null;
      if (!kT.ok) throw new Error(`Failed to download the texture pack (${kT.status})`);
      return await kT.json()
    }
  },
  4993: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => hT
    });
    var lT = cT(71),
      MT = cT(1333),
      KT = cT(1018),
      OT = cT(184),
      yT = cT(1559),
      fT = cT(31),
      xT = cT(1953),
      IT = cT(1518),
      AT = cT(4566),
      CT = cT(1363),
      jT = cT(1130),
      vT = cT(1530);

    function tT(TT, kT) {
      return {
        schematicId: TT.schematicId,
        name: TT.name,
        description: TT.description,
        gamePublished: kT,
        gameCategory: TT.gameCategory,
        defaultGamemode: TT.defaultGamemode,
        voidDeathHeight: TT.voidDeathHeight,
        disableKeepInventory: TT.disableKeepInventory,
        disableTpRequests: TT.disableTpRequests,
        disableLobbySpawn: TT.disableLobbySpawn,
        disableMobs: TT.disableMobs,
        disableSpawnProtection: TT.disableSpawnProtection,
        disableFallDamage: TT.disableFallDamage,
        worldBorder: TT.worldBorder,
        hideLobbyCode: TT.hideLobbyCode,
        enableSmpMarketplace: TT.enableSmpMarketplace,
        enableSurvivalGuns: TT.enableSurvivalGuns,
        enableSpawnReset: TT.enableSpawnReset,
        enableDayNight: TT.enableDayNight,
        persistWorld: TT.persistWorld,
        persistInventory: TT.persistInventory
      }
    }

    function hT(TT) {
      let {
        onNavigateAway: kT,
        inSourceWorld: cT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: hT
      } = (0, jT.b)(), NT = (0, vT.useNavigatePreserveSearch)(), [QT, ST] = (0, lT.useState)({
        ...TT
      }), [DT, aT] = (0, lT.useState)("Enter"), [FT, rT] = (0, lT.useState)(void 0), PT = (0, lT.useRef)(tT(TT, TT.gamePublished)), wT = (0, lT.useRef)(void 0), mT = "Enter" === DT, bT = hT.playerHasRank("developer") || hT.playerHasRank("admin") || "Enter" === DT && !1 !== QT.schematicContainsSpawnBlock, zT = void 0 !== FT && FT !== wT.current || JSON.stringify(tT(QT, QT.gamePublished)) !== JSON.stringify(PT.current);

      function JT(TT, kT) {
        ST((cT => ({
          ...cT,
          [TT]: kT
        })))
      }
      const oT = (0, lT.useCallback)((TT => {
        wT.current = TT, rT(TT)
      }), []);

      function HT(TT) {
        aT("Loading");
        const kT = tT(QT, TT),
          cT = FT !== wT.current ? FT : void 0;
        IT.d.updateSchematic(hT, kT, cT).then((cT => {
          let {
            customTexturePackKey: lT
          } = cT;
          aT("Success"), JT("customTexturePackKey", lT), PT.current = kT, wT.current = void 0, rT(void 0), setTimeout((() => {
            JT("gamePublished", TT), aT("Enter")
          }), 1e3)
        })).catch((TT => {
          var kT;
          (console.error("Failed to save schematic:", TT), aT("Error"), TT instanceof OT.c && TT.errorMessageForUser) && CT.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: TT.errorMessageForUser,
            textOpts: {
              subtitle: null !== (kT = TT.errorMessageTranslationParams) && void 0 !== kT ? kT : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            aT("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: QT,
        updateSchematicData: JT,
        setTexturePack: rT,
        initializeTexturePack: oT,
        updateState: DT,
        formEnabled: mT,
        publishFormEnabled: bT,
        hasUnsavedChanges: zT,
        canEditSourceWorld: !cT,
        saveSchematic: HT,
        unpublishSchematic: function() {
          CT.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((TT => {
            !0 === TT && HT(!1)
          }))
        },
        editSourceWorld: function() {
          aT("Loading"), AT.c.getSourceWorld(QT.schematicId).then((TT => {
            xT.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, fT.l)("other"), NT((0, MT.c)("classic", TT)), null === kT || void 0 === kT || kT()
          })).catch((TT => {
            console.error("Failed to get source world:", TT), aT("Error"), setTimeout((() => {
              aT("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          xT.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), NT((0, yT.x)((0, KT.s)(QT.schematicId), QT)), null === kT || void 0 === kT || kT()
        }
      }
    }
  },
  4893: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);