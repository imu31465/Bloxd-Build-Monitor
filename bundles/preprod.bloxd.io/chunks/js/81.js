export const id = 81;
export const ids = [81];
export const modules = {
  34384: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      EverythingMenu: () => FF
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1226),
      sQ = XQ(1094),
      FQ = XQ(2145),
      PQ = XQ(1507),
      gQ = XQ(1154),
      JQ = XQ(1145);

    function rQ(QQ) {
      let {
        items: WQ,
        link: XQ,
        onClick: wQ,
        selectedItemId: qQ,
        className: rQ,
        padStartsOnTab: IQ = !0
      } = QQ;
      const {
        t: jQ
      } = (0, zQ.C)(), BQ = (0, gQ.i)(), yQ = [];
      for (const TQ of WQ) {
        var VQ;
        const QQ = yQ[yQ.length - 1];
        var DQ;
        if (QQ && QQ.title === (null !== (VQ = TQ.section) && void 0 !== VQ ? VQ : null)) QQ.items.push(TQ);
        else yQ.push({
          title: null !== (DQ = TQ.section) && void 0 !== DQ ? DQ : null,
          items: [TQ]
        })
      }
      return (0, JQ.jsxs)("div", {
        className: TQ()("MenuSideBarBody", rQ),
        "data-pad-tabs": "2",
        children: [yQ.map(((QQ, WQ) => {
          var XQ;
          return (0, JQ.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [QQ.title && (0, JQ.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: jQ(QQ.title)
            }), QQ.items.map((QQ => {
              var WQ;
              const XQ = !!QQ.iconElement || !!QQ.faIcon;
              return (0, JQ.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": qQ === QQ.id ? "true" : void 0,
                "data-pad-default-focus": IQ && qQ === QQ.id || void 0,
                className: TQ()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: qQ === QQ.id
                }),
                onClick: () => {
                  wQ(QQ.id)
                },
                children: [XQ && (0, JQ.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (WQ = QQ.iconElement) && void 0 !== WQ ? WQ : (0, JQ.jsx)(sQ.d, {
                    name: QQ.faIcon
                  })
                }), (!BQ || !XQ) && (0, JQ.jsx)("div", {
                  children: jQ(QQ.title)
                }), QQ.redDot && (0, JQ.jsx)(FQ.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, QQ.id)
            }))]
          }, null !== (XQ = QQ.title) && void 0 !== XQ ? XQ : WQ)
        })), XQ && (0, JQ.jsxs)("div", {
          ...(0, PQ.ab)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: XQ.onClick,
          children: [(0, JQ.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, JQ.jsx)(sQ.d, {
              name: XQ.faIcon
            })
          }), (0, JQ.jsx)("div", {
            children: jQ(XQ.title)
          }), (0, JQ.jsx)(sQ.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var IQ = XQ(2728),
      jQ = XQ(1162),
      BQ = XQ(2535),
      yQ = XQ(3379),
      VQ = XQ(105),
      DQ = XQ(2003),
      pQ = XQ(2337),
      GQ = XQ(2343),
      UQ = XQ(1739),
      bQ = XQ(1391),
      vQ = XQ(5349),
      dQ = XQ(26),
      HQ = XQ(34393);

    function aQ(QQ) {
      let {
        setApplySettingsCallback: WQ
      } = QQ;
      const {
        clientEscMenuOptions: XQ
      } = (0, dQ.n)(["clientEscMenuOptions"]), [qQ, TQ] = (0, wQ.useState)(!1), [zQ, sQ] = (0, wQ.useState)(!1), [FQ, gQ] = (0, wQ.useState)(6400), [rQ, IQ] = (0, wQ.useState)(3600), [jQ, BQ] = (0, wQ.useState)(!1), [yQ, VQ] = (0, wQ.useState)(!1);

      function DQ(QQ) {
        const WQ = "screenshot" === QQ ? sQ : TQ;
        WQ(!0);
        const XQ = jQ ? "normals" : yQ ? "depth" : null;
        HQ.devTools.downloadScene(QQ, {
          width: FQ,
          height: rQ,
          colouring: XQ
        }).catch((QQ => {
          console.error("Couldn't download the scene", QQ)
        })).finally((() => {
          WQ(!1)
        }))
      }
      return (0, JQ.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, JQ.jsx)(vQ.e, {
          label: "Disable Ambient Occlusion",
          checked: XQ.disableAmbientOcclusion,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              disableAmbientOcclusion: QQ
            }), WQ((() => vQ.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), HQ.devTools.supports("ambientLight") && (0, JQ.jsx)(vQ.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: XQ.ambientLightIntensity,
          onChange: QQ => {
            HQ.devTools.setAmbientLightIntensity(QQ).then((() => {
              dQ.b.setClientEscMenuOptions({
                ambientLightIntensity: QQ
              })
            })).catch((QQ => {
              console.error("Couldn't set the ambient light", QQ)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), HQ.devTools.supports("weaponRaycasts") && (0, JQ.jsx)(vQ.e, {
          label: "Show Weapon Raycasts",
          checked: XQ.showWeaponRaycasts,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              showWeaponRaycasts: QQ
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), HQ.devTools.supports("sceneDownload") && (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, JQ.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, JQ.jsx)(vQ.e, {
              label: "Apply normal-based coloring",
              checked: jQ,
              onClick: QQ => {
                BQ(QQ), QQ && VQ(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, JQ.jsx)(vQ.e, {
              label: "Apply depth-based coloring",
              checked: yQ,
              onClick: QQ => {
                VQ(QQ), QQ && BQ(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, JQ.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, JQ.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, JQ.jsx)(UQ.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (QQ, WQ) => {
                  const XQ = parseInt(QQ) || 6400;
                  gQ(XQ)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: FQ.toString()
              }), (0, JQ.jsx)("span", {
                children: "X"
              }), (0, JQ.jsx)(UQ.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (QQ, WQ) => {
                  const XQ = parseInt(QQ) || 3600;
                  IQ(XQ)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: rQ.toString()
              })]
            }), (0, JQ.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, JQ.jsxs)(PQ.h, {
                onClick: () => {
                  DQ("screenshot")
                },
                disabled: zQ,
                children: [zQ && (0, JQ.jsx)(bQ.e, {}), "Download Screenshot"]
              }), (0, JQ.jsxs)(PQ.h, {
                onClick: () => {
                  DQ("glb")
                },
                disabled: qQ,
                children: [qQ && (0, JQ.jsx)(bQ.e, {}), "Download GLB"]
              })]
            })]
          }), (0, JQ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var lQ = XQ(158),
      hQ = XQ(1165),
      iQ = XQ(34405),
      cQ = XQ(3259),
      AQ = XQ(1567),
      RQ = XQ(1302),
      EQ = XQ(1268),
      CQ = XQ(3352),
      uQ = XQ(2109),
      LQ = XQ(1548),
      kQ = XQ(402),
      fQ = XQ(2351),
      SQ = XQ(2359),
      tQ = XQ(3280),
      oQ = XQ(2850),
      eQ = XQ(1707),
      nQ = XQ(3312),
      xQ = XQ(3358),
      YQ = XQ(243);
    var NQ = XQ(1854),
      ZQ = XQ(3276);
    async function OQ() {
      try {
        return function(QQ) {
          const WQ = new Map;
          for (const {
              store: XQ,
              status: wQ,
              autoRenewStatus: qQ,
              managementUrl: TQ
            }
            of Object.values(QQ.subscriptions)) !(0, tQ.g)(XQ) || (0, tQ.h)(wQ) || "willNotRenew" === qQ || WQ.has(XQ) || WQ.set(XQ, null !== TQ && void 0 !== TQ ? TQ : tQ.j[XQ]);
          return Array.from(WQ, (QQ => {
            let [WQ, XQ] = QQ;
            return {
              store: WQ,
              managementUrl: XQ
            }
          }))
        }(await (0, NQ.n)((0, ZQ.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (QQ) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", QQ), null
      }
    }

    function KQ(QQ) {
      const {
        t: WQ,
        selectedLanguage: XQ
      } = (0, zQ.C)(), {
        userContext: qQ
      } = (0, jQ.c)(), {
        superRankInfo: TQ
      } = qQ, sQ = (0, SQ.usePurchasesAllowed)(), FQ = QQ && ((0, kQ.tc)(TQ) || qQ.ranksMayChange) && sQ, {
        accountId: PQ,
        data: gQ
      } = (0, oQ.f)(nQ.d, FQ);
      if ((0, wQ.useEffect)((() => {
          if (FQ) return nQ.d.watchAccount(), eQ.d.addRefetchListener("billing", (QQ => {
            "reconnected" === QQ ? nQ.d.refreshAfterReconnect() : nQ.d.refresh()
          }))
        }), [FQ]), !FQ || !(0, kQ.tc)(TQ) || null === gQ || PQ !== qQ.whamm) return null;
      const JQ = function(QQ, WQ, XQ) {
        const wQ = xQ.k[(0, xQ.e)(xQ.k, WQ)],
          qQ = void 0 === wQ ? void 0 : (0, YQ.e)(QQ.entitlements, wQ.entitlementId);
        return void 0 === qQ || null === qQ.expiresAt || (0, tQ.d)(qQ) <= XQ ? null : qQ.willRenew && null === qQ.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(qQ.expiresAt, XQ)
        } : {
          renews: !1,
          at: (0, tQ.d)(qQ)
        }
      }(gQ, TQ.tier, Date.now());
      if (null === JQ) return null;
      const rQ = JQ.renews ? "store:renewsOn" : "store:endsOn",
        IQ = new Date(JQ.at).toLocaleDateString((0, zQ.n)(XQ.code, rQ), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        BQ = (0, SQ.getBillingStore)(),
        yQ = null !== BQ && (0, tQ.g)(BQ) ? function(QQ, WQ) {
          var XQ;
          const wQ = Object.values(QQ.subscriptions).find((QQ => QQ.store === WQ && !(0, tQ.h)(QQ.status)));
          return void 0 === wQ ? null : null !== (XQ = wQ.managementUrl) && void 0 !== XQ ? XQ : tQ.j[WQ]
        }(gQ, BQ) : null;
      return {
        text: WQ(rQ, {
          date: IQ
        }),
        manageUrl: yQ
      }
    }
    var mQ = XQ(1416),
      MQ = XQ(1246),
      QW = XQ(5241),
      WW = XQ(1532),
      XW = XQ(3889),
      wW = XQ(2326);

    function qW(QQ) {
      let {
        showing: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, zQ.C)(), {
        data: wQ,
        failed: qQ
      } = (0, oQ.f)(XW.d, WQ);
      return 0 === (null === wQ || void 0 === wQ ? void 0 : wQ.length) || null === wQ && !qQ ? null : (0, JQ.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, JQ.jsx)("div", {
          className: "AccountSettingsLabel",
          children: XQ("paymentHistory:title")
        }), null === wQ && qQ && (0, JQ.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: XQ("paymentHistory:loadFailed")
        }), null !== wQ && (0, JQ.jsx)("ul", {
          className: "PaymentHistoryList",
          children: wQ.map((QQ => (0, JQ.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, JQ.jsx)(wW.e, {
              entry: QQ
            }), (0, JQ.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, JQ.jsx)("div", {
                children: (0, wW.m)(XQ, QQ)
              }), (0, JQ.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(QQ.at).toLocaleDateString(), "number" === typeof QQ.orderId && ` \xb7 ${XQ("paymentHistory:order",{orderId:QQ.orderId})}`]
              })]
            })]
          }, (0, XW.c)(QQ))))
        })]
      })
    }
    var TW = XQ(3287),
      zW = XQ(2363),
      sW = XQ(2200);

    function FW() {
      (0, sW.e)({
        titleKey: "payments:logInToRestore"
      })
    }

    function PW(QQ) {
      let {
        status: WQ
      } = QQ;
      switch (WQ) {
        case "restored":
          return (0, nQ.e)(), {
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

    function gW() {
      const QQ = (0, ZQ.usePageBillingClient)(),
        {
          userContext: WQ
        } = (0, jQ.c)(),
        [XQ, qQ] = (0, wQ.useState)(!1),
        [TQ, zQ] = (0, wQ.useState)(null);
      return {
        restoring: XQ,
        notice: TQ,
        restore: () => {
          WQ.isLoggedIn() ? (qQ(!0), zQ(null), QQ.restorePurchases().then(PW, (QQ => QQ instanceof TW.c && "loginRequired" === QQ.code ? (FW(), null) : function(QQ) {
            return QQ instanceof TW.c && "storeBusy" === QQ.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", QQ), (0, nQ.e)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(QQ))).then(zQ).finally((() => {
            qQ(!1)
          }))) : FW()
        }
      }
    }

    function JW(QQ) {
      let {
        restoring: WQ,
        notice: XQ,
        restore: qQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)(), FQ = (0, SQ.usePurchasesAllowed)(), gQ = (0, SQ.getBillingStore)(), rQ = (0, wQ.useRef)(null);
      return (0, wQ.useEffect)((() => {
        var QQ;
        null === (QQ = rQ.current) || void 0 === QQ || QQ.scrollIntoView({
          block: "nearest"
        })
      }), [XQ]), FQ && (0, zW.c)(gQ) ? (0, JQ.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, JQ.jsx)(PQ.l, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: WQ,
          onClick: qQ,
          children: sQ("payments:restorePurchases")
        }), null !== XQ && (0, JQ.jsx)("div", {
          ref: rQ,
          className: TQ()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: XQ.failed
          }),
          children: sQ(XQ.key)
        })]
      }) : null
    }
    var rW = XQ(1965),
      IW = XQ(1280),
      jW = XQ(1404),
      BW = XQ(1238),
      yW = XQ(1360),
      VW = XQ(382),
      DW = XQ(2611);
    const pW = {
      appStore: {
        name: "App Store",
        ...VW.$b.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...VW.$b.googlePlay
      },
      discord: {
        name: "Discord",
        ...VW.$b.discord
      }
    };

    function GW(QQ) {
      let {
        warning: WQ,
        subscriptions: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, zQ.C)();
      return null !== XQ && 0 === XQ.length ? (0, JQ.jsx)(JQ.Fragment, {
        children: wQ(WQ)
      }) : (0, JQ.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [wQ(WQ), null === XQ && (0, JQ.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: wQ("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== XQ && (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: wQ("auth:deleteAccountStoreSubscriptions")
          }), (0, JQ.jsx)(DW.d, {
            className: "DeleteAccountSubtitleLinks",
            links: XQ.map((QQ => {
              let {
                store: WQ,
                managementUrl: XQ
              } = QQ;
              return {
                ...pW[WQ],
                url: XQ
              }
            }))
          })]
        })]
      })
    }

    function UW(QQ) {
      let {
        showing: WQ
      } = QQ;
      const {
        userContext: XQ,
        isUserContextUpdating: qQ
      } = (0, jQ.c)(), {
        t: TQ
      } = (0, zQ.C)(), [sQ, FQ] = (0, wQ.useState)(!1), [gQ, rQ] = (0, wQ.useState)(null), IQ = (0, wQ.useRef)(WQ);
      (0, wQ.useEffect)((() => (IQ.current = WQ, () => {
        IQ.current = !1
      })), [WQ]);
      const BQ = qQ || sQ;
      return (0, JQ.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, JQ.jsxs)(PQ.P, {
          onClick: async function() {
            if (!sQ) {
              FQ(!0);
              try {
                const QQ = await async function() {
                  const [QQ, WQ] = await Promise.all([(0, rW.e)(XQ.availableUserContextTypes) ? OQ() : [], vW(XQ)]);
                  if (!IQ.current) return IW.e.ok();
                  const wQ = (0, RQ.c)(XQ.getPlayerName(), !VQ.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await jW.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: wQ
                        }
                      },
                      subtitle: (0, JQ.jsx)(GW, {
                        warning: bW(XQ.isLoggedIn(), WQ),
                        subscriptions: QQ
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: WQ ? TQ("auth:deleteAccountTypedConfirm", {
                        playerName: wQ
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return IW.e.ok();
                  const qQ = await (0, hQ.postJsonWithMetricsCookiesAndJsonResponse)(`${BW.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: dQ.b.get("gameState")
                  }, {
                    retries: 3
                  }, XQ.getMetricsCookies());
                  if (qQ.error) return IW.e.error(qQ.error);
                  (0, lQ.isDiscordClient)() && (await yW.m.discordActivity()).exit("User deleted their account");
                  return (0, hQ.forgetStoredGuestAccount)(XQ.whamm), (0, hQ.forceGlobalSignOut)(!0), IW.e.ok()
                }(), WQ = QQ.isError() ? QQ.asError().message : null;
                rQ(WQ)
              } catch (QQ) {
                console.error("Failed to delete account:", QQ), rQ(TQ("auth:genericDeleteAccountError"))
              }
              FQ(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: BQ,
          children: [BQ && (0, JQ.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, JQ.jsx)(bQ.e, {})
          }), TQ("auth:deleteAccount")]
        }), gQ && (0, JQ.jsx)("div", {
          className: "DeleteAccountError",
          children: gQ
        })]
      })
    }

    function bW(QQ, WQ) {
      return (0, lQ.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : QQ ? "auth:deleteAccountLossWarning" : WQ ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function vW(QQ) {
      try {
        const {
          accountCreatedAt: WQ
        } = await (0, NQ.n)(LQ.e.getPlayerProfile(QQ, {
          lowerCaseName: QQ.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== WQ && Date.now() - WQ >= 7 * kQ.i
      } catch (WQ) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", WQ), !0
      }
    }
    var dW = XQ(3835),
      HW = XQ(3853),
      aW = XQ(3844);

    function lW(QQ) {
      let {
        showing: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, zQ.C)(), {
        data: wQ,
        failed: qQ
      } = (0, oQ.f)(dW.d, WQ), TQ = null === wQ ? null : (0, dW.f)(wQ);
      return (0, JQ.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, JQ.jsx)("div", {
          className: "AccountSettingsLabel",
          children: XQ("settingsMenu:blockedAndIgnoredPlayers")
        }), null === TQ && !qQ && (0, JQ.jsx)(bQ.e, {}), null === TQ && qQ && (0, JQ.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [XQ("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, JQ.jsx)(PQ.h, {
            className: "SmallTextLight",
            onClick: () => {
              dW.d.refresh()
            },
            children: XQ("general:tryAgain")
          })]
        }), 0 === (null === TQ || void 0 === TQ ? void 0 : TQ.length) && (0, JQ.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: XQ("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== TQ && TQ.length > 0 && (0, JQ.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: TQ.map((QQ => {
            let {
              name: WQ,
              exclusion: wQ
            } = QQ;
            const qQ = aW.g[wQ];
            return (0, JQ.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, JQ.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: WQ
              }), (0, JQ.jsx)(PQ.l, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, HW.d)(qQ, WQ, {
                    chatMessage: null
                  })
                },
                children: XQ(aW.h[qQ].text)
              })]
            }, WQ)
          }))
        })]
      })
    }
    const hW = (0, wQ.memo)((function(QQ) {
      var WQ, XQ;
      let {
        showing: qQ,
        inGame: FQ
      } = QQ;
      const {
        t: gQ,
        selectedLanguage: rQ
      } = (0, zQ.C)(), {
        hideSocialLocationFrom: BQ
      } = (0, dQ.n)(["hideSocialLocationFrom"]), yQ = (0, SQ.usePurchasesAllowed)(), DQ = gW(), pQ = (0, IQ.d)(), {
        userContext: GQ,
        isUserContextUpdating: HQ
      } = (0, jQ.c)(), [aQ, tQ] = (0, wQ.useState)(null !== (WQ = GQ.getPlayerName()) && void 0 !== WQ ? WQ : ""), [oQ, eQ] = (0, wQ.useState)(null), {
        purchasing: nQ,
        outcome: xQ,
        purchase: YQ
      } = (0, cQ.b)("/super-rank-welcome"), NQ = (0, kQ.cc)((0, zQ.n)(rQ.code, "general:timeLeft"), GQ.superRankInfo), ZQ = null === (XQ = KQ(qQ)) || void 0 === XQ ? void 0 : XQ.text, OQ = NQ ? gQ("general:timeLeft", {
        time: NQ
      }) : ZQ, [XW, wW] = (0, wQ.useState)(!1), [TW, zW] = (0, wQ.useState)(!1), sW = (0, wQ.useRef)(null), FW = (0, wQ.useRef)(null), PW = (0, uQ.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), rW = null === PW, IW = null !== PW && void 0 !== PW ? PW : [], jW = GQ !== hQ.NULL_USER_CONTEXT && !GQ.isLoggedIn(), BW = jW && 0 !== (null === PW || void 0 === PW ? void 0 : PW.length), [yW, VW] = (0, wQ.useState)([]), [DW, pW] = (0, wQ.useState)(!1), GW = GQ.playerHasRank("youtuber"), bW = (0, wQ.useCallback)((() => LQ.e.getPlayerProfile(GQ, {
        lowerCaseName: GQ.getPlayerName().toLowerCase()
      }).then((QQ => {
        VW(QQ.socialLinks)
      })).catch((QQ => {
        console.error("Failed to refresh social links", QQ)
      }))), [GQ]);

      function vW(QQ) {
        QQ !== aQ && ((0, RQ.p)(QQ) ? (QQ = (0, RQ.t)(QQ), eQ(gQ("homePage:nameCharacters"))) : eQ(null), sW.current && (sW.current.value = QQ), tQ(QQ))
      }
      return (0, wQ.useEffect)((() => (!0 === qQ ? (clearInterval(FW.current), FW.current = setInterval(pQ, 1e3)) : clearInterval(FW.current), () => {
        clearInterval(FW.current)
      })), [qQ, pQ]), (0, wQ.useEffect)((() => {
        var QQ;
        tQ(null !== (QQ = GQ.getPlayerName()) && void 0 !== QQ ? QQ : "")
      }), [GQ]), (0, wQ.useEffect)((() => {
        if (!qQ || !GW || HQ) return;
        let QQ = !1;
        return pW(!0), VW([]), LQ.e.getPlayerProfile(GQ, {
          lowerCaseName: GQ.getPlayerName().toLowerCase()
        }).then((WQ => {
          QQ || VW(WQ.socialLinks)
        })).catch((QQ => {
          console.error("Failed to load social links", QQ)
        })).finally((() => {
          QQ || pW(!1)
        })), () => {
          QQ = !0
        }
      }), [qQ, GW, HQ, GQ]), (0, JQ.jsxs)("div", {
        className: TQ()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: FQ
        }),
        children: [FQ && (0, JQ.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: gQ("settingsMenu:accountSettingsInGameWarning")
        }), (0, JQ.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, JQ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [gQ("homePage:discordNamePopupTitle"), (0, JQ.jsxs)(AQ.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, EQ.h)({
                name: GQ.getPlayerName()
              }),
              onClick: () => {
                dQ.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, JQ.jsx)(sQ.d, {
                name: "arrow-up-right-from-square"
              }), " ", gQ("profileCard:viewProfile")]
            })]
          }), (0, JQ.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, JQ.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [VQ.featureFlags.canChangeName && (0, JQ.jsx)(UQ.e, {
                className: "EnterName",
                placeholderText: gQ("homePage:enterName"),
                maxLength: RQ.j,
                defaultValue: aQ,
                onValueChange: QQ => {
                  vW(QQ)
                },
                forcedText: XW || !VQ.featureFlags.canChangeName ? aQ : null,
                blurOnEnter: !0,
                domRef: sW
              }), (0, JQ.jsx)(PQ.h, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  vW((0, RQ.g)())
                },
                children: (0, JQ.jsx)(sQ.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !VQ.featureFlags.canChangeName && (0, JQ.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, RQ.c)(aQ, !VQ.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, JQ.jsx)(PQ.h, {
              className: "ChooseNameButton",
              disabled: XW || aQ === GQ.getPlayerName(),
              onClick: () => {
                aQ.length < RQ.m ? eQ(gQ("homePage:changeNameMinLengthError", {
                  length: RQ.m
                })) : aQ.length > RQ.j ? eQ(gQ("homePage:changeNameMaxLengthError", {
                  length: RQ.j
                })) : (wW(!0), eQ(null), (0, iQ.k)(GQ, aQ).then((QQ => {
                  wW(!1), "taken" === QQ.outcome ? eQ(gQ("homePage:nameTaken")) : "refused" === QQ.outcome ? eQ(QQ.message) : "failed" === QQ.outcome && eQ(gQ((0, iQ.h)(QQ.failure)))
                })))
              },
              children: gQ("general:choose")
            })]
          }), oQ && (0, JQ.jsx)("div", {
            className: "ChooseAccNameError",
            children: oQ
          })]
        }), (0, JQ.jsx)(vQ.e, {
          label: (() => {
            if ((0, MQ.j)(BQ)) {
              const QQ = (0, zQ.n)(rQ.code, "general:timeLeft"),
                WQ = (0, kQ.bb)(QQ, Date.now(), BQ + MQ.i);
              return `${gQ("settingsMenu:hideSocialLocation")} (${gQ("general:timeLeft",{time:WQ})})`
            }
            return gQ("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const QQ = !(0, MQ.j)(BQ);
            (0, WW.reportAnalyticsClick)({
              id: "social.hide_location",
              value: QQ ? "on" : "off"
            }), zW(!0), LQ.e.setHideSocialLocation(GQ, QQ).then((() => {
              dQ.b.set({
                hideSocialLocationFrom: QQ ? Date.now() : null
              })
            })).finally((() => {
              zW(!1)
            }))
          },
          checked: (0, MQ.j)(BQ),
          disabled: TW
        }), GW && (0, JQ.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, JQ.jsx)("div", {
            className: "AccountSettingsLabel",
            children: gQ("settingsMenu:socialLinks")
          }), DW && (0, JQ.jsx)(bQ.e, {}), !DW && (0, JQ.jsx)(QW.e, {
            socialLinks: yW,
            editable: !0,
            userContext: GQ,
            onLinksUpdated: bW
          })]
        }), (0, JQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, JQ.jsx)("div", {
            className: "AccountSettingsLabel",
            children: gQ(BW ? "auth:loginOrSwitchAccount" : "auth:login")
          }), rW && (0, JQ.jsx)(bQ.e, {}), !rW && 0 === IW.length && (0, JQ.jsx)("div", {
            className: "NoLoginOptions",
            children: gQ("auth:noLoginOptions")
          }), !rW && IW.length > 0 && "crazygames" !== lQ.siteUsed && (0, JQ.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: IW
          }), !rW && IW.length > 0 && "crazygames" === lQ.siteUsed && (0, JQ.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [IW[0], IW.length > 1 && (0, JQ.jsxs)(JQ.Fragment, {
              children: [(0, JQ.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, JQ.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: gQ("auth:legacyLoginOptions")
                }), (0, JQ.jsx)(mQ.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: gQ("auth:legacyLoginOptionsInfo")
                })]
              }), (0, JQ.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: IW.slice(1)
              })]
            })]
          }), VQ.featureFlags.useLogin && (null !== GQ.loggedInInfo || GQ.isLoggedIn()) && (0, JQ.jsxs)(JQ.Fragment, {
            children: [(0, JQ.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, JQ.jsxs)(PQ.P, {
              onClick: () => {
                (0, hQ.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, JQ.jsx)(sQ.d, {
                name: "right-from-bracket"
              }), gQ("auth:signOut")]
            })]
          })]
        }), !GQ.playerHasRank("super") && yQ && (0, JQ.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, JQ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, JQ.jsx)(sQ.d, {
              name: "bolt"
            }), gQ("homePage:superRank")]
          }), (0, JQ.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, JQ.jsxs)(PQ.s, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, fQ.q)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, JQ.jsx)(sQ.d, {
                name: "bolt"
              }), gQ("homePage:getSuperRank")]
            }), (0, JQ.jsxs)(PQ.s, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, fQ.q)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, JQ.jsx)(sQ.d, {
                name: "bolt"
              }), gQ("homePage:giftSuperRank")]
            })]
          }), (0, JQ.jsx)(JW, {
            ...DQ
          })]
        }), GQ.playerHasRank("super") && (0, JQ.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, JQ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, JQ.jsx)(sQ.d, {
              name: "bolt"
            }), gQ("homePage:superRank"), OQ && (0, JQ.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", OQ, ")"]
            })]
          }), yQ && (0, JQ.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, kQ.tc)(GQ.superRankInfo) && (0, JQ.jsxs)(PQ.s, {
              className: "AccountSettingsSuperRankProlong",
              loading: nQ,
              onClick: () => {
                YQ(CQ.k.id, null)
              },
              children: [(0, JQ.jsx)(sQ.d, {
                name: "bolt"
              }), gQ("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: CQ.k.product.days,
                price: CQ.k.price
              })]
            }), (0, JQ.jsxs)(PQ.s, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, fQ.q)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, JQ.jsx)(sQ.d, {
                name: "bolt"
              }), gQ("homePage:giftSuperRank")]
            })]
          }), xQ && (0, JQ.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: gQ(xQ.translationKey)
          }), (0, JQ.jsx)(JW, {
            ...DQ
          })]
        }), (0, JQ.jsx)(qW, {
          showing: qQ
        }), VQ.featureFlags.useSocialFeatures && (0, JQ.jsx)(lW, {
          showing: qQ
        }), (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, JQ.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, JQ.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: gQ(iW(jW, BW))
            }), (0, lQ.isDiscordClient)() && (0, JQ.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: gQ("auth:discordActivityKickWarning")
            }), (0, JQ.jsx)(UW, {
              showing: qQ
            })]
          }), (0, JQ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: gQ(jW ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function iW(QQ, WQ) {
      return QQ ? WQ ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var cW = XQ(34408),
      AW = XQ(3398),
      RW = XQ(1285),
      EW = XQ(1488),
      CW = XQ(2052),
      uW = XQ(9255),
      LW = XQ(34413);

    function kW() {
      const {
        t: QQ
      } = (0, zQ.C)();
      return (0, CW.e)("localPlayerAlive") ? (0, JQ.jsx)(uW.c, {
        icon: "camera-alt",
        title: QQ("screenshotMode:title"),
        sub: QQ("screenshotMode:entrySub"),
        onClick: LW.d
      }) : null
    }
    var fW = XQ(34417);
    const SW = (0, wQ.memo)((function(QQ) {
        let {
          inGame: WQ
        } = QQ;
        const {
          t: XQ,
          selectedLanguage: wQ
        } = (0, zQ.C)(), {
          clientEscMenuOptions: qQ,
          showDebugOverlay: TQ,
          isTouchScreen: sQ
        } = (0, dQ.n)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), FQ = (0, BQ.g)("hideCoordinates");
        let PQ = "settingsMenu:showCoordinates",
          gQ = "settingsMenu:showChunkCoordinates";

        function rQ(QQ) {
          const WQ = new Intl.DisplayNames([QQ], {
            type: "language"
          }).of(QQ);
          return WQ.charAt(0).toUpperCase() + WQ.slice(1)
        }
        return FQ && (PQ = "settingsMenu:showCoordinatesHidden", gQ = "settingsMenu:showChunkCoordinatesHidden"), (0, JQ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [WQ && VQ.featureFlags.canUseInviteLinks && (0, JQ.jsxs)("div", {
            className: "SettingBox",
            children: [(0, JQ.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: XQ("settingsMenu:inviteLink")
            }), (0, JQ.jsx)(cW.e, {})]
          }), (0, JQ.jsxs)("div", {
            className: "SettingBox",
            children: [(0, JQ.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: XQ("settingsMenu:language")
            }), (0, JQ.jsx)(AW.c, {
              options: Object.entries(zQ.k).map((QQ => {
                let [WQ, XQ] = QQ;
                return {
                  label: (0, JQ.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, JQ.jsx)("img", {
                      src: XQ.flagImg,
                      alt: "flag"
                    }), (0, JQ.jsxs)("span", {
                      children: [rQ(WQ), " ", (0, JQ.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", WQ, ")"]
                      })]
                    })]
                  }),
                  value: WQ
                }
              })),
              value: wQ.code,
              onChange: QQ => {
                RW.h.get().setCurrentLanguage(QQ.value)
              }
            })]
          }), WQ && sQ && (0, fW.e)() && (0, JQ.jsx)(kW, {}), !(0, VQ.isMobileApp)() && (0, EW.k)() && VQ.featureFlags.useForceRotateForceFullscreenOverlay && (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:disableFullscreenMode"),
            checked: qQ.disableFullscreen,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                disableFullscreen: QQ
              })
            }
          }), (0, JQ.jsx)(vQ.e, {
            label: XQ(PQ),
            checked: qQ.showCoordinates,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                showCoordinates: QQ
              })
            },
            disabled: FQ
          }), (0, JQ.jsx)(vQ.e, {
            label: XQ(gQ),
            checked: qQ.showChunkCoordinates,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                showChunkCoordinates: QQ
              })
            },
            disabled: FQ
          }), (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:showFps"),
            checked: qQ.showFPS,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                showFPS: QQ
              })
            }
          }), (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:disableBunnyHopping"),
            checked: qQ.disableBunnyHopping,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                disableBunnyHopping: QQ
              })
            }
          }), (0, yW.w)() && (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:showChat"),
            checked: qQ.showChat,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                showChat: QQ
              })
            }
          }), (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:showDebugOverlay"),
            checked: TQ,
            onClick: QQ => {
              dQ.b.set({
                showDebugOverlay: QQ
              })
            }
          }), VQ.featureFlags.useSocialFeatures && (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:showFriendOnlineToasts"),
            checked: qQ.showFriendOnlineToasts,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                showFriendOnlineToasts: QQ
              })
            }
          }), (0, JQ.jsx)(vQ.e, {
            label: XQ("settingsMenu:showNewItemIndicator"),
            checked: qQ.showNewItemIndicator,
            onClick: QQ => {
              dQ.b.setClientEscMenuOptions({
                showNewItemIndicator: QQ
              })
            }
          })]
        })
      })),
      tW = (0, wQ.memo)((function() {
        const {
          t: QQ
        } = (0, zQ.C)(), {
          soundVolume: WQ,
          musicVolume: XQ
        } = (0, dQ.n)(["soundVolume", "musicVolume"]);
        return (0, JQ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, JQ.jsx)(vQ.h, {
            name: QQ("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: XQ,
            onChange: QQ => {
              dQ.b.set({
                musicVolume: Math.round(100 * QQ) / 100
              })
            },
            format: QQ => QQ.toFixed(2)
          }), (0, JQ.jsx)(vQ.h, {
            name: QQ("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: WQ,
            onChange: QQ => {
              dQ.b.set({
                soundVolume: Math.round(100 * QQ) / 100
              })
            },
            format: QQ => QQ.toFixed(2)
          })]
        })
      }));
    var oW = XQ(731),
      eW = XQ(1498),
      nW = XQ(2493),
      xW = XQ(2479),
      YW = XQ(3736);
    const NW = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function ZW() {
      const {
        t: QQ
      } = (0, zQ.C)(), WQ = (0, YW.d)(), {
        mobilePushNotificationsCanAsk: XQ
      } = (0, dQ.n)(["mobilePushNotificationsCanAsk"]), [qQ, TQ] = (0, wQ.useState)(null), [sQ, FQ] = (0, wQ.useState)(!1), [gQ, rQ] = (0, wQ.useState)(null), [IQ, jQ] = (0, wQ.useState)(!1), BQ = (0, wQ.useCallback)((() => {
        (0, nW.e)().then((QQ => {
          WQ.current && (TQ(QQ), FQ(!1))
        })).catch((QQ => {
          console.error("Failed to load push notification targets:", QQ), WQ.current && FQ(!0)
        }))
      }), [WQ]), yQ = (0, wQ.useCallback)((() => {
        (0, xW.f)().then((QQ => {
          WQ.current && rQ((() => QQ))
        }))
      }), [WQ]);
      (0, wQ.useEffect)((() => {
        BQ()
      }), [BQ]), (0, wQ.useEffect)((() => {
        yQ()
      }), [yQ, XQ]), (0, eW.f)(nW.j, BQ);
      const VQ = null === qQ ? [] : Object.keys(NW).filter((QQ => qQ[QQ] > 0));
      return (0, JQ.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, JQ.jsx)("div", {
          className: "SliderText",
          children: QQ("notificationSettings:pushNotifications")
        }), null === qQ && sQ && (0, JQ.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: QQ("notificationSettings:pushTargetsLoadFailed")
        }), null !== qQ && 0 === VQ.length && (0, JQ.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: QQ("notificationSettings:pushTargetsNone")
        }), VQ.length > 0 && (0, JQ.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: VQ.map((WQ => {
            var XQ;
            return (0, JQ.jsx)("li", {
              children: QQ(NW[WQ], {
                count: null !== (XQ = null === qQ || void 0 === qQ ? void 0 : qQ[WQ]) && void 0 !== XQ ? XQ : 0
              })
            }, WQ)
          }))
        }), null !== gQ && (0, JQ.jsx)(PQ.h, {
          className: "PushNotificationSettingsButton",
          loading: IQ,
          onClick: () => {
            jQ(!0), gQ().catch((QQ => {
              console.error("Failed to turn on push notifications:", QQ)
            })).finally((() => {
              WQ.current && (jQ(!1), yQ())
            }))
          },
          children: QQ("notificationSettings:pushTurnOn")
        })]
      })
    }
    var OW = XQ(2660),
      KW = XQ(2465),
      mW = XQ(1927),
      MW = XQ(43);
    async function QX() {
      return "dailyDropReminderAsked_" + (await hQ.userContextManager.getCurrentUserContext()).whamm
    }

    function WX(QQ) {
      return async function(QQ) {
        if (QQ.remindersOn || (0, dQ.e)(dQ.b.get("gameState"))) return null;
        const WQ = await QX();
        if (null !== MW.i.getItem(WQ)) return null;
        const [XQ, wQ] = await Promise.all([(0, xW.f)().catch((QQ => (console.error("Couldn't tell whether this device can take push notifications:", QQ), null))), XX()]);
        if (null === XQ && !wQ) return null;
        if (null !== XQ && ((0, KW.b)() || (0, xW.j)())) return null;
        return {
          askedKey: WQ,
          requester: XQ
        }
      }(QQ).catch((QQ => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", QQ), null)))
    }

    function XX() {
      return (0, nW.e)().then((QQ => QQ.app + QQ.browser + QQ.msnPlay > 0), (QQ => (console.error("Couldn't tell where push notifications reach this account:", QQ), !0)))
    }
    async function wX(QQ) {
      const WQ = (0, OW.t)({
          remindersOn: !0
        }),
        XQ = null === QQ ? Promise.resolve() : QQ(),
        [wQ, qQ] = await Promise.allSettled([WQ, XQ]);
      "rejected" === wQ.status && console.error("Failed to turn on Lucky Skin Block reminders:", wQ.reason), "rejected" === qQ.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", qQ.reason), "rejected" !== wQ.status && "rejected" !== qQ.status || mW.g.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const qX = {
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
      TX = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function zX(QQ) {
      let {
        setting: WQ,
        value: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)(), sQ = (0, YW.d)(), [FQ, PQ] = (0, wQ.useState)(null), [gQ, rQ] = (0, wQ.useState)(!1), [IQ, jQ] = (0, wQ.useState)(null);
      return (0, wQ.useEffect)((() => {
        "remindersOn" === WQ && (0, xW.f)().then((QQ => {
          sQ.current && jQ((() => QQ))
        }), (QQ => {
          console.error("Couldn't tell whether this device can take push notifications:", QQ)
        }))
      }), [WQ, sQ]), (0, JQ.jsx)(vQ.e, {
        className: TQ()({
          DailyDropSettingFailed: gQ
        }),
        label: qQ(TX[WQ].label),
        checked: null !== FQ && void 0 !== FQ ? FQ : XQ,
        note: gQ ? qQ("dailyDrop:settingFailed") : void 0,
        onClick: QQ => {
          null === FQ && (PQ(QQ), rQ(!1), QQ && null !== IQ && IQ().catch((QQ => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", QQ)
          })), (0, OW.q)("daily_drop.setting", `${TX[WQ].reportAs}_${QQ?"on":"off"}`), "remindersOn" === WQ && QX().then((QQ => {
            MW.i.setItem(QQ, !0)
          }), (QQ => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", QQ)
          })), (0, OW.t)("hidden" === WQ ? {
            hidden: QQ
          } : {
            remindersOn: QQ
          }).catch((QQ => {
            console.error(`Failed to save the Lucky Skin Block's ${WQ} setting:`, QQ), sQ.current && rQ(!0)
          })).finally((() => {
            sQ.current && PQ(null)
          })))
        }
      })
    }
    const sX = (0, wQ.memo)((function() {
      const {
        t: QQ
      } = (0, zQ.C)(), {
        clientEscMenuOptions: WQ
      } = (0, dQ.n)(["clientEscMenuOptions"]), {
        userContext: XQ
      } = (0, jQ.c)(), wQ = XQ.dailyDrop;
      return (0, JQ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [VQ.featureFlags.useSocialFeatures && (0, JQ.jsx)(vQ.g, {
          label: QQ("notificationSettings:friendRequests"),
          options: oW.b.map((WQ => ({
            value: WQ,
            label: QQ(qX[WQ].label)
          }))),
          value: WQ.friendRequestNotifications,
          onChange: QQ => {
            dQ.b.setClientEscMenuOptions({
              friendRequestNotifications: QQ
            })
          },
          circleInfoText: (0, JQ.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: oW.b.map((WQ => (0, JQ.jsxs)("div", {
              children: [(0, JQ.jsx)("b", {
                children: QQ(qX[WQ].label)
              }), ": ", QQ(qX[WQ].info)]
            }, WQ)))
          })
        }), null !== wQ && (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsx)(zX, {
            setting: "remindersOn",
            value: wQ.remindersOn
          }), (0, JQ.jsx)(zX, {
            setting: "hidden",
            value: wQ.hidden
          })]
        }), (0, JQ.jsx)(ZW, {})]
      })
    }));
    var FX = XQ(4819),
      PX = XQ(231),
      gX = XQ(367),
      JX = XQ(7026),
      rX = XQ(3716),
      IX = XQ(34426),
      jX = XQ(663),
      BX = XQ(31);
    var yX = XQ(691),
      VX = XQ(4685);
    const DX = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function pX(QQ) {
      return DX.has(QQ) ? DQ.gameBridge.lookup("qD", null) : null
    }

    function GX(QQ) {
      if (!(0, jX.G)(dQ.b.get("clientEscMenuOptions")[QQ])) return dQ.b.get("clientEscMenuOptions")[QQ];
      const WQ = pX(QQ);
      return null !== WQ ? WQ[DX.get(QQ)] : MW.i.getItem(QQ)
    }

    function UX(QQ, WQ) {
      if ("useTouchControls" === QQ) return void(0, VX.e)(WQ);
      QQ in dQ.b.get("clientEscMenuOptions") && dQ.b.setClientEscMenuOptions({
        [QQ]: WQ
      });
      const XQ = pX(QQ);
      null !== XQ && DQ.gameBridge.send("setChunkAddDistance", {
        ...XQ,
        [DX.get(QQ)]: WQ
      }), MW.i.setItem(QQ, WQ)
    }
    var bX = XQ(4744),
      vX = XQ(34435),
      dX = XQ(34443),
      HX = XQ(4814),
      aX = XQ(34461);

    function lX(QQ) {
      var WQ, qQ, sQ, FQ;
      let {
        minChunkAddDist: PQ,
        getValue: gQ,
        onChange: rQ,
        setApplySettingsCallback: IQ
      } = QQ;
      const {
        t: jQ
      } = (0, zQ.C)(), {
        clientEscMenuOptions: yQ
      } = (0, dQ.n)(["clientEscMenuOptions", "showDistantNametags"]), DQ = (0, wQ.useRef)(gQ("showFog")), pQ = (0, wQ.useRef)(yQ.antiAliasing), GQ = (0, wQ.useRef)(yQ.useWebGpu), [UQ, bQ] = (0, wQ.useState)(null), [aQ, lQ] = (0, wQ.useState)(!1), [hQ, iQ] = (0, wQ.useState)((() => (0, rX.f)(VQ.featureFlags.settings.canUseShaderPacks))), [cQ] = (0, wQ.useState)((() => dQ.b.isWebGpuDefaultOff())), [AQ] = (0, wQ.useState)(gX.j), [RQ] = (0, wQ.useState)((() => !0 === MW.i.getItem(VW.mc))), [EQ] = (0, wQ.useState)((() => dQ.b.isWebGpuOnStored()));
      (0, wQ.useEffect)((() => {
        let QQ = !1;
        return (0, VQ.hasUsableWebGpuAdapter)().then((async WQ => {
          const XQ = RQ || EQ,
            wQ = !WQ && yX.x && await (0, aX.e)(XQ);
          QQ || (bQ(WQ || wQ), lQ(wQ))
        })), (0, rX.n)(VQ.featureFlags.settings.canUseShaderPacks) && (0, JX.f)().then((async WQ => {
          const wQ = null !== WQ && await async function(QQ) {
            const [{
              isShaderPackActive: WQ
            }, {
              loadPageShaderPackCompiler: wQ
            }] = await Promise.all([XQ.e(141).then((() => XQ(7024))), Promise.all([XQ.e(80), XQ.e(138), XQ.e(140)]).then((() => XQ(6984)))]);
            return WQ(QQ, await wQ())
          }(WQ);
          QQ || iQ(wQ)
        })), () => {
          QQ = !0
        }
      }), [RQ, EQ]);
      const CQ = (!(hQ && !RQ) || !aQ) && UQ,
        uQ = function(QQ, WQ, XQ, wQ, qQ) {
          return (0, IX.d)(XQ, wQ) && !0 === WQ ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== WQ ? "settingsMenu:newWebGpu" : qQ ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: QQ && !1 !== WQ,
            disabled: !0 !== WQ
          }
        }(yQ.useWebGpu, CQ, hQ, cQ, AQ),
        LQ = (yQ.useWebGpu || (0, IX.d)(hQ, cQ)) && hQ && !0 === CQ,
        kQ = (0, BQ.g)("lightingOverride"),
        fQ = !(0, jX.G)(kQ);
      let SQ = "settingsMenu:enableLighting";
      fQ && (SQ = kQ ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const tQ = QQ => {
          var WQ, XQ, wQ;
          const qQ = null !== (WQ = QQ.showFog) && void 0 !== WQ ? WQ : gQ("showFog"),
            TQ = null !== (XQ = QQ.antiAliasing) && void 0 !== XQ ? XQ : yQ.antiAliasing,
            zQ = null !== (wQ = QQ.useWebGpu) && void 0 !== wQ ? wQ : yQ.useWebGpu,
            sQ = !yX.x && qQ !== DQ.current || TQ !== pQ.current || zQ !== GQ.current;
          IQ(sQ ? () => vQ.i : null)
        },
        oQ = (0, BQ.g)("fogChunkDistanceOverride"),
        eQ = (0, BQ.g)("fogBlockDistanceOverride"),
        nQ = !(0, jX.G)(oQ) || !(0, jX.G)(eQ),
        xQ = nQ ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [YQ, NQ] = (0, FX.f)(PQ),
        [ZQ, OQ] = (0, HX.i)(PQ),
        KQ = jQ("settingsMenu:chunkLoadDistanceDeviceLimit"),
        mQ = ZQ < YQ,
        MQ = Math.min(null !== (WQ = gQ("chunkHorizAddDist")) && void 0 !== WQ ? WQ : PQ[0], ZQ),
        QW = !nQ && function(QQ, WQ) {
          return !0 === QQ.showFog && QQ.fogChunkDistance > WQ
        }(yQ, MQ);
      return (0, JQ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, JQ.jsx)(vQ.h, {
          name: jQ("settingsMenu:horizontalChunkLoadDistance"),
          min: PQ[0],
          max: YQ,
          selectableMax: ZQ,
          cappedNote: KQ,
          step: 1,
          initValue: MQ,
          onChange: QQ => {
            !0 === gQ("showFog") && QQ < gQ("fogChunkDistance") && rQ("fogChunkDistance", QQ), rQ("chunkHorizAddDist", QQ), BX.k.mB("updatedChunkLoadDist")
          },
          circleInfoText: jQ("settingsMenu:chunkLoadDistanceInfo")
        }), (0, JQ.jsx)(vQ.h, {
          name: jQ("settingsMenu:verticalChunkLoadDistance"),
          min: PQ[1],
          max: NQ,
          selectableMax: OQ,
          cappedNote: mQ ? void 0 : KQ,
          step: 1,
          initValue: Math.min(null !== (qQ = gQ("chunkVertAddDist")) && void 0 !== qQ ? qQ : PQ[1], OQ),
          onChange: QQ => {
            rQ("chunkVertAddDist", QQ), BX.k.mB("updatedChunkLoadDist")
          },
          circleInfoText: jQ("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, JQ.jsx)(vQ.e, {
          label: jQ("settingsMenu:chunkFadeIn"),
          checked: yQ.chunkFadeIn,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              chunkFadeIn: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:chunkFadeInInfo")
        }), HQ.devTools.supports("chunkBorders") && (0, JQ.jsx)(vQ.e, {
          label: jQ("settingsMenu:showChunkBorders"),
          checked: yQ.showChunkBorders,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              showChunkBorders: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:showChunkBordersInfo")
        }), (0, JQ.jsx)(vQ.e, {
          label: jQ(SQ),
          checked: yQ.enableLighting,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              enableLighting: QQ
            })
          },
          disabled: fQ
        }), (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, JQ.jsx)(vQ.e, {
            label: jQ(xQ),
            checked: yQ.showFog,
            onClick: QQ => {
              tQ({
                showFog: QQ
              }), dQ.b.setClientEscMenuOptions({
                showFog: QQ
              })
            },
            disabled: nQ,
            className: TQ()({
              SettingBoxWarning: QW
            })
          }), (0, JQ.jsx)(vQ.h, {
            name: jQ("settingsMenu:fogChunkDistance"),
            min: PQ[0],
            max: PX.h.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (sQ = yQ.fogChunkDistance) && void 0 !== sQ ? sQ : PQ[0],
            onChange: QQ => {
              dQ.b.setClientEscMenuOptions({
                fogChunkDistance: QQ
              }), BX.k.mB("fogChunkDistanceChanged", QQ)
            },
            circleInfoText: jQ("settingsMenu:fogChunkDistanceInfo"),
            disabled: nQ || !1 === gQ("showFog"),
            className: TQ()({
              SettingBoxWarning: QW
            })
          }), QW && (0, JQ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: jQ("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !yX.x && (0, JQ.jsx)(vQ.e, {
          label: jQ(LQ ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !LQ && yQ.disableTexAtlas,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              disableTexAtlas: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: LQ
        }), (0, JQ.jsx)(vQ.h, {
          name: jQ("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: yQ.cameraFOV,
          onChange: QQ => {
            dQ.b.setClientEscMenuOptions({
              cameraFOV: QQ
            })
          }
        }), (0, JQ.jsx)(vQ.e, {
          label: jQ("settingsMenu:disableViewBobbing"),
          checked: yQ.disableBobbing,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              disableBobbing: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:disableViewBobbingInfo")
        }), (0, JQ.jsx)(vQ.e, {
          label: jQ("settingsMenu:antiAliasing"),
          checked: yQ.antiAliasing,
          onClick: QQ => {
            tQ({
              antiAliasing: QQ
            }), (0, bX.e)("antiAliasing"), dQ.b.setClientEscMenuOptions({
              antiAliasing: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:antiAliasingInfo")
        }), (0, JQ.jsx)(vQ.h, {
          name: jQ("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (FQ = yQ.pixelScale) && void 0 !== FQ ? FQ : 1,
          onChange: QQ => {
            (QQ !== dQ.b.get("clientEscMenuOptions").pixelScale || (0, dX.r)()) && (0, bX.e)("pixelScale"), dQ.b.setClientEscMenuOptions({
              pixelScale: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:pixelScaleInfo"),
          format: QQ => `${QQ}x`
        }), (0, JQ.jsx)(vQ.e, {
          label: jQ("settingsMenu:pixelSmoothing"),
          checked: yQ.pixelSmoothing,
          onClick: QQ => {
            dQ.b.setClientEscMenuOptions({
              pixelSmoothing: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:pixelSmoothingInfo")
        }), yX.x && (0, JQ.jsx)(vQ.e, {
          label: jQ("settingsMenu:distantNametags"),
          checked: (0, vX.c)(),
          onClick: QQ => {
            dQ.b.set({
              showDistantNametags: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:distantNametagsInfo")
        }), (0, JQ.jsx)(vQ.e, {
          label: jQ(uQ.translationKey),
          checked: uQ.checked,
          onClick: QQ => {
            tQ({
              useWebGpu: QQ
            }), dQ.b.setClientEscMenuOptions({
              useWebGpu: QQ
            })
          },
          circleInfoText: jQ("settingsMenu:newWebGpuInfo"),
          disabled: uQ.disabled
        })]
      })
    }
    var hX = XQ(4737),
      iX = XQ(9228),
      cX = XQ(34469),
      AX = XQ(9244),
      RX = XQ(34471);
    const EX = {
        color: 16777215,
        name: "white"
      },
      CX = {
        color: 0,
        name: "black"
      },
      uX = [EX, {
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
      }, CX],
      LX = [CX, EX];

    function kX(QQ) {
      return `${QQ} px`
    }

    function fX(QQ) {
      return `${QQ}%`
    }

    function SX(QQ) {
      let {
        label: WQ,
        value: XQ,
        swatches: wQ,
        onChange: qQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)(), FQ = !wQ.some((QQ => QQ.color === XQ));
      return (0, JQ.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, JQ.jsx)("div", {
          className: "SliderText",
          children: WQ
        }), (0, JQ.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": WQ,
          children: [wQ.map((QQ => {
            let {
              color: WQ,
              name: wQ
            } = QQ;
            return (0, JQ.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": WQ === XQ,
              "aria-label": sQ(`crosshairSettings:color_${wQ}`),
              "data-pad-focusable": !0,
              className: TQ()("CrosshairSwatch", {
                Selected: WQ === XQ
              }),
              style: {
                background: (0, RX.l)(WQ)
              },
              onClick: () => {
                qQ(WQ)
              }
            }, WQ)
          })), (0, JQ.jsx)("label", {
            className: TQ()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: FQ
            }),
            style: FQ ? {
              background: (0, RX.l)(XQ)
            } : void 0,
            title: sQ("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, JQ.jsx)("input", {
              type: "color",
              "aria-label": sQ("crosshairSettings:customColor"),
              value: (0, RX.l)(XQ),
              onChange: QQ => {
                const WQ = (0, RX.q)(QQ.target.value);
                null !== WQ && qQ(WQ)
              }
            })
          })]
        })]
      })
    }

    function tX(QQ) {
      let {
        settings: WQ,
        onChange: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, zQ.C)(), qQ = (QQ, wQ) => {
        XQ((0, RX.x)(WQ, QQ, wQ))
      }, TQ = function(QQ, XQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kX;
        const {
          min: TQ,
          max: zQ,
          step: sQ
        } = RX.e[QQ];
        return (0, JQ.jsx)(vQ.h, {
          name: XQ,
          min: TQ,
          max: zQ,
          step: sQ,
          initValue: WQ[QQ],
          format: wQ,
          onChange: WQ => {
            qQ(QQ, WQ)
          }
        }, QQ)
      }, sQ = ["lines", "dot", "circle"].filter((QQ => WQ[QQ])), FQ = (QQ, XQ, wQ) => (0, JQ.jsx)(vQ.e, {
        label: XQ,
        checked: WQ[QQ],
        disabled: 1 === sQ.length && sQ[0] === QQ,
        circleInfoText: wQ,
        onClick: WQ => {
          qQ(QQ, WQ)
        }
      }, QQ), PQ = "shapes" === WQ.style;
      return (0, JQ.jsxs)(JQ.Fragment, {
        children: [(0, JQ.jsx)(vQ.g, {
          label: wQ("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: wQ("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: wQ("crosshairSettings:styleShapes")
          }],
          value: WQ.style,
          onChange: QQ => {
            qQ("style", QQ)
          }
        }), (0, JQ.jsx)(SX, {
          label: wQ("crosshairSettings:color"),
          value: WQ.color,
          swatches: uX,
          onChange: QQ => {
            qQ("color", QQ)
          }
        }), TQ("opacity", wQ("crosshairSettings:opacity"), fX), !PQ && TQ("size", wQ("crosshairSettings:size"), fX), PQ && (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [FQ("lines", wQ("crosshairSettings:lines")), WQ.lines && TQ("lineLength", wQ("crosshairSettings:lineLength")), WQ.lines && TQ("lineThickness", wQ("crosshairSettings:lineThickness")), WQ.lines && TQ("gap", wQ("crosshairSettings:gap")), WQ.lines && FQ("tStyle", wQ("crosshairSettings:tStyle"))]
        }), PQ && (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [FQ("dot", wQ("crosshairSettings:dot")), WQ.dot && TQ("dotSize", wQ("crosshairSettings:dotSize"))]
        }), PQ && (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [FQ("circle", wQ("crosshairSettings:circle")), WQ.circle && TQ("circleRadius", wQ("crosshairSettings:circleRadius")), WQ.circle && TQ("circleThickness", wQ("crosshairSettings:circleThickness"))]
        }), (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [TQ("outline", wQ("crosshairSettings:outline"), (QQ => QQ > 0 ? kX(QQ) : wQ("crosshairSettings:off"))), WQ.outline > 0 && (0, JQ.jsx)(SX, {
            label: wQ("crosshairSettings:outlineColor"),
            value: WQ.outlineColor,
            swatches: LX,
            onChange: QQ => {
              qQ("outlineColor", QQ)
            }
          })]
        }), FQ("growOnClick", wQ("crosshairSettings:growOnClick")), PQ && FQ("forGuns", wQ("crosshairSettings:forGuns"), wQ("crosshairSettings:forGunsInfo"))]
      })
    }
    var oX = XQ(78),
      eX = XQ(1318),
      nX = XQ(13285),
      xX = XQ(14462),
      YX = XQ(15966),
      NX = XQ(16473);
    const ZX = ["sky", "grass", "stone", "sand", "snow", "night"],
      OX = "4rem";

    function KX(QQ) {
      return {
        backgroundImage: `url(${QQ})`,
        backgroundSize: `${OX} ${OX}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function mX(QQ) {
      return {
        ...(() => {
          switch (QQ) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return KX(nX);
            case "stone":
              return KX(xX);
            case "sand":
              return KX(YX);
            case "snow":
              return KX(NX);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function MX(QQ) {
      return Object.freeze({
        ...RX.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...QQ
      })
    }
    const Qw = [{
        id: "default",
        settings: RX.h
      }, {
        id: "cross",
        settings: MX({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: MX({
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
        settings: MX({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: MX({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: MX({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: MX({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: MX({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Ww = ["growOnClick", "forGuns"];
    var Xw = XQ(34480);

    function ww(QQ) {
      let {
        label: WQ,
        selected: XQ,
        onClick: wQ,
        className: qQ,
        style: zQ,
        children: sQ
      } = QQ;
      return (0, JQ.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": XQ,
        title: WQ,
        "aria-label": WQ,
        "data-pad-focusable": !0,
        className: TQ()("CrosshairBackdropSwatch", qQ, {
          Selected: XQ
        }),
        style: zQ,
        onClick: wQ,
        children: sQ
      })
    }

    function qw(QQ) {
      let {
        backdrop: WQ,
        onChange: XQ,
        game: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)();
      return (0, JQ.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": qQ("crosshairSettings:background"),
        children: [wQ && (0, JQ.jsx)(ww, {
          label: qQ("crosshairSettings:bg_game"),
          selected: wQ.selected,
          onClick: wQ.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, JQ.jsx)(sQ.d, {
            name: "cube"
          })
        }), ZX.map((QQ => (0, JQ.jsx)(ww, {
          label: qQ(`crosshairSettings:bg_${QQ}`),
          selected: !(null !== wQ && void 0 !== wQ && wQ.selected) && QQ === WQ,
          style: mX(QQ),
          onClick: () => {
            XQ(QQ)
          }
        }, QQ)))]
      })
    }

    function Tw(QQ) {
      let {
        settings: WQ,
        touch: XQ,
        backdrop: wQ,
        onChange: qQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)(), FQ = function(QQ) {
        var WQ;
        return null !== (WQ = Qw.find((WQ => (0, RX.u)(WQ.settings, QQ, Ww)))) && void 0 !== WQ ? WQ : null
      }(WQ);
      return (0, JQ.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": sQ("crosshairSettings:presets"),
        children: Qw.map((QQ => {
          const zQ = (null === FQ || void 0 === FQ ? void 0 : FQ.id) === QQ.id;
          return (0, JQ.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": zQ,
            "data-pad-focusable": !0,
            className: TQ()("CrosshairPreset", {
              Selected: zQ
            }),
            onClick: () => {
              qQ(function(QQ, WQ) {
                return {
                  ...WQ.settings,
                  growOnClick: QQ.growOnClick,
                  forGuns: QQ.forGuns
                }
              }(WQ, QQ))
            },
            children: [(0, JQ.jsx)("div", {
              className: "CrosshairPresetStage",
              style: mX(wQ),
              children: (0, JQ.jsx)(Xw.c, {
                settings: QQ.settings,
                touch: XQ,
                inPreview: !0
              })
            }), (0, JQ.jsx)("div", {
              className: "CrosshairPresetName",
              children: sQ(`crosshairSettings:preset_${QQ.id}`)
            })]
          }, QQ.id)
        }))
      })
    }
    var zw = XQ(1736);

    function sw(QQ, WQ) {
      const [XQ, qQ] = (0, wQ.useState)(!1), TQ = () => {
        qQ(!1)
      }, [zQ, sQ] = (0, wQ.useState)(!1), FQ = (0, wQ.useRef)({
        growOnClick: QQ.growOnClick,
        forGuns: QQ.forGuns
      });
      (0, wQ.useEffect)((() => {
        const WQ = FQ.current;
        FQ.current = {
          growOnClick: QQ.growOnClick,
          forGuns: QQ.forGuns
        }, (QQ.growOnClick && !WQ.growOnClick || QQ.forGuns && !WQ.forGuns) && sQ(!0)
      }), [QQ.growOnClick, QQ.forGuns]), (0, wQ.useEffect)((() => {
        if (!zQ) return;
        const QQ = setTimeout((() => {
          sQ(!1)
        }), 600);
        return () => {
          clearTimeout(QQ)
        }
      }), [zQ]);
      const PQ = XQ || zQ;
      return {
        view: {
          pressed: PQ,
          spread: PQ && QQ.forGuns && !QQ.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: QQ => {
            !QQ.target.closest(WQ) && (0, zw.e)(QQ.currentTarget, QQ.pointerId) && qQ(!0)
          },
          onPointerUp: TQ,
          onPointerCancel: TQ,
          onLostPointerCapture: TQ
        }
      }
    }

    function Fw(QQ) {
      let {
        settings: WQ,
        touch: XQ,
        backdrop: wQ,
        className: qQ,
        children: zQ,
        label: sQ
      } = QQ;
      const FQ = sw(WQ, ".CrosshairStageControls");
      return (0, JQ.jsxs)("div", {
        className: TQ()("CrosshairStage", qQ),
        style: mX(wQ),
        ...FQ.handlers,
        children: [(0, JQ.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": sQ,
          children: (0, JQ.jsx)(Xw.c, {
            settings: WQ,
            touch: XQ,
            inPreview: !0,
            ...FQ.view
          })
        }), zQ]
      })
    }
    const Pw = "crosshairFullScreen";

    function gw(QQ) {
      let {
        settings: WQ,
        touch: XQ,
        backdrop: qQ,
        onBackdrop: FQ,
        inGame: gQ,
        onChange: rQ,
        onClose: IQ
      } = QQ;
      const {
        t: jQ
      } = (0, zQ.C)(), BQ = (0, wQ.useRef)(null);
      (0, eX.k)("popup", BQ, IQ),
      function(QQ) {
        const WQ = (0, wQ.useRef)(QQ);
        WQ.current = QQ, (0, wQ.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Pw]: !0
          }, "");
          let QQ = !1;
          const XQ = () => {
            QQ = !0, WQ.current()
          };
          return window.addEventListener("popstate", XQ), () => {
            var WQ;
            window.removeEventListener("popstate", XQ), !QQ && null !== (WQ = window.history.state) && void 0 !== WQ && WQ[Pw] && window.history.back()
          }
        }), [])
      }(IQ);
      const yQ = (0, wQ.useRef)(IQ);
      yQ.current = IQ, (0, wQ.useEffect)((() => {
        function QQ(QQ) {
          "Escape" === QQ.key && (QQ.stopPropagation(), yQ.current())
        }
        return window.addEventListener("keydown", QQ, !0), () => {
          window.removeEventListener("keydown", QQ, !0)
        }
      }), []);
      const VQ = sw(WQ, ".CrosshairFullScreenPanel"),
        [DQ, pQ] = (0, wQ.useState)(!0),
        GQ = DQ && gQ;
      (0, wQ.useEffect)((() => {
        if (GQ) return dQ.b.set({
          crosshairGameView: !0
        }), () => {
          dQ.b.set({
            crosshairGameView: !1
          })
        }
      }), [GQ]);
      const [UQ, bQ] = (0, wQ.useState)(!0);
      return (0, oX.createPortal)((0, JQ.jsxs)("div", {
        ref: BQ,
        className: "CrosshairFullScreen",
        style: GQ ? void 0 : mX(qQ),
        ...VQ.handlers,
        children: [(0, JQ.jsx)(Xw.c, {
          settings: WQ,
          touch: XQ,
          inEditor: !0,
          ...VQ.view
        }), (0, JQ.jsxs)("div", {
          className: TQ()("CrosshairFullScreenPanel", {
            Collapsed: !UQ
          }),
          children: [(0, JQ.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, JQ.jsx)(qw, {
              backdrop: qQ,
              onChange: QQ => {
                pQ(!1), FQ(QQ)
              },
              game: gQ ? {
                selected: GQ,
                onSelect: () => {
                  pQ(!0)
                }
              } : void 0
            }), (0, JQ.jsx)(PQ.T, {
              className: "CrosshairPanelToggle",
              ariaLabel: jQ(UQ ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                bQ(!UQ)
              },
              children: (0, JQ.jsx)(sQ.d, {
                name: UQ ? "caret-up" : "pen"
              })
            }), (0, JQ.jsx)(PQ.h, {
              className: "CrosshairFullScreenDone",
              onClick: IQ,
              padDefaultFocus: !0,
              children: jQ("crosshairSettings:done")
            })]
          }), UQ && (0, JQ.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, JQ.jsx)(Tw, {
              settings: WQ,
              touch: XQ,
              backdrop: qQ,
              onChange: rQ
            }), (0, JQ.jsx)(tX, {
              settings: WQ,
              onChange: rQ
            })]
          })]
        })]
      }), document.body)
    }
    var Jw = XQ(2833),
      rw = XQ(34488);

    function Iw(QQ) {
      let {
        settings: WQ,
        onChange: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)(), FQ = (0, rw.j)(WQ), [gQ, rQ] = (0, Jw.h)(), [IQ, jQ] = (0, wQ.useState)(!1), BQ = (0, wQ.useRef)(null), [yQ, VQ] = (0, Jw.h)(), [DQ, pQ] = (0, wQ.useState)(!1);
      return (0, JQ.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, JQ.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, JQ.jsxs)(PQ.T, {
            className: TQ()("CrosshairCopy", {
              ActiveSecondaryButton: gQ
            }),
            onClick: () => {
              (0, Jw.g)(FQ, {
                useShareSheet: !1,
                onOutcome: QQ => {
                  jQ("failed" === QQ), "copied" === QQ && rQ()
                }
              })
            },
            children: [(0, JQ.jsx)(sQ.d, {
              name: gQ ? "check" : "copy"
            }), " ", qQ(gQ ? "general:copied" : "crosshairSettings:copy")]
          }), (0, JQ.jsx)(UQ.e, {
            className: "CrosshairPaste",
            domRef: BQ,
            ariaLabel: qQ("crosshairSettings:paste"),
            placeholderText: qQ("crosshairSettings:paste"),
            onValueChange: QQ => {
              const WQ = (0, rw.h)(QQ);
              pQ(!WQ && QQ.trim().length >= rw.d), WQ && (XQ(WQ), BQ.current.value = "", VQ())
            }
          })]
        }), IQ && (0, JQ.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: FQ,
          "aria-label": qQ("crosshairSettings:copy"),
          onFocus: QQ => {
            QQ.currentTarget.select()
          }
        }), (0, JQ.jsxs)("div", {
          "aria-live": "polite",
          children: [DQ && (0, JQ.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: qQ("crosshairSettings:pasteInvalid")
          }), yQ && !DQ && (0, JQ.jsx)("div", {
            className: "CrosshairShareNote",
            children: qQ("crosshairSettings:applied")
          })]
        })]
      })
    }
    var jw = XQ(34491);
    let Bw = "sky";

    function yw(QQ) {
      let {
        showing: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, zQ.C)(), {
        isTouchScreen: qQ,
        gameState: TQ,
        clientEscMenuOptions: FQ
      } = (0, dQ.n)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), gQ = (0, jw.e)(), [rQ, IQ] = (0, wQ.useState)(Bw), jQ = QQ => {
        Bw = QQ, IQ(QQ)
      }, [BQ, yQ] = (0, wQ.useState)(!1);
      return (0, wQ.useEffect)((() => {
        WQ || yQ(!1)
      }), [WQ]), (0, JQ.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, JQ.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, JQ.jsx)(Fw, {
            className: "CrosshairPreviewStage",
            settings: gQ,
            touch: qQ,
            backdrop: rQ,
            label: XQ("crosshairSettings:preview"),
            children: (0, JQ.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, JQ.jsx)(qw, {
                backdrop: rQ,
                onChange: jQ
              }), (0, JQ.jsxs)(PQ.T, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  yQ(!0)
                },
                children: [(0, JQ.jsx)(sQ.d, {
                  name: "expand"
                }), " ", XQ("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, JQ.jsx)("div", {
          className: "SettingBox",
          children: (0, JQ.jsx)(Tw, {
            settings: gQ,
            touch: qQ,
            backdrop: rQ,
            onChange: jw.c
          })
        }), (0, JQ.jsx)(Iw, {
          settings: gQ,
          onChange: jw.c
        }), qQ && (0, JQ.jsx)(AX.d, {
          note: (0, cX.d)(qQ, FQ.touchActionButtons) ? XQ("crosshairSettings:touchNote") : void 0
        }), (0, JQ.jsx)(tX, {
          settings: gQ,
          onChange: jw.c
        }), BQ && (0, JQ.jsx)(gw, {
          settings: gQ,
          touch: qQ,
          backdrop: rQ,
          onBackdrop: jQ,
          inGame: "inGame" === TQ,
          onChange: jw.c,
          onClose: () => {
            yQ(!1)
          }
        })]
      })
    }
    var Vw = XQ(9235),
      Dw = XQ(1462),
      pw = XQ(5346),
      Gw = XQ(34494),
      Uw = XQ(4572),
      bw = XQ(2058),
      vw = XQ(739);
    const dw = (0, wQ.memo)((function() {
      const {
        clientEscMenuOptions: QQ
      } = (0, dQ.n)(["clientEscMenuOptions"]), {
        recording: WQ,
        clipping: XQ,
        hasClipBuffer: qQ
      } = (0, CW.e)("replayRecorder"), zQ = (0, CW.d)("connectedGame", (QQ => QQ.replay)), sQ = (0, Uw.l)(), FQ = !1 === (0, BQ.g)("canRecordReplays");
      (0, wQ.useEffect)((() => {
        DQ.gameBridge.send("setRecorderPrefs", {
          clipping: QQ.enableClipping,
          clipSeconds: QQ.clipDurationSeconds
        })
      }), [QQ.enableClipping, QQ.clipDurationSeconds]);
      const gQ = sQ || zQ,
        rQ = !gQ && !FQ,
        IQ = WQ || rQ,
        jQ = rQ,
        yQ = jQ && XQ && !WQ;

      function VQ() {
        IQ && DQ.gameBridge.send("toggleRecording", null)
      }
      return (0, JQ.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, JQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: WQ ? (0, JQ.jsxs)(JQ.Fragment, {
              children: [(0, JQ.jsxs)(PQ.P, {
                className: "ReplayViewerCategoryButton",
                onClick: VQ,
                disabled: !IQ,
                children: [(0, JQ.jsx)("span", {
                  children: "Stop Recording"
                }), (0, JQ.jsx)(bw.b, {
                  noaAction: "recordGame"
                })]
              }), (0, JQ.jsx)(Gw.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, JQ.jsxs)(PQ.h, {
              className: "ReplayViewerCategoryButton",
              onClick: VQ,
              disabled: !IQ,
              children: [(0, JQ.jsx)("span", {
                children: "Start Recording"
              }), (0, JQ.jsx)(bw.b, {
                noaAction: "recordGame"
              })]
            })
          }), FQ && (0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), gQ && !WQ && (0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, JQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, JQ.jsx)(vQ.e, {
            label: "Enable clipping",
            checked: QQ.enableClipping,
            disabled: !jQ,
            onClick: function(QQ) {
              jQ && dQ.b.setClientEscMenuOptions({
                enableClipping: QQ
              })
            },
            className: TQ()({
              SettingBoxDisabled: !jQ
            })
          }), (0, JQ.jsx)(vQ.h, {
            name: "Clip duration (seconds)",
            min: vw.n,
            max: vw.j,
            step: vw.e,
            initValue: QQ.clipDurationSeconds,
            onChange: function(QQ) {
              dQ.b.setClientEscMenuOptions({
                clipDurationSeconds: QQ
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !jQ || !QQ.enableClipping
          })]
        }), (0, JQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, JQ.jsxs)(PQ.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              yQ && DQ.gameBridge.send("saveClip", null)
            },
            disabled: !yQ,
            children: [(0, JQ.jsx)("span", {
              children: "Record clip"
            }), (0, JQ.jsx)(bw.b, {
              noaAction: "recordClip"
            })]
          }), QQ.enableClipping && !qQ && jQ && !WQ && (0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), WQ && (0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, JQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, JQ.jsxs)(PQ.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Uw.j)(!0), dQ.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: sQ,
            children: [(0, JQ.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, JQ.jsx)(bw.b, {
              noaAction: "replayViewerOpen"
            })]
          }), sQ && (0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, JQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, JQ.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, JQ.jsx)("iframe", {
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
    var Hw = XQ(1972);
    const aw = {
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
        icon: () => (0, JQ.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, JQ.jsx)("path", {
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
      xI: {
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

    function lw() {
      return Promise.all([XQ.e(80), XQ.e(138), XQ.e(137), XQ.e(133)]).then((() => XQ(41284))).then((QQ => ({
        default: QQ.ShaderPackCategory
      })), (QQ => (console.error("Failed to load the shader pack settings", QQ), {
        default: hw
      })))
    }

    function hw() {
      const {
        t: QQ
      } = (0, zQ.C)();
      return (0, JQ.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: QQ("shaderPack:tabLoadFailed")
      })
    }
    var iw = XQ(1454);
    const Aw = (0, wQ.lazy)((() => XQ.e(282).then((() => XQ(41271))).then((QQ => ({
        default: QQ.BloxdInformation
      }))))),
      Rw = (0, wQ.lazy)(lw);

    function Ew(QQ) {
      return QQ ? "general" : "account"
    }
    const Cw = new Map,
      uw = (0, wQ.memo)((function(QQ) {
        let {
          show: WQ,
          setBeforeResumeCallback: XQ
        } = QQ;
        (0, yQ.d)();
        const {
          gameState: qQ,
          openSettingsCategory: TQ
        } = (0, dQ.n)(["gameState", "openSettingsCategory"]), {
          userContext: FQ
        } = (0, jQ.c)(), {
          t: gQ
        } = (0, zQ.C)(), UQ = (0, IQ.d)(), bQ = (0, BQ.g)("minChunkAddDist"), vQ = "inGame" === qQ, [HQ, hQ] = (0, wQ.useState)(Ew(vQ)), [iQ, cQ] = (0, wQ.useState)(null), [AQ, RQ] = (0, wQ.useState)([]), EQ = (0, wQ.useRef)(function() {
          const QQ = new Date,
            WQ = 6 * (QQ.getMonth() + QQ.getDate()) % VW.z.length;
          return [...VW.z, ...VW.z].slice(WQ, WQ + 6)
        }()), CQ = (0, wQ.useRef)(null), uQ = (0, eW.j)(Dw.g, (0, Dw.b)()), LQ = Object.keys(aw).filter((QQ => {
          switch (QQ) {
            case "replayViewer":
              return vQ;
            case "developerTools":
              return FQ.playerHasRank("developer") || !1;
            case "texturePack":
              return VQ.featureFlags.settings.canChangeTexturePack;
            case "xI":
              return VQ.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return VQ.featureFlags.useSocialFeatures || null !== FQ.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== lQ.siteUsed;
            case "controller":
              return VQ.featureFlags.useControllerSupport && (uQ || "controller" === HQ);
            default:
              return !0
          }
        }));
        (0, eW.f)("toggleFullCoordinateOverlay", (() => {
          const QQ = GX("showCoordinates") && GX("showChunkCoordinates") && GX("showFPS");
          UX("showCoordinates", !QQ), UX("showChunkCoordinates", !QQ), UX("showFPS", !QQ), UQ()
        })), (0, eW.f)("updatedChunkLoadDist", (() => {
          UQ()
        })), (0, wQ.useEffect)((() => {
          if (cQ(null), null === dQ.b.get("openSettingsCategory")) {
            const QQ = (0, iw.l)() ? Cw.get(vQ) : void 0;
            hQ(QQ && LQ.includes(QQ) ? QQ : Ew(vQ))
          }
        }), [WQ]), (0, wQ.useEffect)((() => {
          null !== TQ && (hQ(TQ), Cw.set(vQ, TQ), dQ.b.set({
            openSettingsCategory: null
          }))
        }), [TQ, vQ]), (0, wQ.useLayoutEffect)((() => {
          CQ.current && (CQ.current.scrollTop = 0)
        }), [HQ, WQ]), (0, wQ.useEffect)((() => {
          "updateLog" === HQ && (0, GQ.b)().then(RQ)
        }), [HQ]), (0, wQ.useEffect)((() => {
          if ((0, jX.G)(bQ)) return;
          const [QQ, WQ] = (0, hX.g)(), [XQ, wQ] = (0, FX.f)(bQ), qQ = (0, Hw.e)(bQ[0], QQ, XQ), TQ = (0, Hw.e)(bQ[1], WQ, wQ);
          DQ.gameBridge.send("setChunkAddDistance", {
            horizontal: qQ,
            vertical: TQ
          })
        }), [bQ]);
        const kQ = (0, wQ.useCallback)((async () => {
          iQ && (await iQ(), cQ(null))
        }), [iQ]);

        function fQ() {
          dQ.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, wQ.useEffect)((() => {
          XQ((() => kQ))
        }), [kQ, XQ]), (0, JQ.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: WQ ? {} : {
            display: "none"
          },
          children: [(0, JQ.jsx)("div", {
            className: "MenuSideBar",
            children: (0, JQ.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, JQ.jsx)(rQ, {
                items: LQ.map((QQ => {
                  const WQ = aw[QQ].icon;
                  return {
                    id: QQ,
                    faIcon: "string" === typeof WQ ? WQ : void 0,
                    iconElement: "string" === typeof WQ ? void 0 : (0, JQ.jsx)(WQ, {}),
                    title: gQ(aw[QQ].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: HQ,
                onClick: QQ => {
                  !async function(QQ) {
                    await kQ(), hQ(QQ), Cw.set(vQ, QQ)
                  }(QQ)
                }
              })
            })
          }), (0, JQ.jsxs)("div", {
            ref: CQ,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === HQ && (0, JQ.jsx)(hW, {
              showing: WQ,
              inGame: vQ
            }), "general" === HQ && (0, JQ.jsx)(SW, {
              inGame: vQ
            }), "audio" === HQ && (0, JQ.jsx)(tW, {}), "notifications" === HQ && (0, JQ.jsx)(sX, {}), "graphics" === HQ && (0, JQ.jsx)(lX, {
              minChunkAddDist: null !== bQ && void 0 !== bQ ? bQ : [2, 2],
              getValue: GX,
              onChange: UX,
              setApplySettingsCallback: cQ
            }), "controls" === HQ && (0, JQ.jsx)(iX.f, {}), "crosshair" === HQ && (0, JQ.jsx)(yw, {
              showing: WQ
            }), "controller" === HQ && VQ.featureFlags.useControllerSupport && (0, JQ.jsx)(Vw.e, {}), VQ.featureFlags.settings.canChangeTexturePack && "texturePack" === HQ && (0, JQ.jsx)(pw.c, {
              setApplySettingsCallback: cQ
            }), VQ.featureFlags.settings.canUseShaderPacks && "xI" === HQ && (0, JQ.jsx)(wQ.Suspense, {
              fallback: null,
              children: (0, JQ.jsx)(Rw, {
                setApplySettingsCallback: cQ
              })
            }), "updateLog" === HQ && (0, JQ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, JQ.jsx)("div", {
                className: "UpdateLogsContainer",
                children: AQ.map(((QQ, WQ) => (0, JQ.jsx)(pQ.b, {
                  updateLog: QQ,
                  index: WQ,
                  close: fQ
                }, WQ)))
              })
            }), "information" === HQ && (0, JQ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, JQ.jsx)(wQ.Suspense, {
                fallback: null,
                children: (0, JQ.jsx)(Aw, {})
              })
            }), "alternativeDomains" === HQ && (0, JQ.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, JQ.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: gQ("settingsMenu:unblockedDomainsDescription")
              }), (0, JQ.jsx)("div", {
                className: "AlternativeDomainsList",
                children: EQ.current.map((QQ => (0, JQ.jsxs)(PQ.h, {
                  onClick: () => {
                    window.open(`https://${QQ}`)
                  },
                  children: [(0, JQ.jsx)(sQ.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", QQ]
                }, QQ)))
              })]
            }), "replayViewer" === HQ && (0, JQ.jsx)(dw, {}), "developerTools" === HQ && (0, JQ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, JQ.jsx)(aQ, {
                setApplySettingsCallback: cQ
              })
            }), null !== iQ && (0, JQ.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, JQ.jsx)(PQ.h, {
                className: "SettingsMenuRightFooterButton",
                onClick: kQ,
                children: gQ("general:apply")
              })
            })]
          })]
        })
      }));
    var Lw = XQ(2780);
    const kw = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      fw = (0, wQ.lazy)((() => Promise.resolve().then((() => XQ(4973))).then((QQ => {
        QQ.needGameClientAfterPaint();
        const WQ = QQ.matchmakingLibrariesPromise.then((QQ => (0, Lw.b)(QQ.loadCharacterCustomisationUI(), (QQ => QQ.CharacterCustomisationUI))));
        return Promise.all([QQ.ensureGameSetup(), WQ]).then((QQ => {
          let [, WQ] = QQ;
          return WQ
        }))
      })))),
      Sw = "openCustomisationTab";

    function tw(QQ) {
      var WQ, XQ, qQ;
      let {
        show: TQ
      } = QQ;
      const {
        userContext: zQ
      } = (0, jQ.c)(), sQ = (0, SQ.usePurchasesAllowed)(), FQ = (0, wQ.useRef)(null);
      var PQ, gQ;
      zQ !== hQ.NULL_USER_CONTEXT && (null === (WQ = FQ.current) || void 0 === WQ ? void 0 : WQ.whamm) !== zQ.whamm && (FQ.current = {
        whamm: zQ.whamm,
        mountKey: (null !== (PQ = null === (gQ = FQ.current) || void 0 === gQ ? void 0 : gQ.mountKey) && void 0 !== PQ ? PQ : -1) + 1
      });
      const [IQ, BQ] = (0, wQ.useState)("characters");
      if ((0, eW.f)(Sw, BQ), !TQ) return null;
      const yQ = kw.filter((QQ => "cape" !== QQ && "nameColour" !== QQ || zQ.getPlayerRanks().includes("super") || sQ)).map((QQ => ({
        id: QQ,
        faIcon: VW.E[QQ],
        title: VW.I[QQ],
        redDot: !1
      })));
      return (0, JQ.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, JQ.jsx)("div", {
          className: "MenuSideBar",
          children: (0, JQ.jsx)(rQ, {
            items: yQ,
            selectedItemId: IQ,
            onClick: QQ => {
              BQ(QQ)
            }
          })
        }), (0, JQ.jsx)("div", {
          className: "MenuBody",
          children: (0, JQ.jsx)(wQ.Suspense, {
            fallback: (0, JQ.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, JQ.jsx)(bQ.e, {})
            }),
            children: (0, JQ.jsx)(fw, {
              selectedTab: IQ
            }, null !== (XQ = null === (qQ = FQ.current) || void 0 === qQ ? void 0 : qQ.mountKey) && void 0 !== XQ ? XQ : 0)
          })
        })]
      })
    }
    var ow = XQ(1525),
      ew = XQ(1527),
      nw = XQ(34500),
      xw = XQ(4851),
      Yw = XQ(3685),
      Nw = XQ(3727),
      Zw = XQ(34536),
      Ow = XQ(9153),
      Kw = XQ(34507),
      mw = XQ(34523),
      Mw = XQ(1988),
      Qq = XQ(1975),
      Wq = XQ(5256),
      Xq = XQ(1296),
      wq = XQ(1257),
      qq = XQ(1728),
      Tq = XQ(9211),
      zq = XQ(2546),
      sq = XQ(2550);

    function Fq(QQ) {
      return QQ ? Object.keys(QQ).sort(((WQ, XQ) => {
        var wQ, qQ, TQ, zQ;
        const sQ = (null !== (wQ = null === (qQ = QQ[XQ]) || void 0 === qQ ? void 0 : qQ.sortPriority) && void 0 !== wQ ? wQ : 0) - (null !== (TQ = null === (zQ = QQ[WQ]) || void 0 === zQ ? void 0 : zQ.sortPriority) && void 0 !== TQ ? TQ : 0);
        return 0 !== sQ ? sQ : WQ.localeCompare(XQ)
      })) : []
    }
    const Pq = [{
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

    function gq(QQ) {
      for (const {
          threshold: WQ,
          suffix: XQ
        }
        of Pq)
        if (QQ >= WQ) {
          const wQ = QQ / WQ;
          return wQ >= 100 ? `${Math.floor(wQ)}${XQ}` : wQ >= 10 ? `${wQ.toFixed(1).replace(/\.0$/,"")}${XQ}` : `${wQ.toFixed(2).replace(/\.?0+$/,"")}${XQ}`
        } return String(QQ)
    }
    var Jq = XQ(5376);
    const rq = {
        normal: "0.8em",
        big: "1em"
      },
      Iq = (0, wQ.memo)((function(QQ) {
        let {
          item: WQ,
          amount: XQ = 0,
          size: wQ = "normal",
          tier: qQ = null
        } = QQ;
        return (0, JQ.jsx)("div", {
          className: TQ()("SmpSlot", `SmpSlot-${wQ}`),
          children: WQ && (0, JQ.jsx)(Mw.d, {
            itemName: WQ,
            amount: XQ > 1 ? XQ : 0,
            amountFontSize: rq[wQ],
            enchantmentTier: qQ
          })
        })
      }));

    function jq(QQ) {
      let {
        amount: WQ,
        exact: XQ = !1,
        className: wQ
      } = QQ;
      return (0, JQ.jsxs)("span", {
        className: TQ()("SmpGold", wQ),
        children: [(0, JQ.jsx)("span", {
          className: "SmpCoin",
          children: (0, JQ.jsx)(Mw.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), XQ ? WQ.toLocaleString("en-US") : gq(WQ)]
      })
    }

    function Bq(QQ) {
      let {
        count: WQ = 5,
        grid: XQ = !1
      } = QQ;
      return (0, JQ.jsx)("div", {
        className: XQ ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: WQ
        }, ((QQ, WQ) => (0, JQ.jsxs)("div", {
          className: TQ()(XQ ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, JQ.jsx)("div", {
            className: TQ()("SmpSlot", XQ ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, JQ.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, JQ.jsx)("b", {}), (0, JQ.jsx)("small", {})]
          }), (0, JQ.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, WQ)))
      })
    }

    function yq(QQ) {
      let {
        title: WQ,
        children: XQ
      } = QQ;
      return (0, JQ.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, JQ.jsx)("b", {
          children: WQ
        }), XQ && (0, JQ.jsx)("small", {
          children: XQ
        })]
      })
    }

    function Vq(QQ) {
      let {
        entry: WQ
      } = QQ;
      return (0, JQ.jsx)(yq, {
        title: (0, JQ.jsx)(Qq.e, {
          text: WQ.item.customTitle
        }),
        children: (0, JQ.jsx)(Qq.e, {
          text: WQ.item.description
        })
      })
    }

    function Dq(QQ) {
      return (0, JQ.jsx)(Jq.d, {
        ...QQ,
        className: TQ()("SmpChoice", QQ.className),
        reselectable: !0
      })
    }

    function pq() {
      return (0, JQ.jsx)("span", {
        className: "SmpLoader",
        children: (0, JQ.jsx)(bQ.e, {})
      })
    }

    function Gq(QQ) {
      let {
        value: WQ,
        onChange: XQ,
        min: qQ = 1,
        max: TQ,
        step: zQ = 1,
        label: sQ
      } = QQ;
      const FQ = (0, wQ.useRef)(null),
        PQ = (0, wQ.useRef)(WQ);
      PQ.current = WQ;
      const [gQ, rQ] = (0, wQ.useState)(null), IQ = QQ => Math.max(qQ, Math.min(TQ, Math.floor(QQ))), jQ = QQ => {
        const WQ = PQ.current,
          wQ = "function" === typeof zQ ? zQ(WQ, QQ) : zQ,
          qQ = IQ(WQ + wQ * QQ);
        PQ.current = qQ, XQ(qQ)
      };
      (0, wQ.useEffect)((() => {
        if (null === gQ) return;
        let QQ;
        const WQ = () => {
            rQ(null)
          },
          XQ = setTimeout((() => {
            QQ = setInterval((() => {
              jQ(gQ);
              const QQ = PQ.current;
              (gQ > 0 ? QQ >= TQ : QQ <= qQ) && WQ()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", WQ), window.addEventListener("pointercancel", WQ), window.addEventListener("blur", WQ), () => {
          clearTimeout(XQ), clearInterval(QQ), window.removeEventListener("pointerup", WQ), window.removeEventListener("pointercancel", WQ), window.removeEventListener("blur", WQ)
        }
      }), [gQ]), (0, wQ.useEffect)((() => {
        const QQ = FQ.current;
        QQ && document.activeElement !== QQ && QQ.value !== String(WQ) && (QQ.value = String(WQ))
      }), [WQ]), (0, wQ.useEffect)((() => {
        const QQ = FQ.current;
        if (!QQ) return;
        const WQ = () => {
          QQ.value = String(PQ.current)
        };
        return QQ.addEventListener("blur", WQ), () => {
          QQ.removeEventListener("blur", WQ)
        }
      }), []);
      const BQ = QQ => (0, JQ.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${QQ>0?"More":"Less"} ${sQ}`,
        disabled: QQ > 0 ? WQ >= TQ : WQ <= qQ,
        onPointerDown: WQ => {
          0 === WQ.button && (jQ(QQ), rQ(QQ))
        },
        onKeyDown: WQ => {
          "Enter" !== WQ.key && " " !== WQ.key || jQ(QQ)
        },
        onContextMenu: QQ => {
          QQ.preventDefault()
        },
        children: QQ > 0 ? "+" : "\u2212"
      });
      return (0, JQ.jsxs)("div", {
        className: "SmpStepper",
        children: [BQ(-1), (0, JQ.jsx)(UQ.e, {
          className: "SmpStepperInput",
          domRef: FQ,
          defaultValue: String(WQ),
          ariaLabel: sQ,
          type: "text",
          blurOnEnter: !0,
          onValueChange: QQ => {
            const WQ = QQ.replace(/[^\d]/g, "");
            FQ.current && WQ !== QQ && (FQ.current.value = WQ), "" !== WQ && XQ(IQ(Number(WQ)))
          }
        }), BQ(1)]
      })
    }

    function Uq(QQ) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, QQ))) - 1))
    }
    var bq = XQ(34529),
      vq = XQ(1273);
    const dq = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    vq.z, kQ.Fc.length;
    new Map;
    var Hq = XQ(3555);

    function aq(QQ, WQ) {
      var XQ;
      return WQ && (null === (XQ = QQ[WQ]) || void 0 === XQ ? void 0 : XQ.smp) || null
    }

    function lq(QQ, WQ) {
      const XQ = [];
      for (const qQ of Fq(QQ)) {
        var wQ;
        const TQ = QQ[qQ];
        (null === (wQ = TQ.smp) || void 0 === wQ ? void 0 : wQ.kind) === WQ && XQ.push({
          key: qQ,
          item: TQ,
          meta: TQ.smp
        })
      }
      return XQ
    }

    function hq(QQ, WQ) {
      var XQ;
      return null !== (XQ = lq(QQ, WQ)[0]) && void 0 !== XQ ? XQ : null
    }
    const iq = "50% 0% 50% 0%",
      cq = [{
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

    function Aq(QQ) {
      const WQ = QQ - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: XQ,
          suffix: wQ
        }
        of cq)
        if (WQ >= XQ) return `${Math.floor(WQ/XQ)}${wQ}`;
      return "<1s"
    }

    function Rq(QQ) {
      const WQ = QQ.map(Ow.e),
        XQ = [];
      return WQ.forEach(((QQ, wQ) => {
        const qQ = function(QQ) {
            const WQ = QQ.match(/\d+/);
            return WQ ? Number(WQ[0]) : 0
          }(QQ),
          TQ = wQ === WQ.length - 1;
        (TQ || 1 === qQ || 10 === qQ || 100 === qQ) && XQ.push({
          label: QQ,
          quantity: qQ,
          isAll: TQ
        })
      })), XQ
    }
    let Eq = null;

    function Cq(QQ, WQ) {
      const XQ = WQ.trim().toLowerCase();
      if (!XQ) return [];
      const wQ = QQ => {
          if (QQ === XQ) return 0;
          if (QQ.startsWith(XQ)) return 1;
          const WQ = QQ.indexOf(XQ);
          return -1 === WQ ? -1 : 2 + WQ
        },
        qQ = [];
      for (const sQ of QQ) {
        const QQ = [wQ(sQ.lowerLabel), wQ(sQ.lowerName)].filter((QQ => -1 !== QQ));
        QQ.length && qQ.push({
          item: sQ,
          rank: Math.min(...QQ)
        })
      }
      if (qQ.length > 0) return qQ.sort(((QQ, WQ) => QQ.rank - WQ.rank)).map((QQ => QQ.item));
      const TQ = [...XQ],
        zQ = QQ => {
          let WQ = 0;
          for (const XQ of TQ) {
            if (WQ = QQ.indexOf(XQ, WQ), -1 === WQ) return !1;
            WQ++
          }
          return !0
        };
      return QQ.filter((QQ => zQ(QQ.lowerLabel) || zQ(QQ.lowerName)))
    }

    function uq(QQ, WQ) {
      var XQ;
      return null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ[WQ]) && void 0 !== XQ ? XQ : WQ
    }

    function Lq(QQ, WQ) {
      const XQ = QQ.userInput;
      return void 0 !== WQ && "dropdown" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && XQ.dropdownOptions.map(Ow.e).includes(WQ) ? WQ : function(QQ) {
        const WQ = QQ.userInput;
        if ("dropdown" !== (null === WQ || void 0 === WQ ? void 0 : WQ.type) || 0 === WQ.dropdownOptions.length) return null;
        const XQ = WQ.dropdownOptions.map(Ow.e);
        return WQ.initialValue && XQ.includes(WQ.initialValue) ? WQ.initialValue : XQ[XQ.length - 1]
      }(QQ)
    }

    function kq(QQ) {
      return void 0 === QQ ? "" : JSON.stringify(QQ)
    }
    const fq = (0, wQ.createContext)(null);

    function Sq() {
      return (0, wQ.useContext)(fq)
    }
    var tq = XQ(2861);
    const oq = (0, wQ.memo)((function(QQ) {
        let {
          name: WQ,
          label: XQ,
          onPick: wQ
        } = QQ;
        return (0, JQ.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: XQ,
          onClick: () => {
            wQ(WQ)
          },
          children: [(0, JQ.jsx)(Iq, {
            item: WQ,
            size: "big"
          }), (0, JQ.jsx)("span", {
            children: XQ
          })]
        })
      })),
      eq = (0, wQ.memo)((function(QQ) {
        let {
          items: WQ,
          query: XQ,
          onPick: qQ
        } = QQ;
        const {
          t: TQ
        } = (0, zQ.C)(), [sQ, FQ] = (0, wQ.useState)(new Set), PQ = (0, wQ.useMemo)((() => function(QQ) {
          const WQ = new Map;
          for (const XQ of QQ) {
            let QQ = WQ.get(XQ.category);
            QQ || (QQ = [], WQ.set(XQ.category, QQ)), QQ.push(XQ)
          }
          return [...dq, "other"].filter((QQ => WQ.has(QQ))).map((QQ => ({
            category: QQ,
            items: WQ.get(QQ)
          })))
        }(WQ)), [WQ]), gQ = (0, wQ.useMemo)((() => Cq(WQ, XQ).slice(0, 60)), [WQ, XQ]);
        return XQ.trim() ? 0 === gQ.length ? (0, JQ.jsx)(yq, {
          title: TQ("smpShop:noItemsFound", {
            query: XQ.trim()
          }),
          children: TQ("smpShop:tryShorterName")
        }) : (0, JQ.jsx)(tq.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: iq,
          observerUpdateDeps: [XQ],
          children: gQ.map((QQ => (0, JQ.jsx)(oq, {
            name: QQ.name,
            label: QQ.label,
            onPick: qQ
          }, QQ.name)))
        }) : (0, JQ.jsx)(JQ.Fragment, {
          children: PQ.map((QQ => {
            let {
              category: WQ,
              items: XQ
            } = QQ;
            const wQ = sQ.has(WQ) || XQ.length <= 48,
              zQ = wQ ? XQ : XQ.slice(0, 48);
            return (0, JQ.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, JQ.jsxs)("h4", {
                children: [TQ("other" === WQ ? "smpShop:otherItems" : `creativeInventory:${WQ}`), !wQ && (0, JQ.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    FQ(new Set([...sQ, WQ]))
                  },
                  children: TQ("smpShop:showAll", {
                    count: XQ.length
                  })
                })]
              }), (0, JQ.jsx)(tq.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: iq,
                observerUpdateDeps: [wQ],
                children: zQ.map((QQ => (0, JQ.jsx)(oq, {
                  name: QQ.name,
                  label: QQ.label,
                  onPick: qQ
                }, QQ.name)))
              })]
            }, WQ)
          }))
        })
      }));

    function nq(QQ, WQ) {
      const {
        searched: XQ,
        shown: qQ,
        searchFor: TQ,
        loading: zQ
      } = function(QQ, WQ) {
        var XQ;
        const qQ = Sq(),
          [TQ, zQ] = (0, wQ.useState)(void 0),
          sQ = (0, wQ.useRef)(void 0),
          FQ = (0, wQ.useRef)(0),
          PQ = (0, wQ.useRef)(void 0),
          gQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.meta.item) && void 0 !== XQ ? XQ : null,
          JQ = !!QQ && qQ.isPending(QQ.key);
        (0, wQ.useEffect)((() => {
          if (!QQ || JQ || !WQ || void 0 === TQ || TQ === gQ) return;
          const XQ = TQ === sQ.current && qQ.gaveUpAt(QQ.key) > FQ.current && PQ.current !== TQ;
          (TQ !== sQ.current || XQ) && qQ.act(QQ.key, null !== TQ && void 0 !== TQ ? TQ : "*", XQ) && (XQ && (PQ.current = TQ), sQ.current = TQ, FQ.current = Date.now())
        }), [QQ, JQ, WQ, TQ, gQ, qQ]);
        const rQ = (0, wQ.useCallback)((QQ => {
            sQ.current = void 0, PQ.current = void 0, zQ(QQ)
          }), []),
          IQ = void 0 !== TQ && TQ !== gQ && (JQ || sQ.current !== TQ);
        return {
          searched: gQ,
          shown: IQ ? TQ : gQ,
          searchFor: rQ,
          loading: IQ || JQ || null !== gQ && !WQ
        }
      }(QQ, WQ), sQ = (0, wQ.useMemo)((() => function() {
        var QQ;
        let WQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const qQ = `${(0,Hq.f)()}\x1f${WQ.join("\x1e")}\x1f${XQ.join("\x1e")}\x1f${JSON.stringify(wQ)}`;
        if ((null === (QQ = Eq) || void 0 === QQ ? void 0 : QQ.key) === qQ) return Eq.items;
        const TQ = new Set(XQ),
          zQ = new Set,
          sQ = [],
          FQ = (QQ, WQ) => {
            var XQ;
            if (!QQ || zQ.has(QQ) || TQ.has(QQ)) return;
            zQ.add(QQ);
            const qQ = null !== (XQ = wQ[QQ]) && void 0 !== XQ ? XQ : QQ;
            sQ.push({
              name: QQ,
              label: qQ,
              lowerLabel: qQ.toLowerCase(),
              lowerName: QQ.toLowerCase(),
              category: WQ
            })
          };
        for (const gQ of (0, bq.creativeItemIds)()) {
          var PQ;
          (0, bq.itemIsDisabled)(gQ, !0, !0, !1) || (0, bq.showOnlyInCreativeSearch)(gQ) || FQ((0, Hq.e)(gQ), null !== (PQ = (0, bq.creativeCategoryOf)(gQ)) && void 0 !== PQ ? PQ : "other")
        }
        for (const gQ of WQ) FQ(gQ, "other");
        return Eq = {
          key: qQ,
          items: sQ
        }, sQ
      }(null === QQ || void 0 === QQ ? void 0 : QQ.meta.extra, null === QQ || void 0 === QQ ? void 0 : QQ.meta.excluded, null === QQ || void 0 === QQ ? void 0 : QQ.meta.names)), [null === QQ || void 0 === QQ ? void 0 : QQ.meta.extra, null === QQ || void 0 === QQ ? void 0 : QQ.meta.excluded, null === QQ || void 0 === QQ ? void 0 : QQ.meta.names]), [FQ, PQ] = (0, wQ.useState)(""), [gQ, JQ] = (0, wQ.useState)(0), [rQ, IQ] = (0, wQ.useState)("recent"), jQ = (0, wQ.useCallback)((QQ => {
        PQ(""), JQ((QQ => QQ + 1)), TQ(QQ)
      }), [TQ]), BQ = "browse" === rQ || "" !== FQ.trim();
      return {
        searched: XQ,
        shown: qQ,
        searchFor: TQ,
        loading: zQ,
        catalogue: sQ,
        names: null === QQ || void 0 === QQ ? void 0 : QQ.meta.names,
        query: FQ,
        setQuery: PQ,
        searchBoxKey: gQ,
        pickItem: jQ,
        setView: IQ,
        browsing: BQ
      }
    }

    function xq(QQ) {
      let {
        browser: WQ,
        children: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, zQ.C)(), qQ = Sq();
      return (0, JQ.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, JQ.jsx)("div", {
          className: "SmpSearch",
          children: (0, JQ.jsx)(UQ.e, {
            className: "SmpSearchInput",
            placeholderText: wQ("smpShop:searchPlaceholder"),
            defaultValue: WQ.query,
            onValueChange: QQ => {
              WQ.setQuery(QQ), WQ.searched && QQ.trim() && WQ.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const QQ = Cq(WQ.catalogue, WQ.query)[0];
              QQ ? WQ.pickItem(QQ.name) : WQ.query.trim() && qQ.notify(wQ("smpShop:noItemsFound", {
                query: WQ.query.trim()
              }))
            }
          }, WQ.searchBoxKey)
        }), XQ]
      })
    }

    function Yq(QQ) {
      let {
        browser: WQ,
        recentLabel: XQ,
        children: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)();
      return (0, JQ.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, JQ.jsx)(Dq, {
          options: [{
            value: "recent",
            label: XQ
          }, {
            value: "browse",
            label: qQ("smpShop:browseItems")
          }],
          value: WQ.browsing ? "browse" : "recent",
          onChange: WQ.setView,
          ariaLabel: qQ("smpShop:show")
        }), !WQ.browsing && wQ]
      })
    }

    function Nq(QQ) {
      let {
        item: WQ,
        names: XQ,
        summary: wQ,
        onBack: qQ,
        children: TQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)();
      return (0, JQ.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, JQ.jsx)(PQ.e, {
          className: "SmpBackButton",
          onClick: qQ,
          children: sQ("general:back")
        }), (0, JQ.jsx)(Iq, {
          item: WQ,
          size: "big"
        }), (0, JQ.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, JQ.jsx)("b", {
            children: uq(XQ, WQ)
          }), wQ && (0, JQ.jsx)("small", {
            children: wQ
          })]
        }), TQ]
      })
    }

    function Zq(QQ) {
      let {
        browser: WQ,
        className: XQ,
        action: wQ,
        above: qQ,
        list: zQ,
        summary: sQ,
        recentLabel: FQ,
        listControls: PQ,
        onBack: gQ
      } = QQ;
      return (0, JQ.jsxs)("div", {
        className: TQ()("SmpScreen", XQ),
        children: [(0, JQ.jsx)(xq, {
          browser: WQ,
          children: wQ
        }), WQ.shown && (0, JQ.jsx)(Nq, {
          item: WQ.shown,
          names: WQ.names,
          summary: !WQ.loading && sQ,
          onBack: () => {
            null === gQ || void 0 === gQ || gQ(), WQ.searchFor(null)
          },
          children: PQ
        }), qQ, WQ.shown ? zQ : (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsx)(Yq, {
            browser: WQ,
            recentLabel: FQ,
            children: PQ
          }), WQ.browsing ? (0, JQ.jsx)(eq, {
            items: WQ.catalogue,
            query: WQ.query,
            onPick: WQ.pickItem
          }) : zQ]
        })]
      })
    }

    function Oq(QQ, WQ) {
      const XQ = QQ.map((QQ => {
        let {
          meta: WQ
        } = QQ;
        return WQ.pricePerItem
      }));
      return "min" === WQ ? Math.min(...XQ) : Math.max(...XQ)
    }
    var Kq = XQ(6960);
    const mq = (0, wQ.memo)((function(QQ) {
      var WQ;
      const {
        t: XQ
      } = (0, zQ.C)(), wQ = null === QQ.seller, qQ = QQ.quantity * QQ.pricePerItem;
      return (0, JQ.jsxs)("div", {
        className: QQ.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, JQ.jsx)(Iq, {
          item: QQ.item,
          amount: QQ.quantity,
          size: QQ.grid ? "big" : "normal",
          tier: QQ.tier
        }), (0, JQ.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, JQ.jsx)("b", {
            children: (0, JQ.jsx)(Qq.e, {
              text: null !== (WQ = QQ.title) && void 0 !== WQ ? WQ : `${QQ.quantity}x ${QQ.item}`
            })
          }), (0, JQ.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, JQ.jsx)("span", {
              children: wQ ? XQ("smpShop:you") : (0, JQ.jsx)(Qq.e, {
                text: [{
                  entityName: QQ.seller
                }]
              })
            }), (0, JQ.jsx)("span", {
              children: XQ("smpShop:timeLeft", {
                time: Aq(QQ.expiresAt)
              })
            })]
          })]
        }), (0, JQ.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, JQ.jsx)(jq, {
            amount: QQ.pricePerItem
          }), (0, JQ.jsx)("small", {
            children: XQ("smpShop:each")
          })]
        }), (0, JQ.jsx)(PQ.h, {
          className: "SmpBuyButton",
          disabled: wQ || !QQ.canAfford && !QQ.busy,
          loading: QQ.busy,
          onClick: () => {
            QQ.onBuy(QQ.itemKey)
          },
          children: wQ ? XQ("smpShop:yours") : (0, JQ.jsx)(jq, {
            amount: qQ
          })
        })]
      })
    }));

    function Mq(QQ) {
      let {
        view: WQ,
        onChange: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, zQ.C)();
      return (0, JQ.jsx)(Jq.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: wQ("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, JQ.jsx)(sQ.d, {
            name: "list"
          }),
          ariaLabel: wQ("smpShop:listView")
        }, {
          value: "grid",
          label: (0, JQ.jsx)(sQ.d, {
            name: "grid-2"
          }),
          ariaLabel: wQ("smpShop:gridView")
        }],
        value: WQ,
        onChange: XQ
      })
    }

    function QT(QQ) {
      let {
        entries: WQ,
        view: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, zQ.C)(), qQ = Sq(), TQ = "grid" === XQ;
      return (0, JQ.jsxs)(JQ.Fragment, {
        children: [!TQ && (0, JQ.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, JQ.jsx)("span", {}), (0, JQ.jsx)("span", {
            children: wQ("smpShop:columnItem")
          }), (0, JQ.jsx)("span", {
            children: wQ("smpShop:columnPriceEach")
          }), (0, JQ.jsx)("span", {
            children: wQ("smpShop:columnTotal")
          })]
        }), (0, JQ.jsx)(tq.c, {
          lazyLoadedClassName: TQ ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: iq,
          observerUpdateDeps: [WQ.length],
          children: WQ.map((QQ => {
            var WQ, XQ;
            let {
              key: wQ,
              item: zQ,
              meta: sQ
            } = QQ;
            const FQ = sQ.quantity * sQ.pricePerItem;
            return (0, JQ.jsx)(mq, {
              itemKey: wQ,
              item: sQ.item,
              title: zQ.customTitle,
              quantity: sQ.quantity,
              pricePerItem: sQ.pricePerItem,
              seller: sQ.seller,
              expiresAt: sQ.expiresAt,
              tier: null !== (WQ = null === (XQ = zQ.enchant) || void 0 === XQ ? void 0 : XQ.tier) && void 0 !== WQ ? WQ : null,
              busy: qQ.isPending(wQ) || null !== sQ.seller && !1 === zQ.canBuy,
              canAfford: qQ.canAfford(zQ, FQ),
              grid: TQ,
              onBuy: qQ.act
            }, wQ)
          }))
        }, XQ)]
      })
    }
    const WT = [1, 10, 100],
      XT = [1, 10, 100, 999];

    function wT(QQ) {
      var WQ, XQ, qQ, FQ, gQ, rQ, IQ, jQ, BQ, yQ;
      const {
        t: VQ
      } = (0, zQ.C)(), DQ = Sq(), {
        creator: pQ,
        mode: GQ
      } = QQ, [bQ, vQ] = (0, wQ.useState)(null !== (WQ = null === pQ || void 0 === pQ ? void 0 : pQ.meta.item) && void 0 !== WQ ? WQ : null), [dQ, HQ] = (0, wQ.useState)(1), [aQ, lQ] = (0, wQ.useState)(0), [hQ, iQ] = (0, wQ.useState)(""), [cQ, AQ] = (0, wQ.useState)(0), RQ = (0, wQ.useRef)(bQ), EQ = (0, wQ.useRef)(!1), [CQ, uQ] = (0, wQ.useState)(!1), LQ = null !== (XQ = null === pQ || void 0 === pQ ? void 0 : pQ.meta.item) && void 0 !== XQ ? XQ : null, kQ = null !== (qQ = null === pQ || void 0 === pQ ? void 0 : pQ.meta.owned) && void 0 !== qQ ? qQ : 0;
      (0, wQ.useEffect)((() => {
        QQ.searching || null === LQ || LQ === RQ.current || (RQ.current = LQ, EQ.current = !1, vQ(LQ), lQ(0), HQ("list" === GQ ? Math.max(1, kQ) : 1))
      }), [LQ, QQ.searching]);
      const fQ = !!pQ && !!bQ && pQ.meta.item === bQ,
        SQ = fQ ? pQ.meta.owned : null !== (FQ = null === (gQ = QQ.inventory) || void 0 === gQ || null === (rQ = gQ.find((QQ => QQ.item === bQ))) || void 0 === rQ ? void 0 : rQ.quantity) && void 0 !== FQ ? FQ : 0,
        tQ = "list" === GQ ? Math.max(1, SQ) : 45954,
        oQ = null !== (IQ = QQ.prices[0]) && void 0 !== IQ ? IQ : null,
        eQ = QQ.prices.length ? Math.round(QQ.prices.reduce(((QQ, WQ) => QQ + WQ), 0) / QQ.prices.length) : null,
        nQ = null === (jQ = QQ.inventory) || void 0 === jQ || null === (BQ = jQ.find((QQ => QQ.item === bQ))) || void 0 === BQ ? void 0 : BQ.sellPrice;
      (0, wQ.useEffect)((() => {
        var QQ;
        fQ && (HQ((QQ => "list" === GQ ? Math.min(Math.max(1, QQ), Math.max(1, SQ)) : QQ)), EQ.current || lQ(null !== (QQ = null !== oQ && void 0 !== oQ ? oQ : eQ) && void 0 !== QQ ? QQ : Math.max(1, null !== nQ && void 0 !== nQ ? nQ : 1)))
      }), [fQ, SQ, bQ, oQ, eQ]);
      const xQ = QQ => {
          EQ.current = !0, lQ(QQ)
        },
        YQ = WQ => {
          var XQ, wQ, qQ;
          RQ.current = WQ, EQ.current = !1, uQ(!1), iQ(""), AQ((QQ => QQ + 1)), vQ(WQ), lQ(0), HQ("list" === GQ && null !== (XQ = null === (wQ = QQ.inventory) || void 0 === wQ || null === (qQ = wQ.find((QQ => QQ.item === WQ))) || void 0 === qQ ? void 0 : qQ.quantity) && void 0 !== XQ ? XQ : 1), (null === pQ || void 0 === pQ ? void 0 : pQ.meta.item) !== WQ && QQ.onPickItem(WQ)
        },
        NQ = dQ * aQ,
        ZQ = "list" === GQ && null !== pQ && void 0 !== pQ && pQ.meta.fee ? function(QQ, WQ) {
          const XQ = Math.max(0, WQ - QQ.taxFreeAllowance);
          return Math.ceil(Math.round(XQ * QQ.rate * 1e6) / 1e6)
        }(pQ.meta.fee, NQ) : 0,
        OQ = !!pQ && DQ.isPending(pQ.key),
        KQ = fQ && !QQ.searching && dQ >= 1 && aQ >= 1 && ("order" === GQ || SQ >= dQ) && !OQ,
        mQ = !!bQ && !fQ && !QQ.searching && dQ >= 1 && aQ >= 1,
        MQ = () => {
          KQ ? DQ.act(pQ.key, `${dQ}|${aQ}`) : mQ && (QQ.onPickItem(bQ), uQ(!0))
        };
      (0, wQ.useEffect)((() => {
        CQ && fQ && !QQ.searching && (uQ(!1), MQ())
      }), [CQ, fQ, QQ.searching]);
      const QW = !!bQ && !fQ && (QQ.searching || CQ),
        WW = bQ ? uq(QQ.names, bQ) : "",
        XW = (0, wQ.useMemo)((() => Cq(QQ.catalogue, hQ).slice(0, 8)), [QQ.catalogue, hQ]),
        wW = ("list" === GQ ? WT.filter((QQ => QQ < SQ)) : XT).map((QQ => ({
          value: QQ,
          label: String(QQ)
        })));
      "list" === GQ && SQ > 0 && wW.push({
        value: SQ,
        label: VQ("smpShop:all", {
          count: SQ
        })
      });
      const qW = [];
      return null !== oQ && (oQ > 1 && qW.push({
        value: oQ - 1,
        label: VQ("smpShop:undercut", {
          price: gq(oQ - 1)
        })
      }), qW.push({
        value: oQ,
        label: VQ("smpShop:lowest", {
          price: gq(oQ)
        })
      })), null !== eQ && eQ !== oQ && qW.push({
        value: eQ,
        label: VQ("smpShop:average", {
          price: gq(eQ)
        })
      }), (0, JQ.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, JQ.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, JQ.jsx)("b", {
            children: VQ("list" === GQ ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, JQ.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": VQ("smpShop:close"),
            onClick: QQ.onClose,
            children: (0, JQ.jsx)(sQ.d, {
              name: "xmark"
            })
          })]
        }), "list" === GQ && (0, JQ.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (yQ = QQ.inventory) && void 0 !== yQ && yQ.length ? QQ.inventory.map((QQ => {
            let {
              item: WQ,
              quantity: XQ
            } = QQ;
            return (0, JQ.jsx)("button", {
              type: "button",
              title: WQ,
              className: TQ()("SmpPickerSlot", {
                SmpPickerSlotOn: WQ === bQ
              }),
              onClick: () => {
                YQ(WQ)
              },
              children: (0, JQ.jsx)(Iq, {
                item: WQ,
                amount: XQ
              })
            }, WQ)
          })) : (0, JQ.jsx)("span", {
            className: "SmpMuted",
            children: VQ("smpShop:nothingToList")
          })
        }), ("list" === GQ || !bQ) && (0, JQ.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, JQ.jsx)(UQ.e, {
            className: "SmpSearchInput",
            placeholderText: VQ("list" === GQ ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: hQ,
            onValueChange: iQ,
            blurOnEnter: !0,
            onEnter: () => {
              XW[0] && YQ(XW[0].name)
            }
          }, cQ), XW.length > 0 && (0, JQ.jsx)("div", {
            className: "SmpPicker",
            children: XW.map((QQ => {
              let {
                name: WQ
              } = QQ;
              return (0, JQ.jsx)("button", {
                type: "button",
                title: WQ,
                className: TQ()("SmpPickerSlot", {
                  SmpPickerSlotOn: WQ === bQ
                }),
                onClick: () => {
                  YQ(WQ)
                },
                children: (0, JQ.jsx)(Iq, {
                  item: WQ
                })
              }, WQ)
            }))
          })]
        }), bQ && (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsxs)("div", {
            className: "SmpPickedName",
            children: [WW, QW && (0, JQ.jsx)(pq, {})]
          }), (0, JQ.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, JQ.jsxs)("div", {
              className: "SmpField",
              children: [(0, JQ.jsxs)("span", {
                children: [VQ("smpShop:quantity"), "list" === GQ && fQ && (0, JQ.jsx)("small", {
                  children: VQ("smpShop:youHave", {
                    count: SQ
                  })
                })]
              }), (0, JQ.jsx)(Gq, {
                value: dQ,
                onChange: HQ,
                max: tQ,
                label: VQ("smpShop:quantity")
              }), (0, JQ.jsx)(Dq, {
                options: wW,
                value: dQ,
                onChange: HQ,
                ariaLabel: VQ("smpShop:quantity")
              })]
            }), (0, JQ.jsxs)("div", {
              className: "SmpField",
              children: [(0, JQ.jsx)("span", {
                children: VQ("smpShop:pricePerItem")
              }), (0, JQ.jsx)(Gq, {
                value: Math.max(1, aQ),
                onChange: xQ,
                max: 9999999,
                step: Uq,
                label: VQ("smpShop:pricePerItem")
              }), (0, JQ.jsx)(Dq, {
                options: qW,
                value: aQ,
                onChange: xQ,
                ariaLabel: VQ("smpShop:pricePerItem")
              })]
            })]
          }), "list" === GQ && (0, JQ.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, JQ.jsxs)("span", {
              children: [VQ("smpShop:youGet"), " ", (0, JQ.jsx)(jq, {
                amount: Math.max(0, NQ - ZQ),
                exact: !0
              })]
            }), (0, JQ.jsx)("small", {
              children: ZQ > 0 ? VQ("smpShop:listingFee", {
                fee: ZQ.toLocaleString("en-US")
              }) : VQ("smpShop:listingRules")
            })]
          }), (0, JQ.jsx)(PQ.y, {
            className: "SmpSubmit",
            disabled: !KQ && !mQ && !OQ,
            loading: OQ || QW || fQ && QQ.searching,
            onClick: MQ,
            children: "list" === GQ ? VQ("smpShop:listButton", {
              count: dQ,
              item: WW
            }) : (0, JQ.jsxs)(JQ.Fragment, {
              children: [VQ("smpShop:orderButton", {
                count: dQ,
                item: WW
              }), " ", aQ >= 1 && (0, JQ.jsx)(jq, {
                amount: NQ
              })]
            })
          })]
        })]
      })
    }

    function qT() {
      var QQ;
      const {
        t: WQ
      } = (0, zQ.C)(), XQ = Sq(), qQ = null === (QQ = XQ.shopInfo[XQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, TQ = hq(qQ, "search"), sQ = hq(qQ, "creator"), FQ = lq(qQ, "enchantedCreator"), gQ = lq(qQ, "listing"), rQ = hq(qQ, "empty"), IQ = nq(TQ, gQ.length > 0 || null !== rQ), {
        searched: jQ,
        shown: BQ,
        loading: yQ
      } = IQ, [VQ, DQ] = (0, wQ.useState)(!1), [pQ, GQ] = function() {
        const [QQ, WQ] = (0, Kq.d)("smpMarketView", "list");
        return ["grid" === QQ ? "grid" : "list", WQ]
      }(), UQ = "grid" === pQ, bQ = (0, wQ.useMemo)((() => gQ.filter((QQ => {
        let {
          meta: WQ
        } = QQ;
        return null !== WQ.seller && WQ.item === jQ
      })).map((QQ => {
        let {
          meta: WQ
        } = QQ;
        return WQ.pricePerItem
      })).sort(((QQ, WQ) => QQ - WQ))), [gQ, jQ]), vQ = (0, wQ.useMemo)((() => {
        const QQ = new Set(IQ.catalogue.map((QQ => {
          let {
            name: WQ
          } = QQ;
          return WQ
        })));
        return function(QQ) {
          for (const WQ in QQ)
            if ("sell" === QQ[WQ].smp) return lq(QQ[WQ].items, "sell").filter((QQ => {
              let {
                item: WQ
              } = QQ;
              return !WQ.enchant
            })).map((QQ => {
              let {
                meta: WQ
              } = QQ;
              return {
                item: WQ.item,
                quantity: WQ.quantity,
                sellPrice: WQ.pricePerItem
              }
            }));
          return []
        }(XQ.shopInfo).filter((WQ => {
          let {
            item: XQ
          } = WQ;
          return QQ.has(XQ)
        }))
      }), [XQ.shopInfo, IQ.catalogue]);
      return (0, JQ.jsx)(Zq, {
        browser: IQ,
        className: "SmpMarketTab",
        recentLabel: WQ("smpShop:recentlyListed"),
        action: (0, JQ.jsx)(PQ.y, {
          className: "SmpSellButton",
          onClick: () => {
            DQ((QQ => !QQ))
          },
          children: WQ("smpShop:sell")
        }),
        above: VQ && (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsx)(wT, {
            mode: "list",
            creator: sQ,
            inventory: vQ,
            catalogue: IQ.catalogue,
            names: IQ.names,
            searching: yQ,
            prices: bQ,
            onPickItem: IQ.searchFor,
            onClose: () => {
              DQ(!1)
            }
          }), FQ.length > 0 && (0, JQ.jsx)(TT, {
            entries: FQ
          })]
        }),
        listControls: (0, JQ.jsx)(Mq, {
          view: pQ,
          onChange: GQ
        }),
        summary: BQ && (gQ.length > 0 ? WQ(1 === gQ.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: gQ.length,
          price: gq(Oq(gQ, "min"))
        }) : WQ("smpShop:noOneSelling", {
          item: uq(IQ.names, BQ)
        })),
        list: yQ ? (0, JQ.jsx)(Bq, {
          grid: UQ
        }) : gQ.length > 0 ? (0, JQ.jsx)(QT, {
          entries: gQ,
          view: pQ
        }) : rQ ? (0, JQ.jsx)(Vq, {
          entry: rQ
        }) : (0, JQ.jsx)(Bq, {
          count: 3,
          grid: UQ
        })
      })
    }

    function TT(QQ) {
      let {
        entries: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, zQ.C)(), qQ = Sq(), [TQ, sQ] = (0, wQ.useState)({});
      return (0, JQ.jsx)("div", {
        className: "SmpList",
        children: WQ.map((QQ => {
          var WQ, wQ, zQ;
          let {
            key: FQ,
            item: gQ,
            meta: rQ
          } = QQ;
          const IQ = null !== (WQ = TQ[FQ]) && void 0 !== WQ ? WQ : 1;
          return (0, JQ.jsxs)("div", {
            className: "SmpRow",
            children: [(0, JQ.jsx)(Iq, {
              item: rQ.item,
              amount: rQ.quantity,
              tier: null !== (wQ = null === (zQ = gQ.enchant) || void 0 === zQ ? void 0 : zQ.tier) && void 0 !== wQ ? wQ : null
            }), (0, JQ.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, JQ.jsx)("b", {
                children: (0, JQ.jsx)(Qq.e, {
                  text: gQ.customTitle
                })
              }), (0, JQ.jsx)("small", {
                children: XQ("smpShop:enchantedListing")
              })]
            }), (0, JQ.jsx)(Gq, {
              value: IQ,
              onChange: QQ => {
                sQ({
                  ...TQ,
                  [FQ]: QQ
                })
              },
              max: 9999999,
              step: Uq,
              label: XQ("smpShop:pricePerItem")
            }), (0, JQ.jsxs)(PQ.y, {
              loading: qQ.isPending(FQ),
              onClick: () => {
                qQ.act(FQ, String(IQ))
              },
              children: [XQ("smpShop:list"), " ", (0, JQ.jsx)(jq, {
                amount: IQ
              })]
            })]
          }, FQ)
        }))
      })
    }
    const zT = (0, wQ.memo)((function(QQ) {
      let {
        itemKey: WQ,
        item: XQ,
        quantity: wQ,
        pricePerItem: qQ,
        tier: zQ,
        selected: sQ,
        onSelect: FQ
      } = QQ;
      return (0, JQ.jsxs)("button", {
        type: "button",
        className: TQ()("SmpInventorySlot", {
          SmpInventorySlotOn: sQ
        }),
        title: XQ,
        onClick: () => {
          FQ(WQ)
        },
        children: [(0, JQ.jsx)(Iq, {
          item: XQ,
          amount: wQ,
          tier: zQ
        }), (0, JQ.jsx)(jq, {
          amount: qQ
        })]
      })
    }));

    function sT() {
      var QQ;
      const {
        t: WQ
      } = (0, zQ.C)(), XQ = Sq(), qQ = null === (QQ = XQ.shopInfo[XQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, sQ = lq(qQ, "sell"), FQ = hq(qQ, "empty"), [PQ, gQ] = (0, wQ.useState)(null), [rQ, IQ] = (0, wQ.useState)({}), jQ = sQ.find((QQ => {
        let {
          key: WQ
        } = QQ;
        return WQ === PQ
      }));
      return 0 === sQ.length ? (0, JQ.jsx)("div", {
        className: "SmpScreen",
        children: (0, JQ.jsx)(yq, {
          title: FQ ? (0, JQ.jsx)(Qq.e, {
            text: FQ.item.customTitle
          }) : WQ("smpShop:nothingToSell"),
          children: FQ && (0, JQ.jsx)(Qq.e, {
            text: FQ.item.description
          })
        })
      }) : (0, JQ.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, JQ.jsx)("div", {
          className: "SmpInventoryGrid",
          children: sQ.map((QQ => {
            var WQ, XQ;
            let {
              key: wQ,
              item: qQ,
              meta: TQ
            } = QQ;
            return (0, JQ.jsx)(zT, {
              itemKey: wQ,
              item: TQ.item,
              quantity: TQ.quantity,
              pricePerItem: TQ.pricePerItem,
              tier: null !== (WQ = null === (XQ = qQ.enchant) || void 0 === XQ ? void 0 : XQ.tier) && void 0 !== WQ ? WQ : null,
              selected: wQ === PQ,
              onSelect: gQ
            }, wQ)
          }))
        }), (0, JQ.jsx)("div", {
          className: TQ()("SmpSellBar", {
            SmpSellBarIdle: !jQ
          }),
          children: jQ ? (0, JQ.jsx)(FT, {
            entry: jQ,
            choice: Lq(jQ.item, rQ[jQ.key]),
            onChoose: QQ => {
              IQ({
                ...rQ,
                [jQ.key]: QQ
              })
            }
          }) : (0, JQ.jsx)("span", {
            className: "SmpMuted",
            children: WQ("smpShop:tapToSell")
          })
        })]
      })
    }

    function FT(QQ) {
      var WQ, XQ, wQ, qQ;
      let {
        entry: TQ,
        choice: sQ,
        onChoose: FQ
      } = QQ;
      const {
        t: gQ
      } = (0, zQ.C)(), rQ = Sq(), {
        key: IQ,
        item: jQ,
        meta: BQ
      } = TQ, yQ = Rq("dropdown" === (null === (WQ = jQ.userInput) || void 0 === WQ ? void 0 : WQ.type) ? jQ.userInput.dropdownOptions : []), VQ = null === sQ ? 0 : -(0, Ow.c)(jQ, sQ);
      return (0, JQ.jsxs)(JQ.Fragment, {
        children: [(0, JQ.jsx)(Iq, {
          item: BQ.item,
          amount: BQ.quantity,
          tier: null !== (XQ = null === (wQ = jQ.enchant) || void 0 === wQ ? void 0 : wQ.tier) && void 0 !== XQ ? XQ : null
        }), (0, JQ.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, JQ.jsx)("b", {
            children: (0, JQ.jsx)(Qq.e, {
              text: null !== (qQ = jQ.customTitle) && void 0 !== qQ ? qQ : BQ.item
            })
          }), (0, JQ.jsx)("small", {
            children: gQ("smpShop:sellEach", {
              count: BQ.quantity
            })
          })]
        }), (0, JQ.jsx)(Dq, {
          options: yQ.map((QQ => {
            let {
              label: WQ,
              quantity: XQ,
              isAll: wQ
            } = QQ;
            return {
              value: WQ,
              label: wQ ? gQ("smpShop:all", {
                count: XQ
              }) : String(XQ)
            }
          })),
          value: sQ,
          onChange: FQ,
          ariaLabel: gQ("smpShop:quantity")
        }), (0, JQ.jsxs)(PQ.y, {
          loading: rQ.isPending(IQ),
          disabled: null === sQ,
          onClick: () => {
            rQ.act(IQ, sQ)
          },
          children: [gQ("smpShop:sellButton"), " ", (0, JQ.jsx)(jq, {
            amount: VQ
          })]
        })]
      })
    }

    function PT() {
      var QQ;
      const {
        t: WQ
      } = (0, zQ.C)(), XQ = Sq(), wQ = null === (QQ = XQ.shopInfo[XQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, qQ = lq(wQ, "collect"), TQ = lq(wQ, "myListing"), sQ = (QQ, WQ) => XQ.isPending(QQ) || !1 === WQ.canBuy;
      return (0, JQ.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, JQ.jsx)("h3", {
          className: "SmpSectionTitle",
          children: WQ("smpShop:readyToCollect")
        }), qQ.length > 0 ? (0, JQ.jsx)("div", {
          className: "SmpList",
          children: qQ.map((QQ => {
            var wQ, qQ;
            let {
              key: TQ,
              item: zQ,
              meta: FQ
            } = QQ;
            return (0, JQ.jsxs)("div", {
              className: "SmpRow",
              children: [(0, JQ.jsx)(Iq, {
                item: "sold" === FQ.type ? "Gold Coin" : FQ.item,
                amount: "sold" === FQ.type ? 0 : FQ.quantity,
                tier: null !== (wQ = null === (qQ = zQ.enchant) || void 0 === qQ ? void 0 : qQ.tier) && void 0 !== wQ ? wQ : null
              }), (0, JQ.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, JQ.jsx)("b", {
                  children: (0, JQ.jsx)(Qq.e, {
                    text: zQ.customTitle
                  })
                }), (0, JQ.jsx)("small", {
                  children: (0, JQ.jsx)(Qq.e, {
                    text: zQ.description
                  })
                })]
              }), (0, JQ.jsx)(PQ.s, {
                loading: sQ(TQ, zQ),
                onClick: () => {
                  XQ.act(TQ)
                },
                children: WQ("smpShop:collect")
              })]
            }, TQ)
          }))
        }) : (0, JQ.jsx)(yq, {
          title: WQ("smpShop:nothingToCollect"),
          children: WQ("smpShop:nothingToCollectHint")
        }), (0, JQ.jsx)("h3", {
          className: "SmpSectionTitle",
          children: WQ("smpShop:activeListings", {
            count: TQ.length
          })
        }), TQ.length > 0 ? (0, JQ.jsx)("div", {
          className: "SmpList",
          children: TQ.map((QQ => {
            var wQ, qQ;
            let {
              key: TQ,
              item: zQ,
              meta: FQ
            } = QQ;
            return (0, JQ.jsxs)("div", {
              className: "SmpRow",
              children: [(0, JQ.jsx)(Iq, {
                item: FQ.item,
                amount: FQ.quantity,
                tier: null !== (wQ = null === (qQ = zQ.enchant) || void 0 === qQ ? void 0 : qQ.tier) && void 0 !== wQ ? wQ : null
              }), (0, JQ.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, JQ.jsx)("b", {
                  children: (0, JQ.jsx)(Qq.e, {
                    text: zQ.customTitle
                  })
                }), (0, JQ.jsx)("small", {
                  children: WQ("smpShop:timeLeft", {
                    time: Aq(FQ.expiresAt)
                  })
                })]
              }), (0, JQ.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, JQ.jsx)(jq, {
                  amount: FQ.pricePerItem
                }), (0, JQ.jsx)("small", {
                  children: WQ("smpShop:each")
                })]
              }), (0, JQ.jsx)(PQ.P, {
                loading: sQ(TQ, zQ),
                onClick: () => {
                  XQ.act(TQ)
                },
                children: WQ("smpShop:cancel")
              })]
            }, TQ)
          }))
        }) : (0, JQ.jsx)(yq, {
          title: WQ("smpShop:noActiveListings"),
          children: WQ("smpShop:noActiveListingsHint")
        })]
      })
    }

    function gT(QQ) {
      let {
        done: WQ,
        of: XQ
      } = QQ;
      return (0, JQ.jsx)("span", {
        className: "SmpProgress",
        children: (0, JQ.jsx)("i", {
          style: {
            width: `${Math.min(100,WQ/Math.max(1,XQ)*100)}%`
          }
        })
      })
    }

    function JT(QQ) {
      var WQ, XQ, wQ;
      let {
        entry: qQ,
        choice: TQ,
        onChoose: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, zQ.C)(), gQ = Sq(), {
        key: rQ,
        item: IQ,
        meta: jQ
      } = qQ, BQ = "dropdown" === (null === (WQ = IQ.userInput) || void 0 === WQ ? void 0 : WQ.type) ? IQ.userInput.dropdownOptions : [], yQ = !0 === jQ.processing, VQ = null !== jQ.creator && (jQ.owned > 0 || yQ), DQ = VQ && jQ.owned > 0 ? Rq(BQ) : [], pQ = null === TQ ? 0 : null !== (XQ = null === (wQ = DQ.find((QQ => QQ.label === TQ))) || void 0 === wQ ? void 0 : wQ.quantity) && void 0 !== XQ ? XQ : 0;
      return (0, JQ.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, JQ.jsx)(Iq, {
          item: jQ.item
        }), (0, JQ.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, JQ.jsx)("b", {
            children: (0, JQ.jsx)(Qq.e, {
              text: IQ.customTitle
            })
          }), (0, JQ.jsxs)("small", {
            children: [(0, JQ.jsx)(jq, {
              amount: jQ.pricePerItem
            }), " ", FQ("smpShop:each"), " \xb7", " ", null === jQ.creator ? FQ("smpShop:you") : (0, JQ.jsx)(Qq.e, {
              text: [{
                entityName: jQ.creator
              }]
            })]
          }), (0, JQ.jsx)(gT, {
            done: jQ.delivered,
            of: jQ.wanted
          })]
        }), VQ ? (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsx)(Dq, {
            options: DQ.map((QQ => {
              let {
                label: WQ,
                quantity: XQ,
                isAll: wQ
              } = QQ;
              return {
                value: WQ,
                label: wQ ? FQ("smpShop:max", {
                  count: XQ
                }) : String(XQ)
              }
            })),
            value: TQ,
            onChange: sQ,
            ariaLabel: FQ("smpShop:quantity")
          }), (0, JQ.jsxs)(PQ.y, {
            loading: gQ.isPending(rQ) || yQ,
            disabled: null === TQ,
            onClick: () => {
              gQ.act(rQ, TQ)
            },
            children: [FQ("smpShop:deliver"), " ", (0, JQ.jsx)(jq, {
              amount: pQ * jQ.pricePerItem
            })]
          })]
        }) : (0, JQ.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === jQ.creator ? FQ("smpShop:yourOrder") : FQ("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function rT() {
      var QQ;
      const {
        t: WQ
      } = (0, zQ.C)(), XQ = Sq(), qQ = null === (QQ = XQ.shopInfo[XQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, TQ = hq(qQ, "search"), sQ = hq(qQ, "creator"), FQ = lq(qQ, "order"), gQ = hq(qQ, "empty"), rQ = nq(TQ, FQ.length > 0 || null !== gQ), [IQ, jQ] = (0, wQ.useState)(!1), [BQ, yQ] = (0, wQ.useState)({});
      return (0, JQ.jsx)(Zq, {
        browser: rQ,
        recentLabel: WQ("smpShop:recentOrders"),
        action: (0, JQ.jsx)(PQ.y, {
          onClick: () => {
            jQ((QQ => !QQ))
          },
          children: WQ("smpShop:createOrder")
        }),
        above: IQ && (0, JQ.jsx)(wT, {
          mode: "order",
          creator: sQ,
          catalogue: rQ.catalogue,
          names: rQ.names,
          searching: rQ.loading,
          prices: [],
          onPickItem: rQ.searchFor,
          onClose: () => {
            jQ(!1)
          }
        }),
        onBack: () => {
          jQ(!1)
        },
        summary: FQ.length > 0 && WQ(1 === FQ.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: FQ.length,
          price: gq(Oq(FQ, "max"))
        }),
        list: rQ.loading ? (0, JQ.jsx)(Bq, {}) : FQ.length > 0 ? (0, JQ.jsx)(tq.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: iq,
          observerUpdateDeps: [FQ.length],
          children: FQ.map((QQ => (0, JQ.jsx)(JT, {
            entry: QQ,
            choice: Lq(QQ.item, BQ[QQ.key]),
            onChoose: WQ => {
              yQ({
                ...BQ,
                [QQ.key]: WQ
              })
            }
          }, QQ.key)))
        }) : gQ ? (0, JQ.jsx)(Vq, {
          entry: gQ
        }) : (0, JQ.jsx)(Bq, {
          count: 3
        })
      })
    }

    function IT() {
      var QQ;
      const {
        t: WQ
      } = (0, zQ.C)(), XQ = Sq(), wQ = lq(null === (QQ = XQ.shopInfo[XQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, "myOrder");
      return 0 === wQ.length ? (0, JQ.jsx)("div", {
        className: "SmpScreen",
        children: (0, JQ.jsx)(yq, {
          title: WQ("smpShop:noOrders"),
          children: WQ("smpShop:noOrdersHint")
        })
      }) : (0, JQ.jsx)("div", {
        className: "SmpScreen",
        children: (0, JQ.jsx)("div", {
          className: "SmpList",
          children: wQ.map((QQ => {
            let {
              key: wQ,
              item: qQ,
              meta: TQ
            } = QQ;
            const zQ = XQ.isPending(wQ) || !1 === qQ.canBuy;
            return (0, JQ.jsxs)("div", {
              className: "SmpRow",
              children: [(0, JQ.jsx)(Iq, {
                item: TQ.item,
                amount: TQ.collectable
              }), (0, JQ.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, JQ.jsx)("b", {
                  children: (0, JQ.jsx)(Qq.e, {
                    text: qQ.customTitle
                  })
                }), (0, JQ.jsxs)("small", {
                  children: [(0, JQ.jsx)(jq, {
                    amount: TQ.pricePerItem
                  }), " ", WQ("smpShop:each"), TQ.collectable > 0 && ` \xb7 ${WQ("smpShop:readyCount",{count:TQ.collectable})}`]
                }), (0, JQ.jsx)(gT, {
                  done: TQ.delivered,
                  of: TQ.wanted
                })]
              }), TQ.collectable > 0 ? (0, JQ.jsx)(PQ.s, {
                loading: zQ,
                onClick: () => {
                  XQ.act(wQ)
                },
                children: WQ("smpShop:collectCount", {
                  count: TQ.collectable
                })
              }) : (0, JQ.jsx)(PQ.P, {
                loading: zQ,
                onClick: () => {
                  XQ.act(wQ)
                },
                children: WQ("smpShop:cancel")
              })]
            }, wQ)
          }))
        })
      })
    }
    const jT = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      BT = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function yT(QQ, WQ) {
      let XQ = !1;
      const wQ = {};
      for (const qQ in QQ) WQ(qQ, QQ[qQ]) ? wQ[qQ] = QQ[qQ] : XQ = !0;
      return XQ ? wQ : QQ
    }

    function VT(QQ) {
      var WQ, XQ, qQ, FQ;
      const {
        show: PQ,
        shopInfo: gQ,
        selectedCategoryKey: rQ
      } = QQ, {
        t: IQ
      } = (0, zQ.C)(), jQ = null !== rQ && void 0 !== rQ ? rQ : "", BQ = aq(gQ, jQ), yQ = null === (WQ = gQ[jQ]) || void 0 === WQ ? void 0 : WQ.items, VQ = null !== BQ, [DQ, pQ] = (0, wQ.useState)({}), [GQ, UQ] = (0, wQ.useState)([]), [bQ, vQ] = (0, wQ.useState)(!1), [dQ, HQ] = (0, wQ.useState)(null), [, aQ] = (0, wQ.useState)(0), lQ = (0, wQ.useRef)(0), hQ = (0, wQ.useRef)({}), iQ = (0, wQ.useRef)({
        items: yQ,
        pending: DQ,
        shopInfo: gQ,
        active: VQ,
        canAfford: QQ.canAfford,
        buy: QQ.buy
      });
      iQ.current = {
        items: yQ,
        pending: DQ,
        shopInfo: gQ,
        active: VQ,
        canAfford: QQ.canAfford,
        buy: QQ.buy
      };
      const cQ = (0, wQ.useCallback)((QQ => {
        lQ.current++;
        const WQ = lQ.current;
        UQ((XQ => [{
          id: WQ,
          text: QQ
        }, ...XQ].slice(0, 8))), HQ(WQ)
      }), []);
      (0, wQ.useEffect)((() => {
        if (null === dQ) return;
        const QQ = setTimeout((() => {
          HQ(null)
        }), 3e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [dQ]), (0, wQ.useEffect)((() => {
        const WQ = QQ.message;
        if (!WQ) return;
        const {
          shopInfo: XQ,
          active: wQ,
          items: qQ
        } = iQ.current, TQ = null !== WQ.categoryKey ? null !== aq(XQ, WQ.categoryKey) : wQ;
        (TQ || wQ) && cQ(WQ.text), TQ && pQ((QQ => yT(QQ, (QQ => {
          var WQ, XQ;
          return !jT.has(null === qQ || void 0 === qQ || null === (WQ = qQ[QQ]) || void 0 === WQ || null === (XQ = WQ.smp) || void 0 === XQ ? void 0 : XQ.kind)
        }))))
      }), [QQ.message, cQ]), (0, wQ.useEffect)((() => {
        pQ((QQ => yT(QQ, ((QQ, WQ) => kq(null === yQ || void 0 === yQ ? void 0 : yQ[QQ]) === WQ.snapshot))))
      }), [gQ, yQ]);
      const AQ = Object.keys(DQ).length > 0;
      (0, wQ.useEffect)((() => {
        if (!AQ) return;
        const QQ = setInterval((() => {
          aQ((QQ => QQ + 1));
          const QQ = Date.now(),
            {
              pending: WQ,
              items: XQ
            } = iQ.current,
            wQ = Object.keys(WQ).filter((XQ => QQ - WQ[XQ].at >= 12e3));
          if (0 === wQ.length) return;
          const qQ = wQ.some((QQ => {
            var wQ, qQ;
            return "search" !== (null === XQ || void 0 === XQ || null === (wQ = XQ[QQ]) || void 0 === wQ || null === (qQ = wQ.smp) || void 0 === qQ ? void 0 : qQ.kind) || WQ[QQ].resend
          }));
          for (const TQ of wQ) hQ.current[TQ] = QQ;
          pQ((QQ => yT(QQ, (QQ => !wQ.includes(QQ))))), qQ && cQ(IQ("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(QQ)
        }
      }), [AQ]), (0, wQ.useEffect)((() => {
        pQ({})
      }), [jQ]), (0, wQ.useEffect)((() => {
        PQ || vQ(!1)
      }), [PQ]);
      const RQ = (0, wQ.useCallback)((function(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: wQ,
            pending: qQ,
            canAfford: TQ,
            buy: zQ
          } = iQ.current, sQ = null === wQ || void 0 === wQ ? void 0 : wQ[QQ];
          if (!sQ || QQ in qQ || !1 === sQ.canBuy) return !1;
          if (!TQ(sQ, (0, Ow.c)(sQ, WQ))) return !1;
          zQ(QQ, sQ, WQ);
          const FQ = {
            snapshot: kq(sQ),
            at: Date.now(),
            resend: XQ
          };
          return iQ.current.pending = {
            ...iQ.current.pending,
            [QQ]: FQ
          }, pQ((WQ => ({
            ...WQ,
            [QQ]: FQ
          }))), !0
        }), []),
        EQ = (0, wQ.useMemo)((() => ({
          shopInfo: gQ,
          categoryKey: jQ,
          canAfford: QQ.canAfford,
          isPending: QQ => QQ in DQ,
          gaveUpAt: QQ => {
            var WQ;
            return null !== (WQ = hQ.current[QQ]) && void 0 !== WQ ? WQ : 0
          },
          act: RQ,
          notify: cQ
        })), [gQ, jQ, QQ.canAfford, DQ, RQ, cQ]),
        CQ = Math.min(...Object.values(DQ).map((QQ => QQ.at))),
        uQ = AQ && Date.now() - CQ > 1500,
        LQ = GQ.length > 1,
        kQ = null !== (XQ = null === (qQ = gQ[jQ]) || void 0 === qQ ? void 0 : qQ.customTitle) && void 0 !== XQ ? XQ : jQ,
        fQ = null === (FQ = gQ[jQ]) || void 0 === FQ ? void 0 : FQ.description;
      let SQ = null;
      return "market" === BQ ? SQ = (0, JQ.jsx)(qT, {}) : "sell" === BQ ? SQ = (0, JQ.jsx)(sT, {}) : "collect" === BQ ? SQ = (0, JQ.jsx)(PT, {}) : "orders" === BQ ? SQ = (0, JQ.jsx)(rT, {}) : "myOrders" === BQ && (SQ = (0, JQ.jsx)(IT, {})), (0, JQ.jsx)(fq.Provider, {
        value: EQ,
        children: (0, JQ.jsx)("div", {
          className: "SmpShopHost",
          hidden: !VQ,
          children: (0, JQ.jsxs)("div", {
            className: "SmpShop",
            children: [(0, JQ.jsx)("header", {
              className: "SmpHeader",
              children: (0, JQ.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, JQ.jsxs)("h2", {
                  children: [BQ && (0, JQ.jsx)(sQ.d, {
                    name: BT[BQ]
                  }), IQ(kQ)]
                }), fQ && (0, JQ.jsx)("p", {
                  children: (0, JQ.jsx)(Qq.e, {
                    text: fQ
                  })
                })]
              })
            }), (0, JQ.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: PQ && SQ
            }), (0, JQ.jsxs)("button", {
              type: "button",
              className: TQ()("SmpStatus", {
                SmpStatusWaiting: AQ,
                SmpStatusFresh: !AQ && null !== dQ,
                SmpStatusHasHistory: LQ
              }),
              "aria-live": "polite",
              "aria-expanded": LQ ? bQ : void 0,
              onClick: () => {
                LQ && vQ((QQ => !QQ))
              },
              children: [AQ ? (0, JQ.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, JQ.jsx)(pq, {}), IQ(uQ ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : GQ[0] ? (0, JQ.jsx)("span", {
                className: "SmpStatusText",
                children: (0, JQ.jsx)(Qq.e, {
                  text: GQ[0].text
                })
              }, GQ[0].id) : (0, JQ.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: IQ("smpShop:ready")
              }), LQ && (0, JQ.jsx)("small", {
                children: IQ("smpShop:recentMessages", {
                  count: GQ.length
                })
              })]
            }), bQ && LQ && (0, JQ.jsx)("div", {
              className: "SmpStatusHistory",
              children: GQ.map((QQ => (0, JQ.jsx)("div", {
                children: (0, JQ.jsx)(Qq.e, {
                  text: QQ.text
                })
              }, QQ.id)))
            })]
          })
        })
      })
    }
    class DT {
      constructor(QQ) {
        this.info = QQ
      }
      static fromShopInfo(QQ) {
        const WQ = {};
        for (const XQ in QQ) {
          const wQ = !0 === QQ[XQ].redDot && !0 !== QQ[XQ].forceRemoveRedDot;
          WQ[XQ] = {
            redDot: wQ,
            items: {}
          };
          for (const qQ in QQ[XQ].items) {
            const wQ = QQ[XQ].items[qQ],
              TQ = !0 === wQ.redDot && !0 !== wQ.forceRemoveRedDot;
            WQ[XQ].items[qQ] = {
              redDot: TQ
            }
          }
        }
        return new DT(WQ)
      }
      anyCategoryHasRedDots() {
        for (const QQ in this.info)
          if (this.categoryHasRedDot(QQ)) return !0;
        return !1
      }
      doesCategoryExist(QQ) {
        return !(0, jX.G)(this.info[QQ])
      }
      categoryHasRedDot(QQ) {
        return !0 === this.info[QQ].redDot
      }
      updateCategoryRedDot(QQ, WQ) {
        this.info[QQ].redDot = WQ
      }
      doesItemExist(QQ, WQ) {
        return this.doesCategoryExist(QQ) && !(0, jX.G)(this.info[QQ].items[WQ])
      }
      itemHasRedDot(QQ, WQ) {
        return !0 === this.info[QQ].items[WQ].redDot
      }
      updateItemRedDot(QQ, WQ, XQ) {
        this.info[QQ].items[WQ].redDot = XQ
      }
      shallowCopy() {
        return new DT(this.info)
      }
    }

    function pT(QQ, WQ) {
      return `${QQ}\x1f${WQ}`
    }

    function GT(QQ, WQ) {
      return !(0, jX.G)(WQ) && !(0, jX.G)(QQ) && WQ in QQ
    }
    const UT = (0, wQ.memo)((function(QQ) {
      var WQ, XQ;
      let {
        show: qQ
      } = QQ;
      const zQ = (0, CW.d)("players", lT),
        sQ = (0, CW.d)("players", hT),
        gQ = (0, zq.e)(),
        [IQ, jQ] = (0, wQ.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: DT.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        yQ = (0, wQ.useRef)(""),
        VQ = (0, wQ.useRef)(null),
        pQ = (0, wQ.useRef)(null),
        GQ = (0, wQ.useRef)(0),
        UQ = (0, wQ.useRef)(void 0),
        bQ = (0, wQ.useRef)(null),
        vQ = (0, wQ.useRef)(IQ),
        HQ = IQ.redDotInfo.anyCategoryHasRedDots(),
        [aQ, hQ] = (0, wQ.useState)(null),
        iQ = (0, wQ.useRef)(!1);
      let cQ = !1,
        AQ = 0,
        RQ = 0;
      if (IQ.currencyAmounts) {
        for (const QQ in IQ.currencyAmounts) {
          var EQ;
          const WQ = IQ.currencyAmounts[QQ];
          WQ.hidden || (AQ++, (null === (EQ = WQ.subtext) || void 0 === EQ ? void 0 : EQ.length) > 0 && RQ++)
        }
        cQ = AQ + RQ > 4
      }(0, wQ.useEffect)((() => {
        BX.k.mB("showShopIconRedDot", HQ, !0)
      }), [HQ]), (0, wQ.useEffect)((() => {
        DQ.gameBridge.send("setShopOpen", qQ), qQ || (clearTimeout(UQ.current), jQ((QQ => QQ.awaitingPurchase ? {
          ...QQ,
          awaitingPurchase: !1
        } : QQ)))
      }), [qQ]), (0, wQ.useEffect)((() => () => {
        DQ.gameBridge.send("setShopOpen", !1), clearTimeout(UQ.current)
      }), []), (0, wQ.useEffect)((() => {
        vQ.current = IQ
      }), [IQ]), (0, wQ.useEffect)((() => {
        if (null === aQ) return;
        return (0, qq.c)("pointerdown", (QQ => {
          const WQ = QQ.target;
          null !== WQ && void 0 !== WQ && WQ.closest(".ShopItem") || hQ(null)
        }))
      }), [aQ]);
      const CQ = QQ => {
          jQ((WQ => ({
            ...WQ,
            ...QQ
          })))
        },
        uQ = QQ => {
          var WQ;
          clearTimeout(null === (WQ = IQ.onBoughtInfo) || void 0 === WQ ? void 0 : WQ.timeout);
          const XQ = setTimeout((() => {
            CQ({
              onBoughtInfo: null
            })
          }), 3e3);
          yQ.current = QQ, CQ({
            onBoughtInfo: {
              text: QQ,
              timeout: XQ,
              categoryKey: VQ.current
            }
          })
        },
        LQ = QQ => {
          const {
            shopInfo: WQ,
            userInputsPerItem: XQ,
            redDotInfo: wQ,
            autoSelectCategory: TQ
          } = function(QQ, WQ, XQ, wQ, qQ, TQ) {
            if ((0, jX.G)(QQ) || 0 === Object.keys(QQ).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: DT.fromShopInfo({}),
              autoSelectCategory: null
            };
            const zQ = lQ.siteUsedData[lQ.siteUsed].adConfig.showRewardedAds,
              sQ = {};
            let FQ = null;
            for (const yQ in QQ) {
              const WQ = QQ[yQ],
                XQ = {};
              let wQ = !1;
              for (const QQ in WQ.items) {
                const qQ = WQ.items[QQ];
                (0, Ow.k)(qQ, zQ) && (XQ[QQ] = qQ, wQ = !0)
              }
              wQ && (sQ[yQ] = {
                ...WQ,
                items: XQ
              }, !0 === WQ.autoSelectCategory && (FQ = yQ))
            }
            const PQ = {},
              gQ = (QQ, WQ, wQ, zQ) => {
                var sQ, FQ;
                const gQ = pT(QQ, WQ),
                  JQ = null !== (sQ = XQ[gQ]) && void 0 !== sQ ? sQ : XQ[WQ];
                if (null !== (FQ = zQ.userInput) && void 0 !== FQ && FQ.type) switch (zQ.userInput.type) {
                  case "dropdown": {
                    var rQ;
                    const QQ = !JQ || !zQ.userInput.dropdownOptions.some((QQ => (0, Ow.e)(QQ) === JQ)),
                      WQ = zQ.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === wQ || void 0 === wQ || null === (rQ = wQ.userInput) || void 0 === rQ ? void 0 : rQ.type) || JSON.stringify(wQ.userInput.dropdownOptions) !== JSON.stringify(zQ.userInput.dropdownOptions)),
                      XQ = zQ.userInput,
                      qQ = !(0, jX.G)(XQ.initialValue) && XQ.dropdownOptions.some((QQ => (0, Ow.e)(QQ) === XQ.initialValue));
                    var IQ;
                    return void(QQ || WQ ? qQ ? PQ[gQ] = null !== (IQ = zQ.userInput.initialValue) && void 0 !== IQ ? IQ : null : zQ.userInput.dropdownOptions.length > 0 ? PQ[gQ] = (0, Ow.e)(zQ.userInput.dropdownOptions[0]) : PQ[gQ] = null : PQ[gQ] = JQ)
                  }
                  case "text":
                  case "number":
                    var jQ, BQ, yQ;
                    return void((null === wQ || void 0 === wQ ? void 0 : wQ.userInput) !== zQ.userInput ? PQ[gQ] = null !== (jQ = null !== (BQ = zQ.userInput.initialValue) && void 0 !== BQ ? BQ : JQ) && void 0 !== jQ ? jQ : "" : PQ[gQ] = null !== (yQ = null !== JQ && void 0 !== JQ ? JQ : zQ.userInput.initialValue) && void 0 !== yQ ? yQ : "");
                  case "color":
                    var VQ, DQ, pQ;
                    return void((null === wQ || void 0 === wQ ? void 0 : wQ.userInput) !== zQ.userInput ? PQ[gQ] = null !== (VQ = null !== (DQ = zQ.userInput.initialValue) && void 0 !== DQ ? DQ : JQ) && void 0 !== VQ ? VQ : "#000000" : PQ[gQ] = null !== (pQ = null !== JQ && void 0 !== JQ ? JQ : zQ.userInput.initialValue) && void 0 !== pQ ? pQ : "#000000");
                  case "player": {
                    const QQ = (0, Ow.i)(qQ, TQ, zQ.userInput);
                    return void(JQ && QQ.includes(JQ) ? PQ[gQ] = JQ : PQ[gQ] = QQ.length > 0 ? QQ[0] : null)
                  }
                }
              };
            for (const yQ in sQ)
              for (const QQ in sQ[yQ].items) {
                var JQ;
                const XQ = sQ[yQ].items[QQ];
                gQ(yQ, QQ, null === (JQ = WQ[yQ]) || void 0 === JQ ? void 0 : JQ.items[QQ], XQ)
              }
            const rQ = DT.fromShopInfo(sQ);
            for (const yQ in sQ) {
              var IQ;
              if (wQ.doesCategoryExist(yQ)) {
                (null === (IQ = WQ[yQ]) || void 0 === IQ ? void 0 : IQ.redDot) === sQ[yQ].redDot && rQ.updateCategoryRedDot(yQ, wQ.categoryHasRedDot(yQ));
                for (const QQ in sQ[yQ].items) {
                  var jQ, BQ;
                  wQ.doesItemExist(yQ, QQ) && (null === (jQ = WQ[yQ]) || void 0 === jQ || null === (BQ = jQ.items[QQ]) || void 0 === BQ ? void 0 : BQ.redDot) === sQ[yQ].items[QQ].redDot && rQ.updateItemRedDot(yQ, QQ, wQ.itemHasRedDot(yQ, QQ))
                }
              }
            }
            return {
              shopInfo: sQ,
              userInputsPerItem: PQ,
              redDotInfo: rQ,
              autoSelectCategory: FQ
            }
          }(QQ, IQ.shopInfo, IQ.userInputsPerItem, IQ.redDotInfo, zQ, sQ), FQ = {
            shopInfo: WQ,
            userInputsPerItem: XQ,
            redDotInfo: wQ
          };
          if (null === TQ || qQ)
            if (WQ[IQ.selectedCategoryKey]) FQ.selectedCategoryKey = IQ.selectedCategoryKey;
            else {
              const QQ = Fq(WQ);
              FQ.selectedCategoryKey = QQ.length > 0 ? QQ[0] : null
            }
          else FQ.selectedCategoryKey = TQ;
          return 0 === Object.keys(WQ).length && qQ && dQ.b.set({
            openEverythingMenuName: null
          }), FQ
        },
        fQ = (QQ, WQ, XQ) => {
          const wQ = IQ.selectedCategoryKey,
            qQ = pT(wQ, QQ),
            TQ = null !== XQ && void 0 !== XQ ? XQ : IQ.userInputsPerItem[qQ],
            zQ = {
              categoryKey: wQ,
              itemKey: QQ,
              userInput: TQ
            };
          if (VQ.current = wQ, WQ.isRewardedAd) {
            if (Date.now() - GQ.current < 5e3) return;
            (0, yW.X)((() => {
              var XQ, wQ, TQ;
              console.log("bought rewarded ad");
              const sQ = zQ.categoryKey ? null === (XQ = vQ.current.shopInfo[zQ.categoryKey]) || void 0 === XQ ? void 0 : XQ.items[QQ] : null;
              if (!sQ || !sQ.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (wQ = WQ.userInput) || void 0 === wQ ? void 0 : wQ.type) === (null === sQ || void 0 === sQ || null === (TQ = sQ.userInput) || void 0 === TQ ? void 0 : TQ.type) ? (zQ.userInput = vQ.current.userInputsPerItem[qQ], DQ.gameBridge.send("buyShopItem", zQ), WQ.onBoughtMessage && uQ(WQ.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), GQ.current = Date.now()
          } else {
            DQ.gameBridge.send("buyShopItem", zQ), CQ({
              awaitingPurchase: !0
            }), clearTimeout(UQ.current), UQ.current = setTimeout((() => {
              bQ.current = null, CQ({
                awaitingPurchase: !1
              })
            }), 1e3);
            const QQ = (0, Ow.c)(WQ, TQ);
            if (bQ.current = null, !isNaN(QQ) && GT(IQ.currencyAmounts, WQ.currency)) {
              0 !== QQ && (bQ.current = {
                currency: WQ.currency,
                amountBefore: IQ.currencyAmounts[WQ.currency].amount
              });
              const XQ = {
                ...IQ.currencyAmounts
              };
              XQ[WQ.currency].amount -= QQ, CQ({
                currencyAmounts: XQ
              })
            }
            WQ.onBoughtMessage && uQ(WQ.onBoughtMessage)
          }
        },
        SQ = (QQ, WQ) => {
          if (null === WQ || !QQ.shopInfo[WQ]) return QQ;
          let XQ = QQ.redDotInfo;
          return XQ.categoryHasRedDot(WQ) && (XQ.updateCategoryRedDot(WQ, !1), XQ = XQ.shallowCopy()), {
            ...QQ,
            selectedCategoryKey: WQ,
            redDotInfo: XQ
          }
        },
        tQ = QQ => {
          jQ((WQ => SQ(WQ, QQ)))
        };
      (0, eW.f)(Tq.k, (() => {
        jQ((QQ => {
          const WQ = (0, Tq.l)(Fq(QQ.shopInfo), QQ.selectedCategoryKey, (WQ => (0, Tq.j)(QQ.shopInfo[WQ].items)));
          return WQ === QQ.selectedCategoryKey ? QQ : SQ(QQ, WQ)
        }))
      })), (0, eW.f)("showShopFromServer", (QQ => {
        let {
          toggle: WQ,
          FQ: XQ
        } = QQ;
        XQ && tQ(XQ), 0 === Object.keys(IQ.shopInfo).length || WQ && qQ ? dQ.b.set({
          openEverythingMenuName: null
        }) : dQ.b.set({
          openEverythingMenuName: VW.r.SHOP
        })
      })), (0, eW.f)("closeShopOnDamaged", (() => {
        qQ && dQ.b.set({
          openEverythingMenuName: null
        })
      })), (0, eW.f)("overShopInfo", (QQ => {
        uQ(QQ)
      })), (0, BQ.d)("currencyAmounts", (QQ => {
        var WQ;
        const XQ = bQ.current;
        XQ && (null === QQ || void 0 === QQ || null === (WQ = QQ[XQ.currency]) || void 0 === WQ ? void 0 : WQ.amount) === XQ.amountBefore ? CQ({
          currencyAmounts: QQ
        }) : (bQ.current = null, CQ({
          currencyAmounts: QQ,
          awaitingPurchase: !1
        }))
      })), (0, BQ.d)("shopInfo", (QQ => {
        CQ({
          ...LQ(QQ),
          awaitingPurchase: !1
        })
      }));
      const oQ = (0, wQ.useRef)({
        playerIds: zQ,
        localPlayerId: sQ
      });
      (0, wQ.useEffect)((() => {
        oQ.current.playerIds === zQ && oQ.current.localPlayerId === sQ || (oQ.current = {
          playerIds: zQ,
          localPlayerId: sQ
        }, jQ((QQ => {
          const WQ = LQ(QQ.shopInfo);
          return {
            ...QQ,
            ...WQ
          }
        })))
      }), [zQ, sQ]);
      const eQ = IQ.selectedCategoryKey,
        nQ = (QQ, WQ) => {
          var XQ, wQ;
          return (isNaN(WQ) || (0, jX.G)(QQ.currency) || GT(IQ.currencyAmounts, QQ.currency) && WQ <= IQ.currencyAmounts[QQ.currency].amount) && (null === (XQ = QQ.canBuy) || void 0 === XQ || XQ) && !(null !== (wQ = QQ.hidden) && void 0 !== wQ && wQ)
        },
        xQ = (QQ, WQ) => {
          var XQ, wQ, qQ;
          const zQ = pT(eQ, QQ),
            sQ = IQ.shopInfo[eQ].items[QQ],
            gQ = IQ.userInputsPerItem[zQ],
            rQ = (0, Ow.c)(sQ, gQ),
            jQ = nQ(sQ, rQ),
            BQ = sQ.enchant,
            yQ = BQ ? (0, kQ.nb)(null !== (XQ = sQ.customTitle) && void 0 !== XQ ? XQ : QQ, {
              colour: kQ.kb[BQ.tier]
            }) : null !== (wQ = sQ.customTitle) && void 0 !== wQ ? wQ : QQ,
            VQ = WQ => {
              const XQ = null !== WQ && void 0 !== WQ ? WQ : gQ,
                wQ = void 0 !== WQ ? (0, Ow.c)(sQ, WQ) : rQ;
              nQ(sQ, wQ) && null !== XQ && fQ(QQ, sQ, WQ);
              let qQ = IQ.redDotInfo;
              qQ.itemHasRedDot(eQ, QQ) && (qQ.updateItemRedDot(eQ, QQ, !1), qQ = qQ.shallowCopy()), CQ({
                redDotInfo: qQ
              })
            };
          return (0, JQ.jsxs)("div", {
            className: TQ()("ShopItem", {
              ShopItemNoInput: !sQ.userInput,
              ShopItemNoInputCanBuy: !sQ.userInput && jQ,
              ShopItemNoInputSelected: sQ.isSelected,
              ShopItemEnchant: !!BQ
            }),
            "data-pad-focusable": !sQ.userInput || void 0,
            "data-pad-unavailable": !sQ.userInput && !jQ || void 0,
            "data-pad-repeat": null !== (qQ = (0, Tq.e)(sQ)) && void 0 !== qQ ? qQ : void 0,
            "data-pad-repeat-wait": IQ.awaitingPurchase || void 0,
            onClick: () => {
              if (BQ && iQ.current) {
                if (aQ !== zQ) return void hQ(zQ);
                hQ(null)
              }
              sQ.userInput || VQ()
            },
            onPointerDown: QQ => {
              BQ && (iQ.current = (0, mw.t)(QQ))
            },
            onPointerEnter: QQ => {
              BQ && !(0, mw.t)(QQ) && hQ(zQ)
            },
            onPointerLeave: QQ => {
              BQ && !(0, mw.t)(QQ) && hQ((QQ => QQ === zQ ? null : QQ))
            },
            style: {
              zIndex: Object.keys(IQ.shopInfo[eQ].items).length - WQ
            },
            children: [IQ.redDotInfo.itemHasRedDot(eQ, QQ) && (0, JQ.jsx)(FQ.e, {
              top: "-6px",
              right: "-6px"
            }), sQ.badge && (0, JQ.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, JQ.jsx)("div", {
                className: TQ()("ShopBadgeMain", sQ.badge.type),
                children: (0, JQ.jsx)(Qq.e, {
                  text: sQ.badge.text
                })
              })
            }), (0, JQ.jsx)("div", {
              className: "ShopItemLeft",
              children: sQ.image && (0, JQ.jsx)(bT, {
                item: sQ,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, JQ.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, JQ.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, JQ.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, JQ.jsx)(Qq.e, {
                    text: yQ
                  })
                }), (0, JQ.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, JQ.jsx)(Qq.e, {
                    text: sQ.description
                  })
                })]
              }), sQ.userInput && (0, JQ.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: QQ => {
                  QQ.stopPropagation()
                },
                children: [(0, JQ.jsx)(HT, {
                  item: sQ,
                  currInput: gQ,
                  updateInput: WQ => {
                    ((QQ, WQ, XQ) => {
                      const wQ = pT(QQ, WQ),
                        qQ = {
                          ...IQ.userInputsPerItem
                        };
                      qQ[wQ] = XQ, CQ({
                        userInputsPerItem: qQ
                      })
                    })(eQ, QQ, WQ)
                  },
                  onSubmit: QQ => {
                    VQ(QQ)
                  }
                }), ("dropdown" !== sQ.userInput.type || !sQ.userInput.autoSubmit) && (0, JQ.jsx)(PQ.h, {
                  className: "ItemCostButton",
                  disabled: !jQ && null !== gQ,
                  onClick: () => {
                    VQ()
                  },
                  children: (0, JQ.jsx)(dT, {
                    item: sQ,
                    cost: rQ,
                    currencyAmounts: IQ.currencyAmounts
                  })
                })]
              })]
            }), !sQ.userInput && (0, JQ.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, JQ.jsx)(dT, {
                item: sQ,
                cost: rQ,
                currencyAmounts: IQ.currencyAmounts
              })
            }), BQ && aQ === zQ && (0, JQ.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, JQ.jsx)(Qq.e, {
                text: yQ
              }), (0, JQ.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, JQ.jsx)(Qq.e, {
                  text: (0, Kw.b)("", BQ.enchantments, BQ.enchantmentData)
                })
              })]
            })]
          }, zQ)
        },
        YQ = function(QQ) {
          for (const WQ in QQ)
            if (QQ[WQ].smp) return !0;
          return !1
        }(IQ.shopInfo),
        NQ = aq(IQ.shopInfo, eQ);
      return (0, JQ.jsx)(Yw.c, {
        className: "Menu ShopBody",
        show: qQ,
        children: 0 !== Object.keys(IQ.shopInfo).length && (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, JQ.jsx)(rQ, {
              items: Fq(IQ.shopInfo).map((QQ => {
                var WQ;
                return {
                  id: QQ,
                  title: null !== (WQ = IQ.shopInfo[QQ].customTitle) && void 0 !== WQ ? WQ : QQ,
                  redDot: IQ.redDotInfo.categoryHasRedDot(QQ)
                }
              })),
              link: gQ ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, sq.f)({
                    page: (0, sq.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: eQ,
              onClick: tQ,
              padStartsOnTab: (0, Tq.i)(eQ)
            }), (0, JQ.jsx)("div", {
              className: "MenuSideBarFooter",
              children: IQ.currencyAmounts && Object.keys(IQ.currencyAmounts).map((QQ => {
                var WQ;
                const XQ = IQ.currencyAmounts[QQ];
                return XQ.hidden ? null : (0, JQ.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (cQ ? "SmallText" : ""),
                  children: [(0, JQ.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, JQ.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: XQ.iconColour
                      },
                      children: (0, JQ.jsx)(iT, {
                        iconName: XQ.icon
                      })
                    }), "\xa0", (0, Zw.d)(XQ.amount, 6)]
                  }), (null === (WQ = XQ.subtext) || void 0 === WQ ? void 0 : WQ.length) > 0 && (0, JQ.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, JQ.jsx)(Qq.e, {
                      text: XQ.subtext
                    })
                  })]
                }, QQ)
              }))
            })]
          }), (0, JQ.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [YQ && (0, JQ.jsx)(VT, {
              show: qQ,
              shopInfo: IQ.shopInfo,
              selectedCategoryKey: eQ,
              buy: (QQ, WQ, XQ) => {
                fQ(QQ, WQ, XQ)
              },
              canAfford: nQ,
              message: IQ.onBoughtInfo
            }), null === NQ && (0, JQ.jsxs)(JQ.Fragment, {
              children: [(0, JQ.jsx)("div", {
                className: TQ()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== IQ.onBoughtInfo
                }),
                children: (0, JQ.jsx)(Qq.e, {
                  text: yQ.current
                })
              }), (0, JQ.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, JQ.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (WQ = IQ.shopInfo[eQ]) || void 0 === WQ ? void 0 : WQ.description) && (0, JQ.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, JQ.jsx)(Qq.e, {
                      text: IQ.shopInfo[eQ].description
                    })
                  }), qQ && (0, JQ.jsx)("div", {
                    className: "ShopItems",
                    ref: pQ,
                    "data-pad-initial-area": !0,
                    children: Fq(null === (XQ = IQ.shopInfo[eQ]) || void 0 === XQ ? void 0 : XQ.items).map(((QQ, WQ) => xQ(QQ, WQ)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function bT(QQ) {
      let {
        item: WQ,
        minWidth: XQ,
        minHeight: wQ
      } = QQ;
      const {
        image: qQ,
        schematicId: TQ,
        imageColour: zQ
      } = WQ;
      if (TQ) return (0, JQ.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${XQ}rem`,
          height: `${wQ}rem`
        },
        children: (0, JQ.jsx)(Wq.b, {
          game: {
            schematicId: TQ
          }
        })
      });
      var FQ, PQ;
      if ((0, Mw.e)(qQ)) return (0, JQ.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${XQ}rem`,
          height: "0",
          minHeight: `${wQ}rem`
        },
        children: (0, JQ.jsx)(Mw.d, {
          itemName: qQ,
          amount: null !== (FQ = WQ.amount) && void 0 !== FQ ? FQ : 0,
          amountFontSize: wQ / 4 + "rem",
          enchantmentTier: null === (PQ = WQ.enchant) || void 0 === PQ ? void 0 : PQ.tier
        })
      });
      const gQ = qQ.slice(-4);
      return ".jpg" === gQ || ".png" === gQ ? (0, JQ.jsx)(vT, {
        image: qQ,
        minWidth: XQ
      }) : (0, JQ.jsx)(sQ.d, {
        name: qQ,
        className: "SelectedItemImage",
        style: {
          color: zQ
        }
      })
    }

    function vT(QQ) {
      let {
        image: WQ,
        minWidth: XQ
      } = QQ;
      const {
        gameNameWithVariation: wQ
      } = (0, CW.e)("connectedGame"), qQ = WQ.endsWith(".jpg");
      return (0, JQ.jsx)("img", {
        className: TQ()({
          ShopPixelImage: !qQ
        }),
        style: {
          width: `${qQ?1.6*XQ:XQ}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,kQ.Mb)(wQ)}/${WQ}`,
        alt: WQ,
        draggable: !1
      })
    }

    function dT(QQ) {
      let {
        item: WQ,
        cost: XQ,
        currencyAmounts: wQ
      } = QQ;
      const qQ = !isNaN(XQ) && 0 !== XQ && GT(wQ, WQ.currency);
      let TQ = null;
      return WQ.buyButtonText ? TQ = WQ.buyButtonText : qQ ? (TQ = XQ, WQ.sell && (TQ = -1 * XQ), TQ = TQ.toString()) : 0 === XQ ? TQ = "Free" : WQ.isRewardedAd && (TQ = "Watch ad"), (0, jX.G)(TQ) || " " === TQ ? null : (0, JQ.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [qQ && (0, JQ.jsx)("div", {
          style: {
            color: wQ[WQ.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, JQ.jsx)(iT, {
            iconName: wQ[WQ.currency].icon
          })
        }), (0, JQ.jsx)("div", {
          className: "BuyItemCost",
          children: (0, JQ.jsx)(Qq.e, {
            text: TQ
          })
        })]
      })
    }

    function HT(QQ) {
      let {
        item: WQ,
        currInput: XQ,
        updateInput: qQ,
        onSubmit: TQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)(), FQ = (0, wQ.useRef)(null);
      if ((0, wQ.useEffect)((() => {
          const QQ = FQ.current;
          QQ && QQ.value !== XQ && document.activeElement !== QQ && (QQ.value = null !== XQ && void 0 !== XQ ? XQ : "")
        }), [XQ]), !WQ.userInput) return null;
      let PQ = WQ.userInput;
      if (VQ.featureFlags.sanitizeShopInput && "text" === WQ.userInput.type && (PQ = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === PQ.type || "number" === PQ.type) {
        var gQ, rQ;
        console.assert(void 0 !== XQ, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(WQ)}`);
        const QQ = "text" === PQ.type && PQ.wordCharsOnly;
        return (0, JQ.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, JQ.jsx)(UQ.e, {
            className: "ShopItemUserInputText",
            placeholderText: sQ(PQ.placeholderText),
            defaultValue: XQ,
            domRef: FQ,
            onValueChange: (WQ, XQ) => {
              !0 === QQ && (WQ = (0, wq.db)(WQ)), FQ.current.value = WQ, qQ(WQ)
            },
            onEnter: TQ,
            type: PQ.type
          }, (null !== (gQ = PQ.initialValue) && void 0 !== gQ ? gQ : "") + (null !== (rQ = PQ.placeholderText) && void 0 !== rQ ? rQ : ""))
        })
      }
      if ("dropdown" === PQ.type) {
        console.assert(void 0 !== XQ, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(WQ)}`);
        const QQ = PQ.autoSubmit;
        return (0, JQ.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, JQ.jsx)(AW.c, {
            options: PQ.dropdownOptions.map((QQ => (0, Ow.e)(QQ))),
            value: XQ,
            onChange: WQ => {
              let {
                value: XQ
              } = WQ;
              qQ(XQ), QQ && TQ(XQ)
            }
          })
        })
      }
      return "player" === PQ.type ? (0, JQ.jsx)(aT, {
        userInput: PQ,
        currInput: XQ,
        updateInput: qQ
      }) : "color" === PQ.type ? (0, JQ.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, JQ.jsx)("input", {
          type: "color",
          value: XQ,
          onChange: QQ => {
            qQ(QQ.target.value)
          }
        })
      }) : null
    }

    function aT(QQ) {
      let {
        userInput: WQ,
        currInput: XQ,
        updateInput: wQ
      } = QQ;
      const qQ = (0, CW.e)("players"),
        TQ = (0, CW.e)("hiddenPlayerNames"),
        zQ = (0, Ow.i)(qQ.ids, qQ.localId, WQ);
      return (0, JQ.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, JQ.jsx)(AW.c, {
          options: zQ.map((QQ => {
            const {
              name: WQ
            } = qQ.byId[QQ];
            return {
              value: QQ,
              label: null === WQ ? "" : (0, Xq.f)(WQ, TQ)
            }
          })),
          value: XQ,
          onChange: QQ => {
            let {
              value: WQ
            } = QQ;
            wQ(WQ)
          }
        })
      })
    }

    function lT(QQ) {
      let {
        ids: WQ
      } = QQ;
      return WQ
    }

    function hT(QQ) {
      let {
        localId: WQ
      } = QQ;
      return WQ
    }

    function iT(QQ) {
      let {
        iconName: WQ
      } = QQ;
      return DQ.gameBridge.lookup("isItemName", WQ) ? (0, JQ.jsx)(Mw.d, {
        itemName: WQ,
        amount: 1
      }) : (0, JQ.jsx)(sQ.d, {
        name: WQ,
        className: "2x"
      })
    }
    var cT = XQ(1698);
    const AT = (0, XQ(1468).h)((QQ => QQ.PadLobbyShortcuts)),
      RT = (0, wQ.lazy)((() => Promise.resolve().then((() => XQ(4973))).then((QQ => ({
        default: QQ.Lobbyleaderboard
      }))))),
      ET = (0, wQ.lazy)((() => XQ.e(227).then((() => XQ(41289))).then((QQ => ({
        default: QQ.LobbyManageView
      })))));

    function CT(QQ) {
      let {
        show: WQ
      } = QQ;
      return WQ ? (0, JQ.jsx)(uT, {}) : null
    }

    function uT() {
      const QQ = (0, zq.e)();
      return (0, JQ.jsxs)(JQ.Fragment, {
        children: [(0, JQ.jsx)(AT, {}), (0, JQ.jsxs)(wQ.Suspense, {
          fallback: (0, JQ.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, JQ.jsx)(bQ.e, {})
          }),
          children: [QQ && (0, JQ.jsx)(ET, {
            leaderboard: (0, JQ.jsx)(RT, {})
          }), !QQ && (0, JQ.jsx)(RT, {})]
        })]
      })
    }
    var LT = XQ(1620),
      kT = XQ(3267),
      fT = XQ(1802),
      ST = XQ(3320),
      tT = XQ(2841),
      oT = XQ(1546),
      eT = XQ(1514),
      nT = XQ(3255),
      xT = XQ(3261),
      YT = XQ(2423);
    const NT = "storeRecentGiftRecipients",
      ZT = new Map;

    function OT() {
      try {
        const QQ = MW.i.getItem(NT);
        return Array.isArray(QQ) ? QQ.filter((QQ => "string" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.name) && QQ.name.length > 0)).map((QQ => ({
          name: QQ.name,
          cosmetics: QQ.cosmetics && "object" === typeof QQ.cosmetics ? QQ.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function KT(QQ) {
      var WQ;
      const [XQ, qQ] = (0, wQ.useState)(""), [TQ, zQ] = (0, wQ.useState)("search"), [sQ, FQ] = (0, wQ.useState)(null), [PQ, gQ] = (0, wQ.useState)(null), JQ = (0, wQ.useRef)(null), rQ = (0, wQ.useRef)(null);
      (0, wQ.useEffect)((() => () => {
        JQ.current && clearTimeout(JQ.current)
      }), []);
      const IQ = null !== (WQ = null === sQ || void 0 === sQ ? void 0 : sQ.name) && void 0 !== WQ ? WQ : null;

      function jQ() {
        JQ.current && (clearTimeout(JQ.current), JQ.current = null)
      }(0, wQ.useEffect)((() => {
        if (null === IQ || QQ === hQ.NULL_USER_CONTEXT) return;
        const WQ = IQ.toLowerCase();
        if (WQ === QQ.getPlayerName().toLowerCase()) return void gQ({
          name: IQ,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const XQ = ZT.get(WQ);
        if (XQ) return void gQ({
          name: IQ,
          result: XQ
        });
        let wQ = !1;
        return async function(QQ, WQ) {
          try {
            const XQ = await (0, hQ.postJsonWithMetricsCookiesAndJsonResponse)(`${BW.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: WQ
            }, {
              retries: 1
            }, QQ.getMetricsCookies());
            if ("boolean" !== typeof(null === XQ || void 0 === XQ ? void 0 : XQ.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(XQ)}`);
            return XQ
          } catch (XQ) {
            return console.error("Failed to look up gift recipient:", XQ), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(QQ, IQ).catch((QQ => (console.error("Gift recipient lookup failed:", QQ), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((QQ => {
          !0 !== QQ.giftRecipientFound && "store:giftRecipientLookupFailed" === QQ.giftRecipientError || ZT.set(WQ, QQ), wQ || gQ({
            name: IQ,
            result: QQ
          })
        })), () => {
          wQ = !0
        }
      }), [IQ, QQ]);
      const BQ = (0, wQ.useMemo)((() => {
        const QQ = XQ.trim();
        if (!QQ) return {
          status: "none"
        };
        if (!sQ || sQ.name !== QQ || (null === PQ || void 0 === PQ ? void 0 : PQ.name) !== sQ.name) return {
          status: "pending",
          name: QQ
        };
        const WQ = PQ.result;
        return !1 === WQ.giftRecipientFound ? {
          status: "error",
          name: sQ.name,
          error: WQ.giftRecipientError
        } : {
          status: "found",
          name: WQ.giftRecipientName,
          ownedPacks: WQ.giftRecipientOwnedPacks,
          hasSuperRank: WQ.giftRecipientHasSuperRank,
          isSubscriber: WQ.giftRecipientIsSubscriber
        }
      }), [XQ, sQ, PQ]);
      (0, wQ.useEffect)((() => {
        "found" === BQ.status && "typed" === (null === sQ || void 0 === sQ ? void 0 : sQ.source) && rQ.current !== BQ.name && (rQ.current = BQ.name, (0, WW.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [BQ, sQ]);
      const yQ = (null === PQ || void 0 === PQ ? void 0 : PQ.name) === (null === sQ || void 0 === sQ ? void 0 : sQ.name) ? null === PQ || void 0 === PQ ? void 0 : PQ.result : null,
        VQ = !0 === (null === yQ || void 0 === yQ ? void 0 : yQ.giftRecipientFound) ? yQ.giftRecipientCosmetics : null;
      return {
        query: XQ,
        via: TQ,
        recipient: BQ,
        recipientCosmetics: VQ,
        type: function(QQ) {
          qQ(QQ), zQ("search"), jQ();
          const WQ = QQ.trim();
          WQ ? JQ.current = setTimeout((() => {
            FQ({
              name: WQ,
              source: "typed"
            })
          }), 400) : FQ(null)
        },
        choose: function(QQ, WQ) {
          jQ(), qQ(QQ), zQ("typed" === WQ ? "search" : "prefilled" === WQ ? "prefilled" : "suggestion"), FQ({
            name: QQ,
            source: WQ
          }), "typed" !== WQ && "prefilled" !== WQ && (0, WW.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: WQ
          })
        },
        clear: function() {
          jQ(), qQ(""), zQ("search"), FQ(null)
        },
        recordGift: function(QQ, WQ) {
          ! function(QQ) {
            ZT.delete(QQ.toLowerCase())
          }(QQ), gQ((XQ => {
            if (!XQ || XQ.name.toLowerCase() !== QQ.toLowerCase() || !0 !== XQ.result.giftRecipientFound || "superRank" === WQ) return XQ;
            const wQ = XQ.result.giftRecipientOwnedPacks;
            return {
              ...XQ,
              result: {
                ...XQ.result,
                giftRecipientOwnedPacks: wQ.includes(WQ) ? wQ : [...wQ, WQ]
              }
            }
          }))
        }
      }
    }
    var mT = XQ(2419),
      MT = XQ(4982),
      Qz = XQ(291),
      Wz = XQ(3381);
    const Xz = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var wz = XQ(2366),
      qz = XQ(646),
      Tz = XQ(2451),
      zz = XQ(2756);

    function sz(QQ) {
      let {
        cosmetics: WQ
      } = QQ;
      return (0, JQ.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, JQ.jsx)(Tz.d, {
          cosmetics: WQ
        })
      })
    }

    function Fz(QQ, WQ) {
      var XQ, wQ;
      const qQ = null !== (XQ = QQ.friend) && void 0 !== XQ ? XQ : {
        isError: !1,
        name: QQ.name,
        ranks: [],
        cosmetics: null !== (wQ = QQ.cosmetics) && void 0 !== wQ ? wQ : {},
        nameColour: qz.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return WQ ? {
        ...qQ,
        cosmetics: WQ
      } : qQ
    }

    function Pz(QQ) {
      let {
        pending: WQ
      } = QQ;
      return (0, JQ.jsx)("span", {
        className: "StoreRecipientLoader",
        children: WQ && (0, JQ.jsx)(bQ.e, {})
      })
    }

    function gz(QQ) {
      var WQ;
      let {
        selfName: XQ,
        giftRecipient: qQ,
        suggestionsVersion: FQ,
        pulseSignal: gQ,
        disabled: rQ
      } = QQ;
      const {
        t: IQ
      } = (0, zQ.C)(), jQ = (0, eQ.j)(), BQ = (0, wQ.useRef)(null), yQ = (0, wQ.useRef)(null), {
        query: DQ,
        via: pQ,
        recipient: GQ,
        recipientCosmetics: bQ
      } = qQ, vQ = (0, YT.o)(DQ), dQ = (0, wQ.useMemo)((() => {
        const QQ = VQ.featureFlags.useSocialFeatures ? jQ.friends.filter((QQ => !QQ.isError)) : [];
        return (0, YT.i)({
          onlineFriends: (0, eQ.f)(QQ),
          recentRecipients: OT(),
          friends: QQ,
          selfName: XQ,
          max: 8
        })
      }), [jQ.friends, XQ, FQ]), HQ = DQ.trim().toLowerCase(), aQ = "search" !== pQ && HQ ? dQ.find((QQ => QQ.name.toLowerCase() === HQ)) : void 0, lQ = aQ && "prefilled" === pQ ? [aQ, ...dQ.filter((QQ => QQ !== aQ))] : dQ, hQ = "" !== HQ && !aQ, iQ = hQ ? DQ : "", cQ = lQ.length > 0;
      (0, wQ.useEffect)((() => {
        BQ.current && BQ.current.value !== iQ && (BQ.current.value = iQ)
      }), [iQ]), (0, wQ.useEffect)((() => {
        BQ.current && (BQ.current.disabled = rQ)
      }), [rQ, gQ]);
      const AQ = (0, wQ.useRef)(0);

      function EQ() {
        "self" !== vQ && (0, WW.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), qQ.clear()
      }

      function CQ(QQ) {
        var WQ, XQ;
        if (rQ) return;
        if (" " === QQ.key || "Enter" === QQ.key) return QQ.preventDefault(), void QQ.currentTarget.click();
        const wQ = Array.from(null !== (WQ = null === (XQ = yQ.current) || void 0 === XQ ? void 0 : XQ.querySelectorAll("[role=radio]")) && void 0 !== WQ ? WQ : []),
          qQ = wQ.indexOf(QQ.currentTarget);
        let TQ;
        "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? TQ = wQ[(qQ + 1) % wQ.length] : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? TQ = wQ[(qQ - 1 + wQ.length) % wQ.length] : "Home" === QQ.key ? TQ = wQ[0] : "End" === QQ.key && (TQ = wQ[wQ.length - 1]), TQ && (QQ.preventDefault(), TQ.focus(), TQ.click())
      }(0, wQ.useEffect)((() => {
        var QQ;
        gQ > AQ.current && !rQ && (AQ.current = gQ, null === (QQ = BQ.current) || void 0 === QQ || QQ.focus())
      }), [gQ, rQ]);
      const uQ = "self" === vQ,
        LQ = null !== (WQ = null === aQ || void 0 === aQ ? void 0 : aQ.name) && void 0 !== WQ ? WQ : null,
        kQ = "error" === GQ.status ? GQ.error : null,
        fQ = "store:giftRecipientLookupFailed" === kQ;
      return (0, JQ.jsxs)("div", {
        className: TQ()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: rQ,
          StoreRecipientStripNoChips: !cQ
        }),
        children: [(0, JQ.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: IQ("store:buyingFor")
        }), (0, JQ.jsxs)("div", {
          ref: yQ,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": IQ("store:whoIsItFor"),
          children: [(0, JQ.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": uQ,
            tabIndex: rQ || !uQ && null !== LQ ? -1 : 0,
            className: TQ()("StoreRecipientMe", {
              StoreRecipientChecked: uQ
            }),
            onClick: () => {
              rQ || EQ()
            },
            onKeyDown: CQ,
            children: [(0, JQ.jsx)(sQ.d, {
              name: "user"
            }), " ", IQ("store:me")]
          }), cQ && (0, JQ.jsx)("div", {
            className: "StoreRecipientChips",
            children: lQ.map((QQ => {
              const WQ = QQ === aQ;
              return (0, JQ.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": WQ,
                tabIndex: !rQ && WQ ? 0 : -1,
                title: QQ.name,
                className: TQ()("StoreRecipientChip", {
                  StoreRecipientChecked: WQ
                }),
                onClick: () => {
                  rQ || function(QQ) {
                    "gift" !== vQ && (0, WW.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), qQ.choose(QQ.name, QQ.kind)
                  }(QQ)
                },
                onKeyDown: CQ,
                children: (0, JQ.jsx)(zz.c, {
                  playerSocialPreview: Fz(QQ, WQ ? bQ : null),
                  opensProfileCard: !1,
                  isFriend: null !== QQ.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== QQ.friend,
                  status: null === QQ.friend ? null : void 0,
                  trailing: WQ ? (0, JQ.jsx)(Pz, {
                    pending: "pending" === GQ.status
                  }) : void 0
                })
              }, QQ.name)
            }))
          })]
        }), (0, JQ.jsxs)("div", {
          className: TQ()("StoreRecipientSearch", {
            StoreRecipientChecked: hQ,
            StoreRecipientSearchPulse: gQ > 0 && !hQ,
            StoreRecipientSearchError: null !== kQ && !fQ
          }),
          onClick: () => {
            var QQ;
            null === (QQ = BQ.current) || void 0 === QQ || QQ.focus()
          },
          children: [hQ && "found" === GQ.status && bQ && (0, JQ.jsx)(sz, {
            cosmetics: bQ
          }), !(hQ && "found" === GQ.status && bQ) && (0, JQ.jsx)(sQ.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, JQ.jsx)(UQ.e, {
            className: "StoreRecipientSearchInput",
            domRef: BQ,
            placeholderText: IQ("store:searchName"),
            defaultValue: iQ,
            maxLength: RQ.j,
            onValueChange: function(QQ) {
              "gift" !== vQ && QQ.trim() && (0, WW.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), qQ.type(QQ)
            },
            onEnter: () => {
              var QQ;
              const WQ = null === (QQ = BQ.current) || void 0 === QQ ? void 0 : QQ.value.trim();
              WQ && qQ.choose(WQ, "typed")
            },
            blurOnEnter: !0
          }), hQ && (0, JQ.jsx)(Pz, {
            pending: "pending" === GQ.status
          }), hQ && (0, JQ.jsx)("div", {
            ...(0, PQ.ab)({
              disabled: rQ
            }),
            "aria-label": IQ("store:clearRecipient"),
            title: IQ("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: QQ => {
              QQ.stopPropagation(), rQ || EQ()
            },
            children: (0, JQ.jsx)(sQ.d, {
              name: "xmark"
            })
          })]
        }, gQ), kQ && (0, JQ.jsx)("div", {
          className: TQ()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: fQ
          }),
          role: "status",
          children: IQ(kQ)
        })]
      })
    }
    var Jz = XQ(2410),
      rz = XQ(2329),
      Iz = XQ(3828),
      jz = XQ(3386),
      Bz = XQ(2370);
    const yz = XQ.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Vz() {
      (0, Bz.d)(yz, {
        lowPriority: !1
      })
    }

    function Dz(QQ) {
      let {
        onBack: WQ,
        cta: XQ,
        recipient: qQ,
        afterCta: TQ
      } = QQ;
      const {
        t: FQ
      } = (0, zQ.C)(), [gQ, rQ] = (0, wQ.useState)("starting"), IQ = (0, wQ.useRef)(null), jQ = (0, YW.d)(), BQ = (0, wQ.useRef)(null), yQ = (0, wQ.useCallback)((() => {
        const QQ = IQ.current;
        null !== QQ.error && QQ.load();
        const WQ = QQ.play();
        BQ.current = WQ, WQ.catch((QQ => {
          (0, Iz.c)("Failed to play Super Rank video", QQ), jQ.current && BQ.current === WQ && rQ("failed")
        }))
      }), [jQ]);
      return (0, wQ.useEffect)((() => {
        const QQ = IQ.current;
        let WQ;

        function XQ() {
          clearTimeout(WQ), WQ = setTimeout(yQ, 3e3)
        }
        return yQ(), QQ.addEventListener("ended", XQ), () => {
          clearTimeout(WQ), QQ.removeEventListener("ended", XQ)
        }
      }), [yQ]), (0, JQ.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, JQ.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, JQ.jsx)(PQ.e, {
            className: "StoreDetailBackButton",
            onClick: WQ,
            padBack: !0,
            children: FQ("general:back")
          }), (0, JQ.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, JQ.jsx)(sQ.d, {
              name: "bolt"
            }), " ", FQ("homePage:superRank")]
          }), qQ]
        }), (0, JQ.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, JQ.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, JQ.jsx)("video", {
              ref: IQ,
              src: `${BW.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: yz,
              muted: !0,
              playsInline: !0,
              controls: "playing" === gQ,
              onPlaying: () => {
                rQ("playing")
              },
              onError: () => {
                rQ("failed")
              }
            }), ("failed" === gQ || "loading" === gQ) && (0, JQ.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, JQ.jsx)(PQ.h, {
                ariaLabel: FQ("general:play"),
                loading: "loading" === gQ,
                onClick: () => {
                  rQ("loading"), yQ()
                },
                touchPressOn: "pointerup",
                children: (0, JQ.jsx)(sQ.d, {
                  name: "play"
                })
              })
            })]
          }), (0, JQ.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, JQ.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, JQ.jsx)(jz.d, {})
            }), (0, JQ.jsxs)("div", {
              className: "StoreTileActions",
              children: [XQ, TQ]
            })]
          })]
        })]
      })
    }
    var pz = XQ(2776),
      Gz = XQ(3785),
      Uz = XQ(3371),
      bz = XQ(3373),
      vz = XQ(3346);
    const dz = [qz.s.yellow, qz.s.green, qz.s.aqua, qz.s.blue, qz.s.purple, qz.s.red];

    function Hz(QQ) {
      return "needsRecipient" === QQ || "lookingUp" === QQ || "gift" === QQ || "recipientOwns" === QQ || "recipientSharesOwned" === QQ || "recipientSubscribed" === QQ
    }

    function az(QQ) {
      const {
        onKeyDown: WQ,
        ...XQ
      } = (0, PQ.ab)();
      return {
        ...XQ,
        "aria-label": QQ,
        onKeyDown: QQ => {
          QQ.target === QQ.currentTarget && (null === WQ || void 0 === WQ || WQ(QQ))
        }
      }
    }

    function lz(QQ) {
      let {
        text: WQ
      } = QQ;
      return (0, JQ.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(WQ).map(((QQ, WQ) => (0, JQ.jsx)("span", {
          style: {
            color: dz[WQ % dz.length]
          },
          children: QQ
        }, WQ)))
      })
    }
    const hz = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function iz(QQ) {
      let {
        state: WQ,
        item: XQ,
        price: wQ,
        busy: qQ,
        highlight: FQ = !1,
        onAct: gQ,
        onNeedRecipient: rQ,
        onLogin: IQ
      } = QQ;
      const {
        t: jQ
      } = (0, zQ.C)(), BQ = "superRank" === XQ ? CQ.k.product.days : null, yQ = QQ => null === BQ ? jQ(QQ ? "general:gift" : "general:buy") : jQ(QQ ? "store:giftDays" : "store:buyDays", {
        days: BQ
      }), VQ = (QQ, WQ) => {
        const XQ = (0, JQ.jsxs)(JQ.Fragment, {
          children: [null === QQ && (0, JQ.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== QQ && (0, JQ.jsx)("span", {
            className: "StoreCtaLabel",
            title: QQ,
            children: QQ
          })]
        });
        return null !== BQ ? (0, JQ.jsxs)(JQ.Fragment, {
          children: [WQ && (0, JQ.jsx)("span", {
            className: "StoreCtaIcon",
            children: WQ
          }), XQ, (0, JQ.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, JQ.jsx)(rz.d, {
              amount: wQ
            })]
          })]
        }) : (0, JQ.jsxs)(JQ.Fragment, {
          children: [(0, JQ.jsxs)("span", {
            className: "StoreCtaLead",
            children: [XQ, "\xb7"]
          }), (0, JQ.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [WQ, (0, JQ.jsx)(rz.d, {
              amount: wQ
            })]
          })]
        })
      };
      let DQ;
      switch (WQ) {
        case "pending":
          DQ = (0, JQ.jsx)(PQ.s, {
            className: "StoreCtaButton",
            disabled: !0,
            children: VQ(null)
          });
          break;
        case "login":
          DQ = (0, JQ.jsx)(PQ.s, {
            className: "StoreCtaButton",
            onClick: IQ,
            children: VQ(yQ(!1))
          });
          break;
        case "owned":
          DQ = (0, JQ.jsx)(PQ.l, {
            className: "StoreCtaButton",
            onClick: () => {
              dQ.b.set({
                openEverythingMenuName: VW.r.CUSTOMISATION
              })
            },
            children: (0, JQ.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, JQ.jsx)(sQ.d, {
                name: "shirt"
              }), " ", jQ("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          DQ = (0, JQ.jsx)(PQ.s, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, JQ.jsx)("span", {
              className: "StoreCtaLabel",
              children: jQ(hz[WQ])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          DQ = (0, JQ.jsx)(PQ.s, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === WQ || null === wQ,
            loading: "lookingUp" === WQ || qQ,
            onClick: gQ,
            analyticsClick: {
              id: "store.gift",
              value: XQ
            },
            children: VQ(yQ(!0), YT.d)
          });
          break;
        case "buy":
        case "recharge":
          DQ = (0, JQ.jsx)(PQ.s, {
            className: "StoreCtaButton",
            loading: qQ,
            disabled: null === wQ,
            onClick: gQ,
            analyticsClick: {
              id: "store.buy",
              value: XQ
            },
            children: VQ(yQ(!1))
          })
      }
      return (0, JQ.jsx)("div", {
        className: TQ()("StoreCta", {
          StoreCtaHighlight: FQ,
          StoreCtaLabelFirst: null !== BQ
        }),
        onClick: QQ => {
          QQ.stopPropagation(), "needsRecipient" === WQ && rQ()
        },
        children: DQ
      })
    }

    function cz() {
      const {
        t: QQ
      } = (0, zQ.C)();
      return (0, JQ.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, JQ.jsxs)("li", {
          children: [(0, JQ.jsx)(sQ.d, {
            name: "check"
          }), (0, JQ.jsx)(lz, {
            text: QQ("store:colourfulNames")
          })]
        }), (0, JQ.jsxs)("li", {
          children: [(0, JQ.jsx)(sQ.d, {
            name: "check"
          }), QQ("store:perkCapes")]
        }), (0, JQ.jsxs)("li", {
          children: [(0, JQ.jsx)(sQ.d, {
            name: "check"
          }), QQ("store:perkNoAdverts")]
        }), (0, JQ.jsxs)("li", {
          children: [(0, JQ.jsx)(sQ.d, {
            name: "check"
          }), QQ("store:perkFriends", {
            count: (0, MQ.b)(["super"])
          })]
        })]
      })
    }

    function Az(QQ) {
      let {
        daysLeft: WQ,
        totalDays: XQ,
        urgent: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)(), sQ = XQ > 0 ? Math.min(1, Math.max(.03, WQ / XQ)) : 1;
      return (0, JQ.jsxs)("div", {
        className: TQ()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: wQ
        }),
        children: [(0, JQ.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === WQ ? qQ("store:oneDayLeft") : qQ("store:daysLeft", {
            days: WQ
          })
        }), (0, JQ.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, JQ.jsx)("i", {
            style: {
              width: 100 * sQ + "%"
            }
          })
        })]
      })
    }

    function Rz(QQ) {
      var WQ;
      let {
        state: XQ,
        urgent: wQ,
        daysLeft: qQ,
        totalDays: FQ,
        recipientHasSuperRank: PQ,
        busy: gQ,
        highlight: rQ,
        onOpen: IQ,
        onAct: jQ,
        onNeedRecipient: BQ,
        onLogin: yQ
      } = QQ;
      const {
        t: VQ
      } = (0, zQ.C)(), DQ = Hz(XQ), {
        days: pQ
      } = CQ.k.product, GQ = VQ("store:recipientHasSuperRank", {
        giftDays: pQ
      }), UQ = null === (WQ = KQ("subscribed" === XQ)) || void 0 === WQ ? void 0 : WQ.text;
      return (0, JQ.jsxs)("div", {
        className: TQ()("StoreTile StoreSuperRankTile", {
          StoreTileGift: DQ,
          StoreSuperRankTileUrgent: "recharge" === XQ && wQ,
          StoreSuperRankTileWithChip: PQ,
          StoreSuperRankTileGiftReady: "gift" === XQ
        }),
        ...az(VQ("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: Vz,
        onFocus: Vz,
        onClick: IQ,
        children: [(0, JQ.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${wz.e})`
          }
        }), DQ && (0, JQ.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, JQ.jsxs)("div", {
          className: "StoreTileContent",
          children: [PQ && (0, JQ.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: GQ,
            children: GQ
          }), (0, JQ.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, JQ.jsx)(sQ.d, {
              name: "bolt"
            }), " ", VQ("homePage:superRank")]
          }), DQ && (0, JQ.jsx)("div", {
            className: "StoreTilePitch",
            children: VQ("store:giftPitch", {
              days: pQ
            })
          }), "recharge" === XQ && (0, JQ.jsx)(Az, {
            daysLeft: qQ,
            totalDays: FQ,
            urgent: wQ
          }), UQ && (0, JQ.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, JQ.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: UQ
            })
          }), (0, JQ.jsx)(cz, {}), (0, JQ.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, JQ.jsx)(iz, {
              state: XQ,
              item: "superRank",
              price: CQ.k.price,
              busy: gQ,
              highlight: rQ,
              onAct: jQ,
              onNeedRecipient: BQ,
              onLogin: yQ
            }), "needsRecipient" === XQ && (0, JQ.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: VQ("store:pickRecipientFirst")
            }), "recharge" === XQ && wQ && (0, JQ.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === qQ ? VQ("store:endsInOneDay") : VQ("store:endsInDays", {
                days: qQ
              })
            })]
          })]
        })]
      })
    }
    const Ez = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Cz(QQ) {
      var WQ;
      let {
        pack: XQ,
        state: qQ,
        busy: FQ,
        onOpen: PQ,
        onAct: gQ,
        onNeedRecipient: rQ,
        onLogin: IQ
      } = QQ;
      const {
        t: jQ
      } = (0, zQ.C)(), BQ = LT.d[XQ], yQ = nT.l[XQ], VQ = (0, wz.l)(XQ), DQ = (0, wQ.useRef)(null);
      (0, Uz.i)(XQ, DQ);
      const pQ = Hz(qQ),
        GQ = null !== (WQ = BQ.displayName) && void 0 !== WQ ? WQ : XQ,
        UQ = (0, Gz.b)((() => {
          (0, pz.g)();
          const QQ = (0, Uz.e)(XQ);
          void 0 !== QQ && (0, Bz.d)((0, Uz.b)(QQ))
        })),
        [bQ] = (0, wQ.useState)(Wz.i);
      return (0, JQ.jsxs)("div", {
        className: TQ()("StoreTile StorePackTile", Ez[BQ.tier], {
          StorePackTileOwned: "owned" === qQ,
          StorePackTileRecipientOwns: "recipientOwns" === qQ,
          StoreTileGift: pQ
        }),
        ...az(GQ),
        ref: DQ,
        "data-store-item": XQ,
        onClick: PQ,
        onPointerMove: QQ => {
          "mouse" !== QQ.pointerType || 0 === QQ.movementX && 0 === QQ.movementY || bQ || UQ.start()
        },
        onPointerLeave: UQ.cancel,
        children: [yQ && (0, JQ.jsx)(yQ, {}), (0, JQ.jsx)("div", {
          className: "StorePackCharacters",
          children: VQ.map((QQ => (0, JQ.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,wz.h)(QQ)})`
            }
          }, QQ)))
        }), (0, JQ.jsx)("div", {
          className: "StoreTileScrim"
        }), pQ && (0, JQ.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, JQ.jsx)(vz.d, {
          pack: XQ,
          className: TQ()({
            PackAnimatedBadgeBesideRibbon: pQ
          })
        }), (0, JQ.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, JQ.jsx)("div", {
            className: "StoreTileTitle",
            children: GQ
          }), (0, JQ.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, JQ.jsx)(bz.b, {
              tier: BQ.tier
            }), " \xb7 ", jQ("store:itemCount", {
              count: (0, Jz.e)(XQ)
            }), "owned" === qQ && (0, JQ.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, JQ.jsx)(sQ.d, {
                name: "check"
              }), " ", jQ("general:owned")]
            })]
          }), (0, JQ.jsx)(iz, {
            state: qQ,
            item: XQ,
            price: (0, CQ.f)(XQ),
            busy: FQ,
            onAct: gQ,
            onNeedRecipient: rQ,
            onLogin: IQ
          })]
        })]
      })
    }
    var uz = XQ(3336),
      Lz = XQ(1615),
      kz = XQ(1517),
      fz = XQ(3810);

    function Sz() {
      return (0, JQ.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var tz = XQ(1399),
      oz = XQ(1626),
      ez = XQ(34541);

    function nz(QQ) {
      let {
        character: WQ,
        drawn: XQ,
        onDrawn: qQ
      } = QQ;
      const zQ = (0, wQ.useRef)(null),
        sQ = (0, ez.d)(WQ);
      return (0, JQ.jsx)("div", {
        className: TQ()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: XQ
        }),
        children: (0, JQ.jsx)(wQ.Suspense, {
          fallback: null,
          children: (0, JQ.jsx)(pz.c, {
            ref: zQ,
            framing: "store",
            turntableFromYaw: XQ ? sQ.yaw : null,
            onReady: () => {
              var QQ, XQ;
              null === (QQ = zQ.current) || void 0 === QQ || QQ.setOrbit(sQ), null === (XQ = zQ.current) || void 0 === XQ || XQ.setAllCosmetics(oz.c[WQ].cosmetics)
            },
            onDrawn: qQ
          })
        })
      })
    }
    const xz = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Yz = new Set(["wildSpirits"]);

    function Nz(QQ) {
      var WQ;
      let {
        tile: XQ,
        design: qQ,
        canGoLive: FQ,
        live: PQ,
        busy: gQ,
        highlight: rQ,
        onLiveStart: IQ,
        onLiveEnd: jQ,
        onOpen: BQ,
        onAct: yQ,
        onNeedRecipient: VQ,
        onLogin: DQ
      } = QQ;
      const {
        t: pQ
      } = (0, zQ.C)(), {
        pack: GQ,
        state: UQ
      } = XQ, bQ = LT.d[GQ], vQ = (0, LT.f)(GQ), dQ = (0, wz.i)(GQ), HQ = nT.l[dQ], aQ = Yz.has(dQ), {
        tier: lQ
      } = bQ, hQ = "legendary" === lQ || "mythic" === lQ, iQ = (0, wQ.useRef)(null);
      (0, tz.e)(iQ, "epic" === lQ || hQ || aQ);
      const [cQ, RQ] = (0, wQ.useState)(!1);
      return !PQ && cQ && RQ(!1), (0, JQ.jsxs)("div", {
        ref: iQ,
        className: TQ()("StoreCharacterCard", `StoreCharacterCard${qQ}`, xz[lQ], {
          StoreCharacterCardOwned: "owned" === UQ || "recipientOwns" === UQ,
          StoreCharacterCardGift: Hz(UQ),
          StoreCharacterCardItem: void 0 === vQ
        }),
        onPointerMove: QQ => {
          "mouse" !== QQ.pointerType || 0 === QQ.movementX && 0 === QQ.movementY || !FQ || PQ || void 0 === vQ || IQ()
        },
        onPointerLeave: jQ,
        children: [(0, JQ.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: HQ && (0, JQ.jsx)(HQ, {
            simple: !0
          })
        }), hQ && (0, JQ.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, JQ.jsxs)(AQ.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Lz.e)({
            kind: "pack",
            pack: GQ
          }),
          "data-store-item": GQ,
          onClick: QQ => {
            (0, kz.d)(QQ) && (QQ.preventDefault(), BQ())
          },
          children: [(0, JQ.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, JQ.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, JQ.jsx)("div", {
              className: TQ()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: cQ
              }),
              style: {
                backgroundImage: `url(${(0,wz.r)(GQ)})`
              }
            }), PQ && void 0 !== vQ && (0, JQ.jsx)(nz, {
              character: vQ,
              drawn: cQ,
              onDrawn: () => {
                RQ(!0)
              }
            })]
          }), (0, JQ.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (WQ = bQ.displayName) && void 0 !== WQ ? WQ : GQ
          }), (0, JQ.jsx)(bz.b, {
            tier: lQ,
            className: "StoreCharacterTier"
          })]
        }), (0, JQ.jsx)("div", {
          className: "StoreCharacterScrim"
        }), aQ && (0, JQ.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, JQ.jsx)(Sz, {})
        }), (0, JQ.jsx)(vz.d, {
          pack: GQ,
          iconOnly: !0,
          className: TQ()({
            PackAnimatedBadgeBelowOwned: "owned" === UQ
          })
        }), "owned" === UQ && (0, JQ.jsx)("span", {
          className: "StoreCharacterOwned",
          title: pQ("general:owned"),
          "aria-label": pQ("general:owned"),
          children: (0, JQ.jsx)(sQ.d, {
            name: "check"
          })
        }), (0, JQ.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, JQ.jsx)(iz, {
            state: UQ,
            item: GQ,
            price: (0, CQ.f)(GQ),
            busy: gQ,
            highlight: rQ,
            onAct: yQ,
            onNeedRecipient: VQ,
            onLogin: DQ
          })
        })]
      })
    }

    function Zz(QQ) {
      let {
        tiles: WQ,
        busy: XQ,
        highlightItem: qQ,
        onOpen: TQ,
        onAct: zQ,
        onNeedRecipient: sQ,
        onLogin: FQ
      } = QQ;
      const PQ = (0, fz.o)("storeCharacterCardFoil"),
        gQ = (0, fz.o)("storeCharacterCardSpotlight"),
        rQ = PQ ? "Foil" : gQ ? "Spotlight" : "Showcase",
        [IQ] = (0, wQ.useState)(Wz.i),
        [jQ, BQ] = (0, wQ.useState)(null);
      return (0, JQ.jsx)("div", {
        className: "StoreCharacterGrid",
        children: WQ.map((QQ => (0, JQ.jsx)(Nz, {
          tile: QQ,
          design: rQ,
          canGoLive: !IQ,
          live: jQ === QQ.pack,
          busy: XQ,
          highlight: qQ === QQ.pack,
          onLiveStart: () => {
            BQ(QQ.pack)
          },
          onLiveEnd: () => {
            BQ((WQ => WQ === QQ.pack ? null : WQ))
          },
          onOpen: () => {
            TQ(QQ.pack)
          },
          onAct: () => {
            zQ(QQ.pack)
          },
          onNeedRecipient: sQ,
          onLogin: () => {
            FQ(QQ.pack)
          }
        }, QQ.pack)))
      })
    }
    var Oz = XQ(34554);

    function Kz(QQ) {
      let {
        title: WQ
      } = QQ;
      return (0, JQ.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, JQ.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: WQ
        })
      })
    }

    function mz(QQ) {
      let {
        mountAtOnce: WQ,
        children: XQ
      } = QQ;
      const qQ = (0, wQ.useRef)(null),
        [TQ, zQ] = (0, wQ.useState)(WQ),
        sQ = (0, Oz.c)();
      return (0, wQ.useLayoutEffect)((() => {
        const QQ = qQ.current;
        QQ && QQ.getBoundingClientRect().top < QQ.parentElement.getBoundingClientRect().bottom && zQ(!0)
      }), []), TQ || sQ ? (0, JQ.jsx)(JQ.Fragment, {
        children: XQ
      }) : (0, JQ.jsx)("div", {
        ref: qQ
      })
    }

    function Mz(QQ) {
      let {
        layout: WQ,
        mountAtOnce: XQ,
        bundleGift: wQ,
        superRankTotalDays: qQ,
        busy: TQ,
        highlightItem: sQ,
        onOpen: FQ,
        onAct: PQ,
        onNeedRecipient: gQ,
        onLogin: rQ,
        dailyDropTile: IQ,
        dealBanner: jQ
      } = QQ;
      const {
        t: BQ
      } = (0, zQ.C)(), yQ = WQ.packs.filter((QQ => void 0 === (0, LT.f)(QQ.pack) && !(0, LT.m)(QQ.pack))), VQ = WQ.packs.filter((QQ => void 0 !== (0, LT.f)(QQ.pack))), DQ = WQ.packs.filter((QQ => (0, LT.m)(QQ.pack)));
      return (0, JQ.jsxs)(JQ.Fragment, {
        children: [(0, JQ.jsx)(uz.e, {
          className: "StoreSuperGems",
          gift: wQ,
          highlightSku: sQ,
          leadingTile: IQ,
          afterLeadingTile: jQ
        }), (0, JQ.jsx)(Kz, {
          title: BQ("store:rank")
        }), (0, JQ.jsx)(Rz, {
          state: WQ.superRank.state,
          urgent: WQ.superRank.urgent,
          daysLeft: WQ.superRankDaysLeft,
          totalDays: qQ,
          recipientHasSuperRank: WQ.recipientHasSuperRank,
          busy: TQ,
          highlight: "superRank" === sQ,
          onOpen: () => {
            FQ("superRank")
          },
          onAct: () => {
            PQ("superRank")
          },
          onNeedRecipient: gQ,
          onLogin: () => {
            rQ("superRank")
          }
        }), (0, JQ.jsxs)(mz, {
          mountAtOnce: XQ,
          children: [(0, JQ.jsx)(Kz, {
            title: BQ("store:bundles")
          }), (0, JQ.jsx)("div", {
            className: "StorePackGrid",
            children: yQ.map((QQ => (0, JQ.jsx)(Cz, {
              pack: QQ.pack,
              state: QQ.state,
              busy: TQ,
              onOpen: () => {
                FQ(QQ.pack)
              },
              onAct: () => {
                PQ(QQ.pack)
              },
              onNeedRecipient: gQ,
              onLogin: () => {
                rQ(QQ.pack)
              }
            }, QQ.pack)))
          }), (0, JQ.jsxs)(mz, {
            mountAtOnce: XQ,
            children: [(0, JQ.jsx)(Kz, {
              title: BQ("store:characters")
            }), (0, JQ.jsx)(Zz, {
              tiles: VQ,
              busy: TQ,
              highlightItem: sQ,
              onOpen: FQ,
              onAct: PQ,
              onNeedRecipient: gQ,
              onLogin: rQ
            }), DQ.length > 0 && (0, JQ.jsxs)(JQ.Fragment, {
              children: [(0, JQ.jsx)(Kz, {
                title: BQ("store:premiumItems")
              }), (0, JQ.jsx)(Zz, {
                tiles: DQ,
                busy: TQ,
                highlightItem: sQ,
                onOpen: FQ,
                onAct: PQ,
                onNeedRecipient: gQ,
                onLogin: rQ
              })]
            })]
          })]
        })]
      })
    }

    function Qs(QQ) {
      let {
        state: WQ,
        mode: XQ,
        giftName: wQ,
        busy: qQ,
        highlight: TQ,
        purchaseError: sQ,
        onBack: FQ,
        onChooseRecipient: gQ,
        onAct: rQ,
        onLogin: IQ
      } = QQ;
      const {
        t: jQ
      } = (0, zQ.C)(), BQ = KQ("gift" !== XQ);
      return (0, JQ.jsx)(Dz, {
        onBack: FQ,
        recipient: "gift" === XQ && (0, JQ.jsxs)(JQ.Fragment, {
          children: [wQ && (0, JQ.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: jQ("store:giftFor", {
              name: wQ
            }),
            children: [YT.d, " ", jQ("store:giftFor", {
              name: wQ
            })]
          }), !wQ && (0, JQ.jsxs)("div", {
            ...(0, PQ.ab)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: gQ,
            children: [YT.d, " ", jQ("store:chooseRecipient")]
          })]
        }),
        cta: (0, JQ.jsx)(iz, {
          state: WQ,
          item: "superRank",
          price: CQ.k.price,
          busy: qQ,
          highlight: TQ,
          onAct: rQ,
          onNeedRecipient: gQ,
          onLogin: IQ
        }),
        afterCta: (0, JQ.jsxs)(JQ.Fragment, {
          children: [BQ && (0, JQ.jsx)("span", {
            className: "StoreTileNote",
            children: BQ.text
          }), (null === BQ || void 0 === BQ ? void 0 : BQ.manageUrl) && (0, JQ.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: BQ.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: jQ("payments:manageSubscription")
          }), sQ && (0, JQ.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: jQ(sQ)
          })]
        })
      })
    }
    var Ws = XQ(173);
    const Xs = Ws.m("kind", [Ws.D({
      kind: Ws.t("refused"),
      heldTierId: Ws.W(),
      until: Ws.C()
    }), Ws.D({
      kind: Ws.t("refund"),
      tierId: Ws.W(),
      refundedMs: Ws.C(),
      forfeitedMs: Ws.C(),
      premiumCurrency: Ws.C()
    }), Ws.D({
      kind: Ws.t("none")
    })]);
    async function ws(QQ) {
      const WQ = await (0, hQ.postJsonWithMetricsCookiesAndJsonResponse)(`${BW.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: QQ
      }, {
        retries: 1
      });
      return Xs.parse(WQ)
    }
    var qs = XQ(3294),
      Ts = XQ(3342);

    function zs(QQ, WQ) {
      const XQ = Math.max(1, Math.round(WQ / kQ.i));
      return [1 === XQ ? `${QQ}OneDay` : QQ, {
        days: XQ.toLocaleString()
      }]
    }

    function ss(QQ) {
      let {
        price: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, zQ.C)();
      return (0, JQ.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, JQ.jsx)(cz, {}), (0, JQ.jsx)("div", {
          className: "SmallTextLight",
          children: XQ("payments:subscriptionRenewsMonthly", {
            price: WQ
          })
        }), (0, JQ.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, JQ.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: XQ("homePage:termsOfService")
          }), (0, JQ.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: XQ("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function Fs() {
      const QQ = (0, SQ.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && QQ && (0, SQ.subscriptionsSold)() ? (0, JQ.jsx)(Ps, {}) : null
    }

    function Ps() {
      const {
        t: QQ
      } = (0, zQ.C)(), {
        userContext: WQ
      } = (0, jQ.c)(), {
        purchaseUnderWay: XQ,
        notice: qQ,
        subscribe: TQ
      } = (0, qs.b)(), [sQ, FQ] = (0, wQ.useState)(null), [gQ, rQ] = (0, wQ.useState)(0), [IQ, BQ] = (0, wQ.useState)(!1), yQ = (0, wQ.useRef)(!0), DQ = WQ !== hQ.NULL_USER_CONTEXT, pQ = null !== sQ && sQ.loadedFor === WQ ? sQ.offer : null, GQ = null === qQ || void 0 === qQ ? void 0 : qQ.pendingIntentId, UQ = (0, wQ.useRef)(GQ);

      function bQ() {
        rQ((QQ => QQ + 1))
      }
      async function vQ(QQ) {
        BQ(!1), await TQ(QQ), yQ.current && bQ()
      }
      if ((0, wQ.useEffect)((() => (yQ.current = !0, () => {
          yQ.current = !1
        })), []), (0, wQ.useEffect)((() => {
          void 0 !== UQ.current && void 0 === GQ && bQ(), UQ.current = GQ
        }), [GQ]), (0, wQ.useEffect)((() => {
          if (!DQ) return;
          let QQ = !1;
          return BQ(!1), async function() {
            const {
              offering: QQ
            } = await (0, ZQ.getBillingClient)().getOfferings("superRankPage"), WQ = null === QQ || void 0 === QQ ? void 0 : QQ.packages.find(kT.isPricedPackage);
            return void 0 === WQ ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: WQ,
              preview: await ws(WQ.productId)
            }
          }().catch((QQ => (console.error("Billing: loading the Super Rank subscription or its preview failed:", QQ), {
            kind: "loadFailed"
          }))).then((XQ => {
            QQ || FQ((QQ => "loadFailed" === XQ.kind && (null === QQ || void 0 === QQ ? void 0 : QQ.loadedFor) === WQ ? QQ : {
              loadedFor: WQ,
              offer: XQ
            }))
          })), () => {
            QQ = !0
          }
        }), [WQ, DQ, gQ]), null === pQ) return null;
      if ("loaded" !== pQ.kind) return (0, JQ.jsx)(Ts.h, {
        notice: {
          kind: "error",
          key: "unavailable" === pQ.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: dQ,
        preview: HQ
      } = pQ;
      if ("refused" === HQ.kind) return (0, JQ.jsx)(Ts.h, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(HQ.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const aQ = (0, uz.i)(dQ),
        lQ = (0, VQ.isMobileApp)() && (0, JQ.jsx)(ss, {
          price: aQ
        });
      if (IQ && "refund" === HQ.kind) {
        const {
          refundedMs: WQ,
          forfeitedMs: wQ,
          premiumCurrency: qQ
        } = HQ, TQ = wQ + (0 === qQ ? WQ : 0), [zQ, sQ] = zs("payments:subscribeRefundsGemRank", WQ), [FQ, gQ] = zs("payments:subscribeForfeitsGemRank", TQ);
        return (0, JQ.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, JQ.jsx)("div", {
            children: QQ("payments:subscribeEndsGemRank")
          }), qQ > 0 && (0, JQ.jsx)("div", {
            children: QQ(zQ, {
              ...sQ,
              amount: qQ.toLocaleString()
            })
          }), TQ > 0 && (0, JQ.jsx)("div", {
            children: QQ(FQ, gQ)
          }), (0, JQ.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, JQ.jsx)(PQ.l, {
              onClick: () => {
                BQ(!1)
              },
              children: QQ("general:cancel")
            }), (0, JQ.jsx)(PQ.s, {
              onClick: () => {
                vQ(dQ)
              },
              loading: XQ,
              children: QQ("payments:subscribeContinue", {
                price: aQ
              })
            })]
          }), lQ]
        })
      }
      return (0, JQ.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, JQ.jsx)(Ts.h, {
          notice: qQ,
          className: "SmallTextBold"
        }), (0, JQ.jsx)(Ts.c, {
          className: "SmallTextBold"
        }), (0, JQ.jsx)(PQ.s, {
          onClick: () => {
            "refund" === HQ.kind ? BQ(!0) : vQ(dQ)
          },
          disabled: void 0 !== GQ,
          loading: XQ,
          children: QQ("payments:subscribeToSuperRank", {
            price: aQ
          })
        }), lQ]
      })
    }
    var gs = XQ(2685);

    function rs(QQ) {
      let {
        state: WQ,
        view: XQ,
        claiming: qQ,
        onOpen: sQ
      } = QQ;
      const {
        t: gQ
      } = (0, zQ.C)(), rQ = (0, wQ.useRef)(null), IQ = "ready" === XQ.kind;
      return (0, tz.e)(rQ, IQ), (0, JQ.jsxs)("div", {
        ref: rQ,
        className: TQ()("DailyDropTile", {
          DailyDropTileReady: IQ
        }),
        children: [IQ && (0, JQ.jsx)(FQ.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, JQ.jsx)("div", {
          className: "DailyDropTileTitle",
          children: gQ("dailyDrop:name")
        }), (0, JQ.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, JQ.jsx)(gs.e, {
            className: "DailyDropTileBlock"
          }), (0, JQ.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: gQ("dailyDrop:collected", {
              count: WQ.collected.length,
              total: WQ.total
            })
          })]
        }), "ready" === XQ.kind && (0, JQ.jsx)(PQ.s, {
          className: "DailyDropTileOpen",
          onClick: sQ,
          loading: qQ,
          children: gQ("dailyDrop:open")
        }), "waiting" === XQ.kind && (0, JQ.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: gQ("dailyDrop:nextIn", {
            count: XQ.hours
          })
        })]
      })
    }
    var Is = XQ(2313);
    const Bs = Math.PI / 180;

    function ys(QQ) {
      return QQ / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function Vs(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const wQ = (QQ / (2 * Math.PI / XQ) % XQ + XQ) % XQ;
      let qQ = null,
        TQ = 1 / 0;
      for (let zQ = 0; zQ < XQ; zQ++) {
        if (!WQ[zQ]) continue;
        const QQ = Math.abs(zQ - wQ),
          sQ = Math.min(QQ, XQ - QQ);
        sQ < TQ && (qQ = zQ, TQ = sQ)
      }
      return qQ
    }

    function Ds(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const wQ = Vs(QQ, WQ, XQ);
      if (null === wQ) return QQ;
      const qQ = ys(wQ, XQ) - QQ;
      return QQ + qQ - 2 * Math.PI * Math.round(qQ / (2 * Math.PI))
    }
    const ps = 32;

    function Gs(QQ) {
      if (0 === QQ.width || 0 === QQ.height) return !0;
      const WQ = document.createElement("canvas");
      WQ.width = ps, WQ.height = ps;
      const XQ = WQ.getContext("2d", {
        willReadFrequently: !0
      });
      if (!XQ) return !0;
      XQ.drawImage(QQ, 0, 0, ps, ps);
      const {
        data: wQ
      } = XQ.getImageData(0, 0, ps, ps);
      for (let qQ = 3; qQ < wQ.length; qQ += 4)
        if (wQ[qQ] > 0) return !1;
      return !0
    }

    function Us(QQ) {
      const WQ = document.createElement("canvas");
      WQ.width = QQ.width, WQ.height = QQ.height;
      const XQ = WQ.getContext("2d");
      return XQ ? (XQ.drawImage(QQ, 0, 0), WQ) : null
    }

    function bs(QQ) {
      let {
        worn: WQ,
        dT: XQ,
        HT: qQ,
        prompting: FQ,
        className: PQ
      } = QQ;
      const {
        t: gQ
      } = (0, zQ.C)(), rQ = (0, wQ.useRef)(null), [IQ, jQ] = (0, wQ.useState)(null), [BQ, yQ] = (0, wQ.useState)(!1), VQ = (0, wQ.useRef)([]), DQ = (0, wQ.useRef)(null), pQ = (0, wQ.useRef)(0), GQ = (0, wQ.useRef)(null), UQ = (0, wQ.useRef)(!0), vQ = (0, wQ.useCallback)((() => {
        const QQ = DQ.current,
          WQ = VQ.current,
          XQ = Vs(pQ.current, WQ),
          wQ = null === XQ ? null : WQ[XQ],
          qQ = null === QQ || void 0 === QQ ? void 0 : QQ.getContext("2d");
        QQ && wQ && qQ && (QQ.width === wQ.width && QQ.height === wQ.height || (QQ.width = wQ.width, QQ.height = wQ.height), qQ.clearRect(0, 0, QQ.width, QQ.height), qQ.drawImage(wQ, 0, 0))
      }), []);
      async function dQ(QQ, WQ) {
        const XQ = performance.now();
        let wQ = 0;
        for (const qQ of function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const WQ = [],
              XQ = new Set;
            for (let wQ = QQ / 2; wQ >= 1 && Number.isInteger(wQ); wQ /= 2)
              for (let qQ = 0; qQ < QQ; qQ += wQ) XQ.has(qQ) || (XQ.add(qQ), WQ.push(qQ));
            for (let wQ = 0; wQ < QQ; wQ++) XQ.has(wQ) || WQ.push(wQ);
            return WQ
          }()) {
          if (rQ.current !== QQ) break;
          if (0 !== qQ && (QQ.turnCamera(ys(qQ)), await new Promise((QQ => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  QQ()
                }))
              }))
            })), rQ.current !== QQ)) break;
          const XQ = Gs(WQ) ? null : Us(WQ);
          if (null !== XQ) VQ.current[qQ] = XQ, wQ++, 0 === qQ && jQ("stills");
          else if (0 === qQ) break
        }
        wQ > 0 && console.info(`Lucky Skin Block's Before: ${wQ} stills in ${Math.round(performance.now()-XQ)} ms`)
      }

      function HQ(QQ) {
        var WQ, XQ;
        (null === (WQ = GQ.current) || void 0 === WQ ? void 0 : WQ.pointerId) === QQ.pointerId && (GQ.current = null, UQ.current || (pQ.current = Ds(pQ.current, VQ.current), vQ(), null === (XQ = rQ.current) || void 0 === XQ || XQ.turnCamera(pQ.current)))
      }(0, wQ.useEffect)((() => {
        "stills" === IQ && vQ()
      }), [IQ, vQ]), (0, wQ.useEffect)((() => () => {
        for (const QQ of VQ.current) QQ && (QQ.width = 0, QQ.height = 0);
        VQ.current = []
      }), []);
      const aQ = FQ ? {
        onPointerDown: QQ => {
          null === GQ.current && (QQ.currentTarget.setPointerCapture(QQ.pointerId), GQ.current = {
            pointerId: QQ.pointerId,
            startX: QQ.clientX,
            startTurn: pQ.current
          })
        },
        onPointerMove: QQ => {
          const WQ = GQ.current;
          var XQ;
          null !== WQ && WQ.pointerId === QQ.pointerId && (pQ.current = WQ.startTurn - (QQ.clientX - WQ.startX) * Bs, vQ(), UQ.current || null === (XQ = rQ.current) || void 0 === XQ || XQ.turnCamera(pQ.current))
        },
        onPointerUp: HQ,
        onPointerCancel: HQ
      } : {};
      return (0, JQ.jsxs)("div", {
        className: TQ()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: FQ
        }, PQ),
        children: [(0, JQ.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, JQ.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...aQ,
            children: ["stills" === IQ && (0, JQ.jsx)("canvas", {
              ref: DQ,
              className: "DailyDropRevealBeforeStill"
            }), "head" === IQ && (0, JQ.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, JQ.jsx)(Tz.d, {
                cosmetics: WQ
              })
            }), null === IQ && (0, JQ.jsx)(bQ.e, {})]
          }), (0, JQ.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: gQ("dailyDrop:before")
          })]
        }), (0, JQ.jsx)(sQ.d, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, JQ.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, JQ.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, JQ.jsx)("div", {
              className: TQ()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: BQ
              }),
              children: (0, JQ.jsx)(wQ.Suspense, {
                fallback: null,
                children: (0, JQ.jsx)(pz.c, {
                  ref: rQ,
                  onReady: () => {
                    var QQ, XQ;
                    null === (QQ = rQ.current) || void 0 === QQ || QQ.resetCamera(), null === (XQ = rQ.current) || void 0 === XQ || XQ.setAllCosmetics(WQ)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var QQ;
                        const WQ = rQ.current;
                        if (!WQ) return;
                        const wQ = null === (QQ = WQ.getDevTools()) || void 0 === QQ ? void 0 : QQ.canvas();
                        try {
                          wQ && await dQ(WQ, wQ)
                        } catch (zQ) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", zQ)
                        } finally {
                          UQ.current = !1
                        }
                        if (rQ.current !== WQ) return;
                        VQ.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), jQ("head")), null === GQ.current && (pQ.current = Ds(pQ.current, VQ.current)), WQ.turnCamera(pQ.current), vQ(), WQ.updateCosmetic(XQ, qQ);
                        const TQ = new Promise((QQ => {
                          setTimeout(QQ, 1e4)
                        }));
                        await Promise.race([WQ.ensureReadyForCapture(XQ), TQ]).catch((QQ => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", QQ)
                        })), rQ.current === WQ && yQ(!0)
                      }()
                    }))
                  }
                })
              })
            }), !BQ && (0, JQ.jsx)(bQ.e, {}), (0, JQ.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...aQ
            })]
          }), (0, JQ.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: gQ("dailyDrop:after")
          })]
        })]
      })
    }
    const vs = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      ds = {
        opening: 900,
        shrinking: 700
      };

    function Hs(QQ) {
      let {
        drop: WQ,
        onClose: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)(), {
        userContext: FQ
      } = (0, jQ.c)(), {
        state: gQ,
        view: rQ
      } = (0, OW.v)(), [IQ, BQ] = (0, wQ.useState)("closed"), [yQ] = (0, wQ.useState)((() => ({
        ...FQ.getPlayerCosmetics()
      }))), [VQ] = (0, wQ.useState)((() => (0, OW.h)(WQ, yQ))), [DQ, pQ] = (0, wQ.useState)(!1), [GQ, UQ] = (0, wQ.useState)(!1), [bQ] = (0, wQ.useState)((() => null === gQ ? Promise.resolve(null) : WX(gQ))), [vQ, HQ] = (0, wQ.useState)(null), aQ = (0, YW.d)(), {
        gameState: lQ
      } = (0, dQ.n)(["gameState"]);
      async function hQ() {
        const QQ = await bQ;
        aQ.current && (null === QQ ? (XQ(), async function(QQ) {
          let WQ = null;
          try {
            const XQ = await QX();
            null === QQ || QQ.remindersOn || null !== MW.i.getItem(XQ) || (WQ = XQ)
          } catch (wQ) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", wQ)
          }
          if (null === WQ) return void await (0, KW.h)("dailyDrop");
          const XQ = WQ;
          await (0, KW.h)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              MW.i.setItem(XQ, !0), wX(null)
            }
          })
        }(gQ)) : ((0, KW.d)(), HQ(QQ), BQ("remind")))
      }

      function iQ(QQ) {
        null !== vQ && function(QQ, WQ) {
          MW.i.setItem(QQ.askedKey, !0), (0, xW.k)(), (0, OW.q)("daily_drop.remind", WQ ? "yes" : "no"), WQ && wX(QQ.requester)
        }(vQ, QQ), XQ()
      }(0, wQ.useEffect)((() => {
        const QQ = ds[IQ];
        if (void 0 === QQ) return;
        const WQ = setTimeout((() => {
          BQ(vs[IQ])
        }), QQ);
        return () => {
          clearTimeout(WQ)
        }
      }), [IQ]);
      const cQ = qQ(`dailyDrop:kind_${VQ.dT}`),
        AQ = gQ && qQ("dailyDrop:collected", {
          count: gQ.collected.length,
          total: gQ.total
        }),
        RQ = "revealed" === IQ || "shrinking" === IQ,
        EQ = "equip" !== IQ && "remind" !== IQ;
      return (0, JQ.jsx)(xw.b, {
        className: "DailyDropRevealScreen",
        close: "remind" === IQ ? () => {
          iQ(!1)
        } : XQ,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, JQ.jsxs)("div", {
          className: TQ()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === IQ,
            DailyDropRevealShrinking: "shrinking" === IQ,
            DailyDropRevealFiguresShown: "shrinking" === IQ || "equip" === IQ || "remind" === IQ
          }),
          children: [(0, JQ.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, JQ.jsx)(bs, {
              className: "DailyDropRevealStageFigures",
              worn: yQ,
              dT: VQ.dT,
              HT: VQ.HT,
              prompting: !EQ
            }), ("closed" === IQ || "opening" === IQ) && (0, JQ.jsx)(gs.e, {
              className: "DailyDropRevealBlock",
              open: "opening" === IQ
            }), RQ && (0, JQ.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, JQ.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Is.j)(VQ.dT,VQ.HT).previewTex}.png`,
                alt: cQ,
                draggable: !1
              })
            })]
          }), EQ && (0, JQ.jsxs)(JQ.Fragment, {
            children: [(0, JQ.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, JQ.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: RQ ? cQ : qQ("dailyDrop:name")
              }), "closed" === IQ && (0, JQ.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: qQ("dailyDrop:tapToOpen")
              }), "revealed" === IQ && (0, JQ.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: qQ("dailyDrop:tapToContinue")
              })]
            }), (0, JQ.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": qQ("closed" === IQ ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                BQ(vs[IQ])
              }
            })]
          }), "equip" === IQ && (0, JQ.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, JQ.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: cQ
            }), (0, JQ.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: qQ("dailyDrop:equipQuestion")
            }), (0, JQ.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, JQ.jsx)(PQ.h, {
                className: "DailyDropRevealButton",
                disabled: DQ,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, OW.q)("daily_drop.not_now", WQ), hQ()
                },
                children: qQ("dailyDrop:notNow")
              }), (0, JQ.jsx)(PQ.h, {
                className: "DailyDropRevealButton",
                loading: DQ,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, OW.q)("daily_drop.equip", WQ), pQ(!0), UQ(!1);
                    try {
                      await (0, OW.d)(FQ, VQ.dT, VQ.HT)
                    } catch (QQ) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", QQ), pQ(!1), void UQ(!0)
                    }
                    await hQ()
                  }()
                },
                children: qQ("dailyDrop:equip")
              })]
            }), GQ && (0, JQ.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: qQ("dailyDrop:equipFailed")
            }), !(0, dQ.e)(lQ) && (0, JQ.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: DQ,
              onClick: () => {
                var QQ;
                (0, OW.q)("daily_drop.customise", WQ), QQ = VQ.dT, BX.k.mB(Sw, QQ), dQ.b.set({
                  openEverythingMenuName: VW.r.CUSTOMISATION
                }), XQ()
              },
              children: [qQ("dailyDrop:customise"), " ", (0, JQ.jsx)(sQ.d, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), AQ && (0, JQ.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [AQ, "waiting" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) && ` \xb7 ${qQ("dailyDrop:nextInInline",{count:rQ.hours})}`]
            })]
          }), "remind" === IQ && (0, JQ.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, JQ.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: qQ("dailyDrop:remindTitle")
            }), (0, JQ.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: qQ("dailyDrop:remindSubtitle")
            }), (0, JQ.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, JQ.jsx)(PQ.h, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  iQ(!1)
                },
                children: qQ("dailyDrop:remindNo")
              }), (0, JQ.jsx)(PQ.h, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  iQ(!0)
                },
                children: qQ("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function as(QQ, WQ) {
      const {
        t: XQ
      } = (0, zQ.C)(), qQ = function(QQ, WQ) {
        const {
          state: XQ,
          view: qQ
        } = (0, OW.v)(), [TQ, zQ] = (0, wQ.useState)(!1), [sQ, FQ] = (0, wQ.useState)(!1), [PQ, gQ] = (0, wQ.useState)(null), JQ = (0, wQ.useRef)(null), rQ = (0, wQ.useRef)(!1), IQ = WQ && "ready" === (null === qQ || void 0 === qQ ? void 0 : qQ.kind);
        (0, wQ.useEffect)((() => {
          QQ ? IQ && !rQ.current && (rQ.current = !0, (0, OW.q)("daily_drop.shown", "tile")) : rQ.current = !1
        }), [QQ, IQ]), (0, wQ.useEffect)((() => {
          QQ || (VQ(), FQ(!1))
        }), [QQ]);
        const jQ = QQ && null === PQ && !(0, OW.o)(qQ);
        (0, wQ.useEffect)((() => {
          jQ && dQ.b.set({
            openEverythingMenuName: VW.r.CUSTOMISATION
          })
        }), [jQ]);
        const BQ = (0, wQ.useRef)(!1),
          yQ = (0, wQ.useRef)(QQ);

        function VQ() {
          null !== JQ.current && (JQ.current = null, gQ(null))
        }
        return yQ.current = QQ, {
          state: XQ,
          view: qQ,
          claiming: TQ,
          claimFailed: sQ,
          reveal: PQ,
          open: async function() {
            if (!BQ.current) {
              BQ.current = !0, zQ(!0), FQ(!1);
              try {
                const {
                  state: QQ,
                  drop: WQ
                } = await (0, OW.c)();
                if (null === QQ || null === WQ) return;
                if (!yQ.current) return;
                (0, OW.q)("daily_drop.open", WQ), JQ.current = {
                  state: QQ,
                  drop: WQ
                }, gQ(JQ.current)
              } catch (QQ) {
                console.error("Failed to claim the Lucky Skin Block", QQ), yQ.current && FQ(!0)
              } finally {
                BQ.current = !1, zQ(!1)
              }
            }
          },
          closeReveal: VQ
        }
      }(QQ, WQ);
      return {
        shown: (0, OW.o)(qQ.view) || null !== qQ.reveal,
        tile: qQ.state && qQ.view && (0, JQ.jsx)(rs, {
          state: qQ.state,
          view: qQ.view,
          claiming: qQ.claiming,
          onOpen: qQ.open
        }),
        claimFailed: qQ.claimFailed && (0, JQ.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: XQ("dailyDrop:claimFailed")
        }),
        reveal: qQ.reveal && (0, JQ.jsx)(Hs, {
          drop: qQ.reveal.drop,
          onClose: qQ.closeReveal
        })
      }
    }

    function ls(QQ) {
      let {
        show: WQ
      } = QQ;
      const XQ = as(WQ, WQ);
      return WQ && XQ.shown ? (0, JQ.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [XQ.claimFailed, XQ.tile && (0, JQ.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: XQ.tile
        }), XQ.reveal]
      }) : null
    }
    var hs = XQ(2699),
      is = XQ(34557),
      cs = XQ(34568);

    function As(QQ) {
      let {
        view: WQ,
        highlight: XQ,
        scrollSignal: qQ,
        onScrolledIntoView: TQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)(), {
        purchaseUnderWay: FQ,
        notice: PQ,
        needsLogin: gQ,
        buyPack: rQ
      } = (0, cs.d)("banner");
      (0, hs.S)(WQ.arm, "banner");
      const IQ = (0, wQ.useRef)(null);
      return (0, wQ.useEffect)((() => {
        var QQ;
        qQ > 0 && (null === (QQ = IQ.current) || void 0 === QQ || QQ.scrollIntoView({
          block: "nearest"
        }), TQ())
      }), [qQ]), (0, JQ.jsxs)("div", {
        ref: IQ,
        className: "NewPlayerDealBanner",
        children: [(0, JQ.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, JQ.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: sQ("newPlayerDeal:title")
          }), (0, JQ.jsx)(is.d, {
            endsAt: WQ.endsAt
          })]
        }), (0, JQ.jsx)(is.e, {
          view: WQ,
          needsLogin: gQ,
          busy: FQ,
          highlight: XQ,
          onBuy: QQ => {
            rQ(WQ, QQ)
          }
        }), (0, JQ.jsx)(Ts.h, {
          notice: PQ,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    XQ(34562);
    var Rs = XQ(2708);

    function Es(QQ) {
      let {
        wallet: WQ,
        close: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, zQ.C)();
      return (0, JQ.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, JQ.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, JQ.jsx)("span", {
            children: wQ("newPlayerDeal:giftable")
          }), (0, JQ.jsx)(rz.d, {
            amount: (0, tT.b)(WQ)
          }), (0, JQ.jsx)("span", {
            children: wQ("newPlayerDeal:ungiftable")
          }), (0, JQ.jsx)(rz.d, {
            amount: WQ.ungiftable
          })]
        }), (0, JQ.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: wQ("newPlayerDeal:ungiftableWhy")
        }), (0, JQ.jsx)(PQ.s, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: XQ,
          children: wQ("general:ok")
        })]
      })
    }

    function Cs(QQ) {
      jW.NotificationProvider.showCustomPopup({
        body: WQ => (0, JQ.jsx)(Es, {
          wallet: QQ,
          close: WQ
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const us = {
      kind: "board"
    };
    let Ls = !1;

    function ks(QQ) {
      return "found" === QQ.status || "error" === QQ.status && "store:giftRecipientLookupFailed" === QQ.error ? QQ.name : null
    }(0, fQ.v)(kT.prefetchBillingOfferings);
    const fs = (0, wQ.memo)((function(QQ) {
      var WQ;
      let {
        show: qQ
      } = QQ;
      const {
        t: sQ
      } = (0, zQ.C)(), {
        userContext: FQ
      } = (0, jQ.c)(), PQ = (0, SQ.usePurchasesAllowed)(), gQ = FQ !== hQ.NULL_USER_CONTEXT, rQ = KT(FQ), [IQ, BQ] = (0, yQ.d)(), {
        page: VQ,
        urlMode: DQ,
        goTo: pQ
      } = (0, mT.d)(), GQ = function(QQ) {
        return "superRank" === QQ.kind ? "superRank" : "pack" === QQ.kind ? QQ.pack : null
      }(VQ), {
        openEverythingMenuName: UQ,
        gameState: bQ
      } = (0, dQ.n)(["openEverythingMenuName", "gameState"]), vQ = null !== UQ;
      ! function(QQ, WQ) {
        const [qQ] = (0, wQ.useState)(Wz.i), [TQ, zQ] = (0, wQ.useState)(!1);
        qQ && WQ && !TQ && zQ(!0);
        const sQ = (0, iw.A)(),
          FQ = qQ && TQ && QQ && !sQ;
        (0, wQ.useEffect)((() => {
          if (!FQ) return;
          let QQ = null,
            WQ = null,
            wQ = null;
          const qQ = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, ZQ.getBillingClient)().purchaseUnderWay,
            TQ = () => {
              var XQ;
              null === (XQ = wQ) || void 0 === XQ || XQ(), wQ = null, null !== QQ && (clearTimeout(QQ), QQ = null), null !== WQ && (clearTimeout(WQ), WQ = null)
            },
            zQ = () => {
              (0, MT.p)(!1), (0, MT.l)(!1), TQ(), QQ = setTimeout((() => {
                QQ = null, wQ = (0, Qz.e)((() => {
                  wQ = null, qQ() ? zQ() : ((0, MT.p)(!0), WQ = setTimeout((() => {
                    WQ = null, wQ = (0, Qz.e)((() => {
                      wQ = null, qQ() ? zQ() : (0, MT.l)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => XQ(4973))).then((QQ => {
                    QQ.startBackgroundGameSetup()
                  }), (QQ => {
                    console.warn("Background game setup: its chunk failed to load", QQ)
                  })))
                }))
              }), 2e3)
            };
          for (const XQ of Xz) window.addEventListener(XQ, zQ, {
            capture: !0,
            passive: !0
          });
          return zQ(), () => {
            for (const QQ of Xz) window.removeEventListener(QQ, zQ, {
              capture: !0
            });
            TQ(), (0, MT.p)(!1), (0, MT.l)(!1)
          }
        }), [FQ])
      }(qQ && vQ, "pack" === VQ.kind);
      const HQ = "landingPage" === bQ;
      (0, wQ.useEffect)((() => {
        vQ && (0, kT.prefetchBillingOfferings)()
      }), [vQ]), (0, wQ.useEffect)((() => {
        vQ && !qQ && HQ && (0, wz.u)()
      }), [vQ, qQ, HQ]);
      const [aQ, lQ] = (0, wQ.useState)(0), [iQ, cQ] = (0, wQ.useState)(null), [AQ, RQ] = (0, wQ.useState)(null), [EQ, uQ] = (0, wQ.useState)(null), [LQ, kQ] = (0, wQ.useState)(null), [tQ, oQ] = (0, wQ.useState)(0), eQ = (0, wQ.useRef)(null), nQ = (0, wQ.useRef)(null), xQ = (0, wQ.useRef)(null), YQ = (0, wQ.useRef)(!1), NQ = (0, fQ.B)(), OQ = (0, wQ.useRef)(0), KQ = (0, wQ.useRef)(!1);

      function mQ() {
        lQ((QQ => QQ + 1))
      }(0, wQ.useEffect)((() => {
        if (!qQ) return KQ.current = !1, void oQ(0);
        if (Ls = !0, (0, fQ.m)(), NQ && NQ.seq !== OQ.current) {
          var QQ;
          OQ.current = NQ.seq, "loginResume" !== NQ.source && (0, fQ.z)();
          const WQ = (0, fQ.d)(NQ);
          DQ || pQ(WQ), kQ(null !== (QQ = NQ.highlight) && void 0 !== QQ ? QQ : null);
          const XQ = "newPlayerDeal" === NQ.source || "loginResume" === NQ.source && void 0 !== NQ.highlight && (0, hs.d)(FQ).includes(NQ.highlight);
          oQ((QQ => XQ ? QQ + 1 : 0)), RQ(null), "gift" === NQ.mode && NQ.giftRecipientName ? rQ.choose(NQ.giftRecipientName, "prefilled") : "current" !== NQ.mode && rQ.clear(), "gift" !== NQ.mode || NQ.giftRecipientName || mQ(), (0, WW.reportAnalyticsClick)({
            id: "store.open",
            value: NQ.source
          })
        } else KQ.current || (0, WW.reportAnalyticsClick)({
          id: "store.open",
          value: "menuTab"
        });
        KQ.current = !0
      }), [qQ, NQ]);
      const MQ = (0, hs.Q)(),
        QW = null !== LQ && null === MQ && null === (0, hs.h)((0, hs.b)(FQ)) && (0, hs.d)(FQ).includes(LQ);
      (0, wQ.useEffect)((() => {
        if (!LQ) return;
        const QQ = setTimeout((() => {
          kQ(null)
        }), QW ? 15e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [LQ, QW]), (0, wQ.useLayoutEffect)((() => {
        const QQ = eQ.current;
        if (!qQ || !QQ) return nQ.current = null, void(xQ.current = null);
        var WQ;
        if (GQ) nQ.current = GQ, null === (WQ = QQ.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === WQ || WQ.focus();
        else if (nQ.current) {
          const WQ = xQ.current;
          null !== WQ && (QQ.scrollTop = WQ);
          const XQ = QQ.querySelector(`[data-store-item="${nQ.current}"]`);
          if (XQ) {
            const wQ = XQ.getBoundingClientRect(),
              qQ = QQ.getBoundingClientRect();
            XQ.focus({
              preventScroll: null !== WQ && wQ.bottom > qQ.top && wQ.top < qQ.bottom
            })
          }
          nQ.current = null
        }
      }), [GQ, qQ]), (0, wQ.useEffect)((() => {
        RQ(null)
      }), [rQ.query]), (0, wQ.useEffect)((() => {
        if (!EQ) return;
        const QQ = setTimeout((() => {
          uQ(null)
        }), 8e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [EQ]);
      const XW = FQ.superRankInfo,
        wW = FQ.isLoggedIn() || (0, SQ.guestsMayBuy)(),
        qW = FQ.getOwnedCosmeticPacks(),
        TW = (0, YT.o)(rQ.query),
        zW = (0, YT.f)({
          mode: TW,
          loggedIn: gQ ? wW : null,
          superRankInfo: XW,
          now: Date.now(),
          ownedPacks: qW,
          packs: LT.u,
          recipient: rQ.recipient
        });
      (0, wQ.useEffect)((() => {
        if (!wW || !qQ) return;
        const QQ = (0, hs.d)(FQ),
          WQ = (0, fQ.z)((WQ => !QQ.includes(WQ.item))),
          XQ = WQ && (0, YT.m)(WQ, LT.u);
        WQ && XQ && ((0, WW.reportAnalyticsClick)({
          id: "store.login_resume",
          value: WQ.item
        }), (0, fQ.q)(XQ))
      }), [wW, qQ]);
      const sW = qQ && "gift" === TW,
        FW = (0, wQ.useRef)(sW);
      FW.current = sW;
      const PW = "none" !== rQ.recipient.status,
        gW = (0, wQ.useRef)(!1);
      (0, wQ.useEffect)((() => {
        sW ? PW && !gW.current && (gW.current = !0, async function(QQ) {
          var WQ;
          if ("gift" === (null === (WQ = (0, Rs.j)()) || void 0 === WQ ? void 0 : WQ.show)) return void Cs(Rs.c);
          const XQ = await (0, tT.d)();
          null !== XQ && XQ.ungiftable > 0 && QQ() && Cs(XQ)
        }((() => FW.current))) : gW.current = !1
      }), [sW, PW]);
      const JW = (0, YT.q)({
        superRankDaysLeft: zW.superRankDaysLeft,
        openedThisSession: Ls || qQ,
        seenNewItems: (0, fQ.i)()
      });
      (0, wQ.useEffect)((() => {
        (0, fQ.y)(JW)
      }), [JW]);
      const rW = "self" === TW,
        IW = as(qQ, qQ && rW && "board" === VQ.kind);
      if (!qQ || !PQ) return null;
      const jW = BQ > IQ && IQ <= 700,
        BW = !jW && BQ <= 420,
        yW = "gift" === TW ? ks(rQ.recipient) : null,
        VW = null !== iQ;

      function DW(QQ) {
        (0, ST.d)(QQ, "gift" === TW ? rQ.query.trim() : null)
      }

      function pW(QQ, WQ) {
        (0, WW.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${WQ?"gift":"self"}:${QQ}`
        }), WQ && (rQ.recordGift(WQ.name, QQ), GW(WQ))
      }

      function GW(QQ) {
        ! function(QQ) {
          try {
            MW.i.setItem(NT, (0, YT.x)(OT(), QQ))
          } catch {}
        }({
          name: QQ.name,
          cosmetics: QQ.cosmetics
        }), pQ(us), uQ((WQ => {
          var XQ;
          return {
            name: QQ.name,
            seq: (null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.seq) && void 0 !== XQ ? XQ : 0) + 1
          }
        }))
      }
      async function UW(QQ) {
        var WQ, XQ;
        if (YQ.current) return;
        if (!wW) return void DW(QQ);
        RQ(null), kQ(null);
        const wQ = "gift" === TW ? {
          name: ks(rQ.recipient),
          cosmetics: rQ.recipientCosmetics
        } : null;
        if (wQ && !wQ.name) return void mQ();
        const qQ = "superRank" === QQ ? CQ.k.id : (0, CQ.c)(QQ);
        YQ.current = !0;
        const TQ = await (0, xT.c)(qQ, null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.name) && void 0 !== WQ ? WQ : null);
        if (YQ.current = !1, !TQ) return;
        cQ(QQ);
        const zQ = await tT.e.purchase(qQ, null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ.name) && void 0 !== XQ ? XQ : null);
        cQ(null), zQ ? RQ(zQ) : (pW(QQ, wQ), wQ || (await (0, oT.flushClientAnalyticsEvents)(), (0, fT.refreshWithoutConfirmation)("superRank" === QQ ? "/super-rank-welcome" : `/pack-welcome/${QQ}`)))
      }
      const bW = TQ()("Store", {
        StoreGift: "gift" === TW,
        StorePortrait: jW,
        StoreCompact: BW
      });
      if ("pack" === VQ.kind) {
        const QQ = VQ.pack,
          WQ = zW.packs.find((WQ => WQ.pack === QQ));
        return (0, JQ.jsx)("div", {
          ref: eQ,
          className: "CosmeticShopContainer",
          children: (0, JQ.jsx)(nT.f, {
            pack: QQ,
            onBack: () => {
              pQ(us)
            },
            onPurchased: WQ => {
              pW(QQ, WQ ? {
                name: WQ,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === TW && yW && WQ && (0, JQ.jsxs)(JQ.Fragment, {
              children: [(0, JQ.jsx)(iz, {
                state: WQ.state,
                item: QQ,
                price: (vW = QQ, "superRank" === vW ? CQ.k.price : (0, CQ.f)(vW)),
                busy: VW,
                onAct: () => {
                  UW(QQ)
                },
                onNeedRecipient: () => {
                  pQ(us), mQ()
                },
                onLogin: () => {
                  DW(QQ)
                },
                highlight: LQ === QQ
              }), AQ && (0, JQ.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: sQ(AQ)
              })]
            }),
            ownedPacks: qW,
            startAsGift: "gift" === TW,
            initialGiftRecipient: "gift" === TW ? null !== yW && void 0 !== yW ? yW : rQ.query.trim() : "",
            highlightCta: LQ === QQ
          }, QQ)
        })
      }
      var vW;
      return "superRank" === VQ.kind ? (0, JQ.jsx)("div", {
        ref: eQ,
        className: TQ()(bW, "StoreDetailView"),
        children: (0, JQ.jsx)(Qs, {
          state: zW.superRank.state,
          mode: TW,
          giftName: yW,
          busy: VW,
          highlight: "superRank" === LQ,
          purchaseError: AQ,
          onBack: () => {
            pQ(us)
          },
          onChooseRecipient: () => {
            pQ(us), mQ()
          },
          onAct: () => {
            UW("superRank")
          },
          onLogin: () => {
            DW("superRank")
          }
        })
      }) : (0, JQ.jsxs)("div", {
        ref: eQ,
        className: bW,
        onScroll: QQ => {
          xQ.current = QQ.currentTarget.scrollTop
        },
        children: [(0, JQ.jsx)("div", {
          className: "StoreTopRow",
          children: (0, JQ.jsx)(gz, {
            selfName: gQ ? FQ.getPlayerName() : "",
            giftRecipient: rQ,
            suggestionsVersion: null !== (WQ = null === EQ || void 0 === EQ ? void 0 : EQ.seq) && void 0 !== WQ ? WQ : 0,
            pulseSignal: aQ,
            disabled: VW || !gQ
          })
        }), EQ && (0, JQ.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            uQ(null)
          },
          children: [(0, JQ.jsx)(eT.d, {
            showSignal: EQ.seq
          }), YT.d, " ", sQ("store:giftSent", {
            name: EQ.name
          })]
        }, EQ.seq), !EQ && AQ && (0, JQ.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: sQ(AQ)
        }), rW && IW.claimFailed, (0, JQ.jsx)(Mz, {
          layout: zW,
          mountAtOnce: null !== nQ.current,
          bundleGift: "gift" === TW ? {
            recipientName: yW,
            lookingUp: "pending" === rQ.recipient.status,
            busy: VW,
            onNeedRecipient: mQ,
            onSent: QQ => {
              (0, WW.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), GW({
                name: QQ,
                cosmetics: rQ.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, YT.s)(XW),
          busy: VW,
          highlightItem: LQ,
          onOpen: function(QQ) {
            (0, WW.reportAnalyticsClick)({
              id: "store.item_open",
              value: QQ
            }), pQ((0, fQ.f)(QQ))
          },
          onAct: UW,
          onNeedRecipient: mQ,
          onLogin: DW,
          dailyDropTile: rW && IW.tile,
          dealBanner: "self" === TW && null !== MQ && (0, JQ.jsx)(As, {
            view: MQ,
            highlight: LQ,
            scrollSignal: tQ,
            onScrolledIntoView: () => {
              oQ(0)
            }
          })
        }), "gift" !== TW && (0, JQ.jsx)(Fs, {}), IW.reveal]
      })
    }));
    var Ss = XQ(2835),
      ts = XQ(9202),
      os = XQ(9048),
      es = XQ(2971),
      ns = XQ(2743),
      xs = XQ(2792),
      Ys = XQ(2798),
      Ns = XQ(2803),
      Zs = XQ(2898),
      Os = XQ(2879),
      Ks = XQ(2442),
      ms = XQ(2496),
      Ms = XQ(2453),
      QF = XQ(2104),
      WF = XQ(2811),
      XF = XQ(2503);

    function wF(QQ) {
      let {
        show: WQ
      } = QQ;
      return WQ ? (0, JQ.jsx)(qF, {}) : null
    }

    function qF() {
      const {
        t: QQ
      } = (0, zQ.C)(), {
        followsLeader: WQ
      } = (0, ns.d)(), {
        loading: XQ,
        friends: qQ,
        requests: FQ,
        invites: gQ
      } = (0, eQ.j)(), {
        userContext: rQ
      } = (0, jQ.c)(), [IQ, BQ] = (0, wQ.useState)(XF.l);
      (0, wQ.useEffect)((() => {
        (0, XF.e)()
      }), []);
      const yQ = FQ.map((QQ => QQ.name)),
        {
          state: VQ,
          recentRequesters: DQ
        } = (0, Os.r)(),
        pQ = new Map([...("loaded" === VQ.status ? VQ.recentPlayers : []).map((QQ => [QQ.preview.name, QQ])), ...DQ.map((QQ => [QQ.name, QQ]))]),
        GQ = (0, wQ.useRef)(null),
        [vQ, dQ] = (0, wQ.useState)(""),
        [HQ, aQ] = (0, wQ.useState)("Enter"),
        [lQ, hQ] = (0, wQ.useState)(null);

      function iQ() {
        vQ && (aQ("Loading"), (0, Ms.k)(vQ, "social_menu").then((QQ => {
          if (GQ.current) switch (QQ.kind) {
            case "sent":
              aQ("Success");
              break;
            case "becameFriends":
              aQ("BecameFriends");
              break;
            case "failed":
              hQ(QQ.message), aQ("Error")
          }
        })))
      }
      return (0, wQ.useEffect)((() => {
        if ("Enter" === HQ || "Loading" === HQ) return;
        const QQ = setTimeout((() => {
          GQ.current.value = "", dQ(""), aQ("Enter")
        }), "Success" === HQ ? 1e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [HQ]), (0, JQ.jsx)("div", {
        className: "SocialMenu",
        children: (0, JQ.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, JQ.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, JQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, JQ.jsx)(Ns.b, {
                label: QQ("socialBar:addFriend")
              }), (0, JQ.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, JQ.jsxs)("div", {
                  className: TQ()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${HQ}`]: !0
                  }),
                  children: ["Loading" === HQ && (0, JQ.jsx)(bQ.e, {}), "Success" === HQ && (0, JQ.jsx)(sQ.d, {
                    name: "check"
                  }), "BecameFriends" === HQ && (0, JQ.jsx)(JQ.Fragment, {
                    children: QQ("socialBar:nowFriends", {
                      playerName: vQ
                    })
                  }), "Error" === HQ && lQ && (0, JQ.jsx)(JQ.Fragment, {
                    children: QQ(lQ.translationKey, lQ.params)
                  })]
                }), (0, JQ.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, JQ.jsx)(UQ.e, {
                    className: "PlayerSearchInput",
                    placeholderText: QQ("socialBar:enterPlayerName"),
                    domRef: GQ,
                    onValueChange: QQ => {
                      dQ((0, RQ.t)(QQ)), GQ.current.value = (0, RQ.t)(QQ)
                    },
                    onEnter: () => {
                      vQ && (0, WW.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), iQ()
                    }
                  }), (0, JQ.jsxs)(PQ.h, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      iQ()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, JQ.jsx)(sQ.d, {
                      name: "user-plus"
                    }), " ", QQ("socialBar:sendRequest")]
                  })]
                })]
              }), (0, JQ.jsx)(WF.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), gQ.length > 0 && (0, JQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, JQ.jsx)(Ns.b, {
                label: QQ("socialBar:invites"),
                meta: gQ.length
              }), gQ.map((WQ => (0, JQ.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, JQ.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, JQ.jsx)(Ks.c, {
                    invite: WQ
                  })
                }), (0, JQ.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, JQ.jsx)(Ks.f, {
                    invite: WQ
                  })
                }), (0, JQ.jsx)(PQ.s, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, ms.f)(WQ)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${WQ.destination.kind}`
                  },
                  children: QQ("general:join")
                }), (0, JQ.jsx)(mQ.e, {
                  tooltipInner: (0, JQ.jsx)(JQ.Fragment, {
                    children: QQ("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, JQ.jsx)(PQ.l, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === IQ || void 0 === IQ ? void 0 : IQ.kind) && IQ.inviteId === WQ.id,
                    onClick: () => {
                      eQ.d.declineInvite(WQ.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${WQ.destination.kind}`
                    },
                    children: (0, JQ.jsx)(sQ.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, WQ.id)))]
            }), (0, JQ.jsxs)("div", {
              className: TQ()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !XQ && 0 === FQ.length
              }),
              children: [(0, JQ.jsx)(Ns.b, {
                label: (0, JQ.jsxs)(JQ.Fragment, {
                  children: [(0, JQ.jsx)(sQ.d, {
                    name: QF.d
                  }), " ", QQ("socialBar:requests")]
                }),
                meta: (0, JQ.jsxs)(JQ.Fragment, {
                  children: [FQ.length, FQ.length === MQ.k && (0, JQ.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: QQ("socialBar:limitReached")
                  })]
                })
              }), XQ && (0, JQ.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, JQ.jsx)(bQ.e, {})
              }), !XQ && 0 === FQ.length && (0, JQ.jsx)("div", {
                className: "SocialMenuEmpty",
                children: QQ("socialBar:noFriendRequests")
              }), !XQ && FQ.length > 0 && (0, JQ.jsx)("div", {
                className: "PlayerRows",
                children: (0, JQ.jsx)(tq.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [FQ],
                  children: FQ.map(((WQ, XQ) => {
                    const wQ = pQ.get(WQ.name);
                    return (0, JQ.jsxs)(Ys.g, {
                      playerSocialPreview: WQ,
                      zIndex: FQ.length - XQ,
                      padDefaultFocus: (0, XF.k)(IQ, WQ.name, XQ),
                      status: wQ && (0, JQ.jsx)(Zs.c, {
                        gameNameWithVariation: wQ.gameNameWithVariation,
                        isPrivateLobby: wQ.isPrivateLobby
                      }),
                      children: [(0, JQ.jsx)(mQ.e, {
                        tooltipInner: (0, JQ.jsx)(JQ.Fragment, {
                          children: QQ("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, JQ.jsx)(PQ.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            BQ((0, XF.g)(yQ, XQ)), (0, Ms.h)(WQ.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, JQ.jsx)(sQ.d, {
                            name: "check"
                          })
                        })
                      }), (0, JQ.jsx)(mQ.e, {
                        tooltipInner: (0, JQ.jsx)(JQ.Fragment, {
                          children: QQ("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, JQ.jsx)(PQ.l, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            BQ((0, XF.g)(yQ, XQ)), (0, Ms.h)(WQ.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, JQ.jsx)(sQ.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${WQ.name}_${WQ.isError}`)
                  }))
                })
              })]
            }), (0, JQ.jsx)(Zs.h, {})]
          }), (0, JQ.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, JQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, JQ.jsx)(Ns.b, {
                label: QQ("socialBar:party")
              }), (0, JQ.jsx)(xs.c, {})]
            }), (0, JQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, JQ.jsx)(Ns.b, {
                label: (0, JQ.jsxs)(JQ.Fragment, {
                  children: [(0, JQ.jsx)(sQ.d, {
                    name: QF.b
                  }), " ", QQ("socialBar:friends")]
                }),
                meta: (0, JQ.jsxs)(JQ.Fragment, {
                  children: [qQ.length, qQ.length >= (0, MQ.b)(rQ.getPlayerRanks()) && (0, JQ.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: QQ("socialBar:limitReached")
                  })]
                })
              }), XQ && (0, JQ.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, JQ.jsx)(bQ.e, {})
              }), !XQ && 0 === qQ.length && (0, JQ.jsx)("div", {
                className: "SocialMenuEmpty",
                children: QQ("socialBar:noFriends")
              }), !XQ && qQ.length > 0 && (0, JQ.jsx)("div", {
                className: "PlayerRows",
                children: (0, JQ.jsx)(tq.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [qQ],
                  children: qQ.map(((QQ, XQ) => (0, JQ.jsx)(Ys.g, {
                    playerSocialPreview: QQ,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: QQ => {
                      eQ.d.removeFriendFromState(QQ)
                    },
                    zIndex: qQ.length - XQ,
                    children: (0, JQ.jsx)(Ys.d, {
                      friend: QQ,
                      followsLeader: WQ,
                      analyticsSurface: "social_menu"
                    })
                  }, `${QQ.name}_${QQ.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var TF = XQ(2647),
      zF = XQ(5025);
    const sF = QQ => {
        let {
          action: WQ,
          padAction: XQ
        } = QQ;
        const {
          isTouchScreen: wQ
        } = (0, dQ.n)(["isTouchScreen"]), qQ = (0, iw.A)();
        return wQ && !qQ ? null : (0, JQ.jsx)(bw.b, {
          className: "EverythingMenuTabKey",
          noaAction: WQ,
          padHidesKey: !0,
          padMenuShortcut: XQ
        })
      },
      FF = (0, wQ.memo)((function() {
        const {
          t: QQ
        } = (0, zQ.C)(), {
          gameState: WQ,
          openEverythingMenuName: XQ,
          crosshairGameView: qQ
        } = (0, dQ.n)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: sQ
        } = (0, jQ.c)(), FQ = (0, SQ.usePurchasesAllowed)(), gQ = (0, fQ.D)(), {
          view: rQ
        } = (0, OW.v)(), IQ = "dot" === gQ || null === gQ && "ready" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind), BQ = (QQ, WQ) => (0, JQ.jsx)(sF, {
          action: QQ,
          padAction: WQ
        }), [yQ, DQ] = (0, wQ.useState)(null), pQ = (0, wQ.useRef)(null), GQ = {
          ..."inGame" === WQ ? {} : (0, PQ.ab)({
            focusOnClick: !1
          }),
          ...ow.f
        }, UQ = QQ => {
          const WQ = (0, ew.g)((WQ => {
            (0, PQ.Z)(WQ.currentTarget), dQ.b.set({
              openEverythingMenuName: QQ
            })
          }), "pointerup");
          return {
            ...GQ,
            onPointerDown: QQ => {
              GQ.onPointerDown(QQ), WQ.onPointerDown(QQ)
            },
            onPointerUp: QQ => {
              GQ.onPointerUp(QQ), WQ.onPointerUp(QQ)
            },
            onClick: WQ.onClick
          }
        }, bQ = null !== XQ, vQ = XQ !== VW.r.COSMETIC_SHOP && !qQ;
        async function HQ() {
          await async function() {
            if (!yQ) return;
            await yQ(), DQ(null)
          }(), dQ.b.set({
            openEverythingMenuName: null
          })
        }
        const aQ = (0, wQ.useRef)(null),
          hQ = (0, wQ.useCallback)((() => null !== aQ.current && (0, os.e)(aQ.current)), []);

        function iQ() {
          hQ() || HQ()
        }(0, wQ.useEffect)((() => (0, cT.v)(hQ)), [hQ]);
        const cQ = (0, wQ.useMemo)((() => "inGame" === WQ ? {
            text: QQ("settingsMenu:exitGame"),
            onClick: () => {
              (0, ts.c)()
            }
          } : (0, lQ.isDiscordClient)() ? {
            text: QQ("settingsMenu:exitGame"),
            onClick: () => {
              yW.m.discordActivity().then((QQ => {
                QQ.exit("User exited the game")
              }))
            }
          } : null), [WQ, QQ]),
          AQ = bQ && !qQ,
          RQ = (0, wQ.useRef)(null);
        ! function(QQ, WQ) {
          (0, wQ.useEffect)((() => {
            var XQ;
            const wQ = (0, zF.d)();
            if (!WQ || null === wQ || !(0, zF.b)({
                site: lQ.siteUsed,
                isMobileApp: (0, VQ.isMobileApp)(),
                isTouchScreen: dQ.b.get("isTouchScreen")
              })) return;
            const qQ = null === (XQ = QQ.current) || void 0 === XQ ? void 0 : XQ.querySelector(".EverythingMenuBackButton");
            return qQ ? wQ(qQ) : void 0
          }), [QQ, WQ])
        }(RQ, AQ && !(0, cT.m)(XQ) && "inGame" === WQ);
        const EQ = (0, JQ.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: iQ,
          children: (0, JQ.jsx)(PQ.o, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, JQ.jsx)(nw.c, {
          showing: bQ,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: XQ === VW.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === WQ,
          children: (0, JQ.jsx)(Yw.c, {
            className: "EverythingMenuContainer",
            show: AQ,
            children: (0, JQ.jsx)(xw.b, {
              close: iQ,
              togglePointerLock: !1,
              children: (0, JQ.jsxs)("div", {
                className: "EverythingMenu",
                ref: RQ,
                children: [!(0, cT.m)(XQ) && (0, JQ.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, JQ.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [cQ && (0, JQ.jsx)(PQ.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        cQ.onClick()
                      },
                      children: cQ.text
                    }), bQ && FQ && (0, JQ.jsx)("div", {
                      ...GQ,
                      className: "EverythingMenuWallet",
                      title: QQ("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, fQ.q)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, JQ.jsx)(Ss.g, {})
                    })]
                  }), (0, JQ.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, JQ.jsxs)("div", {
                      ...UQ(VW.r.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": XQ === VW.r.SETTINGS ? "true" : void 0,
                      className: TQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: XQ === VW.r.SETTINGS
                      }),
                      children: [QQ("general:settings"), BQ("OpenSettings", "pause")]
                    }), (0, JQ.jsxs)("div", {
                      ...UQ(VW.r.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": XQ === VW.r.CUSTOMISATION ? "true" : void 0,
                      className: TQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: XQ === VW.r.CUSTOMISATION
                      }),
                      children: [QQ("general:player"), BQ("OpenCharacterCustomization")]
                    }), VQ.featureFlags.useSocialFeatures && (0, JQ.jsxs)("div", {
                      ...UQ(VW.r.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": XQ === VW.r.SOCIAL ? "true" : void 0,
                      className: TQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: XQ === VW.r.SOCIAL
                      }),
                      ...(0, WW.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, XQ === VW.r.SOCIAL),
                      children: [QQ("socialBar:social"), (0, JQ.jsx)(TF.e, {})]
                    }), (0, OW.o)(rQ) && (0, JQ.jsxs)("div", {
                      ...UQ(VW.r.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": XQ === VW.r.COSMETIC_SHOP ? "true" : void 0,
                      className: TQ()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: XQ === VW.r.COSMETIC_SHOP
                      }),
                      children: [(0, JQ.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: QQ("store:title")
                      }), "new" === gQ && (0, JQ.jsx)(Sz, {}), IQ && (0, JQ.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === WQ && (0, JQ.jsxs)("div", {
                      ...UQ(VW.r.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": XQ === VW.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: TQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: XQ === VW.r.LOBBY_LEADERBOARD
                      }),
                      children: [QQ("general:lobby"), BQ("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, JQ.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: EQ
                  })]
                }), (0, cT.m)(XQ) && EQ, (0, JQ.jsxs)("div", {
                  ref: aQ,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === WQ ? "0.85" : "1"
                  },
                  children: [(0, JQ.jsx)(uw, {
                    show: XQ === VW.r.SETTINGS,
                    setBeforeResumeCallback: DQ
                  }), (0, JQ.jsx)(tw, {
                    show: XQ === VW.r.CUSTOMISATION
                  }), (0, JQ.jsx)(wQ.Suspense, {
                    fallback: null,
                    children: (0, JQ.jsx)(UT, {
                      show: XQ === VW.r.SHOP
                    })
                  }), (0, JQ.jsx)(CT, {
                    show: XQ === VW.r.LOBBY_LEADERBOARD
                  }), FQ && (0, JQ.jsx)(fs, {
                    show: XQ === VW.r.COSMETIC_SHOP
                  }), !FQ && (0, JQ.jsx)(ls, {
                    show: XQ === VW.r.COSMETIC_SHOP
                  }), (0, JQ.jsx)(wF, {
                    show: XQ === VW.r.SOCIAL
                  })]
                }), !(0, VQ.isMobileApp)() && (0, Nw.d)(sQ.getPlayerRanks()) && (0, JQ.jsx)(Yw.c, {
                  ref: pQ,
                  className: "EverythingMenuBannerDiv",
                  show: vQ,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, JQ.jsx)(es.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: pQ
                    },
                    showing: bQ && vQ,
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
  34557: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => jQ,
      e: () => yQ
    });
    XQ(34562);
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1226),
      sQ = XQ(1507),
      FQ = XQ(2726),
      PQ = XQ(1094),
      gQ = XQ(2329),
      JQ = XQ(3336),
      rQ = XQ(2366),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        endsAt: WQ,
        className: XQ
      } = QQ;
      return (0, IQ.jsxs)("span", {
        className: TQ()("NewPlayerDealClock", XQ),
        children: [(0, IQ.jsx)(PQ.d, {
          name: "hourglass"
        }), (0, IQ.jsx)(FQ.h, {
          toTime: WQ
        })]
      })
    }

    function BQ(QQ) {
      let {
        offered: WQ,
        needsLogin: XQ,
        busy: wQ,
        highlight: qQ,
        onBuy: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, zQ.C)(), {
        pack: jQ
      } = WQ, BQ = (0, JQ.i)(WQ.package);
      return (0, IQ.jsxs)("div", {
        className: TQ()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: qQ
        }),
        children: [(0, IQ.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, IQ.jsx)("img", {
            src: rQ.d[WQ.tier],
            alt: "",
            draggable: !1
          }), (0, IQ.jsx)("span", {
            className: "NewPlayerDealTag",
            children: PQ("newPlayerDeal:tag")
          })]
        }), (0, IQ.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, IQ.jsx)(gQ.d, {
            className: "NewPlayerDealPackAmount",
            amount: jQ.gems
          })
        }), (0, IQ.jsx)(sQ.s, {
          className: "NewPlayerDealBuy",
          loading: wQ,
          onClick: FQ,
          ariaLabel: PQ("newPlayerDeal:buyLabel", {
            amount: jQ.gems.toLocaleString(),
            price: BQ
          }),
          children: PQ(XQ ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: BQ
          })
        })]
      })
    }

    function yQ(QQ) {
      let {
        view: WQ,
        needsLogin: XQ,
        busy: qQ,
        highlight: sQ,
        onBuy: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, zQ.C)();
      return (0, IQ.jsxs)("div", {
        className: TQ()("NewPlayerDealPacks", WQ.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [WQ.packs.map(((QQ, WQ) => (0, IQ.jsxs)(wQ.Fragment, {
          children: [WQ > 0 && (0, IQ.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, IQ.jsx)("i", {})
          }), (0, IQ.jsx)(BQ, {
            offered: QQ,
            needsLogin: XQ,
            busy: qQ,
            highlight: sQ === QQ.pack.packageId,
            onBuy: () => {
              FQ(QQ)
            }
          })]
        }, QQ.pack.packageId))), (0, IQ.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, IQ.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: PQ("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34568: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => HQ,
      d: () => lQ
    });
    XQ(34562);
    var wQ = XQ(3330),
      qQ = XQ(1532),
      TQ = XQ(2359),
      zQ = XQ(3320),
      sQ = XQ(3294),
      FQ = XQ(3322),
      PQ = XQ(3276),
      gQ = XQ(1226),
      JQ = XQ(1404),
      rQ = XQ(1162),
      IQ = XQ(1507),
      jQ = XQ(1094),
      BQ = XQ(2329),
      yQ = XQ(2841),
      VQ = XQ(2699),
      DQ = XQ(2708),
      pQ = XQ(2716),
      GQ = XQ(1145);
    const UQ = new FQ.e(PQ.getBillingClient, PQ.addPurchaseRecordListener);
    let bQ = !1;

    function vQ(QQ, WQ) {
      null !== QQ && (0, VQ.o)(QQ) || ((0, qQ.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${WQ.pack.packageId}`
      }), null !== QQ && (0, VQ.u)(QQ), HQ(WQ.pack.gems))
    }

    function dQ(QQ, WQ, XQ) {
      const qQ = (0, VQ.b)(WQ);
      switch (QQ.kind) {
        case "completed":
          vQ(qQ, XQ);
          break;
        case "pending":
          TQ = QQ.intentId, zQ = () => {
            yQ.e.refresh(), vQ(qQ, XQ)
          }, bQ || (bQ = !0, UQ.listen()), UQ.follow(TQ, zQ);
          break;
        case "unknownPackage":
          (0, VQ.O)(WQ, null);
          break;
        case "failed":
          QQ.errorKey === wQ.e.newPlayerDealUnavailable && (0, VQ.O)(WQ, null)
      }
      var TQ, zQ
    }

    function HQ(QQ) {
      JQ.NotificationProvider.showCustomPopup({
        body: WQ => (0, GQ.jsx)(aQ, {
          gems: QQ,
          close: WQ
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function aQ(QQ) {
      let {
        gems: WQ,
        close: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, gQ.C)();
      return (0, GQ.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, GQ.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, GQ.jsx)(jQ.d, {
            name: "circle-check"
          }), (0, GQ.jsx)(BQ.d, {
            amount: WQ
          }), (0, GQ.jsx)("span", {
            children: wQ("newPlayerDeal:added")
          })]
        }), (0, GQ.jsx)(IQ.s, {
          className: "NewPlayerDealAddedOk",
          onClick: XQ,
          children: wQ("general:ok")
        })]
      })
    }

    function lQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.d;
      const {
        userContext: XQ
      } = (0, rQ.c)(), {
        purchaseUnderWay: wQ,
        notice: qQ,
        buy: FQ
      } = (0, sQ.b)(WQ), PQ = (0, DQ.j)(), gQ = XQ.mayBuy() || (0, TQ.guestsMayBuy)(), JQ = null === PQ ? !gQ : PQ.guest && !XQ.isLoggedIn();
      return {
        purchaseUnderWay: wQ,
        notice: qQ,
        needsLogin: JQ,
        buyPack: function(wQ, qQ) {
          (0, VQ.F)("new_player_deal.buy", (0, pQ.e)(wQ.arm, QQ, qQ.pack.packageId)), null === PQ ? FQ(function(QQ) {
            return {
              sku: QQ.pack.packageId,
              tier: QQ.tier,
              amount: QQ.pack.gems,
              bonusPercent: 0,
              package: QQ.package
            }
          }(qQ), null, {
            followPending: !1
          }).then((QQ => {
            dQ(QQ, XQ, qQ)
          })) : JQ ? WQ(qQ.pack.packageId, null) : vQ((0, VQ.b)(XQ), qQ)
        }
      }
    }
  },
  5241: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => yQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(4958),
      zQ = XQ(1226),
      sQ = XQ(1094),
      FQ = XQ(1507),
      PQ = XQ(1548),
      gQ = XQ(1404),
      JQ = XQ(2614),
      rQ = XQ(1145);
    const IQ = {
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

    function jQ(QQ) {
      let {
        platform: WQ
      } = QQ;
      const XQ = "youtube" === WQ;
      return (0, rQ.jsxs)("span", {
        className: qQ()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: XQ
        }),
        children: [XQ && (0, rQ.jsx)(JQ.c, {
          variant: "white"
        }), !XQ && (0, rQ.jsx)(sQ.d, {
          name: IQ[WQ].icon,
          kit: "brands"
        })]
      })
    }

    function BQ(QQ) {
      let {
        platform: WQ,
        link: XQ,
        editable: wQ,
        userContext: qQ,
        onLinksUpdated: JQ
      } = QQ;
      const {
        t: BQ
      } = (0, zQ.C)(), yQ = IQ[WQ];
      if (!XQ && !wQ) return null;

      function VQ() {
        var QQ;
        if (!qQ || !JQ) return;
        gQ.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yQ.name
            }
          },
          prefixText: TQ.t[WQ],
          placeholderText: "playBloxd",
          initialValue: null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.handle) && void 0 !== QQ ? QQ : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: XQ ? "general:remove" : void 0
        }).getResult().then((async QQ => {
          if ("notificationTornDown" !== QQ && null !== QQ) try {
            "submit" === QQ.type ? await PQ.e.setSocialLink(qQ, WQ, QQ.value) : await PQ.e.clearSocialLink(qQ, WQ), JQ()
          } catch (XQ) {
            console.error("Failed to update social link", XQ), gQ.NotificationProvider.showAlertPopup({
              title: XQ.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (XQ) {
        const QQ = `@${XQ.handle}`;
        return (0, rQ.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yQ.color
          },
          href: XQ.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, rQ.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, rQ.jsx)(jQ, {
              platform: WQ
            }), (0, rQ.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, rQ.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: QQ
              })
            })]
          }), wQ && (0, rQ.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, FQ.ab)({
              stopPropagation: !0
            }),
            onClick: QQ => {
              QQ.stopPropagation(), QQ.preventDefault(), VQ()
            },
            children: (0, rQ.jsx)(sQ.d, {
              name: "pen-to-square"
            })
          }), !wQ && (0, rQ.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, rQ.jsx)(sQ.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, rQ.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yQ.color
        },
        ...(0, FQ.ab)(),
        onClick: () => {
          VQ()
        },
        children: [(0, rQ.jsx)(jQ, {
          platform: WQ
        }), (0, rQ.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, rQ.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yQ.name
          }), (0, rQ.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: BQ("homePage:profileSocialLinkAdd")
          })]
        }), (0, rQ.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, rQ.jsx)(sQ.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yQ(QQ) {
      let {
        socialLinks: WQ,
        editable: XQ = !1,
        userContext: wQ,
        onLinksUpdated: qQ
      } = QQ;
      if (!XQ && 0 === WQ.length) return null;
      const zQ = new Map(WQ.map((QQ => [QQ.platform, QQ]))),
        sQ = XQ ? TQ.s : WQ.map((QQ => QQ.platform));
      return (0, rQ.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, rQ.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: sQ.map((QQ => (0, rQ.jsx)(BQ, {
            platform: QQ,
            link: zQ.get(QQ),
            editable: XQ,
            userContext: wQ,
            onLinksUpdated: qQ
          }, QQ)))
        })
      })
    }
  },
  34554: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(3699);

    function TQ() {
      const [QQ, WQ] = (0, wQ.useState)(!1);
      return (0, wQ.useLayoutEffect)((() => {
        let QQ = !0;
        return (0, qQ.e)().then((() => {
          QQ && WQ(!0)
        })), () => {
          QQ = !1
        }
      }), []), QQ
    }
  },
  34480: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => BQ,
      f: () => jQ
    });
    XQ(34485);
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(34471);

    function sQ(QQ, WQ) {
      return Math.max(1, Math.round(QQ * WQ))
    }

    function FQ(QQ, WQ) {
      const XQ = WQ * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        wQ = function(QQ, WQ) {
          if (QQ.lines) return sQ(QQ.lineThickness, WQ) % 2;
          if (QQ.dot) return sQ(QQ.dotSize, WQ) % 2;
          return PQ(QQ, WQ) % 2
        }(QQ, WQ),
        qQ = gQ(QQ.lineThickness * XQ, wQ),
        TQ = sQ(QQ.lineLength, XQ),
        zQ = Math.round(QQ.gap * XQ),
        FQ = QQ.outline > 0 ? sQ(QQ.outline, XQ) : 0,
        rQ = [];
      if (QQ.lines && (rQ.push({
          x: qQ + zQ,
          y: 0,
          w: TQ,
          h: qQ,
          arm: "right"
        }), rQ.push({
          x: -zQ - TQ,
          y: 0,
          w: TQ,
          h: qQ,
          arm: "left"
        }), rQ.push({
          x: 0,
          y: qQ + zQ,
          w: qQ,
          h: TQ,
          arm: "down"
        }), QQ.tStyle || rQ.push({
          x: 0,
          y: -zQ - TQ,
          w: qQ,
          h: TQ,
          arm: "up"
        }), 0 === zQ && rQ.push({
          x: 0,
          y: 0,
          w: qQ,
          h: qQ
        })), QQ.dot) {
        const WQ = gQ(QQ.dotSize * XQ, wQ),
          TQ = QQ.lines && 0 === zQ && QQ.dotSize > QQ.lineThickness ? Math.max(WQ, qQ + 2) : WQ,
          sQ = (qQ - TQ) / 2;
        rQ.push({
          x: sQ,
          y: sQ,
          w: TQ,
          h: TQ
        })
      }
      const IQ = rQ.map((QQ => ({
        ...QQ,
        x: QQ.x - FQ,
        y: QQ.y - FQ,
        w: QQ.w + 2 * FQ,
        h: QQ.h + 2 * FQ
      })));
      let jQ = null,
        BQ = null;
      if (QQ.circle) {
        const WQ = sQ(QQ.circleThickness, XQ),
          TQ = function(QQ, WQ) {
            return QQ + (QQ % 2 === WQ ? 0 : 1)
          }(PQ(QQ, XQ), wQ),
          zQ = (qQ - TQ) / 2;
        jQ = JQ(zQ, TQ, WQ), FQ > 0 && (BQ = JQ(zQ - FQ, TQ + 2 * FQ, WQ + 2 * FQ))
      }
      return {
        cell: qQ,
        fills: rQ,
        outlines: FQ > 0 ? IQ : [],
        ring: jQ,
        ringOutline: BQ
      }
    }

    function PQ(QQ, WQ) {
      return Math.round(QQ.circleRadius * WQ * 2 + sQ(QQ.circleThickness, WQ))
    }

    function gQ(QQ, WQ) {
      return Math.max(2 - WQ, 2 * Math.round((QQ - WQ) / 2) + WQ)
    }

    function JQ(QQ, WQ, XQ) {
      const wQ = 2 * XQ >= WQ - 1;
      return {
        x: QQ,
        y: QQ,
        size: WQ,
        border: Math.min(XQ, Math.floor(WQ / 2)),
        filled: wQ
      }
    }
    var rQ = XQ(1145);
    const IQ = 1.4;

    function jQ(QQ, WQ) {
      return QQ && WQ ? `scale(${IQ})` : "scale(1)"
    }

    function BQ(QQ) {
      return "classic" === QQ.settings.style ? (0, rQ.jsx)(DQ, {
        ...QQ
      }) : (0, rQ.jsx)(HQ, {
        ...QQ
      })
    }
    const yQ = .125;

    function VQ(QQ, WQ) {
      const XQ = {};
      if (QQ.color !== zQ.h.color && (XQ.color = (0, zQ.l)(QQ.color)), QQ.opacity !== zQ.h.opacity && (XQ.opacity = QQ.opacity / 100), QQ.outline !== zQ.h.outline || QQ.outlineColor !== zQ.h.outlineColor) {
        const WQ = QQ.outline,
          wQ = (0, zQ.l)(QQ.outlineColor);
        XQ.textShadow = WQ > 0 ? `-${WQ}px 0 ${wQ}, 0 ${WQ}px ${wQ}, ${WQ}px 0 ${wQ}, 0 -${WQ}px ${wQ}` : "none"
      }
      if (QQ.size !== zQ.h.size) {
        const wQ = QQ.size / 100;
        XQ.fontSize = WQ ? `calc(max(1.3rem, 18px) * ${wQ})` : `calc(1.3rem * ${wQ})`, XQ.marginTop = `-${yQ}em`, XQ.transformOrigin = `50% calc(50% + ${yQ}em)`
      }
      return XQ
    }

    function DQ(QQ) {
      let {
        settings: WQ,
        touch: XQ,
        inPreview: wQ,
        inEditor: TQ,
        pressed: zQ = !1,
        pressRef: sQ
      } = QQ;
      return (0, rQ.jsx)("div", {
        className: qQ()("Crosshair", {
          Touch: XQ,
          CrosshairInPreview: wQ,
          CrosshairInEditor: TQ || wQ
        }),
        ref: sQ,
        style: {
          transform: jQ(zQ, WQ.growOnClick),
          ...VQ(WQ, XQ)
        },
        children: "+"
      })
    }

    function pQ(QQ, WQ) {
      return QQ / WQ + "px"
    }

    function GQ(QQ, WQ, XQ, wQ) {
      return {
        ...vQ(QQ, WQ, XQ),
        width: pQ(QQ.w, XQ),
        height: pQ(QQ.h, XQ),
        background: wQ
      }
    }

    function UQ(QQ, WQ, XQ) {
      return {
        left: pQ(QQ.x, WQ),
        top: pQ(QQ.y, WQ),
        width: pQ(QQ.size, WQ),
        height: pQ(QQ.size, WQ),
        borderWidth: pQ(QQ.border, WQ),
        borderColor: XQ,
        background: QQ.filled ? XQ : void 0
      }
    }
    const bQ = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function vQ(QQ, WQ, XQ) {
      const [wQ, qQ] = QQ.arm ? bQ[QQ.arm] : [0, 0], TQ = Math.round(WQ * XQ);
      return {
        left: pQ(QQ.x + wQ * TQ, XQ),
        top: pQ(QQ.y + qQ * TQ, XQ)
      }
    }

    function dQ(QQ) {
      return QQ.arm ? {
        "data-arm": QQ.arm,
        "data-x": QQ.x,
        "data-y": QQ.y
      } : {}
    }

    function HQ(QQ) {
      let {
        settings: WQ,
        inPreview: XQ,
        inEditor: wQ,
        pressed: sQ = !1,
        spread: PQ,
        spreadRef: gQ
      } = QQ;
      const JQ = (0, TQ.useRef)(null),
        {
          box: jQ,
          dpr: BQ
        } = function(QQ) {
          const [WQ, XQ] = (0, TQ.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, TQ.useLayoutEffect)((() => {
            const WQ = QQ.current;
            if (!WQ) return;
            const wQ = () => {
              const QQ = WQ.getBoundingClientRect(),
                wQ = window.devicePixelRatio || 1;
              XQ((WQ => WQ.dpr === wQ && WQ.box.left === QQ.left && WQ.box.top === QQ.top && WQ.box.width === QQ.width && WQ.box.height === QQ.height ? WQ : {
                box: {
                  left: QQ.left,
                  top: QQ.top,
                  width: QQ.width,
                  height: QQ.height
                },
                dpr: wQ
              }))
            };
            wQ();
            const qQ = new ResizeObserver(wQ);
            return qQ.observe(WQ), window.addEventListener("resize", wQ), window.addEventListener("scroll", wQ, !0), () => {
              qQ.disconnect(), window.removeEventListener("resize", wQ), window.removeEventListener("scroll", wQ, !0)
            }
          }), [QQ]), WQ
        }(JQ),
        yQ = (0, TQ.useRef)(BQ);
      yQ.current = BQ;
      const VQ = FQ(WQ, BQ, sQ && WQ.growOnClick ? IQ : 1),
        DQ = function(QQ, WQ, XQ) {
          const wQ = Math.round((QQ.left + QQ.width / 2) * XQ - WQ / 2),
            qQ = Math.round((QQ.top + QQ.height / 2) * XQ - WQ / 2);
          return {
            x: wQ / XQ - QQ.left,
            y: qQ / XQ - QQ.top
          }
        }(jQ, VQ.cell, BQ),
        pQ = (0, zQ.l)(WQ.color),
        bQ = (0, zQ.l)(WQ.outlineColor),
        HQ = (0, TQ.useRef)(0);
      (0, TQ.useLayoutEffect)((() => {
        if (gQ) return gQ.current = QQ => {
          var WQ;
          HQ.current = QQ, null === (WQ = JQ.current) || void 0 === WQ || WQ.querySelectorAll("[data-arm]").forEach((WQ => {
            Object.assign(WQ.style, vQ(function(QQ) {
              return {
                x: Number(QQ.dataset.x),
                y: Number(QQ.dataset.y),
                arm: QQ.dataset.arm
              }
            }(WQ), QQ, yQ.current))
          }))
        }, () => {
          gQ.current = null
        }
      }), [gQ]);
      const aQ = null !== PQ && void 0 !== PQ ? PQ : HQ.current;
      return (0, rQ.jsx)("div", {
        ref: JQ,
        className: qQ()("CrosshairShapes", {
          CrosshairInPreview: XQ,
          CrosshairInEditor: wQ || XQ,
          CrosshairSpreads: void 0 !== gQ
        }),
        children: (0, rQ.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: DQ.x,
            top: DQ.y,
            opacity: WQ.opacity / 100
          },
          children: (0, rQ.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [VQ.ringOutline && (0, rQ.jsx)("div", {
              className: "CrosshairRing",
              style: UQ(VQ.ringOutline, BQ, bQ)
            }), VQ.outlines.map(((QQ, WQ) => (0, rQ.jsx)("div", {
              className: "CrosshairPart",
              ...dQ(QQ),
              style: GQ(QQ, aQ, BQ, bQ)
            }, `o${WQ}`))), VQ.ring && (0, rQ.jsx)("div", {
              className: "CrosshairRing",
              style: UQ(VQ.ring, BQ, pQ)
            }), VQ.fills.map(((QQ, WQ) => (0, rQ.jsx)("div", {
              className: "CrosshairPart",
              ...dQ(QQ),
              style: GQ(QQ, aQ, BQ, pQ)
            }, `f${WQ}`)))]
          })
        })
      })
    }
  },
  34488: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      h: () => yQ,
      j: () => BQ
    });
    var wQ = XQ(34471);
    const qQ = "XH1-",
      TQ = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      zQ = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      sQ = ["color", "outlineColor"],
      FQ = 1 + 3 * sQ.length + zQ.length + 1,
      PQ = Math.ceil(8 * FQ / Math.log2(62)),
      gQ = qQ.length + PQ;

    function JQ(QQ) {
      let WQ = 90;
      for (const XQ of QQ) WQ = 31 * WQ + XQ & 255;
      return WQ
    }
    const rQ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      IQ = BigInt(rQ.length);

    function jQ(QQ, WQ) {
      let XQ = 0n;
      for (const qQ of QQ) {
        const QQ = rQ.indexOf(qQ);
        if (QQ < 0) return null;
        XQ = XQ * IQ + BigInt(QQ)
      }
      if (XQ >> BigInt(8 * WQ) !== 0n) return null;
      const wQ = [];
      for (let qQ = 0; qQ < WQ; qQ++) wQ.unshift(Number(0xffn & XQ)), XQ >>= 8n;
      return wQ
    }

    function BQ(QQ) {
      let WQ = "shapes" === QQ.style ? 1 : 0;
      TQ.forEach(((XQ, wQ) => {
        QQ[XQ] && (WQ |= 1 << wQ + 1)
      }));
      const XQ = [WQ];
      for (const qQ of sQ) {
        const WQ = (0, wQ.i)(qQ, QQ[qQ]);
        XQ.push(WQ >> 16 & 255, WQ >> 8 & 255, 255 & WQ)
      }
      for (const qQ of zQ) {
        const {
          min: WQ,
          step: TQ
        } = wQ.e[qQ];
        XQ.push(Math.round(((0, wQ.i)(qQ, QQ[qQ]) - WQ) / TQ))
      }
      return XQ.push(JQ(XQ)), qQ + function(QQ, WQ) {
        let XQ = 0n;
        for (const qQ of QQ) XQ = XQ << 8n | BigInt(qQ);
        let wQ = "";
        for (let qQ = 0; qQ < WQ; qQ++) wQ = rQ[Number(XQ % IQ)] + wQ, XQ /= IQ;
        return wQ
      }(XQ, PQ)
    }

    function yQ(QQ) {
      for (const WQ of QQ.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${PQ}})`, "gi"))) {
        const QQ = VQ(jQ(WQ[1], FQ));
        if (QQ) return QQ
      }
      return null
    }

    function VQ(QQ) {
      if (!QQ || QQ.length !== FQ || JQ(QQ.slice(0, -1)) !== QQ[QQ.length - 1]) return null;
      const WQ = QQ[0],
        XQ = {
          ...wQ.h,
          style: 1 & WQ ? "shapes" : "classic"
        };
      TQ.forEach(((QQ, wQ) => {
        XQ[QQ] = 0 !== (WQ & 1 << wQ + 1)
      }));
      let qQ = 1;
      for (const wQ of sQ) XQ[wQ] = QQ[qQ] << 16 | QQ[qQ + 1] << 8 | QQ[qQ + 2], qQ += 3;
      for (const TQ of zQ) {
        const {
          min: WQ,
          step: zQ
        } = wQ.e[TQ];
        XQ[TQ] = (0, wQ.i)(TQ, WQ + QQ[qQ] * zQ), qQ++
      }
      return XQ
    }
  },
  34471: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      h: () => qQ,
      i: () => TQ,
      l: () => PQ,
      o: () => FQ,
      q: () => gQ,
      u: () => sQ,
      x: () => zQ
    });
    const wQ = {
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
      qQ = Object.freeze({
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

    function TQ(QQ, WQ) {
      var XQ;
      const {
        min: TQ,
        max: zQ,
        step: sQ
      } = wQ[QQ];
      if (!Number.isFinite(WQ)) return qQ[QQ];
      const FQ = (null !== (XQ = String(sQ).split(".")[1]) && void 0 !== XQ ? XQ : "").length,
        PQ = Number((Math.round(WQ / sQ) * sQ).toFixed(FQ));
      return Math.min(zQ, Math.max(TQ, PQ))
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = "number" === typeof XQ ? TQ(WQ, XQ) : XQ;
      return {
        ...QQ,
        [WQ]: wQ
      }
    }

    function sQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(qQ).every((wQ => XQ.includes(wQ) || QQ[wQ] === WQ[wQ]))
    }

    function FQ(QQ) {
      return sQ(QQ, qQ)
    }

    function PQ(QQ) {
      return `#${QQ.toString(16).padStart(6,"0")}`
    }

    function gQ(QQ) {
      const WQ = /^#?([0-9a-f]{6})$/i.exec(QQ.trim());
      return WQ ? parseInt(WQ[1], 16) : null
    }
  },
  34491: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ,
      e: () => rQ
    });
    var wQ = XQ(61),
      qQ = XQ(43),
      TQ = XQ(34488),
      zQ = XQ(34471);
    const sQ = "crosshairCode";
    let FQ = null;
    const PQ = new Set;

    function gQ() {
      if (null === FQ) {
        var QQ;
        const WQ = qQ.i.getItem(sQ);
        FQ = null !== (QQ = "string" === typeof WQ ? (0, TQ.h)(WQ) : null) && void 0 !== QQ ? QQ : zQ.h
      }
      return FQ
    }

    function JQ(QQ) {
      FQ = QQ, (0, zQ.o)(QQ) ? qQ.i.removeItem(sQ) : qQ.i.setItem(sQ, (0, TQ.j)(QQ));
      for (const WQ of PQ) WQ()
    }

    function rQ() {
      const [QQ, WQ] = (0, wQ.useState)(gQ);
      return (0, wQ.useEffect)((() => {
        const QQ = () => {
          WQ(gQ())
        };
        return QQ(), XQ = QQ, PQ.add(XQ), () => {
          PQ.delete(XQ)
        };
        var XQ
      }), []), QQ
    }
  },
  34469: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      d: () => qQ
    });
    var wQ = XQ(26);

    function qQ(QQ, WQ) {
      return QQ && !WQ
    }

    function TQ() {
      return qQ(wQ.b.get("isTouchScreen"), wQ.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5025: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      d: () => TQ,
      f: () => qQ
    });
    let wQ = null;

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ() {
      return wQ
    }

    function zQ(QQ) {
      return "bloxd" === QQ.site && !QQ.isMobileApp && !QQ.isTouchScreen
    }
  },
  34426: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return QQ && !WQ
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  34455: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(1109);

    function qQ() {
      var QQ, WQ;
      return null !== (QQ = null === (WQ = screen.orientation) || void 0 === WQ ? void 0 : WQ.type) && void 0 !== QQ ? QQ : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const TQ = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && qQ() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = qQ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, wQ.jB)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const QQ of this.resizers) QQ()
          }
        }), 1e3)
      }
      heldSizer(QQ) {
        let WQ = !1;
        return () => {
          if (WQ && this.isHeld()) return null;
          const XQ = QQ();
          return WQ ||= null !== XQ, XQ
        }
      }
      onRelease(QQ) {
        return this.resizers.add(QQ), () => {
          this.resizers.delete(QQ)
        }
      }
    }
  },
  34405: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => DQ,
      h: () => PQ,
      k: () => BQ,
      m: () => jQ
    });
    var wQ = XQ(193),
      qQ = XQ(1302),
      TQ = XQ(1238),
      zQ = XQ(1165),
      sQ = XQ(1795);
    const FQ = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function PQ(QQ) {
      return FQ[QQ]
    }

    function gQ(QQ) {
      return (0, sQ.d)(QQ) ? "outdated" : QQ instanceof wQ.b ? 429 === QQ.httpCode ? "busy" : "server" : "offline"
    }

    function JQ(QQ, WQ, XQ) {
      return (0, zQ.postJsonWithMetricsCookiesAndJsonResponse)(`${TQ.clientSideServerUrls.indexUrl}${WQ}`, XQ, {
        retries: 3
      }, QQ.getMetricsCookies()).catch((QQ => (console.error("Bad response from the server when trying to change name:", WQ, QQ), {
        outcome: "failed",
        failure: gQ(QQ)
      })))
    }

    function rQ(QQ) {
      return "outcome" in QQ && "failed" === QQ.outcome
    }

    function IQ(QQ) {
      return console.error("Error when trying to get with new name from DB", QQ), {
        outcome: "refused",
        message: QQ
      }
    }
    async function jQ(QQ) {
      const WQ = await JQ(QQ, "/index/name/random", {});
      return rQ(WQ) ? WQ : "err" in WQ ? IQ(WQ.err) : (QQ.setPlayerName(WQ.name), {
        outcome: "changed",
        name: WQ.name
      })
    }
    async function BQ(QQ, WQ) {
      const XQ = await JQ(QQ, "/index/name/update", {
        name: WQ
      });
      return rQ(XQ) ? XQ : "err" in XQ ? IQ(XQ.err) : XQ.nameExists ? {
        outcome: "taken"
      } : (QQ.setPlayerName(WQ), {
        outcome: "changed",
        name: WQ
      })
    }

    function yQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const wQ = 1 === WQ ? 1 : 10 ** (WQ - 1),
        TQ = String(wQ + Math.floor(XQ() * (10 ** WQ - wQ)));
      return `${QQ.slice(0,qQ.j-WQ)}${TQ}`
    }
    const VQ = [1, 2, 3, 4];
    async function DQ(QQ, WQ) {
      const XQ = await BQ(QQ, WQ);
      if ("taken" !== XQ.outcome) return XQ;
      for (const wQ of VQ) {
        const XQ = yQ(WQ, wQ),
          qQ = await BQ(QQ, XQ);
        if ("taken" !== qQ.outcome) return qQ
      }
      return {
        outcome: "taken"
      }
    }
  },
  34435: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      d: () => FQ
    });
    var wQ = XQ(26);
    const qQ = 24,
      TQ = "farNametags",
      zQ = 1e5;

    function sQ() {
      var QQ;
      return null === (QQ = wQ.b.get("showDistantNametags")) || void 0 === QQ || QQ
    }

    function FQ() {
      var QQ;
      return null !== (QQ = function() {
        const QQ = new URLSearchParams(window.location.search).get(TQ),
          WQ = null === QQ || "" === QQ ? NaN : Number(QQ);
        return Number.isFinite(WQ) && WQ >= 0 ? Math.min(WQ, zQ) : null
      }()) && void 0 !== QQ ? QQ : sQ() ? 0 : qQ
    }
  },
  34461: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ,
      e: () => JQ,
      i: () => gQ
    });
    var wQ = XQ(307),
      qQ = XQ(105),
      TQ = XQ(150),
      zQ = XQ(141),
      sQ = XQ(689);
    const FQ = new Set(["mali_bifrost"]);

    function PQ() {
      if (sQ.f) return;
      const QQ = (0, qQ.pageOperatingSystem)();
      if ("android" !== QQ && "windows" !== QQ || (0, sQ.e)("webgl_default")) return;
      if ("windows" === QQ) return QQ => "qualcomm" === (0, qQ.normaliseGpuVendor)((0, zQ.c)(QQ).vendor);
      const WQ = (0, TQ.n)(),
        XQ = null === WQ ? (0, wQ.o)() : (0, wQ.g)(WQ.vendor, WQ.renderer);
      return null !== XQ && FQ.has(XQ) ? QQ => (0, wQ.i)((0, zQ.c)(QQ).vendor, XQ) : void 0
    }

    function gQ(QQ, WQ) {
      return QQ ? () => !0 : WQ()
    }
    async function JQ(QQ) {
      try {
        const WQ = gQ(QQ, PQ),
          XQ = navigator.gpu;
        if (void 0 === WQ || void 0 === XQ) return !1;
        const wQ = await (0, zQ.m)(XQ, {
          seed: !1,
          compatibility: WQ
        });
        return "string" !== typeof wQ && wQ.compatibility && !(0, zQ.h)(wQ.adapter)
      } catch (WQ) {
        return console.error("WebGPU compatibility-mode adapter request failed.", WQ), !1
      }
    }
  },
  34536: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => zQ
    });
    const wQ = [{
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

    function qQ(QQ) {
      let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof QQ) {
        if (!Number.isFinite(QQ)) return "0";
        if (Math.abs(QQ) < 100) {
          const WQ = QQ < 0 ? "-" : "",
            XQ = Math.abs(QQ);
          return XQ >= 10 ? `${WQ}${XQ.toFixed(1).replace(/\.0$/,"")}` : `${WQ}${XQ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        WQ = BigInt(Math.floor(QQ))
      } else WQ = QQ;
      const qQ = WQ < 0n ? -WQ : WQ,
        TQ = WQ < 0n ? "-" : "",
        zQ = qQ.toString();
      if (zQ.length <= XQ) return `${TQ}${zQ}`;
      const sQ = 3 * Math.floor((zQ.length - 1) / 3);
      if (sQ < 3) return `${TQ}${zQ}`;
      if (sQ > 3 * wQ.length) {
        const QQ = zQ[0],
          WQ = zQ.slice(1, 3).replace(/0+$/, "");
        return `${TQ}${WQ?`${QQ}.${WQ}`:QQ}e${zQ.length-1}`
      }
      const {
        threshold: FQ,
        suffix: PQ
      } = wQ[wQ.length - sQ / 3], gQ = qQ / FQ, JQ = Number(1000n * (qQ % FQ) / FQ), rQ = Number(gQ) + JQ / 1e3;
      let IQ;
      return IQ = rQ >= 100 ? Math.floor(rQ).toString() : rQ >= 10 ? rQ.toFixed(1).replace(/\.0$/, "") : rQ.toFixed(2).replace(/\.?0+$/, ""), `${TQ}${IQ}${PQ}`
    }
    const TQ = wQ.map((QQ => {
      let {
        threshold: WQ,
        suffix: XQ
      } = QQ;
      return {
        threshold: Number(WQ),
        suffix: XQ
      }
    })).filter((QQ => {
      let {
        threshold: WQ
      } = QQ;
      return Number.isFinite(WQ)
    }));

    function zQ(QQ) {
      const WQ = Math.abs(QQ),
        XQ = QQ < 0 ? "-" : "";
      for (const {
          threshold: wQ,
          suffix: qQ
        }
        of TQ)
        if (WQ >= wQ) {
          const QQ = WQ / wQ;
          if (QQ >= 1e3) return `${XQ}${WQ.toExponential(2).replace("e+","e")}`;
          let TQ;
          return TQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${XQ}${TQ}${qQ}`
        } return `${XQ}${WQ}`
    }
  },
  34516: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      c: () => rQ,
      d: () => JQ,
      h: () => zQ,
      k: () => PQ,
      m: () => FQ
    });
    var wQ = XQ(402);
    const qQ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      TQ = {
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

    function zQ(QQ) {
      var WQ;
      return null !== (WQ = TQ[QQ]) && void 0 !== WQ ? WQ : {
        translationKey: ""
      }
    }
    const sQ = {
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

    function FQ(QQ) {
      return qQ.includes(QQ)
    }

    function PQ(QQ) {
      var WQ;
      return !0 === (null === QQ || void 0 === QQ || null === (WQ = QQ.customAttributes) || void 0 === WQ ? void 0 : WQ.cannotEnchant)
    }

    function gQ(QQ, WQ) {
      const {
        max: XQ
      } = sQ[QQ].at(-1);
      return WQ <= XQ
    }

    function JQ(QQ) {
      const WQ = Math.sin(QQ / 80),
        XQ = QQ => {
          if (QQ <= 0) return 0;
          if (QQ > 1) return 1;
          let WQ = 0;
          const XQ = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let wQ = 0; wQ < XQ.length; wQ++) {
            WQ += (wQ % 2 === 0 ? 1 : -1) * XQ[wQ] * Math.pow(QQ, 2 + wQ) / (2 + wQ)
          }
          return 72 * WQ
        },
        wQ = .3 - .78 * WQ,
        qQ = .5 - .78 * WQ,
        TQ = .6 - .7 * WQ,
        zQ = .8 - .6 * WQ;
      let sQ = XQ(wQ),
        FQ = XQ(qQ) - sQ,
        PQ = XQ(TQ) - FQ - sQ,
        gQ = XQ(zQ) - PQ - FQ - sQ;
      wQ < .041 && (FQ /= 1 - sQ, PQ /= 1 - sQ, gQ /= 1 - sQ, sQ = 0), qQ < .041 && (sQ /= 1 - FQ, PQ /= 1 - FQ, gQ /= 1 - FQ, FQ = 0), TQ < .041 && (sQ /= 1 - PQ, FQ /= 1 - PQ, gQ /= 1 - PQ, PQ = 0), zQ < .041 && (sQ /= 1 - gQ, FQ /= 1 - gQ, PQ /= 1 - gQ, gQ = 0);
      return {
        commonProb: sQ,
        uncommonProb: FQ,
        rareProb: PQ,
        epicProb: gQ,
        legendaryProb: 1 - (gQ + PQ + FQ + sQ)
      }
    }

    function rQ(QQ, WQ) {
      const {
        min: XQ,
        max: qQ
      } = sQ[QQ][WQ], TQ = wQ.b.sampleUniformIntDistribution(XQ, qQ, "includeMax");
      return {
        ...JQ(TQ),
        level: TQ
      }
    }
  },
  34485: () => {},
  34562: () => {},
  13285: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14462: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15966: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16473: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);