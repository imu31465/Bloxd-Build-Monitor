export const id = 109;
export const ids = [109];
export const modules = {
  5290: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => JQ,
      h: () => gQ,
      i: () => rQ
    });
    XQ(5299);
    var wQ = XQ(1226),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1416),
      sQ = (XQ(61), XQ(4677)),
      FQ = XQ(1094),
      PQ = XQ(1145);

    function gQ(QQ) {
      let {
        children: WQ,
        label: XQ,
        className: qQ,
        circleInfoText: sQ,
        disabled: gQ,
        onLabelClick: JQ
      } = QQ;
      const {
        t: rQ
      } = (0, wQ.C)(), IQ = (0, PQ.jsxs)("div", {
        className: TQ()("Label", {
          ClickableLabel: void 0 !== JQ
        }),
        onClick: JQ,
        children: [rQ(XQ), sQ && (0, PQ.jsx)(FQ.d, {
          name: "circle-info"
        })]
      });
      return (0, PQ.jsxs)("div", {
        className: TQ()("LabeledInput", {
          [qQ]: qQ,
          DisabledLabelInput: gQ
        }),
        children: [sQ && (0, PQ.jsx)(zQ.e, {
          tooltipInner: (0, PQ.jsx)("div", {
            className: "LabeledInputTooltip",
            children: rQ(sQ)
          }),
          children: IQ
        }), !sQ && IQ, WQ]
      })
    }

    function JQ(QQ) {
      let {
        checked: WQ,
        setChecked: XQ
      } = QQ;
      return (0, PQ.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: QQ => {
          XQ(!WQ)
        },
        children: (0, PQ.jsx)(sQ.b, {
          checked: WQ,
          onChange: QQ => {
            XQ(QQ.target.checked)
          },
          disabled: !1
        })
      })
    }

    function rQ(QQ) {
      let {
        checked: WQ,
        setChecked: XQ,
        disabled: wQ
      } = QQ;
      return (0, PQ.jsx)("div", {
        className: TQ()("SwitchContainer", {
          SwitchContainerDisabled: wQ
        }),
        onClick: () => {
          wQ || XQ(!WQ)
        },
        children: (0, PQ.jsx)(sQ.b, {
          className: "SwitchCheckbox",
          checked: WQ,
          onChange: QQ => {
            XQ(QQ.target.checked)
          },
          disabled: !!wQ
        })
      })
    }
  },
  5304: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(4948),
      zQ = XQ(1226),
      sQ = XQ(1145);
    const FQ = [...TQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function PQ(QQ) {
      const {
        disabled: WQ,
        hideWrapper: XQ
      } = QQ, {
        t: wQ
      } = (0, zQ.C)(), PQ = QQ.advancedMode ? FQ.map((WQ => [WQ, QQ.callbacks[WQ]])) : TQ.j.map((WQ => [WQ, QQ.callbacks[WQ]])), JQ = (0, sQ.jsx)("div", {
        className: qQ()("PluginsGrid", {
          SectionBody: !XQ
        }),
        children: PQ.map((QQ => {
          let [XQ, wQ] = QQ;
          return (0, sQ.jsx)(gQ, {
            plugin: XQ,
            callbacks: wQ,
            disabled: WQ
          }, XQ)
        }))
      });
      return XQ ? JQ : (0, sQ.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, sQ.jsx)("div", {
          className: "SectionTitle",
          children: wQ("worldBuilder:pluginsSection")
        }), JQ]
      })
    }

    function gQ(QQ) {
      let {
        plugin: WQ,
        callbacks: {
          isEnabled: XQ,
          UH: wQ
        },
        disabled: TQ
      } = QQ;
      const {
        t: FQ
      } = (0, zQ.C)(), PQ = XQ();
      return (0, sQ.jsxs)("div", {
        className: qQ()("PluginCard", {
          PluginCardEnabled: PQ,
          PluginCardDisabledForm: TQ
        }),
        "data-pad-focusable": !0,
        "aria-disabled": TQ || void 0,
        onClick: () => {
          TQ || wQ(!PQ)
        },
        children: [(0, sQ.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, sQ.jsx)("img", {
            src: `/textures/games/classic/customGames/${WQ}.png`,
            alt: WQ
          })
        }), (0, sQ.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, sQ.jsx)("div", {
            className: "PluginCardTitle",
            children: FQ(JQ[WQ])
          }), (0, sQ.jsx)("div", {
            className: "PluginCardDescription",
            children: FQ(rQ[WQ])
          })]
        }), (0, sQ.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: FQ(PQ ? "general:on" : "general:off")
        })]
      })
    }
    const JQ = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      rQ = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5283: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      h: () => qW,
      d: () => wW,
      f: () => XW,
      j: () => TW
    });
    var wQ = XQ(61),
      qQ = XQ(1404),
      TQ = XQ(1507),
      zQ = XQ(1739),
      sQ = XQ(1226),
      FQ = XQ(1391),
      PQ = XQ(1416),
      gQ = XQ(1094),
      JQ = XQ(1257),
      rQ = XQ(1081),
      IQ = XQ.n(rQ),
      jQ = XQ(382),
      BQ = XQ(4948),
      yQ = XQ(1273),
      VQ = XQ(5290),
      DQ = XQ(3398),
      pQ = XQ(5304),
      GQ = XQ(1145);

    function UQ(QQ) {
      let {
        icon: WQ,
        title: XQ,
        disabled: wQ,
        children: qQ
      } = QQ;
      return (0, GQ.jsxs)("div", {
        className: IQ()("ManageCard", {
          ManageCardDisabled: wQ
        }),
        children: [(0, GQ.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, GQ.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, GQ.jsx)(gQ.d, {
              name: WQ
            })
          }), (0, GQ.jsx)("div", {
            children: (0, GQ.jsx)("h2", {
              className: "ManageCardTitle",
              children: XQ
            })
          })]
        }), (0, GQ.jsxs)("div", {
          className: "ManageCardBody",
          children: [qQ, wQ && (0, GQ.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function bQ(QQ) {
      let {
        label: WQ,
        caption: XQ,
        children: wQ
      } = QQ;
      return (0, GQ.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, GQ.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: WQ
        }), wQ, XQ && (0, GQ.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: XQ
        })]
      })
    }

    function vQ(QQ) {
      let {
        label: WQ,
        caption: XQ,
        disabled: wQ,
        children: qQ
      } = QQ;
      return (0, GQ.jsxs)("div", {
        className: IQ()("ManageField", {
          ManageFieldDisabled: wQ
        }),
        children: [(0, GQ.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, GQ.jsx)("div", {
            className: "ManageFieldLabel",
            children: WQ
          }), (0, GQ.jsx)("div", {
            className: "ManageFieldCaption",
            children: XQ
          })]
        }), (0, GQ.jsx)("div", {
          className: "ManageFieldControl",
          children: qQ
        })]
      })
    }

    function dQ(QQ) {
      var WQ, XQ;
      let {
        schematicData: wQ,
        updateSchematicData: qQ,
        publishFormEnabled: TQ,
        formEnabled: zQ
      } = QQ;
      const {
        t: FQ
      } = (0, sQ.C)(), PQ = !TQ, gQ = {
        tpRequests: {
          isEnabled: () => !wQ.disableTpRequests,
          UH: QQ => qQ("disableTpRequests", !QQ)
        },
        spawnProtection: {
          isEnabled: () => !wQ.disableSpawnProtection,
          UH: QQ => qQ("disableSpawnProtection", !QQ)
        },
        spawnReset: {
          isEnabled: () => !!wQ.enableSpawnReset,
          UH: QQ => qQ("enableSpawnReset", QQ)
        },
        smpMarketplace: {
          isEnabled: () => !!wQ.enableSmpMarketplace,
          UH: QQ => qQ("enableSmpMarketplace", QQ)
        },
        survivalGuns: {
          isEnabled: () => !!wQ.enableSurvivalGuns,
          UH: QQ => qQ("enableSurvivalGuns", QQ)
        },
        fallDamage: {
          isEnabled: () => !wQ.disableFallDamage,
          UH: QQ => qQ("disableFallDamage", !QQ)
        },
        dayNight: {
          isEnabled: () => !!wQ.enableDayNight,
          UH: QQ => qQ("enableDayNight", QQ)
        }
      };
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [!1 === wQ.schematicContainsSpawnBlock && (0, GQ.jsx)("div", {
          className: "ManageWarningBanner",
          children: FQ("worldBuilder:mustContainSpawnBlock")
        }), (0, GQ.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, GQ.jsxs)(UQ, {
            icon: "globe",
            title: FQ("worldBuilder:worldRulesSection"),
            disabled: !zQ,
            children: [(0, GQ.jsx)(vQ, {
              label: FQ("classic:defaultGamemode"),
              caption: FQ("classic:defaultGamemodeDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(DQ.c, {
                controlClassName: "ManageDropdown",
                options: BQ.E.map((QQ => ({
                  value: QQ,
                  label: jQ.u[QQ]
                }))),
                value: wQ.defaultGamemode,
                onChange: QQ => qQ("defaultGamemode", QQ.value)
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:voidDeathHeight"),
              caption: FQ("classic:voidDeathHeightDescription"),
              disabled: PQ,
              children: (0, GQ.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, GQ.jsx)("input", {
                  type: "number",
                  max: yQ.I,
                  value: null !== (WQ = wQ.voidDeathHeight) && void 0 !== WQ ? WQ : "",
                  onChange: QQ => {
                    const WQ = parseInt(QQ.target.value);
                    qQ("voidDeathHeight", WQ)
                  }
                }), (0, GQ.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: FQ("worldBuilder:blocksUnit")
                })]
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:worldBorder"),
              caption: FQ("classic:worldBorderDescription"),
              disabled: PQ,
              children: (0, GQ.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, GQ.jsx)("input", {
                  type: "number",
                  min: yQ.Q,
                  max: yQ.K,
                  placeholder: FQ("worldBuilder:noWorldBorderLimit"),
                  value: null !== (XQ = wQ.worldBorder) && void 0 !== XQ ? XQ : "",
                  onChange: QQ => {
                    const WQ = parseInt(QQ.target.value);
                    qQ("worldBorder", isNaN(WQ) ? null : WQ)
                  }
                }), (0, GQ.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: FQ("worldBuilder:blocksUnit")
                })]
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:disableMobs"),
              caption: FQ("classic:disableMobsDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(VQ.i, {
                checked: wQ.disableMobs,
                setChecked: QQ => qQ("disableMobs", QQ),
                disabled: PQ
              })
            })]
          }), (0, GQ.jsxs)(UQ, {
            icon: "user-group",
            title: FQ("worldBuilder:playerAndLobbySection"),
            disabled: !zQ,
            children: [(0, GQ.jsx)(vQ, {
              label: FQ("classic:disableKeepInventory"),
              caption: FQ("classic:disableKeepInventoryDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(VQ.i, {
                checked: wQ.disableKeepInventory,
                setChecked: QQ => qQ("disableKeepInventory", QQ),
                disabled: PQ
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:persistInventory"),
              caption: FQ("classic:persistInventoryDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(DQ.c, {
                controlClassName: "ManageDropdown",
                options: BQ.m.map((QQ => ({
                  value: QQ,
                  label: jQ.g[QQ]
                }))),
                value: wQ.persistInventory,
                onChange: QQ => qQ("persistInventory", QQ.value)
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:persistWorld"),
              caption: FQ("classic:persistWorldDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(VQ.i, {
                checked: wQ.persistWorld,
                setChecked: QQ => qQ("persistWorld", QQ),
                disabled: PQ
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:disableLobbySpawn"),
              caption: FQ("classic:disableLobbySpawnDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(VQ.i, {
                checked: wQ.disableLobbySpawn,
                setChecked: QQ => qQ("disableLobbySpawn", QQ),
                disabled: PQ
              })
            }), (0, GQ.jsx)(vQ, {
              label: FQ("classic:hideLobbyCode"),
              caption: FQ("classic:hideLobbyCodeDescription"),
              disabled: PQ,
              children: (0, GQ.jsx)(VQ.i, {
                checked: wQ.hideLobbyCode,
                setChecked: QQ => qQ("hideLobbyCode", QQ),
                disabled: PQ
              })
            })]
          })]
        }), (0, GQ.jsx)(UQ, {
          icon: "layer-group",
          title: FQ("worldBuilder:pluginsSection"),
          disabled: !zQ,
          children: (0, GQ.jsx)(pQ.c, {
            callbacks: gQ,
            disabled: PQ,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var HQ = XQ(5307),
      aQ = XQ(4677),
      lQ = XQ(1548),
      hQ = XQ(3736),
      iQ = XQ(1162),
      cQ = XQ(5256),
      AQ = XQ(5310),
      RQ = XQ(1514);
    const EQ = 50,
      CQ = .3;
    async function uQ(QQ) {
      const WQ = await
      function(QQ) {
        return new Promise(((WQ, XQ) => {
          const wQ = new FileReader;
          wQ.onload = () => WQ(wQ.result), wQ.onerror = XQ, wQ.readAsDataURL(QQ)
        }))
      }(QQ), XQ = await
      function(QQ) {
        return new Promise(((WQ, XQ) => {
          const wQ = new Image;
          wQ.onload = () => WQ(wQ), wQ.onerror = () => XQ(new Error("Failed to load image")), wQ.src = QQ
        }))
      }(WQ);
      if (XQ.naturalHeight > XQ.naturalWidth) throw new LQ;
      const wQ = 1024 * EQ,
        {
          dataUrl: qQ,
          finalQuality: TQ
        } = function(QQ, WQ) {
          const XQ = document.createElement("canvas");
          XQ.width = QQ.naturalWidth, XQ.height = QQ.naturalHeight, XQ.getContext("2d").drawImage(QQ, 0, 0);
          let wQ = .92,
            qQ = XQ.toDataURL("image/jpeg", wQ);
          for (; .75 * qQ.length > WQ && wQ > .05;) wQ -= .05, qQ = XQ.toDataURL("image/jpeg", wQ);
          return {
            dataUrl: qQ,
            finalQuality: wQ
          }
        }(XQ, wQ);
      if (Math.ceil(.75 * qQ.length) > wQ) throw new kQ;
      return {
        base64Jpg: qQ,
        heavilyCompressed: TQ < CQ
      }
    }
    class LQ extends Error {}
    class kQ extends Error {}
    var fQ = function(QQ) {
      return QQ[QQ.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", QQ[QQ.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", QQ
    }(fQ || {});

    function SQ(QQ) {
      var WQ;
      let {
        schematicId: XQ,
        hasReadUploadPolicy: qQ,
        onPolicyValidationError: FQ,
        onThumbnailReady: PQ
      } = QQ;
      const {
        t: rQ
      } = (0, sQ.C)(), [jQ, BQ] = (0, wQ.useState)(null), [yQ, VQ] = (0, wQ.useState)(""), [DQ, pQ] = (0, wQ.useState)(""), [UQ, bQ] = (0, wQ.useState)(!0), [vQ, dQ] = (0, wQ.useState)(!1), HQ = (0, wQ.useRef)(!1), [aQ, lQ] = (0, wQ.useState)(null), [hQ, iQ] = (0, wQ.useState)(!1), [cQ, RQ] = (0, wQ.useState)(!1), EQ = (0, wQ.useRef)(0), {
        getRootProps: CQ,
        getInputProps: fQ,
        isDragActive: SQ
      } = (0, AQ.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async QQ => {
          if (0 === QQ.length) return;
          const WQ = QQ[0],
            XQ = ++EQ.current;
          lQ(null), iQ(!1), BQ(null), VQ(WQ.name);
          try {
            const QQ = await uQ(WQ);
            if (XQ !== EQ.current) return;
            BQ(QQ), iQ(QQ.heavilyCompressed)
          } catch (wQ) {
            if (XQ !== EQ.current) return;
            lQ(rQ(wQ instanceof LQ ? "thumbnail:portraitImagesNotAllowed" : wQ instanceof kQ ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), tQ = yQ.length <= 30 ? yQ : `${yQ.slice(0,27)}...`, oQ = null !== (WQ = null === jQ || void 0 === jQ ? void 0 : jQ.base64Jpg) && void 0 !== WQ ? WQ : null, eQ = DQ.trim(), nQ = eQ.length >= JQ.l && eQ.length <= JQ.k, xQ = cQ && !jQ && !aQ, YQ = cQ && !nQ;
      return (0, GQ.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, GQ.jsxs)("div", {
          ...CQ({
            className: IQ()("ThumbnailUploadDropzone", {
              ActiveDrag: SQ,
              ValidationError: xQ
            })
          }),
          children: [(0, GQ.jsx)("input", {
            ...fQ()
          }), !SQ && oQ ? (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, GQ.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, GQ.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, GQ.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, GQ.jsx)("img", {
                    src: oQ,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, GQ.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, GQ.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, GQ.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, GQ.jsx)("img", {
                    src: oQ,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: tQ
              }), (0, GQ.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: rQ("thumbnail:preview")
              })]
            })]
          }) : (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, GQ.jsx)(gQ.d, {
                name: "image"
              })
            }), (0, GQ.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: rQ("thumbnail:dragImageHere")
            })]
          })]
        }), xQ && (0, GQ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: rQ("thumbnail:imageRequired")
        }), (0, GQ.jsx)(zQ.e, {
          className: IQ()("ThumbnailUploadNameInput", {
            ValidationError: YQ
          }),
          placeholderText: rQ("thumbnail:thumbnailName"),
          defaultValue: DQ,
          onValueChange: QQ => {
            pQ(QQ)
          },
          maxLength: JQ.k
        }), YQ && (0, GQ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: rQ("thumbnail:nameRequired", {
            min: JQ.l,
            max: JQ.k
          })
        }), (0, GQ.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, GQ.jsx)("input", {
            type: "checkbox",
            checked: UQ,
            onChange: QQ => {
              bQ(QQ.target.checked)
            }
          }), rQ("thumbnail:setAsThumbnailOnceApproved")]
        }), hQ && (0, GQ.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: rQ("thumbnail:heavyCompressionWarning")
        }), aQ && (0, GQ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: aQ
        }), (0, GQ.jsx)(TQ.s, {
          disabled: vQ,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (RQ(!0), !HQ.current && jQ && nQ && qQ) {
              HQ.current = !0, dQ(!0), lQ(null);
              try {
                await PQ(jQ.base64Jpg, eQ, UQ ? XQ : null)
              } catch (QQ) {
                lQ(QQ.errorMessageForUser ? rQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : rQ("thumbnail:failedToUploadImage"))
              } finally {
                HQ.current = !1, dQ(!1)
              }
            } else qQ || FQ()
          },
          children: rQ(vQ ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const tQ = 2e3;

    function oQ(QQ) {
      let {
        schematicId: WQ,
        ownedThumbnailCount: XQ,
        onClose: qQ,
        onThumbnailReady: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, sQ.C)(), {
        userContext: FQ
      } = (0, iQ.c)(), [PQ, rQ] = (0, wQ.useState)(!1), [jQ, BQ] = (0, wQ.useState)(!1), [yQ, VQ] = (0, wQ.useState)(!1), DQ = (0, wQ.useRef)();
      (0, wQ.useEffect)((() => () => {
        clearTimeout(DQ.current)
      }), []);
      const pQ = function(QQ, WQ) {
        const XQ = [];
        return QQ.isLoggedIn() || XQ.push(fQ.NOT_LOGGED_IN), WQ >= JQ.S && XQ.push(fQ.THUMBNAIL_LIMIT_REACHED), XQ
      }(FQ, XQ);
      if (pQ.length > 0) {
        const QQ = {
          [fQ.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [fQ.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: JQ.S
            }
          }
        };
        return (0, GQ.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, GQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: zQ("thumbnail:cannotUploadThumbnail")
          }), pQ.map(((WQ, XQ) => {
            const wQ = QQ[WQ];
            return (0, GQ.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, GQ.jsx)(gQ.d, {
                name: "triangle-exclamation"
              }), (0, GQ.jsx)("span", {
                children: zQ(wQ.key, wQ.params)
              })]
            }, XQ)
          }))]
        })
      }
      return (0, GQ.jsxs)("div", {
        className: IQ()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: PQ
        }),
        children: [PQ && (0, GQ.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, GQ.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, GQ.jsx)(gQ.d, {
              name: "check"
            }), (0, GQ.jsx)(RQ.d, {})]
          }), (0, GQ.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: zQ("thumbnail:thumbnailUploaded")
          })]
        }), (0, GQ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: zQ("thumbnail:uploadThumbnail")
        }), (0, GQ.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, GQ.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, GQ.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: zQ("thumbnail:chooseImage", {
                maxSizeKb: EQ
              })
            }), (0, GQ.jsx)(SQ, {
              schematicId: WQ,
              hasReadUploadPolicy: jQ,
              onPolicyValidationError: () => {
                VQ(!0)
              },
              onThumbnailReady: async (QQ, WQ, XQ) => {
                await TQ(QQ, WQ, XQ), rQ(!0), DQ.current = setTimeout(qQ, tQ)
              }
            })]
          }), (0, GQ.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, GQ.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: zQ("thumbnail:uploadPolicy")
            }), (0, GQ.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "check"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyFollowGuidelines")
                })]
              }), (0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "check"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyInGameAssets")
                })]
              }), (0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "check"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyLimitText")
                })]
              }), (0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "x"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyCopyrightContent")
                })]
              }), (0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "x"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "x"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyBloxdTags")
                })]
              }), (0, GQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, GQ.jsx)(gQ.d, {
                  name: "x"
                }), (0, GQ.jsx)("span", {
                  children: zQ("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, GQ.jsxs)("label", {
              className: IQ()("ThumbnailUploadCheckbox Policy", {
                ValidationError: yQ && !jQ
              }),
              children: [(0, GQ.jsx)("input", {
                type: "checkbox",
                checked: jQ,
                onChange: QQ => {
                  BQ(QQ.target.checked)
                }
              }), zQ("thumbnail:agreeToUploadPolicy")]
            }), yQ && !jQ && (0, GQ.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: zQ("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var eQ = XQ(1238);
    const nQ = {
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

    function xQ(QQ) {
      var WQ, XQ;
      let {
        schematicData: zQ,
        updateSchematicData: PQ,
        publishFormEnabled: JQ,
        onClose: rQ
      } = QQ;
      const {
        t: jQ
      } = (0, sQ.C)(), {
        userContext: BQ,
        isUserContextUpdating: yQ
      } = (0, iQ.c)(), VQ = (0, hQ.d)(), [DQ, pQ] = (0, wQ.useState)([]), [UQ, bQ] = (0, wQ.useState)([]), [vQ, dQ] = (0, wQ.useState)(!0), [HQ, aQ] = (0, wQ.useState)(null !== (WQ = zQ.customThumbnailId) && void 0 !== WQ ? WQ : null), [AQ, RQ] = (0, wQ.useState)(null), EQ = (0, wQ.useRef)(null !== (XQ = zQ.customThumbnailId) && void 0 !== XQ ? XQ : null), CQ = (0, wQ.useRef)(0), uQ = (0, wQ.useRef)(null), LQ = (0, wQ.useRef)(null), kQ = (0, wQ.useRef)(null), fQ = (0, wQ.useRef)(!1);

      function SQ(QQ, WQ) {
        kQ.current && (clearTimeout(kQ.current), kQ.current = null), RQ(QQ), null !== QQ && WQ && (kQ.current = setTimeout((() => {
          RQ(null), kQ.current = null
        }), 5e3))
      }(0, wQ.useEffect)((() => () => {
        clearTimeout(LQ.current), clearTimeout(kQ.current)
      }), []);
      const tQ = (0, wQ.useCallback)((() => {
        dQ(!0), lQ.e.getOwnedThumbnails(BQ).then((QQ => {
          const WQ = [],
            XQ = [];
          for (const wQ of QQ.thumbnails) wQ.rejectionPolicyId ? WQ.push(wQ) : XQ.push(wQ);
          WQ.sort(((QQ, WQ) => QQ.lastUpdatedAt - WQ.lastUpdatedAt)), XQ.sort(((QQ, WQ) => {
            const XQ = QQ.approved ? 1 : 0,
              wQ = (WQ.approved ? 1 : 0) - XQ;
            return 0 !== wQ ? wQ : WQ.lastUpdatedAt - QQ.lastUpdatedAt
          })), bQ(WQ), pQ(XQ)
        })).catch((QQ => {
          console.error("Failed to fetch thumbnails:", QQ)
        })).finally((() => {
          dQ(!1)
        }))
      }), [BQ]);
      async function nQ(QQ, WQ, XQ) {
        return lQ.e.uploadSchematicThumbnail(BQ, QQ, WQ, XQ).then((() => {
          SQ({
            text: jQ("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), tQ()
        }))
      }

      function xQ() {
        CQ.current = Date.now(), LQ.current = null;
        const QQ = uQ.current;
        uQ.current = null, SQ({
          text: jQ("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), lQ.e.setSchematicThumbnail(BQ, zQ.schematicId, QQ).then((() => {
          VQ.current && (SQ({
            text: jQ("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), EQ.current = QQ, PQ("customThumbnailId", QQ), PQ("customThumbnailBlurhash", void 0), PQ("customThumbnailVariants", void 0))
        })).catch((QQ => {
          VQ.current && (SQ({
            text: QQ.errorMessageForUser ? jQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : jQ("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), aQ(EQ.current))
        }))
      }

      function ZQ(QQ) {
        aQ(QQ), uQ.current = QQ;
        const WQ = Date.now() - CQ.current;
        WQ >= 1e3 ? xQ() : (SQ({
          text: jQ("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), LQ.current || (LQ.current = setTimeout((() => {
          xQ()
        }), 1e3 - WQ)))
      }
      return (0, wQ.useEffect)((() => {
        !1 === yQ && tQ()
      }), [yQ, tQ]), UQ.length > 0 ? (0, GQ.jsx)(YQ, {
        rejectedThumbnails: UQ,
        userContext: BQ,
        isMountedRef: VQ,
        onAcknowledged: tQ
      }) : (0, GQ.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, GQ.jsxs)("div", {
          className: "SectionTitle",
          children: [jQ("thumbnail:gameThumbnail"), AQ && (0, GQ.jsx)("span", {
            className: IQ()("ThumbnailActionMsg", `ThumbnailActionMsg--${AQ.type}`),
            children: AQ.text
          })]
        }), (0, GQ.jsx)("div", {
          className: "SectionBody",
          children: (0, GQ.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, GQ.jsxs)("div", {
              className: IQ()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === HQ
              }),
              onClick: () => ZQ(null),
              children: [(0, GQ.jsx)(cQ.b, {
                game: {
                  schematicId: zQ.schematicId,
                  imageBlurhash: zQ.imageBlurhash
                }
              }), (0, GQ.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: jQ("general:default")
              })]
            }), vQ && (0, GQ.jsx)(FQ.e, {}), DQ.map(((QQ, WQ) => (0, GQ.jsxs)("div", {
              className: IQ()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: HQ === QQ.id,
                ThumbnailGridItemPending: !QQ.approved
              }),
              onClick: () => {
                QQ.approved && ZQ(QQ.id)
              },
              children: [QQ.approved && (0, GQ.jsx)("img", {
                src: `${eQ.clientSideServerUrls.s3Url}/customThumbnails/${QQ.id}.jpg`,
                alt: "Thumbnail"
              }), QQ.approved && (0, GQ.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: QQ.name
              }), QQ.id && (0, GQ.jsx)(TQ.P, {
                className: "ThumbnailDeleteButton",
                onClick: WQ => async function(QQ, WQ, XQ) {
                  QQ.stopPropagation();
                  const wQ = await qQ.NotificationProvider.showCustomPopup({
                      body: QQ => (0, GQ.jsx)(NQ, {
                        thumbnailId: WQ,
                        thumbnailName: XQ,
                        onClose: WQ => {
                          WQ && (fQ.current = !0), QQ()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: rQ
                    }).getResult(),
                    TQ = fQ.current;
                  fQ.current = !1, TQ && !0 === wQ && (VQ.current && SQ({
                    text: jQ("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), lQ.e.deleteSchematicThumbnail(BQ, WQ).then((() => {
                    VQ.current && (SQ({
                      text: jQ("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), EQ.current === WQ && ZQ(null), tQ())
                  })).catch((QQ => {
                    VQ.current && SQ({
                      text: QQ.errorMessageForUser ? jQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : jQ("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(WQ, QQ.id, QQ.name),
                children: (0, GQ.jsx)(gQ.d, {
                  name: "trash-can"
                })
              }), !QQ.approved && (0, GQ.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, GQ.jsx)(gQ.d, {
                  name: "hourglass-clock"
                })
              }), !QQ.approved && (0, GQ.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [QQ.name, (0, GQ.jsx)("br", {}), jQ("thumbnail:pendingApproval")]
              })]
            }, WQ))), (0, GQ.jsxs)("div", {
              className: IQ()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !JQ
              }),
              onClick: () => {
                JQ && function(QQ) {
                  let {
                    schematicId: WQ,
                    ownedThumbnailCount: XQ,
                    onThumbnailReady: wQ,
                    onClose: TQ
                  } = QQ;
                  qQ.NotificationProvider.showCustomPopup({
                    body: QQ => (0, GQ.jsx)(oQ, {
                      schematicId: WQ,
                      ownedThumbnailCount: XQ,
                      onClose: QQ,
                      onThumbnailReady: wQ
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: TQ,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: zQ.schematicId,
                  ownedThumbnailCount: DQ.length,
                  onThumbnailReady: nQ,
                  onClose: rQ
                })
              },
              children: [(0, GQ.jsx)(gQ.d, {
                name: "plus"
              }), (0, GQ.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: jQ("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function YQ(QQ) {
      let {
        rejectedThumbnails: WQ,
        userContext: XQ,
        isMountedRef: qQ,
        onAcknowledged: zQ
      } = QQ;
      const {
        t: PQ
      } = (0, sQ.C)(), [JQ, rQ] = (0, wQ.useState)(!1), [IQ, jQ] = (0, wQ.useState)(!1), BQ = function(QQ) {
        const WQ = new Map;
        for (const XQ of QQ) {
          const QQ = XQ.rejectionPolicyId,
            wQ = WQ.get(QQ);
          wQ ? wQ.push(XQ) : WQ.set(QQ, [XQ])
        }
        return WQ
      }(WQ);
      return (0, GQ.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, GQ.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, GQ.jsx)(gQ.d, {
            name: "triangle-exclamation"
          }), " ", PQ("thumbnail:thumbnailsRejected"), " ", (0, GQ.jsx)(gQ.d, {
            name: "triangle-exclamation"
          })]
        }), (0, GQ.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: PQ("thumbnail:thumbnailsRejectedDescription")
        }), (0, GQ.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...BQ.entries()].map((QQ => {
            let [WQ, XQ] = QQ;
            const wQ = nQ[WQ];
            return (0, GQ.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, GQ.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: XQ.map((QQ => (0, GQ.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, GQ.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, GQ.jsx)(gQ.d, {
                      name: "image-slash"
                    })
                  }), (0, GQ.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, GQ.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: QQ.name
                    })
                  })]
                }, QQ.id)))
              }), (0, GQ.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [PQ("thumbnail:rejectionReason"), " ", wQ ? PQ(wQ.reason) : WQ]
              }), wQ && (0, GQ.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: wQ.tips.map((QQ => (0, GQ.jsx)("li", {
                  children: PQ(QQ)
                }, QQ)))
              })]
            }, WQ)
          }))
        }), (0, GQ.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, GQ.jsx)(aQ.b, {
            checked: JQ,
            onChange: QQ => rQ(QQ.target.checked),
            disabled: IQ
          }), (0, GQ.jsx)("span", {
            children: PQ("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, GQ.jsx)(TQ.s, {
          onClick: async function() {
            jQ(!0);
            const QQ = await Promise.allSettled(WQ.map((QQ => lQ.e.deleteSchematicThumbnail(XQ, QQ.id))));
            if (!qQ.current) return;
            const wQ = QQ.filter((QQ => "rejected" === QQ.status));
            wQ.length > 0 && console.error("Some rejected thumbnails failed to delete:", wQ), zQ()
          },
          disabled: !JQ || IQ,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: IQ ? (0, GQ.jsx)(FQ.e, {}) : PQ("general:accept")
        })]
      })
    }

    function NQ(QQ) {
      let {
        thumbnailId: WQ,
        thumbnailName: XQ,
        onClose: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, sQ.C)();
      return (0, GQ.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, GQ.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: qQ("thumbnail:deleteThumbnail")
        }), (0, GQ.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, GQ.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${eQ.clientSideServerUrls.s3Url}/customThumbnails/${WQ}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, GQ.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: XQ
          })]
        }), (0, GQ.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: qQ("thumbnail:deleteThumbnailConfirmation")
        }), (0, GQ.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, GQ.jsxs)(TQ.P, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => wQ(!0),
            children: [(0, GQ.jsx)(gQ.d, {
              name: "trash-can"
            }), " ", qQ("general:delete")]
          }), (0, GQ.jsx)(TQ.l, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => wQ(!1),
            children: qQ("general:cancel")
          })]
        })]
      })
    }
    var ZQ = XQ(2226),
      OQ = XQ(5340),
      KQ = XQ(5346),
      mQ = XQ(5384);

    function MQ(QQ) {
      let {
        schematicData: WQ,
        setTexturePack: XQ,
        initializeTexturePack: qQ,
        publishFormEnabled: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, sQ.C)(), [FQ, PQ] = (0, wQ.useState)(null), [gQ, JQ] = (0, wQ.useState)(null), [rQ, jQ] = (0, wQ.useState)(!1), BQ = (0, hQ.d)(), yQ = TQ && !rQ, VQ = WQ.customTexturePackKey;

      function DQ(QQ) {
        var WQ;
        PQ(QQ.metaData.id), JQ(null !== (WQ = QQ.metaData.fromFolderName) && void 0 !== WQ ? WQ : null), (QQ.metaData.id !== ZQ.i.CUSTOM || QQ.metaData.fromFolderName) && XQ(QQ)
      }
      return (0, wQ.useEffect)((() => {
        VQ && (jQ(!0), (0, OQ.e)(VQ).then((QQ => {
          var WQ;
          BQ.current && (QQ ? (PQ(QQ.metaData.id), JQ(null !== (WQ = QQ.metaData.fromFolderName) && void 0 !== WQ ? WQ : null), qQ(QQ)) : console.error(`No texture pack at ${VQ}`))
        })).catch((QQ => {
          console.error("Error fetching texture pack: ", QQ)
        })).finally((() => {
          jQ(!1)
        })))
      }), [VQ, qQ, BQ]), (0, GQ.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, GQ.jsx)("div", {
          className: "SectionTitle",
          children: zQ("customTexturePack:customTexturePack")
        }), (0, GQ.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, GQ.jsx)("div", {
            className: IQ()("TexturePack", {
              Selected: null === FQ && !rQ,
              Disabled: !yQ
            }),
            onClick: () => {
              yQ && (PQ(null), XQ(null), JQ(null))
            },
            children: (0, GQ.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(ZQ.i).map((QQ => (0, GQ.jsx)(KQ.e, {
            id: QQ,
            isSelected: QQ === FQ,
            setSelected: DQ,
            disabled: !yQ
          }, QQ)))]
        }), FQ === ZQ.i.CUSTOM && (0, GQ.jsx)(mQ.d, {
          folderName: gQ,
          onTexturePackUpdated: DQ,
          disabled: !yQ,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var QW = XQ(5411);

    function WW(QQ) {
      var WQ;
      let {
        gameCategory: XQ,
        setGameCategory: wQ,
        disabled: qQ
      } = QQ;
      const zQ = null !== (WQ = (0, jQ.jb)(XQ)) && void 0 !== WQ ? WQ : "other";
      return (0, GQ.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, GQ.jsx)(VQ.h, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: qQ,
          children: (0, GQ.jsx)(DQ.c, {
            options: jQ.$.map((QQ => ({
              value: QQ,
              label: jQ.Z[QQ]
            }))),
            value: zQ,
            onChange: QQ => {
              QQ.value !== zQ && wQ(jQ.U[QQ.value][0])
            }
          })
        }), (0, GQ.jsx)(VQ.h, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: qQ,
          children: (0, GQ.jsx)("div", {
            className: "GameCategoryOptions",
            children: jQ.U[zQ].map((QQ => (0, GQ.jsx)(TQ.T, {
              active: QQ === XQ,
              onClick: () => {
                wQ(QQ)
              },
              children: (0, jQ.hb)(QQ)
            }, QQ)))
          })
        })]
      })
    }

    function XW(QQ) {
      let {
        editor: WQ,
        onClose: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, sQ.C)(), {
        schematicData: qQ,
        updateSchematicData: TQ,
        publishFormEnabled: FQ,
        formEnabled: PQ
      } = WQ;
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [(0, GQ.jsxs)(UQ, {
          icon: "pen-to-square",
          title: wQ("worldBuilder:basicsSection"),
          disabled: !PQ,
          children: [(0, GQ.jsx)(bQ, {
            label: wQ("general:name"),
            caption: wQ("worldBuilder:schematicNameTagsHint"),
            children: (0, GQ.jsx)(zQ.e, {
              className: "SchematicPageName",
              defaultValue: qQ.name,
              onValueChange: QQ => TQ("name", QQ),
              placeholderText: wQ("worldBuilder:schematicNamePlaceholder"),
              maxLength: JQ.mb
            })
          }), (0, GQ.jsx)(bQ, {
            label: wQ("general:description"),
            children: (0, GQ.jsx)(zQ.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: qQ.description,
              onValueChange: QQ => TQ("description", QQ),
              placeholderText: wQ("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: JQ.jb
            })
          }), (0, GQ.jsx)(WW, {
            gameCategory: qQ.gameCategory,
            setGameCategory: QQ => TQ("gameCategory", QQ),
            disabled: !FQ
          }), !0 === qQ.gamePublished && (0, GQ.jsx)(xQ, {
            schematicData: qQ,
            updateSchematicData: TQ,
            publishFormEnabled: FQ,
            onClose: function() {
              null === XQ || void 0 === XQ || XQ()
            }
          })]
        }), (0, GQ.jsx)(dQ, {
          schematicData: qQ,
          updateSchematicData: TQ,
          publishFormEnabled: FQ,
          formEnabled: PQ
        }), !0 === qQ.gamePublished && (0, GQ.jsx)(UQ, {
          icon: "palette",
          title: wQ("worldBuilder:texturePackSection"),
          disabled: !PQ,
          children: (0, GQ.jsx)(MQ, {
            schematicData: qQ,
            setTexturePack: WQ.setTexturePack,
            initializeTexturePack: WQ.initializeTexturePack,
            publishFormEnabled: FQ
          })
        })]
      })
    }

    function wW(QQ) {
      let {
        editor: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, sQ.C)(), {
        schematicData: wQ,
        formEnabled: qQ,
        hasUnsavedChanges: zQ
      } = WQ, JQ = qQ && zQ;
      return (0, GQ.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [qQ && zQ && (0, GQ.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, GQ.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), XQ("worldBuilder:unsavedChanges")]
        }), (0, GQ.jsx)(PQ.e, {
          tooltipInner: (0, GQ.jsx)("div", {
            className: "SaveButtonTooltip",
            children: XQ(qQ && !zQ ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, GQ.jsxs)(TQ.h, {
            className: "SaveChangesButton",
            onClick: () => WQ.saveSchematic(wQ.gamePublished),
            disabled: !JQ,
            children: [(0, GQ.jsxs)("span", {
              className: qQ ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, GQ.jsx)(gQ.d, {
                name: "wrench"
              }), " ", XQ("worldBuilder:saveChanges")]
            }), !qQ && (0, GQ.jsx)(FQ.e, {})]
          })
        })]
      })
    }

    function qW(QQ) {
      let {
        schematic: WQ,
        onSchematicUpdate: XQ,
        onClose: qQ,
        inSourceWorld: zQ
      } = QQ;
      const {
        t: FQ
      } = (0, sQ.C)();

      function PQ() {
        null === qQ || void 0 === qQ || qQ()
      }
      const gQ = (0, QW.e)(WQ, {
        onNavigateAway: PQ,
        inSourceWorld: zQ
      });
      return (0, wQ.useEffect)((() => {
        null === XQ || void 0 === XQ || XQ(gQ.schematicData)
      }), [gQ.schematicData, XQ]), (0, GQ.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, GQ.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, GQ.jsx)(TQ.e, {
            onClick: PQ,
            children: FQ("worldBuilder:back")
          }), (0, GQ.jsx)(UQ, {
            icon: "rocket-launch",
            title: FQ("worldBuilder:actionsSection"),
            disabled: !gQ.formEnabled,
            children: (0, GQ.jsx)(HQ.c, {
              editor: gQ
            })
          }), (0, GQ.jsx)(XW, {
            editor: gQ,
            onClose: PQ
          })]
        }), (0, GQ.jsx)(wW, {
          editor: gQ
        })]
      })
    }

    function TW(QQ) {
      let {
        schematic: WQ,
        onSchematicUpdate: XQ,
        onClose: wQ,
        inSourceWorld: TQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, GQ.jsx)(qW, {
          schematic: WQ,
          onSchematicUpdate: XQ,
          onClose: QQ,
          inSourceWorld: TQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wQ,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5307: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1226),
      zQ = XQ(1094),
      sQ = XQ(1507),
      FQ = XQ(1416),
      PQ = XQ(1391),
      gQ = XQ(1145);

    function JQ(QQ) {
      let {
        editor: WQ,
        className: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, TQ.C)(), {
        schematicData: JQ,
        formEnabled: rQ,
        publishFormEnabled: IQ
      } = WQ, jQ = !rQ || !IQ;
      return (0, gQ.jsxs)("div", {
        className: qQ()("PublishButtonContainer", XQ),
        children: [WQ.canEditSourceWorld && (0, gQ.jsxs)(sQ.h, {
          onClick: WQ.editSourceWorld,
          disabled: jQ,
          children: [(0, gQ.jsx)(zQ.d, {
            name: "edit"
          }), " ", wQ("worldBuilder:editSourceWorld")]
        }), !JQ.gamePublished && (0, gQ.jsx)(FQ.e, {
          tooltipInner: (0, gQ.jsx)("div", {
            className: "PublishButtonTooltip",
            children: wQ("worldBuilder:publishAsGameDescription")
          }),
          children: (0, gQ.jsxs)(sQ.s, {
            onClick: () => WQ.saveSchematic(!0),
            disabled: jQ,
            children: [(0, gQ.jsx)(zQ.d, {
              name: "rocket-launch"
            }), " ", wQ("worldBuilder:publishAsGame"), " ", (0, gQ.jsx)(zQ.d, {
              name: "info-circle"
            })]
          })
        }), !0 === JQ.gamePublished && (0, gQ.jsxs)(gQ.Fragment, {
          children: [(0, gQ.jsx)(FQ.e, {
            tooltipInner: (0, gQ.jsx)("div", {
              className: "PublishButtonTooltip",
              children: wQ("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, gQ.jsxs)(sQ.P, {
              onClick: WQ.unpublishSchematic,
              disabled: jQ,
              children: [(0, gQ.jsx)(zQ.d, {
                name: "rocket-launch"
              }), " ", wQ("worldBuilder:unpublishAsGame"), " ", (0, gQ.jsx)(zQ.d, {
                name: "info-circle"
              })]
            })
          }), (0, gQ.jsxs)(sQ.h, {
            onClick: WQ.playGame,
            disabled: jQ,
            children: [(0, gQ.jsx)(zQ.d, {
              name: "joystick"
            }), " ", wQ("general:playGame")]
          })]
        }), !rQ && (0, gQ.jsx)(PQ.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5340: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(1238);
    async function qQ(QQ) {
      const WQ = await fetch(`${wQ.clientSideServerUrls.s3Url}/${QQ}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === WQ.status || 403 === WQ.status) return null;
      if (!WQ.ok) throw new Error(`Failed to download the texture pack (${WQ.status})`);
      return await WQ.json()
    }
  },
  5411: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => yQ
    });
    var wQ = XQ(61),
      qQ = XQ(1384),
      TQ = XQ(1049),
      zQ = XQ(193),
      sQ = XQ(1607),
      FQ = XQ(26),
      PQ = XQ(2003),
      gQ = XQ(1548),
      JQ = XQ(4912),
      rQ = XQ(1404),
      IQ = XQ(1162),
      jQ = XQ(1567);

    function BQ(QQ, WQ) {
      return {
        schematicId: QQ.schematicId,
        name: QQ.name,
        description: QQ.description,
        gamePublished: WQ,
        gameCategory: QQ.gameCategory,
        defaultGamemode: QQ.defaultGamemode,
        voidDeathHeight: QQ.voidDeathHeight,
        disableKeepInventory: QQ.disableKeepInventory,
        disableTpRequests: QQ.disableTpRequests,
        disableLobbySpawn: QQ.disableLobbySpawn,
        disableMobs: QQ.disableMobs,
        disableSpawnProtection: QQ.disableSpawnProtection,
        disableFallDamage: QQ.disableFallDamage,
        worldBorder: QQ.worldBorder,
        hideLobbyCode: QQ.hideLobbyCode,
        enableSmpMarketplace: QQ.enableSmpMarketplace,
        enableSurvivalGuns: QQ.enableSurvivalGuns,
        enableSpawnReset: QQ.enableSpawnReset,
        enableDayNight: QQ.enableDayNight,
        persistWorld: QQ.persistWorld,
        persistInventory: QQ.persistInventory
      }
    }

    function yQ(QQ) {
      let {
        onNavigateAway: WQ,
        inSourceWorld: XQ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: yQ
      } = (0, IQ.c)(), VQ = (0, jQ.useNavigatePreserveSearch)(), [DQ, pQ] = (0, wQ.useState)({
        ...QQ
      }), [GQ, UQ] = (0, wQ.useState)("Enter"), [bQ, vQ] = (0, wQ.useState)(void 0), dQ = (0, wQ.useRef)(BQ(QQ, QQ.gamePublished)), HQ = (0, wQ.useRef)(void 0), aQ = "Enter" === GQ, lQ = yQ.playerHasRank("developer") || yQ.playerHasRank("admin") || "Enter" === GQ && !1 !== DQ.schematicContainsSpawnBlock, hQ = void 0 !== bQ && bQ !== HQ.current || JSON.stringify(BQ(DQ, DQ.gamePublished)) !== JSON.stringify(dQ.current);

      function iQ(QQ, WQ) {
        pQ((XQ => ({
          ...XQ,
          [QQ]: WQ
        })))
      }
      const cQ = (0, wQ.useCallback)((QQ => {
        HQ.current = QQ, vQ(QQ)
      }), []);

      function AQ(QQ) {
        UQ("Loading");
        const WQ = BQ(DQ, QQ),
          XQ = bQ !== HQ.current ? bQ : void 0;
        gQ.e.updateSchematic(yQ, WQ, XQ).then((XQ => {
          let {
            customTexturePackKey: wQ
          } = XQ;
          UQ("Success"), iQ("customTexturePackKey", wQ), dQ.current = WQ, HQ.current = void 0, vQ(void 0), setTimeout((() => {
            iQ("gamePublished", QQ), UQ("Enter")
          }), 1e3)
        })).catch((QQ => {
          var WQ;
          (console.error("Failed to save schematic:", QQ), UQ("Error"), QQ instanceof zQ.b && QQ.errorMessageForUser) && rQ.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: QQ.errorMessageForUser,
            textOpts: {
              subtitle: null !== (WQ = QQ.errorMessageTranslationParams) && void 0 !== WQ ? WQ : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            UQ("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: DQ,
        updateSchematicData: iQ,
        setTexturePack: vQ,
        initializeTexturePack: cQ,
        updateState: GQ,
        formEnabled: aQ,
        publishFormEnabled: lQ,
        hasUnsavedChanges: hQ,
        canEditSourceWorld: !XQ,
        saveSchematic: AQ,
        unpublishSchematic: function() {
          rQ.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((QQ => {
            !0 === QQ && AQ(!1)
          }))
        },
        editSourceWorld: function() {
          UQ("Loading"), JQ.b.getSourceWorld(DQ.schematicId).then((QQ => {
            PQ.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, FQ.m)("other"), VQ((0, qQ.c)("classic", QQ)), null === WQ || void 0 === WQ || WQ()
          })).catch((QQ => {
            console.error("Failed to get source world:", QQ), UQ("Error"), setTimeout((() => {
              UQ("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          PQ.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), VQ((0, sQ.v)((0, TQ.u)(DQ.schematicId), DQ)), null === WQ || void 0 === WQ || WQ()
        }
      }
    }
  },
  5299: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);