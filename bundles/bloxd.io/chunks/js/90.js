export const id = 90;
export const ids = [90];
export const modules = {
  34915: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      EverythingMenu: () => MQ
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1188),
      PM = iM(1398),
      nM = iM(2190),
      QM = iM(1520),
      zM = iM(1130),
      LM = iM(1303);

    function mM(MM) {
      let {
        items: rM,
        link: iM,
        onClick: OM,
        selectedItemId: SM,
        className: mM,
        padStartsOnTab: HM = !0
      } = MM;
      const {
        t: hM
      } = (0, aM.A)(), JM = (0, zM.i)(), dM = [];
      for (const jM of rM) {
        var yM;
        const MM = dM[dM.length - 1];
        var lM;
        if (MM && MM.title === (null !== (yM = jM.section) && void 0 !== yM ? yM : null)) MM.items.push(jM);
        else dM.push({
          title: null !== (lM = jM.section) && void 0 !== lM ? lM : null,
          items: [jM]
        })
      }
      return (0, LM.jsxs)("div", {
        className: jM()("MenuSideBarBody", mM),
        "data-pad-tabs": "2",
        children: [dM.map(((MM, rM) => {
          var iM;
          return (0, LM.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [MM.title && (0, LM.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: hM(MM.title)
            }), MM.items.map((MM => {
              var rM;
              const iM = !!MM.iconElement || !!MM.faIcon;
              return (0, LM.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": SM === MM.id ? "true" : void 0,
                "data-pad-default-focus": HM && SM === MM.id || void 0,
                className: jM()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: SM === MM.id
                }),
                onClick: () => {
                  OM(MM.id)
                },
                children: [iM && (0, LM.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (rM = MM.iconElement) && void 0 !== rM ? rM : (0, LM.jsx)(PM.b, {
                    name: MM.faIcon
                  })
                }), (!JM || !iM) && (0, LM.jsx)("div", {
                  children: hM(MM.title)
                }), MM.redDot && (0, LM.jsx)(nM.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, MM.id)
            }))]
          }, null !== (iM = MM.title) && void 0 !== iM ? iM : rM)
        })), iM && (0, LM.jsxs)("div", {
          ...(0, QM.fb)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: iM.onClick,
          children: [(0, LM.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, LM.jsx)(PM.b, {
              name: iM.faIcon
            })
          }), (0, LM.jsx)("div", {
            children: hM(iM.title)
          }), (0, LM.jsx)(PM.b, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var HM = iM(2798),
      hM = iM(1142),
      JM = iM(2640),
      dM = iM(3508),
      yM = iM(83),
      lM = iM(2039),
      EM = iM(2385),
      UM = iM(2389),
      GM = iM(1763),
      CM = iM(1396),
      eM = iM(5401),
      bM = iM(19),
      wM = iM(34920);

    function tM(MM) {
      let {
        setApplySettingsCallback: rM
      } = MM;
      const {
        clientEscMenuOptions: iM
      } = (0, bM.m)(["clientEscMenuOptions"]), [SM, jM] = (0, OM.useState)(!1), [aM, PM] = (0, OM.useState)(!1), [nM, zM] = (0, OM.useState)(6400), [mM, HM] = (0, OM.useState)(3600), [hM, JM] = (0, OM.useState)(!1), [dM, yM] = (0, OM.useState)(!1);

      function lM(MM) {
        const rM = "screenshot" === MM ? PM : jM;
        rM(!0);
        const iM = hM ? "normals" : dM ? "depth" : null;
        wM.devTools.downloadScene(MM, {
          width: nM,
          height: mM,
          colouring: iM
        }).catch((MM => {
          console.error("Couldn't download the scene", MM)
        })).finally((() => {
          rM(!1)
        }))
      }
      return (0, LM.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, LM.jsx)(eM.c, {
          label: "Disable Ambient Occlusion",
          checked: iM.disableAmbientOcclusion,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              disableAmbientOcclusion: MM
            }), rM((() => eM.j))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), wM.devTools.supports("ambientLight") && (0, LM.jsx)(eM.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: iM.ambientLightIntensity,
          onChange: MM => {
            wM.devTools.setAmbientLightIntensity(MM).then((() => {
              bM.d.setClientEscMenuOptions({
                ambientLightIntensity: MM
              })
            })).catch((MM => {
              console.error("Couldn't set the ambient light", MM)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), wM.devTools.supports("weaponRaycasts") && (0, LM.jsx)(eM.c, {
          label: "Show Weapon Raycasts",
          checked: iM.showWeaponRaycasts,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              showWeaponRaycasts: MM
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), wM.devTools.supports("sceneDownload") && (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, LM.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, LM.jsx)(eM.c, {
              label: "Apply normal-based coloring",
              checked: hM,
              onClick: MM => {
                JM(MM), MM && yM(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, LM.jsx)(eM.c, {
              label: "Apply depth-based coloring",
              checked: dM,
              onClick: MM => {
                yM(MM), MM && JM(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, LM.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, LM.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, LM.jsx)(GM.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (MM, rM) => {
                  const iM = parseInt(MM) || 6400;
                  zM(iM)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: nM.toString()
              }), (0, LM.jsx)("span", {
                children: "X"
              }), (0, LM.jsx)(GM.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (MM, rM) => {
                  const iM = parseInt(MM) || 3600;
                  HM(iM)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: mM.toString()
              })]
            }), (0, LM.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, LM.jsxs)(QM.e, {
                onClick: () => {
                  lM("screenshot")
                },
                disabled: aM,
                children: [aM && (0, LM.jsx)(CM.d, {}), "Download Screenshot"]
              }), (0, LM.jsxs)(QM.e, {
                onClick: () => {
                  lM("glb")
                },
                disabled: SM,
                children: [SM && (0, LM.jsx)(CM.d, {}), "Download GLB"]
              })]
            })]
          }), (0, LM.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var gM = iM(119),
      uM = iM(1144),
      RM = iM(34929),
      pM = iM(3366),
      WM = iM(1591),
      sM = iM(1279),
      DM = iM(1240),
      kM = iM(3461),
      ZM = iM(2150),
      oM = iM(1573),
      fM = iM(332),
      YM = iM(2397),
      NM = iM(2401),
      AM = iM(3394),
      xM = iM(2919),
      vM = iM(1722),
      FM = iM(3427),
      BM = iM(3463),
      XM = iM(187);
    var IM = iM(1899),
      KM = iM(3385);
    async function qM() {
      try {
        return function(MM) {
          const rM = new Map;
          for (const {
              store: iM,
              status: OM,
              autoRenewStatus: SM,
              managementUrl: jM
            }
            of Object.values(MM.subscriptions)) !(0, AM.k)(iM) || (0, AM.o)(OM) || "willNotRenew" === SM || rM.has(iM) || rM.set(iM, null !== jM && void 0 !== jM ? jM : AM.r[iM]);
          return Array.from(rM, (MM => {
            let [rM, iM] = MM;
            return {
              store: rM,
              managementUrl: iM
            }
          }))
        }(await (0, IM.n)((0, KM.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (MM) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", MM), null
      }
    }

    function TM(MM) {
      const {
        t: rM,
        selectedLanguage: iM
      } = (0, aM.A)(), {
        userContext: SM
      } = (0, hM.b)(), {
        superRankInfo: jM
      } = SM, PM = (0, NM.usePurchasesAllowed)(), nM = MM && ((0, fM.zc)(jM) || SM.ranksMayChange) && PM, {
        accountId: QM,
        data: zM
      } = (0, xM.g)(FM.d, nM);
      if ((0, OM.useEffect)((() => {
          if (nM) return FM.d.watchAccount(), vM.e.addRefetchListener("billing", (MM => {
            "reconnected" === MM ? FM.d.refreshAfterReconnect() : FM.d.refresh()
          }))
        }), [nM]), !nM || !(0, fM.zc)(jM) || null === zM || QM !== SM.whamm) return null;
      const LM = function(MM, rM, iM) {
        const OM = BM.i[(0, BM.d)(BM.i, rM)],
          SM = void 0 === OM ? void 0 : (0, XM.d)(MM.entitlements, OM.entitlementId);
        return void 0 === SM || null === SM.expiresAt || (0, AM.g)(SM) <= iM ? null : SM.willRenew && null === SM.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(SM.expiresAt, iM)
        } : {
          renews: !1,
          at: (0, AM.g)(SM)
        }
      }(zM, jM.tier, Date.now());
      if (null === LM) return null;
      const mM = LM.renews ? "store:renewsOn" : "store:endsOn",
        HM = new Date(LM.at).toLocaleDateString((0, aM.n)(iM.code, mM), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        JM = (0, NM.getBillingStore)(),
        dM = null !== JM && (0, AM.k)(JM) ? function(MM, rM) {
          var iM;
          const OM = Object.values(MM.subscriptions).find((MM => MM.store === rM && !(0, AM.o)(MM.status)));
          return void 0 === OM ? null : null !== (iM = OM.managementUrl) && void 0 !== iM ? iM : AM.r[rM]
        }(zM, JM) : null;
      return {
        text: rM(mM, {
          date: HM
        }),
        manageUrl: dM
      }
    }
    var VM = iM(2616),
      cM = iM(2546);

    function Mr(MM) {
      let {
        loggedIn: rM,
        playerDbId: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)(), SM = (0, VM.e)(), jM = (0, VM.c)(SM, iM);
      return cM.f.isAvailable && (rM || jM) && "notEligible" !== (null === SM || void 0 === SM ? void 0 : SM.answer) ? (0, LM.jsx)(eM.c, {
        label: OM("sessionReplayConsent:setting"),
        note: OM("sessionReplayConsent:settingNote"),
        checked: jM,
        onClick: MM => {
          MM ? cM.f.askConsent(!1) : cM.f.withdrawConsent()
        }
      }) : null
    }
    var rr = iM(1440),
      ir = iM(1217),
      Or = iM(5282),
      Sr = iM(1548),
      jr = iM(4052),
      ar = iM(2378);

    function Pr(MM) {
      let {
        showing: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)(), {
        data: OM,
        failed: SM
      } = (0, xM.g)(jr.d, rM);
      return 0 === (null === OM || void 0 === OM ? void 0 : OM.length) || null === OM && !SM ? null : (0, LM.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, LM.jsx)("div", {
          className: "AccountSettingsLabel",
          children: iM("paymentHistory:title")
        }), null === OM && SM && (0, LM.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: iM("paymentHistory:loadFailed")
        }), null !== OM && (0, LM.jsx)("ul", {
          className: "PaymentHistoryList",
          children: OM.map((MM => (0, LM.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, LM.jsx)(ar.c, {
              entry: MM
            }), (0, LM.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, LM.jsx)("div", {
                children: (0, ar.h)(iM, MM)
              }), (0, LM.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(MM.at).toLocaleDateString(), "number" === typeof MM.orderId && ` \xb7 ${iM("paymentHistory:order",{orderId:MM.orderId})}`]
              })]
            })]
          }, (0, jr.b)(MM))))
        })]
      })
    }
    var nr = iM(3403),
      Qr = iM(2408),
      zr = iM(2248);

    function Lr() {
      (0, zr.d)({
        titleKey: "payments:logInToRestore"
      })
    }

    function mr(MM) {
      let {
        status: rM
      } = MM;
      switch (rM) {
        case "restored":
          return (0, FM.g)(), {
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

    function Hr() {
      const MM = (0, KM.usePageBillingClient)(),
        {
          userContext: rM
        } = (0, hM.b)(),
        [iM, SM] = (0, OM.useState)(!1),
        [jM, aM] = (0, OM.useState)(null);
      return {
        restoring: iM,
        notice: jM,
        restore: () => {
          rM.isLoggedIn() ? (SM(!0), aM(null), MM.restorePurchases().then(mr, (MM => MM instanceof nr.c && "loginRequired" === MM.code ? (Lr(), null) : function(MM) {
            return MM instanceof nr.c && "storeBusy" === MM.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", MM), (0, FM.g)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(MM))).then(aM).finally((() => {
            SM(!1)
          }))) : Lr()
        }
      }
    }

    function hr(MM) {
      let {
        restoring: rM,
        notice: iM,
        restore: SM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)(), nM = (0, NM.usePurchasesAllowed)(), zM = (0, NM.getBillingStore)(), mM = (0, OM.useRef)(null);
      return (0, OM.useEffect)((() => {
        var MM;
        null === (MM = mM.current) || void 0 === MM || MM.scrollIntoView({
          block: "nearest"
        })
      }), [iM]), nM && (0, Qr.e)(zM) ? (0, LM.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, LM.jsx)(QM.i, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: rM,
          onClick: SM,
          children: PM("payments:restorePurchases")
        }), null !== iM && (0, LM.jsx)("div", {
          ref: mM,
          className: jM()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: iM.failed
          }),
          children: PM(iM.key)
        })]
      }) : null
    }
    var Jr = iM(1996),
      dr = iM(1251),
      yr = iM(1429),
      lr = iM(1202),
      Er = iM(1360),
      Ur = iM(313),
      Gr = iM(2702);
    const Cr = {
      appStore: {
        name: "App Store",
        ...Ur.Sb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Ur.Sb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Ur.Sb.discord
      }
    };

    function er(MM) {
      let {
        warning: rM,
        subscriptions: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)();
      return null !== iM && 0 === iM.length ? (0, LM.jsx)(LM.Fragment, {
        children: OM(rM)
      }) : (0, LM.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [OM(rM), null === iM && (0, LM.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: OM("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== iM && (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: OM("auth:deleteAccountStoreSubscriptions")
          }), (0, LM.jsx)(Gr.c, {
            className: "DeleteAccountSubtitleLinks",
            links: iM.map((MM => {
              let {
                store: rM,
                managementUrl: iM
              } = MM;
              return {
                ...Cr[rM],
                url: iM
              }
            }))
          })]
        })]
      })
    }
    var br = iM(2548);

    function wr(MM) {
      let {
        showing: rM
      } = MM;
      const {
        userContext: iM,
        isUserContextUpdating: SM
      } = (0, hM.b)(), {
        t: jM
      } = (0, aM.A)(), [PM, nM] = (0, OM.useState)(!1), [zM, mM] = (0, OM.useState)(null), HM = (0, OM.useRef)(rM);
      (0, OM.useEffect)((() => (HM.current = rM, () => {
        HM.current = !1
      })), [rM]);
      const JM = SM || PM;
      return (0, LM.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, LM.jsxs)(QM.J, {
          onClick: async function() {
            if (!PM) {
              nM(!0);
              try {
                const MM = await async function() {
                  const [MM, rM] = await Promise.all([(0, Jr.e)(iM.availableUserContextTypes) ? qM() : [], gr(iM)]);
                  if (!HM.current) return dr.b.ok();
                  const OM = (0, sM.e)(iM.getPlayerName(), !yM.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await yr.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: OM
                        }
                      },
                      subtitle: (0, LM.jsx)(er, {
                        warning: tr(iM.isLoggedIn(), rM),
                        subscriptions: MM
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: rM ? jM("auth:deleteAccountTypedConfirm", {
                        playerName: OM
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return dr.b.ok();
                  const SM = await (0, uM.postJsonWithMetricsCookiesAndJsonResponse)(`${lr.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: bM.d.get("gameState")
                  }, {
                    retries: 3
                  }, iM.getMetricsCookies());
                  if (SM.error) return dr.b.error(SM.error);
                  (0, gM.isDiscordClient)() && (await Er.l.discordActivity()).exit("User deleted their account");
                  return null !== (0, br.b)() && await cM.f.withdrawConsent(), (0, uM.forgetStoredGuestAccount)(iM.whamm), (0, uM.forceGlobalSignOut)(!0), dr.b.ok()
                }(), rM = MM.isError() ? MM.asError().message : null;
                mM(rM)
              } catch (MM) {
                console.error("Failed to delete account:", MM), mM(jM("auth:genericDeleteAccountError"))
              }
              nM(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: JM,
          children: [JM && (0, LM.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, LM.jsx)(CM.d, {})
          }), jM("auth:deleteAccount")]
        }), zM && (0, LM.jsx)("div", {
          className: "DeleteAccountError",
          children: zM
        })]
      })
    }

    function tr(MM, rM) {
      return (0, gM.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : MM ? "auth:deleteAccountLossWarning" : rM ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function gr(MM) {
      try {
        const {
          accountCreatedAt: rM
        } = await (0, IM.n)(oM.c.getPlayerProfile(MM, {
          lowerCaseName: MM.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== rM && Date.now() - rM >= 7 * fM.i
      } catch (rM) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", rM), !0
      }
    }
    var ur = iM(3977),
      Rr = iM(3989),
      pr = iM(3983);

    function Wr(MM) {
      let {
        showing: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)(), {
        data: OM,
        failed: SM
      } = (0, xM.g)(ur.c, rM), jM = null === OM ? null : (0, ur.d)(OM);
      return (0, LM.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, LM.jsx)("div", {
          className: "AccountSettingsLabel",
          children: iM("settingsMenu:blockedAndIgnoredPlayers")
        }), null === jM && !SM && (0, LM.jsx)(CM.d, {}), null === jM && SM && (0, LM.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [iM("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, LM.jsx)(QM.e, {
            className: "SmallTextLight",
            onClick: () => {
              ur.c.refresh()
            },
            children: iM("general:tryAgain")
          })]
        }), 0 === (null === jM || void 0 === jM ? void 0 : jM.length) && (0, LM.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: iM("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== jM && jM.length > 0 && (0, LM.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: jM.map((MM => {
            let {
              name: rM,
              exclusion: OM
            } = MM;
            const SM = pr.h[OM];
            return (0, LM.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, LM.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: rM
              }), (0, LM.jsx)(QM.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Rr.d)(SM, rM, {
                    chatMessage: null
                  })
                },
                children: iM(pr.l[SM].text)
              })]
            }, rM)
          }))
        })]
      })
    }
    var sr = iM(1963);

    function Dr(MM) {
      let {
        userContext: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)(), {
        replayChatObjectedAtMs: SM
      } = (0, bM.m)(["replayChatObjectedAtMs"]), [jM, PM] = (0, OM.useState)(!1);
      return cM.h ? (0, LM.jsx)(eM.c, {
        label: iM("sessionReplayChatObjection:setting"),
        note: iM("sessionReplayChatObjection:settingNote"),
        checked: null !== SM,
        disabled: jM,
        onClick: MM => {
          PM(!0), oM.c.setReplayChatObjection(rM, MM).then((MM => {
            let {
              replayChatObjectedAtMs: rM
            } = MM;
            bM.d.set({
              replayChatObjectedAtMs: rM
            })
          })).catch((MM => {
            console.error("Couldn't save the session replay chat objection", MM), sr.k.showMessage({
              translationKey: "sessionReplayChatObjection:failed"
            })
          })).finally((() => {
            PM(!1)
          }))
        }
      }) : null
    }
    const kr = (0, OM.memo)((function(MM) {
      var rM, iM;
      let {
        showing: SM,
        inGame: nM
      } = MM;
      const {
        t: zM,
        selectedLanguage: mM
      } = (0, aM.A)(), {
        hideSocialLocationFrom: JM
      } = (0, bM.m)(["hideSocialLocationFrom"]), dM = (0, NM.usePurchasesAllowed)(), lM = Hr(), EM = (0, HM.b)(), {
        userContext: UM,
        isUserContextUpdating: wM
      } = (0, hM.b)(), [tM, AM] = (0, OM.useState)(null !== (rM = UM.getPlayerName()) && void 0 !== rM ? rM : ""), [xM, vM] = (0, OM.useState)(null), {
        purchasing: FM,
        outcome: BM,
        purchase: XM
      } = (0, pM.e)("/super-rank-welcome"), IM = (0, fM.hc)((0, aM.n)(mM.code, "general:timeLeft"), UM.superRankInfo), KM = null === (iM = TM(SM)) || void 0 === iM ? void 0 : iM.text, qM = IM ? zM("general:timeLeft", {
        time: IM
      }) : KM, [VM, cM] = (0, OM.useState)(!1), [jr, ar] = (0, OM.useState)(!1), nr = (0, OM.useRef)(null), Qr = (0, OM.useRef)(null), zr = (0, ZM.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Lr = null === zr, mr = null !== zr && void 0 !== zr ? zr : [], Jr = UM !== uM.NULL_USER_CONTEXT && !UM.isLoggedIn(), dr = Jr && 0 !== (null === zr || void 0 === zr ? void 0 : zr.length), [yr, lr] = (0, OM.useState)([]), [Er, Ur] = (0, OM.useState)(!1), Gr = UM.playerHasRank("youtuber"), Cr = (0, OM.useCallback)((() => oM.c.getPlayerProfile(UM, {
        lowerCaseName: UM.getPlayerName().toLowerCase()
      }).then((MM => {
        lr(MM.socialLinks)
      })).catch((MM => {
        console.error("Failed to refresh social links", MM)
      }))), [UM]);

      function er(MM) {
        MM !== tM && ((0, sM.j)(MM) ? (MM = (0, sM.l)(MM), vM(zM("homePage:nameCharacters"))) : vM(null), nr.current && (nr.current.value = MM), AM(MM))
      }
      return (0, OM.useEffect)((() => (!0 === SM ? (clearInterval(Qr.current), Qr.current = setInterval(EM, 1e3)) : clearInterval(Qr.current), () => {
        clearInterval(Qr.current)
      })), [SM, EM]), (0, OM.useEffect)((() => {
        var MM;
        AM(null !== (MM = UM.getPlayerName()) && void 0 !== MM ? MM : "")
      }), [UM]), (0, OM.useEffect)((() => {
        if (!SM || !Gr || wM) return;
        let MM = !1;
        return Ur(!0), lr([]), oM.c.getPlayerProfile(UM, {
          lowerCaseName: UM.getPlayerName().toLowerCase()
        }).then((rM => {
          MM || lr(rM.socialLinks)
        })).catch((MM => {
          console.error("Failed to load social links", MM)
        })).finally((() => {
          MM || Ur(!1)
        })), () => {
          MM = !0
        }
      }), [SM, Gr, wM, UM]), (0, LM.jsxs)("div", {
        className: jM()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: nM
        }),
        children: [nM && (0, LM.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: zM("settingsMenu:accountSettingsInGameWarning")
        }), (0, LM.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, LM.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [zM("homePage:discordNamePopupTitle"), (0, LM.jsxs)(WM.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, DM.f)({
                name: UM.getPlayerName()
              }),
              onClick: () => {
                bM.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, LM.jsx)(PM.b, {
                name: "arrow-up-right-from-square"
              }), " ", zM("profileCard:viewProfile")]
            })]
          }), (0, LM.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, LM.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [yM.featureFlags.canChangeName && (0, LM.jsx)(GM.b, {
                className: "EnterName",
                placeholderText: zM("homePage:enterName"),
                maxLength: sM.g,
                defaultValue: tM,
                onValueChange: MM => {
                  er(MM)
                },
                forcedText: VM || !yM.featureFlags.canChangeName ? tM : null,
                blurOnEnter: !0,
                domRef: nr
              }), (0, LM.jsx)(QM.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  er((0, sM.f)())
                },
                children: (0, LM.jsx)(PM.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !yM.featureFlags.canChangeName && (0, LM.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, sM.e)(tM, !yM.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, LM.jsx)(QM.e, {
              className: "ChooseNameButton",
              disabled: VM || tM === UM.getPlayerName(),
              onClick: () => {
                tM.length < sM.i ? vM(zM("homePage:changeNameMinLengthError", {
                  length: sM.i
                })) : tM.length > sM.g ? vM(zM("homePage:changeNameMaxLengthError", {
                  length: sM.g
                })) : (cM(!0), vM(null), (0, RM.j)(UM, tM).then((MM => {
                  cM(!1), "taken" === MM.outcome ? vM(zM("homePage:nameTaken")) : "refused" === MM.outcome ? vM(MM.message) : "failed" === MM.outcome && vM(zM((0, RM.i)(MM.failure)))
                })))
              },
              children: zM("general:choose")
            })]
          }), xM && (0, LM.jsx)("div", {
            className: "ChooseAccNameError",
            children: xM
          })]
        }), (0, LM.jsx)(Dr, {
          userContext: UM
        }), (0, LM.jsx)(eM.c, {
          label: (() => {
            if ((0, ir.m)(JM)) {
              const MM = (0, aM.n)(mM.code, "general:timeLeft"),
                rM = (0, fM.db)(MM, Date.now(), JM + ir.i);
              return `${zM("settingsMenu:hideSocialLocation")} (${zM("general:timeLeft",{time:rM})})`
            }
            return zM("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const MM = !(0, ir.m)(JM);
            (0, Sr.reportAnalyticsClick)({
              id: "social.hide_location",
              value: MM ? "on" : "off"
            }), ar(!0), oM.c.setHideSocialLocation(UM, MM).then((() => {
              bM.d.set({
                hideSocialLocationFrom: MM ? Date.now() : null
              })
            })).finally((() => {
              ar(!1)
            }))
          },
          checked: (0, ir.m)(JM),
          disabled: jr
        }), (0, LM.jsx)(Mr, {
          loggedIn: UM.isLoggedIn(),
          playerDbId: UM.whamm
        }), Gr && (0, LM.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, LM.jsx)("div", {
            className: "AccountSettingsLabel",
            children: zM("settingsMenu:socialLinks")
          }), Er && (0, LM.jsx)(CM.d, {}), !Er && (0, LM.jsx)(Or.b, {
            socialLinks: yr,
            editable: !0,
            userContext: UM,
            onLinksUpdated: Cr
          })]
        }), (0, LM.jsxs)("div", {
          className: "SettingBox",
          children: [(0, LM.jsx)("div", {
            className: "AccountSettingsLabel",
            children: zM(dr ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Lr && (0, LM.jsx)(CM.d, {}), !Lr && 0 === mr.length && (0, LM.jsx)("div", {
            className: "NoLoginOptions",
            children: zM("auth:noLoginOptions")
          }), !Lr && mr.length > 0 && "crazygames" !== gM.siteUsed && (0, LM.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: mr
          }), !Lr && mr.length > 0 && "crazygames" === gM.siteUsed && (0, LM.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [mr[0], mr.length > 1 && (0, LM.jsxs)(LM.Fragment, {
              children: [(0, LM.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, LM.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: zM("auth:legacyLoginOptions")
                }), (0, LM.jsx)(rr.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: zM("auth:legacyLoginOptionsInfo")
                })]
              }), (0, LM.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: mr.slice(1)
              })]
            })]
          }), yM.featureFlags.useLogin && (null !== UM.loggedInInfo || UM.isLoggedIn()) && (0, LM.jsxs)(LM.Fragment, {
            children: [(0, LM.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, LM.jsxs)(QM.J, {
              onClick: () => {
                (0, uM.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, LM.jsx)(PM.b, {
                name: "right-from-bracket"
              }), zM("auth:signOut")]
            })]
          })]
        }), !UM.playerHasRank("super") && dM && (0, LM.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, LM.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, LM.jsx)(PM.b, {
              name: "bolt"
            }), zM("homePage:superRank")]
          }), (0, LM.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, LM.jsxs)(QM.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, YM.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, LM.jsx)(PM.b, {
                name: "bolt"
              }), zM("homePage:getSuperRank")]
            }), (0, LM.jsxs)(QM.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, YM.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, LM.jsx)(PM.b, {
                name: "bolt"
              }), zM("homePage:giftSuperRank")]
            })]
          }), (0, LM.jsx)(hr, {
            ...lM
          })]
        }), UM.playerHasRank("super") && (0, LM.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, LM.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, LM.jsx)(PM.b, {
              name: "bolt"
            }), zM("homePage:superRank"), qM && (0, LM.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", qM, ")"]
            })]
          }), dM && (0, LM.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, fM.zc)(UM.superRankInfo) && (0, LM.jsxs)(QM.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: FM,
              onClick: () => {
                XM(kM.k.id, null)
              },
              children: [(0, LM.jsx)(PM.b, {
                name: "bolt"
              }), zM("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: kM.k.product.days,
                price: kM.k.price
              })]
            }), (0, LM.jsxs)(QM.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, YM.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, LM.jsx)(PM.b, {
                name: "bolt"
              }), zM("homePage:giftSuperRank")]
            })]
          }), BM && (0, LM.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: zM(BM.translationKey)
          }), (0, LM.jsx)(hr, {
            ...lM
          })]
        }), (0, LM.jsx)(Pr, {
          showing: SM
        }), yM.featureFlags.useSocialFeatures && (0, LM.jsx)(Wr, {
          showing: SM
        }), (0, LM.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, LM.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, LM.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: zM(Zr(Jr, dr))
            }), (0, gM.isDiscordClient)() && (0, LM.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: zM("auth:discordActivityKickWarning")
            }), (0, LM.jsx)(wr, {
              showing: SM
            })]
          }), (0, LM.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: zM(Jr ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Zr(MM, rM) {
      return MM ? rM ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var or = iM(34938),
      fr = iM(3530),
      Yr = iM(1258),
      Nr = iM(1503),
      Ar = iM(2084),
      xr = iM(9472),
      vr = iM(34940);

    function Fr() {
      const {
        t: MM
      } = (0, aM.A)();
      return (0, Ar.j)("localPlayerAlive") ? (0, LM.jsx)(xr.c, {
        icon: "camera-alt",
        title: MM("screenshotMode:title"),
        sub: MM("screenshotMode:entrySub"),
        onClick: vr.b
      }) : null
    }
    var Br = iM(34952);
    const Xr = (0, OM.memo)((function(MM) {
        let {
          inGame: rM
        } = MM;
        const {
          t: iM,
          selectedLanguage: OM
        } = (0, aM.A)(), {
          clientEscMenuOptions: SM,
          showDebugOverlay: jM,
          isTouchScreen: PM
        } = (0, bM.m)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), nM = (0, JM.f)("hideCoordinates");
        let QM = "settingsMenu:showCoordinates",
          zM = "settingsMenu:showChunkCoordinates";

        function mM(MM) {
          const rM = new Intl.DisplayNames([MM], {
            type: "language"
          }).of(MM);
          return rM.charAt(0).toUpperCase() + rM.slice(1)
        }
        return nM && (QM = "settingsMenu:showCoordinatesHidden", zM = "settingsMenu:showChunkCoordinatesHidden"), (0, LM.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [rM && yM.featureFlags.canUseInviteLinks && (0, LM.jsxs)("div", {
            className: "SettingBox",
            children: [(0, LM.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: iM("settingsMenu:inviteLink")
            }), (0, LM.jsx)(or.e, {})]
          }), (0, LM.jsxs)("div", {
            className: "SettingBox",
            children: [(0, LM.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: iM("settingsMenu:language")
            }), (0, LM.jsx)(fr.e, {
              options: Object.entries(aM.g).map((MM => {
                let [rM, iM] = MM;
                return {
                  label: (0, LM.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, LM.jsx)("img", {
                      src: iM.flagImg,
                      alt: "flag"
                    }), (0, LM.jsxs)("span", {
                      children: [mM(rM), " ", (0, LM.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", rM, ")"]
                      })]
                    })]
                  }),
                  value: rM
                }
              })),
              value: OM.code,
              onChange: MM => {
                Yr.e.get().setCurrentLanguage(MM.value)
              }
            })]
          }), rM && PM && (0, Br.e)() && (0, LM.jsx)(Fr, {}), !(0, yM.isMobileApp)() && (0, Nr.j)() && yM.featureFlags.useForceRotateForceFullscreenOverlay && (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:disableFullscreenMode"),
            checked: SM.disableFullscreen,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                disableFullscreen: MM
              })
            }
          }), (0, LM.jsx)(eM.c, {
            label: iM(QM),
            checked: SM.showCoordinates,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                showCoordinates: MM
              })
            },
            disabled: nM
          }), (0, LM.jsx)(eM.c, {
            label: iM(zM),
            checked: SM.showChunkCoordinates,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                showChunkCoordinates: MM
              })
            },
            disabled: nM
          }), (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:showFps"),
            checked: SM.showFPS,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                showFPS: MM
              })
            }
          }), (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:disableBunnyHopping"),
            checked: SM.disableBunnyHopping,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                disableBunnyHopping: MM
              })
            }
          }), (0, Er.u)() && (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:showChat"),
            checked: SM.showChat,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                showChat: MM
              })
            }
          }), (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:showDebugOverlay"),
            checked: jM,
            onClick: MM => {
              bM.d.set({
                showDebugOverlay: MM
              })
            }
          }), yM.featureFlags.useSocialFeatures && (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:showFriendOnlineToasts"),
            checked: SM.showFriendOnlineToasts,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                showFriendOnlineToasts: MM
              })
            }
          }), (0, LM.jsx)(eM.c, {
            label: iM("settingsMenu:showNewItemIndicator"),
            checked: SM.showNewItemIndicator,
            onClick: MM => {
              bM.d.setClientEscMenuOptions({
                showNewItemIndicator: MM
              })
            }
          })]
        })
      })),
      Ir = (0, OM.memo)((function() {
        const {
          t: MM
        } = (0, aM.A)(), {
          soundVolume: rM,
          musicVolume: iM
        } = (0, bM.m)(["soundVolume", "musicVolume"]);
        return (0, LM.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, LM.jsx)(eM.h, {
            name: MM("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: iM,
            onChange: MM => {
              bM.d.set({
                musicVolume: Math.round(100 * MM) / 100
              })
            },
            format: MM => MM.toFixed(2)
          }), (0, LM.jsx)(eM.h, {
            name: MM("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: rM,
            onChange: MM => {
              bM.d.set({
                soundVolume: Math.round(100 * MM) / 100
              })
            },
            format: MM => MM.toFixed(2)
          })]
        })
      }));
    var Kr = iM(730),
      qr = iM(1516),
      Tr = iM(2531),
      Vr = iM(2516),
      cr = iM(3881);
    const Mi = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function ri() {
      const {
        t: MM
      } = (0, aM.A)(), rM = (0, cr.b)(), {
        mobilePushNotificationsCanAsk: iM
      } = (0, bM.m)(["mobilePushNotificationsCanAsk"]), [SM, jM] = (0, OM.useState)(null), [PM, nM] = (0, OM.useState)(!1), [zM, mM] = (0, OM.useState)(null), [HM, hM] = (0, OM.useState)(!1), JM = (0, OM.useCallback)((() => {
        (0, Tr.d)().then((MM => {
          rM.current && (jM(MM), nM(!1))
        })).catch((MM => {
          console.error("Failed to load push notification targets:", MM), rM.current && nM(!0)
        }))
      }), [rM]), dM = (0, OM.useCallback)((() => {
        (0, Vr.g)().then((MM => {
          rM.current && mM((() => MM))
        }))
      }), [rM]);
      (0, OM.useEffect)((() => {
        JM()
      }), [JM]), (0, OM.useEffect)((() => {
        dM()
      }), [dM, iM]), (0, qr.d)(Tr.i, JM);
      const yM = null === SM ? [] : Object.keys(Mi).filter((MM => SM[MM] > 0));
      return (0, LM.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, LM.jsx)("div", {
          className: "SliderText",
          children: MM("notificationSettings:pushNotifications")
        }), null === SM && PM && (0, LM.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: MM("notificationSettings:pushTargetsLoadFailed")
        }), null !== SM && 0 === yM.length && (0, LM.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: MM("notificationSettings:pushTargetsNone")
        }), yM.length > 0 && (0, LM.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: yM.map((rM => {
            var iM;
            return (0, LM.jsx)("li", {
              children: MM(Mi[rM], {
                count: null !== (iM = null === SM || void 0 === SM ? void 0 : SM[rM]) && void 0 !== iM ? iM : 0
              })
            }, rM)
          }))
        }), null !== zM && (0, LM.jsx)(QM.e, {
          className: "PushNotificationSettingsButton",
          loading: HM,
          onClick: () => {
            hM(!0), zM().catch((MM => {
              console.error("Failed to turn on push notifications:", MM)
            })).finally((() => {
              rM.current && (hM(!1), dM())
            }))
          },
          children: MM("notificationSettings:pushTurnOn")
        })]
      })
    }
    var ii = iM(2746),
      Oi = iM(2500),
      Si = iM(30);
    async function ji() {
      return "dailyDropReminderAsked_" + (await uM.userContextManager.getCurrentUserContext()).whamm
    }

    function ai(MM) {
      return async function(MM) {
        if (MM.remindersOn || (0, bM.h)(bM.d.get("gameState"))) return null;
        const rM = await ji();
        if (null !== Si.g.getItem(rM)) return null;
        const [iM, OM] = await Promise.all([(0, Vr.g)().catch((MM => (console.error("Couldn't tell whether this device can take push notifications:", MM), null))), Pi()]);
        if (null === iM && !OM) return null;
        if (null !== iM && ((0, Oi.c)() || (0, Vr.k)())) return null;
        return {
          askedKey: rM,
          requester: iM
        }
      }(MM).catch((MM => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", MM), null)))
    }

    function Pi() {
      return (0, Tr.d)().then((MM => MM.app + MM.browser + MM.msnPlay > 0), (MM => (console.error("Couldn't tell where push notifications reach this account:", MM), !0)))
    }
    async function ni(MM) {
      const rM = (0, ii.A)({
          remindersOn: !0
        }),
        iM = null === MM ? Promise.resolve() : MM(),
        [OM, SM] = await Promise.allSettled([rM, iM]);
      "rejected" === OM.status && console.error("Failed to turn on Lucky Skin Block reminders:", OM.reason), "rejected" === SM.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", SM.reason), "rejected" !== OM.status && "rejected" !== SM.status || sr.k.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const Qi = {
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
      zi = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function Li(MM) {
      let {
        setting: rM,
        value: iM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)(), PM = (0, cr.b)(), [nM, QM] = (0, OM.useState)(null), [zM, mM] = (0, OM.useState)(!1), [HM, hM] = (0, OM.useState)(null);
      return (0, OM.useEffect)((() => {
        "remindersOn" === rM && (0, Vr.g)().then((MM => {
          PM.current && hM((() => MM))
        }), (MM => {
          console.error("Couldn't tell whether this device can take push notifications:", MM)
        }))
      }), [rM, PM]), (0, LM.jsx)(eM.c, {
        className: jM()({
          DailyDropSettingFailed: zM
        }),
        label: SM(zi[rM].label),
        checked: null !== nM && void 0 !== nM ? nM : iM,
        note: zM ? SM("dailyDrop:settingFailed") : void 0,
        onClick: MM => {
          null === nM && (QM(MM), mM(!1), MM && null !== HM && HM().catch((MM => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", MM)
          })), (0, ii.w)("daily_drop.setting", `${zi[rM].reportAs}_${MM?"on":"off"}`), "remindersOn" === rM && ji().then((MM => {
            Si.g.setItem(MM, !0)
          }), (MM => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", MM)
          })), (0, ii.A)("hidden" === rM ? {
            hidden: MM
          } : {
            remindersOn: MM
          }).catch((MM => {
            console.error(`Failed to save the Lucky Skin Block's ${rM} setting:`, MM), PM.current && mM(!0)
          })).finally((() => {
            PM.current && QM(null)
          })))
        }
      })
    }
    const mi = (0, OM.memo)((function() {
      const {
        t: MM
      } = (0, aM.A)(), {
        clientEscMenuOptions: rM
      } = (0, bM.m)(["clientEscMenuOptions"]), {
        userContext: iM
      } = (0, hM.b)(), OM = iM.dailyDrop;
      return (0, LM.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [yM.featureFlags.useSocialFeatures && (0, LM.jsx)(eM.f, {
          label: MM("notificationSettings:friendRequests"),
          options: Kr.c.map((rM => ({
            value: rM,
            label: MM(Qi[rM].label)
          }))),
          value: rM.friendRequestNotifications,
          onChange: MM => {
            bM.d.setClientEscMenuOptions({
              friendRequestNotifications: MM
            })
          },
          circleInfoText: (0, LM.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: Kr.c.map((rM => (0, LM.jsxs)("div", {
              children: [(0, LM.jsx)("b", {
                children: MM(Qi[rM].label)
              }), ": ", MM(Qi[rM].info)]
            }, rM)))
          })
        }), null !== OM && (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsx)(Li, {
            setting: "remindersOn",
            value: OM.remindersOn
          }), (0, LM.jsx)(Li, {
            setting: "hidden",
            value: OM.hidden
          })]
        }), (0, LM.jsx)(ri, {})]
      })
    }));
    var Hi = iM(4887),
      Ji = iM(181),
      di = iM(308),
      yi = iM(7148),
      li = iM(3855),
      Ei = iM(34954),
      Ui = iM(625),
      Gi = iM(22);
    var Ci = iM(656),
      ei = iM(4727);
    const bi = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function wi(MM) {
      return bi.has(MM) ? lM.gameBridge.lookup("jU", null) : null
    }

    function ti(MM) {
      if (!(0, Ui.J)(bM.d.get("clientEscMenuOptions")[MM])) return bM.d.get("clientEscMenuOptions")[MM];
      const rM = wi(MM);
      return null !== rM ? rM[bi.get(MM)] : Si.g.getItem(MM)
    }

    function gi(MM, rM) {
      if ("useTouchControls" === MM) return void(0, ei.d)(rM);
      MM in bM.d.get("clientEscMenuOptions") && bM.d.setClientEscMenuOptions({
        [MM]: rM
      });
      const iM = wi(MM);
      null !== iM && lM.gameBridge.send("setChunkAddDistance", {
        ...iM,
        [bi.get(MM)]: rM
      }), Si.g.setItem(MM, rM)
    }
    var ui = iM(4809),
      Ri = iM(34956),
      Wi = iM(34959),
      si = iM(4882),
      Di = iM(34980);

    function ki(MM) {
      var rM, SM, PM, nM;
      let {
        minChunkAddDist: QM,
        getValue: zM,
        onChange: mM,
        setApplySettingsCallback: HM
      } = MM;
      const {
        t: hM
      } = (0, aM.A)(), {
        clientEscMenuOptions: dM
      } = (0, bM.m)(["clientEscMenuOptions", "showDistantNametags"]), lM = (0, OM.useRef)(zM("showFog")), EM = (0, OM.useRef)(dM.antiAliasing), UM = (0, OM.useRef)(dM.useWebGpu), [GM, CM] = (0, OM.useState)(null), [tM, gM] = (0, OM.useState)(!1), [uM, RM] = (0, OM.useState)((() => (0, li.d)(yM.featureFlags.settings.canUseShaderPacks))), [pM] = (0, OM.useState)((() => bM.d.isWebGpuDefaultOff())), [WM] = (0, OM.useState)(di.k), [sM] = (0, OM.useState)((() => !0 === Si.g.getItem(Ur.fc))), [DM] = (0, OM.useState)((() => bM.d.isWebGpuOnStored()));
      (0, OM.useEffect)((() => {
        let MM = !1;
        return (0, yM.hasUsableWebGpuAdapter)().then((async rM => {
          const iM = sM || DM,
            OM = !rM && Ci.H && await (0, Di.d)(iM);
          MM || (CM(rM || OM), gM(OM))
        })), (0, li.i)(yM.featureFlags.settings.canUseShaderPacks) && (0, yi.d)().then((async rM => {
          const OM = null !== rM && await async function(MM) {
            const [{
              isShaderPackActive: rM
            }, {
              loadPageShaderPackCompiler: OM
            }] = await Promise.all([iM.e(152).then((() => iM(7142))), Promise.all([iM.e(89), iM.e(149), iM.e(151)]).then((() => iM(7111)))]);
            return rM(MM, await OM())
          }(rM);
          MM || RM(OM)
        })), () => {
          MM = !0
        }
      }), [sM, DM]);
      const kM = (!(uM && !sM) || !tM) && GM,
        ZM = function(MM, rM, iM, OM, SM) {
          return (0, Ei.e)(iM, OM) && !0 === rM ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== rM ? "settingsMenu:newWebGpu" : SM ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: MM && !1 !== rM,
            disabled: !0 !== rM
          }
        }(dM.useWebGpu, kM, uM, pM, WM),
        oM = (dM.useWebGpu || (0, Ei.e)(uM, pM)) && uM && !0 === kM,
        fM = (0, JM.f)("lightingOverride"),
        YM = !(0, Ui.J)(fM);
      let NM = "settingsMenu:enableLighting";
      YM && (NM = fM ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const AM = MM => {
          var rM, iM, OM;
          const SM = null !== (rM = MM.showFog) && void 0 !== rM ? rM : zM("showFog"),
            jM = null !== (iM = MM.antiAliasing) && void 0 !== iM ? iM : dM.antiAliasing,
            aM = null !== (OM = MM.useWebGpu) && void 0 !== OM ? OM : dM.useWebGpu,
            PM = !Ci.H && SM !== lM.current || jM !== EM.current || aM !== UM.current;
          HM(PM ? () => eM.j : null)
        },
        xM = (0, JM.f)("fogChunkDistanceOverride"),
        vM = (0, JM.f)("fogBlockDistanceOverride"),
        FM = !(0, Ui.J)(xM) || !(0, Ui.J)(vM),
        BM = FM ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [XM, IM] = (0, Hi.h)(QM),
        [KM, qM] = (0, si.e)(QM),
        TM = hM("settingsMenu:chunkLoadDistanceDeviceLimit"),
        VM = KM < XM,
        cM = Math.min(null !== (rM = zM("chunkHorizAddDist")) && void 0 !== rM ? rM : QM[0], KM),
        Mr = !FM && function(MM, rM) {
          return !0 === MM.showFog && MM.fogChunkDistance > rM
        }(dM, cM);
      return (0, LM.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, LM.jsx)(eM.h, {
          name: hM("settingsMenu:horizontalChunkLoadDistance"),
          min: QM[0],
          max: XM,
          selectableMax: KM,
          cappedNote: TM,
          step: 1,
          initValue: cM,
          onChange: MM => {
            !0 === zM("showFog") && MM < zM("fogChunkDistance") && mM("fogChunkDistance", MM), mM("chunkHorizAddDist", MM), Gi.i.Tz("updatedChunkLoadDist")
          },
          circleInfoText: hM("settingsMenu:chunkLoadDistanceInfo")
        }), (0, LM.jsx)(eM.h, {
          name: hM("settingsMenu:verticalChunkLoadDistance"),
          min: QM[1],
          max: IM,
          selectableMax: qM,
          cappedNote: VM ? void 0 : TM,
          step: 1,
          initValue: Math.min(null !== (SM = zM("chunkVertAddDist")) && void 0 !== SM ? SM : QM[1], qM),
          onChange: MM => {
            mM("chunkVertAddDist", MM), Gi.i.Tz("updatedChunkLoadDist")
          },
          circleInfoText: hM("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, LM.jsx)(eM.c, {
          label: hM("settingsMenu:chunkFadeIn"),
          checked: dM.chunkFadeIn,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              chunkFadeIn: MM
            })
          },
          circleInfoText: hM("settingsMenu:chunkFadeInInfo")
        }), wM.devTools.supports("chunkBorders") && (0, LM.jsx)(eM.c, {
          label: hM("settingsMenu:showChunkBorders"),
          checked: dM.showChunkBorders,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              showChunkBorders: MM
            })
          },
          circleInfoText: hM("settingsMenu:showChunkBordersInfo")
        }), (0, LM.jsx)(eM.c, {
          label: hM(NM),
          checked: dM.enableLighting,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              enableLighting: MM
            })
          },
          disabled: YM
        }), (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, LM.jsx)(eM.c, {
            label: hM(BM),
            checked: dM.showFog,
            onClick: MM => {
              AM({
                showFog: MM
              }), bM.d.setClientEscMenuOptions({
                showFog: MM
              })
            },
            disabled: FM,
            className: jM()({
              SettingBoxWarning: Mr
            })
          }), (0, LM.jsx)(eM.h, {
            name: hM("settingsMenu:fogChunkDistance"),
            min: QM[0],
            max: Ji.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (PM = dM.fogChunkDistance) && void 0 !== PM ? PM : QM[0],
            onChange: MM => {
              bM.d.setClientEscMenuOptions({
                fogChunkDistance: MM
              }), Gi.i.Tz("fogChunkDistanceChanged", MM)
            },
            circleInfoText: hM("settingsMenu:fogChunkDistanceInfo"),
            disabled: FM || !1 === zM("showFog"),
            className: jM()({
              SettingBoxWarning: Mr
            })
          }), Mr && (0, LM.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: hM("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Ci.H && (0, LM.jsx)(eM.c, {
          label: hM(oM ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !oM && dM.disableTexAtlas,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              disableTexAtlas: MM
            })
          },
          circleInfoText: hM("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: oM
        }), (0, LM.jsx)(eM.h, {
          name: hM("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: dM.cameraFOV,
          onChange: MM => {
            bM.d.setClientEscMenuOptions({
              cameraFOV: MM
            })
          }
        }), (0, LM.jsx)(eM.c, {
          label: hM("settingsMenu:disableViewBobbing"),
          checked: dM.disableBobbing,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              disableBobbing: MM
            })
          },
          circleInfoText: hM("settingsMenu:disableViewBobbingInfo")
        }), (0, LM.jsx)(eM.c, {
          label: hM("settingsMenu:antiAliasing"),
          checked: dM.antiAliasing,
          onClick: MM => {
            AM({
              antiAliasing: MM
            }), (0, ui.g)("antiAliasing"), bM.d.setClientEscMenuOptions({
              antiAliasing: MM
            })
          },
          circleInfoText: hM("settingsMenu:antiAliasingInfo")
        }), (0, LM.jsx)(eM.h, {
          name: hM("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (nM = dM.pixelScale) && void 0 !== nM ? nM : 1,
          onChange: MM => {
            (MM !== bM.d.get("clientEscMenuOptions").pixelScale || (0, Wi.q)()) && (0, ui.g)("pixelScale"), bM.d.setClientEscMenuOptions({
              pixelScale: MM
            })
          },
          circleInfoText: hM("settingsMenu:pixelScaleInfo"),
          format: MM => `${MM}x`
        }), (0, LM.jsx)(eM.c, {
          label: hM("settingsMenu:pixelSmoothing"),
          checked: dM.pixelSmoothing,
          onClick: MM => {
            bM.d.setClientEscMenuOptions({
              pixelSmoothing: MM
            })
          },
          circleInfoText: hM("settingsMenu:pixelSmoothingInfo")
        }), Ci.H && (0, LM.jsx)(eM.c, {
          label: hM("settingsMenu:distantNametags"),
          checked: (0, Ri.d)(),
          onClick: MM => {
            bM.d.set({
              showDistantNametags: MM
            })
          },
          circleInfoText: hM("settingsMenu:distantNametagsInfo")
        }), (0, LM.jsx)(eM.c, {
          label: hM(ZM.translationKey),
          checked: ZM.checked,
          onClick: MM => {
            AM({
              useWebGpu: MM
            }), bM.d.setClientEscMenuOptions({
              useWebGpu: MM
            })
          },
          circleInfoText: hM("settingsMenu:newWebGpuInfo"),
          disabled: ZM.disabled
        })]
      })
    }
    var Zi = iM(4801),
      oi = iM(9459),
      fi = iM(34985),
      Yi = iM(9463),
      Ni = iM(34989);
    const Ai = {
        color: 16777215,
        name: "white"
      },
      xi = {
        color: 0,
        name: "black"
      },
      vi = [Ai, {
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
      }, xi],
      Fi = [xi, Ai];

    function Bi(MM) {
      return `${MM} px`
    }

    function Xi(MM) {
      return `${MM}%`
    }

    function Ii(MM) {
      let {
        label: rM,
        value: iM,
        swatches: OM,
        onChange: SM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)(), nM = !OM.some((MM => MM.color === iM));
      return (0, LM.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, LM.jsx)("div", {
          className: "SliderText",
          children: rM
        }), (0, LM.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": rM,
          children: [OM.map((MM => {
            let {
              color: rM,
              name: OM
            } = MM;
            return (0, LM.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": rM === iM,
              "aria-label": PM(`crosshairSettings:color_${OM}`),
              "data-pad-focusable": !0,
              className: jM()("CrosshairSwatch", {
                Selected: rM === iM
              }),
              style: {
                background: (0, Ni.i)(rM)
              },
              onClick: () => {
                SM(rM)
              }
            }, rM)
          })), (0, LM.jsx)("label", {
            className: jM()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: nM
            }),
            style: nM ? {
              background: (0, Ni.i)(iM)
            } : void 0,
            title: PM("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, LM.jsx)("input", {
              type: "color",
              "aria-label": PM("crosshairSettings:customColor"),
              value: (0, Ni.i)(iM),
              onChange: MM => {
                const rM = (0, Ni.m)(MM.target.value);
                null !== rM && SM(rM)
              }
            })
          })]
        })]
      })
    }

    function Ki(MM) {
      let {
        settings: rM,
        onChange: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)(), SM = (MM, OM) => {
        iM((0, Ni.t)(rM, MM, OM))
      }, jM = function(MM, iM) {
        let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bi;
        const {
          min: jM,
          max: aM,
          step: PM
        } = Ni.d[MM];
        return (0, LM.jsx)(eM.h, {
          name: iM,
          min: jM,
          max: aM,
          step: PM,
          initValue: rM[MM],
          format: OM,
          onChange: rM => {
            SM(MM, rM)
          }
        }, MM)
      }, PM = ["lines", "dot", "circle"].filter((MM => rM[MM])), nM = (MM, iM, OM) => (0, LM.jsx)(eM.c, {
        label: iM,
        checked: rM[MM],
        disabled: 1 === PM.length && PM[0] === MM,
        circleInfoText: OM,
        onClick: rM => {
          SM(MM, rM)
        }
      }, MM), QM = "shapes" === rM.style;
      return (0, LM.jsxs)(LM.Fragment, {
        children: [(0, LM.jsx)(eM.f, {
          label: OM("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: OM("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: OM("crosshairSettings:styleShapes")
          }],
          value: rM.style,
          onChange: MM => {
            SM("style", MM)
          }
        }), (0, LM.jsx)(Ii, {
          label: OM("crosshairSettings:color"),
          value: rM.color,
          swatches: vi,
          onChange: MM => {
            SM("color", MM)
          }
        }), jM("opacity", OM("crosshairSettings:opacity"), Xi), !QM && jM("size", OM("crosshairSettings:size"), Xi), QM && (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [nM("lines", OM("crosshairSettings:lines")), rM.lines && jM("lineLength", OM("crosshairSettings:lineLength")), rM.lines && jM("lineThickness", OM("crosshairSettings:lineThickness")), rM.lines && jM("gap", OM("crosshairSettings:gap")), rM.lines && nM("tStyle", OM("crosshairSettings:tStyle"))]
        }), QM && (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [nM("dot", OM("crosshairSettings:dot")), rM.dot && jM("dotSize", OM("crosshairSettings:dotSize"))]
        }), QM && (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [nM("circle", OM("crosshairSettings:circle")), rM.circle && jM("circleRadius", OM("crosshairSettings:circleRadius")), rM.circle && jM("circleThickness", OM("crosshairSettings:circleThickness"))]
        }), (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [jM("outline", OM("crosshairSettings:outline"), (MM => MM > 0 ? Bi(MM) : OM("crosshairSettings:off"))), rM.outline > 0 && (0, LM.jsx)(Ii, {
            label: OM("crosshairSettings:outlineColor"),
            value: rM.outlineColor,
            swatches: Fi,
            onChange: MM => {
              SM("outlineColor", MM)
            }
          })]
        }), nM("growOnClick", OM("crosshairSettings:growOnClick")), QM && nM("forGuns", OM("crosshairSettings:forGuns"), OM("crosshairSettings:forGunsInfo"))]
      })
    }
    var qi = iM(65),
      Ti = iM(1287),
      Vi = iM(13457),
      ci = iM(14650),
      MO = iM(16014),
      rO = iM(16502);
    const iO = ["sky", "grass", "stone", "sand", "snow", "night"],
      OO = "4rem";

    function SO(MM) {
      return {
        backgroundImage: `url(${MM})`,
        backgroundSize: `${OO} ${OO}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function jO(MM) {
      return {
        ...(() => {
          switch (MM) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return SO(Vi);
            case "stone":
              return SO(ci);
            case "sand":
              return SO(MO);
            case "snow":
              return SO(rO);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function aO(MM) {
      return Object.freeze({
        ...Ni.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...MM
      })
    }
    const PO = [{
        id: "default",
        settings: Ni.e
      }, {
        id: "cross",
        settings: aO({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: aO({
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
        settings: aO({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: aO({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: aO({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: aO({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: aO({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      nO = ["growOnClick", "forGuns"];
    var QO = iM(34997);

    function zO(MM) {
      let {
        label: rM,
        selected: iM,
        onClick: OM,
        className: SM,
        style: aM,
        children: PM
      } = MM;
      return (0, LM.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": iM,
        title: rM,
        "aria-label": rM,
        "data-pad-focusable": !0,
        className: jM()("CrosshairBackdropSwatch", SM, {
          Selected: iM
        }),
        style: aM,
        onClick: OM,
        children: PM
      })
    }

    function LO(MM) {
      let {
        backdrop: rM,
        onChange: iM,
        game: OM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)();
      return (0, LM.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": SM("crosshairSettings:background"),
        children: [OM && (0, LM.jsx)(zO, {
          label: SM("crosshairSettings:bg_game"),
          selected: OM.selected,
          onClick: OM.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, LM.jsx)(PM.b, {
            name: "cube"
          })
        }), iO.map((MM => (0, LM.jsx)(zO, {
          label: SM(`crosshairSettings:bg_${MM}`),
          selected: !(null !== OM && void 0 !== OM && OM.selected) && MM === rM,
          style: jO(MM),
          onClick: () => {
            iM(MM)
          }
        }, MM)))]
      })
    }

    function mO(MM) {
      let {
        settings: rM,
        touch: iM,
        backdrop: OM,
        onChange: SM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)(), nM = function(MM) {
        var rM;
        return null !== (rM = PO.find((rM => (0, Ni.p)(rM.settings, MM, nO)))) && void 0 !== rM ? rM : null
      }(rM);
      return (0, LM.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": PM("crosshairSettings:presets"),
        children: PO.map((MM => {
          const aM = (null === nM || void 0 === nM ? void 0 : nM.id) === MM.id;
          return (0, LM.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": aM,
            "data-pad-focusable": !0,
            className: jM()("CrosshairPreset", {
              Selected: aM
            }),
            onClick: () => {
              SM(function(MM, rM) {
                return {
                  ...rM.settings,
                  growOnClick: MM.growOnClick,
                  forGuns: MM.forGuns
                }
              }(rM, MM))
            },
            children: [(0, LM.jsx)("div", {
              className: "CrosshairPresetStage",
              style: jO(OM),
              children: (0, LM.jsx)(QO.c, {
                settings: MM.settings,
                touch: iM,
                inPreview: !0
              })
            }), (0, LM.jsx)("div", {
              className: "CrosshairPresetName",
              children: PM(`crosshairSettings:preset_${MM.id}`)
            })]
          }, MM.id)
        }))
      })
    }
    var HO = iM(1754);

    function hO(MM, rM) {
      const [iM, SM] = (0, OM.useState)(!1), jM = () => {
        SM(!1)
      }, [aM, PM] = (0, OM.useState)(!1), nM = (0, OM.useRef)({
        growOnClick: MM.growOnClick,
        forGuns: MM.forGuns
      });
      (0, OM.useEffect)((() => {
        const rM = nM.current;
        nM.current = {
          growOnClick: MM.growOnClick,
          forGuns: MM.forGuns
        }, (MM.growOnClick && !rM.growOnClick || MM.forGuns && !rM.forGuns) && PM(!0)
      }), [MM.growOnClick, MM.forGuns]), (0, OM.useEffect)((() => {
        if (!aM) return;
        const MM = setTimeout((() => {
          PM(!1)
        }), 600);
        return () => {
          clearTimeout(MM)
        }
      }), [aM]);
      const QM = iM || aM;
      return {
        view: {
          pressed: QM,
          spread: QM && MM.forGuns && !MM.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: MM => {
            !MM.target.closest(rM) && (0, HO.c)(MM.currentTarget, MM.pointerId) && SM(!0)
          },
          onPointerUp: jM,
          onPointerCancel: jM,
          onLostPointerCapture: jM
        }
      }
    }

    function JO(MM) {
      let {
        settings: rM,
        touch: iM,
        backdrop: OM,
        className: SM,
        children: aM,
        label: PM
      } = MM;
      const nM = hO(rM, ".CrosshairStageControls");
      return (0, LM.jsxs)("div", {
        className: jM()("CrosshairStage", SM),
        style: jO(OM),
        ...nM.handlers,
        children: [(0, LM.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": PM,
          children: (0, LM.jsx)(QO.c, {
            settings: rM,
            touch: iM,
            inPreview: !0,
            ...nM.view
          })
        }), aM]
      })
    }
    const dO = "crosshairFullScreen";

    function yO(MM) {
      let {
        settings: rM,
        touch: iM,
        backdrop: SM,
        onBackdrop: nM,
        inGame: zM,
        onChange: mM,
        onClose: HM
      } = MM;
      const {
        t: hM
      } = (0, aM.A)(), JM = (0, OM.useRef)(null);
      (0, Ti.v)("popup", JM, HM),
      function(MM) {
        const rM = (0, OM.useRef)(MM);
        rM.current = MM, (0, OM.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [dO]: !0
          }, "");
          let MM = !1;
          const iM = () => {
            MM = !0, rM.current()
          };
          return window.addEventListener("popstate", iM), () => {
            var rM;
            window.removeEventListener("popstate", iM), !MM && null !== (rM = window.history.state) && void 0 !== rM && rM[dO] && window.history.back()
          }
        }), [])
      }(HM);
      const dM = (0, OM.useRef)(HM);
      dM.current = HM, (0, OM.useEffect)((() => {
        function MM(MM) {
          "Escape" === MM.key && (MM.stopPropagation(), dM.current())
        }
        return window.addEventListener("keydown", MM, !0), () => {
          window.removeEventListener("keydown", MM, !0)
        }
      }), []);
      const yM = hO(rM, ".CrosshairFullScreenPanel"),
        [lM, EM] = (0, OM.useState)(!0),
        UM = lM && zM;
      (0, OM.useEffect)((() => {
        if (UM) return bM.d.set({
          crosshairGameView: !0
        }), () => {
          bM.d.set({
            crosshairGameView: !1
          })
        }
      }), [UM]);
      const [GM, CM] = (0, OM.useState)(!0);
      return (0, qi.createPortal)((0, LM.jsxs)("div", {
        ref: JM,
        className: "CrosshairFullScreen",
        style: UM ? void 0 : jO(SM),
        ...yM.handlers,
        children: [(0, LM.jsx)(QO.c, {
          settings: rM,
          touch: iM,
          inEditor: !0,
          ...yM.view
        }), (0, LM.jsxs)("div", {
          className: jM()("CrosshairFullScreenPanel", {
            Collapsed: !GM
          }),
          children: [(0, LM.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, LM.jsx)(LO, {
              backdrop: SM,
              onChange: MM => {
                EM(!1), nM(MM)
              },
              game: zM ? {
                selected: UM,
                onSelect: () => {
                  EM(!0)
                }
              } : void 0
            }), (0, LM.jsx)(QM.V, {
              className: "CrosshairPanelToggle",
              ariaLabel: hM(GM ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                CM(!GM)
              },
              children: (0, LM.jsx)(PM.b, {
                name: GM ? "caret-up" : "pen"
              })
            }), (0, LM.jsx)(QM.e, {
              className: "CrosshairFullScreenDone",
              onClick: HM,
              padDefaultFocus: !0,
              children: hM("crosshairSettings:done")
            })]
          }), GM && (0, LM.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, LM.jsx)(mO, {
              settings: rM,
              touch: iM,
              backdrop: SM,
              onChange: mM
            }), (0, LM.jsx)(Ki, {
              settings: rM,
              onChange: mM
            })]
          })]
        })]
      }), document.body)
    }
    var lO = iM(2901),
      EO = iM(35003);

    function UO(MM) {
      let {
        settings: rM,
        onChange: iM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)(), nM = (0, EO.i)(rM), [zM, mM] = (0, lO.g)(), [HM, hM] = (0, OM.useState)(!1), JM = (0, OM.useRef)(null), [dM, yM] = (0, lO.g)(), [lM, EM] = (0, OM.useState)(!1);
      return (0, LM.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, LM.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, LM.jsxs)(QM.V, {
            className: jM()("CrosshairCopy", {
              ActiveSecondaryButton: zM
            }),
            onClick: () => {
              (0, lO.f)(nM, {
                useShareSheet: !1,
                onOutcome: MM => {
                  hM("failed" === MM), "copied" === MM && mM()
                }
              })
            },
            children: [(0, LM.jsx)(PM.b, {
              name: zM ? "check" : "copy"
            }), " ", SM(zM ? "general:copied" : "crosshairSettings:copy")]
          }), (0, LM.jsx)(GM.b, {
            className: "CrosshairPaste",
            domRef: JM,
            ariaLabel: SM("crosshairSettings:paste"),
            placeholderText: SM("crosshairSettings:paste"),
            onValueChange: MM => {
              const rM = (0, EO.f)(MM);
              EM(!rM && MM.trim().length >= EO.b), rM && (iM(rM), JM.current.value = "", yM())
            }
          })]
        }), HM && (0, LM.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: nM,
          "aria-label": SM("crosshairSettings:copy"),
          onFocus: MM => {
            MM.currentTarget.select()
          }
        }), (0, LM.jsxs)("div", {
          "aria-live": "polite",
          children: [lM && (0, LM.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: SM("crosshairSettings:pasteInvalid")
          }), dM && !lM && (0, LM.jsx)("div", {
            className: "CrosshairShareNote",
            children: SM("crosshairSettings:applied")
          })]
        })]
      })
    }
    var GO = iM(35006);
    let CO = "sky";

    function eO(MM) {
      let {
        showing: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)(), {
        isTouchScreen: SM,
        gameState: jM,
        clientEscMenuOptions: nM
      } = (0, bM.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), zM = (0, GO.f)(), [mM, HM] = (0, OM.useState)(CO), hM = MM => {
        CO = MM, HM(MM)
      }, [JM, dM] = (0, OM.useState)(!1);
      return (0, OM.useEffect)((() => {
        rM || dM(!1)
      }), [rM]), (0, LM.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, LM.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, LM.jsx)(JO, {
            className: "CrosshairPreviewStage",
            settings: zM,
            touch: SM,
            backdrop: mM,
            label: iM("crosshairSettings:preview"),
            children: (0, LM.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, LM.jsx)(LO, {
                backdrop: mM,
                onChange: hM
              }), (0, LM.jsxs)(QM.V, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  dM(!0)
                },
                children: [(0, LM.jsx)(PM.b, {
                  name: "expand"
                }), " ", iM("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, LM.jsx)("div", {
          className: "SettingBox",
          children: (0, LM.jsx)(mO, {
            settings: zM,
            touch: SM,
            backdrop: mM,
            onChange: GO.b
          })
        }), (0, LM.jsx)(UO, {
          settings: zM,
          onChange: GO.b
        }), SM && (0, LM.jsx)(Yi.c, {
          note: (0, fi.c)(SM, nM.touchActionButtons) ? iM("crosshairSettings:touchNote") : void 0
        }), (0, LM.jsx)(Ki, {
          settings: zM,
          onChange: GO.b
        }), JM && (0, LM.jsx)(yO, {
          settings: zM,
          touch: SM,
          backdrop: mM,
          onBackdrop: hM,
          inGame: "inGame" === jM,
          onChange: GO.b,
          onClose: () => {
            dM(!1)
          }
        })]
      })
    }
    var bO = iM(9461),
      wO = iM(1472),
      tO = iM(5393),
      gO = iM(35014),
      uO = iM(4613),
      RO = iM(2088),
      pO = iM(738);
    const WO = (0, OM.memo)((function() {
      const {
        clientEscMenuOptions: MM
      } = (0, bM.m)(["clientEscMenuOptions"]), {
        recording: rM,
        clipping: iM,
        hasClipBuffer: SM
      } = (0, Ar.j)("replayRecorder"), aM = (0, Ar.f)("connectedGame", (MM => MM.replay)), PM = (0, uO.m)(), nM = !1 === (0, JM.f)("canRecordReplays");
      (0, OM.useEffect)((() => {
        lM.gameBridge.send("setRecorderPrefs", {
          clipping: MM.enableClipping,
          clipSeconds: MM.clipDurationSeconds
        })
      }), [MM.enableClipping, MM.clipDurationSeconds]);
      const zM = PM || aM,
        mM = !zM && !nM,
        HM = rM || mM,
        hM = mM,
        dM = hM && iM && !rM;

      function yM() {
        HM && lM.gameBridge.send("toggleRecording", null)
      }
      return (0, LM.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, LM.jsxs)("div", {
          className: "SettingBox",
          children: [(0, LM.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: rM ? (0, LM.jsxs)(LM.Fragment, {
              children: [(0, LM.jsxs)(QM.J, {
                className: "ReplayViewerCategoryButton",
                onClick: yM,
                disabled: !HM,
                children: [(0, LM.jsx)("span", {
                  children: "Stop Recording"
                }), (0, LM.jsx)(RO.d, {
                  noaAction: "recordGame"
                })]
              }), (0, LM.jsx)(gO.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, LM.jsxs)(QM.e, {
              className: "ReplayViewerCategoryButton",
              onClick: yM,
              disabled: !HM,
              children: [(0, LM.jsx)("span", {
                children: "Start Recording"
              }), (0, LM.jsx)(RO.d, {
                noaAction: "recordGame"
              })]
            })
          }), nM && (0, LM.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), zM && !rM && (0, LM.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, LM.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, LM.jsx)(eM.c, {
            label: "Enable clipping",
            checked: MM.enableClipping,
            disabled: !hM,
            onClick: function(MM) {
              hM && bM.d.setClientEscMenuOptions({
                enableClipping: MM
              })
            },
            className: jM()({
              SettingBoxDisabled: !hM
            })
          }), (0, LM.jsx)(eM.h, {
            name: "Clip duration (seconds)",
            min: pO.k,
            max: pO.g,
            step: pO.c,
            initValue: MM.clipDurationSeconds,
            onChange: function(MM) {
              bM.d.setClientEscMenuOptions({
                clipDurationSeconds: MM
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !hM || !MM.enableClipping
          })]
        }), (0, LM.jsxs)("div", {
          className: "SettingBox",
          children: [(0, LM.jsxs)(QM.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              dM && lM.gameBridge.send("saveClip", null)
            },
            disabled: !dM,
            children: [(0, LM.jsx)("span", {
              children: "Record clip"
            }), (0, LM.jsx)(RO.d, {
              noaAction: "recordClip"
            })]
          }), MM.enableClipping && !SM && hM && !rM && (0, LM.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), rM && (0, LM.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, LM.jsxs)("div", {
          className: "SettingBox",
          children: [(0, LM.jsxs)(QM.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, uO.i)(!0), bM.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: PM,
            children: [(0, LM.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, LM.jsx)(RO.d, {
              noaAction: "replayViewerOpen"
            })]
          }), PM && (0, LM.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, LM.jsxs)("div", {
          className: "SettingBox",
          children: [(0, LM.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, LM.jsx)("iframe", {
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
    var sO = iM(2e3);
    const DO = {
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
        icon: () => (0, LM.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, LM.jsx)("path", {
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
      nh: {
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

    function kO() {
      return Promise.all([iM.e(89), iM.e(149), iM.e(148), iM.e(144)]).then((() => iM(42177))).then((MM => ({
        default: MM.ShaderPackCategory
      })), (MM => (console.error("Failed to load the shader pack settings", MM), {
        default: ZO
      })))
    }

    function ZO() {
      const {
        t: MM
      } = (0, aM.A)();
      return (0, LM.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: MM("shaderPack:tabLoadFailed")
      })
    }
    var oO = iM(1464),
      fO = iM(170);
    const YO = /party\s*voice/i;
    let NO = !1;

    function AO(MM) {
      return Object.keys(MM).some((MM => MM.startsWith("__reactFiber$")))
    }
    const xO = ".MenuSideBarBody, .MenuSideBarSection";

    function vO(MM) {
      var rM;
      return (null !== (rM = MM.textContent) && void 0 !== rM ? rM : "").replace(/\s+/g, " ").trim()
    }

    function FO(MM) {
      for (const rM of function(MM) {
          const rM = new Set;
          for (const iM of MM.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) rM.add(iM);
          for (const iM of [MM, ...MM.querySelectorAll(xO)])
            for (const MM of iM.children) rM.add(MM);
          return [...rM]
        }(MM))
        if (!AO(rM) || !rM.matches(xO) && YO.test(vO(rM))) return rM;
      return null
    }

    function BO(MM) {
      return MM.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const XO = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function IO(MM) {
      const rM = document.createTreeWalker(MM, NodeFilter.SHOW_TEXT, {
        acceptNode: MM => {
          var rM, iM;
          return XO.has(null !== (rM = null === (iM = MM.parentElement) || void 0 === iM ? void 0 : iM.tagName.toUpperCase()) && void 0 !== rM ? rM : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let jM = rM.nextNode(); null !== jM; jM = rM.nextNode()) {
        var iM;
        const MM = (null !== (iM = jM.textContent) && void 0 !== iM ? iM : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== MM) {
          var OM, SM;
          return (null !== (OM = null === (SM = MM.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === SM ? void 0 : SM[0]) && void 0 !== OM ? OM : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function KO(MM, rM) {
      const iM = BO(rM).slice(0, 40) || "blank";
      return `${(BO(MM.toLowerCase())||"none").slice(0,Math.max(23,fO.R-1-iM.length))}:${iM}`.slice(0, fO.R)
    }
    const qO = (0, OM.lazy)((() => iM.e(301).then((() => iM(42170))).then((MM => ({
        default: MM.BloxdInformation
      }))))),
      TO = (0, OM.lazy)(kO);

    function VO(MM) {
      return MM ? "general" : "account"
    }
    const cO = new Map,
      MS = (0, OM.memo)((function(MM) {
        let {
          show: rM,
          setBeforeResumeCallback: iM
        } = MM;
        (0, dM.d)();
        const {
          gameState: SM,
          openSettingsCategory: jM
        } = (0, bM.m)(["gameState", "openSettingsCategory"]), {
          userContext: nM
        } = (0, hM.b)(), {
          t: zM
        } = (0, aM.A)(), GM = (0, HM.b)(), CM = (0, JM.f)("minChunkAddDist"), eM = "inGame" === SM, [wM, uM] = (0, OM.useState)(VO(eM)), [RM, pM] = (0, OM.useState)(null), [WM, sM] = (0, OM.useState)([]), DM = (0, OM.useRef)(function() {
          const MM = new Date,
            rM = 6 * (MM.getMonth() + MM.getDate()) % Ur.t.length;
          return [...Ur.t, ...Ur.t].slice(rM, rM + 6)
        }()), kM = (0, OM.useRef)(null), ZM = (0, OM.useRef)(null), oM = (0, qr.e)(wO.h, (0, wO.d)()), fM = Object.keys(DO).filter((MM => {
          switch (MM) {
            case "replayViewer":
              return eM;
            case "developerTools":
              return nM.playerHasRank("developer") || !1;
            case "texturePack":
              return yM.featureFlags.settings.canChangeTexturePack;
            case "nh":
              return yM.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return yM.featureFlags.useSocialFeatures || null !== nM.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== gM.siteUsed;
            case "controller":
              return yM.featureFlags.useControllerSupport && (oM || "controller" === wM);
            default:
              return !0
          }
        }));
        (0, qr.d)("toggleFullCoordinateOverlay", (() => {
          const MM = ti("showCoordinates") && ti("showChunkCoordinates") && ti("showFPS");
          gi("showCoordinates", !MM), gi("showChunkCoordinates", !MM), gi("showFPS", !MM), GM()
        })), (0, qr.d)("updatedChunkLoadDist", (() => {
          GM()
        })), (0, OM.useEffect)((() => {
          if (pM(null), null === bM.d.get("openSettingsCategory")) {
            const MM = (0, oO.l)() ? cO.get(eM) : void 0;
            uM(MM && fM.includes(MM) ? MM : VO(eM))
          }
        }), [rM]), (0, OM.useEffect)((() => {
          if (rM && ZM.current) return function(MM) {
            if (NO) return () => {};
            let rM = null,
              iM = null;
            const OM = () => {
                var MM;
                null !== iM && (clearTimeout(iM), iM = null), null === (MM = rM) || void 0 === MM || MM.disconnect(), rM = null
              },
              SM = () => {
                const rM = FO(MM);
                null !== rM && (NO = !0, OM(), (0, Sr.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: KO(window.location.hostname, IO(rM))
                }))
              };
            return iM = setTimeout((() => {
              iM = null, SM(), NO || (rM = new MutationObserver(SM), rM.observe(MM, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), OM
          }(ZM.current)
        }), [rM]), (0, OM.useEffect)((() => {
          null !== jM && (uM(jM), cO.set(eM, jM), bM.d.set({
            openSettingsCategory: null
          }))
        }), [jM, eM]), (0, OM.useLayoutEffect)((() => {
          kM.current && (kM.current.scrollTop = 0)
        }), [wM, rM]), (0, OM.useEffect)((() => {
          "updateLog" === wM && (0, UM.e)().then(sM)
        }), [wM]), (0, OM.useEffect)((() => {
          if ((0, Ui.J)(CM)) return;
          const [MM, rM] = (0, Zi.e)(), [iM, OM] = (0, Hi.h)(CM), SM = (0, sO.f)(CM[0], MM, iM), jM = (0, sO.f)(CM[1], rM, OM);
          lM.gameBridge.send("setChunkAddDistance", {
            horizontal: SM,
            vertical: jM
          })
        }), [CM]);
        const YM = (0, OM.useCallback)((async () => {
          RM && (await RM(), pM(null))
        }), [RM]);

        function NM() {
          bM.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, OM.useEffect)((() => {
          iM((() => YM))
        }), [YM, iM]), (0, LM.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: rM ? {} : {
            display: "none"
          },
          children: [(0, LM.jsx)("div", {
            ref: ZM,
            className: "MenuSideBar",
            children: (0, LM.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, LM.jsx)(mM, {
                items: fM.map((MM => {
                  const rM = DO[MM].icon;
                  return {
                    id: MM,
                    faIcon: "string" === typeof rM ? rM : void 0,
                    iconElement: "string" === typeof rM ? void 0 : (0, LM.jsx)(rM, {}),
                    title: zM(DO[MM].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: wM,
                onClick: MM => {
                  !async function(MM) {
                    await YM(), uM(MM), cO.set(eM, MM)
                  }(MM)
                }
              })
            })
          }), (0, LM.jsxs)("div", {
            ref: kM,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === wM && (0, LM.jsx)(kr, {
              showing: rM,
              inGame: eM
            }), "general" === wM && (0, LM.jsx)(Xr, {
              inGame: eM
            }), "audio" === wM && (0, LM.jsx)(Ir, {}), "notifications" === wM && (0, LM.jsx)(mi, {}), "graphics" === wM && (0, LM.jsx)(ki, {
              minChunkAddDist: null !== CM && void 0 !== CM ? CM : [2, 2],
              getValue: ti,
              onChange: gi,
              setApplySettingsCallback: pM
            }), "controls" === wM && (0, LM.jsx)(oi.f, {}), "crosshair" === wM && (0, LM.jsx)(eO, {
              showing: rM
            }), "controller" === wM && yM.featureFlags.useControllerSupport && (0, LM.jsx)(bO.d, {}), yM.featureFlags.settings.canChangeTexturePack && "texturePack" === wM && (0, LM.jsx)(tO.c, {
              setApplySettingsCallback: pM
            }), yM.featureFlags.settings.canUseShaderPacks && "nh" === wM && (0, LM.jsx)(OM.Suspense, {
              fallback: null,
              children: (0, LM.jsx)(TO, {
                setApplySettingsCallback: pM
              })
            }), "updateLog" === wM && (0, LM.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, LM.jsx)("div", {
                className: "UpdateLogsContainer",
                children: WM.map(((MM, rM) => (0, LM.jsx)(EM.d, {
                  updateLog: MM,
                  index: rM,
                  close: NM
                }, rM)))
              })
            }), "information" === wM && (0, LM.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, LM.jsx)(OM.Suspense, {
                fallback: null,
                children: (0, LM.jsx)(qO, {})
              })
            }), "alternativeDomains" === wM && (0, LM.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, LM.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: zM("settingsMenu:unblockedDomainsDescription")
              }), (0, LM.jsx)("div", {
                className: "AlternativeDomainsList",
                children: DM.current.map((MM => (0, LM.jsxs)(QM.e, {
                  onClick: () => {
                    window.open(`https://${MM}`)
                  },
                  children: [(0, LM.jsx)(PM.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", MM]
                }, MM)))
              })]
            }), "replayViewer" === wM && (0, LM.jsx)(WO, {}), "developerTools" === wM && (0, LM.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, LM.jsx)(tM, {
                setApplySettingsCallback: pM
              })
            }), null !== RM && (0, LM.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, LM.jsx)(QM.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: YM,
                children: zM("general:apply")
              })
            })]
          })]
        })
      }));
    var rS = iM(2843),
      iS = iM(4035),
      OS = iM(2446);
    const SS = (0, OM.lazy)((() => Promise.resolve().then((() => iM(5035))).then((MM => {
        MM.needGameClientAfterPaint();
        const rM = MM.matchmakingLibrariesPromise.then((MM => (0, rS.e)(MM.loadCharacterCustomisationUI(), (MM => MM.CharacterCustomisationUI))));
        return Promise.all([MM.ensureGameSetup(), rM]).then((MM => {
          let [, rM] = MM;
          return rM
        }))
      })))),
      jS = "openCustomisationTab";

    function aS(MM) {
      var rM, iM, SM;
      let {
        show: jM
      } = MM;
      const {
        userContext: aM
      } = (0, hM.b)(), PM = (0, NM.usePurchasesAllowed)(), nM = (0, OM.useRef)(null);
      var QM, zM;
      aM !== uM.NULL_USER_CONTEXT && (null === (rM = nM.current) || void 0 === rM ? void 0 : rM.whamm) !== aM.whamm && (nM.current = {
        whamm: aM.whamm,
        mountKey: (null !== (QM = null === (zM = nM.current) || void 0 === zM ? void 0 : zM.mountKey) && void 0 !== QM ? QM : -1) + 1
      });
      const [HM, JM] = (0, OM.useState)("characters");
      if ((0, qr.d)(jS, JM), !jM) return null;
      const dM = null !== (0, iS.k)(Date.now()),
        yM = aM.getOwnedCosmeticPacks(),
        lM = Ur.Lb.filter((MM => "pet" === MM || "aura" === MM ? dM || (0, OS.o)(MM).some((rM => rM !== `${MM}_none` && (0, OS.z)(MM, rM, yM))) : "cape" !== MM && "nameColour" !== MM || aM.getPlayerRanks().includes("super") || PM)).map((MM => ({
          id: MM,
          faIcon: Ur.C[MM],
          title: Ur.F[MM],
          redDot: !1
        })));
      return (0, LM.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, LM.jsx)("div", {
          className: "MenuSideBar",
          children: (0, LM.jsx)(mM, {
            items: lM,
            selectedItemId: HM,
            onClick: MM => {
              JM(MM)
            }
          })
        }), (0, LM.jsx)("div", {
          className: "MenuBody",
          children: (0, LM.jsx)(OM.Suspense, {
            fallback: (0, LM.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, LM.jsx)(CM.d, {})
            }),
            children: (0, LM.jsx)(SS, {
              selectedTab: HM
            }, null !== (iM = null === (SM = nM.current) || void 0 === SM ? void 0 : SM.mountKey) && void 0 !== iM ? iM : 0)
          })
        })]
      })
    }
    var PS = iM(1533),
      nS = iM(1541),
      QS = iM(35017),
      zS = iM(4917),
      LS = iM(3827),
      mS = iM(3868),
      HS = iM(35040),
      hS = iM(9374),
      JS = iM(35026),
      dS = iM(35035),
      yS = iM(2026),
      lS = iM(2006),
      ES = iM(5306),
      US = iM(1270),
      GS = iM(1229),
      CS = iM(1750),
      eS = iM(9442),
      bS = iM(2647),
      wS = iM(2653);

    function tS(MM) {
      return MM ? Object.keys(MM).sort(((rM, iM) => {
        var OM, SM, jM, aM;
        const PM = (null !== (OM = null === (SM = MM[iM]) || void 0 === SM ? void 0 : SM.sortPriority) && void 0 !== OM ? OM : 0) - (null !== (jM = null === (aM = MM[rM]) || void 0 === aM ? void 0 : aM.sortPriority) && void 0 !== jM ? jM : 0);
        return 0 !== PM ? PM : rM.localeCompare(iM)
      })) : []
    }
    const gS = [{
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

    function uS(MM) {
      for (const {
          threshold: rM,
          suffix: iM
        }
        of gS)
        if (MM >= rM) {
          const OM = MM / rM;
          return OM >= 100 ? `${Math.floor(OM)}${iM}` : OM >= 10 ? `${OM.toFixed(1).replace(/\.0$/,"")}${iM}` : `${OM.toFixed(2).replace(/\.?0+$/,"")}${iM}`
        } return String(MM)
    }
    var RS = iM(5417);
    const pS = {
        normal: "0.8em",
        big: "1em"
      },
      WS = (0, OM.memo)((function(MM) {
        let {
          item: rM,
          amount: iM = 0,
          size: OM = "normal",
          tier: SM = null
        } = MM;
        return (0, LM.jsx)("div", {
          className: jM()("SmpSlot", `SmpSlot-${OM}`),
          children: rM && (0, LM.jsx)(yS.b, {
            itemName: rM,
            amount: iM > 1 ? iM : 0,
            amountFontSize: pS[OM],
            enchantmentTier: SM
          })
        })
      }));

    function sS(MM) {
      let {
        amount: rM,
        exact: iM = !1,
        className: OM
      } = MM;
      return (0, LM.jsxs)("span", {
        className: jM()("SmpGold", OM),
        children: [(0, LM.jsx)("span", {
          className: "SmpCoin",
          children: (0, LM.jsx)(yS.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), iM ? rM.toLocaleString("en-US") : uS(rM)]
      })
    }

    function DS(MM) {
      let {
        count: rM = 5,
        grid: iM = !1
      } = MM;
      return (0, LM.jsx)("div", {
        className: iM ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: rM
        }, ((MM, rM) => (0, LM.jsxs)("div", {
          className: jM()(iM ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, LM.jsx)("div", {
            className: jM()("SmpSlot", iM ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, LM.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, LM.jsx)("b", {}), (0, LM.jsx)("small", {})]
          }), (0, LM.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, rM)))
      })
    }

    function kS(MM) {
      let {
        title: rM,
        children: iM
      } = MM;
      return (0, LM.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, LM.jsx)("b", {
          children: rM
        }), iM && (0, LM.jsx)("small", {
          children: iM
        })]
      })
    }

    function ZS(MM) {
      let {
        entry: rM
      } = MM;
      return (0, LM.jsx)(kS, {
        title: (0, LM.jsx)(lS.b, {
          text: rM.item.customTitle
        }),
        children: (0, LM.jsx)(lS.b, {
          text: rM.item.description
        })
      })
    }

    function oS(MM) {
      return (0, LM.jsx)(RS.e, {
        ...MM,
        className: jM()("SmpChoice", MM.className),
        reselectable: !0
      })
    }

    function fS() {
      return (0, LM.jsx)("span", {
        className: "SmpLoader",
        children: (0, LM.jsx)(CM.d, {})
      })
    }

    function YS(MM) {
      let {
        value: rM,
        onChange: iM,
        min: SM = 1,
        max: jM,
        step: aM = 1,
        label: PM
      } = MM;
      const nM = (0, OM.useRef)(null),
        QM = (0, OM.useRef)(rM);
      QM.current = rM;
      const [zM, mM] = (0, OM.useState)(null), HM = MM => Math.max(SM, Math.min(jM, Math.floor(MM))), hM = MM => {
        const rM = QM.current,
          OM = "function" === typeof aM ? aM(rM, MM) : aM,
          SM = HM(rM + OM * MM);
        QM.current = SM, iM(SM)
      };
      (0, OM.useEffect)((() => {
        if (null === zM) return;
        let MM;
        const rM = () => {
            mM(null)
          },
          iM = setTimeout((() => {
            MM = setInterval((() => {
              hM(zM);
              const MM = QM.current;
              (zM > 0 ? MM >= jM : MM <= SM) && rM()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", rM), window.addEventListener("pointercancel", rM), window.addEventListener("blur", rM), () => {
          clearTimeout(iM), clearInterval(MM), window.removeEventListener("pointerup", rM), window.removeEventListener("pointercancel", rM), window.removeEventListener("blur", rM)
        }
      }), [zM]), (0, OM.useEffect)((() => {
        const MM = nM.current;
        MM && document.activeElement !== MM && MM.value !== String(rM) && (MM.value = String(rM))
      }), [rM]), (0, OM.useEffect)((() => {
        const MM = nM.current;
        if (!MM) return;
        const rM = () => {
          MM.value = String(QM.current)
        };
        return MM.addEventListener("blur", rM), () => {
          MM.removeEventListener("blur", rM)
        }
      }), []);
      const JM = MM => (0, LM.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${MM>0?"More":"Less"} ${PM}`,
        disabled: MM > 0 ? rM >= jM : rM <= SM,
        onPointerDown: rM => {
          0 === rM.button && (hM(MM), mM(MM))
        },
        onKeyDown: rM => {
          "Enter" !== rM.key && " " !== rM.key || hM(MM)
        },
        onContextMenu: MM => {
          MM.preventDefault()
        },
        children: MM > 0 ? "+" : "\u2212"
      });
      return (0, LM.jsxs)("div", {
        className: "SmpStepper",
        children: [JM(-1), (0, LM.jsx)(GM.b, {
          className: "SmpStepperInput",
          domRef: nM,
          defaultValue: String(rM),
          ariaLabel: PM,
          type: "text",
          blurOnEnter: !0,
          onValueChange: MM => {
            const rM = MM.replace(/[^\d]/g, "");
            nM.current && rM !== MM && (nM.current.value = rM), "" !== rM && iM(HM(Number(rM)))
          }
        }), JM(1)]
      })
    }

    function NS(MM) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, MM))) - 1))
    }
    var AS = iM(35037),
      xS = iM(1242);
    const vS = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    xS.v, fM.Ec.length;
    new Map;
    var FS = iM(3693);

    function BS(MM, rM) {
      var iM;
      return rM && (null === (iM = MM[rM]) || void 0 === iM ? void 0 : iM.smp) || null
    }

    function XS(MM, rM) {
      const iM = [];
      for (const SM of tS(MM)) {
        var OM;
        const jM = MM[SM];
        (null === (OM = jM.smp) || void 0 === OM ? void 0 : OM.kind) === rM && iM.push({
          key: SM,
          item: jM,
          meta: jM.smp
        })
      }
      return iM
    }

    function IS(MM, rM) {
      var iM;
      return null !== (iM = XS(MM, rM)[0]) && void 0 !== iM ? iM : null
    }
    const KS = "50% 0% 50% 0%",
      qS = [{
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

    function TS(MM) {
      const rM = MM - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: iM,
          suffix: OM
        }
        of qS)
        if (rM >= iM) return `${Math.floor(rM/iM)}${OM}`;
      return "<1s"
    }

    function VS(MM) {
      const rM = MM.map(hS.d),
        iM = [];
      return rM.forEach(((MM, OM) => {
        const SM = function(MM) {
            const rM = MM.match(/\d+/);
            return rM ? Number(rM[0]) : 0
          }(MM),
          jM = OM === rM.length - 1;
        (jM || 1 === SM || 10 === SM || 100 === SM) && iM.push({
          label: MM,
          quantity: SM,
          isAll: jM
        })
      })), iM
    }
    let cS = null;

    function Mj(MM, rM) {
      const iM = rM.trim().toLowerCase();
      if (!iM) return [];
      const OM = MM => {
          if (MM === iM) return 0;
          if (MM.startsWith(iM)) return 1;
          const rM = MM.indexOf(iM);
          return -1 === rM ? -1 : 2 + rM
        },
        SM = [];
      for (const PM of MM) {
        const MM = [OM(PM.lowerLabel), OM(PM.lowerName)].filter((MM => -1 !== MM));
        MM.length && SM.push({
          item: PM,
          rank: Math.min(...MM)
        })
      }
      if (SM.length > 0) return SM.sort(((MM, rM) => MM.rank - rM.rank)).map((MM => MM.item));
      const jM = [...iM],
        aM = MM => {
          let rM = 0;
          for (const iM of jM) {
            if (rM = MM.indexOf(iM, rM), -1 === rM) return !1;
            rM++
          }
          return !0
        };
      return MM.filter((MM => aM(MM.lowerLabel) || aM(MM.lowerName)))
    }

    function rj(MM, rM) {
      var iM;
      return null !== (iM = null === MM || void 0 === MM ? void 0 : MM[rM]) && void 0 !== iM ? iM : rM
    }

    function ij(MM, rM) {
      const iM = MM.userInput;
      return void 0 !== rM && "dropdown" === (null === iM || void 0 === iM ? void 0 : iM.type) && iM.dropdownOptions.map(hS.d).includes(rM) ? rM : function(MM) {
        const rM = MM.userInput;
        if ("dropdown" !== (null === rM || void 0 === rM ? void 0 : rM.type) || 0 === rM.dropdownOptions.length) return null;
        const iM = rM.dropdownOptions.map(hS.d);
        return rM.initialValue && iM.includes(rM.initialValue) ? rM.initialValue : iM[iM.length - 1]
      }(MM)
    }

    function Oj(MM) {
      return void 0 === MM ? "" : JSON.stringify(MM)
    }
    const Sj = (0, OM.createContext)(null);

    function jj() {
      return (0, OM.useContext)(Sj)
    }
    var aj = iM(2932);
    const Pj = (0, OM.memo)((function(MM) {
        let {
          name: rM,
          label: iM,
          onPick: OM
        } = MM;
        return (0, LM.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: iM,
          onClick: () => {
            OM(rM)
          },
          children: [(0, LM.jsx)(WS, {
            item: rM,
            size: "big"
          }), (0, LM.jsx)("span", {
            children: iM
          })]
        })
      })),
      nj = (0, OM.memo)((function(MM) {
        let {
          items: rM,
          query: iM,
          onPick: SM
        } = MM;
        const {
          t: jM
        } = (0, aM.A)(), [PM, nM] = (0, OM.useState)(new Set), QM = (0, OM.useMemo)((() => function(MM) {
          const rM = new Map;
          for (const iM of MM) {
            let MM = rM.get(iM.category);
            MM || (MM = [], rM.set(iM.category, MM)), MM.push(iM)
          }
          return [...vS, "other"].filter((MM => rM.has(MM))).map((MM => ({
            category: MM,
            items: rM.get(MM)
          })))
        }(rM)), [rM]), zM = (0, OM.useMemo)((() => Mj(rM, iM).slice(0, 60)), [rM, iM]);
        return iM.trim() ? 0 === zM.length ? (0, LM.jsx)(kS, {
          title: jM("smpShop:noItemsFound", {
            query: iM.trim()
          }),
          children: jM("smpShop:tryShorterName")
        }) : (0, LM.jsx)(aj.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: KS,
          observerUpdateDeps: [iM],
          children: zM.map((MM => (0, LM.jsx)(Pj, {
            name: MM.name,
            label: MM.label,
            onPick: SM
          }, MM.name)))
        }) : (0, LM.jsx)(LM.Fragment, {
          children: QM.map((MM => {
            let {
              category: rM,
              items: iM
            } = MM;
            const OM = PM.has(rM) || iM.length <= 48,
              aM = OM ? iM : iM.slice(0, 48);
            return (0, LM.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, LM.jsxs)("h4", {
                children: [jM("other" === rM ? "smpShop:otherItems" : `creativeInventory:${rM}`), !OM && (0, LM.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    nM(new Set([...PM, rM]))
                  },
                  children: jM("smpShop:showAll", {
                    count: iM.length
                  })
                })]
              }), (0, LM.jsx)(aj.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: KS,
                observerUpdateDeps: [OM],
                children: aM.map((MM => (0, LM.jsx)(Pj, {
                  name: MM.name,
                  label: MM.label,
                  onPick: SM
                }, MM.name)))
              })]
            }, rM)
          }))
        })
      }));

    function Qj(MM, rM) {
      const {
        searched: iM,
        shown: SM,
        searchFor: jM,
        loading: aM
      } = function(MM, rM) {
        var iM;
        const SM = jj(),
          [jM, aM] = (0, OM.useState)(void 0),
          PM = (0, OM.useRef)(void 0),
          nM = (0, OM.useRef)(0),
          QM = (0, OM.useRef)(void 0),
          zM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.meta.item) && void 0 !== iM ? iM : null,
          LM = !!MM && SM.isPending(MM.key);
        (0, OM.useEffect)((() => {
          if (!MM || LM || !rM || void 0 === jM || jM === zM) return;
          const iM = jM === PM.current && SM.gaveUpAt(MM.key) > nM.current && QM.current !== jM;
          (jM !== PM.current || iM) && SM.act(MM.key, null !== jM && void 0 !== jM ? jM : "*", iM) && (iM && (QM.current = jM), PM.current = jM, nM.current = Date.now())
        }), [MM, LM, rM, jM, zM, SM]);
        const mM = (0, OM.useCallback)((MM => {
            PM.current = void 0, QM.current = void 0, aM(MM)
          }), []),
          HM = void 0 !== jM && jM !== zM && (LM || PM.current !== jM);
        return {
          searched: zM,
          shown: HM ? jM : zM,
          searchFor: mM,
          loading: HM || LM || null !== zM && !rM
        }
      }(MM, rM), PM = (0, OM.useMemo)((() => function() {
        var MM;
        let rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const SM = `${(0,FS.h)()}\x1f${rM.join("\x1e")}\x1f${iM.join("\x1e")}\x1f${JSON.stringify(OM)}`;
        if ((null === (MM = cS) || void 0 === MM ? void 0 : MM.key) === SM) return cS.items;
        const jM = new Set(iM),
          aM = new Set,
          PM = [],
          nM = (MM, rM) => {
            var iM;
            if (!MM || aM.has(MM) || jM.has(MM)) return;
            aM.add(MM);
            const SM = null !== (iM = OM[MM]) && void 0 !== iM ? iM : MM;
            PM.push({
              name: MM,
              label: SM,
              lowerLabel: SM.toLowerCase(),
              lowerName: MM.toLowerCase(),
              category: rM
            })
          };
        for (const zM of (0, AS.creativeItemIds)()) {
          var QM;
          (0, AS.itemIsDisabled)(zM, !0, !0, !1) || (0, AS.showOnlyInCreativeSearch)(zM) || nM((0, FS.g)(zM), null !== (QM = (0, AS.creativeCategoryOf)(zM)) && void 0 !== QM ? QM : "other")
        }
        for (const zM of rM) nM(zM, "other");
        return cS = {
          key: SM,
          items: PM
        }, PM
      }(null === MM || void 0 === MM ? void 0 : MM.meta.extra, null === MM || void 0 === MM ? void 0 : MM.meta.excluded, null === MM || void 0 === MM ? void 0 : MM.meta.names)), [null === MM || void 0 === MM ? void 0 : MM.meta.extra, null === MM || void 0 === MM ? void 0 : MM.meta.excluded, null === MM || void 0 === MM ? void 0 : MM.meta.names]), [nM, QM] = (0, OM.useState)(""), [zM, LM] = (0, OM.useState)(0), [mM, HM] = (0, OM.useState)("recent"), hM = (0, OM.useCallback)((MM => {
        QM(""), LM((MM => MM + 1)), jM(MM)
      }), [jM]), JM = "browse" === mM || "" !== nM.trim();
      return {
        searched: iM,
        shown: SM,
        searchFor: jM,
        loading: aM,
        catalogue: PM,
        names: null === MM || void 0 === MM ? void 0 : MM.meta.names,
        query: nM,
        setQuery: QM,
        searchBoxKey: zM,
        pickItem: hM,
        setView: HM,
        browsing: JM
      }
    }

    function zj(MM) {
      let {
        browser: rM,
        children: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)(), SM = jj();
      return (0, LM.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, LM.jsx)("div", {
          className: "SmpSearch",
          children: (0, LM.jsx)(GM.b, {
            className: "SmpSearchInput",
            placeholderText: OM("smpShop:searchPlaceholder"),
            defaultValue: rM.query,
            onValueChange: MM => {
              rM.setQuery(MM), rM.searched && MM.trim() && rM.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const MM = Mj(rM.catalogue, rM.query)[0];
              MM ? rM.pickItem(MM.name) : rM.query.trim() && SM.notify(OM("smpShop:noItemsFound", {
                query: rM.query.trim()
              }))
            }
          }, rM.searchBoxKey)
        }), iM]
      })
    }

    function Lj(MM) {
      let {
        browser: rM,
        recentLabel: iM,
        children: OM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)();
      return (0, LM.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, LM.jsx)(oS, {
          options: [{
            value: "recent",
            label: iM
          }, {
            value: "browse",
            label: SM("smpShop:browseItems")
          }],
          value: rM.browsing ? "browse" : "recent",
          onChange: rM.setView,
          ariaLabel: SM("smpShop:show")
        }), !rM.browsing && OM]
      })
    }

    function mj(MM) {
      let {
        item: rM,
        names: iM,
        summary: OM,
        onBack: SM,
        children: jM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)();
      return (0, LM.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, LM.jsx)(QM.c, {
          className: "SmpBackButton",
          onClick: SM,
          children: PM("general:back")
        }), (0, LM.jsx)(WS, {
          item: rM,
          size: "big"
        }), (0, LM.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, LM.jsx)("b", {
            children: rj(iM, rM)
          }), OM && (0, LM.jsx)("small", {
            children: OM
          })]
        }), jM]
      })
    }

    function Hj(MM) {
      let {
        browser: rM,
        className: iM,
        action: OM,
        above: SM,
        list: aM,
        summary: PM,
        recentLabel: nM,
        listControls: QM,
        onBack: zM
      } = MM;
      return (0, LM.jsxs)("div", {
        className: jM()("SmpScreen", iM),
        children: [(0, LM.jsx)(zj, {
          browser: rM,
          children: OM
        }), rM.shown && (0, LM.jsx)(mj, {
          item: rM.shown,
          names: rM.names,
          summary: !rM.loading && PM,
          onBack: () => {
            null === zM || void 0 === zM || zM(), rM.searchFor(null)
          },
          children: QM
        }), SM, rM.shown ? aM : (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsx)(Lj, {
            browser: rM,
            recentLabel: nM,
            children: QM
          }), rM.browsing ? (0, LM.jsx)(nj, {
            items: rM.catalogue,
            query: rM.query,
            onPick: rM.pickItem
          }) : aM]
        })]
      })
    }

    function hj(MM, rM) {
      const iM = MM.map((MM => {
        let {
          meta: rM
        } = MM;
        return rM.pricePerItem
      }));
      return "min" === rM ? Math.min(...iM) : Math.max(...iM)
    }
    var Jj = iM(7077);
    const dj = (0, OM.memo)((function(MM) {
      var rM;
      const {
        t: iM
      } = (0, aM.A)(), OM = null === MM.seller, SM = MM.quantity * MM.pricePerItem;
      return (0, LM.jsxs)("div", {
        className: MM.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, LM.jsx)(WS, {
          item: MM.item,
          amount: MM.quantity,
          size: MM.grid ? "big" : "normal",
          tier: MM.tier
        }), (0, LM.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, LM.jsx)("b", {
            children: (0, LM.jsx)(lS.b, {
              text: null !== (rM = MM.title) && void 0 !== rM ? rM : `${MM.quantity}x ${MM.item}`
            })
          }), (0, LM.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, LM.jsx)("span", {
              children: OM ? iM("smpShop:you") : (0, LM.jsx)(lS.b, {
                text: [{
                  entityName: MM.seller
                }]
              })
            }), (0, LM.jsx)("span", {
              children: iM("smpShop:timeLeft", {
                time: TS(MM.expiresAt)
              })
            })]
          })]
        }), (0, LM.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, LM.jsx)(sS, {
            amount: MM.pricePerItem
          }), (0, LM.jsx)("small", {
            children: iM("smpShop:each")
          })]
        }), (0, LM.jsx)(QM.e, {
          className: "SmpBuyButton",
          disabled: OM || !MM.canAfford && !MM.busy,
          loading: MM.busy,
          onClick: () => {
            MM.onBuy(MM.itemKey)
          },
          children: OM ? iM("smpShop:yours") : (0, LM.jsx)(sS, {
            amount: SM
          })
        })]
      })
    }));

    function yj(MM) {
      let {
        view: rM,
        onChange: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)();
      return (0, LM.jsx)(RS.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: OM("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, LM.jsx)(PM.b, {
            name: "list"
          }),
          ariaLabel: OM("smpShop:listView")
        }, {
          value: "grid",
          label: (0, LM.jsx)(PM.b, {
            name: "grid-2"
          }),
          ariaLabel: OM("smpShop:gridView")
        }],
        value: rM,
        onChange: iM
      })
    }

    function lj(MM) {
      let {
        entries: rM,
        view: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)(), SM = jj(), jM = "grid" === iM;
      return (0, LM.jsxs)(LM.Fragment, {
        children: [!jM && (0, LM.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, LM.jsx)("span", {}), (0, LM.jsx)("span", {
            children: OM("smpShop:columnItem")
          }), (0, LM.jsx)("span", {
            children: OM("smpShop:columnPriceEach")
          }), (0, LM.jsx)("span", {
            children: OM("smpShop:columnTotal")
          })]
        }), (0, LM.jsx)(aj.e, {
          lazyLoadedClassName: jM ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: KS,
          observerUpdateDeps: [rM.length],
          children: rM.map((MM => {
            var rM, iM;
            let {
              key: OM,
              item: aM,
              meta: PM
            } = MM;
            const nM = PM.quantity * PM.pricePerItem;
            return (0, LM.jsx)(dj, {
              itemKey: OM,
              item: PM.item,
              title: aM.customTitle,
              quantity: PM.quantity,
              pricePerItem: PM.pricePerItem,
              seller: PM.seller,
              expiresAt: PM.expiresAt,
              tier: null !== (rM = null === (iM = aM.enchant) || void 0 === iM ? void 0 : iM.tier) && void 0 !== rM ? rM : null,
              busy: SM.isPending(OM) || null !== PM.seller && !1 === aM.canBuy,
              canAfford: SM.canAfford(aM, nM),
              grid: jM,
              onBuy: SM.act
            }, OM)
          }))
        }, iM)]
      })
    }
    const Ej = [1, 10, 100],
      Uj = [1, 10, 100, 999];

    function Gj(MM) {
      var rM, iM, SM, nM, zM, mM, HM, hM, JM, dM;
      const {
        t: yM
      } = (0, aM.A)(), lM = jj(), {
        creator: EM,
        mode: UM
      } = MM, [CM, eM] = (0, OM.useState)(null !== (rM = null === EM || void 0 === EM ? void 0 : EM.meta.item) && void 0 !== rM ? rM : null), [bM, wM] = (0, OM.useState)(1), [tM, gM] = (0, OM.useState)(0), [uM, RM] = (0, OM.useState)(""), [pM, WM] = (0, OM.useState)(0), sM = (0, OM.useRef)(CM), DM = (0, OM.useRef)(!1), [kM, ZM] = (0, OM.useState)(!1), oM = null !== (iM = null === EM || void 0 === EM ? void 0 : EM.meta.item) && void 0 !== iM ? iM : null, fM = null !== (SM = null === EM || void 0 === EM ? void 0 : EM.meta.owned) && void 0 !== SM ? SM : 0;
      (0, OM.useEffect)((() => {
        MM.searching || null === oM || oM === sM.current || (sM.current = oM, DM.current = !1, eM(oM), gM(0), wM("list" === UM ? Math.max(1, fM) : 1))
      }), [oM, MM.searching]);
      const YM = !!EM && !!CM && EM.meta.item === CM,
        NM = YM ? EM.meta.owned : null !== (nM = null === (zM = MM.inventory) || void 0 === zM || null === (mM = zM.find((MM => MM.item === CM))) || void 0 === mM ? void 0 : mM.quantity) && void 0 !== nM ? nM : 0,
        AM = "list" === UM ? Math.max(1, NM) : 45954,
        xM = null !== (HM = MM.prices[0]) && void 0 !== HM ? HM : null,
        vM = MM.prices.length ? Math.round(MM.prices.reduce(((MM, rM) => MM + rM), 0) / MM.prices.length) : null,
        FM = null === (hM = MM.inventory) || void 0 === hM || null === (JM = hM.find((MM => MM.item === CM))) || void 0 === JM ? void 0 : JM.sellPrice;
      (0, OM.useEffect)((() => {
        var MM;
        YM && (wM((MM => "list" === UM ? Math.min(Math.max(1, MM), Math.max(1, NM)) : MM)), DM.current || gM(null !== (MM = null !== xM && void 0 !== xM ? xM : vM) && void 0 !== MM ? MM : Math.max(1, null !== FM && void 0 !== FM ? FM : 1)))
      }), [YM, NM, CM, xM, vM]);
      const BM = MM => {
          DM.current = !0, gM(MM)
        },
        XM = rM => {
          var iM, OM, SM;
          sM.current = rM, DM.current = !1, ZM(!1), RM(""), WM((MM => MM + 1)), eM(rM), gM(0), wM("list" === UM && null !== (iM = null === (OM = MM.inventory) || void 0 === OM || null === (SM = OM.find((MM => MM.item === rM))) || void 0 === SM ? void 0 : SM.quantity) && void 0 !== iM ? iM : 1), (null === EM || void 0 === EM ? void 0 : EM.meta.item) !== rM && MM.onPickItem(rM)
        },
        IM = bM * tM,
        KM = "list" === UM && null !== EM && void 0 !== EM && EM.meta.fee ? function(MM, rM) {
          const iM = Math.max(0, rM - MM.taxFreeAllowance);
          return Math.ceil(Math.round(iM * MM.rate * 1e6) / 1e6)
        }(EM.meta.fee, IM) : 0,
        qM = !!EM && lM.isPending(EM.key),
        TM = YM && !MM.searching && bM >= 1 && tM >= 1 && ("order" === UM || NM >= bM) && !qM,
        VM = !!CM && !YM && !MM.searching && bM >= 1 && tM >= 1,
        cM = () => {
          TM ? lM.act(EM.key, `${bM}|${tM}`) : VM && (MM.onPickItem(CM), ZM(!0))
        };
      (0, OM.useEffect)((() => {
        kM && YM && !MM.searching && (ZM(!1), cM())
      }), [kM, YM, MM.searching]);
      const Mr = !!CM && !YM && (MM.searching || kM),
        rr = CM ? rj(MM.names, CM) : "",
        ir = (0, OM.useMemo)((() => Mj(MM.catalogue, uM).slice(0, 8)), [MM.catalogue, uM]),
        Or = ("list" === UM ? Ej.filter((MM => MM < NM)) : Uj).map((MM => ({
          value: MM,
          label: String(MM)
        })));
      "list" === UM && NM > 0 && Or.push({
        value: NM,
        label: yM("smpShop:all", {
          count: NM
        })
      });
      const Sr = [];
      return null !== xM && (xM > 1 && Sr.push({
        value: xM - 1,
        label: yM("smpShop:undercut", {
          price: uS(xM - 1)
        })
      }), Sr.push({
        value: xM,
        label: yM("smpShop:lowest", {
          price: uS(xM)
        })
      })), null !== vM && vM !== xM && Sr.push({
        value: vM,
        label: yM("smpShop:average", {
          price: uS(vM)
        })
      }), (0, LM.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, LM.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, LM.jsx)("b", {
            children: yM("list" === UM ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, LM.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": yM("smpShop:close"),
            onClick: MM.onClose,
            children: (0, LM.jsx)(PM.b, {
              name: "xmark"
            })
          })]
        }), "list" === UM && (0, LM.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (dM = MM.inventory) && void 0 !== dM && dM.length ? MM.inventory.map((MM => {
            let {
              item: rM,
              quantity: iM
            } = MM;
            return (0, LM.jsx)("button", {
              type: "button",
              title: rM,
              className: jM()("SmpPickerSlot", {
                SmpPickerSlotOn: rM === CM
              }),
              onClick: () => {
                XM(rM)
              },
              children: (0, LM.jsx)(WS, {
                item: rM,
                amount: iM
              })
            }, rM)
          })) : (0, LM.jsx)("span", {
            className: "SmpMuted",
            children: yM("smpShop:nothingToList")
          })
        }), ("list" === UM || !CM) && (0, LM.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, LM.jsx)(GM.b, {
            className: "SmpSearchInput",
            placeholderText: yM("list" === UM ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: uM,
            onValueChange: RM,
            blurOnEnter: !0,
            onEnter: () => {
              ir[0] && XM(ir[0].name)
            }
          }, pM), ir.length > 0 && (0, LM.jsx)("div", {
            className: "SmpPicker",
            children: ir.map((MM => {
              let {
                name: rM
              } = MM;
              return (0, LM.jsx)("button", {
                type: "button",
                title: rM,
                className: jM()("SmpPickerSlot", {
                  SmpPickerSlotOn: rM === CM
                }),
                onClick: () => {
                  XM(rM)
                },
                children: (0, LM.jsx)(WS, {
                  item: rM
                })
              }, rM)
            }))
          })]
        }), CM && (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsxs)("div", {
            className: "SmpPickedName",
            children: [rr, Mr && (0, LM.jsx)(fS, {})]
          }), (0, LM.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, LM.jsxs)("div", {
              className: "SmpField",
              children: [(0, LM.jsxs)("span", {
                children: [yM("smpShop:quantity"), "list" === UM && YM && (0, LM.jsx)("small", {
                  children: yM("smpShop:youHave", {
                    count: NM
                  })
                })]
              }), (0, LM.jsx)(YS, {
                value: bM,
                onChange: wM,
                max: AM,
                label: yM("smpShop:quantity")
              }), (0, LM.jsx)(oS, {
                options: Or,
                value: bM,
                onChange: wM,
                ariaLabel: yM("smpShop:quantity")
              })]
            }), (0, LM.jsxs)("div", {
              className: "SmpField",
              children: [(0, LM.jsx)("span", {
                children: yM("smpShop:pricePerItem")
              }), (0, LM.jsx)(YS, {
                value: Math.max(1, tM),
                onChange: BM,
                max: 9999999,
                step: NS,
                label: yM("smpShop:pricePerItem")
              }), (0, LM.jsx)(oS, {
                options: Sr,
                value: tM,
                onChange: BM,
                ariaLabel: yM("smpShop:pricePerItem")
              })]
            })]
          }), "list" === UM && (0, LM.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, LM.jsxs)("span", {
              children: [yM("smpShop:youGet"), " ", (0, LM.jsx)(sS, {
                amount: Math.max(0, IM - KM),
                exact: !0
              })]
            }), (0, LM.jsx)("small", {
              children: KM > 0 ? yM("smpShop:listingFee", {
                fee: KM.toLocaleString("en-US")
              }) : yM("smpShop:listingRules")
            })]
          }), (0, LM.jsx)(QM.u, {
            className: "SmpSubmit",
            disabled: !TM && !VM && !qM,
            loading: qM || Mr || YM && MM.searching,
            onClick: cM,
            children: "list" === UM ? yM("smpShop:listButton", {
              count: bM,
              item: rr
            }) : (0, LM.jsxs)(LM.Fragment, {
              children: [yM("smpShop:orderButton", {
                count: bM,
                item: rr
              }), " ", tM >= 1 && (0, LM.jsx)(sS, {
                amount: IM
              })]
            })
          })]
        })]
      })
    }

    function Cj() {
      var MM;
      const {
        t: rM
      } = (0, aM.A)(), iM = jj(), SM = null === (MM = iM.shopInfo[iM.categoryKey]) || void 0 === MM ? void 0 : MM.items, jM = IS(SM, "search"), PM = IS(SM, "creator"), nM = XS(SM, "enchantedCreator"), zM = XS(SM, "listing"), mM = IS(SM, "empty"), HM = Qj(jM, zM.length > 0 || null !== mM), {
        searched: hM,
        shown: JM,
        loading: dM
      } = HM, [yM, lM] = (0, OM.useState)(!1), [EM, UM] = function() {
        const [MM, rM] = (0, Jj.e)("smpMarketView", "list");
        return ["grid" === MM ? "grid" : "list", rM]
      }(), GM = "grid" === EM, CM = (0, OM.useMemo)((() => zM.filter((MM => {
        let {
          meta: rM
        } = MM;
        return null !== rM.seller && rM.item === hM
      })).map((MM => {
        let {
          meta: rM
        } = MM;
        return rM.pricePerItem
      })).sort(((MM, rM) => MM - rM))), [zM, hM]), eM = (0, OM.useMemo)((() => {
        const MM = new Set(HM.catalogue.map((MM => {
          let {
            name: rM
          } = MM;
          return rM
        })));
        return function(MM) {
          for (const rM in MM)
            if ("sell" === MM[rM].smp) return XS(MM[rM].items, "sell").filter((MM => {
              let {
                item: rM
              } = MM;
              return !rM.enchant
            })).map((MM => {
              let {
                meta: rM
              } = MM;
              return {
                item: rM.item,
                quantity: rM.quantity,
                sellPrice: rM.pricePerItem
              }
            }));
          return []
        }(iM.shopInfo).filter((rM => {
          let {
            item: iM
          } = rM;
          return MM.has(iM)
        }))
      }), [iM.shopInfo, HM.catalogue]);
      return (0, LM.jsx)(Hj, {
        browser: HM,
        className: "SmpMarketTab",
        recentLabel: rM("smpShop:recentlyListed"),
        action: (0, LM.jsx)(QM.u, {
          className: "SmpSellButton",
          onClick: () => {
            lM((MM => !MM))
          },
          children: rM("smpShop:sell")
        }),
        above: yM && (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsx)(Gj, {
            mode: "list",
            creator: PM,
            inventory: eM,
            catalogue: HM.catalogue,
            names: HM.names,
            searching: dM,
            prices: CM,
            onPickItem: HM.searchFor,
            onClose: () => {
              lM(!1)
            }
          }), nM.length > 0 && (0, LM.jsx)(ej, {
            entries: nM
          })]
        }),
        listControls: (0, LM.jsx)(yj, {
          view: EM,
          onChange: UM
        }),
        summary: JM && (zM.length > 0 ? rM(1 === zM.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: zM.length,
          price: uS(hj(zM, "min"))
        }) : rM("smpShop:noOneSelling", {
          item: rj(HM.names, JM)
        })),
        list: dM ? (0, LM.jsx)(DS, {
          grid: GM
        }) : zM.length > 0 ? (0, LM.jsx)(lj, {
          entries: zM,
          view: EM
        }) : mM ? (0, LM.jsx)(ZS, {
          entry: mM
        }) : (0, LM.jsx)(DS, {
          count: 3,
          grid: GM
        })
      })
    }

    function ej(MM) {
      let {
        entries: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)(), SM = jj(), [jM, PM] = (0, OM.useState)({});
      return (0, LM.jsx)("div", {
        className: "SmpList",
        children: rM.map((MM => {
          var rM, OM, aM;
          let {
            key: nM,
            item: zM,
            meta: mM
          } = MM;
          const HM = null !== (rM = jM[nM]) && void 0 !== rM ? rM : 1;
          return (0, LM.jsxs)("div", {
            className: "SmpRow",
            children: [(0, LM.jsx)(WS, {
              item: mM.item,
              amount: mM.quantity,
              tier: null !== (OM = null === (aM = zM.enchant) || void 0 === aM ? void 0 : aM.tier) && void 0 !== OM ? OM : null
            }), (0, LM.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, LM.jsx)("b", {
                children: (0, LM.jsx)(lS.b, {
                  text: zM.customTitle
                })
              }), (0, LM.jsx)("small", {
                children: iM("smpShop:enchantedListing")
              })]
            }), (0, LM.jsx)(YS, {
              value: HM,
              onChange: MM => {
                PM({
                  ...jM,
                  [nM]: MM
                })
              },
              max: 9999999,
              step: NS,
              label: iM("smpShop:pricePerItem")
            }), (0, LM.jsxs)(QM.u, {
              loading: SM.isPending(nM),
              onClick: () => {
                SM.act(nM, String(HM))
              },
              children: [iM("smpShop:list"), " ", (0, LM.jsx)(sS, {
                amount: HM
              })]
            })]
          }, nM)
        }))
      })
    }
    const bj = (0, OM.memo)((function(MM) {
      let {
        itemKey: rM,
        item: iM,
        quantity: OM,
        pricePerItem: SM,
        tier: aM,
        selected: PM,
        onSelect: nM
      } = MM;
      return (0, LM.jsxs)("button", {
        type: "button",
        className: jM()("SmpInventorySlot", {
          SmpInventorySlotOn: PM
        }),
        title: iM,
        onClick: () => {
          nM(rM)
        },
        children: [(0, LM.jsx)(WS, {
          item: iM,
          amount: OM,
          tier: aM
        }), (0, LM.jsx)(sS, {
          amount: SM
        })]
      })
    }));

    function wj() {
      var MM;
      const {
        t: rM
      } = (0, aM.A)(), iM = jj(), SM = null === (MM = iM.shopInfo[iM.categoryKey]) || void 0 === MM ? void 0 : MM.items, PM = XS(SM, "sell"), nM = IS(SM, "empty"), [QM, zM] = (0, OM.useState)(null), [mM, HM] = (0, OM.useState)({}), hM = PM.find((MM => {
        let {
          key: rM
        } = MM;
        return rM === QM
      }));
      return 0 === PM.length ? (0, LM.jsx)("div", {
        className: "SmpScreen",
        children: (0, LM.jsx)(kS, {
          title: nM ? (0, LM.jsx)(lS.b, {
            text: nM.item.customTitle
          }) : rM("smpShop:nothingToSell"),
          children: nM && (0, LM.jsx)(lS.b, {
            text: nM.item.description
          })
        })
      }) : (0, LM.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, LM.jsx)("div", {
          className: "SmpInventoryGrid",
          children: PM.map((MM => {
            var rM, iM;
            let {
              key: OM,
              item: SM,
              meta: jM
            } = MM;
            return (0, LM.jsx)(bj, {
              itemKey: OM,
              item: jM.item,
              quantity: jM.quantity,
              pricePerItem: jM.pricePerItem,
              tier: null !== (rM = null === (iM = SM.enchant) || void 0 === iM ? void 0 : iM.tier) && void 0 !== rM ? rM : null,
              selected: OM === QM,
              onSelect: zM
            }, OM)
          }))
        }), (0, LM.jsx)("div", {
          className: jM()("SmpSellBar", {
            SmpSellBarIdle: !hM
          }),
          children: hM ? (0, LM.jsx)(tj, {
            entry: hM,
            choice: ij(hM.item, mM[hM.key]),
            onChoose: MM => {
              HM({
                ...mM,
                [hM.key]: MM
              })
            }
          }) : (0, LM.jsx)("span", {
            className: "SmpMuted",
            children: rM("smpShop:tapToSell")
          })
        })]
      })
    }

    function tj(MM) {
      var rM, iM, OM, SM;
      let {
        entry: jM,
        choice: PM,
        onChoose: nM
      } = MM;
      const {
        t: zM
      } = (0, aM.A)(), mM = jj(), {
        key: HM,
        item: hM,
        meta: JM
      } = jM, dM = VS("dropdown" === (null === (rM = hM.userInput) || void 0 === rM ? void 0 : rM.type) ? hM.userInput.dropdownOptions : []), yM = null === PM ? 0 : -(0, hS.c)(hM, PM);
      return (0, LM.jsxs)(LM.Fragment, {
        children: [(0, LM.jsx)(WS, {
          item: JM.item,
          amount: JM.quantity,
          tier: null !== (iM = null === (OM = hM.enchant) || void 0 === OM ? void 0 : OM.tier) && void 0 !== iM ? iM : null
        }), (0, LM.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, LM.jsx)("b", {
            children: (0, LM.jsx)(lS.b, {
              text: null !== (SM = hM.customTitle) && void 0 !== SM ? SM : JM.item
            })
          }), (0, LM.jsx)("small", {
            children: zM("smpShop:sellEach", {
              count: JM.quantity
            })
          })]
        }), (0, LM.jsx)(oS, {
          options: dM.map((MM => {
            let {
              label: rM,
              quantity: iM,
              isAll: OM
            } = MM;
            return {
              value: rM,
              label: OM ? zM("smpShop:all", {
                count: iM
              }) : String(iM)
            }
          })),
          value: PM,
          onChange: nM,
          ariaLabel: zM("smpShop:quantity")
        }), (0, LM.jsxs)(QM.u, {
          loading: mM.isPending(HM),
          disabled: null === PM,
          onClick: () => {
            mM.act(HM, PM)
          },
          children: [zM("smpShop:sellButton"), " ", (0, LM.jsx)(sS, {
            amount: yM
          })]
        })]
      })
    }

    function gj() {
      var MM;
      const {
        t: rM
      } = (0, aM.A)(), iM = jj(), OM = null === (MM = iM.shopInfo[iM.categoryKey]) || void 0 === MM ? void 0 : MM.items, SM = XS(OM, "collect"), jM = XS(OM, "myListing"), PM = (MM, rM) => iM.isPending(MM) || !1 === rM.canBuy;
      return (0, LM.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, LM.jsx)("h3", {
          className: "SmpSectionTitle",
          children: rM("smpShop:readyToCollect")
        }), SM.length > 0 ? (0, LM.jsx)("div", {
          className: "SmpList",
          children: SM.map((MM => {
            var OM, SM;
            let {
              key: jM,
              item: aM,
              meta: nM
            } = MM;
            return (0, LM.jsxs)("div", {
              className: "SmpRow",
              children: [(0, LM.jsx)(WS, {
                item: "sold" === nM.type ? "Gold Coin" : nM.item,
                amount: "sold" === nM.type ? 0 : nM.quantity,
                tier: null !== (OM = null === (SM = aM.enchant) || void 0 === SM ? void 0 : SM.tier) && void 0 !== OM ? OM : null
              }), (0, LM.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, LM.jsx)("b", {
                  children: (0, LM.jsx)(lS.b, {
                    text: aM.customTitle
                  })
                }), (0, LM.jsx)("small", {
                  children: (0, LM.jsx)(lS.b, {
                    text: aM.description
                  })
                })]
              }), (0, LM.jsx)(QM.p, {
                loading: PM(jM, aM),
                onClick: () => {
                  iM.act(jM)
                },
                children: rM("smpShop:collect")
              })]
            }, jM)
          }))
        }) : (0, LM.jsx)(kS, {
          title: rM("smpShop:nothingToCollect"),
          children: rM("smpShop:nothingToCollectHint")
        }), (0, LM.jsx)("h3", {
          className: "SmpSectionTitle",
          children: rM("smpShop:activeListings", {
            count: jM.length
          })
        }), jM.length > 0 ? (0, LM.jsx)("div", {
          className: "SmpList",
          children: jM.map((MM => {
            var OM, SM;
            let {
              key: jM,
              item: aM,
              meta: nM
            } = MM;
            return (0, LM.jsxs)("div", {
              className: "SmpRow",
              children: [(0, LM.jsx)(WS, {
                item: nM.item,
                amount: nM.quantity,
                tier: null !== (OM = null === (SM = aM.enchant) || void 0 === SM ? void 0 : SM.tier) && void 0 !== OM ? OM : null
              }), (0, LM.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, LM.jsx)("b", {
                  children: (0, LM.jsx)(lS.b, {
                    text: aM.customTitle
                  })
                }), (0, LM.jsx)("small", {
                  children: rM("smpShop:timeLeft", {
                    time: TS(nM.expiresAt)
                  })
                })]
              }), (0, LM.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, LM.jsx)(sS, {
                  amount: nM.pricePerItem
                }), (0, LM.jsx)("small", {
                  children: rM("smpShop:each")
                })]
              }), (0, LM.jsx)(QM.J, {
                loading: PM(jM, aM),
                onClick: () => {
                  iM.act(jM)
                },
                children: rM("smpShop:cancel")
              })]
            }, jM)
          }))
        }) : (0, LM.jsx)(kS, {
          title: rM("smpShop:noActiveListings"),
          children: rM("smpShop:noActiveListingsHint")
        })]
      })
    }

    function uj(MM) {
      let {
        done: rM,
        of: iM
      } = MM;
      return (0, LM.jsx)("span", {
        className: "SmpProgress",
        children: (0, LM.jsx)("i", {
          style: {
            width: `${Math.min(100,rM/Math.max(1,iM)*100)}%`
          }
        })
      })
    }

    function Rj(MM) {
      var rM, iM, OM;
      let {
        entry: SM,
        choice: jM,
        onChoose: PM
      } = MM;
      const {
        t: nM
      } = (0, aM.A)(), zM = jj(), {
        key: mM,
        item: HM,
        meta: hM
      } = SM, JM = "dropdown" === (null === (rM = HM.userInput) || void 0 === rM ? void 0 : rM.type) ? HM.userInput.dropdownOptions : [], dM = !0 === hM.processing, yM = null !== hM.creator && (hM.owned > 0 || dM), lM = yM && hM.owned > 0 ? VS(JM) : [], EM = null === jM ? 0 : null !== (iM = null === (OM = lM.find((MM => MM.label === jM))) || void 0 === OM ? void 0 : OM.quantity) && void 0 !== iM ? iM : 0;
      return (0, LM.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, LM.jsx)(WS, {
          item: hM.item
        }), (0, LM.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, LM.jsx)("b", {
            children: (0, LM.jsx)(lS.b, {
              text: HM.customTitle
            })
          }), (0, LM.jsxs)("small", {
            children: [(0, LM.jsx)(sS, {
              amount: hM.pricePerItem
            }), " ", nM("smpShop:each"), " \xb7", " ", null === hM.creator ? nM("smpShop:you") : (0, LM.jsx)(lS.b, {
              text: [{
                entityName: hM.creator
              }]
            })]
          }), (0, LM.jsx)(uj, {
            done: hM.delivered,
            of: hM.wanted
          })]
        }), yM ? (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsx)(oS, {
            options: lM.map((MM => {
              let {
                label: rM,
                quantity: iM,
                isAll: OM
              } = MM;
              return {
                value: rM,
                label: OM ? nM("smpShop:max", {
                  count: iM
                }) : String(iM)
              }
            })),
            value: jM,
            onChange: PM,
            ariaLabel: nM("smpShop:quantity")
          }), (0, LM.jsxs)(QM.u, {
            loading: zM.isPending(mM) || dM,
            disabled: null === jM,
            onClick: () => {
              zM.act(mM, jM)
            },
            children: [nM("smpShop:deliver"), " ", (0, LM.jsx)(sS, {
              amount: EM * hM.pricePerItem
            })]
          })]
        }) : (0, LM.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === hM.creator ? nM("smpShop:yourOrder") : nM("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function pj() {
      var MM;
      const {
        t: rM
      } = (0, aM.A)(), iM = jj(), SM = null === (MM = iM.shopInfo[iM.categoryKey]) || void 0 === MM ? void 0 : MM.items, jM = IS(SM, "search"), PM = IS(SM, "creator"), nM = XS(SM, "order"), zM = IS(SM, "empty"), mM = Qj(jM, nM.length > 0 || null !== zM), [HM, hM] = (0, OM.useState)(!1), [JM, dM] = (0, OM.useState)({});
      return (0, LM.jsx)(Hj, {
        browser: mM,
        recentLabel: rM("smpShop:recentOrders"),
        action: (0, LM.jsx)(QM.u, {
          onClick: () => {
            hM((MM => !MM))
          },
          children: rM("smpShop:createOrder")
        }),
        above: HM && (0, LM.jsx)(Gj, {
          mode: "order",
          creator: PM,
          catalogue: mM.catalogue,
          names: mM.names,
          searching: mM.loading,
          prices: [],
          onPickItem: mM.searchFor,
          onClose: () => {
            hM(!1)
          }
        }),
        onBack: () => {
          hM(!1)
        },
        summary: nM.length > 0 && rM(1 === nM.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: nM.length,
          price: uS(hj(nM, "max"))
        }),
        list: mM.loading ? (0, LM.jsx)(DS, {}) : nM.length > 0 ? (0, LM.jsx)(aj.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: KS,
          observerUpdateDeps: [nM.length],
          children: nM.map((MM => (0, LM.jsx)(Rj, {
            entry: MM,
            choice: ij(MM.item, JM[MM.key]),
            onChoose: rM => {
              dM({
                ...JM,
                [MM.key]: rM
              })
            }
          }, MM.key)))
        }) : zM ? (0, LM.jsx)(ZS, {
          entry: zM
        }) : (0, LM.jsx)(DS, {
          count: 3
        })
      })
    }

    function Wj() {
      var MM;
      const {
        t: rM
      } = (0, aM.A)(), iM = jj(), OM = XS(null === (MM = iM.shopInfo[iM.categoryKey]) || void 0 === MM ? void 0 : MM.items, "myOrder");
      return 0 === OM.length ? (0, LM.jsx)("div", {
        className: "SmpScreen",
        children: (0, LM.jsx)(kS, {
          title: rM("smpShop:noOrders"),
          children: rM("smpShop:noOrdersHint")
        })
      }) : (0, LM.jsx)("div", {
        className: "SmpScreen",
        children: (0, LM.jsx)("div", {
          className: "SmpList",
          children: OM.map((MM => {
            let {
              key: OM,
              item: SM,
              meta: jM
            } = MM;
            const aM = iM.isPending(OM) || !1 === SM.canBuy;
            return (0, LM.jsxs)("div", {
              className: "SmpRow",
              children: [(0, LM.jsx)(WS, {
                item: jM.item,
                amount: jM.collectable
              }), (0, LM.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, LM.jsx)("b", {
                  children: (0, LM.jsx)(lS.b, {
                    text: SM.customTitle
                  })
                }), (0, LM.jsxs)("small", {
                  children: [(0, LM.jsx)(sS, {
                    amount: jM.pricePerItem
                  }), " ", rM("smpShop:each"), jM.collectable > 0 && ` \xb7 ${rM("smpShop:readyCount",{count:jM.collectable})}`]
                }), (0, LM.jsx)(uj, {
                  done: jM.delivered,
                  of: jM.wanted
                })]
              }), jM.collectable > 0 ? (0, LM.jsx)(QM.p, {
                loading: aM,
                onClick: () => {
                  iM.act(OM)
                },
                children: rM("smpShop:collectCount", {
                  count: jM.collectable
                })
              }) : (0, LM.jsx)(QM.J, {
                loading: aM,
                onClick: () => {
                  iM.act(OM)
                },
                children: rM("smpShop:cancel")
              })]
            }, OM)
          }))
        })
      })
    }
    const sj = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      Dj = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function kj(MM, rM) {
      let iM = !1;
      const OM = {};
      for (const SM in MM) rM(SM, MM[SM]) ? OM[SM] = MM[SM] : iM = !0;
      return iM ? OM : MM
    }

    function Zj(MM) {
      var rM, iM, SM, nM;
      const {
        show: QM,
        shopInfo: zM,
        selectedCategoryKey: mM
      } = MM, {
        t: HM
      } = (0, aM.A)(), hM = null !== mM && void 0 !== mM ? mM : "", JM = BS(zM, hM), dM = null === (rM = zM[hM]) || void 0 === rM ? void 0 : rM.items, yM = null !== JM, [lM, EM] = (0, OM.useState)({}), [UM, GM] = (0, OM.useState)([]), [CM, eM] = (0, OM.useState)(!1), [bM, wM] = (0, OM.useState)(null), [, tM] = (0, OM.useState)(0), gM = (0, OM.useRef)(0), uM = (0, OM.useRef)({}), RM = (0, OM.useRef)({
        items: dM,
        pending: lM,
        shopInfo: zM,
        active: yM,
        canAfford: MM.canAfford,
        buy: MM.buy
      });
      RM.current = {
        items: dM,
        pending: lM,
        shopInfo: zM,
        active: yM,
        canAfford: MM.canAfford,
        buy: MM.buy
      };
      const pM = (0, OM.useCallback)((MM => {
        gM.current++;
        const rM = gM.current;
        GM((iM => [{
          id: rM,
          text: MM
        }, ...iM].slice(0, 8))), wM(rM)
      }), []);
      (0, OM.useEffect)((() => {
        if (null === bM) return;
        const MM = setTimeout((() => {
          wM(null)
        }), 3e3);
        return () => {
          clearTimeout(MM)
        }
      }), [bM]), (0, OM.useEffect)((() => {
        const rM = MM.message;
        if (!rM) return;
        const {
          shopInfo: iM,
          active: OM,
          items: SM
        } = RM.current, jM = null !== rM.categoryKey ? null !== BS(iM, rM.categoryKey) : OM;
        (jM || OM) && pM(rM.text), jM && EM((MM => kj(MM, (MM => {
          var rM, iM;
          return !sj.has(null === SM || void 0 === SM || null === (rM = SM[MM]) || void 0 === rM || null === (iM = rM.smp) || void 0 === iM ? void 0 : iM.kind)
        }))))
      }), [MM.message, pM]), (0, OM.useEffect)((() => {
        EM((MM => kj(MM, ((MM, rM) => Oj(null === dM || void 0 === dM ? void 0 : dM[MM]) === rM.snapshot))))
      }), [zM, dM]);
      const WM = Object.keys(lM).length > 0;
      (0, OM.useEffect)((() => {
        if (!WM) return;
        const MM = setInterval((() => {
          tM((MM => MM + 1));
          const MM = Date.now(),
            {
              pending: rM,
              items: iM
            } = RM.current,
            OM = Object.keys(rM).filter((iM => MM - rM[iM].at >= 12e3));
          if (0 === OM.length) return;
          const SM = OM.some((MM => {
            var OM, SM;
            return "search" !== (null === iM || void 0 === iM || null === (OM = iM[MM]) || void 0 === OM || null === (SM = OM.smp) || void 0 === SM ? void 0 : SM.kind) || rM[MM].resend
          }));
          for (const jM of OM) uM.current[jM] = MM;
          EM((MM => kj(MM, (MM => !OM.includes(MM))))), SM && pM(HM("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(MM)
        }
      }), [WM]), (0, OM.useEffect)((() => {
        EM({})
      }), [hM]), (0, OM.useEffect)((() => {
        QM || eM(!1)
      }), [QM]);
      const sM = (0, OM.useCallback)((function(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: OM,
            pending: SM,
            canAfford: jM,
            buy: aM
          } = RM.current, PM = null === OM || void 0 === OM ? void 0 : OM[MM];
          if (!PM || MM in SM || !1 === PM.canBuy) return !1;
          if (!jM(PM, (0, hS.c)(PM, rM))) return !1;
          aM(MM, PM, rM);
          const nM = {
            snapshot: Oj(PM),
            at: Date.now(),
            resend: iM
          };
          return RM.current.pending = {
            ...RM.current.pending,
            [MM]: nM
          }, EM((rM => ({
            ...rM,
            [MM]: nM
          }))), !0
        }), []),
        DM = (0, OM.useMemo)((() => ({
          shopInfo: zM,
          categoryKey: hM,
          canAfford: MM.canAfford,
          isPending: MM => MM in lM,
          gaveUpAt: MM => {
            var rM;
            return null !== (rM = uM.current[MM]) && void 0 !== rM ? rM : 0
          },
          act: sM,
          notify: pM
        })), [zM, hM, MM.canAfford, lM, sM, pM]),
        kM = Math.min(...Object.values(lM).map((MM => MM.at))),
        ZM = WM && Date.now() - kM > 1500,
        oM = UM.length > 1,
        fM = null !== (iM = null === (SM = zM[hM]) || void 0 === SM ? void 0 : SM.customTitle) && void 0 !== iM ? iM : hM,
        YM = null === (nM = zM[hM]) || void 0 === nM ? void 0 : nM.description;
      let NM = null;
      return "market" === JM ? NM = (0, LM.jsx)(Cj, {}) : "sell" === JM ? NM = (0, LM.jsx)(wj, {}) : "collect" === JM ? NM = (0, LM.jsx)(gj, {}) : "orders" === JM ? NM = (0, LM.jsx)(pj, {}) : "myOrders" === JM && (NM = (0, LM.jsx)(Wj, {})), (0, LM.jsx)(Sj.Provider, {
        value: DM,
        children: (0, LM.jsx)("div", {
          className: "SmpShopHost",
          hidden: !yM,
          children: (0, LM.jsxs)("div", {
            className: "SmpShop",
            children: [(0, LM.jsx)("header", {
              className: "SmpHeader",
              children: (0, LM.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, LM.jsxs)("h2", {
                  children: [JM && (0, LM.jsx)(PM.b, {
                    name: Dj[JM]
                  }), HM(fM)]
                }), YM && (0, LM.jsx)("p", {
                  children: (0, LM.jsx)(lS.b, {
                    text: YM
                  })
                })]
              })
            }), (0, LM.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: QM && NM
            }), (0, LM.jsxs)("button", {
              type: "button",
              className: jM()("SmpStatus", {
                SmpStatusWaiting: WM,
                SmpStatusFresh: !WM && null !== bM,
                SmpStatusHasHistory: oM
              }),
              "aria-live": "polite",
              "aria-expanded": oM ? CM : void 0,
              onClick: () => {
                oM && eM((MM => !MM))
              },
              children: [WM ? (0, LM.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, LM.jsx)(fS, {}), HM(ZM ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : UM[0] ? (0, LM.jsx)("span", {
                className: "SmpStatusText",
                children: (0, LM.jsx)(lS.b, {
                  text: UM[0].text
                })
              }, UM[0].id) : (0, LM.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: HM("smpShop:ready")
              }), oM && (0, LM.jsx)("small", {
                children: HM("smpShop:recentMessages", {
                  count: UM.length
                })
              })]
            }), CM && oM && (0, LM.jsx)("div", {
              className: "SmpStatusHistory",
              children: UM.map((MM => (0, LM.jsx)("div", {
                children: (0, LM.jsx)(lS.b, {
                  text: MM.text
                })
              }, MM.id)))
            })]
          })
        })
      })
    }
    class oj {
      constructor(MM) {
        this.info = MM
      }
      static fromShopInfo(MM) {
        const rM = {};
        for (const iM in MM) {
          const OM = !0 === MM[iM].redDot && !0 !== MM[iM].forceRemoveRedDot;
          rM[iM] = {
            redDot: OM,
            items: {}
          };
          for (const SM in MM[iM].items) {
            const OM = MM[iM].items[SM],
              jM = !0 === OM.redDot && !0 !== OM.forceRemoveRedDot;
            rM[iM].items[SM] = {
              redDot: jM
            }
          }
        }
        return new oj(rM)
      }
      anyCategoryHasRedDots() {
        for (const MM in this.info)
          if (this.categoryHasRedDot(MM)) return !0;
        return !1
      }
      doesCategoryExist(MM) {
        return !(0, Ui.J)(this.info[MM])
      }
      categoryHasRedDot(MM) {
        return !0 === this.info[MM].redDot
      }
      updateCategoryRedDot(MM, rM) {
        this.info[MM].redDot = rM
      }
      doesItemExist(MM, rM) {
        return this.doesCategoryExist(MM) && !(0, Ui.J)(this.info[MM].items[rM])
      }
      itemHasRedDot(MM, rM) {
        return !0 === this.info[MM].items[rM].redDot
      }
      updateItemRedDot(MM, rM, iM) {
        this.info[MM].items[rM].redDot = iM
      }
      shallowCopy() {
        return new oj(this.info)
      }
    }

    function fj(MM, rM) {
      return `${MM}\x1f${rM}`
    }

    function Yj(MM, rM) {
      return !(0, Ui.J)(rM) && !(0, Ui.J)(MM) && rM in MM
    }
    const Nj = (0, OM.memo)((function(MM) {
      var rM, iM;
      let {
        show: SM
      } = MM;
      const aM = (0, Ar.f)("players", Xj),
        PM = (0, Ar.f)("players", Ij),
        zM = (0, bS.d)(),
        [HM, hM] = (0, OM.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: oj.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        dM = (0, OM.useRef)(""),
        yM = (0, OM.useRef)(null),
        EM = (0, OM.useRef)(null),
        UM = (0, OM.useRef)(0),
        GM = (0, OM.useRef)(void 0),
        CM = (0, OM.useRef)(null),
        eM = (0, OM.useRef)(HM),
        wM = HM.redDotInfo.anyCategoryHasRedDots(),
        [tM, uM] = (0, OM.useState)(null),
        RM = (0, OM.useRef)(!1);
      let pM = !1,
        WM = 0,
        sM = 0;
      if (HM.currencyAmounts) {
        for (const MM in HM.currencyAmounts) {
          var DM;
          const rM = HM.currencyAmounts[MM];
          rM.hidden || (WM++, (null === (DM = rM.subtext) || void 0 === DM ? void 0 : DM.length) > 0 && sM++)
        }
        pM = WM + sM > 4
      }(0, OM.useEffect)((() => {
        Gi.i.Tz("showShopIconRedDot", wM, !0)
      }), [wM]), (0, OM.useEffect)((() => {
        lM.gameBridge.send("setShopOpen", SM), SM || (clearTimeout(GM.current), hM((MM => MM.awaitingPurchase ? {
          ...MM,
          awaitingPurchase: !1
        } : MM)))
      }), [SM]), (0, OM.useEffect)((() => () => {
        lM.gameBridge.send("setShopOpen", !1), clearTimeout(GM.current)
      }), []), (0, OM.useEffect)((() => {
        eM.current = HM
      }), [HM]), (0, OM.useEffect)((() => {
        if (null === tM) return;
        return (0, CS.b)("pointerdown", (MM => {
          const rM = MM.target;
          null !== rM && void 0 !== rM && rM.closest(".ShopItem") || uM(null)
        }))
      }), [tM]);
      const kM = MM => {
          hM((rM => ({
            ...rM,
            ...MM
          })))
        },
        ZM = MM => {
          var rM;
          clearTimeout(null === (rM = HM.onBoughtInfo) || void 0 === rM ? void 0 : rM.timeout);
          const iM = setTimeout((() => {
            kM({
              onBoughtInfo: null
            })
          }), 3e3);
          dM.current = MM, kM({
            onBoughtInfo: {
              text: MM,
              timeout: iM,
              categoryKey: yM.current
            }
          })
        },
        oM = MM => {
          const {
            shopInfo: rM,
            userInputsPerItem: iM,
            redDotInfo: OM,
            autoSelectCategory: jM
          } = function(MM, rM, iM, OM, SM, jM) {
            if ((0, Ui.J)(MM) || 0 === Object.keys(MM).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: oj.fromShopInfo({}),
              autoSelectCategory: null
            };
            const aM = gM.siteUsedData[gM.siteUsed].adConfig.showRewardedAds,
              PM = {};
            let nM = null;
            for (const dM in MM) {
              const rM = MM[dM],
                iM = {};
              let OM = !1;
              for (const MM in rM.items) {
                const SM = rM.items[MM];
                (0, hS.i)(SM, aM) && (iM[MM] = SM, OM = !0)
              }
              OM && (PM[dM] = {
                ...rM,
                items: iM
              }, !0 === rM.autoSelectCategory && (nM = dM))
            }
            const QM = {},
              zM = (MM, rM, OM, aM) => {
                var PM, nM;
                const zM = fj(MM, rM),
                  LM = null !== (PM = iM[zM]) && void 0 !== PM ? PM : iM[rM];
                if (null !== (nM = aM.userInput) && void 0 !== nM && nM.type) switch (aM.userInput.type) {
                  case "dropdown": {
                    var mM;
                    const MM = !LM || !aM.userInput.dropdownOptions.some((MM => (0, hS.d)(MM) === LM)),
                      rM = aM.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === OM || void 0 === OM || null === (mM = OM.userInput) || void 0 === mM ? void 0 : mM.type) || JSON.stringify(OM.userInput.dropdownOptions) !== JSON.stringify(aM.userInput.dropdownOptions)),
                      iM = aM.userInput,
                      SM = !(0, Ui.J)(iM.initialValue) && iM.dropdownOptions.some((MM => (0, hS.d)(MM) === iM.initialValue));
                    var HM;
                    return void(MM || rM ? SM ? QM[zM] = null !== (HM = aM.userInput.initialValue) && void 0 !== HM ? HM : null : aM.userInput.dropdownOptions.length > 0 ? QM[zM] = (0, hS.d)(aM.userInput.dropdownOptions[0]) : QM[zM] = null : QM[zM] = LM)
                  }
                  case "text":
                  case "number":
                    var hM, JM, dM;
                    return void((null === OM || void 0 === OM ? void 0 : OM.userInput) !== aM.userInput ? QM[zM] = null !== (hM = null !== (JM = aM.userInput.initialValue) && void 0 !== JM ? JM : LM) && void 0 !== hM ? hM : "" : QM[zM] = null !== (dM = null !== LM && void 0 !== LM ? LM : aM.userInput.initialValue) && void 0 !== dM ? dM : "");
                  case "color":
                    var yM, lM, EM;
                    return void((null === OM || void 0 === OM ? void 0 : OM.userInput) !== aM.userInput ? QM[zM] = null !== (yM = null !== (lM = aM.userInput.initialValue) && void 0 !== lM ? lM : LM) && void 0 !== yM ? yM : "#000000" : QM[zM] = null !== (EM = null !== LM && void 0 !== LM ? LM : aM.userInput.initialValue) && void 0 !== EM ? EM : "#000000");
                  case "player": {
                    const MM = (0, hS.g)(SM, jM, aM.userInput);
                    return void(LM && MM.includes(LM) ? QM[zM] = LM : QM[zM] = MM.length > 0 ? MM[0] : null)
                  }
                }
              };
            for (const dM in PM)
              for (const MM in PM[dM].items) {
                var LM;
                const iM = PM[dM].items[MM];
                zM(dM, MM, null === (LM = rM[dM]) || void 0 === LM ? void 0 : LM.items[MM], iM)
              }
            const mM = oj.fromShopInfo(PM);
            for (const dM in PM) {
              var HM;
              if (OM.doesCategoryExist(dM)) {
                (null === (HM = rM[dM]) || void 0 === HM ? void 0 : HM.redDot) === PM[dM].redDot && mM.updateCategoryRedDot(dM, OM.categoryHasRedDot(dM));
                for (const MM in PM[dM].items) {
                  var hM, JM;
                  OM.doesItemExist(dM, MM) && (null === (hM = rM[dM]) || void 0 === hM || null === (JM = hM.items[MM]) || void 0 === JM ? void 0 : JM.redDot) === PM[dM].items[MM].redDot && mM.updateItemRedDot(dM, MM, OM.itemHasRedDot(dM, MM))
                }
              }
            }
            return {
              shopInfo: PM,
              userInputsPerItem: QM,
              redDotInfo: mM,
              autoSelectCategory: nM
            }
          }(MM, HM.shopInfo, HM.userInputsPerItem, HM.redDotInfo, aM, PM), nM = {
            shopInfo: rM,
            userInputsPerItem: iM,
            redDotInfo: OM
          };
          if (null === jM || SM)
            if (rM[HM.selectedCategoryKey]) nM.selectedCategoryKey = HM.selectedCategoryKey;
            else {
              const MM = tS(rM);
              nM.selectedCategoryKey = MM.length > 0 ? MM[0] : null
            }
          else nM.selectedCategoryKey = jM;
          return 0 === Object.keys(rM).length && SM && bM.d.set({
            openEverythingMenuName: null
          }), nM
        },
        YM = (MM, rM, iM) => {
          const OM = HM.selectedCategoryKey,
            SM = fj(OM, MM),
            jM = null !== iM && void 0 !== iM ? iM : HM.userInputsPerItem[SM],
            aM = {
              categoryKey: OM,
              itemKey: MM,
              userInput: jM
            };
          if (yM.current = OM, rM.isRewardedAd) {
            if (Date.now() - UM.current < 5e3) return;
            (0, Er.Z)((() => {
              var iM, OM, jM;
              console.log("bought rewarded ad");
              const PM = aM.categoryKey ? null === (iM = eM.current.shopInfo[aM.categoryKey]) || void 0 === iM ? void 0 : iM.items[MM] : null;
              if (!PM || !PM.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (OM = rM.userInput) || void 0 === OM ? void 0 : OM.type) === (null === PM || void 0 === PM || null === (jM = PM.userInput) || void 0 === jM ? void 0 : jM.type) ? (aM.userInput = eM.current.userInputsPerItem[SM], lM.gameBridge.send("buyShopItem", aM), rM.onBoughtMessage && ZM(rM.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), UM.current = Date.now()
          } else {
            lM.gameBridge.send("buyShopItem", aM), kM({
              awaitingPurchase: !0
            }), clearTimeout(GM.current), GM.current = setTimeout((() => {
              CM.current = null, kM({
                awaitingPurchase: !1
              })
            }), 1e3);
            const MM = (0, hS.c)(rM, jM);
            if (CM.current = null, !isNaN(MM) && Yj(HM.currencyAmounts, rM.currency)) {
              0 !== MM && (CM.current = {
                currency: rM.currency,
                amountBefore: HM.currencyAmounts[rM.currency].amount
              });
              const iM = {
                ...HM.currencyAmounts
              };
              iM[rM.currency].amount -= MM, kM({
                currencyAmounts: iM
              })
            }
            rM.onBoughtMessage && ZM(rM.onBoughtMessage)
          }
        },
        NM = (MM, rM) => {
          if (null === rM || !MM.shopInfo[rM]) return MM;
          let iM = MM.redDotInfo;
          return iM.categoryHasRedDot(rM) && (iM.updateCategoryRedDot(rM, !1), iM = iM.shallowCopy()), {
            ...MM,
            selectedCategoryKey: rM,
            redDotInfo: iM
          }
        },
        AM = MM => {
          hM((rM => NM(rM, MM)))
        };
      (0, qr.d)(eS.n, (() => {
        hM((MM => {
          const rM = (0, eS.p)(tS(MM.shopInfo), MM.selectedCategoryKey, (rM => (0, eS.k)(MM.shopInfo[rM].items)));
          return rM === MM.selectedCategoryKey ? MM : NM(MM, rM)
        }))
      })), (0, qr.d)("showShopFromServer", (MM => {
        let {
          toggle: rM,
          SS: iM
        } = MM;
        iM && AM(iM), 0 === Object.keys(HM.shopInfo).length || rM && SM ? bM.d.set({
          openEverythingMenuName: null
        }) : bM.d.set({
          openEverythingMenuName: Ur.m.SHOP
        })
      })), (0, qr.d)("closeShopOnDamaged", (() => {
        SM && bM.d.set({
          openEverythingMenuName: null
        })
      })), (0, qr.d)("overShopInfo", (MM => {
        ZM(MM)
      })), (0, JM.c)("currencyAmounts", (MM => {
        var rM;
        const iM = CM.current;
        iM && (null === MM || void 0 === MM || null === (rM = MM[iM.currency]) || void 0 === rM ? void 0 : rM.amount) === iM.amountBefore ? kM({
          currencyAmounts: MM
        }) : (CM.current = null, kM({
          currencyAmounts: MM,
          awaitingPurchase: !1
        }))
      })), (0, JM.c)("shopInfo", (MM => {
        kM({
          ...oM(MM),
          awaitingPurchase: !1
        })
      }));
      const xM = (0, OM.useRef)({
        playerIds: aM,
        localPlayerId: PM
      });
      (0, OM.useEffect)((() => {
        xM.current.playerIds === aM && xM.current.localPlayerId === PM || (xM.current = {
          playerIds: aM,
          localPlayerId: PM
        }, hM((MM => {
          const rM = oM(MM.shopInfo);
          return {
            ...MM,
            ...rM
          }
        })))
      }), [aM, PM]);
      const vM = HM.selectedCategoryKey,
        FM = (MM, rM) => {
          var iM, OM;
          return (isNaN(rM) || (0, Ui.J)(MM.currency) || Yj(HM.currencyAmounts, MM.currency) && rM <= HM.currencyAmounts[MM.currency].amount) && (null === (iM = MM.canBuy) || void 0 === iM || iM) && !(null !== (OM = MM.hidden) && void 0 !== OM && OM)
        },
        BM = (MM, rM) => {
          var iM, OM, SM;
          const aM = fj(vM, MM),
            PM = HM.shopInfo[vM].items[MM],
            zM = HM.userInputsPerItem[aM],
            mM = (0, hS.c)(PM, zM),
            hM = FM(PM, mM),
            JM = PM.enchant,
            dM = JM ? (0, fM.ob)(null !== (iM = PM.customTitle) && void 0 !== iM ? iM : MM, {
              colour: fM.kb[JM.tier]
            }) : null !== (OM = PM.customTitle) && void 0 !== OM ? OM : MM,
            yM = rM => {
              const iM = null !== rM && void 0 !== rM ? rM : zM,
                OM = void 0 !== rM ? (0, hS.c)(PM, rM) : mM;
              FM(PM, OM) && null !== iM && YM(MM, PM, rM);
              let SM = HM.redDotInfo;
              SM.itemHasRedDot(vM, MM) && (SM.updateItemRedDot(vM, MM, !1), SM = SM.shallowCopy()), kM({
                redDotInfo: SM
              })
            };
          return (0, LM.jsxs)("div", {
            className: jM()("ShopItem", {
              ShopItemNoInput: !PM.userInput,
              ShopItemNoInputCanBuy: !PM.userInput && hM,
              ShopItemNoInputSelected: PM.isSelected,
              ShopItemEnchant: !!JM
            }),
            "data-pad-focusable": !PM.userInput || void 0,
            "data-pad-unavailable": !PM.userInput && !hM || void 0,
            "data-pad-repeat": null !== (SM = (0, eS.c)(PM)) && void 0 !== SM ? SM : void 0,
            "data-pad-repeat-wait": HM.awaitingPurchase || void 0,
            onClick: () => {
              if (JM && RM.current) {
                if (tM !== aM) return void uM(aM);
                uM(null)
              }
              PM.userInput || yM()
            },
            onPointerDown: MM => {
              JM && (RM.current = (0, dS.q)(MM))
            },
            onPointerEnter: MM => {
              JM && !(0, dS.q)(MM) && uM(aM)
            },
            onPointerLeave: MM => {
              JM && !(0, dS.q)(MM) && uM((MM => MM === aM ? null : MM))
            },
            style: {
              zIndex: Object.keys(HM.shopInfo[vM].items).length - rM
            },
            children: [HM.redDotInfo.itemHasRedDot(vM, MM) && (0, LM.jsx)(nM.d, {
              top: "-6px",
              right: "-6px"
            }), PM.badge && (0, LM.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, LM.jsx)("div", {
                className: jM()("ShopBadgeMain", PM.badge.type),
                children: (0, LM.jsx)(lS.b, {
                  text: PM.badge.text
                })
              })
            }), (0, LM.jsx)("div", {
              className: "ShopItemLeft",
              children: PM.image && (0, LM.jsx)(Aj, {
                item: PM,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, LM.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, LM.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, LM.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, LM.jsx)(lS.b, {
                    text: dM
                  })
                }), (0, LM.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, LM.jsx)(lS.b, {
                    text: PM.description
                  })
                })]
              }), PM.userInput && (0, LM.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: MM => {
                  MM.stopPropagation()
                },
                children: [(0, LM.jsx)(Fj, {
                  item: PM,
                  currInput: zM,
                  updateInput: rM => {
                    ((MM, rM, iM) => {
                      const OM = fj(MM, rM),
                        SM = {
                          ...HM.userInputsPerItem
                        };
                      SM[OM] = iM, kM({
                        userInputsPerItem: SM
                      })
                    })(vM, MM, rM)
                  },
                  onSubmit: MM => {
                    yM(MM)
                  }
                }), ("dropdown" !== PM.userInput.type || !PM.userInput.autoSubmit) && (0, LM.jsx)(QM.e, {
                  className: "ItemCostButton",
                  disabled: !hM && null !== zM,
                  onClick: () => {
                    yM()
                  },
                  children: (0, LM.jsx)(vj, {
                    item: PM,
                    cost: mM,
                    currencyAmounts: HM.currencyAmounts
                  })
                })]
              })]
            }), !PM.userInput && (0, LM.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, LM.jsx)(vj, {
                item: PM,
                cost: mM,
                currencyAmounts: HM.currencyAmounts
              })
            }), JM && tM === aM && (0, LM.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, LM.jsx)(lS.b, {
                text: dM
              }), (0, LM.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, LM.jsx)(lS.b, {
                  text: (0, JS.e)("", JM.enchantments, JM.enchantmentData)
                })
              })]
            })]
          }, aM)
        },
        XM = function(MM) {
          for (const rM in MM)
            if (MM[rM].smp) return !0;
          return !1
        }(HM.shopInfo),
        IM = BS(HM.shopInfo, vM);
      return (0, LM.jsx)(LS.d, {
        className: "Menu ShopBody",
        show: SM,
        children: 0 !== Object.keys(HM.shopInfo).length && (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, LM.jsx)(mM, {
              items: tS(HM.shopInfo).map((MM => {
                var rM;
                return {
                  id: MM,
                  title: null !== (rM = HM.shopInfo[MM].customTitle) && void 0 !== rM ? rM : MM,
                  redDot: HM.redDotInfo.categoryHasRedDot(MM)
                }
              })),
              link: zM ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, wS.h)({
                    page: (0, wS.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: vM,
              onClick: AM,
              padStartsOnTab: (0, eS.g)(vM)
            }), (0, LM.jsx)("div", {
              className: "MenuSideBarFooter",
              children: HM.currencyAmounts && Object.keys(HM.currencyAmounts).map((MM => {
                var rM;
                const iM = HM.currencyAmounts[MM];
                return iM.hidden ? null : (0, LM.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (pM ? "SmallText" : ""),
                  children: [(0, LM.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, LM.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: iM.iconColour
                      },
                      children: (0, LM.jsx)(Kj, {
                        iconName: iM.icon
                      })
                    }), "\xa0", (0, HS.e)(iM.amount, 6)]
                  }), (null === (rM = iM.subtext) || void 0 === rM ? void 0 : rM.length) > 0 && (0, LM.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, LM.jsx)(lS.b, {
                      text: iM.subtext
                    })
                  })]
                }, MM)
              }))
            })]
          }), (0, LM.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [XM && (0, LM.jsx)(Zj, {
              show: SM,
              shopInfo: HM.shopInfo,
              selectedCategoryKey: vM,
              buy: (MM, rM, iM) => {
                YM(MM, rM, iM)
              },
              canAfford: FM,
              message: HM.onBoughtInfo
            }), null === IM && (0, LM.jsxs)(LM.Fragment, {
              children: [(0, LM.jsx)("div", {
                className: jM()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== HM.onBoughtInfo
                }),
                children: (0, LM.jsx)(lS.b, {
                  text: dM.current
                })
              }), (0, LM.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, LM.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (rM = HM.shopInfo[vM]) || void 0 === rM ? void 0 : rM.description) && (0, LM.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, LM.jsx)(lS.b, {
                      text: HM.shopInfo[vM].description
                    })
                  }), SM && (0, LM.jsx)("div", {
                    className: "ShopItems",
                    ref: EM,
                    "data-pad-initial-area": !0,
                    children: tS(null === (iM = HM.shopInfo[vM]) || void 0 === iM ? void 0 : iM.items).map(((MM, rM) => BM(MM, rM)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Aj(MM) {
      let {
        item: rM,
        minWidth: iM,
        minHeight: OM
      } = MM;
      const {
        image: SM,
        schematicId: jM,
        imageColour: aM
      } = rM;
      if (jM) return (0, LM.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${iM}rem`,
          height: `${OM}rem`
        },
        children: (0, LM.jsx)(ES.b, {
          game: {
            schematicId: jM
          }
        })
      });
      var nM, QM;
      if ((0, yS.d)(SM)) return (0, LM.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${iM}rem`,
          height: "0",
          minHeight: `${OM}rem`
        },
        children: (0, LM.jsx)(yS.b, {
          itemName: SM,
          amount: null !== (nM = rM.amount) && void 0 !== nM ? nM : 0,
          amountFontSize: OM / 4 + "rem",
          enchantmentTier: null === (QM = rM.enchant) || void 0 === QM ? void 0 : QM.tier
        })
      });
      const zM = SM.slice(-4);
      return ".jpg" === zM || ".png" === zM ? (0, LM.jsx)(xj, {
        image: SM,
        minWidth: iM
      }) : (0, LM.jsx)(PM.b, {
        name: SM,
        className: "SelectedItemImage",
        style: {
          color: aM
        }
      })
    }

    function xj(MM) {
      let {
        image: rM,
        minWidth: iM
      } = MM;
      const {
        gameNameWithVariation: OM
      } = (0, Ar.j)("connectedGame"), SM = rM.endsWith(".jpg");
      return (0, LM.jsx)("img", {
        className: jM()({
          ShopPixelImage: !SM
        }),
        style: {
          width: `${SM?1.6*iM:iM}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,fM.Mb)(OM)}/${rM}`,
        alt: rM,
        draggable: !1
      })
    }

    function vj(MM) {
      let {
        item: rM,
        cost: iM,
        currencyAmounts: OM
      } = MM;
      const SM = !isNaN(iM) && 0 !== iM && Yj(OM, rM.currency);
      let jM = null;
      return rM.buyButtonText ? jM = rM.buyButtonText : SM ? (jM = iM, rM.sell && (jM = -1 * iM), jM = jM.toString()) : 0 === iM ? jM = "Free" : rM.isRewardedAd && (jM = "Watch ad"), (0, Ui.J)(jM) || " " === jM ? null : (0, LM.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [SM && (0, LM.jsx)("div", {
          style: {
            color: OM[rM.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, LM.jsx)(Kj, {
            iconName: OM[rM.currency].icon
          })
        }), (0, LM.jsx)("div", {
          className: "BuyItemCost",
          children: (0, LM.jsx)(lS.b, {
            text: jM
          })
        })]
      })
    }

    function Fj(MM) {
      let {
        item: rM,
        currInput: iM,
        updateInput: SM,
        onSubmit: jM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)(), nM = (0, OM.useRef)(null);
      if ((0, OM.useEffect)((() => {
          const MM = nM.current;
          MM && MM.value !== iM && document.activeElement !== MM && (MM.value = null !== iM && void 0 !== iM ? iM : "")
        }), [iM]), !rM.userInput) return null;
      let QM = rM.userInput;
      if (yM.featureFlags.sanitizeShopInput && "text" === rM.userInput.type && (QM = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === QM.type || "number" === QM.type) {
        var zM, mM;
        console.assert(void 0 !== iM, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(rM)}`);
        const MM = "text" === QM.type && QM.wordCharsOnly;
        return (0, LM.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, LM.jsx)(GM.b, {
            className: "ShopItemUserInputText",
            placeholderText: PM(QM.placeholderText),
            defaultValue: iM,
            domRef: nM,
            onValueChange: (rM, iM) => {
              !0 === MM && (rM = (0, GS.lb)(rM)), nM.current.value = rM, SM(rM)
            },
            onEnter: jM,
            type: QM.type
          }, (null !== (zM = QM.initialValue) && void 0 !== zM ? zM : "") + (null !== (mM = QM.placeholderText) && void 0 !== mM ? mM : ""))
        })
      }
      if ("dropdown" === QM.type) {
        console.assert(void 0 !== iM, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(rM)}`);
        const MM = QM.autoSubmit;
        return (0, LM.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, LM.jsx)(fr.e, {
            options: QM.dropdownOptions.map((MM => (0, hS.d)(MM))),
            value: iM,
            onChange: rM => {
              let {
                value: iM
              } = rM;
              SM(iM), MM && jM(iM)
            }
          })
        })
      }
      return "player" === QM.type ? (0, LM.jsx)(Bj, {
        userInput: QM,
        currInput: iM,
        updateInput: SM
      }) : "color" === QM.type ? (0, LM.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, LM.jsx)("input", {
          type: "color",
          value: iM,
          onChange: MM => {
            SM(MM.target.value)
          }
        })
      }) : null
    }

    function Bj(MM) {
      let {
        userInput: rM,
        currInput: iM,
        updateInput: OM
      } = MM;
      const SM = (0, Ar.j)("players"),
        jM = (0, Ar.j)("hiddenPlayerNames"),
        aM = (0, hS.g)(SM.ids, SM.localId, rM);
      return (0, LM.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, LM.jsx)(fr.e, {
          options: aM.map((MM => {
            const {
              name: rM
            } = SM.byId[MM];
            return {
              value: MM,
              label: null === rM ? "" : (0, US.d)(rM, jM)
            }
          })),
          value: iM,
          onChange: MM => {
            let {
              value: rM
            } = MM;
            OM(rM)
          }
        })
      })
    }

    function Xj(MM) {
      let {
        ids: rM
      } = MM;
      return rM
    }

    function Ij(MM) {
      let {
        localId: rM
      } = MM;
      return rM
    }

    function Kj(MM) {
      let {
        iconName: rM
      } = MM;
      return lM.gameBridge.lookup("isItemName", rM) ? (0, LM.jsx)(yS.b, {
        itemName: rM,
        amount: 1
      }) : (0, LM.jsx)(PM.b, {
        name: rM,
        className: "2x"
      })
    }
    var qj = iM(1717);
    const Tj = (0, iM(1474).g)((MM => MM.PadLobbyShortcuts)),
      Vj = (0, OM.lazy)((() => Promise.resolve().then((() => iM(5035))).then((MM => ({
        default: MM.Lobbyleaderboard
      }))))),
      cj = (0, OM.lazy)((() => iM.e(242).then((() => iM(42181))).then((MM => ({
        default: MM.LobbyManageView
      })))));

    function Ma(MM) {
      let {
        show: rM
      } = MM;
      return rM ? (0, LM.jsx)(ra, {}) : null
    }

    function ra() {
      const MM = (0, bS.d)();
      return (0, LM.jsxs)(LM.Fragment, {
        children: [(0, LM.jsx)(Tj, {}), (0, LM.jsxs)(OM.Suspense, {
          fallback: (0, LM.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, LM.jsx)(CM.d, {})
          }),
          children: [MM && (0, LM.jsx)(cj, {
            leaderboard: (0, LM.jsx)(Vj, {})
          }), !MM && (0, LM.jsx)(Vj, {})]
        })]
      })
    }
    var ia = iM(1641),
      Oa = iM(3381),
      Sa = iM(1830),
      ja = iM(3432),
      aa = iM(2910),
      Pa = iM(1568),
      na = iM(1522),
      Qa = iM(3358),
      za = iM(3370),
      La = iM(2455);
    const ma = "storeRecentGiftRecipients",
      Ha = new Map;

    function ha() {
      try {
        const MM = Si.g.getItem(ma);
        return Array.isArray(MM) ? MM.filter((MM => "string" === typeof(null === MM || void 0 === MM ? void 0 : MM.name) && MM.name.length > 0)).map((MM => ({
          name: MM.name,
          cosmetics: MM.cosmetics && "object" === typeof MM.cosmetics ? MM.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Ja(MM, rM) {
      var iM;
      const [SM, jM] = (0, OM.useState)(""), [aM, PM] = (0, OM.useState)("search"), [nM, QM] = (0, OM.useState)(null), [zM, LM] = (0, OM.useState)(null), mM = (0, OM.useRef)(null), HM = (0, OM.useRef)(null);
      (0, OM.useEffect)((() => () => {
        mM.current && clearTimeout(mM.current)
      }), []), (0, OM.useEffect)((() => {
        rM || dM()
      }), [rM]);
      const hM = null !== (iM = null === nM || void 0 === nM ? void 0 : nM.name) && void 0 !== iM ? iM : null;

      function JM() {
        mM.current && (clearTimeout(mM.current), mM.current = null)
      }

      function dM() {
        JM(), jM(""), PM("search"), QM(null)
      }(0, OM.useEffect)((() => {
        if (null === hM || MM === uM.NULL_USER_CONTEXT) return;
        const rM = hM.toLowerCase();
        if (rM === MM.getPlayerName().toLowerCase()) return void LM({
          name: hM,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const iM = Ha.get(rM);
        if (iM) return void LM({
          name: hM,
          result: iM
        });
        let OM = !1;
        return async function(MM, rM) {
          try {
            const iM = await (0, uM.postJsonWithMetricsCookiesAndJsonResponse)(`${lr.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: rM
            }, {
              retries: 1
            }, MM.getMetricsCookies());
            if ("boolean" !== typeof(null === iM || void 0 === iM ? void 0 : iM.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(iM)}`);
            return iM
          } catch (iM) {
            return console.error("Failed to look up gift recipient:", iM), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(MM, hM).catch((MM => (console.error("Gift recipient lookup failed:", MM), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((MM => {
          !0 !== MM.giftRecipientFound && "store:giftRecipientLookupFailed" === MM.giftRecipientError || Ha.set(rM, MM), OM || LM({
            name: hM,
            result: MM
          })
        })), () => {
          OM = !0
        }
      }), [hM, MM]);
      const yM = (0, OM.useMemo)((() => {
        const MM = SM.trim();
        if (!MM) return {
          status: "none"
        };
        if (!nM || nM.name !== MM || (null === zM || void 0 === zM ? void 0 : zM.name) !== nM.name) return {
          status: "pending",
          name: MM
        };
        const rM = zM.result;
        return !1 === rM.giftRecipientFound ? {
          status: "error",
          name: nM.name,
          error: rM.giftRecipientError
        } : {
          status: "found",
          name: rM.giftRecipientName,
          ownedPacks: rM.giftRecipientOwnedPacks,
          hasSuperRank: rM.giftRecipientHasSuperRank,
          isSubscriber: rM.giftRecipientIsSubscriber
        }
      }), [SM, nM, zM]);
      (0, OM.useEffect)((() => {
        "found" === yM.status && "typed" === (null === nM || void 0 === nM ? void 0 : nM.source) && HM.current !== yM.name && (HM.current = yM.name, (0, Sr.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [yM, nM]);
      const lM = (null === zM || void 0 === zM ? void 0 : zM.name) === (null === nM || void 0 === nM ? void 0 : nM.name) ? null === zM || void 0 === zM ? void 0 : zM.result : null,
        EM = !0 === (null === lM || void 0 === lM ? void 0 : lM.giftRecipientFound) ? lM.giftRecipientCosmetics : null;
      return {
        query: SM,
        via: aM,
        recipient: yM,
        recipientCosmetics: EM,
        type: function(MM) {
          jM(MM), PM("search"), JM();
          const rM = MM.trim();
          rM ? mM.current = setTimeout((() => {
            QM({
              name: rM,
              source: "typed"
            })
          }), 400) : QM(null)
        },
        choose: function(MM, rM) {
          JM(), jM(MM), PM("typed" === rM ? "search" : "prefilled" === rM ? "prefilled" : "suggestion"), QM({
            name: MM,
            source: rM
          }), "typed" !== rM && "prefilled" !== rM && (0, Sr.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: rM
          })
        },
        clear: dM,
        recordGift: function(MM, rM) {
          ! function(MM) {
            Ha.delete(MM.toLowerCase())
          }(MM), LM((iM => {
            if (!iM || iM.name.toLowerCase() !== MM.toLowerCase() || !0 !== iM.result.giftRecipientFound || "superRank" === rM) return iM;
            const OM = iM.result.giftRecipientOwnedPacks;
            return {
              ...iM,
              result: {
                ...iM.result,
                giftRecipientOwnedPacks: OM.includes(rM) ? OM : [...OM, rM]
              }
            }
          }))
        }
      }
    }
    var da = iM(2449),
      ya = iM(5041),
      la = iM(222),
      Ea = iM(3511);
    const Ua = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ga = iM(2412),
      Ca = iM(605),
      ea = iM(2488),
      ba = iM(2818);

    function wa(MM) {
      let {
        cosmetics: rM
      } = MM;
      return (0, LM.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, LM.jsx)(ea.c, {
          cosmetics: rM
        })
      })
    }

    function ta(MM, rM) {
      var iM, OM;
      const SM = null !== (iM = MM.friend) && void 0 !== iM ? iM : {
        isError: !1,
        name: MM.name,
        ranks: [],
        cosmetics: null !== (OM = MM.cosmetics) && void 0 !== OM ? OM : {},
        nameColour: Ca.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return rM ? {
        ...SM,
        cosmetics: rM
      } : SM
    }

    function ga(MM) {
      let {
        pending: rM
      } = MM;
      return (0, LM.jsx)("span", {
        className: "StoreRecipientLoader",
        children: rM && (0, LM.jsx)(CM.d, {})
      })
    }

    function ua(MM) {
      var rM;
      let {
        selfName: iM,
        giftRecipient: SM,
        suggestionsVersion: nM,
        pulseSignal: zM,
        disabled: mM
      } = MM;
      const {
        t: HM
      } = (0, aM.A)(), hM = (0, vM.m)(), JM = (0, OM.useRef)(null), dM = (0, OM.useRef)(null), {
        query: lM,
        via: EM,
        recipient: UM,
        recipientCosmetics: CM
      } = SM, eM = (0, La.o)(lM), bM = (0, OM.useMemo)((() => {
        const MM = yM.featureFlags.useSocialFeatures ? hM.friends.filter((MM => !MM.isError)) : [];
        return (0, La.i)({
          onlineFriends: (0, vM.h)(MM),
          recentRecipients: ha(),
          friends: MM,
          selfName: iM,
          max: 8
        })
      }), [hM.friends, iM, nM]), wM = lM.trim().toLowerCase(), tM = "search" !== EM && wM ? bM.find((MM => MM.name.toLowerCase() === wM)) : void 0, gM = tM && "prefilled" === EM ? [tM, ...bM.filter((MM => MM !== tM))] : bM, uM = "" !== wM && !tM, RM = uM ? lM : "", pM = gM.length > 0;
      (0, OM.useEffect)((() => {
        JM.current && JM.current.value !== RM && (JM.current.value = RM)
      }), [RM]), (0, OM.useEffect)((() => {
        JM.current && (JM.current.disabled = mM)
      }), [mM, zM]);
      const WM = (0, OM.useRef)(0);

      function DM() {
        "self" !== eM && (0, Sr.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), SM.clear()
      }

      function kM(MM) {
        var rM, iM;
        if (mM) return;
        if (" " === MM.key || "Enter" === MM.key) return MM.preventDefault(), void MM.currentTarget.click();
        const OM = Array.from(null !== (rM = null === (iM = dM.current) || void 0 === iM ? void 0 : iM.querySelectorAll("[role=radio]")) && void 0 !== rM ? rM : []),
          SM = OM.indexOf(MM.currentTarget);
        let jM;
        "ArrowRight" === MM.key || "ArrowDown" === MM.key ? jM = OM[(SM + 1) % OM.length] : "ArrowLeft" === MM.key || "ArrowUp" === MM.key ? jM = OM[(SM - 1 + OM.length) % OM.length] : "Home" === MM.key ? jM = OM[0] : "End" === MM.key && (jM = OM[OM.length - 1]), jM && (MM.preventDefault(), jM.focus(), jM.click())
      }(0, OM.useEffect)((() => {
        var MM;
        zM > WM.current && !mM && (WM.current = zM, null === (MM = JM.current) || void 0 === MM || MM.focus())
      }), [zM, mM]);
      const ZM = "self" === eM,
        oM = null !== (rM = null === tM || void 0 === tM ? void 0 : tM.name) && void 0 !== rM ? rM : null,
        fM = "error" === UM.status ? UM.error : null,
        YM = "store:giftRecipientLookupFailed" === fM;
      return (0, LM.jsxs)("div", {
        className: jM()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: mM,
          StoreRecipientStripNoChips: !pM
        }),
        children: [(0, LM.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: HM("store:buyingFor")
        }), (0, LM.jsxs)("div", {
          ref: dM,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": HM("store:whoIsItFor"),
          children: [(0, LM.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": ZM,
            tabIndex: mM || !ZM && null !== oM ? -1 : 0,
            className: jM()("StoreRecipientMe", {
              StoreRecipientChecked: ZM
            }),
            onClick: () => {
              mM || DM()
            },
            onKeyDown: kM,
            children: [(0, LM.jsx)(PM.b, {
              name: "user"
            }), " ", HM("store:me")]
          }), pM && (0, LM.jsx)("div", {
            className: "StoreRecipientChips",
            children: gM.map((MM => {
              const rM = MM === tM;
              return (0, LM.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": rM,
                tabIndex: !mM && rM ? 0 : -1,
                title: MM.name,
                className: jM()("StoreRecipientChip", {
                  StoreRecipientChecked: rM
                }),
                onClick: () => {
                  mM || function(MM) {
                    "gift" !== eM && (0, Sr.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), SM.choose(MM.name, MM.kind)
                  }(MM)
                },
                onKeyDown: kM,
                children: (0, LM.jsx)(ba.f, {
                  playerSocialPreview: ta(MM, rM ? CM : null),
                  opensProfileCard: !1,
                  isFriend: null !== MM.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== MM.friend,
                  status: null === MM.friend ? null : void 0,
                  trailing: rM ? (0, LM.jsx)(ga, {
                    pending: "pending" === UM.status
                  }) : void 0
                })
              }, MM.name)
            }))
          })]
        }), (0, LM.jsxs)("div", {
          className: jM()("StoreRecipientSearch", {
            StoreRecipientChecked: uM,
            StoreRecipientSearchPulse: zM > 0 && !uM,
            StoreRecipientSearchError: null !== fM && !YM
          }),
          onClick: () => {
            var MM;
            null === (MM = JM.current) || void 0 === MM || MM.focus()
          },
          children: [uM && "found" === UM.status && CM && (0, LM.jsx)(wa, {
            cosmetics: CM
          }), !(uM && "found" === UM.status && CM) && (0, LM.jsx)(PM.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, LM.jsx)(GM.b, {
            className: "StoreRecipientSearchInput",
            domRef: JM,
            placeholderText: HM("store:searchName"),
            defaultValue: RM,
            maxLength: sM.g,
            onValueChange: function(MM) {
              "gift" !== eM && MM.trim() && (0, Sr.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), SM.type(MM)
            },
            onEnter: () => {
              var MM;
              const rM = null === (MM = JM.current) || void 0 === MM ? void 0 : MM.value.trim();
              rM && SM.choose(rM, "typed")
            },
            blurOnEnter: !0
          }), uM && (0, LM.jsx)(ga, {
            pending: "pending" === UM.status
          }), uM && (0, LM.jsx)("div", {
            ...(0, QM.fb)({
              disabled: mM
            }),
            "aria-label": HM("store:clearRecipient"),
            title: HM("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: MM => {
              MM.stopPropagation(), mM || DM()
            },
            children: (0, LM.jsx)(PM.b, {
              name: "xmark"
            })
          })]
        }, zM), fM && (0, LM.jsx)("div", {
          className: jM()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: YM
          }),
          role: "status",
          children: HM(fM)
        })]
      })
    }
    var Ra = iM(2382),
      pa = iM(3972),
      Wa = iM(3520),
      sa = iM(2414);
    const Da = iM.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function ka() {
      (0, sa.g)(Da, {
        lowPriority: !1
      })
    }

    function Za(MM) {
      let {
        onBack: rM,
        cta: iM,
        recipient: SM,
        afterCta: jM
      } = MM;
      const {
        t: nM
      } = (0, aM.A)(), [zM, mM] = (0, OM.useState)("starting"), HM = (0, OM.useRef)(null), hM = (0, cr.b)(), JM = (0, OM.useRef)(null), dM = (0, OM.useCallback)((() => {
        const MM = HM.current;
        null !== MM.error && MM.load();
        const rM = MM.play();
        JM.current = rM, rM.catch((MM => {
          (0, pa.e)("Failed to play Super Rank video", MM), hM.current && JM.current === rM && mM("failed")
        }))
      }), [hM]);
      return (0, OM.useEffect)((() => {
        const MM = HM.current;
        let rM;

        function iM() {
          clearTimeout(rM), rM = setTimeout(dM, 3e3)
        }
        return dM(), MM.addEventListener("ended", iM), () => {
          clearTimeout(rM), MM.removeEventListener("ended", iM)
        }
      }), [dM]), (0, LM.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, LM.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, LM.jsx)(QM.c, {
            className: "StoreDetailBackButton",
            onClick: rM,
            padBack: !0,
            children: nM("general:back")
          }), (0, LM.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, LM.jsx)(PM.b, {
              name: "bolt"
            }), " ", nM("homePage:superRank")]
          }), SM]
        }), (0, LM.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, LM.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, LM.jsx)("video", {
              ref: HM,
              src: `${lr.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Da,
              muted: !0,
              playsInline: !0,
              controls: "playing" === zM,
              onPlaying: () => {
                mM("playing")
              },
              onError: () => {
                mM("failed")
              }
            }), ("failed" === zM || "loading" === zM) && (0, LM.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, LM.jsx)(QM.e, {
                ariaLabel: nM("general:play"),
                loading: "loading" === zM,
                onClick: () => {
                  mM("loading"), dM()
                },
                touchPressOn: "pointerup",
                children: (0, LM.jsx)(PM.b, {
                  name: "play"
                })
              })
            })]
          }), (0, LM.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, LM.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, LM.jsx)(Wa.d, {})
            }), (0, LM.jsxs)("div", {
              className: "StoreTileActions",
              children: [iM, jM]
            })]
          })]
        })]
      })
    }
    var oa = iM(2834),
      fa = iM(3938),
      Ya = iM(3488),
      Na = iM(3493),
      Aa = iM(3459);
    const xa = [Ca.x.yellow, Ca.x.green, Ca.x.aqua, Ca.x.blue, Ca.x.purple, Ca.x.red];

    function va(MM) {
      return "needsRecipient" === MM || "lookingUp" === MM || "gift" === MM || "recipientOwns" === MM || "recipientSharesOwned" === MM || "recipientSubscribed" === MM
    }

    function Fa(MM) {
      const {
        onKeyDown: rM,
        ...iM
      } = (0, QM.fb)();
      return {
        ...iM,
        "aria-label": MM,
        onKeyDown: MM => {
          MM.target === MM.currentTarget && (null === rM || void 0 === rM || rM(MM))
        }
      }
    }

    function Ba(MM) {
      let {
        text: rM
      } = MM;
      return (0, LM.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(rM).map(((MM, rM) => (0, LM.jsx)("span", {
          style: {
            color: xa[rM % xa.length]
          },
          children: MM
        }, rM)))
      })
    }
    const Xa = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Ia(MM) {
      let {
        state: rM,
        item: iM,
        price: OM,
        busy: SM,
        highlight: nM = !1,
        onAct: zM,
        onNeedRecipient: mM,
        onLogin: HM
      } = MM;
      const {
        t: hM
      } = (0, aM.A)(), JM = "superRank" === iM ? kM.k.product.days : null, dM = MM => null === JM ? hM(MM ? "general:gift" : "general:buy") : hM(MM ? "store:giftDays" : "store:buyDays", {
        days: JM
      }), yM = (MM, rM) => {
        const iM = (0, LM.jsxs)(LM.Fragment, {
          children: [null === MM && (0, LM.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== MM && (0, LM.jsx)("span", {
            className: "StoreCtaLabel",
            title: MM,
            children: MM
          })]
        });
        return null !== JM ? (0, LM.jsxs)(LM.Fragment, {
          children: [rM && (0, LM.jsx)("span", {
            className: "StoreCtaIcon",
            children: rM
          }), iM, (0, LM.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, LM.jsx)(Ra.b, {
              amount: OM
            })]
          })]
        }) : (0, LM.jsxs)(LM.Fragment, {
          children: [(0, LM.jsxs)("span", {
            className: "StoreCtaLead",
            children: [iM, "\xb7"]
          }), (0, LM.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [rM, (0, LM.jsx)(Ra.b, {
              amount: OM
            })]
          })]
        })
      };
      let lM;
      switch (rM) {
        case "pending":
          lM = (0, LM.jsx)(QM.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: yM(null)
          });
          break;
        case "login":
          lM = (0, LM.jsx)(QM.p, {
            className: "StoreCtaButton",
            onClick: HM,
            children: yM(dM(!1))
          });
          break;
        case "owned":
          lM = (0, LM.jsx)(QM.i, {
            className: "StoreCtaButton",
            onClick: () => {
              bM.d.set({
                openEverythingMenuName: Ur.m.CUSTOMISATION
              })
            },
            children: (0, LM.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, LM.jsx)(PM.b, {
                name: "shirt"
              }), " ", hM("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          lM = (0, LM.jsx)(QM.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, LM.jsx)("span", {
              className: "StoreCtaLabel",
              children: hM(Xa[rM])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          lM = (0, LM.jsx)(QM.p, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === rM || null === OM,
            loading: "lookingUp" === rM || SM,
            onClick: zM,
            analyticsClick: {
              id: "store.gift",
              value: iM
            },
            children: yM(dM(!0), La.e)
          });
          break;
        case "buy":
        case "recharge":
          lM = (0, LM.jsx)(QM.p, {
            className: "StoreCtaButton",
            loading: SM,
            disabled: null === OM,
            onClick: zM,
            analyticsClick: {
              id: "store.buy",
              value: iM
            },
            children: yM(dM(!1))
          })
      }
      return (0, LM.jsx)("div", {
        className: jM()("StoreCta", {
          StoreCtaHighlight: nM,
          StoreCtaLabelFirst: null !== JM
        }),
        onClick: MM => {
          MM.stopPropagation(), "needsRecipient" === rM && mM()
        },
        children: lM
      })
    }

    function Ka() {
      const {
        t: MM
      } = (0, aM.A)();
      return (0, LM.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, LM.jsxs)("li", {
          children: [(0, LM.jsx)(PM.b, {
            name: "check"
          }), (0, LM.jsx)(Ba, {
            text: MM("store:colourfulNames")
          })]
        }), (0, LM.jsxs)("li", {
          children: [(0, LM.jsx)(PM.b, {
            name: "check"
          }), MM("store:perkCapes")]
        }), (0, LM.jsxs)("li", {
          children: [(0, LM.jsx)(PM.b, {
            name: "check"
          }), MM("store:perkNoAdverts")]
        }), (0, LM.jsxs)("li", {
          children: [(0, LM.jsx)(PM.b, {
            name: "check"
          }), MM("store:perkFriends", {
            count: (0, ir.c)(["super"])
          })]
        })]
      })
    }

    function qa(MM) {
      let {
        daysLeft: rM,
        totalDays: iM,
        urgent: OM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)(), PM = iM > 0 ? Math.min(1, Math.max(.03, rM / iM)) : 1;
      return (0, LM.jsxs)("div", {
        className: jM()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: OM
        }),
        children: [(0, LM.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === rM ? SM("store:oneDayLeft") : SM("store:daysLeft", {
            days: rM
          })
        }), (0, LM.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, LM.jsx)("i", {
            style: {
              width: 100 * PM + "%"
            }
          })
        })]
      })
    }

    function Ta(MM) {
      var rM;
      let {
        state: iM,
        urgent: OM,
        daysLeft: SM,
        totalDays: nM,
        recipientHasSuperRank: QM,
        busy: zM,
        highlight: mM,
        onOpen: HM,
        onAct: hM,
        onNeedRecipient: JM,
        onLogin: dM
      } = MM;
      const {
        t: yM
      } = (0, aM.A)(), lM = va(iM), {
        days: EM
      } = kM.k.product, UM = yM("store:recipientHasSuperRank", {
        giftDays: EM
      }), GM = null === (rM = TM("subscribed" === iM)) || void 0 === rM ? void 0 : rM.text;
      return (0, LM.jsxs)("div", {
        className: jM()("StoreTile StoreSuperRankTile", {
          StoreTileGift: lM,
          StoreSuperRankTileUrgent: "recharge" === iM && OM,
          StoreSuperRankTileWithChip: QM,
          StoreSuperRankTileGiftReady: "gift" === iM
        }),
        ...Fa(yM("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: ka,
        onFocus: ka,
        onClick: HM,
        children: [(0, LM.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ga.e})`
          }
        }), lM && (0, LM.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, LM.jsxs)("div", {
          className: "StoreTileContent",
          children: [QM && (0, LM.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: UM,
            children: UM
          }), (0, LM.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, LM.jsx)(PM.b, {
              name: "bolt"
            }), " ", yM("homePage:superRank")]
          }), lM && (0, LM.jsx)("div", {
            className: "StoreTilePitch",
            children: yM("store:giftPitch", {
              days: EM
            })
          }), "recharge" === iM && (0, LM.jsx)(qa, {
            daysLeft: SM,
            totalDays: nM,
            urgent: OM
          }), GM && (0, LM.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, LM.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: GM
            })
          }), (0, LM.jsx)(Ka, {}), (0, LM.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, LM.jsx)(Ia, {
              state: iM,
              item: "superRank",
              price: kM.k.price,
              busy: zM,
              highlight: mM,
              onAct: hM,
              onNeedRecipient: JM,
              onLogin: dM
            }), "needsRecipient" === iM && (0, LM.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: yM("store:pickRecipientFirst")
            }), "recharge" === iM && OM && (0, LM.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === SM ? yM("store:endsInOneDay") : yM("store:endsInDays", {
                days: SM
              })
            })]
          })]
        })]
      })
    }
    const Va = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function ca(MM) {
      var rM;
      let {
        pack: iM,
        state: SM,
        busy: nM,
        onOpen: QM,
        onAct: zM,
        onNeedRecipient: mM,
        onLogin: HM
      } = MM;
      const {
        t: hM
      } = (0, aM.A)(), JM = ia.d[iM], dM = Qa.k[iM], yM = (0, Ga.m)(iM), lM = (0, OM.useRef)(null);
      (0, Ya.h)(iM, lM);
      const EM = va(SM),
        UM = null !== (rM = JM.displayName) && void 0 !== rM ? rM : iM,
        GM = (0, fa.d)((() => {
          (0, oa.e)();
          const MM = (0, Ya.f)(iM);
          void 0 !== MM && (0, sa.g)((0, Ya.e)(MM))
        })),
        [CM] = (0, OM.useState)(Ea.f);
      return (0, LM.jsxs)("div", {
        className: jM()("StoreTile StorePackTile", Va[JM.tier], {
          StorePackTileOwned: "owned" === SM,
          StorePackTileRecipientOwns: "recipientOwns" === SM,
          StoreTileGift: EM
        }),
        ...Fa(UM),
        ref: lM,
        "data-store-item": iM,
        onClick: QM,
        onPointerMove: MM => {
          "mouse" !== MM.pointerType || 0 === MM.movementX && 0 === MM.movementY || CM || GM.start()
        },
        onPointerLeave: GM.cancel,
        children: [dM && (0, LM.jsx)(dM, {}), (0, LM.jsx)("div", {
          className: "StorePackCharacters",
          children: yM.map((MM => (0, LM.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ga.g)(MM)})`
            }
          }, MM)))
        }), (0, LM.jsx)("div", {
          className: "StoreTileScrim"
        }), EM && (0, LM.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, LM.jsx)(Aa.e, {
          pack: iM,
          className: jM()({
            PackAnimatedBadgeBesideRibbon: EM
          })
        }), (0, LM.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, LM.jsx)("div", {
            className: "StoreTileTitle",
            children: UM
          }), (0, LM.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, LM.jsx)(Na.d, {
              tier: JM.tier
            }), " \xb7 ", hM("store:itemCount", {
              count: (0, OS.h)(iM)
            }), "owned" === SM && (0, LM.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, LM.jsx)(PM.b, {
                name: "check"
              }), " ", hM("general:owned")]
            })]
          }), (0, LM.jsx)(Ia, {
            state: SM,
            item: iM,
            price: (0, kM.e)(iM),
            busy: nM,
            onAct: zM,
            onNeedRecipient: mM,
            onLogin: HM
          })]
        })]
      })
    }
    var MP = iM(3449),
      rP = iM(1636),
      iP = iM(1530),
      OP = iM(3961);

    function SP() {
      return (0, LM.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var jP = iM(1424),
      aP = iM(1645),
      PP = iM(35051);

    function nP(MM) {
      let {
        character: rM,
        drawn: iM,
        onDrawn: SM
      } = MM;
      const aM = (0, OM.useRef)(null),
        PM = (0, PP.h)(rM);
      return (0, LM.jsx)("div", {
        className: jM()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: iM
        }),
        children: (0, LM.jsx)(OM.Suspense, {
          fallback: null,
          children: (0, LM.jsx)(oa.c, {
            ref: aM,
            framing: "store",
            turntableFromYaw: iM ? PM.yaw : null,
            onReady: () => {
              var MM, iM;
              null === (MM = aM.current) || void 0 === MM || MM.setOrbit(PM), null === (iM = aM.current) || void 0 === iM || iM.setAllCosmetics(aP.d[rM].cosmetics)
            },
            onDrawn: SM
          })
        })
      })
    }
    const QP = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      zP = new Set(["wildSpirits"]);

    function LP(MM) {
      var rM;
      let {
        tile: iM,
        design: SM,
        canGoLive: nM,
        live: QM,
        busy: zM,
        highlight: mM,
        onLiveStart: HM,
        onLiveEnd: hM,
        onOpen: JM,
        onAct: dM,
        onNeedRecipient: yM,
        onLogin: lM
      } = MM;
      const {
        t: EM
      } = (0, aM.A)(), {
        pack: UM,
        state: GM
      } = iM, CM = ia.d[UM], eM = (0, ia.h)(UM), bM = (0, Ga.j)(UM), wM = Qa.k[bM], tM = zP.has(bM), {
        tier: gM
      } = CM, uM = "legendary" === gM || "mythic" === gM, RM = (0, OM.useRef)(null);
      (0, jP.e)(RM, "epic" === gM || uM || tM);
      const [pM, sM] = (0, OM.useState)(!1);
      return !QM && pM && sM(!1), (0, LM.jsxs)("div", {
        ref: RM,
        className: jM()("StoreCharacterCard", `StoreCharacterCard${SM}`, QP[gM], {
          StoreCharacterCardOwned: "owned" === GM || "recipientOwns" === GM,
          StoreCharacterCardGift: va(GM),
          StoreCharacterCardItem: void 0 === eM
        }),
        onPointerMove: MM => {
          "mouse" !== MM.pointerType || 0 === MM.movementX && 0 === MM.movementY || !nM || QM || void 0 === eM || HM()
        },
        onPointerLeave: hM,
        children: [(0, LM.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: wM && (0, LM.jsx)(wM, {
            simple: !0
          })
        }), uM && (0, LM.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, LM.jsxs)(WM.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, rP.f)({
            kind: "pack",
            pack: UM
          }),
          "data-store-item": UM,
          onClick: MM => {
            (0, iP.d)(MM) && (MM.preventDefault(), JM())
          },
          children: [(0, LM.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, LM.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, LM.jsx)("div", {
              className: jM()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: pM
              }),
              style: {
                backgroundImage: `url(${(0,Ga.q)(UM)})`
              }
            }), QM && void 0 !== eM && (0, LM.jsx)(nP, {
              character: eM,
              drawn: pM,
              onDrawn: () => {
                sM(!0)
              }
            })]
          }), (0, LM.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (rM = CM.displayName) && void 0 !== rM ? rM : UM
          }), (0, LM.jsx)(Na.d, {
            tier: gM,
            className: "StoreCharacterTier"
          })]
        }), (0, LM.jsx)("div", {
          className: "StoreCharacterScrim"
        }), tM && (0, LM.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, LM.jsx)(SP, {})
        }), (0, LM.jsx)(Aa.e, {
          pack: UM,
          iconOnly: !0,
          className: jM()({
            PackAnimatedBadgeBelowOwned: "owned" === GM
          })
        }), "owned" === GM && (0, LM.jsx)("span", {
          className: "StoreCharacterOwned",
          title: EM("general:owned"),
          "aria-label": EM("general:owned"),
          children: (0, LM.jsx)(PM.b, {
            name: "check"
          })
        }), (0, LM.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, LM.jsx)(Ia, {
            state: GM,
            item: UM,
            price: (0, kM.e)(UM),
            busy: zM,
            highlight: mM,
            onAct: dM,
            onNeedRecipient: yM,
            onLogin: lM
          })
        })]
      })
    }

    function mP(MM) {
      let {
        tiles: rM,
        busy: iM,
        highlightItem: SM,
        onOpen: jM,
        onAct: aM,
        onNeedRecipient: PM,
        onLogin: nM
      } = MM;
      const QM = (0, OP.n)("storeCharacterCardFoil"),
        zM = (0, OP.n)("storeCharacterCardSpotlight"),
        mM = QM ? "Foil" : zM ? "Spotlight" : "Showcase",
        [HM] = (0, OM.useState)(Ea.f),
        [hM, JM] = (0, OM.useState)(null);
      return (0, LM.jsx)("div", {
        className: "StoreCharacterGrid",
        children: rM.map((MM => (0, LM.jsx)(LP, {
          tile: MM,
          design: mM,
          canGoLive: !HM,
          live: hM === MM.pack,
          busy: iM,
          highlight: SM === MM.pack,
          onLiveStart: () => {
            JM(MM.pack)
          },
          onLiveEnd: () => {
            JM((rM => rM === MM.pack ? null : rM))
          },
          onOpen: () => {
            jM(MM.pack)
          },
          onAct: () => {
            aM(MM.pack)
          },
          onNeedRecipient: PM,
          onLogin: () => {
            nM(MM.pack)
          }
        }, MM.pack)))
      })
    }
    var HP = iM(35064);

    function hP(MM) {
      let {
        title: rM
      } = MM;
      return (0, LM.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, LM.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: rM
        })
      })
    }

    function JP(MM) {
      let {
        mountAtOnce: rM,
        children: iM
      } = MM;
      const SM = (0, OM.useRef)(null),
        [jM, aM] = (0, OM.useState)(rM),
        PM = (0, HP.d)();
      return (0, OM.useLayoutEffect)((() => {
        const MM = SM.current;
        MM && MM.getBoundingClientRect().top < MM.parentElement.getBoundingClientRect().bottom && aM(!0)
      }), []), jM || PM ? (0, LM.jsx)(LM.Fragment, {
        children: iM
      }) : (0, LM.jsx)("div", {
        ref: SM
      })
    }

    function dP(MM) {
      let {
        layout: rM,
        mountAtOnce: iM,
        bundleGift: OM,
        superRankTotalDays: SM,
        busy: jM,
        highlightItem: PM,
        onOpen: nM,
        onAct: QM,
        onNeedRecipient: zM,
        onLogin: mM,
        dailyDropTile: HM,
        dealBanner: hM
      } = MM;
      const {
        t: JM
      } = (0, aM.A)(), dM = rM.packs.filter((MM => void 0 === (0, ia.h)(MM.pack) && !(0, ia.p)(MM.pack))), yM = rM.packs.filter((MM => void 0 !== (0, ia.h)(MM.pack))), lM = rM.packs.filter((MM => (0, ia.p)(MM.pack)));
      return (0, LM.jsxs)(LM.Fragment, {
        children: [(0, LM.jsx)(MP.b, {
          className: "StoreSuperGems",
          gift: OM,
          highlightSku: PM,
          leadingTile: HM,
          afterLeadingTile: hM
        }), (0, LM.jsx)(hP, {
          title: JM("store:rank")
        }), (0, LM.jsx)(Ta, {
          state: rM.superRank.state,
          urgent: rM.superRank.urgent,
          daysLeft: rM.superRankDaysLeft,
          totalDays: SM,
          recipientHasSuperRank: rM.recipientHasSuperRank,
          busy: jM,
          highlight: "superRank" === PM,
          onOpen: () => {
            nM("superRank")
          },
          onAct: () => {
            QM("superRank")
          },
          onNeedRecipient: zM,
          onLogin: () => {
            mM("superRank")
          }
        }), (0, LM.jsxs)(JP, {
          mountAtOnce: iM,
          children: [(0, LM.jsx)(hP, {
            title: JM("store:bundles")
          }), (0, LM.jsx)("div", {
            className: "StorePackGrid",
            children: dM.map((MM => (0, LM.jsx)(ca, {
              pack: MM.pack,
              state: MM.state,
              busy: jM,
              onOpen: () => {
                nM(MM.pack)
              },
              onAct: () => {
                QM(MM.pack)
              },
              onNeedRecipient: zM,
              onLogin: () => {
                mM(MM.pack)
              }
            }, MM.pack)))
          }), (0, LM.jsxs)(JP, {
            mountAtOnce: iM,
            children: [(0, LM.jsx)(hP, {
              title: JM("store:characters")
            }), (0, LM.jsx)(mP, {
              tiles: yM,
              busy: jM,
              highlightItem: PM,
              onOpen: nM,
              onAct: QM,
              onNeedRecipient: zM,
              onLogin: mM
            }), lM.length > 0 && (0, LM.jsxs)(LM.Fragment, {
              children: [(0, LM.jsx)(hP, {
                title: JM("store:premiumItems")
              }), (0, LM.jsx)(mP, {
                tiles: lM,
                busy: jM,
                highlightItem: PM,
                onOpen: nM,
                onAct: QM,
                onNeedRecipient: zM,
                onLogin: mM
              })]
            })]
          })]
        })]
      })
    }

    function yP(MM) {
      let {
        state: rM,
        mode: iM,
        giftName: OM,
        busy: SM,
        highlight: jM,
        purchaseError: PM,
        onBack: nM,
        onChooseRecipient: zM,
        onAct: mM,
        onLogin: HM
      } = MM;
      const {
        t: hM
      } = (0, aM.A)(), JM = TM("gift" !== iM);
      return (0, LM.jsx)(Za, {
        onBack: nM,
        recipient: "gift" === iM && (0, LM.jsxs)(LM.Fragment, {
          children: [OM && (0, LM.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: hM("store:giftFor", {
              name: OM
            }),
            children: [La.e, " ", hM("store:giftFor", {
              name: OM
            })]
          }), !OM && (0, LM.jsxs)("div", {
            ...(0, QM.fb)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: zM,
            children: [La.e, " ", hM("store:chooseRecipient")]
          })]
        }),
        cta: (0, LM.jsx)(Ia, {
          state: rM,
          item: "superRank",
          price: kM.k.price,
          busy: SM,
          highlight: jM,
          onAct: mM,
          onNeedRecipient: zM,
          onLogin: HM
        }),
        afterCta: (0, LM.jsxs)(LM.Fragment, {
          children: [JM && (0, LM.jsx)("span", {
            className: "StoreTileNote",
            children: JM.text
          }), (null === JM || void 0 === JM ? void 0 : JM.manageUrl) && (0, LM.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: JM.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: hM("payments:manageSubscription")
          }), PM && (0, LM.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: hM(PM)
          })]
        })
      })
    }
    var lP = iM(125);
    const EP = lP.k("kind", [lP.F({
      kind: lP.s("refused"),
      heldTierId: lP._(),
      until: lP.C()
    }), lP.F({
      kind: lP.s("refund"),
      tierId: lP._(),
      refundedMs: lP.C(),
      forfeitedMs: lP.C(),
      premiumCurrency: lP.C()
    }), lP.F({
      kind: lP.s("none")
    })]);
    async function UP(MM) {
      const rM = await (0, uM.postJsonWithMetricsCookiesAndJsonResponse)(`${lr.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: MM
      }, {
        retries: 1
      });
      return EP.parse(rM)
    }
    var GP = iM(3411),
      CP = iM(3452);

    function eP(MM, rM) {
      const iM = Math.max(1, Math.round(rM / fM.i));
      return [1 === iM ? `${MM}OneDay` : MM, {
        days: iM.toLocaleString()
      }]
    }

    function bP(MM) {
      let {
        price: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)();
      return (0, LM.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, LM.jsx)(Ka, {}), (0, LM.jsx)("div", {
          className: "SmallTextLight",
          children: iM("payments:subscriptionRenewsMonthly", {
            price: rM
          })
        }), (0, LM.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, LM.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: iM("homePage:termsOfService")
          }), (0, LM.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: iM("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function wP() {
      const MM = (0, NM.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && MM && (0, NM.subscriptionsSold)() ? (0, LM.jsx)(tP, {}) : null
    }

    function tP() {
      const {
        t: MM
      } = (0, aM.A)(), {
        userContext: rM
      } = (0, hM.b)(), {
        purchaseUnderWay: iM,
        notice: SM,
        subscribe: jM
      } = (0, GP.d)(), [PM, nM] = (0, OM.useState)(null), [zM, mM] = (0, OM.useState)(0), [HM, JM] = (0, OM.useState)(!1), dM = (0, OM.useRef)(!0), lM = rM !== uM.NULL_USER_CONTEXT, EM = null !== PM && PM.loadedFor === rM ? PM.offer : null, UM = null === SM || void 0 === SM ? void 0 : SM.pendingIntentId, GM = (0, OM.useRef)(UM);

      function CM() {
        mM((MM => MM + 1))
      }
      async function eM(MM) {
        JM(!1), await jM(MM), dM.current && CM()
      }
      if ((0, OM.useEffect)((() => (dM.current = !0, () => {
          dM.current = !1
        })), []), (0, OM.useEffect)((() => {
          void 0 !== GM.current && void 0 === UM && CM(), GM.current = UM
        }), [UM]), (0, OM.useEffect)((() => {
          if (!lM) return;
          let MM = !1;
          return JM(!1), async function() {
            const {
              offering: MM
            } = await (0, KM.getBillingClient)().getOfferings("superRankPage"), rM = null === MM || void 0 === MM ? void 0 : MM.packages.find(Oa.isPricedPackage);
            return void 0 === rM ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: rM,
              preview: await UP(rM.productId)
            }
          }().catch((MM => (console.error("Billing: loading the Super Rank subscription or its preview failed:", MM), {
            kind: "loadFailed"
          }))).then((iM => {
            MM || nM((MM => "loadFailed" === iM.kind && (null === MM || void 0 === MM ? void 0 : MM.loadedFor) === rM ? MM : {
              loadedFor: rM,
              offer: iM
            }))
          })), () => {
            MM = !0
          }
        }), [rM, lM, zM]), null === EM) return null;
      if ("loaded" !== EM.kind) return (0, LM.jsx)(CP.i, {
        notice: {
          kind: "error",
          key: "unavailable" === EM.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: bM,
        preview: wM
      } = EM;
      if ("refused" === wM.kind) return (0, LM.jsx)(CP.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(wM.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const tM = (0, MP.c)(bM),
        gM = (0, yM.isMobileApp)() && (0, LM.jsx)(bP, {
          price: tM
        });
      if (HM && "refund" === wM.kind) {
        const {
          refundedMs: rM,
          forfeitedMs: OM,
          premiumCurrency: SM
        } = wM, jM = OM + (0 === SM ? rM : 0), [aM, PM] = eP("payments:subscribeRefundsGemRank", rM), [nM, zM] = eP("payments:subscribeForfeitsGemRank", jM);
        return (0, LM.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, LM.jsx)("div", {
            children: MM("payments:subscribeEndsGemRank")
          }), SM > 0 && (0, LM.jsx)("div", {
            children: MM(aM, {
              ...PM,
              amount: SM.toLocaleString()
            })
          }), jM > 0 && (0, LM.jsx)("div", {
            children: MM(nM, zM)
          }), (0, LM.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, LM.jsx)(QM.i, {
              onClick: () => {
                JM(!1)
              },
              children: MM("general:cancel")
            }), (0, LM.jsx)(QM.p, {
              onClick: () => {
                eM(bM)
              },
              loading: iM,
              children: MM("payments:subscribeContinue", {
                price: tM
              })
            })]
          }), gM]
        })
      }
      return (0, LM.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, LM.jsx)(CP.i, {
          notice: SM,
          className: "SmallTextBold"
        }), (0, LM.jsx)(CP.b, {
          className: "SmallTextBold"
        }), (0, LM.jsx)(QM.p, {
          onClick: () => {
            "refund" === wM.kind ? JM(!0) : eM(bM)
          },
          disabled: void 0 !== UM,
          loading: iM,
          children: MM("payments:subscribeToSuperRank", {
            price: tM
          })
        }), gM]
      })
    }
    var gP = iM(2768);

    function uP(MM) {
      let {
        state: rM,
        view: iM,
        claiming: SM,
        onOpen: PM
      } = MM;
      const {
        t: zM
      } = (0, aM.A)(), mM = (0, OM.useRef)(null), HM = "ready" === iM.kind;
      return (0, jP.e)(mM, HM), (0, LM.jsxs)("div", {
        ref: mM,
        className: jM()("DailyDropTile", {
          DailyDropTileReady: HM
        }),
        children: [HM && (0, LM.jsx)(nM.d, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, LM.jsx)("div", {
          className: "DailyDropTileTitle",
          children: zM("dailyDrop:name")
        }), (0, LM.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, LM.jsx)(gP.c, {
            className: "DailyDropTileBlock"
          }), (0, LM.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: zM("dailyDrop:collected", {
              count: rM.collected.length,
              total: rM.total
            })
          })]
        }), "ready" === iM.kind && (0, LM.jsx)(QM.p, {
          className: "DailyDropTileOpen",
          onClick: PM,
          loading: SM,
          children: zM("dailyDrop:open")
        }), "waiting" === iM.kind && (0, LM.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: zM("dailyDrop:nextIn", {
            count: iM.hours
          })
        })]
      })
    }
    var RP = iM(2362);
    const pP = Math.PI / 180;

    function WP(MM) {
      return MM / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function sP(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const OM = (MM / (2 * Math.PI / iM) % iM + iM) % iM;
      let SM = null,
        jM = 1 / 0;
      for (let aM = 0; aM < iM; aM++) {
        if (!rM[aM]) continue;
        const MM = Math.abs(aM - OM),
          PM = Math.min(MM, iM - MM);
        PM < jM && (SM = aM, jM = PM)
      }
      return SM
    }

    function DP(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const OM = sP(MM, rM, iM);
      if (null === OM) return MM;
      const SM = WP(OM, iM) - MM;
      return MM + SM - 2 * Math.PI * Math.round(SM / (2 * Math.PI))
    }
    const kP = 32;

    function ZP(MM) {
      if (0 === MM.width || 0 === MM.height) return !0;
      const rM = document.createElement("canvas");
      rM.width = kP, rM.height = kP;
      const iM = rM.getContext("2d", {
        willReadFrequently: !0
      });
      if (!iM) return !0;
      iM.drawImage(MM, 0, 0, kP, kP);
      const {
        data: OM
      } = iM.getImageData(0, 0, kP, kP);
      for (let SM = 3; SM < OM.length; SM += 4)
        if (OM[SM] > 0) return !1;
      return !0
    }

    function oP(MM) {
      const rM = document.createElement("canvas");
      rM.width = MM.width, rM.height = MM.height;
      const iM = rM.getContext("2d");
      return iM ? (iM.drawImage(MM, 0, 0), rM) : null
    }

    function fP(MM) {
      let {
        worn: rM,
        Ii: iM,
        Ki: SM,
        prompting: nM,
        className: QM
      } = MM;
      const {
        t: zM
      } = (0, aM.A)(), mM = (0, OM.useRef)(null), [HM, hM] = (0, OM.useState)(null), [JM, dM] = (0, OM.useState)(!1), yM = (0, OM.useRef)([]), lM = (0, OM.useRef)(null), EM = (0, OM.useRef)(0), UM = (0, OM.useRef)(null), GM = (0, OM.useRef)(!0), eM = (0, OM.useCallback)((() => {
        const MM = lM.current,
          rM = yM.current,
          iM = sP(EM.current, rM),
          OM = null === iM ? null : rM[iM],
          SM = null === MM || void 0 === MM ? void 0 : MM.getContext("2d");
        MM && OM && SM && (MM.width === OM.width && MM.height === OM.height || (MM.width = OM.width, MM.height = OM.height), SM.clearRect(0, 0, MM.width, MM.height), SM.drawImage(OM, 0, 0))
      }), []);
      async function bM(MM, rM) {
        const iM = performance.now();
        let OM = 0;
        for (const SM of function() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const rM = [],
              iM = new Set;
            for (let OM = MM / 2; OM >= 1 && Number.isInteger(OM); OM /= 2)
              for (let SM = 0; SM < MM; SM += OM) iM.has(SM) || (iM.add(SM), rM.push(SM));
            for (let OM = 0; OM < MM; OM++) iM.has(OM) || rM.push(OM);
            return rM
          }()) {
          if (mM.current !== MM) break;
          if (0 !== SM && (MM.turnCamera(WP(SM)), await new Promise((MM => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  MM()
                }))
              }))
            })), mM.current !== MM)) break;
          const iM = ZP(rM) ? null : oP(rM);
          if (null !== iM) yM.current[SM] = iM, OM++, 0 === SM && hM("stills");
          else if (0 === SM) break
        }
        OM > 0 && console.info(`Lucky Skin Block's Before: ${OM} stills in ${Math.round(performance.now()-iM)} ms`)
      }

      function wM(MM) {
        var rM, iM;
        (null === (rM = UM.current) || void 0 === rM ? void 0 : rM.pointerId) === MM.pointerId && (UM.current = null, GM.current || (EM.current = DP(EM.current, yM.current), eM(), null === (iM = mM.current) || void 0 === iM || iM.turnCamera(EM.current)))
      }(0, OM.useEffect)((() => {
        "stills" === HM && eM()
      }), [HM, eM]), (0, OM.useEffect)((() => () => {
        for (const MM of yM.current) MM && (MM.width = 0, MM.height = 0);
        yM.current = []
      }), []);
      const tM = nM ? {
        onPointerDown: MM => {
          null === UM.current && (MM.currentTarget.setPointerCapture(MM.pointerId), UM.current = {
            pointerId: MM.pointerId,
            startX: MM.clientX,
            startTurn: EM.current
          })
        },
        onPointerMove: MM => {
          const rM = UM.current;
          var iM;
          null !== rM && rM.pointerId === MM.pointerId && (EM.current = rM.startTurn - (MM.clientX - rM.startX) * pP, eM(), GM.current || null === (iM = mM.current) || void 0 === iM || iM.turnCamera(EM.current))
        },
        onPointerUp: wM,
        onPointerCancel: wM
      } : {};
      return (0, LM.jsxs)("div", {
        className: jM()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: nM
        }, QM),
        children: [(0, LM.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, LM.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...tM,
            children: ["stills" === HM && (0, LM.jsx)("canvas", {
              ref: lM,
              className: "DailyDropRevealBeforeStill"
            }), "head" === HM && (0, LM.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, LM.jsx)(ea.c, {
                cosmetics: rM
              })
            }), null === HM && (0, LM.jsx)(CM.d, {})]
          }), (0, LM.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: zM("dailyDrop:before")
          })]
        }), (0, LM.jsx)(PM.b, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, LM.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, LM.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, LM.jsx)("div", {
              className: jM()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: JM
              }),
              children: (0, LM.jsx)(OM.Suspense, {
                fallback: null,
                children: (0, LM.jsx)(oa.c, {
                  ref: mM,
                  onReady: () => {
                    var MM, iM;
                    null === (MM = mM.current) || void 0 === MM || MM.resetCamera(), null === (iM = mM.current) || void 0 === iM || iM.setAllCosmetics(rM)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var MM;
                        const rM = mM.current;
                        if (!rM) return;
                        const OM = null === (MM = rM.getDevTools()) || void 0 === MM ? void 0 : MM.canvas();
                        try {
                          OM && await bM(rM, OM)
                        } catch (aM) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", aM)
                        } finally {
                          GM.current = !1
                        }
                        if (mM.current !== rM) return;
                        yM.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), hM("head")), null === UM.current && (EM.current = DP(EM.current, yM.current)), rM.turnCamera(EM.current), eM(), rM.updateCosmetic(iM, SM);
                        const jM = new Promise((MM => {
                          setTimeout(MM, 1e4)
                        }));
                        await Promise.race([rM.ensureReadyForCapture(iM), jM]).catch((MM => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", MM)
                        })), mM.current === rM && dM(!0)
                      }()
                    }))
                  }
                })
              })
            }), !JM && (0, LM.jsx)(CM.d, {}), (0, LM.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...tM
            })]
          }), (0, LM.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: zM("dailyDrop:after")
          })]
        })]
      })
    }
    const YP = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      NP = {
        opening: 900,
        shrinking: 700
      };

    function AP(MM) {
      let {
        drop: rM,
        onClose: iM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)(), {
        userContext: nM
      } = (0, hM.b)(), {
        state: zM,
        view: mM
      } = (0, ii.E)(), [HM, JM] = (0, OM.useState)("closed"), [dM] = (0, OM.useState)((() => ({
        ...nM.getPlayerCosmetics()
      }))), [yM] = (0, OM.useState)((() => (0, ii.l)(rM, dM))), [lM, EM] = (0, OM.useState)(!1), [UM, GM] = (0, OM.useState)(!1), [CM] = (0, OM.useState)((() => null === zM ? Promise.resolve(null) : ai(zM))), [eM, wM] = (0, OM.useState)(null), tM = (0, cr.b)(), {
        gameState: gM
      } = (0, bM.m)(["gameState"]);
      async function uM() {
        const MM = await CM;
        tM.current && (null === MM ? (iM(), async function(MM) {
          let rM = null;
          try {
            const iM = await ji();
            null === MM || MM.remindersOn || null !== Si.g.getItem(iM) || (rM = iM)
          } catch (OM) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", OM)
          }
          if (null === rM) return void await (0, Oi.n)("dailyDrop");
          const iM = rM;
          await (0, Oi.n)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              Si.g.setItem(iM, !0), ni(null)
            }
          })
        }(zM)) : ((0, Oi.g)(), wM(MM), JM("remind")))
      }

      function RM(MM) {
        null !== eM && function(MM, rM) {
          Si.g.setItem(MM.askedKey, !0), (0, Vr.m)(), (0, ii.w)("daily_drop.remind", rM ? "yes" : "no"), rM && ni(MM.requester)
        }(eM, MM), iM()
      }(0, OM.useEffect)((() => {
        const MM = NP[HM];
        if (void 0 === MM) return;
        const rM = setTimeout((() => {
          JM(YP[HM])
        }), MM);
        return () => {
          clearTimeout(rM)
        }
      }), [HM]);
      const pM = SM(`dailyDrop:kind_${yM.Ii}`),
        WM = zM && SM("dailyDrop:collected", {
          count: zM.collected.length,
          total: zM.total
        }),
        sM = "revealed" === HM || "shrinking" === HM,
        DM = "equip" !== HM && "remind" !== HM;
      return (0, LM.jsx)(zS.e, {
        className: "DailyDropRevealScreen",
        close: "remind" === HM ? () => {
          RM(!1)
        } : iM,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, LM.jsxs)("div", {
          className: jM()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === HM,
            DailyDropRevealShrinking: "shrinking" === HM,
            DailyDropRevealFiguresShown: "shrinking" === HM || "equip" === HM || "remind" === HM
          }),
          children: [(0, LM.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, LM.jsx)(fP, {
              className: "DailyDropRevealStageFigures",
              worn: dM,
              Ii: yM.Ii,
              Ki: yM.Ki,
              prompting: !DM
            }), ("closed" === HM || "opening" === HM) && (0, LM.jsx)(gP.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === HM
            }), sM && (0, LM.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, LM.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,RP.m)(yM.Ii,yM.Ki).previewTex}.png`,
                alt: pM,
                draggable: !1
              })
            })]
          }), DM && (0, LM.jsxs)(LM.Fragment, {
            children: [(0, LM.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, LM.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: sM ? pM : SM("dailyDrop:name")
              }), "closed" === HM && (0, LM.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: SM("dailyDrop:tapToOpen")
              }), "revealed" === HM && (0, LM.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: SM("dailyDrop:tapToContinue")
              })]
            }), (0, LM.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": SM("closed" === HM ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                JM(YP[HM])
              }
            })]
          }), "equip" === HM && (0, LM.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, LM.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: pM
            }), (0, LM.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: SM("dailyDrop:equipQuestion")
            }), (0, LM.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, LM.jsx)(QM.e, {
                className: "DailyDropRevealButton",
                disabled: lM,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, ii.w)("daily_drop.not_now", rM), uM()
                },
                children: SM("dailyDrop:notNow")
              }), (0, LM.jsx)(QM.e, {
                className: "DailyDropRevealButton",
                loading: lM,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, ii.w)("daily_drop.equip", rM), EM(!0), GM(!1);
                    try {
                      await (0, ii.h)(nM, yM.Ii, yM.Ki)
                    } catch (MM) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", MM), EM(!1), void GM(!0)
                    }
                    await uM()
                  }()
                },
                children: SM("dailyDrop:equip")
              })]
            }), UM && (0, LM.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: SM("dailyDrop:equipFailed")
            }), !(0, bM.h)(gM) && (0, LM.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: lM,
              onClick: () => {
                var MM;
                (0, ii.w)("daily_drop.customise", rM), MM = yM.Ii, Gi.i.Tz(jS, MM), bM.d.set({
                  openEverythingMenuName: Ur.m.CUSTOMISATION
                }), iM()
              },
              children: [SM("dailyDrop:customise"), " ", (0, LM.jsx)(PM.b, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), WM && (0, LM.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [WM, "waiting" === (null === mM || void 0 === mM ? void 0 : mM.kind) && ` \xb7 ${SM("dailyDrop:nextInInline",{count:mM.hours})}`]
            })]
          }), "remind" === HM && (0, LM.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, LM.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: SM("dailyDrop:remindTitle")
            }), (0, LM.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: SM("dailyDrop:remindSubtitle")
            }), (0, LM.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, LM.jsx)(QM.e, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  RM(!1)
                },
                children: SM("dailyDrop:remindNo")
              }), (0, LM.jsx)(QM.e, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  RM(!0)
                },
                children: SM("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function xP(MM, rM) {
      const {
        t: iM
      } = (0, aM.A)(), SM = function(MM, rM) {
        const {
          state: iM,
          view: SM
        } = (0, ii.E)(), [jM, aM] = (0, OM.useState)(!1), [PM, nM] = (0, OM.useState)(!1), [QM, zM] = (0, OM.useState)(null), LM = (0, OM.useRef)(null), mM = (0, OM.useRef)(!1), HM = rM && "ready" === (null === SM || void 0 === SM ? void 0 : SM.kind);
        (0, OM.useEffect)((() => {
          MM ? HM && !mM.current && (mM.current = !0, (0, ii.w)("daily_drop.shown", "tile")) : mM.current = !1
        }), [MM, HM]), (0, OM.useEffect)((() => {
          MM || (yM(), nM(!1))
        }), [MM]);
        const hM = MM && null === QM && !(0, ii.u)(SM);
        (0, OM.useEffect)((() => {
          hM && bM.d.set({
            openEverythingMenuName: Ur.m.CUSTOMISATION
          })
        }), [hM]);
        const JM = (0, OM.useRef)(!1),
          dM = (0, OM.useRef)(MM);

        function yM() {
          null !== LM.current && (LM.current = null, zM(null))
        }
        return dM.current = MM, {
          state: iM,
          view: SM,
          claiming: jM,
          claimFailed: PM,
          reveal: QM,
          open: async function() {
            if (!JM.current) {
              JM.current = !0, aM(!0), nM(!1);
              try {
                const {
                  state: MM,
                  drop: rM
                } = await (0, ii.e)();
                if (null === MM || null === rM) return;
                if (!dM.current) return;
                (0, ii.w)("daily_drop.open", rM), LM.current = {
                  state: MM,
                  drop: rM
                }, zM(LM.current)
              } catch (MM) {
                console.error("Failed to claim the Lucky Skin Block", MM), dM.current && nM(!0)
              } finally {
                JM.current = !1, aM(!1)
              }
            }
          },
          closeReveal: yM
        }
      }(MM, rM);
      return {
        shown: (0, ii.u)(SM.view) || null !== SM.reveal,
        tile: SM.state && SM.view && (0, LM.jsx)(uP, {
          state: SM.state,
          view: SM.view,
          claiming: SM.claiming,
          onOpen: SM.open
        }),
        claimFailed: SM.claimFailed && (0, LM.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: iM("dailyDrop:claimFailed")
        }),
        reveal: SM.reveal && (0, LM.jsx)(AP, {
          drop: SM.reveal.drop,
          onClose: SM.closeReveal
        })
      }
    }

    function vP(MM) {
      let {
        show: rM
      } = MM;
      const iM = xP(rM, rM);
      return rM && iM.shown ? (0, LM.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [iM.claimFailed, iM.tile && (0, LM.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: iM.tile
        }), iM.reveal]
      }) : null
    }
    var FP = iM(2779),
      BP = iM(35070),
      XP = iM(35077);

    function IP(MM) {
      let {
        view: rM,
        highlight: iM,
        scrollSignal: SM,
        onScrolledIntoView: jM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)(), {
        purchaseUnderWay: nM,
        notice: QM,
        needsLogin: zM,
        buyPack: mM
      } = (0, XP.e)("banner");
      (0, FP.U)(rM.arm, "banner");
      const HM = (0, OM.useRef)(null);
      return (0, OM.useEffect)((() => {
        var MM;
        SM > 0 && (null === (MM = HM.current) || void 0 === MM || MM.scrollIntoView({
          block: "nearest"
        }), jM())
      }), [SM]), (0, LM.jsxs)("div", {
        ref: HM,
        className: "NewPlayerDealBanner",
        children: [(0, LM.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, LM.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: PM("newPlayerDeal:title")
          }), (0, LM.jsx)(BP.e, {
            endsAt: rM.endsAt
          })]
        }), (0, LM.jsx)(BP.i, {
          view: rM,
          needsLogin: zM,
          busy: nM,
          highlight: iM,
          onBuy: MM => {
            mM(rM, MM)
          }
        }), (0, LM.jsx)(CP.i, {
          notice: QM,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    iM(35072);
    var KP = iM(2782);

    function qP(MM) {
      let {
        wallet: rM,
        close: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)();
      return (0, LM.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, LM.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, LM.jsx)("span", {
            children: OM("newPlayerDeal:giftable")
          }), (0, LM.jsx)(Ra.b, {
            amount: (0, aa.b)(rM)
          }), (0, LM.jsx)("span", {
            children: OM("newPlayerDeal:ungiftable")
          }), (0, LM.jsx)(Ra.b, {
            amount: rM.ungiftable
          })]
        }), (0, LM.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: OM("newPlayerDeal:ungiftableWhy")
        }), (0, LM.jsx)(QM.p, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: iM,
          children: OM("general:ok")
        })]
      })
    }

    function TP(MM) {
      yr.NotificationProvider.showCustomPopup({
        body: rM => (0, LM.jsx)(qP, {
          wallet: MM,
          close: rM
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const VP = {
      kind: "board"
    };
    let cP = !1;

    function Mn(MM) {
      return "found" === MM.status || "error" === MM.status && "store:giftRecipientLookupFailed" === MM.error ? MM.name : null
    }(0, YM.r)(Oa.prefetchBillingOfferings);
    const rn = (0, OM.memo)((function(MM) {
      var rM;
      let {
        show: SM
      } = MM;
      const {
        t: PM
      } = (0, aM.A)(), {
        userContext: nM
      } = (0, hM.b)(), QM = (0, NM.usePurchasesAllowed)(), zM = nM !== uM.NULL_USER_CONTEXT, mM = Ja(nM, SM), [HM, JM] = (0, dM.d)(), {
        page: yM,
        urlMode: lM,
        goTo: EM
      } = (0, da.d)(), UM = function(MM) {
        return "superRank" === MM.kind ? "superRank" : "pack" === MM.kind ? MM.pack : null
      }(yM), {
        openEverythingMenuName: GM,
        gameState: CM
      } = (0, bM.m)(["openEverythingMenuName", "gameState"]), eM = null !== GM;
      ! function(MM, rM) {
        const [SM] = (0, OM.useState)(Ea.f), [jM, aM] = (0, OM.useState)(!1);
        SM && rM && !jM && aM(!0);
        const PM = (0, oO.y)(),
          nM = SM && jM && MM && !PM;
        (0, OM.useEffect)((() => {
          if (!nM) return;
          let MM = null,
            rM = null,
            OM = null;
          const SM = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, KM.getBillingClient)().purchaseUnderWay,
            jM = () => {
              var iM;
              null === (iM = OM) || void 0 === iM || iM(), OM = null, null !== MM && (clearTimeout(MM), MM = null), null !== rM && (clearTimeout(rM), rM = null)
            },
            aM = () => {
              (0, ya.s)(!1), (0, ya.p)(!1), jM(), MM = setTimeout((() => {
                MM = null, OM = (0, la.d)((() => {
                  OM = null, SM() ? aM() : ((0, ya.s)(!0), rM = setTimeout((() => {
                    rM = null, OM = (0, la.d)((() => {
                      OM = null, SM() ? aM() : (0, ya.p)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => iM(5035))).then((MM => {
                    MM.startBackgroundGameSetup()
                  }), (MM => {
                    console.warn("Background game setup: its chunk failed to load", MM)
                  })))
                }))
              }), 2e3)
            };
          for (const iM of Ua) window.addEventListener(iM, aM, {
            capture: !0,
            passive: !0
          });
          return aM(), () => {
            for (const MM of Ua) window.removeEventListener(MM, aM, {
              capture: !0
            });
            jM(), (0, ya.s)(!1), (0, ya.p)(!1)
          }
        }), [nM])
      }(SM && eM, "pack" === yM.kind);
      const wM = "landingPage" === CM;
      (0, OM.useEffect)((() => {
        eM && (0, Oa.prefetchBillingOfferings)()
      }), [eM]), (0, OM.useEffect)((() => {
        eM && !SM && wM && (0, Ga.r)()
      }), [eM, SM, wM]);
      const [tM, gM] = (0, OM.useState)(0), [RM, pM] = (0, OM.useState)(null), [WM, sM] = (0, OM.useState)(null), [DM, ZM] = (0, OM.useState)(null), [oM, fM] = (0, OM.useState)(null), [AM, xM] = (0, OM.useState)(0), vM = (0, OM.useRef)(null), FM = (0, OM.useRef)(null), BM = (0, OM.useRef)(null), XM = (0, OM.useRef)(!1), IM = (0, YM.x)(), qM = (0, OM.useRef)(0), TM = (0, OM.useRef)(!1);

      function VM() {
        gM((MM => MM + 1))
      }(0, OM.useEffect)((() => {
        if (!SM) return TM.current = !1, void xM(0);
        if (cP = !0, (0, YM.k)(), IM && IM.seq !== qM.current) {
          var MM;
          qM.current = IM.seq, "loginResume" !== IM.source && (0, YM.u)();
          const rM = (0, YM.b)(IM);
          lM || EM(rM), fM(null !== (MM = IM.highlight) && void 0 !== MM ? MM : null);
          const iM = "newPlayerDeal" === IM.source || "loginResume" === IM.source && void 0 !== IM.highlight && (0, FP.g)(nM).includes(IM.highlight);
          xM((MM => iM ? MM + 1 : 0)), sM(null), "gift" === IM.mode && IM.giftRecipientName ? mM.choose(IM.giftRecipientName, "prefilled") : mM.clear(), "gift" !== IM.mode || IM.giftRecipientName || VM(), (0, Sr.reportAnalyticsClick)({
            id: "store.open",
            value: IM.source
          })
        } else TM.current || (0, Sr.reportAnalyticsClick)({
          id: "store.open",
          value: "menuTab"
        });
        TM.current = !0
      }), [SM, IM]);
      const cM = (0, FP.S)(),
        Mr = null !== oM && null === cM && null === (0, FP.j)((0, FP.d)(nM)) && (0, FP.g)(nM).includes(oM);
      (0, OM.useEffect)((() => {
        if (!oM) return;
        const MM = setTimeout((() => {
          fM(null)
        }), Mr ? 15e3 : 4e3);
        return () => {
          clearTimeout(MM)
        }
      }), [oM, Mr]), (0, OM.useLayoutEffect)((() => {
        const MM = vM.current;
        if (!SM || !MM) return FM.current = null, void(BM.current = null);
        var rM;
        if (UM) FM.current = UM, null === (rM = MM.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === rM || rM.focus();
        else if (FM.current) {
          const rM = BM.current;
          null !== rM && (MM.scrollTop = rM);
          const iM = MM.querySelector(`[data-store-item="${FM.current}"]`);
          if (iM) {
            const OM = iM.getBoundingClientRect(),
              SM = MM.getBoundingClientRect();
            iM.focus({
              preventScroll: null !== rM && OM.bottom > SM.top && OM.top < SM.bottom
            })
          }
          FM.current = null
        }
      }), [UM, SM]), (0, OM.useEffect)((() => {
        sM(null)
      }), [mM.query]), (0, OM.useEffect)((() => {
        if (!DM) return;
        const MM = setTimeout((() => {
          ZM(null)
        }), 8e3);
        return () => {
          clearTimeout(MM)
        }
      }), [DM]);
      const rr = nM.superRankInfo,
        ir = nM.isLoggedIn() || (0, NM.guestsMayBuy)(),
        Or = nM.getOwnedCosmeticPacks(),
        jr = (0, La.o)(mM.query),
        ar = (0, La.g)({
          mode: jr,
          loggedIn: zM ? ir : null,
          superRankInfo: rr,
          now: Date.now(),
          ownedPacks: Or,
          packs: ia.w,
          recipient: mM.recipient
        });
      (0, OM.useEffect)((() => {
        if (!ir || !SM) return;
        const MM = (0, FP.g)(nM),
          rM = (0, YM.u)((rM => !MM.includes(rM.item))),
          iM = rM && (0, La.m)(rM, ia.w);
        rM && iM && ((0, Sr.reportAnalyticsClick)({
          id: "store.login_resume",
          value: rM.item
        }), (0, YM.n)(iM))
      }), [ir, SM]);
      const Pr = SM && "gift" === jr,
        nr = (0, OM.useRef)(Pr);
      nr.current = Pr;
      const Qr = "none" !== mM.recipient.status,
        zr = (0, OM.useRef)(!1);
      (0, OM.useEffect)((() => {
        Pr ? Qr && !zr.current && (zr.current = !0, async function(MM) {
          var rM;
          if ("gift" === (null === (rM = (0, KP.m)()) || void 0 === rM ? void 0 : rM.show)) return void TP(KP.e);
          const iM = await (0, aa.e)();
          null !== iM && iM.ungiftable > 0 && MM() && TP(iM)
        }((() => nr.current))) : zr.current = !1
      }), [Pr, Qr]);
      const Lr = (0, La.s)({
        superRankDaysLeft: ar.superRankDaysLeft,
        openedThisSession: cP || SM,
        seenNewItems: (0, YM.h)()
      });
      (0, OM.useEffect)((() => {
        (0, YM.t)(Lr)
      }), [Lr]);
      const mr = "self" === jr,
        Hr = xP(SM, SM && mr && "board" === yM.kind);
      if (!SM || !QM) return null;
      const hr = JM > HM && HM <= 700,
        Jr = !hr && JM <= 420,
        dr = "gift" === jr ? Mn(mM.recipient) : null,
        yr = null !== RM;

      function lr(MM) {
        (0, ja.e)(MM, "gift" === jr ? mM.query.trim() : null)
      }

      function Er(MM, rM) {
        (0, Sr.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${rM?"gift":"self"}:${MM}`
        }), rM && (mM.recordGift(rM.name, MM), Ur(rM))
      }

      function Ur(MM) {
        ! function(MM) {
          try {
            Si.g.setItem(ma, (0, La.z)(ha(), MM))
          } catch {}
        }({
          name: MM.name,
          cosmetics: MM.cosmetics
        }), EM(VP), ZM((rM => {
          var iM;
          return {
            name: MM.name,
            seq: (null !== (iM = null === rM || void 0 === rM ? void 0 : rM.seq) && void 0 !== iM ? iM : 0) + 1
          }
        }))
      }
      async function Gr(MM) {
        var rM, iM;
        if (XM.current) return;
        if (!ir) return void lr(MM);
        sM(null), fM(null);
        const OM = "gift" === jr ? {
          name: Mn(mM.recipient),
          cosmetics: mM.recipientCosmetics
        } : null;
        if (OM && !OM.name) return void VM();
        const SM = "superRank" === MM ? kM.k.id : (0, kM.c)(MM);
        XM.current = !0;
        const jM = await (0, za.d)(SM, null !== (rM = null === OM || void 0 === OM ? void 0 : OM.name) && void 0 !== rM ? rM : null);
        if (XM.current = !1, !jM) return;
        pM(MM);
        const aM = await aa.i.purchase(SM, null !== (iM = null === OM || void 0 === OM ? void 0 : OM.name) && void 0 !== iM ? iM : null);
        pM(null), aM ? sM(aM) : (Er(MM, OM), OM || (await (0, Pa.flushClientAnalyticsEvents)(), (0, Sa.refreshWithoutConfirmation)("superRank" === MM ? "/super-rank-welcome" : `/pack-welcome/${MM}`)))
      }
      const Cr = jM()("Store", {
        StoreGift: "gift" === jr,
        StorePortrait: hr,
        StoreCompact: Jr
      });
      if ("pack" === yM.kind) {
        const MM = yM.pack,
          rM = ar.packs.find((rM => rM.pack === MM));
        return (0, LM.jsx)("div", {
          ref: vM,
          className: "CosmeticShopContainer",
          children: (0, LM.jsx)(Qa.e, {
            pack: MM,
            onBack: () => {
              EM(VP)
            },
            onPurchased: rM => {
              Er(MM, rM ? {
                name: rM,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === jr && dr && rM && (0, LM.jsxs)(LM.Fragment, {
              children: [(0, LM.jsx)(Ia, {
                state: rM.state,
                item: MM,
                price: (er = MM, "superRank" === er ? kM.k.price : (0, kM.e)(er)),
                busy: yr,
                onAct: () => {
                  Gr(MM)
                },
                onNeedRecipient: () => {
                  EM(VP), VM()
                },
                onLogin: () => {
                  lr(MM)
                },
                highlight: oM === MM
              }), WM && (0, LM.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: PM(WM)
              })]
            }),
            ownedPacks: Or,
            startAsGift: "gift" === jr,
            initialGiftRecipient: "gift" === jr ? null !== dr && void 0 !== dr ? dr : mM.query.trim() : "",
            highlightCta: oM === MM
          }, MM)
        })
      }
      var er;
      return "superRank" === yM.kind ? (0, LM.jsx)("div", {
        ref: vM,
        className: jM()(Cr, "StoreDetailView"),
        children: (0, LM.jsx)(yP, {
          state: ar.superRank.state,
          mode: jr,
          giftName: dr,
          busy: yr,
          highlight: "superRank" === oM,
          purchaseError: WM,
          onBack: () => {
            EM(VP)
          },
          onChooseRecipient: () => {
            EM(VP), VM()
          },
          onAct: () => {
            Gr("superRank")
          },
          onLogin: () => {
            lr("superRank")
          }
        })
      }) : (0, LM.jsxs)("div", {
        ref: vM,
        className: Cr,
        onScroll: MM => {
          BM.current = MM.currentTarget.scrollTop
        },
        children: [(0, LM.jsx)("div", {
          className: "StoreTopRow",
          children: (0, LM.jsx)(ua, {
            selfName: zM ? nM.getPlayerName() : "",
            giftRecipient: mM,
            suggestionsVersion: null !== (rM = null === DM || void 0 === DM ? void 0 : DM.seq) && void 0 !== rM ? rM : 0,
            pulseSignal: tM,
            disabled: yr || !zM
          })
        }), DM && (0, LM.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            ZM(null)
          },
          children: [(0, LM.jsx)(na.d, {
            showSignal: DM.seq
          }), La.e, " ", PM("store:giftSent", {
            name: DM.name
          })]
        }, DM.seq), !DM && WM && (0, LM.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: PM(WM)
        }), mr && Hr.claimFailed, (0, LM.jsx)(dP, {
          layout: ar,
          mountAtOnce: null !== FM.current,
          bundleGift: "gift" === jr ? {
            recipientName: dr,
            lookingUp: "pending" === mM.recipient.status,
            busy: yr,
            onNeedRecipient: VM,
            onSent: MM => {
              (0, Sr.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Ur({
                name: MM,
                cosmetics: mM.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, La.u)(rr),
          busy: yr,
          highlightItem: oM,
          onOpen: function(MM) {
            (0, Sr.reportAnalyticsClick)({
              id: "store.item_open",
              value: MM
            }), EM((0, YM.f)(MM))
          },
          onAct: Gr,
          onNeedRecipient: VM,
          onLogin: lr,
          dailyDropTile: mr && Hr.tile,
          dealBanner: "self" === jr && null !== cM && (0, LM.jsx)(IP, {
            view: cM,
            highlight: oM,
            scrollSignal: AM,
            onScrolledIntoView: () => {
              xM(0)
            }
          })
        }), "gift" !== jr && (0, LM.jsx)(wP, {}), Hr.reveal]
      })
    }));
    var On = iM(2905),
      Sn = iM(9438),
      jn = iM(9271),
      an = iM(3038),
      Pn = iM(2813),
      nn = iM(2862),
      Qn = iM(2875),
      zn = iM(2880),
      Ln = iM(2963),
      mn = iM(2950),
      Hn = iM(2470),
      hn = iM(2533),
      Jn = iM(2494),
      dn = iM(2148),
      yn = iM(2882),
      En = iM(2540);

    function Un(MM) {
      let {
        show: rM
      } = MM;
      return rM ? (0, LM.jsx)(Gn, {}) : null
    }

    function Gn() {
      const {
        t: MM
      } = (0, aM.A)(), {
        followsLeader: rM
      } = (0, Pn.c)(), {
        loading: iM,
        friends: SM,
        requests: nM,
        invites: zM
      } = (0, vM.m)(), {
        userContext: mM
      } = (0, hM.b)(), [HM, JM] = (0, OM.useState)(En.h);
      (0, OM.useEffect)((() => {
        (0, En.b)()
      }), []);
      const dM = nM.map((MM => MM.name)),
        {
          state: yM,
          recentRequesters: lM
        } = (0, mn.p)(),
        EM = new Map([...("loaded" === yM.status ? yM.recentPlayers : []).map((MM => [MM.preview.name, MM])), ...lM.map((MM => [MM.name, MM]))]),
        UM = (0, OM.useRef)(null),
        [eM, bM] = (0, OM.useState)(""),
        [wM, tM] = (0, OM.useState)("Enter"),
        [gM, uM] = (0, OM.useState)(null);

      function RM() {
        eM && (tM("Loading"), (0, Jn.h)(eM, "social_menu").then((MM => {
          if (UM.current) switch (MM.kind) {
            case "sent":
              tM("Success");
              break;
            case "becameFriends":
              tM("BecameFriends");
              break;
            case "failed":
              uM(MM.message), tM("Error")
          }
        })))
      }
      return (0, OM.useEffect)((() => {
        if ("Enter" === wM || "Loading" === wM) return;
        const MM = setTimeout((() => {
          UM.current.value = "", bM(""), tM("Enter")
        }), "Success" === wM ? 1e3 : 4e3);
        return () => {
          clearTimeout(MM)
        }
      }), [wM]), (0, LM.jsx)("div", {
        className: "SocialMenu",
        children: (0, LM.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, LM.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, LM.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, LM.jsx)(zn.d, {
                label: MM("socialBar:addFriend")
              }), (0, LM.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, LM.jsxs)("div", {
                  className: jM()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${wM}`]: !0
                  }),
                  children: ["Loading" === wM && (0, LM.jsx)(CM.d, {}), "Success" === wM && (0, LM.jsx)(PM.b, {
                    name: "check"
                  }), "BecameFriends" === wM && (0, LM.jsx)(LM.Fragment, {
                    children: MM("socialBar:nowFriends", {
                      playerName: eM
                    })
                  }), "Error" === wM && gM && (0, LM.jsx)(LM.Fragment, {
                    children: MM(gM.translationKey, gM.params)
                  })]
                }), (0, LM.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, LM.jsx)(GM.b, {
                    className: "PlayerSearchInput",
                    placeholderText: MM("socialBar:enterPlayerName"),
                    domRef: UM,
                    onValueChange: MM => {
                      bM((0, sM.l)(MM)), UM.current.value = (0, sM.l)(MM)
                    },
                    onEnter: () => {
                      eM && (0, Sr.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), RM()
                    }
                  }), (0, LM.jsxs)(QM.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      RM()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, LM.jsx)(PM.b, {
                      name: "user-plus"
                    }), " ", MM("socialBar:sendRequest")]
                  })]
                })]
              }), (0, LM.jsx)(yn.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), zM.length > 0 && (0, LM.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, LM.jsx)(zn.d, {
                label: MM("socialBar:invites"),
                meta: zM.length
              }), zM.map((rM => (0, LM.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, LM.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, LM.jsx)(Hn.d, {
                    invite: rM
                  })
                }), (0, LM.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, LM.jsx)(Hn.e, {
                    invite: rM
                  })
                }), (0, LM.jsx)(QM.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, hn.e)(rM)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${rM.destination.kind}`
                  },
                  children: MM("general:join")
                }), (0, LM.jsx)(rr.i, {
                  tooltipInner: (0, LM.jsx)(LM.Fragment, {
                    children: MM("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, LM.jsx)(QM.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === HM || void 0 === HM ? void 0 : HM.kind) && HM.inviteId === rM.id,
                    onClick: () => {
                      vM.e.declineInvite(rM.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${rM.destination.kind}`
                    },
                    children: (0, LM.jsx)(PM.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, rM.id)))]
            }), (0, LM.jsxs)("div", {
              className: jM()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !iM && 0 === nM.length
              }),
              children: [(0, LM.jsx)(zn.d, {
                label: (0, LM.jsxs)(LM.Fragment, {
                  children: [(0, LM.jsx)(PM.b, {
                    name: dn.g
                  }), " ", MM("socialBar:requests")]
                }),
                meta: (0, LM.jsxs)(LM.Fragment, {
                  children: [nM.length, nM.length === ir.q && (0, LM.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: MM("socialBar:limitReached")
                  })]
                })
              }), iM && (0, LM.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, LM.jsx)(CM.d, {})
              }), !iM && 0 === nM.length && (0, LM.jsx)("div", {
                className: "SocialMenuEmpty",
                children: MM("socialBar:noFriendRequests")
              }), !iM && nM.length > 0 && (0, LM.jsx)("div", {
                className: "PlayerRows",
                children: (0, LM.jsx)(aj.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [nM],
                  children: nM.map(((rM, iM) => {
                    const OM = EM.get(rM.name);
                    return (0, LM.jsxs)(Qn.h, {
                      playerSocialPreview: rM,
                      zIndex: nM.length - iM,
                      padDefaultFocus: (0, En.f)(HM, rM.name, iM),
                      status: OM && (0, LM.jsx)(Ln.d, {
                        gameNameWithVariation: OM.gameNameWithVariation,
                        isPrivateLobby: OM.isPrivateLobby
                      }),
                      children: [(0, LM.jsx)(rr.i, {
                        tooltipInner: (0, LM.jsx)(LM.Fragment, {
                          children: MM("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, LM.jsx)(QM.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            JM((0, En.c)(dM, iM)), (0, Jn.e)(rM.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, LM.jsx)(PM.b, {
                            name: "check"
                          })
                        })
                      }), (0, LM.jsx)(rr.i, {
                        tooltipInner: (0, LM.jsx)(LM.Fragment, {
                          children: MM("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, LM.jsx)(QM.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            JM((0, En.c)(dM, iM)), (0, Jn.e)(rM.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, LM.jsx)(PM.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${rM.name}_${rM.isError}`)
                  }))
                })
              })]
            }), (0, LM.jsx)(Ln.j, {})]
          }), (0, LM.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, LM.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, LM.jsx)(zn.d, {
                label: MM("socialBar:party")
              }), (0, LM.jsx)(nn.e, {})]
            }), (0, LM.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, LM.jsx)(zn.d, {
                label: (0, LM.jsxs)(LM.Fragment, {
                  children: [(0, LM.jsx)(PM.b, {
                    name: dn.e
                  }), " ", MM("socialBar:friends")]
                }),
                meta: (0, LM.jsxs)(LM.Fragment, {
                  children: [SM.length, SM.length >= (0, ir.c)(mM.getPlayerRanks()) && (0, LM.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: MM("socialBar:limitReached")
                  })]
                })
              }), iM && (0, LM.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, LM.jsx)(CM.d, {})
              }), !iM && 0 === SM.length && (0, LM.jsx)("div", {
                className: "SocialMenuEmpty",
                children: MM("socialBar:noFriends")
              }), !iM && SM.length > 0 && (0, LM.jsx)("div", {
                className: "PlayerRows",
                children: (0, LM.jsx)(aj.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [SM],
                  children: SM.map(((MM, iM) => (0, LM.jsx)(Qn.h, {
                    playerSocialPreview: MM,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: MM => {
                      vM.e.removeFriendFromState(MM)
                    },
                    zIndex: SM.length - iM,
                    children: (0, LM.jsx)(Qn.e, {
                      friend: MM,
                      followsLeader: rM,
                      analyticsSurface: "social_menu"
                    })
                  }, `${MM.name}_${MM.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Cn = iM(2735),
      en = iM(4007),
      bn = iM(4628),
      wn = iM(1940),
      tn = iM(4004),
      gn = iM(4011);

    function un(MM) {
      let {
        count: rM,
        claiming: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)();
      return 0 === rM ? null : (0, LM.jsx)(QM.p, {
        className: "SeasonPassClaimAllButton",
        loading: iM,
        onClick: () => {
          en.e.claimAll().catch((MM => {
            console.error("Failed to claim all season pass rewards", MM)
          }))
        },
        children: OM("seasonPass:claimAll", {
          count: rM
        })
      })
    }

    function Rn(MM) {
      let {
        view: rM,
        claiming: iM
      } = MM;
      const {
        t: OM
      } = (0, aM.A)(), {
        userContext: SM
      } = (0, hM.b)(), {
        config: jM,
        state: nM,
        tier: QM,
        xpIntoTier: zM,
        xpForNextTier: mM
      } = rM, HM = Date.now(), JM = (0, gn.k)(rM, HM), dM = QM >= jM.tierCount, yM = JM && !dM && mM > 0, lM = mM > 0 && !dM ? Math.min(100, zM / mM * 100) : 100, EM = nM.xpToday >= jM.maxXpPerDay, UM = null !== rM.xpBoost && rM.xpBoost.endsAtMs > HM && !EM ? rM.xpBoost : null;
      return (0, LM.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, LM.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, LM.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: OM("seasonPass:title", {
              season: nM.seasonNumber
            })
          })
        }), (0, LM.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, LM.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, LM.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: OM("seasonPass:tier"),
              "aria-label": `${OM("seasonPass:tier")} ${QM}`,
              children: QM
            }), (0, LM.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(lM),
              children: [(0, LM.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${lM}%`
                }
              }), (0, LM.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [dM && OM("seasonPass:passComplete"), yM && OM("seasonPass:xpProgress", {
                  xp: zM,
                  xpForNextTier: mM
                })]
              })]
            }), yM && (0, LM.jsxs)(LM.Fragment, {
              children: [(0, LM.jsx)(PM.b, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, LM.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: QM + 1
              })]
            })]
          }), (0, LM.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, LM.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, LM.jsx)(PM.b, {
                name: "hourglass"
              }), " ", JM ? OM("seasonPass:endsIn", {
                time: (0, tn.b)((rM.endsAtMs - HM) / 6e4)
              }) : (0, bn.c)(rM.claimEndsAtMs, OM, HM)]
            }), JM && !dM && (0, LM.jsx)("span", {
              className: EM ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: EM ? OM("seasonPass:dailyCapReached") : OM("seasonPass:dailyXp", {
                xp: nM.xpToday,
                cap: jM.maxXpPerDay
              })
            }), JM && !dM && UM && (0, LM.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, LM.jsx)(PM.b, {
                name: "angles-up"
              }), " ", OM("seasonPass:xpBoostActive", {
                multiplier: UM.multiplier,
                time: (0, tn.b)(Math.ceil((UM.endsAtMs - HM) / 6e4))
              })]
            }), JM && !dM && !EM && !UM && (0, LM.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: OM("seasonPass:playToEarn")
            }), SM.type === wn.d.ANONYMOUS && (0, LM.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: OM("seasonPass:logInToKeep")
            })]
          })]
        }), (0, LM.jsx)(un, {
          count: rM.claimable.length,
          claiming: iM
        })]
      })
    }
    var pn = iM(4630),
      Wn = iM(3471),
      sn = iM(3479);

    function Dn(MM) {
      return null !== (0, bn.s)(MM) || null !== (0, bn.l)(MM)
    }
    let kn = null;

    function Zn() {
      var MM;
      null === (MM = kn) || void 0 === MM || MM.tearDownNotification()
    }

    function fn(MM) {
      let {
        reward: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)(), {
        userContext: OM
      } = (0, hM.b)(), SM = (0, bn.s)(rM);
      return (0, LM.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, LM.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, bn.h)(rM, iM)
        }), null !== SM && (0, LM.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, LM.jsx)(Wn.e, {
            profileEffect: SM,
            name: OM.getPlayerName(),
            cosmetics: OM.getPlayerCosmetics()
          })
        }), null === SM && (0, LM.jsx)(Yn, {
          reward: rM
        })]
      })
    }

    function Yn(MM) {
      let {
        reward: rM
      } = MM;
      const {
        userContext: iM
      } = (0, hM.b)(), SM = (0, OM.useRef)(null), {
        previewEmote: jM,
        playEmote: aM
      } = (0, sn.e)(), PM = (0, OM.useMemo)((() => (0, bn.l)(rM)), [rM]), nM = PM.emote;
      return (0, LM.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, LM.jsx)(OM.Suspense, {
          fallback: (0, LM.jsx)(CM.d, {}),
          children: (0, LM.jsx)(oa.c, {
            ref: SM,
            framing: "store",
            forcedCosmetics: PM.cosmetics,
            Ua: jM.id,
            emotePlaySeq: jM.seq,
            onReady: () => {
              var MM, rM;
              null === (MM = SM.current) || void 0 === MM || MM.resetCamera(), null === (rM = SM.current) || void 0 === rM || rM.setAllCosmetics(iM.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== nM && aM(nM)
            }
          })
        })
      })
    }

    function Nn(MM) {
      let {
        waitingCount: rM
      } = MM;
      const {
        t: iM
      } = (0, aM.A)();
      return (0, NM.usePurchasesAllowed)() ? (0, LM.jsxs)("div", {
        className: "SeasonPassSuperUpsell",
        children: [rM > 0 && (0, LM.jsx)("span", {
          className: "SeasonPassSuperUpsellText",
          children: 1 === rM ? iM("seasonPass:superRewardWaiting") : iM("seasonPass:superRewardsWaiting", {
            count: rM
          })
        }), (0, LM.jsxs)("span", {
          className: "SeasonPassSuperUpsellButtonWrapper",
          children: [(0, LM.jsxs)(QM.p, {
            className: "SeasonPassSuperUpsellButton",
            onClick: () => {
              (0, YM.n)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, LM.jsx)(PM.b, {
              name: "bolt"
            }), " ", iM("homePage:getSuperRank")]
          }), rM > 0 && (0, LM.jsx)("span", {
            className: "SeasonPassSuperUpsellCount",
            children: rM
          })]
        })]
      }) : null
    }
    var An = iM(35086);

    function xn(MM) {
      var rM, iM;
      let {
        view: SM,
        claimingKeys: jM,
        superWaitingCount: nM,
        onClaim: QM
      } = MM;
      const {
        t: zM
      } = (0, aM.A)(), mM = (0, OM.useRef)(null), {
        config: HM,
        tier: hM,
        xpIntoTier: JM,
        xpForNextTier: dM,
        state: yM
      } = SM, lM = (0, gn.k)(SM), EM = (0, OM.useRef)(!1), UM = null !== (rM = null === (iM = SM.claimable[0]) || void 0 === iM ? void 0 : iM.tier) && void 0 !== rM ? rM : Math.min(hM + 1, HM.tierCount);
      (0, OM.useLayoutEffect)((() => {
        if (EM.current) return;
        const MM = mM.current,
          rM = MM.querySelector(`[data-tier="${UM}"]`).getBoundingClientRect(),
          iM = MM.getBoundingClientRect();
        MM.scrollLeft += rM.left - iM.left - .3 * MM.clientWidth, MM.scrollTop += rM.top - iM.top - .3 * MM.clientHeight
      }), [UM]), (0, OM.useEffect)((() => {
        const MM = mM.current;

        function rM(rM) {
          EM.current = !0, Math.abs(rM.deltaY) <= Math.abs(rM.deltaX) || MM.scrollWidth <= MM.clientWidth || (rM.preventDefault(), MM.scrollLeft += rM.deltaY)
        }
        return MM.addEventListener("wheel", rM, {
          passive: !1
        }), () => {
          MM.removeEventListener("wheel", rM)
        }
      }), []);
      const GM = dM > 0 ? JM / dM : 1;
      return (0, LM.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, LM.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, LM.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelSuper",
            children: [(0, LM.jsxs)("span", {
              className: "SeasonPassTrackLabelName",
              children: [(0, LM.jsx)(PM.b, {
                name: "bolt"
              }), zM("seasonPass:superTrack")]
            }), !yM.hasSuperRank && (0, LM.jsx)(Nn, {
              waitingCount: nM
            })]
          }), (0, LM.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, LM.jsx)("span", {
              className: "SeasonPassTrackLabelName",
              children: zM("seasonPass:freeTrack")
            }), (0, LM.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: zM("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, LM.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: mM,
          onPointerDown: () => {
            EM.current = !0
          },
          children: (0, LM.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: HM.tiers.map((MM => {
              const rM = MM.tier,
                iM = function(MM, rM, iM) {
                  if (MM <= rM) return "reached";
                  return iM && MM === rM + 1 ? "earning" : "locked"
                }(rM, hM, lM),
                OM = "earning" === iM;
              return (0, LM.jsx)(vn, {
                tierRewards: MM,
                nodeState: iM,
                progress: OM ? GM : 0,
                freeState: SM.tileState({
                  tier: rM,
                  track: "free"
                }),
                superState: SM.tileState({
                  tier: rM,
                  track: "super"
                }),
                freeClaiming: jM.has((0, gn.o)({
                  tier: rM,
                  track: "free"
                })),
                superClaiming: jM.has((0, gn.o)({
                  tier: rM,
                  track: "super"
                })),
                hasSuperRank: yM.hasSuperRank,
                onClaim: QM
              }, rM)
            }))
          })
        })]
      })
    }
    const vn = (0, OM.memo)((function(MM) {
      let {
        tierRewards: rM,
        nodeState: iM,
        progress: OM,
        freeState: SM,
        superState: aM,
        freeClaiming: PM,
        superClaiming: nM,
        hasSuperRank: QM,
        onClaim: zM
      } = MM;
      const {
        tier: mM
      } = rM;
      return (0, LM.jsxs)("div", {
        className: jM()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== iM
        }),
        "data-tier": mM,
        children: [(0, LM.jsx)(Fn, {
          tier: mM,
          track: "super",
          reward: rM.super,
          tileState: aM,
          claiming: nM,
          padlock: !QM && "claimed" !== aM,
          onClaim: zM
        }), (0, LM.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, LM.jsx)("span", {
            className: jM()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === iM
            }),
            children: "earning" === iM && (0, LM.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * OM + "%"
              }
            })
          }), (0, LM.jsx)("span", {
            className: jM()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === iM
            })
          }), (0, LM.jsx)(An.d, {
            tier: mM,
            state: iM,
            progress: OM
          })]
        }), (0, LM.jsx)(Fn, {
          tier: mM,
          track: "free",
          reward: rM.free,
          tileState: SM,
          claiming: PM,
          padlock: !1,
          onClaim: zM
        })]
      })
    }));

    function Fn(MM) {
      let {
        tier: rM,
        track: iM,
        reward: OM,
        tileState: SM,
        claiming: jM,
        padlock: aM,
        onClaim: PM
      } = MM;
      return OM ? (0, LM.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${iM}`,
        children: (0, LM.jsx)(pn.d, {
          reward: OM,
          tileState: SM,
          track: iM,
          size: "large",
          onClaim: () => {
            PM({
              tier: rM,
              track: iM
            })
          },
          claiming: jM,
          padlock: aM,
          onPreview: Dn(OM) ? () => {
            ! function(MM) {
              const rM = yr.NotificationProvider.showCustomPopup({
                body: (0, LM.jsx)(fn, {
                  reward: MM
                })
              });
              kn = rM, rM.getResult().finally((() => {
                kn === rM && (kn = null)
              }))
            }(OM)
          } : void 0
        })
      }) : (0, LM.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${iM}`
      })
    }
    var Bn = iM(5016);

    function Xn(MM) {
      let {
        show: rM
      } = MM;
      return rM ? (0, LM.jsx)(In, {}) : null
    }

    function In() {
      const {
        t: MM
      } = (0, aM.A)(), rM = (0, en.g)();
      return (0, OM.useEffect)((() => Zn), []), (0, LM.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === rM.status && (0, LM.jsx)(CM.d, {}), "error" === rM.status && (0, LM.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, LM.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: MM("seasonPass:errorLoad")
          }), (0, LM.jsx)(QM.e, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              en.e.retry()
            },
            children: MM("seasonPass:retry")
          })]
        }), "noSeason" === rM.status && (0, LM.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, LM.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, bn.g)(MM)
          })
        }), "loaded" === rM.status && (0, LM.jsx)(Kn, {
          view: rM.view,
          claimingKeys: rM.claimingKeys
        })]
      })
    }

    function Kn(MM) {
      let {
        view: rM,
        claimingKeys: iM
      } = MM;
      const OM = rM.config.tiers.filter((MM => "needsSuper" === rM.tileState({
          tier: MM.tier,
          track: "super"
        }))).length,
        SM = iM.size > 0;
      return (0, LM.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, LM.jsx)(Bn.b, {}), (0, LM.jsx)(Rn, {
          view: rM,
          claiming: SM
        }), (0, LM.jsx)(xn, {
          view: rM,
          claimingKeys: iM,
          superWaitingCount: OM,
          onClaim: qn
        }), (0, LM.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, LM.jsx)(un, {
            count: rM.claimable.length,
            claiming: SM
          }), !rM.state.hasSuperRank && (0, LM.jsx)(Nn, {
            waitingCount: OM
          })]
        })]
      })
    }

    function qn(MM) {
      en.e.claim(MM).catch((MM => {
        console.error("Failed to claim season pass reward", MM)
      }))
    }
    var Tn = iM(2542),
      Vn = iM(5096);
    const cn = MM => {
        let {
          action: rM,
          padAction: iM
        } = MM;
        const {
          isTouchScreen: OM
        } = (0, bM.m)(["isTouchScreen"]), SM = (0, oO.y)();
        return OM && !SM ? null : (0, LM.jsx)(RO.d, {
          className: "EverythingMenuTabKey",
          noaAction: rM,
          padHidesKey: !0,
          padMenuShortcut: iM
        })
      },
      MQ = (0, OM.memo)((function() {
        const {
          t: MM
        } = (0, aM.A)(), {
          gameState: rM,
          openEverythingMenuName: iM,
          crosshairGameView: SM
        } = (0, bM.m)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: PM
        } = (0, hM.b)(), nM = (0, iS.k)(Date.now()), zM = (0, NM.usePurchasesAllowed)(), mM = (0, YM.y)(), {
          view: HM
        } = (0, ii.E)(), JM = "dot" === mM || null === mM && "ready" === (null === HM || void 0 === HM ? void 0 : HM.kind), dM = (MM, rM) => (0, LM.jsx)(cn, {
          action: MM,
          padAction: rM
        }), [lM, EM] = (0, OM.useState)(null), UM = (0, OM.useRef)(null), GM = (0, OM.useRef)(null);
        (0, OM.useEffect)((() => {
          var MM;
          const rM = null === (MM = GM.current) || void 0 === MM ? void 0 : MM.querySelector(".EverythingMenuTabActive");
          null === rM || void 0 === rM || rM.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [iM]);
        const CM = {
            ..."inGame" === rM ? {} : (0, QM.fb)({
              focusOnClick: !1
            }),
            ...PS.c
          },
          eM = MM => {
            const rM = (0, nS.g)((rM => {
              (0, QM.db)(rM.currentTarget), bM.d.set({
                openEverythingMenuName: MM
              })
            }), "pointerup");
            return {
              ...CM,
              onPointerDown: MM => {
                CM.onPointerDown(MM), rM.onPointerDown(MM)
              },
              onPointerUp: MM => {
                CM.onPointerUp(MM), rM.onPointerUp(MM)
              },
              onClick: rM.onClick
            }
          },
          wM = null !== iM,
          tM = iM !== Ur.m.COSMETIC_SHOP && !SM;
        async function uM() {
          await async function() {
            if (!lM) return;
            await lM(), EM(null)
          }(), bM.d.set({
            openEverythingMenuName: null
          })
        }
        const RM = (0, OM.useRef)(null),
          pM = (0, OM.useCallback)((() => null !== RM.current && (0, jn.g)(RM.current)), []);

        function WM() {
          pM() || uM()
        }(0, OM.useEffect)((() => (0, qj.y)(pM)), [pM]);
        const sM = (0, OM.useMemo)((() => "inGame" === rM ? {
            text: MM("settingsMenu:exitGame"),
            onClick: () => {
              (0, Sn.e)()
            }
          } : (0, gM.isDiscordClient)() ? {
            text: MM("settingsMenu:exitGame"),
            onClick: () => {
              Er.l.discordActivity().then((MM => {
                MM.exit("User exited the game")
              }))
            }
          } : null), [rM, MM]),
          DM = wM && !SM,
          kM = (0, OM.useRef)(null);
        ! function(MM, rM) {
          (0, OM.useEffect)((() => {
            var iM;
            const OM = (0, Vn.e)();
            if (!rM || null === OM || !(0, Vn.c)({
                site: gM.siteUsed,
                isMobileApp: (0, yM.isMobileApp)(),
                isTouchScreen: bM.d.get("isTouchScreen")
              })) return;
            const SM = null === (iM = MM.current) || void 0 === iM ? void 0 : iM.querySelector(".EverythingMenuBackButton");
            return SM ? OM(SM) : void 0
          }), [MM, rM])
        }(kM, DM && !(0, qj.m)(iM) && "inGame" === rM);
        const ZM = (0, LM.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: WM,
          children: (0, LM.jsx)(QM.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, LM.jsx)(QS.e, {
          showing: wM,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: iM === Ur.m.SHOP,
          doGameplayStartStopOnShow: "inGame" === rM,
          children: (0, LM.jsx)(LS.d, {
            className: "EverythingMenuContainer",
            show: DM,
            children: (0, LM.jsx)(zS.e, {
              close: WM,
              togglePointerLock: !1,
              children: (0, LM.jsxs)("div", {
                className: "EverythingMenu",
                ref: kM,
                children: [!(0, qj.m)(iM) && (0, LM.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, LM.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [sM && (0, LM.jsx)(QM.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        sM.onClick()
                      },
                      children: sM.text
                    }), "inGame" === rM && (0, LM.jsx)(Tn.b, {
                      className: "EverythingMenuStopRecording"
                    }), wM && zM && (0, LM.jsx)("div", {
                      ...CM,
                      className: "EverythingMenuWallet",
                      title: MM("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, YM.n)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, LM.jsx)(On.f, {})
                    })]
                  }), (0, LM.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: GM,
                    "data-pad-tabs": "1",
                    children: [(0, LM.jsxs)("div", {
                      ...eM(Ur.m.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": iM === Ur.m.SETTINGS ? "true" : void 0,
                      className: jM()("EverythingMenuTab", {
                        EverythingMenuTabActive: iM === Ur.m.SETTINGS
                      }),
                      children: [MM("general:settings"), dM("OpenSettings", "pause")]
                    }), (0, LM.jsxs)("div", {
                      ...eM(Ur.m.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": iM === Ur.m.CUSTOMISATION ? "true" : void 0,
                      className: jM()("EverythingMenuTab", {
                        EverythingMenuTabActive: iM === Ur.m.CUSTOMISATION
                      }),
                      children: [MM("general:player"), dM("OpenCharacterCustomization")]
                    }), yM.featureFlags.useSocialFeatures && (0, LM.jsxs)("div", {
                      ...eM(Ur.m.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": iM === Ur.m.SOCIAL ? "true" : void 0,
                      className: jM()("EverythingMenuTab", {
                        EverythingMenuTabActive: iM === Ur.m.SOCIAL
                      }),
                      ...(0, Sr.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, iM === Ur.m.SOCIAL),
                      children: [MM("socialBar:social"), (0, LM.jsx)(Cn.c, {})]
                    }), nM && (0, LM.jsx)("div", {
                      ...eM(Ur.m.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": iM === Ur.m.SEASON_PASS ? "true" : void 0,
                      className: jM()("EverythingMenuTab", {
                        EverythingMenuTabActive: iM === Ur.m.SEASON_PASS
                      }),
                      children: MM("seasonPass:title", {
                        season: nM.seasonNumber
                      })
                    }), (0, ii.u)(HM) && (0, LM.jsxs)("div", {
                      ...eM(Ur.m.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": iM === Ur.m.COSMETIC_SHOP ? "true" : void 0,
                      className: jM()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: iM === Ur.m.COSMETIC_SHOP
                      }),
                      children: [(0, LM.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: MM("store:title")
                      }), "new" === mM && (0, LM.jsx)(SP, {}), JM && (0, LM.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === rM && (0, LM.jsxs)("div", {
                      ...eM(Ur.m.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": iM === Ur.m.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: jM()("EverythingMenuTab", {
                        EverythingMenuTabActive: iM === Ur.m.LOBBY_LEADERBOARD
                      }),
                      children: [MM("general:lobby"), dM("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, LM.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: ZM
                  })]
                }), (0, qj.m)(iM) && ZM, (0, LM.jsxs)("div", {
                  ref: RM,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === rM ? "0.85" : "1"
                  },
                  children: [(0, LM.jsx)(MS, {
                    show: iM === Ur.m.SETTINGS,
                    setBeforeResumeCallback: EM
                  }), (0, LM.jsx)(aS, {
                    show: iM === Ur.m.CUSTOMISATION
                  }), (0, LM.jsx)(OM.Suspense, {
                    fallback: null,
                    children: (0, LM.jsx)(Nj, {
                      show: iM === Ur.m.SHOP
                    })
                  }), (0, LM.jsx)(Ma, {
                    show: iM === Ur.m.LOBBY_LEADERBOARD
                  }), zM && (0, LM.jsx)(rn, {
                    show: iM === Ur.m.COSMETIC_SHOP
                  }), !zM && (0, LM.jsx)(vP, {
                    show: iM === Ur.m.COSMETIC_SHOP
                  }), (0, LM.jsx)(Un, {
                    show: iM === Ur.m.SOCIAL
                  }), (0, LM.jsx)(Xn, {
                    show: iM === Ur.m.SEASON_PASS
                  })]
                }), !(0, yM.isMobileApp)() && (0, mS.f)(PM.getPlayerRanks()) && (0, LM.jsx)(LS.d, {
                  ref: UM,
                  className: "EverythingMenuBannerDiv",
                  show: tM,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, LM.jsx)(an.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: UM
                    },
                    showing: wM && tM,
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
  35070: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => hM,
      i: () => dM
    });
    iM(35072);
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1188),
      PM = iM(1520),
      nM = iM(2796),
      QM = iM(1398),
      zM = iM(2382),
      LM = iM(3449),
      mM = iM(2412),
      HM = iM(1303);

    function hM(MM) {
      let {
        endsAt: rM,
        className: iM
      } = MM;
      return (0, HM.jsxs)("span", {
        className: jM()("NewPlayerDealClock", iM),
        children: [(0, HM.jsx)(QM.b, {
          name: "hourglass"
        }), (0, HM.jsx)(nM.f, {
          toTime: rM
        })]
      })
    }

    function JM(MM) {
      let {
        offered: rM,
        needsLogin: iM,
        busy: OM,
        highlight: SM,
        onBuy: nM
      } = MM;
      const {
        t: QM
      } = (0, aM.A)(), {
        pack: hM
      } = rM, JM = (0, LM.c)(rM.package);
      return (0, HM.jsxs)("div", {
        className: jM()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: SM
        }),
        children: [(0, HM.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, HM.jsx)("img", {
            src: mM.c[rM.tier],
            alt: "",
            draggable: !1
          }), (0, HM.jsx)("span", {
            className: "NewPlayerDealTag",
            children: QM("newPlayerDeal:tag")
          })]
        }), (0, HM.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, HM.jsx)(zM.b, {
            className: "NewPlayerDealPackAmount",
            amount: hM.gems
          })
        }), (0, HM.jsx)(PM.p, {
          className: "NewPlayerDealBuy",
          loading: OM,
          onClick: nM,
          ariaLabel: QM("newPlayerDeal:buyLabel", {
            amount: hM.gems.toLocaleString(),
            price: JM
          }),
          children: QM(iM ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: JM
          })
        })]
      })
    }

    function dM(MM) {
      let {
        view: rM,
        needsLogin: iM,
        busy: SM,
        highlight: PM,
        onBuy: nM
      } = MM;
      const {
        t: QM
      } = (0, aM.A)();
      return (0, HM.jsxs)("div", {
        className: jM()("NewPlayerDealPacks", rM.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [rM.packs.map(((MM, rM) => (0, HM.jsxs)(OM.Fragment, {
          children: [rM > 0 && (0, HM.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, HM.jsx)("i", {})
          }), (0, HM.jsx)(JM, {
            offered: MM,
            needsLogin: iM,
            busy: SM,
            highlight: PM === MM.pack.packageId,
            onBuy: () => {
              nM(MM)
            }
          })]
        }, MM.pack.packageId))), (0, HM.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, HM.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: QM("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35077: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => wM,
      e: () => gM
    });
    iM(35072);
    var OM = iM(3442),
      SM = iM(1548),
      jM = iM(2401),
      aM = iM(3432),
      PM = iM(3411),
      nM = iM(3439),
      QM = iM(3385),
      zM = iM(1188),
      LM = iM(1429),
      mM = iM(1142),
      HM = iM(1520),
      hM = iM(1398),
      JM = iM(2382),
      dM = iM(2910),
      yM = iM(2779),
      lM = iM(2782),
      EM = iM(2787),
      UM = iM(1303);
    const GM = new nM.c(QM.getBillingClient, QM.addPurchaseRecordListener);
    let CM = !1;

    function eM(MM, rM) {
      null !== MM && (0, yM.u)(MM) || ((0, SM.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${rM.pack.packageId}`
      }), null !== MM && (0, yM.z)(MM), wM(rM.pack.gems))
    }

    function bM(MM, rM, iM) {
      const SM = (0, yM.d)(rM);
      switch (MM.kind) {
        case "completed":
          eM(SM, iM);
          break;
        case "pending":
          jM = MM.intentId, aM = () => {
            dM.i.refresh(), eM(SM, iM)
          }, CM || (CM = !0, GM.listen()), GM.follow(jM, aM);
          break;
        case "unknownPackage":
          (0, yM.N)(rM, null);
          break;
        case "failed":
          MM.errorKey === OM.d.newPlayerDealUnavailable && (0, yM.N)(rM, null)
      }
      var jM, aM
    }

    function wM(MM) {
      LM.NotificationProvider.showCustomPopup({
        body: rM => (0, UM.jsx)(tM, {
          gems: MM,
          close: rM
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function tM(MM) {
      let {
        gems: rM,
        close: iM
      } = MM;
      const {
        t: OM
      } = (0, zM.A)();
      return (0, UM.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, UM.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, UM.jsx)(hM.b, {
            name: "circle-check"
          }), (0, UM.jsx)(JM.b, {
            amount: rM
          }), (0, UM.jsx)("span", {
            children: OM("newPlayerDeal:added")
          })]
        }), (0, UM.jsx)(HM.p, {
          className: "NewPlayerDealAddedOk",
          onClick: iM,
          children: OM("general:ok")
        })]
      })
    }

    function gM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.e;
      const {
        userContext: iM
      } = (0, mM.b)(), {
        purchaseUnderWay: OM,
        notice: SM,
        buy: nM
      } = (0, PM.d)(rM), QM = (0, lM.m)(), zM = iM.mayBuy() || (0, jM.guestsMayBuy)(), LM = null === QM ? !zM : QM.guest && !iM.isLoggedIn();
      return {
        purchaseUnderWay: OM,
        notice: SM,
        needsLogin: LM,
        buyPack: function(OM, SM) {
          (0, yM.G)("new_player_deal.buy", (0, EM.b)(OM.arm, MM, SM.pack.packageId)), null === QM ? nM(function(MM) {
            return {
              sku: MM.pack.packageId,
              tier: MM.tier,
              amount: MM.pack.gems,
              bonusPercent: 0,
              package: MM.package
            }
          }(SM), null, {
            followPending: !1
          }).then((MM => {
            bM(MM, iM, SM)
          })) : LM ? rM(SM.pack.packageId, null) : eM((0, yM.d)(iM), SM)
        }
      }
    }
  },
  5282: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => dM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(5011),
      aM = iM(1188),
      PM = iM(1398),
      nM = iM(1520),
      QM = iM(1573),
      zM = iM(1429),
      LM = iM(2709),
      mM = iM(1303);
    const HM = {
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

    function hM(MM) {
      let {
        platform: rM
      } = MM;
      const iM = "youtube" === rM;
      return (0, mM.jsxs)("span", {
        className: SM()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: iM
        }),
        children: [iM && (0, mM.jsx)(LM.d, {
          variant: "white"
        }), !iM && (0, mM.jsx)(PM.b, {
          name: HM[rM].icon,
          kit: "brands"
        })]
      })
    }

    function JM(MM) {
      let {
        platform: rM,
        link: iM,
        editable: OM,
        userContext: SM,
        onLinksUpdated: LM
      } = MM;
      const {
        t: JM
      } = (0, aM.A)(), dM = HM[rM];
      if (!iM && !OM) return null;

      function yM() {
        var MM;
        if (!SM || !LM) return;
        zM.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: dM.name
            }
          },
          prefixText: jM.t[rM],
          placeholderText: "playBloxd",
          initialValue: null !== (MM = null === iM || void 0 === iM ? void 0 : iM.handle) && void 0 !== MM ? MM : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: iM ? "general:remove" : void 0
        }).getResult().then((async MM => {
          if ("notificationTornDown" !== MM && null !== MM) try {
            "submit" === MM.type ? await QM.c.setSocialLink(SM, rM, MM.value) : await QM.c.clearSocialLink(SM, rM), LM()
          } catch (iM) {
            console.error("Failed to update social link", iM), zM.NotificationProvider.showAlertPopup({
              title: iM.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (iM) {
        const MM = `@${iM.handle}`;
        return (0, mM.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: dM.color
          },
          href: iM.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, mM.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, mM.jsx)(hM, {
              platform: rM
            }), (0, mM.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, mM.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: MM
              })
            })]
          }), OM && (0, mM.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, nM.fb)({
              stopPropagation: !0
            }),
            onClick: MM => {
              MM.stopPropagation(), MM.preventDefault(), yM()
            },
            children: (0, mM.jsx)(PM.b, {
              name: "pen-to-square"
            })
          }), !OM && (0, mM.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, mM.jsx)(PM.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, mM.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: dM.color
        },
        ...(0, nM.fb)(),
        onClick: () => {
          yM()
        },
        children: [(0, mM.jsx)(hM, {
          platform: rM
        }), (0, mM.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, mM.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: dM.name
          }), (0, mM.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: JM("homePage:profileSocialLinkAdd")
          })]
        }), (0, mM.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, mM.jsx)(PM.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function dM(MM) {
      let {
        socialLinks: rM,
        editable: iM = !1,
        userContext: OM,
        onLinksUpdated: SM
      } = MM;
      if (!iM && 0 === rM.length) return null;
      const aM = new Map(rM.map((MM => [MM.platform, MM]))),
        PM = iM ? jM.s : rM.map((MM => MM.platform));
      return (0, mM.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, mM.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: PM.map((MM => (0, mM.jsx)(JM, {
            platform: MM,
            link: aM.get(MM),
            editable: iM,
            userContext: OM,
            onLinksUpdated: SM
          }, MM)))
        })
      })
    }
  },
  35064: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = iM(44),
      SM = iM(3839);

    function jM() {
      const [MM, rM] = (0, OM.useState)(!1);
      return (0, OM.useLayoutEffect)((() => {
        let MM = !0;
        return (0, SM.e)().then((() => {
          MM && rM(!0)
        })), () => {
          MM = !1
        }
      }), []), MM
    }
  },
  34997: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => JM,
      e: () => hM
    });
    iM(34999);
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(34989);

    function PM(MM, rM) {
      return Math.max(1, Math.round(MM * rM))
    }

    function nM(MM, rM) {
      const iM = rM * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        OM = function(MM, rM) {
          if (MM.lines) return PM(MM.lineThickness, rM) % 2;
          if (MM.dot) return PM(MM.dotSize, rM) % 2;
          return QM(MM, rM) % 2
        }(MM, rM),
        SM = zM(MM.lineThickness * iM, OM),
        jM = PM(MM.lineLength, iM),
        aM = Math.round(MM.gap * iM),
        nM = MM.outline > 0 ? PM(MM.outline, iM) : 0,
        mM = [];
      if (MM.lines && (mM.push({
          x: SM + aM,
          y: 0,
          w: jM,
          h: SM,
          arm: "right"
        }), mM.push({
          x: -aM - jM,
          y: 0,
          w: jM,
          h: SM,
          arm: "left"
        }), mM.push({
          x: 0,
          y: SM + aM,
          w: SM,
          h: jM,
          arm: "down"
        }), MM.tStyle || mM.push({
          x: 0,
          y: -aM - jM,
          w: SM,
          h: jM,
          arm: "up"
        }), 0 === aM && mM.push({
          x: 0,
          y: 0,
          w: SM,
          h: SM
        })), MM.dot) {
        const rM = zM(MM.dotSize * iM, OM),
          jM = MM.lines && 0 === aM && MM.dotSize > MM.lineThickness ? Math.max(rM, SM + 2) : rM,
          PM = (SM - jM) / 2;
        mM.push({
          x: PM,
          y: PM,
          w: jM,
          h: jM
        })
      }
      const HM = mM.map((MM => ({
        ...MM,
        x: MM.x - nM,
        y: MM.y - nM,
        w: MM.w + 2 * nM,
        h: MM.h + 2 * nM
      })));
      let hM = null,
        JM = null;
      if (MM.circle) {
        const rM = PM(MM.circleThickness, iM),
          jM = function(MM, rM) {
            return MM + (MM % 2 === rM ? 0 : 1)
          }(QM(MM, iM), OM),
          aM = (SM - jM) / 2;
        hM = LM(aM, jM, rM), nM > 0 && (JM = LM(aM - nM, jM + 2 * nM, rM + 2 * nM))
      }
      return {
        cell: SM,
        fills: mM,
        outlines: nM > 0 ? HM : [],
        ring: hM,
        ringOutline: JM
      }
    }

    function QM(MM, rM) {
      return Math.round(MM.circleRadius * rM * 2 + PM(MM.circleThickness, rM))
    }

    function zM(MM, rM) {
      return Math.max(2 - rM, 2 * Math.round((MM - rM) / 2) + rM)
    }

    function LM(MM, rM, iM) {
      const OM = 2 * iM >= rM - 1;
      return {
        x: MM,
        y: MM,
        size: rM,
        border: Math.min(iM, Math.floor(rM / 2)),
        filled: OM
      }
    }
    var mM = iM(1303);
    const HM = 1.4;

    function hM(MM, rM) {
      return MM && rM ? `scale(${HM})` : "scale(1)"
    }

    function JM(MM) {
      return "classic" === MM.settings.style ? (0, mM.jsx)(lM, {
        ...MM
      }) : (0, mM.jsx)(wM, {
        ...MM
      })
    }
    const dM = .125;

    function yM(MM, rM) {
      const iM = {};
      if (MM.color !== aM.e.color && (iM.color = (0, aM.i)(MM.color)), MM.opacity !== aM.e.opacity && (iM.opacity = MM.opacity / 100), MM.outline !== aM.e.outline || MM.outlineColor !== aM.e.outlineColor) {
        const rM = MM.outline,
          OM = (0, aM.i)(MM.outlineColor);
        iM.textShadow = rM > 0 ? `-${rM}px 0 ${OM}, 0 ${rM}px ${OM}, ${rM}px 0 ${OM}, 0 -${rM}px ${OM}` : "none"
      }
      if (MM.size !== aM.e.size) {
        const OM = MM.size / 100;
        iM.fontSize = rM ? `calc(max(1.3rem, 18px) * ${OM})` : `calc(1.3rem * ${OM})`, iM.marginTop = `-${dM}em`, iM.transformOrigin = `50% calc(50% + ${dM}em)`
      }
      return iM
    }

    function lM(MM) {
      let {
        settings: rM,
        touch: iM,
        inPreview: OM,
        inEditor: jM,
        pressed: aM = !1,
        pressRef: PM
      } = MM;
      return (0, mM.jsx)("div", {
        className: SM()("Crosshair", {
          Touch: iM,
          CrosshairInPreview: OM,
          CrosshairInEditor: jM || OM
        }),
        ref: PM,
        style: {
          transform: hM(aM, rM.growOnClick),
          ...yM(rM, iM)
        },
        children: "+"
      })
    }

    function EM(MM, rM) {
      return MM / rM + "px"
    }

    function UM(MM, rM, iM, OM) {
      return {
        ...eM(MM, rM, iM),
        width: EM(MM.w, iM),
        height: EM(MM.h, iM),
        background: OM
      }
    }

    function GM(MM, rM, iM) {
      return {
        left: EM(MM.x, rM),
        top: EM(MM.y, rM),
        width: EM(MM.size, rM),
        height: EM(MM.size, rM),
        borderWidth: EM(MM.border, rM),
        borderColor: iM,
        background: MM.filled ? iM : void 0
      }
    }
    const CM = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function eM(MM, rM, iM) {
      const [OM, SM] = MM.arm ? CM[MM.arm] : [0, 0], jM = Math.round(rM * iM);
      return {
        left: EM(MM.x + OM * jM, iM),
        top: EM(MM.y + SM * jM, iM)
      }
    }

    function bM(MM) {
      return MM.arm ? {
        "data-arm": MM.arm,
        "data-x": MM.x,
        "data-y": MM.y
      } : {}
    }

    function wM(MM) {
      let {
        settings: rM,
        inPreview: iM,
        inEditor: OM,
        pressed: PM = !1,
        spread: QM,
        spreadRef: zM
      } = MM;
      const LM = (0, jM.useRef)(null),
        {
          box: hM,
          dpr: JM
        } = function(MM) {
          const [rM, iM] = (0, jM.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, jM.useLayoutEffect)((() => {
            const rM = MM.current;
            if (!rM) return;
            const OM = () => {
              const MM = rM.getBoundingClientRect(),
                OM = window.devicePixelRatio || 1;
              iM((rM => rM.dpr === OM && rM.box.left === MM.left && rM.box.top === MM.top && rM.box.width === MM.width && rM.box.height === MM.height ? rM : {
                box: {
                  left: MM.left,
                  top: MM.top,
                  width: MM.width,
                  height: MM.height
                },
                dpr: OM
              }))
            };
            OM();
            const SM = new ResizeObserver(OM);
            return SM.observe(rM), window.addEventListener("resize", OM), window.addEventListener("scroll", OM, !0), () => {
              SM.disconnect(), window.removeEventListener("resize", OM), window.removeEventListener("scroll", OM, !0)
            }
          }), [MM]), rM
        }(LM),
        dM = (0, jM.useRef)(JM);
      dM.current = JM;
      const yM = nM(rM, JM, PM && rM.growOnClick ? HM : 1),
        lM = function(MM, rM, iM) {
          const OM = Math.round((MM.left + MM.width / 2) * iM - rM / 2),
            SM = Math.round((MM.top + MM.height / 2) * iM - rM / 2);
          return {
            x: OM / iM - MM.left,
            y: SM / iM - MM.top
          }
        }(hM, yM.cell, JM),
        EM = (0, aM.i)(rM.color),
        CM = (0, aM.i)(rM.outlineColor),
        wM = (0, jM.useRef)(0);
      (0, jM.useLayoutEffect)((() => {
        if (zM) return zM.current = MM => {
          var rM;
          wM.current = MM, null === (rM = LM.current) || void 0 === rM || rM.querySelectorAll("[data-arm]").forEach((rM => {
            Object.assign(rM.style, eM(function(MM) {
              return {
                x: Number(MM.dataset.x),
                y: Number(MM.dataset.y),
                arm: MM.dataset.arm
              }
            }(rM), MM, dM.current))
          }))
        }, () => {
          zM.current = null
        }
      }), [zM]);
      const tM = null !== QM && void 0 !== QM ? QM : wM.current;
      return (0, mM.jsx)("div", {
        ref: LM,
        className: SM()("CrosshairShapes", {
          CrosshairInPreview: iM,
          CrosshairInEditor: OM || iM,
          CrosshairSpreads: void 0 !== zM
        }),
        children: (0, mM.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: lM.x,
            top: lM.y,
            opacity: rM.opacity / 100
          },
          children: (0, mM.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [yM.ringOutline && (0, mM.jsx)("div", {
              className: "CrosshairRing",
              style: GM(yM.ringOutline, JM, CM)
            }), yM.outlines.map(((MM, rM) => (0, mM.jsx)("div", {
              className: "CrosshairPart",
              ...bM(MM),
              style: UM(MM, tM, JM, CM)
            }, `o${rM}`))), yM.ring && (0, mM.jsx)("div", {
              className: "CrosshairRing",
              style: GM(yM.ring, JM, EM)
            }), yM.fills.map(((MM, rM) => (0, mM.jsx)("div", {
              className: "CrosshairPart",
              ...bM(MM),
              style: UM(MM, tM, JM, EM)
            }, `f${rM}`)))]
          })
        })
      })
    }
  },
  35003: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      f: () => dM,
      i: () => JM
    });
    var OM = iM(34989);
    const SM = "XH1-",
      jM = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      aM = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      PM = ["color", "outlineColor"],
      nM = 1 + 3 * PM.length + aM.length + 1,
      QM = Math.ceil(8 * nM / Math.log2(62)),
      zM = SM.length + QM;

    function LM(MM) {
      let rM = 90;
      for (const iM of MM) rM = 31 * rM + iM & 255;
      return rM
    }
    const mM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      HM = BigInt(mM.length);

    function hM(MM, rM) {
      let iM = 0n;
      for (const SM of MM) {
        const MM = mM.indexOf(SM);
        if (MM < 0) return null;
        iM = iM * HM + BigInt(MM)
      }
      if (iM >> BigInt(8 * rM) !== 0n) return null;
      const OM = [];
      for (let SM = 0; SM < rM; SM++) OM.unshift(Number(0xffn & iM)), iM >>= 8n;
      return OM
    }

    function JM(MM) {
      let rM = "shapes" === MM.style ? 1 : 0;
      jM.forEach(((iM, OM) => {
        MM[iM] && (rM |= 1 << OM + 1)
      }));
      const iM = [rM];
      for (const SM of PM) {
        const rM = (0, OM.f)(SM, MM[SM]);
        iM.push(rM >> 16 & 255, rM >> 8 & 255, 255 & rM)
      }
      for (const SM of aM) {
        const {
          min: rM,
          step: jM
        } = OM.d[SM];
        iM.push(Math.round(((0, OM.f)(SM, MM[SM]) - rM) / jM))
      }
      return iM.push(LM(iM)), SM + function(MM, rM) {
        let iM = 0n;
        for (const SM of MM) iM = iM << 8n | BigInt(SM);
        let OM = "";
        for (let SM = 0; SM < rM; SM++) OM = mM[Number(iM % HM)] + OM, iM /= HM;
        return OM
      }(iM, QM)
    }

    function dM(MM) {
      for (const rM of MM.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${QM}})`, "gi"))) {
        const MM = yM(hM(rM[1], nM));
        if (MM) return MM
      }
      return null
    }

    function yM(MM) {
      if (!MM || MM.length !== nM || LM(MM.slice(0, -1)) !== MM[MM.length - 1]) return null;
      const rM = MM[0],
        iM = {
          ...OM.e,
          style: 1 & rM ? "shapes" : "classic"
        };
      jM.forEach(((MM, OM) => {
        iM[MM] = 0 !== (rM & 1 << OM + 1)
      }));
      let SM = 1;
      for (const OM of PM) iM[OM] = MM[SM] << 16 | MM[SM + 1] << 8 | MM[SM + 2], SM += 3;
      for (const jM of aM) {
        const {
          min: rM,
          step: aM
        } = OM.d[jM];
        iM[jM] = (0, OM.f)(jM, rM + MM[SM] * aM), SM++
      }
      return iM
    }
  },
  34989: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      e: () => SM,
      f: () => jM,
      i: () => QM,
      j: () => nM,
      m: () => zM,
      p: () => PM,
      t: () => aM
    });
    const OM = {
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
      SM = Object.freeze({
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

    function jM(MM, rM) {
      var iM;
      const {
        min: jM,
        max: aM,
        step: PM
      } = OM[MM];
      if (!Number.isFinite(rM)) return SM[MM];
      const nM = (null !== (iM = String(PM).split(".")[1]) && void 0 !== iM ? iM : "").length,
        QM = Number((Math.round(rM / PM) * PM).toFixed(nM));
      return Math.min(aM, Math.max(jM, QM))
    }

    function aM(MM, rM, iM) {
      const OM = "number" === typeof iM ? jM(rM, iM) : iM;
      return {
        ...MM,
        [rM]: OM
      }
    }

    function PM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(SM).every((OM => iM.includes(OM) || MM[OM] === rM[OM]))
    }

    function nM(MM) {
      return PM(MM, SM)
    }

    function QM(MM) {
      return `#${MM.toString(16).padStart(6,"0")}`
    }

    function zM(MM) {
      const rM = /^#?([0-9a-f]{6})$/i.exec(MM.trim());
      return rM ? parseInt(rM[1], 16) : null
    }
  },
  35006: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      f: () => mM
    });
    var OM = iM(44),
      SM = iM(30),
      jM = iM(35003),
      aM = iM(34989);
    const PM = "crosshairCode";
    let nM = null;
    const QM = new Set;

    function zM() {
      if (null === nM) {
        var MM;
        const rM = SM.g.getItem(PM);
        nM = null !== (MM = "string" === typeof rM ? (0, jM.f)(rM) : null) && void 0 !== MM ? MM : aM.e
      }
      return nM
    }

    function LM(MM) {
      nM = MM, (0, aM.j)(MM) ? SM.g.removeItem(PM) : SM.g.setItem(PM, (0, jM.i)(MM));
      for (const rM of QM) rM()
    }

    function mM() {
      const [MM, rM] = (0, OM.useState)(zM);
      return (0, OM.useEffect)((() => {
        const MM = () => {
          rM(zM())
        };
        return MM(), iM = MM, QM.add(iM), () => {
          QM.delete(iM)
        };
        var iM
      }), []), MM
    }
  },
  34985: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => SM
    });
    var OM = iM(19);

    function SM(MM, rM) {
      return MM && !rM
    }

    function jM() {
      return SM(OM.d.get("isTouchScreen"), OM.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5096: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      e: () => jM,
      i: () => SM
    });
    let OM = null;

    function SM(MM) {
      OM = MM
    }

    function jM() {
      return OM
    }

    function aM(MM) {
      return "bloxd" === MM.site && !MM.isMobileApp && !MM.isTouchScreen
    }
  },
  34954: (MM, rM, iM) => {
    function OM(MM, rM) {
      return MM && !rM
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  34971: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(1329);

    function SM() {
      var MM, rM;
      return null !== (MM = null === (rM = screen.orientation) || void 0 === rM ? void 0 : rM.type) && void 0 !== MM ? MM : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const jM = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && SM() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = SM(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, OM.CJ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const MM of this.resizers) MM()
          }
        }), 1e3)
      }
      heldSizer(MM) {
        let rM = !1;
        return () => {
          if (rM && this.isHeld()) return null;
          const iM = MM();
          return rM ||= null !== iM, iM
        }
      }
      onRelease(MM) {
        return this.resizers.add(MM), () => {
          this.resizers.delete(MM)
        }
      }
    }
  },
  34929: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => lM,
      i: () => QM,
      j: () => JM,
      n: () => hM
    });
    var OM = iM(143),
      SM = iM(1279),
      jM = iM(1202),
      aM = iM(1144),
      PM = iM(1826);
    const nM = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function QM(MM) {
      return nM[MM]
    }

    function zM(MM) {
      return (0, PM.c)(MM) ? "outdated" : MM instanceof OM.e ? 429 === MM.httpCode ? "busy" : "server" : "offline"
    }

    function LM(MM, rM, iM) {
      return (0, aM.postJsonWithMetricsCookiesAndJsonResponse)(`${jM.clientSideServerUrls.indexUrl}${rM}`, iM, {
        retries: 3
      }, MM.getMetricsCookies()).catch((MM => (console.error("Bad response from the server when trying to change name:", rM, MM), {
        outcome: "failed",
        failure: zM(MM)
      })))
    }

    function mM(MM) {
      return "outcome" in MM && "failed" === MM.outcome
    }

    function HM(MM) {
      return console.error("Error when trying to get with new name from DB", MM), {
        outcome: "refused",
        message: MM
      }
    }
    async function hM(MM) {
      const rM = await LM(MM, "/index/name/random", {});
      return mM(rM) ? rM : "err" in rM ? HM(rM.err) : (MM.setPlayerName(rM.name), {
        outcome: "changed",
        name: rM.name
      })
    }
    async function JM(MM, rM) {
      const iM = await LM(MM, "/index/name/update", {
        name: rM
      });
      return mM(iM) ? iM : "err" in iM ? HM(iM.err) : iM.nameExists ? {
        outcome: "taken"
      } : (MM.setPlayerName(rM), {
        outcome: "changed",
        name: rM
      })
    }

    function dM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const OM = 1 === rM ? 1 : 10 ** (rM - 1),
        jM = String(OM + Math.floor(iM() * (10 ** rM - OM)));
      return `${MM.slice(0,SM.g-rM)}${jM}`
    }
    const yM = [1, 2, 3, 4];
    async function lM(MM, rM) {
      const iM = await JM(MM, rM);
      if ("taken" !== iM.outcome) return iM;
      for (const OM of yM) {
        const iM = dM(rM, OM),
          SM = await JM(MM, iM);
        if ("taken" !== SM.outcome) return SM
      }
      return {
        outcome: "taken"
      }
    }
  },
  34956: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => nM
    });
    var OM = iM(19);
    const SM = 24,
      jM = "farNametags",
      aM = 1e5;

    function PM() {
      var MM;
      return null === (MM = OM.d.get("showDistantNametags")) || void 0 === MM || MM
    }

    function nM() {
      var MM;
      return null !== (MM = function() {
        const MM = new URLSearchParams(window.location.search).get(jM),
          rM = null === MM || "" === MM ? NaN : Number(MM);
        return Number.isFinite(rM) && rM >= 0 ? Math.min(rM, aM) : null
      }()) && void 0 !== MM ? MM : PM() ? 0 : SM
    }
  },
  34980: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      d: () => LM,
      g: () => zM
    });
    var OM = iM(243),
      SM = iM(83),
      jM = iM(114),
      aM = iM(110),
      PM = iM(650);
    const nM = new Set(["mali_bifrost"]);

    function QM() {
      if (PM.i) return;
      const MM = (0, SM.pageOperatingSystem)();
      if ("android" !== MM && "windows" !== MM || (0, PM.e)("webgl_default")) return;
      if ("windows" === MM) return MM => "qualcomm" === (0, SM.normaliseGpuVendor)((0, aM.d)(MM).vendor);
      const rM = (0, jM.o)(),
        iM = null === rM ? (0, OM.w)() : (0, OM.l)(rM.vendor, rM.renderer);
      return null !== iM && nM.has(iM) ? MM => (0, OM.q)((0, aM.d)(MM).vendor, iM) : void 0
    }

    function zM(MM, rM) {
      return MM ? () => !0 : rM()
    }
    async function LM(MM) {
      try {
        const rM = zM(MM, QM),
          iM = navigator.gpu;
        if (void 0 === rM || void 0 === iM) return !1;
        const OM = await (0, aM.o)(iM, {
          seed: !1,
          compatibility: rM
        });
        return "string" !== typeof OM && OM.compatibility && !(0, aM.j)(OM.adapter)
      } catch (rM) {
        return console.error("WebGPU compatibility-mode adapter request failed.", rM), !1
      }
    }
  },
  35040: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      g: () => aM
    });
    const OM = [{
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

    function SM(MM) {
      let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof MM) {
        if (!Number.isFinite(MM)) return "0";
        if (Math.abs(MM) < 100) {
          const rM = MM < 0 ? "-" : "",
            iM = Math.abs(MM);
          return iM >= 10 ? `${rM}${iM.toFixed(1).replace(/\.0$/,"")}` : `${rM}${iM.toFixed(2).replace(/\.?0+$/,"")}`
        }
        rM = BigInt(Math.floor(MM))
      } else rM = MM;
      const SM = rM < 0n ? -rM : rM,
        jM = rM < 0n ? "-" : "",
        aM = SM.toString();
      if (aM.length <= iM) return `${jM}${aM}`;
      const PM = 3 * Math.floor((aM.length - 1) / 3);
      if (PM < 3) return `${jM}${aM}`;
      if (PM > 3 * OM.length) {
        const MM = aM[0],
          rM = aM.slice(1, 3).replace(/0+$/, "");
        return `${jM}${rM?`${MM}.${rM}`:MM}e${aM.length-1}`
      }
      const {
        threshold: nM,
        suffix: QM
      } = OM[OM.length - PM / 3], zM = SM / nM, LM = Number(1000n * (SM % nM) / nM), mM = Number(zM) + LM / 1e3;
      let HM;
      return HM = mM >= 100 ? Math.floor(mM).toString() : mM >= 10 ? mM.toFixed(1).replace(/\.0$/, "") : mM.toFixed(2).replace(/\.?0+$/, ""), `${jM}${HM}${QM}`
    }
    const jM = OM.map((MM => {
      let {
        threshold: rM,
        suffix: iM
      } = MM;
      return {
        threshold: Number(rM),
        suffix: iM
      }
    })).filter((MM => {
      let {
        threshold: rM
      } = MM;
      return Number.isFinite(rM)
    }));

    function aM(MM) {
      const rM = Math.abs(MM),
        iM = MM < 0 ? "-" : "";
      for (const {
          threshold: OM,
          suffix: SM
        }
        of jM)
        if (rM >= OM) {
          const MM = rM / OM;
          if (MM >= 1e3) return `${iM}${rM.toExponential(2).replace("e+","e")}`;
          let jM;
          return jM = MM >= 100 ? Math.floor(MM).toString() : MM >= 10 ? MM.toFixed(1).replace(/\.0$/, "") : MM.toFixed(2).replace(/\.?0+$/, ""), `${iM}${jM}${SM}`
        } return `${iM}${rM}`
    }
  },
  35029: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      f: () => mM,
      g: () => LM,
      k: () => aM,
      o: () => QM,
      p: () => nM
    });
    var OM = iM(332);
    const SM = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      jM = {
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

    function aM(MM) {
      var rM;
      return null !== (rM = jM[MM]) && void 0 !== rM ? rM : {
        translationKey: ""
      }
    }
    const PM = {
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

    function nM(MM) {
      return SM.includes(MM)
    }

    function QM(MM) {
      var rM;
      return !0 === (null === MM || void 0 === MM || null === (rM = MM.customAttributes) || void 0 === rM ? void 0 : rM.cannotEnchant)
    }

    function zM(MM, rM) {
      const {
        max: iM
      } = PM[MM].at(-1);
      return rM <= iM
    }

    function LM(MM) {
      const rM = Math.sin(MM / 80),
        iM = MM => {
          if (MM <= 0) return 0;
          if (MM > 1) return 1;
          let rM = 0;
          const iM = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let OM = 0; OM < iM.length; OM++) {
            rM += (OM % 2 === 0 ? 1 : -1) * iM[OM] * Math.pow(MM, 2 + OM) / (2 + OM)
          }
          return 72 * rM
        },
        OM = .3 - .78 * rM,
        SM = .5 - .78 * rM,
        jM = .6 - .7 * rM,
        aM = .8 - .6 * rM;
      let PM = iM(OM),
        nM = iM(SM) - PM,
        QM = iM(jM) - nM - PM,
        zM = iM(aM) - QM - nM - PM;
      OM < .041 && (nM /= 1 - PM, QM /= 1 - PM, zM /= 1 - PM, PM = 0), SM < .041 && (PM /= 1 - nM, QM /= 1 - nM, zM /= 1 - nM, nM = 0), jM < .041 && (PM /= 1 - QM, nM /= 1 - QM, zM /= 1 - QM, QM = 0), aM < .041 && (PM /= 1 - zM, nM /= 1 - zM, QM /= 1 - zM, zM = 0);
      return {
        commonProb: PM,
        uncommonProb: nM,
        rareProb: QM,
        epicProb: zM,
        legendaryProb: 1 - (zM + QM + nM + PM)
      }
    }

    function mM(MM, rM) {
      const {
        min: iM,
        max: SM
      } = PM[MM][rM], jM = OM.d.sampleUniformIntDistribution(iM, SM, "includeMax");
      return {
        ...LM(jM),
        level: jM
      }
    }
  },
  34999: () => {},
  35072: () => {},
  13457: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14650: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16014: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16502: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);