export const id = 98;
export const ids = [98, 186];
export const modules = {
  8973: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      EverythingMenu: () => uk
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1207),
      kQ = wQ(1079),
      vQ = wQ(2028),
      mQ = wQ(1451),
      uQ = wQ(1130),
      HQ = wQ(1107);

    function bQ(QQ) {
      let {
        items: FQ,
        link: wQ,
        onClick: LQ,
        selectedItemId: qQ,
        className: bQ,
        padStartsOnTab: YQ = !0
      } = QQ;
      const {
        t: xQ
      } = (0, DQ.y)(), AQ = (0, uQ.i)(), tQ = [];
      for (const oQ of FQ) {
        var eQ;
        const QQ = tQ[tQ.length - 1];
        var MQ;
        if (QQ && QQ.title === (null !== (eQ = oQ.section) && void 0 !== eQ ? eQ : null)) QQ.items.push(oQ);
        else tQ.push({
          title: null !== (MQ = oQ.section) && void 0 !== MQ ? MQ : null,
          items: [oQ]
        })
      }
      return (0, HQ.jsxs)("div", {
        className: oQ()("MenuSideBarBody", bQ),
        "data-pad-tabs": "2",
        children: [tQ.map(((QQ, FQ) => {
          var wQ;
          return (0, HQ.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [QQ.title && (0, HQ.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: xQ(QQ.title)
            }), QQ.items.map((QQ => {
              var FQ;
              const wQ = !!QQ.iconElement || !!QQ.faIcon;
              return (0, HQ.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": qQ === QQ.id ? "true" : void 0,
                "data-pad-default-focus": YQ && qQ === QQ.id || void 0,
                className: oQ()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: qQ === QQ.id
                }),
                onClick: () => {
                  LQ(QQ.id)
                },
                children: [wQ && (0, HQ.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (FQ = QQ.iconElement) && void 0 !== FQ ? FQ : (0, HQ.jsx)(kQ.c, {
                    name: QQ.faIcon
                  })
                }), (!AQ || !wQ) && (0, HQ.jsx)("div", {
                  children: xQ(QQ.title)
                }), QQ.redDot && (0, HQ.jsx)(vQ.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, QQ.id)
            }))]
          }, null !== (wQ = QQ.title) && void 0 !== wQ ? wQ : FQ)
        })), wQ && (0, HQ.jsxs)("div", {
          ...(0, mQ.S)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: wQ.onClick,
          children: [(0, HQ.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, HQ.jsx)(kQ.c, {
              name: wQ.faIcon
            })
          }), (0, HQ.jsx)("div", {
            children: xQ(wQ.title)
          }), (0, HQ.jsx)(kQ.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var YQ = wQ(2910),
      xQ = wQ(1140),
      AQ = wQ(2345),
      tQ = wQ(3002),
      eQ = wQ(96),
      MQ = wQ(1897),
      GQ = wQ(2175),
      pQ = wQ(2184),
      cQ = wQ(1682),
      CQ = wQ(1348),
      SQ = wQ(4837),
      iQ = wQ(17),
      WQ = wQ(8978);

    function RQ(QQ) {
      let {
        setApplySettingsCallback: FQ
      } = QQ;
      const {
        clientEscMenuOptions: wQ
      } = (0, iQ.l)(["clientEscMenuOptions"]), [qQ, oQ] = (0, LQ.useState)(!1), [DQ, kQ] = (0, LQ.useState)(!1), [vQ, uQ] = (0, LQ.useState)(6400), [bQ, YQ] = (0, LQ.useState)(3600), [xQ, AQ] = (0, LQ.useState)(!1), [tQ, eQ] = (0, LQ.useState)(!1);

      function MQ(QQ) {
        const FQ = "screenshot" === QQ ? kQ : oQ;
        FQ(!0);
        const wQ = xQ ? "normals" : tQ ? "depth" : null;
        WQ.devTools.downloadScene(QQ, {
          width: vQ,
          height: bQ,
          colouring: wQ
        }).catch((QQ => {
          console.error("Couldn't download the scene", QQ)
        })).finally((() => {
          FQ(!1)
        }))
      }
      return (0, HQ.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, HQ.jsx)(SQ.e, {
          label: "Disable Ambient Occlusion",
          checked: wQ.disableAmbientOcclusion,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              disableAmbientOcclusion: QQ
            }), FQ((() => SQ.h))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), WQ.devTools.supports("ambientLight") && (0, HQ.jsx)(SQ.g, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: wQ.ambientLightIntensity,
          onChange: QQ => {
            WQ.devTools.setAmbientLightIntensity(QQ).then((() => {
              iQ.c.setClientEscMenuOptions({
                ambientLightIntensity: QQ
              })
            })).catch((QQ => {
              console.error("Couldn't set the ambient light", QQ)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), WQ.devTools.supports("weaponRaycasts") && (0, HQ.jsx)(SQ.e, {
          label: "Show Weapon Raycasts",
          checked: wQ.showWeaponRaycasts,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              showWeaponRaycasts: QQ
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), WQ.devTools.supports("sceneDownload") && (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, HQ.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, HQ.jsx)(SQ.e, {
              label: "Apply normal-based coloring",
              checked: xQ,
              onClick: QQ => {
                AQ(QQ), QQ && eQ(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, HQ.jsx)(SQ.e, {
              label: "Apply depth-based coloring",
              checked: tQ,
              onClick: QQ => {
                eQ(QQ), QQ && AQ(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, HQ.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, HQ.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, HQ.jsx)(cQ.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (QQ, FQ) => {
                  const wQ = parseInt(QQ) || 6400;
                  uQ(wQ)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: vQ.toString()
              }), (0, HQ.jsx)("span", {
                children: "X"
              }), (0, HQ.jsx)(cQ.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (QQ, FQ) => {
                  const wQ = parseInt(QQ) || 3600;
                  YQ(wQ)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: bQ.toString()
              })]
            }), (0, HQ.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, HQ.jsxs)(mQ.f, {
                onClick: () => {
                  MQ("screenshot")
                },
                disabled: DQ,
                children: [DQ && (0, HQ.jsx)(CQ.c, {}), "Download Screenshot"]
              }), (0, HQ.jsxs)(mQ.f, {
                onClick: () => {
                  MQ("glb")
                },
                disabled: qQ,
                children: [qQ && (0, HQ.jsx)(CQ.c, {}), "Download GLB"]
              })]
            })]
          }), (0, HQ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var OQ = wQ(134),
      sQ = wQ(1147),
      rQ = wQ(1213),
      IQ = wQ(2913),
      UQ = wQ(1503),
      NQ = wQ(1282),
      TQ = wQ(1246),
      KQ = wQ(2974),
      zQ = wQ(2001),
      lQ = wQ(1489),
      jQ = wQ(317),
      aQ = wQ(2188),
      XQ = wQ(2197),
      fQ = wQ(2598),
      VQ = wQ(1645),
      hQ = wQ(2955),
      JQ = wQ(2931),
      EQ = wQ(2978),
      nQ = wQ(217);

    function gQ(QQ) {
      const {
        t: FQ,
        selectedLanguage: wQ
      } = (0, DQ.y)(), {
        userContext: qQ
      } = (0, xQ.e)(), {
        superRankInfo: oQ
      } = qQ, kQ = QQ && ((0, jQ.Bc)(oQ) || qQ.ranksMayChange) && (0, XQ.purchasesAllowed)(), {
        accountId: vQ,
        data: mQ
      } = (0, fQ.h)(hQ.c, kQ);
      if ((0, LQ.useEffect)((() => {
          if (kQ) return hQ.c.watchAccount(), VQ.e.addRefetchListener("billing", (QQ => {
            "reconnected" === QQ ? hQ.c.refreshAfterReconnect() : hQ.c.refresh()
          }))
        }), [kQ]), !kQ || !(0, jQ.Bc)(oQ) || null === mQ || vQ !== qQ.whamm) return null;
      const uQ = function(QQ, FQ, wQ) {
        const LQ = EQ.h[(0, EQ.c)(EQ.h, FQ)],
          qQ = void 0 === LQ ? void 0 : (0, nQ.b)(QQ.entitlements, LQ.entitlementId);
        return void 0 === qQ || null === qQ.expiresAt || (0, JQ.d)(qQ) <= wQ ? null : qQ.willRenew && null === qQ.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(qQ.expiresAt, wQ)
        } : {
          renews: !1,
          at: (0, JQ.d)(qQ)
        }
      }(mQ, oQ.tier, Date.now());
      if (null === uQ) return null;
      const HQ = uQ.renews ? "store:renewsOn" : "store:endsOn";
      return FQ(HQ, {
        date: new Date(uQ.at).toLocaleDateString((0, DQ.k)(wQ.code, HQ), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var PQ = wQ(1367),
      ZQ = wQ(1225),
      yQ = wQ(4721),
      BQ = wQ(1471),
      dQ = wQ(3535),
      QF = wQ(2166);

    function FF(QQ) {
      let {
        showing: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, DQ.y)(), {
        data: LQ,
        failed: qQ
      } = (0, fQ.h)(dQ.f, FQ);
      return 0 === (null === LQ || void 0 === LQ ? void 0 : LQ.length) || null === LQ && !qQ ? null : (0, HQ.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, HQ.jsx)("div", {
          className: "AccountSettingsLabel",
          children: wQ("paymentHistory:title")
        }), null === LQ && qQ && (0, HQ.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: wQ("paymentHistory:loadFailed")
        }), null !== LQ && (0, HQ.jsx)("ul", {
          className: "PaymentHistoryList",
          children: LQ.map((QQ => (0, HQ.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, HQ.jsx)(QF.c, {
              entry: QQ
            }), (0, HQ.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, HQ.jsx)("div", {
                children: (0, QF.e)(wQ, QQ)
              }), (0, HQ.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(QQ.at).toLocaleDateString(), "number" === typeof QQ.orderId && ` \xb7 ${wQ("paymentHistory:order",{orderId:QQ.orderId})}`]
              })]
            })]
          }, (0, dQ.d)(QQ))))
        })]
      })
    }
    var wF = wQ(1863),
      LF = wQ(1257),
      qF = wQ(1362),
      oF = wQ(1326),
      DF = wQ(1772),
      kF = wQ(2926);
    async function vF() {
      try {
        return function(QQ) {
          const FQ = new Map;
          for (const {
              store: wQ,
              status: LQ,
              autoRenewStatus: qQ,
              managementUrl: oQ
            }
            of Object.values(QQ.subscriptions)) !(0, JQ.e)(wQ) || (0, JQ.g)(LQ) || "willNotRenew" === qQ || FQ.has(wQ) || FQ.set(wQ, null !== oQ && void 0 !== oQ ? oQ : JQ.j[wQ]);
          return Array.from(FQ, (QQ => {
            let [FQ, wQ] = QQ;
            return {
              store: FQ,
              managementUrl: wQ
            }
          }))
        }(await (0, DF.l)((0, kF.e)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (QQ) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", QQ), null
      }
    }
    var mF = wQ(307),
      uF = wQ(2424);
    const HF = {
      appStore: {
        name: "App Store",
        ...mF.Ub.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...mF.Ub.googlePlay
      },
      discord: {
        name: "Discord",
        ...mF.Ub.discord
      }
    };

    function bF(QQ) {
      let {
        warning: FQ,
        subscriptions: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, DQ.y)();
      return null !== wQ && 0 === wQ.length ? (0, HQ.jsx)(HQ.Fragment, {
        children: LQ(FQ)
      }) : (0, HQ.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [LQ(FQ), null === wQ && (0, HQ.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: LQ("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== wQ && (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: LQ("auth:deleteAccountStoreSubscriptions")
          }), (0, HQ.jsx)(uF.d, {
            className: "DeleteAccountSubtitleLinks",
            links: wQ.map((QQ => {
              let {
                store: FQ,
                managementUrl: wQ
              } = QQ;
              return {
                ...HF[FQ],
                url: wQ
              }
            }))
          })]
        })]
      })
    }

    function YF(QQ) {
      let {
        showing: FQ
      } = QQ;
      const {
        userContext: wQ,
        isUserContextUpdating: qQ
      } = (0, xQ.e)(), {
        t: oQ
      } = (0, DQ.y)(), [kQ, vQ] = (0, LQ.useState)(!1), [uQ, bQ] = (0, LQ.useState)(null), YQ = (0, LQ.useRef)(FQ);
      (0, LQ.useEffect)((() => (YQ.current = FQ, () => {
        YQ.current = !1
      })), [FQ]);
      const AQ = qQ || kQ;
      async function tQ() {
        const QQ = function(QQ) {
            if ((0, OQ.d)()) return "auth:discordActivityDeleteAccountLossWarning";
            return QQ ? "auth:deleteAccountLossWarning" : "auth:deleteGuestAccountWarning"
          }(wQ.isLoggedIn()),
          FQ = (0, wF.b)(wQ.availableUserContextTypes) ? await vF() : [];
        if (!YQ.current) return LF.d.ok();
        if (!0 !== await qF.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, NQ.e)(wQ.getPlayerName(), !eQ.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, HQ.jsx)(bF, {
              warning: QQ,
              subscriptions: FQ
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return LF.d.ok();
        const LQ = await (0, sQ.postJsonWithMetricsCookiesAndJsonResponse)(`${rQ.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: iQ.c.get("gameState")
        }, {
          retries: 3
        }, wQ.getMetricsCookies());
        if (LQ.error) return LF.d.error(LQ.error);
        if ((0, OQ.d)()) {
          (await oF.k.discordActivity()).exit("User deleted their account")
        }
        return (0, sQ.forgetStoredGuestAccount)(wQ.whamm), (0, sQ.forceGlobalSignOut)(!0), LF.d.ok()
      }
      return (0, HQ.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, HQ.jsxs)(mQ.F, {
          onClick: async function() {
            if (!kQ) {
              vQ(!0);
              try {
                const QQ = await tQ(),
                  FQ = QQ.isError() ? QQ.asError().message : null;
                bQ(FQ)
              } catch (QQ) {
                console.error("Failed to delete account:", QQ), bQ(oQ("auth:genericDeleteAccountError"))
              }
              vQ(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: AQ,
          children: [AQ && (0, HQ.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, HQ.jsx)(CQ.c, {})
          }), oQ("auth:deleteAccount")]
        }), uQ && (0, HQ.jsx)("div", {
          className: "DeleteAccountError",
          children: uQ
        })]
      })
    }
    var xF = wQ(3462),
      AF = wQ(3479),
      tF = wQ(3470);

    function eF(QQ) {
      let {
        showing: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, DQ.y)(), {
        data: LQ,
        failed: qQ
      } = (0, fQ.h)(xF.c, FQ), oQ = null === LQ ? null : (0, xF.d)(LQ);
      return (0, HQ.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, HQ.jsx)("div", {
          className: "AccountSettingsLabel",
          children: wQ("settingsMenu:blockedAndIgnoredPlayers")
        }), null === oQ && !qQ && (0, HQ.jsx)(CQ.c, {}), null === oQ && qQ && (0, HQ.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [wQ("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, HQ.jsx)(mQ.f, {
            className: "SmallTextLight",
            onClick: () => {
              xF.c.refresh()
            },
            children: wQ("general:tryAgain")
          })]
        }), 0 === (null === oQ || void 0 === oQ ? void 0 : oQ.length) && (0, HQ.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: wQ("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== oQ && oQ.length > 0 && (0, HQ.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: oQ.map((QQ => {
            let {
              name: FQ,
              exclusion: LQ
            } = QQ;
            const qQ = tF.e[LQ];
            return (0, HQ.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, HQ.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: FQ
              }), (0, HQ.jsx)(mQ.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, AF.f)(qQ, FQ, {
                    chatMessage: null
                  })
                },
                children: wQ(tF.f[qQ].text)
              })]
            }, FQ)
          }))
        })]
      })
    }
    const MF = (0, LQ.memo)((function(QQ) {
      var FQ;
      let {
        showing: wQ,
        inGame: qQ
      } = QQ;
      const {
        t: vQ,
        selectedLanguage: uQ
      } = (0, DQ.y)(), {
        hideSocialLocationFrom: bQ
      } = (0, iQ.l)(["hideSocialLocationFrom"]), AQ = (0, YQ.b)(), {
        userContext: tQ,
        isUserContextUpdating: MQ
      } = (0, xQ.e)(), [GQ, pQ] = (0, LQ.useState)(null !== (FQ = tQ.getPlayerName()) && void 0 !== FQ ? FQ : ""), [WQ, RQ] = (0, LQ.useState)(null), {
        purchasing: fQ,
        outcome: VQ,
        purchase: hQ
      } = (0, IQ.d)("/super-rank-welcome"), JQ = (0, jQ.kc)((0, DQ.k)(uQ.code, "general:timeLeft"), tQ.superRankInfo), EQ = gQ(wQ), nQ = JQ ? vQ("general:timeLeft", {
        time: JQ
      }) : EQ, [dQ, QF] = (0, LQ.useState)(!1), [wF, LF] = (0, LQ.useState)(!1), qF = (0, LQ.useRef)(null), oF = (0, LQ.useRef)(null), DF = (0, zQ.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), kF = null === DF, vF = null !== DF && void 0 !== DF ? DF : [], mF = tQ !== sQ.NULL_USER_CONTEXT && !tQ.isLoggedIn(), uF = mF && 0 !== (null === DF || void 0 === DF ? void 0 : DF.length), [HF, bF] = (0, LQ.useState)([]), [xF, AF] = (0, LQ.useState)(!1), tF = tQ.playerHasRank("youtuber"), MF = (0, LQ.useCallback)((() => lQ.b.getPlayerProfile(tQ, {
        lowerCaseName: tQ.getPlayerName().toLowerCase()
      }).then((QQ => {
        bF(QQ.socialLinks)
      })).catch((QQ => {
        console.error("Failed to refresh social links", QQ)
      }))), [tQ]);

      function pF(QQ) {
        QQ !== GQ && ((0, NQ.r)(QQ) ? (QQ = (0, NQ.s)(QQ), RQ("Only letters, numbers, and _")) : RQ(null), qF.current && (qF.current.value = QQ), pQ(QQ))
      }
      return (0, LQ.useEffect)((() => (!0 === wQ ? (clearInterval(oF.current), oF.current = setInterval(AQ, 1e3)) : clearInterval(oF.current), () => {
        clearInterval(oF.current)
      })), [wQ, AQ]), (0, LQ.useEffect)((() => {
        var QQ;
        pQ(null !== (QQ = tQ.getPlayerName()) && void 0 !== QQ ? QQ : "")
      }), [tQ]), (0, LQ.useEffect)((() => {
        if (!wQ || !tF || MQ) return;
        let QQ = !1;
        return AF(!0), bF([]), lQ.b.getPlayerProfile(tQ, {
          lowerCaseName: tQ.getPlayerName().toLowerCase()
        }).then((FQ => {
          QQ || bF(FQ.socialLinks)
        })).catch((QQ => {
          console.error("Failed to load social links", QQ)
        })).finally((() => {
          QQ || AF(!1)
        })), () => {
          QQ = !0
        }
      }), [wQ, tF, MQ, tQ]), (0, HQ.jsxs)("div", {
        className: oQ()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: qQ
        }),
        children: [qQ && (0, HQ.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: vQ("settingsMenu:accountSettingsInGameWarning")
        }), (0, HQ.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, HQ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [vQ("homePage:discordNamePopupTitle"), (0, HQ.jsxs)(UQ.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, TQ.e)({
                name: tQ.getPlayerName()
              }),
              onClick: () => {
                iQ.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, HQ.jsx)(kQ.c, {
                name: "arrow-up-right-from-square"
              }), " ", vQ("profileCard:viewProfile")]
            })]
          }), (0, HQ.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, HQ.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [eQ.featureFlags.canChangeName && (0, HQ.jsx)(cQ.b, {
                className: "EnterName",
                placeholderText: vQ("homePage:enterName"),
                maxLength: NQ.k,
                defaultValue: GQ,
                onValueChange: QQ => {
                  pF(QQ)
                },
                forcedText: dQ || !eQ.featureFlags.canChangeName ? GQ : null,
                blurOnEnter: !0,
                domRef: qF
              }), (0, HQ.jsx)(mQ.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  pF((0, NQ.h)())
                },
                children: (0, HQ.jsx)(kQ.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !eQ.featureFlags.canChangeName && (0, HQ.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, NQ.e)(GQ, !eQ.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, HQ.jsx)(mQ.f, {
              className: "ChooseNameButton",
              disabled: dQ || GQ === tQ.getPlayerName(),
              onClick: () => {
                GQ.length < NQ.n ? RQ(vQ("homePage:changeNameMinLengthError", {
                  length: NQ.n
                })) : GQ.length > NQ.k ? RQ(vQ("homePage:changeNameMaxLengthError", {
                  length: NQ.k
                })) : (QF(!0), RQ(null), async function(QQ, FQ, wQ, LQ) {
                  const qQ = await (0, sQ.postJsonWithMetricsCookiesAndJsonResponse)(`${rQ.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: QQ
                  }, {
                    retries: 3
                  }, FQ.getMetricsCookies()).catch((QQ => (console.error("Bad response from the server when trying to update name:", QQ), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  qQ.err ? (console.error("Error when trying to get with new name from DB", qQ.err), LQ(qQ.err)) : !0 === qQ.nameExists ? LQ("Name is already taken") : wQ(QQ)
                }(GQ, tQ, (QQ => {
                  tQ.setPlayerName(QQ), QF(!1)
                }), (QQ => {
                  RQ(QQ), QF(!1)
                })))
              },
              children: vQ("general:choose")
            })]
          }), WQ && (0, HQ.jsx)("div", {
            className: "ChooseAccNameError",
            children: WQ
          })]
        }), (0, HQ.jsx)(SQ.e, {
          label: (() => {
            if ((0, ZQ.m)(bQ)) {
              const QQ = (0, DQ.k)(uQ.code, "general:timeLeft"),
                FQ = (0, jQ.db)(QQ, Date.now(), bQ + ZQ.l);
              return `${vQ("settingsMenu:hideSocialLocation")} (${vQ("general:timeLeft",{time:FQ})})`
            }
            return vQ("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const QQ = !(0, ZQ.m)(bQ);
            (0, BQ.reportAnalyticsClick)({
              id: "social.hide_location",
              value: QQ ? "on" : "off"
            }), LF(!0), lQ.b.setHideSocialLocation(tQ, QQ).then((() => {
              iQ.c.set({
                hideSocialLocationFrom: QQ ? Date.now() : null
              })
            })).finally((() => {
              LF(!1)
            }))
          },
          checked: (0, ZQ.m)(bQ),
          disabled: wF
        }), tF && (0, HQ.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, HQ.jsx)("div", {
            className: "AccountSettingsLabel",
            children: vQ("settingsMenu:socialLinks")
          }), xF && (0, HQ.jsx)(CQ.c, {}), !xF && (0, HQ.jsx)(yQ.b, {
            socialLinks: HF,
            editable: !0,
            userContext: tQ,
            onLinksUpdated: MF
          })]
        }), (0, HQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, HQ.jsx)("div", {
            className: "AccountSettingsLabel",
            children: vQ(uF ? "auth:loginOrSwitchAccount" : "auth:login")
          }), kF && (0, HQ.jsx)(CQ.c, {}), !kF && 0 === vF.length && (0, HQ.jsx)("div", {
            className: "NoLoginOptions",
            children: vQ("auth:noLoginOptions")
          }), !kF && vF.length > 0 && "crazygames" !== OQ.r && (0, HQ.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: vF
          }), !kF && vF.length > 0 && "crazygames" === OQ.r && (0, HQ.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [vF[0], vF.length > 1 && (0, HQ.jsxs)(HQ.Fragment, {
              children: [(0, HQ.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, HQ.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: vQ("auth:legacyLoginOptions")
                }), (0, HQ.jsx)(PQ.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: vQ("auth:legacyLoginOptionsInfo")
                })]
              }), (0, HQ.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: vF.slice(1)
              })]
            })]
          }), eQ.featureFlags.useLogin && (null !== tQ.loggedInInfo || tQ.isLoggedIn()) && (0, HQ.jsxs)(HQ.Fragment, {
            children: [(0, HQ.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, HQ.jsxs)(mQ.F, {
              onClick: () => {
                (0, sQ.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, HQ.jsx)(kQ.c, {
                name: "right-from-bracket"
              }), vQ("auth:signOut")]
            })]
          })]
        }), !tQ.playerHasRank("super") && (0, XQ.purchasesAllowed)() && (0, HQ.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, HQ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, HQ.jsx)(kQ.c, {
              name: "bolt"
            }), vQ("homePage:superRank")]
          }), (0, HQ.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, HQ.jsxs)(mQ.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, aQ.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, HQ.jsx)(kQ.c, {
                name: "bolt"
              }), vQ("homePage:getSuperRank")]
            }), (0, HQ.jsxs)(mQ.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, aQ.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, HQ.jsx)(kQ.c, {
                name: "bolt"
              }), vQ("homePage:giftSuperRank")]
            })]
          })]
        }), tQ.playerHasRank("super") && (0, HQ.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, HQ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, HQ.jsx)(kQ.c, {
              name: "bolt"
            }), vQ("homePage:superRank"), nQ && (0, HQ.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", nQ, ")"]
            })]
          }), (0, XQ.purchasesAllowed)() && (0, HQ.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, jQ.Bc)(tQ.superRankInfo) && (0, HQ.jsxs)(mQ.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: fQ,
              onClick: () => {
                hQ(KQ.l.id, null)
              },
              children: [(0, HQ.jsx)(kQ.c, {
                name: "bolt"
              }), vQ("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: KQ.l.product.days,
                price: KQ.l.price
              })]
            }), (0, HQ.jsxs)(mQ.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, aQ.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, HQ.jsx)(kQ.c, {
                name: "bolt"
              }), vQ("homePage:giftSuperRank")]
            })]
          }), VQ && (0, HQ.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: vQ(VQ.translationKey)
          })]
        }), (0, HQ.jsx)(FF, {
          showing: wQ
        }), eQ.featureFlags.useSocialFeatures && (0, HQ.jsx)(eF, {
          showing: wQ
        }), (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, HQ.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, HQ.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: vQ(GF(mF, uF))
            }), (0, OQ.d)() && (0, HQ.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: vQ("auth:discordActivityKickWarning")
            }), (0, HQ.jsx)(YF, {
              showing: wQ
            })]
          }), (0, HQ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: vQ("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function GF(QQ, FQ) {
      return QQ ? FQ ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var pF = wQ(8995),
      cF = wQ(3029),
      CF = wQ(1265),
      SF = wQ(1440);
    const iF = (0, LQ.memo)((function(QQ) {
        let {
          inGame: FQ
        } = QQ;
        const {
          t: wQ,
          selectedLanguage: LQ
        } = (0, DQ.y)(), {
          clientEscMenuOptions: qQ,
          showDebugOverlay: oQ
        } = (0, iQ.l)(["clientEscMenuOptions", "showDebugOverlay"]), kQ = (0, AQ.l)("hideCoordinates");
        let vQ = "settingsMenu:showCoordinates",
          mQ = "settingsMenu:showChunkCoordinates";

        function uQ(QQ) {
          const FQ = new Intl.DisplayNames([QQ], {
            type: "language"
          }).of(QQ);
          return FQ.charAt(0).toUpperCase() + FQ.slice(1)
        }
        return kQ && (vQ = "settingsMenu:showCoordinatesHidden", mQ = "settingsMenu:showChunkCoordinatesHidden"), (0, HQ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [FQ && eQ.featureFlags.canUseInviteLinks && (0, HQ.jsxs)("div", {
            className: "SettingBox",
            children: [(0, HQ.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: wQ("settingsMenu:inviteLink")
            }), (0, HQ.jsx)(pF.d, {})]
          }), (0, HQ.jsxs)("div", {
            className: "SettingBox",
            children: [(0, HQ.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: wQ("settingsMenu:language")
            }), (0, HQ.jsx)(cF.d, {
              options: Object.entries(DQ.i).map((QQ => {
                let [FQ, wQ] = QQ;
                return {
                  label: (0, HQ.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, HQ.jsx)("img", {
                      src: wQ.flagImg,
                      alt: "flag"
                    }), (0, HQ.jsxs)("span", {
                      children: [uQ(FQ), " ", (0, HQ.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", FQ, ")"]
                      })]
                    })]
                  }),
                  value: FQ
                }
              })),
              value: LQ.code,
              onChange: QQ => {
                CF.e.get().setCurrentLanguage(QQ.value)
              }
            })]
          }), !(0, eQ.isMobileApp)() && (0, SF.j)() && eQ.featureFlags.useForceRotateForceFullscreenOverlay && (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:disableFullscreenMode"),
            checked: qQ.disableFullscreen,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                disableFullscreen: QQ
              })
            }
          }), (0, HQ.jsx)(SQ.e, {
            label: wQ(vQ),
            checked: qQ.showCoordinates,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                showCoordinates: QQ
              })
            },
            disabled: kQ
          }), (0, HQ.jsx)(SQ.e, {
            label: wQ(mQ),
            checked: qQ.showChunkCoordinates,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                showChunkCoordinates: QQ
              })
            },
            disabled: kQ
          }), (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:showFps"),
            checked: qQ.showFPS,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                showFPS: QQ
              })
            }
          }), (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:disableBunnyHopping"),
            checked: qQ.disableBunnyHopping,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                disableBunnyHopping: QQ
              })
            }
          }), (0, oF.C)() && (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:showChat"),
            checked: qQ.showChat,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                showChat: QQ
              })
            }
          }), (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:showDebugOverlay"),
            checked: oQ,
            onClick: QQ => {
              iQ.c.set({
                showDebugOverlay: QQ
              })
            }
          }), eQ.featureFlags.useSocialFeatures && (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:showFriendOnlineToasts"),
            checked: qQ.showFriendOnlineToasts,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                showFriendOnlineToasts: QQ
              })
            }
          }), (0, HQ.jsx)(SQ.e, {
            label: wQ("settingsMenu:showNewItemIndicator"),
            checked: qQ.showNewItemIndicator,
            onClick: QQ => {
              iQ.c.setClientEscMenuOptions({
                showNewItemIndicator: QQ
              })
            }
          })]
        })
      })),
      WF = (0, LQ.memo)((function() {
        const {
          t: QQ
        } = (0, DQ.y)(), {
          soundVolume: FQ,
          musicVolume: wQ
        } = (0, iQ.l)(["soundVolume", "musicVolume"]);
        return (0, HQ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, HQ.jsx)(SQ.g, {
            name: QQ("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: wQ,
            onChange: QQ => {
              iQ.c.set({
                musicVolume: Math.round(100 * QQ) / 100
              })
            },
            format: QQ => QQ.toFixed(2)
          }), (0, HQ.jsx)(SQ.g, {
            name: QQ("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: FQ,
            onChange: QQ => {
              iQ.c.set({
                soundVolume: Math.round(100 * QQ) / 100
              })
            },
            format: QQ => QQ.toFixed(2)
          })]
        })
      }));
    var RF = wQ(702),
      OF = wQ(1447),
      sF = wQ(3544),
      rF = wQ(8997),
      IF = wQ(3363);
    const UF = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function NF() {
      const {
        t: QQ
      } = (0, DQ.y)(), FQ = (0, IF.c)(), {
        mobilePushNotificationsCanAsk: wQ
      } = (0, iQ.l)(["mobilePushNotificationsCanAsk"]), [qQ, oQ] = (0, LQ.useState)(null), [kQ, vQ] = (0, LQ.useState)(!1), [uQ, bQ] = (0, LQ.useState)(null), [YQ, xQ] = (0, LQ.useState)(!1), AQ = (0, LQ.useCallback)((() => {
        (0, sF.c)().then((QQ => {
          FQ.current && (oQ(QQ), vQ(!1))
        })).catch((QQ => {
          console.error("Failed to load push notification targets:", QQ), FQ.current && vQ(!0)
        }))
      }), [FQ]), tQ = (0, LQ.useCallback)((() => {
        (0, rF.b)().then((QQ => {
          FQ.current && bQ((() => QQ))
        }))
      }), [FQ]);
      (0, LQ.useEffect)((() => {
        AQ()
      }), [AQ]), (0, LQ.useEffect)((() => {
        tQ()
      }), [tQ, wQ]), (0, OF.g)(sF.i, AQ);
      const eQ = null === qQ ? [] : Object.keys(UF).filter((QQ => qQ[QQ] > 0));
      return (0, HQ.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, HQ.jsx)("div", {
          className: "SliderText",
          children: QQ("notificationSettings:pushNotifications")
        }), null === qQ && kQ && (0, HQ.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: QQ("notificationSettings:pushTargetsLoadFailed")
        }), null !== qQ && 0 === eQ.length && (0, HQ.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: QQ("notificationSettings:pushTargetsNone")
        }), eQ.length > 0 && (0, HQ.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: eQ.map((FQ => {
            var wQ;
            return (0, HQ.jsx)("li", {
              children: QQ(UF[FQ], {
                count: null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ[FQ]) && void 0 !== wQ ? wQ : 0
              })
            }, FQ)
          }))
        }), null !== uQ && (0, HQ.jsx)(mQ.f, {
          className: "PushNotificationSettingsButton",
          loading: YQ,
          onClick: () => {
            xQ(!0), uQ().catch((QQ => {
              console.error("Failed to turn on push notifications:", QQ)
            })).finally((() => {
              FQ.current && (xQ(!1), tQ())
            }))
          },
          children: QQ("notificationSettings:pushTurnOn")
        })]
      })
    }
    const TF = {
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
      KF = (0, LQ.memo)((function() {
        const {
          t: QQ
        } = (0, DQ.y)(), {
          clientEscMenuOptions: FQ
        } = (0, iQ.l)(["clientEscMenuOptions"]);
        return (0, HQ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, HQ.jsx)(SQ.f, {
            label: QQ("notificationSettings:friendRequests"),
            options: RF.d.map((FQ => ({
              value: FQ,
              label: QQ(TF[FQ].label)
            }))),
            value: FQ.friendRequestNotifications,
            onChange: QQ => {
              iQ.c.setClientEscMenuOptions({
                friendRequestNotifications: QQ
              })
            },
            circleInfoText: (0, HQ.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: RF.d.map((FQ => (0, HQ.jsxs)("div", {
                children: [(0, HQ.jsx)("b", {
                  children: QQ(TF[FQ].label)
                }), ": ", QQ(TF[FQ].info)]
              }, FQ)))
            })
          }), (0, HQ.jsx)(NF, {})]
        })
      }));
    var zF = wQ(4350),
      lF = wQ(201),
      jF = wQ(282),
      aF = wQ(6485),
      XF = wQ(3318),
      fF = wQ(9001),
      VF = wQ(619),
      hF = wQ(22);
    var JF = wQ(634),
      EF = wQ(27),
      nF = wQ(4238);
    const gF = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function PF(QQ) {
      return gF.has(QQ) ? MQ.gameBridge.lookup("Xp", null) : null
    }

    function ZF(QQ) {
      if (!(0, VF.F)(iQ.c.get("clientEscMenuOptions")[QQ])) return iQ.c.get("clientEscMenuOptions")[QQ];
      const FQ = PF(QQ);
      return null !== FQ ? FQ[gF.get(QQ)] : EF.i.getItem(QQ)
    }

    function yF(QQ, FQ) {
      if ("useTouchControls" === QQ) return void(0, nF.c)(FQ);
      QQ in iQ.c.get("clientEscMenuOptions") && iQ.c.setClientEscMenuOptions({
        [QQ]: FQ
      });
      const wQ = PF(QQ);
      null !== wQ && MQ.gameBridge.send("setChunkAddDistance", {
        ...wQ,
        [gF.get(QQ)]: FQ
      }), EF.i.setItem(QQ, FQ)
    }
    var BF = wQ(4273),
      dF = wQ(9004),
      Qw = wQ(9013),
      Fw = wQ(4348);

    function ww(QQ) {
      var FQ, qQ, kQ, vQ;
      let {
        minChunkAddDist: mQ,
        getValue: uQ,
        onChange: bQ,
        setApplySettingsCallback: YQ
      } = QQ;
      const {
        t: xQ
      } = (0, DQ.y)(), {
        clientEscMenuOptions: tQ
      } = (0, iQ.l)(["clientEscMenuOptions", "showDistantNametags"]), MQ = (0, LQ.useRef)(uQ("showFog")), GQ = (0, LQ.useRef)(tQ.antiAliasing), pQ = (0, LQ.useRef)(tQ.useWebGpu), [cQ, CQ] = (0, LQ.useState)(null), [RQ, OQ] = (0, LQ.useState)((() => (0, XF.f)(eQ.featureFlags.settings.canUseShaderPacks))), [sQ] = (0, LQ.useState)((() => iQ.c.isWebGpuDefaultOff())), [rQ] = (0, LQ.useState)(jF.g);
      (0, LQ.useEffect)((() => {
        let QQ = !1;
        return (0, eQ.hasUsableWebGpuAdapter)().then((FQ => {
          QQ || CQ(FQ)
        })), (0, XF.l)(eQ.featureFlags.settings.canUseShaderPacks) && (0, aF.f)().then((async FQ => {
          const LQ = null !== FQ && await async function(QQ) {
            const [{
              isShaderPackActive: FQ
            }, {
              loadPageShaderPackCompiler: LQ
            }] = await Promise.all([wQ.e(128).then((() => wQ(6481))), Promise.all([wQ.e(75), wQ.e(132), wQ.e(131)]).then((() => wQ(6438)))]);
            return FQ(QQ, await LQ())
          }(FQ);
          QQ || OQ(LQ)
        })), () => {
          QQ = !0
        }
      }), []);
      const IQ = function(QQ, FQ, wQ, LQ, qQ) {
          return (0, fF.e)(wQ, LQ) && !0 === FQ ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== FQ ? "settingsMenu:newWebGpu" : qQ ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: QQ && !1 !== FQ,
            disabled: !0 !== FQ
          }
        }(tQ.useWebGpu, cQ, RQ, sQ, rQ),
        UQ = (tQ.useWebGpu || (0, fF.e)(RQ, sQ)) && RQ && !0 === cQ,
        NQ = (0, AQ.l)("lightingOverride"),
        TQ = !(0, VF.F)(NQ);
      let KQ = "settingsMenu:enableLighting";
      TQ && (KQ = NQ ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const zQ = QQ => {
          var FQ, wQ, LQ;
          const qQ = null !== (FQ = QQ.showFog) && void 0 !== FQ ? FQ : uQ("showFog"),
            oQ = null !== (wQ = QQ.antiAliasing) && void 0 !== wQ ? wQ : tQ.antiAliasing,
            DQ = null !== (LQ = QQ.useWebGpu) && void 0 !== LQ ? LQ : tQ.useWebGpu,
            kQ = !JF.s && qQ !== MQ.current || oQ !== GQ.current || DQ !== pQ.current;
          YQ(kQ ? () => SQ.h : null)
        },
        lQ = (0, AQ.l)("fogChunkDistanceOverride"),
        jQ = (0, AQ.l)("fogBlockDistanceOverride"),
        aQ = !(0, VF.F)(lQ) || !(0, VF.F)(jQ),
        XQ = aQ ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [fQ, VQ] = (0, zF.f)(mQ),
        [hQ, JQ] = (0, Fw.g)(mQ),
        EQ = xQ("settingsMenu:chunkLoadDistanceDeviceLimit"),
        nQ = hQ < fQ,
        gQ = Math.min(null !== (FQ = uQ("chunkHorizAddDist")) && void 0 !== FQ ? FQ : mQ[0], hQ),
        PQ = !aQ && function(QQ, FQ) {
          return !0 === QQ.showFog && QQ.fogChunkDistance > FQ
        }(tQ, gQ);
      return (0, HQ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, HQ.jsx)(SQ.g, {
          name: xQ("settingsMenu:horizontalChunkLoadDistance"),
          min: mQ[0],
          max: fQ,
          selectableMax: hQ,
          cappedNote: EQ,
          step: 1,
          initValue: gQ,
          onChange: QQ => {
            !0 === uQ("showFog") && QQ < uQ("fogChunkDistance") && bQ("fogChunkDistance", QQ), bQ("chunkHorizAddDist", QQ), hF.l.GA("updatedChunkLoadDist")
          },
          circleInfoText: xQ("settingsMenu:chunkLoadDistanceInfo")
        }), (0, HQ.jsx)(SQ.g, {
          name: xQ("settingsMenu:verticalChunkLoadDistance"),
          min: mQ[1],
          max: VQ,
          selectableMax: JQ,
          cappedNote: nQ ? void 0 : EQ,
          step: 1,
          initValue: Math.min(null !== (qQ = uQ("chunkVertAddDist")) && void 0 !== qQ ? qQ : mQ[1], JQ),
          onChange: QQ => {
            bQ("chunkVertAddDist", QQ), hF.l.GA("updatedChunkLoadDist")
          },
          circleInfoText: xQ("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, HQ.jsx)(SQ.e, {
          label: xQ("settingsMenu:chunkFadeIn"),
          checked: tQ.chunkFadeIn,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              chunkFadeIn: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:chunkFadeInInfo")
        }), WQ.devTools.supports("chunkBorders") && (0, HQ.jsx)(SQ.e, {
          label: xQ("settingsMenu:showChunkBorders"),
          checked: tQ.showChunkBorders,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              showChunkBorders: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:showChunkBordersInfo")
        }), (0, HQ.jsx)(SQ.e, {
          label: xQ(KQ),
          checked: tQ.enableLighting,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              enableLighting: QQ
            })
          },
          disabled: TQ
        }), (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, HQ.jsx)(SQ.e, {
            label: xQ(XQ),
            checked: tQ.showFog,
            onClick: QQ => {
              zQ({
                showFog: QQ
              }), iQ.c.setClientEscMenuOptions({
                showFog: QQ
              })
            },
            disabled: aQ,
            className: oQ()({
              SettingBoxWarning: PQ
            })
          }), (0, HQ.jsx)(SQ.g, {
            name: xQ("settingsMenu:fogChunkDistance"),
            min: mQ[0],
            max: lF.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (kQ = tQ.fogChunkDistance) && void 0 !== kQ ? kQ : mQ[0],
            onChange: QQ => {
              iQ.c.setClientEscMenuOptions({
                fogChunkDistance: QQ
              }), hF.l.GA("fogChunkDistanceChanged", QQ)
            },
            circleInfoText: xQ("settingsMenu:fogChunkDistanceInfo"),
            disabled: aQ || !1 === uQ("showFog"),
            className: oQ()({
              SettingBoxWarning: PQ
            })
          }), PQ && (0, HQ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: xQ("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !JF.s && (0, HQ.jsx)(SQ.e, {
          label: xQ(UQ ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !UQ && tQ.disableTexAtlas,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              disableTexAtlas: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: UQ
        }), (0, HQ.jsx)(SQ.g, {
          name: xQ("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: tQ.cameraFOV,
          onChange: QQ => {
            iQ.c.setClientEscMenuOptions({
              cameraFOV: QQ
            })
          }
        }), (0, HQ.jsx)(SQ.e, {
          label: xQ("settingsMenu:disableViewBobbing"),
          checked: tQ.disableBobbing,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              disableBobbing: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:disableViewBobbingInfo")
        }), (0, HQ.jsx)(SQ.e, {
          label: xQ("settingsMenu:antiAliasing"),
          checked: tQ.antiAliasing,
          onClick: QQ => {
            zQ({
              antiAliasing: QQ
            }), (0, BF.h)("antiAliasing"), iQ.c.setClientEscMenuOptions({
              antiAliasing: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:antiAliasingInfo")
        }), (0, HQ.jsx)(SQ.g, {
          name: xQ("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (vQ = tQ.pixelScale) && void 0 !== vQ ? vQ : 1,
          onChange: QQ => {
            (QQ !== iQ.c.get("clientEscMenuOptions").pixelScale || (0, Qw.j)()) && (0, BF.h)("pixelScale"), iQ.c.setClientEscMenuOptions({
              pixelScale: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:pixelScaleInfo"),
          format: QQ => `${QQ}x`
        }), (0, HQ.jsx)(SQ.e, {
          label: xQ("settingsMenu:pixelSmoothing"),
          checked: tQ.pixelSmoothing,
          onClick: QQ => {
            iQ.c.setClientEscMenuOptions({
              pixelSmoothing: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:pixelSmoothingInfo")
        }), JF.s && (0, HQ.jsx)(SQ.e, {
          label: xQ("settingsMenu:distantNametags"),
          checked: (0, dF.c)(),
          onClick: QQ => {
            iQ.c.set({
              showDistantNametags: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:distantNametagsInfo")
        }), (0, HQ.jsx)(SQ.e, {
          label: xQ(IQ.translationKey),
          checked: IQ.checked,
          onClick: QQ => {
            zQ({
              useWebGpu: QQ
            }), iQ.c.setClientEscMenuOptions({
              useWebGpu: QQ
            })
          },
          circleInfoText: xQ("settingsMenu:newWebGpuInfo"),
          disabled: IQ.disabled
        })]
      })
    }
    var Lw = wQ(4268),
      qw = wQ(8625),
      ow = wQ(9030),
      Dw = wQ(8638),
      kw = wQ(9037);
    const vw = {
        color: 16777215,
        name: "white"
      },
      mw = {
        color: 0,
        name: "black"
      },
      uw = [vw, {
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
      }, mw],
      Hw = [mw, vw];

    function bw(QQ) {
      return `${QQ} px`
    }

    function Yw(QQ) {
      return `${QQ}%`
    }

    function xw(QQ) {
      let {
        label: FQ,
        value: wQ,
        swatches: LQ,
        onChange: qQ
      } = QQ;
      const {
        t: kQ
      } = (0, DQ.y)(), vQ = !LQ.some((QQ => QQ.color === wQ));
      return (0, HQ.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, HQ.jsx)("div", {
          className: "SliderText",
          children: FQ
        }), (0, HQ.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": FQ,
          children: [LQ.map((QQ => {
            let {
              color: FQ,
              name: LQ
            } = QQ;
            return (0, HQ.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": FQ === wQ,
              "aria-label": kQ(`crosshairSettings:color_${LQ}`),
              "data-pad-focusable": !0,
              className: oQ()("CrosshairSwatch", {
                Selected: FQ === wQ
              }),
              style: {
                background: (0, kw.k)(FQ)
              },
              onClick: () => {
                qQ(FQ)
              }
            }, FQ)
          })), (0, HQ.jsx)("label", {
            className: oQ()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: vQ
            }),
            style: vQ ? {
              background: (0, kw.k)(wQ)
            } : void 0,
            title: kQ("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, HQ.jsx)("input", {
              type: "color",
              "aria-label": kQ("crosshairSettings:customColor"),
              value: (0, kw.k)(wQ),
              onChange: QQ => {
                const FQ = (0, kw.m)(QQ.target.value);
                null !== FQ && qQ(FQ)
              }
            })
          })]
        })]
      })
    }

    function Aw(QQ) {
      let {
        settings: FQ,
        onChange: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, DQ.y)(), qQ = (QQ, LQ) => {
        wQ((0, kw.p)(FQ, QQ, LQ))
      }, oQ = function(QQ, wQ) {
        let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bw;
        const {
          min: oQ,
          max: DQ,
          step: kQ
        } = kw.b[QQ];
        return (0, HQ.jsx)(SQ.g, {
          name: wQ,
          min: oQ,
          max: DQ,
          step: kQ,
          initValue: FQ[QQ],
          format: LQ,
          onChange: FQ => {
            qQ(QQ, FQ)
          }
        }, QQ)
      }, kQ = ["lines", "dot", "circle"].filter((QQ => FQ[QQ])), vQ = (QQ, wQ, LQ) => (0, HQ.jsx)(SQ.e, {
        label: wQ,
        checked: FQ[QQ],
        disabled: 1 === kQ.length && kQ[0] === QQ,
        circleInfoText: LQ,
        onClick: FQ => {
          qQ(QQ, FQ)
        }
      }, QQ), mQ = "shapes" === FQ.style;
      return (0, HQ.jsxs)(HQ.Fragment, {
        children: [(0, HQ.jsx)(SQ.f, {
          label: LQ("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: LQ("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: LQ("crosshairSettings:styleShapes")
          }],
          value: FQ.style,
          onChange: QQ => {
            qQ("style", QQ)
          }
        }), (0, HQ.jsx)(xw, {
          label: LQ("crosshairSettings:color"),
          value: FQ.color,
          swatches: uw,
          onChange: QQ => {
            qQ("color", QQ)
          }
        }), oQ("opacity", LQ("crosshairSettings:opacity"), Yw), !mQ && oQ("size", LQ("crosshairSettings:size"), Yw), mQ && (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vQ("lines", LQ("crosshairSettings:lines")), FQ.lines && oQ("lineLength", LQ("crosshairSettings:lineLength")), FQ.lines && oQ("lineThickness", LQ("crosshairSettings:lineThickness")), FQ.lines && oQ("gap", LQ("crosshairSettings:gap")), FQ.lines && vQ("tStyle", LQ("crosshairSettings:tStyle"))]
        }), mQ && (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vQ("dot", LQ("crosshairSettings:dot")), FQ.dot && oQ("dotSize", LQ("crosshairSettings:dotSize"))]
        }), mQ && (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vQ("circle", LQ("crosshairSettings:circle")), FQ.circle && oQ("circleRadius", LQ("crosshairSettings:circleRadius")), FQ.circle && oQ("circleThickness", LQ("crosshairSettings:circleThickness"))]
        }), (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [oQ("outline", LQ("crosshairSettings:outline"), (QQ => QQ > 0 ? bw(QQ) : LQ("crosshairSettings:off"))), FQ.outline > 0 && (0, HQ.jsx)(xw, {
            label: LQ("crosshairSettings:outlineColor"),
            value: FQ.outlineColor,
            swatches: Hw,
            onChange: QQ => {
              qQ("outlineColor", QQ)
            }
          })]
        }), vQ("growOnClick", LQ("crosshairSettings:growOnClick")), mQ && vQ("forGuns", LQ("crosshairSettings:forGuns"), LQ("crosshairSettings:forGunsInfo"))]
      })
    }
    var tw = wQ(71),
      ew = wQ(1295),
      Mw = wQ(9046),
      Gw = wQ(9048),
      pw = wQ(9053),
      Cw = wQ(9058);
    const Sw = ["sky", "grass", "stone", "sand", "snow", "night"],
      iw = "4rem";

    function Ww(QQ) {
      return {
        backgroundImage: `url(${QQ})`,
        backgroundSize: `${iw} ${iw}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Rw(QQ) {
      return {
        ...(() => {
          switch (QQ) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Ww(Mw);
            case "stone":
              return Ww(Gw);
            case "sand":
              return Ww(pw);
            case "snow":
              return Ww(Cw);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Ow(QQ) {
      return Object.freeze({
        ...kw.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...QQ
      })
    }
    const sw = [{
        id: "default",
        settings: kw.e
      }, {
        id: "cross",
        settings: Ow({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Ow({
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
        settings: Ow({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Ow({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Ow({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Ow({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Ow({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      rw = ["growOnClick", "forGuns"];
    var Iw = wQ(9067);

    function Uw(QQ) {
      let {
        label: FQ,
        selected: wQ,
        onClick: LQ,
        className: qQ,
        style: DQ,
        children: kQ
      } = QQ;
      return (0, HQ.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": wQ,
        title: FQ,
        "aria-label": FQ,
        "data-pad-focusable": !0,
        className: oQ()("CrosshairBackdropSwatch", qQ, {
          Selected: wQ
        }),
        style: DQ,
        onClick: LQ,
        children: kQ
      })
    }

    function Nw(QQ) {
      let {
        backdrop: FQ,
        onChange: wQ,
        game: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, DQ.y)();
      return (0, HQ.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": qQ("crosshairSettings:background"),
        children: [LQ && (0, HQ.jsx)(Uw, {
          label: qQ("crosshairSettings:bg_game"),
          selected: LQ.selected,
          onClick: LQ.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, HQ.jsx)(kQ.c, {
            name: "cube"
          })
        }), Sw.map((QQ => (0, HQ.jsx)(Uw, {
          label: qQ(`crosshairSettings:bg_${QQ}`),
          selected: !(null !== LQ && void 0 !== LQ && LQ.selected) && QQ === FQ,
          style: Rw(QQ),
          onClick: () => {
            wQ(QQ)
          }
        }, QQ)))]
      })
    }

    function Tw(QQ) {
      let {
        settings: FQ,
        touch: wQ,
        backdrop: LQ,
        onChange: qQ
      } = QQ;
      const {
        t: kQ
      } = (0, DQ.y)(), vQ = function(QQ) {
        var FQ;
        return null !== (FQ = sw.find((FQ => (0, kw.n)(FQ.settings, QQ, rw)))) && void 0 !== FQ ? FQ : null
      }(FQ);
      return (0, HQ.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": kQ("crosshairSettings:presets"),
        children: sw.map((QQ => {
          const DQ = (null === vQ || void 0 === vQ ? void 0 : vQ.id) === QQ.id;
          return (0, HQ.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": DQ,
            "data-pad-focusable": !0,
            className: oQ()("CrosshairPreset", {
              Selected: DQ
            }),
            onClick: () => {
              qQ(function(QQ, FQ) {
                return {
                  ...FQ.settings,
                  growOnClick: QQ.growOnClick,
                  forGuns: QQ.forGuns
                }
              }(FQ, QQ))
            },
            children: [(0, HQ.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Rw(LQ),
              children: (0, HQ.jsx)(Iw.b, {
                settings: QQ.settings,
                touch: wQ,
                inPreview: !0
              })
            }), (0, HQ.jsx)("div", {
              className: "CrosshairPresetName",
              children: kQ(`crosshairSettings:preset_${QQ.id}`)
            })]
          }, QQ.id)
        }))
      })
    }
    var Kw = wQ(1677);

    function zw(QQ, FQ) {
      const [wQ, qQ] = (0, LQ.useState)(!1), oQ = () => {
        qQ(!1)
      }, [DQ, kQ] = (0, LQ.useState)(!1), vQ = (0, LQ.useRef)({
        growOnClick: QQ.growOnClick,
        forGuns: QQ.forGuns
      });
      (0, LQ.useEffect)((() => {
        const FQ = vQ.current;
        vQ.current = {
          growOnClick: QQ.growOnClick,
          forGuns: QQ.forGuns
        }, (QQ.growOnClick && !FQ.growOnClick || QQ.forGuns && !FQ.forGuns) && kQ(!0)
      }), [QQ.growOnClick, QQ.forGuns]), (0, LQ.useEffect)((() => {
        if (!DQ) return;
        const QQ = setTimeout((() => {
          kQ(!1)
        }), 600);
        return () => {
          clearTimeout(QQ)
        }
      }), [DQ]);
      const mQ = wQ || DQ;
      return {
        view: {
          pressed: mQ,
          spread: mQ && QQ.forGuns && !QQ.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: QQ => {
            !QQ.target.closest(FQ) && (0, Kw.d)(QQ.currentTarget, QQ.pointerId) && qQ(!0)
          },
          onPointerUp: oQ,
          onPointerCancel: oQ,
          onLostPointerCapture: oQ
        }
      }
    }

    function lw(QQ) {
      let {
        settings: FQ,
        touch: wQ,
        backdrop: LQ,
        className: qQ,
        children: DQ,
        label: kQ
      } = QQ;
      const vQ = zw(FQ, ".CrosshairStageControls");
      return (0, HQ.jsxs)("div", {
        className: oQ()("CrosshairStage", qQ),
        style: Rw(LQ),
        ...vQ.handlers,
        children: [(0, HQ.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": kQ,
          children: (0, HQ.jsx)(Iw.b, {
            settings: FQ,
            touch: wQ,
            inPreview: !0,
            ...vQ.view
          })
        }), DQ]
      })
    }
    const jw = "crosshairFullScreen";

    function aw(QQ) {
      let {
        settings: FQ,
        touch: wQ,
        backdrop: qQ,
        onBackdrop: vQ,
        inGame: uQ,
        onChange: bQ,
        onClose: YQ
      } = QQ;
      const {
        t: xQ
      } = (0, DQ.y)(), AQ = (0, LQ.useRef)(null);
      (0, ew.m)("popup", AQ, YQ),
      function(QQ) {
        const FQ = (0, LQ.useRef)(QQ);
        FQ.current = QQ, (0, LQ.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [jw]: !0
          }, "");
          let QQ = !1;
          const wQ = () => {
            QQ = !0, FQ.current()
          };
          return window.addEventListener("popstate", wQ), () => {
            var FQ;
            window.removeEventListener("popstate", wQ), !QQ && null !== (FQ = window.history.state) && void 0 !== FQ && FQ[jw] && window.history.back()
          }
        }), [])
      }(YQ);
      const tQ = (0, LQ.useRef)(YQ);
      tQ.current = YQ, (0, LQ.useEffect)((() => {
        function QQ(QQ) {
          "Escape" === QQ.key && (QQ.stopPropagation(), tQ.current())
        }
        return window.addEventListener("keydown", QQ, !0), () => {
          window.removeEventListener("keydown", QQ, !0)
        }
      }), []);
      const eQ = zw(FQ, ".CrosshairFullScreenPanel"),
        [MQ, GQ] = (0, LQ.useState)(!0),
        pQ = MQ && uQ;
      (0, LQ.useEffect)((() => {
        if (pQ) return iQ.c.set({
          crosshairGameView: !0
        }), () => {
          iQ.c.set({
            crosshairGameView: !1
          })
        }
      }), [pQ]);
      const [cQ, CQ] = (0, LQ.useState)(!0);
      return (0, tw.createPortal)((0, HQ.jsxs)("div", {
        ref: AQ,
        className: "CrosshairFullScreen",
        style: pQ ? void 0 : Rw(qQ),
        ...eQ.handlers,
        children: [(0, HQ.jsx)(Iw.b, {
          settings: FQ,
          touch: wQ,
          inEditor: !0,
          ...eQ.view
        }), (0, HQ.jsxs)("div", {
          className: oQ()("CrosshairFullScreenPanel", {
            Collapsed: !cQ
          }),
          children: [(0, HQ.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, HQ.jsx)(Nw, {
              backdrop: qQ,
              onChange: QQ => {
                GQ(!1), vQ(QQ)
              },
              game: uQ ? {
                selected: pQ,
                onSelect: () => {
                  GQ(!0)
                }
              } : void 0
            }), (0, HQ.jsx)(mQ.L, {
              className: "CrosshairPanelToggle",
              ariaLabel: xQ(cQ ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                CQ(!cQ)
              },
              children: (0, HQ.jsx)(kQ.c, {
                name: cQ ? "caret-up" : "pen"
              })
            }), (0, HQ.jsx)(mQ.f, {
              className: "CrosshairFullScreenDone",
              onClick: YQ,
              padDefaultFocus: !0,
              children: xQ("crosshairSettings:done")
            })]
          }), cQ && (0, HQ.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, HQ.jsx)(Tw, {
              settings: FQ,
              touch: wQ,
              backdrop: qQ,
              onChange: bQ
            }), (0, HQ.jsx)(Aw, {
              settings: FQ,
              onChange: bQ
            })]
          })]
        })]
      }), document.body)
    }
    var Xw = wQ(2580),
      fw = wQ(9078);

    function Vw(QQ) {
      let {
        settings: FQ,
        onChange: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, DQ.y)(), vQ = (0, fw.k)(FQ), [uQ, bQ] = (0, Xw.g)(), [YQ, xQ] = (0, LQ.useState)(!1), AQ = (0, LQ.useRef)(null), [tQ, eQ] = (0, Xw.g)(), [MQ, GQ] = (0, LQ.useState)(!1);
      return (0, HQ.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, HQ.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, HQ.jsxs)(mQ.L, {
            className: oQ()("CrosshairCopy", {
              ActiveSecondaryButton: uQ
            }),
            onClick: () => {
              (0, Xw.e)(vQ, {
                useShareSheet: !1,
                onOutcome: QQ => {
                  xQ("failed" === QQ), "copied" === QQ && bQ()
                }
              })
            },
            children: [(0, HQ.jsx)(kQ.c, {
              name: uQ ? "check" : "copy"
            }), " ", qQ(uQ ? "general:copied" : "crosshairSettings:copy")]
          }), (0, HQ.jsx)(cQ.b, {
            className: "CrosshairPaste",
            domRef: AQ,
            ariaLabel: qQ("crosshairSettings:paste"),
            placeholderText: qQ("crosshairSettings:paste"),
            onValueChange: QQ => {
              const FQ = (0, fw.h)(QQ);
              GQ(!FQ && QQ.trim().length >= fw.d), FQ && (wQ(FQ), AQ.current.value = "", eQ())
            }
          })]
        }), YQ && (0, HQ.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: vQ,
          "aria-label": qQ("crosshairSettings:copy"),
          onFocus: QQ => {
            QQ.currentTarget.select()
          }
        }), (0, HQ.jsxs)("div", {
          "aria-live": "polite",
          children: [MQ && (0, HQ.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: qQ("crosshairSettings:pasteInvalid")
          }), tQ && !MQ && (0, HQ.jsx)("div", {
            className: "CrosshairShareNote",
            children: qQ("crosshairSettings:applied")
          })]
        })]
      })
    }
    var hw = wQ(9082);
    let Jw = "sky";

    function Ew(QQ) {
      let {
        showing: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, DQ.y)(), {
        isTouchScreen: qQ,
        gameState: oQ,
        clientEscMenuOptions: vQ
      } = (0, iQ.l)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), uQ = (0, hw.d)(), [bQ, YQ] = (0, LQ.useState)(Jw), xQ = QQ => {
        Jw = QQ, YQ(QQ)
      }, [AQ, tQ] = (0, LQ.useState)(!1);
      return (0, LQ.useEffect)((() => {
        FQ || tQ(!1)
      }), [FQ]), (0, HQ.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, HQ.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, HQ.jsx)(lw, {
            className: "CrosshairPreviewStage",
            settings: uQ,
            touch: qQ,
            backdrop: bQ,
            label: wQ("crosshairSettings:preview"),
            children: (0, HQ.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, HQ.jsx)(Nw, {
                backdrop: bQ,
                onChange: xQ
              }), (0, HQ.jsxs)(mQ.L, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  tQ(!0)
                },
                children: [(0, HQ.jsx)(kQ.c, {
                  name: "expand"
                }), " ", wQ("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, HQ.jsx)("div", {
          className: "SettingBox",
          children: (0, HQ.jsx)(Tw, {
            settings: uQ,
            touch: qQ,
            backdrop: bQ,
            onChange: hw.c
          })
        }), (0, HQ.jsx)(Vw, {
          settings: uQ,
          onChange: hw.c
        }), qQ && (0, HQ.jsx)(Dw.d, {
          note: (0, ow.d)(qQ, vQ.touchActionButtons) ? wQ("crosshairSettings:touchNote") : void 0
        }), (0, HQ.jsx)(Aw, {
          settings: uQ,
          onChange: hw.c
        }), AQ && (0, HQ.jsx)(aw, {
          settings: uQ,
          touch: qQ,
          backdrop: bQ,
          onBackdrop: xQ,
          inGame: "inGame" === oQ,
          onChange: hw.c,
          onClose: () => {
            tQ(!1)
          }
        })]
      })
    }
    var nw = wQ(8631),
      gw = wQ(1404),
      Pw = wQ(4834),
      Zw = wQ(9091),
      yw = wQ(1927),
      Bw = wQ(4159),
      dw = wQ(1933),
      QL = wQ(705);
    const FL = (0, LQ.memo)((function() {
      const {
        clientEscMenuOptions: QQ
      } = (0, iQ.l)(["clientEscMenuOptions"]), {
        recording: FQ,
        clipping: wQ,
        hasClipBuffer: qQ
      } = (0, yw.k)("replayRecorder"), DQ = (0, yw.g)("connectedGame", (QQ => QQ.replay)), kQ = (0, Bw.l)(), vQ = !1 === (0, AQ.l)("canRecordReplays");
      (0, LQ.useEffect)((() => {
        MQ.gameBridge.send("setRecorderPrefs", {
          clipping: QQ.enableClipping,
          clipSeconds: QQ.clipDurationSeconds
        })
      }), [QQ.enableClipping, QQ.clipDurationSeconds]);
      const uQ = kQ || DQ,
        bQ = !uQ && !vQ,
        YQ = FQ || bQ,
        xQ = bQ,
        tQ = xQ && wQ && !FQ;

      function eQ() {
        YQ && MQ.gameBridge.send("toggleRecording", null)
      }
      return (0, HQ.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, HQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: FQ ? (0, HQ.jsxs)(HQ.Fragment, {
              children: [(0, HQ.jsxs)(mQ.F, {
                className: "ReplayViewerCategoryButton",
                onClick: eQ,
                disabled: !YQ,
                children: [(0, HQ.jsx)("span", {
                  children: "Stop Recording"
                }), (0, HQ.jsx)(dw.e, {
                  noaAction: "recordGame"
                })]
              }), (0, HQ.jsx)(Zw.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, HQ.jsxs)(mQ.f, {
              className: "ReplayViewerCategoryButton",
              onClick: eQ,
              disabled: !YQ,
              children: [(0, HQ.jsx)("span", {
                children: "Start Recording"
              }), (0, HQ.jsx)(dw.e, {
                noaAction: "recordGame"
              })]
            })
          }), vQ && (0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), uQ && !FQ && (0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, HQ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, HQ.jsx)(SQ.e, {
            label: "Enable clipping",
            checked: QQ.enableClipping,
            disabled: !xQ,
            onClick: function(QQ) {
              xQ && iQ.c.setClientEscMenuOptions({
                enableClipping: QQ
              })
            },
            className: oQ()({
              SettingBoxDisabled: !xQ
            })
          }), (0, HQ.jsx)(SQ.g, {
            name: "Clip duration (seconds)",
            min: QL.j,
            max: QL.h,
            step: QL.b,
            initValue: QQ.clipDurationSeconds,
            onChange: function(QQ) {
              iQ.c.setClientEscMenuOptions({
                clipDurationSeconds: QQ
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !xQ || !QQ.enableClipping
          })]
        }), (0, HQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, HQ.jsxs)(mQ.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              tQ && MQ.gameBridge.send("saveClip", null)
            },
            disabled: !tQ,
            children: [(0, HQ.jsx)("span", {
              children: "Record clip"
            }), (0, HQ.jsx)(dw.e, {
              noaAction: "recordClip"
            })]
          }), QQ.enableClipping && !qQ && xQ && !FQ && (0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), FQ && (0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, HQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, HQ.jsxs)(mQ.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Bw.j)(!0), iQ.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: kQ,
            children: [(0, HQ.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, HQ.jsx)(dw.e, {
              noaAction: "replayViewerOpen"
            })]
          }), kQ && (0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, HQ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, HQ.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, HQ.jsx)("iframe", {
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
    var wL = wQ(1870);
    const LL = {
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
        icon: () => (0, HQ.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, HQ.jsx)("path", {
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
      JY: {
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

    function qL() {
      return Promise.all([wQ.e(75), wQ.e(132), wQ.e(126), wQ.e(123)]).then((() => wQ(40482))).then((QQ => ({
        default: QQ.ShaderPackCategory
      })), (QQ => (console.error("Failed to load the shader pack settings", QQ), {
        default: oL
      })))
    }

    function oL() {
      const {
        t: QQ
      } = (0, DQ.y)();
      return (0, HQ.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: QQ("shaderPack:tabLoadFailed")
      })
    }
    var DL = wQ(1395);
    const kL = (0, LQ.lazy)((() => wQ.e(264).then((() => wQ(40469))).then((QQ => ({
        default: QQ.BloxdInformation
      }))))),
      vL = (0, LQ.lazy)(qL);

    function mL(QQ) {
      return QQ ? "general" : "account"
    }
    const uL = new Map,
      HL = (0, LQ.memo)((function(QQ) {
        let {
          show: FQ,
          setBeforeResumeCallback: wQ
        } = QQ;
        (0, tQ.b)();
        const {
          gameState: qQ,
          openSettingsCategory: oQ
        } = (0, iQ.l)(["gameState", "openSettingsCategory"]), {
          userContext: vQ
        } = (0, xQ.e)(), {
          t: uQ
        } = (0, DQ.y)(), cQ = (0, YQ.b)(), CQ = (0, AQ.l)("minChunkAddDist"), SQ = "inGame" === qQ, [WQ, sQ] = (0, LQ.useState)(mL(SQ)), [rQ, IQ] = (0, LQ.useState)(null), [UQ, NQ] = (0, LQ.useState)([]), TQ = (0, LQ.useRef)(function() {
          const QQ = new Date,
            FQ = 6 * (QQ.getMonth() + QQ.getDate()) % mF.u.length;
          return [...mF.u, ...mF.u].slice(FQ, FQ + 6)
        }()), KQ = (0, LQ.useRef)(null), zQ = (0, OF.i)(gw.h, (0, gw.e)()), lQ = Object.keys(LL).filter((QQ => {
          switch (QQ) {
            case "replayViewer":
              return SQ;
            case "developerTools":
              return vQ.playerHasRank("developer") || !1;
            case "texturePack":
              return eQ.featureFlags.settings.canChangeTexturePack;
            case "JY":
              return eQ.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return eQ.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== OQ.r;
            case "controller":
              return eQ.featureFlags.useControllerSupport && (zQ || "controller" === WQ);
            default:
              return !0
          }
        }));
        (0, OF.g)("toggleFullCoordinateOverlay", (() => {
          const QQ = ZF("showCoordinates") && ZF("showChunkCoordinates") && ZF("showFPS");
          yF("showCoordinates", !QQ), yF("showChunkCoordinates", !QQ), yF("showFPS", !QQ), cQ()
        })), (0, OF.g)("updatedChunkLoadDist", (() => {
          cQ()
        })), (0, LQ.useEffect)((() => {
          if (IQ(null), null === iQ.c.get("openSettingsCategory")) {
            const QQ = (0, DL.d)() ? uL.get(SQ) : void 0;
            sQ(QQ && lQ.includes(QQ) ? QQ : mL(SQ))
          }
        }), [FQ]), (0, LQ.useEffect)((() => {
          null !== oQ && (sQ(oQ), uL.set(SQ, oQ), iQ.c.set({
            openSettingsCategory: null
          }))
        }), [oQ, SQ]), (0, LQ.useLayoutEffect)((() => {
          KQ.current && (KQ.current.scrollTop = 0)
        }), [WQ, FQ]), (0, LQ.useEffect)((() => {
          "updateLog" === WQ && (0, pQ.c)().then(NQ)
        }), [WQ]), (0, LQ.useEffect)((() => {
          if ((0, VF.F)(CQ)) return;
          const [QQ, FQ] = (0, Lw.g)(), [wQ, LQ] = (0, zF.f)(CQ), qQ = (0, wL.h)(CQ[0], QQ, wQ), oQ = (0, wL.h)(CQ[1], FQ, LQ);
          MQ.gameBridge.send("setChunkAddDistance", {
            horizontal: qQ,
            vertical: oQ
          })
        }), [CQ]);
        const jQ = (0, LQ.useCallback)((async () => {
          rQ && (await rQ(), IQ(null))
        }), [rQ]);

        function aQ() {
          iQ.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, LQ.useEffect)((() => {
          wQ((() => jQ))
        }), [jQ, wQ]), (0, HQ.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: FQ ? {} : {
            display: "none"
          },
          children: [(0, HQ.jsx)("div", {
            className: "MenuSideBar",
            children: (0, HQ.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, HQ.jsx)(bQ, {
                items: lQ.map((QQ => {
                  const FQ = LL[QQ].icon;
                  return {
                    id: QQ,
                    faIcon: "string" === typeof FQ ? FQ : void 0,
                    iconElement: "string" === typeof FQ ? void 0 : (0, HQ.jsx)(FQ, {}),
                    title: uQ(LL[QQ].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: WQ,
                onClick: QQ => {
                  !async function(QQ) {
                    await jQ(), sQ(QQ), uL.set(SQ, QQ)
                  }(QQ)
                }
              })
            })
          }), (0, HQ.jsxs)("div", {
            ref: KQ,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === WQ && (0, HQ.jsx)(MF, {
              showing: FQ,
              inGame: SQ
            }), "general" === WQ && (0, HQ.jsx)(iF, {
              inGame: SQ
            }), "audio" === WQ && (0, HQ.jsx)(WF, {}), "notifications" === WQ && (0, HQ.jsx)(KF, {}), "graphics" === WQ && (0, HQ.jsx)(ww, {
              minChunkAddDist: null !== CQ && void 0 !== CQ ? CQ : [2, 2],
              getValue: ZF,
              onChange: yF,
              setApplySettingsCallback: IQ
            }), "controls" === WQ && (0, HQ.jsx)(qw.f, {}), "crosshair" === WQ && (0, HQ.jsx)(Ew, {
              showing: FQ
            }), "controller" === WQ && eQ.featureFlags.useControllerSupport && (0, HQ.jsx)(nw.b, {}), eQ.featureFlags.settings.canChangeTexturePack && "texturePack" === WQ && (0, HQ.jsx)(Pw.e, {
              setApplySettingsCallback: IQ
            }), eQ.featureFlags.settings.canUseShaderPacks && "JY" === WQ && (0, HQ.jsx)(LQ.Suspense, {
              fallback: null,
              children: (0, HQ.jsx)(vL, {
                setApplySettingsCallback: IQ
              })
            }), "updateLog" === WQ && (0, HQ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, HQ.jsx)("div", {
                className: "UpdateLogsContainer",
                children: UQ.map(((QQ, FQ) => (0, HQ.jsx)(GQ.c, {
                  updateLog: QQ,
                  index: FQ,
                  close: aQ
                }, FQ)))
              })
            }), "information" === WQ && (0, HQ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, HQ.jsx)(LQ.Suspense, {
                fallback: null,
                children: (0, HQ.jsx)(kL, {})
              })
            }), "alternativeDomains" === WQ && (0, HQ.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, HQ.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: uQ("settingsMenu:unblockedDomainsDescription")
              }), (0, HQ.jsx)("div", {
                className: "AlternativeDomainsList",
                children: TQ.current.map((QQ => (0, HQ.jsxs)(mQ.f, {
                  onClick: () => {
                    window.open(`https://${QQ}`)
                  },
                  children: [(0, HQ.jsx)(kQ.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", QQ]
                }, QQ)))
              })]
            }), "replayViewer" === WQ && (0, HQ.jsx)(FL, {}), "developerTools" === WQ && (0, HQ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, HQ.jsx)(RQ, {
                setApplySettingsCallback: IQ
              })
            }), null !== rQ && (0, HQ.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, HQ.jsx)(mQ.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: jQ,
                children: uQ("general:apply")
              })
            })]
          })]
        })
      }));
    var bL = wQ(2511);
    const YL = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      xL = (0, LQ.lazy)((() => Promise.resolve().then((() => wQ(4501))).then((QQ => {
        QQ.needGameClientAfterPaint();
        const FQ = QQ.matchmakingLibrariesPromise.then((QQ => (0, bL.b)(QQ.loadCharacterCustomisationUI(), (QQ => QQ.CharacterCustomisationUI))));
        return Promise.all([QQ.ensureGameSetup(), FQ]).then((QQ => {
          let [, FQ] = QQ;
          return FQ
        }))
      }))));

    function AL(QQ) {
      let {
        show: FQ
      } = QQ;
      const {
        userContext: wQ
      } = (0, xQ.e)(), [qQ, oQ] = (0, LQ.useState)("characters");
      if (!FQ) return null;
      const DQ = YL.filter((QQ => "cape" !== QQ && "nameColour" !== QQ || wQ.getPlayerRanks().includes("super") || (0, XQ.purchasesAllowed)())).map((QQ => ({
        id: QQ,
        faIcon: mF.C[QQ],
        title: mF.E[QQ],
        redDot: !1
      })));
      return (0, HQ.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, HQ.jsx)("div", {
          className: "MenuSideBar",
          children: (0, HQ.jsx)(bQ, {
            items: DQ,
            selectedItemId: qQ,
            onClick: QQ => {
              oQ(QQ)
            }
          })
        }), (0, HQ.jsx)("div", {
          className: "MenuBody",
          children: (0, HQ.jsx)(LQ.Suspense, {
            fallback: (0, HQ.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, HQ.jsx)(CQ.c, {})
            }),
            children: (0, HQ.jsx)(xL, {
              selectedTab: qQ
            })
          })
        })]
      })
    }
    var tL = wQ(1464),
      eL = wQ(1467),
      ML = wQ(9094),
      GL = wQ(4376),
      pL = wQ(3282),
      cL = wQ(3331),
      CL = wQ(9127),
      SL = wQ(8523),
      iL = wQ(9103),
      WL = wQ(9116),
      RL = wQ(1887),
      OL = wQ(1873),
      sL = wQ(4737),
      rL = wQ(1276),
      IL = wQ(1237),
      UL = wQ(1668),
      NL = wQ(8611),
      TL = wQ(2353),
      KL = wQ(2359);

    function zL(QQ) {
      return QQ ? Object.keys(QQ).sort(((FQ, wQ) => {
        var LQ, qQ, oQ, DQ;
        const kQ = (null !== (LQ = null === (qQ = QQ[wQ]) || void 0 === qQ ? void 0 : qQ.sortPriority) && void 0 !== LQ ? LQ : 0) - (null !== (oQ = null === (DQ = QQ[FQ]) || void 0 === DQ ? void 0 : DQ.sortPriority) && void 0 !== oQ ? oQ : 0);
        return 0 !== kQ ? kQ : FQ.localeCompare(wQ)
      })) : []
    }
    const lL = [{
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

    function jL(QQ) {
      for (const {
          threshold: FQ,
          suffix: wQ
        }
        of lL)
        if (QQ >= FQ) {
          const LQ = QQ / FQ;
          return LQ >= 100 ? `${Math.floor(LQ)}${wQ}` : LQ >= 10 ? `${LQ.toFixed(1).replace(/\.0$/,"")}${wQ}` : `${LQ.toFixed(2).replace(/\.?0+$/,"")}${wQ}`
        } return String(QQ)
    }
    var aL = wQ(4867);
    const XL = {
        normal: "0.8em",
        big: "1em"
      },
      fL = (0, LQ.memo)((function(QQ) {
        let {
          item: FQ,
          amount: wQ = 0,
          size: LQ = "normal",
          tier: qQ = null
        } = QQ;
        return (0, HQ.jsx)("div", {
          className: oQ()("SmpSlot", `SmpSlot-${LQ}`),
          children: FQ && (0, HQ.jsx)(RL.e, {
            itemName: FQ,
            amount: wQ > 1 ? wQ : 0,
            amountFontSize: XL[LQ],
            enchantmentTier: qQ
          })
        })
      }));

    function VL(QQ) {
      let {
        amount: FQ,
        exact: wQ = !1,
        className: LQ
      } = QQ;
      return (0, HQ.jsxs)("span", {
        className: oQ()("SmpGold", LQ),
        children: [(0, HQ.jsx)("span", {
          className: "SmpCoin",
          children: (0, HQ.jsx)(RL.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), wQ ? FQ.toLocaleString("en-US") : jL(FQ)]
      })
    }

    function hL(QQ) {
      let {
        count: FQ = 5,
        grid: wQ = !1
      } = QQ;
      return (0, HQ.jsx)("div", {
        className: wQ ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: FQ
        }, ((QQ, FQ) => (0, HQ.jsxs)("div", {
          className: oQ()(wQ ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, HQ.jsx)("div", {
            className: oQ()("SmpSlot", wQ ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, HQ.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, HQ.jsx)("b", {}), (0, HQ.jsx)("small", {})]
          }), (0, HQ.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, FQ)))
      })
    }

    function JL(QQ) {
      let {
        title: FQ,
        children: wQ
      } = QQ;
      return (0, HQ.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, HQ.jsx)("b", {
          children: FQ
        }), wQ && (0, HQ.jsx)("small", {
          children: wQ
        })]
      })
    }

    function EL(QQ) {
      let {
        entry: FQ
      } = QQ;
      return (0, HQ.jsx)(JL, {
        title: (0, HQ.jsx)(OL.e, {
          text: FQ.item.customTitle
        }),
        children: (0, HQ.jsx)(OL.e, {
          text: FQ.item.description
        })
      })
    }

    function nL(QQ) {
      return (0, HQ.jsx)(aL.c, {
        ...QQ,
        className: oQ()("SmpChoice", QQ.className),
        reselectable: !0
      })
    }

    function gL() {
      return (0, HQ.jsx)("span", {
        className: "SmpLoader",
        children: (0, HQ.jsx)(CQ.c, {})
      })
    }

    function PL(QQ) {
      let {
        value: FQ,
        onChange: wQ,
        min: qQ = 1,
        max: oQ,
        step: DQ = 1,
        label: kQ
      } = QQ;
      const vQ = (0, LQ.useRef)(null),
        mQ = (0, LQ.useRef)(FQ);
      mQ.current = FQ;
      const [uQ, bQ] = (0, LQ.useState)(null), YQ = QQ => Math.max(qQ, Math.min(oQ, Math.floor(QQ))), xQ = QQ => {
        const FQ = mQ.current,
          LQ = "function" === typeof DQ ? DQ(FQ, QQ) : DQ,
          qQ = YQ(FQ + LQ * QQ);
        mQ.current = qQ, wQ(qQ)
      };
      (0, LQ.useEffect)((() => {
        if (null === uQ) return;
        let QQ;
        const FQ = () => {
            bQ(null)
          },
          wQ = setTimeout((() => {
            QQ = setInterval((() => {
              xQ(uQ);
              const QQ = mQ.current;
              (uQ > 0 ? QQ >= oQ : QQ <= qQ) && FQ()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", FQ), window.addEventListener("pointercancel", FQ), window.addEventListener("blur", FQ), () => {
          clearTimeout(wQ), clearInterval(QQ), window.removeEventListener("pointerup", FQ), window.removeEventListener("pointercancel", FQ), window.removeEventListener("blur", FQ)
        }
      }), [uQ]), (0, LQ.useEffect)((() => {
        const QQ = vQ.current;
        QQ && document.activeElement !== QQ && QQ.value !== String(FQ) && (QQ.value = String(FQ))
      }), [FQ]), (0, LQ.useEffect)((() => {
        const QQ = vQ.current;
        if (!QQ) return;
        const FQ = () => {
          QQ.value = String(mQ.current)
        };
        return QQ.addEventListener("blur", FQ), () => {
          QQ.removeEventListener("blur", FQ)
        }
      }), []);
      const AQ = QQ => (0, HQ.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${QQ>0?"More":"Less"} ${kQ}`,
        disabled: QQ > 0 ? FQ >= oQ : FQ <= qQ,
        onPointerDown: FQ => {
          0 === FQ.button && (xQ(QQ), bQ(QQ))
        },
        onKeyDown: FQ => {
          "Enter" !== FQ.key && " " !== FQ.key || xQ(QQ)
        },
        onContextMenu: QQ => {
          QQ.preventDefault()
        },
        children: QQ > 0 ? "+" : "\u2212"
      });
      return (0, HQ.jsxs)("div", {
        className: "SmpStepper",
        children: [AQ(-1), (0, HQ.jsx)(cQ.b, {
          className: "SmpStepperInput",
          domRef: vQ,
          defaultValue: String(FQ),
          ariaLabel: kQ,
          type: "text",
          blurOnEnter: !0,
          onValueChange: QQ => {
            const FQ = QQ.replace(/[^\d]/g, "");
            vQ.current && FQ !== QQ && (vQ.current.value = FQ), "" !== FQ && wQ(YQ(Number(FQ)))
          }
        }), AQ(1)]
      })
    }

    function ZL(QQ) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, QQ))) - 1))
    }
    var yL = wQ(9125),
      BL = wQ(1254);
    const dL = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    BL.A, jQ.Kc.length;
    new Map;
    var Qq = wQ(3149);

    function Fq(QQ, FQ) {
      var wQ;
      return FQ && (null === (wQ = QQ[FQ]) || void 0 === wQ ? void 0 : wQ.smp) || null
    }

    function wq(QQ, FQ) {
      const wQ = [];
      for (const qQ of zL(QQ)) {
        var LQ;
        const oQ = QQ[qQ];
        (null === (LQ = oQ.smp) || void 0 === LQ ? void 0 : LQ.kind) === FQ && wQ.push({
          key: qQ,
          item: oQ,
          meta: oQ.smp
        })
      }
      return wQ
    }

    function Lq(QQ, FQ) {
      var wQ;
      return null !== (wQ = wq(QQ, FQ)[0]) && void 0 !== wQ ? wQ : null
    }
    const qq = "50% 0% 50% 0%",
      oq = [{
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

    function Dq(QQ) {
      const FQ = QQ - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: wQ,
          suffix: LQ
        }
        of oq)
        if (FQ >= wQ) return `${Math.floor(FQ/wQ)}${LQ}`;
      return "<1s"
    }

    function kq(QQ) {
      const FQ = QQ.map(SL.f),
        wQ = [];
      return FQ.forEach(((QQ, LQ) => {
        const qQ = function(QQ) {
            const FQ = QQ.match(/\d+/);
            return FQ ? Number(FQ[0]) : 0
          }(QQ),
          oQ = LQ === FQ.length - 1;
        (oQ || 1 === qQ || 10 === qQ || 100 === qQ) && wQ.push({
          label: QQ,
          quantity: qQ,
          isAll: oQ
        })
      })), wQ
    }
    let vq = null;

    function mq(QQ, FQ) {
      const wQ = FQ.trim().toLowerCase();
      if (!wQ) return [];
      const LQ = QQ => {
          if (QQ === wQ) return 0;
          if (QQ.startsWith(wQ)) return 1;
          const FQ = QQ.indexOf(wQ);
          return -1 === FQ ? -1 : 2 + FQ
        },
        qQ = [];
      for (const kQ of QQ) {
        const QQ = [LQ(kQ.lowerLabel), LQ(kQ.lowerName)].filter((QQ => -1 !== QQ));
        QQ.length && qQ.push({
          item: kQ,
          rank: Math.min(...QQ)
        })
      }
      if (qQ.length > 0) return qQ.sort(((QQ, FQ) => QQ.rank - FQ.rank)).map((QQ => QQ.item));
      const oQ = [...wQ],
        DQ = QQ => {
          let FQ = 0;
          for (const wQ of oQ) {
            if (FQ = QQ.indexOf(wQ, FQ), -1 === FQ) return !1;
            FQ++
          }
          return !0
        };
      return QQ.filter((QQ => DQ(QQ.lowerLabel) || DQ(QQ.lowerName)))
    }

    function uq(QQ, FQ) {
      var wQ;
      return null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ[FQ]) && void 0 !== wQ ? wQ : FQ
    }

    function Hq(QQ, FQ) {
      const wQ = QQ.userInput;
      return void 0 !== FQ && "dropdown" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && wQ.dropdownOptions.map(SL.f).includes(FQ) ? FQ : function(QQ) {
        const FQ = QQ.userInput;
        if ("dropdown" !== (null === FQ || void 0 === FQ ? void 0 : FQ.type) || 0 === FQ.dropdownOptions.length) return null;
        const wQ = FQ.dropdownOptions.map(SL.f);
        return FQ.initialValue && wQ.includes(FQ.initialValue) ? FQ.initialValue : wQ[wQ.length - 1]
      }(QQ)
    }

    function bq(QQ) {
      return void 0 === QQ ? "" : JSON.stringify(QQ)
    }
    const Yq = (0, LQ.createContext)(null);

    function xq() {
      return (0, LQ.useContext)(Yq)
    }
    var Aq = wQ(2609);
    const tq = (0, LQ.memo)((function(QQ) {
        let {
          name: FQ,
          label: wQ,
          onPick: LQ
        } = QQ;
        return (0, HQ.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: wQ,
          onClick: () => {
            LQ(FQ)
          },
          children: [(0, HQ.jsx)(fL, {
            item: FQ,
            size: "big"
          }), (0, HQ.jsx)("span", {
            children: wQ
          })]
        })
      })),
      eq = (0, LQ.memo)((function(QQ) {
        let {
          items: FQ,
          query: wQ,
          onPick: qQ
        } = QQ;
        const {
          t: oQ
        } = (0, DQ.y)(), [kQ, vQ] = (0, LQ.useState)(new Set), mQ = (0, LQ.useMemo)((() => function(QQ) {
          const FQ = new Map;
          for (const wQ of QQ) {
            let QQ = FQ.get(wQ.category);
            QQ || (QQ = [], FQ.set(wQ.category, QQ)), QQ.push(wQ)
          }
          return [...dL, "other"].filter((QQ => FQ.has(QQ))).map((QQ => ({
            category: QQ,
            items: FQ.get(QQ)
          })))
        }(FQ)), [FQ]), uQ = (0, LQ.useMemo)((() => mq(FQ, wQ).slice(0, 60)), [FQ, wQ]);
        return wQ.trim() ? 0 === uQ.length ? (0, HQ.jsx)(JL, {
          title: oQ("smpShop:noItemsFound", {
            query: wQ.trim()
          }),
          children: oQ("smpShop:tryShorterName")
        }) : (0, HQ.jsx)(Aq.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: qq,
          observerUpdateDeps: [wQ],
          children: uQ.map((QQ => (0, HQ.jsx)(tq, {
            name: QQ.name,
            label: QQ.label,
            onPick: qQ
          }, QQ.name)))
        }) : (0, HQ.jsx)(HQ.Fragment, {
          children: mQ.map((QQ => {
            let {
              category: FQ,
              items: wQ
            } = QQ;
            const LQ = kQ.has(FQ) || wQ.length <= 48,
              DQ = LQ ? wQ : wQ.slice(0, 48);
            return (0, HQ.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, HQ.jsxs)("h4", {
                children: [oQ("other" === FQ ? "smpShop:otherItems" : `creativeInventory:${FQ}`), !LQ && (0, HQ.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    vQ(new Set([...kQ, FQ]))
                  },
                  children: oQ("smpShop:showAll", {
                    count: wQ.length
                  })
                })]
              }), (0, HQ.jsx)(Aq.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: qq,
                observerUpdateDeps: [LQ],
                children: DQ.map((QQ => (0, HQ.jsx)(tq, {
                  name: QQ.name,
                  label: QQ.label,
                  onPick: qQ
                }, QQ.name)))
              })]
            }, FQ)
          }))
        })
      }));

    function Mq(QQ, FQ) {
      const {
        searched: wQ,
        shown: qQ,
        searchFor: oQ,
        loading: DQ
      } = function(QQ, FQ) {
        var wQ;
        const qQ = xq(),
          [oQ, DQ] = (0, LQ.useState)(void 0),
          kQ = (0, LQ.useRef)(void 0),
          vQ = (0, LQ.useRef)(0),
          mQ = (0, LQ.useRef)(void 0),
          uQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.meta.item) && void 0 !== wQ ? wQ : null,
          HQ = !!QQ && qQ.isPending(QQ.key);
        (0, LQ.useEffect)((() => {
          if (!QQ || HQ || !FQ || void 0 === oQ || oQ === uQ) return;
          const wQ = oQ === kQ.current && qQ.gaveUpAt(QQ.key) > vQ.current && mQ.current !== oQ;
          (oQ !== kQ.current || wQ) && qQ.act(QQ.key, null !== oQ && void 0 !== oQ ? oQ : "*", wQ) && (wQ && (mQ.current = oQ), kQ.current = oQ, vQ.current = Date.now())
        }), [QQ, HQ, FQ, oQ, uQ, qQ]);
        const bQ = (0, LQ.useCallback)((QQ => {
            kQ.current = void 0, mQ.current = void 0, DQ(QQ)
          }), []),
          YQ = void 0 !== oQ && oQ !== uQ && (HQ || kQ.current !== oQ);
        return {
          searched: uQ,
          shown: YQ ? oQ : uQ,
          searchFor: bQ,
          loading: YQ || HQ || null !== uQ && !FQ
        }
      }(QQ, FQ), kQ = (0, LQ.useMemo)((() => function() {
        var QQ;
        let FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const qQ = `${(0,Qq.f)()}\x1f${FQ.join("\x1e")}\x1f${wQ.join("\x1e")}\x1f${JSON.stringify(LQ)}`;
        if ((null === (QQ = vq) || void 0 === QQ ? void 0 : QQ.key) === qQ) return vq.items;
        const oQ = new Set(wQ),
          DQ = new Set,
          kQ = [],
          vQ = (QQ, FQ) => {
            var wQ;
            if (!QQ || DQ.has(QQ) || oQ.has(QQ)) return;
            DQ.add(QQ);
            const qQ = null !== (wQ = LQ[QQ]) && void 0 !== wQ ? wQ : QQ;
            kQ.push({
              name: QQ,
              label: qQ,
              lowerLabel: qQ.toLowerCase(),
              lowerName: QQ.toLowerCase(),
              category: FQ
            })
          };
        for (const uQ of (0, yL.creativeItemIds)()) {
          var mQ;
          (0, yL.itemIsDisabled)(uQ, !0, !0, !1) || (0, yL.showOnlyInCreativeSearch)(uQ) || vQ((0, Qq.e)(uQ), null !== (mQ = (0, yL.creativeCategoryOf)(uQ)) && void 0 !== mQ ? mQ : "other")
        }
        for (const uQ of FQ) vQ(uQ, "other");
        return vq = {
          key: qQ,
          items: kQ
        }, kQ
      }(null === QQ || void 0 === QQ ? void 0 : QQ.meta.extra, null === QQ || void 0 === QQ ? void 0 : QQ.meta.excluded, null === QQ || void 0 === QQ ? void 0 : QQ.meta.names)), [null === QQ || void 0 === QQ ? void 0 : QQ.meta.extra, null === QQ || void 0 === QQ ? void 0 : QQ.meta.excluded, null === QQ || void 0 === QQ ? void 0 : QQ.meta.names]), [vQ, mQ] = (0, LQ.useState)(""), [uQ, HQ] = (0, LQ.useState)(0), [bQ, YQ] = (0, LQ.useState)("recent"), xQ = (0, LQ.useCallback)((QQ => {
        mQ(""), HQ((QQ => QQ + 1)), oQ(QQ)
      }), [oQ]), AQ = "browse" === bQ || "" !== vQ.trim();
      return {
        searched: wQ,
        shown: qQ,
        searchFor: oQ,
        loading: DQ,
        catalogue: kQ,
        names: null === QQ || void 0 === QQ ? void 0 : QQ.meta.names,
        query: vQ,
        setQuery: mQ,
        searchBoxKey: uQ,
        pickItem: xQ,
        setView: YQ,
        browsing: AQ
      }
    }

    function Gq(QQ) {
      let {
        browser: FQ,
        children: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, DQ.y)(), qQ = xq();
      return (0, HQ.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, HQ.jsx)("div", {
          className: "SmpSearch",
          children: (0, HQ.jsx)(cQ.b, {
            className: "SmpSearchInput",
            placeholderText: LQ("smpShop:searchPlaceholder"),
            defaultValue: FQ.query,
            onValueChange: QQ => {
              FQ.setQuery(QQ), FQ.searched && QQ.trim() && FQ.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const QQ = mq(FQ.catalogue, FQ.query)[0];
              QQ ? FQ.pickItem(QQ.name) : FQ.query.trim() && qQ.notify(LQ("smpShop:noItemsFound", {
                query: FQ.query.trim()
              }))
            }
          }, FQ.searchBoxKey)
        }), wQ]
      })
    }

    function pq(QQ) {
      let {
        browser: FQ,
        recentLabel: wQ,
        children: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, DQ.y)();
      return (0, HQ.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, HQ.jsx)(nL, {
          options: [{
            value: "recent",
            label: wQ
          }, {
            value: "browse",
            label: qQ("smpShop:browseItems")
          }],
          value: FQ.browsing ? "browse" : "recent",
          onChange: FQ.setView,
          ariaLabel: qQ("smpShop:show")
        }), !FQ.browsing && LQ]
      })
    }

    function cq(QQ) {
      let {
        item: FQ,
        names: wQ,
        summary: LQ,
        onBack: qQ,
        children: oQ
      } = QQ;
      const {
        t: kQ
      } = (0, DQ.y)();
      return (0, HQ.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, HQ.jsx)(mQ.b, {
          className: "SmpBackButton",
          onClick: qQ,
          children: kQ("general:back")
        }), (0, HQ.jsx)(fL, {
          item: FQ,
          size: "big"
        }), (0, HQ.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, HQ.jsx)("b", {
            children: uq(wQ, FQ)
          }), LQ && (0, HQ.jsx)("small", {
            children: LQ
          })]
        }), oQ]
      })
    }

    function Cq(QQ) {
      let {
        browser: FQ,
        className: wQ,
        action: LQ,
        above: qQ,
        list: DQ,
        summary: kQ,
        recentLabel: vQ,
        listControls: mQ,
        onBack: uQ
      } = QQ;
      return (0, HQ.jsxs)("div", {
        className: oQ()("SmpScreen", wQ),
        children: [(0, HQ.jsx)(Gq, {
          browser: FQ,
          children: LQ
        }), FQ.shown && (0, HQ.jsx)(cq, {
          item: FQ.shown,
          names: FQ.names,
          summary: !FQ.loading && kQ,
          onBack: () => {
            null === uQ || void 0 === uQ || uQ(), FQ.searchFor(null)
          },
          children: mQ
        }), qQ, FQ.shown ? DQ : (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsx)(pq, {
            browser: FQ,
            recentLabel: vQ,
            children: mQ
          }), FQ.browsing ? (0, HQ.jsx)(eq, {
            items: FQ.catalogue,
            query: FQ.query,
            onPick: FQ.pickItem
          }) : DQ]
        })]
      })
    }

    function Sq(QQ, FQ) {
      const wQ = QQ.map((QQ => {
        let {
          meta: FQ
        } = QQ;
        return FQ.pricePerItem
      }));
      return "min" === FQ ? Math.min(...wQ) : Math.max(...wQ)
    }
    var iq = wQ(6386);
    const Wq = (0, LQ.memo)((function(QQ) {
      var FQ;
      const {
        t: wQ
      } = (0, DQ.y)(), LQ = null === QQ.seller, qQ = QQ.quantity * QQ.pricePerItem;
      return (0, HQ.jsxs)("div", {
        className: QQ.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, HQ.jsx)(fL, {
          item: QQ.item,
          amount: QQ.quantity,
          size: QQ.grid ? "big" : "normal",
          tier: QQ.tier
        }), (0, HQ.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, HQ.jsx)("b", {
            children: (0, HQ.jsx)(OL.e, {
              text: null !== (FQ = QQ.title) && void 0 !== FQ ? FQ : `${QQ.quantity}x ${QQ.item}`
            })
          }), (0, HQ.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, HQ.jsx)("span", {
              children: LQ ? wQ("smpShop:you") : (0, HQ.jsx)(OL.e, {
                text: [{
                  entityName: QQ.seller
                }]
              })
            }), (0, HQ.jsx)("span", {
              children: wQ("smpShop:timeLeft", {
                time: Dq(QQ.expiresAt)
              })
            })]
          })]
        }), (0, HQ.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, HQ.jsx)(VL, {
            amount: QQ.pricePerItem
          }), (0, HQ.jsx)("small", {
            children: wQ("smpShop:each")
          })]
        }), (0, HQ.jsx)(mQ.f, {
          className: "SmpBuyButton",
          disabled: LQ || !QQ.canAfford && !QQ.busy,
          loading: QQ.busy,
          onClick: () => {
            QQ.onBuy(QQ.itemKey)
          },
          children: LQ ? wQ("smpShop:yours") : (0, HQ.jsx)(VL, {
            amount: qQ
          })
        })]
      })
    }));

    function Rq(QQ) {
      let {
        view: FQ,
        onChange: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, DQ.y)();
      return (0, HQ.jsx)(aL.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: LQ("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, HQ.jsx)(kQ.c, {
            name: "list"
          }),
          ariaLabel: LQ("smpShop:listView")
        }, {
          value: "grid",
          label: (0, HQ.jsx)(kQ.c, {
            name: "grid-2"
          }),
          ariaLabel: LQ("smpShop:gridView")
        }],
        value: FQ,
        onChange: wQ
      })
    }

    function Oq(QQ) {
      let {
        entries: FQ,
        view: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, DQ.y)(), qQ = xq(), oQ = "grid" === wQ;
      return (0, HQ.jsxs)(HQ.Fragment, {
        children: [!oQ && (0, HQ.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, HQ.jsx)("span", {}), (0, HQ.jsx)("span", {
            children: LQ("smpShop:columnItem")
          }), (0, HQ.jsx)("span", {
            children: LQ("smpShop:columnPriceEach")
          }), (0, HQ.jsx)("span", {
            children: LQ("smpShop:columnTotal")
          })]
        }), (0, HQ.jsx)(Aq.e, {
          lazyLoadedClassName: oQ ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: qq,
          observerUpdateDeps: [FQ.length],
          children: FQ.map((QQ => {
            var FQ, wQ;
            let {
              key: LQ,
              item: DQ,
              meta: kQ
            } = QQ;
            const vQ = kQ.quantity * kQ.pricePerItem;
            return (0, HQ.jsx)(Wq, {
              itemKey: LQ,
              item: kQ.item,
              title: DQ.customTitle,
              quantity: kQ.quantity,
              pricePerItem: kQ.pricePerItem,
              seller: kQ.seller,
              expiresAt: kQ.expiresAt,
              tier: null !== (FQ = null === (wQ = DQ.enchant) || void 0 === wQ ? void 0 : wQ.tier) && void 0 !== FQ ? FQ : null,
              busy: qQ.isPending(LQ) || null !== kQ.seller && !1 === DQ.canBuy,
              canAfford: qQ.canAfford(DQ, vQ),
              grid: oQ,
              onBuy: qQ.act
            }, LQ)
          }))
        }, wQ)]
      })
    }
    const sq = [1, 10, 100],
      rq = [1, 10, 100, 999];

    function Iq(QQ) {
      var FQ, wQ, qQ, vQ, uQ, bQ, YQ, xQ, AQ, tQ;
      const {
        t: eQ
      } = (0, DQ.y)(), MQ = xq(), {
        creator: GQ,
        mode: pQ
      } = QQ, [CQ, SQ] = (0, LQ.useState)(null !== (FQ = null === GQ || void 0 === GQ ? void 0 : GQ.meta.item) && void 0 !== FQ ? FQ : null), [iQ, WQ] = (0, LQ.useState)(1), [RQ, OQ] = (0, LQ.useState)(0), [sQ, rQ] = (0, LQ.useState)(""), [IQ, UQ] = (0, LQ.useState)(0), NQ = (0, LQ.useRef)(CQ), TQ = (0, LQ.useRef)(!1), [KQ, zQ] = (0, LQ.useState)(!1), lQ = null !== (wQ = null === GQ || void 0 === GQ ? void 0 : GQ.meta.item) && void 0 !== wQ ? wQ : null, jQ = null !== (qQ = null === GQ || void 0 === GQ ? void 0 : GQ.meta.owned) && void 0 !== qQ ? qQ : 0;
      (0, LQ.useEffect)((() => {
        QQ.searching || null === lQ || lQ === NQ.current || (NQ.current = lQ, TQ.current = !1, SQ(lQ), OQ(0), WQ("list" === pQ ? Math.max(1, jQ) : 1))
      }), [lQ, QQ.searching]);
      const aQ = !!GQ && !!CQ && GQ.meta.item === CQ,
        XQ = aQ ? GQ.meta.owned : null !== (vQ = null === (uQ = QQ.inventory) || void 0 === uQ || null === (bQ = uQ.find((QQ => QQ.item === CQ))) || void 0 === bQ ? void 0 : bQ.quantity) && void 0 !== vQ ? vQ : 0,
        fQ = "list" === pQ ? Math.max(1, XQ) : 45954,
        VQ = null !== (YQ = QQ.prices[0]) && void 0 !== YQ ? YQ : null,
        hQ = QQ.prices.length ? Math.round(QQ.prices.reduce(((QQ, FQ) => QQ + FQ), 0) / QQ.prices.length) : null,
        JQ = null === (xQ = QQ.inventory) || void 0 === xQ || null === (AQ = xQ.find((QQ => QQ.item === CQ))) || void 0 === AQ ? void 0 : AQ.sellPrice;
      (0, LQ.useEffect)((() => {
        var QQ;
        aQ && (WQ((QQ => "list" === pQ ? Math.min(Math.max(1, QQ), Math.max(1, XQ)) : QQ)), TQ.current || OQ(null !== (QQ = null !== VQ && void 0 !== VQ ? VQ : hQ) && void 0 !== QQ ? QQ : Math.max(1, null !== JQ && void 0 !== JQ ? JQ : 1)))
      }), [aQ, XQ, CQ, VQ, hQ]);
      const EQ = QQ => {
          TQ.current = !0, OQ(QQ)
        },
        nQ = FQ => {
          var wQ, LQ, qQ;
          NQ.current = FQ, TQ.current = !1, zQ(!1), rQ(""), UQ((QQ => QQ + 1)), SQ(FQ), OQ(0), WQ("list" === pQ && null !== (wQ = null === (LQ = QQ.inventory) || void 0 === LQ || null === (qQ = LQ.find((QQ => QQ.item === FQ))) || void 0 === qQ ? void 0 : qQ.quantity) && void 0 !== wQ ? wQ : 1), (null === GQ || void 0 === GQ ? void 0 : GQ.meta.item) !== FQ && QQ.onPickItem(FQ)
        },
        gQ = iQ * RQ,
        PQ = "list" === pQ && null !== GQ && void 0 !== GQ && GQ.meta.fee ? function(QQ, FQ) {
          const wQ = Math.max(0, FQ - QQ.taxFreeAllowance);
          return Math.ceil(Math.round(wQ * QQ.rate * 1e6) / 1e6)
        }(GQ.meta.fee, gQ) : 0,
        ZQ = !!GQ && MQ.isPending(GQ.key),
        yQ = aQ && !QQ.searching && iQ >= 1 && RQ >= 1 && ("order" === pQ || XQ >= iQ) && !ZQ,
        BQ = !!CQ && !aQ && !QQ.searching && iQ >= 1 && RQ >= 1,
        dQ = () => {
          yQ ? MQ.act(GQ.key, `${iQ}|${RQ}`) : BQ && (QQ.onPickItem(CQ), zQ(!0))
        };
      (0, LQ.useEffect)((() => {
        KQ && aQ && !QQ.searching && (zQ(!1), dQ())
      }), [KQ, aQ, QQ.searching]);
      const QF = !!CQ && !aQ && (QQ.searching || KQ),
        FF = CQ ? uq(QQ.names, CQ) : "",
        wF = (0, LQ.useMemo)((() => mq(QQ.catalogue, sQ).slice(0, 8)), [QQ.catalogue, sQ]),
        LF = ("list" === pQ ? sq.filter((QQ => QQ < XQ)) : rq).map((QQ => ({
          value: QQ,
          label: String(QQ)
        })));
      "list" === pQ && XQ > 0 && LF.push({
        value: XQ,
        label: eQ("smpShop:all", {
          count: XQ
        })
      });
      const qF = [];
      return null !== VQ && (VQ > 1 && qF.push({
        value: VQ - 1,
        label: eQ("smpShop:undercut", {
          price: jL(VQ - 1)
        })
      }), qF.push({
        value: VQ,
        label: eQ("smpShop:lowest", {
          price: jL(VQ)
        })
      })), null !== hQ && hQ !== VQ && qF.push({
        value: hQ,
        label: eQ("smpShop:average", {
          price: jL(hQ)
        })
      }), (0, HQ.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, HQ.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, HQ.jsx)("b", {
            children: eQ("list" === pQ ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, HQ.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": eQ("smpShop:close"),
            onClick: QQ.onClose,
            children: (0, HQ.jsx)(kQ.c, {
              name: "xmark"
            })
          })]
        }), "list" === pQ && (0, HQ.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (tQ = QQ.inventory) && void 0 !== tQ && tQ.length ? QQ.inventory.map((QQ => {
            let {
              item: FQ,
              quantity: wQ
            } = QQ;
            return (0, HQ.jsx)("button", {
              type: "button",
              title: FQ,
              className: oQ()("SmpPickerSlot", {
                SmpPickerSlotOn: FQ === CQ
              }),
              onClick: () => {
                nQ(FQ)
              },
              children: (0, HQ.jsx)(fL, {
                item: FQ,
                amount: wQ
              })
            }, FQ)
          })) : (0, HQ.jsx)("span", {
            className: "SmpMuted",
            children: eQ("smpShop:nothingToList")
          })
        }), ("list" === pQ || !CQ) && (0, HQ.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, HQ.jsx)(cQ.b, {
            className: "SmpSearchInput",
            placeholderText: eQ("list" === pQ ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: sQ,
            onValueChange: rQ,
            blurOnEnter: !0,
            onEnter: () => {
              wF[0] && nQ(wF[0].name)
            }
          }, IQ), wF.length > 0 && (0, HQ.jsx)("div", {
            className: "SmpPicker",
            children: wF.map((QQ => {
              let {
                name: FQ
              } = QQ;
              return (0, HQ.jsx)("button", {
                type: "button",
                title: FQ,
                className: oQ()("SmpPickerSlot", {
                  SmpPickerSlotOn: FQ === CQ
                }),
                onClick: () => {
                  nQ(FQ)
                },
                children: (0, HQ.jsx)(fL, {
                  item: FQ
                })
              }, FQ)
            }))
          })]
        }), CQ && (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsxs)("div", {
            className: "SmpPickedName",
            children: [FF, QF && (0, HQ.jsx)(gL, {})]
          }), (0, HQ.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, HQ.jsxs)("div", {
              className: "SmpField",
              children: [(0, HQ.jsxs)("span", {
                children: [eQ("smpShop:quantity"), "list" === pQ && aQ && (0, HQ.jsx)("small", {
                  children: eQ("smpShop:youHave", {
                    count: XQ
                  })
                })]
              }), (0, HQ.jsx)(PL, {
                value: iQ,
                onChange: WQ,
                max: fQ,
                label: eQ("smpShop:quantity")
              }), (0, HQ.jsx)(nL, {
                options: LF,
                value: iQ,
                onChange: WQ,
                ariaLabel: eQ("smpShop:quantity")
              })]
            }), (0, HQ.jsxs)("div", {
              className: "SmpField",
              children: [(0, HQ.jsx)("span", {
                children: eQ("smpShop:pricePerItem")
              }), (0, HQ.jsx)(PL, {
                value: Math.max(1, RQ),
                onChange: EQ,
                max: 9999999,
                step: ZL,
                label: eQ("smpShop:pricePerItem")
              }), (0, HQ.jsx)(nL, {
                options: qF,
                value: RQ,
                onChange: EQ,
                ariaLabel: eQ("smpShop:pricePerItem")
              })]
            })]
          }), "list" === pQ && (0, HQ.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, HQ.jsxs)("span", {
              children: [eQ("smpShop:youGet"), " ", (0, HQ.jsx)(VL, {
                amount: Math.max(0, gQ - PQ),
                exact: !0
              })]
            }), (0, HQ.jsx)("small", {
              children: PQ > 0 ? eQ("smpShop:listingFee", {
                fee: PQ.toLocaleString("en-US")
              }) : eQ("smpShop:listingRules")
            })]
          }), (0, HQ.jsx)(mQ.s, {
            className: "SmpSubmit",
            disabled: !yQ && !BQ && !ZQ,
            loading: ZQ || QF || aQ && QQ.searching,
            onClick: dQ,
            children: "list" === pQ ? eQ("smpShop:listButton", {
              count: iQ,
              item: FF
            }) : (0, HQ.jsxs)(HQ.Fragment, {
              children: [eQ("smpShop:orderButton", {
                count: iQ,
                item: FF
              }), " ", RQ >= 1 && (0, HQ.jsx)(VL, {
                amount: gQ
              })]
            })
          })]
        })]
      })
    }

    function Uq() {
      var QQ;
      const {
        t: FQ
      } = (0, DQ.y)(), wQ = xq(), qQ = null === (QQ = wQ.shopInfo[wQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, oQ = Lq(qQ, "search"), kQ = Lq(qQ, "creator"), vQ = wq(qQ, "enchantedCreator"), uQ = wq(qQ, "listing"), bQ = Lq(qQ, "empty"), YQ = Mq(oQ, uQ.length > 0 || null !== bQ), {
        searched: xQ,
        shown: AQ,
        loading: tQ
      } = YQ, [eQ, MQ] = (0, LQ.useState)(!1), [GQ, pQ] = function() {
        const [QQ, FQ] = (0, iq.b)("smpMarketView", "list");
        return ["grid" === QQ ? "grid" : "list", FQ]
      }(), cQ = "grid" === GQ, CQ = (0, LQ.useMemo)((() => uQ.filter((QQ => {
        let {
          meta: FQ
        } = QQ;
        return null !== FQ.seller && FQ.item === xQ
      })).map((QQ => {
        let {
          meta: FQ
        } = QQ;
        return FQ.pricePerItem
      })).sort(((QQ, FQ) => QQ - FQ))), [uQ, xQ]), SQ = (0, LQ.useMemo)((() => {
        const QQ = new Set(YQ.catalogue.map((QQ => {
          let {
            name: FQ
          } = QQ;
          return FQ
        })));
        return function(QQ) {
          for (const FQ in QQ)
            if ("sell" === QQ[FQ].smp) return wq(QQ[FQ].items, "sell").filter((QQ => {
              let {
                item: FQ
              } = QQ;
              return !FQ.enchant
            })).map((QQ => {
              let {
                meta: FQ
              } = QQ;
              return {
                item: FQ.item,
                quantity: FQ.quantity,
                sellPrice: FQ.pricePerItem
              }
            }));
          return []
        }(wQ.shopInfo).filter((FQ => {
          let {
            item: wQ
          } = FQ;
          return QQ.has(wQ)
        }))
      }), [wQ.shopInfo, YQ.catalogue]);
      return (0, HQ.jsx)(Cq, {
        browser: YQ,
        className: "SmpMarketTab",
        recentLabel: FQ("smpShop:recentlyListed"),
        action: (0, HQ.jsx)(mQ.s, {
          className: "SmpSellButton",
          onClick: () => {
            MQ((QQ => !QQ))
          },
          children: FQ("smpShop:sell")
        }),
        above: eQ && (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsx)(Iq, {
            mode: "list",
            creator: kQ,
            inventory: SQ,
            catalogue: YQ.catalogue,
            names: YQ.names,
            searching: tQ,
            prices: CQ,
            onPickItem: YQ.searchFor,
            onClose: () => {
              MQ(!1)
            }
          }), vQ.length > 0 && (0, HQ.jsx)(Nq, {
            entries: vQ
          })]
        }),
        listControls: (0, HQ.jsx)(Rq, {
          view: GQ,
          onChange: pQ
        }),
        summary: AQ && (uQ.length > 0 ? FQ(1 === uQ.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: uQ.length,
          price: jL(Sq(uQ, "min"))
        }) : FQ("smpShop:noOneSelling", {
          item: uq(YQ.names, AQ)
        })),
        list: tQ ? (0, HQ.jsx)(hL, {
          grid: cQ
        }) : uQ.length > 0 ? (0, HQ.jsx)(Oq, {
          entries: uQ,
          view: GQ
        }) : bQ ? (0, HQ.jsx)(EL, {
          entry: bQ
        }) : (0, HQ.jsx)(hL, {
          count: 3,
          grid: cQ
        })
      })
    }

    function Nq(QQ) {
      let {
        entries: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, DQ.y)(), qQ = xq(), [oQ, kQ] = (0, LQ.useState)({});
      return (0, HQ.jsx)("div", {
        className: "SmpList",
        children: FQ.map((QQ => {
          var FQ, LQ, DQ;
          let {
            key: vQ,
            item: uQ,
            meta: bQ
          } = QQ;
          const YQ = null !== (FQ = oQ[vQ]) && void 0 !== FQ ? FQ : 1;
          return (0, HQ.jsxs)("div", {
            className: "SmpRow",
            children: [(0, HQ.jsx)(fL, {
              item: bQ.item,
              amount: bQ.quantity,
              tier: null !== (LQ = null === (DQ = uQ.enchant) || void 0 === DQ ? void 0 : DQ.tier) && void 0 !== LQ ? LQ : null
            }), (0, HQ.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, HQ.jsx)("b", {
                children: (0, HQ.jsx)(OL.e, {
                  text: uQ.customTitle
                })
              }), (0, HQ.jsx)("small", {
                children: wQ("smpShop:enchantedListing")
              })]
            }), (0, HQ.jsx)(PL, {
              value: YQ,
              onChange: QQ => {
                kQ({
                  ...oQ,
                  [vQ]: QQ
                })
              },
              max: 9999999,
              step: ZL,
              label: wQ("smpShop:pricePerItem")
            }), (0, HQ.jsxs)(mQ.s, {
              loading: qQ.isPending(vQ),
              onClick: () => {
                qQ.act(vQ, String(YQ))
              },
              children: [wQ("smpShop:list"), " ", (0, HQ.jsx)(VL, {
                amount: YQ
              })]
            })]
          }, vQ)
        }))
      })
    }
    const Tq = (0, LQ.memo)((function(QQ) {
      let {
        itemKey: FQ,
        item: wQ,
        quantity: LQ,
        pricePerItem: qQ,
        tier: DQ,
        selected: kQ,
        onSelect: vQ
      } = QQ;
      return (0, HQ.jsxs)("button", {
        type: "button",
        className: oQ()("SmpInventorySlot", {
          SmpInventorySlotOn: kQ
        }),
        title: wQ,
        onClick: () => {
          vQ(FQ)
        },
        children: [(0, HQ.jsx)(fL, {
          item: wQ,
          amount: LQ,
          tier: DQ
        }), (0, HQ.jsx)(VL, {
          amount: qQ
        })]
      })
    }));

    function Kq() {
      var QQ;
      const {
        t: FQ
      } = (0, DQ.y)(), wQ = xq(), qQ = null === (QQ = wQ.shopInfo[wQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, kQ = wq(qQ, "sell"), vQ = Lq(qQ, "empty"), [mQ, uQ] = (0, LQ.useState)(null), [bQ, YQ] = (0, LQ.useState)({}), xQ = kQ.find((QQ => {
        let {
          key: FQ
        } = QQ;
        return FQ === mQ
      }));
      return 0 === kQ.length ? (0, HQ.jsx)("div", {
        className: "SmpScreen",
        children: (0, HQ.jsx)(JL, {
          title: vQ ? (0, HQ.jsx)(OL.e, {
            text: vQ.item.customTitle
          }) : FQ("smpShop:nothingToSell"),
          children: vQ && (0, HQ.jsx)(OL.e, {
            text: vQ.item.description
          })
        })
      }) : (0, HQ.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, HQ.jsx)("div", {
          className: "SmpInventoryGrid",
          children: kQ.map((QQ => {
            var FQ, wQ;
            let {
              key: LQ,
              item: qQ,
              meta: oQ
            } = QQ;
            return (0, HQ.jsx)(Tq, {
              itemKey: LQ,
              item: oQ.item,
              quantity: oQ.quantity,
              pricePerItem: oQ.pricePerItem,
              tier: null !== (FQ = null === (wQ = qQ.enchant) || void 0 === wQ ? void 0 : wQ.tier) && void 0 !== FQ ? FQ : null,
              selected: LQ === mQ,
              onSelect: uQ
            }, LQ)
          }))
        }), (0, HQ.jsx)("div", {
          className: oQ()("SmpSellBar", {
            SmpSellBarIdle: !xQ
          }),
          children: xQ ? (0, HQ.jsx)(zq, {
            entry: xQ,
            choice: Hq(xQ.item, bQ[xQ.key]),
            onChoose: QQ => {
              YQ({
                ...bQ,
                [xQ.key]: QQ
              })
            }
          }) : (0, HQ.jsx)("span", {
            className: "SmpMuted",
            children: FQ("smpShop:tapToSell")
          })
        })]
      })
    }

    function zq(QQ) {
      var FQ, wQ, LQ, qQ;
      let {
        entry: oQ,
        choice: kQ,
        onChoose: vQ
      } = QQ;
      const {
        t: uQ
      } = (0, DQ.y)(), bQ = xq(), {
        key: YQ,
        item: xQ,
        meta: AQ
      } = oQ, tQ = kq("dropdown" === (null === (FQ = xQ.userInput) || void 0 === FQ ? void 0 : FQ.type) ? xQ.userInput.dropdownOptions : []), eQ = null === kQ ? 0 : -(0, SL.c)(xQ, kQ);
      return (0, HQ.jsxs)(HQ.Fragment, {
        children: [(0, HQ.jsx)(fL, {
          item: AQ.item,
          amount: AQ.quantity,
          tier: null !== (wQ = null === (LQ = xQ.enchant) || void 0 === LQ ? void 0 : LQ.tier) && void 0 !== wQ ? wQ : null
        }), (0, HQ.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, HQ.jsx)("b", {
            children: (0, HQ.jsx)(OL.e, {
              text: null !== (qQ = xQ.customTitle) && void 0 !== qQ ? qQ : AQ.item
            })
          }), (0, HQ.jsx)("small", {
            children: uQ("smpShop:sellEach", {
              count: AQ.quantity
            })
          })]
        }), (0, HQ.jsx)(nL, {
          options: tQ.map((QQ => {
            let {
              label: FQ,
              quantity: wQ,
              isAll: LQ
            } = QQ;
            return {
              value: FQ,
              label: LQ ? uQ("smpShop:all", {
                count: wQ
              }) : String(wQ)
            }
          })),
          value: kQ,
          onChange: vQ,
          ariaLabel: uQ("smpShop:quantity")
        }), (0, HQ.jsxs)(mQ.s, {
          loading: bQ.isPending(YQ),
          disabled: null === kQ,
          onClick: () => {
            bQ.act(YQ, kQ)
          },
          children: [uQ("smpShop:sellButton"), " ", (0, HQ.jsx)(VL, {
            amount: eQ
          })]
        })]
      })
    }

    function lq() {
      var QQ;
      const {
        t: FQ
      } = (0, DQ.y)(), wQ = xq(), LQ = null === (QQ = wQ.shopInfo[wQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, qQ = wq(LQ, "collect"), oQ = wq(LQ, "myListing"), kQ = (QQ, FQ) => wQ.isPending(QQ) || !1 === FQ.canBuy;
      return (0, HQ.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, HQ.jsx)("h3", {
          className: "SmpSectionTitle",
          children: FQ("smpShop:readyToCollect")
        }), qQ.length > 0 ? (0, HQ.jsx)("div", {
          className: "SmpList",
          children: qQ.map((QQ => {
            var LQ, qQ;
            let {
              key: oQ,
              item: DQ,
              meta: vQ
            } = QQ;
            return (0, HQ.jsxs)("div", {
              className: "SmpRow",
              children: [(0, HQ.jsx)(fL, {
                item: "sold" === vQ.type ? "Gold Coin" : vQ.item,
                amount: "sold" === vQ.type ? 0 : vQ.quantity,
                tier: null !== (LQ = null === (qQ = DQ.enchant) || void 0 === qQ ? void 0 : qQ.tier) && void 0 !== LQ ? LQ : null
              }), (0, HQ.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, HQ.jsx)("b", {
                  children: (0, HQ.jsx)(OL.e, {
                    text: DQ.customTitle
                  })
                }), (0, HQ.jsx)("small", {
                  children: (0, HQ.jsx)(OL.e, {
                    text: DQ.description
                  })
                })]
              }), (0, HQ.jsx)(mQ.m, {
                loading: kQ(oQ, DQ),
                onClick: () => {
                  wQ.act(oQ)
                },
                children: FQ("smpShop:collect")
              })]
            }, oQ)
          }))
        }) : (0, HQ.jsx)(JL, {
          title: FQ("smpShop:nothingToCollect"),
          children: FQ("smpShop:nothingToCollectHint")
        }), (0, HQ.jsx)("h3", {
          className: "SmpSectionTitle",
          children: FQ("smpShop:activeListings", {
            count: oQ.length
          })
        }), oQ.length > 0 ? (0, HQ.jsx)("div", {
          className: "SmpList",
          children: oQ.map((QQ => {
            var LQ, qQ;
            let {
              key: oQ,
              item: DQ,
              meta: vQ
            } = QQ;
            return (0, HQ.jsxs)("div", {
              className: "SmpRow",
              children: [(0, HQ.jsx)(fL, {
                item: vQ.item,
                amount: vQ.quantity,
                tier: null !== (LQ = null === (qQ = DQ.enchant) || void 0 === qQ ? void 0 : qQ.tier) && void 0 !== LQ ? LQ : null
              }), (0, HQ.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, HQ.jsx)("b", {
                  children: (0, HQ.jsx)(OL.e, {
                    text: DQ.customTitle
                  })
                }), (0, HQ.jsx)("small", {
                  children: FQ("smpShop:timeLeft", {
                    time: Dq(vQ.expiresAt)
                  })
                })]
              }), (0, HQ.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, HQ.jsx)(VL, {
                  amount: vQ.pricePerItem
                }), (0, HQ.jsx)("small", {
                  children: FQ("smpShop:each")
                })]
              }), (0, HQ.jsx)(mQ.F, {
                loading: kQ(oQ, DQ),
                onClick: () => {
                  wQ.act(oQ)
                },
                children: FQ("smpShop:cancel")
              })]
            }, oQ)
          }))
        }) : (0, HQ.jsx)(JL, {
          title: FQ("smpShop:noActiveListings"),
          children: FQ("smpShop:noActiveListingsHint")
        })]
      })
    }

    function jq(QQ) {
      let {
        done: FQ,
        of: wQ
      } = QQ;
      return (0, HQ.jsx)("span", {
        className: "SmpProgress",
        children: (0, HQ.jsx)("i", {
          style: {
            width: `${Math.min(100,FQ/Math.max(1,wQ)*100)}%`
          }
        })
      })
    }

    function aq(QQ) {
      var FQ, wQ, LQ;
      let {
        entry: qQ,
        choice: oQ,
        onChoose: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, DQ.y)(), uQ = xq(), {
        key: bQ,
        item: YQ,
        meta: xQ
      } = qQ, AQ = "dropdown" === (null === (FQ = YQ.userInput) || void 0 === FQ ? void 0 : FQ.type) ? YQ.userInput.dropdownOptions : [], tQ = !0 === xQ.processing, eQ = null !== xQ.creator && (xQ.owned > 0 || tQ), MQ = eQ && xQ.owned > 0 ? kq(AQ) : [], GQ = null === oQ ? 0 : null !== (wQ = null === (LQ = MQ.find((QQ => QQ.label === oQ))) || void 0 === LQ ? void 0 : LQ.quantity) && void 0 !== wQ ? wQ : 0;
      return (0, HQ.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, HQ.jsx)(fL, {
          item: xQ.item
        }), (0, HQ.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, HQ.jsx)("b", {
            children: (0, HQ.jsx)(OL.e, {
              text: YQ.customTitle
            })
          }), (0, HQ.jsxs)("small", {
            children: [(0, HQ.jsx)(VL, {
              amount: xQ.pricePerItem
            }), " ", vQ("smpShop:each"), " \xb7", " ", null === xQ.creator ? vQ("smpShop:you") : (0, HQ.jsx)(OL.e, {
              text: [{
                entityName: xQ.creator
              }]
            })]
          }), (0, HQ.jsx)(jq, {
            done: xQ.delivered,
            of: xQ.wanted
          })]
        }), eQ ? (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsx)(nL, {
            options: MQ.map((QQ => {
              let {
                label: FQ,
                quantity: wQ,
                isAll: LQ
              } = QQ;
              return {
                value: FQ,
                label: LQ ? vQ("smpShop:max", {
                  count: wQ
                }) : String(wQ)
              }
            })),
            value: oQ,
            onChange: kQ,
            ariaLabel: vQ("smpShop:quantity")
          }), (0, HQ.jsxs)(mQ.s, {
            loading: uQ.isPending(bQ) || tQ,
            disabled: null === oQ,
            onClick: () => {
              uQ.act(bQ, oQ)
            },
            children: [vQ("smpShop:deliver"), " ", (0, HQ.jsx)(VL, {
              amount: GQ * xQ.pricePerItem
            })]
          })]
        }) : (0, HQ.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === xQ.creator ? vQ("smpShop:yourOrder") : vQ("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Xq() {
      var QQ;
      const {
        t: FQ
      } = (0, DQ.y)(), wQ = xq(), qQ = null === (QQ = wQ.shopInfo[wQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, oQ = Lq(qQ, "search"), kQ = Lq(qQ, "creator"), vQ = wq(qQ, "order"), uQ = Lq(qQ, "empty"), bQ = Mq(oQ, vQ.length > 0 || null !== uQ), [YQ, xQ] = (0, LQ.useState)(!1), [AQ, tQ] = (0, LQ.useState)({});
      return (0, HQ.jsx)(Cq, {
        browser: bQ,
        recentLabel: FQ("smpShop:recentOrders"),
        action: (0, HQ.jsx)(mQ.s, {
          onClick: () => {
            xQ((QQ => !QQ))
          },
          children: FQ("smpShop:createOrder")
        }),
        above: YQ && (0, HQ.jsx)(Iq, {
          mode: "order",
          creator: kQ,
          catalogue: bQ.catalogue,
          names: bQ.names,
          searching: bQ.loading,
          prices: [],
          onPickItem: bQ.searchFor,
          onClose: () => {
            xQ(!1)
          }
        }),
        onBack: () => {
          xQ(!1)
        },
        summary: vQ.length > 0 && FQ(1 === vQ.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: vQ.length,
          price: jL(Sq(vQ, "max"))
        }),
        list: bQ.loading ? (0, HQ.jsx)(hL, {}) : vQ.length > 0 ? (0, HQ.jsx)(Aq.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: qq,
          observerUpdateDeps: [vQ.length],
          children: vQ.map((QQ => (0, HQ.jsx)(aq, {
            entry: QQ,
            choice: Hq(QQ.item, AQ[QQ.key]),
            onChoose: FQ => {
              tQ({
                ...AQ,
                [QQ.key]: FQ
              })
            }
          }, QQ.key)))
        }) : uQ ? (0, HQ.jsx)(EL, {
          entry: uQ
        }) : (0, HQ.jsx)(hL, {
          count: 3
        })
      })
    }

    function fq() {
      var QQ;
      const {
        t: FQ
      } = (0, DQ.y)(), wQ = xq(), LQ = wq(null === (QQ = wQ.shopInfo[wQ.categoryKey]) || void 0 === QQ ? void 0 : QQ.items, "myOrder");
      return 0 === LQ.length ? (0, HQ.jsx)("div", {
        className: "SmpScreen",
        children: (0, HQ.jsx)(JL, {
          title: FQ("smpShop:noOrders"),
          children: FQ("smpShop:noOrdersHint")
        })
      }) : (0, HQ.jsx)("div", {
        className: "SmpScreen",
        children: (0, HQ.jsx)("div", {
          className: "SmpList",
          children: LQ.map((QQ => {
            let {
              key: LQ,
              item: qQ,
              meta: oQ
            } = QQ;
            const DQ = wQ.isPending(LQ) || !1 === qQ.canBuy;
            return (0, HQ.jsxs)("div", {
              className: "SmpRow",
              children: [(0, HQ.jsx)(fL, {
                item: oQ.item,
                amount: oQ.collectable
              }), (0, HQ.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, HQ.jsx)("b", {
                  children: (0, HQ.jsx)(OL.e, {
                    text: qQ.customTitle
                  })
                }), (0, HQ.jsxs)("small", {
                  children: [(0, HQ.jsx)(VL, {
                    amount: oQ.pricePerItem
                  }), " ", FQ("smpShop:each"), oQ.collectable > 0 && ` \xb7 ${FQ("smpShop:readyCount",{count:oQ.collectable})}`]
                }), (0, HQ.jsx)(jq, {
                  done: oQ.delivered,
                  of: oQ.wanted
                })]
              }), oQ.collectable > 0 ? (0, HQ.jsx)(mQ.m, {
                loading: DQ,
                onClick: () => {
                  wQ.act(LQ)
                },
                children: FQ("smpShop:collectCount", {
                  count: oQ.collectable
                })
              }) : (0, HQ.jsx)(mQ.F, {
                loading: DQ,
                onClick: () => {
                  wQ.act(LQ)
                },
                children: FQ("smpShop:cancel")
              })]
            }, LQ)
          }))
        })
      })
    }
    const Vq = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      hq = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Jq(QQ, FQ) {
      let wQ = !1;
      const LQ = {};
      for (const qQ in QQ) FQ(qQ, QQ[qQ]) ? LQ[qQ] = QQ[qQ] : wQ = !0;
      return wQ ? LQ : QQ
    }

    function Eq(QQ) {
      var FQ, wQ, qQ, vQ;
      const {
        show: mQ,
        shopInfo: uQ,
        selectedCategoryKey: bQ
      } = QQ, {
        t: YQ
      } = (0, DQ.y)(), xQ = null !== bQ && void 0 !== bQ ? bQ : "", AQ = Fq(uQ, xQ), tQ = null === (FQ = uQ[xQ]) || void 0 === FQ ? void 0 : FQ.items, eQ = null !== AQ, [MQ, GQ] = (0, LQ.useState)({}), [pQ, cQ] = (0, LQ.useState)([]), [CQ, SQ] = (0, LQ.useState)(!1), [iQ, WQ] = (0, LQ.useState)(null), [, RQ] = (0, LQ.useState)(0), OQ = (0, LQ.useRef)(0), sQ = (0, LQ.useRef)({}), rQ = (0, LQ.useRef)({
        items: tQ,
        pending: MQ,
        shopInfo: uQ,
        active: eQ,
        canAfford: QQ.canAfford,
        buy: QQ.buy
      });
      rQ.current = {
        items: tQ,
        pending: MQ,
        shopInfo: uQ,
        active: eQ,
        canAfford: QQ.canAfford,
        buy: QQ.buy
      };
      const IQ = (0, LQ.useCallback)((QQ => {
        OQ.current++;
        const FQ = OQ.current;
        cQ((wQ => [{
          id: FQ,
          text: QQ
        }, ...wQ].slice(0, 8))), WQ(FQ)
      }), []);
      (0, LQ.useEffect)((() => {
        if (null === iQ) return;
        const QQ = setTimeout((() => {
          WQ(null)
        }), 3e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [iQ]), (0, LQ.useEffect)((() => {
        const FQ = QQ.message;
        if (!FQ) return;
        const {
          shopInfo: wQ,
          active: LQ,
          items: qQ
        } = rQ.current, oQ = null !== FQ.categoryKey ? null !== Fq(wQ, FQ.categoryKey) : LQ;
        (oQ || LQ) && IQ(FQ.text), oQ && GQ((QQ => Jq(QQ, (QQ => {
          var FQ, wQ;
          return !Vq.has(null === qQ || void 0 === qQ || null === (FQ = qQ[QQ]) || void 0 === FQ || null === (wQ = FQ.smp) || void 0 === wQ ? void 0 : wQ.kind)
        }))))
      }), [QQ.message, IQ]), (0, LQ.useEffect)((() => {
        GQ((QQ => Jq(QQ, ((QQ, FQ) => bq(null === tQ || void 0 === tQ ? void 0 : tQ[QQ]) === FQ.snapshot))))
      }), [uQ, tQ]);
      const UQ = Object.keys(MQ).length > 0;
      (0, LQ.useEffect)((() => {
        if (!UQ) return;
        const QQ = setInterval((() => {
          RQ((QQ => QQ + 1));
          const QQ = Date.now(),
            {
              pending: FQ,
              items: wQ
            } = rQ.current,
            LQ = Object.keys(FQ).filter((wQ => QQ - FQ[wQ].at >= 12e3));
          if (0 === LQ.length) return;
          const qQ = LQ.some((QQ => {
            var LQ, qQ;
            return "search" !== (null === wQ || void 0 === wQ || null === (LQ = wQ[QQ]) || void 0 === LQ || null === (qQ = LQ.smp) || void 0 === qQ ? void 0 : qQ.kind) || FQ[QQ].resend
          }));
          for (const oQ of LQ) sQ.current[oQ] = QQ;
          GQ((QQ => Jq(QQ, (QQ => !LQ.includes(QQ))))), qQ && IQ(YQ("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(QQ)
        }
      }), [UQ]), (0, LQ.useEffect)((() => {
        GQ({})
      }), [xQ]), (0, LQ.useEffect)((() => {
        mQ || SQ(!1)
      }), [mQ]);
      const NQ = (0, LQ.useCallback)((function(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: LQ,
            pending: qQ,
            canAfford: oQ,
            buy: DQ
          } = rQ.current, kQ = null === LQ || void 0 === LQ ? void 0 : LQ[QQ];
          if (!kQ || QQ in qQ || !1 === kQ.canBuy) return !1;
          if (!oQ(kQ, (0, SL.c)(kQ, FQ))) return !1;
          DQ(QQ, kQ, FQ);
          const vQ = {
            snapshot: bq(kQ),
            at: Date.now(),
            resend: wQ
          };
          return rQ.current.pending = {
            ...rQ.current.pending,
            [QQ]: vQ
          }, GQ((FQ => ({
            ...FQ,
            [QQ]: vQ
          }))), !0
        }), []),
        TQ = (0, LQ.useMemo)((() => ({
          shopInfo: uQ,
          categoryKey: xQ,
          canAfford: QQ.canAfford,
          isPending: QQ => QQ in MQ,
          gaveUpAt: QQ => {
            var FQ;
            return null !== (FQ = sQ.current[QQ]) && void 0 !== FQ ? FQ : 0
          },
          act: NQ,
          notify: IQ
        })), [uQ, xQ, QQ.canAfford, MQ, NQ, IQ]),
        KQ = Math.min(...Object.values(MQ).map((QQ => QQ.at))),
        zQ = UQ && Date.now() - KQ > 1500,
        lQ = pQ.length > 1,
        jQ = null !== (wQ = null === (qQ = uQ[xQ]) || void 0 === qQ ? void 0 : qQ.customTitle) && void 0 !== wQ ? wQ : xQ,
        aQ = null === (vQ = uQ[xQ]) || void 0 === vQ ? void 0 : vQ.description;
      let XQ = null;
      return "market" === AQ ? XQ = (0, HQ.jsx)(Uq, {}) : "sell" === AQ ? XQ = (0, HQ.jsx)(Kq, {}) : "collect" === AQ ? XQ = (0, HQ.jsx)(lq, {}) : "orders" === AQ ? XQ = (0, HQ.jsx)(Xq, {}) : "myOrders" === AQ && (XQ = (0, HQ.jsx)(fq, {})), (0, HQ.jsx)(Yq.Provider, {
        value: TQ,
        children: (0, HQ.jsx)("div", {
          className: "SmpShopHost",
          hidden: !eQ,
          children: (0, HQ.jsxs)("div", {
            className: "SmpShop",
            children: [(0, HQ.jsx)("header", {
              className: "SmpHeader",
              children: (0, HQ.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, HQ.jsxs)("h2", {
                  children: [AQ && (0, HQ.jsx)(kQ.c, {
                    name: hq[AQ]
                  }), YQ(jQ)]
                }), aQ && (0, HQ.jsx)("p", {
                  children: (0, HQ.jsx)(OL.e, {
                    text: aQ
                  })
                })]
              })
            }), (0, HQ.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: mQ && XQ
            }), (0, HQ.jsxs)("button", {
              type: "button",
              className: oQ()("SmpStatus", {
                SmpStatusWaiting: UQ,
                SmpStatusFresh: !UQ && null !== iQ,
                SmpStatusHasHistory: lQ
              }),
              "aria-live": "polite",
              "aria-expanded": lQ ? CQ : void 0,
              onClick: () => {
                lQ && SQ((QQ => !QQ))
              },
              children: [UQ ? (0, HQ.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, HQ.jsx)(gL, {}), YQ(zQ ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : pQ[0] ? (0, HQ.jsx)("span", {
                className: "SmpStatusText",
                children: (0, HQ.jsx)(OL.e, {
                  text: pQ[0].text
                })
              }, pQ[0].id) : (0, HQ.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: YQ("smpShop:ready")
              }), lQ && (0, HQ.jsx)("small", {
                children: YQ("smpShop:recentMessages", {
                  count: pQ.length
                })
              })]
            }), CQ && lQ && (0, HQ.jsx)("div", {
              className: "SmpStatusHistory",
              children: pQ.map((QQ => (0, HQ.jsx)("div", {
                children: (0, HQ.jsx)(OL.e, {
                  text: QQ.text
                })
              }, QQ.id)))
            })]
          })
        })
      })
    }
    class nq {
      constructor(QQ) {
        this.info = QQ
      }
      static fromShopInfo(QQ) {
        const FQ = {};
        for (const wQ in QQ) {
          const LQ = !0 === QQ[wQ].redDot && !0 !== QQ[wQ].forceRemoveRedDot;
          FQ[wQ] = {
            redDot: LQ,
            items: {}
          };
          for (const qQ in QQ[wQ].items) {
            const LQ = QQ[wQ].items[qQ],
              oQ = !0 === LQ.redDot && !0 !== LQ.forceRemoveRedDot;
            FQ[wQ].items[qQ] = {
              redDot: oQ
            }
          }
        }
        return new nq(FQ)
      }
      anyCategoryHasRedDots() {
        for (const QQ in this.info)
          if (this.categoryHasRedDot(QQ)) return !0;
        return !1
      }
      doesCategoryExist(QQ) {
        return !(0, VF.F)(this.info[QQ])
      }
      categoryHasRedDot(QQ) {
        return !0 === this.info[QQ].redDot
      }
      updateCategoryRedDot(QQ, FQ) {
        this.info[QQ].redDot = FQ
      }
      doesItemExist(QQ, FQ) {
        return this.doesCategoryExist(QQ) && !(0, VF.F)(this.info[QQ].items[FQ])
      }
      itemHasRedDot(QQ, FQ) {
        return !0 === this.info[QQ].items[FQ].redDot
      }
      updateItemRedDot(QQ, FQ, wQ) {
        this.info[QQ].items[FQ].redDot = wQ
      }
      shallowCopy() {
        return new nq(this.info)
      }
    }

    function gq(QQ, FQ) {
      return `${QQ}\x1f${FQ}`
    }

    function Pq(QQ, FQ) {
      return !(0, VF.F)(FQ) && !(0, VF.F)(QQ) && FQ in QQ
    }
    const Zq = (0, LQ.memo)((function(QQ) {
      var FQ, wQ;
      let {
        show: qQ
      } = QQ;
      const DQ = (0, yw.g)("players", wo),
        kQ = (0, yw.g)("players", Lo),
        uQ = (0, TL.b)(),
        [YQ, xQ] = (0, LQ.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: nq.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        tQ = (0, LQ.useRef)(""),
        eQ = (0, LQ.useRef)(null),
        GQ = (0, LQ.useRef)(null),
        pQ = (0, LQ.useRef)(0),
        cQ = (0, LQ.useRef)(void 0),
        CQ = (0, LQ.useRef)(null),
        SQ = (0, LQ.useRef)(YQ),
        WQ = YQ.redDotInfo.anyCategoryHasRedDots(),
        [RQ, sQ] = (0, LQ.useState)(null),
        rQ = (0, LQ.useRef)(!1);
      let IQ = !1,
        UQ = 0,
        NQ = 0;
      if (YQ.currencyAmounts) {
        for (const QQ in YQ.currencyAmounts) {
          var TQ;
          const FQ = YQ.currencyAmounts[QQ];
          FQ.hidden || (UQ++, (null === (TQ = FQ.subtext) || void 0 === TQ ? void 0 : TQ.length) > 0 && NQ++)
        }
        IQ = UQ + NQ > 4
      }(0, LQ.useEffect)((() => {
        hF.l.GA("showShopIconRedDot", WQ, !0)
      }), [WQ]), (0, LQ.useEffect)((() => {
        MQ.gameBridge.send("setShopOpen", qQ), qQ || (clearTimeout(cQ.current), xQ((QQ => QQ.awaitingPurchase ? {
          ...QQ,
          awaitingPurchase: !1
        } : QQ)))
      }), [qQ]), (0, LQ.useEffect)((() => () => {
        MQ.gameBridge.send("setShopOpen", !1), clearTimeout(cQ.current)
      }), []), (0, LQ.useEffect)((() => {
        SQ.current = YQ
      }), [YQ]), (0, LQ.useEffect)((() => {
        if (null === RQ) return;
        return (0, UL.c)("pointerdown", (QQ => {
          const FQ = QQ.target;
          null !== FQ && void 0 !== FQ && FQ.closest(".ShopItem") || sQ(null)
        }))
      }), [RQ]);
      const KQ = QQ => {
          xQ((FQ => ({
            ...FQ,
            ...QQ
          })))
        },
        zQ = QQ => {
          var FQ;
          clearTimeout(null === (FQ = YQ.onBoughtInfo) || void 0 === FQ ? void 0 : FQ.timeout);
          const wQ = setTimeout((() => {
            KQ({
              onBoughtInfo: null
            })
          }), 3e3);
          tQ.current = QQ, KQ({
            onBoughtInfo: {
              text: QQ,
              timeout: wQ,
              categoryKey: eQ.current
            }
          })
        },
        lQ = QQ => {
          const {
            shopInfo: FQ,
            userInputsPerItem: wQ,
            redDotInfo: LQ,
            autoSelectCategory: oQ
          } = function(QQ, FQ, wQ, LQ, qQ, oQ) {
            if ((0, VF.F)(QQ) || 0 === Object.keys(QQ).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: nq.fromShopInfo({}),
              autoSelectCategory: null
            };
            const DQ = OQ.n[OQ.r].adConfig.showRewardedAds,
              kQ = {};
            let vQ = null;
            for (const tQ in QQ) {
              const FQ = QQ[tQ],
                wQ = {};
              let LQ = !1;
              for (const QQ in FQ.items) {
                const qQ = FQ.items[QQ];
                (0, SL.l)(qQ, DQ) && (wQ[QQ] = qQ, LQ = !0)
              }
              LQ && (kQ[tQ] = {
                ...FQ,
                items: wQ
              }, !0 === FQ.autoSelectCategory && (vQ = tQ))
            }
            const mQ = {},
              uQ = (QQ, FQ, LQ, DQ) => {
                var kQ, vQ;
                const uQ = gq(QQ, FQ),
                  HQ = null !== (kQ = wQ[uQ]) && void 0 !== kQ ? kQ : wQ[FQ];
                if (null !== (vQ = DQ.userInput) && void 0 !== vQ && vQ.type) switch (DQ.userInput.type) {
                  case "dropdown": {
                    var bQ;
                    const QQ = !HQ || !DQ.userInput.dropdownOptions.some((QQ => (0, SL.f)(QQ) === HQ)),
                      FQ = DQ.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === LQ || void 0 === LQ || null === (bQ = LQ.userInput) || void 0 === bQ ? void 0 : bQ.type) || JSON.stringify(LQ.userInput.dropdownOptions) !== JSON.stringify(DQ.userInput.dropdownOptions)),
                      wQ = DQ.userInput,
                      qQ = !(0, VF.F)(wQ.initialValue) && wQ.dropdownOptions.some((QQ => (0, SL.f)(QQ) === wQ.initialValue));
                    var YQ;
                    return void(QQ || FQ ? qQ ? mQ[uQ] = null !== (YQ = DQ.userInput.initialValue) && void 0 !== YQ ? YQ : null : DQ.userInput.dropdownOptions.length > 0 ? mQ[uQ] = (0, SL.f)(DQ.userInput.dropdownOptions[0]) : mQ[uQ] = null : mQ[uQ] = HQ)
                  }
                  case "text":
                  case "number":
                    var xQ, AQ, tQ;
                    return void((null === LQ || void 0 === LQ ? void 0 : LQ.userInput) !== DQ.userInput ? mQ[uQ] = null !== (xQ = null !== (AQ = DQ.userInput.initialValue) && void 0 !== AQ ? AQ : HQ) && void 0 !== xQ ? xQ : "" : mQ[uQ] = null !== (tQ = null !== HQ && void 0 !== HQ ? HQ : DQ.userInput.initialValue) && void 0 !== tQ ? tQ : "");
                  case "color":
                    var eQ, MQ, GQ;
                    return void((null === LQ || void 0 === LQ ? void 0 : LQ.userInput) !== DQ.userInput ? mQ[uQ] = null !== (eQ = null !== (MQ = DQ.userInput.initialValue) && void 0 !== MQ ? MQ : HQ) && void 0 !== eQ ? eQ : "#000000" : mQ[uQ] = null !== (GQ = null !== HQ && void 0 !== HQ ? HQ : DQ.userInput.initialValue) && void 0 !== GQ ? GQ : "#000000");
                  case "player": {
                    const QQ = (0, SL.j)(qQ, oQ, DQ.userInput);
                    return void(HQ && QQ.includes(HQ) ? mQ[uQ] = HQ : mQ[uQ] = QQ.length > 0 ? QQ[0] : null)
                  }
                }
              };
            for (const tQ in kQ)
              for (const QQ in kQ[tQ].items) {
                var HQ;
                const wQ = kQ[tQ].items[QQ];
                uQ(tQ, QQ, null === (HQ = FQ[tQ]) || void 0 === HQ ? void 0 : HQ.items[QQ], wQ)
              }
            const bQ = nq.fromShopInfo(kQ);
            for (const tQ in kQ) {
              var YQ;
              if (LQ.doesCategoryExist(tQ)) {
                (null === (YQ = FQ[tQ]) || void 0 === YQ ? void 0 : YQ.redDot) === kQ[tQ].redDot && bQ.updateCategoryRedDot(tQ, LQ.categoryHasRedDot(tQ));
                for (const QQ in kQ[tQ].items) {
                  var xQ, AQ;
                  LQ.doesItemExist(tQ, QQ) && (null === (xQ = FQ[tQ]) || void 0 === xQ || null === (AQ = xQ.items[QQ]) || void 0 === AQ ? void 0 : AQ.redDot) === kQ[tQ].items[QQ].redDot && bQ.updateItemRedDot(tQ, QQ, LQ.itemHasRedDot(tQ, QQ))
                }
              }
            }
            return {
              shopInfo: kQ,
              userInputsPerItem: mQ,
              redDotInfo: bQ,
              autoSelectCategory: vQ
            }
          }(QQ, YQ.shopInfo, YQ.userInputsPerItem, YQ.redDotInfo, DQ, kQ), vQ = {
            shopInfo: FQ,
            userInputsPerItem: wQ,
            redDotInfo: LQ
          };
          if (null === oQ || qQ)
            if (FQ[YQ.selectedCategoryKey]) vQ.selectedCategoryKey = YQ.selectedCategoryKey;
            else {
              const QQ = zL(FQ);
              vQ.selectedCategoryKey = QQ.length > 0 ? QQ[0] : null
            }
          else vQ.selectedCategoryKey = oQ;
          return 0 === Object.keys(FQ).length && qQ && iQ.c.set({
            openEverythingMenuName: null
          }), vQ
        },
        aQ = (QQ, FQ, wQ) => {
          const LQ = YQ.selectedCategoryKey,
            qQ = gq(LQ, QQ),
            oQ = null !== wQ && void 0 !== wQ ? wQ : YQ.userInputsPerItem[qQ],
            DQ = {
              categoryKey: LQ,
              itemKey: QQ,
              userInput: oQ
            };
          if (eQ.current = LQ, FQ.isRewardedAd) {
            if (Date.now() - pQ.current < 5e3) return;
            (0, oF.db)((() => {
              var wQ, LQ, oQ;
              console.log("bought rewarded ad");
              const kQ = DQ.categoryKey ? null === (wQ = SQ.current.shopInfo[DQ.categoryKey]) || void 0 === wQ ? void 0 : wQ.items[QQ] : null;
              if (!kQ || !kQ.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (LQ = FQ.userInput) || void 0 === LQ ? void 0 : LQ.type) === (null === kQ || void 0 === kQ || null === (oQ = kQ.userInput) || void 0 === oQ ? void 0 : oQ.type) ? (DQ.userInput = SQ.current.userInputsPerItem[qQ], MQ.gameBridge.send("buyShopItem", DQ), FQ.onBoughtMessage && zQ(FQ.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), pQ.current = Date.now()
          } else {
            MQ.gameBridge.send("buyShopItem", DQ), KQ({
              awaitingPurchase: !0
            }), clearTimeout(cQ.current), cQ.current = setTimeout((() => {
              CQ.current = null, KQ({
                awaitingPurchase: !1
              })
            }), 1e3);
            const QQ = (0, SL.c)(FQ, oQ);
            if (CQ.current = null, !isNaN(QQ) && Pq(YQ.currencyAmounts, FQ.currency)) {
              0 !== QQ && (CQ.current = {
                currency: FQ.currency,
                amountBefore: YQ.currencyAmounts[FQ.currency].amount
              });
              const wQ = {
                ...YQ.currencyAmounts
              };
              wQ[FQ.currency].amount -= QQ, KQ({
                currencyAmounts: wQ
              })
            }
            FQ.onBoughtMessage && zQ(FQ.onBoughtMessage)
          }
        },
        XQ = (QQ, FQ) => {
          if (null === FQ || !QQ.shopInfo[FQ]) return QQ;
          let wQ = QQ.redDotInfo;
          return wQ.categoryHasRedDot(FQ) && (wQ.updateCategoryRedDot(FQ, !1), wQ = wQ.shallowCopy()), {
            ...QQ,
            selectedCategoryKey: FQ,
            redDotInfo: wQ
          }
        },
        fQ = QQ => {
          xQ((FQ => XQ(FQ, QQ)))
        };
      (0, OF.g)(NL.k, (() => {
        xQ((QQ => {
          const FQ = (0, NL.o)(zL(QQ.shopInfo), QQ.selectedCategoryKey, (FQ => (0, NL.h)(QQ.shopInfo[FQ].items)));
          return FQ === QQ.selectedCategoryKey ? QQ : XQ(QQ, FQ)
        }))
      })), (0, OF.g)("showShopFromServer", (QQ => {
        let {
          toggle: FQ,
          Xw: wQ
        } = QQ;
        wQ && fQ(wQ), 0 === Object.keys(YQ.shopInfo).length || FQ && qQ ? iQ.c.set({
          openEverythingMenuName: null
        }) : iQ.c.set({
          openEverythingMenuName: mF.n.SHOP
        })
      })), (0, OF.g)("closeShopOnDamaged", (() => {
        qQ && iQ.c.set({
          openEverythingMenuName: null
        })
      })), (0, OF.g)("overShopInfo", (QQ => {
        zQ(QQ)
      })), (0, AQ.h)("currencyAmounts", (QQ => {
        var FQ;
        const wQ = CQ.current;
        wQ && (null === QQ || void 0 === QQ || null === (FQ = QQ[wQ.currency]) || void 0 === FQ ? void 0 : FQ.amount) === wQ.amountBefore ? KQ({
          currencyAmounts: QQ
        }) : (CQ.current = null, KQ({
          currencyAmounts: QQ,
          awaitingPurchase: !1
        }))
      })), (0, AQ.h)("shopInfo", (QQ => {
        KQ({
          ...lQ(QQ),
          awaitingPurchase: !1
        })
      }));
      const VQ = (0, LQ.useRef)({
        playerIds: DQ,
        localPlayerId: kQ
      });
      (0, LQ.useEffect)((() => {
        VQ.current.playerIds === DQ && VQ.current.localPlayerId === kQ || (VQ.current = {
          playerIds: DQ,
          localPlayerId: kQ
        }, xQ((QQ => {
          const FQ = lQ(QQ.shopInfo);
          return {
            ...QQ,
            ...FQ
          }
        })))
      }), [DQ, kQ]);
      const hQ = YQ.selectedCategoryKey,
        JQ = (QQ, FQ) => {
          var wQ, LQ;
          return (isNaN(FQ) || (0, VF.F)(QQ.currency) || Pq(YQ.currencyAmounts, QQ.currency) && FQ <= YQ.currencyAmounts[QQ.currency].amount) && (null === (wQ = QQ.canBuy) || void 0 === wQ || wQ) && !(null !== (LQ = QQ.hidden) && void 0 !== LQ && LQ)
        },
        EQ = (QQ, FQ) => {
          var wQ, LQ, qQ;
          const DQ = gq(hQ, QQ),
            kQ = YQ.shopInfo[hQ].items[QQ],
            uQ = YQ.userInputsPerItem[DQ],
            bQ = (0, SL.c)(kQ, uQ),
            xQ = JQ(kQ, bQ),
            AQ = kQ.enchant,
            tQ = AQ ? (0, jQ.ub)(null !== (wQ = kQ.customTitle) && void 0 !== wQ ? wQ : QQ, {
              colour: jQ.pb[AQ.tier]
            }) : null !== (LQ = kQ.customTitle) && void 0 !== LQ ? LQ : QQ,
            eQ = FQ => {
              const wQ = null !== FQ && void 0 !== FQ ? FQ : uQ,
                LQ = void 0 !== FQ ? (0, SL.c)(kQ, FQ) : bQ;
              JQ(kQ, LQ) && null !== wQ && aQ(QQ, kQ, FQ);
              let qQ = YQ.redDotInfo;
              qQ.itemHasRedDot(hQ, QQ) && (qQ.updateItemRedDot(hQ, QQ, !1), qQ = qQ.shallowCopy()), KQ({
                redDotInfo: qQ
              })
            };
          return (0, HQ.jsxs)("div", {
            className: oQ()("ShopItem", {
              ShopItemNoInput: !kQ.userInput,
              ShopItemNoInputCanBuy: !kQ.userInput && xQ,
              ShopItemNoInputSelected: kQ.isSelected,
              ShopItemEnchant: !!AQ
            }),
            "data-pad-focusable": !kQ.userInput || void 0,
            "data-pad-unavailable": !kQ.userInput && !xQ || void 0,
            "data-pad-repeat": null !== (qQ = (0, NL.b)(kQ)) && void 0 !== qQ ? qQ : void 0,
            "data-pad-repeat-wait": YQ.awaitingPurchase || void 0,
            onClick: () => {
              if (AQ && rQ.current) {
                if (RQ !== DQ) return void sQ(DQ);
                sQ(null)
              }
              kQ.userInput || eQ()
            },
            onPointerDown: QQ => {
              AQ && (rQ.current = (0, WL.p)(QQ))
            },
            onPointerEnter: QQ => {
              AQ && !(0, WL.p)(QQ) && sQ(DQ)
            },
            onPointerLeave: QQ => {
              AQ && !(0, WL.p)(QQ) && sQ((QQ => QQ === DQ ? null : QQ))
            },
            style: {
              zIndex: Object.keys(YQ.shopInfo[hQ].items).length - FQ
            },
            children: [YQ.redDotInfo.itemHasRedDot(hQ, QQ) && (0, HQ.jsx)(vQ.b, {
              top: "-6px",
              right: "-6px"
            }), kQ.badge && (0, HQ.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, HQ.jsx)("div", {
                className: oQ()("ShopBadgeMain", kQ.badge.type),
                children: (0, HQ.jsx)(OL.e, {
                  text: kQ.badge.text
                })
              })
            }), (0, HQ.jsx)("div", {
              className: "ShopItemLeft",
              children: kQ.image && (0, HQ.jsx)(yq, {
                item: kQ,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, HQ.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, HQ.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, HQ.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, HQ.jsx)(OL.e, {
                    text: tQ
                  })
                }), (0, HQ.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, HQ.jsx)(OL.e, {
                    text: kQ.description
                  })
                })]
              }), kQ.userInput && (0, HQ.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: QQ => {
                  QQ.stopPropagation()
                },
                children: [(0, HQ.jsx)(Qo, {
                  item: kQ,
                  currInput: uQ,
                  updateInput: FQ => {
                    ((QQ, FQ, wQ) => {
                      const LQ = gq(QQ, FQ),
                        qQ = {
                          ...YQ.userInputsPerItem
                        };
                      qQ[LQ] = wQ, KQ({
                        userInputsPerItem: qQ
                      })
                    })(hQ, QQ, FQ)
                  },
                  onSubmit: QQ => {
                    eQ(QQ)
                  }
                }), ("dropdown" !== kQ.userInput.type || !kQ.userInput.autoSubmit) && (0, HQ.jsx)(mQ.f, {
                  className: "ItemCostButton",
                  disabled: !xQ && null !== uQ,
                  onClick: () => {
                    eQ()
                  },
                  children: (0, HQ.jsx)(dq, {
                    item: kQ,
                    cost: bQ,
                    currencyAmounts: YQ.currencyAmounts
                  })
                })]
              })]
            }), !kQ.userInput && (0, HQ.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, HQ.jsx)(dq, {
                item: kQ,
                cost: bQ,
                currencyAmounts: YQ.currencyAmounts
              })
            }), AQ && RQ === DQ && (0, HQ.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, HQ.jsx)(OL.e, {
                text: tQ
              }), (0, HQ.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, HQ.jsx)(OL.e, {
                  text: (0, iL.b)("", AQ.enchantments, AQ.enchantmentData)
                })
              })]
            })]
          }, DQ)
        },
        nQ = function(QQ) {
          for (const FQ in QQ)
            if (QQ[FQ].smp) return !0;
          return !1
        }(YQ.shopInfo),
        gQ = Fq(YQ.shopInfo, hQ);
      return (0, HQ.jsx)(pL.b, {
        className: "Menu ShopBody",
        show: qQ,
        children: 0 !== Object.keys(YQ.shopInfo).length && (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, HQ.jsx)(bQ, {
              items: zL(YQ.shopInfo).map((QQ => {
                var FQ;
                return {
                  id: QQ,
                  title: null !== (FQ = YQ.shopInfo[QQ].customTitle) && void 0 !== FQ ? FQ : QQ,
                  redDot: YQ.redDotInfo.categoryHasRedDot(QQ)
                }
              })),
              link: uQ ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, KL.e)({
                    page: (0, KL.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: hQ,
              onClick: fQ,
              padStartsOnTab: (0, NL.f)(hQ)
            }), (0, HQ.jsx)("div", {
              className: "MenuSideBarFooter",
              children: YQ.currencyAmounts && Object.keys(YQ.currencyAmounts).map((QQ => {
                var FQ;
                const wQ = YQ.currencyAmounts[QQ];
                return wQ.hidden ? null : (0, HQ.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (IQ ? "SmallText" : ""),
                  children: [(0, HQ.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, HQ.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: wQ.iconColour
                      },
                      children: (0, HQ.jsx)(qo, {
                        iconName: wQ.icon
                      })
                    }), "\xa0", (0, CL.b)(wQ.amount, 6)]
                  }), (null === (FQ = wQ.subtext) || void 0 === FQ ? void 0 : FQ.length) > 0 && (0, HQ.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, HQ.jsx)(OL.e, {
                      text: wQ.subtext
                    })
                  })]
                }, QQ)
              }))
            })]
          }), (0, HQ.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [nQ && (0, HQ.jsx)(Eq, {
              show: qQ,
              shopInfo: YQ.shopInfo,
              selectedCategoryKey: hQ,
              buy: (QQ, FQ, wQ) => {
                aQ(QQ, FQ, wQ)
              },
              canAfford: JQ,
              message: YQ.onBoughtInfo
            }), null === gQ && (0, HQ.jsxs)(HQ.Fragment, {
              children: [(0, HQ.jsx)("div", {
                className: oQ()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== YQ.onBoughtInfo
                }),
                children: (0, HQ.jsx)(OL.e, {
                  text: tQ.current
                })
              }), (0, HQ.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, HQ.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (FQ = YQ.shopInfo[hQ]) || void 0 === FQ ? void 0 : FQ.description) && (0, HQ.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, HQ.jsx)(OL.e, {
                      text: YQ.shopInfo[hQ].description
                    })
                  }), qQ && (0, HQ.jsx)("div", {
                    className: "ShopItems",
                    ref: GQ,
                    "data-pad-initial-area": !0,
                    children: zL(null === (wQ = YQ.shopInfo[hQ]) || void 0 === wQ ? void 0 : wQ.items).map(((QQ, FQ) => EQ(QQ, FQ)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function yq(QQ) {
      let {
        item: FQ,
        minWidth: wQ,
        minHeight: LQ
      } = QQ;
      const {
        image: qQ,
        schematicId: oQ,
        imageColour: DQ
      } = FQ;
      if (oQ) return (0, HQ.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${wQ}rem`,
          height: `${LQ}rem`
        },
        children: (0, HQ.jsx)(sL.d, {
          game: {
            schematicId: oQ
          }
        })
      });
      var vQ, mQ;
      if ((0, RL.g)(qQ)) return (0, HQ.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${wQ}rem`,
          height: "0",
          minHeight: `${LQ}rem`
        },
        children: (0, HQ.jsx)(RL.e, {
          itemName: qQ,
          amount: null !== (vQ = FQ.amount) && void 0 !== vQ ? vQ : 0,
          amountFontSize: LQ / 4 + "rem",
          enchantmentTier: null === (mQ = FQ.enchant) || void 0 === mQ ? void 0 : mQ.tier
        })
      });
      const uQ = qQ.slice(-4);
      return ".jpg" === uQ || ".png" === uQ ? (0, HQ.jsx)(Bq, {
        image: qQ,
        minWidth: wQ
      }) : (0, HQ.jsx)(kQ.c, {
        name: qQ,
        className: "SelectedItemImage",
        style: {
          color: DQ
        }
      })
    }

    function Bq(QQ) {
      let {
        image: FQ,
        minWidth: wQ
      } = QQ;
      const {
        gameNameWithVariation: LQ
      } = (0, yw.k)("connectedGame"), qQ = FQ.endsWith(".jpg");
      return (0, HQ.jsx)("img", {
        className: oQ()({
          ShopPixelImage: !qQ
        }),
        style: {
          width: `${qQ?1.6*wQ:wQ}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,jQ.Wb)(LQ)}/${FQ}`,
        alt: FQ,
        draggable: !1
      })
    }

    function dq(QQ) {
      let {
        item: FQ,
        cost: wQ,
        currencyAmounts: LQ
      } = QQ;
      const qQ = !isNaN(wQ) && 0 !== wQ && Pq(LQ, FQ.currency);
      let oQ = null;
      return FQ.buyButtonText ? oQ = FQ.buyButtonText : qQ ? (oQ = wQ, FQ.sell && (oQ = -1 * wQ), oQ = oQ.toString()) : 0 === wQ ? oQ = "Free" : FQ.isRewardedAd && (oQ = "Watch ad"), (0, VF.F)(oQ) || " " === oQ ? null : (0, HQ.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [qQ && (0, HQ.jsx)("div", {
          style: {
            color: LQ[FQ.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, HQ.jsx)(qo, {
            iconName: LQ[FQ.currency].icon
          })
        }), (0, HQ.jsx)("div", {
          className: "BuyItemCost",
          children: (0, HQ.jsx)(OL.e, {
            text: oQ
          })
        })]
      })
    }

    function Qo(QQ) {
      let {
        item: FQ,
        currInput: wQ,
        updateInput: qQ,
        onSubmit: oQ
      } = QQ;
      const {
        t: kQ
      } = (0, DQ.y)(), vQ = (0, LQ.useRef)(null);
      if ((0, LQ.useEffect)((() => {
          const QQ = vQ.current;
          QQ && QQ.value !== wQ && document.activeElement !== QQ && (QQ.value = null !== wQ && void 0 !== wQ ? wQ : "")
        }), [wQ]), !FQ.userInput) return null;
      let mQ = FQ.userInput;
      if (eQ.featureFlags.sanitizeShopInput && "text" === FQ.userInput.type && (mQ = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === mQ.type || "number" === mQ.type) {
        var uQ, bQ;
        console.assert(void 0 !== wQ, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(FQ)}`);
        const QQ = "text" === mQ.type && mQ.wordCharsOnly;
        return (0, HQ.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, HQ.jsx)(cQ.b, {
            className: "ShopItemUserInputText",
            placeholderText: kQ(mQ.placeholderText),
            defaultValue: wQ,
            domRef: vQ,
            onValueChange: (FQ, wQ) => {
              !0 === QQ && (FQ = (0, IL.pb)(FQ)), vQ.current.value = FQ, qQ(FQ)
            },
            onEnter: oQ,
            type: mQ.type
          }, (null !== (uQ = mQ.initialValue) && void 0 !== uQ ? uQ : "") + (null !== (bQ = mQ.placeholderText) && void 0 !== bQ ? bQ : ""))
        })
      }
      if ("dropdown" === mQ.type) {
        console.assert(void 0 !== wQ, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(FQ)}`);
        const QQ = mQ.autoSubmit;
        return (0, HQ.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, HQ.jsx)(cF.d, {
            options: mQ.dropdownOptions.map((QQ => (0, SL.f)(QQ))),
            value: wQ,
            onChange: FQ => {
              let {
                value: wQ
              } = FQ;
              qQ(wQ), QQ && oQ(wQ)
            }
          })
        })
      }
      return "player" === mQ.type ? (0, HQ.jsx)(Fo, {
        userInput: mQ,
        currInput: wQ,
        updateInput: qQ
      }) : "color" === mQ.type ? (0, HQ.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, HQ.jsx)("input", {
          type: "color",
          value: wQ,
          onChange: QQ => {
            qQ(QQ.target.value)
          }
        })
      }) : null
    }

    function Fo(QQ) {
      let {
        userInput: FQ,
        currInput: wQ,
        updateInput: LQ
      } = QQ;
      const qQ = (0, yw.k)("players"),
        oQ = (0, yw.k)("hiddenPlayerNames"),
        DQ = (0, SL.j)(qQ.ids, qQ.localId, FQ);
      return (0, HQ.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, HQ.jsx)(cF.d, {
          options: DQ.map((QQ => {
            const {
              name: FQ
            } = qQ.byId[QQ];
            return {
              value: QQ,
              label: null === FQ ? "" : (0, rL.f)(FQ, oQ)
            }
          })),
          value: wQ,
          onChange: QQ => {
            let {
              value: FQ
            } = QQ;
            LQ(FQ)
          }
        })
      })
    }

    function wo(QQ) {
      let {
        ids: FQ
      } = QQ;
      return FQ
    }

    function Lo(QQ) {
      let {
        localId: FQ
      } = QQ;
      return FQ
    }

    function qo(QQ) {
      let {
        iconName: FQ
      } = QQ;
      return MQ.gameBridge.lookup("isItemName", FQ) ? (0, HQ.jsx)(RL.e, {
        itemName: FQ,
        amount: 1
      }) : (0, HQ.jsx)(kQ.c, {
        name: FQ,
        className: "2x"
      })
    }
    var oo = wQ(1641);
    const Do = (0, wQ(1407).e)((QQ => QQ.PadLobbyShortcuts)),
      ko = (0, LQ.lazy)((() => Promise.resolve().then((() => wQ(4501))).then((QQ => ({
        default: QQ.Lobbyleaderboard
      }))))),
      vo = (0, LQ.lazy)((() => wQ.e(215).then((() => wQ(40485))).then((QQ => ({
        default: QQ.LobbyManageView
      })))));

    function mo(QQ) {
      let {
        show: FQ
      } = QQ;
      return FQ ? (0, HQ.jsx)(uo, {}) : null
    }

    function uo() {
      const QQ = (0, TL.b)();
      return (0, HQ.jsxs)(HQ.Fragment, {
        children: [(0, HQ.jsx)(Do, {}), (0, HQ.jsxs)(LQ.Suspense, {
          fallback: (0, HQ.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, HQ.jsx)(CQ.c, {})
          }),
          children: [QQ && (0, HQ.jsx)(vo, {
            leaderboard: (0, HQ.jsx)(ko, {})
          }), !QQ && (0, HQ.jsx)(ko, {})]
        })]
      })
    }
    var Ho = wQ(1551),
      bo = wQ(2923),
      Yo = wQ(1725),
      xo = wQ(2964),
      Ao = wQ(2594),
      to = wQ(1485),
      eo = wQ(1458),
      Mo = wQ(2903),
      Go = wQ(2921),
      po = wQ(2249);
    const co = "storeRecentGiftRecipients",
      Co = new Map;

    function So() {
      try {
        const QQ = EF.i.getItem(co);
        return Array.isArray(QQ) ? QQ.filter((QQ => "string" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.name) && QQ.name.length > 0)).map((QQ => ({
          name: QQ.name,
          cosmetics: QQ.cosmetics && "object" === typeof QQ.cosmetics ? QQ.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function io(QQ) {
      var FQ;
      const [wQ, qQ] = (0, LQ.useState)(""), [oQ, DQ] = (0, LQ.useState)("search"), [kQ, vQ] = (0, LQ.useState)(null), [mQ, uQ] = (0, LQ.useState)(null), HQ = (0, LQ.useRef)(null), bQ = (0, LQ.useRef)(null);
      (0, LQ.useEffect)((() => () => {
        HQ.current && clearTimeout(HQ.current)
      }), []);
      const YQ = null !== (FQ = null === kQ || void 0 === kQ ? void 0 : kQ.name) && void 0 !== FQ ? FQ : null;

      function xQ() {
        HQ.current && (clearTimeout(HQ.current), HQ.current = null)
      }(0, LQ.useEffect)((() => {
        if (null === YQ || QQ === sQ.NULL_USER_CONTEXT) return;
        const FQ = YQ.toLowerCase();
        if (FQ === QQ.getPlayerName().toLowerCase()) return void uQ({
          name: YQ,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const wQ = Co.get(FQ);
        if (wQ) return void uQ({
          name: YQ,
          result: wQ
        });
        let LQ = !1;
        return async function(QQ, FQ) {
          try {
            const wQ = await (0, sQ.postJsonWithMetricsCookiesAndJsonResponse)(`${rQ.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: FQ
            }, {
              retries: 1
            }, QQ.getMetricsCookies());
            if ("boolean" !== typeof(null === wQ || void 0 === wQ ? void 0 : wQ.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(wQ)}`);
            return wQ
          } catch (wQ) {
            return console.error("Failed to look up gift recipient:", wQ), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(QQ, YQ).catch((QQ => (console.error("Gift recipient lookup failed:", QQ), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((QQ => {
          !0 !== QQ.giftRecipientFound && "store:giftRecipientLookupFailed" === QQ.giftRecipientError || Co.set(FQ, QQ), LQ || uQ({
            name: YQ,
            result: QQ
          })
        })), () => {
          LQ = !0
        }
      }), [YQ, QQ]);
      const AQ = (0, LQ.useMemo)((() => {
        const QQ = wQ.trim();
        if (!QQ) return {
          status: "none"
        };
        if (!kQ || kQ.name !== QQ || (null === mQ || void 0 === mQ ? void 0 : mQ.name) !== kQ.name) return {
          status: "pending",
          name: QQ
        };
        const FQ = mQ.result;
        return !1 === FQ.giftRecipientFound ? {
          status: "error",
          name: kQ.name,
          error: FQ.giftRecipientError
        } : {
          status: "found",
          name: FQ.giftRecipientName,
          ownedPacks: FQ.giftRecipientOwnedPacks,
          hasSuperRank: FQ.giftRecipientHasSuperRank,
          isSubscriber: FQ.giftRecipientIsSubscriber
        }
      }), [wQ, kQ, mQ]);
      (0, LQ.useEffect)((() => {
        "found" === AQ.status && "typed" === (null === kQ || void 0 === kQ ? void 0 : kQ.source) && bQ.current !== AQ.name && (bQ.current = AQ.name, (0, BQ.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [AQ, kQ]);
      const tQ = (null === mQ || void 0 === mQ ? void 0 : mQ.name) === (null === kQ || void 0 === kQ ? void 0 : kQ.name) ? null === mQ || void 0 === mQ ? void 0 : mQ.result : null,
        eQ = !0 === (null === tQ || void 0 === tQ ? void 0 : tQ.giftRecipientFound) ? tQ.giftRecipientCosmetics : null;
      return {
        query: wQ,
        via: oQ,
        recipient: AQ,
        recipientCosmetics: eQ,
        type: function(QQ) {
          qQ(QQ), DQ("search"), xQ();
          const FQ = QQ.trim();
          FQ ? HQ.current = setTimeout((() => {
            vQ({
              name: FQ,
              source: "typed"
            })
          }), 400) : vQ(null)
        },
        choose: function(QQ, FQ) {
          xQ(), qQ(QQ), DQ("typed" === FQ ? "search" : "prefilled" === FQ ? "prefilled" : "suggestion"), vQ({
            name: QQ,
            source: FQ
          }), "typed" !== FQ && "prefilled" !== FQ && (0, BQ.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: FQ
          })
        },
        clear: function() {
          xQ(), qQ(""), DQ("search"), vQ(null)
        },
        recordGift: function(QQ, FQ) {
          ! function(QQ) {
            Co.delete(QQ.toLowerCase())
          }(QQ), uQ((wQ => {
            if (!wQ || wQ.name.toLowerCase() !== QQ.toLowerCase() || !0 !== wQ.result.giftRecipientFound || "superRank" === FQ) return wQ;
            const LQ = wQ.result.giftRecipientOwnedPacks;
            return {
              ...wQ,
              result: {
                ...wQ.result,
                giftRecipientOwnedPacks: LQ.includes(FQ) ? LQ : [...LQ, FQ]
              }
            }
          }))
        }
      }
    }
    var Wo = wQ(2243),
      Ro = wQ(4504),
      Oo = wQ(259),
      so = wQ(3009);
    const ro = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Io = wQ(2194),
      Uo = wQ(600),
      No = wQ(2283),
      To = wQ(2489);

    function Ko(QQ) {
      let {
        cosmetics: FQ
      } = QQ;
      return (0, HQ.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, HQ.jsx)(No.c, {
          cosmetics: FQ
        })
      })
    }

    function zo(QQ, FQ) {
      var wQ, LQ;
      const qQ = null !== (wQ = QQ.friend) && void 0 !== wQ ? wQ : {
        isError: !1,
        name: QQ.name,
        ranks: [],
        cosmetics: null !== (LQ = QQ.cosmetics) && void 0 !== LQ ? LQ : {},
        nameColour: Uo.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return FQ ? {
        ...qQ,
        cosmetics: FQ
      } : qQ
    }

    function jo(QQ) {
      let {
        pending: FQ
      } = QQ;
      return (0, HQ.jsx)("span", {
        className: "StoreRecipientLoader",
        children: FQ && (0, HQ.jsx)(CQ.c, {})
      })
    }

    function ao(QQ) {
      var FQ;
      let {
        selfName: wQ,
        giftRecipient: qQ,
        suggestionsVersion: vQ,
        pulseSignal: uQ,
        disabled: bQ
      } = QQ;
      const {
        t: YQ
      } = (0, DQ.y)(), xQ = (0, VQ.m)(), AQ = (0, LQ.useRef)(null), tQ = (0, LQ.useRef)(null), {
        query: MQ,
        via: GQ,
        recipient: pQ,
        recipientCosmetics: CQ
      } = qQ, SQ = (0, po.r)(MQ), iQ = (0, LQ.useMemo)((() => {
        const QQ = eQ.featureFlags.useSocialFeatures ? xQ.friends.filter((QQ => !QQ.isError)) : [];
        return (0, po.k)({
          onlineFriends: (0, VQ.h)(QQ),
          recentRecipients: So(),
          friends: QQ,
          selfName: wQ,
          max: 8
        })
      }), [xQ.friends, wQ, vQ]), WQ = MQ.trim().toLowerCase(), RQ = "search" !== GQ && WQ ? iQ.find((QQ => QQ.name.toLowerCase() === WQ)) : void 0, OQ = RQ && "prefilled" === GQ ? [RQ, ...iQ.filter((QQ => QQ !== RQ))] : iQ, sQ = "" !== WQ && !RQ, rQ = sQ ? MQ : "", IQ = OQ.length > 0;
      (0, LQ.useEffect)((() => {
        AQ.current && AQ.current.value !== rQ && (AQ.current.value = rQ)
      }), [rQ]), (0, LQ.useEffect)((() => {
        AQ.current && (AQ.current.disabled = bQ)
      }), [bQ, uQ]);
      const UQ = (0, LQ.useRef)(0);

      function TQ() {
        "self" !== SQ && (0, BQ.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), qQ.clear()
      }

      function KQ(QQ) {
        var FQ, wQ;
        if (bQ) return;
        if (" " === QQ.key || "Enter" === QQ.key) return QQ.preventDefault(), void QQ.currentTarget.click();
        const LQ = Array.from(null !== (FQ = null === (wQ = tQ.current) || void 0 === wQ ? void 0 : wQ.querySelectorAll("[role=radio]")) && void 0 !== FQ ? FQ : []),
          qQ = LQ.indexOf(QQ.currentTarget);
        let oQ;
        "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? oQ = LQ[(qQ + 1) % LQ.length] : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? oQ = LQ[(qQ - 1 + LQ.length) % LQ.length] : "Home" === QQ.key ? oQ = LQ[0] : "End" === QQ.key && (oQ = LQ[LQ.length - 1]), oQ && (QQ.preventDefault(), oQ.focus(), oQ.click())
      }(0, LQ.useEffect)((() => {
        var QQ;
        uQ > UQ.current && !bQ && (UQ.current = uQ, null === (QQ = AQ.current) || void 0 === QQ || QQ.focus())
      }), [uQ, bQ]);
      const zQ = "self" === SQ,
        lQ = null !== (FQ = null === RQ || void 0 === RQ ? void 0 : RQ.name) && void 0 !== FQ ? FQ : null,
        jQ = "error" === pQ.status ? pQ.error : null,
        aQ = "store:giftRecipientLookupFailed" === jQ;
      return (0, HQ.jsxs)("div", {
        className: oQ()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: bQ,
          StoreRecipientStripNoChips: !IQ
        }),
        children: [(0, HQ.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: YQ("store:buyingFor")
        }), (0, HQ.jsxs)("div", {
          ref: tQ,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": YQ("store:whoIsItFor"),
          children: [(0, HQ.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": zQ,
            tabIndex: bQ || !zQ && null !== lQ ? -1 : 0,
            className: oQ()("StoreRecipientMe", {
              StoreRecipientChecked: zQ
            }),
            onClick: () => {
              bQ || TQ()
            },
            onKeyDown: KQ,
            children: [(0, HQ.jsx)(kQ.c, {
              name: "user"
            }), " ", YQ("store:me")]
          }), IQ && (0, HQ.jsx)("div", {
            className: "StoreRecipientChips",
            children: OQ.map((QQ => {
              const FQ = QQ === RQ;
              return (0, HQ.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": FQ,
                tabIndex: !bQ && FQ ? 0 : -1,
                title: QQ.name,
                className: oQ()("StoreRecipientChip", {
                  StoreRecipientChecked: FQ
                }),
                onClick: () => {
                  bQ || function(QQ) {
                    "gift" !== SQ && (0, BQ.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), qQ.choose(QQ.name, QQ.kind)
                  }(QQ)
                },
                onKeyDown: KQ,
                children: (0, HQ.jsx)(To.e, {
                  playerSocialPreview: zo(QQ, FQ ? CQ : null),
                  opensProfileCard: !1,
                  isFriend: null !== QQ.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== QQ.friend,
                  status: null === QQ.friend ? null : void 0,
                  trailing: FQ ? (0, HQ.jsx)(jo, {
                    pending: "pending" === pQ.status
                  }) : void 0
                })
              }, QQ.name)
            }))
          })]
        }), (0, HQ.jsxs)("div", {
          className: oQ()("StoreRecipientSearch", {
            StoreRecipientChecked: sQ,
            StoreRecipientSearchPulse: uQ > 0 && !sQ,
            StoreRecipientSearchError: null !== jQ && !aQ
          }),
          onClick: () => {
            var QQ;
            null === (QQ = AQ.current) || void 0 === QQ || QQ.focus()
          },
          children: [sQ && "found" === pQ.status && CQ && (0, HQ.jsx)(Ko, {
            cosmetics: CQ
          }), !(sQ && "found" === pQ.status && CQ) && (0, HQ.jsx)(kQ.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, HQ.jsx)(cQ.b, {
            className: "StoreRecipientSearchInput",
            domRef: AQ,
            placeholderText: YQ("store:searchName"),
            defaultValue: rQ,
            maxLength: NQ.k,
            onValueChange: function(QQ) {
              "gift" !== SQ && QQ.trim() && (0, BQ.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), qQ.type(QQ)
            },
            onEnter: () => {
              var QQ;
              const FQ = null === (QQ = AQ.current) || void 0 === QQ ? void 0 : QQ.value.trim();
              FQ && qQ.choose(FQ, "typed")
            },
            blurOnEnter: !0
          }), sQ && (0, HQ.jsx)(jo, {
            pending: "pending" === pQ.status
          }), sQ && (0, HQ.jsx)("div", {
            ...(0, mQ.S)({
              disabled: bQ
            }),
            "aria-label": YQ("store:clearRecipient"),
            title: YQ("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: QQ => {
              QQ.stopPropagation(), bQ || TQ()
            },
            children: (0, HQ.jsx)(kQ.c, {
              name: "xmark"
            })
          })]
        }, uQ), jQ && (0, HQ.jsx)("div", {
          className: oQ()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: aQ
          }),
          role: "status",
          children: YQ(jQ)
        })]
      })
    }
    var Xo = wQ(2240),
      fo = wQ(2169),
      Vo = wQ(3454),
      ho = wQ(3018),
      Jo = wQ(2206);
    const Eo = wQ.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function no() {
      (0, Jo.k)(Eo, {
        lowPriority: !1
      })
    }

    function go(QQ) {
      let {
        onBack: FQ,
        cta: wQ,
        recipient: qQ,
        afterCta: oQ
      } = QQ;
      const {
        t: vQ
      } = (0, DQ.y)(), [uQ, bQ] = (0, LQ.useState)("starting"), YQ = (0, LQ.useRef)(null), xQ = (0, IF.c)(), AQ = (0, LQ.useRef)(null), tQ = (0, LQ.useCallback)((() => {
        const QQ = YQ.current;
        null !== QQ.error && QQ.load();
        const FQ = QQ.play();
        AQ.current = FQ, FQ.catch((QQ => {
          (0, Vo.c)("Failed to play Super Rank video", QQ), xQ.current && AQ.current === FQ && bQ("failed")
        }))
      }), [xQ]);
      return (0, LQ.useEffect)((() => {
        const QQ = YQ.current;
        let FQ;

        function wQ() {
          clearTimeout(FQ), FQ = setTimeout(tQ, 3e3)
        }
        return tQ(), QQ.addEventListener("ended", wQ), () => {
          clearTimeout(FQ), QQ.removeEventListener("ended", wQ)
        }
      }), [tQ]), (0, HQ.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, HQ.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, HQ.jsx)(mQ.b, {
            className: "StoreDetailBackButton",
            onClick: FQ,
            padBack: !0,
            children: vQ("general:back")
          }), (0, HQ.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, HQ.jsx)(kQ.c, {
              name: "bolt"
            }), " ", vQ("homePage:superRank")]
          }), qQ]
        }), (0, HQ.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, HQ.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, HQ.jsx)("video", {
              ref: YQ,
              src: `${rQ.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Eo,
              muted: !0,
              playsInline: !0,
              controls: "playing" === uQ,
              onPlaying: () => {
                bQ("playing")
              },
              onError: () => {
                bQ("failed")
              }
            }), ("failed" === uQ || "loading" === uQ) && (0, HQ.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, HQ.jsx)(mQ.f, {
                ariaLabel: vQ("general:play"),
                loading: "loading" === uQ,
                onClick: () => {
                  bQ("loading"), tQ()
                },
                touchPressOn: "pointerup",
                children: (0, HQ.jsx)(kQ.c, {
                  name: "play"
                })
              })
            })]
          }), (0, HQ.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, HQ.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, HQ.jsx)(ho.d, {})
            }), (0, HQ.jsxs)("div", {
              className: "StoreTileActions",
              children: [wQ, oQ]
            })]
          })]
        })]
      })
    }
    var Po = wQ(2507),
      Zo = wQ(3408),
      yo = wQ(2990),
      Bo = wQ(2999);
    const QD = [Uo.s.yellow, Uo.s.green, Uo.s.aqua, Uo.s.blue, Uo.s.purple, Uo.s.red];

    function FD(QQ) {
      return "needsRecipient" === QQ || "lookingUp" === QQ || "gift" === QQ || "recipientOwns" === QQ || "recipientSharesOwned" === QQ || "recipientSubscribed" === QQ
    }

    function wD(QQ) {
      const {
        onKeyDown: FQ,
        ...wQ
      } = (0, mQ.S)();
      return {
        ...wQ,
        "aria-label": QQ,
        onKeyDown: QQ => {
          QQ.target === QQ.currentTarget && (null === FQ || void 0 === FQ || FQ(QQ))
        }
      }
    }

    function LD(QQ) {
      let {
        text: FQ
      } = QQ;
      return (0, HQ.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(FQ).map(((QQ, FQ) => (0, HQ.jsx)("span", {
          style: {
            color: QD[FQ % QD.length]
          },
          children: QQ
        }, FQ)))
      })
    }
    const qD = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function oD(QQ) {
      let {
        state: FQ,
        item: wQ,
        price: LQ,
        busy: qQ,
        highlight: vQ = !1,
        onAct: uQ,
        onNeedRecipient: bQ,
        onLogin: YQ
      } = QQ;
      const {
        t: xQ
      } = (0, DQ.y)(), AQ = "superRank" === wQ ? KQ.l.product.days : null, tQ = QQ => null === AQ ? xQ(QQ ? "general:gift" : "general:buy") : xQ(QQ ? "store:giftDays" : "store:buyDays", {
        days: AQ
      }), eQ = (QQ, FQ) => {
        const wQ = (0, HQ.jsxs)(HQ.Fragment, {
          children: [null === QQ && (0, HQ.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== QQ && (0, HQ.jsx)("span", {
            className: "StoreCtaLabel",
            title: QQ,
            children: QQ
          })]
        });
        return null !== AQ ? (0, HQ.jsxs)(HQ.Fragment, {
          children: [FQ && (0, HQ.jsx)("span", {
            className: "StoreCtaIcon",
            children: FQ
          }), wQ, (0, HQ.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, HQ.jsx)(fo.b, {
              amount: LQ
            })]
          })]
        }) : (0, HQ.jsxs)(HQ.Fragment, {
          children: [(0, HQ.jsxs)("span", {
            className: "StoreCtaLead",
            children: [wQ, "\xb7"]
          }), (0, HQ.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [FQ, (0, HQ.jsx)(fo.b, {
              amount: LQ
            })]
          })]
        })
      };
      let MQ;
      switch (FQ) {
        case "pending":
          MQ = (0, HQ.jsx)(mQ.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: eQ(null)
          });
          break;
        case "login":
          MQ = (0, HQ.jsx)(mQ.m, {
            className: "StoreCtaButton",
            onClick: YQ,
            children: eQ(tQ(!1))
          });
          break;
        case "owned":
          MQ = (0, HQ.jsx)(mQ.i, {
            className: "StoreCtaButton",
            onClick: () => {
              iQ.c.set({
                openEverythingMenuName: mF.n.CUSTOMISATION
              })
            },
            children: (0, HQ.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, HQ.jsx)(kQ.c, {
                name: "shirt"
              }), " ", xQ("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          MQ = (0, HQ.jsx)(mQ.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, HQ.jsx)("span", {
              className: "StoreCtaLabel",
              children: xQ(qD[FQ])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          MQ = (0, HQ.jsx)(mQ.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === FQ || null === LQ,
            loading: "lookingUp" === FQ || qQ,
            onClick: uQ,
            analyticsClick: {
              id: "store.gift",
              value: wQ
            },
            children: eQ(tQ(!0), po.d)
          });
          break;
        case "buy":
        case "recharge":
          MQ = (0, HQ.jsx)(mQ.m, {
            className: "StoreCtaButton",
            loading: qQ,
            disabled: null === LQ,
            onClick: uQ,
            analyticsClick: {
              id: "store.buy",
              value: wQ
            },
            children: eQ(tQ(!1))
          })
      }
      return (0, HQ.jsx)("div", {
        className: oQ()("StoreCta", {
          StoreCtaHighlight: vQ,
          StoreCtaLabelFirst: null !== AQ
        }),
        onClick: QQ => {
          QQ.stopPropagation(), "needsRecipient" === FQ && bQ()
        },
        children: MQ
      })
    }

    function DD() {
      const {
        t: QQ
      } = (0, DQ.y)();
      return (0, HQ.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, HQ.jsxs)("li", {
          children: [(0, HQ.jsx)(kQ.c, {
            name: "check"
          }), (0, HQ.jsx)(LD, {
            text: QQ("store:colourfulNames")
          })]
        }), (0, HQ.jsxs)("li", {
          children: [(0, HQ.jsx)(kQ.c, {
            name: "check"
          }), QQ("store:perkCapes")]
        }), (0, HQ.jsxs)("li", {
          children: [(0, HQ.jsx)(kQ.c, {
            name: "check"
          }), QQ("store:perkNoAdverts")]
        }), (0, HQ.jsxs)("li", {
          children: [(0, HQ.jsx)(kQ.c, {
            name: "check"
          }), QQ("store:perkFriends", {
            count: (0, ZQ.e)(["super"])
          })]
        })]
      })
    }

    function kD(QQ) {
      let {
        daysLeft: FQ,
        totalDays: wQ,
        urgent: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, DQ.y)(), kQ = wQ > 0 ? Math.min(1, Math.max(.03, FQ / wQ)) : 1;
      return (0, HQ.jsxs)("div", {
        className: oQ()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: LQ
        }),
        children: [(0, HQ.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === FQ ? qQ("store:oneDayLeft") : qQ("store:daysLeft", {
            days: FQ
          })
        }), (0, HQ.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, HQ.jsx)("i", {
            style: {
              width: 100 * kQ + "%"
            }
          })
        })]
      })
    }

    function vD(QQ) {
      let {
        state: FQ,
        urgent: wQ,
        daysLeft: LQ,
        totalDays: qQ,
        recipientHasSuperRank: vQ,
        busy: mQ,
        highlight: uQ,
        onOpen: bQ,
        onAct: YQ,
        onNeedRecipient: xQ,
        onLogin: AQ
      } = QQ;
      const {
        t: tQ
      } = (0, DQ.y)(), eQ = FD(FQ), {
        days: MQ
      } = KQ.l.product, GQ = tQ("store:recipientHasSuperRank", {
        giftDays: MQ
      }), pQ = gQ("subscribed" === FQ);
      return (0, HQ.jsxs)("div", {
        className: oQ()("StoreTile StoreSuperRankTile", {
          StoreTileGift: eQ,
          StoreSuperRankTileUrgent: "recharge" === FQ && wQ,
          StoreSuperRankTileWithChip: vQ,
          StoreSuperRankTileGiftReady: "gift" === FQ
        }),
        ...wD(tQ("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: no,
        onFocus: no,
        onClick: bQ,
        children: [(0, HQ.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Io.h})`
          }
        }), eQ && (0, HQ.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, HQ.jsxs)("div", {
          className: "StoreTileContent",
          children: [vQ && (0, HQ.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: GQ,
            children: GQ
          }), (0, HQ.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, HQ.jsx)(kQ.c, {
              name: "bolt"
            }), " ", tQ("homePage:superRank")]
          }), eQ && (0, HQ.jsx)("div", {
            className: "StoreTilePitch",
            children: tQ("store:giftPitch", {
              days: MQ
            })
          }), "recharge" === FQ && (0, HQ.jsx)(kD, {
            daysLeft: LQ,
            totalDays: qQ,
            urgent: wQ
          }), pQ && (0, HQ.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, HQ.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: pQ
            })
          }), (0, HQ.jsx)(DD, {}), (0, HQ.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, HQ.jsx)(oD, {
              state: FQ,
              item: "superRank",
              price: KQ.l.price,
              busy: mQ,
              highlight: uQ,
              onAct: YQ,
              onNeedRecipient: xQ,
              onLogin: AQ
            }), "needsRecipient" === FQ && (0, HQ.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: tQ("store:pickRecipientFirst")
            }), "recharge" === FQ && wQ && (0, HQ.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === LQ ? tQ("store:endsInOneDay") : tQ("store:endsInDays", {
                days: LQ
              })
            })]
          })]
        })]
      })
    }
    const mD = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function uD(QQ) {
      var FQ;
      let {
        pack: wQ,
        state: qQ,
        busy: vQ,
        onOpen: mQ,
        onAct: uQ,
        onNeedRecipient: bQ,
        onLogin: YQ
      } = QQ;
      const {
        t: xQ
      } = (0, DQ.y)(), AQ = Ho.e[wQ], tQ = Mo.l[wQ], eQ = (0, Io.r)(wQ), MQ = (0, LQ.useRef)(null);
      (0, yo.k)(wQ, MQ);
      const GQ = FD(qQ),
        pQ = null !== (FQ = AQ.displayName) && void 0 !== FQ ? FQ : wQ,
        cQ = (0, Zo.e)((() => {
          (0, Po.e)();
          const QQ = (0, yo.g)(wQ);
          void 0 !== QQ && (0, Jo.k)((0, yo.d)(QQ))
        })),
        [CQ] = (0, LQ.useState)(so.h);
      return (0, HQ.jsxs)("div", {
        className: oQ()("StoreTile StorePackTile", mD[AQ.tier], {
          StorePackTileOwned: "owned" === qQ,
          StorePackTileRecipientOwns: "recipientOwns" === qQ,
          StoreTileGift: GQ
        }),
        ...wD(pQ),
        ref: MQ,
        "data-store-item": wQ,
        onClick: mQ,
        onPointerMove: QQ => {
          "mouse" !== QQ.pointerType || 0 === QQ.movementX && 0 === QQ.movementY || CQ || cQ.start()
        },
        onPointerLeave: cQ.cancel,
        children: [tQ && (0, HQ.jsx)(tQ, {}), (0, HQ.jsx)("div", {
          className: "StorePackCharacters",
          children: eQ.map((QQ => (0, HQ.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Io.k)(QQ)})`
            }
          }, QQ)))
        }), (0, HQ.jsx)("div", {
          className: "StoreTileScrim"
        }), GQ && (0, HQ.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, HQ.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, HQ.jsx)("div", {
            className: "StoreTileTitle",
            children: pQ
          }), (0, HQ.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, HQ.jsx)(Bo.b, {
              tier: AQ.tier
            }), " \xb7 ", xQ("store:itemCount", {
              count: (0, Xo.f)(wQ)
            }), "owned" === qQ && (0, HQ.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, HQ.jsx)(kQ.c, {
                name: "check"
              }), " ", xQ("general:owned")]
            })]
          }), (0, HQ.jsx)(oD, {
            state: qQ,
            item: wQ,
            price: (0, KQ.g)(wQ),
            busy: vQ,
            onAct: uQ,
            onNeedRecipient: bQ,
            onLogin: YQ
          })]
        })]
      })
    }
    var HD = wQ(2966),
      bD = wQ(1543),
      YD = wQ(1461),
      xD = wQ(3438);

    function AD() {
      return (0, HQ.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var tD = wQ(1353),
      eD = wQ(1560),
      MD = wQ(9137);

    function GD(QQ) {
      let {
        character: FQ,
        drawn: wQ,
        onDrawn: qQ
      } = QQ;
      const DQ = (0, LQ.useRef)(null),
        kQ = (0, MD.c)(FQ);
      return (0, HQ.jsx)("div", {
        className: oQ()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: wQ
        }),
        children: (0, HQ.jsx)(LQ.Suspense, {
          fallback: null,
          children: (0, HQ.jsx)(Po.d, {
            ref: DQ,
            framing: "store",
            turntableFromYaw: wQ ? kQ.yaw : null,
            onReady: () => {
              var QQ, wQ;
              null === (QQ = DQ.current) || void 0 === QQ || QQ.setOrbit(kQ), null === (wQ = DQ.current) || void 0 === wQ || wQ.setAllCosmetics(eD.e[FQ].cosmetics)
            },
            onDrawn: qQ
          })
        })
      })
    }
    const pD = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      cD = new Set(["wildSpirits"]);

    function CD(QQ) {
      var FQ;
      let {
        tile: wQ,
        design: qQ,
        canGoLive: vQ,
        live: mQ,
        busy: uQ,
        highlight: bQ,
        onLiveStart: YQ,
        onLiveEnd: xQ,
        onOpen: AQ,
        onAct: tQ,
        onNeedRecipient: eQ,
        onLogin: MQ
      } = QQ;
      const {
        t: GQ
      } = (0, DQ.y)(), {
        pack: pQ,
        state: cQ
      } = wQ, CQ = Ho.e[pQ], SQ = (0, Ho.i)(pQ), iQ = (0, Io.o)(pQ), WQ = Mo.l[iQ], RQ = cD.has(iQ), {
        tier: OQ
      } = CQ, sQ = "legendary" === OQ || "mythic" === OQ, rQ = (0, LQ.useRef)(null);
      (0, tD.d)(rQ, "epic" === OQ || sQ || RQ);
      const [IQ, NQ] = (0, LQ.useState)(!1);
      return !mQ && IQ && NQ(!1), (0, HQ.jsxs)("div", {
        ref: rQ,
        className: oQ()("StoreCharacterCard", `StoreCharacterCard${qQ}`, pD[OQ], {
          StoreCharacterCardOwned: "owned" === cQ || "recipientOwns" === cQ,
          StoreCharacterCardGift: FD(cQ),
          StoreCharacterCardItem: void 0 === SQ
        }),
        onPointerMove: QQ => {
          "mouse" !== QQ.pointerType || 0 === QQ.movementX && 0 === QQ.movementY || !vQ || mQ || void 0 === SQ || YQ()
        },
        onPointerLeave: xQ,
        children: [(0, HQ.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: WQ && (0, HQ.jsx)(WQ, {
            simple: !0
          })
        }), sQ && (0, HQ.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, HQ.jsxs)(UQ.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, bD.f)({
            kind: "pack",
            pack: pQ
          }),
          "data-store-item": pQ,
          onClick: QQ => {
            (0, YD.c)(QQ) && (QQ.preventDefault(), AQ())
          },
          children: [(0, HQ.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, HQ.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, HQ.jsx)("div", {
              className: oQ()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: IQ
              }),
              style: {
                backgroundImage: `url(${(0,Io.x)(pQ)})`
              }
            }), mQ && void 0 !== SQ && (0, HQ.jsx)(GD, {
              character: SQ,
              drawn: IQ,
              onDrawn: () => {
                NQ(!0)
              }
            })]
          }), (0, HQ.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (FQ = CQ.displayName) && void 0 !== FQ ? FQ : pQ
          }), (0, HQ.jsx)(Bo.b, {
            tier: OQ,
            className: "StoreCharacterTier"
          })]
        }), (0, HQ.jsx)("div", {
          className: "StoreCharacterScrim"
        }), RQ && (0, HQ.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, HQ.jsx)(AD, {})
        }), "owned" === cQ && (0, HQ.jsx)("span", {
          className: "StoreCharacterOwned",
          title: GQ("general:owned"),
          "aria-label": GQ("general:owned"),
          children: (0, HQ.jsx)(kQ.c, {
            name: "check"
          })
        }), (0, HQ.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, HQ.jsx)(oD, {
            state: cQ,
            item: pQ,
            price: (0, KQ.g)(pQ),
            busy: uQ,
            highlight: bQ,
            onAct: tQ,
            onNeedRecipient: eQ,
            onLogin: MQ
          })
        })]
      })
    }

    function SD(QQ) {
      let {
        tiles: FQ,
        busy: wQ,
        highlightItem: qQ,
        onOpen: oQ,
        onAct: DQ,
        onNeedRecipient: kQ,
        onLogin: vQ
      } = QQ;
      const mQ = (0, xD.j)("storeCharacterCardFoil"),
        uQ = (0, xD.j)("storeCharacterCardSpotlight"),
        bQ = mQ ? "Foil" : uQ ? "Spotlight" : "Showcase",
        [YQ] = (0, LQ.useState)(so.h),
        [xQ, AQ] = (0, LQ.useState)(null);
      return (0, HQ.jsx)("div", {
        className: "StoreCharacterGrid",
        children: FQ.map((QQ => (0, HQ.jsx)(CD, {
          tile: QQ,
          design: bQ,
          canGoLive: !YQ,
          live: xQ === QQ.pack,
          busy: wQ,
          highlight: qQ === QQ.pack,
          onLiveStart: () => {
            AQ(QQ.pack)
          },
          onLiveEnd: () => {
            AQ((FQ => FQ === QQ.pack ? null : FQ))
          },
          onOpen: () => {
            oQ(QQ.pack)
          },
          onAct: () => {
            DQ(QQ.pack)
          },
          onNeedRecipient: kQ,
          onLogin: () => {
            vQ(QQ.pack)
          }
        }, QQ.pack)))
      })
    }
    var iD = wQ(9149);

    function WD(QQ) {
      let {
        title: FQ
      } = QQ;
      return (0, HQ.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, HQ.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: FQ
        })
      })
    }

    function RD(QQ) {
      let {
        mountAtOnce: FQ,
        children: wQ
      } = QQ;
      const qQ = (0, LQ.useRef)(null),
        [oQ, DQ] = (0, LQ.useState)(FQ),
        kQ = (0, iD.b)();
      return (0, LQ.useLayoutEffect)((() => {
        const QQ = qQ.current;
        QQ && QQ.getBoundingClientRect().top < QQ.parentElement.getBoundingClientRect().bottom && DQ(!0)
      }), []), oQ || kQ ? (0, HQ.jsx)(HQ.Fragment, {
        children: wQ
      }) : (0, HQ.jsx)("div", {
        ref: qQ
      })
    }

    function OD(QQ) {
      let {
        layout: FQ,
        mountAtOnce: wQ,
        bundleGift: LQ,
        superRankTotalDays: qQ,
        busy: oQ,
        highlightItem: kQ,
        onOpen: vQ,
        onAct: mQ,
        onNeedRecipient: uQ,
        onLogin: bQ
      } = QQ;
      const {
        t: YQ
      } = (0, DQ.y)(), xQ = FQ.packs.filter((QQ => void 0 === (0, Ho.i)(QQ.pack) && !(0, Ho.m)(QQ.pack))), AQ = FQ.packs.filter((QQ => void 0 !== (0, Ho.i)(QQ.pack))), tQ = FQ.packs.filter((QQ => (0, Ho.m)(QQ.pack)));
      return (0, HQ.jsxs)(HQ.Fragment, {
        children: [(0, HQ.jsx)(HD.c, {
          className: "StoreSuperGems",
          gift: LQ,
          highlightSku: kQ
        }), (0, HQ.jsx)(WD, {
          title: YQ("store:rank")
        }), (0, HQ.jsx)(vD, {
          state: FQ.superRank.state,
          urgent: FQ.superRank.urgent,
          daysLeft: FQ.superRankDaysLeft,
          totalDays: qQ,
          recipientHasSuperRank: FQ.recipientHasSuperRank,
          busy: oQ,
          highlight: "superRank" === kQ,
          onOpen: () => {
            vQ("superRank")
          },
          onAct: () => {
            mQ("superRank")
          },
          onNeedRecipient: uQ,
          onLogin: () => {
            bQ("superRank")
          }
        }), (0, HQ.jsxs)(RD, {
          mountAtOnce: wQ,
          children: [(0, HQ.jsx)(WD, {
            title: YQ("store:bundles")
          }), (0, HQ.jsx)("div", {
            className: "StorePackGrid",
            children: xQ.map((QQ => (0, HQ.jsx)(uD, {
              pack: QQ.pack,
              state: QQ.state,
              busy: oQ,
              onOpen: () => {
                vQ(QQ.pack)
              },
              onAct: () => {
                mQ(QQ.pack)
              },
              onNeedRecipient: uQ,
              onLogin: () => {
                bQ(QQ.pack)
              }
            }, QQ.pack)))
          }), (0, HQ.jsxs)(RD, {
            mountAtOnce: wQ,
            children: [(0, HQ.jsx)(WD, {
              title: YQ("store:characters")
            }), (0, HQ.jsx)(SD, {
              tiles: AQ,
              busy: oQ,
              highlightItem: kQ,
              onOpen: vQ,
              onAct: mQ,
              onNeedRecipient: uQ,
              onLogin: bQ
            }), tQ.length > 0 && (0, HQ.jsxs)(HQ.Fragment, {
              children: [(0, HQ.jsx)(WD, {
                title: YQ("store:premiumItems")
              }), (0, HQ.jsx)(SD, {
                tiles: tQ,
                busy: oQ,
                highlightItem: kQ,
                onOpen: vQ,
                onAct: mQ,
                onNeedRecipient: uQ,
                onLogin: bQ
              })]
            })]
          })]
        })]
      })
    }

    function sD(QQ) {
      let {
        state: FQ,
        mode: wQ,
        giftName: LQ,
        busy: qQ,
        highlight: oQ,
        purchaseError: kQ,
        onBack: vQ,
        onChooseRecipient: uQ,
        onAct: bQ,
        onLogin: YQ
      } = QQ;
      const {
        t: xQ
      } = (0, DQ.y)(), AQ = gQ("gift" !== wQ);
      return (0, HQ.jsx)(go, {
        onBack: vQ,
        recipient: "gift" === wQ && (0, HQ.jsxs)(HQ.Fragment, {
          children: [LQ && (0, HQ.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: xQ("store:giftFor", {
              name: LQ
            }),
            children: [po.d, " ", xQ("store:giftFor", {
              name: LQ
            })]
          }), !LQ && (0, HQ.jsxs)("div", {
            ...(0, mQ.S)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: uQ,
            children: [po.d, " ", xQ("store:chooseRecipient")]
          })]
        }),
        cta: (0, HQ.jsx)(oD, {
          state: FQ,
          item: "superRank",
          price: KQ.l.price,
          busy: qQ,
          highlight: oQ,
          onAct: bQ,
          onNeedRecipient: uQ,
          onLogin: YQ
        }),
        afterCta: (0, HQ.jsxs)(HQ.Fragment, {
          children: [AQ && (0, HQ.jsx)("span", {
            className: "StoreTileNote",
            children: AQ
          }), kQ && (0, HQ.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: xQ(kQ)
          })]
        })
      })
    }
    var rD = wQ(146);
    const ID = rD.m("kind", [rD.A({
      kind: rD.t("refused"),
      heldTierId: rD.N(),
      until: rD.y()
    }), rD.A({
      kind: rD.t("refund"),
      tierId: rD.N(),
      refundedMs: rD.y(),
      forfeitedMs: rD.y(),
      premiumCurrency: rD.y()
    }), rD.A({
      kind: rD.t("none")
    })]);
    async function UD(QQ) {
      const FQ = await (0, sQ.postJsonWithMetricsCookiesAndJsonResponse)(`${rQ.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: QQ
      }, {
        retries: 1
      });
      return ID.parse(FQ)
    }
    var ND = wQ(2943),
      TD = wQ(2972);

    function KD(QQ, FQ) {
      const wQ = Math.max(1, Math.round(FQ / jQ.j));
      return [1 === wQ ? `${QQ}OneDay` : QQ, {
        days: wQ.toLocaleString()
      }]
    }

    function zD() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, XQ.purchasesAllowed)() ? (0, HQ.jsx)(lD, {}) : null
    }

    function lD() {
      const {
        t: QQ
      } = (0, DQ.y)(), {
        userContext: FQ
      } = (0, xQ.e)(), {
        purchaseUnderWay: wQ,
        notice: qQ,
        subscribe: oQ
      } = (0, ND.d)(), [kQ, vQ] = (0, LQ.useState)(null), [uQ, bQ] = (0, LQ.useState)(0), [YQ, AQ] = (0, LQ.useState)(!1), tQ = (0, LQ.useRef)(!0), eQ = FQ !== sQ.NULL_USER_CONTEXT, MQ = null !== kQ && kQ.loadedFor === FQ ? kQ.offer : null, GQ = null === qQ || void 0 === qQ ? void 0 : qQ.pendingIntentId, pQ = (0, LQ.useRef)(GQ);

      function cQ() {
        bQ((QQ => QQ + 1))
      }
      async function CQ(QQ) {
        AQ(!1), await oQ(QQ), tQ.current && cQ()
      }
      if ((0, LQ.useEffect)((() => (tQ.current = !0, () => {
          tQ.current = !1
        })), []), (0, LQ.useEffect)((() => {
          void 0 !== pQ.current && void 0 === GQ && cQ(), pQ.current = GQ
        }), [GQ]), (0, LQ.useEffect)((() => {
          if (!eQ) return;
          let QQ = !1;
          return AQ(!1), async function() {
            const {
              offering: QQ
            } = await (0, kF.e)().getOfferings("superRankPage"), FQ = null === QQ || void 0 === QQ ? void 0 : QQ.packages.find((QQ => null !== QQ.price));
            return void 0 === FQ ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: FQ,
              preview: await UD(FQ.productId)
            }
          }().catch((QQ => (console.error("Billing: loading the Super Rank subscription or its preview failed:", QQ), {
            kind: "loadFailed"
          }))).then((wQ => {
            QQ || vQ((QQ => "loadFailed" === wQ.kind && (null === QQ || void 0 === QQ ? void 0 : QQ.loadedFor) === FQ ? QQ : {
              loadedFor: FQ,
              offer: wQ
            }))
          })), () => {
            QQ = !0
          }
        }), [FQ, eQ, uQ]), null === MQ) return null;
      if ("loaded" !== MQ.kind) return (0, HQ.jsx)(TD.f, {
        notice: {
          kind: "error",
          key: "unavailable" === MQ.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: SQ,
        preview: iQ
      } = MQ;
      if ("refused" === iQ.kind) return (0, HQ.jsx)(TD.f, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(iQ.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const WQ = (0, HD.e)(SQ.price);
      if (YQ && "refund" === iQ.kind) {
        const {
          refundedMs: FQ,
          forfeitedMs: LQ,
          premiumCurrency: qQ
        } = iQ, oQ = LQ + (0 === qQ ? FQ : 0), [DQ, kQ] = KD("payments:subscribeRefundsGemRank", FQ), [vQ, uQ] = KD("payments:subscribeForfeitsGemRank", oQ);
        return (0, HQ.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, HQ.jsx)("div", {
            children: QQ("payments:subscribeEndsGemRank")
          }), qQ > 0 && (0, HQ.jsx)("div", {
            children: QQ(DQ, {
              ...kQ,
              amount: qQ.toLocaleString()
            })
          }), oQ > 0 && (0, HQ.jsx)("div", {
            children: QQ(vQ, uQ)
          }), (0, HQ.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, HQ.jsx)(mQ.i, {
              onClick: () => {
                AQ(!1)
              },
              children: QQ("general:cancel")
            }), (0, HQ.jsx)(mQ.m, {
              onClick: () => {
                CQ(SQ)
              },
              loading: wQ,
              children: QQ("payments:subscribeContinue", {
                price: WQ
              })
            })]
          })]
        })
      }
      return (0, HQ.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, HQ.jsx)(TD.f, {
          notice: qQ,
          className: "SmallTextBold"
        }), (0, HQ.jsx)(TD.b, {
          className: "SmallTextBold"
        }), (0, HQ.jsx)(mQ.m, {
          onClick: () => {
            "refund" === iQ.kind ? AQ(!0) : CQ(SQ)
          },
          disabled: void 0 !== GQ,
          loading: wQ,
          children: QQ("payments:subscribeToSuperRank", {
            price: WQ
          })
        })]
      })
    }
    const jD = {
      kind: "board"
    };
    let aD = !1;

    function XD(QQ) {
      return "found" === QQ.status || "error" === QQ.status && "store:giftRecipientLookupFailed" === QQ.error ? QQ.name : null
    }(0, aQ.y)(bo.prefetchBillingOfferings);
    const fD = (0, LQ.memo)((function(QQ) {
      var FQ;
      let {
        show: qQ
      } = QQ;
      const {
        t: kQ
      } = (0, DQ.y)(), {
        userContext: vQ
      } = (0, xQ.e)(), mQ = vQ !== sQ.NULL_USER_CONTEXT, uQ = io(vQ), [bQ, YQ] = (0, tQ.b)(), {
        page: AQ,
        urlMode: eQ,
        goTo: MQ
      } = (0, Wo.i)(), GQ = function(QQ) {
        return "superRank" === QQ.kind ? "superRank" : "pack" === QQ.kind ? QQ.pack : null
      }(AQ), {
        openEverythingMenuName: pQ,
        gameState: cQ
      } = (0, iQ.l)(["openEverythingMenuName", "gameState"]), CQ = null !== pQ;
      ! function(QQ, FQ) {
        const [qQ] = (0, LQ.useState)(so.h), [oQ, DQ] = (0, LQ.useState)(!1);
        qQ && FQ && !oQ && DQ(!0);
        const kQ = (0, DL.n)(),
          vQ = qQ && oQ && QQ && !kQ;
        (0, LQ.useEffect)((() => {
          if (!vQ) return;
          let QQ = null,
            FQ = null,
            LQ = null;
          const qQ = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, kF.e)().purchaseUnderWay,
            oQ = () => {
              var wQ;
              null === (wQ = LQ) || void 0 === wQ || wQ(), LQ = null, null !== QQ && (clearTimeout(QQ), QQ = null), null !== FQ && (clearTimeout(FQ), FQ = null)
            },
            DQ = () => {
              (0, Ro.j)(!1), (0, Ro.i)(!1), oQ(), QQ = setTimeout((() => {
                QQ = null, LQ = (0, Oo.d)((() => {
                  LQ = null, qQ() ? DQ() : ((0, Ro.j)(!0), FQ = setTimeout((() => {
                    FQ = null, LQ = (0, Oo.d)((() => {
                      LQ = null, qQ() ? DQ() : (0, Ro.i)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => wQ(4501))).then((QQ => {
                    QQ.startBackgroundGameSetup()
                  }), (QQ => {
                    console.warn("Background game setup: its chunk failed to load", QQ)
                  })))
                }))
              }), 2e3)
            };
          for (const wQ of ro) window.addEventListener(wQ, DQ, {
            capture: !0,
            passive: !0
          });
          return DQ(), () => {
            for (const QQ of ro) window.removeEventListener(QQ, DQ, {
              capture: !0
            });
            oQ(), (0, Ro.j)(!1), (0, Ro.i)(!1)
          }
        }), [vQ])
      }(qQ && CQ, "pack" === AQ.kind);
      const SQ = "landingPage" === cQ;
      (0, LQ.useEffect)((() => {
        CQ && (0, bo.prefetchBillingOfferings)()
      }), [CQ]), (0, LQ.useEffect)((() => {
        CQ && !qQ && SQ && (0, Io.B)()
      }), [CQ, qQ, SQ]);
      const [WQ, RQ] = (0, LQ.useState)(0), [OQ, rQ] = (0, LQ.useState)(null), [IQ, UQ] = (0, LQ.useState)(null), [NQ, TQ] = (0, LQ.useState)(null), [zQ, lQ] = (0, LQ.useState)(null), jQ = (0, LQ.useRef)(null), fQ = (0, LQ.useRef)(null), VQ = (0, LQ.useRef)(null), hQ = (0, LQ.useRef)(!1), JQ = (0, aQ.G)(), EQ = (0, LQ.useRef)(0), nQ = (0, LQ.useRef)(!1);

      function gQ() {
        RQ((QQ => QQ + 1))
      }(0, LQ.useEffect)((() => {
        if (qQ) {
          if (aD = !0, (0, aQ.n)(), JQ && JQ.seq !== EQ.current) {
            var QQ;
            EQ.current = JQ.seq, "loginResume" !== JQ.source && (0, aQ.F)();
            const FQ = (0, aQ.d)(JQ);
            eQ || MQ(FQ), lQ(null !== (QQ = JQ.highlight) && void 0 !== QQ ? QQ : null), UQ(null), "gift" === JQ.mode && JQ.giftRecipientName ? uQ.choose(JQ.giftRecipientName, "prefilled") : "current" !== JQ.mode && uQ.clear(), "gift" !== JQ.mode || JQ.giftRecipientName || gQ(), (0, BQ.reportAnalyticsClick)({
              id: "store.open",
              value: JQ.source
            })
          } else nQ.current || (0, BQ.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          nQ.current = !0
        } else nQ.current = !1
      }), [qQ, JQ]), (0, LQ.useEffect)((() => {
        if (!zQ) return;
        const QQ = setTimeout((() => {
          lQ(null)
        }), 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [zQ]), (0, LQ.useLayoutEffect)((() => {
        const QQ = jQ.current;
        if (!qQ || !QQ) return fQ.current = null, void(VQ.current = null);
        var FQ;
        if (GQ) fQ.current = GQ, null === (FQ = QQ.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === FQ || FQ.focus();
        else if (fQ.current) {
          const FQ = VQ.current;
          null !== FQ && (QQ.scrollTop = FQ);
          const wQ = QQ.querySelector(`[data-store-item="${fQ.current}"]`);
          if (wQ) {
            const LQ = wQ.getBoundingClientRect(),
              qQ = QQ.getBoundingClientRect();
            wQ.focus({
              preventScroll: null !== FQ && LQ.bottom > qQ.top && LQ.top < qQ.bottom
            })
          }
          fQ.current = null
        }
      }), [GQ, qQ]), (0, LQ.useEffect)((() => {
        UQ(null)
      }), [uQ.query]), (0, LQ.useEffect)((() => {
        if (!NQ) return;
        const QQ = setTimeout((() => {
          TQ(null)
        }), 8e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [NQ]);
      const PQ = vQ.superRankInfo,
        ZQ = vQ.isLoggedIn() || (0, XQ.guestsMayBuy)(),
        yQ = vQ.getOwnedCosmeticPacks(),
        dQ = (0, po.r)(uQ.query),
        QF = (0, po.g)({
          mode: dQ,
          loggedIn: mQ ? ZQ : null,
          superRankInfo: PQ,
          now: Date.now(),
          ownedPacks: yQ,
          packs: Ho.u,
          recipient: uQ.recipient
        });
      (0, LQ.useEffect)((() => {
        if (!ZQ || !qQ) return;
        const QQ = (0, aQ.F)(),
          FQ = QQ && (0, po.o)(QQ, Ho.u);
        QQ && FQ && ((0, BQ.reportAnalyticsClick)({
          id: "store.login_resume",
          value: QQ.item
        }), (0, aQ.o)(FQ))
      }), [ZQ, qQ]);
      const FF = (0, po.t)({
        superRankDaysLeft: QF.superRankDaysLeft,
        openedThisSession: aD || qQ,
        seenNewItems: (0, aQ.j)()
      });
      if ((0, LQ.useEffect)((() => {
          (0, aQ.C)(FF)
        }), [FF]), !qQ || !(0, XQ.purchasesAllowed)()) return null;
      const wF = YQ > bQ && bQ <= 700,
        LF = !wF && YQ <= 420,
        qF = "gift" === dQ ? XD(uQ.recipient) : null,
        oF = null !== OQ;

      function DF(QQ) {
        (0, xo.e)(QQ, "gift" === dQ ? uQ.query.trim() : null)
      }

      function vF(QQ, FQ) {
        (0, BQ.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${FQ?"gift":"self"}:${QQ}`
        }), FQ && (uQ.recordGift(FQ.name, QQ), mF(FQ))
      }

      function mF(QQ) {
        ! function(QQ) {
          try {
            EF.i.setItem(co, (0, po.z)(So(), QQ))
          } catch {}
        }({
          name: QQ.name,
          cosmetics: QQ.cosmetics
        }), MQ(jD), TQ((FQ => {
          var wQ;
          return {
            name: QQ.name,
            seq: (null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.seq) && void 0 !== wQ ? wQ : 0) + 1
          }
        }))
      }
      async function uF(QQ) {
        var FQ, wQ;
        if (hQ.current) return;
        if (!ZQ) return void DF(QQ);
        UQ(null), lQ(null);
        const LQ = "gift" === dQ ? {
          name: XD(uQ.recipient),
          cosmetics: uQ.recipientCosmetics
        } : null;
        if (LQ && !LQ.name) return void gQ();
        const qQ = "superRank" === QQ ? KQ.l.id : (0, KQ.d)(QQ);
        hQ.current = !0;
        const oQ = await (0, Go.b)(qQ, null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.name) && void 0 !== FQ ? FQ : null);
        if (hQ.current = !1, !oQ) return;
        rQ(QQ);
        const DQ = await Ao.c.purchase(qQ, null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ.name) && void 0 !== wQ ? wQ : null);
        rQ(null), DQ ? UQ(DQ) : (vF(QQ, LQ), LQ || (await (0, to.flushClientAnalyticsEvents)(), (0, Yo.refreshWithoutConfirmation)("superRank" === QQ ? "/super-rank-welcome" : `/pack-welcome/${QQ}`)))
      }
      const HF = oQ()("Store", {
        StoreGift: "gift" === dQ,
        StorePortrait: wF,
        StoreCompact: LF
      });
      if ("pack" === AQ.kind) {
        const QQ = AQ.pack,
          FQ = QF.packs.find((FQ => FQ.pack === QQ));
        return (0, HQ.jsx)("div", {
          ref: jQ,
          className: "CosmeticShopContainer",
          children: (0, HQ.jsx)(Mo.e, {
            pack: QQ,
            onBack: () => {
              MQ(jD)
            },
            onPurchased: FQ => {
              vF(QQ, FQ ? {
                name: FQ,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === dQ && qF && FQ && (0, HQ.jsxs)(HQ.Fragment, {
              children: [(0, HQ.jsx)(oD, {
                state: FQ.state,
                item: QQ,
                price: (bF = QQ, "superRank" === bF ? KQ.l.price : (0, KQ.g)(bF)),
                busy: oF,
                onAct: () => {
                  uF(QQ)
                },
                onNeedRecipient: () => {
                  MQ(jD), gQ()
                },
                onLogin: () => {
                  DF(QQ)
                },
                highlight: zQ === QQ
              }), IQ && (0, HQ.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: kQ(IQ)
              })]
            }),
            ownedPacks: yQ,
            startAsGift: "gift" === dQ,
            initialGiftRecipient: "gift" === dQ ? null !== qF && void 0 !== qF ? qF : uQ.query.trim() : "",
            highlightCta: zQ === QQ
          }, QQ)
        })
      }
      var bF;
      return "superRank" === AQ.kind ? (0, HQ.jsx)("div", {
        ref: jQ,
        className: oQ()(HF, "StoreDetailView"),
        children: (0, HQ.jsx)(sD, {
          state: QF.superRank.state,
          mode: dQ,
          giftName: qF,
          busy: oF,
          highlight: "superRank" === zQ,
          purchaseError: IQ,
          onBack: () => {
            MQ(jD)
          },
          onChooseRecipient: () => {
            MQ(jD), gQ()
          },
          onAct: () => {
            uF("superRank")
          },
          onLogin: () => {
            DF("superRank")
          }
        })
      }) : (0, HQ.jsxs)("div", {
        ref: jQ,
        className: HF,
        onScroll: QQ => {
          VQ.current = QQ.currentTarget.scrollTop
        },
        children: [(0, HQ.jsx)("div", {
          className: "StoreTopRow",
          children: (0, HQ.jsx)(ao, {
            selfName: mQ ? vQ.getPlayerName() : "",
            giftRecipient: uQ,
            suggestionsVersion: null !== (FQ = null === NQ || void 0 === NQ ? void 0 : NQ.seq) && void 0 !== FQ ? FQ : 0,
            pulseSignal: WQ,
            disabled: oF || !mQ
          })
        }), NQ && (0, HQ.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            TQ(null)
          },
          children: [(0, HQ.jsx)(eo.d, {
            showSignal: NQ.seq
          }), po.d, " ", kQ("store:giftSent", {
            name: NQ.name
          })]
        }, NQ.seq), !NQ && IQ && (0, HQ.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: kQ(IQ)
        }), (0, HQ.jsx)(OD, {
          layout: QF,
          mountAtOnce: null !== fQ.current,
          bundleGift: "gift" === dQ ? {
            recipientName: qF,
            lookingUp: "pending" === uQ.recipient.status,
            busy: oF,
            onNeedRecipient: gQ,
            onSent: QQ => {
              (0, BQ.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), mF({
                name: QQ,
                cosmetics: uQ.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, po.v)(PQ),
          busy: oF,
          highlightItem: zQ,
          onOpen: function(QQ) {
            (0, BQ.reportAnalyticsClick)({
              id: "store.item_open",
              value: QQ
            }), MQ((0, aQ.f)(QQ))
          },
          onAct: uF,
          onNeedRecipient: gQ,
          onLogin: DF
        }), "gift" !== dQ && (0, HQ.jsx)(zD, {})]
      })
    }));
    var VD = wQ(2585),
      hD = wQ(8604),
      JD = wQ(8408),
      ED = wQ(2649),
      nD = wQ(2475),
      gD = wQ(2531),
      PD = wQ(2545),
      ZD = wQ(2552),
      yD = wQ(2633),
      BD = wQ(2621),
      dD = wQ(2267),
      Qk = wQ(2304),
      Fk = wQ(2290),
      wk = wQ(1998),
      Lk = wQ(2561),
      qk = wQ(2311);

    function Dk(QQ) {
      let {
        show: FQ
      } = QQ;
      return FQ ? (0, HQ.jsx)(kk, {}) : null
    }

    function kk() {
      const {
        t: QQ
      } = (0, DQ.y)(), {
        followsLeader: FQ
      } = (0, nD.d)(), {
        loading: wQ,
        friends: qQ,
        requests: vQ,
        invites: uQ
      } = (0, VQ.m)(), {
        userContext: bQ
      } = (0, xQ.e)(), [YQ, AQ] = (0, LQ.useState)(qk.k);
      (0, LQ.useEffect)((() => {
        (0, qk.b)()
      }), []);
      const tQ = vQ.map((QQ => QQ.name)),
        {
          state: eQ,
          recentRequesters: MQ
        } = (0, BD.r)(),
        GQ = new Map([...("loaded" === eQ.status ? eQ.recentPlayers : []).map((QQ => [QQ.preview.name, QQ])), ...MQ.map((QQ => [QQ.name, QQ]))]),
        pQ = (0, LQ.useRef)(null),
        [SQ, iQ] = (0, LQ.useState)(""),
        [WQ, RQ] = (0, LQ.useState)("Enter"),
        [OQ, sQ] = (0, LQ.useState)(null);

      function rQ() {
        SQ && (RQ("Loading"), (0, Fk.j)(SQ, "social_menu").then((QQ => {
          if (pQ.current) switch (QQ.kind) {
            case "sent":
              RQ("Success");
              break;
            case "becameFriends":
              RQ("BecameFriends");
              break;
            case "failed":
              sQ(QQ.message), RQ("Error")
          }
        })))
      }
      return (0, LQ.useEffect)((() => {
        if ("Enter" === WQ || "Loading" === WQ) return;
        const QQ = setTimeout((() => {
          pQ.current.value = "", iQ(""), RQ("Enter")
        }), "Success" === WQ ? 1e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [WQ]), (0, HQ.jsx)("div", {
        className: "SocialMenu",
        children: (0, HQ.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, HQ.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, HQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, HQ.jsx)(ZD.b, {
                label: QQ("socialBar:addFriend")
              }), (0, HQ.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, HQ.jsxs)("div", {
                  className: oQ()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${WQ}`]: !0
                  }),
                  children: ["Loading" === WQ && (0, HQ.jsx)(CQ.c, {}), "Success" === WQ && (0, HQ.jsx)(kQ.c, {
                    name: "check"
                  }), "BecameFriends" === WQ && (0, HQ.jsx)(HQ.Fragment, {
                    children: QQ("socialBar:nowFriends", {
                      playerName: SQ
                    })
                  }), "Error" === WQ && OQ && (0, HQ.jsx)(HQ.Fragment, {
                    children: QQ(OQ.translationKey, OQ.params)
                  })]
                }), (0, HQ.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, HQ.jsx)(cQ.b, {
                    className: "PlayerSearchInput",
                    placeholderText: QQ("socialBar:enterPlayerName"),
                    domRef: pQ,
                    onValueChange: QQ => {
                      iQ((0, NQ.s)(QQ)), pQ.current.value = (0, NQ.s)(QQ)
                    },
                    onEnter: () => {
                      SQ && (0, BQ.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), rQ()
                    }
                  }), (0, HQ.jsxs)(mQ.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      rQ()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, HQ.jsx)(kQ.c, {
                      name: "user-plus"
                    }), " ", QQ("socialBar:sendRequest")]
                  })]
                })]
              }), (0, HQ.jsx)(Lk.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), uQ.length > 0 && (0, HQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, HQ.jsx)(ZD.b, {
                label: QQ("socialBar:invites"),
                meta: uQ.length
              }), uQ.map((FQ => (0, HQ.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, HQ.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, HQ.jsx)(dD.b, {
                    invite: FQ
                  })
                }), (0, HQ.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, HQ.jsx)(dD.c, {
                    invite: FQ
                  })
                }), (0, HQ.jsx)(mQ.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Qk.e)(FQ)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${FQ.destination.kind}`
                  },
                  children: QQ("general:join")
                }), (0, HQ.jsx)(PQ.f, {
                  tooltipInner: (0, HQ.jsx)(HQ.Fragment, {
                    children: QQ("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, HQ.jsx)(mQ.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === YQ || void 0 === YQ ? void 0 : YQ.kind) && YQ.inviteId === FQ.id,
                    onClick: () => {
                      VQ.e.declineInvite(FQ.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${FQ.destination.kind}`
                    },
                    children: (0, HQ.jsx)(kQ.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, FQ.id)))]
            }), (0, HQ.jsxs)("div", {
              className: oQ()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !wQ && 0 === vQ.length
              }),
              children: [(0, HQ.jsx)(ZD.b, {
                label: (0, HQ.jsxs)(HQ.Fragment, {
                  children: [(0, HQ.jsx)(kQ.c, {
                    name: wk.i
                  }), " ", QQ("socialBar:requests")]
                }),
                meta: (0, HQ.jsxs)(HQ.Fragment, {
                  children: [vQ.length, vQ.length === ZQ.p && (0, HQ.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: QQ("socialBar:limitReached")
                  })]
                })
              }), wQ && (0, HQ.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, HQ.jsx)(CQ.c, {})
              }), !wQ && 0 === vQ.length && (0, HQ.jsx)("div", {
                className: "SocialMenuEmpty",
                children: QQ("socialBar:noFriendRequests")
              }), !wQ && vQ.length > 0 && (0, HQ.jsx)("div", {
                className: "PlayerRows",
                children: (0, HQ.jsx)(Aq.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [vQ],
                  children: vQ.map(((FQ, wQ) => {
                    const LQ = GQ.get(FQ.name);
                    return (0, HQ.jsxs)(PD.f, {
                      playerSocialPreview: FQ,
                      zIndex: vQ.length - wQ,
                      padDefaultFocus: (0, qk.j)(YQ, FQ.name, wQ),
                      status: LQ && (0, HQ.jsx)(yD.e, {
                        gameNameWithVariation: LQ.gameNameWithVariation,
                        isPrivateLobby: LQ.isPrivateLobby
                      }),
                      children: [(0, HQ.jsx)(PQ.f, {
                        tooltipInner: (0, HQ.jsx)(HQ.Fragment, {
                          children: QQ("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, HQ.jsx)(mQ.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            AQ((0, qk.f)(tQ, wQ)), (0, Fk.i)(FQ.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, HQ.jsx)(kQ.c, {
                            name: "check"
                          })
                        })
                      }), (0, HQ.jsx)(PQ.f, {
                        tooltipInner: (0, HQ.jsx)(HQ.Fragment, {
                          children: QQ("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, HQ.jsx)(mQ.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            AQ((0, qk.f)(tQ, wQ)), (0, Fk.i)(FQ.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, HQ.jsx)(kQ.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${FQ.name}_${FQ.isError}`)
                  }))
                })
              })]
            }), (0, HQ.jsx)(yD.k, {})]
          }), (0, HQ.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, HQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, HQ.jsx)(ZD.b, {
                label: QQ("socialBar:party")
              }), (0, HQ.jsx)(gD.e, {})]
            }), (0, HQ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, HQ.jsx)(ZD.b, {
                label: (0, HQ.jsxs)(HQ.Fragment, {
                  children: [(0, HQ.jsx)(kQ.c, {
                    name: wk.e
                  }), " ", QQ("socialBar:friends")]
                }),
                meta: (0, HQ.jsxs)(HQ.Fragment, {
                  children: [qQ.length, qQ.length >= (0, ZQ.e)(bQ.getPlayerRanks()) && (0, HQ.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: QQ("socialBar:limitReached")
                  })]
                })
              }), wQ && (0, HQ.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, HQ.jsx)(CQ.c, {})
              }), !wQ && 0 === qQ.length && (0, HQ.jsx)("div", {
                className: "SocialMenuEmpty",
                children: QQ("socialBar:noFriends")
              }), !wQ && qQ.length > 0 && (0, HQ.jsx)("div", {
                className: "PlayerRows",
                children: (0, HQ.jsx)(Aq.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [qQ],
                  children: qQ.map(((QQ, wQ) => (0, HQ.jsx)(PD.f, {
                    playerSocialPreview: QQ,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: QQ => {
                      VQ.e.removeFriendFromState(QQ)
                    },
                    zIndex: qQ.length - wQ,
                    children: (0, HQ.jsx)(PD.c, {
                      friend: QQ,
                      followsLeader: FQ,
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
    var vk = wQ(2464);
    const mk = QQ => {
        let {
          action: FQ,
          padAction: wQ
        } = QQ;
        const {
          isTouchScreen: LQ
        } = (0, iQ.l)(["isTouchScreen"]), qQ = (0, DL.n)();
        return LQ && !qQ ? null : (0, HQ.jsx)(dw.e, {
          className: "EverythingMenuTabKey",
          noaAction: FQ,
          padHidesKey: !0,
          padMenuShortcut: wQ
        })
      },
      uk = (0, LQ.memo)((function() {
        const {
          t: QQ
        } = (0, DQ.y)(), {
          gameState: FQ,
          openEverythingMenuName: wQ,
          initSdkSelectorFinished: qQ,
          crosshairGameView: kQ
        } = (0, iQ.l)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: vQ
        } = (0, xQ.e)(), uQ = (0, XQ.purchasesAllowed)(), bQ = (0, aQ.I)(), YQ = (QQ, FQ) => (0, HQ.jsx)(mk, {
          action: QQ,
          padAction: FQ
        }), [AQ, tQ] = (0, LQ.useState)(null), MQ = (0, LQ.useRef)(null), GQ = {
          ..."inGame" === FQ ? {} : (0, mQ.S)({
            focusOnClick: !1
          }),
          ...tL.h
        }, pQ = QQ => {
          const FQ = (0, eL.i)((FQ => {
            (0, mQ.O)(FQ.currentTarget), iQ.c.set({
              openEverythingMenuName: QQ
            })
          }), "pointerup");
          return {
            ...GQ,
            onPointerDown: QQ => {
              GQ.onPointerDown(QQ), FQ.onPointerDown(QQ)
            },
            onPointerUp: QQ => {
              GQ.onPointerUp(QQ), FQ.onPointerUp(QQ)
            },
            onClick: FQ.onClick
          }
        }, cQ = null !== wQ, CQ = wQ !== mF.n.COSMETIC_SHOP && !kQ;
        async function SQ() {
          await async function() {
            if (!AQ) return;
            await AQ(), tQ(null)
          }(), iQ.c.set({
            openEverythingMenuName: null
          })
        }
        const WQ = (0, LQ.useRef)(null),
          RQ = (0, LQ.useCallback)((() => null !== WQ.current && (0, JD.f)(WQ.current)), []);

        function sQ() {
          RQ() || SQ()
        }(0, LQ.useEffect)((() => (0, oo.q)(RQ)), [RQ]);
        const rQ = (0, LQ.useMemo)((() => "inGame" === FQ ? {
          text: QQ("settingsMenu:exitGame"),
          onClick: () => {
            (0, hD.b)()
          }
        } : (0, OQ.d)() ? {
          text: QQ("settingsMenu:exitGame"),
          onClick: () => {
            oF.k.discordActivity().then((QQ => {
              QQ.exit("User exited the game")
            }))
          }
        } : null), [FQ, QQ]);
        const IQ = (0, HQ.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: sQ,
          children: (0, HQ.jsx)(mQ.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, HQ.jsx)(ML.c, {
          showing: cQ,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: wQ === mF.n.SHOP,
          doGameplayStartStopOnShow: "inGame" === FQ,
          children: (0, HQ.jsx)(pL.b, {
            className: "EverythingMenuContainer",
            show: cQ && !kQ,
            children: (0, HQ.jsx)(GL.d, {
              close: sQ,
              togglePointerLock: !1,
              children: (0, HQ.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, oo.i)(wQ) && (0, HQ.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, HQ.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [rQ && (0, HQ.jsx)(mQ.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        rQ.onClick()
                      },
                      children: rQ.text
                    }), cQ && uQ && (0, HQ.jsx)("div", {
                      ...GQ,
                      className: "EverythingMenuWallet",
                      title: QQ("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, aQ.o)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, HQ.jsx)(VD.c, {})
                    })]
                  }), (0, HQ.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, HQ.jsxs)("div", {
                      ...pQ(mF.n.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": wQ === mF.n.SETTINGS ? "true" : void 0,
                      className: oQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: wQ === mF.n.SETTINGS
                      }),
                      children: [QQ("general:settings"), YQ("OpenSettings", "pause")]
                    }), (0, HQ.jsxs)("div", {
                      ...pQ(mF.n.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": wQ === mF.n.CUSTOMISATION ? "true" : void 0,
                      className: oQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: wQ === mF.n.CUSTOMISATION
                      }),
                      children: [QQ("general:player"), YQ("OpenCharacterCustomization")]
                    }), eQ.featureFlags.useSocialFeatures && (0, HQ.jsxs)("div", {
                      ...pQ(mF.n.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": wQ === mF.n.SOCIAL ? "true" : void 0,
                      className: oQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: wQ === mF.n.SOCIAL
                      }),
                      ...(0, BQ.e)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, wQ === mF.n.SOCIAL),
                      children: [QQ("socialBar:social"), (0, HQ.jsx)(vk.b, {})]
                    }), uQ && (0, HQ.jsxs)("div", {
                      ...pQ(mF.n.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": wQ === mF.n.COSMETIC_SHOP ? "true" : void 0,
                      className: oQ()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: wQ === mF.n.COSMETIC_SHOP
                      }),
                      children: [(0, HQ.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: QQ("store:title")
                      }), "new" === bQ && (0, HQ.jsx)(AD, {}), "dot" === bQ && (0, HQ.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === FQ && (0, HQ.jsxs)("div", {
                      ...pQ(mF.n.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": wQ === mF.n.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: oQ()("EverythingMenuTab", {
                        EverythingMenuTabActive: wQ === mF.n.LOBBY_LEADERBOARD
                      }),
                      children: [QQ("general:lobby"), YQ("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, HQ.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: IQ
                  })]
                }), (0, oo.i)(wQ) && IQ, (0, HQ.jsxs)("div", {
                  ref: WQ,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === FQ ? "0.85" : "1"
                  },
                  children: [(0, HQ.jsx)(HL, {
                    show: wQ === mF.n.SETTINGS,
                    setBeforeResumeCallback: tQ
                  }), (0, HQ.jsx)(AL, {
                    show: wQ === mF.n.CUSTOMISATION
                  }), (0, HQ.jsx)(LQ.Suspense, {
                    fallback: null,
                    children: (0, HQ.jsx)(Zq, {
                      show: wQ === mF.n.SHOP
                    })
                  }), (0, HQ.jsx)(mo, {
                    show: wQ === mF.n.LOBBY_LEADERBOARD
                  }), (0, HQ.jsx)(fD, {
                    show: wQ === mF.n.COSMETIC_SHOP
                  }), (0, HQ.jsx)(Dk, {
                    show: wQ === mF.n.SOCIAL
                  })]
                }), !(0, eQ.isMobileApp)() && (0, cL.e)(vQ.getPlayerRanks()) && (0, HQ.jsx)(pL.b, {
                  ref: MQ,
                  className: "EverythingMenuBannerDiv",
                  show: CQ,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, HQ.jsx)(ED.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: MQ
                    },
                    showing: cQ && CQ,
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
  9103: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(317),
      qQ = wQ(9110);

    function oQ(QQ, FQ, wQ) {
      const oQ = Object.entries(FQ).sort(((QQ, FQ) => FQ[1] - QQ[1])),
        DQ = (0, LQ.ub)(QQ);
      DQ.push(QQ ? "\n\n" : "\n");
      for (const [qQ, xQ] of oQ) {
        var kQ, vQ, mQ;
        const QQ = null !== (kQ = null === wQ || void 0 === wQ || null === (vQ = wQ[qQ]) || void 0 === vQ ? void 0 : vQ.icon) && void 0 !== kQ ? kQ : `${qQ} Enchantment`;
        DQ.push({
          icon: QQ,
          style: {
            fontSize: "1.5rem"
          }
        }), DQ.push({
          str: `${qQ} ${null!==(mQ=(0,LQ.S)(xQ))&&void 0!==mQ?mQ:xQ}\n`
        })
      }
      DQ.push({
        str: "\n"
      });
      for (const [LQ, xQ] of oQ) {
        var uQ, HQ, bQ, YQ;
        const QQ = null !== (uQ = null === wQ || void 0 === wQ || null === (HQ = wQ[LQ]) || void 0 === HQ ? void 0 : HQ.icon) && void 0 !== uQ ? uQ : `${LQ} Enchantment`,
          FQ = null !== (bQ = null === wQ || void 0 === wQ || null === (YQ = wQ[LQ]) || void 0 === YQ ? void 0 : YQ.description) && void 0 !== bQ ? bQ : (0, qQ.g)(LQ);
        DQ.push({
          icon: QQ,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), DQ.push({
          str: FQ,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), DQ.push({
          str: "\n"
        })
      }
      return DQ
    }
  },
  9116: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ,
      f: () => MQ,
      j: () => tQ,
      m: () => vQ,
      n: () => eQ,
      o: () => uQ,
      p: () => bQ,
      q: () => AQ,
      s: () => HQ
    });
    var LQ = wQ(307),
      qQ = wQ(619),
      oQ = wQ(317),
      DQ = wQ(4112),
      kQ = wQ(9103);

    function vQ(QQ, FQ) {
      var wQ;
      let {
        player: LQ,
        chestOrCreative: qQ
      } = QQ;
      var oQ;
      return FQ < LQ.length ? null !== (oQ = LQ[FQ]) && void 0 !== oQ ? oQ : null : null !== (wQ = qQ[FQ - LQ.length]) && void 0 !== wQ ? wQ : null
    }

    function mQ(QQ) {
      var FQ;
      return null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : 0
    }

    function uQ(QQ) {
      return 0 === QQ.button || void 0 === QQ.button
    }

    function HQ(QQ) {
      return !!QQ.shiftKey
    }

    function bQ(QQ) {
      return "touches" in QQ || "touch" === QQ.pointerType || "pen" === QQ.pointerType
    }
    const YQ = new Set,
      xQ = 50;

    function AQ(QQ, FQ) {
      var wQ;
      const LQ = null === (wQ = QQ[FQ]) || void 0 === wQ ? void 0 : wQ.displayName;
      return (0, qQ.F)(LQ) ? "string" !== typeof FQ ? "" : (!YQ.has(FQ) && YQ.size < xQ && (YQ.add(FQ), console.warn(`No item called "${FQ}", so its hover shows the name as given`)), FQ) : LQ
    }

    function tQ(QQ, FQ, wQ) {
      var vQ, mQ, uQ, HQ, bQ, YQ, xQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ;
      const SQ = QQ.attributes,
        iQ = null !== (vQ = null === (mQ = FQ[QQ.name]) || void 0 === mQ ? void 0 : mQ.rootName) && void 0 !== vQ ? vQ : QQ.name,
        WQ = null !== (uQ = null !== (HQ = SQ.customDisplayName) && void 0 !== HQ ? HQ : null === (bQ = FQ[QQ.name]) || void 0 === bQ ? void 0 : bQ.displayName) && void 0 !== uQ ? uQ : AQ(FQ, iQ);
      let RQ = WQ;
      const OQ = null === (YQ = SQ.customAttributes) || void 0 === YQ ? void 0 : YQ.enchantmentTier;
      OQ && (RQ = (0, oQ.ub)(WQ, {
        colour: oQ.pb[OQ]
      }));
      const sQ = null !== (xQ = null !== (tQ = null !== (eQ = function(QQ, FQ) {
        var wQ;
        if (void 0 === QQ || null !== (wQ = FQ.customAttributes) && void 0 !== wQ && wQ.author) return QQ;
        const qQ = (0, LQ.ec)(QQ);
        return qQ.every((QQ => "string" === typeof QQ)) ? QQ : qQ.map((QQ => "string" === typeof QQ ? QQ : {
          icon: QQ.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(SQ.customDescription, SQ)) && void 0 !== eQ ? eQ : null === (MQ = FQ[QQ.name]) || void 0 === MQ ? void 0 : MQ.description) && void 0 !== tQ ? tQ : null === (GQ = FQ[iQ]) || void 0 === GQ ? void 0 : GQ.description) && void 0 !== xQ ? xQ : "";
      let rQ = sQ;
      if (null !== (pQ = SQ.customAttributes) && void 0 !== pQ && pQ.enchantments) rQ = (0, kQ.b)(sQ, SQ.customAttributes.enchantments, SQ.customAttributes.enchantmentData);
      else if (wQ[iQ]) rQ = (0, oQ.ub)(sQ), rQ.push({
        str: "\n"
      }), rQ.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (cQ = SQ.customAttributes) && void 0 !== cQ && cQ.mobSettings) {
        var IQ, UQ;
        const QQ = SQ.customAttributes.mobSettings;
        var NQ, TQ;
        if (rQ = [], (0, qQ.F)(SQ.customAttributes.health) || (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: SQ.customAttributes.health.toString()
          }), (0, qQ.F)(QQ.maxHealth) || (rQ.push({
            str: "/"
          }), rQ.push({
            str: QQ.maxHealth.toString()
          }))), !(0, qQ.F)(QQ.attackDamage) && QQ.attackDamage > 0 && (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: QQ.attackDamage.toString()
          })), !(0, qQ.F)(QQ.secondaryAttackDamage) && QQ.secondaryAttackDamage > 0 && (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: QQ.secondaryAttackDamage.toString()
          })), (0, qQ.F)(QQ.baseRunningSpeed) || (rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: " "
          }), rQ.push({
            str: QQ.baseRunningSpeed.toFixed(2)
          })), "Saddled" === QQ.metaInfo) rQ.push({
          str: "\n"
        }), rQ.push({
          str: {
            translationKey: "general:has"
          }
        }), rQ.push({
          str: " "
        }), rQ.push({
          icon: null !== (NQ = null === (TQ = QQ.tameInfo) || void 0 === TQ ? void 0 : TQ.saddleItemName) && void 0 !== NQ ? NQ : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (rQ.push({
            str: "\n"
          }), rQ.push({
            str: "\n"
          }), QQ.petInfo && null !== (IQ = QQ.tameInfo) && void 0 !== IQ && IQ.supportsFriendship) {
          const FQ = DQ.b.getIconsFromFriendshipPoints(QQ.petInfo.friendshipPoints);
          for (const QQ of FQ) rQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          rQ.push({
            str: "\n"
          });
          const wQ = DQ.b.getMobHungerLevel(QQ.petInfo.lastFedAt);
          for (const QQ of DQ.b.hungerLevelIcons[wQ]) rQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          rQ.push({
            str: " "
          }), rQ.push({
            str: DQ.b.hungerLevelTranslations[wQ],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (QQ.tameInfo && null !== (UQ = QQ.tameInfo) && void 0 !== UQ && UQ.supportsFriendship) {
          var KQ, zQ;
          let FQ = null !== (KQ = QQ.tameInfo.likedFoods) && void 0 !== KQ ? KQ : [];
          rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Superliked]
            }
          }), rQ.push({
            str: " "
          }), null !== (zQ = QQ.petInfo) && void 0 !== zQ && zQ.superlikedFoodKnown ? (rQ.push({
            icon: QQ.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), FQ = FQ.filter((FQ => FQ !== QQ.petInfo.superlikedFood))) : rQ.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Liked]
            }
          }), rQ.push({
            str: " "
          });
          for (const QQ of FQ) rQ.push({
            icon: QQ,
            style: {
              fontSize: "1.5em"
            }
          });
          rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Neutral]
            }
          }), rQ.push({
            str: " "
          });
          for (const wQ of null !== (lQ = QQ.tameInfo.neutralFoods) && void 0 !== lQ ? lQ : []) {
            var lQ;
            rQ.push({
              icon: wQ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          rQ.push({
            str: "\n"
          }), rQ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: DQ.b.feedTextColours[DQ.b.MobFoodType.Disliked]
            }
          }), rQ.push({
            str: " "
          });
          for (const wQ of null !== (jQ = QQ.tameInfo.dislikedFoods) && void 0 !== jQ ? jQ : []) {
            var jQ;
            rQ.push({
              icon: wQ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        rQ.length > 0 ? (rQ.shift(), rQ.unshift(...(0, oQ.ub)(sQ))) : rQ = (0, oQ.ub)(sQ)
      }
      return {
        name: RQ,
        desc: rQ,
        fontStyle: null !== (CQ = SQ.customAttributes) && void 0 !== CQ && CQ.author ? "italic" : "normal"
      }
    }

    function eQ(QQ, FQ, wQ, LQ) {
      const qQ = vQ(QQ, wQ),
        oQ = vQ(QQ, LQ);
      if (!qQ) return !1;
      const DQ = FQ[qQ.name].armourReduction,
        kQ = FQ[oQ.name].armourReduction;
      if (kQ === DQ) {
        var mQ, uQ, HQ, bQ;
        const QQ = null !== (mQ = null === (uQ = qQ.attributes.customAttributes) || void 0 === uQ ? void 0 : uQ.enchantmentTier) && void 0 !== mQ ? mQ : "Tier 0",
          FQ = null !== (HQ = null === (bQ = oQ.attributes.customAttributes) || void 0 === bQ ? void 0 : bQ.enchantmentTier) && void 0 !== HQ ? HQ : "Tier 0";
        return parseInt(QQ.replace("Tier ", "")) >= parseInt(FQ.replace("Tier ", ""))
      }
      return DQ > kQ
    }

    function MQ(QQ) {
      let FQ;
      if ("number" === typeof QQ) {
        const wQ = document.querySelector(`[data-inven-idx="${QQ}"]`);
        if (!wQ) return null;
        FQ = wQ.getBoundingClientRect()
      } else FQ = QQ.getBoundingClientRect();
      return {
        x: FQ.left + FQ.width / 2,
        y: FQ.top + FQ.height / 2
      }
    }
  },
  8995: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YQ,
      d: () => xQ,
      g: () => AQ
    });
    var LQ = wQ(1451),
      qQ = wQ(53),
      oQ = wQ(1326),
      DQ = wQ(4376),
      kQ = wQ(2276),
      vQ = wQ(1207),
      mQ = wQ(96),
      uQ = wQ(1927),
      HQ = wQ(1348),
      bQ = wQ(1107);

    function YQ(QQ) {
      let {
        show: FQ,
        onClose: wQ
      } = QQ;
      const {
        requestedGameNameWithVariation: LQ,
        lobbyName: qQ,
        shownLobbyName: oQ
      } = (0, uQ.k)("connectedGame"), vQ = (0, kQ.c)(LQ, qQ, !1);
      return mQ.featureFlags.canUseInviteLinks && (0, bQ.jsx)(DQ.d, {
        show: FQ,
        close: wQ,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, bQ.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, bQ.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, bQ.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, bQ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === vQ ? (0, bQ.jsx)(HQ.c, {}) : vQ, (0, bQ.jsx)("br", {}), "Lobby Name: ", oQ, (0, bQ.jsx)("br", {}), (0, bQ.jsx)("br", {}), (0, bQ.jsx)("br", {}), (0, bQ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, bQ.jsx)(xQ, {})]
        })
      })
    }

    function xQ() {
      var QQ;
      const {
        t: FQ
      } = (0, vQ.y)(), wQ = null !== (QQ = AQ(mQ.featureFlags.canUseInviteLinks)) && void 0 !== QQ ? QQ : "Loading Link...", [oQ, DQ] = (0, qQ.useState)(0), [kQ, uQ] = (0, qQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.useEffect)((() => {
        const QQ = setTimeout((() => {
          uQ()
        }), 1100);
        return () => {
          clearTimeout(QQ)
        }
      }), [oQ]), mQ.featureFlags.canUseInviteLinks && (0, bQ.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, bQ.jsx)("div", {
          className: "InviteLinkInner",
          children: wQ
        }), (0, bQ.jsx)(LQ.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(wQ).catch((QQ => {
              console.error("Failed to copy invite link:", QQ)
            })), DQ(Date.now())
          },
          disabled: Date.now() - oQ < 1e3,
          children: Date.now() - oQ < 1e3 ? FQ("general:copied") : FQ("general:copy")
        })]
      })
    }

    function AQ(QQ) {
      const [FQ, wQ] = (0, qQ.useState)(null);
      return (0, qQ.useEffect)((() => {
        if (!QQ) return;
        let FQ = !0;
        return (0, oQ.E)().then((QQ => {
          FQ && wQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get invite link:", QQ)
        })), () => {
          FQ = !1
        }
      }), [QQ]), FQ
    }
  },
  9091: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1927),
      kQ = wQ(1107);

    function vQ(QQ) {
      const FQ = Math.floor(QQ / 3600),
        wQ = Math.floor(QQ % 3600 / 60),
        LQ = Math.floor(QQ % 60),
        qQ = `${wQ.toString().padStart(2,"0")}:${LQ.toString().padStart(2,"0")}`;
      return FQ > 0 ? `${FQ}:${qQ}` : qQ
    }
    const mQ = (0, LQ.memo)((function(QQ) {
      let {
        className: FQ
      } = QQ;
      const {
        recording: wQ,
        seconds: LQ
      } = (0, DQ.k)("replayRecorder");
      return wQ ? (0, kQ.jsxs)("div", {
        className: oQ()("RecordingIndicator", FQ),
        children: [(0, kQ.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, kQ.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, kQ.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: vQ(LQ)
        })]
      }) : null
    }))
  },
  4721: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => tQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(4486),
      DQ = wQ(1207),
      kQ = wQ(1079),
      vQ = wQ(1451),
      mQ = wQ(1489),
      uQ = wQ(1362),
      HQ = wQ(2433),
      bQ = wQ(1107);
    const YQ = {
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

    function xQ(QQ) {
      let {
        platform: FQ
      } = QQ;
      const wQ = "youtube" === FQ;
      return (0, bQ.jsxs)("span", {
        className: qQ()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: wQ
        }),
        children: [wQ && (0, bQ.jsx)(HQ.e, {
          variant: "white"
        }), !wQ && (0, bQ.jsx)(kQ.c, {
          name: YQ[FQ].icon,
          kit: "brands"
        })]
      })
    }

    function AQ(QQ) {
      let {
        platform: FQ,
        link: wQ,
        editable: LQ,
        userContext: qQ,
        onLinksUpdated: HQ
      } = QQ;
      const {
        t: AQ
      } = (0, DQ.y)(), tQ = YQ[FQ];
      if (!wQ && !LQ) return null;

      function eQ() {
        var QQ;
        if (!qQ || !HQ) return;
        uQ.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: tQ.name
            }
          },
          prefixText: oQ.v[FQ],
          placeholderText: "playBloxd",
          initialValue: null !== (QQ = null === wQ || void 0 === wQ ? void 0 : wQ.handle) && void 0 !== QQ ? QQ : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: wQ ? "general:remove" : void 0
        }).getResult().then((async QQ => {
          if ("notificationTornDown" !== QQ && null !== QQ) try {
            "submit" === QQ.type ? await mQ.b.setSocialLink(qQ, FQ, QQ.value) : await mQ.b.clearSocialLink(qQ, FQ), HQ()
          } catch (wQ) {
            console.error("Failed to update social link", wQ), uQ.NotificationProvider.showAlertPopup({
              title: wQ.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (wQ) {
        const QQ = `@${wQ.handle}`;
        return (0, bQ.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: tQ.color
          },
          href: wQ.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, bQ.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, bQ.jsx)(xQ, {
              platform: FQ
            }), (0, bQ.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, bQ.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: QQ
              })
            })]
          }), LQ && (0, bQ.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, vQ.S)({
              stopPropagation: !0
            }),
            onClick: QQ => {
              QQ.stopPropagation(), QQ.preventDefault(), eQ()
            },
            children: (0, bQ.jsx)(kQ.c, {
              name: "pen-to-square"
            })
          }), !LQ && (0, bQ.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, bQ.jsx)(kQ.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, bQ.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: tQ.color
        },
        ...(0, vQ.S)(),
        onClick: () => {
          eQ()
        },
        children: [(0, bQ.jsx)(xQ, {
          platform: FQ
        }), (0, bQ.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, bQ.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: tQ.name
          }), (0, bQ.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: AQ("homePage:profileSocialLinkAdd")
          })]
        }), (0, bQ.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, bQ.jsx)(kQ.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function tQ(QQ) {
      let {
        socialLinks: FQ,
        editable: wQ = !1,
        userContext: LQ,
        onLinksUpdated: qQ
      } = QQ;
      if (!wQ && 0 === FQ.length) return null;
      const DQ = new Map(FQ.map((QQ => [QQ.platform, QQ]))),
        kQ = wQ ? oQ.t : FQ.map((QQ => QQ.platform));
      return (0, bQ.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, bQ.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: kQ.map((QQ => (0, bQ.jsx)(AQ, {
            platform: QQ,
            link: DQ.get(QQ),
            editable: wQ,
            userContext: LQ,
            onLinksUpdated: qQ
          }, QQ)))
        })
      })
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  9149: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(53),
      qQ = wQ(3451);

    function oQ() {
      const [QQ, FQ] = (0, LQ.useState)(!1);
      return (0, LQ.useLayoutEffect)((() => {
        let QQ = !0;
        return (0, qQ.d)().then((() => {
          QQ && FQ(!0)
        })), () => {
          QQ = !1
        }
      }), []), QQ
    }
  },
  6386: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(53),
      qQ = wQ(27);

    function oQ(QQ, FQ) {
      var wQ;
      const [oQ, DQ] = (0, LQ.useState)(null !== (wQ = qQ.i.getItem(QQ)) && void 0 !== wQ ? wQ : FQ);
      return [oQ, FQ => {
        qQ.i.setItem(QQ, FQ), DQ(FQ)
      }]
    }
  },
  9067: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      c: () => xQ
    });
    wQ(9074);
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(9037);

    function kQ(QQ, FQ) {
      return Math.max(1, Math.round(QQ * FQ))
    }

    function vQ(QQ, FQ) {
      const wQ = FQ * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        LQ = function(QQ, FQ) {
          if (QQ.lines) return kQ(QQ.lineThickness, FQ) % 2;
          if (QQ.dot) return kQ(QQ.dotSize, FQ) % 2;
          return mQ(QQ, FQ) % 2
        }(QQ, FQ),
        qQ = uQ(QQ.lineThickness * wQ, LQ),
        oQ = kQ(QQ.lineLength, wQ),
        DQ = Math.round(QQ.gap * wQ),
        vQ = QQ.outline > 0 ? kQ(QQ.outline, wQ) : 0,
        bQ = [];
      if (QQ.lines && (bQ.push({
          x: qQ + DQ,
          y: 0,
          w: oQ,
          h: qQ,
          arm: "right"
        }), bQ.push({
          x: -DQ - oQ,
          y: 0,
          w: oQ,
          h: qQ,
          arm: "left"
        }), bQ.push({
          x: 0,
          y: qQ + DQ,
          w: qQ,
          h: oQ,
          arm: "down"
        }), QQ.tStyle || bQ.push({
          x: 0,
          y: -DQ - oQ,
          w: qQ,
          h: oQ,
          arm: "up"
        }), 0 === DQ && bQ.push({
          x: 0,
          y: 0,
          w: qQ,
          h: qQ
        })), QQ.dot) {
        const FQ = uQ(QQ.dotSize * wQ, LQ),
          oQ = QQ.lines && 0 === DQ && QQ.dotSize > QQ.lineThickness ? Math.max(FQ, qQ + 2) : FQ,
          kQ = (qQ - oQ) / 2;
        bQ.push({
          x: kQ,
          y: kQ,
          w: oQ,
          h: oQ
        })
      }
      const YQ = bQ.map((QQ => ({
        ...QQ,
        x: QQ.x - vQ,
        y: QQ.y - vQ,
        w: QQ.w + 2 * vQ,
        h: QQ.h + 2 * vQ
      })));
      let xQ = null,
        AQ = null;
      if (QQ.circle) {
        const FQ = kQ(QQ.circleThickness, wQ),
          oQ = function(QQ, FQ) {
            return QQ + (QQ % 2 === FQ ? 0 : 1)
          }(mQ(QQ, wQ), LQ),
          DQ = (qQ - oQ) / 2;
        xQ = HQ(DQ, oQ, FQ), vQ > 0 && (AQ = HQ(DQ - vQ, oQ + 2 * vQ, FQ + 2 * vQ))
      }
      return {
        cell: qQ,
        fills: bQ,
        outlines: vQ > 0 ? YQ : [],
        ring: xQ,
        ringOutline: AQ
      }
    }

    function mQ(QQ, FQ) {
      return Math.round(QQ.circleRadius * FQ * 2 + kQ(QQ.circleThickness, FQ))
    }

    function uQ(QQ, FQ) {
      return Math.max(2 - FQ, 2 * Math.round((QQ - FQ) / 2) + FQ)
    }

    function HQ(QQ, FQ, wQ) {
      const LQ = 2 * wQ >= FQ - 1;
      return {
        x: QQ,
        y: QQ,
        size: FQ,
        border: Math.min(wQ, Math.floor(FQ / 2)),
        filled: LQ
      }
    }
    var bQ = wQ(1107);
    const YQ = 1.4;

    function xQ(QQ, FQ) {
      return QQ && FQ ? `scale(${YQ})` : "scale(1)"
    }

    function AQ(QQ) {
      return "classic" === QQ.settings.style ? (0, bQ.jsx)(MQ, {
        ...QQ
      }) : (0, bQ.jsx)(WQ, {
        ...QQ
      })
    }
    const tQ = .125;

    function eQ(QQ, FQ) {
      const wQ = {};
      if (QQ.color !== DQ.e.color && (wQ.color = (0, DQ.k)(QQ.color)), QQ.opacity !== DQ.e.opacity && (wQ.opacity = QQ.opacity / 100), QQ.outline !== DQ.e.outline || QQ.outlineColor !== DQ.e.outlineColor) {
        const FQ = QQ.outline,
          LQ = (0, DQ.k)(QQ.outlineColor);
        wQ.textShadow = FQ > 0 ? `-${FQ}px 0 ${LQ}, 0 ${FQ}px ${LQ}, ${FQ}px 0 ${LQ}, 0 -${FQ}px ${LQ}` : "none"
      }
      if (QQ.size !== DQ.e.size) {
        const LQ = QQ.size / 100;
        wQ.fontSize = FQ ? `calc(max(1.3rem, 18px) * ${LQ})` : `calc(1.3rem * ${LQ})`, wQ.marginTop = `-${tQ}em`, wQ.transformOrigin = `50% calc(50% + ${tQ}em)`
      }
      return wQ
    }

    function MQ(QQ) {
      let {
        settings: FQ,
        touch: wQ,
        inPreview: LQ,
        inEditor: oQ,
        pressed: DQ = !1,
        pressRef: kQ
      } = QQ;
      return (0, bQ.jsx)("div", {
        className: qQ()("Crosshair", {
          Touch: wQ,
          CrosshairInPreview: LQ,
          CrosshairInEditor: oQ || LQ
        }),
        ref: kQ,
        style: {
          transform: xQ(DQ, FQ.growOnClick),
          ...eQ(FQ, wQ)
        },
        children: "+"
      })
    }

    function GQ(QQ, FQ) {
      return QQ / FQ + "px"
    }

    function pQ(QQ, FQ, wQ, LQ) {
      return {
        ...SQ(QQ, FQ, wQ),
        width: GQ(QQ.w, wQ),
        height: GQ(QQ.h, wQ),
        background: LQ
      }
    }

    function cQ(QQ, FQ, wQ) {
      return {
        left: GQ(QQ.x, FQ),
        top: GQ(QQ.y, FQ),
        width: GQ(QQ.size, FQ),
        height: GQ(QQ.size, FQ),
        borderWidth: GQ(QQ.border, FQ),
        borderColor: wQ,
        background: QQ.filled ? wQ : void 0
      }
    }
    const CQ = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function SQ(QQ, FQ, wQ) {
      const [LQ, qQ] = QQ.arm ? CQ[QQ.arm] : [0, 0], oQ = Math.round(FQ * wQ);
      return {
        left: GQ(QQ.x + LQ * oQ, wQ),
        top: GQ(QQ.y + qQ * oQ, wQ)
      }
    }

    function iQ(QQ) {
      return QQ.arm ? {
        "data-arm": QQ.arm,
        "data-x": QQ.x,
        "data-y": QQ.y
      } : {}
    }

    function WQ(QQ) {
      let {
        settings: FQ,
        inPreview: wQ,
        inEditor: LQ,
        pressed: kQ = !1,
        spread: mQ,
        spreadRef: uQ
      } = QQ;
      const HQ = (0, oQ.useRef)(null),
        {
          box: xQ,
          dpr: AQ
        } = function(QQ) {
          const [FQ, wQ] = (0, oQ.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, oQ.useLayoutEffect)((() => {
            const FQ = QQ.current;
            if (!FQ) return;
            const LQ = () => {
              const QQ = FQ.getBoundingClientRect(),
                LQ = window.devicePixelRatio || 1;
              wQ((FQ => FQ.dpr === LQ && FQ.box.left === QQ.left && FQ.box.top === QQ.top && FQ.box.width === QQ.width && FQ.box.height === QQ.height ? FQ : {
                box: {
                  left: QQ.left,
                  top: QQ.top,
                  width: QQ.width,
                  height: QQ.height
                },
                dpr: LQ
              }))
            };
            LQ();
            const qQ = new ResizeObserver(LQ);
            return qQ.observe(FQ), window.addEventListener("resize", LQ), window.addEventListener("scroll", LQ, !0), () => {
              qQ.disconnect(), window.removeEventListener("resize", LQ), window.removeEventListener("scroll", LQ, !0)
            }
          }), [QQ]), FQ
        }(HQ),
        tQ = (0, oQ.useRef)(AQ);
      tQ.current = AQ;
      const eQ = vQ(FQ, AQ, kQ && FQ.growOnClick ? YQ : 1),
        MQ = function(QQ, FQ, wQ) {
          const LQ = Math.round((QQ.left + QQ.width / 2) * wQ - FQ / 2),
            qQ = Math.round((QQ.top + QQ.height / 2) * wQ - FQ / 2);
          return {
            x: LQ / wQ - QQ.left,
            y: qQ / wQ - QQ.top
          }
        }(xQ, eQ.cell, AQ),
        GQ = (0, DQ.k)(FQ.color),
        CQ = (0, DQ.k)(FQ.outlineColor),
        WQ = (0, oQ.useRef)(0);
      (0, oQ.useLayoutEffect)((() => {
        if (uQ) return uQ.current = QQ => {
          var FQ;
          WQ.current = QQ, null === (FQ = HQ.current) || void 0 === FQ || FQ.querySelectorAll("[data-arm]").forEach((FQ => {
            Object.assign(FQ.style, SQ(function(QQ) {
              return {
                x: Number(QQ.dataset.x),
                y: Number(QQ.dataset.y),
                arm: QQ.dataset.arm
              }
            }(FQ), QQ, tQ.current))
          }))
        }, () => {
          uQ.current = null
        }
      }), [uQ]);
      const RQ = null !== mQ && void 0 !== mQ ? mQ : WQ.current;
      return (0, bQ.jsx)("div", {
        ref: HQ,
        className: qQ()("CrosshairShapes", {
          CrosshairInPreview: wQ,
          CrosshairInEditor: LQ || wQ,
          CrosshairSpreads: void 0 !== uQ
        }),
        children: (0, bQ.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: MQ.x,
            top: MQ.y,
            opacity: FQ.opacity / 100
          },
          children: (0, bQ.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [eQ.ringOutline && (0, bQ.jsx)("div", {
              className: "CrosshairRing",
              style: cQ(eQ.ringOutline, AQ, CQ)
            }), eQ.outlines.map(((QQ, FQ) => (0, bQ.jsx)("div", {
              className: "CrosshairPart",
              ...iQ(QQ),
              style: pQ(QQ, RQ, AQ, CQ)
            }, `o${FQ}`))), eQ.ring && (0, bQ.jsx)("div", {
              className: "CrosshairRing",
              style: cQ(eQ.ring, AQ, GQ)
            }), eQ.fills.map(((QQ, FQ) => (0, bQ.jsx)("div", {
              className: "CrosshairPart",
              ...iQ(QQ),
              style: pQ(QQ, RQ, AQ, GQ)
            }, `f${FQ}`)))]
          })
        })
      })
    }
  },
  9078: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ,
      h: () => tQ,
      k: () => AQ
    });
    var LQ = wQ(9037);
    const qQ = "XH1-",
      oQ = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      DQ = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      kQ = ["color", "outlineColor"],
      vQ = 1 + 3 * kQ.length + DQ.length + 1,
      mQ = Math.ceil(8 * vQ / Math.log2(62)),
      uQ = qQ.length + mQ;

    function HQ(QQ) {
      let FQ = 90;
      for (const wQ of QQ) FQ = 31 * FQ + wQ & 255;
      return FQ
    }
    const bQ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      YQ = BigInt(bQ.length);

    function xQ(QQ, FQ) {
      let wQ = 0n;
      for (const qQ of QQ) {
        const QQ = bQ.indexOf(qQ);
        if (QQ < 0) return null;
        wQ = wQ * YQ + BigInt(QQ)
      }
      if (wQ >> BigInt(8 * FQ) !== 0n) return null;
      const LQ = [];
      for (let qQ = 0; qQ < FQ; qQ++) LQ.unshift(Number(0xffn & wQ)), wQ >>= 8n;
      return LQ
    }

    function AQ(QQ) {
      let FQ = "shapes" === QQ.style ? 1 : 0;
      oQ.forEach(((wQ, LQ) => {
        QQ[wQ] && (FQ |= 1 << LQ + 1)
      }));
      const wQ = [FQ];
      for (const qQ of kQ) {
        const FQ = (0, LQ.g)(qQ, QQ[qQ]);
        wQ.push(FQ >> 16 & 255, FQ >> 8 & 255, 255 & FQ)
      }
      for (const qQ of DQ) {
        const {
          min: FQ,
          step: oQ
        } = LQ.b[qQ];
        wQ.push(Math.round(((0, LQ.g)(qQ, QQ[qQ]) - FQ) / oQ))
      }
      return wQ.push(HQ(wQ)), qQ + function(QQ, FQ) {
        let wQ = 0n;
        for (const qQ of QQ) wQ = wQ << 8n | BigInt(qQ);
        let LQ = "";
        for (let qQ = 0; qQ < FQ; qQ++) LQ = bQ[Number(wQ % YQ)] + LQ, wQ /= YQ;
        return LQ
      }(wQ, mQ)
    }

    function tQ(QQ) {
      for (const FQ of QQ.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${mQ}})`, "gi"))) {
        const QQ = eQ(xQ(FQ[1], vQ));
        if (QQ) return QQ
      }
      return null
    }

    function eQ(QQ) {
      if (!QQ || QQ.length !== vQ || HQ(QQ.slice(0, -1)) !== QQ[QQ.length - 1]) return null;
      const FQ = QQ[0],
        wQ = {
          ...LQ.e,
          style: 1 & FQ ? "shapes" : "classic"
        };
      oQ.forEach(((QQ, LQ) => {
        wQ[QQ] = 0 !== (FQ & 1 << LQ + 1)
      }));
      let qQ = 1;
      for (const LQ of kQ) wQ[LQ] = QQ[qQ] << 16 | QQ[qQ + 1] << 8 | QQ[qQ + 2], qQ += 3;
      for (const oQ of DQ) {
        const {
          min: FQ,
          step: DQ
        } = LQ.b[oQ];
        wQ[oQ] = (0, LQ.g)(oQ, FQ + QQ[qQ] * DQ), qQ++
      }
      return wQ
    }
  },
  9037: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      e: () => qQ,
      g: () => oQ,
      k: () => mQ,
      l: () => vQ,
      m: () => uQ,
      n: () => kQ,
      p: () => DQ
    });
    const LQ = {
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

    function oQ(QQ, FQ) {
      var wQ;
      const {
        min: oQ,
        max: DQ,
        step: kQ
      } = LQ[QQ];
      if (!Number.isFinite(FQ)) return qQ[QQ];
      const vQ = (null !== (wQ = String(kQ).split(".")[1]) && void 0 !== wQ ? wQ : "").length,
        mQ = Number((Math.round(FQ / kQ) * kQ).toFixed(vQ));
      return Math.min(DQ, Math.max(oQ, mQ))
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = "number" === typeof wQ ? oQ(FQ, wQ) : wQ;
      return {
        ...QQ,
        [FQ]: LQ
      }
    }

    function kQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(qQ).every((LQ => wQ.includes(LQ) || QQ[LQ] === FQ[LQ]))
    }

    function vQ(QQ) {
      return kQ(QQ, qQ)
    }

    function mQ(QQ) {
      return `#${QQ.toString(16).padStart(6,"0")}`
    }

    function uQ(QQ) {
      const FQ = /^#?([0-9a-f]{6})$/i.exec(QQ.trim());
      return FQ ? parseInt(FQ[1], 16) : null
    }
  },
  9082: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ,
      d: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(27),
      oQ = wQ(9078),
      DQ = wQ(9037);
    const kQ = "crosshairCode";
    let vQ = null;
    const mQ = new Set;

    function uQ() {
      if (null === vQ) {
        var QQ;
        const FQ = qQ.i.getItem(kQ);
        vQ = null !== (QQ = "string" === typeof FQ ? (0, oQ.h)(FQ) : null) && void 0 !== QQ ? QQ : DQ.e
      }
      return vQ
    }

    function HQ(QQ) {
      vQ = QQ, (0, DQ.l)(QQ) ? qQ.i.removeItem(kQ) : qQ.i.setItem(kQ, (0, oQ.k)(QQ));
      for (const FQ of mQ) FQ()
    }

    function bQ() {
      const [QQ, FQ] = (0, LQ.useState)(uQ);
      return (0, LQ.useEffect)((() => {
        const QQ = () => {
          FQ(uQ())
        };
        return QQ(), wQ = QQ, mQ.add(wQ), () => {
          mQ.delete(wQ)
        };
        var wQ
      }), []), QQ
    }
  },
  8651: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return {
        x: (QQ.left + QQ.right) / 2,
        y: (QQ.top + QQ.bottom) / 2
      }
    }

    function qQ(QQ) {
      return 0 === QQ.length ? null : QQ.reduce(((QQ, FQ) => ({
        left: Math.min(QQ.left, FQ.left),
        top: Math.min(QQ.top, FQ.top),
        right: Math.max(QQ.right, FQ.right),
        bottom: Math.max(QQ.bottom, FQ.bottom)
      })))
    }

    function oQ(QQ, FQ) {
      const wQ = Math.max(0, (FQ - (QQ.right - QQ.left)) / 2),
        LQ = Math.max(0, (FQ - (QQ.bottom - QQ.top)) / 2);
      return {
        left: QQ.left - wQ,
        top: QQ.top - LQ,
        right: QQ.right + wQ,
        bottom: QQ.bottom + LQ
      }
    }

    function DQ(QQ, FQ) {
      return FQ.x >= QQ.left && FQ.x <= QQ.right && FQ.y >= QQ.top && FQ.y <= QQ.bottom
    }

    function kQ(QQ, FQ, wQ) {
      let qQ = null,
        kQ = 1 / 0;
      for (const {
          id: LQ,
          box: oQ
        }
        of FQ) {
        const FQ = (oQ.right - oQ.left) * (oQ.bottom - oQ.top);
        DQ(oQ, QQ) && FQ < kQ && (kQ = FQ, qQ = LQ)
      }
      if (null !== qQ) return qQ;
      let vQ = 1 / 0;
      for (const {
          id: mQ,
          box: uQ
        }
        of FQ) {
        if (!DQ(oQ(uQ, wQ), QQ)) continue;
        const FQ = LQ(uQ),
          kQ = Math.hypot(QQ.x - FQ.x, QQ.y - FQ.y);
        kQ < vQ && (vQ = kQ, qQ = mQ)
      }
      return qQ
    }

    function vQ(QQ, FQ, wQ) {
      return {
        left: wQ.left,
        top: wQ.top,
        right: QQ - wQ.right,
        bottom: FQ - wQ.bottom
      }
    }

    function mQ(QQ, FQ, wQ, LQ) {
      const qQ = (QQ, FQ, wQ) => Math.max(Math.min(FQ, 0), Math.min(Math.max(wQ, 0), QQ));
      return {
        x: qQ(FQ, LQ.left - QQ.left, LQ.right - QQ.right),
        y: qQ(wQ, LQ.top - QQ.top, LQ.bottom - QQ.bottom)
      }
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ.dx * LQ + FQ,
        DQ = QQ.dy * qQ + wQ,
        kQ = QQ => Math.max(-1, Math.min(1, QQ));
      return {
        dx: kQ(oQ / LQ),
        dy: kQ(DQ / qQ)
      }
    }

    function HQ(QQ, FQ, wQ, LQ) {
      return FQ <= 0 || wQ <= 0 ? 1 : Math.max(.05, Math.min(1, QQ / FQ, LQ / wQ))
    }

    function bQ(QQ, FQ, wQ) {
      return Math.min(QQ.right, FQ.right) - Math.max(QQ.left, FQ.left) > wQ && Math.min(QQ.bottom, FQ.bottom) - Math.max(QQ.top, FQ.top) > wQ
    }

    function YQ(QQ, FQ) {
      const wQ = (QQ, FQ, wQ, LQ) => FQ - QQ > LQ - wQ ? wQ - QQ > FQ - LQ ? LQ - FQ : wQ - QQ : QQ < wQ ? wQ - QQ : FQ > LQ ? LQ - FQ : 0;
      return {
        x: wQ(QQ.left, QQ.right, FQ.left, FQ.right),
        y: wQ(QQ.top, QQ.bottom, FQ.top, FQ.bottom)
      }
    }

    function xQ(QQ, FQ) {
      let {
        avoid: wQ = null,
        bounds: LQ = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, qQ = 0, oQ = 1 / 0;
      return QQ.forEach(((QQ, DQ) => {
        const kQ = FQ.filter((FQ => bQ(QQ, FQ, 0))).length,
          vQ = null !== LQ && (QQ.left < LQ.left || QQ.top < LQ.top || QQ.right > LQ.right || QQ.bottom > LQ.bottom),
          mQ = kQ + (wQ && bQ(QQ, wQ, 0) ? 1e3 : 0) + (vQ ? 1e6 : 0);
        mQ < oQ && (qQ = DQ, oQ = mQ)
      })), qQ
    }
    wQ.d(FQ, {
      A: () => vQ,
      C: () => YQ,
      E: () => qQ,
      e: () => LQ,
      i: () => DQ,
      l: () => bQ,
      o: () => mQ,
      r: () => oQ,
      s: () => xQ,
      u: () => uQ,
      x: () => kQ,
      z: () => HQ
    })
  },
  9030: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      d: () => qQ
    });
    var LQ = wQ(17);

    function qQ(QQ, FQ) {
      return QQ && !FQ
    }

    function oQ() {
      return qQ(LQ.c.get("isTouchScreen"), LQ.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8414: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      f: () => LQ
    });
    const LQ = "controllerOpenKeyboard",
      qQ = "controllerKeyboardVisible"
  },
  8986: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    const LQ = new Set(["chunkBorders"])
  },
  8978: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ALL_DEV_TOOLS: () => DQ,
      coreDevTools: () => mQ,
      devTools: () => vQ
    });
    var LQ = wQ(634),
      qQ = wQ(1314),
      oQ = wQ(8986);
    const DQ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function kQ() {
      const {
        noaDevTools: QQ
      } = await wQ.e(231).then((() => wQ(40475)));
      return QQ
    }
    const vQ = new class {
        constructor() {
          this.loadHost = kQ, this.tools = DQ
        }
        setHost(QQ) {
          this.tools = null === QQ ? DQ : QQ.tools, this.loadHost = null === QQ ? kQ : async () => QQ
        }
        supports(QQ) {
          return this.tools.has(QQ)
        }
        async downloadScene(QQ, FQ) {
          const wQ = await this.loadHost();
          await wQ.downloadScene(QQ, FQ)
        }
        async setAmbientLightIntensity(QQ) {
          const FQ = await this.loadHost();
          await FQ.setAmbientLightIntensity(QQ)
        }
      },
      mQ = {
        tools: oQ.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    LQ.s && vQ.setHost(mQ), (0, qQ.x)((() => {
      vQ.setHost(mQ)
    }))
  },
  9142: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      d: () => qQ,
      g: () => uQ
    });
    var LQ = wQ(1560);

    function qQ(QQ) {
      var FQ;
      return {
        ...DQ.store,
        yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
      }
    }
    const oQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      DQ = {
        player: oQ,
        store: {
          ...oQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kQ(QQ, FQ) {
      QQ instanceof Promise ? QQ.then(FQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : FQ(QQ)
    }
    class vQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var FQ;
        this.view = QQ, null === (FQ = this.opened) || void 0 === FQ || FQ.show(QQ)
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class mQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, FQ) {
        var wQ;
        null === (wQ = this.opened) || void 0 === wQ || wQ.setCosmetic(QQ, FQ)
      }
      playEmote(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var FQ;
        await this.ready, await (null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const uQ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(QQ) {
        this.host = QQ
      }
      setDefaultHost(QQ) {
        this.makeDefault = QQ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(QQ) {
        return new vQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new vQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new vQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, FQ) {
        return new mQ(this.current().openCharacter(QQ, FQ))
      }
    }
  },
  9137: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.b,
      c: () => LQ.d,
      d: () => LQ.g
    });
    var LQ = wQ(9142);
    class qQ {
      constructor(QQ) {
        this.load = QQ, this.loaded = null, this.loading = null
      }
      run(QQ) {
        return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
          throw this.loading = null, QQ
        })), this.loading.then(QQ))
      }
    }
    class oQ {
      constructor() {
        this.mobScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(155)]).then((() => wQ(40492))))), this.characterScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(154)]).then((() => wQ(40583)))))
      }
      openMob(QQ) {
        return this.mobScene.run((FQ => FQ.openMobPreview(QQ)))
      }
      openPet(QQ) {
        return this.mobScene.run((FQ => FQ.openPetPreview(QQ)))
      }
      openMobLineup(QQ) {
        return this.mobScene.run((FQ => FQ.openMobLineupPreview(QQ)))
      }
      openCharacter(QQ, FQ) {
        return this.characterScene.run((wQ => wQ.openCharacterPreview(QQ, FQ)))
      }
    }
    LQ.g.setDefaultHost((() => new oQ))
  },
  6485: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(27);
    const qQ = "shaderPack";
    async function oQ() {
      var QQ;
      let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
    }
  },
  9001: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return QQ && !FQ
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  9022: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(1087);

    function qQ() {
      var QQ, FQ;
      return null !== (QQ = null === (FQ = screen.orientation) || void 0 === FQ ? void 0 : FQ.type) && void 0 !== QQ ? QQ : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const oQ = new class {
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
          this.holding && (0, LQ.pA)(new Error("Game view size held for 60 s"))
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
        let FQ = !1;
        return () => {
          if (FQ && this.isHeld()) return null;
          const wQ = QQ();
          return FQ ||= null !== wQ, wQ
        }
      }
      onRelease(QQ) {
        return this.resizers.add(QQ), () => {
          this.resizers.delete(QQ)
        }
      }
    }
  },
  8644: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => vQ
    });
    var LQ = wQ(17),
      qQ = wQ(1339),
      oQ = wQ(96);
    const DQ = {
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

    function kQ() {
      return (0, oQ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const vQ = new class {
      constructor(QQ) {
        this.deps = QQ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(QQ, FQ) {
        var wQ;
        if (!this.deps.enabled()) return;
        const LQ = DQ[QQ],
          qQ = null !== FQ && void 0 !== FQ ? FQ : LQ.pattern;
        if (null === qQ) return void console.warn("No vibration pattern for", QQ);
        const oQ = this.deps.now();
        oQ - this.lastAnyAt < 40 && LQ.priority < this.playingPriority || oQ - (null !== (wQ = this.lastAt.get(QQ)) && void 0 !== wQ ? wQ : -1 / 0) < LQ.minGapMs || oQ < this.playingUntil && LQ.priority < this.playingPriority || (this.lastAt.set(QQ, oQ), this.lastAnyAt = oQ, this.playingUntil = oQ + qQ.reduce(((QQ, FQ) => QQ + FQ), 0), this.playingPriority = LQ.priority, this.deps.vibrate(qQ))
      }
    }({
      vibrate: QQ => {
        navigator.vibrate([...QQ])
      },
      now: () => performance.now(),
      enabled: () => kQ() && LQ.c.get("isTouchScreen") && LQ.c.get("clientEscMenuOptions").vibration && !(0, qQ.e)()
    })
  },
  8997: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YQ,
      d: () => bQ
    });
    var LQ = wQ(17),
      qQ = wQ(1694),
      oQ = wQ(27),
      DQ = wQ(1362),
      kQ = wQ(3542),
      vQ = wQ(1471),
      mQ = wQ(1395);
    const uQ = 2592e5,
      HQ = "notificationOptInLastPromptedAt";
    async function bQ() {
      var QQ;
      const FQ = await YQ();
      if (null === FQ) return;
      const wQ = null !== (QQ = oQ.i.getItem(HQ)) && void 0 !== QQ ? QQ : 0;
      if (Date.now() - wQ < uQ) return;
      if ((0, mQ.d)()) return;
      const LQ = await DQ.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: qQ.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== LQ && (oQ.i.setItem(HQ, Date.now()), (0, vQ.reportAnalyticsClick)({
        id: !0 === LQ ? "push.allow" : "push.deny",
        value: qQ.d.supports("notifications") ? "app" : "browser"
      }), !0 === LQ && FQ().catch((QQ => {
        console.error("Failed to ask for push notifications:", QQ)
      })))
    }
    async function YQ() {
      return await qQ.d.ready, qQ.d.supports("notifications") ? LQ.c.get("mobilePushNotificationsCanAsk") ? async () => {
        qQ.d.request("notifications.requestPermission", {}).then((QQ => {
          let {
            canAsk: FQ
          } = QQ;
          LQ.c.set({
            mobilePushNotificationsCanAsk: FQ
          })
        }), (QQ => {
          console.error("The app couldn't ask for push notifications:", QQ)
        }))
      }: null: await kQ.c.canAsk() ? () => kQ.c.requestPermission() : null
    }
  },
  9004: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ,
      g: () => vQ
    });
    var LQ = wQ(17);
    const qQ = 24,
      oQ = "farNametags",
      DQ = 1e5;

    function kQ() {
      var QQ;
      return null === (QQ = LQ.c.get("showDistantNametags")) || void 0 === QQ || QQ
    }

    function vQ() {
      var QQ;
      return null !== (QQ = function() {
        const QQ = new URLSearchParams(window.location.search).get(oQ),
          FQ = null === QQ || "" === QQ ? NaN : Number(QQ);
        return Number.isFinite(FQ) && FQ >= 0 ? Math.min(FQ, DQ) : null
      }()) && void 0 !== QQ ? QQ : kQ() ? 0 : qQ
    }
  },
  9127: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      d: () => DQ
    });
    const LQ = [{
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
      let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof QQ) {
        if (!Number.isFinite(QQ)) return "0";
        if (Math.abs(QQ) < 100) {
          const FQ = QQ < 0 ? "-" : "",
            wQ = Math.abs(QQ);
          return wQ >= 10 ? `${FQ}${wQ.toFixed(1).replace(/\.0$/,"")}` : `${FQ}${wQ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        FQ = BigInt(Math.floor(QQ))
      } else FQ = QQ;
      const qQ = FQ < 0n ? -FQ : FQ,
        oQ = FQ < 0n ? "-" : "",
        DQ = qQ.toString();
      if (DQ.length <= wQ) return `${oQ}${DQ}`;
      const kQ = 3 * Math.floor((DQ.length - 1) / 3);
      if (kQ < 3) return `${oQ}${DQ}`;
      if (kQ > 3 * LQ.length) {
        const QQ = DQ[0],
          FQ = DQ.slice(1, 3).replace(/0+$/, "");
        return `${oQ}${FQ?`${QQ}.${FQ}`:QQ}e${DQ.length-1}`
      }
      const {
        threshold: vQ,
        suffix: mQ
      } = LQ[LQ.length - kQ / 3], uQ = qQ / vQ, HQ = Number(1000n * (qQ % vQ) / vQ), bQ = Number(uQ) + HQ / 1e3;
      let YQ;
      return YQ = bQ >= 100 ? Math.floor(bQ).toString() : bQ >= 10 ? bQ.toFixed(1).replace(/\.0$/, "") : bQ.toFixed(2).replace(/\.?0+$/, ""), `${oQ}${YQ}${mQ}`
    }
    const oQ = LQ.map((QQ => {
      let {
        threshold: FQ,
        suffix: wQ
      } = QQ;
      return {
        threshold: Number(FQ),
        suffix: wQ
      }
    })).filter((QQ => {
      let {
        threshold: FQ
      } = QQ;
      return Number.isFinite(FQ)
    }));

    function DQ(QQ) {
      const FQ = Math.abs(QQ),
        wQ = QQ < 0 ? "-" : "";
      for (const {
          threshold: LQ,
          suffix: qQ
        }
        of oQ)
        if (FQ >= LQ) {
          const QQ = FQ / LQ;
          if (QQ >= 1e3) return `${wQ}${FQ.toExponential(2).replace("e+","e")}`;
          let oQ;
          return oQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${wQ}${oQ}${qQ}`
        } return `${wQ}${FQ}`
    }
  },
  9110: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      d: () => bQ,
      e: () => HQ,
      g: () => DQ,
      k: () => mQ,
      l: () => vQ
    });
    var LQ = wQ(317);
    const qQ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      oQ = {
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

    function DQ(QQ) {
      var FQ;
      return null !== (FQ = oQ[QQ]) && void 0 !== FQ ? FQ : {
        translationKey: ""
      }
    }
    const kQ = {
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

    function vQ(QQ) {
      return qQ.includes(QQ)
    }

    function mQ(QQ) {
      var FQ;
      return !0 === (null === QQ || void 0 === QQ || null === (FQ = QQ.customAttributes) || void 0 === FQ ? void 0 : FQ.cannotEnchant)
    }

    function uQ(QQ, FQ) {
      const {
        max: wQ
      } = kQ[QQ].at(-1);
      return FQ <= wQ
    }

    function HQ(QQ) {
      const FQ = Math.sin(QQ / 80),
        wQ = QQ => {
          if (QQ <= 0) return 0;
          if (QQ > 1) return 1;
          let FQ = 0;
          const wQ = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let LQ = 0; LQ < wQ.length; LQ++) {
            FQ += (LQ % 2 === 0 ? 1 : -1) * wQ[LQ] * Math.pow(QQ, 2 + LQ) / (2 + LQ)
          }
          return 72 * FQ
        },
        LQ = .3 - .78 * FQ,
        qQ = .5 - .78 * FQ,
        oQ = .6 - .7 * FQ,
        DQ = .8 - .6 * FQ;
      let kQ = wQ(LQ),
        vQ = wQ(qQ) - kQ,
        mQ = wQ(oQ) - vQ - kQ,
        uQ = wQ(DQ) - mQ - vQ - kQ;
      LQ < .041 && (vQ /= 1 - kQ, mQ /= 1 - kQ, uQ /= 1 - kQ, kQ = 0), qQ < .041 && (kQ /= 1 - vQ, mQ /= 1 - vQ, uQ /= 1 - vQ, vQ = 0), oQ < .041 && (kQ /= 1 - mQ, vQ /= 1 - mQ, uQ /= 1 - mQ, mQ = 0), DQ < .041 && (kQ /= 1 - uQ, vQ /= 1 - uQ, mQ /= 1 - uQ, uQ = 0);
      return {
        commonProb: kQ,
        uncommonProb: vQ,
        rareProb: mQ,
        epicProb: uQ,
        legendaryProb: 1 - (uQ + mQ + vQ + kQ)
      }
    }

    function bQ(QQ, FQ) {
      const {
        min: wQ,
        max: qQ
      } = kQ[QQ][FQ], oQ = LQ.e.sampleUniformIntDistribution(wQ, qQ, "includeMax");
      return {
        ...HQ(oQ),
        level: oQ
      }
    }
  },
  8523: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return !QQ.hidden && (FQ || !QQ.isRewardedAd)
    }

    function qQ(QQ) {
      return "object" === typeof QQ ? QQ.option : QQ
    }

    function oQ(QQ, FQ) {
      var wQ;
      if ("dropdown" === (null === (wQ = QQ.userInput) || void 0 === wQ ? void 0 : wQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
        for (const wQ of QQ.userInput.dropdownOptions)
          if (qQ(wQ) === FQ) return "object" === typeof wQ ? wQ.cost : QQ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", FQ)
      }
      return QQ.cost
    }

    function DQ(QQ, FQ, wQ) {
      var LQ;
      const qQ = null !== (LQ = wQ.excludedPlayers) && void 0 !== LQ ? LQ : [FQ];
      return QQ.filter((QQ => !qQ.includes(QQ)))
    }
    wQ.d(FQ, {
      c: () => oQ,
      f: () => qQ,
      j: () => DQ,
      l: () => LQ
    })
  },
  9074: () => {},
  9046: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9048: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9053: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9058: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);