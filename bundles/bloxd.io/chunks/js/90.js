export const id = 90;
export const ids = [90];
export const modules = {
  35180: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      EverythingMenu: () => SQ
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1220),
      pV = xV(1414),
      QV = xV(2202),
      nV = xV(1551),
      wV = xV(1157),
      ZV = xV(1321);

    function vV(VV) {
      let {
        items: eV,
        link: xV,
        onClick: JV,
        selectedItemId: YV,
        className: vV,
        padStartsOnTab: rV = !0
      } = VV;
      const {
        t: kV
      } = (0, yV.A)(), bV = (0, wV.j)(), EV = [];
      for (const UV of eV) {
        var BV;
        const VV = EV[EV.length - 1];
        var jV;
        if (VV && VV.title === (null !== (BV = UV.section) && void 0 !== BV ? BV : null)) VV.items.push(UV);
        else EV.push({
          title: null !== (jV = UV.section) && void 0 !== jV ? jV : null,
          items: [UV]
        })
      }
      return (0, ZV.jsxs)("div", {
        className: UV()("MenuSideBarBody", vV),
        "data-pad-tabs": "2",
        children: [EV.map(((VV, eV) => {
          var xV;
          return (0, ZV.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [VV.title && (0, ZV.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: kV(VV.title)
            }), VV.items.map((VV => {
              var eV;
              const xV = !!VV.iconElement || !!VV.faIcon;
              return (0, ZV.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": YV === VV.id ? "true" : void 0,
                "data-pad-default-focus": rV && YV === VV.id || void 0,
                className: UV()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: YV === VV.id
                }),
                onClick: () => {
                  JV(VV.id)
                },
                children: [xV && (0, ZV.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (eV = VV.iconElement) && void 0 !== eV ? eV : (0, ZV.jsx)(pV.b, {
                    name: VV.faIcon
                  })
                }), (!bV || !xV) && (0, ZV.jsx)("div", {
                  children: kV(VV.title)
                }), VV.redDot && (0, ZV.jsx)(QV.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, VV.id)
            }))]
          }, null !== (xV = VV.title) && void 0 !== xV ? xV : eV)
        })), xV && (0, ZV.jsxs)("div", {
          ...(0, nV.V)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: xV.onClick,
          children: [(0, ZV.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, ZV.jsx)(pV.b, {
              name: xV.faIcon
            })
          }), (0, ZV.jsx)("div", {
            children: kV(xV.title)
          }), (0, ZV.jsx)(pV.b, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var rV = xV(2871),
      kV = xV(1168),
      bV = xV(2693),
      EV = xV(3528),
      BV = xV(99),
      jV = xV(2051),
      qV = xV(2410),
      tV = xV(2419),
      FV = xV(1772),
      TV = xV(1408),
      PV = xV(5500),
      AV = xV(27),
      NV = xV(35189);

    function XV(VV) {
      let {
        setApplySettingsCallback: eV
      } = VV;
      const {
        clientEscMenuOptions: xV
      } = (0, AV.l)(["clientEscMenuOptions"]), [YV, UV] = (0, JV.useState)(!1), [yV, pV] = (0, JV.useState)(!1), [QV, wV] = (0, JV.useState)(6400), [vV, rV] = (0, JV.useState)(3600), [kV, bV] = (0, JV.useState)(!1), [EV, BV] = (0, JV.useState)(!1);

      function jV(VV) {
        const eV = "screenshot" === VV ? pV : UV;
        eV(!0);
        const xV = kV ? "normals" : EV ? "depth" : null;
        NV.devTools.downloadScene(VV, {
          width: QV,
          height: vV,
          colouring: xV
        }).catch((VV => {
          console.error("Couldn't download the scene", VV)
        })).finally((() => {
          eV(!1)
        }))
      }
      return (0, ZV.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, ZV.jsx)(PV.e, {
          label: "Disable Ambient Occlusion",
          checked: xV.disableAmbientOcclusion,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              disableAmbientOcclusion: VV
            }), eV((() => PV.q))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), NV.devTools.supports("ambientLight") && (0, ZV.jsx)(PV.m, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: xV.ambientLightIntensity,
          onChange: VV => {
            NV.devTools.setAmbientLightIntensity(VV).then((() => {
              AV.b.setClientEscMenuOptions({
                ambientLightIntensity: VV
              })
            })).catch((VV => {
              console.error("Couldn't set the ambient light", VV)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), NV.devTools.supports("weaponRaycasts") && (0, ZV.jsx)(PV.e, {
          label: "Show Weapon Raycasts",
          checked: xV.showWeaponRaycasts,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              showWeaponRaycasts: VV
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), NV.devTools.supports("sceneDownload") && (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ZV.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, ZV.jsx)(PV.e, {
              label: "Apply normal-based coloring",
              checked: kV,
              onClick: VV => {
                bV(VV), VV && BV(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, ZV.jsx)(PV.e, {
              label: "Apply depth-based coloring",
              checked: EV,
              onClick: VV => {
                BV(VV), VV && bV(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, ZV.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, ZV.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, ZV.jsx)(FV.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (VV, eV) => {
                  const xV = parseInt(VV) || 6400;
                  wV(xV)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: QV.toString()
              }), (0, ZV.jsx)("span", {
                children: "X"
              }), (0, ZV.jsx)(FV.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (VV, eV) => {
                  const xV = parseInt(VV) || 3600;
                  rV(xV)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: vV.toString()
              })]
            }), (0, ZV.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, ZV.jsxs)(nV.f, {
                onClick: () => {
                  jV("screenshot")
                },
                disabled: yV,
                children: [yV && (0, ZV.jsx)(TV.d, {}), "Download Screenshot"]
              }), (0, ZV.jsxs)(nV.f, {
                onClick: () => {
                  jV("glb")
                },
                disabled: YV,
                children: [YV && (0, ZV.jsx)(TV.d, {}), "Download GLB"]
              })]
            })]
          }), (0, ZV.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var MV = xV(138),
      zV = xV(1173),
      GV = xV(35205),
      WV = xV(3371),
      RV = xV(1612),
      gV = xV(1293),
      DV = xV(1267),
      iV = xV(3482),
      CV = xV(2180),
      aV = xV(1603),
      oV = xV(375),
      cV = xV(2428),
      hV = xV(2430),
      lV = xV(3401),
      LV = xV(2973),
      fV = xV(1734),
      mV = xV(3424),
      KV = xV(3490),
      HV = xV(220);
    var uV = xV(1900),
      sV = xV(3398);
    async function SV() {
      try {
        return function(VV) {
          const eV = new Map;
          for (const {
              store: xV,
              status: JV,
              autoRenewStatus: YV,
              managementUrl: UV
            }
            of Object.values(VV.subscriptions)) !(0, lV.h)(xV) || (0, lV.j)(JV) || "willNotRenew" === YV || eV.has(xV) || eV.set(xV, null !== UV && void 0 !== UV ? UV : lV.m[xV]);
          return Array.from(eV, (VV => {
            let [eV, xV] = VV;
            return {
              store: eV,
              managementUrl: xV
            }
          }))
        }(await (0, uV.m)((0, sV.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (VV) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", VV), null
      }
    }

    function IV(VV) {
      const {
        t: eV,
        selectedLanguage: xV
      } = (0, yV.A)(), {
        userContext: YV
      } = (0, kV.d)(), {
        superRankInfo: UV
      } = YV, pV = (0, hV.usePurchasesAllowed)(), QV = VV && ((0, oV.Bc)(UV) || YV.ranksMayChange) && pV, {
        accountId: nV,
        data: wV
      } = (0, LV.h)(mV.b, QV);
      if ((0, JV.useEffect)((() => {
          if (QV) return mV.b.watchAccount(), fV.c.addRefetchListener("billing", (VV => {
            "reconnected" === VV ? mV.b.refreshAfterReconnect() : mV.b.refresh()
          }))
        }), [QV]), !QV || !(0, oV.Bc)(UV) || null === wV || nV !== YV.whamm) return null;
      const ZV = function(VV, eV, xV) {
        const JV = KV.j[(0, KV.e)(KV.j, eV)],
          YV = void 0 === JV ? void 0 : (0, HV.b)(VV.entitlements, JV.entitlementId);
        return void 0 === YV || null === YV.expiresAt || (0, lV.d)(YV) <= xV ? null : YV.willRenew && null === YV.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(YV.expiresAt, xV)
        } : {
          renews: !1,
          at: (0, lV.d)(YV)
        }
      }(wV, UV.tier, Date.now());
      if (null === ZV) return null;
      const vV = ZV.renews ? "store:renewsOn" : "store:endsOn",
        rV = new Date(ZV.at).toLocaleDateString((0, yV.m)(xV.code, vV), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        bV = (0, hV.getBillingStore)(),
        EV = null !== bV && (0, lV.h)(bV) ? function(VV, eV) {
          var xV;
          const JV = Object.values(VV.subscriptions).find((VV => VV.store === eV && !(0, lV.j)(VV.status)));
          return void 0 === JV ? null : null !== (xV = JV.managementUrl) && void 0 !== xV ? xV : lV.m[eV]
        }(wV, bV) : null;
      return {
        text: eV(vV, {
          date: rV
        }),
        manageUrl: EV
      }
    }
    var dV = xV(2658),
      OV = xV(2596);

    function Ve(VV) {
      let {
        loggedIn: eV,
        playerDbId: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)(), YV = (0, dV.g)(), UV = (0, dV.d)(YV, xV);
      return OV.e.isAvailable && (eV || UV) && "notEligible" !== (null === YV || void 0 === YV ? void 0 : YV.answer) ? (0, ZV.jsx)(PV.e, {
        label: JV("sessionReplayConsent:setting"),
        note: JV("sessionReplayConsent:settingNote"),
        checked: UV,
        onClick: VV => {
          VV ? OV.e.askConsent(!1) : OV.e.withdrawConsent()
        }
      }) : null
    }
    var ee = xV(1446),
      xe = xV(1245),
      Je = xV(5385),
      Ye = xV(1586),
      Ue = xV(4081),
      ye = xV(2400);

    function pe(VV) {
      let {
        showing: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)(), {
        data: JV,
        failed: YV
      } = (0, LV.h)(Ue.d, eV);
      return 0 === (null === JV || void 0 === JV ? void 0 : JV.length) || null === JV && !YV ? null : (0, ZV.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, ZV.jsx)("div", {
          className: "AccountSettingsLabel",
          children: xV("paymentHistory:title")
        }), null === JV && YV && (0, ZV.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: xV("paymentHistory:loadFailed")
        }), null !== JV && (0, ZV.jsx)("ul", {
          className: "PaymentHistoryList",
          children: JV.map((VV => (0, ZV.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, ZV.jsx)(ye.c, {
              entry: VV
            }), (0, ZV.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, ZV.jsx)("div", {
                children: (0, ye.g)(xV, VV)
              }), (0, ZV.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(VV.at).toLocaleDateString(), "number" === typeof VV.orderId && ` \xb7 ${xV("paymentHistory:order",{orderId:VV.orderId})}`]
              })]
            })]
          }, (0, Ue.c)(VV))))
        })]
      })
    }
    var Qe = xV(3408),
      ne = xV(2434),
      we = xV(2256);

    function Ze() {
      (0, we.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function ve(VV) {
      let {
        status: eV
      } = VV;
      switch (eV) {
        case "restored":
          return (0, mV.e)(), {
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

    function re() {
      const VV = (0, sV.usePageBillingClient)(),
        {
          userContext: eV
        } = (0, kV.d)(),
        [xV, YV] = (0, JV.useState)(!1),
        [UV, yV] = (0, JV.useState)(null);
      return {
        restoring: xV,
        notice: UV,
        restore: () => {
          eV.isLoggedIn() ? (YV(!0), yV(null), VV.restorePurchases().then(ve, (VV => VV instanceof Qe.b && "loginRequired" === VV.code ? (Ze(), null) : function(VV) {
            return VV instanceof Qe.b && "storeBusy" === VV.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", VV), (0, mV.e)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(VV))).then(yV).finally((() => {
            YV(!1)
          }))) : Ze()
        }
      }
    }

    function ke(VV) {
      let {
        restoring: eV,
        notice: xV,
        restore: YV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)(), QV = (0, hV.usePurchasesAllowed)(), wV = (0, hV.getBillingStore)(), vV = (0, JV.useRef)(null);
      return (0, JV.useEffect)((() => {
        var VV;
        null === (VV = vV.current) || void 0 === VV || VV.scrollIntoView({
          block: "nearest"
        })
      }), [xV]), QV && (0, ne.b)(wV) ? (0, ZV.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, ZV.jsx)(nV.j, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: eV,
          onClick: YV,
          children: pV("payments:restorePurchases")
        }), null !== xV && (0, ZV.jsx)("div", {
          ref: vV,
          className: UV()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: xV.failed
          }),
          children: pV(xV.key)
        })]
      }) : null
    }
    var be = xV(2010),
      Ee = xV(1276),
      Be = xV(1439),
      je = xV(1230),
      qe = xV(1382),
      te = xV(364),
      Fe = xV(2762);
    const Te = {
      appStore: {
        name: "App Store",
        ...te.Wb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...te.Wb.googlePlay
      },
      discord: {
        name: "Discord",
        ...te.Wb.discord
      }
    };

    function Pe(VV) {
      let {
        warning: eV,
        subscriptions: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)();
      return null !== xV && 0 === xV.length ? (0, ZV.jsx)(ZV.Fragment, {
        children: JV(eV)
      }) : (0, ZV.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [JV(eV), null === xV && (0, ZV.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: JV("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== xV && (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: JV("auth:deleteAccountStoreSubscriptions")
          }), (0, ZV.jsx)(Fe.c, {
            className: "DeleteAccountSubtitleLinks",
            links: xV.map((VV => {
              let {
                store: eV,
                managementUrl: xV
              } = VV;
              return {
                ...Te[eV],
                url: xV
              }
            }))
          })]
        })]
      })
    }
    var Ae = xV(2603);

    function Ne(VV) {
      let {
        showing: eV
      } = VV;
      const {
        userContext: xV,
        isUserContextUpdating: YV
      } = (0, kV.d)(), {
        t: UV
      } = (0, yV.A)(), [pV, QV] = (0, JV.useState)(!1), [wV, vV] = (0, JV.useState)(null), rV = (0, JV.useRef)(eV);
      (0, JV.useEffect)((() => (rV.current = eV, () => {
        rV.current = !1
      })), [eV]);
      const bV = YV || pV;
      return (0, ZV.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, ZV.jsxs)(nV.E, {
          onClick: async function() {
            if (!pV) {
              QV(!0);
              try {
                const VV = await async function() {
                  const [VV, eV] = await Promise.all([(0, be.c)(xV.availableUserContextTypes) ? SV() : [], Me(xV)]);
                  if (!rV.current) return Ee.e.ok();
                  const JV = (0, gV.b)(xV.getPlayerName(), !BV.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await Be.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: JV
                        }
                      },
                      subtitle: (0, ZV.jsx)(Pe, {
                        warning: Xe(xV.isLoggedIn(), eV),
                        subscriptions: VV
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: eV ? UV("auth:deleteAccountTypedConfirm", {
                        playerName: JV
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Ee.e.ok();
                  const YV = await (0, zV.postJsonWithMetricsCookiesAndJsonResponse)(`${je.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: AV.b.get("gameState")
                  }, {
                    retries: 3
                  }, xV.getMetricsCookies());
                  if (YV.error) return Ee.e.error(YV.error);
                  (0, MV.isDiscordClient)() && (await qe.h.discordActivity()).exit("User deleted their account");
                  return null !== (0, Ae.c)() && await OV.e.withdrawConsent(), (0, zV.forgetStoredGuestAccount)(xV.whamm), (0, zV.forceGlobalSignOut)(!0), Ee.e.ok()
                }(), eV = VV.isError() ? VV.asError().message : null;
                vV(eV)
              } catch (VV) {
                console.error("Failed to delete account:", VV), vV(UV("auth:genericDeleteAccountError"))
              }
              QV(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: bV,
          children: [bV && (0, ZV.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, ZV.jsx)(TV.d, {})
          }), UV("auth:deleteAccount")]
        }), wV && (0, ZV.jsx)("div", {
          className: "DeleteAccountError",
          children: wV
        })]
      })
    }

    function Xe(VV, eV) {
      return (0, MV.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : VV ? "auth:deleteAccountLossWarning" : eV ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function Me(VV) {
      try {
        const {
          accountCreatedAt: eV
        } = await (0, uV.m)(aV.b.getPlayerProfile(VV, {
          lowerCaseName: VV.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== eV && Date.now() - eV >= 7 * oV.e
      } catch (eV) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", eV), !0
      }
    }
    var ze = xV(4004),
      Ge = xV(4020),
      We = xV(4011);

    function Re(VV) {
      let {
        showing: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)(), {
        data: JV,
        failed: YV
      } = (0, LV.h)(ze.d, eV), UV = null === JV ? null : (0, ze.h)(JV);
      return (0, ZV.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, ZV.jsx)("div", {
          className: "AccountSettingsLabel",
          children: xV("settingsMenu:blockedAndIgnoredPlayers")
        }), null === UV && !YV && (0, ZV.jsx)(TV.d, {}), null === UV && YV && (0, ZV.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [xV("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, ZV.jsx)(nV.f, {
            className: "SmallTextLight",
            onClick: () => {
              ze.d.refresh()
            },
            children: xV("general:tryAgain")
          })]
        }), 0 === (null === UV || void 0 === UV ? void 0 : UV.length) && (0, ZV.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: xV("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== UV && UV.length > 0 && (0, ZV.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: UV.map((VV => {
            let {
              name: eV,
              exclusion: JV
            } = VV;
            const YV = We.h[JV];
            return (0, ZV.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, ZV.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: eV
              }), (0, ZV.jsx)(nV.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Ge.d)(YV, eV, {
                    chatMessage: null
                  })
                },
                children: xV(We.l[YV].text)
              })]
            }, eV)
          }))
        })]
      })
    }
    var ge = xV(1976);

    function De(VV) {
      let {
        userContext: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)(), {
        replayChatObjectedAtMs: YV
      } = (0, AV.l)(["replayChatObjectedAtMs"]), [UV, pV] = (0, JV.useState)(!1);
      return OV.i ? (0, ZV.jsx)(PV.e, {
        label: xV("sessionReplayChatObjection:setting"),
        note: xV("sessionReplayChatObjection:settingNote"),
        checked: null !== YV,
        disabled: UV,
        onClick: VV => {
          pV(!0), aV.b.setReplayChatObjection(eV, VV).then((VV => {
            let {
              replayChatObjectedAtMs: eV
            } = VV;
            AV.b.set({
              replayChatObjectedAtMs: eV
            })
          })).catch((VV => {
            console.error("Couldn't save the session replay chat objection", VV), ge.e.showMessage({
              translationKey: "sessionReplayChatObjection:failed"
            })
          })).finally((() => {
            pV(!1)
          }))
        }
      }) : null
    }
    const ie = (0, JV.memo)((function(VV) {
      var eV, xV;
      let {
        showing: YV,
        inGame: QV
      } = VV;
      const {
        t: wV,
        selectedLanguage: vV
      } = (0, yV.A)(), {
        hideSocialLocationFrom: bV
      } = (0, AV.l)(["hideSocialLocationFrom"]), EV = (0, hV.usePurchasesAllowed)(), jV = re(), qV = (0, rV.c)(), {
        userContext: tV,
        isUserContextUpdating: NV
      } = (0, kV.d)(), [XV, lV] = (0, JV.useState)(null !== (eV = tV.getPlayerName()) && void 0 !== eV ? eV : ""), [LV, fV] = (0, JV.useState)(null), {
        purchasing: mV,
        outcome: KV,
        purchase: HV
      } = (0, WV.d)("/super-rank-welcome"), uV = (0, oV.ec)((0, yV.m)(vV.code, "general:timeLeft"), tV.superRankInfo), sV = null === (xV = IV(YV)) || void 0 === xV ? void 0 : xV.text, SV = uV ? wV("general:timeLeft", {
        time: uV
      }) : sV, [dV, OV] = (0, JV.useState)(!1), [Ue, ye] = (0, JV.useState)(!1), Qe = (0, JV.useRef)(null), ne = (0, JV.useRef)(null), we = (0, CV.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Ze = null === we, ve = null !== we && void 0 !== we ? we : [], be = tV !== zV.NULL_USER_CONTEXT && !tV.isLoggedIn(), Ee = be && 0 !== (null === we || void 0 === we ? void 0 : we.length), [Be, je] = (0, JV.useState)([]), [qe, te] = (0, JV.useState)(!1), Fe = tV.playerHasRank("youtuber"), Te = (0, JV.useCallback)((() => aV.b.getPlayerProfile(tV, {
        lowerCaseName: tV.getPlayerName().toLowerCase()
      }).then((VV => {
        je(VV.socialLinks)
      })).catch((VV => {
        console.error("Failed to refresh social links", VV)
      }))), [tV]);

      function Pe(VV) {
        VV !== XV && ((0, gV.k)(VV) ? (VV = (0, gV.o)(VV), fV(wV("homePage:nameCharacters"))) : fV(null), Qe.current && (Qe.current.value = VV), lV(VV))
      }
      return (0, JV.useEffect)((() => (!0 === YV ? (clearInterval(ne.current), ne.current = setInterval(qV, 1e3)) : clearInterval(ne.current), () => {
        clearInterval(ne.current)
      })), [YV, qV]), (0, JV.useEffect)((() => {
        var VV;
        lV(null !== (VV = tV.getPlayerName()) && void 0 !== VV ? VV : "")
      }), [tV]), (0, JV.useEffect)((() => {
        if (!YV || !Fe || NV) return;
        let VV = !1;
        return te(!0), je([]), aV.b.getPlayerProfile(tV, {
          lowerCaseName: tV.getPlayerName().toLowerCase()
        }).then((eV => {
          VV || je(eV.socialLinks)
        })).catch((VV => {
          console.error("Failed to load social links", VV)
        })).finally((() => {
          VV || te(!1)
        })), () => {
          VV = !0
        }
      }), [YV, Fe, NV, tV]), (0, ZV.jsxs)("div", {
        className: UV()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: QV
        }),
        children: [QV && (0, ZV.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: wV("settingsMenu:accountSettingsInGameWarning")
        }), (0, ZV.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, ZV.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [wV("homePage:discordNamePopupTitle"), (0, ZV.jsxs)(RV.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, DV.l)({
                name: tV.getPlayerName()
              }),
              onClick: () => {
                AV.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, ZV.jsx)(pV.b, {
                name: "arrow-up-right-from-square"
              }), " ", wV("profileCard:viewProfile")]
            })]
          }), (0, ZV.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, ZV.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [BV.featureFlags.canChangeName && (0, ZV.jsx)(FV.d, {
                className: "EnterName",
                placeholderText: wV("homePage:enterName"),
                maxLength: gV.f,
                defaultValue: XV,
                onValueChange: VV => {
                  Pe(VV)
                },
                forcedText: dV || !BV.featureFlags.canChangeName ? XV : null,
                blurOnEnter: !0,
                domRef: Qe
              }), (0, ZV.jsx)(nV.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Pe((0, gV.d)())
                },
                children: (0, ZV.jsx)(pV.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !BV.featureFlags.canChangeName && (0, ZV.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, gV.b)(XV, !BV.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, ZV.jsx)(nV.f, {
              className: "ChooseNameButton",
              disabled: dV || XV === tV.getPlayerName(),
              onClick: () => {
                XV.length < gV.h ? fV(wV("homePage:changeNameMinLengthError", {
                  length: gV.h
                })) : XV.length > gV.f ? fV(wV("homePage:changeNameMaxLengthError", {
                  length: gV.f
                })) : (OV(!0), fV(null), (0, GV.g)(tV, XV).then((VV => {
                  OV(!1), "taken" === VV.outcome ? fV(wV("homePage:nameTaken")) : "refused" === VV.outcome ? fV(VV.message) : "failed" === VV.outcome && fV(wV((0, GV.e)(VV.failure)))
                })))
              },
              children: wV("general:choose")
            })]
          }), LV && (0, ZV.jsx)("div", {
            className: "ChooseAccNameError",
            children: LV
          })]
        }), (0, ZV.jsx)(De, {
          userContext: tV
        }), (0, ZV.jsx)(PV.e, {
          label: (() => {
            if ((0, xe.l)(bV)) {
              const VV = (0, yV.m)(vV.code, "general:timeLeft"),
                eV = (0, oV.bb)(VV, Date.now(), bV + xe.k);
              return `${wV("settingsMenu:hideSocialLocation")} (${wV("general:timeLeft",{time:eV})})`
            }
            return wV("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const VV = !(0, xe.l)(bV);
            (0, Ye.reportAnalyticsClick)({
              id: "social.hide_location",
              value: VV ? "on" : "off"
            }), ye(!0), aV.b.setHideSocialLocation(tV, VV).then((() => {
              AV.b.set({
                hideSocialLocationFrom: VV ? Date.now() : null
              })
            })).finally((() => {
              ye(!1)
            }))
          },
          checked: (0, xe.l)(bV),
          disabled: Ue
        }), (0, ZV.jsx)(Ve, {
          loggedIn: tV.isLoggedIn(),
          playerDbId: tV.whamm
        }), Fe && (0, ZV.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, ZV.jsx)("div", {
            className: "AccountSettingsLabel",
            children: wV("settingsMenu:socialLinks")
          }), qe && (0, ZV.jsx)(TV.d, {}), !qe && (0, ZV.jsx)(Je.c, {
            socialLinks: Be,
            editable: !0,
            userContext: tV,
            onLinksUpdated: Te
          })]
        }), (0, ZV.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZV.jsx)("div", {
            className: "AccountSettingsLabel",
            children: wV(Ee ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Ze && (0, ZV.jsx)(TV.d, {}), !Ze && 0 === ve.length && (0, ZV.jsx)("div", {
            className: "NoLoginOptions",
            children: wV("auth:noLoginOptions")
          }), !Ze && ve.length > 0 && "crazygames" !== MV.siteUsed && (0, ZV.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: ve
          }), !Ze && ve.length > 0 && "crazygames" === MV.siteUsed && (0, ZV.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [ve[0], ve.length > 1 && (0, ZV.jsxs)(ZV.Fragment, {
              children: [(0, ZV.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, ZV.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: wV("auth:legacyLoginOptions")
                }), (0, ZV.jsx)(ee.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: wV("auth:legacyLoginOptionsInfo")
                })]
              }), (0, ZV.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: ve.slice(1)
              })]
            })]
          }), BV.featureFlags.useLogin && (null !== tV.loggedInInfo || tV.isLoggedIn()) && (0, ZV.jsxs)(ZV.Fragment, {
            children: [(0, ZV.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, ZV.jsxs)(nV.E, {
              onClick: () => {
                (0, zV.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, ZV.jsx)(pV.b, {
                name: "right-from-bracket"
              }), wV("auth:signOut")]
            })]
          })]
        }), !tV.playerHasRank("super") && EV && (0, ZV.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ZV.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, ZV.jsx)(pV.b, {
              name: "bolt"
            }), wV("homePage:superRank")]
          }), (0, ZV.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, ZV.jsxs)(nV.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, cV.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ZV.jsx)(pV.b, {
                name: "bolt"
              }), wV("homePage:getSuperRank")]
            }), (0, ZV.jsxs)(nV.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, cV.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ZV.jsx)(pV.b, {
                name: "bolt"
              }), wV("homePage:giftSuperRank")]
            })]
          }), (0, ZV.jsx)(ke, {
            ...jV
          })]
        }), tV.playerHasRank("super") && (0, ZV.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ZV.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, ZV.jsx)(pV.b, {
              name: "bolt"
            }), wV("homePage:superRank"), SV && (0, ZV.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", SV, ")"]
            })]
          }), EV && (0, ZV.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, oV.Bc)(tV.superRankInfo) && (0, ZV.jsxs)(nV.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: mV,
              onClick: () => {
                HV(iV.k.id, null)
              },
              children: [(0, ZV.jsx)(pV.b, {
                name: "bolt"
              }), wV("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: iV.k.product.days,
                price: iV.k.price
              })]
            }), (0, ZV.jsxs)(nV.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, cV.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ZV.jsx)(pV.b, {
                name: "bolt"
              }), wV("homePage:giftSuperRank")]
            })]
          }), KV && (0, ZV.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: wV(KV.translationKey)
          }), (0, ZV.jsx)(ke, {
            ...jV
          })]
        }), (0, ZV.jsx)(pe, {
          showing: YV
        }), BV.featureFlags.useSocialFeatures && (0, ZV.jsx)(Re, {
          showing: YV
        }), (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, ZV.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, ZV.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: wV(Ce(be, Ee))
            }), (0, MV.isDiscordClient)() && (0, ZV.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: wV("auth:discordActivityKickWarning")
            }), (0, ZV.jsx)(Ne, {
              showing: YV
            })]
          }), (0, ZV.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: wV(be ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Ce(VV, eV) {
      return VV ? eV ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var ae = xV(35213),
      oe = xV(3551),
      ce = xV(1279),
      he = xV(1530),
      le = xV(2100),
      Le = xV(9482),
      fe = xV(35218);

    function me() {
      const {
        t: VV
      } = (0, yV.A)();
      return (0, le.h)("localPlayerAlive") ? (0, ZV.jsx)(Le.c, {
        icon: "camera-alt",
        title: VV("screenshotMode:title"),
        sub: VV("screenshotMode:entrySub"),
        onClick: fe.d
      }) : null
    }
    var Ke = xV(35232);
    const He = (0, JV.memo)((function(VV) {
        let {
          inGame: eV
        } = VV;
        const {
          t: xV,
          selectedLanguage: JV
        } = (0, yV.A)(), {
          clientEscMenuOptions: YV,
          showDebugOverlay: UV,
          isTouchScreen: pV
        } = (0, AV.l)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), QV = (0, bV.j)("hideCoordinates");
        let nV = "settingsMenu:showCoordinates",
          wV = "settingsMenu:showChunkCoordinates";

        function vV(VV) {
          const eV = new Intl.DisplayNames([VV], {
            type: "language"
          }).of(VV);
          return eV.charAt(0).toUpperCase() + eV.slice(1)
        }
        return QV && (nV = "settingsMenu:showCoordinatesHidden", wV = "settingsMenu:showChunkCoordinatesHidden"), (0, ZV.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [eV && BV.featureFlags.canUseInviteLinks && (0, ZV.jsxs)("div", {
            className: "SettingBox",
            children: [(0, ZV.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: xV("settingsMenu:inviteLink")
            }), (0, ZV.jsx)(ae.g, {})]
          }), (0, ZV.jsxs)("div", {
            className: "SettingBox",
            children: [(0, ZV.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: xV("settingsMenu:language")
            }), (0, ZV.jsx)(oe.c, {
              options: Object.entries(yV.g).map((VV => {
                let [eV, xV] = VV;
                return {
                  label: (0, ZV.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, ZV.jsx)("img", {
                      src: xV.flagImg,
                      alt: "flag"
                    }), (0, ZV.jsxs)("span", {
                      children: [vV(eV), " ", (0, ZV.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", eV, ")"]
                      })]
                    })]
                  }),
                  value: eV
                }
              })),
              value: JV.code,
              onChange: VV => {
                ce.c.get().setCurrentLanguage(VV.value)
              }
            })]
          }), eV && pV && (0, Ke.b)() && (0, ZV.jsx)(me, {}), !(0, BV.isMobileApp)() && (0, he.k)() && BV.featureFlags.useForceRotateForceFullscreenOverlay && (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:disableFullscreenMode"),
            checked: YV.disableFullscreen,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                disableFullscreen: VV
              })
            }
          }), (0, ZV.jsx)(PV.e, {
            label: xV(nV),
            checked: YV.showCoordinates,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                showCoordinates: VV
              })
            },
            disabled: QV
          }), (0, ZV.jsx)(PV.e, {
            label: xV(wV),
            checked: YV.showChunkCoordinates,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                showChunkCoordinates: VV
              })
            },
            disabled: QV
          }), (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:showFps"),
            checked: YV.showFPS,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                showFPS: VV
              })
            }
          }), (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:disableBunnyHopping"),
            checked: YV.disableBunnyHopping,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                disableBunnyHopping: VV
              })
            }
          }), (0, qe.s)() && (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:showChat"),
            checked: YV.showChat,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                showChat: VV
              })
            }
          }), (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:showDebugOverlay"),
            checked: UV,
            onClick: VV => {
              AV.b.set({
                showDebugOverlay: VV
              })
            }
          }), BV.featureFlags.useSocialFeatures && (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:showFriendOnlineToasts"),
            checked: YV.showFriendOnlineToasts,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                showFriendOnlineToasts: VV
              })
            }
          }), (0, ZV.jsx)(PV.e, {
            label: xV("settingsMenu:showNewItemIndicator"),
            checked: YV.showNewItemIndicator,
            onClick: VV => {
              AV.b.setClientEscMenuOptions({
                showNewItemIndicator: VV
              })
            }
          })]
        })
      })),
      ue = (0, JV.memo)((function() {
        const {
          t: VV
        } = (0, yV.A)(), {
          soundVolume: eV,
          musicVolume: xV
        } = (0, AV.l)(["soundVolume", "musicVolume"]);
        return (0, ZV.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, ZV.jsx)(PV.m, {
            name: VV("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: xV,
            onChange: VV => {
              AV.b.set({
                musicVolume: Math.round(100 * VV) / 100
              })
            },
            format: VV => VV.toFixed(2)
          }), (0, ZV.jsx)(PV.m, {
            name: VV("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: eV,
            onChange: VV => {
              AV.b.set({
                soundVolume: Math.round(100 * VV) / 100
              })
            },
            format: VV => VV.toFixed(2)
          })]
        })
      }));
    var se = xV(742),
      Se = xV(1542),
      Ie = xV(2564),
      de = xV(2555),
      Oe = xV(3931);
    const Vx = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function ex() {
      const {
        t: VV
      } = (0, yV.A)(), eV = (0, Oe.e)(), {
        mobilePushNotificationsCanAsk: xV
      } = (0, AV.l)(["mobilePushNotificationsCanAsk"]), [YV, UV] = (0, JV.useState)(null), [pV, QV] = (0, JV.useState)(!1), [wV, vV] = (0, JV.useState)(null), [rV, kV] = (0, JV.useState)(!1), bV = (0, JV.useCallback)((() => {
        (0, Ie.d)().then((VV => {
          eV.current && (UV(VV), QV(!1))
        })).catch((VV => {
          console.error("Failed to load push notification targets:", VV), eV.current && QV(!0)
        }))
      }), [eV]), EV = (0, JV.useCallback)((() => {
        (0, de.h)().then((VV => {
          eV.current && vV((() => VV))
        }))
      }), [eV]);
      (0, JV.useEffect)((() => {
        bV()
      }), [bV]), (0, JV.useEffect)((() => {
        EV()
      }), [EV, xV]), (0, Se.g)(Ie.i, bV);
      const BV = null === YV ? [] : Object.keys(Vx).filter((VV => YV[VV] > 0));
      return (0, ZV.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, ZV.jsx)("div", {
          className: "SliderText",
          children: VV("notificationSettings:pushNotifications")
        }), null === YV && pV && (0, ZV.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: VV("notificationSettings:pushTargetsLoadFailed")
        }), null !== YV && 0 === BV.length && (0, ZV.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: VV("notificationSettings:pushTargetsNone")
        }), BV.length > 0 && (0, ZV.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: BV.map((eV => {
            var xV;
            return (0, ZV.jsx)("li", {
              children: VV(Vx[eV], {
                count: null !== (xV = null === YV || void 0 === YV ? void 0 : YV[eV]) && void 0 !== xV ? xV : 0
              })
            }, eV)
          }))
        }), null !== wV && (0, ZV.jsx)(nV.f, {
          className: "PushNotificationSettingsButton",
          loading: rV,
          onClick: () => {
            kV(!0), wV().catch((VV => {
              console.error("Failed to turn on push notifications:", VV)
            })).finally((() => {
              eV.current && (kV(!1), EV())
            }))
          },
          children: VV("notificationSettings:pushTurnOn")
        })]
      })
    }
    var xx = xV(2808),
      Jx = xV(2546),
      Yx = xV(40);
    async function Ux() {
      return "dailyDropReminderAsked_" + (await zV.userContextManager.getCurrentUserContext()).whamm
    }

    function yx(VV) {
      return async function(VV) {
        if (VV.remindersOn || (0, AV.d)(AV.b.get("gameState"))) return null;
        const eV = await Ux();
        if (null !== Yx.m.getItem(eV)) return null;
        const [xV, JV] = await Promise.all([(0, de.h)().catch((VV => (console.error("Couldn't tell whether this device can take push notifications:", VV), null))), px()]);
        if (null === xV && !JV) return null;
        if (null !== xV && ((0, Jx.e)() || (0, de.k)())) return null;
        return {
          askedKey: eV,
          requester: xV
        }
      }(VV).catch((VV => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", VV), null)))
    }

    function px() {
      return (0, Ie.d)().then((VV => VV.app + VV.browser + VV.msnPlay > 0), (VV => (console.error("Couldn't tell where push notifications reach this account:", VV), !0)))
    }
    async function Qx(VV) {
      const eV = (0, xx.u)({
          remindersOn: !0
        }),
        xV = null === VV ? Promise.resolve() : VV(),
        [JV, YV] = await Promise.allSettled([eV, xV]);
      "rejected" === JV.status && console.error("Failed to turn on Lucky Skin Block reminders:", JV.reason), "rejected" === YV.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", YV.reason), "rejected" !== JV.status && "rejected" !== YV.status || ge.e.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const nx = {
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
      wx = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function Zx(VV) {
      let {
        setting: eV,
        value: xV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)(), pV = (0, Oe.e)(), [QV, nV] = (0, JV.useState)(null), [wV, vV] = (0, JV.useState)(!1), [rV, kV] = (0, JV.useState)(null);
      return (0, JV.useEffect)((() => {
        "remindersOn" === eV && (0, de.h)().then((VV => {
          pV.current && kV((() => VV))
        }), (VV => {
          console.error("Couldn't tell whether this device can take push notifications:", VV)
        }))
      }), [eV, pV]), (0, ZV.jsx)(PV.e, {
        className: UV()({
          DailyDropSettingFailed: wV
        }),
        label: YV(wx[eV].label),
        checked: null !== QV && void 0 !== QV ? QV : xV,
        note: wV ? YV("dailyDrop:settingFailed") : void 0,
        onClick: VV => {
          null === QV && (nV(VV), vV(!1), VV && null !== rV && rV().catch((VV => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", VV)
          })), (0, xx.s)("daily_drop.setting", `${wx[eV].reportAs}_${VV?"on":"off"}`), "remindersOn" === eV && Ux().then((VV => {
            Yx.m.setItem(VV, !0)
          }), (VV => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", VV)
          })), (0, xx.u)("hidden" === eV ? {
            hidden: VV
          } : {
            remindersOn: VV
          }).catch((VV => {
            console.error(`Failed to save the Lucky Skin Block's ${eV} setting:`, VV), pV.current && vV(!0)
          })).finally((() => {
            pV.current && nV(null)
          })))
        }
      })
    }
    const vx = (0, JV.memo)((function() {
      const {
        t: VV
      } = (0, yV.A)(), {
        clientEscMenuOptions: eV
      } = (0, AV.l)(["clientEscMenuOptions"]), {
        userContext: xV
      } = (0, kV.d)(), JV = xV.dailyDrop;
      return (0, ZV.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [BV.featureFlags.useSocialFeatures && (0, ZV.jsx)(PV.i, {
          label: VV("notificationSettings:friendRequests"),
          options: se.c.map((eV => ({
            value: eV,
            label: VV(nx[eV].label)
          }))),
          value: eV.friendRequestNotifications,
          onChange: VV => {
            AV.b.setClientEscMenuOptions({
              friendRequestNotifications: VV
            })
          },
          circleInfoText: (0, ZV.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: se.c.map((eV => (0, ZV.jsxs)("div", {
              children: [(0, ZV.jsx)("b", {
                children: VV(nx[eV].label)
              }), ": ", VV(nx[eV].info)]
            }, eV)))
          })
        }), null !== JV && (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsx)(Zx, {
            setting: "remindersOn",
            value: JV.remindersOn
          }), (0, ZV.jsx)(Zx, {
            setting: "hidden",
            value: JV.hidden
          })]
        }), (0, ZV.jsx)(ex, {})]
      })
    }));
    var rx = xV(4975),
      kx = xV(206),
      bx = xV(348),
      Ex = xV(7216),
      Bx = xV(3907),
      jx = xV(35238),
      qx = xV(657),
      tx = xV(32);
    var Fx = xV(686),
      Tx = xV(4798);
    const Px = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Ax(VV) {
      return Px.has(VV) ? jV.gameBridge.lookup("lF", null) : null
    }

    function Nx(VV) {
      if (!(0, qx.J)(AV.b.get("clientEscMenuOptions")[VV])) return AV.b.get("clientEscMenuOptions")[VV];
      const eV = Ax(VV);
      return null !== eV ? eV[Px.get(VV)] : Yx.m.getItem(VV)
    }

    function Xx(VV, eV) {
      if ("useTouchControls" === VV) return void(0, Tx.c)(eV);
      VV in AV.b.get("clientEscMenuOptions") && AV.b.setClientEscMenuOptions({
        [VV]: eV
      });
      const xV = Ax(VV);
      null !== xV && jV.gameBridge.send("setChunkAddDistance", {
        ...xV,
        [Px.get(VV)]: eV
      }), Yx.m.setItem(VV, eV)
    }
    var Mx = xV(4895),
      zx = xV(35240),
      Gx = xV(35247),
      Wx = xV(4973),
      Rx = xV(35259);

    function gx(VV) {
      var eV, YV, pV, QV;
      let {
        minChunkAddDist: nV,
        getValue: wV,
        onChange: vV,
        setApplySettingsCallback: rV
      } = VV;
      const {
        t: kV
      } = (0, yV.A)(), {
        clientEscMenuOptions: EV
      } = (0, AV.l)(["clientEscMenuOptions", "showDistantNametags"]), jV = (0, JV.useRef)(wV("showFog")), qV = (0, JV.useRef)(EV.antiAliasing), tV = (0, JV.useRef)(EV.useWebGpu), [FV, TV] = (0, JV.useState)(null), [XV, MV] = (0, JV.useState)(!1), [zV, GV] = (0, JV.useState)((() => (0, Bx.e)(BV.featureFlags.settings.canUseShaderPacks))), [WV] = (0, JV.useState)((() => AV.b.isWebGpuDefaultOff())), [RV] = (0, JV.useState)(bx.l), [gV] = (0, JV.useState)((() => !0 === Yx.m.getItem(te.jc))), [DV] = (0, JV.useState)((() => AV.b.isWebGpuOnStored()));
      (0, JV.useEffect)((() => {
        let VV = !1;
        return (0, BV.hasUsableWebGpuAdapter)().then((async eV => {
          const xV = gV || DV,
            JV = !eV && Fx.I && await (0, Rx.f)(xV);
          VV || (TV(eV || JV), MV(JV))
        })), (0, Bx.h)(BV.featureFlags.settings.canUseShaderPacks) && (0, Ex.f)().then((async eV => {
          const JV = null !== eV && await async function(VV) {
            const [{
              isShaderPackActive: eV
            }, {
              loadPageShaderPackCompiler: JV
            }] = await Promise.all([xV.e(152).then((() => xV(7212))), Promise.all([xV.e(89), xV.e(149), xV.e(151)]).then((() => xV(7176)))]);
            return eV(VV, await JV())
          }(eV);
          VV || GV(JV)
        })), () => {
          VV = !0
        }
      }), [gV, DV]);
      const iV = (!(zV && !gV) || !XV) && FV,
        CV = function(VV, eV, xV, JV, YV) {
          return (0, jx.e)(xV, JV) && !0 === eV ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== eV ? "settingsMenu:newWebGpu" : YV ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: VV && !1 !== eV,
            disabled: !0 !== eV
          }
        }(EV.useWebGpu, iV, zV, WV, RV),
        aV = (EV.useWebGpu || (0, jx.e)(zV, WV)) && zV && !0 === iV,
        oV = (0, bV.j)("lightingOverride"),
        cV = !(0, qx.J)(oV);
      let hV = "settingsMenu:enableLighting";
      cV && (hV = oV ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const lV = VV => {
          var eV, xV, JV;
          const YV = null !== (eV = VV.showFog) && void 0 !== eV ? eV : wV("showFog"),
            UV = null !== (xV = VV.antiAliasing) && void 0 !== xV ? xV : EV.antiAliasing,
            yV = null !== (JV = VV.useWebGpu) && void 0 !== JV ? JV : EV.useWebGpu,
            pV = !Fx.I && YV !== jV.current || UV !== qV.current || yV !== tV.current;
          rV(pV ? () => PV.q : null)
        },
        LV = (0, bV.j)("fogChunkDistanceOverride"),
        fV = (0, bV.j)("fogBlockDistanceOverride"),
        mV = !(0, qx.J)(LV) || !(0, qx.J)(fV),
        KV = mV ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [HV, uV] = (0, rx.g)(nV),
        [sV, SV] = (0, Wx.g)(nV),
        IV = kV("settingsMenu:chunkLoadDistanceDeviceLimit"),
        dV = sV < HV,
        OV = Math.min(null !== (eV = wV("chunkHorizAddDist")) && void 0 !== eV ? eV : nV[0], sV),
        Ve = !mV && function(VV, eV) {
          return !0 === VV.showFog && VV.fogChunkDistance > eV
        }(EV, OV);
      return (0, ZV.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, ZV.jsx)(PV.m, {
          name: kV("settingsMenu:horizontalChunkLoadDistance"),
          min: nV[0],
          max: HV,
          selectableMax: sV,
          cappedNote: IV,
          step: 1,
          initValue: OV,
          onChange: VV => {
            !0 === wV("showFog") && VV < wV("fogChunkDistance") && vV("fogChunkDistance", VV), vV("chunkHorizAddDist", VV), tx.h.QZ("updatedChunkLoadDist")
          },
          circleInfoText: kV("settingsMenu:chunkLoadDistanceInfo")
        }), (0, ZV.jsx)(PV.m, {
          name: kV("settingsMenu:verticalChunkLoadDistance"),
          min: nV[1],
          max: uV,
          selectableMax: SV,
          cappedNote: dV ? void 0 : IV,
          step: 1,
          initValue: Math.min(null !== (YV = wV("chunkVertAddDist")) && void 0 !== YV ? YV : nV[1], SV),
          onChange: VV => {
            vV("chunkVertAddDist", VV), tx.h.QZ("updatedChunkLoadDist")
          },
          circleInfoText: kV("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, ZV.jsx)(PV.e, {
          label: kV("settingsMenu:chunkFadeIn"),
          checked: EV.chunkFadeIn,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              chunkFadeIn: VV
            })
          },
          circleInfoText: kV("settingsMenu:chunkFadeInInfo")
        }), NV.devTools.supports("chunkBorders") && (0, ZV.jsx)(PV.e, {
          label: kV("settingsMenu:showChunkBorders"),
          checked: EV.showChunkBorders,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              showChunkBorders: VV
            })
          },
          circleInfoText: kV("settingsMenu:showChunkBordersInfo")
        }), (0, ZV.jsx)(PV.e, {
          label: kV(hV),
          checked: EV.enableLighting,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              enableLighting: VV
            })
          },
          disabled: cV
        }), (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ZV.jsx)(PV.e, {
            label: kV(KV),
            checked: EV.showFog,
            onClick: VV => {
              lV({
                showFog: VV
              }), AV.b.setClientEscMenuOptions({
                showFog: VV
              })
            },
            disabled: mV,
            className: UV()({
              SettingBoxWarning: Ve
            })
          }), (0, ZV.jsx)(PV.m, {
            name: kV("settingsMenu:fogChunkDistance"),
            min: nV[0],
            max: kx.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (pV = EV.fogChunkDistance) && void 0 !== pV ? pV : nV[0],
            onChange: VV => {
              AV.b.setClientEscMenuOptions({
                fogChunkDistance: VV
              }), tx.h.QZ("fogChunkDistanceChanged", VV)
            },
            circleInfoText: kV("settingsMenu:fogChunkDistanceInfo"),
            disabled: mV || !1 === wV("showFog"),
            className: UV()({
              SettingBoxWarning: Ve
            })
          }), Ve && (0, ZV.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: kV("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Fx.I && (0, ZV.jsx)(PV.e, {
          label: kV(aV ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !aV && EV.disableTexAtlas,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              disableTexAtlas: VV
            })
          },
          circleInfoText: kV("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: aV
        }), (0, ZV.jsx)(PV.m, {
          name: kV("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: EV.cameraFOV,
          onChange: VV => {
            AV.b.setClientEscMenuOptions({
              cameraFOV: VV
            })
          }
        }), (0, ZV.jsx)(PV.e, {
          label: kV("settingsMenu:disableViewBobbing"),
          checked: EV.disableBobbing,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              disableBobbing: VV
            })
          },
          circleInfoText: kV("settingsMenu:disableViewBobbingInfo")
        }), (0, ZV.jsx)(PV.e, {
          label: kV("settingsMenu:antiAliasing"),
          checked: EV.antiAliasing,
          onClick: VV => {
            lV({
              antiAliasing: VV
            }), (0, Mx.g)("antiAliasing"), AV.b.setClientEscMenuOptions({
              antiAliasing: VV
            })
          },
          circleInfoText: kV("settingsMenu:antiAliasingInfo")
        }), (0, ZV.jsx)(PV.m, {
          name: kV("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (QV = EV.pixelScale) && void 0 !== QV ? QV : 1,
          onChange: VV => {
            (VV !== AV.b.get("clientEscMenuOptions").pixelScale || (0, Gx.n)()) && (0, Mx.g)("pixelScale"), AV.b.setClientEscMenuOptions({
              pixelScale: VV
            })
          },
          circleInfoText: kV("settingsMenu:pixelScaleInfo"),
          format: VV => `${VV}x`
        }), (0, ZV.jsx)(PV.e, {
          label: kV("settingsMenu:pixelSmoothing"),
          checked: EV.pixelSmoothing,
          onClick: VV => {
            AV.b.setClientEscMenuOptions({
              pixelSmoothing: VV
            })
          },
          circleInfoText: kV("settingsMenu:pixelSmoothingInfo")
        }), Fx.I && (0, ZV.jsx)(PV.e, {
          label: kV("settingsMenu:distantNametags"),
          checked: (0, zx.d)(),
          onClick: VV => {
            AV.b.set({
              showDistantNametags: VV
            })
          },
          circleInfoText: kV("settingsMenu:distantNametagsInfo")
        }), (0, ZV.jsx)(PV.e, {
          label: kV(CV.translationKey),
          checked: CV.checked,
          onClick: VV => {
            lV({
              useWebGpu: VV
            }), AV.b.setClientEscMenuOptions({
              useWebGpu: VV
            })
          },
          circleInfoText: kV("settingsMenu:newWebGpuInfo"),
          disabled: CV.disabled
        })]
      })
    }
    var Dx = xV(4887),
      ix = xV(9469),
      Cx = xV(35268),
      ax = xV(9475),
      ox = xV(35272);
    const cx = {
        color: 16777215,
        name: "white"
      },
      hx = {
        color: 0,
        name: "black"
      },
      lx = [cx, {
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
      }, hx],
      Lx = [hx, cx];

    function fx(VV) {
      return `${VV} px`
    }

    function mx(VV) {
      return `${VV}%`
    }

    function Kx(VV) {
      let {
        label: eV,
        value: xV,
        swatches: JV,
        onChange: YV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)(), QV = !JV.some((VV => VV.color === xV));
      return (0, ZV.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, ZV.jsx)("div", {
          className: "SliderText",
          children: eV
        }), (0, ZV.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": eV,
          children: [JV.map((VV => {
            let {
              color: eV,
              name: JV
            } = VV;
            return (0, ZV.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": eV === xV,
              "aria-label": pV(`crosshairSettings:color_${JV}`),
              "data-pad-focusable": !0,
              className: UV()("CrosshairSwatch", {
                Selected: eV === xV
              }),
              style: {
                background: (0, ox.l)(eV)
              },
              onClick: () => {
                YV(eV)
              }
            }, eV)
          })), (0, ZV.jsx)("label", {
            className: UV()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: QV
            }),
            style: QV ? {
              background: (0, ox.l)(xV)
            } : void 0,
            title: pV("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, ZV.jsx)("input", {
              type: "color",
              "aria-label": pV("crosshairSettings:customColor"),
              value: (0, ox.l)(xV),
              onChange: VV => {
                const eV = (0, ox.q)(VV.target.value);
                null !== eV && YV(eV)
              }
            })
          })]
        })]
      })
    }

    function Hx(VV) {
      let {
        settings: eV,
        onChange: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)(), YV = (VV, JV) => {
        xV((0, ox.w)(eV, VV, JV))
      }, UV = function(VV, xV) {
        let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fx;
        const {
          min: UV,
          max: yV,
          step: pV
        } = ox.b[VV];
        return (0, ZV.jsx)(PV.m, {
          name: xV,
          min: UV,
          max: yV,
          step: pV,
          initValue: eV[VV],
          format: JV,
          onChange: eV => {
            YV(VV, eV)
          }
        }, VV)
      }, pV = ["lines", "dot", "circle"].filter((VV => eV[VV])), QV = (VV, xV, JV) => (0, ZV.jsx)(PV.e, {
        label: xV,
        checked: eV[VV],
        disabled: 1 === pV.length && pV[0] === VV,
        circleInfoText: JV,
        onClick: eV => {
          YV(VV, eV)
        }
      }, VV), nV = "shapes" === eV.style;
      return (0, ZV.jsxs)(ZV.Fragment, {
        children: [(0, ZV.jsx)(PV.i, {
          label: JV("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: JV("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: JV("crosshairSettings:styleShapes")
          }],
          value: eV.style,
          onChange: VV => {
            YV("style", VV)
          }
        }), (0, ZV.jsx)(Kx, {
          label: JV("crosshairSettings:color"),
          value: eV.color,
          swatches: lx,
          onChange: VV => {
            YV("color", VV)
          }
        }), UV("opacity", JV("crosshairSettings:opacity"), mx), !nV && UV("size", JV("crosshairSettings:size"), mx), nV && (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QV("lines", JV("crosshairSettings:lines")), eV.lines && UV("lineLength", JV("crosshairSettings:lineLength")), eV.lines && UV("lineThickness", JV("crosshairSettings:lineThickness")), eV.lines && UV("gap", JV("crosshairSettings:gap")), eV.lines && QV("tStyle", JV("crosshairSettings:tStyle"))]
        }), nV && (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QV("dot", JV("crosshairSettings:dot")), eV.dot && UV("dotSize", JV("crosshairSettings:dotSize"))]
        }), nV && (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QV("circle", JV("crosshairSettings:circle")), eV.circle && UV("circleRadius", JV("crosshairSettings:circleRadius")), eV.circle && UV("circleThickness", JV("crosshairSettings:circleThickness"))]
        }), (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [UV("outline", JV("crosshairSettings:outline"), (VV => VV > 0 ? fx(VV) : JV("crosshairSettings:off"))), eV.outline > 0 && (0, ZV.jsx)(Kx, {
            label: JV("crosshairSettings:outlineColor"),
            value: eV.outlineColor,
            swatches: Lx,
            onChange: VV => {
              YV("outlineColor", VV)
            }
          })]
        }), QV("growOnClick", JV("crosshairSettings:growOnClick")), nV && QV("forGuns", JV("crosshairSettings:forGuns"), JV("crosshairSettings:forGunsInfo"))]
      })
    }
    var ux = xV(78),
      sx = xV(1309),
      Sx = xV(13474),
      Ix = xV(14627),
      dx = xV(16087),
      Ox = xV(16618);
    const VJ = ["sky", "grass", "stone", "sand", "snow", "night"],
      eJ = "4rem";

    function xJ(VV) {
      return {
        backgroundImage: `url(${VV})`,
        backgroundSize: `${eJ} ${eJ}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function JJ(VV) {
      return {
        ...(() => {
          switch (VV) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return xJ(Sx);
            case "stone":
              return xJ(Ix);
            case "sand":
              return xJ(dx);
            case "snow":
              return xJ(Ox);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function YJ(VV) {
      return Object.freeze({
        ...ox.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...VV
      })
    }
    const UJ = [{
        id: "default",
        settings: ox.f
      }, {
        id: "cross",
        settings: YJ({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: YJ({
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
        settings: YJ({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: YJ({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: YJ({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: YJ({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: YJ({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      yJ = ["growOnClick", "forGuns"];
    var pJ = xV(35275);

    function QJ(VV) {
      let {
        label: eV,
        selected: xV,
        onClick: JV,
        className: YV,
        style: yV,
        children: pV
      } = VV;
      return (0, ZV.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": xV,
        title: eV,
        "aria-label": eV,
        "data-pad-focusable": !0,
        className: UV()("CrosshairBackdropSwatch", YV, {
          Selected: xV
        }),
        style: yV,
        onClick: JV,
        children: pV
      })
    }

    function nJ(VV) {
      let {
        backdrop: eV,
        onChange: xV,
        game: JV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)();
      return (0, ZV.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": YV("crosshairSettings:background"),
        children: [JV && (0, ZV.jsx)(QJ, {
          label: YV("crosshairSettings:bg_game"),
          selected: JV.selected,
          onClick: JV.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, ZV.jsx)(pV.b, {
            name: "cube"
          })
        }), VJ.map((VV => (0, ZV.jsx)(QJ, {
          label: YV(`crosshairSettings:bg_${VV}`),
          selected: !(null !== JV && void 0 !== JV && JV.selected) && VV === eV,
          style: JJ(VV),
          onClick: () => {
            xV(VV)
          }
        }, VV)))]
      })
    }

    function wJ(VV) {
      let {
        settings: eV,
        touch: xV,
        backdrop: JV,
        onChange: YV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)(), QV = function(VV) {
        var eV;
        return null !== (eV = UJ.find((eV => (0, ox.u)(eV.settings, VV, yJ)))) && void 0 !== eV ? eV : null
      }(eV);
      return (0, ZV.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": pV("crosshairSettings:presets"),
        children: UJ.map((VV => {
          const yV = (null === QV || void 0 === QV ? void 0 : QV.id) === VV.id;
          return (0, ZV.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": yV,
            "data-pad-focusable": !0,
            className: UV()("CrosshairPreset", {
              Selected: yV
            }),
            onClick: () => {
              YV(function(VV, eV) {
                return {
                  ...eV.settings,
                  growOnClick: VV.growOnClick,
                  forGuns: VV.forGuns
                }
              }(eV, VV))
            },
            children: [(0, ZV.jsx)("div", {
              className: "CrosshairPresetStage",
              style: JJ(JV),
              children: (0, ZV.jsx)(pJ.c, {
                settings: VV.settings,
                touch: xV,
                inPreview: !0
              })
            }), (0, ZV.jsx)("div", {
              className: "CrosshairPresetName",
              children: pV(`crosshairSettings:preset_${VV.id}`)
            })]
          }, VV.id)
        }))
      })
    }
    var ZJ = xV(1767);

    function vJ(VV, eV) {
      const [xV, YV] = (0, JV.useState)(!1), UV = () => {
        YV(!1)
      }, [yV, pV] = (0, JV.useState)(!1), QV = (0, JV.useRef)({
        growOnClick: VV.growOnClick,
        forGuns: VV.forGuns
      });
      (0, JV.useEffect)((() => {
        const eV = QV.current;
        QV.current = {
          growOnClick: VV.growOnClick,
          forGuns: VV.forGuns
        }, (VV.growOnClick && !eV.growOnClick || VV.forGuns && !eV.forGuns) && pV(!0)
      }), [VV.growOnClick, VV.forGuns]), (0, JV.useEffect)((() => {
        if (!yV) return;
        const VV = setTimeout((() => {
          pV(!1)
        }), 600);
        return () => {
          clearTimeout(VV)
        }
      }), [yV]);
      const nV = xV || yV;
      return {
        view: {
          pressed: nV,
          spread: nV && VV.forGuns && !VV.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: VV => {
            !VV.target.closest(eV) && (0, ZJ.c)(VV.currentTarget, VV.pointerId) && YV(!0)
          },
          onPointerUp: UV,
          onPointerCancel: UV,
          onLostPointerCapture: UV
        }
      }
    }

    function rJ(VV) {
      let {
        settings: eV,
        touch: xV,
        backdrop: JV,
        className: YV,
        children: yV,
        label: pV
      } = VV;
      const QV = vJ(eV, ".CrosshairStageControls");
      return (0, ZV.jsxs)("div", {
        className: UV()("CrosshairStage", YV),
        style: JJ(JV),
        ...QV.handlers,
        children: [(0, ZV.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": pV,
          children: (0, ZV.jsx)(pJ.c, {
            settings: eV,
            touch: xV,
            inPreview: !0,
            ...QV.view
          })
        }), yV]
      })
    }
    const kJ = "crosshairFullScreen";

    function bJ(VV) {
      let {
        settings: eV,
        touch: xV,
        backdrop: YV,
        onBackdrop: QV,
        inGame: wV,
        onChange: vV,
        onClose: rV
      } = VV;
      const {
        t: kV
      } = (0, yV.A)(), bV = (0, JV.useRef)(null);
      (0, sx.s)("popup", bV, rV),
      function(VV) {
        const eV = (0, JV.useRef)(VV);
        eV.current = VV, (0, JV.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [kJ]: !0
          }, "");
          let VV = !1;
          const xV = () => {
            VV = !0, eV.current()
          };
          return window.addEventListener("popstate", xV), () => {
            var eV;
            window.removeEventListener("popstate", xV), !VV && null !== (eV = window.history.state) && void 0 !== eV && eV[kJ] && window.history.back()
          }
        }), [])
      }(rV);
      const EV = (0, JV.useRef)(rV);
      EV.current = rV, (0, JV.useEffect)((() => {
        function VV(VV) {
          "Escape" === VV.key && (VV.stopPropagation(), EV.current())
        }
        return window.addEventListener("keydown", VV, !0), () => {
          window.removeEventListener("keydown", VV, !0)
        }
      }), []);
      const BV = vJ(eV, ".CrosshairFullScreenPanel"),
        [jV, qV] = (0, JV.useState)(!0),
        tV = jV && wV;
      (0, JV.useEffect)((() => {
        if (tV) return AV.b.set({
          crosshairGameView: !0
        }), () => {
          AV.b.set({
            crosshairGameView: !1
          })
        }
      }), [tV]);
      const [FV, TV] = (0, JV.useState)(!0);
      return (0, ux.createPortal)((0, ZV.jsxs)("div", {
        ref: bV,
        className: "CrosshairFullScreen",
        style: tV ? void 0 : JJ(YV),
        ...BV.handlers,
        children: [(0, ZV.jsx)(pJ.c, {
          settings: eV,
          touch: xV,
          inEditor: !0,
          ...BV.view
        }), (0, ZV.jsxs)("div", {
          className: UV()("CrosshairFullScreenPanel", {
            Collapsed: !FV
          }),
          children: [(0, ZV.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, ZV.jsx)(nJ, {
              backdrop: YV,
              onChange: VV => {
                qV(!1), QV(VV)
              },
              game: wV ? {
                selected: tV,
                onSelect: () => {
                  qV(!0)
                }
              } : void 0
            }), (0, ZV.jsx)(nV.M, {
              className: "CrosshairPanelToggle",
              ariaLabel: kV(FV ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                TV(!FV)
              },
              children: (0, ZV.jsx)(pV.b, {
                name: FV ? "caret-up" : "pen"
              })
            }), (0, ZV.jsx)(nV.f, {
              className: "CrosshairFullScreenDone",
              onClick: rV,
              padDefaultFocus: !0,
              children: kV("crosshairSettings:done")
            })]
          }), FV && (0, ZV.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, ZV.jsx)(wJ, {
              settings: eV,
              touch: xV,
              backdrop: YV,
              onChange: vV
            }), (0, ZV.jsx)(Hx, {
              settings: eV,
              onChange: vV
            })]
          })]
        })]
      }), document.body)
    }
    var EJ = xV(2966),
      BJ = xV(35285);

    function jJ(VV) {
      let {
        settings: eV,
        onChange: xV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)(), QV = (0, BJ.j)(eV), [wV, vV] = (0, EJ.d)(), [rV, kV] = (0, JV.useState)(!1), bV = (0, JV.useRef)(null), [EV, BV] = (0, EJ.d)(), [jV, qV] = (0, JV.useState)(!1);
      return (0, ZV.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, ZV.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, ZV.jsxs)(nV.M, {
            className: UV()("CrosshairCopy", {
              ActiveSecondaryButton: wV
            }),
            onClick: () => {
              (0, EJ.c)(QV, {
                useShareSheet: !1,
                onOutcome: VV => {
                  kV("failed" === VV), "copied" === VV && vV()
                }
              })
            },
            children: [(0, ZV.jsx)(pV.b, {
              name: wV ? "check" : "copy"
            }), " ", YV(wV ? "general:copied" : "crosshairSettings:copy")]
          }), (0, ZV.jsx)(FV.d, {
            className: "CrosshairPaste",
            domRef: bV,
            ariaLabel: YV("crosshairSettings:paste"),
            placeholderText: YV("crosshairSettings:paste"),
            onValueChange: VV => {
              const eV = (0, BJ.h)(VV);
              qV(!eV && VV.trim().length >= BJ.d), eV && (xV(eV), bV.current.value = "", BV())
            }
          })]
        }), rV && (0, ZV.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: QV,
          "aria-label": YV("crosshairSettings:copy"),
          onFocus: VV => {
            VV.currentTarget.select()
          }
        }), (0, ZV.jsxs)("div", {
          "aria-live": "polite",
          children: [jV && (0, ZV.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: YV("crosshairSettings:pasteInvalid")
          }), EV && !jV && (0, ZV.jsx)("div", {
            className: "CrosshairShareNote",
            children: YV("crosshairSettings:applied")
          })]
        })]
      })
    }
    var qJ = xV(35292);
    let tJ = "sky";

    function FJ(VV) {
      let {
        showing: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)(), {
        isTouchScreen: YV,
        gameState: UV,
        clientEscMenuOptions: QV
      } = (0, AV.l)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), wV = (0, qJ.h)(), [vV, rV] = (0, JV.useState)(tJ), kV = VV => {
        tJ = VV, rV(VV)
      }, [bV, EV] = (0, JV.useState)(!1);
      return (0, JV.useEffect)((() => {
        eV || EV(!1)
      }), [eV]), (0, ZV.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, ZV.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, ZV.jsx)(rJ, {
            className: "CrosshairPreviewStage",
            settings: wV,
            touch: YV,
            backdrop: vV,
            label: xV("crosshairSettings:preview"),
            children: (0, ZV.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, ZV.jsx)(nJ, {
                backdrop: vV,
                onChange: kV
              }), (0, ZV.jsxs)(nV.M, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  EV(!0)
                },
                children: [(0, ZV.jsx)(pV.b, {
                  name: "expand"
                }), " ", xV("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, ZV.jsx)("div", {
          className: "SettingBox",
          children: (0, ZV.jsx)(wJ, {
            settings: wV,
            touch: YV,
            backdrop: vV,
            onChange: qJ.e
          })
        }), (0, ZV.jsx)(jJ, {
          settings: wV,
          onChange: qJ.e
        }), YV && (0, ZV.jsx)(ax.b, {
          note: (0, Cx.e)(YV, QV.touchActionButtons) ? xV("crosshairSettings:touchNote") : void 0
        }), (0, ZV.jsx)(Hx, {
          settings: wV,
          onChange: qJ.e
        }), bV && (0, ZV.jsx)(bJ, {
          settings: wV,
          touch: YV,
          backdrop: vV,
          onBackdrop: kV,
          inGame: "inGame" === UV,
          onChange: qJ.e,
          onClose: () => {
            EV(!1)
          }
        })]
      })
    }
    var TJ = xV(9471),
      PJ = xV(1488),
      AJ = xV(5494),
      NJ = xV(35296),
      XJ = xV(4674),
      MJ = xV(2109),
      zJ = xV(749);
    const GJ = (0, JV.memo)((function() {
      const {
        clientEscMenuOptions: VV
      } = (0, AV.l)(["clientEscMenuOptions"]), {
        recording: eV,
        clipping: xV,
        hasClipBuffer: YV
      } = (0, le.h)("replayRecorder"), yV = (0, le.e)("connectedGame", (VV => VV.replay)), pV = (0, XJ.n)(), QV = !1 === (0, bV.j)("canRecordReplays");
      (0, JV.useEffect)((() => {
        jV.gameBridge.send("setRecorderPrefs", {
          clipping: VV.enableClipping,
          clipSeconds: VV.clipDurationSeconds
        })
      }), [VV.enableClipping, VV.clipDurationSeconds]);
      const wV = pV || yV,
        vV = !wV && !QV,
        rV = eV || vV,
        kV = vV,
        EV = kV && xV && !eV;

      function BV() {
        rV && jV.gameBridge.send("toggleRecording", null)
      }
      return (0, ZV.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, ZV.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: eV ? (0, ZV.jsxs)(ZV.Fragment, {
              children: [(0, ZV.jsxs)(nV.E, {
                className: "ReplayViewerCategoryButton",
                onClick: BV,
                disabled: !rV,
                children: [(0, ZV.jsx)("span", {
                  children: "Stop Recording"
                }), (0, ZV.jsx)(MJ.d, {
                  noaAction: "recordGame"
                })]
              }), (0, ZV.jsx)(NJ.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, ZV.jsxs)(nV.f, {
              className: "ReplayViewerCategoryButton",
              onClick: BV,
              disabled: !rV,
              children: [(0, ZV.jsx)("span", {
                children: "Start Recording"
              }), (0, ZV.jsx)(MJ.d, {
                noaAction: "recordGame"
              })]
            })
          }), QV && (0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), wV && !eV && (0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, ZV.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ZV.jsx)(PV.e, {
            label: "Enable clipping",
            checked: VV.enableClipping,
            disabled: !kV,
            onClick: function(VV) {
              kV && AV.b.setClientEscMenuOptions({
                enableClipping: VV
              })
            },
            className: UV()({
              SettingBoxDisabled: !kV
            })
          }), (0, ZV.jsx)(PV.m, {
            name: "Clip duration (seconds)",
            min: zJ.l,
            max: zJ.h,
            step: zJ.d,
            initValue: VV.clipDurationSeconds,
            onChange: function(VV) {
              AV.b.setClientEscMenuOptions({
                clipDurationSeconds: VV
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !kV || !VV.enableClipping
          })]
        }), (0, ZV.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZV.jsxs)(nV.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              EV && jV.gameBridge.send("saveClip", null)
            },
            disabled: !EV,
            children: [(0, ZV.jsx)("span", {
              children: "Record clip"
            }), (0, ZV.jsx)(MJ.d, {
              noaAction: "recordClip"
            })]
          }), VV.enableClipping && !YV && kV && !eV && (0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), eV && (0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, ZV.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZV.jsxs)(nV.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, XJ.k)(!0), AV.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: pV,
            children: [(0, ZV.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, ZV.jsx)(MJ.d, {
              noaAction: "replayViewerOpen"
            })]
          }), pV && (0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, ZV.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZV.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, ZV.jsx)("iframe", {
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
    var WJ = xV(2014);
    const RJ = {
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
        icon: () => (0, ZV.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, ZV.jsx)("path", {
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
      Xk: {
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

    function gJ() {
      return Promise.all([xV.e(89), xV.e(149), xV.e(148), xV.e(144)]).then((() => xV(42398))).then((VV => ({
        default: VV.ShaderPackCategory
      })), (VV => (console.error("Failed to load the shader pack settings", VV), {
        default: DJ
      })))
    }

    function DJ() {
      const {
        t: VV
      } = (0, yV.A)();
      return (0, ZV.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: VV("shaderPack:tabLoadFailed")
      })
    }
    var iJ = xV(1473),
      CJ = xV(193);
    const aJ = /party\s*voice/i;
    let oJ = !1;

    function cJ(VV) {
      return Object.keys(VV).some((VV => VV.startsWith("__reactFiber$")))
    }
    const hJ = ".MenuSideBarBody, .MenuSideBarSection";

    function lJ(VV) {
      var eV;
      return (null !== (eV = VV.textContent) && void 0 !== eV ? eV : "").replace(/\s+/g, " ").trim()
    }

    function LJ(VV) {
      for (const eV of function(VV) {
          const eV = new Set;
          for (const xV of VV.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) eV.add(xV);
          for (const xV of [VV, ...VV.querySelectorAll(hJ)])
            for (const VV of xV.children) eV.add(VV);
          return [...eV]
        }(VV))
        if (!cJ(eV) || !eV.matches(hJ) && aJ.test(lJ(eV))) return eV;
      return null
    }

    function fJ(VV) {
      return VV.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const mJ = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function KJ(VV) {
      const eV = document.createTreeWalker(VV, NodeFilter.SHOW_TEXT, {
        acceptNode: VV => {
          var eV, xV;
          return mJ.has(null !== (eV = null === (xV = VV.parentElement) || void 0 === xV ? void 0 : xV.tagName.toUpperCase()) && void 0 !== eV ? eV : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let UV = eV.nextNode(); null !== UV; UV = eV.nextNode()) {
        var xV;
        const VV = (null !== (xV = UV.textContent) && void 0 !== xV ? xV : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== VV) {
          var JV, YV;
          return (null !== (JV = null === (YV = VV.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === YV ? void 0 : YV[0]) && void 0 !== JV ? JV : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function HJ(VV, eV) {
      const xV = fJ(eV).slice(0, 40) || "blank";
      return `${(fJ(VV.toLowerCase())||"none").slice(0,Math.max(23,CJ.S-1-xV.length))}:${xV}`.slice(0, CJ.S)
    }
    const uJ = (0, JV.lazy)((() => xV.e(301).then((() => xV(42380))).then((VV => ({
        default: VV.BloxdInformation
      }))))),
      sJ = (0, JV.lazy)(gJ);

    function SJ(VV) {
      return VV ? "general" : "account"
    }
    const IJ = new Map,
      dJ = (0, JV.memo)((function(VV) {
        let {
          show: eV,
          setBeforeResumeCallback: xV
        } = VV;
        (0, EV.e)();
        const {
          gameState: YV,
          openSettingsCategory: UV
        } = (0, AV.l)(["gameState", "openSettingsCategory"]), {
          userContext: QV
        } = (0, kV.d)(), {
          t: wV
        } = (0, yV.A)(), FV = (0, rV.c)(), TV = (0, bV.j)("minChunkAddDist"), PV = "inGame" === YV, [NV, zV] = (0, JV.useState)(SJ(PV)), [GV, WV] = (0, JV.useState)(null), [RV, gV] = (0, JV.useState)([]), DV = (0, JV.useRef)(function() {
          const VV = new Date,
            eV = 6 * (VV.getMonth() + VV.getDate()) % te.w.length;
          return [...te.w, ...te.w].slice(eV, eV + 6)
        }()), iV = (0, JV.useRef)(null), CV = (0, JV.useRef)(null), aV = (0, Se.j)(PJ.i, (0, PJ.c)()), oV = Object.keys(RJ).filter((VV => {
          switch (VV) {
            case "replayViewer":
              return PV;
            case "developerTools":
              return QV.playerHasRank("developer") || !1;
            case "texturePack":
              return BV.featureFlags.settings.canChangeTexturePack;
            case "Xk":
              return BV.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return BV.featureFlags.useSocialFeatures || null !== QV.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== MV.siteUsed;
            case "controller":
              return BV.featureFlags.useControllerSupport && (aV || "controller" === NV);
            default:
              return !0
          }
        }));
        (0, Se.g)("toggleFullCoordinateOverlay", (() => {
          const VV = Nx("showCoordinates") && Nx("showChunkCoordinates") && Nx("showFPS");
          Xx("showCoordinates", !VV), Xx("showChunkCoordinates", !VV), Xx("showFPS", !VV), FV()
        })), (0, Se.g)("updatedChunkLoadDist", (() => {
          FV()
        })), (0, JV.useEffect)((() => {
          if (WV(null), null === AV.b.get("openSettingsCategory")) {
            const VV = (0, iJ.m)() ? IJ.get(PV) : void 0;
            zV(VV && oV.includes(VV) ? VV : SJ(PV))
          }
        }), [eV]), (0, JV.useEffect)((() => {
          if (eV && CV.current) return function(VV) {
            if (oJ) return () => {};
            let eV = null,
              xV = null;
            const JV = () => {
                var VV;
                null !== xV && (clearTimeout(xV), xV = null), null === (VV = eV) || void 0 === VV || VV.disconnect(), eV = null
              },
              YV = () => {
                const eV = LJ(VV);
                null !== eV && (oJ = !0, JV(), (0, Ye.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: HJ(window.location.hostname, KJ(eV))
                }))
              };
            return xV = setTimeout((() => {
              xV = null, YV(), oJ || (eV = new MutationObserver(YV), eV.observe(VV, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), JV
          }(CV.current)
        }), [eV]), (0, JV.useEffect)((() => {
          null !== UV && (zV(UV), IJ.set(PV, UV), AV.b.set({
            openSettingsCategory: null
          }))
        }), [UV, PV]), (0, JV.useLayoutEffect)((() => {
          iV.current && (iV.current.scrollTop = 0)
        }), [NV, eV]), (0, JV.useEffect)((() => {
          "updateLog" === NV && (0, tV.c)().then(gV)
        }), [NV]), (0, JV.useEffect)((() => {
          if ((0, qx.J)(TV)) return;
          const [VV, eV] = (0, Dx.e)(), [xV, JV] = (0, rx.g)(TV), YV = (0, WJ.d)(TV[0], VV, xV), UV = (0, WJ.d)(TV[1], eV, JV);
          jV.gameBridge.send("setChunkAddDistance", {
            horizontal: YV,
            vertical: UV
          })
        }), [TV]);
        const cV = (0, JV.useCallback)((async () => {
          GV && (await GV(), WV(null))
        }), [GV]);

        function hV() {
          AV.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, JV.useEffect)((() => {
          xV((() => cV))
        }), [cV, xV]), (0, ZV.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: eV ? {} : {
            display: "none"
          },
          children: [(0, ZV.jsx)("div", {
            ref: CV,
            className: "MenuSideBar",
            children: (0, ZV.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, ZV.jsx)(vV, {
                items: oV.map((VV => {
                  const eV = RJ[VV].icon;
                  return {
                    id: VV,
                    faIcon: "string" === typeof eV ? eV : void 0,
                    iconElement: "string" === typeof eV ? void 0 : (0, ZV.jsx)(eV, {}),
                    title: wV(RJ[VV].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: NV,
                onClick: VV => {
                  !async function(VV) {
                    await cV(), zV(VV), IJ.set(PV, VV)
                  }(VV)
                }
              })
            })
          }), (0, ZV.jsxs)("div", {
            ref: iV,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === NV && (0, ZV.jsx)(ie, {
              showing: eV,
              inGame: PV
            }), "general" === NV && (0, ZV.jsx)(He, {
              inGame: PV
            }), "audio" === NV && (0, ZV.jsx)(ue, {}), "notifications" === NV && (0, ZV.jsx)(vx, {}), "graphics" === NV && (0, ZV.jsx)(gx, {
              minChunkAddDist: null !== TV && void 0 !== TV ? TV : [2, 2],
              getValue: Nx,
              onChange: Xx,
              setApplySettingsCallback: WV
            }), "controls" === NV && (0, ZV.jsx)(ix.e, {}), "crosshair" === NV && (0, ZV.jsx)(FJ, {
              showing: eV
            }), "controller" === NV && BV.featureFlags.useControllerSupport && (0, ZV.jsx)(TJ.e, {}), BV.featureFlags.settings.canChangeTexturePack && "texturePack" === NV && (0, ZV.jsx)(AJ.d, {
              setApplySettingsCallback: WV
            }), BV.featureFlags.settings.canUseShaderPacks && "Xk" === NV && (0, ZV.jsx)(JV.Suspense, {
              fallback: null,
              children: (0, ZV.jsx)(sJ, {
                setApplySettingsCallback: WV
              })
            }), "updateLog" === NV && (0, ZV.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ZV.jsx)("div", {
                className: "UpdateLogsContainer",
                children: RV.map(((VV, eV) => (0, ZV.jsx)(qV.d, {
                  updateLog: VV,
                  index: eV,
                  close: hV
                }, eV)))
              })
            }), "information" === NV && (0, ZV.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ZV.jsx)(JV.Suspense, {
                fallback: null,
                children: (0, ZV.jsx)(uJ, {})
              })
            }), "alternativeDomains" === NV && (0, ZV.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, ZV.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: wV("settingsMenu:unblockedDomainsDescription")
              }), (0, ZV.jsx)("div", {
                className: "AlternativeDomainsList",
                children: DV.current.map((VV => (0, ZV.jsxs)(nV.f, {
                  onClick: () => {
                    window.open(`https://${VV}`)
                  },
                  children: [(0, ZV.jsx)(pV.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", VV]
                }, VV)))
              })]
            }), "replayViewer" === NV && (0, ZV.jsx)(GJ, {}), "developerTools" === NV && (0, ZV.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ZV.jsx)(XV, {
                setApplySettingsCallback: WV
              })
            }), null !== GV && (0, ZV.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, ZV.jsx)(nV.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: cV,
                children: wV("general:apply")
              })
            })]
          })]
        })
      }));
    var OJ = xV(2919),
      VY = xV(4058),
      eY = xV(2473);
    const xY = (0, JV.lazy)((() => Promise.resolve().then((() => xV(5145))).then((VV => {
        VV.needGameClientAfterPaint();
        const eV = VV.matchmakingLibrariesPromise.then((VV => (0, OJ.c)(VV.loadCharacterCustomisationUI(), (VV => VV.CharacterCustomisationUI))));
        return Promise.all([VV.ensureGameSetup(), eV]).then((VV => {
          let [, eV] = VV;
          return eV
        }))
      })))),
      JY = "openCustomisationTab";

    function YY(VV) {
      var eV, xV, YV;
      let {
        show: UV
      } = VV;
      const {
        userContext: yV
      } = (0, kV.d)(), pV = (0, hV.usePurchasesAllowed)(), QV = (0, JV.useRef)(null);
      var nV, wV;
      yV !== zV.NULL_USER_CONTEXT && (null === (eV = QV.current) || void 0 === eV ? void 0 : eV.whamm) !== yV.whamm && (QV.current = {
        whamm: yV.whamm,
        mountKey: (null !== (nV = null === (wV = QV.current) || void 0 === wV ? void 0 : wV.mountKey) && void 0 !== nV ? nV : -1) + 1
      });
      const [rV, bV] = (0, JV.useState)("characters");
      if ((0, Se.g)(JY, bV), !UV) return null;
      const EV = null !== (0, VY.k)(Date.now()),
        BV = yV.getOwnedCosmeticPacks(),
        jV = te.Pb.filter((VV => "pet" === VV || "aura" === VV ? EV || (0, eY.o)(VV).some((eV => eV !== `${VV}_none` && (0, eY.x)(VV, eV, BV))) : "cape" !== VV && "nameColour" !== VV || yV.getPlayerRanks().includes("super") || pV)).map((VV => ({
          id: VV,
          faIcon: te.F[VV],
          title: te.G[VV],
          redDot: !1
        })));
      return (0, ZV.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, ZV.jsx)("div", {
          className: "MenuSideBar",
          children: (0, ZV.jsx)(vV, {
            items: jV,
            selectedItemId: rV,
            onClick: VV => {
              bV(VV)
            }
          })
        }), (0, ZV.jsx)("div", {
          className: "MenuBody",
          children: (0, ZV.jsx)(JV.Suspense, {
            fallback: (0, ZV.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, ZV.jsx)(TV.d, {})
            }),
            children: (0, ZV.jsx)(xY, {
              selectedTab: rV
            }, null !== (xV = null === (YV = QV.current) || void 0 === YV ? void 0 : YV.mountKey) && void 0 !== xV ? xV : 0)
          })
        })]
      })
    }
    var UY = xV(1569),
      yY = xV(1578),
      pY = xV(35300),
      QY = xV(5011),
      nY = xV(3862),
      wY = xV(3919),
      ZY = xV(35325),
      vY = xV(9403),
      rY = xV(35308),
      kY = xV(35317),
      bY = xV(2039),
      EY = xV(2021),
      BY = xV(5404),
      jY = xV(1290),
      qY = xV(1252),
      tY = xV(1764),
      FY = xV(9453),
      TY = xV(2703),
      PY = xV(2712);

    function AY(VV) {
      return VV ? Object.keys(VV).sort(((eV, xV) => {
        var JV, YV, UV, yV;
        const pV = (null !== (JV = null === (YV = VV[xV]) || void 0 === YV ? void 0 : YV.sortPriority) && void 0 !== JV ? JV : 0) - (null !== (UV = null === (yV = VV[eV]) || void 0 === yV ? void 0 : yV.sortPriority) && void 0 !== UV ? UV : 0);
        return 0 !== pV ? pV : eV.localeCompare(xV)
      })) : []
    }
    const NY = [{
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

    function XY(VV) {
      for (const {
          threshold: eV,
          suffix: xV
        }
        of NY)
        if (VV >= eV) {
          const JV = VV / eV;
          return JV >= 100 ? `${Math.floor(JV)}${xV}` : JV >= 10 ? `${JV.toFixed(1).replace(/\.0$/,"")}${xV}` : `${JV.toFixed(2).replace(/\.?0+$/,"")}${xV}`
        } return String(VV)
    }
    var MY = xV(5529);
    const zY = {
        normal: "0.8em",
        big: "1em"
      },
      GY = (0, JV.memo)((function(VV) {
        let {
          item: eV,
          amount: xV = 0,
          size: JV = "normal",
          tier: YV = null
        } = VV;
        return (0, ZV.jsx)("div", {
          className: UV()("SmpSlot", `SmpSlot-${JV}`),
          children: eV && (0, ZV.jsx)(bY.e, {
            itemName: eV,
            amount: xV > 1 ? xV : 0,
            amountFontSize: zY[JV],
            enchantmentTier: YV
          })
        })
      }));

    function WY(VV) {
      let {
        amount: eV,
        exact: xV = !1,
        className: JV
      } = VV;
      return (0, ZV.jsxs)("span", {
        className: UV()("SmpGold", JV),
        children: [(0, ZV.jsx)("span", {
          className: "SmpCoin",
          children: (0, ZV.jsx)(bY.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), xV ? eV.toLocaleString("en-US") : XY(eV)]
      })
    }

    function RY(VV) {
      let {
        count: eV = 5,
        grid: xV = !1
      } = VV;
      return (0, ZV.jsx)("div", {
        className: xV ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: eV
        }, ((VV, eV) => (0, ZV.jsxs)("div", {
          className: UV()(xV ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, ZV.jsx)("div", {
            className: UV()("SmpSlot", xV ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, ZV.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, ZV.jsx)("b", {}), (0, ZV.jsx)("small", {})]
          }), (0, ZV.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, eV)))
      })
    }

    function gY(VV) {
      let {
        title: eV,
        children: xV
      } = VV;
      return (0, ZV.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, ZV.jsx)("b", {
          children: eV
        }), xV && (0, ZV.jsx)("small", {
          children: xV
        })]
      })
    }

    function DY(VV) {
      let {
        entry: eV
      } = VV;
      return (0, ZV.jsx)(gY, {
        title: (0, ZV.jsx)(EY.b, {
          text: eV.item.customTitle
        }),
        children: (0, ZV.jsx)(EY.b, {
          text: eV.item.description
        })
      })
    }

    function iY(VV) {
      return (0, ZV.jsx)(MY.b, {
        ...VV,
        className: UV()("SmpChoice", VV.className),
        reselectable: !0
      })
    }

    function CY() {
      return (0, ZV.jsx)("span", {
        className: "SmpLoader",
        children: (0, ZV.jsx)(TV.d, {})
      })
    }

    function aY(VV) {
      let {
        value: eV,
        onChange: xV,
        min: YV = 1,
        max: UV,
        step: yV = 1,
        label: pV
      } = VV;
      const QV = (0, JV.useRef)(null),
        nV = (0, JV.useRef)(eV);
      nV.current = eV;
      const [wV, vV] = (0, JV.useState)(null), rV = VV => Math.max(YV, Math.min(UV, Math.floor(VV))), kV = VV => {
        const eV = nV.current,
          JV = "function" === typeof yV ? yV(eV, VV) : yV,
          YV = rV(eV + JV * VV);
        nV.current = YV, xV(YV)
      };
      (0, JV.useEffect)((() => {
        if (null === wV) return;
        let VV;
        const eV = () => {
            vV(null)
          },
          xV = setTimeout((() => {
            VV = setInterval((() => {
              kV(wV);
              const VV = nV.current;
              (wV > 0 ? VV >= UV : VV <= YV) && eV()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", eV), window.addEventListener("pointercancel", eV), window.addEventListener("blur", eV), () => {
          clearTimeout(xV), clearInterval(VV), window.removeEventListener("pointerup", eV), window.removeEventListener("pointercancel", eV), window.removeEventListener("blur", eV)
        }
      }), [wV]), (0, JV.useEffect)((() => {
        const VV = QV.current;
        VV && document.activeElement !== VV && VV.value !== String(eV) && (VV.value = String(eV))
      }), [eV]), (0, JV.useEffect)((() => {
        const VV = QV.current;
        if (!VV) return;
        const eV = () => {
          VV.value = String(nV.current)
        };
        return VV.addEventListener("blur", eV), () => {
          VV.removeEventListener("blur", eV)
        }
      }), []);
      const bV = VV => (0, ZV.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${VV>0?"More":"Less"} ${pV}`,
        disabled: VV > 0 ? eV >= UV : eV <= YV,
        onPointerDown: eV => {
          0 === eV.button && (kV(VV), vV(VV))
        },
        onKeyDown: eV => {
          "Enter" !== eV.key && " " !== eV.key || kV(VV)
        },
        onContextMenu: VV => {
          VV.preventDefault()
        },
        children: VV > 0 ? "+" : "\u2212"
      });
      return (0, ZV.jsxs)("div", {
        className: "SmpStepper",
        children: [bV(-1), (0, ZV.jsx)(FV.d, {
          className: "SmpStepperInput",
          domRef: QV,
          defaultValue: String(eV),
          ariaLabel: pV,
          type: "text",
          blurOnEnter: !0,
          onValueChange: VV => {
            const eV = VV.replace(/[^\d]/g, "");
            QV.current && eV !== VV && (QV.current.value = eV), "" !== eV && xV(rV(Number(eV)))
          }
        }), bV(1)]
      })
    }

    function oY(VV) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, VV))) - 1))
    }
    var cY = xV(35319),
      hY = xV(1269);
    const lY = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    hY.A, oV.Lc.length;
    new Map;
    var LY = xV(3719);

    function fY(VV, eV) {
      var xV;
      return eV && (null === (xV = VV[eV]) || void 0 === xV ? void 0 : xV.smp) || null
    }

    function mY(VV, eV) {
      const xV = [];
      for (const YV of AY(VV)) {
        var JV;
        const UV = VV[YV];
        (null === (JV = UV.smp) || void 0 === JV ? void 0 : JV.kind) === eV && xV.push({
          key: YV,
          item: UV,
          meta: UV.smp
        })
      }
      return xV
    }

    function KY(VV, eV) {
      var xV;
      return null !== (xV = mY(VV, eV)[0]) && void 0 !== xV ? xV : null
    }
    const HY = "50% 0% 50% 0%",
      uY = [{
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

    function sY(VV) {
      const eV = VV - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: xV,
          suffix: JV
        }
        of uY)
        if (eV >= xV) return `${Math.floor(eV/xV)}${JV}`;
      return "<1s"
    }

    function SY(VV) {
      const eV = VV.map(vY.h),
        xV = [];
      return eV.forEach(((VV, JV) => {
        const YV = function(VV) {
            const eV = VV.match(/\d+/);
            return eV ? Number(eV[0]) : 0
          }(VV),
          UV = JV === eV.length - 1;
        (UV || 1 === YV || 10 === YV || 100 === YV) && xV.push({
          label: VV,
          quantity: YV,
          isAll: UV
        })
      })), xV
    }
    let IY = null;

    function dY(VV, eV) {
      const xV = eV.trim().toLowerCase();
      if (!xV) return [];
      const JV = VV => {
          if (VV === xV) return 0;
          if (VV.startsWith(xV)) return 1;
          const eV = VV.indexOf(xV);
          return -1 === eV ? -1 : 2 + eV
        },
        YV = [];
      for (const pV of VV) {
        const VV = [JV(pV.lowerLabel), JV(pV.lowerName)].filter((VV => -1 !== VV));
        VV.length && YV.push({
          item: pV,
          rank: Math.min(...VV)
        })
      }
      if (YV.length > 0) return YV.sort(((VV, eV) => VV.rank - eV.rank)).map((VV => VV.item));
      const UV = [...xV],
        yV = VV => {
          let eV = 0;
          for (const xV of UV) {
            if (eV = VV.indexOf(xV, eV), -1 === eV) return !1;
            eV++
          }
          return !0
        };
      return VV.filter((VV => yV(VV.lowerLabel) || yV(VV.lowerName)))
    }

    function OY(VV, eV) {
      var xV;
      return null !== (xV = null === VV || void 0 === VV ? void 0 : VV[eV]) && void 0 !== xV ? xV : eV
    }

    function VU(VV, eV) {
      const xV = VV.userInput;
      return void 0 !== eV && "dropdown" === (null === xV || void 0 === xV ? void 0 : xV.type) && xV.dropdownOptions.map(vY.h).includes(eV) ? eV : function(VV) {
        const eV = VV.userInput;
        if ("dropdown" !== (null === eV || void 0 === eV ? void 0 : eV.type) || 0 === eV.dropdownOptions.length) return null;
        const xV = eV.dropdownOptions.map(vY.h);
        return eV.initialValue && xV.includes(eV.initialValue) ? eV.initialValue : xV[xV.length - 1]
      }(VV)
    }

    function eU(VV) {
      return void 0 === VV ? "" : JSON.stringify(VV)
    }
    const xU = (0, JV.createContext)(null);

    function JU() {
      return (0, JV.useContext)(xU)
    }
    var YU = xV(2985);
    const UU = (0, JV.memo)((function(VV) {
        let {
          name: eV,
          label: xV,
          onPick: JV
        } = VV;
        return (0, ZV.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: xV,
          onClick: () => {
            JV(eV)
          },
          children: [(0, ZV.jsx)(GY, {
            item: eV,
            size: "big"
          }), (0, ZV.jsx)("span", {
            children: xV
          })]
        })
      })),
      yU = (0, JV.memo)((function(VV) {
        let {
          items: eV,
          query: xV,
          onPick: YV
        } = VV;
        const {
          t: UV
        } = (0, yV.A)(), [pV, QV] = (0, JV.useState)(new Set), nV = (0, JV.useMemo)((() => function(VV) {
          const eV = new Map;
          for (const xV of VV) {
            let VV = eV.get(xV.category);
            VV || (VV = [], eV.set(xV.category, VV)), VV.push(xV)
          }
          return [...lY, "other"].filter((VV => eV.has(VV))).map((VV => ({
            category: VV,
            items: eV.get(VV)
          })))
        }(eV)), [eV]), wV = (0, JV.useMemo)((() => dY(eV, xV).slice(0, 60)), [eV, xV]);
        return xV.trim() ? 0 === wV.length ? (0, ZV.jsx)(gY, {
          title: UV("smpShop:noItemsFound", {
            query: xV.trim()
          }),
          children: UV("smpShop:tryShorterName")
        }) : (0, ZV.jsx)(YU.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: HY,
          observerUpdateDeps: [xV],
          children: wV.map((VV => (0, ZV.jsx)(UU, {
            name: VV.name,
            label: VV.label,
            onPick: YV
          }, VV.name)))
        }) : (0, ZV.jsx)(ZV.Fragment, {
          children: nV.map((VV => {
            let {
              category: eV,
              items: xV
            } = VV;
            const JV = pV.has(eV) || xV.length <= 48,
              yV = JV ? xV : xV.slice(0, 48);
            return (0, ZV.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, ZV.jsxs)("h4", {
                children: [UV("other" === eV ? "smpShop:otherItems" : `creativeInventory:${eV}`), !JV && (0, ZV.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    QV(new Set([...pV, eV]))
                  },
                  children: UV("smpShop:showAll", {
                    count: xV.length
                  })
                })]
              }), (0, ZV.jsx)(YU.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: HY,
                observerUpdateDeps: [JV],
                children: yV.map((VV => (0, ZV.jsx)(UU, {
                  name: VV.name,
                  label: VV.label,
                  onPick: YV
                }, VV.name)))
              })]
            }, eV)
          }))
        })
      }));

    function pU(VV, eV) {
      const {
        searched: xV,
        shown: YV,
        searchFor: UV,
        loading: yV
      } = function(VV, eV) {
        var xV;
        const YV = JU(),
          [UV, yV] = (0, JV.useState)(void 0),
          pV = (0, JV.useRef)(void 0),
          QV = (0, JV.useRef)(0),
          nV = (0, JV.useRef)(void 0),
          wV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.meta.item) && void 0 !== xV ? xV : null,
          ZV = !!VV && YV.isPending(VV.key);
        (0, JV.useEffect)((() => {
          if (!VV || ZV || !eV || void 0 === UV || UV === wV) return;
          const xV = UV === pV.current && YV.gaveUpAt(VV.key) > QV.current && nV.current !== UV;
          (UV !== pV.current || xV) && YV.act(VV.key, null !== UV && void 0 !== UV ? UV : "*", xV) && (xV && (nV.current = UV), pV.current = UV, QV.current = Date.now())
        }), [VV, ZV, eV, UV, wV, YV]);
        const vV = (0, JV.useCallback)((VV => {
            pV.current = void 0, nV.current = void 0, yV(VV)
          }), []),
          rV = void 0 !== UV && UV !== wV && (ZV || pV.current !== UV);
        return {
          searched: wV,
          shown: rV ? UV : wV,
          searchFor: vV,
          loading: rV || ZV || null !== wV && !eV
        }
      }(VV, eV), pV = (0, JV.useMemo)((() => function() {
        var VV;
        let eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const YV = `${(0,LY.k)()}\x1f${eV.join("\x1e")}\x1f${xV.join("\x1e")}\x1f${JSON.stringify(JV)}`;
        if ((null === (VV = IY) || void 0 === VV ? void 0 : VV.key) === YV) return IY.items;
        const UV = new Set(xV),
          yV = new Set,
          pV = [],
          QV = (VV, eV) => {
            var xV;
            if (!VV || yV.has(VV) || UV.has(VV)) return;
            yV.add(VV);
            const YV = null !== (xV = JV[VV]) && void 0 !== xV ? xV : VV;
            pV.push({
              name: VV,
              label: YV,
              lowerLabel: YV.toLowerCase(),
              lowerName: VV.toLowerCase(),
              category: eV
            })
          };
        for (const wV of (0, cY.creativeItemIds)()) {
          var nV;
          (0, cY.itemIsDisabled)(wV, !0, !0, !1) || (0, cY.showOnlyInCreativeSearch)(wV) || QV((0, LY.g)(wV), null !== (nV = (0, cY.creativeCategoryOf)(wV)) && void 0 !== nV ? nV : "other")
        }
        for (const wV of eV) QV(wV, "other");
        return IY = {
          key: YV,
          items: pV
        }, pV
      }(null === VV || void 0 === VV ? void 0 : VV.meta.extra, null === VV || void 0 === VV ? void 0 : VV.meta.excluded, null === VV || void 0 === VV ? void 0 : VV.meta.names)), [null === VV || void 0 === VV ? void 0 : VV.meta.extra, null === VV || void 0 === VV ? void 0 : VV.meta.excluded, null === VV || void 0 === VV ? void 0 : VV.meta.names]), [QV, nV] = (0, JV.useState)(""), [wV, ZV] = (0, JV.useState)(0), [vV, rV] = (0, JV.useState)("recent"), kV = (0, JV.useCallback)((VV => {
        nV(""), ZV((VV => VV + 1)), UV(VV)
      }), [UV]), bV = "browse" === vV || "" !== QV.trim();
      return {
        searched: xV,
        shown: YV,
        searchFor: UV,
        loading: yV,
        catalogue: pV,
        names: null === VV || void 0 === VV ? void 0 : VV.meta.names,
        query: QV,
        setQuery: nV,
        searchBoxKey: wV,
        pickItem: kV,
        setView: rV,
        browsing: bV
      }
    }

    function QU(VV) {
      let {
        browser: eV,
        children: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)(), YV = JU();
      return (0, ZV.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, ZV.jsx)("div", {
          className: "SmpSearch",
          children: (0, ZV.jsx)(FV.d, {
            className: "SmpSearchInput",
            placeholderText: JV("smpShop:searchPlaceholder"),
            defaultValue: eV.query,
            onValueChange: VV => {
              eV.setQuery(VV), eV.searched && VV.trim() && eV.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const VV = dY(eV.catalogue, eV.query)[0];
              VV ? eV.pickItem(VV.name) : eV.query.trim() && YV.notify(JV("smpShop:noItemsFound", {
                query: eV.query.trim()
              }))
            }
          }, eV.searchBoxKey)
        }), xV]
      })
    }

    function nU(VV) {
      let {
        browser: eV,
        recentLabel: xV,
        children: JV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)();
      return (0, ZV.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, ZV.jsx)(iY, {
          options: [{
            value: "recent",
            label: xV
          }, {
            value: "browse",
            label: YV("smpShop:browseItems")
          }],
          value: eV.browsing ? "browse" : "recent",
          onChange: eV.setView,
          ariaLabel: YV("smpShop:show")
        }), !eV.browsing && JV]
      })
    }

    function wU(VV) {
      let {
        item: eV,
        names: xV,
        summary: JV,
        onBack: YV,
        children: UV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)();
      return (0, ZV.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, ZV.jsx)(nV.b, {
          className: "SmpBackButton",
          onClick: YV,
          children: pV("general:back")
        }), (0, ZV.jsx)(GY, {
          item: eV,
          size: "big"
        }), (0, ZV.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, ZV.jsx)("b", {
            children: OY(xV, eV)
          }), JV && (0, ZV.jsx)("small", {
            children: JV
          })]
        }), UV]
      })
    }

    function ZU(VV) {
      let {
        browser: eV,
        className: xV,
        action: JV,
        above: YV,
        list: yV,
        summary: pV,
        recentLabel: QV,
        listControls: nV,
        onBack: wV
      } = VV;
      return (0, ZV.jsxs)("div", {
        className: UV()("SmpScreen", xV),
        children: [(0, ZV.jsx)(QU, {
          browser: eV,
          children: JV
        }), eV.shown && (0, ZV.jsx)(wU, {
          item: eV.shown,
          names: eV.names,
          summary: !eV.loading && pV,
          onBack: () => {
            null === wV || void 0 === wV || wV(), eV.searchFor(null)
          },
          children: nV
        }), YV, eV.shown ? yV : (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsx)(nU, {
            browser: eV,
            recentLabel: QV,
            children: nV
          }), eV.browsing ? (0, ZV.jsx)(yU, {
            items: eV.catalogue,
            query: eV.query,
            onPick: eV.pickItem
          }) : yV]
        })]
      })
    }

    function vU(VV, eV) {
      const xV = VV.map((VV => {
        let {
          meta: eV
        } = VV;
        return eV.pricePerItem
      }));
      return "min" === eV ? Math.min(...xV) : Math.max(...xV)
    }
    var rU = xV(7147);
    const kU = (0, JV.memo)((function(VV) {
      var eV;
      const {
        t: xV
      } = (0, yV.A)(), JV = null === VV.seller, YV = VV.quantity * VV.pricePerItem;
      return (0, ZV.jsxs)("div", {
        className: VV.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, ZV.jsx)(GY, {
          item: VV.item,
          amount: VV.quantity,
          size: VV.grid ? "big" : "normal",
          tier: VV.tier
        }), (0, ZV.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ZV.jsx)("b", {
            children: (0, ZV.jsx)(EY.b, {
              text: null !== (eV = VV.title) && void 0 !== eV ? eV : `${VV.quantity}x ${VV.item}`
            })
          }), (0, ZV.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, ZV.jsx)("span", {
              children: JV ? xV("smpShop:you") : (0, ZV.jsx)(EY.b, {
                text: [{
                  entityName: VV.seller
                }]
              })
            }), (0, ZV.jsx)("span", {
              children: xV("smpShop:timeLeft", {
                time: sY(VV.expiresAt)
              })
            })]
          })]
        }), (0, ZV.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, ZV.jsx)(WY, {
            amount: VV.pricePerItem
          }), (0, ZV.jsx)("small", {
            children: xV("smpShop:each")
          })]
        }), (0, ZV.jsx)(nV.f, {
          className: "SmpBuyButton",
          disabled: JV || !VV.canAfford && !VV.busy,
          loading: VV.busy,
          onClick: () => {
            VV.onBuy(VV.itemKey)
          },
          children: JV ? xV("smpShop:yours") : (0, ZV.jsx)(WY, {
            amount: YV
          })
        })]
      })
    }));

    function bU(VV) {
      let {
        view: eV,
        onChange: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)();
      return (0, ZV.jsx)(MY.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: JV("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, ZV.jsx)(pV.b, {
            name: "list"
          }),
          ariaLabel: JV("smpShop:listView")
        }, {
          value: "grid",
          label: (0, ZV.jsx)(pV.b, {
            name: "grid-2"
          }),
          ariaLabel: JV("smpShop:gridView")
        }],
        value: eV,
        onChange: xV
      })
    }

    function EU(VV) {
      let {
        entries: eV,
        view: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)(), YV = JU(), UV = "grid" === xV;
      return (0, ZV.jsxs)(ZV.Fragment, {
        children: [!UV && (0, ZV.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, ZV.jsx)("span", {}), (0, ZV.jsx)("span", {
            children: JV("smpShop:columnItem")
          }), (0, ZV.jsx)("span", {
            children: JV("smpShop:columnPriceEach")
          }), (0, ZV.jsx)("span", {
            children: JV("smpShop:columnTotal")
          })]
        }), (0, ZV.jsx)(YU.d, {
          lazyLoadedClassName: UV ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: HY,
          observerUpdateDeps: [eV.length],
          children: eV.map((VV => {
            var eV, xV;
            let {
              key: JV,
              item: yV,
              meta: pV
            } = VV;
            const QV = pV.quantity * pV.pricePerItem;
            return (0, ZV.jsx)(kU, {
              itemKey: JV,
              item: pV.item,
              title: yV.customTitle,
              quantity: pV.quantity,
              pricePerItem: pV.pricePerItem,
              seller: pV.seller,
              expiresAt: pV.expiresAt,
              tier: null !== (eV = null === (xV = yV.enchant) || void 0 === xV ? void 0 : xV.tier) && void 0 !== eV ? eV : null,
              busy: YV.isPending(JV) || null !== pV.seller && !1 === yV.canBuy,
              canAfford: YV.canAfford(yV, QV),
              grid: UV,
              onBuy: YV.act
            }, JV)
          }))
        }, xV)]
      })
    }
    const BU = [1, 10, 100],
      jU = [1, 10, 100, 999];

    function qU(VV) {
      var eV, xV, YV, QV, wV, vV, rV, kV, bV, EV;
      const {
        t: BV
      } = (0, yV.A)(), jV = JU(), {
        creator: qV,
        mode: tV
      } = VV, [TV, PV] = (0, JV.useState)(null !== (eV = null === qV || void 0 === qV ? void 0 : qV.meta.item) && void 0 !== eV ? eV : null), [AV, NV] = (0, JV.useState)(1), [XV, MV] = (0, JV.useState)(0), [zV, GV] = (0, JV.useState)(""), [WV, RV] = (0, JV.useState)(0), gV = (0, JV.useRef)(TV), DV = (0, JV.useRef)(!1), [iV, CV] = (0, JV.useState)(!1), aV = null !== (xV = null === qV || void 0 === qV ? void 0 : qV.meta.item) && void 0 !== xV ? xV : null, oV = null !== (YV = null === qV || void 0 === qV ? void 0 : qV.meta.owned) && void 0 !== YV ? YV : 0;
      (0, JV.useEffect)((() => {
        VV.searching || null === aV || aV === gV.current || (gV.current = aV, DV.current = !1, PV(aV), MV(0), NV("list" === tV ? Math.max(1, oV) : 1))
      }), [aV, VV.searching]);
      const cV = !!qV && !!TV && qV.meta.item === TV,
        hV = cV ? qV.meta.owned : null !== (QV = null === (wV = VV.inventory) || void 0 === wV || null === (vV = wV.find((VV => VV.item === TV))) || void 0 === vV ? void 0 : vV.quantity) && void 0 !== QV ? QV : 0,
        lV = "list" === tV ? Math.max(1, hV) : 45954,
        LV = null !== (rV = VV.prices[0]) && void 0 !== rV ? rV : null,
        fV = VV.prices.length ? Math.round(VV.prices.reduce(((VV, eV) => VV + eV), 0) / VV.prices.length) : null,
        mV = null === (kV = VV.inventory) || void 0 === kV || null === (bV = kV.find((VV => VV.item === TV))) || void 0 === bV ? void 0 : bV.sellPrice;
      (0, JV.useEffect)((() => {
        var VV;
        cV && (NV((VV => "list" === tV ? Math.min(Math.max(1, VV), Math.max(1, hV)) : VV)), DV.current || MV(null !== (VV = null !== LV && void 0 !== LV ? LV : fV) && void 0 !== VV ? VV : Math.max(1, null !== mV && void 0 !== mV ? mV : 1)))
      }), [cV, hV, TV, LV, fV]);
      const KV = VV => {
          DV.current = !0, MV(VV)
        },
        HV = eV => {
          var xV, JV, YV;
          gV.current = eV, DV.current = !1, CV(!1), GV(""), RV((VV => VV + 1)), PV(eV), MV(0), NV("list" === tV && null !== (xV = null === (JV = VV.inventory) || void 0 === JV || null === (YV = JV.find((VV => VV.item === eV))) || void 0 === YV ? void 0 : YV.quantity) && void 0 !== xV ? xV : 1), (null === qV || void 0 === qV ? void 0 : qV.meta.item) !== eV && VV.onPickItem(eV)
        },
        uV = AV * XV,
        sV = "list" === tV && null !== qV && void 0 !== qV && qV.meta.fee ? function(VV, eV) {
          const xV = Math.max(0, eV - VV.taxFreeAllowance);
          return Math.ceil(Math.round(xV * VV.rate * 1e6) / 1e6)
        }(qV.meta.fee, uV) : 0,
        SV = !!qV && jV.isPending(qV.key),
        IV = cV && !VV.searching && AV >= 1 && XV >= 1 && ("order" === tV || hV >= AV) && !SV,
        dV = !!TV && !cV && !VV.searching && AV >= 1 && XV >= 1,
        OV = () => {
          IV ? jV.act(qV.key, `${AV}|${XV}`) : dV && (VV.onPickItem(TV), CV(!0))
        };
      (0, JV.useEffect)((() => {
        iV && cV && !VV.searching && (CV(!1), OV())
      }), [iV, cV, VV.searching]);
      const Ve = !!TV && !cV && (VV.searching || iV),
        ee = TV ? OY(VV.names, TV) : "",
        xe = (0, JV.useMemo)((() => dY(VV.catalogue, zV).slice(0, 8)), [VV.catalogue, zV]),
        Je = ("list" === tV ? BU.filter((VV => VV < hV)) : jU).map((VV => ({
          value: VV,
          label: String(VV)
        })));
      "list" === tV && hV > 0 && Je.push({
        value: hV,
        label: BV("smpShop:all", {
          count: hV
        })
      });
      const Ye = [];
      return null !== LV && (LV > 1 && Ye.push({
        value: LV - 1,
        label: BV("smpShop:undercut", {
          price: XY(LV - 1)
        })
      }), Ye.push({
        value: LV,
        label: BV("smpShop:lowest", {
          price: XY(LV)
        })
      })), null !== fV && fV !== LV && Ye.push({
        value: fV,
        label: BV("smpShop:average", {
          price: XY(fV)
        })
      }), (0, ZV.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, ZV.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, ZV.jsx)("b", {
            children: BV("list" === tV ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, ZV.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": BV("smpShop:close"),
            onClick: VV.onClose,
            children: (0, ZV.jsx)(pV.b, {
              name: "xmark"
            })
          })]
        }), "list" === tV && (0, ZV.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (EV = VV.inventory) && void 0 !== EV && EV.length ? VV.inventory.map((VV => {
            let {
              item: eV,
              quantity: xV
            } = VV;
            return (0, ZV.jsx)("button", {
              type: "button",
              title: eV,
              className: UV()("SmpPickerSlot", {
                SmpPickerSlotOn: eV === TV
              }),
              onClick: () => {
                HV(eV)
              },
              children: (0, ZV.jsx)(GY, {
                item: eV,
                amount: xV
              })
            }, eV)
          })) : (0, ZV.jsx)("span", {
            className: "SmpMuted",
            children: BV("smpShop:nothingToList")
          })
        }), ("list" === tV || !TV) && (0, ZV.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, ZV.jsx)(FV.d, {
            className: "SmpSearchInput",
            placeholderText: BV("list" === tV ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: zV,
            onValueChange: GV,
            blurOnEnter: !0,
            onEnter: () => {
              xe[0] && HV(xe[0].name)
            }
          }, WV), xe.length > 0 && (0, ZV.jsx)("div", {
            className: "SmpPicker",
            children: xe.map((VV => {
              let {
                name: eV
              } = VV;
              return (0, ZV.jsx)("button", {
                type: "button",
                title: eV,
                className: UV()("SmpPickerSlot", {
                  SmpPickerSlotOn: eV === TV
                }),
                onClick: () => {
                  HV(eV)
                },
                children: (0, ZV.jsx)(GY, {
                  item: eV
                })
              }, eV)
            }))
          })]
        }), TV && (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsxs)("div", {
            className: "SmpPickedName",
            children: [ee, Ve && (0, ZV.jsx)(CY, {})]
          }), (0, ZV.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, ZV.jsxs)("div", {
              className: "SmpField",
              children: [(0, ZV.jsxs)("span", {
                children: [BV("smpShop:quantity"), "list" === tV && cV && (0, ZV.jsx)("small", {
                  children: BV("smpShop:youHave", {
                    count: hV
                  })
                })]
              }), (0, ZV.jsx)(aY, {
                value: AV,
                onChange: NV,
                max: lV,
                label: BV("smpShop:quantity")
              }), (0, ZV.jsx)(iY, {
                options: Je,
                value: AV,
                onChange: NV,
                ariaLabel: BV("smpShop:quantity")
              })]
            }), (0, ZV.jsxs)("div", {
              className: "SmpField",
              children: [(0, ZV.jsx)("span", {
                children: BV("smpShop:pricePerItem")
              }), (0, ZV.jsx)(aY, {
                value: Math.max(1, XV),
                onChange: KV,
                max: 9999999,
                step: oY,
                label: BV("smpShop:pricePerItem")
              }), (0, ZV.jsx)(iY, {
                options: Ye,
                value: XV,
                onChange: KV,
                ariaLabel: BV("smpShop:pricePerItem")
              })]
            })]
          }), "list" === tV && (0, ZV.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, ZV.jsxs)("span", {
              children: [BV("smpShop:youGet"), " ", (0, ZV.jsx)(WY, {
                amount: Math.max(0, uV - sV),
                exact: !0
              })]
            }), (0, ZV.jsx)("small", {
              children: sV > 0 ? BV("smpShop:listingFee", {
                fee: sV.toLocaleString("en-US")
              }) : BV("smpShop:listingRules")
            })]
          }), (0, ZV.jsx)(nV.q, {
            className: "SmpSubmit",
            disabled: !IV && !dV && !SV,
            loading: SV || Ve || cV && VV.searching,
            onClick: OV,
            children: "list" === tV ? BV("smpShop:listButton", {
              count: AV,
              item: ee
            }) : (0, ZV.jsxs)(ZV.Fragment, {
              children: [BV("smpShop:orderButton", {
                count: AV,
                item: ee
              }), " ", XV >= 1 && (0, ZV.jsx)(WY, {
                amount: uV
              })]
            })
          })]
        })]
      })
    }

    function tU() {
      var VV;
      const {
        t: eV
      } = (0, yV.A)(), xV = JU(), YV = null === (VV = xV.shopInfo[xV.categoryKey]) || void 0 === VV ? void 0 : VV.items, UV = KY(YV, "search"), pV = KY(YV, "creator"), QV = mY(YV, "enchantedCreator"), wV = mY(YV, "listing"), vV = KY(YV, "empty"), rV = pU(UV, wV.length > 0 || null !== vV), {
        searched: kV,
        shown: bV,
        loading: EV
      } = rV, [BV, jV] = (0, JV.useState)(!1), [qV, tV] = function() {
        const [VV, eV] = (0, rU.c)("smpMarketView", "list");
        return ["grid" === VV ? "grid" : "list", eV]
      }(), FV = "grid" === qV, TV = (0, JV.useMemo)((() => wV.filter((VV => {
        let {
          meta: eV
        } = VV;
        return null !== eV.seller && eV.item === kV
      })).map((VV => {
        let {
          meta: eV
        } = VV;
        return eV.pricePerItem
      })).sort(((VV, eV) => VV - eV))), [wV, kV]), PV = (0, JV.useMemo)((() => {
        const VV = new Set(rV.catalogue.map((VV => {
          let {
            name: eV
          } = VV;
          return eV
        })));
        return function(VV) {
          for (const eV in VV)
            if ("sell" === VV[eV].smp) return mY(VV[eV].items, "sell").filter((VV => {
              let {
                item: eV
              } = VV;
              return !eV.enchant
            })).map((VV => {
              let {
                meta: eV
              } = VV;
              return {
                item: eV.item,
                quantity: eV.quantity,
                sellPrice: eV.pricePerItem
              }
            }));
          return []
        }(xV.shopInfo).filter((eV => {
          let {
            item: xV
          } = eV;
          return VV.has(xV)
        }))
      }), [xV.shopInfo, rV.catalogue]);
      return (0, ZV.jsx)(ZU, {
        browser: rV,
        className: "SmpMarketTab",
        recentLabel: eV("smpShop:recentlyListed"),
        action: (0, ZV.jsx)(nV.q, {
          className: "SmpSellButton",
          onClick: () => {
            jV((VV => !VV))
          },
          children: eV("smpShop:sell")
        }),
        above: BV && (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsx)(qU, {
            mode: "list",
            creator: pV,
            inventory: PV,
            catalogue: rV.catalogue,
            names: rV.names,
            searching: EV,
            prices: TV,
            onPickItem: rV.searchFor,
            onClose: () => {
              jV(!1)
            }
          }), QV.length > 0 && (0, ZV.jsx)(FU, {
            entries: QV
          })]
        }),
        listControls: (0, ZV.jsx)(bU, {
          view: qV,
          onChange: tV
        }),
        summary: bV && (wV.length > 0 ? eV(1 === wV.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: wV.length,
          price: XY(vU(wV, "min"))
        }) : eV("smpShop:noOneSelling", {
          item: OY(rV.names, bV)
        })),
        list: EV ? (0, ZV.jsx)(RY, {
          grid: FV
        }) : wV.length > 0 ? (0, ZV.jsx)(EU, {
          entries: wV,
          view: qV
        }) : vV ? (0, ZV.jsx)(DY, {
          entry: vV
        }) : (0, ZV.jsx)(RY, {
          count: 3,
          grid: FV
        })
      })
    }

    function FU(VV) {
      let {
        entries: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)(), YV = JU(), [UV, pV] = (0, JV.useState)({});
      return (0, ZV.jsx)("div", {
        className: "SmpList",
        children: eV.map((VV => {
          var eV, JV, yV;
          let {
            key: QV,
            item: wV,
            meta: vV
          } = VV;
          const rV = null !== (eV = UV[QV]) && void 0 !== eV ? eV : 1;
          return (0, ZV.jsxs)("div", {
            className: "SmpRow",
            children: [(0, ZV.jsx)(GY, {
              item: vV.item,
              amount: vV.quantity,
              tier: null !== (JV = null === (yV = wV.enchant) || void 0 === yV ? void 0 : yV.tier) && void 0 !== JV ? JV : null
            }), (0, ZV.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, ZV.jsx)("b", {
                children: (0, ZV.jsx)(EY.b, {
                  text: wV.customTitle
                })
              }), (0, ZV.jsx)("small", {
                children: xV("smpShop:enchantedListing")
              })]
            }), (0, ZV.jsx)(aY, {
              value: rV,
              onChange: VV => {
                pV({
                  ...UV,
                  [QV]: VV
                })
              },
              max: 9999999,
              step: oY,
              label: xV("smpShop:pricePerItem")
            }), (0, ZV.jsxs)(nV.q, {
              loading: YV.isPending(QV),
              onClick: () => {
                YV.act(QV, String(rV))
              },
              children: [xV("smpShop:list"), " ", (0, ZV.jsx)(WY, {
                amount: rV
              })]
            })]
          }, QV)
        }))
      })
    }
    const TU = (0, JV.memo)((function(VV) {
      let {
        itemKey: eV,
        item: xV,
        quantity: JV,
        pricePerItem: YV,
        tier: yV,
        selected: pV,
        onSelect: QV
      } = VV;
      return (0, ZV.jsxs)("button", {
        type: "button",
        className: UV()("SmpInventorySlot", {
          SmpInventorySlotOn: pV
        }),
        title: xV,
        onClick: () => {
          QV(eV)
        },
        children: [(0, ZV.jsx)(GY, {
          item: xV,
          amount: JV,
          tier: yV
        }), (0, ZV.jsx)(WY, {
          amount: YV
        })]
      })
    }));

    function PU() {
      var VV;
      const {
        t: eV
      } = (0, yV.A)(), xV = JU(), YV = null === (VV = xV.shopInfo[xV.categoryKey]) || void 0 === VV ? void 0 : VV.items, pV = mY(YV, "sell"), QV = KY(YV, "empty"), [nV, wV] = (0, JV.useState)(null), [vV, rV] = (0, JV.useState)({}), kV = pV.find((VV => {
        let {
          key: eV
        } = VV;
        return eV === nV
      }));
      return 0 === pV.length ? (0, ZV.jsx)("div", {
        className: "SmpScreen",
        children: (0, ZV.jsx)(gY, {
          title: QV ? (0, ZV.jsx)(EY.b, {
            text: QV.item.customTitle
          }) : eV("smpShop:nothingToSell"),
          children: QV && (0, ZV.jsx)(EY.b, {
            text: QV.item.description
          })
        })
      }) : (0, ZV.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, ZV.jsx)("div", {
          className: "SmpInventoryGrid",
          children: pV.map((VV => {
            var eV, xV;
            let {
              key: JV,
              item: YV,
              meta: UV
            } = VV;
            return (0, ZV.jsx)(TU, {
              itemKey: JV,
              item: UV.item,
              quantity: UV.quantity,
              pricePerItem: UV.pricePerItem,
              tier: null !== (eV = null === (xV = YV.enchant) || void 0 === xV ? void 0 : xV.tier) && void 0 !== eV ? eV : null,
              selected: JV === nV,
              onSelect: wV
            }, JV)
          }))
        }), (0, ZV.jsx)("div", {
          className: UV()("SmpSellBar", {
            SmpSellBarIdle: !kV
          }),
          children: kV ? (0, ZV.jsx)(AU, {
            entry: kV,
            choice: VU(kV.item, vV[kV.key]),
            onChoose: VV => {
              rV({
                ...vV,
                [kV.key]: VV
              })
            }
          }) : (0, ZV.jsx)("span", {
            className: "SmpMuted",
            children: eV("smpShop:tapToSell")
          })
        })]
      })
    }

    function AU(VV) {
      var eV, xV, JV, YV;
      let {
        entry: UV,
        choice: pV,
        onChoose: QV
      } = VV;
      const {
        t: wV
      } = (0, yV.A)(), vV = JU(), {
        key: rV,
        item: kV,
        meta: bV
      } = UV, EV = SY("dropdown" === (null === (eV = kV.userInput) || void 0 === eV ? void 0 : eV.type) ? kV.userInput.dropdownOptions : []), BV = null === pV ? 0 : -(0, vY.e)(kV, pV);
      return (0, ZV.jsxs)(ZV.Fragment, {
        children: [(0, ZV.jsx)(GY, {
          item: bV.item,
          amount: bV.quantity,
          tier: null !== (xV = null === (JV = kV.enchant) || void 0 === JV ? void 0 : JV.tier) && void 0 !== xV ? xV : null
        }), (0, ZV.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ZV.jsx)("b", {
            children: (0, ZV.jsx)(EY.b, {
              text: null !== (YV = kV.customTitle) && void 0 !== YV ? YV : bV.item
            })
          }), (0, ZV.jsx)("small", {
            children: wV("smpShop:sellEach", {
              count: bV.quantity
            })
          })]
        }), (0, ZV.jsx)(iY, {
          options: EV.map((VV => {
            let {
              label: eV,
              quantity: xV,
              isAll: JV
            } = VV;
            return {
              value: eV,
              label: JV ? wV("smpShop:all", {
                count: xV
              }) : String(xV)
            }
          })),
          value: pV,
          onChange: QV,
          ariaLabel: wV("smpShop:quantity")
        }), (0, ZV.jsxs)(nV.q, {
          loading: vV.isPending(rV),
          disabled: null === pV,
          onClick: () => {
            vV.act(rV, pV)
          },
          children: [wV("smpShop:sellButton"), " ", (0, ZV.jsx)(WY, {
            amount: BV
          })]
        })]
      })
    }

    function NU() {
      var VV;
      const {
        t: eV
      } = (0, yV.A)(), xV = JU(), JV = null === (VV = xV.shopInfo[xV.categoryKey]) || void 0 === VV ? void 0 : VV.items, YV = mY(JV, "collect"), UV = mY(JV, "myListing"), pV = (VV, eV) => xV.isPending(VV) || !1 === eV.canBuy;
      return (0, ZV.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, ZV.jsx)("h3", {
          className: "SmpSectionTitle",
          children: eV("smpShop:readyToCollect")
        }), YV.length > 0 ? (0, ZV.jsx)("div", {
          className: "SmpList",
          children: YV.map((VV => {
            var JV, YV;
            let {
              key: UV,
              item: yV,
              meta: QV
            } = VV;
            return (0, ZV.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ZV.jsx)(GY, {
                item: "sold" === QV.type ? "Gold Coin" : QV.item,
                amount: "sold" === QV.type ? 0 : QV.quantity,
                tier: null !== (JV = null === (YV = yV.enchant) || void 0 === YV ? void 0 : YV.tier) && void 0 !== JV ? JV : null
              }), (0, ZV.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ZV.jsx)("b", {
                  children: (0, ZV.jsx)(EY.b, {
                    text: yV.customTitle
                  })
                }), (0, ZV.jsx)("small", {
                  children: (0, ZV.jsx)(EY.b, {
                    text: yV.description
                  })
                })]
              }), (0, ZV.jsx)(nV.m, {
                loading: pV(UV, yV),
                onClick: () => {
                  xV.act(UV)
                },
                children: eV("smpShop:collect")
              })]
            }, UV)
          }))
        }) : (0, ZV.jsx)(gY, {
          title: eV("smpShop:nothingToCollect"),
          children: eV("smpShop:nothingToCollectHint")
        }), (0, ZV.jsx)("h3", {
          className: "SmpSectionTitle",
          children: eV("smpShop:activeListings", {
            count: UV.length
          })
        }), UV.length > 0 ? (0, ZV.jsx)("div", {
          className: "SmpList",
          children: UV.map((VV => {
            var JV, YV;
            let {
              key: UV,
              item: yV,
              meta: QV
            } = VV;
            return (0, ZV.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ZV.jsx)(GY, {
                item: QV.item,
                amount: QV.quantity,
                tier: null !== (JV = null === (YV = yV.enchant) || void 0 === YV ? void 0 : YV.tier) && void 0 !== JV ? JV : null
              }), (0, ZV.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ZV.jsx)("b", {
                  children: (0, ZV.jsx)(EY.b, {
                    text: yV.customTitle
                  })
                }), (0, ZV.jsx)("small", {
                  children: eV("smpShop:timeLeft", {
                    time: sY(QV.expiresAt)
                  })
                })]
              }), (0, ZV.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, ZV.jsx)(WY, {
                  amount: QV.pricePerItem
                }), (0, ZV.jsx)("small", {
                  children: eV("smpShop:each")
                })]
              }), (0, ZV.jsx)(nV.E, {
                loading: pV(UV, yV),
                onClick: () => {
                  xV.act(UV)
                },
                children: eV("smpShop:cancel")
              })]
            }, UV)
          }))
        }) : (0, ZV.jsx)(gY, {
          title: eV("smpShop:noActiveListings"),
          children: eV("smpShop:noActiveListingsHint")
        })]
      })
    }

    function XU(VV) {
      let {
        done: eV,
        of: xV
      } = VV;
      return (0, ZV.jsx)("span", {
        className: "SmpProgress",
        children: (0, ZV.jsx)("i", {
          style: {
            width: `${Math.min(100,eV/Math.max(1,xV)*100)}%`
          }
        })
      })
    }

    function MU(VV) {
      var eV, xV, JV;
      let {
        entry: YV,
        choice: UV,
        onChoose: pV
      } = VV;
      const {
        t: QV
      } = (0, yV.A)(), wV = JU(), {
        key: vV,
        item: rV,
        meta: kV
      } = YV, bV = "dropdown" === (null === (eV = rV.userInput) || void 0 === eV ? void 0 : eV.type) ? rV.userInput.dropdownOptions : [], EV = !0 === kV.processing, BV = null !== kV.creator && (kV.owned > 0 || EV), jV = BV && kV.owned > 0 ? SY(bV) : [], qV = null === UV ? 0 : null !== (xV = null === (JV = jV.find((VV => VV.label === UV))) || void 0 === JV ? void 0 : JV.quantity) && void 0 !== xV ? xV : 0;
      return (0, ZV.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, ZV.jsx)(GY, {
          item: kV.item
        }), (0, ZV.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ZV.jsx)("b", {
            children: (0, ZV.jsx)(EY.b, {
              text: rV.customTitle
            })
          }), (0, ZV.jsxs)("small", {
            children: [(0, ZV.jsx)(WY, {
              amount: kV.pricePerItem
            }), " ", QV("smpShop:each"), " \xb7", " ", null === kV.creator ? QV("smpShop:you") : (0, ZV.jsx)(EY.b, {
              text: [{
                entityName: kV.creator
              }]
            })]
          }), (0, ZV.jsx)(XU, {
            done: kV.delivered,
            of: kV.wanted
          })]
        }), BV ? (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsx)(iY, {
            options: jV.map((VV => {
              let {
                label: eV,
                quantity: xV,
                isAll: JV
              } = VV;
              return {
                value: eV,
                label: JV ? QV("smpShop:max", {
                  count: xV
                }) : String(xV)
              }
            })),
            value: UV,
            onChange: pV,
            ariaLabel: QV("smpShop:quantity")
          }), (0, ZV.jsxs)(nV.q, {
            loading: wV.isPending(vV) || EV,
            disabled: null === UV,
            onClick: () => {
              wV.act(vV, UV)
            },
            children: [QV("smpShop:deliver"), " ", (0, ZV.jsx)(WY, {
              amount: qV * kV.pricePerItem
            })]
          })]
        }) : (0, ZV.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === kV.creator ? QV("smpShop:yourOrder") : QV("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function zU() {
      var VV;
      const {
        t: eV
      } = (0, yV.A)(), xV = JU(), YV = null === (VV = xV.shopInfo[xV.categoryKey]) || void 0 === VV ? void 0 : VV.items, UV = KY(YV, "search"), pV = KY(YV, "creator"), QV = mY(YV, "order"), wV = KY(YV, "empty"), vV = pU(UV, QV.length > 0 || null !== wV), [rV, kV] = (0, JV.useState)(!1), [bV, EV] = (0, JV.useState)({});
      return (0, ZV.jsx)(ZU, {
        browser: vV,
        recentLabel: eV("smpShop:recentOrders"),
        action: (0, ZV.jsx)(nV.q, {
          onClick: () => {
            kV((VV => !VV))
          },
          children: eV("smpShop:createOrder")
        }),
        above: rV && (0, ZV.jsx)(qU, {
          mode: "order",
          creator: pV,
          catalogue: vV.catalogue,
          names: vV.names,
          searching: vV.loading,
          prices: [],
          onPickItem: vV.searchFor,
          onClose: () => {
            kV(!1)
          }
        }),
        onBack: () => {
          kV(!1)
        },
        summary: QV.length > 0 && eV(1 === QV.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: QV.length,
          price: XY(vU(QV, "max"))
        }),
        list: vV.loading ? (0, ZV.jsx)(RY, {}) : QV.length > 0 ? (0, ZV.jsx)(YU.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: HY,
          observerUpdateDeps: [QV.length],
          children: QV.map((VV => (0, ZV.jsx)(MU, {
            entry: VV,
            choice: VU(VV.item, bV[VV.key]),
            onChoose: eV => {
              EV({
                ...bV,
                [VV.key]: eV
              })
            }
          }, VV.key)))
        }) : wV ? (0, ZV.jsx)(DY, {
          entry: wV
        }) : (0, ZV.jsx)(RY, {
          count: 3
        })
      })
    }

    function GU() {
      var VV;
      const {
        t: eV
      } = (0, yV.A)(), xV = JU(), JV = mY(null === (VV = xV.shopInfo[xV.categoryKey]) || void 0 === VV ? void 0 : VV.items, "myOrder");
      return 0 === JV.length ? (0, ZV.jsx)("div", {
        className: "SmpScreen",
        children: (0, ZV.jsx)(gY, {
          title: eV("smpShop:noOrders"),
          children: eV("smpShop:noOrdersHint")
        })
      }) : (0, ZV.jsx)("div", {
        className: "SmpScreen",
        children: (0, ZV.jsx)("div", {
          className: "SmpList",
          children: JV.map((VV => {
            let {
              key: JV,
              item: YV,
              meta: UV
            } = VV;
            const yV = xV.isPending(JV) || !1 === YV.canBuy;
            return (0, ZV.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ZV.jsx)(GY, {
                item: UV.item,
                amount: UV.collectable
              }), (0, ZV.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ZV.jsx)("b", {
                  children: (0, ZV.jsx)(EY.b, {
                    text: YV.customTitle
                  })
                }), (0, ZV.jsxs)("small", {
                  children: [(0, ZV.jsx)(WY, {
                    amount: UV.pricePerItem
                  }), " ", eV("smpShop:each"), UV.collectable > 0 && ` \xb7 ${eV("smpShop:readyCount",{count:UV.collectable})}`]
                }), (0, ZV.jsx)(XU, {
                  done: UV.delivered,
                  of: UV.wanted
                })]
              }), UV.collectable > 0 ? (0, ZV.jsx)(nV.m, {
                loading: yV,
                onClick: () => {
                  xV.act(JV)
                },
                children: eV("smpShop:collectCount", {
                  count: UV.collectable
                })
              }) : (0, ZV.jsx)(nV.E, {
                loading: yV,
                onClick: () => {
                  xV.act(JV)
                },
                children: eV("smpShop:cancel")
              })]
            }, JV)
          }))
        })
      })
    }
    const WU = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      RU = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function gU(VV, eV) {
      let xV = !1;
      const JV = {};
      for (const YV in VV) eV(YV, VV[YV]) ? JV[YV] = VV[YV] : xV = !0;
      return xV ? JV : VV
    }

    function DU(VV) {
      var eV, xV, YV, QV;
      const {
        show: nV,
        shopInfo: wV,
        selectedCategoryKey: vV
      } = VV, {
        t: rV
      } = (0, yV.A)(), kV = null !== vV && void 0 !== vV ? vV : "", bV = fY(wV, kV), EV = null === (eV = wV[kV]) || void 0 === eV ? void 0 : eV.items, BV = null !== bV, [jV, qV] = (0, JV.useState)({}), [tV, FV] = (0, JV.useState)([]), [TV, PV] = (0, JV.useState)(!1), [AV, NV] = (0, JV.useState)(null), [, XV] = (0, JV.useState)(0), MV = (0, JV.useRef)(0), zV = (0, JV.useRef)({}), GV = (0, JV.useRef)({
        items: EV,
        pending: jV,
        shopInfo: wV,
        active: BV,
        canAfford: VV.canAfford,
        buy: VV.buy
      });
      GV.current = {
        items: EV,
        pending: jV,
        shopInfo: wV,
        active: BV,
        canAfford: VV.canAfford,
        buy: VV.buy
      };
      const WV = (0, JV.useCallback)((VV => {
        MV.current++;
        const eV = MV.current;
        FV((xV => [{
          id: eV,
          text: VV
        }, ...xV].slice(0, 8))), NV(eV)
      }), []);
      (0, JV.useEffect)((() => {
        if (null === AV) return;
        const VV = setTimeout((() => {
          NV(null)
        }), 3e3);
        return () => {
          clearTimeout(VV)
        }
      }), [AV]), (0, JV.useEffect)((() => {
        const eV = VV.message;
        if (!eV) return;
        const {
          shopInfo: xV,
          active: JV,
          items: YV
        } = GV.current, UV = null !== eV.categoryKey ? null !== fY(xV, eV.categoryKey) : JV;
        (UV || JV) && WV(eV.text), UV && qV((VV => gU(VV, (VV => {
          var eV, xV;
          return !WU.has(null === YV || void 0 === YV || null === (eV = YV[VV]) || void 0 === eV || null === (xV = eV.smp) || void 0 === xV ? void 0 : xV.kind)
        }))))
      }), [VV.message, WV]), (0, JV.useEffect)((() => {
        qV((VV => gU(VV, ((VV, eV) => eU(null === EV || void 0 === EV ? void 0 : EV[VV]) === eV.snapshot))))
      }), [wV, EV]);
      const RV = Object.keys(jV).length > 0;
      (0, JV.useEffect)((() => {
        if (!RV) return;
        const VV = setInterval((() => {
          XV((VV => VV + 1));
          const VV = Date.now(),
            {
              pending: eV,
              items: xV
            } = GV.current,
            JV = Object.keys(eV).filter((xV => VV - eV[xV].at >= 12e3));
          if (0 === JV.length) return;
          const YV = JV.some((VV => {
            var JV, YV;
            return "search" !== (null === xV || void 0 === xV || null === (JV = xV[VV]) || void 0 === JV || null === (YV = JV.smp) || void 0 === YV ? void 0 : YV.kind) || eV[VV].resend
          }));
          for (const UV of JV) zV.current[UV] = VV;
          qV((VV => gU(VV, (VV => !JV.includes(VV))))), YV && WV(rV("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(VV)
        }
      }), [RV]), (0, JV.useEffect)((() => {
        qV({})
      }), [kV]), (0, JV.useEffect)((() => {
        nV || PV(!1)
      }), [nV]);
      const gV = (0, JV.useCallback)((function(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: JV,
            pending: YV,
            canAfford: UV,
            buy: yV
          } = GV.current, pV = null === JV || void 0 === JV ? void 0 : JV[VV];
          if (!pV || VV in YV || !1 === pV.canBuy) return !1;
          if (!UV(pV, (0, vY.e)(pV, eV))) return !1;
          yV(VV, pV, eV);
          const QV = {
            snapshot: eU(pV),
            at: Date.now(),
            resend: xV
          };
          return GV.current.pending = {
            ...GV.current.pending,
            [VV]: QV
          }, qV((eV => ({
            ...eV,
            [VV]: QV
          }))), !0
        }), []),
        DV = (0, JV.useMemo)((() => ({
          shopInfo: wV,
          categoryKey: kV,
          canAfford: VV.canAfford,
          isPending: VV => VV in jV,
          gaveUpAt: VV => {
            var eV;
            return null !== (eV = zV.current[VV]) && void 0 !== eV ? eV : 0
          },
          act: gV,
          notify: WV
        })), [wV, kV, VV.canAfford, jV, gV, WV]),
        iV = Math.min(...Object.values(jV).map((VV => VV.at))),
        CV = RV && Date.now() - iV > 1500,
        aV = tV.length > 1,
        oV = null !== (xV = null === (YV = wV[kV]) || void 0 === YV ? void 0 : YV.customTitle) && void 0 !== xV ? xV : kV,
        cV = null === (QV = wV[kV]) || void 0 === QV ? void 0 : QV.description;
      let hV = null;
      return "market" === bV ? hV = (0, ZV.jsx)(tU, {}) : "sell" === bV ? hV = (0, ZV.jsx)(PU, {}) : "collect" === bV ? hV = (0, ZV.jsx)(NU, {}) : "orders" === bV ? hV = (0, ZV.jsx)(zU, {}) : "myOrders" === bV && (hV = (0, ZV.jsx)(GU, {})), (0, ZV.jsx)(xU.Provider, {
        value: DV,
        children: (0, ZV.jsx)("div", {
          className: "SmpShopHost",
          hidden: !BV,
          children: (0, ZV.jsxs)("div", {
            className: "SmpShop",
            children: [(0, ZV.jsx)("header", {
              className: "SmpHeader",
              children: (0, ZV.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, ZV.jsxs)("h2", {
                  children: [bV && (0, ZV.jsx)(pV.b, {
                    name: RU[bV]
                  }), rV(oV)]
                }), cV && (0, ZV.jsx)("p", {
                  children: (0, ZV.jsx)(EY.b, {
                    text: cV
                  })
                })]
              })
            }), (0, ZV.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: nV && hV
            }), (0, ZV.jsxs)("button", {
              type: "button",
              className: UV()("SmpStatus", {
                SmpStatusWaiting: RV,
                SmpStatusFresh: !RV && null !== AV,
                SmpStatusHasHistory: aV
              }),
              "aria-live": "polite",
              "aria-expanded": aV ? TV : void 0,
              onClick: () => {
                aV && PV((VV => !VV))
              },
              children: [RV ? (0, ZV.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, ZV.jsx)(CY, {}), rV(CV ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : tV[0] ? (0, ZV.jsx)("span", {
                className: "SmpStatusText",
                children: (0, ZV.jsx)(EY.b, {
                  text: tV[0].text
                })
              }, tV[0].id) : (0, ZV.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: rV("smpShop:ready")
              }), aV && (0, ZV.jsx)("small", {
                children: rV("smpShop:recentMessages", {
                  count: tV.length
                })
              })]
            }), TV && aV && (0, ZV.jsx)("div", {
              className: "SmpStatusHistory",
              children: tV.map((VV => (0, ZV.jsx)("div", {
                children: (0, ZV.jsx)(EY.b, {
                  text: VV.text
                })
              }, VV.id)))
            })]
          })
        })
      })
    }
    class iU {
      constructor(VV) {
        this.info = VV
      }
      static fromShopInfo(VV) {
        const eV = {};
        for (const xV in VV) {
          const JV = !0 === VV[xV].redDot && !0 !== VV[xV].forceRemoveRedDot;
          eV[xV] = {
            redDot: JV,
            items: {}
          };
          for (const YV in VV[xV].items) {
            const JV = VV[xV].items[YV],
              UV = !0 === JV.redDot && !0 !== JV.forceRemoveRedDot;
            eV[xV].items[YV] = {
              redDot: UV
            }
          }
        }
        return new iU(eV)
      }
      anyCategoryHasRedDots() {
        for (const VV in this.info)
          if (this.categoryHasRedDot(VV)) return !0;
        return !1
      }
      doesCategoryExist(VV) {
        return !(0, qx.J)(this.info[VV])
      }
      categoryHasRedDot(VV) {
        return !0 === this.info[VV].redDot
      }
      updateCategoryRedDot(VV, eV) {
        this.info[VV].redDot = eV
      }
      doesItemExist(VV, eV) {
        return this.doesCategoryExist(VV) && !(0, qx.J)(this.info[VV].items[eV])
      }
      itemHasRedDot(VV, eV) {
        return !0 === this.info[VV].items[eV].redDot
      }
      updateItemRedDot(VV, eV, xV) {
        this.info[VV].items[eV].redDot = xV
      }
      shallowCopy() {
        return new iU(this.info)
      }
    }

    function CU(VV, eV) {
      return `${VV}\x1f${eV}`
    }

    function aU(VV, eV) {
      return !(0, qx.J)(eV) && !(0, qx.J)(VV) && eV in VV
    }
    const oU = (0, JV.memo)((function(VV) {
      var eV, xV;
      let {
        show: YV
      } = VV;
      const yV = (0, le.e)("players", mU),
        pV = (0, le.e)("players", KU),
        wV = (0, TY.c)(),
        [rV, kV] = (0, JV.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: iU.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        EV = (0, JV.useRef)(""),
        BV = (0, JV.useRef)(null),
        qV = (0, JV.useRef)(null),
        tV = (0, JV.useRef)(0),
        FV = (0, JV.useRef)(void 0),
        TV = (0, JV.useRef)(null),
        PV = (0, JV.useRef)(rV),
        NV = rV.redDotInfo.anyCategoryHasRedDots(),
        [XV, zV] = (0, JV.useState)(null),
        GV = (0, JV.useRef)(!1);
      let WV = !1,
        RV = 0,
        gV = 0;
      if (rV.currencyAmounts) {
        for (const VV in rV.currencyAmounts) {
          var DV;
          const eV = rV.currencyAmounts[VV];
          eV.hidden || (RV++, (null === (DV = eV.subtext) || void 0 === DV ? void 0 : DV.length) > 0 && gV++)
        }
        WV = RV + gV > 4
      }(0, JV.useEffect)((() => {
        tx.h.QZ("showShopIconRedDot", NV, !0)
      }), [NV]), (0, JV.useEffect)((() => {
        jV.gameBridge.send("setShopOpen", YV), YV || (clearTimeout(FV.current), kV((VV => VV.awaitingPurchase ? {
          ...VV,
          awaitingPurchase: !1
        } : VV)))
      }), [YV]), (0, JV.useEffect)((() => () => {
        jV.gameBridge.send("setShopOpen", !1), clearTimeout(FV.current)
      }), []), (0, JV.useEffect)((() => {
        PV.current = rV
      }), [rV]), (0, JV.useEffect)((() => {
        if (null === XV) return;
        return (0, tY.d)("pointerdown", (VV => {
          const eV = VV.target;
          null !== eV && void 0 !== eV && eV.closest(".ShopItem") || zV(null)
        }))
      }), [XV]);
      const iV = VV => {
          kV((eV => ({
            ...eV,
            ...VV
          })))
        },
        CV = VV => {
          var eV;
          clearTimeout(null === (eV = rV.onBoughtInfo) || void 0 === eV ? void 0 : eV.timeout);
          const xV = setTimeout((() => {
            iV({
              onBoughtInfo: null
            })
          }), 3e3);
          EV.current = VV, iV({
            onBoughtInfo: {
              text: VV,
              timeout: xV,
              categoryKey: BV.current
            }
          })
        },
        aV = VV => {
          const {
            shopInfo: eV,
            userInputsPerItem: xV,
            redDotInfo: JV,
            autoSelectCategory: UV
          } = function(VV, eV, xV, JV, YV, UV) {
            if ((0, qx.J)(VV) || 0 === Object.keys(VV).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: iU.fromShopInfo({}),
              autoSelectCategory: null
            };
            const yV = MV.siteUsedData[MV.siteUsed].adConfig.showRewardedAds,
              pV = {};
            let QV = null;
            for (const EV in VV) {
              const eV = VV[EV],
                xV = {};
              let JV = !1;
              for (const VV in eV.items) {
                const YV = eV.items[VV];
                (0, vY.p)(YV, yV) && (xV[VV] = YV, JV = !0)
              }
              JV && (pV[EV] = {
                ...eV,
                items: xV
              }, !0 === eV.autoSelectCategory && (QV = EV))
            }
            const nV = {},
              wV = (VV, eV, JV, yV) => {
                var pV, QV;
                const wV = CU(VV, eV),
                  ZV = null !== (pV = xV[wV]) && void 0 !== pV ? pV : xV[eV];
                if (null !== (QV = yV.userInput) && void 0 !== QV && QV.type) switch (yV.userInput.type) {
                  case "dropdown": {
                    var vV;
                    const VV = !ZV || !yV.userInput.dropdownOptions.some((VV => (0, vY.h)(VV) === ZV)),
                      eV = yV.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === JV || void 0 === JV || null === (vV = JV.userInput) || void 0 === vV ? void 0 : vV.type) || JSON.stringify(JV.userInput.dropdownOptions) !== JSON.stringify(yV.userInput.dropdownOptions)),
                      xV = yV.userInput,
                      YV = !(0, qx.J)(xV.initialValue) && xV.dropdownOptions.some((VV => (0, vY.h)(VV) === xV.initialValue));
                    var rV;
                    return void(VV || eV ? YV ? nV[wV] = null !== (rV = yV.userInput.initialValue) && void 0 !== rV ? rV : null : yV.userInput.dropdownOptions.length > 0 ? nV[wV] = (0, vY.h)(yV.userInput.dropdownOptions[0]) : nV[wV] = null : nV[wV] = ZV)
                  }
                  case "text":
                  case "number":
                    var kV, bV, EV;
                    return void((null === JV || void 0 === JV ? void 0 : JV.userInput) !== yV.userInput ? nV[wV] = null !== (kV = null !== (bV = yV.userInput.initialValue) && void 0 !== bV ? bV : ZV) && void 0 !== kV ? kV : "" : nV[wV] = null !== (EV = null !== ZV && void 0 !== ZV ? ZV : yV.userInput.initialValue) && void 0 !== EV ? EV : "");
                  case "color":
                    var BV, jV, qV;
                    return void((null === JV || void 0 === JV ? void 0 : JV.userInput) !== yV.userInput ? nV[wV] = null !== (BV = null !== (jV = yV.userInput.initialValue) && void 0 !== jV ? jV : ZV) && void 0 !== BV ? BV : "#000000" : nV[wV] = null !== (qV = null !== ZV && void 0 !== ZV ? ZV : yV.userInput.initialValue) && void 0 !== qV ? qV : "#000000");
                  case "player": {
                    const VV = (0, vY.l)(YV, UV, yV.userInput);
                    return void(ZV && VV.includes(ZV) ? nV[wV] = ZV : nV[wV] = VV.length > 0 ? VV[0] : null)
                  }
                }
              };
            for (const EV in pV)
              for (const VV in pV[EV].items) {
                var ZV;
                const xV = pV[EV].items[VV];
                wV(EV, VV, null === (ZV = eV[EV]) || void 0 === ZV ? void 0 : ZV.items[VV], xV)
              }
            const vV = iU.fromShopInfo(pV);
            for (const EV in pV) {
              var rV;
              if (JV.doesCategoryExist(EV)) {
                (null === (rV = eV[EV]) || void 0 === rV ? void 0 : rV.redDot) === pV[EV].redDot && vV.updateCategoryRedDot(EV, JV.categoryHasRedDot(EV));
                for (const VV in pV[EV].items) {
                  var kV, bV;
                  JV.doesItemExist(EV, VV) && (null === (kV = eV[EV]) || void 0 === kV || null === (bV = kV.items[VV]) || void 0 === bV ? void 0 : bV.redDot) === pV[EV].items[VV].redDot && vV.updateItemRedDot(EV, VV, JV.itemHasRedDot(EV, VV))
                }
              }
            }
            return {
              shopInfo: pV,
              userInputsPerItem: nV,
              redDotInfo: vV,
              autoSelectCategory: QV
            }
          }(VV, rV.shopInfo, rV.userInputsPerItem, rV.redDotInfo, yV, pV), QV = {
            shopInfo: eV,
            userInputsPerItem: xV,
            redDotInfo: JV
          };
          if (null === UV || YV)
            if (eV[rV.selectedCategoryKey]) QV.selectedCategoryKey = rV.selectedCategoryKey;
            else {
              const VV = AY(eV);
              QV.selectedCategoryKey = VV.length > 0 ? VV[0] : null
            }
          else QV.selectedCategoryKey = UV;
          return 0 === Object.keys(eV).length && YV && AV.b.set({
            openEverythingMenuName: null
          }), QV
        },
        cV = (VV, eV, xV) => {
          const JV = rV.selectedCategoryKey,
            YV = CU(JV, VV),
            UV = null !== xV && void 0 !== xV ? xV : rV.userInputsPerItem[YV],
            yV = {
              categoryKey: JV,
              itemKey: VV,
              userInput: UV
            };
          if (BV.current = JV, eV.isRewardedAd) {
            if (Date.now() - tV.current < 5e3) return;
            (0, qe.$)((() => {
              var xV, JV, UV;
              console.log("bought rewarded ad");
              const pV = yV.categoryKey ? null === (xV = PV.current.shopInfo[yV.categoryKey]) || void 0 === xV ? void 0 : xV.items[VV] : null;
              if (!pV || !pV.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (JV = eV.userInput) || void 0 === JV ? void 0 : JV.type) === (null === pV || void 0 === pV || null === (UV = pV.userInput) || void 0 === UV ? void 0 : UV.type) ? (yV.userInput = PV.current.userInputsPerItem[YV], jV.gameBridge.send("buyShopItem", yV), eV.onBoughtMessage && CV(eV.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), tV.current = Date.now()
          } else {
            jV.gameBridge.send("buyShopItem", yV), iV({
              awaitingPurchase: !0
            }), clearTimeout(FV.current), FV.current = setTimeout((() => {
              TV.current = null, iV({
                awaitingPurchase: !1
              })
            }), 1e3);
            const VV = (0, vY.e)(eV, UV);
            if (TV.current = null, !isNaN(VV) && aU(rV.currencyAmounts, eV.currency)) {
              0 !== VV && (TV.current = {
                currency: eV.currency,
                amountBefore: rV.currencyAmounts[eV.currency].amount
              });
              const xV = {
                ...rV.currencyAmounts
              };
              xV[eV.currency].amount -= VV, iV({
                currencyAmounts: xV
              })
            }
            eV.onBoughtMessage && CV(eV.onBoughtMessage)
          }
        },
        hV = (VV, eV) => {
          if (null === eV || !VV.shopInfo[eV]) return VV;
          let xV = VV.redDotInfo;
          return xV.categoryHasRedDot(eV) && (xV.updateCategoryRedDot(eV, !1), xV = xV.shallowCopy()), {
            ...VV,
            selectedCategoryKey: eV,
            redDotInfo: xV
          }
        },
        lV = VV => {
          kV((eV => hV(eV, VV)))
        };
      (0, Se.g)(FY.h, (() => {
        kV((VV => {
          const eV = (0, FY.i)(AY(VV.shopInfo), VV.selectedCategoryKey, (eV => (0, FY.f)(VV.shopInfo[eV].items)));
          return eV === VV.selectedCategoryKey ? VV : hV(VV, eV)
        }))
      })), (0, Se.g)("showShopFromServer", (VV => {
        let {
          toggle: eV,
          vY: xV
        } = VV;
        xV && lV(xV), 0 === Object.keys(rV.shopInfo).length || eV && YV ? AV.b.set({
          openEverythingMenuName: null
        }) : AV.b.set({
          openEverythingMenuName: te.q.SHOP
        })
      })), (0, Se.g)("closeShopOnDamaged", (() => {
        YV && AV.b.set({
          openEverythingMenuName: null
        })
      })), (0, Se.g)("overShopInfo", (VV => {
        CV(VV)
      })), (0, bV.g)("currencyAmounts", (VV => {
        var eV;
        const xV = TV.current;
        xV && (null === VV || void 0 === VV || null === (eV = VV[xV.currency]) || void 0 === eV ? void 0 : eV.amount) === xV.amountBefore ? iV({
          currencyAmounts: VV
        }) : (TV.current = null, iV({
          currencyAmounts: VV,
          awaitingPurchase: !1
        }))
      })), (0, bV.g)("shopInfo", (VV => {
        iV({
          ...aV(VV),
          awaitingPurchase: !1
        })
      }));
      const LV = (0, JV.useRef)({
        playerIds: yV,
        localPlayerId: pV
      });
      (0, JV.useEffect)((() => {
        LV.current.playerIds === yV && LV.current.localPlayerId === pV || (LV.current = {
          playerIds: yV,
          localPlayerId: pV
        }, kV((VV => {
          const eV = aV(VV.shopInfo);
          return {
            ...VV,
            ...eV
          }
        })))
      }), [yV, pV]);
      const fV = rV.selectedCategoryKey,
        mV = (VV, eV) => {
          var xV, JV;
          return (isNaN(eV) || (0, qx.J)(VV.currency) || aU(rV.currencyAmounts, VV.currency) && eV <= rV.currencyAmounts[VV.currency].amount) && (null === (xV = VV.canBuy) || void 0 === xV || xV) && !(null !== (JV = VV.hidden) && void 0 !== JV && JV)
        },
        KV = (VV, eV) => {
          var xV, JV, YV;
          const yV = CU(fV, VV),
            pV = rV.shopInfo[fV].items[VV],
            wV = rV.userInputsPerItem[yV],
            vV = (0, vY.e)(pV, wV),
            kV = mV(pV, vV),
            bV = pV.enchant,
            EV = bV ? (0, oV.qb)(null !== (xV = pV.customTitle) && void 0 !== xV ? xV : VV, {
              colour: oV.kb[bV.tier]
            }) : null !== (JV = pV.customTitle) && void 0 !== JV ? JV : VV,
            BV = eV => {
              const xV = null !== eV && void 0 !== eV ? eV : wV,
                JV = void 0 !== eV ? (0, vY.e)(pV, eV) : vV;
              mV(pV, JV) && null !== xV && cV(VV, pV, eV);
              let YV = rV.redDotInfo;
              YV.itemHasRedDot(fV, VV) && (YV.updateItemRedDot(fV, VV, !1), YV = YV.shallowCopy()), iV({
                redDotInfo: YV
              })
            };
          return (0, ZV.jsxs)("div", {
            className: UV()("ShopItem", {
              ShopItemNoInput: !pV.userInput,
              ShopItemNoInputCanBuy: !pV.userInput && kV,
              ShopItemNoInputSelected: pV.isSelected,
              ShopItemEnchant: !!bV
            }),
            "data-pad-focusable": !pV.userInput || void 0,
            "data-pad-unavailable": !pV.userInput && !kV || void 0,
            "data-pad-repeat": null !== (YV = (0, FY.d)(pV)) && void 0 !== YV ? YV : void 0,
            "data-pad-repeat-wait": rV.awaitingPurchase || void 0,
            onClick: () => {
              if (bV && GV.current) {
                if (XV !== yV) return void zV(yV);
                zV(null)
              }
              pV.userInput || BV()
            },
            onPointerDown: VV => {
              bV && (GV.current = (0, kY.u)(VV))
            },
            onPointerEnter: VV => {
              bV && !(0, kY.u)(VV) && zV(yV)
            },
            onPointerLeave: VV => {
              bV && !(0, kY.u)(VV) && zV((VV => VV === yV ? null : VV))
            },
            style: {
              zIndex: Object.keys(rV.shopInfo[fV].items).length - eV
            },
            children: [rV.redDotInfo.itemHasRedDot(fV, VV) && (0, ZV.jsx)(QV.c, {
              top: "-6px",
              right: "-6px"
            }), pV.badge && (0, ZV.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, ZV.jsx)("div", {
                className: UV()("ShopBadgeMain", pV.badge.type),
                children: (0, ZV.jsx)(EY.b, {
                  text: pV.badge.text
                })
              })
            }), (0, ZV.jsx)("div", {
              className: "ShopItemLeft",
              children: pV.image && (0, ZV.jsx)(cU, {
                item: pV,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, ZV.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, ZV.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, ZV.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, ZV.jsx)(EY.b, {
                    text: EV
                  })
                }), (0, ZV.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, ZV.jsx)(EY.b, {
                    text: pV.description
                  })
                })]
              }), pV.userInput && (0, ZV.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: VV => {
                  VV.stopPropagation()
                },
                children: [(0, ZV.jsx)(LU, {
                  item: pV,
                  currInput: wV,
                  updateInput: eV => {
                    ((VV, eV, xV) => {
                      const JV = CU(VV, eV),
                        YV = {
                          ...rV.userInputsPerItem
                        };
                      YV[JV] = xV, iV({
                        userInputsPerItem: YV
                      })
                    })(fV, VV, eV)
                  },
                  onSubmit: VV => {
                    BV(VV)
                  }
                }), ("dropdown" !== pV.userInput.type || !pV.userInput.autoSubmit) && (0, ZV.jsx)(nV.f, {
                  className: "ItemCostButton",
                  disabled: !kV && null !== wV,
                  onClick: () => {
                    BV()
                  },
                  children: (0, ZV.jsx)(lU, {
                    item: pV,
                    cost: vV,
                    currencyAmounts: rV.currencyAmounts
                  })
                })]
              })]
            }), !pV.userInput && (0, ZV.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, ZV.jsx)(lU, {
                item: pV,
                cost: vV,
                currencyAmounts: rV.currencyAmounts
              })
            }), bV && XV === yV && (0, ZV.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, ZV.jsx)(EY.b, {
                text: EV
              }), (0, ZV.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, ZV.jsx)(EY.b, {
                  text: (0, rY.d)("", bV.enchantments, bV.enchantmentData)
                })
              })]
            })]
          }, yV)
        },
        HV = function(VV) {
          for (const eV in VV)
            if (VV[eV].smp) return !0;
          return !1
        }(rV.shopInfo),
        uV = fY(rV.shopInfo, fV);
      return (0, ZV.jsx)(nY.d, {
        className: "Menu ShopBody",
        show: YV,
        children: 0 !== Object.keys(rV.shopInfo).length && (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, ZV.jsx)(vV, {
              items: AY(rV.shopInfo).map((VV => {
                var eV;
                return {
                  id: VV,
                  title: null !== (eV = rV.shopInfo[VV].customTitle) && void 0 !== eV ? eV : VV,
                  redDot: rV.redDotInfo.categoryHasRedDot(VV)
                }
              })),
              link: wV ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, PY.e)({
                    page: (0, PY.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: fV,
              onClick: lV,
              padStartsOnTab: (0, FY.e)(fV)
            }), (0, ZV.jsx)("div", {
              className: "MenuSideBarFooter",
              children: rV.currencyAmounts && Object.keys(rV.currencyAmounts).map((VV => {
                var eV;
                const xV = rV.currencyAmounts[VV];
                return xV.hidden ? null : (0, ZV.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (WV ? "SmallText" : ""),
                  children: [(0, ZV.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, ZV.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: xV.iconColour
                      },
                      children: (0, ZV.jsx)(HU, {
                        iconName: xV.icon
                      })
                    }), "\xa0", (0, ZY.c)(xV.amount, 6)]
                  }), (null === (eV = xV.subtext) || void 0 === eV ? void 0 : eV.length) > 0 && (0, ZV.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, ZV.jsx)(EY.b, {
                      text: xV.subtext
                    })
                  })]
                }, VV)
              }))
            })]
          }), (0, ZV.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [HV && (0, ZV.jsx)(DU, {
              show: YV,
              shopInfo: rV.shopInfo,
              selectedCategoryKey: fV,
              buy: (VV, eV, xV) => {
                cV(VV, eV, xV)
              },
              canAfford: mV,
              message: rV.onBoughtInfo
            }), null === uV && (0, ZV.jsxs)(ZV.Fragment, {
              children: [(0, ZV.jsx)("div", {
                className: UV()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== rV.onBoughtInfo
                }),
                children: (0, ZV.jsx)(EY.b, {
                  text: EV.current
                })
              }), (0, ZV.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, ZV.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (eV = rV.shopInfo[fV]) || void 0 === eV ? void 0 : eV.description) && (0, ZV.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, ZV.jsx)(EY.b, {
                      text: rV.shopInfo[fV].description
                    })
                  }), YV && (0, ZV.jsx)("div", {
                    className: "ShopItems",
                    ref: qV,
                    "data-pad-initial-area": !0,
                    children: AY(null === (xV = rV.shopInfo[fV]) || void 0 === xV ? void 0 : xV.items).map(((VV, eV) => KV(VV, eV)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function cU(VV) {
      let {
        item: eV,
        minWidth: xV,
        minHeight: JV
      } = VV;
      const {
        image: YV,
        schematicId: UV,
        imageColour: yV
      } = eV;
      if (UV) return (0, ZV.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${xV}rem`,
          height: `${JV}rem`
        },
        children: (0, ZV.jsx)(BY.d, {
          game: {
            schematicId: UV
          }
        })
      });
      var QV, nV;
      if ((0, bY.h)(YV)) return (0, ZV.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${xV}rem`,
          height: "0",
          minHeight: `${JV}rem`
        },
        children: (0, ZV.jsx)(bY.e, {
          itemName: YV,
          amount: null !== (QV = eV.amount) && void 0 !== QV ? QV : 0,
          amountFontSize: JV / 4 + "rem",
          enchantmentTier: null === (nV = eV.enchant) || void 0 === nV ? void 0 : nV.tier
        })
      });
      const wV = YV.slice(-4);
      return ".jpg" === wV || ".png" === wV ? (0, ZV.jsx)(hU, {
        image: YV,
        minWidth: xV
      }) : (0, ZV.jsx)(pV.b, {
        name: YV,
        className: "SelectedItemImage",
        style: {
          color: yV
        }
      })
    }

    function hU(VV) {
      let {
        image: eV,
        minWidth: xV
      } = VV;
      const {
        gameNameWithVariation: JV
      } = (0, le.h)("connectedGame"), YV = eV.endsWith(".jpg");
      return (0, ZV.jsx)("img", {
        className: UV()({
          ShopPixelImage: !YV
        }),
        style: {
          width: `${YV?1.6*xV:xV}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,oV.Pb)(JV)}/${eV}`,
        alt: eV,
        draggable: !1
      })
    }

    function lU(VV) {
      let {
        item: eV,
        cost: xV,
        currencyAmounts: JV
      } = VV;
      const YV = !isNaN(xV) && 0 !== xV && aU(JV, eV.currency);
      let UV = null;
      return eV.buyButtonText ? UV = eV.buyButtonText : YV ? (UV = xV, eV.sell && (UV = -1 * xV), UV = UV.toString()) : 0 === xV ? UV = "Free" : eV.isRewardedAd && (UV = "Watch ad"), (0, qx.J)(UV) || " " === UV ? null : (0, ZV.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [YV && (0, ZV.jsx)("div", {
          style: {
            color: JV[eV.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, ZV.jsx)(HU, {
            iconName: JV[eV.currency].icon
          })
        }), (0, ZV.jsx)("div", {
          className: "BuyItemCost",
          children: (0, ZV.jsx)(EY.b, {
            text: UV
          })
        })]
      })
    }

    function LU(VV) {
      let {
        item: eV,
        currInput: xV,
        updateInput: YV,
        onSubmit: UV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)(), QV = (0, JV.useRef)(null);
      if ((0, JV.useEffect)((() => {
          const VV = QV.current;
          VV && VV.value !== xV && document.activeElement !== VV && (VV.value = null !== xV && void 0 !== xV ? xV : "")
        }), [xV]), !eV.userInput) return null;
      let nV = eV.userInput;
      if (BV.featureFlags.sanitizeShopInput && "text" === eV.userInput.type && (nV = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === nV.type || "number" === nV.type) {
        var wV, vV;
        console.assert(void 0 !== xV, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(eV)}`);
        const VV = "text" === nV.type && nV.wordCharsOnly;
        return (0, ZV.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, ZV.jsx)(FV.d, {
            className: "ShopItemUserInputText",
            placeholderText: pV(nV.placeholderText),
            defaultValue: xV,
            domRef: QV,
            onValueChange: (eV, xV) => {
              !0 === VV && (eV = (0, qY.db)(eV)), QV.current.value = eV, YV(eV)
            },
            onEnter: UV,
            type: nV.type
          }, (null !== (wV = nV.initialValue) && void 0 !== wV ? wV : "") + (null !== (vV = nV.placeholderText) && void 0 !== vV ? vV : ""))
        })
      }
      if ("dropdown" === nV.type) {
        console.assert(void 0 !== xV, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(eV)}`);
        const VV = nV.autoSubmit;
        return (0, ZV.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, ZV.jsx)(oe.c, {
            options: nV.dropdownOptions.map((VV => (0, vY.h)(VV))),
            value: xV,
            onChange: eV => {
              let {
                value: xV
              } = eV;
              YV(xV), VV && UV(xV)
            }
          })
        })
      }
      return "player" === nV.type ? (0, ZV.jsx)(fU, {
        userInput: nV,
        currInput: xV,
        updateInput: YV
      }) : "color" === nV.type ? (0, ZV.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, ZV.jsx)("input", {
          type: "color",
          value: xV,
          onChange: VV => {
            YV(VV.target.value)
          }
        })
      }) : null
    }

    function fU(VV) {
      let {
        userInput: eV,
        currInput: xV,
        updateInput: JV
      } = VV;
      const YV = (0, le.h)("players"),
        UV = (0, le.h)("hiddenPlayerNames"),
        yV = (0, vY.l)(YV.ids, YV.localId, eV);
      return (0, ZV.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, ZV.jsx)(oe.c, {
          options: yV.map((VV => {
            const {
              name: eV
            } = YV.byId[VV];
            return {
              value: VV,
              label: null === eV ? "" : (0, jY.g)(eV, UV)
            }
          })),
          value: xV,
          onChange: VV => {
            let {
              value: eV
            } = VV;
            JV(eV)
          }
        })
      })
    }

    function mU(VV) {
      let {
        ids: eV
      } = VV;
      return eV
    }

    function KU(VV) {
      let {
        localId: eV
      } = VV;
      return eV
    }

    function HU(VV) {
      let {
        iconName: eV
      } = VV;
      return jV.gameBridge.lookup("isItemName", eV) ? (0, ZV.jsx)(bY.e, {
        itemName: eV,
        amount: 1
      }) : (0, ZV.jsx)(pV.b, {
        name: eV,
        className: "2x"
      })
    }
    var uU = xV(1725);
    const sU = (0, xV(1493).i)((VV => VV.PadLobbyShortcuts)),
      SU = (0, JV.lazy)((() => Promise.resolve().then((() => xV(5145))).then((VV => ({
        default: VV.Lobbyleaderboard
      }))))),
      IU = (0, JV.lazy)((() => xV.e(242).then((() => xV(42402))).then((VV => ({
        default: VV.LobbyManageView
      })))));

    function dU(VV) {
      let {
        show: eV
      } = VV;
      return eV ? (0, ZV.jsx)(OU, {}) : null
    }

    function OU() {
      const VV = (0, TY.c)();
      return (0, ZV.jsxs)(ZV.Fragment, {
        children: [(0, ZV.jsx)(sU, {}), (0, ZV.jsxs)(JV.Suspense, {
          fallback: (0, ZV.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, ZV.jsx)(TV.d, {})
          }),
          children: [VV && (0, ZV.jsx)(IU, {
            leaderboard: (0, ZV.jsx)(SU, {})
          }), !VV && (0, ZV.jsx)(SU, {})]
        })]
      })
    }
    var Vy = xV(1649),
      ey = xV(3390),
      xy = xV(1838),
      Jy = xV(3437),
      Yy = xV(2971),
      Uy = xV(1601),
      yy = xV(1557),
      py = xV(3364),
      Qy = xV(3377),
      ny = xV(2483);
    const wy = "storeRecentGiftRecipients",
      Zy = new Map;

    function vy() {
      try {
        const VV = Yx.m.getItem(wy);
        return Array.isArray(VV) ? VV.filter((VV => "string" === typeof(null === VV || void 0 === VV ? void 0 : VV.name) && VV.name.length > 0)).map((VV => ({
          name: VV.name,
          cosmetics: VV.cosmetics && "object" === typeof VV.cosmetics ? VV.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function ry(VV, eV) {
      var xV;
      const [YV, UV] = (0, JV.useState)(""), [yV, pV] = (0, JV.useState)("search"), [QV, nV] = (0, JV.useState)(null), [wV, ZV] = (0, JV.useState)(null), vV = (0, JV.useRef)(null), rV = (0, JV.useRef)(null);
      (0, JV.useEffect)((() => () => {
        vV.current && clearTimeout(vV.current)
      }), []), (0, JV.useEffect)((() => {
        eV || EV()
      }), [eV]);
      const kV = null !== (xV = null === QV || void 0 === QV ? void 0 : QV.name) && void 0 !== xV ? xV : null;

      function bV() {
        vV.current && (clearTimeout(vV.current), vV.current = null)
      }

      function EV() {
        bV(), UV(""), pV("search"), nV(null)
      }(0, JV.useEffect)((() => {
        if (null === kV || VV === zV.NULL_USER_CONTEXT) return;
        const eV = kV.toLowerCase();
        if (eV === VV.getPlayerName().toLowerCase()) return void ZV({
          name: kV,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const xV = Zy.get(eV);
        if (xV) return void ZV({
          name: kV,
          result: xV
        });
        let JV = !1;
        return async function(VV, eV) {
          try {
            const xV = await (0, zV.postJsonWithMetricsCookiesAndJsonResponse)(`${je.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: eV
            }, {
              retries: 1
            }, VV.getMetricsCookies());
            if ("boolean" !== typeof(null === xV || void 0 === xV ? void 0 : xV.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(xV)}`);
            return xV
          } catch (xV) {
            return console.error("Failed to look up gift recipient:", xV), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(VV, kV).catch((VV => (console.error("Gift recipient lookup failed:", VV), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((VV => {
          !0 !== VV.giftRecipientFound && "store:giftRecipientLookupFailed" === VV.giftRecipientError || Zy.set(eV, VV), JV || ZV({
            name: kV,
            result: VV
          })
        })), () => {
          JV = !0
        }
      }), [kV, VV]);
      const BV = (0, JV.useMemo)((() => {
        const VV = YV.trim();
        if (!VV) return {
          status: "none"
        };
        if (!QV || QV.name !== VV || (null === wV || void 0 === wV ? void 0 : wV.name) !== QV.name) return {
          status: "pending",
          name: VV
        };
        const eV = wV.result;
        return !1 === eV.giftRecipientFound ? {
          status: "error",
          name: QV.name,
          error: eV.giftRecipientError
        } : {
          status: "found",
          name: eV.giftRecipientName,
          ownedPacks: eV.giftRecipientOwnedPacks,
          hasSuperRank: eV.giftRecipientHasSuperRank,
          isSubscriber: eV.giftRecipientIsSubscriber
        }
      }), [YV, QV, wV]);
      (0, JV.useEffect)((() => {
        "found" === BV.status && "typed" === (null === QV || void 0 === QV ? void 0 : QV.source) && rV.current !== BV.name && (rV.current = BV.name, (0, Ye.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [BV, QV]);
      const jV = (null === wV || void 0 === wV ? void 0 : wV.name) === (null === QV || void 0 === QV ? void 0 : QV.name) ? null === wV || void 0 === wV ? void 0 : wV.result : null,
        qV = !0 === (null === jV || void 0 === jV ? void 0 : jV.giftRecipientFound) ? jV.giftRecipientCosmetics : null;
      return {
        query: YV,
        via: yV,
        recipient: BV,
        recipientCosmetics: qV,
        type: function(VV) {
          UV(VV), pV("search"), bV();
          const eV = VV.trim();
          eV ? vV.current = setTimeout((() => {
            nV({
              name: eV,
              source: "typed"
            })
          }), 400) : nV(null)
        },
        choose: function(VV, eV) {
          bV(), UV(VV), pV("typed" === eV ? "search" : "prefilled" === eV ? "prefilled" : "suggestion"), nV({
            name: VV,
            source: eV
          }), "typed" !== eV && "prefilled" !== eV && (0, Ye.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: eV
          })
        },
        clear: EV,
        recordGift: function(VV, eV) {
          ! function(VV) {
            Zy.delete(VV.toLowerCase())
          }(VV), ZV((xV => {
            if (!xV || xV.name.toLowerCase() !== VV.toLowerCase() || !0 !== xV.result.giftRecipientFound || "superRank" === eV) return xV;
            const JV = xV.result.giftRecipientOwnedPacks;
            return {
              ...xV,
              result: {
                ...xV.result,
                giftRecipientOwnedPacks: JV.includes(eV) ? JV : [...JV, eV]
              }
            }
          }))
        }
      }
    }
    var ky = xV(2475),
      by = xV(5150),
      Ey = xV(275),
      By = xV(3535);
    const jy = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var qy = xV(2437),
      ty = xV(642),
      Fy = xV(2524),
      Ty = xV(2903);

    function Py(VV) {
      let {
        cosmetics: eV
      } = VV;
      return (0, ZV.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, ZV.jsx)(Fy.e, {
          cosmetics: eV
        })
      })
    }

    function Ay(VV, eV) {
      var xV, JV;
      const YV = null !== (xV = VV.friend) && void 0 !== xV ? xV : {
        isError: !1,
        name: VV.name,
        ranks: [],
        cosmetics: null !== (JV = VV.cosmetics) && void 0 !== JV ? JV : {},
        nameColour: ty.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return eV ? {
        ...YV,
        cosmetics: eV
      } : YV
    }

    function Ny(VV) {
      let {
        pending: eV
      } = VV;
      return (0, ZV.jsx)("span", {
        className: "StoreRecipientLoader",
        children: eV && (0, ZV.jsx)(TV.d, {})
      })
    }

    function Xy(VV) {
      var eV;
      let {
        selfName: xV,
        giftRecipient: YV,
        suggestionsVersion: QV,
        pulseSignal: wV,
        disabled: vV
      } = VV;
      const {
        t: rV
      } = (0, yV.A)(), kV = (0, fV.m)(), bV = (0, JV.useRef)(null), EV = (0, JV.useRef)(null), {
        query: jV,
        via: qV,
        recipient: tV,
        recipientCosmetics: TV
      } = YV, PV = (0, ny.l)(jV), AV = (0, JV.useMemo)((() => {
        const VV = BV.featureFlags.useSocialFeatures ? kV.friends.filter((VV => !VV.isError)) : [];
        return (0, ny.h)({
          onlineFriends: (0, fV.f)(VV),
          recentRecipients: vy(),
          friends: VV,
          selfName: xV,
          max: 8
        })
      }), [kV.friends, xV, QV]), NV = jV.trim().toLowerCase(), XV = "search" !== qV && NV ? AV.find((VV => VV.name.toLowerCase() === NV)) : void 0, MV = XV && "prefilled" === qV ? [XV, ...AV.filter((VV => VV !== XV))] : AV, zV = "" !== NV && !XV, GV = zV ? jV : "", WV = MV.length > 0;
      (0, JV.useEffect)((() => {
        bV.current && bV.current.value !== GV && (bV.current.value = GV)
      }), [GV]), (0, JV.useEffect)((() => {
        bV.current && (bV.current.disabled = vV)
      }), [vV, wV]);
      const RV = (0, JV.useRef)(0);

      function DV() {
        "self" !== PV && (0, Ye.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), YV.clear()
      }

      function iV(VV) {
        var eV, xV;
        if (vV) return;
        if (" " === VV.key || "Enter" === VV.key) return VV.preventDefault(), void VV.currentTarget.click();
        const JV = Array.from(null !== (eV = null === (xV = EV.current) || void 0 === xV ? void 0 : xV.querySelectorAll("[role=radio]")) && void 0 !== eV ? eV : []),
          YV = JV.indexOf(VV.currentTarget);
        let UV;
        "ArrowRight" === VV.key || "ArrowDown" === VV.key ? UV = JV[(YV + 1) % JV.length] : "ArrowLeft" === VV.key || "ArrowUp" === VV.key ? UV = JV[(YV - 1 + JV.length) % JV.length] : "Home" === VV.key ? UV = JV[0] : "End" === VV.key && (UV = JV[JV.length - 1]), UV && (VV.preventDefault(), UV.focus(), UV.click())
      }(0, JV.useEffect)((() => {
        var VV;
        wV > RV.current && !vV && (RV.current = wV, null === (VV = bV.current) || void 0 === VV || VV.focus())
      }), [wV, vV]);
      const CV = "self" === PV,
        aV = null !== (eV = null === XV || void 0 === XV ? void 0 : XV.name) && void 0 !== eV ? eV : null,
        oV = "error" === tV.status ? tV.error : null,
        cV = "store:giftRecipientLookupFailed" === oV;
      return (0, ZV.jsxs)("div", {
        className: UV()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: vV,
          StoreRecipientStripNoChips: !WV
        }),
        children: [(0, ZV.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: rV("store:buyingFor")
        }), (0, ZV.jsxs)("div", {
          ref: EV,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": rV("store:whoIsItFor"),
          children: [(0, ZV.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": CV,
            tabIndex: vV || !CV && null !== aV ? -1 : 0,
            className: UV()("StoreRecipientMe", {
              StoreRecipientChecked: CV
            }),
            onClick: () => {
              vV || DV()
            },
            onKeyDown: iV,
            children: [(0, ZV.jsx)(pV.b, {
              name: "user"
            }), " ", rV("store:me")]
          }), WV && (0, ZV.jsx)("div", {
            className: "StoreRecipientChips",
            children: MV.map((VV => {
              const eV = VV === XV;
              return (0, ZV.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": eV,
                tabIndex: !vV && eV ? 0 : -1,
                title: VV.name,
                className: UV()("StoreRecipientChip", {
                  StoreRecipientChecked: eV
                }),
                onClick: () => {
                  vV || function(VV) {
                    "gift" !== PV && (0, Ye.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), YV.choose(VV.name, VV.kind)
                  }(VV)
                },
                onKeyDown: iV,
                children: (0, ZV.jsx)(Ty.f, {
                  playerSocialPreview: Ay(VV, eV ? TV : null),
                  opensProfileCard: !1,
                  isFriend: null !== VV.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== VV.friend,
                  status: null === VV.friend ? null : void 0,
                  trailing: eV ? (0, ZV.jsx)(Ny, {
                    pending: "pending" === tV.status
                  }) : void 0
                })
              }, VV.name)
            }))
          })]
        }), (0, ZV.jsxs)("div", {
          className: UV()("StoreRecipientSearch", {
            StoreRecipientChecked: zV,
            StoreRecipientSearchPulse: wV > 0 && !zV,
            StoreRecipientSearchError: null !== oV && !cV
          }),
          onClick: () => {
            var VV;
            null === (VV = bV.current) || void 0 === VV || VV.focus()
          },
          children: [zV && "found" === tV.status && TV && (0, ZV.jsx)(Py, {
            cosmetics: TV
          }), !(zV && "found" === tV.status && TV) && (0, ZV.jsx)(pV.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, ZV.jsx)(FV.d, {
            className: "StoreRecipientSearchInput",
            domRef: bV,
            placeholderText: rV("store:searchName"),
            defaultValue: GV,
            maxLength: gV.f,
            onValueChange: function(VV) {
              "gift" !== PV && VV.trim() && (0, Ye.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), YV.type(VV)
            },
            onEnter: () => {
              var VV;
              const eV = null === (VV = bV.current) || void 0 === VV ? void 0 : VV.value.trim();
              eV && YV.choose(eV, "typed")
            },
            blurOnEnter: !0
          }), zV && (0, ZV.jsx)(Ny, {
            pending: "pending" === tV.status
          }), zV && (0, ZV.jsx)("div", {
            ...(0, nV.V)({
              disabled: vV
            }),
            "aria-label": rV("store:clearRecipient"),
            title: rV("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: VV => {
              VV.stopPropagation(), vV || DV()
            },
            children: (0, ZV.jsx)(pV.b, {
              name: "xmark"
            })
          })]
        }, wV), oV && (0, ZV.jsx)("div", {
          className: UV()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: cV
          }),
          role: "status",
          children: rV(oV)
        })]
      })
    }
    var My = xV(2404),
      zy = xV(4e3),
      Gy = xV(3541),
      Wy = xV(2441);
    const Ry = xV.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function gy() {
      (0, Wy.i)(Ry, {
        lowPriority: !1
      })
    }

    function Dy(VV) {
      let {
        onBack: eV,
        cta: xV,
        recipient: YV,
        afterCta: UV
      } = VV;
      const {
        t: QV
      } = (0, yV.A)(), [wV, vV] = (0, JV.useState)("starting"), rV = (0, JV.useRef)(null), kV = (0, Oe.e)(), bV = (0, JV.useRef)(null), EV = (0, JV.useCallback)((() => {
        const VV = rV.current;
        null !== VV.error && VV.load();
        const eV = VV.play();
        bV.current = eV, eV.catch((VV => {
          (0, zy.e)("Failed to play Super Rank video", VV), kV.current && bV.current === eV && vV("failed")
        }))
      }), [kV]);
      return (0, JV.useEffect)((() => {
        const VV = rV.current;
        let eV;

        function xV() {
          clearTimeout(eV), eV = setTimeout(EV, 3e3)
        }
        return EV(), VV.addEventListener("ended", xV), () => {
          clearTimeout(eV), VV.removeEventListener("ended", xV)
        }
      }), [EV]), (0, ZV.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, ZV.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, ZV.jsx)(nV.b, {
            className: "StoreDetailBackButton",
            onClick: eV,
            padBack: !0,
            children: QV("general:back")
          }), (0, ZV.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, ZV.jsx)(pV.b, {
              name: "bolt"
            }), " ", QV("homePage:superRank")]
          }), YV]
        }), (0, ZV.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, ZV.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, ZV.jsx)("video", {
              ref: rV,
              src: `${je.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Ry,
              muted: !0,
              playsInline: !0,
              controls: "playing" === wV,
              onPlaying: () => {
                vV("playing")
              },
              onError: () => {
                vV("failed")
              }
            }), ("failed" === wV || "loading" === wV) && (0, ZV.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, ZV.jsx)(nV.f, {
                ariaLabel: QV("general:play"),
                loading: "loading" === wV,
                onClick: () => {
                  vV("loading"), EV()
                },
                touchPressOn: "pointerup",
                children: (0, ZV.jsx)(pV.b, {
                  name: "play"
                })
              })
            })]
          }), (0, ZV.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, ZV.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, ZV.jsx)(Gy.d, {})
            }), (0, ZV.jsxs)("div", {
              className: "StoreTileActions",
              children: [xV, UV]
            })]
          })]
        })]
      })
    }
    var iy = xV(2917),
      Cy = xV(3971),
      ay = xV(3503),
      oy = xV(3507),
      cy = xV(3474);
    const hy = [ty.t.yellow, ty.t.green, ty.t.aqua, ty.t.blue, ty.t.purple, ty.t.red];

    function ly(VV) {
      return "needsRecipient" === VV || "lookingUp" === VV || "gift" === VV || "recipientOwns" === VV || "recipientSharesOwned" === VV || "recipientSubscribed" === VV
    }

    function Ly(VV) {
      const {
        onKeyDown: eV,
        ...xV
      } = (0, nV.V)();
      return {
        ...xV,
        "aria-label": VV,
        onKeyDown: VV => {
          VV.target === VV.currentTarget && (null === eV || void 0 === eV || eV(VV))
        }
      }
    }

    function fy(VV) {
      let {
        text: eV
      } = VV;
      return (0, ZV.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(eV).map(((VV, eV) => (0, ZV.jsx)("span", {
          style: {
            color: hy[eV % hy.length]
          },
          children: VV
        }, eV)))
      })
    }
    const my = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Ky(VV) {
      let {
        state: eV,
        item: xV,
        price: JV,
        busy: YV,
        highlight: QV = !1,
        onAct: wV,
        onNeedRecipient: vV,
        onLogin: rV
      } = VV;
      const {
        t: kV
      } = (0, yV.A)(), bV = "superRank" === xV ? iV.k.product.days : null, EV = VV => null === bV ? kV(VV ? "general:gift" : "general:buy") : kV(VV ? "store:giftDays" : "store:buyDays", {
        days: bV
      }), BV = (VV, eV) => {
        const xV = (0, ZV.jsxs)(ZV.Fragment, {
          children: [null === VV && (0, ZV.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== VV && (0, ZV.jsx)("span", {
            className: "StoreCtaLabel",
            title: VV,
            children: VV
          })]
        });
        return null !== bV ? (0, ZV.jsxs)(ZV.Fragment, {
          children: [eV && (0, ZV.jsx)("span", {
            className: "StoreCtaIcon",
            children: eV
          }), xV, (0, ZV.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, ZV.jsx)(My.e, {
              amount: JV
            })]
          })]
        }) : (0, ZV.jsxs)(ZV.Fragment, {
          children: [(0, ZV.jsxs)("span", {
            className: "StoreCtaLead",
            children: [xV, "\xb7"]
          }), (0, ZV.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [eV, (0, ZV.jsx)(My.e, {
              amount: JV
            })]
          })]
        })
      };
      let jV;
      switch (eV) {
        case "pending":
          jV = (0, ZV.jsx)(nV.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: BV(null)
          });
          break;
        case "login":
          jV = (0, ZV.jsx)(nV.m, {
            className: "StoreCtaButton",
            onClick: rV,
            children: BV(EV(!1))
          });
          break;
        case "owned":
          jV = (0, ZV.jsx)(nV.j, {
            className: "StoreCtaButton",
            onClick: () => {
              AV.b.set({
                openEverythingMenuName: te.q.CUSTOMISATION
              })
            },
            children: (0, ZV.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, ZV.jsx)(pV.b, {
                name: "shirt"
              }), " ", kV("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          jV = (0, ZV.jsx)(nV.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, ZV.jsx)("span", {
              className: "StoreCtaLabel",
              children: kV(my[eV])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          jV = (0, ZV.jsx)(nV.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === eV || null === JV,
            loading: "lookingUp" === eV || YV,
            onClick: wV,
            analyticsClick: {
              id: "store.gift",
              value: xV
            },
            children: BV(EV(!0), ny.b)
          });
          break;
        case "buy":
        case "recharge":
          jV = (0, ZV.jsx)(nV.m, {
            className: "StoreCtaButton",
            loading: YV,
            disabled: null === JV,
            onClick: wV,
            analyticsClick: {
              id: "store.buy",
              value: xV
            },
            children: BV(EV(!1))
          })
      }
      return (0, ZV.jsx)("div", {
        className: UV()("StoreCta", {
          StoreCtaHighlight: QV,
          StoreCtaLabelFirst: null !== bV
        }),
        onClick: VV => {
          VV.stopPropagation(), "needsRecipient" === eV && vV()
        },
        children: jV
      })
    }

    function Hy() {
      const {
        t: VV
      } = (0, yV.A)();
      return (0, ZV.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, ZV.jsxs)("li", {
          children: [(0, ZV.jsx)(pV.b, {
            name: "check"
          }), (0, ZV.jsx)(fy, {
            text: VV("store:colourfulNames")
          })]
        }), (0, ZV.jsxs)("li", {
          children: [(0, ZV.jsx)(pV.b, {
            name: "check"
          }), VV("store:perkCapes")]
        }), (0, ZV.jsxs)("li", {
          children: [(0, ZV.jsx)(pV.b, {
            name: "check"
          }), VV("store:perkNoAdverts")]
        }), (0, ZV.jsxs)("li", {
          children: [(0, ZV.jsx)(pV.b, {
            name: "check"
          }), VV("store:perkFriends", {
            count: (0, xe.b)(["super"])
          })]
        })]
      })
    }

    function uy(VV) {
      let {
        daysLeft: eV,
        totalDays: xV,
        urgent: JV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)(), pV = xV > 0 ? Math.min(1, Math.max(.03, eV / xV)) : 1;
      return (0, ZV.jsxs)("div", {
        className: UV()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: JV
        }),
        children: [(0, ZV.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === eV ? YV("store:oneDayLeft") : YV("store:daysLeft", {
            days: eV
          })
        }), (0, ZV.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, ZV.jsx)("i", {
            style: {
              width: 100 * pV + "%"
            }
          })
        })]
      })
    }

    function sy(VV) {
      var eV;
      let {
        state: xV,
        urgent: JV,
        daysLeft: YV,
        totalDays: QV,
        recipientHasSuperRank: nV,
        busy: wV,
        highlight: vV,
        onOpen: rV,
        onAct: kV,
        onNeedRecipient: bV,
        onLogin: EV
      } = VV;
      const {
        t: BV
      } = (0, yV.A)(), jV = ly(xV), {
        days: qV
      } = iV.k.product, tV = BV("store:recipientHasSuperRank", {
        giftDays: qV
      }), FV = null === (eV = IV("subscribed" === xV)) || void 0 === eV ? void 0 : eV.text;
      return (0, ZV.jsxs)("div", {
        className: UV()("StoreTile StoreSuperRankTile", {
          StoreTileGift: jV,
          StoreSuperRankTileUrgent: "recharge" === xV && JV,
          StoreSuperRankTileWithChip: nV,
          StoreSuperRankTileGiftReady: "gift" === xV
        }),
        ...Ly(BV("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: gy,
        onFocus: gy,
        onClick: rV,
        children: [(0, ZV.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${qy.e})`
          }
        }), jV && (0, ZV.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, ZV.jsxs)("div", {
          className: "StoreTileContent",
          children: [nV && (0, ZV.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: tV,
            children: tV
          }), (0, ZV.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, ZV.jsx)(pV.b, {
              name: "bolt"
            }), " ", BV("homePage:superRank")]
          }), jV && (0, ZV.jsx)("div", {
            className: "StoreTilePitch",
            children: BV("store:giftPitch", {
              days: qV
            })
          }), "recharge" === xV && (0, ZV.jsx)(uy, {
            daysLeft: YV,
            totalDays: QV,
            urgent: JV
          }), FV && (0, ZV.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, ZV.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: FV
            })
          }), (0, ZV.jsx)(Hy, {}), (0, ZV.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, ZV.jsx)(Ky, {
              state: xV,
              item: "superRank",
              price: iV.k.price,
              busy: wV,
              highlight: vV,
              onAct: kV,
              onNeedRecipient: bV,
              onLogin: EV
            }), "needsRecipient" === xV && (0, ZV.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: BV("store:pickRecipientFirst")
            }), "recharge" === xV && JV && (0, ZV.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === YV ? BV("store:endsInOneDay") : BV("store:endsInDays", {
                days: YV
              })
            })]
          })]
        })]
      })
    }
    const Sy = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Iy(VV) {
      var eV;
      let {
        pack: xV,
        state: YV,
        busy: QV,
        onOpen: nV,
        onAct: wV,
        onNeedRecipient: vV,
        onLogin: rV
      } = VV;
      const {
        t: kV
      } = (0, yV.A)(), bV = Vy.d[xV], EV = py.k[xV], BV = (0, qy.n)(xV), jV = (0, JV.useRef)(null);
      (0, ay.k)(xV, jV);
      const qV = ly(YV),
        tV = null !== (eV = bV.displayName) && void 0 !== eV ? eV : xV,
        FV = (0, Cy.e)((() => {
          (0, iy.d)();
          const VV = (0, ay.f)(xV);
          void 0 !== VV && (0, Wy.i)((0, ay.e)(VV))
        })),
        [TV] = (0, JV.useState)(By.l);
      return (0, ZV.jsxs)("div", {
        className: UV()("StoreTile StorePackTile", Sy[bV.tier], {
          StorePackTileOwned: "owned" === YV,
          StorePackTileRecipientOwns: "recipientOwns" === YV,
          StoreTileGift: qV
        }),
        ...Ly(tV),
        ref: jV,
        "data-store-item": xV,
        onClick: nV,
        onPointerMove: VV => {
          "mouse" !== VV.pointerType || 0 === VV.movementX && 0 === VV.movementY || TV || FV.start()
        },
        onPointerLeave: FV.cancel,
        children: [EV && (0, ZV.jsx)(EV, {}), (0, ZV.jsx)("div", {
          className: "StorePackCharacters",
          children: BV.map((VV => (0, ZV.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,qy.i)(VV)})`
            }
          }, VV)))
        }), (0, ZV.jsx)("div", {
          className: "StoreTileScrim"
        }), qV && (0, ZV.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, ZV.jsx)(cy.d, {
          pack: xV,
          className: UV()({
            PackAnimatedBadgeBesideRibbon: qV
          })
        }), (0, ZV.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, ZV.jsx)("div", {
            className: "StoreTileTitle",
            children: tV
          }), (0, ZV.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, ZV.jsx)(oy.e, {
              tier: bV.tier
            }), " \xb7 ", kV("store:itemCount", {
              count: (0, eY.k)(xV)
            }), "owned" === YV && (0, ZV.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, ZV.jsx)(pV.b, {
                name: "check"
              }), " ", kV("general:owned")]
            })]
          }), (0, ZV.jsx)(Ky, {
            state: YV,
            item: xV,
            price: (0, iV.e)(xV),
            busy: QV,
            onAct: wV,
            onNeedRecipient: vV,
            onLogin: rV
          })]
        })]
      })
    }
    var dy = xV(3454),
      Oy = xV(1646),
      Vp = xV(1565),
      ep = xV(3992);

    function xp() {
      return (0, ZV.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Jp = xV(1435),
      Yp = xV(1656),
      Up = xV(35337);

    function yp(VV) {
      let {
        character: eV,
        drawn: xV,
        onDrawn: YV
      } = VV;
      const yV = (0, JV.useRef)(null),
        pV = (0, Up.f)(eV);
      return (0, ZV.jsx)("div", {
        className: UV()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: xV
        }),
        children: (0, ZV.jsx)(JV.Suspense, {
          fallback: null,
          children: (0, ZV.jsx)(iy.c, {
            ref: yV,
            framing: "store",
            turntableFromYaw: xV ? pV.yaw : null,
            onReady: () => {
              var VV, xV;
              null === (VV = yV.current) || void 0 === VV || VV.setOrbit(pV), null === (xV = yV.current) || void 0 === xV || xV.setAllCosmetics(Yp.c[eV].cosmetics)
            },
            onDrawn: YV
          })
        })
      })
    }
    const pp = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Qp = new Set(["wildSpirits"]);

    function np(VV) {
      var eV;
      let {
        tile: xV,
        design: YV,
        canGoLive: QV,
        live: nV,
        busy: wV,
        highlight: vV,
        onLiveStart: rV,
        onLiveEnd: kV,
        onOpen: bV,
        onAct: EV,
        onNeedRecipient: BV,
        onLogin: jV
      } = VV;
      const {
        t: qV
      } = (0, yV.A)(), {
        pack: tV,
        state: FV
      } = xV, TV = Vy.d[tV], PV = (0, Vy.f)(tV), AV = (0, qy.m)(tV), NV = py.k[AV], XV = Qp.has(AV), {
        tier: MV
      } = TV, zV = "legendary" === MV || "mythic" === MV, GV = (0, JV.useRef)(null);
      (0, Jp.e)(GV, "epic" === MV || zV || XV);
      const [WV, gV] = (0, JV.useState)(!1);
      return !nV && WV && gV(!1), (0, ZV.jsxs)("div", {
        ref: GV,
        className: UV()("StoreCharacterCard", `StoreCharacterCard${YV}`, pp[MV], {
          StoreCharacterCardOwned: "owned" === FV || "recipientOwns" === FV,
          StoreCharacterCardGift: ly(FV),
          StoreCharacterCardItem: void 0 === PV
        }),
        onPointerMove: VV => {
          "mouse" !== VV.pointerType || 0 === VV.movementX && 0 === VV.movementY || !QV || nV || void 0 === PV || rV()
        },
        onPointerLeave: kV,
        children: [(0, ZV.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: NV && (0, ZV.jsx)(NV, {
            simple: !0
          })
        }), zV && (0, ZV.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, ZV.jsxs)(RV.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Oy.d)({
            kind: "pack",
            pack: tV
          }),
          "data-store-item": tV,
          onClick: VV => {
            (0, Vp.e)(VV) && (VV.preventDefault(), bV())
          },
          children: [(0, ZV.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, ZV.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, ZV.jsx)("div", {
              className: UV()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: WV
              }),
              style: {
                backgroundImage: `url(${(0,qy.v)(tV)})`
              }
            }), nV && void 0 !== PV && (0, ZV.jsx)(yp, {
              character: PV,
              drawn: WV,
              onDrawn: () => {
                gV(!0)
              }
            })]
          }), (0, ZV.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (eV = TV.displayName) && void 0 !== eV ? eV : tV
          }), (0, ZV.jsx)(oy.e, {
            tier: MV,
            className: "StoreCharacterTier"
          })]
        }), (0, ZV.jsx)("div", {
          className: "StoreCharacterScrim"
        }), XV && (0, ZV.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, ZV.jsx)(xp, {})
        }), (0, ZV.jsx)(cy.d, {
          pack: tV,
          iconOnly: !0,
          className: UV()({
            PackAnimatedBadgeBelowOwned: "owned" === FV
          })
        }), "owned" === FV && (0, ZV.jsx)("span", {
          className: "StoreCharacterOwned",
          title: qV("general:owned"),
          "aria-label": qV("general:owned"),
          children: (0, ZV.jsx)(pV.b, {
            name: "check"
          })
        }), (0, ZV.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, ZV.jsx)(Ky, {
            state: FV,
            item: tV,
            price: (0, iV.e)(tV),
            busy: wV,
            highlight: vV,
            onAct: EV,
            onNeedRecipient: BV,
            onLogin: jV
          })
        })]
      })
    }

    function wp(VV) {
      let {
        tiles: eV,
        busy: xV,
        highlightItem: YV,
        onOpen: UV,
        onAct: yV,
        onNeedRecipient: pV,
        onLogin: QV
      } = VV;
      const nV = (0, ep.o)("storeCharacterCardFoil"),
        wV = (0, ep.o)("storeCharacterCardSpotlight"),
        vV = nV ? "Foil" : wV ? "Spotlight" : "Showcase",
        [rV] = (0, JV.useState)(By.l),
        [kV, bV] = (0, JV.useState)(null);
      return (0, ZV.jsx)("div", {
        className: "StoreCharacterGrid",
        children: eV.map((VV => (0, ZV.jsx)(np, {
          tile: VV,
          design: vV,
          canGoLive: !rV,
          live: kV === VV.pack,
          busy: xV,
          highlight: YV === VV.pack,
          onLiveStart: () => {
            bV(VV.pack)
          },
          onLiveEnd: () => {
            bV((eV => eV === VV.pack ? null : eV))
          },
          onOpen: () => {
            UV(VV.pack)
          },
          onAct: () => {
            yV(VV.pack)
          },
          onNeedRecipient: pV,
          onLogin: () => {
            QV(VV.pack)
          }
        }, VV.pack)))
      })
    }
    var Zp = xV(35346);

    function vp(VV) {
      let {
        title: eV
      } = VV;
      return (0, ZV.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, ZV.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: eV
        })
      })
    }

    function rp(VV) {
      let {
        mountAtOnce: eV,
        children: xV
      } = VV;
      const YV = (0, JV.useRef)(null),
        [UV, yV] = (0, JV.useState)(eV),
        pV = (0, Zp.e)();
      return (0, JV.useLayoutEffect)((() => {
        const VV = YV.current;
        VV && VV.getBoundingClientRect().top < VV.parentElement.getBoundingClientRect().bottom && yV(!0)
      }), []), UV || pV ? (0, ZV.jsx)(ZV.Fragment, {
        children: xV
      }) : (0, ZV.jsx)("div", {
        ref: YV
      })
    }

    function kp(VV) {
      let {
        layout: eV,
        mountAtOnce: xV,
        bundleGift: JV,
        superRankTotalDays: YV,
        busy: UV,
        highlightItem: pV,
        onOpen: QV,
        onAct: nV,
        onNeedRecipient: wV,
        onLogin: vV,
        dailyDropTile: rV,
        dealBanner: kV
      } = VV;
      const {
        t: bV
      } = (0, yV.A)(), EV = eV.packs.filter((VV => void 0 === (0, Vy.f)(VV.pack) && !(0, Vy.k)(VV.pack))), BV = eV.packs.filter((VV => void 0 !== (0, Vy.f)(VV.pack))), jV = eV.packs.filter((VV => (0, Vy.k)(VV.pack)));
      return (0, ZV.jsxs)(ZV.Fragment, {
        children: [(0, ZV.jsx)(dy.d, {
          className: "StoreSuperGems",
          gift: JV,
          highlightSku: pV,
          leadingTile: rV,
          afterLeadingTile: kV
        }), (0, ZV.jsx)(vp, {
          title: bV("store:rank")
        }), (0, ZV.jsx)(sy, {
          state: eV.superRank.state,
          urgent: eV.superRank.urgent,
          daysLeft: eV.superRankDaysLeft,
          totalDays: YV,
          recipientHasSuperRank: eV.recipientHasSuperRank,
          busy: UV,
          highlight: "superRank" === pV,
          onOpen: () => {
            QV("superRank")
          },
          onAct: () => {
            nV("superRank")
          },
          onNeedRecipient: wV,
          onLogin: () => {
            vV("superRank")
          }
        }), (0, ZV.jsxs)(rp, {
          mountAtOnce: xV,
          children: [(0, ZV.jsx)(vp, {
            title: bV("store:bundles")
          }), (0, ZV.jsx)("div", {
            className: "StorePackGrid",
            children: EV.map((VV => (0, ZV.jsx)(Iy, {
              pack: VV.pack,
              state: VV.state,
              busy: UV,
              onOpen: () => {
                QV(VV.pack)
              },
              onAct: () => {
                nV(VV.pack)
              },
              onNeedRecipient: wV,
              onLogin: () => {
                vV(VV.pack)
              }
            }, VV.pack)))
          }), (0, ZV.jsxs)(rp, {
            mountAtOnce: xV,
            children: [(0, ZV.jsx)(vp, {
              title: bV("store:characters")
            }), (0, ZV.jsx)(wp, {
              tiles: BV,
              busy: UV,
              highlightItem: pV,
              onOpen: QV,
              onAct: nV,
              onNeedRecipient: wV,
              onLogin: vV
            }), jV.length > 0 && (0, ZV.jsxs)(ZV.Fragment, {
              children: [(0, ZV.jsx)(vp, {
                title: bV("store:premiumItems")
              }), (0, ZV.jsx)(wp, {
                tiles: jV,
                busy: UV,
                highlightItem: pV,
                onOpen: QV,
                onAct: nV,
                onNeedRecipient: wV,
                onLogin: vV
              })]
            })]
          })]
        })]
      })
    }

    function bp(VV) {
      let {
        state: eV,
        mode: xV,
        giftName: JV,
        busy: YV,
        highlight: UV,
        purchaseError: pV,
        onBack: QV,
        onChooseRecipient: wV,
        onAct: vV,
        onLogin: rV
      } = VV;
      const {
        t: kV
      } = (0, yV.A)(), bV = IV("gift" !== xV);
      return (0, ZV.jsx)(Dy, {
        onBack: QV,
        recipient: "gift" === xV && (0, ZV.jsxs)(ZV.Fragment, {
          children: [JV && (0, ZV.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: kV("store:giftFor", {
              name: JV
            }),
            children: [ny.b, " ", kV("store:giftFor", {
              name: JV
            })]
          }), !JV && (0, ZV.jsxs)("div", {
            ...(0, nV.V)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: wV,
            children: [ny.b, " ", kV("store:chooseRecipient")]
          })]
        }),
        cta: (0, ZV.jsx)(Ky, {
          state: eV,
          item: "superRank",
          price: iV.k.price,
          busy: YV,
          highlight: UV,
          onAct: vV,
          onNeedRecipient: wV,
          onLogin: rV
        }),
        afterCta: (0, ZV.jsxs)(ZV.Fragment, {
          children: [bV && (0, ZV.jsx)("span", {
            className: "StoreTileNote",
            children: bV.text
          }), (null === bV || void 0 === bV ? void 0 : bV.manageUrl) && (0, ZV.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: bV.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: kV("payments:manageSubscription")
          }), pV && (0, ZV.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: kV(pV)
          })]
        })
      })
    }
    var Ep = xV(146);
    const Bp = Ep.n("kind", [Ep.L({
      kind: Ep.u("refused"),
      heldTierId: Ep.ib(),
      until: Ep.I()
    }), Ep.L({
      kind: Ep.u("refund"),
      tierId: Ep.ib(),
      refundedMs: Ep.I(),
      forfeitedMs: Ep.I(),
      premiumCurrency: Ep.I()
    }), Ep.L({
      kind: Ep.u("none")
    })]);
    async function jp(VV) {
      const eV = await (0, zV.postJsonWithMetricsCookiesAndJsonResponse)(`${je.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: VV
      }, {
        retries: 1
      });
      return Bp.parse(eV)
    }
    var qp = xV(3412),
      tp = xV(3461);

    function Fp(VV, eV) {
      const xV = Math.max(1, Math.round(eV / oV.e));
      return [1 === xV ? `${VV}OneDay` : VV, {
        days: xV.toLocaleString()
      }]
    }

    function Tp(VV) {
      let {
        price: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)();
      return (0, ZV.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, ZV.jsx)(Hy, {}), (0, ZV.jsx)("div", {
          className: "SmallTextLight",
          children: xV("payments:subscriptionRenewsMonthly", {
            price: eV
          })
        }), (0, ZV.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, ZV.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: xV("homePage:termsOfService")
          }), (0, ZV.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: xV("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function Pp() {
      const VV = (0, hV.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && VV && (0, hV.subscriptionsSold)() ? (0, ZV.jsx)(Ap, {}) : null
    }

    function Ap() {
      const {
        t: VV
      } = (0, yV.A)(), {
        userContext: eV
      } = (0, kV.d)(), {
        purchaseUnderWay: xV,
        notice: YV,
        subscribe: UV
      } = (0, qp.d)(), [pV, QV] = (0, JV.useState)(null), [wV, vV] = (0, JV.useState)(0), [rV, bV] = (0, JV.useState)(!1), EV = (0, JV.useRef)(!0), jV = eV !== zV.NULL_USER_CONTEXT, qV = null !== pV && pV.loadedFor === eV ? pV.offer : null, tV = null === YV || void 0 === YV ? void 0 : YV.pendingIntentId, FV = (0, JV.useRef)(tV);

      function TV() {
        vV((VV => VV + 1))
      }
      async function PV(VV) {
        bV(!1), await UV(VV), EV.current && TV()
      }
      if ((0, JV.useEffect)((() => (EV.current = !0, () => {
          EV.current = !1
        })), []), (0, JV.useEffect)((() => {
          void 0 !== FV.current && void 0 === tV && TV(), FV.current = tV
        }), [tV]), (0, JV.useEffect)((() => {
          if (!jV) return;
          let VV = !1;
          return bV(!1), async function() {
            const {
              offering: VV
            } = await (0, sV.getBillingClient)().getOfferings("superRankPage"), eV = null === VV || void 0 === VV ? void 0 : VV.packages.find(ey.isPricedPackage);
            return void 0 === eV ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: eV,
              preview: await jp(eV.productId)
            }
          }().catch((VV => (console.error("Billing: loading the Super Rank subscription or its preview failed:", VV), {
            kind: "loadFailed"
          }))).then((xV => {
            VV || QV((VV => "loadFailed" === xV.kind && (null === VV || void 0 === VV ? void 0 : VV.loadedFor) === eV ? VV : {
              loadedFor: eV,
              offer: xV
            }))
          })), () => {
            VV = !0
          }
        }), [eV, jV, wV]), null === qV) return null;
      if ("loaded" !== qV.kind) return (0, ZV.jsx)(tp.i, {
        notice: {
          kind: "error",
          key: "unavailable" === qV.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: AV,
        preview: NV
      } = qV;
      if ("refused" === NV.kind) return (0, ZV.jsx)(tp.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(NV.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const XV = (0, dy.e)(AV),
        MV = (0, BV.isMobileApp)() && (0, ZV.jsx)(Tp, {
          price: XV
        });
      if (rV && "refund" === NV.kind) {
        const {
          refundedMs: eV,
          forfeitedMs: JV,
          premiumCurrency: YV
        } = NV, UV = JV + (0 === YV ? eV : 0), [yV, pV] = Fp("payments:subscribeRefundsGemRank", eV), [QV, wV] = Fp("payments:subscribeForfeitsGemRank", UV);
        return (0, ZV.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, ZV.jsx)("div", {
            children: VV("payments:subscribeEndsGemRank")
          }), YV > 0 && (0, ZV.jsx)("div", {
            children: VV(yV, {
              ...pV,
              amount: YV.toLocaleString()
            })
          }), UV > 0 && (0, ZV.jsx)("div", {
            children: VV(QV, wV)
          }), (0, ZV.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, ZV.jsx)(nV.j, {
              onClick: () => {
                bV(!1)
              },
              children: VV("general:cancel")
            }), (0, ZV.jsx)(nV.m, {
              onClick: () => {
                PV(AV)
              },
              loading: xV,
              children: VV("payments:subscribeContinue", {
                price: XV
              })
            })]
          }), MV]
        })
      }
      return (0, ZV.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, ZV.jsx)(tp.i, {
          notice: YV,
          className: "SmallTextBold"
        }), (0, ZV.jsx)(tp.d, {
          className: "SmallTextBold"
        }), (0, ZV.jsx)(nV.m, {
          onClick: () => {
            "refund" === NV.kind ? bV(!0) : PV(AV)
          },
          disabled: void 0 !== tV,
          loading: xV,
          children: VV("payments:subscribeToSuperRank", {
            price: XV
          })
        }), MV]
      })
    }
    var Np = xV(2830);

    function Xp(VV) {
      let {
        state: eV,
        view: xV,
        claiming: YV,
        onOpen: pV
      } = VV;
      const {
        t: wV
      } = (0, yV.A)(), vV = (0, JV.useRef)(null), rV = "ready" === xV.kind;
      return (0, Jp.e)(vV, rV), (0, ZV.jsxs)("div", {
        ref: vV,
        className: UV()("DailyDropTile", {
          DailyDropTileReady: rV
        }),
        children: [rV && (0, ZV.jsx)(QV.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, ZV.jsx)("div", {
          className: "DailyDropTileTitle",
          children: wV("dailyDrop:name")
        }), (0, ZV.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, ZV.jsx)(Np.b, {
            className: "DailyDropTileBlock"
          }), (0, ZV.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: wV("dailyDrop:collected", {
              count: eV.collected.length,
              total: eV.total
            })
          })]
        }), "ready" === xV.kind && (0, ZV.jsx)(nV.m, {
          className: "DailyDropTileOpen",
          onClick: pV,
          loading: YV,
          children: wV("dailyDrop:open")
        }), "waiting" === xV.kind && (0, ZV.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: wV("dailyDrop:nextIn", {
            count: xV.hours
          })
        })]
      })
    }
    var Mp = xV(2385);
    const zp = Math.PI / 180;

    function Gp(VV) {
      return VV / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function Wp(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const JV = (VV / (2 * Math.PI / xV) % xV + xV) % xV;
      let YV = null,
        UV = 1 / 0;
      for (let yV = 0; yV < xV; yV++) {
        if (!eV[yV]) continue;
        const VV = Math.abs(yV - JV),
          pV = Math.min(VV, xV - VV);
        pV < UV && (YV = yV, UV = pV)
      }
      return YV
    }

    function Rp(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const JV = Wp(VV, eV, xV);
      if (null === JV) return VV;
      const YV = Gp(JV, xV) - VV;
      return VV + YV - 2 * Math.PI * Math.round(YV / (2 * Math.PI))
    }
    const gp = 32;

    function Dp(VV) {
      if (0 === VV.width || 0 === VV.height) return !0;
      const eV = document.createElement("canvas");
      eV.width = gp, eV.height = gp;
      const xV = eV.getContext("2d", {
        willReadFrequently: !0
      });
      if (!xV) return !0;
      xV.drawImage(VV, 0, 0, gp, gp);
      const {
        data: JV
      } = xV.getImageData(0, 0, gp, gp);
      for (let YV = 3; YV < JV.length; YV += 4)
        if (JV[YV] > 0) return !1;
      return !0
    }

    function ip(VV) {
      const eV = document.createElement("canvas");
      eV.width = VV.width, eV.height = VV.height;
      const xV = eV.getContext("2d");
      return xV ? (xV.drawImage(VV, 0, 0), eV) : null
    }

    function Cp(VV) {
      let {
        worn: eV,
        YJ: xV,
        UJ: YV,
        prompting: QV,
        className: nV
      } = VV;
      const {
        t: wV
      } = (0, yV.A)(), vV = (0, JV.useRef)(null), [rV, kV] = (0, JV.useState)(null), [bV, EV] = (0, JV.useState)(!1), BV = (0, JV.useRef)([]), jV = (0, JV.useRef)(null), qV = (0, JV.useRef)(0), tV = (0, JV.useRef)(null), FV = (0, JV.useRef)(!0), PV = (0, JV.useCallback)((() => {
        const VV = jV.current,
          eV = BV.current,
          xV = Wp(qV.current, eV),
          JV = null === xV ? null : eV[xV],
          YV = null === VV || void 0 === VV ? void 0 : VV.getContext("2d");
        VV && JV && YV && (VV.width === JV.width && VV.height === JV.height || (VV.width = JV.width, VV.height = JV.height), YV.clearRect(0, 0, VV.width, VV.height), YV.drawImage(JV, 0, 0))
      }), []);
      async function AV(VV, eV) {
        const xV = performance.now();
        let JV = 0;
        for (const YV of function() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const eV = [],
              xV = new Set;
            for (let JV = VV / 2; JV >= 1 && Number.isInteger(JV); JV /= 2)
              for (let YV = 0; YV < VV; YV += JV) xV.has(YV) || (xV.add(YV), eV.push(YV));
            for (let JV = 0; JV < VV; JV++) xV.has(JV) || eV.push(JV);
            return eV
          }()) {
          if (vV.current !== VV) break;
          if (0 !== YV && (VV.turnCamera(Gp(YV)), await new Promise((VV => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  VV()
                }))
              }))
            })), vV.current !== VV)) break;
          const xV = Dp(eV) ? null : ip(eV);
          if (null !== xV) BV.current[YV] = xV, JV++, 0 === YV && kV("stills");
          else if (0 === YV) break
        }
        JV > 0 && console.info(`Lucky Skin Block's Before: ${JV} stills in ${Math.round(performance.now()-xV)} ms`)
      }

      function NV(VV) {
        var eV, xV;
        (null === (eV = tV.current) || void 0 === eV ? void 0 : eV.pointerId) === VV.pointerId && (tV.current = null, FV.current || (qV.current = Rp(qV.current, BV.current), PV(), null === (xV = vV.current) || void 0 === xV || xV.turnCamera(qV.current)))
      }(0, JV.useEffect)((() => {
        "stills" === rV && PV()
      }), [rV, PV]), (0, JV.useEffect)((() => () => {
        for (const VV of BV.current) VV && (VV.width = 0, VV.height = 0);
        BV.current = []
      }), []);
      const XV = QV ? {
        onPointerDown: VV => {
          null === tV.current && (VV.currentTarget.setPointerCapture(VV.pointerId), tV.current = {
            pointerId: VV.pointerId,
            startX: VV.clientX,
            startTurn: qV.current
          })
        },
        onPointerMove: VV => {
          const eV = tV.current;
          var xV;
          null !== eV && eV.pointerId === VV.pointerId && (qV.current = eV.startTurn - (VV.clientX - eV.startX) * zp, PV(), FV.current || null === (xV = vV.current) || void 0 === xV || xV.turnCamera(qV.current))
        },
        onPointerUp: NV,
        onPointerCancel: NV
      } : {};
      return (0, ZV.jsxs)("div", {
        className: UV()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: QV
        }, nV),
        children: [(0, ZV.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, ZV.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...XV,
            children: ["stills" === rV && (0, ZV.jsx)("canvas", {
              ref: jV,
              className: "DailyDropRevealBeforeStill"
            }), "head" === rV && (0, ZV.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, ZV.jsx)(Fy.e, {
                cosmetics: eV
              })
            }), null === rV && (0, ZV.jsx)(TV.d, {})]
          }), (0, ZV.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: wV("dailyDrop:before")
          })]
        }), (0, ZV.jsx)(pV.b, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, ZV.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, ZV.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, ZV.jsx)("div", {
              className: UV()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: bV
              }),
              children: (0, ZV.jsx)(JV.Suspense, {
                fallback: null,
                children: (0, ZV.jsx)(iy.c, {
                  ref: vV,
                  onReady: () => {
                    var VV, xV;
                    null === (VV = vV.current) || void 0 === VV || VV.resetCamera(), null === (xV = vV.current) || void 0 === xV || xV.setAllCosmetics(eV)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var VV;
                        const eV = vV.current;
                        if (!eV) return;
                        const JV = null === (VV = eV.getDevTools()) || void 0 === VV ? void 0 : VV.canvas();
                        try {
                          JV && await AV(eV, JV)
                        } catch (yV) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", yV)
                        } finally {
                          FV.current = !1
                        }
                        if (vV.current !== eV) return;
                        BV.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), kV("head")), null === tV.current && (qV.current = Rp(qV.current, BV.current)), eV.turnCamera(qV.current), PV(), eV.updateCosmetic(xV, YV);
                        const UV = new Promise((VV => {
                          setTimeout(VV, 1e4)
                        }));
                        await Promise.race([eV.ensureReadyForCapture(xV), UV]).catch((VV => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", VV)
                        })), vV.current === eV && EV(!0)
                      }()
                    }))
                  }
                })
              })
            }), !bV && (0, ZV.jsx)(TV.d, {}), (0, ZV.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...XV
            })]
          }), (0, ZV.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: wV("dailyDrop:after")
          })]
        })]
      })
    }
    const ap = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      op = {
        opening: 900,
        shrinking: 700
      };

    function cp(VV) {
      let {
        drop: eV,
        onClose: xV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)(), {
        userContext: QV
      } = (0, kV.d)(), {
        state: wV,
        view: vV
      } = (0, xx.x)(), [rV, bV] = (0, JV.useState)("closed"), [EV] = (0, JV.useState)((() => ({
        ...QV.getPlayerCosmetics()
      }))), [BV] = (0, JV.useState)((() => (0, xx.i)(eV, EV))), [jV, qV] = (0, JV.useState)(!1), [tV, FV] = (0, JV.useState)(!1), [TV] = (0, JV.useState)((() => null === wV ? Promise.resolve(null) : yx(wV))), [PV, NV] = (0, JV.useState)(null), XV = (0, Oe.e)(), {
        gameState: MV
      } = (0, AV.l)(["gameState"]);
      async function zV() {
        const VV = await TV;
        XV.current && (null === VV ? (xV(), async function(VV) {
          let eV = null;
          try {
            const xV = await Ux();
            null === VV || VV.remindersOn || null !== Yx.m.getItem(xV) || (eV = xV)
          } catch (JV) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", JV)
          }
          if (null === eV) return void await (0, Jx.l)("dailyDrop");
          const xV = eV;
          await (0, Jx.l)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              Yx.m.setItem(xV, !0), Qx(null)
            }
          })
        }(wV)) : ((0, Jx.g)(), NV(VV), bV("remind")))
      }

      function GV(VV) {
        null !== PV && function(VV, eV) {
          Yx.m.setItem(VV.askedKey, !0), (0, de.o)(), (0, xx.s)("daily_drop.remind", eV ? "yes" : "no"), eV && Qx(VV.requester)
        }(PV, VV), xV()
      }(0, JV.useEffect)((() => {
        const VV = op[rV];
        if (void 0 === VV) return;
        const eV = setTimeout((() => {
          bV(ap[rV])
        }), VV);
        return () => {
          clearTimeout(eV)
        }
      }), [rV]);
      const WV = YV(`dailyDrop:kind_${BV.YJ}`),
        RV = wV && YV("dailyDrop:collected", {
          count: wV.collected.length,
          total: wV.total
        }),
        gV = "revealed" === rV || "shrinking" === rV,
        DV = "equip" !== rV && "remind" !== rV;
      return (0, ZV.jsx)(QY.e, {
        className: "DailyDropRevealScreen",
        close: "remind" === rV ? () => {
          GV(!1)
        } : xV,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, ZV.jsxs)("div", {
          className: UV()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === rV,
            DailyDropRevealShrinking: "shrinking" === rV,
            DailyDropRevealFiguresShown: "shrinking" === rV || "equip" === rV || "remind" === rV
          }),
          children: [(0, ZV.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, ZV.jsx)(Cp, {
              className: "DailyDropRevealStageFigures",
              worn: EV,
              YJ: BV.YJ,
              UJ: BV.UJ,
              prompting: !DV
            }), ("closed" === rV || "opening" === rV) && (0, ZV.jsx)(Np.b, {
              className: "DailyDropRevealBlock",
              open: "opening" === rV
            }), gV && (0, ZV.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, ZV.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Mp.h)(BV.YJ,BV.UJ).previewTex}.png`,
                alt: WV,
                draggable: !1
              })
            })]
          }), DV && (0, ZV.jsxs)(ZV.Fragment, {
            children: [(0, ZV.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, ZV.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: gV ? WV : YV("dailyDrop:name")
              }), "closed" === rV && (0, ZV.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: YV("dailyDrop:tapToOpen")
              }), "revealed" === rV && (0, ZV.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: YV("dailyDrop:tapToContinue")
              })]
            }), (0, ZV.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": YV("closed" === rV ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                bV(ap[rV])
              }
            })]
          }), "equip" === rV && (0, ZV.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, ZV.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: WV
            }), (0, ZV.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: YV("dailyDrop:equipQuestion")
            }), (0, ZV.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, ZV.jsx)(nV.f, {
                className: "DailyDropRevealButton",
                disabled: jV,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, xx.s)("daily_drop.not_now", eV), zV()
                },
                children: YV("dailyDrop:notNow")
              }), (0, ZV.jsx)(nV.f, {
                className: "DailyDropRevealButton",
                loading: jV,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, xx.s)("daily_drop.equip", eV), qV(!0), FV(!1);
                    try {
                      await (0, xx.e)(QV, BV.YJ, BV.UJ)
                    } catch (VV) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", VV), qV(!1), void FV(!0)
                    }
                    await zV()
                  }()
                },
                children: YV("dailyDrop:equip")
              })]
            }), tV && (0, ZV.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: YV("dailyDrop:equipFailed")
            }), !(0, AV.d)(MV) && (0, ZV.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: jV,
              onClick: () => {
                var VV;
                (0, xx.s)("daily_drop.customise", eV), VV = BV.YJ, tx.h.QZ(JY, VV), AV.b.set({
                  openEverythingMenuName: te.q.CUSTOMISATION
                }), xV()
              },
              children: [YV("dailyDrop:customise"), " ", (0, ZV.jsx)(pV.b, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), RV && (0, ZV.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [RV, "waiting" === (null === vV || void 0 === vV ? void 0 : vV.kind) && ` \xb7 ${YV("dailyDrop:nextInInline",{count:vV.hours})}`]
            })]
          }), "remind" === rV && (0, ZV.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, ZV.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: YV("dailyDrop:remindTitle")
            }), (0, ZV.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: YV("dailyDrop:remindSubtitle")
            }), (0, ZV.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, ZV.jsx)(nV.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  GV(!1)
                },
                children: YV("dailyDrop:remindNo")
              }), (0, ZV.jsx)(nV.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  GV(!0)
                },
                children: YV("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function hp(VV, eV) {
      const {
        t: xV
      } = (0, yV.A)(), YV = function(VV, eV) {
        const {
          state: xV,
          view: YV
        } = (0, xx.x)(), [UV, yV] = (0, JV.useState)(!1), [pV, QV] = (0, JV.useState)(!1), [nV, wV] = (0, JV.useState)(null), ZV = (0, JV.useRef)(null), vV = (0, JV.useRef)(!1), rV = eV && "ready" === (null === YV || void 0 === YV ? void 0 : YV.kind);
        (0, JV.useEffect)((() => {
          VV ? rV && !vV.current && (vV.current = !0, (0, xx.s)("daily_drop.shown", "tile")) : vV.current = !1
        }), [VV, rV]), (0, JV.useEffect)((() => {
          VV || (BV(), QV(!1))
        }), [VV]);
        const kV = VV && null === nV && !(0, xx.r)(YV);
        (0, JV.useEffect)((() => {
          kV && AV.b.set({
            openEverythingMenuName: te.q.CUSTOMISATION
          })
        }), [kV]);
        const bV = (0, JV.useRef)(!1),
          EV = (0, JV.useRef)(VV);

        function BV() {
          null !== ZV.current && (ZV.current = null, wV(null))
        }
        return EV.current = VV, {
          state: xV,
          view: YV,
          claiming: UV,
          claimFailed: pV,
          reveal: nV,
          open: async function() {
            if (!bV.current) {
              bV.current = !0, yV(!0), QV(!1);
              try {
                const {
                  state: VV,
                  drop: eV
                } = await (0, xx.c)();
                if (null === VV || null === eV) return;
                if (!EV.current) return;
                (0, xx.s)("daily_drop.open", eV), ZV.current = {
                  state: VV,
                  drop: eV
                }, wV(ZV.current)
              } catch (VV) {
                console.error("Failed to claim the Lucky Skin Block", VV), EV.current && QV(!0)
              } finally {
                bV.current = !1, yV(!1)
              }
            }
          },
          closeReveal: BV
        }
      }(VV, eV);
      return {
        shown: (0, xx.r)(YV.view) || null !== YV.reveal,
        tile: YV.state && YV.view && (0, ZV.jsx)(Xp, {
          state: YV.state,
          view: YV.view,
          claiming: YV.claiming,
          onOpen: YV.open
        }),
        claimFailed: YV.claimFailed && (0, ZV.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: xV("dailyDrop:claimFailed")
        }),
        reveal: YV.reveal && (0, ZV.jsx)(cp, {
          drop: YV.reveal.drop,
          onClose: YV.closeReveal
        })
      }
    }

    function lp(VV) {
      let {
        show: eV
      } = VV;
      const xV = hp(eV, eV);
      return eV && xV.shown ? (0, ZV.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [xV.claimFailed, xV.tile && (0, ZV.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: xV.tile
        }), xV.reveal]
      }) : null
    }
    var Lp = xV(2847),
      fp = xV(35354),
      mp = xV(35371);

    function Kp(VV) {
      let {
        view: eV,
        highlight: xV,
        scrollSignal: YV,
        onScrolledIntoView: UV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)(), {
        purchaseUnderWay: QV,
        notice: nV,
        needsLogin: wV,
        buyPack: vV
      } = (0, mp.g)("banner");
      (0, Lp.X)(eV.arm, "banner");
      const rV = (0, JV.useRef)(null);
      return (0, JV.useEffect)((() => {
        var VV;
        YV > 0 && (null === (VV = rV.current) || void 0 === VV || VV.scrollIntoView({
          block: "nearest"
        }), UV())
      }), [YV]), (0, ZV.jsxs)("div", {
        ref: rV,
        className: "NewPlayerDealBanner",
        children: [(0, ZV.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, ZV.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: pV("newPlayerDeal:title")
          }), (0, ZV.jsx)(fp.b, {
            endsAt: eV.endsAt
          })]
        }), (0, ZV.jsx)(fp.c, {
          view: eV,
          needsLogin: wV,
          busy: QV,
          highlight: xV,
          onBuy: VV => {
            vV(eV, VV)
          }
        }), (0, ZV.jsx)(tp.i, {
          notice: nV,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    xV(35362);
    var Hp = xV(2849);

    function sp(VV) {
      let {
        wallet: eV,
        close: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)();
      return (0, ZV.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, ZV.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, ZV.jsx)("span", {
            children: JV("newPlayerDeal:giftable")
          }), (0, ZV.jsx)(My.e, {
            amount: (0, Yy.c)(eV)
          }), (0, ZV.jsx)("span", {
            children: JV("newPlayerDeal:ungiftable")
          }), (0, ZV.jsx)(My.e, {
            amount: eV.ungiftable
          })]
        }), (0, ZV.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: JV("newPlayerDeal:ungiftableWhy")
        }), (0, ZV.jsx)(nV.m, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: xV,
          children: JV("general:ok")
        })]
      })
    }

    function Sp(VV) {
      Be.NotificationProvider.showCustomPopup({
        body: eV => (0, ZV.jsx)(sp, {
          wallet: VV,
          close: eV
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const Ip = {
      kind: "board"
    };
    let dp = !1;

    function Op(VV) {
      return "found" === VV.status || "error" === VV.status && "store:giftRecipientLookupFailed" === VV.error ? VV.name : null
    }(0, cV.w)(ey.prefetchBillingOfferings);
    const VQ = (0, JV.memo)((function(VV) {
      var eV;
      let {
        show: YV
      } = VV;
      const {
        t: pV
      } = (0, yV.A)(), {
        userContext: QV
      } = (0, kV.d)(), nV = (0, hV.usePurchasesAllowed)(), wV = QV !== zV.NULL_USER_CONTEXT, vV = ry(QV, YV), [rV, bV] = (0, EV.e)(), {
        page: BV,
        urlMode: jV,
        goTo: qV
      } = (0, ky.f)(), tV = function(VV) {
        return "superRank" === VV.kind ? "superRank" : "pack" === VV.kind ? VV.pack : null
      }(BV), {
        openEverythingMenuName: FV,
        gameState: TV
      } = (0, AV.l)(["openEverythingMenuName", "gameState"]), PV = null !== FV;
      ! function(VV, eV) {
        const [YV] = (0, JV.useState)(By.l), [UV, yV] = (0, JV.useState)(!1);
        YV && eV && !UV && yV(!0);
        const pV = (0, iJ.E)(),
          QV = YV && UV && VV && !pV;
        (0, JV.useEffect)((() => {
          if (!QV) return;
          let VV = null,
            eV = null,
            JV = null;
          const YV = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, sV.getBillingClient)().purchaseUnderWay,
            UV = () => {
              var xV;
              null === (xV = JV) || void 0 === xV || xV(), JV = null, null !== VV && (clearTimeout(VV), VV = null), null !== eV && (clearTimeout(eV), eV = null)
            },
            yV = () => {
              (0, by.k)(!1), (0, by.i)(!1), UV(), VV = setTimeout((() => {
                VV = null, JV = (0, Ey.e)((() => {
                  JV = null, YV() ? yV() : ((0, by.k)(!0), eV = setTimeout((() => {
                    eV = null, JV = (0, Ey.e)((() => {
                      JV = null, YV() ? yV() : (0, by.i)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => xV(5145))).then((VV => {
                    VV.startBackgroundGameSetup()
                  }), (VV => {
                    console.warn("Background game setup: its chunk failed to load", VV)
                  })))
                }))
              }), 2e3)
            };
          for (const xV of jy) window.addEventListener(xV, yV, {
            capture: !0,
            passive: !0
          });
          return yV(), () => {
            for (const VV of jy) window.removeEventListener(VV, yV, {
              capture: !0
            });
            UV(), (0, by.k)(!1), (0, by.i)(!1)
          }
        }), [QV])
      }(YV && PV, "pack" === BV.kind);
      const NV = "landingPage" === TV;
      (0, JV.useEffect)((() => {
        PV && (0, ey.prefetchBillingOfferings)()
      }), [PV]), (0, JV.useEffect)((() => {
        PV && !YV && NV && (0, qy.x)()
      }), [PV, YV, NV]);
      const [XV, MV] = (0, JV.useState)(0), [GV, WV] = (0, JV.useState)(null), [RV, gV] = (0, JV.useState)(null), [DV, CV] = (0, JV.useState)(null), [aV, oV] = (0, JV.useState)(null), [lV, LV] = (0, JV.useState)(0), fV = (0, JV.useRef)(null), mV = (0, JV.useRef)(null), KV = (0, JV.useRef)(null), HV = (0, JV.useRef)(!1), uV = (0, cV.F)(), SV = (0, JV.useRef)(0), IV = (0, JV.useRef)(!1);

      function dV() {
        MV((VV => VV + 1))
      }(0, JV.useEffect)((() => {
        if (!YV) return IV.current = !1, void LV(0);
        if (dp = !0, (0, cV.k)(), uV && uV.seq !== SV.current) {
          var VV;
          SV.current = uV.seq, "loginResume" !== uV.source && (0, cV.B)();
          const eV = (0, cV.e)(uV);
          jV || qV(eV), oV(null !== (VV = uV.highlight) && void 0 !== VV ? VV : null);
          const xV = "newPlayerDeal" === uV.source || "loginResume" === uV.source && void 0 !== uV.highlight && (0, Lp.c)(QV).includes(uV.highlight);
          LV((VV => xV ? VV + 1 : 0)), gV(null), "gift" === uV.mode && uV.giftRecipientName ? vV.choose(uV.giftRecipientName, "prefilled") : vV.clear(), "gift" !== uV.mode || uV.giftRecipientName || dV(), (0, Ye.reportAnalyticsClick)({
            id: "store.open",
            value: uV.source
          })
        } else IV.current || (0, Ye.reportAnalyticsClick)({
          id: "store.open",
          value: "menuTab"
        });
        IV.current = !0
      }), [YV, uV]);
      const OV = (0, Lp.T)(),
        Ve = null !== aV && null === OV && null === (0, Lp.g)((0, Lp.b)(QV)) && (0, Lp.c)(QV).includes(aV);
      (0, JV.useEffect)((() => {
        if (!aV) return;
        const VV = setTimeout((() => {
          oV(null)
        }), Ve ? 15e3 : 4e3);
        return () => {
          clearTimeout(VV)
        }
      }), [aV, Ve]), (0, JV.useLayoutEffect)((() => {
        const VV = fV.current;
        if (!YV || !VV) return mV.current = null, void(KV.current = null);
        var eV;
        if (tV) mV.current = tV, null === (eV = VV.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === eV || eV.focus();
        else if (mV.current) {
          const eV = KV.current;
          null !== eV && (VV.scrollTop = eV);
          const xV = VV.querySelector(`[data-store-item="${mV.current}"]`);
          if (xV) {
            const JV = xV.getBoundingClientRect(),
              YV = VV.getBoundingClientRect();
            xV.focus({
              preventScroll: null !== eV && JV.bottom > YV.top && JV.top < YV.bottom
            })
          }
          mV.current = null
        }
      }), [tV, YV]), (0, JV.useEffect)((() => {
        gV(null)
      }), [vV.query]), (0, JV.useEffect)((() => {
        if (!DV) return;
        const VV = setTimeout((() => {
          CV(null)
        }), 8e3);
        return () => {
          clearTimeout(VV)
        }
      }), [DV]);
      const ee = QV.superRankInfo,
        xe = QV.isLoggedIn() || (0, hV.guestsMayBuy)(),
        Je = QV.getOwnedCosmeticPacks(),
        Ue = (0, ny.l)(vV.query),
        ye = (0, ny.e)({
          mode: Ue,
          loggedIn: wV ? xe : null,
          superRankInfo: ee,
          now: Date.now(),
          ownedPacks: Je,
          packs: Vy.w,
          recipient: vV.recipient
        });
      (0, JV.useEffect)((() => {
        if (!xe || !YV) return;
        const VV = (0, Lp.c)(QV),
          eV = (0, cV.B)((eV => !VV.includes(eV.item))),
          xV = eV && (0, ny.k)(eV, Vy.w);
        eV && xV && ((0, Ye.reportAnalyticsClick)({
          id: "store.login_resume",
          value: eV.item
        }), (0, cV.o)(xV))
      }), [xe, YV]);
      const pe = YV && "gift" === Ue,
        Qe = (0, JV.useRef)(pe);
      Qe.current = pe;
      const ne = "none" !== vV.recipient.status,
        we = (0, JV.useRef)(!1);
      (0, JV.useEffect)((() => {
        pe ? ne && !we.current && (we.current = !0, async function(VV) {
          var eV;
          if ("gift" === (null === (eV = (0, Hp.i)()) || void 0 === eV ? void 0 : eV.show)) return void Sp(Hp.b);
          const xV = await (0, Yy.f)();
          null !== xV && xV.ungiftable > 0 && VV() && Sp(xV)
        }((() => Qe.current))) : we.current = !1
      }), [pe, ne]);
      const Ze = (0, ny.o)({
        superRankDaysLeft: ye.superRankDaysLeft,
        openedThisSession: dp || YV,
        seenNewItems: (0, cV.j)()
      });
      (0, JV.useEffect)((() => {
        (0, cV.x)(Ze)
      }), [Ze]);
      const ve = "self" === Ue,
        re = hp(YV, YV && ve && "board" === BV.kind);
      if (!YV || !nV) return null;
      const ke = bV > rV && rV <= 700,
        be = !ke && bV <= 420,
        Ee = "gift" === Ue ? Op(vV.recipient) : null,
        Be = null !== GV;

      function je(VV) {
        (0, Jy.e)(VV, "gift" === Ue ? vV.query.trim() : null)
      }

      function qe(VV, eV) {
        (0, Ye.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${eV?"gift":"self"}:${VV}`
        }), eV && (vV.recordGift(eV.name, VV), te(eV))
      }

      function te(VV) {
        ! function(VV) {
          try {
            Yx.m.setItem(wy, (0, ny.w)(vy(), VV))
          } catch {}
        }({
          name: VV.name,
          cosmetics: VV.cosmetics
        }), qV(Ip), CV((eV => {
          var xV;
          return {
            name: VV.name,
            seq: (null !== (xV = null === eV || void 0 === eV ? void 0 : eV.seq) && void 0 !== xV ? xV : 0) + 1
          }
        }))
      }
      async function Fe(VV) {
        var eV, xV;
        if (HV.current) return;
        if (!xe) return void je(VV);
        gV(null), oV(null);
        const JV = "gift" === Ue ? {
          name: Op(vV.recipient),
          cosmetics: vV.recipientCosmetics
        } : null;
        if (JV && !JV.name) return void dV();
        const YV = "superRank" === VV ? iV.k.id : (0, iV.d)(VV);
        HV.current = !0;
        const UV = await (0, Qy.e)(YV, null !== (eV = null === JV || void 0 === JV ? void 0 : JV.name) && void 0 !== eV ? eV : null);
        if (HV.current = !1, !UV) return;
        WV(VV);
        const yV = await Yy.j.purchase(YV, null !== (xV = null === JV || void 0 === JV ? void 0 : JV.name) && void 0 !== xV ? xV : null);
        WV(null), yV ? gV(yV) : (qe(VV, JV), JV || (await (0, Uy.flushClientAnalyticsEvents)(), (0, xy.refreshWithoutConfirmation)("superRank" === VV ? "/super-rank-welcome" : `/pack-welcome/${VV}`)))
      }
      const Te = UV()("Store", {
        StoreGift: "gift" === Ue,
        StorePortrait: ke,
        StoreCompact: be
      });
      if ("pack" === BV.kind) {
        const VV = BV.pack,
          eV = ye.packs.find((eV => eV.pack === VV));
        return (0, ZV.jsx)("div", {
          ref: fV,
          className: "CosmeticShopContainer",
          children: (0, ZV.jsx)(py.g, {
            pack: VV,
            onBack: () => {
              qV(Ip)
            },
            onPurchased: eV => {
              qe(VV, eV ? {
                name: eV,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Ue && Ee && eV && (0, ZV.jsxs)(ZV.Fragment, {
              children: [(0, ZV.jsx)(Ky, {
                state: eV.state,
                item: VV,
                price: (Pe = VV, "superRank" === Pe ? iV.k.price : (0, iV.e)(Pe)),
                busy: Be,
                onAct: () => {
                  Fe(VV)
                },
                onNeedRecipient: () => {
                  qV(Ip), dV()
                },
                onLogin: () => {
                  je(VV)
                },
                highlight: aV === VV
              }), RV && (0, ZV.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: pV(RV)
              })]
            }),
            ownedPacks: Je,
            startAsGift: "gift" === Ue,
            initialGiftRecipient: "gift" === Ue ? null !== Ee && void 0 !== Ee ? Ee : vV.query.trim() : "",
            highlightCta: aV === VV
          }, VV)
        })
      }
      var Pe;
      return "superRank" === BV.kind ? (0, ZV.jsx)("div", {
        ref: fV,
        className: UV()(Te, "StoreDetailView"),
        children: (0, ZV.jsx)(bp, {
          state: ye.superRank.state,
          mode: Ue,
          giftName: Ee,
          busy: Be,
          highlight: "superRank" === aV,
          purchaseError: RV,
          onBack: () => {
            qV(Ip)
          },
          onChooseRecipient: () => {
            qV(Ip), dV()
          },
          onAct: () => {
            Fe("superRank")
          },
          onLogin: () => {
            je("superRank")
          }
        })
      }) : (0, ZV.jsxs)("div", {
        ref: fV,
        className: Te,
        onScroll: VV => {
          KV.current = VV.currentTarget.scrollTop
        },
        children: [(0, ZV.jsx)("div", {
          className: "StoreTopRow",
          children: (0, ZV.jsx)(Xy, {
            selfName: wV ? QV.getPlayerName() : "",
            giftRecipient: vV,
            suggestionsVersion: null !== (eV = null === DV || void 0 === DV ? void 0 : DV.seq) && void 0 !== eV ? eV : 0,
            pulseSignal: XV,
            disabled: Be || !wV
          })
        }), DV && (0, ZV.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            CV(null)
          },
          children: [(0, ZV.jsx)(yy.b, {
            showSignal: DV.seq
          }), ny.b, " ", pV("store:giftSent", {
            name: DV.name
          })]
        }, DV.seq), !DV && RV && (0, ZV.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: pV(RV)
        }), ve && re.claimFailed, (0, ZV.jsx)(kp, {
          layout: ye,
          mountAtOnce: null !== mV.current,
          bundleGift: "gift" === Ue ? {
            recipientName: Ee,
            lookingUp: "pending" === vV.recipient.status,
            busy: Be,
            onNeedRecipient: dV,
            onSent: VV => {
              (0, Ye.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), te({
                name: VV,
                cosmetics: vV.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, ny.s)(ee),
          busy: Be,
          highlightItem: aV,
          onOpen: function(VV) {
            (0, Ye.reportAnalyticsClick)({
              id: "store.item_open",
              value: VV
            }), qV((0, cV.f)(VV))
          },
          onAct: Fe,
          onNeedRecipient: dV,
          onLogin: je,
          dailyDropTile: ve && re.tile,
          dealBanner: "self" === Ue && null !== OV && (0, ZV.jsx)(Kp, {
            view: OV,
            highlight: aV,
            scrollSignal: lV,
            onScrolledIntoView: () => {
              LV(0)
            }
          })
        }), "gift" !== Ue && (0, ZV.jsx)(Pp, {}), re.reveal]
      })
    }));
    var eQ = xV(2968),
      xQ = xV(9445),
      JQ = xV(9284),
      YQ = xV(3073),
      UQ = xV(2887),
      yQ = xV(2931),
      pQ = xV(2942),
      QQ = xV(2945),
      nQ = xV(3013),
      wQ = xV(2997),
      ZQ = xV(2510),
      vQ = xV(2573),
      rQ = xV(2530),
      kQ = xV(2171),
      bQ = xV(2948),
      EQ = xV(2582);

    function BQ(VV) {
      let {
        show: eV
      } = VV;
      return eV ? (0, ZV.jsx)(jQ, {}) : null
    }

    function jQ() {
      const {
        t: VV
      } = (0, yV.A)(), {
        followsLeader: eV
      } = (0, UQ.f)(), {
        loading: xV,
        friends: YV,
        requests: QV,
        invites: wV
      } = (0, fV.m)(), {
        userContext: vV
      } = (0, kV.d)(), [rV, bV] = (0, JV.useState)(EQ.l);
      (0, JV.useEffect)((() => {
        (0, EQ.d)()
      }), []);
      const EV = QV.map((VV => VV.name)),
        {
          state: BV,
          recentRequesters: jV
        } = (0, wQ.k)(),
        qV = new Map([...("loaded" === BV.status ? BV.recentPlayers : []).map((VV => [VV.preview.name, VV])), ...jV.map((VV => [VV.name, VV]))]),
        tV = (0, JV.useRef)(null),
        [PV, AV] = (0, JV.useState)(""),
        [NV, XV] = (0, JV.useState)("Enter"),
        [MV, zV] = (0, JV.useState)(null);

      function GV() {
        PV && (XV("Loading"), (0, rQ.d)(PV, "social_menu").then((VV => {
          if (tV.current) switch (VV.kind) {
            case "sent":
              XV("Success");
              break;
            case "becameFriends":
              XV("BecameFriends");
              break;
            case "failed":
              zV(VV.message), XV("Error")
          }
        })))
      }
      return (0, JV.useEffect)((() => {
        if ("Enter" === NV || "Loading" === NV) return;
        const VV = setTimeout((() => {
          tV.current.value = "", AV(""), XV("Enter")
        }), "Success" === NV ? 1e3 : 4e3);
        return () => {
          clearTimeout(VV)
        }
      }), [NV]), (0, ZV.jsx)("div", {
        className: "SocialMenu",
        children: (0, ZV.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, ZV.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, ZV.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, ZV.jsx)(QQ.b, {
                label: VV("socialBar:addFriend")
              }), (0, ZV.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, ZV.jsxs)("div", {
                  className: UV()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${NV}`]: !0
                  }),
                  children: ["Loading" === NV && (0, ZV.jsx)(TV.d, {}), "Success" === NV && (0, ZV.jsx)(pV.b, {
                    name: "check"
                  }), "BecameFriends" === NV && (0, ZV.jsx)(ZV.Fragment, {
                    children: VV("socialBar:nowFriends", {
                      playerName: PV
                    })
                  }), "Error" === NV && MV && (0, ZV.jsx)(ZV.Fragment, {
                    children: VV(MV.translationKey, MV.params)
                  })]
                }), (0, ZV.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, ZV.jsx)(FV.d, {
                    className: "PlayerSearchInput",
                    placeholderText: VV("socialBar:enterPlayerName"),
                    domRef: tV,
                    onValueChange: VV => {
                      AV((0, gV.o)(VV)), tV.current.value = (0, gV.o)(VV)
                    },
                    onEnter: () => {
                      PV && (0, Ye.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), GV()
                    }
                  }), (0, ZV.jsxs)(nV.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      GV()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, ZV.jsx)(pV.b, {
                      name: "user-plus"
                    }), " ", VV("socialBar:sendRequest")]
                  })]
                })]
              }), (0, ZV.jsx)(bQ.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), wV.length > 0 && (0, ZV.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, ZV.jsx)(QQ.b, {
                label: VV("socialBar:invites"),
                meta: wV.length
              }), wV.map((eV => (0, ZV.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, ZV.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, ZV.jsx)(ZQ.c, {
                    invite: eV
                  })
                }), (0, ZV.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, ZV.jsx)(ZQ.e, {
                    invite: eV
                  })
                }), (0, ZV.jsx)(nV.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, vQ.h)(eV)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${eV.destination.kind}`
                  },
                  children: VV("general:join")
                }), (0, ZV.jsx)(ee.d, {
                  tooltipInner: (0, ZV.jsx)(ZV.Fragment, {
                    children: VV("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, ZV.jsx)(nV.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === rV || void 0 === rV ? void 0 : rV.kind) && rV.inviteId === eV.id,
                    onClick: () => {
                      fV.c.declineInvite(eV.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${eV.destination.kind}`
                    },
                    children: (0, ZV.jsx)(pV.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, eV.id)))]
            }), (0, ZV.jsxs)("div", {
              className: UV()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !xV && 0 === QV.length
              }),
              children: [(0, ZV.jsx)(QQ.b, {
                label: (0, ZV.jsxs)(ZV.Fragment, {
                  children: [(0, ZV.jsx)(pV.b, {
                    name: kQ.e
                  }), " ", VV("socialBar:requests")]
                }),
                meta: (0, ZV.jsxs)(ZV.Fragment, {
                  children: [QV.length, QV.length === xe.n && (0, ZV.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: VV("socialBar:limitReached")
                  })]
                })
              }), xV && (0, ZV.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, ZV.jsx)(TV.d, {})
              }), !xV && 0 === QV.length && (0, ZV.jsx)("div", {
                className: "SocialMenuEmpty",
                children: VV("socialBar:noFriendRequests")
              }), !xV && QV.length > 0 && (0, ZV.jsx)("div", {
                className: "PlayerRows",
                children: (0, ZV.jsx)(YU.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [QV],
                  children: QV.map(((eV, xV) => {
                    const JV = qV.get(eV.name);
                    return (0, ZV.jsxs)(pQ.e, {
                      playerSocialPreview: eV,
                      zIndex: QV.length - xV,
                      padDefaultFocus: (0, EQ.h)(rV, eV.name, xV),
                      status: JV && (0, ZV.jsx)(nQ.d, {
                        gameNameWithVariation: JV.gameNameWithVariation,
                        isPrivateLobby: JV.isPrivateLobby
                      }),
                      children: [(0, ZV.jsx)(ee.d, {
                        tooltipInner: (0, ZV.jsx)(ZV.Fragment, {
                          children: VV("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, ZV.jsx)(nV.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            bV((0, EQ.f)(EV, xV)), (0, rQ.c)(eV.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, ZV.jsx)(pV.b, {
                            name: "check"
                          })
                        })
                      }), (0, ZV.jsx)(ee.d, {
                        tooltipInner: (0, ZV.jsx)(ZV.Fragment, {
                          children: VV("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, ZV.jsx)(nV.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            bV((0, EQ.f)(EV, xV)), (0, rQ.c)(eV.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, ZV.jsx)(pV.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${eV.name}_${eV.isError}`)
                  }))
                })
              })]
            }), (0, ZV.jsx)(nQ.i, {})]
          }), (0, ZV.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, ZV.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, ZV.jsx)(QQ.b, {
                label: VV("socialBar:party")
              }), (0, ZV.jsx)(yQ.c, {})]
            }), (0, ZV.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, ZV.jsx)(QQ.b, {
                label: (0, ZV.jsxs)(ZV.Fragment, {
                  children: [(0, ZV.jsx)(pV.b, {
                    name: kQ.c
                  }), " ", VV("socialBar:friends")]
                }),
                meta: (0, ZV.jsxs)(ZV.Fragment, {
                  children: [YV.length, YV.length >= (0, xe.b)(vV.getPlayerRanks()) && (0, ZV.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: VV("socialBar:limitReached")
                  })]
                })
              }), xV && (0, ZV.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, ZV.jsx)(TV.d, {})
              }), !xV && 0 === YV.length && (0, ZV.jsx)("div", {
                className: "SocialMenuEmpty",
                children: VV("socialBar:noFriends")
              }), !xV && YV.length > 0 && (0, ZV.jsx)("div", {
                className: "PlayerRows",
                children: (0, ZV.jsx)(YU.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [YV],
                  children: YV.map(((VV, xV) => (0, ZV.jsx)(pQ.e, {
                    playerSocialPreview: VV,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: VV => {
                      fV.c.removeFriendFromState(VV)
                    },
                    zIndex: YV.length - xV,
                    children: (0, ZV.jsx)(pQ.d, {
                      friend: VV,
                      followsLeader: eV,
                      analyticsSurface: "social_menu"
                    })
                  }, `${VV.name}_${VV.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var qQ = xV(2792),
      tQ = xV(4032),
      FQ = xV(4684),
      TQ = xV(1952),
      PQ = xV(4026),
      AQ = xV(4035);

    function NQ(VV) {
      let {
        count: eV,
        claiming: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)();
      return 0 === eV ? null : (0, ZV.jsx)(nV.m, {
        className: "SeasonPassClaimAllButton",
        loading: xV,
        onClick: () => {
          tQ.g.claimAll().catch((VV => {
            console.error("Failed to claim all season pass rewards", VV)
          }))
        },
        children: JV("seasonPass:claimAll", {
          count: eV
        })
      })
    }

    function XQ(VV) {
      let {
        view: eV,
        claiming: xV
      } = VV;
      const {
        t: JV
      } = (0, yV.A)(), {
        userContext: YV
      } = (0, kV.d)(), {
        config: UV,
        state: QV,
        tier: nV,
        xpIntoTier: wV,
        xpForNextTier: vV
      } = eV, rV = Date.now(), bV = (0, AQ.i)(eV, rV), EV = nV >= UV.tierCount, BV = bV && !EV && vV > 0, jV = vV > 0 && !EV ? Math.min(100, wV / vV * 100) : 100, qV = QV.xpToday >= UV.maxXpPerDay, tV = null !== eV.xpBoost && eV.xpBoost.endsAtMs > rV && !qV ? eV.xpBoost : null;
      return (0, ZV.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, ZV.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, ZV.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: JV("seasonPass:title", {
              season: QV.seasonNumber
            })
          })
        }), (0, ZV.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, ZV.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, ZV.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: JV("seasonPass:tier"),
              "aria-label": `${JV("seasonPass:tier")} ${nV}`,
              children: nV
            }), (0, ZV.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(jV),
              children: [(0, ZV.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${jV}%`
                }
              }), (0, ZV.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [EV && JV("seasonPass:passComplete"), BV && JV("seasonPass:xpProgress", {
                  xp: wV,
                  xpForNextTier: vV
                })]
              })]
            }), BV && (0, ZV.jsxs)(ZV.Fragment, {
              children: [(0, ZV.jsx)(pV.b, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, ZV.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: nV + 1
              })]
            })]
          }), (0, ZV.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, ZV.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, ZV.jsx)(pV.b, {
                name: "hourglass"
              }), " ", bV ? JV("seasonPass:endsIn", {
                time: (0, PQ.b)((eV.endsAtMs - rV) / 6e4)
              }) : (0, FQ.c)(eV.claimEndsAtMs, JV, rV)]
            }), bV && !EV && (0, ZV.jsx)("span", {
              className: qV ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: qV ? JV("seasonPass:dailyCapReached") : JV("seasonPass:dailyXp", {
                xp: QV.xpToday,
                cap: UV.maxXpPerDay
              })
            }), bV && !EV && tV && (0, ZV.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, ZV.jsx)(pV.b, {
                name: "angles-up"
              }), " ", JV("seasonPass:xpBoostActive", {
                multiplier: tV.multiplier,
                time: (0, PQ.b)(Math.ceil((tV.endsAtMs - rV) / 6e4))
              })]
            }), bV && !EV && !qV && !tV && (0, ZV.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: JV("seasonPass:playToEarn")
            }), YV.type === TQ.d.ANONYMOUS && (0, ZV.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: JV("seasonPass:logInToKeep")
            })]
          })]
        }), (0, ZV.jsx)(NQ, {
          count: eV.claimable.length,
          claiming: xV
        })]
      })
    }
    var MQ = xV(4686),
      zQ = xV(3492),
      GQ = xV(3496);

    function WQ(VV) {
      return null !== (0, FQ.t)(VV) || null !== (0, FQ.m)(VV)
    }
    let RQ = null;

    function gQ() {
      var VV;
      null === (VV = RQ) || void 0 === VV || VV.tearDownNotification()
    }

    function DQ(VV) {
      let {
        reward: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)(), {
        userContext: JV
      } = (0, kV.d)(), YV = (0, FQ.t)(eV);
      return (0, ZV.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, ZV.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, FQ.h)(eV, xV)
        }), null !== YV && (0, ZV.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, ZV.jsx)(zQ.b, {
            profileEffect: YV,
            name: JV.getPlayerName(),
            cosmetics: JV.getPlayerCosmetics()
          })
        }), null === YV && (0, ZV.jsx)(iQ, {
          reward: eV
        })]
      })
    }

    function iQ(VV) {
      let {
        reward: eV
      } = VV;
      const {
        userContext: xV
      } = (0, kV.d)(), YV = (0, JV.useRef)(null), {
        previewEmote: UV,
        playEmote: yV
      } = (0, GQ.d)(), pV = (0, JV.useMemo)((() => (0, FQ.m)(eV)), [eV]), QV = pV.emote;
      return (0, ZV.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, ZV.jsx)(JV.Suspense, {
          fallback: (0, ZV.jsx)(TV.d, {}),
          children: (0, ZV.jsx)(iy.c, {
            ref: YV,
            framing: "store",
            forcedCosmetics: pV.cosmetics,
            Py: UV.id,
            emotePlaySeq: UV.seq,
            onReady: () => {
              var VV, eV;
              null === (VV = YV.current) || void 0 === VV || VV.resetCamera(), null === (eV = YV.current) || void 0 === eV || eV.setAllCosmetics(xV.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== QV && yV(QV)
            }
          })
        })
      })
    }

    function CQ(VV) {
      let {
        waitingCount: eV
      } = VV;
      const {
        t: xV
      } = (0, yV.A)();
      return (0, hV.usePurchasesAllowed)() ? (0, ZV.jsxs)("div", {
        className: "SeasonPassSuperUpsell",
        children: [eV > 0 && (0, ZV.jsx)("span", {
          className: "SeasonPassSuperUpsellText",
          children: 1 === eV ? xV("seasonPass:superRewardWaiting") : xV("seasonPass:superRewardsWaiting", {
            count: eV
          })
        }), (0, ZV.jsxs)("span", {
          className: "SeasonPassSuperUpsellButtonWrapper",
          children: [(0, ZV.jsxs)(nV.m, {
            className: "SeasonPassSuperUpsellButton",
            onClick: () => {
              (0, cV.o)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, ZV.jsx)(pV.b, {
              name: "bolt"
            }), " ", xV("homePage:getSuperRank")]
          }), eV > 0 && (0, ZV.jsx)("span", {
            className: "SeasonPassSuperUpsellCount",
            children: eV
          })]
        })]
      }) : null
    }
    var aQ = xV(35378);

    function oQ(VV) {
      var eV, xV;
      let {
        view: YV,
        claimingKeys: UV,
        superWaitingCount: QV,
        onClaim: nV
      } = VV;
      const {
        t: wV
      } = (0, yV.A)(), vV = (0, JV.useRef)(null), {
        config: rV,
        tier: kV,
        xpIntoTier: bV,
        xpForNextTier: EV,
        state: BV
      } = YV, jV = (0, AQ.i)(YV), qV = (0, JV.useRef)(!1), tV = null !== (eV = null === (xV = YV.claimable[0]) || void 0 === xV ? void 0 : xV.tier) && void 0 !== eV ? eV : Math.min(kV + 1, rV.tierCount);
      (0, JV.useLayoutEffect)((() => {
        if (qV.current) return;
        const VV = vV.current,
          eV = VV.querySelector(`[data-tier="${tV}"]`).getBoundingClientRect(),
          xV = VV.getBoundingClientRect();
        VV.scrollLeft += eV.left - xV.left - .3 * VV.clientWidth, VV.scrollTop += eV.top - xV.top - .3 * VV.clientHeight
      }), [tV]), (0, JV.useEffect)((() => {
        const VV = vV.current;

        function eV(eV) {
          qV.current = !0, Math.abs(eV.deltaY) <= Math.abs(eV.deltaX) || VV.scrollWidth <= VV.clientWidth || (eV.preventDefault(), VV.scrollLeft += eV.deltaY)
        }
        return VV.addEventListener("wheel", eV, {
          passive: !1
        }), () => {
          VV.removeEventListener("wheel", eV)
        }
      }), []);
      const FV = EV > 0 ? bV / EV : 1;
      return (0, ZV.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, ZV.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, ZV.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelSuper",
            children: [(0, ZV.jsxs)("span", {
              className: "SeasonPassTrackLabelName",
              children: [(0, ZV.jsx)(pV.b, {
                name: "bolt"
              }), wV("seasonPass:superTrack")]
            }), !BV.hasSuperRank && (0, ZV.jsx)(CQ, {
              waitingCount: QV
            })]
          }), (0, ZV.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, ZV.jsx)("span", {
              className: "SeasonPassTrackLabelName",
              children: wV("seasonPass:freeTrack")
            }), (0, ZV.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: wV("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, ZV.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: vV,
          onPointerDown: () => {
            qV.current = !0
          },
          children: (0, ZV.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: rV.tiers.map((VV => {
              const eV = VV.tier,
                xV = function(VV, eV, xV) {
                  if (VV <= eV) return "reached";
                  return xV && VV === eV + 1 ? "earning" : "locked"
                }(eV, kV, jV),
                JV = "earning" === xV;
              return (0, ZV.jsx)(cQ, {
                tierRewards: VV,
                nodeState: xV,
                progress: JV ? FV : 0,
                freeState: YV.tileState({
                  tier: eV,
                  track: "free"
                }),
                superState: YV.tileState({
                  tier: eV,
                  track: "super"
                }),
                freeClaiming: UV.has((0, AQ.l)({
                  tier: eV,
                  track: "free"
                })),
                superClaiming: UV.has((0, AQ.l)({
                  tier: eV,
                  track: "super"
                })),
                hasSuperRank: BV.hasSuperRank,
                onClaim: nV
              }, eV)
            }))
          })
        })]
      })
    }
    const cQ = (0, JV.memo)((function(VV) {
      let {
        tierRewards: eV,
        nodeState: xV,
        progress: JV,
        freeState: YV,
        superState: yV,
        freeClaiming: pV,
        superClaiming: QV,
        hasSuperRank: nV,
        onClaim: wV
      } = VV;
      const {
        tier: vV
      } = eV;
      return (0, ZV.jsxs)("div", {
        className: UV()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== xV
        }),
        "data-tier": vV,
        children: [(0, ZV.jsx)(hQ, {
          tier: vV,
          track: "super",
          reward: eV.super,
          tileState: yV,
          claiming: QV,
          padlock: !nV && "claimed" !== yV,
          onClaim: wV
        }), (0, ZV.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, ZV.jsx)("span", {
            className: UV()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === xV
            }),
            children: "earning" === xV && (0, ZV.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * JV + "%"
              }
            })
          }), (0, ZV.jsx)("span", {
            className: UV()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === xV
            })
          }), (0, ZV.jsx)(aQ.c, {
            tier: vV,
            state: xV,
            progress: JV
          })]
        }), (0, ZV.jsx)(hQ, {
          tier: vV,
          track: "free",
          reward: eV.free,
          tileState: YV,
          claiming: pV,
          padlock: !1,
          onClaim: wV
        })]
      })
    }));

    function hQ(VV) {
      let {
        tier: eV,
        track: xV,
        reward: JV,
        tileState: YV,
        claiming: UV,
        padlock: yV,
        onClaim: pV
      } = VV;
      return JV ? (0, ZV.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${xV}`,
        children: (0, ZV.jsx)(MQ.f, {
          reward: JV,
          tileState: YV,
          track: xV,
          size: "large",
          onClaim: () => {
            pV({
              tier: eV,
              track: xV
            })
          },
          claiming: UV,
          padlock: yV,
          onPreview: WQ(JV) ? () => {
            ! function(VV) {
              const eV = Be.NotificationProvider.showCustomPopup({
                body: (0, ZV.jsx)(DQ, {
                  reward: VV
                })
              });
              RQ = eV, eV.getResult().finally((() => {
                RQ === eV && (RQ = null)
              }))
            }(JV)
          } : void 0
        })
      }) : (0, ZV.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${xV}`
      })
    }
    var lQ = xV(5123);

    function LQ(VV) {
      let {
        show: eV
      } = VV;
      return eV ? (0, ZV.jsx)(fQ, {}) : null
    }

    function fQ() {
      const {
        t: VV
      } = (0, yV.A)(), eV = (0, tQ.h)();
      return (0, JV.useEffect)((() => gQ), []), (0, ZV.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === eV.status && (0, ZV.jsx)(TV.d, {}), "error" === eV.status && (0, ZV.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, ZV.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: VV("seasonPass:errorLoad")
          }), (0, ZV.jsx)(nV.f, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              tQ.g.retry()
            },
            children: VV("seasonPass:retry")
          })]
        }), "noSeason" === eV.status && (0, ZV.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, ZV.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, FQ.g)(VV)
          })
        }), "loaded" === eV.status && (0, ZV.jsx)(mQ, {
          view: eV.view,
          claimingKeys: eV.claimingKeys
        })]
      })
    }

    function mQ(VV) {
      let {
        view: eV,
        claimingKeys: xV
      } = VV;
      const JV = eV.config.tiers.filter((VV => "needsSuper" === eV.tileState({
          tier: VV.tier,
          track: "super"
        }))).length,
        YV = xV.size > 0;
      return (0, ZV.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, ZV.jsx)(lQ.c, {}), (0, ZV.jsx)(XQ, {
          view: eV,
          claiming: YV
        }), (0, ZV.jsx)(oQ, {
          view: eV,
          claimingKeys: xV,
          superWaitingCount: JV,
          onClaim: KQ
        }), (0, ZV.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, ZV.jsx)(NQ, {
            count: eV.claimable.length,
            claiming: YV
          }), !eV.state.hasSuperRank && (0, ZV.jsx)(CQ, {
            waitingCount: JV
          })]
        })]
      })
    }

    function KQ(VV) {
      tQ.g.claim(VV).catch((VV => {
        console.error("Failed to claim season pass reward", VV)
      }))
    }
    var HQ = xV(2588),
      uQ = xV(5204);
    const sQ = VV => {
        let {
          action: eV,
          padAction: xV
        } = VV;
        const {
          isTouchScreen: JV
        } = (0, AV.l)(["isTouchScreen"]), YV = (0, iJ.E)();
        return JV && !YV ? null : (0, ZV.jsx)(MJ.d, {
          className: "EverythingMenuTabKey",
          noaAction: eV,
          padHidesKey: !0,
          padMenuShortcut: xV
        })
      },
      SQ = (0, JV.memo)((function() {
        const {
          t: VV
        } = (0, yV.A)(), {
          gameState: eV,
          openEverythingMenuName: xV,
          crosshairGameView: YV
        } = (0, AV.l)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: pV
        } = (0, kV.d)(), QV = (0, VY.k)(Date.now()), wV = (0, hV.usePurchasesAllowed)(), vV = (0, cV.G)(), {
          view: rV
        } = (0, xx.x)(), bV = "dot" === vV || null === vV && "ready" === (null === rV || void 0 === rV ? void 0 : rV.kind), EV = (VV, eV) => (0, ZV.jsx)(sQ, {
          action: VV,
          padAction: eV
        }), [jV, qV] = (0, JV.useState)(null), tV = (0, JV.useRef)(null), FV = (0, JV.useRef)(null);
        (0, JV.useEffect)((() => {
          var VV;
          const eV = null === (VV = FV.current) || void 0 === VV ? void 0 : VV.querySelector(".EverythingMenuTabActive");
          null === eV || void 0 === eV || eV.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [xV]);
        const TV = {
            ..."inGame" === eV ? {} : (0, nV.V)({
              focusOnClick: !1
            }),
            ...UY.f
          },
          PV = VV => {
            const eV = (0, yY.e)((eV => {
              (0, nV.S)(eV.currentTarget), AV.b.set({
                openEverythingMenuName: VV
              })
            }), "pointerup");
            return {
              ...TV,
              onPointerDown: VV => {
                TV.onPointerDown(VV), eV.onPointerDown(VV)
              },
              onPointerUp: VV => {
                TV.onPointerUp(VV), eV.onPointerUp(VV)
              },
              onClick: eV.onClick
            }
          },
          NV = null !== xV,
          XV = xV !== te.q.COSMETIC_SHOP && !YV;
        async function zV() {
          await async function() {
            if (!jV) return;
            await jV(), qV(null)
          }(), AV.b.set({
            openEverythingMenuName: null
          })
        }
        const GV = (0, JV.useRef)(null),
          WV = (0, JV.useCallback)((() => null !== GV.current && (0, JQ.g)(GV.current)), []);

        function RV() {
          WV() || zV()
        }(0, JV.useEffect)((() => (0, uU.r)(WV)), [WV]);
        const gV = (0, JV.useMemo)((() => "inGame" === eV ? {
            text: VV("settingsMenu:exitGame"),
            onClick: () => {
              (0, xQ.e)()
            }
          } : (0, MV.isDiscordClient)() ? {
            text: VV("settingsMenu:exitGame"),
            onClick: () => {
              qe.h.discordActivity().then((VV => {
                VV.exit("User exited the game")
              }))
            }
          } : null), [eV, VV]),
          DV = NV && !YV,
          iV = (0, JV.useRef)(null);
        ! function(VV, eV) {
          (0, JV.useEffect)((() => {
            var xV;
            const JV = (0, uQ.f)();
            if (!eV || null === JV || !(0, uQ.c)({
                site: MV.siteUsed,
                isMobileApp: (0, BV.isMobileApp)(),
                isTouchScreen: AV.b.get("isTouchScreen")
              })) return;
            const YV = null === (xV = VV.current) || void 0 === xV ? void 0 : xV.querySelector(".EverythingMenuBackButton");
            return YV ? JV(YV) : void 0
          }), [VV, eV])
        }(iV, DV && !(0, uU.k)(xV) && "inGame" === eV);
        const CV = (0, ZV.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: RV,
          children: (0, ZV.jsx)(nV.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, ZV.jsx)(pY.c, {
          showing: NV,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: xV === te.q.SHOP,
          doGameplayStartStopOnShow: "inGame" === eV,
          children: (0, ZV.jsx)(nY.d, {
            className: "EverythingMenuContainer",
            show: DV,
            children: (0, ZV.jsx)(QY.e, {
              close: RV,
              togglePointerLock: !1,
              children: (0, ZV.jsxs)("div", {
                className: "EverythingMenu",
                ref: iV,
                children: [!(0, uU.k)(xV) && (0, ZV.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, ZV.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [gV && (0, ZV.jsx)(nV.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        gV.onClick()
                      },
                      children: gV.text
                    }), "inGame" === eV && (0, ZV.jsx)(HQ.b, {
                      className: "EverythingMenuStopRecording"
                    }), NV && wV && (0, ZV.jsx)("div", {
                      ...TV,
                      className: "EverythingMenuWallet",
                      title: VV("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, cV.o)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, ZV.jsx)(eQ.h, {})
                    })]
                  }), (0, ZV.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: FV,
                    "data-pad-tabs": "1",
                    children: [(0, ZV.jsxs)("div", {
                      ...PV(te.q.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": xV === te.q.SETTINGS ? "true" : void 0,
                      className: UV()("EverythingMenuTab", {
                        EverythingMenuTabActive: xV === te.q.SETTINGS
                      }),
                      children: [VV("general:settings"), EV("OpenSettings", "pause")]
                    }), (0, ZV.jsxs)("div", {
                      ...PV(te.q.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": xV === te.q.CUSTOMISATION ? "true" : void 0,
                      className: UV()("EverythingMenuTab", {
                        EverythingMenuTabActive: xV === te.q.CUSTOMISATION
                      }),
                      children: [VV("general:player"), EV("OpenCharacterCustomization")]
                    }), BV.featureFlags.useSocialFeatures && (0, ZV.jsxs)("div", {
                      ...PV(te.q.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": xV === te.q.SOCIAL ? "true" : void 0,
                      className: UV()("EverythingMenuTab", {
                        EverythingMenuTabActive: xV === te.q.SOCIAL
                      }),
                      ...(0, Ye.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, xV === te.q.SOCIAL),
                      children: [VV("socialBar:social"), (0, ZV.jsx)(qQ.e, {})]
                    }), QV && (0, ZV.jsx)("div", {
                      ...PV(te.q.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": xV === te.q.SEASON_PASS ? "true" : void 0,
                      className: UV()("EverythingMenuTab", {
                        EverythingMenuTabActive: xV === te.q.SEASON_PASS
                      }),
                      children: VV("seasonPass:title", {
                        season: QV.seasonNumber
                      })
                    }), (0, xx.r)(rV) && (0, ZV.jsxs)("div", {
                      ...PV(te.q.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": xV === te.q.COSMETIC_SHOP ? "true" : void 0,
                      className: UV()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: xV === te.q.COSMETIC_SHOP
                      }),
                      children: [(0, ZV.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: VV("store:title")
                      }), "new" === vV && (0, ZV.jsx)(xp, {}), bV && (0, ZV.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === eV && (0, ZV.jsxs)("div", {
                      ...PV(te.q.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": xV === te.q.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: UV()("EverythingMenuTab", {
                        EverythingMenuTabActive: xV === te.q.LOBBY_LEADERBOARD
                      }),
                      children: [VV("general:lobby"), EV("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, ZV.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: CV
                  })]
                }), (0, uU.k)(xV) && CV, (0, ZV.jsxs)("div", {
                  ref: GV,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === eV ? "0.85" : "1"
                  },
                  children: [(0, ZV.jsx)(dJ, {
                    show: xV === te.q.SETTINGS,
                    setBeforeResumeCallback: qV
                  }), (0, ZV.jsx)(YY, {
                    show: xV === te.q.CUSTOMISATION
                  }), (0, ZV.jsx)(JV.Suspense, {
                    fallback: null,
                    children: (0, ZV.jsx)(oU, {
                      show: xV === te.q.SHOP
                    })
                  }), (0, ZV.jsx)(dU, {
                    show: xV === te.q.LOBBY_LEADERBOARD
                  }), wV && (0, ZV.jsx)(VQ, {
                    show: xV === te.q.COSMETIC_SHOP
                  }), !wV && (0, ZV.jsx)(lp, {
                    show: xV === te.q.COSMETIC_SHOP
                  }), (0, ZV.jsx)(BQ, {
                    show: xV === te.q.SOCIAL
                  }), (0, ZV.jsx)(LQ, {
                    show: xV === te.q.SEASON_PASS
                  })]
                }), !(0, BV.isMobileApp)() && (0, wY.f)(pV.getPlayerRanks()) && (0, ZV.jsx)(nY.d, {
                  ref: tV,
                  className: "EverythingMenuBannerDiv",
                  show: XV,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, ZV.jsx)(YQ.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: tV
                    },
                    showing: NV && XV,
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
  35354: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => kV,
      c: () => EV
    });
    xV(35362);
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1220),
      pV = xV(1551),
      QV = xV(2866),
      nV = xV(1414),
      wV = xV(2404),
      ZV = xV(3454),
      vV = xV(2437),
      rV = xV(1321);

    function kV(VV) {
      let {
        endsAt: eV,
        className: xV
      } = VV;
      return (0, rV.jsxs)("span", {
        className: UV()("NewPlayerDealClock", xV),
        children: [(0, rV.jsx)(nV.b, {
          name: "hourglass"
        }), (0, rV.jsx)(QV.e, {
          toTime: eV
        })]
      })
    }

    function bV(VV) {
      let {
        offered: eV,
        needsLogin: xV,
        busy: JV,
        highlight: YV,
        onBuy: QV
      } = VV;
      const {
        t: nV
      } = (0, yV.A)(), {
        pack: kV
      } = eV, bV = (0, ZV.e)(eV.package);
      return (0, rV.jsxs)("div", {
        className: UV()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: YV
        }),
        children: [(0, rV.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, rV.jsx)("img", {
            src: vV.c[eV.tier],
            alt: "",
            draggable: !1
          }), (0, rV.jsx)("span", {
            className: "NewPlayerDealTag",
            children: nV("newPlayerDeal:tag")
          })]
        }), (0, rV.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, rV.jsx)(wV.e, {
            className: "NewPlayerDealPackAmount",
            amount: kV.gems
          })
        }), (0, rV.jsx)(pV.m, {
          className: "NewPlayerDealBuy",
          loading: JV,
          onClick: QV,
          ariaLabel: nV("newPlayerDeal:buyLabel", {
            amount: kV.gems.toLocaleString(),
            price: bV
          }),
          children: nV(xV ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: bV
          })
        })]
      })
    }

    function EV(VV) {
      let {
        view: eV,
        needsLogin: xV,
        busy: YV,
        highlight: pV,
        onBuy: QV
      } = VV;
      const {
        t: nV
      } = (0, yV.A)();
      return (0, rV.jsxs)("div", {
        className: UV()("NewPlayerDealPacks", eV.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [eV.packs.map(((VV, eV) => (0, rV.jsxs)(JV.Fragment, {
          children: [eV > 0 && (0, rV.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, rV.jsx)("i", {})
          }), (0, rV.jsx)(bV, {
            offered: VV,
            needsLogin: xV,
            busy: YV,
            highlight: pV === VV.pack.packageId,
            onBuy: () => {
              QV(VV)
            }
          })]
        }, VV.pack.packageId))), (0, rV.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, rV.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: nV("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35371: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => NV,
      g: () => MV
    });
    xV(35362);
    var JV = xV(3450),
      YV = xV(1586),
      UV = xV(2430),
      yV = xV(3437),
      pV = xV(3412),
      QV = xV(3446),
      nV = xV(3398),
      wV = xV(1220),
      ZV = xV(1439),
      vV = xV(1168),
      rV = xV(1551),
      kV = xV(1414),
      bV = xV(2404),
      EV = xV(2971),
      BV = xV(2847),
      jV = xV(2849),
      qV = xV(2855),
      tV = xV(1321);
    const FV = new QV.d(nV.getBillingClient, nV.addPurchaseRecordListener);
    let TV = !1;

    function PV(VV, eV) {
      null !== VV && (0, BV.o)(VV) || ((0, YV.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${eV.pack.packageId}`
      }), null !== VV && (0, BV.v)(VV), NV(eV.pack.gems))
    }

    function AV(VV, eV, xV) {
      const YV = (0, BV.b)(eV);
      switch (VV.kind) {
        case "completed":
          PV(YV, xV);
          break;
        case "pending":
          UV = VV.intentId, yV = () => {
            EV.j.refresh(), PV(YV, xV)
          }, TV || (TV = !0, FV.listen()), FV.follow(UV, yV);
          break;
        case "unknownPackage":
          (0, BV.O)(eV, null);
          break;
        case "failed":
          VV.errorKey === JV.d.newPlayerDealUnavailable && (0, BV.O)(eV, null)
      }
      var UV, yV
    }

    function NV(VV) {
      ZV.NotificationProvider.showCustomPopup({
        body: eV => (0, tV.jsx)(XV, {
          gems: VV,
          close: eV
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function XV(VV) {
      let {
        gems: eV,
        close: xV
      } = VV;
      const {
        t: JV
      } = (0, wV.A)();
      return (0, tV.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, tV.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, tV.jsx)(kV.b, {
            name: "circle-check"
          }), (0, tV.jsx)(bV.e, {
            amount: eV
          }), (0, tV.jsx)("span", {
            children: JV("newPlayerDeal:added")
          })]
        }), (0, tV.jsx)(rV.m, {
          className: "NewPlayerDealAddedOk",
          onClick: xV,
          children: JV("general:ok")
        })]
      })
    }

    function MV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV.e;
      const {
        userContext: xV
      } = (0, vV.d)(), {
        purchaseUnderWay: JV,
        notice: YV,
        buy: QV
      } = (0, pV.d)(eV), nV = (0, jV.i)(), wV = xV.mayBuy() || (0, UV.guestsMayBuy)(), ZV = null === nV ? !wV : nV.guest && !xV.isLoggedIn();
      return {
        purchaseUnderWay: JV,
        notice: YV,
        needsLogin: ZV,
        buyPack: function(JV, YV) {
          (0, BV.E)("new_player_deal.buy", (0, qV.c)(JV.arm, VV, YV.pack.packageId)), null === nV ? QV(function(VV) {
            return {
              sku: VV.pack.packageId,
              tier: VV.tier,
              amount: VV.pack.gems,
              bonusPercent: 0,
              package: VV.package
            }
          }(YV), null, {
            followPending: !1
          }).then((VV => {
            AV(VV, xV, YV)
          })) : ZV ? eV(YV.pack.packageId, null) : PV((0, BV.b)(xV), YV)
        }
      }
    }
  },
  5385: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => EV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(5115),
      yV = xV(1220),
      pV = xV(1414),
      QV = xV(1551),
      nV = xV(1603),
      wV = xV(1439),
      ZV = xV(2771),
      vV = xV(1321);
    const rV = {
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

    function kV(VV) {
      let {
        platform: eV
      } = VV;
      const xV = "youtube" === eV;
      return (0, vV.jsxs)("span", {
        className: YV()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: xV
        }),
        children: [xV && (0, vV.jsx)(ZV.b, {
          variant: "white"
        }), !xV && (0, vV.jsx)(pV.b, {
          name: rV[eV].icon,
          kit: "brands"
        })]
      })
    }

    function bV(VV) {
      let {
        platform: eV,
        link: xV,
        editable: JV,
        userContext: YV,
        onLinksUpdated: ZV
      } = VV;
      const {
        t: bV
      } = (0, yV.A)(), EV = rV[eV];
      if (!xV && !JV) return null;

      function BV() {
        var VV;
        if (!YV || !ZV) return;
        wV.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: EV.name
            }
          },
          prefixText: UV.s[eV],
          placeholderText: "playBloxd",
          initialValue: null !== (VV = null === xV || void 0 === xV ? void 0 : xV.handle) && void 0 !== VV ? VV : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: xV ? "general:remove" : void 0
        }).getResult().then((async VV => {
          if ("notificationTornDown" !== VV && null !== VV) try {
            "submit" === VV.type ? await nV.b.setSocialLink(YV, eV, VV.value) : await nV.b.clearSocialLink(YV, eV), ZV()
          } catch (xV) {
            console.error("Failed to update social link", xV), wV.NotificationProvider.showAlertPopup({
              title: xV.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (xV) {
        const VV = `@${xV.handle}`;
        return (0, vV.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: EV.color
          },
          href: xV.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, vV.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, vV.jsx)(kV, {
              platform: eV
            }), (0, vV.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, vV.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: VV
              })
            })]
          }), JV && (0, vV.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, QV.V)({
              stopPropagation: !0
            }),
            onClick: VV => {
              VV.stopPropagation(), VV.preventDefault(), BV()
            },
            children: (0, vV.jsx)(pV.b, {
              name: "pen-to-square"
            })
          }), !JV && (0, vV.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, vV.jsx)(pV.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, vV.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: EV.color
        },
        ...(0, QV.V)(),
        onClick: () => {
          BV()
        },
        children: [(0, vV.jsx)(kV, {
          platform: eV
        }), (0, vV.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, vV.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: EV.name
          }), (0, vV.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: bV("homePage:profileSocialLinkAdd")
          })]
        }), (0, vV.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, vV.jsx)(pV.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function EV(VV) {
      let {
        socialLinks: eV,
        editable: xV = !1,
        userContext: JV,
        onLinksUpdated: YV
      } = VV;
      if (!xV && 0 === eV.length) return null;
      const yV = new Map(eV.map((VV => [VV.platform, VV]))),
        pV = xV ? UV.p : eV.map((VV => VV.platform));
      return (0, vV.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, vV.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: pV.map((VV => (0, vV.jsx)(bV, {
            platform: VV,
            link: yV.get(VV),
            editable: xV,
            userContext: JV,
            onLinksUpdated: YV
          }, VV)))
        })
      })
    }
  },
  35346: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(62),
      YV = xV(3886);

    function UV() {
      const [VV, eV] = (0, JV.useState)(!1);
      return (0, JV.useLayoutEffect)((() => {
        let VV = !0;
        return (0, YV.f)().then((() => {
          VV && eV(!0)
        })), () => {
          VV = !1
        }
      }), []), VV
    }
  },
  35275: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => bV,
      e: () => kV
    });
    xV(35278);
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(35272);

    function pV(VV, eV) {
      return Math.max(1, Math.round(VV * eV))
    }

    function QV(VV, eV) {
      const xV = eV * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        JV = function(VV, eV) {
          if (VV.lines) return pV(VV.lineThickness, eV) % 2;
          if (VV.dot) return pV(VV.dotSize, eV) % 2;
          return nV(VV, eV) % 2
        }(VV, eV),
        YV = wV(VV.lineThickness * xV, JV),
        UV = pV(VV.lineLength, xV),
        yV = Math.round(VV.gap * xV),
        QV = VV.outline > 0 ? pV(VV.outline, xV) : 0,
        vV = [];
      if (VV.lines && (vV.push({
          x: YV + yV,
          y: 0,
          w: UV,
          h: YV,
          arm: "right"
        }), vV.push({
          x: -yV - UV,
          y: 0,
          w: UV,
          h: YV,
          arm: "left"
        }), vV.push({
          x: 0,
          y: YV + yV,
          w: YV,
          h: UV,
          arm: "down"
        }), VV.tStyle || vV.push({
          x: 0,
          y: -yV - UV,
          w: YV,
          h: UV,
          arm: "up"
        }), 0 === yV && vV.push({
          x: 0,
          y: 0,
          w: YV,
          h: YV
        })), VV.dot) {
        const eV = wV(VV.dotSize * xV, JV),
          UV = VV.lines && 0 === yV && VV.dotSize > VV.lineThickness ? Math.max(eV, YV + 2) : eV,
          pV = (YV - UV) / 2;
        vV.push({
          x: pV,
          y: pV,
          w: UV,
          h: UV
        })
      }
      const rV = vV.map((VV => ({
        ...VV,
        x: VV.x - QV,
        y: VV.y - QV,
        w: VV.w + 2 * QV,
        h: VV.h + 2 * QV
      })));
      let kV = null,
        bV = null;
      if (VV.circle) {
        const eV = pV(VV.circleThickness, xV),
          UV = function(VV, eV) {
            return VV + (VV % 2 === eV ? 0 : 1)
          }(nV(VV, xV), JV),
          yV = (YV - UV) / 2;
        kV = ZV(yV, UV, eV), QV > 0 && (bV = ZV(yV - QV, UV + 2 * QV, eV + 2 * QV))
      }
      return {
        cell: YV,
        fills: vV,
        outlines: QV > 0 ? rV : [],
        ring: kV,
        ringOutline: bV
      }
    }

    function nV(VV, eV) {
      return Math.round(VV.circleRadius * eV * 2 + pV(VV.circleThickness, eV))
    }

    function wV(VV, eV) {
      return Math.max(2 - eV, 2 * Math.round((VV - eV) / 2) + eV)
    }

    function ZV(VV, eV, xV) {
      const JV = 2 * xV >= eV - 1;
      return {
        x: VV,
        y: VV,
        size: eV,
        border: Math.min(xV, Math.floor(eV / 2)),
        filled: JV
      }
    }
    var vV = xV(1321);
    const rV = 1.4;

    function kV(VV, eV) {
      return VV && eV ? `scale(${rV})` : "scale(1)"
    }

    function bV(VV) {
      return "classic" === VV.settings.style ? (0, vV.jsx)(jV, {
        ...VV
      }) : (0, vV.jsx)(NV, {
        ...VV
      })
    }
    const EV = .125;

    function BV(VV, eV) {
      const xV = {};
      if (VV.color !== yV.f.color && (xV.color = (0, yV.l)(VV.color)), VV.opacity !== yV.f.opacity && (xV.opacity = VV.opacity / 100), VV.outline !== yV.f.outline || VV.outlineColor !== yV.f.outlineColor) {
        const eV = VV.outline,
          JV = (0, yV.l)(VV.outlineColor);
        xV.textShadow = eV > 0 ? `-${eV}px 0 ${JV}, 0 ${eV}px ${JV}, ${eV}px 0 ${JV}, 0 -${eV}px ${JV}` : "none"
      }
      if (VV.size !== yV.f.size) {
        const JV = VV.size / 100;
        xV.fontSize = eV ? `calc(max(1.3rem, 18px) * ${JV})` : `calc(1.3rem * ${JV})`, xV.marginTop = `-${EV}em`, xV.transformOrigin = `50% calc(50% + ${EV}em)`
      }
      return xV
    }

    function jV(VV) {
      let {
        settings: eV,
        touch: xV,
        inPreview: JV,
        inEditor: UV,
        pressed: yV = !1,
        pressRef: pV
      } = VV;
      return (0, vV.jsx)("div", {
        className: YV()("Crosshair", {
          Touch: xV,
          CrosshairInPreview: JV,
          CrosshairInEditor: UV || JV
        }),
        ref: pV,
        style: {
          transform: kV(yV, eV.growOnClick),
          ...BV(eV, xV)
        },
        children: "+"
      })
    }

    function qV(VV, eV) {
      return VV / eV + "px"
    }

    function tV(VV, eV, xV, JV) {
      return {
        ...PV(VV, eV, xV),
        width: qV(VV.w, xV),
        height: qV(VV.h, xV),
        background: JV
      }
    }

    function FV(VV, eV, xV) {
      return {
        left: qV(VV.x, eV),
        top: qV(VV.y, eV),
        width: qV(VV.size, eV),
        height: qV(VV.size, eV),
        borderWidth: qV(VV.border, eV),
        borderColor: xV,
        background: VV.filled ? xV : void 0
      }
    }
    const TV = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function PV(VV, eV, xV) {
      const [JV, YV] = VV.arm ? TV[VV.arm] : [0, 0], UV = Math.round(eV * xV);
      return {
        left: qV(VV.x + JV * UV, xV),
        top: qV(VV.y + YV * UV, xV)
      }
    }

    function AV(VV) {
      return VV.arm ? {
        "data-arm": VV.arm,
        "data-x": VV.x,
        "data-y": VV.y
      } : {}
    }

    function NV(VV) {
      let {
        settings: eV,
        inPreview: xV,
        inEditor: JV,
        pressed: pV = !1,
        spread: nV,
        spreadRef: wV
      } = VV;
      const ZV = (0, UV.useRef)(null),
        {
          box: kV,
          dpr: bV
        } = function(VV) {
          const [eV, xV] = (0, UV.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, UV.useLayoutEffect)((() => {
            const eV = VV.current;
            if (!eV) return;
            const JV = () => {
              const VV = eV.getBoundingClientRect(),
                JV = window.devicePixelRatio || 1;
              xV((eV => eV.dpr === JV && eV.box.left === VV.left && eV.box.top === VV.top && eV.box.width === VV.width && eV.box.height === VV.height ? eV : {
                box: {
                  left: VV.left,
                  top: VV.top,
                  width: VV.width,
                  height: VV.height
                },
                dpr: JV
              }))
            };
            JV();
            const YV = new ResizeObserver(JV);
            return YV.observe(eV), window.addEventListener("resize", JV), window.addEventListener("scroll", JV, !0), () => {
              YV.disconnect(), window.removeEventListener("resize", JV), window.removeEventListener("scroll", JV, !0)
            }
          }), [VV]), eV
        }(ZV),
        EV = (0, UV.useRef)(bV);
      EV.current = bV;
      const BV = QV(eV, bV, pV && eV.growOnClick ? rV : 1),
        jV = function(VV, eV, xV) {
          const JV = Math.round((VV.left + VV.width / 2) * xV - eV / 2),
            YV = Math.round((VV.top + VV.height / 2) * xV - eV / 2);
          return {
            x: JV / xV - VV.left,
            y: YV / xV - VV.top
          }
        }(kV, BV.cell, bV),
        qV = (0, yV.l)(eV.color),
        TV = (0, yV.l)(eV.outlineColor),
        NV = (0, UV.useRef)(0);
      (0, UV.useLayoutEffect)((() => {
        if (wV) return wV.current = VV => {
          var eV;
          NV.current = VV, null === (eV = ZV.current) || void 0 === eV || eV.querySelectorAll("[data-arm]").forEach((eV => {
            Object.assign(eV.style, PV(function(VV) {
              return {
                x: Number(VV.dataset.x),
                y: Number(VV.dataset.y),
                arm: VV.dataset.arm
              }
            }(eV), VV, EV.current))
          }))
        }, () => {
          wV.current = null
        }
      }), [wV]);
      const XV = null !== nV && void 0 !== nV ? nV : NV.current;
      return (0, vV.jsx)("div", {
        ref: ZV,
        className: YV()("CrosshairShapes", {
          CrosshairInPreview: xV,
          CrosshairInEditor: JV || xV,
          CrosshairSpreads: void 0 !== wV
        }),
        children: (0, vV.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: jV.x,
            top: jV.y,
            opacity: eV.opacity / 100
          },
          children: (0, vV.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [BV.ringOutline && (0, vV.jsx)("div", {
              className: "CrosshairRing",
              style: FV(BV.ringOutline, bV, TV)
            }), BV.outlines.map(((VV, eV) => (0, vV.jsx)("div", {
              className: "CrosshairPart",
              ...AV(VV),
              style: tV(VV, XV, bV, TV)
            }, `o${eV}`))), BV.ring && (0, vV.jsx)("div", {
              className: "CrosshairRing",
              style: FV(BV.ring, bV, qV)
            }), BV.fills.map(((VV, eV) => (0, vV.jsx)("div", {
              className: "CrosshairPart",
              ...AV(VV),
              style: tV(VV, XV, bV, qV)
            }, `f${eV}`)))]
          })
        })
      })
    }
  },
  35285: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      h: () => EV,
      j: () => bV
    });
    var JV = xV(35272);
    const YV = "XH1-",
      UV = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      yV = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      pV = ["color", "outlineColor"],
      QV = 1 + 3 * pV.length + yV.length + 1,
      nV = Math.ceil(8 * QV / Math.log2(62)),
      wV = YV.length + nV;

    function ZV(VV) {
      let eV = 90;
      for (const xV of VV) eV = 31 * eV + xV & 255;
      return eV
    }
    const vV = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      rV = BigInt(vV.length);

    function kV(VV, eV) {
      let xV = 0n;
      for (const YV of VV) {
        const VV = vV.indexOf(YV);
        if (VV < 0) return null;
        xV = xV * rV + BigInt(VV)
      }
      if (xV >> BigInt(8 * eV) !== 0n) return null;
      const JV = [];
      for (let YV = 0; YV < eV; YV++) JV.unshift(Number(0xffn & xV)), xV >>= 8n;
      return JV
    }

    function bV(VV) {
      let eV = "shapes" === VV.style ? 1 : 0;
      UV.forEach(((xV, JV) => {
        VV[xV] && (eV |= 1 << JV + 1)
      }));
      const xV = [eV];
      for (const YV of pV) {
        const eV = (0, JV.i)(YV, VV[YV]);
        xV.push(eV >> 16 & 255, eV >> 8 & 255, 255 & eV)
      }
      for (const YV of yV) {
        const {
          min: eV,
          step: UV
        } = JV.b[YV];
        xV.push(Math.round(((0, JV.i)(YV, VV[YV]) - eV) / UV))
      }
      return xV.push(ZV(xV)), YV + function(VV, eV) {
        let xV = 0n;
        for (const YV of VV) xV = xV << 8n | BigInt(YV);
        let JV = "";
        for (let YV = 0; YV < eV; YV++) JV = vV[Number(xV % rV)] + JV, xV /= rV;
        return JV
      }(xV, nV)
    }

    function EV(VV) {
      for (const eV of VV.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${nV}})`, "gi"))) {
        const VV = BV(kV(eV[1], QV));
        if (VV) return VV
      }
      return null
    }

    function BV(VV) {
      if (!VV || VV.length !== QV || ZV(VV.slice(0, -1)) !== VV[VV.length - 1]) return null;
      const eV = VV[0],
        xV = {
          ...JV.f,
          style: 1 & eV ? "shapes" : "classic"
        };
      UV.forEach(((VV, JV) => {
        xV[VV] = 0 !== (eV & 1 << JV + 1)
      }));
      let YV = 1;
      for (const JV of pV) xV[JV] = VV[YV] << 16 | VV[YV + 1] << 8 | VV[YV + 2], YV += 3;
      for (const UV of yV) {
        const {
          min: eV,
          step: yV
        } = JV.b[UV];
        xV[UV] = (0, JV.i)(UV, eV + VV[YV] * yV), YV++
      }
      return xV
    }
  },
  35272: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      f: () => YV,
      i: () => UV,
      l: () => nV,
      o: () => QV,
      q: () => wV,
      u: () => pV,
      w: () => yV
    });
    const JV = {
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
      YV = Object.freeze({
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

    function UV(VV, eV) {
      var xV;
      const {
        min: UV,
        max: yV,
        step: pV
      } = JV[VV];
      if (!Number.isFinite(eV)) return YV[VV];
      const QV = (null !== (xV = String(pV).split(".")[1]) && void 0 !== xV ? xV : "").length,
        nV = Number((Math.round(eV / pV) * pV).toFixed(QV));
      return Math.min(yV, Math.max(UV, nV))
    }

    function yV(VV, eV, xV) {
      const JV = "number" === typeof xV ? UV(eV, xV) : xV;
      return {
        ...VV,
        [eV]: JV
      }
    }

    function pV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(YV).every((JV => xV.includes(JV) || VV[JV] === eV[JV]))
    }

    function QV(VV) {
      return pV(VV, YV)
    }

    function nV(VV) {
      return `#${VV.toString(16).padStart(6,"0")}`
    }

    function wV(VV) {
      const eV = /^#?([0-9a-f]{6})$/i.exec(VV.trim());
      return eV ? parseInt(eV[1], 16) : null
    }
  },
  35292: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV,
      h: () => vV
    });
    var JV = xV(62),
      YV = xV(40),
      UV = xV(35285),
      yV = xV(35272);
    const pV = "crosshairCode";
    let QV = null;
    const nV = new Set;

    function wV() {
      if (null === QV) {
        var VV;
        const eV = YV.m.getItem(pV);
        QV = null !== (VV = "string" === typeof eV ? (0, UV.h)(eV) : null) && void 0 !== VV ? VV : yV.f
      }
      return QV
    }

    function ZV(VV) {
      QV = VV, (0, yV.o)(VV) ? YV.m.removeItem(pV) : YV.m.setItem(pV, (0, UV.j)(VV));
      for (const eV of nV) eV()
    }

    function vV() {
      const [VV, eV] = (0, JV.useState)(wV);
      return (0, JV.useEffect)((() => {
        const VV = () => {
          eV(wV())
        };
        return VV(), xV = VV, nV.add(xV), () => {
          nV.delete(xV)
        };
        var xV
      }), []), VV
    }
  },
  35268: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      e: () => YV
    });
    var JV = xV(27);

    function YV(VV, eV) {
      return VV && !eV
    }

    function UV() {
      return YV(JV.b.get("isTouchScreen"), JV.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5204: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      f: () => UV,
      j: () => YV
    });
    let JV = null;

    function YV(VV) {
      JV = VV
    }

    function UV() {
      return JV
    }

    function yV(VV) {
      return "bloxd" === VV.site && !VV.isMobileApp && !VV.isTouchScreen
    }
  },
  35238: (VV, eV, xV) => {
    function JV(VV, eV) {
      return VV && !eV
    }
    xV.d(eV, {
      e: () => JV
    })
  },
  35251: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(1353);

    function YV() {
      var VV, eV;
      return null !== (VV = null === (eV = screen.orientation) || void 0 === eV ? void 0 : eV.type) && void 0 !== VV ? VV : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const UV = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && YV() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = YV(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, JV.lb)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const VV of this.resizers) VV()
          }
        }), 1e3)
      }
      heldSizer(VV) {
        let eV = !1;
        return () => {
          if (eV && this.isHeld()) return null;
          const xV = VV();
          return eV ||= null !== xV, xV
        }
      }
      onRelease(VV) {
        return this.resizers.add(VV), () => {
          this.resizers.delete(VV)
        }
      }
    }
  },
  35205: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => jV,
      e: () => nV,
      g: () => bV,
      j: () => kV
    });
    var JV = xV(165),
      YV = xV(1293),
      UV = xV(1230),
      yV = xV(1173),
      pV = xV(1829);
    const QV = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function nV(VV) {
      return QV[VV]
    }

    function wV(VV) {
      return (0, pV.c)(VV) ? "outdated" : VV instanceof JV.b ? 429 === VV.httpCode ? "busy" : "server" : "offline"
    }

    function ZV(VV, eV, xV) {
      return (0, yV.postJsonWithMetricsCookiesAndJsonResponse)(`${UV.clientSideServerUrls.indexUrl}${eV}`, xV, {
        retries: 3
      }, VV.getMetricsCookies()).catch((VV => (console.error("Bad response from the server when trying to change name:", eV, VV), {
        outcome: "failed",
        failure: wV(VV)
      })))
    }

    function vV(VV) {
      return "outcome" in VV && "failed" === VV.outcome
    }

    function rV(VV) {
      return console.error("Error when trying to get with new name from DB", VV), {
        outcome: "refused",
        message: VV
      }
    }
    async function kV(VV) {
      const eV = await ZV(VV, "/index/name/random", {});
      return vV(eV) ? eV : "err" in eV ? rV(eV.err) : (VV.setPlayerName(eV.name), {
        outcome: "changed",
        name: eV.name
      })
    }
    async function bV(VV, eV) {
      const xV = await ZV(VV, "/index/name/update", {
        name: eV
      });
      return vV(xV) ? xV : "err" in xV ? rV(xV.err) : xV.nameExists ? {
        outcome: "taken"
      } : (VV.setPlayerName(eV), {
        outcome: "changed",
        name: eV
      })
    }

    function EV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const JV = 1 === eV ? 1 : 10 ** (eV - 1),
        UV = String(JV + Math.floor(xV() * (10 ** eV - JV)));
      return `${VV.slice(0,YV.f-eV)}${UV}`
    }
    const BV = [1, 2, 3, 4];
    async function jV(VV, eV) {
      const xV = await bV(VV, eV);
      if ("taken" !== xV.outcome) return xV;
      for (const JV of BV) {
        const xV = EV(eV, JV),
          YV = await bV(VV, xV);
        if ("taken" !== YV.outcome) return YV
      }
      return {
        outcome: "taken"
      }
    }
  },
  35240: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => QV
    });
    var JV = xV(27);
    const YV = 24,
      UV = "farNametags",
      yV = 1e5;

    function pV() {
      var VV;
      return null === (VV = JV.b.get("showDistantNametags")) || void 0 === VV || VV
    }

    function QV() {
      var VV;
      return null !== (VV = function() {
        const VV = new URLSearchParams(window.location.search).get(UV),
          eV = null === VV || "" === VV ? NaN : Number(VV);
        return Number.isFinite(eV) && eV >= 0 ? Math.min(eV, yV) : null
      }()) && void 0 !== VV ? VV : pV() ? 0 : YV
    }
  },
  35259: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      f: () => ZV,
      j: () => wV
    });
    var JV = xV(296),
      YV = xV(99),
      UV = xV(134),
      yV = xV(129),
      pV = xV(679);
    const QV = new Set(["mali_bifrost"]);

    function nV() {
      if (pV.f) return;
      const VV = (0, YV.pageOperatingSystem)();
      if ("android" !== VV && "windows" !== VV || (0, pV.e)("webgl_default")) return;
      if ("windows" === VV) return VV => "qualcomm" === (0, YV.normaliseGpuVendor)((0, yV.c)(VV).vendor);
      const eV = (0, UV.o)(),
        xV = null === eV ? (0, JV.p)() : (0, JV.h)(eV.vendor, eV.renderer);
      return null !== xV && QV.has(xV) ? VV => (0, JV.m)((0, yV.c)(VV).vendor, xV) : void 0
    }

    function wV(VV, eV) {
      return VV ? () => !0 : eV()
    }
    async function ZV(VV) {
      try {
        const eV = wV(VV, nV),
          xV = navigator.gpu;
        if (void 0 === eV || void 0 === xV) return !1;
        const JV = await (0, yV.l)(xV, {
          seed: !1,
          compatibility: eV
        });
        return "string" !== typeof JV && JV.compatibility && !(0, yV.j)(JV.adapter)
      } catch (eV) {
        return console.error("WebGPU compatibility-mode adapter request failed.", eV), !1
      }
    }
  },
  35325: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      d: () => yV
    });
    const JV = [{
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

    function YV(VV) {
      let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof VV) {
        if (!Number.isFinite(VV)) return "0";
        if (Math.abs(VV) < 100) {
          const eV = VV < 0 ? "-" : "",
            xV = Math.abs(VV);
          return xV >= 10 ? `${eV}${xV.toFixed(1).replace(/\.0$/,"")}` : `${eV}${xV.toFixed(2).replace(/\.?0+$/,"")}`
        }
        eV = BigInt(Math.floor(VV))
      } else eV = VV;
      const YV = eV < 0n ? -eV : eV,
        UV = eV < 0n ? "-" : "",
        yV = YV.toString();
      if (yV.length <= xV) return `${UV}${yV}`;
      const pV = 3 * Math.floor((yV.length - 1) / 3);
      if (pV < 3) return `${UV}${yV}`;
      if (pV > 3 * JV.length) {
        const VV = yV[0],
          eV = yV.slice(1, 3).replace(/0+$/, "");
        return `${UV}${eV?`${VV}.${eV}`:VV}e${yV.length-1}`
      }
      const {
        threshold: QV,
        suffix: nV
      } = JV[JV.length - pV / 3], wV = YV / QV, ZV = Number(1000n * (YV % QV) / QV), vV = Number(wV) + ZV / 1e3;
      let rV;
      return rV = vV >= 100 ? Math.floor(vV).toString() : vV >= 10 ? vV.toFixed(1).replace(/\.0$/, "") : vV.toFixed(2).replace(/\.?0+$/, ""), `${UV}${rV}${nV}`
    }
    const UV = JV.map((VV => {
      let {
        threshold: eV,
        suffix: xV
      } = VV;
      return {
        threshold: Number(eV),
        suffix: xV
      }
    })).filter((VV => {
      let {
        threshold: eV
      } = VV;
      return Number.isFinite(eV)
    }));

    function yV(VV) {
      const eV = Math.abs(VV),
        xV = VV < 0 ? "-" : "";
      for (const {
          threshold: JV,
          suffix: YV
        }
        of UV)
        if (eV >= JV) {
          const VV = eV / JV;
          if (VV >= 1e3) return `${xV}${eV.toExponential(2).replace("e+","e")}`;
          let UV;
          return UV = VV >= 100 ? Math.floor(VV).toString() : VV >= 10 ? VV.toFixed(1).replace(/\.0$/, "") : VV.toFixed(2).replace(/\.?0+$/, ""), `${xV}${UV}${YV}`
        } return `${xV}${eV}`
    }
  },
  35311: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      f: () => vV,
      i: () => ZV,
      k: () => yV,
      n: () => nV,
      q: () => QV
    });
    var JV = xV(375);
    const YV = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      UV = {
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

    function yV(VV) {
      var eV;
      return null !== (eV = UV[VV]) && void 0 !== eV ? eV : {
        translationKey: ""
      }
    }
    const pV = {
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

    function QV(VV) {
      return YV.includes(VV)
    }

    function nV(VV) {
      var eV;
      return !0 === (null === VV || void 0 === VV || null === (eV = VV.customAttributes) || void 0 === eV ? void 0 : eV.cannotEnchant)
    }

    function wV(VV, eV) {
      const {
        max: xV
      } = pV[VV].at(-1);
      return eV <= xV
    }

    function ZV(VV) {
      const eV = Math.sin(VV / 80),
        xV = VV => {
          if (VV <= 0) return 0;
          if (VV > 1) return 1;
          let eV = 0;
          const xV = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let JV = 0; JV < xV.length; JV++) {
            eV += (JV % 2 === 0 ? 1 : -1) * xV[JV] * Math.pow(VV, 2 + JV) / (2 + JV)
          }
          return 72 * eV
        },
        JV = .3 - .78 * eV,
        YV = .5 - .78 * eV,
        UV = .6 - .7 * eV,
        yV = .8 - .6 * eV;
      let pV = xV(JV),
        QV = xV(YV) - pV,
        nV = xV(UV) - QV - pV,
        wV = xV(yV) - nV - QV - pV;
      JV < .041 && (QV /= 1 - pV, nV /= 1 - pV, wV /= 1 - pV, pV = 0), YV < .041 && (pV /= 1 - QV, nV /= 1 - QV, wV /= 1 - QV, QV = 0), UV < .041 && (pV /= 1 - nV, QV /= 1 - nV, wV /= 1 - nV, nV = 0), yV < .041 && (pV /= 1 - wV, QV /= 1 - wV, nV /= 1 - wV, wV = 0);
      return {
        commonProb: pV,
        uncommonProb: QV,
        rareProb: nV,
        epicProb: wV,
        legendaryProb: 1 - (wV + nV + QV + pV)
      }
    }

    function vV(VV, eV) {
      const {
        min: xV,
        max: YV
      } = pV[VV][eV], UV = JV.b.sampleUniformIntDistribution(xV, YV, "includeMax");
      return {
        ...ZV(UV),
        level: UV
      }
    }
  },
  35278: () => {},
  35362: () => {},
  13474: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14627: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16087: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16618: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);