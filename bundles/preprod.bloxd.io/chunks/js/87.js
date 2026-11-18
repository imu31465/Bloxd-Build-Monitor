export const id = 87;
export const ids = [87, 176];
export const modules = {
  8339: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      EverythingMenu: () => vf
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(1042),
      cb = Wy(910),
      Py = Wy(1701),
      oy = Wy(965),
      By = Wy(952);

    function Ky(yb) {
      let {
        items: bb,
        onClick: Wy,
        selectedItemId: Uy,
        className: hy,
        padStartsOnTab: Ky = !0
      } = yb;
      const {
        t: ey
      } = (0, Zy.D)(), qb = (0, oy.f)(), sy = [];
      for (const fy of bb) {
        var Sy;
        const yb = sy[sy.length - 1];
        var Ey;
        if (yb && yb.title === (null !== (Sy = fy.section) && void 0 !== Sy ? Sy : null)) yb.items.push(fy);
        else sy.push({
          title: null !== (Ey = fy.section) && void 0 !== Ey ? Ey : null,
          items: [fy]
        })
      }
      return (0, By.jsx)("div", {
        className: fy()("MenuSideBarBody", hy),
        "data-pad-tabs": "2",
        children: sy.map(((yb, bb) => {
          var hy;
          return (0, By.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [yb.title && (0, By.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: ey(yb.title)
            }), yb.items.map((yb => {
              var bb;
              const hy = !!yb.iconElement || !!yb.faIcon;
              return (0, By.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Uy === yb.id ? "true" : void 0,
                "data-pad-default-focus": Ky && Uy === yb.id || void 0,
                className: fy()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Uy === yb.id
                }),
                onClick: () => {
                  Wy(yb.id)
                },
                children: [hy && (0, By.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (bb = yb.iconElement) && void 0 !== bb ? bb : (0, By.jsx)(cb.e, {
                    name: yb.faIcon
                  })
                }), (!qb || !hy) && (0, By.jsx)("div", {
                  children: ey(yb.title)
                }), yb.redDot && (0, By.jsx)(Py.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, yb.id)
            }))]
          }, null !== (hy = yb.title) && void 0 !== hy ? hy : bb)
        }))
      })
    }
    var ey = Wy(2332),
      qb = Wy(980),
      sy = Wy(2005),
      Sy = Wy(974),
      Ey = Wy(1273),
      ly = Wy(94),
      mb = Wy(1572),
      Cy = Wy(1873),
      Ty = Wy(1879),
      Vy = Wy(1486),
      Jy = Wy(1194),
      gb = Wy(4200),
      Gy = Wy(19),
      Oy = Wy(8345);

    function Ry(yb) {
      let {
        setApplySettingsCallback: bb
      } = yb;
      const {
        clientEscMenuOptions: Wy
      } = (0, Gy.h)(["clientEscMenuOptions"]), [hy, fy] = (0, Uy.useState)(!1), [Zy, cb] = (0, Uy.useState)(!1), [Py, oy] = (0, Uy.useState)(6400), [Ky, ey] = (0, Uy.useState)(3600), [qb, sy] = (0, Uy.useState)(!1), [Sy, ly] = (0, Uy.useState)(!1);

      function mb(yb) {
        const bb = "screenshot" === yb ? cb : fy;
        bb(!0);
        const Wy = qb ? "normals" : Sy ? "depth" : null;
        Oy.devTools.downloadScene(yb, {
          width: Py,
          height: Ky,
          colouring: Wy
        }).catch((yb => {
          console.error("Couldn't download the scene", yb)
        })).finally((() => {
          bb(!1)
        }))
      }
      return (0, By.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, By.jsx)(gb.c, {
          label: "Disable Ambient Occlusion",
          checked: Wy.disableAmbientOcclusion,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              disableAmbientOcclusion: yb
            }), bb((() => gb.g))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Oy.devTools.supports("ambientLight") && (0, By.jsx)(gb.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Wy.ambientLightIntensity,
          onChange: yb => {
            Oy.devTools.setAmbientLightIntensity(yb).then((() => {
              Gy.d.setClientEscMenuOptions({
                ambientLightIntensity: yb
              })
            })).catch((yb => {
              console.error("Couldn't set the ambient light", yb)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Oy.devTools.supports("weaponRaycasts") && (0, By.jsx)(gb.c, {
          label: "Show Weapon Raycasts",
          checked: Wy.showWeaponRaycasts,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              showWeaponRaycasts: yb
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Oy.devTools.supports("sceneDownload") && (0, By.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, By.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, By.jsx)(gb.c, {
              label: "Apply normal-based coloring",
              checked: qb,
              onClick: yb => {
                sy(yb), yb && ly(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, By.jsx)(gb.c, {
              label: "Apply depth-based coloring",
              checked: Sy,
              onClick: yb => {
                ly(yb), yb && sy(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, By.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, By.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, By.jsx)(Vy.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (yb, bb) => {
                  const Wy = parseInt(yb) || 6400;
                  oy(Wy)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Py.toString()
              }), (0, By.jsx)("span", {
                children: "X"
              }), (0, By.jsx)(Vy.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (yb, bb) => {
                  const Wy = parseInt(yb) || 3600;
                  ey(Wy)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Ky.toString()
              })]
            }), (0, By.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, By.jsxs)(Ey.f, {
                onClick: () => {
                  mb("screenshot")
                },
                disabled: Zy,
                children: [Zy && (0, By.jsx)(Jy.e, {}), "Download Screenshot"]
              }), (0, By.jsxs)(Ey.f, {
                onClick: () => {
                  mb("glb")
                },
                disabled: hy,
                children: [hy && (0, By.jsx)(Jy.e, {}), "Download GLB"]
              })]
            })]
          }), (0, By.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var vb = Wy(1109),
      ib = Wy(1207),
      My = Wy(139),
      Yy = Wy(987),
      Xy = Wy(1052),
      ny = Wy(1162),
      uy = Wy(2339),
      rb = Wy(1356),
      Hy = Wy(1130),
      ab = Wy(1093),
      Fy = Wy(2409),
      py = Wy(1683),
      Ly = Wy(1339),
      Qy = Wy(258),
      jb = Wy(1881),
      Dy = Wy(1893),
      tb = Wy(1217),
      wy = Wy(1066),
      kb = Wy(4093),
      Ny = Wy(1304),
      zb = Wy(2951),
      Iy = Wy(2162),
      xb = Wy(1859);

    function Ay(yb) {
      let {
        showing: bb
      } = yb;
      const {
        t: Wy
      } = (0, Zy.D)(), {
        data: Uy,
        failed: hy
      } = (0, Iy.c)(zb.d, bb);
      return 0 === (null === Uy || void 0 === Uy ? void 0 : Uy.length) || null === Uy && !hy ? null : (0, By.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, By.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Wy("paymentHistory:title")
        }), null === Uy && hy && (0, By.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Wy("paymentHistory:loadFailed")
        }), null !== Uy && (0, By.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Uy.map((yb => (0, By.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, By.jsx)(xb.d, {
              entry: yb
            }), (0, By.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, By.jsx)("div", {
                children: (0, xb.k)(Wy, yb)
              }), (0, By.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(yb.at).toLocaleDateString(), "number" === typeof yb.orderId && ` \xb7 ${Wy("paymentHistory:order",{orderId:yb.orderId})}`]
              })]
            })]
          }, (0, zb.b)(yb))))
        })]
      })
    }
    var dy = Wy(2886),
      yW = Wy(2902),
      bW = Wy(2896);

    function Wb(yb) {
      let {
        showing: bb
      } = yb;
      const {
        t: Wy
      } = (0, Zy.D)(), {
        data: Uy,
        failed: hy
      } = (0, Iy.c)(dy.c, bb), fy = null === Uy ? null : (0, dy.d)(Uy);
      return (0, By.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, By.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Wy("settingsMenu:blockedAndIgnoredPlayers")
        }), null === fy && !hy && (0, By.jsx)(Jy.e, {}), null === fy && hy && (0, By.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Wy("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, By.jsx)(Ey.f, {
            className: "SmallTextLight",
            onClick: () => {
              dy.c.refresh()
            },
            children: Wy("general:tryAgain")
          })]
        }), 0 === (null === fy || void 0 === fy ? void 0 : fy.length) && (0, By.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Wy("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== fy && fy.length > 0 && (0, By.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: fy.map((yb => {
            let {
              name: bb,
              exclusion: Uy
            } = yb;
            const hy = bW.g[Uy];
            return (0, By.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, By.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: bb
              }), (0, By.jsx)(Ey.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, yW.f)(hy, bb)
                },
                children: Wy(bW.j[hy].text)
              })]
            }, bb)
          }))
        })]
      })
    }
    const Ub = (0, Uy.memo)((function(yb) {
      var bb;
      let {
        showing: Wy,
        inGame: hy
      } = yb;
      const {
        t: Py,
        selectedLanguage: oy
      } = (0, Zy.D)(), {
        reactNativeFeatureFlags: Ky,
        hideSocialLocationFrom: sy
      } = (0, Gy.h)(["reactNativeFeatureFlags", "hideSocialLocationFrom"]), Sy = (0, ey.e)(), {
        userContext: mb,
        isUserContextUpdating: Cy
      } = (0, qb.c)(), [Ty, Oy] = (0, Uy.useState)(null !== (bb = mb.getPlayerName()) && void 0 !== bb ? bb : ""), [Ry, vb] = (0, Uy.useState)(null), {
        purchasing: ib,
        outcome: ny,
        purchase: zb
      } = (0, uy.c)("/super-rank-welcome"), [Iy, xb] = (0, Uy.useState)(!1), [dy, yW] = (0, Uy.useState)(!1), bW = (0, Uy.useRef)(null), Ub = (0, Uy.useRef)(null), fb = (0, py.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Zb = null === fb, cW = null !== fb && void 0 !== fb ? fb : [], [Pb, ob] = (0, Uy.useState)([]), [Bb, Kb] = (0, Uy.useState)(!1), eb = mb.playerHasRank("youtuber"), qW = (0, Uy.useCallback)((() => Ly.c.getPlayerProfile(mb, {
        lowerCaseName: mb.getPlayerName().toLowerCase()
      }).then((yb => {
        ob(yb.socialLinks)
      })).catch((yb => {
        console.error("Failed to refresh social links", yb)
      }))), [mb]);

      function sb(yb) {
        yb !== Ty && ((0, Hy.p)(yb) ? (yb = (0, Hy.r)(yb), vb("Only letters, numbers, and _")) : vb(null), bW.current && (bW.current.value = yb), Oy(yb))
      }
      return (0, Uy.useEffect)((() => (!0 === Wy ? (clearInterval(Ub.current), Ub.current = setInterval(Sy, 1e3)) : clearInterval(Ub.current), () => {
        clearInterval(Ub.current)
      })), [Wy, Sy]), (0, Uy.useEffect)((() => {
        var yb;
        Oy(null !== (yb = mb.getPlayerName()) && void 0 !== yb ? yb : "")
      }), [mb]), (0, Uy.useEffect)((() => {
        if (!Wy || !eb || Cy) return;
        let yb = !1;
        return Kb(!0), ob([]), Ly.c.getPlayerProfile(mb, {
          lowerCaseName: mb.getPlayerName().toLowerCase()
        }).then((bb => {
          yb || ob(bb.socialLinks)
        })).catch((yb => {
          console.error("Failed to load social links", yb)
        })).finally((() => {
          yb || Kb(!1)
        })), () => {
          yb = !0
        }
      }), [Wy, eb, Cy, mb]), (0, By.jsxs)("div", {
        className: fy()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: hy
        }),
        children: [hy && (0, By.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Py("settingsMenu:accountSettingsInGameWarning")
        }), (0, By.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, By.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Py("homePage:discordNamePopupTitle"), (0, By.jsxs)(rb.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, ab.f)({
                name: mb.getPlayerName()
              }),
              onClick: () => {
                Gy.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, By.jsx)(cb.e, {
                name: "arrow-up-right-from-square"
              }), " ", Py("profileCard:viewProfile")]
            })]
          }), (0, By.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, By.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [ly.featureFlags.canChangeName && (0, By.jsx)(Vy.c, {
                className: "EnterName",
                placeholderText: Py("homePage:enterName"),
                maxLength: Hy.k,
                defaultValue: Ty,
                onValueChange: yb => {
                  sb(yb)
                },
                forcedText: Iy || !ly.featureFlags.canChangeName ? Ty : null,
                blurOnEnter: !0,
                domRef: bW
              }), (0, By.jsx)(Ey.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  sb((0, Hy.g)())
                },
                children: (0, By.jsx)(cb.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !ly.featureFlags.canChangeName && (0, By.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Hy.e)(Ty, !ly.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, By.jsx)(Ey.f, {
              className: "ChooseNameButton",
              disabled: Iy || Ty === mb.getPlayerName(),
              onClick: () => {
                Ty.length < Hy.l ? vb(Py("homePage:changeNameMinLengthError", {
                  length: Hy.l
                })) : Ty.length > Hy.k ? vb(Py("homePage:changeNameMaxLengthError", {
                  length: Hy.k
                })) : (xb(!0), vb(null), async function(yb, bb, Wy, Uy) {
                  const hy = await (0, Yy.postJsonWithMetricsCookiesAndJsonResponse)(`${Xy.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: yb
                  }, {
                    retries: 3
                  }, bb.getMetricsCookies()).catch((yb => (console.error("Bad response from the server when trying to update name:", yb), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  hy.err ? (console.error("Error when trying to get with new name from DB", hy.err), Uy(hy.err)) : !0 === hy.nameExists ? Uy("Name is already taken") : Wy(yb)
                }(Ty, mb, (yb => {
                  mb.setPlayerName(yb), xb(!1)
                }), (yb => {
                  vb(yb), xb(!1)
                })))
              },
              children: Py("general:choose")
            })]
          }), Ry && (0, By.jsx)("div", {
            className: "ChooseAccNameError",
            children: Ry
          })]
        }), (0, By.jsx)(gb.c, {
          label: (() => {
            if ((0, wy.l)(sy)) {
              const yb = (0, Zy.o)(oy.code, "general:timeLeft"),
                bb = (0, Qy.bb)(yb, Date.now(), sy + wy.j);
              return `${Py("settingsMenu:hideSocialLocation")} (${Py("general:timeLeft",{time:bb})})`
            }
            return Py("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const yb = !(0, wy.l)(sy);
            (0, Ny.f)({
              id: "social.hide_location",
              value: yb ? "on" : "off"
            }), yW(!0), Ly.c.setHideSocialLocation(mb, yb).then((() => {
              Gy.d.set({
                hideSocialLocationFrom: yb ? Date.now() : null
              })
            })).finally((() => {
              yW(!1)
            }))
          },
          checked: (0, wy.l)(sy),
          disabled: dy
        }), eb && (0, By.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, By.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Py("settingsMenu:socialLinks")
          }), Bb && (0, By.jsx)(Jy.e, {}), !Bb && (0, By.jsx)(kb.c, {
            socialLinks: Pb,
            editable: !0,
            userContext: mb,
            onLinksUpdated: qW
          })]
        }), (0, By.jsxs)("div", {
          className: "SettingBox",
          children: [(0, By.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Py("auth:login")
          }), Zb && (0, By.jsx)(Jy.e, {}), !Zb && 0 === cW.length && (0, By.jsx)("div", {
            className: "NoLoginOptions",
            children: Py("auth:noLoginOptions")
          }), !Zb && cW.length > 0 && "crazygames" !== My.u && (0, By.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: cW
          }), !Zb && cW.length > 0 && "crazygames" === My.u && (0, By.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [cW[0], cW.length > 1 && (0, By.jsxs)(By.Fragment, {
              children: [(0, By.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, By.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Py("auth:legacyLoginOptions")
                }), (0, By.jsx)(tb.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Py("auth:legacyLoginOptionsInfo")
                })]
              }), (0, By.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: cW.slice(1)
              })]
            })]
          }), ly.featureFlags.useLogin && Ky.useLogin && (null !== mb.loggedInInfo || mb.isLoggedIn()) && (0, By.jsxs)(By.Fragment, {
            children: [(0, By.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, By.jsx)(Ey.C, {
              onClick: () => {
                (0, Yy.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: Py("auth:signOut")
            })]
          })]
        }), !mb.playerHasRank("super") && (0, Dy.siteSupportsPurchases)() && (0, By.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, By.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, By.jsx)(cb.e, {
              name: "bolt"
            }), Py("homePage:superRank")]
          }), (0, By.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, By.jsxs)(Ey.i, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, jb.f)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, By.jsx)(cb.e, {
                name: "bolt"
              }), Py("homePage:getSuperRank")]
            }), (0, By.jsxs)(Ey.i, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, jb.f)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, By.jsx)(cb.e, {
                name: "bolt"
              }), Py("homePage:giftSuperRank")]
            })]
          })]
        }), mb.playerHasRank("super") && (0, By.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, By.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, By.jsx)(cb.e, {
              name: "bolt"
            }), Py("homePage:superRank"), (0, By.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Py("general:timeLeft", {
                time: (0, Qy.fc)((0, Zy.o)(oy.code, "general:timeLeft"), mb.superRankInfo)
              }), ")"]
            })]
          }), (0, Dy.siteSupportsPurchases)() && (0, By.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, By.jsxs)(Ey.i, {
              className: "AccountSettingsSuperRankProlong",
              loading: ib,
              onClick: () => {
                zb(Fy.o.id, null)
              },
              children: [(0, By.jsx)(cb.e, {
                name: "bolt"
              }), Py("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Fy.o.product.days,
                price: Fy.o.price
              })]
            }), (0, By.jsxs)(Ey.i, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, jb.f)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, By.jsx)(cb.e, {
                name: "bolt"
              }), Py("homePage:giftSuperRank")]
            })]
          }), ny && (0, By.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Py(ny.translationKey)
          })]
        }), (0, By.jsx)(Ay, {
          showing: Wy
        }), ly.featureFlags.useSocialFeatures && (0, By.jsx)(Wb, {
          showing: Wy
        }), (0, By.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, By.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, By.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Py("auth:deleteAccountButtonTitle")
            }), (0, My.d)() && (0, By.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Py("auth:discordActivityKickWarning")
            }), (0, By.jsx)(hb, {})]
          }), (0, By.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Py("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function hb() {
      const {
        userContext: yb,
        isUserContextUpdating: bb
      } = (0, qb.c)(), {
        t: Wy
      } = (0, Zy.D)(), [hy, fy] = (0, Uy.useState)(!1), [cb, Py] = (0, Uy.useState)(null), oy = bb || hy;
      return (0, By.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, By.jsxs)(Ey.C, {
          onClick: async function() {
            if (!hy) {
              fy(!0);
              try {
                const bb = await async function() {
                  if (!await ib.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, Hy.e)(yb.getPlayerName(), !ly.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: (0, My.d)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return vb.c.ok();
                  const bb = await (0, Yy.postJsonWithMetricsCookiesAndJsonResponse)(`${Xy.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {}, {
                    retries: 3
                  }, yb.getMetricsCookies());
                  if (bb.error) return vb.c.error(bb.error);
                  (0, My.d)() && (await ny.k.discordActivity()).exit("User deleted their account");
                  return (0, Yy.forgetStoredGuestAccount)(yb.whamm), (0, Yy.forceGlobalSignOut)(!0), vb.c.ok()
                }(), Wy = bb.isError() ? bb.asError().message : null;
                Py(Wy)
              } catch (bb) {
                console.error("Failed to delete account:", bb), Py(Wy("auth:genericDeleteAccountError"))
              }
              fy(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: oy,
          children: [oy && (0, By.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, By.jsx)(Jy.e, {})
          }), Wy("auth:deleteAccount")]
        }), cb && (0, By.jsx)("div", {
          className: "DeleteAccountError",
          children: cb
        })]
      })
    }
    var fb = Wy(8352),
      Zb = Wy(2459),
      cW = Wy(1115),
      Pb = Wy(1260);
    const ob = (0, Uy.memo)((function(yb) {
        let {
          inGame: bb
        } = yb;
        const {
          t: Wy,
          selectedLanguage: Uy
        } = (0, Zy.D)(), {
          clientEscMenuOptions: hy,
          showDebugOverlay: fy
        } = (0, Gy.h)(["clientEscMenuOptions", "showDebugOverlay"]), cb = (0, sy.k)("hideCoordinates");
        let Py = "settingsMenu:showCoordinates",
          oy = "settingsMenu:showChunkCoordinates";

        function Ky(yb) {
          const bb = new Intl.DisplayNames([yb], {
            type: "language"
          }).of(yb);
          return bb.charAt(0).toUpperCase() + bb.slice(1)
        }
        return cb && (Py = "settingsMenu:showCoordinatesHidden", oy = "settingsMenu:showChunkCoordinatesHidden"), (0, By.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [bb && ly.featureFlags.canUseInviteLinks && (0, By.jsxs)("div", {
            className: "SettingBox",
            children: [(0, By.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Wy("settingsMenu:inviteLink")
            }), (0, By.jsx)(fb.i, {})]
          }), (0, By.jsxs)("div", {
            className: "SettingBox",
            children: [(0, By.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Wy("settingsMenu:language")
            }), (0, By.jsx)(Zb.c, {
              options: Object.entries(Zy.j).map((yb => {
                let [bb, Wy] = yb;
                return {
                  label: (0, By.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, By.jsx)("img", {
                      src: Wy.flagImg,
                      alt: "flag"
                    }), (0, By.jsxs)("span", {
                      children: [Ky(bb), " ", (0, By.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", bb, ")"]
                      })]
                    })]
                  }),
                  value: bb
                }
              })),
              value: Uy.code,
              onChange: yb => {
                cW.f.get().setCurrentLanguage(yb.value)
              }
            })]
          }), !(0, ly.isMobileApp)() && (0, Pb.d)() && ly.featureFlags.useForceRotateForceFullscreenOverlay && (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:disableFullscreenMode"),
            checked: hy.disableFullscreen,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                disableFullscreen: yb
              })
            }
          }), (0, By.jsx)(gb.c, {
            label: Wy(Py),
            checked: hy.showCoordinates,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                showCoordinates: yb
              })
            },
            disabled: cb
          }), (0, By.jsx)(gb.c, {
            label: Wy(oy),
            checked: hy.showChunkCoordinates,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                showChunkCoordinates: yb
              })
            },
            disabled: cb
          }), (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:showFps"),
            checked: hy.showFPS,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                showFPS: yb
              })
            }
          }), (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:disableBunnyHopping"),
            checked: hy.disableBunnyHopping,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                disableBunnyHopping: yb
              })
            }
          }), (0, ny.s)() && (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:showChat"),
            checked: hy.showChat,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                showChat: yb
              })
            }
          }), (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:showDebugOverlay"),
            checked: fy,
            onClick: yb => {
              Gy.d.set({
                showDebugOverlay: yb
              })
            }
          }), ly.featureFlags.useSocialFeatures && (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:showFriendOnlineToasts"),
            checked: hy.showFriendOnlineToasts,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                showFriendOnlineToasts: yb
              })
            }
          }), (0, By.jsx)(gb.c, {
            label: Wy("settingsMenu:showNewItemIndicator"),
            checked: hy.showNewItemIndicator,
            onClick: yb => {
              Gy.d.setClientEscMenuOptions({
                showNewItemIndicator: yb
              })
            }
          })]
        })
      })),
      Bb = (0, Uy.memo)((function() {
        const {
          t: yb
        } = (0, Zy.D)(), {
          soundVolume: bb,
          musicVolume: Wy
        } = (0, Gy.h)(["soundVolume", "musicVolume"]);
        return (0, By.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, By.jsx)(gb.f, {
            name: yb("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Wy,
            onChange: yb => {
              Gy.d.set({
                musicVolume: Math.round(100 * yb) / 100
              })
            },
            format: yb => yb.toFixed(2)
          }), (0, By.jsx)(gb.f, {
            name: yb("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: bb,
            onChange: yb => {
              Gy.d.set({
                soundVolume: Math.round(100 * yb) / 100
              })
            },
            format: yb => yb.toFixed(2)
          })]
        })
      }));
    var Kb = Wy(574),
      eb = Wy(1268),
      qW = Wy(1529),
      sb = Wy(8359),
      Sb = Wy(2793);
    const Eb = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function lb() {
      const {
        t: yb
      } = (0, Zy.D)(), bb = (0, Sb.d)(), {
        mobilePushNotificationsCanAsk: Wy
      } = (0, Gy.h)(["mobilePushNotificationsCanAsk"]), [hy, fy] = (0, Uy.useState)(null), [cb, Py] = (0, Uy.useState)(!1), [oy, Ky] = (0, Uy.useState)(null), [ey, qb] = (0, Uy.useState)(!1), sy = (0, Uy.useCallback)((() => {
        (0, qW.e)().then((yb => {
          bb.current && (fy(yb), Py(!1))
        })).catch((yb => {
          console.error("Failed to load push notification targets:", yb), bb.current && Py(!0)
        }))
      }), [bb]), Sy = (0, Uy.useCallback)((() => {
        (0, sb.c)().then((yb => {
          bb.current && Ky((() => yb))
        }))
      }), [bb]);
      (0, Uy.useEffect)((() => {
        sy()
      }), [sy]), (0, Uy.useEffect)((() => {
        Sy()
      }), [Sy, Wy]), (0, eb.i)(qW.k, sy);
      const ly = null === hy ? [] : Object.keys(Eb).filter((yb => hy[yb] > 0));
      return (0, By.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, By.jsx)("div", {
          className: "SliderText",
          children: yb("notificationSettings:pushNotifications")
        }), null === hy && cb && (0, By.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: yb("notificationSettings:pushTargetsLoadFailed")
        }), null !== hy && 0 === ly.length && (0, By.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: yb("notificationSettings:pushTargetsNone")
        }), ly.length > 0 && (0, By.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: ly.map((bb => {
            var Wy;
            return (0, By.jsx)("li", {
              children: yb(Eb[bb], {
                count: null !== (Wy = null === hy || void 0 === hy ? void 0 : hy[bb]) && void 0 !== Wy ? Wy : 0
              })
            }, bb)
          }))
        }), null !== oy && (0, By.jsx)(Ey.f, {
          className: "PushNotificationSettingsButton",
          loading: ey,
          onClick: () => {
            qb(!0), oy().catch((yb => {
              console.error("Failed to turn on push notifications:", yb)
            })).finally((() => {
              bb.current && (qb(!1), Sy())
            }))
          },
          children: yb("notificationSettings:pushTurnOn")
        })]
      })
    }
    const mW = {
        toastAndTray: {
          label: "notificationSettings:friendRequestsAll",
          info: "notificationSettings:friendRequestsAllInfo"
        },
        trayOnly: {
          label: "notificationSettings:friendRequestsQuiet",
          info: "notificationSettings:friendRequestsQuietInfo"
        },
        off: {
          label: "notificationSettings:friendRequestsOff",
          info: "notificationSettings:friendRequestsOffInfo"
        }
      },
      Cb = (0, Uy.memo)((function() {
        const {
          t: yb
        } = (0, Zy.D)(), {
          clientEscMenuOptions: bb
        } = (0, Gy.h)(["clientEscMenuOptions"]);
        return (0, By.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, By.jsx)(gb.d, {
            label: yb("notificationSettings:friendRequests"),
            options: Kb.e.map((bb => ({
              value: bb,
              label: yb(mW[bb].label)
            }))),
            value: bb.friendRequestNotifications,
            onChange: yb => {
              Gy.d.setClientEscMenuOptions({
                friendRequestNotifications: yb
              })
            },
            circleInfoText: (0, By.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: Kb.e.map((bb => (0, By.jsxs)("div", {
                children: [(0, By.jsx)("b", {
                  children: yb(mW[bb].label)
                }), ": ", yb(mW[bb].info)]
              }, bb)))
            })
          }), (0, By.jsx)(lb, {})]
        })
      }));
    var Tb = Wy(3722),
      Vb = Wy(167),
      Jb = Wy(240),
      gW = Wy(5923),
      Gb = Wy(2754),
      Ob = Wy(8363),
      Rb = Wy(547),
      vW = Wy(23);
    var iW = Wy(562),
      Mb = Wy(33),
      Yb = Wy(3637);
    const Xb = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function nb(yb) {
      return Xb.has(yb) ? mb.gameBridge.lookup("yC", null) : null
    }

    function ub(yb) {
      if (!(0, Rb.D)(Gy.d.get("clientEscMenuOptions")[yb])) return Gy.d.get("clientEscMenuOptions")[yb];
      const bb = nb(yb);
      return null !== bb ? bb[Xb.get(yb)] : Mb.e.getItem(yb)
    }

    function rW(yb, bb) {
      if ("useTouchControls" === yb) return void(0, Yb.d)(bb);
      yb in Gy.d.get("clientEscMenuOptions") && Gy.d.setClientEscMenuOptions({
        [yb]: bb
      });
      const Wy = nb(yb);
      null !== Wy && mb.gameBridge.send("setChunkAddDistance", {
        ...Wy,
        [Xb.get(yb)]: bb
      }), Mb.e.setItem(yb, bb)
    }
    var Hb = Wy(8369),
      aW = Wy(8376),
      Fb = Wy(8385),
      pb = Wy(3715);

    function Lb(yb) {
      var bb, hy, cb, Py;
      let {
        minChunkAddDist: oy,
        getValue: Ky,
        onChange: ey,
        setApplySettingsCallback: qb
      } = yb;
      const {
        t: Sy
      } = (0, Zy.D)(), {
        clientEscMenuOptions: Ey
      } = (0, Gy.h)(["clientEscMenuOptions", "showDistantNametags"]), mb = (0, Uy.useRef)(Ky("showFog")), Cy = (0, Uy.useRef)(Ey.antiAliasing), Ty = (0, Uy.useRef)(Ey.useWebGpu), [Vy, Jy] = (0, Uy.useState)(null), [Ry, vb] = (0, Uy.useState)((() => (0, Gb.e)(ly.featureFlags.settings.canUseShaderPacks))), [ib] = (0, Uy.useState)((() => Gy.d.isWebGpuDefaultOff())), [My] = (0, Uy.useState)(Jb.b);
      (0, Uy.useEffect)((() => {
        let yb = !1;
        return (0, ly.hasUsableWebGpuAdapter)().then((bb => {
          yb || Jy(bb)
        })), (0, Gb.m)(ly.featureFlags.settings.canUseShaderPacks) && (0, gW.g)().then((async bb => {
          const Uy = null !== bb && await async function(yb) {
            const [{
              isShaderPackActive: bb
            }, {
              loadPageShaderPackCompiler: Uy
            }] = await Promise.all([Wy.e(119).then((() => Wy(5915))), Promise.all([Wy.e(126), Wy.e(123), Wy.e(122)]).then((() => Wy(5867)))]);
            return bb(yb, await Uy())
          }(bb);
          yb || vb(Uy)
        })), () => {
          yb = !0
        }
      }), []);
      const Yy = function(yb, bb, Wy, Uy, hy) {
          return (0, Ob.c)(Wy, Uy) && !0 === bb ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== bb ? "settingsMenu:newWebGpu" : hy ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: yb && !1 !== bb,
            disabled: !0 !== bb
          }
        }(Ey.useWebGpu, Vy, Ry, ib, My),
        Xy = (Ey.useWebGpu || (0, Ob.c)(Ry, ib)) && Ry && !0 === Vy,
        ny = (0, sy.k)("lightingOverride"),
        uy = !(0, Rb.D)(ny);
      let rb = "settingsMenu:enableLighting";
      uy && (rb = ny ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Hy = yb => {
          var bb, Wy, Uy;
          const hy = null !== (bb = yb.showFog) && void 0 !== bb ? bb : Ky("showFog"),
            fy = null !== (Wy = yb.antiAliasing) && void 0 !== Wy ? Wy : Ey.antiAliasing,
            Zy = null !== (Uy = yb.useWebGpu) && void 0 !== Uy ? Uy : Ey.useWebGpu,
            cb = !iW.q && hy !== mb.current || fy !== Cy.current || Zy !== Ty.current;
          qb(cb ? () => gb.g : null)
        },
        ab = (0, sy.k)("fogChunkDistanceOverride"),
        Fy = (0, sy.k)("fogBlockDistanceOverride"),
        py = !(0, Rb.D)(ab) || !(0, Rb.D)(Fy),
        Ly = py ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Qy, jb] = (0, Tb.d)(oy),
        [Dy, tb] = (0, pb.e)(oy),
        wy = Sy("settingsMenu:chunkLoadDistanceDeviceLimit"),
        kb = Dy < Qy,
        Ny = Math.min(null !== (bb = Ky("chunkHorizAddDist")) && void 0 !== bb ? bb : oy[0], Dy),
        zb = !py && function(yb, bb) {
          return !0 === yb.showFog && yb.fogChunkDistance > bb
        }(Ey, Ny);
      return (0, By.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, By.jsx)(gb.f, {
          name: Sy("settingsMenu:horizontalChunkLoadDistance"),
          min: oy[0],
          max: Qy,
          selectableMax: Dy,
          cappedNote: wy,
          step: 1,
          initValue: Ny,
          onChange: yb => {
            !0 === Ky("showFog") && yb < Ky("fogChunkDistance") && ey("fogChunkDistance", yb), ey("chunkHorizAddDist", yb), vW.g.EZ("updatedChunkLoadDist")
          },
          circleInfoText: Sy("settingsMenu:chunkLoadDistanceInfo")
        }), (0, By.jsx)(gb.f, {
          name: Sy("settingsMenu:verticalChunkLoadDistance"),
          min: oy[1],
          max: jb,
          selectableMax: tb,
          cappedNote: kb ? void 0 : wy,
          step: 1,
          initValue: Math.min(null !== (hy = Ky("chunkVertAddDist")) && void 0 !== hy ? hy : oy[1], tb),
          onChange: yb => {
            ey("chunkVertAddDist", yb), vW.g.EZ("updatedChunkLoadDist")
          },
          circleInfoText: Sy("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, By.jsx)(gb.c, {
          label: Sy("settingsMenu:chunkFadeIn"),
          checked: Ey.chunkFadeIn,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              chunkFadeIn: yb
            })
          },
          circleInfoText: Sy("settingsMenu:chunkFadeInInfo")
        }), Oy.devTools.supports("chunkBorders") && (0, By.jsx)(gb.c, {
          label: Sy("settingsMenu:showChunkBorders"),
          checked: Ey.showChunkBorders,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              showChunkBorders: yb
            })
          },
          circleInfoText: Sy("settingsMenu:showChunkBordersInfo")
        }), (0, By.jsx)(gb.c, {
          label: Sy(rb),
          checked: Ey.enableLighting,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              enableLighting: yb
            })
          },
          disabled: uy
        }), (0, By.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, By.jsx)(gb.c, {
            label: Sy(Ly),
            checked: Ey.showFog,
            onClick: yb => {
              Hy({
                showFog: yb
              }), Gy.d.setClientEscMenuOptions({
                showFog: yb
              })
            },
            disabled: py,
            className: fy()({
              SettingBoxWarning: zb
            })
          }), (0, By.jsx)(gb.f, {
            name: Sy("settingsMenu:fogChunkDistance"),
            min: oy[0],
            max: Vb.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (cb = Ey.fogChunkDistance) && void 0 !== cb ? cb : oy[0],
            onChange: yb => {
              Gy.d.setClientEscMenuOptions({
                fogChunkDistance: yb
              }), vW.g.EZ("fogChunkDistanceChanged", yb)
            },
            circleInfoText: Sy("settingsMenu:fogChunkDistanceInfo"),
            disabled: py || !1 === Ky("showFog"),
            className: fy()({
              SettingBoxWarning: zb
            })
          }), zb && (0, By.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Sy("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !iW.q && (0, By.jsx)(gb.c, {
          label: Sy(Xy ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Xy && Ey.disableTexAtlas,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              disableTexAtlas: yb
            })
          },
          circleInfoText: Sy("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Xy
        }), (0, By.jsx)(gb.f, {
          name: Sy("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Ey.cameraFOV,
          onChange: yb => {
            Gy.d.setClientEscMenuOptions({
              cameraFOV: yb
            })
          }
        }), (0, By.jsx)(gb.c, {
          label: Sy("settingsMenu:disableViewBobbing"),
          checked: Ey.disableBobbing,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              disableBobbing: yb
            })
          },
          circleInfoText: Sy("settingsMenu:disableViewBobbingInfo")
        }), (0, By.jsx)(gb.c, {
          label: Sy("settingsMenu:antiAliasing"),
          checked: Ey.antiAliasing,
          onClick: yb => {
            Hy({
              antiAliasing: yb
            }), (0, Hb.e)("antiAliasing"), Gy.d.setClientEscMenuOptions({
              antiAliasing: yb
            })
          },
          circleInfoText: Sy("settingsMenu:antiAliasingInfo")
        }), (0, By.jsx)(gb.f, {
          name: Sy("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Py = Ey.pixelScale) && void 0 !== Py ? Py : 1,
          onChange: yb => {
            (yb !== Gy.d.get("clientEscMenuOptions").pixelScale || (0, Fb.r)()) && (0, Hb.e)("pixelScale"), Gy.d.setClientEscMenuOptions({
              pixelScale: yb
            })
          },
          circleInfoText: Sy("settingsMenu:pixelScaleInfo"),
          format: yb => `${yb}x`
        }), (0, By.jsx)(gb.c, {
          label: Sy("settingsMenu:pixelSmoothing"),
          checked: Ey.pixelSmoothing,
          onClick: yb => {
            Gy.d.setClientEscMenuOptions({
              pixelSmoothing: yb
            })
          },
          circleInfoText: Sy("settingsMenu:pixelSmoothingInfo")
        }), iW.q && (0, By.jsx)(gb.c, {
          label: Sy("settingsMenu:distantNametags"),
          checked: (0, aW.c)(),
          onClick: yb => {
            Gy.d.set({
              showDistantNametags: yb
            })
          },
          circleInfoText: Sy("settingsMenu:distantNametagsInfo")
        }), (0, By.jsx)(gb.c, {
          label: Sy(Yy.translationKey),
          checked: Yy.checked,
          onClick: yb => {
            Hy({
              useWebGpu: yb
            }), Gy.d.setClientEscMenuOptions({
              useWebGpu: yb
            })
          },
          circleInfoText: Sy("settingsMenu:newWebGpuInfo"),
          disabled: Yy.disabled
        })]
      })
    }
    var Qb = Wy(8397),
      jW = Wy(8011),
      Db = Wy(8017),
      tW = Wy(1242),
      wb = Wy(4195),
      kW = Wy(8403),
      Nb = Wy(1612),
      zW = Wy(3553),
      Ib = Wy(1614),
      xW = Wy(576);
    const Ab = (0, Uy.memo)((function() {
      const {
        clientEscMenuOptions: yb
      } = (0, Gy.h)(["clientEscMenuOptions"]), {
        recording: bb,
        clipping: Wy,
        hasClipBuffer: hy
      } = (0, Nb.j)("replayRecorder"), Zy = (0, Nb.i)("connectedGame", (yb => yb.replay)), cb = (0, zW.k)(), Py = !1 === (0, sy.k)("canRecordReplays");
      (0, Uy.useEffect)((() => {
        mb.gameBridge.send("setRecorderPrefs", {
          clipping: yb.enableClipping,
          clipSeconds: yb.clipDurationSeconds
        })
      }), [yb.enableClipping, yb.clipDurationSeconds]);
      const oy = cb || Zy,
        Ky = !oy && !Py,
        ey = bb || Ky,
        qb = Ky,
        Sy = qb && Wy && !bb;

      function ly() {
        ey && mb.gameBridge.send("toggleRecording", null)
      }
      return (0, By.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, By.jsxs)("div", {
          className: "SettingBox",
          children: [(0, By.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: bb ? (0, By.jsxs)(By.Fragment, {
              children: [(0, By.jsxs)(Ey.C, {
                className: "ReplayViewerCategoryButton",
                onClick: ly,
                disabled: !ey,
                children: [(0, By.jsx)("span", {
                  children: "Stop Recording"
                }), (0, By.jsx)(Ib.e, {
                  noaAction: "recordGame"
                })]
              }), (0, By.jsx)(kW.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, By.jsxs)(Ey.f, {
              className: "ReplayViewerCategoryButton",
              onClick: ly,
              disabled: !ey,
              children: [(0, By.jsx)("span", {
                children: "Start Recording"
              }), (0, By.jsx)(Ib.e, {
                noaAction: "recordGame"
              })]
            })
          }), Py && (0, By.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), oy && !bb && (0, By.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, By.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, By.jsx)(gb.c, {
            label: "Enable clipping",
            checked: yb.enableClipping,
            disabled: !qb,
            onClick: function(yb) {
              qb && Gy.d.setClientEscMenuOptions({
                enableClipping: yb
              })
            },
            className: fy()({
              SettingBoxDisabled: !qb
            })
          }), (0, By.jsx)(gb.f, {
            name: "Clip duration (seconds)",
            min: xW.l,
            max: xW.h,
            step: xW.c,
            initValue: yb.clipDurationSeconds,
            onChange: function(yb) {
              Gy.d.setClientEscMenuOptions({
                clipDurationSeconds: yb
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !qb || !yb.enableClipping
          })]
        }), (0, By.jsxs)("div", {
          className: "SettingBox",
          children: [(0, By.jsxs)(Ey.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Sy && mb.gameBridge.send("saveClip", null)
            },
            disabled: !Sy,
            children: [(0, By.jsx)("span", {
              children: "Record clip"
            }), (0, By.jsx)(Ib.e, {
              noaAction: "recordClip"
            })]
          }), yb.enableClipping && !hy && qb && !bb && (0, By.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), bb && (0, By.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, By.jsxs)("div", {
          className: "SettingBox",
          children: [(0, By.jsxs)(Ey.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, zW.g)(!0), Gy.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: cb,
            children: [(0, By.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, By.jsx)(Ib.e, {
              noaAction: "replayViewerOpen"
            })]
          }), cb && (0, By.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, By.jsxs)("div", {
          className: "SettingBox",
          children: [(0, By.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, By.jsx)("iframe", {
            className: "ReplayViewerCategoryTutorial",
            src: "https://www.youtube.com/embed/-FsT0rNSuYA?playsinline=1&rel=0",
            title: "How to use Replay Mode",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: !0,
            loading: "lazy"
          })]
        })]
      })
    }));
    var db = Wy(248),
      yU = Wy(1541);
    const bU = {
      account: {
        icon: "fa-solid fa-user",
        displayName: "homePage:account"
      },
      general: {
        icon: "fa-solid fa-gear",
        displayName: "settingsMenu:general"
      },
      audio: {
        icon: "fa-solid fa-volume",
        displayName: "settingsMenu:audio"
      },
      notifications: {
        icon: "fa-solid fa-bell",
        displayName: "notificationSettings:notifications"
      },
      graphics: {
        icon: "fa-solid fa-cube",
        displayName: "settingsMenu:graphics"
      },
      controls: {
        icon: () => (0, By.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, By.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      eU: {
        icon: "fa-solid fa-sparkle",
        displayName: "settingsMenu:shaderPack"
      },
      updateLog: {
        icon: "fa-solid fa-clock-rotate-left",
        displayName: "homePage:updateLog"
      },
      information: {
        icon: "fa-solid fa-circle-info",
        displayName: "homePage:info"
      },
      alternativeDomains: {
        icon: "fa-solid fa-globe",
        displayName: "settingsMenu:unblockedDomains"
      },
      replayViewer: {
        icon: "fa-solid fa-video",
        displayName: "Replay Mode"
      },
      developerTools: {
        icon: "fa-solid fa-terminal",
        displayName: "Developer Tools"
      }
    };

    function WW() {
      return Promise.all([Wy.e(126), Wy.e(123), Wy.e(117), Wy.e(114)]).then((() => Wy(39554))).then((yb => ({
        default: yb.ShaderPackCategory
      })), (yb => (console.error("Failed to load the shader pack settings", yb), {
        default: UW
      })))
    }

    function UW() {
      const {
        t: yb
      } = (0, Zy.D)();
      return (0, By.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: yb("shaderPack:tabLoadFailed")
      })
    }
    var hW = Wy(1239);
    const fW = (0, Uy.lazy)((() => Wy.e(250).then((() => Wy(39547))).then((yb => ({
        default: yb.BloxdInformation
      }))))),
      ZW = (0, Uy.lazy)(WW);

    function cU(yb) {
      return yb ? "general" : "account"
    }
    const PW = new Map,
      oW = (0, Uy.memo)((function(yb) {
        let {
          show: bb,
          setBeforeResumeCallback: Wy
        } = yb;
        (0, Sy.d)();
        const {
          gameState: hy,
          openSettingsCategory: fy
        } = (0, Gy.h)(["gameState", "openSettingsCategory"]), {
          userContext: Py
        } = (0, qb.c)(), {
          t: oy
        } = (0, Zy.D)(), Vy = (0, ey.e)(), Jy = (0, sy.k)("minChunkAddDist"), gb = "inGame" === hy, [Oy, vb] = (0, Uy.useState)(cU(gb)), [ib, Yy] = (0, Uy.useState)(null), [Xy, ny] = (0, Uy.useState)([]), uy = (0, Uy.useRef)(function() {
          const yb = new Date,
            bb = 6 * (yb.getMonth() + yb.getDate()) % db.w.length;
          return [...db.w, ...db.w].slice(bb, bb + 6)
        }()), rb = (0, Uy.useRef)(null), Hy = (0, eb.m)(tW.j, (0, tW.b)()), ab = Object.keys(bU).filter((yb => {
          switch (yb) {
            case "replayViewer":
              return gb;
            case "developerTools":
              return Py.playerHasRank("developer") || !1;
            case "texturePack":
              return ly.featureFlags.settings.canChangeTexturePack;
            case "eU":
              return ly.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return ly.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== My.u;
            case "controller":
              return ly.featureFlags.useControllerSupport && (Hy || "controller" === Oy);
            default:
              return !0
          }
        }));
        (0, eb.i)("toggleFullCoordinateOverlay", (() => {
          const yb = ub("showCoordinates") && ub("showChunkCoordinates") && ub("showFPS");
          rW("showCoordinates", !yb), rW("showChunkCoordinates", !yb), rW("showFPS", !yb), Vy()
        })), (0, eb.i)("updatedChunkLoadDist", (() => {
          Vy()
        })), (0, Uy.useEffect)((() => {
          if (Yy(null), null === Gy.d.get("openSettingsCategory")) {
            const yb = (0, hW.f)() ? PW.get(gb) : void 0;
            vb(yb && ab.includes(yb) ? yb : cU(gb))
          }
        }), [bb]), (0, Uy.useEffect)((() => {
          null !== fy && (vb(fy), PW.set(gb, fy), Gy.d.set({
            openSettingsCategory: null
          }))
        }), [fy, gb]), (0, Uy.useLayoutEffect)((() => {
          rb.current && (rb.current.scrollTop = 0)
        }), [Oy, bb]), (0, Uy.useEffect)((() => {
          "updateLog" === Oy && (0, Ty.c)().then(ny)
        }), [Oy]), (0, Uy.useEffect)((() => {
          if ((0, Rb.D)(Jy)) return;
          const [yb, bb] = (0, Qb.e)(), [Wy, Uy] = (0, Tb.d)(Jy), hy = (0, yU.f)(Jy[0], yb, Wy), fy = (0, yU.f)(Jy[1], bb, Uy);
          mb.gameBridge.send("setChunkAddDistance", {
            horizontal: hy,
            vertical: fy
          })
        }), [Jy]);
        const Fy = (0, Uy.useCallback)((async () => {
          ib && (await ib(), Yy(null))
        }), [ib]);

        function py() {
          Gy.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, Uy.useEffect)((() => {
          Wy((() => Fy))
        }), [Fy, Wy]), (0, By.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: bb ? {} : {
            display: "none"
          },
          children: [(0, By.jsx)("div", {
            className: "MenuSideBar",
            children: (0, By.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, By.jsx)(Ky, {
                items: ab.map((yb => {
                  const bb = bU[yb].icon;
                  return {
                    id: yb,
                    faIcon: "string" === typeof bb ? bb : void 0,
                    iconElement: "string" === typeof bb ? void 0 : (0, By.jsx)(bb, {}),
                    title: oy(bU[yb].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Oy,
                onClick: yb => {
                  !async function(yb) {
                    await Fy(), vb(yb), PW.set(gb, yb)
                  }(yb)
                }
              })
            })
          }), (0, By.jsxs)("div", {
            ref: rb,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Oy && (0, By.jsx)(Ub, {
              showing: bb,
              inGame: gb
            }), "general" === Oy && (0, By.jsx)(ob, {
              inGame: gb
            }), "audio" === Oy && (0, By.jsx)(Bb, {}), "notifications" === Oy && (0, By.jsx)(Cb, {}), "graphics" === Oy && (0, By.jsx)(Lb, {
              minChunkAddDist: null !== Jy && void 0 !== Jy ? Jy : [2, 2],
              getValue: ub,
              onChange: rW,
              setApplySettingsCallback: Yy
            }), "controls" === Oy && (0, By.jsx)(jW.h, {}), "controller" === Oy && ly.featureFlags.useControllerSupport && (0, By.jsx)(Db.c, {}), ly.featureFlags.settings.canChangeTexturePack && "texturePack" === Oy && (0, By.jsx)(wb.e, {
              setApplySettingsCallback: Yy
            }), ly.featureFlags.settings.canUseShaderPacks && "eU" === Oy && (0, By.jsx)(Uy.Suspense, {
              fallback: null,
              children: (0, By.jsx)(ZW, {
                setApplySettingsCallback: Yy
              })
            }), "updateLog" === Oy && (0, By.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, By.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Xy.map(((yb, bb) => (0, By.jsx)(Cy.d, {
                  updateLog: yb,
                  index: bb,
                  close: py
                }, bb)))
              })
            }), "information" === Oy && (0, By.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, By.jsx)(Uy.Suspense, {
                fallback: null,
                children: (0, By.jsx)(fW, {})
              })
            }), "alternativeDomains" === Oy && (0, By.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, By.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: oy("settingsMenu:unblockedDomainsDescription")
              }), (0, By.jsx)("div", {
                className: "AlternativeDomainsList",
                children: uy.current.map((yb => (0, By.jsxs)(Ey.f, {
                  onClick: () => {
                    window.open(`https://${yb}`)
                  },
                  children: [(0, By.jsx)(cb.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", yb]
                }, yb)))
              })]
            }), "replayViewer" === Oy && (0, By.jsx)(Ab, {}), "developerTools" === Oy && (0, By.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, By.jsx)(Ry, {
                setApplySettingsCallback: Yy
              })
            }), null !== ib && (0, By.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, By.jsx)(Ey.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: Fy,
                children: oy("general:apply")
              })
            })]
          })]
        })
      }));
    var BW = Wy(2096);
    const KW = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      eW = (0, Uy.lazy)((() => Promise.resolve().then((() => Wy(3856))).then((yb => {
        yb.needGameClientAfterPaint();
        const bb = yb.matchmakingLibrariesPromise.then((yb => (0, BW.b)(yb.loadCharacterCustomisationUI(), (yb => yb.CharacterCustomisationUI))));
        return Promise.all([yb.ensureGameSetup(), bb]).then((yb => {
          let [, bb] = yb;
          return bb
        }))
      }))));

    function qU(yb) {
      let {
        show: bb
      } = yb;
      const {
        userContext: Wy
      } = (0, qb.c)(), [hy, fy] = (0, Uy.useState)("characters");
      if (!bb) return null;
      const Zy = KW.filter((yb => "cape" !== yb && "nameColour" !== yb || Wy.getPlayerRanks().includes("super") || (0, Dy.siteSupportsPurchases)())).map((yb => ({
        id: yb,
        faIcon: db.E[yb],
        title: db.I[yb],
        redDot: !1
      })));
      return (0, By.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, By.jsx)("div", {
          className: "MenuSideBar",
          children: (0, By.jsx)(Ky, {
            items: Zy,
            selectedItemId: hy,
            onClick: yb => {
              fy(yb)
            }
          })
        }), (0, By.jsx)("div", {
          className: "MenuBody",
          children: (0, By.jsx)(Uy.Suspense, {
            fallback: (0, By.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, By.jsx)(Jy.e, {})
            }),
            children: (0, By.jsx)(eW, {
              selectedTab: hy
            })
          })
        })]
      })
    }
    var sW = Wy(1295),
      SW = Wy(8408),
      EW = Wy(3732),
      lW = Wy(2720),
      mU = Wy(2761),
      CW = Wy(8431),
      TW = Wy(7892),
      VW = Wy(8412),
      JW = Wy(8425),
      gU = Wy(1556),
      GW = Wy(1546),
      OW = Wy(4111),
      RW = Wy(1122),
      vU = Wy(1080),
      iU = Wy(1477),
      MW = Wy(7987);
    class YW {
      constructor(yb) {
        this.info = yb
      }
      static fromShopInfo(yb) {
        const bb = {};
        for (const Wy in yb) {
          const Uy = !0 === yb[Wy].redDot && !0 !== yb[Wy].forceRemoveRedDot;
          bb[Wy] = {
            redDot: Uy,
            items: {}
          };
          for (const hy in yb[Wy].items) {
            const Uy = yb[Wy].items[hy],
              fy = !0 === Uy.redDot && !0 !== Uy.forceRemoveRedDot;
            bb[Wy].items[hy] = {
              redDot: fy
            }
          }
        }
        return new YW(bb)
      }
      anyCategoryHasRedDots() {
        for (const yb in this.info)
          if (this.categoryHasRedDot(yb)) return !0;
        return !1
      }
      doesCategoryExist(yb) {
        return !(0, Rb.D)(this.info[yb])
      }
      categoryHasRedDot(yb) {
        return !0 === this.info[yb].redDot
      }
      updateCategoryRedDot(yb, bb) {
        this.info[yb].redDot = bb
      }
      doesItemExist(yb, bb) {
        return this.doesCategoryExist(yb) && !(0, Rb.D)(this.info[yb].items[bb])
      }
      itemHasRedDot(yb, bb) {
        return !0 === this.info[yb].items[bb].redDot
      }
      updateItemRedDot(yb, bb, Wy) {
        this.info[yb].items[bb].redDot = Wy
      }
      shallowCopy() {
        return new YW(this.info)
      }
    }

    function XW(yb, bb) {
      return `${yb}\x1f${bb}`
    }

    function nW(yb) {
      return yb ? Object.keys(yb).sort(((bb, Wy) => {
        var Uy, hy, fy, Zy;
        const cb = (null !== (Uy = null === (hy = yb[Wy]) || void 0 === hy ? void 0 : hy.sortPriority) && void 0 !== Uy ? Uy : 0) - (null !== (fy = null === (Zy = yb[bb]) || void 0 === Zy ? void 0 : Zy.sortPriority) && void 0 !== fy ? fy : 0);
        return 0 !== cb ? cb : bb.localeCompare(Wy)
      })) : []
    }

    function uW(yb, bb) {
      return !(0, Rb.D)(bb) && !(0, Rb.D)(yb) && bb in yb
    }
    const rU = (0, Uy.memo)((function(yb) {
      var bb, Wy;
      let {
        show: hy
      } = yb;
      const Zy = (0, Nb.i)("players", QW),
        cb = (0, Nb.i)("players", jU),
        [oy, ey] = (0, Uy.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: YW.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        qb = (0, Uy.useRef)(""),
        Sy = (0, Uy.useRef)(null),
        ly = (0, Uy.useRef)(0),
        Cy = (0, Uy.useRef)(void 0),
        Ty = (0, Uy.useRef)(null),
        Vy = (0, Uy.useRef)(oy),
        Jy = oy.redDotInfo.anyCategoryHasRedDots(),
        [gb, Oy] = (0, Uy.useState)(null),
        Ry = (0, Uy.useRef)(!1);
      let vb = !1,
        ib = 0,
        Yy = 0;
      if (oy.currencyAmounts) {
        for (const yb in oy.currencyAmounts) {
          var Xy;
          const bb = oy.currencyAmounts[yb];
          bb.hidden || (ib++, (null === (Xy = bb.subtext) || void 0 === Xy ? void 0 : Xy.length) > 0 && Yy++)
        }
        vb = ib + Yy > 4
      }(0, Uy.useEffect)((() => {
        vW.g.EZ("showShopIconRedDot", Jy, !0)
      }), [Jy]), (0, Uy.useEffect)((() => {
        mb.gameBridge.send("setShopOpen", hy), hy || (clearTimeout(Cy.current), ey((yb => yb.awaitingPurchase ? {
          ...yb,
          awaitingPurchase: !1
        } : yb)))
      }), [hy]), (0, Uy.useEffect)((() => () => {
        mb.gameBridge.send("setShopOpen", !1), clearTimeout(Cy.current)
      }), []), (0, Uy.useEffect)((() => {
        Vy.current = oy
      }), [oy]), (0, Uy.useEffect)((() => {
        if (null === gb) return;
        return (0, iU.e)("pointerdown", (yb => {
          const bb = yb.target;
          null !== bb && void 0 !== bb && bb.closest(".ShopItem") || Oy(null)
        }))
      }), [gb]);
      const uy = yb => {
          ey((bb => ({
            ...bb,
            ...yb
          })))
        },
        rb = yb => {
          var bb;
          clearTimeout(null === (bb = oy.onBoughtInfo) || void 0 === bb ? void 0 : bb.timeout);
          const Wy = setTimeout((() => {
            uy({
              onBoughtInfo: null
            })
          }), 3e3);
          qb.current = yb, uy({
            onBoughtInfo: {
              text: yb,
              timeout: Wy
            }
          })
        },
        Hy = yb => {
          const {
            shopInfo: bb,
            userInputsPerItem: Wy,
            redDotInfo: Uy,
            autoSelectCategory: fy
          } = function(yb, bb, Wy, Uy, hy, fy) {
            if ((0, Rb.D)(yb) || 0 === Object.keys(yb).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: YW.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Zy = My.r[My.u].adConfig.showRewardedAds,
              cb = {};
            let Py = null;
            for (const Ey in yb) {
              const bb = yb[Ey],
                Wy = {};
              let Uy = !1;
              for (const yb in bb.items) {
                const hy = bb.items[yb];
                (0, TW.k)(hy, Zy) && (Wy[yb] = hy, Uy = !0)
              }
              Uy && (cb[Ey] = {
                ...bb,
                items: Wy
              }, !0 === bb.autoSelectCategory && (Py = Ey))
            }
            const oy = {},
              By = (yb, bb, Uy, Zy) => {
                var cb, Py;
                const By = XW(yb, bb),
                  Ky = null !== (cb = Wy[By]) && void 0 !== cb ? cb : Wy[bb];
                if (null !== (Py = Zy.userInput) && void 0 !== Py && Py.type) switch (Zy.userInput.type) {
                  case "dropdown": {
                    var ey;
                    const yb = !Ky || !Zy.userInput.dropdownOptions.some((yb => (0, TW.d)(yb) === Ky)),
                      bb = Zy.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Uy || void 0 === Uy || null === (ey = Uy.userInput) || void 0 === ey ? void 0 : ey.type) || JSON.stringify(Uy.userInput.dropdownOptions) !== JSON.stringify(Zy.userInput.dropdownOptions)),
                      Wy = Zy.userInput,
                      hy = !(0, Rb.D)(Wy.initialValue) && Wy.dropdownOptions.some((yb => (0, TW.d)(yb) === Wy.initialValue));
                    var qb;
                    return void(yb || bb ? hy ? oy[By] = null !== (qb = Zy.userInput.initialValue) && void 0 !== qb ? qb : null : Zy.userInput.dropdownOptions.length > 0 ? oy[By] = (0, TW.d)(Zy.userInput.dropdownOptions[0]) : oy[By] = null : oy[By] = Ky)
                  }
                  case "text":
                  case "number":
                    var sy, Sy, Ey;
                    return void((null === Uy || void 0 === Uy ? void 0 : Uy.userInput) !== Zy.userInput ? oy[By] = null !== (sy = null !== (Sy = Zy.userInput.initialValue) && void 0 !== Sy ? Sy : Ky) && void 0 !== sy ? sy : "" : oy[By] = null !== (Ey = null !== Ky && void 0 !== Ky ? Ky : Zy.userInput.initialValue) && void 0 !== Ey ? Ey : "");
                  case "color":
                    var ly, mb, Cy;
                    return void((null === Uy || void 0 === Uy ? void 0 : Uy.userInput) !== Zy.userInput ? oy[By] = null !== (ly = null !== (mb = Zy.userInput.initialValue) && void 0 !== mb ? mb : Ky) && void 0 !== ly ? ly : "#000000" : oy[By] = null !== (Cy = null !== Ky && void 0 !== Ky ? Ky : Zy.userInput.initialValue) && void 0 !== Cy ? Cy : "#000000");
                  case "player": {
                    const yb = (0, TW.h)(hy, fy, Zy.userInput);
                    return void(Ky && yb.includes(Ky) ? oy[By] = Ky : oy[By] = yb.length > 0 ? yb[0] : null)
                  }
                }
              };
            for (const Ey in cb)
              for (const yb in cb[Ey].items) {
                var Ky;
                const Wy = cb[Ey].items[yb];
                By(Ey, yb, null === (Ky = bb[Ey]) || void 0 === Ky ? void 0 : Ky.items[yb], Wy)
              }
            const ey = YW.fromShopInfo(cb);
            for (const Ey in cb) {
              var qb;
              if (Uy.doesCategoryExist(Ey)) {
                (null === (qb = bb[Ey]) || void 0 === qb ? void 0 : qb.redDot) === cb[Ey].redDot && ey.updateCategoryRedDot(Ey, Uy.categoryHasRedDot(Ey));
                for (const yb in cb[Ey].items) {
                  var sy, Sy;
                  Uy.doesItemExist(Ey, yb) && (null === (sy = bb[Ey]) || void 0 === sy || null === (Sy = sy.items[yb]) || void 0 === Sy ? void 0 : Sy.redDot) === cb[Ey].items[yb].redDot && ey.updateItemRedDot(Ey, yb, Uy.itemHasRedDot(Ey, yb))
                }
              }
            }
            return {
              shopInfo: cb,
              userInputsPerItem: oy,
              redDotInfo: ey,
              autoSelectCategory: Py
            }
          }(yb, oy.shopInfo, oy.userInputsPerItem, oy.redDotInfo, Zy, cb), Py = {
            shopInfo: bb,
            userInputsPerItem: Wy,
            redDotInfo: Uy
          };
          if (null === fy || hy)
            if (bb[oy.selectedCategoryKey]) Py.selectedCategoryKey = oy.selectedCategoryKey;
            else {
              const yb = nW(bb);
              Py.selectedCategoryKey = yb.length > 0 ? yb[0] : null
            }
          else Py.selectedCategoryKey = fy;
          return 0 === Object.keys(bb).length && hy && Gy.d.set({
            openEverythingMenuName: null
          }), Py
        },
        ab = (yb, bb) => {
          if (null === bb || !yb.shopInfo[bb]) return yb;
          let Wy = yb.redDotInfo;
          return Wy.categoryHasRedDot(bb) && (Wy.updateCategoryRedDot(bb, !1), Wy = Wy.shallowCopy()), {
            ...yb,
            selectedCategoryKey: bb,
            redDotInfo: Wy
          }
        },
        Fy = yb => {
          ey((bb => ab(bb, yb)))
        };
      (0, eb.i)(MW.m, (() => {
        ey((yb => {
          const bb = (0, MW.o)(nW(yb.shopInfo), yb.selectedCategoryKey, (bb => (0, MW.k)(yb.shopInfo[bb].items)));
          return bb === yb.selectedCategoryKey ? yb : ab(yb, bb)
        }))
      })), (0, eb.i)("showShopFromServer", (yb => {
        let {
          toggle: bb,
          hN: Wy
        } = yb;
        Wy && Fy(Wy), 0 === Object.keys(oy.shopInfo).length || bb && hy ? Gy.d.set({
          openEverythingMenuName: null
        }) : Gy.d.set({
          openEverythingMenuName: db.o.SHOP
        })
      })), (0, eb.i)("closeShopOnDamaged", (() => {
        hy && Gy.d.set({
          openEverythingMenuName: null
        })
      })), (0, eb.i)("overShopInfo", (yb => {
        rb(yb)
      })), (0, sy.g)("currencyAmounts", (yb => {
        var bb;
        const Wy = Ty.current;
        Wy && (null === yb || void 0 === yb || null === (bb = yb[Wy.currency]) || void 0 === bb ? void 0 : bb.amount) === Wy.amountBefore ? uy({
          currencyAmounts: yb
        }) : (Ty.current = null, uy({
          currencyAmounts: yb,
          awaitingPurchase: !1
        }))
      })), (0, sy.g)("shopInfo", (yb => {
        uy({
          ...Hy(yb),
          awaitingPurchase: !1
        })
      }));
      const py = (0, Uy.useRef)({
        playerIds: Zy,
        localPlayerId: cb
      });
      (0, Uy.useEffect)((() => {
        py.current.playerIds === Zy && py.current.localPlayerId === cb || (py.current = {
          playerIds: Zy,
          localPlayerId: cb
        }, ey((yb => {
          const bb = Hy(yb.shopInfo);
          return {
            ...yb,
            ...bb
          }
        })))
      }), [Zy, cb]);
      const Ly = oy.selectedCategoryKey,
        jb = (yb, bb) => {
          var Wy, Uy;
          return (isNaN(bb) || (0, Rb.D)(yb.currency) || uW(oy.currencyAmounts, yb.currency) && bb <= oy.currencyAmounts[yb.currency].amount) && (null === (Wy = yb.canBuy) || void 0 === Wy || Wy) && !(null !== (Uy = yb.hidden) && void 0 !== Uy && Uy)
        },
        Dy = (yb, bb) => {
          var Wy, Uy, hy;
          const Zy = XW(Ly, yb),
            cb = oy.shopInfo[Ly].items[yb],
            Ky = oy.userInputsPerItem[Zy],
            ey = (0, TW.b)(cb, Ky),
            qb = jb(cb, ey),
            sy = cb.enchant,
            Sy = sy ? (0, Qy.nb)(null !== (Wy = cb.customTitle) && void 0 !== Wy ? Wy : yb, {
              colour: Qy.ib[sy.tier]
            }) : null !== (Uy = cb.customTitle) && void 0 !== Uy ? Uy : yb,
            Jy = bb => {
              const Wy = null !== bb && void 0 !== bb ? bb : Ky,
                Uy = void 0 !== bb ? (0, TW.b)(cb, bb) : ey;
              jb(cb, Uy) && null !== Wy && ((yb, bb, Wy) => {
                const Uy = oy.selectedCategoryKey,
                  hy = XW(Uy, yb),
                  fy = null !== Wy && void 0 !== Wy ? Wy : oy.userInputsPerItem[hy],
                  Zy = {
                    categoryKey: Uy,
                    itemKey: yb,
                    userInput: fy
                  };
                if (bb.isRewardedAd) {
                  if (Date.now() - ly.current < 5e3) return;
                  (0, ny.V)((() => {
                    var Wy, Uy, fy;
                    console.log("bought rewarded ad");
                    const cb = Zy.categoryKey ? null === (Wy = Vy.current.shopInfo[Zy.categoryKey]) || void 0 === Wy ? void 0 : Wy.items[yb] : null;
                    cb && cb.isRewardedAd ? (null === (Uy = bb.userInput) || void 0 === Uy ? void 0 : Uy.type) === (null === cb || void 0 === cb || null === (fy = cb.userInput) || void 0 === fy ? void 0 : fy.type) ? (Zy.userInput = Vy.current.userInputsPerItem[hy], mb.gameBridge.send("buyShopItem", Zy), bb.onBoughtMessage && rb(bb.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out")
                  })), ly.current = Date.now()
                } else {
                  mb.gameBridge.send("buyShopItem", Zy), uy({
                    awaitingPurchase: !0
                  }), clearTimeout(Cy.current), Cy.current = setTimeout((() => {
                    Ty.current = null, uy({
                      awaitingPurchase: !1
                    })
                  }), 1e3);
                  const yb = (0, TW.b)(bb, fy);
                  if (Ty.current = null, !isNaN(yb) && uW(oy.currencyAmounts, bb.currency)) {
                    0 !== yb && (Ty.current = {
                      currency: bb.currency,
                      amountBefore: oy.currencyAmounts[bb.currency].amount
                    });
                    const Wy = {
                      ...oy.currencyAmounts
                    };
                    Wy[bb.currency].amount -= yb, uy({
                      currencyAmounts: Wy
                    })
                  }
                  bb.onBoughtMessage && rb(bb.onBoughtMessage)
                }
              })(yb, cb, bb);
              let hy = oy.redDotInfo;
              hy.itemHasRedDot(Ly, yb) && (hy.updateItemRedDot(Ly, yb, !1), hy = hy.shallowCopy()), uy({
                redDotInfo: hy
              })
            };
          return (0, By.jsxs)("div", {
            className: fy()("ShopItem", {
              ShopItemNoInput: !cb.userInput,
              ShopItemNoInputCanBuy: !cb.userInput && qb,
              ShopItemNoInputSelected: cb.isSelected,
              ShopItemEnchant: !!sy
            }),
            "data-pad-focusable": !cb.userInput || void 0,
            "data-pad-unavailable": !cb.userInput && !qb || void 0,
            "data-pad-repeat": null !== (hy = (0, MW.d)(cb)) && void 0 !== hy ? hy : void 0,
            "data-pad-repeat-wait": oy.awaitingPurchase || void 0,
            onClick: () => {
              if (sy && Ry.current) {
                if (gb !== Zy) return void Oy(Zy);
                Oy(null)
              }
              cb.userInput || Jy()
            },
            onPointerDown: yb => {
              sy && (Ry.current = (0, JW.v)(yb))
            },
            onPointerEnter: yb => {
              sy && !(0, JW.v)(yb) && Oy(Zy)
            },
            onPointerLeave: yb => {
              sy && !(0, JW.v)(yb) && Oy((yb => yb === Zy ? null : yb))
            },
            style: {
              zIndex: Object.keys(oy.shopInfo[Ly].items).length - bb
            },
            children: [oy.redDotInfo.itemHasRedDot(Ly, yb) && (0, By.jsx)(Py.d, {
              top: "-6px",
              right: "-6px"
            }), cb.badge && (0, By.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, By.jsx)("div", {
                className: fy()("ShopBadgeMain", cb.badge.type),
                children: (0, By.jsx)(GW.d, {
                  text: cb.badge.text
                })
              })
            }), (0, By.jsx)("div", {
              className: "ShopItemLeft",
              children: cb.image && (0, By.jsx)(HW, {
                item: cb,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, By.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, By.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, By.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, By.jsx)(GW.d, {
                    text: Sy
                  })
                }), (0, By.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, By.jsx)(GW.d, {
                    text: cb.description
                  })
                })]
              }), cb.userInput && (0, By.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: yb => {
                  yb.stopPropagation()
                },
                children: [(0, By.jsx)(pW, {
                  item: cb,
                  currInput: Ky,
                  updateInput: bb => {
                    ((yb, bb, Wy) => {
                      const Uy = XW(yb, bb),
                        hy = {
                          ...oy.userInputsPerItem
                        };
                      hy[Uy] = Wy, uy({
                        userInputsPerItem: hy
                      })
                    })(Ly, yb, bb)
                  },
                  onSubmit: yb => {
                    Jy(yb)
                  }
                }), ("dropdown" !== cb.userInput.type || !cb.userInput.autoSubmit) && (0, By.jsx)(Ey.f, {
                  className: "ItemCostButton",
                  disabled: !qb && null !== Ky,
                  onClick: () => {
                    Jy()
                  },
                  children: (0, By.jsx)(FW, {
                    item: cb,
                    cost: ey,
                    currencyAmounts: oy.currencyAmounts
                  })
                })]
              })]
            }), !cb.userInput && (0, By.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, By.jsx)(FW, {
                item: cb,
                cost: ey,
                currencyAmounts: oy.currencyAmounts
              })
            }), sy && gb === Zy && (0, By.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, By.jsx)(GW.d, {
                text: Sy
              }), (0, By.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, By.jsx)(GW.d, {
                  text: (0, VW.b)("", sy.enchantments, sy.enchantmentData)
                })
              })]
            })]
          }, Zy)
        };
      return (0, By.jsx)(lW.d, {
        className: "Menu ShopBody",
        show: hy,
        children: 0 !== Object.keys(oy.shopInfo).length && (0, By.jsxs)(By.Fragment, {
          children: [(0, By.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, By.jsx)(Ky, {
              items: nW(oy.shopInfo).map((yb => {
                var bb;
                return {
                  id: yb,
                  title: null !== (bb = oy.shopInfo[yb].customTitle) && void 0 !== bb ? bb : yb,
                  redDot: oy.redDotInfo.categoryHasRedDot(yb)
                }
              })),
              selectedItemId: Ly,
              onClick: Fy,
              padStartsOnTab: (0, MW.h)(Ly)
            }), (0, By.jsx)("div", {
              className: "MenuSideBarFooter",
              children: oy.currencyAmounts && Object.keys(oy.currencyAmounts).map((yb => {
                var bb;
                const Wy = oy.currencyAmounts[yb];
                return Wy.hidden ? null : (0, By.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (vb ? "SmallText" : ""),
                  children: [(0, By.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, By.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: Wy.iconColour
                      },
                      children: (0, By.jsx)(DW, {
                        iconName: Wy.icon
                      })
                    }), "\xa0", (0, CW.b)(Wy.amount, 6)]
                  }), (null === (bb = Wy.subtext) || void 0 === bb ? void 0 : bb.length) > 0 && (0, By.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, By.jsx)(GW.d, {
                      text: Wy.subtext
                    })
                  })]
                }, yb)
              }))
            })]
          }), (0, By.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, By.jsx)("div", {
              className: fy()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== oy.onBoughtInfo
              }),
              children: (0, By.jsx)(GW.d, {
                text: qb.current
              })
            }), (0, By.jsx)("div", {
              className: "ShopItemsWrapper",
              children: (0, By.jsxs)("div", {
                className: "ShopItemsInner",
                children: [(null === (bb = oy.shopInfo[Ly]) || void 0 === bb ? void 0 : bb.description) && (0, By.jsx)("div", {
                  className: "ShopCategoryDescription",
                  children: (0, By.jsx)(GW.d, {
                    text: oy.shopInfo[Ly].description
                  })
                }), hy && (0, By.jsx)("div", {
                  className: "ShopItems",
                  ref: Sy,
                  "data-pad-initial-area": !0,
                  children: nW(null === (Wy = oy.shopInfo[Ly]) || void 0 === Wy ? void 0 : Wy.items).map(((yb, bb) => Dy(yb, bb)))
                })]
              })
            })]
          })]
        })
      })
    }));

    function HW(yb) {
      let {
        item: bb,
        minWidth: Wy,
        minHeight: Uy
      } = yb;
      const {
        image: hy,
        schematicId: fy,
        imageColour: Zy
      } = bb;
      if (fy) return (0, By.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Wy}rem`,
          height: `${Uy}rem`
        },
        children: (0, By.jsx)(OW.d, {
          game: {
            schematicId: fy
          }
        })
      });
      var Py, oy;
      if ((0, gU.h)(hy)) return (0, By.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Wy}rem`,
          height: "0",
          minHeight: `${Uy}rem`
        },
        children: (0, By.jsx)(gU.d, {
          itemName: hy,
          amount: null !== (Py = bb.amount) && void 0 !== Py ? Py : 0,
          amountFontSize: Uy / 4 + "rem",
          enchantmentTier: null === (oy = bb.enchant) || void 0 === oy ? void 0 : oy.tier
        })
      });
      const Ky = hy.slice(-4);
      return ".jpg" === Ky || ".png" === Ky ? (0, By.jsx)(aU, {
        image: hy,
        minWidth: Wy
      }) : (0, By.jsx)(cb.e, {
        name: hy,
        className: "SelectedItemImage",
        style: {
          color: Zy
        }
      })
    }

    function aU(yb) {
      let {
        image: bb,
        minWidth: Wy
      } = yb;
      const {
        gameNameWithVariation: Uy
      } = (0, Nb.j)("connectedGame"), hy = bb.endsWith(".jpg");
      return (0, By.jsx)("img", {
        className: fy()({
          ShopPixelImage: !hy
        }),
        style: {
          width: `${hy?1.6*Wy:Wy}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Qy.Rb)(Uy)}/${bb}`,
        alt: bb,
        draggable: !1
      })
    }

    function FW(yb) {
      let {
        item: bb,
        cost: Wy,
        currencyAmounts: Uy
      } = yb;
      const hy = !isNaN(Wy) && 0 !== Wy && uW(Uy, bb.currency);
      let fy = null;
      return bb.buyButtonText ? fy = bb.buyButtonText : hy ? (fy = Wy, bb.sell && (fy = -1 * Wy), fy = fy.toString()) : 0 === Wy ? fy = "Free" : bb.isRewardedAd && (fy = "Watch ad"), (0, Rb.D)(fy) || " " === fy ? null : (0, By.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [hy && (0, By.jsx)("div", {
          style: {
            color: Uy[bb.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, By.jsx)(DW, {
            iconName: Uy[bb.currency].icon
          })
        }), (0, By.jsx)("div", {
          className: "BuyItemCost",
          children: (0, By.jsx)(GW.d, {
            text: fy
          })
        })]
      })
    }

    function pW(yb) {
      let {
        item: bb,
        currInput: Wy,
        updateInput: hy,
        onSubmit: fy
      } = yb;
      const {
        t: cb
      } = (0, Zy.D)(), Py = (0, Uy.useRef)(null);
      if ((0, Uy.useEffect)((() => {
          const yb = Py.current;
          yb && yb.value !== Wy && document.activeElement !== yb && (yb.value = null !== Wy && void 0 !== Wy ? Wy : "")
        }), [Wy]), !bb.userInput) return null;
      let oy = bb.userInput;
      if (ly.featureFlags.sanitizeShopInput && "text" === bb.userInput.type && (oy = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === oy.type || "number" === oy.type) {
        var Ky, ey;
        console.assert(void 0 !== Wy, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(bb)}`);
        const yb = "text" === oy.type && oy.wordCharsOnly;
        return (0, By.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, By.jsx)(Vy.c, {
            className: "ShopItemUserInputText",
            placeholderText: cb(oy.placeholderText),
            defaultValue: Wy,
            domRef: Py,
            onValueChange: (bb, Wy) => {
              !0 === yb && (bb = (0, vU.gb)(bb)), Py.current.value = bb, hy(bb)
            },
            onEnter: fy,
            type: oy.type
          }, (null !== (Ky = oy.initialValue) && void 0 !== Ky ? Ky : "") + (null !== (ey = oy.placeholderText) && void 0 !== ey ? ey : ""))
        })
      }
      if ("dropdown" === oy.type) {
        console.assert(void 0 !== Wy, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(bb)}`);
        const yb = oy.autoSubmit;
        return (0, By.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, By.jsx)(Zb.c, {
            options: oy.dropdownOptions.map((yb => (0, TW.d)(yb))),
            value: Wy,
            onChange: bb => {
              let {
                value: Wy
              } = bb;
              hy(Wy), yb && fy(Wy)
            }
          })
        })
      }
      return "player" === oy.type ? (0, By.jsx)(LW, {
        userInput: oy,
        currInput: Wy,
        updateInput: hy
      }) : "color" === oy.type ? (0, By.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, By.jsx)("input", {
          type: "color",
          value: Wy,
          onChange: yb => {
            hy(yb.target.value)
          }
        })
      }) : null
    }

    function LW(yb) {
      let {
        userInput: bb,
        currInput: Wy,
        updateInput: Uy
      } = yb;
      const hy = (0, Nb.j)("players"),
        fy = (0, Nb.j)("hiddenPlayerNames"),
        Zy = (0, TW.h)(hy.ids, hy.localId, bb);
      return (0, By.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, By.jsx)(Zb.c, {
          options: Zy.map((yb => {
            const {
              name: bb
            } = hy.byId[yb];
            return {
              value: yb,
              label: null === bb ? "" : (0, RW.g)(bb, fy)
            }
          })),
          value: Wy,
          onChange: yb => {
            let {
              value: bb
            } = yb;
            Uy(bb)
          }
        })
      })
    }

    function QW(yb) {
      let {
        ids: bb
      } = yb;
      return bb
    }

    function jU(yb) {
      let {
        localId: bb
      } = yb;
      return bb
    }

    function DW(yb) {
      let {
        iconName: bb
      } = yb;
      return mb.gameBridge.lookup("isItemName", bb) ? (0, By.jsx)(gU.d, {
        itemName: bb,
        amount: 1
      }) : (0, By.jsx)(cb.e, {
        name: bb,
        className: "2x"
      })
    }
    var tU = Wy(1458);
    const wW = (0, Wy(1245).i)((yb => yb.PadLobbyShortcuts)),
      kU = (0, Uy.lazy)((() => Promise.resolve().then((() => Wy(3856))).then((yb => ({
        default: yb.Lobbyleaderboard
      })))));

    function NW(yb) {
      let {
        show: bb
      } = yb;
      return bb ? (0, By.jsxs)(By.Fragment, {
        children: [(0, By.jsx)(wW, {}), (0, By.jsx)(Uy.Suspense, {
          fallback: (0, By.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, By.jsx)(Jy.e, {})
          }),
          children: (0, By.jsx)(kU, {})
        })]
      }) : null
    }
    var zU = Wy(1397),
      IW = Wy(2354),
      xU = Wy(1496),
      AW = Wy(2157),
      dW = Wy(1331),
      yh = Wy(1278),
      bh = Wy(2326),
      WU = Wy(1771),
      UU = Wy(2346),
      hU = Wy(1921);
    const fU = "storeRecentGiftRecipients",
      ZU = new Map;

    function ch() {
      try {
        const yb = Mb.e.getItem(fU);
        return Array.isArray(yb) ? yb.filter((yb => "string" === typeof(null === yb || void 0 === yb ? void 0 : yb.name) && yb.name.length > 0)).map((yb => ({
          name: yb.name,
          cosmetics: yb.cosmetics && "object" === typeof yb.cosmetics ? yb.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function PU(yb) {
      var bb;
      const [Wy, hy] = (0, Uy.useState)(""), [fy, Zy] = (0, Uy.useState)("search"), [cb, Py] = (0, Uy.useState)(null), [oy, By] = (0, Uy.useState)(null), Ky = (0, Uy.useRef)(null), ey = (0, Uy.useRef)(null);
      (0, Uy.useEffect)((() => () => {
        Ky.current && clearTimeout(Ky.current)
      }), []);
      const qb = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.name) && void 0 !== bb ? bb : null;

      function sy() {
        Ky.current && (clearTimeout(Ky.current), Ky.current = null)
      }(0, Uy.useEffect)((() => {
        if (null === qb || yb === Yy.NULL_USER_CONTEXT) return;
        const bb = qb.toLowerCase();
        if (bb === yb.getPlayerName().toLowerCase()) return void By({
          name: qb,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Wy = ZU.get(bb);
        if (Wy) return void By({
          name: qb,
          result: Wy
        });
        let Uy = !1;
        return async function(yb, bb) {
          try {
            const Wy = await (0, Yy.postJsonWithMetricsCookiesAndJsonResponse)(`${Xy.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
              giftRecipientName: bb
            }, {
              retries: 1
            }, yb.getMetricsCookies());
            if ("boolean" !== typeof(null === Wy || void 0 === Wy ? void 0 : Wy.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Wy)}`);
            return Wy
          } catch (Wy) {
            return console.error("Failed to look up gift recipient:", Wy), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(yb, qb).catch((yb => (console.error("Gift recipient lookup failed:", yb), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((yb => {
          !0 !== yb.giftRecipientFound && "store:giftRecipientLookupFailed" === yb.giftRecipientError || ZU.set(bb, yb), Uy || By({
            name: qb,
            result: yb
          })
        })), () => {
          Uy = !0
        }
      }), [qb, yb]);
      const Sy = (0, Uy.useMemo)((() => {
        const yb = Wy.trim();
        if (!yb) return {
          status: "none"
        };
        if (!cb || cb.name !== yb || (null === oy || void 0 === oy ? void 0 : oy.name) !== cb.name) return {
          status: "pending",
          name: yb
        };
        const bb = oy.result;
        return !1 === bb.giftRecipientFound ? {
          status: "error",
          name: cb.name,
          error: bb.giftRecipientError
        } : {
          status: "found",
          name: bb.giftRecipientName,
          ownedPacks: bb.giftRecipientOwnedPacks,
          superRankDaysLeft: bb.giftRecipientSuperRankDaysLeft
        }
      }), [Wy, cb, oy]);
      (0, Uy.useEffect)((() => {
        "found" === Sy.status && "typed" === (null === cb || void 0 === cb ? void 0 : cb.source) && ey.current !== Sy.name && (ey.current = Sy.name, (0, Ny.f)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Sy, cb]);
      const Ey = (null === oy || void 0 === oy ? void 0 : oy.name) === (null === cb || void 0 === cb ? void 0 : cb.name) ? null === oy || void 0 === oy ? void 0 : oy.result : null,
        ly = !0 === (null === Ey || void 0 === Ey ? void 0 : Ey.giftRecipientFound) ? Ey.giftRecipientCosmetics : null;
      return {
        query: Wy,
        via: fy,
        recipient: Sy,
        recipientCosmetics: ly,
        type: function(yb) {
          hy(yb), Zy("search"), sy();
          const bb = yb.trim();
          bb ? Ky.current = setTimeout((() => {
            Py({
              name: bb,
              source: "typed"
            })
          }), 400) : Py(null)
        },
        choose: function(yb, bb) {
          sy(), hy(yb), Zy("typed" === bb ? "search" : "prefilled" === bb ? "prefilled" : "suggestion"), Py({
            name: yb,
            source: bb
          }), "typed" !== bb && "prefilled" !== bb && (0, Ny.f)({
            id: "store.gift_recipient",
            value: bb
          })
        },
        clear: function() {
          sy(), hy(""), Zy("search"), Py(null)
        },
        recordGift: function(yb, bb) {
          ! function(yb) {
            ZU.delete(yb.toLowerCase())
          }(yb), By((Wy => {
            if (!Wy || Wy.name.toLowerCase() !== yb.toLowerCase() || !0 !== Wy.result.giftRecipientFound || "superRank" === bb) return Wy;
            const Uy = Wy.result.giftRecipientOwnedPacks;
            return {
              ...Wy,
              result: {
                ...Wy.result,
                giftRecipientOwnedPacks: Uy.includes(bb) ? Uy : [...Uy, bb]
              }
            }
          }))
        }
      }
    }
    var oU = Wy(1912),
      BU = Wy(3865),
      KU = Wy(2431),
      eU = Wy(2435);
    const qh = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var sU = Wy(1885),
      SU = Wy(530),
      EU = Wy(1461),
      lU = Wy(1951),
      mh = Wy(2078);

    function CU(yb) {
      let {
        cosmetics: bb
      } = yb;
      return (0, By.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, By.jsx)(lU.b, {
          cosmetics: bb
        })
      })
    }

    function TU(yb, bb) {
      var Wy, Uy;
      const hy = null !== (Wy = yb.friend) && void 0 !== Wy ? Wy : {
        isError: !1,
        name: yb.name,
        ranks: [],
        cosmetics: null !== (Uy = yb.cosmetics) && void 0 !== Uy ? Uy : {},
        nameColour: SU.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return bb ? {
        ...hy,
        cosmetics: bb
      } : hy
    }

    function VU(yb) {
      let {
        recipient: bb
      } = yb;
      return "pending" === bb.status ? (0, By.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, By.jsx)(Jy.e, {})
      }) : "found" === bb.status ? (0, By.jsx)(cb.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function JU(yb) {
      var bb;
      let {
        selfName: Wy,
        giftRecipient: hy,
        suggestionsVersion: Py,
        pulseSignal: oy,
        disabled: Ky
      } = yb;
      const {
        t: ey
      } = (0, Zy.D)(), qb = (0, EU.i)(), sy = (0, Uy.useRef)(null), Sy = (0, Uy.useRef)(null), {
        query: mb,
        via: Cy,
        recipient: Ty,
        recipientCosmetics: Jy
      } = hy, gb = (0, hU.r)(mb), Gy = (0, Uy.useMemo)((() => {
        const yb = ly.featureFlags.useSocialFeatures ? qb.friends.filter((yb => !yb.isError)) : [];
        return (0, hU.o)({
          onlineFriends: (0, EU.e)(yb),
          recentRecipients: ch(),
          friends: yb,
          selfName: Wy,
          max: 8
        })
      }), [qb.friends, Wy, Py]), Oy = mb.trim().toLowerCase(), Ry = "search" !== Cy && Oy ? Gy.find((yb => yb.name.toLowerCase() === Oy)) : void 0, vb = Ry && "prefilled" === Cy ? [Ry, ...Gy.filter((yb => yb !== Ry))] : Gy, ib = "" !== Oy && !Ry, My = ib ? mb : "", Yy = vb.length > 0;
      (0, Uy.useEffect)((() => {
        sy.current && sy.current.value !== My && (sy.current.value = My)
      }), [My]), (0, Uy.useEffect)((() => {
        sy.current && (sy.current.disabled = Ky)
      }), [Ky, oy]);
      const Xy = (0, Uy.useRef)(0);

      function ny() {
        "self" !== gb && (0, Ny.f)({
          id: "store.mode",
          value: "self"
        }), hy.clear()
      }

      function uy(yb) {
        var bb, Wy;
        if (Ky) return;
        if (" " === yb.key || "Enter" === yb.key) return yb.preventDefault(), void yb.currentTarget.click();
        const Uy = Array.from(null !== (bb = null === (Wy = Sy.current) || void 0 === Wy ? void 0 : Wy.querySelectorAll("[role=radio]")) && void 0 !== bb ? bb : []),
          hy = Uy.indexOf(yb.currentTarget);
        let fy;
        "ArrowRight" === yb.key || "ArrowDown" === yb.key ? fy = Uy[(hy + 1) % Uy.length] : "ArrowLeft" === yb.key || "ArrowUp" === yb.key ? fy = Uy[(hy - 1 + Uy.length) % Uy.length] : "Home" === yb.key ? fy = Uy[0] : "End" === yb.key && (fy = Uy[Uy.length - 1]), fy && (yb.preventDefault(), fy.focus(), fy.click())
      }(0, Uy.useEffect)((() => {
        var yb;
        oy > Xy.current && !Ky && (Xy.current = oy, null === (yb = sy.current) || void 0 === yb || yb.focus())
      }), [oy, Ky]);
      const rb = "self" === gb,
        ab = null !== (bb = null === Ry || void 0 === Ry ? void 0 : Ry.name) && void 0 !== bb ? bb : null,
        Fy = "error" === Ty.status ? Ty.error : null,
        py = "store:giftRecipientLookupFailed" === Fy;
      return (0, By.jsxs)("div", {
        className: fy()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Ky,
          StoreRecipientStripNoChips: !Yy
        }),
        children: [(0, By.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: ey("store:buyingFor")
        }), (0, By.jsxs)("div", {
          ref: Sy,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": ey("store:whoIsItFor"),
          children: [(0, By.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": rb,
            tabIndex: Ky || !rb && null !== ab ? -1 : 0,
            className: fy()("StoreRecipientMe", {
              StoreRecipientChecked: rb
            }),
            onClick: () => {
              Ky || ny()
            },
            onKeyDown: uy,
            children: [(0, By.jsx)(cb.e, {
              name: "user"
            }), " ", ey("store:me")]
          }), Yy && (0, By.jsx)("div", {
            className: "StoreRecipientChips",
            children: vb.map((yb => {
              const bb = yb === Ry;
              return (0, By.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": bb,
                tabIndex: !Ky && bb ? 0 : -1,
                title: yb.name,
                className: fy()("StoreRecipientChip", {
                  StoreRecipientChecked: bb
                }),
                onClick: () => {
                  Ky || function(yb) {
                    "gift" !== gb && (0, Ny.f)({
                      id: "store.mode",
                      value: "gift"
                    }), hy.choose(yb.name, yb.kind)
                  }(yb)
                },
                onKeyDown: uy,
                children: (0, By.jsx)(mh.d, {
                  playerSocialPreview: TU(yb, bb ? Jy : null),
                  opensProfileCard: !1,
                  isFriend: null !== yb.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== yb.friend,
                  status: null === yb.friend ? null : void 0,
                  trailing: bb ? (0, By.jsx)(VU, {
                    recipient: Ty
                  }) : void 0
                })
              }, yb.name)
            }))
          })]
        }), (0, By.jsxs)("div", {
          className: fy()("StoreRecipientSearch", {
            StoreRecipientChecked: ib,
            StoreRecipientSearchPulse: oy > 0 && !ib,
            StoreRecipientSearchError: null !== Fy && !py
          }),
          onClick: () => {
            var yb;
            null === (yb = sy.current) || void 0 === yb || yb.focus()
          },
          children: [ib && "found" === Ty.status && Jy && (0, By.jsx)(CU, {
            cosmetics: Jy
          }), !(ib && "found" === Ty.status && Jy) && (0, By.jsx)(cb.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, By.jsx)(Vy.c, {
            className: "StoreRecipientSearchInput",
            domRef: sy,
            placeholderText: ey("store:searchName"),
            defaultValue: My,
            maxLength: Hy.k,
            onValueChange: function(yb) {
              "gift" !== gb && yb.trim() && (0, Ny.f)({
                id: "store.mode",
                value: "gift"
              }), hy.type(yb)
            },
            onEnter: () => {
              var yb;
              const bb = null === (yb = sy.current) || void 0 === yb ? void 0 : yb.value.trim();
              bb && hy.choose(bb, "typed")
            },
            blurOnEnter: !0
          }), ib && (0, By.jsx)(VU, {
            recipient: Ty
          }), ib && (0, By.jsx)("div", {
            ...(0, Ey.Q)({
              disabled: Ky
            }),
            "aria-label": ey("store:clearRecipient"),
            title: ey("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: yb => {
              yb.stopPropagation(), Ky || ny()
            },
            children: (0, By.jsx)(cb.e, {
              name: "xmark"
            })
          })]
        }, oy), Fy && (0, By.jsx)("div", {
          className: fy()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: py
          }),
          role: "status",
          children: ey(Fy)
        })]
      })
    }
    var gh = Wy(1929),
      GU = Wy(1865),
      OU = Wy(2880),
      RU = Wy(2452),
      vh = Wy(1901);
    const ih = Wy.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function MU() {
      (0, vh.h)(ih).catch((yb => {
        console.warn(yb)
      }))
    }

    function YU(yb) {
      let {
        onBack: bb,
        cta: Wy,
        recipient: hy,
        afterCta: fy
      } = yb;
      const {
        t: Py
      } = (0, Zy.D)(), [oy, Ky] = (0, Uy.useState)("starting"), ey = (0, Uy.useRef)(null), qb = (0, Sb.d)(), sy = (0, Uy.useRef)(null), Sy = (0, Uy.useCallback)((() => {
        const yb = ey.current;
        null !== yb.error && yb.load();
        const bb = yb.play();
        sy.current = bb, bb.catch((yb => {
          (0, OU.e)("Failed to play Super Rank video", yb), qb.current && sy.current === bb && Ky("failed")
        }))
      }), [qb]);
      return (0, Uy.useEffect)((() => {
        const yb = ey.current;
        let bb;

        function Wy() {
          clearTimeout(bb), bb = setTimeout(Sy, 3e3)
        }
        return Sy(), yb.addEventListener("ended", Wy), () => {
          clearTimeout(bb), yb.removeEventListener("ended", Wy)
        }
      }), [Sy]), (0, By.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, By.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, By.jsx)(Ey.d, {
            className: "StoreDetailBackButton",
            onClick: bb,
            padBack: !0,
            children: Py("general:back")
          }), (0, By.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, By.jsx)(cb.e, {
              name: "bolt"
            }), " ", Py("homePage:superRank")]
          }), hy]
        }), (0, By.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, By.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, By.jsx)("video", {
              ref: ey,
              src: `${Xy.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: ih,
              muted: !0,
              playsInline: !0,
              controls: "playing" === oy,
              onPlaying: () => {
                Ky("playing")
              },
              onError: () => {
                Ky("failed")
              }
            }), ("failed" === oy || "loading" === oy) && (0, By.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, By.jsx)(Ey.f, {
                ariaLabel: Py("general:play"),
                loading: "loading" === oy,
                onClick: () => {
                  Ky("loading"), Sy()
                },
                touchPressOn: "pointerup",
                children: (0, By.jsx)(cb.e, {
                  name: "play"
                })
              })
            })]
          }), (0, By.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, By.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, By.jsx)(RU.c, {})
            }), (0, By.jsxs)("div", {
              className: "StoreTileActions",
              children: [Wy, fy]
            })]
          })]
        })]
      })
    }
    var XU = Wy(2088),
      nU = Wy(2833),
      uU = Wy(2423);
    const rh = [SU.s.yellow, SU.s.green, SU.s.aqua, SU.s.blue, SU.s.purple, SU.s.red];

    function HU(yb) {
      return "needsRecipient" === yb || "lookingUp" === yb || "gift" === yb || "recipientOwns" === yb || "recipientSharesOwned" === yb
    }

    function ah(yb) {
      const {
        onKeyDown: bb,
        ...Wy
      } = (0, Ey.Q)();
      return {
        ...Wy,
        "aria-label": yb,
        onKeyDown: yb => {
          yb.target === yb.currentTarget && (null === bb || void 0 === bb || bb(yb))
        }
      }
    }

    function FU(yb) {
      let {
        text: bb
      } = yb;
      return (0, By.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(bb).map(((yb, bb) => (0, By.jsx)("span", {
          style: {
            color: rh[bb % rh.length]
          },
          children: yb
        }, bb)))
      })
    }
    const pU = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned"
    };

    function LU(yb) {
      let {
        state: bb,
        item: Wy,
        price: Uy,
        busy: hy,
        highlight: Py = !1,
        onAct: oy,
        onNeedRecipient: Ky,
        onLogin: ey = WU.e
      } = yb;
      const {
        t: qb
      } = (0, Zy.D)(), sy = "superRank" === Wy ? Fy.o.product.days : null, Sy = yb => null === sy ? qb(yb ? "general:gift" : "general:buy") : qb(yb ? "store:giftDays" : "store:buyDays", {
        days: sy
      }), ly = (yb, bb) => (0, By.jsxs)(By.Fragment, {
        children: [bb && (0, By.jsx)("span", {
          className: "StoreCtaIcon",
          children: bb
        }), null === yb && (0, By.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== yb && (0, By.jsx)("span", {
          className: "StoreCtaLabel",
          title: yb,
          children: yb
        }), (0, By.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, By.jsx)(GU.b, {
            amount: Uy
          })]
        })]
      });
      let mb;
      switch (bb) {
        case "pending":
          mb = (0, By.jsx)(Ey.i, {
            className: "StoreCtaButton",
            disabled: !0,
            children: ly(null)
          });
          break;
        case "login":
          mb = (0, By.jsx)(Ey.i, {
            className: "StoreCtaButton",
            onClick: ey,
            children: ly(qb("store:logIn"))
          });
          break;
        case "owned":
          mb = (0, By.jsx)(Ey.g, {
            className: "StoreCtaButton",
            onClick: () => {
              Gy.d.set({
                openEverythingMenuName: db.o.CUSTOMISATION
              })
            },
            children: (0, By.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, By.jsx)(cb.e, {
                name: "shirt"
              }), " ", qb("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
          mb = (0, By.jsx)(Ey.i, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, By.jsx)("span", {
              className: "StoreCtaLabel",
              children: qb(pU[bb])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          mb = (0, By.jsx)(Ey.i, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === bb || null === Uy,
            loading: "lookingUp" === bb || hy,
            onClick: oy,
            analyticsClick: {
              id: "store.gift",
              value: Wy
            },
            children: ly(Sy(!0), hU.e)
          });
          break;
        case "buy":
        case "recharge":
          mb = (0, By.jsx)(Ey.i, {
            className: "StoreCtaButton",
            loading: hy,
            disabled: null === Uy,
            onClick: oy,
            analyticsClick: {
              id: "store.buy",
              value: Wy
            },
            children: ly(Sy(!1))
          })
      }
      return (0, By.jsx)("div", {
        className: fy()("StoreCta", {
          StoreCtaHighlight: Py
        }),
        onClick: yb => {
          yb.stopPropagation(), "needsRecipient" === bb && Ky()
        },
        children: mb
      })
    }

    function QU() {
      const {
        t: yb
      } = (0, Zy.D)();
      return (0, By.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, By.jsxs)("li", {
          children: [(0, By.jsx)(cb.e, {
            name: "check"
          }), (0, By.jsx)(FU, {
            text: yb("store:colourfulNames")
          })]
        }), (0, By.jsxs)("li", {
          children: [(0, By.jsx)(cb.e, {
            name: "check"
          }), yb("store:perkCapes")]
        }), (0, By.jsxs)("li", {
          children: [(0, By.jsx)(cb.e, {
            name: "check"
          }), yb("store:perkNoAdverts")]
        }), (0, By.jsxs)("li", {
          children: [(0, By.jsx)(cb.e, {
            name: "check"
          }), yb("store:perkFriends", {
            count: (0, wy.b)(["super"])
          })]
        })]
      })
    }

    function jh(yb) {
      let {
        daysLeft: bb,
        totalDays: Wy,
        urgent: Uy
      } = yb;
      const {
        t: hy
      } = (0, Zy.D)(), cb = Wy > 0 ? Math.min(1, Math.max(.03, bb / Wy)) : 1;
      return (0, By.jsxs)("div", {
        className: fy()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Uy
        }),
        children: [(0, By.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === bb ? hy("store:oneDayLeft") : hy("store:daysLeft", {
            days: bb
          })
        }), (0, By.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, By.jsx)("i", {
            style: {
              width: 100 * cb + "%"
            }
          })
        })]
      })
    }

    function DU(yb) {
      let {
        state: bb,
        urgent: Wy,
        daysLeft: Uy,
        totalDays: hy,
        recipientSuperRankDaysLeft: Py,
        busy: oy,
        highlight: Ky,
        onOpen: ey,
        onAct: qb,
        onNeedRecipient: sy,
        onLogin: Sy
      } = yb;
      const {
        t: Ey
      } = (0, Zy.D)(), ly = HU(bb), {
        days: mb
      } = Fy.o.product, Cy = Ey("store:recipientHasSuperRank", {
        days: Py,
        giftDays: mb
      });
      return (0, By.jsxs)("div", {
        className: fy()("StoreTile StoreSuperRankTile", {
          StoreTileGift: ly,
          StoreSuperRankTileUrgent: "recharge" === bb && Wy,
          StoreSuperRankTileWithChip: ly && "gift" === bb && null !== Py,
          StoreSuperRankTileGiftReady: "gift" === bb
        }),
        ...ah(Ey("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: MU,
        onFocus: MU,
        onClick: ey,
        children: [(0, By.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${sU.b})`
          }
        }), ly && (0, By.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, By.jsxs)("div", {
          className: "StoreTileContent",
          children: [ly && "gift" === bb && null !== Py && (0, By.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Cy,
            children: Cy
          }), (0, By.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, By.jsx)(cb.e, {
              name: "bolt"
            }), " ", Ey("homePage:superRank")]
          }), ly && (0, By.jsx)("div", {
            className: "StoreTilePitch",
            children: Ey("store:giftPitch", {
              days: mb
            })
          }), "recharge" === bb && (0, By.jsx)(jh, {
            daysLeft: Uy,
            totalDays: hy,
            urgent: Wy
          }), (0, By.jsx)(QU, {}), (0, By.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, By.jsx)(LU, {
              state: bb,
              item: "superRank",
              price: Fy.o.price,
              busy: oy,
              highlight: Ky,
              onAct: qb,
              onNeedRecipient: sy,
              onLogin: Sy
            }), "needsRecipient" === bb && (0, By.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Ey("store:pickRecipientFirst")
            }), "recharge" === bb && Wy && (0, By.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Uy ? Ey("store:endsInOneDay") : Ey("store:endsInDays", {
                days: Uy
              })
            })]
          })]
        })]
      })
    }
    const th = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function wU(yb) {
      var bb;
      let {
        pack: Wy,
        state: hy,
        busy: Py,
        onOpen: oy,
        onAct: Ky,
        onNeedRecipient: ey,
        onLogin: qb
      } = yb;
      const {
        t: sy
      } = (0, Zy.D)(), Sy = zU.e[Wy], Ey = bh.n[Wy], ly = (0, sU.k)(Wy), mb = (0, Uy.useRef)(null);
      (0, uU.m)(Wy, mb);
      const Cy = HU(hy),
        Ty = null !== (bb = Sy.displayName) && void 0 !== bb ? bb : Wy,
        Vy = (0, nU.e)((() => {
          (0, XU.g)();
          const yb = (0, uU.h)(Wy);
          void 0 !== yb && (0, vh.d)((0, uU.e)(yb))
        })),
        [Jy] = (0, Uy.useState)(eU.i);
      return (0, By.jsxs)("div", {
        className: fy()("StoreTile StorePackTile", Sy.tier && th[Sy.tier], {
          StorePackTileOwned: "owned" === hy,
          StorePackTileRecipientOwns: "recipientOwns" === hy,
          StoreTileGift: Cy
        }),
        ...ah(Ty),
        ref: mb,
        "data-store-item": Wy,
        onClick: oy,
        onPointerMove: yb => {
          "mouse" !== yb.pointerType || 0 === yb.movementX && 0 === yb.movementY || Jy || Vy.start()
        },
        onPointerLeave: Vy.cancel,
        children: [Ey && (0, By.jsx)(Ey, {}), (0, By.jsx)("div", {
          className: "StorePackCharacters",
          children: ly.map((yb => (0, By.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,sU.f)(yb)})`
            }
          }, yb)))
        }), (0, By.jsx)("div", {
          className: "StoreTileScrim"
        }), Cy && (0, By.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, By.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, By.jsx)("div", {
            className: "StoreTileTitle",
            children: Ty
          }), (0, By.jsxs)("div", {
            className: "StoreTileMeta",
            children: [sy("store:itemCount", {
              count: (0, gh.b)(Wy)
            }), "owned" === hy && (0, By.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, By.jsx)(cb.e, {
                name: "check"
              }), " ", sy("general:owned")]
            })]
          }), (0, By.jsx)(LU, {
            state: hy,
            item: Wy,
            price: (0, Fy.h)(Wy),
            busy: Py,
            onAct: Ky,
            onNeedRecipient: ey,
            onLogin: qb
          })]
        })]
      })
    }
    var kh = Wy(2374),
      NU = Wy(1199);
    const zh = {
      standard: "StoreCharacterCardStandard",
      enhanced: "StoreCharacterCardEnhanced",
      premium: "StoreCharacterCardPremium"
    };

    function IU(yb) {
      var bb, Wy;
      let {
        tile: hy,
        busy: Py,
        highlight: oy,
        onAct: Ky,
        onNeedRecipient: ey,
        onLogin: qb
      } = yb;
      const {
        t: sy
      } = (0, Zy.D)(), {
        pack: Sy,
        state: Ey
      } = hy, ly = zU.e[Sy], mb = (0, zU.i)(Sy), Cy = bh.n[(0, sU.g)(Sy)], Ty = null !== (bb = ly.tier) && void 0 !== bb ? bb : "standard", Vy = (0, Uy.useRef)(null);
      return (0, NU.d)(Vy, "standard" !== Ty), (0, By.jsxs)("div", {
        ref: Vy,
        className: fy()("StoreCharacterCard", zh[Ty], {
          StoreCharacterCardOwned: "owned" === Ey || "recipientOwns" === Ey,
          StoreCharacterCardGift: HU(Ey)
        }),
        "data-store-item": Sy,
        children: [(0, By.jsxs)("div", {
          className: "StoreCharacterArt",
          children: [Cy && (0, By.jsx)(Cy, {
            simple: !0
          }), (0, By.jsx)("div", {
            className: "StoreCharacterHalo"
          }), (0, By.jsx)("div", {
            className: "StoreCharacterFigure",
            style: {
              backgroundImage: `url(${(0,sU.f)(mb)})`
            }
          }), "owned" === Ey && (0, By.jsx)("span", {
            className: "StoreCharacterOwned",
            title: sy("general:owned"),
            "aria-label": sy("general:owned"),
            children: (0, By.jsx)(cb.e, {
              name: "check"
            })
          })]
        }), (0, By.jsxs)("div", {
          className: "StoreCharacterPlate",
          children: [(0, By.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Wy = ly.displayName) && void 0 !== Wy ? Wy : Sy
          }), (0, By.jsx)(LU, {
            state: Ey,
            item: Sy,
            price: (0, Fy.h)(Sy),
            busy: Py,
            highlight: oy,
            onAct: Ky,
            onNeedRecipient: ey,
            onLogin: qb
          })]
        })]
      })
    }

    function xh(yb) {
      let {
        tiles: bb,
        busy: Wy,
        highlightItem: Uy,
        onAct: hy,
        onNeedRecipient: fy,
        onLogin: Zy
      } = yb;
      return (0, By.jsx)("div", {
        className: "StoreCharacterGrid",
        children: bb.map((yb => (0, By.jsx)(IU, {
          tile: yb,
          busy: Wy,
          highlight: Uy === yb.pack,
          onAct: () => {
            hy(yb.pack)
          },
          onNeedRecipient: fy,
          onLogin: () => {
            Zy(yb.pack)
          }
        }, yb.pack)))
      })
    }

    function AU(yb) {
      let {
        title: bb
      } = yb;
      return (0, By.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, By.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: bb
        })
      })
    }

    function dU(yb) {
      let {
        layout: bb,
        bundleGift: Wy,
        superRankDaysLeft: Uy,
        superRankTotalDays: hy,
        busy: fy,
        highlightItem: cb,
        onOpen: Py,
        onAct: oy,
        onNeedRecipient: Ky,
        onLogin: ey
      } = yb;
      const {
        t: qb
      } = (0, Zy.D)(), sy = bb.packs.filter((yb => void 0 === (0, zU.i)(yb.pack))), Sy = bb.packs.filter((yb => void 0 !== (0, zU.i)(yb.pack)));
      return (0, By.jsxs)(By.Fragment, {
        children: [(0, By.jsx)(kh.e, {
          className: "StoreSuperGems",
          gift: Wy
        }), (0, By.jsx)(AU, {
          title: qb("store:rank")
        }), (0, By.jsx)(DU, {
          state: bb.superRank.state,
          urgent: bb.superRank.urgent,
          daysLeft: Uy,
          totalDays: hy,
          recipientSuperRankDaysLeft: bb.recipientSuperRankDaysLeft,
          busy: fy,
          highlight: "superRank" === cb,
          onOpen: () => {
            Py("superRank")
          },
          onAct: () => {
            oy("superRank")
          },
          onNeedRecipient: Ky,
          onLogin: () => {
            ey("superRank")
          }
        }), (0, By.jsx)(AU, {
          title: qb("store:bundles")
        }), (0, By.jsx)("div", {
          className: "StorePackGrid",
          children: sy.map((yb => (0, By.jsx)(wU, {
            pack: yb.pack,
            state: yb.state,
            busy: fy,
            onOpen: () => {
              Py(yb.pack)
            },
            onAct: () => {
              oy(yb.pack)
            },
            onNeedRecipient: Ky,
            onLogin: () => {
              ey(yb.pack)
            }
          }, yb.pack)))
        }), (0, By.jsx)(AU, {
          title: qb("store:characters")
        }), (0, By.jsx)(xh, {
          tiles: Sy,
          busy: fy,
          highlightItem: cb,
          onAct: oy,
          onNeedRecipient: Ky,
          onLogin: ey
        })]
      })
    }

    function yf(yb) {
      let {
        state: bb,
        mode: Wy,
        giftName: Uy,
        busy: hy,
        highlight: fy,
        purchaseError: cb,
        onBack: Py,
        onChooseRecipient: oy,
        onAct: Ky,
        onLogin: ey
      } = yb;
      const {
        t: qb
      } = (0, Zy.D)();
      return (0, By.jsx)(YU, {
        onBack: Py,
        recipient: "gift" === Wy && (0, By.jsxs)(By.Fragment, {
          children: [Uy && (0, By.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: qb("store:giftFor", {
              name: Uy
            }),
            children: [hU.e, " ", qb("store:giftFor", {
              name: Uy
            })]
          }), !Uy && (0, By.jsxs)("div", {
            ...(0, Ey.Q)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: oy,
            children: [hU.e, " ", qb("store:chooseRecipient")]
          })]
        }),
        cta: (0, By.jsx)(LU, {
          state: bb,
          item: "superRank",
          price: Fy.o.price,
          busy: hy,
          highlight: fy,
          onAct: Ky,
          onNeedRecipient: oy,
          onLogin: ey
        }),
        afterCta: (0, By.jsx)(By.Fragment, {
          children: cb && (0, By.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: qb(cb)
          })
        })
      })
    }
    const bf = {
        kind: "board"
      },
      Wh = [...zU.p, ...zU.n];
    let Uh = !1;

    function hh(yb) {
      return "superRank" === yb.kind ? "superRank" : "pack" === yb.kind ? yb.pack : null
    }

    function fh(yb) {
      return "found" === yb.status || "error" === yb.status && "store:giftRecipientLookupFailed" === yb.error ? yb.name : null
    }(0, jb.q)(IW.prefetchPremiumCurrencyBundles);
    const Zh = (0, Uy.memo)((function(yb) {
      var bb, hy;
      let {
        show: cb
      } = yb;
      const {
        t: Py
      } = (0, Zy.D)(), {
        userContext: oy
      } = (0, qb.c)(), Ky = oy !== Yy.NULL_USER_CONTEXT, ey = PU(oy), [sy, Ey] = (0, Sy.d)(), {
        page: ly,
        urlMode: mb,
        goTo: Cy
      } = (0, oU.f)(), Ty = hh(ly), {
        openEverythingMenuName: Vy,
        gameState: Jy
      } = (0, Gy.h)(["openEverythingMenuName", "gameState"]), gb = null !== Vy;
      ! function(yb, bb) {
        const [hy] = (0, Uy.useState)(eU.i), [fy, Zy] = (0, Uy.useState)(!1);
        hy && bb && !fy && Zy(!0);
        const cb = (0, hW.q)(),
          Py = hy && fy && yb && !cb;
        (0, Uy.useEffect)((() => {
          if (!Py) return;
          let yb = null,
            bb = null,
            Uy = null;
          const hy = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, IW.isXsollaCheckoutInControl)(),
            fy = () => {
              var Wy;
              null === (Wy = Uy) || void 0 === Wy || Wy(), Uy = null, null !== yb && (clearTimeout(yb), yb = null), null !== bb && (clearTimeout(bb), bb = null)
            },
            Zy = () => {
              (0, BU.q)(!1), (0, BU.n)(!1), fy(), yb = setTimeout((() => {
                yb = null, Uy = (0, KU.c)((() => {
                  Uy = null, hy() ? Zy() : ((0, BU.q)(!0), bb = setTimeout((() => {
                    bb = null, Uy = (0, KU.c)((() => {
                      Uy = null, hy() ? Zy() : (0, BU.n)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Wy(3856))).then((yb => {
                    yb.startBackgroundGameSetup()
                  }), (yb => {
                    console.warn("Background game setup: its chunk failed to load", yb)
                  })))
                }))
              }), 2e3)
            };
          for (const Wy of qh) window.addEventListener(Wy, Zy, {
            capture: !0,
            passive: !0
          });
          return Zy(), () => {
            for (const yb of qh) window.removeEventListener(yb, Zy, {
              capture: !0
            });
            fy(), (0, BU.q)(!1), (0, BU.n)(!1)
          }
        }), [Py])
      }(cb && gb, "pack" === ly.kind);
      const Oy = "landingPage" === Jy;
      (0, Uy.useEffect)((() => {
        gb && (0, IW.prefetchPremiumCurrencyBundles)()
      }), [gb]), (0, Uy.useEffect)((() => {
        gb && !cb && Oy && (0, sU.o)()
      }), [gb, cb, Oy]);
      const [Ry, vb] = (0, Uy.useState)(0), [ib, My] = (0, Uy.useState)(null), [Xy, ny] = (0, Uy.useState)(null), [uy, rb] = (0, Uy.useState)(null), [Hy, ab] = (0, Uy.useState)(null), py = (0, Uy.useRef)(null), Ly = (0, Uy.useRef)(null), tb = (0, Uy.useRef)(!1), wy = (0, jb.C)(), kb = (0, Uy.useRef)(0), zb = (0, Uy.useRef)(!1);

      function Iy() {
        vb((yb => yb + 1))
      }(0, Uy.useEffect)((() => {
        if (cb) {
          if (Uh = !0, wy && wy.seq !== kb.current) {
            var yb, bb;
            kb.current = wy.seq;
            const Wy = (0, jb.c)(wy);
            mb || Cy(Wy), ab(wy.highlight && null !== (yb = null !== (bb = hh(Wy)) && void 0 !== bb ? bb : wy.openItem) && void 0 !== yb ? yb : null), ny(null), "gift" === wy.mode && wy.giftRecipientName ? ey.choose(wy.giftRecipientName, "prefilled") : "current" !== wy.mode && ey.clear(), "gift" !== wy.mode || wy.giftRecipientName || Iy(), (0, Ny.f)({
              id: "store.open",
              value: wy.source
            })
          } else zb.current || (0, Ny.f)({
            id: "store.open",
            value: "menuTab"
          });
          zb.current = !0
        } else zb.current = !1
      }), [cb, wy]), (0, Uy.useEffect)((() => {
        if (!Hy) return;
        const yb = setTimeout((() => {
          ab(null)
        }), 4e3);
        return () => {
          clearTimeout(yb)
        }
      }), [Hy]), (0, Uy.useEffect)((() => {
        const yb = py.current;
        var bb;
        if (cb && yb)
          if (Ty) Ly.current = Ty, null === (bb = yb.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === bb || bb.focus();
          else if (Ly.current) {
          var Wy;
          null === (Wy = yb.querySelector(`[data-store-item="${Ly.current}"]`)) || void 0 === Wy || Wy.focus(), Ly.current = null
        }
      }), [Ty, cb]), (0, Uy.useEffect)((() => {
        ny(null)
      }), [ey.query]), (0, Uy.useEffect)((() => {
        if (!uy) return;
        const yb = setTimeout((() => {
          rb(null)
        }), 8e3);
        return () => {
          clearTimeout(yb)
        }
      }), [uy]);
      const xb = oy.superRankInfo,
        Ay = xb ? (0, Qy.jc)(xb) : 0,
        dy = (0, hU.k)(Ay),
        yW = Ay > 0,
        bW = oy.isLoggedIn(),
        Wb = oy.getOwnedCosmeticPacks(),
        Ub = (0, hU.r)(ey.query),
        hb = (0, hU.i)({
          mode: Ub,
          loggedIn: Ky ? bW : null,
          hasSuperRank: yW,
          superRankDaysLeft: dy,
          ownedPacks: Wb,
          packs: Wh,
          recipient: ey.recipient
        });
      (0, Uy.useEffect)((() => {
        if (!bW || !cb) return;
        const yb = (0, jb.y)();
        var bb;
        yb && ("superRank" === (bb = yb.item) || Wh.includes(bb)) && ((0, Ny.f)({
          id: "store.login_resume",
          value: yb.item
        }), (0, jb.f)({
          mode: yb.mode,
          source: "loginResume",
          giftRecipientName: "gift" === yb.mode && yb.recipient ? yb.recipient : void 0,
          openItem: yb.item,
          highlight: !0
        }))
      }), [bW, cb]);
      const fb = (0, hU.s)({
        hasSuperRank: bW && yW,
        superRankDaysLeft: dy,
        openedThisSession: Uh || cb
      });
      if ((0, Uy.useEffect)((() => {
          (0, jb.u)(fb)
        }), [fb]), !cb || !(0, Dy.siteSupportsPurchases)()) return null;
      const Zb = Ey > sy && sy <= 700,
        cW = !Zb && Ey <= 420,
        Pb = "gift" === Ub ? fh(ey.recipient) : null,
        ob = null !== ib;

      function Bb(yb) {
        (0, jb.m)({
          item: yb,
          mode: Ub,
          recipient: "gift" === Ub ? ey.query.trim() : ""
        }), (0, WU.e)()
      }

      function Kb(yb, bb) {
        (0, Ny.f)({
          id: "store.purchase_done",
          value: `${bb?"gift":"self"}:${yb}`
        }), bb && (ey.recordGift(bb.name, yb), eb(bb))
      }

      function eb(yb) {
        ! function(yb) {
          try {
            Mb.e.setItem(fU, (0, hU.v)(ch(), yb))
          } catch {}
        }({
          name: yb.name,
          cosmetics: yb.cosmetics
        }), Cy(bf), rb((bb => {
          var Wy;
          return {
            name: yb.name,
            seq: (null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.seq) && void 0 !== Wy ? Wy : 0) + 1
          }
        }))
      }
      async function qW(yb) {
        var bb, Wy;
        if (tb.current) return;
        if (!bW) return void Bb(yb);
        ny(null), ab(null);
        const Uy = "gift" === Ub ? {
          name: fh(ey.recipient),
          cosmetics: ey.recipientCosmetics
        } : null;
        if (Uy && !Uy.name) return void Iy();
        const hy = "superRank" === yb ? Fy.o.id : (0, Fy.e)(yb);
        tb.current = !0;
        const fy = await (0, UU.b)(hy, null !== (bb = null === Uy || void 0 === Uy ? void 0 : Uy.name) && void 0 !== bb ? bb : null);
        if (tb.current = !1, !fy) return;
        My(yb);
        const Zy = await AW.d.purchase(hy, null !== (Wy = null === Uy || void 0 === Uy ? void 0 : Uy.name) && void 0 !== Wy ? Wy : null);
        My(null), Zy ? ny(Zy) : (Kb(yb, Uy), Uy || (await (0, dW.flushClientAnalyticsEvents)(), (0, xU.refreshWithoutConfirmation)("superRank" === yb ? "/super-rank-welcome" : `/pack-welcome/${yb}`)))
      }
      const sb = fy()("Store", {
        StoreGift: "gift" === Ub,
        StorePortrait: Zb,
        StoreCompact: cW
      });
      if ("pack" === ly.kind) {
        const yb = ly.pack,
          bb = hb.packs.find((bb => bb.pack === yb));
        return (0, By.jsx)("div", {
          ref: py,
          className: "CosmeticShopContainer",
          children: (0, By.jsx)(bh.h, {
            pack: yb,
            onBack: () => {
              Cy(bf)
            },
            onPurchased: bb => {
              Kb(yb, bb ? {
                name: bb,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Ub && Pb && bb && (0, By.jsxs)(By.Fragment, {
              children: [(0, By.jsx)(LU, {
                state: bb.state,
                item: yb,
                price: (Sb = yb, "superRank" === Sb ? Fy.o.price : (0, Fy.h)(Sb)),
                busy: ob,
                onAct: () => {
                  qW(yb)
                },
                onNeedRecipient: () => {
                  Cy(bf), Iy()
                }
              }), Xy && (0, By.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Py(Xy)
              })]
            }),
            ownedPacks: Wb,
            startAsGift: "gift" === Ub,
            initialGiftRecipient: "gift" === Ub ? null !== Pb && void 0 !== Pb ? Pb : ey.query.trim() : "",
            highlightCta: Hy === yb
          }, yb)
        })
      }
      var Sb;
      return "superRank" === ly.kind ? (0, By.jsx)("div", {
        ref: py,
        className: fy()(sb, "StoreDetailView"),
        children: (0, By.jsx)(yf, {
          state: hb.superRank.state,
          mode: Ub,
          giftName: Pb,
          busy: ob,
          highlight: "superRank" === Hy,
          purchaseError: Xy,
          onBack: () => {
            Cy(bf)
          },
          onChooseRecipient: () => {
            Cy(bf), Iy()
          },
          onAct: () => {
            qW("superRank")
          },
          onLogin: () => {
            Bb("superRank")
          }
        })
      }) : (0, By.jsxs)("div", {
        ref: py,
        className: sb,
        children: [(0, By.jsx)("div", {
          className: "StoreTopRow",
          children: (0, By.jsx)(JU, {
            selfName: Ky ? oy.getPlayerName() : "",
            giftRecipient: ey,
            suggestionsVersion: null !== (bb = null === uy || void 0 === uy ? void 0 : uy.seq) && void 0 !== bb ? bb : 0,
            pulseSignal: Ry,
            disabled: ob || !Ky
          })
        }), uy && (0, By.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            rb(null)
          },
          children: [(0, By.jsx)(yh.d, {
            showSignal: uy.seq
          }), hU.e, " ", Py("store:giftSent", {
            name: uy.name
          })]
        }, uy.seq), !uy && Xy && (0, By.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Py(Xy)
        }), (0, By.jsx)(dU, {
          layout: hb,
          bundleGift: "gift" === Ub ? {
            recipientName: Pb,
            lookingUp: "pending" === ey.recipient.status,
            busy: ob,
            onNeedRecipient: Iy,
            onSent: yb => {
              (0, Ny.f)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), eb({
                name: yb,
                cosmetics: ey.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: dy,
          superRankTotalDays: null !== (hy = null === xb || void 0 === xb ? void 0 : xb.superRankForDays) && void 0 !== hy ? hy : 0,
          busy: ob,
          highlightItem: Hy,
          onOpen: function(yb) {
            (0, Ny.f)({
              id: "store.item_open",
              value: yb
            }), Cy((0, jb.e)(yb))
          },
          onAct: qW,
          onNeedRecipient: Iy,
          onLogin: Bb
        })]
      })
    }));
    var cf = Wy(2152),
      Ph = Wy(7981),
      oh = Wy(2209),
      Bh = Wy(2072),
      Kh = Wy(2113),
      eh = Wy(2119),
      qf = Wy(2127),
      sh = Wy(2198),
      Sh = Wy(2189),
      Eh = Wy(2171),
      lh = Wy(1937),
      mf = Wy(1966),
      Ch = Wy(1956),
      Th = Wy(1676),
      Vh = Wy(2130),
      Jh = Wy(1970);

    function gf(yb) {
      let {
        show: bb
      } = yb;
      return bb ? (0, By.jsx)(Gh, {}) : null
    }

    function Gh() {
      const {
        t: yb
      } = (0, Zy.D)(), {
        followsLeader: bb
      } = (0, Bh.i)(), {
        loading: Wy,
        friends: hy,
        requests: Py,
        invites: oy
      } = (0, EU.i)(), {
        userContext: Ky
      } = (0, qb.c)(), [ey, sy] = (0, Uy.useState)(Jh.k);
      (0, Uy.useEffect)((() => {
        (0, Jh.c)()
      }), []);
      const Sy = Py.map((yb => yb.name)),
        {
          state: ly,
          recentRequesters: mb
        } = (0, Sh.k)(),
        Cy = new Map([...("loaded" === ly.status ? ly.recentPlayers : []).map((yb => [yb.preview.name, yb])), ...mb.map((yb => [yb.name, yb]))]),
        Ty = (0, Uy.useRef)(null),
        [gb, Gy] = (0, Uy.useState)(""),
        [Oy, Ry] = (0, Uy.useState)("Enter"),
        [vb, ib] = (0, Uy.useState)(null);

      function My() {
        gb && (Ry("Loading"), (0, Ch.k)(gb, "social_menu").then((yb => {
          if (Ty.current) switch (yb.kind) {
            case "sent":
              Ry("Success");
              break;
            case "becameFriends":
              Ry("BecameFriends");
              break;
            case "failed":
              ib(yb.message), Ry("Error")
          }
        })))
      }
      return (0, Uy.useEffect)((() => {
        if ("Enter" === Oy || "Loading" === Oy) return;
        const yb = setTimeout((() => {
          Ty.current.value = "", Gy(""), Ry("Enter")
        }), "Success" === Oy ? 1e3 : 4e3);
        return () => {
          clearTimeout(yb)
        }
      }), [Oy]), (0, By.jsx)("div", {
        className: "SocialMenu",
        children: (0, By.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, By.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, By.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, By.jsx)(qf.e, {
                label: yb("socialBar:addFriend")
              }), (0, By.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, By.jsxs)("div", {
                  className: fy()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Oy}`]: !0
                  }),
                  children: ["Loading" === Oy && (0, By.jsx)(Jy.e, {}), "Success" === Oy && (0, By.jsx)(cb.e, {
                    name: "check"
                  }), "BecameFriends" === Oy && (0, By.jsx)(By.Fragment, {
                    children: yb("socialBar:nowFriends", {
                      playerName: gb
                    })
                  }), "Error" === Oy && vb && (0, By.jsx)(By.Fragment, {
                    children: yb(vb.translationKey, vb.params)
                  })]
                }), (0, By.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, By.jsx)(Vy.c, {
                    className: "PlayerSearchInput",
                    placeholderText: yb("socialBar:enterPlayerName"),
                    domRef: Ty,
                    onValueChange: yb => {
                      Gy((0, Hy.r)(yb)), Ty.current.value = (0, Hy.r)(yb)
                    },
                    onEnter: () => {
                      gb && (0, Ny.f)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), My()
                    }
                  }), (0, By.jsxs)(Ey.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      My()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, By.jsx)(cb.e, {
                      name: "user-plus"
                    }), " ", yb("socialBar:sendRequest")]
                  })]
                })]
              }), (0, By.jsx)(Vh.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), oy.length > 0 && (0, By.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, By.jsx)(qf.e, {
                label: yb("socialBar:invites"),
                meta: oy.length
              }), oy.map((bb => (0, By.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, By.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, By.jsx)(lh.d, {
                    invite: bb
                  })
                }), (0, By.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, By.jsx)(lh.e, {
                    invite: bb
                  })
                }), (0, By.jsx)(Ey.i, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, mf.f)(bb)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${bb.destination.kind}`
                  },
                  children: yb("general:join")
                }), (0, By.jsx)(tb.f, {
                  tooltipInner: (0, By.jsx)(By.Fragment, {
                    children: yb("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, By.jsx)(Ey.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === ey || void 0 === ey ? void 0 : ey.kind) && ey.inviteId === bb.id,
                    onClick: () => {
                      EU.d.declineInvite(bb.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${bb.destination.kind}`
                    },
                    children: (0, By.jsx)(cb.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, bb.id)))]
            }), (0, By.jsxs)("div", {
              className: fy()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Wy && 0 === Py.length
              }),
              children: [(0, By.jsx)(qf.e, {
                label: (0, By.jsxs)(By.Fragment, {
                  children: [(0, By.jsx)(cb.e, {
                    name: Th.g
                  }), " ", yb("socialBar:requests")]
                }),
                meta: (0, By.jsxs)(By.Fragment, {
                  children: [Py.length, Py.length === wy.p && (0, By.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: yb("socialBar:limitReached")
                  })]
                })
              }), Wy && (0, By.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, By.jsx)(Jy.e, {})
              }), !Wy && 0 === Py.length && (0, By.jsx)("div", {
                className: "SocialMenuEmpty",
                children: yb("socialBar:noFriendRequests")
              }), !Wy && Py.length > 0 && (0, By.jsx)("div", {
                className: "PlayerRows",
                children: (0, By.jsx)(Eh.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Py],
                  children: Py.map(((bb, Wy) => {
                    const Uy = Cy.get(bb.name);
                    return (0, By.jsxs)(eh.g, {
                      playerSocialPreview: bb,
                      zIndex: Py.length - Wy,
                      padDefaultFocus: (0, Jh.j)(ey, bb.name, Wy),
                      status: Uy && (0, By.jsx)(sh.b, {
                        gameNameWithVariation: Uy.gameNameWithVariation,
                        isPrivateLobby: Uy.isPrivateLobby
                      }),
                      children: [(0, By.jsx)(tb.f, {
                        tooltipInner: (0, By.jsx)(By.Fragment, {
                          children: yb("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, By.jsx)(Ey.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            sy((0, Jh.f)(Sy, Wy)), (0, Ch.h)(bb.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, By.jsx)(cb.e, {
                            name: "check"
                          })
                        })
                      }), (0, By.jsx)(tb.f, {
                        tooltipInner: (0, By.jsx)(By.Fragment, {
                          children: yb("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, By.jsx)(Ey.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            sy((0, Jh.f)(Sy, Wy)), (0, Ch.h)(bb.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, By.jsx)(cb.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${bb.name}_${bb.isError}`)
                  }))
                })
              })]
            }), (0, By.jsx)(sh.g, {})]
          }), (0, By.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, By.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, By.jsx)(qf.e, {
                label: yb("socialBar:party")
              }), (0, By.jsx)(Kh.e, {})]
            }), (0, By.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, By.jsx)(qf.e, {
                label: (0, By.jsxs)(By.Fragment, {
                  children: [(0, By.jsx)(cb.e, {
                    name: Th.c
                  }), " ", yb("socialBar:friends")]
                }),
                meta: (0, By.jsxs)(By.Fragment, {
                  children: [hy.length, hy.length >= (0, wy.b)(Ky.getPlayerRanks()) && (0, By.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: yb("socialBar:limitReached")
                  })]
                })
              }), Wy && (0, By.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, By.jsx)(Jy.e, {})
              }), !Wy && 0 === hy.length && (0, By.jsx)("div", {
                className: "SocialMenuEmpty",
                children: yb("socialBar:noFriends")
              }), !Wy && hy.length > 0 && (0, By.jsx)("div", {
                className: "PlayerRows",
                children: (0, By.jsx)(Eh.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [hy],
                  children: hy.map(((yb, Wy) => (0, By.jsx)(eh.g, {
                    playerSocialPreview: yb,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: yb => {
                      EU.d.removeFriendFromState(yb)
                    },
                    zIndex: hy.length - Wy,
                    children: (0, By.jsx)(eh.e, {
                      friend: yb,
                      followsLeader: bb,
                      analyticsSurface: "social_menu"
                    })
                  }, `${yb.name}_${yb.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Oh = Wy(2061);
    const Rh = yb => {
        let {
          action: bb,
          padAction: Wy
        } = yb;
        const {
          isTouchScreen: Uy
        } = (0, Gy.h)(["isTouchScreen"]), hy = (0, hW.q)();
        return Uy && !hy ? null : (0, By.jsx)(Ib.e, {
          className: "EverythingMenuTabKey",
          noaAction: bb,
          padHidesKey: !0,
          padMenuShortcut: Wy
        })
      },
      vf = (0, Uy.memo)((function() {
        const {
          t: yb
        } = (0, Zy.D)(), {
          gameState: bb,
          openEverythingMenuName: Wy,
          initSdkSelectorFinished: hy
        } = (0, Gy.h)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
          userContext: cb
        } = (0, qb.c)(), Py = (0, Dy.siteSupportsPurchases)(), oy = (0, jb.F)(), Ky = (yb, bb) => (0, By.jsx)(Rh, {
          action: yb,
          padAction: bb
        }), [ey, sy] = (0, Uy.useState)(null), Sy = (0, Uy.useRef)(null), mb = {
          ..."inGame" === bb ? {} : (0, Ey.Q)({
            focusOnClick: !1
          }),
          ...sW.i
        }, Cy = null !== Wy, Ty = Wy !== db.o.COSMETIC_SHOP;
        async function Vy() {
          await async function() {
            if (!ey) return;
            await ey(), sy(null)
          }(), Gy.d.set({
            openEverythingMenuName: null
          })
        }
        const Jy = (0, Uy.useMemo)((() => "inGame" === bb ? {
          text: yb("settingsMenu:exitGame"),
          onClick: () => {
            (0, Ph.d)()
          }
        } : (0, My.d)() ? {
          text: yb("settingsMenu:exitGame"),
          onClick: () => {
            ny.k.discordActivity().then((yb => {
              yb.exit("User exited the game")
            }))
          }
        } : null), [bb, yb]);
        const gb = (0, By.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            Vy()
          },
          children: (0, By.jsx)(Ey.h, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, By.jsx)(SW.b, {
          showing: Cy,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Wy === db.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === bb,
          children: (0, By.jsx)(lW.d, {
            className: "EverythingMenuContainer",
            show: Cy,
            children: (0, By.jsx)(EW.c, {
              close: () => {
                Vy()
              },
              togglePointerLock: !1,
              children: (0, By.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, tU.l)(Wy) && (0, By.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, By.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Jy && (0, By.jsx)(Ey.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Jy.onClick()
                      },
                      children: Jy.text
                    }), Cy && Py && (0, By.jsx)("div", {
                      ...mb,
                      className: "EverythingMenuWallet",
                      title: yb("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, jb.f)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, By.jsx)(cf.i, {})
                    })]
                  }), (0, By.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, By.jsxs)("div", {
                      ...mb,
                      "data-pad-tab": !0,
                      "data-pad-selected": Wy === db.o.SETTINGS ? "true" : void 0,
                      className: fy()("EverythingMenuTab", {
                        EverythingMenuTabActive: Wy === db.o.SETTINGS
                      }),
                      onClick: () => {
                        Gy.d.set({
                          openEverythingMenuName: db.o.SETTINGS
                        })
                      },
                      children: [yb("general:settings"), Ky("OpenSettings", "pause")]
                    }), (0, By.jsxs)("div", {
                      ...mb,
                      "data-pad-tab": !0,
                      "data-pad-selected": Wy === db.o.CUSTOMISATION ? "true" : void 0,
                      className: fy()("EverythingMenuTab", {
                        EverythingMenuTabActive: Wy === db.o.CUSTOMISATION
                      }),
                      onClick: () => {
                        Gy.d.set({
                          openEverythingMenuName: db.o.CUSTOMISATION
                        })
                      },
                      children: [yb("general:player"), Ky("OpenCharacterCustomization")]
                    }), ly.featureFlags.useSocialFeatures && (0, By.jsxs)("div", {
                      ...mb,
                      "data-pad-tab": !0,
                      "data-pad-selected": Wy === db.o.SOCIAL ? "true" : void 0,
                      className: fy()("EverythingMenuTab", {
                        EverythingMenuTabActive: Wy === db.o.SOCIAL
                      }),
                      ...(0, Ny.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Wy === db.o.SOCIAL),
                      onClick: () => {
                        Gy.d.set({
                          openEverythingMenuName: db.o.SOCIAL
                        })
                      },
                      children: [yb("socialBar:social"), (0, By.jsx)(Oh.e, {})]
                    }), Py && (0, By.jsxs)("div", {
                      ...mb,
                      "data-pad-tab": !0,
                      "data-pad-selected": Wy === db.o.COSMETIC_SHOP ? "true" : void 0,
                      className: fy()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Wy === db.o.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        Gy.d.set({
                          openEverythingMenuName: db.o.COSMETIC_SHOP
                        })
                      },
                      children: [(0, By.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: yb("store:title")
                      }), "dot" === oy && (0, By.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === bb && (0, By.jsxs)("div", {
                      ...mb,
                      "data-pad-tab": !0,
                      "data-pad-selected": Wy === db.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: fy()("EverythingMenuTab", {
                        EverythingMenuTabActive: Wy === db.o.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        Gy.d.set({
                          openEverythingMenuName: db.o.LOBBY_LEADERBOARD
                        })
                      },
                      children: [yb("general:lobby"), Ky("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, By.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: gb
                  })]
                }), (0, tU.l)(Wy) && gb, (0, By.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === bb ? "0.85" : "1"
                  },
                  children: [(0, By.jsx)(oW, {
                    show: Wy === db.o.SETTINGS,
                    setBeforeResumeCallback: sy
                  }), (0, By.jsx)(qU, {
                    show: Wy === db.o.CUSTOMISATION
                  }), (0, By.jsx)(Uy.Suspense, {
                    fallback: null,
                    children: (0, By.jsx)(rU, {
                      show: Wy === db.o.SHOP
                    })
                  }), (0, By.jsx)(NW, {
                    show: Wy === db.o.LOBBY_LEADERBOARD
                  }), (0, By.jsx)(Zh, {
                    show: Wy === db.o.COSMETIC_SHOP
                  }), (0, By.jsx)(gf, {
                    show: Wy === db.o.SOCIAL
                  })]
                }), !(0, ly.isMobileApp)() && (0, mU.g)(cb.getPlayerRanks()) && (0, By.jsx)(lW.d, {
                  ref: Sy,
                  className: "EverythingMenuBannerDiv",
                  show: Ty,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, By.jsx)(oh.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Sy
                    },
                    showing: Cy && Ty,
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    noFillShowBloxdAdProbability: 1
                  })
                })]
              })
            })
          })
        })
      }))
  },
  8412: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(258),
      hy = Wy(8420);

    function fy(yb, bb, Wy) {
      const fy = Object.entries(bb).sort(((yb, bb) => bb[1] - yb[1])),
        Zy = (0, Uy.nb)(yb);
      Zy.push(yb ? "\n\n" : "\n");
      for (const [hy, sy] of fy) {
        var cb, Py, oy;
        const yb = null !== (cb = null === Wy || void 0 === Wy || null === (Py = Wy[hy]) || void 0 === Py ? void 0 : Py.icon) && void 0 !== cb ? cb : `${hy} Enchantment`;
        Zy.push({
          icon: yb,
          style: {
            fontSize: "1.5rem"
          }
        }), Zy.push({
          str: `${hy} ${null!==(oy=(0,Uy.S)(sy))&&void 0!==oy?oy:sy}\n`
        })
      }
      Zy.push({
        str: "\n"
      });
      for (const [Uy, sy] of fy) {
        var By, Ky, ey, qb;
        const yb = null !== (By = null === Wy || void 0 === Wy || null === (Ky = Wy[Uy]) || void 0 === Ky ? void 0 : Ky.icon) && void 0 !== By ? By : `${Uy} Enchantment`,
          bb = null !== (ey = null === Wy || void 0 === Wy || null === (qb = Wy[Uy]) || void 0 === qb ? void 0 : qb.description) && void 0 !== ey ? ey : (0, hy.h)(Uy);
        Zy.push({
          icon: yb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Zy.push({
          str: bb,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Zy.push({
          str: "\n"
        })
      }
      return Zy
    }
  },
  8425: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      d: () => mb,
      h: () => Ey,
      k: () => Py,
      o: () => ly,
      s: () => By,
      v: () => ey,
      x: () => Sy,
      z: () => Ky
    });
    var Uy = Wy(248),
      hy = Wy(547),
      fy = Wy(258),
      Zy = Wy(3515),
      cb = Wy(8412);

    function Py(yb, bb) {
      var Wy;
      let {
        player: Uy,
        chestOrCreative: hy
      } = yb;
      var fy;
      return bb < Uy.length ? null !== (fy = Uy[bb]) && void 0 !== fy ? fy : null : null !== (Wy = hy[bb - Uy.length]) && void 0 !== Wy ? Wy : null
    }

    function oy(yb) {
      var bb;
      return null !== (bb = yb.amount) && void 0 !== bb ? bb : 0
    }

    function By(yb) {
      return 0 === yb.button || void 0 === yb.button
    }

    function Ky(yb) {
      return !!yb.shiftKey
    }

    function ey(yb) {
      return "touches" in yb || "touch" === yb.pointerType || "pen" === yb.pointerType
    }
    const qb = new Set,
      sy = 50;

    function Sy(yb, bb) {
      var Wy;
      const Uy = null === (Wy = yb[bb]) || void 0 === Wy ? void 0 : Wy.displayName;
      return (0, hy.D)(Uy) ? "string" !== typeof bb ? "" : (!qb.has(bb) && qb.size < sy && (qb.add(bb), console.warn(`No item called "${bb}", so its hover shows the name as given`)), bb) : Uy
    }

    function Ey(yb, bb, Wy) {
      var Py, oy, By, Ky, ey, qb, sy, Ey, ly, mb, Cy, Ty, Vy, Jy;
      const gb = yb.attributes,
        Gy = null !== (Py = null === (oy = bb[yb.name]) || void 0 === oy ? void 0 : oy.rootName) && void 0 !== Py ? Py : yb.name,
        Oy = null !== (By = null !== (Ky = gb.customDisplayName) && void 0 !== Ky ? Ky : null === (ey = bb[yb.name]) || void 0 === ey ? void 0 : ey.displayName) && void 0 !== By ? By : Sy(bb, Gy);
      let Ry = Oy;
      const vb = null === (qb = gb.customAttributes) || void 0 === qb ? void 0 : qb.enchantmentTier;
      vb && (Ry = (0, fy.nb)(Oy, {
        colour: fy.ib[vb]
      }));
      const ib = null !== (sy = null !== (Ey = null !== (ly = function(yb, bb) {
        var Wy;
        if (void 0 === yb || null !== (Wy = bb.customAttributes) && void 0 !== Wy && Wy.author) return yb;
        const hy = (0, Uy.Vb)(yb);
        return hy.every((yb => "string" === typeof yb)) ? yb : hy.map((yb => "string" === typeof yb ? yb : {
          icon: yb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(gb.customDescription, gb)) && void 0 !== ly ? ly : null === (mb = bb[yb.name]) || void 0 === mb ? void 0 : mb.description) && void 0 !== Ey ? Ey : null === (Cy = bb[Gy]) || void 0 === Cy ? void 0 : Cy.description) && void 0 !== sy ? sy : "";
      let My = ib;
      if (null !== (Ty = gb.customAttributes) && void 0 !== Ty && Ty.enchantments) My = (0, cb.b)(ib, gb.customAttributes.enchantments, gb.customAttributes.enchantmentData);
      else if (Wy[Gy]) My = (0, fy.nb)(ib), My.push({
        str: "\n"
      }), My.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Vy = gb.customAttributes) && void 0 !== Vy && Vy.mobSettings) {
        var Yy, Xy;
        const yb = gb.customAttributes.mobSettings;
        var ny, uy;
        if (My = [], (0, hy.D)(gb.customAttributes.health) || (My.push({
            str: "\n"
          }), My.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: gb.customAttributes.health.toString()
          }), (0, hy.D)(yb.maxHealth) || (My.push({
            str: "/"
          }), My.push({
            str: yb.maxHealth.toString()
          }))), !(0, hy.D)(yb.attackDamage) && yb.attackDamage > 0 && (My.push({
            str: "\n"
          }), My.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: yb.attackDamage.toString()
          })), !(0, hy.D)(yb.secondaryAttackDamage) && yb.secondaryAttackDamage > 0 && (My.push({
            str: "\n"
          }), My.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: yb.secondaryAttackDamage.toString()
          })), (0, hy.D)(yb.baseRunningSpeed) || (My.push({
            str: "\n"
          }), My.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: yb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === yb.metaInfo) My.push({
          str: "\n"
        }), My.push({
          str: {
            translationKey: "general:has"
          }
        }), My.push({
          str: " "
        }), My.push({
          icon: null !== (ny = null === (uy = yb.tameInfo) || void 0 === uy ? void 0 : uy.saddleItemName) && void 0 !== ny ? ny : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (My.push({
            str: "\n"
          }), My.push({
            str: "\n"
          }), yb.petInfo && null !== (Yy = yb.tameInfo) && void 0 !== Yy && Yy.supportsFriendship) {
          const bb = Zy.c.getIconsFromFriendshipPoints(yb.petInfo.friendshipPoints);
          for (const yb of bb) My.push({
            icon: yb,
            style: {
              fontSize: "1.5em"
            }
          });
          My.push({
            str: "\n"
          });
          const Wy = Zy.c.getMobHungerLevel(yb.petInfo.lastFedAt);
          for (const yb of Zy.c.hungerLevelIcons[Wy]) My.push({
            icon: yb,
            style: {
              fontSize: "1.5em"
            }
          });
          My.push({
            str: " "
          }), My.push({
            str: Zy.c.hungerLevelTranslations[Wy],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (yb.tameInfo && null !== (Xy = yb.tameInfo) && void 0 !== Xy && Xy.supportsFriendship) {
          var rb, Hy;
          let bb = null !== (rb = yb.tameInfo.likedFoods) && void 0 !== rb ? rb : [];
          My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Superliked]
            }
          }), My.push({
            str: " "
          }), null !== (Hy = yb.petInfo) && void 0 !== Hy && Hy.superlikedFoodKnown ? (My.push({
            icon: yb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), bb = bb.filter((bb => bb !== yb.petInfo.superlikedFood))) : My.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Liked]
            }
          }), My.push({
            str: " "
          });
          for (const yb of bb) My.push({
            icon: yb,
            style: {
              fontSize: "1.5em"
            }
          });
          My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Neutral]
            }
          }), My.push({
            str: " "
          });
          for (const Wy of null !== (ab = yb.tameInfo.neutralFoods) && void 0 !== ab ? ab : []) {
            var ab;
            My.push({
              icon: Wy,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Disliked]
            }
          }), My.push({
            str: " "
          });
          for (const Wy of null !== (Fy = yb.tameInfo.dislikedFoods) && void 0 !== Fy ? Fy : []) {
            var Fy;
            My.push({
              icon: Wy,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        My.length > 0 ? (My.shift(), My.unshift(...(0, fy.nb)(ib))) : My = (0, fy.nb)(ib)
      }
      return {
        name: Ry,
        desc: My,
        fontStyle: null !== (Jy = gb.customAttributes) && void 0 !== Jy && Jy.author ? "italic" : "normal"
      }
    }

    function ly(yb, bb, Wy, Uy) {
      const hy = Py(yb, Wy),
        fy = Py(yb, Uy);
      if (!hy) return !1;
      const Zy = bb[hy.name].armourReduction,
        cb = bb[fy.name].armourReduction;
      if (cb === Zy) {
        var oy, By, Ky, ey;
        const yb = null !== (oy = null === (By = hy.attributes.customAttributes) || void 0 === By ? void 0 : By.enchantmentTier) && void 0 !== oy ? oy : "Tier 0",
          bb = null !== (Ky = null === (ey = fy.attributes.customAttributes) || void 0 === ey ? void 0 : ey.enchantmentTier) && void 0 !== Ky ? Ky : "Tier 0";
        return parseInt(yb.replace("Tier ", "")) >= parseInt(bb.replace("Tier ", ""))
      }
      return Zy > cb
    }

    function mb(yb) {
      let bb;
      if ("number" === typeof yb) {
        const Wy = document.querySelector(`[data-inven-idx="${yb}"]`);
        if (!Wy) return null;
        bb = Wy.getBoundingClientRect()
      } else bb = yb.getBoundingClientRect();
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }
    }
  },
  8352: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => qb,
      i: () => sy,
      k: () => Sy
    });
    var Uy = Wy(1273),
      hy = Wy(55),
      fy = Wy(1162),
      Zy = Wy(3732),
      cb = Wy(1945),
      Py = Wy(1042),
      oy = Wy(94),
      By = Wy(1612),
      Ky = Wy(1194),
      ey = Wy(952);

    function qb(yb) {
      let {
        show: bb,
        onClose: Wy
      } = yb;
      const {
        requestedGameNameWithVariation: Uy,
        lobbyName: hy,
        shownLobbyName: fy
      } = (0, By.j)("connectedGame"), Py = (0, cb.c)(Uy, hy, !1);
      return oy.featureFlags.canUseInviteLinks && (0, ey.jsx)(Zy.c, {
        show: bb,
        close: Wy,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, ey.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, ey.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, ey.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, ey.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Py ? (0, ey.jsx)(Ky.e, {}) : Py, (0, ey.jsx)("br", {}), "Lobby Name: ", fy, (0, ey.jsx)("br", {}), (0, ey.jsx)("br", {}), (0, ey.jsx)("br", {}), (0, ey.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, ey.jsx)(sy, {})]
        })
      })
    }

    function sy() {
      var yb;
      const {
        t: bb
      } = (0, Py.D)(), Wy = null !== (yb = Sy(oy.featureFlags.canUseInviteLinks)) && void 0 !== yb ? yb : "Loading Link...", [fy, Zy] = (0, hy.useState)(0), [cb, By] = (0, hy.useReducer)((yb => yb + 1), 0);
      return (0, hy.useEffect)((() => {
        const yb = setTimeout((() => {
          By()
        }), 1100);
        return () => {
          clearTimeout(yb)
        }
      }), [fy]), oy.featureFlags.canUseInviteLinks && (0, ey.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, ey.jsx)("div", {
          className: "InviteLinkInner",
          children: Wy
        }), (0, ey.jsx)(Uy.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Wy).catch((yb => {
              console.error("Failed to copy invite link:", yb)
            })), Zy(Date.now())
          },
          disabled: Date.now() - fy < 1e3,
          children: Date.now() - fy < 1e3 ? bb("general:copied") : bb("general:copy")
        })]
      })
    }

    function Sy(yb) {
      const [bb, Wy] = (0, hy.useState)(null);
      return (0, hy.useEffect)((() => {
        if (!yb) return;
        let bb = !0;
        return (0, fy.u)().then((yb => {
          bb && Wy(yb)
        })).catch((yb => {
          console.error("Failed to get invite link:", yb)
        })), () => {
          bb = !1
        }
      }), [yb]), bb
    }
  },
  8403: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(1612),
      cb = Wy(952);

    function Py(yb) {
      const bb = Math.floor(yb / 3600),
        Wy = Math.floor(yb % 3600 / 60),
        Uy = Math.floor(yb % 60),
        hy = `${Wy.toString().padStart(2,"0")}:${Uy.toString().padStart(2,"0")}`;
      return bb > 0 ? `${bb}:${hy}` : hy
    }
    const oy = (0, Uy.memo)((function(yb) {
      let {
        className: bb
      } = yb;
      const {
        recording: Wy,
        seconds: Uy
      } = (0, Zy.j)("replayRecorder");
      return Wy ? (0, cb.jsxs)("div", {
        className: fy()("RecordingIndicator", bb),
        children: [(0, cb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, cb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, cb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Py(Uy)
        })]
      }) : null
    }))
  },
  8011: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => vb,
      h: () => Ry
    });
    var Uy = Wy(1042),
      hy = Wy(55),
      fy = Wy(1620),
      Zy = Wy(1634),
      cb = Wy(898),
      Py = Wy.n(cb),
      oy = Wy(1273),
      By = Wy(19),
      Ky = Wy(94),
      ey = Wy(105),
      qb = Wy(4200),
      sy = Wy(2005),
      Sy = Wy(127),
      Ey = Wy(1636),
      ly = Wy(1645),
      mb = Wy(8017),
      Cy = Wy(248),
      Ty = Wy(952);
    const Vy = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Jy = Wy(8026);
    const gb = [function() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        joystickMode: bb,
        touchSpeedCurve: Wy,
        autorun: hy,
        jumpLock: fy
      } = (0, By.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Ty.jsxs)(Ty.Fragment, {
        children: [(0, Ty.jsx)(qb.d, {
          label: yb("settingsMenu:joystick"),
          options: Cy.yb.map((bb => ({
            value: bb,
            label: yb(Vy[bb])
          }))),
          value: bb,
          onChange: yb => {
            By.d.setClientEscMenuOptions({
              joystickMode: yb
            })
          },
          circleInfoText: yb("settingsMenu:joystickInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:preciseWalking"),
          checked: Wy,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              touchSpeedCurve: yb
            })
          },
          circleInfoText: yb("settingsMenu:preciseWalkingInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:autoRun"),
          checked: hy,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              autorun: yb
            })
          },
          circleInfoText: yb("settingsMenu:autoRunInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:jumpLock"),
          checked: fy,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              jumpLock: yb
            })
          },
          circleInfoText: yb("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        clientEscMenuOptions: bb
      } = (0, By.h)(["clientEscMenuOptions"]);
      return (0, Ty.jsx)(qb.c, {
        label: yb("touchSettings:actionButtons"),
        checked: bb.touchActionButtons,
        onClick: yb => {
          By.d.setClientEscMenuOptions({
            touchActionButtons: yb
          })
        },
        circleInfoText: yb("touchSettings:actionButtonsInfo")
      })
    }, function() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        clientEscMenuOptions: bb
      } = (0, By.h)(["clientEscMenuOptions"]);
      return (0, Jy.d)() ? (0, Ty.jsx)(qb.c, {
        label: yb("settingsMenu:vibration"),
        checked: bb.vibration,
        onClick: yb => {
          By.d.setClientEscMenuOptions({
            vibration: yb
          })
        },
        circleInfoText: yb("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Gy() {
      return (0, Ty.jsx)(Ty.Fragment, {
        children: gb.map(((yb, bb) => (0, Ty.jsx)(yb, {}, bb)))
      })
    }
    var Oy = Wy(3637);

    function Ry() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        isTouchScreen: bb,
        clientEscMenuOptions: Wy,
        gameState: Zy
      } = (0, By.h)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), cb = (0, sy.k)("ezBridging"), Py = (0, sy.k)("ezTowering"), Ey = "inGame" !== Zy || !0 === cb, ly = (0, Sy.h)() && ("inGame" !== Zy || !0 === Py), [, Cy] = (0, hy.useReducer)((yb => yb + 1), 0), Vy = (0, mb.d)(), [Jy, gb] = (0, hy.useState)(Oy.h);
      return (0, Ty.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Vy && (0, Ty.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, Ty.jsx)("div", {
            children: yb("controller:settingsControlsNote")
          }), (0, Ty.jsx)(oy.M, {
            onClick: () => {
              By.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: yb("controller:settingsOpenController")
          })]
        }), (0, Ky.isTouchscreen)() && !(0, Ky.isMobile)() ? (0, Ty.jsx)(Ty.Fragment, {
          children: (0, Ty.jsx)(qb.c, {
            label: yb("settingsMenu:useTouchControls"),
            checked: Jy,
            onClick: yb => {
              (0, Oy.d)(yb), gb(yb)
            }
          })
        }) : null, bb && (0, Ty.jsx)(Gy, {}), Ey && (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:ezBridging"),
          checked: Wy.ezBridging,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              ezBridging: yb
            })
          },
          circleInfoText: yb("settingsMenu:ezBridgingInfo")
        }), ly && (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:ezTowering"),
          checked: Wy.ezTowering,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              ezTowering: yb
            })
          },
          circleInfoText: yb("settingsMenu:ezToweringInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:crouchToggle"),
          checked: Wy.crouchIsToggle,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              crouchIsToggle: yb
            })
          },
          circleInfoText: yb("settingsMenu:crouchToggleInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:hideUiToggle"),
          checked: Wy.hideUiIsToggle,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              hideUiIsToggle: yb
            })
          },
          circleInfoText: yb("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, ey.b)() && (0, Ty.jsx)(qb.f, {
          name: yb("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Wy.touchscreenSensitivity,
          onChange: yb => {
            By.d.setClientEscMenuOptions({
              touchscreenSensitivity: yb
            })
          }
        }), !(0, Ky.isMobile)() && (0, Ty.jsx)(qb.f, {
          name: yb("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Wy.mouseSensitivity,
          onChange: yb => {
            By.d.setClientEscMenuOptions({
              mouseSensitivity: yb
            })
          }
        }), !(0, Ky.isMobile)() && (0, Ty.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Ty.jsx)("div", {
            className: "SliderText",
            children: yb("settingsMenu:keyBindings")
          }), fy.f.map((bb => (0, Ty.jsx)(vb, {
            title: yb(bb.name.translationKey, bb.name.params),
            defaultOpen: fy.g.has(bb.id),
            children: bb.actions.map((yb => (0, Ty.jsx)(ib, {
              noaAction: yb,
              forceUpdate: Cy,
              clashesWith: bb.clashesWith,
              showPadGlyph: Vy
            }, yb)))
          }, bb.name.translationKey))), (0, Ty.jsx)(oy.C, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, fy.I)(), Cy()
            },
            children: yb("controls:resetBindings")
          })]
        })]
      })
    }

    function vb(yb) {
      let {
        title: bb,
        defaultOpen: Wy,
        children: Uy
      } = yb;
      const [fy, Zy] = (0, hy.useState)(Wy);
      return (0, Ty.jsxs)("div", {
        className: Py()("ControlsSection", {
          Collapsed: !fy
        }),
        children: [(0, Ty.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Zy(!fy)
          },
          children: [(0, Ty.jsx)("div", {
            className: "ControlsSectionTitle",
            children: bb
          }), (0, Ty.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), fy && (0, Ty.jsx)("div", {
          className: "ControlsSectionRows",
          children: Uy
        })]
      })
    }

    function ib(yb) {
      let {
        noaAction: bb,
        forceUpdate: Wy,
        clashesWith: cb,
        showPadGlyph: By
      } = yb;
      const {
        t: Ky
      } = (0, Uy.D)(), ey = (0, ly.d)(bb), [qb, sy] = (0, hy.useState)(!1), [Sy, mb] = (0, hy.useState)("controls:clickToEnterNewBinding"), [Cy, Vy] = (0, hy.useState)(null), [Jy, gb] = (0, hy.useState)(null), Gy = (0, hy.useRef)(null);
      (0, hy.useEffect)((() => {
        qb && Gy.current && Gy.current.focus()
      }), [qb]);
      const Oy = fy.w[bb].filter((yb => Zy.h[yb]));
      let Ry = null;
      const vb = [],
        ib = cb.flatMap((yb => {
          var bb, Wy;
          return null !== (bb = null === (Wy = fy.f.find((bb => bb.id === yb))) || void 0 === Wy ? void 0 : Wy.actions) && void 0 !== bb ? bb : []
        }));
      for (const Uy of ib) {
        if (Uy === bb) continue;
        const yb = fy.w[Uy];
        for (const bb of yb) Oy.includes(bb) && vb.push(Ky(fy.z[Uy].translationKey, fy.z[Uy].params))
      }
      vb.length > 0 && (Ry = Ky("controls:sharedBindingsWarning") + " ", Ry += vb.join(", "));
      const My = () => {
          sy(!1), Vy(null), mb("controls:clickToEnterNewBinding"), gb(null)
        },
        Yy = () => "BindingInput_" + bb;
      return (0, Ty.jsxs)("div", {
        className: Py()("ControlRow", {
          WarningBorder: null !== Ry
        }),
        children: [(0, Ty.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Ty.jsxs)("div", {
            className: "ControlName",
            children: [Ky(fy.z[bb].translationKey, fy.z[bb].params), By && ey && (0, Ty.jsx)(Ey.d, {
              glyph: ey,
              className: "ControlPadGlyph"
            })]
          }), (0, Ty.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Ty.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Oy.map((yb => (0, Ty.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Ty.jsx)("div", {
                  children: (0, fy.o)(yb)
                }), (0, Ty.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Uy = (0, fy.D)(bb, yb);
                    Uy.isError() ? gb(Uy.asError().message) : gb(null), Wy()
                  },
                  children: "\xd7"
                })]
              }, yb))), !qb && (0, Ty.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  sy(!0), gb(null)
                },
                children: (0, Ty.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), qb && (0, Ty.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Ty.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Ty.jsx)("div", {
                  className: "InputOverlay",
                  children: Cy ? (0, fy.o)(Cy) : (0, Ty.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Ky(Sy)
                  })
                }), (0, Ty.jsx)("input", {
                  ref: Gy,
                  id: Yy(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: yb => {
                    if ("Escape" === yb.code) return My(), yb.preventDefault(), void yb.stopPropagation();
                    const bb = yb.code;
                    Zy.c.includes(bb) ? (gb(null), Vy(bb)) : (gb("controls:keyIsReserved"), Vy(null)), yb.preventDefault(), yb.stopPropagation()
                  },
                  onMouseDown: yb => {
                    const bb = "Mouse" + (yb.button + 1);
                    document.activeElement && document.activeElement.id === Yy() ? Zy.c.includes(bb) ? (gb(null), Vy(bb)) : (gb("controls:keyIsReserved"), Vy(null)) : mb("controls:enterNewBinding"), yb.stopPropagation()
                  },
                  onBlur: () => {
                    mb("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Ty.jsx)(oy.f, {
                onPointerDown: yb => {
                  yb.preventDefault()
                },
                onClick: () => {
                  (0, fy.e)(bb, Cy), Wy(), My()
                },
                className: "ControlBindingAddButton",
                disabled: null === Cy,
                children: Ky("general:add")
              }), (0, Ty.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  My()
                },
                children: "\xd7"
              })]
            }), Jy && (0, Ty.jsx)("div", {
              className: "ControlBindingError",
              children: Ky(Jy)
            })]
          })]
        }), Ry && (0, Ty.jsx)("div", {
          className: "ControlRowWarning",
          children: Ry
        })]
      })
    }
  },
  4093: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ey
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(3850),
      Zy = Wy(1042),
      cb = Wy(910),
      Py = Wy(1273),
      oy = Wy(1339),
      By = Wy(1207),
      Ky = Wy(2032),
      ey = Wy(952);
    const qb = {
      youtube: {
        icon: "youtube",
        color: "#FF0033",
        name: "YouTube"
      },
      tiktok: {
        icon: "tiktok",
        color: "#0F0F0F",
        name: "TikTok"
      },
      instagram: {
        icon: "instagram",
        color: "#E1306C",
        name: "Instagram"
      },
      twitter: {
        icon: "x-twitter",
        color: "#0F0F0F",
        name: "X"
      },
      twitch: {
        icon: "twitch",
        color: "#9146FF",
        name: "Twitch"
      }
    };

    function sy(yb) {
      let {
        platform: bb
      } = yb;
      const Wy = "youtube" === bb;
      return (0, ey.jsxs)("span", {
        className: hy()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Wy
        }),
        children: [Wy && (0, ey.jsx)(Ky.b, {
          variant: "white"
        }), !Wy && (0, ey.jsx)(cb.e, {
          name: qb[bb].icon,
          kit: "brands"
        })]
      })
    }

    function Sy(yb) {
      let {
        platform: bb,
        link: Wy,
        editable: Uy,
        userContext: hy,
        onLinksUpdated: Ky
      } = yb;
      const {
        t: Sy
      } = (0, Zy.D)(), Ey = qb[bb];
      if (!Wy && !Uy) return null;

      function ly() {
        var yb;
        if (!hy || !Ky) return;
        By.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Ey.name
            }
          },
          prefixText: fy.v[bb],
          placeholderText: "playBloxd",
          initialValue: null !== (yb = null === Wy || void 0 === Wy ? void 0 : Wy.handle) && void 0 !== yb ? yb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Wy ? "general:remove" : void 0
        }).getResult().then((async yb => {
          if ("notificationTornDown" !== yb && null !== yb) try {
            "submit" === yb.type ? await oy.c.setSocialLink(hy, bb, yb.value) : await oy.c.clearSocialLink(hy, bb), Ky()
          } catch (Wy) {
            console.error("Failed to update social link", Wy), By.NotificationProvider.showAlertPopup({
              title: Wy.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Wy) {
        const yb = `@${Wy.handle}`;
        return (0, ey.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Ey.color
          },
          href: Wy.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, ey.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, ey.jsx)(sy, {
              platform: bb
            }), (0, ey.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, ey.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: yb
              })
            })]
          }), Uy && (0, ey.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Py.Q)({
              stopPropagation: !0
            }),
            onClick: yb => {
              yb.stopPropagation(), yb.preventDefault(), ly()
            },
            children: (0, ey.jsx)(cb.e, {
              name: "pen-to-square"
            })
          }), !Uy && (0, ey.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, ey.jsx)(cb.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, ey.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Ey.color
        },
        ...(0, Py.Q)(),
        onClick: () => {
          ly()
        },
        children: [(0, ey.jsx)(sy, {
          platform: bb
        }), (0, ey.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, ey.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Ey.name
          }), (0, ey.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Sy("homePage:profileSocialLinkAdd")
          })]
        }), (0, ey.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, ey.jsx)(cb.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Ey(yb) {
      let {
        socialLinks: bb,
        editable: Wy = !1,
        userContext: Uy,
        onLinksUpdated: hy
      } = yb;
      if (!Wy && 0 === bb.length) return null;
      const Zy = new Map(bb.map((yb => [yb.platform, yb]))),
        cb = Wy ? fy.u : bb.map((yb => yb.platform));
      return (0, ey.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, ey.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: cb.map((yb => (0, ey.jsx)(Sy, {
            platform: yb,
            link: Zy.get(yb),
            editable: Wy,
            userContext: Uy,
            onLinksUpdated: hy
          }, yb)))
        })
      })
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  7981: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb
    });
    var Uy = Wy(19),
      hy = Wy(2739),
      fy = Wy(1207),
      Zy = Wy(1239);
    const cb = async () => {
      if ((0, Zy.f)()) {
        if (!0 !== await fy.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Uy.d.get("gameState")) return
      }(0, hy.d)()
    }
  },
  7987: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py,
      h: () => fy,
      k: () => Zy,
      m: () => hy,
      o: () => cb
    });
    var Uy = Wy(1597);
    const hy = "controllerPadShopOpen",
      fy = yb => Uy.h.includes(yb),
      Zy = yb => Object.values(yb).some((yb => !1 !== yb.canBuy && !yb.isRewardedAd)),
      cb = (yb, bb, Wy) => {
        var Uy, hy, Zy, cb;
        const Py = yb.filter((yb => !fy(yb))),
          oy = null !== bb && yb.includes(bb) ? bb : null;
        return null !== oy && !fy(oy) && Wy(oy) ? oy : null !== (Uy = null !== (hy = null !== (Zy = null !== (cb = Py.find(Wy)) && void 0 !== cb ? cb : Py[0]) && void 0 !== Zy ? Zy : oy) && void 0 !== hy ? hy : yb[0]) && void 0 !== Uy ? Uy : null
      },
      Py = yb => yb.userInput || yb.isRewardedAd || "boolean" === typeof yb.isSelected ? null : JSON.stringify([yb.image, yb.cost, yb.currency, yb.amount, yb.customTitle, yb.buyButtonText, yb.description, yb.canBuy])
  },
  8017: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy,
      d: () => By
    });
    var Uy = Wy(55),
      hy = Wy(1268),
      fy = Wy(1647),
      Zy = Wy(1245),
      cb = Wy(1251),
      Py = Wy(952);
    const oy = () => {
        const yb = (0, Zy.u)();
        if ((0, Uy.useEffect)((() => {
            (0, Zy.l)()
          }), []), !yb) return null;
        const {
          ControllerCategory: bb
        } = yb;
        return (0, Py.jsx)(cb.d, {
          children: (0, Py.jsx)(bb, {})
        })
      },
      By = () => {
        var yb;
        const bb = (0, Zy.u)(),
          [, Wy] = (0, Uy.useReducer)((yb => yb + 1), 0);
        return (0, hy.i)(fy.e, Wy), null !== (yb = null === bb || void 0 === bb ? void 0 : bb.hasActivePad()) && void 0 !== yb && yb
      }
  },
  8350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    const Uy = new Set(["chunkBorders"])
  },
  8345: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ALL_DEV_TOOLS: () => Zy,
      coreDevTools: () => oy,
      devTools: () => Py
    });
    var Uy = Wy(562),
      hy = Wy(1156),
      fy = Wy(8350);
    const Zy = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function cb() {
      const {
        noaDevTools: yb
      } = await Wy.e(217).then((() => Wy(39551)));
      return yb
    }
    const Py = new class {
        constructor() {
          this.loadHost = cb, this.tools = Zy
        }
        setHost(yb) {
          this.tools = null === yb ? Zy : yb.tools, this.loadHost = null === yb ? cb : async () => yb
        }
        supports(yb) {
          return this.tools.has(yb)
        }
        async downloadScene(yb, bb) {
          const Wy = await this.loadHost();
          await Wy.downloadScene(yb, bb)
        }
        async setAmbientLightIntensity(yb) {
          const bb = await this.loadHost();
          await bb.setAmbientLightIntensity(yb)
        }
      },
      oy = {
        tools: fy.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Uy.q && Py.setHost(oy), (0, hy.p)((() => {
      Py.setHost(oy)
    }))
  },
  5923: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      g: () => fy
    });
    var Uy = Wy(33);
    const hy = "shaderPack";
    async function fy() {
      var yb;
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (yb = await Uy.d.getItem(hy, bb)) && void 0 !== yb ? yb : null
    }
  },
  8363: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return yb && !bb
    }
    Wy.d(bb, {
      c: () => Uy
    })
  },
  8397: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb
    });
    var Uy = Wy(167),
      hy = Wy(1541),
      fy = Wy(33);
    const Zy = 2;

    function cb() {
      let yb = Py("chunkHorizAddDist", Uy.c.defaultChunkHorizAddDistance),
        bb = Py("chunkVertAddDist", Uy.c.defaultChunkVertAddDistance);
      return yb = (0, hy.f)(yb, Zy, Uy.c.maxChunkHorizAddDistance), bb = (0, hy.f)(bb, Zy, Uy.c.maxChunkVertAddDistance), [yb, bb]
    }

    function Py(yb, bb) {
      const Wy = fy.e.getItem(yb),
        Uy = "number" === typeof Wy || "string" === typeof Wy ? Number(Wy) : Number.NaN;
      return Number.isFinite(Uy) ? Uy : bb
    }
  },
  8026: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      e: () => Py
    });
    var Uy = Wy(19),
      hy = Wy(1177),
      fy = Wy(94);
    const Zy = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function cb() {
      return (0, fy.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Py = new class {
      constructor(yb) {
        this.deps = yb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(yb, bb) {
        var Wy;
        if (!this.deps.enabled()) return;
        const Uy = Zy[yb],
          hy = null !== bb && void 0 !== bb ? bb : Uy.pattern;
        if (null === hy) return void console.warn("No vibration pattern for", yb);
        const fy = this.deps.now();
        fy - this.lastAnyAt < 40 && Uy.priority < this.playingPriority || fy - (null !== (Wy = this.lastAt.get(yb)) && void 0 !== Wy ? Wy : -1 / 0) < Uy.minGapMs || fy < this.playingUntil && Uy.priority < this.playingPriority || (this.lastAt.set(yb, fy), this.lastAnyAt = fy, this.playingUntil = fy + hy.reduce(((yb, bb) => yb + bb), 0), this.playingPriority = Uy.priority, this.deps.vibrate(hy))
      }
    }({
      vibrate: yb => {
        navigator.vibrate([...yb])
      },
      now: () => performance.now(),
      enabled: () => cb() && Uy.d.get("isTouchScreen") && Uy.d.get("clientEscMenuOptions").vibration && !(0, hy.f)()
    })
  },
  8359: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => qb,
      d: () => ey
    });
    var Uy = Wy(19),
      hy = Wy(1524),
      fy = Wy(33),
      Zy = Wy(1207),
      cb = Wy(2956),
      Py = Wy(1304),
      oy = Wy(1239);
    const By = 2592e5,
      Ky = "notificationOptInLastPromptedAt";
    async function ey() {
      var yb;
      const bb = await qb();
      if (null === bb) return;
      const Wy = null !== (yb = fy.e.getItem(Ky)) && void 0 !== yb ? yb : 0;
      if (Date.now() - Wy < By) return;
      if ((0, oy.f)()) return;
      const Uy = await Zy.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: (0, hy.h)() ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== Uy && (fy.e.setItem(Ky, Date.now()), (0, Py.f)({
        id: !0 === Uy ? "push.allow" : "push.deny",
        value: (0, hy.h)() ? "app" : "browser"
      }), !0 === Uy && bb())
    }
    async function qb() {
      return (0, hy.h)() ? Uy.d.get("mobilePushNotificationsCanAsk") ? async () => {
        (0, hy.o)("requestNotificationPermission", {})
      }: null: await cb.b.canAsk() ? () => cb.b.requestPermission() : null
    }
  },
  8376: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => Py
    });
    var Uy = Wy(19);
    const hy = 24,
      fy = "farNametags",
      Zy = 1e5;

    function cb() {
      var yb;
      return null === (yb = Uy.d.get("showDistantNametags")) || void 0 === yb || yb
    }

    function Py() {
      var yb;
      return null !== (yb = function() {
        const yb = new URLSearchParams(window.location.search).get(fy),
          bb = null === yb || "" === yb ? NaN : Number(yb);
        return Number.isFinite(bb) && bb >= 0 ? Math.min(bb, Zy) : null
      }()) && void 0 !== yb ? yb : cb() ? 0 : hy
    }
  },
  8431: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      e: () => Zy
    });
    const Uy = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function hy(yb) {
      let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof yb) {
        if (!Number.isFinite(yb)) return "0";
        if (Math.abs(yb) < 100) {
          const bb = yb < 0 ? "-" : "",
            Wy = Math.abs(yb);
          return Wy >= 10 ? `${bb}${Wy.toFixed(1).replace(/\.0$/,"")}` : `${bb}${Wy.toFixed(2).replace(/\.?0+$/,"")}`
        }
        bb = BigInt(Math.floor(yb))
      } else bb = yb;
      const hy = bb < 0n ? -bb : bb,
        fy = bb < 0n ? "-" : "",
        Zy = hy.toString();
      if (Zy.length <= Wy) return `${fy}${Zy}`;
      const cb = 3 * Math.floor((Zy.length - 1) / 3);
      if (cb < 3) return `${fy}${Zy}`;
      if (cb > 3 * Uy.length) {
        const yb = Zy[0],
          bb = Zy.slice(1, 3).replace(/0+$/, "");
        return `${fy}${bb?`${yb}.${bb}`:yb}e${Zy.length-1}`
      }
      const {
        threshold: Py,
        suffix: oy
      } = Uy[Uy.length - cb / 3], By = hy / Py, Ky = Number(1000n * (hy % Py) / Py), ey = Number(By) + Ky / 1e3;
      let qb;
      return qb = ey >= 100 ? Math.floor(ey).toString() : ey >= 10 ? ey.toFixed(1).replace(/\.0$/, "") : ey.toFixed(2).replace(/\.?0+$/, ""), `${fy}${qb}${oy}`
    }
    const fy = Uy.map((yb => {
      let {
        threshold: bb,
        suffix: Wy
      } = yb;
      return {
        threshold: Number(bb),
        suffix: Wy
      }
    })).filter((yb => {
      let {
        threshold: bb
      } = yb;
      return Number.isFinite(bb)
    }));

    function Zy(yb) {
      const bb = Math.abs(yb),
        Wy = yb < 0 ? "-" : "";
      for (const {
          threshold: Uy,
          suffix: hy
        }
        of fy)
        if (bb >= Uy) {
          const yb = bb / Uy;
          if (yb >= 1e3) return `${Wy}${bb.toExponential(2).replace("e+","e")}`;
          let fy;
          return fy = yb >= 100 ? Math.floor(yb).toString() : yb >= 10 ? yb.toFixed(1).replace(/\.0$/, "") : yb.toFixed(2).replace(/\.?0+$/, ""), `${Wy}${fy}${hy}`
        } return `${Wy}${bb}`
    }
  },
  8420: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By,
      f: () => ey,
      g: () => Ky,
      h: () => Zy,
      k: () => oy,
      l: () => Py
    });
    var Uy = Wy(258);
    const hy = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      fy = {
        Damage: {
          translationKey: "enchantments:damageDescription"
        },
        "Attack Speed": {
          translationKey: "enchantments:attackSpeedDescription"
        },
        "Critical Damage": {
          translationKey: "enchantments:criticalDamageDescription"
        },
        Protection: {
          translationKey: "enchantments:protectionDescription"
        },
        Health: {
          translationKey: "enchantments:healthDescription"
        },
        "Health Regen": {
          translationKey: "enchantments:healthRegenDescription"
        },
        "Stomp Damage": {
          translationKey: "enchantments:stompDamageDescription"
        },
        "Knockback Resist": {
          translationKey: "enchantments:knockbackResistDescription"
        },
        "Arrow Speed": {
          translationKey: "enchantments:arrowSpeedDescription"
        },
        "Arrow Damage": {
          translationKey: "enchantments:arrowDamageDescription"
        },
        "Quick Charge": {
          translationKey: "enchantments:quickChargeDescription"
        },
        "Break Speed": {
          translationKey: "enchantments:breakSpeedDescription"
        },
        Momentum: {
          translationKey: "enchantments:momentumDescription"
        },
        "Mining Yield": {
          translationKey: "enchantments:miningYieldDescription"
        },
        "Farming Yield": {
          translationKey: "enchantments:farmingYieldDescription"
        },
        "Mining Aura": {
          translationKey: "enchantments:miningAuraDescription"
        },
        "Digging Aura": {
          translationKey: "enchantments:diggingAuraDescription"
        },
        "Lumber Aura": {
          translationKey: "enchantments:lumberAuraDescription"
        },
        "Farming Aura": {
          translationKey: "enchantments:farmingAuraDescription"
        },
        "Horizontal Knockback": {
          translationKey: "enchantments:horizontalKnockbackDescription"
        },
        "Vertical Knockback": {
          translationKey: "enchantments:verticalKnockbackDescription"
        },
        "Firecracker Cooldown": {
          translationKey: "enchantments:firecrackerCooldownDescription"
        },
        "Firecracker Boost": {
          translationKey: "enchantments:firecrackerBoostDescription"
        },
        "Gliding Speed": {
          translationKey: "enchantments:glidingSpeedDescription"
        }
      };

    function Zy(yb) {
      var bb;
      return null !== (bb = fy[yb]) && void 0 !== bb ? bb : {
        translationKey: ""
      }
    }
    const cb = {
      "Wood Enchanting Table": [{
        min: 1,
        max: 2
      }, {
        min: 3,
        max: 4
      }, {
        min: 5,
        max: 6
      }],
      "Stone Enchanting Table": [{
        min: 2,
        max: 4
      }, {
        min: 5,
        max: 10
      }, {
        min: 11,
        max: 15
      }],
      "Iron Enchanting Table": [{
        min: 5,
        max: 10
      }, {
        min: 11,
        max: 20
      }, {
        min: 21,
        max: 30
      }],
      "Gold Enchanting Table": [{
        min: 20,
        max: 30
      }, {
        min: 31,
        max: 40
      }, {
        min: 41,
        max: 50
      }],
      "Diamond Enchanting Table": [{
        min: 40,
        max: 50
      }, {
        min: 50,
        max: 70
      }, {
        min: 71,
        max: 80
      }]
    };

    function Py(yb) {
      return hy.includes(yb)
    }

    function oy(yb) {
      var bb;
      return !0 === (null === yb || void 0 === yb || null === (bb = yb.customAttributes) || void 0 === bb ? void 0 : bb.cannotEnchant)
    }

    function By(yb, bb) {
      const {
        max: Wy
      } = cb[yb].at(-1);
      return bb <= Wy
    }

    function Ky(yb) {
      const bb = Math.sin(yb / 80),
        Wy = yb => {
          if (yb <= 0) return 0;
          if (yb > 1) return 1;
          let bb = 0;
          const Wy = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Uy = 0; Uy < Wy.length; Uy++) {
            bb += (Uy % 2 === 0 ? 1 : -1) * Wy[Uy] * Math.pow(yb, 2 + Uy) / (2 + Uy)
          }
          return 72 * bb
        },
        Uy = .3 - .78 * bb,
        hy = .5 - .78 * bb,
        fy = .6 - .7 * bb,
        Zy = .8 - .6 * bb;
      let cb = Wy(Uy),
        Py = Wy(hy) - cb,
        oy = Wy(fy) - Py - cb,
        By = Wy(Zy) - oy - Py - cb;
      Uy < .041 && (Py /= 1 - cb, oy /= 1 - cb, By /= 1 - cb, cb = 0), hy < .041 && (cb /= 1 - Py, oy /= 1 - Py, By /= 1 - Py, Py = 0), fy < .041 && (cb /= 1 - oy, Py /= 1 - oy, By /= 1 - oy, oy = 0), Zy < .041 && (cb /= 1 - By, Py /= 1 - By, oy /= 1 - By, By = 0);
      return {
        commonProb: cb,
        uncommonProb: Py,
        rareProb: oy,
        epicProb: By,
        legendaryProb: 1 - (By + oy + Py + cb)
      }
    }

    function ey(yb, bb) {
      const {
        min: Wy,
        max: hy
      } = cb[yb][bb], fy = Uy.c.sampleUniformIntDistribution(Wy, hy, "includeMax");
      return {
        ...Ky(fy),
        level: fy
      }
    }
  },
  7892: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return !yb.hidden && (bb || !yb.isRewardedAd)
    }

    function hy(yb) {
      return "object" === typeof yb ? yb.option : yb
    }

    function fy(yb, bb) {
      var Wy;
      if ("dropdown" === (null === (Wy = yb.userInput) || void 0 === Wy ? void 0 : Wy.type) && "object" === typeof yb.userInput.dropdownOptions[0]) {
        for (const Wy of yb.userInput.dropdownOptions)
          if (hy(Wy) === bb) return "object" === typeof Wy ? Wy.cost : yb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", yb, "input:", bb)
      }
      return yb.cost
    }

    function Zy(yb, bb, Wy) {
      var Uy;
      const hy = null !== (Uy = Wy.excludedPlayers) && void 0 !== Uy ? Uy : [bb];
      return yb.filter((yb => !hy.includes(yb)))
    }
    Wy.d(bb, {
      b: () => fy,
      d: () => hy,
      h: () => Zy,
      k: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);