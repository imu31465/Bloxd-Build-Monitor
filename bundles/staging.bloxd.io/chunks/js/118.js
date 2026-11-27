export const id = 118;
export const ids = [118];
export const modules = {
  5415: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      d: () => oe,
      g: () => ke
    });
    He(5420);
    var ye = He(1127),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1351),
      Ue = (He(59), He(4729)),
      Fe = He(1323),
      Je = He(1228);

    function oe(ee) {
      let {
        children: ie,
        label: He,
        className: be,
        circleInfoText: Ue,
        disabled: oe,
        onLabelClick: Re
      } = ee;
      const {
        t: ke
      } = (0, ye.v)(), qe = (0, Je.jsxs)("div", {
        className: Me()("Label", {
          ClickableLabel: void 0 !== Re
        }),
        onClick: Re,
        children: [ke(He), Ue && (0, Je.jsx)(Fe.e, {
          name: "circle-info"
        })]
      });
      return (0, Je.jsxs)("div", {
        className: Me()("LabeledInput", {
          [be]: be,
          DisabledLabelInput: oe
        }),
        children: [Ue && (0, Je.jsx)(Ke.g, {
          tooltipInner: (0, Je.jsx)("div", {
            className: "LabeledInputTooltip",
            children: ke(Ue)
          }),
          children: qe
        }), !Ue && qe, ie]
      })
    }

    function Re(ee) {
      let {
        checked: ie,
        setChecked: He,
        disabled: ye = !1
      } = ee;
      return (0, Je.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": ye || void 0,
        onClick: ee => {
          ye || He(!ie)
        },
        children: (0, Je.jsx)(Ue.d, {
          checked: ie,
          onChange: ee => {
            He(ee.target.checked)
          },
          disabled: ye
        })
      })
    }

    function ke(ee) {
      let {
        checked: ie,
        setChecked: He,
        disabled: ye
      } = ee;
      return (0, Je.jsx)("div", {
        className: Me()("SwitchContainer", {
          SwitchContainerDisabled: ye
        }),
        onClick: () => {
          ye || He(!ie)
        },
        children: (0, Je.jsx)(Ue.d, {
          className: "SwitchCheckbox",
          checked: ie,
          onChange: ee => {
            He(ee.target.checked)
          },
          disabled: !!ye
        })
      })
    }
  },
  5424: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(5018),
      Ke = He(1127),
      Ue = He(1228);
    const Fe = [...Me.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Je(ee) {
      const {
        disabled: ie,
        hideWrapper: He
      } = ee, {
        t: ye
      } = (0, Ke.v)(), Je = ee.advancedMode ? Fe.map((ie => [ie, ee.callbacks[ie]])) : Me.m.map((ie => [ie, ee.callbacks[ie]])), Re = (0, Ue.jsx)("div", {
        className: be()("PluginsGrid", {
          SectionBody: !He
        }),
        children: Je.map((ee => {
          let [He, ye] = ee;
          return (0, Ue.jsx)(oe, {
            plugin: He,
            callbacks: ye,
            disabled: ie
          }, He)
        }))
      });
      return He ? Re : (0, Ue.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ue.jsx)("div", {
          className: "SectionTitle",
          children: ye("worldBuilder:pluginsSection")
        }), Re]
      })
    }

    function oe(ee) {
      let {
        plugin: ie,
        callbacks: {
          isEnabled: He,
          JY: ye
        },
        disabled: Me
      } = ee;
      const {
        t: Fe
      } = (0, Ke.v)(), Je = He();
      return (0, Ue.jsxs)("div", {
        className: be()("PluginCard", {
          PluginCardEnabled: Je,
          PluginCardDisabledForm: Me
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Me || void 0,
        onClick: () => {
          Me || ye(!Je)
        },
        children: [(0, Ue.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ue.jsx)("img", {
            src: `/textures/games/classic/customGames/${ie}.png`,
            alt: ie
          })
        }), (0, Ue.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ue.jsx)("div", {
            className: "PluginCardTitle",
            children: Fe(Re[ie])
          }), (0, Ue.jsx)("div", {
            className: "PluginCardDescription",
            children: Fe(ke[ie])
          })]
        }), (0, Ue.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Fe(Je ? "general:on" : "general:off")
        })]
      })
    }
    const Re = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      ke = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5440: (ee, ie, He) => {
    He.d(ie, {
      e: () => Je
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1127),
      Ke = He(1323),
      Ue = He(1228);

    function Fe(ee) {
      let {
        textKey: ie,
        allowed: He
      } = ee;
      const {
        t: ye
      } = (0, Me.v)();
      return (0, Ue.jsxs)("li", {
        className: be()("PolicyListItem", He ? "Allowed" : "NotAllowed"),
        children: [(0, Ue.jsx)(Ke.e, {
          name: He ? "check" : "x"
        }), (0, Ue.jsx)("span", {
          children: ye(ie)
        })]
      })
    }

    function Je(ee) {
      let {
        allowed: ie,
        notAllowed: He
      } = ee;
      return (0, Ue.jsxs)("ul", {
        className: "PolicyList",
        children: [ie.map((ee => (0, Ue.jsx)(Fe, {
          textKey: ee,
          allowed: !0
        }, ee))), He.map((ee => (0, Ue.jsx)(Fe, {
          textKey: ee,
          allowed: !1
        }, ee)))]
      })
    }
  },
  5437: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ee,
      e: () => ge
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(77),
      Ue = He(2310),
      Fe = He(1127),
      Je = He(5415),
      oe = He(1323),
      Re = He(1342),
      ke = He(1438),
      qe = He(4968),
      fe = He(5440),
      Te = He(1228);

    function pe(ee) {
      return (0, Ke.createPortal)((0, Te.jsx)(Re.d, {
        ...ee
      }), document.body)
    }
    const Xe = Ue.C.map((ee => `worldBuilder:publishingPolicy_${ee}`)),
      ze = Object.keys(Ue.D).map((ee => `worldBuilder:publishingPolicy_${ee}`));

    function Be(ee) {
      let {
        onScrolledToEnd: ie
      } = ee;
      const He = (0, ye.useRef)(null),
        {
          after: be
        } = (0, qe.c)(He, "y");
      return (0, ye.useEffect)((() => {
        be || null === ie || void 0 === ie || ie()
      }), [be, ie]), (0, Te.jsx)("div", {
        ref: He,
        className: Me()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: be
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, Te.jsx)(fe.e, {
          allowed: Xe,
          notAllowed: ze
        })
      })
    }

    function Ee(ee) {
      let {
        onAnswer: ie
      } = ee;
      const [He, be] = (0, ye.useState)(!1), [Me, Ke] = (0, ye.useState)(!1), Ue = (0, ye.useCallback)((() => {
        Ke(!0)
      }), []);
      return (0, Te.jsx)(pe, {
        close: () => {
          ie(!1)
        },
        disableExitButton: !0,
        body: (0, Te.jsxs)(Re.k, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !He,
            onClick: () => {
              ie(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              ie(!1)
            }
          },
          children: [(0, Te.jsx)(Be, {
            onScrolledToEnd: Ue
          }), (0, Te.jsx)(Je.d, {
            className: "PublishingPolicyAgree",
            label: Me ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !Me,
            onLabelClick: () => {
              be(!He)
            },
            children: (0, Te.jsx)(Je.c, {
              checked: He,
              setChecked: be,
              disabled: !Me
            })
          })]
        })
      })
    }

    function ge() {
      const {
        t: ee
      } = (0, Fe.v)(), [ie, He] = (0, ye.useState)(!1);
      return (0, Te.jsxs)(Te.Fragment, {
        children: [(0, Te.jsxs)(ke.M, {
          className: "PublishingPolicyLink",
          onClick: () => {
            He(!0)
          },
          children: [(0, Te.jsx)(oe.e, {
            name: "shield-halved"
          }), " ", ee("worldBuilder:publishingPolicy")]
        }), ie && (0, Te.jsx)(pe, {
          close: () => {
            He(!1)
          },
          body: (0, Te.jsx)(Re.k, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, Te.jsx)(Be, {})
          })
        })]
      })
    }
  },
  5407: (ee, ie, He) => {
    He.d(ie, {
      i: () => Ri,
      b: () => oi,
      e: () => Ji,
      j: () => ki
    });
    var ye = He(59),
      be = He(1340),
      Me = He(1438),
      Ke = He(1674),
      Ue = He(1127),
      Fe = He(1320),
      Je = He(1351),
      oe = He(1323),
      Re = He(1169),
      ke = He(1053),
      qe = He.n(ke),
      fe = He(335),
      Te = He(5018),
      pe = He(1189),
      Xe = He(5415),
      ze = He(3442),
      Be = He(5424),
      Ee = He(1228);

    function ge(ee) {
      let {
        icon: ie,
        title: He,
        disabled: ye,
        children: be
      } = ee;
      return (0, Ee.jsxs)("div", {
        className: qe()("ManageCard", {
          ManageCardDisabled: ye
        }),
        children: [(0, Ee.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Ee.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Ee.jsx)(oe.e, {
              name: ie
            })
          }), (0, Ee.jsx)("div", {
            children: (0, Ee.jsx)("h2", {
              className: "ManageCardTitle",
              children: He
            })
          })]
        }), (0, Ee.jsxs)("div", {
          className: "ManageCardBody",
          children: [be, ye && (0, Ee.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Oe(ee) {
      let {
        label: ie,
        caption: He,
        children: ye
      } = ee;
      return (0, Ee.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Ee.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: ie
        }), ye, He && (0, Ee.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: He
        })]
      })
    }

    function de(ee) {
      let {
        label: ie,
        caption: He,
        disabled: ye,
        children: be
      } = ee;
      return (0, Ee.jsxs)("div", {
        className: qe()("ManageField", {
          ManageFieldDisabled: ye
        }),
        children: [(0, Ee.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Ee.jsx)("div", {
            className: "ManageFieldLabel",
            children: ie
          }), (0, Ee.jsx)("div", {
            className: "ManageFieldCaption",
            children: He
          })]
        }), (0, Ee.jsx)("div", {
          className: "ManageFieldControl",
          children: be
        })]
      })
    }

    function We(ee) {
      var ie, He;
      let {
        schematicData: ye,
        updateSchematicData: be,
        publishFormEnabled: Me,
        formEnabled: Ke
      } = ee;
      const {
        t: Fe
      } = (0, Ue.v)(), Je = !Me, oe = {
        tpRequests: {
          isEnabled: () => !ye.disableTpRequests,
          JY: ee => be("disableTpRequests", !ee)
        },
        spawnProtection: {
          isEnabled: () => !ye.disableSpawnProtection,
          JY: ee => be("disableSpawnProtection", !ee)
        },
        spawnReset: {
          isEnabled: () => !!ye.enableSpawnReset,
          JY: ee => be("enableSpawnReset", ee)
        },
        smpMarketplace: {
          isEnabled: () => !!ye.enableSmpMarketplace,
          JY: ee => be("enableSmpMarketplace", ee)
        },
        survivalGuns: {
          isEnabled: () => !!ye.enableSurvivalGuns,
          JY: ee => be("enableSurvivalGuns", ee)
        },
        fallDamage: {
          isEnabled: () => !ye.disableFallDamage,
          JY: ee => be("disableFallDamage", !ee)
        },
        dayNight: {
          isEnabled: () => !!ye.enableDayNight,
          JY: ee => be("enableDayNight", ee)
        }
      };
      return (0, Ee.jsxs)(Ee.Fragment, {
        children: [!1 === ye.schematicContainsSpawnBlock && (0, Ee.jsx)("div", {
          className: "ManageWarningBanner",
          children: Fe("worldBuilder:mustContainSpawnBlock")
        }), (0, Ee.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Ee.jsxs)(ge, {
            icon: "globe",
            title: Fe("worldBuilder:worldRulesSection"),
            disabled: !Ke,
            children: [(0, Ee.jsx)(de, {
              label: Fe("classic:defaultGamemode"),
              caption: Fe("classic:defaultGamemodeDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(ze.e, {
                controlClassName: "ManageDropdown",
                options: Te.B.map((ee => ({
                  value: ee,
                  label: fe.v[ee]
                }))),
                value: ye.defaultGamemode,
                onChange: ee => be("defaultGamemode", ee.value)
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:voidDeathHeight"),
              caption: Fe("classic:voidDeathHeightDescription"),
              disabled: Je,
              children: (0, Ee.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Ee.jsx)("input", {
                  type: "number",
                  max: pe.I,
                  value: null !== (ie = ye.voidDeathHeight) && void 0 !== ie ? ie : "",
                  onChange: ee => {
                    const ie = parseInt(ee.target.value);
                    be("voidDeathHeight", ie)
                  }
                }), (0, Ee.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Fe("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:worldBorder"),
              caption: Fe("classic:worldBorderDescription"),
              disabled: Je,
              children: (0, Ee.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Ee.jsx)("input", {
                  type: "number",
                  min: pe.P,
                  max: pe.J,
                  placeholder: Fe("worldBuilder:noWorldBorderLimit"),
                  value: null !== (He = ye.worldBorder) && void 0 !== He ? He : "",
                  onChange: ee => {
                    const ie = parseInt(ee.target.value);
                    be("worldBorder", isNaN(ie) ? null : ie)
                  }
                }), (0, Ee.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Fe("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:disableMobs"),
              caption: Fe("classic:disableMobsDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(Xe.g, {
                checked: ye.disableMobs,
                setChecked: ee => be("disableMobs", ee),
                disabled: Je
              })
            })]
          }), (0, Ee.jsxs)(ge, {
            icon: "user-group",
            title: Fe("worldBuilder:playerAndLobbySection"),
            disabled: !Ke,
            children: [(0, Ee.jsx)(de, {
              label: Fe("classic:disableKeepInventory"),
              caption: Fe("classic:disableKeepInventoryDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(Xe.g, {
                checked: ye.disableKeepInventory,
                setChecked: ee => be("disableKeepInventory", ee),
                disabled: Je
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:persistInventory"),
              caption: Fe("classic:persistInventoryDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(ze.e, {
                controlClassName: "ManageDropdown",
                options: Te.o.map((ee => ({
                  value: ee,
                  label: fe.i[ee]
                }))),
                value: ye.persistInventory,
                onChange: ee => be("persistInventory", ee.value)
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:persistWorld"),
              caption: Fe("classic:persistWorldDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(Xe.g, {
                checked: ye.persistWorld,
                setChecked: ee => be("persistWorld", ee),
                disabled: Je
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:disableLobbySpawn"),
              caption: Fe("classic:disableLobbySpawnDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(Xe.g, {
                checked: ye.disableLobbySpawn,
                setChecked: ee => be("disableLobbySpawn", ee),
                disabled: Je
              })
            }), (0, Ee.jsx)(de, {
              label: Fe("classic:hideLobbyCode"),
              caption: Fe("classic:hideLobbyCodeDescription"),
              disabled: Je,
              children: (0, Ee.jsx)(Xe.g, {
                checked: ye.hideLobbyCode,
                setChecked: ee => be("hideLobbyCode", ee),
                disabled: Je
              })
            })]
          })]
        }), (0, Ee.jsx)(ge, {
          icon: "layer-group",
          title: Fe("worldBuilder:pluginsSection"),
          disabled: !Ke,
          children: (0, Ee.jsx)(Be.c, {
            callbacks: oe,
            disabled: Je,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var te = He(5428),
      Ze = He(1575),
      we = He(1490),
      De = He(3871),
      Pe = He(1075),
      Ae = He(5388),
      Ye = He(5454),
      Ve = He(1441),
      ae = He(5448),
      ce = He(5440);
    const xe = 50,
      Le = .3;
    async function Ce(ee) {
      const ie = await
      function(ee) {
        return new Promise(((ie, He) => {
          const ye = new FileReader;
          ye.onload = () => ie(ye.result), ye.onerror = He, ye.readAsDataURL(ee)
        }))
      }(ee), He = await
      function(ee) {
        return new Promise(((ie, He) => {
          const ye = new Image;
          ye.onload = () => ie(ye), ye.onerror = () => He(new Error("Failed to load image")), ye.src = ee
        }))
      }(ie);
      if (He.naturalHeight > He.naturalWidth) throw new ve;
      const ye = 1024 * xe,
        {
          dataUrl: be,
          finalQuality: Me
        } = function(ee, ie) {
          const He = document.createElement("canvas");
          He.width = ee.naturalWidth, He.height = ee.naturalHeight, He.getContext("2d").drawImage(ee, 0, 0);
          let ye = .92,
            be = He.toDataURL("image/jpeg", ye);
          for (; .75 * be.length > ie && ye > .05;) ye -= .05, be = He.toDataURL("image/jpeg", ye);
          return {
            dataUrl: be,
            finalQuality: ye
          }
        }(He, ye);
      if (Math.ceil(.75 * be.length) > ye) throw new ue;
      return {
        base64Jpg: be,
        heavilyCompressed: Me < Le
      }
    }
    class ve extends Error {}
    class ue extends Error {}

    function me(ee) {
      var ie;
      let {
        schematicId: He,
        hasReadUploadPolicy: be,
        onPolicyValidationError: Fe,
        onThumbnailReady: Je
      } = ee;
      const {
        t: ke
      } = (0, Ue.v)(), [fe, Te] = (0, ye.useState)(null), [pe, Xe] = (0, ye.useState)(""), [ze, Be] = (0, ye.useState)(""), [ge, Oe] = (0, ye.useState)(!0), [de, We] = (0, ye.useState)(!1), te = (0, ye.useRef)(!1), [Ze, we] = (0, ye.useState)(null), [De, Pe] = (0, ye.useState)(!1), [Ae, Ve] = (0, ye.useState)(!1), ae = (0, ye.useRef)(0), {
        getRootProps: ce,
        getInputProps: xe,
        isDragActive: Le
      } = (0, Ye.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async ee => {
          if (0 === ee.length) return;
          const ie = ee[0],
            He = ++ae.current;
          we(null), Pe(!1), Te(null), Xe(ie.name);
          try {
            const ee = await Ce(ie);
            if (He !== ae.current) return;
            Te(ee), Pe(ee.heavilyCompressed)
          } catch (ye) {
            if (He !== ae.current) return;
            we(ke(ye instanceof ve ? "thumbnail:portraitImagesNotAllowed" : ye instanceof ue ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), me = pe.length <= 30 ? pe : `${pe.slice(0,27)}...`, le = null !== (ie = null === fe || void 0 === fe ? void 0 : fe.base64Jpg) && void 0 !== ie ? ie : null, Se = ze.trim(), ne = Se.length >= Re.o && Se.length <= Re.m, je = Ae && !fe && !Ze, se = Ae && !ne;
      return (0, Ee.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Ee.jsxs)("div", {
          ...ce({
            className: qe()("ThumbnailUploadDropzone", {
              ActiveDrag: Le,
              ValidationError: je
            })
          }),
          children: [(0, Ee.jsx)("input", {
            ...xe()
          }), !Le && le ? (0, Ee.jsxs)(Ee.Fragment, {
            children: [(0, Ee.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Ee.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Ee.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Ee.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Ee.jsx)("img", {
                    src: le,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Ee.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Ee.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Ee.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Ee.jsx)("img", {
                    src: le,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Ee.jsxs)("div", {
              children: [(0, Ee.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: me
              }), (0, Ee.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: ke("thumbnail:preview")
              })]
            })]
          }) : (0, Ee.jsxs)(Ee.Fragment, {
            children: [(0, Ee.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Ee.jsx)(oe.e, {
                name: "image"
              })
            }), (0, Ee.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: ke("thumbnail:dragImageHere")
            })]
          })]
        }), je && (0, Ee.jsx)("div", {
          className: "ThumbnailUploadError",
          children: ke("thumbnail:imageRequired")
        }), (0, Ee.jsx)(Ke.d, {
          className: qe()("ThumbnailUploadNameInput", {
            ValidationError: se
          }),
          placeholderText: ke("thumbnail:thumbnailName"),
          defaultValue: ze,
          onValueChange: ee => {
            Be(ee)
          },
          maxLength: Re.m
        }), se && (0, Ee.jsx)("div", {
          className: "ThumbnailUploadError",
          children: ke("thumbnail:nameRequired", {
            min: Re.o,
            max: Re.m
          })
        }), (0, Ee.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Ee.jsx)("input", {
            type: "checkbox",
            checked: ge,
            onChange: ee => {
              Oe(ee.target.checked)
            }
          }), ke("thumbnail:setAsThumbnailOnceApproved")]
        }), De && (0, Ee.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: ke("thumbnail:heavyCompressionWarning")
        }), Ze && (0, Ee.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Ze
        }), (0, Ee.jsx)(Me.m, {
          disabled: de,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Ve(!0), !te.current && fe && ne && be) {
              te.current = !0, We(!0), we(null);
              try {
                await Je(fe.base64Jpg, Se, ge ? He : null)
              } catch (ee) {
                we(ee.errorMessageForUser ? ke(ee.errorMessageForUser, ee.errorMessageTranslationParams) : ke("thumbnail:failedToUploadImage"))
              } finally {
                te.current = !1, We(!1)
              }
            } else be || Fe()
          },
          children: ke(de ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const le = 2e3;

    function Se(ee) {
      let {
        schematicId: ie,
        ownedThumbnailCount: He,
        onClose: be,
        onThumbnailReady: Me
      } = ee;
      const {
        t: Ke
      } = (0, Ue.v)(), {
        userContext: Je
      } = (0, Pe.b)(), [ke, fe] = (0, ye.useState)(!1), [Te, pe] = (0, ye.useState)(!1), [Xe, ze] = (0, ye.useState)(!1), Be = (0, ye.useRef)(), {
        loading: ge,
        eligibility: Oe
      } = (0, ae.c)(), de = (0, ae.d)();
      (0, ye.useEffect)((() => () => {
        clearTimeout(Be.current)
      }), []);
      const We = [];
      Je.isLoggedIn() || We.push(Ke("thumbnail:mustBeLoggedInToUpload")), He >= Re.V && We.push(Ke("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: Re.V
      }));
      const te = null === Oe || void 0 === Oe ? void 0 : Oe.thumbnailUploadWait;
      if (te && We.push(de("accountAge" === te.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", te.until)), !ke && We.length > 0) return (0, Ee.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, Ee.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Ke("thumbnail:cannotUploadThumbnail")
        }), We.map((ee => (0, Ee.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, Ee.jsx)(oe.e, {
            name: "triangle-exclamation"
          }), (0, Ee.jsx)("span", {
            children: ee
          })]
        }, ee)))]
      });
      if (ge) return (0, Ee.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, Ee.jsx)(Fe.b, {})
      });
      return (0, Ee.jsxs)("div", {
        className: qe()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: ke
        }),
        children: [ke && (0, Ee.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Ee.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Ee.jsx)(oe.e, {
              name: "check"
            }), (0, Ee.jsx)(Ve.b, {})]
          }), (0, Ee.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Ke("thumbnail:thumbnailUploaded")
          })]
        }), (0, Ee.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Ke("thumbnail:uploadThumbnail")
        }), (0, Ee.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Ee.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Ee.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Ke("thumbnail:chooseImage", {
                maxSizeKb: xe
              })
            }), (0, Ee.jsx)(me, {
              schematicId: ie,
              hasReadUploadPolicy: Te,
              onPolicyValidationError: () => {
                ze(!0)
              },
              onThumbnailReady: async (ee, ie, He) => {
                await Me(ee, ie, He), fe(!0), Be.current = setTimeout(be, le)
              }
            })]
          }), (0, Ee.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Ee.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Ke("thumbnail:uploadPolicy")
            }), (0, Ee.jsx)(ce.e, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, Ee.jsxs)("label", {
              className: qe()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Xe && !Te
              }),
              children: [(0, Ee.jsx)("input", {
                type: "checkbox",
                checked: Te,
                onChange: ee => {
                  pe(ee.target.checked)
                }
              }), Ke("thumbnail:agreeToUploadPolicy")]
            }), Xe && !Te && (0, Ee.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Ke("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function ne(ee) {
      let {
        imageUrl: ie,
        thumbnailName: He,
        onClose: ye
      } = ee;
      const {
        t: be
      } = (0, Ue.v)();
      return (0, Ee.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Ee.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: be("thumbnail:deleteThumbnail")
        }), (0, Ee.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== ie && (0, Ee.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: ie,
            alt: He
          }), (0, Ee.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: He
          })]
        }), (0, Ee.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: be("thumbnail:deleteThumbnailConfirmation")
        }), (0, Ee.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Ee.jsxs)(Me.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => ye(!0),
            children: [(0, Ee.jsx)(oe.e, {
              name: "trash-can"
            }), " ", be("general:delete")]
          }), (0, Ee.jsx)(Me.e, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => ye(!1),
            children: be("general:cancel")
          })]
        })]
      })
    }
    var je = He(198);
    const se = ["thumbnail:policyFollowGuidelines"],
      Ie = {
        "custom-game-bad-thumbnail": {
          policyRows: ["thumbnail:rejectionBreaksUploadPolicy"],
          example: null,
          fix: "thumbnail:rejectionBadThumbnailFix"
        },
        "thumbnail-random-irrelevant-content": {
          policyRows: ["thumbnail:policyMustReflectGame"],
          example: "thumbnail:rejectionIrrelevantExample",
          fix: "thumbnail:rejectionIrrelevantFix"
        },
        "thumbnail-copyright-content": {
          policyRows: ["thumbnail:policyCopyrightContent"],
          example: "thumbnail:rejectionCopyrightExample",
          fix: "thumbnail:rejectionCopyrightFix"
        },
        "thumbnail-unauthorized-bloxd-branding": {
          policyRows: ["thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags"],
          example: "thumbnail:rejectionUnauthorisedBrandingExample",
          fix: "thumbnail:rejectionUnauthorisedBrandingFix"
        },
        "thumbnail-sexual-content": {
          policyRows: se,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: se,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: se,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function he(ee) {
      let {
        rejectedThumbnails: ie,
        isAcknowledging: He,
        onAcknowledge: ye
      } = ee;
      const {
        t: be
      } = (0, Ue.v)();
      return (0, Ee.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, Ee.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: be("thumbnail:rejectedByModerators")
        }), ie.map((ee => (0, Ee.jsx)(Ne, {
          rejected: ee
        }, ee.thumbnail.id))), (0, Ee.jsx)(Me.m, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: ye,
          disabled: He,
          children: He ? (0, Ee.jsx)(Fe.b, {}) : be("thumbnail:gotIt")
        })]
      })
    }

    function Ne(ee) {
      var ie;
      let {
        rejected: {
          thumbnail: He,
          rejection: ye
        }
      } = ee;
      const {
        t: be
      } = (0, Ue.v)(), Me = null !== (ie = (0, je.b)(Ie, ye.policyId)) && void 0 !== ie ? ie : Ie["custom-game-bad-thumbnail"], Ke = new Date(ye.at).toLocaleDateString();
      return (0, Ee.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, Ee.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== He.preview && (0, Ee.jsx)("img", {
            src: He.preview,
            alt: He.name
          }), null === He.preview && (0, Ee.jsx)(oe.e, {
            name: "image-slash"
          })]
        }), (0, Ee.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, Ee.jsx)("div", {
            className: "RejectedThumbnailName",
            children: He.name
          }), (0, Ee.jsx)("div", {
            children: null !== ye.gameName ? be("thumbnail:rejectedGameAndDate", {
              game: ye.gameName,
              date: Ke
            }) : Ke
          }), null !== ye.reason && (0, Ee.jsx)("div", {
            children: be("creatorModeration:moderatorNote", {
              reason: ye.reason
            })
          }), Me.policyRows.length > 0 && (0, Ee.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: Me.policyRows.map((ee => (0, Ee.jsxs)("li", {
              children: [(0, Ee.jsx)(oe.e, {
                name: "x"
              }), (0, Ee.jsx)("span", {
                children: be(ee)
              })]
            }, ee)))
          }), (0, Ee.jsxs)("div", {
            children: [null !== Me.example && null === ye.reason && `${be(Me.example)} `, be(Me.fix)]
          })]
        })]
      })
    }
    var Ge = He(1141);

    function re(ee) {
      return null !== ee.preview ? ee.preview : ee.approved ? `${Ge.clientSideServerUrls.s3Url}/${(0,Ze.f)(ee.id)}` : null
    }

    function Qe(ee) {
      return null !== ee.pendingKey ? {
        pendingKey: ee.pendingKey
      } : {
        thumbnailId: ee.id
      }
    }

    function ei(ee) {
      var ie, He;
      let {
        schematicData: Ke,
        updateSchematicData: Je,
        publishFormEnabled: Re,
        onClose: ke
      } = ee;
      const {
        t: fe
      } = (0, Ue.v)(), {
        userContext: Te,
        isUserContextUpdating: pe
      } = (0, Pe.b)(), Xe = (0, De.c)(), [ze, Be] = (0, ye.useState)([]), [ge, Oe] = (0, ye.useState)([]), [de, We] = (0, ye.useState)(!0), [te, Ze] = (0, ye.useState)(!1), [Ye, Ve] = (0, ye.useState)(null !== (ie = Ke.customThumbnailId) && void 0 !== ie ? ie : null), [ae, ce] = (0, ye.useState)(null), xe = (0, ye.useRef)(null !== (He = Ke.customThumbnailId) && void 0 !== He ? He : null), Le = (0, ye.useRef)(0), Ce = (0, ye.useRef)(null), ve = (0, ye.useRef)(null), ue = (0, ye.useRef)(null), me = (0, ye.useRef)(!1);

      function le(ee, ie) {
        ue.current && (clearTimeout(ue.current), ue.current = null), ce(ee), null !== ee && ie && (ue.current = setTimeout((() => {
          ce(null), ue.current = null
        }), 5e3))
      }(0, ye.useEffect)((() => () => {
        clearTimeout(ve.current), clearTimeout(ue.current)
      }), []);
      const je = (0, ye.useCallback)((() => {
        We(!0), we.b.getOwnedThumbnails(Te).then((ee => {
          const ie = [],
            He = [];
          for (const ye of ee.thumbnails) ye.rejection ? ie.push({
            thumbnail: ye,
            rejection: ye.rejection
          }) : He.push(ye);
          ie.sort(((ee, ie) => ie.rejection.at - ee.rejection.at)), He.sort(((ee, ie) => {
            const He = ee.approved ? 1 : 0,
              ye = (ie.approved ? 1 : 0) - He;
            return 0 !== ye ? ye : ie.lastUpdatedAt - ee.lastUpdatedAt
          })), Oe(ie), Be(He)
        })).catch((ee => {
          console.error("Failed to fetch thumbnails:", ee)
        })).finally((() => {
          We(!1)
        }))
      }), [Te]);
      async function se(ee, ie, He) {
        return we.b.uploadSchematicThumbnail(Te, ee, ie, He).then((() => {
          le({
            text: fe("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), je()
        }))
      }

      function Ie() {
        Le.current = Date.now(), ve.current = null;
        const ee = Ce.current;
        Ce.current = null, le({
          text: fe("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), we.b.setSchematicThumbnail(Te, Ke.schematicId, ee).then((() => {
          Xe.current && (le({
            text: fe("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), xe.current = ee, Je("customThumbnailId", ee), Je("customThumbnailBlurhash", void 0), Je("customThumbnailVariants", void 0))
        })).catch((ee => {
          Xe.current && (le({
            text: ee.errorMessageForUser ? fe(ee.errorMessageForUser, ee.errorMessageTranslationParams) : fe("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Ve(xe.current))
        }))
      }

      function Ne(ee) {
        Ve(ee), Ce.current = ee;
        const ie = Date.now() - Le.current;
        ie >= 1e3 ? Ie() : (le({
          text: fe("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ve.current || (ve.current = setTimeout((() => {
          Ie()
        }), 1e3 - ie)))
      }
      return (0, ye.useEffect)((() => {
        !1 === pe && je()
      }), [pe, je]), (0, Ee.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Ee.jsxs)("div", {
          className: "SectionTitle",
          children: [fe("thumbnail:gameThumbnail"), ae && (0, Ee.jsx)("span", {
            className: qe()("ThumbnailActionMsg", `ThumbnailActionMsg--${ae.type}`),
            children: ae.text
          })]
        }), (0, Ee.jsxs)("div", {
          className: "SectionBody",
          children: [ge.length > 0 && (0, Ee.jsx)(he, {
            rejectedThumbnails: ge,
            isAcknowledging: te,
            onAcknowledge: async function() {
              Ze(!0);
              const ee = await Promise.allSettled(ge.map((ee => {
                let {
                  thumbnail: ie
                } = ee;
                return we.b.deleteSchematicThumbnail(Te, Qe(ie))
              })));
              if (!Xe.current) return;
              Ze(!1);
              const ie = ee.filter((ee => "rejected" === ee.status));
              ie.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", ie), le({
                text: fe("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), je()
            }
          }), (0, Ee.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Ee.jsxs)("div", {
              className: qe()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Ye
              }),
              onClick: () => Ne(null),
              children: [(0, Ee.jsx)(Ae.d, {
                game: {
                  schematicId: Ke.schematicId,
                  imageBlurhash: Ke.imageBlurhash
                }
              }), (0, Ee.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: fe("general:default")
              })]
            }), de && (0, Ee.jsx)(Fe.b, {}), ze.map((ee => {
              var ie;
              const He = re(ee);
              return (0, Ee.jsxs)("div", {
                className: qe()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: ee.approved && Ye === ee.id,
                  ThumbnailGridItemPending: !ee.approved
                }),
                onClick: () => {
                  ee.approved && Ne(ee.id)
                },
                children: [null !== He && (0, Ee.jsx)("img", {
                  src: He,
                  alt: ee.name
                }), (0, Ee.jsx)(Me.G, {
                  className: "ThumbnailDeleteButton",
                  onClick: ie => async function(ee, ie) {
                    ee.stopPropagation();
                    const He = await be.NotificationProvider.showCustomPopup({
                        body: ee => (0, Ee.jsx)(ne, {
                          imageUrl: re(ie),
                          thumbnailName: ie.name,
                          onClose: ie => {
                            ie && (me.current = !0), ee()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: ke
                      }).getResult(),
                      ye = me.current;
                    me.current = !1, ye && !0 === He && (Xe.current && le({
                      text: fe("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), we.b.deleteSchematicThumbnail(Te, Qe(ie)).then((() => {
                      Xe.current && (le({
                        text: fe("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== ie.id && xe.current === ie.id && Ne(null), je())
                    })).catch((ee => {
                      Xe.current && le({
                        text: ee.errorMessageForUser ? fe(ee.errorMessageForUser, ee.errorMessageTranslationParams) : fe("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(ie, ee),
                  children: (0, Ee.jsx)(oe.e, {
                    name: "trash-can"
                  })
                }), ee.approved && (0, Ee.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: ee.name
                }), !ee.approved && (0, Ee.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, Ee.jsx)(oe.e, {
                    name: "hourglass-clock"
                  })
                }), !ee.approved && (0, Ee.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [ee.name, (0, Ee.jsx)("br", {}), fe("thumbnail:pendingApproval")]
                })]
              }, null !== (ie = ee.id) && void 0 !== ie ? ie : ee.pendingKey)
            })), (0, Ee.jsxs)("div", {
              className: qe()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Re
              }),
              onClick: () => {
                Re && function(ee) {
                  let {
                    schematicId: ie,
                    ownedThumbnailCount: He,
                    onThumbnailReady: ye,
                    onClose: Me
                  } = ee;
                  be.NotificationProvider.showCustomPopup({
                    body: ee => (0, Ee.jsx)(Se, {
                      schematicId: ie,
                      ownedThumbnailCount: He,
                      onClose: ee,
                      onThumbnailReady: ye
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Me,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Ke.schematicId,
                  ownedThumbnailCount: ze.length,
                  onThumbnailReady: se,
                  onClose: ke
                })
              },
              children: [(0, Ee.jsx)(oe.e, {
                name: "plus"
              }), (0, Ee.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: fe("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var ii = He(2181),
      Hi = He(5491),
      yi = He(5496),
      bi = He(5552);

    function Mi(ee) {
      let {
        schematicData: ie,
        setTexturePack: He,
        initializeTexturePack: be,
        publishFormEnabled: Me
      } = ee;
      const {
        t: Ke
      } = (0, Ue.v)(), [Fe, Je] = (0, ye.useState)(null), [oe, Re] = (0, ye.useState)(null), [ke, fe] = (0, ye.useState)(!1), Te = (0, De.c)(), pe = Me && !ke, Xe = ie.customTexturePackKey;

      function ze(ee) {
        var ie;
        Je(ee.metaData.id), Re(null !== (ie = ee.metaData.fromFolderName) && void 0 !== ie ? ie : null), (ee.metaData.id !== ii.o.CUSTOM || ee.metaData.fromFolderName) && He(ee)
      }
      return (0, ye.useEffect)((() => {
        Xe && (fe(!0), (0, Hi.e)(Xe).then((ee => {
          var ie;
          Te.current && (ee ? (Je(ee.metaData.id), Re(null !== (ie = ee.metaData.fromFolderName) && void 0 !== ie ? ie : null), be(ee)) : console.error(`No texture pack at ${Xe}`))
        })).catch((ee => {
          console.error("Error fetching texture pack: ", ee)
        })).finally((() => {
          fe(!1)
        })))
      }), [Xe, be, Te]), (0, Ee.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Ee.jsx)("div", {
          className: "SectionTitle",
          children: Ke("customTexturePack:customTexturePack")
        }), (0, Ee.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Ee.jsx)("div", {
            className: qe()("TexturePack", {
              Selected: null === Fe && !ke,
              Disabled: !pe
            }),
            onClick: () => {
              pe && (Je(null), He(null), Re(null))
            },
            children: (0, Ee.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(ii.o).map((ee => (0, Ee.jsx)(yi.f, {
            id: ee,
            isSelected: ee === Fe,
            setSelected: ze,
            disabled: !pe
          }, ee)))]
        }), Fe === ii.o.CUSTOM && (0, Ee.jsx)(bi.e, {
          folderName: oe,
          onTexturePackUpdated: ze,
          disabled: !pe,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Ki = He(5604);

    function Ui(ee) {
      var ie;
      let {
        gameCategory: He,
        setGameCategory: ye,
        disabled: be
      } = ee;
      const Ke = null !== (ie = (0, fe.ob)(He)) && void 0 !== ie ? ie : "other";
      return (0, Ee.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Ee.jsx)(Xe.d, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: be,
          children: (0, Ee.jsx)(ze.e, {
            options: fe.bb.map((ee => ({
              value: ee,
              label: fe._[ee]
            }))),
            value: Ke,
            onChange: ee => {
              ee.value !== Ke && ye(fe.V[ee.value][0])
            }
          })
        }), (0, Ee.jsx)(Xe.d, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: be,
          children: (0, Ee.jsx)("div", {
            className: "GameCategoryOptions",
            children: fe.V[Ke].map((ee => (0, Ee.jsx)(Me.M, {
              active: ee === He,
              onClick: () => {
                ye(ee)
              },
              children: (0, fe.lb)(ee)
            }, ee)))
          })
        })]
      })
    }
    var Fi = He(5437);

    function Ji(ee) {
      let {
        editor: ie,
        onClose: He
      } = ee;
      const {
        t: ye
      } = (0, Ue.v)(), {
        schematicData: be,
        updateSchematicData: Me,
        publishFormEnabled: Fe,
        formEnabled: Je
      } = ie;
      return (0, Ee.jsxs)(Ee.Fragment, {
        children: [(0, Ee.jsxs)(ge, {
          icon: "pen-to-square",
          title: ye("worldBuilder:basicsSection"),
          disabled: !Je,
          children: [(0, Ee.jsx)(Oe, {
            label: ye("general:name"),
            caption: ye("worldBuilder:schematicNameTagsHint"),
            children: (0, Ee.jsx)(Ke.d, {
              className: "SchematicPageName",
              defaultValue: be.name,
              onValueChange: ee => Me("name", ee),
              placeholderText: ye("worldBuilder:schematicNamePlaceholder"),
              maxLength: Re.qb
            })
          }), (0, Ee.jsx)(Oe, {
            label: ye("general:description"),
            children: (0, Ee.jsx)(Ke.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: be.description,
              onValueChange: ee => Me("description", ee),
              placeholderText: ye("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Re.pb
            })
          }), (0, Ee.jsx)(Ui, {
            gameCategory: be.gameCategory,
            setGameCategory: ee => Me("gameCategory", ee),
            disabled: !Fe
          }), !0 === be.gamePublished && (0, Ee.jsx)(ei, {
            schematicData: be,
            updateSchematicData: Me,
            publishFormEnabled: Fe,
            onClose: function() {
              null === He || void 0 === He || He()
            }
          }), (0, Ee.jsx)(Fi.e, {})]
        }), (0, Ee.jsx)(We, {
          schematicData: be,
          updateSchematicData: Me,
          publishFormEnabled: Fe,
          formEnabled: Je
        }), !0 === be.gamePublished && (0, Ee.jsx)(ge, {
          icon: "palette",
          title: ye("worldBuilder:texturePackSection"),
          disabled: !Je,
          children: (0, Ee.jsx)(Mi, {
            schematicData: be,
            setTexturePack: ie.setTexturePack,
            initializeTexturePack: ie.initializeTexturePack,
            publishFormEnabled: Fe
          })
        })]
      })
    }

    function oi(ee) {
      let {
        editor: ie
      } = ee;
      const {
        t: He
      } = (0, Ue.v)(), {
        schematicData: ye,
        formEnabled: be,
        hasUnsavedChanges: Ke,
        publishSuspendedUntil: Re
      } = ie, ke = (0, ae.e)(), qe = !0 === ye.gamePublished ? Re : null, fe = be && Ke && null === qe;
      return (0, Ee.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== qe && (0, Ee.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: ke(qe)
        }), be && Ke && null === qe && (0, Ee.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Ee.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), He("worldBuilder:unsavedChanges")]
        }), (0, Ee.jsx)(Je.g, {
          tooltipInner: (0, Ee.jsx)("div", {
            className: "SaveButtonTooltip",
            children: He(be && !Ke ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Ee.jsxs)(Me.c, {
            className: "SaveChangesButton",
            onClick: () => ie.saveSchematic(ye.gamePublished),
            disabled: !fe,
            children: [(0, Ee.jsxs)("span", {
              className: be ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Ee.jsx)(oe.e, {
                name: "wrench"
              }), " ", He("worldBuilder:saveChanges")]
            }), !be && (0, Ee.jsx)(Fe.b, {})]
          })
        })]
      })
    }

    function Ri(ee) {
      let {
        schematic: ie,
        onSchematicUpdate: He,
        onClose: be,
        inSourceWorld: Ke
      } = ee;
      const {
        t: Fe
      } = (0, Ue.v)();

      function Je() {
        null === be || void 0 === be || be()
      }
      const oe = (0, Ki.c)(ie, {
        onNavigateAway: Je,
        inSourceWorld: Ke
      });
      return (0, ye.useEffect)((() => {
        null === He || void 0 === He || He(oe.schematicData)
      }), [oe.schematicData, He]), (0, Ee.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Ee.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Ee.jsx)(Me.b, {
            onClick: Je,
            children: Fe("worldBuilder:back")
          }), (0, Ee.jsx)(ge, {
            icon: "rocket-launch",
            title: Fe("worldBuilder:actionsSection"),
            disabled: !oe.formEnabled,
            children: (0, Ee.jsx)(te.c, {
              editor: oe
            })
          }), (0, Ee.jsx)(Ji, {
            editor: oe,
            onClose: Je
          })]
        }), (0, Ee.jsx)(oi, {
          editor: oe
        })]
      })
    }

    function ki(ee) {
      let {
        schematic: ie,
        onSchematicUpdate: He,
        onClose: ye,
        inSourceWorld: Me
      } = ee;
      be.NotificationProvider.showCustomPopup({
        body: ee => (0, Ee.jsx)(Ri, {
          schematic: ie,
          onSchematicUpdate: He,
          onClose: ee,
          inSourceWorld: Me
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ye,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5428: (ee, ie, He) => {
    He.d(ie, {
      c: () => qe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1127),
      Ke = He(1323),
      Ue = He(1438),
      Fe = He(1351),
      Je = He(1320),
      oe = He(5437),
      Re = He(5448),
      ke = He(1228);

    function qe(ee) {
      let {
        editor: ie,
        className: He,
        publishRefusal: ye = null
      } = ee;
      const {
        t: qe
      } = (0, Me.v)(), {
        schematicData: fe,
        formEnabled: Te,
        publishFormEnabled: pe,
        publishSuspendedUntil: Xe
      } = ie, ze = !Te || !pe, Be = (0, Re.e)();
      return (0, ke.jsxs)("div", {
        className: be()("PublishButtonContainer", He),
        children: [ie.canEditSourceWorld && (0, ke.jsxs)(Ue.c, {
          onClick: ie.editSourceWorld,
          disabled: ze,
          children: [(0, ke.jsx)(Ke.e, {
            name: "edit"
          }), " ", qe("worldBuilder:editSourceWorld")]
        }), !fe.gamePublished && (0, ke.jsx)(Fe.g, {
          tooltipInner: (0, ke.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== ye && void 0 !== ye ? ye : qe("worldBuilder:publishAsGameDescription")
          }),
          children: (0, ke.jsxs)(Ue.m, {
            onClick: () => ie.saveSchematic(!0),
            disabled: ze || null !== ye || null !== Xe,
            children: [(0, ke.jsx)(Ke.e, {
              name: "rocket-launch"
            }), " ", qe("worldBuilder:publishAsGame"), " ", (0, ke.jsx)(Ke.e, {
              name: "info-circle"
            })]
          })
        }), !0 === fe.gamePublished && (0, ke.jsxs)(ke.Fragment, {
          children: [(0, ke.jsx)(Fe.g, {
            tooltipInner: (0, ke.jsx)("div", {
              className: "PublishButtonTooltip",
              children: qe("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, ke.jsxs)(Ue.G, {
              onClick: ie.unpublishSchematic,
              disabled: ze,
              children: [(0, ke.jsx)(Ke.e, {
                name: "rocket-launch"
              }), " ", qe("worldBuilder:unpublishAsGame"), " ", (0, ke.jsx)(Ke.e, {
                name: "info-circle"
              })]
            })
          }), (0, ke.jsxs)(Ue.c, {
            onClick: ie.playGame,
            disabled: ze,
            children: [(0, ke.jsx)(Ke.e, {
              name: "joystick"
            }), " ", qe("general:playGame")]
          })]
        }), !Te && (0, ke.jsx)(Je.b, {
          loaderType: "Secondary"
        }), !fe.gamePublished && null !== Xe && (0, ke.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: Be(Xe)
        }), ie.askingPublishingPolicy && (0, ke.jsx)(oe.c, {
          onAnswer: ie.answerPublishingPolicy
        })]
      })
    }
  },
  5491: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(1141);
    async function be(ee) {
      const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ie.status || 403 === ie.status) return null;
      if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
      return await ie.json()
    }
  },
  5448: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      d: () => Fe,
      e: () => Je
    });
    var ye = He(59),
      be = He(1490),
      Me = He(1127),
      Ke = He(1075);

    function Ue() {
      let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: ie
      } = (0, Ke.b)(), [He, Me] = (0, ye.useState)((() => ({
        loading: ee && ie.isLoggedIn(),
        eligibility: null
      })));
      if ((0, ye.useEffect)((() => {
          if (!ee || !ie.isLoggedIn()) return void Me({
            loading: !1,
            eligibility: null
          });
          let He = !1;
          return be.b.getCreatorEligibility(ie).then((ee => {
            He || Me({
              loading: !1,
              eligibility: ee
            })
          })).catch((ee => {
            console.warn("Failed to load creator eligibility", ee), He || Me({
              loading: !1,
              eligibility: null
            })
          })), () => {
            He = !0
          }
        }), [ie, ee]), null === He.eligibility) return He;
      const Ue = Date.now(),
        {
          thumbnailUploadWait: Fe,
          publishSuspendedUntil: Je
        } = He.eligibility;
      return {
        loading: He.loading,
        eligibility: {
          thumbnailUploadWait: null !== Fe && Fe.until > Ue ? Fe : null,
          publishSuspendedUntil: null !== Je && Je > Ue ? Je : null
        }
      }
    }

    function Fe() {
      const {
        t: ee,
        selectedLanguage: ie
      } = (0, Me.v)();
      return (He, ye) => ee(He, {
        date: (0, Me.f)(ie.code, He, ye, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function Je() {
      const {
        t: ee,
        selectedLanguage: ie
      } = (0, Me.v)();
      return He => {
        const ye = "worldBuilder:publishSuspended";
        return ee(ye, {
          date: (0, Me.f)(ie.code, ye, He, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  5604: (ee, ie, He) => {
    He.d(ie, {
      c: () => Be
    });
    var ye = He(59),
      be = He(1315),
      Me = He(1033),
      Ke = He(153),
      Ue = He(2310),
      Fe = He(1538),
      Je = He(18),
      oe = He(1983),
      Re = He(1490),
      ke = He(4974),
      qe = He(1340),
      fe = He(1913),
      Te = He(1075),
      pe = He(1502),
      Xe = He(5448);

    function ze(ee, ie) {
      return {
        schematicId: ee.schematicId,
        name: ee.name,
        description: ee.description,
        gamePublished: ie,
        gameCategory: ee.gameCategory,
        defaultGamemode: ee.defaultGamemode,
        voidDeathHeight: ee.voidDeathHeight,
        disableKeepInventory: ee.disableKeepInventory,
        disableTpRequests: ee.disableTpRequests,
        disableLobbySpawn: ee.disableLobbySpawn,
        disableMobs: ee.disableMobs,
        disableSpawnProtection: ee.disableSpawnProtection,
        disableFallDamage: ee.disableFallDamage,
        worldBorder: ee.worldBorder,
        hideLobbyCode: ee.hideLobbyCode,
        enableSmpMarketplace: ee.enableSmpMarketplace,
        enableSurvivalGuns: ee.enableSurvivalGuns,
        enableSpawnReset: ee.enableSpawnReset,
        enableDayNight: ee.enableDayNight,
        persistWorld: ee.persistWorld,
        persistInventory: ee.persistInventory
      }
    }

    function Be(ee) {
      var ie, He;
      let {
        onNavigateAway: Be,
        inSourceWorld: Ee = !1,
        canManage: ge = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Oe
      } = (0, Te.b)(), de = (0, pe.useNavigatePreserveSearch)(), [We, te] = (0, ye.useState)({
        ...ee
      }), [Ze, we] = (0, ye.useState)("Enter"), [De, Pe] = (0, ye.useState)(void 0), [Ae, Ye] = (0, ye.useState)(!1), Ve = (0, ye.useRef)(ze(ee, ee.gamePublished)), ae = (0, ye.useRef)(void 0), ce = "Enter" === Ze, xe = null !== (ie = null === (He = (0, Xe.c)(ge).eligibility) || void 0 === He ? void 0 : He.publishSuspendedUntil) && void 0 !== ie ? ie : null, Le = Oe.playerHasRank("developer") || Oe.playerHasRank("admin") || "Enter" === Ze && !1 !== We.schematicContainsSpawnBlock, Ce = void 0 !== De && De !== ae.current || JSON.stringify(ze(We, We.gamePublished)) !== JSON.stringify(Ve.current);

      function ve(ee, ie) {
        te((He => ({
          ...He,
          [ee]: ie
        })))
      }
      const ue = (0, ye.useCallback)((ee => {
        ae.current = ee, Pe(ee)
      }), []);

      function me() {
        return (0, Fe.w)((0, Me.v)(We.schematicId), We)
      }

      function le(ee, ie) {
        we("Loading");
        const He = ze(We, ee),
          ye = De !== ae.current ? De : void 0;
        Re.b.updateSchematic(Oe, He, ye, ie).then((ie => {
          let {
            customTexturePackKey: ye
          } = ie;
          we("Success"), ve("customTexturePackKey", ye), Ve.current = He, ae.current = void 0, Pe(void 0), !ee || We.gamePublished || Be || fe.f.showGamePublished(We.name, me()), setTimeout((() => {
            ve("gamePublished", ee), we("Enter")
          }), 1e3)
        })).catch((ee => {
          if (ee instanceof Ke.b && ee.errorMessageForUser === Ue.H && void 0 === ie) return we("Enter"), void Ye(!0);
          var He;
          (console.error("Failed to save schematic:", ee), we("Error"), ee instanceof Ke.b && ee.errorMessageForUser) && qe.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: ee.errorMessageForUser,
            textOpts: {
              subtitle: null !== (He = ee.errorMessageTranslationParams) && void 0 !== He ? He : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            we("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: We,
        updateSchematicData: ve,
        setTexturePack: Pe,
        initializeTexturePack: ue,
        updateState: Ze,
        formEnabled: ce,
        publishFormEnabled: Le,
        hasUnsavedChanges: Ce,
        publishSuspendedUntil: xe,
        canEditSourceWorld: !Ee,
        saveSchematic: le,
        unpublishSchematic: function() {
          qe.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((ee => {
            !0 === ee && le(!1)
          }))
        },
        askingPublishingPolicy: Ae,
        answerPublishingPolicy: function(ee) {
          Ye(!1), ee && le(!0, Ue.J)
        },
        editSourceWorld: function() {
          we("Loading"), ke.c.getSourceWorld(We.schematicId).then((ee => {
            oe.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Je.l)("other"), de((0, be.b)("classic", ee)), null === Be || void 0 === Be || Be()
          })).catch((ee => {
            console.error("Failed to get source world:", ee), we("Error"), setTimeout((() => {
              we("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          oe.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), de(me()), null === Be || void 0 === Be || Be()
        }
      }
    }
  },
  5420: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);