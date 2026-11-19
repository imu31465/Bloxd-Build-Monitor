export const id = 98;
export const ids = [98, 184];
export const modules = {
  8641: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      EverythingMenu: () => BR
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1211),
      OY = DY(1098),
      gY = DY(1926),
      aY = DY(1134),
      vY = DY(1125);

    function uY(YY) {
      let {
        items: rY,
        onClick: DY,
        selectedItemId: FY,
        className: AY,
        padStartsOnTab: uY = !0
      } = YY;
      const {
        t: sY
      } = (0, RY.C)(), iY = (0, aY.m)(), yY = [];
      for (const IY of rY) {
        var QY;
        const YY = yY[yY.length - 1];
        var oY;
        if (YY && YY.title === (null !== (QY = IY.section) && void 0 !== QY ? QY : null)) YY.items.push(IY);
        else yY.push({
          title: null !== (oY = IY.section) && void 0 !== oY ? oY : null,
          items: [IY]
        })
      }
      return (0, vY.jsx)("div", {
        className: IY()("MenuSideBarBody", AY),
        "data-pad-tabs": "2",
        children: yY.map(((YY, rY) => {
          var AY;
          return (0, vY.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [YY.title && (0, vY.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: sY(YY.title)
            }), YY.items.map((YY => {
              var rY;
              const AY = !!YY.iconElement || !!YY.faIcon;
              return (0, vY.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": FY === YY.id ? "true" : void 0,
                "data-pad-default-focus": uY && FY === YY.id || void 0,
                className: IY()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: FY === YY.id
                }),
                onClick: () => {
                  DY(YY.id)
                },
                children: [AY && (0, vY.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (rY = YY.iconElement) && void 0 !== rY ? rY : (0, vY.jsx)(OY.e, {
                    name: YY.faIcon
                  })
                }), (!iY || !AY) && (0, vY.jsx)("div", {
                  children: sY(YY.title)
                }), YY.redDot && (0, vY.jsx)(gY.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, YY.id)
            }))]
          }, null !== (AY = YY.title) && void 0 !== AY ? AY : rY)
        }))
      })
    }
    var sY = DY(2620),
      iY = DY(1152),
      yY = DY(2282),
      QY = DY(1143),
      oY = DY(1437),
      WY = DY(99),
      EY = DY(1808),
      mY = DY(2114),
      VY = DY(2116),
      SY = DY(1654),
      lY = DY(1337),
      TY = DY(4580),
      eY = DY(19),
      NY = DY(8643);

    function BY(YY) {
      let {
        setApplySettingsCallback: rY
      } = YY;
      const {
        clientEscMenuOptions: DY
      } = (0, eY.j)(["clientEscMenuOptions"]), [AY, IY] = (0, FY.useState)(!1), [RY, OY] = (0, FY.useState)(!1), [gY, aY] = (0, FY.useState)(6400), [uY, sY] = (0, FY.useState)(3600), [iY, yY] = (0, FY.useState)(!1), [QY, WY] = (0, FY.useState)(!1);

      function EY(YY) {
        const rY = "screenshot" === YY ? OY : IY;
        rY(!0);
        const DY = iY ? "normals" : QY ? "depth" : null;
        NY.devTools.downloadScene(YY, {
          width: gY,
          height: uY,
          colouring: DY
        }).catch((YY => {
          console.error("Couldn't download the scene", YY)
        })).finally((() => {
          rY(!1)
        }))
      }
      return (0, vY.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, vY.jsx)(TY.c, {
          label: "Disable Ambient Occlusion",
          checked: DY.disableAmbientOcclusion,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              disableAmbientOcclusion: YY
            }), rY((() => TY.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), NY.devTools.supports("ambientLight") && (0, vY.jsx)(TY.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: DY.ambientLightIntensity,
          onChange: YY => {
            NY.devTools.setAmbientLightIntensity(YY).then((() => {
              eY.b.setClientEscMenuOptions({
                ambientLightIntensity: YY
              })
            })).catch((YY => {
              console.error("Couldn't set the ambient light", YY)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), NY.devTools.supports("weaponRaycasts") && (0, vY.jsx)(TY.c, {
          label: "Show Weapon Raycasts",
          checked: DY.showWeaponRaycasts,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              showWeaponRaycasts: YY
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), NY.devTools.supports("sceneDownload") && (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, vY.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, vY.jsx)(TY.c, {
              label: "Apply normal-based coloring",
              checked: iY,
              onClick: YY => {
                yY(YY), YY && WY(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, vY.jsx)(TY.c, {
              label: "Apply depth-based coloring",
              checked: QY,
              onClick: YY => {
                WY(YY), YY && yY(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, vY.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, vY.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, vY.jsx)(SY.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (YY, rY) => {
                  const DY = parseInt(YY) || 6400;
                  aY(DY)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: gY.toString()
              }), (0, vY.jsx)("span", {
                children: "X"
              }), (0, vY.jsx)(SY.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (YY, rY) => {
                  const DY = parseInt(YY) || 3600;
                  sY(DY)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: uY.toString()
              })]
            }), (0, vY.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, vY.jsxs)(oY.f, {
                onClick: () => {
                  EY("screenshot")
                },
                disabled: RY,
                children: [RY && (0, vY.jsx)(lY.c, {}), "Download Screenshot"]
              }), (0, vY.jsxs)(oY.f, {
                onClick: () => {
                  EY("glb")
                },
                disabled: AY,
                children: [AY && (0, vY.jsx)(lY.c, {}), "Download GLB"]
              })]
            })]
          }), (0, vY.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var cY = DY(144),
      KY = DY(1159),
      HY = DY(1222),
      zY = DY(2627),
      ZY = DY(1488),
      CY = DY(1270),
      fY = DY(1237),
      jY = DY(2697),
      hY = DY(1902),
      dY = DY(1471),
      JY = DY(341),
      MY = DY(2118),
      wY = DY(2129),
      bY = DY(1354),
      XY = DY(1226),
      qY = DY(4459),
      pY = DY(1450),
      kY = DY(3268),
      GY = DY(2429),
      xY = DY(2105);

    function nY(YY) {
      let {
        showing: rY
      } = YY;
      const {
        t: DY
      } = (0, RY.C)(), {
        data: FY,
        failed: AY
      } = (0, GY.g)(kY.g, rY);
      return 0 === (null === FY || void 0 === FY ? void 0 : FY.length) || null === FY && !AY ? null : (0, vY.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, vY.jsx)("div", {
          className: "AccountSettingsLabel",
          children: DY("paymentHistory:title")
        }), null === FY && AY && (0, vY.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: DY("paymentHistory:loadFailed")
        }), null !== FY && (0, vY.jsx)("ul", {
          className: "PaymentHistoryList",
          children: FY.map((YY => (0, vY.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, vY.jsx)(xY.e, {
              entry: YY
            }), (0, vY.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, vY.jsx)("div", {
                children: (0, xY.h)(DY, YY)
              }), (0, vY.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(YY.at).toLocaleDateString(), "number" === typeof YY.orderId && ` \xb7 ${DY("paymentHistory:order",{orderId:YY.orderId})}`]
              })]
            })]
          }, (0, kY.c)(YY))))
        })]
      })
    }
    var PY = DY(1253),
      UY = DY(1346),
      LY = DY(1314);

    function tY() {
      const {
        userContext: YY,
        isUserContextUpdating: rY
      } = (0, iY.d)(), {
        t: DY
      } = (0, RY.C)(), [AY, IY] = (0, FY.useState)(!1), [OY, gY] = (0, FY.useState)(null), aY = rY || AY;
      return (0, vY.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, vY.jsxs)(oY.D, {
          onClick: async function() {
            if (!AY) {
              IY(!0);
              try {
                const rY = await async function() {
                  if (!0 !== await UY.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, CY.d)(YY.getPlayerName(), !WY.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: Yr(YY.isLoggedIn()),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return PY.e.ok();
                  const rY = await (0, KY.postJsonWithMetricsCookiesAndJsonResponse)(`${HY.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: eY.b.get("gameState")
                  }, {
                    retries: 3
                  }, YY.getMetricsCookies());
                  if (rY.error) return PY.e.error(rY.error);
                  (0, cY.b)() && (await LY.k.discordActivity()).exit("User deleted their account");
                  return (0, KY.forgetStoredGuestAccount)(YY.whamm), (0, KY.forceGlobalSignOut)(!0), PY.e.ok()
                }(), DY = rY.isError() ? rY.asError().message : null;
                gY(DY)
              } catch (rY) {
                console.error("Failed to delete account:", rY), gY(DY("auth:genericDeleteAccountError"))
              }
              IY(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: aY,
          children: [aY && (0, vY.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, vY.jsx)(lY.c, {})
          }), DY("auth:deleteAccount")]
        }), OY && (0, vY.jsx)("div", {
          className: "DeleteAccountError",
          children: OY
        })]
      })
    }

    function Yr(YY) {
      return (0, cY.b)() ? "auth:discordActivityDeleteAccountWarning" : YY ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
    }
    var rr = DY(3184),
      Dr = DY(3207),
      Fr = DY(3199);

    function Ar(YY) {
      let {
        showing: rY
      } = YY;
      const {
        t: DY
      } = (0, RY.C)(), {
        data: FY,
        failed: AY
      } = (0, GY.g)(rr.e, rY), IY = null === FY ? null : (0, rr.g)(FY);
      return (0, vY.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, vY.jsx)("div", {
          className: "AccountSettingsLabel",
          children: DY("settingsMenu:blockedAndIgnoredPlayers")
        }), null === IY && !AY && (0, vY.jsx)(lY.c, {}), null === IY && AY && (0, vY.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [DY("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, vY.jsx)(oY.f, {
            className: "SmallTextLight",
            onClick: () => {
              rr.e.refresh()
            },
            children: DY("general:tryAgain")
          })]
        }), 0 === (null === IY || void 0 === IY ? void 0 : IY.length) && (0, vY.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: DY("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== IY && IY.length > 0 && (0, vY.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: IY.map((YY => {
            let {
              name: rY,
              exclusion: FY
            } = YY;
            const AY = Fr.g[FY];
            return (0, vY.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, vY.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: rY
              }), (0, vY.jsx)(oY.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Dr.c)(AY, rY, {
                    chatMessage: null
                  })
                },
                children: DY(Fr.h[AY].text)
              })]
            }, rY)
          }))
        })]
      })
    }
    const Ir = (0, FY.memo)((function(YY) {
      var rY;
      let {
        showing: DY,
        inGame: AY
      } = YY;
      const {
        t: gY,
        selectedLanguage: aY
      } = (0, RY.C)(), {
        hideSocialLocationFrom: uY
      } = (0, eY.j)(["hideSocialLocationFrom"]), yY = (0, sY.c)(), {
        userContext: QY,
        isUserContextUpdating: EY
      } = (0, iY.d)(), [mY, VY] = (0, FY.useState)(null !== (rY = QY.getPlayerName()) && void 0 !== rY ? rY : ""), [NY, BY] = (0, FY.useState)(null), {
        purchasing: kY,
        outcome: GY,
        purchase: xY
      } = (0, zY.b)("/super-rank-welcome"), [PY, UY] = (0, FY.useState)(!1), [LY, Yr] = (0, FY.useState)(!1), rr = (0, FY.useRef)(null), Dr = (0, FY.useRef)(null), Fr = (0, hY.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Ir = null === Fr, Or = null !== Fr && void 0 !== Fr ? Fr : [], gr = QY !== KY.NULL_USER_CONTEXT && !QY.isLoggedIn(), ar = gr && 0 !== (null === Fr || void 0 === Fr ? void 0 : Fr.length), [vr, ur] = (0, FY.useState)([]), [sr, ir] = (0, FY.useState)(!1), yr = QY.playerHasRank("youtuber"), Qr = (0, FY.useCallback)((() => dY.e.getPlayerProfile(QY, {
        lowerCaseName: QY.getPlayerName().toLowerCase()
      }).then((YY => {
        ur(YY.socialLinks)
      })).catch((YY => {
        console.error("Failed to refresh social links", YY)
      }))), [QY]);

      function or(YY) {
        YY !== mY && ((0, CY.p)(YY) ? (YY = (0, CY.s)(YY), BY("Only letters, numbers, and _")) : BY(null), rr.current && (rr.current.value = YY), VY(YY))
      }
      return (0, FY.useEffect)((() => (!0 === DY ? (clearInterval(Dr.current), Dr.current = setInterval(yY, 1e3)) : clearInterval(Dr.current), () => {
        clearInterval(Dr.current)
      })), [DY, yY]), (0, FY.useEffect)((() => {
        var YY;
        VY(null !== (YY = QY.getPlayerName()) && void 0 !== YY ? YY : "")
      }), [QY]), (0, FY.useEffect)((() => {
        if (!DY || !yr || EY) return;
        let YY = !1;
        return ir(!0), ur([]), dY.e.getPlayerProfile(QY, {
          lowerCaseName: QY.getPlayerName().toLowerCase()
        }).then((rY => {
          YY || ur(rY.socialLinks)
        })).catch((YY => {
          console.error("Failed to load social links", YY)
        })).finally((() => {
          YY || ir(!1)
        })), () => {
          YY = !0
        }
      }), [DY, yr, EY, QY]), (0, vY.jsxs)("div", {
        className: IY()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: AY
        }),
        children: [AY && (0, vY.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: gY("settingsMenu:accountSettingsInGameWarning")
        }), (0, vY.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, vY.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [gY("homePage:discordNamePopupTitle"), (0, vY.jsxs)(ZY.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, fY.h)({
                name: QY.getPlayerName()
              }),
              onClick: () => {
                eY.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, vY.jsx)(OY.e, {
                name: "arrow-up-right-from-square"
              }), " ", gY("profileCard:viewProfile")]
            })]
          }), (0, vY.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, vY.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [WY.featureFlags.canChangeName && (0, vY.jsx)(SY.d, {
                className: "EnterName",
                placeholderText: gY("homePage:enterName"),
                maxLength: CY.k,
                defaultValue: mY,
                onValueChange: YY => {
                  or(YY)
                },
                forcedText: PY || !WY.featureFlags.canChangeName ? mY : null,
                blurOnEnter: !0,
                domRef: rr
              }), (0, vY.jsx)(oY.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  or((0, CY.h)())
                },
                children: (0, vY.jsx)(OY.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !WY.featureFlags.canChangeName && (0, vY.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, CY.d)(mY, !WY.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, vY.jsx)(oY.f, {
              className: "ChooseNameButton",
              disabled: PY || mY === QY.getPlayerName(),
              onClick: () => {
                mY.length < CY.o ? BY(gY("homePage:changeNameMinLengthError", {
                  length: CY.o
                })) : mY.length > CY.k ? BY(gY("homePage:changeNameMaxLengthError", {
                  length: CY.k
                })) : (UY(!0), BY(null), async function(YY, rY, DY, FY) {
                  const AY = await (0, KY.postJsonWithMetricsCookiesAndJsonResponse)(`${HY.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: YY
                  }, {
                    retries: 3
                  }, rY.getMetricsCookies()).catch((YY => (console.error("Bad response from the server when trying to update name:", YY), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  AY.err ? (console.error("Error when trying to get with new name from DB", AY.err), FY(AY.err)) : !0 === AY.nameExists ? FY("Name is already taken") : DY(YY)
                }(mY, QY, (YY => {
                  QY.setPlayerName(YY), UY(!1)
                }), (YY => {
                  BY(YY), UY(!1)
                })))
              },
              children: gY("general:choose")
            })]
          }), NY && (0, vY.jsx)("div", {
            className: "ChooseAccNameError",
            children: NY
          })]
        }), (0, vY.jsx)(TY.c, {
          label: (() => {
            if ((0, XY.k)(uY)) {
              const YY = (0, RY.q)(aY.code, "general:timeLeft"),
                rY = (0, JY.fb)(YY, Date.now(), uY + XY.i);
              return `${gY("settingsMenu:hideSocialLocation")} (${gY("general:timeLeft",{time:rY})})`
            }
            return gY("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const YY = !(0, XY.k)(uY);
            (0, pY.reportAnalyticsClick)({
              id: "social.hide_location",
              value: YY ? "on" : "off"
            }), Yr(!0), dY.e.setHideSocialLocation(QY, YY).then((() => {
              eY.b.set({
                hideSocialLocationFrom: YY ? Date.now() : null
              })
            })).finally((() => {
              Yr(!1)
            }))
          },
          checked: (0, XY.k)(uY),
          disabled: LY
        }), yr && (0, vY.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, vY.jsx)("div", {
            className: "AccountSettingsLabel",
            children: gY("settingsMenu:socialLinks")
          }), sr && (0, vY.jsx)(lY.c, {}), !sr && (0, vY.jsx)(qY.d, {
            socialLinks: vr,
            editable: !0,
            userContext: QY,
            onLinksUpdated: Qr
          })]
        }), (0, vY.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vY.jsx)("div", {
            className: "AccountSettingsLabel",
            children: gY(ar ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Ir && (0, vY.jsx)(lY.c, {}), !Ir && 0 === Or.length && (0, vY.jsx)("div", {
            className: "NoLoginOptions",
            children: gY("auth:noLoginOptions")
          }), !Ir && Or.length > 0 && "crazygames" !== cY.s && (0, vY.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Or
          }), !Ir && Or.length > 0 && "crazygames" === cY.s && (0, vY.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Or[0], Or.length > 1 && (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, vY.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: gY("auth:legacyLoginOptions")
                }), (0, vY.jsx)(bY.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: gY("auth:legacyLoginOptionsInfo")
                })]
              }), (0, vY.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Or.slice(1)
              })]
            })]
          }), WY.featureFlags.useLogin && (null !== QY.loggedInInfo || QY.isLoggedIn()) && (0, vY.jsxs)(vY.Fragment, {
            children: [(0, vY.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, vY.jsxs)(oY.D, {
              onClick: () => {
                (0, KY.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, vY.jsx)(OY.e, {
                name: "right-from-bracket"
              }), gY("auth:signOut")]
            })]
          })]
        }), !QY.playerHasRank("super") && (0, wY.purchasesAllowed)() && (0, vY.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, vY.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, vY.jsx)(OY.e, {
              name: "bolt"
            }), gY("homePage:superRank")]
          }), (0, vY.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, vY.jsxs)(oY.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, MY.f)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, vY.jsx)(OY.e, {
                name: "bolt"
              }), gY("homePage:getSuperRank")]
            }), (0, vY.jsxs)(oY.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, MY.f)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, vY.jsx)(OY.e, {
                name: "bolt"
              }), gY("homePage:giftSuperRank")]
            })]
          })]
        }), QY.playerHasRank("super") && (0, vY.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, vY.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, vY.jsx)(OY.e, {
              name: "bolt"
            }), gY("homePage:superRank"), (0, vY.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", gY("general:timeLeft", {
                time: (0, JY.hc)((0, RY.q)(aY.code, "general:timeLeft"), QY.superRankInfo)
              }), ")"]
            })]
          }), (0, wY.purchasesAllowed)() && (0, vY.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, vY.jsxs)(oY.n, {
              className: "AccountSettingsSuperRankProlong",
              loading: kY,
              onClick: () => {
                xY(jY.l.id, null)
              },
              children: [(0, vY.jsx)(OY.e, {
                name: "bolt"
              }), gY("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: jY.l.product.days,
                price: jY.l.price
              })]
            }), (0, vY.jsxs)(oY.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, MY.f)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, vY.jsx)(OY.e, {
                name: "bolt"
              }), gY("homePage:giftSuperRank")]
            })]
          }), GY && (0, vY.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: gY(GY.translationKey)
          })]
        }), (0, vY.jsx)(nY, {
          showing: DY
        }), WY.featureFlags.useSocialFeatures && (0, vY.jsx)(Ar, {
          showing: DY
        }), (0, vY.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, vY.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, vY.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: gY(Rr(gr, ar))
            }), (0, cY.b)() && (0, vY.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: gY("auth:discordActivityKickWarning")
            }), (0, vY.jsx)(tY, {})]
          }), (0, vY.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: gY("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Rr(YY, rY) {
      return YY ? rY ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Or = DY(8649),
      gr = DY(2722),
      ar = DY(1256),
      vr = DY(1413);
    const ur = (0, FY.memo)((function(YY) {
        let {
          inGame: rY
        } = YY;
        const {
          t: DY,
          selectedLanguage: FY
        } = (0, RY.C)(), {
          clientEscMenuOptions: AY,
          showDebugOverlay: IY
        } = (0, eY.j)(["clientEscMenuOptions", "showDebugOverlay"]), OY = (0, yY.j)("hideCoordinates");
        let gY = "settingsMenu:showCoordinates",
          aY = "settingsMenu:showChunkCoordinates";

        function uY(YY) {
          const rY = new Intl.DisplayNames([YY], {
            type: "language"
          }).of(YY);
          return rY.charAt(0).toUpperCase() + rY.slice(1)
        }
        return OY && (gY = "settingsMenu:showCoordinatesHidden", aY = "settingsMenu:showChunkCoordinatesHidden"), (0, vY.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [rY && WY.featureFlags.canUseInviteLinks && (0, vY.jsxs)("div", {
            className: "SettingBox",
            children: [(0, vY.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: DY("settingsMenu:inviteLink")
            }), (0, vY.jsx)(Or.f, {})]
          }), (0, vY.jsxs)("div", {
            className: "SettingBox",
            children: [(0, vY.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: DY("settingsMenu:language")
            }), (0, vY.jsx)(gr.b, {
              options: Object.entries(RY.l).map((YY => {
                let [rY, DY] = YY;
                return {
                  label: (0, vY.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, vY.jsx)("img", {
                      src: DY.flagImg,
                      alt: "flag"
                    }), (0, vY.jsxs)("span", {
                      children: [uY(rY), " ", (0, vY.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", rY, ")"]
                      })]
                    })]
                  }),
                  value: rY
                }
              })),
              value: FY.code,
              onChange: YY => {
                ar.h.get().setCurrentLanguage(YY.value)
              }
            })]
          }), !(0, WY.isMobileApp)() && (0, vr.g)() && WY.featureFlags.useForceRotateForceFullscreenOverlay && (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:disableFullscreenMode"),
            checked: AY.disableFullscreen,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                disableFullscreen: YY
              })
            }
          }), (0, vY.jsx)(TY.c, {
            label: DY(gY),
            checked: AY.showCoordinates,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                showCoordinates: YY
              })
            },
            disabled: OY
          }), (0, vY.jsx)(TY.c, {
            label: DY(aY),
            checked: AY.showChunkCoordinates,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                showChunkCoordinates: YY
              })
            },
            disabled: OY
          }), (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:showFps"),
            checked: AY.showFPS,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                showFPS: YY
              })
            }
          }), (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:disableBunnyHopping"),
            checked: AY.disableBunnyHopping,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                disableBunnyHopping: YY
              })
            }
          }), (0, LY.y)() && (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:showChat"),
            checked: AY.showChat,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                showChat: YY
              })
            }
          }), (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:showDebugOverlay"),
            checked: IY,
            onClick: YY => {
              eY.b.set({
                showDebugOverlay: YY
              })
            }
          }), WY.featureFlags.useSocialFeatures && (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:showFriendOnlineToasts"),
            checked: AY.showFriendOnlineToasts,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                showFriendOnlineToasts: YY
              })
            }
          }), (0, vY.jsx)(TY.c, {
            label: DY("settingsMenu:showNewItemIndicator"),
            checked: AY.showNewItemIndicator,
            onClick: YY => {
              eY.b.setClientEscMenuOptions({
                showNewItemIndicator: YY
              })
            }
          })]
        })
      })),
      sr = (0, FY.memo)((function() {
        const {
          t: YY
        } = (0, RY.C)(), {
          soundVolume: rY,
          musicVolume: DY
        } = (0, eY.j)(["soundVolume", "musicVolume"]);
        return (0, vY.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, vY.jsx)(TY.j, {
            name: YY("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: DY,
            onChange: YY => {
              eY.b.set({
                musicVolume: Math.round(100 * YY) / 100
              })
            },
            format: YY => YY.toFixed(2)
          }), (0, vY.jsx)(TY.j, {
            name: YY("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: rY,
            onChange: YY => {
              eY.b.set({
                soundVolume: Math.round(100 * YY) / 100
              })
            },
            format: YY => YY.toFixed(2)
          })]
        })
      }));
    var ir = DY(722),
      yr = DY(1430),
      Qr = DY(3280),
      or = DY(8653),
      Wr = DY(3069);
    const Er = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function mr() {
      const {
        t: YY
      } = (0, RY.C)(), rY = (0, Wr.b)(), {
        mobilePushNotificationsCanAsk: DY
      } = (0, eY.j)(["mobilePushNotificationsCanAsk"]), [AY, IY] = (0, FY.useState)(null), [OY, gY] = (0, FY.useState)(!1), [aY, uY] = (0, FY.useState)(null), [sY, iY] = (0, FY.useState)(!1), yY = (0, FY.useCallback)((() => {
        (0, Qr.b)().then((YY => {
          rY.current && (IY(YY), gY(!1))
        })).catch((YY => {
          console.error("Failed to load push notification targets:", YY), rY.current && gY(!0)
        }))
      }), [rY]), QY = (0, FY.useCallback)((() => {
        (0, or.e)().then((YY => {
          rY.current && uY((() => YY))
        }))
      }), [rY]);
      (0, FY.useEffect)((() => {
        yY()
      }), [yY]), (0, FY.useEffect)((() => {
        QY()
      }), [QY, DY]), (0, yr.g)(Qr.e, yY);
      const WY = null === AY ? [] : Object.keys(Er).filter((YY => AY[YY] > 0));
      return (0, vY.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, vY.jsx)("div", {
          className: "SliderText",
          children: YY("notificationSettings:pushNotifications")
        }), null === AY && OY && (0, vY.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: YY("notificationSettings:pushTargetsLoadFailed")
        }), null !== AY && 0 === WY.length && (0, vY.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: YY("notificationSettings:pushTargetsNone")
        }), WY.length > 0 && (0, vY.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: WY.map((rY => {
            var DY;
            return (0, vY.jsx)("li", {
              children: YY(Er[rY], {
                count: null !== (DY = null === AY || void 0 === AY ? void 0 : AY[rY]) && void 0 !== DY ? DY : 0
              })
            }, rY)
          }))
        }), null !== aY && (0, vY.jsx)(oY.f, {
          className: "PushNotificationSettingsButton",
          loading: sY,
          onClick: () => {
            iY(!0), aY().catch((YY => {
              console.error("Failed to turn on push notifications:", YY)
            })).finally((() => {
              rY.current && (iY(!1), QY())
            }))
          },
          children: YY("notificationSettings:pushTurnOn")
        })]
      })
    }
    const Vr = {
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
      Sr = (0, FY.memo)((function() {
        const {
          t: YY
        } = (0, RY.C)(), {
          clientEscMenuOptions: rY
        } = (0, eY.j)(["clientEscMenuOptions"]);
        return (0, vY.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, vY.jsx)(TY.f, {
            label: YY("notificationSettings:friendRequests"),
            options: ir.d.map((rY => ({
              value: rY,
              label: YY(Vr[rY].label)
            }))),
            value: rY.friendRequestNotifications,
            onChange: YY => {
              eY.b.setClientEscMenuOptions({
                friendRequestNotifications: YY
              })
            },
            circleInfoText: (0, vY.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: ir.d.map((rY => (0, vY.jsxs)("div", {
                children: [(0, vY.jsx)("b", {
                  children: YY(Vr[rY].label)
                }), ": ", YY(Vr[rY].info)]
              }, rY)))
            })
          }), (0, vY.jsx)(mr, {})]
        })
      }));
    var lr = DY(4047),
      Tr = DY(213),
      er = DY(307),
      Nr = DY(6230),
      Br = DY(3015),
      cr = DY(8655),
      Kr = DY(625),
      Hr = DY(25);
    var zr = DY(649),
      Zr = DY(40),
      Cr = DY(3926);
    const fr = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function jr(YY) {
      return fr.has(YY) ? EY.gameBridge.lookup("qE", null) : null
    }

    function hr(YY) {
      if (!(0, Kr.H)(eY.b.get("clientEscMenuOptions")[YY])) return eY.b.get("clientEscMenuOptions")[YY];
      const rY = jr(YY);
      return null !== rY ? rY[fr.get(YY)] : Zr.m.getItem(YY)
    }

    function dr(YY, rY) {
      if ("useTouchControls" === YY) return void(0, Cr.b)(rY);
      YY in eY.b.get("clientEscMenuOptions") && eY.b.setClientEscMenuOptions({
        [YY]: rY
      });
      const DY = jr(YY);
      null !== DY && EY.gameBridge.send("setChunkAddDistance", {
        ...DY,
        [fr.get(YY)]: rY
      }), Zr.m.setItem(YY, rY)
    }
    var Jr = DY(3967),
      Mr = DY(8659),
      wr = DY(8667),
      br = DY(4040);

    function Xr(YY) {
      var rY, AY, OY, gY;
      let {
        minChunkAddDist: aY,
        getValue: uY,
        onChange: sY,
        setApplySettingsCallback: iY
      } = YY;
      const {
        t: QY
      } = (0, RY.C)(), {
        clientEscMenuOptions: oY
      } = (0, eY.j)(["clientEscMenuOptions", "showDistantNametags"]), EY = (0, FY.useRef)(uY("showFog")), mY = (0, FY.useRef)(oY.antiAliasing), VY = (0, FY.useRef)(oY.useWebGpu), [SY, lY] = (0, FY.useState)(null), [BY, cY] = (0, FY.useState)((() => (0, Br.c)(WY.featureFlags.settings.canUseShaderPacks))), [KY] = (0, FY.useState)((() => eY.b.isWebGpuDefaultOff())), [HY] = (0, FY.useState)(er.i);
      (0, FY.useEffect)((() => {
        let YY = !1;
        return (0, WY.hasUsableWebGpuAdapter)().then((rY => {
          YY || lY(rY)
        })), (0, Br.g)(WY.featureFlags.settings.canUseShaderPacks) && (0, Nr.e)().then((async rY => {
          const FY = null !== rY && await async function(YY) {
            const [{
              isShaderPackActive: rY
            }, {
              loadPageShaderPackCompiler: FY
            }] = await Promise.all([DY.e(128).then((() => DY(6221))), Promise.all([DY.e(74), DY.e(132), DY.e(131)]).then((() => DY(6182)))]);
            return rY(YY, await FY())
          }(rY);
          YY || cY(FY)
        })), () => {
          YY = !0
        }
      }), []);
      const zY = function(YY, rY, DY, FY, AY) {
          return (0, cr.b)(DY, FY) && !0 === rY ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== rY ? "settingsMenu:newWebGpu" : AY ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: YY && !1 !== rY,
            disabled: !0 !== rY
          }
        }(oY.useWebGpu, SY, BY, KY, HY),
        ZY = (oY.useWebGpu || (0, cr.b)(BY, KY)) && BY && !0 === SY,
        CY = (0, yY.j)("lightingOverride"),
        fY = !(0, Kr.H)(CY);
      let jY = "settingsMenu:enableLighting";
      fY && (jY = CY ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const hY = YY => {
          var rY, DY, FY;
          const AY = null !== (rY = YY.showFog) && void 0 !== rY ? rY : uY("showFog"),
            IY = null !== (DY = YY.antiAliasing) && void 0 !== DY ? DY : oY.antiAliasing,
            RY = null !== (FY = YY.useWebGpu) && void 0 !== FY ? FY : oY.useWebGpu,
            OY = !zr.r && AY !== EY.current || IY !== mY.current || RY !== VY.current;
          iY(OY ? () => TY.m : null)
        },
        dY = (0, yY.j)("fogChunkDistanceOverride"),
        JY = (0, yY.j)("fogBlockDistanceOverride"),
        MY = !(0, Kr.H)(dY) || !(0, Kr.H)(JY),
        wY = MY ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [bY, XY] = (0, lr.f)(aY),
        [qY, pY] = (0, br.e)(aY),
        kY = QY("settingsMenu:chunkLoadDistanceDeviceLimit"),
        GY = qY < bY,
        xY = Math.min(null !== (rY = uY("chunkHorizAddDist")) && void 0 !== rY ? rY : aY[0], qY),
        nY = !MY && function(YY, rY) {
          return !0 === YY.showFog && YY.fogChunkDistance > rY
        }(oY, xY);
      return (0, vY.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, vY.jsx)(TY.j, {
          name: QY("settingsMenu:horizontalChunkLoadDistance"),
          min: aY[0],
          max: bY,
          selectableMax: qY,
          cappedNote: kY,
          step: 1,
          initValue: xY,
          onChange: YY => {
            !0 === uY("showFog") && YY < uY("fogChunkDistance") && sY("fogChunkDistance", YY), sY("chunkHorizAddDist", YY), Hr.g.vo("updatedChunkLoadDist")
          },
          circleInfoText: QY("settingsMenu:chunkLoadDistanceInfo")
        }), (0, vY.jsx)(TY.j, {
          name: QY("settingsMenu:verticalChunkLoadDistance"),
          min: aY[1],
          max: XY,
          selectableMax: pY,
          cappedNote: GY ? void 0 : kY,
          step: 1,
          initValue: Math.min(null !== (AY = uY("chunkVertAddDist")) && void 0 !== AY ? AY : aY[1], pY),
          onChange: YY => {
            sY("chunkVertAddDist", YY), Hr.g.vo("updatedChunkLoadDist")
          },
          circleInfoText: QY("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, vY.jsx)(TY.c, {
          label: QY("settingsMenu:chunkFadeIn"),
          checked: oY.chunkFadeIn,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              chunkFadeIn: YY
            })
          },
          circleInfoText: QY("settingsMenu:chunkFadeInInfo")
        }), NY.devTools.supports("chunkBorders") && (0, vY.jsx)(TY.c, {
          label: QY("settingsMenu:showChunkBorders"),
          checked: oY.showChunkBorders,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              showChunkBorders: YY
            })
          },
          circleInfoText: QY("settingsMenu:showChunkBordersInfo")
        }), (0, vY.jsx)(TY.c, {
          label: QY(jY),
          checked: oY.enableLighting,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              enableLighting: YY
            })
          },
          disabled: fY
        }), (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, vY.jsx)(TY.c, {
            label: QY(wY),
            checked: oY.showFog,
            onClick: YY => {
              hY({
                showFog: YY
              }), eY.b.setClientEscMenuOptions({
                showFog: YY
              })
            },
            disabled: MY,
            className: IY()({
              SettingBoxWarning: nY
            })
          }), (0, vY.jsx)(TY.j, {
            name: QY("settingsMenu:fogChunkDistance"),
            min: aY[0],
            max: Tr.d.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (OY = oY.fogChunkDistance) && void 0 !== OY ? OY : aY[0],
            onChange: YY => {
              eY.b.setClientEscMenuOptions({
                fogChunkDistance: YY
              }), Hr.g.vo("fogChunkDistanceChanged", YY)
            },
            circleInfoText: QY("settingsMenu:fogChunkDistanceInfo"),
            disabled: MY || !1 === uY("showFog"),
            className: IY()({
              SettingBoxWarning: nY
            })
          }), nY && (0, vY.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: QY("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !zr.r && (0, vY.jsx)(TY.c, {
          label: QY(ZY ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !ZY && oY.disableTexAtlas,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              disableTexAtlas: YY
            })
          },
          circleInfoText: QY("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: ZY
        }), (0, vY.jsx)(TY.j, {
          name: QY("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: oY.cameraFOV,
          onChange: YY => {
            eY.b.setClientEscMenuOptions({
              cameraFOV: YY
            })
          }
        }), (0, vY.jsx)(TY.c, {
          label: QY("settingsMenu:disableViewBobbing"),
          checked: oY.disableBobbing,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              disableBobbing: YY
            })
          },
          circleInfoText: QY("settingsMenu:disableViewBobbingInfo")
        }), (0, vY.jsx)(TY.c, {
          label: QY("settingsMenu:antiAliasing"),
          checked: oY.antiAliasing,
          onClick: YY => {
            hY({
              antiAliasing: YY
            }), (0, Jr.f)("antiAliasing"), eY.b.setClientEscMenuOptions({
              antiAliasing: YY
            })
          },
          circleInfoText: QY("settingsMenu:antiAliasingInfo")
        }), (0, vY.jsx)(TY.j, {
          name: QY("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (gY = oY.pixelScale) && void 0 !== gY ? gY : 1,
          onChange: YY => {
            (YY !== eY.b.get("clientEscMenuOptions").pixelScale || (0, wr.q)()) && (0, Jr.f)("pixelScale"), eY.b.setClientEscMenuOptions({
              pixelScale: YY
            })
          },
          circleInfoText: QY("settingsMenu:pixelScaleInfo"),
          format: YY => `${YY}x`
        }), (0, vY.jsx)(TY.c, {
          label: QY("settingsMenu:pixelSmoothing"),
          checked: oY.pixelSmoothing,
          onClick: YY => {
            eY.b.setClientEscMenuOptions({
              pixelSmoothing: YY
            })
          },
          circleInfoText: QY("settingsMenu:pixelSmoothingInfo")
        }), zr.r && (0, vY.jsx)(TY.c, {
          label: QY("settingsMenu:distantNametags"),
          checked: (0, Mr.e)(),
          onClick: YY => {
            eY.b.set({
              showDistantNametags: YY
            })
          },
          circleInfoText: QY("settingsMenu:distantNametagsInfo")
        }), (0, vY.jsx)(TY.c, {
          label: QY(zY.translationKey),
          checked: zY.checked,
          onClick: YY => {
            hY({
              useWebGpu: YY
            }), eY.b.setClientEscMenuOptions({
              useWebGpu: YY
            })
          },
          circleInfoText: QY("settingsMenu:newWebGpuInfo"),
          disabled: zY.disabled
        })]
      })
    }
    var qr = DY(3959),
      pr = DY(8269),
      kr = DY(8680),
      Gr = DY(8280),
      xr = DY(8685);
    const nr = {
        color: 16777215,
        name: "white"
      },
      Pr = {
        color: 0,
        name: "black"
      },
      Ur = [nr, {
        color: 5046092,
        name: "green"
      }, {
        color: 16776960,
        name: "yellow"
      }, {
        color: 65535,
        name: "cyan"
      }, {
        color: 16731391,
        name: "pink"
      }, {
        color: 16726843,
        name: "red"
      }, Pr],
      Lr = [Pr, nr];

    function tr(YY) {
      return `${YY} px`
    }

    function YD(YY) {
      return `${YY}%`
    }

    function rD(YY) {
      let {
        label: rY,
        value: DY,
        swatches: FY,
        onChange: AY
      } = YY;
      const {
        t: OY
      } = (0, RY.C)(), gY = !FY.some((YY => YY.color === DY));
      return (0, vY.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, vY.jsx)("div", {
          className: "SliderText",
          children: rY
        }), (0, vY.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": rY,
          children: [FY.map((YY => {
            let {
              color: rY,
              name: FY
            } = YY;
            return (0, vY.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": rY === DY,
              "aria-label": OY(`crosshairSettings:color_${FY}`),
              "data-pad-focusable": !0,
              className: IY()("CrosshairSwatch", {
                Selected: rY === DY
              }),
              style: {
                background: (0, xr.j)(rY)
              },
              onClick: () => {
                AY(rY)
              }
            }, rY)
          })), (0, vY.jsx)("label", {
            className: IY()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: gY
            }),
            style: gY ? {
              background: (0, xr.j)(DY)
            } : void 0,
            title: OY("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, vY.jsx)("input", {
              type: "color",
              "aria-label": OY("crosshairSettings:customColor"),
              value: (0, xr.j)(DY),
              onChange: YY => {
                const rY = (0, xr.o)(YY.target.value);
                null !== rY && AY(rY)
              }
            })
          })]
        })]
      })
    }

    function DD(YY) {
      let {
        settings: rY,
        onChange: DY
      } = YY;
      const {
        t: FY
      } = (0, RY.C)(), AY = (YY, FY) => {
        DY((0, xr.u)(rY, YY, FY))
      }, IY = function(YY, DY) {
        let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tr;
        const {
          min: IY,
          max: RY,
          step: OY
        } = xr.b[YY];
        return (0, vY.jsx)(TY.j, {
          name: DY,
          min: IY,
          max: RY,
          step: OY,
          initValue: rY[YY],
          format: FY,
          onChange: rY => {
            AY(YY, rY)
          }
        }, YY)
      }, OY = ["lines", "dot", "circle"].filter((YY => rY[YY])), gY = (YY, DY, FY) => (0, vY.jsx)(TY.c, {
        label: DY,
        checked: rY[YY],
        disabled: 1 === OY.length && OY[0] === YY,
        circleInfoText: FY,
        onClick: rY => {
          AY(YY, rY)
        }
      }, YY), aY = "shapes" === rY.style;
      return (0, vY.jsxs)(vY.Fragment, {
        children: [(0, vY.jsx)(TY.f, {
          label: FY("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: FY("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: FY("crosshairSettings:styleShapes")
          }],
          value: rY.style,
          onChange: YY => {
            AY("style", YY)
          }
        }), (0, vY.jsx)(rD, {
          label: FY("crosshairSettings:color"),
          value: rY.color,
          swatches: Ur,
          onChange: YY => {
            AY("color", YY)
          }
        }), IY("opacity", FY("crosshairSettings:opacity"), YD), !aY && IY("size", FY("crosshairSettings:size"), YD), aY && (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [gY("lines", FY("crosshairSettings:lines")), rY.lines && IY("lineLength", FY("crosshairSettings:lineLength")), rY.lines && IY("lineThickness", FY("crosshairSettings:lineThickness")), rY.lines && IY("gap", FY("crosshairSettings:gap")), rY.lines && gY("tStyle", FY("crosshairSettings:tStyle"))]
        }), aY && (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [gY("dot", FY("crosshairSettings:dot")), rY.dot && IY("dotSize", FY("crosshairSettings:dotSize"))]
        }), aY && (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [gY("circle", FY("crosshairSettings:circle")), rY.circle && IY("circleRadius", FY("crosshairSettings:circleRadius")), rY.circle && IY("circleThickness", FY("crosshairSettings:circleThickness"))]
        }), (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [IY("outline", FY("crosshairSettings:outline"), (YY => YY > 0 ? tr(YY) : FY("crosshairSettings:off"))), rY.outline > 0 && (0, vY.jsx)(rD, {
            label: FY("crosshairSettings:outlineColor"),
            value: rY.outlineColor,
            swatches: Lr,
            onChange: YY => {
              AY("outlineColor", YY)
            }
          })]
        }), gY("growOnClick", FY("crosshairSettings:growOnClick")), aY && gY("forGuns", FY("crosshairSettings:forGuns"), FY("crosshairSettings:forGunsInfo"))]
      })
    }
    var FD = DY(76),
      AD = DY(1284),
      ID = DY(8691),
      RD = DY(8698),
      OD = DY(8705),
      gD = DY(8709);
    const aD = ["sky", "grass", "stone", "sand", "snow", "night"],
      vD = "4rem";

    function uD(YY) {
      return {
        backgroundImage: `url(${YY})`,
        backgroundSize: `${vD} ${vD}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function sD(YY) {
      return {
        ...(() => {
          switch (YY) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return uD(ID);
            case "stone":
              return uD(RD);
            case "sand":
              return uD(OD);
            case "snow":
              return uD(gD);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function iD(YY) {
      return Object.freeze({
        ...xr.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...YY
      })
    }
    const yD = [{
        id: "default",
        settings: xr.f
      }, {
        id: "cross",
        settings: iD({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: iD({
          color: 65535,
          lines: !0,
          lineLength: 6,
          lineThickness: 2,
          gap: 4,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "dot",
        settings: iD({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: iD({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: iD({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: iD({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: iD({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      QD = ["growOnClick", "forGuns"];
    var oD = DY(8718);

    function WD(YY) {
      let {
        label: rY,
        selected: DY,
        onClick: FY,
        className: AY,
        style: RY,
        children: OY
      } = YY;
      return (0, vY.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": DY,
        title: rY,
        "aria-label": rY,
        "data-pad-focusable": !0,
        className: IY()("CrosshairBackdropSwatch", AY, {
          Selected: DY
        }),
        style: RY,
        onClick: FY,
        children: OY
      })
    }

    function ED(YY) {
      let {
        backdrop: rY,
        onChange: DY,
        game: FY
      } = YY;
      const {
        t: AY
      } = (0, RY.C)();
      return (0, vY.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": AY("crosshairSettings:background"),
        children: [FY && (0, vY.jsx)(WD, {
          label: AY("crosshairSettings:bg_game"),
          selected: FY.selected,
          onClick: FY.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, vY.jsx)(OY.e, {
            name: "cube"
          })
        }), aD.map((YY => (0, vY.jsx)(WD, {
          label: AY(`crosshairSettings:bg_${YY}`),
          selected: !(null !== FY && void 0 !== FY && FY.selected) && YY === rY,
          style: sD(YY),
          onClick: () => {
            DY(YY)
          }
        }, YY)))]
      })
    }

    function mD(YY) {
      let {
        settings: rY,
        touch: DY,
        backdrop: FY,
        onChange: AY
      } = YY;
      const {
        t: OY
      } = (0, RY.C)(), gY = function(YY) {
        var rY;
        return null !== (rY = yD.find((rY => (0, xr.r)(rY.settings, YY, QD)))) && void 0 !== rY ? rY : null
      }(rY);
      return (0, vY.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": OY("crosshairSettings:presets"),
        children: yD.map((YY => {
          const RY = (null === gY || void 0 === gY ? void 0 : gY.id) === YY.id;
          return (0, vY.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": RY,
            "data-pad-focusable": !0,
            className: IY()("CrosshairPreset", {
              Selected: RY
            }),
            onClick: () => {
              AY(function(YY, rY) {
                return {
                  ...rY.settings,
                  growOnClick: YY.growOnClick,
                  forGuns: YY.forGuns
                }
              }(rY, YY))
            },
            children: [(0, vY.jsx)("div", {
              className: "CrosshairPresetStage",
              style: sD(FY),
              children: (0, vY.jsx)(oD.d, {
                settings: YY.settings,
                touch: DY,
                inPreview: !0
              })
            }), (0, vY.jsx)("div", {
              className: "CrosshairPresetName",
              children: OY(`crosshairSettings:preset_${YY.id}`)
            })]
          }, YY.id)
        }))
      })
    }

    function VD(YY, rY) {
      const [DY, AY] = (0, FY.useState)(!1), IY = () => {
        AY(!1)
      }, [RY, OY] = (0, FY.useState)(!1), gY = (0, FY.useRef)({
        growOnClick: YY.growOnClick,
        forGuns: YY.forGuns
      });
      (0, FY.useEffect)((() => {
        const rY = gY.current;
        gY.current = {
          growOnClick: YY.growOnClick,
          forGuns: YY.forGuns
        }, (YY.growOnClick && !rY.growOnClick || YY.forGuns && !rY.forGuns) && OY(!0)
      }), [YY.growOnClick, YY.forGuns]), (0, FY.useEffect)((() => {
        if (!RY) return;
        const YY = setTimeout((() => {
          OY(!1)
        }), 600);
        return () => {
          clearTimeout(YY)
        }
      }), [RY]);
      const aY = DY || RY;
      return {
        view: {
          pressed: aY,
          spread: aY && YY.forGuns && !YY.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: YY => {
            YY.target.closest(rY) || (YY.currentTarget.setPointerCapture(YY.pointerId), AY(!0))
          },
          onPointerUp: IY,
          onPointerCancel: IY,
          onLostPointerCapture: IY
        }
      }
    }

    function SD(YY) {
      let {
        settings: rY,
        touch: DY,
        backdrop: FY,
        className: AY,
        children: RY,
        label: OY
      } = YY;
      const gY = VD(rY, ".CrosshairStageControls");
      return (0, vY.jsxs)("div", {
        className: IY()("CrosshairStage", AY),
        style: sD(FY),
        ...gY.handlers,
        children: [(0, vY.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": OY,
          children: (0, vY.jsx)(oD.d, {
            settings: rY,
            touch: DY,
            inPreview: !0,
            ...gY.view
          })
        }), RY]
      })
    }
    const lD = "crosshairFullScreen";

    function TD(YY) {
      let {
        settings: rY,
        touch: DY,
        backdrop: AY,
        onBackdrop: gY,
        inGame: aY,
        onChange: uY,
        onClose: sY
      } = YY;
      const {
        t: iY
      } = (0, RY.C)(), yY = (0, FY.useRef)(null);
      (0, AD.t)("popup", yY, sY),
      function(YY) {
        const rY = (0, FY.useRef)(YY);
        rY.current = YY, (0, FY.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [lD]: !0
          }, "");
          let YY = !1;
          const DY = () => {
            YY = !0, rY.current()
          };
          return window.addEventListener("popstate", DY), () => {
            var rY;
            window.removeEventListener("popstate", DY), !YY && null !== (rY = window.history.state) && void 0 !== rY && rY[lD] && window.history.back()
          }
        }), [])
      }(sY);
      const QY = (0, FY.useRef)(sY);
      QY.current = sY, (0, FY.useEffect)((() => {
        function YY(YY) {
          "Escape" === YY.key && (YY.stopPropagation(), QY.current())
        }
        return window.addEventListener("keydown", YY, !0), () => {
          window.removeEventListener("keydown", YY, !0)
        }
      }), []);
      const WY = VD(rY, ".CrosshairFullScreenPanel"),
        [EY, mY] = (0, FY.useState)(!0),
        VY = EY && aY;
      (0, FY.useEffect)((() => {
        if (VY) return eY.b.set({
          crosshairGameView: !0
        }), () => {
          eY.b.set({
            crosshairGameView: !1
          })
        }
      }), [VY]);
      const [SY, lY] = (0, FY.useState)(!0);
      return (0, FD.createPortal)((0, vY.jsxs)("div", {
        ref: yY,
        className: "CrosshairFullScreen",
        style: VY ? void 0 : sD(AY),
        ...WY.handlers,
        children: [(0, vY.jsx)(oD.d, {
          settings: rY,
          touch: DY,
          inEditor: !0,
          ...WY.view
        }), (0, vY.jsxs)("div", {
          className: IY()("CrosshairFullScreenPanel", {
            Collapsed: !SY
          }),
          children: [(0, vY.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, vY.jsx)(ED, {
              backdrop: AY,
              onChange: YY => {
                mY(!1), gY(YY)
              },
              game: aY ? {
                selected: VY,
                onSelect: () => {
                  mY(!0)
                }
              } : void 0
            }), (0, vY.jsx)(oY.J, {
              className: "CrosshairPanelToggle",
              ariaLabel: iY(SY ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                lY(!SY)
              },
              children: (0, vY.jsx)(OY.e, {
                name: SY ? "caret-up" : "pen"
              })
            }), (0, vY.jsx)(oY.f, {
              className: "CrosshairFullScreenDone",
              onClick: sY,
              padDefaultFocus: !0,
              children: iY("crosshairSettings:done")
            })]
          }), SY && (0, vY.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, vY.jsx)(mD, {
              settings: rY,
              touch: DY,
              backdrop: AY,
              onChange: uY
            }), (0, vY.jsx)(DD, {
              settings: rY,
              onChange: uY
            })]
          })]
        })]
      }), document.body)
    }
    var eD = DY(2417),
      ND = DY(8729);

    function BD(YY) {
      let {
        settings: rY,
        onChange: DY
      } = YY;
      const {
        t: AY
      } = (0, RY.C)(), gY = (0, ND.i)(rY), [aY, uY] = (0, eD.f)(), [sY, iY] = (0, FY.useState)(!1), yY = (0, FY.useRef)(null), [QY, WY] = (0, eD.f)(), [EY, mY] = (0, FY.useState)(!1);
      return (0, vY.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, vY.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, vY.jsxs)(oY.J, {
            className: IY()("CrosshairCopy", {
              ActiveSecondaryButton: aY
            }),
            onClick: () => {
              (0, eD.e)(gY, {
                useShareSheet: !1,
                onOutcome: YY => {
                  iY("failed" === YY), "copied" === YY && uY()
                }
              })
            },
            children: [(0, vY.jsx)(OY.e, {
              name: aY ? "check" : "copy"
            }), " ", AY(aY ? "general:copied" : "crosshairSettings:copy")]
          }), (0, vY.jsx)(SY.d, {
            className: "CrosshairPaste",
            domRef: yY,
            ariaLabel: AY("crosshairSettings:paste"),
            placeholderText: AY("crosshairSettings:paste"),
            onValueChange: YY => {
              const rY = (0, ND.e)(YY);
              mY(!rY && YY.trim().length >= ND.b), rY && (DY(rY), yY.current.value = "", WY())
            }
          })]
        }), sY && (0, vY.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: gY,
          "aria-label": AY("crosshairSettings:copy"),
          onFocus: YY => {
            YY.currentTarget.select()
          }
        }), (0, vY.jsxs)("div", {
          "aria-live": "polite",
          children: [EY && (0, vY.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: AY("crosshairSettings:pasteInvalid")
          }), QY && !EY && (0, vY.jsx)("div", {
            className: "CrosshairShareNote",
            children: AY("crosshairSettings:applied")
          })]
        })]
      })
    }
    var cD = DY(8733);
    let KD = "sky";

    function HD(YY) {
      let {
        showing: rY
      } = YY;
      const {
        t: DY
      } = (0, RY.C)(), {
        isTouchScreen: AY,
        gameState: IY,
        clientEscMenuOptions: gY
      } = (0, eY.j)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), aY = (0, cD.e)(), [uY, sY] = (0, FY.useState)(KD), iY = YY => {
        KD = YY, sY(YY)
      }, [yY, QY] = (0, FY.useState)(!1);
      return (0, FY.useEffect)((() => {
        rY || QY(!1)
      }), [rY]), (0, vY.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, vY.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, vY.jsx)(SD, {
            className: "CrosshairPreviewStage",
            settings: aY,
            touch: AY,
            backdrop: uY,
            label: DY("crosshairSettings:preview"),
            children: (0, vY.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, vY.jsx)(ED, {
                backdrop: uY,
                onChange: iY
              }), (0, vY.jsxs)(oY.J, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  QY(!0)
                },
                children: [(0, vY.jsx)(OY.e, {
                  name: "expand"
                }), " ", DY("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, vY.jsx)("div", {
          className: "SettingBox",
          children: (0, vY.jsx)(mD, {
            settings: aY,
            touch: AY,
            backdrop: uY,
            onChange: cD.b
          })
        }), (0, vY.jsx)(BD, {
          settings: aY,
          onChange: cD.b
        }), AY && (0, vY.jsx)(Gr.c, {
          note: (0, kr.g)(AY, gY.touchActionButtons) ? DY("crosshairSettings:touchNote") : void 0
        }), (0, vY.jsx)(DD, {
          settings: aY,
          onChange: cD.b
        }), yY && (0, vY.jsx)(TD, {
          settings: aY,
          touch: AY,
          backdrop: uY,
          onBackdrop: iY,
          inGame: "inGame" === IY,
          onChange: cD.b,
          onClose: () => {
            QY(!1)
          }
        })]
      })
    }
    var zD = DY(8273),
      ZD = DY(1389),
      CD = DY(4578),
      fD = DY(8739),
      jD = DY(1834),
      hD = DY(3852),
      dD = DY(1842),
      JD = DY(724);
    const MD = (0, FY.memo)((function() {
      const {
        clientEscMenuOptions: YY
      } = (0, eY.j)(["clientEscMenuOptions"]), {
        recording: rY,
        clipping: DY,
        hasClipBuffer: AY
      } = (0, jD.h)("replayRecorder"), RY = (0, jD.f)("connectedGame", (YY => YY.replay)), OY = (0, hD.i)(), gY = !1 === (0, yY.j)("canRecordReplays");
      (0, FY.useEffect)((() => {
        EY.gameBridge.send("setRecorderPrefs", {
          clipping: YY.enableClipping,
          clipSeconds: YY.clipDurationSeconds
        })
      }), [YY.enableClipping, YY.clipDurationSeconds]);
      const aY = OY || RY,
        uY = !aY && !gY,
        sY = rY || uY,
        iY = uY,
        QY = iY && DY && !rY;

      function WY() {
        sY && EY.gameBridge.send("toggleRecording", null)
      }
      return (0, vY.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, vY.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vY.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: rY ? (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsxs)(oY.D, {
                className: "ReplayViewerCategoryButton",
                onClick: WY,
                disabled: !sY,
                children: [(0, vY.jsx)("span", {
                  children: "Stop Recording"
                }), (0, vY.jsx)(dD.d, {
                  noaAction: "recordGame"
                })]
              }), (0, vY.jsx)(fD.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, vY.jsxs)(oY.f, {
              className: "ReplayViewerCategoryButton",
              onClick: WY,
              disabled: !sY,
              children: [(0, vY.jsx)("span", {
                children: "Start Recording"
              }), (0, vY.jsx)(dD.d, {
                noaAction: "recordGame"
              })]
            })
          }), gY && (0, vY.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), aY && !rY && (0, vY.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, vY.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, vY.jsx)(TY.c, {
            label: "Enable clipping",
            checked: YY.enableClipping,
            disabled: !iY,
            onClick: function(YY) {
              iY && eY.b.setClientEscMenuOptions({
                enableClipping: YY
              })
            },
            className: IY()({
              SettingBoxDisabled: !iY
            })
          }), (0, vY.jsx)(TY.j, {
            name: "Clip duration (seconds)",
            min: JD.k,
            max: JD.j,
            step: JD.d,
            initValue: YY.clipDurationSeconds,
            onChange: function(YY) {
              eY.b.setClientEscMenuOptions({
                clipDurationSeconds: YY
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !iY || !YY.enableClipping
          })]
        }), (0, vY.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vY.jsxs)(oY.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              QY && EY.gameBridge.send("saveClip", null)
            },
            disabled: !QY,
            children: [(0, vY.jsx)("span", {
              children: "Record clip"
            }), (0, vY.jsx)(dD.d, {
              noaAction: "recordClip"
            })]
          }), YY.enableClipping && !AY && iY && !rY && (0, vY.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), rY && (0, vY.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, vY.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vY.jsxs)(oY.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, hD.f)(!0), eY.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: OY,
            children: [(0, vY.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, vY.jsx)(dD.d, {
              noaAction: "replayViewerOpen"
            })]
          }), OY && (0, vY.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, vY.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vY.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, vY.jsx)("iframe", {
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
    var wD = DY(332),
      bD = DY(1774);
    const XD = {
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
        icon: () => (0, vY.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, vY.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      crosshair: {
        icon: "fa-solid fa-crosshairs",
        displayName: "crosshairSettings:tab"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      vy: {
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

    function qD() {
      return Promise.all([DY.e(74), DY.e(132), DY.e(126), DY.e(123)]).then((() => DY(40161))).then((YY => ({
        default: YY.ShaderPackCategory
      })), (YY => (console.error("Failed to load the shader pack settings", YY), {
        default: pD
      })))
    }

    function pD() {
      const {
        t: YY
      } = (0, RY.C)();
      return (0, vY.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: YY("shaderPack:tabLoadFailed")
      })
    }
    var kD = DY(1384);
    const GD = (0, FY.lazy)((() => DY.e(262).then((() => DY(40155))).then((YY => ({
        default: YY.BloxdInformation
      }))))),
      xD = (0, FY.lazy)(qD);

    function nD(YY) {
      return YY ? "general" : "account"
    }
    const PD = new Map,
      UD = (0, FY.memo)((function(YY) {
        let {
          show: rY,
          setBeforeResumeCallback: DY
        } = YY;
        (0, QY.c)();
        const {
          gameState: AY,
          openSettingsCategory: IY
        } = (0, eY.j)(["gameState", "openSettingsCategory"]), {
          userContext: gY
        } = (0, iY.d)(), {
          t: aY
        } = (0, RY.C)(), SY = (0, sY.c)(), lY = (0, yY.j)("minChunkAddDist"), TY = "inGame" === AY, [NY, KY] = (0, FY.useState)(nD(TY)), [HY, zY] = (0, FY.useState)(null), [ZY, CY] = (0, FY.useState)([]), fY = (0, FY.useRef)(function() {
          const YY = new Date,
            rY = 6 * (YY.getMonth() + YY.getDate()) % wD.y.length;
          return [...wD.y, ...wD.y].slice(rY, rY + 6)
        }()), jY = (0, FY.useRef)(null), hY = (0, yr.k)(ZD.j, (0, ZD.e)()), dY = Object.keys(XD).filter((YY => {
          switch (YY) {
            case "replayViewer":
              return TY;
            case "developerTools":
              return gY.playerHasRank("developer") || !1;
            case "texturePack":
              return WY.featureFlags.settings.canChangeTexturePack;
            case "vy":
              return WY.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return WY.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== cY.s;
            case "controller":
              return WY.featureFlags.useControllerSupport && (hY || "controller" === NY);
            default:
              return !0
          }
        }));
        (0, yr.g)("toggleFullCoordinateOverlay", (() => {
          const YY = hr("showCoordinates") && hr("showChunkCoordinates") && hr("showFPS");
          dr("showCoordinates", !YY), dr("showChunkCoordinates", !YY), dr("showFPS", !YY), SY()
        })), (0, yr.g)("updatedChunkLoadDist", (() => {
          SY()
        })), (0, FY.useEffect)((() => {
          if (zY(null), null === eY.b.get("openSettingsCategory")) {
            const YY = (0, kD.f)() ? PD.get(TY) : void 0;
            KY(YY && dY.includes(YY) ? YY : nD(TY))
          }
        }), [rY]), (0, FY.useEffect)((() => {
          null !== IY && (KY(IY), PD.set(TY, IY), eY.b.set({
            openSettingsCategory: null
          }))
        }), [IY, TY]), (0, FY.useLayoutEffect)((() => {
          jY.current && (jY.current.scrollTop = 0)
        }), [NY, rY]), (0, FY.useEffect)((() => {
          "updateLog" === NY && (0, VY.c)().then(CY)
        }), [NY]), (0, FY.useEffect)((() => {
          if ((0, Kr.H)(lY)) return;
          const [YY, rY] = (0, qr.g)(), [DY, FY] = (0, lr.f)(lY), AY = (0, bD.i)(lY[0], YY, DY), IY = (0, bD.i)(lY[1], rY, FY);
          EY.gameBridge.send("setChunkAddDistance", {
            horizontal: AY,
            vertical: IY
          })
        }), [lY]);
        const JY = (0, FY.useCallback)((async () => {
          HY && (await HY(), zY(null))
        }), [HY]);

        function MY() {
          eY.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, FY.useEffect)((() => {
          DY((() => JY))
        }), [JY, DY]), (0, vY.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: rY ? {} : {
            display: "none"
          },
          children: [(0, vY.jsx)("div", {
            className: "MenuSideBar",
            children: (0, vY.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, vY.jsx)(uY, {
                items: dY.map((YY => {
                  const rY = XD[YY].icon;
                  return {
                    id: YY,
                    faIcon: "string" === typeof rY ? rY : void 0,
                    iconElement: "string" === typeof rY ? void 0 : (0, vY.jsx)(rY, {}),
                    title: aY(XD[YY].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: NY,
                onClick: YY => {
                  !async function(YY) {
                    await JY(), KY(YY), PD.set(TY, YY)
                  }(YY)
                }
              })
            })
          }), (0, vY.jsxs)("div", {
            ref: jY,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === NY && (0, vY.jsx)(Ir, {
              showing: rY,
              inGame: TY
            }), "general" === NY && (0, vY.jsx)(ur, {
              inGame: TY
            }), "audio" === NY && (0, vY.jsx)(sr, {}), "notifications" === NY && (0, vY.jsx)(Sr, {}), "graphics" === NY && (0, vY.jsx)(Xr, {
              minChunkAddDist: null !== lY && void 0 !== lY ? lY : [2, 2],
              getValue: hr,
              onChange: dr,
              setApplySettingsCallback: zY
            }), "controls" === NY && (0, vY.jsx)(pr.f, {}), "crosshair" === NY && (0, vY.jsx)(HD, {
              showing: rY
            }), "controller" === NY && WY.featureFlags.useControllerSupport && (0, vY.jsx)(zD.e, {}), WY.featureFlags.settings.canChangeTexturePack && "texturePack" === NY && (0, vY.jsx)(CD.b, {
              setApplySettingsCallback: zY
            }), WY.featureFlags.settings.canUseShaderPacks && "vy" === NY && (0, vY.jsx)(FY.Suspense, {
              fallback: null,
              children: (0, vY.jsx)(xD, {
                setApplySettingsCallback: zY
              })
            }), "updateLog" === NY && (0, vY.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, vY.jsx)("div", {
                className: "UpdateLogsContainer",
                children: ZY.map(((YY, rY) => (0, vY.jsx)(mY.d, {
                  updateLog: YY,
                  index: rY,
                  close: MY
                }, rY)))
              })
            }), "information" === NY && (0, vY.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, vY.jsx)(FY.Suspense, {
                fallback: null,
                children: (0, vY.jsx)(GD, {})
              })
            }), "alternativeDomains" === NY && (0, vY.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, vY.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: aY("settingsMenu:unblockedDomainsDescription")
              }), (0, vY.jsx)("div", {
                className: "AlternativeDomainsList",
                children: fY.current.map((YY => (0, vY.jsxs)(oY.f, {
                  onClick: () => {
                    window.open(`https://${YY}`)
                  },
                  children: [(0, vY.jsx)(OY.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", YY]
                }, YY)))
              })]
            }), "replayViewer" === NY && (0, vY.jsx)(MD, {}), "developerTools" === NY && (0, vY.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, vY.jsx)(BY, {
                setApplySettingsCallback: zY
              })
            }), null !== HY && (0, vY.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, vY.jsx)(oY.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: JY,
                children: aY("general:apply")
              })
            })]
          })]
        })
      }));
    var LD = DY(2368);
    const tD = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      YF = (0, FY.lazy)((() => Promise.resolve().then((() => DY(4229))).then((YY => {
        YY.needGameClientAfterPaint();
        const rY = YY.matchmakingLibrariesPromise.then((YY => (0, LD.d)(YY.loadCharacterCustomisationUI(), (YY => YY.CharacterCustomisationUI))));
        return Promise.all([YY.ensureGameSetup(), rY]).then((YY => {
          let [, rY] = YY;
          return rY
        }))
      }))));

    function rF(YY) {
      let {
        show: rY
      } = YY;
      const {
        userContext: DY
      } = (0, iY.d)(), [AY, IY] = (0, FY.useState)("characters");
      if (!rY) return null;
      const RY = tD.filter((YY => "cape" !== YY && "nameColour" !== YY || DY.getPlayerRanks().includes("super") || (0, wY.purchasesAllowed)())).map((YY => ({
        id: YY,
        faIcon: wD.G[YY],
        title: wD.K[YY],
        redDot: !1
      })));
      return (0, vY.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, vY.jsx)("div", {
          className: "MenuSideBar",
          children: (0, vY.jsx)(uY, {
            items: RY,
            selectedItemId: AY,
            onClick: YY => {
              IY(YY)
            }
          })
        }), (0, vY.jsx)("div", {
          className: "MenuBody",
          children: (0, vY.jsx)(FY.Suspense, {
            fallback: (0, vY.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, vY.jsx)(lY.c, {})
            }),
            children: (0, vY.jsx)(YF, {
              selectedTab: AY
            })
          })
        })]
      })
    }
    var DF = DY(1445),
      FF = DY(8745),
      AF = DY(4086),
      IF = DY(2975),
      RF = DY(3030),
      OF = DY(8774),
      gF = DY(8181),
      aF = DY(8748),
      vF = DY(8765),
      uF = DY(1793),
      sF = DY(1778),
      iF = DY(4483),
      yF = DY(1267),
      QF = DY(1231),
      oF = DY(1646),
      WF = DY(8255);

    function EF(YY) {
      return YY ? Object.keys(YY).sort(((rY, DY) => {
        var FY, AY, IY, RY;
        const OY = (null !== (FY = null === (AY = YY[DY]) || void 0 === AY ? void 0 : AY.sortPriority) && void 0 !== FY ? FY : 0) - (null !== (IY = null === (RY = YY[rY]) || void 0 === RY ? void 0 : RY.sortPriority) && void 0 !== IY ? IY : 0);
        return 0 !== OY ? OY : rY.localeCompare(DY)
      })) : []
    }
    const mF = [{
      threshold: 1e12,
      suffix: "T"
    }, {
      threshold: 1e9,
      suffix: "B"
    }, {
      threshold: 1e6,
      suffix: "M"
    }, {
      threshold: 1e3,
      suffix: "K"
    }];

    function VF(YY) {
      for (const {
          threshold: rY,
          suffix: DY
        }
        of mF)
        if (YY >= rY) {
          const FY = YY / rY;
          return FY >= 100 ? `${Math.floor(FY)}${DY}` : FY >= 10 ? `${FY.toFixed(1).replace(/\.0$/,"")}${DY}` : `${FY.toFixed(2).replace(/\.?0+$/,"")}${DY}`
        } return String(YY)
    }
    var SF = DY(4608);
    const lF = {
        normal: "0.8em",
        big: "1em"
      },
      TF = (0, FY.memo)((function(YY) {
        let {
          item: rY,
          amount: DY = 0,
          size: FY = "normal",
          tier: AY = null
        } = YY;
        return (0, vY.jsx)("div", {
          className: IY()("SmpSlot", `SmpSlot-${FY}`),
          children: rY && (0, vY.jsx)(uF.c, {
            itemName: rY,
            amount: DY > 1 ? DY : 0,
            amountFontSize: lF[FY],
            enchantmentTier: AY
          })
        })
      }));

    function eF(YY) {
      let {
        amount: rY,
        exact: DY = !1,
        className: FY
      } = YY;
      return (0, vY.jsxs)("span", {
        className: IY()("SmpGold", FY),
        children: [(0, vY.jsx)("span", {
          className: "SmpCoin",
          children: (0, vY.jsx)(uF.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), DY ? rY.toLocaleString("en-US") : VF(rY)]
      })
    }

    function NF(YY) {
      let {
        count: rY = 5,
        grid: DY = !1
      } = YY;
      return (0, vY.jsx)("div", {
        className: DY ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: rY
        }, ((YY, rY) => (0, vY.jsxs)("div", {
          className: IY()(DY ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, vY.jsx)("div", {
            className: IY()("SmpSlot", DY ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, vY.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, vY.jsx)("b", {}), (0, vY.jsx)("small", {})]
          }), (0, vY.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, rY)))
      })
    }

    function BF(YY) {
      let {
        title: rY,
        children: DY
      } = YY;
      return (0, vY.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, vY.jsx)("b", {
          children: rY
        }), DY && (0, vY.jsx)("small", {
          children: DY
        })]
      })
    }

    function cF(YY) {
      let {
        entry: rY
      } = YY;
      return (0, vY.jsx)(BF, {
        title: (0, vY.jsx)(sF.b, {
          text: rY.item.customTitle
        }),
        children: (0, vY.jsx)(sF.b, {
          text: rY.item.description
        })
      })
    }

    function KF(YY) {
      return (0, vY.jsx)(SF.d, {
        ...YY,
        className: IY()("SmpChoice", YY.className),
        reselectable: !0
      })
    }

    function HF() {
      return (0, vY.jsx)("span", {
        className: "SmpLoader",
        children: (0, vY.jsx)(lY.c, {})
      })
    }

    function zF(YY) {
      let {
        value: rY,
        onChange: DY,
        min: AY = 1,
        max: IY,
        step: RY = 1,
        label: OY
      } = YY;
      const gY = (0, FY.useRef)(null),
        aY = (0, FY.useRef)(rY);
      aY.current = rY;
      const [uY, sY] = (0, FY.useState)(null), iY = YY => Math.max(AY, Math.min(IY, Math.floor(YY))), yY = YY => {
        const rY = aY.current,
          FY = "function" === typeof RY ? RY(rY, YY) : RY,
          AY = iY(rY + FY * YY);
        aY.current = AY, DY(AY)
      };
      (0, FY.useEffect)((() => {
        if (null === uY) return;
        let YY;
        const rY = () => {
            sY(null)
          },
          DY = setTimeout((() => {
            YY = setInterval((() => {
              yY(uY);
              const YY = aY.current;
              (uY > 0 ? YY >= IY : YY <= AY) && rY()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", rY), window.addEventListener("pointercancel", rY), window.addEventListener("blur", rY), () => {
          clearTimeout(DY), clearInterval(YY), window.removeEventListener("pointerup", rY), window.removeEventListener("pointercancel", rY), window.removeEventListener("blur", rY)
        }
      }), [uY]), (0, FY.useEffect)((() => {
        const YY = gY.current;
        YY && document.activeElement !== YY && YY.value !== String(rY) && (YY.value = String(rY))
      }), [rY]), (0, FY.useEffect)((() => {
        const YY = gY.current;
        if (!YY) return;
        const rY = () => {
          YY.value = String(aY.current)
        };
        return YY.addEventListener("blur", rY), () => {
          YY.removeEventListener("blur", rY)
        }
      }), []);
      const QY = YY => (0, vY.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${YY>0?"More":"Less"} ${OY}`,
        disabled: YY > 0 ? rY >= IY : rY <= AY,
        onPointerDown: rY => {
          0 === rY.button && (yY(YY), sY(YY))
        },
        onKeyDown: rY => {
          "Enter" !== rY.key && " " !== rY.key || yY(YY)
        },
        onContextMenu: YY => {
          YY.preventDefault()
        },
        children: YY > 0 ? "+" : "\u2212"
      });
      return (0, vY.jsxs)("div", {
        className: "SmpStepper",
        children: [QY(-1), (0, vY.jsx)(SY.d, {
          className: "SmpStepperInput",
          domRef: gY,
          defaultValue: String(rY),
          ariaLabel: OY,
          type: "text",
          blurOnEnter: !0,
          onValueChange: YY => {
            const rY = YY.replace(/[^\d]/g, "");
            gY.current && rY !== YY && (gY.current.value = rY), "" !== rY && DY(iY(Number(rY)))
          }
        }), QY(1)]
      })
    }

    function ZF(YY) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, YY))) - 1))
    }
    var CF = DY(8770),
      fF = DY(1244);
    const jF = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    fF.v, JY.Fc.length;
    new Map;
    var hF = DY(2864);

    function dF(YY, rY) {
      var DY;
      return rY && (null === (DY = YY[rY]) || void 0 === DY ? void 0 : DY.smp) || null
    }

    function JF(YY, rY) {
      const DY = [];
      for (const AY of EF(YY)) {
        var FY;
        const IY = YY[AY];
        (null === (FY = IY.smp) || void 0 === FY ? void 0 : FY.kind) === rY && DY.push({
          key: AY,
          item: IY,
          meta: IY.smp
        })
      }
      return DY
    }

    function MF(YY, rY) {
      var DY;
      return null !== (DY = JF(YY, rY)[0]) && void 0 !== DY ? DY : null
    }
    const wF = "50% 0% 50% 0%",
      bF = [{
        divisor: 864e5,
        suffix: "d"
      }, {
        divisor: 36e5,
        suffix: "h"
      }, {
        divisor: 6e4,
        suffix: "m"
      }, {
        divisor: 1e3,
        suffix: "s"
      }];

    function XF(YY) {
      const rY = YY - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: DY,
          suffix: FY
        }
        of bF)
        if (rY >= DY) return `${Math.floor(rY/DY)}${FY}`;
      return "<1s"
    }

    function qF(YY) {
      const rY = YY.map(gF.e),
        DY = [];
      return rY.forEach(((YY, FY) => {
        const AY = function(YY) {
            const rY = YY.match(/\d+/);
            return rY ? Number(rY[0]) : 0
          }(YY),
          IY = FY === rY.length - 1;
        (IY || 1 === AY || 10 === AY || 100 === AY) && DY.push({
          label: YY,
          quantity: AY,
          isAll: IY
        })
      })), DY
    }
    let pF = null;

    function kF(YY, rY) {
      const DY = rY.trim().toLowerCase();
      if (!DY) return [];
      const FY = YY => {
          if (YY === DY) return 0;
          if (YY.startsWith(DY)) return 1;
          const rY = YY.indexOf(DY);
          return -1 === rY ? -1 : 2 + rY
        },
        AY = [];
      for (const OY of YY) {
        const YY = [FY(OY.lowerLabel), FY(OY.lowerName)].filter((YY => -1 !== YY));
        YY.length && AY.push({
          item: OY,
          rank: Math.min(...YY)
        })
      }
      if (AY.length > 0) return AY.sort(((YY, rY) => YY.rank - rY.rank)).map((YY => YY.item));
      const IY = [...DY],
        RY = YY => {
          let rY = 0;
          for (const DY of IY) {
            if (rY = YY.indexOf(DY, rY), -1 === rY) return !1;
            rY++
          }
          return !0
        };
      return YY.filter((YY => RY(YY.lowerLabel) || RY(YY.lowerName)))
    }

    function GF(YY, rY) {
      var DY;
      return null !== (DY = null === YY || void 0 === YY ? void 0 : YY[rY]) && void 0 !== DY ? DY : rY
    }

    function xF(YY, rY) {
      const DY = YY.userInput;
      return void 0 !== rY && "dropdown" === (null === DY || void 0 === DY ? void 0 : DY.type) && DY.dropdownOptions.map(gF.e).includes(rY) ? rY : function(YY) {
        const rY = YY.userInput;
        if ("dropdown" !== (null === rY || void 0 === rY ? void 0 : rY.type) || 0 === rY.dropdownOptions.length) return null;
        const DY = rY.dropdownOptions.map(gF.e);
        return rY.initialValue && DY.includes(rY.initialValue) ? rY.initialValue : DY[DY.length - 1]
      }(YY)
    }

    function nF(YY) {
      return void 0 === YY ? "" : JSON.stringify(YY)
    }
    const PF = (0, FY.createContext)(null);

    function UF() {
      return (0, FY.useContext)(PF)
    }
    var LF = DY(2437);
    const tF = (0, FY.memo)((function(YY) {
        let {
          name: rY,
          label: DY,
          onPick: FY
        } = YY;
        return (0, vY.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: DY,
          onClick: () => {
            FY(rY)
          },
          children: [(0, vY.jsx)(TF, {
            item: rY,
            size: "big"
          }), (0, vY.jsx)("span", {
            children: DY
          })]
        })
      })),
      YA = (0, FY.memo)((function(YY) {
        let {
          items: rY,
          query: DY,
          onPick: AY
        } = YY;
        const {
          t: IY
        } = (0, RY.C)(), [OY, gY] = (0, FY.useState)(new Set), aY = (0, FY.useMemo)((() => function(YY) {
          const rY = new Map;
          for (const DY of YY) {
            let YY = rY.get(DY.category);
            YY || (YY = [], rY.set(DY.category, YY)), YY.push(DY)
          }
          return [...jF, "other"].filter((YY => rY.has(YY))).map((YY => ({
            category: YY,
            items: rY.get(YY)
          })))
        }(rY)), [rY]), uY = (0, FY.useMemo)((() => kF(rY, DY).slice(0, 60)), [rY, DY]);
        return DY.trim() ? 0 === uY.length ? (0, vY.jsx)(BF, {
          title: IY("smpShop:noItemsFound", {
            query: DY.trim()
          }),
          children: IY("smpShop:tryShorterName")
        }) : (0, vY.jsx)(LF.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: wF,
          observerUpdateDeps: [DY],
          children: uY.map((YY => (0, vY.jsx)(tF, {
            name: YY.name,
            label: YY.label,
            onPick: AY
          }, YY.name)))
        }) : (0, vY.jsx)(vY.Fragment, {
          children: aY.map((YY => {
            let {
              category: rY,
              items: DY
            } = YY;
            const FY = OY.has(rY) || DY.length <= 48,
              RY = FY ? DY : DY.slice(0, 48);
            return (0, vY.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, vY.jsxs)("h4", {
                children: [IY("other" === rY ? "smpShop:otherItems" : `creativeInventory:${rY}`), !FY && (0, vY.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    gY(new Set([...OY, rY]))
                  },
                  children: IY("smpShop:showAll", {
                    count: DY.length
                  })
                })]
              }), (0, vY.jsx)(LF.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: wF,
                observerUpdateDeps: [FY],
                children: RY.map((YY => (0, vY.jsx)(tF, {
                  name: YY.name,
                  label: YY.label,
                  onPick: AY
                }, YY.name)))
              })]
            }, rY)
          }))
        })
      }));

    function rA(YY, rY) {
      const {
        searched: DY,
        shown: AY,
        searchFor: IY,
        loading: RY
      } = function(YY, rY) {
        var DY;
        const AY = UF(),
          [IY, RY] = (0, FY.useState)(void 0),
          OY = (0, FY.useRef)(void 0),
          gY = (0, FY.useRef)(0),
          aY = (0, FY.useRef)(void 0),
          vY = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.meta.item) && void 0 !== DY ? DY : null,
          uY = !!YY && AY.isPending(YY.key);
        (0, FY.useEffect)((() => {
          if (!YY || uY || !rY || void 0 === IY || IY === vY) return;
          const DY = IY === OY.current && AY.gaveUpAt(YY.key) > gY.current && aY.current !== IY;
          (IY !== OY.current || DY) && AY.act(YY.key, null !== IY && void 0 !== IY ? IY : "*", DY) && (DY && (aY.current = IY), OY.current = IY, gY.current = Date.now())
        }), [YY, uY, rY, IY, vY, AY]);
        const sY = (0, FY.useCallback)((YY => {
            OY.current = void 0, aY.current = void 0, RY(YY)
          }), []),
          iY = void 0 !== IY && IY !== vY && (uY || OY.current !== IY);
        return {
          searched: vY,
          shown: iY ? IY : vY,
          searchFor: sY,
          loading: iY || uY || null !== vY && !rY
        }
      }(YY, rY), OY = (0, FY.useMemo)((() => function() {
        var YY;
        let rY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const AY = `${(0,hF.i)()}\x1f${rY.join("\x1e")}\x1f${DY.join("\x1e")}\x1f${JSON.stringify(FY)}`;
        if ((null === (YY = pF) || void 0 === YY ? void 0 : YY.key) === AY) return pF.items;
        const IY = new Set(DY),
          RY = new Set,
          OY = [],
          gY = (YY, rY) => {
            var DY;
            if (!YY || RY.has(YY) || IY.has(YY)) return;
            RY.add(YY);
            const AY = null !== (DY = FY[YY]) && void 0 !== DY ? DY : YY;
            OY.push({
              name: YY,
              label: AY,
              lowerLabel: AY.toLowerCase(),
              lowerName: YY.toLowerCase(),
              category: rY
            })
          };
        for (const vY of (0, CF.creativeItemIds)()) {
          var aY;
          (0, CF.itemIsDisabled)(vY, !0, !0, !1) || (0, CF.showOnlyInCreativeSearch)(vY) || gY((0, hF.e)(vY), null !== (aY = (0, CF.creativeCategoryOf)(vY)) && void 0 !== aY ? aY : "other")
        }
        for (const vY of rY) gY(vY, "other");
        return pF = {
          key: AY,
          items: OY
        }, OY
      }(null === YY || void 0 === YY ? void 0 : YY.meta.extra, null === YY || void 0 === YY ? void 0 : YY.meta.excluded, null === YY || void 0 === YY ? void 0 : YY.meta.names)), [null === YY || void 0 === YY ? void 0 : YY.meta.extra, null === YY || void 0 === YY ? void 0 : YY.meta.excluded, null === YY || void 0 === YY ? void 0 : YY.meta.names]), [gY, aY] = (0, FY.useState)(""), [vY, uY] = (0, FY.useState)(0), [sY, iY] = (0, FY.useState)("recent"), yY = (0, FY.useCallback)((YY => {
        aY(""), uY((YY => YY + 1)), IY(YY)
      }), [IY]), QY = "browse" === sY || "" !== gY.trim();
      return {
        searched: DY,
        shown: AY,
        searchFor: IY,
        loading: RY,
        catalogue: OY,
        names: null === YY || void 0 === YY ? void 0 : YY.meta.names,
        query: gY,
        setQuery: aY,
        searchBoxKey: vY,
        pickItem: yY,
        setView: iY,
        browsing: QY
      }
    }

    function DA(YY) {
      let {
        browser: rY,
        children: DY
      } = YY;
      const {
        t: FY
      } = (0, RY.C)(), AY = UF();
      return (0, vY.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, vY.jsx)("div", {
          className: "SmpSearch",
          children: (0, vY.jsx)(SY.d, {
            className: "SmpSearchInput",
            placeholderText: FY("smpShop:searchPlaceholder"),
            defaultValue: rY.query,
            onValueChange: YY => {
              rY.setQuery(YY), rY.searched && YY.trim() && rY.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const YY = kF(rY.catalogue, rY.query)[0];
              YY ? rY.pickItem(YY.name) : rY.query.trim() && AY.notify(FY("smpShop:noItemsFound", {
                query: rY.query.trim()
              }))
            }
          }, rY.searchBoxKey)
        }), DY]
      })
    }

    function FA(YY) {
      let {
        browser: rY,
        recentLabel: DY,
        children: FY
      } = YY;
      const {
        t: AY
      } = (0, RY.C)();
      return (0, vY.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, vY.jsx)(KF, {
          options: [{
            value: "recent",
            label: DY
          }, {
            value: "browse",
            label: AY("smpShop:browseItems")
          }],
          value: rY.browsing ? "browse" : "recent",
          onChange: rY.setView,
          ariaLabel: AY("smpShop:show")
        }), !rY.browsing && FY]
      })
    }

    function AA(YY) {
      let {
        item: rY,
        names: DY,
        summary: FY,
        onBack: AY,
        children: IY
      } = YY;
      const {
        t: OY
      } = (0, RY.C)();
      return (0, vY.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, vY.jsx)(oY.b, {
          className: "SmpBackButton",
          onClick: AY,
          children: OY("general:back")
        }), (0, vY.jsx)(TF, {
          item: rY,
          size: "big"
        }), (0, vY.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, vY.jsx)("b", {
            children: GF(DY, rY)
          }), FY && (0, vY.jsx)("small", {
            children: FY
          })]
        }), IY]
      })
    }

    function IA(YY) {
      let {
        browser: rY,
        className: DY,
        action: FY,
        above: AY,
        list: RY,
        summary: OY,
        recentLabel: gY,
        listControls: aY,
        onBack: uY
      } = YY;
      return (0, vY.jsxs)("div", {
        className: IY()("SmpScreen", DY),
        children: [(0, vY.jsx)(DA, {
          browser: rY,
          children: FY
        }), rY.shown && (0, vY.jsx)(AA, {
          item: rY.shown,
          names: rY.names,
          summary: !rY.loading && OY,
          onBack: () => {
            null === uY || void 0 === uY || uY(), rY.searchFor(null)
          },
          children: aY
        }), AY, rY.shown ? RY : (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)(FA, {
            browser: rY,
            recentLabel: gY,
            children: aY
          }), rY.browsing ? (0, vY.jsx)(YA, {
            items: rY.catalogue,
            query: rY.query,
            onPick: rY.pickItem
          }) : RY]
        })]
      })
    }

    function RA(YY, rY) {
      const DY = YY.map((YY => {
        let {
          meta: rY
        } = YY;
        return rY.pricePerItem
      }));
      return "min" === rY ? Math.min(...DY) : Math.max(...DY)
    }
    var OA = DY(6128);
    const gA = (0, FY.memo)((function(YY) {
      var rY;
      const {
        t: DY
      } = (0, RY.C)(), FY = null === YY.seller, AY = YY.quantity * YY.pricePerItem;
      return (0, vY.jsxs)("div", {
        className: YY.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, vY.jsx)(TF, {
          item: YY.item,
          amount: YY.quantity,
          size: YY.grid ? "big" : "normal",
          tier: YY.tier
        }), (0, vY.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, vY.jsx)("b", {
            children: (0, vY.jsx)(sF.b, {
              text: null !== (rY = YY.title) && void 0 !== rY ? rY : `${YY.quantity}x ${YY.item}`
            })
          }), (0, vY.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, vY.jsx)("span", {
              children: FY ? DY("smpShop:you") : (0, vY.jsx)(sF.b, {
                text: [{
                  entityName: YY.seller
                }]
              })
            }), (0, vY.jsx)("span", {
              children: DY("smpShop:timeLeft", {
                time: XF(YY.expiresAt)
              })
            })]
          })]
        }), (0, vY.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, vY.jsx)(eF, {
            amount: YY.pricePerItem
          }), (0, vY.jsx)("small", {
            children: DY("smpShop:each")
          })]
        }), (0, vY.jsx)(oY.f, {
          className: "SmpBuyButton",
          disabled: FY || !YY.canAfford && !YY.busy,
          loading: YY.busy,
          onClick: () => {
            YY.onBuy(YY.itemKey)
          },
          children: FY ? DY("smpShop:yours") : (0, vY.jsx)(eF, {
            amount: AY
          })
        })]
      })
    }));

    function aA(YY) {
      let {
        view: rY,
        onChange: DY
      } = YY;
      const {
        t: FY
      } = (0, RY.C)();
      return (0, vY.jsx)(SF.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: FY("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, vY.jsx)(OY.e, {
            name: "list"
          }),
          ariaLabel: FY("smpShop:listView")
        }, {
          value: "grid",
          label: (0, vY.jsx)(OY.e, {
            name: "grid-2"
          }),
          ariaLabel: FY("smpShop:gridView")
        }],
        value: rY,
        onChange: DY
      })
    }

    function vA(YY) {
      let {
        entries: rY,
        view: DY
      } = YY;
      const {
        t: FY
      } = (0, RY.C)(), AY = UF(), IY = "grid" === DY;
      return (0, vY.jsxs)(vY.Fragment, {
        children: [!IY && (0, vY.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, vY.jsx)("span", {}), (0, vY.jsx)("span", {
            children: FY("smpShop:columnItem")
          }), (0, vY.jsx)("span", {
            children: FY("smpShop:columnPriceEach")
          }), (0, vY.jsx)("span", {
            children: FY("smpShop:columnTotal")
          })]
        }), (0, vY.jsx)(LF.b, {
          lazyLoadedClassName: IY ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: wF,
          observerUpdateDeps: [rY.length],
          children: rY.map((YY => {
            var rY, DY;
            let {
              key: FY,
              item: RY,
              meta: OY
            } = YY;
            const gY = OY.quantity * OY.pricePerItem;
            return (0, vY.jsx)(gA, {
              itemKey: FY,
              item: OY.item,
              title: RY.customTitle,
              quantity: OY.quantity,
              pricePerItem: OY.pricePerItem,
              seller: OY.seller,
              expiresAt: OY.expiresAt,
              tier: null !== (rY = null === (DY = RY.enchant) || void 0 === DY ? void 0 : DY.tier) && void 0 !== rY ? rY : null,
              busy: AY.isPending(FY) || null !== OY.seller && !1 === RY.canBuy,
              canAfford: AY.canAfford(RY, gY),
              grid: IY,
              onBuy: AY.act
            }, FY)
          }))
        }, DY)]
      })
    }
    const uA = [1, 10, 100],
      sA = [1, 10, 100, 999];

    function iA(YY) {
      var rY, DY, AY, gY, aY, uY, sY, iY, yY, QY;
      const {
        t: WY
      } = (0, RY.C)(), EY = UF(), {
        creator: mY,
        mode: VY
      } = YY, [lY, TY] = (0, FY.useState)(null !== (rY = null === mY || void 0 === mY ? void 0 : mY.meta.item) && void 0 !== rY ? rY : null), [eY, NY] = (0, FY.useState)(1), [BY, cY] = (0, FY.useState)(0), [KY, HY] = (0, FY.useState)(""), [zY, ZY] = (0, FY.useState)(0), CY = (0, FY.useRef)(lY), fY = (0, FY.useRef)(!1), [jY, hY] = (0, FY.useState)(!1), dY = null !== (DY = null === mY || void 0 === mY ? void 0 : mY.meta.item) && void 0 !== DY ? DY : null, JY = null !== (AY = null === mY || void 0 === mY ? void 0 : mY.meta.ja) && void 0 !== AY ? AY : 0;
      (0, FY.useEffect)((() => {
        YY.searching || null === dY || dY === CY.current || (CY.current = dY, fY.current = !1, TY(dY), cY(0), NY("list" === VY ? Math.max(1, JY) : 1))
      }), [dY, YY.searching]);
      const MY = !!mY && !!lY && mY.meta.item === lY,
        wY = MY ? mY.meta.ja : null !== (gY = null === (aY = YY.inventory) || void 0 === aY || null === (uY = aY.find((YY => YY.item === lY))) || void 0 === uY ? void 0 : uY.quantity) && void 0 !== gY ? gY : 0,
        bY = "list" === VY ? Math.max(1, wY) : 45954,
        XY = null !== (sY = YY.prices[0]) && void 0 !== sY ? sY : null,
        qY = YY.prices.length ? Math.round(YY.prices.reduce(((YY, rY) => YY + rY), 0) / YY.prices.length) : null,
        pY = null === (iY = YY.inventory) || void 0 === iY || null === (yY = iY.find((YY => YY.item === lY))) || void 0 === yY ? void 0 : yY.sellPrice;
      (0, FY.useEffect)((() => {
        var YY;
        MY && (NY((YY => "list" === VY ? Math.min(Math.max(1, YY), Math.max(1, wY)) : YY)), fY.current || cY(null !== (YY = null !== XY && void 0 !== XY ? XY : qY) && void 0 !== YY ? YY : Math.max(1, null !== pY && void 0 !== pY ? pY : 1)))
      }), [MY, wY, lY, XY, qY]);
      const kY = YY => {
          fY.current = !0, cY(YY)
        },
        GY = rY => {
          var DY, FY, AY;
          CY.current = rY, fY.current = !1, hY(!1), HY(""), ZY((YY => YY + 1)), TY(rY), cY(0), NY("list" === VY && null !== (DY = null === (FY = YY.inventory) || void 0 === FY || null === (AY = FY.find((YY => YY.item === rY))) || void 0 === AY ? void 0 : AY.quantity) && void 0 !== DY ? DY : 1), (null === mY || void 0 === mY ? void 0 : mY.meta.item) !== rY && YY.onPickItem(rY)
        },
        xY = eY * BY,
        nY = "list" === VY && null !== mY && void 0 !== mY && mY.meta.fee ? function(YY, rY) {
          const DY = Math.max(0, rY - YY.taxFreeAllowance);
          return Math.ceil(Math.round(DY * YY.rate * 1e6) / 1e6)
        }(mY.meta.fee, xY) : 0,
        PY = !!mY && EY.isPending(mY.key),
        UY = MY && !YY.searching && eY >= 1 && BY >= 1 && ("order" === VY || wY >= eY) && !PY,
        LY = !!lY && !MY && !YY.searching && eY >= 1 && BY >= 1,
        tY = () => {
          UY ? EY.act(mY.key, `${eY}|${BY}`) : LY && (YY.onPickItem(lY), hY(!0))
        };
      (0, FY.useEffect)((() => {
        jY && MY && !YY.searching && (hY(!1), tY())
      }), [jY, MY, YY.searching]);
      const Yr = !!lY && !MY && (YY.searching || jY),
        rr = lY ? GF(YY.names, lY) : "",
        Dr = (0, FY.useMemo)((() => kF(YY.catalogue, KY).slice(0, 8)), [YY.catalogue, KY]),
        Fr = ("list" === VY ? uA.filter((YY => YY < wY)) : sA).map((YY => ({
          value: YY,
          label: String(YY)
        })));
      "list" === VY && wY > 0 && Fr.push({
        value: wY,
        label: WY("smpShop:all", {
          count: wY
        })
      });
      const Ar = [];
      return null !== XY && (XY > 1 && Ar.push({
        value: XY - 1,
        label: WY("smpShop:undercut", {
          price: VF(XY - 1)
        })
      }), Ar.push({
        value: XY,
        label: WY("smpShop:lowest", {
          price: VF(XY)
        })
      })), null !== qY && qY !== XY && Ar.push({
        value: qY,
        label: WY("smpShop:average", {
          price: VF(qY)
        })
      }), (0, vY.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, vY.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, vY.jsx)("b", {
            children: WY("list" === VY ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, vY.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": WY("smpShop:close"),
            onClick: YY.onClose,
            children: (0, vY.jsx)(OY.e, {
              name: "xmark"
            })
          })]
        }), "list" === VY && (0, vY.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (QY = YY.inventory) && void 0 !== QY && QY.length ? YY.inventory.map((YY => {
            let {
              item: rY,
              quantity: DY
            } = YY;
            return (0, vY.jsx)("button", {
              type: "button",
              title: rY,
              className: IY()("SmpPickerSlot", {
                SmpPickerSlotOn: rY === lY
              }),
              onClick: () => {
                GY(rY)
              },
              children: (0, vY.jsx)(TF, {
                item: rY,
                amount: DY
              })
            }, rY)
          })) : (0, vY.jsx)("span", {
            className: "SmpMuted",
            children: WY("smpShop:nothingToList")
          })
        }), ("list" === VY || !lY) && (0, vY.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, vY.jsx)(SY.d, {
            className: "SmpSearchInput",
            placeholderText: WY("list" === VY ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: KY,
            onValueChange: HY,
            blurOnEnter: !0,
            onEnter: () => {
              Dr[0] && GY(Dr[0].name)
            }
          }, zY), Dr.length > 0 && (0, vY.jsx)("div", {
            className: "SmpPicker",
            children: Dr.map((YY => {
              let {
                name: rY
              } = YY;
              return (0, vY.jsx)("button", {
                type: "button",
                title: rY,
                className: IY()("SmpPickerSlot", {
                  SmpPickerSlotOn: rY === lY
                }),
                onClick: () => {
                  GY(rY)
                },
                children: (0, vY.jsx)(TF, {
                  item: rY
                })
              }, rY)
            }))
          })]
        }), lY && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsxs)("div", {
            className: "SmpPickedName",
            children: [rr, Yr && (0, vY.jsx)(HF, {})]
          }), (0, vY.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, vY.jsxs)("div", {
              className: "SmpField",
              children: [(0, vY.jsxs)("span", {
                children: [WY("smpShop:quantity"), "list" === VY && MY && (0, vY.jsx)("small", {
                  children: WY("smpShop:youHave", {
                    count: wY
                  })
                })]
              }), (0, vY.jsx)(zF, {
                value: eY,
                onChange: NY,
                max: bY,
                label: WY("smpShop:quantity")
              }), (0, vY.jsx)(KF, {
                options: Fr,
                value: eY,
                onChange: NY,
                ariaLabel: WY("smpShop:quantity")
              })]
            }), (0, vY.jsxs)("div", {
              className: "SmpField",
              children: [(0, vY.jsx)("span", {
                children: WY("smpShop:pricePerItem")
              }), (0, vY.jsx)(zF, {
                value: Math.max(1, BY),
                onChange: kY,
                max: 9999999,
                step: ZF,
                label: WY("smpShop:pricePerItem")
              }), (0, vY.jsx)(KF, {
                options: Ar,
                value: BY,
                onChange: kY,
                ariaLabel: WY("smpShop:pricePerItem")
              })]
            })]
          }), "list" === VY && (0, vY.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, vY.jsxs)("span", {
              children: [WY("smpShop:youGet"), " ", (0, vY.jsx)(eF, {
                amount: Math.max(0, xY - nY),
                exact: !0
              })]
            }), (0, vY.jsx)("small", {
              children: nY > 0 ? WY("smpShop:listingFee", {
                fee: nY.toLocaleString("en-US")
              }) : WY("smpShop:listingRules")
            })]
          }), (0, vY.jsx)(oY.p, {
            className: "SmpSubmit",
            disabled: !UY && !LY && !PY,
            loading: PY || Yr || MY && YY.searching,
            onClick: tY,
            children: "list" === VY ? WY("smpShop:listButton", {
              count: eY,
              item: rr
            }) : (0, vY.jsxs)(vY.Fragment, {
              children: [WY("smpShop:orderButton", {
                count: eY,
                item: rr
              }), " ", BY >= 1 && (0, vY.jsx)(eF, {
                amount: xY
              })]
            })
          })]
        })]
      })
    }

    function yA() {
      var YY;
      const {
        t: rY
      } = (0, RY.C)(), DY = UF(), AY = null === (YY = DY.shopInfo[DY.categoryKey]) || void 0 === YY ? void 0 : YY.items, IY = MF(AY, "search"), OY = MF(AY, "creator"), gY = JF(AY, "enchantedCreator"), aY = JF(AY, "listing"), uY = MF(AY, "empty"), sY = rA(IY, aY.length > 0 || null !== uY), {
        searched: iY,
        shown: yY,
        loading: QY
      } = sY, [WY, EY] = (0, FY.useState)(!1), [mY, VY] = function() {
        const [YY, rY] = (0, OA.e)("smpMarketView", "list");
        return ["grid" === YY ? "grid" : "list", rY]
      }(), SY = "grid" === mY, lY = (0, FY.useMemo)((() => aY.filter((YY => {
        let {
          meta: rY
        } = YY;
        return null !== rY.seller && rY.item === iY
      })).map((YY => {
        let {
          meta: rY
        } = YY;
        return rY.pricePerItem
      })).sort(((YY, rY) => YY - rY))), [aY, iY]), TY = (0, FY.useMemo)((() => {
        const YY = new Set(sY.catalogue.map((YY => {
          let {
            name: rY
          } = YY;
          return rY
        })));
        return function(YY) {
          for (const rY in YY)
            if ("sell" === YY[rY].smp) return JF(YY[rY].items, "sell").filter((YY => {
              let {
                item: rY
              } = YY;
              return !rY.enchant
            })).map((YY => {
              let {
                meta: rY
              } = YY;
              return {
                item: rY.item,
                quantity: rY.quantity,
                sellPrice: rY.pricePerItem
              }
            }));
          return []
        }(DY.shopInfo).filter((rY => {
          let {
            item: DY
          } = rY;
          return YY.has(DY)
        }))
      }), [DY.shopInfo, sY.catalogue]);
      return (0, vY.jsx)(IA, {
        browser: sY,
        className: "SmpMarketTab",
        recentLabel: rY("smpShop:recentlyListed"),
        action: (0, vY.jsx)(oY.p, {
          className: "SmpSellButton",
          onClick: () => {
            EY((YY => !YY))
          },
          children: rY("smpShop:sell")
        }),
        above: WY && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)(iA, {
            mode: "list",
            creator: OY,
            inventory: TY,
            catalogue: sY.catalogue,
            names: sY.names,
            searching: QY,
            prices: lY,
            onPickItem: sY.searchFor,
            onClose: () => {
              EY(!1)
            }
          }), gY.length > 0 && (0, vY.jsx)(QA, {
            entries: gY
          })]
        }),
        listControls: (0, vY.jsx)(aA, {
          view: mY,
          onChange: VY
        }),
        summary: yY && (aY.length > 0 ? rY(1 === aY.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: aY.length,
          price: VF(RA(aY, "min"))
        }) : rY("smpShop:noOneSelling", {
          item: GF(sY.names, yY)
        })),
        list: QY ? (0, vY.jsx)(NF, {
          grid: SY
        }) : aY.length > 0 ? (0, vY.jsx)(vA, {
          entries: aY,
          view: mY
        }) : uY ? (0, vY.jsx)(cF, {
          entry: uY
        }) : (0, vY.jsx)(NF, {
          count: 3,
          grid: SY
        })
      })
    }

    function QA(YY) {
      let {
        entries: rY
      } = YY;
      const {
        t: DY
      } = (0, RY.C)(), AY = UF(), [IY, OY] = (0, FY.useState)({});
      return (0, vY.jsx)("div", {
        className: "SmpList",
        children: rY.map((YY => {
          var rY, FY, RY;
          let {
            key: gY,
            item: aY,
            meta: uY
          } = YY;
          const sY = null !== (rY = IY[gY]) && void 0 !== rY ? rY : 1;
          return (0, vY.jsxs)("div", {
            className: "SmpRow",
            children: [(0, vY.jsx)(TF, {
              item: uY.item,
              amount: uY.quantity,
              tier: null !== (FY = null === (RY = aY.enchant) || void 0 === RY ? void 0 : RY.tier) && void 0 !== FY ? FY : null
            }), (0, vY.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, vY.jsx)("b", {
                children: (0, vY.jsx)(sF.b, {
                  text: aY.customTitle
                })
              }), (0, vY.jsx)("small", {
                children: DY("smpShop:enchantedListing")
              })]
            }), (0, vY.jsx)(zF, {
              value: sY,
              onChange: YY => {
                OY({
                  ...IY,
                  [gY]: YY
                })
              },
              max: 9999999,
              step: ZF,
              label: DY("smpShop:pricePerItem")
            }), (0, vY.jsxs)(oY.p, {
              loading: AY.isPending(gY),
              onClick: () => {
                AY.act(gY, String(sY))
              },
              children: [DY("smpShop:list"), " ", (0, vY.jsx)(eF, {
                amount: sY
              })]
            })]
          }, gY)
        }))
      })
    }
    const oA = (0, FY.memo)((function(YY) {
      let {
        itemKey: rY,
        item: DY,
        quantity: FY,
        pricePerItem: AY,
        tier: RY,
        selected: OY,
        onSelect: gY
      } = YY;
      return (0, vY.jsxs)("button", {
        type: "button",
        className: IY()("SmpInventorySlot", {
          SmpInventorySlotOn: OY
        }),
        title: DY,
        onClick: () => {
          gY(rY)
        },
        children: [(0, vY.jsx)(TF, {
          item: DY,
          amount: FY,
          tier: RY
        }), (0, vY.jsx)(eF, {
          amount: AY
        })]
      })
    }));

    function WA() {
      var YY;
      const {
        t: rY
      } = (0, RY.C)(), DY = UF(), AY = null === (YY = DY.shopInfo[DY.categoryKey]) || void 0 === YY ? void 0 : YY.items, OY = JF(AY, "sell"), gY = MF(AY, "empty"), [aY, uY] = (0, FY.useState)(null), [sY, iY] = (0, FY.useState)({}), yY = OY.find((YY => {
        let {
          key: rY
        } = YY;
        return rY === aY
      }));
      return 0 === OY.length ? (0, vY.jsx)("div", {
        className: "SmpScreen",
        children: (0, vY.jsx)(BF, {
          title: gY ? (0, vY.jsx)(sF.b, {
            text: gY.item.customTitle
          }) : rY("smpShop:nothingToSell"),
          children: gY && (0, vY.jsx)(sF.b, {
            text: gY.item.description
          })
        })
      }) : (0, vY.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, vY.jsx)("div", {
          className: "SmpInventoryGrid",
          children: OY.map((YY => {
            var rY, DY;
            let {
              key: FY,
              item: AY,
              meta: IY
            } = YY;
            return (0, vY.jsx)(oA, {
              itemKey: FY,
              item: IY.item,
              quantity: IY.quantity,
              pricePerItem: IY.pricePerItem,
              tier: null !== (rY = null === (DY = AY.enchant) || void 0 === DY ? void 0 : DY.tier) && void 0 !== rY ? rY : null,
              selected: FY === aY,
              onSelect: uY
            }, FY)
          }))
        }), (0, vY.jsx)("div", {
          className: IY()("SmpSellBar", {
            SmpSellBarIdle: !yY
          }),
          children: yY ? (0, vY.jsx)(EA, {
            entry: yY,
            choice: xF(yY.item, sY[yY.key]),
            onChoose: YY => {
              iY({
                ...sY,
                [yY.key]: YY
              })
            }
          }) : (0, vY.jsx)("span", {
            className: "SmpMuted",
            children: rY("smpShop:tapToSell")
          })
        })]
      })
    }

    function EA(YY) {
      var rY, DY, FY, AY;
      let {
        entry: IY,
        choice: OY,
        onChoose: gY
      } = YY;
      const {
        t: aY
      } = (0, RY.C)(), uY = UF(), {
        key: sY,
        item: iY,
        meta: yY
      } = IY, QY = qF("dropdown" === (null === (rY = iY.userInput) || void 0 === rY ? void 0 : rY.type) ? iY.userInput.dropdownOptions : []), WY = null === OY ? 0 : -(0, gF.c)(iY, OY);
      return (0, vY.jsxs)(vY.Fragment, {
        children: [(0, vY.jsx)(TF, {
          item: yY.item,
          amount: yY.quantity,
          tier: null !== (DY = null === (FY = iY.enchant) || void 0 === FY ? void 0 : FY.tier) && void 0 !== DY ? DY : null
        }), (0, vY.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, vY.jsx)("b", {
            children: (0, vY.jsx)(sF.b, {
              text: null !== (AY = iY.customTitle) && void 0 !== AY ? AY : yY.item
            })
          }), (0, vY.jsx)("small", {
            children: aY("smpShop:sellEach", {
              count: yY.quantity
            })
          })]
        }), (0, vY.jsx)(KF, {
          options: QY.map((YY => {
            let {
              label: rY,
              quantity: DY,
              isAll: FY
            } = YY;
            return {
              value: rY,
              label: FY ? aY("smpShop:all", {
                count: DY
              }) : String(DY)
            }
          })),
          value: OY,
          onChange: gY,
          ariaLabel: aY("smpShop:quantity")
        }), (0, vY.jsxs)(oY.p, {
          loading: uY.isPending(sY),
          disabled: null === OY,
          onClick: () => {
            uY.act(sY, OY)
          },
          children: [aY("smpShop:sellButton"), " ", (0, vY.jsx)(eF, {
            amount: WY
          })]
        })]
      })
    }

    function mA() {
      var YY;
      const {
        t: rY
      } = (0, RY.C)(), DY = UF(), FY = null === (YY = DY.shopInfo[DY.categoryKey]) || void 0 === YY ? void 0 : YY.items, AY = JF(FY, "collect"), IY = JF(FY, "myListing"), OY = (YY, rY) => DY.isPending(YY) || !1 === rY.canBuy;
      return (0, vY.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, vY.jsx)("h3", {
          className: "SmpSectionTitle",
          children: rY("smpShop:readyToCollect")
        }), AY.length > 0 ? (0, vY.jsx)("div", {
          className: "SmpList",
          children: AY.map((YY => {
            var FY, AY;
            let {
              key: IY,
              item: RY,
              meta: gY
            } = YY;
            return (0, vY.jsxs)("div", {
              className: "SmpRow",
              children: [(0, vY.jsx)(TF, {
                item: "sold" === gY.type ? "Gold Coin" : gY.item,
                amount: "sold" === gY.type ? 0 : gY.quantity,
                tier: null !== (FY = null === (AY = RY.enchant) || void 0 === AY ? void 0 : AY.tier) && void 0 !== FY ? FY : null
              }), (0, vY.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, vY.jsx)("b", {
                  children: (0, vY.jsx)(sF.b, {
                    text: RY.customTitle
                  })
                }), (0, vY.jsx)("small", {
                  children: (0, vY.jsx)(sF.b, {
                    text: RY.description
                  })
                })]
              }), (0, vY.jsx)(oY.n, {
                loading: OY(IY, RY),
                onClick: () => {
                  DY.act(IY)
                },
                children: rY("smpShop:collect")
              })]
            }, IY)
          }))
        }) : (0, vY.jsx)(BF, {
          title: rY("smpShop:nothingToCollect"),
          children: rY("smpShop:nothingToCollectHint")
        }), (0, vY.jsx)("h3", {
          className: "SmpSectionTitle",
          children: rY("smpShop:activeListings", {
            count: IY.length
          })
        }), IY.length > 0 ? (0, vY.jsx)("div", {
          className: "SmpList",
          children: IY.map((YY => {
            var FY, AY;
            let {
              key: IY,
              item: RY,
              meta: gY
            } = YY;
            return (0, vY.jsxs)("div", {
              className: "SmpRow",
              children: [(0, vY.jsx)(TF, {
                item: gY.item,
                amount: gY.quantity,
                tier: null !== (FY = null === (AY = RY.enchant) || void 0 === AY ? void 0 : AY.tier) && void 0 !== FY ? FY : null
              }), (0, vY.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, vY.jsx)("b", {
                  children: (0, vY.jsx)(sF.b, {
                    text: RY.customTitle
                  })
                }), (0, vY.jsx)("small", {
                  children: rY("smpShop:timeLeft", {
                    time: XF(gY.expiresAt)
                  })
                })]
              }), (0, vY.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, vY.jsx)(eF, {
                  amount: gY.pricePerItem
                }), (0, vY.jsx)("small", {
                  children: rY("smpShop:each")
                })]
              }), (0, vY.jsx)(oY.D, {
                loading: OY(IY, RY),
                onClick: () => {
                  DY.act(IY)
                },
                children: rY("smpShop:cancel")
              })]
            }, IY)
          }))
        }) : (0, vY.jsx)(BF, {
          title: rY("smpShop:noActiveListings"),
          children: rY("smpShop:noActiveListingsHint")
        })]
      })
    }

    function VA(YY) {
      let {
        done: rY,
        of: DY
      } = YY;
      return (0, vY.jsx)("span", {
        className: "SmpProgress",
        children: (0, vY.jsx)("i", {
          style: {
            width: `${Math.min(100,rY/Math.max(1,DY)*100)}%`
          }
        })
      })
    }

    function SA(YY) {
      var rY, DY, FY;
      let {
        entry: AY,
        choice: IY,
        onChoose: OY
      } = YY;
      const {
        t: gY
      } = (0, RY.C)(), aY = UF(), {
        key: uY,
        item: sY,
        meta: iY
      } = AY, yY = "dropdown" === (null === (rY = sY.userInput) || void 0 === rY ? void 0 : rY.type) ? sY.userInput.dropdownOptions : [], QY = !0 === iY.processing, WY = null !== iY.creator && (iY.ja > 0 || QY), EY = WY && iY.ja > 0 ? qF(yY) : [], mY = null === IY ? 0 : null !== (DY = null === (FY = EY.find((YY => YY.label === IY))) || void 0 === FY ? void 0 : FY.quantity) && void 0 !== DY ? DY : 0;
      return (0, vY.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, vY.jsx)(TF, {
          item: iY.item
        }), (0, vY.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, vY.jsx)("b", {
            children: (0, vY.jsx)(sF.b, {
              text: sY.customTitle
            })
          }), (0, vY.jsxs)("small", {
            children: [(0, vY.jsx)(eF, {
              amount: iY.pricePerItem
            }), " ", gY("smpShop:each"), " \xb7", " ", null === iY.creator ? gY("smpShop:you") : (0, vY.jsx)(sF.b, {
              text: [{
                entityName: iY.creator
              }]
            })]
          }), (0, vY.jsx)(VA, {
            done: iY.delivered,
            of: iY.wanted
          })]
        }), WY ? (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)(KF, {
            options: EY.map((YY => {
              let {
                label: rY,
                quantity: DY,
                isAll: FY
              } = YY;
              return {
                value: rY,
                label: FY ? gY("smpShop:max", {
                  count: DY
                }) : String(DY)
              }
            })),
            value: IY,
            onChange: OY,
            ariaLabel: gY("smpShop:quantity")
          }), (0, vY.jsxs)(oY.p, {
            loading: aY.isPending(uY) || QY,
            disabled: null === IY,
            onClick: () => {
              aY.act(uY, IY)
            },
            children: [gY("smpShop:deliver"), " ", (0, vY.jsx)(eF, {
              amount: mY * iY.pricePerItem
            })]
          })]
        }) : (0, vY.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === iY.creator ? gY("smpShop:yourOrder") : gY("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function lA() {
      var YY;
      const {
        t: rY
      } = (0, RY.C)(), DY = UF(), AY = null === (YY = DY.shopInfo[DY.categoryKey]) || void 0 === YY ? void 0 : YY.items, IY = MF(AY, "search"), OY = MF(AY, "creator"), gY = JF(AY, "order"), aY = MF(AY, "empty"), uY = rA(IY, gY.length > 0 || null !== aY), [sY, iY] = (0, FY.useState)(!1), [yY, QY] = (0, FY.useState)({});
      return (0, vY.jsx)(IA, {
        browser: uY,
        recentLabel: rY("smpShop:recentOrders"),
        action: (0, vY.jsx)(oY.p, {
          onClick: () => {
            iY((YY => !YY))
          },
          children: rY("smpShop:createOrder")
        }),
        above: sY && (0, vY.jsx)(iA, {
          mode: "order",
          creator: OY,
          catalogue: uY.catalogue,
          names: uY.names,
          searching: uY.loading,
          prices: [],
          onPickItem: uY.searchFor,
          onClose: () => {
            iY(!1)
          }
        }),
        onBack: () => {
          iY(!1)
        },
        summary: gY.length > 0 && rY(1 === gY.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: gY.length,
          price: VF(RA(gY, "max"))
        }),
        list: uY.loading ? (0, vY.jsx)(NF, {}) : gY.length > 0 ? (0, vY.jsx)(LF.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: wF,
          observerUpdateDeps: [gY.length],
          children: gY.map((YY => (0, vY.jsx)(SA, {
            entry: YY,
            choice: xF(YY.item, yY[YY.key]),
            onChoose: rY => {
              QY({
                ...yY,
                [YY.key]: rY
              })
            }
          }, YY.key)))
        }) : aY ? (0, vY.jsx)(cF, {
          entry: aY
        }) : (0, vY.jsx)(NF, {
          count: 3
        })
      })
    }

    function TA() {
      var YY;
      const {
        t: rY
      } = (0, RY.C)(), DY = UF(), FY = JF(null === (YY = DY.shopInfo[DY.categoryKey]) || void 0 === YY ? void 0 : YY.items, "myOrder");
      return 0 === FY.length ? (0, vY.jsx)("div", {
        className: "SmpScreen",
        children: (0, vY.jsx)(BF, {
          title: rY("smpShop:noOrders"),
          children: rY("smpShop:noOrdersHint")
        })
      }) : (0, vY.jsx)("div", {
        className: "SmpScreen",
        children: (0, vY.jsx)("div", {
          className: "SmpList",
          children: FY.map((YY => {
            let {
              key: FY,
              item: AY,
              meta: IY
            } = YY;
            const RY = DY.isPending(FY) || !1 === AY.canBuy;
            return (0, vY.jsxs)("div", {
              className: "SmpRow",
              children: [(0, vY.jsx)(TF, {
                item: IY.item,
                amount: IY.collectable
              }), (0, vY.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, vY.jsx)("b", {
                  children: (0, vY.jsx)(sF.b, {
                    text: AY.customTitle
                  })
                }), (0, vY.jsxs)("small", {
                  children: [(0, vY.jsx)(eF, {
                    amount: IY.pricePerItem
                  }), " ", rY("smpShop:each"), IY.collectable > 0 && ` \xb7 ${rY("smpShop:readyCount",{count:IY.collectable})}`]
                }), (0, vY.jsx)(VA, {
                  done: IY.delivered,
                  of: IY.wanted
                })]
              }), IY.collectable > 0 ? (0, vY.jsx)(oY.n, {
                loading: RY,
                onClick: () => {
                  DY.act(FY)
                },
                children: rY("smpShop:collectCount", {
                  count: IY.collectable
                })
              }) : (0, vY.jsx)(oY.D, {
                loading: RY,
                onClick: () => {
                  DY.act(FY)
                },
                children: rY("smpShop:cancel")
              })]
            }, FY)
          }))
        })
      })
    }
    const eA = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      NA = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function BA(YY, rY) {
      let DY = !1;
      const FY = {};
      for (const AY in YY) rY(AY, YY[AY]) ? FY[AY] = YY[AY] : DY = !0;
      return DY ? FY : YY
    }

    function cA(YY) {
      var rY, DY, AY, gY;
      const {
        show: aY,
        shopInfo: uY,
        selectedCategoryKey: sY
      } = YY, {
        t: iY
      } = (0, RY.C)(), yY = null !== sY && void 0 !== sY ? sY : "", QY = dF(uY, yY), oY = null === (rY = uY[yY]) || void 0 === rY ? void 0 : rY.items, WY = null !== QY, [EY, mY] = (0, FY.useState)({}), [VY, SY] = (0, FY.useState)([]), [lY, TY] = (0, FY.useState)(!1), [eY, NY] = (0, FY.useState)(null), [, BY] = (0, FY.useState)(0), cY = (0, FY.useRef)(0), KY = (0, FY.useRef)({}), HY = (0, FY.useRef)({
        items: oY,
        pending: EY,
        shopInfo: uY,
        active: WY,
        canAfford: YY.canAfford,
        buy: YY.buy
      });
      HY.current = {
        items: oY,
        pending: EY,
        shopInfo: uY,
        active: WY,
        canAfford: YY.canAfford,
        buy: YY.buy
      };
      const zY = (0, FY.useCallback)((YY => {
        cY.current++;
        const rY = cY.current;
        SY((DY => [{
          id: rY,
          text: YY
        }, ...DY].slice(0, 8))), NY(rY)
      }), []);
      (0, FY.useEffect)((() => {
        if (null === eY) return;
        const YY = setTimeout((() => {
          NY(null)
        }), 3e3);
        return () => {
          clearTimeout(YY)
        }
      }), [eY]), (0, FY.useEffect)((() => {
        const rY = YY.message;
        if (!rY) return;
        const {
          shopInfo: DY,
          active: FY,
          items: AY
        } = HY.current, IY = null !== rY.categoryKey ? null !== dF(DY, rY.categoryKey) : FY;
        (IY || FY) && zY(rY.text), IY && mY((YY => BA(YY, (YY => {
          var rY, DY;
          return !eA.has(null === AY || void 0 === AY || null === (rY = AY[YY]) || void 0 === rY || null === (DY = rY.smp) || void 0 === DY ? void 0 : DY.kind)
        }))))
      }), [YY.message, zY]), (0, FY.useEffect)((() => {
        mY((YY => BA(YY, ((YY, rY) => nF(null === oY || void 0 === oY ? void 0 : oY[YY]) === rY.snapshot))))
      }), [uY, oY]);
      const ZY = Object.keys(EY).length > 0;
      (0, FY.useEffect)((() => {
        if (!ZY) return;
        const YY = setInterval((() => {
          BY((YY => YY + 1));
          const YY = Date.now(),
            {
              pending: rY,
              items: DY
            } = HY.current,
            FY = Object.keys(rY).filter((DY => YY - rY[DY].at >= 12e3));
          if (0 === FY.length) return;
          const AY = FY.some((YY => {
            var FY, AY;
            return "search" !== (null === DY || void 0 === DY || null === (FY = DY[YY]) || void 0 === FY || null === (AY = FY.smp) || void 0 === AY ? void 0 : AY.kind) || rY[YY].resend
          }));
          for (const IY of FY) KY.current[IY] = YY;
          mY((YY => BA(YY, (YY => !FY.includes(YY))))), AY && zY(iY("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(YY)
        }
      }), [ZY]), (0, FY.useEffect)((() => {
        mY({})
      }), [yY]), (0, FY.useEffect)((() => {
        aY || TY(!1)
      }), [aY]);
      const CY = (0, FY.useCallback)((function(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: FY,
            pending: AY,
            canAfford: IY,
            buy: RY
          } = HY.current, OY = null === FY || void 0 === FY ? void 0 : FY[YY];
          if (!OY || YY in AY || !1 === OY.canBuy) return !1;
          if (!IY(OY, (0, gF.c)(OY, rY))) return !1;
          RY(YY, OY, rY);
          const gY = {
            snapshot: nF(OY),
            at: Date.now(),
            resend: DY
          };
          return HY.current.pending = {
            ...HY.current.pending,
            [YY]: gY
          }, mY((rY => ({
            ...rY,
            [YY]: gY
          }))), !0
        }), []),
        fY = (0, FY.useMemo)((() => ({
          shopInfo: uY,
          categoryKey: yY,
          canAfford: YY.canAfford,
          isPending: YY => YY in EY,
          gaveUpAt: YY => {
            var rY;
            return null !== (rY = KY.current[YY]) && void 0 !== rY ? rY : 0
          },
          act: CY,
          notify: zY
        })), [uY, yY, YY.canAfford, EY, CY, zY]),
        jY = Math.min(...Object.values(EY).map((YY => YY.at))),
        hY = ZY && Date.now() - jY > 1500,
        dY = VY.length > 1,
        JY = null !== (DY = null === (AY = uY[yY]) || void 0 === AY ? void 0 : AY.customTitle) && void 0 !== DY ? DY : yY,
        MY = null === (gY = uY[yY]) || void 0 === gY ? void 0 : gY.description;
      let wY = null;
      return "market" === QY ? wY = (0, vY.jsx)(yA, {}) : "sell" === QY ? wY = (0, vY.jsx)(WA, {}) : "collect" === QY ? wY = (0, vY.jsx)(mA, {}) : "orders" === QY ? wY = (0, vY.jsx)(lA, {}) : "myOrders" === QY && (wY = (0, vY.jsx)(TA, {})), (0, vY.jsx)(PF.Provider, {
        value: fY,
        children: (0, vY.jsx)("div", {
          className: "SmpShopHost",
          hidden: !WY,
          children: (0, vY.jsxs)("div", {
            className: "SmpShop",
            children: [(0, vY.jsx)("header", {
              className: "SmpHeader",
              children: (0, vY.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, vY.jsxs)("h2", {
                  children: [QY && (0, vY.jsx)(OY.e, {
                    name: NA[QY]
                  }), iY(JY)]
                }), MY && (0, vY.jsx)("p", {
                  children: (0, vY.jsx)(sF.b, {
                    text: MY
                  })
                })]
              })
            }), (0, vY.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: aY && wY
            }), (0, vY.jsxs)("button", {
              type: "button",
              className: IY()("SmpStatus", {
                SmpStatusWaiting: ZY,
                SmpStatusFresh: !ZY && null !== eY,
                SmpStatusHasHistory: dY
              }),
              "aria-live": "polite",
              "aria-expanded": dY ? lY : void 0,
              onClick: () => {
                dY && TY((YY => !YY))
              },
              children: [ZY ? (0, vY.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, vY.jsx)(HF, {}), iY(hY ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : VY[0] ? (0, vY.jsx)("span", {
                className: "SmpStatusText",
                children: (0, vY.jsx)(sF.b, {
                  text: VY[0].text
                })
              }, VY[0].id) : (0, vY.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: iY("smpShop:ready")
              }), dY && (0, vY.jsx)("small", {
                children: iY("smpShop:recentMessages", {
                  count: VY.length
                })
              })]
            }), lY && dY && (0, vY.jsx)("div", {
              className: "SmpStatusHistory",
              children: VY.map((YY => (0, vY.jsx)("div", {
                children: (0, vY.jsx)(sF.b, {
                  text: YY.text
                })
              }, YY.id)))
            })]
          })
        })
      })
    }
    class KA {
      constructor(YY) {
        this.info = YY
      }
      static fromShopInfo(YY) {
        const rY = {};
        for (const DY in YY) {
          const FY = !0 === YY[DY].redDot && !0 !== YY[DY].forceRemoveRedDot;
          rY[DY] = {
            redDot: FY,
            items: {}
          };
          for (const AY in YY[DY].items) {
            const FY = YY[DY].items[AY],
              IY = !0 === FY.redDot && !0 !== FY.forceRemoveRedDot;
            rY[DY].items[AY] = {
              redDot: IY
            }
          }
        }
        return new KA(rY)
      }
      anyCategoryHasRedDots() {
        for (const YY in this.info)
          if (this.categoryHasRedDot(YY)) return !0;
        return !1
      }
      doesCategoryExist(YY) {
        return !(0, Kr.H)(this.info[YY])
      }
      categoryHasRedDot(YY) {
        return !0 === this.info[YY].redDot
      }
      updateCategoryRedDot(YY, rY) {
        this.info[YY].redDot = rY
      }
      doesItemExist(YY, rY) {
        return this.doesCategoryExist(YY) && !(0, Kr.H)(this.info[YY].items[rY])
      }
      itemHasRedDot(YY, rY) {
        return !0 === this.info[YY].items[rY].redDot
      }
      updateItemRedDot(YY, rY, DY) {
        this.info[YY].items[rY].redDot = DY
      }
      shallowCopy() {
        return new KA(this.info)
      }
    }

    function HA(YY, rY) {
      return `${YY}\x1f${rY}`
    }

    function zA(YY, rY) {
      return !(0, Kr.H)(rY) && !(0, Kr.H)(YY) && rY in YY
    }
    const ZA = (0, FY.memo)((function(YY) {
      var rY, DY;
      let {
        show: AY
      } = YY;
      const RY = (0, jD.f)("players", JA),
        OY = (0, jD.f)("players", MA),
        [aY, sY] = (0, FY.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: KA.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        iY = (0, FY.useRef)(""),
        QY = (0, FY.useRef)(null),
        WY = (0, FY.useRef)(null),
        mY = (0, FY.useRef)(0),
        VY = (0, FY.useRef)(void 0),
        SY = (0, FY.useRef)(null),
        lY = (0, FY.useRef)(aY),
        TY = aY.redDotInfo.anyCategoryHasRedDots(),
        [NY, BY] = (0, FY.useState)(null),
        KY = (0, FY.useRef)(!1);
      let HY = !1,
        zY = 0,
        ZY = 0;
      if (aY.currencyAmounts) {
        for (const YY in aY.currencyAmounts) {
          var CY;
          const rY = aY.currencyAmounts[YY];
          rY.hidden || (zY++, (null === (CY = rY.subtext) || void 0 === CY ? void 0 : CY.length) > 0 && ZY++)
        }
        HY = zY + ZY > 4
      }(0, FY.useEffect)((() => {
        Hr.g.vo("showShopIconRedDot", TY, !0)
      }), [TY]), (0, FY.useEffect)((() => {
        EY.gameBridge.send("setShopOpen", AY), AY || (clearTimeout(VY.current), sY((YY => YY.awaitingPurchase ? {
          ...YY,
          awaitingPurchase: !1
        } : YY)))
      }), [AY]), (0, FY.useEffect)((() => () => {
        EY.gameBridge.send("setShopOpen", !1), clearTimeout(VY.current)
      }), []), (0, FY.useEffect)((() => {
        lY.current = aY
      }), [aY]), (0, FY.useEffect)((() => {
        if (null === NY) return;
        return (0, oF.c)("pointerdown", (YY => {
          const rY = YY.target;
          null !== rY && void 0 !== rY && rY.closest(".ShopItem") || BY(null)
        }))
      }), [NY]);
      const fY = YY => {
          sY((rY => ({
            ...rY,
            ...YY
          })))
        },
        jY = YY => {
          var rY;
          clearTimeout(null === (rY = aY.onBoughtInfo) || void 0 === rY ? void 0 : rY.timeout);
          const DY = setTimeout((() => {
            fY({
              onBoughtInfo: null
            })
          }), 3e3);
          iY.current = YY, fY({
            onBoughtInfo: {
              text: YY,
              timeout: DY,
              categoryKey: QY.current
            }
          })
        },
        hY = YY => {
          const {
            shopInfo: rY,
            userInputsPerItem: DY,
            redDotInfo: FY,
            autoSelectCategory: IY
          } = function(YY, rY, DY, FY, AY, IY) {
            if ((0, Kr.H)(YY) || 0 === Object.keys(YY).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: KA.fromShopInfo({}),
              autoSelectCategory: null
            };
            const RY = cY.l[cY.s].adConfig.showRewardedAds,
              OY = {};
            let gY = null;
            for (const oY in YY) {
              const rY = YY[oY],
                DY = {};
              let FY = !1;
              for (const YY in rY.items) {
                const AY = rY.items[YY];
                (0, gF.m)(AY, RY) && (DY[YY] = AY, FY = !0)
              }
              FY && (OY[oY] = {
                ...rY,
                items: DY
              }, !0 === rY.autoSelectCategory && (gY = oY))
            }
            const aY = {},
              vY = (YY, rY, FY, RY) => {
                var OY, gY;
                const vY = HA(YY, rY),
                  uY = null !== (OY = DY[vY]) && void 0 !== OY ? OY : DY[rY];
                if (null !== (gY = RY.userInput) && void 0 !== gY && gY.type) switch (RY.userInput.type) {
                  case "dropdown": {
                    var sY;
                    const YY = !uY || !RY.userInput.dropdownOptions.some((YY => (0, gF.e)(YY) === uY)),
                      rY = RY.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === FY || void 0 === FY || null === (sY = FY.userInput) || void 0 === sY ? void 0 : sY.type) || JSON.stringify(FY.userInput.dropdownOptions) !== JSON.stringify(RY.userInput.dropdownOptions)),
                      DY = RY.userInput,
                      AY = !(0, Kr.H)(DY.initialValue) && DY.dropdownOptions.some((YY => (0, gF.e)(YY) === DY.initialValue));
                    var iY;
                    return void(YY || rY ? AY ? aY[vY] = null !== (iY = RY.userInput.initialValue) && void 0 !== iY ? iY : null : RY.userInput.dropdownOptions.length > 0 ? aY[vY] = (0, gF.e)(RY.userInput.dropdownOptions[0]) : aY[vY] = null : aY[vY] = uY)
                  }
                  case "text":
                  case "number":
                    var yY, QY, oY;
                    return void((null === FY || void 0 === FY ? void 0 : FY.userInput) !== RY.userInput ? aY[vY] = null !== (yY = null !== (QY = RY.userInput.initialValue) && void 0 !== QY ? QY : uY) && void 0 !== yY ? yY : "" : aY[vY] = null !== (oY = null !== uY && void 0 !== uY ? uY : RY.userInput.initialValue) && void 0 !== oY ? oY : "");
                  case "color":
                    var WY, EY, mY;
                    return void((null === FY || void 0 === FY ? void 0 : FY.userInput) !== RY.userInput ? aY[vY] = null !== (WY = null !== (EY = RY.userInput.initialValue) && void 0 !== EY ? EY : uY) && void 0 !== WY ? WY : "#000000" : aY[vY] = null !== (mY = null !== uY && void 0 !== uY ? uY : RY.userInput.initialValue) && void 0 !== mY ? mY : "#000000");
                  case "player": {
                    const YY = (0, gF.i)(AY, IY, RY.userInput);
                    return void(uY && YY.includes(uY) ? aY[vY] = uY : aY[vY] = YY.length > 0 ? YY[0] : null)
                  }
                }
              };
            for (const oY in OY)
              for (const YY in OY[oY].items) {
                var uY;
                const DY = OY[oY].items[YY];
                vY(oY, YY, null === (uY = rY[oY]) || void 0 === uY ? void 0 : uY.items[YY], DY)
              }
            const sY = KA.fromShopInfo(OY);
            for (const oY in OY) {
              var iY;
              if (FY.doesCategoryExist(oY)) {
                (null === (iY = rY[oY]) || void 0 === iY ? void 0 : iY.redDot) === OY[oY].redDot && sY.updateCategoryRedDot(oY, FY.categoryHasRedDot(oY));
                for (const YY in OY[oY].items) {
                  var yY, QY;
                  FY.doesItemExist(oY, YY) && (null === (yY = rY[oY]) || void 0 === yY || null === (QY = yY.items[YY]) || void 0 === QY ? void 0 : QY.redDot) === OY[oY].items[YY].redDot && sY.updateItemRedDot(oY, YY, FY.itemHasRedDot(oY, YY))
                }
              }
            }
            return {
              shopInfo: OY,
              userInputsPerItem: aY,
              redDotInfo: sY,
              autoSelectCategory: gY
            }
          }(YY, aY.shopInfo, aY.userInputsPerItem, aY.redDotInfo, RY, OY), gY = {
            shopInfo: rY,
            userInputsPerItem: DY,
            redDotInfo: FY
          };
          if (null === IY || AY)
            if (rY[aY.selectedCategoryKey]) gY.selectedCategoryKey = aY.selectedCategoryKey;
            else {
              const YY = EF(rY);
              gY.selectedCategoryKey = YY.length > 0 ? YY[0] : null
            }
          else gY.selectedCategoryKey = IY;
          return 0 === Object.keys(rY).length && AY && eY.b.set({
            openEverythingMenuName: null
          }), gY
        },
        dY = (YY, rY, DY) => {
          const FY = aY.selectedCategoryKey,
            AY = HA(FY, YY),
            IY = null !== DY && void 0 !== DY ? DY : aY.userInputsPerItem[AY],
            RY = {
              categoryKey: FY,
              itemKey: YY,
              userInput: IY
            };
          if (QY.current = FY, rY.isRewardedAd) {
            if (Date.now() - mY.current < 5e3) return;
            (0, LY.V)((() => {
              var DY, FY, IY;
              console.log("bought rewarded ad");
              const OY = RY.categoryKey ? null === (DY = lY.current.shopInfo[RY.categoryKey]) || void 0 === DY ? void 0 : DY.items[YY] : null;
              if (!OY || !OY.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (FY = rY.userInput) || void 0 === FY ? void 0 : FY.type) === (null === OY || void 0 === OY || null === (IY = OY.userInput) || void 0 === IY ? void 0 : IY.type) ? (RY.userInput = lY.current.userInputsPerItem[AY], EY.gameBridge.send("buyShopItem", RY), rY.onBoughtMessage && jY(rY.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), mY.current = Date.now()
          } else {
            EY.gameBridge.send("buyShopItem", RY), fY({
              awaitingPurchase: !0
            }), clearTimeout(VY.current), VY.current = setTimeout((() => {
              SY.current = null, fY({
                awaitingPurchase: !1
              })
            }), 1e3);
            const YY = (0, gF.c)(rY, IY);
            if (SY.current = null, !isNaN(YY) && zA(aY.currencyAmounts, rY.currency)) {
              0 !== YY && (SY.current = {
                currency: rY.currency,
                amountBefore: aY.currencyAmounts[rY.currency].amount
              });
              const DY = {
                ...aY.currencyAmounts
              };
              DY[rY.currency].amount -= YY, fY({
                currencyAmounts: DY
              })
            }
            rY.onBoughtMessage && jY(rY.onBoughtMessage)
          }
        },
        MY = (YY, rY) => {
          if (null === rY || !YY.shopInfo[rY]) return YY;
          let DY = YY.redDotInfo;
          return DY.categoryHasRedDot(rY) && (DY.updateCategoryRedDot(rY, !1), DY = DY.shallowCopy()), {
            ...YY,
            selectedCategoryKey: rY,
            redDotInfo: DY
          }
        },
        wY = YY => {
          sY((rY => MY(rY, YY)))
        };
      (0, yr.g)(WF.m, (() => {
        sY((YY => {
          const rY = (0, WF.p)(EF(YY.shopInfo), YY.selectedCategoryKey, (rY => (0, WF.k)(YY.shopInfo[rY].items)));
          return rY === YY.selectedCategoryKey ? YY : MY(YY, rY)
        }))
      })), (0, yr.g)("showShopFromServer", (YY => {
        let {
          toggle: rY,
          QD: DY
        } = YY;
        DY && wY(DY), 0 === Object.keys(aY.shopInfo).length || rY && AY ? eY.b.set({
          openEverythingMenuName: null
        }) : eY.b.set({
          openEverythingMenuName: wD.t.SHOP
        })
      })), (0, yr.g)("closeShopOnDamaged", (() => {
        AY && eY.b.set({
          openEverythingMenuName: null
        })
      })), (0, yr.g)("overShopInfo", (YY => {
        jY(YY)
      })), (0, yY.f)("currencyAmounts", (YY => {
        var rY;
        const DY = SY.current;
        DY && (null === YY || void 0 === YY || null === (rY = YY[DY.currency]) || void 0 === rY ? void 0 : rY.amount) === DY.amountBefore ? fY({
          currencyAmounts: YY
        }) : (SY.current = null, fY({
          currencyAmounts: YY,
          awaitingPurchase: !1
        }))
      })), (0, yY.f)("shopInfo", (YY => {
        fY({
          ...hY(YY),
          awaitingPurchase: !1
        })
      }));
      const bY = (0, FY.useRef)({
        playerIds: RY,
        localPlayerId: OY
      });
      (0, FY.useEffect)((() => {
        bY.current.playerIds === RY && bY.current.localPlayerId === OY || (bY.current = {
          playerIds: RY,
          localPlayerId: OY
        }, sY((YY => {
          const rY = hY(YY.shopInfo);
          return {
            ...YY,
            ...rY
          }
        })))
      }), [RY, OY]);
      const XY = aY.selectedCategoryKey,
        qY = (YY, rY) => {
          var DY, FY;
          return (isNaN(rY) || (0, Kr.H)(YY.currency) || zA(aY.currencyAmounts, YY.currency) && rY <= aY.currencyAmounts[YY.currency].amount) && (null === (DY = YY.canBuy) || void 0 === DY || DY) && !(null !== (FY = YY.hidden) && void 0 !== FY && FY)
        },
        pY = (YY, rY) => {
          var DY, FY, AY;
          const RY = HA(XY, YY),
            OY = aY.shopInfo[XY].items[YY],
            uY = aY.userInputsPerItem[RY],
            sY = (0, gF.c)(OY, uY),
            iY = qY(OY, sY),
            yY = OY.enchant,
            QY = yY ? (0, JY.qb)(null !== (DY = OY.customTitle) && void 0 !== DY ? DY : YY, {
              colour: JY.nb[yY.tier]
            }) : null !== (FY = OY.customTitle) && void 0 !== FY ? FY : YY,
            WY = rY => {
              const DY = null !== rY && void 0 !== rY ? rY : uY,
                FY = void 0 !== rY ? (0, gF.c)(OY, rY) : sY;
              qY(OY, FY) && null !== DY && dY(YY, OY, rY);
              let AY = aY.redDotInfo;
              AY.itemHasRedDot(XY, YY) && (AY.updateItemRedDot(XY, YY, !1), AY = AY.shallowCopy()), fY({
                redDotInfo: AY
              })
            };
          return (0, vY.jsxs)("div", {
            className: IY()("ShopItem", {
              ShopItemNoInput: !OY.userInput,
              ShopItemNoInputCanBuy: !OY.userInput && iY,
              ShopItemNoInputSelected: OY.isSelected,
              ShopItemEnchant: !!yY
            }),
            "data-pad-focusable": !OY.userInput || void 0,
            "data-pad-unavailable": !OY.userInput && !iY || void 0,
            "data-pad-repeat": null !== (AY = (0, WF.c)(OY)) && void 0 !== AY ? AY : void 0,
            "data-pad-repeat-wait": aY.awaitingPurchase || void 0,
            onClick: () => {
              if (yY && KY.current) {
                if (NY !== RY) return void BY(RY);
                BY(null)
              }
              OY.userInput || WY()
            },
            onPointerDown: YY => {
              yY && (KY.current = (0, vF.p)(YY))
            },
            onPointerEnter: YY => {
              yY && !(0, vF.p)(YY) && BY(RY)
            },
            onPointerLeave: YY => {
              yY && !(0, vF.p)(YY) && BY((YY => YY === RY ? null : YY))
            },
            style: {
              zIndex: Object.keys(aY.shopInfo[XY].items).length - rY
            },
            children: [aY.redDotInfo.itemHasRedDot(XY, YY) && (0, vY.jsx)(gY.b, {
              top: "-6px",
              right: "-6px"
            }), OY.badge && (0, vY.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, vY.jsx)("div", {
                className: IY()("ShopBadgeMain", OY.badge.type),
                children: (0, vY.jsx)(sF.b, {
                  text: OY.badge.text
                })
              })
            }), (0, vY.jsx)("div", {
              className: "ShopItemLeft",
              children: OY.image && (0, vY.jsx)(CA, {
                item: OY,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, vY.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, vY.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, vY.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, vY.jsx)(sF.b, {
                    text: QY
                  })
                }), (0, vY.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, vY.jsx)(sF.b, {
                    text: OY.description
                  })
                })]
              }), OY.userInput && (0, vY.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: YY => {
                  YY.stopPropagation()
                },
                children: [(0, vY.jsx)(hA, {
                  item: OY,
                  currInput: uY,
                  updateInput: rY => {
                    ((YY, rY, DY) => {
                      const FY = HA(YY, rY),
                        AY = {
                          ...aY.userInputsPerItem
                        };
                      AY[FY] = DY, fY({
                        userInputsPerItem: AY
                      })
                    })(XY, YY, rY)
                  },
                  onSubmit: YY => {
                    WY(YY)
                  }
                }), ("dropdown" !== OY.userInput.type || !OY.userInput.autoSubmit) && (0, vY.jsx)(oY.f, {
                  className: "ItemCostButton",
                  disabled: !iY && null !== uY,
                  onClick: () => {
                    WY()
                  },
                  children: (0, vY.jsx)(jA, {
                    item: OY,
                    cost: sY,
                    currencyAmounts: aY.currencyAmounts
                  })
                })]
              })]
            }), !OY.userInput && (0, vY.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, vY.jsx)(jA, {
                item: OY,
                cost: sY,
                currencyAmounts: aY.currencyAmounts
              })
            }), yY && NY === RY && (0, vY.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, vY.jsx)(sF.b, {
                text: QY
              }), (0, vY.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, vY.jsx)(sF.b, {
                  text: (0, aF.c)("", yY.enchantments, yY.enchantmentData)
                })
              })]
            })]
          }, RY)
        },
        kY = function(YY) {
          for (const rY in YY)
            if (YY[rY].smp) return !0;
          return !1
        }(aY.shopInfo),
        GY = dF(aY.shopInfo, XY);
      return (0, vY.jsx)(IF.b, {
        className: "Menu ShopBody",
        show: AY,
        children: 0 !== Object.keys(aY.shopInfo).length && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, vY.jsx)(uY, {
              items: EF(aY.shopInfo).map((YY => {
                var rY;
                return {
                  id: YY,
                  title: null !== (rY = aY.shopInfo[YY].customTitle) && void 0 !== rY ? rY : YY,
                  redDot: aY.redDotInfo.categoryHasRedDot(YY)
                }
              })),
              selectedItemId: XY,
              onClick: wY,
              padStartsOnTab: (0, WF.g)(XY)
            }), (0, vY.jsx)("div", {
              className: "MenuSideBarFooter",
              children: aY.currencyAmounts && Object.keys(aY.currencyAmounts).map((YY => {
                var rY;
                const DY = aY.currencyAmounts[YY];
                return DY.hidden ? null : (0, vY.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (HY ? "SmallText" : ""),
                  children: [(0, vY.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, vY.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: DY.iconColour
                      },
                      children: (0, vY.jsx)(wA, {
                        iconName: DY.icon
                      })
                    }), "\xa0", (0, OF.e)(DY.amount, 6)]
                  }), (null === (rY = DY.subtext) || void 0 === rY ? void 0 : rY.length) > 0 && (0, vY.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, vY.jsx)(sF.b, {
                      text: DY.subtext
                    })
                  })]
                }, YY)
              }))
            })]
          }), (0, vY.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [kY && (0, vY.jsx)(cA, {
              show: AY,
              shopInfo: aY.shopInfo,
              selectedCategoryKey: XY,
              buy: (YY, rY, DY) => {
                dY(YY, rY, DY)
              },
              canAfford: qY,
              message: aY.onBoughtInfo
            }), null === GY && (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsx)("div", {
                className: IY()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== aY.onBoughtInfo
                }),
                children: (0, vY.jsx)(sF.b, {
                  text: iY.current
                })
              }), (0, vY.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, vY.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (rY = aY.shopInfo[XY]) || void 0 === rY ? void 0 : rY.description) && (0, vY.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, vY.jsx)(sF.b, {
                      text: aY.shopInfo[XY].description
                    })
                  }), AY && (0, vY.jsx)("div", {
                    className: "ShopItems",
                    ref: WY,
                    "data-pad-initial-area": !0,
                    children: EF(null === (DY = aY.shopInfo[XY]) || void 0 === DY ? void 0 : DY.items).map(((YY, rY) => pY(YY, rY)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function CA(YY) {
      let {
        item: rY,
        minWidth: DY,
        minHeight: FY
      } = YY;
      const {
        image: AY,
        schematicId: IY,
        imageColour: RY
      } = rY;
      if (IY) return (0, vY.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${DY}rem`,
          height: `${FY}rem`
        },
        children: (0, vY.jsx)(iF.e, {
          game: {
            schematicId: IY
          }
        })
      });
      var gY, aY;
      if ((0, uF.f)(AY)) return (0, vY.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${DY}rem`,
          height: "0",
          minHeight: `${FY}rem`
        },
        children: (0, vY.jsx)(uF.c, {
          itemName: AY,
          amount: null !== (gY = rY.amount) && void 0 !== gY ? gY : 0,
          amountFontSize: FY / 4 + "rem",
          enchantmentTier: null === (aY = rY.enchant) || void 0 === aY ? void 0 : aY.tier
        })
      });
      const uY = AY.slice(-4);
      return ".jpg" === uY || ".png" === uY ? (0, vY.jsx)(fA, {
        image: AY,
        minWidth: DY
      }) : (0, vY.jsx)(OY.e, {
        name: AY,
        className: "SelectedItemImage",
        style: {
          color: RY
        }
      })
    }

    function fA(YY) {
      let {
        image: rY,
        minWidth: DY
      } = YY;
      const {
        gameNameWithVariation: FY
      } = (0, jD.h)("connectedGame"), AY = rY.endsWith(".jpg");
      return (0, vY.jsx)("img", {
        className: IY()({
          ShopPixelImage: !AY
        }),
        style: {
          width: `${AY?1.6*DY:DY}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,JY.Pb)(FY)}/${rY}`,
        alt: rY,
        draggable: !1
      })
    }

    function jA(YY) {
      let {
        item: rY,
        cost: DY,
        currencyAmounts: FY
      } = YY;
      const AY = !isNaN(DY) && 0 !== DY && zA(FY, rY.currency);
      let IY = null;
      return rY.buyButtonText ? IY = rY.buyButtonText : AY ? (IY = DY, rY.sell && (IY = -1 * DY), IY = IY.toString()) : 0 === DY ? IY = "Free" : rY.isRewardedAd && (IY = "Watch ad"), (0, Kr.H)(IY) || " " === IY ? null : (0, vY.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [AY && (0, vY.jsx)("div", {
          style: {
            color: FY[rY.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, vY.jsx)(wA, {
            iconName: FY[rY.currency].icon
          })
        }), (0, vY.jsx)("div", {
          className: "BuyItemCost",
          children: (0, vY.jsx)(sF.b, {
            text: IY
          })
        })]
      })
    }

    function hA(YY) {
      let {
        item: rY,
        currInput: DY,
        updateInput: AY,
        onSubmit: IY
      } = YY;
      const {
        t: OY
      } = (0, RY.C)(), gY = (0, FY.useRef)(null);
      if ((0, FY.useEffect)((() => {
          const YY = gY.current;
          YY && YY.value !== DY && document.activeElement !== YY && (YY.value = null !== DY && void 0 !== DY ? DY : "")
        }), [DY]), !rY.userInput) return null;
      let aY = rY.userInput;
      if (WY.featureFlags.sanitizeShopInput && "text" === rY.userInput.type && (aY = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === aY.type || "number" === aY.type) {
        var uY, sY;
        console.assert(void 0 !== DY, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(rY)}`);
        const YY = "text" === aY.type && aY.wordCharsOnly;
        return (0, vY.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, vY.jsx)(SY.d, {
            className: "ShopItemUserInputText",
            placeholderText: OY(aY.placeholderText),
            defaultValue: DY,
            domRef: gY,
            onValueChange: (rY, DY) => {
              !0 === YY && (rY = (0, QF.mb)(rY)), gY.current.value = rY, AY(rY)
            },
            onEnter: IY,
            type: aY.type
          }, (null !== (uY = aY.initialValue) && void 0 !== uY ? uY : "") + (null !== (sY = aY.placeholderText) && void 0 !== sY ? sY : ""))
        })
      }
      if ("dropdown" === aY.type) {
        console.assert(void 0 !== DY, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(rY)}`);
        const YY = aY.autoSubmit;
        return (0, vY.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, vY.jsx)(gr.b, {
            options: aY.dropdownOptions.map((YY => (0, gF.e)(YY))),
            value: DY,
            onChange: rY => {
              let {
                value: DY
              } = rY;
              AY(DY), YY && IY(DY)
            }
          })
        })
      }
      return "player" === aY.type ? (0, vY.jsx)(dA, {
        userInput: aY,
        currInput: DY,
        updateInput: AY
      }) : "color" === aY.type ? (0, vY.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, vY.jsx)("input", {
          type: "color",
          value: DY,
          onChange: YY => {
            AY(YY.target.value)
          }
        })
      }) : null
    }

    function dA(YY) {
      let {
        userInput: rY,
        currInput: DY,
        updateInput: FY
      } = YY;
      const AY = (0, jD.h)("players"),
        IY = (0, jD.h)("hiddenPlayerNames"),
        RY = (0, gF.i)(AY.ids, AY.localId, rY);
      return (0, vY.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, vY.jsx)(gr.b, {
          options: RY.map((YY => {
            const {
              name: rY
            } = AY.byId[YY];
            return {
              value: YY,
              label: null === rY ? "" : (0, yF.g)(rY, IY)
            }
          })),
          value: DY,
          onChange: YY => {
            let {
              value: rY
            } = YY;
            FY(rY)
          }
        })
      })
    }

    function JA(YY) {
      let {
        ids: rY
      } = YY;
      return rY
    }

    function MA(YY) {
      let {
        localId: rY
      } = YY;
      return rY
    }

    function wA(YY) {
      let {
        iconName: rY
      } = YY;
      return EY.gameBridge.lookup("isItemName", rY) ? (0, vY.jsx)(uF.c, {
        itemName: rY,
        amount: 1
      }) : (0, vY.jsx)(OY.e, {
        name: rY,
        className: "2x"
      })
    }
    var bA = DY(1619);
    const XA = (0, DY(1392).k)((YY => YY.PadLobbyShortcuts)),
      qA = (0, FY.lazy)((() => Promise.resolve().then((() => DY(4229))).then((YY => ({
        default: YY.Lobbyleaderboard
      })))));

    function pA(YY) {
      let {
        show: rY
      } = YY;
      return rY ? (0, vY.jsxs)(vY.Fragment, {
        children: [(0, vY.jsx)(XA, {}), (0, vY.jsx)(FY.Suspense, {
          fallback: (0, vY.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, vY.jsx)(lY.c, {})
          }),
          children: (0, vY.jsx)(qA, {})
        })]
      }) : null
    }
    var kA = DY(1543),
      GA = DY(2640),
      xA = DY(1699),
      nA = DY(2426),
      PA = DY(1469),
      UA = DY(1441),
      LA = DY(2614),
      tA = DY(2e3),
      YI = DY(2634),
      rI = DY(2183);
    const DI = "storeRecentGiftRecipients",
      FI = new Map;

    function AI() {
      try {
        const YY = Zr.m.getItem(DI);
        return Array.isArray(YY) ? YY.filter((YY => "string" === typeof(null === YY || void 0 === YY ? void 0 : YY.name) && YY.name.length > 0)).map((YY => ({
          name: YY.name,
          cosmetics: YY.cosmetics && "object" === typeof YY.cosmetics ? YY.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function II(YY) {
      var rY;
      const [DY, AY] = (0, FY.useState)(""), [IY, RY] = (0, FY.useState)("search"), [OY, gY] = (0, FY.useState)(null), [aY, vY] = (0, FY.useState)(null), uY = (0, FY.useRef)(null), sY = (0, FY.useRef)(null);
      (0, FY.useEffect)((() => () => {
        uY.current && clearTimeout(uY.current)
      }), []);
      const iY = null !== (rY = null === OY || void 0 === OY ? void 0 : OY.name) && void 0 !== rY ? rY : null;

      function yY() {
        uY.current && (clearTimeout(uY.current), uY.current = null)
      }(0, FY.useEffect)((() => {
        if (null === iY || YY === KY.NULL_USER_CONTEXT) return;
        const rY = iY.toLowerCase();
        if (rY === YY.getPlayerName().toLowerCase()) return void vY({
          name: iY,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const DY = FI.get(rY);
        if (DY) return void vY({
          name: iY,
          result: DY
        });
        let FY = !1;
        return async function(YY, rY) {
          try {
            const DY = await (0, KY.postJsonWithMetricsCookiesAndJsonResponse)(`${HY.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: rY
            }, {
              retries: 1
            }, YY.getMetricsCookies());
            if ("boolean" !== typeof(null === DY || void 0 === DY ? void 0 : DY.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(DY)}`);
            return DY
          } catch (DY) {
            return console.error("Failed to look up gift recipient:", DY), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(YY, iY).catch((YY => (console.error("Gift recipient lookup failed:", YY), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((YY => {
          !0 !== YY.giftRecipientFound && "store:giftRecipientLookupFailed" === YY.giftRecipientError || FI.set(rY, YY), FY || vY({
            name: iY,
            result: YY
          })
        })), () => {
          FY = !0
        }
      }), [iY, YY]);
      const QY = (0, FY.useMemo)((() => {
        const YY = DY.trim();
        if (!YY) return {
          status: "none"
        };
        if (!OY || OY.name !== YY || (null === aY || void 0 === aY ? void 0 : aY.name) !== OY.name) return {
          status: "pending",
          name: YY
        };
        const rY = aY.result;
        return !1 === rY.giftRecipientFound ? {
          status: "error",
          name: OY.name,
          error: rY.giftRecipientError
        } : {
          status: "found",
          name: rY.giftRecipientName,
          ownedPacks: rY.giftRecipientOwnedPacks,
          hasSuperRank: rY.giftRecipientHasSuperRank
        }
      }), [DY, OY, aY]);
      (0, FY.useEffect)((() => {
        "found" === QY.status && "typed" === (null === OY || void 0 === OY ? void 0 : OY.source) && sY.current !== QY.name && (sY.current = QY.name, (0, pY.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [QY, OY]);
      const oY = (null === aY || void 0 === aY ? void 0 : aY.name) === (null === OY || void 0 === OY ? void 0 : OY.name) ? null === aY || void 0 === aY ? void 0 : aY.result : null,
        WY = !0 === (null === oY || void 0 === oY ? void 0 : oY.giftRecipientFound) ? oY.giftRecipientCosmetics : null;
      return {
        query: DY,
        via: IY,
        recipient: QY,
        recipientCosmetics: WY,
        type: function(YY) {
          AY(YY), RY("search"), yY();
          const rY = YY.trim();
          rY ? uY.current = setTimeout((() => {
            gY({
              name: rY,
              source: "typed"
            })
          }), 400) : gY(null)
        },
        choose: function(YY, rY) {
          yY(), AY(YY), RY("typed" === rY ? "search" : "prefilled" === rY ? "prefilled" : "suggestion"), gY({
            name: YY,
            source: rY
          }), "typed" !== rY && "prefilled" !== rY && (0, pY.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: rY
          })
        },
        clear: function() {
          yY(), AY(""), RY("search"), gY(null)
        },
        recordGift: function(YY, rY) {
          ! function(YY) {
            FI.delete(YY.toLowerCase())
          }(YY), vY((DY => {
            if (!DY || DY.name.toLowerCase() !== YY.toLowerCase() || !0 !== DY.result.giftRecipientFound || "superRank" === rY) return DY;
            const FY = DY.result.giftRecipientOwnedPacks;
            return {
              ...DY,
              result: {
                ...DY.result,
                giftRecipientOwnedPacks: FY.includes(rY) ? FY : [...FY, rY]
              }
            }
          }))
        }
      }
    }
    var RI = DY(2175),
      OI = DY(4231),
      gI = DY(275),
      aI = DY(2707),
      vI = DY(2646);
    const uI = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var sI = DY(2123),
      iI = DY(605),
      yI = DY(1623),
      QI = DY(2219),
      oI = DY(2353);

    function WI(YY) {
      let {
        cosmetics: rY
      } = YY;
      return (0, vY.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, vY.jsx)(QI.c, {
          cosmetics: rY
        })
      })
    }

    function EI(YY, rY) {
      var DY, FY;
      const AY = null !== (DY = YY.friend) && void 0 !== DY ? DY : {
        isError: !1,
        name: YY.name,
        ranks: [],
        cosmetics: null !== (FY = YY.cosmetics) && void 0 !== FY ? FY : {},
        nameColour: iI.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return rY ? {
        ...AY,
        cosmetics: rY
      } : AY
    }

    function mI(YY) {
      let {
        recipient: rY
      } = YY;
      return "pending" === rY.status ? (0, vY.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, vY.jsx)(lY.c, {})
      }) : "found" === rY.status ? (0, vY.jsx)(OY.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function VI(YY) {
      var rY;
      let {
        selfName: DY,
        giftRecipient: AY,
        suggestionsVersion: gY,
        pulseSignal: aY,
        disabled: uY
      } = YY;
      const {
        t: sY
      } = (0, RY.C)(), iY = (0, yI.j)(), yY = (0, FY.useRef)(null), QY = (0, FY.useRef)(null), {
        query: EY,
        via: mY,
        recipient: VY,
        recipientCosmetics: lY
      } = AY, TY = (0, rI.o)(EY), eY = (0, FY.useMemo)((() => {
        const YY = WY.featureFlags.useSocialFeatures ? iY.friends.filter((YY => !YY.isError)) : [];
        return (0, rI.l)({
          onlineFriends: (0, yI.e)(YY),
          recentRecipients: AI(),
          friends: YY,
          selfName: DY,
          max: 8
        })
      }), [iY.friends, DY, gY]), NY = EY.trim().toLowerCase(), BY = "search" !== mY && NY ? eY.find((YY => YY.name.toLowerCase() === NY)) : void 0, cY = BY && "prefilled" === mY ? [BY, ...eY.filter((YY => YY !== BY))] : eY, KY = "" !== NY && !BY, HY = KY ? EY : "", zY = cY.length > 0;
      (0, FY.useEffect)((() => {
        yY.current && yY.current.value !== HY && (yY.current.value = HY)
      }), [HY]), (0, FY.useEffect)((() => {
        yY.current && (yY.current.disabled = uY)
      }), [uY, aY]);
      const ZY = (0, FY.useRef)(0);

      function fY() {
        "self" !== TY && (0, pY.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), AY.clear()
      }

      function jY(YY) {
        var rY, DY;
        if (uY) return;
        if (" " === YY.key || "Enter" === YY.key) return YY.preventDefault(), void YY.currentTarget.click();
        const FY = Array.from(null !== (rY = null === (DY = QY.current) || void 0 === DY ? void 0 : DY.querySelectorAll("[role=radio]")) && void 0 !== rY ? rY : []),
          AY = FY.indexOf(YY.currentTarget);
        let IY;
        "ArrowRight" === YY.key || "ArrowDown" === YY.key ? IY = FY[(AY + 1) % FY.length] : "ArrowLeft" === YY.key || "ArrowUp" === YY.key ? IY = FY[(AY - 1 + FY.length) % FY.length] : "Home" === YY.key ? IY = FY[0] : "End" === YY.key && (IY = FY[FY.length - 1]), IY && (YY.preventDefault(), IY.focus(), IY.click())
      }(0, FY.useEffect)((() => {
        var YY;
        aY > ZY.current && !uY && (ZY.current = aY, null === (YY = yY.current) || void 0 === YY || YY.focus())
      }), [aY, uY]);
      const hY = "self" === TY,
        dY = null !== (rY = null === BY || void 0 === BY ? void 0 : BY.name) && void 0 !== rY ? rY : null,
        JY = "error" === VY.status ? VY.error : null,
        MY = "store:giftRecipientLookupFailed" === JY;
      return (0, vY.jsxs)("div", {
        className: IY()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: uY,
          StoreRecipientStripNoChips: !zY
        }),
        children: [(0, vY.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: sY("store:buyingFor")
        }), (0, vY.jsxs)("div", {
          ref: QY,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": sY("store:whoIsItFor"),
          children: [(0, vY.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": hY,
            tabIndex: uY || !hY && null !== dY ? -1 : 0,
            className: IY()("StoreRecipientMe", {
              StoreRecipientChecked: hY
            }),
            onClick: () => {
              uY || fY()
            },
            onKeyDown: jY,
            children: [(0, vY.jsx)(OY.e, {
              name: "user"
            }), " ", sY("store:me")]
          }), zY && (0, vY.jsx)("div", {
            className: "StoreRecipientChips",
            children: cY.map((YY => {
              const rY = YY === BY;
              return (0, vY.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": rY,
                tabIndex: !uY && rY ? 0 : -1,
                title: YY.name,
                className: IY()("StoreRecipientChip", {
                  StoreRecipientChecked: rY
                }),
                onClick: () => {
                  uY || function(YY) {
                    "gift" !== TY && (0, pY.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), AY.choose(YY.name, YY.kind)
                  }(YY)
                },
                onKeyDown: jY,
                children: (0, vY.jsx)(oI.g, {
                  playerSocialPreview: EI(YY, rY ? lY : null),
                  opensProfileCard: !1,
                  isFriend: null !== YY.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== YY.friend,
                  status: null === YY.friend ? null : void 0,
                  trailing: rY ? (0, vY.jsx)(mI, {
                    recipient: VY
                  }) : void 0
                })
              }, YY.name)
            }))
          })]
        }), (0, vY.jsxs)("div", {
          className: IY()("StoreRecipientSearch", {
            StoreRecipientChecked: KY,
            StoreRecipientSearchPulse: aY > 0 && !KY,
            StoreRecipientSearchError: null !== JY && !MY
          }),
          onClick: () => {
            var YY;
            null === (YY = yY.current) || void 0 === YY || YY.focus()
          },
          children: [KY && "found" === VY.status && lY && (0, vY.jsx)(WI, {
            cosmetics: lY
          }), !(KY && "found" === VY.status && lY) && (0, vY.jsx)(OY.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, vY.jsx)(SY.d, {
            className: "StoreRecipientSearchInput",
            domRef: yY,
            placeholderText: sY("store:searchName"),
            defaultValue: HY,
            maxLength: CY.k,
            onValueChange: function(YY) {
              "gift" !== TY && YY.trim() && (0, pY.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), AY.type(YY)
            },
            onEnter: () => {
              var YY;
              const rY = null === (YY = yY.current) || void 0 === YY ? void 0 : YY.value.trim();
              rY && AY.choose(rY, "typed")
            },
            blurOnEnter: !0
          }), KY && (0, vY.jsx)(mI, {
            recipient: VY
          }), KY && (0, vY.jsx)("div", {
            ...(0, oY.P)({
              disabled: uY
            }),
            "aria-label": sY("store:clearRecipient"),
            title: sY("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: YY => {
              YY.stopPropagation(), uY || fY()
            },
            children: (0, vY.jsx)(OY.e, {
              name: "xmark"
            })
          })]
        }, aY), JY && (0, vY.jsx)("div", {
          className: IY()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: MY
          }),
          role: "status",
          children: sY(JY)
        })]
      })
    }
    var SI = DY(2192),
      lI = DY(2111),
      TI = DY(3175),
      eI = DY(2711),
      NI = DY(2137);
    const BI = DY.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function cI() {
      (0, NI.f)(BI, {
        lowPriority: !1
      })
    }

    function KI(YY) {
      let {
        onBack: rY,
        cta: DY,
        recipient: AY,
        afterCta: IY
      } = YY;
      const {
        t: gY
      } = (0, RY.C)(), [aY, uY] = (0, FY.useState)("starting"), sY = (0, FY.useRef)(null), iY = (0, Wr.b)(), yY = (0, FY.useRef)(null), QY = (0, FY.useCallback)((() => {
        const YY = sY.current;
        null !== YY.error && YY.load();
        const rY = YY.play();
        yY.current = rY, rY.catch((YY => {
          (0, TI.e)("Failed to play Super Rank video", YY), iY.current && yY.current === rY && uY("failed")
        }))
      }), [iY]);
      return (0, FY.useEffect)((() => {
        const YY = sY.current;
        let rY;

        function DY() {
          clearTimeout(rY), rY = setTimeout(QY, 3e3)
        }
        return QY(), YY.addEventListener("ended", DY), () => {
          clearTimeout(rY), YY.removeEventListener("ended", DY)
        }
      }), [QY]), (0, vY.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, vY.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, vY.jsx)(oY.b, {
            className: "StoreDetailBackButton",
            onClick: rY,
            padBack: !0,
            children: gY("general:back")
          }), (0, vY.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, vY.jsx)(OY.e, {
              name: "bolt"
            }), " ", gY("homePage:superRank")]
          }), AY]
        }), (0, vY.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, vY.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, vY.jsx)("video", {
              ref: sY,
              src: `${HY.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: BI,
              muted: !0,
              playsInline: !0,
              controls: "playing" === aY,
              onPlaying: () => {
                uY("playing")
              },
              onError: () => {
                uY("failed")
              }
            }), ("failed" === aY || "loading" === aY) && (0, vY.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, vY.jsx)(oY.f, {
                ariaLabel: gY("general:play"),
                loading: "loading" === aY,
                onClick: () => {
                  uY("loading"), QY()
                },
                touchPressOn: "pointerup",
                children: (0, vY.jsx)(OY.e, {
                  name: "play"
                })
              })
            })]
          }), (0, vY.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, vY.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, vY.jsx)(eI.e, {})
            }), (0, vY.jsxs)("div", {
              className: "StoreTileActions",
              children: [DY, IY]
            })]
          })]
        })]
      })
    }
    var HI = DY(2366),
      zI = DY(3131),
      ZI = DY(2704);
    const CI = [iI.v.yellow, iI.v.green, iI.v.aqua, iI.v.blue, iI.v.purple, iI.v.red];

    function fI(YY) {
      return "needsRecipient" === YY || "lookingUp" === YY || "gift" === YY || "recipientOwns" === YY || "recipientSharesOwned" === YY
    }

    function jI(YY) {
      const {
        onKeyDown: rY,
        ...DY
      } = (0, oY.P)();
      return {
        ...DY,
        "aria-label": YY,
        onKeyDown: YY => {
          YY.target === YY.currentTarget && (null === rY || void 0 === rY || rY(YY))
        }
      }
    }

    function hI(YY) {
      let {
        text: rY
      } = YY;
      return (0, vY.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(rY).map(((YY, rY) => (0, vY.jsx)("span", {
          style: {
            color: CI[rY % CI.length]
          },
          children: YY
        }, rY)))
      })
    }
    const dI = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned"
    };

    function JI(YY) {
      let {
        state: rY,
        item: DY,
        price: FY,
        busy: AY,
        highlight: gY = !1,
        onAct: aY,
        onNeedRecipient: uY,
        onLogin: sY = tA.c
      } = YY;
      const {
        t: iY
      } = (0, RY.C)(), yY = "superRank" === DY ? jY.l.product.days : null, QY = YY => null === yY ? iY(YY ? "general:gift" : "general:buy") : iY(YY ? "store:giftDays" : "store:buyDays", {
        days: yY
      }), WY = (YY, rY) => (0, vY.jsxs)(vY.Fragment, {
        children: [rY && (0, vY.jsx)("span", {
          className: "StoreCtaIcon",
          children: rY
        }), null === YY && (0, vY.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== YY && (0, vY.jsx)("span", {
          className: "StoreCtaLabel",
          title: YY,
          children: YY
        }), (0, vY.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, vY.jsx)(lI.d, {
            amount: FY
          })]
        })]
      });
      let EY;
      switch (rY) {
        case "pending":
          EY = (0, vY.jsx)(oY.n, {
            className: "StoreCtaButton",
            disabled: !0,
            children: WY(null)
          });
          break;
        case "login":
          EY = (0, vY.jsx)(oY.n, {
            className: "StoreCtaButton",
            onClick: sY,
            children: WY(iY("store:logIn"))
          });
          break;
        case "owned":
          EY = (0, vY.jsx)(oY.j, {
            className: "StoreCtaButton",
            onClick: () => {
              eY.b.set({
                openEverythingMenuName: wD.t.CUSTOMISATION
              })
            },
            children: (0, vY.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, vY.jsx)(OY.e, {
                name: "shirt"
              }), " ", iY("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
          EY = (0, vY.jsx)(oY.n, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, vY.jsx)("span", {
              className: "StoreCtaLabel",
              children: iY(dI[rY])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          EY = (0, vY.jsx)(oY.n, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === rY || null === FY,
            loading: "lookingUp" === rY || AY,
            onClick: aY,
            analyticsClick: {
              id: "store.gift",
              value: DY
            },
            children: WY(QY(!0), rI.d)
          });
          break;
        case "buy":
        case "recharge":
          EY = (0, vY.jsx)(oY.n, {
            className: "StoreCtaButton",
            loading: AY,
            disabled: null === FY,
            onClick: aY,
            analyticsClick: {
              id: "store.buy",
              value: DY
            },
            children: WY(QY(!1))
          })
      }
      return (0, vY.jsx)("div", {
        className: IY()("StoreCta", {
          StoreCtaHighlight: gY
        }),
        onClick: YY => {
          YY.stopPropagation(), "needsRecipient" === rY && uY()
        },
        children: EY
      })
    }

    function MI() {
      const {
        t: YY
      } = (0, RY.C)();
      return (0, vY.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, vY.jsxs)("li", {
          children: [(0, vY.jsx)(OY.e, {
            name: "check"
          }), (0, vY.jsx)(hI, {
            text: YY("store:colourfulNames")
          })]
        }), (0, vY.jsxs)("li", {
          children: [(0, vY.jsx)(OY.e, {
            name: "check"
          }), YY("store:perkCapes")]
        }), (0, vY.jsxs)("li", {
          children: [(0, vY.jsx)(OY.e, {
            name: "check"
          }), YY("store:perkNoAdverts")]
        }), (0, vY.jsxs)("li", {
          children: [(0, vY.jsx)(OY.e, {
            name: "check"
          }), YY("store:perkFriends", {
            count: (0, XY.e)(["super"])
          })]
        })]
      })
    }

    function wI(YY) {
      let {
        daysLeft: rY,
        totalDays: DY,
        urgent: FY
      } = YY;
      const {
        t: AY
      } = (0, RY.C)(), OY = DY > 0 ? Math.min(1, Math.max(.03, rY / DY)) : 1;
      return (0, vY.jsxs)("div", {
        className: IY()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: FY
        }),
        children: [(0, vY.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === rY ? AY("store:oneDayLeft") : AY("store:daysLeft", {
            days: rY
          })
        }), (0, vY.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, vY.jsx)("i", {
            style: {
              width: 100 * OY + "%"
            }
          })
        })]
      })
    }

    function bI(YY) {
      let {
        state: rY,
        urgent: DY,
        daysLeft: FY,
        totalDays: AY,
        recipientHasSuperRank: gY,
        busy: aY,
        highlight: uY,
        onOpen: sY,
        onAct: iY,
        onNeedRecipient: yY,
        onLogin: QY
      } = YY;
      const {
        t: oY
      } = (0, RY.C)(), WY = fI(rY), {
        days: EY
      } = jY.l.product, mY = oY("store:recipientHasSuperRank", {
        giftDays: EY
      });
      return (0, vY.jsxs)("div", {
        className: IY()("StoreTile StoreSuperRankTile", {
          StoreTileGift: WY,
          StoreSuperRankTileUrgent: "recharge" === rY && DY,
          StoreSuperRankTileWithChip: gY,
          StoreSuperRankTileGiftReady: "gift" === rY
        }),
        ...jI(oY("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: cI,
        onFocus: cI,
        onClick: sY,
        children: [(0, vY.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${sI.d})`
          }
        }), WY && (0, vY.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, vY.jsxs)("div", {
          className: "StoreTileContent",
          children: [gY && (0, vY.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: mY,
            children: mY
          }), (0, vY.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, vY.jsx)(OY.e, {
              name: "bolt"
            }), " ", oY("homePage:superRank")]
          }), WY && (0, vY.jsx)("div", {
            className: "StoreTilePitch",
            children: oY("store:giftPitch", {
              days: EY
            })
          }), "recharge" === rY && (0, vY.jsx)(wI, {
            daysLeft: FY,
            totalDays: AY,
            urgent: DY
          }), (0, vY.jsx)(MI, {}), (0, vY.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, vY.jsx)(JI, {
              state: rY,
              item: "superRank",
              price: jY.l.price,
              busy: aY,
              highlight: uY,
              onAct: iY,
              onNeedRecipient: yY,
              onLogin: QY
            }), "needsRecipient" === rY && (0, vY.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: oY("store:pickRecipientFirst")
            }), "recharge" === rY && DY && (0, vY.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === FY ? oY("store:endsInOneDay") : oY("store:endsInDays", {
                days: FY
              })
            })]
          })]
        })]
      })
    }
    const XI = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function qI(YY) {
      var rY;
      let {
        pack: DY,
        state: AY,
        busy: gY,
        onOpen: aY,
        onAct: uY,
        onNeedRecipient: sY,
        onLogin: iY
      } = YY;
      const {
        t: yY
      } = (0, RY.C)(), QY = kA.b[DY], oY = LA.k[DY], WY = (0, sI.m)(DY), EY = (0, FY.useRef)(null);
      (0, ZI.g)(DY, EY);
      const mY = fI(AY),
        VY = null !== (rY = QY.displayName) && void 0 !== rY ? rY : DY,
        SY = (0, zI.b)((() => {
          (0, HI.d)();
          const YY = (0, ZI.e)(DY);
          void 0 !== YY && (0, NI.f)((0, ZI.c)(YY))
        })),
        [lY] = (0, FY.useState)(aI.e);
      return (0, vY.jsxs)("div", {
        className: IY()("StoreTile StorePackTile", QY.tier && XI[QY.tier], {
          StorePackTileOwned: "owned" === AY,
          StorePackTileRecipientOwns: "recipientOwns" === AY,
          StoreTileGift: mY
        }),
        ...jI(VY),
        ref: EY,
        "data-store-item": DY,
        onClick: aY,
        onPointerMove: YY => {
          "mouse" !== YY.pointerType || 0 === YY.movementX && 0 === YY.movementY || lY || SY.start()
        },
        onPointerLeave: SY.cancel,
        children: [oY && (0, vY.jsx)(oY, {}), (0, vY.jsx)("div", {
          className: "StorePackCharacters",
          children: WY.map((YY => (0, vY.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,sI.g)(YY)})`
            }
          }, YY)))
        }), (0, vY.jsx)("div", {
          className: "StoreTileScrim"
        }), mY && (0, vY.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, vY.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, vY.jsx)("div", {
            className: "StoreTileTitle",
            children: VY
          }), (0, vY.jsxs)("div", {
            className: "StoreTileMeta",
            children: [yY("store:itemCount", {
              count: (0, SI.d)(DY)
            }), "owned" === AY && (0, vY.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, vY.jsx)(OY.e, {
                name: "check"
              }), " ", yY("general:owned")]
            })]
          }), (0, vY.jsx)(JI, {
            state: AY,
            item: DY,
            price: (0, jY.f)(DY),
            busy: gY,
            onAct: uY,
            onNeedRecipient: sY,
            onLogin: iY
          })]
        })]
      })
    }
    var pI = DY(2682),
      kI = DY(1343);
    const GI = {
      standard: "StoreCharacterCardStandard",
      enhanced: "StoreCharacterCardEnhanced",
      premium: "StoreCharacterCardPremium"
    };

    function xI(YY) {
      var rY, DY;
      let {
        tile: AY,
        busy: gY,
        highlight: aY,
        onAct: uY,
        onNeedRecipient: sY,
        onLogin: iY
      } = YY;
      const {
        t: yY
      } = (0, RY.C)(), {
        pack: QY,
        state: oY
      } = AY, WY = kA.b[QY], EY = (0, kA.c)(QY), mY = LA.k[(0, sI.i)(QY)], VY = null !== (rY = WY.tier) && void 0 !== rY ? rY : "standard", SY = (0, FY.useRef)(null);
      return (0, kI.b)(SY, "standard" !== VY), (0, vY.jsxs)("div", {
        ref: SY,
        className: IY()("StoreCharacterCard", GI[VY], {
          StoreCharacterCardOwned: "owned" === oY || "recipientOwns" === oY,
          StoreCharacterCardGift: fI(oY)
        }),
        "data-store-item": QY,
        children: [(0, vY.jsxs)("div", {
          className: "StoreCharacterArt",
          children: [mY && (0, vY.jsx)(mY, {
            simple: !0
          }), (0, vY.jsx)("div", {
            className: "StoreCharacterHalo"
          }), (0, vY.jsx)("div", {
            className: "StoreCharacterFigure",
            style: {
              backgroundImage: `url(${(0,sI.g)(EY)})`
            }
          }), "owned" === oY && (0, vY.jsx)("span", {
            className: "StoreCharacterOwned",
            title: yY("general:owned"),
            "aria-label": yY("general:owned"),
            children: (0, vY.jsx)(OY.e, {
              name: "check"
            })
          })]
        }), (0, vY.jsxs)("div", {
          className: "StoreCharacterPlate",
          children: [(0, vY.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (DY = WY.displayName) && void 0 !== DY ? DY : QY
          }), (0, vY.jsx)(JI, {
            state: oY,
            item: QY,
            price: (0, jY.f)(QY),
            busy: gY,
            highlight: aY,
            onAct: uY,
            onNeedRecipient: sY,
            onLogin: iY
          })]
        })]
      })
    }

    function nI(YY) {
      let {
        tiles: rY,
        busy: DY,
        highlightItem: FY,
        onAct: AY,
        onNeedRecipient: IY,
        onLogin: RY
      } = YY;
      return (0, vY.jsx)("div", {
        className: "StoreCharacterGrid",
        children: rY.map((YY => (0, vY.jsx)(xI, {
          tile: YY,
          busy: DY,
          highlight: FY === YY.pack,
          onAct: () => {
            AY(YY.pack)
          },
          onNeedRecipient: IY,
          onLogin: () => {
            RY(YY.pack)
          }
        }, YY.pack)))
      })
    }
    var PI = DY(8783);

    function UI(YY) {
      let {
        title: rY
      } = YY;
      return (0, vY.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, vY.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: rY
        })
      })
    }

    function LI(YY) {
      let {
        mountAtOnce: rY,
        children: DY
      } = YY;
      const AY = (0, FY.useRef)(null),
        [IY, RY] = (0, FY.useState)(rY),
        OY = (0, PI.c)();
      return (0, FY.useLayoutEffect)((() => {
        const YY = AY.current;
        YY && YY.getBoundingClientRect().top < YY.parentElement.getBoundingClientRect().bottom && RY(!0)
      }), []), IY || OY ? (0, vY.jsx)(vY.Fragment, {
        children: DY
      }) : (0, vY.jsx)("div", {
        ref: AY
      })
    }

    function tI(YY) {
      let {
        layout: rY,
        mountAtOnce: DY,
        bundleGift: FY,
        superRankDaysLeft: AY,
        superRankTotalDays: IY,
        busy: OY,
        highlightItem: gY,
        onOpen: aY,
        onAct: uY,
        onNeedRecipient: sY,
        onLogin: iY
      } = YY;
      const {
        t: yY
      } = (0, RY.C)(), QY = rY.packs.filter((YY => void 0 === (0, kA.c)(YY.pack))), oY = rY.packs.filter((YY => void 0 !== (0, kA.c)(YY.pack)));
      return (0, vY.jsxs)(vY.Fragment, {
        children: [(0, vY.jsx)(pI.d, {
          className: "StoreSuperGems",
          gift: FY
        }), (0, vY.jsx)(UI, {
          title: yY("store:rank")
        }), (0, vY.jsx)(bI, {
          state: rY.superRank.state,
          urgent: rY.superRank.urgent,
          daysLeft: AY,
          totalDays: IY,
          recipientHasSuperRank: rY.recipientHasSuperRank,
          busy: OY,
          highlight: "superRank" === gY,
          onOpen: () => {
            aY("superRank")
          },
          onAct: () => {
            uY("superRank")
          },
          onNeedRecipient: sY,
          onLogin: () => {
            iY("superRank")
          }
        }), (0, vY.jsxs)(LI, {
          mountAtOnce: DY,
          children: [(0, vY.jsx)(UI, {
            title: yY("store:bundles")
          }), (0, vY.jsx)("div", {
            className: "StorePackGrid",
            children: QY.map((YY => (0, vY.jsx)(qI, {
              pack: YY.pack,
              state: YY.state,
              busy: OY,
              onOpen: () => {
                aY(YY.pack)
              },
              onAct: () => {
                uY(YY.pack)
              },
              onNeedRecipient: sY,
              onLogin: () => {
                iY(YY.pack)
              }
            }, YY.pack)))
          }), (0, vY.jsxs)(LI, {
            mountAtOnce: DY,
            children: [(0, vY.jsx)(UI, {
              title: yY("store:characters")
            }), (0, vY.jsx)(nI, {
              tiles: oY,
              busy: OY,
              highlightItem: gY,
              onAct: uY,
              onNeedRecipient: sY,
              onLogin: iY
            })]
          })]
        })]
      })
    }

    function YR(YY) {
      let {
        state: rY,
        mode: DY,
        giftName: FY,
        busy: AY,
        highlight: IY,
        purchaseError: OY,
        onBack: gY,
        onChooseRecipient: aY,
        onAct: uY,
        onLogin: sY
      } = YY;
      const {
        t: iY
      } = (0, RY.C)();
      return (0, vY.jsx)(KI, {
        onBack: gY,
        recipient: "gift" === DY && (0, vY.jsxs)(vY.Fragment, {
          children: [FY && (0, vY.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: iY("store:giftFor", {
              name: FY
            }),
            children: [rI.d, " ", iY("store:giftFor", {
              name: FY
            })]
          }), !FY && (0, vY.jsxs)("div", {
            ...(0, oY.P)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: aY,
            children: [rI.d, " ", iY("store:chooseRecipient")]
          })]
        }),
        cta: (0, vY.jsx)(JI, {
          state: rY,
          item: "superRank",
          price: jY.l.price,
          busy: AY,
          highlight: IY,
          onAct: uY,
          onNeedRecipient: aY,
          onLogin: sY
        }),
        afterCta: (0, vY.jsx)(vY.Fragment, {
          children: OY && (0, vY.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: iY(OY)
          })
        })
      })
    }
    const rR = {
        kind: "board"
      },
      DR = [...kA.j, ...kA.h];
    let FR = !1;

    function AR(YY) {
      return "superRank" === YY.kind ? "superRank" : "pack" === YY.kind ? YY.pack : null
    }

    function IR(YY) {
      return "found" === YY.status || "error" === YY.status && "store:giftRecipientLookupFailed" === YY.error ? YY.name : null
    }(0, MY.o)(GA.prefetchBillingOfferings);
    const RR = (0, FY.memo)((function(YY) {
      var rY, AY;
      let {
        show: OY
      } = YY;
      const {
        t: gY
      } = (0, RY.C)(), {
        userContext: aY
      } = (0, iY.d)(), uY = aY !== KY.NULL_USER_CONTEXT, sY = II(aY), [yY, oY] = (0, QY.c)(), {
        page: WY,
        urlMode: EY,
        goTo: mY
      } = (0, RI.e)(), VY = AR(WY), {
        openEverythingMenuName: SY,
        gameState: lY
      } = (0, eY.j)(["openEverythingMenuName", "gameState"]), TY = null !== SY;
      ! function(YY, rY) {
        const [AY] = (0, FY.useState)(aI.e), [IY, RY] = (0, FY.useState)(!1);
        AY && rY && !IY && RY(!0);
        const OY = (0, kD.p)(),
          gY = AY && IY && YY && !OY;
        (0, FY.useEffect)((() => {
          if (!gY) return;
          let YY = null,
            rY = null,
            FY = null;
          const AY = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, vI.c)().purchaseUnderWay,
            IY = () => {
              var DY;
              null === (DY = FY) || void 0 === DY || DY(), FY = null, null !== YY && (clearTimeout(YY), YY = null), null !== rY && (clearTimeout(rY), rY = null)
            },
            RY = () => {
              (0, OI.p)(!1), (0, OI.m)(!1), IY(), YY = setTimeout((() => {
                YY = null, FY = (0, gI.b)((() => {
                  FY = null, AY() ? RY() : ((0, OI.p)(!0), rY = setTimeout((() => {
                    rY = null, FY = (0, gI.b)((() => {
                      FY = null, AY() ? RY() : (0, OI.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => DY(4229))).then((YY => {
                    YY.startBackgroundGameSetup()
                  }), (YY => {
                    console.warn("Background game setup: its chunk failed to load", YY)
                  })))
                }))
              }), 2e3)
            };
          for (const DY of uI) window.addEventListener(DY, RY, {
            capture: !0,
            passive: !0
          });
          return RY(), () => {
            for (const YY of uI) window.removeEventListener(YY, RY, {
              capture: !0
            });
            IY(), (0, OI.p)(!1), (0, OI.m)(!1)
          }
        }), [gY])
      }(OY && TY, "pack" === WY.kind);
      const NY = "landingPage" === lY;
      (0, FY.useEffect)((() => {
        TY && (0, GA.prefetchBillingOfferings)()
      }), [TY]), (0, FY.useEffect)((() => {
        TY && !OY && NY && (0, sI.p)()
      }), [TY, OY, NY]);
      const [BY, cY] = (0, FY.useState)(0), [HY, zY] = (0, FY.useState)(null), [ZY, CY] = (0, FY.useState)(null), [fY, hY] = (0, FY.useState)(null), [dY, bY] = (0, FY.useState)(null), XY = (0, FY.useRef)(null), qY = (0, FY.useRef)(null), kY = (0, FY.useRef)(!1), GY = (0, MY.v)(), xY = (0, FY.useRef)(0), nY = (0, FY.useRef)(!1);

      function PY() {
        cY((YY => YY + 1))
      }(0, FY.useEffect)((() => {
        if (OY) {
          if (FR = !0, GY && GY.seq !== xY.current) {
            var YY, rY;
            xY.current = GY.seq;
            const DY = (0, MY.d)(GY);
            EY || mY(DY), bY(GY.highlight && null !== (YY = null !== (rY = AR(DY)) && void 0 !== rY ? rY : GY.openItem) && void 0 !== YY ? YY : null), CY(null), "gift" === GY.mode && GY.giftRecipientName ? sY.choose(GY.giftRecipientName, "prefilled") : "current" !== GY.mode && sY.clear(), "gift" !== GY.mode || GY.giftRecipientName || PY(), (0, pY.reportAnalyticsClick)({
              id: "store.open",
              value: GY.source
            })
          } else nY.current || (0, pY.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          nY.current = !0
        } else nY.current = !1
      }), [OY, GY]), (0, FY.useEffect)((() => {
        if (!dY) return;
        const YY = setTimeout((() => {
          bY(null)
        }), 4e3);
        return () => {
          clearTimeout(YY)
        }
      }), [dY]), (0, FY.useEffect)((() => {
        const YY = XY.current;
        var rY;
        if (OY && YY) {
          if (VY) qY.current = VY, null === (rY = YY.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === rY || rY.focus();
          else if (qY.current) {
            var DY;
            null === (DY = YY.querySelector(`[data-store-item="${qY.current}"]`)) || void 0 === DY || DY.focus(), qY.current = null
          }
        } else qY.current = null
      }), [VY, OY]), (0, FY.useEffect)((() => {
        CY(null)
      }), [sY.query]), (0, FY.useEffect)((() => {
        if (!fY) return;
        const YY = setTimeout((() => {
          hY(null)
        }), 8e3);
        return () => {
          clearTimeout(YY)
        }
      }), [fY]);
      const UY = aY.superRankInfo,
        LY = UY ? (0, JY.jc)(UY) : 0,
        tY = (0, rI.j)(LY),
        Yr = LY > 0,
        rr = aY.isLoggedIn() || (0, wY.guestsMayBuy)(),
        Dr = aY.getOwnedCosmeticPacks(),
        Fr = (0, rI.o)(sY.query),
        Ar = (0, rI.f)({
          mode: Fr,
          loggedIn: uY ? rr : null,
          hasSuperRank: Yr,
          superRankDaysLeft: tY,
          ownedPacks: Dr,
          packs: DR,
          recipient: sY.recipient
        });
      (0, FY.useEffect)((() => {
        if (!rr || !OY) return;
        const YY = (0, MY.s)();
        var rY;
        YY && ("superRank" === (rY = YY.item) || DR.includes(rY)) && ((0, pY.reportAnalyticsClick)({
          id: "store.login_resume",
          value: YY.item
        }), (0, MY.f)({
          mode: YY.mode,
          source: "loginResume",
          giftRecipientName: "gift" === YY.mode && YY.recipient ? YY.recipient : void 0,
          openItem: YY.item,
          highlight: !0
        }))
      }), [rr, OY]);
      const Ir = (0, rI.r)({
        hasSuperRank: rr && Yr,
        superRankDaysLeft: tY,
        openedThisSession: FR || OY
      });
      if ((0, FY.useEffect)((() => {
          (0, MY.r)(Ir)
        }), [Ir]), !OY || !(0, wY.purchasesAllowed)()) return null;
      const Rr = oY > yY && yY <= 700,
        Or = !Rr && oY <= 420,
        gr = "gift" === Fr ? IR(sY.recipient) : null,
        ar = null !== HY;

      function vr(YY) {
        (0, MY.l)({
          item: YY,
          mode: Fr,
          recipient: "gift" === Fr ? sY.query.trim() : ""
        }), (0, tA.c)()
      }

      function ur(YY, rY) {
        (0, pY.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${rY?"gift":"self"}:${YY}`
        }), rY && (sY.recordGift(rY.name, YY), sr(rY))
      }

      function sr(YY) {
        ! function(YY) {
          try {
            Zr.m.setItem(DI, (0, rI.w)(AI(), YY))
          } catch {}
        }({
          name: YY.name,
          cosmetics: YY.cosmetics
        }), mY(rR), hY((rY => {
          var DY;
          return {
            name: YY.name,
            seq: (null !== (DY = null === rY || void 0 === rY ? void 0 : rY.seq) && void 0 !== DY ? DY : 0) + 1
          }
        }))
      }
      async function ir(YY) {
        var rY, DY;
        if (kY.current) return;
        if (!rr) return void vr(YY);
        CY(null), bY(null);
        const FY = "gift" === Fr ? {
          name: IR(sY.recipient),
          cosmetics: sY.recipientCosmetics
        } : null;
        if (FY && !FY.name) return void PY();
        const AY = "superRank" === YY ? jY.l.id : (0, jY.c)(YY);
        kY.current = !0;
        const IY = await (0, YI.e)(AY, null !== (rY = null === FY || void 0 === FY ? void 0 : FY.name) && void 0 !== rY ? rY : null);
        if (kY.current = !1, !IY) return;
        zY(YY);
        const RY = await nA.b.purchase(AY, null !== (DY = null === FY || void 0 === FY ? void 0 : FY.name) && void 0 !== DY ? DY : null);
        zY(null), RY ? CY(RY) : (ur(YY, FY), FY || (await (0, PA.flushClientAnalyticsEvents)(), (0, xA.refreshWithoutConfirmation)("superRank" === YY ? "/super-rank-welcome" : `/pack-welcome/${YY}`)))
      }
      const yr = IY()("Store", {
        StoreGift: "gift" === Fr,
        StorePortrait: Rr,
        StoreCompact: Or
      });
      if ("pack" === WY.kind) {
        const YY = WY.pack,
          rY = Ar.packs.find((rY => rY.pack === YY));
        return (0, vY.jsx)("div", {
          ref: XY,
          className: "CosmeticShopContainer",
          children: (0, vY.jsx)(LA.f, {
            pack: YY,
            onBack: () => {
              mY(rR)
            },
            onPurchased: rY => {
              ur(YY, rY ? {
                name: rY,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Fr && gr && rY && (0, vY.jsxs)(vY.Fragment, {
              children: [(0, vY.jsx)(JI, {
                state: rY.state,
                item: YY,
                price: (Qr = YY, "superRank" === Qr ? jY.l.price : (0, jY.f)(Qr)),
                busy: ar,
                onAct: () => {
                  ir(YY)
                },
                onNeedRecipient: () => {
                  mY(rR), PY()
                }
              }), ZY && (0, vY.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: gY(ZY)
              })]
            }),
            ownedPacks: Dr,
            startAsGift: "gift" === Fr,
            initialGiftRecipient: "gift" === Fr ? null !== gr && void 0 !== gr ? gr : sY.query.trim() : "",
            highlightCta: dY === YY
          }, YY)
        })
      }
      var Qr;
      return "superRank" === WY.kind ? (0, vY.jsx)("div", {
        ref: XY,
        className: IY()(yr, "StoreDetailView"),
        children: (0, vY.jsx)(YR, {
          state: Ar.superRank.state,
          mode: Fr,
          giftName: gr,
          busy: ar,
          highlight: "superRank" === dY,
          purchaseError: ZY,
          onBack: () => {
            mY(rR)
          },
          onChooseRecipient: () => {
            mY(rR), PY()
          },
          onAct: () => {
            ir("superRank")
          },
          onLogin: () => {
            vr("superRank")
          }
        })
      }) : (0, vY.jsxs)("div", {
        ref: XY,
        className: yr,
        children: [(0, vY.jsx)("div", {
          className: "StoreTopRow",
          children: (0, vY.jsx)(VI, {
            selfName: uY ? aY.getPlayerName() : "",
            giftRecipient: sY,
            suggestionsVersion: null !== (rY = null === fY || void 0 === fY ? void 0 : fY.seq) && void 0 !== rY ? rY : 0,
            pulseSignal: BY,
            disabled: ar || !uY
          })
        }), fY && (0, vY.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            hY(null)
          },
          children: [(0, vY.jsx)(UA.b, {
            showSignal: fY.seq
          }), rI.d, " ", gY("store:giftSent", {
            name: fY.name
          })]
        }, fY.seq), !fY && ZY && (0, vY.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: gY(ZY)
        }), (0, vY.jsx)(tI, {
          layout: Ar,
          mountAtOnce: null !== qY.current,
          bundleGift: "gift" === Fr ? {
            recipientName: gr,
            lookingUp: "pending" === sY.recipient.status,
            busy: ar,
            onNeedRecipient: PY,
            onSent: YY => {
              (0, pY.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), sr({
                name: YY,
                cosmetics: sY.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: tY,
          superRankTotalDays: null !== (AY = null === UY || void 0 === UY ? void 0 : UY.superRankForDays) && void 0 !== AY ? AY : 0,
          busy: ar,
          highlightItem: dY,
          onOpen: function(YY) {
            (0, pY.reportAnalyticsClick)({
              id: "store.item_open",
              value: YY
            }), mY((0, MY.e)(YY))
          },
          onAct: ir,
          onNeedRecipient: PY,
          onLogin: vr
        })]
      })
    }));
    var OR = DY(2423),
      gR = DY(8253),
      aR = DY(2479),
      vR = DY(2346),
      uR = DY(2380),
      sR = DY(2392),
      iR = DY(2397),
      yR = DY(2466),
      QR = DY(2447),
      oR = DY(2202),
      WR = DY(2233),
      ER = DY(2223),
      mR = DY(1893),
      VR = DY(2406),
      SR = DY(2242);

    function lR(YY) {
      let {
        show: rY
      } = YY;
      return rY ? (0, vY.jsx)(TR, {}) : null
    }

    function TR() {
      const {
        t: YY
      } = (0, RY.C)(), {
        followsLeader: rY
      } = (0, vR.i)(), {
        loading: DY,
        friends: AY,
        requests: gY,
        invites: aY
      } = (0, yI.j)(), {
        userContext: uY
      } = (0, iY.d)(), [sY, yY] = (0, FY.useState)(SR.h);
      (0, FY.useEffect)((() => {
        (0, SR.c)()
      }), []);
      const QY = gY.map((YY => YY.name)),
        {
          state: WY,
          recentRequesters: EY
        } = (0, QR.n)(),
        mY = new Map([...("loaded" === WY.status ? WY.recentPlayers : []).map((YY => [YY.preview.name, YY])), ...EY.map((YY => [YY.name, YY]))]),
        VY = (0, FY.useRef)(null),
        [TY, eY] = (0, FY.useState)(""),
        [NY, BY] = (0, FY.useState)("Enter"),
        [cY, KY] = (0, FY.useState)(null);

      function HY() {
        TY && (BY("Loading"), (0, ER.h)(TY, "social_menu").then((YY => {
          if (VY.current) switch (YY.kind) {
            case "sent":
              BY("Success");
              break;
            case "becameFriends":
              BY("BecameFriends");
              break;
            case "failed":
              KY(YY.message), BY("Error")
          }
        })))
      }
      return (0, FY.useEffect)((() => {
        if ("Enter" === NY || "Loading" === NY) return;
        const YY = setTimeout((() => {
          VY.current.value = "", eY(""), BY("Enter")
        }), "Success" === NY ? 1e3 : 4e3);
        return () => {
          clearTimeout(YY)
        }
      }), [NY]), (0, vY.jsx)("div", {
        className: "SocialMenu",
        children: (0, vY.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, vY.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, vY.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, vY.jsx)(iR.b, {
                label: YY("socialBar:addFriend")
              }), (0, vY.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, vY.jsxs)("div", {
                  className: IY()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${NY}`]: !0
                  }),
                  children: ["Loading" === NY && (0, vY.jsx)(lY.c, {}), "Success" === NY && (0, vY.jsx)(OY.e, {
                    name: "check"
                  }), "BecameFriends" === NY && (0, vY.jsx)(vY.Fragment, {
                    children: YY("socialBar:nowFriends", {
                      playerName: TY
                    })
                  }), "Error" === NY && cY && (0, vY.jsx)(vY.Fragment, {
                    children: YY(cY.translationKey, cY.params)
                  })]
                }), (0, vY.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, vY.jsx)(SY.d, {
                    className: "PlayerSearchInput",
                    placeholderText: YY("socialBar:enterPlayerName"),
                    domRef: VY,
                    onValueChange: YY => {
                      eY((0, CY.s)(YY)), VY.current.value = (0, CY.s)(YY)
                    },
                    onEnter: () => {
                      TY && (0, pY.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), HY()
                    }
                  }), (0, vY.jsxs)(oY.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      HY()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, vY.jsx)(OY.e, {
                      name: "user-plus"
                    }), " ", YY("socialBar:sendRequest")]
                  })]
                })]
              }), (0, vY.jsx)(VR.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), aY.length > 0 && (0, vY.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, vY.jsx)(iR.b, {
                label: YY("socialBar:invites"),
                meta: aY.length
              }), aY.map((rY => (0, vY.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, vY.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, vY.jsx)(oR.c, {
                    invite: rY
                  })
                }), (0, vY.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, vY.jsx)(oR.e, {
                    invite: rY
                  })
                }), (0, vY.jsx)(oY.n, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, WR.f)(rY)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${rY.destination.kind}`
                  },
                  children: YY("general:join")
                }), (0, vY.jsx)(bY.g, {
                  tooltipInner: (0, vY.jsx)(vY.Fragment, {
                    children: YY("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, vY.jsx)(oY.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === sY || void 0 === sY ? void 0 : sY.kind) && sY.inviteId === rY.id,
                    onClick: () => {
                      yI.c.declineInvite(rY.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${rY.destination.kind}`
                    },
                    children: (0, vY.jsx)(OY.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, rY.id)))]
            }), (0, vY.jsxs)("div", {
              className: IY()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !DY && 0 === gY.length
              }),
              children: [(0, vY.jsx)(iR.b, {
                label: (0, vY.jsxs)(vY.Fragment, {
                  children: [(0, vY.jsx)(OY.e, {
                    name: mR.g
                  }), " ", YY("socialBar:requests")]
                }),
                meta: (0, vY.jsxs)(vY.Fragment, {
                  children: [gY.length, gY.length === XY.o && (0, vY.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: YY("socialBar:limitReached")
                  })]
                })
              }), DY && (0, vY.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, vY.jsx)(lY.c, {})
              }), !DY && 0 === gY.length && (0, vY.jsx)("div", {
                className: "SocialMenuEmpty",
                children: YY("socialBar:noFriendRequests")
              }), !DY && gY.length > 0 && (0, vY.jsx)("div", {
                className: "PlayerRows",
                children: (0, vY.jsx)(LF.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [gY],
                  children: gY.map(((rY, DY) => {
                    const FY = mY.get(rY.name);
                    return (0, vY.jsxs)(sR.e, {
                      playerSocialPreview: rY,
                      zIndex: gY.length - DY,
                      padDefaultFocus: (0, SR.e)(sY, rY.name, DY),
                      status: FY && (0, vY.jsx)(yR.b, {
                        gameNameWithVariation: FY.gameNameWithVariation,
                        isPrivateLobby: FY.isPrivateLobby
                      }),
                      children: [(0, vY.jsx)(bY.g, {
                        tooltipInner: (0, vY.jsx)(vY.Fragment, {
                          children: YY("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, vY.jsx)(oY.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            yY((0, SR.d)(QY, DY)), (0, ER.e)(rY.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, vY.jsx)(OY.e, {
                            name: "check"
                          })
                        })
                      }), (0, vY.jsx)(bY.g, {
                        tooltipInner: (0, vY.jsx)(vY.Fragment, {
                          children: YY("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, vY.jsx)(oY.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            yY((0, SR.d)(QY, DY)), (0, ER.e)(rY.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, vY.jsx)(OY.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${rY.name}_${rY.isError}`)
                  }))
                })
              })]
            }), (0, vY.jsx)(yR.f, {})]
          }), (0, vY.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, vY.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, vY.jsx)(iR.b, {
                label: YY("socialBar:party")
              }), (0, vY.jsx)(uR.c, {})]
            }), (0, vY.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, vY.jsx)(iR.b, {
                label: (0, vY.jsxs)(vY.Fragment, {
                  children: [(0, vY.jsx)(OY.e, {
                    name: mR.d
                  }), " ", YY("socialBar:friends")]
                }),
                meta: (0, vY.jsxs)(vY.Fragment, {
                  children: [AY.length, AY.length >= (0, XY.e)(uY.getPlayerRanks()) && (0, vY.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: YY("socialBar:limitReached")
                  })]
                })
              }), DY && (0, vY.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, vY.jsx)(lY.c, {})
              }), !DY && 0 === AY.length && (0, vY.jsx)("div", {
                className: "SocialMenuEmpty",
                children: YY("socialBar:noFriends")
              }), !DY && AY.length > 0 && (0, vY.jsx)("div", {
                className: "PlayerRows",
                children: (0, vY.jsx)(LF.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [AY],
                  children: AY.map(((YY, DY) => (0, vY.jsx)(sR.e, {
                    playerSocialPreview: YY,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: YY => {
                      yI.c.removeFriendFromState(YY)
                    },
                    zIndex: AY.length - DY,
                    children: (0, vY.jsx)(sR.b, {
                      friend: YY,
                      followsLeader: rY,
                      analyticsSurface: "social_menu"
                    })
                  }, `${YY.name}_${YY.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var eR = DY(2329);
    const NR = YY => {
        let {
          action: rY,
          padAction: DY
        } = YY;
        const {
          isTouchScreen: FY
        } = (0, eY.j)(["isTouchScreen"]), AY = (0, kD.p)();
        return FY && !AY ? null : (0, vY.jsx)(dD.d, {
          className: "EverythingMenuTabKey",
          noaAction: rY,
          padHidesKey: !0,
          padMenuShortcut: DY
        })
      },
      BR = (0, FY.memo)((function() {
        const {
          t: YY
        } = (0, RY.C)(), {
          gameState: rY,
          openEverythingMenuName: DY,
          initSdkSelectorFinished: AY,
          crosshairGameView: OY
        } = (0, eY.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: gY
        } = (0, iY.d)(), aY = (0, wY.purchasesAllowed)(), uY = (0, MY.w)(), sY = (YY, rY) => (0, vY.jsx)(NR, {
          action: YY,
          padAction: rY
        }), [yY, QY] = (0, FY.useState)(null), EY = (0, FY.useRef)(null), mY = {
          ..."inGame" === rY ? {} : (0, oY.P)({
            focusOnClick: !1
          }),
          ...DF.e
        }, VY = null !== DY, SY = DY !== wD.t.COSMETIC_SHOP && !OY;
        async function lY() {
          await async function() {
            if (!yY) return;
            await yY(), QY(null)
          }(), eY.b.set({
            openEverythingMenuName: null
          })
        }
        const TY = (0, FY.useMemo)((() => "inGame" === rY ? {
          text: YY("settingsMenu:exitGame"),
          onClick: () => {
            (0, gR.e)()
          }
        } : (0, cY.b)() ? {
          text: YY("settingsMenu:exitGame"),
          onClick: () => {
            LY.k.discordActivity().then((YY => {
              YY.exit("User exited the game")
            }))
          }
        } : null), [rY, YY]);
        const NY = (0, vY.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            lY()
          },
          children: (0, vY.jsx)(oY.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, vY.jsx)(FF.d, {
          showing: VY,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: DY === wD.t.SHOP,
          doGameplayStartStopOnShow: "inGame" === rY,
          children: (0, vY.jsx)(IF.b, {
            className: "EverythingMenuContainer",
            show: VY && !OY,
            children: (0, vY.jsx)(AF.e, {
              close: () => {
                lY()
              },
              togglePointerLock: !1,
              children: (0, vY.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, bA.l)(DY) && (0, vY.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, vY.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [TY && (0, vY.jsx)(oY.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        TY.onClick()
                      },
                      children: TY.text
                    }), VY && aY && (0, vY.jsx)("div", {
                      ...mY,
                      className: "EverythingMenuWallet",
                      title: YY("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, MY.f)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, vY.jsx)(OR.f, {})
                    })]
                  }), (0, vY.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, vY.jsxs)("div", {
                      ...mY,
                      "data-pad-tab": !0,
                      "data-pad-selected": DY === wD.t.SETTINGS ? "true" : void 0,
                      className: IY()("EverythingMenuTab", {
                        EverythingMenuTabActive: DY === wD.t.SETTINGS
                      }),
                      onClick: () => {
                        eY.b.set({
                          openEverythingMenuName: wD.t.SETTINGS
                        })
                      },
                      children: [YY("general:settings"), sY("OpenSettings", "pause")]
                    }), (0, vY.jsxs)("div", {
                      ...mY,
                      "data-pad-tab": !0,
                      "data-pad-selected": DY === wD.t.CUSTOMISATION ? "true" : void 0,
                      className: IY()("EverythingMenuTab", {
                        EverythingMenuTabActive: DY === wD.t.CUSTOMISATION
                      }),
                      onClick: () => {
                        eY.b.set({
                          openEverythingMenuName: wD.t.CUSTOMISATION
                        })
                      },
                      children: [YY("general:player"), sY("OpenCharacterCustomization")]
                    }), WY.featureFlags.useSocialFeatures && (0, vY.jsxs)("div", {
                      ...mY,
                      "data-pad-tab": !0,
                      "data-pad-selected": DY === wD.t.SOCIAL ? "true" : void 0,
                      className: IY()("EverythingMenuTab", {
                        EverythingMenuTabActive: DY === wD.t.SOCIAL
                      }),
                      ...(0, pY.c)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, DY === wD.t.SOCIAL),
                      onClick: () => {
                        eY.b.set({
                          openEverythingMenuName: wD.t.SOCIAL
                        })
                      },
                      children: [YY("socialBar:social"), (0, vY.jsx)(eR.e, {})]
                    }), aY && (0, vY.jsxs)("div", {
                      ...mY,
                      "data-pad-tab": !0,
                      "data-pad-selected": DY === wD.t.COSMETIC_SHOP ? "true" : void 0,
                      className: IY()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: DY === wD.t.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        eY.b.set({
                          openEverythingMenuName: wD.t.COSMETIC_SHOP
                        })
                      },
                      children: [(0, vY.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: YY("store:title")
                      }), "dot" === uY && (0, vY.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === rY && (0, vY.jsxs)("div", {
                      ...mY,
                      "data-pad-tab": !0,
                      "data-pad-selected": DY === wD.t.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: IY()("EverythingMenuTab", {
                        EverythingMenuTabActive: DY === wD.t.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        eY.b.set({
                          openEverythingMenuName: wD.t.LOBBY_LEADERBOARD
                        })
                      },
                      children: [YY("general:lobby"), sY("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, vY.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: NY
                  })]
                }), (0, bA.l)(DY) && NY, (0, vY.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === rY ? "0.85" : "1"
                  },
                  children: [(0, vY.jsx)(UD, {
                    show: DY === wD.t.SETTINGS,
                    setBeforeResumeCallback: QY
                  }), (0, vY.jsx)(rF, {
                    show: DY === wD.t.CUSTOMISATION
                  }), (0, vY.jsx)(FY.Suspense, {
                    fallback: null,
                    children: (0, vY.jsx)(ZA, {
                      show: DY === wD.t.SHOP
                    })
                  }), (0, vY.jsx)(pA, {
                    show: DY === wD.t.LOBBY_LEADERBOARD
                  }), (0, vY.jsx)(RR, {
                    show: DY === wD.t.COSMETIC_SHOP
                  }), (0, vY.jsx)(lR, {
                    show: DY === wD.t.SOCIAL
                  })]
                }), !(0, WY.isMobileApp)() && (0, RF.f)(gY.getPlayerRanks()) && (0, vY.jsx)(IF.b, {
                  ref: EY,
                  className: "EverythingMenuBannerDiv",
                  show: SY,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, vY.jsx)(aR.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: EY
                    },
                    showing: VY && SY,
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
  8748: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(341),
      AY = DY(8756);

    function IY(YY, rY, DY) {
      const IY = Object.entries(rY).sort(((YY, rY) => rY[1] - YY[1])),
        RY = (0, FY.qb)(YY);
      RY.push(YY ? "\n\n" : "\n");
      for (const [AY, yY] of IY) {
        var OY, gY, aY;
        const YY = null !== (OY = null === DY || void 0 === DY || null === (gY = DY[AY]) || void 0 === gY ? void 0 : gY.icon) && void 0 !== OY ? OY : `${AY} Enchantment`;
        RY.push({
          icon: YY,
          style: {
            fontSize: "1.5rem"
          }
        }), RY.push({
          str: `${AY} ${null!==(aY=(0,FY.R)(yY))&&void 0!==aY?aY:yY}\n`
        })
      }
      RY.push({
        str: "\n"
      });
      for (const [FY, yY] of IY) {
        var vY, uY, sY, iY;
        const YY = null !== (vY = null === DY || void 0 === DY || null === (uY = DY[FY]) || void 0 === uY ? void 0 : uY.icon) && void 0 !== vY ? vY : `${FY} Enchantment`,
          rY = null !== (sY = null === DY || void 0 === DY || null === (iY = DY[FY]) || void 0 === iY ? void 0 : iY.description) && void 0 !== sY ? sY : (0, AY.l)(FY);
        RY.push({
          icon: YY,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), RY.push({
          str: rY,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), RY.push({
          str: "\n"
        })
      }
      return RY
    }
  },
  8765: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      c: () => EY,
      e: () => oY,
      i: () => gY,
      j: () => WY,
      m: () => vY,
      p: () => sY,
      t: () => QY,
      w: () => uY
    });
    var FY = DY(332),
      AY = DY(625),
      IY = DY(341),
      RY = DY(3808),
      OY = DY(8748);

    function gY(YY, rY) {
      var DY;
      let {
        player: FY,
        chestOrCreative: AY
      } = YY;
      var IY;
      return rY < FY.length ? null !== (IY = FY[rY]) && void 0 !== IY ? IY : null : null !== (DY = AY[rY - FY.length]) && void 0 !== DY ? DY : null
    }

    function aY(YY) {
      var rY;
      return null !== (rY = YY.amount) && void 0 !== rY ? rY : 0
    }

    function vY(YY) {
      return 0 === YY.button || void 0 === YY.button
    }

    function uY(YY) {
      return !!YY.shiftKey
    }

    function sY(YY) {
      return "touches" in YY || "touch" === YY.pointerType || "pen" === YY.pointerType
    }
    const iY = new Set,
      yY = 50;

    function QY(YY, rY) {
      var DY;
      const FY = null === (DY = YY[rY]) || void 0 === DY ? void 0 : DY.displayName;
      return (0, AY.H)(FY) ? "string" !== typeof rY ? "" : (!iY.has(rY) && iY.size < yY && (iY.add(rY), console.warn(`No item called "${rY}", so its hover shows the name as given`)), rY) : FY
    }

    function oY(YY, rY, DY) {
      var gY, aY, vY, uY, sY, iY, yY, oY, WY, EY, mY, VY, SY, lY;
      const TY = YY.attributes,
        eY = null !== (gY = null === (aY = rY[YY.name]) || void 0 === aY ? void 0 : aY.rootName) && void 0 !== gY ? gY : YY.name,
        NY = null !== (vY = null !== (uY = TY.customDisplayName) && void 0 !== uY ? uY : null === (sY = rY[YY.name]) || void 0 === sY ? void 0 : sY.displayName) && void 0 !== vY ? vY : QY(rY, eY);
      let BY = NY;
      const cY = null === (iY = TY.customAttributes) || void 0 === iY ? void 0 : iY.enchantmentTier;
      cY && (BY = (0, IY.qb)(NY, {
        colour: IY.nb[cY]
      }));
      const KY = null !== (yY = null !== (oY = null !== (WY = function(YY, rY) {
        var DY;
        if (void 0 === YY || null !== (DY = rY.customAttributes) && void 0 !== DY && DY.author) return YY;
        const AY = (0, FY.cc)(YY);
        return AY.every((YY => "string" === typeof YY)) ? YY : AY.map((YY => "string" === typeof YY ? YY : {
          icon: YY.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(TY.customDescription, TY)) && void 0 !== WY ? WY : null === (EY = rY[YY.name]) || void 0 === EY ? void 0 : EY.description) && void 0 !== oY ? oY : null === (mY = rY[eY]) || void 0 === mY ? void 0 : mY.description) && void 0 !== yY ? yY : "";
      let HY = KY;
      if (null !== (VY = TY.customAttributes) && void 0 !== VY && VY.enchantments) HY = (0, OY.c)(KY, TY.customAttributes.enchantments, TY.customAttributes.enchantmentData);
      else if (DY[eY]) HY = (0, IY.qb)(KY), HY.push({
        str: "\n"
      }), HY.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (SY = TY.customAttributes) && void 0 !== SY && SY.mobSettings) {
        var zY, ZY;
        const YY = TY.customAttributes.mobSettings;
        var CY, fY;
        if (HY = [], (0, AY.H)(TY.customAttributes.health) || (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: TY.customAttributes.health.toString()
          }), (0, AY.H)(YY.maxHealth) || (HY.push({
            str: "/"
          }), HY.push({
            str: YY.maxHealth.toString()
          }))), !(0, AY.H)(YY.attackDamage) && YY.attackDamage > 0 && (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: YY.attackDamage.toString()
          })), !(0, AY.H)(YY.secondaryAttackDamage) && YY.secondaryAttackDamage > 0 && (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: YY.secondaryAttackDamage.toString()
          })), (0, AY.H)(YY.baseRunningSpeed) || (HY.push({
            str: "\n"
          }), HY.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: " "
          }), HY.push({
            str: YY.baseRunningSpeed.toFixed(2)
          })), "Saddled" === YY.metaInfo) HY.push({
          str: "\n"
        }), HY.push({
          str: {
            translationKey: "general:has"
          }
        }), HY.push({
          str: " "
        }), HY.push({
          icon: null !== (CY = null === (fY = YY.tameInfo) || void 0 === fY ? void 0 : fY.saddleItemName) && void 0 !== CY ? CY : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (HY.push({
            str: "\n"
          }), HY.push({
            str: "\n"
          }), YY.petInfo && null !== (zY = YY.tameInfo) && void 0 !== zY && zY.supportsFriendship) {
          const rY = RY.c.getIconsFromFriendshipPoints(YY.petInfo.friendshipPoints);
          for (const YY of rY) HY.push({
            icon: YY,
            style: {
              fontSize: "1.5em"
            }
          });
          HY.push({
            str: "\n"
          });
          const DY = RY.c.getMobHungerLevel(YY.petInfo.lastFedAt);
          for (const YY of RY.c.hungerLevelIcons[DY]) HY.push({
            icon: YY,
            style: {
              fontSize: "1.5em"
            }
          });
          HY.push({
            str: " "
          }), HY.push({
            str: RY.c.hungerLevelTranslations[DY],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (YY.tameInfo && null !== (ZY = YY.tameInfo) && void 0 !== ZY && ZY.supportsFriendship) {
          var jY, hY;
          let rY = null !== (jY = YY.tameInfo.likedFoods) && void 0 !== jY ? jY : [];
          HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Superliked]
            }
          }), HY.push({
            str: " "
          }), null !== (hY = YY.petInfo) && void 0 !== hY && hY.superlikedFoodKnown ? (HY.push({
            icon: YY.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), rY = rY.filter((rY => rY !== YY.petInfo.superlikedFood))) : HY.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Liked]
            }
          }), HY.push({
            str: " "
          });
          for (const YY of rY) HY.push({
            icon: YY,
            style: {
              fontSize: "1.5em"
            }
          });
          HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Neutral]
            }
          }), HY.push({
            str: " "
          });
          for (const DY of null !== (dY = YY.tameInfo.neutralFoods) && void 0 !== dY ? dY : []) {
            var dY;
            HY.push({
              icon: DY,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          HY.push({
            str: "\n"
          }), HY.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: RY.c.feedTextColours[RY.c.MobFoodType.Disliked]
            }
          }), HY.push({
            str: " "
          });
          for (const DY of null !== (JY = YY.tameInfo.dislikedFoods) && void 0 !== JY ? JY : []) {
            var JY;
            HY.push({
              icon: DY,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        HY.length > 0 ? (HY.shift(), HY.unshift(...(0, IY.qb)(KY))) : HY = (0, IY.qb)(KY)
      }
      return {
        name: BY,
        desc: HY,
        fontStyle: null !== (lY = TY.customAttributes) && void 0 !== lY && lY.author ? "italic" : "normal"
      }
    }

    function WY(YY, rY, DY, FY) {
      const AY = gY(YY, DY),
        IY = gY(YY, FY);
      if (!AY) return !1;
      const RY = rY[AY.name].armourReduction,
        OY = rY[IY.name].armourReduction;
      if (OY === RY) {
        var aY, vY, uY, sY;
        const YY = null !== (aY = null === (vY = AY.attributes.customAttributes) || void 0 === vY ? void 0 : vY.enchantmentTier) && void 0 !== aY ? aY : "Tier 0",
          rY = null !== (uY = null === (sY = IY.attributes.customAttributes) || void 0 === sY ? void 0 : sY.enchantmentTier) && void 0 !== uY ? uY : "Tier 0";
        return parseInt(YY.replace("Tier ", "")) >= parseInt(rY.replace("Tier ", ""))
      }
      return RY > OY
    }

    function EY(YY) {
      let rY;
      if ("number" === typeof YY) {
        const DY = document.querySelector(`[data-inven-idx="${YY}"]`);
        if (!DY) return null;
        rY = DY.getBoundingClientRect()
      } else rY = YY.getBoundingClientRect();
      return {
        x: rY.left + rY.width / 2,
        y: rY.top + rY.height / 2
      }
    }
  },
  8649: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => iY,
      f: () => yY,
      i: () => QY
    });
    var FY = DY(1437),
      AY = DY(61),
      IY = DY(1314),
      RY = DY(4086),
      OY = DY(2211),
      gY = DY(1211),
      aY = DY(99),
      vY = DY(1834),
      uY = DY(1337),
      sY = DY(1125);

    function iY(YY) {
      let {
        show: rY,
        onClose: DY
      } = YY;
      const {
        requestedGameNameWithVariation: FY,
        lobbyName: AY,
        shownLobbyName: IY
      } = (0, vY.h)("connectedGame"), gY = (0, OY.d)(FY, AY, !1);
      return aY.featureFlags.canUseInviteLinks && (0, sY.jsx)(RY.e, {
        show: rY,
        close: DY,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, sY.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, sY.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, sY.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, sY.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === gY ? (0, sY.jsx)(uY.c, {}) : gY, (0, sY.jsx)("br", {}), "Lobby Name: ", IY, (0, sY.jsx)("br", {}), (0, sY.jsx)("br", {}), (0, sY.jsx)("br", {}), (0, sY.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, sY.jsx)(yY, {})]
        })
      })
    }

    function yY() {
      var YY;
      const {
        t: rY
      } = (0, gY.C)(), DY = null !== (YY = QY(aY.featureFlags.canUseInviteLinks)) && void 0 !== YY ? YY : "Loading Link...", [IY, RY] = (0, AY.useState)(0), [OY, vY] = (0, AY.useReducer)((YY => YY + 1), 0);
      return (0, AY.useEffect)((() => {
        const YY = setTimeout((() => {
          vY()
        }), 1100);
        return () => {
          clearTimeout(YY)
        }
      }), [IY]), aY.featureFlags.canUseInviteLinks && (0, sY.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, sY.jsx)("div", {
          className: "InviteLinkInner",
          children: DY
        }), (0, sY.jsx)(FY.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(DY).catch((YY => {
              console.error("Failed to copy invite link:", YY)
            })), RY(Date.now())
          },
          disabled: Date.now() - IY < 1e3,
          children: Date.now() - IY < 1e3 ? rY("general:copied") : rY("general:copy")
        })]
      })
    }

    function QY(YY) {
      const [rY, DY] = (0, AY.useState)(null);
      return (0, AY.useEffect)((() => {
        if (!YY) return;
        let rY = !0;
        return (0, IY.z)().then((YY => {
          rY && DY(YY)
        })).catch((YY => {
          console.error("Failed to get invite link:", YY)
        })), () => {
          rY = !1
        }
      }), [YY]), rY
    }
  },
  8739: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1834),
      OY = DY(1125);

    function gY(YY) {
      const rY = Math.floor(YY / 3600),
        DY = Math.floor(YY % 3600 / 60),
        FY = Math.floor(YY % 60),
        AY = `${DY.toString().padStart(2,"0")}:${FY.toString().padStart(2,"0")}`;
      return rY > 0 ? `${rY}:${AY}` : AY
    }
    const aY = (0, FY.memo)((function(YY) {
      let {
        className: rY
      } = YY;
      const {
        recording: DY,
        seconds: FY
      } = (0, RY.h)("replayRecorder");
      return DY ? (0, OY.jsxs)("div", {
        className: IY()("RecordingIndicator", rY),
        children: [(0, OY.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, OY.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, OY.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: gY(FY)
        })]
      }) : null
    }))
  },
  4459: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => oY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(4217),
      RY = DY(1211),
      OY = DY(1098),
      gY = DY(1437),
      aY = DY(1471),
      vY = DY(1346),
      uY = DY(2306),
      sY = DY(1125);
    const iY = {
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

    function yY(YY) {
      let {
        platform: rY
      } = YY;
      const DY = "youtube" === rY;
      return (0, sY.jsxs)("span", {
        className: AY()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: DY
        }),
        children: [DY && (0, sY.jsx)(uY.e, {
          variant: "white"
        }), !DY && (0, sY.jsx)(OY.e, {
          name: iY[rY].icon,
          kit: "brands"
        })]
      })
    }

    function QY(YY) {
      let {
        platform: rY,
        link: DY,
        editable: FY,
        userContext: AY,
        onLinksUpdated: uY
      } = YY;
      const {
        t: QY
      } = (0, RY.C)(), oY = iY[rY];
      if (!DY && !FY) return null;

      function WY() {
        var YY;
        if (!AY || !uY) return;
        vY.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: oY.name
            }
          },
          prefixText: IY.w[rY],
          placeholderText: "playBloxd",
          initialValue: null !== (YY = null === DY || void 0 === DY ? void 0 : DY.handle) && void 0 !== YY ? YY : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: DY ? "general:remove" : void 0
        }).getResult().then((async YY => {
          if ("notificationTornDown" !== YY && null !== YY) try {
            "submit" === YY.type ? await aY.e.setSocialLink(AY, rY, YY.value) : await aY.e.clearSocialLink(AY, rY), uY()
          } catch (DY) {
            console.error("Failed to update social link", DY), vY.NotificationProvider.showAlertPopup({
              title: DY.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (DY) {
        const YY = `@${DY.handle}`;
        return (0, sY.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: oY.color
          },
          href: DY.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, sY.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, sY.jsx)(yY, {
              platform: rY
            }), (0, sY.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, sY.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: YY
              })
            })]
          }), FY && (0, sY.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, gY.P)({
              stopPropagation: !0
            }),
            onClick: YY => {
              YY.stopPropagation(), YY.preventDefault(), WY()
            },
            children: (0, sY.jsx)(OY.e, {
              name: "pen-to-square"
            })
          }), !FY && (0, sY.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, sY.jsx)(OY.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, sY.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: oY.color
        },
        ...(0, gY.P)(),
        onClick: () => {
          WY()
        },
        children: [(0, sY.jsx)(yY, {
          platform: rY
        }), (0, sY.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, sY.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: oY.name
          }), (0, sY.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: QY("homePage:profileSocialLinkAdd")
          })]
        }), (0, sY.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, sY.jsx)(OY.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function oY(YY) {
      let {
        socialLinks: rY,
        editable: DY = !1,
        userContext: FY,
        onLinksUpdated: AY
      } = YY;
      if (!DY && 0 === rY.length) return null;
      const RY = new Map(rY.map((YY => [YY.platform, YY]))),
        OY = DY ? IY.t : rY.map((YY => YY.platform));
      return (0, sY.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, sY.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: OY.map((YY => (0, sY.jsx)(QY, {
            platform: YY,
            link: RY.get(YY),
            editable: DY,
            userContext: FY,
            onLinksUpdated: AY
          }, YY)))
        })
      })
    }
  },
  8745: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(4093),
      AY = DY(4097);

    function IY(YY) {
      let {
        children: rY,
        showing: DY,
        globallyUniqueKey: IY,
        alwaysMountChildren: RY = !1,
        doGameplayStartStopOnShow: OY = !0,
        keepsMovement: gY = !1
      } = YY;
      return (0, AY.b)(!0, DY, IY, gY), (0, FY.c)(OY, DY), DY || RY ? rY : null
    }
  },
  8783: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(61),
      AY = DY(3168);

    function IY() {
      const [YY, rY] = (0, FY.useState)(!1);
      return (0, FY.useLayoutEffect)((() => {
        let YY = !0;
        return (0, AY.b)().then((() => {
          YY && rY(!0)
        })), () => {
          YY = !1
        }
      }), []), YY
    }
  },
  6128: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(61),
      AY = DY(40);

    function IY(YY, rY) {
      var DY;
      const [IY, RY] = (0, FY.useState)(null !== (DY = AY.m.getItem(YY)) && void 0 !== DY ? DY : rY);
      return [IY, rY => {
        AY.m.setItem(YY, rY), RY(rY)
      }]
    }
  },
  8718: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      g: () => uY
    });
    DY(8724);
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(8685);

    function OY(YY, rY) {
      return Math.max(1, Math.round(YY * rY))
    }

    function gY(YY, rY, DY) {
      const FY = 2 * DY >= rY - 1;
      return {
        x: YY,
        y: YY,
        size: rY,
        border: Math.min(DY, Math.floor(rY / 2)),
        filled: FY
      }
    }
    var aY = DY(1125);
    const vY = 1.4;

    function uY(YY, rY) {
      return YY && rY ? `scale(${vY})` : "scale(1)"
    }

    function sY(YY) {
      return "classic" === YY.settings.style ? (0, aY.jsx)(QY, {
        ...YY
      }) : (0, aY.jsx)(lY, {
        ...YY
      })
    }
    const iY = .125;

    function yY(YY, rY) {
      const DY = {};
      if (YY.color !== RY.f.color && (DY.color = (0, RY.j)(YY.color)), YY.opacity !== RY.f.opacity && (DY.opacity = YY.opacity / 100), YY.outline !== RY.f.outline || YY.outlineColor !== RY.f.outlineColor) {
        const rY = YY.outline,
          FY = (0, RY.j)(YY.outlineColor);
        DY.textShadow = rY > 0 ? `-${rY}px 0 ${FY}, 0 ${rY}px ${FY}, ${rY}px 0 ${FY}, 0 -${rY}px ${FY}` : "none"
      }
      if (YY.size !== RY.f.size) {
        const FY = YY.size / 100;
        DY.fontSize = rY ? `calc(max(1.3rem, 18px) * ${FY})` : `calc(1.3rem * ${FY})`, DY.marginTop = `-${iY}em`, DY.transformOrigin = `50% calc(50% + ${iY}em)`
      }
      return DY
    }

    function QY(YY) {
      let {
        settings: rY,
        touch: DY,
        inPreview: FY,
        inEditor: IY,
        pressed: RY = !1,
        pressRef: OY
      } = YY;
      return (0, aY.jsx)("div", {
        className: AY()("Crosshair", {
          Touch: DY,
          CrosshairInPreview: FY,
          CrosshairInEditor: IY || FY
        }),
        ref: OY,
        style: {
          transform: uY(RY, rY.growOnClick),
          ...yY(rY, DY)
        },
        children: "+"
      })
    }

    function oY(YY, rY) {
      return YY / rY + "px"
    }

    function WY(YY, rY, DY, FY) {
      return {
        ...VY(YY, rY, DY),
        width: oY(YY.w, DY),
        height: oY(YY.h, DY),
        background: FY
      }
    }

    function EY(YY, rY, DY) {
      return {
        left: oY(YY.x, rY),
        top: oY(YY.y, rY),
        width: oY(YY.size, rY),
        height: oY(YY.size, rY),
        borderWidth: oY(YY.border, rY),
        borderColor: DY,
        background: YY.filled ? DY : void 0
      }
    }
    const mY = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function VY(YY, rY, DY) {
      const [FY, AY] = YY.arm ? mY[YY.arm] : [0, 0], IY = Math.round(rY * DY);
      return {
        left: oY(YY.x + FY * IY, DY),
        top: oY(YY.y + AY * IY, DY)
      }
    }

    function SY(YY) {
      return YY.arm ? {
        "data-arm": YY.arm,
        "data-x": YY.x,
        "data-y": YY.y
      } : {}
    }

    function lY(YY) {
      let {
        settings: rY,
        inPreview: DY,
        inEditor: FY,
        pressed: uY = !1,
        spread: sY,
        spreadRef: iY
      } = YY;
      const yY = (0, IY.useRef)(null),
        {
          box: QY,
          dpr: oY
        } = function(YY) {
          const [rY, DY] = (0, IY.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, IY.useLayoutEffect)((() => {
            const rY = YY.current;
            if (!rY) return;
            const FY = () => {
              const YY = rY.getBoundingClientRect(),
                FY = window.devicePixelRatio || 1;
              DY((rY => rY.dpr === FY && rY.box.left === YY.left && rY.box.top === YY.top && rY.box.width === YY.width && rY.box.height === YY.height ? rY : {
                box: {
                  left: YY.left,
                  top: YY.top,
                  width: YY.width,
                  height: YY.height
                },
                dpr: FY
              }))
            };
            FY();
            const AY = new ResizeObserver(FY);
            return AY.observe(rY), window.addEventListener("resize", FY), window.addEventListener("scroll", FY, !0), () => {
              AY.disconnect(), window.removeEventListener("resize", FY), window.removeEventListener("scroll", FY, !0)
            }
          }), [YY]), rY
        }(yY),
        mY = (0, IY.useRef)(oY);
      mY.current = oY;
      const lY = function(YY, rY) {
          const DY = OY(YY.lineThickness, rY),
            FY = OY(YY.lineLength, rY),
            AY = Math.round(YY.gap * rY),
            IY = OY(YY.dotSize, rY),
            RY = YY.outline > 0 ? OY(YY.outline, rY) : 0,
            aY = OY(YY.circleThickness, rY),
            vY = YY.circle ? Math.round(YY.circleRadius * rY * 2 + aY) : 0,
            uY = function(YY, rY, DY, FY) {
              return YY.lines ? rY : YY.dot ? DY : YY.circle && FY % 2 === 0 ? 2 : 1
            }(YY, DY, IY, vY),
            sY = [];
          if (YY.lines && (sY.push({
              x: uY + AY,
              y: 0,
              w: FY,
              h: DY,
              arm: "right"
            }), sY.push({
              x: -AY - FY,
              y: 0,
              w: FY,
              h: DY,
              arm: "left"
            }), sY.push({
              x: 0,
              y: uY + AY,
              w: DY,
              h: FY,
              arm: "down"
            }), YY.tStyle || sY.push({
              x: 0,
              y: -AY - FY,
              w: DY,
              h: FY,
              arm: "up"
            }), 0 === AY && sY.push({
              x: 0,
              y: 0,
              w: DY,
              h: DY
            })), YY.dot) {
            const YY = Math.floor((uY - IY) / 2);
            sY.push({
              x: YY,
              y: YY,
              w: IY,
              h: IY
            })
          }
          const iY = sY.map((YY => ({
            ...YY,
            x: YY.x - RY,
            y: YY.y - RY,
            w: YY.w + 2 * RY,
            h: YY.h + 2 * RY
          })));
          let yY = null,
            QY = null;
          if (YY.circle) {
            const YY = vY + ((vY - uY) % 2 === 0 ? 0 : 1),
              rY = (uY - YY) / 2;
            yY = gY(rY, YY, aY), RY > 0 && (QY = gY(rY - RY, YY + 2 * RY, aY + 2 * RY))
          }
          return {
            cell: uY,
            fills: sY,
            outlines: RY > 0 ? iY : [],
            ring: yY,
            ringOutline: QY
          }
        }(uY && rY.growOnClick ? function(YY, rY) {
          return {
            ...YY,
            outline: YY.outline * rY,
            lineLength: YY.lineLength * rY,
            lineThickness: YY.lineThickness * rY,
            gap: YY.gap * rY,
            dotSize: YY.dotSize * rY,
            circleRadius: YY.circleRadius * rY,
            circleThickness: YY.circleThickness * rY
          }
        }(rY, vY) : rY, oY),
        TY = function(YY, rY, DY) {
          const FY = Math.round((YY.left + YY.width / 2) * DY - rY / 2),
            AY = Math.round((YY.top + YY.height / 2) * DY - rY / 2);
          return {
            x: FY / DY - YY.left,
            y: AY / DY - YY.top
          }
        }(QY, lY.cell, oY),
        eY = (0, RY.j)(rY.color),
        NY = (0, RY.j)(rY.outlineColor),
        BY = (0, IY.useRef)(0);
      (0, IY.useLayoutEffect)((() => {
        if (iY) return iY.current = YY => {
          var rY;
          BY.current = YY, null === (rY = yY.current) || void 0 === rY || rY.querySelectorAll("[data-arm]").forEach((rY => {
            Object.assign(rY.style, VY(function(YY) {
              return {
                x: Number(YY.dataset.x),
                y: Number(YY.dataset.y),
                arm: YY.dataset.arm
              }
            }(rY), YY, mY.current))
          }))
        }, () => {
          iY.current = null
        }
      }), [iY]);
      const cY = null !== sY && void 0 !== sY ? sY : BY.current;
      return (0, aY.jsx)("div", {
        ref: yY,
        className: AY()("CrosshairShapes", {
          CrosshairInPreview: DY,
          CrosshairInEditor: FY || DY,
          CrosshairSpreads: void 0 !== iY
        }),
        children: (0, aY.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: TY.x,
            top: TY.y,
            opacity: rY.opacity / 100
          },
          children: (0, aY.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [lY.ringOutline && (0, aY.jsx)("div", {
              className: "CrosshairRing",
              style: EY(lY.ringOutline, oY, NY)
            }), lY.outlines.map(((YY, rY) => (0, aY.jsx)("div", {
              className: "CrosshairPart",
              ...SY(YY),
              style: WY(YY, cY, oY, NY)
            }, `o${rY}`))), lY.ring && (0, aY.jsx)("div", {
              className: "CrosshairRing",
              style: EY(lY.ring, oY, eY)
            }), lY.fills.map(((YY, rY) => (0, aY.jsx)("div", {
              className: "CrosshairPart",
              ...SY(YY),
              style: WY(YY, cY, oY, eY)
            }, `f${rY}`)))]
          })
        })
      })
    }
  },
  8729: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      e: () => oY,
      i: () => QY
    });
    var FY = DY(8685);
    const AY = "XH1-",
      IY = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      RY = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      OY = ["color", "outlineColor"],
      gY = 1 + 3 * OY.length + RY.length + 1,
      aY = Math.ceil(8 * gY / Math.log2(62)),
      vY = AY.length + aY;

    function uY(YY) {
      let rY = 90;
      for (const DY of YY) rY = 31 * rY + DY & 255;
      return rY
    }
    const sY = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      iY = BigInt(sY.length);

    function yY(YY, rY) {
      let DY = 0n;
      for (const AY of YY) {
        const YY = sY.indexOf(AY);
        if (YY < 0) return null;
        DY = DY * iY + BigInt(YY)
      }
      if (DY >> BigInt(8 * rY) !== 0n) return null;
      const FY = [];
      for (let AY = 0; AY < rY; AY++) FY.unshift(Number(0xffn & DY)), DY >>= 8n;
      return FY
    }

    function QY(YY) {
      let rY = "shapes" === YY.style ? 1 : 0;
      IY.forEach(((DY, FY) => {
        YY[DY] && (rY |= 1 << FY + 1)
      }));
      const DY = [rY];
      for (const AY of OY) {
        const rY = (0, FY.h)(AY, YY[AY]);
        DY.push(rY >> 16 & 255, rY >> 8 & 255, 255 & rY)
      }
      for (const AY of RY) {
        const {
          min: rY,
          step: IY
        } = FY.b[AY];
        DY.push(Math.round(((0, FY.h)(AY, YY[AY]) - rY) / IY))
      }
      return DY.push(uY(DY)), AY + function(YY, rY) {
        let DY = 0n;
        for (const AY of YY) DY = DY << 8n | BigInt(AY);
        let FY = "";
        for (let AY = 0; AY < rY; AY++) FY = sY[Number(DY % iY)] + FY, DY /= iY;
        return FY
      }(DY, aY)
    }

    function oY(YY) {
      for (const rY of YY.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${aY}})`, "gi"))) {
        const YY = WY(yY(rY[1], gY));
        if (YY) return YY
      }
      return null
    }

    function WY(YY) {
      if (!YY || YY.length !== gY || uY(YY.slice(0, -1)) !== YY[YY.length - 1]) return null;
      const rY = YY[0],
        DY = {
          ...FY.f,
          style: 1 & rY ? "shapes" : "classic"
        };
      IY.forEach(((YY, FY) => {
        DY[YY] = 0 !== (rY & 1 << FY + 1)
      }));
      let AY = 1;
      for (const FY of OY) DY[FY] = YY[AY] << 16 | YY[AY + 1] << 8 | YY[AY + 2], AY += 3;
      for (const IY of RY) {
        const {
          min: rY,
          step: RY
        } = FY.b[IY];
        DY[IY] = (0, FY.h)(IY, rY + YY[AY] * RY), AY++
      }
      return DY
    }
  },
  8685: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      f: () => AY,
      h: () => IY,
      j: () => aY,
      k: () => gY,
      o: () => vY,
      r: () => OY,
      u: () => RY
    });
    const FY = {
        opacity: {
          min: 5,
          max: 100,
          step: 1
        },
        outline: {
          min: 0,
          max: 4,
          step: .1
        },
        size: {
          min: 25,
          max: 400,
          step: 5
        },
        lineLength: {
          min: .5,
          max: 40,
          step: .5
        },
        lineThickness: {
          min: .5,
          max: 10,
          step: .5
        },
        gap: {
          min: 0,
          max: 40,
          step: .5
        },
        dotSize: {
          min: .5,
          max: 12,
          step: .5
        },
        circleRadius: {
          min: 1,
          max: 60,
          step: .5
        },
        circleThickness: {
          min: .5,
          max: 6,
          step: .5
        },
        color: {
          min: 0,
          max: 16777215,
          step: 1
        },
        outlineColor: {
          min: 0,
          max: 16777215,
          step: 1
        }
      },
      AY = Object.freeze({
        style: "classic",
        color: 16777215,
        opacity: 100,
        outline: 1.2,
        outlineColor: 0,
        growOnClick: !0,
        size: 100,
        lines: !0,
        lineLength: 6,
        lineThickness: 2,
        gap: 3,
        tStyle: !1,
        dot: !1,
        dotSize: 2,
        circle: !1,
        circleRadius: 10,
        circleThickness: 1,
        forGuns: !1
      });

    function IY(YY, rY) {
      var DY;
      const {
        min: IY,
        max: RY,
        step: OY
      } = FY[YY];
      if (!Number.isFinite(rY)) return AY[YY];
      const gY = (null !== (DY = String(OY).split(".")[1]) && void 0 !== DY ? DY : "").length,
        aY = Number((Math.round(rY / OY) * OY).toFixed(gY));
      return Math.min(RY, Math.max(IY, aY))
    }

    function RY(YY, rY, DY) {
      const FY = "number" === typeof DY ? IY(rY, DY) : DY;
      return {
        ...YY,
        [rY]: FY
      }
    }

    function OY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(AY).every((FY => DY.includes(FY) || YY[FY] === rY[FY]))
    }

    function gY(YY) {
      return OY(YY, AY)
    }

    function aY(YY) {
      return `#${YY.toString(16).padStart(6,"0")}`
    }

    function vY(YY) {
      const rY = /^#?([0-9a-f]{6})$/i.exec(YY.trim());
      return rY ? parseInt(rY[1], 16) : null
    }
  },
  8733: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY,
      e: () => sY
    });
    var FY = DY(61),
      AY = DY(40),
      IY = DY(8729),
      RY = DY(8685);
    const OY = "crosshairCode";
    let gY = null;
    const aY = new Set;

    function vY() {
      if (null === gY) {
        var YY;
        const rY = AY.m.getItem(OY);
        gY = null !== (YY = "string" === typeof rY ? (0, IY.e)(rY) : null) && void 0 !== YY ? YY : RY.f
      }
      return gY
    }

    function uY(YY) {
      gY = YY, (0, RY.k)(YY) ? AY.m.removeItem(OY) : AY.m.setItem(OY, (0, IY.i)(YY));
      for (const rY of aY) rY()
    }

    function sY() {
      const [YY, rY] = (0, FY.useState)(vY);
      return (0, FY.useEffect)((() => {
        const YY = () => {
          rY(vY())
        };
        return YY(), DY = YY, aY.add(DY), () => {
          aY.delete(DY)
        };
        var DY
      }), []), YY
    }
  },
  8680: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      g: () => AY
    });
    var FY = DY(19);

    function AY(YY, rY) {
      return YY && !rY
    }

    function IY() {
      return AY(FY.b.get("isTouchScreen"), FY.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8647: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = new Set(["chunkBorders"])
  },
  8643: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ALL_DEV_TOOLS: () => RY,
      coreDevTools: () => aY,
      devTools: () => gY
    });
    var FY = DY(649),
      AY = DY(1298),
      IY = DY(8647);
    const RY = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function OY() {
      const {
        noaDevTools: YY
      } = await DY.e(226).then((() => DY(40158)));
      return YY
    }
    const gY = new class {
        constructor() {
          this.loadHost = OY, this.tools = RY
        }
        setHost(YY) {
          this.tools = null === YY ? RY : YY.tools, this.loadHost = null === YY ? OY : async () => YY
        }
        supports(YY) {
          return this.tools.has(YY)
        }
        async downloadScene(YY, rY) {
          const DY = await this.loadHost();
          await DY.downloadScene(YY, rY)
        }
        async setAmbientLightIntensity(YY) {
          const rY = await this.loadHost();
          await rY.setAmbientLightIntensity(YY)
        }
      },
      aY = {
        tools: IY.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    FY.r && gY.setHost(aY), (0, AY.w)((() => {
      gY.setHost(aY)
    }))
  },
  6230: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    var FY = DY(40);
    const AY = "shaderPack";
    async function IY() {
      var YY;
      let rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (YY = await FY.i.getItem(AY, rY)) && void 0 !== YY ? YY : null
    }
  },
  8655: (YY, rY, DY) => {
    function FY(YY, rY) {
      return YY && !rY
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  8677: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(1113);

    function AY() {
      var YY, rY;
      return null !== (YY = null === (rY = screen.orientation) || void 0 === rY ? void 0 : rY.type) && void 0 !== YY ? YY : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const IY = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && AY() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = AY(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, FY.jQ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const YY of this.resizers) YY()
          }
        }), 1e3)
      }
      heldSizer(YY) {
        let rY = !1;
        return () => {
          if (rY && this.isHeld()) return null;
          const DY = YY();
          return rY ||= null !== DY, DY
        }
      }
      onRelease(YY) {
        return this.resizers.add(YY), () => {
          this.resizers.delete(YY)
        }
      }
    }
  },
  8653: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => iY,
      i: () => sY
    });
    var FY = DY(19),
      AY = DY(1665),
      IY = DY(40),
      RY = DY(1346),
      OY = DY(3272),
      gY = DY(1450),
      aY = DY(1384);
    const vY = 2592e5,
      uY = "notificationOptInLastPromptedAt";
    async function sY() {
      var YY;
      const rY = await iY();
      if (null === rY) return;
      const DY = null !== (YY = IY.m.getItem(uY)) && void 0 !== YY ? YY : 0;
      if (Date.now() - DY < vY) return;
      if ((0, aY.f)()) return;
      const FY = await RY.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: AY.e.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== FY && (IY.m.setItem(uY, Date.now()), (0, gY.reportAnalyticsClick)({
        id: !0 === FY ? "push.allow" : "push.deny",
        value: AY.e.supports("notifications") ? "app" : "browser"
      }), !0 === FY && rY().catch((YY => {
        console.error("Failed to ask for push notifications:", YY)
      })))
    }
    async function iY() {
      return await AY.e.ready, AY.e.supports("notifications") ? FY.b.get("mobilePushNotificationsCanAsk") ? async () => {
        AY.e.request("notifications.requestPermission", {}).then((YY => {
          let {
            canAsk: rY
          } = YY;
          FY.b.set({
            mobilePushNotificationsCanAsk: rY
          })
        }), (YY => {
          console.error("The app couldn't ask for push notifications:", YY)
        }))
      }: null: await OY.c.canAsk() ? () => OY.c.requestPermission() : null
    }
  },
  8659: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      g: () => gY
    });
    var FY = DY(19);
    const AY = 24,
      IY = "farNametags",
      RY = 1e5;

    function OY() {
      var YY;
      return null === (YY = FY.b.get("showDistantNametags")) || void 0 === YY || YY
    }

    function gY() {
      var YY;
      return null !== (YY = function() {
        const YY = new URLSearchParams(window.location.search).get(IY),
          rY = null === YY || "" === YY ? NaN : Number(YY);
        return Number.isFinite(rY) && rY >= 0 ? Math.min(rY, RY) : null
      }()) && void 0 !== YY ? YY : OY() ? 0 : AY
    }
  },
  8774: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      g: () => RY
    });
    const FY = [{
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

    function AY(YY) {
      let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof YY) {
        if (!Number.isFinite(YY)) return "0";
        if (Math.abs(YY) < 100) {
          const rY = YY < 0 ? "-" : "",
            DY = Math.abs(YY);
          return DY >= 10 ? `${rY}${DY.toFixed(1).replace(/\.0$/,"")}` : `${rY}${DY.toFixed(2).replace(/\.?0+$/,"")}`
        }
        rY = BigInt(Math.floor(YY))
      } else rY = YY;
      const AY = rY < 0n ? -rY : rY,
        IY = rY < 0n ? "-" : "",
        RY = AY.toString();
      if (RY.length <= DY) return `${IY}${RY}`;
      const OY = 3 * Math.floor((RY.length - 1) / 3);
      if (OY < 3) return `${IY}${RY}`;
      if (OY > 3 * FY.length) {
        const YY = RY[0],
          rY = RY.slice(1, 3).replace(/0+$/, "");
        return `${IY}${rY?`${YY}.${rY}`:YY}e${RY.length-1}`
      }
      const {
        threshold: gY,
        suffix: aY
      } = FY[FY.length - OY / 3], vY = AY / gY, uY = Number(1000n * (AY % gY) / gY), sY = Number(vY) + uY / 1e3;
      let iY;
      return iY = sY >= 100 ? Math.floor(sY).toString() : sY >= 10 ? sY.toFixed(1).replace(/\.0$/, "") : sY.toFixed(2).replace(/\.?0+$/, ""), `${IY}${iY}${aY}`
    }
    const IY = FY.map((YY => {
      let {
        threshold: rY,
        suffix: DY
      } = YY;
      return {
        threshold: Number(rY),
        suffix: DY
      }
    })).filter((YY => {
      let {
        threshold: rY
      } = YY;
      return Number.isFinite(rY)
    }));

    function RY(YY) {
      const rY = Math.abs(YY),
        DY = YY < 0 ? "-" : "";
      for (const {
          threshold: FY,
          suffix: AY
        }
        of IY)
        if (rY >= FY) {
          const YY = rY / FY;
          if (YY >= 1e3) return `${DY}${rY.toExponential(2).replace("e+","e")}`;
          let IY;
          return IY = YY >= 100 ? Math.floor(YY).toString() : YY >= 10 ? YY.toFixed(1).replace(/\.0$/, "") : YY.toFixed(2).replace(/\.?0+$/, ""), `${DY}${IY}${AY}`
        } return `${DY}${rY}`
    }
  },
  8756: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      h: () => sY,
      k: () => uY,
      l: () => RY,
      m: () => aY,
      n: () => gY
    });
    var FY = DY(341);
    const AY = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      IY = {
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

    function RY(YY) {
      var rY;
      return null !== (rY = IY[YY]) && void 0 !== rY ? rY : {
        translationKey: ""
      }
    }
    const OY = {
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

    function gY(YY) {
      return AY.includes(YY)
    }

    function aY(YY) {
      var rY;
      return !0 === (null === YY || void 0 === YY || null === (rY = YY.customAttributes) || void 0 === rY ? void 0 : rY.cannotEnchant)
    }

    function vY(YY, rY) {
      const {
        max: DY
      } = OY[YY].at(-1);
      return rY <= DY
    }

    function uY(YY) {
      const rY = Math.sin(YY / 80),
        DY = YY => {
          if (YY <= 0) return 0;
          if (YY > 1) return 1;
          let rY = 0;
          const DY = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let FY = 0; FY < DY.length; FY++) {
            rY += (FY % 2 === 0 ? 1 : -1) * DY[FY] * Math.pow(YY, 2 + FY) / (2 + FY)
          }
          return 72 * rY
        },
        FY = .3 - .78 * rY,
        AY = .5 - .78 * rY,
        IY = .6 - .7 * rY,
        RY = .8 - .6 * rY;
      let OY = DY(FY),
        gY = DY(AY) - OY,
        aY = DY(IY) - gY - OY,
        vY = DY(RY) - aY - gY - OY;
      FY < .041 && (gY /= 1 - OY, aY /= 1 - OY, vY /= 1 - OY, OY = 0), AY < .041 && (OY /= 1 - gY, aY /= 1 - gY, vY /= 1 - gY, gY = 0), IY < .041 && (OY /= 1 - aY, gY /= 1 - aY, vY /= 1 - aY, aY = 0), RY < .041 && (OY /= 1 - vY, gY /= 1 - vY, aY /= 1 - vY, vY = 0);
      return {
        commonProb: OY,
        uncommonProb: gY,
        rareProb: aY,
        epicProb: vY,
        legendaryProb: 1 - (vY + aY + gY + OY)
      }
    }

    function sY(YY, rY) {
      const {
        min: DY,
        max: AY
      } = OY[YY][rY], IY = FY.c.sampleUniformIntDistribution(DY, AY, "includeMax");
      return {
        ...uY(IY),
        level: IY
      }
    }
  },
  8724: () => {},
  8691: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8698: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8705: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8709: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);