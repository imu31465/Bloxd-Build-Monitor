export const id = 98;
export const ids = [98, 186];
export const modules = {
  9112: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      EverythingMenu: () => CZ
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1211),
      Zd = kd(1059),
      gd = kd(2041),
      Cd = kd(1461),
      Kd = kd(1124),
      od = kd(1103);

    function ld(dd) {
      let {
        items: Jd,
        link: kd,
        onClick: pd,
        selectedItemId: Nd,
        className: ld,
        padStartsOnTab: Qd = !0
      } = dd;
      const {
        t: Ld
      } = (0, Pd.B)(), Od = (0, Kd.g)(), ed = [];
      for (const Wd of Jd) {
        var Rd;
        const dd = ed[ed.length - 1];
        var Id;
        if (dd && dd.title === (null !== (Rd = Wd.section) && void 0 !== Rd ? Rd : null)) dd.items.push(Wd);
        else ed.push({
          title: null !== (Id = Wd.section) && void 0 !== Id ? Id : null,
          items: [Wd]
        })
      }
      return (0, od.jsxs)("div", {
        className: Wd()("MenuSideBarBody", ld),
        "data-pad-tabs": "2",
        children: [ed.map(((dd, Jd) => {
          var kd;
          return (0, od.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [dd.title && (0, od.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Ld(dd.title)
            }), dd.items.map((dd => {
              var Jd;
              const kd = !!dd.iconElement || !!dd.faIcon;
              return (0, od.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Nd === dd.id ? "true" : void 0,
                "data-pad-default-focus": Qd && Nd === dd.id || void 0,
                className: Wd()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Nd === dd.id
                }),
                onClick: () => {
                  pd(dd.id)
                },
                children: [kd && (0, od.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Jd = dd.iconElement) && void 0 !== Jd ? Jd : (0, od.jsx)(Zd.e, {
                    name: dd.faIcon
                  })
                }), (!Od || !kd) && (0, od.jsx)("div", {
                  children: Ld(dd.title)
                }), dd.redDot && (0, od.jsx)(gd.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, dd.id)
            }))]
          }, null !== (kd = dd.title) && void 0 !== kd ? kd : Jd)
        })), kd && (0, od.jsxs)("div", {
          ...(0, Cd.P)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: kd.onClick,
          children: [(0, od.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, od.jsx)(Zd.e, {
              name: kd.faIcon
            })
          }), (0, od.jsx)("div", {
            children: Ld(kd.title)
          }), (0, od.jsx)(Zd.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Qd = kd(2851),
      Ld = kd(1140),
      Od = kd(2357),
      ed = kd(2974),
      Rd = kd(95),
      Id = kd(1932),
      Gd = kd(2221),
      vd = kd(2229),
      xd = kd(1714),
      qd = kd(1359),
      Bd = kd(4877),
      sd = kd(22),
      ad = kd(9117);

    function Md(dd) {
      let {
        setApplySettingsCallback: Jd
      } = dd;
      const {
        clientEscMenuOptions: kd
      } = (0, sd.j)(["clientEscMenuOptions"]), [Nd, Wd] = (0, pd.useState)(!1), [Pd, Zd] = (0, pd.useState)(!1), [gd, Kd] = (0, pd.useState)(6400), [ld, Qd] = (0, pd.useState)(3600), [Ld, Od] = (0, pd.useState)(!1), [ed, Rd] = (0, pd.useState)(!1);

      function Id(dd) {
        const Jd = "screenshot" === dd ? Zd : Wd;
        Jd(!0);
        const kd = Ld ? "normals" : ed ? "depth" : null;
        ad.devTools.downloadScene(dd, {
          width: gd,
          height: ld,
          colouring: kd
        }).catch((dd => {
          console.error("Couldn't download the scene", dd)
        })).finally((() => {
          Jd(!1)
        }))
      }
      return (0, od.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, od.jsx)(Bd.d, {
          label: "Disable Ambient Occlusion",
          checked: kd.disableAmbientOcclusion,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              disableAmbientOcclusion: dd
            }), Jd((() => Bd.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), ad.devTools.supports("ambientLight") && (0, od.jsx)(Bd.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: kd.ambientLightIntensity,
          onChange: dd => {
            ad.devTools.setAmbientLightIntensity(dd).then((() => {
              sd.d.setClientEscMenuOptions({
                ambientLightIntensity: dd
              })
            })).catch((dd => {
              console.error("Couldn't set the ambient light", dd)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), ad.devTools.supports("weaponRaycasts") && (0, od.jsx)(Bd.d, {
          label: "Show Weapon Raycasts",
          checked: kd.showWeaponRaycasts,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              showWeaponRaycasts: dd
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), ad.devTools.supports("sceneDownload") && (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, od.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, od.jsx)(Bd.d, {
              label: "Apply normal-based coloring",
              checked: Ld,
              onClick: dd => {
                Od(dd), dd && Rd(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, od.jsx)(Bd.d, {
              label: "Apply depth-based coloring",
              checked: ed,
              onClick: dd => {
                Rd(dd), dd && Od(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, od.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, od.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, od.jsx)(xd.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (dd, Jd) => {
                  const kd = parseInt(dd) || 6400;
                  Kd(kd)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: gd.toString()
              }), (0, od.jsx)("span", {
                children: "X"
              }), (0, od.jsx)(xd.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (dd, Jd) => {
                  const kd = parseInt(dd) || 3600;
                  Qd(kd)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: ld.toString()
              })]
            }), (0, od.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, od.jsxs)(Cd.d, {
                onClick: () => {
                  Id("screenshot")
                },
                disabled: Pd,
                children: [Pd && (0, od.jsx)(qd.b, {}), "Download Screenshot"]
              }), (0, od.jsxs)(Cd.d, {
                onClick: () => {
                  Id("glb")
                },
                disabled: Nd,
                children: [Nd && (0, od.jsx)(qd.b, {}), "Download GLB"]
              })]
            })]
          }), (0, od.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Fd = kd(126),
      Yd = kd(1147),
      md = kd(1220),
      bd = kd(2856),
      Sd = kd(1543),
      jd = kd(1288),
      Xd = kd(1253),
      fd = kd(2937),
      nd = kd(2016),
      Ud = kd(1520),
      yd = kd(313),
      Dd = kd(2231),
      Td = kd(2243),
      Ed = kd(2570),
      cd = kd(1675),
      hd = kd(2914),
      rd = kd(2882),
      ud = kd(2945),
      td = kd(201);

    function Vd(dd) {
      const {
        t: Jd,
        selectedLanguage: kd
      } = (0, Pd.B)(), {
        userContext: Nd
      } = (0, Ld.c)(), {
        superRankInfo: Wd
      } = Nd, Zd = dd && ((0, yd.Gc)(Wd) || Nd.ranksMayChange) && (0, Td.purchasesAllowed)(), {
        accountId: gd,
        data: Cd
      } = (0, Ed.h)(hd.d, Zd);
      if ((0, pd.useEffect)((() => {
          if (Zd) return hd.d.watchAccount(), cd.c.addRefetchListener("billing", (dd => {
            "reconnected" === dd ? hd.d.refreshAfterReconnect() : hd.d.refresh()
          }))
        }), [Zd]), !Zd || !(0, yd.Gc)(Wd) || null === Cd || gd !== Nd.whamm) return null;
      const Kd = function(dd, Jd, kd) {
        const pd = ud.m[(0, ud.e)(ud.m, Jd)],
          Nd = void 0 === pd ? void 0 : (0, td.d)(dd.entitlements, pd.entitlementId);
        return void 0 === Nd || null === Nd.expiresAt || (0, rd.h)(Nd) <= kd ? null : Nd.willRenew && null === Nd.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Nd.expiresAt, kd)
        } : {
          renews: !1,
          at: (0, rd.h)(Nd)
        }
      }(Cd, Wd.tier, Date.now());
      if (null === Kd) return null;
      const od = Kd.renews ? "store:renewsOn" : "store:endsOn";
      return Jd(od, {
        date: new Date(Kd.at).toLocaleDateString((0, Pd.n)(kd.code, od), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var zd = kd(1384),
      Hd = kd(1230),
      wd = kd(4770),
      Ad = kd(1492),
      dJ = kd(3543),
      JJ = kd(2214);

    function kJ(dd) {
      let {
        showing: Jd
      } = dd;
      const {
        t: kd
      } = (0, Pd.B)(), {
        data: pd,
        failed: Nd
      } = (0, Ed.h)(dJ.f, Jd);
      return 0 === (null === pd || void 0 === pd ? void 0 : pd.length) || null === pd && !Nd ? null : (0, od.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, od.jsx)("div", {
          className: "AccountSettingsLabel",
          children: kd("paymentHistory:title")
        }), null === pd && Nd && (0, od.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: kd("paymentHistory:loadFailed")
        }), null !== pd && (0, od.jsx)("ul", {
          className: "PaymentHistoryList",
          children: pd.map((dd => (0, od.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, od.jsx)(JJ.d, {
              entry: dd
            }), (0, od.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, od.jsx)("div", {
                children: (0, JJ.j)(kd, dd)
              }), (0, od.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(dd.at).toLocaleDateString(), "number" === typeof dd.orderId && ` \xb7 ${kd("paymentHistory:order",{orderId:dd.orderId})}`]
              })]
            })]
          }, (0, dJ.d)(dd))))
        })]
      })
    }
    var pJ = kd(1892),
      NJ = kd(1266),
      WJ = kd(1371),
      PJ = kd(1332),
      ZJ = kd(1797),
      gJ = kd(2872);
    async function CJ() {
      try {
        return function(dd) {
          const Jd = new Map;
          for (const {
              store: kd,
              status: pd,
              autoRenewStatus: Nd,
              managementUrl: Wd
            }
            of Object.values(dd.subscriptions)) !(0, rd.j)(kd) || (0, rd.m)(pd) || "willNotRenew" === Nd || Jd.has(kd) || Jd.set(kd, null !== Wd && void 0 !== Wd ? Wd : rd.n[kd]);
          return Array.from(Jd, (dd => {
            let [Jd, kd] = dd;
            return {
              store: Jd,
              managementUrl: kd
            }
          }))
        }(await (0, ZJ.m)((0, gJ.f)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (dd) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", dd), null
      }
    }
    var KJ = kd(300),
      oJ = kd(2416);
    const lJ = {
      appStore: {
        name: "App Store",
        ...KJ.Mb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...KJ.Mb.googlePlay
      },
      discord: {
        name: "Discord",
        ...KJ.Mb.discord
      }
    };

    function QJ(dd) {
      let {
        warning: Jd,
        subscriptions: kd
      } = dd;
      const {
        t: pd
      } = (0, Pd.B)();
      return null !== kd && 0 === kd.length ? (0, od.jsx)(od.Fragment, {
        children: pd(Jd)
      }) : (0, od.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [pd(Jd), null === kd && (0, od.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: pd("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== kd && (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: pd("auth:deleteAccountStoreSubscriptions")
          }), (0, od.jsx)(oJ.d, {
            className: "DeleteAccountSubtitleLinks",
            links: kd.map((dd => {
              let {
                store: Jd,
                managementUrl: kd
              } = dd;
              return {
                ...lJ[Jd],
                url: kd
              }
            }))
          })]
        })]
      })
    }

    function LJ(dd) {
      let {
        showing: Jd
      } = dd;
      const {
        userContext: kd,
        isUserContextUpdating: Nd
      } = (0, Ld.c)(), {
        t: Wd
      } = (0, Pd.B)(), [Zd, gd] = (0, pd.useState)(!1), [Kd, ld] = (0, pd.useState)(null), Qd = (0, pd.useRef)(Jd);
      (0, pd.useEffect)((() => (Qd.current = Jd, () => {
        Qd.current = !1
      })), [Jd]);
      const Od = Nd || Zd;
      async function ed() {
        const dd = function(dd) {
            if ((0, Fd.e)()) return "auth:discordActivityDeleteAccountLossWarning";
            return dd ? "auth:deleteAccountLossWarning" : "auth:deleteGuestAccountWarning"
          }(kd.isLoggedIn()),
          Jd = (0, pJ.b)(kd.availableUserContextTypes) ? await CJ() : [];
        if (!Qd.current) return NJ.b.ok();
        if (!0 !== await WJ.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, jd.d)(kd.getPlayerName(), !Rd.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, od.jsx)(QJ, {
              warning: dd,
              subscriptions: Jd
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return NJ.b.ok();
        const pd = await (0, Yd.postJsonWithMetricsCookiesAndJsonResponse)(`${md.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: sd.d.get("gameState")
        }, {
          retries: 3
        }, kd.getMetricsCookies());
        if (pd.error) return NJ.b.error(pd.error);
        if ((0, Fd.e)()) {
          (await PJ.i.discordActivity()).exit("User deleted their account")
        }
        return (0, Yd.forgetStoredGuestAccount)(kd.whamm), (0, Yd.forceGlobalSignOut)(!0), NJ.b.ok()
      }
      return (0, od.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, od.jsxs)(Cd.B, {
          onClick: async function() {
            if (!Zd) {
              gd(!0);
              try {
                const dd = await ed(),
                  Jd = dd.isError() ? dd.asError().message : null;
                ld(Jd)
              } catch (dd) {
                console.error("Failed to delete account:", dd), ld(Wd("auth:genericDeleteAccountError"))
              }
              gd(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Od,
          children: [Od && (0, od.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, od.jsx)(qd.b, {})
          }), Wd("auth:deleteAccount")]
        }), Kd && (0, od.jsx)("div", {
          className: "DeleteAccountError",
          children: Kd
        })]
      })
    }
    var OJ = kd(3462),
      eJ = kd(3478),
      RJ = kd(3473);

    function IJ(dd) {
      let {
        showing: Jd
      } = dd;
      const {
        t: kd
      } = (0, Pd.B)(), {
        data: pd,
        failed: Nd
      } = (0, Ed.h)(OJ.d, Jd), Wd = null === pd ? null : (0, OJ.g)(pd);
      return (0, od.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, od.jsx)("div", {
          className: "AccountSettingsLabel",
          children: kd("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Wd && !Nd && (0, od.jsx)(qd.b, {}), null === Wd && Nd && (0, od.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [kd("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, od.jsx)(Cd.d, {
            className: "SmallTextLight",
            onClick: () => {
              OJ.d.refresh()
            },
            children: kd("general:tryAgain")
          })]
        }), 0 === (null === Wd || void 0 === Wd ? void 0 : Wd.length) && (0, od.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: kd("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Wd && Wd.length > 0 && (0, od.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Wd.map((dd => {
            let {
              name: Jd,
              exclusion: pd
            } = dd;
            const Nd = RJ.g[pd];
            return (0, od.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, od.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Jd
              }), (0, od.jsx)(Cd.f, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, eJ.e)(Nd, Jd, {
                    chatMessage: null
                  })
                },
                children: kd(RJ.j[Nd].text)
              })]
            }, Jd)
          }))
        })]
      })
    }
    const GJ = (0, pd.memo)((function(dd) {
      var Jd;
      let {
        showing: kd,
        inGame: Nd
      } = dd;
      const {
        t: gd,
        selectedLanguage: Kd
      } = (0, Pd.B)(), {
        hideSocialLocationFrom: ld
      } = (0, sd.j)(["hideSocialLocationFrom"]), Od = (0, Qd.b)(), {
        userContext: ed,
        isUserContextUpdating: Id
      } = (0, Ld.c)(), [Gd, vd] = (0, pd.useState)(null !== (Jd = ed.getPlayerName()) && void 0 !== Jd ? Jd : ""), [ad, Md] = (0, pd.useState)(null), {
        purchasing: Ed,
        outcome: cd,
        purchase: hd
      } = (0, bd.c)("/super-rank-welcome"), rd = (0, yd.mc)((0, Pd.n)(Kd.code, "general:timeLeft"), ed.superRankInfo), ud = Vd(kd), td = rd ? gd("general:timeLeft", {
        time: rd
      }) : ud, [dJ, JJ] = (0, pd.useState)(!1), [pJ, NJ] = (0, pd.useState)(!1), WJ = (0, pd.useRef)(null), PJ = (0, pd.useRef)(null), ZJ = (0, nd.d)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), gJ = null === ZJ, CJ = null !== ZJ && void 0 !== ZJ ? ZJ : [], KJ = ed !== Yd.NULL_USER_CONTEXT && !ed.isLoggedIn(), oJ = KJ && 0 !== (null === ZJ || void 0 === ZJ ? void 0 : ZJ.length), [lJ, QJ] = (0, pd.useState)([]), [OJ, eJ] = (0, pd.useState)(!1), RJ = ed.playerHasRank("youtuber"), GJ = (0, pd.useCallback)((() => Ud.d.getPlayerProfile(ed, {
        lowerCaseName: ed.getPlayerName().toLowerCase()
      }).then((dd => {
        QJ(dd.socialLinks)
      })).catch((dd => {
        console.error("Failed to refresh social links", dd)
      }))), [ed]);

      function xJ(dd) {
        dd !== Gd && ((0, jd.p)(dd) ? (dd = (0, jd.t)(dd), Md("Only letters, numbers, and _")) : Md(null), WJ.current && (WJ.current.value = dd), vd(dd))
      }
      return (0, pd.useEffect)((() => (!0 === kd ? (clearInterval(PJ.current), PJ.current = setInterval(Od, 1e3)) : clearInterval(PJ.current), () => {
        clearInterval(PJ.current)
      })), [kd, Od]), (0, pd.useEffect)((() => {
        var dd;
        vd(null !== (dd = ed.getPlayerName()) && void 0 !== dd ? dd : "")
      }), [ed]), (0, pd.useEffect)((() => {
        if (!kd || !RJ || Id) return;
        let dd = !1;
        return eJ(!0), QJ([]), Ud.d.getPlayerProfile(ed, {
          lowerCaseName: ed.getPlayerName().toLowerCase()
        }).then((Jd => {
          dd || QJ(Jd.socialLinks)
        })).catch((dd => {
          console.error("Failed to load social links", dd)
        })).finally((() => {
          dd || eJ(!1)
        })), () => {
          dd = !0
        }
      }), [kd, RJ, Id, ed]), (0, od.jsxs)("div", {
        className: Wd()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Nd
        }),
        children: [Nd && (0, od.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: gd("settingsMenu:accountSettingsInGameWarning")
        }), (0, od.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, od.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [gd("homePage:discordNamePopupTitle"), (0, od.jsxs)(Sd.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Xd.h)({
                name: ed.getPlayerName()
              }),
              onClick: () => {
                sd.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, od.jsx)(Zd.e, {
                name: "arrow-up-right-from-square"
              }), " ", gd("profileCard:viewProfile")]
            })]
          }), (0, od.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, od.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Rd.featureFlags.canChangeName && (0, od.jsx)(xd.e, {
                className: "EnterName",
                placeholderText: gd("homePage:enterName"),
                maxLength: jd.h,
                defaultValue: Gd,
                onValueChange: dd => {
                  xJ(dd)
                },
                forcedText: dJ || !Rd.featureFlags.canChangeName ? Gd : null,
                blurOnEnter: !0,
                domRef: WJ
              }), (0, od.jsx)(Cd.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  xJ((0, jd.e)())
                },
                children: (0, od.jsx)(Zd.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Rd.featureFlags.canChangeName && (0, od.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, jd.d)(Gd, !Rd.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, od.jsx)(Cd.d, {
              className: "ChooseNameButton",
              disabled: dJ || Gd === ed.getPlayerName(),
              onClick: () => {
                Gd.length < jd.l ? Md(gd("homePage:changeNameMinLengthError", {
                  length: jd.l
                })) : Gd.length > jd.h ? Md(gd("homePage:changeNameMaxLengthError", {
                  length: jd.h
                })) : (JJ(!0), Md(null), async function(dd, Jd, kd, pd) {
                  const Nd = await (0, Yd.postJsonWithMetricsCookiesAndJsonResponse)(`${md.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: dd
                  }, {
                    retries: 3
                  }, Jd.getMetricsCookies()).catch((dd => (console.error("Bad response from the server when trying to update name:", dd), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Nd.err ? (console.error("Error when trying to get with new name from DB", Nd.err), pd(Nd.err)) : !0 === Nd.nameExists ? pd("Name is already taken") : kd(dd)
                }(Gd, ed, (dd => {
                  ed.setPlayerName(dd), JJ(!1)
                }), (dd => {
                  Md(dd), JJ(!1)
                })))
              },
              children: gd("general:choose")
            })]
          }), ad && (0, od.jsx)("div", {
            className: "ChooseAccNameError",
            children: ad
          })]
        }), (0, od.jsx)(Bd.d, {
          label: (() => {
            if ((0, Hd.j)(ld)) {
              const dd = (0, Pd.n)(Kd.code, "general:timeLeft"),
                Jd = (0, yd.ib)(dd, Date.now(), ld + Hd.h);
              return `${gd("settingsMenu:hideSocialLocation")} (${gd("general:timeLeft",{time:Jd})})`
            }
            return gd("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const dd = !(0, Hd.j)(ld);
            (0, Ad.reportAnalyticsClick)({
              id: "social.hide_location",
              value: dd ? "on" : "off"
            }), NJ(!0), Ud.d.setHideSocialLocation(ed, dd).then((() => {
              sd.d.set({
                hideSocialLocationFrom: dd ? Date.now() : null
              })
            })).finally((() => {
              NJ(!1)
            }))
          },
          checked: (0, Hd.j)(ld),
          disabled: pJ
        }), RJ && (0, od.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, od.jsx)("div", {
            className: "AccountSettingsLabel",
            children: gd("settingsMenu:socialLinks")
          }), OJ && (0, od.jsx)(qd.b, {}), !OJ && (0, od.jsx)(wd.b, {
            socialLinks: lJ,
            editable: !0,
            userContext: ed,
            onLinksUpdated: GJ
          })]
        }), (0, od.jsxs)("div", {
          className: "SettingBox",
          children: [(0, od.jsx)("div", {
            className: "AccountSettingsLabel",
            children: gd(oJ ? "auth:loginOrSwitchAccount" : "auth:login")
          }), gJ && (0, od.jsx)(qd.b, {}), !gJ && 0 === CJ.length && (0, od.jsx)("div", {
            className: "NoLoginOptions",
            children: gd("auth:noLoginOptions")
          }), !gJ && CJ.length > 0 && "crazygames" !== Fd.t && (0, od.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: CJ
          }), !gJ && CJ.length > 0 && "crazygames" === Fd.t && (0, od.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [CJ[0], CJ.length > 1 && (0, od.jsxs)(od.Fragment, {
              children: [(0, od.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, od.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: gd("auth:legacyLoginOptions")
                }), (0, od.jsx)(zd.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: gd("auth:legacyLoginOptionsInfo")
                })]
              }), (0, od.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: CJ.slice(1)
              })]
            })]
          }), Rd.featureFlags.useLogin && (null !== ed.loggedInInfo || ed.isLoggedIn()) && (0, od.jsxs)(od.Fragment, {
            children: [(0, od.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, od.jsxs)(Cd.B, {
              onClick: () => {
                (0, Yd.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, od.jsx)(Zd.e, {
                name: "right-from-bracket"
              }), gd("auth:signOut")]
            })]
          })]
        }), !ed.playerHasRank("super") && (0, Td.purchasesAllowed)() && (0, od.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, od.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, od.jsx)(Zd.e, {
              name: "bolt"
            }), gd("homePage:superRank")]
          }), (0, od.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, od.jsxs)(Cd.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Dd.q)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, od.jsx)(Zd.e, {
                name: "bolt"
              }), gd("homePage:getSuperRank")]
            }), (0, od.jsxs)(Cd.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Dd.q)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, od.jsx)(Zd.e, {
                name: "bolt"
              }), gd("homePage:giftSuperRank")]
            })]
          })]
        }), ed.playerHasRank("super") && (0, od.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, od.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, od.jsx)(Zd.e, {
              name: "bolt"
            }), gd("homePage:superRank"), td && (0, od.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", td, ")"]
            })]
          }), (0, Td.purchasesAllowed)() && (0, od.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, yd.Gc)(ed.superRankInfo) && (0, od.jsxs)(Cd.j, {
              className: "AccountSettingsSuperRankProlong",
              loading: Ed,
              onClick: () => {
                hd(fd.k.id, null)
              },
              children: [(0, od.jsx)(Zd.e, {
                name: "bolt"
              }), gd("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: fd.k.product.days,
                price: fd.k.price
              })]
            }), (0, od.jsxs)(Cd.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Dd.q)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, od.jsx)(Zd.e, {
                name: "bolt"
              }), gd("homePage:giftSuperRank")]
            })]
          }), cd && (0, od.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: gd(cd.translationKey)
          })]
        }), (0, od.jsx)(kJ, {
          showing: kd
        }), Rd.featureFlags.useSocialFeatures && (0, od.jsx)(IJ, {
          showing: kd
        }), (0, od.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, od.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, od.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: gd(vJ(KJ, oJ))
            }), (0, Fd.e)() && (0, od.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: gd("auth:discordActivityKickWarning")
            }), (0, od.jsx)(LJ, {
              showing: kd
            })]
          }), (0, od.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: gd("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function vJ(dd, Jd) {
      return dd ? Jd ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var xJ = kd(9134),
      qJ = kd(2999),
      BJ = kd(1273),
      sJ = kd(1453);
    const iJ = (0, pd.memo)((function(dd) {
        let {
          inGame: Jd
        } = dd;
        const {
          t: kd,
          selectedLanguage: pd
        } = (0, Pd.B)(), {
          clientEscMenuOptions: Nd,
          showDebugOverlay: Wd
        } = (0, sd.j)(["clientEscMenuOptions", "showDebugOverlay"]), Zd = (0, Od.j)("hideCoordinates");
        let gd = "settingsMenu:showCoordinates",
          Cd = "settingsMenu:showChunkCoordinates";

        function Kd(dd) {
          const Jd = new Intl.DisplayNames([dd], {
            type: "language"
          }).of(dd);
          return Jd.charAt(0).toUpperCase() + Jd.slice(1)
        }
        return Zd && (gd = "settingsMenu:showCoordinatesHidden", Cd = "settingsMenu:showChunkCoordinatesHidden"), (0, od.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Jd && Rd.featureFlags.canUseInviteLinks && (0, od.jsxs)("div", {
            className: "SettingBox",
            children: [(0, od.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: kd("settingsMenu:inviteLink")
            }), (0, od.jsx)(xJ.f, {})]
          }), (0, od.jsxs)("div", {
            className: "SettingBox",
            children: [(0, od.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: kd("settingsMenu:language")
            }), (0, od.jsx)(qJ.c, {
              options: Object.entries(Pd.f).map((dd => {
                let [Jd, kd] = dd;
                return {
                  label: (0, od.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, od.jsx)("img", {
                      src: kd.flagImg,
                      alt: "flag"
                    }), (0, od.jsxs)("span", {
                      children: [Kd(Jd), " ", (0, od.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Jd, ")"]
                      })]
                    })]
                  }),
                  value: Jd
                }
              })),
              value: pd.code,
              onChange: dd => {
                BJ.c.get().setCurrentLanguage(dd.value)
              }
            })]
          }), !(0, Rd.isMobileApp)() && (0, sJ.i)() && Rd.featureFlags.useForceRotateForceFullscreenOverlay && (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:disableFullscreenMode"),
            checked: Nd.disableFullscreen,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                disableFullscreen: dd
              })
            }
          }), (0, od.jsx)(Bd.d, {
            label: kd(gd),
            checked: Nd.showCoordinates,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                showCoordinates: dd
              })
            },
            disabled: Zd
          }), (0, od.jsx)(Bd.d, {
            label: kd(Cd),
            checked: Nd.showChunkCoordinates,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                showChunkCoordinates: dd
              })
            },
            disabled: Zd
          }), (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:showFps"),
            checked: Nd.showFPS,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                showFPS: dd
              })
            }
          }), (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:disableBunnyHopping"),
            checked: Nd.disableBunnyHopping,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                disableBunnyHopping: dd
              })
            }
          }), (0, PJ.t)() && (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:showChat"),
            checked: Nd.showChat,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                showChat: dd
              })
            }
          }), (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:showDebugOverlay"),
            checked: Wd,
            onClick: dd => {
              sd.d.set({
                showDebugOverlay: dd
              })
            }
          }), Rd.featureFlags.useSocialFeatures && (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:showFriendOnlineToasts"),
            checked: Nd.showFriendOnlineToasts,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                showFriendOnlineToasts: dd
              })
            }
          }), (0, od.jsx)(Bd.d, {
            label: kd("settingsMenu:showNewItemIndicator"),
            checked: Nd.showNewItemIndicator,
            onClick: dd => {
              sd.d.setClientEscMenuOptions({
                showNewItemIndicator: dd
              })
            }
          })]
        })
      })),
      aJ = (0, pd.memo)((function() {
        const {
          t: dd
        } = (0, Pd.B)(), {
          soundVolume: Jd,
          musicVolume: kd
        } = (0, sd.j)(["soundVolume", "musicVolume"]);
        return (0, od.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, od.jsx)(Bd.h, {
            name: dd("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: kd,
            onChange: dd => {
              sd.d.set({
                musicVolume: Math.round(100 * dd) / 100
              })
            },
            format: dd => dd.toFixed(2)
          }), (0, od.jsx)(Bd.h, {
            name: dd("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Jd,
            onChange: dd => {
              sd.d.set({
                soundVolume: Math.round(100 * dd) / 100
              })
            },
            format: dd => dd.toFixed(2)
          })]
        })
      }));
    var MJ = kd(699),
      FJ = kd(1459),
      YJ = kd(3555),
      mJ = kd(9142),
      bJ = kd(3342);
    const SJ = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function jJ() {
      const {
        t: dd
      } = (0, Pd.B)(), Jd = (0, bJ.d)(), {
        mobilePushNotificationsCanAsk: kd
      } = (0, sd.j)(["mobilePushNotificationsCanAsk"]), [Nd, Wd] = (0, pd.useState)(null), [Zd, gd] = (0, pd.useState)(!1), [Kd, ld] = (0, pd.useState)(null), [Qd, Ld] = (0, pd.useState)(!1), Od = (0, pd.useCallback)((() => {
        (0, YJ.e)().then((dd => {
          Jd.current && (Wd(dd), gd(!1))
        })).catch((dd => {
          console.error("Failed to load push notification targets:", dd), Jd.current && gd(!0)
        }))
      }), [Jd]), ed = (0, pd.useCallback)((() => {
        (0, mJ.d)().then((dd => {
          Jd.current && ld((() => dd))
        }))
      }), [Jd]);
      (0, pd.useEffect)((() => {
        Od()
      }), [Od]), (0, pd.useEffect)((() => {
        ed()
      }), [ed, kd]), (0, FJ.h)(YJ.k, Od);
      const Rd = null === Nd ? [] : Object.keys(SJ).filter((dd => Nd[dd] > 0));
      return (0, od.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, od.jsx)("div", {
          className: "SliderText",
          children: dd("notificationSettings:pushNotifications")
        }), null === Nd && Zd && (0, od.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: dd("notificationSettings:pushTargetsLoadFailed")
        }), null !== Nd && 0 === Rd.length && (0, od.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: dd("notificationSettings:pushTargetsNone")
        }), Rd.length > 0 && (0, od.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Rd.map((Jd => {
            var kd;
            return (0, od.jsx)("li", {
              children: dd(SJ[Jd], {
                count: null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd[Jd]) && void 0 !== kd ? kd : 0
              })
            }, Jd)
          }))
        }), null !== Kd && (0, od.jsx)(Cd.d, {
          className: "PushNotificationSettingsButton",
          loading: Qd,
          onClick: () => {
            Ld(!0), Kd().catch((dd => {
              console.error("Failed to turn on push notifications:", dd)
            })).finally((() => {
              Jd.current && (Ld(!1), ed())
            }))
          },
          children: dd("notificationSettings:pushTurnOn")
        })]
      })
    }
    const XJ = {
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
      fJ = (0, pd.memo)((function() {
        const {
          t: dd
        } = (0, Pd.B)(), {
          clientEscMenuOptions: Jd
        } = (0, sd.j)(["clientEscMenuOptions"]);
        return (0, od.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, od.jsx)(Bd.g, {
            label: dd("notificationSettings:friendRequests"),
            options: MJ.e.map((Jd => ({
              value: Jd,
              label: dd(XJ[Jd].label)
            }))),
            value: Jd.friendRequestNotifications,
            onChange: dd => {
              sd.d.setClientEscMenuOptions({
                friendRequestNotifications: dd
              })
            },
            circleInfoText: (0, od.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: MJ.e.map((Jd => (0, od.jsxs)("div", {
                children: [(0, od.jsx)("b", {
                  children: dd(XJ[Jd].label)
                }), ": ", dd(XJ[Jd].info)]
              }, Jd)))
            })
          }), (0, od.jsx)(jJ, {})]
        })
      }));
    var nJ = kd(4360),
      UJ = kd(193),
      yJ = kd(282),
      DJ = kd(6534),
      TJ = kd(3282),
      EJ = kd(9151),
      cJ = kd(610),
      hJ = kd(29);
    var rJ = kd(626),
      uJ = kd(33),
      tJ = kd(4212);
    const VJ = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function zJ(dd) {
      return VJ.has(dd) ? Id.gameBridge.lookup("WG", null) : null
    }

    function HJ(dd) {
      if (!(0, cJ.I)(sd.d.get("clientEscMenuOptions")[dd])) return sd.d.get("clientEscMenuOptions")[dd];
      const Jd = zJ(dd);
      return null !== Jd ? Jd[VJ.get(dd)] : uJ.i.getItem(dd)
    }

    function wJ(dd, Jd) {
      if ("useTouchControls" === dd) return void(0, tJ.d)(Jd);
      dd in sd.d.get("clientEscMenuOptions") && sd.d.setClientEscMenuOptions({
        [dd]: Jd
      });
      const kd = zJ(dd);
      null !== kd && Id.gameBridge.send("setChunkAddDistance", {
        ...kd,
        [VJ.get(dd)]: Jd
      }), uJ.i.setItem(dd, Jd)
    }
    var AJ = kd(4269),
      dk = kd(9153),
      Jk = kd(9162),
      kk = kd(4351);

    function pk(dd) {
      var Jd, Nd, Zd, gd;
      let {
        minChunkAddDist: Cd,
        getValue: Kd,
        onChange: ld,
        setApplySettingsCallback: Qd
      } = dd;
      const {
        t: Ld
      } = (0, Pd.B)(), {
        clientEscMenuOptions: ed
      } = (0, sd.j)(["clientEscMenuOptions", "showDistantNametags"]), Id = (0, pd.useRef)(Kd("showFog")), Gd = (0, pd.useRef)(ed.antiAliasing), vd = (0, pd.useRef)(ed.useWebGpu), [xd, qd] = (0, pd.useState)(null), [Md, Fd] = (0, pd.useState)((() => (0, TJ.d)(Rd.featureFlags.settings.canUseShaderPacks))), [Yd] = (0, pd.useState)((() => sd.d.isWebGpuDefaultOff())), [md] = (0, pd.useState)(yJ.i);
      (0, pd.useEffect)((() => {
        let dd = !1;
        return (0, Rd.hasUsableWebGpuAdapter)().then((Jd => {
          dd || qd(Jd)
        })), (0, TJ.g)(Rd.featureFlags.settings.canUseShaderPacks) && (0, DJ.g)().then((async Jd => {
          const pd = null !== Jd && await async function(dd) {
            const [{
              isShaderPackActive: Jd
            }, {
              loadPageShaderPackCompiler: pd
            }] = await Promise.all([kd.e(128).then((() => kd(6526))), Promise.all([kd.e(75), kd.e(132), kd.e(131)]).then((() => kd(6478)))]);
            return Jd(dd, await pd())
          }(Jd);
          dd || Fd(pd)
        })), () => {
          dd = !0
        }
      }), []);
      const bd = function(dd, Jd, kd, pd, Nd) {
          return (0, EJ.d)(kd, pd) && !0 === Jd ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Jd ? "settingsMenu:newWebGpu" : Nd ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: dd && !1 !== Jd,
            disabled: !0 !== Jd
          }
        }(ed.useWebGpu, xd, Md, Yd, md),
        Sd = (ed.useWebGpu || (0, EJ.d)(Md, Yd)) && Md && !0 === xd,
        jd = (0, Od.j)("lightingOverride"),
        Xd = !(0, cJ.I)(jd);
      let fd = "settingsMenu:enableLighting";
      Xd && (fd = jd ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const nd = dd => {
          var Jd, kd, pd;
          const Nd = null !== (Jd = dd.showFog) && void 0 !== Jd ? Jd : Kd("showFog"),
            Wd = null !== (kd = dd.antiAliasing) && void 0 !== kd ? kd : ed.antiAliasing,
            Pd = null !== (pd = dd.useWebGpu) && void 0 !== pd ? pd : ed.useWebGpu,
            Zd = !rJ.x && Nd !== Id.current || Wd !== Gd.current || Pd !== vd.current;
          Qd(Zd ? () => Bd.l : null)
        },
        Ud = (0, Od.j)("fogChunkDistanceOverride"),
        yd = (0, Od.j)("fogBlockDistanceOverride"),
        Dd = !(0, cJ.I)(Ud) || !(0, cJ.I)(yd),
        Td = Dd ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Ed, cd] = (0, nJ.g)(Cd),
        [hd, rd] = (0, kk.k)(Cd),
        ud = Ld("settingsMenu:chunkLoadDistanceDeviceLimit"),
        td = hd < Ed,
        Vd = Math.min(null !== (Jd = Kd("chunkHorizAddDist")) && void 0 !== Jd ? Jd : Cd[0], hd),
        zd = !Dd && function(dd, Jd) {
          return !0 === dd.showFog && dd.fogChunkDistance > Jd
        }(ed, Vd);
      return (0, od.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, od.jsx)(Bd.h, {
          name: Ld("settingsMenu:horizontalChunkLoadDistance"),
          min: Cd[0],
          max: Ed,
          selectableMax: hd,
          cappedNote: ud,
          step: 1,
          initValue: Vd,
          onChange: dd => {
            !0 === Kd("showFog") && dd < Kd("fogChunkDistance") && ld("fogChunkDistance", dd), ld("chunkHorizAddDist", dd), hJ.j.nO("updatedChunkLoadDist")
          },
          circleInfoText: Ld("settingsMenu:chunkLoadDistanceInfo")
        }), (0, od.jsx)(Bd.h, {
          name: Ld("settingsMenu:verticalChunkLoadDistance"),
          min: Cd[1],
          max: cd,
          selectableMax: rd,
          cappedNote: td ? void 0 : ud,
          step: 1,
          initValue: Math.min(null !== (Nd = Kd("chunkVertAddDist")) && void 0 !== Nd ? Nd : Cd[1], rd),
          onChange: dd => {
            ld("chunkVertAddDist", dd), hJ.j.nO("updatedChunkLoadDist")
          },
          circleInfoText: Ld("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, od.jsx)(Bd.d, {
          label: Ld("settingsMenu:chunkFadeIn"),
          checked: ed.chunkFadeIn,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              chunkFadeIn: dd
            })
          },
          circleInfoText: Ld("settingsMenu:chunkFadeInInfo")
        }), ad.devTools.supports("chunkBorders") && (0, od.jsx)(Bd.d, {
          label: Ld("settingsMenu:showChunkBorders"),
          checked: ed.showChunkBorders,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              showChunkBorders: dd
            })
          },
          circleInfoText: Ld("settingsMenu:showChunkBordersInfo")
        }), (0, od.jsx)(Bd.d, {
          label: Ld(fd),
          checked: ed.enableLighting,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              enableLighting: dd
            })
          },
          disabled: Xd
        }), (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, od.jsx)(Bd.d, {
            label: Ld(Td),
            checked: ed.showFog,
            onClick: dd => {
              nd({
                showFog: dd
              }), sd.d.setClientEscMenuOptions({
                showFog: dd
              })
            },
            disabled: Dd,
            className: Wd()({
              SettingBoxWarning: zd
            })
          }), (0, od.jsx)(Bd.h, {
            name: Ld("settingsMenu:fogChunkDistance"),
            min: Cd[0],
            max: UJ.g.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Zd = ed.fogChunkDistance) && void 0 !== Zd ? Zd : Cd[0],
            onChange: dd => {
              sd.d.setClientEscMenuOptions({
                fogChunkDistance: dd
              }), hJ.j.nO("fogChunkDistanceChanged", dd)
            },
            circleInfoText: Ld("settingsMenu:fogChunkDistanceInfo"),
            disabled: Dd || !1 === Kd("showFog"),
            className: Wd()({
              SettingBoxWarning: zd
            })
          }), zd && (0, od.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Ld("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !rJ.x && (0, od.jsx)(Bd.d, {
          label: Ld(Sd ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Sd && ed.disableTexAtlas,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              disableTexAtlas: dd
            })
          },
          circleInfoText: Ld("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Sd
        }), (0, od.jsx)(Bd.h, {
          name: Ld("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: ed.cameraFOV,
          onChange: dd => {
            sd.d.setClientEscMenuOptions({
              cameraFOV: dd
            })
          }
        }), (0, od.jsx)(Bd.d, {
          label: Ld("settingsMenu:disableViewBobbing"),
          checked: ed.disableBobbing,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              disableBobbing: dd
            })
          },
          circleInfoText: Ld("settingsMenu:disableViewBobbingInfo")
        }), (0, od.jsx)(Bd.d, {
          label: Ld("settingsMenu:antiAliasing"),
          checked: ed.antiAliasing,
          onClick: dd => {
            nd({
              antiAliasing: dd
            }), (0, AJ.g)("antiAliasing"), sd.d.setClientEscMenuOptions({
              antiAliasing: dd
            })
          },
          circleInfoText: Ld("settingsMenu:antiAliasingInfo")
        }), (0, od.jsx)(Bd.h, {
          name: Ld("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (gd = ed.pixelScale) && void 0 !== gd ? gd : 1,
          onChange: dd => {
            (dd !== sd.d.get("clientEscMenuOptions").pixelScale || (0, Jk.p)()) && (0, AJ.g)("pixelScale"), sd.d.setClientEscMenuOptions({
              pixelScale: dd
            })
          },
          circleInfoText: Ld("settingsMenu:pixelScaleInfo"),
          format: dd => `${dd}x`
        }), (0, od.jsx)(Bd.d, {
          label: Ld("settingsMenu:pixelSmoothing"),
          checked: ed.pixelSmoothing,
          onClick: dd => {
            sd.d.setClientEscMenuOptions({
              pixelSmoothing: dd
            })
          },
          circleInfoText: Ld("settingsMenu:pixelSmoothingInfo")
        }), rJ.x && (0, od.jsx)(Bd.d, {
          label: Ld("settingsMenu:distantNametags"),
          checked: (0, dk.b)(),
          onClick: dd => {
            sd.d.set({
              showDistantNametags: dd
            })
          },
          circleInfoText: Ld("settingsMenu:distantNametagsInfo")
        }), (0, od.jsx)(Bd.d, {
          label: Ld(bd.translationKey),
          checked: bd.checked,
          onClick: dd => {
            nd({
              useWebGpu: dd
            }), sd.d.setClientEscMenuOptions({
              useWebGpu: dd
            })
          },
          circleInfoText: Ld("settingsMenu:newWebGpuInfo"),
          disabled: bd.disabled
        })]
      })
    }
    var Nk = kd(4261),
      Wk = kd(8787),
      Pk = kd(9176),
      Zk = kd(8804),
      gk = kd(9179);
    const Ck = {
        color: 16777215,
        name: "white"
      },
      Kk = {
        color: 0,
        name: "black"
      },
      lk = [Ck, {
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
      }, Kk],
      Qk = [Kk, Ck];

    function Lk(dd) {
      return `${dd} px`
    }

    function Ok(dd) {
      return `${dd}%`
    }

    function ek(dd) {
      let {
        label: Jd,
        value: kd,
        swatches: pd,
        onChange: Nd
      } = dd;
      const {
        t: Zd
      } = (0, Pd.B)(), gd = !pd.some((dd => dd.color === kd));
      return (0, od.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, od.jsx)("div", {
          className: "SliderText",
          children: Jd
        }), (0, od.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Jd,
          children: [pd.map((dd => {
            let {
              color: Jd,
              name: pd
            } = dd;
            return (0, od.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Jd === kd,
              "aria-label": Zd(`crosshairSettings:color_${pd}`),
              "data-pad-focusable": !0,
              className: Wd()("CrosshairSwatch", {
                Selected: Jd === kd
              }),
              style: {
                background: (0, gk.j)(Jd)
              },
              onClick: () => {
                Nd(Jd)
              }
            }, Jd)
          })), (0, od.jsx)("label", {
            className: Wd()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: gd
            }),
            style: gd ? {
              background: (0, gk.j)(kd)
            } : void 0,
            title: Zd("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, od.jsx)("input", {
              type: "color",
              "aria-label": Zd("crosshairSettings:customColor"),
              value: (0, gk.j)(kd),
              onChange: dd => {
                const Jd = (0, gk.m)(dd.target.value);
                null !== Jd && Nd(Jd)
              }
            })
          })]
        })]
      })
    }

    function Rk(dd) {
      let {
        settings: Jd,
        onChange: kd
      } = dd;
      const {
        t: pd
      } = (0, Pd.B)(), Nd = (dd, pd) => {
        kd((0, gk.o)(Jd, dd, pd))
      }, Wd = function(dd, kd) {
        let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lk;
        const {
          min: Wd,
          max: Pd,
          step: Zd
        } = gk.e[dd];
        return (0, od.jsx)(Bd.h, {
          name: kd,
          min: Wd,
          max: Pd,
          step: Zd,
          initValue: Jd[dd],
          format: pd,
          onChange: Jd => {
            Nd(dd, Jd)
          }
        }, dd)
      }, Zd = ["lines", "dot", "circle"].filter((dd => Jd[dd])), gd = (dd, kd, pd) => (0, od.jsx)(Bd.d, {
        label: kd,
        checked: Jd[dd],
        disabled: 1 === Zd.length && Zd[0] === dd,
        circleInfoText: pd,
        onClick: Jd => {
          Nd(dd, Jd)
        }
      }, dd), Cd = "shapes" === Jd.style;
      return (0, od.jsxs)(od.Fragment, {
        children: [(0, od.jsx)(Bd.g, {
          label: pd("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: pd("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: pd("crosshairSettings:styleShapes")
          }],
          value: Jd.style,
          onChange: dd => {
            Nd("style", dd)
          }
        }), (0, od.jsx)(ek, {
          label: pd("crosshairSettings:color"),
          value: Jd.color,
          swatches: lk,
          onChange: dd => {
            Nd("color", dd)
          }
        }), Wd("opacity", pd("crosshairSettings:opacity"), Ok), !Cd && Wd("size", pd("crosshairSettings:size"), Ok), Cd && (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [gd("lines", pd("crosshairSettings:lines")), Jd.lines && Wd("lineLength", pd("crosshairSettings:lineLength")), Jd.lines && Wd("lineThickness", pd("crosshairSettings:lineThickness")), Jd.lines && Wd("gap", pd("crosshairSettings:gap")), Jd.lines && gd("tStyle", pd("crosshairSettings:tStyle"))]
        }), Cd && (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [gd("dot", pd("crosshairSettings:dot")), Jd.dot && Wd("dotSize", pd("crosshairSettings:dotSize"))]
        }), Cd && (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [gd("circle", pd("crosshairSettings:circle")), Jd.circle && Wd("circleRadius", pd("crosshairSettings:circleRadius")), Jd.circle && Wd("circleThickness", pd("crosshairSettings:circleThickness"))]
        }), (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Wd("outline", pd("crosshairSettings:outline"), (dd => dd > 0 ? Lk(dd) : pd("crosshairSettings:off"))), Jd.outline > 0 && (0, od.jsx)(ek, {
            label: pd("crosshairSettings:outlineColor"),
            value: Jd.outlineColor,
            swatches: Qk,
            onChange: dd => {
              Nd("outlineColor", dd)
            }
          })]
        }), gd("growOnClick", pd("crosshairSettings:growOnClick")), Cd && gd("forGuns", pd("crosshairSettings:forGuns"), pd("crosshairSettings:forGunsInfo"))]
      })
    }
    var Ik = kd(72),
      Gk = kd(1302),
      vk = kd(9184),
      xk = kd(9193),
      qk = kd(9201),
      Bk = kd(9203);
    const sk = ["sky", "grass", "stone", "sand", "snow", "night"],
      ik = "4rem";

    function ak(dd) {
      return {
        backgroundImage: `url(${dd})`,
        backgroundSize: `${ik} ${ik}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Mk(dd) {
      return {
        ...(() => {
          switch (dd) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return ak(vk);
            case "stone":
              return ak(xk);
            case "sand":
              return ak(qk);
            case "snow":
              return ak(Bk);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Fk(dd) {
      return Object.freeze({
        ...gk.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...dd
      })
    }
    const Yk = [{
        id: "default",
        settings: gk.g
      }, {
        id: "cross",
        settings: Fk({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Fk({
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
        settings: Fk({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Fk({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Fk({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Fk({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Fk({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      mk = ["growOnClick", "forGuns"];
    var bk = kd(9210);

    function Sk(dd) {
      let {
        label: Jd,
        selected: kd,
        onClick: pd,
        className: Nd,
        style: Pd,
        children: Zd
      } = dd;
      return (0, od.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": kd,
        title: Jd,
        "aria-label": Jd,
        "data-pad-focusable": !0,
        className: Wd()("CrosshairBackdropSwatch", Nd, {
          Selected: kd
        }),
        style: Pd,
        onClick: pd,
        children: Zd
      })
    }

    function jk(dd) {
      let {
        backdrop: Jd,
        onChange: kd,
        game: pd
      } = dd;
      const {
        t: Nd
      } = (0, Pd.B)();
      return (0, od.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Nd("crosshairSettings:background"),
        children: [pd && (0, od.jsx)(Sk, {
          label: Nd("crosshairSettings:bg_game"),
          selected: pd.selected,
          onClick: pd.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, od.jsx)(Zd.e, {
            name: "cube"
          })
        }), sk.map((dd => (0, od.jsx)(Sk, {
          label: Nd(`crosshairSettings:bg_${dd}`),
          selected: !(null !== pd && void 0 !== pd && pd.selected) && dd === Jd,
          style: Mk(dd),
          onClick: () => {
            kd(dd)
          }
        }, dd)))]
      })
    }

    function Xk(dd) {
      let {
        settings: Jd,
        touch: kd,
        backdrop: pd,
        onChange: Nd
      } = dd;
      const {
        t: Zd
      } = (0, Pd.B)(), gd = function(dd) {
        var Jd;
        return null !== (Jd = Yk.find((Jd => (0, gk.n)(Jd.settings, dd, mk)))) && void 0 !== Jd ? Jd : null
      }(Jd);
      return (0, od.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Zd("crosshairSettings:presets"),
        children: Yk.map((dd => {
          const Pd = (null === gd || void 0 === gd ? void 0 : gd.id) === dd.id;
          return (0, od.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Pd,
            "data-pad-focusable": !0,
            className: Wd()("CrosshairPreset", {
              Selected: Pd
            }),
            onClick: () => {
              Nd(function(dd, Jd) {
                return {
                  ...Jd.settings,
                  growOnClick: dd.growOnClick,
                  forGuns: dd.forGuns
                }
              }(Jd, dd))
            },
            children: [(0, od.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Mk(pd),
              children: (0, od.jsx)(bk.e, {
                settings: dd.settings,
                touch: kd,
                inPreview: !0
              })
            }), (0, od.jsx)("div", {
              className: "CrosshairPresetName",
              children: Zd(`crosshairSettings:preset_${dd.id}`)
            })]
          }, dd.id)
        }))
      })
    }
    var fk = kd(1707);

    function nk(dd, Jd) {
      const [kd, Nd] = (0, pd.useState)(!1), Wd = () => {
        Nd(!1)
      }, [Pd, Zd] = (0, pd.useState)(!1), gd = (0, pd.useRef)({
        growOnClick: dd.growOnClick,
        forGuns: dd.forGuns
      });
      (0, pd.useEffect)((() => {
        const Jd = gd.current;
        gd.current = {
          growOnClick: dd.growOnClick,
          forGuns: dd.forGuns
        }, (dd.growOnClick && !Jd.growOnClick || dd.forGuns && !Jd.forGuns) && Zd(!0)
      }), [dd.growOnClick, dd.forGuns]), (0, pd.useEffect)((() => {
        if (!Pd) return;
        const dd = setTimeout((() => {
          Zd(!1)
        }), 600);
        return () => {
          clearTimeout(dd)
        }
      }), [Pd]);
      const Cd = kd || Pd;
      return {
        view: {
          pressed: Cd,
          spread: Cd && dd.forGuns && !dd.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: dd => {
            !dd.target.closest(Jd) && (0, fk.d)(dd.currentTarget, dd.pointerId) && Nd(!0)
          },
          onPointerUp: Wd,
          onPointerCancel: Wd,
          onLostPointerCapture: Wd
        }
      }
    }

    function Uk(dd) {
      let {
        settings: Jd,
        touch: kd,
        backdrop: pd,
        className: Nd,
        children: Pd,
        label: Zd
      } = dd;
      const gd = nk(Jd, ".CrosshairStageControls");
      return (0, od.jsxs)("div", {
        className: Wd()("CrosshairStage", Nd),
        style: Mk(pd),
        ...gd.handlers,
        children: [(0, od.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Zd,
          children: (0, od.jsx)(bk.e, {
            settings: Jd,
            touch: kd,
            inPreview: !0,
            ...gd.view
          })
        }), Pd]
      })
    }
    const yk = "crosshairFullScreen";

    function Dk(dd) {
      let {
        settings: Jd,
        touch: kd,
        backdrop: Nd,
        onBackdrop: gd,
        inGame: Kd,
        onChange: ld,
        onClose: Qd
      } = dd;
      const {
        t: Ld
      } = (0, Pd.B)(), Od = (0, pd.useRef)(null);
      (0, Gk.s)("popup", Od, Qd),
      function(dd) {
        const Jd = (0, pd.useRef)(dd);
        Jd.current = dd, (0, pd.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [yk]: !0
          }, "");
          let dd = !1;
          const kd = () => {
            dd = !0, Jd.current()
          };
          return window.addEventListener("popstate", kd), () => {
            var Jd;
            window.removeEventListener("popstate", kd), !dd && null !== (Jd = window.history.state) && void 0 !== Jd && Jd[yk] && window.history.back()
          }
        }), [])
      }(Qd);
      const ed = (0, pd.useRef)(Qd);
      ed.current = Qd, (0, pd.useEffect)((() => {
        function dd(dd) {
          "Escape" === dd.key && (dd.stopPropagation(), ed.current())
        }
        return window.addEventListener("keydown", dd, !0), () => {
          window.removeEventListener("keydown", dd, !0)
        }
      }), []);
      const Rd = nk(Jd, ".CrosshairFullScreenPanel"),
        [Id, Gd] = (0, pd.useState)(!0),
        vd = Id && Kd;
      (0, pd.useEffect)((() => {
        if (vd) return sd.d.set({
          crosshairGameView: !0
        }), () => {
          sd.d.set({
            crosshairGameView: !1
          })
        }
      }), [vd]);
      const [xd, qd] = (0, pd.useState)(!0);
      return (0, Ik.createPortal)((0, od.jsxs)("div", {
        ref: Od,
        className: "CrosshairFullScreen",
        style: vd ? void 0 : Mk(Nd),
        ...Rd.handlers,
        children: [(0, od.jsx)(bk.e, {
          settings: Jd,
          touch: kd,
          inEditor: !0,
          ...Rd.view
        }), (0, od.jsxs)("div", {
          className: Wd()("CrosshairFullScreenPanel", {
            Collapsed: !xd
          }),
          children: [(0, od.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, od.jsx)(jk, {
              backdrop: Nd,
              onChange: dd => {
                Gd(!1), gd(dd)
              },
              game: Kd ? {
                selected: vd,
                onSelect: () => {
                  Gd(!0)
                }
              } : void 0
            }), (0, od.jsx)(Cd.G, {
              className: "CrosshairPanelToggle",
              ariaLabel: Ld(xd ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                qd(!xd)
              },
              children: (0, od.jsx)(Zd.e, {
                name: xd ? "caret-up" : "pen"
              })
            }), (0, od.jsx)(Cd.d, {
              className: "CrosshairFullScreenDone",
              onClick: Qd,
              padDefaultFocus: !0,
              children: Ld("crosshairSettings:done")
            })]
          }), xd && (0, od.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, od.jsx)(Xk, {
              settings: Jd,
              touch: kd,
              backdrop: Nd,
              onChange: ld
            }), (0, od.jsx)(Rk, {
              settings: Jd,
              onChange: ld
            })]
          })]
        })]
      }), document.body)
    }
    var Tk = kd(2552),
      Ek = kd(9220);

    function ck(dd) {
      let {
        settings: Jd,
        onChange: kd
      } = dd;
      const {
        t: Nd
      } = (0, Pd.B)(), gd = (0, Ek.j)(Jd), [Kd, ld] = (0, Tk.h)(), [Qd, Ld] = (0, pd.useState)(!1), Od = (0, pd.useRef)(null), [ed, Rd] = (0, Tk.h)(), [Id, Gd] = (0, pd.useState)(!1);
      return (0, od.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, od.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, od.jsxs)(Cd.G, {
            className: Wd()("CrosshairCopy", {
              ActiveSecondaryButton: Kd
            }),
            onClick: () => {
              (0, Tk.e)(gd, {
                useShareSheet: !1,
                onOutcome: dd => {
                  Ld("failed" === dd), "copied" === dd && ld()
                }
              })
            },
            children: [(0, od.jsx)(Zd.e, {
              name: Kd ? "check" : "copy"
            }), " ", Nd(Kd ? "general:copied" : "crosshairSettings:copy")]
          }), (0, od.jsx)(xd.e, {
            className: "CrosshairPaste",
            domRef: Od,
            ariaLabel: Nd("crosshairSettings:paste"),
            placeholderText: Nd("crosshairSettings:paste"),
            onValueChange: dd => {
              const Jd = (0, Ek.f)(dd);
              Gd(!Jd && dd.trim().length >= Ek.c), Jd && (kd(Jd), Od.current.value = "", Rd())
            }
          })]
        }), Qd && (0, od.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: gd,
          "aria-label": Nd("crosshairSettings:copy"),
          onFocus: dd => {
            dd.currentTarget.select()
          }
        }), (0, od.jsxs)("div", {
          "aria-live": "polite",
          children: [Id && (0, od.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Nd("crosshairSettings:pasteInvalid")
          }), ed && !Id && (0, od.jsx)("div", {
            className: "CrosshairShareNote",
            children: Nd("crosshairSettings:applied")
          })]
        })]
      })
    }
    var hk = kd(9222);
    let rk = "sky";

    function uk(dd) {
      let {
        showing: Jd
      } = dd;
      const {
        t: kd
      } = (0, Pd.B)(), {
        isTouchScreen: Nd,
        gameState: Wd,
        clientEscMenuOptions: gd
      } = (0, sd.j)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Kd = (0, hk.h)(), [ld, Qd] = (0, pd.useState)(rk), Ld = dd => {
        rk = dd, Qd(dd)
      }, [Od, ed] = (0, pd.useState)(!1);
      return (0, pd.useEffect)((() => {
        Jd || ed(!1)
      }), [Jd]), (0, od.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, od.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, od.jsx)(Uk, {
            className: "CrosshairPreviewStage",
            settings: Kd,
            touch: Nd,
            backdrop: ld,
            label: kd("crosshairSettings:preview"),
            children: (0, od.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, od.jsx)(jk, {
                backdrop: ld,
                onChange: Ld
              }), (0, od.jsxs)(Cd.G, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  ed(!0)
                },
                children: [(0, od.jsx)(Zd.e, {
                  name: "expand"
                }), " ", kd("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, od.jsx)("div", {
          className: "SettingBox",
          children: (0, od.jsx)(Xk, {
            settings: Kd,
            touch: Nd,
            backdrop: ld,
            onChange: hk.d
          })
        }), (0, od.jsx)(ck, {
          settings: Kd,
          onChange: hk.d
        }), Nd && (0, od.jsx)(Zk.c, {
          note: (0, Pk.i)(Nd, gd.touchActionButtons) ? kd("crosshairSettings:touchNote") : void 0
        }), (0, od.jsx)(Rk, {
          settings: Kd,
          onChange: hk.d
        }), Od && (0, od.jsx)(Dk, {
          settings: Kd,
          touch: Nd,
          backdrop: ld,
          onBackdrop: Ld,
          inGame: "inGame" === Wd,
          onChange: hk.d,
          onClose: () => {
            ed(!1)
          }
        })]
      })
    }
    var tk = kd(8796),
      Vk = kd(1410),
      zk = kd(4869),
      Hk = kd(9226),
      wk = kd(1968),
      Ak = kd(4131),
      dp = kd(1971),
      Jp = kd(708);
    const kp = (0, pd.memo)((function() {
      const {
        clientEscMenuOptions: dd
      } = (0, sd.j)(["clientEscMenuOptions"]), {
        recording: Jd,
        clipping: kd,
        hasClipBuffer: Nd
      } = (0, wk.k)("replayRecorder"), Pd = (0, wk.g)("connectedGame", (dd => dd.replay)), Zd = (0, Ak.m)(), gd = !1 === (0, Od.j)("canRecordReplays");
      (0, pd.useEffect)((() => {
        Id.gameBridge.send("setRecorderPrefs", {
          clipping: dd.enableClipping,
          clipSeconds: dd.clipDurationSeconds
        })
      }), [dd.enableClipping, dd.clipDurationSeconds]);
      const Kd = Zd || Pd,
        ld = !Kd && !gd,
        Qd = Jd || ld,
        Ld = ld,
        ed = Ld && kd && !Jd;

      function Rd() {
        Qd && Id.gameBridge.send("toggleRecording", null)
      }
      return (0, od.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, od.jsxs)("div", {
          className: "SettingBox",
          children: [(0, od.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Jd ? (0, od.jsxs)(od.Fragment, {
              children: [(0, od.jsxs)(Cd.B, {
                className: "ReplayViewerCategoryButton",
                onClick: Rd,
                disabled: !Qd,
                children: [(0, od.jsx)("span", {
                  children: "Stop Recording"
                }), (0, od.jsx)(dp.c, {
                  noaAction: "recordGame"
                })]
              }), (0, od.jsx)(Hk.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, od.jsxs)(Cd.d, {
              className: "ReplayViewerCategoryButton",
              onClick: Rd,
              disabled: !Qd,
              children: [(0, od.jsx)("span", {
                children: "Start Recording"
              }), (0, od.jsx)(dp.c, {
                noaAction: "recordGame"
              })]
            })
          }), gd && (0, od.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Kd && !Jd && (0, od.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, od.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, od.jsx)(Bd.d, {
            label: "Enable clipping",
            checked: dd.enableClipping,
            disabled: !Ld,
            onClick: function(dd) {
              Ld && sd.d.setClientEscMenuOptions({
                enableClipping: dd
              })
            },
            className: Wd()({
              SettingBoxDisabled: !Ld
            })
          }), (0, od.jsx)(Bd.h, {
            name: "Clip duration (seconds)",
            min: Jp.n,
            max: Jp.j,
            step: Jp.e,
            initValue: dd.clipDurationSeconds,
            onChange: function(dd) {
              sd.d.setClientEscMenuOptions({
                clipDurationSeconds: dd
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Ld || !dd.enableClipping
          })]
        }), (0, od.jsxs)("div", {
          className: "SettingBox",
          children: [(0, od.jsxs)(Cd.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              ed && Id.gameBridge.send("saveClip", null)
            },
            disabled: !ed,
            children: [(0, od.jsx)("span", {
              children: "Record clip"
            }), (0, od.jsx)(dp.c, {
              noaAction: "recordClip"
            })]
          }), dd.enableClipping && !Nd && Ld && !Jd && (0, od.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Jd && (0, od.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, od.jsxs)("div", {
          className: "SettingBox",
          children: [(0, od.jsxs)(Cd.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Ak.i)(!0), sd.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: Zd,
            children: [(0, od.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, od.jsx)(dp.c, {
              noaAction: "replayViewerOpen"
            })]
          }), Zd && (0, od.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, od.jsxs)("div", {
          className: "SettingBox",
          children: [(0, od.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, od.jsx)("iframe", {
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
    var pp = kd(1901);
    const Np = {
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
        icon: () => (0, od.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, od.jsx)("path", {
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
      EQ: {
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

    function Wp() {
      return Promise.all([kd.e(75), kd.e(132), kd.e(126), kd.e(123)]).then((() => kd(41065))).then((dd => ({
        default: dd.ShaderPackCategory
      })), (dd => (console.error("Failed to load the shader pack settings", dd), {
        default: Pp
      })))
    }

    function Pp() {
      const {
        t: dd
      } = (0, Pd.B)();
      return (0, od.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: dd("shaderPack:tabLoadFailed")
      })
    }
    var Zp = kd(1404);
    const gp = (0, pd.lazy)((() => kd.e(264).then((() => kd(41054))).then((dd => ({
        default: dd.BloxdInformation
      }))))),
      Cp = (0, pd.lazy)(Wp);

    function Kp(dd) {
      return dd ? "general" : "account"
    }
    const op = new Map,
      lp = (0, pd.memo)((function(dd) {
        let {
          show: Jd,
          setBeforeResumeCallback: kd
        } = dd;
        (0, ed.b)();
        const {
          gameState: Nd,
          openSettingsCategory: Wd
        } = (0, sd.j)(["gameState", "openSettingsCategory"]), {
          userContext: gd
        } = (0, Ld.c)(), {
          t: Kd
        } = (0, Pd.B)(), xd = (0, Qd.b)(), qd = (0, Od.j)("minChunkAddDist"), Bd = "inGame" === Nd, [ad, Yd] = (0, pd.useState)(Kp(Bd)), [md, bd] = (0, pd.useState)(null), [Sd, jd] = (0, pd.useState)([]), Xd = (0, pd.useRef)(function() {
          const dd = new Date,
            Jd = 6 * (dd.getMonth() + dd.getDate()) % KJ.A.length;
          return [...KJ.A, ...KJ.A].slice(Jd, Jd + 6)
        }()), fd = (0, pd.useRef)(null), nd = (0, FJ.i)(Vk.j, (0, Vk.c)()), Ud = Object.keys(Np).filter((dd => {
          switch (dd) {
            case "replayViewer":
              return Bd;
            case "developerTools":
              return gd.playerHasRank("developer") || !1;
            case "texturePack":
              return Rd.featureFlags.settings.canChangeTexturePack;
            case "EQ":
              return Rd.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Rd.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Fd.t;
            case "controller":
              return Rd.featureFlags.useControllerSupport && (nd || "controller" === ad);
            default:
              return !0
          }
        }));
        (0, FJ.h)("toggleFullCoordinateOverlay", (() => {
          const dd = HJ("showCoordinates") && HJ("showChunkCoordinates") && HJ("showFPS");
          wJ("showCoordinates", !dd), wJ("showChunkCoordinates", !dd), wJ("showFPS", !dd), xd()
        })), (0, FJ.h)("updatedChunkLoadDist", (() => {
          xd()
        })), (0, pd.useEffect)((() => {
          if (bd(null), null === sd.d.get("openSettingsCategory")) {
            const dd = (0, Zp.d)() ? op.get(Bd) : void 0;
            Yd(dd && Ud.includes(dd) ? dd : Kp(Bd))
          }
        }), [Jd]), (0, pd.useEffect)((() => {
          null !== Wd && (Yd(Wd), op.set(Bd, Wd), sd.d.set({
            openSettingsCategory: null
          }))
        }), [Wd, Bd]), (0, pd.useLayoutEffect)((() => {
          fd.current && (fd.current.scrollTop = 0)
        }), [ad, Jd]), (0, pd.useEffect)((() => {
          "updateLog" === ad && (0, vd.b)().then(jd)
        }), [ad]), (0, pd.useEffect)((() => {
          if ((0, cJ.I)(qd)) return;
          const [dd, Jd] = (0, Nk.g)(), [kd, pd] = (0, nJ.g)(qd), Nd = (0, pp.h)(qd[0], dd, kd), Wd = (0, pp.h)(qd[1], Jd, pd);
          Id.gameBridge.send("setChunkAddDistance", {
            horizontal: Nd,
            vertical: Wd
          })
        }), [qd]);
        const yd = (0, pd.useCallback)((async () => {
          md && (await md(), bd(null))
        }), [md]);

        function Dd() {
          sd.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, pd.useEffect)((() => {
          kd((() => yd))
        }), [yd, kd]), (0, od.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Jd ? {} : {
            display: "none"
          },
          children: [(0, od.jsx)("div", {
            className: "MenuSideBar",
            children: (0, od.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, od.jsx)(ld, {
                items: Ud.map((dd => {
                  const Jd = Np[dd].icon;
                  return {
                    id: dd,
                    faIcon: "string" === typeof Jd ? Jd : void 0,
                    iconElement: "string" === typeof Jd ? void 0 : (0, od.jsx)(Jd, {}),
                    title: Kd(Np[dd].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: ad,
                onClick: dd => {
                  !async function(dd) {
                    await yd(), Yd(dd), op.set(Bd, dd)
                  }(dd)
                }
              })
            })
          }), (0, od.jsxs)("div", {
            ref: fd,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === ad && (0, od.jsx)(GJ, {
              showing: Jd,
              inGame: Bd
            }), "general" === ad && (0, od.jsx)(iJ, {
              inGame: Bd
            }), "audio" === ad && (0, od.jsx)(aJ, {}), "notifications" === ad && (0, od.jsx)(fJ, {}), "graphics" === ad && (0, od.jsx)(pk, {
              minChunkAddDist: null !== qd && void 0 !== qd ? qd : [2, 2],
              getValue: HJ,
              onChange: wJ,
              setApplySettingsCallback: bd
            }), "controls" === ad && (0, od.jsx)(Wk.g, {}), "crosshair" === ad && (0, od.jsx)(uk, {
              showing: Jd
            }), "controller" === ad && Rd.featureFlags.useControllerSupport && (0, od.jsx)(tk.e, {}), Rd.featureFlags.settings.canChangeTexturePack && "texturePack" === ad && (0, od.jsx)(zk.e, {
              setApplySettingsCallback: bd
            }), Rd.featureFlags.settings.canUseShaderPacks && "EQ" === ad && (0, od.jsx)(pd.Suspense, {
              fallback: null,
              children: (0, od.jsx)(Cp, {
                setApplySettingsCallback: bd
              })
            }), "updateLog" === ad && (0, od.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, od.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Sd.map(((dd, Jd) => (0, od.jsx)(Gd.c, {
                  updateLog: dd,
                  index: Jd,
                  close: Dd
                }, Jd)))
              })
            }), "information" === ad && (0, od.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, od.jsx)(pd.Suspense, {
                fallback: null,
                children: (0, od.jsx)(gp, {})
              })
            }), "alternativeDomains" === ad && (0, od.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, od.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Kd("settingsMenu:unblockedDomainsDescription")
              }), (0, od.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Xd.current.map((dd => (0, od.jsxs)(Cd.d, {
                  onClick: () => {
                    window.open(`https://${dd}`)
                  },
                  children: [(0, od.jsx)(Zd.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", dd]
                }, dd)))
              })]
            }), "replayViewer" === ad && (0, od.jsx)(kp, {}), "developerTools" === ad && (0, od.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, od.jsx)(Md, {
                setApplySettingsCallback: bd
              })
            }), null !== md && (0, od.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, od.jsx)(Cd.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: yd,
                children: Kd("general:apply")
              })
            })]
          })]
        })
      }));
    var Qp = kd(2502);
    const Lp = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Op = (0, pd.lazy)((() => Promise.resolve().then((() => kd(4520))).then((dd => {
        dd.needGameClientAfterPaint();
        const Jd = dd.matchmakingLibrariesPromise.then((dd => (0, Qp.d)(dd.loadCharacterCustomisationUI(), (dd => dd.CharacterCustomisationUI))));
        return Promise.all([dd.ensureGameSetup(), Jd]).then((dd => {
          let [, Jd] = dd;
          return Jd
        }))
      }))));

    function ep(dd) {
      let {
        show: Jd
      } = dd;
      const {
        userContext: kd
      } = (0, Ld.c)(), [Nd, Wd] = (0, pd.useState)("characters");
      if (!Jd) return null;
      const Pd = Lp.filter((dd => "cape" !== dd && "nameColour" !== dd || kd.getPlayerRanks().includes("super") || (0, Td.purchasesAllowed)())).map((dd => ({
        id: dd,
        faIcon: KJ.I[dd],
        title: KJ.K[dd],
        redDot: !1
      })));
      return (0, od.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, od.jsx)("div", {
          className: "MenuSideBar",
          children: (0, od.jsx)(ld, {
            items: Pd,
            selectedItemId: Nd,
            onClick: dd => {
              Wd(dd)
            }
          })
        }), (0, od.jsx)("div", {
          className: "MenuBody",
          children: (0, od.jsx)(pd.Suspense, {
            fallback: (0, od.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, od.jsx)(qd.b, {})
            }),
            children: (0, od.jsx)(Op, {
              selectedTab: Nd
            })
          })
        })]
      })
    }
    var Rp = kd(1482),
      Ip = kd(1488),
      Gp = kd(9234),
      vp = kd(4389),
      xp = kd(3253),
      qp = kd(3300),
      Bp = kd(9257),
      sp = kd(8681),
      ip = kd(9242),
      ap = kd(9250),
      Mp = kd(1924),
      Fp = kd(1904),
      Yp = kd(4794),
      mp = kd(1279),
      bp = kd(1245),
      Sp = kd(1699),
      jp = kd(8762),
      Xp = kd(2369),
      fp = kd(2372);

    function np(dd) {
      return dd ? Object.keys(dd).sort(((Jd, kd) => {
        var pd, Nd, Wd, Pd;
        const Zd = (null !== (pd = null === (Nd = dd[kd]) || void 0 === Nd ? void 0 : Nd.sortPriority) && void 0 !== pd ? pd : 0) - (null !== (Wd = null === (Pd = dd[Jd]) || void 0 === Pd ? void 0 : Pd.sortPriority) && void 0 !== Wd ? Wd : 0);
        return 0 !== Zd ? Zd : Jd.localeCompare(kd)
      })) : []
    }
    const Up = [{
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

    function yp(dd) {
      for (const {
          threshold: Jd,
          suffix: kd
        }
        of Up)
        if (dd >= Jd) {
          const pd = dd / Jd;
          return pd >= 100 ? `${Math.floor(pd)}${kd}` : pd >= 10 ? `${pd.toFixed(1).replace(/\.0$/,"")}${kd}` : `${pd.toFixed(2).replace(/\.?0+$/,"")}${kd}`
        } return String(dd)
    }
    var Dp = kd(4904);
    const Tp = {
        normal: "0.8em",
        big: "1em"
      },
      Ep = (0, pd.memo)((function(dd) {
        let {
          item: Jd,
          amount: kd = 0,
          size: pd = "normal",
          tier: Nd = null
        } = dd;
        return (0, od.jsx)("div", {
          className: Wd()("SmpSlot", `SmpSlot-${pd}`),
          children: Jd && (0, od.jsx)(Mp.d, {
            itemName: Jd,
            amount: kd > 1 ? kd : 0,
            amountFontSize: Tp[pd],
            enchantmentTier: Nd
          })
        })
      }));

    function cp(dd) {
      let {
        amount: Jd,
        exact: kd = !1,
        className: pd
      } = dd;
      return (0, od.jsxs)("span", {
        className: Wd()("SmpGold", pd),
        children: [(0, od.jsx)("span", {
          className: "SmpCoin",
          children: (0, od.jsx)(Mp.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), kd ? Jd.toLocaleString("en-US") : yp(Jd)]
      })
    }

    function hp(dd) {
      let {
        count: Jd = 5,
        grid: kd = !1
      } = dd;
      return (0, od.jsx)("div", {
        className: kd ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Jd
        }, ((dd, Jd) => (0, od.jsxs)("div", {
          className: Wd()(kd ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, od.jsx)("div", {
            className: Wd()("SmpSlot", kd ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, od.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, od.jsx)("b", {}), (0, od.jsx)("small", {})]
          }), (0, od.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Jd)))
      })
    }

    function rp(dd) {
      let {
        title: Jd,
        children: kd
      } = dd;
      return (0, od.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, od.jsx)("b", {
          children: Jd
        }), kd && (0, od.jsx)("small", {
          children: kd
        })]
      })
    }

    function tp(dd) {
      let {
        entry: Jd
      } = dd;
      return (0, od.jsx)(rp, {
        title: (0, od.jsx)(Fp.c, {
          text: Jd.item.customTitle
        }),
        children: (0, od.jsx)(Fp.c, {
          text: Jd.item.description
        })
      })
    }

    function Vp(dd) {
      return (0, od.jsx)(Dp.c, {
        ...dd,
        className: Wd()("SmpChoice", dd.className),
        reselectable: !0
      })
    }

    function zp() {
      return (0, od.jsx)("span", {
        className: "SmpLoader",
        children: (0, od.jsx)(qd.b, {})
      })
    }

    function Hp(dd) {
      let {
        value: Jd,
        onChange: kd,
        min: Nd = 1,
        max: Wd,
        step: Pd = 1,
        label: Zd
      } = dd;
      const gd = (0, pd.useRef)(null),
        Cd = (0, pd.useRef)(Jd);
      Cd.current = Jd;
      const [Kd, ld] = (0, pd.useState)(null), Qd = dd => Math.max(Nd, Math.min(Wd, Math.floor(dd))), Ld = dd => {
        const Jd = Cd.current,
          pd = "function" === typeof Pd ? Pd(Jd, dd) : Pd,
          Nd = Qd(Jd + pd * dd);
        Cd.current = Nd, kd(Nd)
      };
      (0, pd.useEffect)((() => {
        if (null === Kd) return;
        let dd;
        const Jd = () => {
            ld(null)
          },
          kd = setTimeout((() => {
            dd = setInterval((() => {
              Ld(Kd);
              const dd = Cd.current;
              (Kd > 0 ? dd >= Wd : dd <= Nd) && Jd()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Jd), window.addEventListener("pointercancel", Jd), window.addEventListener("blur", Jd), () => {
          clearTimeout(kd), clearInterval(dd), window.removeEventListener("pointerup", Jd), window.removeEventListener("pointercancel", Jd), window.removeEventListener("blur", Jd)
        }
      }), [Kd]), (0, pd.useEffect)((() => {
        const dd = gd.current;
        dd && document.activeElement !== dd && dd.value !== String(Jd) && (dd.value = String(Jd))
      }), [Jd]), (0, pd.useEffect)((() => {
        const dd = gd.current;
        if (!dd) return;
        const Jd = () => {
          dd.value = String(Cd.current)
        };
        return dd.addEventListener("blur", Jd), () => {
          dd.removeEventListener("blur", Jd)
        }
      }), []);
      const Od = dd => (0, od.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${dd>0?"More":"Less"} ${Zd}`,
        disabled: dd > 0 ? Jd >= Wd : Jd <= Nd,
        onPointerDown: Jd => {
          0 === Jd.button && (Ld(dd), ld(dd))
        },
        onKeyDown: Jd => {
          "Enter" !== Jd.key && " " !== Jd.key || Ld(dd)
        },
        onContextMenu: dd => {
          dd.preventDefault()
        },
        children: dd > 0 ? "+" : "\u2212"
      });
      return (0, od.jsxs)("div", {
        className: "SmpStepper",
        children: [Od(-1), (0, od.jsx)(xd.e, {
          className: "SmpStepperInput",
          domRef: gd,
          defaultValue: String(Jd),
          ariaLabel: Zd,
          type: "text",
          blurOnEnter: !0,
          onValueChange: dd => {
            const Jd = dd.replace(/[^\d]/g, "");
            gd.current && Jd !== dd && (gd.current.value = Jd), "" !== Jd && kd(Qd(Number(Jd)))
          }
        }), Od(1)]
      })
    }

    function wp(dd) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, dd))) - 1))
    }
    var Ap = kd(9252),
      dN = kd(1260);
    const JN = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    dN.y, yd.Oc.length;
    new Map;
    var kN = kd(3130);

    function pN(dd, Jd) {
      var kd;
      return Jd && (null === (kd = dd[Jd]) || void 0 === kd ? void 0 : kd.smp) || null
    }

    function NN(dd, Jd) {
      const kd = [];
      for (const Nd of np(dd)) {
        var pd;
        const Wd = dd[Nd];
        (null === (pd = Wd.smp) || void 0 === pd ? void 0 : pd.kind) === Jd && kd.push({
          key: Nd,
          item: Wd,
          meta: Wd.smp
        })
      }
      return kd
    }

    function WN(dd, Jd) {
      var kd;
      return null !== (kd = NN(dd, Jd)[0]) && void 0 !== kd ? kd : null
    }
    const PN = "50% 0% 50% 0%",
      ZN = [{
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

    function gN(dd) {
      const Jd = dd - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: kd,
          suffix: pd
        }
        of ZN)
        if (Jd >= kd) return `${Math.floor(Jd/kd)}${pd}`;
      return "<1s"
    }

    function CN(dd) {
      const Jd = dd.map(sp.h),
        kd = [];
      return Jd.forEach(((dd, pd) => {
        const Nd = function(dd) {
            const Jd = dd.match(/\d+/);
            return Jd ? Number(Jd[0]) : 0
          }(dd),
          Wd = pd === Jd.length - 1;
        (Wd || 1 === Nd || 10 === Nd || 100 === Nd) && kd.push({
          label: dd,
          quantity: Nd,
          isAll: Wd
        })
      })), kd
    }
    let KN = null;

    function oN(dd, Jd) {
      const kd = Jd.trim().toLowerCase();
      if (!kd) return [];
      const pd = dd => {
          if (dd === kd) return 0;
          if (dd.startsWith(kd)) return 1;
          const Jd = dd.indexOf(kd);
          return -1 === Jd ? -1 : 2 + Jd
        },
        Nd = [];
      for (const Zd of dd) {
        const dd = [pd(Zd.lowerLabel), pd(Zd.lowerName)].filter((dd => -1 !== dd));
        dd.length && Nd.push({
          item: Zd,
          rank: Math.min(...dd)
        })
      }
      if (Nd.length > 0) return Nd.sort(((dd, Jd) => dd.rank - Jd.rank)).map((dd => dd.item));
      const Wd = [...kd],
        Pd = dd => {
          let Jd = 0;
          for (const kd of Wd) {
            if (Jd = dd.indexOf(kd, Jd), -1 === Jd) return !1;
            Jd++
          }
          return !0
        };
      return dd.filter((dd => Pd(dd.lowerLabel) || Pd(dd.lowerName)))
    }

    function lN(dd, Jd) {
      var kd;
      return null !== (kd = null === dd || void 0 === dd ? void 0 : dd[Jd]) && void 0 !== kd ? kd : Jd
    }

    function QN(dd, Jd) {
      const kd = dd.userInput;
      return void 0 !== Jd && "dropdown" === (null === kd || void 0 === kd ? void 0 : kd.type) && kd.dropdownOptions.map(sp.h).includes(Jd) ? Jd : function(dd) {
        const Jd = dd.userInput;
        if ("dropdown" !== (null === Jd || void 0 === Jd ? void 0 : Jd.type) || 0 === Jd.dropdownOptions.length) return null;
        const kd = Jd.dropdownOptions.map(sp.h);
        return Jd.initialValue && kd.includes(Jd.initialValue) ? Jd.initialValue : kd[kd.length - 1]
      }(dd)
    }

    function LN(dd) {
      return void 0 === dd ? "" : JSON.stringify(dd)
    }
    const ON = (0, pd.createContext)(null);

    function eN() {
      return (0, pd.useContext)(ON)
    }
    var RN = kd(2581);
    const IN = (0, pd.memo)((function(dd) {
        let {
          name: Jd,
          label: kd,
          onPick: pd
        } = dd;
        return (0, od.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: kd,
          onClick: () => {
            pd(Jd)
          },
          children: [(0, od.jsx)(Ep, {
            item: Jd,
            size: "big"
          }), (0, od.jsx)("span", {
            children: kd
          })]
        })
      })),
      GN = (0, pd.memo)((function(dd) {
        let {
          items: Jd,
          query: kd,
          onPick: Nd
        } = dd;
        const {
          t: Wd
        } = (0, Pd.B)(), [Zd, gd] = (0, pd.useState)(new Set), Cd = (0, pd.useMemo)((() => function(dd) {
          const Jd = new Map;
          for (const kd of dd) {
            let dd = Jd.get(kd.category);
            dd || (dd = [], Jd.set(kd.category, dd)), dd.push(kd)
          }
          return [...JN, "other"].filter((dd => Jd.has(dd))).map((dd => ({
            category: dd,
            items: Jd.get(dd)
          })))
        }(Jd)), [Jd]), Kd = (0, pd.useMemo)((() => oN(Jd, kd).slice(0, 60)), [Jd, kd]);
        return kd.trim() ? 0 === Kd.length ? (0, od.jsx)(rp, {
          title: Wd("smpShop:noItemsFound", {
            query: kd.trim()
          }),
          children: Wd("smpShop:tryShorterName")
        }) : (0, od.jsx)(RN.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: PN,
          observerUpdateDeps: [kd],
          children: Kd.map((dd => (0, od.jsx)(IN, {
            name: dd.name,
            label: dd.label,
            onPick: Nd
          }, dd.name)))
        }) : (0, od.jsx)(od.Fragment, {
          children: Cd.map((dd => {
            let {
              category: Jd,
              items: kd
            } = dd;
            const pd = Zd.has(Jd) || kd.length <= 48,
              Pd = pd ? kd : kd.slice(0, 48);
            return (0, od.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, od.jsxs)("h4", {
                children: [Wd("other" === Jd ? "smpShop:otherItems" : `creativeInventory:${Jd}`), !pd && (0, od.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    gd(new Set([...Zd, Jd]))
                  },
                  children: Wd("smpShop:showAll", {
                    count: kd.length
                  })
                })]
              }), (0, od.jsx)(RN.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: PN,
                observerUpdateDeps: [pd],
                children: Pd.map((dd => (0, od.jsx)(IN, {
                  name: dd.name,
                  label: dd.label,
                  onPick: Nd
                }, dd.name)))
              })]
            }, Jd)
          }))
        })
      }));

    function vN(dd, Jd) {
      const {
        searched: kd,
        shown: Nd,
        searchFor: Wd,
        loading: Pd
      } = function(dd, Jd) {
        var kd;
        const Nd = eN(),
          [Wd, Pd] = (0, pd.useState)(void 0),
          Zd = (0, pd.useRef)(void 0),
          gd = (0, pd.useRef)(0),
          Cd = (0, pd.useRef)(void 0),
          Kd = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.meta.item) && void 0 !== kd ? kd : null,
          od = !!dd && Nd.isPending(dd.key);
        (0, pd.useEffect)((() => {
          if (!dd || od || !Jd || void 0 === Wd || Wd === Kd) return;
          const kd = Wd === Zd.current && Nd.gaveUpAt(dd.key) > gd.current && Cd.current !== Wd;
          (Wd !== Zd.current || kd) && Nd.act(dd.key, null !== Wd && void 0 !== Wd ? Wd : "*", kd) && (kd && (Cd.current = Wd), Zd.current = Wd, gd.current = Date.now())
        }), [dd, od, Jd, Wd, Kd, Nd]);
        const ld = (0, pd.useCallback)((dd => {
            Zd.current = void 0, Cd.current = void 0, Pd(dd)
          }), []),
          Qd = void 0 !== Wd && Wd !== Kd && (od || Zd.current !== Wd);
        return {
          searched: Kd,
          shown: Qd ? Wd : Kd,
          searchFor: ld,
          loading: Qd || od || null !== Kd && !Jd
        }
      }(dd, Jd), Zd = (0, pd.useMemo)((() => function() {
        var dd;
        let Jd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Nd = `${(0,kN.e)()}\x1f${Jd.join("\x1e")}\x1f${kd.join("\x1e")}\x1f${JSON.stringify(pd)}`;
        if ((null === (dd = KN) || void 0 === dd ? void 0 : dd.key) === Nd) return KN.items;
        const Wd = new Set(kd),
          Pd = new Set,
          Zd = [],
          gd = (dd, Jd) => {
            var kd;
            if (!dd || Pd.has(dd) || Wd.has(dd)) return;
            Pd.add(dd);
            const Nd = null !== (kd = pd[dd]) && void 0 !== kd ? kd : dd;
            Zd.push({
              name: dd,
              label: Nd,
              lowerLabel: Nd.toLowerCase(),
              lowerName: dd.toLowerCase(),
              category: Jd
            })
          };
        for (const Kd of (0, Ap.creativeItemIds)()) {
          var Cd;
          (0, Ap.itemIsDisabled)(Kd, !0, !0, !1) || (0, Ap.showOnlyInCreativeSearch)(Kd) || gd((0, kN.d)(Kd), null !== (Cd = (0, Ap.creativeCategoryOf)(Kd)) && void 0 !== Cd ? Cd : "other")
        }
        for (const Kd of Jd) gd(Kd, "other");
        return KN = {
          key: Nd,
          items: Zd
        }, Zd
      }(null === dd || void 0 === dd ? void 0 : dd.meta.extra, null === dd || void 0 === dd ? void 0 : dd.meta.excluded, null === dd || void 0 === dd ? void 0 : dd.meta.names)), [null === dd || void 0 === dd ? void 0 : dd.meta.extra, null === dd || void 0 === dd ? void 0 : dd.meta.excluded, null === dd || void 0 === dd ? void 0 : dd.meta.names]), [gd, Cd] = (0, pd.useState)(""), [Kd, od] = (0, pd.useState)(0), [ld, Qd] = (0, pd.useState)("recent"), Ld = (0, pd.useCallback)((dd => {
        Cd(""), od((dd => dd + 1)), Wd(dd)
      }), [Wd]), Od = "browse" === ld || "" !== gd.trim();
      return {
        searched: kd,
        shown: Nd,
        searchFor: Wd,
        loading: Pd,
        catalogue: Zd,
        names: null === dd || void 0 === dd ? void 0 : dd.meta.names,
        query: gd,
        setQuery: Cd,
        searchBoxKey: Kd,
        pickItem: Ld,
        setView: Qd,
        browsing: Od
      }
    }

    function xN(dd) {
      let {
        browser: Jd,
        children: kd
      } = dd;
      const {
        t: pd
      } = (0, Pd.B)(), Nd = eN();
      return (0, od.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, od.jsx)("div", {
          className: "SmpSearch",
          children: (0, od.jsx)(xd.e, {
            className: "SmpSearchInput",
            placeholderText: pd("smpShop:searchPlaceholder"),
            defaultValue: Jd.query,
            onValueChange: dd => {
              Jd.setQuery(dd), Jd.searched && dd.trim() && Jd.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const dd = oN(Jd.catalogue, Jd.query)[0];
              dd ? Jd.pickItem(dd.name) : Jd.query.trim() && Nd.notify(pd("smpShop:noItemsFound", {
                query: Jd.query.trim()
              }))
            }
          }, Jd.searchBoxKey)
        }), kd]
      })
    }

    function qN(dd) {
      let {
        browser: Jd,
        recentLabel: kd,
        children: pd
      } = dd;
      const {
        t: Nd
      } = (0, Pd.B)();
      return (0, od.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, od.jsx)(Vp, {
          options: [{
            value: "recent",
            label: kd
          }, {
            value: "browse",
            label: Nd("smpShop:browseItems")
          }],
          value: Jd.browsing ? "browse" : "recent",
          onChange: Jd.setView,
          ariaLabel: Nd("smpShop:show")
        }), !Jd.browsing && pd]
      })
    }

    function BN(dd) {
      let {
        item: Jd,
        names: kd,
        summary: pd,
        onBack: Nd,
        children: Wd
      } = dd;
      const {
        t: Zd
      } = (0, Pd.B)();
      return (0, od.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, od.jsx)(Cd.b, {
          className: "SmpBackButton",
          onClick: Nd,
          children: Zd("general:back")
        }), (0, od.jsx)(Ep, {
          item: Jd,
          size: "big"
        }), (0, od.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, od.jsx)("b", {
            children: lN(kd, Jd)
          }), pd && (0, od.jsx)("small", {
            children: pd
          })]
        }), Wd]
      })
    }

    function sN(dd) {
      let {
        browser: Jd,
        className: kd,
        action: pd,
        above: Nd,
        list: Pd,
        summary: Zd,
        recentLabel: gd,
        listControls: Cd,
        onBack: Kd
      } = dd;
      return (0, od.jsxs)("div", {
        className: Wd()("SmpScreen", kd),
        children: [(0, od.jsx)(xN, {
          browser: Jd,
          children: pd
        }), Jd.shown && (0, od.jsx)(BN, {
          item: Jd.shown,
          names: Jd.names,
          summary: !Jd.loading && Zd,
          onBack: () => {
            null === Kd || void 0 === Kd || Kd(), Jd.searchFor(null)
          },
          children: Cd
        }), Nd, Jd.shown ? Pd : (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsx)(qN, {
            browser: Jd,
            recentLabel: gd,
            children: Cd
          }), Jd.browsing ? (0, od.jsx)(GN, {
            items: Jd.catalogue,
            query: Jd.query,
            onPick: Jd.pickItem
          }) : Pd]
        })]
      })
    }

    function iN(dd, Jd) {
      const kd = dd.map((dd => {
        let {
          meta: Jd
        } = dd;
        return Jd.pricePerItem
      }));
      return "min" === Jd ? Math.min(...kd) : Math.max(...kd)
    }
    var aN = kd(6435);
    const MN = (0, pd.memo)((function(dd) {
      var Jd;
      const {
        t: kd
      } = (0, Pd.B)(), pd = null === dd.seller, Nd = dd.quantity * dd.pricePerItem;
      return (0, od.jsxs)("div", {
        className: dd.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, od.jsx)(Ep, {
          item: dd.item,
          amount: dd.quantity,
          size: dd.grid ? "big" : "normal",
          tier: dd.tier
        }), (0, od.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, od.jsx)("b", {
            children: (0, od.jsx)(Fp.c, {
              text: null !== (Jd = dd.title) && void 0 !== Jd ? Jd : `${dd.quantity}x ${dd.item}`
            })
          }), (0, od.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, od.jsx)("span", {
              children: pd ? kd("smpShop:you") : (0, od.jsx)(Fp.c, {
                text: [{
                  entityName: dd.seller
                }]
              })
            }), (0, od.jsx)("span", {
              children: kd("smpShop:timeLeft", {
                time: gN(dd.expiresAt)
              })
            })]
          })]
        }), (0, od.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, od.jsx)(cp, {
            amount: dd.pricePerItem
          }), (0, od.jsx)("small", {
            children: kd("smpShop:each")
          })]
        }), (0, od.jsx)(Cd.d, {
          className: "SmpBuyButton",
          disabled: pd || !dd.canAfford && !dd.busy,
          loading: dd.busy,
          onClick: () => {
            dd.onBuy(dd.itemKey)
          },
          children: pd ? kd("smpShop:yours") : (0, od.jsx)(cp, {
            amount: Nd
          })
        })]
      })
    }));

    function FN(dd) {
      let {
        view: Jd,
        onChange: kd
      } = dd;
      const {
        t: pd
      } = (0, Pd.B)();
      return (0, od.jsx)(Dp.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: pd("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, od.jsx)(Zd.e, {
            name: "list"
          }),
          ariaLabel: pd("smpShop:listView")
        }, {
          value: "grid",
          label: (0, od.jsx)(Zd.e, {
            name: "grid-2"
          }),
          ariaLabel: pd("smpShop:gridView")
        }],
        value: Jd,
        onChange: kd
      })
    }

    function YN(dd) {
      let {
        entries: Jd,
        view: kd
      } = dd;
      const {
        t: pd
      } = (0, Pd.B)(), Nd = eN(), Wd = "grid" === kd;
      return (0, od.jsxs)(od.Fragment, {
        children: [!Wd && (0, od.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, od.jsx)("span", {}), (0, od.jsx)("span", {
            children: pd("smpShop:columnItem")
          }), (0, od.jsx)("span", {
            children: pd("smpShop:columnPriceEach")
          }), (0, od.jsx)("span", {
            children: pd("smpShop:columnTotal")
          })]
        }), (0, od.jsx)(RN.b, {
          lazyLoadedClassName: Wd ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: PN,
          observerUpdateDeps: [Jd.length],
          children: Jd.map((dd => {
            var Jd, kd;
            let {
              key: pd,
              item: Pd,
              meta: Zd
            } = dd;
            const gd = Zd.quantity * Zd.pricePerItem;
            return (0, od.jsx)(MN, {
              itemKey: pd,
              item: Zd.item,
              title: Pd.customTitle,
              quantity: Zd.quantity,
              pricePerItem: Zd.pricePerItem,
              seller: Zd.seller,
              expiresAt: Zd.expiresAt,
              tier: null !== (Jd = null === (kd = Pd.enchant) || void 0 === kd ? void 0 : kd.tier) && void 0 !== Jd ? Jd : null,
              busy: Nd.isPending(pd) || null !== Zd.seller && !1 === Pd.canBuy,
              canAfford: Nd.canAfford(Pd, gd),
              grid: Wd,
              onBuy: Nd.act
            }, pd)
          }))
        }, kd)]
      })
    }
    const mN = [1, 10, 100],
      bN = [1, 10, 100, 999];

    function SN(dd) {
      var Jd, kd, Nd, gd, Kd, ld, Qd, Ld, Od, ed;
      const {
        t: Rd
      } = (0, Pd.B)(), Id = eN(), {
        creator: Gd,
        mode: vd
      } = dd, [qd, Bd] = (0, pd.useState)(null !== (Jd = null === Gd || void 0 === Gd ? void 0 : Gd.meta.item) && void 0 !== Jd ? Jd : null), [sd, ad] = (0, pd.useState)(1), [Md, Fd] = (0, pd.useState)(0), [Yd, md] = (0, pd.useState)(""), [bd, Sd] = (0, pd.useState)(0), jd = (0, pd.useRef)(qd), Xd = (0, pd.useRef)(!1), [fd, nd] = (0, pd.useState)(!1), Ud = null !== (kd = null === Gd || void 0 === Gd ? void 0 : Gd.meta.item) && void 0 !== kd ? kd : null, yd = null !== (Nd = null === Gd || void 0 === Gd ? void 0 : Gd.meta.owned) && void 0 !== Nd ? Nd : 0;
      (0, pd.useEffect)((() => {
        dd.searching || null === Ud || Ud === jd.current || (jd.current = Ud, Xd.current = !1, Bd(Ud), Fd(0), ad("list" === vd ? Math.max(1, yd) : 1))
      }), [Ud, dd.searching]);
      const Dd = !!Gd && !!qd && Gd.meta.item === qd,
        Td = Dd ? Gd.meta.owned : null !== (gd = null === (Kd = dd.inventory) || void 0 === Kd || null === (ld = Kd.find((dd => dd.item === qd))) || void 0 === ld ? void 0 : ld.quantity) && void 0 !== gd ? gd : 0,
        Ed = "list" === vd ? Math.max(1, Td) : 45954,
        cd = null !== (Qd = dd.prices[0]) && void 0 !== Qd ? Qd : null,
        hd = dd.prices.length ? Math.round(dd.prices.reduce(((dd, Jd) => dd + Jd), 0) / dd.prices.length) : null,
        rd = null === (Ld = dd.inventory) || void 0 === Ld || null === (Od = Ld.find((dd => dd.item === qd))) || void 0 === Od ? void 0 : Od.sellPrice;
      (0, pd.useEffect)((() => {
        var dd;
        Dd && (ad((dd => "list" === vd ? Math.min(Math.max(1, dd), Math.max(1, Td)) : dd)), Xd.current || Fd(null !== (dd = null !== cd && void 0 !== cd ? cd : hd) && void 0 !== dd ? dd : Math.max(1, null !== rd && void 0 !== rd ? rd : 1)))
      }), [Dd, Td, qd, cd, hd]);
      const ud = dd => {
          Xd.current = !0, Fd(dd)
        },
        td = Jd => {
          var kd, pd, Nd;
          jd.current = Jd, Xd.current = !1, nd(!1), md(""), Sd((dd => dd + 1)), Bd(Jd), Fd(0), ad("list" === vd && null !== (kd = null === (pd = dd.inventory) || void 0 === pd || null === (Nd = pd.find((dd => dd.item === Jd))) || void 0 === Nd ? void 0 : Nd.quantity) && void 0 !== kd ? kd : 1), (null === Gd || void 0 === Gd ? void 0 : Gd.meta.item) !== Jd && dd.onPickItem(Jd)
        },
        Vd = sd * Md,
        zd = "list" === vd && null !== Gd && void 0 !== Gd && Gd.meta.fee ? function(dd, Jd) {
          const kd = Math.max(0, Jd - dd.taxFreeAllowance);
          return Math.ceil(Math.round(kd * dd.rate * 1e6) / 1e6)
        }(Gd.meta.fee, Vd) : 0,
        Hd = !!Gd && Id.isPending(Gd.key),
        wd = Dd && !dd.searching && sd >= 1 && Md >= 1 && ("order" === vd || Td >= sd) && !Hd,
        Ad = !!qd && !Dd && !dd.searching && sd >= 1 && Md >= 1,
        dJ = () => {
          wd ? Id.act(Gd.key, `${sd}|${Md}`) : Ad && (dd.onPickItem(qd), nd(!0))
        };
      (0, pd.useEffect)((() => {
        fd && Dd && !dd.searching && (nd(!1), dJ())
      }), [fd, Dd, dd.searching]);
      const JJ = !!qd && !Dd && (dd.searching || fd),
        kJ = qd ? lN(dd.names, qd) : "",
        pJ = (0, pd.useMemo)((() => oN(dd.catalogue, Yd).slice(0, 8)), [dd.catalogue, Yd]),
        NJ = ("list" === vd ? mN.filter((dd => dd < Td)) : bN).map((dd => ({
          value: dd,
          label: String(dd)
        })));
      "list" === vd && Td > 0 && NJ.push({
        value: Td,
        label: Rd("smpShop:all", {
          count: Td
        })
      });
      const WJ = [];
      return null !== cd && (cd > 1 && WJ.push({
        value: cd - 1,
        label: Rd("smpShop:undercut", {
          price: yp(cd - 1)
        })
      }), WJ.push({
        value: cd,
        label: Rd("smpShop:lowest", {
          price: yp(cd)
        })
      })), null !== hd && hd !== cd && WJ.push({
        value: hd,
        label: Rd("smpShop:average", {
          price: yp(hd)
        })
      }), (0, od.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, od.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, od.jsx)("b", {
            children: Rd("list" === vd ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, od.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Rd("smpShop:close"),
            onClick: dd.onClose,
            children: (0, od.jsx)(Zd.e, {
              name: "xmark"
            })
          })]
        }), "list" === vd && (0, od.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (ed = dd.inventory) && void 0 !== ed && ed.length ? dd.inventory.map((dd => {
            let {
              item: Jd,
              quantity: kd
            } = dd;
            return (0, od.jsx)("button", {
              type: "button",
              title: Jd,
              className: Wd()("SmpPickerSlot", {
                SmpPickerSlotOn: Jd === qd
              }),
              onClick: () => {
                td(Jd)
              },
              children: (0, od.jsx)(Ep, {
                item: Jd,
                amount: kd
              })
            }, Jd)
          })) : (0, od.jsx)("span", {
            className: "SmpMuted",
            children: Rd("smpShop:nothingToList")
          })
        }), ("list" === vd || !qd) && (0, od.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, od.jsx)(xd.e, {
            className: "SmpSearchInput",
            placeholderText: Rd("list" === vd ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Yd,
            onValueChange: md,
            blurOnEnter: !0,
            onEnter: () => {
              pJ[0] && td(pJ[0].name)
            }
          }, bd), pJ.length > 0 && (0, od.jsx)("div", {
            className: "SmpPicker",
            children: pJ.map((dd => {
              let {
                name: Jd
              } = dd;
              return (0, od.jsx)("button", {
                type: "button",
                title: Jd,
                className: Wd()("SmpPickerSlot", {
                  SmpPickerSlotOn: Jd === qd
                }),
                onClick: () => {
                  td(Jd)
                },
                children: (0, od.jsx)(Ep, {
                  item: Jd
                })
              }, Jd)
            }))
          })]
        }), qd && (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsxs)("div", {
            className: "SmpPickedName",
            children: [kJ, JJ && (0, od.jsx)(zp, {})]
          }), (0, od.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, od.jsxs)("div", {
              className: "SmpField",
              children: [(0, od.jsxs)("span", {
                children: [Rd("smpShop:quantity"), "list" === vd && Dd && (0, od.jsx)("small", {
                  children: Rd("smpShop:youHave", {
                    count: Td
                  })
                })]
              }), (0, od.jsx)(Hp, {
                value: sd,
                onChange: ad,
                max: Ed,
                label: Rd("smpShop:quantity")
              }), (0, od.jsx)(Vp, {
                options: NJ,
                value: sd,
                onChange: ad,
                ariaLabel: Rd("smpShop:quantity")
              })]
            }), (0, od.jsxs)("div", {
              className: "SmpField",
              children: [(0, od.jsx)("span", {
                children: Rd("smpShop:pricePerItem")
              }), (0, od.jsx)(Hp, {
                value: Math.max(1, Md),
                onChange: ud,
                max: 9999999,
                step: wp,
                label: Rd("smpShop:pricePerItem")
              }), (0, od.jsx)(Vp, {
                options: WJ,
                value: Md,
                onChange: ud,
                ariaLabel: Rd("smpShop:pricePerItem")
              })]
            })]
          }), "list" === vd && (0, od.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, od.jsxs)("span", {
              children: [Rd("smpShop:youGet"), " ", (0, od.jsx)(cp, {
                amount: Math.max(0, Vd - zd),
                exact: !0
              })]
            }), (0, od.jsx)("small", {
              children: zd > 0 ? Rd("smpShop:listingFee", {
                fee: zd.toLocaleString("en-US")
              }) : Rd("smpShop:listingRules")
            })]
          }), (0, od.jsx)(Cd.n, {
            className: "SmpSubmit",
            disabled: !wd && !Ad && !Hd,
            loading: Hd || JJ || Dd && dd.searching,
            onClick: dJ,
            children: "list" === vd ? Rd("smpShop:listButton", {
              count: sd,
              item: kJ
            }) : (0, od.jsxs)(od.Fragment, {
              children: [Rd("smpShop:orderButton", {
                count: sd,
                item: kJ
              }), " ", Md >= 1 && (0, od.jsx)(cp, {
                amount: Vd
              })]
            })
          })]
        })]
      })
    }

    function jN() {
      var dd;
      const {
        t: Jd
      } = (0, Pd.B)(), kd = eN(), Nd = null === (dd = kd.shopInfo[kd.categoryKey]) || void 0 === dd ? void 0 : dd.items, Wd = WN(Nd, "search"), Zd = WN(Nd, "creator"), gd = NN(Nd, "enchantedCreator"), Kd = NN(Nd, "listing"), ld = WN(Nd, "empty"), Qd = vN(Wd, Kd.length > 0 || null !== ld), {
        searched: Ld,
        shown: Od,
        loading: ed
      } = Qd, [Rd, Id] = (0, pd.useState)(!1), [Gd, vd] = function() {
        const [dd, Jd] = (0, aN.d)("smpMarketView", "list");
        return ["grid" === dd ? "grid" : "list", Jd]
      }(), xd = "grid" === Gd, qd = (0, pd.useMemo)((() => Kd.filter((dd => {
        let {
          meta: Jd
        } = dd;
        return null !== Jd.seller && Jd.item === Ld
      })).map((dd => {
        let {
          meta: Jd
        } = dd;
        return Jd.pricePerItem
      })).sort(((dd, Jd) => dd - Jd))), [Kd, Ld]), Bd = (0, pd.useMemo)((() => {
        const dd = new Set(Qd.catalogue.map((dd => {
          let {
            name: Jd
          } = dd;
          return Jd
        })));
        return function(dd) {
          for (const Jd in dd)
            if ("sell" === dd[Jd].smp) return NN(dd[Jd].items, "sell").filter((dd => {
              let {
                item: Jd
              } = dd;
              return !Jd.enchant
            })).map((dd => {
              let {
                meta: Jd
              } = dd;
              return {
                item: Jd.item,
                quantity: Jd.quantity,
                sellPrice: Jd.pricePerItem
              }
            }));
          return []
        }(kd.shopInfo).filter((Jd => {
          let {
            item: kd
          } = Jd;
          return dd.has(kd)
        }))
      }), [kd.shopInfo, Qd.catalogue]);
      return (0, od.jsx)(sN, {
        browser: Qd,
        className: "SmpMarketTab",
        recentLabel: Jd("smpShop:recentlyListed"),
        action: (0, od.jsx)(Cd.n, {
          className: "SmpSellButton",
          onClick: () => {
            Id((dd => !dd))
          },
          children: Jd("smpShop:sell")
        }),
        above: Rd && (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsx)(SN, {
            mode: "list",
            creator: Zd,
            inventory: Bd,
            catalogue: Qd.catalogue,
            names: Qd.names,
            searching: ed,
            prices: qd,
            onPickItem: Qd.searchFor,
            onClose: () => {
              Id(!1)
            }
          }), gd.length > 0 && (0, od.jsx)(XN, {
            entries: gd
          })]
        }),
        listControls: (0, od.jsx)(FN, {
          view: Gd,
          onChange: vd
        }),
        summary: Od && (Kd.length > 0 ? Jd(1 === Kd.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Kd.length,
          price: yp(iN(Kd, "min"))
        }) : Jd("smpShop:noOneSelling", {
          item: lN(Qd.names, Od)
        })),
        list: ed ? (0, od.jsx)(hp, {
          grid: xd
        }) : Kd.length > 0 ? (0, od.jsx)(YN, {
          entries: Kd,
          view: Gd
        }) : ld ? (0, od.jsx)(tp, {
          entry: ld
        }) : (0, od.jsx)(hp, {
          count: 3,
          grid: xd
        })
      })
    }

    function XN(dd) {
      let {
        entries: Jd
      } = dd;
      const {
        t: kd
      } = (0, Pd.B)(), Nd = eN(), [Wd, Zd] = (0, pd.useState)({});
      return (0, od.jsx)("div", {
        className: "SmpList",
        children: Jd.map((dd => {
          var Jd, pd, Pd;
          let {
            key: gd,
            item: Kd,
            meta: ld
          } = dd;
          const Qd = null !== (Jd = Wd[gd]) && void 0 !== Jd ? Jd : 1;
          return (0, od.jsxs)("div", {
            className: "SmpRow",
            children: [(0, od.jsx)(Ep, {
              item: ld.item,
              amount: ld.quantity,
              tier: null !== (pd = null === (Pd = Kd.enchant) || void 0 === Pd ? void 0 : Pd.tier) && void 0 !== pd ? pd : null
            }), (0, od.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, od.jsx)("b", {
                children: (0, od.jsx)(Fp.c, {
                  text: Kd.customTitle
                })
              }), (0, od.jsx)("small", {
                children: kd("smpShop:enchantedListing")
              })]
            }), (0, od.jsx)(Hp, {
              value: Qd,
              onChange: dd => {
                Zd({
                  ...Wd,
                  [gd]: dd
                })
              },
              max: 9999999,
              step: wp,
              label: kd("smpShop:pricePerItem")
            }), (0, od.jsxs)(Cd.n, {
              loading: Nd.isPending(gd),
              onClick: () => {
                Nd.act(gd, String(Qd))
              },
              children: [kd("smpShop:list"), " ", (0, od.jsx)(cp, {
                amount: Qd
              })]
            })]
          }, gd)
        }))
      })
    }
    const fN = (0, pd.memo)((function(dd) {
      let {
        itemKey: Jd,
        item: kd,
        quantity: pd,
        pricePerItem: Nd,
        tier: Pd,
        selected: Zd,
        onSelect: gd
      } = dd;
      return (0, od.jsxs)("button", {
        type: "button",
        className: Wd()("SmpInventorySlot", {
          SmpInventorySlotOn: Zd
        }),
        title: kd,
        onClick: () => {
          gd(Jd)
        },
        children: [(0, od.jsx)(Ep, {
          item: kd,
          amount: pd,
          tier: Pd
        }), (0, od.jsx)(cp, {
          amount: Nd
        })]
      })
    }));

    function nN() {
      var dd;
      const {
        t: Jd
      } = (0, Pd.B)(), kd = eN(), Nd = null === (dd = kd.shopInfo[kd.categoryKey]) || void 0 === dd ? void 0 : dd.items, Zd = NN(Nd, "sell"), gd = WN(Nd, "empty"), [Cd, Kd] = (0, pd.useState)(null), [ld, Qd] = (0, pd.useState)({}), Ld = Zd.find((dd => {
        let {
          key: Jd
        } = dd;
        return Jd === Cd
      }));
      return 0 === Zd.length ? (0, od.jsx)("div", {
        className: "SmpScreen",
        children: (0, od.jsx)(rp, {
          title: gd ? (0, od.jsx)(Fp.c, {
            text: gd.item.customTitle
          }) : Jd("smpShop:nothingToSell"),
          children: gd && (0, od.jsx)(Fp.c, {
            text: gd.item.description
          })
        })
      }) : (0, od.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, od.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Zd.map((dd => {
            var Jd, kd;
            let {
              key: pd,
              item: Nd,
              meta: Wd
            } = dd;
            return (0, od.jsx)(fN, {
              itemKey: pd,
              item: Wd.item,
              quantity: Wd.quantity,
              pricePerItem: Wd.pricePerItem,
              tier: null !== (Jd = null === (kd = Nd.enchant) || void 0 === kd ? void 0 : kd.tier) && void 0 !== Jd ? Jd : null,
              selected: pd === Cd,
              onSelect: Kd
            }, pd)
          }))
        }), (0, od.jsx)("div", {
          className: Wd()("SmpSellBar", {
            SmpSellBarIdle: !Ld
          }),
          children: Ld ? (0, od.jsx)(UN, {
            entry: Ld,
            choice: QN(Ld.item, ld[Ld.key]),
            onChoose: dd => {
              Qd({
                ...ld,
                [Ld.key]: dd
              })
            }
          }) : (0, od.jsx)("span", {
            className: "SmpMuted",
            children: Jd("smpShop:tapToSell")
          })
        })]
      })
    }

    function UN(dd) {
      var Jd, kd, pd, Nd;
      let {
        entry: Wd,
        choice: Zd,
        onChoose: gd
      } = dd;
      const {
        t: Kd
      } = (0, Pd.B)(), ld = eN(), {
        key: Qd,
        item: Ld,
        meta: Od
      } = Wd, ed = CN("dropdown" === (null === (Jd = Ld.userInput) || void 0 === Jd ? void 0 : Jd.type) ? Ld.userInput.dropdownOptions : []), Rd = null === Zd ? 0 : -(0, sp.d)(Ld, Zd);
      return (0, od.jsxs)(od.Fragment, {
        children: [(0, od.jsx)(Ep, {
          item: Od.item,
          amount: Od.quantity,
          tier: null !== (kd = null === (pd = Ld.enchant) || void 0 === pd ? void 0 : pd.tier) && void 0 !== kd ? kd : null
        }), (0, od.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, od.jsx)("b", {
            children: (0, od.jsx)(Fp.c, {
              text: null !== (Nd = Ld.customTitle) && void 0 !== Nd ? Nd : Od.item
            })
          }), (0, od.jsx)("small", {
            children: Kd("smpShop:sellEach", {
              count: Od.quantity
            })
          })]
        }), (0, od.jsx)(Vp, {
          options: ed.map((dd => {
            let {
              label: Jd,
              quantity: kd,
              isAll: pd
            } = dd;
            return {
              value: Jd,
              label: pd ? Kd("smpShop:all", {
                count: kd
              }) : String(kd)
            }
          })),
          value: Zd,
          onChange: gd,
          ariaLabel: Kd("smpShop:quantity")
        }), (0, od.jsxs)(Cd.n, {
          loading: ld.isPending(Qd),
          disabled: null === Zd,
          onClick: () => {
            ld.act(Qd, Zd)
          },
          children: [Kd("smpShop:sellButton"), " ", (0, od.jsx)(cp, {
            amount: Rd
          })]
        })]
      })
    }

    function yN() {
      var dd;
      const {
        t: Jd
      } = (0, Pd.B)(), kd = eN(), pd = null === (dd = kd.shopInfo[kd.categoryKey]) || void 0 === dd ? void 0 : dd.items, Nd = NN(pd, "collect"), Wd = NN(pd, "myListing"), Zd = (dd, Jd) => kd.isPending(dd) || !1 === Jd.canBuy;
      return (0, od.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, od.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Jd("smpShop:readyToCollect")
        }), Nd.length > 0 ? (0, od.jsx)("div", {
          className: "SmpList",
          children: Nd.map((dd => {
            var pd, Nd;
            let {
              key: Wd,
              item: Pd,
              meta: gd
            } = dd;
            return (0, od.jsxs)("div", {
              className: "SmpRow",
              children: [(0, od.jsx)(Ep, {
                item: "sold" === gd.type ? "Gold Coin" : gd.item,
                amount: "sold" === gd.type ? 0 : gd.quantity,
                tier: null !== (pd = null === (Nd = Pd.enchant) || void 0 === Nd ? void 0 : Nd.tier) && void 0 !== pd ? pd : null
              }), (0, od.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, od.jsx)("b", {
                  children: (0, od.jsx)(Fp.c, {
                    text: Pd.customTitle
                  })
                }), (0, od.jsx)("small", {
                  children: (0, od.jsx)(Fp.c, {
                    text: Pd.description
                  })
                })]
              }), (0, od.jsx)(Cd.j, {
                loading: Zd(Wd, Pd),
                onClick: () => {
                  kd.act(Wd)
                },
                children: Jd("smpShop:collect")
              })]
            }, Wd)
          }))
        }) : (0, od.jsx)(rp, {
          title: Jd("smpShop:nothingToCollect"),
          children: Jd("smpShop:nothingToCollectHint")
        }), (0, od.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Jd("smpShop:activeListings", {
            count: Wd.length
          })
        }), Wd.length > 0 ? (0, od.jsx)("div", {
          className: "SmpList",
          children: Wd.map((dd => {
            var pd, Nd;
            let {
              key: Wd,
              item: Pd,
              meta: gd
            } = dd;
            return (0, od.jsxs)("div", {
              className: "SmpRow",
              children: [(0, od.jsx)(Ep, {
                item: gd.item,
                amount: gd.quantity,
                tier: null !== (pd = null === (Nd = Pd.enchant) || void 0 === Nd ? void 0 : Nd.tier) && void 0 !== pd ? pd : null
              }), (0, od.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, od.jsx)("b", {
                  children: (0, od.jsx)(Fp.c, {
                    text: Pd.customTitle
                  })
                }), (0, od.jsx)("small", {
                  children: Jd("smpShop:timeLeft", {
                    time: gN(gd.expiresAt)
                  })
                })]
              }), (0, od.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, od.jsx)(cp, {
                  amount: gd.pricePerItem
                }), (0, od.jsx)("small", {
                  children: Jd("smpShop:each")
                })]
              }), (0, od.jsx)(Cd.B, {
                loading: Zd(Wd, Pd),
                onClick: () => {
                  kd.act(Wd)
                },
                children: Jd("smpShop:cancel")
              })]
            }, Wd)
          }))
        }) : (0, od.jsx)(rp, {
          title: Jd("smpShop:noActiveListings"),
          children: Jd("smpShop:noActiveListingsHint")
        })]
      })
    }

    function DN(dd) {
      let {
        done: Jd,
        of: kd
      } = dd;
      return (0, od.jsx)("span", {
        className: "SmpProgress",
        children: (0, od.jsx)("i", {
          style: {
            width: `${Math.min(100,Jd/Math.max(1,kd)*100)}%`
          }
        })
      })
    }

    function TN(dd) {
      var Jd, kd, pd;
      let {
        entry: Nd,
        choice: Wd,
        onChoose: Zd
      } = dd;
      const {
        t: gd
      } = (0, Pd.B)(), Kd = eN(), {
        key: ld,
        item: Qd,
        meta: Ld
      } = Nd, Od = "dropdown" === (null === (Jd = Qd.userInput) || void 0 === Jd ? void 0 : Jd.type) ? Qd.userInput.dropdownOptions : [], ed = !0 === Ld.processing, Rd = null !== Ld.creator && (Ld.owned > 0 || ed), Id = Rd && Ld.owned > 0 ? CN(Od) : [], Gd = null === Wd ? 0 : null !== (kd = null === (pd = Id.find((dd => dd.label === Wd))) || void 0 === pd ? void 0 : pd.quantity) && void 0 !== kd ? kd : 0;
      return (0, od.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, od.jsx)(Ep, {
          item: Ld.item
        }), (0, od.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, od.jsx)("b", {
            children: (0, od.jsx)(Fp.c, {
              text: Qd.customTitle
            })
          }), (0, od.jsxs)("small", {
            children: [(0, od.jsx)(cp, {
              amount: Ld.pricePerItem
            }), " ", gd("smpShop:each"), " \xb7", " ", null === Ld.creator ? gd("smpShop:you") : (0, od.jsx)(Fp.c, {
              text: [{
                entityName: Ld.creator
              }]
            })]
          }), (0, od.jsx)(DN, {
            done: Ld.delivered,
            of: Ld.wanted
          })]
        }), Rd ? (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsx)(Vp, {
            options: Id.map((dd => {
              let {
                label: Jd,
                quantity: kd,
                isAll: pd
              } = dd;
              return {
                value: Jd,
                label: pd ? gd("smpShop:max", {
                  count: kd
                }) : String(kd)
              }
            })),
            value: Wd,
            onChange: Zd,
            ariaLabel: gd("smpShop:quantity")
          }), (0, od.jsxs)(Cd.n, {
            loading: Kd.isPending(ld) || ed,
            disabled: null === Wd,
            onClick: () => {
              Kd.act(ld, Wd)
            },
            children: [gd("smpShop:deliver"), " ", (0, od.jsx)(cp, {
              amount: Gd * Ld.pricePerItem
            })]
          })]
        }) : (0, od.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Ld.creator ? gd("smpShop:yourOrder") : gd("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function EN() {
      var dd;
      const {
        t: Jd
      } = (0, Pd.B)(), kd = eN(), Nd = null === (dd = kd.shopInfo[kd.categoryKey]) || void 0 === dd ? void 0 : dd.items, Wd = WN(Nd, "search"), Zd = WN(Nd, "creator"), gd = NN(Nd, "order"), Kd = WN(Nd, "empty"), ld = vN(Wd, gd.length > 0 || null !== Kd), [Qd, Ld] = (0, pd.useState)(!1), [Od, ed] = (0, pd.useState)({});
      return (0, od.jsx)(sN, {
        browser: ld,
        recentLabel: Jd("smpShop:recentOrders"),
        action: (0, od.jsx)(Cd.n, {
          onClick: () => {
            Ld((dd => !dd))
          },
          children: Jd("smpShop:createOrder")
        }),
        above: Qd && (0, od.jsx)(SN, {
          mode: "order",
          creator: Zd,
          catalogue: ld.catalogue,
          names: ld.names,
          searching: ld.loading,
          prices: [],
          onPickItem: ld.searchFor,
          onClose: () => {
            Ld(!1)
          }
        }),
        onBack: () => {
          Ld(!1)
        },
        summary: gd.length > 0 && Jd(1 === gd.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: gd.length,
          price: yp(iN(gd, "max"))
        }),
        list: ld.loading ? (0, od.jsx)(hp, {}) : gd.length > 0 ? (0, od.jsx)(RN.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: PN,
          observerUpdateDeps: [gd.length],
          children: gd.map((dd => (0, od.jsx)(TN, {
            entry: dd,
            choice: QN(dd.item, Od[dd.key]),
            onChoose: Jd => {
              ed({
                ...Od,
                [dd.key]: Jd
              })
            }
          }, dd.key)))
        }) : Kd ? (0, od.jsx)(tp, {
          entry: Kd
        }) : (0, od.jsx)(hp, {
          count: 3
        })
      })
    }

    function cN() {
      var dd;
      const {
        t: Jd
      } = (0, Pd.B)(), kd = eN(), pd = NN(null === (dd = kd.shopInfo[kd.categoryKey]) || void 0 === dd ? void 0 : dd.items, "myOrder");
      return 0 === pd.length ? (0, od.jsx)("div", {
        className: "SmpScreen",
        children: (0, od.jsx)(rp, {
          title: Jd("smpShop:noOrders"),
          children: Jd("smpShop:noOrdersHint")
        })
      }) : (0, od.jsx)("div", {
        className: "SmpScreen",
        children: (0, od.jsx)("div", {
          className: "SmpList",
          children: pd.map((dd => {
            let {
              key: pd,
              item: Nd,
              meta: Wd
            } = dd;
            const Pd = kd.isPending(pd) || !1 === Nd.canBuy;
            return (0, od.jsxs)("div", {
              className: "SmpRow",
              children: [(0, od.jsx)(Ep, {
                item: Wd.item,
                amount: Wd.collectable
              }), (0, od.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, od.jsx)("b", {
                  children: (0, od.jsx)(Fp.c, {
                    text: Nd.customTitle
                  })
                }), (0, od.jsxs)("small", {
                  children: [(0, od.jsx)(cp, {
                    amount: Wd.pricePerItem
                  }), " ", Jd("smpShop:each"), Wd.collectable > 0 && ` \xb7 ${Jd("smpShop:readyCount",{count:Wd.collectable})}`]
                }), (0, od.jsx)(DN, {
                  done: Wd.delivered,
                  of: Wd.wanted
                })]
              }), Wd.collectable > 0 ? (0, od.jsx)(Cd.j, {
                loading: Pd,
                onClick: () => {
                  kd.act(pd)
                },
                children: Jd("smpShop:collectCount", {
                  count: Wd.collectable
                })
              }) : (0, od.jsx)(Cd.B, {
                loading: Pd,
                onClick: () => {
                  kd.act(pd)
                },
                children: Jd("smpShop:cancel")
              })]
            }, pd)
          }))
        })
      })
    }
    const hN = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      rN = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function uN(dd, Jd) {
      let kd = !1;
      const pd = {};
      for (const Nd in dd) Jd(Nd, dd[Nd]) ? pd[Nd] = dd[Nd] : kd = !0;
      return kd ? pd : dd
    }

    function tN(dd) {
      var Jd, kd, Nd, gd;
      const {
        show: Cd,
        shopInfo: Kd,
        selectedCategoryKey: ld
      } = dd, {
        t: Qd
      } = (0, Pd.B)(), Ld = null !== ld && void 0 !== ld ? ld : "", Od = pN(Kd, Ld), ed = null === (Jd = Kd[Ld]) || void 0 === Jd ? void 0 : Jd.items, Rd = null !== Od, [Id, Gd] = (0, pd.useState)({}), [vd, xd] = (0, pd.useState)([]), [qd, Bd] = (0, pd.useState)(!1), [sd, ad] = (0, pd.useState)(null), [, Md] = (0, pd.useState)(0), Fd = (0, pd.useRef)(0), Yd = (0, pd.useRef)({}), md = (0, pd.useRef)({
        items: ed,
        pending: Id,
        shopInfo: Kd,
        active: Rd,
        canAfford: dd.canAfford,
        buy: dd.buy
      });
      md.current = {
        items: ed,
        pending: Id,
        shopInfo: Kd,
        active: Rd,
        canAfford: dd.canAfford,
        buy: dd.buy
      };
      const bd = (0, pd.useCallback)((dd => {
        Fd.current++;
        const Jd = Fd.current;
        xd((kd => [{
          id: Jd,
          text: dd
        }, ...kd].slice(0, 8))), ad(Jd)
      }), []);
      (0, pd.useEffect)((() => {
        if (null === sd) return;
        const dd = setTimeout((() => {
          ad(null)
        }), 3e3);
        return () => {
          clearTimeout(dd)
        }
      }), [sd]), (0, pd.useEffect)((() => {
        const Jd = dd.message;
        if (!Jd) return;
        const {
          shopInfo: kd,
          active: pd,
          items: Nd
        } = md.current, Wd = null !== Jd.categoryKey ? null !== pN(kd, Jd.categoryKey) : pd;
        (Wd || pd) && bd(Jd.text), Wd && Gd((dd => uN(dd, (dd => {
          var Jd, kd;
          return !hN.has(null === Nd || void 0 === Nd || null === (Jd = Nd[dd]) || void 0 === Jd || null === (kd = Jd.smp) || void 0 === kd ? void 0 : kd.kind)
        }))))
      }), [dd.message, bd]), (0, pd.useEffect)((() => {
        Gd((dd => uN(dd, ((dd, Jd) => LN(null === ed || void 0 === ed ? void 0 : ed[dd]) === Jd.snapshot))))
      }), [Kd, ed]);
      const Sd = Object.keys(Id).length > 0;
      (0, pd.useEffect)((() => {
        if (!Sd) return;
        const dd = setInterval((() => {
          Md((dd => dd + 1));
          const dd = Date.now(),
            {
              pending: Jd,
              items: kd
            } = md.current,
            pd = Object.keys(Jd).filter((kd => dd - Jd[kd].at >= 12e3));
          if (0 === pd.length) return;
          const Nd = pd.some((dd => {
            var pd, Nd;
            return "search" !== (null === kd || void 0 === kd || null === (pd = kd[dd]) || void 0 === pd || null === (Nd = pd.smp) || void 0 === Nd ? void 0 : Nd.kind) || Jd[dd].resend
          }));
          for (const Wd of pd) Yd.current[Wd] = dd;
          Gd((dd => uN(dd, (dd => !pd.includes(dd))))), Nd && bd(Qd("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(dd)
        }
      }), [Sd]), (0, pd.useEffect)((() => {
        Gd({})
      }), [Ld]), (0, pd.useEffect)((() => {
        Cd || Bd(!1)
      }), [Cd]);
      const jd = (0, pd.useCallback)((function(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: pd,
            pending: Nd,
            canAfford: Wd,
            buy: Pd
          } = md.current, Zd = null === pd || void 0 === pd ? void 0 : pd[dd];
          if (!Zd || dd in Nd || !1 === Zd.canBuy) return !1;
          if (!Wd(Zd, (0, sp.d)(Zd, Jd))) return !1;
          Pd(dd, Zd, Jd);
          const gd = {
            snapshot: LN(Zd),
            at: Date.now(),
            resend: kd
          };
          return md.current.pending = {
            ...md.current.pending,
            [dd]: gd
          }, Gd((Jd => ({
            ...Jd,
            [dd]: gd
          }))), !0
        }), []),
        Xd = (0, pd.useMemo)((() => ({
          shopInfo: Kd,
          categoryKey: Ld,
          canAfford: dd.canAfford,
          isPending: dd => dd in Id,
          gaveUpAt: dd => {
            var Jd;
            return null !== (Jd = Yd.current[dd]) && void 0 !== Jd ? Jd : 0
          },
          act: jd,
          notify: bd
        })), [Kd, Ld, dd.canAfford, Id, jd, bd]),
        fd = Math.min(...Object.values(Id).map((dd => dd.at))),
        nd = Sd && Date.now() - fd > 1500,
        Ud = vd.length > 1,
        yd = null !== (kd = null === (Nd = Kd[Ld]) || void 0 === Nd ? void 0 : Nd.customTitle) && void 0 !== kd ? kd : Ld,
        Dd = null === (gd = Kd[Ld]) || void 0 === gd ? void 0 : gd.description;
      let Td = null;
      return "market" === Od ? Td = (0, od.jsx)(jN, {}) : "sell" === Od ? Td = (0, od.jsx)(nN, {}) : "collect" === Od ? Td = (0, od.jsx)(yN, {}) : "orders" === Od ? Td = (0, od.jsx)(EN, {}) : "myOrders" === Od && (Td = (0, od.jsx)(cN, {})), (0, od.jsx)(ON.Provider, {
        value: Xd,
        children: (0, od.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Rd,
          children: (0, od.jsxs)("div", {
            className: "SmpShop",
            children: [(0, od.jsx)("header", {
              className: "SmpHeader",
              children: (0, od.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, od.jsxs)("h2", {
                  children: [Od && (0, od.jsx)(Zd.e, {
                    name: rN[Od]
                  }), Qd(yd)]
                }), Dd && (0, od.jsx)("p", {
                  children: (0, od.jsx)(Fp.c, {
                    text: Dd
                  })
                })]
              })
            }), (0, od.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Cd && Td
            }), (0, od.jsxs)("button", {
              type: "button",
              className: Wd()("SmpStatus", {
                SmpStatusWaiting: Sd,
                SmpStatusFresh: !Sd && null !== sd,
                SmpStatusHasHistory: Ud
              }),
              "aria-live": "polite",
              "aria-expanded": Ud ? qd : void 0,
              onClick: () => {
                Ud && Bd((dd => !dd))
              },
              children: [Sd ? (0, od.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, od.jsx)(zp, {}), Qd(nd ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : vd[0] ? (0, od.jsx)("span", {
                className: "SmpStatusText",
                children: (0, od.jsx)(Fp.c, {
                  text: vd[0].text
                })
              }, vd[0].id) : (0, od.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Qd("smpShop:ready")
              }), Ud && (0, od.jsx)("small", {
                children: Qd("smpShop:recentMessages", {
                  count: vd.length
                })
              })]
            }), qd && Ud && (0, od.jsx)("div", {
              className: "SmpStatusHistory",
              children: vd.map((dd => (0, od.jsx)("div", {
                children: (0, od.jsx)(Fp.c, {
                  text: dd.text
                })
              }, dd.id)))
            })]
          })
        })
      })
    }
    class VN {
      constructor(dd) {
        this.info = dd
      }
      static fromShopInfo(dd) {
        const Jd = {};
        for (const kd in dd) {
          const pd = !0 === dd[kd].redDot && !0 !== dd[kd].forceRemoveRedDot;
          Jd[kd] = {
            redDot: pd,
            items: {}
          };
          for (const Nd in dd[kd].items) {
            const pd = dd[kd].items[Nd],
              Wd = !0 === pd.redDot && !0 !== pd.forceRemoveRedDot;
            Jd[kd].items[Nd] = {
              redDot: Wd
            }
          }
        }
        return new VN(Jd)
      }
      anyCategoryHasRedDots() {
        for (const dd in this.info)
          if (this.categoryHasRedDot(dd)) return !0;
        return !1
      }
      doesCategoryExist(dd) {
        return !(0, cJ.I)(this.info[dd])
      }
      categoryHasRedDot(dd) {
        return !0 === this.info[dd].redDot
      }
      updateCategoryRedDot(dd, Jd) {
        this.info[dd].redDot = Jd
      }
      doesItemExist(dd, Jd) {
        return this.doesCategoryExist(dd) && !(0, cJ.I)(this.info[dd].items[Jd])
      }
      itemHasRedDot(dd, Jd) {
        return !0 === this.info[dd].items[Jd].redDot
      }
      updateItemRedDot(dd, Jd, kd) {
        this.info[dd].items[Jd].redDot = kd
      }
      shallowCopy() {
        return new VN(this.info)
      }
    }

    function zN(dd, Jd) {
      return `${dd}\x1f${Jd}`
    }

    function HN(dd, Jd) {
      return !(0, cJ.I)(Jd) && !(0, cJ.I)(dd) && Jd in dd
    }
    const wN = (0, pd.memo)((function(dd) {
      var Jd, kd;
      let {
        show: Nd
      } = dd;
      const Pd = (0, wk.g)("players", NW),
        Zd = (0, wk.g)("players", WW),
        Kd = (0, Xp.d)(),
        [Qd, Ld] = (0, pd.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: VN.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        ed = (0, pd.useRef)(""),
        Rd = (0, pd.useRef)(null),
        Gd = (0, pd.useRef)(null),
        vd = (0, pd.useRef)(0),
        xd = (0, pd.useRef)(void 0),
        qd = (0, pd.useRef)(null),
        Bd = (0, pd.useRef)(Qd),
        ad = Qd.redDotInfo.anyCategoryHasRedDots(),
        [Md, Yd] = (0, pd.useState)(null),
        md = (0, pd.useRef)(!1);
      let bd = !1,
        Sd = 0,
        jd = 0;
      if (Qd.currencyAmounts) {
        for (const dd in Qd.currencyAmounts) {
          var Xd;
          const Jd = Qd.currencyAmounts[dd];
          Jd.hidden || (Sd++, (null === (Xd = Jd.subtext) || void 0 === Xd ? void 0 : Xd.length) > 0 && jd++)
        }
        bd = Sd + jd > 4
      }(0, pd.useEffect)((() => {
        hJ.j.nO("showShopIconRedDot", ad, !0)
      }), [ad]), (0, pd.useEffect)((() => {
        Id.gameBridge.send("setShopOpen", Nd), Nd || (clearTimeout(xd.current), Ld((dd => dd.awaitingPurchase ? {
          ...dd,
          awaitingPurchase: !1
        } : dd)))
      }), [Nd]), (0, pd.useEffect)((() => () => {
        Id.gameBridge.send("setShopOpen", !1), clearTimeout(xd.current)
      }), []), (0, pd.useEffect)((() => {
        Bd.current = Qd
      }), [Qd]), (0, pd.useEffect)((() => {
        if (null === Md) return;
        return (0, Sp.d)("pointerdown", (dd => {
          const Jd = dd.target;
          null !== Jd && void 0 !== Jd && Jd.closest(".ShopItem") || Yd(null)
        }))
      }), [Md]);
      const fd = dd => {
          Ld((Jd => ({
            ...Jd,
            ...dd
          })))
        },
        nd = dd => {
          var Jd;
          clearTimeout(null === (Jd = Qd.onBoughtInfo) || void 0 === Jd ? void 0 : Jd.timeout);
          const kd = setTimeout((() => {
            fd({
              onBoughtInfo: null
            })
          }), 3e3);
          ed.current = dd, fd({
            onBoughtInfo: {
              text: dd,
              timeout: kd,
              categoryKey: Rd.current
            }
          })
        },
        Ud = dd => {
          const {
            shopInfo: Jd,
            userInputsPerItem: kd,
            redDotInfo: pd,
            autoSelectCategory: Wd
          } = function(dd, Jd, kd, pd, Nd, Wd) {
            if ((0, cJ.I)(dd) || 0 === Object.keys(dd).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: VN.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Pd = Fd.q[Fd.t].adConfig.showRewardedAds,
              Zd = {};
            let gd = null;
            for (const ed in dd) {
              const Jd = dd[ed],
                kd = {};
              let pd = !1;
              for (const dd in Jd.items) {
                const Nd = Jd.items[dd];
                (0, sp.k)(Nd, Pd) && (kd[dd] = Nd, pd = !0)
              }
              pd && (Zd[ed] = {
                ...Jd,
                items: kd
              }, !0 === Jd.autoSelectCategory && (gd = ed))
            }
            const Cd = {},
              Kd = (dd, Jd, pd, Pd) => {
                var Zd, gd;
                const Kd = zN(dd, Jd),
                  od = null !== (Zd = kd[Kd]) && void 0 !== Zd ? Zd : kd[Jd];
                if (null !== (gd = Pd.userInput) && void 0 !== gd && gd.type) switch (Pd.userInput.type) {
                  case "dropdown": {
                    var ld;
                    const dd = !od || !Pd.userInput.dropdownOptions.some((dd => (0, sp.h)(dd) === od)),
                      Jd = Pd.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === pd || void 0 === pd || null === (ld = pd.userInput) || void 0 === ld ? void 0 : ld.type) || JSON.stringify(pd.userInput.dropdownOptions) !== JSON.stringify(Pd.userInput.dropdownOptions)),
                      kd = Pd.userInput,
                      Nd = !(0, cJ.I)(kd.initialValue) && kd.dropdownOptions.some((dd => (0, sp.h)(dd) === kd.initialValue));
                    var Qd;
                    return void(dd || Jd ? Nd ? Cd[Kd] = null !== (Qd = Pd.userInput.initialValue) && void 0 !== Qd ? Qd : null : Pd.userInput.dropdownOptions.length > 0 ? Cd[Kd] = (0, sp.h)(Pd.userInput.dropdownOptions[0]) : Cd[Kd] = null : Cd[Kd] = od)
                  }
                  case "text":
                  case "number":
                    var Ld, Od, ed;
                    return void((null === pd || void 0 === pd ? void 0 : pd.userInput) !== Pd.userInput ? Cd[Kd] = null !== (Ld = null !== (Od = Pd.userInput.initialValue) && void 0 !== Od ? Od : od) && void 0 !== Ld ? Ld : "" : Cd[Kd] = null !== (ed = null !== od && void 0 !== od ? od : Pd.userInput.initialValue) && void 0 !== ed ? ed : "");
                  case "color":
                    var Rd, Id, Gd;
                    return void((null === pd || void 0 === pd ? void 0 : pd.userInput) !== Pd.userInput ? Cd[Kd] = null !== (Rd = null !== (Id = Pd.userInput.initialValue) && void 0 !== Id ? Id : od) && void 0 !== Rd ? Rd : "#000000" : Cd[Kd] = null !== (Gd = null !== od && void 0 !== od ? od : Pd.userInput.initialValue) && void 0 !== Gd ? Gd : "#000000");
                  case "player": {
                    const dd = (0, sp.i)(Nd, Wd, Pd.userInput);
                    return void(od && dd.includes(od) ? Cd[Kd] = od : Cd[Kd] = dd.length > 0 ? dd[0] : null)
                  }
                }
              };
            for (const ed in Zd)
              for (const dd in Zd[ed].items) {
                var od;
                const kd = Zd[ed].items[dd];
                Kd(ed, dd, null === (od = Jd[ed]) || void 0 === od ? void 0 : od.items[dd], kd)
              }
            const ld = VN.fromShopInfo(Zd);
            for (const ed in Zd) {
              var Qd;
              if (pd.doesCategoryExist(ed)) {
                (null === (Qd = Jd[ed]) || void 0 === Qd ? void 0 : Qd.redDot) === Zd[ed].redDot && ld.updateCategoryRedDot(ed, pd.categoryHasRedDot(ed));
                for (const dd in Zd[ed].items) {
                  var Ld, Od;
                  pd.doesItemExist(ed, dd) && (null === (Ld = Jd[ed]) || void 0 === Ld || null === (Od = Ld.items[dd]) || void 0 === Od ? void 0 : Od.redDot) === Zd[ed].items[dd].redDot && ld.updateItemRedDot(ed, dd, pd.itemHasRedDot(ed, dd))
                }
              }
            }
            return {
              shopInfo: Zd,
              userInputsPerItem: Cd,
              redDotInfo: ld,
              autoSelectCategory: gd
            }
          }(dd, Qd.shopInfo, Qd.userInputsPerItem, Qd.redDotInfo, Pd, Zd), gd = {
            shopInfo: Jd,
            userInputsPerItem: kd,
            redDotInfo: pd
          };
          if (null === Wd || Nd)
            if (Jd[Qd.selectedCategoryKey]) gd.selectedCategoryKey = Qd.selectedCategoryKey;
            else {
              const dd = np(Jd);
              gd.selectedCategoryKey = dd.length > 0 ? dd[0] : null
            }
          else gd.selectedCategoryKey = Wd;
          return 0 === Object.keys(Jd).length && Nd && sd.d.set({
            openEverythingMenuName: null
          }), gd
        },
        Dd = (dd, Jd, kd) => {
          const pd = Qd.selectedCategoryKey,
            Nd = zN(pd, dd),
            Wd = null !== kd && void 0 !== kd ? kd : Qd.userInputsPerItem[Nd],
            Pd = {
              categoryKey: pd,
              itemKey: dd,
              userInput: Wd
            };
          if (Rd.current = pd, Jd.isRewardedAd) {
            if (Date.now() - vd.current < 5e3) return;
            (0, PJ.R)((() => {
              var kd, pd, Wd;
              console.log("bought rewarded ad");
              const Zd = Pd.categoryKey ? null === (kd = Bd.current.shopInfo[Pd.categoryKey]) || void 0 === kd ? void 0 : kd.items[dd] : null;
              if (!Zd || !Zd.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (pd = Jd.userInput) || void 0 === pd ? void 0 : pd.type) === (null === Zd || void 0 === Zd || null === (Wd = Zd.userInput) || void 0 === Wd ? void 0 : Wd.type) ? (Pd.userInput = Bd.current.userInputsPerItem[Nd], Id.gameBridge.send("buyShopItem", Pd), Jd.onBoughtMessage && nd(Jd.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), vd.current = Date.now()
          } else {
            Id.gameBridge.send("buyShopItem", Pd), fd({
              awaitingPurchase: !0
            }), clearTimeout(xd.current), xd.current = setTimeout((() => {
              qd.current = null, fd({
                awaitingPurchase: !1
              })
            }), 1e3);
            const dd = (0, sp.d)(Jd, Wd);
            if (qd.current = null, !isNaN(dd) && HN(Qd.currencyAmounts, Jd.currency)) {
              0 !== dd && (qd.current = {
                currency: Jd.currency,
                amountBefore: Qd.currencyAmounts[Jd.currency].amount
              });
              const kd = {
                ...Qd.currencyAmounts
              };
              kd[Jd.currency].amount -= dd, fd({
                currencyAmounts: kd
              })
            }
            Jd.onBoughtMessage && nd(Jd.onBoughtMessage)
          }
        },
        Td = (dd, Jd) => {
          if (null === Jd || !dd.shopInfo[Jd]) return dd;
          let kd = dd.redDotInfo;
          return kd.categoryHasRedDot(Jd) && (kd.updateCategoryRedDot(Jd, !1), kd = kd.shallowCopy()), {
            ...dd,
            selectedCategoryKey: Jd,
            redDotInfo: kd
          }
        },
        Ed = dd => {
          Ld((Jd => Td(Jd, dd)))
        };
      (0, FJ.h)(jp.i, (() => {
        Ld((dd => {
          const Jd = (0, jp.l)(np(dd.shopInfo), dd.selectedCategoryKey, (Jd => (0, jp.h)(dd.shopInfo[Jd].items)));
          return Jd === dd.selectedCategoryKey ? dd : Td(dd, Jd)
        }))
      })), (0, FJ.h)("showShopFromServer", (dd => {
        let {
          toggle: Jd,
          zk: kd
        } = dd;
        kd && Ed(kd), 0 === Object.keys(Qd.shopInfo).length || Jd && Nd ? sd.d.set({
          openEverythingMenuName: null
        }) : sd.d.set({
          openEverythingMenuName: KJ.s.SHOP
        })
      })), (0, FJ.h)("closeShopOnDamaged", (() => {
        Nd && sd.d.set({
          openEverythingMenuName: null
        })
      })), (0, FJ.h)("overShopInfo", (dd => {
        nd(dd)
      })), (0, Od.g)("currencyAmounts", (dd => {
        var Jd;
        const kd = qd.current;
        kd && (null === dd || void 0 === dd || null === (Jd = dd[kd.currency]) || void 0 === Jd ? void 0 : Jd.amount) === kd.amountBefore ? fd({
          currencyAmounts: dd
        }) : (qd.current = null, fd({
          currencyAmounts: dd,
          awaitingPurchase: !1
        }))
      })), (0, Od.g)("shopInfo", (dd => {
        fd({
          ...Ud(dd),
          awaitingPurchase: !1
        })
      }));
      const cd = (0, pd.useRef)({
        playerIds: Pd,
        localPlayerId: Zd
      });
      (0, pd.useEffect)((() => {
        cd.current.playerIds === Pd && cd.current.localPlayerId === Zd || (cd.current = {
          playerIds: Pd,
          localPlayerId: Zd
        }, Ld((dd => {
          const Jd = Ud(dd.shopInfo);
          return {
            ...dd,
            ...Jd
          }
        })))
      }), [Pd, Zd]);
      const hd = Qd.selectedCategoryKey,
        rd = (dd, Jd) => {
          var kd, pd;
          return (isNaN(Jd) || (0, cJ.I)(dd.currency) || HN(Qd.currencyAmounts, dd.currency) && Jd <= Qd.currencyAmounts[dd.currency].amount) && (null === (kd = dd.canBuy) || void 0 === kd || kd) && !(null !== (pd = dd.hidden) && void 0 !== pd && pd)
        },
        ud = (dd, Jd) => {
          var kd, pd, Nd;
          const Pd = zN(hd, dd),
            Zd = Qd.shopInfo[hd].items[dd],
            Kd = Qd.userInputsPerItem[Pd],
            ld = (0, sp.d)(Zd, Kd),
            Ld = rd(Zd, ld),
            Od = Zd.enchant,
            ed = Od ? (0, yd.yb)(null !== (kd = Zd.customTitle) && void 0 !== kd ? kd : dd, {
              colour: yd.tb[Od.tier]
            }) : null !== (pd = Zd.customTitle) && void 0 !== pd ? pd : dd,
            Rd = Jd => {
              const kd = null !== Jd && void 0 !== Jd ? Jd : Kd,
                pd = void 0 !== Jd ? (0, sp.d)(Zd, Jd) : ld;
              rd(Zd, pd) && null !== kd && Dd(dd, Zd, Jd);
              let Nd = Qd.redDotInfo;
              Nd.itemHasRedDot(hd, dd) && (Nd.updateItemRedDot(hd, dd, !1), Nd = Nd.shallowCopy()), fd({
                redDotInfo: Nd
              })
            };
          return (0, od.jsxs)("div", {
            className: Wd()("ShopItem", {
              ShopItemNoInput: !Zd.userInput,
              ShopItemNoInputCanBuy: !Zd.userInput && Ld,
              ShopItemNoInputSelected: Zd.isSelected,
              ShopItemEnchant: !!Od
            }),
            "data-pad-focusable": !Zd.userInput || void 0,
            "data-pad-unavailable": !Zd.userInput && !Ld || void 0,
            "data-pad-repeat": null !== (Nd = (0, jp.d)(Zd)) && void 0 !== Nd ? Nd : void 0,
            "data-pad-repeat-wait": Qd.awaitingPurchase || void 0,
            onClick: () => {
              if (Od && md.current) {
                if (Md !== Pd) return void Yd(Pd);
                Yd(null)
              }
              Zd.userInput || Rd()
            },
            onPointerDown: dd => {
              Od && (md.current = (0, ap.l)(dd))
            },
            onPointerEnter: dd => {
              Od && !(0, ap.l)(dd) && Yd(Pd)
            },
            onPointerLeave: dd => {
              Od && !(0, ap.l)(dd) && Yd((dd => dd === Pd ? null : dd))
            },
            style: {
              zIndex: Object.keys(Qd.shopInfo[hd].items).length - Jd
            },
            children: [Qd.redDotInfo.itemHasRedDot(hd, dd) && (0, od.jsx)(gd.e, {
              top: "-6px",
              right: "-6px"
            }), Zd.badge && (0, od.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, od.jsx)("div", {
                className: Wd()("ShopBadgeMain", Zd.badge.type),
                children: (0, od.jsx)(Fp.c, {
                  text: Zd.badge.text
                })
              })
            }), (0, od.jsx)("div", {
              className: "ShopItemLeft",
              children: Zd.image && (0, od.jsx)(AN, {
                item: Zd,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, od.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, od.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, od.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, od.jsx)(Fp.c, {
                    text: ed
                  })
                }), (0, od.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, od.jsx)(Fp.c, {
                    text: Zd.description
                  })
                })]
              }), Zd.userInput && (0, od.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: dd => {
                  dd.stopPropagation()
                },
                children: [(0, od.jsx)(kW, {
                  item: Zd,
                  currInput: Kd,
                  updateInput: Jd => {
                    ((dd, Jd, kd) => {
                      const pd = zN(dd, Jd),
                        Nd = {
                          ...Qd.userInputsPerItem
                        };
                      Nd[pd] = kd, fd({
                        userInputsPerItem: Nd
                      })
                    })(hd, dd, Jd)
                  },
                  onSubmit: dd => {
                    Rd(dd)
                  }
                }), ("dropdown" !== Zd.userInput.type || !Zd.userInput.autoSubmit) && (0, od.jsx)(Cd.d, {
                  className: "ItemCostButton",
                  disabled: !Ld && null !== Kd,
                  onClick: () => {
                    Rd()
                  },
                  children: (0, od.jsx)(JW, {
                    item: Zd,
                    cost: ld,
                    currencyAmounts: Qd.currencyAmounts
                  })
                })]
              })]
            }), !Zd.userInput && (0, od.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, od.jsx)(JW, {
                item: Zd,
                cost: ld,
                currencyAmounts: Qd.currencyAmounts
              })
            }), Od && Md === Pd && (0, od.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, od.jsx)(Fp.c, {
                text: ed
              }), (0, od.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, od.jsx)(Fp.c, {
                  text: (0, ip.d)("", Od.enchantments, Od.enchantmentData)
                })
              })]
            })]
          }, Pd)
        },
        td = function(dd) {
          for (const Jd in dd)
            if (dd[Jd].smp) return !0;
          return !1
        }(Qd.shopInfo),
        Vd = pN(Qd.shopInfo, hd);
      return (0, od.jsx)(xp.b, {
        className: "Menu ShopBody",
        show: Nd,
        children: 0 !== Object.keys(Qd.shopInfo).length && (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, od.jsx)(ld, {
              items: np(Qd.shopInfo).map((dd => {
                var Jd;
                return {
                  id: dd,
                  title: null !== (Jd = Qd.shopInfo[dd].customTitle) && void 0 !== Jd ? Jd : dd,
                  redDot: Qd.redDotInfo.categoryHasRedDot(dd)
                }
              })),
              link: Kd ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, fp.f)({
                    page: (0, fp.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: hd,
              onClick: Ed,
              padStartsOnTab: (0, jp.f)(hd)
            }), (0, od.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Qd.currencyAmounts && Object.keys(Qd.currencyAmounts).map((dd => {
                var Jd;
                const kd = Qd.currencyAmounts[dd];
                return kd.hidden ? null : (0, od.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (bd ? "SmallText" : ""),
                  children: [(0, od.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, od.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: kd.iconColour
                      },
                      children: (0, od.jsx)(PW, {
                        iconName: kd.icon
                      })
                    }), "\xa0", (0, Bp.e)(kd.amount, 6)]
                  }), (null === (Jd = kd.subtext) || void 0 === Jd ? void 0 : Jd.length) > 0 && (0, od.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, od.jsx)(Fp.c, {
                      text: kd.subtext
                    })
                  })]
                }, dd)
              }))
            })]
          }), (0, od.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [td && (0, od.jsx)(tN, {
              show: Nd,
              shopInfo: Qd.shopInfo,
              selectedCategoryKey: hd,
              buy: (dd, Jd, kd) => {
                Dd(dd, Jd, kd)
              },
              canAfford: rd,
              message: Qd.onBoughtInfo
            }), null === Vd && (0, od.jsxs)(od.Fragment, {
              children: [(0, od.jsx)("div", {
                className: Wd()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Qd.onBoughtInfo
                }),
                children: (0, od.jsx)(Fp.c, {
                  text: ed.current
                })
              }), (0, od.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, od.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Jd = Qd.shopInfo[hd]) || void 0 === Jd ? void 0 : Jd.description) && (0, od.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, od.jsx)(Fp.c, {
                      text: Qd.shopInfo[hd].description
                    })
                  }), Nd && (0, od.jsx)("div", {
                    className: "ShopItems",
                    ref: Gd,
                    "data-pad-initial-area": !0,
                    children: np(null === (kd = Qd.shopInfo[hd]) || void 0 === kd ? void 0 : kd.items).map(((dd, Jd) => ud(dd, Jd)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function AN(dd) {
      let {
        item: Jd,
        minWidth: kd,
        minHeight: pd
      } = dd;
      const {
        image: Nd,
        schematicId: Wd,
        imageColour: Pd
      } = Jd;
      if (Wd) return (0, od.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${kd}rem`,
          height: `${pd}rem`
        },
        children: (0, od.jsx)(Yp.c, {
          game: {
            schematicId: Wd
          }
        })
      });
      var gd, Cd;
      if ((0, Mp.f)(Nd)) return (0, od.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${kd}rem`,
          height: "0",
          minHeight: `${pd}rem`
        },
        children: (0, od.jsx)(Mp.d, {
          itemName: Nd,
          amount: null !== (gd = Jd.amount) && void 0 !== gd ? gd : 0,
          amountFontSize: pd / 4 + "rem",
          enchantmentTier: null === (Cd = Jd.enchant) || void 0 === Cd ? void 0 : Cd.tier
        })
      });
      const Kd = Nd.slice(-4);
      return ".jpg" === Kd || ".png" === Kd ? (0, od.jsx)(dW, {
        image: Nd,
        minWidth: kd
      }) : (0, od.jsx)(Zd.e, {
        name: Nd,
        className: "SelectedItemImage",
        style: {
          color: Pd
        }
      })
    }

    function dW(dd) {
      let {
        image: Jd,
        minWidth: kd
      } = dd;
      const {
        gameNameWithVariation: pd
      } = (0, wk.k)("connectedGame"), Nd = Jd.endsWith(".jpg");
      return (0, od.jsx)("img", {
        className: Wd()({
          ShopPixelImage: !Nd
        }),
        style: {
          width: `${Nd?1.6*kd:kd}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,yd._b)(pd)}/${Jd}`,
        alt: Jd,
        draggable: !1
      })
    }

    function JW(dd) {
      let {
        item: Jd,
        cost: kd,
        currencyAmounts: pd
      } = dd;
      const Nd = !isNaN(kd) && 0 !== kd && HN(pd, Jd.currency);
      let Wd = null;
      return Jd.buyButtonText ? Wd = Jd.buyButtonText : Nd ? (Wd = kd, Jd.sell && (Wd = -1 * kd), Wd = Wd.toString()) : 0 === kd ? Wd = "Free" : Jd.isRewardedAd && (Wd = "Watch ad"), (0, cJ.I)(Wd) || " " === Wd ? null : (0, od.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Nd && (0, od.jsx)("div", {
          style: {
            color: pd[Jd.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, od.jsx)(PW, {
            iconName: pd[Jd.currency].icon
          })
        }), (0, od.jsx)("div", {
          className: "BuyItemCost",
          children: (0, od.jsx)(Fp.c, {
            text: Wd
          })
        })]
      })
    }

    function kW(dd) {
      let {
        item: Jd,
        currInput: kd,
        updateInput: Nd,
        onSubmit: Wd
      } = dd;
      const {
        t: Zd
      } = (0, Pd.B)(), gd = (0, pd.useRef)(null);
      if ((0, pd.useEffect)((() => {
          const dd = gd.current;
          dd && dd.value !== kd && document.activeElement !== dd && (dd.value = null !== kd && void 0 !== kd ? kd : "")
        }), [kd]), !Jd.userInput) return null;
      let Cd = Jd.userInput;
      if (Rd.featureFlags.sanitizeShopInput && "text" === Jd.userInput.type && (Cd = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Cd.type || "number" === Cd.type) {
        var Kd, ld;
        console.assert(void 0 !== kd, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Jd)}`);
        const dd = "text" === Cd.type && Cd.wordCharsOnly;
        return (0, od.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, od.jsx)(xd.e, {
            className: "ShopItemUserInputText",
            placeholderText: Zd(Cd.placeholderText),
            defaultValue: kd,
            domRef: gd,
            onValueChange: (Jd, kd) => {
              !0 === dd && (Jd = (0, bp.fb)(Jd)), gd.current.value = Jd, Nd(Jd)
            },
            onEnter: Wd,
            type: Cd.type
          }, (null !== (Kd = Cd.initialValue) && void 0 !== Kd ? Kd : "") + (null !== (ld = Cd.placeholderText) && void 0 !== ld ? ld : ""))
        })
      }
      if ("dropdown" === Cd.type) {
        console.assert(void 0 !== kd, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Jd)}`);
        const dd = Cd.autoSubmit;
        return (0, od.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, od.jsx)(qJ.c, {
            options: Cd.dropdownOptions.map((dd => (0, sp.h)(dd))),
            value: kd,
            onChange: Jd => {
              let {
                value: kd
              } = Jd;
              Nd(kd), dd && Wd(kd)
            }
          })
        })
      }
      return "player" === Cd.type ? (0, od.jsx)(pW, {
        userInput: Cd,
        currInput: kd,
        updateInput: Nd
      }) : "color" === Cd.type ? (0, od.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, od.jsx)("input", {
          type: "color",
          value: kd,
          onChange: dd => {
            Nd(dd.target.value)
          }
        })
      }) : null
    }

    function pW(dd) {
      let {
        userInput: Jd,
        currInput: kd,
        updateInput: pd
      } = dd;
      const Nd = (0, wk.k)("players"),
        Wd = (0, wk.k)("hiddenPlayerNames"),
        Pd = (0, sp.i)(Nd.ids, Nd.localId, Jd);
      return (0, od.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, od.jsx)(qJ.c, {
          options: Pd.map((dd => {
            const {
              name: Jd
            } = Nd.byId[dd];
            return {
              value: dd,
              label: null === Jd ? "" : (0, mp.e)(Jd, Wd)
            }
          })),
          value: kd,
          onChange: dd => {
            let {
              value: Jd
            } = dd;
            pd(Jd)
          }
        })
      })
    }

    function NW(dd) {
      let {
        ids: Jd
      } = dd;
      return Jd
    }

    function WW(dd) {
      let {
        localId: Jd
      } = dd;
      return Jd
    }

    function PW(dd) {
      let {
        iconName: Jd
      } = dd;
      return Id.gameBridge.lookup("isItemName", Jd) ? (0, od.jsx)(Mp.d, {
        itemName: Jd,
        amount: 1
      }) : (0, od.jsx)(Zd.e, {
        name: Jd,
        className: "2x"
      })
    }
    var ZW = kd(1670);
    const gW = (0, kd(1417).k)((dd => dd.PadLobbyShortcuts)),
      CW = (0, pd.lazy)((() => Promise.resolve().then((() => kd(4520))).then((dd => ({
        default: dd.Lobbyleaderboard
      }))))),
      KW = (0, pd.lazy)((() => kd.e(215).then((() => kd(41067))).then((dd => ({
        default: dd.LobbyManageView
      })))));

    function oW(dd) {
      let {
        show: Jd
      } = dd;
      return Jd ? (0, od.jsx)(lW, {}) : null
    }

    function lW() {
      const dd = (0, Xp.d)();
      return (0, od.jsxs)(od.Fragment, {
        children: [(0, od.jsx)(gW, {}), (0, od.jsxs)(pd.Suspense, {
          fallback: (0, od.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, od.jsx)(qd.b, {})
          }),
          children: [dd && (0, od.jsx)(KW, {
            leaderboard: (0, od.jsx)(CW, {})
          }), !dd && (0, od.jsx)(CW, {})]
        })]
      })
    }
    var QW = kd(1594),
      LW = kd(2867),
      OW = kd(1753),
      eW = kd(2918),
      RW = kd(2566),
      IW = kd(1515),
      GW = kd(1469),
      vW = kd(2845),
      xW = kd(2859),
      qW = kd(2293);
    const BW = "storeRecentGiftRecipients",
      sW = new Map;

    function iW() {
      try {
        const dd = uJ.i.getItem(BW);
        return Array.isArray(dd) ? dd.filter((dd => "string" === typeof(null === dd || void 0 === dd ? void 0 : dd.name) && dd.name.length > 0)).map((dd => ({
          name: dd.name,
          cosmetics: dd.cosmetics && "object" === typeof dd.cosmetics ? dd.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function aW(dd) {
      var Jd;
      const [kd, Nd] = (0, pd.useState)(""), [Wd, Pd] = (0, pd.useState)("search"), [Zd, gd] = (0, pd.useState)(null), [Cd, Kd] = (0, pd.useState)(null), od = (0, pd.useRef)(null), ld = (0, pd.useRef)(null);
      (0, pd.useEffect)((() => () => {
        od.current && clearTimeout(od.current)
      }), []);
      const Qd = null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.name) && void 0 !== Jd ? Jd : null;

      function Ld() {
        od.current && (clearTimeout(od.current), od.current = null)
      }(0, pd.useEffect)((() => {
        if (null === Qd || dd === Yd.NULL_USER_CONTEXT) return;
        const Jd = Qd.toLowerCase();
        if (Jd === dd.getPlayerName().toLowerCase()) return void Kd({
          name: Qd,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const kd = sW.get(Jd);
        if (kd) return void Kd({
          name: Qd,
          result: kd
        });
        let pd = !1;
        return async function(dd, Jd) {
          try {
            const kd = await (0, Yd.postJsonWithMetricsCookiesAndJsonResponse)(`${md.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Jd
            }, {
              retries: 1
            }, dd.getMetricsCookies());
            if ("boolean" !== typeof(null === kd || void 0 === kd ? void 0 : kd.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(kd)}`);
            return kd
          } catch (kd) {
            return console.error("Failed to look up gift recipient:", kd), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(dd, Qd).catch((dd => (console.error("Gift recipient lookup failed:", dd), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((dd => {
          !0 !== dd.giftRecipientFound && "store:giftRecipientLookupFailed" === dd.giftRecipientError || sW.set(Jd, dd), pd || Kd({
            name: Qd,
            result: dd
          })
        })), () => {
          pd = !0
        }
      }), [Qd, dd]);
      const Od = (0, pd.useMemo)((() => {
        const dd = kd.trim();
        if (!dd) return {
          status: "none"
        };
        if (!Zd || Zd.name !== dd || (null === Cd || void 0 === Cd ? void 0 : Cd.name) !== Zd.name) return {
          status: "pending",
          name: dd
        };
        const Jd = Cd.result;
        return !1 === Jd.giftRecipientFound ? {
          status: "error",
          name: Zd.name,
          error: Jd.giftRecipientError
        } : {
          status: "found",
          name: Jd.giftRecipientName,
          ownedPacks: Jd.giftRecipientOwnedPacks,
          hasSuperRank: Jd.giftRecipientHasSuperRank,
          isSubscriber: Jd.giftRecipientIsSubscriber
        }
      }), [kd, Zd, Cd]);
      (0, pd.useEffect)((() => {
        "found" === Od.status && "typed" === (null === Zd || void 0 === Zd ? void 0 : Zd.source) && ld.current !== Od.name && (ld.current = Od.name, (0, Ad.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Od, Zd]);
      const ed = (null === Cd || void 0 === Cd ? void 0 : Cd.name) === (null === Zd || void 0 === Zd ? void 0 : Zd.name) ? null === Cd || void 0 === Cd ? void 0 : Cd.result : null,
        Rd = !0 === (null === ed || void 0 === ed ? void 0 : ed.giftRecipientFound) ? ed.giftRecipientCosmetics : null;
      return {
        query: kd,
        via: Wd,
        recipient: Od,
        recipientCosmetics: Rd,
        type: function(dd) {
          Nd(dd), Pd("search"), Ld();
          const Jd = dd.trim();
          Jd ? od.current = setTimeout((() => {
            gd({
              name: Jd,
              source: "typed"
            })
          }), 400) : gd(null)
        },
        choose: function(dd, Jd) {
          Ld(), Nd(dd), Pd("typed" === Jd ? "search" : "prefilled" === Jd ? "prefilled" : "suggestion"), gd({
            name: dd,
            source: Jd
          }), "typed" !== Jd && "prefilled" !== Jd && (0, Ad.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Jd
          })
        },
        clear: function() {
          Ld(), Nd(""), Pd("search"), gd(null)
        },
        recordGift: function(dd, Jd) {
          ! function(dd) {
            sW.delete(dd.toLowerCase())
          }(dd), Kd((kd => {
            if (!kd || kd.name.toLowerCase() !== dd.toLowerCase() || !0 !== kd.result.giftRecipientFound || "superRank" === Jd) return kd;
            const pd = kd.result.giftRecipientOwnedPacks;
            return {
              ...kd,
              result: {
                ...kd.result,
                giftRecipientOwnedPacks: pd.includes(Jd) ? pd : [...pd, Jd]
              }
            }
          }))
        }
      }
    }
    var MW = kd(2284),
      FW = kd(4528),
      YW = kd(256),
      mW = kd(2980);
    const bW = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var SW = kd(2238),
      jW = kd(593),
      XW = kd(2316),
      fW = kd(2479);

    function nW(dd) {
      let {
        cosmetics: Jd
      } = dd;
      return (0, od.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, od.jsx)(XW.e, {
          cosmetics: Jd
        })
      })
    }

    function UW(dd, Jd) {
      var kd, pd;
      const Nd = null !== (kd = dd.friend) && void 0 !== kd ? kd : {
        isError: !1,
        name: dd.name,
        ranks: [],
        cosmetics: null !== (pd = dd.cosmetics) && void 0 !== pd ? pd : {},
        nameColour: jW.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return Jd ? {
        ...Nd,
        cosmetics: Jd
      } : Nd
    }

    function yW(dd) {
      let {
        pending: Jd
      } = dd;
      return (0, od.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Jd && (0, od.jsx)(qd.b, {})
      })
    }

    function DW(dd) {
      var Jd;
      let {
        selfName: kd,
        giftRecipient: Nd,
        suggestionsVersion: gd,
        pulseSignal: Kd,
        disabled: ld
      } = dd;
      const {
        t: Qd
      } = (0, Pd.B)(), Ld = (0, cd.j)(), Od = (0, pd.useRef)(null), ed = (0, pd.useRef)(null), {
        query: Id,
        via: Gd,
        recipient: vd,
        recipientCosmetics: qd
      } = Nd, Bd = (0, qW.l)(Id), sd = (0, pd.useMemo)((() => {
        const dd = Rd.featureFlags.useSocialFeatures ? Ld.friends.filter((dd => !dd.isError)) : [];
        return (0, qW.h)({
          onlineFriends: (0, cd.e)(dd),
          recentRecipients: iW(),
          friends: dd,
          selfName: kd,
          max: 8
        })
      }), [Ld.friends, kd, gd]), ad = Id.trim().toLowerCase(), Md = "search" !== Gd && ad ? sd.find((dd => dd.name.toLowerCase() === ad)) : void 0, Fd = Md && "prefilled" === Gd ? [Md, ...sd.filter((dd => dd !== Md))] : sd, Yd = "" !== ad && !Md, md = Yd ? Id : "", bd = Fd.length > 0;
      (0, pd.useEffect)((() => {
        Od.current && Od.current.value !== md && (Od.current.value = md)
      }), [md]), (0, pd.useEffect)((() => {
        Od.current && (Od.current.disabled = ld)
      }), [ld, Kd]);
      const Sd = (0, pd.useRef)(0);

      function Xd() {
        "self" !== Bd && (0, Ad.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Nd.clear()
      }

      function fd(dd) {
        var Jd, kd;
        if (ld) return;
        if (" " === dd.key || "Enter" === dd.key) return dd.preventDefault(), void dd.currentTarget.click();
        const pd = Array.from(null !== (Jd = null === (kd = ed.current) || void 0 === kd ? void 0 : kd.querySelectorAll("[role=radio]")) && void 0 !== Jd ? Jd : []),
          Nd = pd.indexOf(dd.currentTarget);
        let Wd;
        "ArrowRight" === dd.key || "ArrowDown" === dd.key ? Wd = pd[(Nd + 1) % pd.length] : "ArrowLeft" === dd.key || "ArrowUp" === dd.key ? Wd = pd[(Nd - 1 + pd.length) % pd.length] : "Home" === dd.key ? Wd = pd[0] : "End" === dd.key && (Wd = pd[pd.length - 1]), Wd && (dd.preventDefault(), Wd.focus(), Wd.click())
      }(0, pd.useEffect)((() => {
        var dd;
        Kd > Sd.current && !ld && (Sd.current = Kd, null === (dd = Od.current) || void 0 === dd || dd.focus())
      }), [Kd, ld]);
      const nd = "self" === Bd,
        Ud = null !== (Jd = null === Md || void 0 === Md ? void 0 : Md.name) && void 0 !== Jd ? Jd : null,
        yd = "error" === vd.status ? vd.error : null,
        Dd = "store:giftRecipientLookupFailed" === yd;
      return (0, od.jsxs)("div", {
        className: Wd()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: ld,
          StoreRecipientStripNoChips: !bd
        }),
        children: [(0, od.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Qd("store:buyingFor")
        }), (0, od.jsxs)("div", {
          ref: ed,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Qd("store:whoIsItFor"),
          children: [(0, od.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": nd,
            tabIndex: ld || !nd && null !== Ud ? -1 : 0,
            className: Wd()("StoreRecipientMe", {
              StoreRecipientChecked: nd
            }),
            onClick: () => {
              ld || Xd()
            },
            onKeyDown: fd,
            children: [(0, od.jsx)(Zd.e, {
              name: "user"
            }), " ", Qd("store:me")]
          }), bd && (0, od.jsx)("div", {
            className: "StoreRecipientChips",
            children: Fd.map((dd => {
              const Jd = dd === Md;
              return (0, od.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Jd,
                tabIndex: !ld && Jd ? 0 : -1,
                title: dd.name,
                className: Wd()("StoreRecipientChip", {
                  StoreRecipientChecked: Jd
                }),
                onClick: () => {
                  ld || function(dd) {
                    "gift" !== Bd && (0, Ad.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Nd.choose(dd.name, dd.kind)
                  }(dd)
                },
                onKeyDown: fd,
                children: (0, od.jsx)(fW.f, {
                  playerSocialPreview: UW(dd, Jd ? qd : null),
                  opensProfileCard: !1,
                  isFriend: null !== dd.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== dd.friend,
                  status: null === dd.friend ? null : void 0,
                  trailing: Jd ? (0, od.jsx)(yW, {
                    pending: "pending" === vd.status
                  }) : void 0
                })
              }, dd.name)
            }))
          })]
        }), (0, od.jsxs)("div", {
          className: Wd()("StoreRecipientSearch", {
            StoreRecipientChecked: Yd,
            StoreRecipientSearchPulse: Kd > 0 && !Yd,
            StoreRecipientSearchError: null !== yd && !Dd
          }),
          onClick: () => {
            var dd;
            null === (dd = Od.current) || void 0 === dd || dd.focus()
          },
          children: [Yd && "found" === vd.status && qd && (0, od.jsx)(nW, {
            cosmetics: qd
          }), !(Yd && "found" === vd.status && qd) && (0, od.jsx)(Zd.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, od.jsx)(xd.e, {
            className: "StoreRecipientSearchInput",
            domRef: Od,
            placeholderText: Qd("store:searchName"),
            defaultValue: md,
            maxLength: jd.h,
            onValueChange: function(dd) {
              "gift" !== Bd && dd.trim() && (0, Ad.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Nd.type(dd)
            },
            onEnter: () => {
              var dd;
              const Jd = null === (dd = Od.current) || void 0 === dd ? void 0 : dd.value.trim();
              Jd && Nd.choose(Jd, "typed")
            },
            blurOnEnter: !0
          }), Yd && (0, od.jsx)(yW, {
            pending: "pending" === vd.status
          }), Yd && (0, od.jsx)("div", {
            ...(0, Cd.P)({
              disabled: ld
            }),
            "aria-label": Qd("store:clearRecipient"),
            title: Qd("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: dd => {
              dd.stopPropagation(), ld || Xd()
            },
            children: (0, od.jsx)(Zd.e, {
              name: "xmark"
            })
          })]
        }, Kd), yd && (0, od.jsx)("div", {
          className: Wd()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Dd
          }),
          role: "status",
          children: Qd(yd)
        })]
      })
    }
    var TW = kd(2280),
      EW = kd(2216),
      cW = kd(3458),
      hW = kd(2985),
      rW = kd(2245);
    const uW = kd.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function tW() {
      (0, rW.i)(uW, {
        lowPriority: !1
      })
    }

    function VW(dd) {
      let {
        onBack: Jd,
        cta: kd,
        recipient: Nd,
        afterCta: Wd
      } = dd;
      const {
        t: gd
      } = (0, Pd.B)(), [Kd, ld] = (0, pd.useState)("starting"), Qd = (0, pd.useRef)(null), Ld = (0, bJ.d)(), Od = (0, pd.useRef)(null), ed = (0, pd.useCallback)((() => {
        const dd = Qd.current;
        null !== dd.error && dd.load();
        const Jd = dd.play();
        Od.current = Jd, Jd.catch((dd => {
          (0, cW.e)("Failed to play Super Rank video", dd), Ld.current && Od.current === Jd && ld("failed")
        }))
      }), [Ld]);
      return (0, pd.useEffect)((() => {
        const dd = Qd.current;
        let Jd;

        function kd() {
          clearTimeout(Jd), Jd = setTimeout(ed, 3e3)
        }
        return ed(), dd.addEventListener("ended", kd), () => {
          clearTimeout(Jd), dd.removeEventListener("ended", kd)
        }
      }), [ed]), (0, od.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, od.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, od.jsx)(Cd.b, {
            className: "StoreDetailBackButton",
            onClick: Jd,
            padBack: !0,
            children: gd("general:back")
          }), (0, od.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, od.jsx)(Zd.e, {
              name: "bolt"
            }), " ", gd("homePage:superRank")]
          }), Nd]
        }), (0, od.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, od.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, od.jsx)("video", {
              ref: Qd,
              src: `${md.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: uW,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Kd,
              onPlaying: () => {
                ld("playing")
              },
              onError: () => {
                ld("failed")
              }
            }), ("failed" === Kd || "loading" === Kd) && (0, od.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, od.jsx)(Cd.d, {
                ariaLabel: gd("general:play"),
                loading: "loading" === Kd,
                onClick: () => {
                  ld("loading"), ed()
                },
                touchPressOn: "pointerup",
                children: (0, od.jsx)(Zd.e, {
                  name: "play"
                })
              })
            })]
          }), (0, od.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, od.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, od.jsx)(hW.e, {})
            }), (0, od.jsxs)("div", {
              className: "StoreTileActions",
              children: [kd, Wd]
            })]
          })]
        })]
      })
    }
    var zW = kd(2500),
      HW = kd(3404),
      wW = kd(2962),
      AW = kd(2968);
    const dP = [jW.m.yellow, jW.m.green, jW.m.aqua, jW.m.blue, jW.m.purple, jW.m.red];

    function JP(dd) {
      return "needsRecipient" === dd || "lookingUp" === dd || "gift" === dd || "recipientOwns" === dd || "recipientSharesOwned" === dd || "recipientSubscribed" === dd
    }

    function kP(dd) {
      const {
        onKeyDown: Jd,
        ...kd
      } = (0, Cd.P)();
      return {
        ...kd,
        "aria-label": dd,
        onKeyDown: dd => {
          dd.target === dd.currentTarget && (null === Jd || void 0 === Jd || Jd(dd))
        }
      }
    }

    function pP(dd) {
      let {
        text: Jd
      } = dd;
      return (0, od.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Jd).map(((dd, Jd) => (0, od.jsx)("span", {
          style: {
            color: dP[Jd % dP.length]
          },
          children: dd
        }, Jd)))
      })
    }
    const NP = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function WP(dd) {
      let {
        state: Jd,
        item: kd,
        price: pd,
        busy: Nd,
        highlight: gd = !1,
        onAct: Kd,
        onNeedRecipient: ld,
        onLogin: Qd
      } = dd;
      const {
        t: Ld
      } = (0, Pd.B)(), Od = "superRank" === kd ? fd.k.product.days : null, ed = dd => null === Od ? Ld(dd ? "general:gift" : "general:buy") : Ld(dd ? "store:giftDays" : "store:buyDays", {
        days: Od
      }), Rd = (dd, Jd) => {
        const kd = (0, od.jsxs)(od.Fragment, {
          children: [null === dd && (0, od.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== dd && (0, od.jsx)("span", {
            className: "StoreCtaLabel",
            title: dd,
            children: dd
          })]
        });
        return null !== Od ? (0, od.jsxs)(od.Fragment, {
          children: [Jd && (0, od.jsx)("span", {
            className: "StoreCtaIcon",
            children: Jd
          }), kd, (0, od.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, od.jsx)(EW.e, {
              amount: pd
            })]
          })]
        }) : (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsxs)("span", {
            className: "StoreCtaLead",
            children: [kd, "\xb7"]
          }), (0, od.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Jd, (0, od.jsx)(EW.e, {
              amount: pd
            })]
          })]
        })
      };
      let Id;
      switch (Jd) {
        case "pending":
          Id = (0, od.jsx)(Cd.j, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Rd(null)
          });
          break;
        case "login":
          Id = (0, od.jsx)(Cd.j, {
            className: "StoreCtaButton",
            onClick: Qd,
            children: Rd(ed(!1))
          });
          break;
        case "owned":
          Id = (0, od.jsx)(Cd.f, {
            className: "StoreCtaButton",
            onClick: () => {
              sd.d.set({
                openEverythingMenuName: KJ.s.CUSTOMISATION
              })
            },
            children: (0, od.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, od.jsx)(Zd.e, {
                name: "shirt"
              }), " ", Ld("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Id = (0, od.jsx)(Cd.j, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, od.jsx)("span", {
              className: "StoreCtaLabel",
              children: Ld(NP[Jd])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Id = (0, od.jsx)(Cd.j, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Jd || null === pd,
            loading: "lookingUp" === Jd || Nd,
            onClick: Kd,
            analyticsClick: {
              id: "store.gift",
              value: kd
            },
            children: Rd(ed(!0), qW.e)
          });
          break;
        case "buy":
        case "recharge":
          Id = (0, od.jsx)(Cd.j, {
            className: "StoreCtaButton",
            loading: Nd,
            disabled: null === pd,
            onClick: Kd,
            analyticsClick: {
              id: "store.buy",
              value: kd
            },
            children: Rd(ed(!1))
          })
      }
      return (0, od.jsx)("div", {
        className: Wd()("StoreCta", {
          StoreCtaHighlight: gd,
          StoreCtaLabelFirst: null !== Od
        }),
        onClick: dd => {
          dd.stopPropagation(), "needsRecipient" === Jd && ld()
        },
        children: Id
      })
    }

    function PP() {
      const {
        t: dd
      } = (0, Pd.B)();
      return (0, od.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, od.jsxs)("li", {
          children: [(0, od.jsx)(Zd.e, {
            name: "check"
          }), (0, od.jsx)(pP, {
            text: dd("store:colourfulNames")
          })]
        }), (0, od.jsxs)("li", {
          children: [(0, od.jsx)(Zd.e, {
            name: "check"
          }), dd("store:perkCapes")]
        }), (0, od.jsxs)("li", {
          children: [(0, od.jsx)(Zd.e, {
            name: "check"
          }), dd("store:perkNoAdverts")]
        }), (0, od.jsxs)("li", {
          children: [(0, od.jsx)(Zd.e, {
            name: "check"
          }), dd("store:perkFriends", {
            count: (0, Hd.c)(["super"])
          })]
        })]
      })
    }

    function ZP(dd) {
      let {
        daysLeft: Jd,
        totalDays: kd,
        urgent: pd
      } = dd;
      const {
        t: Nd
      } = (0, Pd.B)(), Zd = kd > 0 ? Math.min(1, Math.max(.03, Jd / kd)) : 1;
      return (0, od.jsxs)("div", {
        className: Wd()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: pd
        }),
        children: [(0, od.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Jd ? Nd("store:oneDayLeft") : Nd("store:daysLeft", {
            days: Jd
          })
        }), (0, od.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, od.jsx)("i", {
            style: {
              width: 100 * Zd + "%"
            }
          })
        })]
      })
    }

    function gP(dd) {
      let {
        state: Jd,
        urgent: kd,
        daysLeft: pd,
        totalDays: Nd,
        recipientHasSuperRank: gd,
        busy: Cd,
        highlight: Kd,
        onOpen: ld,
        onAct: Qd,
        onNeedRecipient: Ld,
        onLogin: Od
      } = dd;
      const {
        t: ed
      } = (0, Pd.B)(), Rd = JP(Jd), {
        days: Id
      } = fd.k.product, Gd = ed("store:recipientHasSuperRank", {
        giftDays: Id
      }), vd = Vd("subscribed" === Jd);
      return (0, od.jsxs)("div", {
        className: Wd()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Rd,
          StoreSuperRankTileUrgent: "recharge" === Jd && kd,
          StoreSuperRankTileWithChip: gd,
          StoreSuperRankTileGiftReady: "gift" === Jd
        }),
        ...kP(ed("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: tW,
        onFocus: tW,
        onClick: ld,
        children: [(0, od.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${SW.i})`
          }
        }), Rd && (0, od.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, od.jsxs)("div", {
          className: "StoreTileContent",
          children: [gd && (0, od.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Gd,
            children: Gd
          }), (0, od.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, od.jsx)(Zd.e, {
              name: "bolt"
            }), " ", ed("homePage:superRank")]
          }), Rd && (0, od.jsx)("div", {
            className: "StoreTilePitch",
            children: ed("store:giftPitch", {
              days: Id
            })
          }), "recharge" === Jd && (0, od.jsx)(ZP, {
            daysLeft: pd,
            totalDays: Nd,
            urgent: kd
          }), vd && (0, od.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, od.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: vd
            })
          }), (0, od.jsx)(PP, {}), (0, od.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, od.jsx)(WP, {
              state: Jd,
              item: "superRank",
              price: fd.k.price,
              busy: Cd,
              highlight: Kd,
              onAct: Qd,
              onNeedRecipient: Ld,
              onLogin: Od
            }), "needsRecipient" === Jd && (0, od.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: ed("store:pickRecipientFirst")
            }), "recharge" === Jd && kd && (0, od.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === pd ? ed("store:endsInOneDay") : ed("store:endsInDays", {
                days: pd
              })
            })]
          })]
        })]
      })
    }
    const CP = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function KP(dd) {
      var Jd;
      let {
        pack: kd,
        state: Nd,
        busy: gd,
        onOpen: Cd,
        onAct: Kd,
        onNeedRecipient: ld,
        onLogin: Qd
      } = dd;
      const {
        t: Ld
      } = (0, Pd.B)(), Od = QW.d[kd], ed = vW.k[kd], Rd = (0, SW.r)(kd), Id = (0, pd.useRef)(null);
      (0, wW.j)(kd, Id);
      const Gd = JP(Nd),
        vd = null !== (Jd = Od.displayName) && void 0 !== Jd ? Jd : kd,
        xd = (0, HW.c)((() => {
          (0, zW.i)();
          const dd = (0, wW.g)(kd);
          void 0 !== dd && (0, rW.i)((0, wW.e)(dd))
        })),
        [qd] = (0, pd.useState)(mW.g);
      return (0, od.jsxs)("div", {
        className: Wd()("StoreTile StorePackTile", CP[Od.tier], {
          StorePackTileOwned: "owned" === Nd,
          StorePackTileRecipientOwns: "recipientOwns" === Nd,
          StoreTileGift: Gd
        }),
        ...kP(vd),
        ref: Id,
        "data-store-item": kd,
        onClick: Cd,
        onPointerMove: dd => {
          "mouse" !== dd.pointerType || 0 === dd.movementX && 0 === dd.movementY || qd || xd.start()
        },
        onPointerLeave: xd.cancel,
        children: [ed && (0, od.jsx)(ed, {}), (0, od.jsx)("div", {
          className: "StorePackCharacters",
          children: Rd.map((dd => (0, od.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,SW.m)(dd)})`
            }
          }, dd)))
        }), (0, od.jsx)("div", {
          className: "StoreTileScrim"
        }), Gd && (0, od.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, od.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, od.jsx)("div", {
            className: "StoreTileTitle",
            children: vd
          }), (0, od.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, od.jsx)(AW.b, {
              tier: Od.tier
            }), " \xb7 ", Ld("store:itemCount", {
              count: (0, TW.g)(kd)
            }), "owned" === Nd && (0, od.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, od.jsx)(Zd.e, {
                name: "check"
              }), " ", Ld("general:owned")]
            })]
          }), (0, od.jsx)(WP, {
            state: Nd,
            item: kd,
            price: (0, fd.h)(kd),
            busy: gd,
            onAct: Kd,
            onNeedRecipient: ld,
            onLogin: Qd
          })]
        })]
      })
    }
    var oP = kd(2927),
      lP = kd(1586),
      QP = kd(1478),
      LP = kd(3437);

    function OP() {
      return (0, od.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var eP = kd(1364),
      RP = kd(1598),
      IP = kd(9272);

    function GP(dd) {
      let {
        character: Jd,
        drawn: kd,
        onDrawn: Nd
      } = dd;
      const Pd = (0, pd.useRef)(null),
        Zd = (0, IP.f)(Jd);
      return (0, od.jsx)("div", {
        className: Wd()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: kd
        }),
        children: (0, od.jsx)(pd.Suspense, {
          fallback: null,
          children: (0, od.jsx)(zW.e, {
            ref: Pd,
            framing: "store",
            turntableFromYaw: kd ? Zd.yaw : null,
            onReady: () => {
              var dd, kd;
              null === (dd = Pd.current) || void 0 === dd || dd.setOrbit(Zd), null === (kd = Pd.current) || void 0 === kd || kd.setAllCosmetics(RP.c[Jd].cosmetics)
            },
            onDrawn: Nd
          })
        })
      })
    }
    const vP = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      xP = new Set(["wildSpirits"]);

    function qP(dd) {
      var Jd;
      let {
        tile: kd,
        design: Nd,
        canGoLive: gd,
        live: Cd,
        busy: Kd,
        highlight: ld,
        onLiveStart: Qd,
        onLiveEnd: Ld,
        onOpen: Od,
        onAct: ed,
        onNeedRecipient: Rd,
        onLogin: Id
      } = dd;
      const {
        t: Gd
      } = (0, Pd.B)(), {
        pack: vd,
        state: xd
      } = kd, qd = QW.d[vd], Bd = (0, QW.f)(vd), sd = (0, SW.o)(vd), ad = vW.k[sd], Md = xP.has(sd), {
        tier: Fd
      } = qd, Yd = "legendary" === Fd || "mythic" === Fd, md = (0, pd.useRef)(null);
      (0, eP.c)(md, "epic" === Fd || Yd || Md);
      const [bd, jd] = (0, pd.useState)(!1);
      return !Cd && bd && jd(!1), (0, od.jsxs)("div", {
        ref: md,
        className: Wd()("StoreCharacterCard", `StoreCharacterCard${Nd}`, vP[Fd], {
          StoreCharacterCardOwned: "owned" === xd || "recipientOwns" === xd,
          StoreCharacterCardGift: JP(xd),
          StoreCharacterCardItem: void 0 === Bd
        }),
        onPointerMove: dd => {
          "mouse" !== dd.pointerType || 0 === dd.movementX && 0 === dd.movementY || !gd || Cd || void 0 === Bd || Qd()
        },
        onPointerLeave: Ld,
        children: [(0, od.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: ad && (0, od.jsx)(ad, {
            simple: !0
          })
        }), Yd && (0, od.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, od.jsxs)(Sd.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, lP.c)({
            kind: "pack",
            pack: vd
          }),
          "data-store-item": vd,
          onClick: dd => {
            (0, QP.d)(dd) && (dd.preventDefault(), Od())
          },
          children: [(0, od.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, od.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, od.jsx)("div", {
              className: Wd()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: bd
              }),
              style: {
                backgroundImage: `url(${(0,SW.v)(vd)})`
              }
            }), Cd && void 0 !== Bd && (0, od.jsx)(GP, {
              character: Bd,
              drawn: bd,
              onDrawn: () => {
                jd(!0)
              }
            })]
          }), (0, od.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Jd = qd.displayName) && void 0 !== Jd ? Jd : vd
          }), (0, od.jsx)(AW.b, {
            tier: Fd,
            className: "StoreCharacterTier"
          })]
        }), (0, od.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Md && (0, od.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, od.jsx)(OP, {})
        }), "owned" === xd && (0, od.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Gd("general:owned"),
          "aria-label": Gd("general:owned"),
          children: (0, od.jsx)(Zd.e, {
            name: "check"
          })
        }), (0, od.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, od.jsx)(WP, {
            state: xd,
            item: vd,
            price: (0, fd.h)(vd),
            busy: Kd,
            highlight: ld,
            onAct: ed,
            onNeedRecipient: Rd,
            onLogin: Id
          })
        })]
      })
    }

    function BP(dd) {
      let {
        tiles: Jd,
        busy: kd,
        highlightItem: Nd,
        onOpen: Wd,
        onAct: Pd,
        onNeedRecipient: Zd,
        onLogin: gd
      } = dd;
      const Cd = (0, LP.m)("storeCharacterCardFoil"),
        Kd = (0, LP.m)("storeCharacterCardSpotlight"),
        ld = Cd ? "Foil" : Kd ? "Spotlight" : "Showcase",
        [Qd] = (0, pd.useState)(mW.g),
        [Ld, Od] = (0, pd.useState)(null);
      return (0, od.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Jd.map((dd => (0, od.jsx)(qP, {
          tile: dd,
          design: ld,
          canGoLive: !Qd,
          live: Ld === dd.pack,
          busy: kd,
          highlight: Nd === dd.pack,
          onLiveStart: () => {
            Od(dd.pack)
          },
          onLiveEnd: () => {
            Od((Jd => Jd === dd.pack ? null : Jd))
          },
          onOpen: () => {
            Wd(dd.pack)
          },
          onAct: () => {
            Pd(dd.pack)
          },
          onNeedRecipient: Zd,
          onLogin: () => {
            gd(dd.pack)
          }
        }, dd.pack)))
      })
    }
    var sP = kd(9276);

    function iP(dd) {
      let {
        title: Jd
      } = dd;
      return (0, od.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, od.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Jd
        })
      })
    }

    function aP(dd) {
      let {
        mountAtOnce: Jd,
        children: kd
      } = dd;
      const Nd = (0, pd.useRef)(null),
        [Wd, Pd] = (0, pd.useState)(Jd),
        Zd = (0, sP.b)();
      return (0, pd.useLayoutEffect)((() => {
        const dd = Nd.current;
        dd && dd.getBoundingClientRect().top < dd.parentElement.getBoundingClientRect().bottom && Pd(!0)
      }), []), Wd || Zd ? (0, od.jsx)(od.Fragment, {
        children: kd
      }) : (0, od.jsx)("div", {
        ref: Nd
      })
    }

    function MP(dd) {
      let {
        layout: Jd,
        mountAtOnce: kd,
        bundleGift: pd,
        superRankTotalDays: Nd,
        busy: Wd,
        highlightItem: Zd,
        onOpen: gd,
        onAct: Cd,
        onNeedRecipient: Kd,
        onLogin: ld
      } = dd;
      const {
        t: Qd
      } = (0, Pd.B)(), Ld = Jd.packs.filter((dd => void 0 === (0, QW.f)(dd.pack) && !(0, QW.m)(dd.pack))), Od = Jd.packs.filter((dd => void 0 !== (0, QW.f)(dd.pack))), ed = Jd.packs.filter((dd => (0, QW.m)(dd.pack)));
      return (0, od.jsxs)(od.Fragment, {
        children: [(0, od.jsx)(oP.d, {
          className: "StoreSuperGems",
          gift: pd,
          highlightSku: Zd
        }), (0, od.jsx)(iP, {
          title: Qd("store:rank")
        }), (0, od.jsx)(gP, {
          state: Jd.superRank.state,
          urgent: Jd.superRank.urgent,
          daysLeft: Jd.superRankDaysLeft,
          totalDays: Nd,
          recipientHasSuperRank: Jd.recipientHasSuperRank,
          busy: Wd,
          highlight: "superRank" === Zd,
          onOpen: () => {
            gd("superRank")
          },
          onAct: () => {
            Cd("superRank")
          },
          onNeedRecipient: Kd,
          onLogin: () => {
            ld("superRank")
          }
        }), (0, od.jsxs)(aP, {
          mountAtOnce: kd,
          children: [(0, od.jsx)(iP, {
            title: Qd("store:bundles")
          }), (0, od.jsx)("div", {
            className: "StorePackGrid",
            children: Ld.map((dd => (0, od.jsx)(KP, {
              pack: dd.pack,
              state: dd.state,
              busy: Wd,
              onOpen: () => {
                gd(dd.pack)
              },
              onAct: () => {
                Cd(dd.pack)
              },
              onNeedRecipient: Kd,
              onLogin: () => {
                ld(dd.pack)
              }
            }, dd.pack)))
          }), (0, od.jsxs)(aP, {
            mountAtOnce: kd,
            children: [(0, od.jsx)(iP, {
              title: Qd("store:characters")
            }), (0, od.jsx)(BP, {
              tiles: Od,
              busy: Wd,
              highlightItem: Zd,
              onOpen: gd,
              onAct: Cd,
              onNeedRecipient: Kd,
              onLogin: ld
            }), ed.length > 0 && (0, od.jsxs)(od.Fragment, {
              children: [(0, od.jsx)(iP, {
                title: Qd("store:premiumItems")
              }), (0, od.jsx)(BP, {
                tiles: ed,
                busy: Wd,
                highlightItem: Zd,
                onOpen: gd,
                onAct: Cd,
                onNeedRecipient: Kd,
                onLogin: ld
              })]
            })]
          })]
        })]
      })
    }

    function FP(dd) {
      let {
        state: Jd,
        mode: kd,
        giftName: pd,
        busy: Nd,
        highlight: Wd,
        purchaseError: Zd,
        onBack: gd,
        onChooseRecipient: Kd,
        onAct: ld,
        onLogin: Qd
      } = dd;
      const {
        t: Ld
      } = (0, Pd.B)(), Od = Vd("gift" !== kd);
      return (0, od.jsx)(VW, {
        onBack: gd,
        recipient: "gift" === kd && (0, od.jsxs)(od.Fragment, {
          children: [pd && (0, od.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Ld("store:giftFor", {
              name: pd
            }),
            children: [qW.e, " ", Ld("store:giftFor", {
              name: pd
            })]
          }), !pd && (0, od.jsxs)("div", {
            ...(0, Cd.P)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Kd,
            children: [qW.e, " ", Ld("store:chooseRecipient")]
          })]
        }),
        cta: (0, od.jsx)(WP, {
          state: Jd,
          item: "superRank",
          price: fd.k.price,
          busy: Nd,
          highlight: Wd,
          onAct: ld,
          onNeedRecipient: Kd,
          onLogin: Qd
        }),
        afterCta: (0, od.jsxs)(od.Fragment, {
          children: [Od && (0, od.jsx)("span", {
            className: "StoreTileNote",
            children: Od
          }), Zd && (0, od.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Ld(Zd)
          })]
        })
      })
    }
    var YP = kd(141);
    const mP = YP.k("kind", [YP.A({
      kind: YP.u("refused"),
      heldTierId: YP.R(),
      until: YP.y()
    }), YP.A({
      kind: YP.u("refund"),
      tierId: YP.R(),
      refundedMs: YP.y(),
      forfeitedMs: YP.y(),
      premiumCurrency: YP.y()
    }), YP.A({
      kind: YP.u("none")
    })]);
    async function bP(dd) {
      const Jd = await (0, Yd.postJsonWithMetricsCookiesAndJsonResponse)(`${md.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: dd
      }, {
        retries: 1
      });
      return mP.parse(Jd)
    }
    var SP = kd(2897),
      jP = kd(2935);

    function XP(dd, Jd) {
      const kd = Math.max(1, Math.round(Jd / yd.i));
      return [1 === kd ? `${dd}OneDay` : dd, {
        days: kd.toLocaleString()
      }]
    }

    function fP() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, Td.purchasesAllowed)() ? (0, od.jsx)(nP, {}) : null
    }

    function nP() {
      const {
        t: dd
      } = (0, Pd.B)(), {
        userContext: Jd
      } = (0, Ld.c)(), {
        purchaseUnderWay: kd,
        notice: Nd,
        subscribe: Wd
      } = (0, SP.c)(), [Zd, gd] = (0, pd.useState)(null), [Kd, ld] = (0, pd.useState)(0), [Qd, Od] = (0, pd.useState)(!1), ed = (0, pd.useRef)(!0), Rd = Jd !== Yd.NULL_USER_CONTEXT, Id = null !== Zd && Zd.loadedFor === Jd ? Zd.offer : null, Gd = null === Nd || void 0 === Nd ? void 0 : Nd.pendingIntentId, vd = (0, pd.useRef)(Gd);

      function xd() {
        ld((dd => dd + 1))
      }
      async function qd(dd) {
        Od(!1), await Wd(dd), ed.current && xd()
      }
      if ((0, pd.useEffect)((() => (ed.current = !0, () => {
          ed.current = !1
        })), []), (0, pd.useEffect)((() => {
          void 0 !== vd.current && void 0 === Gd && xd(), vd.current = Gd
        }), [Gd]), (0, pd.useEffect)((() => {
          if (!Rd) return;
          let dd = !1;
          return Od(!1), async function() {
            const {
              offering: dd
            } = await (0, gJ.f)().getOfferings("superRankPage"), Jd = null === dd || void 0 === dd ? void 0 : dd.packages.find((dd => null !== dd.price));
            return void 0 === Jd ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Jd,
              preview: await bP(Jd.productId)
            }
          }().catch((dd => (console.error("Billing: loading the Super Rank subscription or its preview failed:", dd), {
            kind: "loadFailed"
          }))).then((kd => {
            dd || gd((dd => "loadFailed" === kd.kind && (null === dd || void 0 === dd ? void 0 : dd.loadedFor) === Jd ? dd : {
              loadedFor: Jd,
              offer: kd
            }))
          })), () => {
            dd = !0
          }
        }), [Jd, Rd, Kd]), null === Id) return null;
      if ("loaded" !== Id.kind) return (0, od.jsx)(jP.j, {
        notice: {
          kind: "error",
          key: "unavailable" === Id.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Bd,
        preview: sd
      } = Id;
      if ("refused" === sd.kind) return (0, od.jsx)(jP.j, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(sd.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const ad = (0, oP.h)(Bd.price);
      if (Qd && "refund" === sd.kind) {
        const {
          refundedMs: Jd,
          forfeitedMs: pd,
          premiumCurrency: Nd
        } = sd, Wd = pd + (0 === Nd ? Jd : 0), [Pd, Zd] = XP("payments:subscribeRefundsGemRank", Jd), [gd, Kd] = XP("payments:subscribeForfeitsGemRank", Wd);
        return (0, od.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, od.jsx)("div", {
            children: dd("payments:subscribeEndsGemRank")
          }), Nd > 0 && (0, od.jsx)("div", {
            children: dd(Pd, {
              ...Zd,
              amount: Nd.toLocaleString()
            })
          }), Wd > 0 && (0, od.jsx)("div", {
            children: dd(gd, Kd)
          }), (0, od.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, od.jsx)(Cd.f, {
              onClick: () => {
                Od(!1)
              },
              children: dd("general:cancel")
            }), (0, od.jsx)(Cd.j, {
              onClick: () => {
                qd(Bd)
              },
              loading: kd,
              children: dd("payments:subscribeContinue", {
                price: ad
              })
            })]
          })]
        })
      }
      return (0, od.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, od.jsx)(jP.j, {
          notice: Nd,
          className: "SmallTextBold"
        }), (0, od.jsx)(jP.e, {
          className: "SmallTextBold"
        }), (0, od.jsx)(Cd.j, {
          onClick: () => {
            "refund" === sd.kind ? Od(!0) : qd(Bd)
          },
          disabled: void 0 !== Gd,
          loading: kd,
          children: dd("payments:subscribeToSuperRank", {
            price: ad
          })
        })]
      })
    }
    const UP = {
      kind: "board"
    };
    let yP = !1;

    function DP(dd) {
      return "found" === dd.status || "error" === dd.status && "store:giftRecipientLookupFailed" === dd.error ? dd.name : null
    }(0, Dd.y)(LW.prefetchBillingOfferings);
    const TP = (0, pd.memo)((function(dd) {
      var Jd;
      let {
        show: Nd
      } = dd;
      const {
        t: Zd
      } = (0, Pd.B)(), {
        userContext: gd
      } = (0, Ld.c)(), Cd = gd !== Yd.NULL_USER_CONTEXT, Kd = aW(gd), [ld, Qd] = (0, ed.b)(), {
        page: Od,
        urlMode: Rd,
        goTo: Id
      } = (0, MW.g)(), Gd = function(dd) {
        return "superRank" === dd.kind ? "superRank" : "pack" === dd.kind ? dd.pack : null
      }(Od), {
        openEverythingMenuName: vd,
        gameState: xd
      } = (0, sd.j)(["openEverythingMenuName", "gameState"]), qd = null !== vd;
      ! function(dd, Jd) {
        const [Nd] = (0, pd.useState)(mW.g), [Wd, Pd] = (0, pd.useState)(!1);
        Nd && Jd && !Wd && Pd(!0);
        const Zd = (0, Zp.m)(),
          gd = Nd && Wd && dd && !Zd;
        (0, pd.useEffect)((() => {
          if (!gd) return;
          let dd = null,
            Jd = null,
            pd = null;
          const Nd = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, gJ.f)().purchaseUnderWay,
            Wd = () => {
              var kd;
              null === (kd = pd) || void 0 === kd || kd(), pd = null, null !== dd && (clearTimeout(dd), dd = null), null !== Jd && (clearTimeout(Jd), Jd = null)
            },
            Pd = () => {
              (0, FW.o)(!1), (0, FW.m)(!1), Wd(), dd = setTimeout((() => {
                dd = null, pd = (0, YW.c)((() => {
                  pd = null, Nd() ? Pd() : ((0, FW.o)(!0), Jd = setTimeout((() => {
                    Jd = null, pd = (0, YW.c)((() => {
                      pd = null, Nd() ? Pd() : (0, FW.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => kd(4520))).then((dd => {
                    dd.startBackgroundGameSetup()
                  }), (dd => {
                    console.warn("Background game setup: its chunk failed to load", dd)
                  })))
                }))
              }), 2e3)
            };
          for (const kd of bW) window.addEventListener(kd, Pd, {
            capture: !0,
            passive: !0
          });
          return Pd(), () => {
            for (const dd of bW) window.removeEventListener(dd, Pd, {
              capture: !0
            });
            Wd(), (0, FW.o)(!1), (0, FW.m)(!1)
          }
        }), [gd])
      }(Nd && qd, "pack" === Od.kind);
      const Bd = "landingPage" === xd;
      (0, pd.useEffect)((() => {
        qd && (0, LW.prefetchBillingOfferings)()
      }), [qd]), (0, pd.useEffect)((() => {
        qd && !Nd && Bd && (0, SW.w)()
      }), [qd, Nd, Bd]);
      const [ad, Md] = (0, pd.useState)(0), [Fd, md] = (0, pd.useState)(null), [bd, Sd] = (0, pd.useState)(null), [jd, Xd] = (0, pd.useState)(null), [nd, Ud] = (0, pd.useState)(null), yd = (0, pd.useRef)(null), Ed = (0, pd.useRef)(null), cd = (0, pd.useRef)(null), hd = (0, pd.useRef)(!1), rd = (0, Dd.F)(), ud = (0, pd.useRef)(0), td = (0, pd.useRef)(!1);

      function Vd() {
        Md((dd => dd + 1))
      }(0, pd.useEffect)((() => {
        if (Nd) {
          if (yP = !0, (0, Dd.n)(), rd && rd.seq !== ud.current) {
            var dd;
            ud.current = rd.seq, "loginResume" !== rd.source && (0, Dd.C)();
            const Jd = (0, Dd.d)(rd);
            Rd || Id(Jd), Ud(null !== (dd = rd.highlight) && void 0 !== dd ? dd : null), Sd(null), "gift" === rd.mode && rd.giftRecipientName ? Kd.choose(rd.giftRecipientName, "prefilled") : "current" !== rd.mode && Kd.clear(), "gift" !== rd.mode || rd.giftRecipientName || Vd(), (0, Ad.reportAnalyticsClick)({
              id: "store.open",
              value: rd.source
            })
          } else td.current || (0, Ad.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          td.current = !0
        } else td.current = !1
      }), [Nd, rd]), (0, pd.useEffect)((() => {
        if (!nd) return;
        const dd = setTimeout((() => {
          Ud(null)
        }), 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [nd]), (0, pd.useLayoutEffect)((() => {
        const dd = yd.current;
        if (!Nd || !dd) return Ed.current = null, void(cd.current = null);
        var Jd;
        if (Gd) Ed.current = Gd, null === (Jd = dd.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Jd || Jd.focus();
        else if (Ed.current) {
          const Jd = cd.current;
          null !== Jd && (dd.scrollTop = Jd);
          const kd = dd.querySelector(`[data-store-item="${Ed.current}"]`);
          if (kd) {
            const pd = kd.getBoundingClientRect(),
              Nd = dd.getBoundingClientRect();
            kd.focus({
              preventScroll: null !== Jd && pd.bottom > Nd.top && pd.top < Nd.bottom
            })
          }
          Ed.current = null
        }
      }), [Gd, Nd]), (0, pd.useEffect)((() => {
        Sd(null)
      }), [Kd.query]), (0, pd.useEffect)((() => {
        if (!jd) return;
        const dd = setTimeout((() => {
          Xd(null)
        }), 8e3);
        return () => {
          clearTimeout(dd)
        }
      }), [jd]);
      const zd = gd.superRankInfo,
        Hd = gd.isLoggedIn() || (0, Td.guestsMayBuy)(),
        wd = gd.getOwnedCosmeticPacks(),
        dJ = (0, qW.l)(Kd.query),
        JJ = (0, qW.g)({
          mode: dJ,
          loggedIn: Cd ? Hd : null,
          superRankInfo: zd,
          now: Date.now(),
          ownedPacks: wd,
          packs: QW.r,
          recipient: Kd.recipient
        });
      (0, pd.useEffect)((() => {
        if (!Hd || !Nd) return;
        const dd = (0, Dd.C)(),
          Jd = dd && (0, qW.k)(dd, QW.r);
        dd && Jd && ((0, Ad.reportAnalyticsClick)({
          id: "store.login_resume",
          value: dd.item
        }), (0, Dd.q)(Jd))
      }), [Hd, Nd]);
      const kJ = (0, qW.o)({
        superRankDaysLeft: JJ.superRankDaysLeft,
        openedThisSession: yP || Nd,
        seenNewItems: (0, Dd.j)()
      });
      if ((0, pd.useEffect)((() => {
          (0, Dd.B)(kJ)
        }), [kJ]), !Nd || !(0, Td.purchasesAllowed)()) return null;
      const pJ = Qd > ld && ld <= 700,
        NJ = !pJ && Qd <= 420,
        WJ = "gift" === dJ ? DP(Kd.recipient) : null,
        PJ = null !== Fd;

      function ZJ(dd) {
        (0, eW.d)(dd, "gift" === dJ ? Kd.query.trim() : null)
      }

      function CJ(dd, Jd) {
        (0, Ad.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Jd?"gift":"self"}:${dd}`
        }), Jd && (Kd.recordGift(Jd.name, dd), KJ(Jd))
      }

      function KJ(dd) {
        ! function(dd) {
          try {
            uJ.i.setItem(BW, (0, qW.t)(iW(), dd))
          } catch {}
        }({
          name: dd.name,
          cosmetics: dd.cosmetics
        }), Id(UP), Xd((Jd => {
          var kd;
          return {
            name: dd.name,
            seq: (null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.seq) && void 0 !== kd ? kd : 0) + 1
          }
        }))
      }
      async function oJ(dd) {
        var Jd, kd;
        if (hd.current) return;
        if (!Hd) return void ZJ(dd);
        Sd(null), Ud(null);
        const pd = "gift" === dJ ? {
          name: DP(Kd.recipient),
          cosmetics: Kd.recipientCosmetics
        } : null;
        if (pd && !pd.name) return void Vd();
        const Nd = "superRank" === dd ? fd.k.id : (0, fd.e)(dd);
        hd.current = !0;
        const Wd = await (0, xW.c)(Nd, null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.name) && void 0 !== Jd ? Jd : null);
        if (hd.current = !1, !Wd) return;
        md(dd);
        const Pd = await RW.d.purchase(Nd, null !== (kd = null === pd || void 0 === pd ? void 0 : pd.name) && void 0 !== kd ? kd : null);
        md(null), Pd ? Sd(Pd) : (CJ(dd, pd), pd || (await (0, IW.flushClientAnalyticsEvents)(), (0, OW.refreshWithoutConfirmation)("superRank" === dd ? "/super-rank-welcome" : `/pack-welcome/${dd}`)))
      }
      const lJ = Wd()("Store", {
        StoreGift: "gift" === dJ,
        StorePortrait: pJ,
        StoreCompact: NJ
      });
      if ("pack" === Od.kind) {
        const dd = Od.pack,
          Jd = JJ.packs.find((Jd => Jd.pack === dd));
        return (0, od.jsx)("div", {
          ref: yd,
          className: "CosmeticShopContainer",
          children: (0, od.jsx)(vW.h, {
            pack: dd,
            onBack: () => {
              Id(UP)
            },
            onPurchased: Jd => {
              CJ(dd, Jd ? {
                name: Jd,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === dJ && WJ && Jd && (0, od.jsxs)(od.Fragment, {
              children: [(0, od.jsx)(WP, {
                state: Jd.state,
                item: dd,
                price: (QJ = dd, "superRank" === QJ ? fd.k.price : (0, fd.h)(QJ)),
                busy: PJ,
                onAct: () => {
                  oJ(dd)
                },
                onNeedRecipient: () => {
                  Id(UP), Vd()
                },
                onLogin: () => {
                  ZJ(dd)
                },
                highlight: nd === dd
              }), bd && (0, od.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Zd(bd)
              })]
            }),
            ownedPacks: wd,
            startAsGift: "gift" === dJ,
            initialGiftRecipient: "gift" === dJ ? null !== WJ && void 0 !== WJ ? WJ : Kd.query.trim() : "",
            highlightCta: nd === dd
          }, dd)
        })
      }
      var QJ;
      return "superRank" === Od.kind ? (0, od.jsx)("div", {
        ref: yd,
        className: Wd()(lJ, "StoreDetailView"),
        children: (0, od.jsx)(FP, {
          state: JJ.superRank.state,
          mode: dJ,
          giftName: WJ,
          busy: PJ,
          highlight: "superRank" === nd,
          purchaseError: bd,
          onBack: () => {
            Id(UP)
          },
          onChooseRecipient: () => {
            Id(UP), Vd()
          },
          onAct: () => {
            oJ("superRank")
          },
          onLogin: () => {
            ZJ("superRank")
          }
        })
      }) : (0, od.jsxs)("div", {
        ref: yd,
        className: lJ,
        onScroll: dd => {
          cd.current = dd.currentTarget.scrollTop
        },
        children: [(0, od.jsx)("div", {
          className: "StoreTopRow",
          children: (0, od.jsx)(DW, {
            selfName: Cd ? gd.getPlayerName() : "",
            giftRecipient: Kd,
            suggestionsVersion: null !== (Jd = null === jd || void 0 === jd ? void 0 : jd.seq) && void 0 !== Jd ? Jd : 0,
            pulseSignal: ad,
            disabled: PJ || !Cd
          })
        }), jd && (0, od.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Xd(null)
          },
          children: [(0, od.jsx)(GW.e, {
            showSignal: jd.seq
          }), qW.e, " ", Zd("store:giftSent", {
            name: jd.name
          })]
        }, jd.seq), !jd && bd && (0, od.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Zd(bd)
        }), (0, od.jsx)(MP, {
          layout: JJ,
          mountAtOnce: null !== Ed.current,
          bundleGift: "gift" === dJ ? {
            recipientName: WJ,
            lookingUp: "pending" === Kd.recipient.status,
            busy: PJ,
            onNeedRecipient: Vd,
            onSent: dd => {
              (0, Ad.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), KJ({
                name: dd,
                cosmetics: Kd.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, qW.p)(zd),
          busy: PJ,
          highlightItem: nd,
          onOpen: function(dd) {
            (0, Ad.reportAnalyticsClick)({
              id: "store.item_open",
              value: dd
            }), Id((0, Dd.h)(dd))
          },
          onAct: oJ,
          onNeedRecipient: Vd,
          onLogin: ZJ
        }), "gift" !== dJ && (0, od.jsx)(fP, {})]
      })
    }));
    var EP = kd(2558),
      cP = kd(8754),
      hP = kd(8563),
      rP = kd(2610),
      uP = kd(2468),
      tP = kd(2516),
      VP = kd(2525),
      zP = kd(2530),
      HP = kd(2604),
      wP = kd(2589),
      AP = kd(2306),
      dZ = kd(2324),
      JZ = kd(2319),
      kZ = kd(2013),
      pZ = kd(2538),
      NZ = kd(2328);

    function WZ(dd) {
      let {
        show: Jd
      } = dd;
      return Jd ? (0, od.jsx)(PZ, {}) : null
    }

    function PZ() {
      const {
        t: dd
      } = (0, Pd.B)(), {
        followsLeader: Jd
      } = (0, uP.d)(), {
        loading: kd,
        friends: Nd,
        requests: gd,
        invites: Kd
      } = (0, cd.j)(), {
        userContext: ld
      } = (0, Ld.c)(), [Qd, Od] = (0, pd.useState)(NZ.k);
      (0, pd.useEffect)((() => {
        (0, NZ.d)()
      }), []);
      const ed = gd.map((dd => dd.name)),
        {
          state: Rd,
          recentRequesters: Id
        } = (0, wP.o)(),
        Gd = new Map([...("loaded" === Rd.status ? Rd.recentPlayers : []).map((dd => [dd.preview.name, dd])), ...Id.map((dd => [dd.name, dd]))]),
        vd = (0, pd.useRef)(null),
        [Bd, sd] = (0, pd.useState)(""),
        [ad, Md] = (0, pd.useState)("Enter"),
        [Fd, Yd] = (0, pd.useState)(null);

      function md() {
        Bd && (Md("Loading"), (0, JZ.i)(Bd, "social_menu").then((dd => {
          if (vd.current) switch (dd.kind) {
            case "sent":
              Md("Success");
              break;
            case "becameFriends":
              Md("BecameFriends");
              break;
            case "failed":
              Yd(dd.message), Md("Error")
          }
        })))
      }
      return (0, pd.useEffect)((() => {
        if ("Enter" === ad || "Loading" === ad) return;
        const dd = setTimeout((() => {
          vd.current.value = "", sd(""), Md("Enter")
        }), "Success" === ad ? 1e3 : 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [ad]), (0, od.jsx)("div", {
        className: "SocialMenu",
        children: (0, od.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, od.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, od.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, od.jsx)(zP.c, {
                label: dd("socialBar:addFriend")
              }), (0, od.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, od.jsxs)("div", {
                  className: Wd()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${ad}`]: !0
                  }),
                  children: ["Loading" === ad && (0, od.jsx)(qd.b, {}), "Success" === ad && (0, od.jsx)(Zd.e, {
                    name: "check"
                  }), "BecameFriends" === ad && (0, od.jsx)(od.Fragment, {
                    children: dd("socialBar:nowFriends", {
                      playerName: Bd
                    })
                  }), "Error" === ad && Fd && (0, od.jsx)(od.Fragment, {
                    children: dd(Fd.translationKey, Fd.params)
                  })]
                }), (0, od.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, od.jsx)(xd.e, {
                    className: "PlayerSearchInput",
                    placeholderText: dd("socialBar:enterPlayerName"),
                    domRef: vd,
                    onValueChange: dd => {
                      sd((0, jd.t)(dd)), vd.current.value = (0, jd.t)(dd)
                    },
                    onEnter: () => {
                      Bd && (0, Ad.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), md()
                    }
                  }), (0, od.jsxs)(Cd.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      md()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, od.jsx)(Zd.e, {
                      name: "user-plus"
                    }), " ", dd("socialBar:sendRequest")]
                  })]
                })]
              }), (0, od.jsx)(pZ.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Kd.length > 0 && (0, od.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, od.jsx)(zP.c, {
                label: dd("socialBar:invites"),
                meta: Kd.length
              }), Kd.map((Jd => (0, od.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, od.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, od.jsx)(AP.b, {
                    invite: Jd
                  })
                }), (0, od.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, od.jsx)(AP.c, {
                    invite: Jd
                  })
                }), (0, od.jsx)(Cd.j, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, dZ.f)(Jd)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Jd.destination.kind}`
                  },
                  children: dd("general:join")
                }), (0, od.jsx)(zd.f, {
                  tooltipInner: (0, od.jsx)(od.Fragment, {
                    children: dd("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, od.jsx)(Cd.f, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Qd || void 0 === Qd ? void 0 : Qd.kind) && Qd.inviteId === Jd.id,
                    onClick: () => {
                      cd.c.declineInvite(Jd.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Jd.destination.kind}`
                    },
                    children: (0, od.jsx)(Zd.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, Jd.id)))]
            }), (0, od.jsxs)("div", {
              className: Wd()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !kd && 0 === gd.length
              }),
              children: [(0, od.jsx)(zP.c, {
                label: (0, od.jsxs)(od.Fragment, {
                  children: [(0, od.jsx)(Zd.e, {
                    name: kZ.f
                  }), " ", dd("socialBar:requests")]
                }),
                meta: (0, od.jsxs)(od.Fragment, {
                  children: [gd.length, gd.length === Hd.l && (0, od.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: dd("socialBar:limitReached")
                  })]
                })
              }), kd && (0, od.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, od.jsx)(qd.b, {})
              }), !kd && 0 === gd.length && (0, od.jsx)("div", {
                className: "SocialMenuEmpty",
                children: dd("socialBar:noFriendRequests")
              }), !kd && gd.length > 0 && (0, od.jsx)("div", {
                className: "PlayerRows",
                children: (0, od.jsx)(RN.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [gd],
                  children: gd.map(((Jd, kd) => {
                    const pd = Gd.get(Jd.name);
                    return (0, od.jsxs)(VP.d, {
                      playerSocialPreview: Jd,
                      zIndex: gd.length - kd,
                      padDefaultFocus: (0, NZ.h)(Qd, Jd.name, kd),
                      status: pd && (0, od.jsx)(HP.d, {
                        gameNameWithVariation: pd.gameNameWithVariation,
                        isPrivateLobby: pd.isPrivateLobby
                      }),
                      children: [(0, od.jsx)(zd.f, {
                        tooltipInner: (0, od.jsx)(od.Fragment, {
                          children: dd("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, od.jsx)(Cd.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Od((0, NZ.e)(ed, kd)), (0, JZ.f)(Jd.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, od.jsx)(Zd.e, {
                            name: "check"
                          })
                        })
                      }), (0, od.jsx)(zd.f, {
                        tooltipInner: (0, od.jsx)(od.Fragment, {
                          children: dd("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, od.jsx)(Cd.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Od((0, NZ.e)(ed, kd)), (0, JZ.f)(Jd.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, od.jsx)(Zd.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Jd.name}_${Jd.isError}`)
                  }))
                })
              })]
            }), (0, od.jsx)(HP.h, {})]
          }), (0, od.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, od.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, od.jsx)(zP.c, {
                label: dd("socialBar:party")
              }), (0, od.jsx)(tP.e, {})]
            }), (0, od.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, od.jsx)(zP.c, {
                label: (0, od.jsxs)(od.Fragment, {
                  children: [(0, od.jsx)(Zd.e, {
                    name: kZ.c
                  }), " ", dd("socialBar:friends")]
                }),
                meta: (0, od.jsxs)(od.Fragment, {
                  children: [Nd.length, Nd.length >= (0, Hd.c)(ld.getPlayerRanks()) && (0, od.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: dd("socialBar:limitReached")
                  })]
                })
              }), kd && (0, od.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, od.jsx)(qd.b, {})
              }), !kd && 0 === Nd.length && (0, od.jsx)("div", {
                className: "SocialMenuEmpty",
                children: dd("socialBar:noFriends")
              }), !kd && Nd.length > 0 && (0, od.jsx)("div", {
                className: "PlayerRows",
                children: (0, od.jsx)(RN.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Nd],
                  children: Nd.map(((dd, kd) => (0, od.jsx)(VP.d, {
                    playerSocialPreview: dd,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: dd => {
                      cd.c.removeFriendFromState(dd)
                    },
                    zIndex: Nd.length - kd,
                    children: (0, od.jsx)(VP.b, {
                      friend: dd,
                      followsLeader: Jd,
                      analyticsSurface: "social_menu"
                    })
                  }, `${dd.name}_${dd.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var ZZ = kd(2451);
    const gZ = dd => {
        let {
          action: Jd,
          padAction: kd
        } = dd;
        const {
          isTouchScreen: pd
        } = (0, sd.j)(["isTouchScreen"]), Nd = (0, Zp.m)();
        return pd && !Nd ? null : (0, od.jsx)(dp.c, {
          className: "EverythingMenuTabKey",
          noaAction: Jd,
          padHidesKey: !0,
          padMenuShortcut: kd
        })
      },
      CZ = (0, pd.memo)((function() {
        const {
          t: dd
        } = (0, Pd.B)(), {
          gameState: Jd,
          openEverythingMenuName: kd,
          initSdkSelectorFinished: Nd,
          crosshairGameView: Zd
        } = (0, sd.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: gd
        } = (0, Ld.c)(), Kd = (0, Td.purchasesAllowed)(), ld = (0, Dd.J)(), Qd = (dd, Jd) => (0, od.jsx)(gZ, {
          action: dd,
          padAction: Jd
        }), [Od, ed] = (0, pd.useState)(null), Id = (0, pd.useRef)(null), Gd = {
          ..."inGame" === Jd ? {} : (0, Cd.P)({
            focusOnClick: !1
          }),
          ...Rp.f
        }, vd = dd => {
          const Jd = (0, Ip.c)((Jd => {
            (0, Cd.M)(Jd.currentTarget), sd.d.set({
              openEverythingMenuName: dd
            })
          }), "pointerup");
          return {
            ...Gd,
            onPointerDown: dd => {
              Gd.onPointerDown(dd), Jd.onPointerDown(dd)
            },
            onPointerUp: dd => {
              Gd.onPointerUp(dd), Jd.onPointerUp(dd)
            },
            onClick: Jd.onClick
          }
        }, xd = null !== kd, qd = kd !== KJ.s.COSMETIC_SHOP && !Zd;
        async function Bd() {
          await async function() {
            if (!Od) return;
            await Od(), ed(null)
          }(), sd.d.set({
            openEverythingMenuName: null
          })
        }
        const ad = (0, pd.useRef)(null),
          Md = (0, pd.useCallback)((() => null !== ad.current && (0, hP.g)(ad.current)), []);

        function Yd() {
          Md() || Bd()
        }(0, pd.useEffect)((() => (0, ZW.r)(Md)), [Md]);
        const md = (0, pd.useMemo)((() => "inGame" === Jd ? {
          text: dd("settingsMenu:exitGame"),
          onClick: () => {
            (0, cP.d)()
          }
        } : (0, Fd.e)() ? {
          text: dd("settingsMenu:exitGame"),
          onClick: () => {
            PJ.i.discordActivity().then((dd => {
              dd.exit("User exited the game")
            }))
          }
        } : null), [Jd, dd]);
        const bd = (0, od.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Yd,
          children: (0, od.jsx)(Cd.i, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, od.jsx)(Gp.b, {
          showing: xd,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: kd === KJ.s.SHOP,
          doGameplayStartStopOnShow: "inGame" === Jd,
          children: (0, od.jsx)(xp.b, {
            className: "EverythingMenuContainer",
            show: xd && !Zd,
            children: (0, od.jsx)(vp.e, {
              close: Yd,
              togglePointerLock: !1,
              children: (0, od.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, ZW.k)(kd) && (0, od.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, od.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [md && (0, od.jsx)(Cd.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        md.onClick()
                      },
                      children: md.text
                    }), xd && Kd && (0, od.jsx)("div", {
                      ...Gd,
                      className: "EverythingMenuWallet",
                      title: dd("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Dd.q)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, od.jsx)(EP.f, {})
                    })]
                  }), (0, od.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, od.jsxs)("div", {
                      ...vd(KJ.s.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": kd === KJ.s.SETTINGS ? "true" : void 0,
                      className: Wd()("EverythingMenuTab", {
                        EverythingMenuTabActive: kd === KJ.s.SETTINGS
                      }),
                      children: [dd("general:settings"), Qd("OpenSettings", "pause")]
                    }), (0, od.jsxs)("div", {
                      ...vd(KJ.s.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": kd === KJ.s.CUSTOMISATION ? "true" : void 0,
                      className: Wd()("EverythingMenuTab", {
                        EverythingMenuTabActive: kd === KJ.s.CUSTOMISATION
                      }),
                      children: [dd("general:player"), Qd("OpenCharacterCustomization")]
                    }), Rd.featureFlags.useSocialFeatures && (0, od.jsxs)("div", {
                      ...vd(KJ.s.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": kd === KJ.s.SOCIAL ? "true" : void 0,
                      className: Wd()("EverythingMenuTab", {
                        EverythingMenuTabActive: kd === KJ.s.SOCIAL
                      }),
                      ...(0, Ad.b)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, kd === KJ.s.SOCIAL),
                      children: [dd("socialBar:social"), (0, od.jsx)(ZZ.b, {})]
                    }), Kd && (0, od.jsxs)("div", {
                      ...vd(KJ.s.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": kd === KJ.s.COSMETIC_SHOP ? "true" : void 0,
                      className: Wd()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: kd === KJ.s.COSMETIC_SHOP
                      }),
                      children: [(0, od.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: dd("store:title")
                      }), "new" === ld && (0, od.jsx)(OP, {}), "dot" === ld && (0, od.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Jd && (0, od.jsxs)("div", {
                      ...vd(KJ.s.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": kd === KJ.s.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Wd()("EverythingMenuTab", {
                        EverythingMenuTabActive: kd === KJ.s.LOBBY_LEADERBOARD
                      }),
                      children: [dd("general:lobby"), Qd("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, od.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: bd
                  })]
                }), (0, ZW.k)(kd) && bd, (0, od.jsxs)("div", {
                  ref: ad,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Jd ? "0.85" : "1"
                  },
                  children: [(0, od.jsx)(lp, {
                    show: kd === KJ.s.SETTINGS,
                    setBeforeResumeCallback: ed
                  }), (0, od.jsx)(ep, {
                    show: kd === KJ.s.CUSTOMISATION
                  }), (0, od.jsx)(pd.Suspense, {
                    fallback: null,
                    children: (0, od.jsx)(wN, {
                      show: kd === KJ.s.SHOP
                    })
                  }), (0, od.jsx)(oW, {
                    show: kd === KJ.s.LOBBY_LEADERBOARD
                  }), (0, od.jsx)(TP, {
                    show: kd === KJ.s.COSMETIC_SHOP
                  }), (0, od.jsx)(WZ, {
                    show: kd === KJ.s.SOCIAL
                  })]
                }), !(0, Rd.isMobileApp)() && (0, qp.d)(gd.getPlayerRanks()) && (0, od.jsx)(xp.b, {
                  ref: Id,
                  className: "EverythingMenuBannerDiv",
                  show: qd,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, od.jsx)(rP.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Id
                    },
                    showing: xd && qd,
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
  9242: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(313),
      Nd = kd(9247);

    function Wd(dd, Jd, kd) {
      const Wd = Object.entries(Jd).sort(((dd, Jd) => Jd[1] - dd[1])),
        Pd = (0, pd.yb)(dd);
      Pd.push(dd ? "\n\n" : "\n");
      for (const [Nd, Ld] of Wd) {
        var Zd, gd, Cd;
        const dd = null !== (Zd = null === kd || void 0 === kd || null === (gd = kd[Nd]) || void 0 === gd ? void 0 : gd.icon) && void 0 !== Zd ? Zd : `${Nd} Enchantment`;
        Pd.push({
          icon: dd,
          style: {
            fontSize: "1.5rem"
          }
        }), Pd.push({
          str: `${Nd} ${null!==(Cd=(0,pd.V)(Ld))&&void 0!==Cd?Cd:Ld}\n`
        })
      }
      Pd.push({
        str: "\n"
      });
      for (const [pd, Ld] of Wd) {
        var Kd, od, ld, Qd;
        const dd = null !== (Kd = null === kd || void 0 === kd || null === (od = kd[pd]) || void 0 === od ? void 0 : od.icon) && void 0 !== Kd ? Kd : `${pd} Enchantment`,
          Jd = null !== (ld = null === kd || void 0 === kd || null === (Qd = kd[pd]) || void 0 === Qd ? void 0 : Qd.description) && void 0 !== ld ? ld : (0, Nd.k)(pd);
        Pd.push({
          icon: dd,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Pd.push({
          str: Jd,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Pd.push({
          str: "\n"
        })
      }
      return Pd
    }
  },
  9250: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      c: () => Id,
      e: () => ed,
      f: () => gd,
      g: () => Rd,
      i: () => Kd,
      l: () => ld,
      o: () => Od,
      s: () => od
    });
    var pd = kd(300),
      Nd = kd(610),
      Wd = kd(313),
      Pd = kd(4085),
      Zd = kd(9242);

    function gd(dd, Jd) {
      var kd;
      let {
        player: pd,
        chestOrCreative: Nd
      } = dd;
      var Wd;
      return Jd < pd.length ? null !== (Wd = pd[Jd]) && void 0 !== Wd ? Wd : null : null !== (kd = Nd[Jd - pd.length]) && void 0 !== kd ? kd : null
    }

    function Cd(dd) {
      var Jd;
      return null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : 0
    }

    function Kd(dd) {
      return 0 === dd.button || void 0 === dd.button
    }

    function od(dd) {
      return !!dd.shiftKey
    }

    function ld(dd) {
      return "touches" in dd || "touch" === dd.pointerType || "pen" === dd.pointerType
    }
    const Qd = new Set,
      Ld = 50;

    function Od(dd, Jd) {
      var kd;
      const pd = null === (kd = dd[Jd]) || void 0 === kd ? void 0 : kd.displayName;
      return (0, Nd.I)(pd) ? "string" !== typeof Jd ? "" : (!Qd.has(Jd) && Qd.size < Ld && (Qd.add(Jd), console.warn(`No item called "${Jd}", so its hover shows the name as given`)), Jd) : pd
    }

    function ed(dd, Jd, kd) {
      var gd, Cd, Kd, od, ld, Qd, Ld, ed, Rd, Id, Gd, vd, xd, qd;
      const Bd = dd.attributes,
        sd = null !== (gd = null === (Cd = Jd[dd.name]) || void 0 === Cd ? void 0 : Cd.rootName) && void 0 !== gd ? gd : dd.name,
        ad = null !== (Kd = null !== (od = Bd.customDisplayName) && void 0 !== od ? od : null === (ld = Jd[dd.name]) || void 0 === ld ? void 0 : ld.displayName) && void 0 !== Kd ? Kd : Od(Jd, sd);
      let Md = ad;
      const Fd = null === (Qd = Bd.customAttributes) || void 0 === Qd ? void 0 : Qd.enchantmentTier;
      Fd && (Md = (0, Wd.yb)(ad, {
        colour: Wd.tb[Fd]
      }));
      const Yd = null !== (Ld = null !== (ed = null !== (Rd = function(dd, Jd) {
        var kd;
        if (void 0 === dd || null !== (kd = Jd.customAttributes) && void 0 !== kd && kd.author) return dd;
        const Nd = (0, pd.Wb)(dd);
        return Nd.every((dd => "string" === typeof dd)) ? dd : Nd.map((dd => "string" === typeof dd ? dd : {
          icon: dd.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Bd.customDescription, Bd)) && void 0 !== Rd ? Rd : null === (Id = Jd[dd.name]) || void 0 === Id ? void 0 : Id.description) && void 0 !== ed ? ed : null === (Gd = Jd[sd]) || void 0 === Gd ? void 0 : Gd.description) && void 0 !== Ld ? Ld : "";
      let md = Yd;
      if (null !== (vd = Bd.customAttributes) && void 0 !== vd && vd.enchantments) md = (0, Zd.d)(Yd, Bd.customAttributes.enchantments, Bd.customAttributes.enchantmentData);
      else if (kd[sd]) md = (0, Wd.yb)(Yd), md.push({
        str: "\n"
      }), md.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (xd = Bd.customAttributes) && void 0 !== xd && xd.mobSettings) {
        var bd, Sd;
        const dd = Bd.customAttributes.mobSettings;
        var jd, Xd;
        if (md = [], (0, Nd.I)(Bd.customAttributes.health) || (md.push({
            str: "\n"
          }), md.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: Bd.customAttributes.health.toString()
          }), (0, Nd.I)(dd.maxHealth) || (md.push({
            str: "/"
          }), md.push({
            str: dd.maxHealth.toString()
          }))), !(0, Nd.I)(dd.attackDamage) && dd.attackDamage > 0 && (md.push({
            str: "\n"
          }), md.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: dd.attackDamage.toString()
          })), !(0, Nd.I)(dd.secondaryAttackDamage) && dd.secondaryAttackDamage > 0 && (md.push({
            str: "\n"
          }), md.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: dd.secondaryAttackDamage.toString()
          })), (0, Nd.I)(dd.baseRunningSpeed) || (md.push({
            str: "\n"
          }), md.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: dd.baseRunningSpeed.toFixed(2)
          })), "Saddled" === dd.metaInfo) md.push({
          str: "\n"
        }), md.push({
          str: {
            translationKey: "general:has"
          }
        }), md.push({
          str: " "
        }), md.push({
          icon: null !== (jd = null === (Xd = dd.tameInfo) || void 0 === Xd ? void 0 : Xd.saddleItemName) && void 0 !== jd ? jd : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (md.push({
            str: "\n"
          }), md.push({
            str: "\n"
          }), dd.petInfo && null !== (bd = dd.tameInfo) && void 0 !== bd && bd.supportsFriendship) {
          const Jd = Pd.b.getIconsFromFriendshipPoints(dd.petInfo.friendshipPoints);
          for (const dd of Jd) md.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          md.push({
            str: "\n"
          });
          const kd = Pd.b.getMobHungerLevel(dd.petInfo.lastFedAt);
          for (const dd of Pd.b.hungerLevelIcons[kd]) md.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          md.push({
            str: " "
          }), md.push({
            str: Pd.b.hungerLevelTranslations[kd],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (dd.tameInfo && null !== (Sd = dd.tameInfo) && void 0 !== Sd && Sd.supportsFriendship) {
          var fd, nd;
          let Jd = null !== (fd = dd.tameInfo.likedFoods) && void 0 !== fd ? fd : [];
          md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Superliked]
            }
          }), md.push({
            str: " "
          }), null !== (nd = dd.petInfo) && void 0 !== nd && nd.superlikedFoodKnown ? (md.push({
            icon: dd.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Jd = Jd.filter((Jd => Jd !== dd.petInfo.superlikedFood))) : md.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Liked]
            }
          }), md.push({
            str: " "
          });
          for (const dd of Jd) md.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Neutral]
            }
          }), md.push({
            str: " "
          });
          for (const kd of null !== (Ud = dd.tameInfo.neutralFoods) && void 0 !== Ud ? Ud : []) {
            var Ud;
            md.push({
              icon: kd,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Disliked]
            }
          }), md.push({
            str: " "
          });
          for (const kd of null !== (yd = dd.tameInfo.dislikedFoods) && void 0 !== yd ? yd : []) {
            var yd;
            md.push({
              icon: kd,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        md.length > 0 ? (md.shift(), md.unshift(...(0, Wd.yb)(Yd))) : md = (0, Wd.yb)(Yd)
      }
      return {
        name: Md,
        desc: md,
        fontStyle: null !== (qd = Bd.customAttributes) && void 0 !== qd && qd.author ? "italic" : "normal"
      }
    }

    function Rd(dd, Jd, kd, pd) {
      const Nd = gd(dd, kd),
        Wd = gd(dd, pd);
      if (!Nd) return !1;
      const Pd = Jd[Nd.name].armourReduction,
        Zd = Jd[Wd.name].armourReduction;
      if (Zd === Pd) {
        var Cd, Kd, od, ld;
        const dd = null !== (Cd = null === (Kd = Nd.attributes.customAttributes) || void 0 === Kd ? void 0 : Kd.enchantmentTier) && void 0 !== Cd ? Cd : "Tier 0",
          Jd = null !== (od = null === (ld = Wd.attributes.customAttributes) || void 0 === ld ? void 0 : ld.enchantmentTier) && void 0 !== od ? od : "Tier 0";
        return parseInt(dd.replace("Tier ", "")) >= parseInt(Jd.replace("Tier ", ""))
      }
      return Pd > Zd
    }

    function Id(dd) {
      let Jd;
      if ("number" === typeof dd) {
        const kd = document.querySelector(`[data-inven-idx="${dd}"]`);
        if (!kd) return null;
        Jd = kd.getBoundingClientRect()
      } else Jd = dd.getBoundingClientRect();
      return {
        x: Jd.left + Jd.width / 2,
        y: Jd.top + Jd.height / 2
      }
    }
  },
  9134: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Qd,
      f: () => Ld,
      j: () => Od
    });
    var pd = kd(1461),
      Nd = kd(56),
      Wd = kd(1332),
      Pd = kd(4389),
      Zd = kd(2308),
      gd = kd(1211),
      Cd = kd(95),
      Kd = kd(1968),
      od = kd(1359),
      ld = kd(1103);

    function Qd(dd) {
      let {
        show: Jd,
        onClose: kd
      } = dd;
      const {
        requestedGameNameWithVariation: pd,
        lobbyName: Nd,
        shownLobbyName: Wd
      } = (0, Kd.k)("connectedGame"), gd = (0, Zd.c)(pd, Nd, !1);
      return Cd.featureFlags.canUseInviteLinks && (0, ld.jsx)(Pd.e, {
        show: Jd,
        close: kd,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, ld.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, ld.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, ld.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, ld.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === gd ? (0, ld.jsx)(od.b, {}) : gd, (0, ld.jsx)("br", {}), "Lobby Name: ", Wd, (0, ld.jsx)("br", {}), (0, ld.jsx)("br", {}), (0, ld.jsx)("br", {}), (0, ld.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, ld.jsx)(Ld, {})]
        })
      })
    }

    function Ld() {
      var dd;
      const {
        t: Jd
      } = (0, gd.B)(), kd = null !== (dd = Od(Cd.featureFlags.canUseInviteLinks)) && void 0 !== dd ? dd : "Loading Link...", [Wd, Pd] = (0, Nd.useState)(0), [Zd, Kd] = (0, Nd.useReducer)((dd => dd + 1), 0);
      return (0, Nd.useEffect)((() => {
        const dd = setTimeout((() => {
          Kd()
        }), 1100);
        return () => {
          clearTimeout(dd)
        }
      }), [Wd]), Cd.featureFlags.canUseInviteLinks && (0, ld.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, ld.jsx)("div", {
          className: "InviteLinkInner",
          children: kd
        }), (0, ld.jsx)(pd.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(kd).catch((dd => {
              console.error("Failed to copy invite link:", dd)
            })), Pd(Date.now())
          },
          disabled: Date.now() - Wd < 1e3,
          children: Date.now() - Wd < 1e3 ? Jd("general:copied") : Jd("general:copy")
        })]
      })
    }

    function Od(dd) {
      const [Jd, kd] = (0, Nd.useState)(null);
      return (0, Nd.useEffect)((() => {
        if (!dd) return;
        let Jd = !0;
        return (0, Wd.v)().then((dd => {
          Jd && kd(dd)
        })).catch((dd => {
          console.error("Failed to get invite link:", dd)
        })), () => {
          Jd = !1
        }
      }), [dd]), Jd
    }
  },
  9226: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1968),
      Zd = kd(1103);

    function gd(dd) {
      const Jd = Math.floor(dd / 3600),
        kd = Math.floor(dd % 3600 / 60),
        pd = Math.floor(dd % 60),
        Nd = `${kd.toString().padStart(2,"0")}:${pd.toString().padStart(2,"0")}`;
      return Jd > 0 ? `${Jd}:${Nd}` : Nd
    }
    const Cd = (0, pd.memo)((function(dd) {
      let {
        className: Jd
      } = dd;
      const {
        recording: kd,
        seconds: pd
      } = (0, Pd.k)("replayRecorder");
      return kd ? (0, Zd.jsxs)("div", {
        className: Wd()("RecordingIndicator", Jd),
        children: [(0, Zd.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Zd.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Zd.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: gd(pd)
        })]
      }) : null
    }))
  },
  4770: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ed
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(4498),
      Pd = kd(1211),
      Zd = kd(1059),
      gd = kd(1461),
      Cd = kd(1520),
      Kd = kd(1371),
      od = kd(2418),
      ld = kd(1103);
    const Qd = {
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

    function Ld(dd) {
      let {
        platform: Jd
      } = dd;
      const kd = "youtube" === Jd;
      return (0, ld.jsxs)("span", {
        className: Nd()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: kd
        }),
        children: [kd && (0, ld.jsx)(od.d, {
          variant: "white"
        }), !kd && (0, ld.jsx)(Zd.e, {
          name: Qd[Jd].icon,
          kit: "brands"
        })]
      })
    }

    function Od(dd) {
      let {
        platform: Jd,
        link: kd,
        editable: pd,
        userContext: Nd,
        onLinksUpdated: od
      } = dd;
      const {
        t: Od
      } = (0, Pd.B)(), ed = Qd[Jd];
      if (!kd && !pd) return null;

      function Rd() {
        var dd;
        if (!Nd || !od) return;
        Kd.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: ed.name
            }
          },
          prefixText: Wd.z[Jd],
          placeholderText: "playBloxd",
          initialValue: null !== (dd = null === kd || void 0 === kd ? void 0 : kd.handle) && void 0 !== dd ? dd : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: kd ? "general:remove" : void 0
        }).getResult().then((async dd => {
          if ("notificationTornDown" !== dd && null !== dd) try {
            "submit" === dd.type ? await Cd.d.setSocialLink(Nd, Jd, dd.value) : await Cd.d.clearSocialLink(Nd, Jd), od()
          } catch (kd) {
            console.error("Failed to update social link", kd), Kd.NotificationProvider.showAlertPopup({
              title: kd.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (kd) {
        const dd = `@${kd.handle}`;
        return (0, ld.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: ed.color
          },
          href: kd.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, ld.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, ld.jsx)(Ld, {
              platform: Jd
            }), (0, ld.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, ld.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: dd
              })
            })]
          }), pd && (0, ld.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, gd.P)({
              stopPropagation: !0
            }),
            onClick: dd => {
              dd.stopPropagation(), dd.preventDefault(), Rd()
            },
            children: (0, ld.jsx)(Zd.e, {
              name: "pen-to-square"
            })
          }), !pd && (0, ld.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, ld.jsx)(Zd.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, ld.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: ed.color
        },
        ...(0, gd.P)(),
        onClick: () => {
          Rd()
        },
        children: [(0, ld.jsx)(Ld, {
          platform: Jd
        }), (0, ld.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, ld.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: ed.name
          }), (0, ld.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Od("homePage:profileSocialLinkAdd")
          })]
        }), (0, ld.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, ld.jsx)(Zd.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function ed(dd) {
      let {
        socialLinks: Jd,
        editable: kd = !1,
        userContext: pd,
        onLinksUpdated: Nd
      } = dd;
      if (!kd && 0 === Jd.length) return null;
      const Pd = new Map(Jd.map((dd => [dd.platform, dd]))),
        Zd = kd ? Wd.v : Jd.map((dd => dd.platform));
      return (0, ld.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, ld.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Zd.map((dd => (0, ld.jsx)(Od, {
            platform: dd,
            link: Pd.get(dd),
            editable: kd,
            userContext: pd,
            onLinksUpdated: Nd
          }, dd)))
        })
      })
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  9276: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(56),
      Nd = kd(3451);

    function Wd() {
      const [dd, Jd] = (0, pd.useState)(!1);
      return (0, pd.useLayoutEffect)((() => {
        let dd = !0;
        return (0, Nd.d)().then((() => {
          dd && Jd(!0)
        })), () => {
          dd = !1
        }
      }), []), dd
    }
  },
  6435: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(56),
      Nd = kd(33);

    function Wd(dd, Jd) {
      var kd;
      const [Wd, Pd] = (0, pd.useState)(null !== (kd = Nd.i.getItem(dd)) && void 0 !== kd ? kd : Jd);
      return [Wd, Jd => {
        Nd.i.setItem(dd, Jd), Pd(Jd)
      }]
    }
  },
  9210: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Od,
      i: () => Ld
    });
    kd(9212);
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(9179);

    function Zd(dd, Jd) {
      return Math.max(1, Math.round(dd * Jd))
    }

    function gd(dd, Jd) {
      const kd = Jd * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        pd = function(dd, Jd) {
          if (dd.lines) return Zd(dd.lineThickness, Jd) % 2;
          if (dd.dot) return Zd(dd.dotSize, Jd) % 2;
          return Cd(dd, Jd) % 2
        }(dd, Jd),
        Nd = Kd(dd.lineThickness * kd, pd),
        Wd = Zd(dd.lineLength, kd),
        Pd = Math.round(dd.gap * kd),
        gd = dd.outline > 0 ? Zd(dd.outline, kd) : 0,
        ld = [];
      if (dd.lines && (ld.push({
          x: Nd + Pd,
          y: 0,
          w: Wd,
          h: Nd,
          arm: "right"
        }), ld.push({
          x: -Pd - Wd,
          y: 0,
          w: Wd,
          h: Nd,
          arm: "left"
        }), ld.push({
          x: 0,
          y: Nd + Pd,
          w: Nd,
          h: Wd,
          arm: "down"
        }), dd.tStyle || ld.push({
          x: 0,
          y: -Pd - Wd,
          w: Nd,
          h: Wd,
          arm: "up"
        }), 0 === Pd && ld.push({
          x: 0,
          y: 0,
          w: Nd,
          h: Nd
        })), dd.dot) {
        const Jd = Kd(dd.dotSize * kd, pd),
          Wd = dd.lines && 0 === Pd && dd.dotSize > dd.lineThickness ? Math.max(Jd, Nd + 2) : Jd,
          Zd = (Nd - Wd) / 2;
        ld.push({
          x: Zd,
          y: Zd,
          w: Wd,
          h: Wd
        })
      }
      const Qd = ld.map((dd => ({
        ...dd,
        x: dd.x - gd,
        y: dd.y - gd,
        w: dd.w + 2 * gd,
        h: dd.h + 2 * gd
      })));
      let Ld = null,
        Od = null;
      if (dd.circle) {
        const Jd = Zd(dd.circleThickness, kd),
          Wd = function(dd, Jd) {
            return dd + (dd % 2 === Jd ? 0 : 1)
          }(Cd(dd, kd), pd),
          Pd = (Nd - Wd) / 2;
        Ld = od(Pd, Wd, Jd), gd > 0 && (Od = od(Pd - gd, Wd + 2 * gd, Jd + 2 * gd))
      }
      return {
        cell: Nd,
        fills: ld,
        outlines: gd > 0 ? Qd : [],
        ring: Ld,
        ringOutline: Od
      }
    }

    function Cd(dd, Jd) {
      return Math.round(dd.circleRadius * Jd * 2 + Zd(dd.circleThickness, Jd))
    }

    function Kd(dd, Jd) {
      return Math.max(2 - Jd, 2 * Math.round((dd - Jd) / 2) + Jd)
    }

    function od(dd, Jd, kd) {
      const pd = 2 * kd >= Jd - 1;
      return {
        x: dd,
        y: dd,
        size: Jd,
        border: Math.min(kd, Math.floor(Jd / 2)),
        filled: pd
      }
    }
    var ld = kd(1103);
    const Qd = 1.4;

    function Ld(dd, Jd) {
      return dd && Jd ? `scale(${Qd})` : "scale(1)"
    }

    function Od(dd) {
      return "classic" === dd.settings.style ? (0, ld.jsx)(Id, {
        ...dd
      }) : (0, ld.jsx)(ad, {
        ...dd
      })
    }
    const ed = .125;

    function Rd(dd, Jd) {
      const kd = {};
      if (dd.color !== Pd.g.color && (kd.color = (0, Pd.j)(dd.color)), dd.opacity !== Pd.g.opacity && (kd.opacity = dd.opacity / 100), dd.outline !== Pd.g.outline || dd.outlineColor !== Pd.g.outlineColor) {
        const Jd = dd.outline,
          pd = (0, Pd.j)(dd.outlineColor);
        kd.textShadow = Jd > 0 ? `-${Jd}px 0 ${pd}, 0 ${Jd}px ${pd}, ${Jd}px 0 ${pd}, 0 -${Jd}px ${pd}` : "none"
      }
      if (dd.size !== Pd.g.size) {
        const pd = dd.size / 100;
        kd.fontSize = Jd ? `calc(max(1.3rem, 18px) * ${pd})` : `calc(1.3rem * ${pd})`, kd.marginTop = `-${ed}em`, kd.transformOrigin = `50% calc(50% + ${ed}em)`
      }
      return kd
    }

    function Id(dd) {
      let {
        settings: Jd,
        touch: kd,
        inPreview: pd,
        inEditor: Wd,
        pressed: Pd = !1,
        pressRef: Zd
      } = dd;
      return (0, ld.jsx)("div", {
        className: Nd()("Crosshair", {
          Touch: kd,
          CrosshairInPreview: pd,
          CrosshairInEditor: Wd || pd
        }),
        ref: Zd,
        style: {
          transform: Ld(Pd, Jd.growOnClick),
          ...Rd(Jd, kd)
        },
        children: "+"
      })
    }

    function Gd(dd, Jd) {
      return dd / Jd + "px"
    }

    function vd(dd, Jd, kd, pd) {
      return {
        ...Bd(dd, Jd, kd),
        width: Gd(dd.w, kd),
        height: Gd(dd.h, kd),
        background: pd
      }
    }

    function xd(dd, Jd, kd) {
      return {
        left: Gd(dd.x, Jd),
        top: Gd(dd.y, Jd),
        width: Gd(dd.size, Jd),
        height: Gd(dd.size, Jd),
        borderWidth: Gd(dd.border, Jd),
        borderColor: kd,
        background: dd.filled ? kd : void 0
      }
    }
    const qd = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Bd(dd, Jd, kd) {
      const [pd, Nd] = dd.arm ? qd[dd.arm] : [0, 0], Wd = Math.round(Jd * kd);
      return {
        left: Gd(dd.x + pd * Wd, kd),
        top: Gd(dd.y + Nd * Wd, kd)
      }
    }

    function sd(dd) {
      return dd.arm ? {
        "data-arm": dd.arm,
        "data-x": dd.x,
        "data-y": dd.y
      } : {}
    }

    function ad(dd) {
      let {
        settings: Jd,
        inPreview: kd,
        inEditor: pd,
        pressed: Zd = !1,
        spread: Cd,
        spreadRef: Kd
      } = dd;
      const od = (0, Wd.useRef)(null),
        {
          box: Ld,
          dpr: Od
        } = function(dd) {
          const [Jd, kd] = (0, Wd.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Wd.useLayoutEffect)((() => {
            const Jd = dd.current;
            if (!Jd) return;
            const pd = () => {
              const dd = Jd.getBoundingClientRect(),
                pd = window.devicePixelRatio || 1;
              kd((Jd => Jd.dpr === pd && Jd.box.left === dd.left && Jd.box.top === dd.top && Jd.box.width === dd.width && Jd.box.height === dd.height ? Jd : {
                box: {
                  left: dd.left,
                  top: dd.top,
                  width: dd.width,
                  height: dd.height
                },
                dpr: pd
              }))
            };
            pd();
            const Nd = new ResizeObserver(pd);
            return Nd.observe(Jd), window.addEventListener("resize", pd), window.addEventListener("scroll", pd, !0), () => {
              Nd.disconnect(), window.removeEventListener("resize", pd), window.removeEventListener("scroll", pd, !0)
            }
          }), [dd]), Jd
        }(od),
        ed = (0, Wd.useRef)(Od);
      ed.current = Od;
      const Rd = gd(Jd, Od, Zd && Jd.growOnClick ? Qd : 1),
        Id = function(dd, Jd, kd) {
          const pd = Math.round((dd.left + dd.width / 2) * kd - Jd / 2),
            Nd = Math.round((dd.top + dd.height / 2) * kd - Jd / 2);
          return {
            x: pd / kd - dd.left,
            y: Nd / kd - dd.top
          }
        }(Ld, Rd.cell, Od),
        Gd = (0, Pd.j)(Jd.color),
        qd = (0, Pd.j)(Jd.outlineColor),
        ad = (0, Wd.useRef)(0);
      (0, Wd.useLayoutEffect)((() => {
        if (Kd) return Kd.current = dd => {
          var Jd;
          ad.current = dd, null === (Jd = od.current) || void 0 === Jd || Jd.querySelectorAll("[data-arm]").forEach((Jd => {
            Object.assign(Jd.style, Bd(function(dd) {
              return {
                x: Number(dd.dataset.x),
                y: Number(dd.dataset.y),
                arm: dd.dataset.arm
              }
            }(Jd), dd, ed.current))
          }))
        }, () => {
          Kd.current = null
        }
      }), [Kd]);
      const Md = null !== Cd && void 0 !== Cd ? Cd : ad.current;
      return (0, ld.jsx)("div", {
        ref: od,
        className: Nd()("CrosshairShapes", {
          CrosshairInPreview: kd,
          CrosshairInEditor: pd || kd,
          CrosshairSpreads: void 0 !== Kd
        }),
        children: (0, ld.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Id.x,
            top: Id.y,
            opacity: Jd.opacity / 100
          },
          children: (0, ld.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Rd.ringOutline && (0, ld.jsx)("div", {
              className: "CrosshairRing",
              style: xd(Rd.ringOutline, Od, qd)
            }), Rd.outlines.map(((dd, Jd) => (0, ld.jsx)("div", {
              className: "CrosshairPart",
              ...sd(dd),
              style: vd(dd, Md, Od, qd)
            }, `o${Jd}`))), Rd.ring && (0, ld.jsx)("div", {
              className: "CrosshairRing",
              style: xd(Rd.ring, Od, Gd)
            }), Rd.fills.map(((dd, Jd) => (0, ld.jsx)("div", {
              className: "CrosshairPart",
              ...sd(dd),
              style: vd(dd, Md, Od, Gd)
            }, `f${Jd}`)))]
          })
        })
      })
    }
  },
  9220: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      f: () => ed,
      j: () => Od
    });
    var pd = kd(9179);
    const Nd = "XH1-",
      Wd = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Pd = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Zd = ["color", "outlineColor"],
      gd = 1 + 3 * Zd.length + Pd.length + 1,
      Cd = Math.ceil(8 * gd / Math.log2(62)),
      Kd = Nd.length + Cd;

    function od(dd) {
      let Jd = 90;
      for (const kd of dd) Jd = 31 * Jd + kd & 255;
      return Jd
    }
    const ld = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Qd = BigInt(ld.length);

    function Ld(dd, Jd) {
      let kd = 0n;
      for (const Nd of dd) {
        const dd = ld.indexOf(Nd);
        if (dd < 0) return null;
        kd = kd * Qd + BigInt(dd)
      }
      if (kd >> BigInt(8 * Jd) !== 0n) return null;
      const pd = [];
      for (let Nd = 0; Nd < Jd; Nd++) pd.unshift(Number(0xffn & kd)), kd >>= 8n;
      return pd
    }

    function Od(dd) {
      let Jd = "shapes" === dd.style ? 1 : 0;
      Wd.forEach(((kd, pd) => {
        dd[kd] && (Jd |= 1 << pd + 1)
      }));
      const kd = [Jd];
      for (const Nd of Zd) {
        const Jd = (0, pd.i)(Nd, dd[Nd]);
        kd.push(Jd >> 16 & 255, Jd >> 8 & 255, 255 & Jd)
      }
      for (const Nd of Pd) {
        const {
          min: Jd,
          step: Wd
        } = pd.e[Nd];
        kd.push(Math.round(((0, pd.i)(Nd, dd[Nd]) - Jd) / Wd))
      }
      return kd.push(od(kd)), Nd + function(dd, Jd) {
        let kd = 0n;
        for (const Nd of dd) kd = kd << 8n | BigInt(Nd);
        let pd = "";
        for (let Nd = 0; Nd < Jd; Nd++) pd = ld[Number(kd % Qd)] + pd, kd /= Qd;
        return pd
      }(kd, Cd)
    }

    function ed(dd) {
      for (const Jd of dd.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Cd}})`, "gi"))) {
        const dd = Rd(Ld(Jd[1], gd));
        if (dd) return dd
      }
      return null
    }

    function Rd(dd) {
      if (!dd || dd.length !== gd || od(dd.slice(0, -1)) !== dd[dd.length - 1]) return null;
      const Jd = dd[0],
        kd = {
          ...pd.g,
          style: 1 & Jd ? "shapes" : "classic"
        };
      Wd.forEach(((dd, pd) => {
        kd[dd] = 0 !== (Jd & 1 << pd + 1)
      }));
      let Nd = 1;
      for (const pd of Zd) kd[pd] = dd[Nd] << 16 | dd[Nd + 1] << 8 | dd[Nd + 2], Nd += 3;
      for (const Wd of Pd) {
        const {
          min: Jd,
          step: Pd
        } = pd.e[Wd];
        kd[Wd] = (0, pd.i)(Wd, Jd + dd[Nd] * Pd), Nd++
      }
      return kd
    }
  },
  9179: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      g: () => Nd,
      i: () => Wd,
      j: () => Cd,
      k: () => gd,
      m: () => Kd,
      n: () => Zd,
      o: () => Pd
    });
    const pd = {
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
      Nd = Object.freeze({
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

    function Wd(dd, Jd) {
      var kd;
      const {
        min: Wd,
        max: Pd,
        step: Zd
      } = pd[dd];
      if (!Number.isFinite(Jd)) return Nd[dd];
      const gd = (null !== (kd = String(Zd).split(".")[1]) && void 0 !== kd ? kd : "").length,
        Cd = Number((Math.round(Jd / Zd) * Zd).toFixed(gd));
      return Math.min(Pd, Math.max(Wd, Cd))
    }

    function Pd(dd, Jd, kd) {
      const pd = "number" === typeof kd ? Wd(Jd, kd) : kd;
      return {
        ...dd,
        [Jd]: pd
      }
    }

    function Zd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Nd).every((pd => kd.includes(pd) || dd[pd] === Jd[pd]))
    }

    function gd(dd) {
      return Zd(dd, Nd)
    }

    function Cd(dd) {
      return `#${dd.toString(16).padStart(6,"0")}`
    }

    function Kd(dd) {
      const Jd = /^#?([0-9a-f]{6})$/i.exec(dd.trim());
      return Jd ? parseInt(Jd[1], 16) : null
    }
  },
  9222: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => od,
      h: () => ld
    });
    var pd = kd(56),
      Nd = kd(33),
      Wd = kd(9220),
      Pd = kd(9179);
    const Zd = "crosshairCode";
    let gd = null;
    const Cd = new Set;

    function Kd() {
      if (null === gd) {
        var dd;
        const Jd = Nd.i.getItem(Zd);
        gd = null !== (dd = "string" === typeof Jd ? (0, Wd.f)(Jd) : null) && void 0 !== dd ? dd : Pd.g
      }
      return gd
    }

    function od(dd) {
      gd = dd, (0, Pd.k)(dd) ? Nd.i.removeItem(Zd) : Nd.i.setItem(Zd, (0, Wd.j)(dd));
      for (const Jd of Cd) Jd()
    }

    function ld() {
      const [dd, Jd] = (0, pd.useState)(Kd);
      return (0, pd.useEffect)((() => {
        const dd = () => {
          Jd(Kd())
        };
        return dd(), kd = dd, Cd.add(kd), () => {
          Cd.delete(kd)
        };
        var kd
      }), []), dd
    }
  },
  8815: (dd, Jd, kd) => {
    function pd(dd) {
      return {
        x: (dd.left + dd.right) / 2,
        y: (dd.top + dd.bottom) / 2
      }
    }

    function Nd(dd) {
      return 0 === dd.length ? null : dd.reduce(((dd, Jd) => ({
        left: Math.min(dd.left, Jd.left),
        top: Math.min(dd.top, Jd.top),
        right: Math.max(dd.right, Jd.right),
        bottom: Math.max(dd.bottom, Jd.bottom)
      })))
    }

    function Wd(dd, Jd) {
      const kd = Math.max(0, (Jd - (dd.right - dd.left)) / 2),
        pd = Math.max(0, (Jd - (dd.bottom - dd.top)) / 2);
      return {
        left: dd.left - kd,
        top: dd.top - pd,
        right: dd.right + kd,
        bottom: dd.bottom + pd
      }
    }

    function Pd(dd, Jd) {
      return Jd.x >= dd.left && Jd.x <= dd.right && Jd.y >= dd.top && Jd.y <= dd.bottom
    }

    function Zd(dd, Jd, kd) {
      let Nd = null,
        Zd = 1 / 0;
      for (const {
          id: pd,
          box: Wd
        }
        of Jd) {
        const Jd = (Wd.right - Wd.left) * (Wd.bottom - Wd.top);
        Pd(Wd, dd) && Jd < Zd && (Zd = Jd, Nd = pd)
      }
      if (null !== Nd) return Nd;
      let gd = 1 / 0;
      for (const {
          id: Cd,
          box: Kd
        }
        of Jd) {
        if (!Pd(Wd(Kd, kd), dd)) continue;
        const Jd = pd(Kd),
          Zd = Math.hypot(dd.x - Jd.x, dd.y - Jd.y);
        Zd < gd && (gd = Zd, Nd = Cd)
      }
      return Nd
    }

    function gd(dd, Jd, kd) {
      return {
        left: kd.left,
        top: kd.top,
        right: dd - kd.right,
        bottom: Jd - kd.bottom
      }
    }

    function Cd(dd, Jd, kd, pd) {
      const Nd = (dd, Jd, kd) => Math.max(Math.min(Jd, 0), Math.min(Math.max(kd, 0), dd));
      return {
        x: Nd(Jd, pd.left - dd.left, pd.right - dd.right),
        y: Nd(kd, pd.top - dd.top, pd.bottom - dd.bottom)
      }
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      const Wd = dd.dx * pd + Jd,
        Pd = dd.dy * Nd + kd,
        Zd = dd => Math.max(-1, Math.min(1, dd));
      return {
        dx: Zd(Wd / pd),
        dy: Zd(Pd / Nd)
      }
    }

    function od(dd, Jd, kd, pd) {
      return Jd <= 0 || kd <= 0 ? 1 : Math.max(.05, Math.min(1, dd / Jd, pd / kd))
    }

    function ld(dd, Jd, kd) {
      return Math.min(dd.right, Jd.right) - Math.max(dd.left, Jd.left) > kd && Math.min(dd.bottom, Jd.bottom) - Math.max(dd.top, Jd.top) > kd
    }

    function Qd(dd, Jd) {
      const kd = (dd, Jd, kd, pd) => Jd - dd > pd - kd ? kd - dd > Jd - pd ? pd - Jd : kd - dd : dd < kd ? kd - dd : Jd > pd ? pd - Jd : 0;
      return {
        x: kd(dd.left, dd.right, Jd.left, Jd.right),
        y: kd(dd.top, dd.bottom, Jd.top, Jd.bottom)
      }
    }

    function Ld(dd, Jd) {
      let {
        avoid: kd = null,
        bounds: pd = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Nd = 0, Wd = 1 / 0;
      return dd.forEach(((dd, Pd) => {
        const Zd = Jd.filter((Jd => ld(dd, Jd, 0))).length,
          gd = null !== pd && (dd.left < pd.left || dd.top < pd.top || dd.right > pd.right || dd.bottom > pd.bottom),
          Cd = Zd + (kd && ld(dd, kd, 0) ? 1e3 : 0) + (gd ? 1e6 : 0);
        Cd < Wd && (Nd = Pd, Wd = Cd)
      })), Nd
    }
    kd.d(Jd, {
      A: () => Qd,
      B: () => Nd,
      c: () => pd,
      g: () => Pd,
      i: () => ld,
      k: () => Cd,
      o: () => Wd,
      p: () => Ld,
      s: () => Kd,
      u: () => Zd,
      v: () => od,
      w: () => gd
    })
  },
  9176: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      i: () => Nd
    });
    var pd = kd(22);

    function Nd(dd, Jd) {
      return dd && !Jd
    }

    function Wd() {
      return Nd(pd.d.get("isTouchScreen"), pd.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8565: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      d: () => pd
    });
    const pd = "controllerOpenKeyboard",
      Nd = "controllerKeyboardVisible"
  },
  9125: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    const pd = new Set(["chunkBorders"])
  },
  9117: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ALL_DEV_TOOLS: () => Pd,
      coreDevTools: () => Cd,
      devTools: () => gd
    });
    var pd = kd(626),
      Nd = kd(1320),
      Wd = kd(9125);
    const Pd = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Zd() {
      const {
        noaDevTools: dd
      } = await kd.e(231).then((() => kd(41062)));
      return dd
    }
    const gd = new class {
        constructor() {
          this.loadHost = Zd, this.tools = Pd
        }
        setHost(dd) {
          this.tools = null === dd ? Pd : dd.tools, this.loadHost = null === dd ? Zd : async () => dd
        }
        supports(dd) {
          return this.tools.has(dd)
        }
        async downloadScene(dd, Jd) {
          const kd = await this.loadHost();
          await kd.downloadScene(dd, Jd)
        }
        async setAmbientLightIntensity(dd) {
          const Jd = await this.loadHost();
          await Jd.setAmbientLightIntensity(dd)
        }
      },
      Cd = {
        tools: Wd.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    pd.x && gd.setHost(Cd), (0, Nd.r)((() => {
      gd.setHost(Cd)
    }))
  },
  9274: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      d: () => Nd,
      e: () => Kd
    });
    var pd = kd(1598);

    function Nd(dd) {
      var Jd;
      return {
        ...Pd.store,
        yaw: Pd.store.yaw + (null !== (Jd = pd.c[dd].previewYaw) && void 0 !== Jd ? Jd : 0)
      }
    }
    const Wd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Pd = {
        player: Wd,
        store: {
          ...Wd,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Zd(dd, Jd) {
      dd instanceof Promise ? dd.then(Jd).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Jd(dd)
    }
    class gd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Jd;
        this.view = dd, null === (Jd = this.opened) || void 0 === Jd || Jd.show(dd)
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Cd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Jd) {
        var kd;
        null === (kd = this.opened) || void 0 === kd || kd.setCosmetic(dd, Jd)
      }
      playEmote(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.playEmote(dd)
      }
      setOrbit(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Jd;
        await this.ready, await (null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.untilDrawn(dd))
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const Kd = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new gd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new gd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new gd(this.current().openMobLineup(dd))
      }
      openCharacter(dd, Jd) {
        return new Cd(this.current().openCharacter(dd, Jd))
      }
    }
  },
  9272: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd.c,
      f: () => pd.d,
      j: () => pd.e
    });
    var pd = kd(9274);
    class Nd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Wd {
      constructor() {
        this.mobScene = new Nd((() => Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(246), kd.e(95), kd.e(247), kd.e(73), kd.e(72), kd.e(244), kd.e(71), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(265), kd.e(223), kd.e(238), kd.e(249), kd.e(252), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(155)]).then((() => kd(41071))))), this.characterScene = new Nd((() => Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(246), kd.e(95), kd.e(247), kd.e(73), kd.e(72), kd.e(244), kd.e(71), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(265), kd.e(223), kd.e(238), kd.e(249), kd.e(252), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(154)]).then((() => kd(41150)))))
      }
      openMob(dd) {
        return this.mobScene.run((Jd => Jd.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Jd => Jd.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Jd => Jd.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Jd) {
        return this.characterScene.run((kd => kd.openCharacterPreview(dd, Jd)))
      }
    }
    pd.e.setDefaultHost((() => new Wd))
  },
  6534: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd
    });
    var pd = kd(33);
    const Nd = "shaderPack";
    async function Wd() {
      var dd;
      let Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await pd.f.getItem(Nd, Jd)) && void 0 !== dd ? dd : null
    }
  },
  9151: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return dd && !Jd
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  9169: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(1078);

    function Nd() {
      var dd, Jd;
      return null !== (dd = null === (Jd = screen.orientation) || void 0 === Jd ? void 0 : Jd.type) && void 0 !== dd ? dd : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Wd = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Nd() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Nd(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, pd.ZO)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const dd of this.resizers) dd()
          }
        }), 1e3)
      }
      heldSizer(dd) {
        let Jd = !1;
        return () => {
          if (Jd && this.isHeld()) return null;
          const kd = dd();
          return Jd ||= null !== kd, kd
        }
      }
      onRelease(dd) {
        return this.resizers.add(dd), () => {
          this.resizers.delete(dd)
        }
      }
    }
  },
  8809: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd,
      d: () => gd
    });
    var pd = kd(22),
      Nd = kd(1348),
      Wd = kd(95);
    const Pd = {
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

    function Zd() {
      return (0, Wd.isMobile)() && "function" === typeof navigator.vibrate
    }
    const gd = new class {
      constructor(dd) {
        this.deps = dd, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(dd, Jd) {
        var kd;
        if (!this.deps.enabled()) return;
        const pd = Pd[dd],
          Nd = null !== Jd && void 0 !== Jd ? Jd : pd.pattern;
        if (null === Nd) return void console.warn("No vibration pattern for", dd);
        const Wd = this.deps.now();
        Wd - this.lastAnyAt < 40 && pd.priority < this.playingPriority || Wd - (null !== (kd = this.lastAt.get(dd)) && void 0 !== kd ? kd : -1 / 0) < pd.minGapMs || Wd < this.playingUntil && pd.priority < this.playingPriority || (this.lastAt.set(dd, Wd), this.lastAnyAt = Wd, this.playingUntil = Wd + Nd.reduce(((dd, Jd) => dd + Jd), 0), this.playingPriority = pd.priority, this.deps.vibrate(Nd))
      }
    }({
      vibrate: dd => {
        navigator.vibrate([...dd])
      },
      now: () => performance.now(),
      enabled: () => Zd() && pd.d.get("isTouchScreen") && pd.d.get("clientEscMenuOptions").vibration && !(0, Nd.g)()
    })
  },
  9142: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      e: () => ld
    });
    var pd = kd(22),
      Nd = kd(1726),
      Wd = kd(33),
      Pd = kd(1371),
      Zd = kd(3546),
      gd = kd(1492),
      Cd = kd(1404);
    const Kd = 2592e5,
      od = "notificationOptInLastPromptedAt";
    async function ld() {
      var dd;
      const Jd = await Qd();
      if (null === Jd) return;
      const kd = null !== (dd = Wd.i.getItem(od)) && void 0 !== dd ? dd : 0;
      if (Date.now() - kd < Kd) return;
      if ((0, Cd.d)()) return;
      const pd = await Pd.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Nd.e.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== pd && (Wd.i.setItem(od, Date.now()), (0, gd.reportAnalyticsClick)({
        id: !0 === pd ? "push.allow" : "push.deny",
        value: Nd.e.supports("notifications") ? "app" : "browser"
      }), !0 === pd && Jd().catch((dd => {
        console.error("Failed to ask for push notifications:", dd)
      })))
    }
    async function Qd() {
      return await Nd.e.ready, Nd.e.supports("notifications") ? pd.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Nd.e.request("notifications.requestPermission", {}).then((dd => {
          let {
            canAsk: Jd
          } = dd;
          pd.d.set({
            mobilePushNotificationsCanAsk: Jd
          })
        }), (dd => {
          console.error("The app couldn't ask for push notifications:", dd)
        }))
      }: null: await Zd.b.canAsk() ? () => Zd.b.requestPermission() : null
    }
  },
  9153: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      e: () => gd
    });
    var pd = kd(22);
    const Nd = 24,
      Wd = "farNametags",
      Pd = 1e5;

    function Zd() {
      var dd;
      return null === (dd = pd.d.get("showDistantNametags")) || void 0 === dd || dd
    }

    function gd() {
      var dd;
      return null !== (dd = function() {
        const dd = new URLSearchParams(window.location.search).get(Wd),
          Jd = null === dd || "" === dd ? NaN : Number(dd);
        return Number.isFinite(Jd) && Jd >= 0 ? Math.min(Jd, Pd) : null
      }()) && void 0 !== dd ? dd : Zd() ? 0 : Nd
    }
  },
  9257: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      h: () => Pd
    });
    const pd = [{
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

    function Nd(dd) {
      let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof dd) {
        if (!Number.isFinite(dd)) return "0";
        if (Math.abs(dd) < 100) {
          const Jd = dd < 0 ? "-" : "",
            kd = Math.abs(dd);
          return kd >= 10 ? `${Jd}${kd.toFixed(1).replace(/\.0$/,"")}` : `${Jd}${kd.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Jd = BigInt(Math.floor(dd))
      } else Jd = dd;
      const Nd = Jd < 0n ? -Jd : Jd,
        Wd = Jd < 0n ? "-" : "",
        Pd = Nd.toString();
      if (Pd.length <= kd) return `${Wd}${Pd}`;
      const Zd = 3 * Math.floor((Pd.length - 1) / 3);
      if (Zd < 3) return `${Wd}${Pd}`;
      if (Zd > 3 * pd.length) {
        const dd = Pd[0],
          Jd = Pd.slice(1, 3).replace(/0+$/, "");
        return `${Wd}${Jd?`${dd}.${Jd}`:dd}e${Pd.length-1}`
      }
      const {
        threshold: gd,
        suffix: Cd
      } = pd[pd.length - Zd / 3], Kd = Nd / gd, od = Number(1000n * (Nd % gd) / gd), ld = Number(Kd) + od / 1e3;
      let Qd;
      return Qd = ld >= 100 ? Math.floor(ld).toString() : ld >= 10 ? ld.toFixed(1).replace(/\.0$/, "") : ld.toFixed(2).replace(/\.?0+$/, ""), `${Wd}${Qd}${Cd}`
    }
    const Wd = pd.map((dd => {
      let {
        threshold: Jd,
        suffix: kd
      } = dd;
      return {
        threshold: Number(Jd),
        suffix: kd
      }
    })).filter((dd => {
      let {
        threshold: Jd
      } = dd;
      return Number.isFinite(Jd)
    }));

    function Pd(dd) {
      const Jd = Math.abs(dd),
        kd = dd < 0 ? "-" : "";
      for (const {
          threshold: pd,
          suffix: Nd
        }
        of Wd)
        if (Jd >= pd) {
          const dd = Jd / pd;
          if (dd >= 1e3) return `${kd}${Jd.toExponential(2).replace("e+","e")}`;
          let Wd;
          return Wd = dd >= 100 ? Math.floor(dd).toString() : dd >= 10 ? dd.toFixed(1).replace(/\.0$/, "") : dd.toFixed(2).replace(/\.?0+$/, ""), `${kd}${Wd}${Nd}`
        } return `${kd}${Jd}`
    }
  },
  9247: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd,
      f: () => ld,
      i: () => od,
      k: () => Pd,
      m: () => Cd,
      p: () => gd
    });
    var pd = kd(313);
    const Nd = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Wd = {
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

    function Pd(dd) {
      var Jd;
      return null !== (Jd = Wd[dd]) && void 0 !== Jd ? Jd : {
        translationKey: ""
      }
    }
    const Zd = {
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

    function gd(dd) {
      return Nd.includes(dd)
    }

    function Cd(dd) {
      var Jd;
      return !0 === (null === dd || void 0 === dd || null === (Jd = dd.customAttributes) || void 0 === Jd ? void 0 : Jd.cannotEnchant)
    }

    function Kd(dd, Jd) {
      const {
        max: kd
      } = Zd[dd].at(-1);
      return Jd <= kd
    }

    function od(dd) {
      const Jd = Math.sin(dd / 80),
        kd = dd => {
          if (dd <= 0) return 0;
          if (dd > 1) return 1;
          let Jd = 0;
          const kd = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let pd = 0; pd < kd.length; pd++) {
            Jd += (pd % 2 === 0 ? 1 : -1) * kd[pd] * Math.pow(dd, 2 + pd) / (2 + pd)
          }
          return 72 * Jd
        },
        pd = .3 - .78 * Jd,
        Nd = .5 - .78 * Jd,
        Wd = .6 - .7 * Jd,
        Pd = .8 - .6 * Jd;
      let Zd = kd(pd),
        gd = kd(Nd) - Zd,
        Cd = kd(Wd) - gd - Zd,
        Kd = kd(Pd) - Cd - gd - Zd;
      pd < .041 && (gd /= 1 - Zd, Cd /= 1 - Zd, Kd /= 1 - Zd, Zd = 0), Nd < .041 && (Zd /= 1 - gd, Cd /= 1 - gd, Kd /= 1 - gd, gd = 0), Wd < .041 && (Zd /= 1 - Cd, gd /= 1 - Cd, Kd /= 1 - Cd, Cd = 0), Pd < .041 && (Zd /= 1 - Kd, gd /= 1 - Kd, Cd /= 1 - Kd, Kd = 0);
      return {
        commonProb: Zd,
        uncommonProb: gd,
        rareProb: Cd,
        epicProb: Kd,
        legendaryProb: 1 - (Kd + Cd + gd + Zd)
      }
    }

    function ld(dd, Jd) {
      const {
        min: kd,
        max: Nd
      } = Zd[dd][Jd], Wd = pd.b.sampleUniformIntDistribution(kd, Nd, "includeMax");
      return {
        ...od(Wd),
        level: Wd
      }
    }
  },
  8681: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return !dd.hidden && (Jd || !dd.isRewardedAd)
    }

    function Nd(dd) {
      return "object" === typeof dd ? dd.option : dd
    }

    function Wd(dd, Jd) {
      var kd;
      if ("dropdown" === (null === (kd = dd.userInput) || void 0 === kd ? void 0 : kd.type) && "object" === typeof dd.userInput.dropdownOptions[0]) {
        for (const kd of dd.userInput.dropdownOptions)
          if (Nd(kd) === Jd) return "object" === typeof kd ? kd.cost : dd.cost;
        console.error("Didn't find matching option for dropdown item. Item:", dd, "input:", Jd)
      }
      return dd.cost
    }

    function Pd(dd, Jd, kd) {
      var pd;
      const Nd = null !== (pd = kd.excludedPlayers) && void 0 !== pd ? pd : [Jd];
      return dd.filter((dd => !Nd.includes(dd)))
    }
    kd.d(Jd, {
      d: () => Wd,
      h: () => Nd,
      i: () => Pd,
      k: () => pd
    })
  },
  9212: () => {},
  9184: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9193: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9201: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9203: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);