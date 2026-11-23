export const id = 105;
export const ids = [105];
export const modules = {
  4876: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC,
      h: () => FC,
      j: () => NC
    });
    ZC(4880);
    var QC = ZC(1143),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1321),
      fC = (ZC(48), ZC(4300)),
      oC = ZC(1013),
      qC = ZC(1056);

    function FC(CC) {
      let {
        children: zC,
        label: ZC,
        className: wC,
        circleInfoText: fC,
        disabled: FC,
        onLabelClick: WC
      } = CC;
      const {
        t: NC
      } = (0, QC.y)(), MC = (0, qC.jsxs)("div", {
        className: bC()("Label", {
          ClickableLabel: void 0 !== WC
        }),
        onClick: WC,
        children: [NC(ZC), fC && (0, qC.jsx)(oC.c, {
          name: "circle-info"
        })]
      });
      return (0, qC.jsxs)("div", {
        className: bC()("LabeledInput", {
          [wC]: wC,
          DisabledLabelInput: FC
        }),
        children: [fC && (0, qC.jsx)(nC.d, {
          tooltipInner: (0, qC.jsx)("div", {
            className: "LabeledInputTooltip",
            children: NC(fC)
          }),
          children: MC
        }), !fC && MC, zC]
      })
    }

    function WC(CC) {
      let {
        checked: zC,
        setChecked: ZC
      } = CC;
      return (0, qC.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: CC => {
          ZC(!zC)
        },
        children: (0, qC.jsx)(fC.e, {
          checked: zC,
          onChange: CC => {
            ZC(CC.target.checked)
          },
          disabled: !1
        })
      })
    }

    function NC(CC) {
      let {
        checked: zC,
        setChecked: ZC,
        disabled: QC
      } = CC;
      return (0, qC.jsx)("div", {
        className: bC()("SwitchContainer", {
          SwitchContainerDisabled: QC
        }),
        onClick: () => {
          QC || ZC(!zC)
        },
        children: (0, qC.jsx)(fC.e, {
          className: "SwitchCheckbox",
          checked: zC,
          onChange: CC => {
            ZC(CC.target.checked)
          },
          disabled: !!QC
        })
      })
    }
  },
  4887: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(4562),
      nC = ZC(1143),
      fC = ZC(1056);
    const oC = [...bC.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function qC(CC) {
      const {
        disabled: zC,
        hideWrapper: ZC
      } = CC, {
        t: QC
      } = (0, nC.y)(), qC = CC.advancedMode ? oC.map((zC => [zC, CC.callbacks[zC]])) : bC.j.map((zC => [zC, CC.callbacks[zC]])), WC = (0, fC.jsx)("div", {
        className: wC()("PluginsGrid", {
          SectionBody: !ZC
        }),
        children: qC.map((CC => {
          let [ZC, QC] = CC;
          return (0, fC.jsx)(FC, {
            plugin: ZC,
            callbacks: QC,
            disabled: zC
          }, ZC)
        }))
      });
      return ZC ? WC : (0, fC.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, fC.jsx)("div", {
          className: "SectionTitle",
          children: QC("worldBuilder:pluginsSection")
        }), WC]
      })
    }

    function FC(CC) {
      let {
        plugin: zC,
        callbacks: {
          isEnabled: ZC,
          IK: QC
        },
        disabled: bC
      } = CC;
      const {
        t: oC
      } = (0, nC.y)(), qC = ZC();
      return (0, fC.jsxs)("div", {
        className: wC()("PluginCard", {
          PluginCardEnabled: qC,
          PluginCardDisabledForm: bC
        }),
        "data-pad-focusable": !0,
        "aria-disabled": bC || void 0,
        onClick: () => {
          bC || QC(!qC)
        },
        children: [(0, fC.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, fC.jsx)("img", {
            src: `/textures/games/classic/customGames/${zC}.png`,
            alt: zC
          })
        }), (0, fC.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, fC.jsx)("div", {
            className: "PluginCardTitle",
            children: oC(WC[zC])
          }), (0, fC.jsx)("div", {
            className: "PluginCardDescription",
            children: oC(NC[zC])
          })]
        }), (0, fC.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: oC(qC ? "general:on" : "general:off")
        })]
      })
    }
    const WC = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      NC = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4873: (CC, zC, ZC) => {
    ZC.d(zC, {
      k: () => wz,
      e: () => Qz,
      h: () => Zz,
      l: () => bz
    });
    var QC = ZC(48),
      wC = ZC(1307),
      bC = ZC(1388),
      nC = ZC(1593),
      fC = ZC(1143),
      oC = ZC(1295),
      qC = ZC(1321),
      FC = ZC(1013),
      WC = ZC(1169),
      NC = ZC(1002),
      MC = ZC.n(NC),
      gC = ZC(310),
      SC = ZC(4562),
      pC = ZC(1183),
      PC = ZC(4876),
      GC = ZC(3113),
      RC = ZC(4887),
      AC = ZC(1056);

    function xC(CC) {
      let {
        icon: zC,
        title: ZC,
        disabled: QC,
        children: wC
      } = CC;
      return (0, AC.jsxs)("div", {
        className: MC()("ManageCard", {
          ManageCardDisabled: QC
        }),
        children: [(0, AC.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, AC.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, AC.jsx)(FC.c, {
              name: zC
            })
          }), (0, AC.jsx)("div", {
            children: (0, AC.jsx)("h2", {
              className: "ManageCardTitle",
              children: ZC
            })
          })]
        }), (0, AC.jsxs)("div", {
          className: "ManageCardBody",
          children: [wC, QC && (0, AC.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function JC(CC) {
      let {
        label: zC,
        caption: ZC,
        children: QC
      } = CC;
      return (0, AC.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, AC.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: zC
        }), QC, ZC && (0, AC.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: ZC
        })]
      })
    }

    function IC(CC) {
      let {
        label: zC,
        caption: ZC,
        disabled: QC,
        children: wC
      } = CC;
      return (0, AC.jsxs)("div", {
        className: MC()("ManageField", {
          ManageFieldDisabled: QC
        }),
        children: [(0, AC.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, AC.jsx)("div", {
            className: "ManageFieldLabel",
            children: zC
          }), (0, AC.jsx)("div", {
            className: "ManageFieldCaption",
            children: ZC
          })]
        }), (0, AC.jsx)("div", {
          className: "ManageFieldControl",
          children: wC
        })]
      })
    }

    function iC(CC) {
      var zC, ZC;
      let {
        schematicData: QC,
        updateSchematicData: wC,
        publishFormEnabled: bC,
        formEnabled: nC
      } = CC;
      const {
        t: oC
      } = (0, fC.y)(), qC = !bC, FC = {
        tpRequests: {
          isEnabled: () => !QC.disableTpRequests,
          IK: CC => wC("disableTpRequests", !CC)
        },
        spawnProtection: {
          isEnabled: () => !QC.disableSpawnProtection,
          IK: CC => wC("disableSpawnProtection", !CC)
        },
        spawnReset: {
          isEnabled: () => !!QC.enableSpawnReset,
          IK: CC => wC("enableSpawnReset", CC)
        },
        smpMarketplace: {
          isEnabled: () => !!QC.enableSmpMarketplace,
          IK: CC => wC("enableSmpMarketplace", CC)
        },
        survivalGuns: {
          isEnabled: () => !!QC.enableSurvivalGuns,
          IK: CC => wC("enableSurvivalGuns", CC)
        },
        fallDamage: {
          isEnabled: () => !QC.disableFallDamage,
          IK: CC => wC("disableFallDamage", !CC)
        },
        dayNight: {
          isEnabled: () => !!QC.enableDayNight,
          IK: CC => wC("enableDayNight", CC)
        }
      };
      return (0, AC.jsxs)(AC.Fragment, {
        children: [!1 === QC.schematicContainsSpawnBlock && (0, AC.jsx)("div", {
          className: "ManageWarningBanner",
          children: oC("worldBuilder:mustContainSpawnBlock")
        }), (0, AC.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, AC.jsxs)(xC, {
            icon: "globe",
            title: oC("worldBuilder:worldRulesSection"),
            disabled: !nC,
            children: [(0, AC.jsx)(IC, {
              label: oC("classic:defaultGamemode"),
              caption: oC("classic:defaultGamemodeDescription"),
              disabled: qC,
              children: (0, AC.jsx)(GC.b, {
                controlClassName: "ManageDropdown",
                options: SC.H.map((CC => ({
                  value: CC,
                  label: gC.q[CC]
                }))),
                value: QC.defaultGamemode,
                onChange: CC => wC("defaultGamemode", CC.value)
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:voidDeathHeight"),
              caption: oC("classic:voidDeathHeightDescription"),
              disabled: qC,
              children: (0, AC.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, AC.jsx)("input", {
                  type: "number",
                  max: pC.G,
                  value: null !== (zC = QC.voidDeathHeight) && void 0 !== zC ? zC : "",
                  onChange: CC => {
                    const zC = parseInt(CC.target.value);
                    wC("voidDeathHeight", zC)
                  }
                }), (0, AC.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: oC("worldBuilder:blocksUnit")
                })]
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:worldBorder"),
              caption: oC("classic:worldBorderDescription"),
              disabled: qC,
              children: (0, AC.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, AC.jsx)("input", {
                  type: "number",
                  min: pC.Q,
                  max: pC.K,
                  placeholder: oC("worldBuilder:noWorldBorderLimit"),
                  value: null !== (ZC = QC.worldBorder) && void 0 !== ZC ? ZC : "",
                  onChange: CC => {
                    const zC = parseInt(CC.target.value);
                    wC("worldBorder", isNaN(zC) ? null : zC)
                  }
                }), (0, AC.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: oC("worldBuilder:blocksUnit")
                })]
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:disableMobs"),
              caption: oC("classic:disableMobsDescription"),
              disabled: qC,
              children: (0, AC.jsx)(PC.j, {
                checked: QC.disableMobs,
                setChecked: CC => wC("disableMobs", CC),
                disabled: qC
              })
            })]
          }), (0, AC.jsxs)(xC, {
            icon: "user-group",
            title: oC("worldBuilder:playerAndLobbySection"),
            disabled: !nC,
            children: [(0, AC.jsx)(IC, {
              label: oC("classic:disableKeepInventory"),
              caption: oC("classic:disableKeepInventoryDescription"),
              disabled: qC,
              children: (0, AC.jsx)(PC.j, {
                checked: QC.disableKeepInventory,
                setChecked: CC => wC("disableKeepInventory", CC),
                disabled: qC
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:persistInventory"),
              caption: oC("classic:persistInventoryDescription"),
              disabled: qC,
              children: (0, AC.jsx)(GC.b, {
                controlClassName: "ManageDropdown",
                options: SC.m.map((CC => ({
                  value: CC,
                  label: gC.i[CC]
                }))),
                value: QC.persistInventory,
                onChange: CC => wC("persistInventory", CC.value)
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:persistWorld"),
              caption: oC("classic:persistWorldDescription"),
              disabled: qC,
              children: (0, AC.jsx)(PC.j, {
                checked: QC.persistWorld,
                setChecked: CC => wC("persistWorld", CC),
                disabled: qC
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:disableLobbySpawn"),
              caption: oC("classic:disableLobbySpawnDescription"),
              disabled: qC,
              children: (0, AC.jsx)(PC.j, {
                checked: QC.disableLobbySpawn,
                setChecked: CC => wC("disableLobbySpawn", CC),
                disabled: qC
              })
            }), (0, AC.jsx)(IC, {
              label: oC("classic:hideLobbyCode"),
              caption: oC("classic:hideLobbyCodeDescription"),
              disabled: qC,
              children: (0, AC.jsx)(PC.j, {
                checked: QC.hideLobbyCode,
                setChecked: CC => wC("hideLobbyCode", CC),
                disabled: qC
              })
            })]
          })]
        }), (0, AC.jsx)(xC, {
          icon: "layer-group",
          title: oC("worldBuilder:pluginsSection"),
          disabled: !nC,
          children: (0, AC.jsx)(RC.e, {
            callbacks: FC,
            disabled: qC,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var vC = ZC(4893),
      eC = ZC(4300),
      hC = ZC(1439),
      KC = ZC(3452),
      YC = ZC(1076),
      dC = ZC(4847),
      mC = ZC(4895),
      HC = ZC(1392);
    const EC = 50,
      lC = .3;
    async function XC(CC) {
      const zC = await
      function(CC) {
        return new Promise(((zC, ZC) => {
          const QC = new FileReader;
          QC.onload = () => zC(QC.result), QC.onerror = ZC, QC.readAsDataURL(CC)
        }))
      }(CC), ZC = await
      function(CC) {
        return new Promise(((zC, ZC) => {
          const QC = new Image;
          QC.onload = () => zC(QC), QC.onerror = () => ZC(new Error("Failed to load image")), QC.src = CC
        }))
      }(zC);
      if (ZC.naturalHeight > ZC.naturalWidth) throw new cC;
      const QC = 1024 * EC,
        {
          dataUrl: wC,
          finalQuality: bC
        } = function(CC, zC) {
          const ZC = document.createElement("canvas");
          ZC.width = CC.naturalWidth, ZC.height = CC.naturalHeight, ZC.getContext("2d").drawImage(CC, 0, 0);
          let QC = .92,
            wC = ZC.toDataURL("image/jpeg", QC);
          for (; .75 * wC.length > zC && QC > .05;) QC -= .05, wC = ZC.toDataURL("image/jpeg", QC);
          return {
            dataUrl: wC,
            finalQuality: QC
          }
        }(ZC, QC);
      if (Math.ceil(.75 * wC.length) > QC) throw new uC;
      return {
        base64Jpg: wC,
        heavilyCompressed: bC < lC
      }
    }
    class cC extends Error {}
    class uC extends Error {}
    var rC = function(CC) {
      return CC[CC.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", CC[CC.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", CC
    }(rC || {});

    function sC(CC) {
      var zC;
      let {
        schematicId: ZC,
        hasReadUploadPolicy: wC,
        onPolicyValidationError: oC,
        onThumbnailReady: qC
      } = CC;
      const {
        t: NC
      } = (0, fC.y)(), [gC, SC] = (0, QC.useState)(null), [pC, PC] = (0, QC.useState)(""), [GC, RC] = (0, QC.useState)(""), [xC, JC] = (0, QC.useState)(!0), [IC, iC] = (0, QC.useState)(!1), vC = (0, QC.useRef)(!1), [eC, hC] = (0, QC.useState)(null), [KC, YC] = (0, QC.useState)(!1), [dC, HC] = (0, QC.useState)(!1), EC = (0, QC.useRef)(0), {
        getRootProps: lC,
        getInputProps: rC,
        isDragActive: sC
      } = (0, mC.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async CC => {
          if (0 === CC.length) return;
          const zC = CC[0],
            ZC = ++EC.current;
          hC(null), YC(!1), SC(null), PC(zC.name);
          try {
            const CC = await XC(zC);
            if (ZC !== EC.current) return;
            SC(CC), YC(CC.heavilyCompressed)
          } catch (QC) {
            if (ZC !== EC.current) return;
            hC(NC(QC instanceof cC ? "thumbnail:portraitImagesNotAllowed" : QC instanceof uC ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), TC = pC.length <= 30 ? pC : `${pC.slice(0,27)}...`, aC = null !== (zC = null === gC || void 0 === gC ? void 0 : gC.base64Jpg) && void 0 !== zC ? zC : null, tC = GC.trim(), DC = tC.length >= WC.r && tC.length <= WC.n, jC = dC && !gC && !eC, yC = dC && !DC;
      return (0, AC.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, AC.jsxs)("div", {
          ...lC({
            className: MC()("ThumbnailUploadDropzone", {
              ActiveDrag: sC,
              ValidationError: jC
            })
          }),
          children: [(0, AC.jsx)("input", {
            ...rC()
          }), !sC && aC ? (0, AC.jsxs)(AC.Fragment, {
            children: [(0, AC.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, AC.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, AC.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, AC.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, AC.jsx)("img", {
                    src: aC,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, AC.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, AC.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, AC.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, AC.jsx)("img", {
                    src: aC,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, AC.jsxs)("div", {
              children: [(0, AC.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: TC
              }), (0, AC.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: NC("thumbnail:preview")
              })]
            })]
          }) : (0, AC.jsxs)(AC.Fragment, {
            children: [(0, AC.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, AC.jsx)(FC.c, {
                name: "image"
              })
            }), (0, AC.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: NC("thumbnail:dragImageHere")
            })]
          })]
        }), jC && (0, AC.jsx)("div", {
          className: "ThumbnailUploadError",
          children: NC("thumbnail:imageRequired")
        }), (0, AC.jsx)(nC.c, {
          className: MC()("ThumbnailUploadNameInput", {
            ValidationError: yC
          }),
          placeholderText: NC("thumbnail:thumbnailName"),
          defaultValue: GC,
          onValueChange: CC => {
            RC(CC)
          },
          maxLength: WC.n
        }), yC && (0, AC.jsx)("div", {
          className: "ThumbnailUploadError",
          children: NC("thumbnail:nameRequired", {
            min: WC.r,
            max: WC.n
          })
        }), (0, AC.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, AC.jsx)("input", {
            type: "checkbox",
            checked: xC,
            onChange: CC => {
              JC(CC.target.checked)
            }
          }), NC("thumbnail:setAsThumbnailOnceApproved")]
        }), KC && (0, AC.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: NC("thumbnail:heavyCompressionWarning")
        }), eC && (0, AC.jsx)("div", {
          className: "ThumbnailUploadError",
          children: eC
        }), (0, AC.jsx)(bC.o, {
          disabled: IC,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (HC(!0), !vC.current && gC && DC && wC) {
              vC.current = !0, iC(!0), hC(null);
              try {
                await qC(gC.base64Jpg, tC, xC ? ZC : null)
              } catch (CC) {
                hC(CC.errorMessageForUser ? NC(CC.errorMessageForUser, CC.errorMessageTranslationParams) : NC("thumbnail:failedToUploadImage"))
              } finally {
                vC.current = !1, iC(!1)
              }
            } else wC || oC()
          },
          children: NC(IC ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const TC = 2e3;

    function aC(CC) {
      let {
        schematicId: zC,
        ownedThumbnailCount: ZC,
        onClose: wC,
        onThumbnailReady: bC
      } = CC;
      const {
        t: nC
      } = (0, fC.y)(), {
        userContext: oC
      } = (0, YC.e)(), [qC, NC] = (0, QC.useState)(!1), [gC, SC] = (0, QC.useState)(!1), [pC, PC] = (0, QC.useState)(!1), GC = (0, QC.useRef)();
      (0, QC.useEffect)((() => () => {
        clearTimeout(GC.current)
      }), []);
      const RC = function(CC, zC) {
        const ZC = [];
        return CC.isLoggedIn() || ZC.push(rC.NOT_LOGGED_IN), zC >= WC.cb && ZC.push(rC.THUMBNAIL_LIMIT_REACHED), ZC
      }(oC, ZC);
      if (RC.length > 0) {
        const CC = {
          [rC.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [rC.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: WC.cb
            }
          }
        };
        return (0, AC.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, AC.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: nC("thumbnail:cannotUploadThumbnail")
          }), RC.map(((zC, ZC) => {
            const QC = CC[zC];
            return (0, AC.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, AC.jsx)(FC.c, {
                name: "triangle-exclamation"
              }), (0, AC.jsx)("span", {
                children: nC(QC.key, QC.params)
              })]
            }, ZC)
          }))]
        })
      }
      return (0, AC.jsxs)("div", {
        className: MC()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: qC
        }),
        children: [qC && (0, AC.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, AC.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, AC.jsx)(FC.c, {
              name: "check"
            }), (0, AC.jsx)(HC.c, {})]
          }), (0, AC.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: nC("thumbnail:thumbnailUploaded")
          })]
        }), (0, AC.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: nC("thumbnail:uploadThumbnail")
        }), (0, AC.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, AC.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, AC.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: nC("thumbnail:chooseImage", {
                maxSizeKb: EC
              })
            }), (0, AC.jsx)(sC, {
              schematicId: zC,
              hasReadUploadPolicy: gC,
              onPolicyValidationError: () => {
                PC(!0)
              },
              onThumbnailReady: async (CC, zC, ZC) => {
                await bC(CC, zC, ZC), NC(!0), GC.current = setTimeout(wC, TC)
              }
            })]
          }), (0, AC.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, AC.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: nC("thumbnail:uploadPolicy")
            }), (0, AC.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "check"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyFollowGuidelines")
                })]
              }), (0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "check"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyInGameAssets")
                })]
              }), (0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "check"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyLimitText")
                })]
              }), (0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "x"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyCopyrightContent")
                })]
              }), (0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "x"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "x"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyBloxdTags")
                })]
              }), (0, AC.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, AC.jsx)(FC.c, {
                  name: "x"
                }), (0, AC.jsx)("span", {
                  children: nC("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, AC.jsxs)("label", {
              className: MC()("ThumbnailUploadCheckbox Policy", {
                ValidationError: pC && !gC
              }),
              children: [(0, AC.jsx)("input", {
                type: "checkbox",
                checked: gC,
                onChange: CC => {
                  SC(CC.target.checked)
                }
              }), nC("thumbnail:agreeToUploadPolicy")]
            }), pC && !gC && (0, AC.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: nC("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var tC = ZC(1149);
    const DC = {
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

    function jC(CC) {
      var zC, ZC;
      let {
        schematicData: nC,
        updateSchematicData: qC,
        publishFormEnabled: WC,
        onClose: NC
      } = CC;
      const {
        t: gC
      } = (0, fC.y)(), {
        userContext: SC,
        isUserContextUpdating: pC
      } = (0, YC.e)(), PC = (0, KC.e)(), [GC, RC] = (0, QC.useState)([]), [xC, JC] = (0, QC.useState)([]), [IC, iC] = (0, QC.useState)(!0), [vC, eC] = (0, QC.useState)(null !== (zC = nC.customThumbnailId) && void 0 !== zC ? zC : null), [mC, HC] = (0, QC.useState)(null), EC = (0, QC.useRef)(null !== (ZC = nC.customThumbnailId) && void 0 !== ZC ? ZC : null), lC = (0, QC.useRef)(0), XC = (0, QC.useRef)(null), cC = (0, QC.useRef)(null), uC = (0, QC.useRef)(null), rC = (0, QC.useRef)(!1);

      function sC(CC, zC) {
        uC.current && (clearTimeout(uC.current), uC.current = null), HC(CC), null !== CC && zC && (uC.current = setTimeout((() => {
          HC(null), uC.current = null
        }), 5e3))
      }(0, QC.useEffect)((() => () => {
        clearTimeout(cC.current), clearTimeout(uC.current)
      }), []);
      const TC = (0, QC.useCallback)((() => {
        iC(!0), hC.d.getOwnedThumbnails(SC).then((CC => {
          const zC = [],
            ZC = [];
          for (const QC of CC.thumbnails) QC.rejectionPolicyId ? zC.push(QC) : ZC.push(QC);
          zC.sort(((CC, zC) => CC.lastUpdatedAt - zC.lastUpdatedAt)), ZC.sort(((CC, zC) => {
            const ZC = CC.approved ? 1 : 0,
              QC = (zC.approved ? 1 : 0) - ZC;
            return 0 !== QC ? QC : zC.lastUpdatedAt - CC.lastUpdatedAt
          })), JC(zC), RC(ZC)
        })).catch((CC => {
          console.error("Failed to fetch thumbnails:", CC)
        })).finally((() => {
          iC(!1)
        }))
      }), [SC]);
      async function DC(CC, zC, ZC) {
        return hC.d.uploadSchematicThumbnail(SC, CC, zC, ZC).then((() => {
          sC({
            text: gC("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), TC()
        }))
      }

      function jC() {
        lC.current = Date.now(), cC.current = null;
        const CC = XC.current;
        XC.current = null, sC({
          text: gC("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), hC.d.setSchematicThumbnail(SC, nC.schematicId, CC).then((() => {
          PC.current && (sC({
            text: gC("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), EC.current = CC, qC("customThumbnailId", CC), qC("customThumbnailBlurhash", void 0), qC("customThumbnailVariants", void 0))
        })).catch((CC => {
          PC.current && (sC({
            text: CC.errorMessageForUser ? gC(CC.errorMessageForUser, CC.errorMessageTranslationParams) : gC("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), eC(EC.current))
        }))
      }

      function UC(CC) {
        eC(CC), XC.current = CC;
        const zC = Date.now() - lC.current;
        zC >= 1e3 ? jC() : (sC({
          text: gC("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), cC.current || (cC.current = setTimeout((() => {
          jC()
        }), 1e3 - zC)))
      }
      return (0, QC.useEffect)((() => {
        !1 === pC && TC()
      }), [pC, TC]), xC.length > 0 ? (0, AC.jsx)(yC, {
        rejectedThumbnails: xC,
        userContext: SC,
        isMountedRef: PC,
        onAcknowledged: TC
      }) : (0, AC.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, AC.jsxs)("div", {
          className: "SectionTitle",
          children: [gC("thumbnail:gameThumbnail"), mC && (0, AC.jsx)("span", {
            className: MC()("ThumbnailActionMsg", `ThumbnailActionMsg--${mC.type}`),
            children: mC.text
          })]
        }), (0, AC.jsx)("div", {
          className: "SectionBody",
          children: (0, AC.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, AC.jsxs)("div", {
              className: MC()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === vC
              }),
              onClick: () => UC(null),
              children: [(0, AC.jsx)(dC.d, {
                game: {
                  schematicId: nC.schematicId,
                  imageBlurhash: nC.imageBlurhash
                }
              }), (0, AC.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: gC("general:default")
              })]
            }), IC && (0, AC.jsx)(oC.d, {}), GC.map(((CC, zC) => (0, AC.jsxs)("div", {
              className: MC()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: vC === CC.id,
                ThumbnailGridItemPending: !CC.approved
              }),
              onClick: () => {
                CC.approved && UC(CC.id)
              },
              children: [CC.approved && (0, AC.jsx)("img", {
                src: `${tC.clientSideServerUrls.s3Url}/customThumbnails/${CC.id}.jpg`,
                alt: "Thumbnail"
              }), CC.approved && (0, AC.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: CC.name
              }), CC.id && (0, AC.jsx)(bC.I, {
                className: "ThumbnailDeleteButton",
                onClick: zC => async function(CC, zC, ZC) {
                  CC.stopPropagation();
                  const QC = await wC.NotificationProvider.showCustomPopup({
                      body: CC => (0, AC.jsx)(LC, {
                        thumbnailId: zC,
                        thumbnailName: ZC,
                        onClose: zC => {
                          zC && (rC.current = !0), CC()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: NC
                    }).getResult(),
                    bC = rC.current;
                  rC.current = !1, bC && !0 === QC && (PC.current && sC({
                    text: gC("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), hC.d.deleteSchematicThumbnail(SC, zC).then((() => {
                    PC.current && (sC({
                      text: gC("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), EC.current === zC && UC(null), TC())
                  })).catch((CC => {
                    PC.current && sC({
                      text: CC.errorMessageForUser ? gC(CC.errorMessageForUser, CC.errorMessageTranslationParams) : gC("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(zC, CC.id, CC.name),
                children: (0, AC.jsx)(FC.c, {
                  name: "trash-can"
                })
              }), !CC.approved && (0, AC.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, AC.jsx)(FC.c, {
                  name: "hourglass-clock"
                })
              }), !CC.approved && (0, AC.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [CC.name, (0, AC.jsx)("br", {}), gC("thumbnail:pendingApproval")]
              })]
            }, zC))), (0, AC.jsxs)("div", {
              className: MC()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !WC
              }),
              onClick: () => {
                WC && function(CC) {
                  let {
                    schematicId: zC,
                    ownedThumbnailCount: ZC,
                    onThumbnailReady: QC,
                    onClose: bC
                  } = CC;
                  wC.NotificationProvider.showCustomPopup({
                    body: CC => (0, AC.jsx)(aC, {
                      schematicId: zC,
                      ownedThumbnailCount: ZC,
                      onClose: CC,
                      onThumbnailReady: QC
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: bC,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: nC.schematicId,
                  ownedThumbnailCount: GC.length,
                  onThumbnailReady: DC,
                  onClose: NC
                })
              },
              children: [(0, AC.jsx)(FC.c, {
                name: "plus"
              }), (0, AC.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: gC("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function yC(CC) {
      let {
        rejectedThumbnails: zC,
        userContext: ZC,
        isMountedRef: wC,
        onAcknowledged: nC
      } = CC;
      const {
        t: qC
      } = (0, fC.y)(), [WC, NC] = (0, QC.useState)(!1), [MC, gC] = (0, QC.useState)(!1), SC = function(CC) {
        const zC = new Map;
        for (const ZC of CC) {
          const CC = ZC.rejectionPolicyId,
            QC = zC.get(CC);
          QC ? QC.push(ZC) : zC.set(CC, [ZC])
        }
        return zC
      }(zC);
      return (0, AC.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, AC.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, AC.jsx)(FC.c, {
            name: "triangle-exclamation"
          }), " ", qC("thumbnail:thumbnailsRejected"), " ", (0, AC.jsx)(FC.c, {
            name: "triangle-exclamation"
          })]
        }), (0, AC.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: qC("thumbnail:thumbnailsRejectedDescription")
        }), (0, AC.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...SC.entries()].map((CC => {
            let [zC, ZC] = CC;
            const QC = DC[zC];
            return (0, AC.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, AC.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: ZC.map((CC => (0, AC.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, AC.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, AC.jsx)(FC.c, {
                      name: "image-slash"
                    })
                  }), (0, AC.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, AC.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: CC.name
                    })
                  })]
                }, CC.id)))
              }), (0, AC.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [qC("thumbnail:rejectionReason"), " ", QC ? qC(QC.reason) : zC]
              }), QC && (0, AC.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: QC.tips.map((CC => (0, AC.jsx)("li", {
                  children: qC(CC)
                }, CC)))
              })]
            }, zC)
          }))
        }), (0, AC.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, AC.jsx)(eC.e, {
            checked: WC,
            onChange: CC => NC(CC.target.checked),
            disabled: MC
          }), (0, AC.jsx)("span", {
            children: qC("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, AC.jsx)(bC.o, {
          onClick: async function() {
            gC(!0);
            const CC = await Promise.allSettled(zC.map((CC => hC.d.deleteSchematicThumbnail(ZC, CC.id))));
            if (!wC.current) return;
            const QC = CC.filter((CC => "rejected" === CC.status));
            QC.length > 0 && console.error("Some rejected thumbnails failed to delete:", QC), nC()
          },
          disabled: !WC || MC,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: MC ? (0, AC.jsx)(oC.d, {}) : qC("general:accept")
        })]
      })
    }

    function LC(CC) {
      let {
        thumbnailId: zC,
        thumbnailName: ZC,
        onClose: QC
      } = CC;
      const {
        t: wC
      } = (0, fC.y)();
      return (0, AC.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, AC.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: wC("thumbnail:deleteThumbnail")
        }), (0, AC.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, AC.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${tC.clientSideServerUrls.s3Url}/customThumbnails/${zC}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, AC.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: ZC
          })]
        }), (0, AC.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: wC("thumbnail:deleteThumbnailConfirmation")
        }), (0, AC.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, AC.jsxs)(bC.I, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => QC(!0),
            children: [(0, AC.jsx)(FC.c, {
              name: "trash-can"
            }), " ", wC("general:delete")]
          }), (0, AC.jsx)(bC.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => QC(!1),
            children: wC("general:cancel")
          })]
        })]
      })
    }
    var UC = ZC(2063),
      BC = ZC(4925),
      OC = ZC(4933),
      kC = ZC(4985);

    function VC(CC) {
      let {
        schematicData: zC,
        setTexturePack: ZC,
        initializeTexturePack: wC,
        publishFormEnabled: bC
      } = CC;
      const {
        t: nC
      } = (0, fC.y)(), [oC, qC] = (0, QC.useState)(null), [FC, WC] = (0, QC.useState)(null), [NC, gC] = (0, QC.useState)(!1), SC = (0, KC.e)(), pC = bC && !NC, PC = zC.customTexturePackKey;

      function GC(CC) {
        var zC;
        qC(CC.metaData.id), WC(null !== (zC = CC.metaData.fromFolderName) && void 0 !== zC ? zC : null), (CC.metaData.id !== UC.q.CUSTOM || CC.metaData.fromFolderName) && ZC(CC)
      }
      return (0, QC.useEffect)((() => {
        PC && (gC(!0), (0, BC.d)(PC).then((CC => {
          var zC;
          SC.current && (CC ? (qC(CC.metaData.id), WC(null !== (zC = CC.metaData.fromFolderName) && void 0 !== zC ? zC : null), wC(CC)) : console.error(`No texture pack at ${PC}`))
        })).catch((CC => {
          console.error("Error fetching texture pack: ", CC)
        })).finally((() => {
          gC(!1)
        })))
      }), [PC, wC, SC]), (0, AC.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, AC.jsx)("div", {
          className: "SectionTitle",
          children: nC("customTexturePack:customTexturePack")
        }), (0, AC.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, AC.jsx)("div", {
            className: MC()("TexturePack", {
              Selected: null === oC && !NC,
              Disabled: !pC
            }),
            onClick: () => {
              pC && (qC(null), ZC(null), WC(null))
            },
            children: (0, AC.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(UC.q).map((CC => (0, AC.jsx)(OC.f, {
            id: CC,
            isSelected: CC === oC,
            setSelected: GC,
            disabled: !pC
          }, CC)))]
        }), oC === UC.q.CUSTOM && (0, AC.jsx)(kC.c, {
          folderName: FC,
          onTexturePackUpdated: GC,
          disabled: !pC,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Cz = ZC(5024);

    function zz(CC) {
      var zC;
      let {
        gameCategory: ZC,
        setGameCategory: QC,
        disabled: wC
      } = CC;
      const nC = null !== (zC = (0, gC.hb)(ZC)) && void 0 !== zC ? zC : "other";
      return (0, AC.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, AC.jsx)(PC.h, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: wC,
          children: (0, AC.jsx)(GC.b, {
            options: gC.X.map((CC => ({
              value: CC,
              label: gC.V[CC]
            }))),
            value: nC,
            onChange: CC => {
              CC.value !== nC && QC(gC.Q[CC.value][0])
            }
          })
        }), (0, AC.jsx)(PC.h, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: wC,
          children: (0, AC.jsx)("div", {
            className: "GameCategoryOptions",
            children: gC.Q[nC].map((CC => (0, AC.jsx)(bC.O, {
              active: CC === ZC,
              onClick: () => {
                QC(CC)
              },
              children: (0, gC.eb)(CC)
            }, CC)))
          })
        })]
      })
    }

    function Zz(CC) {
      let {
        editor: zC,
        onClose: ZC
      } = CC;
      const {
        t: QC
      } = (0, fC.y)(), {
        schematicData: wC,
        updateSchematicData: bC,
        publishFormEnabled: oC,
        formEnabled: qC
      } = zC;
      return (0, AC.jsxs)(AC.Fragment, {
        children: [(0, AC.jsxs)(xC, {
          icon: "pen-to-square",
          title: QC("worldBuilder:basicsSection"),
          disabled: !qC,
          children: [(0, AC.jsx)(JC, {
            label: QC("general:name"),
            caption: QC("worldBuilder:schematicNameTagsHint"),
            children: (0, AC.jsx)(nC.c, {
              className: "SchematicPageName",
              defaultValue: wC.name,
              onValueChange: CC => bC("name", CC),
              placeholderText: QC("worldBuilder:schematicNamePlaceholder"),
              maxLength: WC.xb
            })
          }), (0, AC.jsx)(JC, {
            label: QC("general:description"),
            children: (0, AC.jsx)(nC.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: wC.description,
              onValueChange: CC => bC("description", CC),
              placeholderText: QC("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: WC.tb
            })
          }), (0, AC.jsx)(zz, {
            gameCategory: wC.gameCategory,
            setGameCategory: CC => bC("gameCategory", CC),
            disabled: !oC
          }), !0 === wC.gamePublished && (0, AC.jsx)(jC, {
            schematicData: wC,
            updateSchematicData: bC,
            publishFormEnabled: oC,
            onClose: function() {
              null === ZC || void 0 === ZC || ZC()
            }
          })]
        }), (0, AC.jsx)(iC, {
          schematicData: wC,
          updateSchematicData: bC,
          publishFormEnabled: oC,
          formEnabled: qC
        }), !0 === wC.gamePublished && (0, AC.jsx)(xC, {
          icon: "palette",
          title: QC("worldBuilder:texturePackSection"),
          disabled: !qC,
          children: (0, AC.jsx)(VC, {
            schematicData: wC,
            setTexturePack: zC.setTexturePack,
            initializeTexturePack: zC.initializeTexturePack,
            publishFormEnabled: oC
          })
        })]
      })
    }

    function Qz(CC) {
      let {
        editor: zC
      } = CC;
      const {
        t: ZC
      } = (0, fC.y)(), {
        schematicData: QC,
        formEnabled: wC,
        hasUnsavedChanges: nC
      } = zC, WC = wC && nC;
      return (0, AC.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [wC && nC && (0, AC.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, AC.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), ZC("worldBuilder:unsavedChanges")]
        }), (0, AC.jsx)(qC.d, {
          tooltipInner: (0, AC.jsx)("div", {
            className: "SaveButtonTooltip",
            children: ZC(wC && !nC ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, AC.jsxs)(bC.g, {
            className: "SaveChangesButton",
            onClick: () => zC.saveSchematic(QC.gamePublished),
            disabled: !WC,
            children: [(0, AC.jsxs)("span", {
              className: wC ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, AC.jsx)(FC.c, {
                name: "wrench"
              }), " ", ZC("worldBuilder:saveChanges")]
            }), !wC && (0, AC.jsx)(oC.d, {})]
          })
        })]
      })
    }

    function wz(CC) {
      let {
        schematic: zC,
        onSchematicUpdate: ZC,
        onClose: wC,
        inSourceWorld: nC
      } = CC;
      const {
        t: oC
      } = (0, fC.y)();

      function qC() {
        null === wC || void 0 === wC || wC()
      }
      const FC = (0, Cz.c)(zC, {
        onNavigateAway: qC,
        inSourceWorld: nC
      });
      return (0, QC.useEffect)((() => {
        null === ZC || void 0 === ZC || ZC(FC.schematicData)
      }), [FC.schematicData, ZC]), (0, AC.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, AC.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, AC.jsx)(bC.c, {
            onClick: qC,
            children: oC("worldBuilder:back")
          }), (0, AC.jsx)(xC, {
            icon: "rocket-launch",
            title: oC("worldBuilder:actionsSection"),
            disabled: !FC.formEnabled,
            children: (0, AC.jsx)(vC.c, {
              editor: FC
            })
          }), (0, AC.jsx)(Zz, {
            editor: FC,
            onClose: qC
          })]
        }), (0, AC.jsx)(Qz, {
          editor: FC
        })]
      })
    }

    function bz(CC) {
      let {
        schematic: zC,
        onSchematicUpdate: ZC,
        onClose: QC,
        inSourceWorld: bC
      } = CC;
      wC.NotificationProvider.showCustomPopup({
        body: CC => (0, AC.jsx)(wz, {
          schematic: zC,
          onSchematicUpdate: ZC,
          onClose: CC,
          inSourceWorld: bC
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QC,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4893: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => WC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1143),
      nC = ZC(1013),
      fC = ZC(1388),
      oC = ZC(1321),
      qC = ZC(1295),
      FC = ZC(1056);

    function WC(CC) {
      let {
        editor: zC,
        className: ZC
      } = CC;
      const {
        t: QC
      } = (0, bC.y)(), {
        schematicData: WC,
        formEnabled: NC,
        publishFormEnabled: MC
      } = zC, gC = !NC || !MC;
      return (0, FC.jsxs)("div", {
        className: wC()("PublishButtonContainer", ZC),
        children: [zC.canEditSourceWorld && (0, FC.jsxs)(fC.g, {
          onClick: zC.editSourceWorld,
          disabled: gC,
          children: [(0, FC.jsx)(nC.c, {
            name: "edit"
          }), " ", QC("worldBuilder:editSourceWorld")]
        }), !WC.gamePublished && (0, FC.jsx)(oC.d, {
          tooltipInner: (0, FC.jsx)("div", {
            className: "PublishButtonTooltip",
            children: QC("worldBuilder:publishAsGameDescription")
          }),
          children: (0, FC.jsxs)(fC.o, {
            onClick: () => zC.saveSchematic(!0),
            disabled: gC,
            children: [(0, FC.jsx)(nC.c, {
              name: "rocket-launch"
            }), " ", QC("worldBuilder:publishAsGame"), " ", (0, FC.jsx)(nC.c, {
              name: "info-circle"
            })]
          })
        }), !0 === WC.gamePublished && (0, FC.jsxs)(FC.Fragment, {
          children: [(0, FC.jsx)(oC.d, {
            tooltipInner: (0, FC.jsx)("div", {
              className: "PublishButtonTooltip",
              children: QC("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, FC.jsxs)(fC.I, {
              onClick: zC.unpublishSchematic,
              disabled: gC,
              children: [(0, FC.jsx)(nC.c, {
                name: "rocket-launch"
              }), " ", QC("worldBuilder:unpublishAsGame"), " ", (0, FC.jsx)(nC.c, {
                name: "info-circle"
              })]
            })
          }), (0, FC.jsxs)(fC.g, {
            onClick: zC.playGame,
            disabled: gC,
            children: [(0, FC.jsx)(nC.c, {
              name: "joystick"
            }), " ", QC("general:playGame")]
          })]
        }), !NC && (0, FC.jsx)(qC.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4925: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(1149);
    async function wC(CC) {
      const zC = await fetch(`${QC.clientSideServerUrls.s3Url}/${CC}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === zC.status || 403 === zC.status) return null;
      if (!zC.ok) throw new Error(`Failed to download the texture pack (${zC.status})`);
      return await zC.json()
    }
  },
  5024: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => pC
    });
    var QC = ZC(48),
      wC = ZC(1284),
      bC = ZC(970),
      nC = ZC(134),
      fC = ZC(1479),
      oC = ZC(20),
      qC = ZC(1840),
      FC = ZC(1439),
      WC = ZC(4525),
      NC = ZC(1307),
      MC = ZC(1076),
      gC = ZC(1453);

    function SC(CC, zC) {
      return {
        schematicId: CC.schematicId,
        name: CC.name,
        description: CC.description,
        gamePublished: zC,
        gameCategory: CC.gameCategory,
        defaultGamemode: CC.defaultGamemode,
        voidDeathHeight: CC.voidDeathHeight,
        disableKeepInventory: CC.disableKeepInventory,
        disableTpRequests: CC.disableTpRequests,
        disableLobbySpawn: CC.disableLobbySpawn,
        disableMobs: CC.disableMobs,
        disableSpawnProtection: CC.disableSpawnProtection,
        disableFallDamage: CC.disableFallDamage,
        worldBorder: CC.worldBorder,
        hideLobbyCode: CC.hideLobbyCode,
        enableSmpMarketplace: CC.enableSmpMarketplace,
        enableSurvivalGuns: CC.enableSurvivalGuns,
        enableSpawnReset: CC.enableSpawnReset,
        enableDayNight: CC.enableDayNight,
        persistWorld: CC.persistWorld,
        persistInventory: CC.persistInventory
      }
    }

    function pC(CC) {
      let {
        onNavigateAway: zC,
        inSourceWorld: ZC = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: pC
      } = (0, MC.e)(), PC = (0, gC.useNavigatePreserveSearch)(), [GC, RC] = (0, QC.useState)({
        ...CC
      }), [AC, xC] = (0, QC.useState)("Enter"), [JC, IC] = (0, QC.useState)(void 0), iC = (0, QC.useRef)(SC(CC, CC.gamePublished)), vC = (0, QC.useRef)(void 0), eC = "Enter" === AC, hC = pC.playerHasRank("developer") || pC.playerHasRank("admin") || "Enter" === AC && !1 !== GC.schematicContainsSpawnBlock, KC = void 0 !== JC && JC !== vC.current || JSON.stringify(SC(GC, GC.gamePublished)) !== JSON.stringify(iC.current);

      function YC(CC, zC) {
        RC((ZC => ({
          ...ZC,
          [CC]: zC
        })))
      }
      const dC = (0, QC.useCallback)((CC => {
        vC.current = CC, IC(CC)
      }), []);

      function mC(CC) {
        xC("Loading");
        const zC = SC(GC, CC),
          ZC = JC !== vC.current ? JC : void 0;
        FC.d.updateSchematic(pC, zC, ZC).then((ZC => {
          let {
            customTexturePackKey: QC
          } = ZC;
          xC("Success"), YC("customTexturePackKey", QC), iC.current = zC, vC.current = void 0, IC(void 0), setTimeout((() => {
            YC("gamePublished", CC), xC("Enter")
          }), 1e3)
        })).catch((CC => {
          var zC;
          (console.error("Failed to save schematic:", CC), xC("Error"), CC instanceof nC.d && CC.errorMessageForUser) && NC.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: CC.errorMessageForUser,
            textOpts: {
              subtitle: null !== (zC = CC.errorMessageTranslationParams) && void 0 !== zC ? zC : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            xC("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: GC,
        updateSchematicData: YC,
        setTexturePack: IC,
        initializeTexturePack: dC,
        updateState: AC,
        formEnabled: eC,
        publishFormEnabled: hC,
        hasUnsavedChanges: KC,
        canEditSourceWorld: !ZC,
        saveSchematic: mC,
        unpublishSchematic: function() {
          NC.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((CC => {
            !0 === CC && mC(!1)
          }))
        },
        editSourceWorld: function() {
          xC("Loading"), WC.d.getSourceWorld(GC.schematicId).then((CC => {
            qC.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, oC.g)("other"), PC((0, wC.b)("classic", CC)), null === zC || void 0 === zC || zC()
          })).catch((CC => {
            console.error("Failed to get source world:", CC), xC("Error"), setTimeout((() => {
              xC("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          qC.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), PC((0, fC.v)((0, bC.r)(GC.schematicId), GC)), null === zC || void 0 === zC || zC()
        }
      }
    }
  },
  4880: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);