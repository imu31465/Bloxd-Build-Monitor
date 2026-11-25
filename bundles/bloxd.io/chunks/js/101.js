export const id = 101;
export const ids = [101];
export const modules = {
  34439: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      EverythingMenu: () => tl
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1244),
      lu = ju(1116),
      qu = ju(2130),
      fu = ju(1506),
      Cu = ju(1170),
      bu = ju(1154);

    function cu(uu) {
      let {
        items: Eu,
        link: ju,
        onClick: su,
        selectedItemId: Uu,
        className: cu,
        padStartsOnTab: Nu = !0
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), Yu = (0, Cu.l)(), hu = [];
      for (const Zu of Eu) {
        var Du;
        const uu = hu[hu.length - 1];
        var gu;
        if (uu && uu.title === (null !== (Du = Zu.section) && void 0 !== Du ? Du : null)) uu.items.push(Zu);
        else hu.push({
          title: null !== (gu = Zu.section) && void 0 !== gu ? gu : null,
          items: [Zu]
        })
      }
      return (0, bu.jsxs)("div", {
        className: Zu()("MenuSideBarBody", cu),
        "data-pad-tabs": "2",
        children: [hu.map(((uu, Eu) => {
          var ju;
          return (0, bu.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [uu.title && (0, bu.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Ou(uu.title)
            }), uu.items.map((uu => {
              var Eu;
              const ju = !!uu.iconElement || !!uu.faIcon;
              return (0, bu.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Uu === uu.id ? "true" : void 0,
                "data-pad-default-focus": Nu && Uu === uu.id || void 0,
                className: Zu()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Uu === uu.id
                }),
                onClick: () => {
                  su(uu.id)
                },
                children: [ju && (0, bu.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Eu = uu.iconElement) && void 0 !== Eu ? Eu : (0, bu.jsx)(lu.e, {
                    name: uu.faIcon
                  })
                }), (!Yu || !ju) && (0, bu.jsx)("div", {
                  children: Ou(uu.title)
                }), uu.redDot && (0, bu.jsx)(qu.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, uu.id)
            }))]
          }, null !== (ju = uu.title) && void 0 !== ju ? ju : Eu)
        })), ju && (0, bu.jsxs)("div", {
          ...(0, fu.ib)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: ju.onClick,
          children: [(0, bu.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, bu.jsx)(lu.e, {
              name: ju.faIcon
            })
          }), (0, bu.jsx)("div", {
            children: Ou(ju.title)
          }), (0, bu.jsx)(lu.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Nu = ju(3179),
      Ou = ju(1178),
      Yu = ju(2543),
      hu = ju(3285),
      Du = ju(91),
      gu = ju(1986),
      Mu = ju(2362),
      eu = ju(2365),
      Gu = ju(1723),
      pu = ju(1393),
      wu = ju(5155),
      Ju = ju(22),
      du = ju(34444);

    function au(uu) {
      let {
        setApplySettingsCallback: Eu
      } = uu;
      const {
        clientEscMenuOptions: ju
      } = (0, Ju.l)(["clientEscMenuOptions"]), [Uu, Zu] = (0, su.useState)(!1), [Xu, lu] = (0, su.useState)(!1), [qu, Cu] = (0, su.useState)(6400), [cu, Nu] = (0, su.useState)(3600), [Ou, Yu] = (0, su.useState)(!1), [hu, Du] = (0, su.useState)(!1);

      function gu(uu) {
        const Eu = "screenshot" === uu ? lu : Zu;
        Eu(!0);
        const ju = Ou ? "normals" : hu ? "depth" : null;
        du.devTools.downloadScene(uu, {
          width: qu,
          height: cu,
          colouring: ju
        }).catch((uu => {
          console.error("Couldn't download the scene", uu)
        })).finally((() => {
          Eu(!1)
        }))
      }
      return (0, bu.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, bu.jsx)(wu.b, {
          label: "Disable Ambient Occlusion",
          checked: ju.disableAmbientOcclusion,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              disableAmbientOcclusion: uu
            }), Eu((() => wu.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), du.devTools.supports("ambientLight") && (0, bu.jsx)(wu.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: ju.ambientLightIntensity,
          onChange: uu => {
            du.devTools.setAmbientLightIntensity(uu).then((() => {
              Ju.d.setClientEscMenuOptions({
                ambientLightIntensity: uu
              })
            })).catch((uu => {
              console.error("Couldn't set the ambient light", uu)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), du.devTools.supports("weaponRaycasts") && (0, bu.jsx)(wu.b, {
          label: "Show Weapon Raycasts",
          checked: ju.showWeaponRaycasts,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              showWeaponRaycasts: uu
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), du.devTools.supports("sceneDownload") && (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, bu.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, bu.jsx)(wu.b, {
              label: "Apply normal-based coloring",
              checked: Ou,
              onClick: uu => {
                Yu(uu), uu && Du(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, bu.jsx)(wu.b, {
              label: "Apply depth-based coloring",
              checked: hu,
              onClick: uu => {
                Du(uu), uu && Yu(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, bu.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, bu.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, bu.jsx)(Gu.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (uu, Eu) => {
                  const ju = parseInt(uu) || 6400;
                  Cu(ju)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: qu.toString()
              }), (0, bu.jsx)("span", {
                children: "X"
              }), (0, bu.jsx)(Gu.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (uu, Eu) => {
                  const ju = parseInt(uu) || 3600;
                  Nu(ju)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: cu.toString()
              })]
            }), (0, bu.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, bu.jsxs)(fu.f, {
                onClick: () => {
                  gu("screenshot")
                },
                disabled: Xu,
                children: [Xu && (0, bu.jsx)(pu.b, {}), "Download Screenshot"]
              }), (0, bu.jsxs)(fu.f, {
                onClick: () => {
                  gu("glb")
                },
                disabled: Uu,
                children: [Uu && (0, bu.jsx)(pu.b, {}), "Download GLB"]
              })]
            })]
          }), (0, bu.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Pu = ju(131),
      ou = ju(1183),
      ku = ju(34452),
      mu = ju(3186),
      vu = ju(1570),
      Ku = ju(1320),
      Vu = ju(1293),
      ru = ju(3253),
      Qu = ju(2098),
      iu = ju(1559),
      Wu = ju(349),
      Su = ju(2374),
      Iu = ju(2380),
      Fu = ju(3204),
      Bu = ju(2820),
      Lu = ju(1693),
      tu = ju(3221),
      xu = ju(3258),
      Tu = ju(207);
    var Hu = ju(1843),
      Au = ju(3201);
    async function nu() {
      try {
        return function(uu) {
          const Eu = new Map;
          for (const {
              store: ju,
              status: su,
              autoRenewStatus: Uu,
              managementUrl: Zu
            }
            of Object.values(uu.subscriptions)) !(0, Fu.j)(ju) || (0, Fu.n)(su) || "willNotRenew" === Uu || Eu.has(ju) || Eu.set(ju, null !== Zu && void 0 !== Zu ? Zu : Fu.q[ju]);
          return Array.from(Eu, (uu => {
            let [Eu, ju] = uu;
            return {
              store: Eu,
              managementUrl: ju
            }
          }))
        }(await (0, Hu.i)((0, Au.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (uu) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", uu), null
      }
    }

    function yu(uu) {
      const {
        t: Eu,
        selectedLanguage: ju
      } = (0, Xu.A)(), {
        userContext: Uu
      } = (0, Ou.c)(), {
        superRankInfo: Zu
      } = Uu, lu = (0, Iu.usePurchasesAllowed)(), qu = uu && ((0, Wu.Ec)(Zu) || Uu.ranksMayChange) && lu, {
        accountId: fu,
        data: Cu
      } = (0, Bu.e)(tu.b, qu);
      if ((0, su.useEffect)((() => {
          if (qu) return tu.b.watchAccount(), Lu.b.addRefetchListener("billing", (uu => {
            "reconnected" === uu ? tu.b.refreshAfterReconnect() : tu.b.refresh()
          }))
        }), [qu]), !qu || !(0, Wu.Ec)(Zu) || null === Cu || fu !== Uu.whamm) return null;
      const bu = function(uu, Eu, ju) {
        const su = xu.i[(0, xu.e)(xu.i, Eu)],
          Uu = void 0 === su ? void 0 : (0, Tu.c)(uu.entitlements, su.entitlementId);
        return void 0 === Uu || null === Uu.expiresAt || (0, Fu.g)(Uu) <= ju ? null : Uu.willRenew && null === Uu.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Uu.expiresAt, ju)
        } : {
          renews: !1,
          at: (0, Fu.g)(Uu)
        }
      }(Cu, Zu.tier, Date.now());
      if (null === bu) return null;
      const cu = bu.renews ? "store:renewsOn" : "store:endsOn",
        Nu = new Date(bu.at).toLocaleDateString((0, Xu.n)(ju.code, cu), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        Yu = (0, Iu.getBillingStore)(),
        hu = null !== Yu && (0, Fu.j)(Yu) ? function(uu, Eu) {
          var ju;
          const su = Object.values(uu.subscriptions).find((uu => uu.store === Eu && !(0, Fu.n)(uu.status)));
          return void 0 === su ? null : null !== (ju = su.managementUrl) && void 0 !== ju ? ju : Fu.q[Eu]
        }(Cu, Yu) : null;
      return {
        text: Eu(cu, {
          date: Nu
        }),
        manageUrl: hu
      }
    }
    var zu = ju(1419),
      Ru = ju(1268),
      uE = ju(5052),
      EE = ju(1533),
      jE = ju(3854),
      sE = ju(2351);

    function UE(uu) {
      let {
        showing: Eu
      } = uu;
      const {
        t: ju
      } = (0, Xu.A)(), {
        data: su,
        failed: Uu
      } = (0, Bu.e)(jE.d, Eu);
      return 0 === (null === su || void 0 === su ? void 0 : su.length) || null === su && !Uu ? null : (0, bu.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, bu.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ju("paymentHistory:title")
        }), null === su && Uu && (0, bu.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: ju("paymentHistory:loadFailed")
        }), null !== su && (0, bu.jsx)("ul", {
          className: "PaymentHistoryList",
          children: su.map((uu => (0, bu.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, bu.jsx)(sE.b, {
              entry: uu
            }), (0, bu.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, bu.jsx)("div", {
                children: (0, sE.i)(ju, uu)
              }), (0, bu.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(uu.at).toLocaleDateString(), "number" === typeof uu.orderId && ` \xb7 ${ju("paymentHistory:order",{orderId:uu.orderId})}`]
              })]
            })]
          }, (0, jE.c)(uu))))
        })]
      })
    }
    var ZE = ju(3209),
      XE = ju(2386),
      lE = ju(2209);

    function qE() {
      (0, lE.d)({
        titleKey: "payments:logInToRestore"
      })
    }

    function fE(uu) {
      let {
        status: Eu
      } = uu;
      switch (Eu) {
        case "restored":
          return (0, tu.f)(), {
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

    function CE() {
      const uu = (0, Au.usePageBillingClient)(),
        {
          userContext: Eu
        } = (0, Ou.c)(),
        [ju, Uu] = (0, su.useState)(!1),
        [Zu, Xu] = (0, su.useState)(null);
      return {
        restoring: ju,
        notice: Zu,
        restore: () => {
          Eu.isLoggedIn() ? (Uu(!0), Xu(null), uu.restorePurchases().then(fE, (uu => uu instanceof ZE.d && "loginRequired" === uu.code ? (qE(), null) : function(uu) {
            return uu instanceof ZE.d && "storeBusy" === uu.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", uu), (0, tu.f)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(uu))).then(Xu).finally((() => {
            Uu(!1)
          }))) : qE()
        }
      }
    }

    function bE(uu) {
      let {
        restoring: Eu,
        notice: ju,
        restore: Uu
      } = uu;
      const {
        t: lu
      } = (0, Xu.A)(), qu = (0, Iu.usePurchasesAllowed)(), Cu = (0, Iu.getBillingStore)(), cu = (0, su.useRef)(null);
      return (0, su.useEffect)((() => {
        var uu;
        null === (uu = cu.current) || void 0 === uu || uu.scrollIntoView({
          block: "nearest"
        })
      }), [ju]), qu && (0, XE.b)(Cu) ? (0, bu.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, bu.jsx)(fu.i, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: Eu,
          onClick: Uu,
          children: lu("payments:restorePurchases")
        }), null !== ju && (0, bu.jsx)("div", {
          ref: cu,
          className: Zu()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: ju.failed
          }),
          children: lu(ju.key)
        })]
      }) : null
    }
    var cE = ju(1947),
      NE = ju(1301),
      OE = ju(1405),
      YE = ju(1255),
      hE = ju(1362),
      DE = ju(337),
      gE = ju(2628);
    const ME = {
      appStore: {
        name: "App Store",
        ...DE.Ub.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...DE.Ub.googlePlay
      },
      discord: {
        name: "Discord",
        ...DE.Ub.discord
      }
    };

    function eE(uu) {
      let {
        warning: Eu,
        subscriptions: ju
      } = uu;
      const {
        t: su
      } = (0, Xu.A)();
      return null !== ju && 0 === ju.length ? (0, bu.jsx)(bu.Fragment, {
        children: su(Eu)
      }) : (0, bu.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [su(Eu), null === ju && (0, bu.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: su("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== ju && (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: su("auth:deleteAccountStoreSubscriptions")
          }), (0, bu.jsx)(gE.e, {
            className: "DeleteAccountSubtitleLinks",
            links: ju.map((uu => {
              let {
                store: Eu,
                managementUrl: ju
              } = uu;
              return {
                ...ME[Eu],
                url: ju
              }
            }))
          })]
        })]
      })
    }

    function GE(uu) {
      let {
        showing: Eu
      } = uu;
      const {
        userContext: ju,
        isUserContextUpdating: Uu
      } = (0, Ou.c)(), {
        t: Zu
      } = (0, Xu.A)(), [lu, qu] = (0, su.useState)(!1), [Cu, cu] = (0, su.useState)(null), Nu = (0, su.useRef)(Eu);
      (0, su.useEffect)((() => (Nu.current = Eu, () => {
        Nu.current = !1
      })), [Eu]);
      const Yu = Uu || lu;
      return (0, bu.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, bu.jsxs)(fu.R, {
          onClick: async function() {
            if (!lu) {
              qu(!0);
              try {
                const uu = await async function() {
                  const [uu, Eu] = await Promise.all([(0, cE.c)(ju.availableUserContextTypes) ? nu() : [], wE(ju)]);
                  if (!Nu.current) return NE.c.ok();
                  const su = (0, Ku.e)(ju.getPlayerName(), !Du.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await OE.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: su
                        }
                      },
                      subtitle: (0, bu.jsx)(eE, {
                        warning: pE(ju.isLoggedIn(), Eu),
                        subscriptions: uu
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: Eu ? Zu("auth:deleteAccountTypedConfirm", {
                        playerName: su
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return NE.c.ok();
                  const Uu = await (0, ou.postJsonWithMetricsCookiesAndJsonResponse)(`${YE.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: Ju.d.get("gameState")
                  }, {
                    retries: 3
                  }, ju.getMetricsCookies());
                  if (Uu.error) return NE.c.error(Uu.error);
                  (0, Pu.isDiscordClient)() && (await hE.g.discordActivity()).exit("User deleted their account");
                  return (0, ou.forgetStoredGuestAccount)(ju.whamm), (0, ou.forceGlobalSignOut)(!0), NE.c.ok()
                }(), Eu = uu.isError() ? uu.asError().message : null;
                cu(Eu)
              } catch (uu) {
                console.error("Failed to delete account:", uu), cu(Zu("auth:genericDeleteAccountError"))
              }
              qu(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Yu,
          children: [Yu && (0, bu.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, bu.jsx)(pu.b, {})
          }), Zu("auth:deleteAccount")]
        }), Cu && (0, bu.jsx)("div", {
          className: "DeleteAccountError",
          children: Cu
        })]
      })
    }

    function pE(uu, Eu) {
      return (0, Pu.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : uu ? "auth:deleteAccountLossWarning" : Eu ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function wE(uu) {
      try {
        const {
          accountCreatedAt: Eu
        } = await (0, Hu.i)(iu.b.getPlayerProfile(uu, {
          lowerCaseName: uu.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== Eu && Date.now() - Eu >= 7 * Wu.h
      } catch (Eu) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", Eu), !0
      }
    }
    var JE = ju(3787),
      dE = ju(3802),
      aE = ju(3799);

    function PE(uu) {
      let {
        showing: Eu
      } = uu;
      const {
        t: ju
      } = (0, Xu.A)(), {
        data: su,
        failed: Uu
      } = (0, Bu.e)(JE.d, Eu), Zu = null === su ? null : (0, JE.h)(su);
      return (0, bu.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, bu.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ju("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Zu && !Uu && (0, bu.jsx)(pu.b, {}), null === Zu && Uu && (0, bu.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [ju("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, bu.jsx)(fu.f, {
            className: "SmallTextLight",
            onClick: () => {
              JE.d.refresh()
            },
            children: ju("general:tryAgain")
          })]
        }), 0 === (null === Zu || void 0 === Zu ? void 0 : Zu.length) && (0, bu.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: ju("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Zu && Zu.length > 0 && (0, bu.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Zu.map((uu => {
            let {
              name: Eu,
              exclusion: su
            } = uu;
            const Uu = aE.e[su];
            return (0, bu.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, bu.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Eu
              }), (0, bu.jsx)(fu.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, dE.f)(Uu, Eu, {
                    chatMessage: null
                  })
                },
                children: ju(aE.g[Uu].text)
              })]
            }, Eu)
          }))
        })]
      })
    }
    const oE = (0, su.memo)((function(uu) {
      var Eu, ju;
      let {
        showing: Uu,
        inGame: qu
      } = uu;
      const {
        t: Cu,
        selectedLanguage: cu
      } = (0, Xu.A)(), {
        hideSocialLocationFrom: Yu
      } = (0, Ju.l)(["hideSocialLocationFrom"]), hu = (0, Iu.usePurchasesAllowed)(), gu = CE(), Mu = (0, Nu.b)(), {
        userContext: eu,
        isUserContextUpdating: du
      } = (0, Ou.c)(), [au, Fu] = (0, su.useState)(null !== (Eu = eu.getPlayerName()) && void 0 !== Eu ? Eu : ""), [Bu, Lu] = (0, su.useState)(null), {
        purchasing: tu,
        outcome: xu,
        purchase: Tu
      } = (0, mu.b)("/super-rank-welcome"), Hu = (0, Wu.hc)((0, Xu.n)(cu.code, "general:timeLeft"), eu.superRankInfo), Au = null === (ju = yu(Uu)) || void 0 === ju ? void 0 : ju.text, nu = Hu ? Cu("general:timeLeft", {
        time: Hu
      }) : Au, [jE, sE] = (0, su.useState)(!1), [ZE, XE] = (0, su.useState)(!1), lE = (0, su.useRef)(null), qE = (0, su.useRef)(null), fE = (0, Qu.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), cE = null === fE, NE = null !== fE && void 0 !== fE ? fE : [], OE = eu !== ou.NULL_USER_CONTEXT && !eu.isLoggedIn(), YE = OE && 0 !== (null === fE || void 0 === fE ? void 0 : fE.length), [hE, DE] = (0, su.useState)([]), [gE, ME] = (0, su.useState)(!1), eE = eu.playerHasRank("youtuber"), pE = (0, su.useCallback)((() => iu.b.getPlayerProfile(eu, {
        lowerCaseName: eu.getPlayerName().toLowerCase()
      }).then((uu => {
        DE(uu.socialLinks)
      })).catch((uu => {
        console.error("Failed to refresh social links", uu)
      }))), [eu]);

      function wE(uu) {
        uu !== au && ((0, Ku.l)(uu) ? (uu = (0, Ku.m)(uu), Lu(Cu("homePage:nameCharacters"))) : Lu(null), lE.current && (lE.current.value = uu), Fu(uu))
      }
      return (0, su.useEffect)((() => (!0 === Uu ? (clearInterval(qE.current), qE.current = setInterval(Mu, 1e3)) : clearInterval(qE.current), () => {
        clearInterval(qE.current)
      })), [Uu, Mu]), (0, su.useEffect)((() => {
        var uu;
        Fu(null !== (uu = eu.getPlayerName()) && void 0 !== uu ? uu : "")
      }), [eu]), (0, su.useEffect)((() => {
        if (!Uu || !eE || du) return;
        let uu = !1;
        return ME(!0), DE([]), iu.b.getPlayerProfile(eu, {
          lowerCaseName: eu.getPlayerName().toLowerCase()
        }).then((Eu => {
          uu || DE(Eu.socialLinks)
        })).catch((uu => {
          console.error("Failed to load social links", uu)
        })).finally((() => {
          uu || ME(!1)
        })), () => {
          uu = !0
        }
      }), [Uu, eE, du, eu]), (0, bu.jsxs)("div", {
        className: Zu()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: qu
        }),
        children: [qu && (0, bu.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Cu("settingsMenu:accountSettingsInGameWarning")
        }), (0, bu.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, bu.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Cu("homePage:discordNamePopupTitle"), (0, bu.jsxs)(vu.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Vu.i)({
                name: eu.getPlayerName()
              }),
              onClick: () => {
                Ju.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, bu.jsx)(lu.e, {
                name: "arrow-up-right-from-square"
              }), " ", Cu("profileCard:viewProfile")]
            })]
          }), (0, bu.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, bu.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Du.featureFlags.canChangeName && (0, bu.jsx)(Gu.d, {
                className: "EnterName",
                placeholderText: Cu("homePage:enterName"),
                maxLength: Ku.g,
                defaultValue: au,
                onValueChange: uu => {
                  wE(uu)
                },
                forcedText: jE || !Du.featureFlags.canChangeName ? au : null,
                blurOnEnter: !0,
                domRef: lE
              }), (0, bu.jsx)(fu.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  wE((0, Ku.f)())
                },
                children: (0, bu.jsx)(lu.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Du.featureFlags.canChangeName && (0, bu.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Ku.e)(au, !Du.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, bu.jsx)(fu.f, {
              className: "ChooseNameButton",
              disabled: jE || au === eu.getPlayerName(),
              onClick: () => {
                au.length < Ku.j ? Lu(Cu("homePage:changeNameMinLengthError", {
                  length: Ku.j
                })) : au.length > Ku.g ? Lu(Cu("homePage:changeNameMaxLengthError", {
                  length: Ku.g
                })) : (sE(!0), Lu(null), (0, ku.e)(eu, au).then((uu => {
                  sE(!1), "taken" === uu.outcome ? Lu(Cu("homePage:nameTaken")) : "refused" === uu.outcome ? Lu(uu.message) : "failed" === uu.outcome && Lu(Cu((0, ku.d)(uu.failure)))
                })))
              },
              children: Cu("general:choose")
            })]
          }), Bu && (0, bu.jsx)("div", {
            className: "ChooseAccNameError",
            children: Bu
          })]
        }), (0, bu.jsx)(wu.b, {
          label: (() => {
            if ((0, Ru.m)(Yu)) {
              const uu = (0, Xu.n)(cu.code, "general:timeLeft"),
                Eu = (0, Wu._)(uu, Date.now(), Yu + Ru.l);
              return `${Cu("settingsMenu:hideSocialLocation")} (${Cu("general:timeLeft",{time:Eu})})`
            }
            return Cu("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const uu = !(0, Ru.m)(Yu);
            (0, EE.reportAnalyticsClick)({
              id: "social.hide_location",
              value: uu ? "on" : "off"
            }), XE(!0), iu.b.setHideSocialLocation(eu, uu).then((() => {
              Ju.d.set({
                hideSocialLocationFrom: uu ? Date.now() : null
              })
            })).finally((() => {
              XE(!1)
            }))
          },
          checked: (0, Ru.m)(Yu),
          disabled: ZE
        }), eE && (0, bu.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, bu.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Cu("settingsMenu:socialLinks")
          }), gE && (0, bu.jsx)(pu.b, {}), !gE && (0, bu.jsx)(uE.e, {
            socialLinks: hE,
            editable: !0,
            userContext: eu,
            onLinksUpdated: pE
          })]
        }), (0, bu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, bu.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Cu(YE ? "auth:loginOrSwitchAccount" : "auth:login")
          }), cE && (0, bu.jsx)(pu.b, {}), !cE && 0 === NE.length && (0, bu.jsx)("div", {
            className: "NoLoginOptions",
            children: Cu("auth:noLoginOptions")
          }), !cE && NE.length > 0 && "crazygames" !== Pu.siteUsed && (0, bu.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: NE
          }), !cE && NE.length > 0 && "crazygames" === Pu.siteUsed && (0, bu.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [NE[0], NE.length > 1 && (0, bu.jsxs)(bu.Fragment, {
              children: [(0, bu.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, bu.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Cu("auth:legacyLoginOptions")
                }), (0, bu.jsx)(zu.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Cu("auth:legacyLoginOptionsInfo")
                })]
              }), (0, bu.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: NE.slice(1)
              })]
            })]
          }), Du.featureFlags.useLogin && (null !== eu.loggedInInfo || eu.isLoggedIn()) && (0, bu.jsxs)(bu.Fragment, {
            children: [(0, bu.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, bu.jsxs)(fu.R, {
              onClick: () => {
                (0, ou.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, bu.jsx)(lu.e, {
                name: "right-from-bracket"
              }), Cu("auth:signOut")]
            })]
          })]
        }), !eu.playerHasRank("super") && hu && (0, bu.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, bu.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, bu.jsx)(lu.e, {
              name: "bolt"
            }), Cu("homePage:superRank")]
          }), (0, bu.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, bu.jsxs)(fu.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Su.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, bu.jsx)(lu.e, {
                name: "bolt"
              }), Cu("homePage:getSuperRank")]
            }), (0, bu.jsxs)(fu.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Su.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, bu.jsx)(lu.e, {
                name: "bolt"
              }), Cu("homePage:giftSuperRank")]
            })]
          }), (0, bu.jsx)(bE, {
            ...gu
          })]
        }), eu.playerHasRank("super") && (0, bu.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, bu.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, bu.jsx)(lu.e, {
              name: "bolt"
            }), Cu("homePage:superRank"), nu && (0, bu.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", nu, ")"]
            })]
          }), hu && (0, bu.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Wu.Ec)(eu.superRankInfo) && (0, bu.jsxs)(fu.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: tu,
              onClick: () => {
                Tu(ru.g.id, null)
              },
              children: [(0, bu.jsx)(lu.e, {
                name: "bolt"
              }), Cu("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: ru.g.product.days,
                price: ru.g.price
              })]
            }), (0, bu.jsxs)(fu.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Su.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, bu.jsx)(lu.e, {
                name: "bolt"
              }), Cu("homePage:giftSuperRank")]
            })]
          }), xu && (0, bu.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Cu(xu.translationKey)
          }), (0, bu.jsx)(bE, {
            ...gu
          })]
        }), (0, bu.jsx)(UE, {
          showing: Uu
        }), Du.featureFlags.useSocialFeatures && (0, bu.jsx)(PE, {
          showing: Uu
        }), (0, bu.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, bu.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, bu.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Cu(kE(OE, YE))
            }), (0, Pu.isDiscordClient)() && (0, bu.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Cu("auth:discordActivityKickWarning")
            }), (0, bu.jsx)(GE, {
              showing: Uu
            })]
          }), (0, bu.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Cu(OE ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function kE(uu, Eu) {
      return uu ? Eu ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var mE = ju(34457),
      vE = ju(3309),
      KE = ju(1303),
      VE = ju(1487),
      rE = ju(2027),
      QE = ju(9100),
      iE = ju(34464);

    function WE() {
      const {
        t: uu
      } = (0, Xu.A)();
      return (0, rE.f)("localPlayerAlive") ? (0, bu.jsx)(QE.e, {
        icon: "camera-alt",
        title: uu("screenshotMode:title"),
        sub: uu("screenshotMode:entrySub"),
        onClick: iE.e
      }) : null
    }
    var SE = ju(34476);
    const IE = (0, su.memo)((function(uu) {
        let {
          inGame: Eu
        } = uu;
        const {
          t: ju,
          selectedLanguage: su
        } = (0, Xu.A)(), {
          clientEscMenuOptions: Uu,
          showDebugOverlay: Zu,
          isTouchScreen: lu
        } = (0, Ju.l)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), qu = (0, Yu.h)("hideCoordinates");
        let fu = "settingsMenu:showCoordinates",
          Cu = "settingsMenu:showChunkCoordinates";

        function cu(uu) {
          const Eu = new Intl.DisplayNames([uu], {
            type: "language"
          }).of(uu);
          return Eu.charAt(0).toUpperCase() + Eu.slice(1)
        }
        return qu && (fu = "settingsMenu:showCoordinatesHidden", Cu = "settingsMenu:showChunkCoordinatesHidden"), (0, bu.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Eu && Du.featureFlags.canUseInviteLinks && (0, bu.jsxs)("div", {
            className: "SettingBox",
            children: [(0, bu.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: ju("settingsMenu:inviteLink")
            }), (0, bu.jsx)(mE.h, {})]
          }), (0, bu.jsxs)("div", {
            className: "SettingBox",
            children: [(0, bu.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: ju("settingsMenu:language")
            }), (0, bu.jsx)(vE.c, {
              options: Object.entries(Xu.i).map((uu => {
                let [Eu, ju] = uu;
                return {
                  label: (0, bu.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, bu.jsx)("img", {
                      src: ju.flagImg,
                      alt: "flag"
                    }), (0, bu.jsxs)("span", {
                      children: [cu(Eu), " ", (0, bu.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Eu, ")"]
                      })]
                    })]
                  }),
                  value: Eu
                }
              })),
              value: su.code,
              onChange: uu => {
                KE.h.get().setCurrentLanguage(uu.value)
              }
            })]
          }), Eu && lu && (0, SE.b)() && (0, bu.jsx)(WE, {}), !(0, Du.isMobileApp)() && (0, VE.i)() && Du.featureFlags.useForceRotateForceFullscreenOverlay && (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:disableFullscreenMode"),
            checked: Uu.disableFullscreen,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                disableFullscreen: uu
              })
            }
          }), (0, bu.jsx)(wu.b, {
            label: ju(fu),
            checked: Uu.showCoordinates,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                showCoordinates: uu
              })
            },
            disabled: qu
          }), (0, bu.jsx)(wu.b, {
            label: ju(Cu),
            checked: Uu.showChunkCoordinates,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                showChunkCoordinates: uu
              })
            },
            disabled: qu
          }), (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:showFps"),
            checked: Uu.showFPS,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                showFPS: uu
              })
            }
          }), (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:disableBunnyHopping"),
            checked: Uu.disableBunnyHopping,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                disableBunnyHopping: uu
              })
            }
          }), (0, hE.s)() && (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:showChat"),
            checked: Uu.showChat,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                showChat: uu
              })
            }
          }), (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:showDebugOverlay"),
            checked: Zu,
            onClick: uu => {
              Ju.d.set({
                showDebugOverlay: uu
              })
            }
          }), Du.featureFlags.useSocialFeatures && (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:showFriendOnlineToasts"),
            checked: Uu.showFriendOnlineToasts,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                showFriendOnlineToasts: uu
              })
            }
          }), (0, bu.jsx)(wu.b, {
            label: ju("settingsMenu:showNewItemIndicator"),
            checked: Uu.showNewItemIndicator,
            onClick: uu => {
              Ju.d.setClientEscMenuOptions({
                showNewItemIndicator: uu
              })
            }
          })]
        })
      })),
      FE = (0, su.memo)((function() {
        const {
          t: uu
        } = (0, Xu.A)(), {
          soundVolume: Eu,
          musicVolume: ju
        } = (0, Ju.l)(["soundVolume", "musicVolume"]);
        return (0, bu.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, bu.jsx)(wu.h, {
            name: uu("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ju,
            onChange: uu => {
              Ju.d.set({
                musicVolume: Math.round(100 * uu) / 100
              })
            },
            format: uu => uu.toFixed(2)
          }), (0, bu.jsx)(wu.h, {
            name: uu("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Eu,
            onChange: uu => {
              Ju.d.set({
                soundVolume: Math.round(100 * uu) / 100
              })
            },
            format: uu => uu.toFixed(2)
          })]
        })
      }));
    var BE = ju(753),
      LE = ju(1499),
      tE = ju(3863),
      xE = ju(34481),
      TE = ju(3678);
    const HE = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function AE() {
      const {
        t: uu
      } = (0, Xu.A)(), Eu = (0, TE.c)(), {
        mobilePushNotificationsCanAsk: ju
      } = (0, Ju.l)(["mobilePushNotificationsCanAsk"]), [Uu, Zu] = (0, su.useState)(null), [lu, qu] = (0, su.useState)(!1), [Cu, cu] = (0, su.useState)(null), [Nu, Ou] = (0, su.useState)(!1), Yu = (0, su.useCallback)((() => {
        (0, tE.b)().then((uu => {
          Eu.current && (Zu(uu), qu(!1))
        })).catch((uu => {
          console.error("Failed to load push notification targets:", uu), Eu.current && qu(!0)
        }))
      }), [Eu]), hu = (0, su.useCallback)((() => {
        (0, xE.h)().then((uu => {
          Eu.current && cu((() => uu))
        }))
      }), [Eu]);
      (0, su.useEffect)((() => {
        Yu()
      }), [Yu]), (0, su.useEffect)((() => {
        hu()
      }), [hu, ju]), (0, LE.f)(tE.h, Yu);
      const Du = null === Uu ? [] : Object.keys(HE).filter((uu => Uu[uu] > 0));
      return (0, bu.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, bu.jsx)("div", {
          className: "SliderText",
          children: uu("notificationSettings:pushNotifications")
        }), null === Uu && lu && (0, bu.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: uu("notificationSettings:pushTargetsLoadFailed")
        }), null !== Uu && 0 === Du.length && (0, bu.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: uu("notificationSettings:pushTargetsNone")
        }), Du.length > 0 && (0, bu.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Du.map((Eu => {
            var ju;
            return (0, bu.jsx)("li", {
              children: uu(HE[Eu], {
                count: null !== (ju = null === Uu || void 0 === Uu ? void 0 : Uu[Eu]) && void 0 !== ju ? ju : 0
              })
            }, Eu)
          }))
        }), null !== Cu && (0, bu.jsx)(fu.f, {
          className: "PushNotificationSettingsButton",
          loading: Nu,
          onClick: () => {
            Ou(!0), Cu().catch((uu => {
              console.error("Failed to turn on push notifications:", uu)
            })).finally((() => {
              Eu.current && (Ou(!1), hu())
            }))
          },
          children: uu("notificationSettings:pushTurnOn")
        })]
      })
    }
    var nE = ju(2682);
    const yE = {
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
      zE = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function RE(uu) {
      let {
        setting: Eu,
        value: ju
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)(), lu = (0, TE.c)(), [qu, fu] = (0, su.useState)(null), [Cu, cu] = (0, su.useState)(!1), [Nu, Ou] = (0, su.useState)(null);
      return (0, su.useEffect)((() => {
        "remindersOn" === Eu && (0, xE.h)().then((uu => {
          lu.current && Ou((() => uu))
        }), (uu => {
          console.error("Couldn't tell whether this device can take push notifications:", uu)
        }))
      }), [Eu, lu]), (0, bu.jsx)(wu.b, {
        className: Zu()({
          DailyDropSettingFailed: Cu
        }),
        label: Uu(zE[Eu].label),
        checked: null !== qu && void 0 !== qu ? qu : ju,
        note: Cu ? Uu("dailyDrop:settingFailed") : void 0,
        onClick: uu => {
          null === qu && (fu(uu), cu(!1), uu && null !== Nu && Nu().catch((uu => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", uu)
          })), (0, nE.s)("daily_drop.setting", `${zE[Eu].reportAs}_${uu?"on":"off"}`), (0, nE.t)("hidden" === Eu ? {
            hidden: uu
          } : {
            remindersOn: uu
          }).catch((uu => {
            console.error(`Failed to save the Lucky Skin Block's ${Eu} setting:`, uu), lu.current && cu(!0)
          })).finally((() => {
            lu.current && fu(null)
          })))
        }
      })
    }
    const uj = (0, su.memo)((function() {
      const {
        t: uu
      } = (0, Xu.A)(), {
        clientEscMenuOptions: Eu
      } = (0, Ju.l)(["clientEscMenuOptions"]), {
        userContext: ju
      } = (0, Ou.c)(), su = ju.dailyDrop;
      return (0, bu.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Du.featureFlags.useSocialFeatures && (0, bu.jsx)(wu.f, {
          label: uu("notificationSettings:friendRequests"),
          options: BE.c.map((Eu => ({
            value: Eu,
            label: uu(yE[Eu].label)
          }))),
          value: Eu.friendRequestNotifications,
          onChange: uu => {
            Ju.d.setClientEscMenuOptions({
              friendRequestNotifications: uu
            })
          },
          circleInfoText: (0, bu.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: BE.c.map((Eu => (0, bu.jsxs)("div", {
              children: [(0, bu.jsx)("b", {
                children: uu(yE[Eu].label)
              }), ": ", uu(yE[Eu].info)]
            }, Eu)))
          })
        }), null !== su && (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsx)(RE, {
            setting: "remindersOn",
            value: su.remindersOn
          }), (0, bu.jsx)(RE, {
            setting: "hidden",
            value: su.hidden
          })]
        }), (0, bu.jsx)(AE, {})]
      })
    }));
    var Ej = ju(4691),
      jj = ju(202),
      sj = ju(326),
      Uj = ju(6854),
      Zj = ju(3651),
      Xj = ju(34483),
      lj = ju(649),
      qj = ju(24);
    var fj = ju(680),
      Cj = ju(31),
      bj = ju(4531);
    const cj = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Nj(uu) {
      return cj.has(uu) ? gu.gameBridge.lookup("rM", null) : null
    }

    function Oj(uu) {
      if (!(0, lj.H)(Ju.d.get("clientEscMenuOptions")[uu])) return Ju.d.get("clientEscMenuOptions")[uu];
      const Eu = Nj(uu);
      return null !== Eu ? Eu[cj.get(uu)] : Cj.k.getItem(uu)
    }

    function Yj(uu, Eu) {
      if ("useTouchControls" === uu) return void(0, bj.b)(Eu);
      uu in Ju.d.get("clientEscMenuOptions") && Ju.d.setClientEscMenuOptions({
        [uu]: Eu
      });
      const ju = Nj(uu);
      null !== ju && gu.gameBridge.send("setChunkAddDistance", {
        ...ju,
        [cj.get(uu)]: Eu
      }), Cj.k.setItem(uu, Eu)
    }
    var hj = ju(4602),
      Dj = ju(34486),
      gj = ju(34490),
      Mj = ju(4688),
      ej = ju(34505);

    function Gj(uu) {
      var Eu, Uu, lu, qu;
      let {
        minChunkAddDist: fu,
        getValue: Cu,
        onChange: cu,
        setApplySettingsCallback: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), {
        clientEscMenuOptions: hu
      } = (0, Ju.l)(["clientEscMenuOptions", "showDistantNametags"]), gu = (0, su.useRef)(Cu("showFog")), Mu = (0, su.useRef)(hu.antiAliasing), eu = (0, su.useRef)(hu.useWebGpu), [Gu, pu] = (0, su.useState)(null), [au, Pu] = (0, su.useState)(!1), [ou, ku] = (0, su.useState)((() => (0, Zj.d)(Du.featureFlags.settings.canUseShaderPacks))), [mu] = (0, su.useState)((() => Ju.d.isWebGpuDefaultOff())), [vu] = (0, su.useState)(sj.g), [Ku] = (0, su.useState)((() => !0 === Cj.k.getItem(DE.jc))), [Vu] = (0, su.useState)((() => Ju.d.isWebGpuOnStored()));
      (0, su.useEffect)((() => {
        let uu = !1;
        return (0, Du.hasUsableWebGpuAdapter)().then((async Eu => {
          const ju = Ku || Vu,
            su = !Eu && fj.y && await (0, ej.g)(ju);
          uu || (pu(Eu || su), Pu(su))
        })), (0, Zj.i)(Du.featureFlags.settings.canUseShaderPacks) && (0, Uj.e)().then((async Eu => {
          const su = null !== Eu && await async function(uu) {
            const [{
              isShaderPackActive: Eu
            }, {
              loadPageShaderPackCompiler: su
            }] = await Promise.all([ju.e(139).then((() => ju(6851))), Promise.all([ju.e(78), ju.e(136), ju.e(138)]).then((() => ju(6810)))]);
            return Eu(uu, await su())
          }(Eu);
          uu || ku(su)
        })), () => {
          uu = !0
        }
      }), [Ku, Vu]);
      const ru = (!(ou && !Ku) || !au) && Gu,
        Qu = function(uu, Eu, ju, su, Uu) {
          return (0, Xj.c)(ju, su) && !0 === Eu ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Eu ? "settingsMenu:newWebGpu" : Uu ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: uu && !1 !== Eu,
            disabled: !0 !== Eu
          }
        }(hu.useWebGpu, ru, ou, mu, vu),
        iu = (hu.useWebGpu || (0, Xj.c)(ou, mu)) && ou && !0 === ru,
        Wu = (0, Yu.h)("lightingOverride"),
        Su = !(0, lj.H)(Wu);
      let Iu = "settingsMenu:enableLighting";
      Su && (Iu = Wu ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Fu = uu => {
          var Eu, ju, su;
          const Uu = null !== (Eu = uu.showFog) && void 0 !== Eu ? Eu : Cu("showFog"),
            Zu = null !== (ju = uu.antiAliasing) && void 0 !== ju ? ju : hu.antiAliasing,
            Xu = null !== (su = uu.useWebGpu) && void 0 !== su ? su : hu.useWebGpu,
            lu = !fj.y && Uu !== gu.current || Zu !== Mu.current || Xu !== eu.current;
          Nu(lu ? () => wu.l : null)
        },
        Bu = (0, Yu.h)("fogChunkDistanceOverride"),
        Lu = (0, Yu.h)("fogBlockDistanceOverride"),
        tu = !(0, lj.H)(Bu) || !(0, lj.H)(Lu),
        xu = tu ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Tu, Hu] = (0, Ej.f)(fu),
        [Au, nu] = (0, Mj.i)(fu),
        yu = Ou("settingsMenu:chunkLoadDistanceDeviceLimit"),
        zu = Au < Tu,
        Ru = Math.min(null !== (Eu = Cu("chunkHorizAddDist")) && void 0 !== Eu ? Eu : fu[0], Au),
        uE = !tu && function(uu, Eu) {
          return !0 === uu.showFog && uu.fogChunkDistance > Eu
        }(hu, Ru);
      return (0, bu.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, bu.jsx)(wu.h, {
          name: Ou("settingsMenu:horizontalChunkLoadDistance"),
          min: fu[0],
          max: Tu,
          selectableMax: Au,
          cappedNote: yu,
          step: 1,
          initValue: Ru,
          onChange: uu => {
            !0 === Cu("showFog") && uu < Cu("fogChunkDistance") && cu("fogChunkDistance", uu), cu("chunkHorizAddDist", uu), qj.h.TY("updatedChunkLoadDist")
          },
          circleInfoText: Ou("settingsMenu:chunkLoadDistanceInfo")
        }), (0, bu.jsx)(wu.h, {
          name: Ou("settingsMenu:verticalChunkLoadDistance"),
          min: fu[1],
          max: Hu,
          selectableMax: nu,
          cappedNote: zu ? void 0 : yu,
          step: 1,
          initValue: Math.min(null !== (Uu = Cu("chunkVertAddDist")) && void 0 !== Uu ? Uu : fu[1], nu),
          onChange: uu => {
            cu("chunkVertAddDist", uu), qj.h.TY("updatedChunkLoadDist")
          },
          circleInfoText: Ou("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, bu.jsx)(wu.b, {
          label: Ou("settingsMenu:chunkFadeIn"),
          checked: hu.chunkFadeIn,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              chunkFadeIn: uu
            })
          },
          circleInfoText: Ou("settingsMenu:chunkFadeInInfo")
        }), du.devTools.supports("chunkBorders") && (0, bu.jsx)(wu.b, {
          label: Ou("settingsMenu:showChunkBorders"),
          checked: hu.showChunkBorders,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              showChunkBorders: uu
            })
          },
          circleInfoText: Ou("settingsMenu:showChunkBordersInfo")
        }), (0, bu.jsx)(wu.b, {
          label: Ou(Iu),
          checked: hu.enableLighting,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              enableLighting: uu
            })
          },
          disabled: Su
        }), (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, bu.jsx)(wu.b, {
            label: Ou(xu),
            checked: hu.showFog,
            onClick: uu => {
              Fu({
                showFog: uu
              }), Ju.d.setClientEscMenuOptions({
                showFog: uu
              })
            },
            disabled: tu,
            className: Zu()({
              SettingBoxWarning: uE
            })
          }), (0, bu.jsx)(wu.h, {
            name: Ou("settingsMenu:fogChunkDistance"),
            min: fu[0],
            max: jj.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (lu = hu.fogChunkDistance) && void 0 !== lu ? lu : fu[0],
            onChange: uu => {
              Ju.d.setClientEscMenuOptions({
                fogChunkDistance: uu
              }), qj.h.TY("fogChunkDistanceChanged", uu)
            },
            circleInfoText: Ou("settingsMenu:fogChunkDistanceInfo"),
            disabled: tu || !1 === Cu("showFog"),
            className: Zu()({
              SettingBoxWarning: uE
            })
          }), uE && (0, bu.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Ou("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !fj.y && (0, bu.jsx)(wu.b, {
          label: Ou(iu ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !iu && hu.disableTexAtlas,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              disableTexAtlas: uu
            })
          },
          circleInfoText: Ou("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: iu
        }), (0, bu.jsx)(wu.h, {
          name: Ou("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: hu.cameraFOV,
          onChange: uu => {
            Ju.d.setClientEscMenuOptions({
              cameraFOV: uu
            })
          }
        }), (0, bu.jsx)(wu.b, {
          label: Ou("settingsMenu:disableViewBobbing"),
          checked: hu.disableBobbing,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              disableBobbing: uu
            })
          },
          circleInfoText: Ou("settingsMenu:disableViewBobbingInfo")
        }), (0, bu.jsx)(wu.b, {
          label: Ou("settingsMenu:antiAliasing"),
          checked: hu.antiAliasing,
          onClick: uu => {
            Fu({
              antiAliasing: uu
            }), (0, hj.f)("antiAliasing"), Ju.d.setClientEscMenuOptions({
              antiAliasing: uu
            })
          },
          circleInfoText: Ou("settingsMenu:antiAliasingInfo")
        }), (0, bu.jsx)(wu.h, {
          name: Ou("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (qu = hu.pixelScale) && void 0 !== qu ? qu : 1,
          onChange: uu => {
            (uu !== Ju.d.get("clientEscMenuOptions").pixelScale || (0, gj.p)()) && (0, hj.f)("pixelScale"), Ju.d.setClientEscMenuOptions({
              pixelScale: uu
            })
          },
          circleInfoText: Ou("settingsMenu:pixelScaleInfo"),
          format: uu => `${uu}x`
        }), (0, bu.jsx)(wu.b, {
          label: Ou("settingsMenu:pixelSmoothing"),
          checked: hu.pixelSmoothing,
          onClick: uu => {
            Ju.d.setClientEscMenuOptions({
              pixelSmoothing: uu
            })
          },
          circleInfoText: Ou("settingsMenu:pixelSmoothingInfo")
        }), fj.y && (0, bu.jsx)(wu.b, {
          label: Ou("settingsMenu:distantNametags"),
          checked: (0, Dj.d)(),
          onClick: uu => {
            Ju.d.set({
              showDistantNametags: uu
            })
          },
          circleInfoText: Ou("settingsMenu:distantNametagsInfo")
        }), (0, bu.jsx)(wu.b, {
          label: Ou(Qu.translationKey),
          checked: Qu.checked,
          onClick: uu => {
            Fu({
              useWebGpu: uu
            }), Ju.d.setClientEscMenuOptions({
              useWebGpu: uu
            })
          },
          circleInfoText: Ou("settingsMenu:newWebGpuInfo"),
          disabled: Qu.disabled
        })]
      })
    }
    var pj = ju(4600),
      wj = ju(9067),
      Jj = ju(34512),
      dj = ju(9082),
      aj = ju(34521);
    const Pj = {
        color: 16777215,
        name: "white"
      },
      oj = {
        color: 0,
        name: "black"
      },
      kj = [Pj, {
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
      }, oj],
      mj = [oj, Pj];

    function vj(uu) {
      return `${uu} px`
    }

    function Kj(uu) {
      return `${uu}%`
    }

    function Vj(uu) {
      let {
        label: Eu,
        value: ju,
        swatches: su,
        onChange: Uu
      } = uu;
      const {
        t: lu
      } = (0, Xu.A)(), qu = !su.some((uu => uu.color === ju));
      return (0, bu.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, bu.jsx)("div", {
          className: "SliderText",
          children: Eu
        }), (0, bu.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Eu,
          children: [su.map((uu => {
            let {
              color: Eu,
              name: su
            } = uu;
            return (0, bu.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Eu === ju,
              "aria-label": lu(`crosshairSettings:color_${su}`),
              "data-pad-focusable": !0,
              className: Zu()("CrosshairSwatch", {
                Selected: Eu === ju
              }),
              style: {
                background: (0, aj.i)(Eu)
              },
              onClick: () => {
                Uu(Eu)
              }
            }, Eu)
          })), (0, bu.jsx)("label", {
            className: Zu()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: qu
            }),
            style: qu ? {
              background: (0, aj.i)(ju)
            } : void 0,
            title: lu("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, bu.jsx)("input", {
              type: "color",
              "aria-label": lu("crosshairSettings:customColor"),
              value: (0, aj.i)(ju),
              onChange: uu => {
                const Eu = (0, aj.n)(uu.target.value);
                null !== Eu && Uu(Eu)
              }
            })
          })]
        })]
      })
    }

    function rj(uu) {
      let {
        settings: Eu,
        onChange: ju
      } = uu;
      const {
        t: su
      } = (0, Xu.A)(), Uu = (uu, su) => {
        ju((0, aj.q)(Eu, uu, su))
      }, Zu = function(uu, ju) {
        let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vj;
        const {
          min: Zu,
          max: Xu,
          step: lu
        } = aj.d[uu];
        return (0, bu.jsx)(wu.h, {
          name: ju,
          min: Zu,
          max: Xu,
          step: lu,
          initValue: Eu[uu],
          format: su,
          onChange: Eu => {
            Uu(uu, Eu)
          }
        }, uu)
      }, lu = ["lines", "dot", "circle"].filter((uu => Eu[uu])), qu = (uu, ju, su) => (0, bu.jsx)(wu.b, {
        label: ju,
        checked: Eu[uu],
        disabled: 1 === lu.length && lu[0] === uu,
        circleInfoText: su,
        onClick: Eu => {
          Uu(uu, Eu)
        }
      }, uu), fu = "shapes" === Eu.style;
      return (0, bu.jsxs)(bu.Fragment, {
        children: [(0, bu.jsx)(wu.f, {
          label: su("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: su("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: su("crosshairSettings:styleShapes")
          }],
          value: Eu.style,
          onChange: uu => {
            Uu("style", uu)
          }
        }), (0, bu.jsx)(Vj, {
          label: su("crosshairSettings:color"),
          value: Eu.color,
          swatches: kj,
          onChange: uu => {
            Uu("color", uu)
          }
        }), Zu("opacity", su("crosshairSettings:opacity"), Kj), !fu && Zu("size", su("crosshairSettings:size"), Kj), fu && (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qu("lines", su("crosshairSettings:lines")), Eu.lines && Zu("lineLength", su("crosshairSettings:lineLength")), Eu.lines && Zu("lineThickness", su("crosshairSettings:lineThickness")), Eu.lines && Zu("gap", su("crosshairSettings:gap")), Eu.lines && qu("tStyle", su("crosshairSettings:tStyle"))]
        }), fu && (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qu("dot", su("crosshairSettings:dot")), Eu.dot && Zu("dotSize", su("crosshairSettings:dotSize"))]
        }), fu && (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [qu("circle", su("crosshairSettings:circle")), Eu.circle && Zu("circleRadius", su("crosshairSettings:circleRadius")), Eu.circle && Zu("circleThickness", su("crosshairSettings:circleThickness"))]
        }), (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Zu("outline", su("crosshairSettings:outline"), (uu => uu > 0 ? vj(uu) : su("crosshairSettings:off"))), Eu.outline > 0 && (0, bu.jsx)(Vj, {
            label: su("crosshairSettings:outlineColor"),
            value: Eu.outlineColor,
            swatches: mj,
            onChange: uu => {
              Uu("outlineColor", uu)
            }
          })]
        }), qu("growOnClick", su("crosshairSettings:growOnClick")), fu && qu("forGuns", su("crosshairSettings:forGuns"), su("crosshairSettings:forGunsInfo"))]
      })
    }
    var Qj = ju(65),
      ij = ju(1330),
      Wj = ju(12943),
      Sj = ju(14127),
      Ij = ju(15536),
      Fj = ju(16030);
    const Bj = ["sky", "grass", "stone", "sand", "snow", "night"],
      Lj = "4rem";

    function tj(uu) {
      return {
        backgroundImage: `url(${uu})`,
        backgroundSize: `${Lj} ${Lj}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function xj(uu) {
      return {
        ...(() => {
          switch (uu) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return tj(Wj);
            case "stone":
              return tj(Sj);
            case "sand":
              return tj(Ij);
            case "snow":
              return tj(Fj);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Tj(uu) {
      return Object.freeze({
        ...aj.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...uu
      })
    }
    const Hj = [{
        id: "default",
        settings: aj.f
      }, {
        id: "cross",
        settings: Tj({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Tj({
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
        settings: Tj({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Tj({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Tj({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Tj({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Tj({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Aj = ["growOnClick", "forGuns"];
    var nj = ju(34525);

    function yj(uu) {
      let {
        label: Eu,
        selected: ju,
        onClick: su,
        className: Uu,
        style: Xu,
        children: lu
      } = uu;
      return (0, bu.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": ju,
        title: Eu,
        "aria-label": Eu,
        "data-pad-focusable": !0,
        className: Zu()("CrosshairBackdropSwatch", Uu, {
          Selected: ju
        }),
        style: Xu,
        onClick: su,
        children: lu
      })
    }

    function zj(uu) {
      let {
        backdrop: Eu,
        onChange: ju,
        game: su
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)();
      return (0, bu.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Uu("crosshairSettings:background"),
        children: [su && (0, bu.jsx)(yj, {
          label: Uu("crosshairSettings:bg_game"),
          selected: su.selected,
          onClick: su.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, bu.jsx)(lu.e, {
            name: "cube"
          })
        }), Bj.map((uu => (0, bu.jsx)(yj, {
          label: Uu(`crosshairSettings:bg_${uu}`),
          selected: !(null !== su && void 0 !== su && su.selected) && uu === Eu,
          style: xj(uu),
          onClick: () => {
            ju(uu)
          }
        }, uu)))]
      })
    }

    function Rj(uu) {
      let {
        settings: Eu,
        touch: ju,
        backdrop: su,
        onChange: Uu
      } = uu;
      const {
        t: lu
      } = (0, Xu.A)(), qu = function(uu) {
        var Eu;
        return null !== (Eu = Hj.find((Eu => (0, aj.o)(Eu.settings, uu, Aj)))) && void 0 !== Eu ? Eu : null
      }(Eu);
      return (0, bu.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": lu("crosshairSettings:presets"),
        children: Hj.map((uu => {
          const Xu = (null === qu || void 0 === qu ? void 0 : qu.id) === uu.id;
          return (0, bu.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Xu,
            "data-pad-focusable": !0,
            className: Zu()("CrosshairPreset", {
              Selected: Xu
            }),
            onClick: () => {
              Uu(function(uu, Eu) {
                return {
                  ...Eu.settings,
                  growOnClick: uu.growOnClick,
                  forGuns: uu.forGuns
                }
              }(Eu, uu))
            },
            children: [(0, bu.jsx)("div", {
              className: "CrosshairPresetStage",
              style: xj(su),
              children: (0, bu.jsx)(nj.c, {
                settings: uu.settings,
                touch: ju,
                inPreview: !0
              })
            }), (0, bu.jsx)("div", {
              className: "CrosshairPresetName",
              children: lu(`crosshairSettings:preset_${uu.id}`)
            })]
          }, uu.id)
        }))
      })
    }
    var us = ju(1717);

    function Es(uu, Eu) {
      const [ju, Uu] = (0, su.useState)(!1), Zu = () => {
        Uu(!1)
      }, [Xu, lu] = (0, su.useState)(!1), qu = (0, su.useRef)({
        growOnClick: uu.growOnClick,
        forGuns: uu.forGuns
      });
      (0, su.useEffect)((() => {
        const Eu = qu.current;
        qu.current = {
          growOnClick: uu.growOnClick,
          forGuns: uu.forGuns
        }, (uu.growOnClick && !Eu.growOnClick || uu.forGuns && !Eu.forGuns) && lu(!0)
      }), [uu.growOnClick, uu.forGuns]), (0, su.useEffect)((() => {
        if (!Xu) return;
        const uu = setTimeout((() => {
          lu(!1)
        }), 600);
        return () => {
          clearTimeout(uu)
        }
      }), [Xu]);
      const fu = ju || Xu;
      return {
        view: {
          pressed: fu,
          spread: fu && uu.forGuns && !uu.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: uu => {
            !uu.target.closest(Eu) && (0, us.e)(uu.currentTarget, uu.pointerId) && Uu(!0)
          },
          onPointerUp: Zu,
          onPointerCancel: Zu,
          onLostPointerCapture: Zu
        }
      }
    }

    function ss(uu) {
      let {
        settings: Eu,
        touch: ju,
        backdrop: su,
        className: Uu,
        children: Xu,
        label: lu
      } = uu;
      const qu = Es(Eu, ".CrosshairStageControls");
      return (0, bu.jsxs)("div", {
        className: Zu()("CrosshairStage", Uu),
        style: xj(su),
        ...qu.handlers,
        children: [(0, bu.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": lu,
          children: (0, bu.jsx)(nj.c, {
            settings: Eu,
            touch: ju,
            inPreview: !0,
            ...qu.view
          })
        }), Xu]
      })
    }
    const Us = "crosshairFullScreen";

    function Zs(uu) {
      let {
        settings: Eu,
        touch: ju,
        backdrop: Uu,
        onBackdrop: qu,
        inGame: Cu,
        onChange: cu,
        onClose: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), Yu = (0, su.useRef)(null);
      (0, ij.w)("popup", Yu, Nu),
      function(uu) {
        const Eu = (0, su.useRef)(uu);
        Eu.current = uu, (0, su.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Us]: !0
          }, "");
          let uu = !1;
          const ju = () => {
            uu = !0, Eu.current()
          };
          return window.addEventListener("popstate", ju), () => {
            var Eu;
            window.removeEventListener("popstate", ju), !uu && null !== (Eu = window.history.state) && void 0 !== Eu && Eu[Us] && window.history.back()
          }
        }), [])
      }(Nu);
      const hu = (0, su.useRef)(Nu);
      hu.current = Nu, (0, su.useEffect)((() => {
        function uu(uu) {
          "Escape" === uu.key && (uu.stopPropagation(), hu.current())
        }
        return window.addEventListener("keydown", uu, !0), () => {
          window.removeEventListener("keydown", uu, !0)
        }
      }), []);
      const Du = Es(Eu, ".CrosshairFullScreenPanel"),
        [gu, Mu] = (0, su.useState)(!0),
        eu = gu && Cu;
      (0, su.useEffect)((() => {
        if (eu) return Ju.d.set({
          crosshairGameView: !0
        }), () => {
          Ju.d.set({
            crosshairGameView: !1
          })
        }
      }), [eu]);
      const [Gu, pu] = (0, su.useState)(!0);
      return (0, Qj.createPortal)((0, bu.jsxs)("div", {
        ref: Yu,
        className: "CrosshairFullScreen",
        style: eu ? void 0 : xj(Uu),
        ...Du.handlers,
        children: [(0, bu.jsx)(nj.c, {
          settings: Eu,
          touch: ju,
          inEditor: !0,
          ...Du.view
        }), (0, bu.jsxs)("div", {
          className: Zu()("CrosshairFullScreenPanel", {
            Collapsed: !Gu
          }),
          children: [(0, bu.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, bu.jsx)(zj, {
              backdrop: Uu,
              onChange: uu => {
                Mu(!1), qu(uu)
              },
              game: Cu ? {
                selected: eu,
                onSelect: () => {
                  Mu(!0)
                }
              } : void 0
            }), (0, bu.jsx)(fu.$, {
              className: "CrosshairPanelToggle",
              ariaLabel: Ou(Gu ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                pu(!Gu)
              },
              children: (0, bu.jsx)(lu.e, {
                name: Gu ? "caret-up" : "pen"
              })
            }), (0, bu.jsx)(fu.f, {
              className: "CrosshairFullScreenDone",
              onClick: Nu,
              padDefaultFocus: !0,
              children: Ou("crosshairSettings:done")
            })]
          }), Gu && (0, bu.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, bu.jsx)(Rj, {
              settings: Eu,
              touch: ju,
              backdrop: Uu,
              onChange: cu
            }), (0, bu.jsx)(rj, {
              settings: Eu,
              onChange: cu
            })]
          })]
        })]
      }), document.body)
    }
    var Xs = ju(2806),
      ls = ju(34532);

    function qs(uu) {
      let {
        settings: Eu,
        onChange: ju
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)(), qu = (0, ls.j)(Eu), [Cu, cu] = (0, Xs.f)(), [Nu, Ou] = (0, su.useState)(!1), Yu = (0, su.useRef)(null), [hu, Du] = (0, Xs.f)(), [gu, Mu] = (0, su.useState)(!1);
      return (0, bu.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, bu.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, bu.jsxs)(fu.$, {
            className: Zu()("CrosshairCopy", {
              ActiveSecondaryButton: Cu
            }),
            onClick: () => {
              (0, Xs.d)(qu, {
                useShareSheet: !1,
                onOutcome: uu => {
                  Ou("failed" === uu), "copied" === uu && cu()
                }
              })
            },
            children: [(0, bu.jsx)(lu.e, {
              name: Cu ? "check" : "copy"
            }), " ", Uu(Cu ? "general:copied" : "crosshairSettings:copy")]
          }), (0, bu.jsx)(Gu.d, {
            className: "CrosshairPaste",
            domRef: Yu,
            ariaLabel: Uu("crosshairSettings:paste"),
            placeholderText: Uu("crosshairSettings:paste"),
            onValueChange: uu => {
              const Eu = (0, ls.f)(uu);
              Mu(!Eu && uu.trim().length >= ls.e), Eu && (ju(Eu), Yu.current.value = "", Du())
            }
          })]
        }), Nu && (0, bu.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: qu,
          "aria-label": Uu("crosshairSettings:copy"),
          onFocus: uu => {
            uu.currentTarget.select()
          }
        }), (0, bu.jsxs)("div", {
          "aria-live": "polite",
          children: [gu && (0, bu.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Uu("crosshairSettings:pasteInvalid")
          }), hu && !gu && (0, bu.jsx)("div", {
            className: "CrosshairShareNote",
            children: Uu("crosshairSettings:applied")
          })]
        })]
      })
    }
    var fs = ju(34535);
    let Cs = "sky";

    function bs(uu) {
      let {
        showing: Eu
      } = uu;
      const {
        t: ju
      } = (0, Xu.A)(), {
        isTouchScreen: Uu,
        gameState: Zu,
        clientEscMenuOptions: qu
      } = (0, Ju.l)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Cu = (0, fs.e)(), [cu, Nu] = (0, su.useState)(Cs), Ou = uu => {
        Cs = uu, Nu(uu)
      }, [Yu, hu] = (0, su.useState)(!1);
      return (0, su.useEffect)((() => {
        Eu || hu(!1)
      }), [Eu]), (0, bu.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, bu.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, bu.jsx)(ss, {
            className: "CrosshairPreviewStage",
            settings: Cu,
            touch: Uu,
            backdrop: cu,
            label: ju("crosshairSettings:preview"),
            children: (0, bu.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, bu.jsx)(zj, {
                backdrop: cu,
                onChange: Ou
              }), (0, bu.jsxs)(fu.$, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  hu(!0)
                },
                children: [(0, bu.jsx)(lu.e, {
                  name: "expand"
                }), " ", ju("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, bu.jsx)("div", {
          className: "SettingBox",
          children: (0, bu.jsx)(Rj, {
            settings: Cu,
            touch: Uu,
            backdrop: cu,
            onChange: fs.b
          })
        }), (0, bu.jsx)(qs, {
          settings: Cu,
          onChange: fs.b
        }), Uu && (0, bu.jsx)(dj.d, {
          note: (0, Jj.d)(Uu, qu.touchActionButtons) ? ju("crosshairSettings:touchNote") : void 0
        }), (0, bu.jsx)(rj, {
          settings: Cu,
          onChange: fs.b
        }), Yu && (0, bu.jsx)(Zs, {
          settings: Cu,
          touch: Uu,
          backdrop: cu,
          onBackdrop: Ou,
          inGame: "inGame" === Zu,
          onChange: fs.b,
          onClose: () => {
            hu(!1)
          }
        })]
      })
    }
    var cs = ju(9074),
      Ns = ju(1453),
      Os = ju(5151),
      Ys = ju(34538),
      hs = ju(4452),
      Ds = ju(2031),
      gs = ju(762);
    const Ms = (0, su.memo)((function() {
      const {
        clientEscMenuOptions: uu
      } = (0, Ju.l)(["clientEscMenuOptions"]), {
        recording: Eu,
        clipping: ju,
        hasClipBuffer: Uu
      } = (0, rE.f)("replayRecorder"), Xu = (0, rE.d)("connectedGame", (uu => uu.replay)), lu = (0, hs.k)(), qu = !1 === (0, Yu.h)("canRecordReplays");
      (0, su.useEffect)((() => {
        gu.gameBridge.send("setRecorderPrefs", {
          clipping: uu.enableClipping,
          clipSeconds: uu.clipDurationSeconds
        })
      }), [uu.enableClipping, uu.clipDurationSeconds]);
      const Cu = lu || Xu,
        cu = !Cu && !qu,
        Nu = Eu || cu,
        Ou = cu,
        hu = Ou && ju && !Eu;

      function Du() {
        Nu && gu.gameBridge.send("toggleRecording", null)
      }
      return (0, bu.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, bu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, bu.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Eu ? (0, bu.jsxs)(bu.Fragment, {
              children: [(0, bu.jsxs)(fu.R, {
                className: "ReplayViewerCategoryButton",
                onClick: Du,
                disabled: !Nu,
                children: [(0, bu.jsx)("span", {
                  children: "Stop Recording"
                }), (0, bu.jsx)(Ds.b, {
                  noaAction: "recordGame"
                })]
              }), (0, bu.jsx)(Ys.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, bu.jsxs)(fu.f, {
              className: "ReplayViewerCategoryButton",
              onClick: Du,
              disabled: !Nu,
              children: [(0, bu.jsx)("span", {
                children: "Start Recording"
              }), (0, bu.jsx)(Ds.b, {
                noaAction: "recordGame"
              })]
            })
          }), qu && (0, bu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Cu && !Eu && (0, bu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, bu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, bu.jsx)(wu.b, {
            label: "Enable clipping",
            checked: uu.enableClipping,
            disabled: !Ou,
            onClick: function(uu) {
              Ou && Ju.d.setClientEscMenuOptions({
                enableClipping: uu
              })
            },
            className: Zu()({
              SettingBoxDisabled: !Ou
            })
          }), (0, bu.jsx)(wu.h, {
            name: "Clip duration (seconds)",
            min: gs.k,
            max: gs.i,
            step: gs.e,
            initValue: uu.clipDurationSeconds,
            onChange: function(uu) {
              Ju.d.setClientEscMenuOptions({
                clipDurationSeconds: uu
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Ou || !uu.enableClipping
          })]
        }), (0, bu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, bu.jsxs)(fu.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              hu && gu.gameBridge.send("saveClip", null)
            },
            disabled: !hu,
            children: [(0, bu.jsx)("span", {
              children: "Record clip"
            }), (0, bu.jsx)(Ds.b, {
              noaAction: "recordClip"
            })]
          }), uu.enableClipping && !Uu && Ou && !Eu && (0, bu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Eu && (0, bu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, bu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, bu.jsxs)(fu.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, hs.h)(!0), Ju.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: lu,
            children: [(0, bu.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, bu.jsx)(Ds.b, {
              noaAction: "replayViewerOpen"
            })]
          }), lu && (0, bu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, bu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, bu.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, bu.jsx)("iframe", {
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
    var es = ju(1955);
    const Gs = {
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
        icon: () => (0, bu.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, bu.jsx)("path", {
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
      AN: {
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

    function ps() {
      return Promise.all([ju.e(78), ju.e(136), ju.e(135), ju.e(131)]).then((() => ju(41292))).then((uu => ({
        default: uu.ShaderPackCategory
      })), (uu => (console.error("Failed to load the shader pack settings", uu), {
        default: ws
      })))
    }

    function ws() {
      const {
        t: uu
      } = (0, Xu.A)();
      return (0, bu.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: uu("shaderPack:tabLoadFailed")
      })
    }
    var ds = ju(1443);
    const as = (0, su.lazy)((() => ju.e(278).then((() => ju(41283))).then((uu => ({
        default: uu.BloxdInformation
      }))))),
      Ps = (0, su.lazy)(ps);

    function os(uu) {
      return uu ? "general" : "account"
    }
    const ks = new Map,
      ms = (0, su.memo)((function(uu) {
        let {
          show: Eu,
          setBeforeResumeCallback: ju
        } = uu;
        (0, hu.d)();
        const {
          gameState: Uu,
          openSettingsCategory: Zu
        } = (0, Ju.l)(["gameState", "openSettingsCategory"]), {
          userContext: qu
        } = (0, Ou.c)(), {
          t: Cu
        } = (0, Xu.A)(), Gu = (0, Nu.b)(), pu = (0, Yu.h)("minChunkAddDist"), wu = "inGame" === Uu, [du, ou] = (0, su.useState)(os(wu)), [ku, mu] = (0, su.useState)(null), [vu, Ku] = (0, su.useState)([]), Vu = (0, su.useRef)(function() {
          const uu = new Date,
            Eu = 6 * (uu.getMonth() + uu.getDate()) % DE.x.length;
          return [...DE.x, ...DE.x].slice(Eu, Eu + 6)
        }()), ru = (0, su.useRef)(null), Qu = (0, LE.g)(Ns.f, (0, Ns.b)()), iu = Object.keys(Gs).filter((uu => {
          switch (uu) {
            case "replayViewer":
              return wu;
            case "developerTools":
              return qu.playerHasRank("developer") || !1;
            case "texturePack":
              return Du.featureFlags.settings.canChangeTexturePack;
            case "AN":
              return Du.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Du.featureFlags.useSocialFeatures || null !== qu.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== Pu.siteUsed;
            case "controller":
              return Du.featureFlags.useControllerSupport && (Qu || "controller" === du);
            default:
              return !0
          }
        }));
        (0, LE.f)("toggleFullCoordinateOverlay", (() => {
          const uu = Oj("showCoordinates") && Oj("showChunkCoordinates") && Oj("showFPS");
          Yj("showCoordinates", !uu), Yj("showChunkCoordinates", !uu), Yj("showFPS", !uu), Gu()
        })), (0, LE.f)("updatedChunkLoadDist", (() => {
          Gu()
        })), (0, su.useEffect)((() => {
          if (mu(null), null === Ju.d.get("openSettingsCategory")) {
            const uu = (0, ds.g)() ? ks.get(wu) : void 0;
            ou(uu && iu.includes(uu) ? uu : os(wu))
          }
        }), [Eu]), (0, su.useEffect)((() => {
          null !== Zu && (ou(Zu), ks.set(wu, Zu), Ju.d.set({
            openSettingsCategory: null
          }))
        }), [Zu, wu]), (0, su.useLayoutEffect)((() => {
          ru.current && (ru.current.scrollTop = 0)
        }), [du, Eu]), (0, su.useEffect)((() => {
          "updateLog" === du && (0, eu.d)().then(Ku)
        }), [du]), (0, su.useEffect)((() => {
          if ((0, lj.H)(pu)) return;
          const [uu, Eu] = (0, pj.h)(), [ju, su] = (0, Ej.f)(pu), Uu = (0, es.c)(pu[0], uu, ju), Zu = (0, es.c)(pu[1], Eu, su);
          gu.gameBridge.send("setChunkAddDistance", {
            horizontal: Uu,
            vertical: Zu
          })
        }), [pu]);
        const Wu = (0, su.useCallback)((async () => {
          ku && (await ku(), mu(null))
        }), [ku]);

        function Su() {
          Ju.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, su.useEffect)((() => {
          ju((() => Wu))
        }), [Wu, ju]), (0, bu.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Eu ? {} : {
            display: "none"
          },
          children: [(0, bu.jsx)("div", {
            className: "MenuSideBar",
            children: (0, bu.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, bu.jsx)(cu, {
                items: iu.map((uu => {
                  const Eu = Gs[uu].icon;
                  return {
                    id: uu,
                    faIcon: "string" === typeof Eu ? Eu : void 0,
                    iconElement: "string" === typeof Eu ? void 0 : (0, bu.jsx)(Eu, {}),
                    title: Cu(Gs[uu].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: du,
                onClick: uu => {
                  !async function(uu) {
                    await Wu(), ou(uu), ks.set(wu, uu)
                  }(uu)
                }
              })
            })
          }), (0, bu.jsxs)("div", {
            ref: ru,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === du && (0, bu.jsx)(oE, {
              showing: Eu,
              inGame: wu
            }), "general" === du && (0, bu.jsx)(IE, {
              inGame: wu
            }), "audio" === du && (0, bu.jsx)(FE, {}), "notifications" === du && (0, bu.jsx)(uj, {}), "graphics" === du && (0, bu.jsx)(Gj, {
              minChunkAddDist: null !== pu && void 0 !== pu ? pu : [2, 2],
              getValue: Oj,
              onChange: Yj,
              setApplySettingsCallback: mu
            }), "controls" === du && (0, bu.jsx)(wj.e, {}), "crosshair" === du && (0, bu.jsx)(bs, {
              showing: Eu
            }), "controller" === du && Du.featureFlags.useControllerSupport && (0, bu.jsx)(cs.b, {}), Du.featureFlags.settings.canChangeTexturePack && "texturePack" === du && (0, bu.jsx)(Os.c, {
              setApplySettingsCallback: mu
            }), Du.featureFlags.settings.canUseShaderPacks && "AN" === du && (0, bu.jsx)(su.Suspense, {
              fallback: null,
              children: (0, bu.jsx)(Ps, {
                setApplySettingsCallback: mu
              })
            }), "updateLog" === du && (0, bu.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, bu.jsx)("div", {
                className: "UpdateLogsContainer",
                children: vu.map(((uu, Eu) => (0, bu.jsx)(Mu.d, {
                  updateLog: uu,
                  index: Eu,
                  close: Su
                }, Eu)))
              })
            }), "information" === du && (0, bu.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, bu.jsx)(su.Suspense, {
                fallback: null,
                children: (0, bu.jsx)(as, {})
              })
            }), "alternativeDomains" === du && (0, bu.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, bu.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Cu("settingsMenu:unblockedDomainsDescription")
              }), (0, bu.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Vu.current.map((uu => (0, bu.jsxs)(fu.f, {
                  onClick: () => {
                    window.open(`https://${uu}`)
                  },
                  children: [(0, bu.jsx)(lu.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", uu]
                }, uu)))
              })]
            }), "replayViewer" === du && (0, bu.jsx)(Ms, {}), "developerTools" === du && (0, bu.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, bu.jsx)(au, {
                setApplySettingsCallback: mu
              })
            }), null !== ku && (0, bu.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, bu.jsx)(fu.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: Wu,
                children: Cu("general:apply")
              })
            })]
          })]
        })
      }));
    var vs = ju(2742);
    const Ks = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Vs = (0, su.lazy)((() => Promise.resolve().then((() => ju(4842))).then((uu => {
        uu.needGameClientAfterPaint();
        const Eu = uu.matchmakingLibrariesPromise.then((uu => (0, vs.d)(uu.loadCharacterCustomisationUI(), (uu => uu.CharacterCustomisationUI))));
        return Promise.all([uu.ensureGameSetup(), Eu]).then((uu => {
          let [, Eu] = uu;
          return Eu
        }))
      })))),
      rs = "openCustomisationTab";

    function Qs(uu) {
      var Eu, ju, Uu;
      let {
        show: Zu
      } = uu;
      const {
        userContext: Xu
      } = (0, Ou.c)(), lu = (0, Iu.usePurchasesAllowed)(), qu = (0, su.useRef)(null);
      var fu, Cu;
      Xu !== ou.NULL_USER_CONTEXT && (null === (Eu = qu.current) || void 0 === Eu ? void 0 : Eu.whamm) !== Xu.whamm && (qu.current = {
        whamm: Xu.whamm,
        mountKey: (null !== (fu = null === (Cu = qu.current) || void 0 === Cu ? void 0 : Cu.mountKey) && void 0 !== fu ? fu : -1) + 1
      });
      const [Nu, Yu] = (0, su.useState)("characters");
      if ((0, LE.f)(rs, Yu), !Zu) return null;
      const hu = Ks.filter((uu => "cape" !== uu && "nameColour" !== uu || Xu.getPlayerRanks().includes("super") || lu)).map((uu => ({
        id: uu,
        faIcon: DE.F[uu],
        title: DE.I[uu],
        redDot: !1
      })));
      return (0, bu.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, bu.jsx)("div", {
          className: "MenuSideBar",
          children: (0, bu.jsx)(cu, {
            items: hu,
            selectedItemId: Nu,
            onClick: uu => {
              Yu(uu)
            }
          })
        }), (0, bu.jsx)("div", {
          className: "MenuBody",
          children: (0, bu.jsx)(su.Suspense, {
            fallback: (0, bu.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, bu.jsx)(pu.b, {})
            }),
            children: (0, bu.jsx)(Vs, {
              selectedTab: Nu
            }, null !== (ju = null === (Uu = qu.current) || void 0 === Uu ? void 0 : Uu.mountKey) && void 0 !== ju ? ju : 0)
          })
        })]
      })
    }
    var is = ju(1520),
      Ws = ju(1524),
      Ss = ju(34547),
      Is = ju(4719),
      Fs = ju(3613),
      Bs = ju(3660),
      Ls = ju(34571),
      ts = ju(8995),
      xs = ju(34555),
      Ts = ju(34559),
      Hs = ju(1971),
      As = ju(1964),
      ns = ju(5077),
      ys = ju(1314),
      zs = ju(1278),
      Rs = ju(1710),
      uU = ju(9047),
      EU = ju(2552),
      jU = ju(2560);

    function sU(uu) {
      return uu ? Object.keys(uu).sort(((Eu, ju) => {
        var su, Uu, Zu, Xu;
        const lu = (null !== (su = null === (Uu = uu[ju]) || void 0 === Uu ? void 0 : Uu.sortPriority) && void 0 !== su ? su : 0) - (null !== (Zu = null === (Xu = uu[Eu]) || void 0 === Xu ? void 0 : Xu.sortPriority) && void 0 !== Zu ? Zu : 0);
        return 0 !== lu ? lu : Eu.localeCompare(ju)
      })) : []
    }
    const UU = [{
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

    function ZU(uu) {
      for (const {
          threshold: Eu,
          suffix: ju
        }
        of UU)
        if (uu >= Eu) {
          const su = uu / Eu;
          return su >= 100 ? `${Math.floor(su)}${ju}` : su >= 10 ? `${su.toFixed(1).replace(/\.0$/,"")}${ju}` : `${su.toFixed(2).replace(/\.?0+$/,"")}${ju}`
        } return String(uu)
    }
    var XU = ju(5179);
    const lU = {
        normal: "0.8em",
        big: "1em"
      },
      qU = (0, su.memo)((function(uu) {
        let {
          item: Eu,
          amount: ju = 0,
          size: su = "normal",
          tier: Uu = null
        } = uu;
        return (0, bu.jsx)("div", {
          className: Zu()("SmpSlot", `SmpSlot-${su}`),
          children: Eu && (0, bu.jsx)(Hs.d, {
            itemName: Eu,
            amount: ju > 1 ? ju : 0,
            amountFontSize: lU[su],
            enchantmentTier: Uu
          })
        })
      }));

    function fU(uu) {
      let {
        amount: Eu,
        exact: ju = !1,
        className: su
      } = uu;
      return (0, bu.jsxs)("span", {
        className: Zu()("SmpGold", su),
        children: [(0, bu.jsx)("span", {
          className: "SmpCoin",
          children: (0, bu.jsx)(Hs.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), ju ? Eu.toLocaleString("en-US") : ZU(Eu)]
      })
    }

    function CU(uu) {
      let {
        count: Eu = 5,
        grid: ju = !1
      } = uu;
      return (0, bu.jsx)("div", {
        className: ju ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Eu
        }, ((uu, Eu) => (0, bu.jsxs)("div", {
          className: Zu()(ju ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, bu.jsx)("div", {
            className: Zu()("SmpSlot", ju ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, bu.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, bu.jsx)("b", {}), (0, bu.jsx)("small", {})]
          }), (0, bu.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Eu)))
      })
    }

    function bU(uu) {
      let {
        title: Eu,
        children: ju
      } = uu;
      return (0, bu.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, bu.jsx)("b", {
          children: Eu
        }), ju && (0, bu.jsx)("small", {
          children: ju
        })]
      })
    }

    function cU(uu) {
      let {
        entry: Eu
      } = uu;
      return (0, bu.jsx)(bU, {
        title: (0, bu.jsx)(As.d, {
          text: Eu.item.customTitle
        }),
        children: (0, bu.jsx)(As.d, {
          text: Eu.item.description
        })
      })
    }

    function NU(uu) {
      return (0, bu.jsx)(XU.c, {
        ...uu,
        className: Zu()("SmpChoice", uu.className),
        reselectable: !0
      })
    }

    function OU() {
      return (0, bu.jsx)("span", {
        className: "SmpLoader",
        children: (0, bu.jsx)(pu.b, {})
      })
    }

    function YU(uu) {
      let {
        value: Eu,
        onChange: ju,
        min: Uu = 1,
        max: Zu,
        step: Xu = 1,
        label: lu
      } = uu;
      const qu = (0, su.useRef)(null),
        fu = (0, su.useRef)(Eu);
      fu.current = Eu;
      const [Cu, cu] = (0, su.useState)(null), Nu = uu => Math.max(Uu, Math.min(Zu, Math.floor(uu))), Ou = uu => {
        const Eu = fu.current,
          su = "function" === typeof Xu ? Xu(Eu, uu) : Xu,
          Uu = Nu(Eu + su * uu);
        fu.current = Uu, ju(Uu)
      };
      (0, su.useEffect)((() => {
        if (null === Cu) return;
        let uu;
        const Eu = () => {
            cu(null)
          },
          ju = setTimeout((() => {
            uu = setInterval((() => {
              Ou(Cu);
              const uu = fu.current;
              (Cu > 0 ? uu >= Zu : uu <= Uu) && Eu()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Eu), window.addEventListener("pointercancel", Eu), window.addEventListener("blur", Eu), () => {
          clearTimeout(ju), clearInterval(uu), window.removeEventListener("pointerup", Eu), window.removeEventListener("pointercancel", Eu), window.removeEventListener("blur", Eu)
        }
      }), [Cu]), (0, su.useEffect)((() => {
        const uu = qu.current;
        uu && document.activeElement !== uu && uu.value !== String(Eu) && (uu.value = String(Eu))
      }), [Eu]), (0, su.useEffect)((() => {
        const uu = qu.current;
        if (!uu) return;
        const Eu = () => {
          uu.value = String(fu.current)
        };
        return uu.addEventListener("blur", Eu), () => {
          uu.removeEventListener("blur", Eu)
        }
      }), []);
      const Yu = uu => (0, bu.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${uu>0?"More":"Less"} ${lu}`,
        disabled: uu > 0 ? Eu >= Zu : Eu <= Uu,
        onPointerDown: Eu => {
          0 === Eu.button && (Ou(uu), cu(uu))
        },
        onKeyDown: Eu => {
          "Enter" !== Eu.key && " " !== Eu.key || Ou(uu)
        },
        onContextMenu: uu => {
          uu.preventDefault()
        },
        children: uu > 0 ? "+" : "\u2212"
      });
      return (0, bu.jsxs)("div", {
        className: "SmpStepper",
        children: [Yu(-1), (0, bu.jsx)(Gu.d, {
          className: "SmpStepperInput",
          domRef: qu,
          defaultValue: String(Eu),
          ariaLabel: lu,
          type: "text",
          blurOnEnter: !0,
          onValueChange: uu => {
            const Eu = uu.replace(/[^\d]/g, "");
            qu.current && Eu !== uu && (qu.current.value = Eu), "" !== Eu && ju(Nu(Number(Eu)))
          }
        }), Yu(1)]
      })
    }

    function hU(uu) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, uu))) - 1))
    }
    var DU = ju(34565),
      gU = ju(1298);
    const MU = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    gU.w, Wu.Lc.length;
    new Map;
    var eU = ju(3475);

    function GU(uu, Eu) {
      var ju;
      return Eu && (null === (ju = uu[Eu]) || void 0 === ju ? void 0 : ju.smp) || null
    }

    function pU(uu, Eu) {
      const ju = [];
      for (const Uu of sU(uu)) {
        var su;
        const Zu = uu[Uu];
        (null === (su = Zu.smp) || void 0 === su ? void 0 : su.kind) === Eu && ju.push({
          key: Uu,
          item: Zu,
          meta: Zu.smp
        })
      }
      return ju
    }

    function wU(uu, Eu) {
      var ju;
      return null !== (ju = pU(uu, Eu)[0]) && void 0 !== ju ? ju : null
    }
    const JU = "50% 0% 50% 0%",
      dU = [{
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

    function aU(uu) {
      const Eu = uu - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: ju,
          suffix: su
        }
        of dU)
        if (Eu >= ju) return `${Math.floor(Eu/ju)}${su}`;
      return "<1s"
    }

    function PU(uu) {
      const Eu = uu.map(ts.g),
        ju = [];
      return Eu.forEach(((uu, su) => {
        const Uu = function(uu) {
            const Eu = uu.match(/\d+/);
            return Eu ? Number(Eu[0]) : 0
          }(uu),
          Zu = su === Eu.length - 1;
        (Zu || 1 === Uu || 10 === Uu || 100 === Uu) && ju.push({
          label: uu,
          quantity: Uu,
          isAll: Zu
        })
      })), ju
    }
    let oU = null;

    function kU(uu, Eu) {
      const ju = Eu.trim().toLowerCase();
      if (!ju) return [];
      const su = uu => {
          if (uu === ju) return 0;
          if (uu.startsWith(ju)) return 1;
          const Eu = uu.indexOf(ju);
          return -1 === Eu ? -1 : 2 + Eu
        },
        Uu = [];
      for (const lu of uu) {
        const uu = [su(lu.lowerLabel), su(lu.lowerName)].filter((uu => -1 !== uu));
        uu.length && Uu.push({
          item: lu,
          rank: Math.min(...uu)
        })
      }
      if (Uu.length > 0) return Uu.sort(((uu, Eu) => uu.rank - Eu.rank)).map((uu => uu.item));
      const Zu = [...ju],
        Xu = uu => {
          let Eu = 0;
          for (const ju of Zu) {
            if (Eu = uu.indexOf(ju, Eu), -1 === Eu) return !1;
            Eu++
          }
          return !0
        };
      return uu.filter((uu => Xu(uu.lowerLabel) || Xu(uu.lowerName)))
    }

    function mU(uu, Eu) {
      var ju;
      return null !== (ju = null === uu || void 0 === uu ? void 0 : uu[Eu]) && void 0 !== ju ? ju : Eu
    }

    function vU(uu, Eu) {
      const ju = uu.userInput;
      return void 0 !== Eu && "dropdown" === (null === ju || void 0 === ju ? void 0 : ju.type) && ju.dropdownOptions.map(ts.g).includes(Eu) ? Eu : function(uu) {
        const Eu = uu.userInput;
        if ("dropdown" !== (null === Eu || void 0 === Eu ? void 0 : Eu.type) || 0 === Eu.dropdownOptions.length) return null;
        const ju = Eu.dropdownOptions.map(ts.g);
        return Eu.initialValue && ju.includes(Eu.initialValue) ? Eu.initialValue : ju[ju.length - 1]
      }(uu)
    }

    function KU(uu) {
      return void 0 === uu ? "" : JSON.stringify(uu)
    }
    const VU = (0, su.createContext)(null);

    function rU() {
      return (0, su.useContext)(VU)
    }
    var QU = ju(2831);
    const iU = (0, su.memo)((function(uu) {
        let {
          name: Eu,
          label: ju,
          onPick: su
        } = uu;
        return (0, bu.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: ju,
          onClick: () => {
            su(Eu)
          },
          children: [(0, bu.jsx)(qU, {
            item: Eu,
            size: "big"
          }), (0, bu.jsx)("span", {
            children: ju
          })]
        })
      })),
      WU = (0, su.memo)((function(uu) {
        let {
          items: Eu,
          query: ju,
          onPick: Uu
        } = uu;
        const {
          t: Zu
        } = (0, Xu.A)(), [lu, qu] = (0, su.useState)(new Set), fu = (0, su.useMemo)((() => function(uu) {
          const Eu = new Map;
          for (const ju of uu) {
            let uu = Eu.get(ju.category);
            uu || (uu = [], Eu.set(ju.category, uu)), uu.push(ju)
          }
          return [...MU, "other"].filter((uu => Eu.has(uu))).map((uu => ({
            category: uu,
            items: Eu.get(uu)
          })))
        }(Eu)), [Eu]), Cu = (0, su.useMemo)((() => kU(Eu, ju).slice(0, 60)), [Eu, ju]);
        return ju.trim() ? 0 === Cu.length ? (0, bu.jsx)(bU, {
          title: Zu("smpShop:noItemsFound", {
            query: ju.trim()
          }),
          children: Zu("smpShop:tryShorterName")
        }) : (0, bu.jsx)(QU.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: JU,
          observerUpdateDeps: [ju],
          children: Cu.map((uu => (0, bu.jsx)(iU, {
            name: uu.name,
            label: uu.label,
            onPick: Uu
          }, uu.name)))
        }) : (0, bu.jsx)(bu.Fragment, {
          children: fu.map((uu => {
            let {
              category: Eu,
              items: ju
            } = uu;
            const su = lu.has(Eu) || ju.length <= 48,
              Xu = su ? ju : ju.slice(0, 48);
            return (0, bu.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, bu.jsxs)("h4", {
                children: [Zu("other" === Eu ? "smpShop:otherItems" : `creativeInventory:${Eu}`), !su && (0, bu.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    qu(new Set([...lu, Eu]))
                  },
                  children: Zu("smpShop:showAll", {
                    count: ju.length
                  })
                })]
              }), (0, bu.jsx)(QU.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: JU,
                observerUpdateDeps: [su],
                children: Xu.map((uu => (0, bu.jsx)(iU, {
                  name: uu.name,
                  label: uu.label,
                  onPick: Uu
                }, uu.name)))
              })]
            }, Eu)
          }))
        })
      }));

    function SU(uu, Eu) {
      const {
        searched: ju,
        shown: Uu,
        searchFor: Zu,
        loading: Xu
      } = function(uu, Eu) {
        var ju;
        const Uu = rU(),
          [Zu, Xu] = (0, su.useState)(void 0),
          lu = (0, su.useRef)(void 0),
          qu = (0, su.useRef)(0),
          fu = (0, su.useRef)(void 0),
          Cu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.meta.item) && void 0 !== ju ? ju : null,
          bu = !!uu && Uu.isPending(uu.key);
        (0, su.useEffect)((() => {
          if (!uu || bu || !Eu || void 0 === Zu || Zu === Cu) return;
          const ju = Zu === lu.current && Uu.gaveUpAt(uu.key) > qu.current && fu.current !== Zu;
          (Zu !== lu.current || ju) && Uu.act(uu.key, null !== Zu && void 0 !== Zu ? Zu : "*", ju) && (ju && (fu.current = Zu), lu.current = Zu, qu.current = Date.now())
        }), [uu, bu, Eu, Zu, Cu, Uu]);
        const cu = (0, su.useCallback)((uu => {
            lu.current = void 0, fu.current = void 0, Xu(uu)
          }), []),
          Nu = void 0 !== Zu && Zu !== Cu && (bu || lu.current !== Zu);
        return {
          searched: Cu,
          shown: Nu ? Zu : Cu,
          searchFor: cu,
          loading: Nu || bu || null !== Cu && !Eu
        }
      }(uu, Eu), lu = (0, su.useMemo)((() => function() {
        var uu;
        let Eu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Uu = `${(0,eU.g)()}\x1f${Eu.join("\x1e")}\x1f${ju.join("\x1e")}\x1f${JSON.stringify(su)}`;
        if ((null === (uu = oU) || void 0 === uu ? void 0 : uu.key) === Uu) return oU.items;
        const Zu = new Set(ju),
          Xu = new Set,
          lu = [],
          qu = (uu, Eu) => {
            var ju;
            if (!uu || Xu.has(uu) || Zu.has(uu)) return;
            Xu.add(uu);
            const Uu = null !== (ju = su[uu]) && void 0 !== ju ? ju : uu;
            lu.push({
              name: uu,
              label: Uu,
              lowerLabel: Uu.toLowerCase(),
              lowerName: uu.toLowerCase(),
              category: Eu
            })
          };
        for (const Cu of (0, DU.creativeItemIds)()) {
          var fu;
          (0, DU.itemIsDisabled)(Cu, !0, !0, !1) || (0, DU.showOnlyInCreativeSearch)(Cu) || qu((0, eU.c)(Cu), null !== (fu = (0, DU.creativeCategoryOf)(Cu)) && void 0 !== fu ? fu : "other")
        }
        for (const Cu of Eu) qu(Cu, "other");
        return oU = {
          key: Uu,
          items: lu
        }, lu
      }(null === uu || void 0 === uu ? void 0 : uu.meta.extra, null === uu || void 0 === uu ? void 0 : uu.meta.excluded, null === uu || void 0 === uu ? void 0 : uu.meta.names)), [null === uu || void 0 === uu ? void 0 : uu.meta.extra, null === uu || void 0 === uu ? void 0 : uu.meta.excluded, null === uu || void 0 === uu ? void 0 : uu.meta.names]), [qu, fu] = (0, su.useState)(""), [Cu, bu] = (0, su.useState)(0), [cu, Nu] = (0, su.useState)("recent"), Ou = (0, su.useCallback)((uu => {
        fu(""), bu((uu => uu + 1)), Zu(uu)
      }), [Zu]), Yu = "browse" === cu || "" !== qu.trim();
      return {
        searched: ju,
        shown: Uu,
        searchFor: Zu,
        loading: Xu,
        catalogue: lu,
        names: null === uu || void 0 === uu ? void 0 : uu.meta.names,
        query: qu,
        setQuery: fu,
        searchBoxKey: Cu,
        pickItem: Ou,
        setView: Nu,
        browsing: Yu
      }
    }

    function IU(uu) {
      let {
        browser: Eu,
        children: ju
      } = uu;
      const {
        t: su
      } = (0, Xu.A)(), Uu = rU();
      return (0, bu.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, bu.jsx)("div", {
          className: "SmpSearch",
          children: (0, bu.jsx)(Gu.d, {
            className: "SmpSearchInput",
            placeholderText: su("smpShop:searchPlaceholder"),
            defaultValue: Eu.query,
            onValueChange: uu => {
              Eu.setQuery(uu), Eu.searched && uu.trim() && Eu.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const uu = kU(Eu.catalogue, Eu.query)[0];
              uu ? Eu.pickItem(uu.name) : Eu.query.trim() && Uu.notify(su("smpShop:noItemsFound", {
                query: Eu.query.trim()
              }))
            }
          }, Eu.searchBoxKey)
        }), ju]
      })
    }

    function FU(uu) {
      let {
        browser: Eu,
        recentLabel: ju,
        children: su
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)();
      return (0, bu.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, bu.jsx)(NU, {
          options: [{
            value: "recent",
            label: ju
          }, {
            value: "browse",
            label: Uu("smpShop:browseItems")
          }],
          value: Eu.browsing ? "browse" : "recent",
          onChange: Eu.setView,
          ariaLabel: Uu("smpShop:show")
        }), !Eu.browsing && su]
      })
    }

    function BU(uu) {
      let {
        item: Eu,
        names: ju,
        summary: su,
        onBack: Uu,
        children: Zu
      } = uu;
      const {
        t: lu
      } = (0, Xu.A)();
      return (0, bu.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, bu.jsx)(fu.d, {
          className: "SmpBackButton",
          onClick: Uu,
          children: lu("general:back")
        }), (0, bu.jsx)(qU, {
          item: Eu,
          size: "big"
        }), (0, bu.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, bu.jsx)("b", {
            children: mU(ju, Eu)
          }), su && (0, bu.jsx)("small", {
            children: su
          })]
        }), Zu]
      })
    }

    function LU(uu) {
      let {
        browser: Eu,
        className: ju,
        action: su,
        above: Uu,
        list: Xu,
        summary: lu,
        recentLabel: qu,
        listControls: fu,
        onBack: Cu
      } = uu;
      return (0, bu.jsxs)("div", {
        className: Zu()("SmpScreen", ju),
        children: [(0, bu.jsx)(IU, {
          browser: Eu,
          children: su
        }), Eu.shown && (0, bu.jsx)(BU, {
          item: Eu.shown,
          names: Eu.names,
          summary: !Eu.loading && lu,
          onBack: () => {
            null === Cu || void 0 === Cu || Cu(), Eu.searchFor(null)
          },
          children: fu
        }), Uu, Eu.shown ? Xu : (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsx)(FU, {
            browser: Eu,
            recentLabel: qu,
            children: fu
          }), Eu.browsing ? (0, bu.jsx)(WU, {
            items: Eu.catalogue,
            query: Eu.query,
            onPick: Eu.pickItem
          }) : Xu]
        })]
      })
    }

    function tU(uu, Eu) {
      const ju = uu.map((uu => {
        let {
          meta: Eu
        } = uu;
        return Eu.pricePerItem
      }));
      return "min" === Eu ? Math.min(...ju) : Math.max(...ju)
    }
    var xU = ju(6777);
    const TU = (0, su.memo)((function(uu) {
      var Eu;
      const {
        t: ju
      } = (0, Xu.A)(), su = null === uu.seller, Uu = uu.quantity * uu.pricePerItem;
      return (0, bu.jsxs)("div", {
        className: uu.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, bu.jsx)(qU, {
          item: uu.item,
          amount: uu.quantity,
          size: uu.grid ? "big" : "normal",
          tier: uu.tier
        }), (0, bu.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, bu.jsx)("b", {
            children: (0, bu.jsx)(As.d, {
              text: null !== (Eu = uu.title) && void 0 !== Eu ? Eu : `${uu.quantity}x ${uu.item}`
            })
          }), (0, bu.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, bu.jsx)("span", {
              children: su ? ju("smpShop:you") : (0, bu.jsx)(As.d, {
                text: [{
                  entityName: uu.seller
                }]
              })
            }), (0, bu.jsx)("span", {
              children: ju("smpShop:timeLeft", {
                time: aU(uu.expiresAt)
              })
            })]
          })]
        }), (0, bu.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, bu.jsx)(fU, {
            amount: uu.pricePerItem
          }), (0, bu.jsx)("small", {
            children: ju("smpShop:each")
          })]
        }), (0, bu.jsx)(fu.f, {
          className: "SmpBuyButton",
          disabled: su || !uu.canAfford && !uu.busy,
          loading: uu.busy,
          onClick: () => {
            uu.onBuy(uu.itemKey)
          },
          children: su ? ju("smpShop:yours") : (0, bu.jsx)(fU, {
            amount: Uu
          })
        })]
      })
    }));

    function HU(uu) {
      let {
        view: Eu,
        onChange: ju
      } = uu;
      const {
        t: su
      } = (0, Xu.A)();
      return (0, bu.jsx)(XU.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: su("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, bu.jsx)(lu.e, {
            name: "list"
          }),
          ariaLabel: su("smpShop:listView")
        }, {
          value: "grid",
          label: (0, bu.jsx)(lu.e, {
            name: "grid-2"
          }),
          ariaLabel: su("smpShop:gridView")
        }],
        value: Eu,
        onChange: ju
      })
    }

    function AU(uu) {
      let {
        entries: Eu,
        view: ju
      } = uu;
      const {
        t: su
      } = (0, Xu.A)(), Uu = rU(), Zu = "grid" === ju;
      return (0, bu.jsxs)(bu.Fragment, {
        children: [!Zu && (0, bu.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, bu.jsx)("span", {}), (0, bu.jsx)("span", {
            children: su("smpShop:columnItem")
          }), (0, bu.jsx)("span", {
            children: su("smpShop:columnPriceEach")
          }), (0, bu.jsx)("span", {
            children: su("smpShop:columnTotal")
          })]
        }), (0, bu.jsx)(QU.e, {
          lazyLoadedClassName: Zu ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: JU,
          observerUpdateDeps: [Eu.length],
          children: Eu.map((uu => {
            var Eu, ju;
            let {
              key: su,
              item: Xu,
              meta: lu
            } = uu;
            const qu = lu.quantity * lu.pricePerItem;
            return (0, bu.jsx)(TU, {
              itemKey: su,
              item: lu.item,
              title: Xu.customTitle,
              quantity: lu.quantity,
              pricePerItem: lu.pricePerItem,
              seller: lu.seller,
              expiresAt: lu.expiresAt,
              tier: null !== (Eu = null === (ju = Xu.enchant) || void 0 === ju ? void 0 : ju.tier) && void 0 !== Eu ? Eu : null,
              busy: Uu.isPending(su) || null !== lu.seller && !1 === Xu.canBuy,
              canAfford: Uu.canAfford(Xu, qu),
              grid: Zu,
              onBuy: Uu.act
            }, su)
          }))
        }, ju)]
      })
    }
    const nU = [1, 10, 100],
      yU = [1, 10, 100, 999];

    function zU(uu) {
      var Eu, ju, Uu, qu, Cu, cu, Nu, Ou, Yu, hu;
      const {
        t: Du
      } = (0, Xu.A)(), gu = rU(), {
        creator: Mu,
        mode: eu
      } = uu, [pu, wu] = (0, su.useState)(null !== (Eu = null === Mu || void 0 === Mu ? void 0 : Mu.meta.item) && void 0 !== Eu ? Eu : null), [Ju, du] = (0, su.useState)(1), [au, Pu] = (0, su.useState)(0), [ou, ku] = (0, su.useState)(""), [mu, vu] = (0, su.useState)(0), Ku = (0, su.useRef)(pu), Vu = (0, su.useRef)(!1), [ru, Qu] = (0, su.useState)(!1), iu = null !== (ju = null === Mu || void 0 === Mu ? void 0 : Mu.meta.item) && void 0 !== ju ? ju : null, Wu = null !== (Uu = null === Mu || void 0 === Mu ? void 0 : Mu.meta.owned) && void 0 !== Uu ? Uu : 0;
      (0, su.useEffect)((() => {
        uu.searching || null === iu || iu === Ku.current || (Ku.current = iu, Vu.current = !1, wu(iu), Pu(0), du("list" === eu ? Math.max(1, Wu) : 1))
      }), [iu, uu.searching]);
      const Su = !!Mu && !!pu && Mu.meta.item === pu,
        Iu = Su ? Mu.meta.owned : null !== (qu = null === (Cu = uu.inventory) || void 0 === Cu || null === (cu = Cu.find((uu => uu.item === pu))) || void 0 === cu ? void 0 : cu.quantity) && void 0 !== qu ? qu : 0,
        Fu = "list" === eu ? Math.max(1, Iu) : 45954,
        Bu = null !== (Nu = uu.prices[0]) && void 0 !== Nu ? Nu : null,
        Lu = uu.prices.length ? Math.round(uu.prices.reduce(((uu, Eu) => uu + Eu), 0) / uu.prices.length) : null,
        tu = null === (Ou = uu.inventory) || void 0 === Ou || null === (Yu = Ou.find((uu => uu.item === pu))) || void 0 === Yu ? void 0 : Yu.sellPrice;
      (0, su.useEffect)((() => {
        var uu;
        Su && (du((uu => "list" === eu ? Math.min(Math.max(1, uu), Math.max(1, Iu)) : uu)), Vu.current || Pu(null !== (uu = null !== Bu && void 0 !== Bu ? Bu : Lu) && void 0 !== uu ? uu : Math.max(1, null !== tu && void 0 !== tu ? tu : 1)))
      }), [Su, Iu, pu, Bu, Lu]);
      const xu = uu => {
          Vu.current = !0, Pu(uu)
        },
        Tu = Eu => {
          var ju, su, Uu;
          Ku.current = Eu, Vu.current = !1, Qu(!1), ku(""), vu((uu => uu + 1)), wu(Eu), Pu(0), du("list" === eu && null !== (ju = null === (su = uu.inventory) || void 0 === su || null === (Uu = su.find((uu => uu.item === Eu))) || void 0 === Uu ? void 0 : Uu.quantity) && void 0 !== ju ? ju : 1), (null === Mu || void 0 === Mu ? void 0 : Mu.meta.item) !== Eu && uu.onPickItem(Eu)
        },
        Hu = Ju * au,
        Au = "list" === eu && null !== Mu && void 0 !== Mu && Mu.meta.fee ? function(uu, Eu) {
          const ju = Math.max(0, Eu - uu.taxFreeAllowance);
          return Math.ceil(Math.round(ju * uu.rate * 1e6) / 1e6)
        }(Mu.meta.fee, Hu) : 0,
        nu = !!Mu && gu.isPending(Mu.key),
        yu = Su && !uu.searching && Ju >= 1 && au >= 1 && ("order" === eu || Iu >= Ju) && !nu,
        zu = !!pu && !Su && !uu.searching && Ju >= 1 && au >= 1,
        Ru = () => {
          yu ? gu.act(Mu.key, `${Ju}|${au}`) : zu && (uu.onPickItem(pu), Qu(!0))
        };
      (0, su.useEffect)((() => {
        ru && Su && !uu.searching && (Qu(!1), Ru())
      }), [ru, Su, uu.searching]);
      const uE = !!pu && !Su && (uu.searching || ru),
        EE = pu ? mU(uu.names, pu) : "",
        jE = (0, su.useMemo)((() => kU(uu.catalogue, ou).slice(0, 8)), [uu.catalogue, ou]),
        sE = ("list" === eu ? nU.filter((uu => uu < Iu)) : yU).map((uu => ({
          value: uu,
          label: String(uu)
        })));
      "list" === eu && Iu > 0 && sE.push({
        value: Iu,
        label: Du("smpShop:all", {
          count: Iu
        })
      });
      const UE = [];
      return null !== Bu && (Bu > 1 && UE.push({
        value: Bu - 1,
        label: Du("smpShop:undercut", {
          price: ZU(Bu - 1)
        })
      }), UE.push({
        value: Bu,
        label: Du("smpShop:lowest", {
          price: ZU(Bu)
        })
      })), null !== Lu && Lu !== Bu && UE.push({
        value: Lu,
        label: Du("smpShop:average", {
          price: ZU(Lu)
        })
      }), (0, bu.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, bu.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, bu.jsx)("b", {
            children: Du("list" === eu ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, bu.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Du("smpShop:close"),
            onClick: uu.onClose,
            children: (0, bu.jsx)(lu.e, {
              name: "xmark"
            })
          })]
        }), "list" === eu && (0, bu.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (hu = uu.inventory) && void 0 !== hu && hu.length ? uu.inventory.map((uu => {
            let {
              item: Eu,
              quantity: ju
            } = uu;
            return (0, bu.jsx)("button", {
              type: "button",
              title: Eu,
              className: Zu()("SmpPickerSlot", {
                SmpPickerSlotOn: Eu === pu
              }),
              onClick: () => {
                Tu(Eu)
              },
              children: (0, bu.jsx)(qU, {
                item: Eu,
                amount: ju
              })
            }, Eu)
          })) : (0, bu.jsx)("span", {
            className: "SmpMuted",
            children: Du("smpShop:nothingToList")
          })
        }), ("list" === eu || !pu) && (0, bu.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, bu.jsx)(Gu.d, {
            className: "SmpSearchInput",
            placeholderText: Du("list" === eu ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: ou,
            onValueChange: ku,
            blurOnEnter: !0,
            onEnter: () => {
              jE[0] && Tu(jE[0].name)
            }
          }, mu), jE.length > 0 && (0, bu.jsx)("div", {
            className: "SmpPicker",
            children: jE.map((uu => {
              let {
                name: Eu
              } = uu;
              return (0, bu.jsx)("button", {
                type: "button",
                title: Eu,
                className: Zu()("SmpPickerSlot", {
                  SmpPickerSlotOn: Eu === pu
                }),
                onClick: () => {
                  Tu(Eu)
                },
                children: (0, bu.jsx)(qU, {
                  item: Eu
                })
              }, Eu)
            }))
          })]
        }), pu && (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsxs)("div", {
            className: "SmpPickedName",
            children: [EE, uE && (0, bu.jsx)(OU, {})]
          }), (0, bu.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, bu.jsxs)("div", {
              className: "SmpField",
              children: [(0, bu.jsxs)("span", {
                children: [Du("smpShop:quantity"), "list" === eu && Su && (0, bu.jsx)("small", {
                  children: Du("smpShop:youHave", {
                    count: Iu
                  })
                })]
              }), (0, bu.jsx)(YU, {
                value: Ju,
                onChange: du,
                max: Fu,
                label: Du("smpShop:quantity")
              }), (0, bu.jsx)(NU, {
                options: sE,
                value: Ju,
                onChange: du,
                ariaLabel: Du("smpShop:quantity")
              })]
            }), (0, bu.jsxs)("div", {
              className: "SmpField",
              children: [(0, bu.jsx)("span", {
                children: Du("smpShop:pricePerItem")
              }), (0, bu.jsx)(YU, {
                value: Math.max(1, au),
                onChange: xu,
                max: 9999999,
                step: hU,
                label: Du("smpShop:pricePerItem")
              }), (0, bu.jsx)(NU, {
                options: UE,
                value: au,
                onChange: xu,
                ariaLabel: Du("smpShop:pricePerItem")
              })]
            })]
          }), "list" === eu && (0, bu.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, bu.jsxs)("span", {
              children: [Du("smpShop:youGet"), " ", (0, bu.jsx)(fU, {
                amount: Math.max(0, Hu - Au),
                exact: !0
              })]
            }), (0, bu.jsx)("small", {
              children: Au > 0 ? Du("smpShop:listingFee", {
                fee: Au.toLocaleString("en-US")
              }) : Du("smpShop:listingRules")
            })]
          }), (0, bu.jsx)(fu.x, {
            className: "SmpSubmit",
            disabled: !yu && !zu && !nu,
            loading: nu || uE || Su && uu.searching,
            onClick: Ru,
            children: "list" === eu ? Du("smpShop:listButton", {
              count: Ju,
              item: EE
            }) : (0, bu.jsxs)(bu.Fragment, {
              children: [Du("smpShop:orderButton", {
                count: Ju,
                item: EE
              }), " ", au >= 1 && (0, bu.jsx)(fU, {
                amount: Hu
              })]
            })
          })]
        })]
      })
    }

    function RU() {
      var uu;
      const {
        t: Eu
      } = (0, Xu.A)(), ju = rU(), Uu = null === (uu = ju.shopInfo[ju.categoryKey]) || void 0 === uu ? void 0 : uu.items, Zu = wU(Uu, "search"), lu = wU(Uu, "creator"), qu = pU(Uu, "enchantedCreator"), Cu = pU(Uu, "listing"), cu = wU(Uu, "empty"), Nu = SU(Zu, Cu.length > 0 || null !== cu), {
        searched: Ou,
        shown: Yu,
        loading: hu
      } = Nu, [Du, gu] = (0, su.useState)(!1), [Mu, eu] = function() {
        const [uu, Eu] = (0, xU.c)("smpMarketView", "list");
        return ["grid" === uu ? "grid" : "list", Eu]
      }(), Gu = "grid" === Mu, pu = (0, su.useMemo)((() => Cu.filter((uu => {
        let {
          meta: Eu
        } = uu;
        return null !== Eu.seller && Eu.item === Ou
      })).map((uu => {
        let {
          meta: Eu
        } = uu;
        return Eu.pricePerItem
      })).sort(((uu, Eu) => uu - Eu))), [Cu, Ou]), wu = (0, su.useMemo)((() => {
        const uu = new Set(Nu.catalogue.map((uu => {
          let {
            name: Eu
          } = uu;
          return Eu
        })));
        return function(uu) {
          for (const Eu in uu)
            if ("sell" === uu[Eu].smp) return pU(uu[Eu].items, "sell").filter((uu => {
              let {
                item: Eu
              } = uu;
              return !Eu.enchant
            })).map((uu => {
              let {
                meta: Eu
              } = uu;
              return {
                item: Eu.item,
                quantity: Eu.quantity,
                sellPrice: Eu.pricePerItem
              }
            }));
          return []
        }(ju.shopInfo).filter((Eu => {
          let {
            item: ju
          } = Eu;
          return uu.has(ju)
        }))
      }), [ju.shopInfo, Nu.catalogue]);
      return (0, bu.jsx)(LU, {
        browser: Nu,
        className: "SmpMarketTab",
        recentLabel: Eu("smpShop:recentlyListed"),
        action: (0, bu.jsx)(fu.x, {
          className: "SmpSellButton",
          onClick: () => {
            gu((uu => !uu))
          },
          children: Eu("smpShop:sell")
        }),
        above: Du && (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsx)(zU, {
            mode: "list",
            creator: lu,
            inventory: wu,
            catalogue: Nu.catalogue,
            names: Nu.names,
            searching: hu,
            prices: pu,
            onPickItem: Nu.searchFor,
            onClose: () => {
              gu(!1)
            }
          }), qu.length > 0 && (0, bu.jsx)(uZ, {
            entries: qu
          })]
        }),
        listControls: (0, bu.jsx)(HU, {
          view: Mu,
          onChange: eu
        }),
        summary: Yu && (Cu.length > 0 ? Eu(1 === Cu.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Cu.length,
          price: ZU(tU(Cu, "min"))
        }) : Eu("smpShop:noOneSelling", {
          item: mU(Nu.names, Yu)
        })),
        list: hu ? (0, bu.jsx)(CU, {
          grid: Gu
        }) : Cu.length > 0 ? (0, bu.jsx)(AU, {
          entries: Cu,
          view: Mu
        }) : cu ? (0, bu.jsx)(cU, {
          entry: cu
        }) : (0, bu.jsx)(CU, {
          count: 3,
          grid: Gu
        })
      })
    }

    function uZ(uu) {
      let {
        entries: Eu
      } = uu;
      const {
        t: ju
      } = (0, Xu.A)(), Uu = rU(), [Zu, lu] = (0, su.useState)({});
      return (0, bu.jsx)("div", {
        className: "SmpList",
        children: Eu.map((uu => {
          var Eu, su, Xu;
          let {
            key: qu,
            item: Cu,
            meta: cu
          } = uu;
          const Nu = null !== (Eu = Zu[qu]) && void 0 !== Eu ? Eu : 1;
          return (0, bu.jsxs)("div", {
            className: "SmpRow",
            children: [(0, bu.jsx)(qU, {
              item: cu.item,
              amount: cu.quantity,
              tier: null !== (su = null === (Xu = Cu.enchant) || void 0 === Xu ? void 0 : Xu.tier) && void 0 !== su ? su : null
            }), (0, bu.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, bu.jsx)("b", {
                children: (0, bu.jsx)(As.d, {
                  text: Cu.customTitle
                })
              }), (0, bu.jsx)("small", {
                children: ju("smpShop:enchantedListing")
              })]
            }), (0, bu.jsx)(YU, {
              value: Nu,
              onChange: uu => {
                lu({
                  ...Zu,
                  [qu]: uu
                })
              },
              max: 9999999,
              step: hU,
              label: ju("smpShop:pricePerItem")
            }), (0, bu.jsxs)(fu.x, {
              loading: Uu.isPending(qu),
              onClick: () => {
                Uu.act(qu, String(Nu))
              },
              children: [ju("smpShop:list"), " ", (0, bu.jsx)(fU, {
                amount: Nu
              })]
            })]
          }, qu)
        }))
      })
    }
    const EZ = (0, su.memo)((function(uu) {
      let {
        itemKey: Eu,
        item: ju,
        quantity: su,
        pricePerItem: Uu,
        tier: Xu,
        selected: lu,
        onSelect: qu
      } = uu;
      return (0, bu.jsxs)("button", {
        type: "button",
        className: Zu()("SmpInventorySlot", {
          SmpInventorySlotOn: lu
        }),
        title: ju,
        onClick: () => {
          qu(Eu)
        },
        children: [(0, bu.jsx)(qU, {
          item: ju,
          amount: su,
          tier: Xu
        }), (0, bu.jsx)(fU, {
          amount: Uu
        })]
      })
    }));

    function jZ() {
      var uu;
      const {
        t: Eu
      } = (0, Xu.A)(), ju = rU(), Uu = null === (uu = ju.shopInfo[ju.categoryKey]) || void 0 === uu ? void 0 : uu.items, lu = pU(Uu, "sell"), qu = wU(Uu, "empty"), [fu, Cu] = (0, su.useState)(null), [cu, Nu] = (0, su.useState)({}), Ou = lu.find((uu => {
        let {
          key: Eu
        } = uu;
        return Eu === fu
      }));
      return 0 === lu.length ? (0, bu.jsx)("div", {
        className: "SmpScreen",
        children: (0, bu.jsx)(bU, {
          title: qu ? (0, bu.jsx)(As.d, {
            text: qu.item.customTitle
          }) : Eu("smpShop:nothingToSell"),
          children: qu && (0, bu.jsx)(As.d, {
            text: qu.item.description
          })
        })
      }) : (0, bu.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, bu.jsx)("div", {
          className: "SmpInventoryGrid",
          children: lu.map((uu => {
            var Eu, ju;
            let {
              key: su,
              item: Uu,
              meta: Zu
            } = uu;
            return (0, bu.jsx)(EZ, {
              itemKey: su,
              item: Zu.item,
              quantity: Zu.quantity,
              pricePerItem: Zu.pricePerItem,
              tier: null !== (Eu = null === (ju = Uu.enchant) || void 0 === ju ? void 0 : ju.tier) && void 0 !== Eu ? Eu : null,
              selected: su === fu,
              onSelect: Cu
            }, su)
          }))
        }), (0, bu.jsx)("div", {
          className: Zu()("SmpSellBar", {
            SmpSellBarIdle: !Ou
          }),
          children: Ou ? (0, bu.jsx)(sZ, {
            entry: Ou,
            choice: vU(Ou.item, cu[Ou.key]),
            onChoose: uu => {
              Nu({
                ...cu,
                [Ou.key]: uu
              })
            }
          }) : (0, bu.jsx)("span", {
            className: "SmpMuted",
            children: Eu("smpShop:tapToSell")
          })
        })]
      })
    }

    function sZ(uu) {
      var Eu, ju, su, Uu;
      let {
        entry: Zu,
        choice: lu,
        onChoose: qu
      } = uu;
      const {
        t: Cu
      } = (0, Xu.A)(), cu = rU(), {
        key: Nu,
        item: Ou,
        meta: Yu
      } = Zu, hu = PU("dropdown" === (null === (Eu = Ou.userInput) || void 0 === Eu ? void 0 : Eu.type) ? Ou.userInput.dropdownOptions : []), Du = null === lu ? 0 : -(0, ts.d)(Ou, lu);
      return (0, bu.jsxs)(bu.Fragment, {
        children: [(0, bu.jsx)(qU, {
          item: Yu.item,
          amount: Yu.quantity,
          tier: null !== (ju = null === (su = Ou.enchant) || void 0 === su ? void 0 : su.tier) && void 0 !== ju ? ju : null
        }), (0, bu.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, bu.jsx)("b", {
            children: (0, bu.jsx)(As.d, {
              text: null !== (Uu = Ou.customTitle) && void 0 !== Uu ? Uu : Yu.item
            })
          }), (0, bu.jsx)("small", {
            children: Cu("smpShop:sellEach", {
              count: Yu.quantity
            })
          })]
        }), (0, bu.jsx)(NU, {
          options: hu.map((uu => {
            let {
              label: Eu,
              quantity: ju,
              isAll: su
            } = uu;
            return {
              value: Eu,
              label: su ? Cu("smpShop:all", {
                count: ju
              }) : String(ju)
            }
          })),
          value: lu,
          onChange: qu,
          ariaLabel: Cu("smpShop:quantity")
        }), (0, bu.jsxs)(fu.x, {
          loading: cu.isPending(Nu),
          disabled: null === lu,
          onClick: () => {
            cu.act(Nu, lu)
          },
          children: [Cu("smpShop:sellButton"), " ", (0, bu.jsx)(fU, {
            amount: Du
          })]
        })]
      })
    }

    function UZ() {
      var uu;
      const {
        t: Eu
      } = (0, Xu.A)(), ju = rU(), su = null === (uu = ju.shopInfo[ju.categoryKey]) || void 0 === uu ? void 0 : uu.items, Uu = pU(su, "collect"), Zu = pU(su, "myListing"), lu = (uu, Eu) => ju.isPending(uu) || !1 === Eu.canBuy;
      return (0, bu.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, bu.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Eu("smpShop:readyToCollect")
        }), Uu.length > 0 ? (0, bu.jsx)("div", {
          className: "SmpList",
          children: Uu.map((uu => {
            var su, Uu;
            let {
              key: Zu,
              item: Xu,
              meta: qu
            } = uu;
            return (0, bu.jsxs)("div", {
              className: "SmpRow",
              children: [(0, bu.jsx)(qU, {
                item: "sold" === qu.type ? "Gold Coin" : qu.item,
                amount: "sold" === qu.type ? 0 : qu.quantity,
                tier: null !== (su = null === (Uu = Xu.enchant) || void 0 === Uu ? void 0 : Uu.tier) && void 0 !== su ? su : null
              }), (0, bu.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, bu.jsx)("b", {
                  children: (0, bu.jsx)(As.d, {
                    text: Xu.customTitle
                  })
                }), (0, bu.jsx)("small", {
                  children: (0, bu.jsx)(As.d, {
                    text: Xu.description
                  })
                })]
              }), (0, bu.jsx)(fu.p, {
                loading: lu(Zu, Xu),
                onClick: () => {
                  ju.act(Zu)
                },
                children: Eu("smpShop:collect")
              })]
            }, Zu)
          }))
        }) : (0, bu.jsx)(bU, {
          title: Eu("smpShop:nothingToCollect"),
          children: Eu("smpShop:nothingToCollectHint")
        }), (0, bu.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Eu("smpShop:activeListings", {
            count: Zu.length
          })
        }), Zu.length > 0 ? (0, bu.jsx)("div", {
          className: "SmpList",
          children: Zu.map((uu => {
            var su, Uu;
            let {
              key: Zu,
              item: Xu,
              meta: qu
            } = uu;
            return (0, bu.jsxs)("div", {
              className: "SmpRow",
              children: [(0, bu.jsx)(qU, {
                item: qu.item,
                amount: qu.quantity,
                tier: null !== (su = null === (Uu = Xu.enchant) || void 0 === Uu ? void 0 : Uu.tier) && void 0 !== su ? su : null
              }), (0, bu.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, bu.jsx)("b", {
                  children: (0, bu.jsx)(As.d, {
                    text: Xu.customTitle
                  })
                }), (0, bu.jsx)("small", {
                  children: Eu("smpShop:timeLeft", {
                    time: aU(qu.expiresAt)
                  })
                })]
              }), (0, bu.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, bu.jsx)(fU, {
                  amount: qu.pricePerItem
                }), (0, bu.jsx)("small", {
                  children: Eu("smpShop:each")
                })]
              }), (0, bu.jsx)(fu.R, {
                loading: lu(Zu, Xu),
                onClick: () => {
                  ju.act(Zu)
                },
                children: Eu("smpShop:cancel")
              })]
            }, Zu)
          }))
        }) : (0, bu.jsx)(bU, {
          title: Eu("smpShop:noActiveListings"),
          children: Eu("smpShop:noActiveListingsHint")
        })]
      })
    }

    function ZZ(uu) {
      let {
        done: Eu,
        of: ju
      } = uu;
      return (0, bu.jsx)("span", {
        className: "SmpProgress",
        children: (0, bu.jsx)("i", {
          style: {
            width: `${Math.min(100,Eu/Math.max(1,ju)*100)}%`
          }
        })
      })
    }

    function XZ(uu) {
      var Eu, ju, su;
      let {
        entry: Uu,
        choice: Zu,
        onChoose: lu
      } = uu;
      const {
        t: qu
      } = (0, Xu.A)(), Cu = rU(), {
        key: cu,
        item: Nu,
        meta: Ou
      } = Uu, Yu = "dropdown" === (null === (Eu = Nu.userInput) || void 0 === Eu ? void 0 : Eu.type) ? Nu.userInput.dropdownOptions : [], hu = !0 === Ou.processing, Du = null !== Ou.creator && (Ou.owned > 0 || hu), gu = Du && Ou.owned > 0 ? PU(Yu) : [], Mu = null === Zu ? 0 : null !== (ju = null === (su = gu.find((uu => uu.label === Zu))) || void 0 === su ? void 0 : su.quantity) && void 0 !== ju ? ju : 0;
      return (0, bu.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, bu.jsx)(qU, {
          item: Ou.item
        }), (0, bu.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, bu.jsx)("b", {
            children: (0, bu.jsx)(As.d, {
              text: Nu.customTitle
            })
          }), (0, bu.jsxs)("small", {
            children: [(0, bu.jsx)(fU, {
              amount: Ou.pricePerItem
            }), " ", qu("smpShop:each"), " \xb7", " ", null === Ou.creator ? qu("smpShop:you") : (0, bu.jsx)(As.d, {
              text: [{
                entityName: Ou.creator
              }]
            })]
          }), (0, bu.jsx)(ZZ, {
            done: Ou.delivered,
            of: Ou.wanted
          })]
        }), Du ? (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsx)(NU, {
            options: gu.map((uu => {
              let {
                label: Eu,
                quantity: ju,
                isAll: su
              } = uu;
              return {
                value: Eu,
                label: su ? qu("smpShop:max", {
                  count: ju
                }) : String(ju)
              }
            })),
            value: Zu,
            onChange: lu,
            ariaLabel: qu("smpShop:quantity")
          }), (0, bu.jsxs)(fu.x, {
            loading: Cu.isPending(cu) || hu,
            disabled: null === Zu,
            onClick: () => {
              Cu.act(cu, Zu)
            },
            children: [qu("smpShop:deliver"), " ", (0, bu.jsx)(fU, {
              amount: Mu * Ou.pricePerItem
            })]
          })]
        }) : (0, bu.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Ou.creator ? qu("smpShop:yourOrder") : qu("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function lZ() {
      var uu;
      const {
        t: Eu
      } = (0, Xu.A)(), ju = rU(), Uu = null === (uu = ju.shopInfo[ju.categoryKey]) || void 0 === uu ? void 0 : uu.items, Zu = wU(Uu, "search"), lu = wU(Uu, "creator"), qu = pU(Uu, "order"), Cu = wU(Uu, "empty"), cu = SU(Zu, qu.length > 0 || null !== Cu), [Nu, Ou] = (0, su.useState)(!1), [Yu, hu] = (0, su.useState)({});
      return (0, bu.jsx)(LU, {
        browser: cu,
        recentLabel: Eu("smpShop:recentOrders"),
        action: (0, bu.jsx)(fu.x, {
          onClick: () => {
            Ou((uu => !uu))
          },
          children: Eu("smpShop:createOrder")
        }),
        above: Nu && (0, bu.jsx)(zU, {
          mode: "order",
          creator: lu,
          catalogue: cu.catalogue,
          names: cu.names,
          searching: cu.loading,
          prices: [],
          onPickItem: cu.searchFor,
          onClose: () => {
            Ou(!1)
          }
        }),
        onBack: () => {
          Ou(!1)
        },
        summary: qu.length > 0 && Eu(1 === qu.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: qu.length,
          price: ZU(tU(qu, "max"))
        }),
        list: cu.loading ? (0, bu.jsx)(CU, {}) : qu.length > 0 ? (0, bu.jsx)(QU.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: JU,
          observerUpdateDeps: [qu.length],
          children: qu.map((uu => (0, bu.jsx)(XZ, {
            entry: uu,
            choice: vU(uu.item, Yu[uu.key]),
            onChoose: Eu => {
              hu({
                ...Yu,
                [uu.key]: Eu
              })
            }
          }, uu.key)))
        }) : Cu ? (0, bu.jsx)(cU, {
          entry: Cu
        }) : (0, bu.jsx)(CU, {
          count: 3
        })
      })
    }

    function qZ() {
      var uu;
      const {
        t: Eu
      } = (0, Xu.A)(), ju = rU(), su = pU(null === (uu = ju.shopInfo[ju.categoryKey]) || void 0 === uu ? void 0 : uu.items, "myOrder");
      return 0 === su.length ? (0, bu.jsx)("div", {
        className: "SmpScreen",
        children: (0, bu.jsx)(bU, {
          title: Eu("smpShop:noOrders"),
          children: Eu("smpShop:noOrdersHint")
        })
      }) : (0, bu.jsx)("div", {
        className: "SmpScreen",
        children: (0, bu.jsx)("div", {
          className: "SmpList",
          children: su.map((uu => {
            let {
              key: su,
              item: Uu,
              meta: Zu
            } = uu;
            const Xu = ju.isPending(su) || !1 === Uu.canBuy;
            return (0, bu.jsxs)("div", {
              className: "SmpRow",
              children: [(0, bu.jsx)(qU, {
                item: Zu.item,
                amount: Zu.collectable
              }), (0, bu.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, bu.jsx)("b", {
                  children: (0, bu.jsx)(As.d, {
                    text: Uu.customTitle
                  })
                }), (0, bu.jsxs)("small", {
                  children: [(0, bu.jsx)(fU, {
                    amount: Zu.pricePerItem
                  }), " ", Eu("smpShop:each"), Zu.collectable > 0 && ` \xb7 ${Eu("smpShop:readyCount",{count:Zu.collectable})}`]
                }), (0, bu.jsx)(ZZ, {
                  done: Zu.delivered,
                  of: Zu.wanted
                })]
              }), Zu.collectable > 0 ? (0, bu.jsx)(fu.p, {
                loading: Xu,
                onClick: () => {
                  ju.act(su)
                },
                children: Eu("smpShop:collectCount", {
                  count: Zu.collectable
                })
              }) : (0, bu.jsx)(fu.R, {
                loading: Xu,
                onClick: () => {
                  ju.act(su)
                },
                children: Eu("smpShop:cancel")
              })]
            }, su)
          }))
        })
      })
    }
    const fZ = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      CZ = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function bZ(uu, Eu) {
      let ju = !1;
      const su = {};
      for (const Uu in uu) Eu(Uu, uu[Uu]) ? su[Uu] = uu[Uu] : ju = !0;
      return ju ? su : uu
    }

    function cZ(uu) {
      var Eu, ju, Uu, qu;
      const {
        show: fu,
        shopInfo: Cu,
        selectedCategoryKey: cu
      } = uu, {
        t: Nu
      } = (0, Xu.A)(), Ou = null !== cu && void 0 !== cu ? cu : "", Yu = GU(Cu, Ou), hu = null === (Eu = Cu[Ou]) || void 0 === Eu ? void 0 : Eu.items, Du = null !== Yu, [gu, Mu] = (0, su.useState)({}), [eu, Gu] = (0, su.useState)([]), [pu, wu] = (0, su.useState)(!1), [Ju, du] = (0, su.useState)(null), [, au] = (0, su.useState)(0), Pu = (0, su.useRef)(0), ou = (0, su.useRef)({}), ku = (0, su.useRef)({
        items: hu,
        pending: gu,
        shopInfo: Cu,
        active: Du,
        canAfford: uu.canAfford,
        buy: uu.buy
      });
      ku.current = {
        items: hu,
        pending: gu,
        shopInfo: Cu,
        active: Du,
        canAfford: uu.canAfford,
        buy: uu.buy
      };
      const mu = (0, su.useCallback)((uu => {
        Pu.current++;
        const Eu = Pu.current;
        Gu((ju => [{
          id: Eu,
          text: uu
        }, ...ju].slice(0, 8))), du(Eu)
      }), []);
      (0, su.useEffect)((() => {
        if (null === Ju) return;
        const uu = setTimeout((() => {
          du(null)
        }), 3e3);
        return () => {
          clearTimeout(uu)
        }
      }), [Ju]), (0, su.useEffect)((() => {
        const Eu = uu.message;
        if (!Eu) return;
        const {
          shopInfo: ju,
          active: su,
          items: Uu
        } = ku.current, Zu = null !== Eu.categoryKey ? null !== GU(ju, Eu.categoryKey) : su;
        (Zu || su) && mu(Eu.text), Zu && Mu((uu => bZ(uu, (uu => {
          var Eu, ju;
          return !fZ.has(null === Uu || void 0 === Uu || null === (Eu = Uu[uu]) || void 0 === Eu || null === (ju = Eu.smp) || void 0 === ju ? void 0 : ju.kind)
        }))))
      }), [uu.message, mu]), (0, su.useEffect)((() => {
        Mu((uu => bZ(uu, ((uu, Eu) => KU(null === hu || void 0 === hu ? void 0 : hu[uu]) === Eu.snapshot))))
      }), [Cu, hu]);
      const vu = Object.keys(gu).length > 0;
      (0, su.useEffect)((() => {
        if (!vu) return;
        const uu = setInterval((() => {
          au((uu => uu + 1));
          const uu = Date.now(),
            {
              pending: Eu,
              items: ju
            } = ku.current,
            su = Object.keys(Eu).filter((ju => uu - Eu[ju].at >= 12e3));
          if (0 === su.length) return;
          const Uu = su.some((uu => {
            var su, Uu;
            return "search" !== (null === ju || void 0 === ju || null === (su = ju[uu]) || void 0 === su || null === (Uu = su.smp) || void 0 === Uu ? void 0 : Uu.kind) || Eu[uu].resend
          }));
          for (const Zu of su) ou.current[Zu] = uu;
          Mu((uu => bZ(uu, (uu => !su.includes(uu))))), Uu && mu(Nu("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(uu)
        }
      }), [vu]), (0, su.useEffect)((() => {
        Mu({})
      }), [Ou]), (0, su.useEffect)((() => {
        fu || wu(!1)
      }), [fu]);
      const Ku = (0, su.useCallback)((function(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: su,
            pending: Uu,
            canAfford: Zu,
            buy: Xu
          } = ku.current, lu = null === su || void 0 === su ? void 0 : su[uu];
          if (!lu || uu in Uu || !1 === lu.canBuy) return !1;
          if (!Zu(lu, (0, ts.d)(lu, Eu))) return !1;
          Xu(uu, lu, Eu);
          const qu = {
            snapshot: KU(lu),
            at: Date.now(),
            resend: ju
          };
          return ku.current.pending = {
            ...ku.current.pending,
            [uu]: qu
          }, Mu((Eu => ({
            ...Eu,
            [uu]: qu
          }))), !0
        }), []),
        Vu = (0, su.useMemo)((() => ({
          shopInfo: Cu,
          categoryKey: Ou,
          canAfford: uu.canAfford,
          isPending: uu => uu in gu,
          gaveUpAt: uu => {
            var Eu;
            return null !== (Eu = ou.current[uu]) && void 0 !== Eu ? Eu : 0
          },
          act: Ku,
          notify: mu
        })), [Cu, Ou, uu.canAfford, gu, Ku, mu]),
        ru = Math.min(...Object.values(gu).map((uu => uu.at))),
        Qu = vu && Date.now() - ru > 1500,
        iu = eu.length > 1,
        Wu = null !== (ju = null === (Uu = Cu[Ou]) || void 0 === Uu ? void 0 : Uu.customTitle) && void 0 !== ju ? ju : Ou,
        Su = null === (qu = Cu[Ou]) || void 0 === qu ? void 0 : qu.description;
      let Iu = null;
      return "market" === Yu ? Iu = (0, bu.jsx)(RU, {}) : "sell" === Yu ? Iu = (0, bu.jsx)(jZ, {}) : "collect" === Yu ? Iu = (0, bu.jsx)(UZ, {}) : "orders" === Yu ? Iu = (0, bu.jsx)(lZ, {}) : "myOrders" === Yu && (Iu = (0, bu.jsx)(qZ, {})), (0, bu.jsx)(VU.Provider, {
        value: Vu,
        children: (0, bu.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Du,
          children: (0, bu.jsxs)("div", {
            className: "SmpShop",
            children: [(0, bu.jsx)("header", {
              className: "SmpHeader",
              children: (0, bu.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, bu.jsxs)("h2", {
                  children: [Yu && (0, bu.jsx)(lu.e, {
                    name: CZ[Yu]
                  }), Nu(Wu)]
                }), Su && (0, bu.jsx)("p", {
                  children: (0, bu.jsx)(As.d, {
                    text: Su
                  })
                })]
              })
            }), (0, bu.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: fu && Iu
            }), (0, bu.jsxs)("button", {
              type: "button",
              className: Zu()("SmpStatus", {
                SmpStatusWaiting: vu,
                SmpStatusFresh: !vu && null !== Ju,
                SmpStatusHasHistory: iu
              }),
              "aria-live": "polite",
              "aria-expanded": iu ? pu : void 0,
              onClick: () => {
                iu && wu((uu => !uu))
              },
              children: [vu ? (0, bu.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, bu.jsx)(OU, {}), Nu(Qu ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : eu[0] ? (0, bu.jsx)("span", {
                className: "SmpStatusText",
                children: (0, bu.jsx)(As.d, {
                  text: eu[0].text
                })
              }, eu[0].id) : (0, bu.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Nu("smpShop:ready")
              }), iu && (0, bu.jsx)("small", {
                children: Nu("smpShop:recentMessages", {
                  count: eu.length
                })
              })]
            }), pu && iu && (0, bu.jsx)("div", {
              className: "SmpStatusHistory",
              children: eu.map((uu => (0, bu.jsx)("div", {
                children: (0, bu.jsx)(As.d, {
                  text: uu.text
                })
              }, uu.id)))
            })]
          })
        })
      })
    }
    class NZ {
      constructor(uu) {
        this.info = uu
      }
      static fromShopInfo(uu) {
        const Eu = {};
        for (const ju in uu) {
          const su = !0 === uu[ju].redDot && !0 !== uu[ju].forceRemoveRedDot;
          Eu[ju] = {
            redDot: su,
            items: {}
          };
          for (const Uu in uu[ju].items) {
            const su = uu[ju].items[Uu],
              Zu = !0 === su.redDot && !0 !== su.forceRemoveRedDot;
            Eu[ju].items[Uu] = {
              redDot: Zu
            }
          }
        }
        return new NZ(Eu)
      }
      anyCategoryHasRedDots() {
        for (const uu in this.info)
          if (this.categoryHasRedDot(uu)) return !0;
        return !1
      }
      doesCategoryExist(uu) {
        return !(0, lj.H)(this.info[uu])
      }
      categoryHasRedDot(uu) {
        return !0 === this.info[uu].redDot
      }
      updateCategoryRedDot(uu, Eu) {
        this.info[uu].redDot = Eu
      }
      doesItemExist(uu, Eu) {
        return this.doesCategoryExist(uu) && !(0, lj.H)(this.info[uu].items[Eu])
      }
      itemHasRedDot(uu, Eu) {
        return !0 === this.info[uu].items[Eu].redDot
      }
      updateItemRedDot(uu, Eu, ju) {
        this.info[uu].items[Eu].redDot = ju
      }
      shallowCopy() {
        return new NZ(this.info)
      }
    }

    function OZ(uu, Eu) {
      return `${uu}\x1f${Eu}`
    }

    function YZ(uu, Eu) {
      return !(0, lj.H)(Eu) && !(0, lj.H)(uu) && Eu in uu
    }
    const hZ = (0, su.memo)((function(uu) {
      var Eu, ju;
      let {
        show: Uu
      } = uu;
      const Xu = (0, rE.d)("players", pZ),
        lu = (0, rE.d)("players", wZ),
        Cu = (0, EU.b)(),
        [Nu, Ou] = (0, su.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: NZ.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        hu = (0, su.useRef)(""),
        Du = (0, su.useRef)(null),
        Mu = (0, su.useRef)(null),
        eu = (0, su.useRef)(0),
        Gu = (0, su.useRef)(void 0),
        pu = (0, su.useRef)(null),
        wu = (0, su.useRef)(Nu),
        du = Nu.redDotInfo.anyCategoryHasRedDots(),
        [au, ou] = (0, su.useState)(null),
        ku = (0, su.useRef)(!1);
      let mu = !1,
        vu = 0,
        Ku = 0;
      if (Nu.currencyAmounts) {
        for (const uu in Nu.currencyAmounts) {
          var Vu;
          const Eu = Nu.currencyAmounts[uu];
          Eu.hidden || (vu++, (null === (Vu = Eu.subtext) || void 0 === Vu ? void 0 : Vu.length) > 0 && Ku++)
        }
        mu = vu + Ku > 4
      }(0, su.useEffect)((() => {
        qj.h.TY("showShopIconRedDot", du, !0)
      }), [du]), (0, su.useEffect)((() => {
        gu.gameBridge.send("setShopOpen", Uu), Uu || (clearTimeout(Gu.current), Ou((uu => uu.awaitingPurchase ? {
          ...uu,
          awaitingPurchase: !1
        } : uu)))
      }), [Uu]), (0, su.useEffect)((() => () => {
        gu.gameBridge.send("setShopOpen", !1), clearTimeout(Gu.current)
      }), []), (0, su.useEffect)((() => {
        wu.current = Nu
      }), [Nu]), (0, su.useEffect)((() => {
        if (null === au) return;
        return (0, Rs.b)("pointerdown", (uu => {
          const Eu = uu.target;
          null !== Eu && void 0 !== Eu && Eu.closest(".ShopItem") || ou(null)
        }))
      }), [au]);
      const ru = uu => {
          Ou((Eu => ({
            ...Eu,
            ...uu
          })))
        },
        Qu = uu => {
          var Eu;
          clearTimeout(null === (Eu = Nu.onBoughtInfo) || void 0 === Eu ? void 0 : Eu.timeout);
          const ju = setTimeout((() => {
            ru({
              onBoughtInfo: null
            })
          }), 3e3);
          hu.current = uu, ru({
            onBoughtInfo: {
              text: uu,
              timeout: ju,
              categoryKey: Du.current
            }
          })
        },
        iu = uu => {
          const {
            shopInfo: Eu,
            userInputsPerItem: ju,
            redDotInfo: su,
            autoSelectCategory: Zu
          } = function(uu, Eu, ju, su, Uu, Zu) {
            if ((0, lj.H)(uu) || 0 === Object.keys(uu).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: NZ.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Xu = Pu.siteUsedData[Pu.siteUsed].adConfig.showRewardedAds,
              lu = {};
            let qu = null;
            for (const hu in uu) {
              const Eu = uu[hu],
                ju = {};
              let su = !1;
              for (const uu in Eu.items) {
                const Uu = Eu.items[uu];
                (0, ts.l)(Uu, Xu) && (ju[uu] = Uu, su = !0)
              }
              su && (lu[hu] = {
                ...Eu,
                items: ju
              }, !0 === Eu.autoSelectCategory && (qu = hu))
            }
            const fu = {},
              Cu = (uu, Eu, su, Xu) => {
                var lu, qu;
                const Cu = OZ(uu, Eu),
                  bu = null !== (lu = ju[Cu]) && void 0 !== lu ? lu : ju[Eu];
                if (null !== (qu = Xu.userInput) && void 0 !== qu && qu.type) switch (Xu.userInput.type) {
                  case "dropdown": {
                    var cu;
                    const uu = !bu || !Xu.userInput.dropdownOptions.some((uu => (0, ts.g)(uu) === bu)),
                      Eu = Xu.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === su || void 0 === su || null === (cu = su.userInput) || void 0 === cu ? void 0 : cu.type) || JSON.stringify(su.userInput.dropdownOptions) !== JSON.stringify(Xu.userInput.dropdownOptions)),
                      ju = Xu.userInput,
                      Uu = !(0, lj.H)(ju.initialValue) && ju.dropdownOptions.some((uu => (0, ts.g)(uu) === ju.initialValue));
                    var Nu;
                    return void(uu || Eu ? Uu ? fu[Cu] = null !== (Nu = Xu.userInput.initialValue) && void 0 !== Nu ? Nu : null : Xu.userInput.dropdownOptions.length > 0 ? fu[Cu] = (0, ts.g)(Xu.userInput.dropdownOptions[0]) : fu[Cu] = null : fu[Cu] = bu)
                  }
                  case "text":
                  case "number":
                    var Ou, Yu, hu;
                    return void((null === su || void 0 === su ? void 0 : su.userInput) !== Xu.userInput ? fu[Cu] = null !== (Ou = null !== (Yu = Xu.userInput.initialValue) && void 0 !== Yu ? Yu : bu) && void 0 !== Ou ? Ou : "" : fu[Cu] = null !== (hu = null !== bu && void 0 !== bu ? bu : Xu.userInput.initialValue) && void 0 !== hu ? hu : "");
                  case "color":
                    var Du, gu, Mu;
                    return void((null === su || void 0 === su ? void 0 : su.userInput) !== Xu.userInput ? fu[Cu] = null !== (Du = null !== (gu = Xu.userInput.initialValue) && void 0 !== gu ? gu : bu) && void 0 !== Du ? Du : "#000000" : fu[Cu] = null !== (Mu = null !== bu && void 0 !== bu ? bu : Xu.userInput.initialValue) && void 0 !== Mu ? Mu : "#000000");
                  case "player": {
                    const uu = (0, ts.j)(Uu, Zu, Xu.userInput);
                    return void(bu && uu.includes(bu) ? fu[Cu] = bu : fu[Cu] = uu.length > 0 ? uu[0] : null)
                  }
                }
              };
            for (const hu in lu)
              for (const uu in lu[hu].items) {
                var bu;
                const ju = lu[hu].items[uu];
                Cu(hu, uu, null === (bu = Eu[hu]) || void 0 === bu ? void 0 : bu.items[uu], ju)
              }
            const cu = NZ.fromShopInfo(lu);
            for (const hu in lu) {
              var Nu;
              if (su.doesCategoryExist(hu)) {
                (null === (Nu = Eu[hu]) || void 0 === Nu ? void 0 : Nu.redDot) === lu[hu].redDot && cu.updateCategoryRedDot(hu, su.categoryHasRedDot(hu));
                for (const uu in lu[hu].items) {
                  var Ou, Yu;
                  su.doesItemExist(hu, uu) && (null === (Ou = Eu[hu]) || void 0 === Ou || null === (Yu = Ou.items[uu]) || void 0 === Yu ? void 0 : Yu.redDot) === lu[hu].items[uu].redDot && cu.updateItemRedDot(hu, uu, su.itemHasRedDot(hu, uu))
                }
              }
            }
            return {
              shopInfo: lu,
              userInputsPerItem: fu,
              redDotInfo: cu,
              autoSelectCategory: qu
            }
          }(uu, Nu.shopInfo, Nu.userInputsPerItem, Nu.redDotInfo, Xu, lu), qu = {
            shopInfo: Eu,
            userInputsPerItem: ju,
            redDotInfo: su
          };
          if (null === Zu || Uu)
            if (Eu[Nu.selectedCategoryKey]) qu.selectedCategoryKey = Nu.selectedCategoryKey;
            else {
              const uu = sU(Eu);
              qu.selectedCategoryKey = uu.length > 0 ? uu[0] : null
            }
          else qu.selectedCategoryKey = Zu;
          return 0 === Object.keys(Eu).length && Uu && Ju.d.set({
            openEverythingMenuName: null
          }), qu
        },
        Su = (uu, Eu, ju) => {
          const su = Nu.selectedCategoryKey,
            Uu = OZ(su, uu),
            Zu = null !== ju && void 0 !== ju ? ju : Nu.userInputsPerItem[Uu],
            Xu = {
              categoryKey: su,
              itemKey: uu,
              userInput: Zu
            };
          if (Du.current = su, Eu.isRewardedAd) {
            if (Date.now() - eu.current < 5e3) return;
            (0, hE.O)((() => {
              var ju, su, Zu;
              console.log("bought rewarded ad");
              const lu = Xu.categoryKey ? null === (ju = wu.current.shopInfo[Xu.categoryKey]) || void 0 === ju ? void 0 : ju.items[uu] : null;
              if (!lu || !lu.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (su = Eu.userInput) || void 0 === su ? void 0 : su.type) === (null === lu || void 0 === lu || null === (Zu = lu.userInput) || void 0 === Zu ? void 0 : Zu.type) ? (Xu.userInput = wu.current.userInputsPerItem[Uu], gu.gameBridge.send("buyShopItem", Xu), Eu.onBoughtMessage && Qu(Eu.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), eu.current = Date.now()
          } else {
            gu.gameBridge.send("buyShopItem", Xu), ru({
              awaitingPurchase: !0
            }), clearTimeout(Gu.current), Gu.current = setTimeout((() => {
              pu.current = null, ru({
                awaitingPurchase: !1
              })
            }), 1e3);
            const uu = (0, ts.d)(Eu, Zu);
            if (pu.current = null, !isNaN(uu) && YZ(Nu.currencyAmounts, Eu.currency)) {
              0 !== uu && (pu.current = {
                currency: Eu.currency,
                amountBefore: Nu.currencyAmounts[Eu.currency].amount
              });
              const ju = {
                ...Nu.currencyAmounts
              };
              ju[Eu.currency].amount -= uu, ru({
                currencyAmounts: ju
              })
            }
            Eu.onBoughtMessage && Qu(Eu.onBoughtMessage)
          }
        },
        Iu = (uu, Eu) => {
          if (null === Eu || !uu.shopInfo[Eu]) return uu;
          let ju = uu.redDotInfo;
          return ju.categoryHasRedDot(Eu) && (ju.updateCategoryRedDot(Eu, !1), ju = ju.shallowCopy()), {
            ...uu,
            selectedCategoryKey: Eu,
            redDotInfo: ju
          }
        },
        Fu = uu => {
          Ou((Eu => Iu(Eu, uu)))
        };
      (0, LE.f)(uU.k, (() => {
        Ou((uu => {
          const Eu = (0, uU.m)(sU(uu.shopInfo), uu.selectedCategoryKey, (Eu => (0, uU.i)(uu.shopInfo[Eu].items)));
          return Eu === uu.selectedCategoryKey ? uu : Iu(uu, Eu)
        }))
      })), (0, LE.f)("showShopFromServer", (uu => {
        let {
          toggle: Eu,
          fu: ju
        } = uu;
        ju && Fu(ju), 0 === Object.keys(Nu.shopInfo).length || Eu && Uu ? Ju.d.set({
          openEverythingMenuName: null
        }) : Ju.d.set({
          openEverythingMenuName: DE.o.SHOP
        })
      })), (0, LE.f)("closeShopOnDamaged", (() => {
        Uu && Ju.d.set({
          openEverythingMenuName: null
        })
      })), (0, LE.f)("overShopInfo", (uu => {
        Qu(uu)
      })), (0, Yu.e)("currencyAmounts", (uu => {
        var Eu;
        const ju = pu.current;
        ju && (null === uu || void 0 === uu || null === (Eu = uu[ju.currency]) || void 0 === Eu ? void 0 : Eu.amount) === ju.amountBefore ? ru({
          currencyAmounts: uu
        }) : (pu.current = null, ru({
          currencyAmounts: uu,
          awaitingPurchase: !1
        }))
      })), (0, Yu.e)("shopInfo", (uu => {
        ru({
          ...iu(uu),
          awaitingPurchase: !1
        })
      }));
      const Bu = (0, su.useRef)({
        playerIds: Xu,
        localPlayerId: lu
      });
      (0, su.useEffect)((() => {
        Bu.current.playerIds === Xu && Bu.current.localPlayerId === lu || (Bu.current = {
          playerIds: Xu,
          localPlayerId: lu
        }, Ou((uu => {
          const Eu = iu(uu.shopInfo);
          return {
            ...uu,
            ...Eu
          }
        })))
      }), [Xu, lu]);
      const Lu = Nu.selectedCategoryKey,
        tu = (uu, Eu) => {
          var ju, su;
          return (isNaN(Eu) || (0, lj.H)(uu.currency) || YZ(Nu.currencyAmounts, uu.currency) && Eu <= Nu.currencyAmounts[uu.currency].amount) && (null === (ju = uu.canBuy) || void 0 === ju || ju) && !(null !== (su = uu.hidden) && void 0 !== su && su)
        },
        xu = (uu, Eu) => {
          var ju, su, Uu;
          const Xu = OZ(Lu, uu),
            lu = Nu.shopInfo[Lu].items[uu],
            Cu = Nu.userInputsPerItem[Xu],
            cu = (0, ts.d)(lu, Cu),
            Ou = tu(lu, cu),
            Yu = lu.enchant,
            hu = Yu ? (0, Wu.qb)(null !== (ju = lu.customTitle) && void 0 !== ju ? ju : uu, {
              colour: Wu.jb[Yu.tier]
            }) : null !== (su = lu.customTitle) && void 0 !== su ? su : uu,
            Du = Eu => {
              const ju = null !== Eu && void 0 !== Eu ? Eu : Cu,
                su = void 0 !== Eu ? (0, ts.d)(lu, Eu) : cu;
              tu(lu, su) && null !== ju && Su(uu, lu, Eu);
              let Uu = Nu.redDotInfo;
              Uu.itemHasRedDot(Lu, uu) && (Uu.updateItemRedDot(Lu, uu, !1), Uu = Uu.shallowCopy()), ru({
                redDotInfo: Uu
              })
            };
          return (0, bu.jsxs)("div", {
            className: Zu()("ShopItem", {
              ShopItemNoInput: !lu.userInput,
              ShopItemNoInputCanBuy: !lu.userInput && Ou,
              ShopItemNoInputSelected: lu.isSelected,
              ShopItemEnchant: !!Yu
            }),
            "data-pad-focusable": !lu.userInput || void 0,
            "data-pad-unavailable": !lu.userInput && !Ou || void 0,
            "data-pad-repeat": null !== (Uu = (0, uU.c)(lu)) && void 0 !== Uu ? Uu : void 0,
            "data-pad-repeat-wait": Nu.awaitingPurchase || void 0,
            onClick: () => {
              if (Yu && ku.current) {
                if (au !== Xu) return void ou(Xu);
                ou(null)
              }
              lu.userInput || Du()
            },
            onPointerDown: uu => {
              Yu && (ku.current = (0, Ts.r)(uu))
            },
            onPointerEnter: uu => {
              Yu && !(0, Ts.r)(uu) && ou(Xu)
            },
            onPointerLeave: uu => {
              Yu && !(0, Ts.r)(uu) && ou((uu => uu === Xu ? null : uu))
            },
            style: {
              zIndex: Object.keys(Nu.shopInfo[Lu].items).length - Eu
            },
            children: [Nu.redDotInfo.itemHasRedDot(Lu, uu) && (0, bu.jsx)(qu.d, {
              top: "-6px",
              right: "-6px"
            }), lu.badge && (0, bu.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, bu.jsx)("div", {
                className: Zu()("ShopBadgeMain", lu.badge.type),
                children: (0, bu.jsx)(As.d, {
                  text: lu.badge.text
                })
              })
            }), (0, bu.jsx)("div", {
              className: "ShopItemLeft",
              children: lu.image && (0, bu.jsx)(DZ, {
                item: lu,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, bu.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, bu.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, bu.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, bu.jsx)(As.d, {
                    text: hu
                  })
                }), (0, bu.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, bu.jsx)(As.d, {
                    text: lu.description
                  })
                })]
              }), lu.userInput && (0, bu.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: uu => {
                  uu.stopPropagation()
                },
                children: [(0, bu.jsx)(eZ, {
                  item: lu,
                  currInput: Cu,
                  updateInput: Eu => {
                    ((uu, Eu, ju) => {
                      const su = OZ(uu, Eu),
                        Uu = {
                          ...Nu.userInputsPerItem
                        };
                      Uu[su] = ju, ru({
                        userInputsPerItem: Uu
                      })
                    })(Lu, uu, Eu)
                  },
                  onSubmit: uu => {
                    Du(uu)
                  }
                }), ("dropdown" !== lu.userInput.type || !lu.userInput.autoSubmit) && (0, bu.jsx)(fu.f, {
                  className: "ItemCostButton",
                  disabled: !Ou && null !== Cu,
                  onClick: () => {
                    Du()
                  },
                  children: (0, bu.jsx)(MZ, {
                    item: lu,
                    cost: cu,
                    currencyAmounts: Nu.currencyAmounts
                  })
                })]
              })]
            }), !lu.userInput && (0, bu.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, bu.jsx)(MZ, {
                item: lu,
                cost: cu,
                currencyAmounts: Nu.currencyAmounts
              })
            }), Yu && au === Xu && (0, bu.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, bu.jsx)(As.d, {
                text: hu
              }), (0, bu.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, bu.jsx)(As.d, {
                  text: (0, xs.d)("", Yu.enchantments, Yu.enchantmentData)
                })
              })]
            })]
          }, Xu)
        },
        Tu = function(uu) {
          for (const Eu in uu)
            if (uu[Eu].smp) return !0;
          return !1
        }(Nu.shopInfo),
        Hu = GU(Nu.shopInfo, Lu);
      return (0, bu.jsx)(Fs.b, {
        className: "Menu ShopBody",
        show: Uu,
        children: 0 !== Object.keys(Nu.shopInfo).length && (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, bu.jsx)(cu, {
              items: sU(Nu.shopInfo).map((uu => {
                var Eu;
                return {
                  id: uu,
                  title: null !== (Eu = Nu.shopInfo[uu].customTitle) && void 0 !== Eu ? Eu : uu,
                  redDot: Nu.redDotInfo.categoryHasRedDot(uu)
                }
              })),
              link: Cu ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, jU.f)({
                    page: (0, jU.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: Lu,
              onClick: Fu,
              padStartsOnTab: (0, uU.g)(Lu)
            }), (0, bu.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Nu.currencyAmounts && Object.keys(Nu.currencyAmounts).map((uu => {
                var Eu;
                const ju = Nu.currencyAmounts[uu];
                return ju.hidden ? null : (0, bu.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (mu ? "SmallText" : ""),
                  children: [(0, bu.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, bu.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: ju.iconColour
                      },
                      children: (0, bu.jsx)(JZ, {
                        iconName: ju.icon
                      })
                    }), "\xa0", (0, Ls.b)(ju.amount, 6)]
                  }), (null === (Eu = ju.subtext) || void 0 === Eu ? void 0 : Eu.length) > 0 && (0, bu.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, bu.jsx)(As.d, {
                      text: ju.subtext
                    })
                  })]
                }, uu)
              }))
            })]
          }), (0, bu.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Tu && (0, bu.jsx)(cZ, {
              show: Uu,
              shopInfo: Nu.shopInfo,
              selectedCategoryKey: Lu,
              buy: (uu, Eu, ju) => {
                Su(uu, Eu, ju)
              },
              canAfford: tu,
              message: Nu.onBoughtInfo
            }), null === Hu && (0, bu.jsxs)(bu.Fragment, {
              children: [(0, bu.jsx)("div", {
                className: Zu()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Nu.onBoughtInfo
                }),
                children: (0, bu.jsx)(As.d, {
                  text: hu.current
                })
              }), (0, bu.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, bu.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Eu = Nu.shopInfo[Lu]) || void 0 === Eu ? void 0 : Eu.description) && (0, bu.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, bu.jsx)(As.d, {
                      text: Nu.shopInfo[Lu].description
                    })
                  }), Uu && (0, bu.jsx)("div", {
                    className: "ShopItems",
                    ref: Mu,
                    "data-pad-initial-area": !0,
                    children: sU(null === (ju = Nu.shopInfo[Lu]) || void 0 === ju ? void 0 : ju.items).map(((uu, Eu) => xu(uu, Eu)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function DZ(uu) {
      let {
        item: Eu,
        minWidth: ju,
        minHeight: su
      } = uu;
      const {
        image: Uu,
        schematicId: Zu,
        imageColour: Xu
      } = Eu;
      if (Zu) return (0, bu.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${ju}rem`,
          height: `${su}rem`
        },
        children: (0, bu.jsx)(ns.b, {
          game: {
            schematicId: Zu
          }
        })
      });
      var qu, fu;
      if ((0, Hs.h)(Uu)) return (0, bu.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${ju}rem`,
          height: "0",
          minHeight: `${su}rem`
        },
        children: (0, bu.jsx)(Hs.d, {
          itemName: Uu,
          amount: null !== (qu = Eu.amount) && void 0 !== qu ? qu : 0,
          amountFontSize: su / 4 + "rem",
          enchantmentTier: null === (fu = Eu.enchant) || void 0 === fu ? void 0 : fu.tier
        })
      });
      const Cu = Uu.slice(-4);
      return ".jpg" === Cu || ".png" === Cu ? (0, bu.jsx)(gZ, {
        image: Uu,
        minWidth: ju
      }) : (0, bu.jsx)(lu.e, {
        name: Uu,
        className: "SelectedItemImage",
        style: {
          color: Xu
        }
      })
    }

    function gZ(uu) {
      let {
        image: Eu,
        minWidth: ju
      } = uu;
      const {
        gameNameWithVariation: su
      } = (0, rE.f)("connectedGame"), Uu = Eu.endsWith(".jpg");
      return (0, bu.jsx)("img", {
        className: Zu()({
          ShopPixelImage: !Uu
        }),
        style: {
          width: `${Uu?1.6*ju:ju}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Wu.Vb)(su)}/${Eu}`,
        alt: Eu,
        draggable: !1
      })
    }

    function MZ(uu) {
      let {
        item: Eu,
        cost: ju,
        currencyAmounts: su
      } = uu;
      const Uu = !isNaN(ju) && 0 !== ju && YZ(su, Eu.currency);
      let Zu = null;
      return Eu.buyButtonText ? Zu = Eu.buyButtonText : Uu ? (Zu = ju, Eu.sell && (Zu = -1 * ju), Zu = Zu.toString()) : 0 === ju ? Zu = "Free" : Eu.isRewardedAd && (Zu = "Watch ad"), (0, lj.H)(Zu) || " " === Zu ? null : (0, bu.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Uu && (0, bu.jsx)("div", {
          style: {
            color: su[Eu.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, bu.jsx)(JZ, {
            iconName: su[Eu.currency].icon
          })
        }), (0, bu.jsx)("div", {
          className: "BuyItemCost",
          children: (0, bu.jsx)(As.d, {
            text: Zu
          })
        })]
      })
    }

    function eZ(uu) {
      let {
        item: Eu,
        currInput: ju,
        updateInput: Uu,
        onSubmit: Zu
      } = uu;
      const {
        t: lu
      } = (0, Xu.A)(), qu = (0, su.useRef)(null);
      if ((0, su.useEffect)((() => {
          const uu = qu.current;
          uu && uu.value !== ju && document.activeElement !== uu && (uu.value = null !== ju && void 0 !== ju ? ju : "")
        }), [ju]), !Eu.userInput) return null;
      let fu = Eu.userInput;
      if (Du.featureFlags.sanitizeShopInput && "text" === Eu.userInput.type && (fu = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === fu.type || "number" === fu.type) {
        var Cu, cu;
        console.assert(void 0 !== ju, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Eu)}`);
        const uu = "text" === fu.type && fu.wordCharsOnly;
        return (0, bu.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, bu.jsx)(Gu.d, {
            className: "ShopItemUserInputText",
            placeholderText: lu(fu.placeholderText),
            defaultValue: ju,
            domRef: qu,
            onValueChange: (Eu, ju) => {
              !0 === uu && (Eu = (0, zs.lb)(Eu)), qu.current.value = Eu, Uu(Eu)
            },
            onEnter: Zu,
            type: fu.type
          }, (null !== (Cu = fu.initialValue) && void 0 !== Cu ? Cu : "") + (null !== (cu = fu.placeholderText) && void 0 !== cu ? cu : ""))
        })
      }
      if ("dropdown" === fu.type) {
        console.assert(void 0 !== ju, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Eu)}`);
        const uu = fu.autoSubmit;
        return (0, bu.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, bu.jsx)(vE.c, {
            options: fu.dropdownOptions.map((uu => (0, ts.g)(uu))),
            value: ju,
            onChange: Eu => {
              let {
                value: ju
              } = Eu;
              Uu(ju), uu && Zu(ju)
            }
          })
        })
      }
      return "player" === fu.type ? (0, bu.jsx)(GZ, {
        userInput: fu,
        currInput: ju,
        updateInput: Uu
      }) : "color" === fu.type ? (0, bu.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, bu.jsx)("input", {
          type: "color",
          value: ju,
          onChange: uu => {
            Uu(uu.target.value)
          }
        })
      }) : null
    }

    function GZ(uu) {
      let {
        userInput: Eu,
        currInput: ju,
        updateInput: su
      } = uu;
      const Uu = (0, rE.f)("players"),
        Zu = (0, rE.f)("hiddenPlayerNames"),
        Xu = (0, ts.j)(Uu.ids, Uu.localId, Eu);
      return (0, bu.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, bu.jsx)(vE.c, {
          options: Xu.map((uu => {
            const {
              name: Eu
            } = Uu.byId[uu];
            return {
              value: uu,
              label: null === Eu ? "" : (0, ys.e)(Eu, Zu)
            }
          })),
          value: ju,
          onChange: uu => {
            let {
              value: Eu
            } = uu;
            su(Eu)
          }
        })
      })
    }

    function pZ(uu) {
      let {
        ids: Eu
      } = uu;
      return Eu
    }

    function wZ(uu) {
      let {
        localId: Eu
      } = uu;
      return Eu
    }

    function JZ(uu) {
      let {
        iconName: Eu
      } = uu;
      return gu.gameBridge.lookup("isItemName", Eu) ? (0, bu.jsx)(Hs.d, {
        itemName: Eu,
        amount: 1
      }) : (0, bu.jsx)(lu.e, {
        name: Eu,
        className: "2x"
      })
    }
    var dZ = ju(1687);
    const aZ = (0, ju(1461).i)((uu => uu.PadLobbyShortcuts)),
      PZ = (0, su.lazy)((() => Promise.resolve().then((() => ju(4842))).then((uu => ({
        default: uu.Lobbyleaderboard
      }))))),
      oZ = (0, su.lazy)((() => ju.e(223).then((() => ju(41300))).then((uu => ({
        default: uu.LobbyManageView
      })))));

    function kZ(uu) {
      let {
        show: Eu
      } = uu;
      return Eu ? (0, bu.jsx)(mZ, {}) : null
    }

    function mZ() {
      const uu = (0, EU.b)();
      return (0, bu.jsxs)(bu.Fragment, {
        children: [(0, bu.jsx)(aZ, {}), (0, bu.jsxs)(su.Suspense, {
          fallback: (0, bu.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, bu.jsx)(pu.b, {})
          }),
          children: [uu && (0, bu.jsx)(oZ, {
            leaderboard: (0, bu.jsx)(PZ, {})
          }), !uu && (0, bu.jsx)(PZ, {})]
        })]
      })
    }
    var vZ = ju(1611),
      KZ = ju(3195),
      VZ = ju(1779),
      rZ = ju(3231),
      QZ = ju(2817),
      iZ = ju(1555),
      WZ = ju(1510),
      SZ = ju(3175),
      IZ = ju(3188),
      FZ = ju(2454);
    const BZ = "storeRecentGiftRecipients",
      LZ = new Map;

    function tZ() {
      try {
        const uu = Cj.k.getItem(BZ);
        return Array.isArray(uu) ? uu.filter((uu => "string" === typeof(null === uu || void 0 === uu ? void 0 : uu.name) && uu.name.length > 0)).map((uu => ({
          name: uu.name,
          cosmetics: uu.cosmetics && "object" === typeof uu.cosmetics ? uu.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function xZ(uu) {
      var Eu;
      const [ju, Uu] = (0, su.useState)(""), [Zu, Xu] = (0, su.useState)("search"), [lu, qu] = (0, su.useState)(null), [fu, Cu] = (0, su.useState)(null), bu = (0, su.useRef)(null), cu = (0, su.useRef)(null);
      (0, su.useEffect)((() => () => {
        bu.current && clearTimeout(bu.current)
      }), []);
      const Nu = null !== (Eu = null === lu || void 0 === lu ? void 0 : lu.name) && void 0 !== Eu ? Eu : null;

      function Ou() {
        bu.current && (clearTimeout(bu.current), bu.current = null)
      }(0, su.useEffect)((() => {
        if (null === Nu || uu === ou.NULL_USER_CONTEXT) return;
        const Eu = Nu.toLowerCase();
        if (Eu === uu.getPlayerName().toLowerCase()) return void Cu({
          name: Nu,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const ju = LZ.get(Eu);
        if (ju) return void Cu({
          name: Nu,
          result: ju
        });
        let su = !1;
        return async function(uu, Eu) {
          try {
            const ju = await (0, ou.postJsonWithMetricsCookiesAndJsonResponse)(`${YE.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Eu
            }, {
              retries: 1
            }, uu.getMetricsCookies());
            if ("boolean" !== typeof(null === ju || void 0 === ju ? void 0 : ju.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ju)}`);
            return ju
          } catch (ju) {
            return console.error("Failed to look up gift recipient:", ju), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(uu, Nu).catch((uu => (console.error("Gift recipient lookup failed:", uu), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((uu => {
          !0 !== uu.giftRecipientFound && "store:giftRecipientLookupFailed" === uu.giftRecipientError || LZ.set(Eu, uu), su || Cu({
            name: Nu,
            result: uu
          })
        })), () => {
          su = !0
        }
      }), [Nu, uu]);
      const Yu = (0, su.useMemo)((() => {
        const uu = ju.trim();
        if (!uu) return {
          status: "none"
        };
        if (!lu || lu.name !== uu || (null === fu || void 0 === fu ? void 0 : fu.name) !== lu.name) return {
          status: "pending",
          name: uu
        };
        const Eu = fu.result;
        return !1 === Eu.giftRecipientFound ? {
          status: "error",
          name: lu.name,
          error: Eu.giftRecipientError
        } : {
          status: "found",
          name: Eu.giftRecipientName,
          ownedPacks: Eu.giftRecipientOwnedPacks,
          hasSuperRank: Eu.giftRecipientHasSuperRank,
          isSubscriber: Eu.giftRecipientIsSubscriber
        }
      }), [ju, lu, fu]);
      (0, su.useEffect)((() => {
        "found" === Yu.status && "typed" === (null === lu || void 0 === lu ? void 0 : lu.source) && cu.current !== Yu.name && (cu.current = Yu.name, (0, EE.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Yu, lu]);
      const hu = (null === fu || void 0 === fu ? void 0 : fu.name) === (null === lu || void 0 === lu ? void 0 : lu.name) ? null === fu || void 0 === fu ? void 0 : fu.result : null,
        Du = !0 === (null === hu || void 0 === hu ? void 0 : hu.giftRecipientFound) ? hu.giftRecipientCosmetics : null;
      return {
        query: ju,
        via: Zu,
        recipient: Yu,
        recipientCosmetics: Du,
        type: function(uu) {
          Uu(uu), Xu("search"), Ou();
          const Eu = uu.trim();
          Eu ? bu.current = setTimeout((() => {
            qu({
              name: Eu,
              source: "typed"
            })
          }), 400) : qu(null)
        },
        choose: function(uu, Eu) {
          Ou(), Uu(uu), Xu("typed" === Eu ? "search" : "prefilled" === Eu ? "prefilled" : "suggestion"), qu({
            name: uu,
            source: Eu
          }), "typed" !== Eu && "prefilled" !== Eu && (0, EE.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Eu
          })
        },
        clear: function() {
          Ou(), Uu(""), Xu("search"), qu(null)
        },
        recordGift: function(uu, Eu) {
          ! function(uu) {
            LZ.delete(uu.toLowerCase())
          }(uu), Cu((ju => {
            if (!ju || ju.name.toLowerCase() !== uu.toLowerCase() || !0 !== ju.result.giftRecipientFound || "superRank" === Eu) return ju;
            const su = ju.result.giftRecipientOwnedPacks;
            return {
              ...ju,
              result: {
                ...ju.result,
                giftRecipientOwnedPacks: su.includes(Eu) ? su : [...su, Eu]
              }
            }
          }))
        }
      }
    }
    var TZ = ju(2447),
      HZ = ju(4844),
      AZ = ju(257),
      nZ = ju(3290);
    const yZ = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var zZ = ju(2393),
      RZ = ju(628),
      uX = ju(2479),
      EX = ju(2716);

    function jX(uu) {
      let {
        cosmetics: Eu
      } = uu;
      return (0, bu.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, bu.jsx)(uX.d, {
          cosmetics: Eu
        })
      })
    }

    function sX(uu, Eu) {
      var ju, su;
      const Uu = null !== (ju = uu.friend) && void 0 !== ju ? ju : {
        isError: !1,
        name: uu.name,
        ranks: [],
        cosmetics: null !== (su = uu.cosmetics) && void 0 !== su ? su : {},
        nameColour: RZ.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return Eu ? {
        ...Uu,
        cosmetics: Eu
      } : Uu
    }

    function UX(uu) {
      let {
        pending: Eu
      } = uu;
      return (0, bu.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Eu && (0, bu.jsx)(pu.b, {})
      })
    }

    function ZX(uu) {
      var Eu;
      let {
        selfName: ju,
        giftRecipient: Uu,
        suggestionsVersion: qu,
        pulseSignal: Cu,
        disabled: cu
      } = uu;
      const {
        t: Nu
      } = (0, Xu.A)(), Ou = (0, Lu.m)(), Yu = (0, su.useRef)(null), hu = (0, su.useRef)(null), {
        query: gu,
        via: Mu,
        recipient: eu,
        recipientCosmetics: pu
      } = Uu, wu = (0, FZ.n)(gu), Ju = (0, su.useMemo)((() => {
        const uu = Du.featureFlags.useSocialFeatures ? Ou.friends.filter((uu => !uu.isError)) : [];
        return (0, FZ.i)({
          onlineFriends: (0, Lu.f)(uu),
          recentRecipients: tZ(),
          friends: uu,
          selfName: ju,
          max: 8
        })
      }), [Ou.friends, ju, qu]), du = gu.trim().toLowerCase(), au = "search" !== Mu && du ? Ju.find((uu => uu.name.toLowerCase() === du)) : void 0, Pu = au && "prefilled" === Mu ? [au, ...Ju.filter((uu => uu !== au))] : Ju, ou = "" !== du && !au, ku = ou ? gu : "", mu = Pu.length > 0;
      (0, su.useEffect)((() => {
        Yu.current && Yu.current.value !== ku && (Yu.current.value = ku)
      }), [ku]), (0, su.useEffect)((() => {
        Yu.current && (Yu.current.disabled = cu)
      }), [cu, Cu]);
      const vu = (0, su.useRef)(0);

      function Vu() {
        "self" !== wu && (0, EE.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Uu.clear()
      }

      function ru(uu) {
        var Eu, ju;
        if (cu) return;
        if (" " === uu.key || "Enter" === uu.key) return uu.preventDefault(), void uu.currentTarget.click();
        const su = Array.from(null !== (Eu = null === (ju = hu.current) || void 0 === ju ? void 0 : ju.querySelectorAll("[role=radio]")) && void 0 !== Eu ? Eu : []),
          Uu = su.indexOf(uu.currentTarget);
        let Zu;
        "ArrowRight" === uu.key || "ArrowDown" === uu.key ? Zu = su[(Uu + 1) % su.length] : "ArrowLeft" === uu.key || "ArrowUp" === uu.key ? Zu = su[(Uu - 1 + su.length) % su.length] : "Home" === uu.key ? Zu = su[0] : "End" === uu.key && (Zu = su[su.length - 1]), Zu && (uu.preventDefault(), Zu.focus(), Zu.click())
      }(0, su.useEffect)((() => {
        var uu;
        Cu > vu.current && !cu && (vu.current = Cu, null === (uu = Yu.current) || void 0 === uu || uu.focus())
      }), [Cu, cu]);
      const Qu = "self" === wu,
        iu = null !== (Eu = null === au || void 0 === au ? void 0 : au.name) && void 0 !== Eu ? Eu : null,
        Wu = "error" === eu.status ? eu.error : null,
        Su = "store:giftRecipientLookupFailed" === Wu;
      return (0, bu.jsxs)("div", {
        className: Zu()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: cu,
          StoreRecipientStripNoChips: !mu
        }),
        children: [(0, bu.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Nu("store:buyingFor")
        }), (0, bu.jsxs)("div", {
          ref: hu,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Nu("store:whoIsItFor"),
          children: [(0, bu.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Qu,
            tabIndex: cu || !Qu && null !== iu ? -1 : 0,
            className: Zu()("StoreRecipientMe", {
              StoreRecipientChecked: Qu
            }),
            onClick: () => {
              cu || Vu()
            },
            onKeyDown: ru,
            children: [(0, bu.jsx)(lu.e, {
              name: "user"
            }), " ", Nu("store:me")]
          }), mu && (0, bu.jsx)("div", {
            className: "StoreRecipientChips",
            children: Pu.map((uu => {
              const Eu = uu === au;
              return (0, bu.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Eu,
                tabIndex: !cu && Eu ? 0 : -1,
                title: uu.name,
                className: Zu()("StoreRecipientChip", {
                  StoreRecipientChecked: Eu
                }),
                onClick: () => {
                  cu || function(uu) {
                    "gift" !== wu && (0, EE.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Uu.choose(uu.name, uu.kind)
                  }(uu)
                },
                onKeyDown: ru,
                children: (0, bu.jsx)(EX.f, {
                  playerSocialPreview: sX(uu, Eu ? pu : null),
                  opensProfileCard: !1,
                  isFriend: null !== uu.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== uu.friend,
                  status: null === uu.friend ? null : void 0,
                  trailing: Eu ? (0, bu.jsx)(UX, {
                    pending: "pending" === eu.status
                  }) : void 0
                })
              }, uu.name)
            }))
          })]
        }), (0, bu.jsxs)("div", {
          className: Zu()("StoreRecipientSearch", {
            StoreRecipientChecked: ou,
            StoreRecipientSearchPulse: Cu > 0 && !ou,
            StoreRecipientSearchError: null !== Wu && !Su
          }),
          onClick: () => {
            var uu;
            null === (uu = Yu.current) || void 0 === uu || uu.focus()
          },
          children: [ou && "found" === eu.status && pu && (0, bu.jsx)(jX, {
            cosmetics: pu
          }), !(ou && "found" === eu.status && pu) && (0, bu.jsx)(lu.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, bu.jsx)(Gu.d, {
            className: "StoreRecipientSearchInput",
            domRef: Yu,
            placeholderText: Nu("store:searchName"),
            defaultValue: ku,
            maxLength: Ku.g,
            onValueChange: function(uu) {
              "gift" !== wu && uu.trim() && (0, EE.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Uu.type(uu)
            },
            onEnter: () => {
              var uu;
              const Eu = null === (uu = Yu.current) || void 0 === uu ? void 0 : uu.value.trim();
              Eu && Uu.choose(Eu, "typed")
            },
            blurOnEnter: !0
          }), ou && (0, bu.jsx)(UX, {
            pending: "pending" === eu.status
          }), ou && (0, bu.jsx)("div", {
            ...(0, fu.ib)({
              disabled: cu
            }),
            "aria-label": Nu("store:clearRecipient"),
            title: Nu("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: uu => {
              uu.stopPropagation(), cu || Vu()
            },
            children: (0, bu.jsx)(lu.e, {
              name: "xmark"
            })
          })]
        }, Cu), Wu && (0, bu.jsx)("div", {
          className: Zu()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Su
          }),
          role: "status",
          children: Nu(Wu)
        })]
      })
    }
    var XX = ju(2440),
      lX = ju(2357),
      qX = ju(3779),
      fX = ju(3298),
      CX = ju(2401);
    const bX = ju.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function cX() {
      (0, CX.i)(bX, {
        lowPriority: !1
      })
    }

    function NX(uu) {
      let {
        onBack: Eu,
        cta: ju,
        recipient: Uu,
        afterCta: Zu
      } = uu;
      const {
        t: qu
      } = (0, Xu.A)(), [Cu, cu] = (0, su.useState)("starting"), Nu = (0, su.useRef)(null), Ou = (0, TE.c)(), Yu = (0, su.useRef)(null), hu = (0, su.useCallback)((() => {
        const uu = Nu.current;
        null !== uu.error && uu.load();
        const Eu = uu.play();
        Yu.current = Eu, Eu.catch((uu => {
          (0, qX.d)("Failed to play Super Rank video", uu), Ou.current && Yu.current === Eu && cu("failed")
        }))
      }), [Ou]);
      return (0, su.useEffect)((() => {
        const uu = Nu.current;
        let Eu;

        function ju() {
          clearTimeout(Eu), Eu = setTimeout(hu, 3e3)
        }
        return hu(), uu.addEventListener("ended", ju), () => {
          clearTimeout(Eu), uu.removeEventListener("ended", ju)
        }
      }), [hu]), (0, bu.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, bu.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, bu.jsx)(fu.d, {
            className: "StoreDetailBackButton",
            onClick: Eu,
            padBack: !0,
            children: qu("general:back")
          }), (0, bu.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, bu.jsx)(lu.e, {
              name: "bolt"
            }), " ", qu("homePage:superRank")]
          }), Uu]
        }), (0, bu.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, bu.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, bu.jsx)("video", {
              ref: Nu,
              src: `${YE.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: bX,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Cu,
              onPlaying: () => {
                cu("playing")
              },
              onError: () => {
                cu("failed")
              }
            }), ("failed" === Cu || "loading" === Cu) && (0, bu.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, bu.jsx)(fu.f, {
                ariaLabel: qu("general:play"),
                loading: "loading" === Cu,
                onClick: () => {
                  cu("loading"), hu()
                },
                touchPressOn: "pointerup",
                children: (0, bu.jsx)(lu.e, {
                  name: "play"
                })
              })
            })]
          }), (0, bu.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, bu.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, bu.jsx)(fX.b, {})
            }), (0, bu.jsxs)("div", {
              className: "StoreTileActions",
              children: [ju, Zu]
            })]
          })]
        })]
      })
    }
    var OX = ju(2738),
      YX = ju(3733),
      hX = ju(3269),
      DX = ju(3276);
    const gX = [RZ.s.yellow, RZ.s.green, RZ.s.aqua, RZ.s.blue, RZ.s.purple, RZ.s.red];

    function MX(uu) {
      return "needsRecipient" === uu || "lookingUp" === uu || "gift" === uu || "recipientOwns" === uu || "recipientSharesOwned" === uu || "recipientSubscribed" === uu
    }

    function eX(uu) {
      const {
        onKeyDown: Eu,
        ...ju
      } = (0, fu.ib)();
      return {
        ...ju,
        "aria-label": uu,
        onKeyDown: uu => {
          uu.target === uu.currentTarget && (null === Eu || void 0 === Eu || Eu(uu))
        }
      }
    }

    function GX(uu) {
      let {
        text: Eu
      } = uu;
      return (0, bu.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Eu).map(((uu, Eu) => (0, bu.jsx)("span", {
          style: {
            color: gX[Eu % gX.length]
          },
          children: uu
        }, Eu)))
      })
    }
    const pX = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function wX(uu) {
      let {
        state: Eu,
        item: ju,
        price: su,
        busy: Uu,
        highlight: qu = !1,
        onAct: Cu,
        onNeedRecipient: cu,
        onLogin: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), Yu = "superRank" === ju ? ru.g.product.days : null, hu = uu => null === Yu ? Ou(uu ? "general:gift" : "general:buy") : Ou(uu ? "store:giftDays" : "store:buyDays", {
        days: Yu
      }), Du = (uu, Eu) => {
        const ju = (0, bu.jsxs)(bu.Fragment, {
          children: [null === uu && (0, bu.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== uu && (0, bu.jsx)("span", {
            className: "StoreCtaLabel",
            title: uu,
            children: uu
          })]
        });
        return null !== Yu ? (0, bu.jsxs)(bu.Fragment, {
          children: [Eu && (0, bu.jsx)("span", {
            className: "StoreCtaIcon",
            children: Eu
          }), ju, (0, bu.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, bu.jsx)(lX.d, {
              amount: su
            })]
          })]
        }) : (0, bu.jsxs)(bu.Fragment, {
          children: [(0, bu.jsxs)("span", {
            className: "StoreCtaLead",
            children: [ju, "\xb7"]
          }), (0, bu.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Eu, (0, bu.jsx)(lX.d, {
              amount: su
            })]
          })]
        })
      };
      let gu;
      switch (Eu) {
        case "pending":
          gu = (0, bu.jsx)(fu.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Du(null)
          });
          break;
        case "login":
          gu = (0, bu.jsx)(fu.p, {
            className: "StoreCtaButton",
            onClick: Nu,
            children: Du(hu(!1))
          });
          break;
        case "owned":
          gu = (0, bu.jsx)(fu.i, {
            className: "StoreCtaButton",
            onClick: () => {
              Ju.d.set({
                openEverythingMenuName: DE.o.CUSTOMISATION
              })
            },
            children: (0, bu.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, bu.jsx)(lu.e, {
                name: "shirt"
              }), " ", Ou("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          gu = (0, bu.jsx)(fu.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, bu.jsx)("span", {
              className: "StoreCtaLabel",
              children: Ou(pX[Eu])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          gu = (0, bu.jsx)(fu.p, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Eu || null === su,
            loading: "lookingUp" === Eu || Uu,
            onClick: Cu,
            analyticsClick: {
              id: "store.gift",
              value: ju
            },
            children: Du(hu(!0), FZ.d)
          });
          break;
        case "buy":
        case "recharge":
          gu = (0, bu.jsx)(fu.p, {
            className: "StoreCtaButton",
            loading: Uu,
            disabled: null === su,
            onClick: Cu,
            analyticsClick: {
              id: "store.buy",
              value: ju
            },
            children: Du(hu(!1))
          })
      }
      return (0, bu.jsx)("div", {
        className: Zu()("StoreCta", {
          StoreCtaHighlight: qu,
          StoreCtaLabelFirst: null !== Yu
        }),
        onClick: uu => {
          uu.stopPropagation(), "needsRecipient" === Eu && cu()
        },
        children: gu
      })
    }

    function JX() {
      const {
        t: uu
      } = (0, Xu.A)();
      return (0, bu.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, bu.jsxs)("li", {
          children: [(0, bu.jsx)(lu.e, {
            name: "check"
          }), (0, bu.jsx)(GX, {
            text: uu("store:colourfulNames")
          })]
        }), (0, bu.jsxs)("li", {
          children: [(0, bu.jsx)(lu.e, {
            name: "check"
          }), uu("store:perkCapes")]
        }), (0, bu.jsxs)("li", {
          children: [(0, bu.jsx)(lu.e, {
            name: "check"
          }), uu("store:perkNoAdverts")]
        }), (0, bu.jsxs)("li", {
          children: [(0, bu.jsx)(lu.e, {
            name: "check"
          }), uu("store:perkFriends", {
            count: (0, Ru.d)(["super"])
          })]
        })]
      })
    }

    function dX(uu) {
      let {
        daysLeft: Eu,
        totalDays: ju,
        urgent: su
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)(), lu = ju > 0 ? Math.min(1, Math.max(.03, Eu / ju)) : 1;
      return (0, bu.jsxs)("div", {
        className: Zu()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: su
        }),
        children: [(0, bu.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Eu ? Uu("store:oneDayLeft") : Uu("store:daysLeft", {
            days: Eu
          })
        }), (0, bu.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, bu.jsx)("i", {
            style: {
              width: 100 * lu + "%"
            }
          })
        })]
      })
    }

    function aX(uu) {
      var Eu;
      let {
        state: ju,
        urgent: su,
        daysLeft: Uu,
        totalDays: qu,
        recipientHasSuperRank: fu,
        busy: Cu,
        highlight: cu,
        onOpen: Nu,
        onAct: Ou,
        onNeedRecipient: Yu,
        onLogin: hu
      } = uu;
      const {
        t: Du
      } = (0, Xu.A)(), gu = MX(ju), {
        days: Mu
      } = ru.g.product, eu = Du("store:recipientHasSuperRank", {
        giftDays: Mu
      }), Gu = null === (Eu = yu("subscribed" === ju)) || void 0 === Eu ? void 0 : Eu.text;
      return (0, bu.jsxs)("div", {
        className: Zu()("StoreTile StoreSuperRankTile", {
          StoreTileGift: gu,
          StoreSuperRankTileUrgent: "recharge" === ju && su,
          StoreSuperRankTileWithChip: fu,
          StoreSuperRankTileGiftReady: "gift" === ju
        }),
        ...eX(Du("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: cX,
        onFocus: cX,
        onClick: Nu,
        children: [(0, bu.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${zZ.f})`
          }
        }), gu && (0, bu.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, bu.jsxs)("div", {
          className: "StoreTileContent",
          children: [fu && (0, bu.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: eu,
            children: eu
          }), (0, bu.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, bu.jsx)(lu.e, {
              name: "bolt"
            }), " ", Du("homePage:superRank")]
          }), gu && (0, bu.jsx)("div", {
            className: "StoreTilePitch",
            children: Du("store:giftPitch", {
              days: Mu
            })
          }), "recharge" === ju && (0, bu.jsx)(dX, {
            daysLeft: Uu,
            totalDays: qu,
            urgent: su
          }), Gu && (0, bu.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, bu.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Gu
            })
          }), (0, bu.jsx)(JX, {}), (0, bu.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, bu.jsx)(wX, {
              state: ju,
              item: "superRank",
              price: ru.g.price,
              busy: Cu,
              highlight: cu,
              onAct: Ou,
              onNeedRecipient: Yu,
              onLogin: hu
            }), "needsRecipient" === ju && (0, bu.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Du("store:pickRecipientFirst")
            }), "recharge" === ju && su && (0, bu.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Uu ? Du("store:endsInOneDay") : Du("store:endsInDays", {
                days: Uu
              })
            })]
          })]
        })]
      })
    }
    const PX = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function oX(uu) {
      var Eu;
      let {
        pack: ju,
        state: Uu,
        busy: qu,
        onOpen: fu,
        onAct: Cu,
        onNeedRecipient: cu,
        onLogin: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), Yu = vZ.e[ju], hu = SZ.k[ju], Du = (0, zZ.l)(ju), gu = (0, su.useRef)(null);
      (0, hX.k)(ju, gu);
      const Mu = MX(Uu),
        eu = null !== (Eu = Yu.displayName) && void 0 !== Eu ? Eu : ju,
        Gu = (0, YX.b)((() => {
          (0, OX.f)();
          const uu = (0, hX.e)(ju);
          void 0 !== uu && (0, CX.i)((0, hX.c)(uu))
        })),
        [pu] = (0, su.useState)(nZ.h);
      return (0, bu.jsxs)("div", {
        className: Zu()("StoreTile StorePackTile", PX[Yu.tier], {
          StorePackTileOwned: "owned" === Uu,
          StorePackTileRecipientOwns: "recipientOwns" === Uu,
          StoreTileGift: Mu
        }),
        ...eX(eu),
        ref: gu,
        "data-store-item": ju,
        onClick: fu,
        onPointerMove: uu => {
          "mouse" !== uu.pointerType || 0 === uu.movementX && 0 === uu.movementY || pu || Gu.start()
        },
        onPointerLeave: Gu.cancel,
        children: [hu && (0, bu.jsx)(hu, {}), (0, bu.jsx)("div", {
          className: "StorePackCharacters",
          children: Du.map((uu => (0, bu.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,zZ.g)(uu)})`
            }
          }, uu)))
        }), (0, bu.jsx)("div", {
          className: "StoreTileScrim"
        }), Mu && (0, bu.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, bu.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, bu.jsx)("div", {
            className: "StoreTileTitle",
            children: eu
          }), (0, bu.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, bu.jsx)(DX.b, {
              tier: Yu.tier
            }), " \xb7 ", Ou("store:itemCount", {
              count: (0, XX.c)(ju)
            }), "owned" === Uu && (0, bu.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, bu.jsx)(lu.e, {
                name: "check"
              }), " ", Ou("general:owned")]
            })]
          }), (0, bu.jsx)(wX, {
            state: Uu,
            item: ju,
            price: (0, ru.d)(ju),
            busy: qu,
            onAct: Cu,
            onNeedRecipient: cu,
            onLogin: Nu
          })]
        })]
      })
    }
    var kX = ju(3239),
      mX = ju(1608),
      vX = ju(1517),
      KX = ju(3761);

    function VX() {
      return (0, bu.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var rX = ju(1398),
      QX = ju(1614),
      iX = ju(34583);

    function WX(uu) {
      let {
        character: Eu,
        drawn: ju,
        onDrawn: Uu
      } = uu;
      const Xu = (0, su.useRef)(null),
        lu = (0, iX.g)(Eu);
      return (0, bu.jsx)("div", {
        className: Zu()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: ju
        }),
        children: (0, bu.jsx)(su.Suspense, {
          fallback: null,
          children: (0, bu.jsx)(OX.c, {
            ref: Xu,
            framing: "store",
            turntableFromYaw: ju ? lu.yaw : null,
            onReady: () => {
              var uu, ju;
              null === (uu = Xu.current) || void 0 === uu || uu.setOrbit(lu), null === (ju = Xu.current) || void 0 === ju || ju.setAllCosmetics(QX.d[Eu].cosmetics)
            },
            onDrawn: Uu
          })
        })
      })
    }
    const SX = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      IX = new Set(["wildSpirits"]);

    function FX(uu) {
      var Eu;
      let {
        tile: ju,
        design: Uu,
        canGoLive: qu,
        live: fu,
        busy: Cu,
        highlight: cu,
        onLiveStart: Nu,
        onLiveEnd: Ou,
        onOpen: Yu,
        onAct: hu,
        onNeedRecipient: Du,
        onLogin: gu
      } = uu;
      const {
        t: Mu
      } = (0, Xu.A)(), {
        pack: eu,
        state: Gu
      } = ju, pu = vZ.e[eu], wu = (0, vZ.i)(eu), Ju = (0, zZ.j)(eu), du = SZ.k[Ju], au = IX.has(Ju), {
        tier: Pu
      } = pu, ou = "legendary" === Pu || "mythic" === Pu, ku = (0, su.useRef)(null);
      (0, rX.d)(ku, "epic" === Pu || ou || au);
      const [mu, Ku] = (0, su.useState)(!1);
      return !fu && mu && Ku(!1), (0, bu.jsxs)("div", {
        ref: ku,
        className: Zu()("StoreCharacterCard", `StoreCharacterCard${Uu}`, SX[Pu], {
          StoreCharacterCardOwned: "owned" === Gu || "recipientOwns" === Gu,
          StoreCharacterCardGift: MX(Gu),
          StoreCharacterCardItem: void 0 === wu
        }),
        onPointerMove: uu => {
          "mouse" !== uu.pointerType || 0 === uu.movementX && 0 === uu.movementY || !qu || fu || void 0 === wu || Nu()
        },
        onPointerLeave: Ou,
        children: [(0, bu.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: du && (0, bu.jsx)(du, {
            simple: !0
          })
        }), ou && (0, bu.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, bu.jsxs)(vu.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, mX.f)({
            kind: "pack",
            pack: eu
          }),
          "data-store-item": eu,
          onClick: uu => {
            (0, vX.b)(uu) && (uu.preventDefault(), Yu())
          },
          children: [(0, bu.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, bu.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, bu.jsx)("div", {
              className: Zu()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: mu
              }),
              style: {
                backgroundImage: `url(${(0,zZ.t)(eu)})`
              }
            }), fu && void 0 !== wu && (0, bu.jsx)(WX, {
              character: wu,
              drawn: mu,
              onDrawn: () => {
                Ku(!0)
              }
            })]
          }), (0, bu.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Eu = pu.displayName) && void 0 !== Eu ? Eu : eu
          }), (0, bu.jsx)(DX.b, {
            tier: Pu,
            className: "StoreCharacterTier"
          })]
        }), (0, bu.jsx)("div", {
          className: "StoreCharacterScrim"
        }), au && (0, bu.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, bu.jsx)(VX, {})
        }), "owned" === Gu && (0, bu.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Mu("general:owned"),
          "aria-label": Mu("general:owned"),
          children: (0, bu.jsx)(lu.e, {
            name: "check"
          })
        }), (0, bu.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, bu.jsx)(wX, {
            state: Gu,
            item: eu,
            price: (0, ru.d)(eu),
            busy: Cu,
            highlight: cu,
            onAct: hu,
            onNeedRecipient: Du,
            onLogin: gu
          })
        })]
      })
    }

    function BX(uu) {
      let {
        tiles: Eu,
        busy: ju,
        highlightItem: Uu,
        onOpen: Zu,
        onAct: Xu,
        onNeedRecipient: lu,
        onLogin: qu
      } = uu;
      const fu = (0, KX.u)("storeCharacterCardFoil"),
        Cu = (0, KX.u)("storeCharacterCardSpotlight"),
        cu = fu ? "Foil" : Cu ? "Spotlight" : "Showcase",
        [Nu] = (0, su.useState)(nZ.h),
        [Ou, Yu] = (0, su.useState)(null);
      return (0, bu.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Eu.map((uu => (0, bu.jsx)(FX, {
          tile: uu,
          design: cu,
          canGoLive: !Nu,
          live: Ou === uu.pack,
          busy: ju,
          highlight: Uu === uu.pack,
          onLiveStart: () => {
            Yu(uu.pack)
          },
          onLiveEnd: () => {
            Yu((Eu => Eu === uu.pack ? null : Eu))
          },
          onOpen: () => {
            Zu(uu.pack)
          },
          onAct: () => {
            Xu(uu.pack)
          },
          onNeedRecipient: lu,
          onLogin: () => {
            qu(uu.pack)
          }
        }, uu.pack)))
      })
    }
    var LX = ju(34590);

    function tX(uu) {
      let {
        title: Eu
      } = uu;
      return (0, bu.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, bu.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Eu
        })
      })
    }

    function xX(uu) {
      let {
        mountAtOnce: Eu,
        children: ju
      } = uu;
      const Uu = (0, su.useRef)(null),
        [Zu, Xu] = (0, su.useState)(Eu),
        lu = (0, LX.b)();
      return (0, su.useLayoutEffect)((() => {
        const uu = Uu.current;
        uu && uu.getBoundingClientRect().top < uu.parentElement.getBoundingClientRect().bottom && Xu(!0)
      }), []), Zu || lu ? (0, bu.jsx)(bu.Fragment, {
        children: ju
      }) : (0, bu.jsx)("div", {
        ref: Uu
      })
    }

    function TX(uu) {
      let {
        layout: Eu,
        mountAtOnce: ju,
        bundleGift: su,
        superRankTotalDays: Uu,
        busy: Zu,
        highlightItem: lu,
        onOpen: qu,
        onAct: fu,
        onNeedRecipient: Cu,
        onLogin: cu,
        dailyDropTile: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), Yu = Eu.packs.filter((uu => void 0 === (0, vZ.i)(uu.pack) && !(0, vZ.o)(uu.pack))), hu = Eu.packs.filter((uu => void 0 !== (0, vZ.i)(uu.pack))), Du = Eu.packs.filter((uu => (0, vZ.o)(uu.pack)));
      return (0, bu.jsxs)(bu.Fragment, {
        children: [(0, bu.jsx)(kX.e, {
          className: "StoreSuperGems",
          gift: su,
          highlightSku: lu,
          leadingTile: Nu
        }), (0, bu.jsx)(tX, {
          title: Ou("store:rank")
        }), (0, bu.jsx)(aX, {
          state: Eu.superRank.state,
          urgent: Eu.superRank.urgent,
          daysLeft: Eu.superRankDaysLeft,
          totalDays: Uu,
          recipientHasSuperRank: Eu.recipientHasSuperRank,
          busy: Zu,
          highlight: "superRank" === lu,
          onOpen: () => {
            qu("superRank")
          },
          onAct: () => {
            fu("superRank")
          },
          onNeedRecipient: Cu,
          onLogin: () => {
            cu("superRank")
          }
        }), (0, bu.jsxs)(xX, {
          mountAtOnce: ju,
          children: [(0, bu.jsx)(tX, {
            title: Ou("store:bundles")
          }), (0, bu.jsx)("div", {
            className: "StorePackGrid",
            children: Yu.map((uu => (0, bu.jsx)(oX, {
              pack: uu.pack,
              state: uu.state,
              busy: Zu,
              onOpen: () => {
                qu(uu.pack)
              },
              onAct: () => {
                fu(uu.pack)
              },
              onNeedRecipient: Cu,
              onLogin: () => {
                cu(uu.pack)
              }
            }, uu.pack)))
          }), (0, bu.jsxs)(xX, {
            mountAtOnce: ju,
            children: [(0, bu.jsx)(tX, {
              title: Ou("store:characters")
            }), (0, bu.jsx)(BX, {
              tiles: hu,
              busy: Zu,
              highlightItem: lu,
              onOpen: qu,
              onAct: fu,
              onNeedRecipient: Cu,
              onLogin: cu
            }), Du.length > 0 && (0, bu.jsxs)(bu.Fragment, {
              children: [(0, bu.jsx)(tX, {
                title: Ou("store:premiumItems")
              }), (0, bu.jsx)(BX, {
                tiles: Du,
                busy: Zu,
                highlightItem: lu,
                onOpen: qu,
                onAct: fu,
                onNeedRecipient: Cu,
                onLogin: cu
              })]
            })]
          })]
        })]
      })
    }

    function HX(uu) {
      let {
        state: Eu,
        mode: ju,
        giftName: su,
        busy: Uu,
        highlight: Zu,
        purchaseError: lu,
        onBack: qu,
        onChooseRecipient: Cu,
        onAct: cu,
        onLogin: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Xu.A)(), Yu = yu("gift" !== ju);
      return (0, bu.jsx)(NX, {
        onBack: qu,
        recipient: "gift" === ju && (0, bu.jsxs)(bu.Fragment, {
          children: [su && (0, bu.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Ou("store:giftFor", {
              name: su
            }),
            children: [FZ.d, " ", Ou("store:giftFor", {
              name: su
            })]
          }), !su && (0, bu.jsxs)("div", {
            ...(0, fu.ib)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Cu,
            children: [FZ.d, " ", Ou("store:chooseRecipient")]
          })]
        }),
        cta: (0, bu.jsx)(wX, {
          state: Eu,
          item: "superRank",
          price: ru.g.price,
          busy: Uu,
          highlight: Zu,
          onAct: cu,
          onNeedRecipient: Cu,
          onLogin: Nu
        }),
        afterCta: (0, bu.jsxs)(bu.Fragment, {
          children: [Yu && (0, bu.jsx)("span", {
            className: "StoreTileNote",
            children: Yu.text
          }), (null === Yu || void 0 === Yu ? void 0 : Yu.manageUrl) && (0, bu.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: Yu.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: Ou("payments:manageSubscription")
          }), lu && (0, bu.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Ou(lu)
          })]
        })
      })
    }
    var AX = ju(141);
    const nX = AX.p("kind", [AX.H({
      kind: AX.v("refused"),
      heldTierId: AX.W(),
      until: AX.G()
    }), AX.H({
      kind: AX.v("refund"),
      tierId: AX.W(),
      refundedMs: AX.G(),
      forfeitedMs: AX.G(),
      premiumCurrency: AX.G()
    }), AX.H({
      kind: AX.v("none")
    })]);
    async function yX(uu) {
      const Eu = await (0, ou.postJsonWithMetricsCookiesAndJsonResponse)(`${YE.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: uu
      }, {
        retries: 1
      });
      return nX.parse(Eu)
    }
    var zX = ju(3213),
      RX = ju(3245);

    function ul(uu, Eu) {
      const ju = Math.max(1, Math.round(Eu / Wu.h));
      return [1 === ju ? `${uu}OneDay` : uu, {
        days: ju.toLocaleString()
      }]
    }

    function El(uu) {
      let {
        price: Eu
      } = uu;
      const {
        t: ju
      } = (0, Xu.A)();
      return (0, bu.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, bu.jsx)(JX, {}), (0, bu.jsx)("div", {
          className: "SmallTextLight",
          children: ju("payments:subscriptionRenewsMonthly", {
            price: Eu
          })
        }), (0, bu.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, bu.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: ju("homePage:termsOfService")
          }), (0, bu.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: ju("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function jl() {
      const uu = (0, Iu.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && uu && (0, Iu.subscriptionsSold)() ? (0, bu.jsx)(sl, {}) : null
    }

    function sl() {
      const {
        t: uu
      } = (0, Xu.A)(), {
        userContext: Eu
      } = (0, Ou.c)(), {
        purchaseUnderWay: ju,
        notice: Uu,
        subscribe: Zu
      } = (0, zX.d)(), [lu, qu] = (0, su.useState)(null), [Cu, cu] = (0, su.useState)(0), [Nu, Yu] = (0, su.useState)(!1), hu = (0, su.useRef)(!0), gu = Eu !== ou.NULL_USER_CONTEXT, Mu = null !== lu && lu.loadedFor === Eu ? lu.offer : null, eu = null === Uu || void 0 === Uu ? void 0 : Uu.pendingIntentId, Gu = (0, su.useRef)(eu);

      function pu() {
        cu((uu => uu + 1))
      }
      async function wu(uu) {
        Yu(!1), await Zu(uu), hu.current && pu()
      }
      if ((0, su.useEffect)((() => (hu.current = !0, () => {
          hu.current = !1
        })), []), (0, su.useEffect)((() => {
          void 0 !== Gu.current && void 0 === eu && pu(), Gu.current = eu
        }), [eu]), (0, su.useEffect)((() => {
          if (!gu) return;
          let uu = !1;
          return Yu(!1), async function() {
            const {
              offering: uu
            } = await (0, Au.getBillingClient)().getOfferings("superRankPage"), Eu = null === uu || void 0 === uu ? void 0 : uu.packages.find(KZ.isPricedPackage);
            return void 0 === Eu ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Eu,
              preview: await yX(Eu.productId)
            }
          }().catch((uu => (console.error("Billing: loading the Super Rank subscription or its preview failed:", uu), {
            kind: "loadFailed"
          }))).then((ju => {
            uu || qu((uu => "loadFailed" === ju.kind && (null === uu || void 0 === uu ? void 0 : uu.loadedFor) === Eu ? uu : {
              loadedFor: Eu,
              offer: ju
            }))
          })), () => {
            uu = !0
          }
        }), [Eu, gu, Cu]), null === Mu) return null;
      if ("loaded" !== Mu.kind) return (0, bu.jsx)(RX.i, {
        notice: {
          kind: "error",
          key: "unavailable" === Mu.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Ju,
        preview: du
      } = Mu;
      if ("refused" === du.kind) return (0, bu.jsx)(RX.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(du.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const au = (0, kX.i)(Ju),
        Pu = (0, Du.isMobileApp)() && (0, bu.jsx)(El, {
          price: au
        });
      if (Nu && "refund" === du.kind) {
        const {
          refundedMs: Eu,
          forfeitedMs: su,
          premiumCurrency: Uu
        } = du, Zu = su + (0 === Uu ? Eu : 0), [Xu, lu] = ul("payments:subscribeRefundsGemRank", Eu), [qu, Cu] = ul("payments:subscribeForfeitsGemRank", Zu);
        return (0, bu.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, bu.jsx)("div", {
            children: uu("payments:subscribeEndsGemRank")
          }), Uu > 0 && (0, bu.jsx)("div", {
            children: uu(Xu, {
              ...lu,
              amount: Uu.toLocaleString()
            })
          }), Zu > 0 && (0, bu.jsx)("div", {
            children: uu(qu, Cu)
          }), (0, bu.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, bu.jsx)(fu.i, {
              onClick: () => {
                Yu(!1)
              },
              children: uu("general:cancel")
            }), (0, bu.jsx)(fu.p, {
              onClick: () => {
                wu(Ju)
              },
              loading: ju,
              children: uu("payments:subscribeContinue", {
                price: au
              })
            })]
          }), Pu]
        })
      }
      return (0, bu.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, bu.jsx)(RX.i, {
          notice: Uu,
          className: "SmallTextBold"
        }), (0, bu.jsx)(RX.e, {
          className: "SmallTextBold"
        }), (0, bu.jsx)(fu.p, {
          onClick: () => {
            "refund" === du.kind ? Yu(!0) : wu(Ju)
          },
          disabled: void 0 !== eu,
          loading: ju,
          children: uu("payments:subscribeToSuperRank", {
            price: au
          })
        }), Pu]
      })
    }
    var Ul = ju(2693);

    function Zl(uu) {
      let {
        state: Eu,
        view: ju,
        claiming: Uu,
        onOpen: lu
      } = uu;
      const {
        t: Cu
      } = (0, Xu.A)(), cu = (0, su.useRef)(null), Nu = "ready" === ju.kind;
      (0, rX.d)(cu, Nu);
      const Ou = (0, nE.k)(Eu);
      return (0, bu.jsxs)("div", {
        ref: cu,
        className: Zu()("DailyDropTile", {
          DailyDropTileReady: Nu
        }),
        children: [Nu && (0, bu.jsx)(qu.d, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, bu.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Cu("dailyDrop:name")
        }), (0, bu.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, bu.jsx)(Ul.e, {
            className: "DailyDropTileBlock"
          }), (0, bu.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, bu.jsx)("span", {
              children: Cu("dailyDrop:collected", {
                count: Eu.collected.length,
                total: Eu.total
              })
            }), null !== Ou && (0, bu.jsx)("span", {
              className: "DailyDropTileOdds",
              children: Cu("dailyDrop:odds", {
                percent: Ou.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === ju.kind && (0, bu.jsx)(fu.p, {
          className: "DailyDropTileOpen",
          onClick: lu,
          loading: Uu,
          children: Cu("dailyDrop:open")
        }), "waiting" === ju.kind && (0, bu.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Cu("dailyDrop:nextIn", {
            count: ju.hours
          })
        })]
      })
    }
    var Xl = ju(2329);
    const ll = 32;

    function ql(uu) {
      let {
        worn: Eu,
        iZ: ju,
        WZ: Uu,
        className: qu
      } = uu;
      const {
        t: fu
      } = (0, Xu.A)(), Cu = (0, su.useRef)(null), [cu, Nu] = (0, su.useState)(null), [Ou, Yu] = (0, su.useState)(!1);
      async function hu() {
        var uu;
        const Eu = Cu.current;
        if (!Eu) return;
        const su = null === (uu = Eu.getDevTools()) || void 0 === uu ? void 0 : uu.canvas();
        let Zu = null;
        try {
          Zu = su ? function(uu) {
            if (0 === uu.width || 0 === uu.height) return null;
            const Eu = document.createElement("canvas");
            Eu.width = ll, Eu.height = ll;
            const ju = Eu.getContext("2d", {
              willReadFrequently: !0
            });
            if (!ju) return null;
            ju.drawImage(uu, 0, 0, ll, ll);
            const {
              data: su
            } = ju.getImageData(0, 0, ll, ll);
            for (let Uu = 3; Uu < su.length; Uu += 4)
              if (su[Uu] > 0) return uu.toDataURL("image/png");
            return null
          }(su) : null
        } catch (lu) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", lu)
        }
        null === Zu && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), Nu(null === Zu ? {
          kind: "head"
        } : {
          kind: "still",
          src: Zu
        }), Eu.updateCosmetic(ju, Uu);
        const Xu = new Promise((uu => {
          setTimeout(uu, 1e4)
        }));
        await Promise.race([Eu.ensureReadyForCapture(ju), Xu]).catch((uu => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", uu)
        })), Cu.current === Eu && Yu(!0)
      }
      return (0, bu.jsxs)("div", {
        className: Zu()("DailyDropRevealFigures", qu),
        children: [(0, bu.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, bu.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === cu || void 0 === cu ? void 0 : cu.kind) && (0, bu.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: cu.src,
              alt: "",
              draggable: !1
            }), "head" === (null === cu || void 0 === cu ? void 0 : cu.kind) && (0, bu.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, bu.jsx)(uX.d, {
                cosmetics: Eu
              })
            }), null === cu && (0, bu.jsx)(pu.b, {})]
          }), (0, bu.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: fu("dailyDrop:before")
          })]
        }), (0, bu.jsx)(lu.e, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, bu.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, bu.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, bu.jsx)("div", {
              className: Zu()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: Ou
              }),
              children: (0, bu.jsx)(su.Suspense, {
                fallback: null,
                children: (0, bu.jsx)(OX.c, {
                  ref: Cu,
                  onReady: () => {
                    var uu, ju;
                    null === (uu = Cu.current) || void 0 === uu || uu.resetCamera(), null === (ju = Cu.current) || void 0 === ju || ju.setAllCosmetics(Eu)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      hu()
                    }))
                  }
                })
              })
            }), !Ou && (0, bu.jsx)(pu.b, {})]
          }), (0, bu.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: fu("dailyDrop:after")
          })]
        })]
      })
    }
    var fl = ju(1906);
    const Cl = "dailyDropReminderAsked_";

    function bl(uu) {
      return async function(uu) {
        if (uu.remindersOn || (0, Ju.h)(Ju.d.get("gameState"))) return null;
        const Eu = await ou.userContextManager.getCurrentUserContext(),
          ju = Cl + Eu.whamm;
        if (null !== Cj.k.getItem(ju)) return null;
        const [su, Uu] = await Promise.all([(0, xE.h)().catch((uu => (console.error("Couldn't tell whether this device can take push notifications:", uu), null))), Nl()]);
        if (null === su && !Uu) return null;
        return {
          askedKey: ju,
          requester: su
        }
      }(uu).catch((uu => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", uu), null)))
    }

    function cl(uu, Eu) {
      Cj.k.setItem(uu.askedKey, !0), (0, nE.s)("daily_drop.remind", Eu ? "yes" : "no"), Eu && async function(uu) {
        const Eu = (0, nE.t)({
            remindersOn: !0
          }),
          ju = null === uu ? Promise.resolve() : uu(),
          [su, Uu] = await Promise.allSettled([Eu, ju]);
        "rejected" === su.status && console.error("Failed to turn on Lucky Skin Block reminders:", su.reason);
        "rejected" === Uu.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", Uu.reason);
        "rejected" !== su.status && "rejected" !== Uu.status || fl.f.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(uu.requester)
    }

    function Nl() {
      return (0, tE.b)().then((uu => uu.app + uu.browser + uu.msnPlay > 0), (uu => (console.error("Couldn't tell where push notifications reach this account:", uu), !0)))
    }
    const Ol = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      Yl = {
        opening: 900,
        shrinking: 700
      };

    function hl(uu) {
      let {
        drop: Eu,
        onClose: ju
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)(), {
        userContext: qu
      } = (0, Ou.c)(), {
        state: Cu,
        view: cu
      } = (0, nE.x)(), [Nu, Yu] = (0, su.useState)("closed"), [hu] = (0, su.useState)((() => ({
        ...qu.getPlayerCosmetics()
      }))), [Du] = (0, su.useState)((() => (0, nE.m)(Eu, hu))), [gu, Mu] = (0, su.useState)(!1), [eu, Gu] = (0, su.useState)(!1), [pu] = (0, su.useState)((() => null === Cu ? Promise.resolve(null) : bl(Cu))), [wu, du] = (0, su.useState)(null), au = (0, TE.c)(), {
        gameState: Pu
      } = (0, Ju.l)(["gameState"]);
      async function ou() {
        const uu = await pu;
        au.current && (null === uu ? ju() : (du(uu), Yu("remind")))
      }

      function ku(uu) {
        null !== wu && cl(wu, uu), ju()
      }(0, su.useEffect)((() => {
        const uu = Yl[Nu];
        if (void 0 === uu) return;
        const Eu = setTimeout((() => {
          Yu(Ol[Nu])
        }), uu);
        return () => {
          clearTimeout(Eu)
        }
      }), [Nu]);
      const mu = Uu(`dailyDrop:kind_${Du.iZ}`),
        vu = Cu && Uu("dailyDrop:collected", {
          count: Cu.collected.length,
          total: Cu.total
        }),
        Ku = "revealed" === Nu || "shrinking" === Nu,
        Vu = "equip" !== Nu && "remind" !== Nu;
      return (0, bu.jsx)(Is.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === Nu ? () => {
          ku(!1)
        } : ju,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, bu.jsxs)("div", {
          className: Zu()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === Nu,
            DailyDropRevealShrinking: "shrinking" === Nu,
            DailyDropRevealFiguresShown: "shrinking" === Nu || "equip" === Nu || "remind" === Nu
          }),
          children: [(0, bu.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, bu.jsx)(ql, {
              className: "DailyDropRevealStageFigures",
              worn: hu,
              iZ: Du.iZ,
              WZ: Du.WZ
            }), ("closed" === Nu || "opening" === Nu) && (0, bu.jsx)(Ul.e, {
              className: "DailyDropRevealBlock",
              open: "opening" === Nu
            }), Ku && (0, bu.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, bu.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Xl.m)(Du.iZ,Du.WZ).previewTex}.png`,
                alt: mu,
                draggable: !1
              })
            })]
          }), Vu && (0, bu.jsxs)(bu.Fragment, {
            children: [(0, bu.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, bu.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: Ku ? mu : Uu("dailyDrop:name")
              }), "closed" === Nu && (0, bu.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Uu("dailyDrop:tapToOpen")
              }), "revealed" === Nu && (0, bu.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Uu("dailyDrop:tapToContinue")
              })]
            }), (0, bu.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": Uu("closed" === Nu ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                Yu(Ol[Nu])
              }
            })]
          }), "equip" === Nu && (0, bu.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, bu.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: mu
            }), (0, bu.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Uu("dailyDrop:equipQuestion")
            }), (0, bu.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, bu.jsx)(fu.f, {
                className: "DailyDropRevealButton",
                disabled: gu,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, nE.s)("daily_drop.not_now", Eu), ou()
                },
                children: Uu("dailyDrop:notNow")
              }), (0, bu.jsx)(fu.f, {
                className: "DailyDropRevealButton",
                loading: gu,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, nE.s)("daily_drop.equip", Eu), Mu(!0), Gu(!1);
                    try {
                      await (0, nE.g)(qu, Du.iZ, Du.WZ)
                    } catch (uu) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", uu), Mu(!1), void Gu(!0)
                    }
                    await ou()
                  }()
                },
                children: Uu("dailyDrop:equip")
              })]
            }), eu && (0, bu.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: Uu("dailyDrop:equipFailed")
            }), !(0, Ju.h)(Pu) && (0, bu.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: gu,
              onClick: () => {
                var uu;
                (0, nE.s)("daily_drop.customise", Eu), uu = Du.iZ, qj.h.TY(rs, uu), Ju.d.set({
                  openEverythingMenuName: DE.o.CUSTOMISATION
                }), ju()
              },
              children: [Uu("dailyDrop:customise"), " ", (0, bu.jsx)(lu.e, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), vu && (0, bu.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [vu, "waiting" === (null === cu || void 0 === cu ? void 0 : cu.kind) && ` \xb7 ${Uu("dailyDrop:nextInInline",{count:cu.hours})}`]
            })]
          }), "remind" === Nu && (0, bu.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, bu.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Uu("dailyDrop:remindTitle")
            }), (0, bu.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Uu("dailyDrop:remindSubtitle")
            }), (0, bu.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, bu.jsx)(fu.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  ku(!1)
                },
                children: Uu("dailyDrop:remindNo")
              }), (0, bu.jsx)(fu.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  ku(!0)
                },
                children: Uu("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function Dl(uu, Eu) {
      const {
        t: ju
      } = (0, Xu.A)(), Uu = function(uu, Eu) {
        const {
          state: ju,
          view: Uu
        } = (0, nE.x)(), [Zu, Xu] = (0, su.useState)(!1), [lu, qu] = (0, su.useState)(!1), [fu, Cu] = (0, su.useState)(null), bu = (0, su.useRef)(null), cu = (0, su.useRef)(!1), Nu = Eu && "ready" === (null === Uu || void 0 === Uu ? void 0 : Uu.kind);
        (0, su.useEffect)((() => {
          uu ? Nu && !cu.current && (cu.current = !0, (0, nE.s)("daily_drop.shown", "tile")) : cu.current = !1
        }), [uu, Nu]), (0, su.useEffect)((() => {
          uu || (Du(), qu(!1))
        }), [uu]);
        const Ou = uu && null === fu && !(0, nE.q)(Uu);
        (0, su.useEffect)((() => {
          Ou && Ju.d.set({
            openEverythingMenuName: DE.o.CUSTOMISATION
          })
        }), [Ou]);
        const Yu = (0, su.useRef)(!1),
          hu = (0, su.useRef)(uu);

        function Du() {
          null !== bu.current && (bu.current = null, Cu(null))
        }
        return hu.current = uu, {
          state: ju,
          view: Uu,
          claiming: Zu,
          claimFailed: lu,
          reveal: fu,
          open: async function() {
            if (!Yu.current) {
              Yu.current = !0, Xu(!0), qu(!1);
              try {
                const {
                  state: uu,
                  drop: Eu
                } = await (0, nE.e)();
                if (null === uu || null === Eu) return;
                if (!hu.current) return;
                (0, nE.s)("daily_drop.open", Eu), bu.current = {
                  state: uu,
                  drop: Eu
                }, Cu(bu.current)
              } catch (uu) {
                console.error("Failed to claim the Lucky Skin Block", uu), hu.current && qu(!0)
              } finally {
                Yu.current = !1, Xu(!1)
              }
            }
          },
          closeReveal: Du
        }
      }(uu, Eu);
      return {
        shown: (0, nE.q)(Uu.view) || null !== Uu.reveal,
        tile: Uu.state && Uu.view && (0, bu.jsx)(Zl, {
          state: Uu.state,
          view: Uu.view,
          claiming: Uu.claiming,
          onOpen: Uu.open
        }),
        claimFailed: Uu.claimFailed && (0, bu.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: ju("dailyDrop:claimFailed")
        }),
        reveal: Uu.reveal && (0, bu.jsx)(hl, {
          drop: Uu.reveal.drop,
          onClose: Uu.closeReveal
        })
      }
    }

    function gl(uu) {
      let {
        show: Eu
      } = uu;
      const ju = Dl(Eu, Eu);
      return Eu && ju.shown ? (0, bu.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [ju.claimFailed, ju.tile && (0, bu.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: ju.tile
        }), ju.reveal]
      }) : null
    }
    const Ml = {
      kind: "board"
    };
    let el = !1;

    function Gl(uu) {
      return "found" === uu.status || "error" === uu.status && "store:giftRecipientLookupFailed" === uu.error ? uu.name : null
    }(0, Su.s)(KZ.prefetchBillingOfferings);
    const pl = (0, su.memo)((function(uu) {
      var Eu;
      let {
        show: Uu
      } = uu;
      const {
        t: lu
      } = (0, Xu.A)(), {
        userContext: qu
      } = (0, Ou.c)(), fu = (0, Iu.usePurchasesAllowed)(), Cu = qu !== ou.NULL_USER_CONTEXT, cu = xZ(qu), [Nu, Yu] = (0, hu.d)(), {
        page: Du,
        urlMode: gu,
        goTo: Mu
      } = (0, TZ.g)(), eu = function(uu) {
        return "superRank" === uu.kind ? "superRank" : "pack" === uu.kind ? uu.pack : null
      }(Du), {
        openEverythingMenuName: Gu,
        gameState: pu
      } = (0, Ju.l)(["openEverythingMenuName", "gameState"]), wu = null !== Gu;
      ! function(uu, Eu) {
        const [Uu] = (0, su.useState)(nZ.h), [Zu, Xu] = (0, su.useState)(!1);
        Uu && Eu && !Zu && Xu(!0);
        const lu = (0, ds.t)(),
          qu = Uu && Zu && uu && !lu;
        (0, su.useEffect)((() => {
          if (!qu) return;
          let uu = null,
            Eu = null,
            su = null;
          const Uu = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Au.getBillingClient)().purchaseUnderWay,
            Zu = () => {
              var ju;
              null === (ju = su) || void 0 === ju || ju(), su = null, null !== uu && (clearTimeout(uu), uu = null), null !== Eu && (clearTimeout(Eu), Eu = null)
            },
            Xu = () => {
              (0, HZ.n)(!1), (0, HZ.l)(!1), Zu(), uu = setTimeout((() => {
                uu = null, su = (0, AZ.b)((() => {
                  su = null, Uu() ? Xu() : ((0, HZ.n)(!0), Eu = setTimeout((() => {
                    Eu = null, su = (0, AZ.b)((() => {
                      su = null, Uu() ? Xu() : (0, HZ.l)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => ju(4842))).then((uu => {
                    uu.startBackgroundGameSetup()
                  }), (uu => {
                    console.warn("Background game setup: its chunk failed to load", uu)
                  })))
                }))
              }), 2e3)
            };
          for (const ju of yZ) window.addEventListener(ju, Xu, {
            capture: !0,
            passive: !0
          });
          return Xu(), () => {
            for (const uu of yZ) window.removeEventListener(uu, Xu, {
              capture: !0
            });
            Zu(), (0, HZ.n)(!1), (0, HZ.l)(!1)
          }
        }), [qu])
      }(Uu && wu, "pack" === Du.kind);
      const du = "landingPage" === pu;
      (0, su.useEffect)((() => {
        wu && (0, KZ.prefetchBillingOfferings)()
      }), [wu]), (0, su.useEffect)((() => {
        wu && !Uu && du && (0, zZ.w)()
      }), [wu, Uu, du]);
      const [au, Pu] = (0, su.useState)(0), [ku, mu] = (0, su.useState)(null), [vu, Ku] = (0, su.useState)(null), [Vu, Qu] = (0, su.useState)(null), [iu, Wu] = (0, su.useState)(null), Fu = (0, su.useRef)(null), Bu = (0, su.useRef)(null), Lu = (0, su.useRef)(null), tu = (0, su.useRef)(!1), xu = (0, Su.z)(), Tu = (0, su.useRef)(0), Hu = (0, su.useRef)(!1);

      function nu() {
        Pu((uu => uu + 1))
      }(0, su.useEffect)((() => {
        if (Uu) {
          if (el = !0, (0, Su.i)(), xu && xu.seq !== Tu.current) {
            var uu;
            Tu.current = xu.seq, "loginResume" !== xu.source && (0, Su.x)();
            const Eu = (0, Su.d)(xu);
            gu || Mu(Eu), Wu(null !== (uu = xu.highlight) && void 0 !== uu ? uu : null), Ku(null), "gift" === xu.mode && xu.giftRecipientName ? cu.choose(xu.giftRecipientName, "prefilled") : "current" !== xu.mode && cu.clear(), "gift" !== xu.mode || xu.giftRecipientName || nu(), (0, EE.reportAnalyticsClick)({
              id: "store.open",
              value: xu.source
            })
          } else Hu.current || (0, EE.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Hu.current = !0
        } else Hu.current = !1
      }), [Uu, xu]), (0, su.useEffect)((() => {
        if (!iu) return;
        const uu = setTimeout((() => {
          Wu(null)
        }), 4e3);
        return () => {
          clearTimeout(uu)
        }
      }), [iu]), (0, su.useLayoutEffect)((() => {
        const uu = Fu.current;
        if (!Uu || !uu) return Bu.current = null, void(Lu.current = null);
        var Eu;
        if (eu) Bu.current = eu, null === (Eu = uu.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Eu || Eu.focus();
        else if (Bu.current) {
          const Eu = Lu.current;
          null !== Eu && (uu.scrollTop = Eu);
          const ju = uu.querySelector(`[data-store-item="${Bu.current}"]`);
          if (ju) {
            const su = ju.getBoundingClientRect(),
              Uu = uu.getBoundingClientRect();
            ju.focus({
              preventScroll: null !== Eu && su.bottom > Uu.top && su.top < Uu.bottom
            })
          }
          Bu.current = null
        }
      }), [eu, Uu]), (0, su.useEffect)((() => {
        Ku(null)
      }), [cu.query]), (0, su.useEffect)((() => {
        if (!Vu) return;
        const uu = setTimeout((() => {
          Qu(null)
        }), 8e3);
        return () => {
          clearTimeout(uu)
        }
      }), [Vu]);
      const yu = qu.superRankInfo,
        zu = qu.isLoggedIn() || (0, Iu.guestsMayBuy)(),
        Ru = qu.getOwnedCosmeticPacks(),
        uE = (0, FZ.n)(cu.query),
        jE = (0, FZ.g)({
          mode: uE,
          loggedIn: Cu ? zu : null,
          superRankInfo: yu,
          now: Date.now(),
          ownedPacks: Ru,
          packs: vZ.x,
          recipient: cu.recipient
        });
      (0, su.useEffect)((() => {
        if (!zu || !Uu) return;
        const uu = (0, Su.x)(),
          Eu = uu && (0, FZ.l)(uu, vZ.x);
        uu && Eu && ((0, EE.reportAnalyticsClick)({
          id: "store.login_resume",
          value: uu.item
        }), (0, Su.m)(Eu))
      }), [zu, Uu]);
      const sE = (0, FZ.p)({
        superRankDaysLeft: jE.superRankDaysLeft,
        openedThisSession: el || Uu,
        seenNewItems: (0, Su.h)()
      });
      (0, su.useEffect)((() => {
        (0, Su.t)(sE)
      }), [sE]);
      const UE = "self" === uE,
        ZE = Dl(Uu, Uu && UE && "board" === Du.kind);
      if (!Uu || !fu) return null;
      const XE = Yu > Nu && Nu <= 700,
        lE = !XE && Yu <= 420,
        qE = "gift" === uE ? Gl(cu.recipient) : null,
        fE = null !== ku;

      function CE(uu) {
        (0, rZ.e)(uu, "gift" === uE ? cu.query.trim() : null)
      }

      function bE(uu, Eu) {
        (0, EE.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Eu?"gift":"self"}:${uu}`
        }), Eu && (cu.recordGift(Eu.name, uu), cE(Eu))
      }

      function cE(uu) {
        ! function(uu) {
          try {
            Cj.k.setItem(BZ, (0, FZ.w)(tZ(), uu))
          } catch {}
        }({
          name: uu.name,
          cosmetics: uu.cosmetics
        }), Mu(Ml), Qu((Eu => {
          var ju;
          return {
            name: uu.name,
            seq: (null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.seq) && void 0 !== ju ? ju : 0) + 1
          }
        }))
      }
      async function NE(uu) {
        var Eu, ju;
        if (tu.current) return;
        if (!zu) return void CE(uu);
        Ku(null), Wu(null);
        const su = "gift" === uE ? {
          name: Gl(cu.recipient),
          cosmetics: cu.recipientCosmetics
        } : null;
        if (su && !su.name) return void nu();
        const Uu = "superRank" === uu ? ru.g.id : (0, ru.b)(uu);
        tu.current = !0;
        const Zu = await (0, IZ.c)(Uu, null !== (Eu = null === su || void 0 === su ? void 0 : su.name) && void 0 !== Eu ? Eu : null);
        if (tu.current = !1, !Zu) return;
        mu(uu);
        const Xu = await QZ.b.purchase(Uu, null !== (ju = null === su || void 0 === su ? void 0 : su.name) && void 0 !== ju ? ju : null);
        mu(null), Xu ? Ku(Xu) : (bE(uu, su), su || (await (0, iZ.flushClientAnalyticsEvents)(), (0, VZ.refreshWithoutConfirmation)("superRank" === uu ? "/super-rank-welcome" : `/pack-welcome/${uu}`)))
      }
      const OE = Zu()("Store", {
        StoreGift: "gift" === uE,
        StorePortrait: XE,
        StoreCompact: lE
      });
      if ("pack" === Du.kind) {
        const uu = Du.pack,
          Eu = jE.packs.find((Eu => Eu.pack === uu));
        return (0, bu.jsx)("div", {
          ref: Fu,
          className: "CosmeticShopContainer",
          children: (0, bu.jsx)(SZ.e, {
            pack: uu,
            onBack: () => {
              Mu(Ml)
            },
            onPurchased: Eu => {
              bE(uu, Eu ? {
                name: Eu,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === uE && qE && Eu && (0, bu.jsxs)(bu.Fragment, {
              children: [(0, bu.jsx)(wX, {
                state: Eu.state,
                item: uu,
                price: (YE = uu, "superRank" === YE ? ru.g.price : (0, ru.d)(YE)),
                busy: fE,
                onAct: () => {
                  NE(uu)
                },
                onNeedRecipient: () => {
                  Mu(Ml), nu()
                },
                onLogin: () => {
                  CE(uu)
                },
                highlight: iu === uu
              }), vu && (0, bu.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: lu(vu)
              })]
            }),
            ownedPacks: Ru,
            startAsGift: "gift" === uE,
            initialGiftRecipient: "gift" === uE ? null !== qE && void 0 !== qE ? qE : cu.query.trim() : "",
            highlightCta: iu === uu
          }, uu)
        })
      }
      var YE;
      return "superRank" === Du.kind ? (0, bu.jsx)("div", {
        ref: Fu,
        className: Zu()(OE, "StoreDetailView"),
        children: (0, bu.jsx)(HX, {
          state: jE.superRank.state,
          mode: uE,
          giftName: qE,
          busy: fE,
          highlight: "superRank" === iu,
          purchaseError: vu,
          onBack: () => {
            Mu(Ml)
          },
          onChooseRecipient: () => {
            Mu(Ml), nu()
          },
          onAct: () => {
            NE("superRank")
          },
          onLogin: () => {
            CE("superRank")
          }
        })
      }) : (0, bu.jsxs)("div", {
        ref: Fu,
        className: OE,
        onScroll: uu => {
          Lu.current = uu.currentTarget.scrollTop
        },
        children: [(0, bu.jsx)("div", {
          className: "StoreTopRow",
          children: (0, bu.jsx)(ZX, {
            selfName: Cu ? qu.getPlayerName() : "",
            giftRecipient: cu,
            suggestionsVersion: null !== (Eu = null === Vu || void 0 === Vu ? void 0 : Vu.seq) && void 0 !== Eu ? Eu : 0,
            pulseSignal: au,
            disabled: fE || !Cu
          })
        }), Vu && (0, bu.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Qu(null)
          },
          children: [(0, bu.jsx)(WZ.c, {
            showSignal: Vu.seq
          }), FZ.d, " ", lu("store:giftSent", {
            name: Vu.name
          })]
        }, Vu.seq), !Vu && vu && (0, bu.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: lu(vu)
        }), UE && ZE.claimFailed, (0, bu.jsx)(TX, {
          layout: jE,
          mountAtOnce: null !== Bu.current,
          bundleGift: "gift" === uE ? {
            recipientName: qE,
            lookingUp: "pending" === cu.recipient.status,
            busy: fE,
            onNeedRecipient: nu,
            onSent: uu => {
              (0, EE.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), cE({
                name: uu,
                cosmetics: cu.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, FZ.s)(yu),
          busy: fE,
          highlightItem: iu,
          onOpen: function(uu) {
            (0, EE.reportAnalyticsClick)({
              id: "store.item_open",
              value: uu
            }), Mu((0, Su.g)(uu))
          },
          onAct: NE,
          onNeedRecipient: nu,
          onLogin: CE,
          dailyDropTile: UE && ZE.tile
        }), "gift" !== uE && (0, bu.jsx)(jl, {}), ZE.reveal]
      })
    }));
    var wl = ju(2811),
      Jl = ju(9043),
      dl = ju(8889),
      al = ju(2871),
      Pl = ju(2709),
      ol = ju(2760),
      kl = ju(2774),
      ml = ju(2777),
      vl = ju(2861),
      Kl = ju(2848),
      Vl = ju(2468),
      rl = ju(2504),
      Ql = ju(2488),
      il = ju(2091),
      Wl = ju(2786),
      Sl = ju(2512);

    function Il(uu) {
      let {
        show: Eu
      } = uu;
      return Eu ? (0, bu.jsx)(Fl, {}) : null
    }

    function Fl() {
      const {
        t: uu
      } = (0, Xu.A)(), {
        followsLeader: Eu
      } = (0, Pl.g)(), {
        loading: ju,
        friends: Uu,
        requests: qu,
        invites: Cu
      } = (0, Lu.m)(), {
        userContext: cu
      } = (0, Ou.c)(), [Nu, Yu] = (0, su.useState)(Sl.e);
      (0, su.useEffect)((() => {
        (0, Sl.b)()
      }), []);
      const hu = qu.map((uu => uu.name)),
        {
          state: Du,
          recentRequesters: gu
        } = (0, Kl.n)(),
        Mu = new Map([...("loaded" === Du.status ? Du.recentPlayers : []).map((uu => [uu.preview.name, uu])), ...gu.map((uu => [uu.name, uu]))]),
        eu = (0, su.useRef)(null),
        [wu, Ju] = (0, su.useState)(""),
        [du, au] = (0, su.useState)("Enter"),
        [Pu, ou] = (0, su.useState)(null);

      function ku() {
        wu && (au("Loading"), (0, Ql.j)(wu, "social_menu").then((uu => {
          if (eu.current) switch (uu.kind) {
            case "sent":
              au("Success");
              break;
            case "becameFriends":
              au("BecameFriends");
              break;
            case "failed":
              ou(uu.message), au("Error")
          }
        })))
      }
      return (0, su.useEffect)((() => {
        if ("Enter" === du || "Loading" === du) return;
        const uu = setTimeout((() => {
          eu.current.value = "", Ju(""), au("Enter")
        }), "Success" === du ? 1e3 : 4e3);
        return () => {
          clearTimeout(uu)
        }
      }), [du]), (0, bu.jsx)("div", {
        className: "SocialMenu",
        children: (0, bu.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, bu.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, bu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, bu.jsx)(ml.b, {
                label: uu("socialBar:addFriend")
              }), (0, bu.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, bu.jsxs)("div", {
                  className: Zu()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${du}`]: !0
                  }),
                  children: ["Loading" === du && (0, bu.jsx)(pu.b, {}), "Success" === du && (0, bu.jsx)(lu.e, {
                    name: "check"
                  }), "BecameFriends" === du && (0, bu.jsx)(bu.Fragment, {
                    children: uu("socialBar:nowFriends", {
                      playerName: wu
                    })
                  }), "Error" === du && Pu && (0, bu.jsx)(bu.Fragment, {
                    children: uu(Pu.translationKey, Pu.params)
                  })]
                }), (0, bu.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, bu.jsx)(Gu.d, {
                    className: "PlayerSearchInput",
                    placeholderText: uu("socialBar:enterPlayerName"),
                    domRef: eu,
                    onValueChange: uu => {
                      Ju((0, Ku.m)(uu)), eu.current.value = (0, Ku.m)(uu)
                    },
                    onEnter: () => {
                      wu && (0, EE.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), ku()
                    }
                  }), (0, bu.jsxs)(fu.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      ku()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, bu.jsx)(lu.e, {
                      name: "user-plus"
                    }), " ", uu("socialBar:sendRequest")]
                  })]
                })]
              }), (0, bu.jsx)(Wl.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Cu.length > 0 && (0, bu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, bu.jsx)(ml.b, {
                label: uu("socialBar:invites"),
                meta: Cu.length
              }), Cu.map((Eu => (0, bu.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, bu.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, bu.jsx)(Vl.b, {
                    invite: Eu
                  })
                }), (0, bu.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, bu.jsx)(Vl.f, {
                    invite: Eu
                  })
                }), (0, bu.jsx)(fu.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, rl.f)(Eu)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Eu.destination.kind}`
                  },
                  children: uu("general:join")
                }), (0, bu.jsx)(zu.e, {
                  tooltipInner: (0, bu.jsx)(bu.Fragment, {
                    children: uu("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, bu.jsx)(fu.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Nu || void 0 === Nu ? void 0 : Nu.kind) && Nu.inviteId === Eu.id,
                    onClick: () => {
                      Lu.b.declineInvite(Eu.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Eu.destination.kind}`
                    },
                    children: (0, bu.jsx)(lu.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, Eu.id)))]
            }), (0, bu.jsxs)("div", {
              className: Zu()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !ju && 0 === qu.length
              }),
              children: [(0, bu.jsx)(ml.b, {
                label: (0, bu.jsxs)(bu.Fragment, {
                  children: [(0, bu.jsx)(lu.e, {
                    name: il.f
                  }), " ", uu("socialBar:requests")]
                }),
                meta: (0, bu.jsxs)(bu.Fragment, {
                  children: [qu.length, qu.length === Ru.q && (0, bu.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: uu("socialBar:limitReached")
                  })]
                })
              }), ju && (0, bu.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, bu.jsx)(pu.b, {})
              }), !ju && 0 === qu.length && (0, bu.jsx)("div", {
                className: "SocialMenuEmpty",
                children: uu("socialBar:noFriendRequests")
              }), !ju && qu.length > 0 && (0, bu.jsx)("div", {
                className: "PlayerRows",
                children: (0, bu.jsx)(QU.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [qu],
                  children: qu.map(((Eu, ju) => {
                    const su = Mu.get(Eu.name);
                    return (0, bu.jsxs)(kl.g, {
                      playerSocialPreview: Eu,
                      zIndex: qu.length - ju,
                      padDefaultFocus: (0, Sl.d)(Nu, Eu.name, ju),
                      status: su && (0, bu.jsx)(vl.c, {
                        gameNameWithVariation: su.gameNameWithVariation,
                        isPrivateLobby: su.isPrivateLobby
                      }),
                      children: [(0, bu.jsx)(zu.e, {
                        tooltipInner: (0, bu.jsx)(bu.Fragment, {
                          children: uu("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, bu.jsx)(fu.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Yu((0, Sl.c)(hu, ju)), (0, Ql.f)(Eu.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, bu.jsx)(lu.e, {
                            name: "check"
                          })
                        })
                      }), (0, bu.jsx)(zu.e, {
                        tooltipInner: (0, bu.jsx)(bu.Fragment, {
                          children: uu("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, bu.jsx)(fu.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Yu((0, Sl.c)(hu, ju)), (0, Ql.f)(Eu.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, bu.jsx)(lu.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Eu.name}_${Eu.isError}`)
                  }))
                })
              })]
            }), (0, bu.jsx)(vl.h, {})]
          }), (0, bu.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, bu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, bu.jsx)(ml.b, {
                label: uu("socialBar:party")
              }), (0, bu.jsx)(ol.e, {})]
            }), (0, bu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, bu.jsx)(ml.b, {
                label: (0, bu.jsxs)(bu.Fragment, {
                  children: [(0, bu.jsx)(lu.e, {
                    name: il.c
                  }), " ", uu("socialBar:friends")]
                }),
                meta: (0, bu.jsxs)(bu.Fragment, {
                  children: [Uu.length, Uu.length >= (0, Ru.d)(cu.getPlayerRanks()) && (0, bu.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: uu("socialBar:limitReached")
                  })]
                })
              }), ju && (0, bu.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, bu.jsx)(pu.b, {})
              }), !ju && 0 === Uu.length && (0, bu.jsx)("div", {
                className: "SocialMenuEmpty",
                children: uu("socialBar:noFriends")
              }), !ju && Uu.length > 0 && (0, bu.jsx)("div", {
                className: "PlayerRows",
                children: (0, bu.jsx)(QU.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Uu],
                  children: Uu.map(((uu, ju) => (0, bu.jsx)(kl.g, {
                    playerSocialPreview: uu,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: uu => {
                      Lu.b.removeFriendFromState(uu)
                    },
                    zIndex: Uu.length - ju,
                    children: (0, bu.jsx)(kl.e, {
                      friend: uu,
                      followsLeader: Eu,
                      analyticsSurface: "social_menu"
                    })
                  }, `${uu.name}_${uu.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Bl = ju(2664);
    const Ll = uu => {
        let {
          action: Eu,
          padAction: ju
        } = uu;
        const {
          isTouchScreen: su
        } = (0, Ju.l)(["isTouchScreen"]), Uu = (0, ds.t)();
        return su && !Uu ? null : (0, bu.jsx)(Ds.b, {
          className: "EverythingMenuTabKey",
          noaAction: Eu,
          padHidesKey: !0,
          padMenuShortcut: ju
        })
      },
      tl = (0, su.memo)((function() {
        const {
          t: uu
        } = (0, Xu.A)(), {
          gameState: Eu,
          openEverythingMenuName: ju,
          crosshairGameView: Uu
        } = (0, Ju.l)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: lu
        } = (0, Ou.c)(), qu = (0, Iu.usePurchasesAllowed)(), Cu = (0, Su.D)(), {
          view: cu
        } = (0, nE.x)(), Nu = "dot" === Cu || null === Cu && "ready" === (null === cu || void 0 === cu ? void 0 : cu.kind), Yu = (uu, Eu) => (0, bu.jsx)(Ll, {
          action: uu,
          padAction: Eu
        }), [hu, gu] = (0, su.useState)(null), Mu = (0, su.useRef)(null), eu = {
          ..."inGame" === Eu ? {} : (0, fu.ib)({
            focusOnClick: !1
          }),
          ...is.e
        }, Gu = uu => {
          const Eu = (0, Ws.g)((Eu => {
            (0, fu.fb)(Eu.currentTarget), Ju.d.set({
              openEverythingMenuName: uu
            })
          }), "pointerup");
          return {
            ...eu,
            onPointerDown: uu => {
              eu.onPointerDown(uu), Eu.onPointerDown(uu)
            },
            onPointerUp: uu => {
              eu.onPointerUp(uu), Eu.onPointerUp(uu)
            },
            onClick: Eu.onClick
          }
        }, pu = null !== ju, wu = ju !== DE.o.COSMETIC_SHOP && !Uu;
        async function du() {
          await async function() {
            if (!hu) return;
            await hu(), gu(null)
          }(), Ju.d.set({
            openEverythingMenuName: null
          })
        }
        const au = (0, su.useRef)(null),
          ou = (0, su.useCallback)((() => null !== au.current && (0, dl.c)(au.current)), []);

        function ku() {
          ou() || du()
        }(0, su.useEffect)((() => (0, dZ.v)(ou)), [ou]);
        const mu = (0, su.useMemo)((() => "inGame" === Eu ? {
          text: uu("settingsMenu:exitGame"),
          onClick: () => {
            (0, Jl.e)()
          }
        } : (0, Pu.isDiscordClient)() ? {
          text: uu("settingsMenu:exitGame"),
          onClick: () => {
            hE.g.discordActivity().then((uu => {
              uu.exit("User exited the game")
            }))
          }
        } : null), [Eu, uu]);
        const vu = (0, bu.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: ku,
          children: (0, bu.jsx)(fu.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, bu.jsx)(Ss.b, {
          showing: pu,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: ju === DE.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === Eu,
          children: (0, bu.jsx)(Fs.b, {
            className: "EverythingMenuContainer",
            show: pu && !Uu,
            children: (0, bu.jsx)(Is.c, {
              close: ku,
              togglePointerLock: !1,
              children: (0, bu.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, dZ.l)(ju) && (0, bu.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, bu.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [mu && (0, bu.jsx)(fu.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        mu.onClick()
                      },
                      children: mu.text
                    }), pu && qu && (0, bu.jsx)("div", {
                      ...eu,
                      className: "EverythingMenuWallet",
                      title: uu("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Su.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, bu.jsx)(wl.f, {})
                    })]
                  }), (0, bu.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, bu.jsxs)("div", {
                      ...Gu(DE.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": ju === DE.o.SETTINGS ? "true" : void 0,
                      className: Zu()("EverythingMenuTab", {
                        EverythingMenuTabActive: ju === DE.o.SETTINGS
                      }),
                      children: [uu("general:settings"), Yu("OpenSettings", "pause")]
                    }), (0, bu.jsxs)("div", {
                      ...Gu(DE.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": ju === DE.o.CUSTOMISATION ? "true" : void 0,
                      className: Zu()("EverythingMenuTab", {
                        EverythingMenuTabActive: ju === DE.o.CUSTOMISATION
                      }),
                      children: [uu("general:player"), Yu("OpenCharacterCustomization")]
                    }), Du.featureFlags.useSocialFeatures && (0, bu.jsxs)("div", {
                      ...Gu(DE.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": ju === DE.o.SOCIAL ? "true" : void 0,
                      className: Zu()("EverythingMenuTab", {
                        EverythingMenuTabActive: ju === DE.o.SOCIAL
                      }),
                      ...(0, EE.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, ju === DE.o.SOCIAL),
                      children: [uu("socialBar:social"), (0, bu.jsx)(Bl.d, {})]
                    }), (0, nE.q)(cu) && (0, bu.jsxs)("div", {
                      ...Gu(DE.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": ju === DE.o.COSMETIC_SHOP ? "true" : void 0,
                      className: Zu()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: ju === DE.o.COSMETIC_SHOP
                      }),
                      children: [(0, bu.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: uu("store:title")
                      }), "new" === Cu && (0, bu.jsx)(VX, {}), Nu && (0, bu.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Eu && (0, bu.jsxs)("div", {
                      ...Gu(DE.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": ju === DE.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Zu()("EverythingMenuTab", {
                        EverythingMenuTabActive: ju === DE.o.LOBBY_LEADERBOARD
                      }),
                      children: [uu("general:lobby"), Yu("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, bu.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: vu
                  })]
                }), (0, dZ.l)(ju) && vu, (0, bu.jsxs)("div", {
                  ref: au,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Eu ? "0.85" : "1"
                  },
                  children: [(0, bu.jsx)(ms, {
                    show: ju === DE.o.SETTINGS,
                    setBeforeResumeCallback: gu
                  }), (0, bu.jsx)(Qs, {
                    show: ju === DE.o.CUSTOMISATION
                  }), (0, bu.jsx)(su.Suspense, {
                    fallback: null,
                    children: (0, bu.jsx)(hZ, {
                      show: ju === DE.o.SHOP
                    })
                  }), (0, bu.jsx)(kZ, {
                    show: ju === DE.o.LOBBY_LEADERBOARD
                  }), qu && (0, bu.jsx)(pl, {
                    show: ju === DE.o.COSMETIC_SHOP
                  }), !qu && (0, bu.jsx)(gl, {
                    show: ju === DE.o.COSMETIC_SHOP
                  }), (0, bu.jsx)(Il, {
                    show: ju === DE.o.SOCIAL
                  })]
                }), !(0, Du.isMobileApp)() && (0, Bs.f)(lu.getPlayerRanks()) && (0, bu.jsx)(Fs.b, {
                  ref: Mu,
                  className: "EverythingMenuBannerDiv",
                  show: wu,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, bu.jsx)(al.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Mu
                    },
                    showing: pu && wu,
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
  5052: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(4821),
      Xu = ju(1244),
      lu = ju(1116),
      qu = ju(1506),
      fu = ju(1559),
      Cu = ju(1405),
      bu = ju(2637),
      cu = ju(1154);
    const Nu = {
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

    function Ou(uu) {
      let {
        platform: Eu
      } = uu;
      const ju = "youtube" === Eu;
      return (0, cu.jsxs)("span", {
        className: Uu()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ju
        }),
        children: [ju && (0, cu.jsx)(bu.b, {
          variant: "white"
        }), !ju && (0, cu.jsx)(lu.e, {
          name: Nu[Eu].icon,
          kit: "brands"
        })]
      })
    }

    function Yu(uu) {
      let {
        platform: Eu,
        link: ju,
        editable: su,
        userContext: Uu,
        onLinksUpdated: bu
      } = uu;
      const {
        t: Yu
      } = (0, Xu.A)(), hu = Nu[Eu];
      if (!ju && !su) return null;

      function Du() {
        var uu;
        if (!Uu || !bu) return;
        Cu.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: hu.name
            }
          },
          prefixText: Zu.v[Eu],
          placeholderText: "playBloxd",
          initialValue: null !== (uu = null === ju || void 0 === ju ? void 0 : ju.handle) && void 0 !== uu ? uu : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ju ? "general:remove" : void 0
        }).getResult().then((async uu => {
          if ("notificationTornDown" !== uu && null !== uu) try {
            "submit" === uu.type ? await fu.b.setSocialLink(Uu, Eu, uu.value) : await fu.b.clearSocialLink(Uu, Eu), bu()
          } catch (ju) {
            console.error("Failed to update social link", ju), Cu.NotificationProvider.showAlertPopup({
              title: ju.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ju) {
        const uu = `@${ju.handle}`;
        return (0, cu.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: hu.color
          },
          href: ju.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, cu.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, cu.jsx)(Ou, {
              platform: Eu
            }), (0, cu.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, cu.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: uu
              })
            })]
          }), su && (0, cu.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qu.ib)({
              stopPropagation: !0
            }),
            onClick: uu => {
              uu.stopPropagation(), uu.preventDefault(), Du()
            },
            children: (0, cu.jsx)(lu.e, {
              name: "pen-to-square"
            })
          }), !su && (0, cu.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, cu.jsx)(lu.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, cu.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: hu.color
        },
        ...(0, qu.ib)(),
        onClick: () => {
          Du()
        },
        children: [(0, cu.jsx)(Ou, {
          platform: Eu
        }), (0, cu.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, cu.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: hu.name
          }), (0, cu.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Yu("homePage:profileSocialLinkAdd")
          })]
        }), (0, cu.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, cu.jsx)(lu.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function hu(uu) {
      let {
        socialLinks: Eu,
        editable: ju = !1,
        userContext: su,
        onLinksUpdated: Uu
      } = uu;
      if (!ju && 0 === Eu.length) return null;
      const Xu = new Map(Eu.map((uu => [uu.platform, uu]))),
        lu = ju ? Zu.r : Eu.map((uu => uu.platform));
      return (0, cu.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, cu.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: lu.map((uu => (0, cu.jsx)(Yu, {
            platform: uu,
            link: Xu.get(uu),
            editable: ju,
            userContext: su,
            onLinksUpdated: Uu
          }, uu)))
        })
      })
    }
  },
  34590: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(58),
      Uu = ju(3634);

    function Zu() {
      const [uu, Eu] = (0, su.useState)(!1);
      return (0, su.useLayoutEffect)((() => {
        let uu = !0;
        return (0, Uu.e)().then((() => {
          uu && Eu(!0)
        })), () => {
          uu = !1
        }
      }), []), uu
    }
  },
  34525: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Yu,
      g: () => Ou
    });
    ju(34528);
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(34521);

    function lu(uu, Eu) {
      return Math.max(1, Math.round(uu * Eu))
    }

    function qu(uu, Eu) {
      const ju = Eu * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        su = function(uu, Eu) {
          if (uu.lines) return lu(uu.lineThickness, Eu) % 2;
          if (uu.dot) return lu(uu.dotSize, Eu) % 2;
          return fu(uu, Eu) % 2
        }(uu, Eu),
        Uu = Cu(uu.lineThickness * ju, su),
        Zu = lu(uu.lineLength, ju),
        Xu = Math.round(uu.gap * ju),
        qu = uu.outline > 0 ? lu(uu.outline, ju) : 0,
        cu = [];
      if (uu.lines && (cu.push({
          x: Uu + Xu,
          y: 0,
          w: Zu,
          h: Uu,
          arm: "right"
        }), cu.push({
          x: -Xu - Zu,
          y: 0,
          w: Zu,
          h: Uu,
          arm: "left"
        }), cu.push({
          x: 0,
          y: Uu + Xu,
          w: Uu,
          h: Zu,
          arm: "down"
        }), uu.tStyle || cu.push({
          x: 0,
          y: -Xu - Zu,
          w: Uu,
          h: Zu,
          arm: "up"
        }), 0 === Xu && cu.push({
          x: 0,
          y: 0,
          w: Uu,
          h: Uu
        })), uu.dot) {
        const Eu = Cu(uu.dotSize * ju, su),
          Zu = uu.lines && 0 === Xu && uu.dotSize > uu.lineThickness ? Math.max(Eu, Uu + 2) : Eu,
          lu = (Uu - Zu) / 2;
        cu.push({
          x: lu,
          y: lu,
          w: Zu,
          h: Zu
        })
      }
      const Nu = cu.map((uu => ({
        ...uu,
        x: uu.x - qu,
        y: uu.y - qu,
        w: uu.w + 2 * qu,
        h: uu.h + 2 * qu
      })));
      let Ou = null,
        Yu = null;
      if (uu.circle) {
        const Eu = lu(uu.circleThickness, ju),
          Zu = function(uu, Eu) {
            return uu + (uu % 2 === Eu ? 0 : 1)
          }(fu(uu, ju), su),
          Xu = (Uu - Zu) / 2;
        Ou = bu(Xu, Zu, Eu), qu > 0 && (Yu = bu(Xu - qu, Zu + 2 * qu, Eu + 2 * qu))
      }
      return {
        cell: Uu,
        fills: cu,
        outlines: qu > 0 ? Nu : [],
        ring: Ou,
        ringOutline: Yu
      }
    }

    function fu(uu, Eu) {
      return Math.round(uu.circleRadius * Eu * 2 + lu(uu.circleThickness, Eu))
    }

    function Cu(uu, Eu) {
      return Math.max(2 - Eu, 2 * Math.round((uu - Eu) / 2) + Eu)
    }

    function bu(uu, Eu, ju) {
      const su = 2 * ju >= Eu - 1;
      return {
        x: uu,
        y: uu,
        size: Eu,
        border: Math.min(ju, Math.floor(Eu / 2)),
        filled: su
      }
    }
    var cu = ju(1154);
    const Nu = 1.4;

    function Ou(uu, Eu) {
      return uu && Eu ? `scale(${Nu})` : "scale(1)"
    }

    function Yu(uu) {
      return "classic" === uu.settings.style ? (0, cu.jsx)(gu, {
        ...uu
      }) : (0, cu.jsx)(du, {
        ...uu
      })
    }
    const hu = .125;

    function Du(uu, Eu) {
      const ju = {};
      if (uu.color !== Xu.f.color && (ju.color = (0, Xu.i)(uu.color)), uu.opacity !== Xu.f.opacity && (ju.opacity = uu.opacity / 100), uu.outline !== Xu.f.outline || uu.outlineColor !== Xu.f.outlineColor) {
        const Eu = uu.outline,
          su = (0, Xu.i)(uu.outlineColor);
        ju.textShadow = Eu > 0 ? `-${Eu}px 0 ${su}, 0 ${Eu}px ${su}, ${Eu}px 0 ${su}, 0 -${Eu}px ${su}` : "none"
      }
      if (uu.size !== Xu.f.size) {
        const su = uu.size / 100;
        ju.fontSize = Eu ? `calc(max(1.3rem, 18px) * ${su})` : `calc(1.3rem * ${su})`, ju.marginTop = `-${hu}em`, ju.transformOrigin = `50% calc(50% + ${hu}em)`
      }
      return ju
    }

    function gu(uu) {
      let {
        settings: Eu,
        touch: ju,
        inPreview: su,
        inEditor: Zu,
        pressed: Xu = !1,
        pressRef: lu
      } = uu;
      return (0, cu.jsx)("div", {
        className: Uu()("Crosshair", {
          Touch: ju,
          CrosshairInPreview: su,
          CrosshairInEditor: Zu || su
        }),
        ref: lu,
        style: {
          transform: Ou(Xu, Eu.growOnClick),
          ...Du(Eu, ju)
        },
        children: "+"
      })
    }

    function Mu(uu, Eu) {
      return uu / Eu + "px"
    }

    function eu(uu, Eu, ju, su) {
      return {
        ...wu(uu, Eu, ju),
        width: Mu(uu.w, ju),
        height: Mu(uu.h, ju),
        background: su
      }
    }

    function Gu(uu, Eu, ju) {
      return {
        left: Mu(uu.x, Eu),
        top: Mu(uu.y, Eu),
        width: Mu(uu.size, Eu),
        height: Mu(uu.size, Eu),
        borderWidth: Mu(uu.border, Eu),
        borderColor: ju,
        background: uu.filled ? ju : void 0
      }
    }
    const pu = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function wu(uu, Eu, ju) {
      const [su, Uu] = uu.arm ? pu[uu.arm] : [0, 0], Zu = Math.round(Eu * ju);
      return {
        left: Mu(uu.x + su * Zu, ju),
        top: Mu(uu.y + Uu * Zu, ju)
      }
    }

    function Ju(uu) {
      return uu.arm ? {
        "data-arm": uu.arm,
        "data-x": uu.x,
        "data-y": uu.y
      } : {}
    }

    function du(uu) {
      let {
        settings: Eu,
        inPreview: ju,
        inEditor: su,
        pressed: lu = !1,
        spread: fu,
        spreadRef: Cu
      } = uu;
      const bu = (0, Zu.useRef)(null),
        {
          box: Ou,
          dpr: Yu
        } = function(uu) {
          const [Eu, ju] = (0, Zu.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Zu.useLayoutEffect)((() => {
            const Eu = uu.current;
            if (!Eu) return;
            const su = () => {
              const uu = Eu.getBoundingClientRect(),
                su = window.devicePixelRatio || 1;
              ju((Eu => Eu.dpr === su && Eu.box.left === uu.left && Eu.box.top === uu.top && Eu.box.width === uu.width && Eu.box.height === uu.height ? Eu : {
                box: {
                  left: uu.left,
                  top: uu.top,
                  width: uu.width,
                  height: uu.height
                },
                dpr: su
              }))
            };
            su();
            const Uu = new ResizeObserver(su);
            return Uu.observe(Eu), window.addEventListener("resize", su), window.addEventListener("scroll", su, !0), () => {
              Uu.disconnect(), window.removeEventListener("resize", su), window.removeEventListener("scroll", su, !0)
            }
          }), [uu]), Eu
        }(bu),
        hu = (0, Zu.useRef)(Yu);
      hu.current = Yu;
      const Du = qu(Eu, Yu, lu && Eu.growOnClick ? Nu : 1),
        gu = function(uu, Eu, ju) {
          const su = Math.round((uu.left + uu.width / 2) * ju - Eu / 2),
            Uu = Math.round((uu.top + uu.height / 2) * ju - Eu / 2);
          return {
            x: su / ju - uu.left,
            y: Uu / ju - uu.top
          }
        }(Ou, Du.cell, Yu),
        Mu = (0, Xu.i)(Eu.color),
        pu = (0, Xu.i)(Eu.outlineColor),
        du = (0, Zu.useRef)(0);
      (0, Zu.useLayoutEffect)((() => {
        if (Cu) return Cu.current = uu => {
          var Eu;
          du.current = uu, null === (Eu = bu.current) || void 0 === Eu || Eu.querySelectorAll("[data-arm]").forEach((Eu => {
            Object.assign(Eu.style, wu(function(uu) {
              return {
                x: Number(uu.dataset.x),
                y: Number(uu.dataset.y),
                arm: uu.dataset.arm
              }
            }(Eu), uu, hu.current))
          }))
        }, () => {
          Cu.current = null
        }
      }), [Cu]);
      const au = null !== fu && void 0 !== fu ? fu : du.current;
      return (0, cu.jsx)("div", {
        ref: bu,
        className: Uu()("CrosshairShapes", {
          CrosshairInPreview: ju,
          CrosshairInEditor: su || ju,
          CrosshairSpreads: void 0 !== Cu
        }),
        children: (0, cu.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: gu.x,
            top: gu.y,
            opacity: Eu.opacity / 100
          },
          children: (0, cu.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Du.ringOutline && (0, cu.jsx)("div", {
              className: "CrosshairRing",
              style: Gu(Du.ringOutline, Yu, pu)
            }), Du.outlines.map(((uu, Eu) => (0, cu.jsx)("div", {
              className: "CrosshairPart",
              ...Ju(uu),
              style: eu(uu, au, Yu, pu)
            }, `o${Eu}`))), Du.ring && (0, cu.jsx)("div", {
              className: "CrosshairRing",
              style: Gu(Du.ring, Yu, Mu)
            }), Du.fills.map(((uu, Eu) => (0, cu.jsx)("div", {
              className: "CrosshairPart",
              ...Ju(uu),
              style: eu(uu, au, Yu, Mu)
            }, `f${Eu}`)))]
          })
        })
      })
    }
  },
  34532: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => hu,
      j: () => Yu
    });
    var su = ju(34521);
    const Uu = "XH1-",
      Zu = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Xu = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      lu = ["color", "outlineColor"],
      qu = 1 + 3 * lu.length + Xu.length + 1,
      fu = Math.ceil(8 * qu / Math.log2(62)),
      Cu = Uu.length + fu;

    function bu(uu) {
      let Eu = 90;
      for (const ju of uu) Eu = 31 * Eu + ju & 255;
      return Eu
    }
    const cu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nu = BigInt(cu.length);

    function Ou(uu, Eu) {
      let ju = 0n;
      for (const Uu of uu) {
        const uu = cu.indexOf(Uu);
        if (uu < 0) return null;
        ju = ju * Nu + BigInt(uu)
      }
      if (ju >> BigInt(8 * Eu) !== 0n) return null;
      const su = [];
      for (let Uu = 0; Uu < Eu; Uu++) su.unshift(Number(0xffn & ju)), ju >>= 8n;
      return su
    }

    function Yu(uu) {
      let Eu = "shapes" === uu.style ? 1 : 0;
      Zu.forEach(((ju, su) => {
        uu[ju] && (Eu |= 1 << su + 1)
      }));
      const ju = [Eu];
      for (const Uu of lu) {
        const Eu = (0, su.g)(Uu, uu[Uu]);
        ju.push(Eu >> 16 & 255, Eu >> 8 & 255, 255 & Eu)
      }
      for (const Uu of Xu) {
        const {
          min: Eu,
          step: Zu
        } = su.d[Uu];
        ju.push(Math.round(((0, su.g)(Uu, uu[Uu]) - Eu) / Zu))
      }
      return ju.push(bu(ju)), Uu + function(uu, Eu) {
        let ju = 0n;
        for (const Uu of uu) ju = ju << 8n | BigInt(Uu);
        let su = "";
        for (let Uu = 0; Uu < Eu; Uu++) su = cu[Number(ju % Nu)] + su, ju /= Nu;
        return su
      }(ju, fu)
    }

    function hu(uu) {
      for (const Eu of uu.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${fu}})`, "gi"))) {
        const uu = Du(Ou(Eu[1], qu));
        if (uu) return uu
      }
      return null
    }

    function Du(uu) {
      if (!uu || uu.length !== qu || bu(uu.slice(0, -1)) !== uu[uu.length - 1]) return null;
      const Eu = uu[0],
        ju = {
          ...su.f,
          style: 1 & Eu ? "shapes" : "classic"
        };
      Zu.forEach(((uu, su) => {
        ju[uu] = 0 !== (Eu & 1 << su + 1)
      }));
      let Uu = 1;
      for (const su of lu) ju[su] = uu[Uu] << 16 | uu[Uu + 1] << 8 | uu[Uu + 2], Uu += 3;
      for (const Zu of Xu) {
        const {
          min: Eu,
          step: Xu
        } = su.d[Zu];
        ju[Zu] = (0, su.g)(Zu, Eu + uu[Uu] * Xu), Uu++
      }
      return ju
    }
  },
  34521: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      f: () => Uu,
      g: () => Zu,
      i: () => fu,
      m: () => qu,
      n: () => Cu,
      o: () => lu,
      q: () => Xu
    });
    const su = {
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
      Uu = Object.freeze({
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

    function Zu(uu, Eu) {
      var ju;
      const {
        min: Zu,
        max: Xu,
        step: lu
      } = su[uu];
      if (!Number.isFinite(Eu)) return Uu[uu];
      const qu = (null !== (ju = String(lu).split(".")[1]) && void 0 !== ju ? ju : "").length,
        fu = Number((Math.round(Eu / lu) * lu).toFixed(qu));
      return Math.min(Xu, Math.max(Zu, fu))
    }

    function Xu(uu, Eu, ju) {
      const su = "number" === typeof ju ? Zu(Eu, ju) : ju;
      return {
        ...uu,
        [Eu]: su
      }
    }

    function lu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Uu).every((su => ju.includes(su) || uu[su] === Eu[su]))
    }

    function qu(uu) {
      return lu(uu, Uu)
    }

    function fu(uu) {
      return `#${uu.toString(16).padStart(6,"0")}`
    }

    function Cu(uu) {
      const Eu = /^#?([0-9a-f]{6})$/i.exec(uu.trim());
      return Eu ? parseInt(Eu[1], 16) : null
    }
  },
  34535: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      e: () => cu
    });
    var su = ju(58),
      Uu = ju(31),
      Zu = ju(34532),
      Xu = ju(34521);
    const lu = "crosshairCode";
    let qu = null;
    const fu = new Set;

    function Cu() {
      if (null === qu) {
        var uu;
        const Eu = Uu.k.getItem(lu);
        qu = null !== (uu = "string" === typeof Eu ? (0, Zu.f)(Eu) : null) && void 0 !== uu ? uu : Xu.f
      }
      return qu
    }

    function bu(uu) {
      qu = uu, (0, Xu.m)(uu) ? Uu.k.removeItem(lu) : Uu.k.setItem(lu, (0, Zu.j)(uu));
      for (const Eu of fu) Eu()
    }

    function cu() {
      const [uu, Eu] = (0, su.useState)(Cu);
      return (0, su.useEffect)((() => {
        const uu = () => {
          Eu(Cu())
        };
        return uu(), ju = uu, fu.add(ju), () => {
          fu.delete(ju)
        };
        var ju
      }), []), uu
    }
  },
  34512: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      d: () => Uu
    });
    var su = ju(22);

    function Uu(uu, Eu) {
      return uu && !Eu
    }

    function Zu() {
      return Uu(su.d.get("isTouchScreen"), su.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34483: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return uu && !Eu
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  34501: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(1128);

    function Uu() {
      var uu, Eu;
      return null !== (uu = null === (Eu = screen.orientation) || void 0 === Eu ? void 0 : Eu.type) && void 0 !== uu ? uu : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Zu = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Uu() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Uu(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, su.YY)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const uu of this.resizers) uu()
          }
        }), 1e3)
      }
      heldSizer(uu) {
        let Eu = !1;
        return () => {
          if (Eu && this.isHeld()) return null;
          const ju = uu();
          return Eu ||= null !== ju, ju
        }
      }
      onRelease(uu) {
        return this.resizers.add(uu), () => {
          this.resizers.delete(uu)
        }
      }
    }
  },
  34452: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => gu,
      d: () => fu,
      e: () => Yu,
      g: () => Ou
    });
    var su = ju(166),
      Uu = ju(1320),
      Zu = ju(1255),
      Xu = ju(1183),
      lu = ju(1776);
    const qu = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function fu(uu) {
      return qu[uu]
    }

    function Cu(uu) {
      return (0, lu.b)(uu) ? "outdated" : uu instanceof su.b ? 429 === uu.httpCode ? "busy" : "server" : "offline"
    }

    function bu(uu, Eu, ju) {
      return (0, Xu.postJsonWithMetricsCookiesAndJsonResponse)(`${Zu.clientSideServerUrls.indexUrl}${Eu}`, ju, {
        retries: 3
      }, uu.getMetricsCookies()).catch((uu => (console.error("Bad response from the server when trying to change name:", Eu, uu), {
        outcome: "failed",
        failure: Cu(uu)
      })))
    }

    function cu(uu) {
      return "outcome" in uu && "failed" === uu.outcome
    }

    function Nu(uu) {
      return console.error("Error when trying to get with new name from DB", uu), {
        outcome: "refused",
        message: uu
      }
    }
    async function Ou(uu) {
      const Eu = await bu(uu, "/index/name/random", {});
      return cu(Eu) ? Eu : "err" in Eu ? Nu(Eu.err) : (uu.setPlayerName(Eu.name), {
        outcome: "changed",
        name: Eu.name
      })
    }
    async function Yu(uu, Eu) {
      const ju = await bu(uu, "/index/name/update", {
        name: Eu
      });
      return cu(ju) ? ju : "err" in ju ? Nu(ju.err) : ju.nameExists ? {
        outcome: "taken"
      } : (uu.setPlayerName(Eu), {
        outcome: "changed",
        name: Eu
      })
    }

    function hu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const su = 1 === Eu ? 1 : 10 ** (Eu - 1),
        Zu = String(su + Math.floor(ju() * (10 ** Eu - su)));
      return `${uu.slice(0,Uu.g-Eu)}${Zu}`
    }
    const Du = [1, 2, 3, 4];
    async function gu(uu, Eu) {
      const ju = await Yu(uu, Eu);
      if ("taken" !== ju.outcome) return ju;
      for (const su of Du) {
        const ju = hu(Eu, su),
          Uu = await Yu(uu, ju);
        if ("taken" !== Uu.outcome) return Uu
      }
      return {
        outcome: "taken"
      }
    }
  },
  34486: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu,
      e: () => qu
    });
    var su = ju(22);
    const Uu = 24,
      Zu = "farNametags",
      Xu = 1e5;

    function lu() {
      var uu;
      return null === (uu = su.d.get("showDistantNametags")) || void 0 === uu || uu
    }

    function qu() {
      var uu;
      return null !== (uu = function() {
        const uu = new URLSearchParams(window.location.search).get(Zu),
          Eu = null === uu || "" === uu ? NaN : Number(uu);
        return Number.isFinite(Eu) && Eu >= 0 ? Math.min(Eu, Xu) : null
      }()) && void 0 !== uu ? uu : lu() ? 0 : Uu
    }
  },
  34505: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      g: () => bu,
      j: () => Cu
    });
    var su = ju(274),
      Uu = ju(91),
      Zu = ju(124),
      Xu = ju(117),
      lu = ju(676);
    const qu = new Set(["mali_bifrost"]);

    function fu() {
      if ("android" !== (0, Uu.pageOperatingSystem)() || lu.d || (0, lu.c)("webgl_default")) return;
      const uu = (0, Zu.o)(),
        Eu = null === uu ? (0, su.o)() : (0, su.h)(uu.vendor, uu.renderer);
      return null !== Eu && qu.has(Eu) ? uu => (0, su.l)((0, Xu.d)(uu).vendor, Eu) : void 0
    }

    function Cu(uu, Eu) {
      return uu ? () => !0 : Eu()
    }
    async function bu(uu) {
      try {
        const Eu = Cu(uu, fu),
          ju = navigator.gpu;
        if (void 0 === Eu || void 0 === ju) return !1;
        const su = await (0, Xu.o)(ju, {
          seed: !1,
          compatibility: Eu
        });
        return "string" !== typeof su && su.compatibility && !(0, Xu.j)(su.adapter)
      } catch (Eu) {
        return console.error("WebGPU compatibility-mode adapter request failed.", Eu), !1
      }
    }
  },
  34571: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      c: () => Xu
    });
    const su = [{
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

    function Uu(uu) {
      let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof uu) {
        if (!Number.isFinite(uu)) return "0";
        if (Math.abs(uu) < 100) {
          const Eu = uu < 0 ? "-" : "",
            ju = Math.abs(uu);
          return ju >= 10 ? `${Eu}${ju.toFixed(1).replace(/\.0$/,"")}` : `${Eu}${ju.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Eu = BigInt(Math.floor(uu))
      } else Eu = uu;
      const Uu = Eu < 0n ? -Eu : Eu,
        Zu = Eu < 0n ? "-" : "",
        Xu = Uu.toString();
      if (Xu.length <= ju) return `${Zu}${Xu}`;
      const lu = 3 * Math.floor((Xu.length - 1) / 3);
      if (lu < 3) return `${Zu}${Xu}`;
      if (lu > 3 * su.length) {
        const uu = Xu[0],
          Eu = Xu.slice(1, 3).replace(/0+$/, "");
        return `${Zu}${Eu?`${uu}.${Eu}`:uu}e${Xu.length-1}`
      }
      const {
        threshold: qu,
        suffix: fu
      } = su[su.length - lu / 3], Cu = Uu / qu, bu = Number(1000n * (Uu % qu) / qu), cu = Number(Cu) + bu / 1e3;
      let Nu;
      return Nu = cu >= 100 ? Math.floor(cu).toString() : cu >= 10 ? cu.toFixed(1).replace(/\.0$/, "") : cu.toFixed(2).replace(/\.?0+$/, ""), `${Zu}${Nu}${fu}`
    }
    const Zu = su.map((uu => {
      let {
        threshold: Eu,
        suffix: ju
      } = uu;
      return {
        threshold: Number(Eu),
        suffix: ju
      }
    })).filter((uu => {
      let {
        threshold: Eu
      } = uu;
      return Number.isFinite(Eu)
    }));

    function Xu(uu) {
      const Eu = Math.abs(uu),
        ju = uu < 0 ? "-" : "";
      for (const {
          threshold: su,
          suffix: Uu
        }
        of Zu)
        if (Eu >= su) {
          const uu = Eu / su;
          if (uu >= 1e3) return `${ju}${Eu.toExponential(2).replace("e+","e")}`;
          let Zu;
          return Zu = uu >= 100 ? Math.floor(uu).toString() : uu >= 10 ? uu.toFixed(1).replace(/\.0$/, "") : uu.toFixed(2).replace(/\.?0+$/, ""), `${ju}${Zu}${Uu}`
        } return `${ju}${Eu}`
    }
  },
  34557: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => cu,
      h: () => bu,
      k: () => Xu,
      o: () => fu,
      q: () => qu
    });
    var su = ju(349);
    const Uu = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Zu = {
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

    function Xu(uu) {
      var Eu;
      return null !== (Eu = Zu[uu]) && void 0 !== Eu ? Eu : {
        translationKey: ""
      }
    }
    const lu = {
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

    function qu(uu) {
      return Uu.includes(uu)
    }

    function fu(uu) {
      var Eu;
      return !0 === (null === uu || void 0 === uu || null === (Eu = uu.customAttributes) || void 0 === Eu ? void 0 : Eu.cannotEnchant)
    }

    function Cu(uu, Eu) {
      const {
        max: ju
      } = lu[uu].at(-1);
      return Eu <= ju
    }

    function bu(uu) {
      const Eu = Math.sin(uu / 80),
        ju = uu => {
          if (uu <= 0) return 0;
          if (uu > 1) return 1;
          let Eu = 0;
          const ju = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let su = 0; su < ju.length; su++) {
            Eu += (su % 2 === 0 ? 1 : -1) * ju[su] * Math.pow(uu, 2 + su) / (2 + su)
          }
          return 72 * Eu
        },
        su = .3 - .78 * Eu,
        Uu = .5 - .78 * Eu,
        Zu = .6 - .7 * Eu,
        Xu = .8 - .6 * Eu;
      let lu = ju(su),
        qu = ju(Uu) - lu,
        fu = ju(Zu) - qu - lu,
        Cu = ju(Xu) - fu - qu - lu;
      su < .041 && (qu /= 1 - lu, fu /= 1 - lu, Cu /= 1 - lu, lu = 0), Uu < .041 && (lu /= 1 - qu, fu /= 1 - qu, Cu /= 1 - qu, qu = 0), Zu < .041 && (lu /= 1 - fu, qu /= 1 - fu, Cu /= 1 - fu, fu = 0), Xu < .041 && (lu /= 1 - Cu, qu /= 1 - Cu, fu /= 1 - Cu, Cu = 0);
      return {
        commonProb: lu,
        uncommonProb: qu,
        rareProb: fu,
        epicProb: Cu,
        legendaryProb: 1 - (Cu + fu + qu + lu)
      }
    }

    function cu(uu, Eu) {
      const {
        min: ju,
        max: Uu
      } = lu[uu][Eu], Zu = su.b.sampleUniformIntDistribution(ju, Uu, "includeMax");
      return {
        ...bu(Zu),
        level: Zu
      }
    }
  },
  34528: () => {},
  12943: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14127: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15536: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16030: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);