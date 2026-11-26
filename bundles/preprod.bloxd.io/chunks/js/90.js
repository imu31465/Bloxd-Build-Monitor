export const id = 90;
export const ids = [90];
export const modules = {
  34740: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      EverythingMenu: () => UD
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1193),
      FU = zU(1390),
      oU = zU(2136),
      DU = zU(1494),
      EU = zU(1115),
      YU = zU(1305);

    function NU(UU) {
      let {
        items: XU,
        link: zU,
        onClick: cU,
        selectedItemId: yU,
        className: NU,
        padStartsOnTab: IU = !0
      } = UU;
      const {
        t: pU
      } = (0, AU.I)(), aU = (0, EU.h)(), tU = [];
      for (const QU of XU) {
        var gU;
        const UU = tU[tU.length - 1];
        var kU;
        if (UU && UU.title === (null !== (gU = QU.section) && void 0 !== gU ? gU : null)) UU.items.push(QU);
        else tU.push({
          title: null !== (kU = QU.section) && void 0 !== kU ? kU : null,
          items: [QU]
        })
      }
      return (0, YU.jsxs)("div", {
        className: QU()("MenuSideBarBody", NU),
        "data-pad-tabs": "2",
        children: [tU.map(((UU, XU) => {
          var zU;
          return (0, YU.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [UU.title && (0, YU.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: pU(UU.title)
            }), UU.items.map((UU => {
              var XU;
              const zU = !!UU.iconElement || !!UU.faIcon;
              return (0, YU.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": yU === UU.id ? "true" : void 0,
                "data-pad-default-focus": IU && yU === UU.id || void 0,
                className: QU()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: yU === UU.id
                }),
                onClick: () => {
                  cU(UU.id)
                },
                children: [zU && (0, YU.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (XU = UU.iconElement) && void 0 !== XU ? XU : (0, YU.jsx)(FU.d, {
                    name: UU.faIcon
                  })
                }), (!aU || !zU) && (0, YU.jsx)("div", {
                  children: pU(UU.title)
                }), UU.redDot && (0, YU.jsx)(oU.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, UU.id)
            }))]
          }, null !== (zU = UU.title) && void 0 !== zU ? zU : XU)
        })), zU && (0, YU.jsxs)("div", {
          ...(0, DU.W)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: zU.onClick,
          children: [(0, YU.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, YU.jsx)(FU.d, {
              name: zU.faIcon
            })
          }), (0, YU.jsx)("div", {
            children: pU(zU.title)
          }), (0, YU.jsx)(FU.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var IU = zU(2818),
      pU = zU(1129),
      aU = zU(2616),
      tU = zU(3478),
      gU = zU(97),
      kU = zU(2005),
      GU = zU(2365),
      BU = zU(2372),
      ZU = zU(1726),
      RU = zU(1384),
      PU = zU(5540),
      WU = zU(27),
      dU = zU(34748);

    function LU(UU) {
      let {
        setApplySettingsCallback: XU
      } = UU;
      const {
        clientEscMenuOptions: zU
      } = (0, WU.q)(["clientEscMenuOptions"]), [yU, QU] = (0, cU.useState)(!1), [AU, FU] = (0, cU.useState)(!1), [oU, EU] = (0, cU.useState)(6400), [NU, IU] = (0, cU.useState)(3600), [pU, aU] = (0, cU.useState)(!1), [tU, gU] = (0, cU.useState)(!1);

      function kU(UU) {
        const XU = "screenshot" === UU ? FU : QU;
        XU(!0);
        const zU = pU ? "normals" : tU ? "depth" : null;
        dU.devTools.downloadScene(UU, {
          width: oU,
          height: NU,
          colouring: zU
        }).catch((UU => {
          console.error("Couldn't download the scene", UU)
        })).finally((() => {
          XU(!1)
        }))
      }
      return (0, YU.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, YU.jsx)(PU.e, {
          label: "Disable Ambient Occlusion",
          checked: zU.disableAmbientOcclusion,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              disableAmbientOcclusion: UU
            }), XU((() => PU.k))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), dU.devTools.supports("ambientLight") && (0, YU.jsx)(PU.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: zU.ambientLightIntensity,
          onChange: UU => {
            dU.devTools.setAmbientLightIntensity(UU).then((() => {
              WU.e.setClientEscMenuOptions({
                ambientLightIntensity: UU
              })
            })).catch((UU => {
              console.error("Couldn't set the ambient light", UU)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), dU.devTools.supports("weaponRaycasts") && (0, YU.jsx)(PU.e, {
          label: "Show Weapon Raycasts",
          checked: zU.showWeaponRaycasts,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              showWeaponRaycasts: UU
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), dU.devTools.supports("sceneDownload") && (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, YU.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, YU.jsx)(PU.e, {
              label: "Apply normal-based coloring",
              checked: pU,
              onClick: UU => {
                aU(UU), UU && gU(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, YU.jsx)(PU.e, {
              label: "Apply depth-based coloring",
              checked: tU,
              onClick: UU => {
                gU(UU), UU && aU(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, YU.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, YU.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, YU.jsx)(ZU.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (UU, XU) => {
                  const zU = parseInt(UU) || 6400;
                  EU(zU)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: oU.toString()
              }), (0, YU.jsx)("span", {
                children: "X"
              }), (0, YU.jsx)(ZU.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (UU, XU) => {
                  const zU = parseInt(UU) || 3600;
                  IU(zU)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: NU.toString()
              })]
            }), (0, YU.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, YU.jsxs)(DU.f, {
                onClick: () => {
                  kU("screenshot")
                },
                disabled: AU,
                children: [AU && (0, YU.jsx)(RU.b, {}), "Download Screenshot"]
              }), (0, YU.jsxs)(DU.f, {
                onClick: () => {
                  kU("glb")
                },
                disabled: yU,
                children: [yU && (0, YU.jsx)(RU.b, {}), "Download GLB"]
              })]
            })]
          }), (0, YU.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var eU = zU(142),
      CU = zU(1131),
      wU = zU(34762),
      qU = zU(3335),
      OU = zU(1568),
      SU = zU(1280),
      rU = zU(1250),
      uU = zU(3433),
      fU = zU(2109),
      iU = zU(1545),
      HU = zU(344),
      MU = zU(2381),
      vU = zU(2387),
      VU = zU(3363),
      sU = zU(2923),
      nU = zU(1685),
      mU = zU(3379),
      lU = zU(3435),
      xU = zU(220);
    var JU = zU(1877),
      jU = zU(3354);
    async function KU() {
      try {
        return function(UU) {
          const XU = new Map;
          for (const {
              store: zU,
              status: cU,
              autoRenewStatus: yU,
              managementUrl: QU
            }
            of Object.values(UU.subscriptions)) !(0, VU.k)(zU) || (0, VU.o)(cU) || "willNotRenew" === yU || XU.has(zU) || XU.set(zU, null !== QU && void 0 !== QU ? QU : VU.p[zU]);
          return Array.from(XU, (UU => {
            let [XU, zU] = UU;
            return {
              store: XU,
              managementUrl: zU
            }
          }))
        }(await (0, JU.l)((0, jU.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (UU) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", UU), null
      }
    }

    function bU(UU) {
      const {
        t: XU,
        selectedLanguage: zU
      } = (0, AU.I)(), {
        userContext: yU
      } = (0, pU.d)(), {
        superRankInfo: QU
      } = yU, FU = (0, vU.usePurchasesAllowed)(), oU = UU && ((0, HU.Gc)(QU) || yU.ranksMayChange) && FU, {
        accountId: DU,
        data: EU
      } = (0, sU.k)(mU.e, oU);
      if ((0, cU.useEffect)((() => {
          if (oU) return mU.e.watchAccount(), nU.d.addRefetchListener("billing", (UU => {
            "reconnected" === UU ? mU.e.refreshAfterReconnect() : mU.e.refresh()
          }))
        }), [oU]), !oU || !(0, HU.Gc)(QU) || null === EU || DU !== yU.whamm) return null;
      const YU = function(UU, XU, zU) {
        const cU = lU.d[(0, lU.b)(lU.d, XU)],
          yU = void 0 === cU ? void 0 : (0, xU.b)(UU.entitlements, cU.entitlementId);
        return void 0 === yU || null === yU.expiresAt || (0, VU.h)(yU) <= zU ? null : yU.willRenew && null === yU.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(yU.expiresAt, zU)
        } : {
          renews: !1,
          at: (0, VU.h)(yU)
        }
      }(EU, QU.tier, Date.now());
      if (null === YU) return null;
      const NU = YU.renews ? "store:renewsOn" : "store:endsOn",
        IU = (0, AU.f)(zU.code, NU, YU.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        aU = (0, vU.getBillingStore)(),
        tU = null !== aU && (0, VU.k)(aU) ? function(UU, XU) {
          var zU;
          const cU = Object.values(UU.subscriptions).find((UU => UU.store === XU && !(0, VU.o)(UU.status)));
          return void 0 === cU ? null : null !== (zU = cU.managementUrl) && void 0 !== zU ? zU : VU.p[XU]
        }(EU, aU) : null;
      return {
        text: XU(NU, {
          date: IU
        }),
        manageUrl: tU
      }
    }
    var TU = zU(1420),
      hU = zU(1224),
      UX = zU(5401),
      XX = zU(1521),
      zX = zU(4049),
      cX = zU(2552);

    function yX(UU) {
      let {
        showing: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)(), {
        data: cU,
        failed: yU
      } = (0, sU.k)(zX.f, XU);
      return 0 === (null === cU || void 0 === cU ? void 0 : cU.length) || null === cU && !yU ? null : (0, YU.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, YU.jsx)("div", {
          className: "AccountSettingsLabel",
          children: zU("paymentHistory:title")
        }), null === cU && yU && (0, YU.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: zU("paymentHistory:loadFailed")
        }), null !== cU && (0, YU.jsx)("ul", {
          className: "PaymentHistoryList",
          children: cU.map((UU => (0, YU.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, YU.jsx)(cX.c, {
              entry: UU
            }), (0, YU.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, YU.jsx)("div", {
                children: (0, cX.j)(zU, UU)
              }), (0, YU.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(UU.at).toLocaleDateString(), "number" === typeof UU.orderId && ` \xb7 ${zU("paymentHistory:order",{orderId:UU.orderId})}`]
              })]
            })]
          }, (0, zX.d)(UU))))
        })]
      })
    }
    var QX = zU(3371),
      AX = zU(2396),
      FX = zU(2203);

    function oX() {
      (0, FX.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function DX(UU) {
      let {
        status: XU
      } = UU;
      switch (XU) {
        case "restored":
          return (0, mU.i)(), {
            key: "payments:purchasesRestored",
            failed: !1
          };
        case "nothingToRestore":
          return {
            key: "payments:nothingToRestore", failed: !1
          };
        case "dismissed":
          return null
      }
    }

    function EX() {
      const UU = (0, jU.usePageBillingClient)(),
        {
          userContext: XU
        } = (0, pU.d)(),
        [zU, yU] = (0, cU.useState)(!1),
        [QU, AU] = (0, cU.useState)(null);
      return {
        restoring: zU,
        notice: QU,
        restore: () => {
          XU.isLoggedIn() ? (yU(!0), AU(null), UU.restorePurchases().then(DX, (UU => UU instanceof QX.d && "loginRequired" === UU.code ? (oX(), null) : function(UU) {
            return UU instanceof QX.d && "storeBusy" === UU.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", UU), (0, mU.i)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(UU))).then(AU).finally((() => {
            yU(!1)
          }))) : oX()
        }
      }
    }

    function YX(UU) {
      let {
        restoring: XU,
        notice: zU,
        restore: yU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)(), oU = (0, vU.usePurchasesAllowed)(), EU = (0, vU.getBillingStore)(), NU = (0, cU.useRef)(null);
      return (0, cU.useEffect)((() => {
        var UU;
        null === (UU = NU.current) || void 0 === UU || UU.scrollIntoView({
          block: "nearest"
        })
      }), [zU]), oU && (0, AX.e)(EU) ? (0, YU.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, YU.jsx)(DU.j, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: XU,
          onClick: yU,
          children: FU("payments:restorePurchases")
        }), null !== zU && (0, YU.jsx)("div", {
          ref: NU,
          className: QU()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: zU.failed
          }),
          children: FU(zU.key)
        })]
      }) : null
    }
    var NX = zU(1970),
      IX = zU(1262),
      pX = zU(1410),
      aX = zU(1203),
      tX = zU(1349),
      gX = zU(320),
      kX = zU(2686);
    const GX = {
      appStore: {
        name: "App Store",
        ...gX.dc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...gX.dc.googlePlay
      },
      discord: {
        name: "Discord",
        ...gX.dc.discord
      }
    };

    function BX(UU) {
      let {
        warning: XU,
        subscriptions: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)();
      return null !== zU && 0 === zU.length ? (0, YU.jsx)(YU.Fragment, {
        children: cU(XU)
      }) : (0, YU.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [cU(XU), null === zU && (0, YU.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: cU("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== zU && (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: cU("auth:deleteAccountStoreSubscriptions")
          }), (0, YU.jsx)(kX.d, {
            className: "DeleteAccountSubtitleLinks",
            links: zU.map((UU => {
              let {
                store: XU,
                managementUrl: zU
              } = UU;
              return {
                ...GX[XU],
                url: zU
              }
            }))
          })]
        })]
      })
    }
    var ZX = zU(5113);

    function RX(UU) {
      let {
        showing: XU
      } = UU;
      const {
        userContext: zU,
        isUserContextUpdating: yU
      } = (0, pU.d)(), {
        t: QU
      } = (0, AU.I)(), [FU, oU] = (0, cU.useState)(!1), [EU, NU] = (0, cU.useState)(null), IU = (0, cU.useRef)(XU);
      (0, cU.useEffect)((() => (IU.current = XU, () => {
        IU.current = !1
      })), [XU]);
      const aU = yU || FU;
      return (0, YU.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, YU.jsxs)(DU.G, {
          onClick: async function() {
            if (!FU) {
              oU(!0);
              try {
                const UU = await async function() {
                  const [UU, XU] = await Promise.all([(0, NX.c)(zU.availableUserContextTypes) ? KU() : [], WX(zU)]);
                  if (!IU.current) return IX.c.ok();
                  const cU = (0, SU.b)(zU.getPlayerName(), !gU.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await pX.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: cU
                        }
                      },
                      subtitle: (0, YU.jsx)(BX, {
                        warning: PX(zU.isLoggedIn(), XU),
                        subscriptions: UU
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: XU ? QU("auth:deleteAccountTypedConfirm", {
                        playerName: cU
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return IX.c.ok();
                  const yU = await (0, CU.postJsonWithMetricsCookiesAndJsonResponse)(`${aX.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: WU.e.get("gameState")
                  }, {
                    retries: 3
                  }, zU.getMetricsCookies());
                  if (yU.error) return IX.c.error(yU.error);
                  (0, eU.isDiscordClient)() && (await tX.l.discordActivity()).exit("User deleted their account");
                  return ZX.e.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, CU.forgetStoredGuestAccount)(zU.whamm), (0, CU.forceGlobalSignOut)(!0), IX.c.ok()
                }(), XU = UU.isError() ? UU.asError().message : null;
                NU(XU)
              } catch (UU) {
                console.error("Failed to delete account:", UU), NU(QU("auth:genericDeleteAccountError"))
              }
              oU(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: aU,
          children: [aU && (0, YU.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, YU.jsx)(RU.b, {})
          }), QU("auth:deleteAccount")]
        }), EU && (0, YU.jsx)("div", {
          className: "DeleteAccountError",
          children: EU
        })]
      })
    }

    function PX(UU, XU) {
      return (0, eU.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : UU ? "auth:deleteAccountLossWarning" : XU ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function WX(UU) {
      try {
        const {
          accountCreatedAt: XU
        } = await (0, JU.l)(iU.c.getPlayerProfile(UU, {
          lowerCaseName: UU.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== XU && Date.now() - XU >= 7 * HU.h
      } catch (XU) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", XU), !0
      }
    }
    var dX = zU(3972),
      LX = zU(3982),
      eX = zU(3976);

    function CX(UU) {
      let {
        showing: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)(), {
        data: cU,
        failed: yU
      } = (0, sU.k)(dX.d, XU), QU = null === cU ? null : (0, dX.h)(cU);
      return (0, YU.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, YU.jsx)("div", {
          className: "AccountSettingsLabel",
          children: zU("settingsMenu:blockedAndIgnoredPlayers")
        }), null === QU && !yU && (0, YU.jsx)(RU.b, {}), null === QU && yU && (0, YU.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [zU("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, YU.jsx)(DU.f, {
            className: "SmallTextLight",
            onClick: () => {
              dX.d.refresh()
            },
            children: zU("general:tryAgain")
          })]
        }), 0 === (null === QU || void 0 === QU ? void 0 : QU.length) && (0, YU.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: zU("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== QU && QU.length > 0 && (0, YU.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: QU.map((UU => {
            let {
              name: XU,
              exclusion: cU
            } = UU;
            const yU = eX.g[cU];
            return (0, YU.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, YU.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: XU
              }), (0, YU.jsx)(DU.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, LX.g)(yU, XU, {
                    chatMessage: null
                  })
                },
                children: zU(eX.i[yU].text)
              })]
            }, XU)
          }))
        })]
      })
    }
    var wX = zU(3779),
      qX = zU(5127),
      OX = zU(1936);

    function SX(UU) {
      let {
        userContext: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)(), [yU, QU] = (0, cU.useState)(wX.f), [FU, oU] = (0, cU.useState)(!1);
      return (0, cU.useEffect)((() => (0, wX.p)((() => {
        QU((0, wX.f)())
      }))), []), (0, qX.t)() ? (0, YU.jsx)(PU.e, {
        label: zU("sessionReplayNotice:setting"),
        note: zU("sessionReplayNotice:settingNote"),
        checked: yU,
        disabled: FU,
        onClick: UU => {
          const zU = XU.isLoggedIn();
          if (UU && zU || (0, wX.m)(UU), !zU) return;
          oU(!0);
          const cU = {
            record: UU
          };
          (0, qX.r)("/index/replay/recording-choice", cU, XU.getMetricsCookies()).then((() => {
            UU && (0, wX.m)(!0)
          })).catch((UU => {
            console.error("Couldn't save the session replay recording choice", UU), OX.f.showMessage({
              translationKey: "sessionReplayNotice:settingFailed"
            })
          })).finally((() => {
            oU(!1)
          }))
        }
      }) : null
    }
    const rX = (0, cU.memo)((function(UU) {
      var XU, zU;
      let {
        showing: yU,
        inGame: oU
      } = UU;
      const {
        t: EU,
        selectedLanguage: NU
      } = (0, AU.I)(), {
        hideSocialLocationFrom: aU
      } = (0, WU.q)(["hideSocialLocationFrom"]), tU = (0, vU.usePurchasesAllowed)(), kU = EX(), GU = (0, IU.c)(), {
        userContext: BU,
        isUserContextUpdating: dU
      } = (0, pU.d)(), [LU, VU] = (0, cU.useState)(null !== (XU = BU.getPlayerName()) && void 0 !== XU ? XU : ""), [sU, nU] = (0, cU.useState)(null), {
        purchasing: mU,
        outcome: lU,
        purchase: xU
      } = (0, qU.d)("/super-rank-welcome"), JU = (0, HU.mc)((0, AU.l)(NU.code, "general:timeLeft"), BU.superRankInfo), jU = null === (zU = bU(yU)) || void 0 === zU ? void 0 : zU.text, KU = JU ? EU("general:timeLeft", {
        time: JU
      }) : jU, [zX, cX] = (0, cU.useState)(!1), [QX, AX] = (0, cU.useState)(!1), FX = (0, cU.useRef)(null), oX = (0, cU.useRef)(null), DX = (0, fU.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), NX = null === DX, IX = null !== DX && void 0 !== DX ? DX : [], pX = BU !== CU.NULL_USER_CONTEXT && !BU.isLoggedIn(), aX = pX && 0 !== (null === DX || void 0 === DX ? void 0 : DX.length), [tX, gX] = (0, cU.useState)([]), [kX, GX] = (0, cU.useState)(!1), BX = BU.playerHasRank("youtuber"), ZX = (0, cU.useCallback)((() => iU.c.getPlayerProfile(BU, {
        lowerCaseName: BU.getPlayerName().toLowerCase()
      }).then((UU => {
        gX(UU.socialLinks)
      })).catch((UU => {
        console.error("Failed to refresh social links", UU)
      }))), [BU]);

      function PX(UU) {
        UU !== LU && ((0, SU.m)(UU) ? (UU = (0, SU.o)(UU), nU(EU("homePage:nameCharacters"))) : nU(null), FX.current && (FX.current.value = UU), VU(UU))
      }
      return (0, cU.useEffect)((() => (!0 === yU ? (clearInterval(oX.current), oX.current = setInterval(GU, 1e3)) : clearInterval(oX.current), () => {
        clearInterval(oX.current)
      })), [yU, GU]), (0, cU.useEffect)((() => {
        var UU;
        VU(null !== (UU = BU.getPlayerName()) && void 0 !== UU ? UU : "")
      }), [BU]), (0, cU.useEffect)((() => {
        if (!yU || !BX || dU) return;
        let UU = !1;
        return GX(!0), gX([]), iU.c.getPlayerProfile(BU, {
          lowerCaseName: BU.getPlayerName().toLowerCase()
        }).then((XU => {
          UU || gX(XU.socialLinks)
        })).catch((UU => {
          console.error("Failed to load social links", UU)
        })).finally((() => {
          UU || GX(!1)
        })), () => {
          UU = !0
        }
      }), [yU, BX, dU, BU]), (0, YU.jsxs)("div", {
        className: QU()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: oU
        }),
        children: [oU && (0, YU.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: EU("settingsMenu:accountSettingsInGameWarning")
        }), (0, YU.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, YU.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [EU("homePage:discordNamePopupTitle"), (0, YU.jsxs)(OU.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, rU.j)({
                name: BU.getPlayerName()
              }),
              onClick: () => {
                WU.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, YU.jsx)(FU.d, {
                name: "arrow-up-right-from-square"
              }), " ", EU("profileCard:viewProfile")]
            })]
          }), (0, YU.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, YU.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [gU.featureFlags.canChangeName && (0, YU.jsx)(ZU.e, {
                className: "EnterName",
                placeholderText: EU("homePage:enterName"),
                maxLength: SU.h,
                defaultValue: LU,
                onValueChange: UU => {
                  PX(UU)
                },
                forcedText: zX || !gU.featureFlags.canChangeName ? LU : null,
                blurOnEnter: !0,
                domRef: FX
              }), (0, YU.jsx)(DU.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  PX((0, SU.f)())
                },
                children: (0, YU.jsx)(FU.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !gU.featureFlags.canChangeName && (0, YU.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, SU.b)(LU, !gU.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, YU.jsx)(DU.f, {
              className: "ChooseNameButton",
              disabled: zX || LU === BU.getPlayerName(),
              onClick: () => {
                LU.length < SU.j ? nU(EU("homePage:changeNameMinLengthError", {
                  length: SU.j
                })) : LU.length > SU.h ? nU(EU("homePage:changeNameMaxLengthError", {
                  length: SU.h
                })) : (cX(!0), nU(null), (0, wU.h)(BU, LU).then((UU => {
                  cX(!1), "taken" === UU.outcome ? nU(EU("homePage:nameTaken")) : "refused" === UU.outcome ? nU(UU.message) : "failed" === UU.outcome && nU(EU((0, wU.f)(UU.failure)))
                })))
              },
              children: EU("general:choose")
            })]
          }), sU && (0, YU.jsx)("div", {
            className: "ChooseAccNameError",
            children: sU
          })]
        }), (0, YU.jsx)(SX, {
          userContext: BU
        }), (0, YU.jsx)(PU.e, {
          label: (() => {
            if ((0, hU.k)(aU)) {
              const UU = (0, AU.l)(NU.code, "general:timeLeft"),
                XU = (0, HU.eb)(UU, Date.now(), aU + hU.i);
              return `${EU("settingsMenu:hideSocialLocation")} (${EU("general:timeLeft",{time:XU})})`
            }
            return EU("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const UU = !(0, hU.k)(aU);
            (0, XX.reportAnalyticsClick)({
              id: "social.hide_location",
              value: UU ? "on" : "off"
            }), AX(!0), iU.c.setHideSocialLocation(BU, UU).then((() => {
              WU.e.set({
                hideSocialLocationFrom: UU ? Date.now() : null
              })
            })).finally((() => {
              AX(!1)
            }))
          },
          checked: (0, hU.k)(aU),
          disabled: QX
        }), BX && (0, YU.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, YU.jsx)("div", {
            className: "AccountSettingsLabel",
            children: EU("settingsMenu:socialLinks")
          }), kX && (0, YU.jsx)(RU.b, {}), !kX && (0, YU.jsx)(UX.e, {
            socialLinks: tX,
            editable: !0,
            userContext: BU,
            onLinksUpdated: ZX
          })]
        }), (0, YU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YU.jsx)("div", {
            className: "AccountSettingsLabel",
            children: EU(aX ? "auth:loginOrSwitchAccount" : "auth:login")
          }), NX && (0, YU.jsx)(RU.b, {}), !NX && 0 === IX.length && (0, YU.jsx)("div", {
            className: "NoLoginOptions",
            children: EU("auth:noLoginOptions")
          }), !NX && IX.length > 0 && "crazygames" !== eU.siteUsed && (0, YU.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: IX
          }), !NX && IX.length > 0 && "crazygames" === eU.siteUsed && (0, YU.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [IX[0], IX.length > 1 && (0, YU.jsxs)(YU.Fragment, {
              children: [(0, YU.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, YU.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: EU("auth:legacyLoginOptions")
                }), (0, YU.jsx)(TU.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: EU("auth:legacyLoginOptionsInfo")
                })]
              }), (0, YU.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: IX.slice(1)
              })]
            })]
          }), gU.featureFlags.useLogin && (null !== BU.loggedInInfo || BU.isLoggedIn()) && (0, YU.jsxs)(YU.Fragment, {
            children: [(0, YU.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, YU.jsxs)(DU.G, {
              onClick: () => {
                (0, CU.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, YU.jsx)(FU.d, {
                name: "right-from-bracket"
              }), EU("auth:signOut")]
            })]
          })]
        }), !BU.playerHasRank("super") && tU && (0, YU.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, YU.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, YU.jsx)(FU.d, {
              name: "bolt"
            }), EU("homePage:superRank")]
          }), (0, YU.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, YU.jsxs)(DU.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, MU.l)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, YU.jsx)(FU.d, {
                name: "bolt"
              }), EU("homePage:getSuperRank")]
            }), (0, YU.jsxs)(DU.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, MU.l)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, YU.jsx)(FU.d, {
                name: "bolt"
              }), EU("homePage:giftSuperRank")]
            })]
          }), (0, YU.jsx)(YX, {
            ...kU
          })]
        }), BU.playerHasRank("super") && (0, YU.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, YU.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, YU.jsx)(FU.d, {
              name: "bolt"
            }), EU("homePage:superRank"), KU && (0, YU.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", KU, ")"]
            })]
          }), tU && (0, YU.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, HU.Gc)(BU.superRankInfo) && (0, YU.jsxs)(DU.l, {
              className: "AccountSettingsSuperRankProlong",
              loading: mU,
              onClick: () => {
                xU(uU.n.id, null)
              },
              children: [(0, YU.jsx)(FU.d, {
                name: "bolt"
              }), EU("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: uU.n.product.days,
                price: uU.n.price
              })]
            }), (0, YU.jsxs)(DU.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, MU.l)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, YU.jsx)(FU.d, {
                name: "bolt"
              }), EU("homePage:giftSuperRank")]
            })]
          }), lU && (0, YU.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: EU(lU.translationKey)
          }), (0, YU.jsx)(YX, {
            ...kU
          })]
        }), (0, YU.jsx)(yX, {
          showing: yU
        }), gU.featureFlags.useSocialFeatures && (0, YU.jsx)(CX, {
          showing: yU
        }), (0, YU.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, YU.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, YU.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: EU(uX(pX, aX))
            }), (0, eU.isDiscordClient)() && (0, YU.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: EU("auth:discordActivityKickWarning")
            }), (0, YU.jsx)(RX, {
              showing: yU
            })]
          }), (0, YU.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: EU(pX ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function uX(UU, XU) {
      return UU ? XU ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var fX = zU(34767),
      iX = zU(3490),
      HX = zU(1266),
      MX = zU(1482),
      vX = zU(2047),
      VX = zU(9457),
      sX = zU(34771);

    function nX() {
      const {
        t: UU
      } = (0, AU.I)();
      return (0, vX.i)("localPlayerAlive") ? (0, YU.jsx)(VX.c, {
        icon: "camera-alt",
        title: UU("screenshotMode:title"),
        sub: UU("screenshotMode:entrySub"),
        onClick: sX.d
      }) : null
    }
    var mX = zU(34782);
    const lX = (0, cU.memo)((function(UU) {
        let {
          inGame: XU
        } = UU;
        const {
          t: zU,
          selectedLanguage: cU
        } = (0, AU.I)(), {
          clientEscMenuOptions: yU,
          showDebugOverlay: QU,
          isTouchScreen: FU
        } = (0, WU.q)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), oU = (0, aU.f)("hideCoordinates");
        let DU = "settingsMenu:showCoordinates",
          EU = "settingsMenu:showChunkCoordinates";

        function NU(UU) {
          const XU = new Intl.DisplayNames([UU], {
            type: "language"
          }).of(UU);
          return XU.charAt(0).toUpperCase() + XU.slice(1)
        }
        return oU && (DU = "settingsMenu:showCoordinatesHidden", EU = "settingsMenu:showChunkCoordinatesHidden"), (0, YU.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [XU && gU.featureFlags.canUseInviteLinks && (0, YU.jsxs)("div", {
            className: "SettingBox",
            children: [(0, YU.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: zU("settingsMenu:inviteLink")
            }), (0, YU.jsx)(fX.i, {})]
          }), (0, YU.jsxs)("div", {
            className: "SettingBox",
            children: [(0, YU.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: zU("settingsMenu:language")
            }), (0, YU.jsx)(iX.d, {
              options: Object.entries(AU.i).map((UU => {
                let [XU, zU] = UU;
                return {
                  label: (0, YU.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, YU.jsx)("img", {
                      src: zU.flagImg,
                      alt: "flag"
                    }), (0, YU.jsxs)("span", {
                      children: [NU(XU), " ", (0, YU.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", XU, ")"]
                      })]
                    })]
                  }),
                  value: XU
                }
              })),
              value: cU.code,
              onChange: UU => {
                HX.h.get().setCurrentLanguage(UU.value)
              }
            })]
          }), XU && FU && (0, mX.e)() && (0, YU.jsx)(nX, {}), !(0, gU.isMobileApp)() && (0, MX.e)() && gU.featureFlags.useForceRotateForceFullscreenOverlay && (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:disableFullscreenMode"),
            checked: yU.disableFullscreen,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                disableFullscreen: UU
              })
            }
          }), (0, YU.jsx)(PU.e, {
            label: zU(DU),
            checked: yU.showCoordinates,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                showCoordinates: UU
              })
            },
            disabled: oU
          }), (0, YU.jsx)(PU.e, {
            label: zU(EU),
            checked: yU.showChunkCoordinates,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                showChunkCoordinates: UU
              })
            },
            disabled: oU
          }), (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:showFps"),
            checked: yU.showFPS,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                showFPS: UU
              })
            }
          }), (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:disableBunnyHopping"),
            checked: yU.disableBunnyHopping,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                disableBunnyHopping: UU
              })
            }
          }), (0, tX.t)() && (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:showChat"),
            checked: yU.showChat,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                showChat: UU
              })
            }
          }), (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:showDebugOverlay"),
            checked: QU,
            onClick: UU => {
              WU.e.set({
                showDebugOverlay: UU
              })
            }
          }), gU.featureFlags.useSocialFeatures && (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:showFriendOnlineToasts"),
            checked: yU.showFriendOnlineToasts,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                showFriendOnlineToasts: UU
              })
            }
          }), (0, YU.jsx)(PU.e, {
            label: zU("settingsMenu:showNewItemIndicator"),
            checked: yU.showNewItemIndicator,
            onClick: UU => {
              WU.e.setClientEscMenuOptions({
                showNewItemIndicator: UU
              })
            }
          })]
        })
      })),
      xX = (0, cU.memo)((function() {
        const {
          t: UU
        } = (0, AU.I)(), {
          soundVolume: XU,
          musicVolume: zU
        } = (0, WU.q)(["soundVolume", "musicVolume"]);
        return (0, YU.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, YU.jsx)(PU.j, {
            name: UU("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: zU,
            onChange: UU => {
              WU.e.set({
                musicVolume: Math.round(100 * UU) / 100
              })
            },
            format: UU => UU.toFixed(2)
          }), (0, YU.jsx)(PU.j, {
            name: UU("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: XU,
            onChange: UU => {
              WU.e.set({
                soundVolume: Math.round(100 * UU) / 100
              })
            },
            format: UU => UU.toFixed(2)
          })]
        })
      }));
    var JX = zU(755),
      jX = zU(1492),
      KX = zU(2548),
      bX = zU(2535),
      TX = zU(3873);
    const hX = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Uz() {
      const {
        t: UU
      } = (0, AU.I)(), XU = (0, TX.b)(), {
        mobilePushNotificationsCanAsk: zU
      } = (0, WU.q)(["mobilePushNotificationsCanAsk"]), [yU, QU] = (0, cU.useState)(null), [FU, oU] = (0, cU.useState)(!1), [EU, NU] = (0, cU.useState)(null), [IU, pU] = (0, cU.useState)(!1), aU = (0, cU.useCallback)((() => {
        (0, KX.c)().then((UU => {
          XU.current && (QU(UU), oU(!1))
        })).catch((UU => {
          console.error("Failed to load push notification targets:", UU), XU.current && oU(!0)
        }))
      }), [XU]), tU = (0, cU.useCallback)((() => {
        (0, bX.g)().then((UU => {
          XU.current && NU((() => UU))
        }))
      }), [XU]);
      (0, cU.useEffect)((() => {
        aU()
      }), [aU]), (0, cU.useEffect)((() => {
        tU()
      }), [tU, zU]), (0, jX.f)(KX.i, aU);
      const gU = null === yU ? [] : Object.keys(hX).filter((UU => yU[UU] > 0));
      return (0, YU.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, YU.jsx)("div", {
          className: "SliderText",
          children: UU("notificationSettings:pushNotifications")
        }), null === yU && FU && (0, YU.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: UU("notificationSettings:pushTargetsLoadFailed")
        }), null !== yU && 0 === gU.length && (0, YU.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: UU("notificationSettings:pushTargetsNone")
        }), gU.length > 0 && (0, YU.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: gU.map((XU => {
            var zU;
            return (0, YU.jsx)("li", {
              children: UU(hX[XU], {
                count: null !== (zU = null === yU || void 0 === yU ? void 0 : yU[XU]) && void 0 !== zU ? zU : 0
              })
            }, XU)
          }))
        }), null !== EU && (0, YU.jsx)(DU.f, {
          className: "PushNotificationSettingsButton",
          loading: IU,
          onClick: () => {
            pU(!0), EU().catch((UU => {
              console.error("Failed to turn on push notifications:", UU)
            })).finally((() => {
              XU.current && (pU(!1), tU())
            }))
          },
          children: UU("notificationSettings:pushTurnOn")
        })]
      })
    }
    var Xz = zU(2747),
      zz = zU(2523),
      cz = zU(42);
    async function yz() {
      return "dailyDropReminderAsked_" + (await CU.userContextManager.getCurrentUserContext()).whamm
    }

    function Qz(UU) {
      return async function(UU) {
        if (UU.remindersOn || (0, WU.h)(WU.e.get("gameState"))) return null;
        const XU = await yz();
        if (null !== cz.k.getItem(XU)) return null;
        const [zU, cU] = await Promise.all([(0, bX.g)().catch((UU => (console.error("Couldn't tell whether this device can take push notifications:", UU), null))), Az()]);
        if (null === zU && !cU) return null;
        if (null !== zU && ((0, zz.e)() || (0, bX.k)())) return null;
        return {
          askedKey: XU,
          requester: zU
        }
      }(UU).catch((UU => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", UU), null)))
    }

    function Az() {
      return (0, KX.c)().then((UU => UU.app + UU.browser + UU.msnPlay > 0), (UU => (console.error("Couldn't tell where push notifications reach this account:", UU), !0)))
    }
    async function Fz(UU) {
      const XU = (0, Xz.n)({
          remindersOn: !0
        }),
        zU = null === UU ? Promise.resolve() : UU(),
        [cU, yU] = await Promise.allSettled([XU, zU]);
      "rejected" === cU.status && console.error("Failed to turn on Lucky Skin Block reminders:", cU.reason), "rejected" === yU.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", yU.reason), "rejected" !== cU.status && "rejected" !== yU.status || OX.f.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const oz = {
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
      Dz = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function Ez(UU) {
      let {
        setting: XU,
        value: zU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)(), FU = (0, TX.b)(), [oU, DU] = (0, cU.useState)(null), [EU, NU] = (0, cU.useState)(!1), [IU, pU] = (0, cU.useState)(null);
      return (0, cU.useEffect)((() => {
        "remindersOn" === XU && (0, bX.g)().then((UU => {
          FU.current && pU((() => UU))
        }), (UU => {
          console.error("Couldn't tell whether this device can take push notifications:", UU)
        }))
      }), [XU, FU]), (0, YU.jsx)(PU.e, {
        className: QU()({
          DailyDropSettingFailed: EU
        }),
        label: yU(Dz[XU].label),
        checked: null !== oU && void 0 !== oU ? oU : zU,
        note: EU ? yU("dailyDrop:settingFailed") : void 0,
        onClick: UU => {
          null === oU && (DU(UU), NU(!1), UU && null !== IU && IU().catch((UU => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", UU)
          })), (0, Xz.m)("daily_drop.setting", `${Dz[XU].reportAs}_${UU?"on":"off"}`), "remindersOn" === XU && yz().then((UU => {
            cz.k.setItem(UU, !0)
          }), (UU => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", UU)
          })), (0, Xz.n)("hidden" === XU ? {
            hidden: UU
          } : {
            remindersOn: UU
          }).catch((UU => {
            console.error(`Failed to save the Lucky Skin Block's ${XU} setting:`, UU), FU.current && NU(!0)
          })).finally((() => {
            FU.current && DU(null)
          })))
        }
      })
    }
    const Yz = (0, cU.memo)((function() {
      const {
        t: UU
      } = (0, AU.I)(), {
        clientEscMenuOptions: XU
      } = (0, WU.q)(["clientEscMenuOptions"]), {
        userContext: zU
      } = (0, pU.d)(), cU = zU.dailyDrop;
      return (0, YU.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [gU.featureFlags.useSocialFeatures && (0, YU.jsx)(PU.i, {
          label: UU("notificationSettings:friendRequests"),
          options: JX.e.map((XU => ({
            value: XU,
            label: UU(oz[XU].label)
          }))),
          value: XU.friendRequestNotifications,
          onChange: UU => {
            WU.e.setClientEscMenuOptions({
              friendRequestNotifications: UU
            })
          },
          circleInfoText: (0, YU.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: JX.e.map((XU => (0, YU.jsxs)("div", {
              children: [(0, YU.jsx)("b", {
                children: UU(oz[XU].label)
              }), ": ", UU(oz[XU].info)]
            }, XU)))
          })
        }), null !== cU && (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsx)(Ez, {
            setting: "remindersOn",
            value: cU.remindersOn
          }), (0, YU.jsx)(Ez, {
            setting: "hidden",
            value: cU.hidden
          })]
        }), (0, YU.jsx)(Uz, {})]
      })
    }));
    var Nz = zU(4941),
      Iz = zU(212),
      pz = zU(316),
      az = zU(7253),
      tz = zU(3849),
      gz = zU(34784),
      kz = zU(646),
      Gz = zU(31);
    var Bz = zU(687),
      Zz = zU(4783);
    const Rz = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Pz(UU) {
      return Rz.has(UU) ? kU.gameBridge.lookup("nG", null) : null
    }

    function Wz(UU) {
      if (!(0, kz.P)(WU.e.get("clientEscMenuOptions")[UU])) return WU.e.get("clientEscMenuOptions")[UU];
      const XU = Pz(UU);
      return null !== XU ? XU[Rz.get(UU)] : cz.k.getItem(UU)
    }

    function dz(UU, XU) {
      if ("useTouchControls" === UU) return void(0, Zz.c)(XU);
      UU in WU.e.get("clientEscMenuOptions") && WU.e.setClientEscMenuOptions({
        [UU]: XU
      });
      const zU = Pz(UU);
      null !== zU && kU.gameBridge.send("setChunkAddDistance", {
        ...zU,
        [Rz.get(UU)]: XU
      }), cz.k.setItem(UU, XU)
    }
    var Lz = zU(4848),
      ez = zU(34791),
      Cz = zU(34798),
      wz = zU(4938),
      qz = zU(34816);

    function Oz(UU) {
      var XU, yU, FU, oU;
      let {
        minChunkAddDist: DU,
        getValue: EU,
        onChange: NU,
        setApplySettingsCallback: IU
      } = UU;
      const {
        t: pU
      } = (0, AU.I)(), {
        clientEscMenuOptions: tU
      } = (0, WU.q)(["clientEscMenuOptions", "showDistantNametags"]), kU = (0, cU.useRef)(EU("showFog")), GU = (0, cU.useRef)(tU.antiAliasing), BU = (0, cU.useRef)(tU.useWebGpu), [ZU, RU] = (0, cU.useState)(null), [LU, eU] = (0, cU.useState)(!1), [CU, wU] = (0, cU.useState)((() => (0, tz.d)(gU.featureFlags.settings.canUseShaderPacks))), [qU] = (0, cU.useState)((() => WU.e.isWebGpuDefaultOff())), [OU] = (0, cU.useState)(pz.l), [SU, rU] = (0, cU.useState)(!1);
      (0, cU.useEffect)((() => {
        const UU = () => {
          rU((0, Cz.q)())
        };
        return UU(), (0, Cz.w)(UU)
      }), []), (0, jX.f)("appManagerUpdated|clientEscMenuOptions", (() => {
        rU((0, Cz.q)())
      }));
      const [uU] = (0, cU.useState)((() => !0 === cz.k.getItem(gX.vc))), [fU] = (0, cU.useState)((() => WU.e.isWebGpuOnStored()));
      (0, cU.useEffect)((() => {
        let UU = !1;
        return (0, gU.hasUsableWebGpuAdapter)().then((async XU => {
          const zU = uU || fU,
            cU = !XU && Bz.H && await (0, qz.c)(zU);
          UU || (RU(XU || cU), eU(cU))
        })), (0, tz.k)(gU.featureFlags.settings.canUseShaderPacks) && (0, az.f)().then((async XU => {
          const cU = null !== XU && await async function(UU) {
            const [{
              isShaderPackActive: XU
            }, {
              loadPageShaderPackCompiler: cU
            }] = await Promise.all([zU.e(151).then((() => zU(7251))), Promise.all([zU.e(89), zU.e(147), zU.e(150)]).then((() => zU(7209)))]);
            return XU(UU, await cU())
          }(XU);
          UU || wU(cU)
        })), () => {
          UU = !0
        }
      }), [uU, fU]);
      const iU = (!(CU && !uU) || !LU) && ZU,
        HU = function(UU, XU, zU, cU, yU) {
          return (0, gz.d)(zU, cU) && !0 === XU ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== XU ? "settingsMenu:newWebGpu" : yU ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: UU && !1 !== XU,
            disabled: !0 !== XU
          }
        }(tU.useWebGpu, iU, CU, qU, OU),
        MU = (tU.useWebGpu || (0, gz.d)(CU, qU)) && CU && !0 === iU,
        vU = (0, aU.f)("lightingOverride"),
        VU = !(0, kz.P)(vU);
      let sU = "settingsMenu:enableLighting";
      VU && (sU = vU ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const nU = UU => {
          var XU, zU, cU;
          const yU = null !== (XU = UU.showFog) && void 0 !== XU ? XU : EU("showFog"),
            QU = null !== (zU = UU.antiAliasing) && void 0 !== zU ? zU : tU.antiAliasing,
            AU = null !== (cU = UU.useWebGpu) && void 0 !== cU ? cU : tU.useWebGpu,
            FU = !Bz.H && yU !== kU.current || QU !== GU.current || AU !== BU.current;
          IU(FU ? () => PU.k : null)
        },
        mU = (0, aU.f)("fogChunkDistanceOverride"),
        lU = (0, aU.f)("fogBlockDistanceOverride"),
        xU = !(0, kz.P)(mU) || !(0, kz.P)(lU),
        JU = xU ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [jU, KU] = (0, Nz.h)(DU),
        [bU, TU] = (0, wz.i)(DU),
        hU = pU("settingsMenu:chunkLoadDistanceDeviceLimit"),
        UX = bU < jU,
        XX = Math.min(null !== (XU = EU("chunkHorizAddDist")) && void 0 !== XU ? XU : DU[0], bU),
        zX = !xU && function(UU, XU) {
          return !0 === UU.showFog && UU.fogChunkDistance > XU
        }(tU, XX);
      return (0, YU.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, YU.jsx)(PU.j, {
          name: pU("settingsMenu:horizontalChunkLoadDistance"),
          min: DU[0],
          max: jU,
          selectableMax: bU,
          cappedNote: hU,
          step: 1,
          initValue: XX,
          onChange: UU => {
            !0 === EU("showFog") && UU < EU("fogChunkDistance") && NU("fogChunkDistance", UU), NU("chunkHorizAddDist", UU), Gz.k.UY("updatedChunkLoadDist")
          },
          circleInfoText: pU("settingsMenu:chunkLoadDistanceInfo")
        }), (0, YU.jsx)(PU.j, {
          name: pU("settingsMenu:verticalChunkLoadDistance"),
          min: DU[1],
          max: KU,
          selectableMax: TU,
          cappedNote: UX ? void 0 : hU,
          step: 1,
          initValue: Math.min(null !== (yU = EU("chunkVertAddDist")) && void 0 !== yU ? yU : DU[1], TU),
          onChange: UU => {
            NU("chunkVertAddDist", UU), Gz.k.UY("updatedChunkLoadDist")
          },
          circleInfoText: pU("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, YU.jsx)(PU.e, {
          label: pU("settingsMenu:chunkFadeIn"),
          checked: tU.chunkFadeIn,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              chunkFadeIn: UU
            })
          },
          circleInfoText: pU("settingsMenu:chunkFadeInInfo")
        }), dU.devTools.supports("chunkBorders") && (0, YU.jsx)(PU.e, {
          label: pU("settingsMenu:showChunkBorders"),
          checked: tU.showChunkBorders,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              showChunkBorders: UU
            })
          },
          circleInfoText: pU("settingsMenu:showChunkBordersInfo")
        }), (0, YU.jsx)(PU.e, {
          label: pU(sU),
          checked: tU.enableLighting,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              enableLighting: UU
            })
          },
          disabled: VU
        }), (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, YU.jsx)(PU.e, {
            label: pU(JU),
            checked: tU.showFog,
            onClick: UU => {
              nU({
                showFog: UU
              }), WU.e.setClientEscMenuOptions({
                showFog: UU
              })
            },
            disabled: xU,
            className: QU()({
              SettingBoxWarning: zX
            })
          }), (0, YU.jsx)(PU.j, {
            name: pU("settingsMenu:fogChunkDistance"),
            min: DU[0],
            max: Iz.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (FU = tU.fogChunkDistance) && void 0 !== FU ? FU : DU[0],
            onChange: UU => {
              WU.e.setClientEscMenuOptions({
                fogChunkDistance: UU
              }), Gz.k.UY("fogChunkDistanceChanged", UU)
            },
            circleInfoText: pU("settingsMenu:fogChunkDistanceInfo"),
            disabled: xU || !1 === EU("showFog"),
            className: QU()({
              SettingBoxWarning: zX
            })
          }), zX && (0, YU.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: pU("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Bz.H && (0, YU.jsx)(PU.e, {
          label: pU(MU ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !MU && tU.disableTexAtlas,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              disableTexAtlas: UU
            })
          },
          circleInfoText: pU("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: MU
        }), (0, YU.jsx)(PU.j, {
          name: pU("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: tU.cameraFOV,
          onChange: UU => {
            WU.e.setClientEscMenuOptions({
              cameraFOV: UU
            })
          }
        }), (0, YU.jsx)(PU.e, {
          label: pU("settingsMenu:disableViewBobbing"),
          checked: tU.disableBobbing,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              disableBobbing: UU
            })
          },
          circleInfoText: pU("settingsMenu:disableViewBobbingInfo")
        }), (0, YU.jsx)(PU.e, {
          label: pU("settingsMenu:antiAliasing"),
          checked: tU.antiAliasing,
          onClick: UU => {
            nU({
              antiAliasing: UU
            }), (0, Lz.f)("antiAliasing"), WU.e.setClientEscMenuOptions({
              antiAliasing: UU
            })
          },
          circleInfoText: pU("settingsMenu:antiAliasingInfo")
        }), (0, YU.jsx)(PU.j, {
          name: pU("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (oU = tU.pixelScale) && void 0 !== oU ? oU : 1,
          onChange: UU => {
            (UU !== WU.e.get("clientEscMenuOptions").pixelScale || (0, Cz.m)()) && (0, Lz.f)("pixelScale"), WU.e.setClientEscMenuOptions({
              pixelScale: UU
            })
          },
          circleInfoText: pU("settingsMenu:pixelScaleInfo"),
          note: SU ? pU("settingsMenu:pixelScaleLowered") : void 0,
          format: UU => `${UU}x`
        }), (0, YU.jsx)(PU.e, {
          label: pU("settingsMenu:pixelSmoothing"),
          checked: tU.pixelSmoothing,
          onClick: UU => {
            WU.e.setClientEscMenuOptions({
              pixelSmoothing: UU
            })
          },
          circleInfoText: pU("settingsMenu:pixelSmoothingInfo")
        }), Bz.H && (0, YU.jsx)(PU.e, {
          label: pU("settingsMenu:distantNametags"),
          checked: (0, ez.e)(),
          onClick: UU => {
            WU.e.set({
              showDistantNametags: UU
            })
          },
          circleInfoText: pU("settingsMenu:distantNametagsInfo")
        }), (0, YU.jsx)(PU.e, {
          label: pU(HU.translationKey),
          checked: HU.checked,
          onClick: UU => {
            nU({
              useWebGpu: UU
            }), WU.e.setClientEscMenuOptions({
              useWebGpu: UU
            })
          },
          circleInfoText: pU("settingsMenu:newWebGpuInfo"),
          disabled: HU.disabled
        })]
      })
    }
    var Sz = zU(4841),
      rz = zU(9441),
      uz = zU(34824),
      fz = zU(9447),
      iz = zU(34827);
    const Hz = {
        color: 16777215,
        name: "white"
      },
      Mz = {
        color: 0,
        name: "black"
      },
      vz = [Hz, {
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
      }, Mz],
      Vz = [Mz, Hz];

    function sz(UU) {
      return `${UU} px`
    }

    function nz(UU) {
      return `${UU}%`
    }

    function mz(UU) {
      let {
        label: XU,
        value: zU,
        swatches: cU,
        onChange: yU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)(), oU = !cU.some((UU => UU.color === zU));
      return (0, YU.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, YU.jsx)("div", {
          className: "SliderText",
          children: XU
        }), (0, YU.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": XU,
          children: [cU.map((UU => {
            let {
              color: XU,
              name: cU
            } = UU;
            return (0, YU.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": XU === zU,
              "aria-label": FU(`crosshairSettings:color_${cU}`),
              "data-pad-focusable": !0,
              className: QU()("CrosshairSwatch", {
                Selected: XU === zU
              }),
              style: {
                background: (0, iz.i)(XU)
              },
              onClick: () => {
                yU(XU)
              }
            }, XU)
          })), (0, YU.jsx)("label", {
            className: QU()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: oU
            }),
            style: oU ? {
              background: (0, iz.i)(zU)
            } : void 0,
            title: FU("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, YU.jsx)("input", {
              type: "color",
              "aria-label": FU("crosshairSettings:customColor"),
              value: (0, iz.i)(zU),
              onChange: UU => {
                const XU = (0, iz.p)(UU.target.value);
                null !== XU && yU(XU)
              }
            })
          })]
        })]
      })
    }

    function lz(UU) {
      let {
        settings: XU,
        onChange: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)(), yU = (UU, cU) => {
        zU((0, iz.s)(XU, UU, cU))
      }, QU = function(UU, zU) {
        let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sz;
        const {
          min: QU,
          max: AU,
          step: FU
        } = iz.e[UU];
        return (0, YU.jsx)(PU.j, {
          name: zU,
          min: QU,
          max: AU,
          step: FU,
          initValue: XU[UU],
          format: cU,
          onChange: XU => {
            yU(UU, XU)
          }
        }, UU)
      }, FU = ["lines", "dot", "circle"].filter((UU => XU[UU])), oU = (UU, zU, cU) => (0, YU.jsx)(PU.e, {
        label: zU,
        checked: XU[UU],
        disabled: 1 === FU.length && FU[0] === UU,
        circleInfoText: cU,
        onClick: XU => {
          yU(UU, XU)
        }
      }, UU), DU = "shapes" === XU.style;
      return (0, YU.jsxs)(YU.Fragment, {
        children: [(0, YU.jsx)(PU.i, {
          label: cU("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: cU("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: cU("crosshairSettings:styleShapes")
          }],
          value: XU.style,
          onChange: UU => {
            yU("style", UU)
          }
        }), (0, YU.jsx)(mz, {
          label: cU("crosshairSettings:color"),
          value: XU.color,
          swatches: vz,
          onChange: UU => {
            yU("color", UU)
          }
        }), QU("opacity", cU("crosshairSettings:opacity"), nz), !DU && QU("size", cU("crosshairSettings:size"), nz), DU && (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oU("lines", cU("crosshairSettings:lines")), XU.lines && QU("lineLength", cU("crosshairSettings:lineLength")), XU.lines && QU("lineThickness", cU("crosshairSettings:lineThickness")), XU.lines && QU("gap", cU("crosshairSettings:gap")), XU.lines && oU("tStyle", cU("crosshairSettings:tStyle"))]
        }), DU && (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oU("dot", cU("crosshairSettings:dot")), XU.dot && QU("dotSize", cU("crosshairSettings:dotSize"))]
        }), DU && (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oU("circle", cU("crosshairSettings:circle")), XU.circle && QU("circleRadius", cU("crosshairSettings:circleRadius")), XU.circle && QU("circleThickness", cU("crosshairSettings:circleThickness"))]
        }), (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QU("outline", cU("crosshairSettings:outline"), (UU => UU > 0 ? sz(UU) : cU("crosshairSettings:off"))), XU.outline > 0 && (0, YU.jsx)(mz, {
            label: cU("crosshairSettings:outlineColor"),
            value: XU.outlineColor,
            swatches: Vz,
            onChange: UU => {
              yU("outlineColor", UU)
            }
          })]
        }), oU("growOnClick", cU("crosshairSettings:growOnClick")), DU && oU("forGuns", cU("crosshairSettings:forGuns"), cU("crosshairSettings:forGunsInfo"))]
      })
    }
    var xz = zU(73),
      Jz = zU(1294),
      jz = zU(13576),
      Kz = zU(14713),
      bz = zU(16190),
      Tz = zU(16681);
    const hz = ["sky", "grass", "stone", "sand", "snow", "night"],
      Uc = "4rem";

    function Xc(UU) {
      return {
        backgroundImage: `url(${UU})`,
        backgroundSize: `${Uc} ${Uc}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function zc(UU) {
      return {
        ...(() => {
          switch (UU) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Xc(jz);
            case "stone":
              return Xc(Kz);
            case "sand":
              return Xc(bz);
            case "snow":
              return Xc(Tz);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function cc(UU) {
      return Object.freeze({
        ...iz.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...UU
      })
    }
    const yc = [{
        id: "default",
        settings: iz.g
      }, {
        id: "cross",
        settings: cc({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: cc({
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
        settings: cc({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: cc({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: cc({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: cc({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: cc({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Qc = ["growOnClick", "forGuns"];
    var Ac = zU(34835);

    function Fc(UU) {
      let {
        label: XU,
        selected: zU,
        onClick: cU,
        className: yU,
        style: AU,
        children: FU
      } = UU;
      return (0, YU.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": zU,
        title: XU,
        "aria-label": XU,
        "data-pad-focusable": !0,
        className: QU()("CrosshairBackdropSwatch", yU, {
          Selected: zU
        }),
        style: AU,
        onClick: cU,
        children: FU
      })
    }

    function oc(UU) {
      let {
        backdrop: XU,
        onChange: zU,
        game: cU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)();
      return (0, YU.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": yU("crosshairSettings:background"),
        children: [cU && (0, YU.jsx)(Fc, {
          label: yU("crosshairSettings:bg_game"),
          selected: cU.selected,
          onClick: cU.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, YU.jsx)(FU.d, {
            name: "cube"
          })
        }), hz.map((UU => (0, YU.jsx)(Fc, {
          label: yU(`crosshairSettings:bg_${UU}`),
          selected: !(null !== cU && void 0 !== cU && cU.selected) && UU === XU,
          style: zc(UU),
          onClick: () => {
            zU(UU)
          }
        }, UU)))]
      })
    }

    function Dc(UU) {
      let {
        settings: XU,
        touch: zU,
        backdrop: cU,
        onChange: yU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)(), oU = function(UU) {
        var XU;
        return null !== (XU = yc.find((XU => (0, iz.q)(XU.settings, UU, Qc)))) && void 0 !== XU ? XU : null
      }(XU);
      return (0, YU.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": FU("crosshairSettings:presets"),
        children: yc.map((UU => {
          const AU = (null === oU || void 0 === oU ? void 0 : oU.id) === UU.id;
          return (0, YU.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": AU,
            "data-pad-focusable": !0,
            className: QU()("CrosshairPreset", {
              Selected: AU
            }),
            onClick: () => {
              yU(function(UU, XU) {
                return {
                  ...XU.settings,
                  growOnClick: UU.growOnClick,
                  forGuns: UU.forGuns
                }
              }(XU, UU))
            },
            children: [(0, YU.jsx)("div", {
              className: "CrosshairPresetStage",
              style: zc(cU),
              children: (0, YU.jsx)(Ac.e, {
                settings: UU.settings,
                touch: zU,
                inPreview: !0
              })
            }), (0, YU.jsx)("div", {
              className: "CrosshairPresetName",
              children: FU(`crosshairSettings:preset_${UU.id}`)
            })]
          }, UU.id)
        }))
      })
    }
    var Ec = zU(1720);

    function Yc(UU, XU) {
      const [zU, yU] = (0, cU.useState)(!1), QU = () => {
        yU(!1)
      }, [AU, FU] = (0, cU.useState)(!1), oU = (0, cU.useRef)({
        growOnClick: UU.growOnClick,
        forGuns: UU.forGuns
      });
      (0, cU.useEffect)((() => {
        const XU = oU.current;
        oU.current = {
          growOnClick: UU.growOnClick,
          forGuns: UU.forGuns
        }, (UU.growOnClick && !XU.growOnClick || UU.forGuns && !XU.forGuns) && FU(!0)
      }), [UU.growOnClick, UU.forGuns]), (0, cU.useEffect)((() => {
        if (!AU) return;
        const UU = setTimeout((() => {
          FU(!1)
        }), 600);
        return () => {
          clearTimeout(UU)
        }
      }), [AU]);
      const DU = zU || AU;
      return {
        view: {
          pressed: DU,
          spread: DU && UU.forGuns && !UU.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: UU => {
            !UU.target.closest(XU) && (0, Ec.b)(UU.currentTarget, UU.pointerId) && yU(!0)
          },
          onPointerUp: QU,
          onPointerCancel: QU,
          onLostPointerCapture: QU
        }
      }
    }

    function Nc(UU) {
      let {
        settings: XU,
        touch: zU,
        backdrop: cU,
        className: yU,
        children: AU,
        label: FU
      } = UU;
      const oU = Yc(XU, ".CrosshairStageControls");
      return (0, YU.jsxs)("div", {
        className: QU()("CrosshairStage", yU),
        style: zc(cU),
        ...oU.handlers,
        children: [(0, YU.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": FU,
          children: (0, YU.jsx)(Ac.e, {
            settings: XU,
            touch: zU,
            inPreview: !0,
            ...oU.view
          })
        }), AU]
      })
    }
    const Ic = "crosshairFullScreen";

    function pc(UU) {
      let {
        settings: XU,
        touch: zU,
        backdrop: yU,
        onBackdrop: oU,
        inGame: EU,
        onChange: NU,
        onClose: IU
      } = UU;
      const {
        t: pU
      } = (0, AU.I)(), aU = (0, cU.useRef)(null);
      (0, Jz.t)("popup", aU, IU),
      function(UU) {
        const XU = (0, cU.useRef)(UU);
        XU.current = UU, (0, cU.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Ic]: !0
          }, "");
          let UU = !1;
          const zU = () => {
            UU = !0, XU.current()
          };
          return window.addEventListener("popstate", zU), () => {
            var XU;
            window.removeEventListener("popstate", zU), !UU && null !== (XU = window.history.state) && void 0 !== XU && XU[Ic] && window.history.back()
          }
        }), [])
      }(IU);
      const tU = (0, cU.useRef)(IU);
      tU.current = IU, (0, cU.useEffect)((() => {
        function UU(UU) {
          "Escape" === UU.key && (UU.stopPropagation(), tU.current())
        }
        return window.addEventListener("keydown", UU, !0), () => {
          window.removeEventListener("keydown", UU, !0)
        }
      }), []);
      const gU = Yc(XU, ".CrosshairFullScreenPanel"),
        [kU, GU] = (0, cU.useState)(!0),
        BU = kU && EU;
      (0, cU.useEffect)((() => {
        if (BU) return WU.e.set({
          crosshairGameView: !0
        }), () => {
          WU.e.set({
            crosshairGameView: !1
          })
        }
      }), [BU]);
      const [ZU, RU] = (0, cU.useState)(!0);
      return (0, xz.createPortal)((0, YU.jsxs)("div", {
        ref: aU,
        className: "CrosshairFullScreen",
        style: BU ? void 0 : zc(yU),
        ...gU.handlers,
        children: [(0, YU.jsx)(Ac.e, {
          settings: XU,
          touch: zU,
          inEditor: !0,
          ...gU.view
        }), (0, YU.jsxs)("div", {
          className: QU()("CrosshairFullScreenPanel", {
            Collapsed: !ZU
          }),
          children: [(0, YU.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, YU.jsx)(oc, {
              backdrop: yU,
              onChange: UU => {
                GU(!1), oU(UU)
              },
              game: EU ? {
                selected: BU,
                onSelect: () => {
                  GU(!0)
                }
              } : void 0
            }), (0, YU.jsx)(DU.O, {
              className: "CrosshairPanelToggle",
              ariaLabel: pU(ZU ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                RU(!ZU)
              },
              children: (0, YU.jsx)(FU.d, {
                name: ZU ? "caret-up" : "pen"
              })
            }), (0, YU.jsx)(DU.f, {
              className: "CrosshairFullScreenDone",
              onClick: IU,
              padDefaultFocus: !0,
              children: pU("crosshairSettings:done")
            })]
          }), ZU && (0, YU.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, YU.jsx)(Dc, {
              settings: XU,
              touch: zU,
              backdrop: yU,
              onChange: NU
            }), (0, YU.jsx)(lz, {
              settings: XU,
              onChange: NU
            })]
          })]
        })]
      }), document.body)
    }
    var ac = zU(2903),
      tc = zU(34845);

    function gc(UU) {
      let {
        settings: XU,
        onChange: zU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)(), oU = (0, tc.i)(XU), [EU, NU] = (0, ac.h)(), [IU, pU] = (0, cU.useState)(!1), aU = (0, cU.useRef)(null), [tU, gU] = (0, ac.h)(), [kU, GU] = (0, cU.useState)(!1);
      return (0, YU.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, YU.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, YU.jsxs)(DU.O, {
            className: QU()("CrosshairCopy", {
              ActiveSecondaryButton: EU
            }),
            onClick: () => {
              (0, ac.e)(oU, {
                useShareSheet: !1,
                onOutcome: UU => {
                  pU("failed" === UU), "copied" === UU && NU()
                }
              })
            },
            children: [(0, YU.jsx)(FU.d, {
              name: EU ? "check" : "copy"
            }), " ", yU(EU ? "general:copied" : "crosshairSettings:copy")]
          }), (0, YU.jsx)(ZU.e, {
            className: "CrosshairPaste",
            domRef: aU,
            ariaLabel: yU("crosshairSettings:paste"),
            placeholderText: yU("crosshairSettings:paste"),
            onValueChange: UU => {
              const XU = (0, tc.g)(UU);
              GU(!XU && UU.trim().length >= tc.c), XU && (zU(XU), aU.current.value = "", gU())
            }
          })]
        }), IU && (0, YU.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: oU,
          "aria-label": yU("crosshairSettings:copy"),
          onFocus: UU => {
            UU.currentTarget.select()
          }
        }), (0, YU.jsxs)("div", {
          "aria-live": "polite",
          children: [kU && (0, YU.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: yU("crosshairSettings:pasteInvalid")
          }), tU && !kU && (0, YU.jsx)("div", {
            className: "CrosshairShareNote",
            children: yU("crosshairSettings:applied")
          })]
        })]
      })
    }
    var kc = zU(34853);
    let Gc = "sky";

    function Bc(UU) {
      let {
        showing: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)(), {
        isTouchScreen: yU,
        gameState: QU,
        clientEscMenuOptions: oU
      } = (0, WU.q)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), EU = (0, kc.f)(), [NU, IU] = (0, cU.useState)(Gc), pU = UU => {
        Gc = UU, IU(UU)
      }, [aU, tU] = (0, cU.useState)(!1);
      return (0, cU.useEffect)((() => {
        XU || tU(!1)
      }), [XU]), (0, YU.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, YU.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, YU.jsx)(Nc, {
            className: "CrosshairPreviewStage",
            settings: EU,
            touch: yU,
            backdrop: NU,
            label: zU("crosshairSettings:preview"),
            children: (0, YU.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, YU.jsx)(oc, {
                backdrop: NU,
                onChange: pU
              }), (0, YU.jsxs)(DU.O, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  tU(!0)
                },
                children: [(0, YU.jsx)(FU.d, {
                  name: "expand"
                }), " ", zU("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, YU.jsx)("div", {
          className: "SettingBox",
          children: (0, YU.jsx)(Dc, {
            settings: EU,
            touch: yU,
            backdrop: NU,
            onChange: kc.d
          })
        }), (0, YU.jsx)(gc, {
          settings: EU,
          onChange: kc.d
        }), yU && (0, YU.jsx)(fz.b, {
          note: (0, uz.g)(yU, oU.touchActionButtons) ? zU("crosshairSettings:touchNote") : void 0
        }), (0, YU.jsx)(lz, {
          settings: EU,
          onChange: kc.d
        }), aU && (0, YU.jsx)(pc, {
          settings: EU,
          touch: yU,
          backdrop: NU,
          onBackdrop: pU,
          inGame: "inGame" === QU,
          onChange: kc.d,
          onClose: () => {
            tU(!1)
          }
        })]
      })
    }
    var Zc = zU(9443),
      Rc = zU(1454),
      Pc = zU(5536),
      Wc = zU(34856),
      dc = zU(4651),
      Lc = zU(2053),
      ec = zU(760);
    const Cc = (0, cU.memo)((function() {
      const {
        clientEscMenuOptions: UU
      } = (0, WU.q)(["clientEscMenuOptions"]), {
        recording: XU,
        clipping: zU,
        hasClipBuffer: yU
      } = (0, vX.i)("replayRecorder"), AU = (0, vX.e)("connectedGame", (UU => UU.replay)), FU = (0, dc.m)(), oU = !1 === (0, aU.f)("canRecordReplays");
      (0, cU.useEffect)((() => {
        kU.gameBridge.send("setRecorderPrefs", {
          clipping: UU.enableClipping,
          clipSeconds: UU.clipDurationSeconds
        })
      }), [UU.enableClipping, UU.clipDurationSeconds]);
      const EU = FU || AU,
        NU = !EU && !oU,
        IU = XU || NU,
        pU = NU,
        tU = pU && zU && !XU;

      function gU() {
        IU && kU.gameBridge.send("toggleRecording", null)
      }
      return (0, YU.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, YU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YU.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: XU ? (0, YU.jsxs)(YU.Fragment, {
              children: [(0, YU.jsxs)(DU.G, {
                className: "ReplayViewerCategoryButton",
                onClick: gU,
                disabled: !IU,
                children: [(0, YU.jsx)("span", {
                  children: "Stop Recording"
                }), (0, YU.jsx)(Lc.c, {
                  noaAction: "recordGame"
                })]
              }), (0, YU.jsx)(Wc.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, YU.jsxs)(DU.f, {
              className: "ReplayViewerCategoryButton",
              onClick: gU,
              disabled: !IU,
              children: [(0, YU.jsx)("span", {
                children: "Start Recording"
              }), (0, YU.jsx)(Lc.c, {
                noaAction: "recordGame"
              })]
            })
          }), oU && (0, YU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), EU && !XU && (0, YU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, YU.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, YU.jsx)(PU.e, {
            label: "Enable clipping",
            checked: UU.enableClipping,
            disabled: !pU,
            onClick: function(UU) {
              pU && WU.e.setClientEscMenuOptions({
                enableClipping: UU
              })
            },
            className: QU()({
              SettingBoxDisabled: !pU
            })
          }), (0, YU.jsx)(PU.j, {
            name: "Clip duration (seconds)",
            min: ec.m,
            max: ec.i,
            step: ec.d,
            initValue: UU.clipDurationSeconds,
            onChange: function(UU) {
              WU.e.setClientEscMenuOptions({
                clipDurationSeconds: UU
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !pU || !UU.enableClipping
          })]
        }), (0, YU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YU.jsxs)(DU.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              tU && kU.gameBridge.send("saveClip", null)
            },
            disabled: !tU,
            children: [(0, YU.jsx)("span", {
              children: "Record clip"
            }), (0, YU.jsx)(Lc.c, {
              noaAction: "recordClip"
            })]
          }), UU.enableClipping && !yU && pU && !XU && (0, YU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), XU && (0, YU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, YU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YU.jsxs)(DU.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, dc.i)(!0), WU.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: FU,
            children: [(0, YU.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, YU.jsx)(Lc.c, {
              noaAction: "replayViewerOpen"
            })]
          }), FU && (0, YU.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, YU.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YU.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, YU.jsx)("iframe", {
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
    var wc = zU(1974);
    const qc = {
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
        icon: () => (0, YU.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, YU.jsx)("path", {
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
      Fp: {
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

    function Oc() {
      return Promise.all([zU.e(89), zU.e(147), zU.e(146), zU.e(142)]).then((() => zU(42172))).then((UU => ({
        default: UU.ShaderPackCategory
      })), (UU => (console.error("Failed to load the shader pack settings", UU), {
        default: Sc
      })))
    }

    function Sc() {
      const {
        t: UU
      } = (0, AU.I)();
      return (0, YU.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: UU("shaderPack:tabLoadFailed")
      })
    }
    var rc = zU(1444),
      uc = zU(195);
    const fc = /party\s*voice/i;
    let ic = !1;

    function Hc(UU) {
      return Object.keys(UU).some((UU => UU.startsWith("__reactFiber$")))
    }
    const Mc = ".MenuSideBarBody, .MenuSideBarSection";

    function vc(UU) {
      var XU;
      return (null !== (XU = UU.textContent) && void 0 !== XU ? XU : "").replace(/\s+/g, " ").trim()
    }

    function Vc(UU) {
      for (const XU of function(UU) {
          const XU = new Set;
          for (const zU of UU.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) XU.add(zU);
          for (const zU of [UU, ...UU.querySelectorAll(Mc)])
            for (const UU of zU.children) XU.add(UU);
          return [...XU]
        }(UU))
        if (!Hc(XU) || !XU.matches(Mc) && fc.test(vc(XU))) return XU;
      return null
    }

    function sc(UU) {
      return UU.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const nc = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function mc(UU) {
      const XU = document.createTreeWalker(UU, NodeFilter.SHOW_TEXT, {
        acceptNode: UU => {
          var XU, zU;
          return nc.has(null !== (XU = null === (zU = UU.parentElement) || void 0 === zU ? void 0 : zU.tagName.toUpperCase()) && void 0 !== XU ? XU : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let QU = XU.nextNode(); null !== QU; QU = XU.nextNode()) {
        var zU;
        const UU = (null !== (zU = QU.textContent) && void 0 !== zU ? zU : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== UU) {
          var cU, yU;
          return (null !== (cU = null === (yU = UU.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === yU ? void 0 : yU[0]) && void 0 !== cU ? cU : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function lc(UU, XU) {
      const zU = sc(XU).slice(0, 40) || "blank";
      return `${(sc(UU.toLowerCase())||"none").slice(0,Math.max(23,uc.M-1-zU.length))}:${zU}`.slice(0, uc.M)
    }
    const xc = (0, cU.lazy)((() => zU.e(298).then((() => zU(42162))).then((UU => ({
        default: UU.BloxdInformation
      }))))),
      Jc = (0, cU.lazy)(Oc);

    function jc(UU) {
      return UU ? "general" : "account"
    }
    const Kc = new Map,
      bc = (0, cU.memo)((function(UU) {
        let {
          show: XU,
          setBeforeResumeCallback: zU
        } = UU;
        (0, tU.e)();
        const {
          gameState: yU,
          openSettingsCategory: QU
        } = (0, WU.q)(["gameState", "openSettingsCategory"]), {
          userContext: oU
        } = (0, pU.d)(), {
          t: EU
        } = (0, AU.I)(), ZU = (0, IU.c)(), RU = (0, aU.f)("minChunkAddDist"), PU = "inGame" === yU, [dU, CU] = (0, cU.useState)(jc(PU)), [wU, qU] = (0, cU.useState)(null), [OU, SU] = (0, cU.useState)([]), rU = (0, cU.useRef)(function() {
          const UU = new Date,
            XU = 6 * (UU.getMonth() + UU.getDate()) % gX.z.length;
          return [...gX.z, ...gX.z].slice(XU, XU + 6)
        }()), uU = (0, cU.useRef)(null), fU = (0, cU.useRef)(null), iU = (0, jX.j)(Rc.h, (0, Rc.c)()), HU = Object.keys(qc).filter((UU => {
          switch (UU) {
            case "replayViewer":
              return PU;
            case "developerTools":
              return oU.playerHasRank("developer") || !1;
            case "texturePack":
              return gU.featureFlags.settings.canChangeTexturePack;
            case "Fp":
              return gU.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return gU.featureFlags.useSocialFeatures || null !== oU.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== eU.siteUsed;
            case "controller":
              return gU.featureFlags.useControllerSupport && (iU || "controller" === dU);
            default:
              return !0
          }
        }));
        (0, jX.f)("toggleFullCoordinateOverlay", (() => {
          const UU = Wz("showCoordinates") && Wz("showChunkCoordinates") && Wz("showFPS");
          dz("showCoordinates", !UU), dz("showChunkCoordinates", !UU), dz("showFPS", !UU), ZU()
        })), (0, jX.f)("updatedChunkLoadDist", (() => {
          ZU()
        })), (0, cU.useEffect)((() => {
          if (qU(null), null === WU.e.get("openSettingsCategory")) {
            const UU = (0, rc.n)() ? Kc.get(PU) : void 0;
            CU(UU && HU.includes(UU) ? UU : jc(PU))
          }
        }), [XU]), (0, cU.useEffect)((() => {
          if (XU && fU.current) return function(UU) {
            if (ic) return () => {};
            let XU = null,
              zU = null;
            const cU = () => {
                var UU;
                null !== zU && (clearTimeout(zU), zU = null), null === (UU = XU) || void 0 === UU || UU.disconnect(), XU = null
              },
              yU = () => {
                const XU = Vc(UU);
                null !== XU && (ic = !0, cU(), (0, XX.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: lc(window.location.hostname, mc(XU))
                }))
              };
            return zU = setTimeout((() => {
              zU = null, yU(), ic || (XU = new MutationObserver(yU), XU.observe(UU, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), cU
          }(fU.current)
        }), [XU]), (0, cU.useEffect)((() => {
          null !== QU && (CU(QU), Kc.set(PU, QU), WU.e.set({
            openSettingsCategory: null
          }))
        }), [QU, PU]), (0, cU.useLayoutEffect)((() => {
          uU.current && (uU.current.scrollTop = 0)
        }), [dU, XU]), (0, cU.useEffect)((() => {
          "updateLog" === dU && (0, BU.b)().then(SU)
        }), [dU]), (0, cU.useEffect)((() => {
          if ((0, kz.P)(RU)) return;
          const [UU, XU] = (0, Sz.d)(), [zU, cU] = (0, Nz.h)(RU), yU = (0, wc.f)(RU[0], UU, zU), QU = (0, wc.f)(RU[1], XU, cU);
          kU.gameBridge.send("setChunkAddDistance", {
            horizontal: yU,
            vertical: QU
          })
        }), [RU]);
        const MU = (0, cU.useCallback)((async () => {
          wU && (await wU(), qU(null))
        }), [wU]);

        function vU() {
          WU.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, cU.useEffect)((() => {
          zU((() => MU))
        }), [MU, zU]), (0, YU.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: XU ? {} : {
            display: "none"
          },
          children: [(0, YU.jsx)("div", {
            ref: fU,
            className: "MenuSideBar",
            children: (0, YU.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, YU.jsx)(NU, {
                items: HU.map((UU => {
                  const XU = qc[UU].icon;
                  return {
                    id: UU,
                    faIcon: "string" === typeof XU ? XU : void 0,
                    iconElement: "string" === typeof XU ? void 0 : (0, YU.jsx)(XU, {}),
                    title: EU(qc[UU].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: dU,
                onClick: UU => {
                  !async function(UU) {
                    await MU(), CU(UU), Kc.set(PU, UU)
                  }(UU)
                }
              })
            })
          }), (0, YU.jsxs)("div", {
            ref: uU,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === dU && (0, YU.jsx)(rX, {
              showing: XU,
              inGame: PU
            }), "general" === dU && (0, YU.jsx)(lX, {
              inGame: PU
            }), "audio" === dU && (0, YU.jsx)(xX, {}), "notifications" === dU && (0, YU.jsx)(Yz, {}), "graphics" === dU && (0, YU.jsx)(Oz, {
              minChunkAddDist: null !== RU && void 0 !== RU ? RU : [2, 2],
              getValue: Wz,
              onChange: dz,
              setApplySettingsCallback: qU
            }), "controls" === dU && (0, YU.jsx)(rz.f, {}), "crosshair" === dU && (0, YU.jsx)(Bc, {
              showing: XU
            }), "controller" === dU && gU.featureFlags.useControllerSupport && (0, YU.jsx)(Zc.e, {}), gU.featureFlags.settings.canChangeTexturePack && "texturePack" === dU && (0, YU.jsx)(Pc.e, {
              setApplySettingsCallback: qU
            }), gU.featureFlags.settings.canUseShaderPacks && "Fp" === dU && (0, YU.jsx)(cU.Suspense, {
              fallback: null,
              children: (0, YU.jsx)(Jc, {
                setApplySettingsCallback: qU
              })
            }), "updateLog" === dU && (0, YU.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, YU.jsx)("div", {
                className: "UpdateLogsContainer",
                children: OU.map(((UU, XU) => (0, YU.jsx)(GU.d, {
                  updateLog: UU,
                  index: XU,
                  close: vU
                }, XU)))
              })
            }), "information" === dU && (0, YU.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, YU.jsx)(cU.Suspense, {
                fallback: null,
                children: (0, YU.jsx)(xc, {})
              })
            }), "alternativeDomains" === dU && (0, YU.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, YU.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: EU("settingsMenu:unblockedDomainsDescription")
              }), (0, YU.jsx)("div", {
                className: "AlternativeDomainsList",
                children: rU.current.map((UU => (0, YU.jsxs)(DU.f, {
                  onClick: () => {
                    window.open(`https://${UU}`)
                  },
                  children: [(0, YU.jsx)(FU.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", UU]
                }, UU)))
              })]
            }), "replayViewer" === dU && (0, YU.jsx)(Cc, {}), "developerTools" === dU && (0, YU.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, YU.jsx)(LU, {
                setApplySettingsCallback: qU
              })
            }), null !== wU && (0, YU.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, YU.jsx)(DU.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: MU,
                children: EU("general:apply")
              })
            })]
          })]
        })
      }));
    var Tc = zU(2855),
      hc = zU(4031),
      Uy = zU(2443),
      Xy = zU(4762);
    const zy = (0, cU.lazy)((() => Promise.resolve().then((() => zU(5101))).then((UU => (UU.needGameClientAfterPaint(), (0, Tc.c)((UU => UU.loadCharacterCustomisationUI()), (UU => UU.CharacterCustomisationUI))))))),
      cy = "openCustomisationTab";

    function yy(UU) {
      var XU, zU, yU;
      let {
        show: QU
      } = UU;
      const {
        userContext: AU
      } = (0, pU.d)(), FU = (0, vU.usePurchasesAllowed)(), oU = (0, cU.useRef)(null);
      var DU, EU;
      AU !== CU.NULL_USER_CONTEXT && (null === (XU = oU.current) || void 0 === XU ? void 0 : XU.whamm) !== AU.whamm && (oU.current = {
        whamm: AU.whamm,
        mountKey: (null !== (DU = null === (EU = oU.current) || void 0 === EU ? void 0 : EU.mountKey) && void 0 !== DU ? DU : -1) + 1
      });
      const [IU, aU] = (0, cU.useState)("characters");
      if ((0, jX.f)(cy, aU), !QU) return null;
      const tU = null !== (0, hc.f)(Date.now()),
        gU = AU.getOwnedCosmeticPacks(),
        kU = gX.Yb.filter((UU => "pet" === UU || "aura" === UU ? tU || (0, Uy.l)(UU).some((XU => XU !== `${UU}_none` && (0, Uy.B)(UU, XU, gU))) : "cape" !== UU && "nameColour" !== UU || AU.getPlayerRanks().includes("super") || FU)).map((UU => ({
          id: UU,
          faIcon: gX.G[UU],
          title: gX.H[UU],
          redDot: !1
        })));
      return (0, YU.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, YU.jsx)("div", {
          className: "MenuSideBar",
          children: (0, YU.jsx)(NU, {
            items: kU,
            selectedItemId: IU,
            onClick: UU => {
              aU(UU)
            }
          })
        }), (0, YU.jsx)("div", {
          className: "MenuBody",
          children: (0, YU.jsx)(cU.Suspense, {
            fallback: (0, YU.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, YU.jsx)(RU.b, {})
            }),
            children: (0, YU.jsx)(zy, {
              selectedTab: IU,
              noWebGlFallback: Ay
            }, null !== (zU = null === (yU = oU.current) || void 0 === yU ? void 0 : yU.mountKey) && void 0 !== zU ? zU : 0)
          })
        })]
      })
    }

    function Qy() {
      const {
        t: UU
      } = (0, AU.I)();
      return (0, YU.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: UU((0, Xy.f)((0, Xy.d)()))
      })
    }
    const Ay = (0, YU.jsx)(Qy, {});
    var Fy = zU(1511),
      oy = zU(1515),
      Dy = zU(34859),
      Ey = zU(4968),
      Yy = zU(3813),
      Ny = zU(3861),
      Iy = zU(34891),
      py = zU(9348),
      ay = zU(34868),
      ty = zU(34878),
      gy = zU(1993),
      ky = zU(1978),
      Gy = zU(5424),
      By = zU(1274),
      Zy = zU(1236),
      Ry = zU(1715),
      Py = zU(9422),
      Wy = zU(2623),
      dy = zU(2627);

    function Ly(UU) {
      return UU ? Object.keys(UU).sort(((XU, zU) => {
        var cU, yU, QU, AU;
        const FU = (null !== (cU = null === (yU = UU[zU]) || void 0 === yU ? void 0 : yU.sortPriority) && void 0 !== cU ? cU : 0) - (null !== (QU = null === (AU = UU[XU]) || void 0 === AU ? void 0 : AU.sortPriority) && void 0 !== QU ? QU : 0);
        return 0 !== FU ? FU : XU.localeCompare(zU)
      })) : []
    }
    const ey = [{
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

    function Cy(UU) {
      for (const {
          threshold: XU,
          suffix: zU
        }
        of ey)
        if (UU >= XU) {
          const cU = UU / XU;
          return cU >= 100 ? `${Math.floor(cU)}${zU}` : cU >= 10 ? `${cU.toFixed(1).replace(/\.0$/,"")}${zU}` : `${cU.toFixed(2).replace(/\.?0+$/,"")}${zU}`
        } return String(UU)
    }
    var wy = zU(5581);
    const qy = {
        normal: "0.8em",
        big: "1em"
      },
      Oy = (0, cU.memo)((function(UU) {
        let {
          item: XU,
          amount: zU = 0,
          size: cU = "normal",
          tier: yU = null
        } = UU;
        return (0, YU.jsx)("div", {
          className: QU()("SmpSlot", `SmpSlot-${cU}`),
          children: XU && (0, YU.jsx)(gy.c, {
            itemName: XU,
            amount: zU > 1 ? zU : 0,
            amountFontSize: qy[cU],
            enchantmentTier: yU
          })
        })
      }));

    function Sy(UU) {
      let {
        amount: XU,
        exact: zU = !1,
        className: cU
      } = UU;
      return (0, YU.jsxs)("span", {
        className: QU()("SmpGold", cU),
        children: [(0, YU.jsx)("span", {
          className: "SmpCoin",
          children: (0, YU.jsx)(gy.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), zU ? XU.toLocaleString("en-US") : Cy(XU)]
      })
    }

    function ry(UU) {
      let {
        count: XU = 5,
        grid: zU = !1
      } = UU;
      return (0, YU.jsx)("div", {
        className: zU ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: XU
        }, ((UU, XU) => (0, YU.jsxs)("div", {
          className: QU()(zU ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, YU.jsx)("div", {
            className: QU()("SmpSlot", zU ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, YU.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, YU.jsx)("b", {}), (0, YU.jsx)("small", {})]
          }), (0, YU.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, XU)))
      })
    }

    function uy(UU) {
      let {
        title: XU,
        children: zU
      } = UU;
      return (0, YU.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, YU.jsx)("b", {
          children: XU
        }), zU && (0, YU.jsx)("small", {
          children: zU
        })]
      })
    }

    function fy(UU) {
      let {
        entry: XU
      } = UU;
      return (0, YU.jsx)(uy, {
        title: (0, YU.jsx)(ky.d, {
          text: XU.item.customTitle
        }),
        children: (0, YU.jsx)(ky.d, {
          text: XU.item.description
        })
      })
    }

    function iy(UU) {
      return (0, YU.jsx)(wy.d, {
        ...UU,
        className: QU()("SmpChoice", UU.className),
        reselectable: !0
      })
    }

    function Hy() {
      return (0, YU.jsx)("span", {
        className: "SmpLoader",
        children: (0, YU.jsx)(RU.b, {})
      })
    }

    function My(UU) {
      let {
        value: XU,
        onChange: zU,
        min: yU = 1,
        max: QU,
        step: AU = 1,
        label: FU
      } = UU;
      const oU = (0, cU.useRef)(null),
        DU = (0, cU.useRef)(XU);
      DU.current = XU;
      const [EU, NU] = (0, cU.useState)(null), IU = UU => Math.max(yU, Math.min(QU, Math.floor(UU))), pU = UU => {
        const XU = DU.current,
          cU = "function" === typeof AU ? AU(XU, UU) : AU,
          yU = IU(XU + cU * UU);
        DU.current = yU, zU(yU)
      };
      (0, cU.useEffect)((() => {
        if (null === EU) return;
        let UU;
        const XU = () => {
            NU(null)
          },
          zU = setTimeout((() => {
            UU = setInterval((() => {
              pU(EU);
              const UU = DU.current;
              (EU > 0 ? UU >= QU : UU <= yU) && XU()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", XU), window.addEventListener("pointercancel", XU), window.addEventListener("blur", XU), () => {
          clearTimeout(zU), clearInterval(UU), window.removeEventListener("pointerup", XU), window.removeEventListener("pointercancel", XU), window.removeEventListener("blur", XU)
        }
      }), [EU]), (0, cU.useEffect)((() => {
        const UU = oU.current;
        UU && document.activeElement !== UU && UU.value !== String(XU) && (UU.value = String(XU))
      }), [XU]), (0, cU.useEffect)((() => {
        const UU = oU.current;
        if (!UU) return;
        const XU = () => {
          UU.value = String(DU.current)
        };
        return UU.addEventListener("blur", XU), () => {
          UU.removeEventListener("blur", XU)
        }
      }), []);
      const aU = UU => (0, YU.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${UU>0?"More":"Less"} ${FU}`,
        disabled: UU > 0 ? XU >= QU : XU <= yU,
        onPointerDown: XU => {
          0 === XU.button && (pU(UU), NU(UU))
        },
        onKeyDown: XU => {
          "Enter" !== XU.key && " " !== XU.key || pU(UU)
        },
        onContextMenu: UU => {
          UU.preventDefault()
        },
        children: UU > 0 ? "+" : "\u2212"
      });
      return (0, YU.jsxs)("div", {
        className: "SmpStepper",
        children: [aU(-1), (0, YU.jsx)(ZU.e, {
          className: "SmpStepperInput",
          domRef: oU,
          defaultValue: String(XU),
          ariaLabel: FU,
          type: "text",
          blurOnEnter: !0,
          onValueChange: UU => {
            const XU = UU.replace(/[^\d]/g, "");
            oU.current && XU !== UU && (oU.current.value = XU), "" !== XU && zU(IU(Number(XU)))
          }
        }), aU(1)]
      })
    }

    function vy(UU) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, UU))) - 1))
    }
    var Vy = zU(34884),
      sy = zU(1258);
    const ny = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    sy.z, HU.Oc.length;
    new Map;
    var my = zU(3660);

    function ly(UU, XU) {
      var zU;
      return XU && (null === (zU = UU[XU]) || void 0 === zU ? void 0 : zU.smp) || null
    }

    function xy(UU, XU) {
      const zU = [];
      for (const yU of Ly(UU)) {
        var cU;
        const QU = UU[yU];
        (null === (cU = QU.smp) || void 0 === cU ? void 0 : cU.kind) === XU && zU.push({
          key: yU,
          item: QU,
          meta: QU.smp
        })
      }
      return zU
    }

    function Jy(UU, XU) {
      var zU;
      return null !== (zU = xy(UU, XU)[0]) && void 0 !== zU ? zU : null
    }
    const jy = "50% 0% 50% 0%",
      Ky = [{
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

    function by(UU) {
      const XU = UU - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: zU,
          suffix: cU
        }
        of Ky)
        if (XU >= zU) return `${Math.floor(XU/zU)}${cU}`;
      return "<1s"
    }

    function Ty(UU) {
      const XU = UU.map(py.h),
        zU = [];
      return XU.forEach(((UU, cU) => {
        const yU = function(UU) {
            const XU = UU.match(/\d+/);
            return XU ? Number(XU[0]) : 0
          }(UU),
          QU = cU === XU.length - 1;
        (QU || 1 === yU || 10 === yU || 100 === yU) && zU.push({
          label: UU,
          quantity: yU,
          isAll: QU
        })
      })), zU
    }
    let hy = null;

    function UQ(UU, XU) {
      const zU = XU.trim().toLowerCase();
      if (!zU) return [];
      const cU = UU => {
          if (UU === zU) return 0;
          if (UU.startsWith(zU)) return 1;
          const XU = UU.indexOf(zU);
          return -1 === XU ? -1 : 2 + XU
        },
        yU = [];
      for (const FU of UU) {
        const UU = [cU(FU.lowerLabel), cU(FU.lowerName)].filter((UU => -1 !== UU));
        UU.length && yU.push({
          item: FU,
          rank: Math.min(...UU)
        })
      }
      if (yU.length > 0) return yU.sort(((UU, XU) => UU.rank - XU.rank)).map((UU => UU.item));
      const QU = [...zU],
        AU = UU => {
          let XU = 0;
          for (const zU of QU) {
            if (XU = UU.indexOf(zU, XU), -1 === XU) return !1;
            XU++
          }
          return !0
        };
      return UU.filter((UU => AU(UU.lowerLabel) || AU(UU.lowerName)))
    }

    function XQ(UU, XU) {
      var zU;
      return null !== (zU = null === UU || void 0 === UU ? void 0 : UU[XU]) && void 0 !== zU ? zU : XU
    }

    function zQ(UU, XU) {
      const zU = UU.userInput;
      return void 0 !== XU && "dropdown" === (null === zU || void 0 === zU ? void 0 : zU.type) && zU.dropdownOptions.map(py.h).includes(XU) ? XU : function(UU) {
        const XU = UU.userInput;
        if ("dropdown" !== (null === XU || void 0 === XU ? void 0 : XU.type) || 0 === XU.dropdownOptions.length) return null;
        const zU = XU.dropdownOptions.map(py.h);
        return XU.initialValue && zU.includes(XU.initialValue) ? XU.initialValue : zU[zU.length - 1]
      }(UU)
    }

    function cQ(UU) {
      return void 0 === UU ? "" : JSON.stringify(UU)
    }
    const yQ = (0, cU.createContext)(null);

    function QQ() {
      return (0, cU.useContext)(yQ)
    }
    var AQ = zU(2933);
    const FQ = (0, cU.memo)((function(UU) {
        let {
          name: XU,
          label: zU,
          onPick: cU
        } = UU;
        return (0, YU.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: zU,
          onClick: () => {
            cU(XU)
          },
          children: [(0, YU.jsx)(Oy, {
            item: XU,
            size: "big"
          }), (0, YU.jsx)("span", {
            children: zU
          })]
        })
      })),
      oQ = (0, cU.memo)((function(UU) {
        let {
          items: XU,
          query: zU,
          onPick: yU
        } = UU;
        const {
          t: QU
        } = (0, AU.I)(), [FU, oU] = (0, cU.useState)(new Set), DU = (0, cU.useMemo)((() => function(UU) {
          const XU = new Map;
          for (const zU of UU) {
            let UU = XU.get(zU.category);
            UU || (UU = [], XU.set(zU.category, UU)), UU.push(zU)
          }
          return [...ny, "other"].filter((UU => XU.has(UU))).map((UU => ({
            category: UU,
            items: XU.get(UU)
          })))
        }(XU)), [XU]), EU = (0, cU.useMemo)((() => UQ(XU, zU).slice(0, 60)), [XU, zU]);
        return zU.trim() ? 0 === EU.length ? (0, YU.jsx)(uy, {
          title: QU("smpShop:noItemsFound", {
            query: zU.trim()
          }),
          children: QU("smpShop:tryShorterName")
        }) : (0, YU.jsx)(AQ.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: jy,
          observerUpdateDeps: [zU],
          children: EU.map((UU => (0, YU.jsx)(FQ, {
            name: UU.name,
            label: UU.label,
            onPick: yU
          }, UU.name)))
        }) : (0, YU.jsx)(YU.Fragment, {
          children: DU.map((UU => {
            let {
              category: XU,
              items: zU
            } = UU;
            const cU = FU.has(XU) || zU.length <= 48,
              AU = cU ? zU : zU.slice(0, 48);
            return (0, YU.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, YU.jsxs)("h4", {
                children: [QU("other" === XU ? "smpShop:otherItems" : `creativeInventory:${XU}`), !cU && (0, YU.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    oU(new Set([...FU, XU]))
                  },
                  children: QU("smpShop:showAll", {
                    count: zU.length
                  })
                })]
              }), (0, YU.jsx)(AQ.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: jy,
                observerUpdateDeps: [cU],
                children: AU.map((UU => (0, YU.jsx)(FQ, {
                  name: UU.name,
                  label: UU.label,
                  onPick: yU
                }, UU.name)))
              })]
            }, XU)
          }))
        })
      }));

    function DQ(UU, XU) {
      const {
        searched: zU,
        shown: yU,
        searchFor: QU,
        loading: AU
      } = function(UU, XU) {
        var zU;
        const yU = QQ(),
          [QU, AU] = (0, cU.useState)(void 0),
          FU = (0, cU.useRef)(void 0),
          oU = (0, cU.useRef)(0),
          DU = (0, cU.useRef)(void 0),
          EU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.meta.item) && void 0 !== zU ? zU : null,
          YU = !!UU && yU.isPending(UU.key);
        (0, cU.useEffect)((() => {
          if (!UU || YU || !XU || void 0 === QU || QU === EU) return;
          const zU = QU === FU.current && yU.gaveUpAt(UU.key) > oU.current && DU.current !== QU;
          (QU !== FU.current || zU) && yU.act(UU.key, null !== QU && void 0 !== QU ? QU : "*", zU) && (zU && (DU.current = QU), FU.current = QU, oU.current = Date.now())
        }), [UU, YU, XU, QU, EU, yU]);
        const NU = (0, cU.useCallback)((UU => {
            FU.current = void 0, DU.current = void 0, AU(UU)
          }), []),
          IU = void 0 !== QU && QU !== EU && (YU || FU.current !== QU);
        return {
          searched: EU,
          shown: IU ? QU : EU,
          searchFor: NU,
          loading: IU || YU || null !== EU && !XU
        }
      }(UU, XU), FU = (0, cU.useMemo)((() => function() {
        var UU;
        let XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const yU = `${(0,my.i)()}\x1f${XU.join("\x1e")}\x1f${zU.join("\x1e")}\x1f${JSON.stringify(cU)}`;
        if ((null === (UU = hy) || void 0 === UU ? void 0 : UU.key) === yU) return hy.items;
        const QU = new Set(zU),
          AU = new Set,
          FU = [],
          oU = (UU, XU) => {
            var zU;
            if (!UU || AU.has(UU) || QU.has(UU)) return;
            AU.add(UU);
            const yU = null !== (zU = cU[UU]) && void 0 !== zU ? zU : UU;
            FU.push({
              name: UU,
              label: yU,
              lowerLabel: yU.toLowerCase(),
              lowerName: UU.toLowerCase(),
              category: XU
            })
          };
        for (const EU of (0, Vy.creativeItemIds)()) {
          var DU;
          (0, Vy.itemIsDisabled)(EU, !0, !0, !1) || (0, Vy.showOnlyInCreativeSearch)(EU) || oU((0, my.f)(EU), null !== (DU = (0, Vy.creativeCategoryOf)(EU)) && void 0 !== DU ? DU : "other")
        }
        for (const EU of XU) oU(EU, "other");
        return hy = {
          key: yU,
          items: FU
        }, FU
      }(null === UU || void 0 === UU ? void 0 : UU.meta.extra, null === UU || void 0 === UU ? void 0 : UU.meta.excluded, null === UU || void 0 === UU ? void 0 : UU.meta.names)), [null === UU || void 0 === UU ? void 0 : UU.meta.extra, null === UU || void 0 === UU ? void 0 : UU.meta.excluded, null === UU || void 0 === UU ? void 0 : UU.meta.names]), [oU, DU] = (0, cU.useState)(""), [EU, YU] = (0, cU.useState)(0), [NU, IU] = (0, cU.useState)("recent"), pU = (0, cU.useCallback)((UU => {
        DU(""), YU((UU => UU + 1)), QU(UU)
      }), [QU]), aU = "browse" === NU || "" !== oU.trim();
      return {
        searched: zU,
        shown: yU,
        searchFor: QU,
        loading: AU,
        catalogue: FU,
        names: null === UU || void 0 === UU ? void 0 : UU.meta.names,
        query: oU,
        setQuery: DU,
        searchBoxKey: EU,
        pickItem: pU,
        setView: IU,
        browsing: aU
      }
    }

    function EQ(UU) {
      let {
        browser: XU,
        children: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)(), yU = QQ();
      return (0, YU.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, YU.jsx)("div", {
          className: "SmpSearch",
          children: (0, YU.jsx)(ZU.e, {
            className: "SmpSearchInput",
            placeholderText: cU("smpShop:searchPlaceholder"),
            defaultValue: XU.query,
            onValueChange: UU => {
              XU.setQuery(UU), XU.searched && UU.trim() && XU.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const UU = UQ(XU.catalogue, XU.query)[0];
              UU ? XU.pickItem(UU.name) : XU.query.trim() && yU.notify(cU("smpShop:noItemsFound", {
                query: XU.query.trim()
              }))
            }
          }, XU.searchBoxKey)
        }), zU]
      })
    }

    function YQ(UU) {
      let {
        browser: XU,
        recentLabel: zU,
        children: cU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)();
      return (0, YU.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, YU.jsx)(iy, {
          options: [{
            value: "recent",
            label: zU
          }, {
            value: "browse",
            label: yU("smpShop:browseItems")
          }],
          value: XU.browsing ? "browse" : "recent",
          onChange: XU.setView,
          ariaLabel: yU("smpShop:show")
        }), !XU.browsing && cU]
      })
    }

    function NQ(UU) {
      let {
        item: XU,
        names: zU,
        summary: cU,
        onBack: yU,
        children: QU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)();
      return (0, YU.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, YU.jsx)(DU.e, {
          className: "SmpBackButton",
          onClick: yU,
          children: FU("general:back")
        }), (0, YU.jsx)(Oy, {
          item: XU,
          size: "big"
        }), (0, YU.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, YU.jsx)("b", {
            children: XQ(zU, XU)
          }), cU && (0, YU.jsx)("small", {
            children: cU
          })]
        }), QU]
      })
    }

    function IQ(UU) {
      let {
        browser: XU,
        className: zU,
        action: cU,
        above: yU,
        list: AU,
        summary: FU,
        recentLabel: oU,
        listControls: DU,
        onBack: EU
      } = UU;
      return (0, YU.jsxs)("div", {
        className: QU()("SmpScreen", zU),
        children: [(0, YU.jsx)(EQ, {
          browser: XU,
          children: cU
        }), XU.shown && (0, YU.jsx)(NQ, {
          item: XU.shown,
          names: XU.names,
          summary: !XU.loading && FU,
          onBack: () => {
            null === EU || void 0 === EU || EU(), XU.searchFor(null)
          },
          children: DU
        }), yU, XU.shown ? AU : (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsx)(YQ, {
            browser: XU,
            recentLabel: oU,
            children: DU
          }), XU.browsing ? (0, YU.jsx)(oQ, {
            items: XU.catalogue,
            query: XU.query,
            onPick: XU.pickItem
          }) : AU]
        })]
      })
    }

    function pQ(UU, XU) {
      const zU = UU.map((UU => {
        let {
          meta: XU
        } = UU;
        return XU.pricePerItem
      }));
      return "min" === XU ? Math.min(...zU) : Math.max(...zU)
    }
    var aQ = zU(7176);
    const tQ = (0, cU.memo)((function(UU) {
      var XU;
      const {
        t: zU
      } = (0, AU.I)(), cU = null === UU.seller, yU = UU.quantity * UU.pricePerItem;
      return (0, YU.jsxs)("div", {
        className: UU.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, YU.jsx)(Oy, {
          item: UU.item,
          amount: UU.quantity,
          size: UU.grid ? "big" : "normal",
          tier: UU.tier
        }), (0, YU.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, YU.jsx)("b", {
            children: (0, YU.jsx)(ky.d, {
              text: null !== (XU = UU.title) && void 0 !== XU ? XU : `${UU.quantity}x ${UU.item}`
            })
          }), (0, YU.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, YU.jsx)("span", {
              children: cU ? zU("smpShop:you") : (0, YU.jsx)(ky.d, {
                text: [{
                  entityName: UU.seller
                }]
              })
            }), (0, YU.jsx)("span", {
              children: zU("smpShop:timeLeft", {
                time: by(UU.expiresAt)
              })
            })]
          })]
        }), (0, YU.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, YU.jsx)(Sy, {
            amount: UU.pricePerItem
          }), (0, YU.jsx)("small", {
            children: zU("smpShop:each")
          })]
        }), (0, YU.jsx)(DU.f, {
          className: "SmpBuyButton",
          disabled: cU || !UU.canAfford && !UU.busy,
          loading: UU.busy,
          onClick: () => {
            UU.onBuy(UU.itemKey)
          },
          children: cU ? zU("smpShop:yours") : (0, YU.jsx)(Sy, {
            amount: yU
          })
        })]
      })
    }));

    function gQ(UU) {
      let {
        view: XU,
        onChange: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)();
      return (0, YU.jsx)(wy.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: cU("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, YU.jsx)(FU.d, {
            name: "list"
          }),
          ariaLabel: cU("smpShop:listView")
        }, {
          value: "grid",
          label: (0, YU.jsx)(FU.d, {
            name: "grid-2"
          }),
          ariaLabel: cU("smpShop:gridView")
        }],
        value: XU,
        onChange: zU
      })
    }

    function kQ(UU) {
      let {
        entries: XU,
        view: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)(), yU = QQ(), QU = "grid" === zU;
      return (0, YU.jsxs)(YU.Fragment, {
        children: [!QU && (0, YU.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, YU.jsx)("span", {}), (0, YU.jsx)("span", {
            children: cU("smpShop:columnItem")
          }), (0, YU.jsx)("span", {
            children: cU("smpShop:columnPriceEach")
          }), (0, YU.jsx)("span", {
            children: cU("smpShop:columnTotal")
          })]
        }), (0, YU.jsx)(AQ.d, {
          lazyLoadedClassName: QU ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: jy,
          observerUpdateDeps: [XU.length],
          children: XU.map((UU => {
            var XU, zU;
            let {
              key: cU,
              item: AU,
              meta: FU
            } = UU;
            const oU = FU.quantity * FU.pricePerItem;
            return (0, YU.jsx)(tQ, {
              itemKey: cU,
              item: FU.item,
              title: AU.customTitle,
              quantity: FU.quantity,
              pricePerItem: FU.pricePerItem,
              seller: FU.seller,
              expiresAt: FU.expiresAt,
              tier: null !== (XU = null === (zU = AU.enchant) || void 0 === zU ? void 0 : zU.tier) && void 0 !== XU ? XU : null,
              busy: yU.isPending(cU) || null !== FU.seller && !1 === AU.canBuy,
              canAfford: yU.canAfford(AU, oU),
              grid: QU,
              onBuy: yU.act
            }, cU)
          }))
        }, zU)]
      })
    }
    const GQ = [1, 10, 100],
      BQ = [1, 10, 100, 999];

    function ZQ(UU) {
      var XU, zU, yU, oU, EU, NU, IU, pU, aU, tU;
      const {
        t: gU
      } = (0, AU.I)(), kU = QQ(), {
        creator: GU,
        mode: BU
      } = UU, [RU, PU] = (0, cU.useState)(null !== (XU = null === GU || void 0 === GU ? void 0 : GU.meta.item) && void 0 !== XU ? XU : null), [WU, dU] = (0, cU.useState)(1), [LU, eU] = (0, cU.useState)(0), [CU, wU] = (0, cU.useState)(""), [qU, OU] = (0, cU.useState)(0), SU = (0, cU.useRef)(RU), rU = (0, cU.useRef)(!1), [uU, fU] = (0, cU.useState)(!1), iU = null !== (zU = null === GU || void 0 === GU ? void 0 : GU.meta.item) && void 0 !== zU ? zU : null, HU = null !== (yU = null === GU || void 0 === GU ? void 0 : GU.meta.owned) && void 0 !== yU ? yU : 0;
      (0, cU.useEffect)((() => {
        UU.searching || null === iU || iU === SU.current || (SU.current = iU, rU.current = !1, PU(iU), eU(0), dU("list" === BU ? Math.max(1, HU) : 1))
      }), [iU, UU.searching]);
      const MU = !!GU && !!RU && GU.meta.item === RU,
        vU = MU ? GU.meta.owned : null !== (oU = null === (EU = UU.inventory) || void 0 === EU || null === (NU = EU.find((UU => UU.item === RU))) || void 0 === NU ? void 0 : NU.quantity) && void 0 !== oU ? oU : 0,
        VU = "list" === BU ? Math.max(1, vU) : 45954,
        sU = null !== (IU = UU.prices[0]) && void 0 !== IU ? IU : null,
        nU = UU.prices.length ? Math.round(UU.prices.reduce(((UU, XU) => UU + XU), 0) / UU.prices.length) : null,
        mU = null === (pU = UU.inventory) || void 0 === pU || null === (aU = pU.find((UU => UU.item === RU))) || void 0 === aU ? void 0 : aU.sellPrice;
      (0, cU.useEffect)((() => {
        var UU;
        MU && (dU((UU => "list" === BU ? Math.min(Math.max(1, UU), Math.max(1, vU)) : UU)), rU.current || eU(null !== (UU = null !== sU && void 0 !== sU ? sU : nU) && void 0 !== UU ? UU : Math.max(1, null !== mU && void 0 !== mU ? mU : 1)))
      }), [MU, vU, RU, sU, nU]);
      const lU = UU => {
          rU.current = !0, eU(UU)
        },
        xU = XU => {
          var zU, cU, yU;
          SU.current = XU, rU.current = !1, fU(!1), wU(""), OU((UU => UU + 1)), PU(XU), eU(0), dU("list" === BU && null !== (zU = null === (cU = UU.inventory) || void 0 === cU || null === (yU = cU.find((UU => UU.item === XU))) || void 0 === yU ? void 0 : yU.quantity) && void 0 !== zU ? zU : 1), (null === GU || void 0 === GU ? void 0 : GU.meta.item) !== XU && UU.onPickItem(XU)
        },
        JU = WU * LU,
        jU = "list" === BU && null !== GU && void 0 !== GU && GU.meta.fee ? function(UU, XU) {
          const zU = Math.max(0, XU - UU.taxFreeAllowance);
          return Math.ceil(Math.round(zU * UU.rate * 1e6) / 1e6)
        }(GU.meta.fee, JU) : 0,
        KU = !!GU && kU.isPending(GU.key),
        bU = MU && !UU.searching && WU >= 1 && LU >= 1 && ("order" === BU || vU >= WU) && !KU,
        TU = !!RU && !MU && !UU.searching && WU >= 1 && LU >= 1,
        hU = () => {
          bU ? kU.act(GU.key, `${WU}|${LU}`) : TU && (UU.onPickItem(RU), fU(!0))
        };
      (0, cU.useEffect)((() => {
        uU && MU && !UU.searching && (fU(!1), hU())
      }), [uU, MU, UU.searching]);
      const UX = !!RU && !MU && (UU.searching || uU),
        XX = RU ? XQ(UU.names, RU) : "",
        zX = (0, cU.useMemo)((() => UQ(UU.catalogue, CU).slice(0, 8)), [UU.catalogue, CU]),
        cX = ("list" === BU ? GQ.filter((UU => UU < vU)) : BQ).map((UU => ({
          value: UU,
          label: String(UU)
        })));
      "list" === BU && vU > 0 && cX.push({
        value: vU,
        label: gU("smpShop:all", {
          count: vU
        })
      });
      const yX = [];
      return null !== sU && (sU > 1 && yX.push({
        value: sU - 1,
        label: gU("smpShop:undercut", {
          price: Cy(sU - 1)
        })
      }), yX.push({
        value: sU,
        label: gU("smpShop:lowest", {
          price: Cy(sU)
        })
      })), null !== nU && nU !== sU && yX.push({
        value: nU,
        label: gU("smpShop:average", {
          price: Cy(nU)
        })
      }), (0, YU.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, YU.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, YU.jsx)("b", {
            children: gU("list" === BU ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, YU.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": gU("smpShop:close"),
            onClick: UU.onClose,
            children: (0, YU.jsx)(FU.d, {
              name: "xmark"
            })
          })]
        }), "list" === BU && (0, YU.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (tU = UU.inventory) && void 0 !== tU && tU.length ? UU.inventory.map((UU => {
            let {
              item: XU,
              quantity: zU
            } = UU;
            return (0, YU.jsx)("button", {
              type: "button",
              title: XU,
              className: QU()("SmpPickerSlot", {
                SmpPickerSlotOn: XU === RU
              }),
              onClick: () => {
                xU(XU)
              },
              children: (0, YU.jsx)(Oy, {
                item: XU,
                amount: zU
              })
            }, XU)
          })) : (0, YU.jsx)("span", {
            className: "SmpMuted",
            children: gU("smpShop:nothingToList")
          })
        }), ("list" === BU || !RU) && (0, YU.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, YU.jsx)(ZU.e, {
            className: "SmpSearchInput",
            placeholderText: gU("list" === BU ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: CU,
            onValueChange: wU,
            blurOnEnter: !0,
            onEnter: () => {
              zX[0] && xU(zX[0].name)
            }
          }, qU), zX.length > 0 && (0, YU.jsx)("div", {
            className: "SmpPicker",
            children: zX.map((UU => {
              let {
                name: XU
              } = UU;
              return (0, YU.jsx)("button", {
                type: "button",
                title: XU,
                className: QU()("SmpPickerSlot", {
                  SmpPickerSlotOn: XU === RU
                }),
                onClick: () => {
                  xU(XU)
                },
                children: (0, YU.jsx)(Oy, {
                  item: XU
                })
              }, XU)
            }))
          })]
        }), RU && (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsxs)("div", {
            className: "SmpPickedName",
            children: [XX, UX && (0, YU.jsx)(Hy, {})]
          }), (0, YU.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, YU.jsxs)("div", {
              className: "SmpField",
              children: [(0, YU.jsxs)("span", {
                children: [gU("smpShop:quantity"), "list" === BU && MU && (0, YU.jsx)("small", {
                  children: gU("smpShop:youHave", {
                    count: vU
                  })
                })]
              }), (0, YU.jsx)(My, {
                value: WU,
                onChange: dU,
                max: VU,
                label: gU("smpShop:quantity")
              }), (0, YU.jsx)(iy, {
                options: cX,
                value: WU,
                onChange: dU,
                ariaLabel: gU("smpShop:quantity")
              })]
            }), (0, YU.jsxs)("div", {
              className: "SmpField",
              children: [(0, YU.jsx)("span", {
                children: gU("smpShop:pricePerItem")
              }), (0, YU.jsx)(My, {
                value: Math.max(1, LU),
                onChange: lU,
                max: 9999999,
                step: vy,
                label: gU("smpShop:pricePerItem")
              }), (0, YU.jsx)(iy, {
                options: yX,
                value: LU,
                onChange: lU,
                ariaLabel: gU("smpShop:pricePerItem")
              })]
            })]
          }), "list" === BU && (0, YU.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, YU.jsxs)("span", {
              children: [gU("smpShop:youGet"), " ", (0, YU.jsx)(Sy, {
                amount: Math.max(0, JU - jU),
                exact: !0
              })]
            }), (0, YU.jsx)("small", {
              children: jU > 0 ? gU("smpShop:listingFee", {
                fee: jU.toLocaleString("en-US")
              }) : gU("smpShop:listingRules")
            })]
          }), (0, YU.jsx)(DU.n, {
            className: "SmpSubmit",
            disabled: !bU && !TU && !KU,
            loading: KU || UX || MU && UU.searching,
            onClick: hU,
            children: "list" === BU ? gU("smpShop:listButton", {
              count: WU,
              item: XX
            }) : (0, YU.jsxs)(YU.Fragment, {
              children: [gU("smpShop:orderButton", {
                count: WU,
                item: XX
              }), " ", LU >= 1 && (0, YU.jsx)(Sy, {
                amount: JU
              })]
            })
          })]
        })]
      })
    }

    function RQ() {
      var UU;
      const {
        t: XU
      } = (0, AU.I)(), zU = QQ(), yU = null === (UU = zU.shopInfo[zU.categoryKey]) || void 0 === UU ? void 0 : UU.items, QU = Jy(yU, "search"), FU = Jy(yU, "creator"), oU = xy(yU, "enchantedCreator"), EU = xy(yU, "listing"), NU = Jy(yU, "empty"), IU = DQ(QU, EU.length > 0 || null !== NU), {
        searched: pU,
        shown: aU,
        loading: tU
      } = IU, [gU, kU] = (0, cU.useState)(!1), [GU, BU] = function() {
        const [UU, XU] = (0, aQ.d)("smpMarketView", "list");
        return ["grid" === UU ? "grid" : "list", XU]
      }(), ZU = "grid" === GU, RU = (0, cU.useMemo)((() => EU.filter((UU => {
        let {
          meta: XU
        } = UU;
        return null !== XU.seller && XU.item === pU
      })).map((UU => {
        let {
          meta: XU
        } = UU;
        return XU.pricePerItem
      })).sort(((UU, XU) => UU - XU))), [EU, pU]), PU = (0, cU.useMemo)((() => {
        const UU = new Set(IU.catalogue.map((UU => {
          let {
            name: XU
          } = UU;
          return XU
        })));
        return function(UU) {
          for (const XU in UU)
            if ("sell" === UU[XU].smp) return xy(UU[XU].items, "sell").filter((UU => {
              let {
                item: XU
              } = UU;
              return !XU.enchant
            })).map((UU => {
              let {
                meta: XU
              } = UU;
              return {
                item: XU.item,
                quantity: XU.quantity,
                sellPrice: XU.pricePerItem
              }
            }));
          return []
        }(zU.shopInfo).filter((XU => {
          let {
            item: zU
          } = XU;
          return UU.has(zU)
        }))
      }), [zU.shopInfo, IU.catalogue]);
      return (0, YU.jsx)(IQ, {
        browser: IU,
        className: "SmpMarketTab",
        recentLabel: XU("smpShop:recentlyListed"),
        action: (0, YU.jsx)(DU.n, {
          className: "SmpSellButton",
          onClick: () => {
            kU((UU => !UU))
          },
          children: XU("smpShop:sell")
        }),
        above: gU && (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsx)(ZQ, {
            mode: "list",
            creator: FU,
            inventory: PU,
            catalogue: IU.catalogue,
            names: IU.names,
            searching: tU,
            prices: RU,
            onPickItem: IU.searchFor,
            onClose: () => {
              kU(!1)
            }
          }), oU.length > 0 && (0, YU.jsx)(PQ, {
            entries: oU
          })]
        }),
        listControls: (0, YU.jsx)(gQ, {
          view: GU,
          onChange: BU
        }),
        summary: aU && (EU.length > 0 ? XU(1 === EU.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: EU.length,
          price: Cy(pQ(EU, "min"))
        }) : XU("smpShop:noOneSelling", {
          item: XQ(IU.names, aU)
        })),
        list: tU ? (0, YU.jsx)(ry, {
          grid: ZU
        }) : EU.length > 0 ? (0, YU.jsx)(kQ, {
          entries: EU,
          view: GU
        }) : NU ? (0, YU.jsx)(fy, {
          entry: NU
        }) : (0, YU.jsx)(ry, {
          count: 3,
          grid: ZU
        })
      })
    }

    function PQ(UU) {
      let {
        entries: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)(), yU = QQ(), [QU, FU] = (0, cU.useState)({});
      return (0, YU.jsx)("div", {
        className: "SmpList",
        children: XU.map((UU => {
          var XU, cU, AU;
          let {
            key: oU,
            item: EU,
            meta: NU
          } = UU;
          const IU = null !== (XU = QU[oU]) && void 0 !== XU ? XU : 1;
          return (0, YU.jsxs)("div", {
            className: "SmpRow",
            children: [(0, YU.jsx)(Oy, {
              item: NU.item,
              amount: NU.quantity,
              tier: null !== (cU = null === (AU = EU.enchant) || void 0 === AU ? void 0 : AU.tier) && void 0 !== cU ? cU : null
            }), (0, YU.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, YU.jsx)("b", {
                children: (0, YU.jsx)(ky.d, {
                  text: EU.customTitle
                })
              }), (0, YU.jsx)("small", {
                children: zU("smpShop:enchantedListing")
              })]
            }), (0, YU.jsx)(My, {
              value: IU,
              onChange: UU => {
                FU({
                  ...QU,
                  [oU]: UU
                })
              },
              max: 9999999,
              step: vy,
              label: zU("smpShop:pricePerItem")
            }), (0, YU.jsxs)(DU.n, {
              loading: yU.isPending(oU),
              onClick: () => {
                yU.act(oU, String(IU))
              },
              children: [zU("smpShop:list"), " ", (0, YU.jsx)(Sy, {
                amount: IU
              })]
            })]
          }, oU)
        }))
      })
    }
    const WQ = (0, cU.memo)((function(UU) {
      let {
        itemKey: XU,
        item: zU,
        quantity: cU,
        pricePerItem: yU,
        tier: AU,
        selected: FU,
        onSelect: oU
      } = UU;
      return (0, YU.jsxs)("button", {
        type: "button",
        className: QU()("SmpInventorySlot", {
          SmpInventorySlotOn: FU
        }),
        title: zU,
        onClick: () => {
          oU(XU)
        },
        children: [(0, YU.jsx)(Oy, {
          item: zU,
          amount: cU,
          tier: AU
        }), (0, YU.jsx)(Sy, {
          amount: yU
        })]
      })
    }));

    function dQ() {
      var UU;
      const {
        t: XU
      } = (0, AU.I)(), zU = QQ(), yU = null === (UU = zU.shopInfo[zU.categoryKey]) || void 0 === UU ? void 0 : UU.items, FU = xy(yU, "sell"), oU = Jy(yU, "empty"), [DU, EU] = (0, cU.useState)(null), [NU, IU] = (0, cU.useState)({}), pU = FU.find((UU => {
        let {
          key: XU
        } = UU;
        return XU === DU
      }));
      return 0 === FU.length ? (0, YU.jsx)("div", {
        className: "SmpScreen",
        children: (0, YU.jsx)(uy, {
          title: oU ? (0, YU.jsx)(ky.d, {
            text: oU.item.customTitle
          }) : XU("smpShop:nothingToSell"),
          children: oU && (0, YU.jsx)(ky.d, {
            text: oU.item.description
          })
        })
      }) : (0, YU.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, YU.jsx)("div", {
          className: "SmpInventoryGrid",
          children: FU.map((UU => {
            var XU, zU;
            let {
              key: cU,
              item: yU,
              meta: QU
            } = UU;
            return (0, YU.jsx)(WQ, {
              itemKey: cU,
              item: QU.item,
              quantity: QU.quantity,
              pricePerItem: QU.pricePerItem,
              tier: null !== (XU = null === (zU = yU.enchant) || void 0 === zU ? void 0 : zU.tier) && void 0 !== XU ? XU : null,
              selected: cU === DU,
              onSelect: EU
            }, cU)
          }))
        }), (0, YU.jsx)("div", {
          className: QU()("SmpSellBar", {
            SmpSellBarIdle: !pU
          }),
          children: pU ? (0, YU.jsx)(LQ, {
            entry: pU,
            choice: zQ(pU.item, NU[pU.key]),
            onChoose: UU => {
              IU({
                ...NU,
                [pU.key]: UU
              })
            }
          }) : (0, YU.jsx)("span", {
            className: "SmpMuted",
            children: XU("smpShop:tapToSell")
          })
        })]
      })
    }

    function LQ(UU) {
      var XU, zU, cU, yU;
      let {
        entry: QU,
        choice: FU,
        onChoose: oU
      } = UU;
      const {
        t: EU
      } = (0, AU.I)(), NU = QQ(), {
        key: IU,
        item: pU,
        meta: aU
      } = QU, tU = Ty("dropdown" === (null === (XU = pU.userInput) || void 0 === XU ? void 0 : XU.type) ? pU.userInput.dropdownOptions : []), gU = null === FU ? 0 : -(0, py.d)(pU, FU);
      return (0, YU.jsxs)(YU.Fragment, {
        children: [(0, YU.jsx)(Oy, {
          item: aU.item,
          amount: aU.quantity,
          tier: null !== (zU = null === (cU = pU.enchant) || void 0 === cU ? void 0 : cU.tier) && void 0 !== zU ? zU : null
        }), (0, YU.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, YU.jsx)("b", {
            children: (0, YU.jsx)(ky.d, {
              text: null !== (yU = pU.customTitle) && void 0 !== yU ? yU : aU.item
            })
          }), (0, YU.jsx)("small", {
            children: EU("smpShop:sellEach", {
              count: aU.quantity
            })
          })]
        }), (0, YU.jsx)(iy, {
          options: tU.map((UU => {
            let {
              label: XU,
              quantity: zU,
              isAll: cU
            } = UU;
            return {
              value: XU,
              label: cU ? EU("smpShop:all", {
                count: zU
              }) : String(zU)
            }
          })),
          value: FU,
          onChange: oU,
          ariaLabel: EU("smpShop:quantity")
        }), (0, YU.jsxs)(DU.n, {
          loading: NU.isPending(IU),
          disabled: null === FU,
          onClick: () => {
            NU.act(IU, FU)
          },
          children: [EU("smpShop:sellButton"), " ", (0, YU.jsx)(Sy, {
            amount: gU
          })]
        })]
      })
    }

    function eQ() {
      var UU;
      const {
        t: XU
      } = (0, AU.I)(), zU = QQ(), cU = null === (UU = zU.shopInfo[zU.categoryKey]) || void 0 === UU ? void 0 : UU.items, yU = xy(cU, "collect"), QU = xy(cU, "myListing"), FU = (UU, XU) => zU.isPending(UU) || !1 === XU.canBuy;
      return (0, YU.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, YU.jsx)("h3", {
          className: "SmpSectionTitle",
          children: XU("smpShop:readyToCollect")
        }), yU.length > 0 ? (0, YU.jsx)("div", {
          className: "SmpList",
          children: yU.map((UU => {
            var cU, yU;
            let {
              key: QU,
              item: AU,
              meta: oU
            } = UU;
            return (0, YU.jsxs)("div", {
              className: "SmpRow",
              children: [(0, YU.jsx)(Oy, {
                item: "sold" === oU.type ? "Gold Coin" : oU.item,
                amount: "sold" === oU.type ? 0 : oU.quantity,
                tier: null !== (cU = null === (yU = AU.enchant) || void 0 === yU ? void 0 : yU.tier) && void 0 !== cU ? cU : null
              }), (0, YU.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, YU.jsx)("b", {
                  children: (0, YU.jsx)(ky.d, {
                    text: AU.customTitle
                  })
                }), (0, YU.jsx)("small", {
                  children: (0, YU.jsx)(ky.d, {
                    text: AU.description
                  })
                })]
              }), (0, YU.jsx)(DU.l, {
                loading: FU(QU, AU),
                onClick: () => {
                  zU.act(QU)
                },
                children: XU("smpShop:collect")
              })]
            }, QU)
          }))
        }) : (0, YU.jsx)(uy, {
          title: XU("smpShop:nothingToCollect"),
          children: XU("smpShop:nothingToCollectHint")
        }), (0, YU.jsx)("h3", {
          className: "SmpSectionTitle",
          children: XU("smpShop:activeListings", {
            count: QU.length
          })
        }), QU.length > 0 ? (0, YU.jsx)("div", {
          className: "SmpList",
          children: QU.map((UU => {
            var cU, yU;
            let {
              key: QU,
              item: AU,
              meta: oU
            } = UU;
            return (0, YU.jsxs)("div", {
              className: "SmpRow",
              children: [(0, YU.jsx)(Oy, {
                item: oU.item,
                amount: oU.quantity,
                tier: null !== (cU = null === (yU = AU.enchant) || void 0 === yU ? void 0 : yU.tier) && void 0 !== cU ? cU : null
              }), (0, YU.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, YU.jsx)("b", {
                  children: (0, YU.jsx)(ky.d, {
                    text: AU.customTitle
                  })
                }), (0, YU.jsx)("small", {
                  children: XU("smpShop:timeLeft", {
                    time: by(oU.expiresAt)
                  })
                })]
              }), (0, YU.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, YU.jsx)(Sy, {
                  amount: oU.pricePerItem
                }), (0, YU.jsx)("small", {
                  children: XU("smpShop:each")
                })]
              }), (0, YU.jsx)(DU.G, {
                loading: FU(QU, AU),
                onClick: () => {
                  zU.act(QU)
                },
                children: XU("smpShop:cancel")
              })]
            }, QU)
          }))
        }) : (0, YU.jsx)(uy, {
          title: XU("smpShop:noActiveListings"),
          children: XU("smpShop:noActiveListingsHint")
        })]
      })
    }

    function CQ(UU) {
      let {
        done: XU,
        of: zU
      } = UU;
      return (0, YU.jsx)("span", {
        className: "SmpProgress",
        children: (0, YU.jsx)("i", {
          style: {
            width: `${Math.min(100,XU/Math.max(1,zU)*100)}%`
          }
        })
      })
    }

    function wQ(UU) {
      var XU, zU, cU;
      let {
        entry: yU,
        choice: QU,
        onChoose: FU
      } = UU;
      const {
        t: oU
      } = (0, AU.I)(), EU = QQ(), {
        key: NU,
        item: IU,
        meta: pU
      } = yU, aU = "dropdown" === (null === (XU = IU.userInput) || void 0 === XU ? void 0 : XU.type) ? IU.userInput.dropdownOptions : [], tU = !0 === pU.processing, gU = null !== pU.creator && (pU.owned > 0 || tU), kU = gU && pU.owned > 0 ? Ty(aU) : [], GU = null === QU ? 0 : null !== (zU = null === (cU = kU.find((UU => UU.label === QU))) || void 0 === cU ? void 0 : cU.quantity) && void 0 !== zU ? zU : 0;
      return (0, YU.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, YU.jsx)(Oy, {
          item: pU.item
        }), (0, YU.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, YU.jsx)("b", {
            children: (0, YU.jsx)(ky.d, {
              text: IU.customTitle
            })
          }), (0, YU.jsxs)("small", {
            children: [(0, YU.jsx)(Sy, {
              amount: pU.pricePerItem
            }), " ", oU("smpShop:each"), " \xb7", " ", null === pU.creator ? oU("smpShop:you") : (0, YU.jsx)(ky.d, {
              text: [{
                entityName: pU.creator
              }]
            })]
          }), (0, YU.jsx)(CQ, {
            done: pU.delivered,
            of: pU.wanted
          })]
        }), gU ? (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsx)(iy, {
            options: kU.map((UU => {
              let {
                label: XU,
                quantity: zU,
                isAll: cU
              } = UU;
              return {
                value: XU,
                label: cU ? oU("smpShop:max", {
                  count: zU
                }) : String(zU)
              }
            })),
            value: QU,
            onChange: FU,
            ariaLabel: oU("smpShop:quantity")
          }), (0, YU.jsxs)(DU.n, {
            loading: EU.isPending(NU) || tU,
            disabled: null === QU,
            onClick: () => {
              EU.act(NU, QU)
            },
            children: [oU("smpShop:deliver"), " ", (0, YU.jsx)(Sy, {
              amount: GU * pU.pricePerItem
            })]
          })]
        }) : (0, YU.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === pU.creator ? oU("smpShop:yourOrder") : oU("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function qQ() {
      var UU;
      const {
        t: XU
      } = (0, AU.I)(), zU = QQ(), yU = null === (UU = zU.shopInfo[zU.categoryKey]) || void 0 === UU ? void 0 : UU.items, QU = Jy(yU, "search"), FU = Jy(yU, "creator"), oU = xy(yU, "order"), EU = Jy(yU, "empty"), NU = DQ(QU, oU.length > 0 || null !== EU), [IU, pU] = (0, cU.useState)(!1), [aU, tU] = (0, cU.useState)({});
      return (0, YU.jsx)(IQ, {
        browser: NU,
        recentLabel: XU("smpShop:recentOrders"),
        action: (0, YU.jsx)(DU.n, {
          onClick: () => {
            pU((UU => !UU))
          },
          children: XU("smpShop:createOrder")
        }),
        above: IU && (0, YU.jsx)(ZQ, {
          mode: "order",
          creator: FU,
          catalogue: NU.catalogue,
          names: NU.names,
          searching: NU.loading,
          prices: [],
          onPickItem: NU.searchFor,
          onClose: () => {
            pU(!1)
          }
        }),
        onBack: () => {
          pU(!1)
        },
        summary: oU.length > 0 && XU(1 === oU.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: oU.length,
          price: Cy(pQ(oU, "max"))
        }),
        list: NU.loading ? (0, YU.jsx)(ry, {}) : oU.length > 0 ? (0, YU.jsx)(AQ.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: jy,
          observerUpdateDeps: [oU.length],
          children: oU.map((UU => (0, YU.jsx)(wQ, {
            entry: UU,
            choice: zQ(UU.item, aU[UU.key]),
            onChoose: XU => {
              tU({
                ...aU,
                [UU.key]: XU
              })
            }
          }, UU.key)))
        }) : EU ? (0, YU.jsx)(fy, {
          entry: EU
        }) : (0, YU.jsx)(ry, {
          count: 3
        })
      })
    }

    function OQ() {
      var UU;
      const {
        t: XU
      } = (0, AU.I)(), zU = QQ(), cU = xy(null === (UU = zU.shopInfo[zU.categoryKey]) || void 0 === UU ? void 0 : UU.items, "myOrder");
      return 0 === cU.length ? (0, YU.jsx)("div", {
        className: "SmpScreen",
        children: (0, YU.jsx)(uy, {
          title: XU("smpShop:noOrders"),
          children: XU("smpShop:noOrdersHint")
        })
      }) : (0, YU.jsx)("div", {
        className: "SmpScreen",
        children: (0, YU.jsx)("div", {
          className: "SmpList",
          children: cU.map((UU => {
            let {
              key: cU,
              item: yU,
              meta: QU
            } = UU;
            const AU = zU.isPending(cU) || !1 === yU.canBuy;
            return (0, YU.jsxs)("div", {
              className: "SmpRow",
              children: [(0, YU.jsx)(Oy, {
                item: QU.item,
                amount: QU.collectable
              }), (0, YU.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, YU.jsx)("b", {
                  children: (0, YU.jsx)(ky.d, {
                    text: yU.customTitle
                  })
                }), (0, YU.jsxs)("small", {
                  children: [(0, YU.jsx)(Sy, {
                    amount: QU.pricePerItem
                  }), " ", XU("smpShop:each"), QU.collectable > 0 && ` \xb7 ${XU("smpShop:readyCount",{count:QU.collectable})}`]
                }), (0, YU.jsx)(CQ, {
                  done: QU.delivered,
                  of: QU.wanted
                })]
              }), QU.collectable > 0 ? (0, YU.jsx)(DU.l, {
                loading: AU,
                onClick: () => {
                  zU.act(cU)
                },
                children: XU("smpShop:collectCount", {
                  count: QU.collectable
                })
              }) : (0, YU.jsx)(DU.G, {
                loading: AU,
                onClick: () => {
                  zU.act(cU)
                },
                children: XU("smpShop:cancel")
              })]
            }, cU)
          }))
        })
      })
    }
    const SQ = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      rQ = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function uQ(UU, XU) {
      let zU = !1;
      const cU = {};
      for (const yU in UU) XU(yU, UU[yU]) ? cU[yU] = UU[yU] : zU = !0;
      return zU ? cU : UU
    }

    function fQ(UU) {
      var XU, zU, yU, oU;
      const {
        show: DU,
        shopInfo: EU,
        selectedCategoryKey: NU
      } = UU, {
        t: IU
      } = (0, AU.I)(), pU = null !== NU && void 0 !== NU ? NU : "", aU = ly(EU, pU), tU = null === (XU = EU[pU]) || void 0 === XU ? void 0 : XU.items, gU = null !== aU, [kU, GU] = (0, cU.useState)({}), [BU, ZU] = (0, cU.useState)([]), [RU, PU] = (0, cU.useState)(!1), [WU, dU] = (0, cU.useState)(null), [, LU] = (0, cU.useState)(0), eU = (0, cU.useRef)(0), CU = (0, cU.useRef)({}), wU = (0, cU.useRef)({
        items: tU,
        pending: kU,
        shopInfo: EU,
        active: gU,
        canAfford: UU.canAfford,
        buy: UU.buy
      });
      wU.current = {
        items: tU,
        pending: kU,
        shopInfo: EU,
        active: gU,
        canAfford: UU.canAfford,
        buy: UU.buy
      };
      const qU = (0, cU.useCallback)((UU => {
        eU.current++;
        const XU = eU.current;
        ZU((zU => [{
          id: XU,
          text: UU
        }, ...zU].slice(0, 8))), dU(XU)
      }), []);
      (0, cU.useEffect)((() => {
        if (null === WU) return;
        const UU = setTimeout((() => {
          dU(null)
        }), 3e3);
        return () => {
          clearTimeout(UU)
        }
      }), [WU]), (0, cU.useEffect)((() => {
        const XU = UU.message;
        if (!XU) return;
        const {
          shopInfo: zU,
          active: cU,
          items: yU
        } = wU.current, QU = null !== XU.categoryKey ? null !== ly(zU, XU.categoryKey) : cU;
        (QU || cU) && qU(XU.text), QU && GU((UU => uQ(UU, (UU => {
          var XU, zU;
          return !SQ.has(null === yU || void 0 === yU || null === (XU = yU[UU]) || void 0 === XU || null === (zU = XU.smp) || void 0 === zU ? void 0 : zU.kind)
        }))))
      }), [UU.message, qU]), (0, cU.useEffect)((() => {
        GU((UU => uQ(UU, ((UU, XU) => cQ(null === tU || void 0 === tU ? void 0 : tU[UU]) === XU.snapshot))))
      }), [EU, tU]);
      const OU = Object.keys(kU).length > 0;
      (0, cU.useEffect)((() => {
        if (!OU) return;
        const UU = setInterval((() => {
          LU((UU => UU + 1));
          const UU = Date.now(),
            {
              pending: XU,
              items: zU
            } = wU.current,
            cU = Object.keys(XU).filter((zU => UU - XU[zU].at >= 12e3));
          if (0 === cU.length) return;
          const yU = cU.some((UU => {
            var cU, yU;
            return "search" !== (null === zU || void 0 === zU || null === (cU = zU[UU]) || void 0 === cU || null === (yU = cU.smp) || void 0 === yU ? void 0 : yU.kind) || XU[UU].resend
          }));
          for (const QU of cU) CU.current[QU] = UU;
          GU((UU => uQ(UU, (UU => !cU.includes(UU))))), yU && qU(IU("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(UU)
        }
      }), [OU]), (0, cU.useEffect)((() => {
        GU({})
      }), [pU]), (0, cU.useEffect)((() => {
        DU || PU(!1)
      }), [DU]);
      const SU = (0, cU.useCallback)((function(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: cU,
            pending: yU,
            canAfford: QU,
            buy: AU
          } = wU.current, FU = null === cU || void 0 === cU ? void 0 : cU[UU];
          if (!FU || UU in yU || !1 === FU.canBuy) return !1;
          if (!QU(FU, (0, py.d)(FU, XU))) return !1;
          AU(UU, FU, XU);
          const oU = {
            snapshot: cQ(FU),
            at: Date.now(),
            resend: zU
          };
          return wU.current.pending = {
            ...wU.current.pending,
            [UU]: oU
          }, GU((XU => ({
            ...XU,
            [UU]: oU
          }))), !0
        }), []),
        rU = (0, cU.useMemo)((() => ({
          shopInfo: EU,
          categoryKey: pU,
          canAfford: UU.canAfford,
          isPending: UU => UU in kU,
          gaveUpAt: UU => {
            var XU;
            return null !== (XU = CU.current[UU]) && void 0 !== XU ? XU : 0
          },
          act: SU,
          notify: qU
        })), [EU, pU, UU.canAfford, kU, SU, qU]),
        uU = Math.min(...Object.values(kU).map((UU => UU.at))),
        fU = OU && Date.now() - uU > 1500,
        iU = BU.length > 1,
        HU = null !== (zU = null === (yU = EU[pU]) || void 0 === yU ? void 0 : yU.customTitle) && void 0 !== zU ? zU : pU,
        MU = null === (oU = EU[pU]) || void 0 === oU ? void 0 : oU.description;
      let vU = null;
      return "market" === aU ? vU = (0, YU.jsx)(RQ, {}) : "sell" === aU ? vU = (0, YU.jsx)(dQ, {}) : "collect" === aU ? vU = (0, YU.jsx)(eQ, {}) : "orders" === aU ? vU = (0, YU.jsx)(qQ, {}) : "myOrders" === aU && (vU = (0, YU.jsx)(OQ, {})), (0, YU.jsx)(yQ.Provider, {
        value: rU,
        children: (0, YU.jsx)("div", {
          className: "SmpShopHost",
          hidden: !gU,
          children: (0, YU.jsxs)("div", {
            className: "SmpShop",
            children: [(0, YU.jsx)("header", {
              className: "SmpHeader",
              children: (0, YU.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, YU.jsxs)("h2", {
                  children: [aU && (0, YU.jsx)(FU.d, {
                    name: rQ[aU]
                  }), IU(HU)]
                }), MU && (0, YU.jsx)("p", {
                  children: (0, YU.jsx)(ky.d, {
                    text: MU
                  })
                })]
              })
            }), (0, YU.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: DU && vU
            }), (0, YU.jsxs)("button", {
              type: "button",
              className: QU()("SmpStatus", {
                SmpStatusWaiting: OU,
                SmpStatusFresh: !OU && null !== WU,
                SmpStatusHasHistory: iU
              }),
              "aria-live": "polite",
              "aria-expanded": iU ? RU : void 0,
              onClick: () => {
                iU && PU((UU => !UU))
              },
              children: [OU ? (0, YU.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, YU.jsx)(Hy, {}), IU(fU ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : BU[0] ? (0, YU.jsx)("span", {
                className: "SmpStatusText",
                children: (0, YU.jsx)(ky.d, {
                  text: BU[0].text
                })
              }, BU[0].id) : (0, YU.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: IU("smpShop:ready")
              }), iU && (0, YU.jsx)("small", {
                children: IU("smpShop:recentMessages", {
                  count: BU.length
                })
              })]
            }), RU && iU && (0, YU.jsx)("div", {
              className: "SmpStatusHistory",
              children: BU.map((UU => (0, YU.jsx)("div", {
                children: (0, YU.jsx)(ky.d, {
                  text: UU.text
                })
              }, UU.id)))
            })]
          })
        })
      })
    }
    class iQ {
      constructor(UU) {
        this.info = UU
      }
      static fromShopInfo(UU) {
        const XU = {};
        for (const zU in UU) {
          const cU = !0 === UU[zU].redDot && !0 !== UU[zU].forceRemoveRedDot;
          XU[zU] = {
            redDot: cU,
            items: {}
          };
          for (const yU in UU[zU].items) {
            const cU = UU[zU].items[yU],
              QU = !0 === cU.redDot && !0 !== cU.forceRemoveRedDot;
            XU[zU].items[yU] = {
              redDot: QU
            }
          }
        }
        return new iQ(XU)
      }
      anyCategoryHasRedDots() {
        for (const UU in this.info)
          if (this.categoryHasRedDot(UU)) return !0;
        return !1
      }
      doesCategoryExist(UU) {
        return !(0, kz.P)(this.info[UU])
      }
      categoryHasRedDot(UU) {
        return !0 === this.info[UU].redDot
      }
      updateCategoryRedDot(UU, XU) {
        this.info[UU].redDot = XU
      }
      doesItemExist(UU, XU) {
        return this.doesCategoryExist(UU) && !(0, kz.P)(this.info[UU].items[XU])
      }
      itemHasRedDot(UU, XU) {
        return !0 === this.info[UU].items[XU].redDot
      }
      updateItemRedDot(UU, XU, zU) {
        this.info[UU].items[XU].redDot = zU
      }
      shallowCopy() {
        return new iQ(this.info)
      }
    }

    function HQ(UU, XU) {
      return `${UU}\x1f${XU}`
    }

    function MQ(UU, XU) {
      return !(0, kz.P)(XU) && !(0, kz.P)(UU) && XU in UU
    }
    const vQ = (0, cU.memo)((function(UU) {
      var XU, zU;
      let {
        show: yU
      } = UU;
      const AU = (0, vX.e)("players", xQ),
        FU = (0, vX.e)("players", JQ),
        EU = (0, Wy.b)(),
        [IU, pU] = (0, cU.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: iQ.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        tU = (0, cU.useRef)(""),
        gU = (0, cU.useRef)(null),
        GU = (0, cU.useRef)(null),
        BU = (0, cU.useRef)(0),
        ZU = (0, cU.useRef)(void 0),
        RU = (0, cU.useRef)(null),
        PU = (0, cU.useRef)(IU),
        dU = IU.redDotInfo.anyCategoryHasRedDots(),
        [LU, CU] = (0, cU.useState)(null),
        wU = (0, cU.useRef)(!1);
      let qU = !1,
        OU = 0,
        SU = 0;
      if (IU.currencyAmounts) {
        for (const UU in IU.currencyAmounts) {
          var rU;
          const XU = IU.currencyAmounts[UU];
          XU.hidden || (OU++, (null === (rU = XU.subtext) || void 0 === rU ? void 0 : rU.length) > 0 && SU++)
        }
        qU = OU + SU > 4
      }(0, cU.useEffect)((() => {
        Gz.k.UY("showShopIconRedDot", dU, !0)
      }), [dU]), (0, cU.useEffect)((() => {
        kU.gameBridge.send("setShopOpen", yU), yU || (clearTimeout(ZU.current), pU((UU => UU.awaitingPurchase ? {
          ...UU,
          awaitingPurchase: !1
        } : UU)))
      }), [yU]), (0, cU.useEffect)((() => () => {
        kU.gameBridge.send("setShopOpen", !1), clearTimeout(ZU.current)
      }), []), (0, cU.useEffect)((() => {
        PU.current = IU
      }), [IU]), (0, cU.useEffect)((() => {
        if (null === LU) return;
        return (0, Ry.d)("pointerdown", (UU => {
          const XU = UU.target;
          null !== XU && void 0 !== XU && XU.closest(".ShopItem") || CU(null)
        }))
      }), [LU]);
      const uU = UU => {
          pU((XU => ({
            ...XU,
            ...UU
          })))
        },
        fU = UU => {
          var XU;
          clearTimeout(null === (XU = IU.onBoughtInfo) || void 0 === XU ? void 0 : XU.timeout);
          const zU = setTimeout((() => {
            uU({
              onBoughtInfo: null
            })
          }), 3e3);
          tU.current = UU, uU({
            onBoughtInfo: {
              text: UU,
              timeout: zU,
              categoryKey: gU.current
            }
          })
        },
        iU = UU => {
          const {
            shopInfo: XU,
            userInputsPerItem: zU,
            redDotInfo: cU,
            autoSelectCategory: QU
          } = function(UU, XU, zU, cU, yU, QU) {
            if ((0, kz.P)(UU) || 0 === Object.keys(UU).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: iQ.fromShopInfo({}),
              autoSelectCategory: null
            };
            const AU = eU.siteUsedData[eU.siteUsed].adConfig.showRewardedAds,
              FU = {};
            let oU = null;
            for (const tU in UU) {
              const XU = UU[tU],
                zU = {};
              let cU = !1;
              for (const UU in XU.items) {
                const yU = XU.items[UU];
                (0, py.o)(yU, AU) && (zU[UU] = yU, cU = !0)
              }
              cU && (FU[tU] = {
                ...XU,
                items: zU
              }, !0 === XU.autoSelectCategory && (oU = tU))
            }
            const DU = {},
              EU = (UU, XU, cU, AU) => {
                var FU, oU;
                const EU = HQ(UU, XU),
                  YU = null !== (FU = zU[EU]) && void 0 !== FU ? FU : zU[XU];
                if (null !== (oU = AU.userInput) && void 0 !== oU && oU.type) switch (AU.userInput.type) {
                  case "dropdown": {
                    var NU;
                    const UU = !YU || !AU.userInput.dropdownOptions.some((UU => (0, py.h)(UU) === YU)),
                      XU = AU.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === cU || void 0 === cU || null === (NU = cU.userInput) || void 0 === NU ? void 0 : NU.type) || JSON.stringify(cU.userInput.dropdownOptions) !== JSON.stringify(AU.userInput.dropdownOptions)),
                      zU = AU.userInput,
                      yU = !(0, kz.P)(zU.initialValue) && zU.dropdownOptions.some((UU => (0, py.h)(UU) === zU.initialValue));
                    var IU;
                    return void(UU || XU ? yU ? DU[EU] = null !== (IU = AU.userInput.initialValue) && void 0 !== IU ? IU : null : AU.userInput.dropdownOptions.length > 0 ? DU[EU] = (0, py.h)(AU.userInput.dropdownOptions[0]) : DU[EU] = null : DU[EU] = YU)
                  }
                  case "text":
                  case "number":
                    var pU, aU, tU;
                    return void((null === cU || void 0 === cU ? void 0 : cU.userInput) !== AU.userInput ? DU[EU] = null !== (pU = null !== (aU = AU.userInput.initialValue) && void 0 !== aU ? aU : YU) && void 0 !== pU ? pU : "" : DU[EU] = null !== (tU = null !== YU && void 0 !== YU ? YU : AU.userInput.initialValue) && void 0 !== tU ? tU : "");
                  case "color":
                    var gU, kU, GU;
                    return void((null === cU || void 0 === cU ? void 0 : cU.userInput) !== AU.userInput ? DU[EU] = null !== (gU = null !== (kU = AU.userInput.initialValue) && void 0 !== kU ? kU : YU) && void 0 !== gU ? gU : "#000000" : DU[EU] = null !== (GU = null !== YU && void 0 !== YU ? YU : AU.userInput.initialValue) && void 0 !== GU ? GU : "#000000");
                  case "player": {
                    const UU = (0, py.l)(yU, QU, AU.userInput);
                    return void(YU && UU.includes(YU) ? DU[EU] = YU : DU[EU] = UU.length > 0 ? UU[0] : null)
                  }
                }
              };
            for (const tU in FU)
              for (const UU in FU[tU].items) {
                var YU;
                const zU = FU[tU].items[UU];
                EU(tU, UU, null === (YU = XU[tU]) || void 0 === YU ? void 0 : YU.items[UU], zU)
              }
            const NU = iQ.fromShopInfo(FU);
            for (const tU in FU) {
              var IU;
              if (cU.doesCategoryExist(tU)) {
                (null === (IU = XU[tU]) || void 0 === IU ? void 0 : IU.redDot) === FU[tU].redDot && NU.updateCategoryRedDot(tU, cU.categoryHasRedDot(tU));
                for (const UU in FU[tU].items) {
                  var pU, aU;
                  cU.doesItemExist(tU, UU) && (null === (pU = XU[tU]) || void 0 === pU || null === (aU = pU.items[UU]) || void 0 === aU ? void 0 : aU.redDot) === FU[tU].items[UU].redDot && NU.updateItemRedDot(tU, UU, cU.itemHasRedDot(tU, UU))
                }
              }
            }
            return {
              shopInfo: FU,
              userInputsPerItem: DU,
              redDotInfo: NU,
              autoSelectCategory: oU
            }
          }(UU, IU.shopInfo, IU.userInputsPerItem, IU.redDotInfo, AU, FU), oU = {
            shopInfo: XU,
            userInputsPerItem: zU,
            redDotInfo: cU
          };
          if (null === QU || yU)
            if (XU[IU.selectedCategoryKey]) oU.selectedCategoryKey = IU.selectedCategoryKey;
            else {
              const UU = Ly(XU);
              oU.selectedCategoryKey = UU.length > 0 ? UU[0] : null
            }
          else oU.selectedCategoryKey = QU;
          return 0 === Object.keys(XU).length && yU && WU.e.set({
            openEverythingMenuName: null
          }), oU
        },
        MU = (UU, XU, zU) => {
          const cU = IU.selectedCategoryKey,
            yU = HQ(cU, UU),
            QU = null !== zU && void 0 !== zU ? zU : IU.userInputsPerItem[yU],
            AU = {
              categoryKey: cU,
              itemKey: UU,
              userInput: QU
            };
          if (gU.current = cU, XU.isRewardedAd) {
            if (Date.now() - BU.current < 5e3) return;
            (0, tX.Z)((() => {
              var zU, cU, QU;
              console.log("bought rewarded ad");
              const FU = AU.categoryKey ? null === (zU = PU.current.shopInfo[AU.categoryKey]) || void 0 === zU ? void 0 : zU.items[UU] : null;
              if (!FU || !FU.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (cU = XU.userInput) || void 0 === cU ? void 0 : cU.type) === (null === FU || void 0 === FU || null === (QU = FU.userInput) || void 0 === QU ? void 0 : QU.type) ? (AU.userInput = PU.current.userInputsPerItem[yU], kU.gameBridge.send("buyShopItem", AU), XU.onBoughtMessage && fU(XU.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), BU.current = Date.now()
          } else {
            kU.gameBridge.send("buyShopItem", AU), uU({
              awaitingPurchase: !0
            }), clearTimeout(ZU.current), ZU.current = setTimeout((() => {
              RU.current = null, uU({
                awaitingPurchase: !1
              })
            }), 1e3);
            const UU = (0, py.d)(XU, QU);
            if (RU.current = null, !isNaN(UU) && MQ(IU.currencyAmounts, XU.currency)) {
              0 !== UU && (RU.current = {
                currency: XU.currency,
                amountBefore: IU.currencyAmounts[XU.currency].amount
              });
              const zU = {
                ...IU.currencyAmounts
              };
              zU[XU.currency].amount -= UU, uU({
                currencyAmounts: zU
              })
            }
            XU.onBoughtMessage && fU(XU.onBoughtMessage)
          }
        },
        vU = (UU, XU) => {
          if (null === XU || !UU.shopInfo[XU]) return UU;
          let zU = UU.redDotInfo;
          return zU.categoryHasRedDot(XU) && (zU.updateCategoryRedDot(XU, !1), zU = zU.shallowCopy()), {
            ...UU,
            selectedCategoryKey: XU,
            redDotInfo: zU
          }
        },
        VU = UU => {
          pU((XU => vU(XU, UU)))
        };
      (0, jX.f)(Py.k, (() => {
        pU((UU => {
          const XU = (0, Py.n)(Ly(UU.shopInfo), UU.selectedCategoryKey, (XU => (0, Py.g)(UU.shopInfo[XU].items)));
          return XU === UU.selectedCategoryKey ? UU : vU(UU, XU)
        }))
      })), (0, jX.f)("showShopFromServer", (UU => {
        let {
          toggle: XU,
          Hc: zU
        } = UU;
        zU && VU(zU), 0 === Object.keys(IU.shopInfo).length || XU && yU ? WU.e.set({
          openEverythingMenuName: null
        }) : WU.e.set({
          openEverythingMenuName: gX.s.SHOP
        })
      })), (0, jX.f)("closeShopOnDamaged", (() => {
        yU && WU.e.set({
          openEverythingMenuName: null
        })
      })), (0, jX.f)("overShopInfo", (UU => {
        fU(UU)
      })), (0, aU.e)("currencyAmounts", (UU => {
        var XU;
        const zU = RU.current;
        zU && (null === UU || void 0 === UU || null === (XU = UU[zU.currency]) || void 0 === XU ? void 0 : XU.amount) === zU.amountBefore ? uU({
          currencyAmounts: UU
        }) : (RU.current = null, uU({
          currencyAmounts: UU,
          awaitingPurchase: !1
        }))
      })), (0, aU.e)("shopInfo", (UU => {
        uU({
          ...iU(UU),
          awaitingPurchase: !1
        })
      }));
      const sU = (0, cU.useRef)({
        playerIds: AU,
        localPlayerId: FU
      });
      (0, cU.useEffect)((() => {
        sU.current.playerIds === AU && sU.current.localPlayerId === FU || (sU.current = {
          playerIds: AU,
          localPlayerId: FU
        }, pU((UU => {
          const XU = iU(UU.shopInfo);
          return {
            ...UU,
            ...XU
          }
        })))
      }), [AU, FU]);
      const nU = IU.selectedCategoryKey,
        mU = (UU, XU) => {
          var zU, cU;
          return (isNaN(XU) || (0, kz.P)(UU.currency) || MQ(IU.currencyAmounts, UU.currency) && XU <= IU.currencyAmounts[UU.currency].amount) && (null === (zU = UU.canBuy) || void 0 === zU || zU) && !(null !== (cU = UU.hidden) && void 0 !== cU && cU)
        },
        lU = (UU, XU) => {
          var zU, cU, yU;
          const AU = HQ(nU, UU),
            FU = IU.shopInfo[nU].items[UU],
            EU = IU.userInputsPerItem[AU],
            NU = (0, py.d)(FU, EU),
            pU = mU(FU, NU),
            aU = FU.enchant,
            tU = aU ? (0, HU.tb)(null !== (zU = FU.customTitle) && void 0 !== zU ? zU : UU, {
              colour: HU.pb[aU.tier]
            }) : null !== (cU = FU.customTitle) && void 0 !== cU ? cU : UU,
            gU = XU => {
              const zU = null !== XU && void 0 !== XU ? XU : EU,
                cU = void 0 !== XU ? (0, py.d)(FU, XU) : NU;
              mU(FU, cU) && null !== zU && MU(UU, FU, XU);
              let yU = IU.redDotInfo;
              yU.itemHasRedDot(nU, UU) && (yU.updateItemRedDot(nU, UU, !1), yU = yU.shallowCopy()), uU({
                redDotInfo: yU
              })
            };
          return (0, YU.jsxs)("div", {
            className: QU()("ShopItem", {
              ShopItemNoInput: !FU.userInput,
              ShopItemNoInputCanBuy: !FU.userInput && pU,
              ShopItemNoInputSelected: FU.isSelected,
              ShopItemEnchant: !!aU
            }),
            "data-pad-focusable": !FU.userInput || void 0,
            "data-pad-unavailable": !FU.userInput && !pU || void 0,
            "data-pad-repeat": null !== (yU = (0, Py.c)(FU)) && void 0 !== yU ? yU : void 0,
            "data-pad-repeat-wait": IU.awaitingPurchase || void 0,
            onClick: () => {
              if (aU && wU.current) {
                if (LU !== AU) return void CU(AU);
                CU(null)
              }
              FU.userInput || gU()
            },
            onPointerDown: UU => {
              aU && (wU.current = (0, ty.t)(UU))
            },
            onPointerEnter: UU => {
              aU && !(0, ty.t)(UU) && CU(AU)
            },
            onPointerLeave: UU => {
              aU && !(0, ty.t)(UU) && CU((UU => UU === AU ? null : UU))
            },
            style: {
              zIndex: Object.keys(IU.shopInfo[nU].items).length - XU
            },
            children: [IU.redDotInfo.itemHasRedDot(nU, UU) && (0, YU.jsx)(oU.c, {
              top: "-6px",
              right: "-6px"
            }), FU.badge && (0, YU.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, YU.jsx)("div", {
                className: QU()("ShopBadgeMain", FU.badge.type),
                children: (0, YU.jsx)(ky.d, {
                  text: FU.badge.text
                })
              })
            }), (0, YU.jsx)("div", {
              className: "ShopItemLeft",
              children: FU.image && (0, YU.jsx)(VQ, {
                item: FU,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, YU.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, YU.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, YU.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, YU.jsx)(ky.d, {
                    text: tU
                  })
                }), (0, YU.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, YU.jsx)(ky.d, {
                    text: FU.description
                  })
                })]
              }), FU.userInput && (0, YU.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: UU => {
                  UU.stopPropagation()
                },
                children: [(0, YU.jsx)(mQ, {
                  item: FU,
                  currInput: EU,
                  updateInput: XU => {
                    ((UU, XU, zU) => {
                      const cU = HQ(UU, XU),
                        yU = {
                          ...IU.userInputsPerItem
                        };
                      yU[cU] = zU, uU({
                        userInputsPerItem: yU
                      })
                    })(nU, UU, XU)
                  },
                  onSubmit: UU => {
                    gU(UU)
                  }
                }), ("dropdown" !== FU.userInput.type || !FU.userInput.autoSubmit) && (0, YU.jsx)(DU.f, {
                  className: "ItemCostButton",
                  disabled: !pU && null !== EU,
                  onClick: () => {
                    gU()
                  },
                  children: (0, YU.jsx)(nQ, {
                    item: FU,
                    cost: NU,
                    currencyAmounts: IU.currencyAmounts
                  })
                })]
              })]
            }), !FU.userInput && (0, YU.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, YU.jsx)(nQ, {
                item: FU,
                cost: NU,
                currencyAmounts: IU.currencyAmounts
              })
            }), aU && LU === AU && (0, YU.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, YU.jsx)(ky.d, {
                text: tU
              }), (0, YU.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, YU.jsx)(ky.d, {
                  text: (0, ay.c)("", aU.enchantments, aU.enchantmentData)
                })
              })]
            })]
          }, AU)
        },
        xU = function(UU) {
          for (const XU in UU)
            if (UU[XU].smp) return !0;
          return !1
        }(IU.shopInfo),
        JU = ly(IU.shopInfo, nU);
      return (0, YU.jsx)(Yy.b, {
        className: "Menu ShopBody",
        show: yU,
        children: 0 !== Object.keys(IU.shopInfo).length && (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, YU.jsx)(NU, {
              items: Ly(IU.shopInfo).map((UU => {
                var XU;
                return {
                  id: UU,
                  title: null !== (XU = IU.shopInfo[UU].customTitle) && void 0 !== XU ? XU : UU,
                  redDot: IU.redDotInfo.categoryHasRedDot(UU)
                }
              })),
              link: EU ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, dy.f)({
                    page: (0, dy.c)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: nU,
              onClick: VU,
              padStartsOnTab: (0, Py.f)(nU)
            }), (0, YU.jsx)("div", {
              className: "MenuSideBarFooter",
              children: IU.currencyAmounts && Object.keys(IU.currencyAmounts).map((UU => {
                var XU;
                const zU = IU.currencyAmounts[UU];
                return zU.hidden ? null : (0, YU.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (qU ? "SmallText" : ""),
                  children: [(0, YU.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, YU.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: zU.iconColour
                      },
                      children: (0, YU.jsx)(jQ, {
                        iconName: zU.icon
                      })
                    }), "\xa0", (0, Iy.e)(zU.amount, 6)]
                  }), (null === (XU = zU.subtext) || void 0 === XU ? void 0 : XU.length) > 0 && (0, YU.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, YU.jsx)(ky.d, {
                      text: zU.subtext
                    })
                  })]
                }, UU)
              }))
            })]
          }), (0, YU.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [xU && (0, YU.jsx)(fQ, {
              show: yU,
              shopInfo: IU.shopInfo,
              selectedCategoryKey: nU,
              buy: (UU, XU, zU) => {
                MU(UU, XU, zU)
              },
              canAfford: mU,
              message: IU.onBoughtInfo
            }), null === JU && (0, YU.jsxs)(YU.Fragment, {
              children: [(0, YU.jsx)("div", {
                className: QU()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== IU.onBoughtInfo
                }),
                children: (0, YU.jsx)(ky.d, {
                  text: tU.current
                })
              }), (0, YU.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, YU.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (XU = IU.shopInfo[nU]) || void 0 === XU ? void 0 : XU.description) && (0, YU.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, YU.jsx)(ky.d, {
                      text: IU.shopInfo[nU].description
                    })
                  }), yU && (0, YU.jsx)("div", {
                    className: "ShopItems",
                    ref: GU,
                    "data-pad-initial-area": !0,
                    children: Ly(null === (zU = IU.shopInfo[nU]) || void 0 === zU ? void 0 : zU.items).map(((UU, XU) => lU(UU, XU)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function VQ(UU) {
      let {
        item: XU,
        minWidth: zU,
        minHeight: cU
      } = UU;
      const {
        image: yU,
        schematicId: QU,
        imageColour: AU
      } = XU;
      if (QU) return (0, YU.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${zU}rem`,
          height: `${cU}rem`
        },
        children: (0, YU.jsx)(Gy.d, {
          game: {
            schematicId: QU
          }
        })
      });
      var oU, DU;
      if ((0, gy.g)(yU)) return (0, YU.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${zU}rem`,
          height: "0",
          minHeight: `${cU}rem`
        },
        children: (0, YU.jsx)(gy.c, {
          itemName: yU,
          amount: null !== (oU = XU.amount) && void 0 !== oU ? oU : 0,
          amountFontSize: cU / 4 + "rem",
          enchantmentTier: null === (DU = XU.enchant) || void 0 === DU ? void 0 : DU.tier
        })
      });
      const EU = yU.slice(-4);
      return ".jpg" === EU || ".png" === EU ? (0, YU.jsx)(sQ, {
        image: yU,
        minWidth: zU
      }) : (0, YU.jsx)(FU.d, {
        name: yU,
        className: "SelectedItemImage",
        style: {
          color: AU
        }
      })
    }

    function sQ(UU) {
      let {
        image: XU,
        minWidth: zU
      } = UU;
      const {
        gameNameWithVariation: cU
      } = (0, vX.i)("connectedGame"), yU = XU.endsWith(".jpg");
      return (0, YU.jsx)("img", {
        className: QU()({
          ShopPixelImage: !yU
        }),
        style: {
          width: `${yU?1.6*zU:zU}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,HU.Tb)(cU)}/${XU}`,
        alt: XU,
        draggable: !1
      })
    }

    function nQ(UU) {
      let {
        item: XU,
        cost: zU,
        currencyAmounts: cU
      } = UU;
      const yU = !isNaN(zU) && 0 !== zU && MQ(cU, XU.currency);
      let QU = null;
      return XU.buyButtonText ? QU = XU.buyButtonText : yU ? (QU = zU, XU.sell && (QU = -1 * zU), QU = QU.toString()) : 0 === zU ? QU = "Free" : XU.isRewardedAd && (QU = "Watch ad"), (0, kz.P)(QU) || " " === QU ? null : (0, YU.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [yU && (0, YU.jsx)("div", {
          style: {
            color: cU[XU.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, YU.jsx)(jQ, {
            iconName: cU[XU.currency].icon
          })
        }), (0, YU.jsx)("div", {
          className: "BuyItemCost",
          children: (0, YU.jsx)(ky.d, {
            text: QU
          })
        })]
      })
    }

    function mQ(UU) {
      let {
        item: XU,
        currInput: zU,
        updateInput: yU,
        onSubmit: QU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)(), oU = (0, cU.useRef)(null);
      if ((0, cU.useEffect)((() => {
          const UU = oU.current;
          UU && UU.value !== zU && document.activeElement !== UU && (UU.value = null !== zU && void 0 !== zU ? zU : "")
        }), [zU]), !XU.userInput) return null;
      let DU = XU.userInput;
      if (gU.featureFlags.sanitizeShopInput && "text" === XU.userInput.type && (DU = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === DU.type || "number" === DU.type) {
        var EU, NU;
        console.assert(void 0 !== zU, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(XU)}`);
        const UU = "text" === DU.type && DU.wordCharsOnly;
        return (0, YU.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, YU.jsx)(ZU.e, {
            className: "ShopItemUserInputText",
            placeholderText: FU(DU.placeholderText),
            defaultValue: zU,
            domRef: oU,
            onValueChange: (XU, zU) => {
              !0 === UU && (XU = (0, Zy.$)(XU)), oU.current.value = XU, yU(XU)
            },
            onEnter: QU,
            type: DU.type
          }, (null !== (EU = DU.initialValue) && void 0 !== EU ? EU : "") + (null !== (NU = DU.placeholderText) && void 0 !== NU ? NU : ""))
        })
      }
      if ("dropdown" === DU.type) {
        console.assert(void 0 !== zU, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(XU)}`);
        const UU = DU.autoSubmit;
        return (0, YU.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, YU.jsx)(iX.d, {
            options: DU.dropdownOptions.map((UU => (0, py.h)(UU))),
            value: zU,
            onChange: XU => {
              let {
                value: zU
              } = XU;
              yU(zU), UU && QU(zU)
            }
          })
        })
      }
      return "player" === DU.type ? (0, YU.jsx)(lQ, {
        userInput: DU,
        currInput: zU,
        updateInput: yU
      }) : "color" === DU.type ? (0, YU.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, YU.jsx)("input", {
          type: "color",
          value: zU,
          onChange: UU => {
            yU(UU.target.value)
          }
        })
      }) : null
    }

    function lQ(UU) {
      let {
        userInput: XU,
        currInput: zU,
        updateInput: cU
      } = UU;
      const yU = (0, vX.i)("players"),
        QU = (0, vX.i)("hiddenPlayerNames"),
        AU = (0, py.l)(yU.ids, yU.localId, XU);
      return (0, YU.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, YU.jsx)(iX.d, {
          options: AU.map((UU => {
            const {
              name: XU
            } = yU.byId[UU];
            return {
              value: UU,
              label: null === XU ? "" : (0, By.c)(XU, QU)
            }
          })),
          value: zU,
          onChange: UU => {
            let {
              value: XU
            } = UU;
            cU(XU)
          }
        })
      })
    }

    function xQ(UU) {
      let {
        ids: XU
      } = UU;
      return XU
    }

    function JQ(UU) {
      let {
        localId: XU
      } = UU;
      return XU
    }

    function jQ(UU) {
      let {
        iconName: XU
      } = UU;
      return kU.gameBridge.lookup("isItemName", XU) ? (0, YU.jsx)(gy.c, {
        itemName: XU,
        amount: 1
      }) : (0, YU.jsx)(FU.d, {
        name: XU,
        className: "2x"
      })
    }
    var KQ = zU(1680);
    const bQ = (0, zU(1457).g)((UU => UU.PadLobbyShortcuts)),
      TQ = (0, cU.lazy)((() => Promise.resolve().then((() => zU(5101))).then((UU => ({
        default: UU.Lobbyleaderboard
      }))))),
      hQ = (0, cU.lazy)((() => zU.e(238).then((() => zU(42174))).then((UU => ({
        default: UU.LobbyManageView
      })))));

    function UA(UU) {
      let {
        show: XU
      } = UU;
      return XU ? (0, YU.jsx)(XA, {}) : null
    }

    function XA() {
      const UU = (0, Wy.b)();
      return (0, YU.jsxs)(YU.Fragment, {
        children: [(0, YU.jsx)(bQ, {}), (0, YU.jsxs)(cU.Suspense, {
          fallback: (0, YU.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, YU.jsx)(RU.b, {})
          }),
          children: [UU && (0, YU.jsx)(hQ, {
            leaderboard: (0, YU.jsx)(TQ, {})
          }), !UU && (0, YU.jsx)(TQ, {})]
        })]
      })
    }
    var zA = zU(1605),
      cA = zU(3350),
      yA = zU(1800),
      QA = zU(3390),
      AA = zU(2916),
      FA = zU(1537),
      oA = zU(1498),
      DA = zU(3329),
      EA = zU(3342),
      YA = zU(2455);
    const NA = "storeRecentGiftRecipients",
      IA = new Map;

    function pA() {
      try {
        const UU = cz.k.getItem(NA);
        return Array.isArray(UU) ? UU.filter((UU => "string" === typeof(null === UU || void 0 === UU ? void 0 : UU.name) && UU.name.length > 0)).map((UU => ({
          name: UU.name,
          cosmetics: UU.cosmetics && "object" === typeof UU.cosmetics ? UU.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function aA(UU, XU) {
      var zU;
      const [yU, QU] = (0, cU.useState)(""), [AU, FU] = (0, cU.useState)("search"), [oU, DU] = (0, cU.useState)(null), [EU, YU] = (0, cU.useState)(null), NU = (0, cU.useRef)(null), IU = (0, cU.useRef)(null);
      (0, cU.useEffect)((() => () => {
        NU.current && clearTimeout(NU.current)
      }), []), (0, cU.useEffect)((() => {
        XU || tU()
      }), [XU]);
      const pU = null !== (zU = null === oU || void 0 === oU ? void 0 : oU.name) && void 0 !== zU ? zU : null;

      function aU() {
        NU.current && (clearTimeout(NU.current), NU.current = null)
      }

      function tU() {
        aU(), QU(""), FU("search"), DU(null)
      }(0, cU.useEffect)((() => {
        if (null === pU || UU === CU.NULL_USER_CONTEXT) return;
        const XU = pU.toLowerCase();
        if (XU === UU.getPlayerName().toLowerCase()) return void YU({
          name: pU,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const zU = IA.get(XU);
        if (zU) return void YU({
          name: pU,
          result: zU
        });
        let cU = !1;
        return async function(UU, XU) {
          try {
            const zU = await (0, CU.postJsonWithMetricsCookiesAndJsonResponse)(`${aX.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: XU
            }, {
              retries: 1
            }, UU.getMetricsCookies());
            if ("boolean" !== typeof(null === zU || void 0 === zU ? void 0 : zU.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(zU)}`);
            return zU
          } catch (zU) {
            return console.error("Failed to look up gift recipient:", zU), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(UU, pU).catch((UU => (console.error("Gift recipient lookup failed:", UU), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((UU => {
          !0 !== UU.giftRecipientFound && "store:giftRecipientLookupFailed" === UU.giftRecipientError || IA.set(XU, UU), cU || YU({
            name: pU,
            result: UU
          })
        })), () => {
          cU = !0
        }
      }), [pU, UU]);
      const gU = (0, cU.useMemo)((() => {
        const UU = yU.trim();
        if (!UU) return {
          status: "none"
        };
        if (!oU || oU.name !== UU || (null === EU || void 0 === EU ? void 0 : EU.name) !== oU.name) return {
          status: "pending",
          name: UU
        };
        const XU = EU.result;
        return !1 === XU.giftRecipientFound ? {
          status: "error",
          name: oU.name,
          error: XU.giftRecipientError
        } : {
          status: "found",
          name: XU.giftRecipientName,
          ownedPacks: XU.giftRecipientOwnedPacks,
          hasSuperRank: XU.giftRecipientHasSuperRank,
          isSubscriber: XU.giftRecipientIsSubscriber
        }
      }), [yU, oU, EU]);
      (0, cU.useEffect)((() => {
        "found" === gU.status && "typed" === (null === oU || void 0 === oU ? void 0 : oU.source) && IU.current !== gU.name && (IU.current = gU.name, (0, XX.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [gU, oU]);
      const kU = (null === EU || void 0 === EU ? void 0 : EU.name) === (null === oU || void 0 === oU ? void 0 : oU.name) ? null === EU || void 0 === EU ? void 0 : EU.result : null,
        GU = !0 === (null === kU || void 0 === kU ? void 0 : kU.giftRecipientFound) ? kU.giftRecipientCosmetics : null;
      return {
        query: yU,
        via: AU,
        recipient: gU,
        recipientCosmetics: GU,
        type: function(UU) {
          QU(UU), FU("search"), aU();
          const XU = UU.trim();
          XU ? NU.current = setTimeout((() => {
            DU({
              name: XU,
              source: "typed"
            })
          }), 400) : DU(null)
        },
        choose: function(UU, XU) {
          aU(), QU(UU), FU("typed" === XU ? "search" : "prefilled" === XU ? "prefilled" : "suggestion"), DU({
            name: UU,
            source: XU
          }), "typed" !== XU && "prefilled" !== XU && (0, XX.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: XU
          })
        },
        clear: tU,
        recordGift: function(UU, XU) {
          ! function(UU) {
            IA.delete(UU.toLowerCase())
          }(UU), YU((zU => {
            if (!zU || zU.name.toLowerCase() !== UU.toLowerCase() || !0 !== zU.result.giftRecipientFound || "superRank" === XU) return zU;
            const cU = zU.result.giftRecipientOwnedPacks;
            return {
              ...zU,
              result: {
                ...zU.result,
                giftRecipientOwnedPacks: cU.includes(XU) ? cU : [...cU, XU]
              }
            }
          }))
        }
      }
    }
    var tA = zU(2450),
      gA = zU(5108),
      kA = zU(264),
      GA = zU(3217);
    const BA = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var ZA = zU(2401),
      RA = zU(625),
      PA = zU(2500),
      WA = zU(2841);

    function dA(UU) {
      let {
        cosmetics: XU
      } = UU;
      return (0, YU.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, YU.jsx)(PA.b, {
          cosmetics: XU
        })
      })
    }

    function LA(UU, XU) {
      var zU, cU;
      const yU = null !== (zU = UU.friend) && void 0 !== zU ? zU : {
        isError: !1,
        name: UU.name,
        ranks: [],
        cosmetics: null !== (cU = UU.cosmetics) && void 0 !== cU ? cU : {},
        nameColour: RA.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return XU ? {
        ...yU,
        cosmetics: XU
      } : yU
    }

    function eA(UU) {
      let {
        pending: XU
      } = UU;
      return (0, YU.jsx)("span", {
        className: "StoreRecipientLoader",
        children: XU && (0, YU.jsx)(RU.b, {})
      })
    }

    function CA(UU) {
      var XU;
      let {
        selfName: zU,
        giftRecipient: yU,
        suggestionsVersion: oU,
        pulseSignal: EU,
        disabled: NU
      } = UU;
      const {
        t: IU
      } = (0, AU.I)(), pU = (0, nU.o)(), aU = (0, cU.useRef)(null), tU = (0, cU.useRef)(null), {
        query: kU,
        via: GU,
        recipient: BU,
        recipientCosmetics: RU
      } = yU, PU = (0, YA.o)(kU), WU = (0, cU.useMemo)((() => {
        const UU = gU.featureFlags.useSocialFeatures ? pU.friends.filter((UU => !UU.isError)) : [];
        return (0, YA.j)({
          onlineFriends: (0, nU.h)(UU),
          recentRecipients: pA(),
          friends: UU,
          selfName: zU,
          max: 8
        })
      }), [pU.friends, zU, oU]), dU = kU.trim().toLowerCase(), LU = "search" !== GU && dU ? WU.find((UU => UU.name.toLowerCase() === dU)) : void 0, eU = LU && "prefilled" === GU ? [LU, ...WU.filter((UU => UU !== LU))] : WU, CU = "" !== dU && !LU, wU = CU ? kU : "", qU = eU.length > 0;
      (0, cU.useEffect)((() => {
        aU.current && aU.current.value !== wU && (aU.current.value = wU)
      }), [wU]), (0, cU.useEffect)((() => {
        aU.current && (aU.current.disabled = NU)
      }), [NU, EU]);
      const OU = (0, cU.useRef)(0);

      function rU() {
        "self" !== PU && (0, XX.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), yU.clear()
      }

      function uU(UU) {
        var XU, zU;
        if (NU) return;
        if (" " === UU.key || "Enter" === UU.key) return UU.preventDefault(), void UU.currentTarget.click();
        const cU = Array.from(null !== (XU = null === (zU = tU.current) || void 0 === zU ? void 0 : zU.querySelectorAll("[role=radio]")) && void 0 !== XU ? XU : []),
          yU = cU.indexOf(UU.currentTarget);
        let QU;
        "ArrowRight" === UU.key || "ArrowDown" === UU.key ? QU = cU[(yU + 1) % cU.length] : "ArrowLeft" === UU.key || "ArrowUp" === UU.key ? QU = cU[(yU - 1 + cU.length) % cU.length] : "Home" === UU.key ? QU = cU[0] : "End" === UU.key && (QU = cU[cU.length - 1]), QU && (UU.preventDefault(), QU.focus(), QU.click())
      }(0, cU.useEffect)((() => {
        var UU;
        EU > OU.current && !NU && (OU.current = EU, null === (UU = aU.current) || void 0 === UU || UU.focus())
      }), [EU, NU]);
      const fU = "self" === PU,
        iU = null !== (XU = null === LU || void 0 === LU ? void 0 : LU.name) && void 0 !== XU ? XU : null,
        HU = "error" === BU.status ? BU.error : null,
        MU = "store:giftRecipientLookupFailed" === HU;
      return (0, YU.jsxs)("div", {
        className: QU()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: NU,
          StoreRecipientStripNoChips: !qU
        }),
        children: [(0, YU.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: IU("store:buyingFor")
        }), (0, YU.jsxs)("div", {
          ref: tU,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": IU("store:whoIsItFor"),
          children: [(0, YU.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": fU,
            tabIndex: NU || !fU && null !== iU ? -1 : 0,
            className: QU()("StoreRecipientMe", {
              StoreRecipientChecked: fU
            }),
            onClick: () => {
              NU || rU()
            },
            onKeyDown: uU,
            children: [(0, YU.jsx)(FU.d, {
              name: "user"
            }), " ", IU("store:me")]
          }), qU && (0, YU.jsx)("div", {
            className: "StoreRecipientChips",
            children: eU.map((UU => {
              const XU = UU === LU;
              return (0, YU.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": XU,
                tabIndex: !NU && XU ? 0 : -1,
                title: UU.name,
                className: QU()("StoreRecipientChip", {
                  StoreRecipientChecked: XU
                }),
                onClick: () => {
                  NU || function(UU) {
                    "gift" !== PU && (0, XX.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), yU.choose(UU.name, UU.kind)
                  }(UU)
                },
                onKeyDown: uU,
                children: (0, YU.jsx)(WA.f, {
                  playerSocialPreview: LA(UU, XU ? RU : null),
                  opensProfileCard: !1,
                  isFriend: null !== UU.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== UU.friend,
                  status: null === UU.friend ? null : void 0,
                  trailing: XU ? (0, YU.jsx)(eA, {
                    pending: "pending" === BU.status
                  }) : void 0
                })
              }, UU.name)
            }))
          })]
        }), (0, YU.jsxs)("div", {
          className: QU()("StoreRecipientSearch", {
            StoreRecipientChecked: CU,
            StoreRecipientSearchPulse: EU > 0 && !CU,
            StoreRecipientSearchError: null !== HU && !MU
          }),
          onClick: () => {
            var UU;
            null === (UU = aU.current) || void 0 === UU || UU.focus()
          },
          children: [CU && "found" === BU.status && RU && (0, YU.jsx)(dA, {
            cosmetics: RU
          }), !(CU && "found" === BU.status && RU) && (0, YU.jsx)(FU.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, YU.jsx)(ZU.e, {
            className: "StoreRecipientSearchInput",
            domRef: aU,
            placeholderText: IU("store:searchName"),
            defaultValue: wU,
            maxLength: SU.h,
            onValueChange: function(UU) {
              "gift" !== PU && UU.trim() && (0, XX.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), yU.type(UU)
            },
            onEnter: () => {
              var UU;
              const XU = null === (UU = aU.current) || void 0 === UU ? void 0 : UU.value.trim();
              XU && yU.choose(XU, "typed")
            },
            blurOnEnter: !0
          }), CU && (0, YU.jsx)(eA, {
            pending: "pending" === BU.status
          }), CU && (0, YU.jsx)("div", {
            ...(0, DU.W)({
              disabled: NU
            }),
            "aria-label": IU("store:clearRecipient"),
            title: IU("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: UU => {
              UU.stopPropagation(), NU || rU()
            },
            children: (0, YU.jsx)(FU.d, {
              name: "xmark"
            })
          })]
        }, EU), HU && (0, YU.jsx)("div", {
          className: QU()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: MU
          }),
          role: "status",
          children: IU(HU)
        })]
      })
    }
    var wA = zU(2559),
      qA = zU(3966),
      OA = zU(3482),
      SA = zU(2410);
    const rA = zU.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function uA() {
      (0, SA.i)(rA, {
        lowPriority: !1
      })
    }

    function fA(UU) {
      let {
        onBack: XU,
        cta: zU,
        recipient: yU,
        afterCta: QU
      } = UU;
      const {
        t: oU
      } = (0, AU.I)(), [EU, NU] = (0, cU.useState)("starting"), IU = (0, cU.useRef)(null), pU = (0, TX.b)(), aU = (0, cU.useRef)(null), tU = (0, cU.useCallback)((() => {
        const UU = IU.current;
        null !== UU.error && UU.load();
        const XU = UU.play();
        aU.current = XU, XU.catch((UU => {
          (0, qA.e)("Failed to play Super Rank video", UU), pU.current && aU.current === XU && NU("failed")
        }))
      }), [pU]);
      return (0, cU.useEffect)((() => {
        const UU = IU.current;
        let XU;

        function zU() {
          clearTimeout(XU), XU = setTimeout(tU, 3e3)
        }
        return tU(), UU.addEventListener("ended", zU), () => {
          clearTimeout(XU), UU.removeEventListener("ended", zU)
        }
      }), [tU]), (0, YU.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, YU.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, YU.jsx)(DU.e, {
            className: "StoreDetailBackButton",
            onClick: XU,
            padBack: !0,
            children: oU("general:back")
          }), (0, YU.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, YU.jsx)(FU.d, {
              name: "bolt"
            }), " ", oU("homePage:superRank")]
          }), yU]
        }), (0, YU.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, YU.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, YU.jsx)("video", {
              ref: IU,
              src: `${aX.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: rA,
              muted: !0,
              playsInline: !0,
              controls: "playing" === EU,
              onPlaying: () => {
                NU("playing")
              },
              onError: () => {
                NU("failed")
              }
            }), ("failed" === EU || "loading" === EU) && (0, YU.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, YU.jsx)(DU.f, {
                ariaLabel: oU("general:play"),
                loading: "loading" === EU,
                onClick: () => {
                  NU("loading"), tU()
                },
                touchPressOn: "pointerup",
                children: (0, YU.jsx)(FU.d, {
                  name: "play"
                })
              })
            })]
          }), (0, YU.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, YU.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, YU.jsx)(OA.d, {})
            }), (0, YU.jsxs)("div", {
              className: "StoreTileActions",
              children: [zU, QU]
            })]
          })]
        })]
      })
    }
    var iA = zU(2852),
      HA = zU(3920),
      MA = zU(3452),
      vA = zU(3455),
      VA = zU(3426);
    const sA = [RA.u.yellow, RA.u.green, RA.u.aqua, RA.u.blue, RA.u.purple, RA.u.red];

    function nA(UU) {
      return "needsRecipient" === UU || "lookingUp" === UU || "gift" === UU || "recipientOwns" === UU || "recipientSharesOwned" === UU || "recipientSubscribed" === UU
    }

    function mA(UU) {
      const {
        onKeyDown: XU,
        ...zU
      } = (0, DU.W)();
      return {
        ...zU,
        "aria-label": UU,
        onKeyDown: UU => {
          UU.target === UU.currentTarget && (null === XU || void 0 === XU || XU(UU))
        }
      }
    }

    function lA(UU) {
      let {
        text: XU
      } = UU;
      return (0, YU.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(XU).map(((UU, XU) => (0, YU.jsx)("span", {
          style: {
            color: sA[XU % sA.length]
          },
          children: UU
        }, XU)))
      })
    }
    const xA = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function JA(UU) {
      let {
        state: XU,
        item: zU,
        price: cU,
        busy: yU,
        highlight: oU = !1,
        onAct: EU,
        onNeedRecipient: NU,
        onLogin: IU
      } = UU;
      const {
        t: pU
      } = (0, AU.I)(), aU = "superRank" === zU ? uU.n.product.days : null, tU = UU => null === aU ? pU(UU ? "general:gift" : "general:buy") : pU(UU ? "store:giftDays" : "store:buyDays", {
        days: aU
      }), gU = (UU, XU) => {
        const zU = (0, YU.jsxs)(YU.Fragment, {
          children: [null === UU && (0, YU.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== UU && (0, YU.jsx)("span", {
            className: "StoreCtaLabel",
            title: UU,
            children: UU
          })]
        });
        return null !== aU ? (0, YU.jsxs)(YU.Fragment, {
          children: [XU && (0, YU.jsx)("span", {
            className: "StoreCtaIcon",
            children: XU
          }), zU, (0, YU.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, YU.jsx)(wA.c, {
              amount: cU
            })]
          })]
        }) : (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsxs)("span", {
            className: "StoreCtaLead",
            children: [zU, "\xb7"]
          }), (0, YU.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [XU, (0, YU.jsx)(wA.c, {
              amount: cU
            })]
          })]
        })
      };
      let kU;
      switch (XU) {
        case "pending":
          kU = (0, YU.jsx)(DU.l, {
            className: "StoreCtaButton",
            disabled: !0,
            children: gU(null)
          });
          break;
        case "login":
          kU = (0, YU.jsx)(DU.l, {
            className: "StoreCtaButton",
            onClick: IU,
            children: gU(tU(!1))
          });
          break;
        case "owned":
          kU = (0, YU.jsx)(DU.j, {
            className: "StoreCtaButton",
            onClick: () => {
              WU.e.set({
                openEverythingMenuName: gX.s.CUSTOMISATION
              })
            },
            children: (0, YU.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, YU.jsx)(FU.d, {
                name: "shirt"
              }), " ", pU("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          kU = (0, YU.jsx)(DU.l, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, YU.jsx)("span", {
              className: "StoreCtaLabel",
              children: pU(xA[XU])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          kU = (0, YU.jsx)(DU.l, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === XU || null === cU,
            loading: "lookingUp" === XU || yU,
            onClick: EU,
            analyticsClick: {
              id: "store.gift",
              value: zU
            },
            children: gU(tU(!0), YA.d)
          });
          break;
        case "buy":
        case "recharge":
          kU = (0, YU.jsx)(DU.l, {
            className: "StoreCtaButton",
            loading: yU,
            disabled: null === cU,
            onClick: EU,
            analyticsClick: {
              id: "store.buy",
              value: zU
            },
            children: gU(tU(!1))
          })
      }
      return (0, YU.jsx)("div", {
        className: QU()("StoreCta", {
          StoreCtaHighlight: oU,
          StoreCtaLabelFirst: null !== aU
        }),
        onClick: UU => {
          UU.stopPropagation(), "needsRecipient" === XU && NU()
        },
        children: kU
      })
    }

    function jA() {
      const {
        t: UU
      } = (0, AU.I)();
      return (0, YU.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, YU.jsxs)("li", {
          children: [(0, YU.jsx)(FU.d, {
            name: "check"
          }), (0, YU.jsx)(lA, {
            text: UU("store:colourfulNames")
          })]
        }), (0, YU.jsxs)("li", {
          children: [(0, YU.jsx)(FU.d, {
            name: "check"
          }), UU("store:perkCapes")]
        }), (0, YU.jsxs)("li", {
          children: [(0, YU.jsx)(FU.d, {
            name: "check"
          }), UU("store:perkNoAdverts")]
        }), (0, YU.jsxs)("li", {
          children: [(0, YU.jsx)(FU.d, {
            name: "check"
          }), UU("store:perkFriends", {
            count: (0, hU.d)(["super"])
          })]
        })]
      })
    }

    function KA(UU) {
      let {
        daysLeft: XU,
        totalDays: zU,
        urgent: cU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)(), FU = zU > 0 ? Math.min(1, Math.max(.03, XU / zU)) : 1;
      return (0, YU.jsxs)("div", {
        className: QU()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: cU
        }),
        children: [(0, YU.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === XU ? yU("store:oneDayLeft") : yU("store:daysLeft", {
            days: XU
          })
        }), (0, YU.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, YU.jsx)("i", {
            style: {
              width: 100 * FU + "%"
            }
          })
        })]
      })
    }

    function bA(UU) {
      var XU;
      let {
        state: zU,
        urgent: cU,
        daysLeft: yU,
        totalDays: oU,
        recipientHasSuperRank: DU,
        busy: EU,
        highlight: NU,
        onOpen: IU,
        onAct: pU,
        onNeedRecipient: aU,
        onLogin: tU
      } = UU;
      const {
        t: gU
      } = (0, AU.I)(), kU = nA(zU), {
        days: GU
      } = uU.n.product, BU = gU("store:recipientHasSuperRank", {
        giftDays: GU
      }), ZU = null === (XU = bU("subscribed" === zU)) || void 0 === XU ? void 0 : XU.text;
      return (0, YU.jsxs)("div", {
        className: QU()("StoreTile StoreSuperRankTile", {
          StoreTileGift: kU,
          StoreSuperRankTileUrgent: "recharge" === zU && cU,
          StoreSuperRankTileWithChip: DU,
          StoreSuperRankTileGiftReady: "gift" === zU
        }),
        ...mA(gU("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: uA,
        onFocus: uA,
        onClick: IU,
        children: [(0, YU.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${ZA.g})`
          }
        }), kU && (0, YU.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, YU.jsxs)("div", {
          className: "StoreTileContent",
          children: [DU && (0, YU.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: BU,
            children: BU
          }), (0, YU.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, YU.jsx)(FU.d, {
              name: "bolt"
            }), " ", gU("homePage:superRank")]
          }), kU && (0, YU.jsx)("div", {
            className: "StoreTilePitch",
            children: gU("store:giftPitch", {
              days: GU
            })
          }), "recharge" === zU && (0, YU.jsx)(KA, {
            daysLeft: yU,
            totalDays: oU,
            urgent: cU
          }), ZU && (0, YU.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, YU.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: ZU
            })
          }), (0, YU.jsx)(jA, {}), (0, YU.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, YU.jsx)(JA, {
              state: zU,
              item: "superRank",
              price: uU.n.price,
              busy: EU,
              highlight: NU,
              onAct: pU,
              onNeedRecipient: aU,
              onLogin: tU
            }), "needsRecipient" === zU && (0, YU.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: gU("store:pickRecipientFirst")
            }), "recharge" === zU && cU && (0, YU.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === yU ? gU("store:endsInOneDay") : gU("store:endsInDays", {
                days: yU
              })
            })]
          })]
        })]
      })
    }
    const TA = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function hA(UU) {
      var XU;
      let {
        pack: zU,
        state: yU,
        busy: oU,
        onOpen: DU,
        onAct: EU,
        onNeedRecipient: NU,
        onLogin: IU
      } = UU;
      const {
        t: pU
      } = (0, AU.I)(), aU = zA.c[zU], tU = DA.p[zU], gU = (0, ZA.o)(zU), kU = (0, cU.useRef)(null);
      (0, MA.q)(zU, kU);
      const GU = nA(yU),
        BU = null !== (XU = aU.displayName) && void 0 !== XU ? XU : zU,
        ZU = (0, HA.c)((() => {
          (0, iA.f)();
          const UU = (0, MA.i)(zU);
          void 0 !== UU && (0, SA.i)((0, MA.e)(UU))
        })),
        [RU] = (0, cU.useState)(GA.i);
      return (0, YU.jsxs)("div", {
        className: QU()("StoreTile StorePackTile", TA[aU.tier], {
          StorePackTileOwned: "owned" === yU,
          StorePackTileRecipientOwns: "recipientOwns" === yU,
          StoreTileGift: GU
        }),
        ...mA(BU),
        ref: kU,
        "data-store-item": zU,
        onClick: DU,
        onPointerMove: UU => {
          "mouse" !== UU.pointerType || 0 === UU.movementX && 0 === UU.movementY || RU || ZU.start()
        },
        onPointerLeave: ZU.cancel,
        children: [tU && (0, YU.jsx)(tU, {
          simple: !0
        }), (0, YU.jsx)("div", {
          className: "StorePackCharacters",
          children: gU.map((UU => (0, YU.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,ZA.i)(UU)})`
            }
          }, UU)))
        }), (0, YU.jsx)("div", {
          className: "StoreTileScrim"
        }), GU && (0, YU.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, YU.jsx)(VA.d, {
          pack: zU,
          className: QU()({
            PackAnimatedBadgeBesideRibbon: GU
          })
        }), (0, YU.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, YU.jsx)("div", {
            className: "StoreTileTitle",
            children: BU
          }), (0, YU.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, YU.jsx)(vA.c, {
              tier: aU.tier
            }), " \xb7 ", pU("store:itemCount", {
              count: (0, Uy.g)(zU)
            }), "owned" === yU && (0, YU.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, YU.jsx)(FU.d, {
                name: "check"
              }), " ", pU("general:owned")]
            })]
          }), (0, YU.jsx)(JA, {
            state: yU,
            item: zU,
            price: (0, uU.i)(zU),
            busy: oU,
            onAct: EU,
            onNeedRecipient: NU,
            onLogin: IU
          })]
        })]
      })
    }
    var UF = zU(3409),
      XF = zU(1603),
      zF = zU(1507),
      cF = zU(3958);

    function yF() {
      return (0, YU.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var QF = zU(1408),
      AF = zU(1613),
      FF = zU(34900);

    function oF(UU) {
      let {
        character: XU,
        drawn: zU,
        onDrawn: yU
      } = UU;
      const AU = (0, cU.useRef)(null),
        FU = (0, FF.d)(XU);
      return (0, YU.jsx)("div", {
        className: QU()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: zU
        }),
        children: (0, YU.jsx)(cU.Suspense, {
          fallback: null,
          children: (0, YU.jsx)(iA.d, {
            ref: AU,
            framing: "store",
            turntableFromYaw: zU ? FU.yaw : null,
            onReady: () => {
              var UU, zU;
              null === (UU = AU.current) || void 0 === UU || UU.setOrbit(FU), null === (zU = AU.current) || void 0 === zU || zU.setAllCosmetics(AF.d[XU].cosmetics)
            },
            onDrawn: yU
          })
        })
      })
    }
    const DF = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      EF = new Set(["wildSpirits"]);

    function YF(UU) {
      var XU;
      let {
        tile: zU,
        design: yU,
        canGoLive: oU,
        live: DU,
        busy: EU,
        highlight: NU,
        onLiveStart: IU,
        onLiveEnd: pU,
        onOpen: aU,
        onAct: tU,
        onNeedRecipient: gU,
        onLogin: kU
      } = UU;
      const {
        t: GU
      } = (0, AU.I)(), {
        pack: BU,
        state: ZU
      } = zU, RU = zA.c[BU], PU = (0, zA.d)(BU), WU = (0, ZA.m)(BU), dU = DA.p[WU], LU = EF.has(WU), {
        tier: eU
      } = RU, CU = "legendary" === eU || "mythic" === eU, wU = (0, cU.useRef)(null);
      (0, QF.b)(wU, "epic" === eU || CU || LU);
      const [qU, SU] = (0, cU.useState)(!1);
      return !DU && qU && SU(!1), (0, YU.jsxs)("div", {
        ref: wU,
        className: QU()("StoreCharacterCard", `StoreCharacterCard${yU}`, DF[eU], {
          StoreCharacterCardOwned: "owned" === ZU || "recipientOwns" === ZU,
          StoreCharacterCardGift: nA(ZU),
          StoreCharacterCardItem: void 0 === PU
        }),
        onPointerMove: UU => {
          "mouse" !== UU.pointerType || 0 === UU.movementX && 0 === UU.movementY || !oU || DU || void 0 === PU || IU()
        },
        onPointerLeave: pU,
        children: [(0, YU.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: dU && (0, YU.jsx)(dU, {
            simple: !0
          })
        }), CU && (0, YU.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, YU.jsxs)(OU.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, XF.f)({
            kind: "pack",
            pack: BU
          }),
          "data-store-item": BU,
          onClick: UU => {
            (0, zF.c)(UU) && (UU.preventDefault(), aU())
          },
          children: [(0, YU.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, YU.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, YU.jsx)("div", {
              className: QU()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: qU
              }),
              style: {
                backgroundImage: `url(${(0,ZA.v)(BU)})`
              }
            }), DU && void 0 !== PU && (0, YU.jsx)(oF, {
              character: PU,
              drawn: qU,
              onDrawn: () => {
                SU(!0)
              }
            })]
          }), (0, YU.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (XU = RU.displayName) && void 0 !== XU ? XU : BU
          }), (0, YU.jsx)(vA.c, {
            tier: eU,
            className: "StoreCharacterTier"
          })]
        }), (0, YU.jsx)("div", {
          className: "StoreCharacterScrim"
        }), LU && (0, YU.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, YU.jsx)(yF, {})
        }), (0, YU.jsx)(VA.d, {
          pack: BU,
          iconOnly: !0,
          className: QU()({
            PackAnimatedBadgeBelowOwned: "owned" === ZU
          })
        }), "owned" === ZU && (0, YU.jsx)("span", {
          className: "StoreCharacterOwned",
          title: GU("general:owned"),
          "aria-label": GU("general:owned"),
          children: (0, YU.jsx)(FU.d, {
            name: "check"
          })
        }), (0, YU.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, YU.jsx)(JA, {
            state: ZU,
            item: BU,
            price: (0, uU.i)(BU),
            busy: EU,
            highlight: NU,
            onAct: tU,
            onNeedRecipient: gU,
            onLogin: kU
          })
        })]
      })
    }

    function NF(UU) {
      let {
        tiles: XU,
        busy: zU,
        highlightItem: yU,
        onOpen: QU,
        onAct: AU,
        onNeedRecipient: FU,
        onLogin: oU
      } = UU;
      const DU = (0, cF.u)("storeCharacterCardFoil"),
        EU = (0, cF.u)("storeCharacterCardSpotlight"),
        NU = DU ? "Foil" : EU ? "Spotlight" : "Showcase",
        [IU] = (0, cU.useState)(GA.i),
        [pU, aU] = (0, cU.useState)(null);
      return (0, YU.jsx)("div", {
        className: "StoreCharacterGrid",
        children: XU.map((UU => (0, YU.jsx)(YF, {
          tile: UU,
          design: NU,
          canGoLive: !IU,
          live: pU === UU.pack,
          busy: zU,
          highlight: yU === UU.pack,
          onLiveStart: () => {
            aU(UU.pack)
          },
          onLiveEnd: () => {
            aU((XU => XU === UU.pack ? null : XU))
          },
          onOpen: () => {
            QU(UU.pack)
          },
          onAct: () => {
            AU(UU.pack)
          },
          onNeedRecipient: FU,
          onLogin: () => {
            oU(UU.pack)
          }
        }, UU.pack)))
      })
    }
    var IF = zU(34909);

    function pF(UU) {
      let {
        title: XU
      } = UU;
      return (0, YU.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, YU.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: XU
        })
      })
    }

    function aF(UU) {
      let {
        mountAtOnce: XU,
        children: zU
      } = UU;
      const yU = (0, cU.useRef)(null),
        [QU, AU] = (0, cU.useState)(XU),
        FU = (0, IF.b)();
      return (0, cU.useLayoutEffect)((() => {
        const UU = yU.current;
        UU && UU.getBoundingClientRect().top < UU.parentElement.getBoundingClientRect().bottom && AU(!0)
      }), []), QU || FU ? (0, YU.jsx)(YU.Fragment, {
        children: zU
      }) : (0, YU.jsx)("div", {
        ref: yU
      })
    }

    function tF(UU) {
      let {
        layout: XU,
        mountAtOnce: zU,
        bundleGift: cU,
        superRankTotalDays: yU,
        busy: QU,
        highlightItem: FU,
        onOpen: oU,
        onAct: DU,
        onNeedRecipient: EU,
        onLogin: NU,
        dailyDropTile: IU,
        dealBanner: pU
      } = UU;
      const {
        t: aU
      } = (0, AU.I)(), tU = XU.packs.filter((UU => void 0 === (0, zA.d)(UU.pack) && !(0, zA.k)(UU.pack))), gU = XU.packs.filter((UU => void 0 !== (0, zA.d)(UU.pack))), kU = XU.packs.filter((UU => (0, zA.k)(UU.pack)));
      return (0, YU.jsxs)(YU.Fragment, {
        children: [(0, YU.jsx)(UF.e, {
          className: "StoreSuperGems",
          gift: cU,
          highlightSku: FU,
          leadingTile: IU,
          afterLeadingTile: pU
        }), (0, YU.jsx)(pF, {
          title: aU("store:rank")
        }), (0, YU.jsx)(bA, {
          state: XU.superRank.state,
          urgent: XU.superRank.urgent,
          daysLeft: XU.superRankDaysLeft,
          totalDays: yU,
          recipientHasSuperRank: XU.recipientHasSuperRank,
          busy: QU,
          highlight: "superRank" === FU,
          onOpen: () => {
            oU("superRank")
          },
          onAct: () => {
            DU("superRank")
          },
          onNeedRecipient: EU,
          onLogin: () => {
            NU("superRank")
          }
        }), (0, YU.jsxs)(aF, {
          mountAtOnce: zU,
          children: [(0, YU.jsx)(pF, {
            title: aU("store:bundles")
          }), (0, YU.jsx)("div", {
            className: "StorePackGrid",
            children: tU.map((UU => (0, YU.jsx)(hA, {
              pack: UU.pack,
              state: UU.state,
              busy: QU,
              onOpen: () => {
                oU(UU.pack)
              },
              onAct: () => {
                DU(UU.pack)
              },
              onNeedRecipient: EU,
              onLogin: () => {
                NU(UU.pack)
              }
            }, UU.pack)))
          }), (0, YU.jsxs)(aF, {
            mountAtOnce: zU,
            children: [(0, YU.jsx)(pF, {
              title: aU("store:characters")
            }), (0, YU.jsx)(NF, {
              tiles: gU,
              busy: QU,
              highlightItem: FU,
              onOpen: oU,
              onAct: DU,
              onNeedRecipient: EU,
              onLogin: NU
            }), kU.length > 0 && (0, YU.jsxs)(YU.Fragment, {
              children: [(0, YU.jsx)(pF, {
                title: aU("store:premiumItems")
              }), (0, YU.jsx)(NF, {
                tiles: kU,
                busy: QU,
                highlightItem: FU,
                onOpen: oU,
                onAct: DU,
                onNeedRecipient: EU,
                onLogin: NU
              })]
            })]
          })]
        })]
      })
    }

    function gF(UU) {
      let {
        state: XU,
        mode: zU,
        giftName: cU,
        busy: yU,
        highlight: QU,
        purchaseError: FU,
        onBack: oU,
        onChooseRecipient: EU,
        onAct: NU,
        onLogin: IU
      } = UU;
      const {
        t: pU
      } = (0, AU.I)(), aU = bU("gift" !== zU);
      return (0, YU.jsx)(fA, {
        onBack: oU,
        recipient: "gift" === zU && (0, YU.jsxs)(YU.Fragment, {
          children: [cU && (0, YU.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: pU("store:giftFor", {
              name: cU
            }),
            children: [YA.d, " ", pU("store:giftFor", {
              name: cU
            })]
          }), !cU && (0, YU.jsxs)("div", {
            ...(0, DU.W)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: EU,
            children: [YA.d, " ", pU("store:chooseRecipient")]
          })]
        }),
        cta: (0, YU.jsx)(JA, {
          state: XU,
          item: "superRank",
          price: uU.n.price,
          busy: yU,
          highlight: QU,
          onAct: NU,
          onNeedRecipient: EU,
          onLogin: IU
        }),
        afterCta: (0, YU.jsxs)(YU.Fragment, {
          children: [aU && (0, YU.jsx)("span", {
            className: "StoreTileNote",
            children: aU.text
          }), (null === aU || void 0 === aU ? void 0 : aU.manageUrl) && (0, YU.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: aU.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: pU("payments:manageSubscription")
          }), FU && (0, YU.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: pU(FU)
          })]
        })
      })
    }
    var kF = zU(153);
    const GF = kF.m("kind", [kF.F({
      kind: kF.t("refused"),
      heldTierId: kF.V(),
      until: kF.D()
    }), kF.F({
      kind: kF.t("refund"),
      tierId: kF.V(),
      refundedMs: kF.D(),
      forfeitedMs: kF.D(),
      premiumCurrency: kF.D()
    }), kF.F({
      kind: kF.t("none")
    })]);
    async function BF(UU) {
      const XU = await (0, CU.postJsonWithMetricsCookiesAndJsonResponse)(`${aX.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: UU
      }, {
        retries: 1
      });
      return GF.parse(XU)
    }
    var ZF = zU(3374),
      RF = zU(3417);

    function PF(UU, XU) {
      const zU = Math.max(1, Math.round(XU / HU.h));
      return [1 === zU ? `${UU}OneDay` : UU, {
        days: zU.toLocaleString()
      }]
    }

    function WF(UU) {
      let {
        price: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)();
      return (0, YU.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, YU.jsx)(jA, {}), (0, YU.jsx)("div", {
          className: "SmallTextLight",
          children: zU("payments:subscriptionRenewsMonthly", {
            price: XU
          })
        }), (0, YU.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, YU.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: zU("homePage:termsOfService")
          }), (0, YU.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: zU("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function dF() {
      const UU = (0, vU.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && UU && (0, vU.subscriptionsSold)() ? (0, YU.jsx)(LF, {}) : null
    }

    function LF() {
      const {
        t: UU
      } = (0, AU.I)(), {
        userContext: XU
      } = (0, pU.d)(), {
        purchaseUnderWay: zU,
        notice: yU,
        subscribe: QU
      } = (0, ZF.b)(), [FU, oU] = (0, cU.useState)(null), [EU, NU] = (0, cU.useState)(0), [IU, aU] = (0, cU.useState)(!1), tU = (0, cU.useRef)(!0), kU = XU !== CU.NULL_USER_CONTEXT, GU = null !== FU && FU.loadedFor === XU ? FU.offer : null, BU = null === yU || void 0 === yU ? void 0 : yU.pendingIntentId, ZU = (0, cU.useRef)(BU);

      function RU() {
        NU((UU => UU + 1))
      }
      async function PU(UU) {
        aU(!1), await QU(UU), tU.current && RU()
      }
      if ((0, cU.useEffect)((() => (tU.current = !0, () => {
          tU.current = !1
        })), []), (0, cU.useEffect)((() => {
          void 0 !== ZU.current && void 0 === BU && RU(), ZU.current = BU
        }), [BU]), (0, cU.useEffect)((() => {
          if (!kU) return;
          let UU = !1;
          return aU(!1), async function() {
            const {
              offering: UU
            } = await (0, jU.getBillingClient)().getOfferings("superRankPage"), XU = null === UU || void 0 === UU ? void 0 : UU.packages.find(cA.isPricedPackage);
            return void 0 === XU ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: XU,
              preview: await BF(XU.productId)
            }
          }().catch((UU => (console.error("Billing: loading the Super Rank subscription or its preview failed:", UU), {
            kind: "loadFailed"
          }))).then((zU => {
            UU || oU((UU => "loadFailed" === zU.kind && (null === UU || void 0 === UU ? void 0 : UU.loadedFor) === XU ? UU : {
              loadedFor: XU,
              offer: zU
            }))
          })), () => {
            UU = !0
          }
        }), [XU, kU, EU]), null === GU) return null;
      if ("loaded" !== GU.kind) return (0, YU.jsx)(RF.h, {
        notice: {
          kind: "error",
          key: "unavailable" === GU.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: WU,
        preview: dU
      } = GU;
      if ("refused" === dU.kind) return (0, YU.jsx)(RF.h, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(dU.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const LU = (0, UF.g)(WU),
        eU = (0, gU.isMobileApp)() && (0, YU.jsx)(WF, {
          price: LU
        });
      if (IU && "refund" === dU.kind) {
        const {
          refundedMs: XU,
          forfeitedMs: cU,
          premiumCurrency: yU
        } = dU, QU = cU + (0 === yU ? XU : 0), [AU, FU] = PF("payments:subscribeRefundsGemRank", XU), [oU, EU] = PF("payments:subscribeForfeitsGemRank", QU);
        return (0, YU.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, YU.jsx)("div", {
            children: UU("payments:subscribeEndsGemRank")
          }), yU > 0 && (0, YU.jsx)("div", {
            children: UU(AU, {
              ...FU,
              amount: yU.toLocaleString()
            })
          }), QU > 0 && (0, YU.jsx)("div", {
            children: UU(oU, EU)
          }), (0, YU.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, YU.jsx)(DU.j, {
              onClick: () => {
                aU(!1)
              },
              children: UU("general:cancel")
            }), (0, YU.jsx)(DU.l, {
              onClick: () => {
                PU(WU)
              },
              loading: zU,
              children: UU("payments:subscribeContinue", {
                price: LU
              })
            })]
          }), eU]
        })
      }
      return (0, YU.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, YU.jsx)(RF.h, {
          notice: yU,
          className: "SmallTextBold"
        }), (0, YU.jsx)(RF.b, {
          className: "SmallTextBold"
        }), (0, YU.jsx)(DU.l, {
          onClick: () => {
            "refund" === dU.kind ? aU(!0) : PU(WU)
          },
          disabled: void 0 !== BU,
          loading: zU,
          children: UU("payments:subscribeToSuperRank", {
            price: LU
          })
        }), eU]
      })
    }
    var eF = zU(2776);

    function CF(UU) {
      let {
        state: XU,
        view: zU,
        claiming: yU,
        onOpen: FU
      } = UU;
      const {
        t: EU
      } = (0, AU.I)(), NU = (0, cU.useRef)(null), IU = "ready" === zU.kind;
      return (0, QF.b)(NU, IU), (0, YU.jsxs)("div", {
        ref: NU,
        className: QU()("DailyDropTile", {
          DailyDropTileReady: IU
        }),
        children: [IU && (0, YU.jsx)(oU.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, YU.jsx)("div", {
          className: "DailyDropTileTitle",
          children: EU("dailyDrop:name")
        }), (0, YU.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, YU.jsx)(eF.d, {
            className: "DailyDropTileBlock"
          }), (0, YU.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: EU("dailyDrop:collected", {
              count: XU.collected.length,
              total: XU.total
            })
          })]
        }), "ready" === zU.kind && (0, YU.jsx)(DU.l, {
          className: "DailyDropTileOpen",
          onClick: FU,
          loading: yU,
          children: EU("dailyDrop:open")
        }), "waiting" === zU.kind && (0, YU.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: EU("dailyDrop:nextIn", {
            count: zU.hours
          })
        })]
      })
    }
    var wF = zU(2334);
    const qF = Math.PI / 180;

    function OF(UU) {
      return UU / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function SF(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const cU = (UU / (2 * Math.PI / zU) % zU + zU) % zU;
      let yU = null,
        QU = 1 / 0;
      for (let AU = 0; AU < zU; AU++) {
        if (!XU[AU]) continue;
        const UU = Math.abs(AU - cU),
          FU = Math.min(UU, zU - UU);
        FU < QU && (yU = AU, QU = FU)
      }
      return yU
    }

    function rF(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const cU = SF(UU, XU, zU);
      if (null === cU) return UU;
      const yU = OF(cU, zU) - UU;
      return UU + yU - 2 * Math.PI * Math.round(yU / (2 * Math.PI))
    }
    const uF = 32;

    function fF(UU) {
      if (0 === UU.width || 0 === UU.height) return !0;
      const XU = document.createElement("canvas");
      XU.width = uF, XU.height = uF;
      const zU = XU.getContext("2d", {
        willReadFrequently: !0
      });
      if (!zU) return !0;
      zU.drawImage(UU, 0, 0, uF, uF);
      const {
        data: cU
      } = zU.getImageData(0, 0, uF, uF);
      for (let yU = 3; yU < cU.length; yU += 4)
        if (cU[yU] > 0) return !1;
      return !0
    }

    function iF(UU) {
      const XU = document.createElement("canvas");
      XU.width = UU.width, XU.height = UU.height;
      const zU = XU.getContext("2d");
      return zU ? (zU.drawImage(UU, 0, 0), XU) : null
    }

    function HF(UU) {
      let {
        cosmetics: XU
      } = UU;
      return (0, YU.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, YU.jsx)(PA.b, {
          cosmetics: XU
        })
      })
    }

    function MF(UU) {
      let {
        worn: XU,
        FU: zU,
        oU: yU,
        prompting: oU,
        className: DU
      } = UU;
      const {
        t: EU
      } = (0, AU.I)(), NU = (0, cU.useRef)(null), [IU, pU] = (0, cU.useState)(null), [aU, tU] = (0, cU.useState)(!1), [gU, kU] = (0, cU.useState)(!1), GU = (0, cU.useRef)([]), BU = (0, cU.useRef)(null), ZU = (0, cU.useRef)(0), PU = (0, cU.useRef)(null), WU = (0, cU.useRef)(!0), dU = (0, cU.useCallback)((() => {
        const UU = BU.current,
          XU = GU.current,
          zU = SF(ZU.current, XU),
          cU = null === zU ? null : XU[zU],
          yU = null === UU || void 0 === UU ? void 0 : UU.getContext("2d");
        UU && cU && yU && (UU.width === cU.width && UU.height === cU.height || (UU.width = cU.width, UU.height = cU.height), yU.clearRect(0, 0, UU.width, UU.height), yU.drawImage(cU, 0, 0))
      }), []);
      async function LU(UU, XU) {
        const zU = performance.now();
        let cU = 0;
        for (const yU of function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const XU = [],
              zU = new Set;
            for (let cU = UU / 2; cU >= 1 && Number.isInteger(cU); cU /= 2)
              for (let yU = 0; yU < UU; yU += cU) zU.has(yU) || (zU.add(yU), XU.push(yU));
            for (let cU = 0; cU < UU; cU++) zU.has(cU) || XU.push(cU);
            return XU
          }()) {
          if (NU.current !== UU) break;
          if (0 !== yU && (UU.turnCamera(OF(yU)), await new Promise((UU => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  UU()
                }))
              }))
            })), NU.current !== UU)) break;
          const zU = fF(XU) ? null : iF(XU);
          if (null !== zU) GU.current[yU] = zU, cU++, 0 === yU && pU("stills");
          else if (0 === yU) break
        }
        cU > 0 && console.info(`Lucky Skin Block's Before: ${cU} stills in ${Math.round(performance.now()-zU)} ms`)
      }

      function eU(UU) {
        var XU, zU;
        (null === (XU = PU.current) || void 0 === XU ? void 0 : XU.pointerId) === UU.pointerId && (PU.current = null, WU.current || (ZU.current = rF(ZU.current, GU.current), dU(), null === (zU = NU.current) || void 0 === zU || zU.turnCamera(ZU.current)))
      }(0, cU.useEffect)((() => {
        "stills" === IU && dU()
      }), [IU, dU]), (0, cU.useEffect)((() => () => {
        for (const UU of GU.current) UU && (UU.width = 0, UU.height = 0);
        GU.current = []
      }), []);
      const CU = oU && !gU,
        wU = CU ? {
          onPointerDown: UU => {
            null === PU.current && (UU.currentTarget.setPointerCapture(UU.pointerId), PU.current = {
              pointerId: UU.pointerId,
              startX: UU.clientX,
              startTurn: ZU.current
            })
          },
          onPointerMove: UU => {
            const XU = PU.current;
            var zU;
            null !== XU && XU.pointerId === UU.pointerId && (ZU.current = XU.startTurn - (UU.clientX - XU.startX) * qF, dU(), WU.current || null === (zU = NU.current) || void 0 === zU || zU.turnCamera(ZU.current))
          },
          onPointerUp: eU,
          onPointerCancel: eU
        } : {};
      return (0, YU.jsxs)("div", {
        className: QU()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: CU
        }, DU),
        children: [(0, YU.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, YU.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...wU,
            children: ["stills" === IU && (0, YU.jsx)("canvas", {
              ref: BU,
              className: "DailyDropRevealBeforeStill"
            }), "head" === IU && (0, YU.jsx)(HF, {
              cosmetics: XU
            }), null === IU && (0, YU.jsx)(RU.b, {})]
          }), (0, YU.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: EU("dailyDrop:before")
          })]
        }), (0, YU.jsx)(FU.d, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, YU.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, YU.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, YU.jsx)("div", {
              className: QU()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: aU
              }),
              children: (0, YU.jsx)(cU.Suspense, {
                fallback: null,
                children: (0, YU.jsx)(iA.d, {
                  onNoWebGl: () => {
                    pU("head"), kU(!0)
                  },
                  ref: NU,
                  onReady: () => {
                    var UU, zU;
                    null === (UU = NU.current) || void 0 === UU || UU.resetCamera(), null === (zU = NU.current) || void 0 === zU || zU.setAllCosmetics(XU)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var UU;
                        const XU = NU.current;
                        if (!XU) return;
                        const cU = null === (UU = XU.getDevTools()) || void 0 === UU ? void 0 : UU.canvas();
                        try {
                          cU && await LU(XU, cU)
                        } catch (AU) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", AU)
                        } finally {
                          WU.current = !1
                        }
                        if (NU.current !== XU) return;
                        GU.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), pU("head")), null === PU.current && (ZU.current = rF(ZU.current, GU.current)), XU.turnCamera(ZU.current), dU(), XU.updateCosmetic(zU, yU);
                        const QU = new Promise((UU => {
                          setTimeout(UU, 1e4)
                        }));
                        await Promise.race([XU.ensureReadyForCapture(zU), QU]).catch((UU => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", UU)
                        })), NU.current === XU && tU(!0)
                      }()
                    }))
                  }
                })
              })
            }), gU && (sy.K.includes(zU) ? (0, YU.jsx)(HF, {
              cosmetics: {
                ...XU,
                [zU]: yU
              }
            }) : (0, YU.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,wF.g)(zU,yU).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !aU && !gU && (0, YU.jsx)(RU.b, {}), (0, YU.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...wU
            })]
          }), (0, YU.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: EU("dailyDrop:after")
          })]
        })]
      })
    }
    const vF = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      VF = {
        opening: 900,
        shrinking: 700
      };

    function sF(UU) {
      let {
        drop: XU,
        onClose: zU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)(), {
        userContext: oU
      } = (0, pU.d)(), {
        state: EU,
        view: NU
      } = (0, Xz.q)(), [IU, aU] = (0, cU.useState)("closed"), [tU] = (0, cU.useState)((() => ({
        ...oU.getPlayerCosmetics()
      }))), [gU] = (0, cU.useState)((() => (0, Xz.g)(XU, tU))), [kU, GU] = (0, cU.useState)(!1), [BU, ZU] = (0, cU.useState)(!1), [RU] = (0, cU.useState)((() => null === EU ? Promise.resolve(null) : Qz(EU))), [PU, dU] = (0, cU.useState)(null), LU = (0, TX.b)(), {
        gameState: eU
      } = (0, WU.q)(["gameState"]);
      async function CU() {
        const UU = await RU;
        LU.current && (null === UU ? (zU(), async function(UU) {
          let XU = null;
          try {
            const zU = await yz();
            null === UU || UU.remindersOn || null !== cz.k.getItem(zU) || (XU = zU)
          } catch (cU) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", cU)
          }
          if (null === XU) return void await (0, zz.k)("dailyDrop");
          const zU = XU;
          await (0, zz.k)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              cz.k.setItem(zU, !0), Fz(null)
            }
          })
        }(EU)) : ((0, zz.h)(), dU(UU), aU("remind")))
      }

      function wU(UU) {
        null !== PU && function(UU, XU) {
          cz.k.setItem(UU.askedKey, !0), (0, bX.o)(), (0, Xz.m)("daily_drop.remind", XU ? "yes" : "no"), XU && Fz(UU.requester)
        }(PU, UU), zU()
      }(0, cU.useEffect)((() => {
        (0, Xz.m)("daily_drop.reveal_step", IU)
      }), [IU]), (0, cU.useEffect)((() => {
        const UU = VF[IU];
        if (void 0 === UU) return;
        const XU = setTimeout((() => {
          aU(vF[IU])
        }), UU);
        return () => {
          clearTimeout(XU)
        }
      }), [IU]);
      const qU = yU(`dailyDrop:kind_${gU.FU}`),
        OU = EU && yU("dailyDrop:collected", {
          count: EU.collected.length,
          total: EU.total
        }),
        SU = "revealed" === IU || "shrinking" === IU,
        rU = "equip" !== IU && "remind" !== IU;
      return (0, YU.jsx)(Ey.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === IU ? () => {
          wU(!1)
        } : zU,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, YU.jsxs)("div", {
          className: QU()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === IU,
            DailyDropRevealShrinking: "shrinking" === IU,
            DailyDropRevealFiguresShown: "shrinking" === IU || "equip" === IU || "remind" === IU
          }),
          children: [(0, YU.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, YU.jsx)(MF, {
              className: "DailyDropRevealStageFigures",
              worn: tU,
              FU: gU.FU,
              oU: gU.oU,
              prompting: !rU
            }), ("closed" === IU || "opening" === IU) && (0, YU.jsx)(eF.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === IU
            }), SU && (0, YU.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, YU.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,wF.g)(gU.FU,gU.oU).previewTex}.png`,
                alt: qU,
                draggable: !1
              })
            })]
          }), rU && (0, YU.jsxs)(YU.Fragment, {
            children: [(0, YU.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, YU.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: SU ? qU : yU("dailyDrop:name")
              }), "closed" === IU && (0, YU.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: yU("dailyDrop:tapToOpen")
              }), "revealed" === IU && (0, YU.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: yU("dailyDrop:tapToContinue")
              })]
            }), (0, YU.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": yU("closed" === IU ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                aU(vF[IU])
              }
            })]
          }), "equip" === IU && (0, YU.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, YU.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: qU
            }), (0, YU.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: yU("dailyDrop:equipQuestion")
            }), (0, YU.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, YU.jsx)(DU.f, {
                className: "DailyDropRevealButton",
                disabled: kU,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, Xz.m)("daily_drop.not_now", XU), CU()
                },
                children: yU("dailyDrop:notNow")
              }), (0, YU.jsx)(DU.f, {
                className: "DailyDropRevealButton",
                loading: kU,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, Xz.m)("daily_drop.equip", XU), GU(!0), ZU(!1);
                    try {
                      await (0, Xz.e)(oU, gU.FU, gU.oU)
                    } catch (UU) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", UU), GU(!1), void ZU(!0)
                    }
                    await CU()
                  }()
                },
                children: yU("dailyDrop:equip")
              })]
            }), BU && (0, YU.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: yU("dailyDrop:equipFailed")
            }), !(0, WU.h)(eU) && (0, YU.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: kU,
              onClick: () => {
                var UU;
                (0, Xz.m)("daily_drop.customise", XU), UU = gU.FU, Gz.k.UY(cy, UU), WU.e.set({
                  openEverythingMenuName: gX.s.CUSTOMISATION
                }), zU()
              },
              children: [yU("dailyDrop:customise"), " ", (0, YU.jsx)(FU.d, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), OU && (0, YU.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [OU, "waiting" === (null === NU || void 0 === NU ? void 0 : NU.kind) && ` \xb7 ${yU("dailyDrop:nextInInline",{count:NU.hours})}`]
            })]
          }), "remind" === IU && (0, YU.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, YU.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: yU("dailyDrop:remindTitle")
            }), (0, YU.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: yU("dailyDrop:remindSubtitle")
            }), (0, YU.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, YU.jsx)(DU.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  wU(!1)
                },
                children: yU("dailyDrop:remindNo")
              }), (0, YU.jsx)(DU.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  wU(!0)
                },
                children: yU("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function nF(UU, XU) {
      const {
        t: zU
      } = (0, AU.I)(), yU = function(UU, XU) {
        const {
          state: zU,
          view: yU
        } = (0, Xz.q)(), [QU, AU] = (0, cU.useState)(!1), [FU, oU] = (0, cU.useState)(!1), [DU, EU] = (0, cU.useState)(null), YU = (0, cU.useRef)(null), NU = (0, cU.useRef)(!1), IU = XU && "ready" === (null === yU || void 0 === yU ? void 0 : yU.kind);
        (0, cU.useEffect)((() => {
          UU ? IU && !NU.current && (NU.current = !0, (0, Xz.m)("daily_drop.shown", "tile")) : NU.current = !1
        }), [UU, IU]), (0, cU.useEffect)((() => {
          UU || (gU(), oU(!1))
        }), [UU]);
        const pU = UU && null === DU && !(0, Xz.l)(yU);
        (0, cU.useEffect)((() => {
          pU && WU.e.set({
            openEverythingMenuName: gX.s.CUSTOMISATION
          })
        }), [pU]);
        const aU = (0, cU.useRef)(!1),
          tU = (0, cU.useRef)(UU);

        function gU() {
          null !== YU.current && (YU.current = null, EU(null))
        }
        return tU.current = UU, {
          state: zU,
          view: yU,
          claiming: QU,
          claimFailed: FU,
          reveal: DU,
          open: async function() {
            if (!aU.current) {
              aU.current = !0, AU(!0), oU(!1);
              try {
                const {
                  state: UU,
                  drop: XU
                } = await (0, Xz.b)();
                if (null === UU || null === XU) return;
                if (!tU.current) return;
                (0, Xz.m)("daily_drop.open", XU), YU.current = {
                  state: UU,
                  drop: XU
                }, EU(YU.current)
              } catch (UU) {
                console.error("Failed to claim the Lucky Skin Block", UU), tU.current && oU(!0)
              } finally {
                aU.current = !1, AU(!1)
              }
            }
          },
          closeReveal: gU
        }
      }(UU, XU);
      return {
        shown: (0, Xz.l)(yU.view) || null !== yU.reveal,
        tile: yU.state && yU.view && (0, YU.jsx)(CF, {
          state: yU.state,
          view: yU.view,
          claiming: yU.claiming,
          onOpen: yU.open
        }),
        claimFailed: yU.claimFailed && (0, YU.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: zU("dailyDrop:claimFailed")
        }),
        reveal: yU.reveal && (0, YU.jsx)(sF, {
          drop: yU.reveal.drop,
          onClose: yU.closeReveal
        })
      }
    }

    function mF(UU) {
      let {
        show: XU
      } = UU;
      const zU = nF(XU, XU);
      return (0, MU.A)(XU && zU.shown, (0, MU.B)(), (UU => {
        (0, Xz.m)("daily_drop.store_only_open", UU)
      })), XU && zU.shown ? (0, YU.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [zU.claimFailed, zU.tile && (0, YU.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: zU.tile
        }), zU.reveal]
      }) : null
    }
    var lF = zU(2787),
      xF = zU(34915),
      JF = zU(34925);

    function jF(UU) {
      let {
        view: XU,
        highlight: zU,
        scrollSignal: yU,
        onScrolledIntoView: QU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)(), {
        purchaseUnderWay: oU,
        notice: DU,
        needsLogin: EU,
        buyPack: NU
      } = (0, JF.g)("banner");
      (0, lF.N)(XU.arm, "banner");
      const IU = (0, cU.useRef)(null);
      return (0, cU.useEffect)((() => {
        var UU;
        yU > 0 && (null === (UU = IU.current) || void 0 === UU || UU.scrollIntoView({
          block: "nearest"
        }), QU())
      }), [yU]), (0, YU.jsxs)("div", {
        ref: IU,
        className: "NewPlayerDealBanner",
        children: [(0, YU.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, YU.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: FU("newPlayerDeal:title")
          }), (0, YU.jsx)(xF.d, {
            endsAt: XU.endsAt
          })]
        }), (0, YU.jsx)(xF.g, {
          view: XU,
          needsLogin: EU,
          busy: oU,
          highlight: zU,
          onBuy: UU => {
            NU(XU, UU)
          }
        }), (0, YU.jsx)(RF.h, {
          notice: DU,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    zU(34922);
    var KF = zU(2794);

    function bF(UU) {
      let {
        wallet: XU,
        close: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)();
      return (0, YU.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, YU.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, YU.jsx)("span", {
            children: cU("newPlayerDeal:giftable")
          }), (0, YU.jsx)(wA.c, {
            amount: (0, AA.e)(XU)
          }), (0, YU.jsx)("span", {
            children: cU("newPlayerDeal:ungiftable")
          }), (0, YU.jsx)(wA.c, {
            amount: XU.ungiftable
          })]
        }), (0, YU.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: cU("newPlayerDeal:ungiftableWhy")
        }), (0, YU.jsx)(DU.l, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: zU,
          children: cU("general:ok")
        })]
      })
    }

    function TF(UU) {
      pX.NotificationProvider.showCustomPopup({
        body: XU => (0, YU.jsx)(bF, {
          wallet: UU,
          close: XU
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const hF = {
      kind: "board"
    };
    let Uo = !1;

    function Xo(UU) {
      return "found" === UU.status || "error" === UU.status && "store:giftRecipientLookupFailed" === UU.error ? UU.name : null
    }(0, MU.s)(cA.prefetchBillingOfferings);
    const zo = (0, cU.memo)((function(UU) {
      var XU;
      let {
        show: yU
      } = UU;
      const {
        t: FU
      } = (0, AU.I)(), {
        userContext: oU
      } = (0, pU.d)(), DU = (0, vU.usePurchasesAllowed)(), EU = oU !== CU.NULL_USER_CONTEXT, NU = aA(oU, yU), [IU, aU] = (0, tU.e)(), {
        page: gU,
        urlMode: kU,
        goTo: GU
      } = (0, tA.f)(), BU = function(UU) {
        return "superRank" === UU.kind ? "superRank" : "pack" === UU.kind ? UU.pack : null
      }(gU), {
        openEverythingMenuName: ZU,
        gameState: RU
      } = (0, WU.q)(["openEverythingMenuName", "gameState"]), PU = null !== ZU;
      ! function(UU, XU) {
        const [yU] = (0, cU.useState)(GA.i), [QU, AU] = (0, cU.useState)(!1);
        yU && XU && !QU && AU(!0);
        const FU = (0, rc.F)(),
          oU = yU && QU && UU && !FU;
        (0, cU.useEffect)((() => {
          if (!oU) return;
          let UU = null,
            XU = null,
            cU = null;
          const yU = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, jU.getBillingClient)().purchaseUnderWay,
            QU = () => {
              var zU;
              null === (zU = cU) || void 0 === zU || zU(), cU = null, null !== UU && (clearTimeout(UU), UU = null), null !== XU && (clearTimeout(XU), XU = null)
            },
            AU = () => {
              (0, gA.k)(!1), (0, gA.i)(!1), QU(), UU = setTimeout((() => {
                UU = null, cU = (0, kA.b)((() => {
                  cU = null, yU() ? AU() : ((0, gA.k)(!0), XU = setTimeout((() => {
                    XU = null, cU = (0, kA.b)((() => {
                      cU = null, yU() ? AU() : (0, gA.i)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => zU(5101))).then((UU => {
                    UU.startBackgroundGameSetup()
                  }), (UU => {
                    console.warn("Background game setup: its chunk failed to load", UU)
                  })))
                }))
              }), 2e3)
            };
          for (const zU of BA) window.addEventListener(zU, AU, {
            capture: !0,
            passive: !0
          });
          return AU(), () => {
            for (const UU of BA) window.removeEventListener(UU, AU, {
              capture: !0
            });
            QU(), (0, gA.k)(!1), (0, gA.i)(!1)
          }
        }), [oU])
      }(yU && PU, "pack" === gU.kind);
      const dU = "landingPage" === RU;
      (0, cU.useEffect)((() => {
        PU && (0, cA.prefetchBillingOfferings)()
      }), [PU]), (0, cU.useEffect)((() => {
        PU && !yU && dU && (0, ZA.w)()
      }), [PU, yU, dU]);
      const [LU, eU] = (0, cU.useState)(0), [wU, qU] = (0, cU.useState)(null), [OU, SU] = (0, cU.useState)(null), [rU, fU] = (0, cU.useState)(null), [iU, HU] = (0, cU.useState)(null), [VU, sU] = (0, cU.useState)(0), nU = (0, cU.useRef)(null), mU = (0, cU.useRef)(null), lU = (0, cU.useRef)(null), xU = (0, cU.useRef)(!1), JU = (0, MU.B)(), KU = (0, cU.useRef)(0);

      function bU() {
        eU((UU => UU + 1))
      }(0, cU.useEffect)((() => {
        if (yU) {
          if (Uo = !0, (0, MU.k)(), JU && JU.seq !== KU.current) {
            var UU;
            KU.current = JU.seq, "loginResume" !== JU.source && (0, MU.x)();
            const XU = (0, MU.c)(JU);
            kU || GU(XU), HU(null !== (UU = JU.highlight) && void 0 !== UU ? UU : null);
            const zU = "newPlayerDeal" === JU.source || "loginResume" === JU.source && void 0 !== JU.highlight && (0, lF.f)(oU).includes(JU.highlight);
            sU((UU => zU ? UU + 1 : 0)), SU(null), "gift" === JU.mode && JU.giftRecipientName ? NU.choose(JU.giftRecipientName, "prefilled") : NU.clear(), "gift" !== JU.mode || JU.giftRecipientName || bU()
          }
        } else sU(0)
      }), [yU, JU]), (0, MU.A)(yU, JU, (UU => {
        (0, XX.reportAnalyticsClick)({
          id: "store.open",
          value: UU
        })
      }));
      const TU = (0, lF.M)(),
        hU = null !== iU && null === TU && null === (0, lF.i)((0, lF.d)(oU)) && (0, lF.f)(oU).includes(iU);
      (0, cU.useEffect)((() => {
        if (!iU) return;
        const UU = setTimeout((() => {
          HU(null)
        }), hU ? 15e3 : 4e3);
        return () => {
          clearTimeout(UU)
        }
      }), [iU, hU]), (0, cU.useLayoutEffect)((() => {
        const UU = nU.current;
        if (!yU || !UU) return mU.current = null, void(lU.current = null);
        var XU;
        if (BU) mU.current = BU, null === (XU = UU.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === XU || XU.focus();
        else if (mU.current) {
          const XU = lU.current;
          null !== XU && (UU.scrollTop = XU);
          const zU = UU.querySelector(`[data-store-item="${mU.current}"]`);
          if (zU) {
            const cU = zU.getBoundingClientRect(),
              yU = UU.getBoundingClientRect();
            zU.focus({
              preventScroll: null !== XU && cU.bottom > yU.top && cU.top < yU.bottom
            })
          }
          mU.current = null
        }
      }), [BU, yU]), (0, cU.useEffect)((() => {
        SU(null)
      }), [NU.query]), (0, cU.useEffect)((() => {
        if (!rU) return;
        const UU = setTimeout((() => {
          fU(null)
        }), 8e3);
        return () => {
          clearTimeout(UU)
        }
      }), [rU]);
      const UX = oU.superRankInfo,
        zX = oU.isLoggedIn() || (0, vU.guestsMayBuy)(),
        cX = oU.getOwnedCosmeticPacks(),
        yX = (0, YA.o)(NU.query),
        QX = (0, YA.g)({
          mode: yX,
          loggedIn: EU ? zX : null,
          superRankInfo: UX,
          now: Date.now(),
          ownedPacks: cX,
          packs: zA.q,
          recipient: NU.recipient
        });
      (0, cU.useEffect)((() => {
        if (!zX || !yU) return;
        const UU = (0, lF.f)(oU),
          XU = (0, MU.x)((XU => !UU.includes(XU.item))),
          zU = XU && (0, YA.m)(XU, zA.q);
        XU && zU && ((0, XX.reportAnalyticsClick)({
          id: "store.login_resume",
          value: XU.item
        }), (0, MU.l)(zU))
      }), [zX, yU]);
      const AX = yU && "gift" === yX,
        FX = (0, cU.useRef)(AX);
      FX.current = AX;
      const oX = "none" !== NU.recipient.status,
        DX = (0, cU.useRef)(!1);
      (0, cU.useEffect)((() => {
        AX ? oX && !DX.current && (DX.current = !0, async function(UU) {
          var XU;
          if ("gift" === (null === (XU = (0, KF.i)()) || void 0 === XU ? void 0 : XU.show)) return void TF(KF.c);
          const zU = await (0, AA.h)();
          null !== zU && zU.ungiftable > 0 && UU() && TF(zU)
        }((() => FX.current))) : DX.current = !1
      }), [AX, oX]);
      const EX = (0, YA.r)({
        superRankDaysLeft: QX.superRankDaysLeft,
        openedThisSession: Uo || yU,
        seenNewItems: (0, MU.h)()
      });
      (0, cU.useEffect)((() => {
        (0, MU.t)(EX)
      }), [EX]);
      const YX = "self" === yX,
        NX = nF(yU, yU && YX && "board" === gU.kind);
      if (!yU || !DU) return null;
      const IX = aU > IU && IU <= 700,
        pX = !IX && aU <= 420,
        aX = "gift" === yX ? Xo(NU.recipient) : null,
        tX = null !== wU;

      function gX(UU) {
        (0, QA.c)(UU, "gift" === yX ? NU.query.trim() : null)
      }

      function kX(UU, XU) {
        (0, XX.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${XU?"gift":"self"}:${UU}`
        }), XU && (NU.recordGift(XU.name, UU), GX(XU))
      }

      function GX(UU) {
        ! function(UU) {
          try {
            cz.k.setItem(NA, (0, YA.B)(pA(), UU))
          } catch {}
        }({
          name: UU.name,
          cosmetics: UU.cosmetics
        }), GU(hF), fU((XU => {
          var zU;
          return {
            name: UU.name,
            seq: (null !== (zU = null === XU || void 0 === XU ? void 0 : XU.seq) && void 0 !== zU ? zU : 0) + 1
          }
        }))
      }
      async function BX(UU) {
        var XU, zU;
        if (xU.current) return;
        if (!zX) return void gX(UU);
        SU(null), HU(null);
        const cU = "gift" === yX ? {
          name: Xo(NU.recipient),
          cosmetics: NU.recipientCosmetics
        } : null;
        if (cU && !cU.name) return void bU();
        const yU = "superRank" === UU ? uU.n.id : (0, uU.e)(UU);
        xU.current = !0;
        const QU = await (0, EA.c)(yU, null !== (XU = null === cU || void 0 === cU ? void 0 : cU.name) && void 0 !== XU ? XU : null);
        if (xU.current = !1, !QU) return;
        qU(UU);
        const AU = await AA.i.purchase(yU, null !== (zU = null === cU || void 0 === cU ? void 0 : cU.name) && void 0 !== zU ? zU : null);
        qU(null), AU ? SU(AU) : (kX(UU, cU), cU || (await (0, FA.flushClientAnalyticsEvents)(), (0, yA.refreshWithoutConfirmation)("superRank" === UU ? "/super-rank-welcome" : `/pack-welcome/${UU}`)))
      }
      const ZX = QU()("Store", {
        StoreGift: "gift" === yX,
        StorePortrait: IX,
        StoreCompact: pX
      });
      if ("pack" === gU.kind) {
        const UU = gU.pack,
          XU = QX.packs.find((XU => XU.pack === UU));
        return (0, YU.jsx)("div", {
          ref: nU,
          className: "CosmeticShopContainer",
          children: (0, YU.jsx)(DA.h, {
            pack: UU,
            onBack: () => {
              GU(hF)
            },
            onPurchased: XU => {
              kX(UU, XU ? {
                name: XU,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === yX && aX && XU && (0, YU.jsxs)(YU.Fragment, {
              children: [(0, YU.jsx)(JA, {
                state: XU.state,
                item: UU,
                price: (RX = UU, "superRank" === RX ? uU.n.price : (0, uU.i)(RX)),
                busy: tX,
                onAct: () => {
                  BX(UU)
                },
                onNeedRecipient: () => {
                  GU(hF), bU()
                },
                onLogin: () => {
                  gX(UU)
                },
                highlight: iU === UU
              }), OU && (0, YU.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: FU(OU)
              })]
            }),
            ownedPacks: cX,
            startAsGift: "gift" === yX,
            initialGiftRecipient: "gift" === yX ? null !== aX && void 0 !== aX ? aX : NU.query.trim() : "",
            highlightCta: iU === UU
          }, UU)
        })
      }
      var RX;
      return "superRank" === gU.kind ? (0, YU.jsx)("div", {
        ref: nU,
        className: QU()(ZX, "StoreDetailView"),
        children: (0, YU.jsx)(gF, {
          state: QX.superRank.state,
          mode: yX,
          giftName: aX,
          busy: tX,
          highlight: "superRank" === iU,
          purchaseError: OU,
          onBack: () => {
            GU(hF)
          },
          onChooseRecipient: () => {
            GU(hF), bU()
          },
          onAct: () => {
            BX("superRank")
          },
          onLogin: () => {
            gX("superRank")
          }
        })
      }) : (0, YU.jsxs)("div", {
        ref: nU,
        className: ZX,
        onScroll: UU => {
          lU.current = UU.currentTarget.scrollTop
        },
        children: [(0, YU.jsx)("div", {
          className: "StoreTopRow",
          children: (0, YU.jsx)(CA, {
            selfName: EU ? oU.getPlayerName() : "",
            giftRecipient: NU,
            suggestionsVersion: null !== (XU = null === rU || void 0 === rU ? void 0 : rU.seq) && void 0 !== XU ? XU : 0,
            pulseSignal: LU,
            disabled: tX || !EU
          })
        }), rU && (0, YU.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            fU(null)
          },
          children: [(0, YU.jsx)(oA.e, {
            showSignal: rU.seq
          }), YA.d, " ", FU("store:giftSent", {
            name: rU.name
          })]
        }, rU.seq), !rU && OU && (0, YU.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: FU(OU)
        }), YX && NX.claimFailed, (0, YU.jsx)(tF, {
          layout: QX,
          mountAtOnce: null !== mU.current,
          bundleGift: "gift" === yX ? {
            recipientName: aX,
            lookingUp: "pending" === NU.recipient.status,
            busy: tX,
            onNeedRecipient: bU,
            onSent: UU => {
              (0, XX.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), GX({
                name: UU,
                cosmetics: NU.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, YA.v)(UX),
          busy: tX,
          highlightItem: iU,
          onOpen: function(UU) {
            (0, XX.reportAnalyticsClick)({
              id: "store.item_open",
              value: UU
            }), GU((0, MU.g)(UU))
          },
          onAct: BX,
          onNeedRecipient: bU,
          onLogin: gX,
          dailyDropTile: YX && NX.tile,
          dealBanner: "self" === yX && null !== TU && (0, YU.jsx)(jF, {
            view: TU,
            highlight: iU,
            scrollSignal: VU,
            onScrolledIntoView: () => {
              sU(0)
            }
          })
        }), "gift" !== yX && (0, YU.jsx)(dF, {}), NX.reveal]
      })
    }));
    var co = zU(2907),
      yo = zU(9417),
      Qo = zU(9237),
      Ao = zU(3016),
      Fo = zU(2833),
      oo = zU(2870),
      Do = zU(2880),
      Eo = zU(2884),
      Yo = zU(2963),
      No = zU(2943),
      Io = zU(2478),
      po = zU(2563),
      ao = zU(2509),
      to = zU(2106),
      go = zU(2891),
      ko = zU(2572);

    function Go(UU) {
      let {
        show: XU
      } = UU;
      return XU ? (0, YU.jsx)(Bo, {}) : null
    }

    function Bo() {
      const {
        t: UU
      } = (0, AU.I)(), {
        followsLeader: XU
      } = (0, Fo.g)(), {
        loading: zU,
        friends: yU,
        requests: oU,
        invites: EU
      } = (0, nU.o)(), {
        userContext: NU
      } = (0, pU.d)(), [IU, aU] = (0, cU.useState)(ko.h);
      (0, cU.useEffect)((() => {
        (0, ko.b)()
      }), []);
      const tU = oU.map((UU => UU.name)),
        {
          state: gU,
          recentRequesters: kU
        } = (0, No.o)(),
        GU = new Map([...("loaded" === gU.status ? gU.recentPlayers : []).map((UU => [UU.preview.name, UU])), ...kU.map((UU => [UU.name, UU]))]),
        BU = (0, cU.useRef)(null),
        [PU, WU] = (0, cU.useState)(""),
        [dU, LU] = (0, cU.useState)("Enter"),
        [eU, CU] = (0, cU.useState)(null);

      function wU() {
        PU && (LU("Loading"), (0, ao.g)(PU, "social_menu").then((UU => {
          if (BU.current) switch (UU.kind) {
            case "sent":
              LU("Success");
              break;
            case "becameFriends":
              LU("BecameFriends");
              break;
            case "failed":
              CU(UU.message), LU("Error")
          }
        })))
      }
      return (0, cU.useEffect)((() => {
        if ("Enter" === dU || "Loading" === dU) return;
        const UU = setTimeout((() => {
          BU.current.value = "", WU(""), LU("Enter")
        }), "Success" === dU ? 1e3 : 4e3);
        return () => {
          clearTimeout(UU)
        }
      }), [dU]), (0, YU.jsx)("div", {
        className: "SocialMenu",
        children: (0, YU.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, YU.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, YU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, YU.jsx)(Eo.b, {
                label: UU("socialBar:addFriend")
              }), (0, YU.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, YU.jsxs)("div", {
                  className: QU()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${dU}`]: !0
                  }),
                  children: ["Loading" === dU && (0, YU.jsx)(RU.b, {}), "Success" === dU && (0, YU.jsx)(FU.d, {
                    name: "check"
                  }), "BecameFriends" === dU && (0, YU.jsx)(YU.Fragment, {
                    children: UU("socialBar:nowFriends", {
                      playerName: PU
                    })
                  }), "Error" === dU && eU && (0, YU.jsx)(YU.Fragment, {
                    children: UU(eU.translationKey, eU.params)
                  })]
                }), (0, YU.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, YU.jsx)(ZU.e, {
                    className: "PlayerSearchInput",
                    placeholderText: UU("socialBar:enterPlayerName"),
                    domRef: BU,
                    onValueChange: UU => {
                      WU((0, SU.o)(UU)), BU.current.value = (0, SU.o)(UU)
                    },
                    onEnter: () => {
                      PU && (0, XX.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), wU()
                    }
                  }), (0, YU.jsxs)(DU.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      wU()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, YU.jsx)(FU.d, {
                      name: "user-plus"
                    }), " ", UU("socialBar:sendRequest")]
                  })]
                })]
              }), (0, YU.jsx)(go.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), EU.length > 0 && (0, YU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, YU.jsx)(Eo.b, {
                label: UU("socialBar:invites"),
                meta: EU.length
              }), EU.map((XU => (0, YU.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, YU.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, YU.jsx)(Io.c, {
                    invite: XU
                  })
                }), (0, YU.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, YU.jsx)(Io.f, {
                    invite: XU
                  })
                }), (0, YU.jsx)(DU.l, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, po.c)(XU)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${XU.destination.kind}`
                  },
                  children: UU("general:join")
                }), (0, YU.jsx)(TU.d, {
                  tooltipInner: (0, YU.jsx)(YU.Fragment, {
                    children: UU("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, YU.jsx)(DU.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === IU || void 0 === IU ? void 0 : IU.kind) && IU.inviteId === XU.id,
                    onClick: () => {
                      nU.d.declineInvite(XU.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${XU.destination.kind}`
                    },
                    children: (0, YU.jsx)(FU.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, XU.id)))]
            }), (0, YU.jsxs)("div", {
              className: QU()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !zU && 0 === oU.length
              }),
              children: [(0, YU.jsx)(Eo.b, {
                label: (0, YU.jsxs)(YU.Fragment, {
                  children: [(0, YU.jsx)(FU.d, {
                    name: to.e
                  }), " ", UU("socialBar:requests")]
                }),
                meta: (0, YU.jsxs)(YU.Fragment, {
                  children: [oU.length, oU.length === hU.n && (0, YU.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: UU("socialBar:limitReached")
                  })]
                })
              }), zU && (0, YU.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, YU.jsx)(RU.b, {})
              }), !zU && 0 === oU.length && (0, YU.jsx)("div", {
                className: "SocialMenuEmpty",
                children: UU("socialBar:noFriendRequests")
              }), !zU && oU.length > 0 && (0, YU.jsx)("div", {
                className: "PlayerRows",
                children: (0, YU.jsx)(AQ.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [oU],
                  children: oU.map(((XU, zU) => {
                    const cU = GU.get(XU.name);
                    return (0, YU.jsxs)(Do.f, {
                      playerSocialPreview: XU,
                      zIndex: oU.length - zU,
                      padDefaultFocus: (0, ko.g)(IU, XU.name, zU),
                      status: cU && (0, YU.jsx)(Yo.d, {
                        gameNameWithVariation: cU.gameNameWithVariation,
                        isPrivateLobby: cU.isPrivateLobby
                      }),
                      children: [(0, YU.jsx)(TU.d, {
                        tooltipInner: (0, YU.jsx)(YU.Fragment, {
                          children: UU("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, YU.jsx)(DU.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            aU((0, ko.c)(tU, zU)), (0, ao.f)(XU.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, YU.jsx)(FU.d, {
                            name: "check"
                          })
                        })
                      }), (0, YU.jsx)(TU.d, {
                        tooltipInner: (0, YU.jsx)(YU.Fragment, {
                          children: UU("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, YU.jsx)(DU.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            aU((0, ko.c)(tU, zU)), (0, ao.f)(XU.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, YU.jsx)(FU.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${XU.name}_${XU.isError}`)
                  }))
                })
              })]
            }), (0, YU.jsx)(Yo.h, {})]
          }), (0, YU.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, YU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, YU.jsx)(Eo.b, {
                label: UU("socialBar:party")
              }), (0, YU.jsx)(oo.d, {})]
            }), (0, YU.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, YU.jsx)(Eo.b, {
                label: (0, YU.jsxs)(YU.Fragment, {
                  children: [(0, YU.jsx)(FU.d, {
                    name: to.c
                  }), " ", UU("socialBar:friends")]
                }),
                meta: (0, YU.jsxs)(YU.Fragment, {
                  children: [yU.length, yU.length >= (0, hU.d)(NU.getPlayerRanks()) && (0, YU.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: UU("socialBar:limitReached")
                  })]
                })
              }), zU && (0, YU.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, YU.jsx)(RU.b, {})
              }), !zU && 0 === yU.length && (0, YU.jsx)("div", {
                className: "SocialMenuEmpty",
                children: UU("socialBar:noFriends")
              }), !zU && yU.length > 0 && (0, YU.jsx)("div", {
                className: "PlayerRows",
                children: (0, YU.jsx)(AQ.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [yU],
                  children: yU.map(((UU, zU) => (0, YU.jsx)(Do.f, {
                    playerSocialPreview: UU,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: UU => {
                      nU.d.removeFriendFromState(UU)
                    },
                    zIndex: yU.length - zU,
                    children: (0, YU.jsx)(Do.d, {
                      friend: UU,
                      followsLeader: XU,
                      analyticsSurface: "social_menu"
                    })
                  }, `${UU.name}_${UU.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Zo = zU(2723),
      Ro = zU(4005),
      Po = zU(4658),
      Wo = zU(1919),
      Lo = zU(3998),
      eo = zU(4007);

    function Co(UU) {
      let {
        count: XU,
        claiming: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)();
      return 0 === XU ? null : (0, YU.jsx)(DU.l, {
        className: "SeasonPassClaimAllButton",
        loading: zU,
        onClick: () => {
          Ro.c.claimAll().catch((UU => {
            console.error("Failed to claim all season pass rewards", UU)
          }))
        },
        children: cU("seasonPass:claimAll", {
          count: XU
        })
      })
    }

    function wo(UU) {
      let {
        view: XU,
        claiming: zU
      } = UU;
      const {
        t: cU
      } = (0, AU.I)(), {
        userContext: yU
      } = (0, pU.d)(), {
        config: QU,
        state: oU,
        tier: DU,
        xpIntoTier: EU,
        xpForNextTier: NU
      } = XU, IU = Date.now(), aU = (0, eo.i)(XU, IU), tU = DU >= QU.tierCount, gU = aU && !tU && NU > 0, kU = NU > 0 && !tU ? Math.min(100, EU / NU * 100) : 100, GU = oU.xpToday >= QU.maxXpPerDay, BU = null !== XU.xpBoost && XU.xpBoost.endsAtMs > IU && !GU ? XU.xpBoost : null;
      return (0, YU.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, YU.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, YU.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: cU("seasonPass:title", {
              season: oU.seasonNumber
            })
          })
        }), (0, YU.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, YU.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, YU.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: cU("seasonPass:tier"),
              "aria-label": `${cU("seasonPass:tier")} ${DU}`,
              children: DU
            }), (0, YU.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(kU),
              children: [(0, YU.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${kU}%`
                }
              }), (0, YU.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [tU && cU("seasonPass:passComplete"), gU && cU("seasonPass:xpProgress", {
                  xp: EU,
                  xpForNextTier: NU
                })]
              })]
            }), gU && (0, YU.jsxs)(YU.Fragment, {
              children: [(0, YU.jsx)(FU.d, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, YU.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: DU + 1
              })]
            })]
          }), (0, YU.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, YU.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, YU.jsx)(FU.d, {
                name: "hourglass"
              }), " ", aU ? cU("seasonPass:endsIn", {
                time: (0, Lo.e)((XU.endsAtMs - IU) / 6e4)
              }) : (0, Po.d)(XU.claimEndsAtMs, cU, IU)]
            }), aU && !tU && (0, YU.jsx)("span", {
              className: GU ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: GU ? cU("seasonPass:dailyCapReached") : cU("seasonPass:dailyXp", {
                xp: oU.xpToday,
                cap: QU.maxXpPerDay
              })
            }), aU && !tU && BU && (0, YU.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, YU.jsx)(FU.d, {
                name: "angles-up"
              }), " ", cU("seasonPass:xpBoostActive", {
                multiplier: BU.multiplier,
                time: (0, Lo.e)(Math.ceil((BU.endsAtMs - IU) / 6e4))
              })]
            }), aU && !tU && !GU && !BU && (0, YU.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: cU("seasonPass:playToEarn")
            }), yU.type === Wo.d.ANONYMOUS && (0, YU.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: cU("seasonPass:logInToKeep")
            })]
          })]
        }), (0, YU.jsx)(Co, {
          count: XU.claimable.length,
          claiming: zU
        })]
      })
    }
    var qo = zU(4666),
      Oo = zU(3438),
      So = zU(3443);

    function ro(UU) {
      return null !== (0, Po.v)(UU) || null !== (0, Po.q)(UU)
    }
    let uo = null;

    function fo() {
      var UU;
      null === (UU = uo) || void 0 === UU || UU.tearDownNotification()
    }

    function io(UU) {
      let {
        reward: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)(), {
        userContext: cU
      } = (0, pU.d)(), yU = (0, Po.v)(XU);
      return (0, YU.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, YU.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, Po.i)(XU, zU)
        }), null !== yU && (0, YU.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, YU.jsx)(Oo.d, {
            profileEffect: yU,
            name: cU.getPlayerName(),
            cosmetics: cU.getPlayerCosmetics()
          })
        }), null === yU && (0, YU.jsx)(Ho, {
          reward: XU
        })]
      })
    }

    function Ho(UU) {
      let {
        reward: XU
      } = UU;
      const {
        userContext: zU
      } = (0, pU.d)(), yU = (0, cU.useRef)(null), {
        previewEmote: QU,
        playEmote: AU
      } = (0, So.d)(), FU = (0, cU.useMemo)((() => (0, Po.q)(XU)), [XU]), oU = FU.emote;
      return (0, YU.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, YU.jsx)(cU.Suspense, {
          fallback: (0, YU.jsx)(RU.b, {}),
          children: (0, YU.jsx)(iA.d, {
            ref: yU,
            framing: "store",
            forcedCosmetics: FU.cosmetics,
            GA: QU.id,
            emotePlaySeq: QU.seq,
            onReady: () => {
              var UU, XU;
              null === (UU = yU.current) || void 0 === UU || UU.resetCamera(), null === (XU = yU.current) || void 0 === XU || XU.setAllCosmetics(zU.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== oU && AU(oU)
            }
          })
        })
      })
    }

    function Mo(UU) {
      let {
        waitingCount: XU
      } = UU;
      const {
        t: zU
      } = (0, AU.I)();
      return (0, vU.usePurchasesAllowed)() ? (0, YU.jsxs)("div", {
        className: "SeasonPassSuperUpsell",
        children: [XU > 0 && (0, YU.jsx)("span", {
          className: "SeasonPassSuperUpsellText",
          children: 1 === XU ? zU("seasonPass:superRewardWaiting") : zU("seasonPass:superRewardsWaiting", {
            count: XU
          })
        }), (0, YU.jsxs)("span", {
          className: "SeasonPassSuperUpsellButtonWrapper",
          children: [(0, YU.jsxs)(DU.l, {
            className: "SeasonPassSuperUpsellButton",
            onClick: () => {
              (0, MU.l)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, YU.jsx)(FU.d, {
              name: "bolt"
            }), " ", zU("homePage:getSuperRank")]
          }), XU > 0 && (0, YU.jsx)("span", {
            className: "SeasonPassSuperUpsellCount",
            children: XU
          })]
        })]
      }) : null
    }
    var vo = zU(34933);

    function Vo(UU) {
      var XU, zU;
      let {
        view: yU,
        claimingKeys: QU,
        superWaitingCount: oU,
        onClaim: DU
      } = UU;
      const {
        t: EU
      } = (0, AU.I)(), NU = (0, cU.useRef)(null), {
        config: IU,
        tier: pU,
        xpIntoTier: aU,
        xpForNextTier: tU,
        state: gU
      } = yU, kU = (0, eo.i)(yU), GU = (0, cU.useRef)(!1), BU = null !== (XU = null === (zU = yU.claimable[0]) || void 0 === zU ? void 0 : zU.tier) && void 0 !== XU ? XU : Math.min(pU + 1, IU.tierCount);
      (0, cU.useLayoutEffect)((() => {
        if (GU.current) return;
        const UU = NU.current,
          XU = UU.querySelector(`[data-tier="${BU}"]`).getBoundingClientRect(),
          zU = UU.getBoundingClientRect();
        UU.scrollLeft += XU.left - zU.left - .3 * UU.clientWidth, UU.scrollTop += XU.top - zU.top - .3 * UU.clientHeight
      }), [BU]), (0, cU.useEffect)((() => {
        const UU = NU.current;

        function XU(XU) {
          GU.current = !0, Math.abs(XU.deltaY) <= Math.abs(XU.deltaX) || UU.scrollWidth <= UU.clientWidth || (XU.preventDefault(), UU.scrollLeft += XU.deltaY)
        }
        return UU.addEventListener("wheel", XU, {
          passive: !1
        }), () => {
          UU.removeEventListener("wheel", XU)
        }
      }), []);
      const ZU = tU > 0 ? aU / tU : 1;
      return (0, YU.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, YU.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, YU.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelSuper",
            children: [(0, YU.jsxs)("span", {
              className: "SeasonPassTrackLabelName",
              children: [(0, YU.jsx)(FU.d, {
                name: "bolt"
              }), EU("seasonPass:superTrack")]
            }), !gU.hasSuperRank && (0, YU.jsx)(Mo, {
              waitingCount: oU
            })]
          }), (0, YU.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, YU.jsx)("span", {
              className: "SeasonPassTrackLabelName",
              children: EU("seasonPass:freeTrack")
            }), (0, YU.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: EU("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, YU.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: NU,
          onPointerDown: () => {
            GU.current = !0
          },
          children: (0, YU.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: IU.tiers.map((UU => {
              const XU = UU.tier,
                zU = function(UU, XU, zU) {
                  if (UU <= XU) return "reached";
                  return zU && UU === XU + 1 ? "earning" : "locked"
                }(XU, pU, kU),
                cU = "earning" === zU;
              return (0, YU.jsx)(so, {
                tierRewards: UU,
                nodeState: zU,
                progress: cU ? ZU : 0,
                freeState: yU.tileState({
                  tier: XU,
                  track: "free"
                }),
                superState: yU.tileState({
                  tier: XU,
                  track: "super"
                }),
                freeClaiming: QU.has((0, eo.j)({
                  tier: XU,
                  track: "free"
                })),
                superClaiming: QU.has((0, eo.j)({
                  tier: XU,
                  track: "super"
                })),
                hasSuperRank: gU.hasSuperRank,
                onClaim: DU
              }, XU)
            }))
          })
        })]
      })
    }
    const so = (0, cU.memo)((function(UU) {
      let {
        tierRewards: XU,
        nodeState: zU,
        progress: cU,
        freeState: yU,
        superState: AU,
        freeClaiming: FU,
        superClaiming: oU,
        hasSuperRank: DU,
        onClaim: EU
      } = UU;
      const {
        tier: NU
      } = XU;
      return (0, YU.jsxs)("div", {
        className: QU()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== zU
        }),
        "data-tier": NU,
        children: [(0, YU.jsx)(no, {
          tier: NU,
          track: "super",
          reward: XU.super,
          tileState: AU,
          claiming: oU,
          padlock: !DU && "claimed" !== AU,
          onClaim: EU
        }), (0, YU.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, YU.jsx)("span", {
            className: QU()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === zU
            }),
            children: "earning" === zU && (0, YU.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * cU + "%"
              }
            })
          }), (0, YU.jsx)("span", {
            className: QU()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === zU
            })
          }), (0, YU.jsx)(vo.c, {
            tier: NU,
            state: zU,
            progress: cU
          })]
        }), (0, YU.jsx)(no, {
          tier: NU,
          track: "free",
          reward: XU.free,
          tileState: yU,
          claiming: FU,
          padlock: !1,
          onClaim: EU
        })]
      })
    }));

    function no(UU) {
      let {
        tier: XU,
        track: zU,
        reward: cU,
        tileState: yU,
        claiming: QU,
        padlock: AU,
        onClaim: FU
      } = UU;
      return cU ? (0, YU.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${zU}`,
        children: (0, YU.jsx)(qo.e, {
          reward: cU,
          tileState: yU,
          track: zU,
          size: "large",
          onClaim: () => {
            FU({
              tier: XU,
              track: zU
            })
          },
          claiming: QU,
          padlock: AU,
          onPreview: ro(cU) ? () => {
            ! function(UU) {
              const XU = pX.NotificationProvider.showCustomPopup({
                body: (0, YU.jsx)(io, {
                  reward: UU
                })
              });
              uo = XU, XU.getResult().finally((() => {
                uo === XU && (uo = null)
              }))
            }(cU)
          } : void 0
        })
      }) : (0, YU.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${zU}`
      })
    }
    var mo = zU(5073);

    function xo(UU) {
      let {
        show: XU
      } = UU;
      return XU ? (0, YU.jsx)(Jo, {}) : null
    }

    function Jo() {
      const {
        t: UU
      } = (0, AU.I)(), XU = (0, Ro.e)();
      return (0, cU.useEffect)((() => fo), []), (0, YU.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === XU.status && (0, YU.jsx)(RU.b, {}), "error" === XU.status && (0, YU.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, YU.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: UU("seasonPass:errorLoad")
          }), (0, YU.jsx)(DU.f, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              Ro.c.retry()
            },
            children: UU("seasonPass:retry")
          })]
        }), "noSeason" === XU.status && (0, YU.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, YU.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, Po.g)(UU)
          })
        }), "loaded" === XU.status && (0, YU.jsx)(jo, {
          view: XU.view,
          claimingKeys: XU.claimingKeys
        })]
      })
    }

    function jo(UU) {
      let {
        view: XU,
        claimingKeys: zU
      } = UU;
      const cU = XU.config.tiers.filter((UU => "needsSuper" === XU.tileState({
          tier: UU.tier,
          track: "super"
        }))).length,
        yU = zU.size > 0;
      return (0, YU.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, YU.jsx)(mo.e, {}), (0, YU.jsx)(wo, {
          view: XU,
          claiming: yU
        }), (0, YU.jsx)(Vo, {
          view: XU,
          claimingKeys: zU,
          superWaitingCount: cU,
          onClaim: Ko
        }), (0, YU.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, YU.jsx)(Co, {
            count: XU.claimable.length,
            claiming: yU
          }), !XU.state.hasSuperRank && (0, YU.jsx)(Mo, {
            waitingCount: cU
          })]
        })]
      })
    }

    function Ko(UU) {
      Ro.c.claim(UU).catch((UU => {
        console.error("Failed to claim season pass reward", UU)
      }))
    }
    var bo = zU(5204);
    var To = zU(3251);
    const ho = UU => {
        let {
          action: XU,
          padAction: zU
        } = UU;
        const {
          isTouchScreen: cU
        } = (0, WU.q)(["isTouchScreen"]), yU = (0, rc.F)();
        return cU && !yU ? null : (0, YU.jsx)(Lc.c, {
          className: "EverythingMenuTabKey",
          noaAction: XU,
          padHidesKey: !0,
          padMenuShortcut: zU
        })
      },
      UD = (0, cU.memo)((function() {
        const {
          t: UU
        } = (0, AU.I)(), {
          gameState: XU,
          openEverythingMenuName: zU,
          crosshairGameView: yU
        } = (0, WU.q)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: FU
        } = (0, pU.d)(), oU = (0, hc.f)(Date.now()), EU = (0, vU.usePurchasesAllowed)(), NU = (0, MU.C)(), {
          view: IU
        } = (0, Xz.q)(), aU = "dot" === NU || null === NU && "ready" === (null === IU || void 0 === IU ? void 0 : IU.kind), tU = (UU, XU) => (0, YU.jsx)(ho, {
          action: UU,
          padAction: XU
        }), [kU, GU] = (0, cU.useState)(null), BU = (0, cU.useRef)(null), ZU = (0, cU.useRef)(null);
        (0, cU.useEffect)((() => {
          var UU;
          const XU = null === (UU = ZU.current) || void 0 === UU ? void 0 : UU.querySelector(".EverythingMenuTabActive");
          null === XU || void 0 === XU || XU.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [zU]);
        const RU = {
            ..."inGame" === XU ? {} : (0, DU.W)({
              focusOnClick: !1
            }),
            ...Fy.g
          },
          PU = UU => {
            const XU = (0, oy.f)((XU => {
              (0, DU.T)(XU.currentTarget), WU.e.set({
                openEverythingMenuName: UU
              })
            }), "pointerup");
            return {
              ...RU,
              onPointerDown: UU => {
                RU.onPointerDown(UU), XU.onPointerDown(UU)
              },
              onPointerUp: UU => {
                RU.onPointerUp(UU), XU.onPointerUp(UU)
              },
              onClick: XU.onClick
            }
          },
          dU = null !== zU,
          LU = zU !== gX.s.COSMETIC_SHOP && !yU;
        async function CU() {
          await async function() {
            if (!kU) return;
            await kU(), GU(null)
          }(), WU.e.set({
            openEverythingMenuName: null
          })
        }
        const wU = (0, cU.useRef)(null),
          qU = (0, cU.useCallback)((() => null !== wU.current && (0, Qo.c)(wU.current)), []);

        function OU() {
          qU() || CU()
        }(0, cU.useEffect)((() => (0, KQ.t)(qU)), [qU]);
        const SU = (0, cU.useMemo)((() => "inGame" === XU ? {
            text: UU("settingsMenu:exitGame"),
            onClick: () => {
              (0, yo.e)()
            }
          } : (0, eU.isDiscordClient)() ? {
            text: UU("settingsMenu:exitGame"),
            onClick: () => {
              tX.l.discordActivity().then((UU => {
                UU.exit("User exited the game")
              }))
            }
          } : null), [XU, UU]),
          rU = dU && !yU,
          uU = "inGame" !== XU,
          fU = rU && uU;
        (0, cU.useLayoutEffect)((() => {
          if (fU) return WU.e.set({
            menuCoversPage: !0
          }), () => {
            WU.e.set({
              menuCoversPage: !1
            })
          }
        }), [fU]);
        const iU = (0, cU.useRef)(null);
        ! function(UU, XU) {
          (0, cU.useEffect)((() => {
            var zU;
            const cU = (0, bo.e)();
            if (!XU || null === cU || !(0, bo.d)({
                site: eU.siteUsed,
                isMobileApp: (0, gU.isMobileApp)(),
                isTouchScreen: WU.e.get("isTouchScreen")
              })) return;
            const yU = null === (zU = UU.current) || void 0 === zU ? void 0 : zU.querySelector(".EverythingMenuBackButton");
            return yU ? cU(yU) : void 0
          }), [UU, XU])
        }(iU, rU && !(0, KQ.i)(zU) && "inGame" === XU);
        const HU = (0, YU.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: OU,
          children: (0, YU.jsx)(DU.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, YU.jsx)(Dy.e, {
          showing: dU,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: zU === gX.s.SHOP,
          doGameplayStartStopOnShow: "inGame" === XU,
          children: (0, YU.jsx)(Yy.b, {
            className: "EverythingMenuContainer",
            show: rU,
            children: (0, YU.jsx)(Ey.c, {
              close: OU,
              togglePointerLock: !1,
              children: (0, YU.jsxs)("div", {
                className: "EverythingMenu",
                ref: iU,
                children: [!(0, KQ.i)(zU) && (0, YU.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, YU.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [SU && (0, YU.jsx)(DU.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        SU.onClick()
                      },
                      children: SU.text
                    }), dU && EU && (0, YU.jsx)("div", {
                      ...RU,
                      className: "EverythingMenuWallet",
                      title: UU("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, MU.l)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, YU.jsx)(co.g, {})
                    })]
                  }), (0, YU.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: ZU,
                    "data-pad-tabs": "1",
                    children: [(0, YU.jsxs)("div", {
                      ...PU(gX.s.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": zU === gX.s.SETTINGS ? "true" : void 0,
                      className: QU()("EverythingMenuTab", {
                        EverythingMenuTabActive: zU === gX.s.SETTINGS
                      }),
                      children: [UU("general:settings"), tU("OpenSettings", "pause")]
                    }), (0, YU.jsxs)("div", {
                      ...PU(gX.s.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": zU === gX.s.CUSTOMISATION ? "true" : void 0,
                      className: QU()("EverythingMenuTab", {
                        EverythingMenuTabActive: zU === gX.s.CUSTOMISATION
                      }),
                      children: [UU("general:player"), tU("OpenCharacterCustomization")]
                    }), gU.featureFlags.useSocialFeatures && (0, YU.jsxs)("div", {
                      ...PU(gX.s.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": zU === gX.s.SOCIAL ? "true" : void 0,
                      className: QU()("EverythingMenuTab", {
                        EverythingMenuTabActive: zU === gX.s.SOCIAL
                      }),
                      ...(0, XX.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, zU === gX.s.SOCIAL),
                      children: [UU("socialBar:social"), (0, YU.jsx)(Zo.d, {})]
                    }), oU && (0, YU.jsx)("div", {
                      ...PU(gX.s.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": zU === gX.s.SEASON_PASS ? "true" : void 0,
                      className: QU()("EverythingMenuTab", {
                        EverythingMenuTabActive: zU === gX.s.SEASON_PASS
                      }),
                      children: UU("seasonPass:title", {
                        season: oU.seasonNumber
                      })
                    }), (0, Xz.l)(IU) && (0, YU.jsxs)("div", {
                      ...PU(gX.s.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": zU === gX.s.COSMETIC_SHOP ? "true" : void 0,
                      className: QU()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: zU === gX.s.COSMETIC_SHOP
                      }),
                      children: [(0, YU.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: UU("store:title")
                      }), "new" === NU && (0, YU.jsx)(yF, {}), aU && (0, YU.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === XU && (0, YU.jsxs)("div", {
                      ...PU(gX.s.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": zU === gX.s.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: QU()("EverythingMenuTab", {
                        EverythingMenuTabActive: zU === gX.s.LOBBY_LEADERBOARD
                      }),
                      children: [UU("general:lobby"), tU("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, YU.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: HU
                  })]
                }), (0, KQ.i)(zU) && HU, (0, YU.jsxs)("div", {
                  ref: wU,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": uU ? "1" : "0.85"
                  },
                  children: [(0, YU.jsx)(bc, {
                    show: zU === gX.s.SETTINGS,
                    setBeforeResumeCallback: GU
                  }), (0, YU.jsx)(yy, {
                    show: zU === gX.s.CUSTOMISATION
                  }), (0, YU.jsx)(cU.Suspense, {
                    fallback: null,
                    children: (0, YU.jsx)(vQ, {
                      show: zU === gX.s.SHOP
                    })
                  }), (0, YU.jsx)(UA, {
                    show: zU === gX.s.LOBBY_LEADERBOARD
                  }), EU && (0, YU.jsx)(zo, {
                    show: zU === gX.s.COSMETIC_SHOP
                  }), !EU && (0, YU.jsx)(mF, {
                    show: zU === gX.s.COSMETIC_SHOP
                  }), (0, YU.jsx)(Go, {
                    show: zU === gX.s.SOCIAL
                  }), (0, YU.jsx)(xo, {
                    show: zU === gX.s.SEASON_PASS
                  })]
                }), !(0, gU.isMobileApp)() && (0, To.l)() && (0, Ny.g)(FU.getPlayerRanks()) && (0, YU.jsx)(Yy.b, {
                  ref: BU,
                  className: "EverythingMenuBannerDiv",
                  show: LU,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, YU.jsx)(Ao.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: BU
                    },
                    showing: dU && LU,
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
  34915: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => pU,
      g: () => tU
    });
    zU(34922);
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1193),
      FU = zU(1494),
      oU = zU(2812),
      DU = zU(1390),
      EU = zU(2559),
      YU = zU(3409),
      NU = zU(2401),
      IU = zU(1305);

    function pU(UU) {
      let {
        endsAt: XU,
        className: zU
      } = UU;
      return (0, IU.jsxs)("span", {
        className: QU()("NewPlayerDealClock", zU),
        children: [(0, IU.jsx)(DU.d, {
          name: "hourglass"
        }), (0, IU.jsx)(oU.e, {
          toTime: XU
        })]
      })
    }

    function aU(UU) {
      let {
        offered: XU,
        needsLogin: zU,
        busy: cU,
        highlight: yU,
        onBuy: oU
      } = UU;
      const {
        t: DU
      } = (0, AU.I)(), {
        pack: pU
      } = XU, aU = (0, YU.g)(XU.package);
      return (0, IU.jsxs)("div", {
        className: QU()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: yU
        }),
        children: [(0, IU.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, IU.jsx)("img", {
            src: NU.c[XU.tier],
            alt: "",
            draggable: !1
          }), (0, IU.jsx)("span", {
            className: "NewPlayerDealTag",
            children: DU("newPlayerDeal:tag")
          })]
        }), (0, IU.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, IU.jsx)(EU.c, {
            className: "NewPlayerDealPackAmount",
            amount: pU.gems
          })
        }), (0, IU.jsx)(FU.l, {
          className: "NewPlayerDealBuy",
          loading: cU,
          onClick: oU,
          ariaLabel: DU("newPlayerDeal:buyLabel", {
            amount: pU.gems.toLocaleString(),
            price: aU
          }),
          children: DU(zU ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: aU
          })
        })]
      })
    }

    function tU(UU) {
      let {
        view: XU,
        needsLogin: zU,
        busy: yU,
        highlight: FU,
        onBuy: oU
      } = UU;
      const {
        t: DU
      } = (0, AU.I)();
      return (0, IU.jsxs)("div", {
        className: QU()("NewPlayerDealPacks", XU.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [XU.packs.map(((UU, XU) => (0, IU.jsxs)(cU.Fragment, {
          children: [XU > 0 && (0, IU.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, IU.jsx)("i", {})
          }), (0, IU.jsx)(aU, {
            offered: UU,
            needsLogin: zU,
            busy: yU,
            highlight: FU === UU.pack.packageId,
            onBuy: () => {
              oU(UU)
            }
          })]
        }, UU.pack.packageId))), (0, IU.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, IU.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: DU("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34925: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => dU,
      g: () => eU
    });
    zU(34922);
    var cU = zU(3403),
      yU = zU(1521),
      QU = zU(2387),
      AU = zU(3390),
      FU = zU(3374),
      oU = zU(3395),
      DU = zU(3354),
      EU = zU(1193),
      YU = zU(1410),
      NU = zU(1129),
      IU = zU(1494),
      pU = zU(1390),
      aU = zU(2559),
      tU = zU(2916),
      gU = zU(2787),
      kU = zU(2794),
      GU = zU(2803),
      BU = zU(1305);
    const ZU = new oU.d(DU.getBillingClient, DU.addPurchaseRecordListener);
    let RU = !1;

    function PU(UU, XU) {
      null !== UU && (0, gU.p)(UU) || ((0, yU.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${XU.pack.packageId}`
      }), null !== UU && (0, gU.u)(UU), dU(XU.pack.gems))
    }

    function WU(UU, XU, zU) {
      const yU = (0, gU.d)(XU);
      switch (UU.kind) {
        case "completed":
          PU(yU, zU);
          break;
        case "pending":
          QU = UU.intentId, AU = () => {
            tU.i.refresh(), PU(yU, zU)
          }, RU || (RU = !0, ZU.listen()), ZU.follow(QU, AU);
          break;
        case "unknownPackage":
          (0, gU.I)(XU, null);
          break;
        case "failed":
          UU.errorKey === cU.e.newPlayerDealUnavailable && (0, gU.I)(XU, null)
      }
      var QU, AU
    }

    function dU(UU) {
      YU.NotificationProvider.showCustomPopup({
        body: XU => (0, BU.jsx)(LU, {
          gems: UU,
          close: XU
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function LU(UU) {
      let {
        gems: XU,
        close: zU
      } = UU;
      const {
        t: cU
      } = (0, EU.I)();
      return (0, BU.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, BU.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, BU.jsx)(pU.d, {
            name: "circle-check"
          }), (0, BU.jsx)(aU.c, {
            amount: XU
          }), (0, BU.jsx)("span", {
            children: cU("newPlayerDeal:added")
          })]
        }), (0, BU.jsx)(IU.l, {
          className: "NewPlayerDealAddedOk",
          onClick: zU,
          children: cU("general:ok")
        })]
      })
    }

    function eU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.c;
      const {
        userContext: zU
      } = (0, NU.d)(), {
        purchaseUnderWay: cU,
        notice: yU,
        buy: oU
      } = (0, FU.b)(XU), DU = (0, kU.i)(), EU = zU.mayBuy() || (0, QU.guestsMayBuy)(), YU = null === DU ? !EU : DU.guest && !zU.isLoggedIn();
      return {
        purchaseUnderWay: cU,
        notice: yU,
        needsLogin: YU,
        buyPack: function(cU, yU) {
          (0, gU.B)("new_player_deal.buy", (0, GU.b)(cU.arm, UU, yU.pack.packageId)), null === DU ? oU(function(UU) {
            return {
              sku: UU.pack.packageId,
              tier: UU.tier,
              amount: UU.pack.gems,
              bonusPercent: 0,
              package: UU.package
            }
          }(yU), null, {
            followPending: !1
          }).then((UU => {
            WU(UU, zU, yU)
          })) : YU ? XU(yU.pack.packageId, null) : PU((0, gU.d)(zU), yU)
        }
      }
    }
  },
  5401: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(5071),
      AU = zU(1193),
      FU = zU(1390),
      oU = zU(1494),
      DU = zU(1545),
      EU = zU(1410),
      YU = zU(2692),
      NU = zU(1305);
    const IU = {
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

    function pU(UU) {
      let {
        platform: XU
      } = UU;
      const zU = "youtube" === XU;
      return (0, NU.jsxs)("span", {
        className: yU()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: zU
        }),
        children: [zU && (0, NU.jsx)(YU.d, {
          variant: "white"
        }), !zU && (0, NU.jsx)(FU.d, {
          name: IU[XU].icon,
          kit: "brands"
        })]
      })
    }

    function aU(UU) {
      let {
        platform: XU,
        link: zU,
        editable: cU,
        userContext: yU,
        onLinksUpdated: YU
      } = UU;
      const {
        t: aU
      } = (0, AU.I)(), tU = IU[XU];
      if (!zU && !cU) return null;

      function gU() {
        var UU;
        if (!yU || !YU) return;
        EU.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: tU.name
            }
          },
          prefixText: QU.q[XU],
          placeholderText: "playBloxd",
          initialValue: null !== (UU = null === zU || void 0 === zU ? void 0 : zU.handle) && void 0 !== UU ? UU : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: zU ? "general:remove" : void 0
        }).getResult().then((async UU => {
          if ("notificationTornDown" !== UU && null !== UU) try {
            "submit" === UU.type ? await DU.c.setSocialLink(yU, XU, UU.value) : await DU.c.clearSocialLink(yU, XU), YU()
          } catch (zU) {
            console.error("Failed to update social link", zU), EU.NotificationProvider.showAlertPopup({
              title: zU.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (zU) {
        const UU = `@${zU.handle}`;
        return (0, NU.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: tU.color
          },
          href: zU.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, NU.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, NU.jsx)(pU, {
              platform: XU
            }), (0, NU.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, NU.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: UU
              })
            })]
          }), cU && (0, NU.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, oU.W)({
              stopPropagation: !0
            }),
            onClick: UU => {
              UU.stopPropagation(), UU.preventDefault(), gU()
            },
            children: (0, NU.jsx)(FU.d, {
              name: "pen-to-square"
            })
          }), !cU && (0, NU.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, NU.jsx)(FU.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, NU.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: tU.color
        },
        ...(0, oU.W)(),
        onClick: () => {
          gU()
        },
        children: [(0, NU.jsx)(pU, {
          platform: XU
        }), (0, NU.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, NU.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: tU.name
          }), (0, NU.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: aU("homePage:profileSocialLinkAdd")
          })]
        }), (0, NU.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, NU.jsx)(FU.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function tU(UU) {
      let {
        socialLinks: XU,
        editable: zU = !1,
        userContext: cU,
        onLinksUpdated: yU
      } = UU;
      if (!zU && 0 === XU.length) return null;
      const AU = new Map(XU.map((UU => [UU.platform, UU]))),
        FU = zU ? QU.m : XU.map((UU => UU.platform));
      return (0, NU.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, NU.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: FU.map((UU => (0, NU.jsx)(aU, {
            platform: UU,
            link: AU.get(UU),
            editable: zU,
            userContext: cU,
            onLinksUpdated: yU
          }, UU)))
        })
      })
    }
  },
  34909: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU
    });
    var cU = zU(61),
      yU = zU(3837);

    function QU() {
      const [UU, XU] = (0, cU.useState)(!1);
      return (0, cU.useLayoutEffect)((() => {
        let UU = !0;
        return (0, yU.g)().then((() => {
          UU && XU(!0)
        })), () => {
          UU = !1
        }
      }), []), UU
    }
  },
  34835: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => aU,
      f: () => pU
    });
    zU(34837);
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(34827);

    function FU(UU, XU) {
      return Math.max(1, Math.round(UU * XU))
    }

    function oU(UU, XU) {
      const zU = XU * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        cU = function(UU, XU) {
          if (UU.lines) return FU(UU.lineThickness, XU) % 2;
          if (UU.dot) return FU(UU.dotSize, XU) % 2;
          return DU(UU, XU) % 2
        }(UU, XU),
        yU = EU(UU.lineThickness * zU, cU),
        QU = FU(UU.lineLength, zU),
        AU = Math.round(UU.gap * zU),
        oU = UU.outline > 0 ? FU(UU.outline, zU) : 0,
        NU = [];
      if (UU.lines && (NU.push({
          x: yU + AU,
          y: 0,
          w: QU,
          h: yU,
          arm: "right"
        }), NU.push({
          x: -AU - QU,
          y: 0,
          w: QU,
          h: yU,
          arm: "left"
        }), NU.push({
          x: 0,
          y: yU + AU,
          w: yU,
          h: QU,
          arm: "down"
        }), UU.tStyle || NU.push({
          x: 0,
          y: -AU - QU,
          w: yU,
          h: QU,
          arm: "up"
        }), 0 === AU && NU.push({
          x: 0,
          y: 0,
          w: yU,
          h: yU
        })), UU.dot) {
        const XU = EU(UU.dotSize * zU, cU),
          QU = UU.lines && 0 === AU && UU.dotSize > UU.lineThickness ? Math.max(XU, yU + 2) : XU,
          FU = (yU - QU) / 2;
        NU.push({
          x: FU,
          y: FU,
          w: QU,
          h: QU
        })
      }
      const IU = NU.map((UU => ({
        ...UU,
        x: UU.x - oU,
        y: UU.y - oU,
        w: UU.w + 2 * oU,
        h: UU.h + 2 * oU
      })));
      let pU = null,
        aU = null;
      if (UU.circle) {
        const XU = FU(UU.circleThickness, zU),
          QU = function(UU, XU) {
            return UU + (UU % 2 === XU ? 0 : 1)
          }(DU(UU, zU), cU),
          AU = (yU - QU) / 2;
        pU = YU(AU, QU, XU), oU > 0 && (aU = YU(AU - oU, QU + 2 * oU, XU + 2 * oU))
      }
      return {
        cell: yU,
        fills: NU,
        outlines: oU > 0 ? IU : [],
        ring: pU,
        ringOutline: aU
      }
    }

    function DU(UU, XU) {
      return Math.round(UU.circleRadius * XU * 2 + FU(UU.circleThickness, XU))
    }

    function EU(UU, XU) {
      return Math.max(2 - XU, 2 * Math.round((UU - XU) / 2) + XU)
    }

    function YU(UU, XU, zU) {
      const cU = 2 * zU >= XU - 1;
      return {
        x: UU,
        y: UU,
        size: XU,
        border: Math.min(zU, Math.floor(XU / 2)),
        filled: cU
      }
    }
    var NU = zU(1305);
    const IU = 1.4;

    function pU(UU, XU) {
      return UU && XU ? `scale(${IU})` : "scale(1)"
    }

    function aU(UU) {
      return "classic" === UU.settings.style ? (0, NU.jsx)(kU, {
        ...UU
      }) : (0, NU.jsx)(dU, {
        ...UU
      })
    }
    const tU = .125;

    function gU(UU, XU) {
      const zU = {};
      if (UU.color !== AU.g.color && (zU.color = (0, AU.i)(UU.color)), UU.opacity !== AU.g.opacity && (zU.opacity = UU.opacity / 100), UU.outline !== AU.g.outline || UU.outlineColor !== AU.g.outlineColor) {
        const XU = UU.outline,
          cU = (0, AU.i)(UU.outlineColor);
        zU.textShadow = XU > 0 ? `-${XU}px 0 ${cU}, 0 ${XU}px ${cU}, ${XU}px 0 ${cU}, 0 -${XU}px ${cU}` : "none"
      }
      if (UU.size !== AU.g.size) {
        const cU = UU.size / 100;
        zU.fontSize = XU ? `calc(max(1.3rem, 18px) * ${cU})` : `calc(1.3rem * ${cU})`, zU.marginTop = `-${tU}em`, zU.transformOrigin = `50% calc(50% + ${tU}em)`
      }
      return zU
    }

    function kU(UU) {
      let {
        settings: XU,
        touch: zU,
        inPreview: cU,
        inEditor: QU,
        pressed: AU = !1,
        pressRef: FU
      } = UU;
      return (0, NU.jsx)("div", {
        className: yU()("Crosshair", {
          Touch: zU,
          CrosshairInPreview: cU,
          CrosshairInEditor: QU || cU
        }),
        ref: FU,
        style: {
          transform: pU(AU, XU.growOnClick),
          ...gU(XU, zU)
        },
        children: "+"
      })
    }

    function GU(UU, XU) {
      return UU / XU + "px"
    }

    function BU(UU, XU, zU, cU) {
      return {
        ...PU(UU, XU, zU),
        width: GU(UU.w, zU),
        height: GU(UU.h, zU),
        background: cU
      }
    }

    function ZU(UU, XU, zU) {
      return {
        left: GU(UU.x, XU),
        top: GU(UU.y, XU),
        width: GU(UU.size, XU),
        height: GU(UU.size, XU),
        borderWidth: GU(UU.border, XU),
        borderColor: zU,
        background: UU.filled ? zU : void 0
      }
    }
    const RU = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function PU(UU, XU, zU) {
      const [cU, yU] = UU.arm ? RU[UU.arm] : [0, 0], QU = Math.round(XU * zU);
      return {
        left: GU(UU.x + cU * QU, zU),
        top: GU(UU.y + yU * QU, zU)
      }
    }

    function WU(UU) {
      return UU.arm ? {
        "data-arm": UU.arm,
        "data-x": UU.x,
        "data-y": UU.y
      } : {}
    }

    function dU(UU) {
      let {
        settings: XU,
        inPreview: zU,
        inEditor: cU,
        pressed: FU = !1,
        spread: DU,
        spreadRef: EU
      } = UU;
      const YU = (0, QU.useRef)(null),
        {
          box: pU,
          dpr: aU
        } = function(UU) {
          const [XU, zU] = (0, QU.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, QU.useLayoutEffect)((() => {
            const XU = UU.current;
            if (!XU) return;
            const cU = () => {
              const UU = XU.getBoundingClientRect(),
                cU = window.devicePixelRatio || 1;
              zU((XU => XU.dpr === cU && XU.box.left === UU.left && XU.box.top === UU.top && XU.box.width === UU.width && XU.box.height === UU.height ? XU : {
                box: {
                  left: UU.left,
                  top: UU.top,
                  width: UU.width,
                  height: UU.height
                },
                dpr: cU
              }))
            };
            cU();
            const yU = new ResizeObserver(cU);
            return yU.observe(XU), window.addEventListener("resize", cU), window.addEventListener("scroll", cU, !0), () => {
              yU.disconnect(), window.removeEventListener("resize", cU), window.removeEventListener("scroll", cU, !0)
            }
          }), [UU]), XU
        }(YU),
        tU = (0, QU.useRef)(aU);
      tU.current = aU;
      const gU = oU(XU, aU, FU && XU.growOnClick ? IU : 1),
        kU = function(UU, XU, zU) {
          const cU = Math.round((UU.left + UU.width / 2) * zU - XU / 2),
            yU = Math.round((UU.top + UU.height / 2) * zU - XU / 2);
          return {
            x: cU / zU - UU.left,
            y: yU / zU - UU.top
          }
        }(pU, gU.cell, aU),
        GU = (0, AU.i)(XU.color),
        RU = (0, AU.i)(XU.outlineColor),
        dU = (0, QU.useRef)(0);
      (0, QU.useLayoutEffect)((() => {
        if (EU) return EU.current = UU => {
          var XU;
          dU.current = UU, null === (XU = YU.current) || void 0 === XU || XU.querySelectorAll("[data-arm]").forEach((XU => {
            Object.assign(XU.style, PU(function(UU) {
              return {
                x: Number(UU.dataset.x),
                y: Number(UU.dataset.y),
                arm: UU.dataset.arm
              }
            }(XU), UU, tU.current))
          }))
        }, () => {
          EU.current = null
        }
      }), [EU]);
      const LU = null !== DU && void 0 !== DU ? DU : dU.current;
      return (0, NU.jsx)("div", {
        ref: YU,
        className: yU()("CrosshairShapes", {
          CrosshairInPreview: zU,
          CrosshairInEditor: cU || zU,
          CrosshairSpreads: void 0 !== EU
        }),
        children: (0, NU.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: kU.x,
            top: kU.y,
            opacity: XU.opacity / 100
          },
          children: (0, NU.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [gU.ringOutline && (0, NU.jsx)("div", {
              className: "CrosshairRing",
              style: ZU(gU.ringOutline, aU, RU)
            }), gU.outlines.map(((UU, XU) => (0, NU.jsx)("div", {
              className: "CrosshairPart",
              ...WU(UU),
              style: BU(UU, LU, aU, RU)
            }, `o${XU}`))), gU.ring && (0, NU.jsx)("div", {
              className: "CrosshairRing",
              style: ZU(gU.ring, aU, GU)
            }), gU.fills.map(((UU, XU) => (0, NU.jsx)("div", {
              className: "CrosshairPart",
              ...WU(UU),
              style: BU(UU, LU, aU, GU)
            }, `f${XU}`)))]
          })
        })
      })
    }
  },
  34845: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => EU,
      g: () => tU,
      i: () => aU
    });
    var cU = zU(34827);
    const yU = "XH1-",
      QU = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      AU = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      FU = ["color", "outlineColor"],
      oU = 1 + 3 * FU.length + AU.length + 1,
      DU = Math.ceil(8 * oU / Math.log2(62)),
      EU = yU.length + DU;

    function YU(UU) {
      let XU = 90;
      for (const zU of UU) XU = 31 * XU + zU & 255;
      return XU
    }
    const NU = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      IU = BigInt(NU.length);

    function pU(UU, XU) {
      let zU = 0n;
      for (const yU of UU) {
        const UU = NU.indexOf(yU);
        if (UU < 0) return null;
        zU = zU * IU + BigInt(UU)
      }
      if (zU >> BigInt(8 * XU) !== 0n) return null;
      const cU = [];
      for (let yU = 0; yU < XU; yU++) cU.unshift(Number(0xffn & zU)), zU >>= 8n;
      return cU
    }

    function aU(UU) {
      let XU = "shapes" === UU.style ? 1 : 0;
      QU.forEach(((zU, cU) => {
        UU[zU] && (XU |= 1 << cU + 1)
      }));
      const zU = [XU];
      for (const yU of FU) {
        const XU = (0, cU.h)(yU, UU[yU]);
        zU.push(XU >> 16 & 255, XU >> 8 & 255, 255 & XU)
      }
      for (const yU of AU) {
        const {
          min: XU,
          step: QU
        } = cU.e[yU];
        zU.push(Math.round(((0, cU.h)(yU, UU[yU]) - XU) / QU))
      }
      return zU.push(YU(zU)), yU + function(UU, XU) {
        let zU = 0n;
        for (const yU of UU) zU = zU << 8n | BigInt(yU);
        let cU = "";
        for (let yU = 0; yU < XU; yU++) cU = NU[Number(zU % IU)] + cU, zU /= IU;
        return cU
      }(zU, DU)
    }

    function tU(UU) {
      for (const XU of UU.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${DU}})`, "gi"))) {
        const UU = gU(pU(XU[1], oU));
        if (UU) return UU
      }
      return null
    }

    function gU(UU) {
      if (!UU || UU.length !== oU || YU(UU.slice(0, -1)) !== UU[UU.length - 1]) return null;
      const XU = UU[0],
        zU = {
          ...cU.g,
          style: 1 & XU ? "shapes" : "classic"
        };
      QU.forEach(((UU, cU) => {
        zU[UU] = 0 !== (XU & 1 << cU + 1)
      }));
      let yU = 1;
      for (const cU of FU) zU[cU] = UU[yU] << 16 | UU[yU + 1] << 8 | UU[yU + 2], yU += 3;
      for (const QU of AU) {
        const {
          min: XU,
          step: AU
        } = cU.e[QU];
        zU[QU] = (0, cU.h)(QU, XU + UU[yU] * AU), yU++
      }
      return zU
    }
  },
  34827: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      g: () => yU,
      h: () => QU,
      i: () => DU,
      l: () => oU,
      p: () => EU,
      q: () => FU,
      s: () => AU
    });
    const cU = {
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
      yU = Object.freeze({
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

    function QU(UU, XU) {
      var zU;
      const {
        min: QU,
        max: AU,
        step: FU
      } = cU[UU];
      if (!Number.isFinite(XU)) return yU[UU];
      const oU = (null !== (zU = String(FU).split(".")[1]) && void 0 !== zU ? zU : "").length,
        DU = Number((Math.round(XU / FU) * FU).toFixed(oU));
      return Math.min(AU, Math.max(QU, DU))
    }

    function AU(UU, XU, zU) {
      const cU = "number" === typeof zU ? QU(XU, zU) : zU;
      return {
        ...UU,
        [XU]: cU
      }
    }

    function FU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(yU).every((cU => zU.includes(cU) || UU[cU] === XU[cU]))
    }

    function oU(UU) {
      return FU(UU, yU)
    }

    function DU(UU) {
      return `#${UU.toString(16).padStart(6,"0")}`
    }

    function EU(UU) {
      const XU = /^#?([0-9a-f]{6})$/i.exec(UU.trim());
      return XU ? parseInt(XU[1], 16) : null
    }
  },
  34853: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU,
      f: () => NU
    });
    var cU = zU(61),
      yU = zU(42),
      QU = zU(34845),
      AU = zU(34827);
    const FU = "crosshairCode";
    let oU = null;
    const DU = new Set;

    function EU() {
      if (null === oU) {
        var UU;
        const XU = yU.k.getItem(FU);
        oU = null !== (UU = "string" === typeof XU ? (0, QU.g)(XU) : null) && void 0 !== UU ? UU : AU.g
      }
      return oU
    }

    function YU(UU) {
      oU = UU, (0, AU.l)(UU) ? yU.k.removeItem(FU) : yU.k.setItem(FU, (0, QU.i)(UU));
      for (const XU of DU) XU()
    }

    function NU() {
      const [UU, XU] = (0, cU.useState)(EU);
      return (0, cU.useEffect)((() => {
        const UU = () => {
          XU(EU())
        };
        return UU(), zU = UU, DU.add(zU), () => {
          DU.delete(zU)
        };
        var zU
      }), []), UU
    }
  },
  34824: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      g: () => yU
    });
    var cU = zU(27);

    function yU(UU, XU) {
      return UU && !XU
    }

    function QU() {
      return yU(cU.e.get("isTouchScreen"), cU.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5204: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => QU,
      h: () => yU
    });
    let cU = null;

    function yU(UU) {
      cU = UU
    }

    function QU() {
      return cU
    }

    function AU(UU) {
      return "bloxd" === UU.site && !UU.isMobileApp && !UU.isTouchScreen
    }
  },
  34784: (UU, XU, zU) => {
    function cU(UU, XU) {
      return UU && !XU
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  34809: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(1325);

    function yU() {
      var UU, XU;
      return null !== (UU = null === (XU = screen.orientation) || void 0 === XU ? void 0 : XU.type) && void 0 !== UU ? UU : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const QU = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && yU() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = yU(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, cU.Wa)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const UU of this.resizers) UU()
          }
        }), 1e3)
      }
      heldSizer(UU) {
        let XU = !1;
        return () => {
          if (XU && this.isHeld()) return null;
          const zU = UU();
          return XU ||= null !== zU, zU
        }
      }
      onRelease(UU) {
        return this.resizers.add(UU), () => {
          this.resizers.delete(UU)
        }
      }
    }
  },
  34762: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => kU,
      f: () => DU,
      h: () => aU,
      l: () => pU
    });
    var cU = zU(173),
      yU = zU(1280),
      QU = zU(1203),
      AU = zU(1131),
      FU = zU(1791);
    const oU = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function DU(UU) {
      return oU[UU]
    }

    function EU(UU) {
      return (0, FU.b)(UU) ? "outdated" : UU instanceof cU.e ? 429 === UU.httpCode ? "busy" : "server" : "offline"
    }

    function YU(UU, XU, zU) {
      return (0, AU.postJsonWithMetricsCookiesAndJsonResponse)(`${QU.clientSideServerUrls.indexUrl}${XU}`, zU, {
        retries: 3
      }, UU.getMetricsCookies()).catch((UU => (console.error("Bad response from the server when trying to change name:", XU, UU), {
        outcome: "failed",
        failure: EU(UU)
      })))
    }

    function NU(UU) {
      return "outcome" in UU && "failed" === UU.outcome
    }

    function IU(UU) {
      return console.error("Error when trying to get with new name from DB", UU), {
        outcome: "refused",
        message: UU
      }
    }
    async function pU(UU) {
      const XU = await YU(UU, "/index/name/random", {});
      return NU(XU) ? XU : "err" in XU ? IU(XU.err) : (UU.setPlayerName(XU.name), {
        outcome: "changed",
        name: XU.name
      })
    }
    async function aU(UU, XU) {
      const zU = await YU(UU, "/index/name/update", {
        name: XU
      });
      return NU(zU) ? zU : "err" in zU ? IU(zU.err) : zU.nameExists ? {
        outcome: "taken"
      } : (UU.setPlayerName(XU), {
        outcome: "changed",
        name: XU
      })
    }

    function tU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const cU = 1 === XU ? 1 : 10 ** (XU - 1),
        QU = String(cU + Math.floor(zU() * (10 ** XU - cU)));
      return `${UU.slice(0,yU.h-XU)}${QU}`
    }
    const gU = [1, 2, 3, 4];
    async function kU(UU, XU) {
      const zU = await aU(UU, XU);
      if ("taken" !== zU.outcome) return zU;
      for (const cU of gU) {
        const zU = tU(XU, cU),
          yU = await aU(UU, zU);
        if ("taken" !== yU.outcome) return yU
      }
      return {
        outcome: "taken"
      }
    }
  },
  34791: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => oU
    });
    var cU = zU(27);
    const yU = 24,
      QU = "farNametags",
      AU = 1e5;

    function FU() {
      var UU;
      return null === (UU = cU.e.get("showDistantNametags")) || void 0 === UU || UU
    }

    function oU() {
      var UU;
      return null !== (UU = function() {
        const UU = new URLSearchParams(window.location.search).get(QU),
          XU = null === UU || "" === UU ? NaN : Number(UU);
        return Number.isFinite(XU) && XU >= 0 ? Math.min(XU, AU) : null
      }()) && void 0 !== UU ? UU : FU() ? 0 : yU
    }
  },
  34816: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU,
      c: () => YU,
      g: () => EU
    });
    var cU = zU(281),
      yU = zU(97),
      QU = zU(134),
      AU = zU(127),
      FU = zU(678);
    const oU = new Set(["mali_bifrost"]);

    function DU() {
      if (FU.h) return;
      const UU = (0, yU.pageOperatingSystem)();
      if ("android" !== UU && "windows" !== UU || (0, FU.e)("webgl_default")) return;
      if ("windows" === UU) return UU => "qualcomm" === (0, yU.normaliseGpuVendor)((0, AU.d)(UU).vendor);
      const XU = (0, QU.o)(),
        zU = null === XU ? (0, cU.q)() : (0, cU.h)(XU.vendor, XU.renderer);
      return null !== zU && oU.has(zU) ? UU => (0, cU.l)((0, AU.d)(UU).vendor, zU) : void 0
    }

    function EU(UU, XU) {
      return UU ? () => !0 : XU()
    }
    async function YU(UU) {
      try {
        const XU = EU(UU, DU),
          zU = navigator.gpu;
        if (void 0 === XU || void 0 === zU) return !1;
        const cU = await (0, AU.m)(zU, {
          seed: !1,
          compatibility: XU
        });
        return "string" !== typeof cU && cU.compatibility && !(0, AU.i)(cU.adapter)
      } catch (XU) {
        return console.error("WebGPU compatibility-mode adapter request failed.", XU), !1
      }
    }
  },
  34891: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => AU
    });
    const cU = [{
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

    function yU(UU) {
      let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof UU) {
        if (!Number.isFinite(UU)) return "0";
        if (Math.abs(UU) < 100) {
          const XU = UU < 0 ? "-" : "",
            zU = Math.abs(UU);
          return zU >= 10 ? `${XU}${zU.toFixed(1).replace(/\.0$/,"")}` : `${XU}${zU.toFixed(2).replace(/\.?0+$/,"")}`
        }
        XU = BigInt(Math.floor(UU))
      } else XU = UU;
      const yU = XU < 0n ? -XU : XU,
        QU = XU < 0n ? "-" : "",
        AU = yU.toString();
      if (AU.length <= zU) return `${QU}${AU}`;
      const FU = 3 * Math.floor((AU.length - 1) / 3);
      if (FU < 3) return `${QU}${AU}`;
      if (FU > 3 * cU.length) {
        const UU = AU[0],
          XU = AU.slice(1, 3).replace(/0+$/, "");
        return `${QU}${XU?`${UU}.${XU}`:UU}e${AU.length-1}`
      }
      const {
        threshold: oU,
        suffix: DU
      } = cU[cU.length - FU / 3], EU = yU / oU, YU = Number(1000n * (yU % oU) / oU), NU = Number(EU) + YU / 1e3;
      let IU;
      return IU = NU >= 100 ? Math.floor(NU).toString() : NU >= 10 ? NU.toFixed(1).replace(/\.0$/, "") : NU.toFixed(2).replace(/\.?0+$/, ""), `${QU}${IU}${DU}`
    }
    const QU = cU.map((UU => {
      let {
        threshold: XU,
        suffix: zU
      } = UU;
      return {
        threshold: Number(XU),
        suffix: zU
      }
    })).filter((UU => {
      let {
        threshold: XU
      } = UU;
      return Number.isFinite(XU)
    }));

    function AU(UU) {
      const XU = Math.abs(UU),
        zU = UU < 0 ? "-" : "";
      for (const {
          threshold: cU,
          suffix: yU
        }
        of QU)
        if (XU >= cU) {
          const UU = XU / cU;
          if (UU >= 1e3) return `${zU}${XU.toExponential(2).replace("e+","e")}`;
          let QU;
          return QU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${zU}${QU}${yU}`
        } return `${zU}${XU}`
    }
  },
  34875: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      g: () => NU,
      k: () => YU,
      o: () => AU,
      q: () => DU,
      s: () => oU
    });
    var cU = zU(344);
    const yU = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      QU = {
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

    function AU(UU) {
      var XU;
      return null !== (XU = QU[UU]) && void 0 !== XU ? XU : {
        translationKey: ""
      }
    }
    const FU = {
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

    function oU(UU) {
      return yU.includes(UU)
    }

    function DU(UU) {
      var XU;
      return !0 === (null === UU || void 0 === UU || null === (XU = UU.customAttributes) || void 0 === XU ? void 0 : XU.cannotEnchant)
    }

    function EU(UU, XU) {
      const {
        max: zU
      } = FU[UU].at(-1);
      return XU <= zU
    }

    function YU(UU) {
      const XU = Math.sin(UU / 80),
        zU = UU => {
          if (UU <= 0) return 0;
          if (UU > 1) return 1;
          let XU = 0;
          const zU = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let cU = 0; cU < zU.length; cU++) {
            XU += (cU % 2 === 0 ? 1 : -1) * zU[cU] * Math.pow(UU, 2 + cU) / (2 + cU)
          }
          return 72 * XU
        },
        cU = .3 - .78 * XU,
        yU = .5 - .78 * XU,
        QU = .6 - .7 * XU,
        AU = .8 - .6 * XU;
      let FU = zU(cU),
        oU = zU(yU) - FU,
        DU = zU(QU) - oU - FU,
        EU = zU(AU) - DU - oU - FU;
      cU < .041 && (oU /= 1 - FU, DU /= 1 - FU, EU /= 1 - FU, FU = 0), yU < .041 && (FU /= 1 - oU, DU /= 1 - oU, EU /= 1 - oU, oU = 0), QU < .041 && (FU /= 1 - DU, oU /= 1 - DU, EU /= 1 - DU, DU = 0), AU < .041 && (FU /= 1 - EU, oU /= 1 - EU, DU /= 1 - EU, EU = 0);
      return {
        commonProb: FU,
        uncommonProb: oU,
        rareProb: DU,
        epicProb: EU,
        legendaryProb: 1 - (EU + DU + oU + FU)
      }
    }

    function NU(UU, XU) {
      const {
        min: zU,
        max: yU
      } = FU[UU][XU], QU = cU.d.sampleUniformIntDistribution(zU, yU, "includeMax");
      return {
        ...YU(QU),
        level: QU
      }
    }
  },
  34837: () => {},
  34922: () => {},
  13576: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14713: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16190: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16681: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);