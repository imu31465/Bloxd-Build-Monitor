export const id = 107;
export const ids = [107];
export const modules = {
  5041: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT,
      f: () => jT,
      i: () => LT
    });
    mT(5045);
    var WT = mT(1288),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(1475),
      nT = (mT(63), mT(4468)),
      HT = mT(1135),
      kT = mT(1188);

    function jT(TT) {
      let {
        children: UT,
        label: mT,
        className: zT,
        circleInfoText: nT,
        disabled: jT,
        onLabelClick: lT
      } = TT;
      const {
        t: LT
      } = (0, WT.z)(), pT = (0, kT.jsxs)("div", {
        className: MT()("Label", {
          ClickableLabel: void 0 !== lT
        }),
        onClick: lT,
        children: [LT(mT), nT && (0, kT.jsx)(HT.c, {
          name: "circle-info"
        })]
      });
      return (0, kT.jsxs)("div", {
        className: MT()("LabeledInput", {
          [zT]: zT,
          DisabledLabelInput: jT
        }),
        children: [nT && (0, kT.jsx)(gT.e, {
          tooltipInner: (0, kT.jsx)("div", {
            className: "LabeledInputTooltip",
            children: LT(nT)
          }),
          children: pT
        }), !nT && pT, UT]
      })
    }

    function lT(TT) {
      let {
        checked: UT,
        setChecked: mT
      } = TT;
      return (0, kT.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: TT => {
          mT(!UT)
        },
        children: (0, kT.jsx)(nT.d, {
          checked: UT,
          onChange: TT => {
            mT(TT.target.checked)
          },
          disabled: !1
        })
      })
    }

    function LT(TT) {
      let {
        checked: UT,
        setChecked: mT,
        disabled: WT
      } = TT;
      return (0, kT.jsx)("div", {
        className: MT()("SwitchContainer", {
          SwitchContainerDisabled: WT
        }),
        onClick: () => {
          WT || mT(!UT)
        },
        children: (0, kT.jsx)(nT.d, {
          className: "SwitchCheckbox",
          checked: UT,
          onChange: TT => {
            mT(TT.target.checked)
          },
          disabled: !!WT
        })
      })
    }
  },
  5048: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(4719),
      gT = mT(1288),
      nT = mT(1188);
    const HT = [...MT.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function kT(TT) {
      const {
        disabled: UT,
        hideWrapper: mT
      } = TT, {
        t: WT
      } = (0, gT.z)(), kT = TT.advancedMode ? HT.map((UT => [UT, TT.callbacks[UT]])) : MT.k.map((UT => [UT, TT.callbacks[UT]])), lT = (0, nT.jsx)("div", {
        className: zT()("PluginsGrid", {
          SectionBody: !mT
        }),
        children: kT.map((TT => {
          let [mT, WT] = TT;
          return (0, nT.jsx)(jT, {
            plugin: mT,
            callbacks: WT,
            disabled: UT
          }, mT)
        }))
      });
      return mT ? lT : (0, nT.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, nT.jsx)("div", {
          className: "SectionTitle",
          children: WT("worldBuilder:pluginsSection")
        }), lT]
      })
    }

    function jT(TT) {
      let {
        plugin: UT,
        callbacks: {
          isEnabled: mT,
          Qy: WT
        },
        disabled: MT
      } = TT;
      const {
        t: HT
      } = (0, gT.z)(), kT = mT();
      return (0, nT.jsxs)("div", {
        className: zT()("PluginCard", {
          PluginCardEnabled: kT,
          PluginCardDisabledForm: MT
        }),
        "data-pad-focusable": !0,
        "aria-disabled": MT || void 0,
        onClick: () => {
          MT || WT(!kT)
        },
        children: [(0, nT.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, nT.jsx)("img", {
            src: `/textures/games/classic/customGames/${UT}.png`,
            alt: UT
          })
        }), (0, nT.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, nT.jsx)("div", {
            className: "PluginCardTitle",
            children: HT(lT[UT])
          }), (0, nT.jsx)("div", {
            className: "PluginCardDescription",
            children: HT(LT[UT])
          })]
        }), (0, nT.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: HT(kT ? "general:on" : "general:off")
        })]
      })
    }
    const lT = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      LT = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5038: (TT, UT, mT) => {
    mT.d(UT, {
      f: () => zU,
      c: () => WU,
      d: () => mU,
      i: () => MU
    });
    var WT = mT(63),
      zT = mT(1457),
      MT = mT(1569),
      gT = mT(1792),
      nT = mT(1288),
      HT = mT(1446),
      kT = mT(1475),
      jT = mT(1135),
      lT = mT(1321),
      LT = mT(1126),
      pT = mT.n(LT),
      BT = mT(351),
      ZT = mT(4719),
      cT = mT(1336),
      vT = mT(5041),
      fT = mT(3267),
      qT = mT(5048),
      iT = mT(1188);

    function bT(TT) {
      let {
        icon: UT,
        title: mT,
        disabled: WT,
        children: zT
      } = TT;
      return (0, iT.jsxs)("div", {
        className: pT()("ManageCard", {
          ManageCardDisabled: WT
        }),
        children: [(0, iT.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, iT.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, iT.jsx)(jT.c, {
              name: UT
            })
          }), (0, iT.jsx)("div", {
            children: (0, iT.jsx)("h2", {
              className: "ManageCardTitle",
              children: mT
            })
          })]
        }), (0, iT.jsxs)("div", {
          className: "ManageCardBody",
          children: [zT, WT && (0, iT.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function OT(TT) {
      let {
        label: UT,
        caption: mT,
        children: WT
      } = TT;
      return (0, iT.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, iT.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: UT
        }), WT, mT && (0, iT.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: mT
        })]
      })
    }

    function eT(TT) {
      let {
        label: UT,
        caption: mT,
        disabled: WT,
        children: zT
      } = TT;
      return (0, iT.jsxs)("div", {
        className: pT()("ManageField", {
          ManageFieldDisabled: WT
        }),
        children: [(0, iT.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, iT.jsx)("div", {
            className: "ManageFieldLabel",
            children: UT
          }), (0, iT.jsx)("div", {
            className: "ManageFieldCaption",
            children: mT
          })]
        }), (0, iT.jsx)("div", {
          className: "ManageFieldControl",
          children: zT
        })]
      })
    }

    function YT(TT) {
      var UT, mT;
      let {
        schematicData: WT,
        updateSchematicData: zT,
        publishFormEnabled: MT,
        formEnabled: gT
      } = TT;
      const {
        t: HT
      } = (0, nT.z)(), kT = !MT, jT = {
        tpRequests: {
          isEnabled: () => !WT.disableTpRequests,
          Qy: TT => zT("disableTpRequests", !TT)
        },
        spawnProtection: {
          isEnabled: () => !WT.disableSpawnProtection,
          Qy: TT => zT("disableSpawnProtection", !TT)
        },
        spawnReset: {
          isEnabled: () => !!WT.enableSpawnReset,
          Qy: TT => zT("enableSpawnReset", TT)
        },
        smpMarketplace: {
          isEnabled: () => !!WT.enableSmpMarketplace,
          Qy: TT => zT("enableSmpMarketplace", TT)
        },
        survivalGuns: {
          isEnabled: () => !!WT.enableSurvivalGuns,
          Qy: TT => zT("enableSurvivalGuns", TT)
        },
        fallDamage: {
          isEnabled: () => !WT.disableFallDamage,
          Qy: TT => zT("disableFallDamage", !TT)
        },
        dayNight: {
          isEnabled: () => !!WT.enableDayNight,
          Qy: TT => zT("enableDayNight", TT)
        }
      };
      return (0, iT.jsxs)(iT.Fragment, {
        children: [!1 === WT.schematicContainsSpawnBlock && (0, iT.jsx)("div", {
          className: "ManageWarningBanner",
          children: HT("worldBuilder:mustContainSpawnBlock")
        }), (0, iT.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, iT.jsxs)(bT, {
            icon: "globe",
            title: HT("worldBuilder:worldRulesSection"),
            disabled: !gT,
            children: [(0, iT.jsx)(eT, {
              label: HT("classic:defaultGamemode"),
              caption: HT("classic:defaultGamemodeDescription"),
              disabled: kT,
              children: (0, iT.jsx)(fT.d, {
                controlClassName: "ManageDropdown",
                options: ZT.C.map((TT => ({
                  value: TT,
                  label: BT.m[TT]
                }))),
                value: WT.defaultGamemode,
                onChange: TT => zT("defaultGamemode", TT.value)
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:voidDeathHeight"),
              caption: HT("classic:voidDeathHeightDescription"),
              disabled: kT,
              children: (0, iT.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, iT.jsx)("input", {
                  type: "number",
                  max: cT.E,
                  value: null !== (UT = WT.voidDeathHeight) && void 0 !== UT ? UT : "",
                  onChange: TT => {
                    const UT = parseInt(TT.target.value);
                    zT("voidDeathHeight", UT)
                  }
                }), (0, iT.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: HT("worldBuilder:blocksUnit")
                })]
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:worldBorder"),
              caption: HT("classic:worldBorderDescription"),
              disabled: kT,
              children: (0, iT.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, iT.jsx)("input", {
                  type: "number",
                  min: cT.K,
                  max: cT.F,
                  placeholder: HT("worldBuilder:noWorldBorderLimit"),
                  value: null !== (mT = WT.worldBorder) && void 0 !== mT ? mT : "",
                  onChange: TT => {
                    const UT = parseInt(TT.target.value);
                    zT("worldBorder", isNaN(UT) ? null : UT)
                  }
                }), (0, iT.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: HT("worldBuilder:blocksUnit")
                })]
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:disableMobs"),
              caption: HT("classic:disableMobsDescription"),
              disabled: kT,
              children: (0, iT.jsx)(vT.i, {
                checked: WT.disableMobs,
                setChecked: TT => zT("disableMobs", TT),
                disabled: kT
              })
            })]
          }), (0, iT.jsxs)(bT, {
            icon: "user-group",
            title: HT("worldBuilder:playerAndLobbySection"),
            disabled: !gT,
            children: [(0, iT.jsx)(eT, {
              label: HT("classic:disableKeepInventory"),
              caption: HT("classic:disableKeepInventoryDescription"),
              disabled: kT,
              children: (0, iT.jsx)(vT.i, {
                checked: WT.disableKeepInventory,
                setChecked: TT => zT("disableKeepInventory", TT),
                disabled: kT
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:persistInventory"),
              caption: HT("classic:persistInventoryDescription"),
              disabled: kT,
              children: (0, iT.jsx)(fT.d, {
                controlClassName: "ManageDropdown",
                options: ZT.n.map((TT => ({
                  value: TT,
                  label: BT.f[TT]
                }))),
                value: WT.persistInventory,
                onChange: TT => zT("persistInventory", TT.value)
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:persistWorld"),
              caption: HT("classic:persistWorldDescription"),
              disabled: kT,
              children: (0, iT.jsx)(vT.i, {
                checked: WT.persistWorld,
                setChecked: TT => zT("persistWorld", TT),
                disabled: kT
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:disableLobbySpawn"),
              caption: HT("classic:disableLobbySpawnDescription"),
              disabled: kT,
              children: (0, iT.jsx)(vT.i, {
                checked: WT.disableLobbySpawn,
                setChecked: TT => zT("disableLobbySpawn", TT),
                disabled: kT
              })
            }), (0, iT.jsx)(eT, {
              label: HT("classic:hideLobbyCode"),
              caption: HT("classic:hideLobbyCodeDescription"),
              disabled: kT,
              children: (0, iT.jsx)(vT.i, {
                checked: WT.hideLobbyCode,
                setChecked: TT => zT("hideLobbyCode", TT),
                disabled: kT
              })
            })]
          })]
        }), (0, iT.jsx)(bT, {
          icon: "layer-group",
          title: HT("worldBuilder:pluginsSection"),
          disabled: !gT,
          children: (0, iT.jsx)(qT.c, {
            callbacks: jT,
            disabled: kT,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var JT = mT(5051),
      xT = mT(4468),
      dT = mT(1613),
      wT = mT(3582),
      tT = mT(1225),
      aT = mT(5013),
      yT = mT(5057),
      XT = mT(1576);
    const IT = 50,
      QT = .3;
    async function sT(TT) {
      const UT = await
      function(TT) {
        return new Promise(((UT, mT) => {
          const WT = new FileReader;
          WT.onload = () => UT(WT.result), WT.onerror = mT, WT.readAsDataURL(TT)
        }))
      }(TT), mT = await
      function(TT) {
        return new Promise(((UT, mT) => {
          const WT = new Image;
          WT.onload = () => UT(WT), WT.onerror = () => mT(new Error("Failed to load image")), WT.src = TT
        }))
      }(UT);
      if (mT.naturalHeight > mT.naturalWidth) throw new FT;
      const WT = 1024 * IT,
        {
          dataUrl: zT,
          finalQuality: MT
        } = function(TT, UT) {
          const mT = document.createElement("canvas");
          mT.width = TT.naturalWidth, mT.height = TT.naturalHeight, mT.getContext("2d").drawImage(TT, 0, 0);
          let WT = .92,
            zT = mT.toDataURL("image/jpeg", WT);
          for (; .75 * zT.length > UT && WT > .05;) WT -= .05, zT = mT.toDataURL("image/jpeg", WT);
          return {
            dataUrl: zT,
            finalQuality: WT
          }
        }(mT, WT);
      if (Math.ceil(.75 * zT.length) > WT) throw new PT;
      return {
        base64Jpg: zT,
        heavilyCompressed: MT < QT
      }
    }
    class FT extends Error {}
    class PT extends Error {}
    var VT = function(TT) {
      return TT[TT.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", TT[TT.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", TT
    }(VT || {});

    function uT(TT) {
      var UT;
      let {
        schematicId: mT,
        hasReadUploadPolicy: zT,
        onPolicyValidationError: HT,
        onThumbnailReady: kT
      } = TT;
      const {
        t: LT
      } = (0, nT.z)(), [BT, ZT] = (0, WT.useState)(null), [cT, vT] = (0, WT.useState)(""), [fT, qT] = (0, WT.useState)(""), [bT, OT] = (0, WT.useState)(!0), [eT, YT] = (0, WT.useState)(!1), JT = (0, WT.useRef)(!1), [xT, dT] = (0, WT.useState)(null), [wT, tT] = (0, WT.useState)(!1), [aT, XT] = (0, WT.useState)(!1), IT = (0, WT.useRef)(0), {
        getRootProps: QT,
        getInputProps: VT,
        isDragActive: uT
      } = (0, yT.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async TT => {
          if (0 === TT.length) return;
          const UT = TT[0],
            mT = ++IT.current;
          dT(null), tT(!1), ZT(null), vT(UT.name);
          try {
            const TT = await sT(UT);
            if (mT !== IT.current) return;
            ZT(TT), tT(TT.heavilyCompressed)
          } catch (WT) {
            if (mT !== IT.current) return;
            dT(LT(WT instanceof FT ? "thumbnail:portraitImagesNotAllowed" : WT instanceof PT ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), CT = cT.length <= 30 ? cT : `${cT.slice(0,27)}...`, rT = null !== (UT = null === BT || void 0 === BT ? void 0 : BT.base64Jpg) && void 0 !== UT ? UT : null, KT = fT.trim(), ST = KT.length >= lT.o && KT.length <= lT.m, GT = aT && !BT && !xT, NT = aT && !ST;
      return (0, iT.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, iT.jsxs)("div", {
          ...QT({
            className: pT()("ThumbnailUploadDropzone", {
              ActiveDrag: uT,
              ValidationError: GT
            })
          }),
          children: [(0, iT.jsx)("input", {
            ...VT()
          }), !uT && rT ? (0, iT.jsxs)(iT.Fragment, {
            children: [(0, iT.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, iT.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, iT.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, iT.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, iT.jsx)("img", {
                    src: rT,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, iT.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, iT.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, iT.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, iT.jsx)("img", {
                    src: rT,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, iT.jsxs)("div", {
              children: [(0, iT.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: CT
              }), (0, iT.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: LT("thumbnail:preview")
              })]
            })]
          }) : (0, iT.jsxs)(iT.Fragment, {
            children: [(0, iT.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, iT.jsx)(jT.c, {
                name: "image"
              })
            }), (0, iT.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: LT("thumbnail:dragImageHere")
            })]
          })]
        }), GT && (0, iT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LT("thumbnail:imageRequired")
        }), (0, iT.jsx)(gT.e, {
          className: pT()("ThumbnailUploadNameInput", {
            ValidationError: NT
          }),
          placeholderText: LT("thumbnail:thumbnailName"),
          defaultValue: fT,
          onValueChange: TT => {
            qT(TT)
          },
          maxLength: lT.m
        }), NT && (0, iT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LT("thumbnail:nameRequired", {
            min: lT.o,
            max: lT.m
          })
        }), (0, iT.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, iT.jsx)("input", {
            type: "checkbox",
            checked: bT,
            onChange: TT => {
              OT(TT.target.checked)
            }
          }), LT("thumbnail:setAsThumbnailOnceApproved")]
        }), wT && (0, iT.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: LT("thumbnail:heavyCompressionWarning")
        }), xT && (0, iT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: xT
        }), (0, iT.jsx)(MT.l, {
          disabled: eT,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (XT(!0), !JT.current && BT && ST && zT) {
              JT.current = !0, YT(!0), dT(null);
              try {
                await kT(BT.base64Jpg, KT, bT ? mT : null)
              } catch (TT) {
                dT(TT.errorMessageForUser ? LT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : LT("thumbnail:failedToUploadImage"))
              } finally {
                JT.current = !1, YT(!1)
              }
            } else zT || HT()
          },
          children: LT(eT ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const CT = 2e3;

    function rT(TT) {
      let {
        schematicId: UT,
        ownedThumbnailCount: mT,
        onClose: zT,
        onThumbnailReady: MT
      } = TT;
      const {
        t: gT
      } = (0, nT.z)(), {
        userContext: HT
      } = (0, tT.d)(), [kT, LT] = (0, WT.useState)(!1), [BT, ZT] = (0, WT.useState)(!1), [cT, vT] = (0, WT.useState)(!1), fT = (0, WT.useRef)();
      (0, WT.useEffect)((() => () => {
        clearTimeout(fT.current)
      }), []);
      const qT = function(TT, UT) {
        const mT = [];
        return TT.isLoggedIn() || mT.push(VT.NOT_LOGGED_IN), UT >= lT.bb && mT.push(VT.THUMBNAIL_LIMIT_REACHED), mT
      }(HT, mT);
      if (qT.length > 0) {
        const TT = {
          [VT.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [VT.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: lT.bb
            }
          }
        };
        return (0, iT.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, iT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gT("thumbnail:cannotUploadThumbnail")
          }), qT.map(((UT, mT) => {
            const WT = TT[UT];
            return (0, iT.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, iT.jsx)(jT.c, {
                name: "triangle-exclamation"
              }), (0, iT.jsx)("span", {
                children: gT(WT.key, WT.params)
              })]
            }, mT)
          }))]
        })
      }
      return (0, iT.jsxs)("div", {
        className: pT()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: kT
        }),
        children: [kT && (0, iT.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, iT.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, iT.jsx)(jT.c, {
              name: "check"
            }), (0, iT.jsx)(XT.b, {})]
          }), (0, iT.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: gT("thumbnail:thumbnailUploaded")
          })]
        }), (0, iT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: gT("thumbnail:uploadThumbnail")
        }), (0, iT.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, iT.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, iT.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: gT("thumbnail:chooseImage", {
                maxSizeKb: IT
              })
            }), (0, iT.jsx)(uT, {
              schematicId: UT,
              hasReadUploadPolicy: BT,
              onPolicyValidationError: () => {
                vT(!0)
              },
              onThumbnailReady: async (TT, UT, mT) => {
                await MT(TT, UT, mT), LT(!0), fT.current = setTimeout(zT, CT)
              }
            })]
          }), (0, iT.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, iT.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: gT("thumbnail:uploadPolicy")
            }), (0, iT.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "check"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyFollowGuidelines")
                })]
              }), (0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "check"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyInGameAssets")
                })]
              }), (0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "check"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyLimitText")
                })]
              }), (0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "x"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyCopyrightContent")
                })]
              }), (0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "x"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "x"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyBloxdTags")
                })]
              }), (0, iT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iT.jsx)(jT.c, {
                  name: "x"
                }), (0, iT.jsx)("span", {
                  children: gT("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, iT.jsxs)("label", {
              className: pT()("ThumbnailUploadCheckbox Policy", {
                ValidationError: cT && !BT
              }),
              children: [(0, iT.jsx)("input", {
                type: "checkbox",
                checked: BT,
                onChange: TT => {
                  ZT(TT.target.checked)
                }
              }), gT("thumbnail:agreeToUploadPolicy")]
            }), cT && !BT && (0, iT.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: gT("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var KT = mT(1302);
    const ST = {
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

    function GT(TT) {
      var UT, mT;
      let {
        schematicData: gT,
        updateSchematicData: kT,
        publishFormEnabled: lT,
        onClose: LT
      } = TT;
      const {
        t: BT
      } = (0, nT.z)(), {
        userContext: ZT,
        isUserContextUpdating: cT
      } = (0, tT.d)(), vT = (0, wT.c)(), [fT, qT] = (0, WT.useState)([]), [bT, OT] = (0, WT.useState)([]), [eT, YT] = (0, WT.useState)(!0), [JT, xT] = (0, WT.useState)(null !== (UT = gT.customThumbnailId) && void 0 !== UT ? UT : null), [yT, XT] = (0, WT.useState)(null), IT = (0, WT.useRef)(null !== (mT = gT.customThumbnailId) && void 0 !== mT ? mT : null), QT = (0, WT.useRef)(0), sT = (0, WT.useRef)(null), FT = (0, WT.useRef)(null), PT = (0, WT.useRef)(null), VT = (0, WT.useRef)(!1);

      function uT(TT, UT) {
        PT.current && (clearTimeout(PT.current), PT.current = null), XT(TT), null !== TT && UT && (PT.current = setTimeout((() => {
          XT(null), PT.current = null
        }), 5e3))
      }(0, WT.useEffect)((() => () => {
        clearTimeout(FT.current), clearTimeout(PT.current)
      }), []);
      const CT = (0, WT.useCallback)((() => {
        YT(!0), dT.b.getOwnedThumbnails(ZT).then((TT => {
          const UT = [],
            mT = [];
          for (const WT of TT.thumbnails) WT.rejectionPolicyId ? UT.push(WT) : mT.push(WT);
          UT.sort(((TT, UT) => TT.lastUpdatedAt - UT.lastUpdatedAt)), mT.sort(((TT, UT) => {
            const mT = TT.approved ? 1 : 0,
              WT = (UT.approved ? 1 : 0) - mT;
            return 0 !== WT ? WT : UT.lastUpdatedAt - TT.lastUpdatedAt
          })), OT(UT), qT(mT)
        })).catch((TT => {
          console.error("Failed to fetch thumbnails:", TT)
        })).finally((() => {
          YT(!1)
        }))
      }), [ZT]);
      async function ST(TT, UT, mT) {
        return dT.b.uploadSchematicThumbnail(ZT, TT, UT, mT).then((() => {
          uT({
            text: BT("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), CT()
        }))
      }

      function GT() {
        QT.current = Date.now(), FT.current = null;
        const TT = sT.current;
        sT.current = null, uT({
          text: BT("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), dT.b.setSchematicThumbnail(ZT, gT.schematicId, TT).then((() => {
          vT.current && (uT({
            text: BT("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), IT.current = TT, kT("customThumbnailId", TT), kT("customThumbnailBlurhash", void 0), kT("customThumbnailVariants", void 0))
        })).catch((TT => {
          vT.current && (uT({
            text: TT.errorMessageForUser ? BT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : BT("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), xT(IT.current))
        }))
      }

      function hT(TT) {
        xT(TT), sT.current = TT;
        const UT = Date.now() - QT.current;
        UT >= 1e3 ? GT() : (uT({
          text: BT("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), FT.current || (FT.current = setTimeout((() => {
          GT()
        }), 1e3 - UT)))
      }
      return (0, WT.useEffect)((() => {
        !1 === cT && CT()
      }), [cT, CT]), bT.length > 0 ? (0, iT.jsx)(NT, {
        rejectedThumbnails: bT,
        userContext: ZT,
        isMountedRef: vT,
        onAcknowledged: CT
      }) : (0, iT.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, iT.jsxs)("div", {
          className: "SectionTitle",
          children: [BT("thumbnail:gameThumbnail"), yT && (0, iT.jsx)("span", {
            className: pT()("ThumbnailActionMsg", `ThumbnailActionMsg--${yT.type}`),
            children: yT.text
          })]
        }), (0, iT.jsx)("div", {
          className: "SectionBody",
          children: (0, iT.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, iT.jsxs)("div", {
              className: pT()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === JT
              }),
              onClick: () => hT(null),
              children: [(0, iT.jsx)(aT.c, {
                game: {
                  schematicId: gT.schematicId,
                  imageBlurhash: gT.imageBlurhash
                }
              }), (0, iT.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: BT("general:default")
              })]
            }), eT && (0, iT.jsx)(HT.c, {}), fT.map(((TT, UT) => (0, iT.jsxs)("div", {
              className: pT()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: JT === TT.id,
                ThumbnailGridItemPending: !TT.approved
              }),
              onClick: () => {
                TT.approved && hT(TT.id)
              },
              children: [TT.approved && (0, iT.jsx)("img", {
                src: `${KT.clientSideServerUrls.s3Url}/customThumbnails/${TT.id}.jpg`,
                alt: "Thumbnail"
              }), TT.approved && (0, iT.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: TT.name
              }), TT.id && (0, iT.jsx)(MT.I, {
                className: "ThumbnailDeleteButton",
                onClick: UT => async function(TT, UT, mT) {
                  TT.stopPropagation();
                  const WT = await zT.NotificationProvider.showCustomPopup({
                      body: TT => (0, iT.jsx)(ET, {
                        thumbnailId: UT,
                        thumbnailName: mT,
                        onClose: UT => {
                          UT && (VT.current = !0), TT()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: LT
                    }).getResult(),
                    MT = VT.current;
                  VT.current = !1, MT && !0 === WT && (vT.current && uT({
                    text: BT("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), dT.b.deleteSchematicThumbnail(ZT, UT).then((() => {
                    vT.current && (uT({
                      text: BT("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), IT.current === UT && hT(null), CT())
                  })).catch((TT => {
                    vT.current && uT({
                      text: TT.errorMessageForUser ? BT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : BT("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(UT, TT.id, TT.name),
                children: (0, iT.jsx)(jT.c, {
                  name: "trash-can"
                })
              }), !TT.approved && (0, iT.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, iT.jsx)(jT.c, {
                  name: "hourglass-clock"
                })
              }), !TT.approved && (0, iT.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [TT.name, (0, iT.jsx)("br", {}), BT("thumbnail:pendingApproval")]
              })]
            }, UT))), (0, iT.jsxs)("div", {
              className: pT()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !lT
              }),
              onClick: () => {
                lT && function(TT) {
                  let {
                    schematicId: UT,
                    ownedThumbnailCount: mT,
                    onThumbnailReady: WT,
                    onClose: MT
                  } = TT;
                  zT.NotificationProvider.showCustomPopup({
                    body: TT => (0, iT.jsx)(rT, {
                      schematicId: UT,
                      ownedThumbnailCount: mT,
                      onClose: TT,
                      onThumbnailReady: WT
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: MT,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: gT.schematicId,
                  ownedThumbnailCount: fT.length,
                  onThumbnailReady: ST,
                  onClose: LT
                })
              },
              children: [(0, iT.jsx)(jT.c, {
                name: "plus"
              }), (0, iT.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: BT("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function NT(TT) {
      let {
        rejectedThumbnails: UT,
        userContext: mT,
        isMountedRef: zT,
        onAcknowledged: gT
      } = TT;
      const {
        t: kT
      } = (0, nT.z)(), [lT, LT] = (0, WT.useState)(!1), [pT, BT] = (0, WT.useState)(!1), ZT = function(TT) {
        const UT = new Map;
        for (const mT of TT) {
          const TT = mT.rejectionPolicyId,
            WT = UT.get(TT);
          WT ? WT.push(mT) : UT.set(TT, [mT])
        }
        return UT
      }(UT);
      return (0, iT.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, iT.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, iT.jsx)(jT.c, {
            name: "triangle-exclamation"
          }), " ", kT("thumbnail:thumbnailsRejected"), " ", (0, iT.jsx)(jT.c, {
            name: "triangle-exclamation"
          })]
        }), (0, iT.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: kT("thumbnail:thumbnailsRejectedDescription")
        }), (0, iT.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...ZT.entries()].map((TT => {
            let [UT, mT] = TT;
            const WT = ST[UT];
            return (0, iT.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, iT.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: mT.map((TT => (0, iT.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, iT.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, iT.jsx)(jT.c, {
                      name: "image-slash"
                    })
                  }), (0, iT.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, iT.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: TT.name
                    })
                  })]
                }, TT.id)))
              }), (0, iT.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [kT("thumbnail:rejectionReason"), " ", WT ? kT(WT.reason) : UT]
              }), WT && (0, iT.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: WT.tips.map((TT => (0, iT.jsx)("li", {
                  children: kT(TT)
                }, TT)))
              })]
            }, UT)
          }))
        }), (0, iT.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, iT.jsx)(xT.d, {
            checked: lT,
            onChange: TT => LT(TT.target.checked),
            disabled: pT
          }), (0, iT.jsx)("span", {
            children: kT("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, iT.jsx)(MT.l, {
          onClick: async function() {
            BT(!0);
            const TT = await Promise.allSettled(UT.map((TT => dT.b.deleteSchematicThumbnail(mT, TT.id))));
            if (!zT.current) return;
            const WT = TT.filter((TT => "rejected" === TT.status));
            WT.length > 0 && console.error("Some rejected thumbnails failed to delete:", WT), gT()
          },
          disabled: !lT || pT,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: pT ? (0, iT.jsx)(HT.c, {}) : kT("general:accept")
        })]
      })
    }

    function ET(TT) {
      let {
        thumbnailId: UT,
        thumbnailName: mT,
        onClose: WT
      } = TT;
      const {
        t: zT
      } = (0, nT.z)();
      return (0, iT.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, iT.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: zT("thumbnail:deleteThumbnail")
        }), (0, iT.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, iT.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${KT.clientSideServerUrls.s3Url}/customThumbnails/${UT}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, iT.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: mT
          })]
        }), (0, iT.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: zT("thumbnail:deleteThumbnailConfirmation")
        }), (0, iT.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, iT.jsxs)(MT.I, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => WT(!0),
            children: [(0, iT.jsx)(jT.c, {
              name: "trash-can"
            }), " ", zT("general:delete")]
          }), (0, iT.jsx)(MT.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => WT(!1),
            children: zT("general:cancel")
          })]
        })]
      })
    }
    var hT = mT(2273),
      DT = mT(5078),
      oT = mT(5083),
      AT = mT(5130);

    function RT(TT) {
      let {
        schematicData: UT,
        setTexturePack: mT,
        initializeTexturePack: zT,
        publishFormEnabled: MT
      } = TT;
      const {
        t: gT
      } = (0, nT.z)(), [HT, kT] = (0, WT.useState)(null), [jT, lT] = (0, WT.useState)(null), [LT, BT] = (0, WT.useState)(!1), ZT = (0, wT.c)(), cT = MT && !LT, vT = UT.customTexturePackKey;

      function fT(TT) {
        var UT;
        kT(TT.metaData.id), lT(null !== (UT = TT.metaData.fromFolderName) && void 0 !== UT ? UT : null), (TT.metaData.id !== hT.n.CUSTOM || TT.metaData.fromFolderName) && mT(TT)
      }
      return (0, WT.useEffect)((() => {
        vT && (BT(!0), (0, DT.c)(vT).then((TT => {
          var UT;
          ZT.current && (TT ? (kT(TT.metaData.id), lT(null !== (UT = TT.metaData.fromFolderName) && void 0 !== UT ? UT : null), zT(TT)) : console.error(`No texture pack at ${vT}`))
        })).catch((TT => {
          console.error("Error fetching texture pack: ", TT)
        })).finally((() => {
          BT(!1)
        })))
      }), [vT, zT, ZT]), (0, iT.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, iT.jsx)("div", {
          className: "SectionTitle",
          children: gT("customTexturePack:customTexturePack")
        }), (0, iT.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, iT.jsx)("div", {
            className: pT()("TexturePack", {
              Selected: null === HT && !LT,
              Disabled: !cT
            }),
            onClick: () => {
              cT && (kT(null), mT(null), lT(null))
            },
            children: (0, iT.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(hT.n).map((TT => (0, iT.jsx)(oT.i, {
            id: TT,
            isSelected: TT === HT,
            setSelected: fT,
            disabled: !cT
          }, TT)))]
        }), HT === hT.n.CUSTOM && (0, iT.jsx)(AT.e, {
          folderName: jT,
          onTexturePackUpdated: fT,
          disabled: !cT,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var TU = mT(5164);

    function UU(TT) {
      var UT;
      let {
        gameCategory: mT,
        setGameCategory: WT,
        disabled: zT
      } = TT;
      const gT = null !== (UT = (0, BT._)(mT)) && void 0 !== UT ? UT : "other";
      return (0, iT.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, iT.jsx)(vT.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: zT,
          children: (0, iT.jsx)(fT.d, {
            options: BT.U.map((TT => ({
              value: TT,
              label: BT.R[TT]
            }))),
            value: gT,
            onChange: TT => {
              TT.value !== gT && WT(BT.L[TT.value][0])
            }
          })
        }), (0, iT.jsx)(vT.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: zT,
          children: (0, iT.jsx)("div", {
            className: "GameCategoryOptions",
            children: BT.L[gT].map((TT => (0, iT.jsx)(MT.L, {
              active: TT === mT,
              onClick: () => {
                WT(TT)
              },
              children: (0, BT.Z)(TT)
            }, TT)))
          })
        })]
      })
    }

    function mU(TT) {
      let {
        editor: UT,
        onClose: mT
      } = TT;
      const {
        t: WT
      } = (0, nT.z)(), {
        schematicData: zT,
        updateSchematicData: MT,
        publishFormEnabled: HT,
        formEnabled: kT
      } = UT;
      return (0, iT.jsxs)(iT.Fragment, {
        children: [(0, iT.jsxs)(bT, {
          icon: "pen-to-square",
          title: WT("worldBuilder:basicsSection"),
          disabled: !kT,
          children: [(0, iT.jsx)(OT, {
            label: WT("general:name"),
            caption: WT("worldBuilder:schematicNameTagsHint"),
            children: (0, iT.jsx)(gT.e, {
              className: "SchematicPageName",
              defaultValue: zT.name,
              onValueChange: TT => MT("name", TT),
              placeholderText: WT("worldBuilder:schematicNamePlaceholder"),
              maxLength: lT.zb
            })
          }), (0, iT.jsx)(OT, {
            label: WT("general:description"),
            children: (0, iT.jsx)(gT.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: zT.description,
              onValueChange: TT => MT("description", TT),
              placeholderText: WT("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: lT.xb
            })
          }), (0, iT.jsx)(UU, {
            gameCategory: zT.gameCategory,
            setGameCategory: TT => MT("gameCategory", TT),
            disabled: !HT
          }), !0 === zT.gamePublished && (0, iT.jsx)(GT, {
            schematicData: zT,
            updateSchematicData: MT,
            publishFormEnabled: HT,
            onClose: function() {
              null === mT || void 0 === mT || mT()
            }
          })]
        }), (0, iT.jsx)(YT, {
          schematicData: zT,
          updateSchematicData: MT,
          publishFormEnabled: HT,
          formEnabled: kT
        }), !0 === zT.gamePublished && (0, iT.jsx)(bT, {
          icon: "palette",
          title: WT("worldBuilder:texturePackSection"),
          disabled: !kT,
          children: (0, iT.jsx)(RT, {
            schematicData: zT,
            setTexturePack: UT.setTexturePack,
            initializeTexturePack: UT.initializeTexturePack,
            publishFormEnabled: HT
          })
        })]
      })
    }

    function WU(TT) {
      let {
        editor: UT
      } = TT;
      const {
        t: mT
      } = (0, nT.z)(), {
        schematicData: WT,
        formEnabled: zT,
        hasUnsavedChanges: gT
      } = UT, lT = zT && gT;
      return (0, iT.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [zT && gT && (0, iT.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, iT.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), mT("worldBuilder:unsavedChanges")]
        }), (0, iT.jsx)(kT.e, {
          tooltipInner: (0, iT.jsx)("div", {
            className: "SaveButtonTooltip",
            children: mT(zT && !gT ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, iT.jsxs)(MT.e, {
            className: "SaveChangesButton",
            onClick: () => UT.saveSchematic(WT.gamePublished),
            disabled: !lT,
            children: [(0, iT.jsxs)("span", {
              className: zT ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, iT.jsx)(jT.c, {
                name: "wrench"
              }), " ", mT("worldBuilder:saveChanges")]
            }), !zT && (0, iT.jsx)(HT.c, {})]
          })
        })]
      })
    }

    function zU(TT) {
      let {
        schematic: UT,
        onSchematicUpdate: mT,
        onClose: zT,
        inSourceWorld: gT
      } = TT;
      const {
        t: HT
      } = (0, nT.z)();

      function kT() {
        null === zT || void 0 === zT || zT()
      }
      const jT = (0, TU.e)(UT, {
        onNavigateAway: kT,
        inSourceWorld: gT
      });
      return (0, WT.useEffect)((() => {
        null === mT || void 0 === mT || mT(jT.schematicData)
      }), [jT.schematicData, mT]), (0, iT.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, iT.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, iT.jsx)(MT.d, {
            onClick: kT,
            children: HT("worldBuilder:back")
          }), (0, iT.jsx)(bT, {
            icon: "rocket-launch",
            title: HT("worldBuilder:actionsSection"),
            disabled: !jT.formEnabled,
            children: (0, iT.jsx)(JT.c, {
              editor: jT
            })
          }), (0, iT.jsx)(mU, {
            editor: jT,
            onClose: kT
          })]
        }), (0, iT.jsx)(WU, {
          editor: jT
        })]
      })
    }

    function MU(TT) {
      let {
        schematic: UT,
        onSchematicUpdate: mT,
        onClose: WT,
        inSourceWorld: MT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, iT.jsx)(zU, {
          schematic: UT,
          onSchematicUpdate: mT,
          onClose: TT,
          inSourceWorld: MT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: WT,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5051: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1288),
      gT = mT(1135),
      nT = mT(1569),
      HT = mT(1475),
      kT = mT(1446),
      jT = mT(1188);

    function lT(TT) {
      let {
        editor: UT,
        className: mT
      } = TT;
      const {
        t: WT
      } = (0, MT.z)(), {
        schematicData: lT,
        formEnabled: LT,
        publishFormEnabled: pT
      } = UT, BT = !LT || !pT;
      return (0, jT.jsxs)("div", {
        className: zT()("PublishButtonContainer", mT),
        children: [UT.canEditSourceWorld && (0, jT.jsxs)(nT.e, {
          onClick: UT.editSourceWorld,
          disabled: BT,
          children: [(0, jT.jsx)(gT.c, {
            name: "edit"
          }), " ", WT("worldBuilder:editSourceWorld")]
        }), !lT.gamePublished && (0, jT.jsx)(HT.e, {
          tooltipInner: (0, jT.jsx)("div", {
            className: "PublishButtonTooltip",
            children: WT("worldBuilder:publishAsGameDescription")
          }),
          children: (0, jT.jsxs)(nT.l, {
            onClick: () => UT.saveSchematic(!0),
            disabled: BT,
            children: [(0, jT.jsx)(gT.c, {
              name: "rocket-launch"
            }), " ", WT("worldBuilder:publishAsGame"), " ", (0, jT.jsx)(gT.c, {
              name: "info-circle"
            })]
          })
        }), !0 === lT.gamePublished && (0, jT.jsxs)(jT.Fragment, {
          children: [(0, jT.jsx)(HT.e, {
            tooltipInner: (0, jT.jsx)("div", {
              className: "PublishButtonTooltip",
              children: WT("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, jT.jsxs)(nT.I, {
              onClick: UT.unpublishSchematic,
              disabled: BT,
              children: [(0, jT.jsx)(gT.c, {
                name: "rocket-launch"
              }), " ", WT("worldBuilder:unpublishAsGame"), " ", (0, jT.jsx)(gT.c, {
                name: "info-circle"
              })]
            })
          }), (0, jT.jsxs)(nT.e, {
            onClick: UT.playGame,
            disabled: BT,
            children: [(0, jT.jsx)(gT.c, {
              name: "joystick"
            }), " ", WT("general:playGame")]
          })]
        }), !LT && (0, jT.jsx)(kT.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5078: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(1302);
    async function zT(TT) {
      const UT = await fetch(`${WT.clientSideServerUrls.s3Url}/${TT}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === UT.status || 403 === UT.status) return null;
      if (!UT.ok) throw new Error(`Failed to download the texture pack (${UT.status})`);
      return await UT.json()
    }
  },
  5164: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => cT
    });
    var WT = mT(63),
      zT = mT(1437),
      MT = mT(1089),
      gT = mT(166),
      nT = mT(1667),
      HT = mT(25),
      kT = mT(2046),
      jT = mT(1613),
      lT = mT(4686),
      LT = mT(1457),
      pT = mT(1225),
      BT = mT(1633);

    function ZT(TT, UT) {
      return {
        schematicId: TT.schematicId,
        name: TT.name,
        description: TT.description,
        gamePublished: UT,
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

    function cT(TT) {
      let {
        onNavigateAway: UT,
        inSourceWorld: mT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: cT
      } = (0, pT.d)(), vT = (0, BT.useNavigatePreserveSearch)(), [fT, qT] = (0, WT.useState)({
        ...TT
      }), [iT, bT] = (0, WT.useState)("Enter"), [OT, eT] = (0, WT.useState)(void 0), YT = (0, WT.useRef)(ZT(TT, TT.gamePublished)), JT = (0, WT.useRef)(void 0), xT = "Enter" === iT, dT = cT.playerHasRank("developer") || cT.playerHasRank("admin") || "Enter" === iT && !1 !== fT.schematicContainsSpawnBlock, wT = void 0 !== OT && OT !== JT.current || JSON.stringify(ZT(fT, fT.gamePublished)) !== JSON.stringify(YT.current);

      function tT(TT, UT) {
        qT((mT => ({
          ...mT,
          [TT]: UT
        })))
      }
      const aT = (0, WT.useCallback)((TT => {
        JT.current = TT, eT(TT)
      }), []);

      function yT(TT) {
        bT("Loading");
        const UT = ZT(fT, TT),
          mT = OT !== JT.current ? OT : void 0;
        jT.b.updateSchematic(cT, UT, mT).then((mT => {
          let {
            customTexturePackKey: WT
          } = mT;
          bT("Success"), tT("customTexturePackKey", WT), YT.current = UT, JT.current = void 0, eT(void 0), setTimeout((() => {
            tT("gamePublished", TT), bT("Enter")
          }), 1e3)
        })).catch((TT => {
          var UT;
          (console.error("Failed to save schematic:", TT), bT("Error"), TT instanceof gT.d && TT.errorMessageForUser) && LT.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: TT.errorMessageForUser,
            textOpts: {
              subtitle: null !== (UT = TT.errorMessageTranslationParams) && void 0 !== UT ? UT : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            bT("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: fT,
        updateSchematicData: tT,
        setTexturePack: eT,
        initializeTexturePack: aT,
        updateState: iT,
        formEnabled: xT,
        publishFormEnabled: dT,
        hasUnsavedChanges: wT,
        canEditSourceWorld: !mT,
        saveSchematic: yT,
        unpublishSchematic: function() {
          LT.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((TT => {
            !0 === TT && yT(!1)
          }))
        },
        editSourceWorld: function() {
          bT("Loading"), lT.d.getSourceWorld(fT.schematicId).then((TT => {
            kT.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, HT.e)("other"), vT((0, zT.d)("classic", TT)), null === UT || void 0 === UT || UT()
          })).catch((TT => {
            console.error("Failed to get source world:", TT), bT("Error"), setTimeout((() => {
              bT("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          kT.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), vT((0, nT.v)((0, MT.s)(fT.schematicId), fT)), null === UT || void 0 === UT || UT()
        }
      }
    }
  },
  5045: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);