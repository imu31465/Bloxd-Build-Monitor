export const id = 93;
export const ids = [93];
export const modules = {
  4148: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ky,
      i: () => By,
      m: () => ey
    });
    Wy(4152);
    var Uy = Wy(1042),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(1217),
      cb = (Wy(55), Wy(3630)),
      Py = Wy(910),
      oy = Wy(952);

    function By(yb) {
      let {
        children: bb,
        label: Wy,
        className: hy,
        circleInfoText: cb,
        disabled: By,
        onLabelClick: Ky
      } = yb;
      const {
        t: ey
      } = (0, Uy.D)(), qb = (0, oy.jsxs)("div", {
        className: fy()("Label", {
          ClickableLabel: void 0 !== Ky
        }),
        onClick: Ky,
        children: [ey(Wy), cb && (0, oy.jsx)(Py.e, {
          name: "circle-info"
        })]
      });
      return (0, oy.jsxs)("div", {
        className: fy()("LabeledInput", {
          [hy]: hy,
          DisabledLabelInput: By
        }),
        children: [cb && (0, oy.jsx)(Zy.f, {
          tooltipInner: (0, oy.jsx)("div", {
            className: "LabeledInputTooltip",
            children: ey(cb)
          }),
          children: qb
        }), !cb && qb, bb]
      })
    }

    function Ky(yb) {
      let {
        checked: bb,
        setChecked: Wy
      } = yb;
      return (0, oy.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: yb => {
          Wy(!bb)
        },
        children: (0, oy.jsx)(cb.c, {
          checked: bb,
          onChange: yb => {
            Wy(yb.target.checked)
          },
          disabled: !1
        })
      })
    }

    function ey(yb) {
      let {
        checked: bb,
        setChecked: Wy,
        disabled: Uy
      } = yb;
      return (0, oy.jsx)("div", {
        className: fy()("SwitchContainer", {
          SwitchContainerDisabled: Uy
        }),
        onClick: () => {
          Uy || Wy(!bb)
        },
        children: (0, oy.jsx)(cb.c, {
          className: "SwitchCheckbox",
          checked: bb,
          onChange: yb => {
            Wy(yb.target.checked)
          },
          disabled: !!Uy
        })
      })
    }
  },
  4159: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(1042),
      Zy = Wy(952);
    const cb = ["dayNight", "fallDamage", "survivalGuns"],
      Py = [...cb, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function oy(yb) {
      let {
        callbacks: bb,
        disabled: Wy,
        advancedMode: Uy,
        hideWrapper: oy
      } = yb;
      const {
        t: Ky
      } = (0, fy.D)(), ey = (0, Zy.jsx)("div", {
        className: hy()("PluginsGrid", {
          SectionBody: !oy
        }),
        children: (Uy ? Py : cb).map((yb => (0, Zy.jsx)(By, {
          plugin: yb,
          callbacks: bb[yb],
          disabled: Wy
        }, yb)))
      });
      return oy ? ey : (0, Zy.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Zy.jsx)("div", {
          className: "SectionTitle",
          children: Ky("worldBuilder:pluginsSection")
        }), ey]
      })
    }

    function By(yb) {
      let {
        plugin: bb,
        callbacks: {
          isEnabled: Wy,
          dJ: Uy
        },
        disabled: cb
      } = yb;
      const {
        t: Py
      } = (0, fy.D)(), oy = Wy();
      return (0, Zy.jsxs)("div", {
        className: hy()("PluginCard", {
          PluginCardEnabled: oy,
          PluginCardDisabledForm: cb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": cb || void 0,
        onClick: () => {
          cb || Uy(!oy)
        },
        children: [(0, Zy.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Zy.jsx)("img", {
            src: `/textures/games/classic/customGames/${bb}.png`,
            alt: bb
          })
        }), (0, Zy.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Zy.jsx)("div", {
            className: "PluginCardTitle",
            children: Py(Ky[bb])
          }), (0, Zy.jsx)("div", {
            className: "PluginCardDescription",
            children: Py(ey[bb])
          })]
        }), (0, Zy.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Py(oy ? "general:on" : "general:off")
        })]
      })
    }
    const Ky = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      ey = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4139: (yb, bb, Wy) => {
    Wy.d(bb, {
      h: () => hb,
      c: () => Ub,
      g: () => Wb,
      k: () => fb
    });
    var Uy = Wy(55),
      hy = Wy(1207),
      fy = Wy(1273),
      Zy = Wy(1486),
      cb = Wy(1042),
      Py = Wy(1194),
      oy = Wy(1217),
      By = Wy(910),
      Ky = Wy(1080),
      ey = Wy(898),
      qb = Wy.n(ey),
      sy = Wy(248),
      Sy = Wy(3838),
      Ey = Wy(1102),
      ly = Wy(4148),
      mb = Wy(2459),
      Cy = Wy(4159),
      Ty = Wy(952);

    function Vy(yb) {
      let {
        icon: bb,
        title: Wy,
        disabled: Uy,
        children: hy
      } = yb;
      return (0, Ty.jsxs)("div", {
        className: qb()("ManageCard", {
          ManageCardDisabled: Uy
        }),
        children: [(0, Ty.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Ty.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Ty.jsx)(By.e, {
              name: bb
            })
          }), (0, Ty.jsx)("div", {
            children: (0, Ty.jsx)("h2", {
              className: "ManageCardTitle",
              children: Wy
            })
          })]
        }), (0, Ty.jsxs)("div", {
          className: "ManageCardBody",
          children: [hy, Uy && (0, Ty.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Jy(yb) {
      let {
        label: bb,
        caption: Wy,
        children: Uy
      } = yb;
      return (0, Ty.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Ty.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: bb
        }), Uy, Wy && (0, Ty.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Wy
        })]
      })
    }

    function gb(yb) {
      let {
        label: bb,
        caption: Wy,
        disabled: Uy,
        children: hy
      } = yb;
      return (0, Ty.jsxs)("div", {
        className: qb()("ManageField", {
          ManageFieldDisabled: Uy
        }),
        children: [(0, Ty.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Ty.jsx)("div", {
            className: "ManageFieldLabel",
            children: bb
          }), (0, Ty.jsx)("div", {
            className: "ManageFieldCaption",
            children: Wy
          })]
        }), (0, Ty.jsx)("div", {
          className: "ManageFieldControl",
          children: hy
        })]
      })
    }

    function Gy(yb) {
      var bb, Wy;
      let {
        schematicData: Uy,
        updateSchematicData: hy,
        publishFormEnabled: fy,
        formEnabled: Zy
      } = yb;
      const {
        t: Py
      } = (0, cb.D)(), oy = !fy, By = {
        tpRequests: {
          isEnabled: () => !Uy.disableTpRequests,
          dJ: yb => hy("disableTpRequests", !yb)
        },
        spawnProtection: {
          isEnabled: () => !Uy.disableSpawnProtection,
          dJ: yb => hy("disableSpawnProtection", !yb)
        },
        spawnReset: {
          isEnabled: () => !!Uy.enableSpawnReset,
          dJ: yb => hy("enableSpawnReset", yb)
        },
        smpMarketplace: {
          isEnabled: () => !!Uy.enableSmpMarketplace,
          dJ: yb => hy("enableSmpMarketplace", yb)
        },
        survivalGuns: {
          isEnabled: () => !!Uy.enableSurvivalGuns,
          dJ: yb => hy("enableSurvivalGuns", yb)
        },
        fallDamage: {
          isEnabled: () => !Uy.disableFallDamage,
          dJ: yb => hy("disableFallDamage", !yb)
        },
        dayNight: {
          isEnabled: () => !!Uy.enableDayNight,
          dJ: yb => hy("enableDayNight", yb)
        }
      };
      return (0, Ty.jsxs)(Ty.Fragment, {
        children: [!1 === Uy.schematicContainsSpawnBlock && (0, Ty.jsx)("div", {
          className: "ManageWarningBanner",
          children: Py("worldBuilder:mustContainSpawnBlock")
        }), (0, Ty.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Ty.jsxs)(Vy, {
            icon: "globe",
            title: Py("worldBuilder:worldRulesSection"),
            disabled: !Zy,
            children: [(0, Ty.jsx)(gb, {
              label: Py("classic:defaultGamemode"),
              caption: Py("classic:defaultGamemodeDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(mb.c, {
                controlClassName: "ManageDropdown",
                options: Sy.y.map((yb => ({
                  value: yb,
                  label: sy.q[yb]
                }))),
                value: Uy.defaultGamemode,
                onChange: yb => hy("defaultGamemode", yb.value)
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:voidDeathHeight"),
              caption: Py("classic:voidDeathHeightDescription"),
              disabled: oy,
              children: (0, Ty.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Ty.jsx)("input", {
                  type: "number",
                  max: Ey.K,
                  value: null !== (bb = Uy.voidDeathHeight) && void 0 !== bb ? bb : "",
                  onChange: yb => {
                    const bb = parseInt(yb.target.value);
                    hy("voidDeathHeight", bb)
                  }
                }), (0, Ty.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Py("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:worldBorder"),
              caption: Py("classic:worldBorderDescription"),
              disabled: oy,
              children: (0, Ty.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Ty.jsx)("input", {
                  type: "number",
                  min: Ey.T,
                  max: Ey.O,
                  placeholder: Py("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Wy = Uy.worldBorder) && void 0 !== Wy ? Wy : "",
                  onChange: yb => {
                    const bb = parseInt(yb.target.value);
                    hy("worldBorder", isNaN(bb) ? null : bb)
                  }
                }), (0, Ty.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Py("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:disableMobs"),
              caption: Py("classic:disableMobsDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(ly.m, {
                checked: Uy.disableMobs,
                setChecked: yb => hy("disableMobs", yb),
                disabled: oy
              })
            })]
          }), (0, Ty.jsxs)(Vy, {
            icon: "user-group",
            title: Py("worldBuilder:playerAndLobbySection"),
            disabled: !Zy,
            children: [(0, Ty.jsx)(gb, {
              label: Py("classic:disableKeepInventory"),
              caption: Py("classic:disableKeepInventoryDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(ly.m, {
                checked: Uy.disableKeepInventory,
                setChecked: yb => hy("disableKeepInventory", yb),
                disabled: oy
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:persistInventory"),
              caption: Py("classic:persistInventoryDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(mb.c, {
                controlClassName: "ManageDropdown",
                options: Sy.j.map((yb => ({
                  value: yb,
                  label: sy.j[yb]
                }))),
                value: Uy.persistInventory,
                onChange: yb => hy("persistInventory", yb.value)
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:persistWorld"),
              caption: Py("classic:persistWorldDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(ly.m, {
                checked: Uy.persistWorld,
                setChecked: yb => hy("persistWorld", yb),
                disabled: oy
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:disableLobbySpawn"),
              caption: Py("classic:disableLobbySpawnDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(ly.m, {
                checked: Uy.disableLobbySpawn,
                setChecked: yb => hy("disableLobbySpawn", yb),
                disabled: oy
              })
            }), (0, Ty.jsx)(gb, {
              label: Py("classic:hideLobbyCode"),
              caption: Py("classic:hideLobbyCodeDescription"),
              disabled: oy,
              children: (0, Ty.jsx)(ly.m, {
                checked: Uy.hideLobbyCode,
                setChecked: yb => hy("hideLobbyCode", yb),
                disabled: oy
              })
            })]
          })]
        }), (0, Ty.jsx)(Vy, {
          icon: "layer-group",
          title: Py("worldBuilder:pluginsSection"),
          disabled: !Zy,
          children: (0, Ty.jsx)(Cy.e, {
            callbacks: By,
            disabled: oy,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Oy = Wy(4162),
      Ry = Wy(3630),
      vb = Wy(1339),
      ib = Wy(2793),
      My = Wy(980),
      Yy = Wy(4111),
      Xy = Wy(4168),
      ny = Wy(1278);
    const uy = 50,
      rb = .3;
    async function Hy(yb) {
      const bb = await
      function(yb) {
        return new Promise(((bb, Wy) => {
          const Uy = new FileReader;
          Uy.onload = () => bb(Uy.result), Uy.onerror = Wy, Uy.readAsDataURL(yb)
        }))
      }(yb), Wy = await
      function(yb) {
        return new Promise(((bb, Wy) => {
          const Uy = new Image;
          Uy.onload = () => bb(Uy), Uy.onerror = () => Wy(new Error("Failed to load image")), Uy.src = yb
        }))
      }(bb);
      if (Wy.naturalHeight > Wy.naturalWidth) throw new ab;
      const Uy = 1024 * uy,
        {
          dataUrl: hy,
          finalQuality: fy
        } = function(yb, bb) {
          const Wy = document.createElement("canvas");
          Wy.width = yb.naturalWidth, Wy.height = yb.naturalHeight, Wy.getContext("2d").drawImage(yb, 0, 0);
          let Uy = .92,
            hy = Wy.toDataURL("image/jpeg", Uy);
          for (; .75 * hy.length > bb && Uy > .05;) Uy -= .05, hy = Wy.toDataURL("image/jpeg", Uy);
          return {
            dataUrl: hy,
            finalQuality: Uy
          }
        }(Wy, Uy);
      if (Math.ceil(.75 * hy.length) > Uy) throw new Fy;
      return {
        base64Jpg: hy,
        heavilyCompressed: fy < rb
      }
    }
    class ab extends Error {}
    class Fy extends Error {}
    var py = function(yb) {
      return yb[yb.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", yb[yb.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", yb
    }(py || {});

    function Ly(yb) {
      var bb;
      let {
        schematicId: Wy,
        hasReadUploadPolicy: hy,
        onPolicyValidationError: Py,
        onThumbnailReady: oy
      } = yb;
      const {
        t: ey
      } = (0, cb.D)(), [sy, Sy] = (0, Uy.useState)(null), [Ey, ly] = (0, Uy.useState)(""), [mb, Cy] = (0, Uy.useState)(""), [Vy, Jy] = (0, Uy.useState)(!0), [gb, Gy] = (0, Uy.useState)(!1), Oy = (0, Uy.useRef)(!1), [Ry, vb] = (0, Uy.useState)(null), [ib, My] = (0, Uy.useState)(!1), [Yy, ny] = (0, Uy.useState)(!1), uy = (0, Uy.useRef)(0), {
        getRootProps: rb,
        getInputProps: py,
        isDragActive: Ly
      } = (0, Xy.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async yb => {
          if (0 === yb.length) return;
          const bb = yb[0],
            Wy = ++uy.current;
          vb(null), My(!1), Sy(null), ly(bb.name);
          try {
            const yb = await Hy(bb);
            if (Wy !== uy.current) return;
            Sy(yb), My(yb.heavilyCompressed)
          } catch (Uy) {
            if (Wy !== uy.current) return;
            vb(ey(Uy instanceof ab ? "thumbnail:portraitImagesNotAllowed" : Uy instanceof Fy ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Qy = Ey.length <= 30 ? Ey : `${Ey.slice(0,27)}...`, jb = null !== (bb = null === sy || void 0 === sy ? void 0 : sy.base64Jpg) && void 0 !== bb ? bb : null, Dy = mb.trim(), tb = Dy.length >= Ky.m && Dy.length <= Ky.l, wy = Yy && !sy && !Ry, kb = Yy && !tb;
      return (0, Ty.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Ty.jsxs)("div", {
          ...rb({
            className: qb()("ThumbnailUploadDropzone", {
              ActiveDrag: Ly,
              ValidationError: wy
            })
          }),
          children: [(0, Ty.jsx)("input", {
            ...py()
          }), !Ly && jb ? (0, Ty.jsxs)(Ty.Fragment, {
            children: [(0, Ty.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Ty.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Ty.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Ty.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Ty.jsx)("img", {
                    src: jb,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Ty.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Ty.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Ty.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Ty.jsx)("img", {
                    src: jb,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Ty.jsxs)("div", {
              children: [(0, Ty.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Qy
              }), (0, Ty.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: ey("thumbnail:preview")
              })]
            })]
          }) : (0, Ty.jsxs)(Ty.Fragment, {
            children: [(0, Ty.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Ty.jsx)(By.e, {
                name: "image"
              })
            }), (0, Ty.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: ey("thumbnail:dragImageHere")
            })]
          })]
        }), wy && (0, Ty.jsx)("div", {
          className: "ThumbnailUploadError",
          children: ey("thumbnail:imageRequired")
        }), (0, Ty.jsx)(Zy.c, {
          className: qb()("ThumbnailUploadNameInput", {
            ValidationError: kb
          }),
          placeholderText: ey("thumbnail:thumbnailName"),
          defaultValue: mb,
          onValueChange: yb => {
            Cy(yb)
          },
          maxLength: Ky.l
        }), kb && (0, Ty.jsx)("div", {
          className: "ThumbnailUploadError",
          children: ey("thumbnail:nameRequired", {
            min: Ky.m,
            max: Ky.l
          })
        }), (0, Ty.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Ty.jsx)("input", {
            type: "checkbox",
            checked: Vy,
            onChange: yb => {
              Jy(yb.target.checked)
            }
          }), ey("thumbnail:setAsThumbnailOnceApproved")]
        }), ib && (0, Ty.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: ey("thumbnail:heavyCompressionWarning")
        }), Ry && (0, Ty.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Ry
        }), (0, Ty.jsx)(fy.i, {
          disabled: gb,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (ny(!0), !Oy.current && sy && tb && hy) {
              Oy.current = !0, Gy(!0), vb(null);
              try {
                await oy(sy.base64Jpg, Dy, Vy ? Wy : null)
              } catch (yb) {
                vb(yb.errorMessageForUser ? ey(yb.errorMessageForUser, yb.errorMessageTranslationParams) : ey("thumbnail:failedToUploadImage"))
              } finally {
                Oy.current = !1, Gy(!1)
              }
            } else hy || Py()
          },
          children: ey(gb ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Qy = 2e3;

    function jb(yb) {
      let {
        schematicId: bb,
        ownedThumbnailCount: Wy,
        onClose: hy,
        onThumbnailReady: fy
      } = yb;
      const {
        t: Zy
      } = (0, cb.D)(), {
        userContext: Py
      } = (0, My.c)(), [oy, ey] = (0, Uy.useState)(!1), [sy, Sy] = (0, Uy.useState)(!1), [Ey, ly] = (0, Uy.useState)(!1), mb = (0, Uy.useRef)();
      (0, Uy.useEffect)((() => () => {
        clearTimeout(mb.current)
      }), []);
      const Cy = function(yb, bb) {
        const Wy = [];
        return yb.isLoggedIn() || Wy.push(py.NOT_LOGGED_IN), bb >= Ky.U && Wy.push(py.THUMBNAIL_LIMIT_REACHED), Wy
      }(Py, Wy);
      if (Cy.length > 0) {
        const yb = {
          [py.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [py.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Ky.U
            }
          }
        };
        return (0, Ty.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Ty.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Zy("thumbnail:cannotUploadThumbnail")
          }), Cy.map(((bb, Wy) => {
            const Uy = yb[bb];
            return (0, Ty.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Ty.jsx)(By.e, {
                name: "triangle-exclamation"
              }), (0, Ty.jsx)("span", {
                children: Zy(Uy.key, Uy.params)
              })]
            }, Wy)
          }))]
        })
      }
      return (0, Ty.jsxs)("div", {
        className: qb()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: oy
        }),
        children: [oy && (0, Ty.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Ty.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Ty.jsx)(By.e, {
              name: "check"
            }), (0, Ty.jsx)(ny.d, {})]
          }), (0, Ty.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Zy("thumbnail:thumbnailUploaded")
          })]
        }), (0, Ty.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Zy("thumbnail:uploadThumbnail")
        }), (0, Ty.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Ty.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Ty.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Zy("thumbnail:chooseImage", {
                maxSizeKb: uy
              })
            }), (0, Ty.jsx)(Ly, {
              schematicId: bb,
              hasReadUploadPolicy: sy,
              onPolicyValidationError: () => {
                ly(!0)
              },
              onThumbnailReady: async (yb, bb, Wy) => {
                await fy(yb, bb, Wy), ey(!0), mb.current = setTimeout(hy, Qy)
              }
            })]
          }), (0, Ty.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Ty.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Zy("thumbnail:uploadPolicy")
            }), (0, Ty.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "check"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "check"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyInGameAssets")
                })]
              }), (0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "check"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyLimitText")
                })]
              }), (0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "x"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyCopyrightContent")
                })]
              }), (0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "x"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "x"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyBloxdTags")
                })]
              }), (0, Ty.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Ty.jsx)(By.e, {
                  name: "x"
                }), (0, Ty.jsx)("span", {
                  children: Zy("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Ty.jsxs)("label", {
              className: qb()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Ey && !sy
              }),
              children: [(0, Ty.jsx)("input", {
                type: "checkbox",
                checked: sy,
                onChange: yb => {
                  Sy(yb.target.checked)
                }
              }), Zy("thumbnail:agreeToUploadPolicy")]
            }), Ey && !sy && (0, Ty.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Zy("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Dy = Wy(1052);
    const tb = {
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

    function wy(yb) {
      var bb, Wy;
      let {
        schematicData: Zy,
        updateSchematicData: oy,
        publishFormEnabled: Ky,
        onClose: ey
      } = yb;
      const {
        t: sy
      } = (0, cb.D)(), {
        userContext: Sy,
        isUserContextUpdating: Ey
      } = (0, My.c)(), ly = (0, ib.d)(), [mb, Cy] = (0, Uy.useState)([]), [Vy, Jy] = (0, Uy.useState)([]), [gb, Gy] = (0, Uy.useState)(!0), [Oy, Ry] = (0, Uy.useState)(null !== (bb = Zy.customThumbnailId) && void 0 !== bb ? bb : null), [Xy, ny] = (0, Uy.useState)(null), uy = (0, Uy.useRef)(null !== (Wy = Zy.customThumbnailId) && void 0 !== Wy ? Wy : null), rb = (0, Uy.useRef)(0), Hy = (0, Uy.useRef)(null), ab = (0, Uy.useRef)(null), Fy = (0, Uy.useRef)(null), py = (0, Uy.useRef)(!1);

      function Ly(yb, bb) {
        Fy.current && (clearTimeout(Fy.current), Fy.current = null), ny(yb), null !== yb && bb && (Fy.current = setTimeout((() => {
          ny(null), Fy.current = null
        }), 5e3))
      }(0, Uy.useEffect)((() => () => {
        clearTimeout(ab.current), clearTimeout(Fy.current)
      }), []);
      const Qy = (0, Uy.useCallback)((() => {
        Gy(!0), vb.c.getOwnedThumbnails(Sy).then((yb => {
          const bb = [],
            Wy = [];
          for (const Uy of yb.thumbnails) Uy.rejectionPolicyId ? bb.push(Uy) : Wy.push(Uy);
          bb.sort(((yb, bb) => yb.lastUpdatedAt - bb.lastUpdatedAt)), Wy.sort(((yb, bb) => {
            const Wy = yb.approved ? 1 : 0,
              Uy = (bb.approved ? 1 : 0) - Wy;
            return 0 !== Uy ? Uy : bb.lastUpdatedAt - yb.lastUpdatedAt
          })), Jy(bb), Cy(Wy)
        })).catch((yb => {
          console.error("Failed to fetch thumbnails:", yb)
        })).finally((() => {
          Gy(!1)
        }))
      }), [Sy]);
      async function tb(yb, bb, Wy) {
        return vb.c.uploadSchematicThumbnail(Sy, yb, bb, Wy).then((() => {
          Ly({
            text: sy("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Qy()
        }))
      }

      function wy() {
        rb.current = Date.now(), ab.current = null;
        const yb = Hy.current;
        Hy.current = null, Ly({
          text: sy("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), vb.c.setSchematicThumbnail(Sy, Zy.schematicId, yb).then((() => {
          ly.current && (Ly({
            text: sy("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), uy.current = yb, oy("customThumbnailId", yb), oy("customThumbnailBlurhash", void 0), oy("customThumbnailVariants", void 0))
        })).catch((yb => {
          ly.current && (Ly({
            text: yb.errorMessageForUser ? sy(yb.errorMessageForUser, yb.errorMessageTranslationParams) : sy("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Ry(uy.current))
        }))
      }

      function zb(yb) {
        Ry(yb), Hy.current = yb;
        const bb = Date.now() - rb.current;
        bb >= 1e3 ? wy() : (Ly({
          text: sy("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ab.current || (ab.current = setTimeout((() => {
          wy()
        }), 1e3 - bb)))
      }
      return (0, Uy.useEffect)((() => {
        !1 === Ey && Qy()
      }), [Ey, Qy]), Vy.length > 0 ? (0, Ty.jsx)(kb, {
        rejectedThumbnails: Vy,
        userContext: Sy,
        isMountedRef: ly,
        onAcknowledged: Qy
      }) : (0, Ty.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Ty.jsxs)("div", {
          className: "SectionTitle",
          children: [sy("thumbnail:gameThumbnail"), Xy && (0, Ty.jsx)("span", {
            className: qb()("ThumbnailActionMsg", `ThumbnailActionMsg--${Xy.type}`),
            children: Xy.text
          })]
        }), (0, Ty.jsx)("div", {
          className: "SectionBody",
          children: (0, Ty.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Ty.jsxs)("div", {
              className: qb()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Oy
              }),
              onClick: () => zb(null),
              children: [(0, Ty.jsx)(Yy.d, {
                game: {
                  schematicId: Zy.schematicId,
                  imageBlurhash: Zy.imageBlurhash
                }
              }), (0, Ty.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: sy("general:default")
              })]
            }), gb && (0, Ty.jsx)(Py.e, {}), mb.map(((yb, bb) => (0, Ty.jsxs)("div", {
              className: qb()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Oy === yb.id,
                ThumbnailGridItemPending: !yb.approved
              }),
              onClick: () => {
                yb.approved && zb(yb.id)
              },
              children: [yb.approved && (0, Ty.jsx)("img", {
                src: `${Dy.clientSideServerUrls.s3Url}/customThumbnails/${yb.id}.jpg`,
                alt: "Thumbnail"
              }), yb.approved && (0, Ty.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: yb.name
              }), yb.id && (0, Ty.jsx)(fy.C, {
                className: "ThumbnailDeleteButton",
                onClick: bb => async function(yb, bb, Wy) {
                  yb.stopPropagation();
                  const Uy = await hy.NotificationProvider.showCustomPopup({
                      body: yb => (0, Ty.jsx)(Ny, {
                        thumbnailId: bb,
                        thumbnailName: Wy,
                        onClose: bb => {
                          bb && (py.current = !0), yb()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: ey
                    }).getResult(),
                    fy = py.current;
                  py.current = !1, fy && !0 === Uy && (ly.current && Ly({
                    text: sy("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), vb.c.deleteSchematicThumbnail(Sy, bb).then((() => {
                    ly.current && (Ly({
                      text: sy("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), uy.current === bb && zb(null), Qy())
                  })).catch((yb => {
                    ly.current && Ly({
                      text: yb.errorMessageForUser ? sy(yb.errorMessageForUser, yb.errorMessageTranslationParams) : sy("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(bb, yb.id, yb.name),
                children: (0, Ty.jsx)(By.e, {
                  name: "trash-can"
                })
              }), !yb.approved && (0, Ty.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Ty.jsx)(By.e, {
                  name: "hourglass-clock"
                })
              }), !yb.approved && (0, Ty.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [yb.name, (0, Ty.jsx)("br", {}), sy("thumbnail:pendingApproval")]
              })]
            }, bb))), (0, Ty.jsxs)("div", {
              className: qb()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Ky
              }),
              onClick: () => {
                Ky && function(yb) {
                  let {
                    schematicId: bb,
                    ownedThumbnailCount: Wy,
                    onThumbnailReady: Uy,
                    onClose: fy
                  } = yb;
                  hy.NotificationProvider.showCustomPopup({
                    body: yb => (0, Ty.jsx)(jb, {
                      schematicId: bb,
                      ownedThumbnailCount: Wy,
                      onClose: yb,
                      onThumbnailReady: Uy
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: fy,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Zy.schematicId,
                  ownedThumbnailCount: mb.length,
                  onThumbnailReady: tb,
                  onClose: ey
                })
              },
              children: [(0, Ty.jsx)(By.e, {
                name: "plus"
              }), (0, Ty.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: sy("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function kb(yb) {
      let {
        rejectedThumbnails: bb,
        userContext: Wy,
        isMountedRef: hy,
        onAcknowledged: Zy
      } = yb;
      const {
        t: oy
      } = (0, cb.D)(), [Ky, ey] = (0, Uy.useState)(!1), [qb, sy] = (0, Uy.useState)(!1), Sy = function(yb) {
        const bb = new Map;
        for (const Wy of yb) {
          const yb = Wy.rejectionPolicyId,
            Uy = bb.get(yb);
          Uy ? Uy.push(Wy) : bb.set(yb, [Wy])
        }
        return bb
      }(bb);
      return (0, Ty.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Ty.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Ty.jsx)(By.e, {
            name: "triangle-exclamation"
          }), " ", oy("thumbnail:thumbnailsRejected"), " ", (0, Ty.jsx)(By.e, {
            name: "triangle-exclamation"
          })]
        }), (0, Ty.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: oy("thumbnail:thumbnailsRejectedDescription")
        }), (0, Ty.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Sy.entries()].map((yb => {
            let [bb, Wy] = yb;
            const Uy = tb[bb];
            return (0, Ty.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Ty.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: Wy.map((yb => (0, Ty.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Ty.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Ty.jsx)(By.e, {
                      name: "image-slash"
                    })
                  }), (0, Ty.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Ty.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: yb.name
                    })
                  })]
                }, yb.id)))
              }), (0, Ty.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [oy("thumbnail:rejectionReason"), " ", Uy ? oy(Uy.reason) : bb]
              }), Uy && (0, Ty.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Uy.tips.map((yb => (0, Ty.jsx)("li", {
                  children: oy(yb)
                }, yb)))
              })]
            }, bb)
          }))
        }), (0, Ty.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Ty.jsx)(Ry.c, {
            checked: Ky,
            onChange: yb => ey(yb.target.checked),
            disabled: qb
          }), (0, Ty.jsx)("span", {
            children: oy("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Ty.jsx)(fy.i, {
          onClick: async function() {
            sy(!0);
            const yb = await Promise.allSettled(bb.map((yb => vb.c.deleteSchematicThumbnail(Wy, yb.id))));
            if (!hy.current) return;
            const Uy = yb.filter((yb => "rejected" === yb.status));
            Uy.length > 0 && console.error("Some rejected thumbnails failed to delete:", Uy), Zy()
          },
          disabled: !Ky || qb,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: qb ? (0, Ty.jsx)(Py.e, {}) : oy("general:accept")
        })]
      })
    }

    function Ny(yb) {
      let {
        thumbnailId: bb,
        thumbnailName: Wy,
        onClose: Uy
      } = yb;
      const {
        t: hy
      } = (0, cb.D)();
      return (0, Ty.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Ty.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: hy("thumbnail:deleteThumbnail")
        }), (0, Ty.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Ty.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Dy.clientSideServerUrls.s3Url}/customThumbnails/${bb}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Ty.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Wy
          })]
        }), (0, Ty.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: hy("thumbnail:deleteThumbnailConfirmation")
        }), (0, Ty.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Ty.jsxs)(fy.C, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Uy(!0),
            children: [(0, Ty.jsx)(By.e, {
              name: "trash-can"
            }), " ", hy("general:delete")]
          }), (0, Ty.jsx)(fy.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Uy(!1),
            children: hy("general:cancel")
          })]
        })]
      })
    }
    var zb = Wy(2481),
      Iy = Wy(4191),
      xb = Wy(4195),
      Ay = Wy(4237);

    function dy(yb) {
      let {
        schematicData: bb,
        setTexturePack: Wy,
        initializeTexturePack: hy,
        publishFormEnabled: fy
      } = yb;
      const {
        t: Zy
      } = (0, cb.D)(), [Py, oy] = (0, Uy.useState)(null), [By, Ky] = (0, Uy.useState)(null), [ey, sy] = (0, Uy.useState)(!1), Sy = (0, ib.d)(), Ey = fy && !ey, ly = bb.customTexturePackKey;

      function mb(yb) {
        var bb;
        oy(yb.metaData.id), Ky(null !== (bb = yb.metaData.fromFolderName) && void 0 !== bb ? bb : null), (yb.metaData.id !== zb.m.CUSTOM || yb.metaData.fromFolderName) && Wy(yb)
      }
      return (0, Uy.useEffect)((() => {
        ly && (sy(!0), (0, Iy.c)(ly).then((yb => {
          var bb;
          Sy.current && (yb ? (oy(yb.metaData.id), Ky(null !== (bb = yb.metaData.fromFolderName) && void 0 !== bb ? bb : null), hy(yb)) : console.error(`No texture pack at ${ly}`))
        })).catch((yb => {
          console.error("Error fetching texture pack: ", yb)
        })).finally((() => {
          sy(!1)
        })))
      }), [ly, hy, Sy]), (0, Ty.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Ty.jsx)("div", {
          className: "SectionTitle",
          children: Zy("customTexturePack:customTexturePack")
        }), (0, Ty.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Ty.jsx)("div", {
            className: qb()("TexturePack", {
              Selected: null === Py && !ey,
              Disabled: !Ey
            }),
            onClick: () => {
              Ey && (oy(null), Wy(null), Ky(null))
            },
            children: (0, Ty.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(zb.m).map((yb => (0, Ty.jsx)(xb.f, {
            id: yb,
            isSelected: yb === Py,
            setSelected: mb,
            disabled: !Ey
          }, yb)))]
        }), Py === zb.m.CUSTOM && (0, Ty.jsx)(Ay.d, {
          folderName: By,
          onTexturePackUpdated: mb,
          disabled: !Ey,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var yW = Wy(4252);

    function bW(yb) {
      var bb;
      let {
        gameCategory: Wy,
        setGameCategory: Uy,
        disabled: hy
      } = yb;
      const Zy = null !== (bb = (0, sy.mb)(Wy)) && void 0 !== bb ? bb : "other";
      return (0, Ty.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Ty.jsx)(ly.i, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: hy,
          children: (0, Ty.jsx)(mb.c, {
            options: sy.cb.map((yb => ({
              value: yb,
              label: sy.ab[yb]
            }))),
            value: Zy,
            onChange: yb => {
              yb.value !== Zy && Uy(sy.V[yb.value][0])
            }
          })
        }), (0, Ty.jsx)(ly.i, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: hy,
          children: (0, Ty.jsx)("div", {
            className: "GameCategoryOptions",
            children: sy.V[Zy].map((yb => (0, Ty.jsx)(fy.M, {
              active: yb === Wy,
              onClick: () => {
                Uy(yb)
              },
              children: (0, sy.ib)(yb)
            }, yb)))
          })
        })]
      })
    }

    function Wb(yb) {
      let {
        editor: bb,
        onClose: Wy
      } = yb;
      const {
        t: Uy
      } = (0, cb.D)(), {
        schematicData: hy,
        updateSchematicData: fy,
        publishFormEnabled: Py,
        formEnabled: oy
      } = bb;
      return (0, Ty.jsxs)(Ty.Fragment, {
        children: [(0, Ty.jsxs)(Vy, {
          icon: "pen-to-square",
          title: Uy("worldBuilder:basicsSection"),
          disabled: !oy,
          children: [(0, Ty.jsx)(Jy, {
            label: Uy("general:name"),
            caption: Uy("worldBuilder:schematicNameTagsHint"),
            children: (0, Ty.jsx)(Zy.c, {
              className: "SchematicPageName",
              defaultValue: hy.name,
              onValueChange: yb => fy("name", yb),
              placeholderText: Uy("worldBuilder:schematicNamePlaceholder"),
              maxLength: Ky.pb
            })
          }), (0, Ty.jsx)(Jy, {
            label: Uy("general:description"),
            children: (0, Ty.jsx)(Zy.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: hy.description,
              onValueChange: yb => fy("description", yb),
              placeholderText: Uy("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Ky.ob
            })
          }), (0, Ty.jsx)(bW, {
            gameCategory: hy.gameCategory,
            setGameCategory: yb => fy("gameCategory", yb),
            disabled: !Py
          }), !0 === hy.gamePublished && (0, Ty.jsx)(wy, {
            schematicData: hy,
            updateSchematicData: fy,
            publishFormEnabled: Py,
            onClose: function() {
              null === Wy || void 0 === Wy || Wy()
            }
          })]
        }), (0, Ty.jsx)(Gy, {
          schematicData: hy,
          updateSchematicData: fy,
          publishFormEnabled: Py,
          formEnabled: oy
        }), !0 === hy.gamePublished && (0, Ty.jsx)(Vy, {
          icon: "palette",
          title: Uy("worldBuilder:texturePackSection"),
          disabled: !oy,
          children: (0, Ty.jsx)(dy, {
            schematicData: hy,
            setTexturePack: bb.setTexturePack,
            initializeTexturePack: bb.initializeTexturePack,
            publishFormEnabled: Py
          })
        })]
      })
    }

    function Ub(yb) {
      let {
        editor: bb
      } = yb;
      const {
        t: Wy
      } = (0, cb.D)(), {
        schematicData: Uy,
        formEnabled: hy,
        hasUnsavedChanges: Zy
      } = bb, Ky = hy && Zy;
      return (0, Ty.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [hy && Zy && (0, Ty.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Ty.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Wy("worldBuilder:unsavedChanges")]
        }), (0, Ty.jsx)(oy.f, {
          tooltipInner: (0, Ty.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Wy(hy && !Zy ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Ty.jsxs)(fy.f, {
            className: "SaveChangesButton",
            onClick: () => bb.saveSchematic(Uy.gamePublished),
            disabled: !Ky,
            children: [(0, Ty.jsxs)("span", {
              className: hy ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Ty.jsx)(By.e, {
                name: "wrench"
              }), " ", Wy("worldBuilder:saveChanges")]
            }), !hy && (0, Ty.jsx)(Py.e, {})]
          })
        })]
      })
    }

    function hb(yb) {
      let {
        schematic: bb,
        onSchematicUpdate: Wy,
        onClose: hy,
        inSourceWorld: Zy
      } = yb;
      const {
        t: Py
      } = (0, cb.D)();

      function oy() {
        null === hy || void 0 === hy || hy()
      }
      const By = (0, yW.e)(bb, {
        onNavigateAway: oy,
        inSourceWorld: Zy
      });
      return (0, Uy.useEffect)((() => {
        null === Wy || void 0 === Wy || Wy(By.schematicData)
      }), [By.schematicData, Wy]), (0, Ty.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Ty.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Ty.jsx)(fy.d, {
            onClick: oy,
            children: Py("worldBuilder:back")
          }), (0, Ty.jsx)(Vy, {
            icon: "rocket-launch",
            title: Py("worldBuilder:actionsSection"),
            disabled: !By.formEnabled,
            children: (0, Ty.jsx)(Oy.c, {
              editor: By
            })
          }), (0, Ty.jsx)(Wb, {
            editor: By,
            onClose: oy
          })]
        }), (0, Ty.jsx)(Ub, {
          editor: By
        })]
      })
    }

    function fb(yb) {
      let {
        schematic: bb,
        onSchematicUpdate: Wy,
        onClose: Uy,
        inSourceWorld: fy
      } = yb;
      hy.NotificationProvider.showCustomPopup({
        body: yb => (0, Ty.jsx)(hb, {
          schematic: bb,
          onSchematicUpdate: Wy,
          onClose: yb,
          inSourceWorld: fy
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Uy,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4162: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ky
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(1042),
      Zy = Wy(910),
      cb = Wy(1273),
      Py = Wy(1217),
      oy = Wy(1194),
      By = Wy(952);

    function Ky(yb) {
      let {
        editor: bb,
        className: Wy
      } = yb;
      const {
        t: Uy
      } = (0, fy.D)(), {
        schematicData: Ky,
        formEnabled: ey,
        publishFormEnabled: qb
      } = bb, sy = !ey || !qb;
      return (0, By.jsxs)("div", {
        className: hy()("PublishButtonContainer", Wy),
        children: [bb.canEditSourceWorld && (0, By.jsxs)(cb.f, {
          onClick: bb.editSourceWorld,
          disabled: sy,
          children: [(0, By.jsx)(Zy.e, {
            name: "edit"
          }), " ", Uy("worldBuilder:editSourceWorld")]
        }), !Ky.gamePublished && (0, By.jsx)(Py.f, {
          tooltipInner: (0, By.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Uy("worldBuilder:publishAsGameDescription")
          }),
          children: (0, By.jsxs)(cb.i, {
            onClick: () => bb.saveSchematic(!0),
            disabled: sy,
            children: [(0, By.jsx)(Zy.e, {
              name: "rocket-launch"
            }), " ", Uy("worldBuilder:publishAsGame"), " ", (0, By.jsx)(Zy.e, {
              name: "info-circle"
            })]
          })
        }), !0 === Ky.gamePublished && (0, By.jsxs)(By.Fragment, {
          children: [(0, By.jsx)(Py.f, {
            tooltipInner: (0, By.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Uy("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, By.jsxs)(cb.C, {
              onClick: bb.unpublishSchematic,
              disabled: sy,
              children: [(0, By.jsx)(Zy.e, {
                name: "rocket-launch"
              }), " ", Uy("worldBuilder:unpublishAsGame"), " ", (0, By.jsx)(Zy.e, {
                name: "info-circle"
              })]
            })
          }), (0, By.jsxs)(cb.f, {
            onClick: bb.playGame,
            disabled: sy,
            children: [(0, By.jsx)(Zy.e, {
              name: "joystick"
            }), " ", Uy("general:playGame")]
          })]
        }), !ey && (0, By.jsx)(oy.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4191: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(1052);
    async function hy(yb) {
      const bb = await fetch(`${Uy.clientSideServerUrls.s3Url}/${yb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === bb.status || 403 === bb.status) return null;
      if (!bb.ok) throw new Error(`Failed to download the texture pack (${bb.status})`);
      return await bb.json()
    }
  },
  4252: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ey
    });
    var Uy = Wy(55),
      hy = Wy(1185),
      fy = Wy(865),
      Zy = Wy(143),
      cb = Wy(1387),
      Py = Wy(19),
      oy = Wy(1572),
      By = Wy(1339),
      Ky = Wy(3788),
      ey = Wy(1207),
      qb = Wy(980),
      sy = Wy(1356);

    function Sy(yb, bb) {
      return {
        schematicId: yb.schematicId,
        name: yb.name,
        description: yb.description,
        gamePublished: bb,
        gameCategory: yb.gameCategory,
        defaultGamemode: yb.defaultGamemode,
        voidDeathHeight: yb.voidDeathHeight,
        disableKeepInventory: yb.disableKeepInventory,
        disableTpRequests: yb.disableTpRequests,
        disableLobbySpawn: yb.disableLobbySpawn,
        disableMobs: yb.disableMobs,
        disableSpawnProtection: yb.disableSpawnProtection,
        disableFallDamage: yb.disableFallDamage,
        worldBorder: yb.worldBorder,
        hideLobbyCode: yb.hideLobbyCode,
        enableSmpMarketplace: yb.enableSmpMarketplace,
        enableSurvivalGuns: yb.enableSurvivalGuns,
        enableSpawnReset: yb.enableSpawnReset,
        enableDayNight: yb.enableDayNight,
        persistWorld: yb.persistWorld,
        persistInventory: yb.persistInventory
      }
    }

    function Ey(yb) {
      let {
        onNavigateAway: bb,
        inSourceWorld: Wy = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Ey
      } = (0, qb.c)(), ly = (0, sy.useNavigatePreserveSearch)(), [mb, Cy] = (0, Uy.useState)({
        ...yb
      }), [Ty, Vy] = (0, Uy.useState)("Enter"), [Jy, gb] = (0, Uy.useState)(void 0), Gy = (0, Uy.useRef)(Sy(yb, yb.gamePublished)), Oy = (0, Uy.useRef)(void 0), Ry = "Enter" === Ty, vb = Ey.playerHasRank("developer") || Ey.playerHasRank("admin") || "Enter" === Ty && !1 !== mb.schematicContainsSpawnBlock, ib = void 0 !== Jy && Jy !== Oy.current || JSON.stringify(Sy(mb, mb.gamePublished)) !== JSON.stringify(Gy.current);

      function My(yb, bb) {
        Cy((Wy => ({
          ...Wy,
          [yb]: bb
        })))
      }
      const Yy = (0, Uy.useCallback)((yb => {
        Oy.current = yb, gb(yb)
      }), []);

      function Xy(yb) {
        Vy("Loading");
        const bb = Sy(mb, yb),
          Wy = Jy !== Oy.current ? Jy : void 0;
        By.c.updateSchematic(Ey, bb, Wy).then((Wy => {
          let {
            customTexturePackKey: Uy
          } = Wy;
          Vy("Success"), My("customTexturePackKey", Uy), Gy.current = bb, Oy.current = void 0, gb(void 0), setTimeout((() => {
            My("gamePublished", yb), Vy("Enter")
          }), 1e3)
        })).catch((yb => {
          var bb;
          (console.error("Failed to save schematic:", yb), Vy("Error"), yb instanceof Zy.c && yb.errorMessageForUser) && ey.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: yb.errorMessageForUser,
            textOpts: {
              subtitle: null !== (bb = yb.errorMessageTranslationParams) && void 0 !== bb ? bb : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Vy("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: mb,
        updateSchematicData: My,
        setTexturePack: gb,
        initializeTexturePack: Yy,
        updateState: Ty,
        formEnabled: Ry,
        publishFormEnabled: vb,
        hasUnsavedChanges: ib,
        canEditSourceWorld: !Wy,
        saveSchematic: Xy,
        unpublishSchematic: function() {
          ey.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((yb => {
            !0 === yb && Xy(!1)
          }))
        },
        editSourceWorld: function() {
          Vy("Loading"), Ky.c.getSourceWorld(mb.schematicId).then((yb => {
            oy.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Py.g)("other"), ly((0, hy.b)("classic", yb)), null === bb || void 0 === bb || bb()
          })).catch((yb => {
            console.error("Failed to get source world:", yb), Vy("Error"), setTimeout((() => {
              Vy("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          oy.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), ly((0, cb.t)((0, fy.A)(mb.schematicId), mb)), null === bb || void 0 === bb || bb()
        }
      }
    }
  },
  4152: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);