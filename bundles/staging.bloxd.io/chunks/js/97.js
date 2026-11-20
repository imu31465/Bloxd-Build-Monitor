export const id = 97;
export const ids = [97, 185];
export const modules = {
  8940: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      EverythingMenu: () => RJ
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1170),
      Ju = yu(1043),
      Nu = yu(1987),
      Xu = yu(1093),
      Vu = yu(1079);

    function ru(uu) {
      let {
        items: Ru,
        onClick: yu,
        selectedItemId: Eu,
        className: Ku,
        padStartsOnTab: ru = !0
      } = uu;
      const {
        t: Bu
      } = (0, mu.E)(), xu = (0, Xu.k)(), Su = [];
      for (const Qu of Ru) {
        var pu;
        const uu = Su[Su.length - 1];
        var Tu;
        if (uu && uu.title === (null !== (pu = Qu.section) && void 0 !== pu ? pu : null)) uu.items.push(Qu);
        else Su.push({
          title: null !== (Tu = Qu.section) && void 0 !== Tu ? Tu : null,
          items: [Qu]
        })
      }
      return (0, Vu.jsx)("div", {
        className: Qu()("MenuSideBarBody", Ku),
        "data-pad-tabs": "2",
        children: Su.map(((uu, Ru) => {
          var Ku;
          return (0, Vu.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [uu.title && (0, Vu.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Bu(uu.title)
            }), uu.items.map((uu => {
              var Ru;
              const Ku = !!uu.iconElement || !!uu.faIcon;
              return (0, Vu.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Eu === uu.id ? "true" : void 0,
                "data-pad-default-focus": ru && Eu === uu.id || void 0,
                className: Qu()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Eu === uu.id
                }),
                onClick: () => {
                  yu(uu.id)
                },
                children: [Ku && (0, Vu.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Ru = uu.iconElement) && void 0 !== Ru ? Ru : (0, Vu.jsx)(Ju.c, {
                    name: uu.faIcon
                  })
                }), (!xu || !Ku) && (0, Vu.jsx)("div", {
                  children: Bu(uu.title)
                }), uu.redDot && (0, Vu.jsx)(Nu.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, uu.id)
            }))]
          }, null !== (Ku = uu.title) && void 0 !== Ku ? Ku : Ru)
        }))
      })
    }
    var Bu = yu(2780),
      xu = yu(1107),
      Su = yu(2335),
      pu = yu(1100),
      Tu = yu(1408),
      Wu = yu(106),
      ju = yu(1855),
      Hu = yu(2156),
      du = yu(2160),
      bu = yu(1617),
      Cu = yu(1300),
      ku = yu(4782),
      eu = yu(27),
      Au = yu(8946);

    function Du(uu) {
      let {
        setApplySettingsCallback: Ru
      } = uu;
      const {
        clientEscMenuOptions: yu
      } = (0, eu.j)(["clientEscMenuOptions"]), [Ku, Qu] = (0, Eu.useState)(!1), [mu, Ju] = (0, Eu.useState)(!1), [Nu, Xu] = (0, Eu.useState)(6400), [ru, Bu] = (0, Eu.useState)(3600), [xu, Su] = (0, Eu.useState)(!1), [pu, Wu] = (0, Eu.useState)(!1);

      function ju(uu) {
        const Ru = "screenshot" === uu ? Ju : Qu;
        Ru(!0);
        const yu = xu ? "normals" : pu ? "depth" : null;
        Au.devTools.downloadScene(uu, {
          width: Nu,
          height: ru,
          colouring: yu
        }).catch((uu => {
          console.error("Couldn't download the scene", uu)
        })).finally((() => {
          Ru(!1)
        }))
      }
      return (0, Vu.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Vu.jsx)(ku.c, {
          label: "Disable Ambient Occlusion",
          checked: yu.disableAmbientOcclusion,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              disableAmbientOcclusion: uu
            }), Ru((() => ku.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Au.devTools.supports("ambientLight") && (0, Vu.jsx)(ku.g, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: yu.ambientLightIntensity,
          onChange: uu => {
            Au.devTools.setAmbientLightIntensity(uu).then((() => {
              eu.d.setClientEscMenuOptions({
                ambientLightIntensity: uu
              })
            })).catch((uu => {
              console.error("Couldn't set the ambient light", uu)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Au.devTools.supports("weaponRaycasts") && (0, Vu.jsx)(ku.c, {
          label: "Show Weapon Raycasts",
          checked: yu.showWeaponRaycasts,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              showWeaponRaycasts: uu
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Au.devTools.supports("sceneDownload") && (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Vu.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Vu.jsx)(ku.c, {
              label: "Apply normal-based coloring",
              checked: xu,
              onClick: uu => {
                Su(uu), uu && Wu(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Vu.jsx)(ku.c, {
              label: "Apply depth-based coloring",
              checked: pu,
              onClick: uu => {
                Wu(uu), uu && Su(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Vu.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Vu.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Vu.jsx)(bu.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (uu, Ru) => {
                  const yu = parseInt(uu) || 6400;
                  Xu(yu)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Nu.toString()
              }), (0, Vu.jsx)("span", {
                children: "X"
              }), (0, Vu.jsx)(bu.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (uu, Ru) => {
                  const yu = parseInt(uu) || 3600;
                  Bu(yu)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: ru.toString()
              })]
            }), (0, Vu.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Vu.jsxs)(Tu.e, {
                onClick: () => {
                  ju("screenshot")
                },
                disabled: mu,
                children: [mu && (0, Vu.jsx)(Cu.b, {}), "Download Screenshot"]
              }), (0, Vu.jsxs)(Tu.e, {
                onClick: () => {
                  ju("glb")
                },
                disabled: Ku,
                children: [Ku && (0, Vu.jsx)(Cu.b, {}), "Download GLB"]
              })]
            })]
          }), (0, Vu.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Mu = yu(145),
      Iu = yu(1110),
      Gu = yu(1176),
      Uu = yu(2785),
      nu = yu(1467),
      su = yu(1240),
      tu = yu(1213),
      lu = yu(2861),
      gu = yu(1965),
      cu = yu(1447),
      Lu = yu(343),
      zu = yu(2162),
      Fu = yu(2180),
      wu = yu(2548),
      Zu = yu(1587),
      hu = yu(2829),
      Pu = yu(2812),
      iu = yu(2869),
      Yu = yu(228);

    function ou(uu) {
      const {
        t: Ru,
        selectedLanguage: yu
      } = (0, mu.E)(), {
        userContext: Ku
      } = (0, xu.d)(), {
        superRankInfo: Qu
      } = Ku, Ju = uu && ((0, Lu.Kc)(Qu) || Ku.ranksMayChange) && (0, Fu.purchasesAllowed)(), {
        accountId: Nu,
        data: Xu
      } = (0, wu.i)(hu.e, Ju);
      if ((0, Eu.useEffect)((() => {
          if (Ju) return hu.e.watchAccount(), Zu.c.addRefetchListener("billing", (uu => {
            "reconnected" === uu ? hu.e.refreshAfterReconnect() : hu.e.refresh()
          }))
        }), [Ju]), !Ju || !(0, Lu.Kc)(Qu) || null === Xu || Nu !== Ku.whamm) return null;
      const Vu = function(uu, Ru, yu) {
        const Eu = iu.h[(0, iu.c)(iu.h, Ru)],
          Ku = void 0 === Eu ? void 0 : (0, Yu.b)(uu.entitlements, Eu.entitlementId);
        return void 0 === Ku || null === Ku.expiresAt || (0, Pu.f)(Ku) <= yu ? null : Ku.willRenew && null === Ku.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Ku.expiresAt, yu)
        } : {
          renews: !1,
          at: (0, Pu.f)(Ku)
        }
      }(Xu, Qu.tier, Date.now());
      if (null === Vu) return null;
      const ru = Vu.renews ? "store:renewsOn" : "store:endsOn";
      return Ru(ru, {
        date: new Date(Vu.at).toLocaleDateString((0, mu.n)(yu.code, ru), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var qu = yu(1325),
      Ou = yu(1191),
      vu = yu(4659),
      au = yu(1422),
      fu = yu(3473),
      uR = yu(2146);

    function RR(uu) {
      let {
        showing: Ru
      } = uu;
      const {
        t: yu
      } = (0, mu.E)(), {
        data: Eu,
        failed: Ku
      } = (0, wu.i)(fu.f, Ru);
      return 0 === (null === Eu || void 0 === Eu ? void 0 : Eu.length) || null === Eu && !Ku ? null : (0, Vu.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Vu.jsx)("div", {
          className: "AccountSettingsLabel",
          children: yu("paymentHistory:title")
        }), null === Eu && Ku && (0, Vu.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: yu("paymentHistory:loadFailed")
        }), null !== Eu && (0, Vu.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Eu.map((uu => (0, Vu.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Vu.jsx)(uR.e, {
              entry: uu
            }), (0, Vu.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Vu.jsx)("div", {
                children: (0, uR.j)(yu, uu)
              }), (0, Vu.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(uu.at).toLocaleDateString(), "number" === typeof uu.orderId && ` \xb7 ${yu("paymentHistory:order",{orderId:uu.orderId})}`]
              })]
            })]
          }, (0, fu.e)(uu))))
        })]
      })
    }
    var yR = yu(1814),
      ER = yu(1217),
      KR = yu(1311),
      QR = yu(1269),
      mR = yu(1699),
      JR = yu(2801);
    async function NR() {
      try {
        return function(uu) {
          const Ru = new Map;
          for (const {
              store: yu,
              status: Eu,
              autoRenewStatus: Ku,
              managementUrl: Qu
            }
            of Object.values(uu.subscriptions)) !(0, Pu.i)(yu) || (0, Pu.l)(Eu) || "willNotRenew" === Ku || Ru.has(yu) || Ru.set(yu, null !== Qu && void 0 !== Qu ? Qu : Pu.o[yu]);
          return Array.from(Ru, (uu => {
            let [Ru, yu] = uu;
            return {
              store: Ru,
              managementUrl: yu
            }
          }))
        }(await (0, mR.i)((0, JR.i)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (uu) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", uu), null
      }
    }
    var XR = yu(330),
      VR = yu(2386);
    const rR = {
      appStore: {
        name: "App Store",
        ...XR._b.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...XR._b.googlePlay
      },
      discord: {
        name: "Discord",
        ...XR._b.discord
      }
    };

    function BR(uu) {
      let {
        warning: Ru,
        subscriptions: yu
      } = uu;
      const {
        t: Eu
      } = (0, mu.E)();
      return null !== yu && 0 === yu.length ? (0, Vu.jsx)(Vu.Fragment, {
        children: Eu(Ru)
      }) : (0, Vu.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Eu(Ru), null === yu && (0, Vu.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Eu("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== yu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Eu("auth:deleteAccountStoreSubscriptions")
          }), (0, Vu.jsx)(VR.b, {
            className: "DeleteAccountSubtitleLinks",
            links: yu.map((uu => {
              let {
                store: Ru,
                managementUrl: yu
              } = uu;
              return {
                ...rR[Ru],
                url: yu
              }
            }))
          })]
        })]
      })
    }

    function xR(uu) {
      let {
        showing: Ru
      } = uu;
      const {
        userContext: yu,
        isUserContextUpdating: Ku
      } = (0, xu.d)(), {
        t: Qu
      } = (0, mu.E)(), [Ju, Nu] = (0, Eu.useState)(!1), [Xu, ru] = (0, Eu.useState)(null), Bu = (0, Eu.useRef)(Ru);
      (0, Eu.useEffect)((() => (Bu.current = Ru, () => {
        Bu.current = !1
      })), [Ru]);
      const Su = Ku || Ju;
      async function pu() {
        const uu = function(uu) {
            if ((0, Mu.c)()) return "auth:discordActivityDeleteAccountWarning";
            return uu ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(yu.isLoggedIn()),
          Ru = (0, yR.c)(yu.availableUserContextTypes) ? await NR() : [];
        if (!Bu.current) return ER.c.ok();
        if (!0 !== await KR.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, su.e)(yu.getPlayerName(), !Wu.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, Vu.jsx)(BR, {
              warning: uu,
              subscriptions: Ru
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return ER.c.ok();
        const Eu = await (0, Iu.postJsonWithMetricsCookiesAndJsonResponse)(`${Gu.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: eu.d.get("gameState")
        }, {
          retries: 3
        }, yu.getMetricsCookies());
        if (Eu.error) return ER.c.error(Eu.error);
        if ((0, Mu.c)()) {
          (await QR.p.discordActivity()).exit("User deleted their account")
        }
        return (0, Iu.forgetStoredGuestAccount)(yu.whamm), (0, Iu.forceGlobalSignOut)(!0), ER.c.ok()
      }
      return (0, Vu.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Vu.jsxs)(Tu.F, {
          onClick: async function() {
            if (!Ju) {
              Nu(!0);
              try {
                const uu = await pu(),
                  Ru = uu.isError() ? uu.asError().message : null;
                ru(Ru)
              } catch (uu) {
                console.error("Failed to delete account:", uu), ru(Qu("auth:genericDeleteAccountError"))
              }
              Nu(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Su,
          children: [Su && (0, Vu.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Vu.jsx)(Cu.b, {})
          }), Qu("auth:deleteAccount")]
        }), Xu && (0, Vu.jsx)("div", {
          className: "DeleteAccountError",
          children: Xu
        })]
      })
    }
    var SR = yu(3398),
      pR = yu(3415),
      TR = yu(3411);

    function WR(uu) {
      let {
        showing: Ru
      } = uu;
      const {
        t: yu
      } = (0, mu.E)(), {
        data: Eu,
        failed: Ku
      } = (0, wu.i)(SR.d, Ru), Qu = null === Eu ? null : (0, SR.e)(Eu);
      return (0, Vu.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Vu.jsx)("div", {
          className: "AccountSettingsLabel",
          children: yu("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Qu && !Ku && (0, Vu.jsx)(Cu.b, {}), null === Qu && Ku && (0, Vu.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [yu("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Vu.jsx)(Tu.e, {
            className: "SmallTextLight",
            onClick: () => {
              SR.d.refresh()
            },
            children: yu("general:tryAgain")
          })]
        }), 0 === (null === Qu || void 0 === Qu ? void 0 : Qu.length) && (0, Vu.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: yu("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Qu && Qu.length > 0 && (0, Vu.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Qu.map((uu => {
            let {
              name: Ru,
              exclusion: Eu
            } = uu;
            const Ku = TR.e[Eu];
            return (0, Vu.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Vu.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Ru
              }), (0, Vu.jsx)(Tu.f, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, pR.g)(Ku, Ru, {
                    chatMessage: null
                  })
                },
                children: yu(TR.g[Ku].text)
              })]
            }, Ru)
          }))
        })]
      })
    }
    const jR = (0, Eu.memo)((function(uu) {
      var Ru;
      let {
        showing: yu,
        inGame: Ku
      } = uu;
      const {
        t: Nu,
        selectedLanguage: Xu
      } = (0, mu.E)(), {
        hideSocialLocationFrom: ru
      } = (0, eu.j)(["hideSocialLocationFrom"]), Su = (0, Bu.c)(), {
        userContext: pu,
        isUserContextUpdating: ju
      } = (0, xu.d)(), [Hu, du] = (0, Eu.useState)(null !== (Ru = pu.getPlayerName()) && void 0 !== Ru ? Ru : ""), [Au, Du] = (0, Eu.useState)(null), {
        purchasing: wu,
        outcome: Zu,
        purchase: hu
      } = (0, Uu.e)("/super-rank-welcome"), Pu = (0, Lu.sc)((0, mu.n)(Xu.code, "general:timeLeft"), pu.superRankInfo), iu = ou(yu), Yu = Pu ? Nu("general:timeLeft", {
        time: Pu
      }) : iu, [fu, uR] = (0, Eu.useState)(!1), [yR, ER] = (0, Eu.useState)(!1), KR = (0, Eu.useRef)(null), QR = (0, Eu.useRef)(null), mR = (0, gu.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), JR = null === mR, NR = null !== mR && void 0 !== mR ? mR : [], XR = pu !== Iu.NULL_USER_CONTEXT && !pu.isLoggedIn(), VR = XR && 0 !== (null === mR || void 0 === mR ? void 0 : mR.length), [rR, BR] = (0, Eu.useState)([]), [SR, pR] = (0, Eu.useState)(!1), TR = pu.playerHasRank("youtuber"), jR = (0, Eu.useCallback)((() => cu.e.getPlayerProfile(pu, {
        lowerCaseName: pu.getPlayerName().toLowerCase()
      }).then((uu => {
        BR(uu.socialLinks)
      })).catch((uu => {
        console.error("Failed to refresh social links", uu)
      }))), [pu]);

      function dR(uu) {
        uu !== Hu && ((0, su.p)(uu) ? (uu = (0, su.s)(uu), Du("Only letters, numbers, and _")) : Du(null), KR.current && (KR.current.value = uu), du(uu))
      }
      return (0, Eu.useEffect)((() => (!0 === yu ? (clearInterval(QR.current), QR.current = setInterval(Su, 1e3)) : clearInterval(QR.current), () => {
        clearInterval(QR.current)
      })), [yu, Su]), (0, Eu.useEffect)((() => {
        var uu;
        du(null !== (uu = pu.getPlayerName()) && void 0 !== uu ? uu : "")
      }), [pu]), (0, Eu.useEffect)((() => {
        if (!yu || !TR || ju) return;
        let uu = !1;
        return pR(!0), BR([]), cu.e.getPlayerProfile(pu, {
          lowerCaseName: pu.getPlayerName().toLowerCase()
        }).then((Ru => {
          uu || BR(Ru.socialLinks)
        })).catch((uu => {
          console.error("Failed to load social links", uu)
        })).finally((() => {
          uu || pR(!1)
        })), () => {
          uu = !0
        }
      }), [yu, TR, ju, pu]), (0, Vu.jsxs)("div", {
        className: Qu()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Ku
        }),
        children: [Ku && (0, Vu.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Nu("settingsMenu:accountSettingsInGameWarning")
        }), (0, Vu.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Vu.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Nu("homePage:discordNamePopupTitle"), (0, Vu.jsxs)(nu.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, tu.f)({
                name: pu.getPlayerName()
              }),
              onClick: () => {
                eu.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Vu.jsx)(Ju.c, {
                name: "arrow-up-right-from-square"
              }), " ", Nu("profileCard:viewProfile")]
            })]
          }), (0, Vu.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Vu.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Wu.featureFlags.canChangeName && (0, Vu.jsx)(bu.b, {
                className: "EnterName",
                placeholderText: Nu("homePage:enterName"),
                maxLength: su.k,
                defaultValue: Hu,
                onValueChange: uu => {
                  dR(uu)
                },
                forcedText: fu || !Wu.featureFlags.canChangeName ? Hu : null,
                blurOnEnter: !0,
                domRef: KR
              }), (0, Vu.jsx)(Tu.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  dR((0, su.h)())
                },
                children: (0, Vu.jsx)(Ju.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Wu.featureFlags.canChangeName && (0, Vu.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, su.e)(Hu, !Wu.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Vu.jsx)(Tu.e, {
              className: "ChooseNameButton",
              disabled: fu || Hu === pu.getPlayerName(),
              onClick: () => {
                Hu.length < su.l ? Du(Nu("homePage:changeNameMinLengthError", {
                  length: su.l
                })) : Hu.length > su.k ? Du(Nu("homePage:changeNameMaxLengthError", {
                  length: su.k
                })) : (uR(!0), Du(null), async function(uu, Ru, yu, Eu) {
                  const Ku = await (0, Iu.postJsonWithMetricsCookiesAndJsonResponse)(`${Gu.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: uu
                  }, {
                    retries: 3
                  }, Ru.getMetricsCookies()).catch((uu => (console.error("Bad response from the server when trying to update name:", uu), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Ku.err ? (console.error("Error when trying to get with new name from DB", Ku.err), Eu(Ku.err)) : !0 === Ku.nameExists ? Eu("Name is already taken") : yu(uu)
                }(Hu, pu, (uu => {
                  pu.setPlayerName(uu), uR(!1)
                }), (uu => {
                  Du(uu), uR(!1)
                })))
              },
              children: Nu("general:choose")
            })]
          }), Au && (0, Vu.jsx)("div", {
            className: "ChooseAccNameError",
            children: Au
          })]
        }), (0, Vu.jsx)(ku.c, {
          label: (() => {
            if ((0, Ou.j)(ru)) {
              const uu = (0, mu.n)(Xu.code, "general:timeLeft"),
                Ru = (0, Lu.fb)(uu, Date.now(), ru + Ou.h);
              return `${Nu("settingsMenu:hideSocialLocation")} (${Nu("general:timeLeft",{time:Ru})})`
            }
            return Nu("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const uu = !(0, Ou.j)(ru);
            (0, au.reportAnalyticsClick)({
              id: "social.hide_location",
              value: uu ? "on" : "off"
            }), ER(!0), cu.e.setHideSocialLocation(pu, uu).then((() => {
              eu.d.set({
                hideSocialLocationFrom: uu ? Date.now() : null
              })
            })).finally((() => {
              ER(!1)
            }))
          },
          checked: (0, Ou.j)(ru),
          disabled: yR
        }), TR && (0, Vu.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Vu.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Nu("settingsMenu:socialLinks")
          }), SR && (0, Vu.jsx)(Cu.b, {}), !SR && (0, Vu.jsx)(vu.c, {
            socialLinks: rR,
            editable: !0,
            userContext: pu,
            onLinksUpdated: jR
          })]
        }), (0, Vu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Vu.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Nu(VR ? "auth:loginOrSwitchAccount" : "auth:login")
          }), JR && (0, Vu.jsx)(Cu.b, {}), !JR && 0 === NR.length && (0, Vu.jsx)("div", {
            className: "NoLoginOptions",
            children: Nu("auth:noLoginOptions")
          }), !JR && NR.length > 0 && "crazygames" !== Mu.v && (0, Vu.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: NR
          }), !JR && NR.length > 0 && "crazygames" === Mu.v && (0, Vu.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [NR[0], NR.length > 1 && (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Vu.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Nu("auth:legacyLoginOptions")
                }), (0, Vu.jsx)(qu.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Nu("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Vu.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: NR.slice(1)
              })]
            })]
          }), Wu.featureFlags.useLogin && (null !== pu.loggedInInfo || pu.isLoggedIn()) && (0, Vu.jsxs)(Vu.Fragment, {
            children: [(0, Vu.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Vu.jsxs)(Tu.F, {
              onClick: () => {
                (0, Iu.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Vu.jsx)(Ju.c, {
                name: "right-from-bracket"
              }), Nu("auth:signOut")]
            })]
          })]
        }), !pu.playerHasRank("super") && (0, Fu.purchasesAllowed)() && (0, Vu.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Vu.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Vu.jsx)(Ju.c, {
              name: "bolt"
            }), Nu("homePage:superRank")]
          }), (0, Vu.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Vu.jsxs)(Tu.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zu.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Vu.jsx)(Ju.c, {
                name: "bolt"
              }), Nu("homePage:getSuperRank")]
            }), (0, Vu.jsxs)(Tu.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zu.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Vu.jsx)(Ju.c, {
                name: "bolt"
              }), Nu("homePage:giftSuperRank")]
            })]
          })]
        }), pu.playerHasRank("super") && (0, Vu.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Vu.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Vu.jsx)(Ju.c, {
              name: "bolt"
            }), Nu("homePage:superRank"), Yu && (0, Vu.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Yu, ")"]
            })]
          }), (0, Fu.purchasesAllowed)() && (0, Vu.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Lu.Kc)(pu.superRankInfo) && (0, Vu.jsxs)(Tu.l, {
              className: "AccountSettingsSuperRankProlong",
              loading: wu,
              onClick: () => {
                hu(lu.j.id, null)
              },
              children: [(0, Vu.jsx)(Ju.c, {
                name: "bolt"
              }), Nu("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: lu.j.product.days,
                price: lu.j.price
              })]
            }), (0, Vu.jsxs)(Tu.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zu.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Vu.jsx)(Ju.c, {
                name: "bolt"
              }), Nu("homePage:giftSuperRank")]
            })]
          }), Zu && (0, Vu.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Nu(Zu.translationKey)
          })]
        }), (0, Vu.jsx)(RR, {
          showing: yu
        }), Wu.featureFlags.useSocialFeatures && (0, Vu.jsx)(WR, {
          showing: yu
        }), (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Vu.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Vu.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Nu(HR(XR, VR))
            }), (0, Mu.c)() && (0, Vu.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Nu("auth:discordActivityKickWarning")
            }), (0, Vu.jsx)(xR, {
              showing: yu
            })]
          }), (0, Vu.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Nu("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function HR(uu, Ru) {
      return uu ? Ru ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var dR = yu(8955),
      bR = yu(2916),
      CR = yu(1224),
      kR = yu(1389);
    const eR = (0, Eu.memo)((function(uu) {
        let {
          inGame: Ru
        } = uu;
        const {
          t: yu,
          selectedLanguage: Eu
        } = (0, mu.E)(), {
          clientEscMenuOptions: Ku,
          showDebugOverlay: Qu
        } = (0, eu.j)(["clientEscMenuOptions", "showDebugOverlay"]), Ju = (0, Su.g)("hideCoordinates");
        let Nu = "settingsMenu:showCoordinates",
          Xu = "settingsMenu:showChunkCoordinates";

        function ru(uu) {
          const Ru = new Intl.DisplayNames([uu], {
            type: "language"
          }).of(uu);
          return Ru.charAt(0).toUpperCase() + Ru.slice(1)
        }
        return Ju && (Nu = "settingsMenu:showCoordinatesHidden", Xu = "settingsMenu:showChunkCoordinatesHidden"), (0, Vu.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Ru && Wu.featureFlags.canUseInviteLinks && (0, Vu.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Vu.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: yu("settingsMenu:inviteLink")
            }), (0, Vu.jsx)(dR.e, {})]
          }), (0, Vu.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Vu.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: yu("settingsMenu:language")
            }), (0, Vu.jsx)(bR.d, {
              options: Object.entries(mu.i).map((uu => {
                let [Ru, yu] = uu;
                return {
                  label: (0, Vu.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Vu.jsx)("img", {
                      src: yu.flagImg,
                      alt: "flag"
                    }), (0, Vu.jsxs)("span", {
                      children: [ru(Ru), " ", (0, Vu.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Ru, ")"]
                      })]
                    })]
                  }),
                  value: Ru
                }
              })),
              value: Eu.code,
              onChange: uu => {
                CR.f.get().setCurrentLanguage(uu.value)
              }
            })]
          }), !(0, Wu.isMobileApp)() && (0, kR.g)() && Wu.featureFlags.useForceRotateForceFullscreenOverlay && (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:disableFullscreenMode"),
            checked: Ku.disableFullscreen,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                disableFullscreen: uu
              })
            }
          }), (0, Vu.jsx)(ku.c, {
            label: yu(Nu),
            checked: Ku.showCoordinates,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                showCoordinates: uu
              })
            },
            disabled: Ju
          }), (0, Vu.jsx)(ku.c, {
            label: yu(Xu),
            checked: Ku.showChunkCoordinates,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                showChunkCoordinates: uu
              })
            },
            disabled: Ju
          }), (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:showFps"),
            checked: Ku.showFPS,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                showFPS: uu
              })
            }
          }), (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:disableBunnyHopping"),
            checked: Ku.disableBunnyHopping,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                disableBunnyHopping: uu
              })
            }
          }), (0, QR.G)() && (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:showChat"),
            checked: Ku.showChat,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                showChat: uu
              })
            }
          }), (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:showDebugOverlay"),
            checked: Qu,
            onClick: uu => {
              eu.d.set({
                showDebugOverlay: uu
              })
            }
          }), Wu.featureFlags.useSocialFeatures && (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:showFriendOnlineToasts"),
            checked: Ku.showFriendOnlineToasts,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                showFriendOnlineToasts: uu
              })
            }
          }), (0, Vu.jsx)(ku.c, {
            label: yu("settingsMenu:showNewItemIndicator"),
            checked: Ku.showNewItemIndicator,
            onClick: uu => {
              eu.d.setClientEscMenuOptions({
                showNewItemIndicator: uu
              })
            }
          })]
        })
      })),
      AR = (0, Eu.memo)((function() {
        const {
          t: uu
        } = (0, mu.E)(), {
          soundVolume: Ru,
          musicVolume: yu
        } = (0, eu.j)(["soundVolume", "musicVolume"]);
        return (0, Vu.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Vu.jsx)(ku.g, {
            name: uu("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: yu,
            onChange: uu => {
              eu.d.set({
                musicVolume: Math.round(100 * uu) / 100
              })
            },
            format: uu => uu.toFixed(2)
          }), (0, Vu.jsx)(ku.g, {
            name: uu("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Ru,
            onChange: uu => {
              eu.d.set({
                soundVolume: Math.round(100 * uu) / 100
              })
            },
            format: uu => uu.toFixed(2)
          })]
        })
      }));
    var DR = yu(697),
      MR = yu(1400),
      IR = yu(3479),
      GR = yu(8960),
      UR = yu(3307);
    const nR = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function sR() {
      const {
        t: uu
      } = (0, mu.E)(), Ru = (0, UR.b)(), {
        mobilePushNotificationsCanAsk: yu
      } = (0, eu.j)(["mobilePushNotificationsCanAsk"]), [Ku, Qu] = (0, Eu.useState)(null), [Ju, Nu] = (0, Eu.useState)(!1), [Xu, ru] = (0, Eu.useState)(null), [Bu, xu] = (0, Eu.useState)(!1), Su = (0, Eu.useCallback)((() => {
        (0, IR.b)().then((uu => {
          Ru.current && (Qu(uu), Nu(!1))
        })).catch((uu => {
          console.error("Failed to load push notification targets:", uu), Ru.current && Nu(!0)
        }))
      }), [Ru]), pu = (0, Eu.useCallback)((() => {
        (0, GR.b)().then((uu => {
          Ru.current && ru((() => uu))
        }))
      }), [Ru]);
      (0, Eu.useEffect)((() => {
        Su()
      }), [Su]), (0, Eu.useEffect)((() => {
        pu()
      }), [pu, yu]), (0, MR.e)(IR.e, Su);
      const Wu = null === Ku ? [] : Object.keys(nR).filter((uu => Ku[uu] > 0));
      return (0, Vu.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Vu.jsx)("div", {
          className: "SliderText",
          children: uu("notificationSettings:pushNotifications")
        }), null === Ku && Ju && (0, Vu.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: uu("notificationSettings:pushTargetsLoadFailed")
        }), null !== Ku && 0 === Wu.length && (0, Vu.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: uu("notificationSettings:pushTargetsNone")
        }), Wu.length > 0 && (0, Vu.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Wu.map((Ru => {
            var yu;
            return (0, Vu.jsx)("li", {
              children: uu(nR[Ru], {
                count: null !== (yu = null === Ku || void 0 === Ku ? void 0 : Ku[Ru]) && void 0 !== yu ? yu : 0
              })
            }, Ru)
          }))
        }), null !== Xu && (0, Vu.jsx)(Tu.e, {
          className: "PushNotificationSettingsButton",
          loading: Bu,
          onClick: () => {
            xu(!0), Xu().catch((uu => {
              console.error("Failed to turn on push notifications:", uu)
            })).finally((() => {
              Ru.current && (xu(!1), pu())
            }))
          },
          children: uu("notificationSettings:pushTurnOn")
        })]
      })
    }
    const tR = {
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
      lR = (0, Eu.memo)((function() {
        const {
          t: uu
        } = (0, mu.E)(), {
          clientEscMenuOptions: Ru
        } = (0, eu.j)(["clientEscMenuOptions"]);
        return (0, Vu.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Vu.jsx)(ku.f, {
            label: uu("notificationSettings:friendRequests"),
            options: DR.d.map((Ru => ({
              value: Ru,
              label: uu(tR[Ru].label)
            }))),
            value: Ru.friendRequestNotifications,
            onChange: uu => {
              eu.d.setClientEscMenuOptions({
                friendRequestNotifications: uu
              })
            },
            circleInfoText: (0, Vu.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: DR.d.map((Ru => (0, Vu.jsxs)("div", {
                children: [(0, Vu.jsx)("b", {
                  children: uu(tR[Ru].label)
                }), ": ", uu(tR[Ru].info)]
              }, Ru)))
            })
          }), (0, Vu.jsx)(sR, {})]
        })
      }));
    var gR = yu(4271),
      cR = yu(212),
      LR = yu(305),
      zR = yu(6436),
      FR = yu(3255),
      wR = yu(8965),
      ZR = yu(610),
      hR = yu(34);
    var PR = yu(624),
      iR = yu(47),
      YR = yu(4145);
    const oR = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function qR(uu) {
      return oR.has(uu) ? ju.gameBridge.lookup("DH", null) : null
    }

    function OR(uu) {
      if (!(0, ZR.E)(eu.d.get("clientEscMenuOptions")[uu])) return eu.d.get("clientEscMenuOptions")[uu];
      const Ru = qR(uu);
      return null !== Ru ? Ru[oR.get(uu)] : iR.i.getItem(uu)
    }

    function vR(uu, Ru) {
      if ("useTouchControls" === uu) return void(0, YR.c)(Ru);
      uu in eu.d.get("clientEscMenuOptions") && eu.d.setClientEscMenuOptions({
        [uu]: Ru
      });
      const yu = qR(uu);
      null !== yu && ju.gameBridge.send("setChunkAddDistance", {
        ...yu,
        [oR.get(uu)]: Ru
      }), iR.i.setItem(uu, Ru)
    }
    var aR = yu(4185),
      fR = yu(8971),
      uy = yu(8973),
      Ry = yu(4263);

    function yy(uu) {
      var Ru, Ku, Ju, Nu;
      let {
        minChunkAddDist: Xu,
        getValue: ru,
        onChange: Bu,
        setApplySettingsCallback: xu
      } = uu;
      const {
        t: pu
      } = (0, mu.E)(), {
        clientEscMenuOptions: Tu
      } = (0, eu.j)(["clientEscMenuOptions", "showDistantNametags"]), ju = (0, Eu.useRef)(ru("showFog")), Hu = (0, Eu.useRef)(Tu.antiAliasing), du = (0, Eu.useRef)(Tu.useWebGpu), [bu, Cu] = (0, Eu.useState)(null), [Du, Mu] = (0, Eu.useState)((() => (0, FR.h)(Wu.featureFlags.settings.canUseShaderPacks))), [Iu] = (0, Eu.useState)((() => eu.d.isWebGpuDefaultOff())), [Gu] = (0, Eu.useState)(LR.f);
      (0, Eu.useEffect)((() => {
        let uu = !1;
        return (0, Wu.hasUsableWebGpuAdapter)().then((Ru => {
          uu || Cu(Ru)
        })), (0, FR.m)(Wu.featureFlags.settings.canUseShaderPacks) && (0, zR.h)().then((async Ru => {
          const Eu = null !== Ru && await async function(uu) {
            const [{
              isShaderPackActive: Ru
            }, {
              loadPageShaderPackCompiler: Eu
            }] = await Promise.all([yu.e(127).then((() => yu(6430))), Promise.all([yu.e(74), yu.e(131), yu.e(130)]).then((() => yu(6395)))]);
            return Ru(uu, await Eu())
          }(Ru);
          uu || Mu(Eu)
        })), () => {
          uu = !0
        }
      }), []);
      const Uu = function(uu, Ru, yu, Eu, Ku) {
          return (0, wR.e)(yu, Eu) && !0 === Ru ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Ru ? "settingsMenu:newWebGpu" : Ku ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: uu && !1 !== Ru,
            disabled: !0 !== Ru
          }
        }(Tu.useWebGpu, bu, Du, Iu, Gu),
        nu = (Tu.useWebGpu || (0, wR.e)(Du, Iu)) && Du && !0 === bu,
        su = (0, Su.g)("lightingOverride"),
        tu = !(0, ZR.E)(su);
      let lu = "settingsMenu:enableLighting";
      tu && (lu = su ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const gu = uu => {
          var Ru, yu, Eu;
          const Ku = null !== (Ru = uu.showFog) && void 0 !== Ru ? Ru : ru("showFog"),
            Qu = null !== (yu = uu.antiAliasing) && void 0 !== yu ? yu : Tu.antiAliasing,
            mu = null !== (Eu = uu.useWebGpu) && void 0 !== Eu ? Eu : Tu.useWebGpu,
            Ju = !PR.q && Ku !== ju.current || Qu !== Hu.current || mu !== du.current;
          xu(Ju ? () => ku.i : null)
        },
        cu = (0, Su.g)("fogChunkDistanceOverride"),
        Lu = (0, Su.g)("fogBlockDistanceOverride"),
        zu = !(0, ZR.E)(cu) || !(0, ZR.E)(Lu),
        Fu = zu ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [wu, Zu] = (0, gR.f)(Xu),
        [hu, Pu] = (0, Ry.e)(Xu),
        iu = pu("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Yu = hu < wu,
        ou = Math.min(null !== (Ru = ru("chunkHorizAddDist")) && void 0 !== Ru ? Ru : Xu[0], hu),
        qu = !zu && function(uu, Ru) {
          return !0 === uu.showFog && uu.fogChunkDistance > Ru
        }(Tu, ou);
      return (0, Vu.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Vu.jsx)(ku.g, {
          name: pu("settingsMenu:horizontalChunkLoadDistance"),
          min: Xu[0],
          max: wu,
          selectableMax: hu,
          cappedNote: iu,
          step: 1,
          initValue: ou,
          onChange: uu => {
            !0 === ru("showFog") && uu < ru("fogChunkDistance") && Bu("fogChunkDistance", uu), Bu("chunkHorizAddDist", uu), hR.k.Op("updatedChunkLoadDist")
          },
          circleInfoText: pu("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Vu.jsx)(ku.g, {
          name: pu("settingsMenu:verticalChunkLoadDistance"),
          min: Xu[1],
          max: Zu,
          selectableMax: Pu,
          cappedNote: Yu ? void 0 : iu,
          step: 1,
          initValue: Math.min(null !== (Ku = ru("chunkVertAddDist")) && void 0 !== Ku ? Ku : Xu[1], Pu),
          onChange: uu => {
            Bu("chunkVertAddDist", uu), hR.k.Op("updatedChunkLoadDist")
          },
          circleInfoText: pu("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Vu.jsx)(ku.c, {
          label: pu("settingsMenu:chunkFadeIn"),
          checked: Tu.chunkFadeIn,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              chunkFadeIn: uu
            })
          },
          circleInfoText: pu("settingsMenu:chunkFadeInInfo")
        }), Au.devTools.supports("chunkBorders") && (0, Vu.jsx)(ku.c, {
          label: pu("settingsMenu:showChunkBorders"),
          checked: Tu.showChunkBorders,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              showChunkBorders: uu
            })
          },
          circleInfoText: pu("settingsMenu:showChunkBordersInfo")
        }), (0, Vu.jsx)(ku.c, {
          label: pu(lu),
          checked: Tu.enableLighting,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              enableLighting: uu
            })
          },
          disabled: tu
        }), (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Vu.jsx)(ku.c, {
            label: pu(Fu),
            checked: Tu.showFog,
            onClick: uu => {
              gu({
                showFog: uu
              }), eu.d.setClientEscMenuOptions({
                showFog: uu
              })
            },
            disabled: zu,
            className: Qu()({
              SettingBoxWarning: qu
            })
          }), (0, Vu.jsx)(ku.g, {
            name: pu("settingsMenu:fogChunkDistance"),
            min: Xu[0],
            max: cR.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Ju = Tu.fogChunkDistance) && void 0 !== Ju ? Ju : Xu[0],
            onChange: uu => {
              eu.d.setClientEscMenuOptions({
                fogChunkDistance: uu
              }), hR.k.Op("fogChunkDistanceChanged", uu)
            },
            circleInfoText: pu("settingsMenu:fogChunkDistanceInfo"),
            disabled: zu || !1 === ru("showFog"),
            className: Qu()({
              SettingBoxWarning: qu
            })
          }), qu && (0, Vu.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: pu("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !PR.q && (0, Vu.jsx)(ku.c, {
          label: pu(nu ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !nu && Tu.disableTexAtlas,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              disableTexAtlas: uu
            })
          },
          circleInfoText: pu("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: nu
        }), (0, Vu.jsx)(ku.g, {
          name: pu("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Tu.cameraFOV,
          onChange: uu => {
            eu.d.setClientEscMenuOptions({
              cameraFOV: uu
            })
          }
        }), (0, Vu.jsx)(ku.c, {
          label: pu("settingsMenu:disableViewBobbing"),
          checked: Tu.disableBobbing,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              disableBobbing: uu
            })
          },
          circleInfoText: pu("settingsMenu:disableViewBobbingInfo")
        }), (0, Vu.jsx)(ku.c, {
          label: pu("settingsMenu:antiAliasing"),
          checked: Tu.antiAliasing,
          onClick: uu => {
            gu({
              antiAliasing: uu
            }), (0, aR.g)("antiAliasing"), eu.d.setClientEscMenuOptions({
              antiAliasing: uu
            })
          },
          circleInfoText: pu("settingsMenu:antiAliasingInfo")
        }), (0, Vu.jsx)(ku.g, {
          name: pu("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Nu = Tu.pixelScale) && void 0 !== Nu ? Nu : 1,
          onChange: uu => {
            (uu !== eu.d.get("clientEscMenuOptions").pixelScale || (0, uy.s)()) && (0, aR.g)("pixelScale"), eu.d.setClientEscMenuOptions({
              pixelScale: uu
            })
          },
          circleInfoText: pu("settingsMenu:pixelScaleInfo"),
          format: uu => `${uu}x`
        }), (0, Vu.jsx)(ku.c, {
          label: pu("settingsMenu:pixelSmoothing"),
          checked: Tu.pixelSmoothing,
          onClick: uu => {
            eu.d.setClientEscMenuOptions({
              pixelSmoothing: uu
            })
          },
          circleInfoText: pu("settingsMenu:pixelSmoothingInfo")
        }), PR.q && (0, Vu.jsx)(ku.c, {
          label: pu("settingsMenu:distantNametags"),
          checked: (0, fR.e)(),
          onClick: uu => {
            eu.d.set({
              showDistantNametags: uu
            })
          },
          circleInfoText: pu("settingsMenu:distantNametagsInfo")
        }), (0, Vu.jsx)(ku.c, {
          label: pu(Uu.translationKey),
          checked: Uu.checked,
          onClick: uu => {
            gu({
              useWebGpu: uu
            }), eu.d.setClientEscMenuOptions({
              useWebGpu: uu
            })
          },
          circleInfoText: pu("settingsMenu:newWebGpuInfo"),
          disabled: Uu.disabled
        })]
      })
    }
    var Ey = yu(4179),
      Ky = yu(8611),
      Qy = yu(8991),
      my = yu(8623),
      Jy = yu(8996);
    const Ny = {
        color: 16777215,
        name: "white"
      },
      Xy = {
        color: 0,
        name: "black"
      },
      Vy = [Ny, {
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
      }, Xy],
      ry = [Xy, Ny];

    function By(uu) {
      return `${uu} px`
    }

    function xy(uu) {
      return `${uu}%`
    }

    function Sy(uu) {
      let {
        label: Ru,
        value: yu,
        swatches: Eu,
        onChange: Ku
      } = uu;
      const {
        t: Ju
      } = (0, mu.E)(), Nu = !Eu.some((uu => uu.color === yu));
      return (0, Vu.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Vu.jsx)("div", {
          className: "SliderText",
          children: Ru
        }), (0, Vu.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Ru,
          children: [Eu.map((uu => {
            let {
              color: Ru,
              name: Eu
            } = uu;
            return (0, Vu.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Ru === yu,
              "aria-label": Ju(`crosshairSettings:color_${Eu}`),
              "data-pad-focusable": !0,
              className: Qu()("CrosshairSwatch", {
                Selected: Ru === yu
              }),
              style: {
                background: (0, Jy.m)(Ru)
              },
              onClick: () => {
                Ku(Ru)
              }
            }, Ru)
          })), (0, Vu.jsx)("label", {
            className: Qu()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Nu
            }),
            style: Nu ? {
              background: (0, Jy.m)(yu)
            } : void 0,
            title: Ju("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Vu.jsx)("input", {
              type: "color",
              "aria-label": Ju("crosshairSettings:customColor"),
              value: (0, Jy.m)(yu),
              onChange: uu => {
                const Ru = (0, Jy.r)(uu.target.value);
                null !== Ru && Ku(Ru)
              }
            })
          })]
        })]
      })
    }

    function py(uu) {
      let {
        settings: Ru,
        onChange: yu
      } = uu;
      const {
        t: Eu
      } = (0, mu.E)(), Ku = (uu, Eu) => {
        yu((0, Jy.t)(Ru, uu, Eu))
      }, Qu = function(uu, yu) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : By;
        const {
          min: Qu,
          max: mu,
          step: Ju
        } = Jy.d[uu];
        return (0, Vu.jsx)(ku.g, {
          name: yu,
          min: Qu,
          max: mu,
          step: Ju,
          initValue: Ru[uu],
          format: Eu,
          onChange: Ru => {
            Ku(uu, Ru)
          }
        }, uu)
      }, Ju = ["lines", "dot", "circle"].filter((uu => Ru[uu])), Nu = (uu, yu, Eu) => (0, Vu.jsx)(ku.c, {
        label: yu,
        checked: Ru[uu],
        disabled: 1 === Ju.length && Ju[0] === uu,
        circleInfoText: Eu,
        onClick: Ru => {
          Ku(uu, Ru)
        }
      }, uu), Xu = "shapes" === Ru.style;
      return (0, Vu.jsxs)(Vu.Fragment, {
        children: [(0, Vu.jsx)(ku.f, {
          label: Eu("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Eu("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Eu("crosshairSettings:styleShapes")
          }],
          value: Ru.style,
          onChange: uu => {
            Ku("style", uu)
          }
        }), (0, Vu.jsx)(Sy, {
          label: Eu("crosshairSettings:color"),
          value: Ru.color,
          swatches: Vy,
          onChange: uu => {
            Ku("color", uu)
          }
        }), Qu("opacity", Eu("crosshairSettings:opacity"), xy), !Xu && Qu("size", Eu("crosshairSettings:size"), xy), Xu && (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Nu("lines", Eu("crosshairSettings:lines")), Ru.lines && Qu("lineLength", Eu("crosshairSettings:lineLength")), Ru.lines && Qu("lineThickness", Eu("crosshairSettings:lineThickness")), Ru.lines && Qu("gap", Eu("crosshairSettings:gap")), Ru.lines && Nu("tStyle", Eu("crosshairSettings:tStyle"))]
        }), Xu && (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Nu("dot", Eu("crosshairSettings:dot")), Ru.dot && Qu("dotSize", Eu("crosshairSettings:dotSize"))]
        }), Xu && (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Nu("circle", Eu("crosshairSettings:circle")), Ru.circle && Qu("circleRadius", Eu("crosshairSettings:circleRadius")), Ru.circle && Qu("circleThickness", Eu("crosshairSettings:circleThickness"))]
        }), (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Qu("outline", Eu("crosshairSettings:outline"), (uu => uu > 0 ? By(uu) : Eu("crosshairSettings:off"))), Ru.outline > 0 && (0, Vu.jsx)(Sy, {
            label: Eu("crosshairSettings:outlineColor"),
            value: Ru.outlineColor,
            swatches: ry,
            onChange: uu => {
              Ku("outlineColor", uu)
            }
          })]
        }), Nu("growOnClick", Eu("crosshairSettings:growOnClick")), Xu && Nu("forGuns", Eu("crosshairSettings:forGuns"), Eu("crosshairSettings:forGunsInfo"))]
      })
    }
    var Ty = yu(80),
      Wy = yu(1247),
      jy = yu(8998),
      Hy = yu(9006),
      dy = yu(9014),
      by = yu(9018);
    const Cy = ["sky", "grass", "stone", "sand", "snow", "night"],
      ky = "4rem";

    function ey(uu) {
      return {
        backgroundImage: `url(${uu})`,
        backgroundSize: `${ky} ${ky}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Ay(uu) {
      return {
        ...(() => {
          switch (uu) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return ey(jy);
            case "stone":
              return ey(Hy);
            case "sand":
              return ey(dy);
            case "snow":
              return ey(by);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Dy(uu) {
      return Object.freeze({
        ...Jy.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...uu
      })
    }
    const My = [{
        id: "default",
        settings: Jy.h
      }, {
        id: "cross",
        settings: Dy({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Dy({
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
        settings: Dy({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Dy({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Dy({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Dy({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Dy({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Iy = ["growOnClick", "forGuns"];
    var Gy = yu(9023);

    function Uy(uu) {
      let {
        label: Ru,
        selected: yu,
        onClick: Eu,
        className: Ku,
        style: mu,
        children: Ju
      } = uu;
      return (0, Vu.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": yu,
        title: Ru,
        "aria-label": Ru,
        "data-pad-focusable": !0,
        className: Qu()("CrosshairBackdropSwatch", Ku, {
          Selected: yu
        }),
        style: mu,
        onClick: Eu,
        children: Ju
      })
    }

    function ny(uu) {
      let {
        backdrop: Ru,
        onChange: yu,
        game: Eu
      } = uu;
      const {
        t: Ku
      } = (0, mu.E)();
      return (0, Vu.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Ku("crosshairSettings:background"),
        children: [Eu && (0, Vu.jsx)(Uy, {
          label: Ku("crosshairSettings:bg_game"),
          selected: Eu.selected,
          onClick: Eu.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Vu.jsx)(Ju.c, {
            name: "cube"
          })
        }), Cy.map((uu => (0, Vu.jsx)(Uy, {
          label: Ku(`crosshairSettings:bg_${uu}`),
          selected: !(null !== Eu && void 0 !== Eu && Eu.selected) && uu === Ru,
          style: Ay(uu),
          onClick: () => {
            yu(uu)
          }
        }, uu)))]
      })
    }

    function sy(uu) {
      let {
        settings: Ru,
        touch: yu,
        backdrop: Eu,
        onChange: Ku
      } = uu;
      const {
        t: Ju
      } = (0, mu.E)(), Nu = function(uu) {
        var Ru;
        return null !== (Ru = My.find((Ru => (0, Jy.s)(Ru.settings, uu, Iy)))) && void 0 !== Ru ? Ru : null
      }(Ru);
      return (0, Vu.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Ju("crosshairSettings:presets"),
        children: My.map((uu => {
          const mu = (null === Nu || void 0 === Nu ? void 0 : Nu.id) === uu.id;
          return (0, Vu.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": mu,
            "data-pad-focusable": !0,
            className: Qu()("CrosshairPreset", {
              Selected: mu
            }),
            onClick: () => {
              Ku(function(uu, Ru) {
                return {
                  ...Ru.settings,
                  growOnClick: uu.growOnClick,
                  forGuns: uu.forGuns
                }
              }(Ru, uu))
            },
            children: [(0, Vu.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Ay(Eu),
              children: (0, Vu.jsx)(Gy.b, {
                settings: uu.settings,
                touch: yu,
                inPreview: !0
              })
            }), (0, Vu.jsx)("div", {
              className: "CrosshairPresetName",
              children: Ju(`crosshairSettings:preset_${uu.id}`)
            })]
          }, uu.id)
        }))
      })
    }
    var ty = yu(1615);

    function ly(uu, Ru) {
      const [yu, Ku] = (0, Eu.useState)(!1), Qu = () => {
        Ku(!1)
      }, [mu, Ju] = (0, Eu.useState)(!1), Nu = (0, Eu.useRef)({
        growOnClick: uu.growOnClick,
        forGuns: uu.forGuns
      });
      (0, Eu.useEffect)((() => {
        const Ru = Nu.current;
        Nu.current = {
          growOnClick: uu.growOnClick,
          forGuns: uu.forGuns
        }, (uu.growOnClick && !Ru.growOnClick || uu.forGuns && !Ru.forGuns) && Ju(!0)
      }), [uu.growOnClick, uu.forGuns]), (0, Eu.useEffect)((() => {
        if (!mu) return;
        const uu = setTimeout((() => {
          Ju(!1)
        }), 600);
        return () => {
          clearTimeout(uu)
        }
      }), [mu]);
      const Xu = yu || mu;
      return {
        view: {
          pressed: Xu,
          spread: Xu && uu.forGuns && !uu.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: uu => {
            !uu.target.closest(Ru) && (0, ty.d)(uu.currentTarget, uu.pointerId) && Ku(!0)
          },
          onPointerUp: Qu,
          onPointerCancel: Qu,
          onLostPointerCapture: Qu
        }
      }
    }

    function gy(uu) {
      let {
        settings: Ru,
        touch: yu,
        backdrop: Eu,
        className: Ku,
        children: mu,
        label: Ju
      } = uu;
      const Nu = ly(Ru, ".CrosshairStageControls");
      return (0, Vu.jsxs)("div", {
        className: Qu()("CrosshairStage", Ku),
        style: Ay(Eu),
        ...Nu.handlers,
        children: [(0, Vu.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Ju,
          children: (0, Vu.jsx)(Gy.b, {
            settings: Ru,
            touch: yu,
            inPreview: !0,
            ...Nu.view
          })
        }), mu]
      })
    }
    const cy = "crosshairFullScreen";

    function Ly(uu) {
      let {
        settings: Ru,
        touch: yu,
        backdrop: Ku,
        onBackdrop: Nu,
        inGame: Xu,
        onChange: ru,
        onClose: Bu
      } = uu;
      const {
        t: xu
      } = (0, mu.E)(), Su = (0, Eu.useRef)(null);
      (0, Wy.t)("popup", Su, Bu),
      function(uu) {
        const Ru = (0, Eu.useRef)(uu);
        Ru.current = uu, (0, Eu.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [cy]: !0
          }, "");
          let uu = !1;
          const yu = () => {
            uu = !0, Ru.current()
          };
          return window.addEventListener("popstate", yu), () => {
            var Ru;
            window.removeEventListener("popstate", yu), !uu && null !== (Ru = window.history.state) && void 0 !== Ru && Ru[cy] && window.history.back()
          }
        }), [])
      }(Bu);
      const pu = (0, Eu.useRef)(Bu);
      pu.current = Bu, (0, Eu.useEffect)((() => {
        function uu(uu) {
          "Escape" === uu.key && (uu.stopPropagation(), pu.current())
        }
        return window.addEventListener("keydown", uu, !0), () => {
          window.removeEventListener("keydown", uu, !0)
        }
      }), []);
      const Wu = ly(Ru, ".CrosshairFullScreenPanel"),
        [ju, Hu] = (0, Eu.useState)(!0),
        du = ju && Xu;
      (0, Eu.useEffect)((() => {
        if (du) return eu.d.set({
          crosshairGameView: !0
        }), () => {
          eu.d.set({
            crosshairGameView: !1
          })
        }
      }), [du]);
      const [bu, Cu] = (0, Eu.useState)(!0);
      return (0, Ty.createPortal)((0, Vu.jsxs)("div", {
        ref: Su,
        className: "CrosshairFullScreen",
        style: du ? void 0 : Ay(Ku),
        ...Wu.handlers,
        children: [(0, Vu.jsx)(Gy.b, {
          settings: Ru,
          touch: yu,
          inEditor: !0,
          ...Wu.view
        }), (0, Vu.jsxs)("div", {
          className: Qu()("CrosshairFullScreenPanel", {
            Collapsed: !bu
          }),
          children: [(0, Vu.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Vu.jsx)(ny, {
              backdrop: Ku,
              onChange: uu => {
                Hu(!1), Nu(uu)
              },
              game: Xu ? {
                selected: du,
                onSelect: () => {
                  Hu(!0)
                }
              } : void 0
            }), (0, Vu.jsx)(Tu.P, {
              className: "CrosshairPanelToggle",
              ariaLabel: xu(bu ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                Cu(!bu)
              },
              children: (0, Vu.jsx)(Ju.c, {
                name: bu ? "caret-up" : "pen"
              })
            }), (0, Vu.jsx)(Tu.e, {
              className: "CrosshairFullScreenDone",
              onClick: Bu,
              padDefaultFocus: !0,
              children: xu("crosshairSettings:done")
            })]
          }), bu && (0, Vu.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Vu.jsx)(sy, {
              settings: Ru,
              touch: yu,
              backdrop: Ku,
              onChange: ru
            }), (0, Vu.jsx)(py, {
              settings: Ru,
              onChange: ru
            })]
          })]
        })]
      }), document.body)
    }
    var zy = yu(2529),
      Fy = yu(9030);

    function wy(uu) {
      let {
        settings: Ru,
        onChange: yu
      } = uu;
      const {
        t: Ku
      } = (0, mu.E)(), Nu = (0, Fy.i)(Ru), [Xu, ru] = (0, zy.i)(), [Bu, xu] = (0, Eu.useState)(!1), Su = (0, Eu.useRef)(null), [pu, Wu] = (0, zy.i)(), [ju, Hu] = (0, Eu.useState)(!1);
      return (0, Vu.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Vu.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Vu.jsxs)(Tu.P, {
            className: Qu()("CrosshairCopy", {
              ActiveSecondaryButton: Xu
            }),
            onClick: () => {
              (0, zy.f)(Nu, {
                useShareSheet: !1,
                onOutcome: uu => {
                  xu("failed" === uu), "copied" === uu && ru()
                }
              })
            },
            children: [(0, Vu.jsx)(Ju.c, {
              name: Xu ? "check" : "copy"
            }), " ", Ku(Xu ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Vu.jsx)(bu.b, {
            className: "CrosshairPaste",
            domRef: Su,
            ariaLabel: Ku("crosshairSettings:paste"),
            placeholderText: Ku("crosshairSettings:paste"),
            onValueChange: uu => {
              const Ru = (0, Fy.e)(uu);
              Hu(!Ru && uu.trim().length >= Fy.b), Ru && (yu(Ru), Su.current.value = "", Wu())
            }
          })]
        }), Bu && (0, Vu.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Nu,
          "aria-label": Ku("crosshairSettings:copy"),
          onFocus: uu => {
            uu.currentTarget.select()
          }
        }), (0, Vu.jsxs)("div", {
          "aria-live": "polite",
          children: [ju && (0, Vu.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Ku("crosshairSettings:pasteInvalid")
          }), pu && !ju && (0, Vu.jsx)("div", {
            className: "CrosshairShareNote",
            children: Ku("crosshairSettings:applied")
          })]
        })]
      })
    }
    var Zy = yu(9039);
    let hy = "sky";

    function Py(uu) {
      let {
        showing: Ru
      } = uu;
      const {
        t: yu
      } = (0, mu.E)(), {
        isTouchScreen: Ku,
        gameState: Qu,
        clientEscMenuOptions: Nu
      } = (0, eu.j)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Xu = (0, Zy.c)(), [ru, Bu] = (0, Eu.useState)(hy), xu = uu => {
        hy = uu, Bu(uu)
      }, [Su, pu] = (0, Eu.useState)(!1);
      return (0, Eu.useEffect)((() => {
        Ru || pu(!1)
      }), [Ru]), (0, Vu.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Vu.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Vu.jsx)(gy, {
            className: "CrosshairPreviewStage",
            settings: Xu,
            touch: Ku,
            backdrop: ru,
            label: yu("crosshairSettings:preview"),
            children: (0, Vu.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Vu.jsx)(ny, {
                backdrop: ru,
                onChange: xu
              }), (0, Vu.jsxs)(Tu.P, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  pu(!0)
                },
                children: [(0, Vu.jsx)(Ju.c, {
                  name: "expand"
                }), " ", yu("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Vu.jsx)("div", {
          className: "SettingBox",
          children: (0, Vu.jsx)(sy, {
            settings: Xu,
            touch: Ku,
            backdrop: ru,
            onChange: Zy.b
          })
        }), (0, Vu.jsx)(wy, {
          settings: Xu,
          onChange: Zy.b
        }), Ku && (0, Vu.jsx)(my.b, {
          note: (0, Qy.f)(Ku, Nu.touchActionButtons) ? yu("crosshairSettings:touchNote") : void 0
        }), (0, Vu.jsx)(py, {
          settings: Xu,
          onChange: Zy.b
        }), Su && (0, Vu.jsx)(Ly, {
          settings: Xu,
          touch: Ku,
          backdrop: ru,
          onBackdrop: xu,
          inGame: "inGame" === Qu,
          onChange: Zy.b,
          onClose: () => {
            pu(!1)
          }
        })]
      })
    }
    var iy = yu(8615),
      Yy = yu(1357),
      oy = yu(4780),
      qy = yu(9045),
      Oy = yu(1899),
      vy = yu(4091),
      ay = yu(1908),
      fy = yu(705);
    const uE = (0, Eu.memo)((function() {
      const {
        clientEscMenuOptions: uu
      } = (0, eu.j)(["clientEscMenuOptions"]), {
        recording: Ru,
        clipping: yu,
        hasClipBuffer: Ku
      } = (0, Oy.i)("replayRecorder"), mu = (0, Oy.h)("connectedGame", (uu => uu.replay)), Ju = (0, vy.i)(), Nu = !1 === (0, Su.g)("canRecordReplays");
      (0, Eu.useEffect)((() => {
        ju.gameBridge.send("setRecorderPrefs", {
          clipping: uu.enableClipping,
          clipSeconds: uu.clipDurationSeconds
        })
      }), [uu.enableClipping, uu.clipDurationSeconds]);
      const Xu = Ju || mu,
        ru = !Xu && !Nu,
        Bu = Ru || ru,
        xu = ru,
        pu = xu && yu && !Ru;

      function Wu() {
        Bu && ju.gameBridge.send("toggleRecording", null)
      }
      return (0, Vu.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Vu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Ru ? (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsxs)(Tu.F, {
                className: "ReplayViewerCategoryButton",
                onClick: Wu,
                disabled: !Bu,
                children: [(0, Vu.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Vu.jsx)(ay.b, {
                  noaAction: "recordGame"
                })]
              }), (0, Vu.jsx)(qy.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Vu.jsxs)(Tu.e, {
              className: "ReplayViewerCategoryButton",
              onClick: Wu,
              disabled: !Bu,
              children: [(0, Vu.jsx)("span", {
                children: "Start Recording"
              }), (0, Vu.jsx)(ay.b, {
                noaAction: "recordGame"
              })]
            })
          }), Nu && (0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Xu && !Ru && (0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Vu.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Vu.jsx)(ku.c, {
            label: "Enable clipping",
            checked: uu.enableClipping,
            disabled: !xu,
            onClick: function(uu) {
              xu && eu.d.setClientEscMenuOptions({
                enableClipping: uu
              })
            },
            className: Qu()({
              SettingBoxDisabled: !xu
            })
          }), (0, Vu.jsx)(ku.g, {
            name: "Clip duration (seconds)",
            min: fy.h,
            max: fy.g,
            step: fy.b,
            initValue: uu.clipDurationSeconds,
            onChange: function(uu) {
              eu.d.setClientEscMenuOptions({
                clipDurationSeconds: uu
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !xu || !uu.enableClipping
          })]
        }), (0, Vu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Vu.jsxs)(Tu.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              pu && ju.gameBridge.send("saveClip", null)
            },
            disabled: !pu,
            children: [(0, Vu.jsx)("span", {
              children: "Record clip"
            }), (0, Vu.jsx)(ay.b, {
              noaAction: "recordClip"
            })]
          }), uu.enableClipping && !Ku && xu && !Ru && (0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Ru && (0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Vu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Vu.jsxs)(Tu.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, vy.g)(!0), eu.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: Ju,
            children: [(0, Vu.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Vu.jsx)(ay.b, {
              noaAction: "replayViewerOpen"
            })]
          }), Ju && (0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Vu.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Vu.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Vu.jsx)("iframe", {
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
    var RE = yu(1823);
    const yE = {
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
        icon: () => (0, Vu.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Vu.jsx)("path", {
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
      ix: {
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

    function EE() {
      return Promise.all([yu.e(74), yu.e(131), yu.e(125), yu.e(122)]).then((() => yu(40642))).then((uu => ({
        default: uu.ShaderPackCategory
      })), (uu => (console.error("Failed to load the shader pack settings", uu), {
        default: KE
      })))
    }

    function KE() {
      const {
        t: uu
      } = (0, mu.E)();
      return (0, Vu.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: uu("shaderPack:tabLoadFailed")
      })
    }
    var QE = yu(1354);
    const mE = (0, Eu.lazy)((() => yu.e(263).then((() => yu(40632))).then((uu => ({
        default: uu.BloxdInformation
      }))))),
      JE = (0, Eu.lazy)(EE);

    function NE(uu) {
      return uu ? "general" : "account"
    }
    const XE = new Map,
      VE = (0, Eu.memo)((function(uu) {
        let {
          show: Ru,
          setBeforeResumeCallback: yu
        } = uu;
        (0, pu.d)();
        const {
          gameState: Ku,
          openSettingsCategory: Qu
        } = (0, eu.j)(["gameState", "openSettingsCategory"]), {
          userContext: Nu
        } = (0, xu.d)(), {
          t: Xu
        } = (0, mu.E)(), bu = (0, Bu.c)(), Cu = (0, Su.g)("minChunkAddDist"), ku = "inGame" === Ku, [Au, Iu] = (0, Eu.useState)(NE(ku)), [Gu, Uu] = (0, Eu.useState)(null), [nu, su] = (0, Eu.useState)([]), tu = (0, Eu.useRef)(function() {
          const uu = new Date,
            Ru = 6 * (uu.getMonth() + uu.getDate()) % XR.x.length;
          return [...XR.x, ...XR.x].slice(Ru, Ru + 6)
        }()), lu = (0, Eu.useRef)(null), gu = (0, MR.h)(Yy.k, (0, Yy.d)()), cu = Object.keys(yE).filter((uu => {
          switch (uu) {
            case "replayViewer":
              return ku;
            case "developerTools":
              return Nu.playerHasRank("developer") || !1;
            case "texturePack":
              return Wu.featureFlags.settings.canChangeTexturePack;
            case "ix":
              return Wu.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Wu.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Mu.v;
            case "controller":
              return Wu.featureFlags.useControllerSupport && (gu || "controller" === Au);
            default:
              return !0
          }
        }));
        (0, MR.e)("toggleFullCoordinateOverlay", (() => {
          const uu = OR("showCoordinates") && OR("showChunkCoordinates") && OR("showFPS");
          vR("showCoordinates", !uu), vR("showChunkCoordinates", !uu), vR("showFPS", !uu), bu()
        })), (0, MR.e)("updatedChunkLoadDist", (() => {
          bu()
        })), (0, Eu.useEffect)((() => {
          if (Uu(null), null === eu.d.get("openSettingsCategory")) {
            const uu = (0, QE.g)() ? XE.get(ku) : void 0;
            Iu(uu && cu.includes(uu) ? uu : NE(ku))
          }
        }), [Ru]), (0, Eu.useEffect)((() => {
          null !== Qu && (Iu(Qu), XE.set(ku, Qu), eu.d.set({
            openSettingsCategory: null
          }))
        }), [Qu, ku]), (0, Eu.useLayoutEffect)((() => {
          lu.current && (lu.current.scrollTop = 0)
        }), [Au, Ru]), (0, Eu.useEffect)((() => {
          "updateLog" === Au && (0, du.d)().then(su)
        }), [Au]), (0, Eu.useEffect)((() => {
          if ((0, ZR.E)(Cu)) return;
          const [uu, Ru] = (0, Ey.c)(), [yu, Eu] = (0, gR.f)(Cu), Ku = (0, RE.e)(Cu[0], uu, yu), Qu = (0, RE.e)(Cu[1], Ru, Eu);
          ju.gameBridge.send("setChunkAddDistance", {
            horizontal: Ku,
            vertical: Qu
          })
        }), [Cu]);
        const Lu = (0, Eu.useCallback)((async () => {
          Gu && (await Gu(), Uu(null))
        }), [Gu]);

        function zu() {
          eu.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, Eu.useEffect)((() => {
          yu((() => Lu))
        }), [Lu, yu]), (0, Vu.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Ru ? {} : {
            display: "none"
          },
          children: [(0, Vu.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Vu.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Vu.jsx)(ru, {
                items: cu.map((uu => {
                  const Ru = yE[uu].icon;
                  return {
                    id: uu,
                    faIcon: "string" === typeof Ru ? Ru : void 0,
                    iconElement: "string" === typeof Ru ? void 0 : (0, Vu.jsx)(Ru, {}),
                    title: Xu(yE[uu].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Au,
                onClick: uu => {
                  !async function(uu) {
                    await Lu(), Iu(uu), XE.set(ku, uu)
                  }(uu)
                }
              })
            })
          }), (0, Vu.jsxs)("div", {
            ref: lu,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Au && (0, Vu.jsx)(jR, {
              showing: Ru,
              inGame: ku
            }), "general" === Au && (0, Vu.jsx)(eR, {
              inGame: ku
            }), "audio" === Au && (0, Vu.jsx)(AR, {}), "notifications" === Au && (0, Vu.jsx)(lR, {}), "graphics" === Au && (0, Vu.jsx)(yy, {
              minChunkAddDist: null !== Cu && void 0 !== Cu ? Cu : [2, 2],
              getValue: OR,
              onChange: vR,
              setApplySettingsCallback: Uu
            }), "controls" === Au && (0, Vu.jsx)(Ky.f, {}), "crosshair" === Au && (0, Vu.jsx)(Py, {
              showing: Ru
            }), "controller" === Au && Wu.featureFlags.useControllerSupport && (0, Vu.jsx)(iy.e, {}), Wu.featureFlags.settings.canChangeTexturePack && "texturePack" === Au && (0, Vu.jsx)(oy.d, {
              setApplySettingsCallback: Uu
            }), Wu.featureFlags.settings.canUseShaderPacks && "ix" === Au && (0, Vu.jsx)(Eu.Suspense, {
              fallback: null,
              children: (0, Vu.jsx)(JE, {
                setApplySettingsCallback: Uu
              })
            }), "updateLog" === Au && (0, Vu.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Vu.jsx)("div", {
                className: "UpdateLogsContainer",
                children: nu.map(((uu, Ru) => (0, Vu.jsx)(Hu.d, {
                  updateLog: uu,
                  index: Ru,
                  close: zu
                }, Ru)))
              })
            }), "information" === Au && (0, Vu.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Vu.jsx)(Eu.Suspense, {
                fallback: null,
                children: (0, Vu.jsx)(mE, {})
              })
            }), "alternativeDomains" === Au && (0, Vu.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Vu.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Xu("settingsMenu:unblockedDomainsDescription")
              }), (0, Vu.jsx)("div", {
                className: "AlternativeDomainsList",
                children: tu.current.map((uu => (0, Vu.jsxs)(Tu.e, {
                  onClick: () => {
                    window.open(`https://${uu}`)
                  },
                  children: [(0, Vu.jsx)(Ju.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", uu]
                }, uu)))
              })]
            }), "replayViewer" === Au && (0, Vu.jsx)(uE, {}), "developerTools" === Au && (0, Vu.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Vu.jsx)(Du, {
                setApplySettingsCallback: Uu
              })
            }), null !== Gu && (0, Vu.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Vu.jsx)(Tu.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: Lu,
                children: Xu("general:apply")
              })
            })]
          })]
        })
      }));
    var rE = yu(2481);
    const BE = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      xE = (0, Eu.lazy)((() => Promise.resolve().then((() => yu(4436))).then((uu => {
        uu.needGameClientAfterPaint();
        const Ru = uu.matchmakingLibrariesPromise.then((uu => (0, rE.d)(uu.loadCharacterCustomisationUI(), (uu => uu.CharacterCustomisationUI))));
        return Promise.all([uu.ensureGameSetup(), Ru]).then((uu => {
          let [, Ru] = uu;
          return Ru
        }))
      }))));

    function SE(uu) {
      let {
        show: Ru
      } = uu;
      const {
        userContext: yu
      } = (0, xu.d)(), [Ku, Qu] = (0, Eu.useState)("characters");
      if (!Ru) return null;
      const mu = BE.filter((uu => "cape" !== uu && "nameColour" !== uu || yu.getPlayerRanks().includes("super") || (0, Fu.purchasesAllowed)())).map((uu => ({
        id: uu,
        faIcon: XR.D[uu],
        title: XR.G[uu],
        redDot: !1
      })));
      return (0, Vu.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Vu.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Vu.jsx)(ru, {
            items: mu,
            selectedItemId: Ku,
            onClick: uu => {
              Qu(uu)
            }
          })
        }), (0, Vu.jsx)("div", {
          className: "MenuBody",
          children: (0, Vu.jsx)(Eu.Suspense, {
            fallback: (0, Vu.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Vu.jsx)(Cu.b, {})
            }),
            children: (0, Vu.jsx)(xE, {
              selectedTab: Ku
            })
          })
        })]
      })
    }
    var pE = yu(1417),
      TE = yu(9048),
      WE = yu(4301),
      jE = yu(3217),
      HE = yu(3269),
      dE = yu(9087),
      bE = yu(8502),
      CE = yu(9057),
      kE = yu(9072),
      eE = yu(1841),
      AE = yu(1825),
      DE = yu(4686),
      ME = yu(1232),
      IE = yu(1199),
      GE = yu(1611),
      UE = yu(8585);

    function nE(uu) {
      return uu ? Object.keys(uu).sort(((Ru, yu) => {
        var Eu, Ku, Qu, mu;
        const Ju = (null !== (Eu = null === (Ku = uu[yu]) || void 0 === Ku ? void 0 : Ku.sortPriority) && void 0 !== Eu ? Eu : 0) - (null !== (Qu = null === (mu = uu[Ru]) || void 0 === mu ? void 0 : mu.sortPriority) && void 0 !== Qu ? Qu : 0);
        return 0 !== Ju ? Ju : Ru.localeCompare(yu)
      })) : []
    }
    const sE = [{
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

    function tE(uu) {
      for (const {
          threshold: Ru,
          suffix: yu
        }
        of sE)
        if (uu >= Ru) {
          const Eu = uu / Ru;
          return Eu >= 100 ? `${Math.floor(Eu)}${yu}` : Eu >= 10 ? `${Eu.toFixed(1).replace(/\.0$/,"")}${yu}` : `${Eu.toFixed(2).replace(/\.?0+$/,"")}${yu}`
        } return String(uu)
    }
    var lE = yu(4811);
    const gE = {
        normal: "0.8em",
        big: "1em"
      },
      cE = (0, Eu.memo)((function(uu) {
        let {
          item: Ru,
          amount: yu = 0,
          size: Eu = "normal",
          tier: Ku = null
        } = uu;
        return (0, Vu.jsx)("div", {
          className: Qu()("SmpSlot", `SmpSlot-${Eu}`),
          children: Ru && (0, Vu.jsx)(eE.c, {
            itemName: Ru,
            amount: yu > 1 ? yu : 0,
            amountFontSize: gE[Eu],
            enchantmentTier: Ku
          })
        })
      }));

    function LE(uu) {
      let {
        amount: Ru,
        exact: yu = !1,
        className: Eu
      } = uu;
      return (0, Vu.jsxs)("span", {
        className: Qu()("SmpGold", Eu),
        children: [(0, Vu.jsx)("span", {
          className: "SmpCoin",
          children: (0, Vu.jsx)(eE.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), yu ? Ru.toLocaleString("en-US") : tE(Ru)]
      })
    }

    function zE(uu) {
      let {
        count: Ru = 5,
        grid: yu = !1
      } = uu;
      return (0, Vu.jsx)("div", {
        className: yu ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Ru
        }, ((uu, Ru) => (0, Vu.jsxs)("div", {
          className: Qu()(yu ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Vu.jsx)("div", {
            className: Qu()("SmpSlot", yu ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Vu.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Vu.jsx)("b", {}), (0, Vu.jsx)("small", {})]
          }), (0, Vu.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Ru)))
      })
    }

    function FE(uu) {
      let {
        title: Ru,
        children: yu
      } = uu;
      return (0, Vu.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Vu.jsx)("b", {
          children: Ru
        }), yu && (0, Vu.jsx)("small", {
          children: yu
        })]
      })
    }

    function wE(uu) {
      let {
        entry: Ru
      } = uu;
      return (0, Vu.jsx)(FE, {
        title: (0, Vu.jsx)(AE.d, {
          text: Ru.item.customTitle
        }),
        children: (0, Vu.jsx)(AE.d, {
          text: Ru.item.description
        })
      })
    }

    function ZE(uu) {
      return (0, Vu.jsx)(lE.b, {
        ...uu,
        className: Qu()("SmpChoice", uu.className),
        reselectable: !0
      })
    }

    function hE() {
      return (0, Vu.jsx)("span", {
        className: "SmpLoader",
        children: (0, Vu.jsx)(Cu.b, {})
      })
    }

    function PE(uu) {
      let {
        value: Ru,
        onChange: yu,
        min: Ku = 1,
        max: Qu,
        step: mu = 1,
        label: Ju
      } = uu;
      const Nu = (0, Eu.useRef)(null),
        Xu = (0, Eu.useRef)(Ru);
      Xu.current = Ru;
      const [ru, Bu] = (0, Eu.useState)(null), xu = uu => Math.max(Ku, Math.min(Qu, Math.floor(uu))), Su = uu => {
        const Ru = Xu.current,
          Eu = "function" === typeof mu ? mu(Ru, uu) : mu,
          Ku = xu(Ru + Eu * uu);
        Xu.current = Ku, yu(Ku)
      };
      (0, Eu.useEffect)((() => {
        if (null === ru) return;
        let uu;
        const Ru = () => {
            Bu(null)
          },
          yu = setTimeout((() => {
            uu = setInterval((() => {
              Su(ru);
              const uu = Xu.current;
              (ru > 0 ? uu >= Qu : uu <= Ku) && Ru()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Ru), window.addEventListener("pointercancel", Ru), window.addEventListener("blur", Ru), () => {
          clearTimeout(yu), clearInterval(uu), window.removeEventListener("pointerup", Ru), window.removeEventListener("pointercancel", Ru), window.removeEventListener("blur", Ru)
        }
      }), [ru]), (0, Eu.useEffect)((() => {
        const uu = Nu.current;
        uu && document.activeElement !== uu && uu.value !== String(Ru) && (uu.value = String(Ru))
      }), [Ru]), (0, Eu.useEffect)((() => {
        const uu = Nu.current;
        if (!uu) return;
        const Ru = () => {
          uu.value = String(Xu.current)
        };
        return uu.addEventListener("blur", Ru), () => {
          uu.removeEventListener("blur", Ru)
        }
      }), []);
      const pu = uu => (0, Vu.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${uu>0?"More":"Less"} ${Ju}`,
        disabled: uu > 0 ? Ru >= Qu : Ru <= Ku,
        onPointerDown: Ru => {
          0 === Ru.button && (Su(uu), Bu(uu))
        },
        onKeyDown: Ru => {
          "Enter" !== Ru.key && " " !== Ru.key || Su(uu)
        },
        onContextMenu: uu => {
          uu.preventDefault()
        },
        children: uu > 0 ? "+" : "\u2212"
      });
      return (0, Vu.jsxs)("div", {
        className: "SmpStepper",
        children: [pu(-1), (0, Vu.jsx)(bu.b, {
          className: "SmpStepperInput",
          domRef: Nu,
          defaultValue: String(Ru),
          ariaLabel: Ju,
          type: "text",
          blurOnEnter: !0,
          onValueChange: uu => {
            const Ru = uu.replace(/[^\d]/g, "");
            Nu.current && Ru !== uu && (Nu.current.value = Ru), "" !== Ru && yu(xu(Number(Ru)))
          }
        }), pu(1)]
      })
    }

    function iE(uu) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, uu))) - 1))
    }
    var YE = yu(9079),
      oE = yu(1215);
    const qE = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    oE.A, Lu.Tc.length;
    new Map;
    var OE = yu(3093);

    function vE(uu, Ru) {
      var yu;
      return Ru && (null === (yu = uu[Ru]) || void 0 === yu ? void 0 : yu.smp) || null
    }

    function aE(uu, Ru) {
      const yu = [];
      for (const Ku of nE(uu)) {
        var Eu;
        const Qu = uu[Ku];
        (null === (Eu = Qu.smp) || void 0 === Eu ? void 0 : Eu.kind) === Ru && yu.push({
          key: Ku,
          item: Qu,
          meta: Qu.smp
        })
      }
      return yu
    }

    function fE(uu, Ru) {
      var yu;
      return null !== (yu = aE(uu, Ru)[0]) && void 0 !== yu ? yu : null
    }
    const uK = "50% 0% 50% 0%",
      RK = [{
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

    function yK(uu) {
      const Ru = uu - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: yu,
          suffix: Eu
        }
        of RK)
        if (Ru >= yu) return `${Math.floor(Ru/yu)}${Eu}`;
      return "<1s"
    }

    function EK(uu) {
      const Ru = uu.map(bE.h),
        yu = [];
      return Ru.forEach(((uu, Eu) => {
        const Ku = function(uu) {
            const Ru = uu.match(/\d+/);
            return Ru ? Number(Ru[0]) : 0
          }(uu),
          Qu = Eu === Ru.length - 1;
        (Qu || 1 === Ku || 10 === Ku || 100 === Ku) && yu.push({
          label: uu,
          quantity: Ku,
          isAll: Qu
        })
      })), yu
    }
    let KK = null;

    function QK(uu, Ru) {
      const yu = Ru.trim().toLowerCase();
      if (!yu) return [];
      const Eu = uu => {
          if (uu === yu) return 0;
          if (uu.startsWith(yu)) return 1;
          const Ru = uu.indexOf(yu);
          return -1 === Ru ? -1 : 2 + Ru
        },
        Ku = [];
      for (const Ju of uu) {
        const uu = [Eu(Ju.lowerLabel), Eu(Ju.lowerName)].filter((uu => -1 !== uu));
        uu.length && Ku.push({
          item: Ju,
          rank: Math.min(...uu)
        })
      }
      if (Ku.length > 0) return Ku.sort(((uu, Ru) => uu.rank - Ru.rank)).map((uu => uu.item));
      const Qu = [...yu],
        mu = uu => {
          let Ru = 0;
          for (const yu of Qu) {
            if (Ru = uu.indexOf(yu, Ru), -1 === Ru) return !1;
            Ru++
          }
          return !0
        };
      return uu.filter((uu => mu(uu.lowerLabel) || mu(uu.lowerName)))
    }

    function mK(uu, Ru) {
      var yu;
      return null !== (yu = null === uu || void 0 === uu ? void 0 : uu[Ru]) && void 0 !== yu ? yu : Ru
    }

    function JK(uu, Ru) {
      const yu = uu.userInput;
      return void 0 !== Ru && "dropdown" === (null === yu || void 0 === yu ? void 0 : yu.type) && yu.dropdownOptions.map(bE.h).includes(Ru) ? Ru : function(uu) {
        const Ru = uu.userInput;
        if ("dropdown" !== (null === Ru || void 0 === Ru ? void 0 : Ru.type) || 0 === Ru.dropdownOptions.length) return null;
        const yu = Ru.dropdownOptions.map(bE.h);
        return Ru.initialValue && yu.includes(Ru.initialValue) ? Ru.initialValue : yu[yu.length - 1]
      }(uu)
    }

    function NK(uu) {
      return void 0 === uu ? "" : JSON.stringify(uu)
    }
    const XK = (0, Eu.createContext)(null);

    function VK() {
      return (0, Eu.useContext)(XK)
    }
    var rK = yu(2557);
    const BK = (0, Eu.memo)((function(uu) {
        let {
          name: Ru,
          label: yu,
          onPick: Eu
        } = uu;
        return (0, Vu.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: yu,
          onClick: () => {
            Eu(Ru)
          },
          children: [(0, Vu.jsx)(cE, {
            item: Ru,
            size: "big"
          }), (0, Vu.jsx)("span", {
            children: yu
          })]
        })
      })),
      xK = (0, Eu.memo)((function(uu) {
        let {
          items: Ru,
          query: yu,
          onPick: Ku
        } = uu;
        const {
          t: Qu
        } = (0, mu.E)(), [Ju, Nu] = (0, Eu.useState)(new Set), Xu = (0, Eu.useMemo)((() => function(uu) {
          const Ru = new Map;
          for (const yu of uu) {
            let uu = Ru.get(yu.category);
            uu || (uu = [], Ru.set(yu.category, uu)), uu.push(yu)
          }
          return [...qE, "other"].filter((uu => Ru.has(uu))).map((uu => ({
            category: uu,
            items: Ru.get(uu)
          })))
        }(Ru)), [Ru]), ru = (0, Eu.useMemo)((() => QK(Ru, yu).slice(0, 60)), [Ru, yu]);
        return yu.trim() ? 0 === ru.length ? (0, Vu.jsx)(FE, {
          title: Qu("smpShop:noItemsFound", {
            query: yu.trim()
          }),
          children: Qu("smpShop:tryShorterName")
        }) : (0, Vu.jsx)(rK.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: uK,
          observerUpdateDeps: [yu],
          children: ru.map((uu => (0, Vu.jsx)(BK, {
            name: uu.name,
            label: uu.label,
            onPick: Ku
          }, uu.name)))
        }) : (0, Vu.jsx)(Vu.Fragment, {
          children: Xu.map((uu => {
            let {
              category: Ru,
              items: yu
            } = uu;
            const Eu = Ju.has(Ru) || yu.length <= 48,
              mu = Eu ? yu : yu.slice(0, 48);
            return (0, Vu.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Vu.jsxs)("h4", {
                children: [Qu("other" === Ru ? "smpShop:otherItems" : `creativeInventory:${Ru}`), !Eu && (0, Vu.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Nu(new Set([...Ju, Ru]))
                  },
                  children: Qu("smpShop:showAll", {
                    count: yu.length
                  })
                })]
              }), (0, Vu.jsx)(rK.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: uK,
                observerUpdateDeps: [Eu],
                children: mu.map((uu => (0, Vu.jsx)(BK, {
                  name: uu.name,
                  label: uu.label,
                  onPick: Ku
                }, uu.name)))
              })]
            }, Ru)
          }))
        })
      }));

    function SK(uu, Ru) {
      const {
        searched: yu,
        shown: Ku,
        searchFor: Qu,
        loading: mu
      } = function(uu, Ru) {
        var yu;
        const Ku = VK(),
          [Qu, mu] = (0, Eu.useState)(void 0),
          Ju = (0, Eu.useRef)(void 0),
          Nu = (0, Eu.useRef)(0),
          Xu = (0, Eu.useRef)(void 0),
          Vu = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.meta.item) && void 0 !== yu ? yu : null,
          ru = !!uu && Ku.isPending(uu.key);
        (0, Eu.useEffect)((() => {
          if (!uu || ru || !Ru || void 0 === Qu || Qu === Vu) return;
          const yu = Qu === Ju.current && Ku.gaveUpAt(uu.key) > Nu.current && Xu.current !== Qu;
          (Qu !== Ju.current || yu) && Ku.act(uu.key, null !== Qu && void 0 !== Qu ? Qu : "*", yu) && (yu && (Xu.current = Qu), Ju.current = Qu, Nu.current = Date.now())
        }), [uu, ru, Ru, Qu, Vu, Ku]);
        const Bu = (0, Eu.useCallback)((uu => {
            Ju.current = void 0, Xu.current = void 0, mu(uu)
          }), []),
          xu = void 0 !== Qu && Qu !== Vu && (ru || Ju.current !== Qu);
        return {
          searched: Vu,
          shown: xu ? Qu : Vu,
          searchFor: Bu,
          loading: xu || ru || null !== Vu && !Ru
        }
      }(uu, Ru), Ju = (0, Eu.useMemo)((() => function() {
        var uu;
        let Ru = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ku = `${(0,OE.g)()}\x1f${Ru.join("\x1e")}\x1f${yu.join("\x1e")}\x1f${JSON.stringify(Eu)}`;
        if ((null === (uu = KK) || void 0 === uu ? void 0 : uu.key) === Ku) return KK.items;
        const Qu = new Set(yu),
          mu = new Set,
          Ju = [],
          Nu = (uu, Ru) => {
            var yu;
            if (!uu || mu.has(uu) || Qu.has(uu)) return;
            mu.add(uu);
            const Ku = null !== (yu = Eu[uu]) && void 0 !== yu ? yu : uu;
            Ju.push({
              name: uu,
              label: Ku,
              lowerLabel: Ku.toLowerCase(),
              lowerName: uu.toLowerCase(),
              category: Ru
            })
          };
        for (const Vu of (0, YE.creativeItemIds)()) {
          var Xu;
          (0, YE.itemIsDisabled)(Vu, !0, !0, !1) || (0, YE.showOnlyInCreativeSearch)(Vu) || Nu((0, OE.f)(Vu), null !== (Xu = (0, YE.creativeCategoryOf)(Vu)) && void 0 !== Xu ? Xu : "other")
        }
        for (const Vu of Ru) Nu(Vu, "other");
        return KK = {
          key: Ku,
          items: Ju
        }, Ju
      }(null === uu || void 0 === uu ? void 0 : uu.meta.extra, null === uu || void 0 === uu ? void 0 : uu.meta.excluded, null === uu || void 0 === uu ? void 0 : uu.meta.names)), [null === uu || void 0 === uu ? void 0 : uu.meta.extra, null === uu || void 0 === uu ? void 0 : uu.meta.excluded, null === uu || void 0 === uu ? void 0 : uu.meta.names]), [Nu, Xu] = (0, Eu.useState)(""), [Vu, ru] = (0, Eu.useState)(0), [Bu, xu] = (0, Eu.useState)("recent"), Su = (0, Eu.useCallback)((uu => {
        Xu(""), ru((uu => uu + 1)), Qu(uu)
      }), [Qu]), pu = "browse" === Bu || "" !== Nu.trim();
      return {
        searched: yu,
        shown: Ku,
        searchFor: Qu,
        loading: mu,
        catalogue: Ju,
        names: null === uu || void 0 === uu ? void 0 : uu.meta.names,
        query: Nu,
        setQuery: Xu,
        searchBoxKey: Vu,
        pickItem: Su,
        setView: xu,
        browsing: pu
      }
    }

    function pK(uu) {
      let {
        browser: Ru,
        children: yu
      } = uu;
      const {
        t: Eu
      } = (0, mu.E)(), Ku = VK();
      return (0, Vu.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Vu.jsx)("div", {
          className: "SmpSearch",
          children: (0, Vu.jsx)(bu.b, {
            className: "SmpSearchInput",
            placeholderText: Eu("smpShop:searchPlaceholder"),
            defaultValue: Ru.query,
            onValueChange: uu => {
              Ru.setQuery(uu), Ru.searched && uu.trim() && Ru.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const uu = QK(Ru.catalogue, Ru.query)[0];
              uu ? Ru.pickItem(uu.name) : Ru.query.trim() && Ku.notify(Eu("smpShop:noItemsFound", {
                query: Ru.query.trim()
              }))
            }
          }, Ru.searchBoxKey)
        }), yu]
      })
    }

    function TK(uu) {
      let {
        browser: Ru,
        recentLabel: yu,
        children: Eu
      } = uu;
      const {
        t: Ku
      } = (0, mu.E)();
      return (0, Vu.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Vu.jsx)(ZE, {
          options: [{
            value: "recent",
            label: yu
          }, {
            value: "browse",
            label: Ku("smpShop:browseItems")
          }],
          value: Ru.browsing ? "browse" : "recent",
          onChange: Ru.setView,
          ariaLabel: Ku("smpShop:show")
        }), !Ru.browsing && Eu]
      })
    }

    function WK(uu) {
      let {
        item: Ru,
        names: yu,
        summary: Eu,
        onBack: Ku,
        children: Qu
      } = uu;
      const {
        t: Ju
      } = (0, mu.E)();
      return (0, Vu.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Vu.jsx)(Tu.b, {
          className: "SmpBackButton",
          onClick: Ku,
          children: Ju("general:back")
        }), (0, Vu.jsx)(cE, {
          item: Ru,
          size: "big"
        }), (0, Vu.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Vu.jsx)("b", {
            children: mK(yu, Ru)
          }), Eu && (0, Vu.jsx)("small", {
            children: Eu
          })]
        }), Qu]
      })
    }

    function jK(uu) {
      let {
        browser: Ru,
        className: yu,
        action: Eu,
        above: Ku,
        list: mu,
        summary: Ju,
        recentLabel: Nu,
        listControls: Xu,
        onBack: ru
      } = uu;
      return (0, Vu.jsxs)("div", {
        className: Qu()("SmpScreen", yu),
        children: [(0, Vu.jsx)(pK, {
          browser: Ru,
          children: Eu
        }), Ru.shown && (0, Vu.jsx)(WK, {
          item: Ru.shown,
          names: Ru.names,
          summary: !Ru.loading && Ju,
          onBack: () => {
            null === ru || void 0 === ru || ru(), Ru.searchFor(null)
          },
          children: Xu
        }), Ku, Ru.shown ? mu : (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)(TK, {
            browser: Ru,
            recentLabel: Nu,
            children: Xu
          }), Ru.browsing ? (0, Vu.jsx)(xK, {
            items: Ru.catalogue,
            query: Ru.query,
            onPick: Ru.pickItem
          }) : mu]
        })]
      })
    }

    function HK(uu, Ru) {
      const yu = uu.map((uu => {
        let {
          meta: Ru
        } = uu;
        return Ru.pricePerItem
      }));
      return "min" === Ru ? Math.min(...yu) : Math.max(...yu)
    }
    var dK = yu(6336);
    const bK = (0, Eu.memo)((function(uu) {
      var Ru;
      const {
        t: yu
      } = (0, mu.E)(), Eu = null === uu.seller, Ku = uu.quantity * uu.pricePerItem;
      return (0, Vu.jsxs)("div", {
        className: uu.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Vu.jsx)(cE, {
          item: uu.item,
          amount: uu.quantity,
          size: uu.grid ? "big" : "normal",
          tier: uu.tier
        }), (0, Vu.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Vu.jsx)("b", {
            children: (0, Vu.jsx)(AE.d, {
              text: null !== (Ru = uu.title) && void 0 !== Ru ? Ru : `${uu.quantity}x ${uu.item}`
            })
          }), (0, Vu.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Vu.jsx)("span", {
              children: Eu ? yu("smpShop:you") : (0, Vu.jsx)(AE.d, {
                text: [{
                  entityName: uu.seller
                }]
              })
            }), (0, Vu.jsx)("span", {
              children: yu("smpShop:timeLeft", {
                time: yK(uu.expiresAt)
              })
            })]
          })]
        }), (0, Vu.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Vu.jsx)(LE, {
            amount: uu.pricePerItem
          }), (0, Vu.jsx)("small", {
            children: yu("smpShop:each")
          })]
        }), (0, Vu.jsx)(Tu.e, {
          className: "SmpBuyButton",
          disabled: Eu || !uu.canAfford && !uu.busy,
          loading: uu.busy,
          onClick: () => {
            uu.onBuy(uu.itemKey)
          },
          children: Eu ? yu("smpShop:yours") : (0, Vu.jsx)(LE, {
            amount: Ku
          })
        })]
      })
    }));

    function CK(uu) {
      let {
        view: Ru,
        onChange: yu
      } = uu;
      const {
        t: Eu
      } = (0, mu.E)();
      return (0, Vu.jsx)(lE.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Eu("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Vu.jsx)(Ju.c, {
            name: "list"
          }),
          ariaLabel: Eu("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Vu.jsx)(Ju.c, {
            name: "grid-2"
          }),
          ariaLabel: Eu("smpShop:gridView")
        }],
        value: Ru,
        onChange: yu
      })
    }

    function kK(uu) {
      let {
        entries: Ru,
        view: yu
      } = uu;
      const {
        t: Eu
      } = (0, mu.E)(), Ku = VK(), Qu = "grid" === yu;
      return (0, Vu.jsxs)(Vu.Fragment, {
        children: [!Qu && (0, Vu.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Vu.jsx)("span", {}), (0, Vu.jsx)("span", {
            children: Eu("smpShop:columnItem")
          }), (0, Vu.jsx)("span", {
            children: Eu("smpShop:columnPriceEach")
          }), (0, Vu.jsx)("span", {
            children: Eu("smpShop:columnTotal")
          })]
        }), (0, Vu.jsx)(rK.e, {
          lazyLoadedClassName: Qu ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: uK,
          observerUpdateDeps: [Ru.length],
          children: Ru.map((uu => {
            var Ru, yu;
            let {
              key: Eu,
              item: mu,
              meta: Ju
            } = uu;
            const Nu = Ju.quantity * Ju.pricePerItem;
            return (0, Vu.jsx)(bK, {
              itemKey: Eu,
              item: Ju.item,
              title: mu.customTitle,
              quantity: Ju.quantity,
              pricePerItem: Ju.pricePerItem,
              seller: Ju.seller,
              expiresAt: Ju.expiresAt,
              tier: null !== (Ru = null === (yu = mu.enchant) || void 0 === yu ? void 0 : yu.tier) && void 0 !== Ru ? Ru : null,
              busy: Ku.isPending(Eu) || null !== Ju.seller && !1 === mu.canBuy,
              canAfford: Ku.canAfford(mu, Nu),
              grid: Qu,
              onBuy: Ku.act
            }, Eu)
          }))
        }, yu)]
      })
    }
    const eK = [1, 10, 100],
      AK = [1, 10, 100, 999];

    function DK(uu) {
      var Ru, yu, Ku, Nu, Xu, ru, Bu, xu, Su, pu;
      const {
        t: Wu
      } = (0, mu.E)(), ju = VK(), {
        creator: Hu,
        mode: du
      } = uu, [Cu, ku] = (0, Eu.useState)(null !== (Ru = null === Hu || void 0 === Hu ? void 0 : Hu.meta.item) && void 0 !== Ru ? Ru : null), [eu, Au] = (0, Eu.useState)(1), [Du, Mu] = (0, Eu.useState)(0), [Iu, Gu] = (0, Eu.useState)(""), [Uu, nu] = (0, Eu.useState)(0), su = (0, Eu.useRef)(Cu), tu = (0, Eu.useRef)(!1), [lu, gu] = (0, Eu.useState)(!1), cu = null !== (yu = null === Hu || void 0 === Hu ? void 0 : Hu.meta.item) && void 0 !== yu ? yu : null, Lu = null !== (Ku = null === Hu || void 0 === Hu ? void 0 : Hu.meta.jJ) && void 0 !== Ku ? Ku : 0;
      (0, Eu.useEffect)((() => {
        uu.searching || null === cu || cu === su.current || (su.current = cu, tu.current = !1, ku(cu), Mu(0), Au("list" === du ? Math.max(1, Lu) : 1))
      }), [cu, uu.searching]);
      const zu = !!Hu && !!Cu && Hu.meta.item === Cu,
        Fu = zu ? Hu.meta.jJ : null !== (Nu = null === (Xu = uu.inventory) || void 0 === Xu || null === (ru = Xu.find((uu => uu.item === Cu))) || void 0 === ru ? void 0 : ru.quantity) && void 0 !== Nu ? Nu : 0,
        wu = "list" === du ? Math.max(1, Fu) : 45954,
        Zu = null !== (Bu = uu.prices[0]) && void 0 !== Bu ? Bu : null,
        hu = uu.prices.length ? Math.round(uu.prices.reduce(((uu, Ru) => uu + Ru), 0) / uu.prices.length) : null,
        Pu = null === (xu = uu.inventory) || void 0 === xu || null === (Su = xu.find((uu => uu.item === Cu))) || void 0 === Su ? void 0 : Su.sellPrice;
      (0, Eu.useEffect)((() => {
        var uu;
        zu && (Au((uu => "list" === du ? Math.min(Math.max(1, uu), Math.max(1, Fu)) : uu)), tu.current || Mu(null !== (uu = null !== Zu && void 0 !== Zu ? Zu : hu) && void 0 !== uu ? uu : Math.max(1, null !== Pu && void 0 !== Pu ? Pu : 1)))
      }), [zu, Fu, Cu, Zu, hu]);
      const iu = uu => {
          tu.current = !0, Mu(uu)
        },
        Yu = Ru => {
          var yu, Eu, Ku;
          su.current = Ru, tu.current = !1, gu(!1), Gu(""), nu((uu => uu + 1)), ku(Ru), Mu(0), Au("list" === du && null !== (yu = null === (Eu = uu.inventory) || void 0 === Eu || null === (Ku = Eu.find((uu => uu.item === Ru))) || void 0 === Ku ? void 0 : Ku.quantity) && void 0 !== yu ? yu : 1), (null === Hu || void 0 === Hu ? void 0 : Hu.meta.item) !== Ru && uu.onPickItem(Ru)
        },
        ou = eu * Du,
        qu = "list" === du && null !== Hu && void 0 !== Hu && Hu.meta.fee ? function(uu, Ru) {
          const yu = Math.max(0, Ru - uu.taxFreeAllowance);
          return Math.ceil(Math.round(yu * uu.rate * 1e6) / 1e6)
        }(Hu.meta.fee, ou) : 0,
        Ou = !!Hu && ju.isPending(Hu.key),
        vu = zu && !uu.searching && eu >= 1 && Du >= 1 && ("order" === du || Fu >= eu) && !Ou,
        au = !!Cu && !zu && !uu.searching && eu >= 1 && Du >= 1,
        fu = () => {
          vu ? ju.act(Hu.key, `${eu}|${Du}`) : au && (uu.onPickItem(Cu), gu(!0))
        };
      (0, Eu.useEffect)((() => {
        lu && zu && !uu.searching && (gu(!1), fu())
      }), [lu, zu, uu.searching]);
      const uR = !!Cu && !zu && (uu.searching || lu),
        RR = Cu ? mK(uu.names, Cu) : "",
        yR = (0, Eu.useMemo)((() => QK(uu.catalogue, Iu).slice(0, 8)), [uu.catalogue, Iu]),
        ER = ("list" === du ? eK.filter((uu => uu < Fu)) : AK).map((uu => ({
          value: uu,
          label: String(uu)
        })));
      "list" === du && Fu > 0 && ER.push({
        value: Fu,
        label: Wu("smpShop:all", {
          count: Fu
        })
      });
      const KR = [];
      return null !== Zu && (Zu > 1 && KR.push({
        value: Zu - 1,
        label: Wu("smpShop:undercut", {
          price: tE(Zu - 1)
        })
      }), KR.push({
        value: Zu,
        label: Wu("smpShop:lowest", {
          price: tE(Zu)
        })
      })), null !== hu && hu !== Zu && KR.push({
        value: hu,
        label: Wu("smpShop:average", {
          price: tE(hu)
        })
      }), (0, Vu.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Vu.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Vu.jsx)("b", {
            children: Wu("list" === du ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Vu.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Wu("smpShop:close"),
            onClick: uu.onClose,
            children: (0, Vu.jsx)(Ju.c, {
              name: "xmark"
            })
          })]
        }), "list" === du && (0, Vu.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (pu = uu.inventory) && void 0 !== pu && pu.length ? uu.inventory.map((uu => {
            let {
              item: Ru,
              quantity: yu
            } = uu;
            return (0, Vu.jsx)("button", {
              type: "button",
              title: Ru,
              className: Qu()("SmpPickerSlot", {
                SmpPickerSlotOn: Ru === Cu
              }),
              onClick: () => {
                Yu(Ru)
              },
              children: (0, Vu.jsx)(cE, {
                item: Ru,
                amount: yu
              })
            }, Ru)
          })) : (0, Vu.jsx)("span", {
            className: "SmpMuted",
            children: Wu("smpShop:nothingToList")
          })
        }), ("list" === du || !Cu) && (0, Vu.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Vu.jsx)(bu.b, {
            className: "SmpSearchInput",
            placeholderText: Wu("list" === du ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Iu,
            onValueChange: Gu,
            blurOnEnter: !0,
            onEnter: () => {
              yR[0] && Yu(yR[0].name)
            }
          }, Uu), yR.length > 0 && (0, Vu.jsx)("div", {
            className: "SmpPicker",
            children: yR.map((uu => {
              let {
                name: Ru
              } = uu;
              return (0, Vu.jsx)("button", {
                type: "button",
                title: Ru,
                className: Qu()("SmpPickerSlot", {
                  SmpPickerSlotOn: Ru === Cu
                }),
                onClick: () => {
                  Yu(Ru)
                },
                children: (0, Vu.jsx)(cE, {
                  item: Ru
                })
              }, Ru)
            }))
          })]
        }), Cu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsxs)("div", {
            className: "SmpPickedName",
            children: [RR, uR && (0, Vu.jsx)(hE, {})]
          }), (0, Vu.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Vu.jsxs)("div", {
              className: "SmpField",
              children: [(0, Vu.jsxs)("span", {
                children: [Wu("smpShop:quantity"), "list" === du && zu && (0, Vu.jsx)("small", {
                  children: Wu("smpShop:youHave", {
                    count: Fu
                  })
                })]
              }), (0, Vu.jsx)(PE, {
                value: eu,
                onChange: Au,
                max: wu,
                label: Wu("smpShop:quantity")
              }), (0, Vu.jsx)(ZE, {
                options: ER,
                value: eu,
                onChange: Au,
                ariaLabel: Wu("smpShop:quantity")
              })]
            }), (0, Vu.jsxs)("div", {
              className: "SmpField",
              children: [(0, Vu.jsx)("span", {
                children: Wu("smpShop:pricePerItem")
              }), (0, Vu.jsx)(PE, {
                value: Math.max(1, Du),
                onChange: iu,
                max: 9999999,
                step: iE,
                label: Wu("smpShop:pricePerItem")
              }), (0, Vu.jsx)(ZE, {
                options: KR,
                value: Du,
                onChange: iu,
                ariaLabel: Wu("smpShop:pricePerItem")
              })]
            })]
          }), "list" === du && (0, Vu.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Vu.jsxs)("span", {
              children: [Wu("smpShop:youGet"), " ", (0, Vu.jsx)(LE, {
                amount: Math.max(0, ou - qu),
                exact: !0
              })]
            }), (0, Vu.jsx)("small", {
              children: qu > 0 ? Wu("smpShop:listingFee", {
                fee: qu.toLocaleString("en-US")
              }) : Wu("smpShop:listingRules")
            })]
          }), (0, Vu.jsx)(Tu.n, {
            className: "SmpSubmit",
            disabled: !vu && !au && !Ou,
            loading: Ou || uR || zu && uu.searching,
            onClick: fu,
            children: "list" === du ? Wu("smpShop:listButton", {
              count: eu,
              item: RR
            }) : (0, Vu.jsxs)(Vu.Fragment, {
              children: [Wu("smpShop:orderButton", {
                count: eu,
                item: RR
              }), " ", Du >= 1 && (0, Vu.jsx)(LE, {
                amount: ou
              })]
            })
          })]
        })]
      })
    }

    function MK() {
      var uu;
      const {
        t: Ru
      } = (0, mu.E)(), yu = VK(), Ku = null === (uu = yu.shopInfo[yu.categoryKey]) || void 0 === uu ? void 0 : uu.items, Qu = fE(Ku, "search"), Ju = fE(Ku, "creator"), Nu = aE(Ku, "enchantedCreator"), Xu = aE(Ku, "listing"), ru = fE(Ku, "empty"), Bu = SK(Qu, Xu.length > 0 || null !== ru), {
        searched: xu,
        shown: Su,
        loading: pu
      } = Bu, [Wu, ju] = (0, Eu.useState)(!1), [Hu, du] = function() {
        const [uu, Ru] = (0, dK.d)("smpMarketView", "list");
        return ["grid" === uu ? "grid" : "list", Ru]
      }(), bu = "grid" === Hu, Cu = (0, Eu.useMemo)((() => Xu.filter((uu => {
        let {
          meta: Ru
        } = uu;
        return null !== Ru.seller && Ru.item === xu
      })).map((uu => {
        let {
          meta: Ru
        } = uu;
        return Ru.pricePerItem
      })).sort(((uu, Ru) => uu - Ru))), [Xu, xu]), ku = (0, Eu.useMemo)((() => {
        const uu = new Set(Bu.catalogue.map((uu => {
          let {
            name: Ru
          } = uu;
          return Ru
        })));
        return function(uu) {
          for (const Ru in uu)
            if ("sell" === uu[Ru].smp) return aE(uu[Ru].items, "sell").filter((uu => {
              let {
                item: Ru
              } = uu;
              return !Ru.enchant
            })).map((uu => {
              let {
                meta: Ru
              } = uu;
              return {
                item: Ru.item,
                quantity: Ru.quantity,
                sellPrice: Ru.pricePerItem
              }
            }));
          return []
        }(yu.shopInfo).filter((Ru => {
          let {
            item: yu
          } = Ru;
          return uu.has(yu)
        }))
      }), [yu.shopInfo, Bu.catalogue]);
      return (0, Vu.jsx)(jK, {
        browser: Bu,
        className: "SmpMarketTab",
        recentLabel: Ru("smpShop:recentlyListed"),
        action: (0, Vu.jsx)(Tu.n, {
          className: "SmpSellButton",
          onClick: () => {
            ju((uu => !uu))
          },
          children: Ru("smpShop:sell")
        }),
        above: Wu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)(DK, {
            mode: "list",
            creator: Ju,
            inventory: ku,
            catalogue: Bu.catalogue,
            names: Bu.names,
            searching: pu,
            prices: Cu,
            onPickItem: Bu.searchFor,
            onClose: () => {
              ju(!1)
            }
          }), Nu.length > 0 && (0, Vu.jsx)(IK, {
            entries: Nu
          })]
        }),
        listControls: (0, Vu.jsx)(CK, {
          view: Hu,
          onChange: du
        }),
        summary: Su && (Xu.length > 0 ? Ru(1 === Xu.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Xu.length,
          price: tE(HK(Xu, "min"))
        }) : Ru("smpShop:noOneSelling", {
          item: mK(Bu.names, Su)
        })),
        list: pu ? (0, Vu.jsx)(zE, {
          grid: bu
        }) : Xu.length > 0 ? (0, Vu.jsx)(kK, {
          entries: Xu,
          view: Hu
        }) : ru ? (0, Vu.jsx)(wE, {
          entry: ru
        }) : (0, Vu.jsx)(zE, {
          count: 3,
          grid: bu
        })
      })
    }

    function IK(uu) {
      let {
        entries: Ru
      } = uu;
      const {
        t: yu
      } = (0, mu.E)(), Ku = VK(), [Qu, Ju] = (0, Eu.useState)({});
      return (0, Vu.jsx)("div", {
        className: "SmpList",
        children: Ru.map((uu => {
          var Ru, Eu, mu;
          let {
            key: Nu,
            item: Xu,
            meta: ru
          } = uu;
          const Bu = null !== (Ru = Qu[Nu]) && void 0 !== Ru ? Ru : 1;
          return (0, Vu.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Vu.jsx)(cE, {
              item: ru.item,
              amount: ru.quantity,
              tier: null !== (Eu = null === (mu = Xu.enchant) || void 0 === mu ? void 0 : mu.tier) && void 0 !== Eu ? Eu : null
            }), (0, Vu.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Vu.jsx)("b", {
                children: (0, Vu.jsx)(AE.d, {
                  text: Xu.customTitle
                })
              }), (0, Vu.jsx)("small", {
                children: yu("smpShop:enchantedListing")
              })]
            }), (0, Vu.jsx)(PE, {
              value: Bu,
              onChange: uu => {
                Ju({
                  ...Qu,
                  [Nu]: uu
                })
              },
              max: 9999999,
              step: iE,
              label: yu("smpShop:pricePerItem")
            }), (0, Vu.jsxs)(Tu.n, {
              loading: Ku.isPending(Nu),
              onClick: () => {
                Ku.act(Nu, String(Bu))
              },
              children: [yu("smpShop:list"), " ", (0, Vu.jsx)(LE, {
                amount: Bu
              })]
            })]
          }, Nu)
        }))
      })
    }
    const GK = (0, Eu.memo)((function(uu) {
      let {
        itemKey: Ru,
        item: yu,
        quantity: Eu,
        pricePerItem: Ku,
        tier: mu,
        selected: Ju,
        onSelect: Nu
      } = uu;
      return (0, Vu.jsxs)("button", {
        type: "button",
        className: Qu()("SmpInventorySlot", {
          SmpInventorySlotOn: Ju
        }),
        title: yu,
        onClick: () => {
          Nu(Ru)
        },
        children: [(0, Vu.jsx)(cE, {
          item: yu,
          amount: Eu,
          tier: mu
        }), (0, Vu.jsx)(LE, {
          amount: Ku
        })]
      })
    }));

    function UK() {
      var uu;
      const {
        t: Ru
      } = (0, mu.E)(), yu = VK(), Ku = null === (uu = yu.shopInfo[yu.categoryKey]) || void 0 === uu ? void 0 : uu.items, Ju = aE(Ku, "sell"), Nu = fE(Ku, "empty"), [Xu, ru] = (0, Eu.useState)(null), [Bu, xu] = (0, Eu.useState)({}), Su = Ju.find((uu => {
        let {
          key: Ru
        } = uu;
        return Ru === Xu
      }));
      return 0 === Ju.length ? (0, Vu.jsx)("div", {
        className: "SmpScreen",
        children: (0, Vu.jsx)(FE, {
          title: Nu ? (0, Vu.jsx)(AE.d, {
            text: Nu.item.customTitle
          }) : Ru("smpShop:nothingToSell"),
          children: Nu && (0, Vu.jsx)(AE.d, {
            text: Nu.item.description
          })
        })
      }) : (0, Vu.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Vu.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Ju.map((uu => {
            var Ru, yu;
            let {
              key: Eu,
              item: Ku,
              meta: Qu
            } = uu;
            return (0, Vu.jsx)(GK, {
              itemKey: Eu,
              item: Qu.item,
              quantity: Qu.quantity,
              pricePerItem: Qu.pricePerItem,
              tier: null !== (Ru = null === (yu = Ku.enchant) || void 0 === yu ? void 0 : yu.tier) && void 0 !== Ru ? Ru : null,
              selected: Eu === Xu,
              onSelect: ru
            }, Eu)
          }))
        }), (0, Vu.jsx)("div", {
          className: Qu()("SmpSellBar", {
            SmpSellBarIdle: !Su
          }),
          children: Su ? (0, Vu.jsx)(nK, {
            entry: Su,
            choice: JK(Su.item, Bu[Su.key]),
            onChoose: uu => {
              xu({
                ...Bu,
                [Su.key]: uu
              })
            }
          }) : (0, Vu.jsx)("span", {
            className: "SmpMuted",
            children: Ru("smpShop:tapToSell")
          })
        })]
      })
    }

    function nK(uu) {
      var Ru, yu, Eu, Ku;
      let {
        entry: Qu,
        choice: Ju,
        onChoose: Nu
      } = uu;
      const {
        t: Xu
      } = (0, mu.E)(), ru = VK(), {
        key: Bu,
        item: xu,
        meta: Su
      } = Qu, pu = EK("dropdown" === (null === (Ru = xu.userInput) || void 0 === Ru ? void 0 : Ru.type) ? xu.userInput.dropdownOptions : []), Wu = null === Ju ? 0 : -(0, bE.e)(xu, Ju);
      return (0, Vu.jsxs)(Vu.Fragment, {
        children: [(0, Vu.jsx)(cE, {
          item: Su.item,
          amount: Su.quantity,
          tier: null !== (yu = null === (Eu = xu.enchant) || void 0 === Eu ? void 0 : Eu.tier) && void 0 !== yu ? yu : null
        }), (0, Vu.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Vu.jsx)("b", {
            children: (0, Vu.jsx)(AE.d, {
              text: null !== (Ku = xu.customTitle) && void 0 !== Ku ? Ku : Su.item
            })
          }), (0, Vu.jsx)("small", {
            children: Xu("smpShop:sellEach", {
              count: Su.quantity
            })
          })]
        }), (0, Vu.jsx)(ZE, {
          options: pu.map((uu => {
            let {
              label: Ru,
              quantity: yu,
              isAll: Eu
            } = uu;
            return {
              value: Ru,
              label: Eu ? Xu("smpShop:all", {
                count: yu
              }) : String(yu)
            }
          })),
          value: Ju,
          onChange: Nu,
          ariaLabel: Xu("smpShop:quantity")
        }), (0, Vu.jsxs)(Tu.n, {
          loading: ru.isPending(Bu),
          disabled: null === Ju,
          onClick: () => {
            ru.act(Bu, Ju)
          },
          children: [Xu("smpShop:sellButton"), " ", (0, Vu.jsx)(LE, {
            amount: Wu
          })]
        })]
      })
    }

    function sK() {
      var uu;
      const {
        t: Ru
      } = (0, mu.E)(), yu = VK(), Eu = null === (uu = yu.shopInfo[yu.categoryKey]) || void 0 === uu ? void 0 : uu.items, Ku = aE(Eu, "collect"), Qu = aE(Eu, "myListing"), Ju = (uu, Ru) => yu.isPending(uu) || !1 === Ru.canBuy;
      return (0, Vu.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Vu.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Ru("smpShop:readyToCollect")
        }), Ku.length > 0 ? (0, Vu.jsx)("div", {
          className: "SmpList",
          children: Ku.map((uu => {
            var Eu, Ku;
            let {
              key: Qu,
              item: mu,
              meta: Nu
            } = uu;
            return (0, Vu.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Vu.jsx)(cE, {
                item: "sold" === Nu.type ? "Gold Coin" : Nu.item,
                amount: "sold" === Nu.type ? 0 : Nu.quantity,
                tier: null !== (Eu = null === (Ku = mu.enchant) || void 0 === Ku ? void 0 : Ku.tier) && void 0 !== Eu ? Eu : null
              }), (0, Vu.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Vu.jsx)("b", {
                  children: (0, Vu.jsx)(AE.d, {
                    text: mu.customTitle
                  })
                }), (0, Vu.jsx)("small", {
                  children: (0, Vu.jsx)(AE.d, {
                    text: mu.description
                  })
                })]
              }), (0, Vu.jsx)(Tu.l, {
                loading: Ju(Qu, mu),
                onClick: () => {
                  yu.act(Qu)
                },
                children: Ru("smpShop:collect")
              })]
            }, Qu)
          }))
        }) : (0, Vu.jsx)(FE, {
          title: Ru("smpShop:nothingToCollect"),
          children: Ru("smpShop:nothingToCollectHint")
        }), (0, Vu.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Ru("smpShop:activeListings", {
            count: Qu.length
          })
        }), Qu.length > 0 ? (0, Vu.jsx)("div", {
          className: "SmpList",
          children: Qu.map((uu => {
            var Eu, Ku;
            let {
              key: Qu,
              item: mu,
              meta: Nu
            } = uu;
            return (0, Vu.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Vu.jsx)(cE, {
                item: Nu.item,
                amount: Nu.quantity,
                tier: null !== (Eu = null === (Ku = mu.enchant) || void 0 === Ku ? void 0 : Ku.tier) && void 0 !== Eu ? Eu : null
              }), (0, Vu.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Vu.jsx)("b", {
                  children: (0, Vu.jsx)(AE.d, {
                    text: mu.customTitle
                  })
                }), (0, Vu.jsx)("small", {
                  children: Ru("smpShop:timeLeft", {
                    time: yK(Nu.expiresAt)
                  })
                })]
              }), (0, Vu.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Vu.jsx)(LE, {
                  amount: Nu.pricePerItem
                }), (0, Vu.jsx)("small", {
                  children: Ru("smpShop:each")
                })]
              }), (0, Vu.jsx)(Tu.F, {
                loading: Ju(Qu, mu),
                onClick: () => {
                  yu.act(Qu)
                },
                children: Ru("smpShop:cancel")
              })]
            }, Qu)
          }))
        }) : (0, Vu.jsx)(FE, {
          title: Ru("smpShop:noActiveListings"),
          children: Ru("smpShop:noActiveListingsHint")
        })]
      })
    }

    function tK(uu) {
      let {
        done: Ru,
        of: yu
      } = uu;
      return (0, Vu.jsx)("span", {
        className: "SmpProgress",
        children: (0, Vu.jsx)("i", {
          style: {
            width: `${Math.min(100,Ru/Math.max(1,yu)*100)}%`
          }
        })
      })
    }

    function lK(uu) {
      var Ru, yu, Eu;
      let {
        entry: Ku,
        choice: Qu,
        onChoose: Ju
      } = uu;
      const {
        t: Nu
      } = (0, mu.E)(), Xu = VK(), {
        key: ru,
        item: Bu,
        meta: xu
      } = Ku, Su = "dropdown" === (null === (Ru = Bu.userInput) || void 0 === Ru ? void 0 : Ru.type) ? Bu.userInput.dropdownOptions : [], pu = !0 === xu.processing, Wu = null !== xu.creator && (xu.jJ > 0 || pu), ju = Wu && xu.jJ > 0 ? EK(Su) : [], Hu = null === Qu ? 0 : null !== (yu = null === (Eu = ju.find((uu => uu.label === Qu))) || void 0 === Eu ? void 0 : Eu.quantity) && void 0 !== yu ? yu : 0;
      return (0, Vu.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Vu.jsx)(cE, {
          item: xu.item
        }), (0, Vu.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Vu.jsx)("b", {
            children: (0, Vu.jsx)(AE.d, {
              text: Bu.customTitle
            })
          }), (0, Vu.jsxs)("small", {
            children: [(0, Vu.jsx)(LE, {
              amount: xu.pricePerItem
            }), " ", Nu("smpShop:each"), " \xb7", " ", null === xu.creator ? Nu("smpShop:you") : (0, Vu.jsx)(AE.d, {
              text: [{
                entityName: xu.creator
              }]
            })]
          }), (0, Vu.jsx)(tK, {
            done: xu.delivered,
            of: xu.wanted
          })]
        }), Wu ? (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)(ZE, {
            options: ju.map((uu => {
              let {
                label: Ru,
                quantity: yu,
                isAll: Eu
              } = uu;
              return {
                value: Ru,
                label: Eu ? Nu("smpShop:max", {
                  count: yu
                }) : String(yu)
              }
            })),
            value: Qu,
            onChange: Ju,
            ariaLabel: Nu("smpShop:quantity")
          }), (0, Vu.jsxs)(Tu.n, {
            loading: Xu.isPending(ru) || pu,
            disabled: null === Qu,
            onClick: () => {
              Xu.act(ru, Qu)
            },
            children: [Nu("smpShop:deliver"), " ", (0, Vu.jsx)(LE, {
              amount: Hu * xu.pricePerItem
            })]
          })]
        }) : (0, Vu.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === xu.creator ? Nu("smpShop:yourOrder") : Nu("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function gK() {
      var uu;
      const {
        t: Ru
      } = (0, mu.E)(), yu = VK(), Ku = null === (uu = yu.shopInfo[yu.categoryKey]) || void 0 === uu ? void 0 : uu.items, Qu = fE(Ku, "search"), Ju = fE(Ku, "creator"), Nu = aE(Ku, "order"), Xu = fE(Ku, "empty"), ru = SK(Qu, Nu.length > 0 || null !== Xu), [Bu, xu] = (0, Eu.useState)(!1), [Su, pu] = (0, Eu.useState)({});
      return (0, Vu.jsx)(jK, {
        browser: ru,
        recentLabel: Ru("smpShop:recentOrders"),
        action: (0, Vu.jsx)(Tu.n, {
          onClick: () => {
            xu((uu => !uu))
          },
          children: Ru("smpShop:createOrder")
        }),
        above: Bu && (0, Vu.jsx)(DK, {
          mode: "order",
          creator: Ju,
          catalogue: ru.catalogue,
          names: ru.names,
          searching: ru.loading,
          prices: [],
          onPickItem: ru.searchFor,
          onClose: () => {
            xu(!1)
          }
        }),
        onBack: () => {
          xu(!1)
        },
        summary: Nu.length > 0 && Ru(1 === Nu.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Nu.length,
          price: tE(HK(Nu, "max"))
        }),
        list: ru.loading ? (0, Vu.jsx)(zE, {}) : Nu.length > 0 ? (0, Vu.jsx)(rK.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: uK,
          observerUpdateDeps: [Nu.length],
          children: Nu.map((uu => (0, Vu.jsx)(lK, {
            entry: uu,
            choice: JK(uu.item, Su[uu.key]),
            onChoose: Ru => {
              pu({
                ...Su,
                [uu.key]: Ru
              })
            }
          }, uu.key)))
        }) : Xu ? (0, Vu.jsx)(wE, {
          entry: Xu
        }) : (0, Vu.jsx)(zE, {
          count: 3
        })
      })
    }

    function cK() {
      var uu;
      const {
        t: Ru
      } = (0, mu.E)(), yu = VK(), Eu = aE(null === (uu = yu.shopInfo[yu.categoryKey]) || void 0 === uu ? void 0 : uu.items, "myOrder");
      return 0 === Eu.length ? (0, Vu.jsx)("div", {
        className: "SmpScreen",
        children: (0, Vu.jsx)(FE, {
          title: Ru("smpShop:noOrders"),
          children: Ru("smpShop:noOrdersHint")
        })
      }) : (0, Vu.jsx)("div", {
        className: "SmpScreen",
        children: (0, Vu.jsx)("div", {
          className: "SmpList",
          children: Eu.map((uu => {
            let {
              key: Eu,
              item: Ku,
              meta: Qu
            } = uu;
            const mu = yu.isPending(Eu) || !1 === Ku.canBuy;
            return (0, Vu.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Vu.jsx)(cE, {
                item: Qu.item,
                amount: Qu.collectable
              }), (0, Vu.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Vu.jsx)("b", {
                  children: (0, Vu.jsx)(AE.d, {
                    text: Ku.customTitle
                  })
                }), (0, Vu.jsxs)("small", {
                  children: [(0, Vu.jsx)(LE, {
                    amount: Qu.pricePerItem
                  }), " ", Ru("smpShop:each"), Qu.collectable > 0 && ` \xb7 ${Ru("smpShop:readyCount",{count:Qu.collectable})}`]
                }), (0, Vu.jsx)(tK, {
                  done: Qu.delivered,
                  of: Qu.wanted
                })]
              }), Qu.collectable > 0 ? (0, Vu.jsx)(Tu.l, {
                loading: mu,
                onClick: () => {
                  yu.act(Eu)
                },
                children: Ru("smpShop:collectCount", {
                  count: Qu.collectable
                })
              }) : (0, Vu.jsx)(Tu.F, {
                loading: mu,
                onClick: () => {
                  yu.act(Eu)
                },
                children: Ru("smpShop:cancel")
              })]
            }, Eu)
          }))
        })
      })
    }
    const LK = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      zK = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function FK(uu, Ru) {
      let yu = !1;
      const Eu = {};
      for (const Ku in uu) Ru(Ku, uu[Ku]) ? Eu[Ku] = uu[Ku] : yu = !0;
      return yu ? Eu : uu
    }

    function wK(uu) {
      var Ru, yu, Ku, Nu;
      const {
        show: Xu,
        shopInfo: ru,
        selectedCategoryKey: Bu
      } = uu, {
        t: xu
      } = (0, mu.E)(), Su = null !== Bu && void 0 !== Bu ? Bu : "", pu = vE(ru, Su), Tu = null === (Ru = ru[Su]) || void 0 === Ru ? void 0 : Ru.items, Wu = null !== pu, [ju, Hu] = (0, Eu.useState)({}), [du, bu] = (0, Eu.useState)([]), [Cu, ku] = (0, Eu.useState)(!1), [eu, Au] = (0, Eu.useState)(null), [, Du] = (0, Eu.useState)(0), Mu = (0, Eu.useRef)(0), Iu = (0, Eu.useRef)({}), Gu = (0, Eu.useRef)({
        items: Tu,
        pending: ju,
        shopInfo: ru,
        active: Wu,
        canAfford: uu.canAfford,
        buy: uu.buy
      });
      Gu.current = {
        items: Tu,
        pending: ju,
        shopInfo: ru,
        active: Wu,
        canAfford: uu.canAfford,
        buy: uu.buy
      };
      const Uu = (0, Eu.useCallback)((uu => {
        Mu.current++;
        const Ru = Mu.current;
        bu((yu => [{
          id: Ru,
          text: uu
        }, ...yu].slice(0, 8))), Au(Ru)
      }), []);
      (0, Eu.useEffect)((() => {
        if (null === eu) return;
        const uu = setTimeout((() => {
          Au(null)
        }), 3e3);
        return () => {
          clearTimeout(uu)
        }
      }), [eu]), (0, Eu.useEffect)((() => {
        const Ru = uu.message;
        if (!Ru) return;
        const {
          shopInfo: yu,
          active: Eu,
          items: Ku
        } = Gu.current, Qu = null !== Ru.categoryKey ? null !== vE(yu, Ru.categoryKey) : Eu;
        (Qu || Eu) && Uu(Ru.text), Qu && Hu((uu => FK(uu, (uu => {
          var Ru, yu;
          return !LK.has(null === Ku || void 0 === Ku || null === (Ru = Ku[uu]) || void 0 === Ru || null === (yu = Ru.smp) || void 0 === yu ? void 0 : yu.kind)
        }))))
      }), [uu.message, Uu]), (0, Eu.useEffect)((() => {
        Hu((uu => FK(uu, ((uu, Ru) => NK(null === Tu || void 0 === Tu ? void 0 : Tu[uu]) === Ru.snapshot))))
      }), [ru, Tu]);
      const nu = Object.keys(ju).length > 0;
      (0, Eu.useEffect)((() => {
        if (!nu) return;
        const uu = setInterval((() => {
          Du((uu => uu + 1));
          const uu = Date.now(),
            {
              pending: Ru,
              items: yu
            } = Gu.current,
            Eu = Object.keys(Ru).filter((yu => uu - Ru[yu].at >= 12e3));
          if (0 === Eu.length) return;
          const Ku = Eu.some((uu => {
            var Eu, Ku;
            return "search" !== (null === yu || void 0 === yu || null === (Eu = yu[uu]) || void 0 === Eu || null === (Ku = Eu.smp) || void 0 === Ku ? void 0 : Ku.kind) || Ru[uu].resend
          }));
          for (const Qu of Eu) Iu.current[Qu] = uu;
          Hu((uu => FK(uu, (uu => !Eu.includes(uu))))), Ku && Uu(xu("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(uu)
        }
      }), [nu]), (0, Eu.useEffect)((() => {
        Hu({})
      }), [Su]), (0, Eu.useEffect)((() => {
        Xu || ku(!1)
      }), [Xu]);
      const su = (0, Eu.useCallback)((function(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Eu,
            pending: Ku,
            canAfford: Qu,
            buy: mu
          } = Gu.current, Ju = null === Eu || void 0 === Eu ? void 0 : Eu[uu];
          if (!Ju || uu in Ku || !1 === Ju.canBuy) return !1;
          if (!Qu(Ju, (0, bE.e)(Ju, Ru))) return !1;
          mu(uu, Ju, Ru);
          const Nu = {
            snapshot: NK(Ju),
            at: Date.now(),
            resend: yu
          };
          return Gu.current.pending = {
            ...Gu.current.pending,
            [uu]: Nu
          }, Hu((Ru => ({
            ...Ru,
            [uu]: Nu
          }))), !0
        }), []),
        tu = (0, Eu.useMemo)((() => ({
          shopInfo: ru,
          categoryKey: Su,
          canAfford: uu.canAfford,
          isPending: uu => uu in ju,
          gaveUpAt: uu => {
            var Ru;
            return null !== (Ru = Iu.current[uu]) && void 0 !== Ru ? Ru : 0
          },
          act: su,
          notify: Uu
        })), [ru, Su, uu.canAfford, ju, su, Uu]),
        lu = Math.min(...Object.values(ju).map((uu => uu.at))),
        gu = nu && Date.now() - lu > 1500,
        cu = du.length > 1,
        Lu = null !== (yu = null === (Ku = ru[Su]) || void 0 === Ku ? void 0 : Ku.customTitle) && void 0 !== yu ? yu : Su,
        zu = null === (Nu = ru[Su]) || void 0 === Nu ? void 0 : Nu.description;
      let Fu = null;
      return "market" === pu ? Fu = (0, Vu.jsx)(MK, {}) : "sell" === pu ? Fu = (0, Vu.jsx)(UK, {}) : "collect" === pu ? Fu = (0, Vu.jsx)(sK, {}) : "orders" === pu ? Fu = (0, Vu.jsx)(gK, {}) : "myOrders" === pu && (Fu = (0, Vu.jsx)(cK, {})), (0, Vu.jsx)(XK.Provider, {
        value: tu,
        children: (0, Vu.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Wu,
          children: (0, Vu.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Vu.jsx)("header", {
              className: "SmpHeader",
              children: (0, Vu.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Vu.jsxs)("h2", {
                  children: [pu && (0, Vu.jsx)(Ju.c, {
                    name: zK[pu]
                  }), xu(Lu)]
                }), zu && (0, Vu.jsx)("p", {
                  children: (0, Vu.jsx)(AE.d, {
                    text: zu
                  })
                })]
              })
            }), (0, Vu.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Xu && Fu
            }), (0, Vu.jsxs)("button", {
              type: "button",
              className: Qu()("SmpStatus", {
                SmpStatusWaiting: nu,
                SmpStatusFresh: !nu && null !== eu,
                SmpStatusHasHistory: cu
              }),
              "aria-live": "polite",
              "aria-expanded": cu ? Cu : void 0,
              onClick: () => {
                cu && ku((uu => !uu))
              },
              children: [nu ? (0, Vu.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Vu.jsx)(hE, {}), xu(gu ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : du[0] ? (0, Vu.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Vu.jsx)(AE.d, {
                  text: du[0].text
                })
              }, du[0].id) : (0, Vu.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: xu("smpShop:ready")
              }), cu && (0, Vu.jsx)("small", {
                children: xu("smpShop:recentMessages", {
                  count: du.length
                })
              })]
            }), Cu && cu && (0, Vu.jsx)("div", {
              className: "SmpStatusHistory",
              children: du.map((uu => (0, Vu.jsx)("div", {
                children: (0, Vu.jsx)(AE.d, {
                  text: uu.text
                })
              }, uu.id)))
            })]
          })
        })
      })
    }
    class ZK {
      constructor(uu) {
        this.info = uu
      }
      static fromShopInfo(uu) {
        const Ru = {};
        for (const yu in uu) {
          const Eu = !0 === uu[yu].redDot && !0 !== uu[yu].forceRemoveRedDot;
          Ru[yu] = {
            redDot: Eu,
            items: {}
          };
          for (const Ku in uu[yu].items) {
            const Eu = uu[yu].items[Ku],
              Qu = !0 === Eu.redDot && !0 !== Eu.forceRemoveRedDot;
            Ru[yu].items[Ku] = {
              redDot: Qu
            }
          }
        }
        return new ZK(Ru)
      }
      anyCategoryHasRedDots() {
        for (const uu in this.info)
          if (this.categoryHasRedDot(uu)) return !0;
        return !1
      }
      doesCategoryExist(uu) {
        return !(0, ZR.E)(this.info[uu])
      }
      categoryHasRedDot(uu) {
        return !0 === this.info[uu].redDot
      }
      updateCategoryRedDot(uu, Ru) {
        this.info[uu].redDot = Ru
      }
      doesItemExist(uu, Ru) {
        return this.doesCategoryExist(uu) && !(0, ZR.E)(this.info[uu].items[Ru])
      }
      itemHasRedDot(uu, Ru) {
        return !0 === this.info[uu].items[Ru].redDot
      }
      updateItemRedDot(uu, Ru, yu) {
        this.info[uu].items[Ru].redDot = yu
      }
      shallowCopy() {
        return new ZK(this.info)
      }
    }

    function hK(uu, Ru) {
      return `${uu}\x1f${Ru}`
    }

    function PK(uu, Ru) {
      return !(0, ZR.E)(Ru) && !(0, ZR.E)(uu) && Ru in uu
    }
    const iK = (0, Eu.memo)((function(uu) {
      var Ru, yu;
      let {
        show: Ku
      } = uu;
      const mu = (0, Oy.h)("players", aK),
        Ju = (0, Oy.h)("players", fK),
        [Xu, Bu] = (0, Eu.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: ZK.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        xu = (0, Eu.useRef)(""),
        pu = (0, Eu.useRef)(null),
        Wu = (0, Eu.useRef)(null),
        Hu = (0, Eu.useRef)(0),
        du = (0, Eu.useRef)(void 0),
        bu = (0, Eu.useRef)(null),
        Cu = (0, Eu.useRef)(Xu),
        ku = Xu.redDotInfo.anyCategoryHasRedDots(),
        [Au, Du] = (0, Eu.useState)(null),
        Iu = (0, Eu.useRef)(!1);
      let Gu = !1,
        Uu = 0,
        nu = 0;
      if (Xu.currencyAmounts) {
        for (const uu in Xu.currencyAmounts) {
          var su;
          const Ru = Xu.currencyAmounts[uu];
          Ru.hidden || (Uu++, (null === (su = Ru.subtext) || void 0 === su ? void 0 : su.length) > 0 && nu++)
        }
        Gu = Uu + nu > 4
      }(0, Eu.useEffect)((() => {
        hR.k.Op("showShopIconRedDot", ku, !0)
      }), [ku]), (0, Eu.useEffect)((() => {
        ju.gameBridge.send("setShopOpen", Ku), Ku || (clearTimeout(du.current), Bu((uu => uu.awaitingPurchase ? {
          ...uu,
          awaitingPurchase: !1
        } : uu)))
      }), [Ku]), (0, Eu.useEffect)((() => () => {
        ju.gameBridge.send("setShopOpen", !1), clearTimeout(du.current)
      }), []), (0, Eu.useEffect)((() => {
        Cu.current = Xu
      }), [Xu]), (0, Eu.useEffect)((() => {
        if (null === Au) return;
        return (0, GE.b)("pointerdown", (uu => {
          const Ru = uu.target;
          null !== Ru && void 0 !== Ru && Ru.closest(".ShopItem") || Du(null)
        }))
      }), [Au]);
      const tu = uu => {
          Bu((Ru => ({
            ...Ru,
            ...uu
          })))
        },
        lu = uu => {
          var Ru;
          clearTimeout(null === (Ru = Xu.onBoughtInfo) || void 0 === Ru ? void 0 : Ru.timeout);
          const yu = setTimeout((() => {
            tu({
              onBoughtInfo: null
            })
          }), 3e3);
          xu.current = uu, tu({
            onBoughtInfo: {
              text: uu,
              timeout: yu,
              categoryKey: pu.current
            }
          })
        },
        gu = uu => {
          const {
            shopInfo: Ru,
            userInputsPerItem: yu,
            redDotInfo: Eu,
            autoSelectCategory: Qu
          } = function(uu, Ru, yu, Eu, Ku, Qu) {
            if ((0, ZR.E)(uu) || 0 === Object.keys(uu).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: ZK.fromShopInfo({}),
              autoSelectCategory: null
            };
            const mu = Mu.q[Mu.v].adConfig.showRewardedAds,
              Ju = {};
            let Nu = null;
            for (const Tu in uu) {
              const Ru = uu[Tu],
                yu = {};
              let Eu = !1;
              for (const uu in Ru.items) {
                const Ku = Ru.items[uu];
                (0, bE.l)(Ku, mu) && (yu[uu] = Ku, Eu = !0)
              }
              Eu && (Ju[Tu] = {
                ...Ru,
                items: yu
              }, !0 === Ru.autoSelectCategory && (Nu = Tu))
            }
            const Xu = {},
              Vu = (uu, Ru, Eu, mu) => {
                var Ju, Nu;
                const Vu = hK(uu, Ru),
                  ru = null !== (Ju = yu[Vu]) && void 0 !== Ju ? Ju : yu[Ru];
                if (null !== (Nu = mu.userInput) && void 0 !== Nu && Nu.type) switch (mu.userInput.type) {
                  case "dropdown": {
                    var Bu;
                    const uu = !ru || !mu.userInput.dropdownOptions.some((uu => (0, bE.h)(uu) === ru)),
                      Ru = mu.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Eu || void 0 === Eu || null === (Bu = Eu.userInput) || void 0 === Bu ? void 0 : Bu.type) || JSON.stringify(Eu.userInput.dropdownOptions) !== JSON.stringify(mu.userInput.dropdownOptions)),
                      yu = mu.userInput,
                      Ku = !(0, ZR.E)(yu.initialValue) && yu.dropdownOptions.some((uu => (0, bE.h)(uu) === yu.initialValue));
                    var xu;
                    return void(uu || Ru ? Ku ? Xu[Vu] = null !== (xu = mu.userInput.initialValue) && void 0 !== xu ? xu : null : mu.userInput.dropdownOptions.length > 0 ? Xu[Vu] = (0, bE.h)(mu.userInput.dropdownOptions[0]) : Xu[Vu] = null : Xu[Vu] = ru)
                  }
                  case "text":
                  case "number":
                    var Su, pu, Tu;
                    return void((null === Eu || void 0 === Eu ? void 0 : Eu.userInput) !== mu.userInput ? Xu[Vu] = null !== (Su = null !== (pu = mu.userInput.initialValue) && void 0 !== pu ? pu : ru) && void 0 !== Su ? Su : "" : Xu[Vu] = null !== (Tu = null !== ru && void 0 !== ru ? ru : mu.userInput.initialValue) && void 0 !== Tu ? Tu : "");
                  case "color":
                    var Wu, ju, Hu;
                    return void((null === Eu || void 0 === Eu ? void 0 : Eu.userInput) !== mu.userInput ? Xu[Vu] = null !== (Wu = null !== (ju = mu.userInput.initialValue) && void 0 !== ju ? ju : ru) && void 0 !== Wu ? Wu : "#000000" : Xu[Vu] = null !== (Hu = null !== ru && void 0 !== ru ? ru : mu.userInput.initialValue) && void 0 !== Hu ? Hu : "#000000");
                  case "player": {
                    const uu = (0, bE.i)(Ku, Qu, mu.userInput);
                    return void(ru && uu.includes(ru) ? Xu[Vu] = ru : Xu[Vu] = uu.length > 0 ? uu[0] : null)
                  }
                }
              };
            for (const Tu in Ju)
              for (const uu in Ju[Tu].items) {
                var ru;
                const yu = Ju[Tu].items[uu];
                Vu(Tu, uu, null === (ru = Ru[Tu]) || void 0 === ru ? void 0 : ru.items[uu], yu)
              }
            const Bu = ZK.fromShopInfo(Ju);
            for (const Tu in Ju) {
              var xu;
              if (Eu.doesCategoryExist(Tu)) {
                (null === (xu = Ru[Tu]) || void 0 === xu ? void 0 : xu.redDot) === Ju[Tu].redDot && Bu.updateCategoryRedDot(Tu, Eu.categoryHasRedDot(Tu));
                for (const uu in Ju[Tu].items) {
                  var Su, pu;
                  Eu.doesItemExist(Tu, uu) && (null === (Su = Ru[Tu]) || void 0 === Su || null === (pu = Su.items[uu]) || void 0 === pu ? void 0 : pu.redDot) === Ju[Tu].items[uu].redDot && Bu.updateItemRedDot(Tu, uu, Eu.itemHasRedDot(Tu, uu))
                }
              }
            }
            return {
              shopInfo: Ju,
              userInputsPerItem: Xu,
              redDotInfo: Bu,
              autoSelectCategory: Nu
            }
          }(uu, Xu.shopInfo, Xu.userInputsPerItem, Xu.redDotInfo, mu, Ju), Nu = {
            shopInfo: Ru,
            userInputsPerItem: yu,
            redDotInfo: Eu
          };
          if (null === Qu || Ku)
            if (Ru[Xu.selectedCategoryKey]) Nu.selectedCategoryKey = Xu.selectedCategoryKey;
            else {
              const uu = nE(Ru);
              Nu.selectedCategoryKey = uu.length > 0 ? uu[0] : null
            }
          else Nu.selectedCategoryKey = Qu;
          return 0 === Object.keys(Ru).length && Ku && eu.d.set({
            openEverythingMenuName: null
          }), Nu
        },
        cu = (uu, Ru, yu) => {
          const Eu = Xu.selectedCategoryKey,
            Ku = hK(Eu, uu),
            Qu = null !== yu && void 0 !== yu ? yu : Xu.userInputsPerItem[Ku],
            mu = {
              categoryKey: Eu,
              itemKey: uu,
              userInput: Qu
            };
          if (pu.current = Eu, Ru.isRewardedAd) {
            if (Date.now() - Hu.current < 5e3) return;
            (0, QR.jb)((() => {
              var yu, Eu, Qu;
              console.log("bought rewarded ad");
              const Ju = mu.categoryKey ? null === (yu = Cu.current.shopInfo[mu.categoryKey]) || void 0 === yu ? void 0 : yu.items[uu] : null;
              if (!Ju || !Ju.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Eu = Ru.userInput) || void 0 === Eu ? void 0 : Eu.type) === (null === Ju || void 0 === Ju || null === (Qu = Ju.userInput) || void 0 === Qu ? void 0 : Qu.type) ? (mu.userInput = Cu.current.userInputsPerItem[Ku], ju.gameBridge.send("buyShopItem", mu), Ru.onBoughtMessage && lu(Ru.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Hu.current = Date.now()
          } else {
            ju.gameBridge.send("buyShopItem", mu), tu({
              awaitingPurchase: !0
            }), clearTimeout(du.current), du.current = setTimeout((() => {
              bu.current = null, tu({
                awaitingPurchase: !1
              })
            }), 1e3);
            const uu = (0, bE.e)(Ru, Qu);
            if (bu.current = null, !isNaN(uu) && PK(Xu.currencyAmounts, Ru.currency)) {
              0 !== uu && (bu.current = {
                currency: Ru.currency,
                amountBefore: Xu.currencyAmounts[Ru.currency].amount
              });
              const yu = {
                ...Xu.currencyAmounts
              };
              yu[Ru.currency].amount -= uu, tu({
                currencyAmounts: yu
              })
            }
            Ru.onBoughtMessage && lu(Ru.onBoughtMessage)
          }
        },
        zu = (uu, Ru) => {
          if (null === Ru || !uu.shopInfo[Ru]) return uu;
          let yu = uu.redDotInfo;
          return yu.categoryHasRedDot(Ru) && (yu.updateCategoryRedDot(Ru, !1), yu = yu.shallowCopy()), {
            ...uu,
            selectedCategoryKey: Ru,
            redDotInfo: yu
          }
        },
        Fu = uu => {
          Bu((Ru => zu(Ru, uu)))
        };
      (0, MR.e)(UE.p, (() => {
        Bu((uu => {
          const Ru = (0, UE.t)(nE(uu.shopInfo), uu.selectedCategoryKey, (Ru => (0, UE.l)(uu.shopInfo[Ru].items)));
          return Ru === uu.selectedCategoryKey ? uu : zu(uu, Ru)
        }))
      })), (0, MR.e)("showShopFromServer", (uu => {
        let {
          toggle: Ru,
          xR: yu
        } = uu;
        yu && Fu(yu), 0 === Object.keys(Xu.shopInfo).length || Ru && Ku ? eu.d.set({
          openEverythingMenuName: null
        }) : eu.d.set({
          openEverythingMenuName: XR.s.SHOP
        })
      })), (0, MR.e)("closeShopOnDamaged", (() => {
        Ku && eu.d.set({
          openEverythingMenuName: null
        })
      })), (0, MR.e)("overShopInfo", (uu => {
        lu(uu)
      })), (0, Su.e)("currencyAmounts", (uu => {
        var Ru;
        const yu = bu.current;
        yu && (null === uu || void 0 === uu || null === (Ru = uu[yu.currency]) || void 0 === Ru ? void 0 : Ru.amount) === yu.amountBefore ? tu({
          currencyAmounts: uu
        }) : (bu.current = null, tu({
          currencyAmounts: uu,
          awaitingPurchase: !1
        }))
      })), (0, Su.e)("shopInfo", (uu => {
        tu({
          ...gu(uu),
          awaitingPurchase: !1
        })
      }));
      const wu = (0, Eu.useRef)({
        playerIds: mu,
        localPlayerId: Ju
      });
      (0, Eu.useEffect)((() => {
        wu.current.playerIds === mu && wu.current.localPlayerId === Ju || (wu.current = {
          playerIds: mu,
          localPlayerId: Ju
        }, Bu((uu => {
          const Ru = gu(uu.shopInfo);
          return {
            ...uu,
            ...Ru
          }
        })))
      }), [mu, Ju]);
      const Zu = Xu.selectedCategoryKey,
        hu = (uu, Ru) => {
          var yu, Eu;
          return (isNaN(Ru) || (0, ZR.E)(uu.currency) || PK(Xu.currencyAmounts, uu.currency) && Ru <= Xu.currencyAmounts[uu.currency].amount) && (null === (yu = uu.canBuy) || void 0 === yu || yu) && !(null !== (Eu = uu.hidden) && void 0 !== Eu && Eu)
        },
        Pu = (uu, Ru) => {
          var yu, Eu, Ku;
          const mu = hK(Zu, uu),
            Ju = Xu.shopInfo[Zu].items[uu],
            ru = Xu.userInputsPerItem[mu],
            Bu = (0, bE.e)(Ju, ru),
            xu = hu(Ju, Bu),
            Su = Ju.enchant,
            pu = Su ? (0, Lu.xb)(null !== (yu = Ju.customTitle) && void 0 !== yu ? yu : uu, {
              colour: Lu.tb[Su.tier]
            }) : null !== (Eu = Ju.customTitle) && void 0 !== Eu ? Eu : uu,
            Wu = Ru => {
              const yu = null !== Ru && void 0 !== Ru ? Ru : ru,
                Eu = void 0 !== Ru ? (0, bE.e)(Ju, Ru) : Bu;
              hu(Ju, Eu) && null !== yu && cu(uu, Ju, Ru);
              let Ku = Xu.redDotInfo;
              Ku.itemHasRedDot(Zu, uu) && (Ku.updateItemRedDot(Zu, uu, !1), Ku = Ku.shallowCopy()), tu({
                redDotInfo: Ku
              })
            };
          return (0, Vu.jsxs)("div", {
            className: Qu()("ShopItem", {
              ShopItemNoInput: !Ju.userInput,
              ShopItemNoInputCanBuy: !Ju.userInput && xu,
              ShopItemNoInputSelected: Ju.isSelected,
              ShopItemEnchant: !!Su
            }),
            "data-pad-focusable": !Ju.userInput || void 0,
            "data-pad-unavailable": !Ju.userInput && !xu || void 0,
            "data-pad-repeat": null !== (Ku = (0, UE.d)(Ju)) && void 0 !== Ku ? Ku : void 0,
            "data-pad-repeat-wait": Xu.awaitingPurchase || void 0,
            onClick: () => {
              if (Su && Iu.current) {
                if (Au !== mu) return void Du(mu);
                Du(null)
              }
              Ju.userInput || Wu()
            },
            onPointerDown: uu => {
              Su && (Iu.current = (0, kE.t)(uu))
            },
            onPointerEnter: uu => {
              Su && !(0, kE.t)(uu) && Du(mu)
            },
            onPointerLeave: uu => {
              Su && !(0, kE.t)(uu) && Du((uu => uu === mu ? null : uu))
            },
            style: {
              zIndex: Object.keys(Xu.shopInfo[Zu].items).length - Ru
            },
            children: [Xu.redDotInfo.itemHasRedDot(Zu, uu) && (0, Vu.jsx)(Nu.e, {
              top: "-6px",
              right: "-6px"
            }), Ju.badge && (0, Vu.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Vu.jsx)("div", {
                className: Qu()("ShopBadgeMain", Ju.badge.type),
                children: (0, Vu.jsx)(AE.d, {
                  text: Ju.badge.text
                })
              })
            }), (0, Vu.jsx)("div", {
              className: "ShopItemLeft",
              children: Ju.image && (0, Vu.jsx)(YK, {
                item: Ju,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Vu.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Vu.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Vu.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Vu.jsx)(AE.d, {
                    text: pu
                  })
                }), (0, Vu.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Vu.jsx)(AE.d, {
                    text: Ju.description
                  })
                })]
              }), Ju.userInput && (0, Vu.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: uu => {
                  uu.stopPropagation()
                },
                children: [(0, Vu.jsx)(OK, {
                  item: Ju,
                  currInput: ru,
                  updateInput: Ru => {
                    ((uu, Ru, yu) => {
                      const Eu = hK(uu, Ru),
                        Ku = {
                          ...Xu.userInputsPerItem
                        };
                      Ku[Eu] = yu, tu({
                        userInputsPerItem: Ku
                      })
                    })(Zu, uu, Ru)
                  },
                  onSubmit: uu => {
                    Wu(uu)
                  }
                }), ("dropdown" !== Ju.userInput.type || !Ju.userInput.autoSubmit) && (0, Vu.jsx)(Tu.e, {
                  className: "ItemCostButton",
                  disabled: !xu && null !== ru,
                  onClick: () => {
                    Wu()
                  },
                  children: (0, Vu.jsx)(qK, {
                    item: Ju,
                    cost: Bu,
                    currencyAmounts: Xu.currencyAmounts
                  })
                })]
              })]
            }), !Ju.userInput && (0, Vu.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Vu.jsx)(qK, {
                item: Ju,
                cost: Bu,
                currencyAmounts: Xu.currencyAmounts
              })
            }), Su && Au === mu && (0, Vu.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Vu.jsx)(AE.d, {
                text: pu
              }), (0, Vu.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Vu.jsx)(AE.d, {
                  text: (0, CE.d)("", Su.enchantments, Su.enchantmentData)
                })
              })]
            })]
          }, mu)
        },
        iu = function(uu) {
          for (const Ru in uu)
            if (uu[Ru].smp) return !0;
          return !1
        }(Xu.shopInfo),
        Yu = vE(Xu.shopInfo, Zu);
      return (0, Vu.jsx)(jE.c, {
        className: "Menu ShopBody",
        show: Ku,
        children: 0 !== Object.keys(Xu.shopInfo).length && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Vu.jsx)(ru, {
              items: nE(Xu.shopInfo).map((uu => {
                var Ru;
                return {
                  id: uu,
                  title: null !== (Ru = Xu.shopInfo[uu].customTitle) && void 0 !== Ru ? Ru : uu,
                  redDot: Xu.redDotInfo.categoryHasRedDot(uu)
                }
              })),
              selectedItemId: Zu,
              onClick: Fu,
              padStartsOnTab: (0, UE.h)(Zu)
            }), (0, Vu.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Xu.currencyAmounts && Object.keys(Xu.currencyAmounts).map((uu => {
                var Ru;
                const yu = Xu.currencyAmounts[uu];
                return yu.hidden ? null : (0, Vu.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Gu ? "SmallText" : ""),
                  children: [(0, Vu.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Vu.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: yu.iconColour
                      },
                      children: (0, Vu.jsx)(uQ, {
                        iconName: yu.icon
                      })
                    }), "\xa0", (0, dE.d)(yu.amount, 6)]
                  }), (null === (Ru = yu.subtext) || void 0 === Ru ? void 0 : Ru.length) > 0 && (0, Vu.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Vu.jsx)(AE.d, {
                      text: yu.subtext
                    })
                  })]
                }, uu)
              }))
            })]
          }), (0, Vu.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [iu && (0, Vu.jsx)(wK, {
              show: Ku,
              shopInfo: Xu.shopInfo,
              selectedCategoryKey: Zu,
              buy: (uu, Ru, yu) => {
                cu(uu, Ru, yu)
              },
              canAfford: hu,
              message: Xu.onBoughtInfo
            }), null === Yu && (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsx)("div", {
                className: Qu()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Xu.onBoughtInfo
                }),
                children: (0, Vu.jsx)(AE.d, {
                  text: xu.current
                })
              }), (0, Vu.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Vu.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Ru = Xu.shopInfo[Zu]) || void 0 === Ru ? void 0 : Ru.description) && (0, Vu.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Vu.jsx)(AE.d, {
                      text: Xu.shopInfo[Zu].description
                    })
                  }), Ku && (0, Vu.jsx)("div", {
                    className: "ShopItems",
                    ref: Wu,
                    "data-pad-initial-area": !0,
                    children: nE(null === (yu = Xu.shopInfo[Zu]) || void 0 === yu ? void 0 : yu.items).map(((uu, Ru) => Pu(uu, Ru)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function YK(uu) {
      let {
        item: Ru,
        minWidth: yu,
        minHeight: Eu
      } = uu;
      const {
        image: Ku,
        schematicId: Qu,
        imageColour: mu
      } = Ru;
      if (Qu) return (0, Vu.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${yu}rem`,
          height: `${Eu}rem`
        },
        children: (0, Vu.jsx)(DE.e, {
          game: {
            schematicId: Qu
          }
        })
      });
      var Nu, Xu;
      if ((0, eE.d)(Ku)) return (0, Vu.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${yu}rem`,
          height: "0",
          minHeight: `${Eu}rem`
        },
        children: (0, Vu.jsx)(eE.c, {
          itemName: Ku,
          amount: null !== (Nu = Ru.amount) && void 0 !== Nu ? Nu : 0,
          amountFontSize: Eu / 4 + "rem",
          enchantmentTier: null === (Xu = Ru.enchant) || void 0 === Xu ? void 0 : Xu.tier
        })
      });
      const ru = Ku.slice(-4);
      return ".jpg" === ru || ".png" === ru ? (0, Vu.jsx)(oK, {
        image: Ku,
        minWidth: yu
      }) : (0, Vu.jsx)(Ju.c, {
        name: Ku,
        className: "SelectedItemImage",
        style: {
          color: mu
        }
      })
    }

    function oK(uu) {
      let {
        image: Ru,
        minWidth: yu
      } = uu;
      const {
        gameNameWithVariation: Eu
      } = (0, Oy.i)("connectedGame"), Ku = Ru.endsWith(".jpg");
      return (0, Vu.jsx)("img", {
        className: Qu()({
          ShopPixelImage: !Ku
        }),
        style: {
          width: `${Ku?1.6*yu:yu}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Lu.cc)(Eu)}/${Ru}`,
        alt: Ru,
        draggable: !1
      })
    }

    function qK(uu) {
      let {
        item: Ru,
        cost: yu,
        currencyAmounts: Eu
      } = uu;
      const Ku = !isNaN(yu) && 0 !== yu && PK(Eu, Ru.currency);
      let Qu = null;
      return Ru.buyButtonText ? Qu = Ru.buyButtonText : Ku ? (Qu = yu, Ru.sell && (Qu = -1 * yu), Qu = Qu.toString()) : 0 === yu ? Qu = "Free" : Ru.isRewardedAd && (Qu = "Watch ad"), (0, ZR.E)(Qu) || " " === Qu ? null : (0, Vu.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Ku && (0, Vu.jsx)("div", {
          style: {
            color: Eu[Ru.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Vu.jsx)(uQ, {
            iconName: Eu[Ru.currency].icon
          })
        }), (0, Vu.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Vu.jsx)(AE.d, {
            text: Qu
          })
        })]
      })
    }

    function OK(uu) {
      let {
        item: Ru,
        currInput: yu,
        updateInput: Ku,
        onSubmit: Qu
      } = uu;
      const {
        t: Ju
      } = (0, mu.E)(), Nu = (0, Eu.useRef)(null);
      if ((0, Eu.useEffect)((() => {
          const uu = Nu.current;
          uu && uu.value !== yu && document.activeElement !== uu && (uu.value = null !== yu && void 0 !== yu ? yu : "")
        }), [yu]), !Ru.userInput) return null;
      let Xu = Ru.userInput;
      if (Wu.featureFlags.sanitizeShopInput && "text" === Ru.userInput.type && (Xu = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Xu.type || "number" === Xu.type) {
        var ru, Bu;
        console.assert(void 0 !== yu, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Ru)}`);
        const uu = "text" === Xu.type && Xu.wordCharsOnly;
        return (0, Vu.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Vu.jsx)(bu.b, {
            className: "ShopItemUserInputText",
            placeholderText: Ju(Xu.placeholderText),
            defaultValue: yu,
            domRef: Nu,
            onValueChange: (Ru, yu) => {
              !0 === uu && (Ru = (0, IE.jb)(Ru)), Nu.current.value = Ru, Ku(Ru)
            },
            onEnter: Qu,
            type: Xu.type
          }, (null !== (ru = Xu.initialValue) && void 0 !== ru ? ru : "") + (null !== (Bu = Xu.placeholderText) && void 0 !== Bu ? Bu : ""))
        })
      }
      if ("dropdown" === Xu.type) {
        console.assert(void 0 !== yu, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Ru)}`);
        const uu = Xu.autoSubmit;
        return (0, Vu.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Vu.jsx)(bR.d, {
            options: Xu.dropdownOptions.map((uu => (0, bE.h)(uu))),
            value: yu,
            onChange: Ru => {
              let {
                value: yu
              } = Ru;
              Ku(yu), uu && Qu(yu)
            }
          })
        })
      }
      return "player" === Xu.type ? (0, Vu.jsx)(vK, {
        userInput: Xu,
        currInput: yu,
        updateInput: Ku
      }) : "color" === Xu.type ? (0, Vu.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Vu.jsx)("input", {
          type: "color",
          value: yu,
          onChange: uu => {
            Ku(uu.target.value)
          }
        })
      }) : null
    }

    function vK(uu) {
      let {
        userInput: Ru,
        currInput: yu,
        updateInput: Eu
      } = uu;
      const Ku = (0, Oy.i)("players"),
        Qu = (0, Oy.i)("hiddenPlayerNames"),
        mu = (0, bE.i)(Ku.ids, Ku.localId, Ru);
      return (0, Vu.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Vu.jsx)(bR.d, {
          options: mu.map((uu => {
            const {
              name: Ru
            } = Ku.byId[uu];
            return {
              value: uu,
              label: null === Ru ? "" : (0, ME.e)(Ru, Qu)
            }
          })),
          value: yu,
          onChange: uu => {
            let {
              value: Ru
            } = uu;
            Eu(Ru)
          }
        })
      })
    }

    function aK(uu) {
      let {
        ids: Ru
      } = uu;
      return Ru
    }

    function fK(uu) {
      let {
        localId: Ru
      } = uu;
      return Ru
    }

    function uQ(uu) {
      let {
        iconName: Ru
      } = uu;
      return ju.gameBridge.lookup("isItemName", Ru) ? (0, Vu.jsx)(eE.c, {
        itemName: Ru,
        amount: 1
      }) : (0, Vu.jsx)(Ju.c, {
        name: Ru,
        className: "2x"
      })
    }
    var RQ = yu(1583);
    const yQ = (0, yu(1362).g)((uu => uu.PadLobbyShortcuts)),
      EQ = (0, Eu.lazy)((() => Promise.resolve().then((() => yu(4436))).then((uu => ({
        default: uu.Lobbyleaderboard
      })))));

    function KQ(uu) {
      let {
        show: Ru
      } = uu;
      return Ru ? (0, Vu.jsxs)(Vu.Fragment, {
        children: [(0, Vu.jsx)(yQ, {}), (0, Vu.jsx)(Eu.Suspense, {
          fallback: (0, Vu.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Vu.jsx)(Cu.b, {})
          }),
          children: (0, Vu.jsx)(EQ, {})
        })]
      }) : null
    }
    var QQ = yu(1511),
      mQ = yu(2799),
      JQ = yu(1661),
      NQ = yu(2843),
      XQ = yu(2539),
      VQ = yu(1442),
      rQ = yu(1410),
      BQ = yu(2774),
      xQ = yu(2793),
      SQ = yu(2243);
    const pQ = "storeRecentGiftRecipients",
      TQ = new Map;

    function WQ() {
      try {
        const uu = iR.i.getItem(pQ);
        return Array.isArray(uu) ? uu.filter((uu => "string" === typeof(null === uu || void 0 === uu ? void 0 : uu.name) && uu.name.length > 0)).map((uu => ({
          name: uu.name,
          cosmetics: uu.cosmetics && "object" === typeof uu.cosmetics ? uu.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function jQ(uu) {
      var Ru;
      const [yu, Ku] = (0, Eu.useState)(""), [Qu, mu] = (0, Eu.useState)("search"), [Ju, Nu] = (0, Eu.useState)(null), [Xu, Vu] = (0, Eu.useState)(null), ru = (0, Eu.useRef)(null), Bu = (0, Eu.useRef)(null);
      (0, Eu.useEffect)((() => () => {
        ru.current && clearTimeout(ru.current)
      }), []);
      const xu = null !== (Ru = null === Ju || void 0 === Ju ? void 0 : Ju.name) && void 0 !== Ru ? Ru : null;

      function Su() {
        ru.current && (clearTimeout(ru.current), ru.current = null)
      }(0, Eu.useEffect)((() => {
        if (null === xu || uu === Iu.NULL_USER_CONTEXT) return;
        const Ru = xu.toLowerCase();
        if (Ru === uu.getPlayerName().toLowerCase()) return void Vu({
          name: xu,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const yu = TQ.get(Ru);
        if (yu) return void Vu({
          name: xu,
          result: yu
        });
        let Eu = !1;
        return async function(uu, Ru) {
          try {
            const yu = await (0, Iu.postJsonWithMetricsCookiesAndJsonResponse)(`${Gu.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Ru
            }, {
              retries: 1
            }, uu.getMetricsCookies());
            if ("boolean" !== typeof(null === yu || void 0 === yu ? void 0 : yu.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(yu)}`);
            return yu
          } catch (yu) {
            return console.error("Failed to look up gift recipient:", yu), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(uu, xu).catch((uu => (console.error("Gift recipient lookup failed:", uu), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((uu => {
          !0 !== uu.giftRecipientFound && "store:giftRecipientLookupFailed" === uu.giftRecipientError || TQ.set(Ru, uu), Eu || Vu({
            name: xu,
            result: uu
          })
        })), () => {
          Eu = !0
        }
      }), [xu, uu]);
      const pu = (0, Eu.useMemo)((() => {
        const uu = yu.trim();
        if (!uu) return {
          status: "none"
        };
        if (!Ju || Ju.name !== uu || (null === Xu || void 0 === Xu ? void 0 : Xu.name) !== Ju.name) return {
          status: "pending",
          name: uu
        };
        const Ru = Xu.result;
        return !1 === Ru.giftRecipientFound ? {
          status: "error",
          name: Ju.name,
          error: Ru.giftRecipientError
        } : {
          status: "found",
          name: Ru.giftRecipientName,
          ownedPacks: Ru.giftRecipientOwnedPacks,
          hasSuperRank: Ru.giftRecipientHasSuperRank,
          isSubscriber: Ru.giftRecipientIsSubscriber
        }
      }), [yu, Ju, Xu]);
      (0, Eu.useEffect)((() => {
        "found" === pu.status && "typed" === (null === Ju || void 0 === Ju ? void 0 : Ju.source) && Bu.current !== pu.name && (Bu.current = pu.name, (0, au.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [pu, Ju]);
      const Tu = (null === Xu || void 0 === Xu ? void 0 : Xu.name) === (null === Ju || void 0 === Ju ? void 0 : Ju.name) ? null === Xu || void 0 === Xu ? void 0 : Xu.result : null,
        Wu = !0 === (null === Tu || void 0 === Tu ? void 0 : Tu.giftRecipientFound) ? Tu.giftRecipientCosmetics : null;
      return {
        query: yu,
        via: Qu,
        recipient: pu,
        recipientCosmetics: Wu,
        type: function(uu) {
          Ku(uu), mu("search"), Su();
          const Ru = uu.trim();
          Ru ? ru.current = setTimeout((() => {
            Nu({
              name: Ru,
              source: "typed"
            })
          }), 400) : Nu(null)
        },
        choose: function(uu, Ru) {
          Su(), Ku(uu), mu("typed" === Ru ? "search" : "prefilled" === Ru ? "prefilled" : "suggestion"), Nu({
            name: uu,
            source: Ru
          }), "typed" !== Ru && "prefilled" !== Ru && (0, au.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Ru
          })
        },
        clear: function() {
          Su(), Ku(""), mu("search"), Nu(null)
        },
        recordGift: function(uu, Ru) {
          ! function(uu) {
            TQ.delete(uu.toLowerCase())
          }(uu), Vu((yu => {
            if (!yu || yu.name.toLowerCase() !== uu.toLowerCase() || !0 !== yu.result.giftRecipientFound || "superRank" === Ru) return yu;
            const Eu = yu.result.giftRecipientOwnedPacks;
            return {
              ...yu,
              result: {
                ...yu.result,
                giftRecipientOwnedPacks: Eu.includes(Ru) ? Eu : [...Eu, Ru]
              }
            }
          }))
        }
      }
    }
    var HQ = yu(2236),
      dQ = yu(4441),
      bQ = yu(281),
      CQ = yu(2896);
    const kQ = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var eQ = yu(2171),
      AQ = yu(595),
      DQ = yu(2278),
      MQ = yu(2457);

    function IQ(uu) {
      let {
        cosmetics: Ru
      } = uu;
      return (0, Vu.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Vu.jsx)(DQ.b, {
          cosmetics: Ru
        })
      })
    }

    function GQ(uu, Ru) {
      var yu, Eu;
      const Ku = null !== (yu = uu.friend) && void 0 !== yu ? yu : {
        isError: !1,
        name: uu.name,
        ranks: [],
        cosmetics: null !== (Eu = uu.cosmetics) && void 0 !== Eu ? Eu : {},
        nameColour: AQ.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return Ru ? {
        ...Ku,
        cosmetics: Ru
      } : Ku
    }

    function UQ(uu) {
      let {
        recipient: Ru
      } = uu;
      return "pending" === Ru.status ? (0, Vu.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, Vu.jsx)(Cu.b, {})
      }) : "found" === Ru.status ? (0, Vu.jsx)(Ju.c, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function nQ(uu) {
      var Ru;
      let {
        selfName: yu,
        giftRecipient: Ku,
        suggestionsVersion: Nu,
        pulseSignal: Xu,
        disabled: ru
      } = uu;
      const {
        t: Bu
      } = (0, mu.E)(), xu = (0, Zu.j)(), Su = (0, Eu.useRef)(null), pu = (0, Eu.useRef)(null), {
        query: ju,
        via: Hu,
        recipient: du,
        recipientCosmetics: Cu
      } = Ku, ku = (0, SQ.l)(ju), eu = (0, Eu.useMemo)((() => {
        const uu = Wu.featureFlags.useSocialFeatures ? xu.friends.filter((uu => !uu.isError)) : [];
        return (0, SQ.h)({
          onlineFriends: (0, Zu.g)(uu),
          recentRecipients: WQ(),
          friends: uu,
          selfName: yu,
          max: 8
        })
      }), [xu.friends, yu, Nu]), Au = ju.trim().toLowerCase(), Du = "search" !== Hu && Au ? eu.find((uu => uu.name.toLowerCase() === Au)) : void 0, Mu = Du && "prefilled" === Hu ? [Du, ...eu.filter((uu => uu !== Du))] : eu, Iu = "" !== Au && !Du, Gu = Iu ? ju : "", Uu = Mu.length > 0;
      (0, Eu.useEffect)((() => {
        Su.current && Su.current.value !== Gu && (Su.current.value = Gu)
      }), [Gu]), (0, Eu.useEffect)((() => {
        Su.current && (Su.current.disabled = ru)
      }), [ru, Xu]);
      const nu = (0, Eu.useRef)(0);

      function tu() {
        "self" !== ku && (0, au.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Ku.clear()
      }

      function lu(uu) {
        var Ru, yu;
        if (ru) return;
        if (" " === uu.key || "Enter" === uu.key) return uu.preventDefault(), void uu.currentTarget.click();
        const Eu = Array.from(null !== (Ru = null === (yu = pu.current) || void 0 === yu ? void 0 : yu.querySelectorAll("[role=radio]")) && void 0 !== Ru ? Ru : []),
          Ku = Eu.indexOf(uu.currentTarget);
        let Qu;
        "ArrowRight" === uu.key || "ArrowDown" === uu.key ? Qu = Eu[(Ku + 1) % Eu.length] : "ArrowLeft" === uu.key || "ArrowUp" === uu.key ? Qu = Eu[(Ku - 1 + Eu.length) % Eu.length] : "Home" === uu.key ? Qu = Eu[0] : "End" === uu.key && (Qu = Eu[Eu.length - 1]), Qu && (uu.preventDefault(), Qu.focus(), Qu.click())
      }(0, Eu.useEffect)((() => {
        var uu;
        Xu > nu.current && !ru && (nu.current = Xu, null === (uu = Su.current) || void 0 === uu || uu.focus())
      }), [Xu, ru]);
      const gu = "self" === ku,
        cu = null !== (Ru = null === Du || void 0 === Du ? void 0 : Du.name) && void 0 !== Ru ? Ru : null,
        Lu = "error" === du.status ? du.error : null,
        zu = "store:giftRecipientLookupFailed" === Lu;
      return (0, Vu.jsxs)("div", {
        className: Qu()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: ru,
          StoreRecipientStripNoChips: !Uu
        }),
        children: [(0, Vu.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Bu("store:buyingFor")
        }), (0, Vu.jsxs)("div", {
          ref: pu,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Bu("store:whoIsItFor"),
          children: [(0, Vu.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": gu,
            tabIndex: ru || !gu && null !== cu ? -1 : 0,
            className: Qu()("StoreRecipientMe", {
              StoreRecipientChecked: gu
            }),
            onClick: () => {
              ru || tu()
            },
            onKeyDown: lu,
            children: [(0, Vu.jsx)(Ju.c, {
              name: "user"
            }), " ", Bu("store:me")]
          }), Uu && (0, Vu.jsx)("div", {
            className: "StoreRecipientChips",
            children: Mu.map((uu => {
              const Ru = uu === Du;
              return (0, Vu.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Ru,
                tabIndex: !ru && Ru ? 0 : -1,
                title: uu.name,
                className: Qu()("StoreRecipientChip", {
                  StoreRecipientChecked: Ru
                }),
                onClick: () => {
                  ru || function(uu) {
                    "gift" !== ku && (0, au.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Ku.choose(uu.name, uu.kind)
                  }(uu)
                },
                onKeyDown: lu,
                children: (0, Vu.jsx)(MQ.e, {
                  playerSocialPreview: GQ(uu, Ru ? Cu : null),
                  opensProfileCard: !1,
                  isFriend: null !== uu.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== uu.friend,
                  status: null === uu.friend ? null : void 0,
                  trailing: Ru ? (0, Vu.jsx)(UQ, {
                    recipient: du
                  }) : void 0
                })
              }, uu.name)
            }))
          })]
        }), (0, Vu.jsxs)("div", {
          className: Qu()("StoreRecipientSearch", {
            StoreRecipientChecked: Iu,
            StoreRecipientSearchPulse: Xu > 0 && !Iu,
            StoreRecipientSearchError: null !== Lu && !zu
          }),
          onClick: () => {
            var uu;
            null === (uu = Su.current) || void 0 === uu || uu.focus()
          },
          children: [Iu && "found" === du.status && Cu && (0, Vu.jsx)(IQ, {
            cosmetics: Cu
          }), !(Iu && "found" === du.status && Cu) && (0, Vu.jsx)(Ju.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Vu.jsx)(bu.b, {
            className: "StoreRecipientSearchInput",
            domRef: Su,
            placeholderText: Bu("store:searchName"),
            defaultValue: Gu,
            maxLength: su.k,
            onValueChange: function(uu) {
              "gift" !== ku && uu.trim() && (0, au.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Ku.type(uu)
            },
            onEnter: () => {
              var uu;
              const Ru = null === (uu = Su.current) || void 0 === uu ? void 0 : uu.value.trim();
              Ru && Ku.choose(Ru, "typed")
            },
            blurOnEnter: !0
          }), Iu && (0, Vu.jsx)(UQ, {
            recipient: du
          }), Iu && (0, Vu.jsx)("div", {
            ...(0, Tu.U)({
              disabled: ru
            }),
            "aria-label": Bu("store:clearRecipient"),
            title: Bu("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: uu => {
              uu.stopPropagation(), ru || tu()
            },
            children: (0, Vu.jsx)(Ju.c, {
              name: "xmark"
            })
          })]
        }, Xu), Lu && (0, Vu.jsx)("div", {
          className: Qu()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: zu
          }),
          role: "status",
          children: Bu(Lu)
        })]
      })
    }
    var sQ = yu(2229),
      tQ = yu(2153),
      lQ = yu(3396),
      gQ = yu(2903),
      cQ = yu(2184);
    const LQ = yu.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function zQ() {
      (0, cQ.k)(LQ, {
        lowPriority: !1
      })
    }

    function FQ(uu) {
      let {
        onBack: Ru,
        cta: yu,
        recipient: Ku,
        afterCta: Qu
      } = uu;
      const {
        t: Nu
      } = (0, mu.E)(), [Xu, ru] = (0, Eu.useState)("starting"), Bu = (0, Eu.useRef)(null), xu = (0, UR.b)(), Su = (0, Eu.useRef)(null), pu = (0, Eu.useCallback)((() => {
        const uu = Bu.current;
        null !== uu.error && uu.load();
        const Ru = uu.play();
        Su.current = Ru, Ru.catch((uu => {
          (0, lQ.b)("Failed to play Super Rank video", uu), xu.current && Su.current === Ru && ru("failed")
        }))
      }), [xu]);
      return (0, Eu.useEffect)((() => {
        const uu = Bu.current;
        let Ru;

        function yu() {
          clearTimeout(Ru), Ru = setTimeout(pu, 3e3)
        }
        return pu(), uu.addEventListener("ended", yu), () => {
          clearTimeout(Ru), uu.removeEventListener("ended", yu)
        }
      }), [pu]), (0, Vu.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Vu.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Vu.jsx)(Tu.b, {
            className: "StoreDetailBackButton",
            onClick: Ru,
            padBack: !0,
            children: Nu("general:back")
          }), (0, Vu.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Vu.jsx)(Ju.c, {
              name: "bolt"
            }), " ", Nu("homePage:superRank")]
          }), Ku]
        }), (0, Vu.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Vu.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Vu.jsx)("video", {
              ref: Bu,
              src: `${Gu.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: LQ,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Xu,
              onPlaying: () => {
                ru("playing")
              },
              onError: () => {
                ru("failed")
              }
            }), ("failed" === Xu || "loading" === Xu) && (0, Vu.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Vu.jsx)(Tu.e, {
                ariaLabel: Nu("general:play"),
                loading: "loading" === Xu,
                onClick: () => {
                  ru("loading"), pu()
                },
                touchPressOn: "pointerup",
                children: (0, Vu.jsx)(Ju.c, {
                  name: "play"
                })
              })
            })]
          }), (0, Vu.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Vu.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Vu.jsx)(gQ.d, {})
            }), (0, Vu.jsxs)("div", {
              className: "StoreTileActions",
              children: [yu, Qu]
            })]
          })]
        })]
      })
    }
    var wQ = yu(2475),
      ZQ = yu(3356),
      hQ = yu(2886),
      PQ = yu(2893);
    const iQ = [AQ.r.yellow, AQ.r.green, AQ.r.aqua, AQ.r.blue, AQ.r.purple, AQ.r.red];

    function YQ(uu) {
      return "needsRecipient" === uu || "lookingUp" === uu || "gift" === uu || "recipientOwns" === uu || "recipientSharesOwned" === uu || "recipientSubscribed" === uu
    }

    function oQ(uu) {
      const {
        onKeyDown: Ru,
        ...yu
      } = (0, Tu.U)();
      return {
        ...yu,
        "aria-label": uu,
        onKeyDown: uu => {
          uu.target === uu.currentTarget && (null === Ru || void 0 === Ru || Ru(uu))
        }
      }
    }

    function qQ(uu) {
      let {
        text: Ru
      } = uu;
      return (0, Vu.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Ru).map(((uu, Ru) => (0, Vu.jsx)("span", {
          style: {
            color: iQ[Ru % iQ.length]
          },
          children: uu
        }, Ru)))
      })
    }
    const OQ = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function vQ(uu) {
      let {
        state: Ru,
        item: yu,
        price: Eu,
        busy: Ku,
        highlight: Nu = !1,
        onAct: Xu,
        onNeedRecipient: ru,
        onLogin: Bu
      } = uu;
      const {
        t: xu
      } = (0, mu.E)(), Su = "superRank" === yu ? lu.j.product.days : null, pu = uu => null === Su ? xu(uu ? "general:gift" : "general:buy") : xu(uu ? "store:giftDays" : "store:buyDays", {
        days: Su
      }), Wu = (uu, Ru) => (0, Vu.jsxs)(Vu.Fragment, {
        children: [Ru && (0, Vu.jsx)("span", {
          className: "StoreCtaIcon",
          children: Ru
        }), null === uu && (0, Vu.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== uu && (0, Vu.jsx)("span", {
          className: "StoreCtaLabel",
          title: uu,
          children: uu
        }), (0, Vu.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, Vu.jsx)(tQ.b, {
            amount: Eu
          })]
        })]
      });
      let ju;
      switch (Ru) {
        case "pending":
          ju = (0, Vu.jsx)(Tu.l, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Wu(null)
          });
          break;
        case "login":
          ju = (0, Vu.jsx)(Tu.l, {
            className: "StoreCtaButton",
            onClick: Bu,
            children: Wu(pu(!1))
          });
          break;
        case "owned":
          ju = (0, Vu.jsx)(Tu.f, {
            className: "StoreCtaButton",
            onClick: () => {
              eu.d.set({
                openEverythingMenuName: XR.s.CUSTOMISATION
              })
            },
            children: (0, Vu.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Vu.jsx)(Ju.c, {
                name: "shirt"
              }), " ", xu("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          ju = (0, Vu.jsx)(Tu.l, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Vu.jsx)("span", {
              className: "StoreCtaLabel",
              children: xu(OQ[Ru])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          ju = (0, Vu.jsx)(Tu.l, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Ru || null === Eu,
            loading: "lookingUp" === Ru || Ku,
            onClick: Xu,
            analyticsClick: {
              id: "store.gift",
              value: yu
            },
            children: Wu(pu(!0), SQ.d)
          });
          break;
        case "buy":
        case "recharge":
          ju = (0, Vu.jsx)(Tu.l, {
            className: "StoreCtaButton",
            loading: Ku,
            disabled: null === Eu,
            onClick: Xu,
            analyticsClick: {
              id: "store.buy",
              value: yu
            },
            children: Wu(pu(!1))
          })
      }
      return (0, Vu.jsx)("div", {
        className: Qu()("StoreCta", {
          StoreCtaHighlight: Nu
        }),
        onClick: uu => {
          uu.stopPropagation(), "needsRecipient" === Ru && ru()
        },
        children: ju
      })
    }

    function aQ() {
      const {
        t: uu
      } = (0, mu.E)();
      return (0, Vu.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Vu.jsxs)("li", {
          children: [(0, Vu.jsx)(Ju.c, {
            name: "check"
          }), (0, Vu.jsx)(qQ, {
            text: uu("store:colourfulNames")
          })]
        }), (0, Vu.jsxs)("li", {
          children: [(0, Vu.jsx)(Ju.c, {
            name: "check"
          }), uu("store:perkCapes")]
        }), (0, Vu.jsxs)("li", {
          children: [(0, Vu.jsx)(Ju.c, {
            name: "check"
          }), uu("store:perkNoAdverts")]
        }), (0, Vu.jsxs)("li", {
          children: [(0, Vu.jsx)(Ju.c, {
            name: "check"
          }), uu("store:perkFriends", {
            count: (0, Ou.c)(["super"])
          })]
        })]
      })
    }

    function fQ(uu) {
      let {
        daysLeft: Ru,
        totalDays: yu,
        urgent: Eu
      } = uu;
      const {
        t: Ku
      } = (0, mu.E)(), Ju = yu > 0 ? Math.min(1, Math.max(.03, Ru / yu)) : 1;
      return (0, Vu.jsxs)("div", {
        className: Qu()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Eu
        }),
        children: [(0, Vu.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Ru ? Ku("store:oneDayLeft") : Ku("store:daysLeft", {
            days: Ru
          })
        }), (0, Vu.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Vu.jsx)("i", {
            style: {
              width: 100 * Ju + "%"
            }
          })
        })]
      })
    }

    function um(uu) {
      let {
        state: Ru,
        urgent: yu,
        daysLeft: Eu,
        totalDays: Ku,
        recipientHasSuperRank: Nu,
        busy: Xu,
        highlight: ru,
        onOpen: Bu,
        onAct: xu,
        onNeedRecipient: Su,
        onLogin: pu
      } = uu;
      const {
        t: Tu
      } = (0, mu.E)(), Wu = YQ(Ru), {
        days: ju
      } = lu.j.product, Hu = Tu("store:recipientHasSuperRank", {
        giftDays: ju
      }), du = ou("subscribed" === Ru);
      return (0, Vu.jsxs)("div", {
        className: Qu()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Wu,
          StoreSuperRankTileUrgent: "recharge" === Ru && yu,
          StoreSuperRankTileWithChip: Nu,
          StoreSuperRankTileGiftReady: "gift" === Ru
        }),
        ...oQ(Tu("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: zQ,
        onFocus: zQ,
        onClick: Bu,
        children: [(0, Vu.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${eQ.h})`
          }
        }), Wu && (0, Vu.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Vu.jsxs)("div", {
          className: "StoreTileContent",
          children: [Nu && (0, Vu.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Hu,
            children: Hu
          }), (0, Vu.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Vu.jsx)(Ju.c, {
              name: "bolt"
            }), " ", Tu("homePage:superRank")]
          }), Wu && (0, Vu.jsx)("div", {
            className: "StoreTilePitch",
            children: Tu("store:giftPitch", {
              days: ju
            })
          }), "recharge" === Ru && (0, Vu.jsx)(fQ, {
            daysLeft: Eu,
            totalDays: Ku,
            urgent: yu
          }), du && (0, Vu.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Vu.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: du
            })
          }), (0, Vu.jsx)(aQ, {}), (0, Vu.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Vu.jsx)(vQ, {
              state: Ru,
              item: "superRank",
              price: lu.j.price,
              busy: Xu,
              highlight: ru,
              onAct: xu,
              onNeedRecipient: Su,
              onLogin: pu
            }), "needsRecipient" === Ru && (0, Vu.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Tu("store:pickRecipientFirst")
            }), "recharge" === Ru && yu && (0, Vu.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Eu ? Tu("store:endsInOneDay") : Tu("store:endsInDays", {
                days: Eu
              })
            })]
          })]
        })]
      })
    }
    const Rm = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function ym(uu) {
      var Ru;
      let {
        pack: yu,
        state: Ku,
        busy: Nu,
        onOpen: Xu,
        onAct: ru,
        onNeedRecipient: Bu,
        onLogin: xu
      } = uu;
      const {
        t: Su
      } = (0, mu.E)(), pu = QQ.d[yu], Tu = BQ.l[yu], Wu = (0, eQ.q)(yu), ju = (0, Eu.useRef)(null);
      (0, hQ.k)(yu, ju);
      const Hu = YQ(Ku),
        du = null !== (Ru = pu.displayName) && void 0 !== Ru ? Ru : yu,
        bu = (0, ZQ.d)((() => {
          (0, wQ.c)();
          const uu = (0, hQ.f)(yu);
          void 0 !== uu && (0, cQ.k)((0, hQ.d)(uu))
        })),
        [Cu] = (0, Eu.useState)(CQ.i);
      return (0, Vu.jsxs)("div", {
        className: Qu()("StoreTile StorePackTile", Rm[pu.tier], {
          StorePackTileOwned: "owned" === Ku,
          StorePackTileRecipientOwns: "recipientOwns" === Ku,
          StoreTileGift: Hu
        }),
        ...oQ(du),
        ref: ju,
        "data-store-item": yu,
        onClick: Xu,
        onPointerMove: uu => {
          "mouse" !== uu.pointerType || 0 === uu.movementX && 0 === uu.movementY || Cu || bu.start()
        },
        onPointerLeave: bu.cancel,
        children: [Tu && (0, Vu.jsx)(Tu, {}), (0, Vu.jsx)("div", {
          className: "StorePackCharacters",
          children: Wu.map((uu => (0, Vu.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,eQ.l)(uu)})`
            }
          }, uu)))
        }), (0, Vu.jsx)("div", {
          className: "StoreTileScrim"
        }), Hu && (0, Vu.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Vu.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Vu.jsx)("div", {
            className: "StoreTileTitle",
            children: du
          }), (0, Vu.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Vu.jsx)(PQ.c, {
              tier: pu.tier
            }), " \xb7 ", Su("store:itemCount", {
              count: (0, sQ.e)(yu)
            }), "owned" === Ku && (0, Vu.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Vu.jsx)(Ju.c, {
                name: "check"
              }), " ", Su("general:owned")]
            })]
          }), (0, Vu.jsx)(vQ, {
            state: Ku,
            item: yu,
            price: (0, lu.f)(yu),
            busy: Nu,
            onAct: ru,
            onNeedRecipient: Bu,
            onLogin: xu
          })]
        })]
      })
    }
    var Em = yu(2850),
      Km = yu(1506),
      Qm = yu(1415),
      mm = yu(3380);

    function Jm() {
      return (0, Vu.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Nm = yu(1302),
      Xm = yu(1517),
      Vm = yu(9098);

    function rm(uu) {
      let {
        character: Ru,
        drawn: yu,
        onDrawn: Ku
      } = uu;
      const mu = (0, Eu.useRef)(null),
        Ju = (0, Vm.f)(Ru);
      return (0, Vu.jsx)("div", {
        className: Qu()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: yu
        }),
        children: (0, Vu.jsx)(Eu.Suspense, {
          fallback: null,
          children: (0, Vu.jsx)(wQ.b, {
            ref: mu,
            framing: "store",
            turntableFromYaw: yu ? Ju.yaw : null,
            onReady: () => {
              var uu, yu;
              null === (uu = mu.current) || void 0 === uu || uu.setOrbit(Ju), null === (yu = mu.current) || void 0 === yu || yu.setAllCosmetics(Xm.b[Ru].cosmetics)
            },
            onDrawn: Ku
          })
        })
      })
    }
    const Bm = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      xm = new Set(["wildSpirits"]);

    function Sm(uu) {
      var Ru;
      let {
        tile: yu,
        design: Ku,
        canGoLive: Nu,
        live: Xu,
        busy: ru,
        highlight: Bu,
        onLiveStart: xu,
        onLiveEnd: Su,
        onOpen: pu,
        onAct: Tu,
        onNeedRecipient: Wu,
        onLogin: ju
      } = uu;
      const {
        t: Hu
      } = (0, mu.E)(), {
        pack: du,
        state: bu
      } = yu, Cu = QQ.d[du], ku = (0, QQ.e)(du), eu = (0, eQ.p)(du), Au = BQ.l[eu], Du = xm.has(eu), {
        tier: Mu
      } = Cu, Iu = "legendary" === Mu || "mythic" === Mu, Gu = (0, Eu.useRef)(null);
      (0, Nm.b)(Gu, "epic" === Mu || Iu || Du);
      const [Uu, su] = (0, Eu.useState)(!1);
      return !Xu && Uu && su(!1), (0, Vu.jsxs)("div", {
        ref: Gu,
        className: Qu()("StoreCharacterCard", `StoreCharacterCard${Ku}`, Bm[Mu], {
          StoreCharacterCardOwned: "owned" === bu || "recipientOwns" === bu,
          StoreCharacterCardGift: YQ(bu),
          StoreCharacterCardItem: void 0 === ku
        }),
        onPointerMove: uu => {
          "mouse" !== uu.pointerType || 0 === uu.movementX && 0 === uu.movementY || !Nu || Xu || void 0 === ku || xu()
        },
        onPointerLeave: Su,
        children: [(0, Vu.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Au && (0, Vu.jsx)(Au, {
            simple: !0
          })
        }), Iu && (0, Vu.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Vu.jsxs)(nu.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Km.e)({
            kind: "pack",
            pack: du
          }),
          "data-store-item": du,
          onClick: uu => {
            (0, Qm.c)(uu) && (uu.preventDefault(), pu())
          },
          children: [(0, Vu.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Vu.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Vu.jsx)("div", {
              className: Qu()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Uu
              }),
              style: {
                backgroundImage: `url(${(0,eQ.t)(du)})`
              }
            }), Xu && void 0 !== ku && (0, Vu.jsx)(rm, {
              character: ku,
              drawn: Uu,
              onDrawn: () => {
                su(!0)
              }
            })]
          }), (0, Vu.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Ru = Cu.displayName) && void 0 !== Ru ? Ru : du
          }), (0, Vu.jsx)(PQ.c, {
            tier: Mu,
            className: "StoreCharacterTier"
          })]
        }), (0, Vu.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Du && (0, Vu.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Vu.jsx)(Jm, {})
        }), "owned" === bu && (0, Vu.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Hu("general:owned"),
          "aria-label": Hu("general:owned"),
          children: (0, Vu.jsx)(Ju.c, {
            name: "check"
          })
        }), (0, Vu.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Vu.jsx)(vQ, {
            state: bu,
            item: du,
            price: (0, lu.f)(du),
            busy: ru,
            highlight: Bu,
            onAct: Tu,
            onNeedRecipient: Wu,
            onLogin: ju
          })
        })]
      })
    }

    function pm(uu) {
      let {
        tiles: Ru,
        busy: yu,
        highlightItem: Ku,
        onOpen: Qu,
        onAct: mu,
        onNeedRecipient: Ju,
        onLogin: Nu
      } = uu;
      const Xu = (0, mm.o)("storeCharacterCardFoil"),
        ru = (0, mm.o)("storeCharacterCardSpotlight"),
        Bu = Xu ? "Foil" : ru ? "Spotlight" : "Showcase",
        [xu] = (0, Eu.useState)(CQ.i),
        [Su, pu] = (0, Eu.useState)(null);
      return (0, Vu.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Ru.map((uu => (0, Vu.jsx)(Sm, {
          tile: uu,
          design: Bu,
          canGoLive: !xu,
          live: Su === uu.pack,
          busy: yu,
          highlight: Ku === uu.pack,
          onLiveStart: () => {
            pu(uu.pack)
          },
          onLiveEnd: () => {
            pu((Ru => Ru === uu.pack ? null : Ru))
          },
          onOpen: () => {
            Qu(uu.pack)
          },
          onAct: () => {
            mu(uu.pack)
          },
          onNeedRecipient: Ju,
          onLogin: () => {
            Nu(uu.pack)
          }
        }, uu.pack)))
      })
    }
    var Tm = yu(9103);

    function Wm(uu) {
      let {
        title: Ru
      } = uu;
      return (0, Vu.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Vu.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Ru
        })
      })
    }

    function jm(uu) {
      let {
        mountAtOnce: Ru,
        children: yu
      } = uu;
      const Ku = (0, Eu.useRef)(null),
        [Qu, mu] = (0, Eu.useState)(Ru),
        Ju = (0, Tm.e)();
      return (0, Eu.useLayoutEffect)((() => {
        const uu = Ku.current;
        uu && uu.getBoundingClientRect().top < uu.parentElement.getBoundingClientRect().bottom && mu(!0)
      }), []), Qu || Ju ? (0, Vu.jsx)(Vu.Fragment, {
        children: yu
      }) : (0, Vu.jsx)("div", {
        ref: Ku
      })
    }

    function Hm(uu) {
      let {
        layout: Ru,
        mountAtOnce: yu,
        bundleGift: Eu,
        superRankTotalDays: Ku,
        busy: Qu,
        highlightItem: Ju,
        onOpen: Nu,
        onAct: Xu,
        onNeedRecipient: ru,
        onLogin: Bu
      } = uu;
      const {
        t: xu
      } = (0, mu.E)(), Su = Ru.packs.filter((uu => void 0 === (0, QQ.e)(uu.pack) && !(0, QQ.k)(uu.pack))), pu = Ru.packs.filter((uu => void 0 !== (0, QQ.e)(uu.pack))), Tu = Ru.packs.filter((uu => (0, QQ.k)(uu.pack)));
      return (0, Vu.jsxs)(Vu.Fragment, {
        children: [(0, Vu.jsx)(Em.b, {
          className: "StoreSuperGems",
          gift: Eu,
          highlightSku: Ju
        }), (0, Vu.jsx)(Wm, {
          title: xu("store:rank")
        }), (0, Vu.jsx)(um, {
          state: Ru.superRank.state,
          urgent: Ru.superRank.urgent,
          daysLeft: Ru.superRankDaysLeft,
          totalDays: Ku,
          recipientHasSuperRank: Ru.recipientHasSuperRank,
          busy: Qu,
          highlight: "superRank" === Ju,
          onOpen: () => {
            Nu("superRank")
          },
          onAct: () => {
            Xu("superRank")
          },
          onNeedRecipient: ru,
          onLogin: () => {
            Bu("superRank")
          }
        }), (0, Vu.jsxs)(jm, {
          mountAtOnce: yu,
          children: [(0, Vu.jsx)(Wm, {
            title: xu("store:bundles")
          }), (0, Vu.jsx)("div", {
            className: "StorePackGrid",
            children: Su.map((uu => (0, Vu.jsx)(ym, {
              pack: uu.pack,
              state: uu.state,
              busy: Qu,
              onOpen: () => {
                Nu(uu.pack)
              },
              onAct: () => {
                Xu(uu.pack)
              },
              onNeedRecipient: ru,
              onLogin: () => {
                Bu(uu.pack)
              }
            }, uu.pack)))
          }), (0, Vu.jsxs)(jm, {
            mountAtOnce: yu,
            children: [(0, Vu.jsx)(Wm, {
              title: xu("store:characters")
            }), (0, Vu.jsx)(pm, {
              tiles: pu,
              busy: Qu,
              highlightItem: Ju,
              onOpen: Nu,
              onAct: Xu,
              onNeedRecipient: ru,
              onLogin: Bu
            }), Tu.length > 0 && (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsx)(Wm, {
                title: xu("store:premiumItems")
              }), (0, Vu.jsx)(pm, {
                tiles: Tu,
                busy: Qu,
                highlightItem: Ju,
                onOpen: Nu,
                onAct: Xu,
                onNeedRecipient: ru,
                onLogin: Bu
              })]
            })]
          })]
        })]
      })
    }

    function dm(uu) {
      let {
        state: Ru,
        mode: yu,
        giftName: Eu,
        busy: Ku,
        highlight: Qu,
        purchaseError: Ju,
        onBack: Nu,
        onChooseRecipient: Xu,
        onAct: ru,
        onLogin: Bu
      } = uu;
      const {
        t: xu
      } = (0, mu.E)(), Su = ou("gift" !== yu);
      return (0, Vu.jsx)(FQ, {
        onBack: Nu,
        recipient: "gift" === yu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [Eu && (0, Vu.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: xu("store:giftFor", {
              name: Eu
            }),
            children: [SQ.d, " ", xu("store:giftFor", {
              name: Eu
            })]
          }), !Eu && (0, Vu.jsxs)("div", {
            ...(0, Tu.U)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Xu,
            children: [SQ.d, " ", xu("store:chooseRecipient")]
          })]
        }),
        cta: (0, Vu.jsx)(vQ, {
          state: Ru,
          item: "superRank",
          price: lu.j.price,
          busy: Ku,
          highlight: Qu,
          onAct: ru,
          onNeedRecipient: Xu,
          onLogin: Bu
        }),
        afterCta: (0, Vu.jsxs)(Vu.Fragment, {
          children: [Su && (0, Vu.jsx)("span", {
            className: "StoreTileNote",
            children: Su
          }), Ju && (0, Vu.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: xu(Ju)
          })]
        })
      })
    }
    var bm = yu(155);
    const Cm = bm.g("kind", [bm.u({
      kind: bm.l("refused"),
      heldTierId: bm.N(),
      until: bm.s()
    }), bm.u({
      kind: bm.l("refund"),
      tierId: bm.N(),
      refundedMs: bm.s(),
      forfeitedMs: bm.s(),
      premiumCurrency: bm.s()
    }), bm.u({
      kind: bm.l("none")
    })]);
    async function km(uu) {
      const Ru = await (0, Iu.postJsonWithMetricsCookiesAndJsonResponse)(`${Gu.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: uu
      }, {
        retries: 1
      });
      return Cm.parse(Ru)
    }
    var em = yu(2816),
      Am = yu(2852);

    function Dm(uu, Ru) {
      const yu = Math.max(1, Math.round(Ru / Lu.g));
      return [1 === yu ? `${uu}OneDay` : uu, {
        days: yu.toLocaleString()
      }]
    }

    function Mm() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, Fu.purchasesAllowed)() ? (0, Vu.jsx)(Im, {}) : null
    }

    function Im() {
      const {
        t: uu
      } = (0, mu.E)(), {
        userContext: Ru
      } = (0, xu.d)(), {
        purchaseUnderWay: yu,
        notice: Ku,
        subscribe: Qu
      } = (0, em.c)(), [Ju, Nu] = (0, Eu.useState)(null), [Xu, ru] = (0, Eu.useState)(0), [Bu, Su] = (0, Eu.useState)(!1), pu = (0, Eu.useRef)(!0), Wu = Ru !== Iu.NULL_USER_CONTEXT, ju = null !== Ju && Ju.loadedFor === Ru ? Ju.offer : null, Hu = null === Ku || void 0 === Ku ? void 0 : Ku.pendingIntentId, du = (0, Eu.useRef)(Hu);

      function bu() {
        ru((uu => uu + 1))
      }
      async function Cu(uu) {
        Su(!1), await Qu(uu), pu.current && bu()
      }
      if ((0, Eu.useEffect)((() => (pu.current = !0, () => {
          pu.current = !1
        })), []), (0, Eu.useEffect)((() => {
          void 0 !== du.current && void 0 === Hu && bu(), du.current = Hu
        }), [Hu]), (0, Eu.useEffect)((() => {
          if (!Wu) return;
          let uu = !1;
          return Su(!1), async function() {
            const {
              offering: uu
            } = await (0, JR.i)().getOfferings("superRankPage"), Ru = null === uu || void 0 === uu ? void 0 : uu.packages.find((uu => null !== uu.price));
            return void 0 === Ru ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Ru,
              preview: await km(Ru.productId)
            }
          }().catch((uu => (console.error("Billing: loading the Super Rank subscription or its preview failed:", uu), {
            kind: "loadFailed"
          }))).then((yu => {
            uu || Nu((uu => "loadFailed" === yu.kind && (null === uu || void 0 === uu ? void 0 : uu.loadedFor) === Ru ? uu : {
              loadedFor: Ru,
              offer: yu
            }))
          })), () => {
            uu = !0
          }
        }), [Ru, Wu, Xu]), null === ju) return null;
      if ("loaded" !== ju.kind) return (0, Vu.jsx)(Am.i, {
        notice: {
          kind: "error",
          key: "unavailable" === ju.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: ku,
        preview: eu
      } = ju;
      if ("refused" === eu.kind) return (0, Vu.jsx)(Am.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(eu.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const Au = (0, Em.f)(ku.price);
      if (Bu && "refund" === eu.kind) {
        const {
          refundedMs: Ru,
          forfeitedMs: Eu,
          premiumCurrency: Ku
        } = eu, Qu = Eu + (0 === Ku ? Ru : 0), [mu, Ju] = Dm("payments:subscribeRefundsGemRank", Ru), [Nu, Xu] = Dm("payments:subscribeForfeitsGemRank", Qu);
        return (0, Vu.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Vu.jsx)("div", {
            children: uu("payments:subscribeEndsGemRank")
          }), Ku > 0 && (0, Vu.jsx)("div", {
            children: uu(mu, {
              ...Ju,
              amount: Ku.toLocaleString()
            })
          }), Qu > 0 && (0, Vu.jsx)("div", {
            children: uu(Nu, Xu)
          }), (0, Vu.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Vu.jsx)(Tu.f, {
              onClick: () => {
                Su(!1)
              },
              children: uu("general:cancel")
            }), (0, Vu.jsx)(Tu.l, {
              onClick: () => {
                Cu(ku)
              },
              loading: yu,
              children: uu("payments:subscribeContinue", {
                price: Au
              })
            })]
          })]
        })
      }
      return (0, Vu.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Vu.jsx)(Am.i, {
          notice: Ku,
          className: "SmallTextBold"
        }), (0, Vu.jsx)(Am.e, {
          className: "SmallTextBold"
        }), (0, Vu.jsx)(Tu.l, {
          onClick: () => {
            "refund" === eu.kind ? Su(!0) : Cu(ku)
          },
          disabled: void 0 !== Hu,
          loading: yu,
          children: uu("payments:subscribeToSuperRank", {
            price: Au
          })
        })]
      })
    }
    const Gm = {
      kind: "board"
    };
    let Um = !1;

    function nm(uu) {
      return "found" === uu.status || "error" === uu.status && "store:giftRecipientLookupFailed" === uu.error ? uu.name : null
    }(0, zu.w)(mQ.prefetchBillingOfferings);
    const sm = (0, Eu.memo)((function(uu) {
      var Ru;
      let {
        show: Ku
      } = uu;
      const {
        t: Ju
      } = (0, mu.E)(), {
        userContext: Nu
      } = (0, xu.d)(), Xu = Nu !== Iu.NULL_USER_CONTEXT, ru = jQ(Nu), [Bu, Su] = (0, pu.d)(), {
        page: Tu,
        urlMode: Wu,
        goTo: ju
      } = (0, HQ.g)(), Hu = function(uu) {
        return "superRank" === uu.kind ? "superRank" : "pack" === uu.kind ? uu.pack : null
      }(Tu), {
        openEverythingMenuName: du,
        gameState: bu
      } = (0, eu.j)(["openEverythingMenuName", "gameState"]), Cu = null !== du;
      ! function(uu, Ru) {
        const [Ku] = (0, Eu.useState)(CQ.i), [Qu, mu] = (0, Eu.useState)(!1);
        Ku && Ru && !Qu && mu(!0);
        const Ju = (0, QE.n)(),
          Nu = Ku && Qu && uu && !Ju;
        (0, Eu.useEffect)((() => {
          if (!Nu) return;
          let uu = null,
            Ru = null,
            Eu = null;
          const Ku = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, JR.i)().purchaseUnderWay,
            Qu = () => {
              var yu;
              null === (yu = Eu) || void 0 === yu || yu(), Eu = null, null !== uu && (clearTimeout(uu), uu = null), null !== Ru && (clearTimeout(Ru), Ru = null)
            },
            mu = () => {
              (0, dQ.m)(!1), (0, dQ.l)(!1), Qu(), uu = setTimeout((() => {
                uu = null, Eu = (0, bQ.c)((() => {
                  Eu = null, Ku() ? mu() : ((0, dQ.m)(!0), Ru = setTimeout((() => {
                    Ru = null, Eu = (0, bQ.c)((() => {
                      Eu = null, Ku() ? mu() : (0, dQ.l)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => yu(4436))).then((uu => {
                    uu.startBackgroundGameSetup()
                  }), (uu => {
                    console.warn("Background game setup: its chunk failed to load", uu)
                  })))
                }))
              }), 2e3)
            };
          for (const yu of kQ) window.addEventListener(yu, mu, {
            capture: !0,
            passive: !0
          });
          return mu(), () => {
            for (const uu of kQ) window.removeEventListener(uu, mu, {
              capture: !0
            });
            Qu(), (0, dQ.m)(!1), (0, dQ.l)(!1)
          }
        }), [Nu])
      }(Ku && Cu, "pack" === Tu.kind);
      const ku = "landingPage" === bu;
      (0, Eu.useEffect)((() => {
        Cu && (0, mQ.prefetchBillingOfferings)()
      }), [Cu]), (0, Eu.useEffect)((() => {
        Cu && !Ku && ku && (0, eQ.v)()
      }), [Cu, Ku, ku]);
      const [Au, Du] = (0, Eu.useState)(0), [Mu, Gu] = (0, Eu.useState)(null), [Uu, nu] = (0, Eu.useState)(null), [su, tu] = (0, Eu.useState)(null), [gu, cu] = (0, Eu.useState)(null), Lu = (0, Eu.useRef)(null), wu = (0, Eu.useRef)(null), Zu = (0, Eu.useRef)(!1), hu = (0, zu.C)(), Pu = (0, Eu.useRef)(0), iu = (0, Eu.useRef)(!1);

      function Yu() {
        Du((uu => uu + 1))
      }(0, Eu.useEffect)((() => {
        if (Ku) {
          if (Um = !0, (0, zu.j)(), hu && hu.seq !== Pu.current) {
            var uu;
            Pu.current = hu.seq, "loginResume" !== hu.source && (0, zu.B)();
            const Ru = (0, zu.c)(hu);
            Wu || ju(Ru), cu(null !== (uu = hu.highlight) && void 0 !== uu ? uu : null), nu(null), "gift" === hu.mode && hu.giftRecipientName ? ru.choose(hu.giftRecipientName, "prefilled") : "current" !== hu.mode && ru.clear(), "gift" !== hu.mode || hu.giftRecipientName || Yu(), (0, au.reportAnalyticsClick)({
              id: "store.open",
              value: hu.source
            })
          } else iu.current || (0, au.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          iu.current = !0
        } else iu.current = !1
      }), [Ku, hu]), (0, Eu.useEffect)((() => {
        if (!gu) return;
        const uu = setTimeout((() => {
          cu(null)
        }), 4e3);
        return () => {
          clearTimeout(uu)
        }
      }), [gu]), (0, Eu.useEffect)((() => {
        const uu = Lu.current;
        var Ru;
        if (Ku && uu) {
          if (Hu) wu.current = Hu, null === (Ru = uu.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Ru || Ru.focus();
          else if (wu.current) {
            var yu;
            null === (yu = uu.querySelector(`[data-store-item="${wu.current}"]`)) || void 0 === yu || yu.focus(), wu.current = null
          }
        } else wu.current = null
      }), [Hu, Ku]), (0, Eu.useEffect)((() => {
        nu(null)
      }), [ru.query]), (0, Eu.useEffect)((() => {
        if (!su) return;
        const uu = setTimeout((() => {
          tu(null)
        }), 8e3);
        return () => {
          clearTimeout(uu)
        }
      }), [su]);
      const ou = Nu.superRankInfo,
        qu = Nu.isLoggedIn() || (0, Fu.guestsMayBuy)(),
        Ou = Nu.getOwnedCosmeticPacks(),
        vu = (0, SQ.l)(ru.query),
        fu = (0, SQ.g)({
          mode: vu,
          loggedIn: Xu ? qu : null,
          superRankInfo: ou,
          now: Date.now(),
          ownedPacks: Ou,
          packs: QQ.r,
          recipient: ru.recipient
        });
      (0, Eu.useEffect)((() => {
        if (!qu || !Ku) return;
        const uu = (0, zu.B)(),
          Ru = uu && (0, SQ.k)(uu, QQ.r);
        uu && Ru && ((0, au.reportAnalyticsClick)({
          id: "store.login_resume",
          value: uu.item
        }), (0, zu.n)(Ru))
      }), [qu, Ku]);
      const uR = (0, SQ.m)({
        superRankDaysLeft: fu.superRankDaysLeft,
        openedThisSession: Um || Ku,
        seenNewItems: (0, zu.h)()
      });
      if ((0, Eu.useEffect)((() => {
          (0, zu.x)(uR)
        }), [uR]), !Ku || !(0, Fu.purchasesAllowed)()) return null;
      const RR = Su > Bu && Bu <= 700,
        yR = !RR && Su <= 420,
        ER = "gift" === vu ? nm(ru.recipient) : null,
        KR = null !== Mu;

      function QR(uu) {
        (0, NQ.e)(uu, "gift" === vu ? ru.query.trim() : null)
      }

      function mR(uu, Ru) {
        (0, au.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Ru?"gift":"self"}:${uu}`
        }), Ru && (ru.recordGift(Ru.name, uu), NR(Ru))
      }

      function NR(uu) {
        ! function(uu) {
          try {
            iR.i.setItem(pQ, (0, SQ.t)(WQ(), uu))
          } catch {}
        }({
          name: uu.name,
          cosmetics: uu.cosmetics
        }), ju(Gm), tu((Ru => {
          var yu;
          return {
            name: uu.name,
            seq: (null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.seq) && void 0 !== yu ? yu : 0) + 1
          }
        }))
      }
      async function XR(uu) {
        var Ru, yu;
        if (Zu.current) return;
        if (!qu) return void QR(uu);
        nu(null), cu(null);
        const Eu = "gift" === vu ? {
          name: nm(ru.recipient),
          cosmetics: ru.recipientCosmetics
        } : null;
        if (Eu && !Eu.name) return void Yu();
        const Ku = "superRank" === uu ? lu.j.id : (0, lu.c)(uu);
        Zu.current = !0;
        const Qu = await (0, xQ.b)(Ku, null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu.name) && void 0 !== Ru ? Ru : null);
        if (Zu.current = !1, !Qu) return;
        Gu(uu);
        const mu = await XQ.e.purchase(Ku, null !== (yu = null === Eu || void 0 === Eu ? void 0 : Eu.name) && void 0 !== yu ? yu : null);
        Gu(null), mu ? nu(mu) : (mR(uu, Eu), Eu || (await (0, VQ.flushClientAnalyticsEvents)(), (0, JQ.refreshWithoutConfirmation)("superRank" === uu ? "/super-rank-welcome" : `/pack-welcome/${uu}`)))
      }
      const VR = Qu()("Store", {
        StoreGift: "gift" === vu,
        StorePortrait: RR,
        StoreCompact: yR
      });
      if ("pack" === Tu.kind) {
        const uu = Tu.pack,
          Ru = fu.packs.find((Ru => Ru.pack === uu));
        return (0, Vu.jsx)("div", {
          ref: Lu,
          className: "CosmeticShopContainer",
          children: (0, Vu.jsx)(BQ.h, {
            pack: uu,
            onBack: () => {
              ju(Gm)
            },
            onPurchased: Ru => {
              mR(uu, Ru ? {
                name: Ru,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === vu && ER && Ru && (0, Vu.jsxs)(Vu.Fragment, {
              children: [(0, Vu.jsx)(vQ, {
                state: Ru.state,
                item: uu,
                price: (rR = uu, "superRank" === rR ? lu.j.price : (0, lu.f)(rR)),
                busy: KR,
                onAct: () => {
                  XR(uu)
                },
                onNeedRecipient: () => {
                  ju(Gm), Yu()
                },
                onLogin: () => {
                  QR(uu)
                },
                highlight: gu === uu
              }), Uu && (0, Vu.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Ju(Uu)
              })]
            }),
            ownedPacks: Ou,
            startAsGift: "gift" === vu,
            initialGiftRecipient: "gift" === vu ? null !== ER && void 0 !== ER ? ER : ru.query.trim() : "",
            highlightCta: gu === uu
          }, uu)
        })
      }
      var rR;
      return "superRank" === Tu.kind ? (0, Vu.jsx)("div", {
        ref: Lu,
        className: Qu()(VR, "StoreDetailView"),
        children: (0, Vu.jsx)(dm, {
          state: fu.superRank.state,
          mode: vu,
          giftName: ER,
          busy: KR,
          highlight: "superRank" === gu,
          purchaseError: Uu,
          onBack: () => {
            ju(Gm)
          },
          onChooseRecipient: () => {
            ju(Gm), Yu()
          },
          onAct: () => {
            XR("superRank")
          },
          onLogin: () => {
            QR("superRank")
          }
        })
      }) : (0, Vu.jsxs)("div", {
        ref: Lu,
        className: VR,
        children: [(0, Vu.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Vu.jsx)(nQ, {
            selfName: Xu ? Nu.getPlayerName() : "",
            giftRecipient: ru,
            suggestionsVersion: null !== (Ru = null === su || void 0 === su ? void 0 : su.seq) && void 0 !== Ru ? Ru : 0,
            pulseSignal: Au,
            disabled: KR || !Xu
          })
        }), su && (0, Vu.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            tu(null)
          },
          children: [(0, Vu.jsx)(rQ.e, {
            showSignal: su.seq
          }), SQ.d, " ", Ju("store:giftSent", {
            name: su.name
          })]
        }, su.seq), !su && Uu && (0, Vu.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Ju(Uu)
        }), (0, Vu.jsx)(Hm, {
          layout: fu,
          mountAtOnce: null !== wu.current,
          bundleGift: "gift" === vu ? {
            recipientName: ER,
            lookingUp: "pending" === ru.recipient.status,
            busy: KR,
            onNeedRecipient: Yu,
            onSent: uu => {
              (0, au.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), NR({
                name: uu,
                cosmetics: ru.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, SQ.o)(ou),
          busy: KR,
          highlightItem: gu,
          onOpen: function(uu) {
            (0, au.reportAnalyticsClick)({
              id: "store.item_open",
              value: uu
            }), ju((0, zu.f)(uu))
          },
          onAct: XR,
          onNeedRecipient: Yu,
          onLogin: QR
        }), "gift" !== vu && (0, Vu.jsx)(Mm, {})]
      })
    }));
    var tm = yu(2533),
      lm = yu(8582),
      gm = yu(2608),
      cm = yu(2441),
      Lm = yu(2497),
      zm = yu(2502),
      Fm = yu(2508),
      wm = yu(2600),
      Zm = yu(2575),
      hm = yu(2258),
      Pm = yu(2295),
      im = yu(2285),
      Ym = yu(1960),
      om = yu(2513),
      qm = yu(2298);

    function Om(uu) {
      let {
        show: Ru
      } = uu;
      return Ru ? (0, Vu.jsx)(am, {}) : null
    }

    function am() {
      const {
        t: uu
      } = (0, mu.E)(), {
        followsLeader: Ru
      } = (0, cm.d)(), {
        loading: yu,
        friends: Ku,
        requests: Nu,
        invites: Xu
      } = (0, Zu.j)(), {
        userContext: ru
      } = (0, xu.d)(), [Bu, Su] = (0, Eu.useState)(qm.j);
      (0, Eu.useEffect)((() => {
        (0, qm.d)()
      }), []);
      const pu = Nu.map((uu => uu.name)),
        {
          state: Wu,
          recentRequesters: ju
        } = (0, Zm.k)(),
        Hu = new Map([...("loaded" === Wu.status ? Wu.recentPlayers : []).map((uu => [uu.preview.name, uu])), ...ju.map((uu => [uu.name, uu]))]),
        du = (0, Eu.useRef)(null),
        [ku, eu] = (0, Eu.useState)(""),
        [Au, Du] = (0, Eu.useState)("Enter"),
        [Mu, Iu] = (0, Eu.useState)(null);

      function Gu() {
        ku && (Du("Loading"), (0, im.g)(ku, "social_menu").then((uu => {
          if (du.current) switch (uu.kind) {
            case "sent":
              Du("Success");
              break;
            case "becameFriends":
              Du("BecameFriends");
              break;
            case "failed":
              Iu(uu.message), Du("Error")
          }
        })))
      }
      return (0, Eu.useEffect)((() => {
        if ("Enter" === Au || "Loading" === Au) return;
        const uu = setTimeout((() => {
          du.current.value = "", eu(""), Du("Enter")
        }), "Success" === Au ? 1e3 : 4e3);
        return () => {
          clearTimeout(uu)
        }
      }), [Au]), (0, Vu.jsx)("div", {
        className: "SocialMenu",
        children: (0, Vu.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Vu.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Vu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Vu.jsx)(Fm.b, {
                label: uu("socialBar:addFriend")
              }), (0, Vu.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Vu.jsxs)("div", {
                  className: Qu()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Au}`]: !0
                  }),
                  children: ["Loading" === Au && (0, Vu.jsx)(Cu.b, {}), "Success" === Au && (0, Vu.jsx)(Ju.c, {
                    name: "check"
                  }), "BecameFriends" === Au && (0, Vu.jsx)(Vu.Fragment, {
                    children: uu("socialBar:nowFriends", {
                      playerName: ku
                    })
                  }), "Error" === Au && Mu && (0, Vu.jsx)(Vu.Fragment, {
                    children: uu(Mu.translationKey, Mu.params)
                  })]
                }), (0, Vu.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Vu.jsx)(bu.b, {
                    className: "PlayerSearchInput",
                    placeholderText: uu("socialBar:enterPlayerName"),
                    domRef: du,
                    onValueChange: uu => {
                      eu((0, su.s)(uu)), du.current.value = (0, su.s)(uu)
                    },
                    onEnter: () => {
                      ku && (0, au.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Gu()
                    }
                  }), (0, Vu.jsxs)(Tu.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Gu()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Vu.jsx)(Ju.c, {
                      name: "user-plus"
                    }), " ", uu("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Vu.jsx)(om.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Xu.length > 0 && (0, Vu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Vu.jsx)(Fm.b, {
                label: uu("socialBar:invites"),
                meta: Xu.length
              }), Xu.map((Ru => (0, Vu.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Vu.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Vu.jsx)(hm.e, {
                    invite: Ru
                  })
                }), (0, Vu.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Vu.jsx)(hm.h, {
                    invite: Ru
                  })
                }), (0, Vu.jsx)(Tu.l, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Pm.c)(Ru)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Ru.destination.kind}`
                  },
                  children: uu("general:join")
                }), (0, Vu.jsx)(qu.i, {
                  tooltipInner: (0, Vu.jsx)(Vu.Fragment, {
                    children: uu("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Vu.jsx)(Tu.f, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Bu || void 0 === Bu ? void 0 : Bu.kind) && Bu.inviteId === Ru.id,
                    onClick: () => {
                      Zu.c.declineInvite(Ru.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Ru.destination.kind}`
                    },
                    children: (0, Vu.jsx)(Ju.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, Ru.id)))]
            }), (0, Vu.jsxs)("div", {
              className: Qu()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !yu && 0 === Nu.length
              }),
              children: [(0, Vu.jsx)(Fm.b, {
                label: (0, Vu.jsxs)(Vu.Fragment, {
                  children: [(0, Vu.jsx)(Ju.c, {
                    name: Ym.f
                  }), " ", uu("socialBar:requests")]
                }),
                meta: (0, Vu.jsxs)(Vu.Fragment, {
                  children: [Nu.length, Nu.length === Ou.n && (0, Vu.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: uu("socialBar:limitReached")
                  })]
                })
              }), yu && (0, Vu.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Vu.jsx)(Cu.b, {})
              }), !yu && 0 === Nu.length && (0, Vu.jsx)("div", {
                className: "SocialMenuEmpty",
                children: uu("socialBar:noFriendRequests")
              }), !yu && Nu.length > 0 && (0, Vu.jsx)("div", {
                className: "PlayerRows",
                children: (0, Vu.jsx)(rK.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Nu],
                  children: Nu.map(((Ru, yu) => {
                    const Eu = Hu.get(Ru.name);
                    return (0, Vu.jsxs)(zm.f, {
                      playerSocialPreview: Ru,
                      zIndex: Nu.length - yu,
                      padDefaultFocus: (0, qm.h)(Bu, Ru.name, yu),
                      status: Eu && (0, Vu.jsx)(wm.e, {
                        gameNameWithVariation: Eu.gameNameWithVariation,
                        isPrivateLobby: Eu.isPrivateLobby
                      }),
                      children: [(0, Vu.jsx)(qu.i, {
                        tooltipInner: (0, Vu.jsx)(Vu.Fragment, {
                          children: uu("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Vu.jsx)(Tu.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Su((0, qm.g)(pu, yu)), (0, im.d)(Ru.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Vu.jsx)(Ju.c, {
                            name: "check"
                          })
                        })
                      }), (0, Vu.jsx)(qu.i, {
                        tooltipInner: (0, Vu.jsx)(Vu.Fragment, {
                          children: uu("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Vu.jsx)(Tu.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Su((0, qm.g)(pu, yu)), (0, im.d)(Ru.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Vu.jsx)(Ju.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Ru.name}_${Ru.isError}`)
                  }))
                })
              })]
            }), (0, Vu.jsx)(wm.h, {})]
          }), (0, Vu.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Vu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Vu.jsx)(Fm.b, {
                label: uu("socialBar:party")
              }), (0, Vu.jsx)(Lm.d, {})]
            }), (0, Vu.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Vu.jsx)(Fm.b, {
                label: (0, Vu.jsxs)(Vu.Fragment, {
                  children: [(0, Vu.jsx)(Ju.c, {
                    name: Ym.e
                  }), " ", uu("socialBar:friends")]
                }),
                meta: (0, Vu.jsxs)(Vu.Fragment, {
                  children: [Ku.length, Ku.length >= (0, Ou.c)(ru.getPlayerRanks()) && (0, Vu.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: uu("socialBar:limitReached")
                  })]
                })
              }), yu && (0, Vu.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Vu.jsx)(Cu.b, {})
              }), !yu && 0 === Ku.length && (0, Vu.jsx)("div", {
                className: "SocialMenuEmpty",
                children: uu("socialBar:noFriends")
              }), !yu && Ku.length > 0 && (0, Vu.jsx)("div", {
                className: "PlayerRows",
                children: (0, Vu.jsx)(rK.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Ku],
                  children: Ku.map(((uu, yu) => (0, Vu.jsx)(zm.f, {
                    playerSocialPreview: uu,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: uu => {
                      Zu.c.removeFriendFromState(uu)
                    },
                    zIndex: Ku.length - yu,
                    children: (0, Vu.jsx)(zm.d, {
                      friend: uu,
                      followsLeader: Ru,
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
    var fm = yu(2423);
    const uJ = uu => {
        let {
          action: Ru,
          padAction: yu
        } = uu;
        const {
          isTouchScreen: Eu
        } = (0, eu.j)(["isTouchScreen"]), Ku = (0, QE.n)();
        return Eu && !Ku ? null : (0, Vu.jsx)(ay.b, {
          className: "EverythingMenuTabKey",
          noaAction: Ru,
          padHidesKey: !0,
          padMenuShortcut: yu
        })
      },
      RJ = (0, Eu.memo)((function() {
        const {
          t: uu
        } = (0, mu.E)(), {
          gameState: Ru,
          openEverythingMenuName: yu,
          initSdkSelectorFinished: Ku,
          crosshairGameView: Ju
        } = (0, eu.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Nu
        } = (0, xu.d)(), Xu = (0, Fu.purchasesAllowed)(), ru = (0, zu.F)(), Bu = (uu, Ru) => (0, Vu.jsx)(uJ, {
          action: uu,
          padAction: Ru
        }), [Su, pu] = (0, Eu.useState)(null), ju = (0, Eu.useRef)(null), Hu = {
          ..."inGame" === Ru ? {} : (0, Tu.U)({
            focusOnClick: !1
          }),
          ...pE.h
        }, du = null !== yu, bu = yu !== XR.s.COSMETIC_SHOP && !Ju;
        async function Cu() {
          await async function() {
            if (!Su) return;
            await Su(), pu(null)
          }(), eu.d.set({
            openEverythingMenuName: null
          })
        }
        const ku = (0, Eu.useMemo)((() => "inGame" === Ru ? {
          text: uu("settingsMenu:exitGame"),
          onClick: () => {
            (0, lm.b)()
          }
        } : (0, Mu.c)() ? {
          text: uu("settingsMenu:exitGame"),
          onClick: () => {
            QR.p.discordActivity().then((uu => {
              uu.exit("User exited the game")
            }))
          }
        } : null), [Ru, uu]);
        const Au = (0, Vu.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            Cu()
          },
          children: (0, Vu.jsx)(Tu.h, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Vu.jsx)(TE.c, {
          showing: du,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: yu === XR.s.SHOP,
          doGameplayStartStopOnShow: "inGame" === Ru,
          children: (0, Vu.jsx)(jE.c, {
            className: "EverythingMenuContainer",
            show: du && !Ju,
            children: (0, Vu.jsx)(WE.e, {
              close: () => {
                Cu()
              },
              togglePointerLock: !1,
              children: (0, Vu.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, RQ.l)(yu) && (0, Vu.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Vu.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [ku && (0, Vu.jsx)(Tu.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        ku.onClick()
                      },
                      children: ku.text
                    }), du && Xu && (0, Vu.jsx)("div", {
                      ...Hu,
                      className: "EverythingMenuWallet",
                      title: uu("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, zu.n)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Vu.jsx)(tm.h, {})
                    })]
                  }), (0, Vu.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Vu.jsxs)("div", {
                      ...Hu,
                      "data-pad-tab": !0,
                      "data-pad-selected": yu === XR.s.SETTINGS ? "true" : void 0,
                      className: Qu()("EverythingMenuTab", {
                        EverythingMenuTabActive: yu === XR.s.SETTINGS
                      }),
                      onClick: () => {
                        eu.d.set({
                          openEverythingMenuName: XR.s.SETTINGS
                        })
                      },
                      children: [uu("general:settings"), Bu("OpenSettings", "pause")]
                    }), (0, Vu.jsxs)("div", {
                      ...Hu,
                      "data-pad-tab": !0,
                      "data-pad-selected": yu === XR.s.CUSTOMISATION ? "true" : void 0,
                      className: Qu()("EverythingMenuTab", {
                        EverythingMenuTabActive: yu === XR.s.CUSTOMISATION
                      }),
                      onClick: () => {
                        eu.d.set({
                          openEverythingMenuName: XR.s.CUSTOMISATION
                        })
                      },
                      children: [uu("general:player"), Bu("OpenCharacterCustomization")]
                    }), Wu.featureFlags.useSocialFeatures && (0, Vu.jsxs)("div", {
                      ...Hu,
                      "data-pad-tab": !0,
                      "data-pad-selected": yu === XR.s.SOCIAL ? "true" : void 0,
                      className: Qu()("EverythingMenuTab", {
                        EverythingMenuTabActive: yu === XR.s.SOCIAL
                      }),
                      ...(0, au.c)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, yu === XR.s.SOCIAL),
                      onClick: () => {
                        eu.d.set({
                          openEverythingMenuName: XR.s.SOCIAL
                        })
                      },
                      children: [uu("socialBar:social"), (0, Vu.jsx)(fm.d, {})]
                    }), Xu && (0, Vu.jsxs)("div", {
                      ...Hu,
                      "data-pad-tab": !0,
                      "data-pad-selected": yu === XR.s.COSMETIC_SHOP ? "true" : void 0,
                      className: Qu()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: yu === XR.s.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        eu.d.set({
                          openEverythingMenuName: XR.s.COSMETIC_SHOP
                        })
                      },
                      children: [(0, Vu.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: uu("store:title")
                      }), "new" === ru && (0, Vu.jsx)(Jm, {}), "dot" === ru && (0, Vu.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Ru && (0, Vu.jsxs)("div", {
                      ...Hu,
                      "data-pad-tab": !0,
                      "data-pad-selected": yu === XR.s.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Qu()("EverythingMenuTab", {
                        EverythingMenuTabActive: yu === XR.s.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        eu.d.set({
                          openEverythingMenuName: XR.s.LOBBY_LEADERBOARD
                        })
                      },
                      children: [uu("general:lobby"), Bu("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Vu.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Au
                  })]
                }), (0, RQ.l)(yu) && Au, (0, Vu.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Ru ? "0.85" : "1"
                  },
                  children: [(0, Vu.jsx)(VE, {
                    show: yu === XR.s.SETTINGS,
                    setBeforeResumeCallback: pu
                  }), (0, Vu.jsx)(SE, {
                    show: yu === XR.s.CUSTOMISATION
                  }), (0, Vu.jsx)(Eu.Suspense, {
                    fallback: null,
                    children: (0, Vu.jsx)(iK, {
                      show: yu === XR.s.SHOP
                    })
                  }), (0, Vu.jsx)(KQ, {
                    show: yu === XR.s.LOBBY_LEADERBOARD
                  }), (0, Vu.jsx)(sm, {
                    show: yu === XR.s.COSMETIC_SHOP
                  }), (0, Vu.jsx)(Om, {
                    show: yu === XR.s.SOCIAL
                  })]
                }), !(0, Wu.isMobileApp)() && (0, HE.c)(Nu.getPlayerRanks()) && (0, Vu.jsx)(jE.c, {
                  ref: ju,
                  className: "EverythingMenuBannerDiv",
                  show: bu,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Vu.jsx)(gm.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: ju
                    },
                    showing: du && bu,
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
  9057: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(343),
      Ku = yu(9064);

    function Qu(uu, Ru, yu) {
      const Qu = Object.entries(Ru).sort(((uu, Ru) => Ru[1] - uu[1])),
        mu = (0, Eu.xb)(uu);
      mu.push(uu ? "\n\n" : "\n");
      for (const [Ku, Su] of Qu) {
        var Ju, Nu, Xu;
        const uu = null !== (Ju = null === yu || void 0 === yu || null === (Nu = yu[Ku]) || void 0 === Nu ? void 0 : Nu.icon) && void 0 !== Ju ? Ju : `${Ku} Enchantment`;
        mu.push({
          icon: uu,
          style: {
            fontSize: "1.5rem"
          }
        }), mu.push({
          str: `${Ku} ${null!==(Xu=(0,Eu.U)(Su))&&void 0!==Xu?Xu:Su}\n`
        })
      }
      mu.push({
        str: "\n"
      });
      for (const [Eu, Su] of Qu) {
        var Vu, ru, Bu, xu;
        const uu = null !== (Vu = null === yu || void 0 === yu || null === (ru = yu[Eu]) || void 0 === ru ? void 0 : ru.icon) && void 0 !== Vu ? Vu : `${Eu} Enchantment`,
          Ru = null !== (Bu = null === yu || void 0 === yu || null === (xu = yu[Eu]) || void 0 === xu ? void 0 : xu.description) && void 0 !== Bu ? Bu : (0, Ku.j)(Eu);
        mu.push({
          icon: uu,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), mu.push({
          str: Ru,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), mu.push({
          str: "\n"
        })
      }
      return mu
    }
  },
  9072: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      e: () => ju,
      h: () => Tu,
      k: () => Nu,
      n: () => Wu,
      p: () => Vu,
      t: () => Bu,
      w: () => pu,
      y: () => ru
    });
    var Eu = yu(330),
      Ku = yu(610),
      Qu = yu(343),
      mu = yu(4042),
      Ju = yu(9057);

    function Nu(uu, Ru) {
      var yu;
      let {
        player: Eu,
        chestOrCreative: Ku
      } = uu;
      var Qu;
      return Ru < Eu.length ? null !== (Qu = Eu[Ru]) && void 0 !== Qu ? Qu : null : null !== (yu = Ku[Ru - Eu.length]) && void 0 !== yu ? yu : null
    }

    function Xu(uu) {
      var Ru;
      return null !== (Ru = uu.amount) && void 0 !== Ru ? Ru : 0
    }

    function Vu(uu) {
      return 0 === uu.button || void 0 === uu.button
    }

    function ru(uu) {
      return !!uu.shiftKey
    }

    function Bu(uu) {
      return "touches" in uu || "touch" === uu.pointerType || "pen" === uu.pointerType
    }
    const xu = new Set,
      Su = 50;

    function pu(uu, Ru) {
      var yu;
      const Eu = null === (yu = uu[Ru]) || void 0 === yu ? void 0 : yu.displayName;
      return (0, Ku.E)(Eu) ? "string" !== typeof Ru ? "" : (!xu.has(Ru) && xu.size < Su && (xu.add(Ru), console.warn(`No item called "${Ru}", so its hover shows the name as given`)), Ru) : Eu
    }

    function Tu(uu, Ru, yu) {
      var Nu, Xu, Vu, ru, Bu, xu, Su, Tu, Wu, ju, Hu, du, bu, Cu;
      const ku = uu.attributes,
        eu = null !== (Nu = null === (Xu = Ru[uu.name]) || void 0 === Xu ? void 0 : Xu.rootName) && void 0 !== Nu ? Nu : uu.name,
        Au = null !== (Vu = null !== (ru = ku.customDisplayName) && void 0 !== ru ? ru : null === (Bu = Ru[uu.name]) || void 0 === Bu ? void 0 : Bu.displayName) && void 0 !== Vu ? Vu : pu(Ru, eu);
      let Du = Au;
      const Mu = null === (xu = ku.customAttributes) || void 0 === xu ? void 0 : xu.enchantmentTier;
      Mu && (Du = (0, Qu.xb)(Au, {
        colour: Qu.tb[Mu]
      }));
      const Iu = null !== (Su = null !== (Tu = null !== (Wu = function(uu, Ru) {
        var yu;
        if (void 0 === uu || null !== (yu = Ru.customAttributes) && void 0 !== yu && yu.author) return uu;
        const Ku = (0, Eu.ic)(uu);
        return Ku.every((uu => "string" === typeof uu)) ? uu : Ku.map((uu => "string" === typeof uu ? uu : {
          icon: uu.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(ku.customDescription, ku)) && void 0 !== Wu ? Wu : null === (ju = Ru[uu.name]) || void 0 === ju ? void 0 : ju.description) && void 0 !== Tu ? Tu : null === (Hu = Ru[eu]) || void 0 === Hu ? void 0 : Hu.description) && void 0 !== Su ? Su : "";
      let Gu = Iu;
      if (null !== (du = ku.customAttributes) && void 0 !== du && du.enchantments) Gu = (0, Ju.d)(Iu, ku.customAttributes.enchantments, ku.customAttributes.enchantmentData);
      else if (yu[eu]) Gu = (0, Qu.xb)(Iu), Gu.push({
        str: "\n"
      }), Gu.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (bu = ku.customAttributes) && void 0 !== bu && bu.mobSettings) {
        var Uu, nu;
        const uu = ku.customAttributes.mobSettings;
        var su, tu;
        if (Gu = [], (0, Ku.E)(ku.customAttributes.health) || (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: ku.customAttributes.health.toString()
          }), (0, Ku.E)(uu.maxHealth) || (Gu.push({
            str: "/"
          }), Gu.push({
            str: uu.maxHealth.toString()
          }))), !(0, Ku.E)(uu.attackDamage) && uu.attackDamage > 0 && (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: uu.attackDamage.toString()
          })), !(0, Ku.E)(uu.secondaryAttackDamage) && uu.secondaryAttackDamage > 0 && (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: uu.secondaryAttackDamage.toString()
          })), (0, Ku.E)(uu.baseRunningSpeed) || (Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: " "
          }), Gu.push({
            str: uu.baseRunningSpeed.toFixed(2)
          })), "Saddled" === uu.metaInfo) Gu.push({
          str: "\n"
        }), Gu.push({
          str: {
            translationKey: "general:has"
          }
        }), Gu.push({
          str: " "
        }), Gu.push({
          icon: null !== (su = null === (tu = uu.tameInfo) || void 0 === tu ? void 0 : tu.saddleItemName) && void 0 !== su ? su : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Gu.push({
            str: "\n"
          }), Gu.push({
            str: "\n"
          }), uu.petInfo && null !== (Uu = uu.tameInfo) && void 0 !== Uu && Uu.supportsFriendship) {
          const Ru = mu.b.getIconsFromFriendshipPoints(uu.petInfo.friendshipPoints);
          for (const uu of Ru) Gu.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          Gu.push({
            str: "\n"
          });
          const yu = mu.b.getMobHungerLevel(uu.petInfo.lastFedAt);
          for (const uu of mu.b.hungerLevelIcons[yu]) Gu.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          Gu.push({
            str: " "
          }), Gu.push({
            str: mu.b.hungerLevelTranslations[yu],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (uu.tameInfo && null !== (nu = uu.tameInfo) && void 0 !== nu && nu.supportsFriendship) {
          var lu, gu;
          let Ru = null !== (lu = uu.tameInfo.likedFoods) && void 0 !== lu ? lu : [];
          Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Superliked]
            }
          }), Gu.push({
            str: " "
          }), null !== (gu = uu.petInfo) && void 0 !== gu && gu.superlikedFoodKnown ? (Gu.push({
            icon: uu.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Ru = Ru.filter((Ru => Ru !== uu.petInfo.superlikedFood))) : Gu.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Liked]
            }
          }), Gu.push({
            str: " "
          });
          for (const uu of Ru) Gu.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Neutral]
            }
          }), Gu.push({
            str: " "
          });
          for (const yu of null !== (cu = uu.tameInfo.neutralFoods) && void 0 !== cu ? cu : []) {
            var cu;
            Gu.push({
              icon: yu,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Gu.push({
            str: "\n"
          }), Gu.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mu.b.feedTextColours[mu.b.MobFoodType.Disliked]
            }
          }), Gu.push({
            str: " "
          });
          for (const yu of null !== (Lu = uu.tameInfo.dislikedFoods) && void 0 !== Lu ? Lu : []) {
            var Lu;
            Gu.push({
              icon: yu,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Gu.length > 0 ? (Gu.shift(), Gu.unshift(...(0, Qu.xb)(Iu))) : Gu = (0, Qu.xb)(Iu)
      }
      return {
        name: Du,
        desc: Gu,
        fontStyle: null !== (Cu = ku.customAttributes) && void 0 !== Cu && Cu.author ? "italic" : "normal"
      }
    }

    function Wu(uu, Ru, yu, Eu) {
      const Ku = Nu(uu, yu),
        Qu = Nu(uu, Eu);
      if (!Ku) return !1;
      const mu = Ru[Ku.name].armourReduction,
        Ju = Ru[Qu.name].armourReduction;
      if (Ju === mu) {
        var Xu, Vu, ru, Bu;
        const uu = null !== (Xu = null === (Vu = Ku.attributes.customAttributes) || void 0 === Vu ? void 0 : Vu.enchantmentTier) && void 0 !== Xu ? Xu : "Tier 0",
          Ru = null !== (ru = null === (Bu = Qu.attributes.customAttributes) || void 0 === Bu ? void 0 : Bu.enchantmentTier) && void 0 !== ru ? ru : "Tier 0";
        return parseInt(uu.replace("Tier ", "")) >= parseInt(Ru.replace("Tier ", ""))
      }
      return mu > Ju
    }

    function ju(uu) {
      let Ru;
      if ("number" === typeof uu) {
        const yu = document.querySelector(`[data-inven-idx="${uu}"]`);
        if (!yu) return null;
        Ru = yu.getBoundingClientRect()
      } else Ru = uu.getBoundingClientRect();
      return {
        x: Ru.left + Ru.width / 2,
        y: Ru.top + Ru.height / 2
      }
    }
  },
  8955: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => xu,
      e: () => Su,
      h: () => pu
    });
    var Eu = yu(1408),
      Ku = yu(64),
      Qu = yu(1269),
      mu = yu(4301),
      Ju = yu(2266),
      Nu = yu(1170),
      Xu = yu(106),
      Vu = yu(1899),
      ru = yu(1300),
      Bu = yu(1079);

    function xu(uu) {
      let {
        show: Ru,
        onClose: yu
      } = uu;
      const {
        requestedGameNameWithVariation: Eu,
        lobbyName: Ku,
        shownLobbyName: Qu
      } = (0, Vu.i)("connectedGame"), Nu = (0, Ju.d)(Eu, Ku, !1);
      return Xu.featureFlags.canUseInviteLinks && (0, Bu.jsx)(mu.e, {
        show: Ru,
        close: yu,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Bu.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Bu.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Bu.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Bu.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Nu ? (0, Bu.jsx)(ru.b, {}) : Nu, (0, Bu.jsx)("br", {}), "Lobby Name: ", Qu, (0, Bu.jsx)("br", {}), (0, Bu.jsx)("br", {}), (0, Bu.jsx)("br", {}), (0, Bu.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Bu.jsx)(Su, {})]
        })
      })
    }

    function Su() {
      var uu;
      const {
        t: Ru
      } = (0, Nu.E)(), yu = null !== (uu = pu(Xu.featureFlags.canUseInviteLinks)) && void 0 !== uu ? uu : "Loading Link...", [Qu, mu] = (0, Ku.useState)(0), [Ju, Vu] = (0, Ku.useReducer)((uu => uu + 1), 0);
      return (0, Ku.useEffect)((() => {
        const uu = setTimeout((() => {
          Vu()
        }), 1100);
        return () => {
          clearTimeout(uu)
        }
      }), [Qu]), Xu.featureFlags.canUseInviteLinks && (0, Bu.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Bu.jsx)("div", {
          className: "InviteLinkInner",
          children: yu
        }), (0, Bu.jsx)(Eu.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(yu).catch((uu => {
              console.error("Failed to copy invite link:", uu)
            })), mu(Date.now())
          },
          disabled: Date.now() - Qu < 1e3,
          children: Date.now() - Qu < 1e3 ? Ru("general:copied") : Ru("general:copy")
        })]
      })
    }

    function pu(uu) {
      const [Ru, yu] = (0, Ku.useState)(null);
      return (0, Ku.useEffect)((() => {
        if (!uu) return;
        let Ru = !0;
        return (0, Qu.K)().then((uu => {
          Ru && yu(uu)
        })).catch((uu => {
          console.error("Failed to get invite link:", uu)
        })), () => {
          Ru = !1
        }
      }), [uu]), Ru
    }
  },
  9045: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1899),
      Ju = yu(1079);

    function Nu(uu) {
      const Ru = Math.floor(uu / 3600),
        yu = Math.floor(uu % 3600 / 60),
        Eu = Math.floor(uu % 60),
        Ku = `${yu.toString().padStart(2,"0")}:${Eu.toString().padStart(2,"0")}`;
      return Ru > 0 ? `${Ru}:${Ku}` : Ku
    }
    const Xu = (0, Eu.memo)((function(uu) {
      let {
        className: Ru
      } = uu;
      const {
        recording: yu,
        seconds: Eu
      } = (0, mu.i)("replayRecorder");
      return yu ? (0, Ju.jsxs)("div", {
        className: Qu()("RecordingIndicator", Ru),
        children: [(0, Ju.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Ju.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Ju.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Nu(Eu)
        })]
      }) : null
    }))
  },
  4659: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Tu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(4425),
      mu = yu(1170),
      Ju = yu(1043),
      Nu = yu(1408),
      Xu = yu(1447),
      Vu = yu(1311),
      ru = yu(2393),
      Bu = yu(1079);
    const xu = {
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

    function Su(uu) {
      let {
        platform: Ru
      } = uu;
      const yu = "youtube" === Ru;
      return (0, Bu.jsxs)("span", {
        className: Ku()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: yu
        }),
        children: [yu && (0, Bu.jsx)(ru.c, {
          variant: "white"
        }), !yu && (0, Bu.jsx)(Ju.c, {
          name: xu[Ru].icon,
          kit: "brands"
        })]
      })
    }

    function pu(uu) {
      let {
        platform: Ru,
        link: yu,
        editable: Eu,
        userContext: Ku,
        onLinksUpdated: ru
      } = uu;
      const {
        t: pu
      } = (0, mu.E)(), Tu = xu[Ru];
      if (!yu && !Eu) return null;

      function Wu() {
        var uu;
        if (!Ku || !ru) return;
        Vu.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Tu.name
            }
          },
          prefixText: Qu.y[Ru],
          placeholderText: "playBloxd",
          initialValue: null !== (uu = null === yu || void 0 === yu ? void 0 : yu.handle) && void 0 !== uu ? uu : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: yu ? "general:remove" : void 0
        }).getResult().then((async uu => {
          if ("notificationTornDown" !== uu && null !== uu) try {
            "submit" === uu.type ? await Xu.e.setSocialLink(Ku, Ru, uu.value) : await Xu.e.clearSocialLink(Ku, Ru), ru()
          } catch (yu) {
            console.error("Failed to update social link", yu), Vu.NotificationProvider.showAlertPopup({
              title: yu.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (yu) {
        const uu = `@${yu.handle}`;
        return (0, Bu.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Tu.color
          },
          href: yu.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Bu.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Bu.jsx)(Su, {
              platform: Ru
            }), (0, Bu.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Bu.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: uu
              })
            })]
          }), Eu && (0, Bu.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Nu.U)({
              stopPropagation: !0
            }),
            onClick: uu => {
              uu.stopPropagation(), uu.preventDefault(), Wu()
            },
            children: (0, Bu.jsx)(Ju.c, {
              name: "pen-to-square"
            })
          }), !Eu && (0, Bu.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Bu.jsx)(Ju.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Bu.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Tu.color
        },
        ...(0, Nu.U)(),
        onClick: () => {
          Wu()
        },
        children: [(0, Bu.jsx)(Su, {
          platform: Ru
        }), (0, Bu.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Bu.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Tu.name
          }), (0, Bu.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: pu("homePage:profileSocialLinkAdd")
          })]
        }), (0, Bu.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Bu.jsx)(Ju.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Tu(uu) {
      let {
        socialLinks: Ru,
        editable: yu = !1,
        userContext: Eu,
        onLinksUpdated: Ku
      } = uu;
      if (!yu && 0 === Ru.length) return null;
      const mu = new Map(Ru.map((uu => [uu.platform, uu]))),
        Ju = yu ? Qu.w : Ru.map((uu => uu.platform));
      return (0, Bu.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Bu.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ju.map((uu => (0, Bu.jsx)(pu, {
            platform: uu,
            link: mu.get(uu),
            editable: yu,
            userContext: Eu,
            onLinksUpdated: Ku
          }, uu)))
        })
      })
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  9103: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(3394);

    function Qu() {
      const [uu, Ru] = (0, Eu.useState)(!1);
      return (0, Eu.useLayoutEffect)((() => {
        let uu = !0;
        return (0, Ku.b)().then((() => {
          uu && Ru(!0)
        })), () => {
          uu = !1
        }
      }), []), uu
    }
  },
  6336: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(47);

    function Qu(uu, Ru) {
      var yu;
      const [Qu, mu] = (0, Eu.useState)(null !== (yu = Ku.i.getItem(uu)) && void 0 !== yu ? yu : Ru);
      return [Qu, Ru => {
        Ku.i.setItem(uu, Ru), mu(Ru)
      }]
    }
  },
  9023: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Bu,
      e: () => ru
    });
    yu(9025);
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(8996);

    function Ju(uu, Ru) {
      return Math.max(1, Math.round(uu * Ru))
    }

    function Nu(uu, Ru, yu) {
      const Eu = 2 * yu >= Ru - 1;
      return {
        x: uu,
        y: uu,
        size: Ru,
        border: Math.min(yu, Math.floor(Ru / 2)),
        filled: Eu
      }
    }
    var Xu = yu(1079);
    const Vu = 1.4;

    function ru(uu, Ru) {
      return uu && Ru ? `scale(${Vu})` : "scale(1)"
    }

    function Bu(uu) {
      return "classic" === uu.settings.style ? (0, Xu.jsx)(pu, {
        ...uu
      }) : (0, Xu.jsx)(Cu, {
        ...uu
      })
    }
    const xu = .125;

    function Su(uu, Ru) {
      const yu = {};
      if (uu.color !== mu.h.color && (yu.color = (0, mu.m)(uu.color)), uu.opacity !== mu.h.opacity && (yu.opacity = uu.opacity / 100), uu.outline !== mu.h.outline || uu.outlineColor !== mu.h.outlineColor) {
        const Ru = uu.outline,
          Eu = (0, mu.m)(uu.outlineColor);
        yu.textShadow = Ru > 0 ? `-${Ru}px 0 ${Eu}, 0 ${Ru}px ${Eu}, ${Ru}px 0 ${Eu}, 0 -${Ru}px ${Eu}` : "none"
      }
      if (uu.size !== mu.h.size) {
        const Eu = uu.size / 100;
        yu.fontSize = Ru ? `calc(max(1.3rem, 18px) * ${Eu})` : `calc(1.3rem * ${Eu})`, yu.marginTop = `-${xu}em`, yu.transformOrigin = `50% calc(50% + ${xu}em)`
      }
      return yu
    }

    function pu(uu) {
      let {
        settings: Ru,
        touch: yu,
        inPreview: Eu,
        inEditor: Qu,
        pressed: mu = !1,
        pressRef: Ju
      } = uu;
      return (0, Xu.jsx)("div", {
        className: Ku()("Crosshair", {
          Touch: yu,
          CrosshairInPreview: Eu,
          CrosshairInEditor: Qu || Eu
        }),
        ref: Ju,
        style: {
          transform: ru(mu, Ru.growOnClick),
          ...Su(Ru, yu)
        },
        children: "+"
      })
    }

    function Tu(uu, Ru) {
      return uu / Ru + "px"
    }

    function Wu(uu, Ru, yu, Eu) {
      return {
        ...du(uu, Ru, yu),
        width: Tu(uu.w, yu),
        height: Tu(uu.h, yu),
        background: Eu
      }
    }

    function ju(uu, Ru, yu) {
      return {
        left: Tu(uu.x, Ru),
        top: Tu(uu.y, Ru),
        width: Tu(uu.size, Ru),
        height: Tu(uu.size, Ru),
        borderWidth: Tu(uu.border, Ru),
        borderColor: yu,
        background: uu.filled ? yu : void 0
      }
    }
    const Hu = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function du(uu, Ru, yu) {
      const [Eu, Ku] = uu.arm ? Hu[uu.arm] : [0, 0], Qu = Math.round(Ru * yu);
      return {
        left: Tu(uu.x + Eu * Qu, yu),
        top: Tu(uu.y + Ku * Qu, yu)
      }
    }

    function bu(uu) {
      return uu.arm ? {
        "data-arm": uu.arm,
        "data-x": uu.x,
        "data-y": uu.y
      } : {}
    }

    function Cu(uu) {
      let {
        settings: Ru,
        inPreview: yu,
        inEditor: Eu,
        pressed: ru = !1,
        spread: Bu,
        spreadRef: xu
      } = uu;
      const Su = (0, Qu.useRef)(null),
        {
          box: pu,
          dpr: Tu
        } = function(uu) {
          const [Ru, yu] = (0, Qu.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Qu.useLayoutEffect)((() => {
            const Ru = uu.current;
            if (!Ru) return;
            const Eu = () => {
              const uu = Ru.getBoundingClientRect(),
                Eu = window.devicePixelRatio || 1;
              yu((Ru => Ru.dpr === Eu && Ru.box.left === uu.left && Ru.box.top === uu.top && Ru.box.width === uu.width && Ru.box.height === uu.height ? Ru : {
                box: {
                  left: uu.left,
                  top: uu.top,
                  width: uu.width,
                  height: uu.height
                },
                dpr: Eu
              }))
            };
            Eu();
            const Ku = new ResizeObserver(Eu);
            return Ku.observe(Ru), window.addEventListener("resize", Eu), window.addEventListener("scroll", Eu, !0), () => {
              Ku.disconnect(), window.removeEventListener("resize", Eu), window.removeEventListener("scroll", Eu, !0)
            }
          }), [uu]), Ru
        }(Su),
        Hu = (0, Qu.useRef)(Tu);
      Hu.current = Tu;
      const Cu = function(uu, Ru) {
          const yu = Ju(uu.lineThickness, Ru),
            Eu = Ju(uu.lineLength, Ru),
            Ku = Math.round(uu.gap * Ru),
            Qu = Ju(uu.dotSize, Ru),
            mu = uu.outline > 0 ? Ju(uu.outline, Ru) : 0,
            Xu = Ju(uu.circleThickness, Ru),
            Vu = uu.circle ? Math.round(uu.circleRadius * Ru * 2 + Xu) : 0,
            ru = function(uu, Ru, yu, Eu) {
              return uu.lines ? Ru : uu.dot ? yu : uu.circle && Eu % 2 === 0 ? 2 : 1
            }(uu, yu, Qu, Vu),
            Bu = [];
          if (uu.lines && (Bu.push({
              x: ru + Ku,
              y: 0,
              w: Eu,
              h: yu,
              arm: "right"
            }), Bu.push({
              x: -Ku - Eu,
              y: 0,
              w: Eu,
              h: yu,
              arm: "left"
            }), Bu.push({
              x: 0,
              y: ru + Ku,
              w: yu,
              h: Eu,
              arm: "down"
            }), uu.tStyle || Bu.push({
              x: 0,
              y: -Ku - Eu,
              w: yu,
              h: Eu,
              arm: "up"
            }), 0 === Ku && Bu.push({
              x: 0,
              y: 0,
              w: yu,
              h: yu
            })), uu.dot) {
            const uu = Math.floor((ru - Qu) / 2);
            Bu.push({
              x: uu,
              y: uu,
              w: Qu,
              h: Qu
            })
          }
          const xu = Bu.map((uu => ({
            ...uu,
            x: uu.x - mu,
            y: uu.y - mu,
            w: uu.w + 2 * mu,
            h: uu.h + 2 * mu
          })));
          let Su = null,
            pu = null;
          if (uu.circle) {
            const uu = Vu + ((Vu - ru) % 2 === 0 ? 0 : 1),
              Ru = (ru - uu) / 2;
            Su = Nu(Ru, uu, Xu), mu > 0 && (pu = Nu(Ru - mu, uu + 2 * mu, Xu + 2 * mu))
          }
          return {
            cell: ru,
            fills: Bu,
            outlines: mu > 0 ? xu : [],
            ring: Su,
            ringOutline: pu
          }
        }(ru && Ru.growOnClick ? function(uu, Ru) {
          return {
            ...uu,
            outline: uu.outline * Ru,
            lineLength: uu.lineLength * Ru,
            lineThickness: uu.lineThickness * Ru,
            gap: uu.gap * Ru,
            dotSize: uu.dotSize * Ru,
            circleRadius: uu.circleRadius * Ru,
            circleThickness: uu.circleThickness * Ru
          }
        }(Ru, Vu) : Ru, Tu),
        ku = function(uu, Ru, yu) {
          const Eu = Math.round((uu.left + uu.width / 2) * yu - Ru / 2),
            Ku = Math.round((uu.top + uu.height / 2) * yu - Ru / 2);
          return {
            x: Eu / yu - uu.left,
            y: Ku / yu - uu.top
          }
        }(pu, Cu.cell, Tu),
        eu = (0, mu.m)(Ru.color),
        Au = (0, mu.m)(Ru.outlineColor),
        Du = (0, Qu.useRef)(0);
      (0, Qu.useLayoutEffect)((() => {
        if (xu) return xu.current = uu => {
          var Ru;
          Du.current = uu, null === (Ru = Su.current) || void 0 === Ru || Ru.querySelectorAll("[data-arm]").forEach((Ru => {
            Object.assign(Ru.style, du(function(uu) {
              return {
                x: Number(uu.dataset.x),
                y: Number(uu.dataset.y),
                arm: uu.dataset.arm
              }
            }(Ru), uu, Hu.current))
          }))
        }, () => {
          xu.current = null
        }
      }), [xu]);
      const Mu = null !== Bu && void 0 !== Bu ? Bu : Du.current;
      return (0, Xu.jsx)("div", {
        ref: Su,
        className: Ku()("CrosshairShapes", {
          CrosshairInPreview: yu,
          CrosshairInEditor: Eu || yu,
          CrosshairSpreads: void 0 !== xu
        }),
        children: (0, Xu.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: ku.x,
            top: ku.y,
            opacity: Ru.opacity / 100
          },
          children: (0, Xu.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Cu.ringOutline && (0, Xu.jsx)("div", {
              className: "CrosshairRing",
              style: ju(Cu.ringOutline, Tu, Au)
            }), Cu.outlines.map(((uu, Ru) => (0, Xu.jsx)("div", {
              className: "CrosshairPart",
              ...bu(uu),
              style: Wu(uu, Mu, Tu, Au)
            }, `o${Ru}`))), Cu.ring && (0, Xu.jsx)("div", {
              className: "CrosshairRing",
              style: ju(Cu.ring, Tu, eu)
            }), Cu.fills.map(((uu, Ru) => (0, Xu.jsx)("div", {
              className: "CrosshairPart",
              ...bu(uu),
              style: Wu(uu, Mu, Tu, eu)
            }, `f${Ru}`)))]
          })
        })
      })
    }
  },
  9030: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      e: () => Tu,
      i: () => pu
    });
    var Eu = yu(8996);
    const Ku = "XH1-",
      Qu = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      mu = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ju = ["color", "outlineColor"],
      Nu = 1 + 3 * Ju.length + mu.length + 1,
      Xu = Math.ceil(8 * Nu / Math.log2(62)),
      Vu = Ku.length + Xu;

    function ru(uu) {
      let Ru = 90;
      for (const yu of uu) Ru = 31 * Ru + yu & 255;
      return Ru
    }
    const Bu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      xu = BigInt(Bu.length);

    function Su(uu, Ru) {
      let yu = 0n;
      for (const Ku of uu) {
        const uu = Bu.indexOf(Ku);
        if (uu < 0) return null;
        yu = yu * xu + BigInt(uu)
      }
      if (yu >> BigInt(8 * Ru) !== 0n) return null;
      const Eu = [];
      for (let Ku = 0; Ku < Ru; Ku++) Eu.unshift(Number(0xffn & yu)), yu >>= 8n;
      return Eu
    }

    function pu(uu) {
      let Ru = "shapes" === uu.style ? 1 : 0;
      Qu.forEach(((yu, Eu) => {
        uu[yu] && (Ru |= 1 << Eu + 1)
      }));
      const yu = [Ru];
      for (const Ku of Ju) {
        const Ru = (0, Eu.i)(Ku, uu[Ku]);
        yu.push(Ru >> 16 & 255, Ru >> 8 & 255, 255 & Ru)
      }
      for (const Ku of mu) {
        const {
          min: Ru,
          step: Qu
        } = Eu.d[Ku];
        yu.push(Math.round(((0, Eu.i)(Ku, uu[Ku]) - Ru) / Qu))
      }
      return yu.push(ru(yu)), Ku + function(uu, Ru) {
        let yu = 0n;
        for (const Ku of uu) yu = yu << 8n | BigInt(Ku);
        let Eu = "";
        for (let Ku = 0; Ku < Ru; Ku++) Eu = Bu[Number(yu % xu)] + Eu, yu /= xu;
        return Eu
      }(yu, Xu)
    }

    function Tu(uu) {
      for (const Ru of uu.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Xu}})`, "gi"))) {
        const uu = Wu(Su(Ru[1], Nu));
        if (uu) return uu
      }
      return null
    }

    function Wu(uu) {
      if (!uu || uu.length !== Nu || ru(uu.slice(0, -1)) !== uu[uu.length - 1]) return null;
      const Ru = uu[0],
        yu = {
          ...Eu.h,
          style: 1 & Ru ? "shapes" : "classic"
        };
      Qu.forEach(((uu, Eu) => {
        yu[uu] = 0 !== (Ru & 1 << Eu + 1)
      }));
      let Ku = 1;
      for (const Eu of Ju) yu[Eu] = uu[Ku] << 16 | uu[Ku + 1] << 8 | uu[Ku + 2], Ku += 3;
      for (const Qu of mu) {
        const {
          min: Ru,
          step: mu
        } = Eu.d[Qu];
        yu[Qu] = (0, Eu.i)(Qu, Ru + uu[Ku] * mu), Ku++
      }
      return yu
    }
  },
  8996: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      h: () => Ku,
      i: () => Qu,
      m: () => Xu,
      q: () => Nu,
      r: () => Vu,
      s: () => Ju,
      t: () => mu
    });
    const Eu = {
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
      Ku = Object.freeze({
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

    function Qu(uu, Ru) {
      var yu;
      const {
        min: Qu,
        max: mu,
        step: Ju
      } = Eu[uu];
      if (!Number.isFinite(Ru)) return Ku[uu];
      const Nu = (null !== (yu = String(Ju).split(".")[1]) && void 0 !== yu ? yu : "").length,
        Xu = Number((Math.round(Ru / Ju) * Ju).toFixed(Nu));
      return Math.min(mu, Math.max(Qu, Xu))
    }

    function mu(uu, Ru, yu) {
      const Eu = "number" === typeof yu ? Qu(Ru, yu) : yu;
      return {
        ...uu,
        [Ru]: Eu
      }
    }

    function Ju(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Ku).every((Eu => yu.includes(Eu) || uu[Eu] === Ru[Eu]))
    }

    function Nu(uu) {
      return Ju(uu, Ku)
    }

    function Xu(uu) {
      return `#${uu.toString(16).padStart(6,"0")}`
    }

    function Vu(uu) {
      const Ru = /^#?([0-9a-f]{6})$/i.exec(uu.trim());
      return Ru ? parseInt(Ru[1], 16) : null
    }
  },
  9039: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru,
      c: () => Bu
    });
    var Eu = yu(64),
      Ku = yu(47),
      Qu = yu(9030),
      mu = yu(8996);
    const Ju = "crosshairCode";
    let Nu = null;
    const Xu = new Set;

    function Vu() {
      if (null === Nu) {
        var uu;
        const Ru = Ku.i.getItem(Ju);
        Nu = null !== (uu = "string" === typeof Ru ? (0, Qu.e)(Ru) : null) && void 0 !== uu ? uu : mu.h
      }
      return Nu
    }

    function ru(uu) {
      Nu = uu, (0, mu.q)(uu) ? Ku.i.removeItem(Ju) : Ku.i.setItem(Ju, (0, Qu.i)(uu));
      for (const Ru of Xu) Ru()
    }

    function Bu() {
      const [uu, Ru] = (0, Eu.useState)(Vu);
      return (0, Eu.useEffect)((() => {
        const uu = () => {
          Ru(Vu())
        };
        return uu(), yu = uu, Xu.add(yu), () => {
          Xu.delete(yu)
        };
        var yu
      }), []), uu
    }
  },
  8637: (uu, Ru, yu) => {
    function Eu(uu) {
      return {
        x: (uu.left + uu.right) / 2,
        y: (uu.top + uu.bottom) / 2
      }
    }

    function Ku(uu) {
      return 0 === uu.length ? null : uu.reduce(((uu, Ru) => ({
        left: Math.min(uu.left, Ru.left),
        top: Math.min(uu.top, Ru.top),
        right: Math.max(uu.right, Ru.right),
        bottom: Math.max(uu.bottom, Ru.bottom)
      })))
    }

    function Qu(uu, Ru) {
      const yu = Math.max(0, (Ru - (uu.right - uu.left)) / 2),
        Eu = Math.max(0, (Ru - (uu.bottom - uu.top)) / 2);
      return {
        left: uu.left - yu,
        top: uu.top - Eu,
        right: uu.right + yu,
        bottom: uu.bottom + Eu
      }
    }

    function mu(uu, Ru) {
      return Ru.x >= uu.left && Ru.x <= uu.right && Ru.y >= uu.top && Ru.y <= uu.bottom
    }

    function Ju(uu, Ru, yu) {
      let Ku = null,
        Ju = 1 / 0;
      for (const {
          id: Eu,
          box: Qu
        }
        of Ru) {
        const Ru = (Qu.right - Qu.left) * (Qu.bottom - Qu.top);
        mu(Qu, uu) && Ru < Ju && (Ju = Ru, Ku = Eu)
      }
      if (null !== Ku) return Ku;
      let Nu = 1 / 0;
      for (const {
          id: Xu,
          box: Vu
        }
        of Ru) {
        if (!mu(Qu(Vu, yu), uu)) continue;
        const Ru = Eu(Vu),
          Ju = Math.hypot(uu.x - Ru.x, uu.y - Ru.y);
        Ju < Nu && (Nu = Ju, Ku = Xu)
      }
      return Ku
    }

    function Nu(uu, Ru, yu) {
      return {
        left: yu.left,
        top: yu.top,
        right: uu - yu.right,
        bottom: Ru - yu.bottom
      }
    }

    function Xu(uu, Ru, yu, Eu) {
      const Ku = (uu, Ru, yu) => Math.max(Math.min(Ru, 0), Math.min(Math.max(yu, 0), uu));
      return {
        x: Ku(Ru, Eu.left - uu.left, Eu.right - uu.right),
        y: Ku(yu, Eu.top - uu.top, Eu.bottom - uu.bottom)
      }
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      const Qu = uu.dx * Eu + Ru,
        mu = uu.dy * Ku + yu,
        Ju = uu => Math.max(-1, Math.min(1, uu));
      return {
        dx: Ju(Qu / Eu),
        dy: Ju(mu / Ku)
      }
    }

    function ru(uu, Ru, yu, Eu) {
      return Ru <= 0 || yu <= 0 ? 1 : Math.max(.05, Math.min(1, uu / Ru, Eu / yu))
    }

    function Bu(uu, Ru, yu) {
      return Math.min(uu.right, Ru.right) - Math.max(uu.left, Ru.left) > yu && Math.min(uu.bottom, Ru.bottom) - Math.max(uu.top, Ru.top) > yu
    }

    function xu(uu, Ru) {
      const yu = (uu, Ru, yu, Eu) => Ru - uu > Eu - yu ? yu - uu > Ru - Eu ? Eu - Ru : yu - uu : uu < yu ? yu - uu : Ru > Eu ? Eu - Ru : 0;
      return {
        x: yu(uu.left, uu.right, Ru.left, Ru.right),
        y: yu(uu.top, uu.bottom, Ru.top, Ru.bottom)
      }
    }

    function Su(uu, Ru) {
      let {
        avoid: yu = null,
        bounds: Eu = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Ku = 0, Qu = 1 / 0;
      return uu.forEach(((uu, mu) => {
        const Ju = Ru.filter((Ru => Bu(uu, Ru, 0))).length,
          Nu = null !== Eu && (uu.left < Eu.left || uu.top < Eu.top || uu.right > Eu.right || uu.bottom > Eu.bottom),
          Xu = Ju + (yu && Bu(uu, yu, 0) ? 1e3 : 0) + (Nu ? 1e6 : 0);
        Xu < Qu && (Ku = mu, Qu = Xu)
      })), Ku
    }
    yu.d(Ru, {
      A: () => Nu,
      B: () => xu,
      F: () => Ku,
      b: () => Eu,
      e: () => mu,
      f: () => Bu,
      h: () => Xu,
      l: () => Qu,
      p: () => Su,
      t: () => Vu,
      w: () => Ju,
      z: () => ru
    })
  },
  8991: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      f: () => Ku
    });
    var Eu = yu(27);

    function Ku(uu, Ru) {
      return uu && !Ru
    }

    function Qu() {
      return Ku(Eu.d.get("isTouchScreen"), Eu.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8949: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    const Eu = new Set(["chunkBorders"])
  },
  8946: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ALL_DEV_TOOLS: () => mu,
      coreDevTools: () => Xu,
      devTools: () => Nu
    });
    var Eu = yu(624),
      Ku = yu(1257),
      Qu = yu(8949);
    const mu = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ju() {
      const {
        noaDevTools: uu
      } = await yu.e(230).then((() => yu(40636)));
      return uu
    }
    const Nu = new class {
        constructor() {
          this.loadHost = Ju, this.tools = mu
        }
        setHost(uu) {
          this.tools = null === uu ? mu : uu.tools, this.loadHost = null === uu ? Ju : async () => uu
        }
        supports(uu) {
          return this.tools.has(uu)
        }
        async downloadScene(uu, Ru) {
          const yu = await this.loadHost();
          await yu.downloadScene(uu, Ru)
        }
        async setAmbientLightIntensity(uu) {
          const Ru = await this.loadHost();
          await Ru.setAmbientLightIntensity(uu)
        }
      },
      Xu = {
        tools: Qu.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Eu.q && Nu.setHost(Xu), (0, Ku.t)((() => {
      Nu.setHost(Xu)
    }))
  },
  9100: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      c: () => Ku,
      e: () => Vu
    });
    var Eu = yu(1517);

    function Ku(uu) {
      var Ru;
      return {
        ...mu.store,
        yaw: mu.store.yaw + (null !== (Ru = Eu.b[uu].previewYaw) && void 0 !== Ru ? Ru : 0)
      }
    }
    const Qu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mu = {
        player: Qu,
        store: {
          ...Qu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ju(uu, Ru) {
      uu instanceof Promise ? uu.then(Ru).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Ru(uu)
    }
    class Nu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Ru;
        this.view = uu, null === (Ru = this.opened) || void 0 === Ru || Ru.show(uu)
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class Xu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Ru) {
        var yu;
        null === (yu = this.opened) || void 0 === yu || yu.setCosmetic(uu, Ru)
      }
      playEmote(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.playEmote(uu)
      }
      setOrbit(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Ru;
        await this.ready, await (null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Vu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new Nu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new Nu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new Nu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Ru) {
        return new Xu(this.current().openCharacter(uu, Ru))
      }
    }
  },
  9098: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.b,
      f: () => Eu.c,
      g: () => Eu.e
    });
    var Eu = yu(9100);
    class Ku {
      constructor(uu) {
        this.load = uu, this.loaded = null, this.loading = null
      }
      run(uu) {
        return null !== this.loaded ? uu(this.loaded) : (this.loading ??= this.load().then((uu => (this.loaded = uu, uu)), (uu => {
          throw this.loading = null, uu
        })), this.loading.then(uu))
      }
    }
    class Qu {
      constructor() {
        this.mobScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(153)]).then((() => yu(40647))))), this.characterScene = new Ku((() => Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(244), yu.e(94), yu.e(245), yu.e(72), yu.e(71), yu.e(242), yu.e(70), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(218), yu.e(264), yu.e(222), yu.e(236), yu.e(247), yu.e(250), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(152)]).then((() => yu(40755)))))
      }
      openMob(uu) {
        return this.mobScene.run((Ru => Ru.openMobPreview(uu)))
      }
      openPet(uu) {
        return this.mobScene.run((Ru => Ru.openPetPreview(uu)))
      }
      openMobLineup(uu) {
        return this.mobScene.run((Ru => Ru.openMobLineupPreview(uu)))
      }
      openCharacter(uu, Ru) {
        return this.characterScene.run((yu => yu.openCharacterPreview(uu, Ru)))
      }
    }
    Eu.e.setDefaultHost((() => new Qu))
  },
  6436: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(47);
    const Ku = "shaderPack";
    async function Qu() {
      var uu;
      let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await Eu.f.getItem(Ku, Ru)) && void 0 !== uu ? uu : null
    }
  },
  8965: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return uu && !Ru
    }
    yu.d(Ru, {
      e: () => Eu
    })
  },
  8984: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(1056);

    function Ku() {
      var uu, Ru;
      return null !== (uu = null === (Ru = screen.orientation) || void 0 === Ru ? void 0 : Ru.type) && void 0 !== uu ? uu : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Qu = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Ku() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Ku(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Eu.jp)(new Error("Game view size held for 60 s"))
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
        let Ru = !1;
        return () => {
          if (Ru && this.isHeld()) return null;
          const yu = uu();
          return Ru ||= null !== yu, yu
        }
      }
      onRelease(uu) {
        return this.resizers.add(uu), () => {
          this.resizers.delete(uu)
        }
      }
    }
  },
  8631: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      d: () => Nu
    });
    var Eu = yu(27),
      Ku = yu(1280),
      Qu = yu(106);
    const mu = {
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

    function Ju() {
      return (0, Qu.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Nu = new class {
      constructor(uu) {
        this.deps = uu, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(uu, Ru) {
        var yu;
        if (!this.deps.enabled()) return;
        const Eu = mu[uu],
          Ku = null !== Ru && void 0 !== Ru ? Ru : Eu.pattern;
        if (null === Ku) return void console.warn("No vibration pattern for", uu);
        const Qu = this.deps.now();
        Qu - this.lastAnyAt < 40 && Eu.priority < this.playingPriority || Qu - (null !== (yu = this.lastAt.get(uu)) && void 0 !== yu ? yu : -1 / 0) < Eu.minGapMs || Qu < this.playingUntil && Eu.priority < this.playingPriority || (this.lastAt.set(uu, Qu), this.lastAnyAt = Qu, this.playingUntil = Qu + Ku.reduce(((uu, Ru) => uu + Ru), 0), this.playingPriority = Eu.priority, this.deps.vibrate(Ku))
      }
    }({
      vibrate: uu => {
        navigator.vibrate([...uu])
      },
      now: () => performance.now(),
      enabled: () => Ju() && Eu.d.get("isTouchScreen") && Eu.d.get("clientEscMenuOptions").vibration && !(0, Ku.e)()
    })
  },
  8960: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => xu,
      d: () => Bu
    });
    var Eu = yu(27),
      Ku = yu(1626),
      Qu = yu(47),
      mu = yu(1311),
      Ju = yu(3475),
      Nu = yu(1422),
      Xu = yu(1354);
    const Vu = 2592e5,
      ru = "notificationOptInLastPromptedAt";
    async function Bu() {
      var uu;
      const Ru = await xu();
      if (null === Ru) return;
      const yu = null !== (uu = Qu.i.getItem(ru)) && void 0 !== uu ? uu : 0;
      if (Date.now() - yu < Vu) return;
      if ((0, Xu.g)()) return;
      const Eu = await mu.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Ku.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Eu && (Qu.i.setItem(ru, Date.now()), (0, Nu.reportAnalyticsClick)({
        id: !0 === Eu ? "push.allow" : "push.deny",
        value: Ku.d.supports("notifications") ? "app" : "browser"
      }), !0 === Eu && Ru().catch((uu => {
        console.error("Failed to ask for push notifications:", uu)
      })))
    }
    async function xu() {
      return await Ku.d.ready, Ku.d.supports("notifications") ? Eu.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Ku.d.request("notifications.requestPermission", {}).then((uu => {
          let {
            canAsk: Ru
          } = uu;
          Eu.d.set({
            mobilePushNotificationsCanAsk: Ru
          })
        }), (uu => {
          console.error("The app couldn't ask for push notifications:", uu)
        }))
      }: null: await Ju.b.canAsk() ? () => Ju.b.requestPermission() : null
    }
  },
  8971: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => Nu
    });
    var Eu = yu(27);
    const Ku = 24,
      Qu = "farNametags",
      mu = 1e5;

    function Ju() {
      var uu;
      return null === (uu = Eu.d.get("showDistantNametags")) || void 0 === uu || uu
    }

    function Nu() {
      var uu;
      return null !== (uu = function() {
        const uu = new URLSearchParams(window.location.search).get(Qu),
          Ru = null === uu || "" === uu ? NaN : Number(uu);
        return Number.isFinite(Ru) && Ru >= 0 ? Math.min(Ru, mu) : null
      }()) && void 0 !== uu ? uu : Ju() ? 0 : Ku
    }
  },
  9087: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => mu
    });
    const Eu = [{
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

    function Ku(uu) {
      let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof uu) {
        if (!Number.isFinite(uu)) return "0";
        if (Math.abs(uu) < 100) {
          const Ru = uu < 0 ? "-" : "",
            yu = Math.abs(uu);
          return yu >= 10 ? `${Ru}${yu.toFixed(1).replace(/\.0$/,"")}` : `${Ru}${yu.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Ru = BigInt(Math.floor(uu))
      } else Ru = uu;
      const Ku = Ru < 0n ? -Ru : Ru,
        Qu = Ru < 0n ? "-" : "",
        mu = Ku.toString();
      if (mu.length <= yu) return `${Qu}${mu}`;
      const Ju = 3 * Math.floor((mu.length - 1) / 3);
      if (Ju < 3) return `${Qu}${mu}`;
      if (Ju > 3 * Eu.length) {
        const uu = mu[0],
          Ru = mu.slice(1, 3).replace(/0+$/, "");
        return `${Qu}${Ru?`${uu}.${Ru}`:uu}e${mu.length-1}`
      }
      const {
        threshold: Nu,
        suffix: Xu
      } = Eu[Eu.length - Ju / 3], Vu = Ku / Nu, ru = Number(1000n * (Ku % Nu) / Nu), Bu = Number(Vu) + ru / 1e3;
      let xu;
      return xu = Bu >= 100 ? Math.floor(Bu).toString() : Bu >= 10 ? Bu.toFixed(1).replace(/\.0$/, "") : Bu.toFixed(2).replace(/\.?0+$/, ""), `${Qu}${xu}${Xu}`
    }
    const Qu = Eu.map((uu => {
      let {
        threshold: Ru,
        suffix: yu
      } = uu;
      return {
        threshold: Number(Ru),
        suffix: yu
      }
    })).filter((uu => {
      let {
        threshold: Ru
      } = uu;
      return Number.isFinite(Ru)
    }));

    function mu(uu) {
      const Ru = Math.abs(uu),
        yu = uu < 0 ? "-" : "";
      for (const {
          threshold: Eu,
          suffix: Ku
        }
        of Qu)
        if (Ru >= Eu) {
          const uu = Ru / Eu;
          if (uu >= 1e3) return `${yu}${Ru.toExponential(2).replace("e+","e")}`;
          let Qu;
          return Qu = uu >= 100 ? Math.floor(uu).toString() : uu >= 10 ? uu.toFixed(1).replace(/\.0$/, "") : uu.toFixed(2).replace(/\.?0+$/, ""), `${yu}${Qu}${Ku}`
        } return `${yu}${Ru}`
    }
  },
  9064: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      f: () => Bu,
      i: () => ru,
      j: () => mu,
      m: () => Xu,
      n: () => Nu
    });
    var Eu = yu(343);
    const Ku = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Qu = {
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

    function mu(uu) {
      var Ru;
      return null !== (Ru = Qu[uu]) && void 0 !== Ru ? Ru : {
        translationKey: ""
      }
    }
    const Ju = {
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

    function Nu(uu) {
      return Ku.includes(uu)
    }

    function Xu(uu) {
      var Ru;
      return !0 === (null === uu || void 0 === uu || null === (Ru = uu.customAttributes) || void 0 === Ru ? void 0 : Ru.cannotEnchant)
    }

    function Vu(uu, Ru) {
      const {
        max: yu
      } = Ju[uu].at(-1);
      return Ru <= yu
    }

    function ru(uu) {
      const Ru = Math.sin(uu / 80),
        yu = uu => {
          if (uu <= 0) return 0;
          if (uu > 1) return 1;
          let Ru = 0;
          const yu = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Eu = 0; Eu < yu.length; Eu++) {
            Ru += (Eu % 2 === 0 ? 1 : -1) * yu[Eu] * Math.pow(uu, 2 + Eu) / (2 + Eu)
          }
          return 72 * Ru
        },
        Eu = .3 - .78 * Ru,
        Ku = .5 - .78 * Ru,
        Qu = .6 - .7 * Ru,
        mu = .8 - .6 * Ru;
      let Ju = yu(Eu),
        Nu = yu(Ku) - Ju,
        Xu = yu(Qu) - Nu - Ju,
        Vu = yu(mu) - Xu - Nu - Ju;
      Eu < .041 && (Nu /= 1 - Ju, Xu /= 1 - Ju, Vu /= 1 - Ju, Ju = 0), Ku < .041 && (Ju /= 1 - Nu, Xu /= 1 - Nu, Vu /= 1 - Nu, Nu = 0), Qu < .041 && (Ju /= 1 - Xu, Nu /= 1 - Xu, Vu /= 1 - Xu, Xu = 0), mu < .041 && (Ju /= 1 - Vu, Nu /= 1 - Vu, Xu /= 1 - Vu, Vu = 0);
      return {
        commonProb: Ju,
        uncommonProb: Nu,
        rareProb: Xu,
        epicProb: Vu,
        legendaryProb: 1 - (Vu + Xu + Nu + Ju)
      }
    }

    function Bu(uu, Ru) {
      const {
        min: yu,
        max: Ku
      } = Ju[uu][Ru], Qu = Eu.c.sampleUniformIntDistribution(yu, Ku, "includeMax");
      return {
        ...ru(Qu),
        level: Qu
      }
    }
  },
  8502: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return !uu.hidden && (Ru || !uu.isRewardedAd)
    }

    function Ku(uu) {
      return "object" === typeof uu ? uu.option : uu
    }

    function Qu(uu, Ru) {
      var yu;
      if ("dropdown" === (null === (yu = uu.userInput) || void 0 === yu ? void 0 : yu.type) && "object" === typeof uu.userInput.dropdownOptions[0]) {
        for (const yu of uu.userInput.dropdownOptions)
          if (Ku(yu) === Ru) return "object" === typeof yu ? yu.cost : uu.cost;
        console.error("Didn't find matching option for dropdown item. Item:", uu, "input:", Ru)
      }
      return uu.cost
    }

    function mu(uu, Ru, yu) {
      var Eu;
      const Ku = null !== (Eu = yu.excludedPlayers) && void 0 !== Eu ? Eu : [Ru];
      return uu.filter((uu => !Ku.includes(uu)))
    }
    yu.d(Ru, {
      e: () => Qu,
      h: () => Ku,
      i: () => mu,
      l: () => Eu
    })
  },
  9025: () => {},
  8998: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9006: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9014: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9018: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);