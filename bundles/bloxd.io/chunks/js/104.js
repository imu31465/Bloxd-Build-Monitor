export const id = 104;
export const ids = [104];
export const modules = {
  4777: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => HQ,
      c: () => uQ,
      g: () => bQ
    });
    wQ(4783);
    var LQ = wQ(1207),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1367),
      kQ = (wQ(53), wQ(4233)),
      vQ = wQ(1079),
      mQ = wQ(1107);

    function uQ(QQ) {
      let {
        children: FQ,
        label: wQ,
        className: qQ,
        circleInfoText: kQ,
        disabled: uQ,
        onLabelClick: HQ
      } = QQ;
      const {
        t: bQ
      } = (0, LQ.y)(), YQ = (0, mQ.jsxs)("div", {
        className: oQ()("Label", {
          ClickableLabel: void 0 !== HQ
        }),
        onClick: HQ,
        children: [bQ(wQ), kQ && (0, mQ.jsx)(vQ.c, {
          name: "circle-info"
        })]
      });
      return (0, mQ.jsxs)("div", {
        className: oQ()("LabeledInput", {
          [qQ]: qQ,
          DisabledLabelInput: uQ
        }),
        children: [kQ && (0, mQ.jsx)(DQ.f, {
          tooltipInner: (0, mQ.jsx)("div", {
            className: "LabeledInputTooltip",
            children: bQ(kQ)
          }),
          children: YQ
        }), !kQ && YQ, FQ]
      })
    }

    function HQ(QQ) {
      let {
        checked: FQ,
        setChecked: wQ
      } = QQ;
      return (0, mQ.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: QQ => {
          wQ(!FQ)
        },
        children: (0, mQ.jsx)(kQ.d, {
          checked: FQ,
          onChange: QQ => {
            wQ(QQ.target.checked)
          },
          disabled: !1
        })
      })
    }

    function bQ(QQ) {
      let {
        checked: FQ,
        setChecked: wQ,
        disabled: LQ
      } = QQ;
      return (0, mQ.jsx)("div", {
        className: oQ()("SwitchContainer", {
          SwitchContainerDisabled: LQ
        }),
        onClick: () => {
          LQ || wQ(!FQ)
        },
        children: (0, mQ.jsx)(kQ.d, {
          className: "SwitchCheckbox",
          checked: FQ,
          onChange: QQ => {
            wQ(QQ.target.checked)
          },
          disabled: !!LQ
        })
      })
    }
  },
  4787: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(4475),
      DQ = wQ(1207),
      kQ = wQ(1107);
    const vQ = [...oQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function mQ(QQ) {
      const {
        disabled: FQ,
        hideWrapper: wQ
      } = QQ, {
        t: LQ
      } = (0, DQ.y)(), mQ = QQ.advancedMode ? vQ.map((FQ => [FQ, QQ.callbacks[FQ]])) : oQ.j.map((FQ => [FQ, QQ.callbacks[FQ]])), HQ = (0, kQ.jsx)("div", {
        className: qQ()("PluginsGrid", {
          SectionBody: !wQ
        }),
        children: mQ.map((QQ => {
          let [wQ, LQ] = QQ;
          return (0, kQ.jsx)(uQ, {
            plugin: wQ,
            callbacks: LQ,
            disabled: FQ
          }, wQ)
        }))
      });
      return wQ ? HQ : (0, kQ.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, kQ.jsx)("div", {
          className: "SectionTitle",
          children: LQ("worldBuilder:pluginsSection")
        }), HQ]
      })
    }

    function uQ(QQ) {
      let {
        plugin: FQ,
        callbacks: {
          isEnabled: wQ,
          Qr: LQ
        },
        disabled: oQ
      } = QQ;
      const {
        t: vQ
      } = (0, DQ.y)(), mQ = wQ();
      return (0, kQ.jsxs)("div", {
        className: qQ()("PluginCard", {
          PluginCardEnabled: mQ,
          PluginCardDisabledForm: oQ
        }),
        "data-pad-focusable": !0,
        "aria-disabled": oQ || void 0,
        onClick: () => {
          oQ || LQ(!mQ)
        },
        children: [(0, kQ.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, kQ.jsx)("img", {
            src: `/textures/games/classic/customGames/${FQ}.png`,
            alt: FQ
          })
        }), (0, kQ.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, kQ.jsx)("div", {
            className: "PluginCardTitle",
            children: vQ(HQ[FQ])
          }), (0, kQ.jsx)("div", {
            className: "PluginCardDescription",
            children: vQ(bQ[FQ])
          })]
        }), (0, kQ.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: vQ(mQ ? "general:on" : "general:off")
        })]
      })
    }
    const HQ = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      bQ = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4772: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      j: () => qF,
      e: () => LF,
      h: () => wF,
      m: () => oF
    });
    var LQ = wQ(53),
      qQ = wQ(1362),
      oQ = wQ(1451),
      DQ = wQ(1682),
      kQ = wQ(1207),
      vQ = wQ(1348),
      mQ = wQ(1367),
      uQ = wQ(1079),
      HQ = wQ(1237),
      bQ = wQ(1070),
      YQ = wQ.n(bQ),
      xQ = wQ(307),
      AQ = wQ(4475),
      tQ = wQ(1254),
      eQ = wQ(4777),
      MQ = wQ(3029),
      GQ = wQ(4787),
      pQ = wQ(1107);

    function cQ(QQ) {
      let {
        icon: FQ,
        title: wQ,
        disabled: LQ,
        children: qQ
      } = QQ;
      return (0, pQ.jsxs)("div", {
        className: YQ()("ManageCard", {
          ManageCardDisabled: LQ
        }),
        children: [(0, pQ.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, pQ.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, pQ.jsx)(uQ.c, {
              name: FQ
            })
          }), (0, pQ.jsx)("div", {
            children: (0, pQ.jsx)("h2", {
              className: "ManageCardTitle",
              children: wQ
            })
          })]
        }), (0, pQ.jsxs)("div", {
          className: "ManageCardBody",
          children: [qQ, LQ && (0, pQ.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function CQ(QQ) {
      let {
        label: FQ,
        caption: wQ,
        children: LQ
      } = QQ;
      return (0, pQ.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, pQ.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: FQ
        }), LQ, wQ && (0, pQ.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: wQ
        })]
      })
    }

    function SQ(QQ) {
      let {
        label: FQ,
        caption: wQ,
        disabled: LQ,
        children: qQ
      } = QQ;
      return (0, pQ.jsxs)("div", {
        className: YQ()("ManageField", {
          ManageFieldDisabled: LQ
        }),
        children: [(0, pQ.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, pQ.jsx)("div", {
            className: "ManageFieldLabel",
            children: FQ
          }), (0, pQ.jsx)("div", {
            className: "ManageFieldCaption",
            children: wQ
          })]
        }), (0, pQ.jsx)("div", {
          className: "ManageFieldControl",
          children: qQ
        })]
      })
    }

    function iQ(QQ) {
      var FQ, wQ;
      let {
        schematicData: LQ,
        updateSchematicData: qQ,
        publishFormEnabled: oQ,
        formEnabled: DQ
      } = QQ;
      const {
        t: vQ
      } = (0, kQ.y)(), mQ = !oQ, uQ = {
        tpRequests: {
          isEnabled: () => !LQ.disableTpRequests,
          Qr: QQ => qQ("disableTpRequests", !QQ)
        },
        spawnProtection: {
          isEnabled: () => !LQ.disableSpawnProtection,
          Qr: QQ => qQ("disableSpawnProtection", !QQ)
        },
        spawnReset: {
          isEnabled: () => !!LQ.enableSpawnReset,
          Qr: QQ => qQ("enableSpawnReset", QQ)
        },
        smpMarketplace: {
          isEnabled: () => !!LQ.enableSmpMarketplace,
          Qr: QQ => qQ("enableSmpMarketplace", QQ)
        },
        survivalGuns: {
          isEnabled: () => !!LQ.enableSurvivalGuns,
          Qr: QQ => qQ("enableSurvivalGuns", QQ)
        },
        fallDamage: {
          isEnabled: () => !LQ.disableFallDamage,
          Qr: QQ => qQ("disableFallDamage", !QQ)
        },
        dayNight: {
          isEnabled: () => !!LQ.enableDayNight,
          Qr: QQ => qQ("enableDayNight", QQ)
        }
      };
      return (0, pQ.jsxs)(pQ.Fragment, {
        children: [!1 === LQ.schematicContainsSpawnBlock && (0, pQ.jsx)("div", {
          className: "ManageWarningBanner",
          children: vQ("worldBuilder:mustContainSpawnBlock")
        }), (0, pQ.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, pQ.jsxs)(cQ, {
            icon: "globe",
            title: vQ("worldBuilder:worldRulesSection"),
            disabled: !DQ,
            children: [(0, pQ.jsx)(SQ, {
              label: vQ("classic:defaultGamemode"),
              caption: vQ("classic:defaultGamemodeDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(MQ.d, {
                controlClassName: "ManageDropdown",
                options: AQ.C.map((QQ => ({
                  value: QQ,
                  label: xQ.q[QQ]
                }))),
                value: LQ.defaultGamemode,
                onChange: QQ => qQ("defaultGamemode", QQ.value)
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:voidDeathHeight"),
              caption: vQ("classic:voidDeathHeightDescription"),
              disabled: mQ,
              children: (0, pQ.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, pQ.jsx)("input", {
                  type: "number",
                  max: tQ.J,
                  value: null !== (FQ = LQ.voidDeathHeight) && void 0 !== FQ ? FQ : "",
                  onChange: QQ => {
                    const FQ = parseInt(QQ.target.value);
                    qQ("voidDeathHeight", FQ)
                  }
                }), (0, pQ.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: vQ("worldBuilder:blocksUnit")
                })]
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:worldBorder"),
              caption: vQ("classic:worldBorderDescription"),
              disabled: mQ,
              children: (0, pQ.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, pQ.jsx)("input", {
                  type: "number",
                  min: tQ.S,
                  max: tQ.K,
                  placeholder: vQ("worldBuilder:noWorldBorderLimit"),
                  value: null !== (wQ = LQ.worldBorder) && void 0 !== wQ ? wQ : "",
                  onChange: QQ => {
                    const FQ = parseInt(QQ.target.value);
                    qQ("worldBorder", isNaN(FQ) ? null : FQ)
                  }
                }), (0, pQ.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: vQ("worldBuilder:blocksUnit")
                })]
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:disableMobs"),
              caption: vQ("classic:disableMobsDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(eQ.g, {
                checked: LQ.disableMobs,
                setChecked: QQ => qQ("disableMobs", QQ),
                disabled: mQ
              })
            })]
          }), (0, pQ.jsxs)(cQ, {
            icon: "user-group",
            title: vQ("worldBuilder:playerAndLobbySection"),
            disabled: !DQ,
            children: [(0, pQ.jsx)(SQ, {
              label: vQ("classic:disableKeepInventory"),
              caption: vQ("classic:disableKeepInventoryDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(eQ.g, {
                checked: LQ.disableKeepInventory,
                setChecked: QQ => qQ("disableKeepInventory", QQ),
                disabled: mQ
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:persistInventory"),
              caption: vQ("classic:persistInventoryDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(MQ.d, {
                controlClassName: "ManageDropdown",
                options: AQ.m.map((QQ => ({
                  value: QQ,
                  label: xQ.h[QQ]
                }))),
                value: LQ.persistInventory,
                onChange: QQ => qQ("persistInventory", QQ.value)
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:persistWorld"),
              caption: vQ("classic:persistWorldDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(eQ.g, {
                checked: LQ.persistWorld,
                setChecked: QQ => qQ("persistWorld", QQ),
                disabled: mQ
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:disableLobbySpawn"),
              caption: vQ("classic:disableLobbySpawnDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(eQ.g, {
                checked: LQ.disableLobbySpawn,
                setChecked: QQ => qQ("disableLobbySpawn", QQ),
                disabled: mQ
              })
            }), (0, pQ.jsx)(SQ, {
              label: vQ("classic:hideLobbyCode"),
              caption: vQ("classic:hideLobbyCodeDescription"),
              disabled: mQ,
              children: (0, pQ.jsx)(eQ.g, {
                checked: LQ.hideLobbyCode,
                setChecked: QQ => qQ("hideLobbyCode", QQ),
                disabled: mQ
              })
            })]
          })]
        }), (0, pQ.jsx)(cQ, {
          icon: "layer-group",
          title: vQ("worldBuilder:pluginsSection"),
          disabled: !DQ,
          children: (0, pQ.jsx)(GQ.c, {
            callbacks: uQ,
            disabled: mQ,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var WQ = wQ(4790),
      RQ = wQ(4233),
      OQ = wQ(1489),
      sQ = wQ(3363),
      rQ = wQ(1140),
      IQ = wQ(4737),
      UQ = wQ(4794),
      NQ = wQ(1458);
    const TQ = 50,
      KQ = .3;
    async function zQ(QQ) {
      const FQ = await
      function(QQ) {
        return new Promise(((FQ, wQ) => {
          const LQ = new FileReader;
          LQ.onload = () => FQ(LQ.result), LQ.onerror = wQ, LQ.readAsDataURL(QQ)
        }))
      }(QQ), wQ = await
      function(QQ) {
        return new Promise(((FQ, wQ) => {
          const LQ = new Image;
          LQ.onload = () => FQ(LQ), LQ.onerror = () => wQ(new Error("Failed to load image")), LQ.src = QQ
        }))
      }(FQ);
      if (wQ.naturalHeight > wQ.naturalWidth) throw new lQ;
      const LQ = 1024 * TQ,
        {
          dataUrl: qQ,
          finalQuality: oQ
        } = function(QQ, FQ) {
          const wQ = document.createElement("canvas");
          wQ.width = QQ.naturalWidth, wQ.height = QQ.naturalHeight, wQ.getContext("2d").drawImage(QQ, 0, 0);
          let LQ = .92,
            qQ = wQ.toDataURL("image/jpeg", LQ);
          for (; .75 * qQ.length > FQ && LQ > .05;) LQ -= .05, qQ = wQ.toDataURL("image/jpeg", LQ);
          return {
            dataUrl: qQ,
            finalQuality: LQ
          }
        }(wQ, LQ);
      if (Math.ceil(.75 * qQ.length) > LQ) throw new jQ;
      return {
        base64Jpg: qQ,
        heavilyCompressed: oQ < KQ
      }
    }
    class lQ extends Error {}
    class jQ extends Error {}
    var aQ = function(QQ) {
      return QQ[QQ.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", QQ[QQ.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", QQ
    }(aQ || {});

    function XQ(QQ) {
      var FQ;
      let {
        schematicId: wQ,
        hasReadUploadPolicy: qQ,
        onPolicyValidationError: vQ,
        onThumbnailReady: mQ
      } = QQ;
      const {
        t: bQ
      } = (0, kQ.y)(), [xQ, AQ] = (0, LQ.useState)(null), [tQ, eQ] = (0, LQ.useState)(""), [MQ, GQ] = (0, LQ.useState)(""), [cQ, CQ] = (0, LQ.useState)(!0), [SQ, iQ] = (0, LQ.useState)(!1), WQ = (0, LQ.useRef)(!1), [RQ, OQ] = (0, LQ.useState)(null), [sQ, rQ] = (0, LQ.useState)(!1), [IQ, NQ] = (0, LQ.useState)(!1), TQ = (0, LQ.useRef)(0), {
        getRootProps: KQ,
        getInputProps: aQ,
        isDragActive: XQ
      } = (0, UQ.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async QQ => {
          if (0 === QQ.length) return;
          const FQ = QQ[0],
            wQ = ++TQ.current;
          OQ(null), rQ(!1), AQ(null), eQ(FQ.name);
          try {
            const QQ = await zQ(FQ);
            if (wQ !== TQ.current) return;
            AQ(QQ), rQ(QQ.heavilyCompressed)
          } catch (LQ) {
            if (wQ !== TQ.current) return;
            OQ(bQ(LQ instanceof lQ ? "thumbnail:portraitImagesNotAllowed" : LQ instanceof jQ ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), fQ = tQ.length <= 30 ? tQ : `${tQ.slice(0,27)}...`, VQ = null !== (FQ = null === xQ || void 0 === xQ ? void 0 : xQ.base64Jpg) && void 0 !== FQ ? FQ : null, hQ = MQ.trim(), JQ = hQ.length >= HQ.q && hQ.length <= HQ.m, EQ = IQ && !xQ && !RQ, nQ = IQ && !JQ;
      return (0, pQ.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, pQ.jsxs)("div", {
          ...KQ({
            className: YQ()("ThumbnailUploadDropzone", {
              ActiveDrag: XQ,
              ValidationError: EQ
            })
          }),
          children: [(0, pQ.jsx)("input", {
            ...aQ()
          }), !XQ && VQ ? (0, pQ.jsxs)(pQ.Fragment, {
            children: [(0, pQ.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, pQ.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, pQ.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, pQ.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, pQ.jsx)("img", {
                    src: VQ,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, pQ.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, pQ.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, pQ.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, pQ.jsx)("img", {
                    src: VQ,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, pQ.jsxs)("div", {
              children: [(0, pQ.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: fQ
              }), (0, pQ.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: bQ("thumbnail:preview")
              })]
            })]
          }) : (0, pQ.jsxs)(pQ.Fragment, {
            children: [(0, pQ.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, pQ.jsx)(uQ.c, {
                name: "image"
              })
            }), (0, pQ.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: bQ("thumbnail:dragImageHere")
            })]
          })]
        }), EQ && (0, pQ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: bQ("thumbnail:imageRequired")
        }), (0, pQ.jsx)(DQ.b, {
          className: YQ()("ThumbnailUploadNameInput", {
            ValidationError: nQ
          }),
          placeholderText: bQ("thumbnail:thumbnailName"),
          defaultValue: MQ,
          onValueChange: QQ => {
            GQ(QQ)
          },
          maxLength: HQ.m
        }), nQ && (0, pQ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: bQ("thumbnail:nameRequired", {
            min: HQ.q,
            max: HQ.m
          })
        }), (0, pQ.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, pQ.jsx)("input", {
            type: "checkbox",
            checked: cQ,
            onChange: QQ => {
              CQ(QQ.target.checked)
            }
          }), bQ("thumbnail:setAsThumbnailOnceApproved")]
        }), sQ && (0, pQ.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: bQ("thumbnail:heavyCompressionWarning")
        }), RQ && (0, pQ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: RQ
        }), (0, pQ.jsx)(oQ.m, {
          disabled: SQ,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (NQ(!0), !WQ.current && xQ && JQ && qQ) {
              WQ.current = !0, iQ(!0), OQ(null);
              try {
                await mQ(xQ.base64Jpg, hQ, cQ ? wQ : null)
              } catch (QQ) {
                OQ(QQ.errorMessageForUser ? bQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : bQ("thumbnail:failedToUploadImage"))
              } finally {
                WQ.current = !1, iQ(!1)
              }
            } else qQ || vQ()
          },
          children: bQ(SQ ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const fQ = 2e3;

    function VQ(QQ) {
      let {
        schematicId: FQ,
        ownedThumbnailCount: wQ,
        onClose: qQ,
        onThumbnailReady: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, kQ.y)(), {
        userContext: vQ
      } = (0, rQ.e)(), [mQ, bQ] = (0, LQ.useState)(!1), [xQ, AQ] = (0, LQ.useState)(!1), [tQ, eQ] = (0, LQ.useState)(!1), MQ = (0, LQ.useRef)();
      (0, LQ.useEffect)((() => () => {
        clearTimeout(MQ.current)
      }), []);
      const GQ = function(QQ, FQ) {
        const wQ = [];
        return QQ.isLoggedIn() || wQ.push(aQ.NOT_LOGGED_IN), FQ >= HQ.$ && wQ.push(aQ.THUMBNAIL_LIMIT_REACHED), wQ
      }(vQ, wQ);
      if (GQ.length > 0) {
        const QQ = {
          [aQ.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [aQ.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: HQ.$
            }
          }
        };
        return (0, pQ.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, pQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: DQ("thumbnail:cannotUploadThumbnail")
          }), GQ.map(((FQ, wQ) => {
            const LQ = QQ[FQ];
            return (0, pQ.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, pQ.jsx)(uQ.c, {
                name: "triangle-exclamation"
              }), (0, pQ.jsx)("span", {
                children: DQ(LQ.key, LQ.params)
              })]
            }, wQ)
          }))]
        })
      }
      return (0, pQ.jsxs)("div", {
        className: YQ()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: mQ
        }),
        children: [mQ && (0, pQ.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, pQ.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, pQ.jsx)(uQ.c, {
              name: "check"
            }), (0, pQ.jsx)(NQ.d, {})]
          }), (0, pQ.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: DQ("thumbnail:thumbnailUploaded")
          })]
        }), (0, pQ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: DQ("thumbnail:uploadThumbnail")
        }), (0, pQ.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, pQ.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, pQ.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: DQ("thumbnail:chooseImage", {
                maxSizeKb: TQ
              })
            }), (0, pQ.jsx)(XQ, {
              schematicId: FQ,
              hasReadUploadPolicy: xQ,
              onPolicyValidationError: () => {
                eQ(!0)
              },
              onThumbnailReady: async (QQ, FQ, wQ) => {
                await oQ(QQ, FQ, wQ), bQ(!0), MQ.current = setTimeout(qQ, fQ)
              }
            })]
          }), (0, pQ.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, pQ.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: DQ("thumbnail:uploadPolicy")
            }), (0, pQ.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "check"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyFollowGuidelines")
                })]
              }), (0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "check"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyInGameAssets")
                })]
              }), (0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "check"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyLimitText")
                })]
              }), (0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "x"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyCopyrightContent")
                })]
              }), (0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "x"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "x"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyBloxdTags")
                })]
              }), (0, pQ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pQ.jsx)(uQ.c, {
                  name: "x"
                }), (0, pQ.jsx)("span", {
                  children: DQ("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, pQ.jsxs)("label", {
              className: YQ()("ThumbnailUploadCheckbox Policy", {
                ValidationError: tQ && !xQ
              }),
              children: [(0, pQ.jsx)("input", {
                type: "checkbox",
                checked: xQ,
                onChange: QQ => {
                  AQ(QQ.target.checked)
                }
              }), DQ("thumbnail:agreeToUploadPolicy")]
            }), tQ && !xQ && (0, pQ.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: DQ("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var hQ = wQ(1213);
    const JQ = {
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

    function EQ(QQ) {
      var FQ, wQ;
      let {
        schematicData: DQ,
        updateSchematicData: mQ,
        publishFormEnabled: HQ,
        onClose: bQ
      } = QQ;
      const {
        t: xQ
      } = (0, kQ.y)(), {
        userContext: AQ,
        isUserContextUpdating: tQ
      } = (0, rQ.e)(), eQ = (0, sQ.c)(), [MQ, GQ] = (0, LQ.useState)([]), [cQ, CQ] = (0, LQ.useState)([]), [SQ, iQ] = (0, LQ.useState)(!0), [WQ, RQ] = (0, LQ.useState)(null !== (FQ = DQ.customThumbnailId) && void 0 !== FQ ? FQ : null), [UQ, NQ] = (0, LQ.useState)(null), TQ = (0, LQ.useRef)(null !== (wQ = DQ.customThumbnailId) && void 0 !== wQ ? wQ : null), KQ = (0, LQ.useRef)(0), zQ = (0, LQ.useRef)(null), lQ = (0, LQ.useRef)(null), jQ = (0, LQ.useRef)(null), aQ = (0, LQ.useRef)(!1);

      function XQ(QQ, FQ) {
        jQ.current && (clearTimeout(jQ.current), jQ.current = null), NQ(QQ), null !== QQ && FQ && (jQ.current = setTimeout((() => {
          NQ(null), jQ.current = null
        }), 5e3))
      }(0, LQ.useEffect)((() => () => {
        clearTimeout(lQ.current), clearTimeout(jQ.current)
      }), []);
      const fQ = (0, LQ.useCallback)((() => {
        iQ(!0), OQ.b.getOwnedThumbnails(AQ).then((QQ => {
          const FQ = [],
            wQ = [];
          for (const LQ of QQ.thumbnails) LQ.rejectionPolicyId ? FQ.push(LQ) : wQ.push(LQ);
          FQ.sort(((QQ, FQ) => QQ.lastUpdatedAt - FQ.lastUpdatedAt)), wQ.sort(((QQ, FQ) => {
            const wQ = QQ.approved ? 1 : 0,
              LQ = (FQ.approved ? 1 : 0) - wQ;
            return 0 !== LQ ? LQ : FQ.lastUpdatedAt - QQ.lastUpdatedAt
          })), CQ(FQ), GQ(wQ)
        })).catch((QQ => {
          console.error("Failed to fetch thumbnails:", QQ)
        })).finally((() => {
          iQ(!1)
        }))
      }), [AQ]);
      async function JQ(QQ, FQ, wQ) {
        return OQ.b.uploadSchematicThumbnail(AQ, QQ, FQ, wQ).then((() => {
          XQ({
            text: xQ("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), fQ()
        }))
      }

      function EQ() {
        KQ.current = Date.now(), lQ.current = null;
        const QQ = zQ.current;
        zQ.current = null, XQ({
          text: xQ("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), OQ.b.setSchematicThumbnail(AQ, DQ.schematicId, QQ).then((() => {
          eQ.current && (XQ({
            text: xQ("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), TQ.current = QQ, mQ("customThumbnailId", QQ), mQ("customThumbnailBlurhash", void 0), mQ("customThumbnailVariants", void 0))
        })).catch((QQ => {
          eQ.current && (XQ({
            text: QQ.errorMessageForUser ? xQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : xQ("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), RQ(TQ.current))
        }))
      }

      function PQ(QQ) {
        RQ(QQ), zQ.current = QQ;
        const FQ = Date.now() - KQ.current;
        FQ >= 1e3 ? EQ() : (XQ({
          text: xQ("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), lQ.current || (lQ.current = setTimeout((() => {
          EQ()
        }), 1e3 - FQ)))
      }
      return (0, LQ.useEffect)((() => {
        !1 === tQ && fQ()
      }), [tQ, fQ]), cQ.length > 0 ? (0, pQ.jsx)(nQ, {
        rejectedThumbnails: cQ,
        userContext: AQ,
        isMountedRef: eQ,
        onAcknowledged: fQ
      }) : (0, pQ.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, pQ.jsxs)("div", {
          className: "SectionTitle",
          children: [xQ("thumbnail:gameThumbnail"), UQ && (0, pQ.jsx)("span", {
            className: YQ()("ThumbnailActionMsg", `ThumbnailActionMsg--${UQ.type}`),
            children: UQ.text
          })]
        }), (0, pQ.jsx)("div", {
          className: "SectionBody",
          children: (0, pQ.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, pQ.jsxs)("div", {
              className: YQ()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === WQ
              }),
              onClick: () => PQ(null),
              children: [(0, pQ.jsx)(IQ.d, {
                game: {
                  schematicId: DQ.schematicId,
                  imageBlurhash: DQ.imageBlurhash
                }
              }), (0, pQ.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: xQ("general:default")
              })]
            }), SQ && (0, pQ.jsx)(vQ.c, {}), MQ.map(((QQ, FQ) => (0, pQ.jsxs)("div", {
              className: YQ()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: WQ === QQ.id,
                ThumbnailGridItemPending: !QQ.approved
              }),
              onClick: () => {
                QQ.approved && PQ(QQ.id)
              },
              children: [QQ.approved && (0, pQ.jsx)("img", {
                src: `${hQ.clientSideServerUrls.s3Url}/customThumbnails/${QQ.id}.jpg`,
                alt: "Thumbnail"
              }), QQ.approved && (0, pQ.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: QQ.name
              }), QQ.id && (0, pQ.jsx)(oQ.F, {
                className: "ThumbnailDeleteButton",
                onClick: FQ => async function(QQ, FQ, wQ) {
                  QQ.stopPropagation();
                  const LQ = await qQ.NotificationProvider.showCustomPopup({
                      body: QQ => (0, pQ.jsx)(gQ, {
                        thumbnailId: FQ,
                        thumbnailName: wQ,
                        onClose: FQ => {
                          FQ && (aQ.current = !0), QQ()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: bQ
                    }).getResult(),
                    oQ = aQ.current;
                  aQ.current = !1, oQ && !0 === LQ && (eQ.current && XQ({
                    text: xQ("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), OQ.b.deleteSchematicThumbnail(AQ, FQ).then((() => {
                    eQ.current && (XQ({
                      text: xQ("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), TQ.current === FQ && PQ(null), fQ())
                  })).catch((QQ => {
                    eQ.current && XQ({
                      text: QQ.errorMessageForUser ? xQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : xQ("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(FQ, QQ.id, QQ.name),
                children: (0, pQ.jsx)(uQ.c, {
                  name: "trash-can"
                })
              }), !QQ.approved && (0, pQ.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, pQ.jsx)(uQ.c, {
                  name: "hourglass-clock"
                })
              }), !QQ.approved && (0, pQ.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [QQ.name, (0, pQ.jsx)("br", {}), xQ("thumbnail:pendingApproval")]
              })]
            }, FQ))), (0, pQ.jsxs)("div", {
              className: YQ()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !HQ
              }),
              onClick: () => {
                HQ && function(QQ) {
                  let {
                    schematicId: FQ,
                    ownedThumbnailCount: wQ,
                    onThumbnailReady: LQ,
                    onClose: oQ
                  } = QQ;
                  qQ.NotificationProvider.showCustomPopup({
                    body: QQ => (0, pQ.jsx)(VQ, {
                      schematicId: FQ,
                      ownedThumbnailCount: wQ,
                      onClose: QQ,
                      onThumbnailReady: LQ
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: oQ,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: DQ.schematicId,
                  ownedThumbnailCount: MQ.length,
                  onThumbnailReady: JQ,
                  onClose: bQ
                })
              },
              children: [(0, pQ.jsx)(uQ.c, {
                name: "plus"
              }), (0, pQ.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: xQ("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function nQ(QQ) {
      let {
        rejectedThumbnails: FQ,
        userContext: wQ,
        isMountedRef: qQ,
        onAcknowledged: DQ
      } = QQ;
      const {
        t: mQ
      } = (0, kQ.y)(), [HQ, bQ] = (0, LQ.useState)(!1), [YQ, xQ] = (0, LQ.useState)(!1), AQ = function(QQ) {
        const FQ = new Map;
        for (const wQ of QQ) {
          const QQ = wQ.rejectionPolicyId,
            LQ = FQ.get(QQ);
          LQ ? LQ.push(wQ) : FQ.set(QQ, [wQ])
        }
        return FQ
      }(FQ);
      return (0, pQ.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, pQ.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, pQ.jsx)(uQ.c, {
            name: "triangle-exclamation"
          }), " ", mQ("thumbnail:thumbnailsRejected"), " ", (0, pQ.jsx)(uQ.c, {
            name: "triangle-exclamation"
          })]
        }), (0, pQ.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: mQ("thumbnail:thumbnailsRejectedDescription")
        }), (0, pQ.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...AQ.entries()].map((QQ => {
            let [FQ, wQ] = QQ;
            const LQ = JQ[FQ];
            return (0, pQ.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, pQ.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: wQ.map((QQ => (0, pQ.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, pQ.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, pQ.jsx)(uQ.c, {
                      name: "image-slash"
                    })
                  }), (0, pQ.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, pQ.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: QQ.name
                    })
                  })]
                }, QQ.id)))
              }), (0, pQ.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [mQ("thumbnail:rejectionReason"), " ", LQ ? mQ(LQ.reason) : FQ]
              }), LQ && (0, pQ.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: LQ.tips.map((QQ => (0, pQ.jsx)("li", {
                  children: mQ(QQ)
                }, QQ)))
              })]
            }, FQ)
          }))
        }), (0, pQ.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, pQ.jsx)(RQ.d, {
            checked: HQ,
            onChange: QQ => bQ(QQ.target.checked),
            disabled: YQ
          }), (0, pQ.jsx)("span", {
            children: mQ("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, pQ.jsx)(oQ.m, {
          onClick: async function() {
            xQ(!0);
            const QQ = await Promise.allSettled(FQ.map((QQ => OQ.b.deleteSchematicThumbnail(wQ, QQ.id))));
            if (!qQ.current) return;
            const LQ = QQ.filter((QQ => "rejected" === QQ.status));
            LQ.length > 0 && console.error("Some rejected thumbnails failed to delete:", LQ), DQ()
          },
          disabled: !HQ || YQ,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: YQ ? (0, pQ.jsx)(vQ.c, {}) : mQ("general:accept")
        })]
      })
    }

    function gQ(QQ) {
      let {
        thumbnailId: FQ,
        thumbnailName: wQ,
        onClose: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, kQ.y)();
      return (0, pQ.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, pQ.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: qQ("thumbnail:deleteThumbnail")
        }), (0, pQ.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, pQ.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${hQ.clientSideServerUrls.s3Url}/customThumbnails/${FQ}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, pQ.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: wQ
          })]
        }), (0, pQ.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: qQ("thumbnail:deleteThumbnailConfirmation")
        }), (0, pQ.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, pQ.jsxs)(oQ.F, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => LQ(!0),
            children: [(0, pQ.jsx)(uQ.c, {
              name: "trash-can"
            }), " ", qQ("general:delete")]
          }), (0, pQ.jsx)(oQ.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => LQ(!1),
            children: qQ("general:cancel")
          })]
        })]
      })
    }
    var PQ = wQ(3047),
      ZQ = wQ(4832),
      yQ = wQ(4834),
      BQ = wQ(4879);

    function dQ(QQ) {
      let {
        schematicData: FQ,
        setTexturePack: wQ,
        initializeTexturePack: qQ,
        publishFormEnabled: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, kQ.y)(), [vQ, mQ] = (0, LQ.useState)(null), [uQ, HQ] = (0, LQ.useState)(null), [bQ, xQ] = (0, LQ.useState)(!1), AQ = (0, sQ.c)(), tQ = oQ && !bQ, eQ = FQ.customTexturePackKey;

      function MQ(QQ) {
        var FQ;
        mQ(QQ.metaData.id), HQ(null !== (FQ = QQ.metaData.fromFolderName) && void 0 !== FQ ? FQ : null), (QQ.metaData.id !== PQ.s.CUSTOM || QQ.metaData.fromFolderName) && wQ(QQ)
      }
      return (0, LQ.useEffect)((() => {
        eQ && (xQ(!0), (0, ZQ.d)(eQ).then((QQ => {
          var FQ;
          AQ.current && (QQ ? (mQ(QQ.metaData.id), HQ(null !== (FQ = QQ.metaData.fromFolderName) && void 0 !== FQ ? FQ : null), qQ(QQ)) : console.error(`No texture pack at ${eQ}`))
        })).catch((QQ => {
          console.error("Error fetching texture pack: ", QQ)
        })).finally((() => {
          xQ(!1)
        })))
      }), [eQ, qQ, AQ]), (0, pQ.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, pQ.jsx)("div", {
          className: "SectionTitle",
          children: DQ("customTexturePack:customTexturePack")
        }), (0, pQ.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, pQ.jsx)("div", {
            className: YQ()("TexturePack", {
              Selected: null === vQ && !bQ,
              Disabled: !tQ
            }),
            onClick: () => {
              tQ && (mQ(null), wQ(null), HQ(null))
            },
            children: (0, pQ.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(PQ.s).map((QQ => (0, pQ.jsx)(yQ.f, {
            id: QQ,
            isSelected: QQ === vQ,
            setSelected: MQ,
            disabled: !tQ
          }, QQ)))]
        }), vQ === PQ.s.CUSTOM && (0, pQ.jsx)(BQ.d, {
          folderName: uQ,
          onTexturePackUpdated: MQ,
          disabled: !tQ,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var QF = wQ(4897);

    function FF(QQ) {
      var FQ;
      let {
        gameCategory: wQ,
        setGameCategory: LQ,
        disabled: qQ
      } = QQ;
      const DQ = null !== (FQ = (0, xQ.$)(wQ)) && void 0 !== FQ ? FQ : "other";
      return (0, pQ.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, pQ.jsx)(eQ.c, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: qQ,
          children: (0, pQ.jsx)(MQ.d, {
            options: xQ.W.map((QQ => ({
              value: QQ,
              label: xQ.T[QQ]
            }))),
            value: DQ,
            onChange: QQ => {
              QQ.value !== DQ && LQ(xQ.O[QQ.value][0])
            }
          })
        }), (0, pQ.jsx)(eQ.c, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: qQ,
          children: (0, pQ.jsx)("div", {
            className: "GameCategoryOptions",
            children: xQ.O[DQ].map((QQ => (0, pQ.jsx)(oQ.L, {
              active: QQ === wQ,
              onClick: () => {
                LQ(QQ)
              },
              children: (0, xQ._)(QQ)
            }, QQ)))
          })
        })]
      })
    }

    function wF(QQ) {
      let {
        editor: FQ,
        onClose: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, kQ.y)(), {
        schematicData: qQ,
        updateSchematicData: oQ,
        publishFormEnabled: vQ,
        formEnabled: mQ
      } = FQ;
      return (0, pQ.jsxs)(pQ.Fragment, {
        children: [(0, pQ.jsxs)(cQ, {
          icon: "pen-to-square",
          title: LQ("worldBuilder:basicsSection"),
          disabled: !mQ,
          children: [(0, pQ.jsx)(CQ, {
            label: LQ("general:name"),
            caption: LQ("worldBuilder:schematicNameTagsHint"),
            children: (0, pQ.jsx)(DQ.b, {
              className: "SchematicPageName",
              defaultValue: qQ.name,
              onValueChange: QQ => oQ("name", QQ),
              placeholderText: LQ("worldBuilder:schematicNamePlaceholder"),
              maxLength: HQ.yb
            })
          }), (0, pQ.jsx)(CQ, {
            label: LQ("general:description"),
            children: (0, pQ.jsx)(DQ.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: qQ.description,
              onValueChange: QQ => oQ("description", QQ),
              placeholderText: LQ("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: HQ.wb
            })
          }), (0, pQ.jsx)(FF, {
            gameCategory: qQ.gameCategory,
            setGameCategory: QQ => oQ("gameCategory", QQ),
            disabled: !vQ
          }), !0 === qQ.gamePublished && (0, pQ.jsx)(EQ, {
            schematicData: qQ,
            updateSchematicData: oQ,
            publishFormEnabled: vQ,
            onClose: function() {
              null === wQ || void 0 === wQ || wQ()
            }
          })]
        }), (0, pQ.jsx)(iQ, {
          schematicData: qQ,
          updateSchematicData: oQ,
          publishFormEnabled: vQ,
          formEnabled: mQ
        }), !0 === qQ.gamePublished && (0, pQ.jsx)(cQ, {
          icon: "palette",
          title: LQ("worldBuilder:texturePackSection"),
          disabled: !mQ,
          children: (0, pQ.jsx)(dQ, {
            schematicData: qQ,
            setTexturePack: FQ.setTexturePack,
            initializeTexturePack: FQ.initializeTexturePack,
            publishFormEnabled: vQ
          })
        })]
      })
    }

    function LF(QQ) {
      let {
        editor: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, kQ.y)(), {
        schematicData: LQ,
        formEnabled: qQ,
        hasUnsavedChanges: DQ
      } = FQ, HQ = qQ && DQ;
      return (0, pQ.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [qQ && DQ && (0, pQ.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, pQ.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), wQ("worldBuilder:unsavedChanges")]
        }), (0, pQ.jsx)(mQ.f, {
          tooltipInner: (0, pQ.jsx)("div", {
            className: "SaveButtonTooltip",
            children: wQ(qQ && !DQ ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, pQ.jsxs)(oQ.f, {
            className: "SaveChangesButton",
            onClick: () => FQ.saveSchematic(LQ.gamePublished),
            disabled: !HQ,
            children: [(0, pQ.jsxs)("span", {
              className: qQ ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, pQ.jsx)(uQ.c, {
                name: "wrench"
              }), " ", wQ("worldBuilder:saveChanges")]
            }), !qQ && (0, pQ.jsx)(vQ.c, {})]
          })
        })]
      })
    }

    function qF(QQ) {
      let {
        schematic: FQ,
        onSchematicUpdate: wQ,
        onClose: qQ,
        inSourceWorld: DQ
      } = QQ;
      const {
        t: vQ
      } = (0, kQ.y)();

      function mQ() {
        null === qQ || void 0 === qQ || qQ()
      }
      const uQ = (0, QF.c)(FQ, {
        onNavigateAway: mQ,
        inSourceWorld: DQ
      });
      return (0, LQ.useEffect)((() => {
        null === wQ || void 0 === wQ || wQ(uQ.schematicData)
      }), [uQ.schematicData, wQ]), (0, pQ.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, pQ.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, pQ.jsx)(oQ.b, {
            onClick: mQ,
            children: vQ("worldBuilder:back")
          }), (0, pQ.jsx)(cQ, {
            icon: "rocket-launch",
            title: vQ("worldBuilder:actionsSection"),
            disabled: !uQ.formEnabled,
            children: (0, pQ.jsx)(WQ.c, {
              editor: uQ
            })
          }), (0, pQ.jsx)(wF, {
            editor: uQ,
            onClose: mQ
          })]
        }), (0, pQ.jsx)(LF, {
          editor: uQ
        })]
      })
    }

    function oF(QQ) {
      let {
        schematic: FQ,
        onSchematicUpdate: wQ,
        onClose: LQ,
        inSourceWorld: oQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, pQ.jsx)(qF, {
          schematic: FQ,
          onSchematicUpdate: wQ,
          onClose: QQ,
          inSourceWorld: oQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: LQ,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4790: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1207),
      DQ = wQ(1079),
      kQ = wQ(1451),
      vQ = wQ(1367),
      mQ = wQ(1348),
      uQ = wQ(1107);

    function HQ(QQ) {
      let {
        editor: FQ,
        className: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, oQ.y)(), {
        schematicData: HQ,
        formEnabled: bQ,
        publishFormEnabled: YQ
      } = FQ, xQ = !bQ || !YQ;
      return (0, uQ.jsxs)("div", {
        className: qQ()("PublishButtonContainer", wQ),
        children: [FQ.canEditSourceWorld && (0, uQ.jsxs)(kQ.f, {
          onClick: FQ.editSourceWorld,
          disabled: xQ,
          children: [(0, uQ.jsx)(DQ.c, {
            name: "edit"
          }), " ", LQ("worldBuilder:editSourceWorld")]
        }), !HQ.gamePublished && (0, uQ.jsx)(vQ.f, {
          tooltipInner: (0, uQ.jsx)("div", {
            className: "PublishButtonTooltip",
            children: LQ("worldBuilder:publishAsGameDescription")
          }),
          children: (0, uQ.jsxs)(kQ.m, {
            onClick: () => FQ.saveSchematic(!0),
            disabled: xQ,
            children: [(0, uQ.jsx)(DQ.c, {
              name: "rocket-launch"
            }), " ", LQ("worldBuilder:publishAsGame"), " ", (0, uQ.jsx)(DQ.c, {
              name: "info-circle"
            })]
          })
        }), !0 === HQ.gamePublished && (0, uQ.jsxs)(uQ.Fragment, {
          children: [(0, uQ.jsx)(vQ.f, {
            tooltipInner: (0, uQ.jsx)("div", {
              className: "PublishButtonTooltip",
              children: LQ("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, uQ.jsxs)(kQ.F, {
              onClick: FQ.unpublishSchematic,
              disabled: xQ,
              children: [(0, uQ.jsx)(DQ.c, {
                name: "rocket-launch"
              }), " ", LQ("worldBuilder:unpublishAsGame"), " ", (0, uQ.jsx)(DQ.c, {
                name: "info-circle"
              })]
            })
          }), (0, uQ.jsxs)(kQ.f, {
            onClick: FQ.playGame,
            disabled: xQ,
            children: [(0, uQ.jsx)(DQ.c, {
              name: "joystick"
            }), " ", LQ("general:playGame")]
          })]
        }), !bQ && (0, uQ.jsx)(mQ.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4832: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(1213);
    async function qQ(QQ) {
      const FQ = await fetch(`${LQ.clientSideServerUrls.s3Url}/${QQ}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === FQ.status || 403 === FQ.status) return null;
      if (!FQ.ok) throw new Error(`Failed to download the texture pack (${FQ.status})`);
      return await FQ.json()
    }
  },
  4897: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => tQ
    });
    var LQ = wQ(53),
      qQ = wQ(1342),
      oQ = wQ(1038),
      DQ = wQ(160),
      kQ = wQ(1539),
      vQ = wQ(17),
      mQ = wQ(1897),
      uQ = wQ(1489),
      HQ = wQ(4435),
      bQ = wQ(1362),
      YQ = wQ(1140),
      xQ = wQ(1503);

    function AQ(QQ, FQ) {
      return {
        schematicId: QQ.schematicId,
        name: QQ.name,
        description: QQ.description,
        gamePublished: FQ,
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

    function tQ(QQ) {
      let {
        onNavigateAway: FQ,
        inSourceWorld: wQ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: tQ
      } = (0, YQ.e)(), eQ = (0, xQ.useNavigatePreserveSearch)(), [MQ, GQ] = (0, LQ.useState)({
        ...QQ
      }), [pQ, cQ] = (0, LQ.useState)("Enter"), [CQ, SQ] = (0, LQ.useState)(void 0), iQ = (0, LQ.useRef)(AQ(QQ, QQ.gamePublished)), WQ = (0, LQ.useRef)(void 0), RQ = "Enter" === pQ, OQ = tQ.playerHasRank("developer") || tQ.playerHasRank("admin") || "Enter" === pQ && !1 !== MQ.schematicContainsSpawnBlock, sQ = void 0 !== CQ && CQ !== WQ.current || JSON.stringify(AQ(MQ, MQ.gamePublished)) !== JSON.stringify(iQ.current);

      function rQ(QQ, FQ) {
        GQ((wQ => ({
          ...wQ,
          [QQ]: FQ
        })))
      }
      const IQ = (0, LQ.useCallback)((QQ => {
        WQ.current = QQ, SQ(QQ)
      }), []);

      function UQ(QQ) {
        cQ("Loading");
        const FQ = AQ(MQ, QQ),
          wQ = CQ !== WQ.current ? CQ : void 0;
        uQ.b.updateSchematic(tQ, FQ, wQ).then((wQ => {
          let {
            customTexturePackKey: LQ
          } = wQ;
          cQ("Success"), rQ("customTexturePackKey", LQ), iQ.current = FQ, WQ.current = void 0, SQ(void 0), setTimeout((() => {
            rQ("gamePublished", QQ), cQ("Enter")
          }), 1e3)
        })).catch((QQ => {
          var FQ;
          (console.error("Failed to save schematic:", QQ), cQ("Error"), QQ instanceof DQ.d && QQ.errorMessageForUser) && bQ.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: QQ.errorMessageForUser,
            textOpts: {
              subtitle: null !== (FQ = QQ.errorMessageTranslationParams) && void 0 !== FQ ? FQ : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            cQ("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: MQ,
        updateSchematicData: rQ,
        setTexturePack: SQ,
        initializeTexturePack: IQ,
        updateState: pQ,
        formEnabled: RQ,
        publishFormEnabled: OQ,
        hasUnsavedChanges: sQ,
        canEditSourceWorld: !wQ,
        saveSchematic: UQ,
        unpublishSchematic: function() {
          bQ.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((QQ => {
            !0 === QQ && UQ(!1)
          }))
        },
        editSourceWorld: function() {
          cQ("Loading"), HQ.d.getSourceWorld(MQ.schematicId).then((QQ => {
            mQ.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, vQ.k)("other"), eQ((0, qQ.e)("classic", QQ)), null === FQ || void 0 === FQ || FQ()
          })).catch((QQ => {
            console.error("Failed to get source world:", QQ), cQ("Error"), setTimeout((() => {
              cQ("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          mQ.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), eQ((0, kQ.B)((0, oQ.r)(MQ.schematicId), MQ)), null === FQ || void 0 === FQ || FQ()
        }
      }
    }
  },
  4783: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);