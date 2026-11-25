export const id = 101;
export const ids = [101];
export const modules = {
  34246: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      EverythingMenu: () => Bd
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1286),
      dt = Vt(1152),
      jt = Vt(2147),
      Ht = Vt(1556),
      Xt = Vt(1204),
      Qt = Vt(1188);

    function lt(tt) {
      let {
        items: et,
        link: Vt,
        onClick: Ot,
        selectedItemId: qt,
        className: lt,
        padStartsOnTab: Et = !0
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), wt = (0, Xt.h)(), yt = [];
      for (const Dt of et) {
        var Nt;
        const tt = yt[yt.length - 1];
        var Mt;
        if (tt && tt.title === (null !== (Nt = Dt.section) && void 0 !== Nt ? Nt : null)) tt.items.push(Dt);
        else yt.push({
          title: null !== (Mt = Dt.section) && void 0 !== Mt ? Mt : null,
          items: [Dt]
        })
      }
      return (0, Qt.jsxs)("div", {
        className: Dt()("MenuSideBarBody", lt),
        "data-pad-tabs": "2",
        children: [yt.map(((tt, et) => {
          var Vt;
          return (0, Qt.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [tt.title && (0, Qt.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: ft(tt.title)
            }), tt.items.map((tt => {
              var et;
              const Vt = !!tt.iconElement || !!tt.faIcon;
              return (0, Qt.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": qt === tt.id ? "true" : void 0,
                "data-pad-default-focus": Et && qt === tt.id || void 0,
                className: Dt()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: qt === tt.id
                }),
                onClick: () => {
                  Ot(tt.id)
                },
                children: [Vt && (0, Qt.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (et = tt.iconElement) && void 0 !== et ? et : (0, Qt.jsx)(dt.b, {
                    name: tt.faIcon
                  })
                }), (!wt || !Vt) && (0, Qt.jsx)("div", {
                  children: ft(tt.title)
                }), tt.redDot && (0, Qt.jsx)(jt.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, tt.id)
            }))]
          }, null !== (Vt = tt.title) && void 0 !== Vt ? Vt : et)
        })), Vt && (0, Qt.jsxs)("div", {
          ...(0, Ht.X)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: Vt.onClick,
          children: [(0, Qt.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Qt.jsx)(dt.b, {
              name: Vt.faIcon
            })
          }), (0, Qt.jsx)("div", {
            children: ft(Vt.title)
          }), (0, Qt.jsx)(dt.b, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Et = Vt(3081),
      ft = Vt(1218),
      wt = Vt(2498),
      yt = Vt(3176),
      Nt = Vt(106),
      Mt = Vt(2024),
      bt = Vt(2306),
      Jt = Vt(2311),
      Ct = Vt(1770),
      ut = Vt(1436),
      Kt = Vt(5155),
      ht = Vt(26),
      vt = Vt(34255);

    function Wt(tt) {
      let {
        setApplySettingsCallback: et
      } = tt;
      const {
        clientEscMenuOptions: Vt
      } = (0, ht.k)(["clientEscMenuOptions"]), [qt, Dt] = (0, Ot.useState)(!1), [mt, dt] = (0, Ot.useState)(!1), [jt, Xt] = (0, Ot.useState)(6400), [lt, Et] = (0, Ot.useState)(3600), [ft, wt] = (0, Ot.useState)(!1), [yt, Nt] = (0, Ot.useState)(!1);

      function Mt(tt) {
        const et = "screenshot" === tt ? dt : Dt;
        et(!0);
        const Vt = ft ? "normals" : yt ? "depth" : null;
        vt.devTools.downloadScene(tt, {
          width: jt,
          height: lt,
          colouring: Vt
        }).catch((tt => {
          console.error("Couldn't download the scene", tt)
        })).finally((() => {
          et(!1)
        }))
      }
      return (0, Qt.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Qt.jsx)(Kt.c, {
          label: "Disable Ambient Occlusion",
          checked: Vt.disableAmbientOcclusion,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              disableAmbientOcclusion: tt
            }), et((() => Kt.j))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), vt.devTools.supports("ambientLight") && (0, Qt.jsx)(Kt.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Vt.ambientLightIntensity,
          onChange: tt => {
            vt.devTools.setAmbientLightIntensity(tt).then((() => {
              ht.b.setClientEscMenuOptions({
                ambientLightIntensity: tt
              })
            })).catch((tt => {
              console.error("Couldn't set the ambient light", tt)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), vt.devTools.supports("weaponRaycasts") && (0, Qt.jsx)(Kt.c, {
          label: "Show Weapon Raycasts",
          checked: Vt.showWeaponRaycasts,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              showWeaponRaycasts: tt
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), vt.devTools.supports("sceneDownload") && (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Qt.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Qt.jsx)(Kt.c, {
              label: "Apply normal-based coloring",
              checked: ft,
              onClick: tt => {
                wt(tt), tt && Nt(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Qt.jsx)(Kt.c, {
              label: "Apply depth-based coloring",
              checked: yt,
              onClick: tt => {
                Nt(tt), tt && wt(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Qt.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Qt.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Qt.jsx)(Ct.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (tt, et) => {
                  const Vt = parseInt(tt) || 6400;
                  Xt(Vt)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: jt.toString()
              }), (0, Qt.jsx)("span", {
                children: "X"
              }), (0, Qt.jsx)(Ct.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (tt, et) => {
                  const Vt = parseInt(tt) || 3600;
                  Et(Vt)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: lt.toString()
              })]
            }), (0, Qt.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Qt.jsxs)(Ht.f, {
                onClick: () => {
                  Mt("screenshot")
                },
                disabled: mt,
                children: [mt && (0, Qt.jsx)(ut.b, {}), "Download Screenshot"]
              }), (0, Qt.jsxs)(Ht.f, {
                onClick: () => {
                  Mt("glb")
                },
                disabled: qt,
                children: [qt && (0, Qt.jsx)(ut.b, {}), "Download GLB"]
              })]
            })]
          }), (0, Qt.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var St = Vt(153),
      ct = Vt(1223),
      Rt = Vt(34272),
      It = Vt(3086),
      Pt = Vt(1613),
      Zt = Vt(1363),
      Lt = Vt(1316),
      Ft = Vt(3148),
      kt = Vt(2119),
      Gt = Vt(1600),
      zt = Vt(391),
      ot = Vt(2313),
      rt = Vt(2317),
      Ut = Vt(3110),
      At = Vt(2772),
      it = Vt(1737),
      Yt = Vt(3131),
      Bt = Vt(3155),
      pt = Vt(241);
    var xt = Vt(1883),
      Tt = Vt(3101);
    async function gt() {
      try {
        return function(tt) {
          const et = new Map;
          for (const {
              store: Vt,
              status: Ot,
              autoRenewStatus: qt,
              managementUrl: Dt
            }
            of Object.values(tt.subscriptions)) !(0, Ut.h)(Vt) || (0, Ut.k)(Ot) || "willNotRenew" === qt || et.has(Vt) || et.set(Vt, null !== Dt && void 0 !== Dt ? Dt : Ut.o[Vt]);
          return Array.from(et, (tt => {
            let [et, Vt] = tt;
            return {
              store: et,
              managementUrl: Vt
            }
          }))
        }(await (0, xt.h)((0, Tt.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (tt) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", tt), null
      }
    }

    function st(tt) {
      const {
        t: et,
        selectedLanguage: Vt
      } = (0, mt.H)(), {
        userContext: qt
      } = (0, ft.d)(), {
        superRankInfo: Dt
      } = qt, dt = (0, rt.usePurchasesAllowed)(), jt = tt && ((0, zt.Ec)(Dt) || qt.ranksMayChange) && dt, {
        accountId: Ht,
        data: Xt
      } = (0, At.h)(Yt.e, jt);
      if ((0, Ot.useEffect)((() => {
          if (jt) return Yt.e.watchAccount(), it.e.addRefetchListener("billing", (tt => {
            "reconnected" === tt ? Yt.e.refreshAfterReconnect() : Yt.e.refresh()
          }))
        }), [jt]), !jt || !(0, zt.Ec)(Dt) || null === Xt || Ht !== qt.whamm) return null;
      const Qt = function(tt, et, Vt) {
        const Ot = Bt.d[(0, Bt.b)(Bt.d, et)],
          qt = void 0 === Ot ? void 0 : (0, pt.c)(tt.entitlements, Ot.entitlementId);
        return void 0 === qt || null === qt.expiresAt || (0, Ut.g)(qt) <= Vt ? null : qt.willRenew && null === qt.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(qt.expiresAt, Vt)
        } : {
          renews: !1,
          at: (0, Ut.g)(qt)
        }
      }(Xt, Dt.tier, Date.now());
      if (null === Qt) return null;
      const lt = Qt.renews ? "store:renewsOn" : "store:endsOn",
        Et = new Date(Qt.at).toLocaleDateString((0, mt.o)(Vt.code, lt), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        wt = (0, rt.getBillingStore)(),
        yt = null !== wt && (0, Ut.h)(wt) ? function(tt, et) {
          var Vt;
          const Ot = Object.values(tt.subscriptions).find((tt => tt.store === et && !(0, Ut.k)(tt.status)));
          return void 0 === Ot ? null : null !== (Vt = Ot.managementUrl) && void 0 !== Vt ? Vt : Ut.o[et]
        }(Xt, wt) : null;
      return {
        text: et(lt, {
          date: Et
        }),
        manageUrl: yt
      }
    }
    var nt = Vt(1464),
      te = Vt(1303),
      ee = Vt(5056),
      Ve = Vt(1583),
      Oe = Vt(3731),
      qe = Vt(2302);

    function De(tt) {
      let {
        showing: et
      } = tt;
      const {
        t: Vt
      } = (0, mt.H)(), {
        data: Ot,
        failed: qt
      } = (0, At.h)(Oe.d, et);
      return 0 === (null === Ot || void 0 === Ot ? void 0 : Ot.length) || null === Ot && !qt ? null : (0, Qt.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Qt.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Vt("paymentHistory:title")
        }), null === Ot && qt && (0, Qt.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Vt("paymentHistory:loadFailed")
        }), null !== Ot && (0, Qt.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Ot.map((tt => (0, Qt.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Qt.jsx)(qe.d, {
              entry: tt
            }), (0, Qt.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Qt.jsx)("div", {
                children: (0, qe.g)(Vt, tt)
              }), (0, Qt.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(tt.at).toLocaleDateString(), "number" === typeof tt.orderId && ` \xb7 ${Vt("paymentHistory:order",{orderId:tt.orderId})}`]
              })]
            })]
          }, (0, Oe.b)(tt))))
        })]
      })
    }
    var me = Vt(3112),
      de = Vt(2319),
      je = Vt(2194);

    function He() {
      (0, je.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function Xe(tt) {
      let {
        status: et
      } = tt;
      switch (et) {
        case "restored":
          return (0, Yt.i)(), {
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

    function Qe() {
      const tt = (0, Tt.usePageBillingClient)(),
        {
          userContext: et
        } = (0, ft.d)(),
        [Vt, qt] = (0, Ot.useState)(!1),
        [Dt, mt] = (0, Ot.useState)(null);
      return {
        restoring: Vt,
        notice: Dt,
        restore: () => {
          et.isLoggedIn() ? (qt(!0), mt(null), tt.restorePurchases().then(Xe, (tt => tt instanceof me.e && "loginRequired" === tt.code ? (He(), null) : function(tt) {
            return tt instanceof me.e && "storeBusy" === tt.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", tt), (0, Yt.i)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(tt))).then(mt).finally((() => {
            qt(!1)
          }))) : He()
        }
      }
    }

    function le(tt) {
      let {
        restoring: et,
        notice: Vt,
        restore: qt
      } = tt;
      const {
        t: dt
      } = (0, mt.H)(), jt = (0, rt.usePurchasesAllowed)(), Xt = (0, rt.getBillingStore)(), lt = (0, Ot.useRef)(null);
      return (0, Ot.useEffect)((() => {
        var tt;
        null === (tt = lt.current) || void 0 === tt || tt.scrollIntoView({
          block: "nearest"
        })
      }), [Vt]), jt && (0, de.d)(Xt) ? (0, Qt.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, Qt.jsx)(Ht.g, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: et,
          onClick: qt,
          children: dt("payments:restorePurchases")
        }), null !== Vt && (0, Qt.jsx)("div", {
          ref: lt,
          className: Dt()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: Vt.failed
          }),
          children: dt(Vt.key)
        })]
      }) : null
    }
    var Ee = Vt(1984),
      fe = Vt(1333),
      we = Vt(1450),
      ye = Vt(1293),
      Ne = Vt(1410),
      ae = Vt(377),
      Me = Vt(2585);
    const be = {
      appStore: {
        name: "App Store",
        ...ae.Hb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...ae.Hb.googlePlay
      },
      discord: {
        name: "Discord",
        ...ae.Hb.discord
      }
    };

    function Je(tt) {
      let {
        warning: et,
        subscriptions: Vt
      } = tt;
      const {
        t: Ot
      } = (0, mt.H)();
      return null !== Vt && 0 === Vt.length ? (0, Qt.jsx)(Qt.Fragment, {
        children: Ot(et)
      }) : (0, Qt.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Ot(et), null === Vt && (0, Qt.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Ot("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Vt && (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Ot("auth:deleteAccountStoreSubscriptions")
          }), (0, Qt.jsx)(Me.e, {
            className: "DeleteAccountSubtitleLinks",
            links: Vt.map((tt => {
              let {
                store: et,
                managementUrl: Vt
              } = tt;
              return {
                ...be[et],
                url: Vt
              }
            }))
          })]
        })]
      })
    }

    function Ce(tt) {
      let {
        showing: et
      } = tt;
      const {
        userContext: Vt,
        isUserContextUpdating: qt
      } = (0, ft.d)(), {
        t: Dt
      } = (0, mt.H)(), [dt, jt] = (0, Ot.useState)(!1), [Xt, lt] = (0, Ot.useState)(null), Et = (0, Ot.useRef)(et);
      (0, Ot.useEffect)((() => (Et.current = et, () => {
        Et.current = !1
      })), [et]);
      const wt = qt || dt;
      return (0, Qt.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Qt.jsxs)(Ht.G, {
          onClick: async function() {
            if (!dt) {
              jt(!0);
              try {
                const tt = await async function() {
                  const [tt, et] = await Promise.all([(0, Ee.b)(Vt.availableUserContextTypes) ? gt() : [], Ke(Vt)]);
                  if (!Et.current) return fe.e.ok();
                  const Ot = (0, Zt.e)(Vt.getPlayerName(), !Nt.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await we.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: Ot
                        }
                      },
                      subtitle: (0, Qt.jsx)(Je, {
                        warning: ue(Vt.isLoggedIn(), et),
                        subscriptions: tt
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: et ? Dt("auth:deleteAccountTypedConfirm", {
                        playerName: Ot
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return fe.e.ok();
                  const qt = await (0, ct.postJsonWithMetricsCookiesAndJsonResponse)(`${ye.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: ht.b.get("gameState")
                  }, {
                    retries: 3
                  }, Vt.getMetricsCookies());
                  if (qt.error) return fe.e.error(qt.error);
                  (0, St.isDiscordClient)() && (await Ne.l.discordActivity()).exit("User deleted their account");
                  return (0, ct.forgetStoredGuestAccount)(Vt.whamm), (0, ct.forceGlobalSignOut)(!0), fe.e.ok()
                }(), et = tt.isError() ? tt.asError().message : null;
                lt(et)
              } catch (tt) {
                console.error("Failed to delete account:", tt), lt(Dt("auth:genericDeleteAccountError"))
              }
              jt(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: wt,
          children: [wt && (0, Qt.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Qt.jsx)(ut.b, {})
          }), Dt("auth:deleteAccount")]
        }), Xt && (0, Qt.jsx)("div", {
          className: "DeleteAccountError",
          children: Xt
        })]
      })
    }

    function ue(tt, et) {
      return (0, St.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : tt ? "auth:deleteAccountLossWarning" : et ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function Ke(tt) {
      try {
        const {
          accountCreatedAt: et
        } = await (0, xt.h)(Gt.e.getPlayerProfile(tt, {
          lowerCaseName: tt.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== et && Date.now() - et >= 7 * zt.l
      } catch (et) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", et), !0
      }
    }
    var he = Vt(3649),
      ve = Vt(3662),
      We = Vt(3655);

    function Se(tt) {
      let {
        showing: et
      } = tt;
      const {
        t: Vt
      } = (0, mt.H)(), {
        data: Ot,
        failed: qt
      } = (0, At.h)(he.e, et), Dt = null === Ot ? null : (0, he.i)(Ot);
      return (0, Qt.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Qt.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Vt("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Dt && !qt && (0, Qt.jsx)(ut.b, {}), null === Dt && qt && (0, Qt.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Vt("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Qt.jsx)(Ht.f, {
            className: "SmallTextLight",
            onClick: () => {
              he.e.refresh()
            },
            children: Vt("general:tryAgain")
          })]
        }), 0 === (null === Dt || void 0 === Dt ? void 0 : Dt.length) && (0, Qt.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Vt("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Dt && Dt.length > 0 && (0, Qt.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Dt.map((tt => {
            let {
              name: et,
              exclusion: Ot
            } = tt;
            const qt = We.f[Ot];
            return (0, Qt.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Qt.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: et
              }), (0, Qt.jsx)(Ht.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, ve.i)(qt, et, {
                    chatMessage: null
                  })
                },
                children: Vt(We.j[qt].text)
              })]
            }, et)
          }))
        })]
      })
    }
    const ce = (0, Ot.memo)((function(tt) {
      var et, Vt;
      let {
        showing: qt,
        inGame: jt
      } = tt;
      const {
        t: Xt,
        selectedLanguage: lt
      } = (0, mt.H)(), {
        hideSocialLocationFrom: wt
      } = (0, ht.k)(["hideSocialLocationFrom"]), yt = (0, rt.usePurchasesAllowed)(), Mt = Qe(), bt = (0, Et.c)(), {
        userContext: Jt,
        isUserContextUpdating: vt
      } = (0, ft.d)(), [Wt, Ut] = (0, Ot.useState)(null !== (et = Jt.getPlayerName()) && void 0 !== et ? et : ""), [At, it] = (0, Ot.useState)(null), {
        purchasing: Yt,
        outcome: Bt,
        purchase: pt
      } = (0, It.e)("/super-rank-welcome"), xt = (0, zt.qc)((0, mt.o)(lt.code, "general:timeLeft"), Jt.superRankInfo), Tt = null === (Vt = st(qt)) || void 0 === Vt ? void 0 : Vt.text, gt = xt ? Xt("general:timeLeft", {
        time: xt
      }) : Tt, [Oe, qe] = (0, Ot.useState)(!1), [me, de] = (0, Ot.useState)(!1), je = (0, Ot.useRef)(null), He = (0, Ot.useRef)(null), Xe = (0, kt.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Ee = null === Xe, fe = null !== Xe && void 0 !== Xe ? Xe : [], we = Jt !== ct.NULL_USER_CONTEXT && !Jt.isLoggedIn(), ye = we && 0 !== (null === Xe || void 0 === Xe ? void 0 : Xe.length), [Ne, ae] = (0, Ot.useState)([]), [Me, be] = (0, Ot.useState)(!1), Je = Jt.playerHasRank("youtuber"), ue = (0, Ot.useCallback)((() => Gt.e.getPlayerProfile(Jt, {
        lowerCaseName: Jt.getPlayerName().toLowerCase()
      }).then((tt => {
        ae(tt.socialLinks)
      })).catch((tt => {
        console.error("Failed to refresh social links", tt)
      }))), [Jt]);

      function Ke(tt) {
        tt !== Wt && ((0, Zt.l)(tt) ? (tt = (0, Zt.n)(tt), it(Xt("homePage:nameCharacters"))) : it(null), je.current && (je.current.value = tt), Ut(tt))
      }
      return (0, Ot.useEffect)((() => (!0 === qt ? (clearInterval(He.current), He.current = setInterval(bt, 1e3)) : clearInterval(He.current), () => {
        clearInterval(He.current)
      })), [qt, bt]), (0, Ot.useEffect)((() => {
        var tt;
        Ut(null !== (tt = Jt.getPlayerName()) && void 0 !== tt ? tt : "")
      }), [Jt]), (0, Ot.useEffect)((() => {
        if (!qt || !Je || vt) return;
        let tt = !1;
        return be(!0), ae([]), Gt.e.getPlayerProfile(Jt, {
          lowerCaseName: Jt.getPlayerName().toLowerCase()
        }).then((et => {
          tt || ae(et.socialLinks)
        })).catch((tt => {
          console.error("Failed to load social links", tt)
        })).finally((() => {
          tt || be(!1)
        })), () => {
          tt = !0
        }
      }), [qt, Je, vt, Jt]), (0, Qt.jsxs)("div", {
        className: Dt()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: jt
        }),
        children: [jt && (0, Qt.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Xt("settingsMenu:accountSettingsInGameWarning")
        }), (0, Qt.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Qt.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Xt("homePage:discordNamePopupTitle"), (0, Qt.jsxs)(Pt.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Lt.e)({
                name: Jt.getPlayerName()
              }),
              onClick: () => {
                ht.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Qt.jsx)(dt.b, {
                name: "arrow-up-right-from-square"
              }), " ", Xt("profileCard:viewProfile")]
            })]
          }), (0, Qt.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Qt.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Nt.featureFlags.canChangeName && (0, Qt.jsx)(Ct.d, {
                className: "EnterName",
                placeholderText: Xt("homePage:enterName"),
                maxLength: Zt.g,
                defaultValue: Wt,
                onValueChange: tt => {
                  Ke(tt)
                },
                forcedText: Oe || !Nt.featureFlags.canChangeName ? Wt : null,
                blurOnEnter: !0,
                domRef: je
              }), (0, Qt.jsx)(Ht.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Ke((0, Zt.f)())
                },
                children: (0, Qt.jsx)(dt.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Nt.featureFlags.canChangeName && (0, Qt.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Zt.e)(Wt, !Nt.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Qt.jsx)(Ht.f, {
              className: "ChooseNameButton",
              disabled: Oe || Wt === Jt.getPlayerName(),
              onClick: () => {
                Wt.length < Zt.k ? it(Xt("homePage:changeNameMinLengthError", {
                  length: Zt.k
                })) : Wt.length > Zt.g ? it(Xt("homePage:changeNameMaxLengthError", {
                  length: Zt.g
                })) : (qe(!0), it(null), (0, Rt.k)(Jt, Wt).then((tt => {
                  qe(!1), "taken" === tt.outcome ? it(Xt("homePage:nameTaken")) : "refused" === tt.outcome ? it(tt.message) : "failed" === tt.outcome && it(Xt((0, Rt.g)(tt.failure)))
                })))
              },
              children: Xt("general:choose")
            })]
          }), At && (0, Qt.jsx)("div", {
            className: "ChooseAccNameError",
            children: At
          })]
        }), (0, Qt.jsx)(Kt.c, {
          label: (() => {
            if ((0, te.j)(wt)) {
              const tt = (0, mt.o)(lt.code, "general:timeLeft"),
                et = (0, zt.mb)(tt, Date.now(), wt + te.i);
              return `${Xt("settingsMenu:hideSocialLocation")} (${Xt("general:timeLeft",{time:et})})`
            }
            return Xt("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const tt = !(0, te.j)(wt);
            (0, Ve.reportAnalyticsClick)({
              id: "social.hide_location",
              value: tt ? "on" : "off"
            }), de(!0), Gt.e.setHideSocialLocation(Jt, tt).then((() => {
              ht.b.set({
                hideSocialLocationFrom: tt ? Date.now() : null
              })
            })).finally((() => {
              de(!1)
            }))
          },
          checked: (0, te.j)(wt),
          disabled: me
        }), Je && (0, Qt.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Qt.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Xt("settingsMenu:socialLinks")
          }), Me && (0, Qt.jsx)(ut.b, {}), !Me && (0, Qt.jsx)(ee.e, {
            socialLinks: Ne,
            editable: !0,
            userContext: Jt,
            onLinksUpdated: ue
          })]
        }), (0, Qt.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Qt.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Xt(ye ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Ee && (0, Qt.jsx)(ut.b, {}), !Ee && 0 === fe.length && (0, Qt.jsx)("div", {
            className: "NoLoginOptions",
            children: Xt("auth:noLoginOptions")
          }), !Ee && fe.length > 0 && "crazygames" !== St.siteUsed && (0, Qt.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: fe
          }), !Ee && fe.length > 0 && "crazygames" === St.siteUsed && (0, Qt.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [fe[0], fe.length > 1 && (0, Qt.jsxs)(Qt.Fragment, {
              children: [(0, Qt.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Qt.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Xt("auth:legacyLoginOptions")
                }), (0, Qt.jsx)(nt.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Xt("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Qt.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: fe.slice(1)
              })]
            })]
          }), Nt.featureFlags.useLogin && (null !== Jt.loggedInInfo || Jt.isLoggedIn()) && (0, Qt.jsxs)(Qt.Fragment, {
            children: [(0, Qt.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Qt.jsxs)(Ht.G, {
              onClick: () => {
                (0, ct.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Qt.jsx)(dt.b, {
                name: "right-from-bracket"
              }), Xt("auth:signOut")]
            })]
          })]
        }), !Jt.playerHasRank("super") && yt && (0, Qt.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Qt.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Qt.jsx)(dt.b, {
              name: "bolt"
            }), Xt("homePage:superRank")]
          }), (0, Qt.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Qt.jsxs)(Ht.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ot.l)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Qt.jsx)(dt.b, {
                name: "bolt"
              }), Xt("homePage:getSuperRank")]
            }), (0, Qt.jsxs)(Ht.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ot.l)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Qt.jsx)(dt.b, {
                name: "bolt"
              }), Xt("homePage:giftSuperRank")]
            })]
          }), (0, Qt.jsx)(le, {
            ...Mt
          })]
        }), Jt.playerHasRank("super") && (0, Qt.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Qt.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Qt.jsx)(dt.b, {
              name: "bolt"
            }), Xt("homePage:superRank"), gt && (0, Qt.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", gt, ")"]
            })]
          }), yt && (0, Qt.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, zt.Ec)(Jt.superRankInfo) && (0, Qt.jsxs)(Ht.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: Yt,
              onClick: () => {
                pt(Ft.l.id, null)
              },
              children: [(0, Qt.jsx)(dt.b, {
                name: "bolt"
              }), Xt("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Ft.l.product.days,
                price: Ft.l.price
              })]
            }), (0, Qt.jsxs)(Ht.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ot.l)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Qt.jsx)(dt.b, {
                name: "bolt"
              }), Xt("homePage:giftSuperRank")]
            })]
          }), Bt && (0, Qt.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Xt(Bt.translationKey)
          }), (0, Qt.jsx)(le, {
            ...Mt
          })]
        }), (0, Qt.jsx)(De, {
          showing: qt
        }), Nt.featureFlags.useSocialFeatures && (0, Qt.jsx)(Se, {
          showing: qt
        }), (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Qt.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Qt.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Xt(Re(we, ye))
            }), (0, St.isDiscordClient)() && (0, Qt.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Xt("auth:discordActivityKickWarning")
            }), (0, Qt.jsx)(Ce, {
              showing: qt
            })]
          }), (0, Qt.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Xt(we ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Re(tt, et) {
      return tt ? et ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Ie = Vt(34278),
      Pe = Vt(3192),
      Ze = Vt(1338),
      Le = Vt(1543),
      Fe = Vt(2063),
      ke = Vt(9109),
      Ge = Vt(34286);

    function ze() {
      const {
        t: tt
      } = (0, mt.H)();
      return (0, Fe.h)("localPlayerAlive") ? (0, Qt.jsx)(ke.d, {
        icon: "camera-alt",
        title: tt("screenshotMode:title"),
        sub: tt("screenshotMode:entrySub"),
        onClick: Ge.b
      }) : null
    }
    var oe = Vt(34301);
    const re = (0, Ot.memo)((function(tt) {
        let {
          inGame: et
        } = tt;
        const {
          t: Vt,
          selectedLanguage: Ot
        } = (0, mt.H)(), {
          clientEscMenuOptions: qt,
          showDebugOverlay: Dt,
          isTouchScreen: dt
        } = (0, ht.k)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), jt = (0, wt.i)("hideCoordinates");
        let Ht = "settingsMenu:showCoordinates",
          Xt = "settingsMenu:showChunkCoordinates";

        function lt(tt) {
          const et = new Intl.DisplayNames([tt], {
            type: "language"
          }).of(tt);
          return et.charAt(0).toUpperCase() + et.slice(1)
        }
        return jt && (Ht = "settingsMenu:showCoordinatesHidden", Xt = "settingsMenu:showChunkCoordinatesHidden"), (0, Qt.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [et && Nt.featureFlags.canUseInviteLinks && (0, Qt.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Qt.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Vt("settingsMenu:inviteLink")
            }), (0, Qt.jsx)(Ie.h, {})]
          }), (0, Qt.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Qt.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Vt("settingsMenu:language")
            }), (0, Qt.jsx)(Pe.e, {
              options: Object.entries(mt.j).map((tt => {
                let [et, Vt] = tt;
                return {
                  label: (0, Qt.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Qt.jsx)("img", {
                      src: Vt.flagImg,
                      alt: "flag"
                    }), (0, Qt.jsxs)("span", {
                      children: [lt(et), " ", (0, Qt.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", et, ")"]
                      })]
                    })]
                  }),
                  value: et
                }
              })),
              value: Ot.code,
              onChange: tt => {
                Ze.e.get().setCurrentLanguage(tt.value)
              }
            })]
          }), et && dt && (0, oe.d)() && (0, Qt.jsx)(ze, {}), !(0, Nt.isMobileApp)() && (0, Le.i)() && Nt.featureFlags.useForceRotateForceFullscreenOverlay && (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:disableFullscreenMode"),
            checked: qt.disableFullscreen,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                disableFullscreen: tt
              })
            }
          }), (0, Qt.jsx)(Kt.c, {
            label: Vt(Ht),
            checked: qt.showCoordinates,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                showCoordinates: tt
              })
            },
            disabled: jt
          }), (0, Qt.jsx)(Kt.c, {
            label: Vt(Xt),
            checked: qt.showChunkCoordinates,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                showChunkCoordinates: tt
              })
            },
            disabled: jt
          }), (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:showFps"),
            checked: qt.showFPS,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                showFPS: tt
              })
            }
          }), (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:disableBunnyHopping"),
            checked: qt.disableBunnyHopping,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                disableBunnyHopping: tt
              })
            }
          }), (0, Ne.B)() && (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:showChat"),
            checked: qt.showChat,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                showChat: tt
              })
            }
          }), (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:showDebugOverlay"),
            checked: Dt,
            onClick: tt => {
              ht.b.set({
                showDebugOverlay: tt
              })
            }
          }), Nt.featureFlags.useSocialFeatures && (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:showFriendOnlineToasts"),
            checked: qt.showFriendOnlineToasts,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                showFriendOnlineToasts: tt
              })
            }
          }), (0, Qt.jsx)(Kt.c, {
            label: Vt("settingsMenu:showNewItemIndicator"),
            checked: qt.showNewItemIndicator,
            onClick: tt => {
              ht.b.setClientEscMenuOptions({
                showNewItemIndicator: tt
              })
            }
          })]
        })
      })),
      Ue = (0, Ot.memo)((function() {
        const {
          t: tt
        } = (0, mt.H)(), {
          soundVolume: et,
          musicVolume: Vt
        } = (0, ht.k)(["soundVolume", "musicVolume"]);
        return (0, Qt.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Qt.jsx)(Kt.f, {
            name: tt("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Vt,
            onChange: tt => {
              ht.b.set({
                musicVolume: Math.round(100 * tt) / 100
              })
            },
            format: tt => tt.toFixed(2)
          }), (0, Qt.jsx)(Kt.f, {
            name: tt("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: et,
            onChange: tt => {
              ht.b.set({
                soundVolume: Math.round(100 * tt) / 100
              })
            },
            format: tt => tt.toFixed(2)
          })]
        })
      }));
    var Ae = Vt(785),
      ie = Vt(1554),
      Ye = Vt(3739),
      Be = Vt(34303),
      pe = Vt(3555);
    const xe = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Te() {
      const {
        t: tt
      } = (0, mt.H)(), et = (0, pe.b)(), {
        mobilePushNotificationsCanAsk: Vt
      } = (0, ht.k)(["mobilePushNotificationsCanAsk"]), [qt, Dt] = (0, Ot.useState)(null), [dt, jt] = (0, Ot.useState)(!1), [Xt, lt] = (0, Ot.useState)(null), [Et, ft] = (0, Ot.useState)(!1), wt = (0, Ot.useCallback)((() => {
        (0, Ye.d)().then((tt => {
          et.current && (Dt(tt), jt(!1))
        })).catch((tt => {
          console.error("Failed to load push notification targets:", tt), et.current && jt(!0)
        }))
      }), [et]), yt = (0, Ot.useCallback)((() => {
        (0, Be.g)().then((tt => {
          et.current && lt((() => tt))
        }))
      }), [et]);
      (0, Ot.useEffect)((() => {
        wt()
      }), [wt]), (0, Ot.useEffect)((() => {
        yt()
      }), [yt, Vt]), (0, ie.f)(Ye.f, wt);
      const Nt = null === qt ? [] : Object.keys(xe).filter((tt => qt[tt] > 0));
      return (0, Qt.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Qt.jsx)("div", {
          className: "SliderText",
          children: tt("notificationSettings:pushNotifications")
        }), null === qt && dt && (0, Qt.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: tt("notificationSettings:pushTargetsLoadFailed")
        }), null !== qt && 0 === Nt.length && (0, Qt.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: tt("notificationSettings:pushTargetsNone")
        }), Nt.length > 0 && (0, Qt.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Nt.map((et => {
            var Vt;
            return (0, Qt.jsx)("li", {
              children: tt(xe[et], {
                count: null !== (Vt = null === qt || void 0 === qt ? void 0 : qt[et]) && void 0 !== Vt ? Vt : 0
              })
            }, et)
          }))
        }), null !== Xt && (0, Qt.jsx)(Ht.f, {
          className: "PushNotificationSettingsButton",
          loading: Et,
          onClick: () => {
            ft(!0), Xt().catch((tt => {
              console.error("Failed to turn on push notifications:", tt)
            })).finally((() => {
              et.current && (ft(!1), yt())
            }))
          },
          children: tt("notificationSettings:pushTurnOn")
        })]
      })
    }
    var ge = Vt(2630);
    const se = {
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
      ne = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function tV(tt) {
      let {
        setting: et,
        value: Vt
      } = tt;
      const {
        t: qt
      } = (0, mt.H)(), dt = (0, pe.b)(), [jt, Ht] = (0, Ot.useState)(null), [Xt, lt] = (0, Ot.useState)(!1), [Et, ft] = (0, Ot.useState)(null);
      return (0, Ot.useEffect)((() => {
        "remindersOn" === et && (0, Be.g)().then((tt => {
          dt.current && ft((() => tt))
        }), (tt => {
          console.error("Couldn't tell whether this device can take push notifications:", tt)
        }))
      }), [et, dt]), (0, Qt.jsx)(Kt.c, {
        className: Dt()({
          DailyDropSettingFailed: Xt
        }),
        label: qt(ne[et].label),
        checked: null !== jt && void 0 !== jt ? jt : Vt,
        note: Xt ? qt("dailyDrop:settingFailed") : void 0,
        onClick: tt => {
          null === jt && (Ht(tt), lt(!1), tt && null !== Et && Et().catch((tt => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", tt)
          })), (0, ge.z)("daily_drop.setting", `${ne[et].reportAs}_${tt?"on":"off"}`), (0, ge.D)("hidden" === et ? {
            hidden: tt
          } : {
            remindersOn: tt
          }).catch((tt => {
            console.error(`Failed to save the Lucky Skin Block's ${et} setting:`, tt), dt.current && lt(!0)
          })).finally((() => {
            dt.current && Ht(null)
          })))
        }
      })
    }
    const eV = (0, Ot.memo)((function() {
      const {
        t: tt
      } = (0, mt.H)(), {
        clientEscMenuOptions: et
      } = (0, ht.k)(["clientEscMenuOptions"]), {
        userContext: Vt
      } = (0, ft.d)(), Ot = Vt.dailyDrop;
      return (0, Qt.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Nt.featureFlags.useSocialFeatures && (0, Qt.jsx)(Kt.e, {
          label: tt("notificationSettings:friendRequests"),
          options: Ae.d.map((et => ({
            value: et,
            label: tt(se[et].label)
          }))),
          value: et.friendRequestNotifications,
          onChange: tt => {
            ht.b.setClientEscMenuOptions({
              friendRequestNotifications: tt
            })
          },
          circleInfoText: (0, Qt.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: Ae.d.map((et => (0, Qt.jsxs)("div", {
              children: [(0, Qt.jsx)("b", {
                children: tt(se[et].label)
              }), ": ", tt(se[et].info)]
            }, et)))
          })
        }), null !== Ot && (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsx)(tV, {
            setting: "remindersOn",
            value: Ot.remindersOn
          }), (0, Qt.jsx)(tV, {
            setting: "hidden",
            value: Ot.hidden
          })]
        }), (0, Qt.jsx)(Te, {})]
      })
    }));
    var VV = Vt(4641),
      OV = Vt(229),
      qV = Vt(366),
      DV = Vt(6873),
      mV = Vt(3524),
      dV = Vt(34305),
      jV = Vt(710),
      HV = Vt(31);
    var XV = Vt(725),
      QV = Vt(39),
      lV = Vt(4482);
    const EV = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function fV(tt) {
      return EV.has(tt) ? Mt.gameBridge.lookup("VJ", null) : null
    }

    function wV(tt) {
      if (!(0, jV.B)(ht.b.get("clientEscMenuOptions")[tt])) return ht.b.get("clientEscMenuOptions")[tt];
      const et = fV(tt);
      return null !== et ? et[EV.get(tt)] : QV.e.getItem(tt)
    }

    function yV(tt, et) {
      if ("useTouchControls" === tt) return void(0, lV.d)(et);
      tt in ht.b.get("clientEscMenuOptions") && ht.b.setClientEscMenuOptions({
        [tt]: et
      });
      const Vt = fV(tt);
      null !== Vt && Mt.gameBridge.send("setChunkAddDistance", {
        ...Vt,
        [EV.get(tt)]: et
      }), QV.e.setItem(tt, et)
    }
    var NV = Vt(4563),
      aV = Vt(34308),
      MV = Vt(34317),
      bV = Vt(4637),
      JV = Vt(34330);

    function CV(tt) {
      var et, qt, dt, jt;
      let {
        minChunkAddDist: Ht,
        getValue: Xt,
        onChange: lt,
        setApplySettingsCallback: Et
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), {
        clientEscMenuOptions: yt
      } = (0, ht.k)(["clientEscMenuOptions", "showDistantNametags"]), Mt = (0, Ot.useRef)(Xt("showFog")), bt = (0, Ot.useRef)(yt.antiAliasing), Jt = (0, Ot.useRef)(yt.useWebGpu), [Ct, ut] = (0, Ot.useState)(null), [Wt, St] = (0, Ot.useState)(!1), [ct, Rt] = (0, Ot.useState)((() => (0, mV.g)(Nt.featureFlags.settings.canUseShaderPacks))), [It] = (0, Ot.useState)((() => ht.b.isWebGpuDefaultOff())), [Pt] = (0, Ot.useState)(qV.g), [Zt] = (0, Ot.useState)((() => !0 === QV.e.getItem(ae.Rb))), [Lt] = (0, Ot.useState)((() => ht.b.isWebGpuOnStored()));
      (0, Ot.useEffect)((() => {
        let tt = !1;
        return (0, Nt.hasUsableWebGpuAdapter)().then((async et => {
          const Vt = Zt || Lt,
            Ot = !et && XV.K && await (0, JV.f)(Vt);
          tt || (ut(et || Ot), St(Ot))
        })), (0, mV.m)(Nt.featureFlags.settings.canUseShaderPacks) && (0, DV.g)().then((async et => {
          const Ot = null !== et && await async function(tt) {
            const [{
              isShaderPackActive: et
            }, {
              loadPageShaderPackCompiler: Ot
            }] = await Promise.all([Vt.e(139).then((() => Vt(6866))), Promise.all([Vt.e(78), Vt.e(136), Vt.e(138)]).then((() => Vt(6816)))]);
            return et(tt, await Ot())
          }(et);
          tt || Rt(Ot)
        })), () => {
          tt = !0
        }
      }), [Zt, Lt]);
      const Ft = (!(ct && !Zt) || !Wt) && Ct,
        kt = function(tt, et, Vt, Ot, qt) {
          return (0, dV.e)(Vt, Ot) && !0 === et ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== et ? "settingsMenu:newWebGpu" : qt ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: tt && !1 !== et,
            disabled: !0 !== et
          }
        }(yt.useWebGpu, Ft, ct, It, Pt),
        Gt = (yt.useWebGpu || (0, dV.e)(ct, It)) && ct && !0 === Ft,
        zt = (0, wt.i)("lightingOverride"),
        ot = !(0, jV.B)(zt);
      let rt = "settingsMenu:enableLighting";
      ot && (rt = zt ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Ut = tt => {
          var et, Vt, Ot;
          const qt = null !== (et = tt.showFog) && void 0 !== et ? et : Xt("showFog"),
            Dt = null !== (Vt = tt.antiAliasing) && void 0 !== Vt ? Vt : yt.antiAliasing,
            mt = null !== (Ot = tt.useWebGpu) && void 0 !== Ot ? Ot : yt.useWebGpu,
            dt = !XV.K && qt !== Mt.current || Dt !== bt.current || mt !== Jt.current;
          Et(dt ? () => Kt.j : null)
        },
        At = (0, wt.i)("fogChunkDistanceOverride"),
        it = (0, wt.i)("fogBlockDistanceOverride"),
        Yt = !(0, jV.B)(At) || !(0, jV.B)(it),
        Bt = Yt ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [pt, xt] = (0, VV.f)(Ht),
        [Tt, gt] = (0, bV.j)(Ht),
        st = ft("settingsMenu:chunkLoadDistanceDeviceLimit"),
        nt = Tt < pt,
        te = Math.min(null !== (et = Xt("chunkHorizAddDist")) && void 0 !== et ? et : Ht[0], Tt),
        ee = !Yt && function(tt, et) {
          return !0 === tt.showFog && tt.fogChunkDistance > et
        }(yt, te);
      return (0, Qt.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Qt.jsx)(Kt.f, {
          name: ft("settingsMenu:horizontalChunkLoadDistance"),
          min: Ht[0],
          max: pt,
          selectableMax: Tt,
          cappedNote: st,
          step: 1,
          initValue: te,
          onChange: tt => {
            !0 === Xt("showFog") && tt < Xt("fogChunkDistance") && lt("fogChunkDistance", tt), lt("chunkHorizAddDist", tt), HV.j.sw("updatedChunkLoadDist")
          },
          circleInfoText: ft("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Qt.jsx)(Kt.f, {
          name: ft("settingsMenu:verticalChunkLoadDistance"),
          min: Ht[1],
          max: xt,
          selectableMax: gt,
          cappedNote: nt ? void 0 : st,
          step: 1,
          initValue: Math.min(null !== (qt = Xt("chunkVertAddDist")) && void 0 !== qt ? qt : Ht[1], gt),
          onChange: tt => {
            lt("chunkVertAddDist", tt), HV.j.sw("updatedChunkLoadDist")
          },
          circleInfoText: ft("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Qt.jsx)(Kt.c, {
          label: ft("settingsMenu:chunkFadeIn"),
          checked: yt.chunkFadeIn,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              chunkFadeIn: tt
            })
          },
          circleInfoText: ft("settingsMenu:chunkFadeInInfo")
        }), vt.devTools.supports("chunkBorders") && (0, Qt.jsx)(Kt.c, {
          label: ft("settingsMenu:showChunkBorders"),
          checked: yt.showChunkBorders,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              showChunkBorders: tt
            })
          },
          circleInfoText: ft("settingsMenu:showChunkBordersInfo")
        }), (0, Qt.jsx)(Kt.c, {
          label: ft(rt),
          checked: yt.enableLighting,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              enableLighting: tt
            })
          },
          disabled: ot
        }), (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Qt.jsx)(Kt.c, {
            label: ft(Bt),
            checked: yt.showFog,
            onClick: tt => {
              Ut({
                showFog: tt
              }), ht.b.setClientEscMenuOptions({
                showFog: tt
              })
            },
            disabled: Yt,
            className: Dt()({
              SettingBoxWarning: ee
            })
          }), (0, Qt.jsx)(Kt.f, {
            name: ft("settingsMenu:fogChunkDistance"),
            min: Ht[0],
            max: OV.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (dt = yt.fogChunkDistance) && void 0 !== dt ? dt : Ht[0],
            onChange: tt => {
              ht.b.setClientEscMenuOptions({
                fogChunkDistance: tt
              }), HV.j.sw("fogChunkDistanceChanged", tt)
            },
            circleInfoText: ft("settingsMenu:fogChunkDistanceInfo"),
            disabled: Yt || !1 === Xt("showFog"),
            className: Dt()({
              SettingBoxWarning: ee
            })
          }), ee && (0, Qt.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: ft("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !XV.K && (0, Qt.jsx)(Kt.c, {
          label: ft(Gt ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Gt && yt.disableTexAtlas,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              disableTexAtlas: tt
            })
          },
          circleInfoText: ft("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Gt
        }), (0, Qt.jsx)(Kt.f, {
          name: ft("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: yt.cameraFOV,
          onChange: tt => {
            ht.b.setClientEscMenuOptions({
              cameraFOV: tt
            })
          }
        }), (0, Qt.jsx)(Kt.c, {
          label: ft("settingsMenu:disableViewBobbing"),
          checked: yt.disableBobbing,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              disableBobbing: tt
            })
          },
          circleInfoText: ft("settingsMenu:disableViewBobbingInfo")
        }), (0, Qt.jsx)(Kt.c, {
          label: ft("settingsMenu:antiAliasing"),
          checked: yt.antiAliasing,
          onClick: tt => {
            Ut({
              antiAliasing: tt
            }), (0, NV.g)("antiAliasing"), ht.b.setClientEscMenuOptions({
              antiAliasing: tt
            })
          },
          circleInfoText: ft("settingsMenu:antiAliasingInfo")
        }), (0, Qt.jsx)(Kt.f, {
          name: ft("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (jt = yt.pixelScale) && void 0 !== jt ? jt : 1,
          onChange: tt => {
            (tt !== ht.b.get("clientEscMenuOptions").pixelScale || (0, MV.o)()) && (0, NV.g)("pixelScale"), ht.b.setClientEscMenuOptions({
              pixelScale: tt
            })
          },
          circleInfoText: ft("settingsMenu:pixelScaleInfo"),
          format: tt => `${tt}x`
        }), (0, Qt.jsx)(Kt.c, {
          label: ft("settingsMenu:pixelSmoothing"),
          checked: yt.pixelSmoothing,
          onClick: tt => {
            ht.b.setClientEscMenuOptions({
              pixelSmoothing: tt
            })
          },
          circleInfoText: ft("settingsMenu:pixelSmoothingInfo")
        }), XV.K && (0, Qt.jsx)(Kt.c, {
          label: ft("settingsMenu:distantNametags"),
          checked: (0, aV.b)(),
          onClick: tt => {
            ht.b.set({
              showDistantNametags: tt
            })
          },
          circleInfoText: ft("settingsMenu:distantNametagsInfo")
        }), (0, Qt.jsx)(Kt.c, {
          label: ft(kt.translationKey),
          checked: kt.checked,
          onClick: tt => {
            Ut({
              useWebGpu: tt
            }), ht.b.setClientEscMenuOptions({
              useWebGpu: tt
            })
          },
          circleInfoText: ft("settingsMenu:newWebGpuInfo"),
          disabled: kt.disabled
        })]
      })
    }
    var uV = Vt(4554),
      KV = Vt(9082),
      hV = Vt(34333),
      vV = Vt(9093),
      WV = Vt(34342);
    const SV = {
        color: 16777215,
        name: "white"
      },
      cV = {
        color: 0,
        name: "black"
      },
      RV = [SV, {
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
      }, cV],
      IV = [cV, SV];

    function PV(tt) {
      return `${tt} px`
    }

    function ZV(tt) {
      return `${tt}%`
    }

    function LV(tt) {
      let {
        label: et,
        value: Vt,
        swatches: Ot,
        onChange: qt
      } = tt;
      const {
        t: dt
      } = (0, mt.H)(), jt = !Ot.some((tt => tt.color === Vt));
      return (0, Qt.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Qt.jsx)("div", {
          className: "SliderText",
          children: et
        }), (0, Qt.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": et,
          children: [Ot.map((tt => {
            let {
              color: et,
              name: Ot
            } = tt;
            return (0, Qt.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": et === Vt,
              "aria-label": dt(`crosshairSettings:color_${Ot}`),
              "data-pad-focusable": !0,
              className: Dt()("CrosshairSwatch", {
                Selected: et === Vt
              }),
              style: {
                background: (0, WV.l)(et)
              },
              onClick: () => {
                qt(et)
              }
            }, et)
          })), (0, Qt.jsx)("label", {
            className: Dt()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: jt
            }),
            style: jt ? {
              background: (0, WV.l)(Vt)
            } : void 0,
            title: dt("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Qt.jsx)("input", {
              type: "color",
              "aria-label": dt("crosshairSettings:customColor"),
              value: (0, WV.l)(Vt),
              onChange: tt => {
                const et = (0, WV.q)(tt.target.value);
                null !== et && qt(et)
              }
            })
          })]
        })]
      })
    }

    function FV(tt) {
      let {
        settings: et,
        onChange: Vt
      } = tt;
      const {
        t: Ot
      } = (0, mt.H)(), qt = (tt, Ot) => {
        Vt((0, WV.v)(et, tt, Ot))
      }, Dt = function(tt, Vt) {
        let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PV;
        const {
          min: Dt,
          max: mt,
          step: dt
        } = WV.e[tt];
        return (0, Qt.jsx)(Kt.f, {
          name: Vt,
          min: Dt,
          max: mt,
          step: dt,
          initValue: et[tt],
          format: Ot,
          onChange: et => {
            qt(tt, et)
          }
        }, tt)
      }, dt = ["lines", "dot", "circle"].filter((tt => et[tt])), jt = (tt, Vt, Ot) => (0, Qt.jsx)(Kt.c, {
        label: Vt,
        checked: et[tt],
        disabled: 1 === dt.length && dt[0] === tt,
        circleInfoText: Ot,
        onClick: et => {
          qt(tt, et)
        }
      }, tt), Ht = "shapes" === et.style;
      return (0, Qt.jsxs)(Qt.Fragment, {
        children: [(0, Qt.jsx)(Kt.e, {
          label: Ot("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Ot("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Ot("crosshairSettings:styleShapes")
          }],
          value: et.style,
          onChange: tt => {
            qt("style", tt)
          }
        }), (0, Qt.jsx)(LV, {
          label: Ot("crosshairSettings:color"),
          value: et.color,
          swatches: RV,
          onChange: tt => {
            qt("color", tt)
          }
        }), Dt("opacity", Ot("crosshairSettings:opacity"), ZV), !Ht && Dt("size", Ot("crosshairSettings:size"), ZV), Ht && (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [jt("lines", Ot("crosshairSettings:lines")), et.lines && Dt("lineLength", Ot("crosshairSettings:lineLength")), et.lines && Dt("lineThickness", Ot("crosshairSettings:lineThickness")), et.lines && Dt("gap", Ot("crosshairSettings:gap")), et.lines && jt("tStyle", Ot("crosshairSettings:tStyle"))]
        }), Ht && (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [jt("dot", Ot("crosshairSettings:dot")), et.dot && Dt("dotSize", Ot("crosshairSettings:dotSize"))]
        }), Ht && (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [jt("circle", Ot("crosshairSettings:circle")), et.circle && Dt("circleRadius", Ot("crosshairSettings:circleRadius")), et.circle && Dt("circleThickness", Ot("crosshairSettings:circleThickness"))]
        }), (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Dt("outline", Ot("crosshairSettings:outline"), (tt => tt > 0 ? PV(tt) : Ot("crosshairSettings:off"))), et.outline > 0 && (0, Qt.jsx)(LV, {
            label: Ot("crosshairSettings:outlineColor"),
            value: et.outlineColor,
            swatches: IV,
            onChange: tt => {
              qt("outlineColor", tt)
            }
          })]
        }), jt("growOnClick", Ot("crosshairSettings:growOnClick")), Ht && jt("forGuns", Ot("crosshairSettings:forGuns"), Ot("crosshairSettings:forGunsInfo"))]
      })
    }
    var kV = Vt(83),
      GV = Vt(1371),
      zV = Vt(13066),
      oV = Vt(14233),
      rV = Vt(15700),
      UV = Vt(16202);
    const AV = ["sky", "grass", "stone", "sand", "snow", "night"],
      iV = "4rem";

    function YV(tt) {
      return {
        backgroundImage: `url(${tt})`,
        backgroundSize: `${iV} ${iV}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function BV(tt) {
      return {
        ...(() => {
          switch (tt) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return YV(zV);
            case "stone":
              return YV(oV);
            case "sand":
              return YV(rV);
            case "snow":
              return YV(UV);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function pV(tt) {
      return Object.freeze({
        ...WV.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...tt
      })
    }
    const xV = [{
        id: "default",
        settings: WV.g
      }, {
        id: "cross",
        settings: pV({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: pV({
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
        settings: pV({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: pV({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: pV({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: pV({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: pV({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      TV = ["growOnClick", "forGuns"];
    var gV = Vt(34349);

    function sV(tt) {
      let {
        label: et,
        selected: Vt,
        onClick: Ot,
        className: qt,
        style: mt,
        children: dt
      } = tt;
      return (0, Qt.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Vt,
        title: et,
        "aria-label": et,
        "data-pad-focusable": !0,
        className: Dt()("CrosshairBackdropSwatch", qt, {
          Selected: Vt
        }),
        style: mt,
        onClick: Ot,
        children: dt
      })
    }

    function nV(tt) {
      let {
        backdrop: et,
        onChange: Vt,
        game: Ot
      } = tt;
      const {
        t: qt
      } = (0, mt.H)();
      return (0, Qt.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": qt("crosshairSettings:background"),
        children: [Ot && (0, Qt.jsx)(sV, {
          label: qt("crosshairSettings:bg_game"),
          selected: Ot.selected,
          onClick: Ot.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Qt.jsx)(dt.b, {
            name: "cube"
          })
        }), AV.map((tt => (0, Qt.jsx)(sV, {
          label: qt(`crosshairSettings:bg_${tt}`),
          selected: !(null !== Ot && void 0 !== Ot && Ot.selected) && tt === et,
          style: BV(tt),
          onClick: () => {
            Vt(tt)
          }
        }, tt)))]
      })
    }

    function tO(tt) {
      let {
        settings: et,
        touch: Vt,
        backdrop: Ot,
        onChange: qt
      } = tt;
      const {
        t: dt
      } = (0, mt.H)(), jt = function(tt) {
        var et;
        return null !== (et = xV.find((et => (0, WV.t)(et.settings, tt, TV)))) && void 0 !== et ? et : null
      }(et);
      return (0, Qt.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": dt("crosshairSettings:presets"),
        children: xV.map((tt => {
          const mt = (null === jt || void 0 === jt ? void 0 : jt.id) === tt.id;
          return (0, Qt.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": mt,
            "data-pad-focusable": !0,
            className: Dt()("CrosshairPreset", {
              Selected: mt
            }),
            onClick: () => {
              qt(function(tt, et) {
                return {
                  ...et.settings,
                  growOnClick: tt.growOnClick,
                  forGuns: tt.forGuns
                }
              }(et, tt))
            },
            children: [(0, Qt.jsx)("div", {
              className: "CrosshairPresetStage",
              style: BV(Ot),
              children: (0, Qt.jsx)(gV.e, {
                settings: tt.settings,
                touch: Vt,
                inPreview: !0
              })
            }), (0, Qt.jsx)("div", {
              className: "CrosshairPresetName",
              children: dt(`crosshairSettings:preset_${tt.id}`)
            })]
          }, tt.id)
        }))
      })
    }
    var eO = Vt(1767);

    function VO(tt, et) {
      const [Vt, qt] = (0, Ot.useState)(!1), Dt = () => {
        qt(!1)
      }, [mt, dt] = (0, Ot.useState)(!1), jt = (0, Ot.useRef)({
        growOnClick: tt.growOnClick,
        forGuns: tt.forGuns
      });
      (0, Ot.useEffect)((() => {
        const et = jt.current;
        jt.current = {
          growOnClick: tt.growOnClick,
          forGuns: tt.forGuns
        }, (tt.growOnClick && !et.growOnClick || tt.forGuns && !et.forGuns) && dt(!0)
      }), [tt.growOnClick, tt.forGuns]), (0, Ot.useEffect)((() => {
        if (!mt) return;
        const tt = setTimeout((() => {
          dt(!1)
        }), 600);
        return () => {
          clearTimeout(tt)
        }
      }), [mt]);
      const Ht = Vt || mt;
      return {
        view: {
          pressed: Ht,
          spread: Ht && tt.forGuns && !tt.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: tt => {
            !tt.target.closest(et) && (0, eO.d)(tt.currentTarget, tt.pointerId) && qt(!0)
          },
          onPointerUp: Dt,
          onPointerCancel: Dt,
          onLostPointerCapture: Dt
        }
      }
    }

    function OO(tt) {
      let {
        settings: et,
        touch: Vt,
        backdrop: Ot,
        className: qt,
        children: mt,
        label: dt
      } = tt;
      const jt = VO(et, ".CrosshairStageControls");
      return (0, Qt.jsxs)("div", {
        className: Dt()("CrosshairStage", qt),
        style: BV(Ot),
        ...jt.handlers,
        children: [(0, Qt.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": dt,
          children: (0, Qt.jsx)(gV.e, {
            settings: et,
            touch: Vt,
            inPreview: !0,
            ...jt.view
          })
        }), mt]
      })
    }
    const qO = "crosshairFullScreen";

    function DO(tt) {
      let {
        settings: et,
        touch: Vt,
        backdrop: qt,
        onBackdrop: jt,
        inGame: Xt,
        onChange: lt,
        onClose: Et
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), wt = (0, Ot.useRef)(null);
      (0, GV.w)("popup", wt, Et),
      function(tt) {
        const et = (0, Ot.useRef)(tt);
        et.current = tt, (0, Ot.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [qO]: !0
          }, "");
          let tt = !1;
          const Vt = () => {
            tt = !0, et.current()
          };
          return window.addEventListener("popstate", Vt), () => {
            var et;
            window.removeEventListener("popstate", Vt), !tt && null !== (et = window.history.state) && void 0 !== et && et[qO] && window.history.back()
          }
        }), [])
      }(Et);
      const yt = (0, Ot.useRef)(Et);
      yt.current = Et, (0, Ot.useEffect)((() => {
        function tt(tt) {
          "Escape" === tt.key && (tt.stopPropagation(), yt.current())
        }
        return window.addEventListener("keydown", tt, !0), () => {
          window.removeEventListener("keydown", tt, !0)
        }
      }), []);
      const Nt = VO(et, ".CrosshairFullScreenPanel"),
        [Mt, bt] = (0, Ot.useState)(!0),
        Jt = Mt && Xt;
      (0, Ot.useEffect)((() => {
        if (Jt) return ht.b.set({
          crosshairGameView: !0
        }), () => {
          ht.b.set({
            crosshairGameView: !1
          })
        }
      }), [Jt]);
      const [Ct, ut] = (0, Ot.useState)(!0);
      return (0, kV.createPortal)((0, Qt.jsxs)("div", {
        ref: wt,
        className: "CrosshairFullScreen",
        style: Jt ? void 0 : BV(qt),
        ...Nt.handlers,
        children: [(0, Qt.jsx)(gV.e, {
          settings: et,
          touch: Vt,
          inEditor: !0,
          ...Nt.view
        }), (0, Qt.jsxs)("div", {
          className: Dt()("CrosshairFullScreenPanel", {
            Collapsed: !Ct
          }),
          children: [(0, Qt.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Qt.jsx)(nV, {
              backdrop: qt,
              onChange: tt => {
                bt(!1), jt(tt)
              },
              game: Xt ? {
                selected: Jt,
                onSelect: () => {
                  bt(!0)
                }
              } : void 0
            }), (0, Qt.jsx)(Ht.Q, {
              className: "CrosshairPanelToggle",
              ariaLabel: ft(Ct ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                ut(!Ct)
              },
              children: (0, Qt.jsx)(dt.b, {
                name: Ct ? "caret-up" : "pen"
              })
            }), (0, Qt.jsx)(Ht.f, {
              className: "CrosshairFullScreenDone",
              onClick: Et,
              padDefaultFocus: !0,
              children: ft("crosshairSettings:done")
            })]
          }), Ct && (0, Qt.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Qt.jsx)(tO, {
              settings: et,
              touch: Vt,
              backdrop: qt,
              onChange: lt
            }), (0, Qt.jsx)(FV, {
              settings: et,
              onChange: lt
            })]
          })]
        })]
      }), document.body)
    }
    var mO = Vt(2755),
      dO = Vt(34354);

    function jO(tt) {
      let {
        settings: et,
        onChange: Vt
      } = tt;
      const {
        t: qt
      } = (0, mt.H)(), jt = (0, dO.k)(et), [Xt, lt] = (0, mO.k)(), [Et, ft] = (0, Ot.useState)(!1), wt = (0, Ot.useRef)(null), [yt, Nt] = (0, mO.k)(), [Mt, bt] = (0, Ot.useState)(!1);
      return (0, Qt.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Qt.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Qt.jsxs)(Ht.Q, {
            className: Dt()("CrosshairCopy", {
              ActiveSecondaryButton: Xt
            }),
            onClick: () => {
              (0, mO.h)(jt, {
                useShareSheet: !1,
                onOutcome: tt => {
                  ft("failed" === tt), "copied" === tt && lt()
                }
              })
            },
            children: [(0, Qt.jsx)(dt.b, {
              name: Xt ? "check" : "copy"
            }), " ", qt(Xt ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Qt.jsx)(Ct.d, {
            className: "CrosshairPaste",
            domRef: wt,
            ariaLabel: qt("crosshairSettings:paste"),
            placeholderText: qt("crosshairSettings:paste"),
            onValueChange: tt => {
              const et = (0, dO.g)(tt);
              bt(!et && tt.trim().length >= dO.c), et && (Vt(et), wt.current.value = "", Nt())
            }
          })]
        }), Et && (0, Qt.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: jt,
          "aria-label": qt("crosshairSettings:copy"),
          onFocus: tt => {
            tt.currentTarget.select()
          }
        }), (0, Qt.jsxs)("div", {
          "aria-live": "polite",
          children: [Mt && (0, Qt.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: qt("crosshairSettings:pasteInvalid")
          }), yt && !Mt && (0, Qt.jsx)("div", {
            className: "CrosshairShareNote",
            children: qt("crosshairSettings:applied")
          })]
        })]
      })
    }
    var HO = Vt(34363);
    let XO = "sky";

    function QO(tt) {
      let {
        showing: et
      } = tt;
      const {
        t: Vt
      } = (0, mt.H)(), {
        isTouchScreen: qt,
        gameState: Dt,
        clientEscMenuOptions: jt
      } = (0, ht.k)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Xt = (0, HO.g)(), [lt, Et] = (0, Ot.useState)(XO), ft = tt => {
        XO = tt, Et(tt)
      }, [wt, yt] = (0, Ot.useState)(!1);
      return (0, Ot.useEffect)((() => {
        et || yt(!1)
      }), [et]), (0, Qt.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Qt.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Qt.jsx)(OO, {
            className: "CrosshairPreviewStage",
            settings: Xt,
            touch: qt,
            backdrop: lt,
            label: Vt("crosshairSettings:preview"),
            children: (0, Qt.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Qt.jsx)(nV, {
                backdrop: lt,
                onChange: ft
              }), (0, Qt.jsxs)(Ht.Q, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  yt(!0)
                },
                children: [(0, Qt.jsx)(dt.b, {
                  name: "expand"
                }), " ", Vt("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Qt.jsx)("div", {
          className: "SettingBox",
          children: (0, Qt.jsx)(tO, {
            settings: Xt,
            touch: qt,
            backdrop: lt,
            onChange: HO.c
          })
        }), (0, Qt.jsx)(jO, {
          settings: Xt,
          onChange: HO.c
        }), qt && (0, Qt.jsx)(vV.d, {
          note: (0, hV.h)(qt, jt.touchActionButtons) ? Vt("crosshairSettings:touchNote") : void 0
        }), (0, Qt.jsx)(FV, {
          settings: Xt,
          onChange: HO.c
        }), wt && (0, Qt.jsx)(DO, {
          settings: Xt,
          touch: qt,
          backdrop: lt,
          onBackdrop: ft,
          inGame: "inGame" === Dt,
          onChange: HO.c,
          onClose: () => {
            yt(!1)
          }
        })]
      })
    }
    var lO = Vt(9091),
      EO = Vt(1504),
      fO = Vt(5150),
      wO = Vt(34367),
      yO = Vt(4376),
      NO = Vt(2066),
      aO = Vt(794);
    const MO = (0, Ot.memo)((function() {
      const {
        clientEscMenuOptions: tt
      } = (0, ht.k)(["clientEscMenuOptions"]), {
        recording: et,
        clipping: Vt,
        hasClipBuffer: qt
      } = (0, Fe.h)("replayRecorder"), mt = (0, Fe.g)("connectedGame", (tt => tt.replay)), dt = (0, yO.j)(), jt = !1 === (0, wt.i)("canRecordReplays");
      (0, Ot.useEffect)((() => {
        Mt.gameBridge.send("setRecorderPrefs", {
          clipping: tt.enableClipping,
          clipSeconds: tt.clipDurationSeconds
        })
      }), [tt.enableClipping, tt.clipDurationSeconds]);
      const Xt = dt || mt,
        lt = !Xt && !jt,
        Et = et || lt,
        ft = lt,
        yt = ft && Vt && !et;

      function Nt() {
        Et && Mt.gameBridge.send("toggleRecording", null)
      }
      return (0, Qt.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Qt.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: et ? (0, Qt.jsxs)(Qt.Fragment, {
              children: [(0, Qt.jsxs)(Ht.G, {
                className: "ReplayViewerCategoryButton",
                onClick: Nt,
                disabled: !Et,
                children: [(0, Qt.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Qt.jsx)(NO.d, {
                  noaAction: "recordGame"
                })]
              }), (0, Qt.jsx)(wO.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Qt.jsxs)(Ht.f, {
              className: "ReplayViewerCategoryButton",
              onClick: Nt,
              disabled: !Et,
              children: [(0, Qt.jsx)("span", {
                children: "Start Recording"
              }), (0, Qt.jsx)(NO.d, {
                noaAction: "recordGame"
              })]
            })
          }), jt && (0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Xt && !et && (0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Qt.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Qt.jsx)(Kt.c, {
            label: "Enable clipping",
            checked: tt.enableClipping,
            disabled: !ft,
            onClick: function(tt) {
              ft && ht.b.setClientEscMenuOptions({
                enableClipping: tt
              })
            },
            className: Dt()({
              SettingBoxDisabled: !ft
            })
          }), (0, Qt.jsx)(Kt.f, {
            name: "Clip duration (seconds)",
            min: aO.j,
            max: aO.g,
            step: aO.c,
            initValue: tt.clipDurationSeconds,
            onChange: function(tt) {
              ht.b.setClientEscMenuOptions({
                clipDurationSeconds: tt
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !ft || !tt.enableClipping
          })]
        }), (0, Qt.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Qt.jsxs)(Ht.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              yt && Mt.gameBridge.send("saveClip", null)
            },
            disabled: !yt,
            children: [(0, Qt.jsx)("span", {
              children: "Record clip"
            }), (0, Qt.jsx)(NO.d, {
              noaAction: "recordClip"
            })]
          }), tt.enableClipping && !qt && ft && !et && (0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), et && (0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Qt.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Qt.jsxs)(Ht.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, yO.f)(!0), ht.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: dt,
            children: [(0, Qt.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Qt.jsx)(NO.d, {
              noaAction: "replayViewerOpen"
            })]
          }), dt && (0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Qt.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Qt.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Qt.jsx)("iframe", {
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
    var bO = Vt(1993);
    const JO = {
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
        icon: () => (0, Qt.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Qt.jsx)("path", {
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
      YE: {
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

    function CO() {
      return Promise.all([Vt.e(78), Vt.e(136), Vt.e(135), Vt.e(131)]).then((() => Vt(41269))).then((tt => ({
        default: tt.ShaderPackCategory
      })), (tt => (console.error("Failed to load the shader pack settings", tt), {
        default: uO
      })))
    }

    function uO() {
      const {
        t: tt
      } = (0, mt.H)();
      return (0, Qt.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: tt("shaderPack:tabLoadFailed")
      })
    }
    var KO = Vt(1492);
    const hO = (0, Ot.lazy)((() => Vt.e(278).then((() => Vt(41259))).then((tt => ({
        default: tt.BloxdInformation
      }))))),
      vO = (0, Ot.lazy)(CO);

    function WO(tt) {
      return tt ? "general" : "account"
    }
    const SO = new Map,
      cO = (0, Ot.memo)((function(tt) {
        let {
          show: et,
          setBeforeResumeCallback: Vt
        } = tt;
        (0, yt.c)();
        const {
          gameState: qt,
          openSettingsCategory: Dt
        } = (0, ht.k)(["gameState", "openSettingsCategory"]), {
          userContext: jt
        } = (0, ft.d)(), {
          t: Xt
        } = (0, mt.H)(), Ct = (0, Et.c)(), ut = (0, wt.i)("minChunkAddDist"), Kt = "inGame" === qt, [vt, ct] = (0, Ot.useState)(WO(Kt)), [Rt, It] = (0, Ot.useState)(null), [Pt, Zt] = (0, Ot.useState)([]), Lt = (0, Ot.useRef)(function() {
          const tt = new Date,
            et = 6 * (tt.getMonth() + tt.getDate()) % ae.t.length;
          return [...ae.t, ...ae.t].slice(et, et + 6)
        }()), Ft = (0, Ot.useRef)(null), kt = (0, ie.h)(EO.e, (0, EO.c)()), Gt = Object.keys(JO).filter((tt => {
          switch (tt) {
            case "replayViewer":
              return Kt;
            case "developerTools":
              return jt.playerHasRank("developer") || !1;
            case "texturePack":
              return Nt.featureFlags.settings.canChangeTexturePack;
            case "YE":
              return Nt.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Nt.featureFlags.useSocialFeatures || null !== jt.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== St.siteUsed;
            case "controller":
              return Nt.featureFlags.useControllerSupport && (kt || "controller" === vt);
            default:
              return !0
          }
        }));
        (0, ie.f)("toggleFullCoordinateOverlay", (() => {
          const tt = wV("showCoordinates") && wV("showChunkCoordinates") && wV("showFPS");
          yV("showCoordinates", !tt), yV("showChunkCoordinates", !tt), yV("showFPS", !tt), Ct()
        })), (0, ie.f)("updatedChunkLoadDist", (() => {
          Ct()
        })), (0, Ot.useEffect)((() => {
          if (It(null), null === ht.b.get("openSettingsCategory")) {
            const tt = (0, KO.j)() ? SO.get(Kt) : void 0;
            ct(tt && Gt.includes(tt) ? tt : WO(Kt))
          }
        }), [et]), (0, Ot.useEffect)((() => {
          null !== Dt && (ct(Dt), SO.set(Kt, Dt), ht.b.set({
            openSettingsCategory: null
          }))
        }), [Dt, Kt]), (0, Ot.useLayoutEffect)((() => {
          Ft.current && (Ft.current.scrollTop = 0)
        }), [vt, et]), (0, Ot.useEffect)((() => {
          "updateLog" === vt && (0, Jt.d)().then(Zt)
        }), [vt]), (0, Ot.useEffect)((() => {
          if ((0, jV.B)(ut)) return;
          const [tt, et] = (0, uV.d)(), [Vt, Ot] = (0, VV.f)(ut), qt = (0, bO.e)(ut[0], tt, Vt), Dt = (0, bO.e)(ut[1], et, Ot);
          Mt.gameBridge.send("setChunkAddDistance", {
            horizontal: qt,
            vertical: Dt
          })
        }), [ut]);
        const zt = (0, Ot.useCallback)((async () => {
          Rt && (await Rt(), It(null))
        }), [Rt]);

        function ot() {
          ht.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, Ot.useEffect)((() => {
          Vt((() => zt))
        }), [zt, Vt]), (0, Qt.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: et ? {} : {
            display: "none"
          },
          children: [(0, Qt.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Qt.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Qt.jsx)(lt, {
                items: Gt.map((tt => {
                  const et = JO[tt].icon;
                  return {
                    id: tt,
                    faIcon: "string" === typeof et ? et : void 0,
                    iconElement: "string" === typeof et ? void 0 : (0, Qt.jsx)(et, {}),
                    title: Xt(JO[tt].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: vt,
                onClick: tt => {
                  !async function(tt) {
                    await zt(), ct(tt), SO.set(Kt, tt)
                  }(tt)
                }
              })
            })
          }), (0, Qt.jsxs)("div", {
            ref: Ft,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === vt && (0, Qt.jsx)(ce, {
              showing: et,
              inGame: Kt
            }), "general" === vt && (0, Qt.jsx)(re, {
              inGame: Kt
            }), "audio" === vt && (0, Qt.jsx)(Ue, {}), "notifications" === vt && (0, Qt.jsx)(eV, {}), "graphics" === vt && (0, Qt.jsx)(CV, {
              minChunkAddDist: null !== ut && void 0 !== ut ? ut : [2, 2],
              getValue: wV,
              onChange: yV,
              setApplySettingsCallback: It
            }), "controls" === vt && (0, Qt.jsx)(KV.f, {}), "crosshair" === vt && (0, Qt.jsx)(QO, {
              showing: et
            }), "controller" === vt && Nt.featureFlags.useControllerSupport && (0, Qt.jsx)(lO.d, {}), Nt.featureFlags.settings.canChangeTexturePack && "texturePack" === vt && (0, Qt.jsx)(fO.e, {
              setApplySettingsCallback: It
            }), Nt.featureFlags.settings.canUseShaderPacks && "YE" === vt && (0, Qt.jsx)(Ot.Suspense, {
              fallback: null,
              children: (0, Qt.jsx)(vO, {
                setApplySettingsCallback: It
              })
            }), "updateLog" === vt && (0, Qt.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Qt.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Pt.map(((tt, et) => (0, Qt.jsx)(bt.c, {
                  updateLog: tt,
                  index: et,
                  close: ot
                }, et)))
              })
            }), "information" === vt && (0, Qt.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Qt.jsx)(Ot.Suspense, {
                fallback: null,
                children: (0, Qt.jsx)(hO, {})
              })
            }), "alternativeDomains" === vt && (0, Qt.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Qt.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Xt("settingsMenu:unblockedDomainsDescription")
              }), (0, Qt.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Lt.current.map((tt => (0, Qt.jsxs)(Ht.f, {
                  onClick: () => {
                    window.open(`https://${tt}`)
                  },
                  children: [(0, Qt.jsx)(dt.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", tt]
                }, tt)))
              })]
            }), "replayViewer" === vt && (0, Qt.jsx)(MO, {}), "developerTools" === vt && (0, Qt.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Qt.jsx)(Wt, {
                setApplySettingsCallback: It
              })
            }), null !== Rt && (0, Qt.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Qt.jsx)(Ht.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: zt,
                children: Xt("general:apply")
              })
            })]
          })]
        })
      }));
    var RO = Vt(2719);
    const IO = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      PO = (0, Ot.lazy)((() => Promise.resolve().then((() => Vt(4802))).then((tt => {
        tt.needGameClientAfterPaint();
        const et = tt.matchmakingLibrariesPromise.then((tt => (0, RO.e)(tt.loadCharacterCustomisationUI(), (tt => tt.CharacterCustomisationUI))));
        return Promise.all([tt.ensureGameSetup(), et]).then((tt => {
          let [, et] = tt;
          return et
        }))
      })))),
      ZO = "openCustomisationTab";

    function LO(tt) {
      var et, Vt, qt;
      let {
        show: Dt
      } = tt;
      const {
        userContext: mt
      } = (0, ft.d)(), dt = (0, rt.usePurchasesAllowed)(), jt = (0, Ot.useRef)(null);
      var Ht, Xt;
      mt !== ct.NULL_USER_CONTEXT && (null === (et = jt.current) || void 0 === et ? void 0 : et.whamm) !== mt.whamm && (jt.current = {
        whamm: mt.whamm,
        mountKey: (null !== (Ht = null === (Xt = jt.current) || void 0 === Xt ? void 0 : Xt.mountKey) && void 0 !== Ht ? Ht : -1) + 1
      });
      const [Et, wt] = (0, Ot.useState)("characters");
      if ((0, ie.f)(ZO, wt), !Dt) return null;
      const yt = IO.filter((tt => "cape" !== tt && "nameColour" !== tt || mt.getPlayerRanks().includes("super") || dt)).map((tt => ({
        id: tt,
        faIcon: ae.A[tt],
        title: ae.B[tt],
        redDot: !1
      })));
      return (0, Qt.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Qt.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Qt.jsx)(lt, {
            items: yt,
            selectedItemId: Et,
            onClick: tt => {
              wt(tt)
            }
          })
        }), (0, Qt.jsx)("div", {
          className: "MenuBody",
          children: (0, Qt.jsx)(Ot.Suspense, {
            fallback: (0, Qt.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Qt.jsx)(ut.b, {})
            }),
            children: (0, Qt.jsx)(PO, {
              selectedTab: Et
            }, null !== (Vt = null === (qt = jt.current) || void 0 === qt ? void 0 : qt.mountKey) && void 0 !== Vt ? Vt : 0)
          })
        })]
      })
    }
    var FO = Vt(1571),
      kO = Vt(1574),
      GO = Vt(34371),
      zO = Vt(4665),
      oO = Vt(3487),
      rO = Vt(3540),
      UO = Vt(34406),
      AO = Vt(9014),
      iO = Vt(34379),
      YO = Vt(34394),
      BO = Vt(2018),
      pO = Vt(2001),
      xO = Vt(5081),
      TO = Vt(1354),
      gO = Vt(1308),
      sO = Vt(1764),
      nO = Vt(9065),
      tq = Vt(2511),
      eq = Vt(2516);

    function Vq(tt) {
      return tt ? Object.keys(tt).sort(((et, Vt) => {
        var Ot, qt, Dt, mt;
        const dt = (null !== (Ot = null === (qt = tt[Vt]) || void 0 === qt ? void 0 : qt.sortPriority) && void 0 !== Ot ? Ot : 0) - (null !== (Dt = null === (mt = tt[et]) || void 0 === mt ? void 0 : mt.sortPriority) && void 0 !== Dt ? Dt : 0);
        return 0 !== dt ? dt : et.localeCompare(Vt)
      })) : []
    }
    const Oq = [{
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

    function qq(tt) {
      for (const {
          threshold: et,
          suffix: Vt
        }
        of Oq)
        if (tt >= et) {
          const Ot = tt / et;
          return Ot >= 100 ? `${Math.floor(Ot)}${Vt}` : Ot >= 10 ? `${Ot.toFixed(1).replace(/\.0$/,"")}${Vt}` : `${Ot.toFixed(2).replace(/\.?0+$/,"")}${Vt}`
        } return String(tt)
    }
    var Dq = Vt(5186);
    const mq = {
        normal: "0.8em",
        big: "1em"
      },
      dq = (0, Ot.memo)((function(tt) {
        let {
          item: et,
          amount: Vt = 0,
          size: Ot = "normal",
          tier: qt = null
        } = tt;
        return (0, Qt.jsx)("div", {
          className: Dt()("SmpSlot", `SmpSlot-${Ot}`),
          children: et && (0, Qt.jsx)(BO.e, {
            itemName: et,
            amount: Vt > 1 ? Vt : 0,
            amountFontSize: mq[Ot],
            enchantmentTier: qt
          })
        })
      }));

    function jq(tt) {
      let {
        amount: et,
        exact: Vt = !1,
        className: Ot
      } = tt;
      return (0, Qt.jsxs)("span", {
        className: Dt()("SmpGold", Ot),
        children: [(0, Qt.jsx)("span", {
          className: "SmpCoin",
          children: (0, Qt.jsx)(BO.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Vt ? et.toLocaleString("en-US") : qq(et)]
      })
    }

    function Hq(tt) {
      let {
        count: et = 5,
        grid: Vt = !1
      } = tt;
      return (0, Qt.jsx)("div", {
        className: Vt ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: et
        }, ((tt, et) => (0, Qt.jsxs)("div", {
          className: Dt()(Vt ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Qt.jsx)("div", {
            className: Dt()("SmpSlot", Vt ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Qt.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Qt.jsx)("b", {}), (0, Qt.jsx)("small", {})]
          }), (0, Qt.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, et)))
      })
    }

    function Xq(tt) {
      let {
        title: et,
        children: Vt
      } = tt;
      return (0, Qt.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Qt.jsx)("b", {
          children: et
        }), Vt && (0, Qt.jsx)("small", {
          children: Vt
        })]
      })
    }

    function Qq(tt) {
      let {
        entry: et
      } = tt;
      return (0, Qt.jsx)(Xq, {
        title: (0, Qt.jsx)(pO.e, {
          text: et.item.customTitle
        }),
        children: (0, Qt.jsx)(pO.e, {
          text: et.item.description
        })
      })
    }

    function lq(tt) {
      return (0, Qt.jsx)(Dq.c, {
        ...tt,
        className: Dt()("SmpChoice", tt.className),
        reselectable: !0
      })
    }

    function Eq() {
      return (0, Qt.jsx)("span", {
        className: "SmpLoader",
        children: (0, Qt.jsx)(ut.b, {})
      })
    }

    function fq(tt) {
      let {
        value: et,
        onChange: Vt,
        min: qt = 1,
        max: Dt,
        step: mt = 1,
        label: dt
      } = tt;
      const jt = (0, Ot.useRef)(null),
        Ht = (0, Ot.useRef)(et);
      Ht.current = et;
      const [Xt, lt] = (0, Ot.useState)(null), Et = tt => Math.max(qt, Math.min(Dt, Math.floor(tt))), ft = tt => {
        const et = Ht.current,
          Ot = "function" === typeof mt ? mt(et, tt) : mt,
          qt = Et(et + Ot * tt);
        Ht.current = qt, Vt(qt)
      };
      (0, Ot.useEffect)((() => {
        if (null === Xt) return;
        let tt;
        const et = () => {
            lt(null)
          },
          Vt = setTimeout((() => {
            tt = setInterval((() => {
              ft(Xt);
              const tt = Ht.current;
              (Xt > 0 ? tt >= Dt : tt <= qt) && et()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", et), window.addEventListener("pointercancel", et), window.addEventListener("blur", et), () => {
          clearTimeout(Vt), clearInterval(tt), window.removeEventListener("pointerup", et), window.removeEventListener("pointercancel", et), window.removeEventListener("blur", et)
        }
      }), [Xt]), (0, Ot.useEffect)((() => {
        const tt = jt.current;
        tt && document.activeElement !== tt && tt.value !== String(et) && (tt.value = String(et))
      }), [et]), (0, Ot.useEffect)((() => {
        const tt = jt.current;
        if (!tt) return;
        const et = () => {
          tt.value = String(Ht.current)
        };
        return tt.addEventListener("blur", et), () => {
          tt.removeEventListener("blur", et)
        }
      }), []);
      const wt = tt => (0, Qt.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${tt>0?"More":"Less"} ${dt}`,
        disabled: tt > 0 ? et >= Dt : et <= qt,
        onPointerDown: et => {
          0 === et.button && (ft(tt), lt(tt))
        },
        onKeyDown: et => {
          "Enter" !== et.key && " " !== et.key || ft(tt)
        },
        onContextMenu: tt => {
          tt.preventDefault()
        },
        children: tt > 0 ? "+" : "\u2212"
      });
      return (0, Qt.jsxs)("div", {
        className: "SmpStepper",
        children: [wt(-1), (0, Qt.jsx)(Ct.d, {
          className: "SmpStepperInput",
          domRef: jt,
          defaultValue: String(et),
          ariaLabel: dt,
          type: "text",
          blurOnEnter: !0,
          onValueChange: tt => {
            const et = tt.replace(/[^\d]/g, "");
            jt.current && et !== tt && (jt.current.value = et), "" !== et && Vt(Et(Number(et)))
          }
        }), wt(1)]
      })
    }

    function wq(tt) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, tt))) - 1))
    }
    var yq = Vt(34399),
      Nq = Vt(1325);
    const aq = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    Nq.D, zt.Nc.length;
    new Map;
    var Mq = Vt(3346);

    function bq(tt, et) {
      var Vt;
      return et && (null === (Vt = tt[et]) || void 0 === Vt ? void 0 : Vt.smp) || null
    }

    function Jq(tt, et) {
      const Vt = [];
      for (const qt of Vq(tt)) {
        var Ot;
        const Dt = tt[qt];
        (null === (Ot = Dt.smp) || void 0 === Ot ? void 0 : Ot.kind) === et && Vt.push({
          key: qt,
          item: Dt,
          meta: Dt.smp
        })
      }
      return Vt
    }

    function Cq(tt, et) {
      var Vt;
      return null !== (Vt = Jq(tt, et)[0]) && void 0 !== Vt ? Vt : null
    }
    const uq = "50% 0% 50% 0%",
      Kq = [{
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

    function hq(tt) {
      const et = tt - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Vt,
          suffix: Ot
        }
        of Kq)
        if (et >= Vt) return `${Math.floor(et/Vt)}${Ot}`;
      return "<1s"
    }

    function vq(tt) {
      const et = tt.map(AO.e),
        Vt = [];
      return et.forEach(((tt, Ot) => {
        const qt = function(tt) {
            const et = tt.match(/\d+/);
            return et ? Number(et[0]) : 0
          }(tt),
          Dt = Ot === et.length - 1;
        (Dt || 1 === qt || 10 === qt || 100 === qt) && Vt.push({
          label: tt,
          quantity: qt,
          isAll: Dt
        })
      })), Vt
    }
    let Wq = null;

    function Sq(tt, et) {
      const Vt = et.trim().toLowerCase();
      if (!Vt) return [];
      const Ot = tt => {
          if (tt === Vt) return 0;
          if (tt.startsWith(Vt)) return 1;
          const et = tt.indexOf(Vt);
          return -1 === et ? -1 : 2 + et
        },
        qt = [];
      for (const dt of tt) {
        const tt = [Ot(dt.lowerLabel), Ot(dt.lowerName)].filter((tt => -1 !== tt));
        tt.length && qt.push({
          item: dt,
          rank: Math.min(...tt)
        })
      }
      if (qt.length > 0) return qt.sort(((tt, et) => tt.rank - et.rank)).map((tt => tt.item));
      const Dt = [...Vt],
        mt = tt => {
          let et = 0;
          for (const Vt of Dt) {
            if (et = tt.indexOf(Vt, et), -1 === et) return !1;
            et++
          }
          return !0
        };
      return tt.filter((tt => mt(tt.lowerLabel) || mt(tt.lowerName)))
    }

    function cq(tt, et) {
      var Vt;
      return null !== (Vt = null === tt || void 0 === tt ? void 0 : tt[et]) && void 0 !== Vt ? Vt : et
    }

    function Rq(tt, et) {
      const Vt = tt.userInput;
      return void 0 !== et && "dropdown" === (null === Vt || void 0 === Vt ? void 0 : Vt.type) && Vt.dropdownOptions.map(AO.e).includes(et) ? et : function(tt) {
        const et = tt.userInput;
        if ("dropdown" !== (null === et || void 0 === et ? void 0 : et.type) || 0 === et.dropdownOptions.length) return null;
        const Vt = et.dropdownOptions.map(AO.e);
        return et.initialValue && Vt.includes(et.initialValue) ? et.initialValue : Vt[Vt.length - 1]
      }(tt)
    }

    function Iq(tt) {
      return void 0 === tt ? "" : JSON.stringify(tt)
    }
    const Pq = (0, Ot.createContext)(null);

    function Zq() {
      return (0, Ot.useContext)(Pq)
    }
    var Lq = Vt(2784);
    const Fq = (0, Ot.memo)((function(tt) {
        let {
          name: et,
          label: Vt,
          onPick: Ot
        } = tt;
        return (0, Qt.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Vt,
          onClick: () => {
            Ot(et)
          },
          children: [(0, Qt.jsx)(dq, {
            item: et,
            size: "big"
          }), (0, Qt.jsx)("span", {
            children: Vt
          })]
        })
      })),
      kq = (0, Ot.memo)((function(tt) {
        let {
          items: et,
          query: Vt,
          onPick: qt
        } = tt;
        const {
          t: Dt
        } = (0, mt.H)(), [dt, jt] = (0, Ot.useState)(new Set), Ht = (0, Ot.useMemo)((() => function(tt) {
          const et = new Map;
          for (const Vt of tt) {
            let tt = et.get(Vt.category);
            tt || (tt = [], et.set(Vt.category, tt)), tt.push(Vt)
          }
          return [...aq, "other"].filter((tt => et.has(tt))).map((tt => ({
            category: tt,
            items: et.get(tt)
          })))
        }(et)), [et]), Xt = (0, Ot.useMemo)((() => Sq(et, Vt).slice(0, 60)), [et, Vt]);
        return Vt.trim() ? 0 === Xt.length ? (0, Qt.jsx)(Xq, {
          title: Dt("smpShop:noItemsFound", {
            query: Vt.trim()
          }),
          children: Dt("smpShop:tryShorterName")
        }) : (0, Qt.jsx)(Lq.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: uq,
          observerUpdateDeps: [Vt],
          children: Xt.map((tt => (0, Qt.jsx)(Fq, {
            name: tt.name,
            label: tt.label,
            onPick: qt
          }, tt.name)))
        }) : (0, Qt.jsx)(Qt.Fragment, {
          children: Ht.map((tt => {
            let {
              category: et,
              items: Vt
            } = tt;
            const Ot = dt.has(et) || Vt.length <= 48,
              mt = Ot ? Vt : Vt.slice(0, 48);
            return (0, Qt.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Qt.jsxs)("h4", {
                children: [Dt("other" === et ? "smpShop:otherItems" : `creativeInventory:${et}`), !Ot && (0, Qt.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    jt(new Set([...dt, et]))
                  },
                  children: Dt("smpShop:showAll", {
                    count: Vt.length
                  })
                })]
              }), (0, Qt.jsx)(Lq.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: uq,
                observerUpdateDeps: [Ot],
                children: mt.map((tt => (0, Qt.jsx)(Fq, {
                  name: tt.name,
                  label: tt.label,
                  onPick: qt
                }, tt.name)))
              })]
            }, et)
          }))
        })
      }));

    function Gq(tt, et) {
      const {
        searched: Vt,
        shown: qt,
        searchFor: Dt,
        loading: mt
      } = function(tt, et) {
        var Vt;
        const qt = Zq(),
          [Dt, mt] = (0, Ot.useState)(void 0),
          dt = (0, Ot.useRef)(void 0),
          jt = (0, Ot.useRef)(0),
          Ht = (0, Ot.useRef)(void 0),
          Xt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.meta.item) && void 0 !== Vt ? Vt : null,
          Qt = !!tt && qt.isPending(tt.key);
        (0, Ot.useEffect)((() => {
          if (!tt || Qt || !et || void 0 === Dt || Dt === Xt) return;
          const Vt = Dt === dt.current && qt.gaveUpAt(tt.key) > jt.current && Ht.current !== Dt;
          (Dt !== dt.current || Vt) && qt.act(tt.key, null !== Dt && void 0 !== Dt ? Dt : "*", Vt) && (Vt && (Ht.current = Dt), dt.current = Dt, jt.current = Date.now())
        }), [tt, Qt, et, Dt, Xt, qt]);
        const lt = (0, Ot.useCallback)((tt => {
            dt.current = void 0, Ht.current = void 0, mt(tt)
          }), []),
          Et = void 0 !== Dt && Dt !== Xt && (Qt || dt.current !== Dt);
        return {
          searched: Xt,
          shown: Et ? Dt : Xt,
          searchFor: lt,
          loading: Et || Qt || null !== Xt && !et
        }
      }(tt, et), dt = (0, Ot.useMemo)((() => function() {
        var tt;
        let et = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const qt = `${(0,Mq.h)()}\x1f${et.join("\x1e")}\x1f${Vt.join("\x1e")}\x1f${JSON.stringify(Ot)}`;
        if ((null === (tt = Wq) || void 0 === tt ? void 0 : tt.key) === qt) return Wq.items;
        const Dt = new Set(Vt),
          mt = new Set,
          dt = [],
          jt = (tt, et) => {
            var Vt;
            if (!tt || mt.has(tt) || Dt.has(tt)) return;
            mt.add(tt);
            const qt = null !== (Vt = Ot[tt]) && void 0 !== Vt ? Vt : tt;
            dt.push({
              name: tt,
              label: qt,
              lowerLabel: qt.toLowerCase(),
              lowerName: tt.toLowerCase(),
              category: et
            })
          };
        for (const Xt of (0, yq.creativeItemIds)()) {
          var Ht;
          (0, yq.itemIsDisabled)(Xt, !0, !0, !1) || (0, yq.showOnlyInCreativeSearch)(Xt) || jt((0, Mq.e)(Xt), null !== (Ht = (0, yq.creativeCategoryOf)(Xt)) && void 0 !== Ht ? Ht : "other")
        }
        for (const Xt of et) jt(Xt, "other");
        return Wq = {
          key: qt,
          items: dt
        }, dt
      }(null === tt || void 0 === tt ? void 0 : tt.meta.extra, null === tt || void 0 === tt ? void 0 : tt.meta.excluded, null === tt || void 0 === tt ? void 0 : tt.meta.names)), [null === tt || void 0 === tt ? void 0 : tt.meta.extra, null === tt || void 0 === tt ? void 0 : tt.meta.excluded, null === tt || void 0 === tt ? void 0 : tt.meta.names]), [jt, Ht] = (0, Ot.useState)(""), [Xt, Qt] = (0, Ot.useState)(0), [lt, Et] = (0, Ot.useState)("recent"), ft = (0, Ot.useCallback)((tt => {
        Ht(""), Qt((tt => tt + 1)), Dt(tt)
      }), [Dt]), wt = "browse" === lt || "" !== jt.trim();
      return {
        searched: Vt,
        shown: qt,
        searchFor: Dt,
        loading: mt,
        catalogue: dt,
        names: null === tt || void 0 === tt ? void 0 : tt.meta.names,
        query: jt,
        setQuery: Ht,
        searchBoxKey: Xt,
        pickItem: ft,
        setView: Et,
        browsing: wt
      }
    }

    function zq(tt) {
      let {
        browser: et,
        children: Vt
      } = tt;
      const {
        t: Ot
      } = (0, mt.H)(), qt = Zq();
      return (0, Qt.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Qt.jsx)("div", {
          className: "SmpSearch",
          children: (0, Qt.jsx)(Ct.d, {
            className: "SmpSearchInput",
            placeholderText: Ot("smpShop:searchPlaceholder"),
            defaultValue: et.query,
            onValueChange: tt => {
              et.setQuery(tt), et.searched && tt.trim() && et.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const tt = Sq(et.catalogue, et.query)[0];
              tt ? et.pickItem(tt.name) : et.query.trim() && qt.notify(Ot("smpShop:noItemsFound", {
                query: et.query.trim()
              }))
            }
          }, et.searchBoxKey)
        }), Vt]
      })
    }

    function oq(tt) {
      let {
        browser: et,
        recentLabel: Vt,
        children: Ot
      } = tt;
      const {
        t: qt
      } = (0, mt.H)();
      return (0, Qt.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Qt.jsx)(lq, {
          options: [{
            value: "recent",
            label: Vt
          }, {
            value: "browse",
            label: qt("smpShop:browseItems")
          }],
          value: et.browsing ? "browse" : "recent",
          onChange: et.setView,
          ariaLabel: qt("smpShop:show")
        }), !et.browsing && Ot]
      })
    }

    function rq(tt) {
      let {
        item: et,
        names: Vt,
        summary: Ot,
        onBack: qt,
        children: Dt
      } = tt;
      const {
        t: dt
      } = (0, mt.H)();
      return (0, Qt.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Qt.jsx)(Ht.d, {
          className: "SmpBackButton",
          onClick: qt,
          children: dt("general:back")
        }), (0, Qt.jsx)(dq, {
          item: et,
          size: "big"
        }), (0, Qt.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Qt.jsx)("b", {
            children: cq(Vt, et)
          }), Ot && (0, Qt.jsx)("small", {
            children: Ot
          })]
        }), Dt]
      })
    }

    function Uq(tt) {
      let {
        browser: et,
        className: Vt,
        action: Ot,
        above: qt,
        list: mt,
        summary: dt,
        recentLabel: jt,
        listControls: Ht,
        onBack: Xt
      } = tt;
      return (0, Qt.jsxs)("div", {
        className: Dt()("SmpScreen", Vt),
        children: [(0, Qt.jsx)(zq, {
          browser: et,
          children: Ot
        }), et.shown && (0, Qt.jsx)(rq, {
          item: et.shown,
          names: et.names,
          summary: !et.loading && dt,
          onBack: () => {
            null === Xt || void 0 === Xt || Xt(), et.searchFor(null)
          },
          children: Ht
        }), qt, et.shown ? mt : (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsx)(oq, {
            browser: et,
            recentLabel: jt,
            children: Ht
          }), et.browsing ? (0, Qt.jsx)(kq, {
            items: et.catalogue,
            query: et.query,
            onPick: et.pickItem
          }) : mt]
        })]
      })
    }

    function Aq(tt, et) {
      const Vt = tt.map((tt => {
        let {
          meta: et
        } = tt;
        return et.pricePerItem
      }));
      return "min" === et ? Math.min(...Vt) : Math.max(...Vt)
    }
    var iq = Vt(6776);
    const Yq = (0, Ot.memo)((function(tt) {
      var et;
      const {
        t: Vt
      } = (0, mt.H)(), Ot = null === tt.seller, qt = tt.quantity * tt.pricePerItem;
      return (0, Qt.jsxs)("div", {
        className: tt.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Qt.jsx)(dq, {
          item: tt.item,
          amount: tt.quantity,
          size: tt.grid ? "big" : "normal",
          tier: tt.tier
        }), (0, Qt.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Qt.jsx)("b", {
            children: (0, Qt.jsx)(pO.e, {
              text: null !== (et = tt.title) && void 0 !== et ? et : `${tt.quantity}x ${tt.item}`
            })
          }), (0, Qt.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Qt.jsx)("span", {
              children: Ot ? Vt("smpShop:you") : (0, Qt.jsx)(pO.e, {
                text: [{
                  entityName: tt.seller
                }]
              })
            }), (0, Qt.jsx)("span", {
              children: Vt("smpShop:timeLeft", {
                time: hq(tt.expiresAt)
              })
            })]
          })]
        }), (0, Qt.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Qt.jsx)(jq, {
            amount: tt.pricePerItem
          }), (0, Qt.jsx)("small", {
            children: Vt("smpShop:each")
          })]
        }), (0, Qt.jsx)(Ht.f, {
          className: "SmpBuyButton",
          disabled: Ot || !tt.canAfford && !tt.busy,
          loading: tt.busy,
          onClick: () => {
            tt.onBuy(tt.itemKey)
          },
          children: Ot ? Vt("smpShop:yours") : (0, Qt.jsx)(jq, {
            amount: qt
          })
        })]
      })
    }));

    function Bq(tt) {
      let {
        view: et,
        onChange: Vt
      } = tt;
      const {
        t: Ot
      } = (0, mt.H)();
      return (0, Qt.jsx)(Dq.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Ot("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Qt.jsx)(dt.b, {
            name: "list"
          }),
          ariaLabel: Ot("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Qt.jsx)(dt.b, {
            name: "grid-2"
          }),
          ariaLabel: Ot("smpShop:gridView")
        }],
        value: et,
        onChange: Vt
      })
    }

    function pq(tt) {
      let {
        entries: et,
        view: Vt
      } = tt;
      const {
        t: Ot
      } = (0, mt.H)(), qt = Zq(), Dt = "grid" === Vt;
      return (0, Qt.jsxs)(Qt.Fragment, {
        children: [!Dt && (0, Qt.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Qt.jsx)("span", {}), (0, Qt.jsx)("span", {
            children: Ot("smpShop:columnItem")
          }), (0, Qt.jsx)("span", {
            children: Ot("smpShop:columnPriceEach")
          }), (0, Qt.jsx)("span", {
            children: Ot("smpShop:columnTotal")
          })]
        }), (0, Qt.jsx)(Lq.d, {
          lazyLoadedClassName: Dt ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: uq,
          observerUpdateDeps: [et.length],
          children: et.map((tt => {
            var et, Vt;
            let {
              key: Ot,
              item: mt,
              meta: dt
            } = tt;
            const jt = dt.quantity * dt.pricePerItem;
            return (0, Qt.jsx)(Yq, {
              itemKey: Ot,
              item: dt.item,
              title: mt.customTitle,
              quantity: dt.quantity,
              pricePerItem: dt.pricePerItem,
              seller: dt.seller,
              expiresAt: dt.expiresAt,
              tier: null !== (et = null === (Vt = mt.enchant) || void 0 === Vt ? void 0 : Vt.tier) && void 0 !== et ? et : null,
              busy: qt.isPending(Ot) || null !== dt.seller && !1 === mt.canBuy,
              canAfford: qt.canAfford(mt, jt),
              grid: Dt,
              onBuy: qt.act
            }, Ot)
          }))
        }, Vt)]
      })
    }
    const xq = [1, 10, 100],
      Tq = [1, 10, 100, 999];

    function gq(tt) {
      var et, Vt, qt, jt, Xt, lt, Et, ft, wt, yt;
      const {
        t: Nt
      } = (0, mt.H)(), Mt = Zq(), {
        creator: bt,
        mode: Jt
      } = tt, [ut, Kt] = (0, Ot.useState)(null !== (et = null === bt || void 0 === bt ? void 0 : bt.meta.item) && void 0 !== et ? et : null), [ht, vt] = (0, Ot.useState)(1), [Wt, St] = (0, Ot.useState)(0), [ct, Rt] = (0, Ot.useState)(""), [It, Pt] = (0, Ot.useState)(0), Zt = (0, Ot.useRef)(ut), Lt = (0, Ot.useRef)(!1), [Ft, kt] = (0, Ot.useState)(!1), Gt = null !== (Vt = null === bt || void 0 === bt ? void 0 : bt.meta.item) && void 0 !== Vt ? Vt : null, zt = null !== (qt = null === bt || void 0 === bt ? void 0 : bt.meta.owned) && void 0 !== qt ? qt : 0;
      (0, Ot.useEffect)((() => {
        tt.searching || null === Gt || Gt === Zt.current || (Zt.current = Gt, Lt.current = !1, Kt(Gt), St(0), vt("list" === Jt ? Math.max(1, zt) : 1))
      }), [Gt, tt.searching]);
      const ot = !!bt && !!ut && bt.meta.item === ut,
        rt = ot ? bt.meta.owned : null !== (jt = null === (Xt = tt.inventory) || void 0 === Xt || null === (lt = Xt.find((tt => tt.item === ut))) || void 0 === lt ? void 0 : lt.quantity) && void 0 !== jt ? jt : 0,
        Ut = "list" === Jt ? Math.max(1, rt) : 45954,
        At = null !== (Et = tt.prices[0]) && void 0 !== Et ? Et : null,
        it = tt.prices.length ? Math.round(tt.prices.reduce(((tt, et) => tt + et), 0) / tt.prices.length) : null,
        Yt = null === (ft = tt.inventory) || void 0 === ft || null === (wt = ft.find((tt => tt.item === ut))) || void 0 === wt ? void 0 : wt.sellPrice;
      (0, Ot.useEffect)((() => {
        var tt;
        ot && (vt((tt => "list" === Jt ? Math.min(Math.max(1, tt), Math.max(1, rt)) : tt)), Lt.current || St(null !== (tt = null !== At && void 0 !== At ? At : it) && void 0 !== tt ? tt : Math.max(1, null !== Yt && void 0 !== Yt ? Yt : 1)))
      }), [ot, rt, ut, At, it]);
      const Bt = tt => {
          Lt.current = !0, St(tt)
        },
        pt = et => {
          var Vt, Ot, qt;
          Zt.current = et, Lt.current = !1, kt(!1), Rt(""), Pt((tt => tt + 1)), Kt(et), St(0), vt("list" === Jt && null !== (Vt = null === (Ot = tt.inventory) || void 0 === Ot || null === (qt = Ot.find((tt => tt.item === et))) || void 0 === qt ? void 0 : qt.quantity) && void 0 !== Vt ? Vt : 1), (null === bt || void 0 === bt ? void 0 : bt.meta.item) !== et && tt.onPickItem(et)
        },
        xt = ht * Wt,
        Tt = "list" === Jt && null !== bt && void 0 !== bt && bt.meta.fee ? function(tt, et) {
          const Vt = Math.max(0, et - tt.taxFreeAllowance);
          return Math.ceil(Math.round(Vt * tt.rate * 1e6) / 1e6)
        }(bt.meta.fee, xt) : 0,
        gt = !!bt && Mt.isPending(bt.key),
        st = ot && !tt.searching && ht >= 1 && Wt >= 1 && ("order" === Jt || rt >= ht) && !gt,
        nt = !!ut && !ot && !tt.searching && ht >= 1 && Wt >= 1,
        te = () => {
          st ? Mt.act(bt.key, `${ht}|${Wt}`) : nt && (tt.onPickItem(ut), kt(!0))
        };
      (0, Ot.useEffect)((() => {
        Ft && ot && !tt.searching && (kt(!1), te())
      }), [Ft, ot, tt.searching]);
      const ee = !!ut && !ot && (tt.searching || Ft),
        Ve = ut ? cq(tt.names, ut) : "",
        Oe = (0, Ot.useMemo)((() => Sq(tt.catalogue, ct).slice(0, 8)), [tt.catalogue, ct]),
        qe = ("list" === Jt ? xq.filter((tt => tt < rt)) : Tq).map((tt => ({
          value: tt,
          label: String(tt)
        })));
      "list" === Jt && rt > 0 && qe.push({
        value: rt,
        label: Nt("smpShop:all", {
          count: rt
        })
      });
      const De = [];
      return null !== At && (At > 1 && De.push({
        value: At - 1,
        label: Nt("smpShop:undercut", {
          price: qq(At - 1)
        })
      }), De.push({
        value: At,
        label: Nt("smpShop:lowest", {
          price: qq(At)
        })
      })), null !== it && it !== At && De.push({
        value: it,
        label: Nt("smpShop:average", {
          price: qq(it)
        })
      }), (0, Qt.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Qt.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Qt.jsx)("b", {
            children: Nt("list" === Jt ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Qt.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Nt("smpShop:close"),
            onClick: tt.onClose,
            children: (0, Qt.jsx)(dt.b, {
              name: "xmark"
            })
          })]
        }), "list" === Jt && (0, Qt.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (yt = tt.inventory) && void 0 !== yt && yt.length ? tt.inventory.map((tt => {
            let {
              item: et,
              quantity: Vt
            } = tt;
            return (0, Qt.jsx)("button", {
              type: "button",
              title: et,
              className: Dt()("SmpPickerSlot", {
                SmpPickerSlotOn: et === ut
              }),
              onClick: () => {
                pt(et)
              },
              children: (0, Qt.jsx)(dq, {
                item: et,
                amount: Vt
              })
            }, et)
          })) : (0, Qt.jsx)("span", {
            className: "SmpMuted",
            children: Nt("smpShop:nothingToList")
          })
        }), ("list" === Jt || !ut) && (0, Qt.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Qt.jsx)(Ct.d, {
            className: "SmpSearchInput",
            placeholderText: Nt("list" === Jt ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: ct,
            onValueChange: Rt,
            blurOnEnter: !0,
            onEnter: () => {
              Oe[0] && pt(Oe[0].name)
            }
          }, It), Oe.length > 0 && (0, Qt.jsx)("div", {
            className: "SmpPicker",
            children: Oe.map((tt => {
              let {
                name: et
              } = tt;
              return (0, Qt.jsx)("button", {
                type: "button",
                title: et,
                className: Dt()("SmpPickerSlot", {
                  SmpPickerSlotOn: et === ut
                }),
                onClick: () => {
                  pt(et)
                },
                children: (0, Qt.jsx)(dq, {
                  item: et
                })
              }, et)
            }))
          })]
        }), ut && (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsxs)("div", {
            className: "SmpPickedName",
            children: [Ve, ee && (0, Qt.jsx)(Eq, {})]
          }), (0, Qt.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Qt.jsxs)("div", {
              className: "SmpField",
              children: [(0, Qt.jsxs)("span", {
                children: [Nt("smpShop:quantity"), "list" === Jt && ot && (0, Qt.jsx)("small", {
                  children: Nt("smpShop:youHave", {
                    count: rt
                  })
                })]
              }), (0, Qt.jsx)(fq, {
                value: ht,
                onChange: vt,
                max: Ut,
                label: Nt("smpShop:quantity")
              }), (0, Qt.jsx)(lq, {
                options: qe,
                value: ht,
                onChange: vt,
                ariaLabel: Nt("smpShop:quantity")
              })]
            }), (0, Qt.jsxs)("div", {
              className: "SmpField",
              children: [(0, Qt.jsx)("span", {
                children: Nt("smpShop:pricePerItem")
              }), (0, Qt.jsx)(fq, {
                value: Math.max(1, Wt),
                onChange: Bt,
                max: 9999999,
                step: wq,
                label: Nt("smpShop:pricePerItem")
              }), (0, Qt.jsx)(lq, {
                options: De,
                value: Wt,
                onChange: Bt,
                ariaLabel: Nt("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Jt && (0, Qt.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Qt.jsxs)("span", {
              children: [Nt("smpShop:youGet"), " ", (0, Qt.jsx)(jq, {
                amount: Math.max(0, xt - Tt),
                exact: !0
              })]
            }), (0, Qt.jsx)("small", {
              children: Tt > 0 ? Nt("smpShop:listingFee", {
                fee: Tt.toLocaleString("en-US")
              }) : Nt("smpShop:listingRules")
            })]
          }), (0, Qt.jsx)(Ht.s, {
            className: "SmpSubmit",
            disabled: !st && !nt && !gt,
            loading: gt || ee || ot && tt.searching,
            onClick: te,
            children: "list" === Jt ? Nt("smpShop:listButton", {
              count: ht,
              item: Ve
            }) : (0, Qt.jsxs)(Qt.Fragment, {
              children: [Nt("smpShop:orderButton", {
                count: ht,
                item: Ve
              }), " ", Wt >= 1 && (0, Qt.jsx)(jq, {
                amount: xt
              })]
            })
          })]
        })]
      })
    }

    function sq() {
      var tt;
      const {
        t: et
      } = (0, mt.H)(), Vt = Zq(), qt = null === (tt = Vt.shopInfo[Vt.categoryKey]) || void 0 === tt ? void 0 : tt.items, Dt = Cq(qt, "search"), dt = Cq(qt, "creator"), jt = Jq(qt, "enchantedCreator"), Xt = Jq(qt, "listing"), lt = Cq(qt, "empty"), Et = Gq(Dt, Xt.length > 0 || null !== lt), {
        searched: ft,
        shown: wt,
        loading: yt
      } = Et, [Nt, Mt] = (0, Ot.useState)(!1), [bt, Jt] = function() {
        const [tt, et] = (0, iq.c)("smpMarketView", "list");
        return ["grid" === tt ? "grid" : "list", et]
      }(), Ct = "grid" === bt, ut = (0, Ot.useMemo)((() => Xt.filter((tt => {
        let {
          meta: et
        } = tt;
        return null !== et.seller && et.item === ft
      })).map((tt => {
        let {
          meta: et
        } = tt;
        return et.pricePerItem
      })).sort(((tt, et) => tt - et))), [Xt, ft]), Kt = (0, Ot.useMemo)((() => {
        const tt = new Set(Et.catalogue.map((tt => {
          let {
            name: et
          } = tt;
          return et
        })));
        return function(tt) {
          for (const et in tt)
            if ("sell" === tt[et].smp) return Jq(tt[et].items, "sell").filter((tt => {
              let {
                item: et
              } = tt;
              return !et.enchant
            })).map((tt => {
              let {
                meta: et
              } = tt;
              return {
                item: et.item,
                quantity: et.quantity,
                sellPrice: et.pricePerItem
              }
            }));
          return []
        }(Vt.shopInfo).filter((et => {
          let {
            item: Vt
          } = et;
          return tt.has(Vt)
        }))
      }), [Vt.shopInfo, Et.catalogue]);
      return (0, Qt.jsx)(Uq, {
        browser: Et,
        className: "SmpMarketTab",
        recentLabel: et("smpShop:recentlyListed"),
        action: (0, Qt.jsx)(Ht.s, {
          className: "SmpSellButton",
          onClick: () => {
            Mt((tt => !tt))
          },
          children: et("smpShop:sell")
        }),
        above: Nt && (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsx)(gq, {
            mode: "list",
            creator: dt,
            inventory: Kt,
            catalogue: Et.catalogue,
            names: Et.names,
            searching: yt,
            prices: ut,
            onPickItem: Et.searchFor,
            onClose: () => {
              Mt(!1)
            }
          }), jt.length > 0 && (0, Qt.jsx)(nq, {
            entries: jt
          })]
        }),
        listControls: (0, Qt.jsx)(Bq, {
          view: bt,
          onChange: Jt
        }),
        summary: wt && (Xt.length > 0 ? et(1 === Xt.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Xt.length,
          price: qq(Aq(Xt, "min"))
        }) : et("smpShop:noOneSelling", {
          item: cq(Et.names, wt)
        })),
        list: yt ? (0, Qt.jsx)(Hq, {
          grid: Ct
        }) : Xt.length > 0 ? (0, Qt.jsx)(pq, {
          entries: Xt,
          view: bt
        }) : lt ? (0, Qt.jsx)(Qq, {
          entry: lt
        }) : (0, Qt.jsx)(Hq, {
          count: 3,
          grid: Ct
        })
      })
    }

    function nq(tt) {
      let {
        entries: et
      } = tt;
      const {
        t: Vt
      } = (0, mt.H)(), qt = Zq(), [Dt, dt] = (0, Ot.useState)({});
      return (0, Qt.jsx)("div", {
        className: "SmpList",
        children: et.map((tt => {
          var et, Ot, mt;
          let {
            key: jt,
            item: Xt,
            meta: lt
          } = tt;
          const Et = null !== (et = Dt[jt]) && void 0 !== et ? et : 1;
          return (0, Qt.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Qt.jsx)(dq, {
              item: lt.item,
              amount: lt.quantity,
              tier: null !== (Ot = null === (mt = Xt.enchant) || void 0 === mt ? void 0 : mt.tier) && void 0 !== Ot ? Ot : null
            }), (0, Qt.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Qt.jsx)("b", {
                children: (0, Qt.jsx)(pO.e, {
                  text: Xt.customTitle
                })
              }), (0, Qt.jsx)("small", {
                children: Vt("smpShop:enchantedListing")
              })]
            }), (0, Qt.jsx)(fq, {
              value: Et,
              onChange: tt => {
                dt({
                  ...Dt,
                  [jt]: tt
                })
              },
              max: 9999999,
              step: wq,
              label: Vt("smpShop:pricePerItem")
            }), (0, Qt.jsxs)(Ht.s, {
              loading: qt.isPending(jt),
              onClick: () => {
                qt.act(jt, String(Et))
              },
              children: [Vt("smpShop:list"), " ", (0, Qt.jsx)(jq, {
                amount: Et
              })]
            })]
          }, jt)
        }))
      })
    }
    const tD = (0, Ot.memo)((function(tt) {
      let {
        itemKey: et,
        item: Vt,
        quantity: Ot,
        pricePerItem: qt,
        tier: mt,
        selected: dt,
        onSelect: jt
      } = tt;
      return (0, Qt.jsxs)("button", {
        type: "button",
        className: Dt()("SmpInventorySlot", {
          SmpInventorySlotOn: dt
        }),
        title: Vt,
        onClick: () => {
          jt(et)
        },
        children: [(0, Qt.jsx)(dq, {
          item: Vt,
          amount: Ot,
          tier: mt
        }), (0, Qt.jsx)(jq, {
          amount: qt
        })]
      })
    }));

    function eD() {
      var tt;
      const {
        t: et
      } = (0, mt.H)(), Vt = Zq(), qt = null === (tt = Vt.shopInfo[Vt.categoryKey]) || void 0 === tt ? void 0 : tt.items, dt = Jq(qt, "sell"), jt = Cq(qt, "empty"), [Ht, Xt] = (0, Ot.useState)(null), [lt, Et] = (0, Ot.useState)({}), ft = dt.find((tt => {
        let {
          key: et
        } = tt;
        return et === Ht
      }));
      return 0 === dt.length ? (0, Qt.jsx)("div", {
        className: "SmpScreen",
        children: (0, Qt.jsx)(Xq, {
          title: jt ? (0, Qt.jsx)(pO.e, {
            text: jt.item.customTitle
          }) : et("smpShop:nothingToSell"),
          children: jt && (0, Qt.jsx)(pO.e, {
            text: jt.item.description
          })
        })
      }) : (0, Qt.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Qt.jsx)("div", {
          className: "SmpInventoryGrid",
          children: dt.map((tt => {
            var et, Vt;
            let {
              key: Ot,
              item: qt,
              meta: Dt
            } = tt;
            return (0, Qt.jsx)(tD, {
              itemKey: Ot,
              item: Dt.item,
              quantity: Dt.quantity,
              pricePerItem: Dt.pricePerItem,
              tier: null !== (et = null === (Vt = qt.enchant) || void 0 === Vt ? void 0 : Vt.tier) && void 0 !== et ? et : null,
              selected: Ot === Ht,
              onSelect: Xt
            }, Ot)
          }))
        }), (0, Qt.jsx)("div", {
          className: Dt()("SmpSellBar", {
            SmpSellBarIdle: !ft
          }),
          children: ft ? (0, Qt.jsx)(VD, {
            entry: ft,
            choice: Rq(ft.item, lt[ft.key]),
            onChoose: tt => {
              Et({
                ...lt,
                [ft.key]: tt
              })
            }
          }) : (0, Qt.jsx)("span", {
            className: "SmpMuted",
            children: et("smpShop:tapToSell")
          })
        })]
      })
    }

    function VD(tt) {
      var et, Vt, Ot, qt;
      let {
        entry: Dt,
        choice: dt,
        onChoose: jt
      } = tt;
      const {
        t: Xt
      } = (0, mt.H)(), lt = Zq(), {
        key: Et,
        item: ft,
        meta: wt
      } = Dt, yt = vq("dropdown" === (null === (et = ft.userInput) || void 0 === et ? void 0 : et.type) ? ft.userInput.dropdownOptions : []), Nt = null === dt ? 0 : -(0, AO.d)(ft, dt);
      return (0, Qt.jsxs)(Qt.Fragment, {
        children: [(0, Qt.jsx)(dq, {
          item: wt.item,
          amount: wt.quantity,
          tier: null !== (Vt = null === (Ot = ft.enchant) || void 0 === Ot ? void 0 : Ot.tier) && void 0 !== Vt ? Vt : null
        }), (0, Qt.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Qt.jsx)("b", {
            children: (0, Qt.jsx)(pO.e, {
              text: null !== (qt = ft.customTitle) && void 0 !== qt ? qt : wt.item
            })
          }), (0, Qt.jsx)("small", {
            children: Xt("smpShop:sellEach", {
              count: wt.quantity
            })
          })]
        }), (0, Qt.jsx)(lq, {
          options: yt.map((tt => {
            let {
              label: et,
              quantity: Vt,
              isAll: Ot
            } = tt;
            return {
              value: et,
              label: Ot ? Xt("smpShop:all", {
                count: Vt
              }) : String(Vt)
            }
          })),
          value: dt,
          onChange: jt,
          ariaLabel: Xt("smpShop:quantity")
        }), (0, Qt.jsxs)(Ht.s, {
          loading: lt.isPending(Et),
          disabled: null === dt,
          onClick: () => {
            lt.act(Et, dt)
          },
          children: [Xt("smpShop:sellButton"), " ", (0, Qt.jsx)(jq, {
            amount: Nt
          })]
        })]
      })
    }

    function OD() {
      var tt;
      const {
        t: et
      } = (0, mt.H)(), Vt = Zq(), Ot = null === (tt = Vt.shopInfo[Vt.categoryKey]) || void 0 === tt ? void 0 : tt.items, qt = Jq(Ot, "collect"), Dt = Jq(Ot, "myListing"), dt = (tt, et) => Vt.isPending(tt) || !1 === et.canBuy;
      return (0, Qt.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Qt.jsx)("h3", {
          className: "SmpSectionTitle",
          children: et("smpShop:readyToCollect")
        }), qt.length > 0 ? (0, Qt.jsx)("div", {
          className: "SmpList",
          children: qt.map((tt => {
            var Ot, qt;
            let {
              key: Dt,
              item: mt,
              meta: jt
            } = tt;
            return (0, Qt.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Qt.jsx)(dq, {
                item: "sold" === jt.type ? "Gold Coin" : jt.item,
                amount: "sold" === jt.type ? 0 : jt.quantity,
                tier: null !== (Ot = null === (qt = mt.enchant) || void 0 === qt ? void 0 : qt.tier) && void 0 !== Ot ? Ot : null
              }), (0, Qt.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Qt.jsx)("b", {
                  children: (0, Qt.jsx)(pO.e, {
                    text: mt.customTitle
                  })
                }), (0, Qt.jsx)("small", {
                  children: (0, Qt.jsx)(pO.e, {
                    text: mt.description
                  })
                })]
              }), (0, Qt.jsx)(Ht.m, {
                loading: dt(Dt, mt),
                onClick: () => {
                  Vt.act(Dt)
                },
                children: et("smpShop:collect")
              })]
            }, Dt)
          }))
        }) : (0, Qt.jsx)(Xq, {
          title: et("smpShop:nothingToCollect"),
          children: et("smpShop:nothingToCollectHint")
        }), (0, Qt.jsx)("h3", {
          className: "SmpSectionTitle",
          children: et("smpShop:activeListings", {
            count: Dt.length
          })
        }), Dt.length > 0 ? (0, Qt.jsx)("div", {
          className: "SmpList",
          children: Dt.map((tt => {
            var Ot, qt;
            let {
              key: Dt,
              item: mt,
              meta: jt
            } = tt;
            return (0, Qt.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Qt.jsx)(dq, {
                item: jt.item,
                amount: jt.quantity,
                tier: null !== (Ot = null === (qt = mt.enchant) || void 0 === qt ? void 0 : qt.tier) && void 0 !== Ot ? Ot : null
              }), (0, Qt.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Qt.jsx)("b", {
                  children: (0, Qt.jsx)(pO.e, {
                    text: mt.customTitle
                  })
                }), (0, Qt.jsx)("small", {
                  children: et("smpShop:timeLeft", {
                    time: hq(jt.expiresAt)
                  })
                })]
              }), (0, Qt.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Qt.jsx)(jq, {
                  amount: jt.pricePerItem
                }), (0, Qt.jsx)("small", {
                  children: et("smpShop:each")
                })]
              }), (0, Qt.jsx)(Ht.G, {
                loading: dt(Dt, mt),
                onClick: () => {
                  Vt.act(Dt)
                },
                children: et("smpShop:cancel")
              })]
            }, Dt)
          }))
        }) : (0, Qt.jsx)(Xq, {
          title: et("smpShop:noActiveListings"),
          children: et("smpShop:noActiveListingsHint")
        })]
      })
    }

    function qD(tt) {
      let {
        done: et,
        of: Vt
      } = tt;
      return (0, Qt.jsx)("span", {
        className: "SmpProgress",
        children: (0, Qt.jsx)("i", {
          style: {
            width: `${Math.min(100,et/Math.max(1,Vt)*100)}%`
          }
        })
      })
    }

    function DD(tt) {
      var et, Vt, Ot;
      let {
        entry: qt,
        choice: Dt,
        onChoose: dt
      } = tt;
      const {
        t: jt
      } = (0, mt.H)(), Xt = Zq(), {
        key: lt,
        item: Et,
        meta: ft
      } = qt, wt = "dropdown" === (null === (et = Et.userInput) || void 0 === et ? void 0 : et.type) ? Et.userInput.dropdownOptions : [], yt = !0 === ft.processing, Nt = null !== ft.creator && (ft.owned > 0 || yt), Mt = Nt && ft.owned > 0 ? vq(wt) : [], bt = null === Dt ? 0 : null !== (Vt = null === (Ot = Mt.find((tt => tt.label === Dt))) || void 0 === Ot ? void 0 : Ot.quantity) && void 0 !== Vt ? Vt : 0;
      return (0, Qt.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Qt.jsx)(dq, {
          item: ft.item
        }), (0, Qt.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Qt.jsx)("b", {
            children: (0, Qt.jsx)(pO.e, {
              text: Et.customTitle
            })
          }), (0, Qt.jsxs)("small", {
            children: [(0, Qt.jsx)(jq, {
              amount: ft.pricePerItem
            }), " ", jt("smpShop:each"), " \xb7", " ", null === ft.creator ? jt("smpShop:you") : (0, Qt.jsx)(pO.e, {
              text: [{
                entityName: ft.creator
              }]
            })]
          }), (0, Qt.jsx)(qD, {
            done: ft.delivered,
            of: ft.wanted
          })]
        }), Nt ? (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsx)(lq, {
            options: Mt.map((tt => {
              let {
                label: et,
                quantity: Vt,
                isAll: Ot
              } = tt;
              return {
                value: et,
                label: Ot ? jt("smpShop:max", {
                  count: Vt
                }) : String(Vt)
              }
            })),
            value: Dt,
            onChange: dt,
            ariaLabel: jt("smpShop:quantity")
          }), (0, Qt.jsxs)(Ht.s, {
            loading: Xt.isPending(lt) || yt,
            disabled: null === Dt,
            onClick: () => {
              Xt.act(lt, Dt)
            },
            children: [jt("smpShop:deliver"), " ", (0, Qt.jsx)(jq, {
              amount: bt * ft.pricePerItem
            })]
          })]
        }) : (0, Qt.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === ft.creator ? jt("smpShop:yourOrder") : jt("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function mD() {
      var tt;
      const {
        t: et
      } = (0, mt.H)(), Vt = Zq(), qt = null === (tt = Vt.shopInfo[Vt.categoryKey]) || void 0 === tt ? void 0 : tt.items, Dt = Cq(qt, "search"), dt = Cq(qt, "creator"), jt = Jq(qt, "order"), Xt = Cq(qt, "empty"), lt = Gq(Dt, jt.length > 0 || null !== Xt), [Et, ft] = (0, Ot.useState)(!1), [wt, yt] = (0, Ot.useState)({});
      return (0, Qt.jsx)(Uq, {
        browser: lt,
        recentLabel: et("smpShop:recentOrders"),
        action: (0, Qt.jsx)(Ht.s, {
          onClick: () => {
            ft((tt => !tt))
          },
          children: et("smpShop:createOrder")
        }),
        above: Et && (0, Qt.jsx)(gq, {
          mode: "order",
          creator: dt,
          catalogue: lt.catalogue,
          names: lt.names,
          searching: lt.loading,
          prices: [],
          onPickItem: lt.searchFor,
          onClose: () => {
            ft(!1)
          }
        }),
        onBack: () => {
          ft(!1)
        },
        summary: jt.length > 0 && et(1 === jt.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: jt.length,
          price: qq(Aq(jt, "max"))
        }),
        list: lt.loading ? (0, Qt.jsx)(Hq, {}) : jt.length > 0 ? (0, Qt.jsx)(Lq.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: uq,
          observerUpdateDeps: [jt.length],
          children: jt.map((tt => (0, Qt.jsx)(DD, {
            entry: tt,
            choice: Rq(tt.item, wt[tt.key]),
            onChoose: et => {
              yt({
                ...wt,
                [tt.key]: et
              })
            }
          }, tt.key)))
        }) : Xt ? (0, Qt.jsx)(Qq, {
          entry: Xt
        }) : (0, Qt.jsx)(Hq, {
          count: 3
        })
      })
    }

    function dD() {
      var tt;
      const {
        t: et
      } = (0, mt.H)(), Vt = Zq(), Ot = Jq(null === (tt = Vt.shopInfo[Vt.categoryKey]) || void 0 === tt ? void 0 : tt.items, "myOrder");
      return 0 === Ot.length ? (0, Qt.jsx)("div", {
        className: "SmpScreen",
        children: (0, Qt.jsx)(Xq, {
          title: et("smpShop:noOrders"),
          children: et("smpShop:noOrdersHint")
        })
      }) : (0, Qt.jsx)("div", {
        className: "SmpScreen",
        children: (0, Qt.jsx)("div", {
          className: "SmpList",
          children: Ot.map((tt => {
            let {
              key: Ot,
              item: qt,
              meta: Dt
            } = tt;
            const mt = Vt.isPending(Ot) || !1 === qt.canBuy;
            return (0, Qt.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Qt.jsx)(dq, {
                item: Dt.item,
                amount: Dt.collectable
              }), (0, Qt.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Qt.jsx)("b", {
                  children: (0, Qt.jsx)(pO.e, {
                    text: qt.customTitle
                  })
                }), (0, Qt.jsxs)("small", {
                  children: [(0, Qt.jsx)(jq, {
                    amount: Dt.pricePerItem
                  }), " ", et("smpShop:each"), Dt.collectable > 0 && ` \xb7 ${et("smpShop:readyCount",{count:Dt.collectable})}`]
                }), (0, Qt.jsx)(qD, {
                  done: Dt.delivered,
                  of: Dt.wanted
                })]
              }), Dt.collectable > 0 ? (0, Qt.jsx)(Ht.m, {
                loading: mt,
                onClick: () => {
                  Vt.act(Ot)
                },
                children: et("smpShop:collectCount", {
                  count: Dt.collectable
                })
              }) : (0, Qt.jsx)(Ht.G, {
                loading: mt,
                onClick: () => {
                  Vt.act(Ot)
                },
                children: et("smpShop:cancel")
              })]
            }, Ot)
          }))
        })
      })
    }
    const jD = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      HD = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function XD(tt, et) {
      let Vt = !1;
      const Ot = {};
      for (const qt in tt) et(qt, tt[qt]) ? Ot[qt] = tt[qt] : Vt = !0;
      return Vt ? Ot : tt
    }

    function QD(tt) {
      var et, Vt, qt, jt;
      const {
        show: Ht,
        shopInfo: Xt,
        selectedCategoryKey: lt
      } = tt, {
        t: Et
      } = (0, mt.H)(), ft = null !== lt && void 0 !== lt ? lt : "", wt = bq(Xt, ft), yt = null === (et = Xt[ft]) || void 0 === et ? void 0 : et.items, Nt = null !== wt, [Mt, bt] = (0, Ot.useState)({}), [Jt, Ct] = (0, Ot.useState)([]), [ut, Kt] = (0, Ot.useState)(!1), [ht, vt] = (0, Ot.useState)(null), [, Wt] = (0, Ot.useState)(0), St = (0, Ot.useRef)(0), ct = (0, Ot.useRef)({}), Rt = (0, Ot.useRef)({
        items: yt,
        pending: Mt,
        shopInfo: Xt,
        active: Nt,
        canAfford: tt.canAfford,
        buy: tt.buy
      });
      Rt.current = {
        items: yt,
        pending: Mt,
        shopInfo: Xt,
        active: Nt,
        canAfford: tt.canAfford,
        buy: tt.buy
      };
      const It = (0, Ot.useCallback)((tt => {
        St.current++;
        const et = St.current;
        Ct((Vt => [{
          id: et,
          text: tt
        }, ...Vt].slice(0, 8))), vt(et)
      }), []);
      (0, Ot.useEffect)((() => {
        if (null === ht) return;
        const tt = setTimeout((() => {
          vt(null)
        }), 3e3);
        return () => {
          clearTimeout(tt)
        }
      }), [ht]), (0, Ot.useEffect)((() => {
        const et = tt.message;
        if (!et) return;
        const {
          shopInfo: Vt,
          active: Ot,
          items: qt
        } = Rt.current, Dt = null !== et.categoryKey ? null !== bq(Vt, et.categoryKey) : Ot;
        (Dt || Ot) && It(et.text), Dt && bt((tt => XD(tt, (tt => {
          var et, Vt;
          return !jD.has(null === qt || void 0 === qt || null === (et = qt[tt]) || void 0 === et || null === (Vt = et.smp) || void 0 === Vt ? void 0 : Vt.kind)
        }))))
      }), [tt.message, It]), (0, Ot.useEffect)((() => {
        bt((tt => XD(tt, ((tt, et) => Iq(null === yt || void 0 === yt ? void 0 : yt[tt]) === et.snapshot))))
      }), [Xt, yt]);
      const Pt = Object.keys(Mt).length > 0;
      (0, Ot.useEffect)((() => {
        if (!Pt) return;
        const tt = setInterval((() => {
          Wt((tt => tt + 1));
          const tt = Date.now(),
            {
              pending: et,
              items: Vt
            } = Rt.current,
            Ot = Object.keys(et).filter((Vt => tt - et[Vt].at >= 12e3));
          if (0 === Ot.length) return;
          const qt = Ot.some((tt => {
            var Ot, qt;
            return "search" !== (null === Vt || void 0 === Vt || null === (Ot = Vt[tt]) || void 0 === Ot || null === (qt = Ot.smp) || void 0 === qt ? void 0 : qt.kind) || et[tt].resend
          }));
          for (const Dt of Ot) ct.current[Dt] = tt;
          bt((tt => XD(tt, (tt => !Ot.includes(tt))))), qt && It(Et("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(tt)
        }
      }), [Pt]), (0, Ot.useEffect)((() => {
        bt({})
      }), [ft]), (0, Ot.useEffect)((() => {
        Ht || Kt(!1)
      }), [Ht]);
      const Zt = (0, Ot.useCallback)((function(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Ot,
            pending: qt,
            canAfford: Dt,
            buy: mt
          } = Rt.current, dt = null === Ot || void 0 === Ot ? void 0 : Ot[tt];
          if (!dt || tt in qt || !1 === dt.canBuy) return !1;
          if (!Dt(dt, (0, AO.d)(dt, et))) return !1;
          mt(tt, dt, et);
          const jt = {
            snapshot: Iq(dt),
            at: Date.now(),
            resend: Vt
          };
          return Rt.current.pending = {
            ...Rt.current.pending,
            [tt]: jt
          }, bt((et => ({
            ...et,
            [tt]: jt
          }))), !0
        }), []),
        Lt = (0, Ot.useMemo)((() => ({
          shopInfo: Xt,
          categoryKey: ft,
          canAfford: tt.canAfford,
          isPending: tt => tt in Mt,
          gaveUpAt: tt => {
            var et;
            return null !== (et = ct.current[tt]) && void 0 !== et ? et : 0
          },
          act: Zt,
          notify: It
        })), [Xt, ft, tt.canAfford, Mt, Zt, It]),
        Ft = Math.min(...Object.values(Mt).map((tt => tt.at))),
        kt = Pt && Date.now() - Ft > 1500,
        Gt = Jt.length > 1,
        zt = null !== (Vt = null === (qt = Xt[ft]) || void 0 === qt ? void 0 : qt.customTitle) && void 0 !== Vt ? Vt : ft,
        ot = null === (jt = Xt[ft]) || void 0 === jt ? void 0 : jt.description;
      let rt = null;
      return "market" === wt ? rt = (0, Qt.jsx)(sq, {}) : "sell" === wt ? rt = (0, Qt.jsx)(eD, {}) : "collect" === wt ? rt = (0, Qt.jsx)(OD, {}) : "orders" === wt ? rt = (0, Qt.jsx)(mD, {}) : "myOrders" === wt && (rt = (0, Qt.jsx)(dD, {})), (0, Qt.jsx)(Pq.Provider, {
        value: Lt,
        children: (0, Qt.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Nt,
          children: (0, Qt.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Qt.jsx)("header", {
              className: "SmpHeader",
              children: (0, Qt.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Qt.jsxs)("h2", {
                  children: [wt && (0, Qt.jsx)(dt.b, {
                    name: HD[wt]
                  }), Et(zt)]
                }), ot && (0, Qt.jsx)("p", {
                  children: (0, Qt.jsx)(pO.e, {
                    text: ot
                  })
                })]
              })
            }), (0, Qt.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Ht && rt
            }), (0, Qt.jsxs)("button", {
              type: "button",
              className: Dt()("SmpStatus", {
                SmpStatusWaiting: Pt,
                SmpStatusFresh: !Pt && null !== ht,
                SmpStatusHasHistory: Gt
              }),
              "aria-live": "polite",
              "aria-expanded": Gt ? ut : void 0,
              onClick: () => {
                Gt && Kt((tt => !tt))
              },
              children: [Pt ? (0, Qt.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Qt.jsx)(Eq, {}), Et(kt ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Jt[0] ? (0, Qt.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Qt.jsx)(pO.e, {
                  text: Jt[0].text
                })
              }, Jt[0].id) : (0, Qt.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Et("smpShop:ready")
              }), Gt && (0, Qt.jsx)("small", {
                children: Et("smpShop:recentMessages", {
                  count: Jt.length
                })
              })]
            }), ut && Gt && (0, Qt.jsx)("div", {
              className: "SmpStatusHistory",
              children: Jt.map((tt => (0, Qt.jsx)("div", {
                children: (0, Qt.jsx)(pO.e, {
                  text: tt.text
                })
              }, tt.id)))
            })]
          })
        })
      })
    }
    class lD {
      constructor(tt) {
        this.info = tt
      }
      static fromShopInfo(tt) {
        const et = {};
        for (const Vt in tt) {
          const Ot = !0 === tt[Vt].redDot && !0 !== tt[Vt].forceRemoveRedDot;
          et[Vt] = {
            redDot: Ot,
            items: {}
          };
          for (const qt in tt[Vt].items) {
            const Ot = tt[Vt].items[qt],
              Dt = !0 === Ot.redDot && !0 !== Ot.forceRemoveRedDot;
            et[Vt].items[qt] = {
              redDot: Dt
            }
          }
        }
        return new lD(et)
      }
      anyCategoryHasRedDots() {
        for (const tt in this.info)
          if (this.categoryHasRedDot(tt)) return !0;
        return !1
      }
      doesCategoryExist(tt) {
        return !(0, jV.B)(this.info[tt])
      }
      categoryHasRedDot(tt) {
        return !0 === this.info[tt].redDot
      }
      updateCategoryRedDot(tt, et) {
        this.info[tt].redDot = et
      }
      doesItemExist(tt, et) {
        return this.doesCategoryExist(tt) && !(0, jV.B)(this.info[tt].items[et])
      }
      itemHasRedDot(tt, et) {
        return !0 === this.info[tt].items[et].redDot
      }
      updateItemRedDot(tt, et, Vt) {
        this.info[tt].items[et].redDot = Vt
      }
      shallowCopy() {
        return new lD(this.info)
      }
    }

    function ED(tt, et) {
      return `${tt}\x1f${et}`
    }

    function fD(tt, et) {
      return !(0, jV.B)(et) && !(0, jV.B)(tt) && et in tt
    }
    const wD = (0, Ot.memo)((function(tt) {
      var et, Vt;
      let {
        show: qt
      } = tt;
      const mt = (0, Fe.g)("players", JD),
        dt = (0, Fe.g)("players", CD),
        Xt = (0, tq.e)(),
        [Et, ft] = (0, Ot.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: lD.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        yt = (0, Ot.useRef)(""),
        Nt = (0, Ot.useRef)(null),
        bt = (0, Ot.useRef)(null),
        Jt = (0, Ot.useRef)(0),
        Ct = (0, Ot.useRef)(void 0),
        ut = (0, Ot.useRef)(null),
        Kt = (0, Ot.useRef)(Et),
        vt = Et.redDotInfo.anyCategoryHasRedDots(),
        [Wt, ct] = (0, Ot.useState)(null),
        Rt = (0, Ot.useRef)(!1);
      let It = !1,
        Pt = 0,
        Zt = 0;
      if (Et.currencyAmounts) {
        for (const tt in Et.currencyAmounts) {
          var Lt;
          const et = Et.currencyAmounts[tt];
          et.hidden || (Pt++, (null === (Lt = et.subtext) || void 0 === Lt ? void 0 : Lt.length) > 0 && Zt++)
        }
        It = Pt + Zt > 4
      }(0, Ot.useEffect)((() => {
        HV.j.sw("showShopIconRedDot", vt, !0)
      }), [vt]), (0, Ot.useEffect)((() => {
        Mt.gameBridge.send("setShopOpen", qt), qt || (clearTimeout(Ct.current), ft((tt => tt.awaitingPurchase ? {
          ...tt,
          awaitingPurchase: !1
        } : tt)))
      }), [qt]), (0, Ot.useEffect)((() => () => {
        Mt.gameBridge.send("setShopOpen", !1), clearTimeout(Ct.current)
      }), []), (0, Ot.useEffect)((() => {
        Kt.current = Et
      }), [Et]), (0, Ot.useEffect)((() => {
        if (null === Wt) return;
        return (0, sO.b)("pointerdown", (tt => {
          const et = tt.target;
          null !== et && void 0 !== et && et.closest(".ShopItem") || ct(null)
        }))
      }), [Wt]);
      const Ft = tt => {
          ft((et => ({
            ...et,
            ...tt
          })))
        },
        kt = tt => {
          var et;
          clearTimeout(null === (et = Et.onBoughtInfo) || void 0 === et ? void 0 : et.timeout);
          const Vt = setTimeout((() => {
            Ft({
              onBoughtInfo: null
            })
          }), 3e3);
          yt.current = tt, Ft({
            onBoughtInfo: {
              text: tt,
              timeout: Vt,
              categoryKey: Nt.current
            }
          })
        },
        Gt = tt => {
          const {
            shopInfo: et,
            userInputsPerItem: Vt,
            redDotInfo: Ot,
            autoSelectCategory: Dt
          } = function(tt, et, Vt, Ot, qt, Dt) {
            if ((0, jV.B)(tt) || 0 === Object.keys(tt).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: lD.fromShopInfo({}),
              autoSelectCategory: null
            };
            const mt = St.siteUsedData[St.siteUsed].adConfig.showRewardedAds,
              dt = {};
            let jt = null;
            for (const yt in tt) {
              const et = tt[yt],
                Vt = {};
              let Ot = !1;
              for (const tt in et.items) {
                const qt = et.items[tt];
                (0, AO.m)(qt, mt) && (Vt[tt] = qt, Ot = !0)
              }
              Ot && (dt[yt] = {
                ...et,
                items: Vt
              }, !0 === et.autoSelectCategory && (jt = yt))
            }
            const Ht = {},
              Xt = (tt, et, Ot, mt) => {
                var dt, jt;
                const Xt = ED(tt, et),
                  Qt = null !== (dt = Vt[Xt]) && void 0 !== dt ? dt : Vt[et];
                if (null !== (jt = mt.userInput) && void 0 !== jt && jt.type) switch (mt.userInput.type) {
                  case "dropdown": {
                    var lt;
                    const tt = !Qt || !mt.userInput.dropdownOptions.some((tt => (0, AO.e)(tt) === Qt)),
                      et = mt.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Ot || void 0 === Ot || null === (lt = Ot.userInput) || void 0 === lt ? void 0 : lt.type) || JSON.stringify(Ot.userInput.dropdownOptions) !== JSON.stringify(mt.userInput.dropdownOptions)),
                      Vt = mt.userInput,
                      qt = !(0, jV.B)(Vt.initialValue) && Vt.dropdownOptions.some((tt => (0, AO.e)(tt) === Vt.initialValue));
                    var Et;
                    return void(tt || et ? qt ? Ht[Xt] = null !== (Et = mt.userInput.initialValue) && void 0 !== Et ? Et : null : mt.userInput.dropdownOptions.length > 0 ? Ht[Xt] = (0, AO.e)(mt.userInput.dropdownOptions[0]) : Ht[Xt] = null : Ht[Xt] = Qt)
                  }
                  case "text":
                  case "number":
                    var ft, wt, yt;
                    return void((null === Ot || void 0 === Ot ? void 0 : Ot.userInput) !== mt.userInput ? Ht[Xt] = null !== (ft = null !== (wt = mt.userInput.initialValue) && void 0 !== wt ? wt : Qt) && void 0 !== ft ? ft : "" : Ht[Xt] = null !== (yt = null !== Qt && void 0 !== Qt ? Qt : mt.userInput.initialValue) && void 0 !== yt ? yt : "");
                  case "color":
                    var Nt, Mt, bt;
                    return void((null === Ot || void 0 === Ot ? void 0 : Ot.userInput) !== mt.userInput ? Ht[Xt] = null !== (Nt = null !== (Mt = mt.userInput.initialValue) && void 0 !== Mt ? Mt : Qt) && void 0 !== Nt ? Nt : "#000000" : Ht[Xt] = null !== (bt = null !== Qt && void 0 !== Qt ? Qt : mt.userInput.initialValue) && void 0 !== bt ? bt : "#000000");
                  case "player": {
                    const tt = (0, AO.i)(qt, Dt, mt.userInput);
                    return void(Qt && tt.includes(Qt) ? Ht[Xt] = Qt : Ht[Xt] = tt.length > 0 ? tt[0] : null)
                  }
                }
              };
            for (const yt in dt)
              for (const tt in dt[yt].items) {
                var Qt;
                const Vt = dt[yt].items[tt];
                Xt(yt, tt, null === (Qt = et[yt]) || void 0 === Qt ? void 0 : Qt.items[tt], Vt)
              }
            const lt = lD.fromShopInfo(dt);
            for (const yt in dt) {
              var Et;
              if (Ot.doesCategoryExist(yt)) {
                (null === (Et = et[yt]) || void 0 === Et ? void 0 : Et.redDot) === dt[yt].redDot && lt.updateCategoryRedDot(yt, Ot.categoryHasRedDot(yt));
                for (const tt in dt[yt].items) {
                  var ft, wt;
                  Ot.doesItemExist(yt, tt) && (null === (ft = et[yt]) || void 0 === ft || null === (wt = ft.items[tt]) || void 0 === wt ? void 0 : wt.redDot) === dt[yt].items[tt].redDot && lt.updateItemRedDot(yt, tt, Ot.itemHasRedDot(yt, tt))
                }
              }
            }
            return {
              shopInfo: dt,
              userInputsPerItem: Ht,
              redDotInfo: lt,
              autoSelectCategory: jt
            }
          }(tt, Et.shopInfo, Et.userInputsPerItem, Et.redDotInfo, mt, dt), jt = {
            shopInfo: et,
            userInputsPerItem: Vt,
            redDotInfo: Ot
          };
          if (null === Dt || qt)
            if (et[Et.selectedCategoryKey]) jt.selectedCategoryKey = Et.selectedCategoryKey;
            else {
              const tt = Vq(et);
              jt.selectedCategoryKey = tt.length > 0 ? tt[0] : null
            }
          else jt.selectedCategoryKey = Dt;
          return 0 === Object.keys(et).length && qt && ht.b.set({
            openEverythingMenuName: null
          }), jt
        },
        ot = (tt, et, Vt) => {
          const Ot = Et.selectedCategoryKey,
            qt = ED(Ot, tt),
            Dt = null !== Vt && void 0 !== Vt ? Vt : Et.userInputsPerItem[qt],
            mt = {
              categoryKey: Ot,
              itemKey: tt,
              userInput: Dt
            };
          if (Nt.current = Ot, et.isRewardedAd) {
            if (Date.now() - Jt.current < 5e3) return;
            (0, Ne.$)((() => {
              var Vt, Ot, Dt;
              console.log("bought rewarded ad");
              const dt = mt.categoryKey ? null === (Vt = Kt.current.shopInfo[mt.categoryKey]) || void 0 === Vt ? void 0 : Vt.items[tt] : null;
              if (!dt || !dt.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Ot = et.userInput) || void 0 === Ot ? void 0 : Ot.type) === (null === dt || void 0 === dt || null === (Dt = dt.userInput) || void 0 === Dt ? void 0 : Dt.type) ? (mt.userInput = Kt.current.userInputsPerItem[qt], Mt.gameBridge.send("buyShopItem", mt), et.onBoughtMessage && kt(et.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Jt.current = Date.now()
          } else {
            Mt.gameBridge.send("buyShopItem", mt), Ft({
              awaitingPurchase: !0
            }), clearTimeout(Ct.current), Ct.current = setTimeout((() => {
              ut.current = null, Ft({
                awaitingPurchase: !1
              })
            }), 1e3);
            const tt = (0, AO.d)(et, Dt);
            if (ut.current = null, !isNaN(tt) && fD(Et.currencyAmounts, et.currency)) {
              0 !== tt && (ut.current = {
                currency: et.currency,
                amountBefore: Et.currencyAmounts[et.currency].amount
              });
              const Vt = {
                ...Et.currencyAmounts
              };
              Vt[et.currency].amount -= tt, Ft({
                currencyAmounts: Vt
              })
            }
            et.onBoughtMessage && kt(et.onBoughtMessage)
          }
        },
        rt = (tt, et) => {
          if (null === et || !tt.shopInfo[et]) return tt;
          let Vt = tt.redDotInfo;
          return Vt.categoryHasRedDot(et) && (Vt.updateCategoryRedDot(et, !1), Vt = Vt.shallowCopy()), {
            ...tt,
            selectedCategoryKey: et,
            redDotInfo: Vt
          }
        },
        Ut = tt => {
          ft((et => rt(et, tt)))
        };
      (0, ie.f)(nO.j, (() => {
        ft((tt => {
          const et = (0, nO.n)(Vq(tt.shopInfo), tt.selectedCategoryKey, (et => (0, nO.g)(tt.shopInfo[et].items)));
          return et === tt.selectedCategoryKey ? tt : rt(tt, et)
        }))
      })), (0, ie.f)("showShopFromServer", (tt => {
        let {
          toggle: et,
          Ht: Vt
        } = tt;
        Vt && Ut(Vt), 0 === Object.keys(Et.shopInfo).length || et && qt ? ht.b.set({
          openEverythingMenuName: null
        }) : ht.b.set({
          openEverythingMenuName: ae.o.SHOP
        })
      })), (0, ie.f)("closeShopOnDamaged", (() => {
        qt && ht.b.set({
          openEverythingMenuName: null
        })
      })), (0, ie.f)("overShopInfo", (tt => {
        kt(tt)
      })), (0, wt.h)("currencyAmounts", (tt => {
        var et;
        const Vt = ut.current;
        Vt && (null === tt || void 0 === tt || null === (et = tt[Vt.currency]) || void 0 === et ? void 0 : et.amount) === Vt.amountBefore ? Ft({
          currencyAmounts: tt
        }) : (ut.current = null, Ft({
          currencyAmounts: tt,
          awaitingPurchase: !1
        }))
      })), (0, wt.h)("shopInfo", (tt => {
        Ft({
          ...Gt(tt),
          awaitingPurchase: !1
        })
      }));
      const At = (0, Ot.useRef)({
        playerIds: mt,
        localPlayerId: dt
      });
      (0, Ot.useEffect)((() => {
        At.current.playerIds === mt && At.current.localPlayerId === dt || (At.current = {
          playerIds: mt,
          localPlayerId: dt
        }, ft((tt => {
          const et = Gt(tt.shopInfo);
          return {
            ...tt,
            ...et
          }
        })))
      }), [mt, dt]);
      const it = Et.selectedCategoryKey,
        Yt = (tt, et) => {
          var Vt, Ot;
          return (isNaN(et) || (0, jV.B)(tt.currency) || fD(Et.currencyAmounts, tt.currency) && et <= Et.currencyAmounts[tt.currency].amount) && (null === (Vt = tt.canBuy) || void 0 === Vt || Vt) && !(null !== (Ot = tt.hidden) && void 0 !== Ot && Ot)
        },
        Bt = (tt, et) => {
          var Vt, Ot, qt;
          const mt = ED(it, tt),
            dt = Et.shopInfo[it].items[tt],
            Xt = Et.userInputsPerItem[mt],
            lt = (0, AO.d)(dt, Xt),
            ft = Yt(dt, lt),
            wt = dt.enchant,
            yt = wt ? (0, zt.Bb)(null !== (Vt = dt.customTitle) && void 0 !== Vt ? Vt : tt, {
              colour: zt.xb[wt.tier]
            }) : null !== (Ot = dt.customTitle) && void 0 !== Ot ? Ot : tt,
            Nt = et => {
              const Vt = null !== et && void 0 !== et ? et : Xt,
                Ot = void 0 !== et ? (0, AO.d)(dt, et) : lt;
              Yt(dt, Ot) && null !== Vt && ot(tt, dt, et);
              let qt = Et.redDotInfo;
              qt.itemHasRedDot(it, tt) && (qt.updateItemRedDot(it, tt, !1), qt = qt.shallowCopy()), Ft({
                redDotInfo: qt
              })
            };
          return (0, Qt.jsxs)("div", {
            className: Dt()("ShopItem", {
              ShopItemNoInput: !dt.userInput,
              ShopItemNoInputCanBuy: !dt.userInput && ft,
              ShopItemNoInputSelected: dt.isSelected,
              ShopItemEnchant: !!wt
            }),
            "data-pad-focusable": !dt.userInput || void 0,
            "data-pad-unavailable": !dt.userInput && !ft || void 0,
            "data-pad-repeat": null !== (qt = (0, nO.b)(dt)) && void 0 !== qt ? qt : void 0,
            "data-pad-repeat-wait": Et.awaitingPurchase || void 0,
            onClick: () => {
              if (wt && Rt.current) {
                if (Wt !== mt) return void ct(mt);
                ct(null)
              }
              dt.userInput || Nt()
            },
            onPointerDown: tt => {
              wt && (Rt.current = (0, YO.q)(tt))
            },
            onPointerEnter: tt => {
              wt && !(0, YO.q)(tt) && ct(mt)
            },
            onPointerLeave: tt => {
              wt && !(0, YO.q)(tt) && ct((tt => tt === mt ? null : tt))
            },
            style: {
              zIndex: Object.keys(Et.shopInfo[it].items).length - et
            },
            children: [Et.redDotInfo.itemHasRedDot(it, tt) && (0, Qt.jsx)(jt.e, {
              top: "-6px",
              right: "-6px"
            }), dt.badge && (0, Qt.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Qt.jsx)("div", {
                className: Dt()("ShopBadgeMain", dt.badge.type),
                children: (0, Qt.jsx)(pO.e, {
                  text: dt.badge.text
                })
              })
            }), (0, Qt.jsx)("div", {
              className: "ShopItemLeft",
              children: dt.image && (0, Qt.jsx)(yD, {
                item: dt,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Qt.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Qt.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Qt.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Qt.jsx)(pO.e, {
                    text: yt
                  })
                }), (0, Qt.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Qt.jsx)(pO.e, {
                    text: dt.description
                  })
                })]
              }), dt.userInput && (0, Qt.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: tt => {
                  tt.stopPropagation()
                },
                children: [(0, Qt.jsx)(MD, {
                  item: dt,
                  currInput: Xt,
                  updateInput: et => {
                    ((tt, et, Vt) => {
                      const Ot = ED(tt, et),
                        qt = {
                          ...Et.userInputsPerItem
                        };
                      qt[Ot] = Vt, Ft({
                        userInputsPerItem: qt
                      })
                    })(it, tt, et)
                  },
                  onSubmit: tt => {
                    Nt(tt)
                  }
                }), ("dropdown" !== dt.userInput.type || !dt.userInput.autoSubmit) && (0, Qt.jsx)(Ht.f, {
                  className: "ItemCostButton",
                  disabled: !ft && null !== Xt,
                  onClick: () => {
                    Nt()
                  },
                  children: (0, Qt.jsx)(aD, {
                    item: dt,
                    cost: lt,
                    currencyAmounts: Et.currencyAmounts
                  })
                })]
              })]
            }), !dt.userInput && (0, Qt.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Qt.jsx)(aD, {
                item: dt,
                cost: lt,
                currencyAmounts: Et.currencyAmounts
              })
            }), wt && Wt === mt && (0, Qt.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Qt.jsx)(pO.e, {
                text: yt
              }), (0, Qt.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Qt.jsx)(pO.e, {
                  text: (0, iO.d)("", wt.enchantments, wt.enchantmentData)
                })
              })]
            })]
          }, mt)
        },
        pt = function(tt) {
          for (const et in tt)
            if (tt[et].smp) return !0;
          return !1
        }(Et.shopInfo),
        xt = bq(Et.shopInfo, it);
      return (0, Qt.jsx)(oO.d, {
        className: "Menu ShopBody",
        show: qt,
        children: 0 !== Object.keys(Et.shopInfo).length && (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Qt.jsx)(lt, {
              items: Vq(Et.shopInfo).map((tt => {
                var et;
                return {
                  id: tt,
                  title: null !== (et = Et.shopInfo[tt].customTitle) && void 0 !== et ? et : tt,
                  redDot: Et.redDotInfo.categoryHasRedDot(tt)
                }
              })),
              link: Xt ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, eq.h)({
                    page: (0, eq.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: it,
              onClick: Ut,
              padStartsOnTab: (0, nO.d)(it)
            }), (0, Qt.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Et.currencyAmounts && Object.keys(Et.currencyAmounts).map((tt => {
                var et;
                const Vt = Et.currencyAmounts[tt];
                return Vt.hidden ? null : (0, Qt.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (It ? "SmallText" : ""),
                  children: [(0, Qt.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Qt.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: Vt.iconColour
                      },
                      children: (0, Qt.jsx)(uD, {
                        iconName: Vt.icon
                      })
                    }), "\xa0", (0, UO.d)(Vt.amount, 6)]
                  }), (null === (et = Vt.subtext) || void 0 === et ? void 0 : et.length) > 0 && (0, Qt.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Qt.jsx)(pO.e, {
                      text: Vt.subtext
                    })
                  })]
                }, tt)
              }))
            })]
          }), (0, Qt.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [pt && (0, Qt.jsx)(QD, {
              show: qt,
              shopInfo: Et.shopInfo,
              selectedCategoryKey: it,
              buy: (tt, et, Vt) => {
                ot(tt, et, Vt)
              },
              canAfford: Yt,
              message: Et.onBoughtInfo
            }), null === xt && (0, Qt.jsxs)(Qt.Fragment, {
              children: [(0, Qt.jsx)("div", {
                className: Dt()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Et.onBoughtInfo
                }),
                children: (0, Qt.jsx)(pO.e, {
                  text: yt.current
                })
              }), (0, Qt.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Qt.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (et = Et.shopInfo[it]) || void 0 === et ? void 0 : et.description) && (0, Qt.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Qt.jsx)(pO.e, {
                      text: Et.shopInfo[it].description
                    })
                  }), qt && (0, Qt.jsx)("div", {
                    className: "ShopItems",
                    ref: bt,
                    "data-pad-initial-area": !0,
                    children: Vq(null === (Vt = Et.shopInfo[it]) || void 0 === Vt ? void 0 : Vt.items).map(((tt, et) => Bt(tt, et)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function yD(tt) {
      let {
        item: et,
        minWidth: Vt,
        minHeight: Ot
      } = tt;
      const {
        image: qt,
        schematicId: Dt,
        imageColour: mt
      } = et;
      if (Dt) return (0, Qt.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Vt}rem`,
          height: `${Ot}rem`
        },
        children: (0, Qt.jsx)(xO.b, {
          game: {
            schematicId: Dt
          }
        })
      });
      var jt, Ht;
      if ((0, BO.g)(qt)) return (0, Qt.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Vt}rem`,
          height: "0",
          minHeight: `${Ot}rem`
        },
        children: (0, Qt.jsx)(BO.e, {
          itemName: qt,
          amount: null !== (jt = et.amount) && void 0 !== jt ? jt : 0,
          amountFontSize: Ot / 4 + "rem",
          enchantmentTier: null === (Ht = et.enchant) || void 0 === Ht ? void 0 : Ht.tier
        })
      });
      const Xt = qt.slice(-4);
      return ".jpg" === Xt || ".png" === Xt ? (0, Qt.jsx)(ND, {
        image: qt,
        minWidth: Vt
      }) : (0, Qt.jsx)(dt.b, {
        name: qt,
        className: "SelectedItemImage",
        style: {
          color: mt
        }
      })
    }

    function ND(tt) {
      let {
        image: et,
        minWidth: Vt
      } = tt;
      const {
        gameNameWithVariation: Ot
      } = (0, Fe.h)("connectedGame"), qt = et.endsWith(".jpg");
      return (0, Qt.jsx)("img", {
        className: Dt()({
          ShopPixelImage: !qt
        }),
        style: {
          width: `${qt?1.6*Vt:Vt}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,zt.bc)(Ot)}/${et}`,
        alt: et,
        draggable: !1
      })
    }

    function aD(tt) {
      let {
        item: et,
        cost: Vt,
        currencyAmounts: Ot
      } = tt;
      const qt = !isNaN(Vt) && 0 !== Vt && fD(Ot, et.currency);
      let Dt = null;
      return et.buyButtonText ? Dt = et.buyButtonText : qt ? (Dt = Vt, et.sell && (Dt = -1 * Vt), Dt = Dt.toString()) : 0 === Vt ? Dt = "Free" : et.isRewardedAd && (Dt = "Watch ad"), (0, jV.B)(Dt) || " " === Dt ? null : (0, Qt.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [qt && (0, Qt.jsx)("div", {
          style: {
            color: Ot[et.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Qt.jsx)(uD, {
            iconName: Ot[et.currency].icon
          })
        }), (0, Qt.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Qt.jsx)(pO.e, {
            text: Dt
          })
        })]
      })
    }

    function MD(tt) {
      let {
        item: et,
        currInput: Vt,
        updateInput: qt,
        onSubmit: Dt
      } = tt;
      const {
        t: dt
      } = (0, mt.H)(), jt = (0, Ot.useRef)(null);
      if ((0, Ot.useEffect)((() => {
          const tt = jt.current;
          tt && tt.value !== Vt && document.activeElement !== tt && (tt.value = null !== Vt && void 0 !== Vt ? Vt : "")
        }), [Vt]), !et.userInput) return null;
      let Ht = et.userInput;
      if (Nt.featureFlags.sanitizeShopInput && "text" === et.userInput.type && (Ht = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Ht.type || "number" === Ht.type) {
        var Xt, lt;
        console.assert(void 0 !== Vt, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(et)}`);
        const tt = "text" === Ht.type && Ht.wordCharsOnly;
        return (0, Qt.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Qt.jsx)(Ct.d, {
            className: "ShopItemUserInputText",
            placeholderText: dt(Ht.placeholderText),
            defaultValue: Vt,
            domRef: jt,
            onValueChange: (et, Vt) => {
              !0 === tt && (et = (0, gO.lb)(et)), jt.current.value = et, qt(et)
            },
            onEnter: Dt,
            type: Ht.type
          }, (null !== (Xt = Ht.initialValue) && void 0 !== Xt ? Xt : "") + (null !== (lt = Ht.placeholderText) && void 0 !== lt ? lt : ""))
        })
      }
      if ("dropdown" === Ht.type) {
        console.assert(void 0 !== Vt, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(et)}`);
        const tt = Ht.autoSubmit;
        return (0, Qt.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Qt.jsx)(Pe.e, {
            options: Ht.dropdownOptions.map((tt => (0, AO.e)(tt))),
            value: Vt,
            onChange: et => {
              let {
                value: Vt
              } = et;
              qt(Vt), tt && Dt(Vt)
            }
          })
        })
      }
      return "player" === Ht.type ? (0, Qt.jsx)(bD, {
        userInput: Ht,
        currInput: Vt,
        updateInput: qt
      }) : "color" === Ht.type ? (0, Qt.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Qt.jsx)("input", {
          type: "color",
          value: Vt,
          onChange: tt => {
            qt(tt.target.value)
          }
        })
      }) : null
    }

    function bD(tt) {
      let {
        userInput: et,
        currInput: Vt,
        updateInput: Ot
      } = tt;
      const qt = (0, Fe.h)("players"),
        Dt = (0, Fe.h)("hiddenPlayerNames"),
        mt = (0, AO.i)(qt.ids, qt.localId, et);
      return (0, Qt.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Qt.jsx)(Pe.e, {
          options: mt.map((tt => {
            const {
              name: et
            } = qt.byId[tt];
            return {
              value: tt,
              label: null === et ? "" : (0, TO.f)(et, Dt)
            }
          })),
          value: Vt,
          onChange: tt => {
            let {
              value: et
            } = tt;
            Ot(et)
          }
        })
      })
    }

    function JD(tt) {
      let {
        ids: et
      } = tt;
      return et
    }

    function CD(tt) {
      let {
        localId: et
      } = tt;
      return et
    }

    function uD(tt) {
      let {
        iconName: et
      } = tt;
      return Mt.gameBridge.lookup("isItemName", et) ? (0, Qt.jsx)(BO.e, {
        itemName: et,
        amount: 1
      }) : (0, Qt.jsx)(dt.b, {
        name: et,
        className: "2x"
      })
    }
    var KD = Vt(1732);
    const hD = (0, Vt(1513).i)((tt => tt.PadLobbyShortcuts)),
      vD = (0, Ot.lazy)((() => Promise.resolve().then((() => Vt(4802))).then((tt => ({
        default: tt.Lobbyleaderboard
      }))))),
      WD = (0, Ot.lazy)((() => Vt.e(223).then((() => Vt(41276))).then((tt => ({
        default: tt.LobbyManageView
      })))));

    function SD(tt) {
      let {
        show: et
      } = tt;
      return et ? (0, Qt.jsx)(cD, {}) : null
    }

    function cD() {
      const tt = (0, tq.e)();
      return (0, Qt.jsxs)(Qt.Fragment, {
        children: [(0, Qt.jsx)(hD, {}), (0, Qt.jsxs)(Ot.Suspense, {
          fallback: (0, Qt.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Qt.jsx)(ut.b, {})
          }),
          children: [tt && (0, Qt.jsx)(WD, {
            leaderboard: (0, Qt.jsx)(vD, {})
          }), !tt && (0, Qt.jsx)(vD, {})]
        })]
      })
    }
    var RD = Vt(1652),
      ID = Vt(3099),
      PD = Vt(1826),
      ZD = Vt(3140),
      LD = Vt(2767),
      FD = Vt(1597),
      kD = Vt(1564),
      GD = Vt(3072),
      zD = Vt(3095),
      oD = Vt(2389);
    const rD = "storeRecentGiftRecipients",
      UD = new Map;

    function AD() {
      try {
        const tt = QV.e.getItem(rD);
        return Array.isArray(tt) ? tt.filter((tt => "string" === typeof(null === tt || void 0 === tt ? void 0 : tt.name) && tt.name.length > 0)).map((tt => ({
          name: tt.name,
          cosmetics: tt.cosmetics && "object" === typeof tt.cosmetics ? tt.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function iD(tt) {
      var et;
      const [Vt, qt] = (0, Ot.useState)(""), [Dt, mt] = (0, Ot.useState)("search"), [dt, jt] = (0, Ot.useState)(null), [Ht, Xt] = (0, Ot.useState)(null), Qt = (0, Ot.useRef)(null), lt = (0, Ot.useRef)(null);
      (0, Ot.useEffect)((() => () => {
        Qt.current && clearTimeout(Qt.current)
      }), []);
      const Et = null !== (et = null === dt || void 0 === dt ? void 0 : dt.name) && void 0 !== et ? et : null;

      function ft() {
        Qt.current && (clearTimeout(Qt.current), Qt.current = null)
      }(0, Ot.useEffect)((() => {
        if (null === Et || tt === ct.NULL_USER_CONTEXT) return;
        const et = Et.toLowerCase();
        if (et === tt.getPlayerName().toLowerCase()) return void Xt({
          name: Et,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Vt = UD.get(et);
        if (Vt) return void Xt({
          name: Et,
          result: Vt
        });
        let Ot = !1;
        return async function(tt, et) {
          try {
            const Vt = await (0, ct.postJsonWithMetricsCookiesAndJsonResponse)(`${ye.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: et
            }, {
              retries: 1
            }, tt.getMetricsCookies());
            if ("boolean" !== typeof(null === Vt || void 0 === Vt ? void 0 : Vt.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Vt)}`);
            return Vt
          } catch (Vt) {
            return console.error("Failed to look up gift recipient:", Vt), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(tt, Et).catch((tt => (console.error("Gift recipient lookup failed:", tt), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((tt => {
          !0 !== tt.giftRecipientFound && "store:giftRecipientLookupFailed" === tt.giftRecipientError || UD.set(et, tt), Ot || Xt({
            name: Et,
            result: tt
          })
        })), () => {
          Ot = !0
        }
      }), [Et, tt]);
      const wt = (0, Ot.useMemo)((() => {
        const tt = Vt.trim();
        if (!tt) return {
          status: "none"
        };
        if (!dt || dt.name !== tt || (null === Ht || void 0 === Ht ? void 0 : Ht.name) !== dt.name) return {
          status: "pending",
          name: tt
        };
        const et = Ht.result;
        return !1 === et.giftRecipientFound ? {
          status: "error",
          name: dt.name,
          error: et.giftRecipientError
        } : {
          status: "found",
          name: et.giftRecipientName,
          ownedPacks: et.giftRecipientOwnedPacks,
          hasSuperRank: et.giftRecipientHasSuperRank,
          isSubscriber: et.giftRecipientIsSubscriber
        }
      }), [Vt, dt, Ht]);
      (0, Ot.useEffect)((() => {
        "found" === wt.status && "typed" === (null === dt || void 0 === dt ? void 0 : dt.source) && lt.current !== wt.name && (lt.current = wt.name, (0, Ve.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [wt, dt]);
      const yt = (null === Ht || void 0 === Ht ? void 0 : Ht.name) === (null === dt || void 0 === dt ? void 0 : dt.name) ? null === Ht || void 0 === Ht ? void 0 : Ht.result : null,
        Nt = !0 === (null === yt || void 0 === yt ? void 0 : yt.giftRecipientFound) ? yt.giftRecipientCosmetics : null;
      return {
        query: Vt,
        via: Dt,
        recipient: wt,
        recipientCosmetics: Nt,
        type: function(tt) {
          qt(tt), mt("search"), ft();
          const et = tt.trim();
          et ? Qt.current = setTimeout((() => {
            jt({
              name: et,
              source: "typed"
            })
          }), 400) : jt(null)
        },
        choose: function(tt, et) {
          ft(), qt(tt), mt("typed" === et ? "search" : "prefilled" === et ? "prefilled" : "suggestion"), jt({
            name: tt,
            source: et
          }), "typed" !== et && "prefilled" !== et && (0, Ve.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: et
          })
        },
        clear: function() {
          ft(), qt(""), mt("search"), jt(null)
        },
        recordGift: function(tt, et) {
          ! function(tt) {
            UD.delete(tt.toLowerCase())
          }(tt), Xt((Vt => {
            if (!Vt || Vt.name.toLowerCase() !== tt.toLowerCase() || !0 !== Vt.result.giftRecipientFound || "superRank" === et) return Vt;
            const Ot = Vt.result.giftRecipientOwnedPacks;
            return {
              ...Vt,
              result: {
                ...Vt.result,
                giftRecipientOwnedPacks: Ot.includes(et) ? Ot : [...Ot, et]
              }
            }
          }))
        }
      }
    }
    var YD = Vt(2387),
      BD = Vt(4811),
      pD = Vt(287),
      xD = Vt(3179);
    const TD = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var gD = Vt(2324),
      sD = Vt(697),
      nD = Vt(2435),
      tm = Vt(2693);

    function em(tt) {
      let {
        cosmetics: et
      } = tt;
      return (0, Qt.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Qt.jsx)(nD.c, {
          cosmetics: et
        })
      })
    }

    function Vm(tt, et) {
      var Vt, Ot;
      const qt = null !== (Vt = tt.friend) && void 0 !== Vt ? Vt : {
        isError: !1,
        name: tt.name,
        ranks: [],
        cosmetics: null !== (Ot = tt.cosmetics) && void 0 !== Ot ? Ot : {},
        nameColour: sD.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return et ? {
        ...qt,
        cosmetics: et
      } : qt
    }

    function Om(tt) {
      let {
        pending: et
      } = tt;
      return (0, Qt.jsx)("span", {
        className: "StoreRecipientLoader",
        children: et && (0, Qt.jsx)(ut.b, {})
      })
    }

    function qm(tt) {
      var et;
      let {
        selfName: Vt,
        giftRecipient: qt,
        suggestionsVersion: jt,
        pulseSignal: Xt,
        disabled: lt
      } = tt;
      const {
        t: Et
      } = (0, mt.H)(), ft = (0, it.k)(), wt = (0, Ot.useRef)(null), yt = (0, Ot.useRef)(null), {
        query: Mt,
        via: bt,
        recipient: Jt,
        recipientCosmetics: ut
      } = qt, Kt = (0, oD.j)(Mt), ht = (0, Ot.useMemo)((() => {
        const tt = Nt.featureFlags.useSocialFeatures ? ft.friends.filter((tt => !tt.isError)) : [];
        return (0, oD.g)({
          onlineFriends: (0, it.g)(tt),
          recentRecipients: AD(),
          friends: tt,
          selfName: Vt,
          max: 8
        })
      }), [ft.friends, Vt, jt]), vt = Mt.trim().toLowerCase(), Wt = "search" !== bt && vt ? ht.find((tt => tt.name.toLowerCase() === vt)) : void 0, St = Wt && "prefilled" === bt ? [Wt, ...ht.filter((tt => tt !== Wt))] : ht, ct = "" !== vt && !Wt, Rt = ct ? Mt : "", It = St.length > 0;
      (0, Ot.useEffect)((() => {
        wt.current && wt.current.value !== Rt && (wt.current.value = Rt)
      }), [Rt]), (0, Ot.useEffect)((() => {
        wt.current && (wt.current.disabled = lt)
      }), [lt, Xt]);
      const Pt = (0, Ot.useRef)(0);

      function Lt() {
        "self" !== Kt && (0, Ve.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), qt.clear()
      }

      function Ft(tt) {
        var et, Vt;
        if (lt) return;
        if (" " === tt.key || "Enter" === tt.key) return tt.preventDefault(), void tt.currentTarget.click();
        const Ot = Array.from(null !== (et = null === (Vt = yt.current) || void 0 === Vt ? void 0 : Vt.querySelectorAll("[role=radio]")) && void 0 !== et ? et : []),
          qt = Ot.indexOf(tt.currentTarget);
        let Dt;
        "ArrowRight" === tt.key || "ArrowDown" === tt.key ? Dt = Ot[(qt + 1) % Ot.length] : "ArrowLeft" === tt.key || "ArrowUp" === tt.key ? Dt = Ot[(qt - 1 + Ot.length) % Ot.length] : "Home" === tt.key ? Dt = Ot[0] : "End" === tt.key && (Dt = Ot[Ot.length - 1]), Dt && (tt.preventDefault(), Dt.focus(), Dt.click())
      }(0, Ot.useEffect)((() => {
        var tt;
        Xt > Pt.current && !lt && (Pt.current = Xt, null === (tt = wt.current) || void 0 === tt || tt.focus())
      }), [Xt, lt]);
      const kt = "self" === Kt,
        Gt = null !== (et = null === Wt || void 0 === Wt ? void 0 : Wt.name) && void 0 !== et ? et : null,
        zt = "error" === Jt.status ? Jt.error : null,
        ot = "store:giftRecipientLookupFailed" === zt;
      return (0, Qt.jsxs)("div", {
        className: Dt()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: lt,
          StoreRecipientStripNoChips: !It
        }),
        children: [(0, Qt.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Et("store:buyingFor")
        }), (0, Qt.jsxs)("div", {
          ref: yt,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Et("store:whoIsItFor"),
          children: [(0, Qt.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": kt,
            tabIndex: lt || !kt && null !== Gt ? -1 : 0,
            className: Dt()("StoreRecipientMe", {
              StoreRecipientChecked: kt
            }),
            onClick: () => {
              lt || Lt()
            },
            onKeyDown: Ft,
            children: [(0, Qt.jsx)(dt.b, {
              name: "user"
            }), " ", Et("store:me")]
          }), It && (0, Qt.jsx)("div", {
            className: "StoreRecipientChips",
            children: St.map((tt => {
              const et = tt === Wt;
              return (0, Qt.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": et,
                tabIndex: !lt && et ? 0 : -1,
                title: tt.name,
                className: Dt()("StoreRecipientChip", {
                  StoreRecipientChecked: et
                }),
                onClick: () => {
                  lt || function(tt) {
                    "gift" !== Kt && (0, Ve.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), qt.choose(tt.name, tt.kind)
                  }(tt)
                },
                onKeyDown: Ft,
                children: (0, Qt.jsx)(tm.f, {
                  playerSocialPreview: Vm(tt, et ? ut : null),
                  opensProfileCard: !1,
                  isFriend: null !== tt.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== tt.friend,
                  status: null === tt.friend ? null : void 0,
                  trailing: et ? (0, Qt.jsx)(Om, {
                    pending: "pending" === Jt.status
                  }) : void 0
                })
              }, tt.name)
            }))
          })]
        }), (0, Qt.jsxs)("div", {
          className: Dt()("StoreRecipientSearch", {
            StoreRecipientChecked: ct,
            StoreRecipientSearchPulse: Xt > 0 && !ct,
            StoreRecipientSearchError: null !== zt && !ot
          }),
          onClick: () => {
            var tt;
            null === (tt = wt.current) || void 0 === tt || tt.focus()
          },
          children: [ct && "found" === Jt.status && ut && (0, Qt.jsx)(em, {
            cosmetics: ut
          }), !(ct && "found" === Jt.status && ut) && (0, Qt.jsx)(dt.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Qt.jsx)(Ct.d, {
            className: "StoreRecipientSearchInput",
            domRef: wt,
            placeholderText: Et("store:searchName"),
            defaultValue: Rt,
            maxLength: Zt.g,
            onValueChange: function(tt) {
              "gift" !== Kt && tt.trim() && (0, Ve.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), qt.type(tt)
            },
            onEnter: () => {
              var tt;
              const et = null === (tt = wt.current) || void 0 === tt ? void 0 : tt.value.trim();
              et && qt.choose(et, "typed")
            },
            blurOnEnter: !0
          }), ct && (0, Qt.jsx)(Om, {
            pending: "pending" === Jt.status
          }), ct && (0, Qt.jsx)("div", {
            ...(0, Ht.X)({
              disabled: lt
            }),
            "aria-label": Et("store:clearRecipient"),
            title: Et("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: tt => {
              tt.stopPropagation(), lt || Lt()
            },
            children: (0, Qt.jsx)(dt.b, {
              name: "xmark"
            })
          })]
        }, Xt), zt && (0, Qt.jsx)("div", {
          className: Dt()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: ot
          }),
          role: "status",
          children: Et(zt)
        })]
      })
    }
    var Dm = Vt(2379),
      mm = Vt(2304),
      dm = Vt(3645),
      jm = Vt(3185),
      Hm = Vt(2331);
    const Xm = Vt.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Qm() {
      (0, Hm.h)(Xm, {
        lowPriority: !1
      })
    }

    function lm(tt) {
      let {
        onBack: et,
        cta: Vt,
        recipient: qt,
        afterCta: Dt
      } = tt;
      const {
        t: jt
      } = (0, mt.H)(), [Xt, lt] = (0, Ot.useState)("starting"), Et = (0, Ot.useRef)(null), ft = (0, pe.b)(), wt = (0, Ot.useRef)(null), yt = (0, Ot.useCallback)((() => {
        const tt = Et.current;
        null !== tt.error && tt.load();
        const et = tt.play();
        wt.current = et, et.catch((tt => {
          (0, dm.e)("Failed to play Super Rank video", tt), ft.current && wt.current === et && lt("failed")
        }))
      }), [ft]);
      return (0, Ot.useEffect)((() => {
        const tt = Et.current;
        let et;

        function Vt() {
          clearTimeout(et), et = setTimeout(yt, 3e3)
        }
        return yt(), tt.addEventListener("ended", Vt), () => {
          clearTimeout(et), tt.removeEventListener("ended", Vt)
        }
      }), [yt]), (0, Qt.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Qt.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Qt.jsx)(Ht.d, {
            className: "StoreDetailBackButton",
            onClick: et,
            padBack: !0,
            children: jt("general:back")
          }), (0, Qt.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Qt.jsx)(dt.b, {
              name: "bolt"
            }), " ", jt("homePage:superRank")]
          }), qt]
        }), (0, Qt.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Qt.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Qt.jsx)("video", {
              ref: Et,
              src: `${ye.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Xm,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Xt,
              onPlaying: () => {
                lt("playing")
              },
              onError: () => {
                lt("failed")
              }
            }), ("failed" === Xt || "loading" === Xt) && (0, Qt.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Qt.jsx)(Ht.f, {
                ariaLabel: jt("general:play"),
                loading: "loading" === Xt,
                onClick: () => {
                  lt("loading"), yt()
                },
                touchPressOn: "pointerup",
                children: (0, Qt.jsx)(dt.b, {
                  name: "play"
                })
              })
            })]
          }), (0, Qt.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Qt.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Qt.jsx)(jm.c, {})
            }), (0, Qt.jsxs)("div", {
              className: "StoreTileActions",
              children: [Vt, Dt]
            })]
          })]
        })]
      })
    }
    var Em = Vt(2712),
      fm = Vt(3606),
      wm = Vt(3166),
      ym = Vt(3168);
    const Nm = [sD.o.yellow, sD.o.green, sD.o.aqua, sD.o.blue, sD.o.purple, sD.o.red];

    function am(tt) {
      return "needsRecipient" === tt || "lookingUp" === tt || "gift" === tt || "recipientOwns" === tt || "recipientSharesOwned" === tt || "recipientSubscribed" === tt
    }

    function Mm(tt) {
      const {
        onKeyDown: et,
        ...Vt
      } = (0, Ht.X)();
      return {
        ...Vt,
        "aria-label": tt,
        onKeyDown: tt => {
          tt.target === tt.currentTarget && (null === et || void 0 === et || et(tt))
        }
      }
    }

    function bm(tt) {
      let {
        text: et
      } = tt;
      return (0, Qt.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(et).map(((tt, et) => (0, Qt.jsx)("span", {
          style: {
            color: Nm[et % Nm.length]
          },
          children: tt
        }, et)))
      })
    }
    const Jm = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Cm(tt) {
      let {
        state: et,
        item: Vt,
        price: Ot,
        busy: qt,
        highlight: jt = !1,
        onAct: Xt,
        onNeedRecipient: lt,
        onLogin: Et
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), wt = "superRank" === Vt ? Ft.l.product.days : null, yt = tt => null === wt ? ft(tt ? "general:gift" : "general:buy") : ft(tt ? "store:giftDays" : "store:buyDays", {
        days: wt
      }), Nt = (tt, et) => {
        const Vt = (0, Qt.jsxs)(Qt.Fragment, {
          children: [null === tt && (0, Qt.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== tt && (0, Qt.jsx)("span", {
            className: "StoreCtaLabel",
            title: tt,
            children: tt
          })]
        });
        return null !== wt ? (0, Qt.jsxs)(Qt.Fragment, {
          children: [et && (0, Qt.jsx)("span", {
            className: "StoreCtaIcon",
            children: et
          }), Vt, (0, Qt.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Qt.jsx)(mm.b, {
              amount: Ot
            })]
          })]
        }) : (0, Qt.jsxs)(Qt.Fragment, {
          children: [(0, Qt.jsxs)("span", {
            className: "StoreCtaLead",
            children: [Vt, "\xb7"]
          }), (0, Qt.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [et, (0, Qt.jsx)(mm.b, {
              amount: Ot
            })]
          })]
        })
      };
      let Mt;
      switch (et) {
        case "pending":
          Mt = (0, Qt.jsx)(Ht.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Nt(null)
          });
          break;
        case "login":
          Mt = (0, Qt.jsx)(Ht.m, {
            className: "StoreCtaButton",
            onClick: Et,
            children: Nt(yt(!1))
          });
          break;
        case "owned":
          Mt = (0, Qt.jsx)(Ht.g, {
            className: "StoreCtaButton",
            onClick: () => {
              ht.b.set({
                openEverythingMenuName: ae.o.CUSTOMISATION
              })
            },
            children: (0, Qt.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Qt.jsx)(dt.b, {
                name: "shirt"
              }), " ", ft("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Mt = (0, Qt.jsx)(Ht.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Qt.jsx)("span", {
              className: "StoreCtaLabel",
              children: ft(Jm[et])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Mt = (0, Qt.jsx)(Ht.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === et || null === Ot,
            loading: "lookingUp" === et || qt,
            onClick: Xt,
            analyticsClick: {
              id: "store.gift",
              value: Vt
            },
            children: Nt(yt(!0), oD.d)
          });
          break;
        case "buy":
        case "recharge":
          Mt = (0, Qt.jsx)(Ht.m, {
            className: "StoreCtaButton",
            loading: qt,
            disabled: null === Ot,
            onClick: Xt,
            analyticsClick: {
              id: "store.buy",
              value: Vt
            },
            children: Nt(yt(!1))
          })
      }
      return (0, Qt.jsx)("div", {
        className: Dt()("StoreCta", {
          StoreCtaHighlight: jt,
          StoreCtaLabelFirst: null !== wt
        }),
        onClick: tt => {
          tt.stopPropagation(), "needsRecipient" === et && lt()
        },
        children: Mt
      })
    }

    function um() {
      const {
        t: tt
      } = (0, mt.H)();
      return (0, Qt.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Qt.jsxs)("li", {
          children: [(0, Qt.jsx)(dt.b, {
            name: "check"
          }), (0, Qt.jsx)(bm, {
            text: tt("store:colourfulNames")
          })]
        }), (0, Qt.jsxs)("li", {
          children: [(0, Qt.jsx)(dt.b, {
            name: "check"
          }), tt("store:perkCapes")]
        }), (0, Qt.jsxs)("li", {
          children: [(0, Qt.jsx)(dt.b, {
            name: "check"
          }), tt("store:perkNoAdverts")]
        }), (0, Qt.jsxs)("li", {
          children: [(0, Qt.jsx)(dt.b, {
            name: "check"
          }), tt("store:perkFriends", {
            count: (0, te.b)(["super"])
          })]
        })]
      })
    }

    function Km(tt) {
      let {
        daysLeft: et,
        totalDays: Vt,
        urgent: Ot
      } = tt;
      const {
        t: qt
      } = (0, mt.H)(), dt = Vt > 0 ? Math.min(1, Math.max(.03, et / Vt)) : 1;
      return (0, Qt.jsxs)("div", {
        className: Dt()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Ot
        }),
        children: [(0, Qt.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === et ? qt("store:oneDayLeft") : qt("store:daysLeft", {
            days: et
          })
        }), (0, Qt.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Qt.jsx)("i", {
            style: {
              width: 100 * dt + "%"
            }
          })
        })]
      })
    }

    function hm(tt) {
      var et;
      let {
        state: Vt,
        urgent: Ot,
        daysLeft: qt,
        totalDays: jt,
        recipientHasSuperRank: Ht,
        busy: Xt,
        highlight: lt,
        onOpen: Et,
        onAct: ft,
        onNeedRecipient: wt,
        onLogin: yt
      } = tt;
      const {
        t: Nt
      } = (0, mt.H)(), Mt = am(Vt), {
        days: bt
      } = Ft.l.product, Jt = Nt("store:recipientHasSuperRank", {
        giftDays: bt
      }), Ct = null === (et = st("subscribed" === Vt)) || void 0 === et ? void 0 : et.text;
      return (0, Qt.jsxs)("div", {
        className: Dt()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Mt,
          StoreSuperRankTileUrgent: "recharge" === Vt && Ot,
          StoreSuperRankTileWithChip: Ht,
          StoreSuperRankTileGiftReady: "gift" === Vt
        }),
        ...Mm(Nt("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: Qm,
        onFocus: Qm,
        onClick: Et,
        children: [(0, Qt.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${gD.c})`
          }
        }), Mt && (0, Qt.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Qt.jsxs)("div", {
          className: "StoreTileContent",
          children: [Ht && (0, Qt.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Jt,
            children: Jt
          }), (0, Qt.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Qt.jsx)(dt.b, {
              name: "bolt"
            }), " ", Nt("homePage:superRank")]
          }), Mt && (0, Qt.jsx)("div", {
            className: "StoreTilePitch",
            children: Nt("store:giftPitch", {
              days: bt
            })
          }), "recharge" === Vt && (0, Qt.jsx)(Km, {
            daysLeft: qt,
            totalDays: jt,
            urgent: Ot
          }), Ct && (0, Qt.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Qt.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Ct
            })
          }), (0, Qt.jsx)(um, {}), (0, Qt.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Qt.jsx)(Cm, {
              state: Vt,
              item: "superRank",
              price: Ft.l.price,
              busy: Xt,
              highlight: lt,
              onAct: ft,
              onNeedRecipient: wt,
              onLogin: yt
            }), "needsRecipient" === Vt && (0, Qt.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Nt("store:pickRecipientFirst")
            }), "recharge" === Vt && Ot && (0, Qt.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === qt ? Nt("store:endsInOneDay") : Nt("store:endsInDays", {
                days: qt
              })
            })]
          })]
        })]
      })
    }
    const Wm = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Sm(tt) {
      var et;
      let {
        pack: Vt,
        state: qt,
        busy: jt,
        onOpen: Ht,
        onAct: Xt,
        onNeedRecipient: lt,
        onLogin: Et
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), wt = RD.d[Vt], yt = GD.k[Vt], Nt = (0, gD.i)(Vt), Mt = (0, Ot.useRef)(null);
      (0, wm.n)(Vt, Mt);
      const bt = am(qt),
        Jt = null !== (et = wt.displayName) && void 0 !== et ? et : Vt,
        Ct = (0, fm.d)((() => {
          (0, Em.h)();
          const tt = (0, wm.i)(Vt);
          void 0 !== tt && (0, Hm.h)((0, wm.e)(tt))
        })),
        [ut] = (0, Ot.useState)(xD.f);
      return (0, Qt.jsxs)("div", {
        className: Dt()("StoreTile StorePackTile", Wm[wt.tier], {
          StorePackTileOwned: "owned" === qt,
          StorePackTileRecipientOwns: "recipientOwns" === qt,
          StoreTileGift: bt
        }),
        ...Mm(Jt),
        ref: Mt,
        "data-store-item": Vt,
        onClick: Ht,
        onPointerMove: tt => {
          "mouse" !== tt.pointerType || 0 === tt.movementX && 0 === tt.movementY || ut || Ct.start()
        },
        onPointerLeave: Ct.cancel,
        children: [yt && (0, Qt.jsx)(yt, {}), (0, Qt.jsx)("div", {
          className: "StorePackCharacters",
          children: Nt.map((tt => (0, Qt.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,gD.d)(tt)})`
            }
          }, tt)))
        }), (0, Qt.jsx)("div", {
          className: "StoreTileScrim"
        }), bt && (0, Qt.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Qt.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Qt.jsx)("div", {
            className: "StoreTileTitle",
            children: Jt
          }), (0, Qt.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Qt.jsx)(ym.c, {
              tier: wt.tier
            }), " \xb7 ", ft("store:itemCount", {
              count: (0, Dm.h)(Vt)
            }), "owned" === qt && (0, Qt.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Qt.jsx)(dt.b, {
                name: "check"
              }), " ", ft("general:owned")]
            })]
          }), (0, Qt.jsx)(Cm, {
            state: qt,
            item: Vt,
            price: (0, Ft.e)(Vt),
            busy: jt,
            onAct: Xt,
            onNeedRecipient: lt,
            onLogin: Et
          })]
        })]
      })
    }
    var cm = Vt(3142),
      Rm = Vt(1648),
      Im = Vt(1566),
      Pm = Vt(3630);

    function Zm() {
      return (0, Qt.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Lm = Vt(1441),
      Fm = Vt(1657),
      km = Vt(34412);

    function Gm(tt) {
      let {
        character: et,
        drawn: Vt,
        onDrawn: qt
      } = tt;
      const mt = (0, Ot.useRef)(null),
        dt = (0, km.h)(et);
      return (0, Qt.jsx)("div", {
        className: Dt()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Vt
        }),
        children: (0, Qt.jsx)(Ot.Suspense, {
          fallback: null,
          children: (0, Qt.jsx)(Em.d, {
            ref: mt,
            framing: "store",
            turntableFromYaw: Vt ? dt.yaw : null,
            onReady: () => {
              var tt, Vt;
              null === (tt = mt.current) || void 0 === tt || tt.setOrbit(dt), null === (Vt = mt.current) || void 0 === Vt || Vt.setAllCosmetics(Fm.d[et].cosmetics)
            },
            onDrawn: qt
          })
        })
      })
    }
    const zm = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      om = new Set(["wildSpirits"]);

    function rm(tt) {
      var et;
      let {
        tile: Vt,
        design: qt,
        canGoLive: jt,
        live: Ht,
        busy: Xt,
        highlight: lt,
        onLiveStart: Et,
        onLiveEnd: ft,
        onOpen: wt,
        onAct: yt,
        onNeedRecipient: Nt,
        onLogin: Mt
      } = tt;
      const {
        t: bt
      } = (0, mt.H)(), {
        pack: Jt,
        state: Ct
      } = Vt, ut = RD.d[Jt], Kt = (0, RD.f)(Jt), ht = (0, gD.e)(Jt), vt = GD.k[ht], Wt = om.has(ht), {
        tier: St
      } = ut, ct = "legendary" === St || "mythic" === St, Rt = (0, Ot.useRef)(null);
      (0, Lm.e)(Rt, "epic" === St || ct || Wt);
      const [It, Zt] = (0, Ot.useState)(!1);
      return !Ht && It && Zt(!1), (0, Qt.jsxs)("div", {
        ref: Rt,
        className: Dt()("StoreCharacterCard", `StoreCharacterCard${qt}`, zm[St], {
          StoreCharacterCardOwned: "owned" === Ct || "recipientOwns" === Ct,
          StoreCharacterCardGift: am(Ct),
          StoreCharacterCardItem: void 0 === Kt
        }),
        onPointerMove: tt => {
          "mouse" !== tt.pointerType || 0 === tt.movementX && 0 === tt.movementY || !jt || Ht || void 0 === Kt || Et()
        },
        onPointerLeave: ft,
        children: [(0, Qt.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: vt && (0, Qt.jsx)(vt, {
            simple: !0
          })
        }), ct && (0, Qt.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Qt.jsxs)(Pt.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Rm.g)({
            kind: "pack",
            pack: Jt
          }),
          "data-store-item": Jt,
          onClick: tt => {
            (0, Im.e)(tt) && (tt.preventDefault(), wt())
          },
          children: [(0, Qt.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Qt.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Qt.jsx)("div", {
              className: Dt()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: It
              }),
              style: {
                backgroundImage: `url(${(0,gD.n)(Jt)})`
              }
            }), Ht && void 0 !== Kt && (0, Qt.jsx)(Gm, {
              character: Kt,
              drawn: It,
              onDrawn: () => {
                Zt(!0)
              }
            })]
          }), (0, Qt.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (et = ut.displayName) && void 0 !== et ? et : Jt
          }), (0, Qt.jsx)(ym.c, {
            tier: St,
            className: "StoreCharacterTier"
          })]
        }), (0, Qt.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Wt && (0, Qt.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Qt.jsx)(Zm, {})
        }), "owned" === Ct && (0, Qt.jsx)("span", {
          className: "StoreCharacterOwned",
          title: bt("general:owned"),
          "aria-label": bt("general:owned"),
          children: (0, Qt.jsx)(dt.b, {
            name: "check"
          })
        }), (0, Qt.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Qt.jsx)(Cm, {
            state: Ct,
            item: Jt,
            price: (0, Ft.e)(Jt),
            busy: Xt,
            highlight: lt,
            onAct: yt,
            onNeedRecipient: Nt,
            onLogin: Mt
          })
        })]
      })
    }

    function Um(tt) {
      let {
        tiles: et,
        busy: Vt,
        highlightItem: qt,
        onOpen: Dt,
        onAct: mt,
        onNeedRecipient: dt,
        onLogin: jt
      } = tt;
      const Ht = (0, Pm.u)("storeCharacterCardFoil"),
        Xt = (0, Pm.u)("storeCharacterCardSpotlight"),
        lt = Ht ? "Foil" : Xt ? "Spotlight" : "Showcase",
        [Et] = (0, Ot.useState)(xD.f),
        [ft, wt] = (0, Ot.useState)(null);
      return (0, Qt.jsx)("div", {
        className: "StoreCharacterGrid",
        children: et.map((tt => (0, Qt.jsx)(rm, {
          tile: tt,
          design: lt,
          canGoLive: !Et,
          live: ft === tt.pack,
          busy: Vt,
          highlight: qt === tt.pack,
          onLiveStart: () => {
            wt(tt.pack)
          },
          onLiveEnd: () => {
            wt((et => et === tt.pack ? null : et))
          },
          onOpen: () => {
            Dt(tt.pack)
          },
          onAct: () => {
            mt(tt.pack)
          },
          onNeedRecipient: dt,
          onLogin: () => {
            jt(tt.pack)
          }
        }, tt.pack)))
      })
    }
    var Am = Vt(34423);

    function im(tt) {
      let {
        title: et
      } = tt;
      return (0, Qt.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Qt.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: et
        })
      })
    }

    function Ym(tt) {
      let {
        mountAtOnce: et,
        children: Vt
      } = tt;
      const qt = (0, Ot.useRef)(null),
        [Dt, mt] = (0, Ot.useState)(et),
        dt = (0, Am.e)();
      return (0, Ot.useLayoutEffect)((() => {
        const tt = qt.current;
        tt && tt.getBoundingClientRect().top < tt.parentElement.getBoundingClientRect().bottom && mt(!0)
      }), []), Dt || dt ? (0, Qt.jsx)(Qt.Fragment, {
        children: Vt
      }) : (0, Qt.jsx)("div", {
        ref: qt
      })
    }

    function Bm(tt) {
      let {
        layout: et,
        mountAtOnce: Vt,
        bundleGift: Ot,
        superRankTotalDays: qt,
        busy: Dt,
        highlightItem: dt,
        onOpen: jt,
        onAct: Ht,
        onNeedRecipient: Xt,
        onLogin: lt,
        dailyDropTile: Et
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), wt = et.packs.filter((tt => void 0 === (0, RD.f)(tt.pack) && !(0, RD.i)(tt.pack))), yt = et.packs.filter((tt => void 0 !== (0, RD.f)(tt.pack))), Nt = et.packs.filter((tt => (0, RD.i)(tt.pack)));
      return (0, Qt.jsxs)(Qt.Fragment, {
        children: [(0, Qt.jsx)(cm.c, {
          className: "StoreSuperGems",
          gift: Ot,
          highlightSku: dt,
          leadingTile: Et
        }), (0, Qt.jsx)(im, {
          title: ft("store:rank")
        }), (0, Qt.jsx)(hm, {
          state: et.superRank.state,
          urgent: et.superRank.urgent,
          daysLeft: et.superRankDaysLeft,
          totalDays: qt,
          recipientHasSuperRank: et.recipientHasSuperRank,
          busy: Dt,
          highlight: "superRank" === dt,
          onOpen: () => {
            jt("superRank")
          },
          onAct: () => {
            Ht("superRank")
          },
          onNeedRecipient: Xt,
          onLogin: () => {
            lt("superRank")
          }
        }), (0, Qt.jsxs)(Ym, {
          mountAtOnce: Vt,
          children: [(0, Qt.jsx)(im, {
            title: ft("store:bundles")
          }), (0, Qt.jsx)("div", {
            className: "StorePackGrid",
            children: wt.map((tt => (0, Qt.jsx)(Sm, {
              pack: tt.pack,
              state: tt.state,
              busy: Dt,
              onOpen: () => {
                jt(tt.pack)
              },
              onAct: () => {
                Ht(tt.pack)
              },
              onNeedRecipient: Xt,
              onLogin: () => {
                lt(tt.pack)
              }
            }, tt.pack)))
          }), (0, Qt.jsxs)(Ym, {
            mountAtOnce: Vt,
            children: [(0, Qt.jsx)(im, {
              title: ft("store:characters")
            }), (0, Qt.jsx)(Um, {
              tiles: yt,
              busy: Dt,
              highlightItem: dt,
              onOpen: jt,
              onAct: Ht,
              onNeedRecipient: Xt,
              onLogin: lt
            }), Nt.length > 0 && (0, Qt.jsxs)(Qt.Fragment, {
              children: [(0, Qt.jsx)(im, {
                title: ft("store:premiumItems")
              }), (0, Qt.jsx)(Um, {
                tiles: Nt,
                busy: Dt,
                highlightItem: dt,
                onOpen: jt,
                onAct: Ht,
                onNeedRecipient: Xt,
                onLogin: lt
              })]
            })]
          })]
        })]
      })
    }

    function pm(tt) {
      let {
        state: et,
        mode: Vt,
        giftName: Ot,
        busy: qt,
        highlight: Dt,
        purchaseError: dt,
        onBack: jt,
        onChooseRecipient: Xt,
        onAct: lt,
        onLogin: Et
      } = tt;
      const {
        t: ft
      } = (0, mt.H)(), wt = st("gift" !== Vt);
      return (0, Qt.jsx)(lm, {
        onBack: jt,
        recipient: "gift" === Vt && (0, Qt.jsxs)(Qt.Fragment, {
          children: [Ot && (0, Qt.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: ft("store:giftFor", {
              name: Ot
            }),
            children: [oD.d, " ", ft("store:giftFor", {
              name: Ot
            })]
          }), !Ot && (0, Qt.jsxs)("div", {
            ...(0, Ht.X)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Xt,
            children: [oD.d, " ", ft("store:chooseRecipient")]
          })]
        }),
        cta: (0, Qt.jsx)(Cm, {
          state: et,
          item: "superRank",
          price: Ft.l.price,
          busy: qt,
          highlight: Dt,
          onAct: lt,
          onNeedRecipient: Xt,
          onLogin: Et
        }),
        afterCta: (0, Qt.jsxs)(Qt.Fragment, {
          children: [wt && (0, Qt.jsx)("span", {
            className: "StoreTileNote",
            children: wt.text
          }), (null === wt || void 0 === wt ? void 0 : wt.manageUrl) && (0, Qt.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: wt.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: ft("payments:manageSubscription")
          }), dt && (0, Qt.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: ft(dt)
          })]
        })
      })
    }
    var xm = Vt(164);
    const Tm = xm.n("kind", [xm.F({
      kind: xm.v("refused"),
      heldTierId: xm.$(),
      until: xm.C()
    }), xm.F({
      kind: xm.v("refund"),
      tierId: xm.$(),
      refundedMs: xm.C(),
      forfeitedMs: xm.C(),
      premiumCurrency: xm.C()
    }), xm.F({
      kind: xm.v("none")
    })]);
    async function gm(tt) {
      const et = await (0, ct.postJsonWithMetricsCookiesAndJsonResponse)(`${ye.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: tt
      }, {
        retries: 1
      });
      return Tm.parse(et)
    }
    var sm = Vt(3121),
      nm = Vt(3145);

    function td(tt, et) {
      const Vt = Math.max(1, Math.round(et / zt.l));
      return [1 === Vt ? `${tt}OneDay` : tt, {
        days: Vt.toLocaleString()
      }]
    }

    function ed(tt) {
      let {
        price: et
      } = tt;
      const {
        t: Vt
      } = (0, mt.H)();
      return (0, Qt.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, Qt.jsx)(um, {}), (0, Qt.jsx)("div", {
          className: "SmallTextLight",
          children: Vt("payments:subscriptionRenewsMonthly", {
            price: et
          })
        }), (0, Qt.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, Qt.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: Vt("homePage:termsOfService")
          }), (0, Qt.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: Vt("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function Vd() {
      const tt = (0, rt.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && tt && (0, rt.subscriptionsSold)() ? (0, Qt.jsx)(Od, {}) : null
    }

    function Od() {
      const {
        t: tt
      } = (0, mt.H)(), {
        userContext: et
      } = (0, ft.d)(), {
        purchaseUnderWay: Vt,
        notice: qt,
        subscribe: Dt
      } = (0, sm.c)(), [dt, jt] = (0, Ot.useState)(null), [Xt, lt] = (0, Ot.useState)(0), [Et, wt] = (0, Ot.useState)(!1), yt = (0, Ot.useRef)(!0), Mt = et !== ct.NULL_USER_CONTEXT, bt = null !== dt && dt.loadedFor === et ? dt.offer : null, Jt = null === qt || void 0 === qt ? void 0 : qt.pendingIntentId, Ct = (0, Ot.useRef)(Jt);

      function ut() {
        lt((tt => tt + 1))
      }
      async function Kt(tt) {
        wt(!1), await Dt(tt), yt.current && ut()
      }
      if ((0, Ot.useEffect)((() => (yt.current = !0, () => {
          yt.current = !1
        })), []), (0, Ot.useEffect)((() => {
          void 0 !== Ct.current && void 0 === Jt && ut(), Ct.current = Jt
        }), [Jt]), (0, Ot.useEffect)((() => {
          if (!Mt) return;
          let tt = !1;
          return wt(!1), async function() {
            const {
              offering: tt
            } = await (0, Tt.getBillingClient)().getOfferings("superRankPage"), et = null === tt || void 0 === tt ? void 0 : tt.packages.find(ID.isPricedPackage);
            return void 0 === et ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: et,
              preview: await gm(et.productId)
            }
          }().catch((tt => (console.error("Billing: loading the Super Rank subscription or its preview failed:", tt), {
            kind: "loadFailed"
          }))).then((Vt => {
            tt || jt((tt => "loadFailed" === Vt.kind && (null === tt || void 0 === tt ? void 0 : tt.loadedFor) === et ? tt : {
              loadedFor: et,
              offer: Vt
            }))
          })), () => {
            tt = !0
          }
        }), [et, Mt, Xt]), null === bt) return null;
      if ("loaded" !== bt.kind) return (0, Qt.jsx)(nm.f, {
        notice: {
          kind: "error",
          key: "unavailable" === bt.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: ht,
        preview: vt
      } = bt;
      if ("refused" === vt.kind) return (0, Qt.jsx)(nm.f, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(vt.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const Wt = (0, cm.f)(ht),
        St = (0, Nt.isMobileApp)() && (0, Qt.jsx)(ed, {
          price: Wt
        });
      if (Et && "refund" === vt.kind) {
        const {
          refundedMs: et,
          forfeitedMs: Ot,
          premiumCurrency: qt
        } = vt, Dt = Ot + (0 === qt ? et : 0), [mt, dt] = td("payments:subscribeRefundsGemRank", et), [jt, Xt] = td("payments:subscribeForfeitsGemRank", Dt);
        return (0, Qt.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Qt.jsx)("div", {
            children: tt("payments:subscribeEndsGemRank")
          }), qt > 0 && (0, Qt.jsx)("div", {
            children: tt(mt, {
              ...dt,
              amount: qt.toLocaleString()
            })
          }), Dt > 0 && (0, Qt.jsx)("div", {
            children: tt(jt, Xt)
          }), (0, Qt.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Qt.jsx)(Ht.g, {
              onClick: () => {
                wt(!1)
              },
              children: tt("general:cancel")
            }), (0, Qt.jsx)(Ht.m, {
              onClick: () => {
                Kt(ht)
              },
              loading: Vt,
              children: tt("payments:subscribeContinue", {
                price: Wt
              })
            })]
          }), St]
        })
      }
      return (0, Qt.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Qt.jsx)(nm.f, {
          notice: qt,
          className: "SmallTextBold"
        }), (0, Qt.jsx)(nm.d, {
          className: "SmallTextBold"
        }), (0, Qt.jsx)(Ht.m, {
          onClick: () => {
            "refund" === vt.kind ? wt(!0) : Kt(ht)
          },
          disabled: void 0 !== Jt,
          loading: Vt,
          children: tt("payments:subscribeToSuperRank", {
            price: Wt
          })
        }), St]
      })
    }
    var qd = Vt(2656);

    function Dd(tt) {
      let {
        state: et,
        view: Vt,
        claiming: qt,
        onOpen: dt
      } = tt;
      const {
        t: Xt
      } = (0, mt.H)(), lt = (0, Ot.useRef)(null), Et = "ready" === Vt.kind;
      (0, Lm.e)(lt, Et);
      const ft = (0, ge.m)(et);
      return (0, Qt.jsxs)("div", {
        ref: lt,
        className: Dt()("DailyDropTile", {
          DailyDropTileReady: Et
        }),
        children: [Et && (0, Qt.jsx)(jt.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, Qt.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Xt("dailyDrop:name")
        }), (0, Qt.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, Qt.jsx)(qd.c, {
            className: "DailyDropTileBlock"
          }), (0, Qt.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, Qt.jsx)("span", {
              children: Xt("dailyDrop:collected", {
                count: et.collected.length,
                total: et.total
              })
            }), null !== ft && (0, Qt.jsx)("span", {
              className: "DailyDropTileOdds",
              children: Xt("dailyDrop:odds", {
                percent: ft.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === Vt.kind && (0, Qt.jsx)(Ht.m, {
          className: "DailyDropTileOpen",
          onClick: dt,
          loading: qt,
          children: Xt("dailyDrop:open")
        }), "waiting" === Vt.kind && (0, Qt.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Xt("dailyDrop:nextIn", {
            count: Vt.hours
          })
        })]
      })
    }
    var md = Vt(2290);
    const dd = 32;

    function jd(tt) {
      let {
        worn: et,
        kD: Vt,
        GD: qt,
        className: jt
      } = tt;
      const {
        t: Ht
      } = (0, mt.H)(), Xt = (0, Ot.useRef)(null), [lt, Et] = (0, Ot.useState)(null), [ft, wt] = (0, Ot.useState)(!1);
      async function yt() {
        var tt;
        const et = Xt.current;
        if (!et) return;
        const Ot = null === (tt = et.getDevTools()) || void 0 === tt ? void 0 : tt.canvas();
        let Dt = null;
        try {
          Dt = Ot ? function(tt) {
            if (0 === tt.width || 0 === tt.height) return null;
            const et = document.createElement("canvas");
            et.width = dd, et.height = dd;
            const Vt = et.getContext("2d", {
              willReadFrequently: !0
            });
            if (!Vt) return null;
            Vt.drawImage(tt, 0, 0, dd, dd);
            const {
              data: Ot
            } = Vt.getImageData(0, 0, dd, dd);
            for (let qt = 3; qt < Ot.length; qt += 4)
              if (Ot[qt] > 0) return tt.toDataURL("image/png");
            return null
          }(Ot) : null
        } catch (dt) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", dt)
        }
        null === Dt && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), Et(null === Dt ? {
          kind: "head"
        } : {
          kind: "still",
          src: Dt
        }), et.updateCosmetic(Vt, qt);
        const mt = new Promise((tt => {
          setTimeout(tt, 1e4)
        }));
        await Promise.race([et.ensureReadyForCapture(Vt), mt]).catch((tt => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", tt)
        })), Xt.current === et && wt(!0)
      }
      return (0, Qt.jsxs)("div", {
        className: Dt()("DailyDropRevealFigures", jt),
        children: [(0, Qt.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, Qt.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === lt || void 0 === lt ? void 0 : lt.kind) && (0, Qt.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: lt.src,
              alt: "",
              draggable: !1
            }), "head" === (null === lt || void 0 === lt ? void 0 : lt.kind) && (0, Qt.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, Qt.jsx)(nD.c, {
                cosmetics: et
              })
            }), null === lt && (0, Qt.jsx)(ut.b, {})]
          }), (0, Qt.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Ht("dailyDrop:before")
          })]
        }), (0, Qt.jsx)(dt.b, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, Qt.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, Qt.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, Qt.jsx)("div", {
              className: Dt()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: ft
              }),
              children: (0, Qt.jsx)(Ot.Suspense, {
                fallback: null,
                children: (0, Qt.jsx)(Em.d, {
                  ref: Xt,
                  onReady: () => {
                    var tt, Vt;
                    null === (tt = Xt.current) || void 0 === tt || tt.resetCamera(), null === (Vt = Xt.current) || void 0 === Vt || Vt.setAllCosmetics(et)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      yt()
                    }))
                  }
                })
              })
            }), !ft && (0, Qt.jsx)(ut.b, {})]
          }), (0, Qt.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Ht("dailyDrop:after")
          })]
        })]
      })
    }
    var Hd = Vt(1950);
    const Xd = "dailyDropReminderAsked_";

    function Qd(tt) {
      return async function(tt) {
        if (tt.remindersOn || (0, ht.c)(ht.b.get("gameState"))) return null;
        const et = await ct.userContextManager.getCurrentUserContext(),
          Vt = Xd + et.whamm;
        if (null !== QV.e.getItem(Vt)) return null;
        const [Ot, qt] = await Promise.all([(0, Be.g)().catch((tt => (console.error("Couldn't tell whether this device can take push notifications:", tt), null))), Ed()]);
        if (null === Ot && !qt) return null;
        return {
          askedKey: Vt,
          requester: Ot
        }
      }(tt).catch((tt => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", tt), null)))
    }

    function ld(tt, et) {
      QV.e.setItem(tt.askedKey, !0), (0, ge.z)("daily_drop.remind", et ? "yes" : "no"), et && async function(tt) {
        const et = (0, ge.D)({
            remindersOn: !0
          }),
          Vt = null === tt ? Promise.resolve() : tt(),
          [Ot, qt] = await Promise.allSettled([et, Vt]);
        "rejected" === Ot.status && console.error("Failed to turn on Lucky Skin Block reminders:", Ot.reason);
        "rejected" === qt.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", qt.reason);
        "rejected" !== Ot.status && "rejected" !== qt.status || Hd.f.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(tt.requester)
    }

    function Ed() {
      return (0, Ye.d)().then((tt => tt.app + tt.browser + tt.msnPlay > 0), (tt => (console.error("Couldn't tell where push notifications reach this account:", tt), !0)))
    }
    const fd = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      wd = {
        opening: 900,
        shrinking: 700
      };

    function yd(tt) {
      let {
        drop: et,
        onClose: Vt
      } = tt;
      const {
        t: qt
      } = (0, mt.H)(), {
        userContext: jt
      } = (0, ft.d)(), {
        state: Xt,
        view: lt
      } = (0, ge.H)(), [Et, wt] = (0, Ot.useState)("closed"), [yt] = (0, Ot.useState)((() => ({
        ...jt.getPlayerCosmetics()
      }))), [Nt] = (0, Ot.useState)((() => (0, ge.p)(et, yt))), [Mt, bt] = (0, Ot.useState)(!1), [Jt, Ct] = (0, Ot.useState)(!1), [ut] = (0, Ot.useState)((() => null === Xt ? Promise.resolve(null) : Qd(Xt))), [Kt, vt] = (0, Ot.useState)(null), Wt = (0, pe.b)(), {
        gameState: St
      } = (0, ht.k)(["gameState"]);
      async function ct() {
        const tt = await ut;
        Wt.current && (null === tt ? Vt() : (vt(tt), wt("remind")))
      }

      function Rt(tt) {
        null !== Kt && ld(Kt, tt), Vt()
      }(0, Ot.useEffect)((() => {
        const tt = wd[Et];
        if (void 0 === tt) return;
        const et = setTimeout((() => {
          wt(fd[Et])
        }), tt);
        return () => {
          clearTimeout(et)
        }
      }), [Et]);
      const It = qt(`dailyDrop:kind_${Nt.kD}`),
        Pt = Xt && qt("dailyDrop:collected", {
          count: Xt.collected.length,
          total: Xt.total
        }),
        Zt = "revealed" === Et || "shrinking" === Et,
        Lt = "equip" !== Et && "remind" !== Et;
      return (0, Qt.jsx)(zO.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === Et ? () => {
          Rt(!1)
        } : Vt,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, Qt.jsxs)("div", {
          className: Dt()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === Et,
            DailyDropRevealShrinking: "shrinking" === Et,
            DailyDropRevealFiguresShown: "shrinking" === Et || "equip" === Et || "remind" === Et
          }),
          children: [(0, Qt.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, Qt.jsx)(jd, {
              className: "DailyDropRevealStageFigures",
              worn: yt,
              kD: Nt.kD,
              GD: Nt.GD
            }), ("closed" === Et || "opening" === Et) && (0, Qt.jsx)(qd.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === Et
            }), Zt && (0, Qt.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, Qt.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,md.n)(Nt.kD,Nt.GD).previewTex}.png`,
                alt: It,
                draggable: !1
              })
            })]
          }), Lt && (0, Qt.jsxs)(Qt.Fragment, {
            children: [(0, Qt.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, Qt.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: Zt ? It : qt("dailyDrop:name")
              }), "closed" === Et && (0, Qt.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: qt("dailyDrop:tapToOpen")
              }), "revealed" === Et && (0, Qt.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: qt("dailyDrop:tapToContinue")
              })]
            }), (0, Qt.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": qt("closed" === Et ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                wt(fd[Et])
              }
            })]
          }), "equip" === Et && (0, Qt.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Qt.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: It
            }), (0, Qt.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: qt("dailyDrop:equipQuestion")
            }), (0, Qt.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Qt.jsx)(Ht.f, {
                className: "DailyDropRevealButton",
                disabled: Mt,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, ge.z)("daily_drop.not_now", et), ct()
                },
                children: qt("dailyDrop:notNow")
              }), (0, Qt.jsx)(Ht.f, {
                className: "DailyDropRevealButton",
                loading: Mt,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, ge.z)("daily_drop.equip", et), bt(!0), Ct(!1);
                    try {
                      await (0, ge.i)(jt, Nt.kD, Nt.GD)
                    } catch (tt) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", tt), bt(!1), void Ct(!0)
                    }
                    await ct()
                  }()
                },
                children: qt("dailyDrop:equip")
              })]
            }), Jt && (0, Qt.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: qt("dailyDrop:equipFailed")
            }), !(0, ht.c)(St) && (0, Qt.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: Mt,
              onClick: () => {
                var tt;
                (0, ge.z)("daily_drop.customise", et), tt = Nt.kD, HV.j.sw(ZO, tt), ht.b.set({
                  openEverythingMenuName: ae.o.CUSTOMISATION
                }), Vt()
              },
              children: [qt("dailyDrop:customise"), " ", (0, Qt.jsx)(dt.b, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), Pt && (0, Qt.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [Pt, "waiting" === (null === lt || void 0 === lt ? void 0 : lt.kind) && ` \xb7 ${qt("dailyDrop:nextInInline",{count:lt.hours})}`]
            })]
          }), "remind" === Et && (0, Qt.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Qt.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: qt("dailyDrop:remindTitle")
            }), (0, Qt.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: qt("dailyDrop:remindSubtitle")
            }), (0, Qt.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Qt.jsx)(Ht.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  Rt(!1)
                },
                children: qt("dailyDrop:remindNo")
              }), (0, Qt.jsx)(Ht.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  Rt(!0)
                },
                children: qt("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function Nd(tt, et) {
      const {
        t: Vt
      } = (0, mt.H)(), qt = function(tt, et) {
        const {
          state: Vt,
          view: qt
        } = (0, ge.H)(), [Dt, mt] = (0, Ot.useState)(!1), [dt, jt] = (0, Ot.useState)(!1), [Ht, Xt] = (0, Ot.useState)(null), Qt = (0, Ot.useRef)(null), lt = (0, Ot.useRef)(!1), Et = et && "ready" === (null === qt || void 0 === qt ? void 0 : qt.kind);
        (0, Ot.useEffect)((() => {
          tt ? Et && !lt.current && (lt.current = !0, (0, ge.z)("daily_drop.shown", "tile")) : lt.current = !1
        }), [tt, Et]), (0, Ot.useEffect)((() => {
          tt || (Nt(), jt(!1))
        }), [tt]);
        const ft = tt && null === Ht && !(0, ge.v)(qt);
        (0, Ot.useEffect)((() => {
          ft && ht.b.set({
            openEverythingMenuName: ae.o.CUSTOMISATION
          })
        }), [ft]);
        const wt = (0, Ot.useRef)(!1),
          yt = (0, Ot.useRef)(tt);

        function Nt() {
          null !== Qt.current && (Qt.current = null, Xt(null))
        }
        return yt.current = tt, {
          state: Vt,
          view: qt,
          claiming: Dt,
          claimFailed: dt,
          reveal: Ht,
          open: async function() {
            if (!wt.current) {
              wt.current = !0, mt(!0), jt(!1);
              try {
                const {
                  state: tt,
                  drop: et
                } = await (0, ge.e)();
                if (null === tt || null === et) return;
                if (!yt.current) return;
                (0, ge.z)("daily_drop.open", et), Qt.current = {
                  state: tt,
                  drop: et
                }, Xt(Qt.current)
              } catch (tt) {
                console.error("Failed to claim the Lucky Skin Block", tt), yt.current && jt(!0)
              } finally {
                wt.current = !1, mt(!1)
              }
            }
          },
          closeReveal: Nt
        }
      }(tt, et);
      return {
        shown: (0, ge.v)(qt.view) || null !== qt.reveal,
        tile: qt.state && qt.view && (0, Qt.jsx)(Dd, {
          state: qt.state,
          view: qt.view,
          claiming: qt.claiming,
          onOpen: qt.open
        }),
        claimFailed: qt.claimFailed && (0, Qt.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Vt("dailyDrop:claimFailed")
        }),
        reveal: qt.reveal && (0, Qt.jsx)(yd, {
          drop: qt.reveal.drop,
          onClose: qt.closeReveal
        })
      }
    }

    function Md(tt) {
      let {
        show: et
      } = tt;
      const Vt = Nd(et, et);
      return et && Vt.shown ? (0, Qt.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [Vt.claimFailed, Vt.tile && (0, Qt.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: Vt.tile
        }), Vt.reveal]
      }) : null
    }
    const bd = {
      kind: "board"
    };
    let Jd = !1;

    function Cd(tt) {
      return "found" === tt.status || "error" === tt.status && "store:giftRecipientLookupFailed" === tt.error ? tt.name : null
    }(0, ot.t)(ID.prefetchBillingOfferings);
    const ud = (0, Ot.memo)((function(tt) {
      var et;
      let {
        show: qt
      } = tt;
      const {
        t: dt
      } = (0, mt.H)(), {
        userContext: jt
      } = (0, ft.d)(), Ht = (0, rt.usePurchasesAllowed)(), Xt = jt !== ct.NULL_USER_CONTEXT, lt = iD(jt), [Et, wt] = (0, yt.c)(), {
        page: Nt,
        urlMode: Mt,
        goTo: bt
      } = (0, YD.d)(), Jt = function(tt) {
        return "superRank" === tt.kind ? "superRank" : "pack" === tt.kind ? tt.pack : null
      }(Nt), {
        openEverythingMenuName: Ct,
        gameState: ut
      } = (0, ht.k)(["openEverythingMenuName", "gameState"]), Kt = null !== Ct;
      ! function(tt, et) {
        const [qt] = (0, Ot.useState)(xD.f), [Dt, mt] = (0, Ot.useState)(!1);
        qt && et && !Dt && mt(!0);
        const dt = (0, KO.v)(),
          jt = qt && Dt && tt && !dt;
        (0, Ot.useEffect)((() => {
          if (!jt) return;
          let tt = null,
            et = null,
            Ot = null;
          const qt = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Tt.getBillingClient)().purchaseUnderWay,
            Dt = () => {
              var Vt;
              null === (Vt = Ot) || void 0 === Vt || Vt(), Ot = null, null !== tt && (clearTimeout(tt), tt = null), null !== et && (clearTimeout(et), et = null)
            },
            mt = () => {
              (0, BD.r)(!1), (0, BD.p)(!1), Dt(), tt = setTimeout((() => {
                tt = null, Ot = (0, pD.c)((() => {
                  Ot = null, qt() ? mt() : ((0, BD.r)(!0), et = setTimeout((() => {
                    et = null, Ot = (0, pD.c)((() => {
                      Ot = null, qt() ? mt() : (0, BD.p)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Vt(4802))).then((tt => {
                    tt.startBackgroundGameSetup()
                  }), (tt => {
                    console.warn("Background game setup: its chunk failed to load", tt)
                  })))
                }))
              }), 2e3)
            };
          for (const Vt of TD) window.addEventListener(Vt, mt, {
            capture: !0,
            passive: !0
          });
          return mt(), () => {
            for (const tt of TD) window.removeEventListener(tt, mt, {
              capture: !0
            });
            Dt(), (0, BD.r)(!1), (0, BD.p)(!1)
          }
        }), [jt])
      }(qt && Kt, "pack" === Nt.kind);
      const vt = "landingPage" === ut;
      (0, Ot.useEffect)((() => {
        Kt && (0, ID.prefetchBillingOfferings)()
      }), [Kt]), (0, Ot.useEffect)((() => {
        Kt && !qt && vt && (0, gD.q)()
      }), [Kt, qt, vt]);
      const [Wt, St] = (0, Ot.useState)(0), [Rt, It] = (0, Ot.useState)(null), [Pt, Zt] = (0, Ot.useState)(null), [Lt, kt] = (0, Ot.useState)(null), [Gt, zt] = (0, Ot.useState)(null), Ut = (0, Ot.useRef)(null), At = (0, Ot.useRef)(null), it = (0, Ot.useRef)(null), Yt = (0, Ot.useRef)(!1), Bt = (0, ot.B)(), pt = (0, Ot.useRef)(0), xt = (0, Ot.useRef)(!1);

      function gt() {
        St((tt => tt + 1))
      }(0, Ot.useEffect)((() => {
        if (qt) {
          if (Jd = !0, (0, ot.h)(), Bt && Bt.seq !== pt.current) {
            var tt;
            pt.current = Bt.seq, "loginResume" !== Bt.source && (0, ot.y)();
            const et = (0, ot.b)(Bt);
            Mt || bt(et), zt(null !== (tt = Bt.highlight) && void 0 !== tt ? tt : null), Zt(null), "gift" === Bt.mode && Bt.giftRecipientName ? lt.choose(Bt.giftRecipientName, "prefilled") : "current" !== Bt.mode && lt.clear(), "gift" !== Bt.mode || Bt.giftRecipientName || gt(), (0, Ve.reportAnalyticsClick)({
              id: "store.open",
              value: Bt.source
            })
          } else xt.current || (0, Ve.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          xt.current = !0
        } else xt.current = !1
      }), [qt, Bt]), (0, Ot.useEffect)((() => {
        if (!Gt) return;
        const tt = setTimeout((() => {
          zt(null)
        }), 4e3);
        return () => {
          clearTimeout(tt)
        }
      }), [Gt]), (0, Ot.useLayoutEffect)((() => {
        const tt = Ut.current;
        if (!qt || !tt) return At.current = null, void(it.current = null);
        var et;
        if (Jt) At.current = Jt, null === (et = tt.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === et || et.focus();
        else if (At.current) {
          const et = it.current;
          null !== et && (tt.scrollTop = et);
          const Vt = tt.querySelector(`[data-store-item="${At.current}"]`);
          if (Vt) {
            const Ot = Vt.getBoundingClientRect(),
              qt = tt.getBoundingClientRect();
            Vt.focus({
              preventScroll: null !== et && Ot.bottom > qt.top && Ot.top < qt.bottom
            })
          }
          At.current = null
        }
      }), [Jt, qt]), (0, Ot.useEffect)((() => {
        Zt(null)
      }), [lt.query]), (0, Ot.useEffect)((() => {
        if (!Lt) return;
        const tt = setTimeout((() => {
          kt(null)
        }), 8e3);
        return () => {
          clearTimeout(tt)
        }
      }), [Lt]);
      const st = jt.superRankInfo,
        nt = jt.isLoggedIn() || (0, rt.guestsMayBuy)(),
        te = jt.getOwnedCosmeticPacks(),
        ee = (0, oD.j)(lt.query),
        Oe = (0, oD.f)({
          mode: ee,
          loggedIn: Xt ? nt : null,
          superRankInfo: st,
          now: Date.now(),
          ownedPacks: te,
          packs: RD.p,
          recipient: lt.recipient
        });
      (0, Ot.useEffect)((() => {
        if (!nt || !qt) return;
        const tt = (0, ot.y)(),
          et = tt && (0, oD.i)(tt, RD.p);
        tt && et && ((0, Ve.reportAnalyticsClick)({
          id: "store.login_resume",
          value: tt.item
        }), (0, ot.l)(et))
      }), [nt, qt]);
      const qe = (0, oD.m)({
        superRankDaysLeft: Oe.superRankDaysLeft,
        openedThisSession: Jd || qt,
        seenNewItems: (0, ot.f)()
      });
      (0, Ot.useEffect)((() => {
        (0, ot.x)(qe)
      }), [qe]);
      const De = "self" === ee,
        me = Nd(qt, qt && De && "board" === Nt.kind);
      if (!qt || !Ht) return null;
      const de = wt > Et && Et <= 700,
        je = !de && wt <= 420,
        He = "gift" === ee ? Cd(lt.recipient) : null,
        Xe = null !== Rt;

      function Qe(tt) {
        (0, ZD.e)(tt, "gift" === ee ? lt.query.trim() : null)
      }

      function le(tt, et) {
        (0, Ve.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${et?"gift":"self"}:${tt}`
        }), et && (lt.recordGift(et.name, tt), Ee(et))
      }

      function Ee(tt) {
        ! function(tt) {
          try {
            QV.e.setItem(rD, (0, oD.s)(AD(), tt))
          } catch {}
        }({
          name: tt.name,
          cosmetics: tt.cosmetics
        }), bt(bd), kt((et => {
          var Vt;
          return {
            name: tt.name,
            seq: (null !== (Vt = null === et || void 0 === et ? void 0 : et.seq) && void 0 !== Vt ? Vt : 0) + 1
          }
        }))
      }
      async function fe(tt) {
        var et, Vt;
        if (Yt.current) return;
        if (!nt) return void Qe(tt);
        Zt(null), zt(null);
        const Ot = "gift" === ee ? {
          name: Cd(lt.recipient),
          cosmetics: lt.recipientCosmetics
        } : null;
        if (Ot && !Ot.name) return void gt();
        const qt = "superRank" === tt ? Ft.l.id : (0, Ft.c)(tt);
        Yt.current = !0;
        const Dt = await (0, zD.e)(qt, null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.name) && void 0 !== et ? et : null);
        if (Yt.current = !1, !Dt) return;
        It(tt);
        const mt = await LD.b.purchase(qt, null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot.name) && void 0 !== Vt ? Vt : null);
        It(null), mt ? Zt(mt) : (le(tt, Ot), Ot || (await (0, FD.flushClientAnalyticsEvents)(), (0, PD.refreshWithoutConfirmation)("superRank" === tt ? "/super-rank-welcome" : `/pack-welcome/${tt}`)))
      }
      const we = Dt()("Store", {
        StoreGift: "gift" === ee,
        StorePortrait: de,
        StoreCompact: je
      });
      if ("pack" === Nt.kind) {
        const tt = Nt.pack,
          et = Oe.packs.find((et => et.pack === tt));
        return (0, Qt.jsx)("div", {
          ref: Ut,
          className: "CosmeticShopContainer",
          children: (0, Qt.jsx)(GD.g, {
            pack: tt,
            onBack: () => {
              bt(bd)
            },
            onPurchased: et => {
              le(tt, et ? {
                name: et,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === ee && He && et && (0, Qt.jsxs)(Qt.Fragment, {
              children: [(0, Qt.jsx)(Cm, {
                state: et.state,
                item: tt,
                price: (ye = tt, "superRank" === ye ? Ft.l.price : (0, Ft.e)(ye)),
                busy: Xe,
                onAct: () => {
                  fe(tt)
                },
                onNeedRecipient: () => {
                  bt(bd), gt()
                },
                onLogin: () => {
                  Qe(tt)
                },
                highlight: Gt === tt
              }), Pt && (0, Qt.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: dt(Pt)
              })]
            }),
            ownedPacks: te,
            startAsGift: "gift" === ee,
            initialGiftRecipient: "gift" === ee ? null !== He && void 0 !== He ? He : lt.query.trim() : "",
            highlightCta: Gt === tt
          }, tt)
        })
      }
      var ye;
      return "superRank" === Nt.kind ? (0, Qt.jsx)("div", {
        ref: Ut,
        className: Dt()(we, "StoreDetailView"),
        children: (0, Qt.jsx)(pm, {
          state: Oe.superRank.state,
          mode: ee,
          giftName: He,
          busy: Xe,
          highlight: "superRank" === Gt,
          purchaseError: Pt,
          onBack: () => {
            bt(bd)
          },
          onChooseRecipient: () => {
            bt(bd), gt()
          },
          onAct: () => {
            fe("superRank")
          },
          onLogin: () => {
            Qe("superRank")
          }
        })
      }) : (0, Qt.jsxs)("div", {
        ref: Ut,
        className: we,
        onScroll: tt => {
          it.current = tt.currentTarget.scrollTop
        },
        children: [(0, Qt.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Qt.jsx)(qm, {
            selfName: Xt ? jt.getPlayerName() : "",
            giftRecipient: lt,
            suggestionsVersion: null !== (et = null === Lt || void 0 === Lt ? void 0 : Lt.seq) && void 0 !== et ? et : 0,
            pulseSignal: Wt,
            disabled: Xe || !Xt
          })
        }), Lt && (0, Qt.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            kt(null)
          },
          children: [(0, Qt.jsx)(kD.e, {
            showSignal: Lt.seq
          }), oD.d, " ", dt("store:giftSent", {
            name: Lt.name
          })]
        }, Lt.seq), !Lt && Pt && (0, Qt.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: dt(Pt)
        }), De && me.claimFailed, (0, Qt.jsx)(Bm, {
          layout: Oe,
          mountAtOnce: null !== At.current,
          bundleGift: "gift" === ee ? {
            recipientName: He,
            lookingUp: "pending" === lt.recipient.status,
            busy: Xe,
            onNeedRecipient: gt,
            onSent: tt => {
              (0, Ve.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Ee({
                name: tt,
                cosmetics: lt.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, oD.p)(st),
          busy: Xe,
          highlightItem: Gt,
          onOpen: function(tt) {
            (0, Ve.reportAnalyticsClick)({
              id: "store.item_open",
              value: tt
            }), bt((0, ot.c)(tt))
          },
          onAct: fe,
          onNeedRecipient: gt,
          onLogin: Qe,
          dailyDropTile: De && me.tile
        }), "gift" !== ee && (0, Qt.jsx)(Vd, {}), me.reveal]
      })
    }));
    var Kd = Vt(2759),
      hd = Vt(9063),
      vd = Vt(8874),
      Wd = Vt(2817),
      Sd = Vt(2684),
      cd = Vt(2736),
      Rd = Vt(2742),
      Id = Vt(2745),
      Pd = Vt(2807),
      Zd = Vt(2790),
      Ld = Vt(2416),
      Fd = Vt(2449),
      kd = Vt(2441),
      Gd = Vt(2117),
      zd = Vt(2749),
      od = Vt(2451);

    function rd(tt) {
      let {
        show: et
      } = tt;
      return et ? (0, Qt.jsx)(Ud, {}) : null
    }

    function Ud() {
      const {
        t: tt
      } = (0, mt.H)(), {
        followsLeader: et
      } = (0, Sd.f)(), {
        loading: Vt,
        friends: qt,
        requests: jt,
        invites: Xt
      } = (0, it.k)(), {
        userContext: lt
      } = (0, ft.d)(), [Et, wt] = (0, Ot.useState)(od.k);
      (0, Ot.useEffect)((() => {
        (0, od.c)()
      }), []);
      const yt = jt.map((tt => tt.name)),
        {
          state: Nt,
          recentRequesters: Mt
        } = (0, Zd.m)(),
        bt = new Map([...("loaded" === Nt.status ? Nt.recentPlayers : []).map((tt => [tt.preview.name, tt])), ...Mt.map((tt => [tt.name, tt]))]),
        Jt = (0, Ot.useRef)(null),
        [Kt, ht] = (0, Ot.useState)(""),
        [vt, Wt] = (0, Ot.useState)("Enter"),
        [St, ct] = (0, Ot.useState)(null);

      function Rt() {
        Kt && (Wt("Loading"), (0, kd.l)(Kt, "social_menu").then((tt => {
          if (Jt.current) switch (tt.kind) {
            case "sent":
              Wt("Success");
              break;
            case "becameFriends":
              Wt("BecameFriends");
              break;
            case "failed":
              ct(tt.message), Wt("Error")
          }
        })))
      }
      return (0, Ot.useEffect)((() => {
        if ("Enter" === vt || "Loading" === vt) return;
        const tt = setTimeout((() => {
          Jt.current.value = "", ht(""), Wt("Enter")
        }), "Success" === vt ? 1e3 : 4e3);
        return () => {
          clearTimeout(tt)
        }
      }), [vt]), (0, Qt.jsx)("div", {
        className: "SocialMenu",
        children: (0, Qt.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Qt.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Qt.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Qt.jsx)(Id.d, {
                label: tt("socialBar:addFriend")
              }), (0, Qt.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Qt.jsxs)("div", {
                  className: Dt()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${vt}`]: !0
                  }),
                  children: ["Loading" === vt && (0, Qt.jsx)(ut.b, {}), "Success" === vt && (0, Qt.jsx)(dt.b, {
                    name: "check"
                  }), "BecameFriends" === vt && (0, Qt.jsx)(Qt.Fragment, {
                    children: tt("socialBar:nowFriends", {
                      playerName: Kt
                    })
                  }), "Error" === vt && St && (0, Qt.jsx)(Qt.Fragment, {
                    children: tt(St.translationKey, St.params)
                  })]
                }), (0, Qt.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Qt.jsx)(Ct.d, {
                    className: "PlayerSearchInput",
                    placeholderText: tt("socialBar:enterPlayerName"),
                    domRef: Jt,
                    onValueChange: tt => {
                      ht((0, Zt.n)(tt)), Jt.current.value = (0, Zt.n)(tt)
                    },
                    onEnter: () => {
                      Kt && (0, Ve.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Rt()
                    }
                  }), (0, Qt.jsxs)(Ht.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Rt()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Qt.jsx)(dt.b, {
                      name: "user-plus"
                    }), " ", tt("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Qt.jsx)(zd.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Xt.length > 0 && (0, Qt.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Qt.jsx)(Id.d, {
                label: tt("socialBar:invites"),
                meta: Xt.length
              }), Xt.map((et => (0, Qt.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Qt.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Qt.jsx)(Ld.e, {
                    invite: et
                  })
                }), (0, Qt.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Qt.jsx)(Ld.g, {
                    invite: et
                  })
                }), (0, Qt.jsx)(Ht.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Fd.e)(et)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${et.destination.kind}`
                  },
                  children: tt("general:join")
                }), (0, Qt.jsx)(nt.g, {
                  tooltipInner: (0, Qt.jsx)(Qt.Fragment, {
                    children: tt("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Qt.jsx)(Ht.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Et || void 0 === Et ? void 0 : Et.kind) && Et.inviteId === et.id,
                    onClick: () => {
                      it.e.declineInvite(et.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${et.destination.kind}`
                    },
                    children: (0, Qt.jsx)(dt.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, et.id)))]
            }), (0, Qt.jsxs)("div", {
              className: Dt()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Vt && 0 === jt.length
              }),
              children: [(0, Qt.jsx)(Id.d, {
                label: (0, Qt.jsxs)(Qt.Fragment, {
                  children: [(0, Qt.jsx)(dt.b, {
                    name: Gd.e
                  }), " ", tt("socialBar:requests")]
                }),
                meta: (0, Qt.jsxs)(Qt.Fragment, {
                  children: [jt.length, jt.length === te.n && (0, Qt.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: tt("socialBar:limitReached")
                  })]
                })
              }), Vt && (0, Qt.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Qt.jsx)(ut.b, {})
              }), !Vt && 0 === jt.length && (0, Qt.jsx)("div", {
                className: "SocialMenuEmpty",
                children: tt("socialBar:noFriendRequests")
              }), !Vt && jt.length > 0 && (0, Qt.jsx)("div", {
                className: "PlayerRows",
                children: (0, Qt.jsx)(Lq.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [jt],
                  children: jt.map(((et, Vt) => {
                    const Ot = bt.get(et.name);
                    return (0, Qt.jsxs)(Rd.f, {
                      playerSocialPreview: et,
                      zIndex: jt.length - Vt,
                      padDefaultFocus: (0, od.h)(Et, et.name, Vt),
                      status: Ot && (0, Qt.jsx)(Pd.b, {
                        gameNameWithVariation: Ot.gameNameWithVariation,
                        isPrivateLobby: Ot.isPrivateLobby
                      }),
                      children: [(0, Qt.jsx)(nt.g, {
                        tooltipInner: (0, Qt.jsx)(Qt.Fragment, {
                          children: tt("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Qt.jsx)(Ht.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            wt((0, od.f)(yt, Vt)), (0, kd.h)(et.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Qt.jsx)(dt.b, {
                            name: "check"
                          })
                        })
                      }), (0, Qt.jsx)(nt.g, {
                        tooltipInner: (0, Qt.jsx)(Qt.Fragment, {
                          children: tt("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Qt.jsx)(Ht.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            wt((0, od.f)(yt, Vt)), (0, kd.h)(et.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Qt.jsx)(dt.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${et.name}_${et.isError}`)
                  }))
                })
              })]
            }), (0, Qt.jsx)(Pd.g, {})]
          }), (0, Qt.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Qt.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Qt.jsx)(Id.d, {
                label: tt("socialBar:party")
              }), (0, Qt.jsx)(cd.b, {})]
            }), (0, Qt.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Qt.jsx)(Id.d, {
                label: (0, Qt.jsxs)(Qt.Fragment, {
                  children: [(0, Qt.jsx)(dt.b, {
                    name: Gd.b
                  }), " ", tt("socialBar:friends")]
                }),
                meta: (0, Qt.jsxs)(Qt.Fragment, {
                  children: [qt.length, qt.length >= (0, te.b)(lt.getPlayerRanks()) && (0, Qt.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: tt("socialBar:limitReached")
                  })]
                })
              }), Vt && (0, Qt.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Qt.jsx)(ut.b, {})
              }), !Vt && 0 === qt.length && (0, Qt.jsx)("div", {
                className: "SocialMenuEmpty",
                children: tt("socialBar:noFriends")
              }), !Vt && qt.length > 0 && (0, Qt.jsx)("div", {
                className: "PlayerRows",
                children: (0, Qt.jsx)(Lq.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [qt],
                  children: qt.map(((tt, Vt) => (0, Qt.jsx)(Rd.f, {
                    playerSocialPreview: tt,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: tt => {
                      it.e.removeFriendFromState(tt)
                    },
                    zIndex: qt.length - Vt,
                    children: (0, Qt.jsx)(Rd.e, {
                      friend: tt,
                      followsLeader: et,
                      analyticsSurface: "social_menu"
                    })
                  }, `${tt.name}_${tt.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Ad = Vt(2619);
    const Yd = tt => {
        let {
          action: et,
          padAction: Vt
        } = tt;
        const {
          isTouchScreen: Ot
        } = (0, ht.k)(["isTouchScreen"]), qt = (0, KO.v)();
        return Ot && !qt ? null : (0, Qt.jsx)(NO.d, {
          className: "EverythingMenuTabKey",
          noaAction: et,
          padHidesKey: !0,
          padMenuShortcut: Vt
        })
      },
      Bd = (0, Ot.memo)((function() {
        const {
          t: tt
        } = (0, mt.H)(), {
          gameState: et,
          openEverythingMenuName: Vt,
          crosshairGameView: qt
        } = (0, ht.k)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: dt
        } = (0, ft.d)(), jt = (0, rt.usePurchasesAllowed)(), Xt = (0, ot.C)(), {
          view: lt
        } = (0, ge.H)(), Et = "dot" === Xt || null === Xt && "ready" === (null === lt || void 0 === lt ? void 0 : lt.kind), wt = (tt, et) => (0, Qt.jsx)(Yd, {
          action: tt,
          padAction: et
        }), [yt, Mt] = (0, Ot.useState)(null), bt = (0, Ot.useRef)(null), Jt = {
          ..."inGame" === et ? {} : (0, Ht.X)({
            focusOnClick: !1
          }),
          ...FO.g
        }, Ct = tt => {
          const et = (0, kO.e)((et => {
            (0, Ht.V)(et.currentTarget), ht.b.set({
              openEverythingMenuName: tt
            })
          }), "pointerup");
          return {
            ...Jt,
            onPointerDown: tt => {
              Jt.onPointerDown(tt), et.onPointerDown(tt)
            },
            onPointerUp: tt => {
              Jt.onPointerUp(tt), et.onPointerUp(tt)
            },
            onClick: et.onClick
          }
        }, ut = null !== Vt, Kt = Vt !== ae.o.COSMETIC_SHOP && !qt;
        async function vt() {
          await async function() {
            if (!yt) return;
            await yt(), Mt(null)
          }(), ht.b.set({
            openEverythingMenuName: null
          })
        }
        const Wt = (0, Ot.useRef)(null),
          ct = (0, Ot.useCallback)((() => null !== Wt.current && (0, vd.c)(Wt.current)), []);

        function Rt() {
          ct() || vt()
        }(0, Ot.useEffect)((() => (0, KD.x)(ct)), [ct]);
        const It = (0, Ot.useMemo)((() => "inGame" === et ? {
          text: tt("settingsMenu:exitGame"),
          onClick: () => {
            (0, hd.b)()
          }
        } : (0, St.isDiscordClient)() ? {
          text: tt("settingsMenu:exitGame"),
          onClick: () => {
            Ne.l.discordActivity().then((tt => {
              tt.exit("User exited the game")
            }))
          }
        } : null), [et, tt]);
        const Pt = (0, Qt.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Rt,
          children: (0, Qt.jsx)(Ht.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Qt.jsx)(GO.b, {
          showing: ut,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Vt === ae.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === et,
          children: (0, Qt.jsx)(oO.d, {
            className: "EverythingMenuContainer",
            show: ut && !qt,
            children: (0, Qt.jsx)(zO.c, {
              close: Rt,
              togglePointerLock: !1,
              children: (0, Qt.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, KD.l)(Vt) && (0, Qt.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Qt.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [It && (0, Qt.jsx)(Ht.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        It.onClick()
                      },
                      children: It.text
                    }), ut && jt && (0, Qt.jsx)("div", {
                      ...Jt,
                      className: "EverythingMenuWallet",
                      title: tt("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, ot.l)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Qt.jsx)(Kd.h, {})
                    })]
                  }), (0, Qt.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Qt.jsxs)("div", {
                      ...Ct(ae.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Vt === ae.o.SETTINGS ? "true" : void 0,
                      className: Dt()("EverythingMenuTab", {
                        EverythingMenuTabActive: Vt === ae.o.SETTINGS
                      }),
                      children: [tt("general:settings"), wt("OpenSettings", "pause")]
                    }), (0, Qt.jsxs)("div", {
                      ...Ct(ae.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": Vt === ae.o.CUSTOMISATION ? "true" : void 0,
                      className: Dt()("EverythingMenuTab", {
                        EverythingMenuTabActive: Vt === ae.o.CUSTOMISATION
                      }),
                      children: [tt("general:player"), wt("OpenCharacterCustomization")]
                    }), Nt.featureFlags.useSocialFeatures && (0, Qt.jsxs)("div", {
                      ...Ct(ae.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": Vt === ae.o.SOCIAL ? "true" : void 0,
                      className: Dt()("EverythingMenuTab", {
                        EverythingMenuTabActive: Vt === ae.o.SOCIAL
                      }),
                      ...(0, Ve.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Vt === ae.o.SOCIAL),
                      children: [tt("socialBar:social"), (0, Qt.jsx)(Ad.e, {})]
                    }), (0, ge.v)(lt) && (0, Qt.jsxs)("div", {
                      ...Ct(ae.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": Vt === ae.o.COSMETIC_SHOP ? "true" : void 0,
                      className: Dt()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Vt === ae.o.COSMETIC_SHOP
                      }),
                      children: [(0, Qt.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: tt("store:title")
                      }), "new" === Xt && (0, Qt.jsx)(Zm, {}), Et && (0, Qt.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === et && (0, Qt.jsxs)("div", {
                      ...Ct(ae.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": Vt === ae.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Dt()("EverythingMenuTab", {
                        EverythingMenuTabActive: Vt === ae.o.LOBBY_LEADERBOARD
                      }),
                      children: [tt("general:lobby"), wt("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Qt.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Pt
                  })]
                }), (0, KD.l)(Vt) && Pt, (0, Qt.jsxs)("div", {
                  ref: Wt,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === et ? "0.85" : "1"
                  },
                  children: [(0, Qt.jsx)(cO, {
                    show: Vt === ae.o.SETTINGS,
                    setBeforeResumeCallback: Mt
                  }), (0, Qt.jsx)(LO, {
                    show: Vt === ae.o.CUSTOMISATION
                  }), (0, Qt.jsx)(Ot.Suspense, {
                    fallback: null,
                    children: (0, Qt.jsx)(wD, {
                      show: Vt === ae.o.SHOP
                    })
                  }), (0, Qt.jsx)(SD, {
                    show: Vt === ae.o.LOBBY_LEADERBOARD
                  }), jt && (0, Qt.jsx)(ud, {
                    show: Vt === ae.o.COSMETIC_SHOP
                  }), !jt && (0, Qt.jsx)(Md, {
                    show: Vt === ae.o.COSMETIC_SHOP
                  }), (0, Qt.jsx)(rd, {
                    show: Vt === ae.o.SOCIAL
                  })]
                }), !(0, Nt.isMobileApp)() && (0, rO.e)(dt.getPlayerRanks()) && (0, Qt.jsx)(oO.d, {
                  ref: bt,
                  className: "EverythingMenuBannerDiv",
                  show: Kt,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Qt.jsx)(Wd.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: bt
                    },
                    showing: ut && Kt,
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
  5056: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(4785),
      mt = Vt(1286),
      dt = Vt(1152),
      jt = Vt(1556),
      Ht = Vt(1600),
      Xt = Vt(1450),
      Qt = Vt(2590),
      lt = Vt(1188);
    const Et = {
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

    function ft(tt) {
      let {
        platform: et
      } = tt;
      const Vt = "youtube" === et;
      return (0, lt.jsxs)("span", {
        className: qt()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Vt
        }),
        children: [Vt && (0, lt.jsx)(Qt.b, {
          variant: "white"
        }), !Vt && (0, lt.jsx)(dt.b, {
          name: Et[et].icon,
          kit: "brands"
        })]
      })
    }

    function wt(tt) {
      let {
        platform: et,
        link: Vt,
        editable: Ot,
        userContext: qt,
        onLinksUpdated: Qt
      } = tt;
      const {
        t: wt
      } = (0, mt.H)(), yt = Et[et];
      if (!Vt && !Ot) return null;

      function Nt() {
        var tt;
        if (!qt || !Qt) return;
        Xt.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yt.name
            }
          },
          prefixText: Dt.v[et],
          placeholderText: "playBloxd",
          initialValue: null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.handle) && void 0 !== tt ? tt : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Vt ? "general:remove" : void 0
        }).getResult().then((async tt => {
          if ("notificationTornDown" !== tt && null !== tt) try {
            "submit" === tt.type ? await Ht.e.setSocialLink(qt, et, tt.value) : await Ht.e.clearSocialLink(qt, et), Qt()
          } catch (Vt) {
            console.error("Failed to update social link", Vt), Xt.NotificationProvider.showAlertPopup({
              title: Vt.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Vt) {
        const tt = `@${Vt.handle}`;
        return (0, lt.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yt.color
          },
          href: Vt.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, lt.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, lt.jsx)(ft, {
              platform: et
            }), (0, lt.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, lt.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: tt
              })
            })]
          }), Ot && (0, lt.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, jt.X)({
              stopPropagation: !0
            }),
            onClick: tt => {
              tt.stopPropagation(), tt.preventDefault(), Nt()
            },
            children: (0, lt.jsx)(dt.b, {
              name: "pen-to-square"
            })
          }), !Ot && (0, lt.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, lt.jsx)(dt.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, lt.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yt.color
        },
        ...(0, jt.X)(),
        onClick: () => {
          Nt()
        },
        children: [(0, lt.jsx)(ft, {
          platform: et
        }), (0, lt.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, lt.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yt.name
          }), (0, lt.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: wt("homePage:profileSocialLinkAdd")
          })]
        }), (0, lt.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, lt.jsx)(dt.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yt(tt) {
      let {
        socialLinks: et,
        editable: Vt = !1,
        userContext: Ot,
        onLinksUpdated: qt
      } = tt;
      if (!Vt && 0 === et.length) return null;
      const mt = new Map(et.map((tt => [tt.platform, tt]))),
        dt = Vt ? Dt.r : et.map((tt => tt.platform));
      return (0, lt.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, lt.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: dt.map((tt => (0, lt.jsx)(wt, {
            platform: tt,
            link: mt.get(tt),
            editable: Vt,
            userContext: Ot,
            onLinksUpdated: qt
          }, tt)))
        })
      })
    }
  },
  34423: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(3510);

    function Dt() {
      const [tt, et] = (0, Ot.useState)(!1);
      return (0, Ot.useLayoutEffect)((() => {
        let tt = !0;
        return (0, qt.e)().then((() => {
          tt && et(!0)
        })), () => {
          tt = !1
        }
      }), []), tt
    }
  },
  34349: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => wt,
      i: () => ft
    });
    Vt(34351);
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(34342);

    function dt(tt, et) {
      return Math.max(1, Math.round(tt * et))
    }

    function jt(tt, et) {
      const Vt = et * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Ot = function(tt, et) {
          if (tt.lines) return dt(tt.lineThickness, et) % 2;
          if (tt.dot) return dt(tt.dotSize, et) % 2;
          return Ht(tt, et) % 2
        }(tt, et),
        qt = Xt(tt.lineThickness * Vt, Ot),
        Dt = dt(tt.lineLength, Vt),
        mt = Math.round(tt.gap * Vt),
        jt = tt.outline > 0 ? dt(tt.outline, Vt) : 0,
        lt = [];
      if (tt.lines && (lt.push({
          x: qt + mt,
          y: 0,
          w: Dt,
          h: qt,
          arm: "right"
        }), lt.push({
          x: -mt - Dt,
          y: 0,
          w: Dt,
          h: qt,
          arm: "left"
        }), lt.push({
          x: 0,
          y: qt + mt,
          w: qt,
          h: Dt,
          arm: "down"
        }), tt.tStyle || lt.push({
          x: 0,
          y: -mt - Dt,
          w: qt,
          h: Dt,
          arm: "up"
        }), 0 === mt && lt.push({
          x: 0,
          y: 0,
          w: qt,
          h: qt
        })), tt.dot) {
        const et = Xt(tt.dotSize * Vt, Ot),
          Dt = tt.lines && 0 === mt && tt.dotSize > tt.lineThickness ? Math.max(et, qt + 2) : et,
          dt = (qt - Dt) / 2;
        lt.push({
          x: dt,
          y: dt,
          w: Dt,
          h: Dt
        })
      }
      const Et = lt.map((tt => ({
        ...tt,
        x: tt.x - jt,
        y: tt.y - jt,
        w: tt.w + 2 * jt,
        h: tt.h + 2 * jt
      })));
      let ft = null,
        wt = null;
      if (tt.circle) {
        const et = dt(tt.circleThickness, Vt),
          Dt = function(tt, et) {
            return tt + (tt % 2 === et ? 0 : 1)
          }(Ht(tt, Vt), Ot),
          mt = (qt - Dt) / 2;
        ft = Qt(mt, Dt, et), jt > 0 && (wt = Qt(mt - jt, Dt + 2 * jt, et + 2 * jt))
      }
      return {
        cell: qt,
        fills: lt,
        outlines: jt > 0 ? Et : [],
        ring: ft,
        ringOutline: wt
      }
    }

    function Ht(tt, et) {
      return Math.round(tt.circleRadius * et * 2 + dt(tt.circleThickness, et))
    }

    function Xt(tt, et) {
      return Math.max(2 - et, 2 * Math.round((tt - et) / 2) + et)
    }

    function Qt(tt, et, Vt) {
      const Ot = 2 * Vt >= et - 1;
      return {
        x: tt,
        y: tt,
        size: et,
        border: Math.min(Vt, Math.floor(et / 2)),
        filled: Ot
      }
    }
    var lt = Vt(1188);
    const Et = 1.4;

    function ft(tt, et) {
      return tt && et ? `scale(${Et})` : "scale(1)"
    }

    function wt(tt) {
      return "classic" === tt.settings.style ? (0, lt.jsx)(Mt, {
        ...tt
      }) : (0, lt.jsx)(vt, {
        ...tt
      })
    }
    const yt = .125;

    function Nt(tt, et) {
      const Vt = {};
      if (tt.color !== mt.g.color && (Vt.color = (0, mt.l)(tt.color)), tt.opacity !== mt.g.opacity && (Vt.opacity = tt.opacity / 100), tt.outline !== mt.g.outline || tt.outlineColor !== mt.g.outlineColor) {
        const et = tt.outline,
          Ot = (0, mt.l)(tt.outlineColor);
        Vt.textShadow = et > 0 ? `-${et}px 0 ${Ot}, 0 ${et}px ${Ot}, ${et}px 0 ${Ot}, 0 -${et}px ${Ot}` : "none"
      }
      if (tt.size !== mt.g.size) {
        const Ot = tt.size / 100;
        Vt.fontSize = et ? `calc(max(1.3rem, 18px) * ${Ot})` : `calc(1.3rem * ${Ot})`, Vt.marginTop = `-${yt}em`, Vt.transformOrigin = `50% calc(50% + ${yt}em)`
      }
      return Vt
    }

    function Mt(tt) {
      let {
        settings: et,
        touch: Vt,
        inPreview: Ot,
        inEditor: Dt,
        pressed: mt = !1,
        pressRef: dt
      } = tt;
      return (0, lt.jsx)("div", {
        className: qt()("Crosshair", {
          Touch: Vt,
          CrosshairInPreview: Ot,
          CrosshairInEditor: Dt || Ot
        }),
        ref: dt,
        style: {
          transform: ft(mt, et.growOnClick),
          ...Nt(et, Vt)
        },
        children: "+"
      })
    }

    function bt(tt, et) {
      return tt / et + "px"
    }

    function Jt(tt, et, Vt, Ot) {
      return {
        ...Kt(tt, et, Vt),
        width: bt(tt.w, Vt),
        height: bt(tt.h, Vt),
        background: Ot
      }
    }

    function Ct(tt, et, Vt) {
      return {
        left: bt(tt.x, et),
        top: bt(tt.y, et),
        width: bt(tt.size, et),
        height: bt(tt.size, et),
        borderWidth: bt(tt.border, et),
        borderColor: Vt,
        background: tt.filled ? Vt : void 0
      }
    }
    const ut = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Kt(tt, et, Vt) {
      const [Ot, qt] = tt.arm ? ut[tt.arm] : [0, 0], Dt = Math.round(et * Vt);
      return {
        left: bt(tt.x + Ot * Dt, Vt),
        top: bt(tt.y + qt * Dt, Vt)
      }
    }

    function ht(tt) {
      return tt.arm ? {
        "data-arm": tt.arm,
        "data-x": tt.x,
        "data-y": tt.y
      } : {}
    }

    function vt(tt) {
      let {
        settings: et,
        inPreview: Vt,
        inEditor: Ot,
        pressed: dt = !1,
        spread: Ht,
        spreadRef: Xt
      } = tt;
      const Qt = (0, Dt.useRef)(null),
        {
          box: ft,
          dpr: wt
        } = function(tt) {
          const [et, Vt] = (0, Dt.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Dt.useLayoutEffect)((() => {
            const et = tt.current;
            if (!et) return;
            const Ot = () => {
              const tt = et.getBoundingClientRect(),
                Ot = window.devicePixelRatio || 1;
              Vt((et => et.dpr === Ot && et.box.left === tt.left && et.box.top === tt.top && et.box.width === tt.width && et.box.height === tt.height ? et : {
                box: {
                  left: tt.left,
                  top: tt.top,
                  width: tt.width,
                  height: tt.height
                },
                dpr: Ot
              }))
            };
            Ot();
            const qt = new ResizeObserver(Ot);
            return qt.observe(et), window.addEventListener("resize", Ot), window.addEventListener("scroll", Ot, !0), () => {
              qt.disconnect(), window.removeEventListener("resize", Ot), window.removeEventListener("scroll", Ot, !0)
            }
          }), [tt]), et
        }(Qt),
        yt = (0, Dt.useRef)(wt);
      yt.current = wt;
      const Nt = jt(et, wt, dt && et.growOnClick ? Et : 1),
        Mt = function(tt, et, Vt) {
          const Ot = Math.round((tt.left + tt.width / 2) * Vt - et / 2),
            qt = Math.round((tt.top + tt.height / 2) * Vt - et / 2);
          return {
            x: Ot / Vt - tt.left,
            y: qt / Vt - tt.top
          }
        }(ft, Nt.cell, wt),
        bt = (0, mt.l)(et.color),
        ut = (0, mt.l)(et.outlineColor),
        vt = (0, Dt.useRef)(0);
      (0, Dt.useLayoutEffect)((() => {
        if (Xt) return Xt.current = tt => {
          var et;
          vt.current = tt, null === (et = Qt.current) || void 0 === et || et.querySelectorAll("[data-arm]").forEach((et => {
            Object.assign(et.style, Kt(function(tt) {
              return {
                x: Number(tt.dataset.x),
                y: Number(tt.dataset.y),
                arm: tt.dataset.arm
              }
            }(et), tt, yt.current))
          }))
        }, () => {
          Xt.current = null
        }
      }), [Xt]);
      const Wt = null !== Ht && void 0 !== Ht ? Ht : vt.current;
      return (0, lt.jsx)("div", {
        ref: Qt,
        className: qt()("CrosshairShapes", {
          CrosshairInPreview: Vt,
          CrosshairInEditor: Ot || Vt,
          CrosshairSpreads: void 0 !== Xt
        }),
        children: (0, lt.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Mt.x,
            top: Mt.y,
            opacity: et.opacity / 100
          },
          children: (0, lt.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Nt.ringOutline && (0, lt.jsx)("div", {
              className: "CrosshairRing",
              style: Ct(Nt.ringOutline, wt, ut)
            }), Nt.outlines.map(((tt, et) => (0, lt.jsx)("div", {
              className: "CrosshairPart",
              ...ht(tt),
              style: Jt(tt, Wt, wt, ut)
            }, `o${et}`))), Nt.ring && (0, lt.jsx)("div", {
              className: "CrosshairRing",
              style: Ct(Nt.ring, wt, bt)
            }), Nt.fills.map(((tt, et) => (0, lt.jsx)("div", {
              className: "CrosshairPart",
              ...ht(tt),
              style: Jt(tt, Wt, wt, bt)
            }, `f${et}`)))]
          })
        })
      })
    }
  },
  34354: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt,
      g: () => yt,
      k: () => wt
    });
    var Ot = Vt(34342);
    const qt = "XH1-",
      Dt = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      mt = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      dt = ["color", "outlineColor"],
      jt = 1 + 3 * dt.length + mt.length + 1,
      Ht = Math.ceil(8 * jt / Math.log2(62)),
      Xt = qt.length + Ht;

    function Qt(tt) {
      let et = 90;
      for (const Vt of tt) et = 31 * et + Vt & 255;
      return et
    }
    const lt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Et = BigInt(lt.length);

    function ft(tt, et) {
      let Vt = 0n;
      for (const qt of tt) {
        const tt = lt.indexOf(qt);
        if (tt < 0) return null;
        Vt = Vt * Et + BigInt(tt)
      }
      if (Vt >> BigInt(8 * et) !== 0n) return null;
      const Ot = [];
      for (let qt = 0; qt < et; qt++) Ot.unshift(Number(0xffn & Vt)), Vt >>= 8n;
      return Ot
    }

    function wt(tt) {
      let et = "shapes" === tt.style ? 1 : 0;
      Dt.forEach(((Vt, Ot) => {
        tt[Vt] && (et |= 1 << Ot + 1)
      }));
      const Vt = [et];
      for (const qt of dt) {
        const et = (0, Ot.i)(qt, tt[qt]);
        Vt.push(et >> 16 & 255, et >> 8 & 255, 255 & et)
      }
      for (const qt of mt) {
        const {
          min: et,
          step: Dt
        } = Ot.e[qt];
        Vt.push(Math.round(((0, Ot.i)(qt, tt[qt]) - et) / Dt))
      }
      return Vt.push(Qt(Vt)), qt + function(tt, et) {
        let Vt = 0n;
        for (const qt of tt) Vt = Vt << 8n | BigInt(qt);
        let Ot = "";
        for (let qt = 0; qt < et; qt++) Ot = lt[Number(Vt % Et)] + Ot, Vt /= Et;
        return Ot
      }(Vt, Ht)
    }

    function yt(tt) {
      for (const et of tt.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Ht}})`, "gi"))) {
        const tt = Nt(ft(et[1], jt));
        if (tt) return tt
      }
      return null
    }

    function Nt(tt) {
      if (!tt || tt.length !== jt || Qt(tt.slice(0, -1)) !== tt[tt.length - 1]) return null;
      const et = tt[0],
        Vt = {
          ...Ot.g,
          style: 1 & et ? "shapes" : "classic"
        };
      Dt.forEach(((tt, Ot) => {
        Vt[tt] = 0 !== (et & 1 << Ot + 1)
      }));
      let qt = 1;
      for (const Ot of dt) Vt[Ot] = tt[qt] << 16 | tt[qt + 1] << 8 | tt[qt + 2], qt += 3;
      for (const Dt of mt) {
        const {
          min: et,
          step: mt
        } = Ot.e[Dt];
        Vt[Dt] = (0, Ot.i)(Dt, et + tt[qt] * mt), qt++
      }
      return Vt
    }
  },
  34342: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      g: () => qt,
      i: () => Dt,
      l: () => Ht,
      o: () => jt,
      q: () => Xt,
      t: () => dt,
      v: () => mt
    });
    const Ot = {
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
      qt = Object.freeze({
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

    function Dt(tt, et) {
      var Vt;
      const {
        min: Dt,
        max: mt,
        step: dt
      } = Ot[tt];
      if (!Number.isFinite(et)) return qt[tt];
      const jt = (null !== (Vt = String(dt).split(".")[1]) && void 0 !== Vt ? Vt : "").length,
        Ht = Number((Math.round(et / dt) * dt).toFixed(jt));
      return Math.min(mt, Math.max(Dt, Ht))
    }

    function mt(tt, et, Vt) {
      const Ot = "number" === typeof Vt ? Dt(et, Vt) : Vt;
      return {
        ...tt,
        [et]: Ot
      }
    }

    function dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(qt).every((Ot => Vt.includes(Ot) || tt[Ot] === et[Ot]))
    }

    function jt(tt) {
      return dt(tt, qt)
    }

    function Ht(tt) {
      return `#${tt.toString(16).padStart(6,"0")}`
    }

    function Xt(tt) {
      const et = /^#?([0-9a-f]{6})$/i.exec(tt.trim());
      return et ? parseInt(et[1], 16) : null
    }
  },
  34363: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      g: () => lt
    });
    var Ot = Vt(63),
      qt = Vt(39),
      Dt = Vt(34354),
      mt = Vt(34342);
    const dt = "crosshairCode";
    let jt = null;
    const Ht = new Set;

    function Xt() {
      if (null === jt) {
        var tt;
        const et = qt.e.getItem(dt);
        jt = null !== (tt = "string" === typeof et ? (0, Dt.g)(et) : null) && void 0 !== tt ? tt : mt.g
      }
      return jt
    }

    function Qt(tt) {
      jt = tt, (0, mt.o)(tt) ? qt.e.removeItem(dt) : qt.e.setItem(dt, (0, Dt.k)(tt));
      for (const et of Ht) et()
    }

    function lt() {
      const [tt, et] = (0, Ot.useState)(Xt);
      return (0, Ot.useEffect)((() => {
        const tt = () => {
          et(Xt())
        };
        return tt(), Vt = tt, Ht.add(Vt), () => {
          Ht.delete(Vt)
        };
        var Vt
      }), []), tt
    }
  },
  34333: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      h: () => qt
    });
    var Ot = Vt(26);

    function qt(tt, et) {
      return tt && !et
    }

    function Dt() {
      return qt(Ot.b.get("isTouchScreen"), Ot.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34305: (tt, et, Vt) => {
    function Ot(tt, et) {
      return tt && !et
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  34326: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(1167);

    function qt() {
      var tt, et;
      return null !== (tt = null === (et = screen.orientation) || void 0 === et ? void 0 : et.type) && void 0 !== tt ? tt : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Dt = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && qt() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = qt(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Ot.Nw)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const tt of this.resizers) tt()
          }
        }), 1e3)
      }
      heldSizer(tt) {
        let et = !1;
        return () => {
          if (et && this.isHeld()) return null;
          const Vt = tt();
          return et ||= null !== Vt, Vt
        }
      }
      onRelease(tt) {
        return this.resizers.add(tt), () => {
          this.resizers.delete(tt)
        }
      }
    }
  },
  34272: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Mt,
      g: () => Ht,
      k: () => wt,
      m: () => ft
    });
    var Ot = Vt(184),
      qt = Vt(1363),
      Dt = Vt(1293),
      mt = Vt(1223),
      dt = Vt(1824);
    const jt = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Ht(tt) {
      return jt[tt]
    }

    function Xt(tt) {
      return (0, dt.e)(tt) ? "outdated" : tt instanceof Ot.e ? 429 === tt.httpCode ? "busy" : "server" : "offline"
    }

    function Qt(tt, et, Vt) {
      return (0, mt.postJsonWithMetricsCookiesAndJsonResponse)(`${Dt.clientSideServerUrls.indexUrl}${et}`, Vt, {
        retries: 3
      }, tt.getMetricsCookies()).catch((tt => (console.error("Bad response from the server when trying to change name:", et, tt), {
        outcome: "failed",
        failure: Xt(tt)
      })))
    }

    function lt(tt) {
      return "outcome" in tt && "failed" === tt.outcome
    }

    function Et(tt) {
      return console.error("Error when trying to get with new name from DB", tt), {
        outcome: "refused",
        message: tt
      }
    }
    async function ft(tt) {
      const et = await Qt(tt, "/index/name/random", {});
      return lt(et) ? et : "err" in et ? Et(et.err) : (tt.setPlayerName(et.name), {
        outcome: "changed",
        name: et.name
      })
    }
    async function wt(tt, et) {
      const Vt = await Qt(tt, "/index/name/update", {
        name: et
      });
      return lt(Vt) ? Vt : "err" in Vt ? Et(Vt.err) : Vt.nameExists ? {
        outcome: "taken"
      } : (tt.setPlayerName(et), {
        outcome: "changed",
        name: et
      })
    }

    function yt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Ot = 1 === et ? 1 : 10 ** (et - 1),
        Dt = String(Ot + Math.floor(Vt() * (10 ** et - Ot)));
      return `${tt.slice(0,qt.g-et)}${Dt}`
    }
    const Nt = [1, 2, 3, 4];
    async function Mt(tt, et) {
      const Vt = await wt(tt, et);
      if ("taken" !== Vt.outcome) return Vt;
      for (const Ot of Nt) {
        const Vt = yt(et, Ot),
          qt = await wt(tt, Vt);
        if ("taken" !== qt.outcome) return qt
      }
      return {
        outcome: "taken"
      }
    }
  },
  34308: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => jt
    });
    var Ot = Vt(26);
    const qt = 24,
      Dt = "farNametags",
      mt = 1e5;

    function dt() {
      var tt;
      return null === (tt = Ot.b.get("showDistantNametags")) || void 0 === tt || tt
    }

    function jt() {
      var tt;
      return null !== (tt = function() {
        const tt = new URLSearchParams(window.location.search).get(Dt),
          et = null === tt || "" === tt ? NaN : Number(tt);
        return Number.isFinite(et) && et >= 0 ? Math.min(et, mt) : null
      }()) && void 0 !== tt ? tt : dt() ? 0 : qt
    }
  },
  34330: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      f: () => Qt,
      j: () => Xt
    });
    var Ot = Vt(312),
      qt = Vt(106),
      Dt = Vt(146),
      mt = Vt(139),
      dt = Vt(723);
    const jt = new Set(["mali_bifrost"]);

    function Ht() {
      if ("android" !== (0, qt.pageOperatingSystem)() || dt.g || (0, dt.d)("webgl_default")) return;
      const tt = (0, Dt.t)(),
        et = null === tt ? (0, Ot.u)() : (0, Ot.h)(tt.vendor, tt.renderer);
      return null !== et && jt.has(et) ? tt => (0, Ot.m)((0, mt.b)(tt).vendor, et) : void 0
    }

    function Xt(tt, et) {
      return tt ? () => !0 : et()
    }
    async function Qt(tt) {
      try {
        const et = Xt(tt, Ht),
          Vt = navigator.gpu;
        if (void 0 === et || void 0 === Vt) return !1;
        const Ot = await (0, mt.n)(Vt, {
          seed: !1,
          compatibility: et
        });
        return "string" !== typeof Ot && Ot.compatibility && !(0, mt.i)(Ot.adapter)
      } catch (et) {
        return console.error("WebGPU compatibility-mode adapter request failed.", et), !1
      }
    }
  },
  34406: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => mt
    });
    const Ot = [{
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

    function qt(tt) {
      let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof tt) {
        if (!Number.isFinite(tt)) return "0";
        if (Math.abs(tt) < 100) {
          const et = tt < 0 ? "-" : "",
            Vt = Math.abs(tt);
          return Vt >= 10 ? `${et}${Vt.toFixed(1).replace(/\.0$/,"")}` : `${et}${Vt.toFixed(2).replace(/\.?0+$/,"")}`
        }
        et = BigInt(Math.floor(tt))
      } else et = tt;
      const qt = et < 0n ? -et : et,
        Dt = et < 0n ? "-" : "",
        mt = qt.toString();
      if (mt.length <= Vt) return `${Dt}${mt}`;
      const dt = 3 * Math.floor((mt.length - 1) / 3);
      if (dt < 3) return `${Dt}${mt}`;
      if (dt > 3 * Ot.length) {
        const tt = mt[0],
          et = mt.slice(1, 3).replace(/0+$/, "");
        return `${Dt}${et?`${tt}.${et}`:tt}e${mt.length-1}`
      }
      const {
        threshold: jt,
        suffix: Ht
      } = Ot[Ot.length - dt / 3], Xt = qt / jt, Qt = Number(1000n * (qt % jt) / jt), lt = Number(Xt) + Qt / 1e3;
      let Et;
      return Et = lt >= 100 ? Math.floor(lt).toString() : lt >= 10 ? lt.toFixed(1).replace(/\.0$/, "") : lt.toFixed(2).replace(/\.?0+$/, ""), `${Dt}${Et}${Ht}`
    }
    const Dt = Ot.map((tt => {
      let {
        threshold: et,
        suffix: Vt
      } = tt;
      return {
        threshold: Number(et),
        suffix: Vt
      }
    })).filter((tt => {
      let {
        threshold: et
      } = tt;
      return Number.isFinite(et)
    }));

    function mt(tt) {
      const et = Math.abs(tt),
        Vt = tt < 0 ? "-" : "";
      for (const {
          threshold: Ot,
          suffix: qt
        }
        of Dt)
        if (et >= Ot) {
          const tt = et / Ot;
          if (tt >= 1e3) return `${Vt}${et.toExponential(2).replace("e+","e")}`;
          let Dt;
          return Dt = tt >= 100 ? Math.floor(tt).toString() : tt >= 10 ? tt.toFixed(1).replace(/\.0$/, "") : tt.toFixed(2).replace(/\.?0+$/, ""), `${Vt}${Dt}${qt}`
        } return `${Vt}${et}`
    }
  },
  34388: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      g: () => lt,
      k: () => Qt,
      n: () => mt,
      r: () => Ht,
      v: () => jt
    });
    var Ot = Vt(391);
    const qt = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Dt = {
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

    function mt(tt) {
      var et;
      return null !== (et = Dt[tt]) && void 0 !== et ? et : {
        translationKey: ""
      }
    }
    const dt = {
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

    function jt(tt) {
      return qt.includes(tt)
    }

    function Ht(tt) {
      var et;
      return !0 === (null === tt || void 0 === tt || null === (et = tt.customAttributes) || void 0 === et ? void 0 : et.cannotEnchant)
    }

    function Xt(tt, et) {
      const {
        max: Vt
      } = dt[tt].at(-1);
      return et <= Vt
    }

    function Qt(tt) {
      const et = Math.sin(tt / 80),
        Vt = tt => {
          if (tt <= 0) return 0;
          if (tt > 1) return 1;
          let et = 0;
          const Vt = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Ot = 0; Ot < Vt.length; Ot++) {
            et += (Ot % 2 === 0 ? 1 : -1) * Vt[Ot] * Math.pow(tt, 2 + Ot) / (2 + Ot)
          }
          return 72 * et
        },
        Ot = .3 - .78 * et,
        qt = .5 - .78 * et,
        Dt = .6 - .7 * et,
        mt = .8 - .6 * et;
      let dt = Vt(Ot),
        jt = Vt(qt) - dt,
        Ht = Vt(Dt) - jt - dt,
        Xt = Vt(mt) - Ht - jt - dt;
      Ot < .041 && (jt /= 1 - dt, Ht /= 1 - dt, Xt /= 1 - dt, dt = 0), qt < .041 && (dt /= 1 - jt, Ht /= 1 - jt, Xt /= 1 - jt, jt = 0), Dt < .041 && (dt /= 1 - Ht, jt /= 1 - Ht, Xt /= 1 - Ht, Ht = 0), mt < .041 && (dt /= 1 - Xt, jt /= 1 - Xt, Ht /= 1 - Xt, Xt = 0);
      return {
        commonProb: dt,
        uncommonProb: jt,
        rareProb: Ht,
        epicProb: Xt,
        legendaryProb: 1 - (Xt + Ht + jt + dt)
      }
    }

    function lt(tt, et) {
      const {
        min: Vt,
        max: qt
      } = dt[tt][et], Dt = Ot.e.sampleUniformIntDistribution(Vt, qt, "includeMax");
      return {
        ...Qt(Dt),
        level: Dt
      }
    }
  },
  34351: () => {},
  13066: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14233: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15700: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16202: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);